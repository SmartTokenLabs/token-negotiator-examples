import { Outlet } from '@tokenscript/token-negotiator';

// instantiate the outlet class()
// - reads tokens from query string (token outlet).
// - provides tokens to library components

// configure the outlet with the tokens this page should store and provide as a service.

// new Outlet({
//   tokenName: 'devcon-ticket'
// });

new Outlet({
  tokenName: 'devcon-ticket-local-3002'
});
