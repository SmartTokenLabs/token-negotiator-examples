import { Client } from './token-negotiator/client/index';

declare global {
    interface Window {
        negotiator?: any;
    }
}

window.negotiator = new Client({
    // type: 'passive',
    type: 'active',
    issuers: [
        'devcon'
    ],
    options: {
        overlay: {
            heading: "Get discount with Ticket",
            theme: "light",
            position: "bottom-right"
        },
        filters: {},
    }
});

window.negotiator.negotiate();
