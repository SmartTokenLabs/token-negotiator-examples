// @ts-nocheck

// import { Outlet } from './src/outlet/index';
import { Outlet } from '@tokenscript/token-negotiator';

import { SignedDevconTicket } from './Attestation/SignedDevonTicket';
import config from '../../tokenConfig.json';
import {updateTokenConfig} from "../../environment";

let devconConfig = config;

// TODO: Is This required here? At the moment this is only used in attestation:getUseTicket() and not passed in as a parameter.
//       It probably makes sense to have it here and update attestation library to take it as a parameter in getUseTicket().
devconConfig.tokenParser = SignedDevconTicket;

devconConfig = updateTokenConfig(devconConfig);

new Outlet(devconConfig);
