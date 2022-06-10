// @ts-nocheck

// import { Outlet } from './src/outlet/index';
import { Outlet } from '@tokenscript/token-negotiator';

import config from '../../tokenConfig.json';
import {updateTokenConfig} from "../../environment";

let devconConfig = config;

devconConfig = updateTokenConfig(devconConfig);

new Outlet(devconConfig);
