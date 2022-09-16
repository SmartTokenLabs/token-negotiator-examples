"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[284],{70284:(e,t,n)=>{n.r(t),n.d(t,{Web3WalletProvider:()=>c,default:()=>a});var o=n(21289),r=n(31394),i=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(t){i(t)}}function c(e){try{a(o.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((o=o.apply(e,t||[])).next())}))},s=function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(c){i=[6,c],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c=function(){function e(e,t){this.connections={},this.client=e,this.safeConnectOptions=t}return e.prototype.saveConnections=function(){var t={};for(var n in this.connections){var o=this.connections[n];t[n]={address:o.address,chainId:o.chainId,providerType:o.providerType,blockchain:o.blockchain}}localStorage.setItem(e.LOCAL_STORAGE_KEY,JSON.stringify(t))},e.prototype.emitSavedConnection=function(e){return Object.keys(this.connections).length&&e?(this.client.eventSender.emitConnectedWalletInstance(this.connections[e.toLocaleLowerCase()]),this.connections[e.toLocaleLowerCase()]):null},e.prototype.deleteConnections=function(){this.connections={},localStorage.removeItem(e.LOCAL_STORAGE_KEY),localStorage.removeItem("walletconnect")},e.prototype.loadConnections=function(){return i(this,void 0,void 0,(function(){var t,n,o,r,i,c,a,u;return s(this,(function(s){switch(s.label){case 0:if(!(t=localStorage.getItem(e.LOCAL_STORAGE_KEY)))return[2];if(!(n=JSON.parse(t)))return[2];for(r in o=[],n)o.push(r);i=0,s.label=1;case 1:if(!(i<o.length))return[3,6];c=o[i],a=n[c],s.label=2;case 2:return s.trys.push([2,4,,5]),[4,this.connectWith(a.providerType,!0)];case 3:return s.sent(),[3,5];case 4:return u=s.sent(),console.log("Wallet couldn't connect"+u.message),delete n[c],this.saveConnections(),this.emitSavedConnection(c),[3,5];case 5:return i++,[3,1];case 6:return[2]}}))}))},e.prototype.connectWith=function(e,t){return void 0===t&&(t=!1),i(this,void 0,void 0,(function(){var n;return s(this,(function(o){switch(o.label){case 0:if(!e)throw new Error("Please provide a Wallet type to connect with.");return this[e]?[4,this[e](t)]:[3,2];case 1:return n=o.sent(),(0,r.kg)(2,"address",n),this.saveConnections(),this.emitSavedConnection(n),[2,n];case 2:throw new Error("Wallet type not found")}}))}))},e.prototype.signMessage=function(e,t){return i(this,void 0,void 0,(function(){var n;return s(this,(function(o){switch(o.label){case 0:return n=this.getWalletProvider(e),[4,n.getSigner(e).signMessage(t)];case 1:return[2,o.sent()]}}))}))},e.prototype.getWalletProvider=function(e){var t;if(e=e.toLowerCase(),!(null===(t=this.connections[e])||void 0===t?void 0:t.provider))throw new Error("Wallet provider not found for address");return this.connections[e].provider},e.prototype.getConnectedWalletData=function(){return Object.values(this.connections)},e.prototype.registerNewWalletAddress=function(e,t,n,o,r){return void 0===r&&(r="evm"),this.connections[e.toLowerCase()]={address:e,chainId:t,providerType:n,provider:o,blockchain:r},e},e.prototype.registerProvider=function(e,t){return i(this,void 0,void 0,(function(){var n,o,r,i=this;return s(this,(function(s){switch(s.label){case 0:return[4,e.listAccounts()];case 1:return n=s.sent(),[4,e.detectNetwork()];case 2:if(o=s.sent().chainId,0===n.length)throw new Error("No accounts found via wallet-connect.");return r=n[0],this.registerNewWalletAddress(r,o,t,e),e.provider.on("accountsChanged",(function(n){r!==n[0]&&(console.log("Account changed: "+n[0]),delete i.connections[r.toLowerCase()],r=n[0],i.registerNewWalletAddress(r,o,t,e),i.saveConnections(),i.emitSavedConnection(r),i.client.getTokenStore().clearCachedTokens(),i.client.enrichTokenLookupDataOnChainTokens())})),[2,n[0]]}}))}))},e.prototype.MetaMask=function(e){return i(this,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return(0,r.kg)(2,"connect MetaMask"),"undefined"===typeof window.ethereum?[3,2]:[4,window.ethereum.enable()];case 1:return t.sent(),e=new o.Q(window.ethereum),[2,this.registerProvider(e,"MetaMask")];case 2:throw new Error("MetaMask is not available. Please check the extension is supported and active.")}}))}))},e.prototype.WalletConnect=function(e){return i(this,void 0,void 0,(function(){var t,i=this;return s(this,(function(s){switch(s.label){case 0:return(0,r.kg)(2,"connect Wallet Connect"),[4,Promise.all([n.e(399),n.e(631),n.e(923)]).then(n.bind(n,75591))];case 1:return[4,s.sent().getWalletConnectProviderInstance(e)];case 2:return t=s.sent(),[2,new Promise((function(n,r){e&&t.connector.on("display_uri",(function(e,t){r(new Error("Connection expired"))})),t.enable().then((function(){var e=new o.Q(t);n(i.registerProvider(e,"WalletConnect"))})).catch((function(e){return r(e)}))}))]}}))}))},e.prototype.Torus=function(e){return i(this,void 0,void 0,(function(){var e,t;return s(this,(function(r){switch(r.label){case 0:return[4,Promise.all([n.e(399),n.e(569),n.e(907)]).then(n.bind(n,70421))];case 1:return[4,r.sent().getTorusProviderInstance()];case 2:return[4,(e=r.sent()).init()];case 3:return r.sent(),[4,e.login()];case 4:return r.sent(),t=new o.Q(e.provider),[2,this.registerProvider(t,"Torus")]}}))}))},e.prototype.Phantom=function(){return i(this,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return(0,r.kg)(2,"connect Phantom"),"undefined"===typeof window.solana?[3,2]:[4,window.solana.connect()];case 1:return e=n.sent(),t=e.publicKey.toBase58(),[2,this.registerNewWalletAddress(t,"mainnet-beta","phantom",window.solana,"solana")];case 2:throw new Error("MetaMask is not available. Please check the extension is supported and active.")}}))}))},e.prototype.SafeConnect=function(){return i(this,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return(0,r.kg)(2,"connect SafeConnect"),[4,this.getSafeConnectProvider()];case 1:return[4,(e=n.sent()).initSafeConnect()];case 2:return t=n.sent(),this.registerNewWalletAddress(t,1,"SafeConnect",e),[2,t]}}))}))},e.prototype.safeConnectAvailable=function(){return void 0!==this.safeConnectOptions},e.prototype.getSafeConnectProvider=function(){return i(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,Promise.resolve().then(n.bind(n,20453))];case 1:return[2,new(0,e.sent().SafeConnectProvider)(this.client.getUi(),this.safeConnectOptions)]}}))}))},e.LOCAL_STORAGE_KEY="tn-wallet-connections",e}();const a=c}}]);
//# sourceMappingURL=284.8d2e8827.chunk.js.map