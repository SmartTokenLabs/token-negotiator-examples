// Opens overlay for end user to select from their tokens.
import { Overlay, Outlet } from '@tokenscript/token-negotiator';

// peronalise styles here
import "./theme/style.css";

// instantiate overlay module
new Overlay();

// token source
// new Outlet({
//   tokenName: 'devcon-ticket'
// });

// local token source
new Outlet({
  tokenName: 'devcon-ticket-local-3002'
});
