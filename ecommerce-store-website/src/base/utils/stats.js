import Analytics from '@tokenscript/analytics-client';

const analyticsUrl = process.env.ANALYTICS_URL;
const jwtToken = process.env.ANALYTICS_JWT;

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

const AGREE_TO_STATS_KEY = 'bc-agree-stats';

export function loadAgreeToStats() {
  return localStorage.getItem(AGREE_TO_STATS_KEY) === 'true';
}

export function storeAgreeToStats(value) {
  localStorage.setItem(AGREE_TO_STATS_KEY, value);
}
