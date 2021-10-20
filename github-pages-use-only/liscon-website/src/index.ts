import { Client } from '@tokenscript/token-negotiator';

// add filters when specific tokens are required
const filter = {};

// define token name:

// local host ticket example - with the outlet serving via localhost 3002
// const tokenName = "devcon-ticket-local-3002";

// production - using tokens from liscon
const tokenName = "devcon-ticket";

// set required negotiator options
const options = { useOverlay: false };

// @ts-ignore
window.negotiator = new Client(
  filter, 
  tokenName,
  options  
);


