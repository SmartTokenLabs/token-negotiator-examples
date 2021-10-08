import React, { useState, useEffect } from 'react';
import { Client } from '@tokenscript/token-negotiator';
import Card from './Card';
import './App.css';

// A minimal example to read tokens and render them to a view.

function App() {

  // local react state for tokens
  let [tokens, setTokens] = useState([]);
  let [email, setEmail] = useState('');
  
  // create configuration and instance of Negotiator.
  const filter = {};

  // github pages config
  const token = "devcon-ticket-heroku";
  
  const options = {};
  const negotiator = new Client(filter, token, options);
  
  useEffect(async () => {
    // retrieve existing tokens on initialisation of this component
    const tokens = await negotiator.negotiate();
    if(tokens) setTokens(tokens);
  }, []);

  const openTicketInIframe = async ({id}) => {

    // add token through magic link local
    const magicLink = `https://crypto-verify.herokuapp.com/issue-ticket/?id=${id}`;
    
    negotiator.addTokenThroughIframe(magicLink); 

    const devconData = await negotiator.negotiate();
    setTokens(devconData);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();    
    openTicketInIframe({ id: email});
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
        <p>Claim your ticket (demonstration purposes only):</p>
      </div>
      <div className="flexCenter">
      <form onSubmit={handleSubmit}>
        <label><span style={{ fontSize: '14px', marginRight: '7px' }}>Email:</span>
        <input style={{ marginRight: '7px' }} type="email" value={email} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      { tokens.length > 0 &&
        <div>
          <div className="flexCenter">
            <p>Your tickets:</p>
          </div>
          <div className="flexCenter">
            <div className="tokensWrapper">
              {
                tokens && tokens.length > 0 && tokens.map((tokenInstance, index) => {
                  return <Card key={index} tokenInstance={tokenInstance} />
                })
              }
            </div> 
          </div> 
        </div>
      }
    </main>
  );
}

export default App;