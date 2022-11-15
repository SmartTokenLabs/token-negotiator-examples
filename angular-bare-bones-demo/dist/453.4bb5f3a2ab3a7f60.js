(self.webpackChunkAngular_bare_bones_demo=self.webpackChunkAngular_bare_bones_demo||[]).push([[453],{14521:(_,t,p)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=p(93105);function b(l,g,n){try{Reflect.apply(l,g,n)}catch(f){setTimeout(()=>{throw f})}}t.default=class i extends e.EventEmitter{emit(g,...n){let f="error"===g;const m=this._events;if(void 0!==m)f=f&&void 0===m.error;else if(!f)return!1;if(f){let u;if(n.length>0&&([u]=n),u instanceof Error)throw u;const s=new Error("Unhandled error."+(u?` (${u.message})`:""));throw s.context=u,s}const w=m[g];if(void 0===w)return!1;if("function"==typeof w)b(w,this,n);else{const u=w.length,s=function c(l){const g=l.length,n=new Array(g);for(let f=0;f<g;f+=1)n[f]=l[f];return n}(w);for(let y=0;y<u;y+=1)b(s[y],this,n)}return!0}}},13361:(_,t,p)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EthereumProviderError=t.EthereumRpcError=void 0;const e=p(47300);class b extends Error{constructor(n,f,m){if(!Number.isInteger(n))throw new Error('"code" must be an integer.');if(!f||"string"!=typeof f)throw new Error('"message" must be a nonempty string.');super(f),this.code=n,void 0!==m&&(this.data=m)}serialize(){const n={code:this.code,message:this.message};return void 0!==this.data&&(n.data=this.data),this.stack&&(n.stack=this.stack),n}toString(){return e.default(this.serialize(),l,2)}}function l(g,n){if("[Circular]"!==n)return n}t.EthereumRpcError=b,t.EthereumProviderError=class c extends b{constructor(n,f,m){if(!function i(g){return Number.isInteger(g)&&g>=1e3&&g<=4999}(n))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(n,f,m)}}},2322:(_,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.errorValues=t.errorCodes=void 0,t.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}},t.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}}},60828:(_,t,p)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ethErrors=void 0;const e=p(13361),b=p(27564),c=p(2322);function i(n,f){const[m,w]=g(f);return new e.EthereumRpcError(n,m||b.getMessageFromCode(n),w)}function l(n,f){const[m,w]=g(f);return new e.EthereumProviderError(n,m||b.getMessageFromCode(n),w)}function g(n){if(n){if("string"==typeof n)return[n];if("object"==typeof n&&!Array.isArray(n)){const{message:f,data:m}=n;if(f&&"string"!=typeof f)throw new Error("Must specify string message.");return[f||void 0,m]}}return[]}t.ethErrors={rpc:{parse:n=>i(c.errorCodes.rpc.parse,n),invalidRequest:n=>i(c.errorCodes.rpc.invalidRequest,n),invalidParams:n=>i(c.errorCodes.rpc.invalidParams,n),methodNotFound:n=>i(c.errorCodes.rpc.methodNotFound,n),internal:n=>i(c.errorCodes.rpc.internal,n),server:n=>{if(!n||"object"!=typeof n||Array.isArray(n))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:f}=n;if(!Number.isInteger(f)||f>-32005||f<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return i(f,n)},invalidInput:n=>i(c.errorCodes.rpc.invalidInput,n),resourceNotFound:n=>i(c.errorCodes.rpc.resourceNotFound,n),resourceUnavailable:n=>i(c.errorCodes.rpc.resourceUnavailable,n),transactionRejected:n=>i(c.errorCodes.rpc.transactionRejected,n),methodNotSupported:n=>i(c.errorCodes.rpc.methodNotSupported,n),limitExceeded:n=>i(c.errorCodes.rpc.limitExceeded,n)},provider:{userRejectedRequest:n=>l(c.errorCodes.provider.userRejectedRequest,n),unauthorized:n=>l(c.errorCodes.provider.unauthorized,n),unsupportedMethod:n=>l(c.errorCodes.provider.unsupportedMethod,n),disconnected:n=>l(c.errorCodes.provider.disconnected,n),chainDisconnected:n=>l(c.errorCodes.provider.chainDisconnected,n),custom:n=>{if(!n||"object"!=typeof n||Array.isArray(n))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:f,message:m,data:w}=n;if(!m||"string"!=typeof m)throw new Error('"message" must be a nonempty string');return new e.EthereumProviderError(f,m,w)}}}},56396:(_,t,p)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMessageFromCode=t.serializeError=t.EthereumProviderError=t.EthereumRpcError=t.ethErrors=t.errorCodes=void 0;const e=p(13361);Object.defineProperty(t,"EthereumRpcError",{enumerable:!0,get:function(){return e.EthereumRpcError}}),Object.defineProperty(t,"EthereumProviderError",{enumerable:!0,get:function(){return e.EthereumProviderError}});const b=p(27564);Object.defineProperty(t,"serializeError",{enumerable:!0,get:function(){return b.serializeError}}),Object.defineProperty(t,"getMessageFromCode",{enumerable:!0,get:function(){return b.getMessageFromCode}});const c=p(60828);Object.defineProperty(t,"ethErrors",{enumerable:!0,get:function(){return c.ethErrors}});const i=p(2322);Object.defineProperty(t,"errorCodes",{enumerable:!0,get:function(){return i.errorCodes}})},27564:(_,t,p)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.serializeError=t.isValidCode=t.getMessageFromCode=t.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;const e=p(2322),b=p(13361),c=e.errorCodes.rpc.internal,l={code:c,message:g(c)};function g(s,y="Unspecified error message. This is a bug, please report it."){if(Number.isInteger(s)){const h=s.toString();if(u(e.errorValues,h))return e.errorValues[h].message;if(m(s))return t.JSON_RPC_SERVER_ERROR_MESSAGE}return y}function n(s){if(!Number.isInteger(s))return!1;const y=s.toString();return!(!e.errorValues[y]&&!m(s))}function m(s){return s>=-32099&&s<=-32e3}function w(s){return s&&"object"==typeof s&&!Array.isArray(s)?Object.assign({},s):s}function u(s,y){return Object.prototype.hasOwnProperty.call(s,y)}t.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.",t.getMessageFromCode=g,t.isValidCode=n,t.serializeError=function f(s,{fallbackError:y=l,shouldIncludeStack:h=!1}={}){var E,v;if(!y||!Number.isInteger(y.code)||"string"!=typeof y.message)throw new Error("Must provide fallback error with integer number code and string message.");if(s instanceof b.EthereumRpcError)return s.serialize();const S={};if(s&&"object"==typeof s&&!Array.isArray(s)&&u(s,"code")&&n(s.code)){const C=s;S.code=C.code,C.message&&"string"==typeof C.message?(S.message=C.message,u(C,"data")&&(S.data=C.data)):(S.message=g(S.code),S.data={originalError:w(s)})}else{S.code=y.code;const C=null===(E=s)||void 0===E?void 0:E.message;S.message=C&&"string"==typeof C?C:y.message,S.data={originalError:w(s)}}const A=null===(v=s)||void 0===v?void 0:v.stack;return h&&s&&A&&"string"==typeof A&&(S.stack=A),S}},47300:_=>{_.exports=i,i.default=i,i.stable=f,i.stableStringify=f;var t="[...]",p="[Circular]",e=[],b=[];function c(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function i(u,s,y,h){var E;typeof h>"u"&&(h=c()),g(u,"",0,[],void 0,0,h);try{E=0===b.length?JSON.stringify(u,s,y):JSON.stringify(u,w(s),y)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==e.length;){var v=e.pop();4===v.length?Object.defineProperty(v[0],v[1],v[3]):v[0][v[1]]=v[2]}}return E}function l(u,s,y,h){var E=Object.getOwnPropertyDescriptor(h,y);void 0!==E.get?E.configurable?(Object.defineProperty(h,y,{value:u}),e.push([h,y,s,E])):b.push([s,y,u]):(h[y]=u,e.push([h,y,s]))}function g(u,s,y,h,E,v,S){var A;if(v+=1,"object"==typeof u&&null!==u){for(A=0;A<h.length;A++)if(h[A]===u)return void l(p,u,s,E);if(typeof S.depthLimit<"u"&&v>S.depthLimit)return void l(t,u,s,E);if(typeof S.edgesLimit<"u"&&y+1>S.edgesLimit)return void l(t,u,s,E);if(h.push(u),Array.isArray(u))for(A=0;A<u.length;A++)g(u[A],A,A,h,u,v,S);else{var C=Object.keys(u);for(A=0;A<C.length;A++){var N=C[A];g(u[N],N,A,h,u,v,S)}}h.pop()}}function n(u,s){return u<s?-1:u>s?1:0}function f(u,s,y,h){typeof h>"u"&&(h=c());var v,E=m(u,"",0,[],void 0,0,h)||u;try{v=0===b.length?JSON.stringify(E,s,y):JSON.stringify(E,w(s),y)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==e.length;){var S=e.pop();4===S.length?Object.defineProperty(S[0],S[1],S[3]):S[0][S[1]]=S[2]}}return v}function m(u,s,y,h,E,v,S){var A;if(v+=1,"object"==typeof u&&null!==u){for(A=0;A<h.length;A++)if(h[A]===u)return void l(p,u,s,E);try{if("function"==typeof u.toJSON)return}catch{return}if(typeof S.depthLimit<"u"&&v>S.depthLimit)return void l(t,u,s,E);if(typeof S.edgesLimit<"u"&&y+1>S.edgesLimit)return void l(t,u,s,E);if(h.push(u),Array.isArray(u))for(A=0;A<u.length;A++)m(u[A],A,A,h,u,v,S);else{var C={},N=Object.keys(u).sort(n);for(A=0;A<N.length;A++){var I=N[A];m(u[I],I,A,h,u,v,S),C[I]=u[I]}if(!(typeof E<"u"))return C;e.push([E,s,u]),E[s]=C}h.pop()}}function w(u){return u=typeof u<"u"?u:function(s,y){return y},function(s,y){if(b.length>0)for(var h=0;h<b.length;h++){var E=b[h];if(E[1]===s&&E[0]===y){y=E[2],b.splice(h,1);break}}return u.call(this,s,y)}}},32208:(_,t,p)=>{"use strict";var e=p(17701),b=Object.prototype.toString,c=Object.prototype.hasOwnProperty,i=function(m,w,u){for(var s=0,y=m.length;s<y;s++)c.call(m,s)&&(null==u?w(m[s],s,m):w.call(u,m[s],s,m))},l=function(m,w,u){for(var s=0,y=m.length;s<y;s++)null==u?w(m.charAt(s),s,m):w.call(u,m.charAt(s),s,m)},g=function(m,w,u){for(var s in m)c.call(m,s)&&(null==u?w(m[s],s,m):w.call(u,m[s],s,m))};_.exports=function(m,w,u){if(!e(w))throw new TypeError("iterator must be a function");var s;arguments.length>=3&&(s=u),"[object Array]"===b.call(m)?i(m,w,s):"string"==typeof m?l(m,w,s):g(m,w,s)}},81294:(_,t,p)=>{"use strict";var b=p(18540)("%Object.getOwnPropertyDescriptor%",!0);if(b)try{b([],"length")}catch{b=null}_.exports=b},77316:(_,t,p)=>{"use strict";var e=p(91407)(),c=p(19568)("Object.prototype.toString"),i=function(f){return!(e&&f&&"object"==typeof f&&Symbol.toStringTag in f)&&"[object Arguments]"===c(f)},l=function(f){return!!i(f)||null!==f&&"object"==typeof f&&"number"==typeof f.length&&f.length>=0&&"[object Array]"!==c(f)&&"[object Function]"===c(f.callee)},g=function(){return i(arguments)}();i.isLegacyArguments=l,_.exports=g?i:l},72197:(_,t,p)=>{"use strict";var n,e=Object.prototype.toString,b=Function.prototype.toString,c=/^\s*(?:function)?\*/,i=p(91407)(),l=Object.getPrototypeOf;_.exports=function(m){if("function"!=typeof m)return!1;if(c.test(b.call(m)))return!0;if(!i)return"[object GeneratorFunction]"===e.call(m);if(!l)return!1;if(typeof n>"u"){var u=function(){if(!i)return!1;try{return Function("return function*() {}")()}catch{}}();n=!!u&&l(u)}return l(m)===n}},77579:(_,t,p)=>{"use strict";var e=p(32208),b=p(85127),c=p(19568),i=c("Object.prototype.toString"),l=p(91407)(),g=p(81294),n=typeof globalThis>"u"?global:globalThis,f=b(),m=c("Array.prototype.indexOf",!0)||function(E,v){for(var S=0;S<E.length;S+=1)if(E[S]===v)return S;return-1},w=c("String.prototype.slice"),u={},s=Object.getPrototypeOf;l&&g&&s&&e(f,function(h){var E=new n[h];if(Symbol.toStringTag in E){var v=s(E),S=g(v,Symbol.toStringTag);if(!S){var A=s(v);S=g(A,Symbol.toStringTag)}u[h]=S.get}}),_.exports=function(E){if(!E||"object"!=typeof E)return!1;if(!l||!(Symbol.toStringTag in E)){var v=w(i(E),8,-1);return m(f,v)>-1}return!!g&&function(E){var v=!1;return e(u,function(S,A){if(!v)try{v=S.call(E)===A}catch{}}),v}(E)}},58577:(_,t,p)=>{_.exports=p(40378)(p(50349))},40378:(_,t,p)=>{const e=p(73396),b=p(24079);_.exports=function(c){const i=e(c),l=b(c);return function(g,n){switch("string"==typeof g?g.toLowerCase():g){case"keccak224":return new i(1152,448,null,224,n);case"keccak256":return new i(1088,512,null,256,n);case"keccak384":return new i(832,768,null,384,n);case"keccak512":return new i(576,1024,null,512,n);case"sha3-224":return new i(1152,448,6,224,n);case"sha3-256":return new i(1088,512,6,256,n);case"sha3-384":return new i(832,768,6,384,n);case"sha3-512":return new i(576,1024,6,512,n);case"shake128":return new l(1344,256,31,n);case"shake256":return new l(1088,512,31,n);default:throw new Error("Invald algorithm: "+g)}}}},73396:(_,t,p)=>{const{Transform:e}=p(18300);_.exports=b=>class ct extends e{constructor(i,l,g,n,f){super(f),this._rate=i,this._capacity=l,this._delimitedSuffix=g,this._hashBitLength=n,this._options=f,this._state=new b,this._state.initialize(i,l),this._finalized=!1}_transform(i,l,g){let n=null;try{this.update(i,l)}catch(f){n=f}g(n)}_flush(i){let l=null;try{this.push(this.digest())}catch(g){l=g}i(l)}update(i,l){if(!Buffer.isBuffer(i)&&"string"!=typeof i)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return Buffer.isBuffer(i)||(i=Buffer.from(i,l)),this._state.absorb(i),this}digest(i){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let l=this._state.squeeze(this._hashBitLength/8);return void 0!==i&&(l=l.toString(i)),this._resetState(),l}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const i=new ct(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(i._state),i._finalized=this._finalized,i}}},24079:(_,t,p)=>{const{Transform:e}=p(18300);_.exports=b=>class ft extends e{constructor(i,l,g,n){super(n),this._rate=i,this._capacity=l,this._delimitedSuffix=g,this._options=n,this._state=new b,this._state.initialize(i,l),this._finalized=!1}_transform(i,l,g){let n=null;try{this.update(i,l)}catch(f){n=f}g(n)}_flush(){}_read(i){this.push(this.squeeze(i))}update(i,l){if(!Buffer.isBuffer(i)&&"string"!=typeof i)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return Buffer.isBuffer(i)||(i=Buffer.from(i,l)),this._state.absorb(i),this}squeeze(i,l){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let g=this._state.squeeze(i);return void 0!==l&&(g=g.toString(l)),g}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const i=new ft(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(i._state),i._finalized=this._finalized,i}}},11126:(_,t)=>{const p=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];t.p1600=function(e){for(let b=0;b<24;++b){const c=e[0]^e[10]^e[20]^e[30]^e[40],i=e[1]^e[11]^e[21]^e[31]^e[41],l=e[2]^e[12]^e[22]^e[32]^e[42],g=e[3]^e[13]^e[23]^e[33]^e[43],n=e[4]^e[14]^e[24]^e[34]^e[44],f=e[5]^e[15]^e[25]^e[35]^e[45],m=e[6]^e[16]^e[26]^e[36]^e[46],w=e[7]^e[17]^e[27]^e[37]^e[47],u=e[8]^e[18]^e[28]^e[38]^e[48],s=e[9]^e[19]^e[29]^e[39]^e[49];let y=u^(l<<1|g>>>31),h=s^(g<<1|l>>>31);const E=e[0]^y,v=e[1]^h,S=e[10]^y,A=e[11]^h,C=e[20]^y,N=e[21]^h,I=e[30]^y,X=e[31]^h,M=e[40]^y,L=e[41]^h;y=c^(n<<1|f>>>31),h=i^(f<<1|n>>>31);const k=e[2]^y,G=e[3]^h,V=e[12]^y,F=e[13]^h,x=e[22]^y,U=e[23]^h,Z=e[32]^y,$=e[33]^h,ee=e[42]^y,W=e[43]^h;y=l^(m<<1|w>>>31),h=g^(w<<1|m>>>31);const D=e[4]^y,K=e[5]^h,q=e[14]^y,r=e[15]^h,o=e[24]^y,d=e[25]^h,O=e[34]^y,R=e[35]^h,z=e[44]^y,j=e[45]^h;y=n^(u<<1|s>>>31),h=f^(s<<1|u>>>31);const P=e[6]^y,T=e[7]^h,B=e[16]^y,J=e[17]^h,Q=e[26]^y,H=e[27]^h,Y=e[36]^y,te=e[37]^h,re=e[46]^y,ne=e[47]^h;y=m^(c<<1|i>>>31),h=w^(i<<1|c>>>31);const a=e[8]^y,ie=e[9]^h,oe=e[18]^y,rt=e[19]^h,nt=e[28]^y,it=e[29]^h,ot=e[38]^y,st=e[39]^h,at=e[48]^y,ut=e[49]^h,se=E,ae=v,ue=A<<4|S>>>28,ce=S<<4|A>>>28,fe=C<<3|N>>>29,le=N<<3|C>>>29,de=X<<9|I>>>23,he=I<<9|X>>>23,ye=M<<18|L>>>14,ge=L<<18|M>>>14,pe=k<<1|G>>>31,me=G<<1|k>>>31,be=F<<12|V>>>20,Se=V<<12|F>>>20,Ee=x<<10|U>>>22,we=U<<10|x>>>22,Ae=$<<13|Z>>>19,ve=Z<<13|$>>>19,Oe=ee<<2|W>>>30,je=W<<2|ee>>>30,_e=K<<30|D>>>2,Pe=D<<30|K>>>2,Re=q<<6|r>>>26,ze=r<<6|q>>>26,Te=d<<11|o>>>21,Ce=o<<11|d>>>21,Be=O<<15|R>>>17,Ne=R<<15|O>>>17,Ie=j<<29|z>>>3,Me=z<<29|j>>>3,Fe=P<<28|T>>>4,De=T<<28|P>>>4,ke=J<<23|B>>>9,Ue=B<<23|J>>>9,Le=Q<<25|H>>>7,Ve=H<<25|Q>>>7,Je=Y<<21|te>>>11,Ge=te<<21|Y>>>11,$e=ne<<24|re>>>8,We=re<<24|ne>>>8,Ke=a<<27|ie>>>5,He=ie<<27|a>>>5,Ze=oe<<20|rt>>>12,Xe=rt<<20|oe>>>12,qe=it<<7|nt>>>25,Qe=nt<<7|it>>>25,Ye=ot<<8|st>>>24,xe=st<<8|ot>>>24,et=at<<14|ut>>>18,tt=ut<<14|at>>>18;e[0]=se^~be&Te,e[1]=ae^~Se&Ce,e[10]=Fe^~Ze&fe,e[11]=De^~Xe&le,e[20]=pe^~Re&Le,e[21]=me^~ze&Ve,e[30]=Ke^~ue&Ee,e[31]=He^~ce&we,e[40]=_e^~ke&qe,e[41]=Pe^~Ue&Qe,e[2]=be^~Te&Je,e[3]=Se^~Ce&Ge,e[12]=Ze^~fe&Ae,e[13]=Xe^~le&ve,e[22]=Re^~Le&Ye,e[23]=ze^~Ve&xe,e[32]=ue^~Ee&Be,e[33]=ce^~we&Ne,e[42]=ke^~qe&de,e[43]=Ue^~Qe&he,e[4]=Te^~Je&et,e[5]=Ce^~Ge&tt,e[14]=fe^~Ae&Ie,e[15]=le^~ve&Me,e[24]=Le^~Ye&ye,e[25]=Ve^~xe&ge,e[34]=Ee^~Be&$e,e[35]=we^~Ne&We,e[44]=qe^~de&Oe,e[45]=Qe^~he&je,e[6]=Je^~et&se,e[7]=Ge^~tt&ae,e[16]=Ae^~Ie&Fe,e[17]=ve^~Me&De,e[26]=Ye^~ye&pe,e[27]=xe^~ge&me,e[36]=Be^~$e&Ke,e[37]=Ne^~We&He,e[46]=de^~Oe&_e,e[47]=he^~je&Pe,e[8]=et^~se&be,e[9]=tt^~ae&Se,e[18]=Ie^~Fe&Ze,e[19]=Me^~De&Xe,e[28]=ye^~pe&Re,e[29]=ge^~me&ze,e[38]=$e^~Ke&ue,e[39]=We^~He&ce,e[48]=Oe^~_e&ke,e[49]=je^~Pe&Ue,e[0]^=p[2*b],e[1]^=p[2*b+1]}}},50349:(_,t,p)=>{const e=p(11126);function b(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}b.prototype.initialize=function(c,i){for(let l=0;l<50;++l)this.state[l]=0;this.blockSize=c/8,this.count=0,this.squeezing=!1},b.prototype.absorb=function(c){for(let i=0;i<c.length;++i)this.state[~~(this.count/4)]^=c[i]<<this.count%4*8,this.count+=1,this.count===this.blockSize&&(e.p1600(this.state),this.count=0)},b.prototype.absorbLastFewBits=function(c){this.state[~~(this.count/4)]^=c<<this.count%4*8,0!=(128&c)&&this.count===this.blockSize-1&&e.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<(this.blockSize-1)%4*8,e.p1600(this.state),this.count=0,this.squeezing=!0},b.prototype.squeeze=function(c){this.squeezing||this.absorbLastFewBits(1);const i=Buffer.alloc(c);for(let l=0;l<c;++l)i[l]=this.state[~~(this.count/4)]>>>this.count%4*8&255,this.count+=1,this.count===this.blockSize&&(e.p1600(this.state),this.count=0);return i},b.prototype.copy=function(c){for(let i=0;i<50;++i)c.state[i]=this.state[i];c.blockSize=this.blockSize,c.count=this.count,c.squeezing=this.squeezing},_.exports=b},20826:_=>{_.exports=function(p){return p&&"object"==typeof p&&"function"==typeof p.copy&&"function"==typeof p.fill&&"function"==typeof p.readUInt8}},17775:(_,t,p)=>{"use strict";var e=p(77316),b=p(72197),c=p(23446),i=p(77579);function l(a){return a.call.bind(a)}var g=typeof BigInt<"u",n=typeof Symbol<"u",f=l(Object.prototype.toString),m=l(Number.prototype.valueOf),w=l(String.prototype.valueOf),u=l(Boolean.prototype.valueOf);if(g)var s=l(BigInt.prototype.valueOf);if(n)var y=l(Symbol.prototype.valueOf);function h(a,ie){if("object"!=typeof a)return!1;try{return ie(a),!0}catch{return!1}}function F(a){return"[object Map]"===f(a)}function U(a){return"[object Set]"===f(a)}function $(a){return"[object WeakMap]"===f(a)}function W(a){return"[object WeakSet]"===f(a)}function K(a){return"[object ArrayBuffer]"===f(a)}function q(a){return!(typeof ArrayBuffer>"u")&&(K.working?K(a):a instanceof ArrayBuffer)}function r(a){return"[object DataView]"===f(a)}function o(a){return!(typeof DataView>"u")&&(r.working?r(a):a instanceof DataView)}t.isArgumentsObject=e,t.isGeneratorFunction=b,t.isTypedArray=i,t.isPromise=function E(a){return typeof Promise<"u"&&a instanceof Promise||null!==a&&"object"==typeof a&&"function"==typeof a.then&&"function"==typeof a.catch},t.isArrayBufferView=function v(a){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(a):i(a)||o(a)},t.isUint8Array=function S(a){return"Uint8Array"===c(a)},t.isUint8ClampedArray=function A(a){return"Uint8ClampedArray"===c(a)},t.isUint16Array=function C(a){return"Uint16Array"===c(a)},t.isUint32Array=function N(a){return"Uint32Array"===c(a)},t.isInt8Array=function I(a){return"Int8Array"===c(a)},t.isInt16Array=function X(a){return"Int16Array"===c(a)},t.isInt32Array=function M(a){return"Int32Array"===c(a)},t.isFloat32Array=function L(a){return"Float32Array"===c(a)},t.isFloat64Array=function k(a){return"Float64Array"===c(a)},t.isBigInt64Array=function G(a){return"BigInt64Array"===c(a)},t.isBigUint64Array=function V(a){return"BigUint64Array"===c(a)},F.working=typeof Map<"u"&&F(new Map),t.isMap=function x(a){return!(typeof Map>"u")&&(F.working?F(a):a instanceof Map)},U.working=typeof Set<"u"&&U(new Set),t.isSet=function Z(a){return!(typeof Set>"u")&&(U.working?U(a):a instanceof Set)},$.working=typeof WeakMap<"u"&&$(new WeakMap),t.isWeakMap=function ee(a){return!(typeof WeakMap>"u")&&($.working?$(a):a instanceof WeakMap)},W.working=typeof WeakSet<"u"&&W(new WeakSet),t.isWeakSet=function D(a){return W(a)},K.working=typeof ArrayBuffer<"u"&&K(new ArrayBuffer),t.isArrayBuffer=q,r.working=typeof ArrayBuffer<"u"&&typeof DataView<"u"&&r(new DataView(new ArrayBuffer(1),0,1)),t.isDataView=o;var d=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:void 0;function O(a){return"[object SharedArrayBuffer]"===f(a)}function R(a){return!(typeof d>"u")&&(typeof O.working>"u"&&(O.working=O(new d)),O.working?O(a):a instanceof d)}function J(a){return h(a,m)}function Q(a){return h(a,w)}function H(a){return h(a,u)}function Y(a){return g&&h(a,s)}function te(a){return n&&h(a,y)}t.isSharedArrayBuffer=R,t.isAsyncFunction=function z(a){return"[object AsyncFunction]"===f(a)},t.isMapIterator=function j(a){return"[object Map Iterator]"===f(a)},t.isSetIterator=function P(a){return"[object Set Iterator]"===f(a)},t.isGeneratorObject=function T(a){return"[object Generator]"===f(a)},t.isWebAssemblyCompiledModule=function B(a){return"[object WebAssembly.Module]"===f(a)},t.isNumberObject=J,t.isStringObject=Q,t.isBooleanObject=H,t.isBigIntObject=Y,t.isSymbolObject=te,t.isBoxedPrimitive=function re(a){return J(a)||Q(a)||H(a)||Y(a)||te(a)},t.isAnyArrayBuffer=function ne(a){return typeof Uint8Array<"u"&&(q(a)||R(a))},["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(a){Object.defineProperty(t,a,{enumerable:!1,value:function(){throw new Error(a+" is not supported in userland")}})})},71732:(_,t,p)=>{var e=Object.getOwnPropertyDescriptors||function(o){for(var d=Object.keys(o),O={},R=0;R<d.length;R++)O[d[R]]=Object.getOwnPropertyDescriptor(o,d[R]);return O},b=/%[sdj%]/g;t.format=function(r){if(!I(r)){for(var o=[],d=0;d<arguments.length;d++)o.push(g(arguments[d]));return o.join(" ")}d=1;for(var O=arguments,R=O.length,z=String(r).replace(b,function(P){if("%%"===P)return"%";if(d>=R)return P;switch(P){case"%s":return String(O[d++]);case"%d":return Number(O[d++]);case"%j":try{return JSON.stringify(O[d++])}catch{return"[Circular]"}default:return P}}),j=O[d];d<R;j=O[++d])A(j)||!k(j)?z+=" "+j:z+=" "+g(j);return z},t.deprecate=function(r,o){if(typeof process<"u"&&!0===process.noDeprecation)return r;if(typeof process>"u")return function(){return t.deprecate(r,o).apply(this,arguments)};var d=!1;return function O(){if(!d){if(process.throwDeprecation)throw new Error(o);process.traceDeprecation?console.trace(o):console.error(o),d=!0}return r.apply(this,arguments)}};var c={},i=/^$/;if(process.env.NODE_DEBUG){var l=process.env.NODE_DEBUG;l=l.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),i=new RegExp("^"+l+"$","i")}function g(r,o){var d={seen:[],stylize:f};return arguments.length>=3&&(d.depth=arguments[2]),arguments.length>=4&&(d.colors=arguments[3]),S(o)?d.showHidden=o:o&&t._extend(d,o),M(d.showHidden)&&(d.showHidden=!1),M(d.depth)&&(d.depth=2),M(d.colors)&&(d.colors=!1),M(d.customInspect)&&(d.customInspect=!0),d.colors&&(d.stylize=n),w(d,r,d.depth)}function n(r,o){var d=g.styles[o];return d?"\x1b["+g.colors[d][0]+"m"+r+"\x1b["+g.colors[d][1]+"m":r}function f(r,o){return r}function w(r,o,d){if(r.customInspect&&o&&F(o.inspect)&&o.inspect!==t.inspect&&(!o.constructor||o.constructor.prototype!==o)){var O=o.inspect(d,r);return I(O)||(O=w(r,O,d)),O}var R=function u(r,o){if(M(o))return r.stylize("undefined","undefined");if(I(o)){var d="'"+JSON.stringify(o).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(d,"string")}return N(o)?r.stylize(""+o,"number"):S(o)?r.stylize(""+o,"boolean"):A(o)?r.stylize("null","null"):void 0}(r,o);if(R)return R;var z=Object.keys(o),j=function m(r){var o={};return r.forEach(function(d,O){o[d]=!0}),o}(z);if(r.showHidden&&(z=Object.getOwnPropertyNames(o)),V(o)&&(z.indexOf("message")>=0||z.indexOf("description")>=0))return s(o);if(0===z.length){if(F(o))return r.stylize("[Function"+(o.name?": "+o.name:"")+"]","special");if(L(o))return r.stylize(RegExp.prototype.toString.call(o),"regexp");if(G(o))return r.stylize(Date.prototype.toString.call(o),"date");if(V(o))return s(o)}var H,T="",B=!1,J=["{","}"];return v(o)&&(B=!0,J=["[","]"]),F(o)&&(T=" [Function"+(o.name?": "+o.name:"")+"]"),L(o)&&(T=" "+RegExp.prototype.toString.call(o)),G(o)&&(T=" "+Date.prototype.toUTCString.call(o)),V(o)&&(T=" "+s(o)),0!==z.length||B&&0!=o.length?d<0?L(o)?r.stylize(RegExp.prototype.toString.call(o),"regexp"):r.stylize("[Object]","special"):(r.seen.push(o),H=B?function y(r,o,d,O,R){for(var z=[],j=0,P=o.length;j<P;++j)W(o,String(j))?z.push(h(r,o,d,O,String(j),!0)):z.push("");return R.forEach(function(T){T.match(/^\d+$/)||z.push(h(r,o,d,O,T,!0))}),z}(r,o,d,j,z):z.map(function(Y){return h(r,o,d,j,Y,B)}),r.seen.pop(),function E(r,o,d){var R=r.reduce(function(z,j){return j.indexOf("\n"),z+j.replace(/\u001b\[\d\d?m/g,"").length+1},0);return R>60?d[0]+(""===o?"":o+"\n ")+" "+r.join(",\n  ")+" "+d[1]:d[0]+o+" "+r.join(", ")+" "+d[1]}(H,T,J)):J[0]+T+J[1]}function s(r){return"["+Error.prototype.toString.call(r)+"]"}function h(r,o,d,O,R,z){var j,P,T;if((T=Object.getOwnPropertyDescriptor(o,R)||{value:o[R]}).get?P=r.stylize(T.set?"[Getter/Setter]":"[Getter]","special"):T.set&&(P=r.stylize("[Setter]","special")),W(O,R)||(j="["+R+"]"),P||(r.seen.indexOf(T.value)<0?(P=A(d)?w(r,T.value,null):w(r,T.value,d-1)).indexOf("\n")>-1&&(P=z?P.split("\n").map(function(B){return"  "+B}).join("\n").slice(2):"\n"+P.split("\n").map(function(B){return"   "+B}).join("\n")):P=r.stylize("[Circular]","special")),M(j)){if(z&&R.match(/^\d+$/))return P;(j=JSON.stringify(""+R)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(j=j.slice(1,-1),j=r.stylize(j,"name")):(j=j.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),j=r.stylize(j,"string"))}return j+": "+P}function v(r){return Array.isArray(r)}function S(r){return"boolean"==typeof r}function A(r){return null===r}function N(r){return"number"==typeof r}function I(r){return"string"==typeof r}function M(r){return void 0===r}function L(r){return k(r)&&"[object RegExp]"===U(r)}function k(r){return"object"==typeof r&&null!==r}function G(r){return k(r)&&"[object Date]"===U(r)}function V(r){return k(r)&&("[object Error]"===U(r)||r instanceof Error)}function F(r){return"function"==typeof r}function U(r){return Object.prototype.toString.call(r)}function Z(r){return r<10?"0"+r.toString(10):r.toString(10)}t.debuglog=function(r){if(r=r.toUpperCase(),!c[r])if(i.test(r)){var o=process.pid;c[r]=function(){var d=t.format.apply(t,arguments);console.error("%s %d: %s",r,o,d)}}else c[r]=function(){};return c[r]},t.inspect=g,g.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},g.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.types=p(17775),t.isArray=v,t.isBoolean=S,t.isNull=A,t.isNullOrUndefined=function C(r){return null==r},t.isNumber=N,t.isString=I,t.isSymbol=function X(r){return"symbol"==typeof r},t.isUndefined=M,t.isRegExp=L,t.types.isRegExp=L,t.isObject=k,t.isDate=G,t.types.isDate=G,t.isError=V,t.types.isNativeError=V,t.isFunction=F,t.isPrimitive=function x(r){return null===r||"boolean"==typeof r||"number"==typeof r||"string"==typeof r||"symbol"==typeof r||typeof r>"u"},t.isBuffer=p(20826);var $=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ee(){var r=new Date,o=[Z(r.getHours()),Z(r.getMinutes()),Z(r.getSeconds())].join(":");return[r.getDate(),$[r.getMonth()],o].join(" ")}function W(r,o){return Object.prototype.hasOwnProperty.call(r,o)}t.log=function(){console.log("%s - %s",ee(),t.format.apply(t,arguments))},t.inherits=p(59879),t._extend=function(r,o){if(!o||!k(o))return r;for(var d=Object.keys(o),O=d.length;O--;)r[d[O]]=o[d[O]];return r};var D=typeof Symbol<"u"?Symbol("util.promisify.custom"):void 0;function K(r,o){if(!r){var d=new Error("Promise was rejected with a falsy value");d.reason=r,r=d}return o(r)}t.promisify=function(o){if("function"!=typeof o)throw new TypeError('The "original" argument must be of type Function');if(D&&o[D]){var d;if("function"!=typeof(d=o[D]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(d,D,{value:d,enumerable:!1,writable:!1,configurable:!0}),d}function d(){for(var O,R,z=new Promise(function(T,B){O=T,R=B}),j=[],P=0;P<arguments.length;P++)j.push(arguments[P]);j.push(function(T,B){T?R(T):O(B)});try{o.apply(this,j)}catch(T){R(T)}return z}return Object.setPrototypeOf(d,Object.getPrototypeOf(o)),D&&Object.defineProperty(d,D,{value:d,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(d,e(o))},t.promisify.custom=D,t.callbackify=function q(r){if("function"!=typeof r)throw new TypeError('The "original" argument must be of type Function');function o(){for(var d=[],O=0;O<arguments.length;O++)d.push(arguments[O]);var R=d.pop();if("function"!=typeof R)throw new TypeError("The last argument must be of type Function");var z=this,j=function(){return R.apply(z,arguments)};r.apply(this,d).then(function(P){process.nextTick(j.bind(null,null,P))},function(P){process.nextTick(K.bind(null,P,j))})}return Object.setPrototypeOf(o,Object.getPrototypeOf(r)),Object.defineProperties(o,e(r)),o}},23446:(_,t,p)=>{"use strict";var e=p(32208),b=p(85127),c=p(19568),i=p(81294),l=c("Object.prototype.toString"),g=p(91407)(),n=typeof globalThis>"u"?global:globalThis,f=b(),m=c("String.prototype.slice"),w={},u=Object.getPrototypeOf;g&&i&&u&&e(f,function(h){if("function"==typeof n[h]){var E=new n[h];if(Symbol.toStringTag in E){var v=u(E),S=i(v,Symbol.toStringTag);if(!S){var A=u(v);S=i(A,Symbol.toStringTag)}w[h]=S.get}}});var y=p(77579);_.exports=function(E){return!!y(E)&&(g&&Symbol.toStringTag in E?function(E){var v=!1;return e(w,function(S,A){if(!v)try{var C=S.call(E);C===A&&(v=C)}catch{}}),v}(E):m(l(E),8,-1))}},70166:_=>{_.exports=function p(){for(var e={},b=0;b<arguments.length;b++){var c=arguments[b];for(var i in c)t.call(c,i)&&(e[i]=c[i])}return e};var t=Object.prototype.hasOwnProperty},85127:_=>{"use strict";var t=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],p=typeof globalThis>"u"?global:globalThis;_.exports=function(){for(var b=[],c=0;c<t.length;c++)"function"==typeof p[t[c]]&&(b[b.length]=t[c]);return b}},8239:(_,t,p)=>{"use strict";function e(c,i,l,g,n,f,m){try{var w=c[f](m),u=w.value}catch(s){return void l(s)}w.done?i(u):Promise.resolve(u).then(g,n)}function b(c){return function(){var i=this,l=arguments;return new Promise(function(g,n){var f=c.apply(i,l);function m(u){e(f,g,n,m,w,"next",u)}function w(u){e(f,g,n,m,w,"throw",u)}m(void 0)})}}p.d(t,{Z:()=>b})}}]);