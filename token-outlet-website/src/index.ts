// @ts-nocheck

// import { Outlet } from './src/outlet/index';
import { Outlet } from '@tokenscript/token-negotiator';

import { SignedDevconTicket } from './Attestation/SignedDevonTicket';
import config from './../public/tokenConfig.json';

// TODO: Is This required here? At the moment this is only used in attestation:getUseTicket() and not passed in as a parameter.
//       It probably makes sense to have it here and update attestation library to take it as a parameter in getUseTicket().
config.tokenParser = SignedDevconTicket;

config.tokenOrigin = (document.location.hostname === "localhost" ? "http://localhost:3002/" : "https://tokenscript.github.io/token-negotiator-gh-pages/token-outlet-website/build/")

new Outlet(config);
