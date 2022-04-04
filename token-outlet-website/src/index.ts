// @ts-nocheck

// import { Outlet } from './src/outlet/index';
import { Outlet } from '@tokenscript/token-negotiator';

import { SignedDevconTicket } from './Attestation/SignedDevonTicket';
import config from './../public/tokenConfig.json';

// import { Outlet } from '@tokenscript/token-negotiator/dist/outlet/index';

config.tokenParser = SignedDevconTicket;
config.tokenOrigin = (document.location.hostname === "localhost" ? "http://localhost:3002" : "http://localhost:3002")

new Outlet(config);
