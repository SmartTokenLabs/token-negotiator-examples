import React, { useState, useEffect } from 'react';
import { Client } from '@tokenscript/token-negotiator';
import Token from './components/Token';
import './App.css';
import config from '../../tokenConfig.json';
import {updateTokenConfig} from "../../environment";
import {Ticket} from "@tokenscript/attestation/dist/Ticket";
import {KeyPair} from "@tokenscript/attestation/dist/libs/KeyPair";
import {hexStringToBase64Url} from "@tokenscript/attestation/dist/libs/utils";
import {TextField} from "@material-ui/core";

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
    },
];

const secret = 45845870684n;

function App() {

  let [tokens, setTokens] = useState([]);

  let [retryButton, setRetryButton] = useState("");

    let devconConfig = updateTokenConfig(config);

	devconConfig.accessRequestType = "write";

    let tokenIssuers = [
        devconConfig
    ];

  window.negotiator = new Client({
    type: 'passive',
    issuers: tokenIssuers
  });

  window.negotiator.on('tokens', (issuerTokens) => {

    let tokens = [];
    
    tokenIssuers.map((issuer) => {

      tokens.push(...issuerTokens[issuer.collectionID].tokens);

    });

    setTokens(tokens);
    
  });

  window.negotiator.on("error", ({error, issuer}) => {
        if (error.name === "POPUP_BLOCKED"){
            setRetryButton("Popup blocked");
        } else if (error.name === "USER_ABORT"){
            setRetryButton("Action aborted");
        } else {
            console.log(error);
            setRetryButton("An error occurred loading tokens");
        }
    });

  useEffect(() => {

    window.negotiator.negotiate();

  }, []);

  const generateTicket = (email, ticketId, ticketClass) => {

      let ticket = Ticket.createWithMail(email, "6", ticketId, ticketClass, {"6": KeyPair.privateFromPEM(devconConfig.ticketIssuesUrlWebsitePrivateKey)}, secret);

      if (!ticket.checkValidity()){
          throw new Error("Ticket validity check failed");
      }

      if (!ticket.verify()){
          throw new Error("Ticket verify failed");
      }

      let ticketInUrl = hexStringToBase64Url(ticket.getDerEncoding());

      return {
          ticket: ticketInUrl,
          secret: secret.toString(),
          id: email
      };
  }

  const openTicketInIframe = async ({event, ticketId, ticketClass}) => {
    
    event.preventDefault();

    if (!document.getElementById("form")[0].checkValidity()){
        alert("Please enter an email")
        return;
    }

    let genTicket = generateTicket(document.getElementById("email").value, ticketId, ticketClass);

    const magicLink = `${config.tokenOrigin}?ticket=${genTicket.ticket}&secret=${genTicket.secret}&id=${genTicket.id}`;

    try {
        let tokens = await negotiator.addTokenViaMagicLink(magicLink);

        setTokens(tokens);

    } catch (e){
        console.log("Failed to add token via magic link: " + e);
        alert(e);
    }

  }

  return (
    <main>
      <a href="/"><img className="logo" src="./devcon.svg"></img></a>
      <div className="flexCenter">
        <p>[DEMO Ticket Issuer Website]</p>
      </div>
      <div className="flexCenter">
        <img className="devcon_bogota" src="./devcon_bogota.svg"></img>
      </div>
      <div className="flexCenter">
        <p>A Devcon ticket provides access to the event and special offers between the dates X-XX for hotel bookings, travel, restaurants and more.</p>
      </div>
      <div className="flexCenter">
        <p>Your tickets:</p>
      </div>
      <div className="flexCenter">
        <div className="tokensWrapper">
          {
            tokens && tokens.length > 0 && tokens.map((tokenInstance, index) => {
              return <Token key={index} tokenInstance={tokenInstance} />
            })
          }
          {
            !tokens.length && <div>
              <b>- no ticket found -</b>
            </div>
          }
          { retryButton &&
              <div>
                  <h5 style={{color: "red"}}>{retryButton}</h5>
                  <button className="makeTicket" style={{backgroundColor: "#f58b77"}} onClick={() => {
                      setRetryButton("");
                      negotiator.negotiate();
                  }}>Retry</button>
              </div>
          }
        </div>
      </div>
      <p className="flexCenter">Generate ticket:</p>
      <form id={"form"}>
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