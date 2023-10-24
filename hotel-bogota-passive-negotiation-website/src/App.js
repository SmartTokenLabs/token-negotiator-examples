import React, { useState, useEffect } from "react";
import LogoCard from "./LogoCard";
import RoomCard from "./RoomCard";
import TokenNotificationCard from "./TokenNotificationCard";
import Typography from "@material-ui/core/Typography";
import BookingDate from "./BookingDate";
import Button from "@material-ui/core/Button";
import mockRoomData from './mock-backend-responses/hotel-bogota/mockRoomData.json';
import { Client } from "@tokenscript/token-negotiator";
import config from "../../tokenConfig.json";
import { updateTokenConfig } from "../../environment";
import "./App.css";

function App() {

  const devonConfig = updateTokenConfig(config);
  const tokenIssuers = [devonConfig];
  const negotiator = new Client({ type: "passive", issuers: tokenIssuers });

  let [tokens, setTokens] = useState([]);

  let [tokenProofData, setTokenProofData] = useState({ proof: null });

  let [freeShuttle, setFreeShuttle] = useState(false);

  let [roomTypesData, setRoomTypesData] = useState([]);

  let [discount, setDiscount] = useState({ value: undefined });

  let [selectedPendingTokenInstances, setSelectedPendingTokenInstances] = useState([]);

  let [retryButton, setRetryButton] = useState("");

  const applyTokenOffers = (tokens) => {
    if (tokens.length > 0) {
      setFreeShuttle(true);
    }
  }

  useEffect(() => {
    negotiator.on("tokens-selected", ({ selectedTokens, selectedIssuerKeys }) => {
      let tokens = [];
      selectedIssuerKeys.map((issuerKey) => {
        tokens.push(...selectedTokens[issuerKey].tokens)
      })
      setTokens(tokens);
      applyTokenOffers(tokens);
    });
    negotiator.on("token-proof", (result) => {
      if (result.error) {
        alert("Authentication could not be completed.");
      };
      setTokenProofData({ proof: result.issuers });
      setDiscount({ value: 5 });
    });
    negotiator.on("error", ({ error, issuer }) => {
      if (error.name === "POPUP_BLOCKED") {
        setRetryButton("Popup blocked");
      } else if (error.name === "USER_ABORT") {
        setRetryButton("Action aborted");
      } else {
        console.log(error);
        setRetryButton("An error occurred loading tokens");
      }
    });
  }, []);

  const applyDiscountTicket = async (ticket, roomType) => {
    let updatedTicketSelection = [];
    if (selectedPendingTokenInstances?.length) {
      let wasMatch = false;
      selectedPendingTokenInstances?.forEach((storedTicket) => {
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
    if (!selectedPendingTokenInstances) {
      setDiscount({ value: undefined });
    } else {
      negotiator.authenticate(selectedPendingTokenInstances);
    }
  };

  const book = async (formData) => {
    const checkoutEndPoint =
      "https://raw.githubusercontent.com/TokenScript/token-negotiator-examples/main/mock-backend-payment-process-request.json?";
    const params = {
      tokenProof: JSON.stringify(tokenProofData),
      bookingData: { formData }
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
    setRoomTypesData(mockRoomData);
    negotiator.negotiate();
  }, []);

  return (
    <div>
      <div className="header">
        <LogoCard title={"Hotel Bogota"} />
        <TokenNotificationCard
          tokensNumber={tokens.length}
          refreshTokens={() => {
            negotiator.negotiate(null, false, true);
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
            style={{ padding: "20px" }}
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
        <div style={{ color: "#f50057", textAlign: "center" }}>
          <Typography gutterBottom variant="body2" component="h4">
            {retryButton}
          </Typography>
          <Button
            style={{ background: "#fff8f8" }}
            onClick={() => {
              setRetryButton("");
              negotiator.negotiate();
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
