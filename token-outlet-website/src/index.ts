import { Outlet } from '@tokenscript/token-negotiator';
import {updateTokenConfig} from "../../environment";
// @ts-ignore
import config from '../../tokenConfig.json';

let devconConfig = config;

devconConfig = updateTokenConfig(devconConfig);

new Outlet(devconConfig);
