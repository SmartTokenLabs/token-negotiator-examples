// import { Outlet } from '@tokenscript/token-negotiator';
import { Outlet } from './dist/outlet/index';
import {updateTokenConfig} from "../../environment";
// @ts-ignore
import config from '../../tokenConfig.json';

let devconConfig = updateTokenConfig(config);

new Outlet(devconConfig);
