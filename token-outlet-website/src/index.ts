// @ts-nocheck

// import { Outlet } from './src/outlet/index';
import { Outlet } from './dist/outlet/index';
// import { Outlet } from '@tokenscript/token-negotiator';

import config from '../../tokenConfig.json';
import {updateTokenConfig} from "../../environment";

let devconConfig = config;

devconConfig = updateTokenConfig(devconConfig);

devconConfig.unSupportedBrowserDeviceWallet = {
  list: ["mac", "metaMask", "alphaWallet", "mew", "trust", "goWallet", "status"],
  errorMessage: "This browser cannot yet support token authentication. Please try using Chrome, FireFox."
}

new Outlet(devconConfig);
