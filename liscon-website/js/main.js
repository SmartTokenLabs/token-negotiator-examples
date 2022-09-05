let tokensHolderSelector = ".tickets";
let negotiator;

let titleSelector = "h1";
let successMessage = "Nice one!<br>Ticket is ready. Enjoy Liscon.";
let noTokensH1 = 'No Tickets found.';

let messageSelector = ".message";
let noTokensMessage = 'Please Buy a Ticket and open MagicLink from your mailbox.';
let existTokensMessage = 'The ticket below is stored in your browser and can be used on web3 websites that support Liscon Tickets.';

function fillTickets(output){
    console.log("negotiate result:", output);
    if (!output || !output.success || !output.tokens || !output.tokens.length){
        console.log("Something went wrong with Negotiate.");
        document.querySelector(titleSelector).innerHTML = noTokensH1;
        document.querySelector(messageSelector).innerHTML = noTokensMessage;
        document.querySelector(tokensHolderSelector).innerHTML = '';
        return;
    }
    let html = "";

    let token = output.tokens[0];
    html += `<div class="ticket"><div class="item"><div class="bg"></div><div class="number">${token.ticketId}</div></div></div>`;

    document.querySelector(titleSelector).innerHTML = successMessage;
    document.querySelector(messageSelector).innerHTML = existTokensMessage;
    document.querySelector(tokensHolderSelector).innerHTML = html;

    authenticate(token);
}

async function authenticate(token){
    let proof = document.getElementById('proof');
    try {
        // negotiator defined globally
        let auth = await negotiator.authenticate({
            unsignedToken: token,
            unEndPoint: 'https://crypto-verify.herokuapp.com/use-devcon-ticket'
        });
        proof.innerHTML = "Attestation ok. Payload: " + auth.proof.useToken;
        console.log('[DEMO] auth received:');
        console.log(auth);
    } catch (e) {
        console.log(e);
        proof.innerHTML = 'Attestation failed. ';
        return;
    }
}

function runOnLoad(){
    document.querySelector(titleSelector).innerHTML = noTokensH1;
    document.querySelector(messageSelector).innerHTML = noTokensMessage;

    let tokensURL = "https://liscon.alchemynft.org/";
    negotiator = new Negotiator({},"liscon-ticket", {
        tokenOrigin: tokensURL,
        attestationOrigin: "https://liscon.attestation.id",
    });
    if (window === window.parent) {
        // Listen for the event.
        // its not iframe, lets get tickets
        negotiator.negotiate().then(fillTickets);
        // usually it should not fire, because ticket will be added until page load
        document.body.addEventListener('tokensupdated', e=>{
            // tokensupdated event
            negotiator.negotiate().then(fillTickets);
        }, false);
    }
}
document.addEventListener('DOMContentLoaded', runOnLoad, false);