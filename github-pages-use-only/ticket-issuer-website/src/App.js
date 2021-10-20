import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import './App.css';

// An example of how tokens/tickets can be generated via a form
// these sent to the input entered email address which will present a magic link.
// After clicking on a magic link, when you return to this web page the token will be presented
// inside the view.

// note uses version 1 of the Token Negotiator. 

function App() {

  // local react state for tokens
  let [tokens, setTokens] = useState([]);
  let [email, setEmail] = useState('');
  let [disabledState, setDisabledState] = useState(false);
  
  // create configuration and instance of Negotiator.
  const filter = {};
  let tokensURL = 'https://devcontickets.herokuapp.com/outlet/';
  const negotiator = new Negotiator(filter, "devcon-ticket", { tokenOrigin: tokensURL });
  
  useEffect(async () => {
    negotiator.negotiate().then(tokens => { 
      setTokens(tokens.tokens); 
    }).catch(e => {});
  }, []);

  const openTicketInIframe = ({id}) => {

    // e.g. https://crypto-verify.herokuapp.com/issue-ticket?id=test@mah.com
          
    axios.get(`https://crypto-verify.herokuapp.com/issue-ticket?id=${id}`).then(
      (result) => {
        alert('Please check your email');
      }
    ).catch(err => { 
      alert('Email could not be sent, please try again later.');
      setDisabledState(false);
    });
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();    
    const email = event.target[0].value;
    setDisabledState(true);
    openTicketInIframe({ id: email });
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
        <input type="submit" value="Submit" disabled={disabledState} />
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