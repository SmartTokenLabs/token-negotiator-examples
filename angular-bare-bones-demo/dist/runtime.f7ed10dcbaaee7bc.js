(()=>{"use strict";var e,g={},_={};function r(e){var n=_[e];if(void 0!==n)return n.exports;var t=_[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(n,t,o,i)=>{if(!t){var a=1/0;for(f=0;f<e.length;f++){for(var[t,o,i]=e[f],c=!0,d=0;d<t.length;d++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[d]))?t.splice(d--,1):(c=!1,i<a&&(a=i));if(c){e.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,o,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,o){if(1&o&&(t=this(t)),8&o||"object"==typeof t&&t&&(4&o&&t.__esModule||16&o&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var f={};n=n||[null,e({}),e([]),e(e)];for(var a=2&o&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(c=>f[c]=()=>t[c]);return f.default=()=>t,r.d(i,f),i}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{66:"df7aa39327f67da9",110:"a397f78a35145eea",475:"6a2a9d0889779f15",724:"1f9375e6c866d030",795:"681c00ce3aca1a02",952:"0dc8956efcbe9bc6"}[e]+".js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="Angular-bare-bones-demo:";r.l=(t,o,i,f)=>{if(e[t])e[t].push(o);else{var a,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var l=d[s];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[o];var u=(v,p)=>{a.onerror=a.onload=null,clearTimeout(b);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(h=>h(p)),v)return v(p)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="/token-negotiator-examples/angular-bare-bones-demo/",(()=>{var e={666:0};r.f.j=(o,i)=>{var f=r.o(e,o)?e[o]:void 0;if(0!==f)if(f)i.push(f[2]);else if(666!=o){var a=new Promise((l,u)=>f=e[o]=[l,u]);i.push(f[2]=a);var c=r.p+r.u(o),d=new Error;r.l(c,l=>{if(r.o(e,o)&&(0!==(f=e[o])&&(e[o]=void 0),f)){var u=l&&("load"===l.type?"missing":l.type),b=l&&l.target&&l.target.src;d.message="Loading chunk "+o+" failed.\n("+u+": "+b+")",d.name="ChunkLoadError",d.type=u,d.request=b,f[1](d)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var n=(o,i)=>{var d,s,[f,a,c]=i,l=0;if(f.some(b=>0!==e[b])){for(d in a)r.o(a,d)&&(r.m[d]=a[d]);if(c)var u=c(r)}for(o&&o(i);l<f.length;l++)r.o(e,s=f[l])&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},t=self.webpackChunkAngular_bare_bones_demo=self.webpackChunkAngular_bare_bones_demo||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();