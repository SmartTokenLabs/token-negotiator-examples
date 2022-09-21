import { Outlet } from '@tokenscript/token-negotiator';
import {updateTokenConfig} from "../../environment";
// @ts-ignore
import config from '../../tokenConfig.json';

let devconConfig = updateTokenConfig(config);

// Enable test.attestation.id but only for bare-bones demo
if (document.referrer && (document.referrer.indexOf("3010") > -1 || document.referrer.indexOf("bare-bones") > -1))
	devconConfig.attestationOrigin = "https://test.attestation.id/";

devconConfig.whitelistDialogRenderer = (permissionTxt: string, acceptBtn: string, denyBtn: string) => {
	return `
		<div class="tn-auth-box">
			<img alt="devcon" src="devcon_bogota.svg" style="width: 200px;" />
			<p>${permissionTxt}</p>
			${acceptBtn}
			${denyBtn}
		</div>
	`;
};

new Outlet(devconConfig);
