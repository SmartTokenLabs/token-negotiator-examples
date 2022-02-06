import React, { useState, useEffect } from 'react';
// import { Client } from '@tokenscript/token-negotiator';
import { Client } from './dist';
import Token from './components/Token';
import './App.css';

const mockTicketData = [
  {
    ticket: "MIGWMA0MATYCBWE3ap3-AgEABEEEKJZVxMEXbkSZZBWnNUTX_5ieu8GUqf0bx_a0tBPF6QYskABaMJBYhDOXsmQt3csk_TfMZ2wdmfRkK7ePCOI2kgNCAOOZKRpcE6tLBuPbfE_SmwPk2wNjbj5vpa6kkD7eqQXvBOCa0WNo8dEHKvipeUGZZEWWjJKxooB44dEYdQO70Vgc",
    secret:"45845870684",
    id:"mah@mah.com"
  },
  {
    ticket: "MIGXMA4MAjExAgVhN2qd_gIBAARBBCiWVcTBF25EmWQVpzVE1_-YnrvBlKn9G8f2tLQTxekGLJAAWjCQWIQzl7JkLd3LJP03zGdsHZn0ZCu3jwjiNpIDQgBbJBY1Ctlp_czUwB85yF1e5kpZ-lQ_-UZ7jaCYSFoEx028Jit1HIDLCJezKdsNn9c9IO7-HC-_r2ZLaYQ9GGrbHA==",
    secret:"45845870684",
    id:"mah@mah.com"
  },
  {
    ticket: "MIGTMAoMATYCAgDeAgEABEEEKJZVxMEXbkSZZBWnNUTX_5ieu8GUqf0bx_a0tBPF6QYskABaMJBYhDOXsmQt3csk_TfMZ2wdmfRkK7ePCOI2kgNCAEZYXbNmWXDsAqIc5uf7SirR-dLCMLdEVN5teFrV93VbcKE_DED8c6jtFQ5LH2SRXwPEtXZqWfEh1c2OHTEYqfwb",
    secret:"45845870684",
    id:"mah@mah.com"
  },
  {
    ticket: "MIGSMAkMATECAQECAQAEQQQollXEwRduRJlkFac1RNf_mJ67wZSp_RvH9rS0E8XpBiyQAFowkFiEM5eyZC3dyyT9N8xnbB2Z9GQrt48I4jaSA0IAOf4d0N9shWfPIgRXZPdBRhlRyIARDT0tJwNWYwy2ILVKnIy-qPzFsgdI6sZHm1OY6UsJKuDlp0A7EMC8vS5YhRs=",
    secret:"45845870684",
    id:"mah@mah.com"
  },
];

const tokenIssuers = ['devcon'];

function App() {

  let [tokens, setTokens] = useState([]);

  let negotiator = new Client({
    type: 'passive',
    issuers: tokenIssuers,
    options: {}
  });

  negotiator.on('tokens', (issuerTokens) => {

    let tokens = [];
    
    tokenIssuers.map((issuer) => {

      tokens.push(...issuerTokens[issuer].tokens);

    });

    setTokens(tokens);
    
  });
  
  useEffect(() => {

    negotiator.negotiate();

  }, []);

  const openTicketInIframe = async ({event, ticket, secret, id}) => {
    
    event.preventDefault();

    // localhost:3002
    const magicLink = `http://localhost:3002/?ticket=${ticket}&secret=${secret}&id=${id}`;
    
    // Github example
    // const magicLink = `https://tokenscript.github.io/token-negotiator-examples/github-pages-use-only/token-outlet-website/build/index.html/?ticket=${ticket}&secret=${secret}&id=${id}`;

    negotiator.addTokenThroughTab(magicLink);

    // negotiator.addTokenThroughIframe(magicLink);

    setTimeout(() => {

      negotiator.negotiate();

    }, 3000);

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
        </div>
      </div>
      <p className="flexCenter">Generate ticket:</p>
      <div className="flexCenter">
            <div className="ticketWrapper">
              {
                mockTicketData.map((mockTicket, index) => {
                  return (
                    <button key={index} className="makeTicket" onClick={event => openTicketInIframe({ 
                      event,
                      ticket: mockTicket.ticket,
                      secret: mockTicket.secret,
                      id: mockTicket.id
                    })}>Create Ticket</button> 
                  )
                })
              }
            </div>
        </div>
    </main>
  );
}

export default App;