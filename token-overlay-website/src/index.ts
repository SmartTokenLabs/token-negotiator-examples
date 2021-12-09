import { Client } from './token-negotiator/client/index';

declare global {
    interface Window {
        negotiator?: any;
    }
}

// create new instance of the Negotiator with params
window.negotiator = new Client({
    type: 'active',
    issuers: [
        'devcon'
    ],
    options: {
        filters: {},
    }
});

// instance of negotiator
window.negotiator.negotiate();

