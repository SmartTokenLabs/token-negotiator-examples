"use strict";(self.webpackChunkAngular_bare_bones_demo=self.webpackChunkAngular_bare_bones_demo||[]).push([[724],{23724:(P,g,u)=>{u.r(g),u.d(g,{Web3WalletProvider:()=>y,default:()=>b});var p=u(64266),w=u(59267),v=u(14033),h=function(s,n,e,r){return new(e||(e=Promise))(function(t,c){function l(d){try{o(r.next(d))}catch(C){c(C)}}function a(d){try{o(r.throw(d))}catch(C){c(C)}}function o(d){d.done?t(d.value):function i(t){return t instanceof e?t:new e(function(c){c(t)})}(d.value).then(l,a)}o((r=r.apply(s,n||[])).next())})},f=function(s,n){var r,i,t,c,e={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return c={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function l(o){return function(d){return function a(o){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,i&&(t=2&o[0]?i.return:o[0]?i.throw||((t=i.return)&&t.call(i),0):i.next)&&!(t=t.call(i,o[1])).done)return t;switch(i=0,t&&(o=[2&o[0],t.value]),o[0]){case 0:case 1:t=o;break;case 4:return e.label++,{value:o[1],done:!1};case 5:e.label++,i=o[1],o=[0];continue;case 7:o=e.ops.pop(),e.trys.pop();continue;default:if(!(t=(t=e.trys).length>0&&t[t.length-1])&&(6===o[0]||2===o[0])){e=0;continue}if(3===o[0]&&(!t||o[1]>t[0]&&o[1]<t[3])){e.label=o[1];break}if(6===o[0]&&e.label<t[1]){e.label=t[1],t=o;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(o);break}t[2]&&e.ops.pop(),e.trys.pop();continue}o=n.call(s,e)}catch(d){o=[6,d],i=0}finally{r=t=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,d])}}},y=function(){function s(n,e){this.connections={},this.client=n,this.safeConnectOptions=e}return s.prototype.saveConnections=function(){var n={};for(var e in this.connections){var r=this.connections[e];n[e]={address:r.address,chainId:r.chainId,providerType:r.providerType,blockchain:r.blockchain,ethers:p}}localStorage.setItem(s.LOCAL_STORAGE_KEY,JSON.stringify(n))},s.prototype.emitSavedConnection=function(n){return Object.keys(this.connections).length&&n?(this.client.eventSender.emitConnectedWalletInstance(this.connections[n.toLocaleLowerCase()]),this.connections[n.toLocaleLowerCase()]):null},s.prototype.emitNetworkChange=function(n){if(n)return this.client.eventSender.emitNetworkChange(n),n},s.prototype.deleteConnections=function(){this.connections={},localStorage.removeItem(s.LOCAL_STORAGE_KEY),localStorage.removeItem("walletconnect")},s.prototype.loadConnections=function(){return h(this,void 0,void 0,function(){var n,e,r,i,t,c,l,a;return f(this,function(o){switch(o.label){case 0:if(!(n=localStorage.getItem(s.LOCAL_STORAGE_KEY)))return[2];if(!(e=JSON.parse(n)))return[2];for(i in r=[],e)r.push(i);t=0,o.label=1;case 1:if(!(t<r.length))return[3,6];l=e[c=r[t]],o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.connectWith(l.providerType,!0)];case 3:return o.sent(),[3,5];case 4:return a=o.sent(),console.log("Wallet couldn't connect"+a.message),delete e[c],this.saveConnections(),this.emitSavedConnection(c),[3,5];case 5:return t++,[3,1];case 6:return[2]}})})},s.prototype.connectWith=function(n,e){return void 0===e&&(e=!1),h(this,void 0,void 0,function(){var r;return f(this,function(i){switch(i.label){case 0:if(!n)throw new Error("Please provide a Wallet type to connect with.");return this[n]?[4,this[n](e)]:[3,2];case 1:return r=i.sent(),(0,v.kg)(2,"address",r),this.saveConnections(),this.emitSavedConnection(r),[2,r];case 2:throw new Error("Wallet type not found")}})})},s.prototype.signMessage=function(n,e){return h(this,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return[4,this.getWalletProvider(n).getSigner(n).signMessage(e)];case 1:return[2,t.sent()]}})})},s.prototype.getWalletProvider=function(n){var e;if(n=n.toLowerCase(),!(null===(e=this.connections[n])||void 0===e?void 0:e.provider))throw new Error("Wallet provider not found for address");return this.connections[n].provider},s.prototype.getConnectedWalletData=function(){return Object.values(this.connections)},s.prototype.registerNewWalletAddress=function(n,e,r,i,t){return void 0===t&&(t="evm"),this.connections[n.toLowerCase()]={address:n,chainId:e,providerType:r,provider:i,blockchain:t,ethers:p},n},s.prototype.registerProvider=function(n,e){return h(this,void 0,void 0,function(){var r,i,t,c=this;return f(this,function(l){switch(l.label){case 0:return[4,n.listAccounts()];case 1:return r=l.sent(),[4,n.detectNetwork()];case 2:if(i=l.sent().chainId,0===r.length)throw new Error("No accounts found via wallet-connect.");return this.registerNewWalletAddress(t=r[0],i,e,n),n.provider.on("accountsChanged",function(a){t!==a[0]&&(delete c.connections[t.toLowerCase()],c.registerNewWalletAddress(t=a[0],i,e,n),c.saveConnections(),c.emitSavedConnection(t),c.client.getTokenStore().clearCachedTokens(),c.client.enrichTokenLookupDataOnChainTokens())}),n.provider.on("chainChanged",function(a){c.registerNewWalletAddress(r[0],a,e,n),c.saveConnections(),c.emitNetworkChange(a)}),[2,r[0]]}})})},s.prototype.MetaMask=function(n){return h(this,void 0,void 0,function(){var e;return f(this,function(r){switch(r.label){case 0:return(0,v.kg)(2,"connect MetaMask"),typeof window.ethereum<"u"?[4,window.ethereum.enable()]:[3,2];case 1:return r.sent(),e=new w.Q(window.ethereum,"any"),[2,this.registerProvider(e,"MetaMask")];case 2:throw new Error("MetaMask is not available. Please check the extension is supported and active.")}})})},s.prototype.WalletConnect=function(n){return h(this,void 0,void 0,function(){var r,i=this;return f(this,function(t){switch(t.label){case 0:return(0,v.kg)(2,"connect Wallet Connect"),[4,Promise.all([u.e(453),u.e(228)]).then(u.bind(u,62228))];case 1:return[4,t.sent().getWalletConnectProviderInstance(n)];case 2:return r=t.sent(),[2,new Promise(function(c,l){n&&r.connector.on("display_uri",function(a,o){l(new Error("Connection expired"))}),r.enable().then(function(){var a=new w.Q(r);c(i.registerProvider(a,"WalletConnect"))}).catch(function(a){return l(a)})})]}})})},s.prototype.Torus=function(n){return h(this,void 0,void 0,function(){var r,i;return f(this,function(t){switch(t.label){case 0:return[4,Promise.all([u.e(453),u.e(354)]).then(u.bind(u,81354))];case 1:return[4,t.sent().getTorusProviderInstance()];case 2:return[4,(r=t.sent()).init()];case 3:return t.sent(),[4,r.login()];case 4:return t.sent(),i=new w.Q(r.provider),[2,this.registerProvider(i,"Torus")]}})})},s.prototype.Phantom=function(){return h(this,void 0,void 0,function(){var n,e;return f(this,function(r){switch(r.label){case 0:return(0,v.kg)(2,"connect Phantom"),typeof window.solana<"u"?[4,window.solana.connect()]:[3,2];case 1:return n=r.sent(),e=n.publicKey.toBase58(),[2,this.registerNewWalletAddress(e,"mainnet-beta","phantom",window.solana,"solana")];case 2:throw new Error("MetaMask is not available. Please check the extension is supported and active.")}})})},s.prototype.SafeConnect=function(){return h(this,void 0,void 0,function(){var n,e;return f(this,function(r){switch(r.label){case 0:return(0,v.kg)(2,"connect SafeConnect"),[4,this.getSafeConnectProvider()];case 1:return[4,(n=r.sent()).initSafeConnect()];case 2:return e=r.sent(),this.registerNewWalletAddress(e,1,"SafeConnect",n),[2,e]}})})},s.prototype.safeConnectAvailable=function(){return void 0!==this.safeConnectOptions},s.prototype.getSafeConnectProvider=function(){return h(this,void 0,void 0,function(){return f(this,function(e){switch(e.label){case 0:return[4,Promise.resolve().then(u.bind(u,67747))];case 1:return[2,new(0,e.sent().SafeConnectProvider)(this.client.getUi(),this.safeConnectOptions)]}})})},s.LOCAL_STORAGE_KEY="tn-wallet-connections",s}();const b=y}}]);