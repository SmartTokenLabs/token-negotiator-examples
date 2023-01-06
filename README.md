# token-negotiator-examples
A repository to host and manage token negotiator example dapps and web apps

TokenScript is a framework which improves functionality, security and usability of blockchain token. It creates a layer between a blockchain and user devices, adding information, rules and functionalites both onchain and offchain. 

For more information please visit: [https://tokenscript.org/](https://tokenscript.org/).

## Examples

https://tokenscript.github.io/token-negotiator-gh-pages

Each of examples by default are configured for use in a local environment.
See the README's inside each example for configuration and deployment.

## Running the examples via localhost

- cd into the root of this directory
- run `npm run install` to install all dependancies for the examples
- run `npm run start` which will serve all examples with a single command
- Or alternatively, serve each example seperately (see readme inside each directory for more information)

there are also other batch commands supported

- run `npm run link/unlink` to link/unlink local `token-negotiator` with the example, local `token-negotiator` needs to sit in the same directory as this repo
- run `npm run build` to build all the examples
- run `npm run start-on-chain` which will serve all on-chain examples
- run `npm run start-off-chain` which will serve all off-chain examples

all the above batch commands support specifying individual examples as the target, e.g.

- run `EXAMPLES=art-gallery-medium-article-website npm run start` to start the specified example
- run `EXAMPLES=art-gallery-medium-article-website,ecommerce-store-website npm run build` to build multiple examples at the same time (examples are comma separated)

Notes:

- to manage examples recognized by the batch commands, please update `examples.json` accordingly.
- in order to make sure all the dev servers can run at the same time, you need to avoid port conflict, here are all the existing examples and the port in use, please update whenever you make a change
  - angular-bare-bones-demo: 4200
  - art-gallery-medium-article-website: 3003
  - ecommerce-store-website: 3004
  - svelte-demo: 8080
  - typescript-bare-bones-demo: 3010
  - vue-boilerplate: 8081
  - vue-vite-boilerplate: 5173
  - hotel-bogota-active-negotiation-website: 3000
  - hotel-bogota-passive-negotiation-website: 3001
  - ticket-issuer-url-website: 3005
  - token-outlet-website: 3002

## Library Documentation

https://github.com/TokenScript/token-negotiator

## Quick Start with localhost

https://github.com/TokenScript/token-negotiator-examples/wiki/quick-start

## Quick Start with Liscon Tickets (for liscon hackathon ticket holders)

This uses a custom example of the Token Negotiator (some of the API is not included inside the NPM package at this time).

[Liscon Development Website](https://github.com/TokenScript/token-negotiator-examples/tree/main/liscon-website)

Using [HTTP-Server](https://www.npmjs.com/package/http-server), or any means you choose to serve this website, inspect the index.html
negotiation and authentication steps to read Liscon Tickets and complete full attestation.

Example use cases include; using this example to make a third party website that uses the Liscon Ticket for an entriely different purpose / or extends the functionality of the power of the ticket at the event or virtually e.g. discounts on food, vip entry to a VR Dapp. 

## Usage

[NPM Package](https://www.npmjs.com/package/@tokenscript/token-negotiator)

## Support

sayhi@smarttokenlabs.com

We look forward to hearing your feedback.
