// import { Outlet } from '@tokenscript/token-negotiator';
import { Outlet } from './dist/outlet/index';
import { Overlay } from './dist/overlay/index';
// import { Overlay } from '@tokenscript/token-negotiator';

import "./theme/style.css";

new Outlet({ tokenName: 'devcon-ticket-local-3002' });
new Overlay();

// Module not found: Error: Can't resolve './dist/outlet/index' in '/Users/nicktaras/Documents/github/token-negotiator-examples/token-outlet-website/src'
