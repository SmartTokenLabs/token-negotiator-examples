// Opens overlay for end user to select from their tokens.
import { Overlay, Outlet } from '@tokenscript/token-negotiator';

// peronalise styles here
import "./theme/style.css";

// instantiate overlay module
new Overlay();

// instantiate the outlet class()
// read tokens from query string (token outlet).
new Outlet({
  tokenUrlName: 'ticket',
  tokenSecretName: 'secret',
  tokenIdName: 'id',
  localStorageItemName: 'dcTokens'
});
