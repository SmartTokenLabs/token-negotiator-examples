
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
      redirectURI: "https://socios-oauth2.tokenscript.org/user-login-callback",
      partnerTag: "smarttokenlabs",
      returnToApplicationURL: "/index.html",
      endpoints: {
        redirectURI: {
          path: "https://socios-oauth2.tokenscript.org/user-login-callback",
          params: {}
        },
        userBalance: {
          path: 'https://socios-oauth2.tokenscript.org/user-login-callback',
          params: {}
        },
        userNfts: {
          path: 'https://socios-oauth2.tokenscript.org/user-login-callback',
          params: {}
        },
      }
    }
  }
}