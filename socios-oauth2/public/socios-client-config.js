
const sociosClientConfig = () => {
  return {
    onChain: true,
    fungible: true,
    chain: "eth",
    blockchain: "evm",
    collectionID: "socios",
    contract: "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
    oAuth2options: {
      consumerKey: "PBK9Mx_ffFRUPHW9BLTxnGHRdywa",
      redirectURI: "http://localhost:5000/user-login-callback",
      partnerTag: "smarttokenlabs",
      returnToApplicationURL: "/index.html",
      endpoints: {
        redirectURI: {
          path: "http://localhost:5000/user-login-callback",
          params: {}
        },
        userBalance: {
          path: 'http://localhost:5000/user-balance',
          params: {}
        },
        userNfts: {
          path: 'http://localhost:5000/user-nfts',
          params: {}
        },
      }
    }
  }
}