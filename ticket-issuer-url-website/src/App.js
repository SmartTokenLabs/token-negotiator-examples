import React, {useState, useEffect} from "react";
import {Client} from "@tokenscript/token-negotiator";
import Token from "./components/Token";
import "./App.css";
import config from "../../tokenConfig.json";
import {updateTokenConfig} from "../../environment";
import {Ticket} from "@tokenscript/attestation/dist/Ticket";
import {KeyPair} from "@tokenscript/attestation/dist/libs/KeyPair";
import {
    base64toBase64Url,
    base64ToUint8array,
    hexStringToBase64Url,
    uint8tohex
} from "@tokenscript/attestation/dist/libs/utils";
import {MenuItem, Select, TextField} from "@material-ui/core";
import {ethers} from "ethers";
import {EasTicketAttestation} from "@tokenscript/attestation/dist/eas/EasTicketAttestation";

const mockTicketData = [
  {
    ticketId: "1235",
    ticketClass: 1
  },
  {
    ticketId: "1236",
    ticketClass: 2
  },
  {
    ticketId: "1237",
    ticketClass: 3
  },
  {
    ticketId: "1238",
    ticketClass: 4
  }
];

const secret = 45845870684n;

const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

const SEPOLIA_RPC = "https://rpc.sepolia.org/";

export const EAS_CONFIG = {
    address: EASContractAddress,
    version: "0.26",
    chainId: 11155111,
};

const EAS_TICKET_SCHEMA = {
    fields: [
        { name: "devconId", type: "string" },
        { name: "ticketIdString", type: "string" },
        { name: "ticketClass", type: "uint8",  },
        { name: "commitment", type: "bytes", isCommitment: true },
    ]
};

function App() {
  let [tokens, setTokens] = useState([]);

  let [retryButton, setRetryButton] = useState("");

  let [ticketType, setTicketType] = useState("asn");

  let devconConfig = updateTokenConfig(config);

  devconConfig.accessRequestType = "write";

  let tokenIssuers = [devconConfig];

  const params = new URLSearchParams(document.location.hash.substring(1));
  const redirectMode = params.has("redirectMode")
    ? params.get("redirectMode")
    : undefined;

  window.negotiator = new Client({
    type: "passive",
    issuers: tokenIssuers,
    offChainRedirectMode: redirectMode
  });

  window.negotiator.on("tokens", (issuerTokens) => {
    let tokens = [];

    tokenIssuers.forEach((issuer) => {
      tokens.push(...issuerTokens[issuer.collectionID].tokens);
    });

    setTokens(tokens);
  });

  useEffect(() => {
    window.negotiator.negotiate();
  }, []);

  window.negotiator.on("error", ({error, issuer}) => {
    if (error.name === "POPUP_BLOCKED") {
      setRetryButton("Popup blocked");
    } else {
      setRetryButton("An error occurred loading tokens");
    }
  });

  useEffect(() => {

  	window.negotiator.negotiate();

  }, []);

  const generateTicket = async (email, ticketId, ticketClass) => {

      let ticketInUrl;

      if (ticketType === "eas"){

          const provider = new ethers.providers.JsonRpcProvider(SEPOLIA_RPC);
          const wallet = new ethers.Wallet(KeyPair.privateFromPEM(devconConfig.ticketIssuesUrlWebsitePrivateKey).getPrivateAsHexString(), provider);

          const attestationManager = new EasTicketAttestation(
              EAS_TICKET_SCHEMA,
              EAS_CONFIG,
              wallet
          );

          await attestationManager.createEasAttestation( {
              devconId: "6",
              ticketIdString: ticketId,
              ticketClass: ticketClass,
              commitment: email
          }, null);

          ticketInUrl = base64toBase64Url(attestationManager.getEncoded());

      } else {
          let ticket = Ticket.createWithMail(email, "6", ticketId, ticketClass, {"6": KeyPair.privateFromPEM(devconConfig.ticketIssuesUrlWebsitePrivateKey)}, secret);

          if (!ticket.checkValidity()){
              throw new Error("Ticket validity check failed");
          }

          if (!ticket.verify()){
              throw new Error("Ticket verify failed");
          }

          ticketInUrl = hexStringToBase64Url(ticket.getDerEncoding());
      }

      return {
          type: ticketType,
          ticket: ticketInUrl,
          secret: secret.toString(),
          id: email
      };
  }

  const openTicketInIframe = async ({event, ticketId, ticketClass}) => {
    event.preventDefault();

    if (!document.getElementById("form")[0].checkValidity()) {
      alert("Please enter an email");
      return;
    }

    let genTicket = await generateTicket(document.getElementById("email").value, ticketId, ticketClass);

    const magicLink = `${config.tokenOrigin}?type=${genTicket.type}&ticket=${genTicket.ticket}&secret=${genTicket.secret}&mail=${genTicket.id}`;

    try {
      let tokens = await negotiator.addTokenViaMagicLink(magicLink);

      setTokens(tokens);
    } catch (e) {
      console.log("Failed to add token via magic link: " + e);
      alert(e);
    }
  };

  return (
    <main>
      <a href="/">
        <img className="logo" src="./devcon.svg"></img>
      </a>
      <div className="flexCenter">
        <p>[DEMO Ticket Issuer Website]</p>
      </div>
      <div className="flexCenter">
        <img className="devcon_bogota" src="./devcon_bogota.svg"></img>
      </div>
      <div className="flexCenter">
        <p>
          A Devcon ticket provides access to the event and special offers
          between the dates X-XX for hotel bookings, travel, restaurants and
          more.
        </p>
      </div>
      <div className="flexCenter">
        <p>Your tickets:</p>
      </div>
      <div className="flexCenter">
        <div className="tokensWrapper">
          {tokens &&
            tokens?.length > 0 &&
            tokens.map((tokenInstance, index) => {
              return <Token key={index} tokenInstance={tokenInstance} />;
            })}
          {!tokens?.length && (
            <div>
              <b>- no ticket found -</b>
            </div>
          )}
          <div>
            {retryButton && <h5 style={{color: "red"}}>{retryButton}</h5>}
            <button
              className="makeTicket"
              style={{backgroundColor: "#f58b77"}}
              onClick={() => {
                setRetryButton("");
                window.negotiator.negotiate(null, false, true);
              }}
            >
              {retryButton === "" ? "Refresh" : "Retry"}
            </button>
          </div>
        </div>
      </div>
      <p className="flexCenter">Generate ticket:</p>
      <form id={"form"}>
          <div className="flexCenter" style={{margin: "20px"}}>
              <Select label={"Format:"} id={"type"} style={{"display": "block"}} required={true} value={ticketType}
                      onChange={(evt) => setTicketType(evt.target.value)} style={{width: "200px"}}>
                  <MenuItem value={"asn"}>ASN</MenuItem>
                  <MenuItem value={"eas"}>EAS</MenuItem>
              </Select>
          </div>
          <div className="flexCenter" style={{margin: "20px"}}>
            <TextField label={"Email:"} id={"email"} style={{"display": "block"}} required={true} />
          </div>
          <div className="flexCenter">
            <div className="ticketWrapper">
              {
                mockTicketData.map((mockTicket, index) => {
                  return (
                    <button key={index} className="makeTicket" onClick={event => openTicketInIframe({
                      event,
                      ticketId: mockTicket.ticketId,
                      ticketClass: mockTicket.ticketClass
                    })}>Create Ticket</button>
                  )
                })
              }
            </div>
          </div>
      </form>
    </main>
  );
}

export default App;
