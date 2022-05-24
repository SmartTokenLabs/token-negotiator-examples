import { useStore } from './state';

/*export async function createNegotiatorClient(){

    if (window.negotiator)
        return;

    if (document.getElementsByClassName("overlay-tn")[0].childElementCount > 0)
        return;

    const { Client } = (await import("@tokenscript/token-negotiator"));

    window.negotiator = new Client({
        type: 'active',
        issuers: [],
        options: {
            overlay: {
                openingHeading: "Open a new world of discounts available with your tokens.",
                issuerHeading: "Get discounts with tokens",
                repeatAction: "try again",
                theme: "light",
                position: "bottom-right"
            },
            filters: {},
        },
        ipfsBaseUrl: "https://smart-token-labs-demo-server.mypinata.cloud/ipfs/"
    });

    //window.negotiator.negotiate();

    window.negotiator.on("tokens-selected", (data) => {
        window.storeApi.setSelectedTokens({...data.selectedTokens});
    });
}*/

export function updateNegotiatorIssuers(issuers){
    let intId = setInterval(() => {
        if (window.negotiator){
            clearInterval(intId);
            window.negotiator.negotiate(issuers);
        }
    }, 1000);
}