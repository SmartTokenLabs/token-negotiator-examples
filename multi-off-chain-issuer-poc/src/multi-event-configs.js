export const GitCoin = {
  noTokenMsg: "<div style='background: #fff;padding: 20px;border-radius: 20px;color: #1f1f1f;'>If you hold a Schelling Point Singapore ticket, please visit your magicLink email again and open the link in this browser.<div style='text-align:center; padding:10px;'><a href='https://schellingpointsingapore.openloyalty.com/issuer/' style='display: inline-block; padding: 17px 90px; background-color: #ff0000; color: #fff;border-radius: 100px; text-decoration: none;font-size: 18px;'>Get Pass</a></div>You may reload this page after and try again.</div>",
  collectionID: "gitcoin",
  onChain: false,
  title: "Schelling Point .edu Singapore",
  image: "http://d1w910csv8x9qg.cloudfront.net/gitcoin/wp-content/uploads/sites/6/2023/09/gitcoin_logo_square.png",
  tokenOrigin: "https://schellingpointsingapore.openloyalty.com/outlet/",
  attestationOrigin: "https://test.attestation.id/",
  "whitelistDialogRenderer": (permissionContent, acceptBtn, denyBtn) => {
    return `
    <style>
    .btns button {
        background: #6138e5;
        color: #fff;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        padding: 10px 15px;
        margin-top: 15px;
        margin-bottom: 15px;
        border-width: 0;
        min-width: 100px;
    }
</style>
<div style="
    font-family: sans-serif; 
    text-align: center; 
    position: absolute; 
    width: 100vw; 
    min-height: 100vh;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    padding: 20px;
    font-size: 24px;
    line-height: 1.2;
    box-sizing: border-box;">
        <div>
            ${permissionContent}
        </div>
        <div class="btns">
        ${acceptBtn}
        ${denyBtn}
        </div>
    </div>
`;
  },
  "whitelistDialogRenderer-off": (permissionTxt, acceptBtn, denyBtn) => {
    return `
    <div class="tn-auth-box">
        <div class="tn-auth-heading">
        Read Access
        </div>
        <div class="tn-auth-content">
            <p>${permissionTxt}</p>
            <div class=tn-auth-description>This allows to verify your tickets. It does not grant it access to your personal information.</div>
            ${acceptBtn}
            ${denyBtn}
        </div>
        
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
    .tn-auth-box {
        background: #fff;
        color: #000;
        font-family: Rubik;
    }
    .tn-auth-heading {
        background: #fff;
        color: #000;
        font-size: 32px;
        font-weight: 600;
        margin-top: 47px;
    }
    .tn-auth-content {
        font-size: 20px;
        padding: 0px;
    }
    .tn-auth-description {
        font-size: 16px;
        line-height: 1.2;
        margin-top: 15px;
    }
    .tn-auth-content button {
        font-size: 18px;
        font-weight: 600;
        border-width: 0;
        max-width: 100%;
        padding: 14px;
        height: auto;
    }
    #tn-access-accept {
        background: #6138E5;
        margin-top: 32px;
    }
    #tn-access-deny {
        background: #eee;
        color: #999;
        margin-top: 0;
    }
    </style>
`;
  },
  "signedTokenWhitelist": [
    "https://devcon-vi.attest.tickets/",
    "https://dev.loc",
    "https://perks.loc/",
    "https://d1w910csv8x9qg.cloudfront.net/",
    "http://d1w910csv8x9qg.cloudfront.net/",
  ],

  "eas": {
    "config": {
      "address": "0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587",
      "version": "0.26",
      "chainId": "1"
    }
  },
  "base64senderPublicKeys": {
    "gitcoin": "MIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA/////////////////////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5mfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0SKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFBAgEBA0IABPATugABPN9VMi9eGw5z+X7Cn5m1VdC7ttfRWBIrPCJRc2XQ8DMvACSoxu9QStuWHJ6VHEG3kRk9ilmgfOeK3xM="
  }
}



export const SmartLayer = {
  collectionID: "SMARTLAYER",
  onChain: false,
  title: "Smart Layer",
  signedTokenWhitelist: [
    "https://mail.google.com",
    "https://www.google.com",
    "android-app://com.google.android.gm",
  ],
  "whitelistDialogRenderer": (permissionContent, acceptBtn, denyBtn) => {
    return `
    <style>
    .btns button {
        background: #6138e5;
        color: #fff;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        padding: 10px 15px;
        margin-top: 15px;
        margin-bottom: 15px;
        border-width: 0;
        min-width: 100px;
    }
</style>
<div style="
    font-family: sans-serif; 
    text-align: center; 
    position: absolute; 
    width: 100vw; 
    min-height: 100vh;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    padding: 20px;
    font-size: 24px;
    line-height: 1.2;
    box-sizing: border-box;">
        <div>
            ${permissionContent}
        </div>
        <div class="btns">
        ${acceptBtn}
        ${denyBtn}
        </div>
    </div>
`;
  },
  image:
    "https://raw.githubusercontent.com/TokenScript/token-negotiator/main/mock-images/devcon.svg",
  tokenOrigin: window.location.origin + "/pass/",
  // this was 'mail' before, which lead to the id field in localStore empty
  tokenIdName: "id", // the key of email field in the magic link
  attestationOrigin: "https://attestation.id/",
  unEndPoint: "https://crypto-verify.herokuapp.com/use-devcon-ticket",
  base64senderPublicKeys: {
    "": "MIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA/////////////////////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5mfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0SKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFBAgEBA0IABGpZjkqaWTikeOtxyfACQir7GtkMzCHaMxkBqlTM0YtDVnB62NzBccLKtEazkzRnvX65y+GmSzdRhgVMPE9ACww=",
  }, base64attestorPubKey: "MIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA/////////////////////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5mfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0SKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFBAgEBA0IABL+y43T1OJFScEep69/yTqpqnV/jzONz9Sp4TEHyAJ7IPN9+GHweCX1hT4OFxt152sBN3jJc1s0Ymzd8pNGZNoQ=",
}


export const SmartLayerPass = {
  collectionID: "SMARTLAYER-PASS",
  onChain: false,
  title: "Smart Layer",
  signedTokenWhitelist: [
    "https://mail.google.com",
    "https://www.google.com",
    "android-app://com.google.android.gm",
  ],
  "whitelistDialogRenderer": (permissionContent, acceptBtn, denyBtn) => {
    return `
    <style>
    .btns button {
        background: #6138e5;
        color: #fff;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        padding: 10px 15px;
        margin-top: 15px;
        margin-bottom: 15px;
        border-width: 0;
        min-width: 100px;
    }
</style>
<div style="
    font-family: sans-serif; 
    text-align: center; 
    position: absolute; 
    width: 100vw; 
    min-height: 100vh;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    padding: 20px;
    font-size: 24px;
    line-height: 1.2;
    box-sizing: border-box;">
        <div>
            ${permissionContent}
        </div>
        <div class="btns">
        ${acceptBtn}
        ${denyBtn}
        </div>
    </div>
`;
  },
  // TODO: check all these fields
  image:
    "https://pbs.twimg.com/profile_images/1653427962350370816/GiJ0Wh-h_400x400.jpg",
  tokenOrigin: "https://www.smartlayer.network/pass/",
  attestationOrigin: "https://test.attestation.id",
  eas: {
    // schemaUid is the same on both testing and production env
    schemaUid:
      "0x44ec5251add2115c92896cf4b531eb2fcfac6d8ec8caa451df52f0a25a028545",
    idFields: ["memberId"],
    fields: [
      { name: "version", type: "uint16" },
      { name: "orgId", type: "string" },
      { name: "memberId", type: "string" },
      { name: "memberRole", type: "string" },
      { name: "commitment", type: "bytes", isCommitment: true },
      { name: "scriptURI", type: "string" },
    ],
  },
  base64senderPublicKeys: {
    "": "MIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA/////////////////////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5mfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0SKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFBAgEBA0IABGpZjkqaWTikeOtxyfACQir7GtkMzCHaMxkBqlTM0YtDVnB62NzBccLKtEazkzRnvX65y+GmSzdRhgVMPE9ACww=",
  },
  base64attestorPubKey: "MIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA/////////////////////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5mfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0SKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFBAgEBA0IABL+y43T1OJFScEep69/yTqpqnV/jzONz9Sp4TEHyAJ7IPN9+GHweCX1hT4OFxt152sBN3jJc1s0Ymzd8pNGZNoQ=",
}

