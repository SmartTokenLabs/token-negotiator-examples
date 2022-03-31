// @ts-nocheck

// import { Outlet } from './src/outlet/index';

import { Outlet } from './dist/outlet/index';
import { SignedDevconTicket } from './Attestation/SignedDevonTicket';
import config from './../public/tokenConfig.json';

// import { Outlet } from '@tokenscript/token-negotiator/dist/outlet/index';

config.tokenParser = SignedDevconTicket;

new Outlet(config);
