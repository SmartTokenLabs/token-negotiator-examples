import React, {useState, useEffect} from "react";
import LogoCard from "./LogoCard";
import RoomCard from "./RoomCard";
import TokenNotificationCard from "./TokenNotificationCard";
import Typography from "@material-ui/core/Typography";
import BookingDate from "./BookingDate";
import {Client} from "@tokenscript/token-negotiator";
import "./App.css";
import config from "../../tokenConfig.json";
import {updateTokenConfig} from "../../environment";
import "@tokenscript/token-negotiator/dist/theme/style.css";
import Button from "@material-ui/core/Button";

// mock data e.g. server side hotel room price database
const mockRoomData = [
  {
    type: "Deluxe Room",
    price: 200000,
    frequency: "per night",
    image: "./hotel_3.jpg"
  },
  {
    type: "King Suite",
    price: 320000,
    frequency: "per night",
    image: "./hotel_2.png"
  },
  {
    type: "Superior Deluxe Suite",
    price: 250030,
    frequency: "per night",
    image: "./hotel_1.jpg"
  }
];

let devonConfig = updateTokenConfig(config);

let tokenIssuers = [devonConfig];

const params = new URLSearchParams(document.location.hash.substring(1));
const redirectMode = params.has("redirectMode")
  ? params.get("redirectMode")
  : undefined;

window.negotiator = new Client({
  type: "passive",
  issuers: tokenIssuers,
  offChainRedirectMode: redirectMode
});

function App() {
  // devcont tickets (react state of tokens)
  let [tokens, setTokens] = useState([]);

  let [tokenProofData, setTokenProofData] = useState({
    proof: null
  });

  // react state of token specical offer
  let [freeShuttle, setFreeShuttle] = useState(false);

  // react state of hotel room data
  let [roomTypesData, setRoomTypesData] = useState([]);

  // selected token instance to apply discount, with the discount value on hotel booking.
  let [discount, setDiscount] = useState({
    value: undefined,
    tokenInstance: []
  });

  let [selectedPendingTokenInstances, setSelectedPendingTokenInstances] =
    useState([]);

  let [retryButton, setRetryButton] = useState("");

  useEffect(() => {
    window.negotiator.on("tokens-selected", (issuerTokens) => {
      let tokens = [];
      if (issuerTokens) {
        tokenIssuers.forEach((issuer) => {
          tokens.push(
            ...issuerTokens.selectedTokens[issuer.collectionID].tokens
          );
        });
      }
      setTokens(tokens);
      if (tokens.length > 0) {
        setFreeShuttle(true);
      }
    });
    window.negotiator.on("token-proof", (result) => {
      console.log("token proof", result);
      if (result.error) return;
      if (result.issuers) {
        setTokenProofData({
          proof: result.issuers
        });
        setDiscount({
          value: 5,
          tokenInstance: selectedPendingTokenInstances[0]
        });
      } else {
        // legacy version output.
        setTokenProofData({proof: result.data});
        if (result.error === null) {
          setDiscount({
            value: 5,
            tokenInstance: result.data
          });
        }
      }
      alert("Your discount has been applied");
    });
  }, [selectedPendingTokenInstances, discount]);

  window.negotiator.on("error", ({error, issuer}) => {
    if (error.name === "POPUP_BLOCKED") {
      setRetryButton("Popup blocked");
    } else if (error.name === "USER_ABORT") {
      setRetryButton("Action aborted");
    } else {
      console.log(error);
      setRetryButton("An error occurred loading tokens");
    }
  });

  // async example of initial hotel data loaded from source
  const getRoomTypesData = () => {
    return mockRoomData;
  };

  // When a ticket is present and user applies it, the discount will be shown
  const applyDiscountTicket = async (ticket, roomType) => {
    // tickets selected, but owner is not yet authenticated.
    let updatedTicketSelection = [];
    if (selectedPendingTokenInstances?.length) {
      let wasMatch = false;
      selectedPendingTokenInstances?.forEach((storedTicket) => {
        // add tickets that were not a match back in place.
        if (storedTicket.tokenId === ticket.tokenId) {
          wasMatch = true;
        }
        if (storedTicket.tokenId !== ticket.tokenId) {
          updatedTicketSelection.push(storedTicket);
        }
      });
      if (!wasMatch) updatedTicketSelection.push(ticket);
    } else {
      updatedTicketSelection.push(ticket);
    }
    setSelectedPendingTokenInstances(updatedTicketSelection);
    localStorage.setItem("booking-room-type", roomType);
  };

  const applyDiscount = async () => {
    if (selectedPendingTokenInstances?.length) {
      if (selectedPendingTokenInstances.length === 1) {
        window.negotiator.authenticate({
          issuer: config.collectionID,
          unsignedToken: selectedPendingTokenInstances[0]
        });
      } else {
        const multiInput = selectedPendingTokenInstances.map(
          (unsignedToken) => {
            return {
              issuer: config.collectionID,
              unsignedToken
            };
          }
        );
        window.negotiator.authenticate(multiInput);
      }
    } else {
      setDiscount({
        value: undefined,
        tokenInstance: []
      });
    }
  };

  // This is the example at which the hotel would begin a hotel room booking transaction.
  const book = async (formData) => {
    const checkoutEndPoint =
      "https://raw.githubusercontent.com/TokenScript/token-negotiator-examples/main/mock-backend-payment-process-request.json?";
    const params = {
      tokenProof: JSON.stringify(tokenProofData),
      bookingData: {formData}
    };
    fetch(checkoutEndPoint + new URLSearchParams(params)).then((_data) => {
      if (
        tokenProofData &&
        (tokenProofData.proof || tokenProofData.issuersValidated)
      ) {
        alert(
          "Transaction Complete with token discount, we look forward to your stay with us!"
        );
      } else {
        alert(
          "Transaction Complete with no discount, we look forward to your stay with us!"
        );
      }
    });
  };

  useEffect(() => {
    // assign room data to react local state
    setRoomTypesData(getRoomTypesData());
    //
    window.negotiator.negotiate();
  }, []);

  return (
    <div>
      <div className="header">
        <LogoCard title={"Hotel Bogota"} />
        <TokenNotificationCard
          tokensNumber={tokens.length}
          refreshTokens={() => {
            window.negotiator.negotiate(null, false, true);
          }}
        />
      </div>
      <BookingDate />
      <div className="roomCardsContainer">
        {roomTypesData.map((room, index) => {
          return (
            <RoomCard
              key={index}
              room={room}
              applyDiscount={applyDiscount}
              applyDiscountTicket={applyDiscountTicket}
              discount={discount}
              tokens={tokens}
              book={book}
              selectedPendingTokenInstances={selectedPendingTokenInstances}
            />
          );
        })}
      </div>
      {freeShuttle && (
        <div>
          <Typography
            style={{padding: "20px"}}
            className="applyDiscountCopyContainer"
            gutterBottom
            variant="body2"
            component="p"
          >
            Free shuttle service available to you as a Devcon Ticket holder!
            Enjoy the event.
          </Typography>
        </div>
      )}
      {retryButton && (
        <div style={{color: "#f50057", textAlign: "center"}}>
          <Typography gutterBottom variant="body2" component="h4">
            {retryButton}
          </Typography>
          <Button
            style={{background: "#fff8f8"}}
            onClick={() => {
              setRetryButton("");
              window.negotiator.negotiate();
            }}
          >
            Retry
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
