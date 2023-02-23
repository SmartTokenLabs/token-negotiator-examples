"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[70],{8070:(e,n,t)=>{t.r(n),t.d(n,{Web3WalletProvider:()=>a,default:()=>u});var o=t(7338),r=t(723),i=t(7591),s=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(n){i(n)}}function c(e){try{a(o.throw(e))}catch(n){i(n)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,c)}a((o=o.apply(e,n||[])).next())}))},c=function(e,n){var t,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(s=0)),s;)try{if(t=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return s.label++,{value:c[1],done:!1};case 5:s.label++,o=c[1],c=[0];continue;case 7:c=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){s=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){s.label=c[1];break}if(6===c[0]&&s.label<r[1]){s.label=r[1],r=c;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(c);break}r[2]&&s.ops.pop(),s.trys.pop();continue}c=n.call(e,s)}catch(a){c=[6,a],o=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}},a=function(){function e(e,n){this.connections={},this.client=e,this.safeConnectOptions=n}return e.prototype.saveConnections=function(){var n={};for(var t in this.connections){var r=this.connections[t];n[t]={address:r.address,chainId:r.chainId,providerType:r.providerType,blockchain:r.blockchain,ethers:o}}localStorage.setItem(e.LOCAL_STORAGE_KEY,JSON.stringify(n))},e.prototype.emitSavedConnection=function(e){return Object.keys(this.connections).length&&e?(this.client.eventSender("connected-wallet",this.connections[e.toLocaleLowerCase()]),this.connections[e.toLocaleLowerCase()]):null},e.prototype.emitNetworkChange=function(e){if(e)return this.client.eventSender("network-change",e),e},e.prototype.deleteConnections=function(){this.connections={},localStorage.removeItem(e.LOCAL_STORAGE_KEY),localStorage.removeItem("walletconnect"),sessionStorage.removeItem("CURRENT_USER")},e.prototype.loadConnections=function(){return s(this,void 0,void 0,(function(){var n,t,o,r,i,s,a,u,l;return c(this,(function(c){switch(c.label){case 0:if(!(n=localStorage.getItem(e.LOCAL_STORAGE_KEY)))return[2];if(!(t=JSON.parse(n)))return[2];for(i in r=[],o=t)r.push(i);s=0,c.label=1;case 1:if(!(s<r.length))return[3,6];if(!((i=r[s])in o))return[3,5];u=t[a=i],c.label=2;case 2:return c.trys.push([2,4,,5]),[4,this.connectWith(u.providerType,!0)];case 3:return c.sent(),[3,5];case 4:return l=c.sent(),console.log("Wallet couldn't connect: "+l.message),delete t[a],this.saveConnections(),this.emitSavedConnection(a),[3,5];case 5:return s++,[3,1];case 6:return[2]}}))}))},e.prototype.connectWith=function(e,n){return void 0===n&&(n=!1),s(this,void 0,void 0,(function(){var t;return c(this,(function(o){switch(o.label){case 0:if(!e)throw new Error("Please provide a Wallet type to connect with.");return this[e]?[4,this[e](n)]:[3,2];case 1:return t=o.sent(),(0,i.kg)(2,"address",t),this.saveConnections(),this.emitSavedConnection(t),[2,t];case 2:throw new Error("Wallet type not found")}}))}))},e.prototype.signMessage=function(e,n){return s(this,void 0,void 0,(function(){var t;return c(this,(function(o){switch(o.label){case 0:return t=this.getWalletProvider(e),[4,t.getSigner(e).signMessage(n)];case 1:return[2,o.sent()]}}))}))},e.prototype.getWalletProvider=function(e){var n;if(e=e.toLowerCase(),!(null===(n=this.connections[e])||void 0===n?void 0:n.provider))throw new Error("Wallet provider not found for address");return this.connections[e].provider},e.prototype.getConnectedWalletData=function(){return Object.values(this.connections)},e.prototype.registerNewWalletAddress=function(e,n,t,r,i){return void 0===i&&(i="evm"),this.connections[e.toLowerCase()]={address:e,chainId:n,providerType:t,provider:r,blockchain:i,ethers:o},e},e.prototype.registerProvider=function(e,n){return s(this,void 0,void 0,(function(){var t,o,r,i=this;return c(this,(function(s){switch(s.label){case 0:return[4,e.listAccounts()];case 1:return t=s.sent(),[4,e.detectNetwork()];case 2:if(o=s.sent().chainId,0===t.length)throw new Error("No accounts found via wallet-connect.");return r=t[0],this.registerNewWalletAddress(r,o,n,e),e.provider.on("accountsChanged",(function(t){t&&0!==t.length?r!==t[0]&&(delete i.connections[r.toLowerCase()],r=t[0],i.registerNewWalletAddress(r,o,n,e),i.saveConnections(),i.emitSavedConnection(r),i.client.getTokenStore().clearCachedTokens(),i.client.enrichTokenLookupDataOnChainTokens()):i.client.disconnectWallet()})),e.provider.on("chainChanged",(function(o){i.registerNewWalletAddress(t[0],o,n,e),i.saveConnections(),i.emitNetworkChange(o)})),e.provider.on("disconnect",(function(e){(null===e||void 0===e?void 0:e.message)&&e.message.indexOf("MetaMask: Disconnected from chain")>-1||i.client.disconnectWallet()})),[2,t[0]]}}))}))},e.prototype.MetaMask=function(e){return s(this,void 0,void 0,(function(){var e;return c(this,(function(n){switch(n.label){case 0:return(0,i.kg)(2,"connect MetaMask"),"undefined"===typeof window.ethereum?[3,2]:[4,window.ethereum.enable()];case 1:return n.sent(),e=new r.Q(window.ethereum,"any"),[2,this.registerProvider(e,"MetaMask")];case 2:throw new Error("MetaMask is not available. Please check the extension is supported and active.")}}))}))},e.prototype.WalletConnect=function(e){return s(this,void 0,void 0,(function(){var n,o=this;return c(this,(function(s){switch(s.label){case 0:return(0,i.kg)(2,"connect Wallet Connect"),[4,t.e(401).then(t.bind(t,3401))];case 1:return[4,s.sent().getWalletConnectProviderInstance(e)];case 2:return n=s.sent(),[2,new Promise((function(t,i){e&&n.connector.on("display_uri",(function(e,n){i(new Error("Connection expired"))})),n.enable().then((function(){var e=new r.Q(n,"any");t(o.registerProvider(e,"WalletConnect"))})).catch((function(e){return i(e)}))}))]}}))}))},e.prototype.WalletConnectV2=function(e){return s(this,void 0,void 0,(function(){var n,o,a,u=this;return c(this,(function(l){switch(l.label){case 0:return(0,i.kg)(2,"connect Wallet Connect V2"),[4,t.e(685).then(t.bind(t,9685))];case 1:return[4,(n=l.sent()).getWalletConnectV2ProviderInstance()];case 2:return(o=l.sent()).on("display_uri",(function(e){return s(u,void 0,void 0,(function(){var n=this;return c(this,(function(o){switch(o.label){case 0:return console.log("EVENT","QR Code Modal open"),[4,t.e(974).then(t.t.bind(t,1974,23))];case 1:return(a=o.sent().default).open(e,(function(){n.client.getUi().showError("User closed modal")})),[2]}}))}))})),o.on("session_delete",(function(e){e.id,e.topic;console.log("WC V2 EVENT","session_deleted"),u.client.disconnectWallet()})),e?[3,4]:(void 0,[4,o.connect({namespaces:{eip155:{methods:["eth_sendTransaction","eth_signTransaction","eth_sign","personal_sign","eth_signTypedData"],chains:n.WC_V2_CHAINS,events:["chainChanged","accountsChanged"],rpcMap:n.CUSTOM_RPCS_FOR_WC_V2}},pairingTopic:void 0})]);case 3:l.sent(),a.close(),l.label=4;case 4:return[2,new Promise((function(e,n){o.enable().then((function(){var n=new r.Q(o,"any");e(u.registerProvider(n,"WalletConnectV2"))})).catch((function(e){n(e)}))}))]}}))}))},e.prototype.Torus=function(e){return s(this,void 0,void 0,(function(){var e,n;return c(this,(function(o){switch(o.label){case 0:return[4,t.e(514).then(t.bind(t,2514))];case 1:return[4,o.sent().getTorusProviderInstance()];case 2:return[4,(e=o.sent()).init()];case 3:return o.sent(),[4,e.login()];case 4:return o.sent(),n=new r.Q(e.provider,"any"),[2,this.registerProvider(n,"Torus")]}}))}))},e.prototype.Phantom=function(){return s(this,void 0,void 0,(function(){var e,n;return c(this,(function(t){switch(t.label){case 0:return(0,i.kg)(2,"connect Phantom"),"undefined"===typeof window.solana?[3,2]:[4,window.solana.connect()];case 1:return e=t.sent(),n=e.publicKey.toBase58(),[2,this.registerNewWalletAddress(n,"mainnet-beta","phantom",window.solana,"solana")];case 2:throw new Error("MetaMask is not available. Please check the extension is supported and active.")}}))}))},e.prototype.SafeConnect=function(){return s(this,void 0,void 0,(function(){var e,n;return c(this,(function(t){switch(t.label){case 0:return(0,i.kg)(2,"connect SafeConnect"),[4,this.getSafeConnectProvider()];case 1:return[4,(e=t.sent()).initSafeConnect()];case 2:return n=t.sent(),this.registerNewWalletAddress(n,1,"SafeConnect",e),[2,n]}}))}))},e.prototype.flowSubscribe=function(e,n){return s(this,void 0,void 0,(function(){var t;return c(this,(function(o){try{n.addr&&(this.registerNewWalletAddress(n.addr,1,"flow",e),(t=this.client.getUi())&&t.dismissLoader(),this.client.enrichTokenLookupDataOnChainTokens(),t&&t.updateUI("main"))}catch(r){console.error("flow wallet connection error ==>",r),this.client.getUi().showError("Flow wallet connection error.")}return[2]}))}))},e.prototype.Flow=function(){return s(this,void 0,void 0,(function(){var e,n,o,r=this;return c(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,t.e(500).then(t.bind(t,7500))];case 1:return e=i.sent(),(n=e.getFlowProvider()).currentUser.subscribe((function(e){return r.flowSubscribe(n,e)})),n.authenticate(),[3,3];case 2:return o=i.sent(),console.error("error ==>",o),[3,3];case 3:return[2,""]}}))}))},e.prototype.safeConnectAvailable=function(){return void 0!==this.safeConnectOptions},e.prototype.getSafeConnectProvider=function(){return s(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return[4,Promise.resolve().then(t.bind(t,8421))];case 1:return[2,new(0,e.sent().SafeConnectProvider)(this.client.getUi(),this.safeConnectOptions)]}}))}))},e.LOCAL_STORAGE_KEY="tn-wallet-connections",e}();const u=a}}]);
//# sourceMappingURL=70.ce3959aa.chunk.js.map