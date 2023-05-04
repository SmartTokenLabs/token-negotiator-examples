import Analytics from '@tokenscript/analytics-client';

const analyticsUrl = 'https://analytics-api-stage.smarttokenlabs.com';
const jwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuZCI6IkJyYW5kIENvbm5lY3RvciIsImNhbXBhaWduIjoiRGVtbyIsImNsaWVudF9pZCI6IlNUTCIsImlhdCI6MTY4MzE3MDk5Nn0.HhW_sUtU0LKLpK2_puK7pj63CkaXmFa5sJ_wfx1ASR8';

const analyticsClient = new Analytics(analyticsUrl, jwtToken).client;

export function sendWalletConnectedEvent({
  providerType,
  blockchain,
  chainId,
  address,
}) {
  analyticsClient.event({
    name: 'wallet-connected',
    eventProperties: {
      provider_type: providerType,
      blockchain,
      chain_id: chainId,
      address,
    },
  });
}

export function sendTokensSelectedEvent({ selectedTokens }) {
  const eventProperties = Object.fromEntries(
    Object.entries(selectedTokens).map(([collectionId, { tokens }]) => [
      collectionId,
      tokens.map((token) => token.ticketIdNumber ?? token.tokenId),
    ])
  );

  analyticsClient.event({
    name: 'token-selected',
    eventProperties,
  });
}

export function sendTokenProofEvent({
  data: { address, messageToSign, signature },
  error,
}) {
  const eventProperties = error
    ? { error }
    : {
        address,
        messageToSign,
        signature,
      };

  analyticsClient.event({
    name: 'token-proof',
    eventProperties,
  });
}
