/*! For license information please see 462.600df442.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 462 ], {
  87757: (e, t, r) => {
    e.exports = r(35666);
  },
  75508: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ComposedStore = void 0;
    const n = r(28877);
    class i extends n.ObservableStore {
      constructor(e) {
        super({}), this._children = e || {}, Object.keys(this._children).forEach((e => {
          const t = this._children[e];
          this._addChild(e, t);
        }));
      }
      _addChild(e, t) {
        const r = t => {
          const r = this.getState();
          r[e] = t, this.putState(r);
        };
        t.subscribe(r), r(t.getState());
      }
    }
    t.ComposedStore = i;
  },
  70401: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MergedStore = void 0;
    const n = r(28877);
    class i extends n.ObservableStore {
      constructor(e = []) {
        super({}), this._children = e, e.forEach((e => this._addChild(e))), this._updateWholeState();
      }
      _addChild(e) {
        e.subscribe((() => this._updateWholeState()));
      }
      _updateWholeState() {
        const e = this._children.map((e => e.getState()));
        const t = Object.assign({}, ...e);
        this.putState(t);
      }
    }
    t.MergedStore = i;
  },
  28877: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ObservableStore = void 0;
    const i = n(r(19394));
    class o extends i.default {
      constructor(e) {
        super(), this._state = e || {};
      }
      getState() {
        return this._getState();
      }
      putState(e) {
        this._putState(e), this.emit('update', e);
      }
      updateState(e) {
        if (e && 'object' == typeof e) {
          const t = this.getState();
          this.putState(Object.assign(Object.assign({}, t), e));
        } else this.putState(e);
      }
      subscribe(e) {
        this.on('update', e);
      }
      unsubscribe(e) {
        this.removeListener('update', e);
      }
      _getState() {
        return this._state;
      }
      _putState(e) {
        this._state = e;
      }
    }
    t.ObservableStore = o;
  },
  97969: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.storeAsStream = void 0;
    const n = r(42830);
    class i extends n.Duplex {
      constructor(e) {
        super({
          objectMode: !0
        }), this.resume(), this.handler = e => this.push(e), this.obsStore = e, this.obsStore.subscribe(this.handler);
      }
      pipe(e, t) {
        const r = super.pipe(e, t);
        return e.write(this.obsStore.getState()), r;
      }
      _write(e, t, r) {
        this.obsStore.putState(e), r();
      }
      _read(e) {}
      _destroy(e, t) {
        this.obsStore.unsubscribe(this.handler), super._destroy(e, t);
      }
    }
    t.storeAsStream = function(e) {
      return new i(e);
    };
  },
  12724: function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
      void 0 === n && (n = r), Object.defineProperty(e, n, {
        enumerable: !0,
        get: function() {
          return t[r];
        }
      });
    } : function(e, t, r, n) {
      void 0 === n && (n = r), e[n] = t[r];
    });
    var i = this && this.__exportStar || function(e, t) {
      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), i(r(97969), t), i(r(75508), t), i(r(70401), t), i(r(28877), t), i(r(26546), t);
  },
  26546: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.storeTransformStream = void 0;
    const n = r(14650);
    t.storeTransformStream = function(e) {
      return n.obj(((t, r, n) => {
        try {
          return void n(null, e(t));
        } catch (i) {
          return void n(i);
        }
      }));
    };
  },
  99462: (e, t, r) => {
    "use strict";
    function n(e, t) {
      if (null == e) return {};
      var r = function(e, t) {
        if (null == e) return {};
        var r = {};
        var n = Object.keys(e);
        var i, o;
        for (o = 0; o < n.length; o++) i = n[o], t.indexOf(i) >= 0 || (r[i] = e[i]);
        return r;
      }(e, t);
      var n, i;
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      }
      return r;
    }
    function i(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }
    r.r(t), r.d(t, {
      getTorusProviderInstance: () => Ft
    });
    var o = r(31692);
    var a = r.n(o);
    var s = r(18269);
    const c = "mainnet";
    const u = [ {
      constant: !0,
      inputs: [],
      name: "currentEpoch",
      outputs: [ {
        internalType: "uint256",
        name: "",
        type: "uint256"
      } ],
      payable: !1,
      stateMutability: "view",
      type: "function"
    }, {
      constant: !0,
      inputs: [ {
        internalType: "uint256",
        name: "epoch",
        type: "uint256"
      } ],
      name: "getEpochInfo",
      outputs: [ {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "n",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "k",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "t",
        type: "uint256"
      }, {
        internalType: "address[]",
        name: "nodeList",
        type: "address[]"
      }, {
        internalType: "uint256",
        name: "prevEpoch",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "nextEpoch",
        type: "uint256"
      } ],
      payable: !1,
      stateMutability: "view",
      type: "function"
    }, {
      constant: !0,
      inputs: [ {
        internalType: "address",
        name: "nodeAddress",
        type: "address"
      } ],
      name: "getNodeDetails",
      outputs: [ {
        internalType: "string",
        name: "declaredIp",
        type: "string"
      }, {
        internalType: "uint256",
        name: "position",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "pubKx",
        type: "uint256"
      }, {
        internalType: "uint256",
        name: "pubKy",
        type: "uint256"
      }, {
        internalType: "string",
        name: "tmP2PListenAddress",
        type: "string"
      }, {
        internalType: "string",
        name: "p2pListenAddress",
        type: "string"
      } ],
      payable: !1,
      stateMutability: "view",
      type: "function"
    } ];
    function l(e, t, r, n) {
      return new (r || (r = Promise))((function(i, o) {
        function a(e) {
          try {
            c(n.next(e));
          } catch (t) {
            o(t);
          }
        }
        function s(e) {
          try {
            c(n.throw(e));
          } catch (t) {
            o(t);
          }
        }
        function c(e) {
          e.done ? i(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(a, s);
        }
        c((n = n.apply(e, t || [])).next());
      }));
    }
    class d {
      constructor({network: e = c, proxyAddress: t = "0x638646503746d5456209e33a2ff5e3226d698bea"} = {}) {
        let r;
        this._currentEpoch = "19", this._torusNodeEndpoints = [ "https://torus-19.torusnode.com/jrpc", "https://torus-node.ens.domains/jrpc", "https://torus-node.matic.network/jrpc", "https://torus.zilliqa.network/jrpc", "https://torus-mainnet.cosmos.network/jrpc", "https://torus2.etherscan.com/jrpc", "https://torus-node-v2.skalelabs.com/jrpc", "https://torus-node.binancex.dev/jrpc", "https://torusnode.ont.io/jrpc" ], 
        this._torusNodePub = [ {
          X: "bbe83c64177c3775550e6ba6ac2bc059f6847d644c9e4894e42c60d7974d8c2b",
          Y: "82b49a7caf70def38cdad2740af45c1e4f969650105c5019a29bb18b21a9acb5"
        }, {
          X: "c208cac4ef9a47d386097a9c915b28e9cb89213abee8d26a17198ee261201b0d",
          Y: "c7db2fe4631109f40833de9dc78d07e35706549ee48fa557b33e4e75e1047873"
        }, {
          X: "ca1766bb426d4ca5582818a0c5439d560ea64f5baa060793ab29dd3d0ceacfe",
          Y: "d46c1d08c40e1306e1bca328c2287b8268166b11a1ba4b8442ea2ad0c5e32152"
        }, {
          X: "c3934dd2f6f4b3d2e1e398cc501e143c1e1a381b52feb6d1525af34d16253768",
          Y: "71f5141a5035799099f5ea3e241e66946bc55dc857ac3bd7d6fcdb8dcd3eeeef"
        }, {
          X: "22e66f1929631d00bf026227581597f085fd94fd952fc0dca9f0833398b5c064",
          Y: "6088b3912e10a1e9d50355a609c10db7d188f16a2e2fd7357e51bf4f6a74f0a1"
        }, {
          X: "9dc9fa410f3ce9eb70df70cdea00a49f2c4cc7a31c08c0dab5f863ed35ff5139",
          Y: "627a291cb87a75c61da3f65d6818e1e05e360217179817ed27e8c73bca7ec122"
        }, {
          X: "118b9fc07e97b096d899b9f6658463ce6a8caa64038e37fc969df4e6023dd8c6",
          Y: "baf9fa4e51770f4796ea165dd03a769b8606681a38954a0a92c4cbffd6609ce9"
        }, {
          X: "8a6d8b925da15a273dec3d8f8395ec35cd6878f274b2b180e4e106999db64043",
          Y: "96f67f870c157743da0b1eb84d89bf30500d74dc84c11f501ee1cb013acc8c46"
        }, {
          X: "39cecb62e863729f572f7dfc46c24867981bf04bb405fed0df39e33984bfade5",
          Y: "61c2364434012e68a2be2e9952805037e52629d7762fafc8e10e9fb5bad8f790"
        } ], this._torusIndexes = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], this._network = c;
        try {
          r = new URL(e).href;
        } catch (n) {
          r = `https://${e}.infura.io/v3/${"b8cdb0e4cff24599a286bf8e87ff1c96"}`;
        }
        a().setProvider(r), this.nodeListContract = new (a())(u, t), this.nodeListAddress = t, this.updated = !1, this._network = e;
      }
      get _nodeDetails() {
        return {
          currentEpoch: this._currentEpoch,
          nodeListAddress: this.nodeListAddress,
          torusNodeEndpoints: this._torusNodeEndpoints,
          torusNodePub: this._torusNodePub,
          torusIndexes: this._torusIndexes,
          updated: this.updated
        };
      }
      getCurrentEpoch() {
        return this.nodeListContract.methods.currentEpoch().call();
      }
      getEpochInfo(e) {
        return this.nodeListContract.methods.getEpochInfo(e).call();
      }
      getNodeEndpoint(e) {
        return this.nodeListContract.methods.getNodeDetails(e).call();
      }
      getNodeDetails(e = !1, t = !1) {
        return l(this, void 0, void 0, (function*() {
          try {
            if (e && this._network === c) return this._nodeDetails;
            if (this.updated) return this._nodeDetails;
            const r = yield this.getCurrentEpoch();
            if (t && this._network === c && r === this._currentEpoch) return this._nodeDetails;
            this._currentEpoch = r;
            const n = yield this.getEpochInfo(r);
            const i = n.nodeList.map(((e, t) => t + 1));
            this._torusIndexes = i;
            const o = n.nodeList.map((e => this.getNodeEndpoint(e)));
            const a = yield Promise.all(o);
            const u = [];
            const l = [];
            for (let e = 0; e < a.length; e += 1) {
              const t = a[e];
              const r = `https://${t.declaredIp.split(":")[0]}/jrpc`;
              u.push(r), l.push({
                X: (0, s.toHex)(t.pubKx).replace("0x", ""),
                Y: (0, s.toHex)(t.pubKy).replace("0x", "")
              });
            }
            return this._torusNodeEndpoints = u, this._torusNodePub = l, this.updated = !0, this._nodeDetails;
          } catch (r) {
            return this._nodeDetails;
          }
        }));
      }
    }
    var h = r(72378);
    var f = r.n(h);
    var p = r(2043);
    var v = r.n(p);
    function g(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? g(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    const b = v().getLogger("http-helpers");
    b.setLevel(p.levels.INFO);
    let m = "torus-default";
    let w = "";
    function _(e) {
      w = e;
    }
    function S(e) {
      m = e;
    }
    function k() {
      const e = {};
      return m && (e["x-api-key"] = m), w && (e["x-embed-host"] = w), e;
    }
    function x(e) {
      b.info("Response: ".concat(e.status, " ").concat(e.statusText)), b.info("Url: ".concat(e.url));
    }
    const O = (e, t) => {
      const r = new Promise(((t, r) => {
        const n = setTimeout((() => {
          clearTimeout(n), r(new Error("Timed out in ".concat(e, "ms")));
        }), e);
      }));
      return Promise.race([ t, r ]);
    };
    const j = async function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const n = {
        mode: "cors",
        headers: {}
      };
      r.useAPIKey && (n.headers = y(y({}, n.headers), k()));
      const i = f()(n, t, {
        method: "GET"
      });
      const o = await fetch(e, i);
      if (o.ok) return o.json();
      throw x(o), o;
    };
    const P = function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const i = {
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      };
      n.useAPIKey && (i.headers = y(y({}, i.headers), k()));
      const o = f()(i, r, {
        method: "POST"
      });
      return n.isUrlEncodedData ? (o.body = t, "application/json; charset=utf-8" === o.headers["Content-Type"] && delete o.headers["Content-Type"]) : o.body = JSON.stringify(t), 
      O(n.timeout || 6e4, fetch(e, o).then((e => {
        if (e.ok) return e.json();
        throw x(e), e;
      })));
    };
    const E = (e, t) => ({
      jsonrpc: "2.0",
      method: e,
      id: 10,
      params: t
    });
    var C = r(88473);
    var A = r(61798);
    var T = r.n(A);
    r(45772);
    r(95811);
    r(48764).Buffer;
    URL;
    var M = r(17187);
    var I = r(4445);
    var L = r.n(I);
    var R = r(12840);
    var D = r.n(R);
    var U = r(30778);
    var N = r.n(U);
    var q = r(74286);
    var B = r.n(q);
    function F() {}
    const W = "ACK";
    class V extends C.Duplex {
      constructor(e) {
        let {name: t, target: r, targetWindow: n = window, targetOrigin: o = "*"} = e;
        if (super({
          objectMode: !0
        }), i(this, "_init", void 0), i(this, "_haveSyn", void 0), i(this, "_name", void 0), i(this, "_target", void 0), i(this, "_targetWindow", void 0), 
        i(this, "_targetOrigin", void 0), i(this, "_onMessage", void 0), i(this, "_synIntervalId", void 0), !t || !r) throw new Error("Invalid input.");
        this._init = !1, this._haveSyn = !1, this._name = t, this._target = r, this._targetWindow = n, this._targetOrigin = o, this._onMessage = this.onMessage.bind(this), 
        this._synIntervalId = null, window.addEventListener("message", this._onMessage, !1), this._handShake();
      }
      _break() {
        this.cork(), this._write("BRK", null, F), this._haveSyn = !1, this._init = !1;
      }
      _handShake() {
        this._write("SYN", null, F), this.cork();
      }
      _onData(e) {
        if (this._init) if ("BRK" === e) this._break(); else try {
          this.push(e);
        } catch (t) {
          this.emit("error", t);
        } else "SYN" === e ? (this._haveSyn = !0, this._write(W, null, F)) : e === W && (this._init = !0, this._haveSyn || this._write(W, null, F), 
        this.uncork());
      }
      _postMessage(e) {
        const t = this._targetOrigin;
        this._targetWindow.postMessage({
          target: this._target,
          data: e
        }, t);
      }
      onMessage(e) {
        const t = e.data;
        "*" !== this._targetOrigin && e.origin !== this._targetOrigin || e.source !== this._targetWindow || "object" != typeof t || t.target !== this._name || !t.data || this._onData(t.data);
      }
      _read() {}
      _write(e, t, r) {
        this._postMessage(e), r();
      }
      _destroy() {
        window.removeEventListener("message", this._onMessage, !1);
      }
    }
    function K(e, t, r) {
      try {
        Reflect.apply(e, t, r);
      } catch (n) {
        setTimeout((() => {
          throw n;
        }));
      }
    }
    class H extends M.EventEmitter {
      emit(e) {
        let t = "error" === e;
        const r = this._events;
        if (void 0 !== r) t = t && void 0 === r.error; else if (!t) return !1;
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
        if (t) {
          let e;
          if (i.length > 0 && ([e] = i), e instanceof Error) throw e;
          const t = new Error("Unhandled error.".concat(e ? " (".concat(e.message, ")") : ""));
          throw t.context = e, t;
        }
        const a = r[e];
        if (void 0 === a) return !1;
        if ("function" == typeof a) K(a, this, i); else {
          const e = a.length;
          const t = function(e) {
            const t = e.length;
            const r = new Array(t);
            for (let n = 0; n < t; n += 1) r[n] = e[n];
            return r;
          }(a);
          for (let r = 0; r < e; r += 1) K(t[r], this, i);
        }
        return !0;
      }
    }
    class z extends Error {
      constructor(e) {
        let {code: t, message: r, data: n} = e;
        if (!Number.isInteger(t)) throw new Error("code must be an integer");
        if (!r || "string" != typeof r) throw new Error("message must be string");
        super(r), i(this, "code", void 0), i(this, "data", void 0), this.code = t, void 0 !== n && (this.data = n);
      }
      toString() {
        return L()({
          code: this.code,
          message: this.message,
          data: this.data,
          stack: this.stack
        });
      }
    }
    function Y(e) {
      return e.toString();
    }
    function G() {
      const e = {};
      const t = new H;
      const r = new C.Duplex({
        objectMode: !0,
        read: function() {
          return !1;
        },
        write: function(r, n, i) {
          let o;
          try {
            !r.id ? function(e) {
              t.emit("notification", e);
            }(r) : function(t) {
              const r = e[t.id];
              if (!r) throw new Error("StreamMiddleware - Unknown response id \"".concat(t.id, "\""));
              delete e[t.id], Object.assign(r.res, t), setTimeout(r.end);
            }(r);
          } catch (a) {
            o = a;
          }
          i(o);
        }
      });
      return {
        events: t,
        middleware: (t, n, i, o) => {
          r.push(t), e[t.id] = {
            req: t,
            res: n,
            next: i,
            end: o
          };
        },
        stream: r
      };
    }
    function X() {
      return (e, t, r, n) => {
        const i = e.id;
        const o = (() => T()(32).toString("hex"))();
        e.id = o, t.id = o, r((r => {
          e.id = i, t.id = i, r();
        }));
      };
    }
    function J(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    class $ extends H {
      constructor() {
        super(), i(this, "_middleware", void 0), this._middleware = [];
      }
      static async _runAllMiddleware(e, t, r) {
        const n = [];
        let i = null;
        let o = !1;
        for (const a of r) if ([i, o] = await $._runMiddleware(e, t, a, n), o) break;
        return [ i, o, n.reverse() ];
      }
      static _runMiddleware(e, t, r, n) {
        return new Promise((i => {
          const o = e => {
            const r = e || t.error;
            r && (t.error = Y(r)), i([ r, !0 ]);
          };
          const a = e => {
            t.error ? o(t.error) : (e && ("function" != typeof e && o(new z({
              code: -32603,
              message: "JRPCEngine: 'next' return handlers must be functions"
            })), n.push(e)), i([ null, !1 ]));
          };
          try {
            r(e, t, a, o);
          } catch (s) {
            o(s);
          }
        }));
      }
      static async _runReturnHandlers(e) {
        for (const t of e) await new Promise(((e, r) => {
          t((t => t ? r(t) : e()));
        }));
      }
      static _checkForCompletion(e, t, r) {
        if (!("result" in t) && !("error" in t)) throw new z({
          code: -32603,
          message: "Response has no error or result for request"
        });
        if (!r) throw new z({
          code: -32603,
          message: "Nothing ended request"
        });
      }
      push(e) {
        this._middleware.push(e);
      }
      handle(e, t) {
        if (t && "function" != typeof t) throw new Error('"callback" must be a function if provided.');
        return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e);
      }
      asMiddleware() {
        return async (e, t, r, n) => {
          try {
            const [i, o, a] = await $._runAllMiddleware(e, t, this._middleware);
            return o ? (await $._runReturnHandlers(a), n(i)) : r((async e => {
              try {
                await $._runReturnHandlers(a);
              } catch (t) {
                return e(t);
              }
              return e();
            }));
          } catch (i) {
            return n(i);
          }
        };
      }
      async _handleBatch(e, t) {
        try {
          const r = await Promise.all(e.map(this._promiseHandle.bind(this)));
          return t ? t(null, r) : r;
        } catch (r) {
          if (t) return t(r);
          throw r;
        }
      }
      _promiseHandle(e) {
        return new Promise((t => {
          this._handle(e, ((e, r) => {
            t(r);
          }));
        }));
      }
      async _handle(e, t) {
        if (!e || Array.isArray(e) || "object" != typeof e) {
          const e = new z({
            code: -32603,
            message: "request must be plain object"
          });
          return t(e, {
            id: void 0,
            jsonrpc: "2.0",
            error: e
          });
        }
        if ("string" != typeof e.method) {
          const r = new z({
            code: -32603,
            message: "method must be string"
          });
          return t(r, {
            id: e.id,
            jsonrpc: "2.0",
            error: r
          });
        }
        const r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? J(Object(r), !0).forEach((function(t) {
              i(e, t, r[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            }));
          }
          return e;
        }({}, e);
        const n = {
          id: r.id,
          jsonrpc: r.jsonrpc
        };
        let o = null;
        try {
          await this._processRequest(r, n);
        } catch (a) {
          o = a;
        }
        return o && (delete n.result, n.error || (n.error = Y(o))), t(o, n);
      }
      async _processRequest(e, t) {
        const [r, n, i] = await $._runAllMiddleware(e, t, this._middleware);
        if ($._checkForCompletion(e, t, n), await $._runReturnHandlers(i), r) throw r;
      }
    }
    class Z extends C.Duplex {
      constructor(e) {
        let {parent: t, name: r} = e;
        super({
          objectMode: !0
        }), i(this, "_parent", void 0), i(this, "_name", void 0), this._parent = t, this._name = r;
      }
      _read() {}
      _write(e, t, r) {
        this._parent.push({
          name: this._name,
          data: e
        }), r();
      }
    }
    function Q(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function ee(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Q(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    const te = Symbol("IGNORE_SUBSTREAM");
    class re extends C.Duplex {
      constructor() {
        super(ee(ee({}, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), {}, {
          objectMode: !0
        })), i(this, "_substreams", void 0), i(this, "getStream", void 0), this._substreams = {};
      }
      createStream(e) {
        if (!e) throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e]) throw new Error("ObjectMultiplex - Substream for name \"".concat(e, "\" already exists"));
        const t = new Z({
          parent: this,
          name: e
        });
        return this._substreams[e] = t, function(e, t) {
          const r = N()(t);
          D()(e, {
            readable: !1
          }, r), D()(e, {
            writable: !1
          }, r);
        }(this, (e => t.destroy(e || void 0))), t;
      }
      ignoreStream(e) {
        if (!e) throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e]) throw new Error("ObjectMultiplex - Substream for name \"".concat(e, "\" already exists"));
        this._substreams[e] = te;
      }
      _read() {}
      _write(e, t, r) {
        const {name: n, data: i} = e;
        if (!n) return window.console.warn("ObjectMultiplex - malformed chunk without name \"".concat(e, "\"")), r();
        const o = this._substreams[n];
        return o ? (o !== te && o.push(i), r()) : (window.console.warn("ObjectMultiplex - orphaned data for stream \"".concat(n, "\"")), 
        r());
      }
    }
    function ne(e) {
      return ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, ne(e);
    }
    function ie(e, t, r, n, i, o, a) {
      try {
        var s = e[o](a);
        var c = s.value;
      } catch (u) {
        return void r(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(n, i);
    }
    function oe(e) {
      return function() {
        var t = this, r = arguments;
        return new Promise((function(n, i) {
          var o = e.apply(t, r);
          function a(e) {
            ie(o, n, i, a, s, "next", e);
          }
          function s(e) {
            ie(o, n, i, a, s, "throw", e);
          }
          a(void 0);
        }));
      };
    }
    function ae(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function se(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function ce(e, t, r) {
      return t && se(e.prototype, t), r && se(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }
    var ue = r(87757);
    var le = r.n(ue);
    var de = r(2450);
    var he = r(13550);
    var fe = r.n(he);
    var pe = r(86266);
    var ve = r(67266);
    var ge = r.n(ve);
    function ye(e, t) {
      return ye = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
      }, ye(e, t);
    }
    function be(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t && ye(e, t);
    }
    function me(e, t) {
      if (t && ("object" === ne(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e);
    }
    function we(e) {
      return we = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, we(e);
    }
    function _e() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
      } catch (e) {
        return !1;
      }
    }
    function Se(e, t, r) {
      return Se = _e() ? Reflect.construct : function(e, t, r) {
        var n = [ null ];
        n.push.apply(n, t);
        var i = new (Function.bind.apply(e, n));
        return r && ye(i, r.prototype), i;
      }, Se.apply(null, arguments);
    }
    function ke(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return ke = function(e) {
        if (null === e || !function(e) {
          return -1 !== Function.toString.call(e).indexOf("[native code]");
        }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return Se(e, arguments, we(this).constructor);
        }
        return r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), ye(r, e);
      }, ke(e);
    }
    function xe(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function Oe(e) {
      return function(e) {
        if (Array.isArray(e)) return xe(e);
      }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function(e, t) {
        if (e) {
          if ("string" == typeof e) return xe(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xe(e, t) : void 0;
        }
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    var je = r(48764).Buffer;
    var Pe = v().getLogger('torus.js');
    function Ee(e) {
      var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }();
      return function() {
        var r, n = we(e);
        if (t) {
          var i = we(this).constructor;
          r = Reflect.construct(n, arguments, i);
        } else r = n.apply(this, arguments);
        return me(this, r);
      };
    }
    Pe.disableAll();
    var Ce = function(e) {
      be(r, e);
      var t = Ee(r);
      function r(e) {
        var n;
        var i = e.errors, o = e.responses, a = e.predicate;
        return ae(this, r), (n = t.call(this, 'Unable to resolve enough promises.')).errors = i, n.responses = o, n.predicate = a, 
        n;
      }
      return ce(r);
    }(ke(Error));
    var Ae = function(e, t) {
      return new Promise((function(r, n) {
        var i = 0;
        var o = {
          resolved: !1
        };
        var a = new Array(e.length).fill(void 0);
        var s = new Array(e.length).fill(void 0);
        var c;
        e.forEach((function(u, l) {
          u.then((function(e) {
            s[l] = e;
          })).catch((function(e) {
            a[l] = e;
          })).finally((function() {
            o.resolved || t(s.slice(0), o).then((function(e) {
              o.resolved = !0, r(e);
            })).catch((function(e) {
              c = e;
            })).finally((function(t) {
              if ((i += 1) === e.length) {
                var r = Object.values(s.reduce((function(e, t) {
                  var r;
                  var n = t || {}, i = n.id, o = n.error;
                  return (null == o || null === (r = o.data) || void 0 === r ? void 0 : r.length) > 0 && (o.data.startsWith('Error occurred while verifying params') ? e[i] = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1);
                  }(o.data) : e[i] = o.data), e;
                }), {}));
                if (r.length > 0) {
                  var o = r.length > 1 ? "\n".concat(r.map((function(e) {
                    return "• ".concat(e);
                  })).join('\n')) : r[0];
                  n(new Error(o));
                } else {
                  var u;
                  n(new Ce({
                    errors: a,
                    responses: s,
                    predicate: (null === (u = c) || void 0 === u ? void 0 : u.message) || c
                  }));
                }
              }
            }));
          }));
        }));
      }));
    };
    function Te(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function Me(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Te(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    function Ie(e) {
      var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
        } catch (e) {
          return !1;
        }
      }();
      return function() {
        var r, n = we(e);
        if (t) {
          var i = we(this).constructor;
          r = Reflect.construct(n, arguments, i);
        } else r = n.apply(this, arguments);
        return me(this, r);
      };
    }
    var Le = function(e) {
      be(r, e);
      var t = Ie(r);
      function r() {
        return ae(this, r), t.apply(this, arguments);
      }
      return ce(r);
    }(ke(Error));
    var Re = function e(t, r) {
      var n = t;
      if ('number' == typeof n && (n = Array.from({
        length: n
      }, (function(e, t) {
        return t;
      }))), r > n.length || r <= 0) return [];
      if (r === n.length) return [ n ];
      if (1 === r) return n.reduce((function(e, t) {
        return [].concat(Oe(e), [ [ t ] ]);
      }), []);
      var i = [];
      var o = [];
      for (var a = 0; a <= n.length - r + 1; a += 1) {
        o = e(n.slice(a + 1), r - 1);
        for (var s = 0; s < o.length; s += 1) i.push([ n[a] ].concat(Oe(o[s])));
      }
      return i;
    };
    var De = function(e, t) {
      var r = {};
      for (var n = 0; n < e.length; n += 1) {
        var i = ge()(e[n]);
        if (r[i] = r[i] ? r[i] + 1 : 1, r[i] === t) return e[n];
      }
    };
    var Ue = function() {
      var e = oe(le().mark((function e(t, r, n) {
        var i;
        return le().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return i = t.map((function(e) {
              return P(e, E('VerifierLookupRequest', {
                verifier: r,
                verifier_id: n.toString()
              })).catch((function(e) {
                return Pe.error('lookup request failed', e);
              }));
            })), e.abrupt("return", Ae(i, (function(e) {
              var r = e.filter((function(e) {
                return e;
              }));
              var n = De(r.map((function(e) {
                return e && e.error;
              })), 1 + ~~(t.length / 2));
              var i = De(r.map((function(e) {
                return e && e.result;
              })), 1 + ~~(t.length / 2));
              return i || n ? Promise.resolve({
                keyResult: i,
                errorResult: n
              }) : Promise.reject(new Error("invalid results ".concat(JSON.stringify(e))));
            })));

           case 2:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t, r, n) {
        return e.apply(this, arguments);
      };
    }();
    var Ne = function(e, t, r, n) {
      return new Promise((function(i, o) {
        setTimeout((function() {
          Ue(e, t, r).then(i).catch(o);
        }), n);
      }));
    };
    var qe = function() {
      var e = oe(le().mark((function e(t, r, n, i, o, a) {
        var s, c, u, l;
        return le().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (void 0 === n ? (s = Math.floor(Math.random() * t.length), c = s) : s = n % t.length, s !== i) {
              e.next = 3;
              break;
            }
            throw new Error('Looped through all');

           case 3:
            return void 0 !== i && (c = i), u = E('KeyAssign', {
              verifier: o,
              verifier_id: a.toString()
            }), e.prev = 5, e.next = 8, P('https://signer.tor.us/api/sign', u, {
              headers: {
                pubKeyX: r[s].X,
                pubKeyY: r[s].Y
              }
            }, {
              useAPIKey: !0
            });

           case 8:
            return l = e.sent, e.abrupt("return", P(t[s], Me(Me({}, u), l), {
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            }));

           case 12:
            if (e.prev = 12, e.t0 = e.catch(5), Pe.error(e.t0), ![ 'Timed out', 'TypeError: Failed to fetch', 'TypeError: cancelled', 'TypeError: NetworkError when attempting to fetch resource.' ].includes(e.t0.message)) {
              e.next = 18;
              break;
            }
            return e.abrupt("return", qe(t, r, s + 1, c, o, a));

           case 18:
            throw new Error("Sorry, the Torus Network that powers Web3Auth is currently very busy.\n    We will generate your key in time. Pls try again later. \n\n    ".concat(e.t0.message || ''));

           case 19:
           case "end":
            return e.stop();
          }
        }), e, null, [ [ 5, 12 ] ]);
      })));
      return function(t, r, n, i, o, a) {
        return e.apply(this, arguments);
      };
    }();
    function Be(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function Fe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Be(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    var We = function() {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.enableOneKey, n = void 0 !== r && r, i = t.metadataHost, o = void 0 === i ? 'https://metadata.tor.us' : i, a = t.allowHost, s = void 0 === a ? 'https://signer.tor.us/api/allow' : a, c = t.serverTimeOffset, u = void 0 === c ? 0 : c;
        ae(this, e), this.ec = new pe.ec('secp256k1'), this.metadataHost = o, this.allowHost = s, this.enableOneKey = n, this.serverTimeOffset = u || 0;
      }
      return ce(e, [ {
        key: "getUserTypeAndAddress",
        value: function() {
          var e = oe(le().mark((function e(t, r, n) {
            var i, o, a, s, c, u, l, d, h, f, p, v, g, y, b, m, w, _, S, k, x, O = arguments;
            return le().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return i = n.verifier, o = n.verifierId, a = O.length > 3 && void 0 !== O[3] && O[3], e.next = 4, Ue(t, i, o);

               case 4:
                if (e.t0 = e.sent, e.t0) {
                  e.next = 7;
                  break;
                }
                e.t0 = {};

               case 7:
                if (s = e.t0, c = s.keyResult, u = s.errorResult, l = !1, !u || !JSON.stringify(u).includes('Verifier + VerifierID has not yet been assigned')) {
                  e.next = 26;
                  break;
                }
                if (a) {
                  e.next = 14;
                  break;
                }
                throw new Error('Verifier + VerifierID has not yet been assigned');

               case 14:
                return e.next = 16, qe(t, r, void 0, void 0, i, o);

               case 16:
                return e.next = 18, Ne(t, i, o, 1e3);

               case 18:
                if (e.t1 = e.sent, e.t1) {
                  e.next = 21;
                  break;
                }
                e.t1 = {};

               case 21:
                h = e.t1, d = h.keyResult, l = !0, e.next = 31;
                break;

               case 26:
                if (!c) {
                  e.next = 30;
                  break;
                }
                d = c, e.next = 31;
                break;

               case 30:
                throw new Error("node results do not match at first lookup ".concat(JSON.stringify(c || {}), ", ").concat(JSON.stringify(u || {})));

               case 31:
                if (!d) {
                  e.next = 61;
                  break;
                }
                return f = d.keys[0], p = f.pub_key_X, v = f.pub_key_Y, e.prev = 33, e.next = 37, this.getOrSetNonce(p, v, void 0, !l);

               case 37:
                _ = e.sent, g = _.typeOfUser, y = _.nonce, b = _.pubNonce, w = _.upgraded, y = new (fe())(y || '0', 16), e.next = 48;
                break;

               case 45:
                throw e.prev = 45, e.t2 = e.catch(33), new Le;

               case 48:
                if ('v1' !== g) {
                  e.next = 52;
                  break;
                }
                m = this.ec.keyFromPublic({
                  x: p.toString(16),
                  y: v.toString(16)
                }).getPublic().add(this.ec.keyFromPrivate(y.toString(16)).getPublic()), e.next = 57;
                break;

               case 52:
                if ('v2' !== g) {
                  e.next = 56;
                  break;
                }
                m = this.ec.keyFromPublic({
                  x: p.toString(16),
                  y: v.toString(16)
                }).getPublic().add(this.ec.keyFromPublic({
                  x: b.x,
                  y: b.y
                }).getPublic()), e.next = 57;
                break;

               case 56:
                throw new Error('getOrSetNonce should always return typeOfUser.');

               case 57:
                return S = m.getX().toString(16), k = m.getY().toString(16), x = this.generateAddressFromPubKey(m.getX(), m.getY()), e.abrupt("return", {
                  typeOfUser: g,
                  nonce: y,
                  pubNonce: b,
                  upgraded: w,
                  X: S,
                  Y: k,
                  address: x
                });

               case 61:
                throw new Error("node results do not match at final lookup ".concat(JSON.stringify(c || {}), ", ").concat(JSON.stringify(u || {})));

               case 62:
               case "end":
                return e.stop();
              }
            }), e, this, [ [ 33, 45 ] ]);
          })));
          return function(t, r, n) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "setCustomKey",
        value: function() {
          var e = oe(le().mark((function e(t) {
            var r, n, i, o, a, s, c, u, l;
            return le().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return r = t.privKeyHex, n = t.metadataNonce, i = t.torusKeyHex, o = t.customKeyHex, i ? a = new (fe())(i, 16) : (s = new (fe())(r, 16), 
                a = s.sub(n).umod(this.ec.curve.n)), c = new (fe())(o, 16), u = c.sub(a).umod(this.ec.curve.n), l = this.generateMetadataParams(u.toString(16), a.toString(16)), 
                e.next = 7, this.setMetadata(l);

               case 7:
               case "end":
                return e.stop();
              }
            }), e, this);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "retrieveShares",
        value: function() {
          var e = oe(le().mark((function e(t, r, n, i, o) {
            var a = this;
            var c, u, l, d, h, f, p, v, g, y = arguments;
            return le().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return c = y.length > 5 && void 0 !== y[5] ? y[5] : {}, u = [], e.next = 4, j(this.allowHost, {
                  headers: {
                    verifier: n,
                    verifier_id: i.verifier_id
                  }
                }, {
                  useAPIKey: !0
                });

               case 4:
                for (l = (0, de.oq)(), d = (0, de.rc)(l).toString('hex'), h = d.slice(2, 66), f = d.slice(66), p = (0, s.keccak256)(o), 
                v = 0; v < t.length; v += 1) g = P(t[v], E('CommitmentRequest', {
                  messageprefix: 'mug00',
                  tokencommitment: p.slice(2),
                  temppubx: h,
                  temppuby: f,
                  verifieridentifier: n
                })).catch((function(e) {
                  return Pe.error('commitment', e);
                })), u.push(g);
                return e.abrupt("return", Ae(u, (function(e) {
                  return e.filter((function(e) {
                    return !(!e || 'object' !== ne(e)) && !e.error;
                  })).length >= 3 * ~~(t.length / 4) + 1 ? Promise.resolve(e) : Promise.reject(new Error("invalid ".concat(JSON.stringify(e))));
                })).then((function(e) {
                  var s = [];
                  var u = [];
                  for (var d = 0; d < e.length; d += 1) e[d] && u.push(e[d].result);
                  for (var h = 0; h < t.length; h += 1) {
                    var f = P(t[h], E('ShareRequest', {
                      encrypted: 'yes',
                      item: [ Fe(Fe({}, i), {}, {
                        idtoken: o,
                        nodesignatures: u,
                        verifieridentifier: n
                      }, c) ]
                    })).catch((function(e) {
                      return Pe.error('share req', e);
                    }));
                    s.push(f);
                  }
                  return Ae(s, function() {
                    var e = oe(le().mark((function e(n, i) {
                      var o, s, c, u, d, h, f, p, v, g, y, b;
                      return le().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                         case 0:
                          if (o = n.filter((function(e) {
                            return e;
                          })), s = De(n.map((function(e) {
                            return e && e.result && e.result.keys[0].PublicKey;
                          })), 1 + ~~(t.length / 2)), !(o.length >= 1 + ~~(t.length / 2) && s)) {
                            e.next = 25;
                            break;
                          }
                          for (c = [], u = [], d = 0; d < n.length; d += 1) n[d] && n[d].result && n[d].result.keys && n[d].result.keys.length > 0 ? (n[d].result.keys.sort((function(e, t) {
                            return new (fe())(e.Index, 16).cmp(new (fe())(t.Index, 16));
                          })), n[d].result.keys[0].Metadata ? (h = {
                            ephemPublicKey: je.from(n[d].result.keys[0].Metadata.ephemPublicKey, 'hex'),
                            iv: je.from(n[d].result.keys[0].Metadata.iv, 'hex'),
                            mac: je.from(n[d].result.keys[0].Metadata.mac, 'hex'),
                            mode: je.from(n[d].result.keys[0].Metadata.mode, 'hex')
                          }, c.push((0, de.pe)(l, Fe(Fe({}, h), {}, {
                            ciphertext: je.from(atob(n[d].result.keys[0].Share).padStart(64, '0'), 'hex')
                          })).catch((function(e) {
                            return Pe.debug('share decryption', e);
                          })))) : c.push(Promise.resolve(je.from(n[d].result.keys[0].Share.padStart(64, '0'), 'hex')))) : c.push(Promise.resolve(void 0)), 
                          u.push(new (fe())(r[d], 16));
                          return e.next = 8, Promise.all(c);

                         case 8:
                          if (f = e.sent, !i.resolved) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt("return", void 0);

                         case 11:
                          p = f.reduce((function(e, t, r) {
                            return t && e.push({
                              index: u[r],
                              value: new (fe())(t)
                            }), e;
                          }), []), v = Re(p.length, 1 + ~~(t.length / 2)), y = function(e) {
                            var t = v[e];
                            var r = p.filter((function(e, r) {
                              return t.includes(r);
                            }));
                            var n = r.map((function(e) {
                              return e.value;
                            }));
                            var i = r.map((function(e) {
                              return e.index;
                            }));
                            var o = a.lagrangeInterpolation(n, i);
                            var c = (0, de.rc)(je.from(o.toString(16, 64), 'hex')).toString('hex');
                            var u = c.slice(2, 66);
                            var l = c.slice(66);
                            if (0 === new (fe())(u, 16).cmp(new (fe())(s.X, 16)) && 0 === new (fe())(l, 16).cmp(new (fe())(s.Y, 16))) return g = o, 
                            "break";
                          }, b = 0;

                         case 15:
                          if (!(b < v.length)) {
                            e.next = 22;
                            break;
                          }
                          if ("break" !== y(b)) {
                            e.next = 19;
                            break;
                          }
                          return e.abrupt("break", 22);

                         case 19:
                          b += 1, e.next = 15;
                          break;

                         case 22:
                          if (void 0 !== g) {
                            e.next = 24;
                            break;
                          }
                          throw new Error('could not derive private key');

                         case 24:
                          return e.abrupt("return", g);

                         case 25:
                          throw new Error('invalid');

                         case 26:
                         case "end":
                          return e.stop();
                        }
                      }), e);
                    })));
                    return function(t, r) {
                      return e.apply(this, arguments);
                    };
                  }());
                })).then(function() {
                  var e = oe(le().mark((function e(t) {
                    var r, n, i, o, s, c, u, l;
                    return le().wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        if (r = t, n = (0, de.rc)(je.from(r.toString(16, 64), 'hex')).toString('hex'), i = n.slice(2, 66), o = n.slice(66), !a.enableOneKey) {
                          e.next = 12;
                          break;
                        }
                        return e.next = 7, a.getNonce(i, o, r);

                       case 7:
                        c = e.sent, u = c.nonce, s = new (fe())(u || '0', 16), e.next = 15;
                        break;

                       case 12:
                        return e.next = 14, a.getMetadata({
                          pub_key_X: i,
                          pub_key_Y: o
                        });

                       case 14:
                        s = e.sent;

                       case 15:
                        return Pe.debug('> torus.js/retrieveShares', {
                          privKey: r.toString(16),
                          metadataNonce: s.toString(16)
                        }), r = r.add(s).umod(a.ec.curve.n), l = a.generateAddressFromPrivKey(r), Pe.debug('> torus.js/retrieveShares', {
                          ethAddress: l,
                          privKey: r.toString(16)
                        }), e.abrupt("return", {
                          ethAddress: l,
                          privKey: r.toString('hex', 64),
                          metadataNonce: s
                        });

                       case 20:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                }()));

               case 11:
               case "end":
                return e.stop();
              }
            }), e, this);
          })));
          return function(t, r, n, i, o) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "getMetadata",
        value: function() {
          var e = oe(le().mark((function e(t, r) {
            var n;
            return le().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.prev = 0, e.next = 3, P("".concat(this.metadataHost, "/get"), t, r, {
                  useAPIKey: !0
                });

               case 3:
                if ((n = e.sent) && n.message) {
                  e.next = 6;
                  break;
                }
                return e.abrupt("return", new (fe())(0));

               case 6:
                return e.abrupt("return", new (fe())(n.message, 16));

               case 9:
                return e.prev = 9, e.t0 = e.catch(0), Pe.error('get metadata error', e.t0), e.abrupt("return", new (fe())(0));

               case 13:
               case "end":
                return e.stop();
              }
            }), e, this, [ [ 0, 9 ] ]);
          })));
          return function(t, r) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "generateMetadataParams",
        value: function(e, t) {
          var r = this.ec.keyFromPrivate(t.toString('hex', 64));
          var n = {
            data: e,
            timestamp: new (fe())(~~(this.serverTimeOffset + Date.now() / 1e3)).toString(16)
          };
          var i = r.sign((0, s.keccak256)(ge()(n)).slice(2));
          return {
            pub_key_X: r.getPublic().getX().toString('hex'),
            pub_key_Y: r.getPublic().getY().toString('hex'),
            set_data: n,
            signature: je.from(i.r.toString(16, 64) + i.s.toString(16, 64) + new (fe())(i.v).toString(16, 2), 'hex').toString('base64')
          };
        }
      }, {
        key: "setMetadata",
        value: function() {
          var e = oe(le().mark((function e(t, r) {
            var n;
            return le().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.prev = 0, e.next = 3, P("".concat(this.metadataHost, "/set"), t, r, {
                  useAPIKey: !0
                });

               case 3:
                return n = e.sent, e.abrupt("return", n.message);

               case 7:
                return e.prev = 7, e.t0 = e.catch(0), Pe.error('set metadata error', e.t0), e.abrupt("return", '');

               case 11:
               case "end":
                return e.stop();
              }
            }), e, this, [ [ 0, 7 ] ]);
          })));
          return function(t, r) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "lagrangeInterpolation",
        value: function(e, t) {
          if (e.length !== t.length) return null;
          var r = new (fe())(0);
          for (var n = 0; n < e.length; n += 1) {
            var i = new (fe())(1);
            var o = new (fe())(1);
            for (var a = 0; a < e.length; a += 1) if (n !== a) {
              i = (i = i.mul(t[a].neg())).umod(this.ec.curve.n);
              var s = t[n].sub(t[a]);
              s = s.umod(this.ec.curve.n), o = o.mul(s).umod(this.ec.curve.n);
            }
            var c = i.mul(o.invm(this.ec.curve.n)).umod(this.ec.curve.n);
            c = c.mul(e[n]).umod(this.ec.curve.n), r = r.add(c);
          }
          return r.umod(this.ec.curve.n);
        }
      }, {
        key: "generateAddressFromPrivKey",
        value: function(e) {
          var t = this.ec.keyFromPrivate(e.toString('hex', 64), 'hex').getPublic().encode('hex').slice(2);
          var r = "0x".concat((0, s.keccak256)(je.from(t, 'hex')).slice(26));
          return (0, s.toChecksumAddress)(r);
        }
      }, {
        key: "generateAddressFromPubKey",
        value: function(e, t) {
          var r = this.ec.keyFromPublic({
            x: e.toString('hex', 64),
            y: t.toString('hex', 64)
          }).getPublic().encode('hex').slice(2);
          var n = "0x".concat((0, s.keccak256)(je.from(r, 'hex')).slice(26));
          return (0, s.toChecksumAddress)(n);
        }
      }, {
        key: "getPublicAddress",
        value: function() {
          var e = oe(le().mark((function e(t, r, n) {
            var i, o, a, s, c, u, l, d, h, f, p, v, g, y, b, m, w, _, S, k, x = arguments;
            return le().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return i = n.verifier, o = n.verifierId, a = x.length > 3 && void 0 !== x[3] && x[3], Pe.debug('> torus.js/getPublicAddress', {
                  endpoints: t,
                  torusNodePubs: r,
                  verifier: i,
                  verifierId: o,
                  isExtended: a
                }), c = !1, e.next = 6, Ue(t, i, o);

               case 6:
                if (e.t0 = e.sent, e.t0) {
                  e.next = 9;
                  break;
                }
                e.t0 = {};

               case 9:
                if (u = e.t0, l = u.keyResult, !(d = u.errorResult) || !JSON.stringify(d).includes('Verifier not supported')) {
                  e.next = 16;
                  break;
                }
                throw new Error("Verifier not supported. Check if you: \n\n      1. Are on the right network (Torus testnet/mainnet) \n\n      2. Have setup a verifier on dashboard.web3auth.io?");

               case 16:
                if (!d || !JSON.stringify(d).includes('Verifier + VerifierID has not yet been assigned')) {
                  e.next = 29;
                  break;
                }
                return e.next = 19, qe(t, r, void 0, void 0, i, o);

               case 19:
                return e.next = 21, Ne(t, i, o, 1e3);

               case 21:
                if (e.t1 = e.sent, e.t1) {
                  e.next = 24;
                  break;
                }
                e.t1 = {};

               case 24:
                h = e.t1, s = h.keyResult, c = !0, e.next = 34;
                break;

               case 29:
                if (!l) {
                  e.next = 33;
                  break;
                }
                s = l, e.next = 34;
                break;

               case 33:
                throw new Error("node results do not match at first lookup ".concat(JSON.stringify(l || {}), ", ").concat(JSON.stringify(d || {})));

               case 34:
                if (Pe.debug('> torus.js/getPublicAddress', {
                  finalKeyResult: s,
                  isNewKey: c
                }), !s) {
                  e.next = 76;
                  break;
                }
                if (p = s.keys[0], v = p.pub_key_X, g = p.pub_key_Y, !this.enableOneKey) {
                  e.next = 64;
                  break;
                }
                return e.prev = 38, e.next = 42, this.getOrSetNonce(v, g, void 0, !c);

               case 42:
                S = e.sent, y = S.typeOfUser, b = S.nonce, m = S.pubNonce, _ = S.upgraded, b = new (fe())(b || '0', 16), e.next = 53;
                break;

               case 50:
                throw e.prev = 50, e.t2 = e.catch(38), new Le;

               case 53:
                if ('v1' !== y) {
                  e.next = 57;
                  break;
                }
                w = this.ec.keyFromPublic({
                  x: v.toString(16),
                  y: g.toString(16)
                }).getPublic().add(this.ec.keyFromPrivate(b.toString(16)).getPublic()), e.next = 62;
                break;

               case 57:
                if ('v2' !== y) {
                  e.next = 61;
                  break;
                }
                w = _ ? this.ec.keyFromPublic({
                  x: v.toString(16),
                  y: g.toString(16)
                }).getPublic() : this.ec.keyFromPublic({
                  x: v.toString(16),
                  y: g.toString(16)
                }).getPublic().add(this.ec.keyFromPublic({
                  x: m.x,
                  y: m.y
                }).getPublic()), e.next = 62;
                break;

               case 61:
                throw new Error('getOrSetNonce should always return typeOfUser.');

               case 62:
                e.next = 69;
                break;

               case 64:
                return y = 'v1', e.next = 67, this.getMetadata({
                  pub_key_X: v,
                  pub_key_Y: g
                });

               case 67:
                b = e.sent, w = this.ec.keyFromPublic({
                  x: v.toString(16),
                  y: g.toString(16)
                }).getPublic().add(this.ec.keyFromPrivate(b.toString(16)).getPublic());

               case 69:
                if (v = w.getX().toString(16), g = w.getY().toString(16), k = this.generateAddressFromPubKey(w.getX(), w.getY()), Pe.debug('> torus.js/getPublicAddress', {
                  X: v,
                  Y: g,
                  address: k,
                  typeOfUser: y,
                  nonce: null === (f = b) || void 0 === f ? void 0 : f.toString(16),
                  pubNonce: m
                }), a) {
                  e.next = 75;
                  break;
                }
                return e.abrupt("return", k);

               case 75:
                return e.abrupt("return", {
                  typeOfUser: y,
                  address: k,
                  X: v,
                  Y: g,
                  metadataNonce: b,
                  pubNonce: m
                });

               case 76:
                throw new Error("node results do not match at final lookup ".concat(JSON.stringify(l || {}), ", ").concat(JSON.stringify(d || {})));

               case 77:
               case "end":
                return e.stop();
              }
            }), e, this, [ [ 38, 50 ] ]);
          })));
          return function(t, r, n) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "getOrSetNonce",
        value: function() {
          var e = oe(le().mark((function e(t, r, n) {
            var i, o, a, s = arguments;
            return le().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return i = s.length > 3 && void 0 !== s[3] && s[3], a = i ? 'getNonce' : 'getOrSetNonce', o = n ? this.generateMetadataParams(a, n) : {
                  pub_key_X: t,
                  pub_key_Y: r,
                  set_data: {
                    data: a
                  }
                }, e.abrupt("return", P("".concat(this.metadataHost, "/get_or_set_nonce"), o, void 0, {
                  useAPIKey: !0
                }));

               case 4:
               case "end":
                return e.stop();
              }
            }), e, this);
          })));
          return function(t, r, n) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "getNonce",
        value: function() {
          var e = oe(le().mark((function e(t, r, n) {
            return le().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", this.getOrSetNonce(t, r, n, !0));

               case 1:
               case "end":
                return e.stop();
              }
            }), e, this);
          })));
          return function(t, r, n) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "getPostboxKeyFrom1OutOf1",
        value: function(e, t) {
          var r = new (fe())(e, 16);
          var n = new (fe())(t, 16);
          return r.sub(n).umod(this.ec.curve.n).toString('hex');
        }
      } ], [ {
        key: "enableLogging",
        value: function() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          e ? Pe.enableAll() : Pe.disableAll();
        }
      }, {
        key: "setAPIKey",
        value: function(e) {
          S(e);
        }
      }, {
        key: "setEmbedHost",
        value: function(e) {
          _(e);
        }
      }, {
        key: "isGetOrSetNonceError",
        value: function(e) {
          return e instanceof Le;
        }
      } ]), e;
    }();
    var Ve = r(12724);
    var Ke = r(79826);
    var He = r(64063);
    var ze = r.n(He);
    function Ye(e) {
      return null !== e && 'object' == typeof e && 'function' == typeof e.pipe;
    }
    function Ge(e) {
      return function(e) {
        return Ye(e) && !1 !== e.writable && 'function' == typeof e._write && 'object' == typeof e._writableState;
      }(e) && function(e) {
        return Ye(e) && !1 !== e.readable && 'function' == typeof e._read && 'object' == typeof e._readableState;
      }(e);
    }
    var Xe = r(23482);
    var Je = r.n(Xe);
    const $e = "google", Ze = "facebook", Qe = "twitch", et = "reddit", tt = "discord";
    const rt = {
      [$e]: "tkey-google",
      [Ze]: "tkey-facebook",
      [Qe]: "tkey-twitch",
      [et]: "tkey-reddit",
      [tt]: "tkey-discord"
    };
    const nt = {
      PRODUCTION: "production",
      DEVELOPMENT: "development",
      BINANCE: "binance",
      TESTING: "testing",
      LRC: "lrc",
      BETA: "beta"
    };
    const it = {
      BOTTOM_LEFT: "bottom-left",
      TOP_LEFT: "top-left",
      BOTTOM_RIGHT: "bottom-right",
      TOP_RIGHT: "top-right"
    };
    var ot = {
      supportedVerifierList: [ $e, et, tt ],
      paymentProviders: {
        ["rampnetwork"]: {
          line1: "Debit Card/ Apple Pay/ Bank transfer",
          line2: "0.49% - 2.9%",
          line3: "5,000€/purchase, 20,000€/mo",
          supportPage: "https://instant.ramp.network/",
          minOrderValue: 50,
          maxOrderValue: 2e4,
          validCurrencies: [ "GBP", "EUR", "USD" ],
          validCryptoCurrencies: [ "ETH", "DAI", "USDC", "BSC_BNB" ],
          includeFees: !0,
          enforceMax: !1
        },
        ["moonpay"]: {
          line1: "Credit / Debit Card / Apple Pay",
          line2: "4.5% or 5 USD",
          line3: "2,000€/day, 10,000€/mo",
          supportPage: "https://help.moonpay.io/en/",
          minOrderValue: 24.99,
          maxOrderValue: 5e4,
          validCurrencies: [ "USD", "EUR", "GBP", "AUD", "CAD", "SGD", "RUB" ],
          validCryptoCurrencies: [ "ETH", "DAI", "TUSD", "USDC", "USDT", "BNB_BSC", "BUSD_BSC" ],
          includeFees: !0,
          enforceMax: !1
        },
        ["wyre"]: {
          line1: "Apple Pay/ Debit/ Credit Card",
          line2: "4.9% + 30¢ or 5 USD",
          line3: "$250/day",
          supportPage: "https://support.sendwyre.com/en/",
          minOrderValue: 5,
          maxOrderValue: 500,
          validCurrencies: [ "USD", "AUD", "CAD", "GBP", "EUR" ],
          validCryptoCurrencies: [ "ETH", "DAI", "USDC", "USDT" ],
          includeFees: !1,
          enforceMax: !1
        },
        ["xanpool"]: {
          line1: "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ VietelPay/ DuitNow",
          line2: "2.5% buying, 3% selling",
          line3: "$2,500 / day",
          supportPage: "mailto:support@xanpool.com",
          minOrderValue: 100,
          maxOrderValue: 2500,
          validCurrencies: [ "SGD", "HKD", "MYR", "PHP", "INR", "VND", "THB", "IDR" ],
          validCryptoCurrencies: [ "ETH", "USDT" ],
          includeFees: !0,
          sell: !0,
          enforceMax: !1
        },
        ["mercuryo"]: {
          line1: "Credit/ Debit Card/ Apple Pay",
          line2: "3.95% or 4 USD",
          line3: "10,000€/day, 25,000€/mo",
          supportPage: "mailto:support@mercuryo.io",
          minOrderValue: 30,
          maxOrderValue: 5e3,
          validCurrencies: [ "USD", "EUR", "RUB", "TRY", "GBP", "UAH" ],
          validCryptoCurrencies: [ "ETH", "DAI", "BAT", "USDT", "OKB" ],
          includeFees: !0,
          enforceMax: !1
        },
        ["transak"]: {
          line1: "Credit/ Debit Card/ <br/>Bank Transfer (sepa/gbp)",
          line2: "0.99% - 5.5% or 5 USD",
          line3: "500€/day",
          supportPage: "https://support.transak.com/hc/en-US",
          minOrderValue: 20,
          maxOrderValue: 500,
          validCurrencies: [ "USD", "EUR", "GBP", "AUD", "CAD", "SGD" ],
          validCryptoCurrencies: [ "ETH", "DAI", "USDC", "USDT" ],
          includeFees: !0,
          enforceMax: !1
        }
      },
      api: "https://api.tor.us",
      translations: {
        en: {
          embed: {
            continue: "Continue",
            actionRequired: "Authorization required",
            pendingAction: "Click continue to proceed with your request in a popup",
            cookiesRequired: "Cookies Required",
            enableCookies: "Please enable cookies in your browser preferences to access Torus",
            clickHere: "More Info"
          }
        },
        de: {
          embed: {
            continue: "Fortsetzen",
            actionRequired: "Autorisierung erforderlich",
            pendingAction: "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
            cookiesRequired: "Cookies benötigt",
            enableCookies: "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
            clickHere: "Mehr Info"
          }
        },
        ja: {
          embed: {
            continue: "継続する",
            actionRequired: "認証が必要です",
            pendingAction: "続行をクリックして、ポップアップでリクエストを続行します",
            cookiesRequired: "必要なクッキー",
            enableCookies: "Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",
            clickHere: "詳しくは"
          }
        },
        ko: {
          embed: {
            continue: "계속하다",
            actionRequired: "승인 필요",
            pendingAction: "팝업에서 요청을 진행하려면 계속을 클릭하십시오.",
            cookiesRequired: "쿠키 필요",
            enableCookies: "브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",
            clickHere: "더 많은 정보"
          }
        },
        zh: {
          embed: {
            continue: "继续",
            actionRequired: "需要授权",
            pendingAction: "单击继续以在弹出窗口中继续您的请求",
            cookiesRequired: "必填Cookie",
            enableCookies: "请在您的浏览器首选项中启用cookie以访问Torus。",
            clickHere: "更多信息"
          }
        }
      },
      prodTorusUrl: "",
      localStorageKey: "torus-".concat(window.location.hostname)
    };
    const at = e => new Promise(((t, r) => {
      null != window.document.body ? Promise.resolve(e()).then(t).catch(r) : window.document.addEventListener("DOMContentLoaded", (() => {
        Promise.resolve(e()).then(t).catch(r);
      }));
    }));
    const st = e => {
      const t = window.document.createElement("template");
      const r = e.trim();
      return t.innerHTML = r, t.content.firstChild;
    };
    const ct = (e, t, r) => {
      const n = i => {
        r(i), e.removeListener(t, n);
      };
      e.on(t, n);
    };
    async function ut() {
      return new Promise((e => {
        "loading" !== document.readyState ? e() : function(e, t, r) {
          for (var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), o = 3; o < n; o++) i[o - 3] = arguments[o];
          const a = () => {
            r(...i), e.removeEventListener(t, a);
          };
          e.addEventListener(t, a);
        }(document, "DOMContentLoaded", e);
      }));
    }
    var lt = v().getLogger("torus-embed");
    var dt = {
      errors: {
        disconnected: () => "Torus: Lost connection to Torus.",
        permanentlyDisconnected: () => "Torus: Disconnected from iframe. Page reload required.",
        sendSiteMetadata: () => "Torus: Failed to send site metadata. This is an internal error, please report this bug.",
        unsupportedSync: e => "Torus: The Torus Ethereum provider does not support synchronous methods like ".concat(e, " without a callback parameter."),
        invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
        invalidOptions: (e, t) => "Invalid options. Received: { maxEventListeners: ".concat(e, ", shouldSendMetadata: ").concat(t, " }"),
        invalidRequestArgs: () => "Expected a single, non-array, object argument.",
        invalidRequestMethod: () => "'args.method' must be a non-empty string.",
        invalidRequestParams: () => "'args.params' must be an object or array if provided.",
        invalidLoggerObject: () => "'args.logger' must be an object if provided.",
        invalidLoggerMethod: e => "'args.logger' must include required method '".concat(e, "'.")
      },
      info: {
        connected: e => "Torus: Connected to chain with ID \"".concat(e, "\".")
      },
      warnings: {
        enableDeprecation: "Torus: \"\"ethereum.enable()\" is deprecated and may be removed in the future. Please use \"ethereum.send(\"eth_requestAccounts\")\" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102",
        sendDeprecation: "Torus: \"ethereum.send(...)\" is deprecated and may be removed in the future. Please use \"ethereum.sendAsync(...)\" or \"ethereum.request(...)\" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
        events: {
          close: "Torus: The event \"close\" is deprecated and may be removed in the future. Please use \"disconnect\" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
          data: "Torus: The event \"data\" is deprecated and will be removed in the future.Use \"message\" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message",
          networkChanged: "Torus: The event \"networkChanged\" is deprecated and may be removed in the future. Please use \"chainChanged\" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
          notification: "Torus: The event \"notification\" is deprecated and may be removed in the future. Please use \"message\" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193"
        },
        publicConfigStore: 'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.'
      }
    };
    const {paymentProviders: ht} = ot;
    function ft(e, t, r) {
      let n = "MetaMask: Lost connection to \"".concat(e, "\".");
      null != t && t.stack && (n += "\n".concat(t.stack)), lt.warn(n), r && r.listenerCount("error") > 0 && r.emit("error", n);
    }
    const pt = () => Math.random().toString(36).slice(2);
    const vt = async (e, t) => {
      let r;
      let n;
      const i = "1.20.4";
      let o = t.version || i;
      try {
        if (("binance" === e || "production" === e) && !t.version) {
          let e;
          e = ot.prodTorusUrl ? {
            data: ot.prodTorusUrl
          } : await j("".concat(ot.api, "/latestversion?name=@toruslabs/torus-embed&version=").concat(i), {}, {
            useAPIKey: !0
          }), o = e.data, ot.prodTorusUrl = e.data;
        }
      } catch (a) {
        lt.error(a, "unable to fetch latest version");
      }
      switch (lt.info("version used: ", o), e) {
       case "binance":
        r = "https://binance.tor.us/v".concat(o), n = "info";
        break;

       case "testing":
        r = "https://testing.tor.us", n = "debug";
        break;

       case "lrc":
        r = "https://lrc.tor.us", n = "debug";
        break;

       case "beta":
        r = "https://beta.tor.us", n = "debug";
        break;

       case "development":
        r = "http://localhost:4050", n = "debug";
        break;

       default:
        r = "https://app.tor.us/v".concat(o), n = "error";
      }
      return {
        torusUrl: r,
        logLevel: n
      };
    };
    const gt = () => {
      let e = window.navigator.language || "en-US";
      const t = e.split("-");
      return e = Object.prototype.hasOwnProperty.call(ot.translations, t[0]) ? t[0] : "en", e;
    };
    const yt = [ "eth_subscription" ];
    const bt = () => {};
    const mt = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375";
    const wt = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
    function _t(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    H.defaultMaxListeners = 100;
    const St = function(e, t) {
      let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      return (n, i) => n || i.error ? t(n || i.error) : !r || Array.isArray(i) ? e(i) : e(i.result);
    };
    class kt extends H {
      constructor(e) {
        let {maxEventListeners: t = 100, shouldSendMetadata: r = !0, jsonRpcStreamName: n = "provider"} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (super(), i(this, "chainId", void 0), i(this, "selectedAddress", void 0), i(this, "_rpcEngine", void 0), i(this, "networkVersion", void 0), 
        i(this, "shouldSendMetadata", void 0), i(this, "isTorus", void 0), i(this, "_publicConfigStore", void 0), i(this, "tryPreopenHandle", void 0), 
        i(this, "enable", void 0), i(this, "_state", void 0), i(this, "_jsonRpcConnection", void 0), i(this, "_sentWarnings", {
          enable: !1,
          experimentalMethods: !1,
          send: !1,
          publicConfigStore: !1,
          events: {
            close: !1,
            data: !1,
            networkChanged: !1,
            notification: !1
          }
        }), !Ge(e)) throw new Error(dt.errors.invalidDuplexStream());
        this.isTorus = !0, this.setMaxListeners(t), this._state = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? _t(Object(r), !0).forEach((function(t) {
              i(e, t, r[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _t(Object(r)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            }));
          }
          return e;
        }({}, kt._defaultState), this.selectedAddress = null, this.networkVersion = null, this.chainId = null, this.shouldSendMetadata = r, 
        this._handleAccountsChanged = this._handleAccountsChanged.bind(this), this._handleChainChanged = this._handleChainChanged.bind(this), 
        this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this), this._handleConnect = this._handleConnect.bind(this), 
        this._handleDisconnect = this._handleDisconnect.bind(this), this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this), 
        this._sendSync = this._sendSync.bind(this), this._rpcRequest = this._rpcRequest.bind(this), this._warnOfDeprecation = this._warnOfDeprecation.bind(this), 
        this._initializeState = this._initializeState.bind(this), this.request = this.request.bind(this), this.send = this.send.bind(this), 
        this.sendAsync = this.sendAsync.bind(this);
        const o = new re;
        B()(e, o, e, this._handleStreamDisconnect.bind(this, "MetaMask")), this._publicConfigStore = new Ve.ObservableStore({
          storageKey: "Metamask-Config"
        }), B()(o.createStream("publicConfig"), (0, Ve.storeAsStream)(this._publicConfigStore), ft.bind(this, "MetaMask PublicConfigStore")), 
        o.ignoreStream("phishing"), this.on("connect", (() => {
          this._state.isConnected = !0;
        }));
        const a = G();
        B()(a.stream, o.createStream(n), a.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider"));
        const s = new $;
        s.push(X()), s.push(function() {
          return (e, t, r) => {
            "string" == typeof e.method && e.method || (t.error = Ke.ethErrors.rpc.invalidRequest({
              message: "The request 'method' must be a non-empty string.",
              data: e
            })), r((e => {
              const {error: r} = t;
              return r ? (lt.error("MetaMask - RPC Error: ".concat(r.message), r), e()) : e();
            }));
          };
        }()), s.push(a.middleware), this._rpcEngine = s, a.events.on("notification", (e => {
          const {method: t, params: r} = e;
          "wallet_accountsChanged" === t ? this._handleAccountsChanged(r) : "wallet_unlockStateChanged" === t ? this._handleUnlockStateChanged(r) : "wallet_chainChanged" === t ? this._handleChainChanged(r) : yt.includes(e.method) && (this.emit("data", e), 
          this.emit("notification", r.result), this.emit("message", {
            type: t,
            data: r
          }));
        }));
      }
      get publicConfigStore() {
        return this._sentWarnings.publicConfigStore || (lt.warn(dt.warnings.publicConfigStore), this._sentWarnings.publicConfigStore = !0), 
        this._publicConfigStore;
      }
      isConnected() {
        return this._state.isConnected;
      }
      async request(e) {
        if (!e || "object" != typeof e || Array.isArray(e)) throw Ke.ethErrors.rpc.invalidRequest({
          message: dt.errors.invalidRequestArgs(),
          data: e
        });
        const {method: t, params: r} = e;
        if ("string" != typeof t || 0 === t.length) throw Ke.ethErrors.rpc.invalidRequest({
          message: dt.errors.invalidRequestMethod(),
          data: e
        });
        if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r)) throw Ke.ethErrors.rpc.invalidRequest({
          message: dt.errors.invalidRequestParams(),
          data: e
        });
        return new Promise(((e, n) => {
          this._rpcRequest({
            method: t,
            params: r
          }, St(e, n));
        }));
      }
      sendAsync(e, t) {
        this._rpcRequest(e, t);
      }
      addListener(e, t) {
        return this._warnOfDeprecation(e), super.addListener(e, t);
      }
      on(e, t) {
        return this._warnOfDeprecation(e), super.on(e, t);
      }
      once(e, t) {
        return this._warnOfDeprecation(e), super.once(e, t);
      }
      prependListener(e, t) {
        return this._warnOfDeprecation(e), super.prependListener(e, t);
      }
      prependOnceListener(e, t) {
        return this._warnOfDeprecation(e), super.prependOnceListener(e, t);
      }
      async _initializeState() {
        try {
          const {accounts: e, chainId: t, isUnlocked: r, networkVersion: n} = await this.request({
            method: "wallet_getProviderState"
          });
          this.emit("connect", {
            chainId: t
          }), this._handleChainChanged({
            chainId: t,
            networkVersion: n
          }), this._handleUnlockStateChanged({
            accounts: e,
            isUnlocked: r
          }), this._handleAccountsChanged(e);
        } catch (e) {
          lt.error("MetaMask: Failed to get initial state. Please report this bug.", e);
        } finally {
          lt.info("initialized state"), this._state.initialized = !0, this.emit("_initialized");
        }
      }
      _rpcRequest(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let n = t;
        const i = e;
        if (!Array.isArray(i)) if (i.jsonrpc || (i.jsonrpc = "2.0"), "eth_accounts" === i.method || "eth_requestAccounts" === i.method) n = (e, n) => {
          this._handleAccountsChanged(n.result || [], "eth_accounts" === i.method, r), t(e, n);
        }; else if ("wallet_getProviderState" === i.method) return void this._rpcEngine.handle(e, n);
        this.tryPreopenHandle(i, n);
      }
      send(e, t) {
        return this._sentWarnings.send || (lt.warn(dt.warnings.sendDeprecation), this._sentWarnings.send = !0), "string" != typeof e || t && !Array.isArray(t) ? e && "object" == typeof e && "function" == typeof t ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise(((r, n) => {
          try {
            this._rpcRequest({
              method: e,
              params: t
            }, St(r, n, !1));
          } catch (i) {
            n(i);
          }
        }));
      }
      _sendSync(e) {
        let t;
        switch (e.method) {
         case "eth_accounts":
          t = this.selectedAddress ? [ this.selectedAddress ] : [];
          break;

         case "eth_coinbase":
          t = this.selectedAddress || null;
          break;

         case "eth_uninstallFilter":
          this._rpcRequest(e, bt), t = !0;
          break;

         case "net_version":
          t = this.networkVersion || null;
          break;

         default:
          throw new Error(dt.errors.unsupportedSync(e.method));
        }
        return {
          id: e.id,
          jsonrpc: e.jsonrpc,
          result: t
        };
      }
      _handleConnect(e) {
        this._state.isConnected || (this._state.isConnected = !0, this.emit("connect", {
          chainId: e
        }), lt.debug(dt.info.connected(e)));
      }
      _handleDisconnect(e, t) {
        if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
          let r;
          this._state.isConnected = !1, e ? (r = new Ke.EthereumRpcError(1013, t || dt.errors.disconnected()), lt.debug(r)) : (r = new Ke.EthereumRpcError(1011, t || dt.errors.permanentlyDisconnected()), 
          lt.error(r), this.chainId = null, this._state.accounts = null, this.selectedAddress = null, this._state.isUnlocked = !1, 
          this._state.isPermanentlyDisconnected = !0), this.emit("disconnect", r);
        }
      }
      _handleStreamDisconnect(e, t) {
        ft(e, t, this), this._handleDisconnect(!1, t ? t.message : void 0);
      }
      _handleAccountsChanged(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let n = e;
        Array.isArray(n) || (lt.error("MetaMask: Received non-array accounts parameter. Please report this bug.", n), n = []);
        for (const i of e) if ("string" != typeof i) {
          lt.error("MetaMask: Received non-string account. Please report this bug.", e), n = [];
          break;
        }
        ze()(this._state.accounts, n) || (t && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !r && lt.error('MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.', n), 
        this._state.accounts = n, this.emit("accountsChanged", n)), this.selectedAddress !== n[0] && (this.selectedAddress = n[0] || null);
      }
      _handleChainChanged() {
        let {chainId: e, networkVersion: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e && t ? "loading" === t ? this._handleDisconnect(!0) : (this._handleConnect(e), e !== this.chainId && (this.chainId = e, 
        this._state.initialized && this.emit("chainChanged", this.chainId))) : lt.error("MetaMask: Received invalid network parameters. Please report this bug.", {
          chainId: e,
          networkVersion: t
        });
      }
      _handleUnlockStateChanged() {
        let {accounts: e, isUnlocked: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        "boolean" == typeof t ? t !== this._state.isUnlocked && (this._state.isUnlocked = t, this._handleAccountsChanged(e || [])) : lt.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.", {
          isUnlocked: t
        });
      }
      _warnOfDeprecation(e) {
        !1 === this._sentWarnings.events[e] && (lt.warn(dt.warnings.events[e]), this._sentWarnings.events[e] = !0);
      }
    }
    i(kt, "_defaultState", {
      accounts: null,
      isConnected: !1,
      isUnlocked: !1,
      initialized: !1,
      isPermanentlyDisconnected: !1,
      hasEmittedConnection: !1
    });
    const xt = (e, t) => {
      const r = {};
      return e.algorithms.forEach((e => {
        r[e] = Je()(e).update(t, "utf8").digest("base64");
      })), r;
    };
    const Ot = (e, t) => {
      const r = (e => ({
        algorithms: e.algorithms || [ "sha256" ],
        delimiter: e.delimiter || " ",
        full: e.full || !1
      }))(e);
      const n = {
        hashes: xt(r, t),
        integrity: void 0
      };
      return n.integrity = ((e, t) => {
        let r = "";
        return r += Object.keys(t.hashes).map((e => "".concat(e, "-").concat(t.hashes[e]))).join(e.delimiter), r;
      })(r, n), r.full ? n : n.integrity;
    };
    class jt extends M.EventEmitter {
      constructor(e) {
        let {url: t, target: r, features: n} = e;
        super(), i(this, "url", void 0), i(this, "target", void 0), i(this, "features", void 0), i(this, "window", void 0), i(this, "windowTimer", void 0), 
        i(this, "iClosedWindow", void 0), this.url = t, this.target = r || "_blank", this.features = n || function() {
          const e = void 0 !== window.screenLeft ? window.screenLeft : window.screenX;
          const t = void 0 !== window.screenTop ? window.screenTop : window.screenY;
          const r = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
          const n = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
          const i = Math.abs((r - 1200) / 2 / 1 + e);
          const o = Math.abs((n - 700) / 2 / 1 + t);
          return "titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(700, ",width=").concat(1200, ",top=").concat(o, ",left=").concat(i);
        }(), this.window = void 0, this.windowTimer = void 0, this.iClosedWindow = !1, this._setupTimer();
      }
      _setupTimer() {
        this.windowTimer = Number(setInterval((() => {
          this.window && this.window.closed && (clearInterval(this.windowTimer), this.iClosedWindow || this.emit("close"), this.iClosedWindow = !1, 
          this.window = void 0), void 0 === this.window && clearInterval(this.windowTimer);
        }), 500));
      }
      open() {
        var e;
        return this.window = window.open(this.url.href, this.target, this.features), null !== (e = this.window) && void 0 !== e && e.focus && this.window.focus(), 
        Promise.resolve();
      }
      close() {
        this.iClosedWindow = !0, this.window && this.window.close();
      }
      redirect(e) {
        e ? window.location.replace(this.url.href) : window.location.href = this.url.href;
      }
    }
    function Pt(e) {
      return new Promise(((t, r) => {
        try {
          const r = document.createElement("img");
          r.onload = () => t(!0), r.onerror = () => t(!1), r.src = e;
        } catch (n) {
          r(n);
        }
      }));
    }
    const Et = e => {
      const {document: t} = e;
      const r = t.querySelector('head > meta[property="og:site_name"]');
      if (r) return r.content;
      const n = t.querySelector('head > meta[name="title"]');
      return n ? n.content : t.title && t.title.length > 0 ? t.title : e.location.hostname;
    };
    async function Ct(e) {
      const {document: t} = e;
      let r = t.querySelector('head > link[rel="shortcut icon"]');
      return r && await Pt(r.href) ? r.href : (r = Array.from(t.querySelectorAll('head > link[rel="icon"]')).find((e => Boolean(e.href))), 
      r && await Pt(r.href) ? r.href : null);
    }
    async function At(e) {
      try {
        const t = await (async () => ({
          name: Et(window),
          icon: await Ct(window)
        }))();
        e.handle({
          jsonrpc: "2.0",
          id: pt(),
          method: "wallet_sendDomainMetadata",
          params: t
        }, bt);
      } catch (t) {
        lt.error({
          message: dt.errors.sendSiteMetadata(),
          originalError: t
        });
      }
    }
    const Tt = [ "host", "chainId", "networkName" ];
    function Mt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function It(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Mt(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mt(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    const Lt = {
      [$e]: !0,
      [Ze]: !0,
      [et]: !0,
      [Qe]: !0,
      [tt]: !0
    };
    const Rt = "sha384-ChK4+k0VRMpAaC+psywsJYq0CnEqytZvQuy7L2cRWEwqImd7CA7Ep69YzBmHBR2V";
    const Dt = [ "eth_sendTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "eth_getEncryptionPublicKey", "eth_decrypt" ];
    const Ut = function(e) {
      let t;
      try {
        t = window[e];
        const r = "__storage_test__";
        return t.setItem(r, r), t.removeItem(r), !0;
      } catch (r) {
        return r && (22 === r.code || 1014 === r.code || "QuotaExceededError" === r.name || "NS_ERROR_DOM_QUOTA_REACHED" === r.name) && t && 0 !== t.length;
      }
    }("localStorage");
    !async function() {
      try {
        if ("undefined" == typeof document) return;
        const e = document.createElement("link");
        const {torusUrl: t} = await vt("production", {
          check: !1,
          hash: Rt,
          version: ""
        });
        e.href = "".concat(t, "/popup"), e.crossOrigin = "anonymous", e.type = "text/html", e.rel = "prefetch", e.relList && e.relList.supports && e.relList.supports("prefetch") && document.head.appendChild(e);
      } catch (e) {
        lt.warn(e);
      }
    }();
    class Nt {
      constructor() {
        let {buttonPosition: e = it.BOTTOM_LEFT, modalZIndex: t = 99999, apiKey: r = "torus-default"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, "buttonPosition", it.BOTTOM_LEFT), i(this, "torusUrl", void 0), i(this, "torusIframe", void 0), i(this, "styleLink", void 0), 
        i(this, "isLoggedIn", void 0), i(this, "isInitialized", void 0), i(this, "torusWidgetVisibility", void 0), i(this, "torusAlert", void 0), 
        i(this, "nodeDetailManager", void 0), i(this, "torusJs", void 0), i(this, "apiKey", void 0), i(this, "modalZIndex", void 0), 
        i(this, "alertZIndex", void 0), i(this, "torusAlertContainer", void 0), i(this, "isIframeFullScreen", void 0), i(this, "whiteLabel", void 0), 
        i(this, "requestedVerifier", void 0), i(this, "currentVerifier", void 0), i(this, "embedTranslations", void 0), i(this, "ethereum", void 0), 
        i(this, "provider", void 0), i(this, "communicationMux", void 0), i(this, "isLoginCallback", void 0), i(this, "dappStorageKey", void 0), 
        i(this, "paymentProviders", ot.paymentProviders), i(this, "loginHint", ""), this.buttonPosition = e, this.torusUrl = "", 
        this.isLoggedIn = !1, this.isInitialized = !1, this.torusWidgetVisibility = !0, this.requestedVerifier = "", this.currentVerifier = "", 
        this.nodeDetailManager = new d, this.torusJs = new We({
          metadataHost: "https://metadata.tor.us",
          allowHost: "https://signer.tor.us/api/allow"
        }), this.apiKey = r, We.setAPIKey(r), S(r), this.modalZIndex = t, this.alertZIndex = t + 1e3, this.isIframeFullScreen = !1, 
        this.dappStorageKey = "";
      }
      async init() {
        let {buildEnv: e = nt.PRODUCTION, enableLogging: t = !1, enabledVerifiers: r = Lt, network: n = {
          host: "mainnet",
          chainId: null,
          networkName: "",
          blockExplorer: "",
          ticker: "",
          tickerName: ""
        }, loginConfig: i = {}, showTorusButton: o = !0, integrity: a = {
          check: !1,
          hash: Rt,
          version: ""
        }, whiteLabel: s, skipTKey: c = !1, useLocalStorage: u = !1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.isInitialized) throw new Error("Already initialized");
        const {torusUrl: l, logLevel: d} = await vt(e, a);
        lt.info(l, "url loaded"), this.torusUrl = l, this.whiteLabel = s, lt.setDefaultLevel(d), t ? lt.enableAll() : lt.disableAll(), 
        this.torusWidgetVisibility = o;
        let h = "";
        if (Ut && u) {
          const e = window.localStorage.getItem(ot.localStorageKey);
          if (e) h = e; else {
            const e = "torus-app-".concat(pt());
            window.localStorage.setItem(ot.localStorageKey, e), h = e;
          }
        }
        this.dappStorageKey = h;
        const p = new URL(l);
        p.pathname.endsWith("/") ? p.pathname += "popup" : p.pathname += "/popup", h && (p.hash = "#dappStorageKey=".concat(h)), 
        this.torusIframe = st("<iframe\n        id=\"torusIframe\"\n        class=\"torusIframe\"\n        src=\"".concat(p.href, "\"\n        style=\"display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ").concat(this.modalZIndex, "\"\n      ></iframe>")), 
        this.torusAlertContainer = st('<div id="torusAlertContainer"></div>'), this.torusAlertContainer.style.display = "none", 
        this.torusAlertContainer.style.setProperty("z-index", this.alertZIndex.toString());
        const v = window.document.createElement("link");
        v.setAttribute("rel", "stylesheet"), v.setAttribute("type", "text/css"), v.setAttribute("href", "".concat(l, "/css/widget.css")), 
        this.styleLink = v;
        const {defaultLanguage: g = gt(), customTranslations: y = {}} = this.whiteLabel || {};
        const b = f()(ot.translations, y)[g] || ot.translations[gt()];
        this.embedTranslations = b.embed;
        const m = async () => (await ut(), new Promise(((e, t) => {
          this.torusIframe.onload = async () => {
            this._setupWeb3();
            const o = this.communicationMux.getStream("init_stream");
            o.on("data", (r => {
              const {name: n, data: i, error: o} = r;
              "init_complete" === n && i.success ? (this.isInitialized = !0, this._displayIframe(this.isIframeFullScreen), e(void 0)) : o && t(new Error(o));
            })), o.write({
              name: "init_stream",
              data: {
                enabledVerifiers: r,
                loginConfig: i,
                whiteLabel: this.whiteLabel,
                buttonPosition: this.buttonPosition,
                torusWidgetVisibility: this.torusWidgetVisibility,
                apiKey: this.apiKey,
                skipTKey: c,
                network: n
              }
            });
          }, window.document.head.appendChild(this.styleLink), window.document.body.appendChild(this.torusIframe), window.document.body.appendChild(this.torusAlertContainer);
        })));
        if ("production" === e && a.check) {
          const e = "".concat(l, "/popup");
          const t = await fetch(e, {
            cache: "reload"
          });
          if ("max-age=3600" !== t.headers.get("Cache-Control")) throw new Error("Unexpected Cache-Control headers, got ".concat(t.headers.get("Cache-Control")));
          const r = await t.text();
          const n = Ot({
            algorithms: [ "sha384" ]
          }, r);
          if (lt.info(n, "integrity"), n !== a.hash) throw this.clearInit(), new Error("Integrity check failed");
          await m();
        } else await m();
      }
      login() {
        let {verifier: e = "", login_hint: t = ""} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!this.isInitialized) throw new Error("Call init() first");
        return this.requestedVerifier = e, this.loginHint = t, this.ethereum.enable();
      }
      logout() {
        return new Promise(((e, t) => {
          if (!this.isLoggedIn) return void t(new Error("User has not logged in yet"));
          this.communicationMux.getStream("logout").write({
            name: "logOut"
          });
          const r = this.communicationMux.getStream("status");
          ct(r, "data", (r => {
            r.loggedIn ? t(new Error("Some Error Occured")) : (this.isLoggedIn = !1, this.currentVerifier = "", this.requestedVerifier = "", 
            e());
          }));
        }));
      }
      async cleanUp() {
        this.isLoggedIn && await this.logout(), this.clearInit();
      }
      clearInit() {
        function e(e) {
          return e instanceof Element || e instanceof HTMLDocument;
        }
        e(this.styleLink) && window.document.body.contains(this.styleLink) && (this.styleLink.remove(), this.styleLink = void 0), 
        e(this.torusIframe) && window.document.body.contains(this.torusIframe) && (this.torusIframe.remove(), this.torusIframe = void 0), 
        e(this.torusAlertContainer) && window.document.body.contains(this.torusAlertContainer) && (this.torusAlert = void 0, this.torusAlertContainer.remove(), 
        this.torusAlertContainer = void 0), this.isInitialized = !1;
      }
      hideTorusButton() {
        this.torusWidgetVisibility = !1, this._sendWidgetVisibilityStatus(!1), this._displayIframe();
      }
      showTorusButton() {
        this.torusWidgetVisibility = !0, this._sendWidgetVisibilityStatus(!0), this._displayIframe();
      }
      setProvider() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        let {host: t = "mainnet", chainId: r = null, networkName: i = ""} = e, o = n(e, Tt);
        return new Promise(((e, n) => {
          const a = this.communicationMux.getStream("provider_change");
          ct(a, "data", (t => {
            const {err: r, success: i} = t.data;
            lt.info(t), r ? n(r) : i ? e() : n(new Error("some error occured"));
          }));
          const s = pt();
          this._handleWindow(s, {
            target: "_blank",
            features: mt
          }), a.write({
            name: "show_provider_change",
            data: {
              network: It({
                host: t,
                chainId: r,
                networkName: i
              }, o),
              preopenInstanceId: s,
              override: !1
            }
          });
        }));
      }
      showWallet(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const r = this.communicationMux.getStream("show_wallet");
        const n = e ? "/".concat(e) : "";
        r.write({
          name: "show_wallet",
          data: {
            path: n
          }
        });
        ct(r, "data", (e => {
          if ("show_wallet_instance" === e.name) {
            const {instanceId: r} = e.data;
            const i = new URL("".concat(this.torusUrl, "/wallet").concat(n));
            i.searchParams.append("integrity", "true"), i.searchParams.append("instanceId", r), Object.keys(t).forEach((e => {
              i.searchParams.append(e, t[e]);
            })), this.dappStorageKey && (i.hash = "#dappStorageKey=".concat(this.dappStorageKey));
            new jt({
              url: i,
              features: "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315"
            }).open();
          }
        }));
      }
      async getPublicAddress(e) {
        let {verifier: t, verifierId: r, isExtended: n = !1} = e;
        if (!ot.supportedVerifierList.includes(t) || !rt[t]) throw new Error("Unsupported verifier");
        const i = await this.nodeDetailManager.getNodeDetails(!1, !0);
        const o = i.torusNodeEndpoints;
        const a = i.torusNodePub;
        const s = t;
        const c = rt[t];
        try {
          const e = await this.torusJs.getUserTypeAndAddress(o, a, {
            verifier: s,
            verifierId: r
          });
          if ("v1" === e.typeOfUser) return n ? e : e.address;
          const t = await this.torusJs.getUserTypeAndAddress(o, a, {
            verifier: c,
            verifierId: r
          }, !0);
          return n ? t : t.address;
        } catch (u) {
          if (null != u && u.message.includes("Verifier + VerifierID has not yet been assigned")) {
            const e = await this.torusJs.getUserTypeAndAddress(o, a, {
              verifier: c,
              verifierId: r
            }, !0);
            return n ? e : e.address;
          }
          throw u;
        }
      }
      getUserInfo(e) {
        return new Promise(((t, r) => {
          if (this.isLoggedIn) {
            const n = this.communicationMux.getStream("user_info_access");
            n.write({
              name: "user_info_access_request"
            });
            const i = n => {
              const {name: i, data: {approved: o, payload: a, rejected: s, newRequest: c}} = n;
              if ("user_info_access_response" === i) if (o) t(a); else if (s) r(new Error("User rejected the request")); else if (c) {
                const n = this.communicationMux.getStream("user_info");
                ct(n, "data", (e => {
                  "user_info_response" === e.name && (e.data.approved ? t(e.data.payload) : r(new Error("User rejected the request")));
                }));
                const i = pt();
                this._handleWindow(i, {
                  target: "_blank",
                  features: mt
                }), n.write({
                  name: "user_info_request",
                  data: {
                    message: e,
                    preopenInstanceId: i
                  }
                });
              }
            };
            ct(n, "data", i);
          } else r(new Error("User has not logged in yet"));
        }));
      }
      initiateTopup(e, t) {
        return new Promise(((r, n) => {
          if (this.isInitialized) {
            const {errors: i, isValid: o} = ((e, t) => {
              const r = {};
              if (!e) return {
                errors: r,
                isValid: !0
              };
              if (e && !ht[e]) return r.provider = "Invalid Provider", {
                errors: r,
                isValid: 0 === Object.keys(r).length
              };
              const n = ht[e];
              const i = t || {};
              if (i.fiatValue) {
                const e = +parseFloat(i.fiatValue.toString()) || 0;
                e < n.minOrderValue && (r.fiatValue = "Requested amount is lower than supported"), e > n.maxOrderValue && n.enforceMax && (r.fiatValue = "Requested amount is higher than supported");
              }
              return i.selectedCurrency && !n.validCurrencies.includes(i.selectedCurrency) && (r.selectedCurrency = "Unsupported currency"), 
              i.selectedCryptoCurrency && !n.validCryptoCurrencies.includes(i.selectedCryptoCurrency) && (r.selectedCryptoCurrency = "Unsupported cryptoCurrency"), 
              {
                errors: r,
                isValid: 0 === Object.keys(r).length
              };
            })(e, t);
            if (!o) return void n(new Error(JSON.stringify(i)));
            const a = this.communicationMux.getStream("topup");
            ct(a, "data", (e => {
              "topup_response" === e.name && (e.data.success ? r(e.data.success) : n(new Error(e.data.error)));
            }));
            const s = pt();
            this._handleWindow(s), a.write({
              name: "topup_request",
              data: {
                provider: e,
                params: t,
                preopenInstanceId: s
              }
            });
          } else n(new Error("Torus is not initialized yet"));
        }));
      }
      _handleWindow(e) {
        let {url: t, target: r, features: n} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e) {
          const i = this.communicationMux.getStream("window");
          const o = new URL(t || "".concat(this.torusUrl, "/redirect?preopenInstanceId=").concat(e));
          this.dappStorageKey && (o.hash ? o.hash += "&dappStorageKey=".concat(this.dappStorageKey) : o.hash = "#dappStorageKey=".concat(this.dappStorageKey));
          const a = new jt({
            url: o,
            target: r,
            features: n
          });
          if (a.open(), !a.window) return void this._createPopupBlockAlert(e, o.href);
          i.write({
            name: "opened_window",
            data: {
              preopenInstanceId: e
            }
          });
          const s = t => {
            let {preopenInstanceId: r, close: n} = t;
            r === e && n && (a.close(), i.removeListener("data", s));
          };
          i.on("data", s), a.once("close", (() => {
            i.write({
              data: {
                preopenInstanceId: e,
                closed: !0
              }
            }), i.removeListener("data", s);
          }));
        }
      }
      _setEmbedWhiteLabel(e) {
        const {theme: t} = this.whiteLabel || {};
        if (t) {
          const {isDark: r = !1, colors: n = {}} = t;
          r && e.classList.add("torus-dark"), n.torusBrand1 && e.style.setProperty("--torus-brand-1", n.torusBrand1), n.torusGray2 && e.style.setProperty("--torus-gray-2", n.torusGray2);
        }
      }
      _getLogoUrl() {
        var e, t;
        let r = "".concat(this.torusUrl, "/images/torus_icon-blue.svg");
        var n;
        var i;
        null !== (e = this.whiteLabel) && void 0 !== e && null !== (t = e.theme) && void 0 !== t && t.isDark ? r = (null === (n = this.whiteLabel) || void 0 === n ? void 0 : n.logoLight) || r : r = (null === (i = this.whiteLabel) || void 0 === i ? void 0 : i.logoDark) || r;
        return r;
      }
      _sendWidgetVisibilityStatus(e) {
        this.communicationMux.getStream("torus-widget-visibility").write({
          data: e
        });
      }
      _displayIframe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const t = {};
        if (e) t.display = "block", t.width = "100%", t.height = "100%", t.top = "0px", t.right = "0px", t.left = "0px", t.bottom = "0px"; else switch (t.display = this.torusWidgetVisibility ? "block" : "none", 
        t.height = "70px", t.width = "70px", this.buttonPosition) {
         case it.TOP_LEFT:
          t.top = "0px", t.left = "0px", t.right = "auto", t.bottom = "auto";
          break;

         case it.TOP_RIGHT:
          t.top = "0px", t.right = "0px", t.left = "auto", t.bottom = "auto";
          break;

         case it.BOTTOM_RIGHT:
          t.bottom = "0px", t.right = "0px", t.top = "auto", t.left = "auto";
          break;

         case it.BOTTOM_LEFT:
         default:
          t.bottom = "0px", t.left = "0px", t.top = "auto", t.right = "auto";
        }
        Object.assign(this.torusIframe.style, t), this.isIframeFullScreen = e;
      }
      _setupWeb3() {
        lt.info("setupWeb3 running");
        const e = new V({
          name: "embed_metamask",
          target: "iframe_metamask",
          targetWindow: this.torusIframe.contentWindow,
          targetOrigin: new URL(this.torusUrl).origin
        });
        const t = new V({
          name: "embed_comm",
          target: "iframe_comm",
          targetWindow: this.torusIframe.contentWindow,
          targetOrigin: new URL(this.torusUrl).origin
        });
        const r = new kt(e);
        const n = e => {
          const t = r[e];
          r[e] = function(e) {
            if (e && "eth_requestAccounts" === e) return r.enable();
            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
            return t.apply(this, [ e, ...i ]);
          };
        };
        n("send"), n("sendAsync"), r.enable = () => new Promise(((e, t) => {
          r.sendAsync({
            jsonrpc: "2.0",
            id: pt(),
            method: "eth_requestAccounts",
            params: []
          }, ((r, n) => {
            const {result: i} = n || {};
            if (r) setTimeout((() => {
              t(r);
            }), 50); else if (Array.isArray(i) && i.length > 0) {
              const r = () => {
                if ("" !== this.requestedVerifier && this.currentVerifier !== this.requestedVerifier) {
                  const {requestedVerifier: r} = this;
                  this.logout().then((n => {
                    this.requestedVerifier = r, this._showLoginPopup(!0, e, t);
                  })).catch((e => t(e)));
                } else e(i);
              };
              this.isLoggedIn ? r() : this.isLoginCallback = r;
            } else this._showLoginPopup(!0, e, t);
          }));
        })), r.tryPreopenHandle = (e, t) => {
          const n = e;
          if (!Array.isArray(n) && Dt.includes(n.method)) {
            const e = pt();
            this._handleWindow(e, {
              target: "_blank",
              features: wt
            }), n.preopenInstanceId = e;
          }
          r._rpcEngine.handle(n, t);
        };
        const i = new Proxy(r, {
          deleteProperty: () => !0
        });
        this.ethereum = i;
        const o = function(e) {
          const t = new re;
          return t.getStream = function(e) {
            return this._substreams[e] ? this._substreams[e] : this.createStream(e);
          }, B()(e, t, e, (e => {
            e && window.console.error(e);
          })), t;
        }(t);
        this.communicationMux = o;
        o.getStream("window").on("data", (e => {
          "create_window" === e.name && this._createPopupBlockAlert(e.data.preopenInstanceId, e.data.url);
        }));
        o.getStream("widget").on("data", (e => {
          const {data: t} = e;
          this._displayIframe(t);
        }));
        o.getStream("status").on("data", (e => {
          e.loggedIn ? (this.isLoggedIn = e.loggedIn, this.currentVerifier = e.verifier) : this._displayIframe(), this.isLoginCallback && (this.isLoginCallback(), 
          delete this.isLoginCallback);
        })), this.provider = i, this.provider.shouldSendMetadata && At(this.provider._rpcEngine), r._initializeState(), lt.debug("Torus - injected provider");
      }
      _showLoginPopup(e, t, r) {
        const n = e => {
          const {err: n, selectedAddress: i} = e;
          n ? (lt.error(n), r && r(n)) : t && t([ i ]), this.isIframeFullScreen && this._displayIframe();
        };
        const i = this.communicationMux.getStream("oauth");
        if (this.requestedVerifier) {
          ct(i, "data", n);
          const t = pt();
          this._handleWindow(t), i.write({
            name: "oauth",
            data: {
              calledFromEmbed: e,
              verifier: this.requestedVerifier,
              preopenInstanceId: t,
              login_hint: this.loginHint
            }
          });
        } else this._displayIframe(!0), ct(i, "data", n), i.write({
          name: "oauth_modal",
          data: {
            calledFromEmbed: e
          }
        });
      }
      _createPopupBlockAlert(e, t) {
        const r = this._getLogoUrl();
        const n = st('<div id="torusAlert" class="torus-alert--v2">' + "<div id=\"torusAlert__logo\"><img src=\"".concat(r, "\" /></div>") + "<div>" + "<h1 id=\"torusAlert__title\">".concat(this.embedTranslations.actionRequired, "</h1>") + "<p id=\"torusAlert__desc\">".concat(this.embedTranslations.pendingAction, "</p>") + "</div></div>");
        const i = st("<div><a id=\"torusAlert__btn\">".concat(this.embedTranslations.continue, "</a></div>"));
        const o = st('<div id="torusAlert__btn-container"></div>');
        o.appendChild(i), n.appendChild(o);
        this._setEmbedWhiteLabel(n);
        at((() => {
          this.torusAlertContainer.style.display = "block", this.torusAlertContainer.appendChild(n);
        })), at((() => {
          i.addEventListener("click", (() => {
            this._handleWindow(e, {
              url: t,
              target: "_blank",
              features: wt
            }), n.remove(), 0 === this.torusAlertContainer.children.length && (this.torusAlertContainer.style.display = "none");
          }));
        }));
      }
    }
    var qt = function(e, t, r, n) {
      return new (r || (r = Promise))((function(i, o) {
        function a(e) {
          try {
            c(n.next(e));
          } catch (t) {
            o(t);
          }
        }
        function s(e) {
          try {
            c(n.throw(e));
          } catch (t) {
            o(t);
          }
        }
        function c(e) {
          e.done ? i(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(a, s);
        }
        c((n = n.apply(e, t || [])).next());
      }));
    };
    var Bt = function(e, t) {
      var r, n, i, o, a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
      }), o;
      function s(o) {
        return function(s) {
          return function(o) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;a; ) try {
              if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
              switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
               case 0:
               case 1:
                i = o;
                break;

               case 4:
                return a.label++, {
                  value: o[1],
                  done: !1
                };

               case 5:
                a.label++, n = o[1], o = [ 0 ];
                continue;

               case 7:
                o = a.ops.pop(), a.trys.pop();
                continue;

               default:
                if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1], i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2], a.ops.push(o);
                  break;
                }
                i[2] && a.ops.pop(), a.trys.pop();
                continue;
              }
              o = t.call(e, a);
            } catch (s) {
              o = [ 6, s ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([ o, s ]);
        };
      }
    };
    var Ft = function() {
      return qt(void 0, void 0, void 0, (function() {
        return Bt(this, (function(e) {
          return [ 2, new Nt ];
        }));
      }));
    };
  },
  2450: (e, t, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = new (0, r(86266).ec)("secp256k1");
    var o = r.g.crypto || r.g.msCrypto || {};
    var a = o.subtle || o.webkitSubtle;
    var s = r(55835);
    const c = n.from('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 'hex');
    const u = n.alloc(32, 0);
    function l(e, t) {
      if (!e) throw new Error(t || "Assertion failed");
    }
    function d(e) {
      return !!function(e) {
        return n.isBuffer(e) && 32 === e.length;
      }(e) && (e.compare(u) > 0 && e.compare(c) < 0);
    }
    function h(e) {
      var t = new Uint8Array(e);
      return void 0 === o.getRandomValues ? n.from(s.randomBytes(e)) : (o.getRandomValues(t), n.from(t));
    }
    function f(e) {
      return new Promise((function(t) {
        var r = s.createHash('sha512').update(e).digest();
        t(new Uint8Array(r));
      }));
    }
    function p(e) {
      return function(t, r, i) {
        return new Promise((function(o) {
          if (a) {
            return a.importKey("raw", r, {
              name: "AES-CBC"
            }, !1, [ e ]).then((function(r) {
              var n = {
                name: "AES-CBC",
                iv: t
              };
              return a[e](n, r, i);
            })).then((function(e) {
              o(n.from(new Uint8Array(e)));
            }));
          }
          if ('encrypt' === e) {
            var c = s.createCipheriv('aes-256-cbc', r, t);
            let e = c.update(i);
            let a = c.final();
            o(n.concat([ e, a ]));
          } else if ('decrypt' === e) {
            var u = s.createDecipheriv('aes-256-cbc', r, t);
            let e = u.update(i);
            let a = u.final();
            o(n.concat([ e, a ]));
          }
        }));
      };
    }
    var v = p("encrypt");
    var g = p("decrypt");
    t.oq = function() {
      var e = h(32);
      for (;!d(e); ) e = h(32);
      return e;
    };
    var y = t.rc = function(e) {
      return l(32 === e.length, "Bad private key"), l(d(e), "Bad private key"), n.from(i.keyFromPrivate(e).getPublic("arr"));
    };
    var b = function(e, t) {
      return new Promise((function(r) {
        l(n.isBuffer(e), "Bad private key"), l(n.isBuffer(t), "Bad public key"), l(32 === e.length, "Bad private key"), l(d(e), "Bad private key"), 
        l(65 === t.length || 33 === t.length, "Bad public key"), 65 === t.length && l(4 === t[0], "Bad public key"), 33 === t.length && l(2 === t[0] || 3 === t[0], "Bad public key");
        var o = i.keyFromPrivate(e);
        var a = i.keyFromPublic(t);
        var s = o.derive(a.getPublic());
        r(n.from(s.toArray()));
      }));
    };
    t.pe = function(e, t) {
      var r;
      return b(e, t.ephemPublicKey).then((function(e) {
        return f(e);
      })).then((function(e) {
        return r = e.slice(0, 32), function(e, t, r) {
          return new Promise((function(i) {
            var o = s.createHmac('sha256', n.from(e));
            o.update(t), i(function(e, t) {
              if (e.length !== t.length) return !1;
              var r = 0;
              for (var n = 0; n < e.length; n++) r |= e[n] ^ t[n];
              return 0 === r;
            }(o.digest(), r));
          }));
        }(e.slice(32), n.concat([ t.iv, t.ephemPublicKey, t.ciphertext ]), t.mac);
      })).then((function(e) {
        return l(e, "Bad MAC"), g(t.iv, r, t.ciphertext);
      })).then((function(e) {
        return n.from(new Uint8Array(e));
      }));
    };
  },
  82240: (e, t, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(31518);
    function o(e, t) {
      return void 0 === t && (t = "utf8"), n.isBuffer(e) ? s(e.toString("base64")) : s(n.from(e, t).toString("base64"));
    }
    function a(e) {
      return e = e.toString(), i.default(e).replace(/\-/g, "+").replace(/_/g, "/");
    }
    function s(e) {
      return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    var c = o;
    c.encode = o, c.decode = function(e, t) {
      return void 0 === t && (t = "utf8"), n.from(a(e), "base64").toString(t);
    }, c.toBase64 = a, c.fromBase64 = s, c.toBuffer = function(e) {
      return n.from(a(e), "base64");
    }, t.default = c;
  },
  31518: (e, t, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function(e) {
      var t = e.length;
      var r = t % 4;
      if (!r) return e;
      var i = t;
      var o = 4 - r;
      var a = t + o;
      var s = n.alloc(a);
      for (s.write(e); o--; ) s.write("=", i++);
      return s.toString();
    };
  },
  45772: (e, t, r) => {
    e.exports = r(82240).default, e.exports.default = e.exports;
  },
  16497: (e, t, r) => {
    var n = r(48764).Buffer;
    function i(e) {
      return Object.prototype.toString.call(e);
    }
    t.isArray = function(e) {
      return Array.isArray ? Array.isArray(e) : '[object Array]' === i(e);
    }, t.isBoolean = function(e) {
      return 'boolean' == typeof e;
    }, t.isNull = function(e) {
      return null === e;
    }, t.isNullOrUndefined = function(e) {
      return null == e;
    }, t.isNumber = function(e) {
      return 'number' == typeof e;
    }, t.isString = function(e) {
      return 'string' == typeof e;
    }, t.isSymbol = function(e) {
      return 'symbol' == typeof e;
    }, t.isUndefined = function(e) {
      return void 0 === e;
    }, t.isRegExp = function(e) {
      return '[object RegExp]' === i(e);
    }, t.isObject = function(e) {
      return 'object' == typeof e && null !== e;
    }, t.isDate = function(e) {
      return '[object Date]' === i(e);
    }, t.isError = function(e) {
      return '[object Error]' === i(e) || e instanceof Error;
    }, t.isFunction = function(e) {
      return 'function' == typeof e;
    }, t.isPrimitive = function(e) {
      return null === e || 'boolean' == typeof e || 'number' == typeof e || 'string' == typeof e || 'symbol' == typeof e || void 0 === e;
    }, t.isBuffer = n.isBuffer;
  },
  12840: (e, t, r) => {
    var n = r(34155);
    var i = r(30778);
    var o = function() {};
    var a = function(e, t, r) {
      if ('function' == typeof t) return a(e, null, t);
      t || (t = {}), r = i(r || o);
      var s = e._writableState;
      var c = e._readableState;
      var u = t.readable || !1 !== t.readable && e.readable;
      var l = t.writable || !1 !== t.writable && e.writable;
      var d = !1;
      var h = function() {
        e.writable || f();
      };
      var f = function() {
        l = !1, u || r.call(e);
      };
      var p = function() {
        u = !1, l || r.call(e);
      };
      var v = function(t) {
        r.call(e, t ? new Error('exited with error code: ' + t) : null);
      };
      var g = function(t) {
        r.call(e, t);
      };
      var y = function() {
        n.nextTick(b);
      };
      var b = function() {
        if (!d) return (!u || c && c.ended && !c.destroyed) && (!l || s && s.ended && !s.destroyed) ? void 0 : r.call(e, new Error('premature close'));
      };
      var m = function() {
        e.req.on('finish', f);
      };
      return !function(e) {
        return e.setHeader && 'function' == typeof e.abort;
      }(e) ? l && !s && (e.on('end', h), e.on('close', h)) : (e.on('complete', f), e.on('abort', y), e.req ? m() : e.on('request', m)), 
      function(e) {
        return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length;
      }(e) && e.on('exit', v), e.on('end', p), e.on('finish', f), !1 !== t.error && e.on('error', g), e.on('close', y), function() {
        d = !0, e.removeListener('complete', f), e.removeListener('abort', y), e.removeListener('request', m), e.req && e.req.removeListener('finish', f), 
        e.removeListener('end', h), e.removeListener('close', h), e.removeListener('finish', f), e.removeListener('exit', v), e.removeListener('end', p), 
        e.removeListener('error', g), e.removeListener('close', y);
      };
    };
    e.exports = a;
  },
  64063: e => {
    "use strict";
    e.exports = function e(t, r) {
      if (t === r) return !0;
      if (t && r && 'object' == typeof t && 'object' == typeof r) {
        if (t.constructor !== r.constructor) return !1;
        var n, i, o;
        if (Array.isArray(t)) {
          if ((n = t.length) != r.length) return !1;
          for (i = n; 0 != i--; ) if (!e(t[i], r[i])) return !1;
          return !0;
        }
        if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
        if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length) return !1;
        for (i = n; 0 != i--; ) if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
        for (i = n; 0 != i--; ) {
          var a = o[i];
          if (!e(t[a], r[a])) return !1;
        }
        return !0;
      }
      return t != t && r != r;
    };
  },
  72378: (e, t, r) => {
    e = r.nmd(e);
    var n = '__lodash_hash_undefined__';
    var i = 9007199254740991;
    var o = '[object Arguments]', a = '[object Function]', s = '[object Object]';
    var c = /^\[object .+?Constructor\]$/;
    var u = /^(?:0|[1-9]\d*)$/;
    var l = {};
    l['[object Float32Array]'] = l['[object Float64Array]'] = l['[object Int8Array]'] = l['[object Int16Array]'] = l['[object Int32Array]'] = l['[object Uint8Array]'] = l['[object Uint8ClampedArray]'] = l['[object Uint16Array]'] = l['[object Uint32Array]'] = !0, 
    l[o] = l['[object Array]'] = l['[object ArrayBuffer]'] = l['[object Boolean]'] = l['[object DataView]'] = l['[object Date]'] = l['[object Error]'] = l[a] = l['[object Map]'] = l['[object Number]'] = l[s] = l['[object RegExp]'] = l['[object Set]'] = l['[object String]'] = l['[object WeakMap]'] = !1;
    var d = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g;
    var h = 'object' == typeof self && self && self.Object === Object && self;
    var f = d || h || Function('return this')();
    var p = t && !t.nodeType && t;
    var v = p && e && !e.nodeType && e;
    var g = v && v.exports === p;
    var y = g && d.process;
    var b = function() {
      try {
        var e = v && v.require && v.require('util').types;
        return e || y && y.binding && y.binding('util');
      } catch (t) {}
    }();
    var m = b && b.isTypedArray;
    function w(e, t, r) {
      switch (r.length) {
       case 0:
        return e.call(t);

       case 1:
        return e.call(t, r[0]);

       case 2:
        return e.call(t, r[0], r[1]);

       case 3:
        return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    var _ = Array.prototype, S = Function.prototype, k = Object.prototype;
    var x = f['__core-js_shared__'];
    var O = S.toString;
    var j = k.hasOwnProperty;
    var P = function() {
      var e = /[^.]+$/.exec(x && x.keys && x.keys.IE_PROTO || '');
      return e ? 'Symbol(src)_1.' + e : '';
    }();
    var E = k.toString;
    var C = O.call(Object);
    var A = RegExp('^' + O.call(j).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    var T = g ? f.Buffer : void 0, M = f.Symbol, I = f.Uint8Array, L = T ? T.allocUnsafe : void 0, R = function(e, t) {
      return function(r) {
        return e(t(r));
      };
    }(Object.getPrototypeOf, Object), D = Object.create, U = k.propertyIsEnumerable, N = _.splice, q = M ? M.toStringTag : void 0;
    var B = function() {
      try {
        var e = le(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch (t) {}
    }();
    var F = T ? T.isBuffer : void 0, W = Math.max, V = Date.now;
    var K = le(f, 'Map'), H = le(Object, 'create');
    var z = function() {
      function e() {}
      return function(t) {
        if (!Se(t)) return {};
        if (D) return D(t);
        e.prototype = t;
        var r = new e;
        return e.prototype = void 0, r;
      };
    }();
    function Y(e) {
      var t = -1, r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function G(e) {
      var t = -1, r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function X(e) {
      var t = -1, r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function J(e) {
      var t = this.__data__ = new G(e);
      this.size = t.size;
    }
    function $(e, t) {
      var r = ye(e), n = !r && ge(e), i = !r && !n && me(e), o = !r && !n && !i && xe(e), a = r || n || i || o, s = a ? function(e, t) {
        var r = -1, n = Array(e);
        for (;++r < e; ) n[r] = t(r);
        return n;
      }(e.length, String) : [], c = s.length;
      for (var u in e) !t && !j.call(e, u) || a && ('length' == u || i && ('offset' == u || 'parent' == u) || o && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u) || de(u, c)) || s.push(u);
      return s;
    }
    function Z(e, t, r) {
      (void 0 !== r && !ve(e[t], r) || void 0 === r && !(t in e)) && te(e, t, r);
    }
    function Q(e, t, r) {
      var n = e[t];
      j.call(e, t) && ve(n, r) && (void 0 !== r || t in e) || te(e, t, r);
    }
    function ee(e, t) {
      var r = e.length;
      for (;r--; ) if (ve(e[r][0], t)) return r;
      return -1;
    }
    function te(e, t, r) {
      '__proto__' == t && B ? B(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : e[t] = r;
    }
    Y.prototype.clear = function() {
      this.__data__ = H ? H(null) : {}, this.size = 0;
    }, Y.prototype.delete = function(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    }, Y.prototype.get = function(e) {
      var t = this.__data__;
      if (H) {
        var r = t[e];
        return r === n ? void 0 : r;
      }
      return j.call(t, e) ? t[e] : void 0;
    }, Y.prototype.has = function(e) {
      var t = this.__data__;
      return H ? void 0 !== t[e] : j.call(t, e);
    }, Y.prototype.set = function(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = H && void 0 === t ? n : t, this;
    }, G.prototype.clear = function() {
      this.__data__ = [], this.size = 0;
    }, G.prototype.delete = function(e) {
      var t = this.__data__, r = ee(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : N.call(t, r, 1), --this.size, !0);
    }, G.prototype.get = function(e) {
      var t = this.__data__, r = ee(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, G.prototype.has = function(e) {
      return ee(this.__data__, e) > -1;
    }, G.prototype.set = function(e, t) {
      var r = this.__data__, n = ee(r, e);
      return n < 0 ? (++this.size, r.push([ e, t ])) : r[n][1] = t, this;
    }, X.prototype.clear = function() {
      this.size = 0, this.__data__ = {
        hash: new Y,
        map: new (K || G),
        string: new Y
      };
    }, X.prototype.delete = function(e) {
      var t = ue(this, e).delete(e);
      return this.size -= t ? 1 : 0, t;
    }, X.prototype.get = function(e) {
      return ue(this, e).get(e);
    }, X.prototype.has = function(e) {
      return ue(this, e).has(e);
    }, X.prototype.set = function(e, t) {
      var r = ue(this, e), n = r.size;
      return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
    }, J.prototype.clear = function() {
      this.__data__ = new G, this.size = 0;
    }, J.prototype.delete = function(e) {
      var t = this.__data__, r = t.delete(e);
      return this.size = t.size, r;
    }, J.prototype.get = function(e) {
      return this.__data__.get(e);
    }, J.prototype.has = function(e) {
      return this.__data__.has(e);
    }, J.prototype.set = function(e, t) {
      var r = this.__data__;
      if (r instanceof G) {
        var n = r.__data__;
        if (!K || n.length < 199) return n.push([ e, t ]), this.size = ++r.size, this;
        r = this.__data__ = new X(n);
      }
      return r.set(e, t), this.size = r.size, this;
    };
    var re = function(e) {
      return function(t, r, n) {
        var i = -1, o = Object(t), a = n(t), s = a.length;
        for (;s--; ) {
          var c = a[e ? s : ++i];
          if (!1 === r(o[c], c, o)) break;
        }
        return t;
      };
    }();
    function ne(e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : q && q in Object(e) ? function(e) {
        var t = j.call(e, q), r = e[q];
        try {
          e[q] = void 0;
          var n = !0;
        } catch (o) {}
        var i = E.call(e);
        n && (t ? e[q] = r : delete e[q]);
        return i;
      }(e) : function(e) {
        return E.call(e);
      }(e);
    }
    function ie(e) {
      return ke(e) && ne(e) == o;
    }
    function oe(e) {
      return !(!Se(e) || function(e) {
        return !!P && P in e;
      }(e)) && (we(e) ? A : c).test(function(e) {
        if (null != e) {
          try {
            return O.call(e);
          } catch (t) {}
          try {
            return e + '';
          } catch (t) {}
        }
        return '';
      }(e));
    }
    function ae(e) {
      if (!Se(e)) return function(e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      }(e);
      var t = he(e), r = [];
      for (var n in e) ('constructor' != n || !t && j.call(e, n)) && r.push(n);
      return r;
    }
    function se(e, t, r, n, i) {
      e !== t && re(t, (function(o, a) {
        if (i || (i = new J), Se(o)) !function(e, t, r, n, i, o, a) {
          var c = fe(e, r), u = fe(t, r), l = a.get(u);
          if (l) return void Z(e, r, l);
          var d = o ? o(c, u, r + '', e, t, a) : void 0;
          var h = void 0 === d;
          if (h) {
            var f = ye(u), p = !f && me(u), v = !f && !p && xe(u);
            d = u, f || p || v ? ye(c) ? d = c : !function(e) {
              return ke(e) && be(e);
            }(c) ? p ? (h = !1, d = function(e, t) {
              if (t) return e.slice();
              var r = e.length, n = L ? L(r) : new e.constructor(r);
              return e.copy(n), n;
            }(u, !0)) : v ? (h = !1, d = function(e, t) {
              var r = t ? function(e) {
                var t = new e.constructor(e.byteLength);
                return new I(t).set(new I(e)), t;
              }(e.buffer) : e.buffer;
              return new e.constructor(r, e.byteOffset, e.length);
            }(u, !0)) : d = [] : d = function(e, t) {
              var r = -1, n = e.length;
              t || (t = Array(n));
              for (;++r < n; ) t[r] = e[r];
              return t;
            }(c) : function(e) {
              if (!ke(e) || ne(e) != s) return !1;
              var t = R(e);
              if (null === t) return !0;
              var r = j.call(t, 'constructor') && t.constructor;
              return 'function' == typeof r && r instanceof r && O.call(r) == C;
            }(u) || ge(u) ? (d = c, ge(c) ? d = function(e) {
              return function(e, t, r, n) {
                var i = !r;
                r || (r = {});
                var o = -1, a = t.length;
                for (;++o < a; ) {
                  var s = t[o];
                  var c = n ? n(r[s], e[s], s, r, e) : void 0;
                  void 0 === c && (c = e[s]), i ? te(r, s, c) : Q(r, s, c);
                }
                return r;
              }(e, Oe(e));
            }(c) : Se(c) && !we(c) || (d = function(e) {
              return 'function' != typeof e.constructor || he(e) ? {} : z(R(e));
            }(u))) : h = !1;
          }
          h && (a.set(u, d), i(d, u, n, o, a), a.delete(u));
          Z(e, r, d);
        }(e, t, a, r, se, n, i); else {
          var c = n ? n(fe(e, a), o, a + '', e, t, i) : void 0;
          void 0 === c && (c = o), Z(e, a, c);
        }
      }), Oe);
    }
    function ce(e, t) {
      return pe(function(e, t, r) {
        return t = W(void 0 === t ? e.length - 1 : t, 0), function() {
          var n = arguments, i = -1, o = W(n.length - t, 0), a = Array(o);
          for (;++i < o; ) a[i] = n[t + i];
          i = -1;
          var s = Array(t + 1);
          for (;++i < t; ) s[i] = n[i];
          return s[t] = r(a), w(e, this, s);
        };
      }(e, t, Ee), e + '');
    }
    function ue(e, t) {
      var r = e.__data__;
      return function(e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e;
      }(t) ? r['string' == typeof t ? 'string' : 'hash'] : r.map;
    }
    function le(e, t) {
      var r = function(e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return oe(r) ? r : void 0;
    }
    function de(e, t) {
      var r = typeof e;
      return !!(t = null == t ? i : t) && ('number' == r || 'symbol' != r && u.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function he(e) {
      var t = e && e.constructor;
      return e === ('function' == typeof t && t.prototype || k);
    }
    function fe(e, t) {
      if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
    }
    var pe = function(e) {
      var t = 0, r = 0;
      return function() {
        var n = V(), i = 16 - (n - r);
        if (r = n, i > 0) {
          if (++t >= 800) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }(B ? function(e, t) {
      return B(e, 'toString', {
        configurable: !0,
        enumerable: !1,
        value: Pe(t),
        writable: !0
      });
    } : Ee);
    function ve(e, t) {
      return e === t || e != e && t != t;
    }
    var ge = ie(function() {
      return arguments;
    }()) ? ie : function(e) {
      return ke(e) && j.call(e, 'callee') && !U.call(e, 'callee');
    };
    var ye = Array.isArray;
    function be(e) {
      return null != e && _e(e.length) && !we(e);
    }
    var me = F || function() {
      return !1;
    };
    function we(e) {
      if (!Se(e)) return !1;
      var t = ne(e);
      return t == a || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    }
    function _e(e) {
      return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= i;
    }
    function Se(e) {
      var t = typeof e;
      return null != e && ('object' == t || 'function' == t);
    }
    function ke(e) {
      return null != e && 'object' == typeof e;
    }
    var xe = m ? function(e) {
      return function(t) {
        return e(t);
      };
    }(m) : function(e) {
      return ke(e) && _e(e.length) && !!l[ne(e)];
    };
    function Oe(e) {
      return be(e) ? $(e, !0) : ae(e);
    }
    var je = function(e) {
      return ce((function(t, r) {
        var n = -1, i = r.length, o = i > 1 ? r[i - 1] : void 0, a = i > 2 ? r[2] : void 0;
        for (o = e.length > 3 && 'function' == typeof o ? (i--, o) : void 0, a && function(e, t, r) {
          if (!Se(r)) return !1;
          var n = typeof t;
          if ('number' == n ? be(r) && de(t, r.length) : 'string' == n && t in r) return ve(r[t], e);
          return !1;
        }(r[0], r[1], a) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++n < i; ) {
          var s = r[n];
          s && e(t, s, n, o);
        }
        return t;
      }));
    }((function(e, t, r) {
      se(e, t, r);
    }));
    function Pe(e) {
      return function() {
        return e;
      };
    }
    function Ee(e) {
      return e;
    }
    e.exports = je;
  },
  2043: function(e, t, r) {
    var n = r(25108);
    var i, o;
    !function(a, s) {
      "use strict";
      i = function() {
        var e = function() {};
        var t = "undefined";
        var r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent);
        var i = [ "trace", "debug", "info", "warn", "error" ];
        function o(e, t) {
          var r = e[t];
          if ('function' == typeof r.bind) return r.bind(e);
          try {
            return Function.prototype.bind.call(r, e);
          } catch (n) {
            return function() {
              return Function.prototype.apply.apply(r, [ e, arguments ]);
            };
          }
        }
        function a() {
          n.log && (n.log.apply ? n.log.apply(n, arguments) : Function.prototype.apply.apply(n.log, [ n, arguments ])), n.trace && n.trace();
        }
        function s(i) {
          return 'debug' === i && (i = 'log'), typeof n !== t && ('trace' === i && r ? a : void 0 !== n[i] ? o(n, i) : void 0 !== n.log ? o(n, 'log') : e);
        }
        function c(t, r) {
          for (var n = 0; n < i.length; n++) {
            var o = i[n];
            this[o] = n < t ? e : this.methodFactory(o, t, r);
          }
          this.log = this.debug;
        }
        function u(e, r, i) {
          return function() {
            typeof n !== t && (c.call(this, r, i), this[e].apply(this, arguments));
          };
        }
        function l(e, t, r) {
          return s(e) || u.apply(this, arguments);
        }
        function d(e, r, o) {
          var a = this;
          var s;
          r = null == r ? "WARN" : r;
          var u = "loglevel";
          function d(e) {
            var r = (i[e] || 'silent').toUpperCase();
            if (typeof window !== t && u) {
              try {
                return void (window.localStorage[u] = r);
              } catch (n) {}
              try {
                window.document.cookie = encodeURIComponent(u) + "=" + r + ";";
              } catch (n) {}
            }
          }
          function h() {
            var e;
            if (typeof window !== t && u) {
              try {
                e = window.localStorage[u];
              } catch (i) {}
              if (typeof e === t) try {
                var r = window.document.cookie;
                var n = r.indexOf(encodeURIComponent(u) + "=");
                -1 !== n && (e = /^([^;]+)/.exec(r.slice(n))[1]);
              } catch (i) {}
              return void 0 === a.levels[e] && (e = void 0), e;
            }
          }
          function f() {
            if (typeof window !== t && u) {
              try {
                return void window.localStorage.removeItem(u);
              } catch (e) {}
              try {
                window.document.cookie = encodeURIComponent(u) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
              } catch (e) {}
            }
          }
          "string" == typeof e ? u += ":" + e : "symbol" == typeof e && (u = void 0), a.name = e, a.levels = {
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            SILENT: 5
          }, a.methodFactory = o || l, a.getLevel = function() {
            return s;
          }, a.setLevel = function(r, i) {
            if ("string" == typeof r && void 0 !== a.levels[r.toUpperCase()] && (r = a.levels[r.toUpperCase()]), !("number" == typeof r && r >= 0 && r <= a.levels.SILENT)) throw "log.setLevel() called with invalid level: " + r;
            if (s = r, !1 !== i && d(r), c.call(a, r, e), typeof n === t && r < a.levels.SILENT) return "No console available for logging";
          }, a.setDefaultLevel = function(e) {
            r = e, h() || a.setLevel(e, !1);
          }, a.resetLevel = function() {
            a.setLevel(r, !1), f();
          }, a.enableAll = function(e) {
            a.setLevel(a.levels.TRACE, e);
          }, a.disableAll = function(e) {
            a.setLevel(a.levels.SILENT, e);
          };
          var p = h();
          null == p && (p = r), a.setLevel(p, !1);
        }
        var h = new d;
        var f = {};
        h.getLogger = function(e) {
          if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
          var t = f[e];
          return t || (t = f[e] = new d(e, h.getLevel(), h.methodFactory)), t;
        };
        var p = typeof window !== t ? window.log : void 0;
        return h.noConflict = function() {
          return typeof window !== t && window.log === h && (window.log = p), h;
        }, h.getLoggers = function() {
          return f;
        }, h.default = h, h;
      }, void 0 === (o = 'function' == typeof i ? i.call(t, r, t, e) : i) || (e.exports = o);
    }();
  },
  30778: (e, t, r) => {
    var n = r(52479);
    function i(e) {
      var t = function() {
        return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
      };
      return t.called = !1, t;
    }
    function o(e) {
      var t = function() {
        if (t.called) throw new Error(t.onceError);
        return t.called = !0, t.value = e.apply(this, arguments);
      };
      var r = e.name || 'Function wrapped with `once`';
      return t.onceError = r + " shouldn't be called more than once", t.called = !1, t;
    }
    e.exports = n(i), e.exports.strict = n(o), i.proto = i((function() {
      Object.defineProperty(Function.prototype, 'once', {
        value: function() {
          return i(this);
        },
        configurable: !0
      }), Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function() {
          return o(this);
        },
        configurable: !0
      });
    }));
  },
  88212: (e, t, r) => {
    "use strict";
    var n = r(34155);
    void 0 === n || !n.version || 0 === n.version.indexOf('v0.') || 0 === n.version.indexOf('v1.') && 0 !== n.version.indexOf('v1.8.') ? e.exports = {
      nextTick: function(e, t, r, i) {
        if ('function' != typeof e) throw new TypeError('"callback" argument must be a function');
        var o = arguments.length;
        var a, s;
        switch (o) {
         case 0:
         case 1:
          return n.nextTick(e);

         case 2:
          return n.nextTick((function() {
            e.call(null, t);
          }));

         case 3:
          return n.nextTick((function() {
            e.call(null, t, r);
          }));

         case 4:
          return n.nextTick((function() {
            e.call(null, t, r, i);
          }));

         default:
          for (a = new Array(o - 1), s = 0; s < a.length; ) a[s++] = arguments[s];
          return n.nextTick((function() {
            e.apply(null, a);
          }));
        }
      }
    } : e.exports = n;
  },
  74286: (e, t, r) => {
    var n = r(34155);
    var i = r(30778);
    var o = r(12840);
    var a = r(71156);
    var s = function() {};
    var c = /^v?\.0/.test(n.version);
    var u = function(e) {
      return 'function' == typeof e;
    };
    var l = function(e, t, r, n) {
      n = i(n);
      var l = !1;
      e.on('close', (function() {
        l = !0;
      })), o(e, {
        readable: t,
        writable: r
      }, (function(e) {
        if (e) return n(e);
        l = !0, n();
      }));
      var d = !1;
      return function(t) {
        if (!l && !d) return d = !0, function(e) {
          return !!c && !!a && (e instanceof (a.ReadStream || s) || e instanceof (a.WriteStream || s)) && u(e.close);
        }(e) ? e.close(s) : function(e) {
          return e.setHeader && u(e.abort);
        }(e) ? e.abort() : u(e.destroy) ? e.destroy() : void n(t || new Error('stream was destroyed'));
      };
    };
    var d = function(e) {
      e();
    };
    var h = function(e, t) {
      return e.pipe(t);
    };
    e.exports = function() {
      var e = Array.prototype.slice.call(arguments);
      var t = u(e[e.length - 1] || s) && e.pop() || s;
      if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new Error('pump requires two streams per minimum');
      var r;
      var n = e.map((function(i, o) {
        var a = o < e.length - 1;
        return l(i, a, o > 0, (function(e) {
          r || (r = e), e && n.forEach(d), a || (n.forEach(d), t(r));
        }));
      }));
      return e.reduce(h);
    };
  },
  35666: e => {
    var t = function(e) {
      "use strict";
      var t = Object.prototype;
      var r = t.hasOwnProperty;
      var n;
      var i = "function" == typeof Symbol ? Symbol : {};
      var o = i.iterator || "@@iterator";
      var a = i.asyncIterator || "@@asyncIterator";
      var s = i.toStringTag || "@@toStringTag";
      function c(e, t, r) {
        return Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), e[t];
      }
      try {
        c({}, "");
      } catch (T) {
        c = function(e, t, r) {
          return e[t] = r;
        };
      }
      function u(e, t, r, n) {
        var i = t && t.prototype instanceof g ? t : g;
        var o = Object.create(i.prototype);
        var a = new E(n || []);
        return o._invoke = function(e, t, r) {
          var n = d;
          return function(i, o) {
            if (n === f) throw new Error("Generator is already running");
            if (n === p) {
              if ("throw" === i) throw o;
              return A();
            }
            for (r.method = i, r.arg = o; ;) {
              var a = r.delegate;
              if (a) {
                var s = O(a, r);
                if (s) {
                  if (s === v) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                if (n === d) throw n = p, r.arg;
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = f;
              var c = l(e, t, r);
              if ("normal" === c.type) {
                if (n = r.done ? p : h, c.arg === v) continue;
                return {
                  value: c.arg,
                  done: r.done
                };
              }
              "throw" === c.type && (n = p, r.method = "throw", r.arg = c.arg);
            }
          };
        }(e, r, a), o;
      }
      function l(e, t, r) {
        try {
          return {
            type: "normal",
            arg: e.call(t, r)
          };
        } catch (T) {
          return {
            type: "throw",
            arg: T
          };
        }
      }
      e.wrap = u;
      var d = "suspendedStart";
      var h = "suspendedYield";
      var f = "executing";
      var p = "completed";
      var v = {};
      function g() {}
      function y() {}
      function b() {}
      var m = {};
      c(m, o, (function() {
        return this;
      }));
      var w = Object.getPrototypeOf;
      var _ = w && w(w(C([])));
      _ && _ !== t && r.call(_, o) && (m = _);
      var S = b.prototype = g.prototype = Object.create(m);
      function k(e) {
        [ "next", "throw", "return" ].forEach((function(t) {
          c(e, t, (function(e) {
            return this._invoke(t, e);
          }));
        }));
      }
      function x(e, t) {
        function n(i, o, a, s) {
          var c = l(e[i], e, o);
          if ("throw" !== c.type) {
            var u = c.arg;
            var d = u.value;
            return d && "object" == typeof d && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
              n("next", e, a, s);
            }), (function(e) {
              n("throw", e, a, s);
            })) : t.resolve(d).then((function(e) {
              u.value = e, a(u);
            }), (function(e) {
              return n("throw", e, a, s);
            }));
          }
          s(c.arg);
        }
        var i;
        this._invoke = function(e, r) {
          function o() {
            return new t((function(t, i) {
              n(e, r, t, i);
            }));
          }
          return i = i ? i.then(o, o) : o();
        };
      }
      function O(e, t) {
        var r = e.iterator[t.method];
        if (r === n) {
          if (t.delegate = null, "throw" === t.method) {
            if (e.iterator.return && (t.method = "return", t.arg = n, O(e, t), "throw" === t.method)) return v;
            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return v;
        }
        var i = l(r, e.iterator, t.arg);
        if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, v;
        var o = i.arg;
        return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), 
        t.delegate = null, v) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, 
        v);
      }
      function j(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }
      function P(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }
      function E(e) {
        this.tryEntries = [ {
          tryLoc: "root"
        } ], e.forEach(j, this), this.reset(!0);
      }
      function C(e) {
        if (e) {
          var t = e[o];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1, a = function t() {
              for (;++i < e.length; ) if (r.call(e, i)) return t.value = e[i], t.done = !1, t;
              return t.value = n, t.done = !0, t;
            };
            return a.next = a;
          }
        }
        return {
          next: A
        };
      }
      function A() {
        return {
          value: n,
          done: !0
        };
      }
      return y.prototype = b, c(S, "constructor", b), c(b, "constructor", y), y.displayName = c(b, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name));
      }, e.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, c(e, s, "GeneratorFunction")), e.prototype = Object.create(S), 
        e;
      }, e.awrap = function(e) {
        return {
          __await: e
        };
      }, k(x.prototype), c(x.prototype, a, (function() {
        return this;
      })), e.AsyncIterator = x, e.async = function(t, r, n, i, o) {
        void 0 === o && (o = Promise);
        var a = new x(u(t, r, n, i), o);
        return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
          return e.done ? e.value : a.next();
        }));
      }, k(S), c(S, s, "Generator"), c(S, o, (function() {
        return this;
      })), c(S, "toString", (function() {
        return "[object Generator]";
      })), e.keys = function(e) {
        var t = [];
        for (var r in e) t.push(r);
        return t.reverse(), function r() {
          for (;t.length; ) {
            var n = t.pop();
            if (n in e) return r.value = n, r.done = !1, r;
          }
          return r.done = !0, r;
        };
      }, e.values = C, E.prototype = {
        constructor: E,
        reset: function(e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", 
          this.arg = n, this.tryEntries.forEach(P), !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
        },
        stop: function() {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function(e) {
          if (this.done) throw e;
          var t = this;
          function i(r, i) {
            return s.type = "throw", s.arg = e, t.next = r, i && (t.method = "next", t.arg = n), !!i;
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o];
            var s = a.completion;
            if ("root" === a.tryLoc) return i("end");
            if (a.tryLoc <= this.prev) {
              var c = r.call(a, "catchLoc");
              var u = r.call(a, "finallyLoc");
              if (c && u) {
                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
              } else {
                if (!u) throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function(e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];
            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
              var o = i;
              break;
            }
          }
          o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
          var a = o ? o.completion : {};
          return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a);
        },
        complete: function(e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
          this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v;
        },
        finish: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), P(r), v;
          }
        },
        catch: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.tryLoc === e) {
              var n = r.completion;
              if ("throw" === n.type) {
                var i = n.arg;
                P(r);
              }
              return i;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(e, t, r) {
          return this.delegate = {
            iterator: C(e),
            resultName: t,
            nextLoc: r
          }, "next" === this.method && (this.arg = n), v;
        }
      }, e;
    }(e.exports);
    try {
      regeneratorRuntime = t;
    } catch (r) {
      "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t);
    }
  },
  35940: e => {
    var t = {}.toString;
    e.exports = Array.isArray || function(e) {
      return '[object Array]' == t.call(e);
    };
  },
  45867: (e, t, r) => {
    "use strict";
    var n = r(88212);
    var i = Object.keys || function(e) {
      var t = [];
      for (var r in e) t.push(r);
      return t;
    };
    e.exports = d;
    var o = Object.create(r(16497));
    o.inherits = r(35717);
    var a = r(44278);
    var s = r(10759);
    o.inherits(d, a);
    var c = i(s.prototype);
    for (var u = 0; u < c.length; u++) {
      var l = c[u];
      d.prototype[l] || (d.prototype[l] = s.prototype[l]);
    }
    function d(e) {
      if (!(this instanceof d)) return new d(e);
      a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), 
      this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once('end', h);
    }
    function h() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(f, this);
    }
    function f(e) {
      e.end();
    }
    Object.defineProperty(d.prototype, 'writableHighWaterMark', {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }), Object.defineProperty(d.prototype, 'destroyed', {
      get: function() {
        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
      },
      set: function(e) {
        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
      }
    }), d.prototype._destroy = function(e, t) {
      this.push(null), this.end(), n.nextTick(t, e);
    };
  },
  3431: (e, t, r) => {
    "use strict";
    e.exports = o;
    var n = r(60062);
    var i = Object.create(r(16497));
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      n.call(this, e);
    }
    i.inherits = r(35717), i.inherits(o, n), o.prototype._transform = function(e, t, r) {
      r(null, e);
    };
  },
  44278: (e, t, r) => {
    "use strict";
    var n = r(34155);
    var i = r(88212);
    e.exports = m;
    var o = r(35940);
    var a;
    m.ReadableState = b;
    r(17187).EventEmitter;
    var s = function(e, t) {
      return e.listeners(t).length;
    };
    var c = r(84104);
    var u = r(89509).Buffer;
    var l = r.g.Uint8Array || function() {};
    var d = Object.create(r(16497));
    d.inherits = r(35717);
    var h = r(66882);
    var f = void 0;
    f = h && h.debuglog ? h.debuglog('stream') : function() {};
    var p = r(93912);
    var v = r(55513);
    var g;
    d.inherits(m, c);
    var y = [ 'error', 'close', 'destroy', 'pause', 'resume' ];
    function b(e, t) {
      e = e || {};
      var n = t instanceof (a = a || r(45867));
      this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
      var i = e.highWaterMark;
      var o = e.readableHighWaterMark;
      var s = this.objectMode ? 16 : 16384;
      this.highWaterMark = i || 0 === i ? i : n && (o || 0 === o) ? o : s, this.highWaterMark = Math.floor(this.highWaterMark), 
      this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, 
      this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, 
      this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || 'utf8', this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, 
      this.encoding = null, e.encoding && (g || (g = r(47989).s), this.decoder = new g(e.encoding), this.encoding = e.encoding);
    }
    function m(e) {
      if (a = a || r(45867), !(this instanceof m)) return new m(e);
      this._readableState = new b(e, this), this.readable = !0, e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), 
      c.call(this);
    }
    function w(e, t, r, n, i) {
      var o = e._readableState;
      var a;
      null === t ? (o.reading = !1, function(e, t) {
        if (t.ended) return;
        if (t.decoder) {
          var r = t.decoder.end();
          r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
        }
        t.ended = !0, x(e);
      }(e, o)) : (i || (a = function(e, t) {
        var r;
        (function(e) {
          return u.isBuffer(e) || e instanceof l;
        })(t) || 'string' == typeof t || void 0 === t || e.objectMode || (r = new TypeError('Invalid non-string/buffer chunk'));
        return r;
      }(o, t)), a ? e.emit('error', a) : o.objectMode || t && t.length > 0 ? ('string' == typeof t || o.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function(e) {
        return u.from(e);
      }(t)), n ? o.endEmitted ? e.emit('error', new Error('stream.unshift() after end event')) : _(e, o, t, !0) : o.ended ? e.emit('error', new Error('stream.push() after EOF')) : (o.reading = !1, 
      o.decoder && !r ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? _(e, o, t, !1) : j(e, o)) : _(e, o, t, !1))) : n || (o.reading = !1));
      return function(e) {
        return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
      }(o);
    }
    function _(e, t, r, n) {
      t.flowing && 0 === t.length && !t.sync ? (e.emit('data', r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), 
      t.needReadable && x(e)), j(e, t);
    }
    Object.defineProperty(m.prototype, 'destroyed', {
      get: function() {
        return void 0 !== this._readableState && this._readableState.destroyed;
      },
      set: function(e) {
        this._readableState && (this._readableState.destroyed = e);
      }
    }), m.prototype.destroy = v.destroy, m.prototype._undestroy = v.undestroy, m.prototype._destroy = function(e, t) {
      this.push(null), t(e);
    }, m.prototype.push = function(e, t) {
      var r = this._readableState;
      var n;
      return r.objectMode ? n = !0 : 'string' == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = u.from(e, t), 
      t = ''), n = !0), w(this, e, t, !1, n);
    }, m.prototype.unshift = function(e) {
      return w(this, e, null, !0, !1);
    }, m.prototype.isPaused = function() {
      return !1 === this._readableState.flowing;
    }, m.prototype.setEncoding = function(e) {
      return g || (g = r(47989).s), this._readableState.decoder = new g(e), this._readableState.encoding = e, this;
    };
    var S = 8388608;
    function k(e, t) {
      return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
        return e >= S ? e = S : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
      }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
    }
    function x(e) {
      var t = e._readableState;
      t.needReadable = !1, t.emittedReadable || (f('emitReadable', t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(O, e) : O(e));
    }
    function O(e) {
      f('emit readable'), e.emit('readable'), A(e);
    }
    function j(e, t) {
      t.readingMore || (t.readingMore = !0, i.nextTick(P, e, t));
    }
    function P(e, t) {
      var r = t.length;
      for (;!t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (f('maybeReadMore read 0'), e.read(0), r !== t.length); ) r = t.length;
      t.readingMore = !1;
    }
    function E(e) {
      f('readable nexttick read 0'), e.read(0);
    }
    function C(e, t) {
      t.reading || (f('resume read 0'), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit('resume'), A(e), t.flowing && !t.reading && e.read(0);
    }
    function A(e) {
      var t = e._readableState;
      for (f('flow', t.flowing); t.flowing && null !== e.read(); ) ;
    }
    function T(e, t) {
      return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join('') : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), 
      t.buffer.clear()) : r = function(e, t, r) {
        var n;
        e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function(e, t) {
          var r = t.head;
          var n = 1;
          var i = r.data;
          e -= i.length;
          for (;r = r.next; ) {
            var o = r.data;
            var a = e > o.length ? o.length : e;
            if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
              a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
              break;
            }
            ++n;
          }
          return t.length -= n, i;
        }(e, t) : function(e, t) {
          var r = u.allocUnsafe(e);
          var n = t.head;
          var i = 1;
          n.data.copy(r), e -= n.data.length;
          for (;n = n.next; ) {
            var o = n.data;
            var a = e > o.length ? o.length : e;
            if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) {
              a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
              break;
            }
            ++i;
          }
          return t.length -= i, r;
        }(e, t);
        return n;
      }(e, t.buffer, t.decoder), r);
      var r;
    }
    function M(e) {
      var t = e._readableState;
      if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      t.endEmitted || (t.ended = !0, i.nextTick(I, t, e));
    }
    function I(e, t) {
      e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit('end'));
    }
    function L(e, t) {
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
      return -1;
    }
    m.prototype.read = function(e) {
      f('read', e), e = parseInt(e, 10);
      var t = this._readableState;
      var r = e;
      if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return f('read: emitReadable', t.length, t.ended), 
      0 === t.length && t.ended ? M(this) : x(this), null;
      if (0 === (e = k(e, t)) && t.ended) return 0 === t.length && M(this), null;
      var n = t.needReadable;
      var i;
      return f('need readable', n), (0 === t.length || t.length - e < t.highWaterMark) && f('length less than watermark', n = !0), 
      t.ended || t.reading ? f('reading or ended', n = !1) : n && (f('do read'), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), 
      this._read(t.highWaterMark), t.sync = !1, t.reading || (e = k(r, t))), null === (i = e > 0 ? T(e, t) : null) ? (t.needReadable = !0, 
      e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && M(this)), null !== i && this.emit('data', i), 
      i;
    }, m.prototype._read = function(e) {
      this.emit('error', new Error('_read() is not implemented'));
    }, m.prototype.pipe = function(e, t) {
      var r = this;
      var a = this._readableState;
      switch (a.pipesCount) {
       case 0:
        a.pipes = e;
        break;

       case 1:
        a.pipes = [ a.pipes, e ];
        break;

       default:
        a.pipes.push(e);
      }
      a.pipesCount += 1, f('pipe count=%d opts=%j', a.pipesCount, t);
      var c = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? l : m;
      function u(t, n) {
        f('onunpipe'), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, function() {
          f('cleanup'), e.removeListener('close', y), e.removeListener('finish', b), e.removeListener('drain', d), e.removeListener('error', g), 
          e.removeListener('unpipe', u), r.removeListener('end', l), r.removeListener('end', m), r.removeListener('data', v), h = !0, 
          !a.awaitDrain || e._writableState && !e._writableState.needDrain || d();
        }());
      }
      function l() {
        f('onend'), e.end();
      }
      a.endEmitted ? i.nextTick(c) : r.once('end', c), e.on('unpipe', u);
      var d = function(e) {
        return function() {
          var t = e._readableState;
          f('pipeOnDrain', t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, 'data') && (t.flowing = !0, A(e));
        };
      }(r);
      e.on('drain', d);
      var h = !1;
      var p = !1;
      function v(t) {
        f('ondata'), p = !1, !1 !== e.write(t) || p || ((1 === a.pipesCount && a.pipes === e || a.pipesCount > 1 && -1 !== L(a.pipes, e)) && !h && (f('false write response, pause', r._readableState.awaitDrain), 
        r._readableState.awaitDrain++, p = !0), r.pause());
      }
      function g(t) {
        f('onerror', t), m(), e.removeListener('error', g), 0 === s(e, 'error') && e.emit('error', t);
      }
      function y() {
        e.removeListener('finish', b), m();
      }
      function b() {
        f('onfinish'), e.removeListener('close', y), m();
      }
      function m() {
        f('unpipe'), r.unpipe(e);
      }
      return r.on('data', v), function(e, t, r) {
        if ('function' == typeof e.prependListener) return e.prependListener(t, r);
        e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [ r, e._events[t] ] : e.on(t, r);
      }(e, 'error', g), e.once('close', y), e.once('finish', b), e.emit('pipe', r), a.flowing || (f('pipe resume'), r.resume()), 
      e;
    }, m.prototype.unpipe = function(e) {
      var t = this._readableState;
      var r = {
        hasUnpiped: !1
      };
      if (0 === t.pipesCount) return this;
      if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, 
      e && e.emit('unpipe', this, r)), this;
      if (!e) {
        var n = t.pipes;
        var i = t.pipesCount;
        t.pipes = null, t.pipesCount = 0, t.flowing = !1;
        for (var o = 0; o < i; o++) n[o].emit('unpipe', this, r);
        return this;
      }
      var a = L(t.pipes, e);
      return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this, r)), 
      this;
    }, m.prototype.on = function(e, t) {
      var r = c.prototype.on.call(this, e, t);
      if ('data' === e) !1 !== this._readableState.flowing && this.resume(); else if ('readable' === e) {
        var n = this._readableState;
        n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && x(this) : i.nextTick(E, this));
      }
      return r;
    }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function() {
      var e = this._readableState;
      return e.flowing || (f('resume'), e.flowing = !0, function(e, t) {
        t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(C, e, t));
      }(this, e)), this;
    }, m.prototype.pause = function() {
      return f('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (f('pause'), this._readableState.flowing = !1, 
      this.emit('pause')), this;
    }, m.prototype.wrap = function(e) {
      var t = this;
      var r = this._readableState;
      var n = !1;
      for (var i in e.on('end', (function() {
        if (f('wrapped end'), r.decoder && !r.ended) {
          var e = r.decoder.end();
          e && e.length && t.push(e);
        }
        t.push(null);
      })), e.on('data', (function(i) {
        (f('wrapped data'), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, 
        e.pause()));
      })), e) void 0 === this[i] && 'function' == typeof e[i] && (this[i] = function(t) {
        return function() {
          return e[t].apply(e, arguments);
        };
      }(i));
      for (var o = 0; o < y.length; o++) e.on(y[o], this.emit.bind(this, y[o]));
      return this._read = function(t) {
        f('wrapped _read', t), n && (n = !1, e.resume());
      }, this;
    }, Object.defineProperty(m.prototype, 'readableHighWaterMark', {
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    }), m._fromList = T;
  },
  60062: (e, t, r) => {
    "use strict";
    e.exports = a;
    var n = r(45867);
    var i = Object.create(r(16497));
    function o(e, t) {
      var r = this._transformState;
      r.transforming = !1;
      var n = r.writecb;
      if (!n) return this.emit('error', new Error('write callback called multiple times'));
      r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
      var i = this._readableState;
      i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
    function a(e) {
      if (!(this instanceof a)) return new a(e);
      n.call(this, e), this._transformState = {
        afterTransform: o.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ('function' == typeof e.transform && (this._transform = e.transform), 
      'function' == typeof e.flush && (this._flush = e.flush)), this.on('prefinish', s);
    }
    function s() {
      var e = this;
      'function' == typeof this._flush ? this._flush((function(t, r) {
        c(e, t, r);
      })) : c(this, null, null);
    }
    function c(e, t, r) {
      if (t) return e.emit('error', t);
      if (null != r && e.push(r), e._writableState.length) throw new Error('Calling transform done when ws.length != 0');
      if (e._transformState.transforming) throw new Error('Calling transform done when still transforming');
      return e.push(null);
    }
    i.inherits = r(35717), i.inherits(a, n), a.prototype.push = function(e, t) {
      return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t);
    }, a.prototype._transform = function(e, t, r) {
      throw new Error('_transform() is not implemented');
    }, a.prototype._write = function(e, t, r) {
      var n = this._transformState;
      if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, a.prototype._read = function(e) {
      var t = this._transformState;
      null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
    }, a.prototype._destroy = function(e, t) {
      var r = this;
      n.prototype._destroy.call(this, e, (function(e) {
        t(e), r.emit('close');
      }));
    };
  },
  10759: (e, t, r) => {
    "use strict";
    var n = r(34155);
    var i = r(88212);
    function o(e) {
      var t = this;
      this.next = null, this.entry = null, this.finish = function() {
        !function(e, t, r) {
          var n = e.entry;
          e.entry = null;
          for (;n; ) {
            var i = n.callback;
            t.pendingcb--, i(r), n = n.next;
          }
          t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e;
        }(t, e);
      };
    }
    e.exports = y;
    var a = !n.browser && [ 'v0.10', 'v0.9.' ].indexOf(n.version.slice(0, 5)) > -1 ? setImmediate : i.nextTick;
    var s;
    y.WritableState = v;
    var c = Object.create(r(16497));
    c.inherits = r(35717);
    var u = {
      deprecate: r(94927)
    };
    var l = r(84104);
    var d = r(89509).Buffer;
    var h = r.g.Uint8Array || function() {};
    var f = r(55513);
    function p() {}
    function v(e, t) {
      s = s || r(45867), e = e || {};
      var n = t instanceof s;
      this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
      var c = e.highWaterMark;
      var u = e.writableHighWaterMark;
      var l = this.objectMode ? 16 : 16384;
      this.highWaterMark = c || 0 === c ? c : n && (u || 0 === u) ? u : l, this.highWaterMark = Math.floor(this.highWaterMark), 
      this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
      var d = !1 === e.decodeStrings;
      this.decodeStrings = !d, this.defaultEncoding = e.defaultEncoding || 'utf8', this.length = 0, this.writing = !1, this.corked = 0, 
      this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
        !function(e, t) {
          var r = e._writableState;
          var n = r.sync;
          var o = r.writecb;
          if (function(e) {
            e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
          }(r), t) !function(e, t, r, n, o) {
            --t.pendingcb, r ? (i.nextTick(o, n), i.nextTick(k, e, t), e._writableState.errorEmitted = !0, e.emit('error', n)) : (o(n), 
            e._writableState.errorEmitted = !0, e.emit('error', n), k(e, t));
          }(e, r, n, t, o); else {
            var s = _(r);
            s || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r), n ? a(m, e, r, s, o) : m(e, r, s, o);
          }
        }(t, e);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, 
      this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this);
    }
    var g;
    function y(e) {
      if (s = s || r(45867), !(g.call(y, this) || this instanceof s)) return new y(e);
      this._writableState = new v(e, this), this.writable = !0, e && ('function' == typeof e.write && (this._write = e.write), 
      'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 
      'function' == typeof e.final && (this._final = e.final)), l.call(this);
    }
    function b(e, t, r, n, i, o, a) {
      t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1;
    }
    function m(e, t, r, n) {
      r || function(e, t) {
        0 === t.length && t.needDrain && (t.needDrain = !1, e.emit('drain'));
      }(e, t), t.pendingcb--, n(), k(e, t);
    }
    function w(e, t) {
      t.bufferProcessing = !0;
      var r = t.bufferedRequest;
      if (e._writev && r && r.next) {
        var n = t.bufferedRequestCount;
        var i = new Array(n);
        var a = t.corkedRequestsFree;
        a.entry = r;
        var s = 0;
        var c = !0;
        for (;r; ) i[s] = r, r.isBuf || (c = !1), r = r.next, s += 1;
        i.allBuffers = c, b(e, t, !0, t.length, i, '', a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, 
        a.next = null) : t.corkedRequestsFree = new o(t), t.bufferedRequestCount = 0;
      } else {
        for (;r; ) {
          var u = r.chunk;
          var l = r.encoding;
          var d = r.callback;
          if (b(e, t, !1, t.objectMode ? 1 : u.length, u, l, d), r = r.next, t.bufferedRequestCount--, t.writing) break;
        }
        null === r && (t.lastBufferedRequest = null);
      }
      t.bufferedRequest = r, t.bufferProcessing = !1;
    }
    function _(e) {
      return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
    }
    function S(e, t) {
      e._final((function(r) {
        t.pendingcb--, r && e.emit('error', r), t.prefinished = !0, e.emit('prefinish'), k(e, t);
      }));
    }
    function k(e, t) {
      var r = _(t);
      return r && (!function(e, t) {
        t.prefinished || t.finalCalled || ('function' == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, i.nextTick(S, e, t)) : (t.prefinished = !0, 
        e.emit('prefinish')));
      }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit('finish'))), r;
    }
    c.inherits(y, l), v.prototype.getBuffer = function() {
      var e = this.bufferedRequest;
      var t = [];
      for (;e; ) t.push(e), e = e.next;
      return t;
    }, function() {
      try {
        Object.defineProperty(v.prototype, 'buffer', {
          get: u.deprecate((function() {
            return this.getBuffer();
          }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
        });
      } catch (e) {}
    }(), 'function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance] ? (g = Function.prototype[Symbol.hasInstance], 
    Object.defineProperty(y, Symbol.hasInstance, {
      value: function(e) {
        return !!g.call(this, e) || this === y && (e && e._writableState instanceof v);
      }
    })) : g = function(e) {
      return e instanceof this;
    }, y.prototype.pipe = function() {
      this.emit('error', new Error('Cannot pipe, not readable'));
    }, y.prototype.write = function(e, t, r) {
      var n = this._writableState;
      var o = !1;
      var a = !n.objectMode && function(e) {
        return d.isBuffer(e) || e instanceof h;
      }(e);
      return a && !d.isBuffer(e) && (e = function(e) {
        return d.from(e);
      }(e)), 'function' == typeof t && (r = t, t = null), a ? t = 'buffer' : t || (t = n.defaultEncoding), 'function' != typeof r && (r = p), 
      n.ended ? function(e, t) {
        var r = new Error('write after end');
        e.emit('error', r), i.nextTick(t, r);
      }(this, r) : (a || function(e, t, r, n) {
        var o = !0;
        var a = !1;
        return null === r ? a = new TypeError('May not write null values to stream') : 'string' == typeof r || void 0 === r || t.objectMode || (a = new TypeError('Invalid non-string/buffer chunk')), 
        a && (e.emit('error', a), i.nextTick(n, a), o = !1), o;
      }(this, n, e, r)) && (n.pendingcb++, o = function(e, t, r, n, i, o) {
        if (!r) {
          var a = function(e, t, r) {
            e.objectMode || !1 === e.decodeStrings || 'string' != typeof t || (t = d.from(t, r));
            return t;
          }(t, n, i);
          n !== a && (r = !0, i = 'buffer', n = a);
        }
        var s = t.objectMode ? 1 : n.length;
        t.length += s;
        var c = t.length < t.highWaterMark;
        c || (t.needDrain = !0);
        if (t.writing || t.corked) {
          var u = t.lastBufferedRequest;
          t.lastBufferedRequest = {
            chunk: n,
            encoding: i,
            isBuf: r,
            callback: o,
            next: null
          }, u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
        } else b(e, t, !1, s, n, i, o);
        return c;
      }(this, n, a, e, t, r)), o;
    }, y.prototype.cork = function() {
      this._writableState.corked++;
    }, y.prototype.uncork = function() {
      var e = this._writableState;
      e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e));
    }, y.prototype.setDefaultEncoding = function(e) {
      if ('string' == typeof e && (e = e.toLowerCase()), !([ 'hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw' ].indexOf((e + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + e);
      return this._writableState.defaultEncoding = e, this;
    }, Object.defineProperty(y.prototype, 'writableHighWaterMark', {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }), y.prototype._write = function(e, t, r) {
      r(new Error('_write() is not implemented'));
    }, y.prototype._writev = null, y.prototype.end = function(e, t, r) {
      var n = this._writableState;
      'function' == typeof e ? (r = e, e = null, t = null) : 'function' == typeof t && (r = t, t = null), null != e && this.write(e, t), 
      n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function(e, t, r) {
        t.ending = !0, k(e, t), r && (t.finished ? i.nextTick(r) : e.once('finish', r));
        t.ended = !0, e.writable = !1;
      }(this, n, r);
    }, Object.defineProperty(y.prototype, 'destroyed', {
      get: function() {
        return void 0 !== this._writableState && this._writableState.destroyed;
      },
      set: function(e) {
        this._writableState && (this._writableState.destroyed = e);
      }
    }), y.prototype.destroy = f.destroy, y.prototype._undestroy = f.undestroy, y.prototype._destroy = function(e, t) {
      this.end(), t(e);
    };
  },
  93912: (e, t, r) => {
    "use strict";
    var n = r(89509).Buffer;
    var i = r(50522);
    function o(e, t, r) {
      e.copy(t, r);
    }
    e.exports = function() {
      function e() {
        !function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.head = null, this.tail = null, this.length = 0;
      }
      return e.prototype.push = function(e) {
        var t = {
          data: e,
          next: null
        };
        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
      }, e.prototype.unshift = function(e) {
        var t = {
          data: e,
          next: this.head
        };
        0 === this.length && (this.tail = t), this.head = t, ++this.length;
      }, e.prototype.shift = function() {
        if (0 !== this.length) {
          var e = this.head.data;
          return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
        }
      }, e.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0;
      }, e.prototype.join = function(e) {
        if (0 === this.length) return '';
        var t = this.head;
        var r = '' + t.data;
        for (;t = t.next; ) r += e + t.data;
        return r;
      }, e.prototype.concat = function(e) {
        if (0 === this.length) return n.alloc(0);
        if (1 === this.length) return this.head.data;
        var t = n.allocUnsafe(e >>> 0);
        var r = this.head;
        var i = 0;
        for (;r; ) o(r.data, t, i), i += r.data.length, r = r.next;
        return t;
      }, e;
    }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() {
      var e = i.inspect({
        length: this.length
      });
      return this.constructor.name + ' ' + e;
    });
  },
  55513: (e, t, r) => {
    "use strict";
    var n = r(88212);
    function i(e, t) {
      e.emit('error', t);
    }
    e.exports = {
      destroy: function(e, t) {
        var r = this;
        var o = this._readableState && this._readableState.destroyed;
        var a = this._writableState && this._writableState.destroyed;
        return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), 
        this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
          !t && e ? (n.nextTick(i, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e);
        })), this);
      },
      undestroy: function() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, 
        this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, 
        this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
      }
    };
  },
  84104: (e, t, r) => {
    e.exports = r(17187).EventEmitter;
  },
  96801: (e, t, r) => {
    (t = e.exports = r(44278)).Stream = t, t.Readable = t, t.Writable = r(10759), t.Duplex = r(45867), t.Transform = r(60062), 
    t.PassThrough = r(3431);
  },
  47989: (e, t, r) => {
    "use strict";
    var n = r(89509).Buffer;
    var i = n.isEncoding || function(e) {
      switch ((e = '' + e) && e.toLowerCase()) {
       case 'hex':
       case 'utf8':
       case 'utf-8':
       case 'ascii':
       case 'binary':
       case 'base64':
       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
       case 'raw':
        return !0;

       default:
        return !1;
      }
    };
    function o(e) {
      var t;
      switch (this.encoding = function(e) {
        var t = function(e) {
          if (!e) return 'utf8';
          var t;
          for (;;) switch (e) {
           case 'utf8':
           case 'utf-8':
            return 'utf8';

           case 'ucs2':
           case 'ucs-2':
           case 'utf16le':
           case 'utf-16le':
            return 'utf16le';

           case 'latin1':
           case 'binary':
            return 'latin1';

           case 'base64':
           case 'ascii':
           case 'hex':
            return e;

           default:
            if (t) return;
            e = ('' + e).toLowerCase(), t = !0;
          }
        }(e);
        if ('string' != typeof t && (n.isEncoding === i || !i(e))) throw new Error('Unknown encoding: ' + e);
        return t || e;
      }(e), this.encoding) {
       case 'utf16le':
        this.text = c, this.end = u, t = 4;
        break;

       case 'utf8':
        this.fillLast = s, t = 4;
        break;

       case 'base64':
        this.text = l, this.end = d, t = 3;
        break;

       default:
        return this.write = h, void (this.end = f);
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t);
    }
    function a(e) {
      return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
    }
    function s(e) {
      var t = this.lastTotal - this.lastNeed;
      var r = function(e, t, r) {
        if (128 != (192 & t[0])) return e.lastNeed = 0, '�';
        if (e.lastNeed > 1 && t.length > 1) {
          if (128 != (192 & t[1])) return e.lastNeed = 1, '�';
          if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, '�';
        }
      }(this, e);
      return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), 
      void (this.lastNeed -= e.length));
    }
    function c(e, t) {
      if ((e.length - t) % 2 == 0) {
        var r = e.toString('utf16le', t);
        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], 
          r.slice(0, -1);
        }
        return r;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString('utf16le', t, e.length - 1);
    }
    function u(e) {
      var t = e && e.length ? this.write(e) : '';
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString('utf16le', 0, r);
      }
      return t;
    }
    function l(e, t) {
      var r = (e.length - t) % 3;
      return 0 === r ? e.toString('base64', t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], 
      this.lastChar[1] = e[e.length - 1]), e.toString('base64', t, e.length - r));
    }
    function d(e) {
      var t = e && e.length ? this.write(e) : '';
      return this.lastNeed ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed) : t;
    }
    function h(e) {
      return e.toString(this.encoding);
    }
    function f(e) {
      return e && e.length ? this.write(e) : '';
    }
    t.s = o, o.prototype.write = function(e) {
      if (0 === e.length) return '';
      var t;
      var r;
      if (this.lastNeed) {
        if (void 0 === (t = this.fillLast(e))) return '';
        r = this.lastNeed, this.lastNeed = 0;
      } else r = 0;
      return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || '';
    }, o.prototype.end = function(e) {
      var t = e && e.length ? this.write(e) : '';
      return this.lastNeed ? t + '�' : t;
    }, o.prototype.text = function(e, t) {
      var r = function(e, t, r) {
        var n = t.length - 1;
        if (n < r) return 0;
        var i = a(t[n]);
        if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
        if (--n < r || -2 === i) return 0;
        if ((i = a(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
        if (--n < r || -2 === i) return 0;
        if ((i = a(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
        return 0;
      }(this, e, t);
      if (!this.lastNeed) return e.toString('utf8', t);
      this.lastTotal = r;
      var n = e.length - (r - this.lastNeed);
      return e.copy(this.lastChar, 0, n), e.toString('utf8', t, n);
    }, o.prototype.fillLast = function(e) {
      if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
  },
  14650: (e, t, r) => {
    var n = r(34155);
    var i = r(96801).Transform, o = r(89539).inherits, a = r(47529);
    function s(e) {
      i.call(this, e), this._destroyed = !1;
    }
    function c(e, t, r) {
      r(null, e);
    }
    function u(e) {
      return function(t, r, n) {
        return 'function' == typeof t && (n = r, r = t, t = {}), 'function' != typeof r && (r = c), 'function' != typeof n && (n = null), 
        e(t, r, n);
      };
    }
    o(s, i), s.prototype.destroy = function(e) {
      if (!this._destroyed) {
        this._destroyed = !0;
        var t = this;
        n.nextTick((function() {
          e && t.emit('error', e), t.emit('close');
        }));
      }
    }, e.exports = u((function(e, t, r) {
      var n = new s(e);
      return n._transform = t, r && (n._flush = r), n;
    })), e.exports.ctor = u((function(e, t, r) {
      function n(t) {
        if (!(this instanceof n)) return new n(t);
        this.options = a(e, t), s.call(this, this.options);
      }
      return o(n, s), n.prototype._transform = t, r && (n.prototype._flush = r), n;
    })), e.exports.obj = u((function(e, t, r) {
      var n = new s(a({
        objectMode: !0,
        highWaterMark: 16
      }, e));
      return n._transform = t, r && (n._flush = r), n;
    }));
  },
  52479: e => {
    e.exports = function e(t, r) {
      if (t && r) return e(t)(r);
      if ('function' != typeof t) throw new TypeError('need wrapper function');
      return Object.keys(t).forEach((function(e) {
        n[e] = t[e];
      })), n;
      function n() {
        var e = new Array(arguments.length);
        for (var r = 0; r < e.length; r++) e[r] = arguments[r];
        var n = t.apply(this, e);
        var i = e[e.length - 1];
        return 'function' == typeof n && n !== i && Object.keys(i).forEach((function(e) {
          n[e] = i[e];
        })), n;
      }
    };
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bFI7TUFDbkIsSUFBSWtSLEtBQU1sUixHQUFJLE9BQU9zekMsRUFBT3BpQyxFQUFQb2lDLENBQVd0ekM7TUFFaEMsSUFBa0IscUJBQVBrUixHQUNULE1BQU0sSUFBSUssVUFBVTtNQU10QixPQUpBMVcsT0FBT1csS0FBSzBWLEdBQUl6VixTQUFRLFNBQVV5RDtRQUNoQzZuRCxFQUFRN25ELEtBQUtnUyxFQUFHaFM7V0FHWDZuRDtNQUVQLFNBQVNBO1FBQ1AsSUFBSTE3QyxJQUFPLElBQUlTLE1BQU0xRixVQUFVNUY7UUFDL0IsS0FBSyxJQUFJRCxJQUFJLEdBQUdBLElBQUk4SyxFQUFLN0ssUUFBUUQsS0FDL0I4SyxFQUFLOUssS0FBSzZGLFVBQVU3RjtRQUV0QixJQUFJdTlDLElBQU01c0MsRUFBR3pPLE1BQU1uSCxNQUFNK1A7UUFDekIsSUFBSXJMLElBQUtxTCxFQUFLQSxFQUFLN0ssU0FBTztRQU0xQixPQUxtQixxQkFBUnM5QyxLQUFzQkEsTUFBUTk5QyxLQUN2Q25GLE9BQU9XLEtBQUt3RSxHQUFJdkUsU0FBUSxTQUFVeUQ7VUFDaEM0K0MsRUFBSTUrQyxLQUFLYyxFQUFHZDthQUdUNCtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L0NvbXBvc2VkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L01lcmdlZFN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9PYnNlcnZhYmxlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L2FzU3RyZWFtLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy9mZXRjaC1ub2RlLWRldGFpbHMvZGlzdC9mZXRjaE5vZGVEZXRhaWxzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2h0dHAtaGVscGVycy9kaXN0L2h0dHBIZWxwZXJzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL29wZW5sb2dpbi11dGlscy9kaXN0L29wZW5sb2dpblV0aWxzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL29wZW5sb2dpbi1qcnBjL2Rpc3Qvb3BlbmxvZ2luSnJwYy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS93cmFwTmF0aXZlU3VwZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL3RvcnVzLmpzL2Rpc3QvdG9ydXNVdGlscy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvaXMtc3RyZWFtL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b3J1c2xhYnMvdG9ydXMtZW1iZWQvZGlzdC90b3J1cy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRva2Vuc2NyaXB0L3Rva2VuLW5lZ290aWF0b3IvZGlzdC93YWxsZXQvVG9ydXNQcm92aWRlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2VjY3J5cHRvL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2Rpc3QvYmFzZTY0dXJsLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9kaXN0L3BhZC1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2NvcmUtdXRpbC1pcy9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9lbmQtb2Ytc3RyZWFtL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVyZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvbG9nbGV2ZWwvbGliL2xvZ2xldmVsLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzLW5leHRpY2stYXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wdW1wL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX2R1cGxleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3Bhc3N0aHJvdWdoLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcmVhZGFibGUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV93cml0YWJsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL0J1ZmZlckxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9kZXN0cm95LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvc3RyZWFtLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9yZWFkYWJsZS1icm93c2VyLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9zdHJpbmdfZGVjb2Rlci9saWIvc3RyaW5nX2RlY29kZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvdGhyb3VnaDIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvd3JhcHB5L3dyYXBweS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbXBvc2VkU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBPYnNlcnZhYmxlU3RvcmVfMSA9IHJlcXVpcmUoXCIuL09ic2VydmFibGVTdG9yZVwiKTtcbmNsYXNzIENvbXBvc2VkU3RvcmUgZXh0ZW5kcyBPYnNlcnZhYmxlU3RvcmVfMS5PYnNlcnZhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuKSB7XG4gICAgICAgIC8vIFR5cGVjYXN0OiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICBzdXBlcih7fSk7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBjaGlsZHJlblxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5fY2hpbGRyZW5bY2hpbGRLZXldO1xuICAgICAgICAgICAgdGhpcy5fYWRkQ2hpbGQoY2hpbGRLZXksIGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGlsZChjaGlsZEtleSwgY2hpbGQpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlRnJvbUNoaWxkID0gKGNoaWxkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgc3RhdGVbY2hpbGRLZXldID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUoc3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBjaGlsZC5zdWJzY3JpYmUodXBkYXRlRnJvbUNoaWxkKTtcbiAgICAgICAgdXBkYXRlRnJvbUNoaWxkKGNoaWxkLmdldFN0YXRlKCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tcG9zZWRTdG9yZSA9IENvbXBvc2VkU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb3NlZFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZXJnZWRTdG9yZSA9IHZvaWQgMDtcbmNvbnN0IE9ic2VydmFibGVTdG9yZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpO1xuY2xhc3MgTWVyZ2VkU3RvcmUgZXh0ZW5kcyBPYnNlcnZhYmxlU3RvcmVfMS5PYnNlcnZhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuID0gW10pIHtcbiAgICAgICAgLy8gVHlwZWNhc3Q6IFByZXNlcnZlIGV4aXN0aW5nIGJlaGF2aW9yXG4gICAgICAgIHN1cGVyKHt9KTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGNoaWxkcmVuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLl9hZGRDaGlsZChjaGlsZCkpO1xuICAgICAgICB0aGlzLl91cGRhdGVXaG9sZVN0YXRlKCk7XG4gICAgfVxuICAgIF9hZGRDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlV2hvbGVTdGF0ZSgpKTtcbiAgICB9XG4gICAgX3VwZGF0ZVdob2xlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkU3RhdGVzID0gdGhpcy5fY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZ2V0U3RhdGUoKSk7XG4gICAgICAgIC8vIGFwcGx5IHNoYWxsb3cgbWVyZ2Ugb3ZlciBzdGF0ZXNcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5jaGlsZFN0YXRlcyk7XG4gICAgICAgIHRoaXMucHV0U3RhdGUoc3RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVyZ2VkU3RvcmUgPSBNZXJnZWRTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lcmdlZFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PYnNlcnZhYmxlU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBzYWZlX2V2ZW50X2VtaXR0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1ldGFtYXNrL3NhZmUtZXZlbnQtZW1pdHRlclwiKSk7XG5jbGFzcyBPYnNlcnZhYmxlU3RvcmUgZXh0ZW5kcyBzYWZlX2V2ZW50X2VtaXR0ZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0U3RhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKGluaXRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBpbml0U3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUeXBlY2FzdC9kZWZhdWx0IHN0YXRlOiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3cmFwcGVyIGFyb3VuZCBpbnRlcm5hbCBnZXRTdGF0ZVxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U3RhdGUoKTtcbiAgICB9XG4gICAgLy8gd3JhcHBlciBhcm91bmQgaW50ZXJuYWwgcHV0U3RhdGVcbiAgICBwdXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLl9wdXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgbmV3U3RhdGUpO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgLy8gaWYgbm9uLW51bGwgb2JqZWN0LCBtZXJnZVxuICAgICAgICBpZiAocGFydGlhbFN0YXRlICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHBhcnRpYWxTdGF0ZSkpO1xuICAgICAgICAgICAgLy8gaWYgbm90IG9iamVjdCwgdXNlIG5ldyB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXRTdGF0ZShwYXJ0aWFsU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAgc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5vbigndXBkYXRlJywgaGFuZGxlcik7XG4gICAgfVxuICAgIC8vIHVuc3Vic2NyaWJlIHRvIGNoYW5nZXNcbiAgICB1bnN1YnNjcmliZShoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3VwZGF0ZScsIGhhbmRsZXIpO1xuICAgIH1cbiAgICAvL1xuICAgIC8vIHByaXZhdGVcbiAgICAvL1xuICAgIC8vIHJlYWQgZnJvbSBwZXJzaXN0ZW5jZVxuICAgIF9nZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvLyB3cml0ZSB0byBwZXJzaXN0ZW5jZVxuICAgIF9wdXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbn1cbmV4cG9ydHMuT2JzZXJ2YWJsZVN0b3JlID0gT2JzZXJ2YWJsZVN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZVN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZUFzU3RyZWFtID0gdm9pZCAwO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY2xhc3MgT2JzZXJ2YWJsZVN0b3JlU3RyZWFtIGV4dGVuZHMgc3RyZWFtXzEuRHVwbGV4IHtcbiAgICBjb25zdHJ1Y3RvcihvYnNTdG9yZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICAvLyBwYXNzIHZhbHVlcywgbm90IHNlcmlhbGl6YXRpb25zXG4gICAgICAgICAgICBvYmplY3RNb2RlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZG9udCBidWZmZXIgb3V0Z29pbmcgdXBkYXRlc1xuICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAvLyBzYXZlIGhhbmRsZXIgc28gd2UgY2FuIHVuc3Vic2NyaWJlIGxhdGVyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IChzdGF0ZSkgPT4gdGhpcy5wdXNoKHN0YXRlKTtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9ic1N0b3JlIGNoYW5nZXNcbiAgICAgICAgdGhpcy5vYnNTdG9yZSA9IG9ic1N0b3JlO1xuICAgICAgICB0aGlzLm9ic1N0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyBlbWl0IGN1cnJlbnQgc3RhdGUgb24gbmV3IGRlc3RpbmF0aW9uXG4gICAgcGlwZShkZXN0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLnBpcGUoZGVzdCwgb3B0aW9ucyk7XG4gICAgICAgIGRlc3Qud3JpdGUodGhpcy5vYnNTdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gd3JpdGUgZnJvbSBpbmNvbWluZyBzdHJlYW0gdG8gc3RhdGVcbiAgICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vYnNTdG9yZS5wdXRTdGF0ZShjaHVuayk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIC8vIG5vb3AgLSBvdXRnb2luZyBzdHJlYW0gaXMgYXNraW5nIHVzIGlmIHdlIGhhdmUgZGF0YSB3ZSBhcmVudCBnaXZpbmcgaXRcbiAgICBfcmVhZChfc2l6ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyB1bnN1YnNjcmliZSBmcm9tIGV2ZW50IGVtaXR0ZXJcbiAgICBfZGVzdHJveShlcnIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2JzU3RvcmUudW5zdWJzY3JpYmUodGhpcy5oYW5kbGVyKTtcbiAgICAgICAgc3VwZXIuX2Rlc3Ryb3koZXJyLCBjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RvcmVBc1N0cmVhbShvYnNTdG9yZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVN0b3JlU3RyZWFtKG9ic1N0b3JlKTtcbn1cbmV4cG9ydHMuc3RvcmVBc1N0cmVhbSA9IHN0b3JlQXNTdHJlYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc1N0cmVhbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzU3RyZWFtXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Db21wb3NlZFN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9NZXJnZWRTdG9yZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90cmFuc2Zvcm1cIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlVHJhbnNmb3JtU3RyZWFtID0gdm9pZCAwO1xuY29uc3QgdGhyb3VnaDJfMSA9IHJlcXVpcmUoXCJ0aHJvdWdoMlwiKTtcbmZ1bmN0aW9uIHN0b3JlVHJhbnNmb3JtU3RyZWFtKHN5bmNUcmFuc2Zvcm1Gbikge1xuICAgIHJldHVybiB0aHJvdWdoMl8xLm9iaigoc3RhdGUsIF9lbmNvZGluZywgY2IpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3luY1RyYW5zZm9ybUZuKHN0YXRlKTtcbiAgICAgICAgICAgIGNiKG51bGwsIG5ld1N0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc3RvcmVUcmFuc2Zvcm1TdHJlYW0gPSBzdG9yZVRyYW5zZm9ybVN0cmVhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybS5qcy5tYXAiLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFdlYjNFdGhDb250cmFjdCBmcm9tICd3ZWIzLWV0aC1jb250cmFjdCc7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuXG5jb25zdCBFVEhFUkVVTV9ORVRXT1JLID0ge1xuICAgIFJPUFNURU46IFwicm9wc3RlblwiLFxuICAgIE1BSU5ORVQ6IFwibWFpbm5ldFwiLFxufTtcbmNvbnN0IGFiaSA9IFtcbiAgICB7XG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBuYW1lOiBcImN1cnJlbnRFcG9jaFwiLFxuICAgICAgICBvdXRwdXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJlcG9jaFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJnZXRFcG9jaEluZm9cIixcbiAgICAgICAgb3V0cHV0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJpZFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiblwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwia1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwidFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1tdXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJub2RlTGlzdFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkcmVzc1tdXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwcmV2RXBvY2hcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm5leHRFcG9jaFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJub2RlQWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJnZXROb2RlRGV0YWlsc1wiLFxuICAgICAgICBvdXRwdXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVjbGFyZWRJcFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwb3NpdGlvblwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwicHViS3hcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcInB1Ykt5XCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcInRtUDJQTGlzdGVuQWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcInAycExpc3RlbkFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuXTtcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cblxuY2xhc3MgTm9kZURldGFpbE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHsgbmV0d29yayA9IEVUSEVSRVVNX05FVFdPUksuTUFJTk5FVCwgcHJveHlBZGRyZXNzID0gXCIweDYzODY0NjUwMzc0NmQ1NDU2MjA5ZTMzYTJmZjVlMzIyNmQ2OThiZWFcIiB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudEVwb2NoID0gXCIxOVwiO1xuICAgICAgICB0aGlzLl90b3J1c05vZGVFbmRwb2ludHMgPSBbXG4gICAgICAgICAgICBcImh0dHBzOi8vdG9ydXMtMTkudG9ydXNub2RlLmNvbS9qcnBjXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vdG9ydXMtbm9kZS5lbnMuZG9tYWlucy9qcnBjXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vdG9ydXMtbm9kZS5tYXRpYy5uZXR3b3JrL2pycGNcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly90b3J1cy56aWxsaXFhLm5ldHdvcmsvanJwY1wiLFxuICAgICAgICAgICAgXCJodHRwczovL3RvcnVzLW1haW5uZXQuY29zbW9zLm5ldHdvcmsvanJwY1wiLFxuICAgICAgICAgICAgXCJodHRwczovL3RvcnVzMi5ldGhlcnNjYW4uY29tL2pycGNcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly90b3J1cy1ub2RlLXYyLnNrYWxlbGFicy5jb20vanJwY1wiLFxuICAgICAgICAgICAgXCJodHRwczovL3RvcnVzLW5vZGUuYmluYW5jZXguZGV2L2pycGNcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly90b3J1c25vZGUub250LmlvL2pycGNcIixcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5fdG9ydXNOb2RlUHViID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFg6IFwiYmJlODNjNjQxNzdjMzc3NTU1MGU2YmE2YWMyYmMwNTlmNjg0N2Q2NDRjOWU0ODk0ZTQyYzYwZDc5NzRkOGMyYlwiLFxuICAgICAgICAgICAgICAgIFk6IFwiODJiNDlhN2NhZjcwZGVmMzhjZGFkMjc0MGFmNDVjMWU0Zjk2OTY1MDEwNWM1MDE5YTI5YmIxOGIyMWE5YWNiNVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBYOiBcImMyMDhjYWM0ZWY5YTQ3ZDM4NjA5N2E5YzkxNWIyOGU5Y2I4OTIxM2FiZWU4ZDI2YTE3MTk4ZWUyNjEyMDFiMGRcIixcbiAgICAgICAgICAgICAgICBZOiBcImM3ZGIyZmU0NjMxMTA5ZjQwODMzZGU5ZGM3OGQwN2UzNTcwNjU0OWVlNDhmYTU1N2IzM2U0ZTc1ZTEwNDc4NzNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgWDogXCJjYTE3NjZiYjQyNmQ0Y2E1NTgyODE4YTBjNTQzOWQ1NjBlYTY0ZjViYWEwNjA3OTNhYjI5ZGQzZDBjZWFjZmVcIixcbiAgICAgICAgICAgICAgICBZOiBcImQ0NmMxZDA4YzQwZTEzMDZlMWJjYTMyOGMyMjg3YjgyNjgxNjZiMTFhMWJhNGI4NDQyZWEyYWQwYzVlMzIxNTJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgWDogXCJjMzkzNGRkMmY2ZjRiM2QyZTFlMzk4Y2M1MDFlMTQzYzFlMWEzODFiNTJmZWI2ZDE1MjVhZjM0ZDE2MjUzNzY4XCIsXG4gICAgICAgICAgICAgICAgWTogXCI3MWY1MTQxYTUwMzU3OTkwOTlmNWVhM2UyNDFlNjY5NDZiYzU1ZGM4NTdhYzNiZDdkNmZjZGI4ZGNkM2VlZWVmXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFg6IFwiMjJlNjZmMTkyOTYzMWQwMGJmMDI2MjI3NTgxNTk3ZjA4NWZkOTRmZDk1MmZjMGRjYTlmMDgzMzM5OGI1YzA2NFwiLFxuICAgICAgICAgICAgICAgIFk6IFwiNjA4OGIzOTEyZTEwYTFlOWQ1MDM1NWE2MDljMTBkYjdkMTg4ZjE2YTJlMmZkNzM1N2U1MWJmNGY2YTc0ZjBhMVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBYOiBcIjlkYzlmYTQxMGYzY2U5ZWI3MGRmNzBjZGVhMDBhNDlmMmM0Y2M3YTMxYzA4YzBkYWI1Zjg2M2VkMzVmZjUxMzlcIixcbiAgICAgICAgICAgICAgICBZOiBcIjYyN2EyOTFjYjg3YTc1YzYxZGEzZjY1ZDY4MThlMWUwNWUzNjAyMTcxNzk4MTdlZDI3ZThjNzNiY2E3ZWMxMjJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgWDogXCIxMThiOWZjMDdlOTdiMDk2ZDg5OWI5ZjY2NTg0NjNjZTZhOGNhYTY0MDM4ZTM3ZmM5NjlkZjRlNjAyM2RkOGM2XCIsXG4gICAgICAgICAgICAgICAgWTogXCJiYWY5ZmE0ZTUxNzcwZjQ3OTZlYTE2NWRkMDNhNzY5Yjg2MDY2ODFhMzg5NTRhMGE5MmM0Y2JmZmQ2NjA5Y2U5XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFg6IFwiOGE2ZDhiOTI1ZGExNWEyNzNkZWMzZDhmODM5NWVjMzVjZDY4NzhmMjc0YjJiMTgwZTRlMTA2OTk5ZGI2NDA0M1wiLFxuICAgICAgICAgICAgICAgIFk6IFwiOTZmNjdmODcwYzE1Nzc0M2RhMGIxZWI4NGQ4OWJmMzA1MDBkNzRkYzg0YzExZjUwMWVlMWNiMDEzYWNjOGM0NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBYOiBcIjM5Y2VjYjYyZTg2MzcyOWY1NzJmN2RmYzQ2YzI0ODY3OTgxYmYwNGJiNDA1ZmVkMGRmMzllMzM5ODRiZmFkZTVcIixcbiAgICAgICAgICAgICAgICBZOiBcIjYxYzIzNjQ0MzQwMTJlNjhhMmJlMmU5OTUyODA1MDM3ZTUyNjI5ZDc3NjJmYWZjOGUxMGU5ZmI1YmFkOGY3OTBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuX3RvcnVzSW5kZXhlcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgICAgICAgdGhpcy5fbmV0d29yayA9IEVUSEVSRVVNX05FVFdPUksuTUFJTk5FVDtcbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVXJsID0gbmV3IFVSTChuZXR3b3JrKTtcbiAgICAgICAgICAgIHVybCA9IGxvY2FsVXJsLmhyZWY7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IFwiYjhjZGIwZTRjZmYyNDU5OWEyODZiZjhlODdmZjFjOTZcIjtcbiAgICAgICAgICAgIHVybCA9IGBodHRwczovLyR7bmV0d29ya30uaW5mdXJhLmlvL3YzLyR7cHJvamVjdElkfWA7XG4gICAgICAgIH1cbiAgICAgICAgV2ViM0V0aENvbnRyYWN0LnNldFByb3ZpZGVyKHVybCk7XG4gICAgICAgIHRoaXMubm9kZUxpc3RDb250cmFjdCA9IG5ldyBXZWIzRXRoQ29udHJhY3QoYWJpLCBwcm94eUFkZHJlc3MpO1xuICAgICAgICB0aGlzLm5vZGVMaXN0QWRkcmVzcyA9IHByb3h5QWRkcmVzcztcbiAgICAgICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX25ldHdvcmsgPSBuZXR3b3JrO1xuICAgIH1cbiAgICBnZXQgX25vZGVEZXRhaWxzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudEVwb2NoOiB0aGlzLl9jdXJyZW50RXBvY2gsXG4gICAgICAgICAgICBub2RlTGlzdEFkZHJlc3M6IHRoaXMubm9kZUxpc3RBZGRyZXNzLFxuICAgICAgICAgICAgdG9ydXNOb2RlRW5kcG9pbnRzOiB0aGlzLl90b3J1c05vZGVFbmRwb2ludHMsXG4gICAgICAgICAgICB0b3J1c05vZGVQdWI6IHRoaXMuX3RvcnVzTm9kZVB1YixcbiAgICAgICAgICAgIHRvcnVzSW5kZXhlczogdGhpcy5fdG9ydXNJbmRleGVzLFxuICAgICAgICAgICAgdXBkYXRlZDogdGhpcy51cGRhdGVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRDdXJyZW50RXBvY2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVMaXN0Q29udHJhY3QubWV0aG9kcy5jdXJyZW50RXBvY2goKS5jYWxsKCk7XG4gICAgfVxuICAgIGdldEVwb2NoSW5mbyhlcG9jaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTGlzdENvbnRyYWN0Lm1ldGhvZHMuZ2V0RXBvY2hJbmZvKGVwb2NoKS5jYWxsKCk7XG4gICAgfVxuICAgIGdldE5vZGVFbmRwb2ludChub2RlRXRoQWRkcmVzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTGlzdENvbnRyYWN0Lm1ldGhvZHMuZ2V0Tm9kZURldGFpbHMobm9kZUV0aEFkZHJlc3MpLmNhbGwoKTtcbiAgICB9XG4gICAgZ2V0Tm9kZURldGFpbHMoc2tpcCA9IGZhbHNlLCBza2lwUG9zdEVwb2NoQ2hlY2sgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoc2tpcCAmJiB0aGlzLl9uZXR3b3JrID09PSBFVEhFUkVVTV9ORVRXT1JLLk1BSU5ORVQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGRhdGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZURldGFpbHM7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ZXN0RXBvY2ggPSB5aWVsZCB0aGlzLmdldEN1cnJlbnRFcG9jaCgpO1xuICAgICAgICAgICAgICAgIGlmIChza2lwUG9zdEVwb2NoQ2hlY2sgJiYgdGhpcy5fbmV0d29yayA9PT0gRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVUICYmIGxhdGVzdEVwb2NoID09PSB0aGlzLl9jdXJyZW50RXBvY2gpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50RXBvY2ggPSBsYXRlc3RFcG9jaDtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXRlc3RFcG9jaEluZm8gPSB5aWVsZCB0aGlzLmdldEVwb2NoSW5mbyhsYXRlc3RFcG9jaCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhlcyA9IGxhdGVzdEVwb2NoSW5mby5ub2RlTGlzdC5tYXAoKF8sIHBvcykgPT4gcG9zICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9ydXNJbmRleGVzID0gaW5kZXhlcztcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlRW5kcG9pbnRSZXF1ZXN0cyA9IGxhdGVzdEVwb2NoSW5mby5ub2RlTGlzdC5tYXAoKG5vZGVFdGhBZGRyZXNzKSA9PiB0aGlzLmdldE5vZGVFbmRwb2ludChub2RlRXRoQWRkcmVzcykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVFbmRQb2ludHMgPSB5aWVsZCBQcm9taXNlLmFsbChub2RlRW5kcG9pbnRSZXF1ZXN0cyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZEVuZHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWROb2RlUHViID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVFbmRQb2ludHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZFBvaW50RWxlbWVudCA9IG5vZGVFbmRQb2ludHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRwb2ludCA9IGBodHRwczovLyR7ZW5kUG9pbnRFbGVtZW50LmRlY2xhcmVkSXAuc3BsaXQoXCI6XCIpWzBdfS9qcnBjYDtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEVuZHBvaW50cy5wdXNoKGVuZHBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZE5vZGVQdWIucHVzaCh7IFg6IHRvSGV4KGVuZFBvaW50RWxlbWVudC5wdWJLeCkucmVwbGFjZShcIjB4XCIsIFwiXCIpLCBZOiB0b0hleChlbmRQb2ludEVsZW1lbnQucHViS3kpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9ydXNOb2RlRW5kcG9pbnRzID0gdXBkYXRlZEVuZHBvaW50cztcbiAgICAgICAgICAgICAgICB0aGlzLl90b3J1c05vZGVQdWIgPSB1cGRhdGVkTm9kZVB1YjtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGVEZXRhaWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVUSEVSRVVNX05FVFdPUkssIGFiaSwgTm9kZURldGFpbE1hbmFnZXIgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmV0Y2hOb2RlRGV0YWlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC5tZXJnZSc7XG5pbXBvcnQgbG9nTGV2ZWwsIHsgbGV2ZWxzIH0gZnJvbSAnbG9nbGV2ZWwnO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgbG9nID0gbG9nTGV2ZWwuZ2V0TG9nZ2VyKFwiaHR0cC1oZWxwZXJzXCIpO1xubG9nLnNldExldmVsKGxldmVscy5JTkZPKTtcbmxldCBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIjtcbmxldCBlbWJlZEhvc3QgPSBcIlwiOyAvLyAjcmVnaW9uIEFQSSBLZXlzXG5cbmNvbnN0IGdhdGV3YXlBdXRoSGVhZGVyID0gXCJ4LWFwaS1rZXlcIjtcbmNvbnN0IGdhdGV3YXlFbWJlZEhvc3RIZWFkZXIgPSBcIngtZW1iZWQtaG9zdFwiO1xuZnVuY3Rpb24gc2V0RW1iZWRIb3N0KGVtYmVkSG9zdF8pIHtcbiAgZW1iZWRIb3N0ID0gZW1iZWRIb3N0Xztcbn1cbmZ1bmN0aW9uIGNsZWFyRW1iZWRIb3N0KCkge1xuICBlbWJlZEhvc3QgPSBcIlwiO1xufVxuZnVuY3Rpb24gZ2V0RW1iZWRIb3N0KCkge1xuICByZXR1cm4gZW1iZWRIb3N0O1xufVxuZnVuY3Rpb24gc2V0QVBJS2V5KGFwaUtleV8pIHtcbiAgYXBpS2V5ID0gYXBpS2V5Xztcbn1cbmZ1bmN0aW9uIGNsZWFyQVBJS2V5KCkge1xuICBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIjtcbn1cbmZ1bmN0aW9uIGdldEFQSUtleSgpIHtcbiAgcmV0dXJuIGFwaUtleTtcbn0gLy8gI2VuZHJlZ2lvblxuXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xuICBsb2cuc2V0TGV2ZWwobGV2ZWwpO1xufVxuXG5mdW5jdGlvbiBnZXRBcGlLZXlIZWFkZXJzKCkge1xuICBjb25zdCBoZWFkZXJzID0ge307XG4gIGlmIChhcGlLZXkpIGhlYWRlcnNbZ2F0ZXdheUF1dGhIZWFkZXJdID0gYXBpS2V5O1xuICBpZiAoZW1iZWRIb3N0KSBoZWFkZXJzW2dhdGV3YXlFbWJlZEhvc3RIZWFkZXJdID0gZW1iZWRIb3N0O1xuICByZXR1cm4gaGVhZGVycztcbn1cblxuZnVuY3Rpb24gZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSkge1xuICBsb2cuaW5mbyhcIlJlc3BvbnNlOiBcIi5jb25jYXQocmVzcG9uc2Uuc3RhdHVzLCBcIiBcIikuY29uY2F0KHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgbG9nLmluZm8oXCJVcmw6IFwiLmNvbmNhdChyZXNwb25zZS51cmwpKTtcbn1cblxuY29uc3QgcHJvbWlzZVRpbWVvdXQgPSAobXMsIHByb21pc2UpID0+IHtcbiAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaW1lZCBvdXQgaW4gXCIuY29uY2F0KG1zLCBcIm1zXCIpKSk7XG4gICAgfSwgbXMpO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmFjZShbcHJvbWlzZSwgdGltZW91dF0pO1xufTtcbmNvbnN0IGdldCA9IGFzeW5jIGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IG9wdGlvbnNfID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgbGV0IGN1c3RvbU9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgICBoZWFkZXJzOiB7fVxuICB9O1xuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJHRVRcIlxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgdGhyb3cgcmVzcG9uc2U7XG59O1xuY29uc3QgcG9zdCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgfVxuICB9O1xuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgfSk7IC8vIGRlZXAgbWVyZ2UgY2hhbmdlcyB0aGUgc3RydWN0dXJlIG9mIGZvcm0gZGF0YSBhbmQgdXJsIGVuY29kZWQgZGF0YSAsXG4gIC8vIHNvIHdlIHNob3VsZCBub3QgZGVlcG1lcmdlIGJvZHkgZGF0YVxuXG4gIGlmIChjdXN0b21PcHRpb25zLmlzVXJsRW5jb2RlZERhdGEpIHtcbiAgICAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAgIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cbiAgICBvcHRpb25zLmJvZHkgPSBkYXRhOyAvLyBJZiB1cmwgZW5jb2RlZCBkYXRhLCB0aGlzIG11c3Qgbm90IGJlIHRoZSBjb250ZW50IHR5cGVcblxuICAgIGlmIChvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKSBkZWxldGUgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2VUaW1lb3V0KGN1c3RvbU9wdGlvbnMudGltZW91dCB8fCA2MDAwMCwgZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSk7XG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH0pKTtcbn07XG5jb25zdCBwYXRjaCA9IGFzeW5jIGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgfVxuICB9OyAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiXG4gIH0pOyAvLyBkZWVwIG1lcmdlIGNoYW5nZXMgdGhlIHN0cnVjdHVyZSBvZiBmb3JtIGRhdGEgYW5kIHVybCBlbmNvZGVkIGRhdGEgLFxuICAvLyBzbyB3ZSBzaG91bGQgbm90IGRlZXBtZXJnZSBib2R5IGRhdGFcblxuICBpZiAoY3VzdG9tT3B0aW9ucy5pc1VybEVuY29kZWREYXRhKSB7XG4gICAgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gICAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG4gICAgb3B0aW9ucy5ib2R5ID0gZGF0YTsgLy8gSWYgdXJsIGVuY29kZWQgZGF0YSwgdGhpcyBtdXN0IG5vdCBiZSB0aGUgY29udGVudCB0eXBlXG5cbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIikgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSk7XG4gIHRocm93IHJlc3BvbnNlO1xufTtcbmNvbnN0IHJlbW92ZSA9IGFzeW5jIGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgfVxuICB9OyAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIlxuICB9KTtcblxuICBpZiAoY3VzdG9tT3B0aW9ucy5pc1VybEVuY29kZWREYXRhKSB7XG4gICAgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gICAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG4gICAgb3B0aW9ucy5ib2R5ID0gZGF0YTsgLy8gSWYgdXJsIGVuY29kZWQgZGF0YSwgdGhpcyBtdXN0IG5vdCBiZSB0aGUgY29udGVudCB0eXBlXG5cbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIikgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSk7XG4gIHRocm93IHJlc3BvbnNlO1xufTtcbmNvbnN0IGdlbmVyYXRlSnNvblJQQ09iamVjdCA9IChtZXRob2QsIHBhcmFtZXRlcnMpID0+ICh7XG4gIGpzb25ycGM6IFwiMi4wXCIsXG4gIG1ldGhvZCxcbiAgaWQ6IDEwLFxuICBwYXJhbXM6IHBhcmFtZXRlcnNcbn0pO1xuY29uc3QgcHJvbWlzZVJhY2UgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGxldCB0aW1lb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiA2MDAwMDtcbiAgcmV0dXJuIFByb21pc2UucmFjZShbZ2V0KHVybCwgb3B0aW9ucyksIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJ0aW1lZCBvdXRcIikpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9KV0pO1xufTtcblxuZXhwb3J0IHsgY2xlYXJBUElLZXksIGNsZWFyRW1iZWRIb3N0LCBnYXRld2F5QXV0aEhlYWRlciwgZ2F0ZXdheUVtYmVkSG9zdEhlYWRlciwgZ2VuZXJhdGVKc29uUlBDT2JqZWN0LCBnZXQsIGdldEFQSUtleSwgZ2V0RW1iZWRIb3N0LCBwYXRjaCwgcG9zdCwgcHJvbWlzZVJhY2UsIHByb21pc2VUaW1lb3V0LCByZW1vdmUsIHNldEFQSUtleSwgc2V0RW1iZWRIb3N0LCBzZXRMb2dMZXZlbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cEhlbHBlcnMuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHJhbmRvbWJ5dGVzIGZyb20gJ3JhbmRvbWJ5dGVzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgYmFzZTY0dXJsTGliIGZyb20gJ2Jhc2U2NHVybCc7XG5pbXBvcnQga2VjY2FrTGliIGZyb20gJ2tlY2Nhayc7XG5cbi8vIFRPRE86IHNob3VsZCBiZSBjcnlwdG8gc2FmZVxuY29uc3QgcmFuZG9tSWQgPSAoKSA9PiByYW5kb21ieXRlcygzMikudG9TdHJpbmcoXCJoZXhcIik7XG5cbmNsYXNzIFVSTFdpdGhIYXNoUGFyYW1zIGV4dGVuZHMgVVJMIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhhc2hQYXJhbXNcIiwgbmV3IFVSTFNlYXJjaFBhcmFtcygpKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuaGFzaFBhcmFtcy50b1N0cmluZygpO1xuICAgIHJldHVybiBzdXBlci50b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9XG5cbn1cblxuY29uc3QgYmFzZTY0dXJsID0gYmFzZTY0dXJsTGliO1xuZnVuY3Rpb24gc2FmZWJ0b2Eoc3RyKSB7XG4gIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKHN0cik7XG59XG5mdW5jdGlvbiBzYWZlYXRvYihzdHIpIHtcbiAgLy8gR29pbmcgYmFja3dhcmRzOiBmcm9tIGJ5dGVzdHJlYW0sIHRvIHBlcmNlbnQtZW5jb2RpbmcsIHRvIG9yaWdpbmFsIHN0cmluZy5cbiAgcmV0dXJuIGJhc2U2NHVybC5kZWNvZGUoc3RyKTtcbn1cbmNvbnN0IGtlY2NhayA9IGtlY2Nha0xpYjtcbmZ1bmN0aW9uIGJhc2U2NHRvSlNPTihiNjRzdHIpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0dXJsLmRlY29kZShiNjRzdHIpKTtcbn1cbmZ1bmN0aW9uIGpzb25Ub0Jhc2U2NChqc29uKSB7XG4gIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbn1cbmZ1bmN0aW9uIGtlY2NhazI1NihzdHIpIHtcbiAgbGV0IGlucHV0ID0gc3RyO1xuXG4gIGlmICh0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiICYmIHN0ci5zbGljZSgwLCAyKSA9PT0gXCIweFwiICYmIHN0ci5sZW5ndGggPT09IDY2KSB7XG4gICAgaW5wdXQgPSBCdWZmZXIuZnJvbShzdHIuc2xpY2UoMiksIFwiaGV4XCIpO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IFwiMHhcIi5jb25jYXQoa2VjY2FrKFwia2VjY2FrMjU2XCIpLnVwZGF0ZShpbnB1dCkuZGlnZXN0KFwiaGV4XCIpLnBhZFN0YXJ0KDY0LCBcIjBcIikpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IHsgVVJMV2l0aEhhc2hQYXJhbXMsIGJhc2U2NHRvSlNPTiwgYmFzZTY0dXJsLCBqc29uVG9CYXNlNjQsIGtlY2Nhaywga2VjY2FrMjU2LCByYW5kb21JZCwgc2FmZWF0b2IsIHNhZmVidG9hIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVubG9naW5VdGlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgRHVwbGV4IH0gZnJvbSAncmVhZGFibGUtc3RyZWFtJztcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnQHRvcnVzbGFicy9vcGVubG9naW4tdXRpbHMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnZmFzdC1zYWZlLXN0cmluZ2lmeSc7XG5pbXBvcnQgZW9zIGZyb20gJ2VuZC1vZi1zdHJlYW0nO1xuaW1wb3J0IG9uY2UgZnJvbSAnb25jZSc7XG5pbXBvcnQgcHVtcCBmcm9tICdwdW1wJztcblxuZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgU1lOID0gXCJTWU5cIjtcbmNvbnN0IEFDSyA9IFwiQUNLXCI7XG5jb25zdCBCUksgPSBcIkJSS1wiO1xuY2xhc3MgQmFzZVBvc3RNZXNzYWdlU3RyZWFtIGV4dGVuZHMgRHVwbGV4IHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBuYW1lLFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGFyZ2V0V2luZG93ID0gd2luZG93LFxuICAgICAgdGFyZ2V0T3JpZ2luID0gXCIqXCJcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcih7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW5pdFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2hhdmVTeW5cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9uYW1lXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFyZ2V0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFyZ2V0V2luZG93XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFyZ2V0T3JpZ2luXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfb25NZXNzYWdlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3luSW50ZXJ2YWxJZFwiLCB2b2lkIDApO1xuXG4gICAgaWYgKCFuYW1lIHx8ICF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQuXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2luaXQgPSBmYWxzZTtcbiAgICB0aGlzLl9oYXZlU3luID0gZmFsc2U7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0OyAvLyB0YXJnZXQgb3JpZ2luXG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cgPSB0YXJnZXRXaW5kb3c7XG4gICAgdGhpcy5fdGFyZ2V0T3JpZ2luID0gdGFyZ2V0T3JpZ2luO1xuICAgIHRoaXMuX29uTWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc3luSW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX29uTWVzc2FnZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5faGFuZFNoYWtlKCk7XG4gIH1cblxuICBfYnJlYWsoKSB7XG4gICAgdGhpcy5jb3JrKCk7XG5cbiAgICB0aGlzLl93cml0ZShCUkssIG51bGwsIG5vb3ApO1xuXG4gICAgdGhpcy5faGF2ZVN5biA9IGZhbHNlO1xuICAgIHRoaXMuX2luaXQgPSBmYWxzZTtcbiAgfVxuXG4gIF9oYW5kU2hha2UoKSB7XG4gICAgdGhpcy5fd3JpdGUoU1lOLCBudWxsLCBub29wKTtcblxuICAgIHRoaXMuY29yaygpO1xuICB9XG5cbiAgX29uRGF0YShkYXRhKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0KSB7XG4gICAgICAvLyBsaXN0ZW4gZm9yIGhhbmRzaGFrZVxuICAgICAgaWYgKGRhdGEgPT09IFNZTikge1xuICAgICAgICB0aGlzLl9oYXZlU3luID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl93cml0ZShBQ0ssIG51bGwsIG5vb3ApO1xuICAgICAgfSBlbHNlIGlmIChkYXRhID09PSBBQ0spIHtcbiAgICAgICAgdGhpcy5faW5pdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9oYXZlU3luKSB7XG4gICAgICAgICAgdGhpcy5fd3JpdGUoQUNLLCBudWxsLCBub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudW5jb3JrKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhID09PSBCUkspIHtcbiAgICAgIHRoaXMuX2JyZWFrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvcndhcmQgbWVzc2FnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5wdXNoKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3Bvc3RNZXNzYWdlKGRhdGEpIHtcbiAgICBjb25zdCBvcmlnaW5Db25zdHJhaW50ID0gdGhpcy5fdGFyZ2V0T3JpZ2luO1xuXG4gICAgdGhpcy5fdGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgIHRhcmdldDogdGhpcy5fdGFyZ2V0LFxuICAgICAgZGF0YVxuICAgIH0sIG9yaWdpbkNvbnN0cmFpbnQpO1xuICB9XG5cbiAgb25NZXNzYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LmRhdGE7IC8vIHZhbGlkYXRlIG1lc3NhZ2VcblxuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW4gIT09IFwiKlwiICYmIGV2ZW50Lm9yaWdpbiAhPT0gdGhpcy5fdGFyZ2V0T3JpZ2luIHx8IGV2ZW50LnNvdXJjZSAhPT0gdGhpcy5fdGFyZ2V0V2luZG93IHx8IHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UudGFyZ2V0ICE9PSB0aGlzLl9uYW1lIHx8ICFtZXNzYWdlLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkRhdGEobWVzc2FnZS5kYXRhKTtcbiAgfVxuXG4gIF9yZWFkKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBfd3JpdGUoZGF0YSwgXywgY2IpIHtcbiAgICB0aGlzLl9wb3N0TWVzc2FnZShkYXRhKTtcblxuICAgIGNiKCk7XG4gIH1cblxuICBfZGVzdHJveSgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fb25NZXNzYWdlLCBmYWxzZSk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBzYWZlQXBwbHkoaGFuZGxlciwgY29udGV4dCwgYXJncykge1xuICB0cnkge1xuICAgIFJlZmxlY3QuYXBwbHkoaGFuZGxlciwgY29udGV4dCwgYXJncyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRocm93IGVycm9yIGFmdGVyIHRpbWVvdXQgc28gYXMgbm90IHRvIGludGVycnVwdCB0aGUgc3RhY2tcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFycikge1xuICBjb25zdCBuID0gYXJyLmxlbmd0aDtcbiAgY29uc3QgY29weSA9IG5ldyBBcnJheShuKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gY29weTtcbn1cblxuY2xhc3MgU2FmZUV2ZW50RW1pdHRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGVtaXQodHlwZSkge1xuICAgIGxldCBkb0Vycm9yID0gdHlwZSA9PT0gXCJlcnJvclwiO1xuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICAgIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9FcnJvciA9IGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICghZG9FcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuXG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZG9FcnJvcikge1xuICAgICAgbGV0IGVyO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIFtlcl0gPSBhcmdzO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcblxuXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJVbmhhbmRsZWQgZXJyb3IuXCIuY29uY2F0KGVyID8gXCIgKFwiLmNvbmNhdChlci5tZXNzYWdlLCBcIilcIikgOiBcIlwiKSk7XG4gICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHNhZmVBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIHNhZmVBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn1cblxuY2xhc3MgU2VyaWFsaXphYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgY29kZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBkYXRhXG4gICAgfSA9IF9yZWY7XG5cbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoY29kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNvZGUgbXVzdCBiZSBhbiBpbnRlZ2VyXCIpO1xuICAgIH1cblxuICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWVzc2FnZSBtdXN0IGJlIHN0cmluZ1wiKTtcbiAgICB9XG5cbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvZGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRhdGFcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuY29kZSA9IGNvZGU7XG5cbiAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBzdHJpbmdpZnkoe1xuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2tcbiAgICB9KTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUVycm9yKGVycm9yKSB7XG4gIHJldHVybiBlcnJvci50b1N0cmluZygpO1xufVxuY29uc3QgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICBsZXQgdW53cmFwUmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4gKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnJvciB8fCByZXNwb25zZS5lcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKTtcbiAgICB9IGVsc2UgaWYgKCF1bndyYXBSZXN1bHQgfHwgQXJyYXkuaXNBcnJheShyZXNwb25zZSkpIHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG4gICAgfVxuICB9O1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yTWlkZGxld2FyZShsb2cpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGpzb24tcnBjLWVuZ2luZSB3aWxsIHRlcm1pbmF0ZSB0aGUgcmVxdWVzdCB3aGVuIGl0IG5vdGljZXMgdGhpcyBlcnJvclxuICAgICAgaWYgKHR5cGVvZiByZXEubWV0aG9kICE9PSBcInN0cmluZ1wiIHx8ICFyZXEubWV0aG9kKSB7XG4gICAgICAgIHJlcy5lcnJvciA9IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBtZXRob2RcIlxuICAgICAgICB9KTtcbiAgICAgICAgZW5kKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dChkb25lID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH0gPSByZXM7XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuZXJyb3IoXCJPcGVuTG9naW4gLSBSUEMgRXJyb3I6IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihcIk9wZW5Mb2dpbiAtIFJQQyBFcnJvciB0aHJvd246IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgcmVzLmVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUoKSB7XG4gIGNvbnN0IGlkTWFwID0ge307XG5cbiAgZnVuY3Rpb24gcmVhZE5vb3AoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gbmV3IFNhZmVFdmVudEVtaXR0ZXIoKTtcblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2UocmVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGlkTWFwW3Jlcy5pZF07XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmVhbU1pZGRsZXdhcmUgLSBVbmtub3duIHJlc3BvbnNlIGlkIFxcXCJcIi5jb25jYXQocmVzLmlkLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBpZE1hcFtyZXMuaWRdOyAvLyBjb3B5IHdob2xlIHJlcyBvbnRvIG9yaWdpbmFsIHJlc1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LnJlcywgcmVzKTsgLy8gcnVuIGNhbGxiYWNrIG9uIGVtcHR5IHN0YWNrLFxuICAgIC8vIHByZXZlbnQgaW50ZXJuYWwgc3RyZWFtLWhhbmRsZXIgZnJvbSBjYXRjaGluZyBlcnJvcnNcblxuICAgIHNldFRpbWVvdXQoY29udGV4dC5lbmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc05vdGlmaWNhdGlvbihyZXMpIHtcbiAgICBldmVudHMuZW1pdChcIm5vdGlmaWNhdGlvblwiLCByZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UocmVzLCBfZW5jb2RpbmcsIGNiKSB7XG4gICAgbGV0IGVycjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc05vdGlmaWNhdGlvbiA9ICFyZXMuaWQ7XG5cbiAgICAgIGlmIChpc05vdGlmaWNhdGlvbikge1xuICAgICAgICBwcm9jZXNzTm90aWZpY2F0aW9uKHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzUmVzcG9uc2UocmVzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICBlcnIgPSBfZXJyO1xuICAgIH0gLy8gY29udGludWUgcHJvY2Vzc2luZyBzdHJlYW1cblxuXG4gICAgY2IoZXJyKTtcbiAgfVxuXG4gIGNvbnN0IHN0cmVhbSA9IG5ldyBEdXBsZXgoe1xuICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgcmVhZDogcmVhZE5vb3AsXG4gICAgd3JpdGU6IHByb2Nlc3NNZXNzYWdlXG4gIH0pO1xuXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQsIGVuZCkgPT4ge1xuICAgIC8vIHdyaXRlIHJlcSB0byBzdHJlYW1cbiAgICBzdHJlYW0ucHVzaChyZXEpOyAvLyByZWdpc3RlciByZXF1ZXN0IG9uIGlkIG1hcFxuXG4gICAgaWRNYXBbcmVxLmlkXSA9IHtcbiAgICAgIHJlcSxcbiAgICAgIHJlcyxcbiAgICAgIG5leHQsXG4gICAgICBlbmRcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZXZlbnRzLFxuICAgIG1pZGRsZXdhcmUsXG4gICAgc3RyZWFtXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTY2FmZm9sZE1pZGRsZXdhcmUoaGFuZGxlcnMpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW3JlcS5tZXRob2RdOyAvLyBpZiBubyBoYW5kbGVyLCByZXR1cm5cblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfSAvLyBpZiBoYW5kbGVyIGlzIGZuLCBjYWxsIGFzIG1pZGRsZXdhcmVcblxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzLCBuZXh0LCBlbmQpO1xuICAgIH0gLy8gaWYgaGFuZGxlciBpcyBzb21lIG90aGVyIHZhbHVlLCB1c2UgYXMgcmVzdWx0XG5cblxuICAgIHJlcy5yZXN1bHQgPSBoYW5kbGVyO1xuICAgIHJldHVybiBlbmQoKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlKCkge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0LCBfZW5kKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxJZCA9IHJlcS5pZDtcbiAgICBjb25zdCBuZXdJZCA9IHJhbmRvbUlkKCk7XG4gICAgcmVxLmlkID0gbmV3SWQ7XG4gICAgcmVzLmlkID0gbmV3SWQ7XG4gICAgbmV4dChkb25lID0+IHtcbiAgICAgIHJlcS5pZCA9IG9yaWdpbmFsSWQ7XG4gICAgICByZXMuaWQgPSBvcmlnaW5hbElkO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyTWlkZGxld2FyZShsb2dnZXIpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgXykgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZyhcIlJFUVwiLCByZXEsIFwiUkVTXCIsIHJlcyk7XG4gICAgbmV4dCgpO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQXN5bmNNaWRkbGV3YXJlKGFzeW5jTWlkZGxld2FyZSkge1xuICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAvLyBuZXh0UHJvbWlzZSBpcyB0aGUga2V5IHRvIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGl0IGlzIHJlc29sdmVkIGJ5IHRoZSByZXR1cm4gaGFuZGxlciBwYXNzZWQgdG8gdGhlXG4gICAgLy8gXCJuZXh0XCIgZnVuY3Rpb25cbiAgICBsZXQgcmVzb2x2ZU5leHRQcm9taXNlO1xuICAgIGNvbnN0IG5leHRQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICByZXNvbHZlTmV4dFByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGxldCByZXR1cm5IYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIGxldCBuZXh0V2FzQ2FsbGVkID0gZmFsc2U7IC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgdGhlIGNvbnN1bWVyJ3MgYXN5bmMgbWlkZGxld2FyZS5cblxuICAgIGNvbnN0IGFzeW5jTmV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgIG5leHRXYXNDYWxsZWQgPSB0cnVlOyAvLyBXZSBwYXNzIGEgcmV0dXJuIGhhbmRsZXIgdG8gbmV4dCgpLiBXaGVuIGl0IGlzIGNhbGxlZCBieSB0aGUgZW5naW5lLFxuICAgICAgLy8gdGhlIGNvbnN1bWVyJ3MgYXN5bmMgbWlkZGxld2FyZSB3aWxsIHJlc3VtZSBleGVjdXRpbmcuXG5cbiAgICAgIG5leHQocnVuUmV0dXJuSGFuZGxlcnNDYWxsYmFjayA9PiB7XG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgY29tZXMgZnJvbSBKUlBDRW5naW5lLl9ydW5SZXR1cm5IYW5kbGVyc1xuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2sgPSBydW5SZXR1cm5IYW5kbGVyc0NhbGxiYWNrO1xuICAgICAgICByZXNvbHZlTmV4dFByb21pc2UoKTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgbmV4dFByb21pc2U7XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhc3luY01pZGRsZXdhcmUocmVxLCByZXMsIGFzeW5jTmV4dCk7XG5cbiAgICAgIGlmIChuZXh0V2FzQ2FsbGVkKSB7XG4gICAgICAgIGF3YWl0IG5leHRQcm9taXNlOyAvLyB3ZSBtdXN0IHdhaXQgdW50aWwgdGhlIHJldHVybiBoYW5kbGVyIGlzIGNhbGxlZFxuXG4gICAgICAgIHJldHVybkhhbmRsZXJDYWxsYmFjayhudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZChudWxsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKHJldHVybkhhbmRsZXJDYWxsYmFjaykge1xuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbi8qKlxuICogQSBKU09OLVJQQyByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9jZXNzb3IuXG4gKiBHaXZlIGl0IGEgc3RhY2sgb2YgbWlkZGxld2FyZSwgcGFzcyBpdCByZXF1ZXN0cywgYW5kIGdldCBiYWNrIHJlc3BvbnNlcy5cbiAqL1xuXG5jbGFzcyBKUlBDRW5naW5lIGV4dGVuZHMgU2FmZUV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWlkZGxld2FyZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbWlkZGxld2FyZSA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBTZXJpYWxseSBleGVjdXRlcyB0aGUgZ2l2ZW4gc3RhY2sgb2YgbWlkZGxld2FyZS5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYW55IGVycm9yIGVuY291bnRlcmVkIGR1cmluZyBtaWRkbGV3YXJlIGV4ZWN1dGlvbixcbiAgICogYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgcmVxdWVzdCB3YXMgY29tcGxldGVkLCBhbmQgYW4gYXJyYXkgb2ZcbiAgICogbWlkZGxld2FyZS1kZWZpbmVkIHJldHVybiBoYW5kbGVycy5cbiAgICovXG5cblxuICBzdGF0aWMgYXN5bmMgX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIG1pZGRsZXdhcmVTdGFjaykge1xuICAgIGNvbnN0IHJldHVybkhhbmRsZXJzID0gW107XG4gICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlOyAvLyBHbyBkb3duIHN0YWNrIG9mIG1pZGRsZXdhcmUsIGNhbGwgYW5kIGNvbGxlY3Qgb3B0aW9uYWwgcmV0dXJuSGFuZGxlcnNcblxuICAgIGZvciAoY29uc3QgbWlkZGxld2FyZSBvZiBtaWRkbGV3YXJlU3RhY2spIHtcbiAgICAgIFtlcnJvciwgaXNDb21wbGV0ZV0gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlLCByZXR1cm5IYW5kbGVycyk7XG5cbiAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbZXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzLnJldmVyc2UoKV07XG4gIH1cbiAgLyoqXG4gICAqIFJ1bnMgYW4gaW5kaXZpZHVhbCBtaWRkbGV3YXJlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBhbnkgZXJyb3IgZW5jb3VudGVyZWQgZHVyaW5nIG1pZGRsZXdhcmUgZXhlY3Rpb24sXG4gICAqIGFuZCBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBlbmQuXG4gICAqL1xuXG5cbiAgc3RhdGljIF9ydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlLCByZXR1cm5IYW5kbGVycykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGVuZCA9IGVyciA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyIHx8IHJlcy5lcnJvcjtcblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuZXJyb3IgPSBzZXJpYWxpemVFcnJvcihlcnJvcik7XG4gICAgICAgIH0gLy8gVHJ1ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBzaG91bGQgZW5kXG5cblxuICAgICAgICByZXNvbHZlKFtlcnJvciwgdHJ1ZV0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV4dCA9IHJldHVybkhhbmRsZXIgPT4ge1xuICAgICAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICAgICAgZW5kKHJlcy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJldHVybkhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0dXJuSGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGVuZChuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICAgICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkpSUENFbmdpbmU6ICduZXh0JyByZXR1cm4gaGFuZGxlcnMgbXVzdCBiZSBmdW5jdGlvbnNcIlxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybkhhbmRsZXJzLnB1c2gocmV0dXJuSGFuZGxlcik7XG4gICAgICAgICAgfSAvLyBGYWxzZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBzaG91bGQgbm90IGVuZFxuXG5cbiAgICAgICAgICByZXNvbHZlKFtudWxsLCBmYWxzZV0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0LCBlbmQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2VyaWFsbHkgZXhlY3V0ZXMgYXJyYXkgb2YgcmV0dXJuIGhhbmRsZXJzLiBUaGUgcmVxdWVzdCBhbmQgcmVzcG9uc2UgYXJlXG4gICAqIGFzc3VtZWQgdG8gYmUgaW4gdGhlaXIgc2NvcGUuXG4gICAqL1xuXG5cbiAgc3RhdGljIGFzeW5jIF9ydW5SZXR1cm5IYW5kbGVycyhoYW5kbGVycykge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBoYW5kbGVycykge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBoYW5kbGVyKGVyciA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcmVzcG9uc2UgaGFzIG5laXRoZXIgYSByZXN1bHQgbm9yIGFuIGVycm9yLCBvciBpZlxuICAgKiB0aGUgXCJpc0NvbXBsZXRlXCIgZmxhZyBpcyBmYWxzeS5cbiAgICovXG5cblxuICBzdGF0aWMgX2NoZWNrRm9yQ29tcGxldGlvbihyZXEsIHJlcywgaXNDb21wbGV0ZSkge1xuICAgIGlmICghKFwicmVzdWx0XCIgaW4gcmVzKSAmJiAhKFwiZXJyb3JcIiBpbiByZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwiUmVzcG9uc2UgaGFzIG5vIGVycm9yIG9yIHJlc3VsdCBmb3IgcmVxdWVzdFwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQ29tcGxldGUpIHtcbiAgICAgIHRocm93IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgbWVzc2FnZTogXCJOb3RoaW5nIGVuZGVkIHJlcXVlc3RcIlxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIHRoZSBlbmdpbmUncyBtaWRkbGV3YXJlIHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gbWlkZGxld2FyZSAtIFRoZSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICovXG5cblxuICBwdXNoKG1pZGRsZXdhcmUpIHtcbiAgICB0aGlzLl9taWRkbGV3YXJlLnB1c2gobWlkZGxld2FyZSk7XG4gIH1cblxuICBoYW5kbGUocmVxLCBjYikge1xuICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNhbGxiYWNrXCIgbXVzdCBiZSBhIGZ1bmN0aW9uIGlmIHByb3ZpZGVkLicpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlcSkpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlQmF0Y2gocmVxLCBjYik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVCYXRjaChyZXEpO1xuICAgIH1cblxuICAgIGlmIChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZShyZXEsIGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZUhhbmRsZShyZXEpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoaXMgZW5naW5lIGFzIGEgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwdXNoZWQgdG8gb3RoZXJcbiAgICogZW5naW5lcy5cbiAgICpcbiAgICogQHJldHVybnMgVGhpcyBlbmdpbmUgYXMgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uLlxuICAgKi9cblxuXG4gIGFzTWlkZGxld2FyZSgpIHtcbiAgICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFttaWRkbGV3YXJlRXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzXSA9IGF3YWl0IEpSUENFbmdpbmUuX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIHRoaXMuX21pZGRsZXdhcmUpO1xuXG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpO1xuICAgICAgICAgIHJldHVybiBlbmQobWlkZGxld2FyZUVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFzeW5jIGhhbmRsZXJDYWxsYmFjayA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEpSUENFbmdpbmUuX3J1blJldHVybkhhbmRsZXJzKHJldHVybkhhbmRsZXJzKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJDYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXJDYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlbmQoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBhc3luYyBfaGFuZGxlQmF0Y2gocmVxcywgY2IpIHtcbiAgICAvLyBUaGUgb3JkZXIgaGVyZSBpcyBpbXBvcnRhbnRcbiAgICB0cnkge1xuICAgICAgLy8gMi4gV2FpdCBmb3IgYWxsIHJlcXVlc3RzIHRvIGZpbmlzaCwgb3IgdGhyb3cgb24gc29tZSBraW5kIG9mIGZhdGFsXG4gICAgICAvLyBlcnJvclxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIC8vIDEuIEJlZ2luIGV4ZWN1dGluZyBlYWNoIHJlcXVlc3QgaW4gdGhlIG9yZGVyIHJlY2VpdmVkXG4gICAgICByZXFzLm1hcCh0aGlzLl9wcm9taXNlSGFuZGxlLmJpbmQodGhpcykpKTsgLy8gMy4gUmV0dXJuIGJhdGNoIHJlc3BvbnNlXG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gY2IobnVsbCwgcmVzcG9uc2VzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBjYihlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQSBwcm9taXNlLXdyYXBwZWQgX2hhbmRsZS5cbiAgICovXG5cblxuICBfcHJvbWlzZUhhbmRsZShyZXEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGUocmVxLCAoX2VyciwgcmVzKSA9PiB7XG4gICAgICAgIC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGEgcmVzcG9uc2UsIGFuZCBpdCB3aWxsIGFsd2F5cyBoYXZlIGFueSBlcnJvclxuICAgICAgICAvLyB0aGF0IGlzIGNhdWdodCBhbmQgcHJvcGFnYXRlZC5cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhhdCB0aGUgcmVxdWVzdCBvYmplY3QgaXMgdmFsaWQsIHByb2Nlc3NlcyBpdCwgYW5kIHBhc3NlcyBhbnlcbiAgICogZXJyb3IgYW5kIHRoZSByZXNwb25zZSBvYmplY3QgdG8gdGhlIGdpdmVuIGNhbGxiYWNrLlxuICAgKlxuICAgKiBEb2VzIG5vdCByZWplY3QuXG4gICAqL1xuXG5cbiAgYXN5bmMgX2hhbmRsZShjYWxsZXJSZXEsIGNiKSB7XG4gICAgaWYgKCFjYWxsZXJSZXEgfHwgQXJyYXkuaXNBcnJheShjYWxsZXJSZXEpIHx8IHR5cGVvZiBjYWxsZXJSZXEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBcInJlcXVlc3QgbXVzdCBiZSBwbGFpbiBvYmplY3RcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2IoZXJyb3IsIHtcbiAgICAgICAgaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgZXJyb3JcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsbGVyUmVxLm1ldGhvZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwibWV0aG9kIG11c3QgYmUgc3RyaW5nXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNiKGVycm9yLCB7XG4gICAgICAgIGlkOiBjYWxsZXJSZXEuaWQsXG4gICAgICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgICAgIGVycm9yXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXEgPSBfb2JqZWN0U3ByZWFkJDEoe30sIGNhbGxlclJlcSk7XG5cbiAgICBjb25zdCByZXMgPSB7XG4gICAgICBpZDogcmVxLmlkLFxuICAgICAganNvbnJwYzogcmVxLmpzb25ycGNcbiAgICB9O1xuICAgIGxldCBlcnJvciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fcHJvY2Vzc1JlcXVlc3QocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgLy8gQSByZXF1ZXN0IGhhbmRsZXIgZXJyb3IsIGEgcmUtdGhyb3duIG1pZGRsZXdhcmUgZXJyb3IsIG9yIHNvbWV0aGluZ1xuICAgICAgLy8gdW5leHBlY3RlZC5cbiAgICAgIGVycm9yID0gX2Vycm9yO1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgLy8gRW5zdXJlIG5vIHJlc3VsdCBpcyBwcmVzZW50IG9uIGFuIGVycm9yZWQgcmVzcG9uc2VcbiAgICAgIGRlbGV0ZSByZXMucmVzdWx0O1xuXG4gICAgICBpZiAoIXJlcy5lcnJvcikge1xuICAgICAgICByZXMuZXJyb3IgPSBzZXJpYWxpemVFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNiKGVycm9yLCByZXMpO1xuICB9XG4gIC8qKlxuICAgKiBGb3IgdGhlIGdpdmVuIHJlcXVlc3QgYW5kIHJlc3BvbnNlLCBydW5zIGFsbCBtaWRkbGV3YXJlIGFuZCB0aGVpciByZXR1cm5cbiAgICogaGFuZGxlcnMsIGlmIGFueSwgYW5kIGVuc3VyZXMgdGhhdCBpbnRlcm5hbCByZXF1ZXN0IHByb2Nlc3Npbmcgc2VtYW50aWNzXG4gICAqIGFyZSBzYXRpc2ZpZWQuXG4gICAqL1xuXG5cbiAgYXN5bmMgX3Byb2Nlc3NSZXF1ZXN0KHJlcSwgcmVzKSB7XG4gICAgY29uc3QgW2Vycm9yLCBpc0NvbXBsZXRlLCByZXR1cm5IYW5kbGVyc10gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5BbGxNaWRkbGV3YXJlKHJlcSwgcmVzLCB0aGlzLl9taWRkbGV3YXJlKTsgLy8gVGhyb3cgaWYgXCJlbmRcIiB3YXMgbm90IGNhbGxlZCwgb3IgaWYgdGhlIHJlc3BvbnNlIGhhcyBuZWl0aGVyIGEgcmVzdWx0XG4gICAgLy8gbm9yIGFuIGVycm9yLlxuXG4gICAgSlJQQ0VuZ2luZS5fY2hlY2tGb3JDb21wbGV0aW9uKHJlcSwgcmVzLCBpc0NvbXBsZXRlKTsgLy8gVGhlIHJldHVybiBoYW5kbGVycyBzaG91bGQgcnVuIGV2ZW4gaWYgYW4gZXJyb3Igd2FzIGVuY291bnRlcmVkIGR1cmluZ1xuICAgIC8vIG1pZGRsZXdhcmUgcHJvY2Vzc2luZy5cblxuXG4gICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpOyAvLyBOb3cgd2UgcmUtdGhyb3cgdGhlIG1pZGRsZXdhcmUgcHJvY2Vzc2luZyBlcnJvciwgaWYgYW55LCB0byBjYXRjaCBpdFxuICAgIC8vIGZ1cnRoZXIgdXAgdGhlIGNhbGwgY2hhaW4uXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG59XG5mdW5jdGlvbiBtZXJnZU1pZGRsZXdhcmUobWlkZGxld2FyZVN0YWNrKSB7XG4gIGNvbnN0IGVuZ2luZSA9IG5ldyBKUlBDRW5naW5lKCk7XG4gIG1pZGRsZXdhcmVTdGFjay5mb3JFYWNoKG1pZGRsZXdhcmUgPT4gZW5naW5lLnB1c2gobWlkZGxld2FyZSkpO1xuICByZXR1cm4gZW5naW5lLmFzTWlkZGxld2FyZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlRW5naW5lU3RyZWFtKG9wdHMpIHtcbiAgaWYgKCFvcHRzIHx8ICFvcHRzLmVuZ2luZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZW5naW5lIHBhcmFtZXRlciFcIik7XG4gIH1cblxuICBjb25zdCB7XG4gICAgZW5naW5lXG4gIH0gPSBvcHRzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5cbiAgbGV0IHN0cmVhbTtcblxuICBmdW5jdGlvbiByZWFkKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZShyZXEsIF9lbmNvZGluZywgY2IpIHtcbiAgICBlbmdpbmUuaGFuZGxlKHJlcSwgKF9lcnIsIHJlcykgPT4ge1xuICAgICAgc3RyZWFtLnB1c2gocmVzKTtcbiAgICB9KTtcbiAgICBjYigpO1xuICB9XG5cbiAgc3RyZWFtID0gbmV3IER1cGxleCh7XG4gICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICByZWFkLFxuICAgIHdyaXRlXG4gIH0pOyAvLyBmb3J3YXJkIG5vdGlmaWNhdGlvbnNcblxuICBpZiAoZW5naW5lLm9uKSB7XG4gICAgZW5naW5lLm9uKFwibm90aWZpY2F0aW9uXCIsIG1lc3NhZ2UgPT4ge1xuICAgICAgc3RyZWFtLnB1c2gobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyZWFtO1xufVxuXG5jbGFzcyBTdWJzdHJlYW0gZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIHBhcmVudCxcbiAgICAgIG5hbWVcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcih7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcGFyZW50XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbmFtZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG4gIC8qKlxuICAgKiBFeHBsaWNpdGx5IHNldHMgcmVhZCBvcGVyYXRpb25zIHRvIGEgbm8tb3AuXG4gICAqL1xuXG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZGF0YSBzaG91bGQgYmUgd3JpdHRlbiB0byB0aGlzIHdyaXRhYmxlIHN0cmVhbS5cbiAgICpcbiAgICogQHBhcmFtIGNodW5rIC0gQXJiaXRyYXJ5IG9iamVjdCB0byB3cml0ZVxuICAgKiBAcGFyYW0gZW5jb2RpbmcgLSBFbmNvZGluZyB0byB1c2Ugd2hlbiB3cml0aW5nIHBheWxvYWRcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gQ2FsbGVkIHdoZW4gd3JpdGluZyBpcyBjb21wbGV0ZSBvciBhbiBlcnJvciBvY2N1cnNcbiAgICovXG5cblxuICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9wYXJlbnQucHVzaCh7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgZGF0YTogY2h1bmtcbiAgICB9KTtcblxuICAgIGNhbGxiYWNrKCk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgSUdOT1JFX1NVQlNUUkVBTSA9IFN5bWJvbChcIklHTk9SRV9TVUJTVFJFQU1cIik7XG5jbGFzcyBPYmplY3RNdWx0aXBsZXggZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgc3VwZXIoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcHRzKSwge30sIHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWVcbiAgICB9KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3Vic3RyZWFtc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0U3RyZWFtXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9zdWJzdHJlYW1zID0ge307XG4gIH1cblxuICBjcmVhdGVTdHJlYW0obmFtZSkge1xuICAgIC8vIHZhbGlkYXRlIG5hbWVcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIG5hbWUgbXVzdCBub3QgYmUgZW1wdHlcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIFN1YnN0cmVhbSBmb3IgbmFtZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBhbHJlYWR5IGV4aXN0c1wiKSk7XG4gICAgfSAvLyBjcmVhdGUgc3Vic3RyZWFtXG5cblxuICAgIGNvbnN0IHN1YnN0cmVhbSA9IG5ldyBTdWJzdHJlYW0oe1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZVxuICAgIH0pO1xuICAgIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0gPSBzdWJzdHJlYW07IC8vIGxpc3RlbiBmb3IgcGFyZW50IHN0cmVhbSB0byBlbmRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG5cbiAgICBhbnlTdHJlYW1FbmQodGhpcywgX2Vycm9yID0+IHN1YnN0cmVhbS5kZXN0cm95KF9lcnJvciB8fCB1bmRlZmluZWQpKTtcbiAgICByZXR1cm4gc3Vic3RyZWFtO1xuICB9IC8vIGlnbm9yZSBzdHJlYW1zIChkb250IGRpc3BsYXkgb3JwaGFuZWQgZGF0YSB3YXJuaW5nKVxuXG5cbiAgaWdub3JlU3RyZWFtKG5hbWUpIHtcbiAgICAvLyB2YWxpZGF0ZSBuYW1lXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBuYW1lIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdWJzdHJlYW1zW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBTdWJzdHJlYW0gZm9yIG5hbWUgXFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIgYWxyZWFkeSBleGlzdHNcIikpO1xuICAgIH0gLy8gc2V0XG5cblxuICAgIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0gPSBJR05PUkVfU1VCU1RSRUFNO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIF93cml0ZShjaHVuaywgX2VuY29kaW5nLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBkYXRhXG4gICAgfSA9IGNodW5rO1xuXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiT2JqZWN0TXVsdGlwbGV4IC0gbWFsZm9ybWVkIGNodW5rIHdpdGhvdXQgbmFtZSBcXFwiXCIuY29uY2F0KGNodW5rLCBcIlxcXCJcIikpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfSAvLyBnZXQgY29ycmVzcG9uZGluZyBzdWJzdHJlYW1cblxuXG4gICAgY29uc3Qgc3Vic3RyZWFtID0gdGhpcy5fc3Vic3RyZWFtc1tuYW1lXTtcblxuICAgIGlmICghc3Vic3RyZWFtKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiT2JqZWN0TXVsdGlwbGV4IC0gb3JwaGFuZWQgZGF0YSBmb3Igc3RyZWFtIFxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiXCIpKTtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0gLy8gcHVzaCBkYXRhIGludG8gc3Vic3RyZWFtXG5cblxuICAgIGlmIChzdWJzdHJlYW0gIT09IElHTk9SRV9TVUJTVFJFQU0pIHtcbiAgICAgIHN1YnN0cmVhbS5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG5cbn0gLy8gdXRpbFxuXG5mdW5jdGlvbiBhbnlTdHJlYW1FbmQoc3RyZWFtLCBfY2IpIHtcbiAgY29uc3QgY2IgPSBvbmNlKF9jYik7XG4gIGVvcyhzdHJlYW0sIHtcbiAgICByZWFkYWJsZTogZmFsc2VcbiAgfSwgY2IpO1xuICBlb3Moc3RyZWFtLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0sIGNiKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBNdWx0aXBsZXgoc3RyZWFtKSB7XG4gIGNvbnN0IG11eCA9IG5ldyBPYmplY3RNdWx0aXBsZXgoKTtcblxuICBtdXguZ2V0U3RyZWFtID0gZnVuY3Rpb24gc3RyZWFtSGVscGVyKG5hbWUpIHtcbiAgICBpZiAodGhpcy5fc3Vic3RyZWFtc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlU3RyZWFtKG5hbWUpO1xuICB9O1xuXG4gIHB1bXAoc3RyZWFtLCBtdXgsIHN0cmVhbSwgZXJyID0+IHtcbiAgICBpZiAoZXJyKSB3aW5kb3cuY29uc29sZS5lcnJvcihlcnIpO1xuICB9KTtcbiAgcmV0dXJuIG11eDtcbn1cblxuY2xhc3MgUG9zdE1lc3NhZ2VTdHJlYW0gZXh0ZW5kcyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0ge1xuICBfcG9zdE1lc3NhZ2UoZGF0YSkge1xuICAgIGxldCBvcmlnaW5Db25zdHJhaW50ID0gdGhpcy5fdGFyZ2V0T3JpZ2luO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCBkYXRhT2JqID0gZGF0YTtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhT2JqLmRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3QgZGF0YU9iakRhdGEgPSBkYXRhT2JqLmRhdGE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YU9iakRhdGEucGFyYW1zKSAmJiBkYXRhT2JqRGF0YS5wYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGRhdGFPYmpEYXRhUGFyYW0gPSBkYXRhT2JqRGF0YS5wYXJhbXNbMF07XG5cbiAgICAgICAgICBpZiAoZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luKSB7XG4gICAgICAgICAgICBvcmlnaW5Db25zdHJhaW50ID0gZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luO1xuICAgICAgICAgIH0gLy8gYWRkIGEgY29uc3RyYWludCBmb3IgdGhlIHJlc3BvbnNlXG5cblxuICAgICAgICAgIGRhdGFPYmpEYXRhUGFyYW0uX29yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgdGFyZ2V0OiB0aGlzLl90YXJnZXQsXG4gICAgICBkYXRhXG4gICAgfSwgb3JpZ2luQ29uc3RyYWludCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0sIElHTk9SRV9TVUJTVFJFQU0sIEpSUENFbmdpbmUsIE9iamVjdE11bHRpcGxleCwgUG9zdE1lc3NhZ2VTdHJlYW0sIFNhZmVFdmVudEVtaXR0ZXIsIFNlcmlhbGl6YWJsZUVycm9yLCBTdWJzdHJlYW0sIGNyZWF0ZUFzeW5jTWlkZGxld2FyZSwgY3JlYXRlRW5naW5lU3RyZWFtLCBjcmVhdGVFcnJvck1pZGRsZXdhcmUsIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlLCBjcmVhdGVMb2dnZXJNaWRkbGV3YXJlLCBjcmVhdGVTY2FmZm9sZE1pZGRsZXdhcmUsIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUsIGdldFJwY1Byb21pc2VDYWxsYmFjaywgbWVyZ2VNaWRkbGV3YXJlLCBzZXJpYWxpemVFcnJvciwgc2V0dXBNdWx0aXBsZXggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZW5sb2dpbkpycGMuZXNtLmpzLm1hcFxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGZyb20gXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlRnVuY3Rpb24gZnJvbSBcIi4vaXNOYXRpdmVGdW5jdGlvbi5qc1wiO1xuaW1wb3J0IGNvbnN0cnVjdCBmcm9tIFwiLi9jb25zdHJ1Y3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCB7IGdlbmVyYXRlUHJpdmF0ZSwgZ2V0UHVibGljLCBkZWNyeXB0IH0gZnJvbSAnQHRvcnVzbGFicy9lY2NyeXB0byc7XG5pbXBvcnQgeyBwb3N0LCBnZW5lcmF0ZUpzb25SUENPYmplY3QsIGdldCwgc2V0QVBJS2V5LCBzZXRFbWJlZEhvc3QgfSBmcm9tICdAdG9ydXNsYWJzL2h0dHAtaGVscGVycyc7XG5pbXBvcnQgQk4gZnJvbSAnYm4uanMnO1xuaW1wb3J0IHsgZWMgfSBmcm9tICdlbGxpcHRpYyc7XG5pbXBvcnQgSnNvblN0cmluZ2lmeSBmcm9tICdqc29uLXN0YWJsZS1zdHJpbmdpZnknO1xuaW1wb3J0IHsga2VjY2FrMjU2LCB0b0NoZWNrc3VtQWRkcmVzcyB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuaW1wb3J0IGxvZ2xldmVsIGZyb20gJ2xvZ2xldmVsJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgX3dyYXBOYXRpdmVTdXBlciBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlcic7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuXG52YXIgbG9nID0gbG9nbGV2ZWwuZ2V0TG9nZ2VyKCd0b3J1cy5qcycpO1xubG9nLmRpc2FibGVBbGwoKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDEoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxudmFyIFNvbWVFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhTb21lRXJyb3IsIF9FcnJvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQxKFNvbWVFcnJvcik7XG5cbiAgZnVuY3Rpb24gU29tZUVycm9yKF9yZWYpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgZXJyb3JzID0gX3JlZi5lcnJvcnMsXG4gICAgICAgIHJlc3BvbnNlcyA9IF9yZWYucmVzcG9uc2VzLFxuICAgICAgICBwcmVkaWNhdGUgPSBfcmVmLnByZWRpY2F0ZTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb21lRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnVW5hYmxlIHRvIHJlc29sdmUgZW5vdWdoIHByb21pc2VzLicpO1xuICAgIF90aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICBfdGhpcy5yZXNwb25zZXMgPSByZXNwb25zZXM7XG4gICAgX3RoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoU29tZUVycm9yKTtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG52YXIgU29tZSA9IGZ1bmN0aW9uIFNvbWUocHJvbWlzZXMsIHByZWRpY2F0ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBmaW5pc2hlZENvdW50ID0gMDtcbiAgICB2YXIgc2hhcmVkU3RhdGUgPSB7XG4gICAgICByZXNvbHZlZDogZmFsc2VcbiAgICB9O1xuICAgIHZhciBlcnJvckFyciA9IG5ldyBBcnJheShwcm9taXNlcy5sZW5ndGgpLmZpbGwodW5kZWZpbmVkKTtcbiAgICB2YXIgcmVzdWx0QXJyID0gbmV3IEFycmF5KHByb21pc2VzLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpO1xuICAgIHZhciBwcmVkaWNhdGVFcnJvcjtcbiAgICBwcm9taXNlcy5mb3JFYWNoKGZ1bmN0aW9uICh4LCBpbmRleCkge1xuICAgICAgeC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIHJlc3VsdEFycltpbmRleF0gPSByZXNwO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGVycm9yQXJyW2luZGV4XSA9IGVycm9yO1xuICAgICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaGFyZWRTdGF0ZS5yZXNvbHZlZCkgcmV0dXJuO1xuICAgICAgICBwcmVkaWNhdGUocmVzdWx0QXJyLnNsaWNlKDApLCBzaGFyZWRTdGF0ZSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHNoYXJlZFN0YXRlLnJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIC8vIGxvZyBvbmx5IHRoZSBsYXN0IHByZWRpY2F0ZSBlcnJvclxuICAgICAgICAgIHByZWRpY2F0ZUVycm9yID0gZXJyb3I7XG4gICAgICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICBmaW5pc2hlZENvdW50ICs9IDE7XG5cbiAgICAgICAgICBpZiAoZmluaXNoZWRDb3VudCA9PT0gcHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gT2JqZWN0LnZhbHVlcyhyZXN1bHRBcnIucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHopIHtcbiAgICAgICAgICAgICAgdmFyIF9lcnJvciRkYXRhO1xuXG4gICAgICAgICAgICAgIHZhciBfcmVmMiA9IHogfHwge30sXG4gICAgICAgICAgICAgICAgICBpZCA9IF9yZWYyLmlkLFxuICAgICAgICAgICAgICAgICAgZXJyb3IgPSBfcmVmMi5lcnJvcjtcblxuICAgICAgICAgICAgICBpZiAoKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2Vycm9yJGRhdGEgPSBlcnJvci5kYXRhKSA9PT0gbnVsbCB8fCBfZXJyb3IkZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Vycm9yJGRhdGEubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZGF0YS5zdGFydHNXaXRoKCdFcnJvciBvY2N1cnJlZCB3aGlsZSB2ZXJpZnlpbmcgcGFyYW1zJykpIGFjY1tpZF0gPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZXJyb3IuZGF0YSk7ZWxzZSBhY2NbaWRdID0gZXJyb3IuZGF0YTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSkpO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gRm9ybWF0LWFibGUgZXJyb3JzXG4gICAgICAgICAgICAgIHZhciBtc2cgPSBlcnJvcnMubGVuZ3RoID4gMSA/IFwiXFxuXCIuY29uY2F0KGVycm9ycy5tYXAoZnVuY3Rpb24gKGl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXFx1MjAyMiBcIi5jb25jYXQoaXQpO1xuICAgICAgICAgICAgICB9KS5qb2luKCdcXG4nKSkgOiBlcnJvcnNbMF07XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IobXNnKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgX3ByZWRpY2F0ZUVycm9yO1xuXG4gICAgICAgICAgICAgIHJlamVjdChuZXcgU29tZUVycm9yKHtcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9yQXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlczogcmVzdWx0QXJyLFxuICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogKChfcHJlZGljYXRlRXJyb3IgPSBwcmVkaWNhdGVFcnJvcikgPT09IG51bGwgfHwgX3ByZWRpY2F0ZUVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJlZGljYXRlRXJyb3IubWVzc2FnZSkgfHwgcHJlZGljYXRlRXJyb3JcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxudmFyIEdldE9yU2V0Tm9uY2VFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhHZXRPclNldE5vbmNlRXJyb3IsIF9FcnJvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihHZXRPclNldE5vbmNlRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIEdldE9yU2V0Tm9uY2VFcnJvcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2V0T3JTZXROb25jZUVycm9yKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoR2V0T3JTZXROb25jZUVycm9yKTtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG52YXIga0NvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uIGtDb21iaW5hdGlvbnMocywgaykge1xuICB2YXIgc2V0ID0gcztcblxuICBpZiAodHlwZW9mIHNldCA9PT0gJ251bWJlcicpIHtcbiAgICBzZXQgPSBBcnJheS5mcm9tKHtcbiAgICAgIGxlbmd0aDogc2V0XG4gICAgfSwgZnVuY3Rpb24gKF8sIGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGsgPiBzZXQubGVuZ3RoIHx8IGsgPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmIChrID09PSBzZXQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtzZXRdO1xuICB9XG5cbiAgaWYgKGsgPT09IDEpIHtcbiAgICByZXR1cm4gc2V0LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXIpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFjYyksIFtbY3VyXV0pO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHZhciBjb21icyA9IFtdO1xuICB2YXIgdGFpbENvbWJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPD0gc2V0Lmxlbmd0aCAtIGsgKyAxOyBpICs9IDEpIHtcbiAgICB0YWlsQ29tYnMgPSBrQ29tYmluYXRpb25zKHNldC5zbGljZShpICsgMSksIGsgLSAxKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGFpbENvbWJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb21icy5wdXNoKFtzZXRbaV1dLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGFpbENvbWJzW2pdKSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21icztcbn07XG52YXIgdGhyZXNob2xkU2FtZSA9IGZ1bmN0aW9uIHRocmVzaG9sZFNhbWUoYXJyLCB0KSB7XG4gIHZhciBoYXNoTWFwID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgc3RyID0gSnNvblN0cmluZ2lmeShhcnJbaV0pO1xuICAgIGhhc2hNYXBbc3RyXSA9IGhhc2hNYXBbc3RyXSA/IGhhc2hNYXBbc3RyXSArIDEgOiAxO1xuXG4gICAgaWYgKGhhc2hNYXBbc3RyXSA9PT0gdCkge1xuICAgICAgcmV0dXJuIGFycltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbnZhciBrZXlMb29rdXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCkge1xuICAgIHZhciBsb29rdXBQcm9taXNlcztcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbG9va3VwUHJvbWlzZXMgPSBlbmRwb2ludHMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBwb3N0KHgsIGdlbmVyYXRlSnNvblJQQ09iamVjdCgnVmVyaWZpZXJMb29rdXBSZXF1ZXN0Jywge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgICB2ZXJpZmllcl9pZDogdmVyaWZpZXJJZC50b1N0cmluZygpXG4gICAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvZy5lcnJvcignbG9va3VwIHJlcXVlc3QgZmFpbGVkJywgZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgU29tZShsb29rdXBQcm9taXNlcywgZnVuY3Rpb24gKGxvb2t1cFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgdmFyIGxvb2t1cFNoYXJlcyA9IGxvb2t1cFJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uICh4MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4MTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHZhciBlcnJvclJlc3VsdCA9IHRocmVzaG9sZFNhbWUobG9va3VwU2hhcmVzLm1hcChmdW5jdGlvbiAoeDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDIgJiYgeDIuZXJyb3I7XG4gICAgICAgICAgICAgIH0pLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTtcbiAgICAgICAgICAgICAgdmFyIGtleVJlc3VsdCA9IHRocmVzaG9sZFNhbWUobG9va3VwU2hhcmVzLm1hcChmdW5jdGlvbiAoeDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDMgJiYgeDMucmVzdWx0O1xuICAgICAgICAgICAgICB9KSwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7XG5cbiAgICAgICAgICAgICAgaWYgKGtleVJlc3VsdCB8fCBlcnJvclJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAga2V5UmVzdWx0OiBrZXlSZXN1bHQsXG4gICAgICAgICAgICAgICAgICBlcnJvclJlc3VsdDogZXJyb3JSZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIHJlc3VsdHMgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGxvb2t1cFJlc3VsdHMpKSkpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBrZXlMb29rdXAoX3gsIF94MiwgX3gzKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcbnZhciB3YWl0S2V5TG9va3VwID0gZnVuY3Rpb24gd2FpdEtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkLCB0aW1lb3V0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBrZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9KTtcbn07XG52YXIga2V5QXNzaWduID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCBsYXN0UG9pbnQsIGZpcnN0UG9pbnQsIHZlcmlmaWVyLCB2ZXJpZmllcklkKSB7XG4gICAgdmFyIG5vZGVOdW0sIGluaXRpYWxQb2ludCwgZGF0YSwgc2lnbmVkRGF0YSwgYWNjZXB0ZWRFcnJvck1zZ3M7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAobGFzdFBvaW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbm9kZU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZHBvaW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgICBpbml0aWFsUG9pbnQgPSBub2RlTnVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm9kZU51bSA9IGxhc3RQb2ludCAlIGVuZHBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKG5vZGVOdW0gPT09IGZpcnN0UG9pbnQpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTG9vcGVkIHRocm91Z2ggYWxsJyk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAoZmlyc3RQb2ludCAhPT0gdW5kZWZpbmVkKSBpbml0aWFsUG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICAgICAgZGF0YSA9IGdlbmVyYXRlSnNvblJQQ09iamVjdCgnS2V5QXNzaWduJywge1xuICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgIHZlcmlmaWVyX2lkOiB2ZXJpZmllcklkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSA1O1xuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA4O1xuICAgICAgICAgICAgcmV0dXJuIHBvc3QoJ2h0dHBzOi8vc2lnbmVyLnRvci51cy9hcGkvc2lnbicsIGRhdGEsIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIHB1YktleVg6IHRvcnVzTm9kZVB1YnNbbm9kZU51bV0uWCxcbiAgICAgICAgICAgICAgICBwdWJLZXlZOiB0b3J1c05vZGVQdWJzW25vZGVOdW1dLllcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgc2lnbmVkRGF0YSA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgcG9zdChlbmRwb2ludHNbbm9kZU51bV0sIF9vYmplY3RTcHJlYWQkMShfb2JqZWN0U3ByZWFkJDEoe30sIGRhdGEpLCBzaWduZWREYXRhKSwge1xuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAxMjtcbiAgICAgICAgICAgIF9jb250ZXh0Mi50MCA9IF9jb250ZXh0MltcImNhdGNoXCJdKDUpO1xuICAgICAgICAgICAgbG9nLmVycm9yKF9jb250ZXh0Mi50MCk7XG4gICAgICAgICAgICBhY2NlcHRlZEVycm9yTXNncyA9IFsvLyBTbG93IG5vZGVcbiAgICAgICAgICAgICdUaW1lZCBvdXQnLCAvLyBIYXBwZW5zIHdoZW4gdGhlIG5vZGUgaXMgbm90IHJlYWNoYWJsZSAoZG5zIGlzc3VlIGV0YylcbiAgICAgICAgICAgICdUeXBlRXJyb3I6IEZhaWxlZCB0byBmZXRjaCcsIC8vIEFsbCBleGNlcHQgaU9TIGFuZCBGaXJlZm94XG4gICAgICAgICAgICAnVHlwZUVycm9yOiBjYW5jZWxsZWQnLCAvLyBpT1NcbiAgICAgICAgICAgICdUeXBlRXJyb3I6IE5ldHdvcmtFcnJvciB3aGVuIGF0dGVtcHRpbmcgdG8gZmV0Y2ggcmVzb3VyY2UuJyAvLyBGaXJlZm94XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBpZiAoIWFjY2VwdGVkRXJyb3JNc2dzLmluY2x1ZGVzKF9jb250ZXh0Mi50MC5tZXNzYWdlKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDE4O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwga2V5QXNzaWduKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywgbm9kZU51bSArIDEsIGluaXRpYWxQb2ludCwgdmVyaWZpZXIsIHZlcmlmaWVySWQpKTtcblxuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb3JyeSwgdGhlIFRvcnVzIE5ldHdvcmsgdGhhdCBwb3dlcnMgV2ViM0F1dGggaXMgY3VycmVudGx5IHZlcnkgYnVzeS5cXG4gICAgV2Ugd2lsbCBnZW5lcmF0ZSB5b3VyIGtleSBpbiB0aW1lLiBQbHMgdHJ5IGFnYWluIGxhdGVyLiBcXG5cXG4gICAgXCIuY29uY2F0KF9jb250ZXh0Mi50MC5tZXNzYWdlIHx8ICcnKSk7XG5cbiAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIsIG51bGwsIFtbNSwgMTJdXSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24ga2V5QXNzaWduKF94NCwgX3g1LCBfeDYsIF94NywgX3g4LCBfeDkpIHtcbiAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbi8vIG9mIFRvcnVzIG5vZGVzIHRvIGhhbmRsZSBtYWxpY2lvdXMgbm9kZSByZXNwb25zZXNcblxudmFyIFRvcnVzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVG9ydXMoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJGVuYWJsZU9uZUtleSA9IF9yZWYuZW5hYmxlT25lS2V5LFxuICAgICAgICBlbmFibGVPbmVLZXkgPSBfcmVmJGVuYWJsZU9uZUtleSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGVuYWJsZU9uZUtleSxcbiAgICAgICAgX3JlZiRtZXRhZGF0YUhvc3QgPSBfcmVmLm1ldGFkYXRhSG9zdCxcbiAgICAgICAgbWV0YWRhdGFIb3N0ID0gX3JlZiRtZXRhZGF0YUhvc3QgPT09IHZvaWQgMCA/ICdodHRwczovL21ldGFkYXRhLnRvci51cycgOiBfcmVmJG1ldGFkYXRhSG9zdCxcbiAgICAgICAgX3JlZiRhbGxvd0hvc3QgPSBfcmVmLmFsbG93SG9zdCxcbiAgICAgICAgYWxsb3dIb3N0ID0gX3JlZiRhbGxvd0hvc3QgPT09IHZvaWQgMCA/ICdodHRwczovL3NpZ25lci50b3IudXMvYXBpL2FsbG93JyA6IF9yZWYkYWxsb3dIb3N0LFxuICAgICAgICBfcmVmJHNlcnZlclRpbWVPZmZzZXQgPSBfcmVmLnNlcnZlclRpbWVPZmZzZXQsXG4gICAgICAgIHNlcnZlclRpbWVPZmZzZXQgPSBfcmVmJHNlcnZlclRpbWVPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfcmVmJHNlcnZlclRpbWVPZmZzZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9ydXMpO1xuXG4gICAgdGhpcy5lYyA9IG5ldyBlYygnc2VjcDI1NmsxJyk7XG4gICAgdGhpcy5tZXRhZGF0YUhvc3QgPSBtZXRhZGF0YUhvc3Q7XG4gICAgdGhpcy5hbGxvd0hvc3QgPSBhbGxvd0hvc3Q7XG4gICAgdGhpcy5lbmFibGVPbmVLZXkgPSBlbmFibGVPbmVLZXk7XG4gICAgdGhpcy5zZXJ2ZXJUaW1lT2Zmc2V0ID0gc2VydmVyVGltZU9mZnNldCB8fCAwOyAvLyBtc1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRvcnVzLCBbe1xuICAgIGtleTogXCJnZXRVc2VyVHlwZUFuZEFkZHJlc3NcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBOb3RlOiB1c2UgdGhpcyBmdW5jdGlvbiBvbmx5IGZvciBvcGVubG9naW4gdGtleSBhY2NvdW50IGxvb2t1cHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRVc2VyVHlwZUFuZEFkZHJlc3MgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywgX3JlZjIpIHtcbiAgICAgICAgdmFyIHZlcmlmaWVyLFxuICAgICAgICAgICAgdmVyaWZpZXJJZCxcbiAgICAgICAgICAgIGRvZXNLZXlBc3NpZ24sXG4gICAgICAgICAgICBfcmVmMyxcbiAgICAgICAgICAgIGtleVJlc3VsdCxcbiAgICAgICAgICAgIGVycm9yUmVzdWx0LFxuICAgICAgICAgICAgaXNOZXdLZXksXG4gICAgICAgICAgICBmaW5hbEtleVJlc3VsdCxcbiAgICAgICAgICAgIGFzc2lnblJlc3VsdCxcbiAgICAgICAgICAgIF9maW5hbEtleVJlc3VsdCRrZXlzJCxcbiAgICAgICAgICAgIFgsXG4gICAgICAgICAgICBZLFxuICAgICAgICAgICAgdHlwZU9mVXNlcixcbiAgICAgICAgICAgIG5vbmNlLFxuICAgICAgICAgICAgcHViTm9uY2UsXG4gICAgICAgICAgICBtb2RpZmllZFB1YktleSxcbiAgICAgICAgICAgIHVwZ3JhZGVkLFxuICAgICAgICAgICAgX3lpZWxkJHRoaXMkZ2V0T3JTZXROLFxuICAgICAgICAgICAgZmluYWxYLFxuICAgICAgICAgICAgZmluYWxZLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIF9hcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdmVyaWZpZXIgPSBfcmVmMi52ZXJpZmllciwgdmVyaWZpZXJJZCA9IF9yZWYyLnZlcmlmaWVySWQ7XG4gICAgICAgICAgICAgICAgZG9lc0tleUFzc2lnbiA9IF9hcmdzLmxlbmd0aCA+IDMgJiYgX2FyZ3NbM10gIT09IHVuZGVmaW5lZCA/IF9hcmdzWzNdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9jb250ZXh0LnQwKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0ge307XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIF9yZWYzID0gX2NvbnRleHQudDA7XG4gICAgICAgICAgICAgICAga2V5UmVzdWx0ID0gX3JlZjMua2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gX3JlZjMuZXJyb3JSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmICghKGVycm9yUmVzdWx0ICYmIEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0KS5pbmNsdWRlcygnVmVyaWZpZXIgKyBWZXJpZmllcklEIGhhcyBub3QgeWV0IGJlZW4gYXNzaWduZWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkb2VzS2V5QXNzaWduKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkJyk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUFzc2lnbihlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2ZXJpZmllciwgdmVyaWZpZXJJZCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhaXRLZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MSA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2NvbnRleHQudDEpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQxID0ge307XG5cbiAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICBhc3NpZ25SZXN1bHQgPSBfY29udGV4dC50MTtcbiAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdCA9IGFzc2lnblJlc3VsdC5rZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgICAgIGlmICgha2V5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzA7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdCA9IGtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpcnN0IGxvb2t1cCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5UmVzdWx0IHx8IHt9KSwgXCIsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQgfHwge30pKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmFsS2V5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfZmluYWxLZXlSZXN1bHQka2V5cyQgPSBmaW5hbEtleVJlc3VsdC5rZXlzWzBdLCBYID0gX2ZpbmFsS2V5UmVzdWx0JGtleXMkLnB1Yl9rZXlfWCwgWSA9IF9maW5hbEtleVJlc3VsdCRrZXlzJC5wdWJfa2V5X1k7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDMzO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzNztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPclNldE5vbmNlKFgsIFksIHVuZGVmaW5lZCwgIWlzTmV3S2V5KTtcblxuICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIF95aWVsZCR0aGlzJGdldE9yU2V0TiA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgdHlwZU9mVXNlciA9IF95aWVsZCR0aGlzJGdldE9yU2V0Ti50eXBlT2ZVc2VyO1xuICAgICAgICAgICAgICAgIG5vbmNlID0gX3lpZWxkJHRoaXMkZ2V0T3JTZXROLm5vbmNlO1xuICAgICAgICAgICAgICAgIHB1Yk5vbmNlID0gX3lpZWxkJHRoaXMkZ2V0T3JTZXROLnB1Yk5vbmNlO1xuICAgICAgICAgICAgICAgIHVwZ3JhZGVkID0gX3lpZWxkJHRoaXMkZ2V0T3JTZXROLnVwZ3JhZGVkO1xuICAgICAgICAgICAgICAgIG5vbmNlID0gbmV3IEJOKG5vbmNlIHx8ICcwJywgMTYpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0ODtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA0NTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MiA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMzMpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHZXRPclNldE5vbmNlRXJyb3IoKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgICAgIGlmICghKHR5cGVPZlVzZXIgPT09ICd2MScpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLnRvU3RyaW5nKDE2KSxcbiAgICAgICAgICAgICAgICAgIHk6IFkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVByaXZhdGUobm9uY2UudG9TdHJpbmcoMTYpKS5nZXRQdWJsaWMoKSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTI6XG4gICAgICAgICAgICAgICAgaWYgKCEodHlwZU9mVXNlciA9PT0gJ3YyJykpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1NjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgIHg6IFgudG9TdHJpbmcoMTYpLFxuICAgICAgICAgICAgICAgICAgeTogWS50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgIHg6IHB1Yk5vbmNlLngsXG4gICAgICAgICAgICAgICAgICB5OiBwdWJOb25jZS55XG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1NztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0T3JTZXROb25jZSBzaG91bGQgYWx3YXlzIHJldHVybiB0eXBlT2ZVc2VyLicpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICAgICAgZmluYWxYID0gbW9kaWZpZWRQdWJLZXkuZ2V0WCgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBmaW5hbFkgPSBtb2RpZmllZFB1YktleS5nZXRZKCkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLmdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXkobW9kaWZpZWRQdWJLZXkuZ2V0WCgpLCBtb2RpZmllZFB1YktleS5nZXRZKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgdHlwZU9mVXNlcjogdHlwZU9mVXNlcixcbiAgICAgICAgICAgICAgICAgIG5vbmNlOiBub25jZSxcbiAgICAgICAgICAgICAgICAgIHB1Yk5vbmNlOiBwdWJOb25jZSxcbiAgICAgICAgICAgICAgICAgIHVwZ3JhZGVkOiB1cGdyYWRlZCxcbiAgICAgICAgICAgICAgICAgIFg6IGZpbmFsWCxcbiAgICAgICAgICAgICAgICAgIFk6IGZpbmFsWSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDYxOlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmluYWwgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMsIFtbMzMsIDQ1XV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRVc2VyVHlwZUFuZEFkZHJlc3MoX3gsIF94MiwgX3gzKSB7XG4gICAgICAgIHJldHVybiBfZ2V0VXNlclR5cGVBbmRBZGRyZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRVc2VyVHlwZUFuZEFkZHJlc3M7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0Q3VzdG9tS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc2V0Q3VzdG9tS2V5ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoX3JlZjQpIHtcbiAgICAgICAgdmFyIHByaXZLZXlIZXgsIG1ldGFkYXRhTm9uY2UsIHRvcnVzS2V5SGV4LCBjdXN0b21LZXlIZXgsIHRvcnVzS2V5LCBwcml2S2V5LCBjdXN0b21LZXksIG5ld01ldGFkYXRhTm9uY2UsIGRhdGE7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHByaXZLZXlIZXggPSBfcmVmNC5wcml2S2V5SGV4LCBtZXRhZGF0YU5vbmNlID0gX3JlZjQubWV0YWRhdGFOb25jZSwgdG9ydXNLZXlIZXggPSBfcmVmNC50b3J1c0tleUhleCwgY3VzdG9tS2V5SGV4ID0gX3JlZjQuY3VzdG9tS2V5SGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvcnVzS2V5SGV4KSB7XG4gICAgICAgICAgICAgICAgICB0b3J1c0tleSA9IG5ldyBCTih0b3J1c0tleUhleCwgMTYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwcml2S2V5ID0gbmV3IEJOKHByaXZLZXlIZXgsIDE2KTtcbiAgICAgICAgICAgICAgICAgIHRvcnVzS2V5ID0gcHJpdktleS5zdWIobWV0YWRhdGFOb25jZSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1c3RvbUtleSA9IG5ldyBCTihjdXN0b21LZXlIZXgsIDE2KTtcbiAgICAgICAgICAgICAgICBuZXdNZXRhZGF0YU5vbmNlID0gY3VzdG9tS2V5LnN1Yih0b3J1c0tleSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobmV3TWV0YWRhdGFOb25jZS50b1N0cmluZygxNiksIHRvcnVzS2V5LnRvU3RyaW5nKDE2KSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldE1ldGFkYXRhKGRhdGEpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBzZXRDdXN0b21LZXkoX3g0KSB7XG4gICAgICAgIHJldHVybiBfc2V0Q3VzdG9tS2V5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXRDdXN0b21LZXk7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwicmV0cmlldmVTaGFyZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZXRyaWV2ZVNoYXJlcyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1KGVuZHBvaW50cywgaW5kZXhlcywgdmVyaWZpZXIsIHZlcmlmaWVyUGFyYW1zLCBpZFRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV4dHJhUGFyYW1zLFxuICAgICAgICAgICAgcHJvbWlzZUFycixcbiAgICAgICAgICAgIHRtcEtleSxcbiAgICAgICAgICAgIHB1YktleSxcbiAgICAgICAgICAgIHB1YktleVgsXG4gICAgICAgICAgICBwdWJLZXlZLFxuICAgICAgICAgICAgdG9rZW5Db21taXRtZW50LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHAsXG4gICAgICAgICAgICBfYXJnczUgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTUkKF9jb250ZXh0NSkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NS5wcmV2ID0gX2NvbnRleHQ1Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV4dHJhUGFyYW1zID0gX2FyZ3M1Lmxlbmd0aCA+IDUgJiYgX2FyZ3M1WzVdICE9PSB1bmRlZmluZWQgPyBfYXJnczVbNV0gOiB7fTtcbiAgICAgICAgICAgICAgICBwcm9taXNlQXJyID0gW107XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXQodGhpcy5hbGxvd0hvc3QsIHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyLFxuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcl9pZDogdmVyaWZpZXJQYXJhbXMudmVyaWZpZXJfaWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIENvbW1pdG1lbnRSZXF1ZXN0UGFyYW1zIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VQcmVmaXggICAgICBzdHJpbmcgYGpzb246XCJtZXNzYWdlcHJlZml4XCJgXG4gICAgICAgICAgICAgICAgICAgIFRva2VuQ29tbWl0bWVudCAgICBzdHJpbmcgYGpzb246XCJ0b2tlbmNvbW1pdG1lbnRcImBcbiAgICAgICAgICAgICAgICAgICAgVGVtcFB1YlggICAgICAgICAgIHN0cmluZyBganNvbjpcInRlbXBwdWJ4XCJgXG4gICAgICAgICAgICAgICAgICAgIFRlbXBQdWJZICAgICAgICAgICBzdHJpbmcgYGpzb246XCJ0ZW1wcHVieVwiYFxuICAgICAgICAgICAgICAgICAgICBWZXJpZmllcklkZW50aWZpZXIgc3RyaW5nIGBqc29uOlwidmVyaWZpZXJpZGVudGlmaWVyXCJgXG4gICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAvLyBnZW5lcmF0ZSB0ZW1wb3JhcnkgcHJpdmF0ZSBhbmQgcHVibGljIGtleSB0aGF0IGlzIHVzZWQgdG8gc2VjdXJlIHJlY2VpdmUgc2hhcmVzXG4gICAgICAgICAgICAgICAgdG1wS2V5ID0gZ2VuZXJhdGVQcml2YXRlKCk7XG4gICAgICAgICAgICAgICAgcHViS2V5ID0gZ2V0UHVibGljKHRtcEtleSkudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICAgICAgICAgIHB1YktleVggPSBwdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgICAgICAgICAgIHB1YktleVkgPSBwdWJLZXkuc2xpY2UoNjYpO1xuICAgICAgICAgICAgICAgIHRva2VuQ29tbWl0bWVudCA9IGtlY2NhazI1NihpZFRva2VuKTsgLy8gbWFrZSBjb21taXRtZW50IHJlcXVlc3RzIHRvIGVuZHBvaW50c1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgcCA9IHBvc3QoZW5kcG9pbnRzW2ldLCBnZW5lcmF0ZUpzb25SUENPYmplY3QoJ0NvbW1pdG1lbnRSZXF1ZXN0Jywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcHJlZml4OiAnbXVnMDAnLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbmNvbW1pdG1lbnQ6IHRva2VuQ29tbWl0bWVudC5zbGljZSgyKSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcHB1Yng6IHB1YktleVgsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBwdWJ5OiBwdWJLZXlZLFxuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcmlkZW50aWZpZXI6IHZlcmlmaWVyXG4gICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9nLmVycm9yKCdjb21taXRtZW50JywgZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgcHJvbWlzZUFyci5wdXNoKHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgU2hhcmVSZXF1ZXN0UGFyYW1zIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIEl0ZW0gW11iaWpzb24uUmF3TWVzc2FnZSBganNvbjpcIml0ZW1cImBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFNoYXJlUmVxdWVzdEl0ZW0gc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgSURUb2tlbiAgICAgICAgICAgIHN0cmluZyAgICAgICAgICBganNvbjpcImlkdG9rZW5cImBcbiAgICAgICAgICAgICAgICAgICAgTm9kZVNpZ25hdHVyZXMgICAgIFtdTm9kZVNpZ25hdHVyZSBganNvbjpcIm5vZGVzaWduYXR1cmVzXCJgXG4gICAgICAgICAgICAgICAgICAgIFZlcmlmaWVySWRlbnRpZmllciBzdHJpbmcgICAgICAgICAgYGpzb246XCJ2ZXJpZmllcmlkZW50aWZpZXJcImBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIE5vZGVTaWduYXR1cmUgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgU2lnbmF0dXJlICAgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIERhdGEgICAgICAgIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBOb2RlUHViS2V5WCBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgTm9kZVB1YktleVkgc3RyaW5nXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBDb21taXRtZW50UmVxdWVzdFJlc3VsdCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBTaWduYXR1cmUgc3RyaW5nIGBqc29uOlwic2lnbmF0dXJlXCJgXG4gICAgICAgICAgICAgICAgICAgIERhdGEgICAgICBzdHJpbmcgYGpzb246XCJkYXRhXCJgXG4gICAgICAgICAgICAgICAgICAgIE5vZGVQdWJYICBzdHJpbmcgYGpzb246XCJub2RlcHVieFwiYFxuICAgICAgICAgICAgICAgICAgICBOb2RlUHViWSAgc3RyaW5nIGBqc29uOlwibm9kZXB1YnlcImBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gc2VuZCBzaGFyZSByZXF1ZXN0IG9uY2UgayArIHQgbnVtYmVyIG9mIGNvbW1pdG1lbnQgcmVxdWVzdHMgaGF2ZSBjb21wbGV0ZWRcblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIiwgU29tZShwcm9taXNlQXJyLCBmdW5jdGlvbiAocmVzdWx0QXJyKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGVkUmVxdWVzdHMgPSByZXN1bHRBcnIuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgheCB8fCBfdHlwZW9mKHgpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh4LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZFJlcXVlc3RzLmxlbmd0aCA+PSB+fihlbmRwb2ludHMubGVuZ3RoIC8gNCkgKiAzICsgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdEFycik7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShyZXN1bHRBcnIpKSkpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlcykge1xuICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2VBcnJSZXF1ZXN0ID0gW107XG4gICAgICAgICAgICAgICAgICB2YXIgbm9kZVNpZ3MgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHJlc3BvbnNlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1tfaV0pIG5vZGVTaWdzLnB1c2gocmVzcG9uc2VzW19pXS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBlbmRwb2ludHMubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9uby1uZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcCA9IHBvc3QoZW5kcG9pbnRzW19pMl0sIGdlbmVyYXRlSnNvblJQQ09iamVjdCgnU2hhcmVSZXF1ZXN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZDogJ3llcycsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbTogW19vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmVyaWZpZXJQYXJhbXMpLCB7fSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR0b2tlbjogaWRUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzaWduYXR1cmVzOiBub2RlU2lncyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmaWVyaWRlbnRpZmllcjogdmVyaWZpZXJcbiAgICAgICAgICAgICAgICAgICAgICB9LCBleHRyYVBhcmFtcyldXG4gICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZy5lcnJvcignc2hhcmUgcmVxJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUFyclJlcXVlc3QucHVzaChfcCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBTb21lKHByb21pc2VBcnJSZXF1ZXN0LCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMyhzaGFyZVJlc3BvbnNlcywgc2hhcmVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGVkUmVxdWVzdHMsIHRocmVzaG9sZFB1YmxpY0tleSwgc2hhcmVQcm9taXNlcywgbm9kZUluZGV4LCBfaTMsIG1ldGFkYXRhLCBzaGFyZXNSZXNvbHZlZCwgZGVjcnlwdGVkU2hhcmVzLCBhbGxDb21iaXMsIHByaXZhdGVLZXksIF9sb29wLCBqLCBfcmV0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNoYXJlUmVxdWVzdFJlc3VsdCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2V5cyBbXUtleUFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIEtleUFzc2lnbm1lbnRQdWJsaWMgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgS2V5QXNzaWdubWVudFB1YmxpYyBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXggICAgIGJpZy5JbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1YmxpY0tleSBjb21tb24uUG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRocmVzaG9sZCBpbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcmlmaWVycyBtYXBbc3RyaW5nXVtdc3RyaW5nIC8vIFZlcmlmaWVyID0+IFZlcmlmaWVySURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtleUFzc2lnbm1lbnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgS2V5QXNzaWdubWVudCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2V5QXNzaWdubWVudFB1YmxpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hhcmUgYmlnLkludCAvLyBPciBTaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRocmVzaG9sZCBudW1iZXIgb2Ygbm9kZXMgaGF2ZSByZXR1cm5lZCB0aGUgc2FtZSB1c2VyIHB1YmxpYyBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFJlcXVlc3RzID0gc2hhcmVSZXNwb25zZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRQdWJsaWNLZXkgPSB0aHJlc2hvbGRTYW1lKHNoYXJlUmVzcG9uc2VzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geCAmJiB4LnJlc3VsdCAmJiB4LnJlc3VsdC5rZXlzWzBdLlB1YmxpY0tleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTsgLy8gb3B0aW1pc3RpY2FsbHkgcnVuIGxhZ3JhbmdlIGludGVycG9sYXRpb24gb25jZSB0aHJlc2hvbGQgbnVtYmVyIG9mIHNoYXJlcyBoYXZlIGJlZW4gcmVjZWl2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbWF0Y2hlZCBhZ2FpbnN0IHRoZSB1c2VyIHB1YmxpYyBrZXkgdG8gZW5zdXJlIHRoYXQgc2hhcmVzIGFyZSBjb25zaXN0ZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGNvbXBsZXRlZFJlcXVlc3RzLmxlbmd0aCA+PSB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxICYmIHRocmVzaG9sZFB1YmxpY0tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJbmRleCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9pMyA9IDA7IF9pMyA8IHNoYXJlUmVzcG9uc2VzLmxlbmd0aDsgX2kzICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlUmVzcG9uc2VzW19pM10gJiYgc2hhcmVSZXNwb25zZXNbX2kzXS5yZXN1bHQgJiYgc2hhcmVSZXNwb25zZXNbX2kzXS5yZXN1bHQua2V5cyAmJiBzaGFyZVJlc3BvbnNlc1tfaTNdLnJlc3VsdC5rZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVJlc3BvbnNlc1tfaTNdLnJlc3VsdC5rZXlzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk4oYS5JbmRleCwgMTYpLmNtcChuZXcgQk4oYi5JbmRleCwgMTYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFyZVJlc3BvbnNlc1tfaTNdLnJlc3VsdC5rZXlzWzBdLk1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXBoZW1QdWJsaWNLZXk6IEJ1ZmZlci5mcm9tKHNoYXJlUmVzcG9uc2VzW19pM10ucmVzdWx0LmtleXNbMF0uTWV0YWRhdGEuZXBoZW1QdWJsaWNLZXksICdoZXgnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXY6IEJ1ZmZlci5mcm9tKHNoYXJlUmVzcG9uc2VzW19pM10ucmVzdWx0LmtleXNbMF0uTWV0YWRhdGEuaXYsICdoZXgnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFjOiBCdWZmZXIuZnJvbShzaGFyZVJlc3BvbnNlc1tfaTNdLnJlc3VsdC5rZXlzWzBdLk1ldGFkYXRhLm1hYywgJ2hleCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBCdWZmZXIuZnJvbShzaGFyZVJlc3BvbnNlc1tfaTNdLnJlc3VsdC5rZXlzWzBdLk1ldGFkYXRhLm1vZGUsICdoZXgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMucHVzaCggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tbmVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcnlwdCh0bXBLZXksIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWV0YWRhdGEpLCB7fSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXBoZXJ0ZXh0OiBCdWZmZXIuZnJvbShhdG9iKHNoYXJlUmVzcG9uc2VzW19pM10ucmVzdWx0LmtleXNbMF0uU2hhcmUpLnBhZFN0YXJ0KDY0LCAnMCcpLCAnaGV4JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2cuZGVidWcoJ3NoYXJlIGRlY3J5cHRpb24nLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKEJ1ZmZlci5mcm9tKHNoYXJlUmVzcG9uc2VzW19pM10ucmVzdWx0LmtleXNbMF0uU2hhcmUucGFkU3RhcnQoNjQsICcwJyksICdoZXgnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUluZGV4LnB1c2gobmV3IEJOKGluZGV4ZXNbX2kzXSwgMTYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHNoYXJlUHJvbWlzZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVzUmVzb2x2ZWQgPSBfY29udGV4dDMuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGFyZWRTdGF0ZS5yZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJyZXR1cm5cIiwgdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRTaGFyZXMgPSBzaGFyZXNSZXNvbHZlZC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyciwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnIpIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4W2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IEJOKGN1cnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pOyAvLyBydW4gbGFncmFuZ2UgaW50ZXJwb2xhdGlvbiBvbiBhbGwgc3Vic2V0cywgZmFzdGVyIGluIHRoZSBvcHRpbWlzdGljIHNjZW5hcmlvIHRoYW4gYmVybGVrYW1wLXdlbGNoIGR1ZSB0byBlYXJseSBleGl0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJ1biBsYWdyYW5nZSBpbnRlcnBvbGF0aW9uIG9uIGFsbCBzdWJzZXRzLCBmYXN0ZXIgaW4gdGhlIG9wdGltaXN0aWMgc2NlbmFyaW8gdGhhbiBiZXJsZWthbXAtd2VsY2ggZHVlIHRvIGVhcmx5IGV4aXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbENvbWJpcyA9IGtDb21iaW5hdGlvbnMoZGVjcnlwdGVkU2hhcmVzLmxlbmd0aCwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudENvbWJpID0gYWxsQ29tYmlzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudENvbWJpU2hhcmVzID0gZGVjcnlwdGVkU2hhcmVzLmZpbHRlcihmdW5jdGlvbiAodiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudENvbWJpLmluY2x1ZGVzKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFyZXMgPSBjdXJyZW50Q29tYmlTaGFyZXMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kaWNlcyA9IGN1cnJlbnRDb21iaVNoYXJlcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geC5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlcml2ZWRQcml2YXRlS2V5ID0gX3RoaXMubGFncmFuZ2VJbnRlcnBvbGF0aW9uKHNoYXJlcywgaW5kaWNlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY3J5cHRlZFB1YktleSA9IGdldFB1YmxpYyhCdWZmZXIuZnJvbShkZXJpdmVkUHJpdmF0ZUtleS50b1N0cmluZygxNiwgNjQpLCAnaGV4JykpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY3J5cHRlZFB1YktleVggPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjcnlwdGVkUHViS2V5WSA9IGRlY3J5cHRlZFB1YktleS5zbGljZSg2Nik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ldyBCTihkZWNyeXB0ZWRQdWJLZXlYLCAxNikuY21wKG5ldyBCTih0aHJlc2hvbGRQdWJsaWNLZXkuWCwgMTYpKSA9PT0gMCAmJiBuZXcgQk4oZGVjcnlwdGVkUHViS2V5WSwgMTYpLmNtcChuZXcgQk4odGhyZXNob2xkUHVibGljS2V5LlksIDE2KSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gZGVyaXZlZFByaXZhdGVLZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaiA8IGFsbENvbWJpcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmV0ID0gX2xvb3Aoaik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9yZXQgPT09IFwiYnJlYWtcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwiYnJlYWtcIiwgMjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwcml2YXRlS2V5ID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCBkZXJpdmUgcHJpdmF0ZSBrZXknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCBwcml2YXRlS2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMyk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94MTAsIF94MTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbiggLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBfcmVmNiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KHJldHVybmVkS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcml2YXRlS2V5LCBkZWNyeXB0ZWRQdWJLZXksIGRlY3J5cHRlZFB1YktleVgsIGRlY3J5cHRlZFB1YktleVksIG1ldGFkYXRhTm9uY2UsIF95aWVsZCRfdGhpcyRnZXROb25jZSwgbm9uY2UsIGV0aEFkZHJlc3M7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNCQoX2NvbnRleHQ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZUtleSA9IHJldHVybmVkS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFB1YktleSA9IGdldFB1YmxpYyhCdWZmZXIuZnJvbShwcml2YXRlS2V5LnRvU3RyaW5nKDE2LCA2NCksICdoZXgnKSkudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFB1YktleVggPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFB1YktleVkgPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoNjYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5lbmFibGVPbmVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldE5vbmNlKGRlY3J5cHRlZFB1YktleVgsIGRlY3J5cHRlZFB1YktleVksIHByaXZhdGVLZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfeWllbGQkX3RoaXMkZ2V0Tm9uY2UgPSBfY29udGV4dDQuc2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25jZSA9IF95aWVsZCRfdGhpcyRnZXROb25jZS5ub25jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YU5vbmNlID0gbmV3IEJOKG5vbmNlIHx8ICcwJywgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRNZXRhZGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1g6IGRlY3J5cHRlZFB1YktleVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1k6IGRlY3J5cHRlZFB1YktleVlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhTm9uY2UgPSBfY29udGV4dDQuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZygnPiB0b3J1cy5qcy9yZXRyaWV2ZVNoYXJlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZLZXk6IHByaXZhdGVLZXkudG9TdHJpbmcoMTYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZTogbWV0YWRhdGFOb25jZS50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gcHJpdmF0ZUtleS5hZGQobWV0YWRhdGFOb25jZSkudW1vZChfdGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldGhBZGRyZXNzID0gX3RoaXMuZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXkocHJpdmF0ZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKCc+IHRvcnVzLmpzL3JldHJpZXZlU2hhcmVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoQWRkcmVzczogZXRoQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZLZXk6IHByaXZhdGVLZXkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IC8vIHJldHVybiByZWNvbnN0cnVjdGVkIHByaXZhdGUga2V5IGFuZCBldGhlcmV1bSBhZGRyZXNzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldGhBZGRyZXNzOiBldGhBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdktleTogcHJpdmF0ZUtleS50b1N0cmluZygnaGV4JywgNjQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZTogbWV0YWRhdGFOb25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWU0KTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KCkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJldHJpZXZlU2hhcmVzKF94NSwgX3g2LCBfeDcsIF94OCwgX3g5KSB7XG4gICAgICAgIHJldHVybiBfcmV0cmlldmVTaGFyZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldHJpZXZlU2hhcmVzO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImdldE1ldGFkYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0TWV0YWRhdGEgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNihkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YVJlc3BvbnNlO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2JChfY29udGV4dDYpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDYucHJldiA9IDA7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0KFwiXCIuY29uY2F0KHRoaXMubWV0YWRhdGFIb3N0LCBcIi9nZXRcIiksIGRhdGEsIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBtZXRhZGF0YVJlc3BvbnNlID0gX2NvbnRleHQ2LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoISghbWV0YWRhdGFSZXNwb25zZSB8fCAhbWV0YWRhdGFSZXNwb25zZS5tZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgbmV3IEJOKDApKTtcblxuICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgbmV3IEJOKG1ldGFkYXRhUmVzcG9uc2UubWVzc2FnZSwgMTYpKTtcblxuICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2LnByZXYgPSA5O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ni50MCA9IF9jb250ZXh0NltcImNhdGNoXCJdKDApO1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcignZ2V0IG1ldGFkYXRhIGVycm9yJywgX2NvbnRleHQ2LnQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCBuZXcgQk4oMCkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU2LCB0aGlzLCBbWzAsIDldXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhKF94MTMsIF94MTQpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZXRhZGF0YS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0TWV0YWRhdGE7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVNZXRhZGF0YVBhcmFtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZU1ldGFkYXRhUGFyYW1zKG1lc3NhZ2UsIHByaXZhdGVLZXkpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkudG9TdHJpbmcoJ2hleCcsIDY0KSk7XG4gICAgICB2YXIgc2V0RGF0YSA9IHtcbiAgICAgICAgZGF0YTogbWVzc2FnZSxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgQk4ofn4odGhpcy5zZXJ2ZXJUaW1lT2Zmc2V0ICsgRGF0ZS5ub3coKSAvIDEwMDApKS50b1N0cmluZygxNilcbiAgICAgIH07XG4gICAgICB2YXIgc2lnID0ga2V5LnNpZ24oa2VjY2FrMjU2KEpzb25TdHJpbmdpZnkoc2V0RGF0YSkpLnNsaWNlKDIpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHB1Yl9rZXlfWDoga2V5LmdldFB1YmxpYygpLmdldFgoKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgIHB1Yl9rZXlfWToga2V5LmdldFB1YmxpYygpLmdldFkoKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgIHNldF9kYXRhOiBzZXREYXRhLFxuICAgICAgICBzaWduYXR1cmU6IEJ1ZmZlci5mcm9tKHNpZy5yLnRvU3RyaW5nKDE2LCA2NCkgKyBzaWcucy50b1N0cmluZygxNiwgNjQpICsgbmV3IEJOKHNpZy52KS50b1N0cmluZygxNiwgMiksICdoZXgnKS50b1N0cmluZygnYmFzZTY0JylcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldE1ldGFkYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc2V0TWV0YWRhdGEgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNyhkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YVJlc3BvbnNlO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU3JChfY29udGV4dDcpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDcucHJldiA9IF9jb250ZXh0Ny5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDcucHJldiA9IDA7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0KFwiXCIuY29uY2F0KHRoaXMubWV0YWRhdGFIb3N0LCBcIi9zZXRcIiksIGRhdGEsIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBtZXRhZGF0YVJlc3BvbnNlID0gX2NvbnRleHQ3LnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgbWV0YWRhdGFSZXNwb25zZS5tZXNzYWdlKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ3LnByZXYgPSA3O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ny50MCA9IF9jb250ZXh0N1tcImNhdGNoXCJdKDApO1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcignc2V0IG1ldGFkYXRhIGVycm9yJywgX2NvbnRleHQ3LnQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiLCAnJyk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTcsIHRoaXMsIFtbMCwgN11dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gc2V0TWV0YWRhdGEoX3gxNSwgX3gxNikge1xuICAgICAgICByZXR1cm4gX3NldE1ldGFkYXRhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXRNZXRhZGF0YTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJsYWdyYW5nZUludGVycG9sYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGFncmFuZ2VJbnRlcnBvbGF0aW9uKHNoYXJlcywgbm9kZUluZGV4KSB7XG4gICAgICBpZiAoc2hhcmVzLmxlbmd0aCAhPT0gbm9kZUluZGV4Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlY3JldCA9IG5ldyBCTigwKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHVwcGVyID0gbmV3IEJOKDEpO1xuICAgICAgICB2YXIgbG93ZXIgPSBuZXcgQk4oMSk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFyZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgdXBwZXIgPSB1cHBlci5tdWwobm9kZUluZGV4W2pdLm5lZygpKTtcbiAgICAgICAgICAgIHVwcGVyID0gdXBwZXIudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgdmFyIHRlbXAgPSBub2RlSW5kZXhbaV0uc3ViKG5vZGVJbmRleFtqXSk7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcC51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgICBsb3dlciA9IGxvd2VyLm11bCh0ZW1wKS51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlbHRhID0gdXBwZXIubXVsKGxvd2VyLmludm0odGhpcy5lYy5jdXJ2ZS5uKSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICBkZWx0YSA9IGRlbHRhLm11bChzaGFyZXNbaV0pLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgc2VjcmV0ID0gc2VjcmV0LmFkZChkZWx0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWNyZXQudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZUFkZHJlc3NGcm9tUHJpdktleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUFkZHJlc3NGcm9tUHJpdktleShwcml2YXRlS2V5KSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy5lYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5LnRvU3RyaW5nKCdoZXgnLCA2NCksICdoZXgnKTtcbiAgICAgIHZhciBwdWJsaWNLZXkgPSBrZXkuZ2V0UHVibGljKCkuZW5jb2RlKCdoZXgnKS5zbGljZSgyKTtcbiAgICAgIHZhciBldGhBZGRyZXNzTG93ZXIgPSBcIjB4XCIuY29uY2F0KGtlY2NhazI1NihCdWZmZXIuZnJvbShwdWJsaWNLZXksICdoZXgnKSkuc2xpY2UoNjQgLSAzOCkpO1xuICAgICAgcmV0dXJuIHRvQ2hlY2tzdW1BZGRyZXNzKGV0aEFkZHJlc3NMb3dlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleShwdWJsaWNLZXlYLCBwdWJsaWNLZXlZKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgeDogcHVibGljS2V5WC50b1N0cmluZygnaGV4JywgNjQpLFxuICAgICAgICB5OiBwdWJsaWNLZXlZLnRvU3RyaW5nKCdoZXgnLCA2NClcbiAgICAgIH0pO1xuICAgICAgdmFyIHB1YmxpY0tleSA9IGtleS5nZXRQdWJsaWMoKS5lbmNvZGUoJ2hleCcpLnNsaWNlKDIpO1xuICAgICAgdmFyIGV0aEFkZHJlc3NMb3dlciA9IFwiMHhcIi5jb25jYXQoa2VjY2FrMjU2KEJ1ZmZlci5mcm9tKHB1YmxpY0tleSwgJ2hleCcpKS5zbGljZSg2NCAtIDM4KSk7XG4gICAgICByZXR1cm4gdG9DaGVja3N1bUFkZHJlc3MoZXRoQWRkcmVzc0xvd2VyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTm90ZTogdXNlIHRoaXMgZnVuY3Rpb24gb25seSB3aXRoIGN1c3RvbSBhdXRoLCBkb24ndCB1c2UgdG8gbG9va3VwIG9wZW5sb2dpbiBhY2NvdW50cy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFB1YmxpY0FkZHJlc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRQdWJsaWNBZGRyZXNzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTgoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCBfcmVmNykge1xuICAgICAgICB2YXIgdmVyaWZpZXIsXG4gICAgICAgICAgICB2ZXJpZmllcklkLFxuICAgICAgICAgICAgaXNFeHRlbmRlZCxcbiAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0LFxuICAgICAgICAgICAgaXNOZXdLZXksXG4gICAgICAgICAgICBfcmVmOCxcbiAgICAgICAgICAgIGtleVJlc3VsdCxcbiAgICAgICAgICAgIGVycm9yUmVzdWx0LFxuICAgICAgICAgICAgYXNzaWduUmVzdWx0LFxuICAgICAgICAgICAgX25vbmNlLFxuICAgICAgICAgICAgX2ZpbmFsS2V5UmVzdWx0JGtleXMkMixcbiAgICAgICAgICAgIFgsXG4gICAgICAgICAgICBZLFxuICAgICAgICAgICAgdHlwZU9mVXNlcixcbiAgICAgICAgICAgIG5vbmNlLFxuICAgICAgICAgICAgcHViTm9uY2UsXG4gICAgICAgICAgICBtb2RpZmllZFB1YktleSxcbiAgICAgICAgICAgIHVwZ3JhZGVkLFxuICAgICAgICAgICAgX3lpZWxkJHRoaXMkZ2V0T3JTZXROMixcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBfYXJnczggPSBhcmd1bWVudHM7XG5cbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlOCQoX2NvbnRleHQ4KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ4LnByZXYgPSBfY29udGV4dDgubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdmVyaWZpZXIgPSBfcmVmNy52ZXJpZmllciwgdmVyaWZpZXJJZCA9IF9yZWY3LnZlcmlmaWVySWQ7XG4gICAgICAgICAgICAgICAgaXNFeHRlbmRlZCA9IF9hcmdzOC5sZW5ndGggPiAzICYmIF9hcmdzOFszXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M4WzNdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKCc+IHRvcnVzLmpzL2dldFB1YmxpY0FkZHJlc3MnLCB7XG4gICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IGVuZHBvaW50cyxcbiAgICAgICAgICAgICAgICAgIHRvcnVzTm9kZVB1YnM6IHRvcnVzTm9kZVB1YnMsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcklkOiB2ZXJpZmllcklkLFxuICAgICAgICAgICAgICAgICAgaXNFeHRlbmRlZDogaXNFeHRlbmRlZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlzTmV3S2V5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC50MCA9IF9jb250ZXh0OC5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9jb250ZXh0OC50MCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnQwID0ge307XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIF9yZWY4ID0gX2NvbnRleHQ4LnQwO1xuICAgICAgICAgICAgICAgIGtleVJlc3VsdCA9IF9yZWY4LmtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IF9yZWY4LmVycm9yUmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoZXJyb3JSZXN1bHQgJiYgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQpLmluY2x1ZGVzKCdWZXJpZmllciBub3Qgc3VwcG9ydGVkJykpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmVyaWZpZXIgbm90IHN1cHBvcnRlZC4gQ2hlY2sgaWYgeW91OiBcXG5cXG4gICAgICAxLiBBcmUgb24gdGhlIHJpZ2h0IG5ldHdvcmsgKFRvcnVzIHRlc3RuZXQvbWFpbm5ldCkgXFxuXFxuICAgICAgMi4gSGF2ZSBzZXR1cCBhIHZlcmlmaWVyIG9uIGRhc2hib2FyZC53ZWIzYXV0aC5pbz9cIik7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICBpZiAoIShlcnJvclJlc3VsdCAmJiBKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCkuaW5jbHVkZXMoJ1ZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkJykpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDI5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5QXNzaWduKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZlcmlmaWVyLCB2ZXJpZmllcklkKTtcblxuICAgICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMjE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhaXRLZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICBfY29udGV4dDgudDEgPSBfY29udGV4dDguc2VudDtcblxuICAgICAgICAgICAgICAgIGlmIChfY29udGV4dDgudDEpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMjQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDgudDEgPSB7fTtcblxuICAgICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICAgIGFzc2lnblJlc3VsdCA9IF9jb250ZXh0OC50MTtcbiAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdCA9IGFzc2lnblJlc3VsdC5rZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMzQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgICAgICBpZiAoIWtleVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAzMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0ID0ga2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMzQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpcnN0IGxvb2t1cCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5UmVzdWx0IHx8IHt9KSwgXCIsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQgfHwge30pKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoJz4gdG9ydXMuanMvZ2V0UHVibGljQWRkcmVzcycsIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0OiBmaW5hbEtleVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgIGlzTmV3S2V5OiBpc05ld0tleVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmaW5hbEtleVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA3NjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9maW5hbEtleVJlc3VsdCRrZXlzJDIgPSBmaW5hbEtleVJlc3VsdC5rZXlzWzBdLCBYID0gX2ZpbmFsS2V5UmVzdWx0JGtleXMkMi5wdWJfa2V5X1gsIFkgPSBfZmluYWxLZXlSZXN1bHQka2V5cyQyLnB1Yl9rZXlfWTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVPbmVLZXkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNjQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDgucHJldiA9IDM4O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNDI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JTZXROb25jZShYLCBZLCB1bmRlZmluZWQsICFpc05ld0tleSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICBfeWllbGQkdGhpcyRnZXRPclNldE4yID0gX2NvbnRleHQ4LnNlbnQ7XG4gICAgICAgICAgICAgICAgdHlwZU9mVXNlciA9IF95aWVsZCR0aGlzJGdldE9yU2V0TjIudHlwZU9mVXNlcjtcbiAgICAgICAgICAgICAgICBub25jZSA9IF95aWVsZCR0aGlzJGdldE9yU2V0TjIubm9uY2U7XG4gICAgICAgICAgICAgICAgcHViTm9uY2UgPSBfeWllbGQkdGhpcyRnZXRPclNldE4yLnB1Yk5vbmNlO1xuICAgICAgICAgICAgICAgIHVwZ3JhZGVkID0gX3lpZWxkJHRoaXMkZ2V0T3JTZXROMi51cGdyYWRlZDtcbiAgICAgICAgICAgICAgICBub25jZSA9IG5ldyBCTihub25jZSB8fCAnMCcsIDE2KTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDUzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTA6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnByZXYgPSA1MDtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgudDIgPSBfY29udGV4dDhbXCJjYXRjaFwiXSgzOCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdldE9yU2V0Tm9uY2VFcnJvcigpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTM6XG4gICAgICAgICAgICAgICAgaWYgKCEodHlwZU9mVXNlciA9PT0gJ3YxJykpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLnRvU3RyaW5nKDE2KSxcbiAgICAgICAgICAgICAgICAgIHk6IFkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVByaXZhdGUobm9uY2UudG9TdHJpbmcoMTYpKS5nZXRQdWJsaWMoKSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA2MjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgICAgIGlmICghKHR5cGVPZlVzZXIgPT09ICd2MicpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDYxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHVwZ3JhZGVkKSB7XG4gICAgICAgICAgICAgICAgICAvLyBPbmVLZXkgaXMgdXBncmFkZWQgdG8gMi9uLCByZXR1cm5lZCBhZGRyZXNzIGlzIGFkZHJlc3Mgb2YgVG9ydXMga2V5IChwb3N0Ym94IGtleSksIG5vdCB0S2V5XG4gICAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICAgIHg6IFgudG9TdHJpbmcoMTYpLFxuICAgICAgICAgICAgICAgICAgICB5OiBZLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgICAgeDogWC50b1N0cmluZygxNiksXG4gICAgICAgICAgICAgICAgICAgIHk6IFkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgICAgeDogcHViTm9uY2UueCxcbiAgICAgICAgICAgICAgICAgICAgeTogcHViTm9uY2UueVxuICAgICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNjI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2MTpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldE9yU2V0Tm9uY2Ugc2hvdWxkIGFsd2F5cyByZXR1cm4gdHlwZU9mVXNlci4nKTtcblxuICAgICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNjk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyID0gJ3YxJztcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDY3O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKHtcbiAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWDogWCxcbiAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWTogWVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICAgICAgbm9uY2UgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLnRvU3RyaW5nKDE2KSxcbiAgICAgICAgICAgICAgICAgIHk6IFkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVByaXZhdGUobm9uY2UudG9TdHJpbmcoMTYpKS5nZXRQdWJsaWMoKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OTpcbiAgICAgICAgICAgICAgICBYID0gbW9kaWZpZWRQdWJLZXkuZ2V0WCgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBZID0gbW9kaWZpZWRQdWJLZXkuZ2V0WSgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzID0gdGhpcy5nZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5KG1vZGlmaWVkUHViS2V5LmdldFgoKSwgbW9kaWZpZWRQdWJLZXkuZ2V0WSgpKTtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoJz4gdG9ydXMuanMvZ2V0UHVibGljQWRkcmVzcycsIHtcbiAgICAgICAgICAgICAgICAgIFg6IFgsXG4gICAgICAgICAgICAgICAgICBZOiBZLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIHR5cGVPZlVzZXI6IHR5cGVPZlVzZXIsXG4gICAgICAgICAgICAgICAgICBub25jZTogKF9ub25jZSA9IG5vbmNlKSA9PT0gbnVsbCB8fCBfbm9uY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub25jZS50b1N0cmluZygxNiksXG4gICAgICAgICAgICAgICAgICBwdWJOb25jZTogcHViTm9uY2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0V4dGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDc1O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5hYnJ1cHQoXCJyZXR1cm5cIiwgYWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyOiB0eXBlT2ZVc2VyLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIFg6IFgsXG4gICAgICAgICAgICAgICAgICBZOiBZLFxuICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZTogbm9uY2UsXG4gICAgICAgICAgICAgICAgICBwdWJOb25jZTogcHViTm9uY2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDc2OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmluYWwgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDc3OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlOCwgdGhpcywgW1szOCwgNTBdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFB1YmxpY0FkZHJlc3MoX3gxNywgX3gxOCwgX3gxOSkge1xuICAgICAgICByZXR1cm4gX2dldFB1YmxpY0FkZHJlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFB1YmxpY0FkZHJlc3M7XG4gICAgfSgpXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb25zIGZvciBPbmVLZXkgKE9wZW5Mb2dpbiB2MiksIG9ubHkgY2FsbCB0aGVzZSBmdW5jdGlvbnMgaWYgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldE9yU2V0Tm9uY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRPclNldE5vbmNlID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTkoWCwgWSwgcHJpdktleSkge1xuICAgICAgICB2YXIgZ2V0T25seSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBtc2csXG4gICAgICAgICAgICBfYXJnczkgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTkkKF9jb250ZXh0OSkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0OS5wcmV2ID0gX2NvbnRleHQ5Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGdldE9ubHkgPSBfYXJnczkubGVuZ3RoID4gMyAmJiBfYXJnczlbM10gIT09IHVuZGVmaW5lZCA/IF9hcmdzOVszXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1zZyA9IGdldE9ubHkgPyAnZ2V0Tm9uY2UnIDogJ2dldE9yU2V0Tm9uY2UnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByaXZLZXkpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobXNnLCBwcml2S2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHViX2tleV9YOiBYLFxuICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1k6IFksXG4gICAgICAgICAgICAgICAgICAgIHNldF9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogbXNnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5hYnJ1cHQoXCJyZXR1cm5cIiwgcG9zdChcIlwiLmNvbmNhdCh0aGlzLm1ldGFkYXRhSG9zdCwgXCIvZ2V0X29yX3NldF9ub25jZVwiKSwgZGF0YSwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlOSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE9yU2V0Tm9uY2UoX3gyMCwgX3gyMSwgX3gyMikge1xuICAgICAgICByZXR1cm4gX2dldE9yU2V0Tm9uY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldE9yU2V0Tm9uY2U7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Tm9uY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXROb25jZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMChYLCBZLCBwcml2S2V5KSB7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTEwJChfY29udGV4dDEwKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQxMC5wcmV2ID0gX2NvbnRleHQxMC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy5nZXRPclNldE5vbmNlKFgsIFksIHByaXZLZXksIHRydWUpKTtcblxuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMTAsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXROb25jZShfeDIzLCBfeDI0LCBfeDI1KSB7XG4gICAgICAgIHJldHVybiBfZ2V0Tm9uY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldE5vbmNlO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImdldFBvc3Rib3hLZXlGcm9tMU91dE9mMVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3N0Ym94S2V5RnJvbTFPdXRPZjEocHJpdktleSwgbm9uY2UpIHtcbiAgICAgIHZhciBwcml2S2V5Qk4gPSBuZXcgQk4ocHJpdktleSwgMTYpO1xuICAgICAgdmFyIG5vbmNlQk4gPSBuZXcgQk4obm9uY2UsIDE2KTtcbiAgICAgIHJldHVybiBwcml2S2V5Qk4uc3ViKG5vbmNlQk4pLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKS50b1N0cmluZygnaGV4Jyk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZW5hYmxlTG9nZ2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVMb2dnaW5nKCkge1xuICAgICAgdmFyIHYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG4gICAgICBpZiAodikgbG9nLmVuYWJsZUFsbCgpO2Vsc2UgbG9nLmRpc2FibGVBbGwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QVBJS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFQSUtleSQxKGFwaUtleSkge1xuICAgICAgc2V0QVBJS2V5KGFwaUtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEVtYmVkSG9zdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRFbWJlZEhvc3QkMShlbWJlZEhvc3QpIHtcbiAgICAgIHNldEVtYmVkSG9zdChlbWJlZEhvc3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0dldE9yU2V0Tm9uY2VFcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0dldE9yU2V0Tm9uY2VFcnJvcihlcnIpIHtcbiAgICAgIHJldHVybiBlcnIgaW5zdGFuY2VvZiBHZXRPclNldE5vbmNlRXJyb3I7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRvcnVzO1xufSgpO1xuXG5leHBvcnQgeyBUb3J1cyBhcyBkZWZhdWx0LCBrZXlBc3NpZ24sIGtleUxvb2t1cCwgd2FpdEtleUxvb2t1cCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9ydXNVdGlscy5lc20uanMubWFwXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNTdHJlYW0oc3RyZWFtKSB7XG5cdHJldHVybiBzdHJlYW0gIT09IG51bGxcblx0XHQmJiB0eXBlb2Ygc3RyZWFtID09PSAnb2JqZWN0J1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0ucGlwZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV3JpdGFibGVTdHJlYW0oc3RyZWFtKSB7XG5cdHJldHVybiBpc1N0cmVhbShzdHJlYW0pXG5cdFx0JiYgc3RyZWFtLndyaXRhYmxlICE9PSBmYWxzZVxuXHRcdCYmIHR5cGVvZiBzdHJlYW0uX3dyaXRlID09PSAnZnVuY3Rpb24nXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS5fd3JpdGFibGVTdGF0ZSA9PT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWRhYmxlU3RyZWFtKHN0cmVhbSkge1xuXHRyZXR1cm4gaXNTdHJlYW0oc3RyZWFtKVxuXHRcdCYmIHN0cmVhbS5yZWFkYWJsZSAhPT0gZmFsc2Vcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLl9yZWFkID09PSAnZnVuY3Rpb24nXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS5fcmVhZGFibGVTdGF0ZSA9PT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R1cGxleFN0cmVhbShzdHJlYW0pIHtcblx0cmV0dXJuIGlzV3JpdGFibGVTdHJlYW0oc3RyZWFtKVxuXHRcdCYmIGlzUmVhZGFibGVTdHJlYW0oc3RyZWFtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhbnNmb3JtU3RyZWFtKHN0cmVhbSkge1xuXHRyZXR1cm4gaXNEdXBsZXhTdHJlYW0oc3RyZWFtKVxuXHRcdCYmIHR5cGVvZiBzdHJlYW0uX3RyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IE5vZGVEZXRhaWxNYW5hZ2VyIGZyb20gJ0B0b3J1c2xhYnMvZmV0Y2gtbm9kZS1kZXRhaWxzJztcbmltcG9ydCB7IGdldCwgc2V0QVBJS2V5IH0gZnJvbSAnQHRvcnVzbGFicy9odHRwLWhlbHBlcnMnO1xuaW1wb3J0IHsgU2FmZUV2ZW50RW1pdHRlciwgT2JqZWN0TXVsdGlwbGV4LCBjcmVhdGVTdHJlYW1NaWRkbGV3YXJlLCBKUlBDRW5naW5lLCBjcmVhdGVJZFJlbWFwTWlkZGxld2FyZSwgQmFzZVBvc3RNZXNzYWdlU3RyZWFtLCBzZXR1cE11bHRpcGxleCB9IGZyb20gJ0B0b3J1c2xhYnMvb3BlbmxvZ2luLWpycGMnO1xuaW1wb3J0IFRvcnVzSnMgZnJvbSAnQHRvcnVzbGFicy90b3J1cy5qcyc7XG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2xvZGFzaC5tZXJnZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlU3RvcmUsIHN0b3JlQXNTdHJlYW0gfSBmcm9tICdAbWV0YW1hc2svb2JzLXN0b3JlJztcbmltcG9ydCB7IGV0aEVycm9ycywgRXRoZXJldW1ScGNFcnJvciB9IGZyb20gJ2V0aC1ycGMtZXJyb3JzJztcbmltcG9ydCBkZXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCB7IGlzRHVwbGV4U3RyZWFtIH0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCBwdW1wIGZyb20gJ3B1bXAnO1xuaW1wb3J0IGxvZ2xldmVsIGZyb20gJ2xvZ2xldmVsJztcbmltcG9ydCBjcmVhdGVIYXNoIGZyb20gJ2NyZWF0ZS1oYXNoJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5cbmNvbnN0IExPR0lOX1BST1ZJREVSID0ge1xuICBHT09HTEU6IFwiZ29vZ2xlXCIsXG4gIEZBQ0VCT09LOiBcImZhY2Vib29rXCIsXG4gIFRXSVRDSDogXCJ0d2l0Y2hcIixcbiAgUkVERElUOiBcInJlZGRpdFwiLFxuICBESVNDT1JEOiBcImRpc2NvcmRcIlxufTtcbmNvbnN0IFdBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQID0ge1xuICBbTE9HSU5fUFJPVklERVIuR09PR0xFXTogXCJ0a2V5LWdvb2dsZVwiLFxuICBbTE9HSU5fUFJPVklERVIuRkFDRUJPT0tdOiBcInRrZXktZmFjZWJvb2tcIixcbiAgW0xPR0lOX1BST1ZJREVSLlRXSVRDSF06IFwidGtleS10d2l0Y2hcIixcbiAgW0xPR0lOX1BST1ZJREVSLlJFRERJVF06IFwidGtleS1yZWRkaXRcIixcbiAgW0xPR0lOX1BST1ZJREVSLkRJU0NPUkRdOiBcInRrZXktZGlzY29yZFwiXG59O1xuY29uc3QgUEFZTUVOVF9QUk9WSURFUiA9IHtcbiAgTU9PTlBBWTogXCJtb29ucGF5XCIsXG4gIFdZUkU6IFwid3lyZVwiLFxuICBSQU1QTkVUV09SSzogXCJyYW1wbmV0d29ya1wiLFxuICBYQU5QT09MOiBcInhhbnBvb2xcIixcbiAgTUVSQ1VSWU86IFwibWVyY3VyeW9cIixcbiAgVFJBTlNBSzogXCJ0cmFuc2FrXCJcbn07XG5jb25zdCBUT1JVU19CVUlMRF9FTlYgPSB7XG4gIFBST0RVQ1RJT046IFwicHJvZHVjdGlvblwiLFxuICBERVZFTE9QTUVOVDogXCJkZXZlbG9wbWVudFwiLFxuICBCSU5BTkNFOiBcImJpbmFuY2VcIixcbiAgVEVTVElORzogXCJ0ZXN0aW5nXCIsXG4gIExSQzogXCJscmNcIixcbiAgQkVUQTogXCJiZXRhXCJcbn07XG5jb25zdCBCVVRUT05fUE9TSVRJT04gPSB7XG4gIEJPVFRPTV9MRUZUOiBcImJvdHRvbS1sZWZ0XCIsXG4gIFRPUF9MRUZUOiBcInRvcC1sZWZ0XCIsXG4gIEJPVFRPTV9SSUdIVDogXCJib3R0b20tcmlnaHRcIixcbiAgVE9QX1JJR0hUOiBcInRvcC1yaWdodFwiXG59O1xuXG5jb25zdCBwYXltZW50UHJvdmlkZXJzJDEgPSB7XG4gIFtQQVlNRU5UX1BST1ZJREVSLlJBTVBORVRXT1JLXToge1xuICAgIGxpbmUxOiBcIkRlYml0IENhcmQvIEFwcGxlIFBheS8gQmFuayB0cmFuc2ZlclwiLFxuICAgIGxpbmUyOiBcIjAuNDklIC0gMi45JVwiLFxuICAgIGxpbmUzOiBcIjUsMDAw4oKsL3B1cmNoYXNlLCAyMCwwMDDigqwvbW9cIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL2luc3RhbnQucmFtcC5uZXR3b3JrL1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDUwLFxuICAgIG1heE9yZGVyVmFsdWU6IDIwMDAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiR0JQXCIsIFwiRVVSXCIsIFwiVVNEXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiVVNEQ1wiLCBcIkJTQ19CTkJcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuTU9PTlBBWV06IHtcbiAgICBsaW5lMTogXCJDcmVkaXQgLyBEZWJpdCBDYXJkIC8gQXBwbGUgUGF5XCIsXG4gICAgbGluZTI6IFwiNC41JSBvciA1IFVTRFwiLFxuICAgIGxpbmUzOiBcIjIsMDAw4oKsL2RheSwgMTAsMDAw4oKsL21vXCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9oZWxwLm1vb25wYXkuaW8vZW4vXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogMjQuOTksXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwMDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbXCJVU0RcIiwgXCJFVVJcIiwgXCJHQlBcIiwgXCJBVURcIiwgXCJDQURcIiwgXCJTR0RcIiwgXCJSVUJcIl0sXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzOiBbXCJFVEhcIiwgXCJEQUlcIiwgXCJUVVNEXCIsIFwiVVNEQ1wiLCBcIlVTRFRcIiwgXCJCTkJfQlNDXCIsIFwiQlVTRF9CU0NcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuV1lSRV06IHtcbiAgICBsaW5lMTogXCJBcHBsZSBQYXkvIERlYml0LyBDcmVkaXQgQ2FyZFwiLFxuICAgIGxpbmUyOiBcIjQuOSUgKyAzMMKiIG9yIDUgVVNEXCIsXG4gICAgbGluZTM6IFwiJDI1MC9kYXlcIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL3N1cHBvcnQuc2VuZHd5cmUuY29tL2VuL1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDUsXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiVVNEXCIsIFwiQVVEXCIsIFwiQ0FEXCIsIFwiR0JQXCIsIFwiRVVSXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiVVNEQ1wiLCBcIlVTRFRcIl0sXG4gICAgaW5jbHVkZUZlZXM6IGZhbHNlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLlhBTlBPT0xdOiB7XG4gICAgbGluZTE6IFwiUGF5Tm93LyBJbnN0YVBheS8gRlBTLyBHb0pla1BheS8gVVBJLyBQcm9tcHRQYXkvIFZpZXRlbFBheS8gRHVpdE5vd1wiLFxuICAgIGxpbmUyOiBcIjIuNSUgYnV5aW5nLCAzJSBzZWxsaW5nXCIsXG4gICAgbGluZTM6IFwiJDIsNTAwIC8gZGF5XCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwibWFpbHRvOnN1cHBvcnRAeGFucG9vbC5jb21cIixcbiAgICBtaW5PcmRlclZhbHVlOiAxMDAsXG4gICAgbWF4T3JkZXJWYWx1ZTogMjUwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlNHRFwiLCBcIkhLRFwiLCBcIk1ZUlwiLCBcIlBIUFwiLCBcIklOUlwiLCBcIlZORFwiLCBcIlRIQlwiLCBcIklEUlwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIlVTRFRcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgc2VsbDogdHJ1ZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9LFxuICBbUEFZTUVOVF9QUk9WSURFUi5NRVJDVVJZT106IHtcbiAgICBsaW5lMTogXCJDcmVkaXQvIERlYml0IENhcmQvIEFwcGxlIFBheVwiLFxuICAgIGxpbmUyOiBcIjMuOTUlIG9yIDQgVVNEXCIsXG4gICAgbGluZTM6IFwiMTAsMDAw4oKsL2RheSwgMjUsMDAw4oKsL21vXCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwibWFpbHRvOnN1cHBvcnRAbWVyY3VyeW8uaW9cIixcbiAgICBtaW5PcmRlclZhbHVlOiAzMCxcbiAgICBtYXhPcmRlclZhbHVlOiA1MDAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiVVNEXCIsIFwiRVVSXCIsIFwiUlVCXCIsIFwiVFJZXCIsIFwiR0JQXCIsIFwiVUFIXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiQkFUXCIsIFwiVVNEVFwiLCBcIk9LQlwiXSxcbiAgICBpbmNsdWRlRmVlczogdHJ1ZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9LFxuICBbUEFZTUVOVF9QUk9WSURFUi5UUkFOU0FLXToge1xuICAgIGxpbmUxOiBcIkNyZWRpdC8gRGViaXQgQ2FyZC8gPGJyLz5CYW5rIFRyYW5zZmVyIChzZXBhL2dicClcIixcbiAgICBsaW5lMjogXCIwLjk5JSAtIDUuNSUgb3IgNSBVU0RcIixcbiAgICBsaW5lMzogXCI1MDDigqwvZGF5XCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9zdXBwb3J0LnRyYW5zYWsuY29tL2hjL2VuLVVTXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogMjAsXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiVVNEXCIsIFwiRVVSXCIsIFwiR0JQXCIsIFwiQVVEXCIsIFwiQ0FEXCIsIFwiU0dEXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiVVNEQ1wiLCBcIlVTRFRcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfVxufTtcbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZW46IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwiQ29udGludWVcIixcbiAgICAgIGFjdGlvblJlcXVpcmVkOiBcIkF1dGhvcml6YXRpb24gcmVxdWlyZWRcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwiQ2xpY2sgY29udGludWUgdG8gcHJvY2VlZCB3aXRoIHlvdXIgcmVxdWVzdCBpbiBhIHBvcHVwXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwiQ29va2llcyBSZXF1aXJlZFwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCJQbGVhc2UgZW5hYmxlIGNvb2tpZXMgaW4geW91ciBicm93c2VyIHByZWZlcmVuY2VzIHRvIGFjY2VzcyBUb3J1c1wiLFxuICAgICAgY2xpY2tIZXJlOiBcIk1vcmUgSW5mb1wiXG4gICAgfVxuICB9LFxuICBkZToge1xuICAgIGVtYmVkOiB7XG4gICAgICBjb250aW51ZTogXCJGb3J0c2V0emVuXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCJBdXRvcmlzaWVydW5nIGVyZm9yZGVybGljaFwiLFxuICAgICAgcGVuZGluZ0FjdGlvbjogXCJLbGlja2VuIFNpZSBpbiBlaW5lbSBQb3B1cCBhdWYgV2VpdGVyLCB1bSBtaXQgSWhyZXIgQW5mcmFnZSBmb3J0enVmYWhyZW5cIixcbiAgICAgIGNvb2tpZXNSZXF1aXJlZDogXCJDb29raWVzIGJlbsO2dGlndFwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCJCaXR0ZSBha3RpdmllcmVuIFNpZSBDb29raWVzIGluIElocmVuIEJyb3dzZXJlaW5zdGVsbHVuZ2VuLCB1bSBhdWYgVG9ydXMgenV6dWdyZWlmZW5cIixcbiAgICAgIGNsaWNrSGVyZTogXCJNZWhyIEluZm9cIlxuICAgIH1cbiAgfSxcbiAgamE6IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwi57aZ57aa44GZ44KLXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCLoqo3oqLzjgYzlv4XopoHjgafjgZlcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwi57aa6KGM44KS44Kv44Oq44OD44Kv44GX44Gm44CB44Od44OD44OX44Ki44OD44OX44Gn44Oq44Kv44Ko44K544OI44KS57aa6KGM44GX44G+44GZXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwi5b+F6KaB44Gq44Kv44OD44Kt44O8XCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIlRvcnVz44Gr44Ki44Kv44K744K544GZ44KL44Gr44Gv44CB44OW44Op44Km44K244Gu6Kit5a6a44GnQ29va2ll44KS5pyJ5Yq544Gr44GX44Gm44GP44Gg44GV44GE44CCXCIsXG4gICAgICBjbGlja0hlcmU6IFwi6Kmz44GX44GP44GvXCJcbiAgICB9XG4gIH0sXG4gIGtvOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIuqzhOyGje2VmOuLpFwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwi7Iq57J24IO2VhOyalFwiLFxuICAgICAgcGVuZGluZ0FjdGlvbjogXCLtjJ3sl4Xsl5DshJwg7JqU7LKt7J2EIOynhO2Wie2VmOugpOuptCDqs4Tsho3snYQg7YG066at7ZWY7Iut7Iuc7JikLlwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIuy/oO2CpCDtlYTsmpRcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwi67iM65287Jqw7KCAIO2ZmOqyvSDshKTsoJXsl5DshJwg7L+g7YKk66W8IO2ZnOyEse2ZlO2VmOyXrCBUb3J1c+yXkCDslaHshLjsiqTtlZjsi63si5zsmKQuXCIsXG4gICAgICBjbGlja0hlcmU6IFwi642UIOunjuydgCDsoJXrs7RcIlxuICAgIH1cbiAgfSxcbiAgemg6IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwi57un57utXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCLpnIDopoHmjojmnYNcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwi5Y2V5Ye757un57ut5Lul5Zyo5by55Ye656qX5Y+j5Lit57un57ut5oKo55qE6K+35rGCXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwi5b+F5aGrQ29va2llXCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIuivt+WcqOaCqOeahOa1j+iniOWZqOmmlumAiemhueS4reWQr+eUqGNvb2tpZeS7peiuv+mXrlRvcnVz44CCXCIsXG4gICAgICBjbGlja0hlcmU6IFwi5pu05aSa5L+h5oGvXCJcbiAgICB9XG4gIH1cbn07XG52YXIgY29uZmlndXJhdGlvbiA9IHtcbiAgc3VwcG9ydGVkVmVyaWZpZXJMaXN0OiBbTE9HSU5fUFJPVklERVIuR09PR0xFLCBMT0dJTl9QUk9WSURFUi5SRURESVQsIExPR0lOX1BST1ZJREVSLkRJU0NPUkRdLFxuICBwYXltZW50UHJvdmlkZXJzOiBwYXltZW50UHJvdmlkZXJzJDEsXG4gIGFwaTogXCJodHRwczovL2FwaS50b3IudXNcIixcbiAgdHJhbnNsYXRpb25zLFxuICBwcm9kVG9ydXNVcmw6IFwiXCIsXG4gIGxvY2FsU3RvcmFnZUtleTogXCJ0b3J1cy1cIi5jb25jYXQod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKVxufTtcblxuY29uc3QgcnVuT25Mb2FkID0gZm4gPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBpZiAod2luZG93LmRvY3VtZW50LmJvZHkgIT0gbnVsbCkge1xuICAgIFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbn0pO1xuY29uc3QgaHRtbFRvRWxlbWVudCA9IGh0bWwgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gIGNvbnN0IHRyaW1tZWRIdG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcblxuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0cmltbWVkSHRtbDtcbiAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbn07XG5jb25zdCBoYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChoYW5kbGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaGFuZGxlckFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGhhbmRsZXJBcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXJXcmFwcGVyID0gKCkgPT4ge1xuICAgIGhhbmRsZXIoLi4uaGFuZGxlckFyZ3MpO1xuICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xuICB9O1xuXG4gIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xufTtcbmNvbnN0IGhhbmRsZVN0cmVhbSA9IChoYW5kbGUsIGV2ZW50TmFtZSwgaGFuZGxlcikgPT4ge1xuICBjb25zdCBoYW5kbGVyV3JhcHBlciA9IGNodW5rID0+IHtcbiAgICBoYW5kbGVyKGNodW5rKTtcbiAgICBoYW5kbGUucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyV3JhcHBlcik7XG4gIH07XG5cbiAgaGFuZGxlLm9uKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xufTtcbmFzeW5jIGZ1bmN0aW9uIGRvY3VtZW50UmVhZHkoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCByZXNvbHZlKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgbG9nID0gbG9nbGV2ZWwuZ2V0TG9nZ2VyKFwidG9ydXMtZW1iZWRcIik7XG5cbnZhciBtZXNzYWdlcyA9IHtcbiAgZXJyb3JzOiB7XG4gICAgZGlzY29ubmVjdGVkOiAoKSA9PiBcIlRvcnVzOiBMb3N0IGNvbm5lY3Rpb24gdG8gVG9ydXMuXCIsXG4gICAgcGVybWFuZW50bHlEaXNjb25uZWN0ZWQ6ICgpID0+IFwiVG9ydXM6IERpc2Nvbm5lY3RlZCBmcm9tIGlmcmFtZS4gUGFnZSByZWxvYWQgcmVxdWlyZWQuXCIsXG4gICAgc2VuZFNpdGVNZXRhZGF0YTogKCkgPT4gXCJUb3J1czogRmFpbGVkIHRvIHNlbmQgc2l0ZSBtZXRhZGF0YS4gVGhpcyBpcyBhbiBpbnRlcm5hbCBlcnJvciwgcGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIixcbiAgICB1bnN1cHBvcnRlZFN5bmM6IG1ldGhvZCA9PiBcIlRvcnVzOiBUaGUgVG9ydXMgRXRoZXJldW0gcHJvdmlkZXIgZG9lcyBub3Qgc3VwcG9ydCBzeW5jaHJvbm91cyBtZXRob2RzIGxpa2UgXCIuY29uY2F0KG1ldGhvZCwgXCIgd2l0aG91dCBhIGNhbGxiYWNrIHBhcmFtZXRlci5cIiksXG4gICAgaW52YWxpZER1cGxleFN0cmVhbTogKCkgPT4gXCJNdXN0IHByb3ZpZGUgYSBOb2RlLmpzLXN0eWxlIGR1cGxleCBzdHJlYW0uXCIsXG4gICAgaW52YWxpZE9wdGlvbnM6IChtYXhFdmVudExpc3RlbmVycywgc2hvdWxkU2VuZE1ldGFkYXRhKSA9PiBcIkludmFsaWQgb3B0aW9ucy4gUmVjZWl2ZWQ6IHsgbWF4RXZlbnRMaXN0ZW5lcnM6IFwiLmNvbmNhdChtYXhFdmVudExpc3RlbmVycywgXCIsIHNob3VsZFNlbmRNZXRhZGF0YTogXCIpLmNvbmNhdChzaG91bGRTZW5kTWV0YWRhdGEsIFwiIH1cIiksXG4gICAgaW52YWxpZFJlcXVlc3RBcmdzOiAoKSA9PiBcIkV4cGVjdGVkIGEgc2luZ2xlLCBub24tYXJyYXksIG9iamVjdCBhcmd1bWVudC5cIixcbiAgICBpbnZhbGlkUmVxdWVzdE1ldGhvZDogKCkgPT4gXCInYXJncy5tZXRob2QnIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLlwiLFxuICAgIGludmFsaWRSZXF1ZXN0UGFyYW1zOiAoKSA9PiBcIidhcmdzLnBhcmFtcycgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYXJyYXkgaWYgcHJvdmlkZWQuXCIsXG4gICAgaW52YWxpZExvZ2dlck9iamVjdDogKCkgPT4gXCInYXJncy5sb2dnZXInIG11c3QgYmUgYW4gb2JqZWN0IGlmIHByb3ZpZGVkLlwiLFxuICAgIGludmFsaWRMb2dnZXJNZXRob2Q6IG1ldGhvZCA9PiBcIidhcmdzLmxvZ2dlcicgbXVzdCBpbmNsdWRlIHJlcXVpcmVkIG1ldGhvZCAnXCIuY29uY2F0KG1ldGhvZCwgXCInLlwiKVxuICB9LFxuICBpbmZvOiB7XG4gICAgY29ubmVjdGVkOiBjaGFpbklkID0+IFwiVG9ydXM6IENvbm5lY3RlZCB0byBjaGFpbiB3aXRoIElEIFxcXCJcIi5jb25jYXQoY2hhaW5JZCwgXCJcXFwiLlwiKVxuICB9LFxuICB3YXJuaW5nczoge1xuICAgIC8vIGRlcHJlY2F0ZWQgbWV0aG9kc1xuICAgIGVuYWJsZURlcHJlY2F0aW9uOiAnVG9ydXM6IFwiXCJldGhlcmV1bS5lbmFibGUoKVwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuICcgKyAnUGxlYXNlIHVzZSBcImV0aGVyZXVtLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIpXCIgaW5zdGVhZC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTAyJyxcbiAgICBzZW5kRGVwcmVjYXRpb246ICdUb3J1czogXCJldGhlcmV1bS5zZW5kKC4uLilcIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLicgKyAnIFBsZWFzZSB1c2UgXCJldGhlcmV1bS5zZW5kQXN5bmMoLi4uKVwiIG9yIFwiZXRoZXJldW0ucmVxdWVzdCguLi4pXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMnLFxuICAgIGV2ZW50czoge1xuICAgICAgY2xvc2U6ICdUb3J1czogVGhlIGV2ZW50IFwiY2xvc2VcIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiBQbGVhc2UgdXNlIFwiZGlzY29ubmVjdFwiIGluc3RlYWQuJyArIFwiXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzXCIsXG4gICAgICBkYXRhOiAnVG9ydXM6IFRoZSBldmVudCBcImRhdGFcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4nICsgJ1VzZSBcIm1lc3NhZ2VcIiBpbnN0ZWFkLlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5MyNtZXNzYWdlJyxcbiAgICAgIG5ldHdvcmtDaGFuZ2VkOiAnVG9ydXM6IFRoZSBldmVudCBcIm5ldHdvcmtDaGFuZ2VkXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4nICsgJyBQbGVhc2UgdXNlIFwiY2hhaW5DaGFuZ2VkXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMnLFxuICAgICAgbm90aWZpY2F0aW9uOiAnVG9ydXM6IFRoZSBldmVudCBcIm5vdGlmaWNhdGlvblwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuICcgKyAnUGxlYXNlIHVzZSBcIm1lc3NhZ2VcIiBpbnN0ZWFkLlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5MydcbiAgICB9LFxuICAgIHB1YmxpY0NvbmZpZ1N0b3JlOiAnVG9ydXM6IFRoZSBwcm9wZXJ0eSBcInB1YmxpY0NvbmZpZ1N0b3JlXCIgaXMgZGVwcmVjYXRlZCBhbmQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJ1xuICB9XG59O1xuXG5jb25zdCB7XG4gIHBheW1lbnRQcm92aWRlcnNcbn0gPSBjb25maWd1cmF0aW9uO1xuY29uc3QgdmFsaWRhdGVQYXltZW50UHJvdmlkZXIgPSAocHJvdmlkZXIsIHBhcmFtcykgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9ycyxcbiAgICAgIGlzVmFsaWQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb3ZpZGVyICYmICFwYXltZW50UHJvdmlkZXJzW3Byb3ZpZGVyXSkge1xuICAgIGVycm9ycy5wcm92aWRlciA9IFwiSW52YWxpZCBQcm92aWRlclwiO1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnMsXG4gICAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMFxuICAgIH07XG4gIH1cblxuICBjb25zdCBzZWxlY3RlZFByb3ZpZGVyID0gcGF5bWVudFByb3ZpZGVyc1twcm92aWRlcl07XG4gIGNvbnN0IHNlbGVjdGVkUGFyYW1zID0gcGFyYW1zIHx8IHt9OyAvLyBzZXQgZGVmYXVsdCB2YWx1ZXNcbiAgLy8gaWYgKCFzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5KSBbc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDdXJyZW5jeV0gPSBzZWxlY3RlZFByb3ZpZGVyLnZhbGlkQ3VycmVuY2llc1xuICAvLyBpZiAoIXNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZSkgc2VsZWN0ZWRQYXJhbXMuZmlhdFZhbHVlID0gc2VsZWN0ZWRQcm92aWRlci5taW5PcmRlclZhbHVlXG4gIC8vIGlmICghc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSkgW3NlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3ldID0gc2VsZWN0ZWRQcm92aWRlci52YWxpZENyeXB0b0N1cnJlbmNpZXNcbiAgLy8gdmFsaWRhdGlvbnNcblxuICBpZiAoc2VsZWN0ZWRQYXJhbXMuZmlhdFZhbHVlKSB7XG4gICAgY29uc3QgcmVxdWVzdGVkT3JkZXJBbW91bnQgPSArcGFyc2VGbG9hdChzZWxlY3RlZFBhcmFtcy5maWF0VmFsdWUudG9TdHJpbmcoKSkgfHwgMDtcbiAgICBpZiAocmVxdWVzdGVkT3JkZXJBbW91bnQgPCBzZWxlY3RlZFByb3ZpZGVyLm1pbk9yZGVyVmFsdWUpIGVycm9ycy5maWF0VmFsdWUgPSBcIlJlcXVlc3RlZCBhbW91bnQgaXMgbG93ZXIgdGhhbiBzdXBwb3J0ZWRcIjtcbiAgICBpZiAocmVxdWVzdGVkT3JkZXJBbW91bnQgPiBzZWxlY3RlZFByb3ZpZGVyLm1heE9yZGVyVmFsdWUgJiYgc2VsZWN0ZWRQcm92aWRlci5lbmZvcmNlTWF4KSBlcnJvcnMuZmlhdFZhbHVlID0gXCJSZXF1ZXN0ZWQgYW1vdW50IGlzIGhpZ2hlciB0aGFuIHN1cHBvcnRlZFwiO1xuICB9XG5cbiAgaWYgKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3VycmVuY3kgJiYgIXNlbGVjdGVkUHJvdmlkZXIudmFsaWRDdXJyZW5jaWVzLmluY2x1ZGVzKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3VycmVuY3kpKSB7XG4gICAgZXJyb3JzLnNlbGVjdGVkQ3VycmVuY3kgPSBcIlVuc3VwcG9ydGVkIGN1cnJlbmN5XCI7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSAmJiAhc2VsZWN0ZWRQcm92aWRlci52YWxpZENyeXB0b0N1cnJlbmNpZXMuaW5jbHVkZXMoc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSkpIHtcbiAgICBlcnJvcnMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSA9IFwiVW5zdXBwb3J0ZWQgY3J5cHRvQ3VycmVuY3lcIjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzLFxuICAgIGlzVmFsaWQ6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwXG4gIH07XG59OyAvLyB1dGlsaXR5IGZ1bmN0aW9uc1xuXG4vKipcbiAqIGpzb24tcnBjLWVuZ2luZSBtaWRkbGV3YXJlIHRoYXQgbG9ncyBSUEMgZXJyb3JzIGFuZCBhbmQgdmFsaWRhdGVzIHJlcS5tZXRob2QuXG4gKlxuICogQHBhcmFtIGxvZyAtIFRoZSBsb2dnaW5nIEFQSSB0byB1c2UuXG4gKiBAcmV0dXJucyAganNvbi1ycGMtZW5naW5lIG1pZGRsZXdhcmUgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFcnJvck1pZGRsZXdhcmUoKSB7XG4gIHJldHVybiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAvLyBqc29uLXJwYy1lbmdpbmUgd2lsbCB0ZXJtaW5hdGUgdGhlIHJlcXVlc3Qgd2hlbiBpdCBub3RpY2VzIHRoaXMgZXJyb3JcbiAgICBpZiAodHlwZW9mIHJlcS5tZXRob2QgIT09IFwic3RyaW5nXCIgfHwgIXJlcS5tZXRob2QpIHtcbiAgICAgIHJlcy5lcnJvciA9IGV0aEVycm9ycy5ycGMuaW52YWxpZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIlRoZSByZXF1ZXN0ICdtZXRob2QnIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLlwiLFxuICAgICAgICBkYXRhOiByZXFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5leHQoZG9uZSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVycm9yXG4gICAgICB9ID0gcmVzO1xuXG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICB9XG5cbiAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrIC0gUlBDIEVycm9yOiBcIi5jb25jYXQoZXJyb3IubWVzc2FnZSksIGVycm9yKTtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfSk7XG4gIH07XG59IC8vIHJlc29sdmUgcmVzcG9uc2UucmVzdWx0IG9yIHJlc3BvbnNlLCByZWplY3QgZXJyb3JzXG4vKipcbiAqIExvZ3MgYSBzdHJlYW0gZGlzY29ubmVjdGlvbiBlcnJvci4gRW1pdHMgYW4gJ2Vycm9yJyBpZiBnaXZlbiBhblxuICogRXZlbnRFbWl0dGVyIHRoYXQgaGFzIGxpc3RlbmVycyBmb3IgdGhlICdlcnJvcicgZXZlbnQuXG4gKlxuICogQHBhcmFtIGxvZyAtIFRoZSBsb2dnaW5nIEFQSSB0byB1c2UuXG4gKiBAcGFyYW0gcmVtb3RlTGFiZWwgLSBUaGUgbGFiZWwgb2YgdGhlIGRpc2Nvbm5lY3RlZCBzdHJlYW0uXG4gKiBAcGFyYW0gZXJyb3IgLSBUaGUgYXNzb2NpYXRlZCBlcnJvciB0byBsb2cuXG4gKiBAcGFyYW0gZW1pdHRlciAtIFRoZSBsb2dnaW5nIEFQSSB0byB1c2UuXG4gKi9cblxuZnVuY3Rpb24gbG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmcocmVtb3RlTGFiZWwsIGVycm9yLCBlbWl0dGVyKSB7XG4gIGxldCB3YXJuaW5nTXNnID0gXCJNZXRhTWFzazogTG9zdCBjb25uZWN0aW9uIHRvIFxcXCJcIi5jb25jYXQocmVtb3RlTGFiZWwsIFwiXFxcIi5cIik7XG5cbiAgaWYgKGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgJiYgZXJyb3Iuc3RhY2spIHtcbiAgICB3YXJuaW5nTXNnICs9IFwiXFxuXCIuY29uY2F0KGVycm9yLnN0YWNrKTtcbiAgfVxuXG4gIGxvZy53YXJuKHdhcm5pbmdNc2cpO1xuXG4gIGlmIChlbWl0dGVyICYmIGVtaXR0ZXIubGlzdGVuZXJDb3VudChcImVycm9yXCIpID4gMCkge1xuICAgIGVtaXR0ZXIuZW1pdChcImVycm9yXCIsIHdhcm5pbmdNc2cpO1xuICB9XG59XG5jb25zdCBnZXRQcmVvcGVuSW5zdGFuY2VJZCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xuY29uc3QgZ2V0VG9ydXNVcmwgPSBhc3luYyAoYnVpbGRFbnYsIGludGVncml0eSkgPT4ge1xuICBsZXQgdG9ydXNVcmw7XG4gIGxldCBsb2dMZXZlbDsgLy8gRG8gbm90IGNoYW5nZSB0aGlzIGxpbmVcblxuICBjb25zdCB2ZXJzaW9uID0gXCIxLjIwLjRcIjtcbiAgbGV0IHZlcnNpb25Vc2VkID0gaW50ZWdyaXR5LnZlcnNpb24gfHwgdmVyc2lvbjtcblxuICB0cnkge1xuICAgIGlmICgoYnVpbGRFbnYgPT09IFwiYmluYW5jZVwiIHx8IGJ1aWxkRW52ID09PSBcInByb2R1Y3Rpb25cIikgJiYgIWludGVncml0eS52ZXJzaW9uKSB7XG4gICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICBpZiAoIWNvbmZpZ3VyYXRpb24ucHJvZFRvcnVzVXJsKSByZXNwb25zZSA9IGF3YWl0IGdldChcIlwiLmNvbmNhdChjb25maWd1cmF0aW9uLmFwaSwgXCIvbGF0ZXN0dmVyc2lvbj9uYW1lPUB0b3J1c2xhYnMvdG9ydXMtZW1iZWQmdmVyc2lvbj1cIikuY29uY2F0KHZlcnNpb24pLCB7fSwge1xuICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgIH0pO2Vsc2UgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IGNvbmZpZ3VyYXRpb24ucHJvZFRvcnVzVXJsXG4gICAgICB9O1xuICAgICAgdmVyc2lvblVzZWQgPSByZXNwb25zZS5kYXRhOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1hdG9taWMtdXBkYXRlc1xuXG4gICAgICBjb25maWd1cmF0aW9uLnByb2RUb3J1c1VybCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZy5lcnJvcihlcnJvciwgXCJ1bmFibGUgdG8gZmV0Y2ggbGF0ZXN0IHZlcnNpb25cIik7XG4gIH1cblxuICBsb2cuaW5mbyhcInZlcnNpb24gdXNlZDogXCIsIHZlcnNpb25Vc2VkKTtcblxuICBzd2l0Y2ggKGJ1aWxkRW52KSB7XG4gICAgY2FzZSBcImJpbmFuY2VcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL2JpbmFuY2UudG9yLnVzL3ZcIi5jb25jYXQodmVyc2lvblVzZWQpO1xuICAgICAgbG9nTGV2ZWwgPSBcImluZm9cIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcInRlc3RpbmdcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL3Rlc3RpbmcudG9yLnVzXCI7XG4gICAgICBsb2dMZXZlbCA9IFwiZGVidWdcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImxyY1wiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vbHJjLnRvci51c1wiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJiZXRhXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly9iZXRhLnRvci51c1wiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJkZXZlbG9wbWVudFwiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDA1MFwiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly9hcHAudG9yLnVzL3ZcIi5jb25jYXQodmVyc2lvblVzZWQpO1xuICAgICAgbG9nTGV2ZWwgPSBcImVycm9yXCI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9ydXNVcmwsXG4gICAgbG9nTGV2ZWxcbiAgfTtcbn07XG5jb25zdCBnZXRVc2VyTGFuZ3VhZ2UgPSAoKSA9PiB7XG4gIGxldCB1c2VyTGFuZ3VhZ2UgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlIHx8IFwiZW4tVVNcIjtcbiAgY29uc3QgdXNlckxhbmd1YWdlcyA9IHVzZXJMYW5ndWFnZS5zcGxpdChcIi1cIik7XG4gIHVzZXJMYW5ndWFnZSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWd1cmF0aW9uLnRyYW5zbGF0aW9ucywgdXNlckxhbmd1YWdlc1swXSkgPyB1c2VyTGFuZ3VhZ2VzWzBdIDogXCJlblwiO1xuICByZXR1cm4gdXNlckxhbmd1YWdlO1xufTtcbmNvbnN0IEVNSVRURURfTk9USUZJQ0FUSU9OUyA9IFtcImV0aF9zdWJzY3JpcHRpb25cIiAvLyBwZXIgZXRoLWpzb24tcnBjLWZpbHRlcnMvc3Vic2NyaXB0aW9uTWFuYWdlclxuXTtcbmNvbnN0IE5PT1AgPSAoKSA9PiB7Ly8gZW1wdHkgZnVuY3Rpb25cbn07XG5jb25zdCBGRUFUVVJFU19QUk9WSURFUl9DSEFOR0VfV0lORE9XID0gXCJkaXJlY3Rvcmllcz0wLHRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD02NjAsd2lkdGg9Mzc1XCI7XG5jb25zdCBGRUFUVVJFU19ERUZBVUxUX1dBTExFVF9XSU5ET1cgPSBcImRpcmVjdG9yaWVzPTAsdGl0bGViYXI9MCx0b29sYmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxtZW51YmFyPTAsaGVpZ2h0PTc0MCx3aWR0aD0xMzE1XCI7XG5jb25zdCBGRUFUVVJFU19DT05GSVJNX1dJTkRPVyA9IFwiZGlyZWN0b3JpZXM9MCx0aXRsZWJhcj0wLHRvb2xiYXI9MCxzdGF0dXM9MCxsb2NhdGlvbj0wLG1lbnViYXI9MCxoZWlnaHQ9NzAwLHdpZHRoPTQ1MFwiO1xuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuXG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlICYmICggLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgIGUuY29kZSA9PT0gMjIgfHwgLy8gRmlyZWZveFxuICAgIGUuY29kZSA9PT0gMTAxNCB8fCAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8IC8vIEZpcmVmb3hcbiAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiYgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICBzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwO1xuICB9XG59XG5mdW5jdGlvbiBnZXRQb3B1cEZlYXR1cmVzKCkge1xuICAvLyBGaXhlcyBkdWFsLXNjcmVlbiBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9zdCBicm93c2VycyAgICAgIEZpcmVmb3hcbiAgY29uc3QgZHVhbFNjcmVlbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiB3aW5kb3cuc2NyZWVuWDtcbiAgY29uc3QgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiB3aW5kb3cuc2NyZWVuWTtcbiAgY29uc3QgdyA9IDEyMDA7XG4gIGNvbnN0IGggPSA3MDA7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gIGNvbnN0IHN5c3RlbVpvb20gPSAxOyAvLyBObyByZWxpYWJsZSBlc3RpbWF0ZVxuXG4gIGNvbnN0IGxlZnQgPSBNYXRoLmFicygod2lkdGggLSB3KSAvIDIgLyBzeXN0ZW1ab29tICsgZHVhbFNjcmVlbkxlZnQpO1xuICBjb25zdCB0b3AgPSBNYXRoLmFicygoaGVpZ2h0IC0gaCkgLyAyIC8gc3lzdGVtWm9vbSArIGR1YWxTY3JlZW5Ub3ApO1xuICBjb25zdCBmZWF0dXJlcyA9IFwidGl0bGViYXI9MCx0b29sYmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxtZW51YmFyPTAsaGVpZ2h0PVwiLmNvbmNhdChoIC8gc3lzdGVtWm9vbSwgXCIsd2lkdGg9XCIpLmNvbmNhdCh3IC8gc3lzdGVtWm9vbSwgXCIsdG9wPVwiKS5jb25jYXQodG9wLCBcIixsZWZ0PVwiKS5jb25jYXQobGVmdCk7XG4gIHJldHVybiBmZWF0dXJlcztcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuU2FmZUV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwOyAvLyByZXNvbHZlIHJlc3BvbnNlLnJlc3VsdCwgcmVqZWN0IGVycm9yc1xuXG5jb25zdCBnZXRScGNQcm9taXNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGxldCB1bndyYXBSZXN1bHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gIHJldHVybiAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIXVud3JhcFJlc3VsdCB8fCBBcnJheS5pc0FycmF5KHJlc3BvbnNlKSA/IHJlc29sdmUocmVzcG9uc2UpIDogcmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuICB9O1xufTtcblxuY2xhc3MgVG9ydXNJbnBhZ2VQcm92aWRlciBleHRlbmRzIFNhZmVFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogVGhlIGNoYWluIElEIG9mIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIEV0aGVyZXVtIGNoYWluLlxuICAgKiBTZWUgW2NoYWluSWQubmV0d29ya117QGxpbmsgaHR0cHM6Ly9jaGFpbmlkLm5ldHdvcmt9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIHVzZXIncyBjdXJyZW50bHkgc2VsZWN0ZWQgRXRoZXJldW0gYWRkcmVzcy5cbiAgICogSWYgbnVsbCwgTWV0YU1hc2sgaXMgZWl0aGVyIGxvY2tlZCBvciB0aGUgdXNlciBoYXMgbm90IHBlcm1pdHRlZCBhbnlcbiAgICogYWRkcmVzc2VzIHRvIGJlIHZpZXdlZC5cbiAgICovXG5cbiAgLyoqXG4gICAqIEluZGljYXRpbmcgdGhhdCB0aGlzIHByb3ZpZGVyIGlzIGEgTWV0YU1hc2sgcHJvdmlkZXIuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25uZWN0aW9uU3RyZWFtKSB7XG4gICAgbGV0IHtcbiAgICAgIG1heEV2ZW50TGlzdGVuZXJzID0gMTAwLFxuICAgICAgc2hvdWxkU2VuZE1ldGFkYXRhID0gdHJ1ZSxcbiAgICAgIGpzb25ScGNTdHJlYW1OYW1lID0gXCJwcm92aWRlclwiXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgc3VwZXIoKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYWluSWRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlbGVjdGVkQWRkcmVzc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3JwY0VuZ2luZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmV0d29ya1ZlcnNpb25cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNob3VsZFNlbmRNZXRhZGF0YVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNUb3J1c1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3B1YmxpY0NvbmZpZ1N0b3JlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0cnlQcmVvcGVuSGFuZGxlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmFibGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zdGF0ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2pzb25ScGNDb25uZWN0aW9uXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc2VudFdhcm5pbmdzXCIsIHtcbiAgICAgIC8vIG1ldGhvZHNcbiAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICBleHBlcmltZW50YWxNZXRob2RzOiBmYWxzZSxcbiAgICAgIHNlbmQ6IGZhbHNlLFxuICAgICAgcHVibGljQ29uZmlnU3RvcmU6IGZhbHNlLFxuICAgICAgLy8gZXZlbnRzXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xvc2U6IGZhbHNlLFxuICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgICAgbmV0d29ya0NoYW5nZWQ6IGZhbHNlLFxuICAgICAgICBub3RpZmljYXRpb246IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWlzRHVwbGV4U3RyZWFtKGNvbm5lY3Rpb25TdHJlYW0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuZXJyb3JzLmludmFsaWREdXBsZXhTdHJlYW0oKSk7XG4gICAgfVxuXG4gICAgdGhpcy5pc1RvcnVzID0gdHJ1ZTtcbiAgICB0aGlzLnNldE1heExpc3RlbmVycyhtYXhFdmVudExpc3RlbmVycyk7IC8vIHByaXZhdGUgc3RhdGVcblxuICAgIHRoaXMuX3N0YXRlID0gX29iamVjdFNwcmVhZCQxKHt9LCBUb3J1c0lucGFnZVByb3ZpZGVyLl9kZWZhdWx0U3RhdGUpOyAvLyBwdWJsaWMgc3RhdGVcblxuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gbnVsbDtcbiAgICB0aGlzLm5ldHdvcmtWZXJzaW9uID0gbnVsbDtcbiAgICB0aGlzLmNoYWluSWQgPSBudWxsO1xuICAgIHRoaXMuc2hvdWxkU2VuZE1ldGFkYXRhID0gc2hvdWxkU2VuZE1ldGFkYXRhOyAvLyBiaW5kIGZ1bmN0aW9ucyAodG8gcHJldmVudCBlLmcuIHdlYjNAMS54IGZyb20gbWFraW5nIHVuYm91bmQgY2FsbHMpXG5cbiAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQgPSB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVDaGFpbkNoYW5nZWQgPSB0aGlzLl9oYW5kbGVDaGFpbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQgPSB0aGlzLl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVDb25uZWN0ID0gdGhpcy5faGFuZGxlQ29ubmVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QgPSB0aGlzLl9oYW5kbGVEaXNjb25uZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlU3RyZWFtRGlzY29ubmVjdCA9IHRoaXMuX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zZW5kU3luYyA9IHRoaXMuX3NlbmRTeW5jLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcnBjUmVxdWVzdCA9IHRoaXMuX3JwY1JlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbiA9IHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZVN0YXRlID0gdGhpcy5faW5pdGlhbGl6ZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXF1ZXN0ID0gdGhpcy5yZXF1ZXN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kQXN5bmMgPSB0aGlzLnNlbmRBc3luYy5iaW5kKHRoaXMpOyAvLyB0aGlzLmVuYWJsZSA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyk7XG4gICAgLy8gc2V0dXAgY29ubmVjdGlvblN0cmVhbSBtdWx0aXBsZXhpbmdcblxuICAgIGNvbnN0IG11eCA9IG5ldyBPYmplY3RNdWx0aXBsZXgoKTtcbiAgICBwdW1wKGNvbm5lY3Rpb25TdHJlYW0sIG11eCwgY29ubmVjdGlvblN0cmVhbSwgdGhpcy5faGFuZGxlU3RyZWFtRGlzY29ubmVjdC5iaW5kKHRoaXMsIFwiTWV0YU1hc2tcIikpOyAvLyBzdWJzY3JpYmUgdG8gbWV0YW1hc2sgcHVibGljIGNvbmZpZyAob25lLXdheSlcblxuICAgIHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlID0gbmV3IE9ic2VydmFibGVTdG9yZSh7XG4gICAgICBzdG9yYWdlS2V5OiBcIk1ldGFtYXNrLUNvbmZpZ1wiXG4gICAgfSk7IC8vIGhhbmRsZSBpc1VubG9ja2VkIGNoYW5nZXMsIGFuZCBjaGFpbkNoYW5nZWQgYW5kIG5ldHdvcmtDaGFuZ2VkIGV2ZW50c1xuICAgIC8vIHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlLnN1YnNjcmliZSgoc3RyaW5naWZpZWRTdGF0ZSkgPT4ge1xuICAgIC8vICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB1c2luZyBzdG9yZSBhcyBzdHJpbmdcbiAgICAvLyAgIGNvbnN0IHN0YXRlID0gSlNPTi5wYXJzZShzdHJpbmdpZmllZFN0YXRlIGFzIHVua25vd24gYXMgc3RyaW5nKTtcbiAgICAvLyAgIGlmIChcImlzVW5sb2NrZWRcIiBpbiBzdGF0ZSAmJiBzdGF0ZS5pc1VubG9ja2VkICE9PSB0aGlzLl9zdGF0ZS5pc1VubG9ja2VkKSB7XG4gICAgLy8gICAgIHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQgPSBzdGF0ZS5pc1VubG9ja2VkO1xuICAgIC8vICAgICBpZiAoIXRoaXMuX3N0YXRlLmlzVW5sb2NrZWQpIHtcbiAgICAvLyAgICAgICAvLyBhY2NvdW50cyBhcmUgbmV2ZXIgZXhwb3NlZCB3aGVuIHRoZSBleHRlbnNpb24gaXMgbG9ja2VkXG4gICAgLy8gICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKFtdKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAvLyB0aGlzIHdpbGwgZ2V0IHRoZSBleHBvc2VkIGFjY291bnRzLCBpZiBhbnlcbiAgICAvLyAgICAgICB0cnkge1xuICAgIC8vICAgICAgICAgdGhpcy5fcnBjUmVxdWVzdChcbiAgICAvLyAgICAgICAgICAgeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsIHBhcmFtczogW10gfSxcbiAgICAvLyAgICAgICAgICAgTk9PUCxcbiAgICAvLyAgICAgICAgICAgdHJ1ZSAvLyBpbmRpY2F0aW5nIHRoYXQgZXRoX2FjY291bnRzIF9zaG91bGRfIHVwZGF0ZSBhY2NvdW50c1xuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgLy8gICAgICAgICAvLyBTd2FsbG93IGVycm9yXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBpZiAoXCJzZWxlY3RlZEFkZHJlc3NcIiBpbiBzdGF0ZSAmJiB0aGlzLnNlbGVjdGVkQWRkcmVzcyAhPT0gc3RhdGUuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgdGhpcy5fcnBjUmVxdWVzdChcbiAgICAvLyAgICAgICAgIHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiLCBwYXJhbXM6IFtdIH0sXG4gICAgLy8gICAgICAgICBOT09QLFxuICAgIC8vICAgICAgICAgdHJ1ZSAvLyBpbmRpY2F0aW5nIHRoYXQgZXRoX2FjY291bnRzIF9zaG91bGRfIHVwZGF0ZSBhY2NvdW50c1xuICAgIC8vICAgICAgICk7XG4gICAgLy8gICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyAgICAgICAvLyBTd2FsbG93IGVycm9yXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIC8vIEVtaXQgY2hhaW5DaGFuZ2VkIGV2ZW50IG9uIGNoYWluIGNoYW5nZVxuICAgIC8vICAgaWYgKFwiY2hhaW5JZFwiIGluIHN0YXRlICYmIHN0YXRlLmNoYWluSWQgIT09IHRoaXMuY2hhaW5JZCkge1xuICAgIC8vICAgICB0aGlzLmNoYWluSWQgPSBzdGF0ZS5jaGFpbklkIHx8IG51bGw7XG4gICAgLy8gICAgIHRoaXMuZW1pdChcImNoYWluQ2hhbmdlZFwiLCB0aGlzLmNoYWluSWQpO1xuICAgIC8vICAgICAvLyBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGNvbm5lY3RlZCwgZm9yIEVJUC0xMTkzIGNvbXBsaWFuY2VcbiAgICAvLyAgICAgLy8gd2UgZG8gdGhpcyBoZXJlIHNvIHRoYXQgaWZyYW1lIGNhbiBpbml0aWFsaXplXG4gICAgLy8gICAgIGlmICghdGhpcy5fc3RhdGUuaGFzRW1pdHRlZENvbm5lY3Rpb24pIHtcbiAgICAvLyAgICAgICB0aGlzLl9oYW5kbGVDb25uZWN0KHRoaXMuY2hhaW5JZCk7XG4gICAgLy8gICAgICAgdGhpcy5fc3RhdGUuaGFzRW1pdHRlZENvbm5lY3Rpb24gPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICAvLyBFbWl0IG5ldHdvcmtDaGFuZ2VkIGV2ZW50IG9uIG5ldHdvcmsgY2hhbmdlXG4gICAgLy8gICBpZiAoXCJuZXR3b3JrVmVyc2lvblwiIGluIHN0YXRlICYmIHN0YXRlLm5ldHdvcmtWZXJzaW9uICE9PSB0aGlzLm5ldHdvcmtWZXJzaW9uKSB7XG4gICAgLy8gICAgIHRoaXMubmV0d29ya1ZlcnNpb24gPSBzdGF0ZS5uZXR3b3JrVmVyc2lvbiB8fCBudWxsO1xuICAgIC8vICAgICB0aGlzLmVtaXQoXCJuZXR3b3JrQ2hhbmdlZFwiLCB0aGlzLm5ldHdvcmtWZXJzaW9uKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICAgIHB1bXAobXV4LmNyZWF0ZVN0cmVhbShcInB1YmxpY0NvbmZpZ1wiKSwgc3RvcmVBc1N0cmVhbSh0aGlzLl9wdWJsaWNDb25maWdTdG9yZSksIC8vIFJQQyByZXF1ZXN0cyBzaG91bGQgc3RpbGwgd29yayBpZiBvbmx5IHRoaXMgc3RyZWFtIGZhaWxzXG4gICAgbG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmcuYmluZCh0aGlzLCBcIk1ldGFNYXNrIFB1YmxpY0NvbmZpZ1N0b3JlXCIpKTsgLy8gaWdub3JlIHBoaXNoaW5nIHdhcm5pbmcgbWVzc2FnZSAoaGFuZGxlZCBlbHNld2hlcmUpXG5cbiAgICBtdXguaWdub3JlU3RyZWFtKFwicGhpc2hpbmdcIik7IC8vIHNldHVwIG93biBldmVudCBsaXN0ZW5lcnNcbiAgICAvLyBFSVAtMTE5MyBjb25uZWN0XG5cbiAgICB0aGlzLm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgfSk7IC8vIGNvbm5lY3QgdG8gYXN5bmMgcHJvdmlkZXJcblxuICAgIGNvbnN0IGpzb25ScGNDb25uZWN0aW9uID0gY3JlYXRlU3RyZWFtTWlkZGxld2FyZSgpO1xuICAgIHB1bXAoanNvblJwY0Nvbm5lY3Rpb24uc3RyZWFtLCBtdXguY3JlYXRlU3RyZWFtKGpzb25ScGNTdHJlYW1OYW1lKSwganNvblJwY0Nvbm5lY3Rpb24uc3RyZWFtLCB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0LmJpbmQodGhpcywgXCJNZXRhTWFzayBScGNQcm92aWRlclwiKSk7IC8vIGhhbmRsZSBSUEMgcmVxdWVzdHMgdmlhIGRhcHAtc2lkZSBycGMgZW5naW5lXG5cbiAgICBjb25zdCBycGNFbmdpbmUgPSBuZXcgSlJQQ0VuZ2luZSgpO1xuICAgIHJwY0VuZ2luZS5wdXNoKGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlKCkpO1xuICAgIHJwY0VuZ2luZS5wdXNoKGNyZWF0ZUVycm9yTWlkZGxld2FyZSgpKTtcbiAgICBycGNFbmdpbmUucHVzaChqc29uUnBjQ29ubmVjdGlvbi5taWRkbGV3YXJlKTtcbiAgICB0aGlzLl9ycGNFbmdpbmUgPSBycGNFbmdpbmU7IC8vIGpzb24gcnBjIG5vdGlmaWNhdGlvbiBsaXN0ZW5lclxuXG4gICAganNvblJwY0Nvbm5lY3Rpb24uZXZlbnRzLm9uKFwibm90aWZpY2F0aW9uXCIsIHBheWxvYWQgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIHBhcmFtc1xuICAgICAgfSA9IHBheWxvYWQ7XG5cbiAgICAgIGlmIChtZXRob2QgPT09IFwid2FsbGV0X2FjY291bnRzQ2hhbmdlZFwiKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwid2FsbGV0X3VubG9ja1N0YXRlQ2hhbmdlZFwiKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZChwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwid2FsbGV0X2NoYWluQ2hhbmdlZFwiKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZChwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChFTUlUVEVEX05PVElGSUNBVElPTlMuaW5jbHVkZXMocGF5bG9hZC5tZXRob2QpKSB7XG4gICAgICAgIC8vIEVJUCAxMTkzIHN1YnNjcmlwdGlvbnMsIHBlciBldGgtanNvbi1ycGMtZmlsdGVycy9zdWJzY3JpcHRpb25NYW5hZ2VyXG4gICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgcGF5bG9hZCk7IC8vIGRlcHJlY2F0ZWRcblxuICAgICAgICB0aGlzLmVtaXQoXCJub3RpZmljYXRpb25cIiwgcGFyYW1zLnJlc3VsdCk7XG4gICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwge1xuICAgICAgICAgIHR5cGU6IG1ldGhvZCxcbiAgICAgICAgICBkYXRhOiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgZm9yIG9sZGVyIG5vbiBFSVAgMTE5MyBzdWJzY3JpcHRpb25zXG4gICAgICAvLyB0aGlzLmVtaXQoJ2RhdGEnLCBudWxsLCBwYXlsb2FkKVxuXG4gICAgfSk7XG4gIH1cblxuICBnZXQgcHVibGljQ29uZmlnU3RvcmUoKSB7XG4gICAgaWYgKCF0aGlzLl9zZW50V2FybmluZ3MucHVibGljQ29uZmlnU3RvcmUpIHtcbiAgICAgIGxvZy53YXJuKG1lc3NhZ2VzLndhcm5pbmdzLnB1YmxpY0NvbmZpZ1N0b3JlKTtcbiAgICAgIHRoaXMuX3NlbnRXYXJuaW5ncy5wdWJsaWNDb25maWdTdG9yZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGlucGFnZSBwcm92aWRlciBpcyBjb25uZWN0ZWQgdG8gVG9ydXMuXG4gICAqL1xuXG5cbiAgaXNDb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkO1xuICB9XG4gIC8qKlxuICAgKiBTdWJtaXRzIGFuIFJQQyByZXF1ZXN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aXRoIHRoZSBnaXZlbiBwYXJhbXMuXG4gICAqIFJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGNhbGwsIG9yIHJlamVjdHMgb24gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSBhcmdzIC0gVGhlIFJQQyByZXF1ZXN0IGFyZ3VtZW50cy5cbiAgICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBSUEMgbWV0aG9kLFxuICAgKiBvciByZWplY3RzIGlmIGFuIGVycm9yIGlzIGVuY291bnRlcmVkLlxuICAgKi9cblxuXG4gIGFzeW5jIHJlcXVlc3QoYXJncykge1xuICAgIGlmICghYXJncyB8fCB0eXBlb2YgYXJncyAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICB0aHJvdyBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMuZXJyb3JzLmludmFsaWRSZXF1ZXN0QXJncygpLFxuICAgICAgICBkYXRhOiBhcmdzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBtZXRob2QsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gYXJncztcblxuICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSBcInN0cmluZ1wiIHx8IG1ldGhvZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IGV0aEVycm9ycy5ycGMuaW52YWxpZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuaW52YWxpZFJlcXVlc3RNZXRob2QoKSxcbiAgICAgICAgZGF0YTogYXJnc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KHBhcmFtcykgJiYgKHR5cGVvZiBwYXJhbXMgIT09IFwib2JqZWN0XCIgfHwgcGFyYW1zID09PSBudWxsKSkge1xuICAgICAgdGhyb3cgZXRoRXJyb3JzLnJwYy5pbnZhbGlkUmVxdWVzdCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VzLmVycm9ycy5pbnZhbGlkUmVxdWVzdFBhcmFtcygpLFxuICAgICAgICBkYXRhOiBhcmdzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcnBjUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGFyYW1zXG4gICAgICB9LCBnZXRScGNQcm9taXNlQ2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0KSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYW4gUlBDIHJlcXVlc3QgcGVyIHRoZSBnaXZlbiBKU09OLVJQQyByZXF1ZXN0IG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHBheWxvYWQgLSBUaGUgUlBDIHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcGFyYW0gY2IgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuXG5cbiAgc2VuZEFzeW5jKHBheWxvYWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fcnBjUmVxdWVzdChwYXlsb2FkLCBjYWxsYmFjayk7XG4gIH1cbiAgLyoqXG4gICAqIFdlIG92ZXJyaWRlIHRoZSBmb2xsb3dpbmcgZXZlbnQgbWV0aG9kcyBzbyB0aGF0IHdlIGNhbiB3YXJuIGNvbnN1bWVyc1xuICAgKiBhYm91dCBkZXByZWNhdGVkIGV2ZW50czpcbiAgICogICBhZGRMaXN0ZW5lciwgb24sIG9uY2UsIHByZXBlbmRMaXN0ZW5lciwgcHJlcGVuZE9uY2VMaXN0ZW5lclxuICAgKi9cblxuXG4gIGFkZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIub24oZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLm9uY2UoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBwcmVwZW5kTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIucHJlcGVuZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcHJlcGVuZE9uY2VMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5wcmVwZW5kT25jZUxpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9IC8vIFByaXZhdGUgTWV0aG9kc1xuICAvLz0gPT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBoZWxwZXIuXG4gICAqIFBvcHVsYXRlcyBpbml0aWFsIHN0YXRlIGJ5IGNhbGxpbmcgJ3dhbGxldF9nZXRQcm92aWRlclN0YXRlJyBhbmQgZW1pdHNcbiAgICogbmVjZXNzYXJ5IGV2ZW50cy5cbiAgICovXG5cblxuICBhc3luYyBfaW5pdGlhbGl6ZVN0YXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjY291bnRzLFxuICAgICAgICBjaGFpbklkLFxuICAgICAgICBpc1VubG9ja2VkLFxuICAgICAgICBuZXR3b3JrVmVyc2lvblxuICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJ3YWxsZXRfZ2V0UHJvdmlkZXJTdGF0ZVwiXG4gICAgICB9KTsgLy8gaW5kaWNhdGUgdGhhdCB3ZSd2ZSBjb25uZWN0ZWQsIGZvciBFSVAtMTE5MyBjb21wbGlhbmNlXG5cbiAgICAgIHRoaXMuZW1pdChcImNvbm5lY3RcIiwge1xuICAgICAgICBjaGFpbklkXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlQ2hhaW5DaGFuZ2VkKHtcbiAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgbmV0d29ya1ZlcnNpb25cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQoe1xuICAgICAgICBhY2NvdW50cyxcbiAgICAgICAgaXNVbmxvY2tlZFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChhY2NvdW50cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrOiBGYWlsZWQgdG8gZ2V0IGluaXRpYWwgc3RhdGUuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgbG9nLmluZm8oXCJpbml0aWFsaXplZCBzdGF0ZVwiKTtcbiAgICAgIHRoaXMuX3N0YXRlLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW1pdChcIl9pbml0aWFsaXplZFwiKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEludGVybmFsIFJQQyBtZXRob2QuIEZvcndhcmRzIHJlcXVlc3RzIHRvIGJhY2tncm91bmQgdmlhIHRoZSBSUEMgZW5naW5lLlxuICAgKiBBbHNvIHJlbWFwIGlkcyBpbmJvdW5kIGFuZCBvdXRib3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHBheWxvYWQgLSBUaGUgUlBDIHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY29uc3VtZXIncyBjYWxsYmFjay5cbiAgICogQHBhcmFtIGlzSW50ZXJuYWwgLSBmYWxzZSAtIFdoZXRoZXIgdGhlIHJlcXVlc3QgaXMgaW50ZXJuYWwuXG4gICAqL1xuXG5cbiAgX3JwY1JlcXVlc3QocGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgICBsZXQgaXNJbnRlcm5hbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgbGV0IGNiID0gY2FsbGJhY2s7XG4gICAgY29uc3QgX3BheWxvYWQgPSBwYXlsb2FkO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KF9wYXlsb2FkKSkge1xuICAgICAgaWYgKCFfcGF5bG9hZC5qc29ucnBjKSB7XG4gICAgICAgIF9wYXlsb2FkLmpzb25ycGMgPSBcIjIuMFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3BheWxvYWQubWV0aG9kID09PSBcImV0aF9hY2NvdW50c1wiIHx8IF9wYXlsb2FkLm1ldGhvZCA9PT0gXCJldGhfcmVxdWVzdEFjY291bnRzXCIpIHtcbiAgICAgICAgLy8gaGFuZGxlIGFjY291bnRzIGNoYW5naW5nXG4gICAgICAgIGNiID0gKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKHJlcy5yZXN1bHQgfHwgW10sIF9wYXlsb2FkLm1ldGhvZCA9PT0gXCJldGhfYWNjb3VudHNcIiwgaXNJbnRlcm5hbCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKF9wYXlsb2FkLm1ldGhvZCA9PT0gXCJ3YWxsZXRfZ2V0UHJvdmlkZXJTdGF0ZVwiKSB7XG4gICAgICAgIHRoaXMuX3JwY0VuZ2luZS5oYW5kbGUocGF5bG9hZCwgY2IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRyeVByZW9wZW5IYW5kbGUoX3BheWxvYWQsIGNiKTtcbiAgfVxuXG4gIHNlbmQobWV0aG9kT3JQYXlsb2FkLCBjYWxsYmFja09yQXJncykge1xuICAgIGlmICghdGhpcy5fc2VudFdhcm5pbmdzLnNlbmQpIHtcbiAgICAgIGxvZy53YXJuKG1lc3NhZ2VzLndhcm5pbmdzLnNlbmREZXByZWNhdGlvbik7XG4gICAgICB0aGlzLl9zZW50V2FybmluZ3Muc2VuZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtZXRob2RPclBheWxvYWQgPT09IFwic3RyaW5nXCIgJiYgKCFjYWxsYmFja09yQXJncyB8fCBBcnJheS5pc0FycmF5KGNhbGxiYWNrT3JBcmdzKSkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5fcnBjUmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZE9yUGF5bG9hZCxcbiAgICAgICAgICAgIHBhcmFtczogY2FsbGJhY2tPckFyZ3NcbiAgICAgICAgICB9LCBnZXRScGNQcm9taXNlQ2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0LCBmYWxzZSkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChtZXRob2RPclBheWxvYWQgJiYgdHlwZW9mIG1ldGhvZE9yUGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2FsbGJhY2tPckFyZ3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JwY1JlcXVlc3QobWV0aG9kT3JQYXlsb2FkLCBjYWxsYmFja09yQXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbmRTeW5jKG1ldGhvZE9yUGF5bG9hZCk7XG4gIH1cbiAgLyoqXG4gICAqIERFUFJFQ0FURUQuXG4gICAqIEludGVybmFsIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IG1ldGhvZCwgdXNlZCBpbiBzZW5kLlxuICAgKi9cblxuXG4gIF9zZW5kU3luYyhwYXlsb2FkKSB7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIHN3aXRjaCAocGF5bG9hZC5tZXRob2QpIHtcbiAgICAgIGNhc2UgXCJldGhfYWNjb3VudHNcIjpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MgPyBbdGhpcy5zZWxlY3RlZEFkZHJlc3NdIDogW107XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXRoX2NvaW5iYXNlXCI6XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzIHx8IG51bGw7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXRoX3VuaW5zdGFsbEZpbHRlclwiOlxuICAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KHBheWxvYWQsIE5PT1ApO1xuXG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwibmV0X3ZlcnNpb25cIjpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5uZXR3b3JrVmVyc2lvbiB8fCBudWxsO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLmVycm9ycy51bnN1cHBvcnRlZFN5bmMocGF5bG9hZC5tZXRob2QpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHBheWxvYWQuaWQsXG4gICAgICBqc29ucnBjOiBwYXlsb2FkLmpzb25ycGMsXG4gICAgICByZXN1bHRcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBwcm92aWRlciBiZWNvbWVzIGNvbm5lY3RlZCwgdXBkYXRlcyBpbnRlcm5hbCBzdGF0ZSBhbmQgZW1pdHNcbiAgICogcmVxdWlyZWQgZXZlbnRzLiBJZGVtcG90ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gY2hhaW5JZCAtIFRoZSBJRCBvZiB0aGUgbmV3bHkgY29ubmVjdGVkIGNoYWluLlxuICAgKiBlbWl0cyBNZXRhTWFza0lucGFnZVByb3ZpZGVyI2Nvbm5lY3RcbiAgICovXG5cblxuICBfaGFuZGxlQ29ubmVjdChjaGFpbklkKSB7XG4gICAgaWYgKCF0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lbWl0KFwiY29ubmVjdFwiLCB7XG4gICAgICAgIGNoYWluSWRcbiAgICAgIH0pO1xuICAgICAgbG9nLmRlYnVnKG1lc3NhZ2VzLmluZm8uY29ubmVjdGVkKGNoYWluSWQpKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHByb3ZpZGVyIGJlY29tZXMgZGlzY29ubmVjdGVkLCB1cGRhdGVzIGludGVybmFsIHN0YXRlIGFuZCBlbWl0c1xuICAgKiByZXF1aXJlZCBldmVudHMuIElkZW1wb3RlbnQgd2l0aCByZXNwZWN0IHRvIHRoZSBpc1JlY292ZXJhYmxlIHBhcmFtZXRlci5cbiAgICpcbiAgICogRXJyb3IgY29kZXMgcGVyIHRoZSBDbG9zZUV2ZW50IHN0YXR1cyBjb2RlcyBhcyByZXF1aXJlZCBieSBFSVAtMTE5MzpcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Nsb3NlRXZlbnQjU3RhdHVzX2NvZGVzXG4gICAqXG4gICAqIEBwYXJhbSBpc1JlY292ZXJhYmxlIC0gV2hldGhlciB0aGUgZGlzY29ubmVjdGlvbiBpcyByZWNvdmVyYWJsZS5cbiAgICogQHBhcmFtIGVycm9yTWVzc2FnZSAtIEEgY3VzdG9tIGVycm9yIG1lc3NhZ2UuXG4gICAqIGVtaXRzIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIjZGlzY29ubmVjdFxuICAgKi9cblxuXG4gIF9oYW5kbGVEaXNjb25uZWN0KGlzUmVjb3ZlcmFibGUsIGVycm9yTWVzc2FnZSkge1xuICAgIGlmICh0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCB8fCAhdGhpcy5fc3RhdGUuaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZCAmJiAhaXNSZWNvdmVyYWJsZSkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBlcnJvcjtcblxuICAgICAgaWYgKGlzUmVjb3ZlcmFibGUpIHtcbiAgICAgICAgZXJyb3IgPSBuZXcgRXRoZXJldW1ScGNFcnJvcigxMDEzLCAvLyBUcnkgYWdhaW4gbGF0ZXJcbiAgICAgICAgZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VzLmVycm9ycy5kaXNjb25uZWN0ZWQoKSk7XG4gICAgICAgIGxvZy5kZWJ1ZyhlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvciA9IG5ldyBFdGhlcmV1bVJwY0Vycm9yKDEwMTEsIC8vIEludGVybmFsIGVycm9yXG4gICAgICAgIGVycm9yTWVzc2FnZSB8fCBtZXNzYWdlcy5lcnJvcnMucGVybWFuZW50bHlEaXNjb25uZWN0ZWQoKSk7XG4gICAgICAgIGxvZy5lcnJvcihlcnJvcik7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0YXRlLmFjY291bnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdGF0ZS5pc1VubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N0YXRlLmlzUGVybWFuZW50bHlEaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXQoXCJkaXNjb25uZWN0XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgbG9zdCB0byBjcml0aWNhbCBzdHJlYW1zLlxuICAgKlxuICAgKiBlbWl0cyBNZXRhbWFza0lucGFnZVByb3ZpZGVyI2Rpc2Nvbm5lY3RcbiAgICovXG5cblxuICBfaGFuZGxlU3RyZWFtRGlzY29ubmVjdChzdHJlYW1OYW1lLCBlcnJvcikge1xuICAgIGxvZ1N0cmVhbURpc2Nvbm5lY3RXYXJuaW5nKHN0cmVhbU5hbWUsIGVycm9yLCB0aGlzKTtcblxuICAgIHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QoZmFsc2UsIGVycm9yID8gZXJyb3IubWVzc2FnZSA6IHVuZGVmaW5lZCk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFjY291bnRzIG1heSBoYXZlIGNoYW5nZWQuXG4gICAqL1xuXG5cbiAgX2hhbmRsZUFjY291bnRzQ2hhbmdlZChhY2NvdW50cykge1xuICAgIGxldCBpc0V0aEFjY291bnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICBsZXQgaXNJbnRlcm5hbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgLy8gZGVmZW5zaXZlIHByb2dyYW1taW5nXG4gICAgbGV0IGZpbmFsQWNjb3VudHMgPSBhY2NvdW50cztcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShmaW5hbEFjY291bnRzKSkge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIG5vbi1hcnJheSBhY2NvdW50cyBwYXJhbWV0ZXIuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIGZpbmFsQWNjb3VudHMpO1xuICAgICAgZmluYWxBY2NvdW50cyA9IFtdO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWNjb3VudCBvZiBhY2NvdW50cykge1xuICAgICAgaWYgKHR5cGVvZiBhY2NvdW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrOiBSZWNlaXZlZCBub24tc3RyaW5nIGFjY291bnQuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIGFjY291bnRzKTtcbiAgICAgICAgZmluYWxBY2NvdW50cyA9IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IC8vIGVtaXQgYWNjb3VudHNDaGFuZ2VkIGlmIGFueXRoaW5nIGFib3V0IHRoZSBhY2NvdW50cyBhcnJheSBoYXMgY2hhbmdlZFxuXG5cbiAgICBpZiAoIWRlcXVhbCh0aGlzLl9zdGF0ZS5hY2NvdW50cywgZmluYWxBY2NvdW50cykpIHtcbiAgICAgIC8vIHdlIHNob3VsZCBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBhY2NvdW50cyBldmVuIGJlZm9yZSBldGhfYWNjb3VudHNcbiAgICAgIC8vIHJldHVybnMsIGV4Y2VwdCBpbiBjYXNlcyB3aGVyZSBpc0ludGVybmFsIGlzIHRydWVcbiAgICAgIGlmIChpc0V0aEFjY291bnRzICYmIEFycmF5LmlzQXJyYXkodGhpcy5fc3RhdGUuYWNjb3VudHMpICYmIHRoaXMuX3N0YXRlLmFjY291bnRzLmxlbmd0aCA+IDAgJiYgIWlzSW50ZXJuYWwpIHtcbiAgICAgICAgbG9nLmVycm9yKCdNZXRhTWFzazogXCJldGhfYWNjb3VudHNcIiB1bmV4cGVjdGVkbHkgdXBkYXRlZCBhY2NvdW50cy4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy4nLCBmaW5hbEFjY291bnRzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUuYWNjb3VudHMgPSBmaW5hbEFjY291bnRzO1xuICAgICAgdGhpcy5lbWl0KFwiYWNjb3VudHNDaGFuZ2VkXCIsIGZpbmFsQWNjb3VudHMpO1xuICAgIH0gLy8gaGFuZGxlIHNlbGVjdGVkQWRkcmVzc1xuXG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEFkZHJlc3MgIT09IGZpbmFsQWNjb3VudHNbMF0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gZmluYWxBY2NvdW50c1swXSB8fCBudWxsO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXBvbiByZWNlaXB0IG9mIGEgbmV3IGNoYWluSWQgYW5kIG5ldHdvcmtWZXJzaW9uLCBlbWl0cyBjb3JyZXNwb25kaW5nXG4gICAqIGV2ZW50cyBhbmQgc2V0cyByZWxldmFudCBwdWJsaWMgc3RhdGUuXG4gICAqIERvZXMgbm90aGluZyBpZiBuZWl0aGVyIHRoZSBjaGFpbklkIG5vciB0aGUgbmV0d29ya1ZlcnNpb24gYXJlIGRpZmZlcmVudFxuICAgKiBmcm9tIGV4aXN0aW5nIHZhbHVlcy5cbiAgICpcbiAgICogZW1pdHMgTWV0YW1hc2tJbnBhZ2VQcm92aWRlciNjaGFpbkNoYW5nZWRcbiAgICogQHBhcmFtIG5ldHdvcmtJbmZvIC0gQW4gb2JqZWN0IHdpdGggbmV0d29yayBpbmZvLlxuICAgKi9cblxuXG4gIF9oYW5kbGVDaGFpbkNoYW5nZWQoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWluSWQsXG4gICAgICBuZXR3b3JrVmVyc2lvblxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKCFjaGFpbklkIHx8ICFuZXR3b3JrVmVyc2lvbikge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIGludmFsaWQgbmV0d29yayBwYXJhbWV0ZXJzLiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLlwiLCB7XG4gICAgICAgIGNoYWluSWQsXG4gICAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV0d29ya1ZlcnNpb24gPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICB0aGlzLl9oYW5kbGVEaXNjb25uZWN0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oYW5kbGVDb25uZWN0KGNoYWluSWQpO1xuXG4gICAgICBpZiAoY2hhaW5JZCAhPT0gdGhpcy5jaGFpbklkKSB7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KFwiY2hhaW5DaGFuZ2VkXCIsIHRoaXMuY2hhaW5JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVwb24gcmVjZWlwdCBvZiBhIG5ldyBpc1VubG9ja2VkIHN0YXRlLCBzZXRzIHJlbGV2YW50IHB1YmxpYyBzdGF0ZS5cbiAgICogQ2FsbHMgdGhlIGFjY291bnRzIGNoYW5nZWQgaGFuZGxlciB3aXRoIHRoZSByZWNlaXZlZCBhY2NvdW50cywgb3IgYW4gZW1wdHlcbiAgICogYXJyYXkuXG4gICAqXG4gICAqIERvZXMgbm90aGluZyBpZiB0aGUgcmVjZWl2ZWQgdmFsdWUgaXMgZXF1YWwgdG8gdGhlIGV4aXN0aW5nIHZhbHVlLlxuICAgKiBUaGVyZSBhcmUgbm8gbG9jay91bmxvY2sgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyAtIE9wdGlvbnMgYmFnLlxuICAgKi9cblxuXG4gIF9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQoKSB7XG4gICAgbGV0IHtcbiAgICAgIGFjY291bnRzLFxuICAgICAgaXNVbmxvY2tlZFxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpc1VubG9ja2VkICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIGludmFsaWQgaXNVbmxvY2tlZCBwYXJhbWV0ZXIuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIHtcbiAgICAgICAgaXNVbmxvY2tlZFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzVW5sb2NrZWQgIT09IHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQgPSBpc1VubG9ja2VkO1xuXG4gICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQoYWNjb3VudHMgfHwgW10pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogV2FybnMgb2YgZGVwcmVjYXRpb24gZm9yIHRoZSBnaXZlbiBldmVudCwgaWYgYXBwbGljYWJsZS5cbiAgICovXG5cblxuICBfd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKSB7XG4gICAgaWYgKHRoaXMuX3NlbnRXYXJuaW5ncy5ldmVudHNbZXZlbnROYW1lXSA9PT0gZmFsc2UpIHtcbiAgICAgIGxvZy53YXJuKG1lc3NhZ2VzLndhcm5pbmdzLmV2ZW50c1tldmVudE5hbWVdKTtcbiAgICAgIHRoaXMuX3NlbnRXYXJuaW5ncy5ldmVudHNbZXZlbnROYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cblxuX2RlZmluZVByb3BlcnR5KFRvcnVzSW5wYWdlUHJvdmlkZXIsIFwiX2RlZmF1bHRTdGF0ZVwiLCB7XG4gIGFjY291bnRzOiBudWxsLFxuICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gIGlzVW5sb2NrZWQ6IGZhbHNlLFxuICBpbml0aWFsaXplZDogZmFsc2UsXG4gIGlzUGVybWFuZW50bHlEaXNjb25uZWN0ZWQ6IGZhbHNlLFxuICBoYXNFbWl0dGVkQ29ubmVjdGlvbjogZmFsc2Vcbn0pO1xuXG5jb25zdCBkZWZhdWx0cyA9IG9wdGlvbnMgPT4gKHtcbiAgYWxnb3JpdGhtczogb3B0aW9ucy5hbGdvcml0aG1zIHx8IFtcInNoYTI1NlwiXSxcbiAgZGVsaW1pdGVyOiBvcHRpb25zLmRlbGltaXRlciB8fCBcIiBcIixcbiAgZnVsbDogb3B0aW9ucy5mdWxsIHx8IGZhbHNlXG59KTsgLy8gR2VuZXJhdGUgbGlzdCBvZiBoYXNoZXNcblxuXG5jb25zdCBoYXNoZXMgPSAob3B0aW9ucywgZGF0YSkgPT4ge1xuICBjb25zdCBpbnRlcm5hbEhhc2hlcyA9IHt9O1xuICBvcHRpb25zLmFsZ29yaXRobXMuZm9yRWFjaChhbGdvcml0aG0gPT4ge1xuICAgIGludGVybmFsSGFzaGVzW2FsZ29yaXRobV0gPSBjcmVhdGVIYXNoKGFsZ29yaXRobSkudXBkYXRlKGRhdGEsIFwidXRmOFwiKS5kaWdlc3QoXCJiYXNlNjRcIik7XG4gIH0pO1xuICByZXR1cm4gaW50ZXJuYWxIYXNoZXM7XG59OyAvLyBCdWlsZCBhbiBpbnRlZ3JpdHkgc3RyaW5nXG5cblxuY29uc3QgaW50ZWdyaXR5ID0gKG9wdGlvbnMsIHNyaSkgPT4ge1xuICBsZXQgb3V0cHV0ID0gXCJcIjsgLy8gSGFzaCBsaXN0XG5cbiAgb3V0cHV0ICs9IE9iamVjdC5rZXlzKHNyaS5oYXNoZXMpLm1hcChhbGdvcml0aG0gPT4gXCJcIi5jb25jYXQoYWxnb3JpdGhtLCBcIi1cIikuY29uY2F0KHNyaS5oYXNoZXNbYWxnb3JpdGhtXSkpLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICByZXR1cm4gb3V0cHV0O1xufTtcblxuY29uc3QgbWFpbiA9IChvcHRpb25zLCBkYXRhKSA9PiB7XG4gIC8vIERlZmF1bHRzXG4gIGNvbnN0IGZpbmFsT3B0aW9ucyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuICBjb25zdCBzcmkgPSB7XG4gICAgaGFzaGVzOiBoYXNoZXMoZmluYWxPcHRpb25zLCBkYXRhKSxcbiAgICBpbnRlZ3JpdHk6IHVuZGVmaW5lZFxuICB9O1xuICBzcmkuaW50ZWdyaXR5ID0gaW50ZWdyaXR5KGZpbmFsT3B0aW9ucywgc3JpKTtcbiAgcmV0dXJuIGZpbmFsT3B0aW9ucy5mdWxsID8gc3JpIDogc3JpLmludGVncml0eTtcbn07XG5cbmNsYXNzIFBvcHVwSGFuZGxlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgdXJsLFxuICAgICAgdGFyZ2V0LFxuICAgICAgZmVhdHVyZXNcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcigpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXJsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0YXJnZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZlYXR1cmVzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3aW5kb3dcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpbmRvd1RpbWVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpQ2xvc2VkV2luZG93XCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldCB8fCBcIl9ibGFua1wiO1xuICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBnZXRQb3B1cEZlYXR1cmVzKCk7XG4gICAgdGhpcy53aW5kb3cgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53aW5kb3dUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlDbG9zZWRXaW5kb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuX3NldHVwVGltZXIoKTtcbiAgfVxuXG4gIF9zZXR1cFRpbWVyKCkge1xuICAgIHRoaXMud2luZG93VGltZXIgPSBOdW1iZXIoc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMud2luZG93ICYmIHRoaXMud2luZG93LmNsb3NlZCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMud2luZG93VGltZXIpO1xuXG4gICAgICAgIGlmICghdGhpcy5pQ2xvc2VkV2luZG93KSB7XG4gICAgICAgICAgdGhpcy5lbWl0KFwiY2xvc2VcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlDbG9zZWRXaW5kb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLndpbmRvdyA9PT0gdW5kZWZpbmVkKSBjbGVhckludGVydmFsKHRoaXMud2luZG93VGltZXIpO1xuICAgIH0sIDUwMCkpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB2YXIgX3RoaXMkd2luZG93O1xuXG4gICAgdGhpcy53aW5kb3cgPSB3aW5kb3cub3Blbih0aGlzLnVybC5ocmVmLCB0aGlzLnRhcmdldCwgdGhpcy5mZWF0dXJlcyk7XG4gICAgaWYgKChfdGhpcyR3aW5kb3cgPSB0aGlzLndpbmRvdykgIT09IG51bGwgJiYgX3RoaXMkd2luZG93ICE9PSB2b2lkIDAgJiYgX3RoaXMkd2luZG93LmZvY3VzKSB0aGlzLndpbmRvdy5mb2N1cygpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaUNsb3NlZFdpbmRvdyA9IHRydWU7XG4gICAgaWYgKHRoaXMud2luZG93KSB0aGlzLndpbmRvdy5jbG9zZSgpO1xuICB9XG5cbiAgcmVkaXJlY3QobG9jYXRpb25SZXBsYWNlT25SZWRpcmVjdCkge1xuICAgIGlmIChsb2NhdGlvblJlcGxhY2VPblJlZGlyZWN0KSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh0aGlzLnVybC5ocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnVybC5ocmVmO1xuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBpbWFnZSBVUkwgZXhpc3RzXG4gKiBAcGFyYW0gdXJsIC0gdGhlIHVybCBvZiB0aGUgaW1hZ2VcbiAqIEByZXR1cm5zIC0gd2hldGhlciB0aGUgaW1hZ2UgZXhpc3RzXG4gKi9cblxuZnVuY3Rpb24gaW1nRXhpc3RzKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh0cnVlKTtcblxuICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZXNvbHZlKGZhbHNlKTtcblxuICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZSk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogRXh0cmFjdHMgYSBuYW1lIGZvciB0aGUgc2l0ZSBmcm9tIHRoZSBET01cbiAqL1xuXG5cbmNvbnN0IGdldFNpdGVOYW1lID0gd2luZG93ID0+IHtcbiAgY29uc3Qge1xuICAgIGRvY3VtZW50XG4gIH0gPSB3aW5kb3c7XG4gIGNvbnN0IHNpdGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCA+IG1ldGFbcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIl0nKTtcblxuICBpZiAoc2l0ZU5hbWUpIHtcbiAgICByZXR1cm4gc2l0ZU5hbWUuY29udGVudDtcbiAgfVxuXG4gIGNvbnN0IG1ldGFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQgPiBtZXRhW25hbWU9XCJ0aXRsZVwiXScpO1xuXG4gIGlmIChtZXRhVGl0bGUpIHtcbiAgICByZXR1cm4gbWV0YVRpdGxlLmNvbnRlbnQ7XG4gIH1cblxuICBpZiAoZG9jdW1lbnQudGl0bGUgJiYgZG9jdW1lbnQudGl0bGUubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG59O1xuLyoqXG4gKiBFeHRyYWN0cyBhbiBpY29uIGZvciB0aGUgc2l0ZSBmcm9tIHRoZSBET01cbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNpdGVJY29uKHdpbmRvdykge1xuICBjb25zdCB7XG4gICAgZG9jdW1lbnRcbiAgfSA9IHdpbmRvdzsgLy8gVXNlIHRoZSBzaXRlJ3MgZmF2aWNvbiBpZiBpdCBleGlzdHNcblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQgPiBsaW5rW3JlbD1cInNob3J0Y3V0IGljb25cIl0nKTtcblxuICBpZiAoaWNvbiAmJiAoYXdhaXQgaW1nRXhpc3RzKGljb24uaHJlZikpKSB7XG4gICAgcmV0dXJuIGljb24uaHJlZjtcbiAgfSAvLyBTZWFyY2ggdGhyb3VnaCBhdmFpbGFibGUgaWNvbnMgaW4gbm8gcGFydGljdWxhciBvcmRlclxuXG5cbiAgaWNvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaGVhZCA+IGxpbmtbcmVsPVwiaWNvblwiXScpKS5maW5kKF9pY29uID0+IEJvb2xlYW4oX2ljb24uaHJlZikpO1xuXG4gIGlmIChpY29uICYmIChhd2FpdCBpbWdFeGlzdHMoaWNvbi5ocmVmKSkpIHtcbiAgICByZXR1cm4gaWNvbi5ocmVmO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEdldHMgc2l0ZSBtZXRhZGF0YSBhbmQgcmV0dXJucyBpdFxuICpcbiAqL1xuXG5cbmNvbnN0IGdldFNpdGVNZXRhZGF0YSA9IGFzeW5jICgpID0+ICh7XG4gIG5hbWU6IGdldFNpdGVOYW1lKHdpbmRvdyksXG4gIGljb246IGF3YWl0IGdldFNpdGVJY29uKHdpbmRvdylcbn0pO1xuLyoqXG4gKiBTZW5kcyBzaXRlIG1ldGFkYXRhIG92ZXIgYW4gUlBDIHJlcXVlc3QuXG4gKi9cblxuXG5hc3luYyBmdW5jdGlvbiBzZW5kU2l0ZU1ldGFkYXRhKGVuZ2luZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGRvbWFpbk1ldGFkYXRhID0gYXdhaXQgZ2V0U2l0ZU1ldGFkYXRhKCk7IC8vIGNhbGwgZW5naW5lLmhhbmRsZSBkaXJlY3RseSB0byBhdm9pZCBub3JtYWwgUlBDIHJlcXVlc3QgaGFuZGxpbmdcblxuICAgIGVuZ2luZS5oYW5kbGUoe1xuICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgIGlkOiBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpLFxuICAgICAgbWV0aG9kOiBcIndhbGxldF9zZW5kRG9tYWluTWV0YWRhdGFcIixcbiAgICAgIHBhcmFtczogZG9tYWluTWV0YWRhdGFcbiAgICB9LCBOT09QKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3Ioe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZXMuZXJyb3JzLnNlbmRTaXRlTWV0YWRhdGEoKSxcbiAgICAgIG9yaWdpbmFsRXJyb3I6IGVycm9yXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgX2V4Y2x1ZGVkID0gW1wiaG9zdFwiLCBcImNoYWluSWRcIiwgXCJuZXR3b3JrTmFtZVwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbmNvbnN0IGRlZmF1bHRWZXJpZmllcnMgPSB7XG4gIFtMT0dJTl9QUk9WSURFUi5HT09HTEVdOiB0cnVlLFxuICBbTE9HSU5fUFJPVklERVIuRkFDRUJPT0tdOiB0cnVlLFxuICBbTE9HSU5fUFJPVklERVIuUkVERElUXTogdHJ1ZSxcbiAgW0xPR0lOX1BST1ZJREVSLlRXSVRDSF06IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5ESVNDT1JEXTogdHJ1ZVxufTtcbmNvbnN0IGlmcmFtZUludGVncml0eSA9IFwic2hhMzg0LUNoSzQrazBWUk1wQWFDK3BzeXdzSllxMENuRXF5dFp2UXV5N0wyY1JXRXdxSW1kN0NBN0VwNjlZekJtSEJSMlZcIjtcbmNvbnN0IGV4cGVjdGVkQ2FjaGVDb250cm9sSGVhZGVyID0gXCJtYXgtYWdlPTM2MDBcIjtcbmNvbnN0IFVOU0FGRV9NRVRIT0RTID0gW1wiZXRoX3NlbmRUcmFuc2FjdGlvblwiLCBcImV0aF9zaWduVHlwZWREYXRhXCIsIFwiZXRoX3NpZ25UeXBlZERhdGFfdjNcIiwgXCJldGhfc2lnblR5cGVkRGF0YV92NFwiLCBcInBlcnNvbmFsX3NpZ25cIiwgXCJldGhfZ2V0RW5jcnlwdGlvblB1YmxpY0tleVwiLCBcImV0aF9kZWNyeXB0XCJdO1xuY29uc3QgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSBzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpOyAvLyBwcmVsb2FkIGZvciBpZnJhbWUgZG9lc24ndCB3b3JrIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTU5MzI2N1xuXG4oYXN5bmMgZnVuY3Rpb24gcHJlTG9hZElmcmFtZSgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gICAgY29uc3QgdG9ydXNJZnJhbWVIdG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgY29uc3Qge1xuICAgICAgdG9ydXNVcmxcbiAgICB9ID0gYXdhaXQgZ2V0VG9ydXNVcmwoXCJwcm9kdWN0aW9uXCIsIHtcbiAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICAgIGhhc2g6IGlmcmFtZUludGVncml0eSxcbiAgICAgIHZlcnNpb246IFwiXCJcbiAgICB9KTtcbiAgICB0b3J1c0lmcmFtZUh0bWwuaHJlZiA9IFwiXCIuY29uY2F0KHRvcnVzVXJsLCBcIi9wb3B1cFwiKTtcbiAgICB0b3J1c0lmcmFtZUh0bWwuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgIHRvcnVzSWZyYW1lSHRtbC50eXBlID0gXCJ0ZXh0L2h0bWxcIjtcbiAgICB0b3J1c0lmcmFtZUh0bWwucmVsID0gXCJwcmVmZXRjaFwiO1xuXG4gICAgaWYgKHRvcnVzSWZyYW1lSHRtbC5yZWxMaXN0ICYmIHRvcnVzSWZyYW1lSHRtbC5yZWxMaXN0LnN1cHBvcnRzKSB7XG4gICAgICBpZiAodG9ydXNJZnJhbWVIdG1sLnJlbExpc3Quc3VwcG9ydHMoXCJwcmVmZXRjaFwiKSkge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRvcnVzSWZyYW1lSHRtbCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZy53YXJuKGVycm9yKTtcbiAgfVxufSkoKTtcblxuY2xhc3MgVG9ydXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQge1xuICAgICAgYnV0dG9uUG9zaXRpb24gPSBCVVRUT05fUE9TSVRJT04uQk9UVE9NX0xFRlQsXG4gICAgICBtb2RhbFpJbmRleCA9IDk5OTk5LFxuICAgICAgYXBpS2V5ID0gXCJ0b3J1cy1kZWZhdWx0XCJcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ1dHRvblBvc2l0aW9uXCIsIEJVVFRPTl9QT1NJVElPTi5CT1RUT01fTEVGVCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c1VybFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNJZnJhbWVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0eWxlTGlua1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNMb2dnZWRJblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNJbml0aWFsaXplZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNXaWRnZXRWaXNpYmlsaXR5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0FsZXJ0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJub2RlRGV0YWlsTWFuYWdlclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNKc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBpS2V5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtb2RhbFpJbmRleFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxlcnRaSW5kZXhcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzQWxlcnRDb250YWluZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSWZyYW1lRnVsbFNjcmVlblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2hpdGVMYWJlbFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmVxdWVzdGVkVmVyaWZpZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImN1cnJlbnRWZXJpZmllclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW1iZWRUcmFuc2xhdGlvbnNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV0aGVyZXVtXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwcm92aWRlclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29tbXVuaWNhdGlvbk11eFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNMb2dpbkNhbGxiYWNrXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkYXBwU3RvcmFnZUtleVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGF5bWVudFByb3ZpZGVyc1wiLCBjb25maWd1cmF0aW9uLnBheW1lbnRQcm92aWRlcnMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibG9naW5IaW50XCIsIFwiXCIpO1xuXG4gICAgdGhpcy5idXR0b25Qb3NpdGlvbiA9IGJ1dHRvblBvc2l0aW9uO1xuICAgIHRoaXMudG9ydXNVcmwgPSBcIlwiO1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlOyAvLyBldGhlcmV1bS5lbmFibGUgd29ya2luZ1xuXG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7IC8vIGluaXQgZG9uZVxuXG4gICAgdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHkgPSB0cnVlO1xuICAgIHRoaXMucmVxdWVzdGVkVmVyaWZpZXIgPSBcIlwiO1xuICAgIHRoaXMuY3VycmVudFZlcmlmaWVyID0gXCJcIjtcbiAgICB0aGlzLm5vZGVEZXRhaWxNYW5hZ2VyID0gbmV3IE5vZGVEZXRhaWxNYW5hZ2VyKCk7XG4gICAgdGhpcy50b3J1c0pzID0gbmV3IFRvcnVzSnMoe1xuICAgICAgbWV0YWRhdGFIb3N0OiBcImh0dHBzOi8vbWV0YWRhdGEudG9yLnVzXCIsXG4gICAgICBhbGxvd0hvc3Q6IFwiaHR0cHM6Ly9zaWduZXIudG9yLnVzL2FwaS9hbGxvd1wiXG4gICAgfSk7XG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgVG9ydXNKcy5zZXRBUElLZXkoYXBpS2V5KTtcbiAgICBzZXRBUElLZXkoYXBpS2V5KTtcbiAgICB0aGlzLm1vZGFsWkluZGV4ID0gbW9kYWxaSW5kZXg7XG4gICAgdGhpcy5hbGVydFpJbmRleCA9IG1vZGFsWkluZGV4ICsgMTAwMDtcbiAgICB0aGlzLmlzSWZyYW1lRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgIHRoaXMuZGFwcFN0b3JhZ2VLZXkgPSBcIlwiO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBsZXQge1xuICAgICAgYnVpbGRFbnYgPSBUT1JVU19CVUlMRF9FTlYuUFJPRFVDVElPTixcbiAgICAgIGVuYWJsZUxvZ2dpbmcgPSBmYWxzZSxcbiAgICAgIC8vIGRlcHJlY2F0ZWQ6IHVzZSBsb2dpbkNvbmZpZyBpbnN0ZWFkXG4gICAgICBlbmFibGVkVmVyaWZpZXJzID0gZGVmYXVsdFZlcmlmaWVycyxcbiAgICAgIG5ldHdvcmsgPSB7XG4gICAgICAgIGhvc3Q6IFwibWFpbm5ldFwiLFxuICAgICAgICBjaGFpbklkOiBudWxsLFxuICAgICAgICBuZXR3b3JrTmFtZTogXCJcIixcbiAgICAgICAgYmxvY2tFeHBsb3JlcjogXCJcIixcbiAgICAgICAgdGlja2VyOiBcIlwiLFxuICAgICAgICB0aWNrZXJOYW1lOiBcIlwiXG4gICAgICB9LFxuICAgICAgbG9naW5Db25maWcgPSB7fSxcbiAgICAgIHNob3dUb3J1c0J1dHRvbiA9IHRydWUsXG4gICAgICBpbnRlZ3JpdHkgPSB7XG4gICAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICAgICAgaGFzaDogaWZyYW1lSW50ZWdyaXR5LFxuICAgICAgICB2ZXJzaW9uOiBcIlwiXG4gICAgICB9LFxuICAgICAgd2hpdGVMYWJlbCxcbiAgICAgIHNraXBUS2V5ID0gZmFsc2UsXG4gICAgICB1c2VMb2NhbFN0b3JhZ2UgPSBmYWxzZVxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQpIHRocm93IG5ldyBFcnJvcihcIkFscmVhZHkgaW5pdGlhbGl6ZWRcIik7XG4gICAgY29uc3Qge1xuICAgICAgdG9ydXNVcmwsXG4gICAgICBsb2dMZXZlbFxuICAgIH0gPSBhd2FpdCBnZXRUb3J1c1VybChidWlsZEVudiwgaW50ZWdyaXR5KTtcbiAgICBsb2cuaW5mbyh0b3J1c1VybCwgXCJ1cmwgbG9hZGVkXCIpO1xuICAgIHRoaXMudG9ydXNVcmwgPSB0b3J1c1VybDtcbiAgICB0aGlzLndoaXRlTGFiZWwgPSB3aGl0ZUxhYmVsO1xuICAgIGxvZy5zZXREZWZhdWx0TGV2ZWwobG9nTGV2ZWwpO1xuICAgIGlmIChlbmFibGVMb2dnaW5nKSBsb2cuZW5hYmxlQWxsKCk7ZWxzZSBsb2cuZGlzYWJsZUFsbCgpO1xuICAgIHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID0gc2hvd1RvcnVzQnV0dG9uO1xuICAgIGxldCBkYXBwU3RvcmFnZUtleSA9IFwiXCI7XG5cbiAgICBpZiAoaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgJiYgdXNlTG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zdCBzdG9yZWRLZXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uZmlndXJhdGlvbi5sb2NhbFN0b3JhZ2VLZXkpO1xuICAgICAgaWYgKHN0b3JlZEtleSkgZGFwcFN0b3JhZ2VLZXkgPSBzdG9yZWRLZXk7ZWxzZSB7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZEtleSA9IFwidG9ydXMtYXBwLVwiLmNvbmNhdChnZXRQcmVvcGVuSW5zdGFuY2VJZCgpKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbmZpZ3VyYXRpb24ubG9jYWxTdG9yYWdlS2V5LCBnZW5lcmF0ZWRLZXkpO1xuICAgICAgICBkYXBwU3RvcmFnZUtleSA9IGdlbmVyYXRlZEtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRhcHBTdG9yYWdlS2V5ID0gZGFwcFN0b3JhZ2VLZXk7XG4gICAgY29uc3QgdG9ydXNJZnJhbWVVcmwgPSBuZXcgVVJMKHRvcnVzVXJsKTtcbiAgICBpZiAodG9ydXNJZnJhbWVVcmwucGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpKSB0b3J1c0lmcmFtZVVybC5wYXRobmFtZSArPSBcInBvcHVwXCI7ZWxzZSB0b3J1c0lmcmFtZVVybC5wYXRobmFtZSArPSBcIi9wb3B1cFwiO1xuXG4gICAgaWYgKGRhcHBTdG9yYWdlS2V5KSB7XG4gICAgICB0b3J1c0lmcmFtZVVybC5oYXNoID0gXCIjZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KGRhcHBTdG9yYWdlS2V5KTtcbiAgICB9IC8vIElmcmFtZSBjb2RlXG5cblxuICAgIHRoaXMudG9ydXNJZnJhbWUgPSBodG1sVG9FbGVtZW50KFwiPGlmcmFtZVxcbiAgICAgICAgaWQ9XFxcInRvcnVzSWZyYW1lXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcInRvcnVzSWZyYW1lXFxcIlxcbiAgICAgICAgc3JjPVxcXCJcIi5jb25jYXQodG9ydXNJZnJhbWVVcmwuaHJlZiwgXCJcXFwiXFxuICAgICAgICBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IHJpZ2h0OiAwOyB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAwOyB6LWluZGV4OiBcIikuY29uY2F0KHRoaXMubW9kYWxaSW5kZXgsIFwiXFxcIlxcbiAgICAgID48L2lmcmFtZT5cIikpO1xuICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lciA9IGh0bWxUb0VsZW1lbnQoJzxkaXYgaWQ9XCJ0b3J1c0FsZXJ0Q29udGFpbmVyXCI+PC9kaXY+Jyk7XG4gICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCJ6LWluZGV4XCIsIHRoaXMuYWxlcnRaSW5kZXgudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgbGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIuY29uY2F0KHRvcnVzVXJsLCBcIi9jc3Mvd2lkZ2V0LmNzc1wiKSk7XG4gICAgdGhpcy5zdHlsZUxpbmsgPSBsaW5rO1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRMYW5ndWFnZSA9IGdldFVzZXJMYW5ndWFnZSgpLFxuICAgICAgY3VzdG9tVHJhbnNsYXRpb25zID0ge31cbiAgICB9ID0gdGhpcy53aGl0ZUxhYmVsIHx8IHt9O1xuICAgIGNvbnN0IG1lcmdlZFRyYW5zbGF0aW9ucyA9IGRlZXBtZXJnZShjb25maWd1cmF0aW9uLnRyYW5zbGF0aW9ucywgY3VzdG9tVHJhbnNsYXRpb25zKTtcbiAgICBjb25zdCBsYW5ndWFnZVRyYW5zbGF0aW9ucyA9IG1lcmdlZFRyYW5zbGF0aW9uc1tkZWZhdWx0TGFuZ3VhZ2VdIHx8IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRpb25zW2dldFVzZXJMYW5ndWFnZSgpXTtcbiAgICB0aGlzLmVtYmVkVHJhbnNsYXRpb25zID0gbGFuZ3VhZ2VUcmFuc2xhdGlvbnMuZW1iZWQ7XG5cbiAgICBjb25zdCBoYW5kbGVTZXR1cCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGRvY3VtZW50UmVhZHkoKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudG9ydXNJZnJhbWUub25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIC8vIG9ubHkgZG8gdGhpcyBpZiBpZnJhbWUgaXMgbm90IGZ1bGwgc2NyZWVuXG4gICAgICAgICAgdGhpcy5fc2V0dXBXZWIzKCk7XG5cbiAgICAgICAgICBjb25zdCBpbml0U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcImluaXRfc3RyZWFtXCIpO1xuICAgICAgICAgIGluaXRTdHJlYW0ub24oXCJkYXRhXCIsIGNodW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgIH0gPSBjaHVuaztcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiaW5pdF9jb21wbGV0ZVwiICYmIGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAvLyByZXNvbHZlIHByb21pc2VcbiAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuKTtcblxuICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbml0U3RyZWFtLndyaXRlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiaW5pdF9zdHJlYW1cIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZW5hYmxlZFZlcmlmaWVycyxcbiAgICAgICAgICAgICAgbG9naW5Db25maWcsXG4gICAgICAgICAgICAgIHdoaXRlTGFiZWw6IHRoaXMud2hpdGVMYWJlbCxcbiAgICAgICAgICAgICAgYnV0dG9uUG9zaXRpb246IHRoaXMuYnV0dG9uUG9zaXRpb24sXG4gICAgICAgICAgICAgIHRvcnVzV2lkZ2V0VmlzaWJpbGl0eTogdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHksXG4gICAgICAgICAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICAgICAgICAgIHNraXBUS2V5LFxuICAgICAgICAgICAgICBuZXR3b3JrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5zdHlsZUxpbmspO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvcnVzSWZyYW1lKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoYnVpbGRFbnYgPT09IFwicHJvZHVjdGlvblwiICYmIGludGVncml0eS5jaGVjaykge1xuICAgICAgLy8gaGFja3kgc29sdXRpb24gdG8gY2hlY2sgZm9yIGlmcmFtZSBpbnRlZ3JpdHlcbiAgICAgIGNvbnN0IGZldGNoVXJsID0gXCJcIi5jb25jYXQodG9ydXNVcmwsIFwiL3BvcHVwXCIpO1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGZldGNoVXJsLCB7XG4gICAgICAgIGNhY2hlOiBcInJlbG9hZFwiXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3AuaGVhZGVycy5nZXQoXCJDYWNoZS1Db250cm9sXCIpICE9PSBleHBlY3RlZENhY2hlQ29udHJvbEhlYWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIENhY2hlLUNvbnRyb2wgaGVhZGVycywgZ290IFwiLmNvbmNhdChyZXNwLmhlYWRlcnMuZ2V0KFwiQ2FjaGUtQ29udHJvbFwiKSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc3AudGV4dCgpO1xuICAgICAgY29uc3QgY2FsY3VsYXRlZEludGVncml0eSA9IG1haW4oe1xuICAgICAgICBhbGdvcml0aG1zOiBbXCJzaGEzODRcIl1cbiAgICAgIH0sIHJlc3BvbnNlKTtcbiAgICAgIGxvZy5pbmZvKGNhbGN1bGF0ZWRJbnRlZ3JpdHksIFwiaW50ZWdyaXR5XCIpO1xuXG4gICAgICBpZiAoY2FsY3VsYXRlZEludGVncml0eSA9PT0gaW50ZWdyaXR5Lmhhc2gpIHtcbiAgICAgICAgYXdhaXQgaGFuZGxlU2V0dXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbml0KCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludGVncml0eSBjaGVjayBmYWlsZWRcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IGhhbmRsZVNldHVwKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIGxldCB7XG4gICAgICB2ZXJpZmllciA9IFwiXCIsXG4gICAgICBsb2dpbl9oaW50OiBsb2dpbkhpbnQgPSBcIlwiXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHRocm93IG5ldyBFcnJvcihcIkNhbGwgaW5pdCgpIGZpcnN0XCIpO1xuICAgIHRoaXMucmVxdWVzdGVkVmVyaWZpZXIgPSB2ZXJpZmllcjtcbiAgICB0aGlzLmxvZ2luSGludCA9IGxvZ2luSGludDtcbiAgICByZXR1cm4gdGhpcy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgaGFzIG5vdCBsb2dnZWQgaW4geWV0XCIpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2dPdXRTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwibG9nb3V0XCIpO1xuICAgICAgbG9nT3V0U3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJsb2dPdXRcIlxuICAgICAgfSk7XG4gICAgICBjb25zdCBzdGF0dXNTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwic3RhdHVzXCIpO1xuXG4gICAgICBjb25zdCBzdGF0dXNTdHJlYW1IYW5kbGVyID0gc3RhdHVzID0+IHtcbiAgICAgICAgaWYgKCFzdGF0dXMubG9nZ2VkSW4pIHtcbiAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWZXJpZmllciA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IFwiXCI7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlNvbWUgRXJyb3IgT2NjdXJlZFwiKSk7XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVTdHJlYW0oc3RhdHVzU3RyZWFtLCBcImRhdGFcIiwgc3RhdHVzU3RyZWFtSGFuZGxlcik7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjbGVhblVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgIGF3YWl0IHRoaXMubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhckluaXQoKTtcbiAgfVxuXG4gIGNsZWFySW5pdCgpIHtcbiAgICBmdW5jdGlvbiBpc0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudCh0aGlzLnN0eWxlTGluaykgJiYgd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5zdHlsZUxpbmspKSB7XG4gICAgICB0aGlzLnN0eWxlTGluay5yZW1vdmUoKTtcbiAgICAgIHRoaXMuc3R5bGVMaW5rID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQodGhpcy50b3J1c0lmcmFtZSkgJiYgd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy50b3J1c0lmcmFtZSkpIHtcbiAgICAgIHRoaXMudG9ydXNJZnJhbWUucmVtb3ZlKCk7XG4gICAgICB0aGlzLnRvcnVzSWZyYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQodGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyKSAmJiB3aW5kb3cuZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIpKSB7XG4gICAgICB0aGlzLnRvcnVzQWxlcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gIH1cblxuICBoaWRlVG9ydXNCdXR0b24oKSB7XG4gICAgdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHkgPSBmYWxzZTtcblxuICAgIHRoaXMuX3NlbmRXaWRnZXRWaXNpYmlsaXR5U3RhdHVzKGZhbHNlKTtcblxuICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcbiAgfVxuXG4gIHNob3dUb3J1c0J1dHRvbigpIHtcbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgICB0aGlzLl9zZW5kV2lkZ2V0VmlzaWJpbGl0eVN0YXR1cyh0cnVlKTtcblxuICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcbiAgfVxuXG4gIHNldFByb3ZpZGVyKCkge1xuICAgIGxldCBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGxldCB7XG4gICAgICBob3N0ID0gXCJtYWlubmV0XCIsXG4gICAgICBjaGFpbklkID0gbnVsbCxcbiAgICAgIG5ldHdvcmtOYW1lID0gXCJcIlxuICAgIH0gPSBfcmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvdmlkZXJDaGFuZ2VTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwicHJvdmlkZXJfY2hhbmdlXCIpO1xuXG4gICAgICBjb25zdCBoYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgfSA9IGNodW5rLmRhdGE7XG4gICAgICAgIGxvZy5pbmZvKGNodW5rKTtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJzb21lIGVycm9yIG9jY3VyZWRcIikpO1xuICAgICAgfTtcblxuICAgICAgaGFuZGxlU3RyZWFtKHByb3ZpZGVyQ2hhbmdlU3RyZWFtLCBcImRhdGFcIiwgaGFuZGxlcik7XG4gICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19QUk9WSURFUl9DSEFOR0VfV0lORE9XXG4gICAgICB9KTtcblxuICAgICAgcHJvdmlkZXJDaGFuZ2VTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcInNob3dfcHJvdmlkZXJfY2hhbmdlXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuZXR3b3JrOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIGhvc3QsXG4gICAgICAgICAgICBjaGFpbklkLFxuICAgICAgICAgICAgbmV0d29ya05hbWVcbiAgICAgICAgICB9LCByZXN0KSxcbiAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZCxcbiAgICAgICAgICBvdmVycmlkZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93V2FsbGV0KHBhdGgpIHtcbiAgICBsZXQgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjb25zdCBzaG93V2FsbGV0U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInNob3dfd2FsbGV0XCIpO1xuICAgIGNvbnN0IGZpbmFsUGF0aCA9IHBhdGggPyBcIi9cIi5jb25jYXQocGF0aCkgOiBcIlwiO1xuICAgIHNob3dXYWxsZXRTdHJlYW0ud3JpdGUoe1xuICAgICAgbmFtZTogXCJzaG93X3dhbGxldFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBwYXRoOiBmaW5hbFBhdGhcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNob3dXYWxsZXRIYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwic2hvd193YWxsZXRfaW5zdGFuY2VcIikge1xuICAgICAgICAvLyBMZXQgdGhlIGVycm9yIHByb3BvZ2F0ZSB1cCAoaGVuY2UsIG5vIHRyeSBjYXRjaClcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGluc3RhbmNlSWRcbiAgICAgICAgfSA9IGNodW5rLmRhdGE7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTChcIlwiLmNvbmNhdCh0aGlzLnRvcnVzVXJsLCBcIi93YWxsZXRcIikuY29uY2F0KGZpbmFsUGF0aCkpOyAvLyBVc2luZyBVUkwgY29uc3RydWN0b3IgdG8gcHJldmVudCBqcyBpbmplY3Rpb24gYW5kIGFsbG93IHBhcmFtZXRlciB2YWxpZGF0aW9uLiFcblxuICAgICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiaW50ZWdyaXR5XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImluc3RhbmNlSWRcIiwgaW5zdGFuY2VJZCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHgsIHBhcmFtc1t4XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmRhcHBTdG9yYWdlS2V5KSB7XG4gICAgICAgICAgZmluYWxVcmwuaGFzaCA9IFwiI2RhcHBTdG9yYWdlS2V5PVwiLmNvbmNhdCh0aGlzLmRhcHBTdG9yYWdlS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhbGxldFdpbmRvdyA9IG5ldyBQb3B1cEhhbmRsZXIoe1xuICAgICAgICAgIHVybDogZmluYWxVcmwsXG4gICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX0RFRkFVTFRfV0FMTEVUX1dJTkRPV1xuICAgICAgICB9KTtcbiAgICAgICAgd2FsbGV0V2luZG93Lm9wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaGFuZGxlU3RyZWFtKHNob3dXYWxsZXRTdHJlYW0sIFwiZGF0YVwiLCBzaG93V2FsbGV0SGFuZGxlcik7XG4gIH1cblxuICBhc3luYyBnZXRQdWJsaWNBZGRyZXNzKF9yZWYyKSB7XG4gICAgbGV0IHtcbiAgICAgIHZlcmlmaWVyLFxuICAgICAgdmVyaWZpZXJJZCxcbiAgICAgIGlzRXh0ZW5kZWQgPSBmYWxzZVxuICAgIH0gPSBfcmVmMjtcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uc3VwcG9ydGVkVmVyaWZpZXJMaXN0LmluY2x1ZGVzKHZlcmlmaWVyKSB8fCAhV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVBbdmVyaWZpZXJdKSB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCB2ZXJpZmllclwiKTtcbiAgICBjb25zdCBub2RlRGV0YWlscyA9IGF3YWl0IHRoaXMubm9kZURldGFpbE1hbmFnZXIuZ2V0Tm9kZURldGFpbHMoZmFsc2UsIHRydWUpO1xuICAgIGNvbnN0IGVuZHBvaW50cyA9IG5vZGVEZXRhaWxzLnRvcnVzTm9kZUVuZHBvaW50cztcbiAgICBjb25zdCB0b3J1c05vZGVQdWJzID0gbm9kZURldGFpbHMudG9ydXNOb2RlUHViO1xuICAgIGNvbnN0IHdhbGxldFZlcmlmaWVyID0gdmVyaWZpZXI7XG4gICAgY29uc3Qgb3BlbmxvZ2luVmVyaWZpZXIgPSBXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUFt2ZXJpZmllcl07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdWMVVzZXIgPSBhd2FpdCB0aGlzLnRvcnVzSnMuZ2V0VXNlclR5cGVBbmRBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywge1xuICAgICAgICB2ZXJpZmllcjogd2FsbGV0VmVyaWZpZXIsXG4gICAgICAgIHZlcmlmaWVySWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXhpc3RpbmdWMVVzZXIudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSB7XG4gICAgICAgIGlmICghaXNFeHRlbmRlZCkgcmV0dXJuIGV4aXN0aW5nVjFVc2VyLmFkZHJlc3M7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1YxVXNlcjtcbiAgICAgIH0gLy8gd2UgZG9uJ3Qgc3VwcG9ydCB2MiB1c2VycyB3aXRoIHYxIHZlcmlmaWVycyBzbyBnZXQgb3IgYXNzaWduIHRoZSBrZXkgZm9yIHYyIHVzZXIgb24gdjIgYHZlcmlmaWVyYFxuXG5cbiAgICAgIGNvbnN0IHYyVXNlciA9IGF3YWl0IHRoaXMudG9ydXNKcy5nZXRVc2VyVHlwZUFuZEFkZHJlc3MoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCB7XG4gICAgICAgIHZlcmlmaWVyOiBvcGVubG9naW5WZXJpZmllcixcbiAgICAgICAgdmVyaWZpZXJJZFxuICAgICAgfSwgdHJ1ZSk7XG4gICAgICBpZiAoIWlzRXh0ZW5kZWQpIHJldHVybiB2MlVzZXIuYWRkcmVzcztcbiAgICAgIHJldHVybiB2MlVzZXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwICYmIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJWZXJpZmllciArIFZlcmlmaWVySUQgaGFzIG5vdCB5ZXQgYmVlbiBhc3NpZ25lZFwiKSkge1xuICAgICAgICAvLyBpZiB1c2VyIGRvZXNuJ3QgaGF2ZSBrZXkgdGhlbiBhc3NpZ24gaXQgd2l0aCB2MiB2ZXJpZmllclxuICAgICAgICBjb25zdCBuZXdWMlVzZXIgPSBhd2FpdCB0aGlzLnRvcnVzSnMuZ2V0VXNlclR5cGVBbmRBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywge1xuICAgICAgICAgIHZlcmlmaWVyOiBvcGVubG9naW5WZXJpZmllcixcbiAgICAgICAgICB2ZXJpZmllcklkXG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgICBpZiAoIWlzRXh0ZW5kZWQpIHJldHVybiBuZXdWMlVzZXIuYWRkcmVzcztcbiAgICAgICAgcmV0dXJuIG5ld1YyVXNlcjtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlckluZm8obWVzc2FnZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvQWNjZXNzU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInVzZXJfaW5mb19hY2Nlc3NcIik7XG4gICAgICAgIHVzZXJJbmZvQWNjZXNzU3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcInVzZXJfaW5mb19hY2Nlc3NfcmVxdWVzdFwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvQWNjZXNzSGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBhcHByb3ZlZCxcbiAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgICAgcmVqZWN0ZWQsXG4gICAgICAgICAgICAgIG5ld1JlcXVlc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ID0gY2h1bms7XG5cbiAgICAgICAgICBpZiAobmFtZSA9PT0gXCJ1c2VyX2luZm9fYWNjZXNzX3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmIChhcHByb3ZlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdFwiKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgY29uc3QgdXNlckluZm9TdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidXNlcl9pbmZvXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvSGFuZGxlciA9IGhhbmRsZXJDaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJDaHVuay5uYW1lID09PSBcInVzZXJfaW5mb19yZXNwb25zZVwiKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlckNodW5rLmRhdGEuYXBwcm92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShoYW5kbGVyQ2h1bmsuZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIHJlamVjdGVkIHRoZSByZXF1ZXN0XCIpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgaGFuZGxlU3RyZWFtKHVzZXJJbmZvU3RyZWFtLCBcImRhdGFcIiwgdXNlckluZm9IYW5kbGVyKTtcbiAgICAgICAgICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPV1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICB1c2VySW5mb1N0cmVhbS53cml0ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ1c2VyX2luZm9fcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbSh1c2VySW5mb0FjY2Vzc1N0cmVhbSwgXCJkYXRhXCIsIHVzZXJJbmZvQWNjZXNzSGFuZGxlcik7XG4gICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgaGFzIG5vdCBsb2dnZWQgaW4geWV0XCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYXRlVG9wdXAocHJvdmlkZXIsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgaXNWYWxpZFxuICAgICAgICB9ID0gdmFsaWRhdGVQYXltZW50UHJvdmlkZXIocHJvdmlkZXIsIHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcnMpKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9wdXBTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidG9wdXBcIik7XG5cbiAgICAgICAgY29uc3QgdG9wdXBIYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICAgIGlmIChjaHVuay5uYW1lID09PSBcInRvcHVwX3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmIChjaHVuay5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaHVuay5kYXRhLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihjaHVuay5kYXRhLmVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbSh0b3B1cFN0cmVhbSwgXCJkYXRhXCIsIHRvcHVwSGFuZGxlcik7XG4gICAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQpO1xuXG4gICAgICAgIHRvcHVwU3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcInRvcHVwX3JlcXVlc3RcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwcm92aWRlcixcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiVG9ydXMgaXMgbm90IGluaXRpYWxpemVkIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkKSB7XG4gICAgbGV0IHtcbiAgICAgIHVybCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGZlYXR1cmVzXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBpZiAocHJlb3Blbkluc3RhbmNlSWQpIHtcbiAgICAgIGNvbnN0IHdpbmRvd1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3aW5kb3dcIik7XG4gICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsIHx8IFwiXCIuY29uY2F0KHRoaXMudG9ydXNVcmwsIFwiL3JlZGlyZWN0P3ByZW9wZW5JbnN0YW5jZUlkPVwiKS5jb25jYXQocHJlb3Blbkluc3RhbmNlSWQpKTtcblxuICAgICAgaWYgKHRoaXMuZGFwcFN0b3JhZ2VLZXkpIHtcbiAgICAgICAgLy8gSWYgbXVsdGlwbGUgaW5zdGFuY2VzLCBpdCByZXR1cm5zIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKGZpbmFsVXJsLmhhc2gpIGZpbmFsVXJsLmhhc2ggKz0gXCImZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KHRoaXMuZGFwcFN0b3JhZ2VLZXkpO2Vsc2UgZmluYWxVcmwuaGFzaCA9IFwiI2RhcHBTdG9yYWdlS2V5PVwiLmNvbmNhdCh0aGlzLmRhcHBTdG9yYWdlS2V5KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFuZGxlZFdpbmRvdyA9IG5ldyBQb3B1cEhhbmRsZXIoe1xuICAgICAgICB1cmw6IGZpbmFsVXJsLFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIGZlYXR1cmVzXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZWRXaW5kb3cub3BlbigpO1xuXG4gICAgICBpZiAoIWhhbmRsZWRXaW5kb3cud2luZG93KSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVBvcHVwQmxvY2tBbGVydChwcmVvcGVuSW5zdGFuY2VJZCwgZmluYWxVcmwuaHJlZik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3dTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcIm9wZW5lZF93aW5kb3dcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjbG9zZUhhbmRsZXIgPSBfcmVmMyA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWQ6IHJlY2VpdmVkSWQsXG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgfSA9IF9yZWYzO1xuXG4gICAgICAgIGlmIChyZWNlaXZlZElkID09PSBwcmVvcGVuSW5zdGFuY2VJZCAmJiBjbG9zZSkge1xuICAgICAgICAgIGhhbmRsZWRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICB3aW5kb3dTdHJlYW0ucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsIGNsb3NlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHdpbmRvd1N0cmVhbS5vbihcImRhdGFcIiwgY2xvc2VIYW5kbGVyKTtcbiAgICAgIGhhbmRsZWRXaW5kb3cub25jZShcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgd2luZG93U3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNsb3NlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvd1N0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgY2xvc2VIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFbWJlZFdoaXRlTGFiZWwoZWxlbWVudCkge1xuICAgIC8vIFNldCB3aGl0ZWxhYmVsXG4gICAgY29uc3Qge1xuICAgICAgdGhlbWVcbiAgICB9ID0gdGhpcy53aGl0ZUxhYmVsIHx8IHt9O1xuXG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlzRGFyayA9IGZhbHNlLFxuICAgICAgICBjb2xvcnMgPSB7fVxuICAgICAgfSA9IHRoZW1lO1xuICAgICAgaWYgKGlzRGFyaykgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9ydXMtZGFya1wiKTtcbiAgICAgIGlmIChjb2xvcnMudG9ydXNCcmFuZDEpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRvcnVzLWJyYW5kLTFcIiwgY29sb3JzLnRvcnVzQnJhbmQxKTtcbiAgICAgIGlmIChjb2xvcnMudG9ydXNHcmF5MikgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdG9ydXMtZ3JheS0yXCIsIGNvbG9ycy50b3J1c0dyYXkyKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0TG9nb1VybCgpIHtcbiAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbCwgX3RoaXMkd2hpdGVMYWJlbCR0aGVtO1xuXG4gICAgbGV0IGxvZ29VcmwgPSBcIlwiLmNvbmNhdCh0aGlzLnRvcnVzVXJsLCBcIi9pbWFnZXMvdG9ydXNfaWNvbi1ibHVlLnN2Z1wiKTtcblxuICAgIGlmICgoX3RoaXMkd2hpdGVMYWJlbCA9IHRoaXMud2hpdGVMYWJlbCkgIT09IG51bGwgJiYgX3RoaXMkd2hpdGVMYWJlbCAhPT0gdm9pZCAwICYmIChfdGhpcyR3aGl0ZUxhYmVsJHRoZW0gPSBfdGhpcyR3aGl0ZUxhYmVsLnRoZW1lKSAhPT0gbnVsbCAmJiBfdGhpcyR3aGl0ZUxhYmVsJHRoZW0gIT09IHZvaWQgMCAmJiBfdGhpcyR3aGl0ZUxhYmVsJHRoZW0uaXNEYXJrKSB7XG4gICAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbDI7XG5cbiAgICAgIGxvZ29VcmwgPSAoKF90aGlzJHdoaXRlTGFiZWwyID0gdGhpcy53aGl0ZUxhYmVsKSA9PT0gbnVsbCB8fCBfdGhpcyR3aGl0ZUxhYmVsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkd2hpdGVMYWJlbDIubG9nb0xpZ2h0KSB8fCBsb2dvVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbDM7XG5cbiAgICAgIGxvZ29VcmwgPSAoKF90aGlzJHdoaXRlTGFiZWwzID0gdGhpcy53aGl0ZUxhYmVsKSA9PT0gbnVsbCB8fCBfdGhpcyR3aGl0ZUxhYmVsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkd2hpdGVMYWJlbDMubG9nb0RhcmspIHx8IGxvZ29Vcmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvZ29Vcmw7XG4gIH1cblxuICBfc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXMoc3RhdHVzKSB7XG4gICAgY29uc3QgdG9ydXNXaWRnZXRWaXNpYmlsaXR5U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInRvcnVzLXdpZGdldC12aXNpYmlsaXR5XCIpO1xuICAgIHRvcnVzV2lkZ2V0VmlzaWJpbGl0eVN0cmVhbS53cml0ZSh7XG4gICAgICBkYXRhOiBzdGF0dXNcbiAgICB9KTtcbiAgfVxuXG4gIF9kaXNwbGF5SWZyYW1lKCkge1xuICAgIGxldCBpc0Z1bGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgIGNvbnN0IHN0eWxlID0ge307IC8vIHNldCBwaGFzZVxuXG4gICAgaWYgKCFpc0Z1bGwpIHtcbiAgICAgIHN0eWxlLmRpc3BsYXkgPSB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCI3MHB4XCI7XG4gICAgICBzdHlsZS53aWR0aCA9IFwiNzBweFwiO1xuXG4gICAgICBzd2l0Y2ggKHRoaXMuYnV0dG9uUG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uVE9QX0xFRlQ6XG4gICAgICAgICAgc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQlVUVE9OX1BPU0lUSU9OLlRPUF9SSUdIVDpcbiAgICAgICAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uQk9UVE9NX1JJR0hUOlxuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEJVVFRPTl9QT1NJVElPTi5CT1RUT01fTEVGVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBzdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgICAgc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICBzdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odGhpcy50b3J1c0lmcmFtZS5zdHlsZSwgc3R5bGUpO1xuICAgIHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuID0gaXNGdWxsO1xuICB9XG5cbiAgX3NldHVwV2ViMygpIHtcbiAgICBsb2cuaW5mbyhcInNldHVwV2ViMyBydW5uaW5nXCIpOyAvLyBzZXR1cCBiYWNrZ3JvdW5kIGNvbm5lY3Rpb25cblxuICAgIGNvbnN0IG1ldGFtYXNrU3RyZWFtID0gbmV3IEJhc2VQb3N0TWVzc2FnZVN0cmVhbSh7XG4gICAgICBuYW1lOiBcImVtYmVkX21ldGFtYXNrXCIsXG4gICAgICB0YXJnZXQ6IFwiaWZyYW1lX21ldGFtYXNrXCIsXG4gICAgICB0YXJnZXRXaW5kb3c6IHRoaXMudG9ydXNJZnJhbWUuY29udGVudFdpbmRvdyxcbiAgICAgIHRhcmdldE9yaWdpbjogbmV3IFVSTCh0aGlzLnRvcnVzVXJsKS5vcmlnaW5cbiAgICB9KTsgLy8gRHVlIHRvIGNvbXBhdGliaWxpdHkgcmVhc29ucywgd2Ugc2hvdWxkIG5vdCBzZXQgdXAgbXVsdGlwbGV4aW5nIG9uIHdpbmRvdy5tZXRhbWFza3N0cmVhbVxuICAgIC8vIGJlY2F1c2UgdGhlIE1ldGFtYXNrSW5wYWdlUHJvdmlkZXIgYWxzbyBhdHRlbXB0cyB0byBkbyBzby5cbiAgICAvLyBXZSBjcmVhdGUgYW5vdGhlciBMb2NhbE1lc3NhZ2VEdXBsZXhTdHJlYW0gZm9yIGNvbW11bmljYXRpb24gYmV0d2VlbiBkYXBwIDw+IGlmcmFtZVxuXG4gICAgY29uc3QgY29tbXVuaWNhdGlvblN0cmVhbSA9IG5ldyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0oe1xuICAgICAgbmFtZTogXCJlbWJlZF9jb21tXCIsXG4gICAgICB0YXJnZXQ6IFwiaWZyYW1lX2NvbW1cIixcbiAgICAgIHRhcmdldFdpbmRvdzogdGhpcy50b3J1c0lmcmFtZS5jb250ZW50V2luZG93LFxuICAgICAgdGFyZ2V0T3JpZ2luOiBuZXcgVVJMKHRoaXMudG9ydXNVcmwpLm9yaWdpblxuICAgIH0pOyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggR290Y2hpIDopXG4gICAgLy8gd2luZG93Lm1ldGFtYXNrU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uU3RyZWFtXG4gICAgLy8gY29tcG9zZSB0aGUgaW5wYWdlIHByb3ZpZGVyXG5cbiAgICBjb25zdCBpbnBhZ2VQcm92aWRlciA9IG5ldyBUb3J1c0lucGFnZVByb3ZpZGVyKG1ldGFtYXNrU3RyZWFtKTsgLy8gZGV0ZWN0IGV0aF9yZXF1ZXN0QWNjb3VudHMgYW5kIHBpcGUgdG8gZW5hYmxlIGZvciBub3dcblxuICAgIGNvbnN0IGRldGVjdEFjY291bnRSZXF1ZXN0UHJvdG90eXBlTW9kaWZpZXIgPSBtID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gaW5wYWdlUHJvdmlkZXJbbV07XG5cbiAgICAgIGlucGFnZVByb3ZpZGVyW21dID0gZnVuY3Rpb24gcHJvdmlkZXJGdW5jKG1ldGhvZCkge1xuICAgICAgICBpZiAobWV0aG9kICYmIG1ldGhvZCA9PT0gXCJldGhfcmVxdWVzdEFjY291bnRzXCIpIHtcbiAgICAgICAgICByZXR1cm4gaW5wYWdlUHJvdmlkZXIuZW5hYmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgW21ldGhvZCwgLi4uYXJnc10pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllcihcInNlbmRcIik7XG4gICAgZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllcihcInNlbmRBc3luY1wiKTtcblxuICAgIGlucGFnZVByb3ZpZGVyLmVuYWJsZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIElmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4sIHdlIGFzc3VtZSB0aGV5IGhhdmUgZ2l2ZW4gYWNjZXNzIHRvIHRoZSB3ZWJzaXRlXG4gICAgICAgIGlucGFnZVByb3ZpZGVyLnNlbmRBc3luYyh7XG4gICAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgICBpZDogZ2V0UHJlb3Blbkluc3RhbmNlSWQoKSxcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgICAgIHBhcmFtczogW11cbiAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc1xuICAgICAgICAgIH0gPSByZXNwb25zZSB8fCB7fTtcblxuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzKSAmJiByZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBhbHJlYWR5IHJlaHlkcmF0ZWQsIHJlc29sdmUgdGhpc1xuICAgICAgICAgICAgLy8gZWxzZSB3YWl0IGZvciBzb21ldGhpbmcgdG8gYmUgd3JpdHRlbiB0byBzdGF0dXMgc3RyZWFtXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVMb2dpbkNiID0gKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5yZXF1ZXN0ZWRWZXJpZmllciAhPT0gXCJcIiAmJiB0aGlzLmN1cnJlbnRWZXJpZmllciAhPT0gdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3RlZFZlcmlmaWVyXG4gICAgICAgICAgICAgICAgfSA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL25vLXByb21pc2UtaW4tY2FsbGJhY2tcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nb3V0KCkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2UvYWx3YXlzLXJldHVyblxuICAgICAgICAgICAgICAgIC50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IHJlcXVlc3RlZFZlcmlmaWVyO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLl9zaG93TG9naW5Qb3B1cCh0cnVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICAgICAgICBoYW5kbGVMb2dpbkNiKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmlzTG9naW5DYWxsYmFjayA9IGhhbmRsZUxvZ2luQ2I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldCB1cCBsaXN0ZW5lciBmb3IgbG9naW5cbiAgICAgICAgICAgIHRoaXMuX3Nob3dMb2dpblBvcHVwKHRydWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbnBhZ2VQcm92aWRlci50cnlQcmVvcGVuSGFuZGxlID0gKHBheWxvYWQsIGNiKSA9PiB7XG4gICAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQ7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShfcGF5bG9hZCkgJiYgVU5TQUZFX01FVEhPRFMuaW5jbHVkZXMoX3BheWxvYWQubWV0aG9kKSkge1xuICAgICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkLCB7XG4gICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19DT05GSVJNX1dJTkRPV1xuICAgICAgICB9KTtcblxuICAgICAgICBfcGF5bG9hZC5wcmVvcGVuSW5zdGFuY2VJZCA9IHByZW9wZW5JbnN0YW5jZUlkO1xuICAgICAgfVxuXG4gICAgICBpbnBhZ2VQcm92aWRlci5fcnBjRW5naW5lLmhhbmRsZShfcGF5bG9hZCwgY2IpO1xuICAgIH07IC8vIFdvcmsgYXJvdW5kIGZvciB3ZWIzQDEuMCBkZWxldGluZyB0aGUgYm91bmQgYHNlbmRBc3luY2AgYnV0IG5vdCB0aGUgdW5ib3VuZFxuICAgIC8vIGBzZW5kQXN5bmNgIG1ldGhvZCBvbiB0aGUgcHJvdG90eXBlLCBjYXVzaW5nIGB0aGlzYCByZWZlcmVuY2UgaXNzdWVzIHdpdGggZHJpenpsZVxuXG5cbiAgICBjb25zdCBwcm94aWVkSW5wYWdlUHJvdmlkZXIgPSBuZXcgUHJveHkoaW5wYWdlUHJvdmlkZXIsIHtcbiAgICAgIC8vIHN0cmFpZ2h0IHVwIGxpZSB0aGF0IHdlIGRlbGV0ZWQgdGhlIHByb3BlcnR5IHNvIHRoYXQgaXQgZG9lc250XG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBpbiBzdHJpY3QgbW9kZVxuICAgICAgZGVsZXRlUHJvcGVydHk6ICgpID0+IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmV0aGVyZXVtID0gcHJveGllZElucGFnZVByb3ZpZGVyO1xuICAgIGNvbnN0IGNvbW11bmljYXRpb25NdXggPSBzZXR1cE11bHRpcGxleChjb21tdW5pY2F0aW9uU3RyZWFtKTtcbiAgICB0aGlzLmNvbW11bmljYXRpb25NdXggPSBjb21tdW5pY2F0aW9uTXV4O1xuICAgIGNvbnN0IHdpbmRvd1N0cmVhbSA9IGNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwid2luZG93XCIpO1xuICAgIHdpbmRvd1N0cmVhbS5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwiY3JlYXRlX3dpbmRvd1wiKSB7XG4gICAgICAgIC8vIHVybCBpcyB0aGUgdXJsIHdlIG5lZWQgdG8gb3BlblxuICAgICAgICAvLyB3ZSBjYW4gcGFzcyB0aGUgZmluYWwgdXJsIHVwZnJvbnQgc28gdGhhdCBpdCByZW1vdmVzIHRoZSBzdGVwIG9mIHJlZGlyZWN0aW5nIHRvIC9yZWRpcmVjdCBhbmQgd2FpdGluZyBmb3IgZmluYWxVcmxcbiAgICAgICAgdGhpcy5fY3JlYXRlUG9wdXBCbG9ja0FsZXJ0KGNodW5rLmRhdGEucHJlb3Blbkluc3RhbmNlSWQsIGNodW5rLmRhdGEudXJsKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gc2hvdyB0b3J1cyB3aWRnZXQgaWYgYnV0dG9uIGNsaWNrZWRcblxuICAgIGNvbnN0IHdpZGdldFN0cmVhbSA9IGNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwid2lkZ2V0XCIpO1xuICAgIHdpZGdldFN0cmVhbS5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhXG4gICAgICB9ID0gY2h1bms7XG5cbiAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoZGF0YSk7XG4gICAgfSk7IC8vIFNob3cgdG9ydXMgYnV0dG9uIGlmIHdhbGxldCBoYXMgYmVlbiBoeWRyYXRlZC9kZXRlY3RlZFxuXG4gICAgY29uc3Qgc3RhdHVzU3RyZWFtID0gY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJzdGF0dXNcIik7XG4gICAgc3RhdHVzU3RyZWFtLm9uKFwiZGF0YVwiLCBzdGF0dXMgPT4ge1xuICAgICAgLy8gbG9naW5cbiAgICAgIGlmIChzdGF0dXMubG9nZ2VkSW4pIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gc3RhdHVzLmxvZ2dlZEluO1xuICAgICAgICB0aGlzLmN1cnJlbnRWZXJpZmllciA9IHN0YXR1cy52ZXJpZmllcjtcbiAgICAgIH0gLy8gbG9nb3V0XG4gICAgICBlbHNlIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcblxuICAgICAgaWYgKHRoaXMuaXNMb2dpbkNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaXNMb2dpbkNhbGxiYWNrKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlzTG9naW5DYWxsYmFjaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnByb3ZpZGVyID0gcHJveGllZElucGFnZVByb3ZpZGVyO1xuICAgIGlmICh0aGlzLnByb3ZpZGVyLnNob3VsZFNlbmRNZXRhZGF0YSkgc2VuZFNpdGVNZXRhZGF0YSh0aGlzLnByb3ZpZGVyLl9ycGNFbmdpbmUpO1xuXG4gICAgaW5wYWdlUHJvdmlkZXIuX2luaXRpYWxpemVTdGF0ZSgpO1xuXG4gICAgbG9nLmRlYnVnKFwiVG9ydXMgLSBpbmplY3RlZCBwcm92aWRlclwiKTtcbiAgfVxuXG4gIF9zaG93TG9naW5Qb3B1cChjYWxsZWRGcm9tRW1iZWQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGxvZ2luSGFuZGxlciA9IGRhdGEgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlcnIsXG4gICAgICAgIHNlbGVjdGVkQWRkcmVzc1xuICAgICAgfSA9IGRhdGE7XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgbG9nLmVycm9yKGVycik7XG4gICAgICAgIGlmIChyZWplY3QpIHJlamVjdChlcnIpO1xuICAgICAgfSAvLyByZXR1cm5zIGFuIGFycmF5IChjYXVzZSBhY2NvdW50cyBleHBlY3RzIGl0KVxuICAgICAgZWxzZSBpZiAocmVzb2x2ZSkgcmVzb2x2ZShbc2VsZWN0ZWRBZGRyZXNzXSk7XG5cbiAgICAgIGlmICh0aGlzLmlzSWZyYW1lRnVsbFNjcmVlbikgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvYXV0aFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJvYXV0aFwiKTtcblxuICAgIGlmICghdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcikge1xuICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZSh0cnVlKTtcblxuICAgICAgaGFuZGxlU3RyZWFtKG9hdXRoU3RyZWFtLCBcImRhdGFcIiwgbG9naW5IYW5kbGVyKTtcbiAgICAgIG9hdXRoU3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJvYXV0aF9tb2RhbFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2FsbGVkRnJvbUVtYmVkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVTdHJlYW0ob2F1dGhTdHJlYW0sIFwiZGF0YVwiLCBsb2dpbkhhbmRsZXIpO1xuICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQpO1xuXG4gICAgICBvYXV0aFN0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwib2F1dGhcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNhbGxlZEZyb21FbWJlZCxcbiAgICAgICAgICB2ZXJpZmllcjogdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcixcbiAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZCxcbiAgICAgICAgICBsb2dpbl9oaW50OiB0aGlzLmxvZ2luSGludFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlUG9wdXBCbG9ja0FsZXJ0KHByZW9wZW5JbnN0YW5jZUlkLCB1cmwpIHtcbiAgICBjb25zdCBsb2dvVXJsID0gdGhpcy5fZ2V0TG9nb1VybCgpO1xuXG4gICAgY29uc3QgdG9ydXNBbGVydCA9IGh0bWxUb0VsZW1lbnQoJzxkaXYgaWQ9XCJ0b3J1c0FsZXJ0XCIgY2xhc3M9XCJ0b3J1cy1hbGVydC0tdjJcIj4nICsgXCI8ZGl2IGlkPVxcXCJ0b3J1c0FsZXJ0X19sb2dvXFxcIj48aW1nIHNyYz1cXFwiXCIuY29uY2F0KGxvZ29VcmwsIFwiXFxcIiAvPjwvZGl2PlwiKSArIFwiPGRpdj5cIiArIFwiPGgxIGlkPVxcXCJ0b3J1c0FsZXJ0X190aXRsZVxcXCI+XCIuY29uY2F0KHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMuYWN0aW9uUmVxdWlyZWQsIFwiPC9oMT5cIikgKyBcIjxwIGlkPVxcXCJ0b3J1c0FsZXJ0X19kZXNjXFxcIj5cIi5jb25jYXQodGhpcy5lbWJlZFRyYW5zbGF0aW9ucy5wZW5kaW5nQWN0aW9uLCBcIjwvcD5cIikgKyBcIjwvZGl2PlwiICsgXCI8L2Rpdj5cIik7XG4gICAgY29uc3Qgc3VjY2Vzc0FsZXJ0ID0gaHRtbFRvRWxlbWVudChcIjxkaXY+PGEgaWQ9XFxcInRvcnVzQWxlcnRfX2J0blxcXCI+XCIuY29uY2F0KHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMuY29udGludWUsIFwiPC9hPjwvZGl2PlwiKSk7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gaHRtbFRvRWxlbWVudCgnPGRpdiBpZD1cInRvcnVzQWxlcnRfX2J0bi1jb250YWluZXJcIj48L2Rpdj4nKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VjY2Vzc0FsZXJ0KTtcbiAgICB0b3J1c0FsZXJ0LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBiaW5kT25Mb2FkID0gKCkgPT4ge1xuICAgICAgc3VjY2Vzc0FsZXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX0NPTkZJUk1fV0lORE9XXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvcnVzQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIGlmICh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX3NldEVtYmVkV2hpdGVMYWJlbCh0b3J1c0FsZXJ0KTtcblxuICAgIGNvbnN0IGF0dGFjaE9uTG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvcnVzQWxlcnQpO1xuICAgIH07XG5cbiAgICBydW5PbkxvYWQoYXR0YWNoT25Mb2FkKTtcbiAgICBydW5PbkxvYWQoYmluZE9uTG9hZCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBCVVRUT05fUE9TSVRJT04sIExPR0lOX1BST1ZJREVSLCBQQVlNRU5UX1BST1ZJREVSLCBUT1JVU19CVUlMRF9FTlYsIFRvcnVzSW5wYWdlUHJvdmlkZXIsIFdBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQLCBUb3J1cyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b3J1cy5lc20uanMubWFwXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IFRvcnVzIGZyb20gXCJAdG9ydXNsYWJzL3RvcnVzLWVtYmVkXCI7XG5leHBvcnQgdmFyIGdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gWzIsIG5ldyBUb3J1cygpXTtcbiAgICB9KTtcbn0pOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VG9ydXNQcm92aWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEVDID0gcmVxdWlyZShcImVsbGlwdGljXCIpLmVjO1xuXG52YXIgZWMgPSBuZXcgRUMoXCJzZWNwMjU2azFcIik7XG52YXIgYnJvd3NlckNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvIHx8IHt9O1xudmFyIHN1YnRsZSA9IGJyb3dzZXJDcnlwdG8uc3VidGxlIHx8IGJyb3dzZXJDcnlwdG8ud2Via2l0U3VidGxlO1xuXG52YXIgbm9kZUNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBFQ19HUk9VUF9PUkRFUiA9IEJ1ZmZlci5mcm9tKCdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZWJhYWVkY2U2YWY0OGEwM2JiZmQyNWU4Y2QwMzY0MTQxJywgJ2hleCcpO1xuY29uc3QgWkVSTzMyID0gQnVmZmVyLmFsbG9jKDMyLCAwKTtcblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8IFwiQXNzZXJ0aW9uIGZhaWxlZFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NjYWxhciAoeCkge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHgpICYmIHgubGVuZ3RoID09PSAzMjtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSkge1xuICBpZiAoIWlzU2NhbGFyKHByaXZhdGVLZXkpKVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBwcml2YXRlS2V5LmNvbXBhcmUoWkVSTzMyKSA+IDAgJiYgLy8gPiAwXG4gIHByaXZhdGVLZXkuY29tcGFyZShFQ19HUk9VUF9PUkRFUikgPCAwOyAvLyA8IEdcbn1cblxuLy8gQ29tcGFyZSB0d28gYnVmZmVycyBpbiBjb25zdGFudCB0aW1lIHRvIHByZXZlbnQgdGltaW5nIGF0dGFja3MuXG5mdW5jdGlvbiBlcXVhbENvbnN0VGltZShiMSwgYjIpIHtcbiAgaWYgKGIxLmxlbmd0aCAhPT0gYjIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciByZXMgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGIxLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzIHw9IGIxW2ldIF4gYjJbaV07ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgfVxuICByZXR1cm4gcmVzID09PSAwO1xufVxuXG4vKiBUaGlzIG11c3QgY2hlY2sgaWYgd2UncmUgaW4gdGhlIGJyb3dzZXIgb3Jcbm5vdCwgc2luY2UgdGhlIGZ1bmN0aW9ucyBhcmUgZGlmZmVyZW50IGFuZCBkb2VzXG5ub3QgY29udmVydCB1c2luZyBicm93c2VyaWZ5ICovXG5mdW5jdGlvbiByYW5kb21CeXRlcyhzaXplKSB7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgaWYgKHR5cGVvZiBicm93c2VyQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20obm9kZUNyeXB0by5yYW5kb21CeXRlcyhzaXplKSk7XG4gIH0gZWxzZSB7XG4gICAgYnJvd3NlckNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyKTtcbiAgfVxuICByZXR1cm4gQnVmZmVyLmZyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gc2hhNTEyKG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBoYXNoID0gbm9kZUNyeXB0by5jcmVhdGVIYXNoKCdzaGE1MTInKTtcbiAgICB2YXIgcmVzdWx0ID0gaGFzaC51cGRhdGUobXNnKS5kaWdlc3QoKTtcbiAgICByZXNvbHZlKG5ldyBVaW50OEFycmF5KHJlc3VsdCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QWVzKG9wKSB7XG4gIHJldHVybiBmdW5jdGlvbihpdiwga2V5LCBkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgIGlmIChzdWJ0bGUpIHtcbiAgICAgICAgdmFyIGltcG9ydEFsZ29yaXRobSA9IHtuYW1lOiBcIkFFUy1DQkNcIn07XG4gICAgICAgIHZhciBrZXlwID0gc3VidGxlLmltcG9ydEtleShcInJhd1wiLCBrZXksIGltcG9ydEFsZ29yaXRobSwgZmFsc2UsIFtvcF0pO1xuICAgICAgICByZXR1cm4ga2V5cC50aGVuKGZ1bmN0aW9uKGNyeXB0b0tleSkge1xuICAgICAgICAgIHZhciBlbmNBbGdvcml0aG0gPSB7bmFtZTogXCJBRVMtQ0JDXCIsIGl2OiBpdn07XG4gICAgICAgICAgcmV0dXJuIHN1YnRsZVtvcF0oZW5jQWxnb3JpdGhtLCBjcnlwdG9LZXksIGRhdGEpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkocmVzdWx0KSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcCA9PT0gJ2VuY3J5cHQnKSB7XG4gICAgICAgICAgdmFyIGNpcGhlciA9IG5vZGVDcnlwdG8uY3JlYXRlQ2lwaGVyaXYoJ2Flcy0yNTYtY2JjJywga2V5LCBpdik7XG4gICAgICAgICAgbGV0IGZpcnN0Q2h1bmsgPSBjaXBoZXIudXBkYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCBzZWNvbmRDaHVuayA9IGNpcGhlci5maW5hbCgpO1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmNvbmNhdChbZmlyc3RDaHVuaywgc2Vjb25kQ2h1bmtdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3AgPT09ICdkZWNyeXB0Jykge1xuICAgICAgICAgIHZhciBkZWNpcGhlciA9IG5vZGVDcnlwdG8uY3JlYXRlRGVjaXBoZXJpdignYWVzLTI1Ni1jYmMnLCBrZXksIGl2KTtcbiAgICAgICAgICBsZXQgZmlyc3RDaHVuayA9IGRlY2lwaGVyLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgc2Vjb25kQ2h1bmsgPSBkZWNpcGhlci5maW5hbCgpO1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmNvbmNhdChbZmlyc3RDaHVuaywgc2Vjb25kQ2h1bmtdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxudmFyIGFlc0NiY0VuY3J5cHQgPSBnZXRBZXMoXCJlbmNyeXB0XCIpO1xudmFyIGFlc0NiY0RlY3J5cHQgPSBnZXRBZXMoXCJkZWNyeXB0XCIpO1xuXG5mdW5jdGlvbiBobWFjU2hhMjU2U2lnbihrZXksIG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBobWFjID0gbm9kZUNyeXB0by5jcmVhdGVIbWFjKCdzaGEyNTYnLCBCdWZmZXIuZnJvbShrZXkpKTtcbiAgICBobWFjLnVwZGF0ZShtc2cpO1xuICAgIHZhciByZXN1bHQgPSBobWFjLmRpZ2VzdCgpO1xuICAgIHJlc29sdmUocmVzdWx0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhtYWNTaGEyNTZWZXJpZnkoa2V5LCBtc2csIHNpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBobWFjID0gbm9kZUNyeXB0by5jcmVhdGVIbWFjKCdzaGEyNTYnLCBCdWZmZXIuZnJvbShrZXkpKTtcbiAgICBobWFjLnVwZGF0ZShtc2cpO1xuICAgIHZhciBleHBlY3RlZFNpZyA9IGhtYWMuZGlnZXN0KCk7XG4gICAgcmVzb2x2ZShlcXVhbENvbnN0VGltZShleHBlY3RlZFNpZywgc2lnKSk7XG4gIH0pO1xufVxuXG4vKipcbiAgKiBHZW5lcmF0ZSBhIG5ldyB2YWxpZCBwcml2YXRlIGtleS4gV2lsbCB1c2UgdGhlIHdpbmRvdy5jcnlwdG8gb3Igd2luZG93Lm1zQ3J5cHRvIGFzIHNvdXJjZVxuICAqIGRlcGVuZGluZyBvbiB5b3VyIGJyb3dzZXIuXG4gICogQHJldHVybiB7QnVmZmVyfSBBIDMyLWJ5dGUgcHJpdmF0ZSBrZXkuXG4gICogQGZ1bmN0aW9uXG4gICovXG5leHBvcnRzLmdlbmVyYXRlUHJpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByaXZhdGVLZXkgPSByYW5kb21CeXRlcygzMik7XG4gIHdoaWxlICghaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSkpIHtcbiAgICBwcml2YXRlS2V5ID0gcmFuZG9tQnl0ZXMoMzIpO1xuICB9XG4gIHJldHVybiBwcml2YXRlS2V5O1xufTtcblxudmFyIGdldFB1YmxpYyA9IGV4cG9ydHMuZ2V0UHVibGljID0gZnVuY3Rpb24ocHJpdmF0ZUtleSkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGhhcyBzeW5jIEFQSSBzbyB3ZSB0aHJvdyBhbiBlcnJvciBpbW1lZGlhdGVseS5cbiAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIC8vIFhYWChLYWdhbWkpOiBgZWxsaXB0aWMudXRpbHMuZW5jb2RlYCByZXR1cm5zIGFycmF5IGZvciBldmVyeVxuICAvLyBlbmNvZGluZyBleGNlcHQgYGhleGAuXG4gIHJldHVybiBCdWZmZXIuZnJvbShlYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5KS5nZXRQdWJsaWMoXCJhcnJcIikpO1xufTtcblxuLyoqXG4gKiBHZXQgY29tcHJlc3NlZCB2ZXJzaW9uIG9mIHB1YmxpYyBrZXkuXG4gKi9cbnZhciBnZXRQdWJsaWNDb21wcmVzc2VkID0gZXhwb3J0cy5nZXRQdWJsaWNDb21wcmVzc2VkID0gZnVuY3Rpb24ocHJpdmF0ZUtleSkgeyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2FuZGVyZXIvc2VjcDI1NmsxLW5vZGUvaXNzdWVzLzQ2XG4gIGxldCBjb21wcmVzc2VkID0gdHJ1ZTtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkpLmdldFB1YmxpYyhjb21wcmVzc2VkLCBcImFyclwiKSk7XG59O1xuXG4vLyBOT1RFKEthZ2FtaSk6IFdlIGRvbid0IHVzZSBwcm9taXNlIHNoaW0gaW4gQnJvd3NlciBpbXBsZW1lbnRhdGlvblxuLy8gYmVjYXVzZSBpdCdzIHN1cHBvcnRlZCBuYXRpdmVseSBpbiBuZXcgYnJvd3NlcnMgKHNlZVxuLy8gPGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1wcm9taXNlcz4pIGFuZCB3ZSBjYW4gdXNlIG9ubHkgbmV3IGJyb3dzZXJzXG4vLyBiZWNhdXNlIG9mIHRoZSBXZWJDcnlwdG9BUEkgKHNlZVxuLy8gPGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jcnlwdG9ncmFwaHk+KS5cbmV4cG9ydHMuc2lnbiA9IGZ1bmN0aW9uKHByaXZhdGVLZXksIG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIGFzc2VydChwcml2YXRlS2V5Lmxlbmd0aCA9PT0gMzIsIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAgIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KG1zZy5sZW5ndGggPiAwLCBcIk1lc3NhZ2Ugc2hvdWxkIG5vdCBiZSBlbXB0eVwiKTtcbiAgICBhc3NlcnQobXNnLmxlbmd0aCA8PSAzMiwgXCJNZXNzYWdlIGlzIHRvbyBsb25nXCIpO1xuICAgIHJlc29sdmUoQnVmZmVyLmZyb20oZWMuc2lnbihtc2csIHByaXZhdGVLZXksIHtjYW5vbmljYWw6IHRydWV9KS50b0RFUigpKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy52ZXJpZnkgPSBmdW5jdGlvbihwdWJsaWNLZXksIG1zZywgc2lnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBhc3NlcnQocHVibGljS2V5Lmxlbmd0aCA9PT0gNjUgfHwgcHVibGljS2V5Lmxlbmd0aCA9PT0gMzMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgaWYgKHB1YmxpY0tleS5sZW5ndGggPT09IDY1KVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlbMF0gPT09IDQsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIGlmIChwdWJsaWNLZXkubGVuZ3RoID09PSAzMylcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5WzBdID09PSAyIHx8IHB1YmxpY0tleVswXSA9PT0gMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgYXNzZXJ0KG1zZy5sZW5ndGggPiAwLCBcIk1lc3NhZ2Ugc2hvdWxkIG5vdCBiZSBlbXB0eVwiKTtcbiAgICBhc3NlcnQobXNnLmxlbmd0aCA8PSAzMiwgXCJNZXNzYWdlIGlzIHRvbyBsb25nXCIpO1xuICAgIGlmIChlYy52ZXJpZnkobXNnLCBzaWcsIHB1YmxpY0tleSkpIHtcbiAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJCYWQgc2lnbmF0dXJlXCIpKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGRlcml2ZSA9IGV4cG9ydHMuZGVyaXZlID0gZnVuY3Rpb24ocHJpdmF0ZUtleUEsIHB1YmxpY0tleUIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKHByaXZhdGVLZXlBKSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KEJ1ZmZlci5pc0J1ZmZlcihwdWJsaWNLZXlCKSwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICBhc3NlcnQocHJpdmF0ZUtleUEubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXlBKSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KHB1YmxpY0tleUIubGVuZ3RoID09PSA2NSB8fCBwdWJsaWNLZXlCLmxlbmd0aCA9PT0gMzMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgaWYgKHB1YmxpY0tleUIubGVuZ3RoID09PSA2NSlcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5QlswXSA9PT0gNCwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgaWYgKHB1YmxpY0tleUIubGVuZ3RoID09PSAzMylcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5QlswXSA9PT0gMiB8fCBwdWJsaWNLZXlCWzBdID09PSAzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICB2YXIga2V5QSA9IGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXlBKTtcbiAgICB2YXIga2V5QiA9IGVjLmtleUZyb21QdWJsaWMocHVibGljS2V5Qik7XG4gICAgdmFyIFB4ID0ga2V5QS5kZXJpdmUoa2V5Qi5nZXRQdWJsaWMoKSk7ICAvLyBCTiBpbnN0YW5jZVxuICAgIHJlc29sdmUoQnVmZmVyLmZyb20oUHgudG9BcnJheSgpKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5lbmNyeXB0ID0gZnVuY3Rpb24ocHVibGljS2V5VG8sIG1zZywgb3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgLy8gVG1wIHZhcmlhYmxlcyB0byBzYXZlIGNvbnRleHQgZnJvbSBmbGF0IHByb21pc2VzO1xuICB2YXIgaXYsIGVwaGVtUHVibGljS2V5LCBjaXBoZXJ0ZXh0LCBtYWNLZXk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGVwaGVtUHJpdmF0ZUtleSA9IG9wdHMuZXBoZW1Qcml2YXRlS2V5IHx8IHJhbmRvbUJ5dGVzKDMyKTtcbiAgICAvLyBUaGVyZSBpcyBhIHZlcnkgdW5saWtlbHkgcG9zc2liaWxpdHkgdGhhdCBpdCBpcyBub3QgYSB2YWxpZCBrZXlcbiAgICB3aGlsZSghaXNWYWxpZFByaXZhdGVLZXkoZXBoZW1Qcml2YXRlS2V5KSlcbiAgICB7XG4gICAgICBlcGhlbVByaXZhdGVLZXkgPSBvcHRzLmVwaGVtUHJpdmF0ZUtleSB8fCByYW5kb21CeXRlcygzMik7XG4gICAgfVxuICAgIGVwaGVtUHVibGljS2V5ID0gZ2V0UHVibGljKGVwaGVtUHJpdmF0ZUtleSk7XG4gICAgcmVzb2x2ZShkZXJpdmUoZXBoZW1Qcml2YXRlS2V5LCBwdWJsaWNLZXlUbykpO1xuICB9KS50aGVuKGZ1bmN0aW9uKFB4KSB7XG4gICAgcmV0dXJuIHNoYTUxMihQeCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oaGFzaCkge1xuICAgIGl2ID0gb3B0cy5pdiB8fCByYW5kb21CeXRlcygxNik7XG4gICAgdmFyIGVuY3J5cHRpb25LZXkgPSBoYXNoLnNsaWNlKDAsIDMyKTtcbiAgICBtYWNLZXkgPSBoYXNoLnNsaWNlKDMyKTtcbiAgICByZXR1cm4gYWVzQ2JjRW5jcnlwdChpdiwgZW5jcnlwdGlvbktleSwgbXNnKTtcbiAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgY2lwaGVydGV4dCA9IGRhdGE7XG4gICAgdmFyIGRhdGFUb01hYyA9IEJ1ZmZlci5jb25jYXQoW2l2LCBlcGhlbVB1YmxpY0tleSwgY2lwaGVydGV4dF0pO1xuICAgIHJldHVybiBobWFjU2hhMjU2U2lnbihtYWNLZXksIGRhdGFUb01hYyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24obWFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl2OiBpdixcbiAgICAgIGVwaGVtUHVibGljS2V5OiBlcGhlbVB1YmxpY0tleSxcbiAgICAgIGNpcGhlcnRleHQ6IGNpcGhlcnRleHQsXG4gICAgICBtYWM6IG1hYyxcbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVjcnlwdCA9IGZ1bmN0aW9uKHByaXZhdGVLZXksIG9wdHMpIHtcbiAgLy8gVG1wIHZhcmlhYmxlIHRvIHNhdmUgY29udGV4dCBmcm9tIGZsYXQgcHJvbWlzZXM7XG4gIHZhciBlbmNyeXB0aW9uS2V5O1xuICByZXR1cm4gZGVyaXZlKHByaXZhdGVLZXksIG9wdHMuZXBoZW1QdWJsaWNLZXkpLnRoZW4oZnVuY3Rpb24oUHgpIHtcbiAgICByZXR1cm4gc2hhNTEyKFB4KTtcbiAgfSkudGhlbihmdW5jdGlvbihoYXNoKSB7XG4gICAgZW5jcnlwdGlvbktleSA9IGhhc2guc2xpY2UoMCwgMzIpO1xuICAgIHZhciBtYWNLZXkgPSBoYXNoLnNsaWNlKDMyKTtcbiAgICB2YXIgZGF0YVRvTWFjID0gQnVmZmVyLmNvbmNhdChbXG4gICAgICBvcHRzLml2LFxuICAgICAgb3B0cy5lcGhlbVB1YmxpY0tleSxcbiAgICAgIG9wdHMuY2lwaGVydGV4dFxuICAgIF0pO1xuICAgIHJldHVybiBobWFjU2hhMjU2VmVyaWZ5KG1hY0tleSwgZGF0YVRvTWFjLCBvcHRzLm1hYyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24obWFjR29vZCkge1xuICAgIGFzc2VydChtYWNHb29kLCBcIkJhZCBNQUNcIik7XG4gICAgcmV0dXJuIGFlc0NiY0RlY3J5cHQob3B0cy5pdiwgZW5jcnlwdGlvbktleSwgb3B0cy5jaXBoZXJ0ZXh0KTtcbiAgfSkudGhlbihmdW5jdGlvbihtc2cpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkobXNnKSk7XG4gIH0pO1xufTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGFkX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcGFkLXN0cmluZ1wiKTtcbmZ1bmN0aW9uIGVuY29kZShpbnB1dCwgZW5jb2RpbmcpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09IHZvaWQgMCkgeyBlbmNvZGluZyA9IFwidXRmOFwiOyB9XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21CYXNlNjQoaW5wdXQudG9TdHJpbmcoXCJiYXNlNjRcIikpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUJhc2U2NChCdWZmZXIuZnJvbShpbnB1dCwgZW5jb2RpbmcpLnRvU3RyaW5nKFwiYmFzZTY0XCIpKTtcbn1cbjtcbmZ1bmN0aW9uIGRlY29kZShiYXNlNjR1cmwsIGVuY29kaW5nKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSB2b2lkIDApIHsgZW5jb2RpbmcgPSBcInV0ZjhcIjsgfVxuICAgIHJldHVybiBCdWZmZXIuZnJvbSh0b0Jhc2U2NChiYXNlNjR1cmwpLCBcImJhc2U2NFwiKS50b1N0cmluZyhlbmNvZGluZyk7XG59XG5mdW5jdGlvbiB0b0Jhc2U2NChiYXNlNjR1cmwpIHtcbiAgICBiYXNlNjR1cmwgPSBiYXNlNjR1cmwudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcGFkX3N0cmluZ18xLmRlZmF1bHQoYmFzZTY0dXJsKVxuICAgICAgICAucmVwbGFjZSgvXFwtL2csIFwiK1wiKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIik7XG59XG5mdW5jdGlvbiBmcm9tQmFzZTY0KGJhc2U2NCkge1xuICAgIHJldHVybiBiYXNlNjRcbiAgICAgICAgLnJlcGxhY2UoLz0vZywgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCBcIl9cIik7XG59XG5mdW5jdGlvbiB0b0J1ZmZlcihiYXNlNjR1cmwpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odG9CYXNlNjQoYmFzZTY0dXJsKSwgXCJiYXNlNjRcIik7XG59XG52YXIgYmFzZTY0dXJsID0gZW5jb2RlO1xuYmFzZTY0dXJsLmVuY29kZSA9IGVuY29kZTtcbmJhc2U2NHVybC5kZWNvZGUgPSBkZWNvZGU7XG5iYXNlNjR1cmwudG9CYXNlNjQgPSB0b0Jhc2U2NDtcbmJhc2U2NHVybC5mcm9tQmFzZTY0ID0gZnJvbUJhc2U2NDtcbmJhc2U2NHVybC50b0J1ZmZlciA9IHRvQnVmZmVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZTY0dXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBwYWRTdHJpbmcoaW5wdXQpIHtcbiAgICB2YXIgc2VnbWVudExlbmd0aCA9IDQ7XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB2YXIgZGlmZiA9IHN0cmluZ0xlbmd0aCAlIHNlZ21lbnRMZW5ndGg7XG4gICAgaWYgKCFkaWZmKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgdmFyIHBvc2l0aW9uID0gc3RyaW5nTGVuZ3RoO1xuICAgIHZhciBwYWRMZW5ndGggPSBzZWdtZW50TGVuZ3RoIC0gZGlmZjtcbiAgICB2YXIgcGFkZGVkU3RyaW5nTGVuZ3RoID0gc3RyaW5nTGVuZ3RoICsgcGFkTGVuZ3RoO1xuICAgIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2MocGFkZGVkU3RyaW5nTGVuZ3RoKTtcbiAgICBidWZmZXIud3JpdGUoaW5wdXQpO1xuICAgIHdoaWxlIChwYWRMZW5ndGgtLSkge1xuICAgICAgICBidWZmZXIud3JpdGUoXCI9XCIsIHBvc2l0aW9uKyspO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBwYWRTdHJpbmc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9iYXNlNjR1cmwnKS5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IEJ1ZmZlci5pc0J1ZmZlcjtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuIiwidmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxudmFyIGlzUmVxdWVzdCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRyZXR1cm4gc3RyZWFtLnNldEhlYWRlciAmJiB0eXBlb2Ygc3RyZWFtLmFib3J0ID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIGlzQ2hpbGRQcm9jZXNzID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdHJldHVybiBzdHJlYW0uc3RkaW8gJiYgQXJyYXkuaXNBcnJheShzdHJlYW0uc3RkaW8pICYmIHN0cmVhbS5zdGRpby5sZW5ndGggPT09IDNcbn07XG5cbnZhciBlb3MgPSBmdW5jdGlvbihzdHJlYW0sIG9wdHMsIGNhbGxiYWNrKSB7XG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGVvcyhzdHJlYW0sIG51bGwsIG9wdHMpO1xuXHRpZiAoIW9wdHMpIG9wdHMgPSB7fTtcblxuXHRjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG5cblx0dmFyIHdzID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuXHR2YXIgcnMgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG5cdHZhciByZWFkYWJsZSA9IG9wdHMucmVhZGFibGUgfHwgKG9wdHMucmVhZGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS5yZWFkYWJsZSk7XG5cdHZhciB3cml0YWJsZSA9IG9wdHMud3JpdGFibGUgfHwgKG9wdHMud3JpdGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS53cml0YWJsZSk7XG5cdHZhciBjYW5jZWxsZWQgPSBmYWxzZTtcblxuXHR2YXIgb25sZWdhY3lmaW5pc2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXN0cmVhbS53cml0YWJsZSkgb25maW5pc2goKTtcblx0fTtcblxuXHR2YXIgb25maW5pc2ggPSBmdW5jdGlvbigpIHtcblx0XHR3cml0YWJsZSA9IGZhbHNlO1xuXHRcdGlmICghcmVhZGFibGUpIGNhbGxiYWNrLmNhbGwoc3RyZWFtKTtcblx0fTtcblxuXHR2YXIgb25lbmQgPSBmdW5jdGlvbigpIHtcblx0XHRyZWFkYWJsZSA9IGZhbHNlO1xuXHRcdGlmICghd3JpdGFibGUpIGNhbGxiYWNrLmNhbGwoc3RyZWFtKTtcblx0fTtcblxuXHR2YXIgb25leGl0ID0gZnVuY3Rpb24oZXhpdENvZGUpIHtcblx0XHRjYWxsYmFjay5jYWxsKHN0cmVhbSwgZXhpdENvZGUgPyBuZXcgRXJyb3IoJ2V4aXRlZCB3aXRoIGVycm9yIGNvZGU6ICcgKyBleGl0Q29kZSkgOiBudWxsKTtcblx0fTtcblxuXHR2YXIgb25lcnJvciA9IGZ1bmN0aW9uKGVycikge1xuXHRcdGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBlcnIpO1xuXHR9O1xuXG5cdHZhciBvbmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0cHJvY2Vzcy5uZXh0VGljayhvbmNsb3NlbmV4dHRpY2spO1xuXHR9O1xuXG5cdHZhciBvbmNsb3NlbmV4dHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoY2FuY2VsbGVkKSByZXR1cm47XG5cdFx0aWYgKHJlYWRhYmxlICYmICEocnMgJiYgKHJzLmVuZGVkICYmICFycy5kZXN0cm95ZWQpKSkgcmV0dXJuIGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBuZXcgRXJyb3IoJ3ByZW1hdHVyZSBjbG9zZScpKTtcblx0XHRpZiAod3JpdGFibGUgJiYgISh3cyAmJiAod3MuZW5kZWQgJiYgIXdzLmRlc3Ryb3llZCkpKSByZXR1cm4gY2FsbGJhY2suY2FsbChzdHJlYW0sIG5ldyBFcnJvcigncHJlbWF0dXJlIGNsb3NlJykpO1xuXHR9O1xuXG5cdHZhciBvbnJlcXVlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRzdHJlYW0ucmVxLm9uKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdH07XG5cblx0aWYgKGlzUmVxdWVzdChzdHJlYW0pKSB7XG5cdFx0c3RyZWFtLm9uKCdjb21wbGV0ZScsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ub24oJ2Fib3J0Jywgb25jbG9zZSk7XG5cdFx0aWYgKHN0cmVhbS5yZXEpIG9ucmVxdWVzdCgpO1xuXHRcdGVsc2Ugc3RyZWFtLm9uKCdyZXF1ZXN0Jywgb25yZXF1ZXN0KTtcblx0fSBlbHNlIGlmICh3cml0YWJsZSAmJiAhd3MpIHsgLy8gbGVnYWN5IHN0cmVhbXNcblx0XHRzdHJlYW0ub24oJ2VuZCcsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ub24oJ2Nsb3NlJywgb25sZWdhY3lmaW5pc2gpO1xuXHR9XG5cblx0aWYgKGlzQ2hpbGRQcm9jZXNzKHN0cmVhbSkpIHN0cmVhbS5vbignZXhpdCcsIG9uZXhpdCk7XG5cblx0c3RyZWFtLm9uKCdlbmQnLCBvbmVuZCk7XG5cdHN0cmVhbS5vbignZmluaXNoJywgb25maW5pc2gpO1xuXHRpZiAob3B0cy5lcnJvciAhPT0gZmFsc2UpIHN0cmVhbS5vbignZXJyb3InLCBvbmVycm9yKTtcblx0c3RyZWFtLm9uKCdjbG9zZScsIG9uY2xvc2UpO1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRjYW5jZWxsZWQgPSB0cnVlO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY29tcGxldGUnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdhYm9ydCcsIG9uY2xvc2UpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcigncmVxdWVzdCcsIG9ucmVxdWVzdCk7XG5cdFx0aWYgKHN0cmVhbS5yZXEpIHN0cmVhbS5yZXEucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZXhpdCcsIG9uZXhpdCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcblx0fTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IE9wZW5KUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vb3BlbmpzZi5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkLFxuICAgIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpLFxuICAgIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZSxcbiAgICBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduXG4gKiBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFlcShvYmplY3Rba2V5XSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1lcmdlYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgbWVyZ2VkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAob2JqZWN0ID09PSBzb3VyY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYmFzZUZvcihzb3VyY2UsIGZ1bmN0aW9uKHNyY1ZhbHVlLCBrZXkpIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIGJhc2VNZXJnZSwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgICAgPyBjdXN0b21pemVyKHNhZmVHZXQob2JqZWN0LCBrZXkpLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sIGtleXNJbik7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlTWVyZ2VgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgbWVyZ2VzIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIG1lcmdlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gbWVyZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWVyZ2VGdW5jIFRoZSBmdW5jdGlvbiB0byBtZXJnZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgbWVyZ2VGdW5jLCBjdXN0b21pemVyLCBzdGFjaykge1xuICB2YXIgb2JqVmFsdWUgPSBzYWZlR2V0KG9iamVjdCwga2V5KSxcbiAgICAgIHNyY1ZhbHVlID0gc2FmZUdldChzb3VyY2UsIGtleSksXG4gICAgICBzdGFja2VkID0gc3RhY2suZ2V0KHNyY1ZhbHVlKTtcblxuICBpZiAoc3RhY2tlZCkge1xuICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHN0YWNrZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIHZhciBpc0NvbW1vbiA9IG5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheShzcmNWYWx1ZSksXG4gICAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiBpc0J1ZmZlcihzcmNWYWx1ZSksXG4gICAgICAgIGlzVHlwZWQgPSAhaXNBcnIgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkoc3JjVmFsdWUpO1xuXG4gICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICBpZiAoaXNBcnIgfHwgaXNCdWZmIHx8IGlzVHlwZWQpIHtcbiAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VPYmplY3Qob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY29weUFycmF5KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQnVmZikge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lQnVmZmVyKHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzVHlwZWQpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZVR5cGVkQXJyYXkoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc3JjVmFsdWUpIHx8IGlzQXJndW1lbnRzKHNyY1ZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIGlmIChpc0FyZ3VtZW50cyhvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0b1BsYWluT2JqZWN0KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFpc09iamVjdChvYmpWYWx1ZSkgfHwgaXNGdW5jdGlvbihvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpbml0Q2xvbmVPYmplY3Qoc3JjVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChpc0NvbW1vbikge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IG1lcmdlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHN0YWNrLnNldChzcmNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIG1lcmdlRnVuYyhuZXdWYWx1ZSwgc3JjVmFsdWUsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCwgdW5sZXNzIGBrZXlgIGlzIFwiX19wcm90b19fXCIgb3IgXCJjb25zdHJ1Y3RvclwiLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2FmZUdldChvYmplY3QsIGtleSkge1xuICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcGxhaW4gb2JqZWN0IGZsYXR0ZW5pbmcgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nXG4gKiBrZXllZCBwcm9wZXJ0aWVzIG9mIGB2YWx1ZWAgdG8gb3duIHByb3BlcnRpZXMgb2YgdGhlIHBsYWluIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBwbGFpbiBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIG5ldyBGb28pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgXy50b1BsYWluT2JqZWN0KG5ldyBGb28pKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMyB9XG4gKi9cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3QodmFsdWUsIGtleXNJbih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmFzc2lnbmAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgbWVyZ2VzIG93biBhbmRcbiAqIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RzIGludG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBwcm9wZXJ0aWVzIHRoYXQgcmVzb2x2ZSB0byBgdW5kZWZpbmVkYCBhcmVcbiAqIHNraXBwZWQgaWYgYSBkZXN0aW5hdGlvbiB2YWx1ZSBleGlzdHMuIEFycmF5IGFuZCBwbGFpbiBvYmplY3QgcHJvcGVydGllc1xuICogYXJlIG1lcmdlZCByZWN1cnNpdmVseS4gT3RoZXIgb2JqZWN0cyBhbmQgdmFsdWUgdHlwZXMgYXJlIG92ZXJyaWRkZW4gYnlcbiAqIGFzc2lnbm1lbnQuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC4gU3Vic2VxdWVudFxuICogc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuNS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7XG4gKiAgICdhJzogW3sgJ2InOiAyIH0sIHsgJ2QnOiA0IH1dXG4gKiB9O1xuICpcbiAqIHZhciBvdGhlciA9IHtcbiAqICAgJ2EnOiBbeyAnYyc6IDMgfSwgeyAnZSc6IDUgfV1cbiAqIH07XG4gKlxuICogXy5tZXJnZShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHsgJ2EnOiBbeyAnYic6IDIsICdjJzogMyB9LCB7ICdkJzogNCwgJ2UnOiA1IH1dIH1cbiAqL1xudmFyIG1lcmdlID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KSB7XG4gIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2U7XG4iLCIvKlxuKiBsb2dsZXZlbCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9waW10ZXJyeS9sb2dsZXZlbFxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTMgVGltIFBlcnJ5XG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKHJvb3QsIGRlZmluaXRpb24pIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShkZWZpbml0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QubG9nID0gZGVmaW5pdGlvbigpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gU2xpZ2h0bHkgZHViaW91cyB0cmlja3MgdG8gY3V0IGRvd24gbWluaW1pemVkIGZpbGUgc2l6ZVxuICAgIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcbiAgICB2YXIgdW5kZWZpbmVkVHlwZSA9IFwidW5kZWZpbmVkXCI7XG4gICAgdmFyIGlzSUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgJiYgKHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yICE9PSB1bmRlZmluZWRUeXBlKSAmJiAoXG4gICAgICAgIC9UcmlkZW50XFwvfE1TSUUgLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICk7XG5cbiAgICB2YXIgbG9nTWV0aG9kcyA9IFtcbiAgICAgICAgXCJ0cmFjZVwiLFxuICAgICAgICBcImRlYnVnXCIsXG4gICAgICAgIFwiaW5mb1wiLFxuICAgICAgICBcIndhcm5cIixcbiAgICAgICAgXCJlcnJvclwiXG4gICAgXTtcblxuICAgIC8vIENyb3NzLWJyb3dzZXIgYmluZCBlcXVpdmFsZW50IHRoYXQgd29ya3MgYXQgbGVhc3QgYmFjayB0byBJRTZcbiAgICBmdW5jdGlvbiBiaW5kTWV0aG9kKG9iaiwgbWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gb2JqW21ldGhvZE5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZC5iaW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kLmJpbmQob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwobWV0aG9kLCBvYmopO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIE1pc3NpbmcgYmluZCBzaGltIG9yIElFOCArIE1vZGVybml6ciwgZmFsbGJhY2sgdG8gd3JhcHBpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuYXBwbHkobWV0aG9kLCBbb2JqLCBhcmd1bWVudHNdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVHJhY2UoKSBkb2Vzbid0IHByaW50IHRoZSBtZXNzYWdlIGluIElFLCBzbyBmb3IgdGhhdCBjYXNlIHdlIG5lZWQgdG8gd3JhcCBpdFxuICAgIGZ1bmN0aW9uIHRyYWNlRm9ySUUoKSB7XG4gICAgICAgIGlmIChjb25zb2xlLmxvZykge1xuICAgICAgICAgICAgaWYgKGNvbnNvbGUubG9nLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gb2xkIElFLCBuYXRpdmUgY29uc29sZSBtZXRob2RzIHRoZW1zZWx2ZXMgZG9uJ3QgaGF2ZSBhcHBseSgpLlxuICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5hcHBseShjb25zb2xlLmxvZywgW2NvbnNvbGUsIGFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25zb2xlLnRyYWNlKSBjb25zb2xlLnRyYWNlKCk7XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgdGhlIGJlc3QgbG9nZ2luZyBtZXRob2QgcG9zc2libGUgZm9yIHRoaXMgZW52XG4gICAgLy8gV2hlcmV2ZXIgcG9zc2libGUgd2Ugd2FudCB0byBiaW5kLCBub3Qgd3JhcCwgdG8gcHJlc2VydmUgc3RhY2sgdHJhY2VzXG4gICAgZnVuY3Rpb24gcmVhbE1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnZGVidWcnKSB7XG4gICAgICAgICAgICBtZXRob2ROYW1lID0gJ2xvZyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09IHVuZGVmaW5lZFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gbWV0aG9kIHBvc3NpYmxlLCBmb3Igbm93IC0gZml4ZWQgbGF0ZXIgYnkgZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlc1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09ICd0cmFjZScgJiYgaXNJRSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYWNlRm9ySUU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc29sZVttZXRob2ROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCBtZXRob2ROYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlLmxvZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCAnbG9nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZXNlIHByaXZhdGUgZnVuY3Rpb25zIGFsd2F5cyBuZWVkIGB0aGlzYCB0byBiZSBzZXQgcHJvcGVybHlcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMb2dnaW5nTWV0aG9kcyhsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gbG9nTWV0aG9kc1tpXTtcbiAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0gPSAoaSA8IGxldmVsKSA/XG4gICAgICAgICAgICAgICAgbm9vcCA6XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSBsb2cubG9nIGFzIGFuIGFsaWFzIGZvciBsb2cuZGVidWdcbiAgICAgICAgdGhpcy5sb2cgPSB0aGlzLmRlYnVnO1xuICAgIH1cblxuICAgIC8vIEluIG9sZCBJRSB2ZXJzaW9ucywgdGhlIGNvbnNvbGUgaXNuJ3QgcHJlc2VudCB1bnRpbCB5b3UgZmlyc3Qgb3BlbiBpdC5cbiAgICAvLyBXZSBidWlsZCByZWFsTWV0aG9kKCkgcmVwbGFjZW1lbnRzIGhlcmUgdGhhdCByZWdlbmVyYXRlIGxvZ2dpbmcgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHRoaXMsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgd2UgdXNlIGNsb3NlbHkgYm91bmQgcmVhbCBtZXRob2RzIHdoZXJldmVyIHBvc3NpYmxlLCBhbmRcbiAgICAvLyBvdGhlcndpc2Ugd2Ugd2FpdCBmb3IgYSBjb25zb2xlIHRvIGFwcGVhciwgYW5kIHRoZW4gdHJ5IGFnYWluLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRNZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIHJldHVybiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHx8XG4gICAgICAgICAgICAgICBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTG9nZ2VyKG5hbWUsIGRlZmF1bHRMZXZlbCwgZmFjdG9yeSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGN1cnJlbnRMZXZlbDtcbiAgICAgIGRlZmF1bHRMZXZlbCA9IGRlZmF1bHRMZXZlbCA9PSBudWxsID8gXCJXQVJOXCIgOiBkZWZhdWx0TGV2ZWw7XG5cbiAgICAgIHZhciBzdG9yYWdlS2V5ID0gXCJsb2dsZXZlbFwiO1xuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHN0b3JhZ2VLZXkgKz0gXCI6XCIgKyBuYW1lO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICBzdG9yYWdlS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlKGxldmVsTnVtKSB7XG4gICAgICAgICAgdmFyIGxldmVsTmFtZSA9IChsb2dNZXRob2RzW2xldmVsTnVtXSB8fCAnc2lsZW50JykudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRUeXBlIHx8ICFzdG9yYWdlS2V5KSByZXR1cm47XG5cbiAgICAgICAgICAvLyBVc2UgbG9jYWxTdG9yYWdlIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Vbc3RvcmFnZUtleV0gPSBsZXZlbE5hbWU7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAvLyBVc2Ugc2Vzc2lvbiBjb29raWUgYXMgZmFsbGJhY2tcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RvcmFnZUtleSkgKyBcIj1cIiArIGxldmVsTmFtZSArIFwiO1wiO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0UGVyc2lzdGVkTGV2ZWwoKSB7XG4gICAgICAgICAgdmFyIHN0b3JlZExldmVsO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUgfHwgIXN0b3JhZ2VLZXkpIHJldHVybjtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHN0b3JlZExldmVsID0gd2luZG93LmxvY2FsU3RvcmFnZVtzdG9yYWdlS2V5XTtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAvLyBGYWxsYmFjayB0byBjb29raWVzIGlmIGxvY2FsIHN0b3JhZ2UgZ2l2ZXMgdXMgbm90aGluZ1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3RvcmVkTGV2ZWwgPT09IHVuZGVmaW5lZFR5cGUpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSB3aW5kb3cuZG9jdW1lbnQuY29va2llO1xuICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gY29va2llLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0b3JhZ2VLZXkpICsgXCI9XCIpO1xuICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlZExldmVsID0gL14oW147XSspLy5leGVjKGNvb2tpZS5zbGljZShsb2NhdGlvbikpWzFdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhlIHN0b3JlZCBsZXZlbCBpcyBub3QgdmFsaWQsIHRyZWF0IGl0IGFzIGlmIG5vdGhpbmcgd2FzIHN0b3JlZC5cbiAgICAgICAgICBpZiAoc2VsZi5sZXZlbHNbc3RvcmVkTGV2ZWxdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0b3JlZExldmVsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGVhclBlcnNpc3RlZExldmVsKCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRUeXBlIHx8ICFzdG9yYWdlS2V5KSByZXR1cm47XG5cbiAgICAgICAgICAvLyBVc2UgbG9jYWxTdG9yYWdlIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlS2V5KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIFVzZSBzZXNzaW9uIGNvb2tpZSBhcyBmYWxsYmFja1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5jb29raWUgPVxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQ1wiO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAqXG4gICAgICAgKiBQdWJsaWMgbG9nZ2VyIEFQSSAtIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcGltdGVycnkvbG9nbGV2ZWwgZm9yIGRldGFpbHNcbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgc2VsZi5uYW1lID0gbmFtZTtcblxuICAgICAgc2VsZi5sZXZlbHMgPSB7IFwiVFJBQ0VcIjogMCwgXCJERUJVR1wiOiAxLCBcIklORk9cIjogMiwgXCJXQVJOXCI6IDMsXG4gICAgICAgICAgXCJFUlJPUlwiOiA0LCBcIlNJTEVOVFwiOiA1fTtcblxuICAgICAgc2VsZi5tZXRob2RGYWN0b3J5ID0gZmFjdG9yeSB8fCBkZWZhdWx0TWV0aG9kRmFjdG9yeTtcblxuICAgICAgc2VsZi5nZXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudExldmVsO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5zZXRMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCwgcGVyc2lzdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwic3RyaW5nXCIgJiYgc2VsZi5sZXZlbHNbbGV2ZWwudG9VcHBlckNhc2UoKV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBsZXZlbCA9IHNlbGYubGV2ZWxzW2xldmVsLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcIm51bWJlclwiICYmIGxldmVsID49IDAgJiYgbGV2ZWwgPD0gc2VsZi5sZXZlbHMuU0lMRU5UKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRMZXZlbCA9IGxldmVsO1xuICAgICAgICAgICAgICBpZiAocGVyc2lzdCAhPT0gZmFsc2UpIHsgIC8vIGRlZmF1bHRzIHRvIHRydWVcbiAgICAgICAgICAgICAgICAgIHBlcnNpc3RMZXZlbElmUG9zc2libGUobGV2ZWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHNlbGYsIGxldmVsLCBuYW1lKTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSB1bmRlZmluZWRUeXBlICYmIGxldmVsIDwgc2VsZi5sZXZlbHMuU0lMRU5UKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBjb25zb2xlIGF2YWlsYWJsZSBmb3IgbG9nZ2luZ1wiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgXCJsb2cuc2V0TGV2ZWwoKSBjYWxsZWQgd2l0aCBpbnZhbGlkIGxldmVsOiBcIiArIGxldmVsO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNlbGYuc2V0RGVmYXVsdExldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICAgICAgZGVmYXVsdExldmVsID0gbGV2ZWw7XG4gICAgICAgICAgaWYgKCFnZXRQZXJzaXN0ZWRMZXZlbCgpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0TGV2ZWwobGV2ZWwsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZWxmLnJlc2V0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChkZWZhdWx0TGV2ZWwsIGZhbHNlKTtcbiAgICAgICAgICBjbGVhclBlcnNpc3RlZExldmVsKCk7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmVuYWJsZUFsbCA9IGZ1bmN0aW9uKHBlcnNpc3QpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKHNlbGYubGV2ZWxzLlRSQUNFLCBwZXJzaXN0KTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuZGlzYWJsZUFsbCA9IGZ1bmN0aW9uKHBlcnNpc3QpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKHNlbGYubGV2ZWxzLlNJTEVOVCwgcGVyc2lzdCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBJbml0aWFsaXplIHdpdGggdGhlIHJpZ2h0IGxldmVsXG4gICAgICB2YXIgaW5pdGlhbExldmVsID0gZ2V0UGVyc2lzdGVkTGV2ZWwoKTtcbiAgICAgIGlmIChpbml0aWFsTGV2ZWwgPT0gbnVsbCkge1xuICAgICAgICAgIGluaXRpYWxMZXZlbCA9IGRlZmF1bHRMZXZlbDtcbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0TGV2ZWwoaW5pdGlhbExldmVsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKlxuICAgICAqIFRvcC1sZXZlbCBBUElcbiAgICAgKlxuICAgICAqL1xuXG4gICAgdmFyIGRlZmF1bHRMb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG5cbiAgICB2YXIgX2xvZ2dlcnNCeU5hbWUgPSB7fTtcbiAgICBkZWZhdWx0TG9nZ2VyLmdldExvZ2dlciA9IGZ1bmN0aW9uIGdldExvZ2dlcihuYW1lKSB7XG4gICAgICAgIGlmICgodHlwZW9mIG5hbWUgIT09IFwic3ltYm9sXCIgJiYgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHx8IG5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3Qgc3VwcGx5IGEgbmFtZSB3aGVuIGNyZWF0aW5nIGEgbG9nZ2VyLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXTtcbiAgICAgICAgaWYgKCFsb2dnZXIpIHtcbiAgICAgICAgICBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXSA9IG5ldyBMb2dnZXIoXG4gICAgICAgICAgICBuYW1lLCBkZWZhdWx0TG9nZ2VyLmdldExldmVsKCksIGRlZmF1bHRMb2dnZXIubWV0aG9kRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9O1xuXG4gICAgLy8gR3JhYiB0aGUgY3VycmVudCBnbG9iYWwgbG9nIHZhcmlhYmxlIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgdmFyIF9sb2cgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgPyB3aW5kb3cubG9nIDogdW5kZWZpbmVkO1xuICAgIGRlZmF1bHRMb2dnZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSAmJlxuICAgICAgICAgICAgICAgd2luZG93LmxvZyA9PT0gZGVmYXVsdExvZ2dlcikge1xuICAgICAgICAgICAgd2luZG93LmxvZyA9IF9sb2c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdExvZ2dlcjtcbiAgICB9O1xuXG4gICAgZGVmYXVsdExvZ2dlci5nZXRMb2dnZXJzID0gZnVuY3Rpb24gZ2V0TG9nZ2VycygpIHtcbiAgICAgICAgcmV0dXJuIF9sb2dnZXJzQnlOYW1lO1xuICAgIH07XG5cbiAgICAvLyBFUzYgZGVmYXVsdCBleHBvcnQsIGZvciBjb21wYXRpYmlsaXR5XG4gICAgZGVmYXVsdExvZ2dlclsnZGVmYXVsdCddID0gZGVmYXVsdExvZ2dlcjtcblxuICAgIHJldHVybiBkZWZhdWx0TG9nZ2VyO1xufSkpO1xuIiwidmFyIHdyYXBweSA9IHJlcXVpcmUoJ3dyYXBweScpXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweShvbmNlKVxubW9kdWxlLmV4cG9ydHMuc3RyaWN0ID0gd3JhcHB5KG9uY2VTdHJpY3QpXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZVN0cmljdCcsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2VTdHJpY3QodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKSByZXR1cm4gZi52YWx1ZVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cblxuZnVuY3Rpb24gb25jZVN0cmljdCAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGYub25jZUVycm9yKVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIHZhciBuYW1lID0gZm4ubmFtZSB8fCAnRnVuY3Rpb24gd3JhcHBlZCB3aXRoIGBvbmNlYCdcbiAgZi5vbmNlRXJyb3IgPSBuYW1lICsgXCIgc2hvdWxkbid0IGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZVwiXG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fFxuICAgICFwcm9jZXNzLnZlcnNpb24gfHxcbiAgICBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjAuJykgPT09IDAgfHxcbiAgICBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjEuJykgPT09IDAgJiYgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YxLjguJykgIT09IDApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG5leHRUaWNrOiBuZXh0VGljayB9O1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzXG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGZuLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNhbGxiYWNrXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBhcmdzLCBpO1xuICBzd2l0Y2ggKGxlbikge1xuICBjYXNlIDA6XG4gIGNhc2UgMTpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gIGNhc2UgMjpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tPbmUoKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEpO1xuICAgIH0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrVHdvKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyKTtcbiAgICB9KTtcbiAgY2FzZSA0OlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja1RocmVlKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB9KTtcbiAgZGVmYXVsdDpcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYXJncy5sZW5ndGgpIHtcbiAgICAgIGFyZ3NbaSsrXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrKCkge1xuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwidmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJylcbnZhciBlb3MgPSByZXF1aXJlKCdlbmQtb2Ytc3RyZWFtJylcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJykgLy8gd2Ugb25seSBuZWVkIGZzIHRvIGdldCB0aGUgUmVhZFN0cmVhbSBhbmQgV3JpdGVTdHJlYW0gcHJvdG90eXBlc1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgYW5jaWVudCA9IC9edj9cXC4wLy50ZXN0KHByb2Nlc3MudmVyc2lvbilcblxudmFyIGlzRm4gPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG52YXIgaXNGUyA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgaWYgKCFhbmNpZW50KSByZXR1cm4gZmFsc2UgLy8gbmV3ZXIgbm9kZSB2ZXJzaW9uIGRvIG5vdCBuZWVkIHRvIGNhcmUgYWJvdXQgZnMgaXMgYSBzcGVjaWFsIHdheVxuICBpZiAoIWZzKSByZXR1cm4gZmFsc2UgLy8gYnJvd3NlclxuICByZXR1cm4gKHN0cmVhbSBpbnN0YW5jZW9mIChmcy5SZWFkU3RyZWFtIHx8IG5vb3ApIHx8IHN0cmVhbSBpbnN0YW5jZW9mIChmcy5Xcml0ZVN0cmVhbSB8fCBub29wKSkgJiYgaXNGbihzdHJlYW0uY2xvc2UpXG59XG5cbnZhciBpc1JlcXVlc3QgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHJldHVybiBzdHJlYW0uc2V0SGVhZGVyICYmIGlzRm4oc3RyZWFtLmFib3J0KVxufVxuXG52YXIgZGVzdHJveWVyID0gZnVuY3Rpb24gKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrKVxuXG4gIHZhciBjbG9zZWQgPSBmYWxzZVxuICBzdHJlYW0ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlZCA9IHRydWVcbiAgfSlcblxuICBlb3Moc3RyZWFtLCB7cmVhZGFibGU6IHJlYWRpbmcsIHdyaXRhYmxlOiB3cml0aW5nfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgY2xvc2VkID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgfSlcblxuICB2YXIgZGVzdHJveWVkID0gZmFsc2VcbiAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoY2xvc2VkKSByZXR1cm5cbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm5cbiAgICBkZXN0cm95ZWQgPSB0cnVlXG5cbiAgICBpZiAoaXNGUyhzdHJlYW0pKSByZXR1cm4gc3RyZWFtLmNsb3NlKG5vb3ApIC8vIHVzZSBjbG9zZSBmb3IgZnMgc3RyZWFtcyB0byBhdm9pZCBmZCBsZWFrc1xuICAgIGlmIChpc1JlcXVlc3Qoc3RyZWFtKSkgcmV0dXJuIHN0cmVhbS5hYm9ydCgpIC8vIHJlcXVlc3QuZGVzdHJveSBqdXN0IGRvIC5lbmQgLSAuYWJvcnQgaXMgd2hhdCB3ZSB3YW50XG5cbiAgICBpZiAoaXNGbihzdHJlYW0uZGVzdHJveSkpIHJldHVybiBzdHJlYW0uZGVzdHJveSgpXG5cbiAgICBjYWxsYmFjayhlcnIgfHwgbmV3IEVycm9yKCdzdHJlYW0gd2FzIGRlc3Ryb3llZCcpKVxuICB9XG59XG5cbnZhciBjYWxsID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuKClcbn1cblxudmFyIHBpcGUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgcmV0dXJuIGZyb20ucGlwZSh0bylcbn1cblxudmFyIHB1bXAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHJlYW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICB2YXIgY2FsbGJhY2sgPSBpc0ZuKHN0cmVhbXNbc3RyZWFtcy5sZW5ndGggLSAxXSB8fCBub29wKSAmJiBzdHJlYW1zLnBvcCgpIHx8IG5vb3BcblxuICBpZiAoQXJyYXkuaXNBcnJheShzdHJlYW1zWzBdKSkgc3RyZWFtcyA9IHN0cmVhbXNbMF1cbiAgaWYgKHN0cmVhbXMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKCdwdW1wIHJlcXVpcmVzIHR3byBzdHJlYW1zIHBlciBtaW5pbXVtJylcblxuICB2YXIgZXJyb3JcbiAgdmFyIGRlc3Ryb3lzID0gc3RyZWFtcy5tYXAoZnVuY3Rpb24gKHN0cmVhbSwgaSkge1xuICAgIHZhciByZWFkaW5nID0gaSA8IHN0cmVhbXMubGVuZ3RoIC0gMVxuICAgIHZhciB3cml0aW5nID0gaSA+IDBcbiAgICByZXR1cm4gZGVzdHJveWVyKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKCFlcnJvcikgZXJyb3IgPSBlcnJcbiAgICAgIGlmIChlcnIpIGRlc3Ryb3lzLmZvckVhY2goY2FsbClcbiAgICAgIGlmIChyZWFkaW5nKSByZXR1cm5cbiAgICAgIGRlc3Ryb3lzLmZvckVhY2goY2FsbClcbiAgICAgIGNhbGxiYWNrKGVycm9yKVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIHN0cmVhbXMucmVkdWNlKHBpcGUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHVtcFxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gYSBkdXBsZXggc3RyZWFtIGlzIGp1c3QgYSBzdHJlYW0gdGhhdCBpcyBib3RoIHJlYWRhYmxlIGFuZCB3cml0YWJsZS5cbi8vIFNpbmNlIEpTIGRvZXNuJ3QgaGF2ZSBtdWx0aXBsZSBwcm90b3R5cGFsIGluaGVyaXRhbmNlLCB0aGlzIGNsYXNzXG4vLyBwcm90b3R5cGFsbHkgaW5oZXJpdHMgZnJvbSBSZWFkYWJsZSwgYW5kIHRoZW4gcGFyYXNpdGljYWxseSBmcm9tXG4vLyBXcml0YWJsZS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgfXJldHVybiBrZXlzO1xufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1cGxleDtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgUmVhZGFibGUgPSByZXF1aXJlKCcuL19zdHJlYW1fcmVhZGFibGUnKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoJy4vX3N0cmVhbV93cml0YWJsZScpO1xuXG51dGlsLmluaGVyaXRzKER1cGxleCwgUmVhZGFibGUpO1xuXG57XG4gIC8vIGF2b2lkIHNjb3BlIGNyZWVwLCB0aGUga2V5cyBhcnJheSBjYW4gdGhlbiBiZSBjb2xsZWN0ZWRcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFdyaXRhYmxlLnByb3RvdHlwZSk7XG4gIGZvciAodmFyIHYgPSAwOyB2IDwga2V5cy5sZW5ndGg7IHYrKykge1xuICAgIHZhciBtZXRob2QgPSBrZXlzW3ZdO1xuICAgIGlmICghRHVwbGV4LnByb3RvdHlwZVttZXRob2RdKSBEdXBsZXgucHJvdG90eXBlW21ldGhvZF0gPSBXcml0YWJsZS5wcm90b3R5cGVbbWV0aG9kXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBEdXBsZXgob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRHVwbGV4KSkgcmV0dXJuIG5ldyBEdXBsZXgob3B0aW9ucyk7XG5cbiAgUmVhZGFibGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgV3JpdGFibGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlYWRhYmxlID09PSBmYWxzZSkgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMud3JpdGFibGUgPT09IGZhbHNlKSB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgdGhpcy5hbGxvd0hhbGZPcGVuID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGxvd0hhbGZPcGVuID09PSBmYWxzZSkgdGhpcy5hbGxvd0hhbGZPcGVuID0gZmFsc2U7XG5cbiAgdGhpcy5vbmNlKCdlbmQnLCBvbmVuZCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnd3JpdGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcblxuLy8gdGhlIG5vLWhhbGYtb3BlbiBlbmZvcmNlclxuZnVuY3Rpb24gb25lbmQoKSB7XG4gIC8vIGlmIHdlIGFsbG93IGhhbGYtb3BlbiBzdGF0ZSwgb3IgaWYgdGhlIHdyaXRhYmxlIHNpZGUgZW5kZWQsXG4gIC8vIHRoZW4gd2UncmUgb2suXG4gIGlmICh0aGlzLmFsbG93SGFsZk9wZW4gfHwgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRlZCkgcmV0dXJuO1xuXG4gIC8vIG5vIG1vcmUgZGF0YSBjYW4gYmUgd3JpdHRlbi5cbiAgLy8gQnV0IGFsbG93IG1vcmUgd3JpdGVzIHRvIGhhcHBlbiBpbiB0aGlzIHRpY2suXG4gIHBuYS5uZXh0VGljayhvbkVuZE5ULCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gb25FbmROVChzZWxmKSB7XG4gIHNlbGYuZW5kKCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnZGVzdHJveWVkJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX3dyaXRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgJiYgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gd2UgaWdub3JlIHRoZSB2YWx1ZSBpZiB0aGUgc3RyZWFtXG4gICAgLy8gaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5fd3JpdGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhlIHVzZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIG1hbmFnaW5nIGRlc3Ryb3llZFxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgfVxufSk7XG5cbkR1cGxleC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB0aGlzLnB1c2gobnVsbCk7XG4gIHRoaXMuZW5kKCk7XG5cbiAgcG5hLm5leHRUaWNrKGNiLCBlcnIpO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gYSBwYXNzdGhyb3VnaCBzdHJlYW0uXG4vLyBiYXNpY2FsbHkganVzdCB0aGUgbW9zdCBtaW5pbWFsIHNvcnQgb2YgVHJhbnNmb3JtIHN0cmVhbS5cbi8vIEV2ZXJ5IHdyaXR0ZW4gY2h1bmsgZ2V0cyBvdXRwdXQgYXMtaXMuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzVGhyb3VnaDtcblxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vX3N0cmVhbV90cmFuc2Zvcm0nKTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFBhc3NUaHJvdWdoLCBUcmFuc2Zvcm0pO1xuXG5mdW5jdGlvbiBQYXNzVGhyb3VnaChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQYXNzVGhyb3VnaCkpIHJldHVybiBuZXcgUGFzc1Rocm91Z2gob3B0aW9ucyk7XG5cbiAgVHJhbnNmb3JtLmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cblBhc3NUaHJvdWdoLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobnVsbCwgY2h1bmspO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWRhYmxlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBEdXBsZXg7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuUmVhZGFibGUuUmVhZGFibGVTdGF0ZSA9IFJlYWRhYmxlU3RhdGU7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRUUgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbnZhciBFRWxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiAoZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lcnModHlwZSkubGVuZ3RoO1xufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIFN0cmVhbSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9zdHJlYW0nKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgT3VyVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5IHx8IGZ1bmN0aW9uICgpIHt9O1xuZnVuY3Rpb24gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuaykge1xuICByZXR1cm4gQnVmZmVyLmZyb20oY2h1bmspO1xufVxuZnVuY3Rpb24gX2lzVWludDhBcnJheShvYmopIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihvYmopIHx8IG9iaiBpbnN0YW5jZW9mIE91clVpbnQ4QXJyYXk7XG59XG5cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgZGVidWdVdGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGRlYnVnID0gdm9pZCAwO1xuaWYgKGRlYnVnVXRpbCAmJiBkZWJ1Z1V0aWwuZGVidWdsb2cpIHtcbiAgZGVidWcgPSBkZWJ1Z1V0aWwuZGVidWdsb2coJ3N0cmVhbScpO1xufSBlbHNlIHtcbiAgZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcbn1cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyTGlzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0Jyk7XG52YXIgZGVzdHJveUltcGwgPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvZGVzdHJveScpO1xudmFyIFN0cmluZ0RlY29kZXI7XG5cbnV0aWwuaW5oZXJpdHMoUmVhZGFibGUsIFN0cmVhbSk7XG5cbnZhciBrUHJveHlFdmVudHMgPSBbJ2Vycm9yJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knLCAncGF1c2UnLCAncmVzdW1lJ107XG5cbmZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4pIHtcbiAgLy8gU2FkbHkgdGhpcyBpcyBub3QgY2FjaGVhYmxlIGFzIHNvbWUgbGlicmFyaWVzIGJ1bmRsZSB0aGVpciBvd25cbiAgLy8gZXZlbnQgZW1pdHRlciBpbXBsZW1lbnRhdGlvbiB3aXRoIHRoZW0uXG4gIGlmICh0eXBlb2YgZW1pdHRlci5wcmVwZW5kTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHJldHVybiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lcihldmVudCwgZm4pO1xuXG4gIC8vIFRoaXMgaXMgYSBoYWNrIHRvIG1ha2Ugc3VyZSB0aGF0IG91ciBlcnJvciBoYW5kbGVyIGlzIGF0dGFjaGVkIGJlZm9yZSBhbnlcbiAgLy8gdXNlcmxhbmQgb25lcy4gIE5FVkVSIERPIFRISVMuIFRoaXMgaXMgaGVyZSBvbmx5IGJlY2F1c2UgdGhpcyBjb2RlIG5lZWRzXG4gIC8vIHRvIGNvbnRpbnVlIHRvIHdvcmsgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiBOb2RlLmpzIHRoYXQgZG8gbm90IGluY2x1ZGVcbiAgLy8gdGhlIHByZXBlbmRMaXN0ZW5lcigpIG1ldGhvZC4gVGhlIGdvYWwgaXMgdG8gZXZlbnR1YWxseSByZW1vdmUgdGhpcyBoYWNrLlxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW2V2ZW50XSkgZW1pdHRlci5vbihldmVudCwgZm4pO2Vsc2UgaWYgKGlzQXJyYXkoZW1pdHRlci5fZXZlbnRzW2V2ZW50XSkpIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0udW5zaGlmdChmbik7ZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZlbnRdID0gW2ZuLCBlbWl0dGVyLl9ldmVudHNbZXZlbnRdXTtcbn1cblxuZnVuY3Rpb24gUmVhZGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0pIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBEdXBsZXggc3RyZWFtcyBhcmUgYm90aCByZWFkYWJsZSBhbmQgd3JpdGFibGUsIGJ1dCBzaGFyZVxuICAvLyB0aGUgc2FtZSBvcHRpb25zIG9iamVjdC5cbiAgLy8gSG93ZXZlciwgc29tZSBjYXNlcyByZXF1aXJlIHNldHRpbmcgb3B0aW9ucyB0byBkaWZmZXJlbnRcbiAgLy8gdmFsdWVzIGZvciB0aGUgcmVhZGFibGUgYW5kIHRoZSB3cml0YWJsZSBzaWRlcyBvZiB0aGUgZHVwbGV4IHN0cmVhbS5cbiAgLy8gVGhlc2Ugb3B0aW9ucyBjYW4gYmUgcHJvdmlkZWQgc2VwYXJhdGVseSBhcyByZWFkYWJsZVhYWCBhbmQgd3JpdGFibGVYWFguXG4gIHZhciBpc0R1cGxleCA9IHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleDtcblxuICAvLyBvYmplY3Qgc3RyZWFtIGZsYWcuIFVzZWQgdG8gbWFrZSByZWFkKG4pIGlnbm9yZSBuIGFuZCB0b1xuICAvLyBtYWtlIGFsbCB0aGUgYnVmZmVyIG1lcmdpbmcgYW5kIGxlbmd0aCBjaGVja3MgZ28gYXdheVxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcblxuICBpZiAoaXNEdXBsZXgpIHRoaXMub2JqZWN0TW9kZSA9IHRoaXMub2JqZWN0TW9kZSB8fCAhIW9wdGlvbnMucmVhZGFibGVPYmplY3RNb2RlO1xuXG4gIC8vIHRoZSBwb2ludCBhdCB3aGljaCBpdCBzdG9wcyBjYWxsaW5nIF9yZWFkKCkgdG8gZmlsbCB0aGUgYnVmZmVyXG4gIC8vIE5vdGU6IDAgaXMgYSB2YWxpZCB2YWx1ZSwgbWVhbnMgXCJkb24ndCBjYWxsIF9yZWFkIHByZWVtcHRpdmVseSBldmVyXCJcbiAgdmFyIGh3bSA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgdmFyIHJlYWRhYmxlSHdtID0gb3B0aW9ucy5yZWFkYWJsZUhpZ2hXYXRlck1hcms7XG4gIHZhciBkZWZhdWx0SHdtID0gdGhpcy5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG5cbiAgaWYgKGh3bSB8fCBod20gPT09IDApIHRoaXMuaGlnaFdhdGVyTWFyayA9IGh3bTtlbHNlIGlmIChpc0R1cGxleCAmJiAocmVhZGFibGVId20gfHwgcmVhZGFibGVId20gPT09IDApKSB0aGlzLmhpZ2hXYXRlck1hcmsgPSByZWFkYWJsZUh3bTtlbHNlIHRoaXMuaGlnaFdhdGVyTWFyayA9IGRlZmF1bHRId207XG5cbiAgLy8gY2FzdCB0byBpbnRzLlxuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBNYXRoLmZsb29yKHRoaXMuaGlnaFdhdGVyTWFyayk7XG5cbiAgLy8gQSBsaW5rZWQgbGlzdCBpcyB1c2VkIHRvIHN0b3JlIGRhdGEgY2h1bmtzIGluc3RlYWQgb2YgYW4gYXJyYXkgYmVjYXVzZSB0aGVcbiAgLy8gbGlua2VkIGxpc3QgY2FuIHJlbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBiZWdpbm5pbmcgZmFzdGVyIHRoYW5cbiAgLy8gYXJyYXkuc2hpZnQoKVxuICB0aGlzLmJ1ZmZlciA9IG5ldyBCdWZmZXJMaXN0KCk7XG4gIHRoaXMubGVuZ3RoID0gMDtcbiAgdGhpcy5waXBlcyA9IG51bGw7XG4gIHRoaXMucGlwZXNDb3VudCA9IDA7XG4gIHRoaXMuZmxvd2luZyA9IG51bGw7XG4gIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgdGhpcy5lbmRFbWl0dGVkID0gZmFsc2U7XG4gIHRoaXMucmVhZGluZyA9IGZhbHNlO1xuXG4gIC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIGV2ZW50ICdyZWFkYWJsZScvJ2RhdGEnIGlzIGVtaXR0ZWRcbiAgLy8gaW1tZWRpYXRlbHksIG9yIG9uIGEgbGF0ZXIgdGljay4gIFdlIHNldCB0aGlzIHRvIHRydWUgYXQgZmlyc3QsIGJlY2F1c2VcbiAgLy8gYW55IGFjdGlvbnMgdGhhdCBzaG91bGRuJ3QgaGFwcGVuIHVudGlsIFwibGF0ZXJcIiBzaG91bGQgZ2VuZXJhbGx5IGFsc29cbiAgLy8gbm90IGhhcHBlbiBiZWZvcmUgdGhlIGZpcnN0IHJlYWQgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyB3aGVuZXZlciB3ZSByZXR1cm4gbnVsbCwgdGhlbiB3ZSBzZXQgYSBmbGFnIHRvIHNheVxuICAvLyB0aGF0IHdlJ3JlIGF3YWl0aW5nIGEgJ3JlYWRhYmxlJyBldmVudCBlbWlzc2lvbi5cbiAgdGhpcy5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZUxpc3RlbmluZyA9IGZhbHNlO1xuICB0aGlzLnJlc3VtZVNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gIC8vIGhhcyBpdCBiZWVuIGRlc3Ryb3llZFxuICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIHRoZSBudW1iZXIgb2Ygd3JpdGVycyB0aGF0IGFyZSBhd2FpdGluZyBhIGRyYWluIGV2ZW50IGluIC5waXBlKClzXG4gIHRoaXMuYXdhaXREcmFpbiA9IDA7XG5cbiAgLy8gaWYgdHJ1ZSwgYSBtYXliZVJlYWRNb3JlIGhhcyBiZWVuIHNjaGVkdWxlZFxuICB0aGlzLnJlYWRpbmdNb3JlID0gZmFsc2U7XG5cbiAgdGhpcy5kZWNvZGVyID0gbnVsbDtcbiAgdGhpcy5lbmNvZGluZyA9IG51bGw7XG4gIGlmIChvcHRpb25zLmVuY29kaW5nKSB7XG4gICAgaWYgKCFTdHJpbmdEZWNvZGVyKSBTdHJpbmdEZWNvZGVyID0gcmVxdWlyZSgnc3RyaW5nX2RlY29kZXIvJykuU3RyaW5nRGVjb2RlcjtcbiAgICB0aGlzLmRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihvcHRpb25zLmVuY29kaW5nKTtcbiAgICB0aGlzLmVuY29kaW5nID0gb3B0aW9ucy5lbmNvZGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBSZWFkYWJsZShvcHRpb25zKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlYWRhYmxlKSkgcmV0dXJuIG5ldyBSZWFkYWJsZShvcHRpb25zKTtcblxuICB0aGlzLl9yZWFkYWJsZVN0YXRlID0gbmV3IFJlYWRhYmxlU3RhdGUob3B0aW9ucywgdGhpcyk7XG5cbiAgLy8gbGVnYWN5XG4gIHRoaXMucmVhZGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnJlYWQgPT09ICdmdW5jdGlvbicpIHRoaXMuX3JlYWQgPSBvcHRpb25zLnJlYWQ7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZGVzdHJveSA9IG9wdGlvbnMuZGVzdHJveTtcbiAgfVxuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGUucHJvdG90eXBlLCAnZGVzdHJveWVkJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyB3ZSBpZ25vcmUgdGhlIHZhbHVlIGlmIHRoZSBzdHJlYW1cbiAgICAvLyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYgKCF0aGlzLl9yZWFkYWJsZVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhlIHVzZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIG1hbmFnaW5nIGRlc3Ryb3llZFxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gIH1cbn0pO1xuXG5SZWFkYWJsZS5wcm90b3R5cGUuZGVzdHJveSA9IGRlc3Ryb3lJbXBsLmRlc3Ryb3k7XG5SZWFkYWJsZS5wcm90b3R5cGUuX3VuZGVzdHJveSA9IGRlc3Ryb3lJbXBsLnVuZGVzdHJveTtcblJlYWRhYmxlLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIHRoaXMucHVzaChudWxsKTtcbiAgY2IoZXJyKTtcbn07XG5cbi8vIE1hbnVhbGx5IHNob3ZlIHNvbWV0aGluZyBpbnRvIHRoZSByZWFkKCkgYnVmZmVyLlxuLy8gVGhpcyByZXR1cm5zIHRydWUgaWYgdGhlIGhpZ2hXYXRlck1hcmsgaGFzIG5vdCBiZWVuIGhpdCB5ZXQsXG4vLyBzaW1pbGFyIHRvIGhvdyBXcml0YWJsZS53cml0ZSgpIHJldHVybnMgdHJ1ZSBpZiB5b3Ugc2hvdWxkXG4vLyB3cml0ZSgpIHNvbWUgbW9yZS5cblJlYWRhYmxlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZykge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgc2tpcENodW5rQ2hlY2s7XG5cbiAgaWYgKCFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5jb2RpbmcgfHwgc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuICAgICAgaWYgKGVuY29kaW5nICE9PSBzdGF0ZS5lbmNvZGluZykge1xuICAgICAgICBjaHVuayA9IEJ1ZmZlci5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gICAgICAgIGVuY29kaW5nID0gJyc7XG4gICAgICB9XG4gICAgICBza2lwQ2h1bmtDaGVjayA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNraXBDaHVua0NoZWNrID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIGNodW5rLCBlbmNvZGluZywgZmFsc2UsIHNraXBDaHVua0NoZWNrKTtcbn07XG5cbi8vIFVuc2hpZnQgc2hvdWxkICphbHdheXMqIGJlIHNvbWV0aGluZyBkaXJlY3RseSBvdXQgb2YgcmVhZCgpXG5SZWFkYWJsZS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICByZXR1cm4gcmVhZGFibGVBZGRDaHVuayh0aGlzLCBjaHVuaywgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xufTtcblxuZnVuY3Rpb24gcmVhZGFibGVBZGRDaHVuayhzdHJlYW0sIGNodW5rLCBlbmNvZGluZywgYWRkVG9Gcm9udCwgc2tpcENodW5rQ2hlY2spIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBpZiAoY2h1bmsgPT09IG51bGwpIHtcbiAgICBzdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgb25Fb2ZDaHVuayhzdHJlYW0sIHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKCFza2lwQ2h1bmtDaGVjaykgZXIgPSBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKTtcbiAgICBpZiAoZXIpIHtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLm9iamVjdE1vZGUgfHwgY2h1bmsgJiYgY2h1bmsubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgIXN0YXRlLm9iamVjdE1vZGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGNodW5rKSAhPT0gQnVmZmVyLnByb3RvdHlwZSkge1xuICAgICAgICBjaHVuayA9IF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWRkVG9Gcm9udCkge1xuICAgICAgICBpZiAoc3RhdGUuZW5kRW1pdHRlZCkgc3RyZWFtLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdzdHJlYW0udW5zaGlmdCgpIGFmdGVyIGVuZCBldmVudCcpKTtlbHNlIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZW5kZWQpIHtcbiAgICAgICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdzdHJlYW0ucHVzaCgpIGFmdGVyIEVPRicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIWVuY29kaW5nKSB7XG4gICAgICAgICAgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcbiAgICAgICAgICBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuay5sZW5ndGggIT09IDApIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBmYWxzZSk7ZWxzZSBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFhZGRUb0Zyb250KSB7XG4gICAgICBzdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5lZWRNb3JlRGF0YShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBhZGRUb0Zyb250KSB7XG4gIGlmIChzdGF0ZS5mbG93aW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiAhc3RhdGUuc3luYykge1xuICAgIHN0cmVhbS5lbWl0KCdkYXRhJywgY2h1bmspO1xuICAgIHN0cmVhbS5yZWFkKDApO1xuICB9IGVsc2Uge1xuICAgIC8vIHVwZGF0ZSB0aGUgYnVmZmVyIGluZm8uXG4gICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIGlmIChhZGRUb0Zyb250KSBzdGF0ZS5idWZmZXIudW5zaGlmdChjaHVuayk7ZWxzZSBzdGF0ZS5idWZmZXIucHVzaChjaHVuayk7XG5cbiAgICBpZiAoc3RhdGUubmVlZFJlYWRhYmxlKSBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbiAgfVxuICBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKSB7XG4gIHZhciBlcjtcbiAgaWYgKCFfaXNVaW50OEFycmF5KGNodW5rKSAmJiB0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmIGNodW5rICE9PSB1bmRlZmluZWQgJiYgIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbm9uLXN0cmluZy9idWZmZXIgY2h1bmsnKTtcbiAgfVxuICByZXR1cm4gZXI7XG59XG5cbi8vIGlmIGl0J3MgcGFzdCB0aGUgaGlnaCB3YXRlciBtYXJrLCB3ZSBjYW4gcHVzaCBpbiBzb21lIG1vcmUuXG4vLyBBbHNvLCBpZiB3ZSBoYXZlIG5vIGRhdGEgeWV0LCB3ZSBjYW4gc3RhbmQgc29tZVxuLy8gbW9yZSBieXRlcy4gIFRoaXMgaXMgdG8gd29yayBhcm91bmQgY2FzZXMgd2hlcmUgaHdtPTAsXG4vLyBzdWNoIGFzIHRoZSByZXBsLiAgQWxzbywgaWYgdGhlIHB1c2goKSB0cmlnZ2VyZWQgYVxuLy8gcmVhZGFibGUgZXZlbnQsIGFuZCB0aGUgdXNlciBjYWxsZWQgcmVhZChsYXJnZU51bWJlcikgc3VjaCB0aGF0XG4vLyBuZWVkUmVhZGFibGUgd2FzIHNldCwgdGhlbiB3ZSBvdWdodCB0byBwdXNoIG1vcmUsIHNvIHRoYXQgYW5vdGhlclxuLy8gJ3JlYWRhYmxlJyBldmVudCB3aWxsIGJlIHRyaWdnZXJlZC5cbmZ1bmN0aW9uIG5lZWRNb3JlRGF0YShzdGF0ZSkge1xuICByZXR1cm4gIXN0YXRlLmVuZGVkICYmIChzdGF0ZS5uZWVkUmVhZGFibGUgfHwgc3RhdGUubGVuZ3RoIDwgc3RhdGUuaGlnaFdhdGVyTWFyayB8fCBzdGF0ZS5sZW5ndGggPT09IDApO1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUuaXNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgPT09IGZhbHNlO1xufTtcblxuLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5SZWFkYWJsZS5wcm90b3R5cGUuc2V0RW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jKSB7XG4gIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKGVuYyk7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5jb2RpbmcgPSBlbmM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gRG9uJ3QgcmFpc2UgdGhlIGh3bSA+IDhNQlxudmFyIE1BWF9IV00gPSAweDgwMDAwMDtcbmZ1bmN0aW9uIGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pIHtcbiAgaWYgKG4gPj0gTUFYX0hXTSkge1xuICAgIG4gPSBNQVhfSFdNO1xuICB9IGVsc2Uge1xuICAgIC8vIEdldCB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyIG9mIDIgdG8gcHJldmVudCBpbmNyZWFzaW5nIGh3bSBleGNlc3NpdmVseSBpblxuICAgIC8vIHRpbnkgYW1vdW50c1xuICAgIG4tLTtcbiAgICBuIHw9IG4gPj4+IDE7XG4gICAgbiB8PSBuID4+PiAyO1xuICAgIG4gfD0gbiA+Pj4gNDtcbiAgICBuIHw9IG4gPj4+IDg7XG4gICAgbiB8PSBuID4+PiAxNjtcbiAgICBuKys7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gaG93TXVjaFRvUmVhZChuLCBzdGF0ZSkge1xuICBpZiAobiA8PSAwIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkgcmV0dXJuIDA7XG4gIGlmIChzdGF0ZS5vYmplY3RNb2RlKSByZXR1cm4gMTtcbiAgaWYgKG4gIT09IG4pIHtcbiAgICAvLyBPbmx5IGZsb3cgb25lIGJ1ZmZlciBhdCBhIHRpbWVcbiAgICBpZiAoc3RhdGUuZmxvd2luZyAmJiBzdGF0ZS5sZW5ndGgpIHJldHVybiBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhLmxlbmd0aDtlbHNlIHJldHVybiBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgLy8gSWYgd2UncmUgYXNraW5nIGZvciBtb3JlIHRoYW4gdGhlIGN1cnJlbnQgaHdtLCB0aGVuIHJhaXNlIHRoZSBod20uXG4gIGlmIChuID4gc3RhdGUuaGlnaFdhdGVyTWFyaykgc3RhdGUuaGlnaFdhdGVyTWFyayA9IGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pO1xuICBpZiAobiA8PSBzdGF0ZS5sZW5ndGgpIHJldHVybiBuO1xuICAvLyBEb24ndCBoYXZlIGVub3VnaFxuICBpZiAoIXN0YXRlLmVuZGVkKSB7XG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gc3RhdGUubGVuZ3RoO1xufVxuXG4vLyB5b3UgY2FuIG92ZXJyaWRlIGVpdGhlciB0aGlzIG1ldGhvZCwgb3IgdGhlIGFzeW5jIF9yZWFkKG4pIGJlbG93LlxuUmVhZGFibGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAobikge1xuICBkZWJ1ZygncmVhZCcsIG4pO1xuICBuID0gcGFyc2VJbnQobiwgMTApO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgbk9yaWcgPSBuO1xuXG4gIGlmIChuICE9PSAwKSBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcblxuICAvLyBpZiB3ZSdyZSBkb2luZyByZWFkKDApIHRvIHRyaWdnZXIgYSByZWFkYWJsZSBldmVudCwgYnV0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhIGJ1bmNoIG9mIGRhdGEgaW4gdGhlIGJ1ZmZlciwgdGhlbiBqdXN0IHRyaWdnZXJcbiAgLy8gdGhlICdyZWFkYWJsZScgZXZlbnQgYW5kIG1vdmUgb24uXG4gIGlmIChuID09PSAwICYmIHN0YXRlLm5lZWRSZWFkYWJsZSAmJiAoc3RhdGUubGVuZ3RoID49IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUuZW5kZWQpKSB7XG4gICAgZGVidWcoJ3JlYWQ6IGVtaXRSZWFkYWJsZScsIHN0YXRlLmxlbmd0aCwgc3RhdGUuZW5kZWQpO1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO2Vsc2UgZW1pdFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbiA9IGhvd011Y2hUb1JlYWQobiwgc3RhdGUpO1xuXG4gIC8vIGlmIHdlJ3ZlIGVuZGVkLCBhbmQgd2UncmUgbm93IGNsZWFyLCB0aGVuIGZpbmlzaCBpdCB1cC5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUuZW5kZWQpIHtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEFsbCB0aGUgYWN0dWFsIGNodW5rIGdlbmVyYXRpb24gbG9naWMgbmVlZHMgdG8gYmVcbiAgLy8gKmJlbG93KiB0aGUgY2FsbCB0byBfcmVhZC4gIFRoZSByZWFzb24gaXMgdGhhdCBpbiBjZXJ0YWluXG4gIC8vIHN5bnRoZXRpYyBzdHJlYW0gY2FzZXMsIHN1Y2ggYXMgcGFzc3Rocm91Z2ggc3RyZWFtcywgX3JlYWRcbiAgLy8gbWF5IGJlIGEgY29tcGxldGVseSBzeW5jaHJvbm91cyBvcGVyYXRpb24gd2hpY2ggbWF5IGNoYW5nZVxuICAvLyB0aGUgc3RhdGUgb2YgdGhlIHJlYWQgYnVmZmVyLCBwcm92aWRpbmcgZW5vdWdoIGRhdGEgd2hlblxuICAvLyBiZWZvcmUgdGhlcmUgd2FzICpub3QqIGVub3VnaC5cbiAgLy9cbiAgLy8gU28sIHRoZSBzdGVwcyBhcmU6XG4gIC8vIDEuIEZpZ3VyZSBvdXQgd2hhdCB0aGUgc3RhdGUgb2YgdGhpbmdzIHdpbGwgYmUgYWZ0ZXIgd2UgZG9cbiAgLy8gYSByZWFkIGZyb20gdGhlIGJ1ZmZlci5cbiAgLy9cbiAgLy8gMi4gSWYgdGhhdCByZXN1bHRpbmcgc3RhdGUgd2lsbCB0cmlnZ2VyIGEgX3JlYWQsIHRoZW4gY2FsbCBfcmVhZC5cbiAgLy8gTm90ZSB0aGF0IHRoaXMgbWF5IGJlIGFzeW5jaHJvbm91cywgb3Igc3luY2hyb25vdXMuICBZZXMsIGl0IGlzXG4gIC8vIGRlZXBseSB1Z2x5IHRvIHdyaXRlIEFQSXMgdGhpcyB3YXksIGJ1dCB0aGF0IHN0aWxsIGRvZXNuJ3QgbWVhblxuICAvLyB0aGF0IHRoZSBSZWFkYWJsZSBjbGFzcyBzaG91bGQgYmVoYXZlIGltcHJvcGVybHksIGFzIHN0cmVhbXMgYXJlXG4gIC8vIGRlc2lnbmVkIHRvIGJlIHN5bmMvYXN5bmMgYWdub3N0aWMuXG4gIC8vIFRha2Ugbm90ZSBpZiB0aGUgX3JlYWQgY2FsbCBpcyBzeW5jIG9yIGFzeW5jIChpZSwgaWYgdGhlIHJlYWQgY2FsbFxuICAvLyBoYXMgcmV0dXJuZWQgeWV0KSwgc28gdGhhdCB3ZSBrbm93IHdoZXRoZXIgb3Igbm90IGl0J3Mgc2FmZSB0byBlbWl0XG4gIC8vICdyZWFkYWJsZScgZXRjLlxuICAvL1xuICAvLyAzLiBBY3R1YWxseSBwdWxsIHRoZSByZXF1ZXN0ZWQgY2h1bmtzIG91dCBvZiB0aGUgYnVmZmVyIGFuZCByZXR1cm4uXG5cbiAgLy8gaWYgd2UgbmVlZCBhIHJlYWRhYmxlIGV2ZW50LCB0aGVuIHdlIG5lZWQgdG8gZG8gc29tZSByZWFkaW5nLlxuICB2YXIgZG9SZWFkID0gc3RhdGUubmVlZFJlYWRhYmxlO1xuICBkZWJ1ZygnbmVlZCByZWFkYWJsZScsIGRvUmVhZCk7XG5cbiAgLy8gaWYgd2UgY3VycmVudGx5IGhhdmUgbGVzcyB0aGFuIHRoZSBoaWdoV2F0ZXJNYXJrLCB0aGVuIGFsc28gcmVhZCBzb21lXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgfHwgc3RhdGUubGVuZ3RoIC0gbiA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkb1JlYWQgPSB0cnVlO1xuICAgIGRlYnVnKCdsZW5ndGggbGVzcyB0aGFuIHdhdGVybWFyaycsIGRvUmVhZCk7XG4gIH1cblxuICAvLyBob3dldmVyLCBpZiB3ZSd2ZSBlbmRlZCwgdGhlbiB0aGVyZSdzIG5vIHBvaW50LCBhbmQgaWYgd2UncmUgYWxyZWFkeVxuICAvLyByZWFkaW5nLCB0aGVuIGl0J3MgdW5uZWNlc3NhcnkuXG4gIGlmIChzdGF0ZS5lbmRlZCB8fCBzdGF0ZS5yZWFkaW5nKSB7XG4gICAgZG9SZWFkID0gZmFsc2U7XG4gICAgZGVidWcoJ3JlYWRpbmcgb3IgZW5kZWQnLCBkb1JlYWQpO1xuICB9IGVsc2UgaWYgKGRvUmVhZCkge1xuICAgIGRlYnVnKCdkbyByZWFkJyk7XG4gICAgc3RhdGUucmVhZGluZyA9IHRydWU7XG4gICAgc3RhdGUuc3luYyA9IHRydWU7XG4gICAgLy8gaWYgdGhlIGxlbmd0aCBpcyBjdXJyZW50bHkgemVybywgdGhlbiB3ZSAqbmVlZCogYSByZWFkYWJsZSBldmVudC5cbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIC8vIGNhbGwgaW50ZXJuYWwgcmVhZCBtZXRob2RcbiAgICB0aGlzLl9yZWFkKHN0YXRlLmhpZ2hXYXRlck1hcmspO1xuICAgIHN0YXRlLnN5bmMgPSBmYWxzZTtcbiAgICAvLyBJZiBfcmVhZCBwdXNoZWQgZGF0YSBzeW5jaHJvbm91c2x5LCB0aGVuIGByZWFkaW5nYCB3aWxsIGJlIGZhbHNlLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHJlLWV2YWx1YXRlIGhvdyBtdWNoIGRhdGEgd2UgY2FuIHJldHVybiB0byB0aGUgdXNlci5cbiAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIG4gPSBob3dNdWNoVG9SZWFkKG5PcmlnLCBzdGF0ZSk7XG4gIH1cblxuICB2YXIgcmV0O1xuICBpZiAobiA+IDApIHJldCA9IGZyb21MaXN0KG4sIHN0YXRlKTtlbHNlIHJldCA9IG51bGw7XG5cbiAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgbiA9IDA7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGVuZ3RoIC09IG47XG4gIH1cblxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3RoaW5nIGluIHRoZSBidWZmZXIsIHRoZW4gd2Ugd2FudCB0byBrbm93XG4gICAgLy8gYXMgc29vbiBhcyB3ZSAqZG8qIGdldCBzb21ldGhpbmcgaW50byB0aGUgYnVmZmVyLlxuICAgIGlmICghc3RhdGUuZW5kZWQpIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG5cbiAgICAvLyBJZiB3ZSB0cmllZCB0byByZWFkKCkgcGFzdCB0aGUgRU9GLCB0aGVuIGVtaXQgZW5kIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgaWYgKG5PcmlnICE9PSBuICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgfVxuXG4gIGlmIChyZXQgIT09IG51bGwpIHRoaXMuZW1pdCgnZGF0YScsIHJldCk7XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoc3RhdGUuZW5kZWQpIHJldHVybjtcbiAgaWYgKHN0YXRlLmRlY29kZXIpIHtcbiAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIHtcbiAgICAgIHN0YXRlLmJ1ZmZlci5wdXNoKGNodW5rKTtcbiAgICAgIHN0YXRlLmxlbmd0aCArPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuXG4gIC8vIGVtaXQgJ3JlYWRhYmxlJyBub3cgdG8gbWFrZSBzdXJlIGl0IGdldHMgcGlja2VkIHVwLlxuICBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbn1cblxuLy8gRG9uJ3QgZW1pdCByZWFkYWJsZSByaWdodCBhd2F5IGluIHN5bmMgbW9kZSwgYmVjYXVzZSB0aGlzIGNhbiB0cmlnZ2VyXG4vLyBhbm90aGVyIHJlYWQoKSBjYWxsID0+IHN0YWNrIG92ZXJmbG93LiAgVGhpcyB3YXksIGl0IG1pZ2h0IHRyaWdnZXJcbi8vIGEgbmV4dFRpY2sgcmVjdXJzaW9uIHdhcm5pbmcsIGJ1dCB0aGF0J3Mgbm90IHNvIGJhZC5cbmZ1bmN0aW9uIGVtaXRSZWFkYWJsZShzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBzdGF0ZS5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgaWYgKCFzdGF0ZS5lbWl0dGVkUmVhZGFibGUpIHtcbiAgICBkZWJ1ZygnZW1pdFJlYWRhYmxlJywgc3RhdGUuZmxvd2luZyk7XG4gICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICBpZiAoc3RhdGUuc3luYykgcG5hLm5leHRUaWNrKGVtaXRSZWFkYWJsZV8sIHN0cmVhbSk7ZWxzZSBlbWl0UmVhZGFibGVfKHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlXyhzdHJlYW0pIHtcbiAgZGVidWcoJ2VtaXQgcmVhZGFibGUnKTtcbiAgc3RyZWFtLmVtaXQoJ3JlYWRhYmxlJyk7XG4gIGZsb3coc3RyZWFtKTtcbn1cblxuLy8gYXQgdGhpcyBwb2ludCwgdGhlIHVzZXIgaGFzIHByZXN1bWFibHkgc2VlbiB0aGUgJ3JlYWRhYmxlJyBldmVudCxcbi8vIGFuZCBjYWxsZWQgcmVhZCgpIHRvIGNvbnN1bWUgc29tZSBkYXRhLiAgdGhhdCBtYXkgaGF2ZSB0cmlnZ2VyZWRcbi8vIGluIHR1cm4gYW5vdGhlciBfcmVhZChuKSBjYWxsLCBpbiB3aGljaCBjYXNlIHJlYWRpbmcgPSB0cnVlIGlmXG4vLyBpdCdzIGluIHByb2dyZXNzLlxuLy8gSG93ZXZlciwgaWYgd2UncmUgbm90IGVuZGVkLCBvciByZWFkaW5nLCBhbmQgdGhlIGxlbmd0aCA8IGh3bSxcbi8vIHRoZW4gZ28gYWhlYWQgYW5kIHRyeSB0byByZWFkIHNvbWUgbW9yZSBwcmVlbXB0aXZlbHkuXG5mdW5jdGlvbiBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5yZWFkaW5nTW9yZSkge1xuICAgIHN0YXRlLnJlYWRpbmdNb3JlID0gdHJ1ZTtcbiAgICBwbmEubmV4dFRpY2sobWF5YmVSZWFkTW9yZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmVfKHN0cmVhbSwgc3RhdGUpIHtcbiAgdmFyIGxlbiA9IHN0YXRlLmxlbmd0aDtcbiAgd2hpbGUgKCFzdGF0ZS5yZWFkaW5nICYmICFzdGF0ZS5mbG93aW5nICYmICFzdGF0ZS5lbmRlZCAmJiBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSB7XG4gICAgZGVidWcoJ21heWJlUmVhZE1vcmUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gICAgaWYgKGxlbiA9PT0gc3RhdGUubGVuZ3RoKVxuICAgICAgLy8gZGlkbid0IGdldCBhbnkgZGF0YSwgc3RvcCBzcGlubmluZy5cbiAgICAgIGJyZWFrO2Vsc2UgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB9XG4gIHN0YXRlLnJlYWRpbmdNb3JlID0gZmFsc2U7XG59XG5cbi8vIGFic3RyYWN0IG1ldGhvZC4gIHRvIGJlIG92ZXJyaWRkZW4gaW4gc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gY2xhc3Nlcy5cbi8vIGNhbGwgY2IoZXIsIGRhdGEpIHdoZXJlIGRhdGEgaXMgPD0gbiBpbiBsZW5ndGguXG4vLyBmb3IgdmlydHVhbCAobm9uLXN0cmluZywgbm9uLWJ1ZmZlcikgc3RyZWFtcywgXCJsZW5ndGhcIiBpcyBzb21ld2hhdFxuLy8gYXJiaXRyYXJ5LCBhbmQgcGVyaGFwcyBub3QgdmVyeSBtZWFuaW5nZnVsLlxuUmVhZGFibGUucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignX3JlYWQoKSBpcyBub3QgaW1wbGVtZW50ZWQnKSk7XG59O1xuXG5SZWFkYWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uIChkZXN0LCBwaXBlT3B0cykge1xuICB2YXIgc3JjID0gdGhpcztcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBzd2l0Y2ggKHN0YXRlLnBpcGVzQ291bnQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBzdGF0ZS5waXBlcyA9IGRlc3Q7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBzdGF0ZS5waXBlcyA9IFtzdGF0ZS5waXBlcywgZGVzdF07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUucGlwZXMucHVzaChkZXN0KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHN0YXRlLnBpcGVzQ291bnQgKz0gMTtcbiAgZGVidWcoJ3BpcGUgY291bnQ9JWQgb3B0cz0laicsIHN0YXRlLnBpcGVzQ291bnQsIHBpcGVPcHRzKTtcblxuICB2YXIgZG9FbmQgPSAoIXBpcGVPcHRzIHx8IHBpcGVPcHRzLmVuZCAhPT0gZmFsc2UpICYmIGRlc3QgIT09IHByb2Nlc3Muc3Rkb3V0ICYmIGRlc3QgIT09IHByb2Nlc3Muc3RkZXJyO1xuXG4gIHZhciBlbmRGbiA9IGRvRW5kID8gb25lbmQgOiB1bnBpcGU7XG4gIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBwbmEubmV4dFRpY2soZW5kRm4pO2Vsc2Ugc3JjLm9uY2UoJ2VuZCcsIGVuZEZuKTtcblxuICBkZXN0Lm9uKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gIGZ1bmN0aW9uIG9udW5waXBlKHJlYWRhYmxlLCB1bnBpcGVJbmZvKSB7XG4gICAgZGVidWcoJ29udW5waXBlJyk7XG4gICAgaWYgKHJlYWRhYmxlID09PSBzcmMpIHtcbiAgICAgIGlmICh1bnBpcGVJbmZvICYmIHVucGlwZUluZm8uaGFzVW5waXBlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdW5waXBlSW5mby5oYXNVbnBpcGVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZW5kKCkge1xuICAgIGRlYnVnKCdvbmVuZCcpO1xuICAgIGRlc3QuZW5kKCk7XG4gIH1cblxuICAvLyB3aGVuIHRoZSBkZXN0IGRyYWlucywgaXQgcmVkdWNlcyB0aGUgYXdhaXREcmFpbiBjb3VudGVyXG4gIC8vIG9uIHRoZSBzb3VyY2UuICBUaGlzIHdvdWxkIGJlIG1vcmUgZWxlZ2FudCB3aXRoIGEgLm9uY2UoKVxuICAvLyBoYW5kbGVyIGluIGZsb3coKSwgYnV0IGFkZGluZyBhbmQgcmVtb3ZpbmcgcmVwZWF0ZWRseSBpc1xuICAvLyB0b28gc2xvdy5cbiAgdmFyIG9uZHJhaW4gPSBwaXBlT25EcmFpbihzcmMpO1xuICBkZXN0Lm9uKCdkcmFpbicsIG9uZHJhaW4pO1xuXG4gIHZhciBjbGVhbmVkVXAgPSBmYWxzZTtcbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBkZWJ1ZygnY2xlYW51cCcpO1xuICAgIC8vIGNsZWFudXAgZXZlbnQgaGFuZGxlcnMgb25jZSB0aGUgcGlwZSBpcyBicm9rZW5cbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdkcmFpbicsIG9uZHJhaW4pO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcigndW5waXBlJywgb251bnBpcGUpO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZW5kJywgdW5waXBlKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBvbmRhdGEpO1xuXG4gICAgY2xlYW5lZFVwID0gdHJ1ZTtcblxuICAgIC8vIGlmIHRoZSByZWFkZXIgaXMgd2FpdGluZyBmb3IgYSBkcmFpbiBldmVudCBmcm9tIHRoaXNcbiAgICAvLyBzcGVjaWZpYyB3cml0ZXIsIHRoZW4gaXQgd291bGQgY2F1c2UgaXQgdG8gbmV2ZXIgc3RhcnRcbiAgICAvLyBmbG93aW5nIGFnYWluLlxuICAgIC8vIFNvLCBpZiB0aGlzIGlzIGF3YWl0aW5nIGEgZHJhaW4sIHRoZW4gd2UganVzdCBjYWxsIGl0IG5vdy5cbiAgICAvLyBJZiB3ZSBkb24ndCBrbm93LCB0aGVuIGFzc3VtZSB0aGF0IHdlIGFyZSB3YWl0aW5nIGZvciBvbmUuXG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gJiYgKCFkZXN0Ll93cml0YWJsZVN0YXRlIHx8IGRlc3QuX3dyaXRhYmxlU3RhdGUubmVlZERyYWluKSkgb25kcmFpbigpO1xuICB9XG5cbiAgLy8gSWYgdGhlIHVzZXIgcHVzaGVzIG1vcmUgZGF0YSB3aGlsZSB3ZSdyZSB3cml0aW5nIHRvIGRlc3QgdGhlbiB3ZSdsbCBlbmQgdXBcbiAgLy8gaW4gb25kYXRhIGFnYWluLiBIb3dldmVyLCB3ZSBvbmx5IHdhbnQgdG8gaW5jcmVhc2UgYXdhaXREcmFpbiBvbmNlIGJlY2F1c2VcbiAgLy8gZGVzdCB3aWxsIG9ubHkgZW1pdCBvbmUgJ2RyYWluJyBldmVudCBmb3IgdGhlIG11bHRpcGxlIHdyaXRlcy5cbiAgLy8gPT4gSW50cm9kdWNlIGEgZ3VhcmQgb24gaW5jcmVhc2luZyBhd2FpdERyYWluLlxuICB2YXIgaW5jcmVhc2VkQXdhaXREcmFpbiA9IGZhbHNlO1xuICBzcmMub24oJ2RhdGEnLCBvbmRhdGEpO1xuICBmdW5jdGlvbiBvbmRhdGEoY2h1bmspIHtcbiAgICBkZWJ1Zygnb25kYXRhJyk7XG4gICAgaW5jcmVhc2VkQXdhaXREcmFpbiA9IGZhbHNlO1xuICAgIHZhciByZXQgPSBkZXN0LndyaXRlKGNodW5rKTtcbiAgICBpZiAoZmFsc2UgPT09IHJldCAmJiAhaW5jcmVhc2VkQXdhaXREcmFpbikge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgdW5waXBlZCBkdXJpbmcgYGRlc3Qud3JpdGUoKWAsIGl0IGlzIHBvc3NpYmxlXG4gICAgICAvLyB0byBnZXQgc3R1Y2sgaW4gYSBwZXJtYW5lbnRseSBwYXVzZWQgc3RhdGUgaWYgdGhhdCB3cml0ZVxuICAgICAgLy8gYWxzbyByZXR1cm5lZCBmYWxzZS5cbiAgICAgIC8vID0+IENoZWNrIHdoZXRoZXIgYGRlc3RgIGlzIHN0aWxsIGEgcGlwaW5nIGRlc3RpbmF0aW9uLlxuICAgICAgaWYgKChzdGF0ZS5waXBlc0NvdW50ID09PSAxICYmIHN0YXRlLnBpcGVzID09PSBkZXN0IHx8IHN0YXRlLnBpcGVzQ291bnQgPiAxICYmIGluZGV4T2Yoc3RhdGUucGlwZXMsIGRlc3QpICE9PSAtMSkgJiYgIWNsZWFuZWRVcCkge1xuICAgICAgICBkZWJ1ZygnZmFsc2Ugd3JpdGUgcmVzcG9uc2UsIHBhdXNlJywgc3JjLl9yZWFkYWJsZVN0YXRlLmF3YWl0RHJhaW4pO1xuICAgICAgICBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbisrO1xuICAgICAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNyYy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBkZXN0IGhhcyBhbiBlcnJvciwgdGhlbiBzdG9wIHBpcGluZyBpbnRvIGl0LlxuICAvLyBob3dldmVyLCBkb24ndCBzdXBwcmVzcyB0aGUgdGhyb3dpbmcgYmVoYXZpb3IgZm9yIHRoaXMuXG4gIGZ1bmN0aW9uIG9uZXJyb3IoZXIpIHtcbiAgICBkZWJ1Zygnb25lcnJvcicsIGVyKTtcbiAgICB1bnBpcGUoKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGlmIChFRWxpc3RlbmVyQ291bnQoZGVzdCwgJ2Vycm9yJykgPT09IDApIGRlc3QuZW1pdCgnZXJyb3InLCBlcik7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgb3VyIGVycm9yIGhhbmRsZXIgaXMgYXR0YWNoZWQgYmVmb3JlIHVzZXJsYW5kIG9uZXMuXG4gIHByZXBlbmRMaXN0ZW5lcihkZXN0LCAnZXJyb3InLCBvbmVycm9yKTtcblxuICAvLyBCb3RoIGNsb3NlIGFuZCBmaW5pc2ggc2hvdWxkIHRyaWdnZXIgdW5waXBlLCBidXQgb25seSBvbmNlLlxuICBmdW5jdGlvbiBvbmNsb3NlKCkge1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2Nsb3NlJywgb25jbG9zZSk7XG4gIGZ1bmN0aW9uIG9uZmluaXNoKCkge1xuICAgIGRlYnVnKCdvbmZpbmlzaCcpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgdW5waXBlKCk7XG4gIH1cbiAgZGVzdC5vbmNlKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cbiAgZnVuY3Rpb24gdW5waXBlKCkge1xuICAgIGRlYnVnKCd1bnBpcGUnKTtcbiAgICBzcmMudW5waXBlKGRlc3QpO1xuICB9XG5cbiAgLy8gdGVsbCB0aGUgZGVzdCB0aGF0IGl0J3MgYmVpbmcgcGlwZWQgdG9cbiAgZGVzdC5lbWl0KCdwaXBlJywgc3JjKTtcblxuICAvLyBzdGFydCB0aGUgZmxvdyBpZiBpdCBoYXNuJ3QgYmVlbiBzdGFydGVkIGFscmVhZHkuXG4gIGlmICghc3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwaXBlIHJlc3VtZScpO1xuICAgIHNyYy5yZXN1bWUoKTtcbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZnVuY3Rpb24gcGlwZU9uRHJhaW4oc3JjKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gc3JjLl9yZWFkYWJsZVN0YXRlO1xuICAgIGRlYnVnKCdwaXBlT25EcmFpbicsIHN0YXRlLmF3YWl0RHJhaW4pO1xuICAgIGlmIChzdGF0ZS5hd2FpdERyYWluKSBzdGF0ZS5hd2FpdERyYWluLS07XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gPT09IDAgJiYgRUVsaXN0ZW5lckNvdW50KHNyYywgJ2RhdGEnKSkge1xuICAgICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgICBmbG93KHNyYyk7XG4gICAgfVxuICB9O1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUudW5waXBlID0gZnVuY3Rpb24gKGRlc3QpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHVucGlwZUluZm8gPSB7IGhhc1VucGlwZWQ6IGZhbHNlIH07XG5cbiAgLy8gaWYgd2UncmUgbm90IHBpcGluZyBhbnl3aGVyZSwgdGhlbiBkbyBub3RoaW5nLlxuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMCkgcmV0dXJuIHRoaXM7XG5cbiAgLy8ganVzdCBvbmUgZGVzdGluYXRpb24uICBtb3N0IGNvbW1vbiBjYXNlLlxuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMSkge1xuICAgIC8vIHBhc3NlZCBpbiBvbmUsIGJ1dCBpdCdzIG5vdCB0aGUgcmlnaHQgb25lLlxuICAgIGlmIChkZXN0ICYmIGRlc3QgIT09IHN0YXRlLnBpcGVzKSByZXR1cm4gdGhpcztcblxuICAgIGlmICghZGVzdCkgZGVzdCA9IHN0YXRlLnBpcGVzO1xuXG4gICAgLy8gZ290IGEgbWF0Y2guXG4gICAgc3RhdGUucGlwZXMgPSBudWxsO1xuICAgIHN0YXRlLnBpcGVzQ291bnQgPSAwO1xuICAgIHN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcbiAgICBpZiAoZGVzdCkgZGVzdC5lbWl0KCd1bnBpcGUnLCB0aGlzLCB1bnBpcGVJbmZvKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNsb3cgY2FzZS4gbXVsdGlwbGUgcGlwZSBkZXN0aW5hdGlvbnMuXG5cbiAgaWYgKCFkZXN0KSB7XG4gICAgLy8gcmVtb3ZlIGFsbC5cbiAgICB2YXIgZGVzdHMgPSBzdGF0ZS5waXBlcztcbiAgICB2YXIgbGVuID0gc3RhdGUucGlwZXNDb3VudDtcbiAgICBzdGF0ZS5waXBlcyA9IG51bGw7XG4gICAgc3RhdGUucGlwZXNDb3VudCA9IDA7XG4gICAgc3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZGVzdHNbaV0uZW1pdCgndW5waXBlJywgdGhpcywgdW5waXBlSW5mbyk7XG4gICAgfXJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdHJ5IHRvIGZpbmQgdGhlIHJpZ2h0IG9uZS5cbiAgdmFyIGluZGV4ID0gaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiB0aGlzO1xuXG4gIHN0YXRlLnBpcGVzLnNwbGljZShpbmRleCwgMSk7XG4gIHN0YXRlLnBpcGVzQ291bnQgLT0gMTtcbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDEpIHN0YXRlLnBpcGVzID0gc3RhdGUucGlwZXNbMF07XG5cbiAgZGVzdC5lbWl0KCd1bnBpcGUnLCB0aGlzLCB1bnBpcGVJbmZvKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHNldCB1cCBkYXRhIGV2ZW50cyBpZiB0aGV5IGFyZSBhc2tlZCBmb3Jcbi8vIEVuc3VyZSByZWFkYWJsZSBsaXN0ZW5lcnMgZXZlbnR1YWxseSBnZXQgc29tZXRoaW5nXG5SZWFkYWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXYsIGZuKSB7XG4gIHZhciByZXMgPSBTdHJlYW0ucHJvdG90eXBlLm9uLmNhbGwodGhpcywgZXYsIGZuKTtcblxuICBpZiAoZXYgPT09ICdkYXRhJykge1xuICAgIC8vIFN0YXJ0IGZsb3dpbmcgb24gbmV4dCB0aWNrIGlmIHN0cmVhbSBpc24ndCBleHBsaWNpdGx5IHBhdXNlZFxuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgIT09IGZhbHNlKSB0aGlzLnJlc3VtZSgpO1xuICB9IGVsc2UgaWYgKGV2ID09PSAncmVhZGFibGUnKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQgJiYgIXN0YXRlLnJlYWRhYmxlTGlzdGVuaW5nKSB7XG4gICAgICBzdGF0ZS5yZWFkYWJsZUxpc3RlbmluZyA9IHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgICAgIGlmICghc3RhdGUucmVhZGluZykge1xuICAgICAgICBwbmEubmV4dFRpY2soblJlYWRpbmdOZXh0VGljaywgdGhpcyk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxlbmd0aCkge1xuICAgICAgICBlbWl0UmVhZGFibGUodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5SZWFkYWJsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBSZWFkYWJsZS5wcm90b3R5cGUub247XG5cbmZ1bmN0aW9uIG5SZWFkaW5nTmV4dFRpY2soc2VsZikge1xuICBkZWJ1ZygncmVhZGFibGUgbmV4dHRpY2sgcmVhZCAwJyk7XG4gIHNlbGYucmVhZCgwKTtcbn1cblxuLy8gcGF1c2UoKSBhbmQgcmVzdW1lKCkgYXJlIHJlbW5hbnRzIG9mIHRoZSBsZWdhY3kgcmVhZGFibGUgc3RyZWFtIEFQSVxuLy8gSWYgdGhlIHVzZXIgdXNlcyB0aGVtLCB0aGVuIHN3aXRjaCBpbnRvIG9sZCBtb2RlLlxuUmVhZGFibGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3Jlc3VtZScpO1xuICAgIHN0YXRlLmZsb3dpbmcgPSB0cnVlO1xuICAgIHJlc3VtZSh0aGlzLCBzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiByZXN1bWUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlc3VtZVNjaGVkdWxlZCkge1xuICAgIHN0YXRlLnJlc3VtZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgcG5hLm5leHRUaWNrKHJlc3VtZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3VtZV8oc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lIHJlYWQgMCcpO1xuICAgIHN0cmVhbS5yZWFkKDApO1xuICB9XG5cbiAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gZmFsc2U7XG4gIHN0YXRlLmF3YWl0RHJhaW4gPSAwO1xuICBzdHJlYW0uZW1pdCgncmVzdW1lJyk7XG4gIGZsb3coc3RyZWFtKTtcbiAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLnJlYWRpbmcpIHN0cmVhbS5yZWFkKDApO1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdjYWxsIHBhdXNlIGZsb3dpbmc9JWonLCB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcpO1xuICBpZiAoZmFsc2UgIT09IHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwYXVzZScpO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncGF1c2UnKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIGZsb3coc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcbiAgZGVidWcoJ2Zsb3cnLCBzdGF0ZS5mbG93aW5nKTtcbiAgd2hpbGUgKHN0YXRlLmZsb3dpbmcgJiYgc3RyZWFtLnJlYWQoKSAhPT0gbnVsbCkge31cbn1cblxuLy8gd3JhcCBhbiBvbGQtc3R5bGUgc3RyZWFtIGFzIHRoZSBhc3luYyBkYXRhIHNvdXJjZS5cbi8vIFRoaXMgaXMgKm5vdCogcGFydCBvZiB0aGUgcmVhZGFibGUgc3RyZWFtIGludGVyZmFjZS5cbi8vIEl0IGlzIGFuIHVnbHkgdW5mb3J0dW5hdGUgbWVzcyBvZiBoaXN0b3J5LlxuUmVhZGFibGUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuXG4gIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIGRlYnVnKCd3cmFwcGVkIGVuZCcpO1xuICAgIGlmIChzdGF0ZS5kZWNvZGVyICYmICFzdGF0ZS5lbmRlZCkge1xuICAgICAgdmFyIGNodW5rID0gc3RhdGUuZGVjb2Rlci5lbmQoKTtcbiAgICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIF90aGlzLnB1c2goY2h1bmspO1xuICAgIH1cblxuICAgIF90aGlzLnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGRlYnVnKCd3cmFwcGVkIGRhdGEnKTtcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcblxuICAgIC8vIGRvbid0IHNraXAgb3ZlciBmYWxzeSB2YWx1ZXMgaW4gb2JqZWN0TW9kZVxuICAgIGlmIChzdGF0ZS5vYmplY3RNb2RlICYmIChjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuO2Vsc2UgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmICghY2h1bmsgfHwgIWNodW5rLmxlbmd0aCkpIHJldHVybjtcblxuICAgIHZhciByZXQgPSBfdGhpcy5wdXNoKGNodW5rKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5wYXVzZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcHJveHkgYWxsIHRoZSBvdGhlciBtZXRob2RzLlxuICAvLyBpbXBvcnRhbnQgd2hlbiB3cmFwcGluZyBmaWx0ZXJzIGFuZCBkdXBsZXhlcy5cbiAgZm9yICh2YXIgaSBpbiBzdHJlYW0pIHtcbiAgICBpZiAodGhpc1tpXSA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzdHJlYW1baV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbaV0gPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cmVhbVttZXRob2RdLmFwcGx5KHN0cmVhbSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0oaSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJveHkgY2VydGFpbiBpbXBvcnRhbnQgZXZlbnRzLlxuICBmb3IgKHZhciBuID0gMDsgbiA8IGtQcm94eUV2ZW50cy5sZW5ndGg7IG4rKykge1xuICAgIHN0cmVhbS5vbihrUHJveHlFdmVudHNbbl0sIHRoaXMuZW1pdC5iaW5kKHRoaXMsIGtQcm94eUV2ZW50c1tuXSkpO1xuICB9XG5cbiAgLy8gd2hlbiB3ZSB0cnkgdG8gY29uc3VtZSBzb21lIG1vcmUgYnl0ZXMsIHNpbXBseSB1bnBhdXNlIHRoZVxuICAvLyB1bmRlcmx5aW5nIHN0cmVhbS5cbiAgdGhpcy5fcmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgX3JlYWQnLCBuKTtcbiAgICBpZiAocGF1c2VkKSB7XG4gICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN0cmVhbS5yZXN1bWUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGUucHJvdG90eXBlLCAncmVhZGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcblxuLy8gZXhwb3NlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuUmVhZGFibGUuX2Zyb21MaXN0ID0gZnJvbUxpc3Q7XG5cbi8vIFBsdWNrIG9mZiBuIGJ5dGVzIGZyb20gYW4gYXJyYXkgb2YgYnVmZmVycy5cbi8vIExlbmd0aCBpcyB0aGUgY29tYmluZWQgbGVuZ3RocyBvZiBhbGwgdGhlIGJ1ZmZlcnMgaW4gdGhlIGxpc3QuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0KG4sIHN0YXRlKSB7XG4gIC8vIG5vdGhpbmcgYnVmZmVyZWRcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHJldDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldCA9IHN0YXRlLmJ1ZmZlci5zaGlmdCgpO2Vsc2UgaWYgKCFuIHx8IG4gPj0gc3RhdGUubGVuZ3RoKSB7XG4gICAgLy8gcmVhZCBpdCBhbGwsIHRydW5jYXRlIHRoZSBsaXN0XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIHJldCA9IHN0YXRlLmJ1ZmZlci5qb2luKCcnKTtlbHNlIGlmIChzdGF0ZS5idWZmZXIubGVuZ3RoID09PSAxKSByZXQgPSBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhO2Vsc2UgcmV0ID0gc3RhdGUuYnVmZmVyLmNvbmNhdChzdGF0ZS5sZW5ndGgpO1xuICAgIHN0YXRlLmJ1ZmZlci5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlYWQgcGFydCBvZiBsaXN0XG4gICAgcmV0ID0gZnJvbUxpc3RQYXJ0aWFsKG4sIHN0YXRlLmJ1ZmZlciwgc3RhdGUuZGVjb2Rlcik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBFeHRyYWN0cyBvbmx5IGVub3VnaCBidWZmZXJlZCBkYXRhIHRvIHNhdGlzZnkgdGhlIGFtb3VudCByZXF1ZXN0ZWQuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0UGFydGlhbChuLCBsaXN0LCBoYXNTdHJpbmdzKSB7XG4gIHZhciByZXQ7XG4gIGlmIChuIDwgbGlzdC5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gc2xpY2UgaXMgdGhlIHNhbWUgZm9yIGJ1ZmZlcnMgYW5kIHN0cmluZ3NcbiAgICByZXQgPSBsaXN0LmhlYWQuZGF0YS5zbGljZSgwLCBuKTtcbiAgICBsaXN0LmhlYWQuZGF0YSA9IGxpc3QuaGVhZC5kYXRhLnNsaWNlKG4pO1xuICB9IGVsc2UgaWYgKG4gPT09IGxpc3QuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgIC8vIGZpcnN0IGNodW5rIGlzIGEgcGVyZmVjdCBtYXRjaFxuICAgIHJldCA9IGxpc3Quc2hpZnQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZXN1bHQgc3BhbnMgbW9yZSB0aGFuIG9uZSBidWZmZXJcbiAgICByZXQgPSBoYXNTdHJpbmdzID8gY29weUZyb21CdWZmZXJTdHJpbmcobiwgbGlzdCkgOiBjb3B5RnJvbUJ1ZmZlcihuLCBsaXN0KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgbGlzdCBvZiBidWZmZXJlZCBkYXRhXG4vLyBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyU3RyaW5nKG4sIGxpc3QpIHtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgdmFyIHJldCA9IHAuZGF0YTtcbiAgbiAtPSByZXQubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBzdHIgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IHN0ci5sZW5ndGggPyBzdHIubGVuZ3RoIDogbjtcbiAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHJldCArPSBzdHI7ZWxzZSByZXQgKz0gc3RyLnNsaWNlKDAsIG4pO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBzdHIuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGJ5dGVzIGZyb20gdGhlIGxpc3Qgb2YgYnVmZmVyZWQgZGF0YSBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyKG4sIGxpc3QpIHtcbiAgdmFyIHJldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuKTtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgcC5kYXRhLmNvcHkocmV0KTtcbiAgbiAtPSBwLmRhdGEubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBidWYgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IGJ1Zi5sZW5ndGggPyBidWYubGVuZ3RoIDogbjtcbiAgICBidWYuY29weShyZXQsIHJldC5sZW5ndGggLSBuLCAwLCBuYik7XG4gICAgbiAtPSBuYjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgaWYgKG5iID09PSBidWYubGVuZ3RoKSB7XG4gICAgICAgICsrYztcbiAgICAgICAgaWYgKHAubmV4dCkgbGlzdC5oZWFkID0gcC5uZXh0O2Vsc2UgbGlzdC5oZWFkID0gbGlzdC50YWlsID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuaGVhZCA9IHA7XG4gICAgICAgIHAuZGF0YSA9IGJ1Zi5zbGljZShuYik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgKytjO1xuICB9XG4gIGxpc3QubGVuZ3RoIC09IGM7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGVuZFJlYWRhYmxlKHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG5cbiAgLy8gSWYgd2UgZ2V0IGhlcmUgYmVmb3JlIGNvbnN1bWluZyBhbGwgdGhlIGJ5dGVzLCB0aGVuIHRoYXQgaXMgYVxuICAvLyBidWcgaW4gbm9kZS4gIFNob3VsZCBuZXZlciBoYXBwZW4uXG4gIGlmIChzdGF0ZS5sZW5ndGggPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ1wiZW5kUmVhZGFibGUoKVwiIGNhbGxlZCBvbiBub24tZW1wdHkgc3RyZWFtJyk7XG5cbiAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICAgIHBuYS5uZXh0VGljayhlbmRSZWFkYWJsZU5ULCBzdGF0ZSwgc3RyZWFtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmRSZWFkYWJsZU5UKHN0YXRlLCBzdHJlYW0pIHtcbiAgLy8gQ2hlY2sgdGhhdCB3ZSBkaWRuJ3QgZ2V0IG9uZSBsYXN0IHVuc2hpZnQuXG4gIGlmICghc3RhdGUuZW5kRW1pdHRlZCAmJiBzdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBzdGF0ZS5lbmRFbWl0dGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0ucmVhZGFibGUgPSBmYWxzZTtcbiAgICBzdHJlYW0uZW1pdCgnZW5kJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZXhPZih4cywgeCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh4c1tpXSA9PT0geCkgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBhIHRyYW5zZm9ybSBzdHJlYW0gaXMgYSByZWFkYWJsZS93cml0YWJsZSBzdHJlYW0gd2hlcmUgeW91IGRvXG4vLyBzb21ldGhpbmcgd2l0aCB0aGUgZGF0YS4gIFNvbWV0aW1lcyBpdCdzIGNhbGxlZCBhIFwiZmlsdGVyXCIsXG4vLyBidXQgdGhhdCdzIG5vdCBhIGdyZWF0IG5hbWUgZm9yIGl0LCBzaW5jZSB0aGF0IGltcGxpZXMgYSB0aGluZyB3aGVyZVxuLy8gc29tZSBiaXRzIHBhc3MgdGhyb3VnaCwgYW5kIG90aGVycyBhcmUgc2ltcGx5IGlnbm9yZWQuICAoVGhhdCB3b3VsZFxuLy8gYmUgYSB2YWxpZCBleGFtcGxlIG9mIGEgdHJhbnNmb3JtLCBvZiBjb3Vyc2UuKVxuLy9cbi8vIFdoaWxlIHRoZSBvdXRwdXQgaXMgY2F1c2FsbHkgcmVsYXRlZCB0byB0aGUgaW5wdXQsIGl0J3Mgbm90IGFcbi8vIG5lY2Vzc2FyaWx5IHN5bW1ldHJpYyBvciBzeW5jaHJvbm91cyB0cmFuc2Zvcm1hdGlvbi4gIEZvciBleGFtcGxlLFxuLy8gYSB6bGliIHN0cmVhbSBtaWdodCB0YWtlIG11bHRpcGxlIHBsYWluLXRleHQgd3JpdGVzKCksIGFuZCB0aGVuXG4vLyBlbWl0IGEgc2luZ2xlIGNvbXByZXNzZWQgY2h1bmsgc29tZSB0aW1lIGluIHRoZSBmdXR1cmUuXG4vL1xuLy8gSGVyZSdzIGhvdyB0aGlzIHdvcmtzOlxuLy9cbi8vIFRoZSBUcmFuc2Zvcm0gc3RyZWFtIGhhcyBhbGwgdGhlIGFzcGVjdHMgb2YgdGhlIHJlYWRhYmxlIGFuZCB3cml0YWJsZVxuLy8gc3RyZWFtIGNsYXNzZXMuICBXaGVuIHlvdSB3cml0ZShjaHVuayksIHRoYXQgY2FsbHMgX3dyaXRlKGNodW5rLGNiKVxuLy8gaW50ZXJuYWxseSwgYW5kIHJldHVybnMgZmFsc2UgaWYgdGhlcmUncyBhIGxvdCBvZiBwZW5kaW5nIHdyaXRlc1xuLy8gYnVmZmVyZWQgdXAuICBXaGVuIHlvdSBjYWxsIHJlYWQoKSwgdGhhdCBjYWxscyBfcmVhZChuKSB1bnRpbFxuLy8gdGhlcmUncyBlbm91Z2ggcGVuZGluZyByZWFkYWJsZSBkYXRhIGJ1ZmZlcmVkIHVwLlxuLy9cbi8vIEluIGEgdHJhbnNmb3JtIHN0cmVhbSwgdGhlIHdyaXR0ZW4gZGF0YSBpcyBwbGFjZWQgaW4gYSBidWZmZXIuICBXaGVuXG4vLyBfcmVhZChuKSBpcyBjYWxsZWQsIGl0IHRyYW5zZm9ybXMgdGhlIHF1ZXVlZCB1cCBkYXRhLCBjYWxsaW5nIHRoZVxuLy8gYnVmZmVyZWQgX3dyaXRlIGNiJ3MgYXMgaXQgY29uc3VtZXMgY2h1bmtzLiAgSWYgY29uc3VtaW5nIGEgc2luZ2xlXG4vLyB3cml0dGVuIGNodW5rIHdvdWxkIHJlc3VsdCBpbiBtdWx0aXBsZSBvdXRwdXQgY2h1bmtzLCB0aGVuIHRoZSBmaXJzdFxuLy8gb3V0cHV0dGVkIGJpdCBjYWxscyB0aGUgcmVhZGNiLCBhbmQgc3Vic2VxdWVudCBjaHVua3MganVzdCBnbyBpbnRvXG4vLyB0aGUgcmVhZCBidWZmZXIsIGFuZCB3aWxsIGNhdXNlIGl0IHRvIGVtaXQgJ3JlYWRhYmxlJyBpZiBuZWNlc3NhcnkuXG4vL1xuLy8gVGhpcyB3YXksIGJhY2stcHJlc3N1cmUgaXMgYWN0dWFsbHkgZGV0ZXJtaW5lZCBieSB0aGUgcmVhZGluZyBzaWRlLFxuLy8gc2luY2UgX3JlYWQgaGFzIHRvIGJlIGNhbGxlZCB0byBzdGFydCBwcm9jZXNzaW5nIGEgbmV3IGNodW5rLiAgSG93ZXZlcixcbi8vIGEgcGF0aG9sb2dpY2FsIGluZmxhdGUgdHlwZSBvZiB0cmFuc2Zvcm0gY2FuIGNhdXNlIGV4Y2Vzc2l2ZSBidWZmZXJpbmdcbi8vIGhlcmUuICBGb3IgZXhhbXBsZSwgaW1hZ2luZSBhIHN0cmVhbSB3aGVyZSBldmVyeSBieXRlIG9mIGlucHV0IGlzXG4vLyBpbnRlcnByZXRlZCBhcyBhbiBpbnRlZ2VyIGZyb20gMC0yNTUsIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhhdCBtYW55XG4vLyBieXRlcyBvZiBvdXRwdXQuICBXcml0aW5nIHRoZSA0IGJ5dGVzIHtmZixmZixmZixmZn0gd291bGQgcmVzdWx0IGluXG4vLyAxa2Igb2YgZGF0YSBiZWluZyBvdXRwdXQuICBJbiB0aGlzIGNhc2UsIHlvdSBjb3VsZCB3cml0ZSBhIHZlcnkgc21hbGxcbi8vIGFtb3VudCBvZiBpbnB1dCwgYW5kIGVuZCB1cCB3aXRoIGEgdmVyeSBsYXJnZSBhbW91bnQgb2Ygb3V0cHV0LiAgSW5cbi8vIHN1Y2ggYSBwYXRob2xvZ2ljYWwgaW5mbGF0aW5nIG1lY2hhbmlzbSwgdGhlcmUnZCBiZSBubyB3YXkgdG8gdGVsbFxuLy8gdGhlIHN5c3RlbSB0byBzdG9wIGRvaW5nIHRoZSB0cmFuc2Zvcm0uICBBIHNpbmdsZSA0TUIgd3JpdGUgY291bGRcbi8vIGNhdXNlIHRoZSBzeXN0ZW0gdG8gcnVuIG91dCBvZiBtZW1vcnkuXG4vL1xuLy8gSG93ZXZlciwgZXZlbiBpbiBzdWNoIGEgcGF0aG9sb2dpY2FsIGNhc2UsIG9ubHkgYSBzaW5nbGUgd3JpdHRlbiBjaHVua1xuLy8gd291bGQgYmUgY29uc3VtZWQsIGFuZCB0aGVuIHRoZSByZXN0IHdvdWxkIHdhaXQgKHVuLXRyYW5zZm9ybWVkKSB1bnRpbFxuLy8gdGhlIHJlc3VsdHMgb2YgdGhlIHByZXZpb3VzIHRyYW5zZm9ybWVkIGNodW5rIHdlcmUgY29uc3VtZWQuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2Zvcm07XG5cbnZhciBEdXBsZXggPSByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IE9iamVjdC5jcmVhdGUocmVxdWlyZSgnY29yZS11dGlsLWlzJykpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudXRpbC5pbmhlcml0cyhUcmFuc2Zvcm0sIER1cGxleCk7XG5cbmZ1bmN0aW9uIGFmdGVyVHJhbnNmb3JtKGVyLCBkYXRhKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuICB0cy50cmFuc2Zvcm1pbmcgPSBmYWxzZTtcblxuICB2YXIgY2IgPSB0cy53cml0ZWNiO1xuXG4gIGlmICghY2IpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignd3JpdGUgY2FsbGJhY2sgY2FsbGVkIG11bHRpcGxlIHRpbWVzJykpO1xuICB9XG5cbiAgdHMud3JpdGVjaHVuayA9IG51bGw7XG4gIHRzLndyaXRlY2IgPSBudWxsO1xuXG4gIGlmIChkYXRhICE9IG51bGwpIC8vIHNpbmdsZSBlcXVhbHMgY2hlY2sgZm9yIGJvdGggYG51bGxgIGFuZCBgdW5kZWZpbmVkYFxuICAgIHRoaXMucHVzaChkYXRhKTtcblxuICBjYihlcik7XG5cbiAgdmFyIHJzID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgcnMucmVhZGluZyA9IGZhbHNlO1xuICBpZiAocnMubmVlZFJlYWRhYmxlIHx8IHJzLmxlbmd0aCA8IHJzLmhpZ2hXYXRlck1hcmspIHtcbiAgICB0aGlzLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFuc2Zvcm0pKSByZXR1cm4gbmV3IFRyYW5zZm9ybShvcHRpb25zKTtcblxuICBEdXBsZXguY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICB0aGlzLl90cmFuc2Zvcm1TdGF0ZSA9IHtcbiAgICBhZnRlclRyYW5zZm9ybTogYWZ0ZXJUcmFuc2Zvcm0uYmluZCh0aGlzKSxcbiAgICBuZWVkVHJhbnNmb3JtOiBmYWxzZSxcbiAgICB0cmFuc2Zvcm1pbmc6IGZhbHNlLFxuICAgIHdyaXRlY2I6IG51bGwsXG4gICAgd3JpdGVjaHVuazogbnVsbCxcbiAgICB3cml0ZWVuY29kaW5nOiBudWxsXG4gIH07XG5cbiAgLy8gc3RhcnQgb3V0IGFza2luZyBmb3IgYSByZWFkYWJsZSBldmVudCBvbmNlIGRhdGEgaXMgdHJhbnNmb3JtZWQuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcblxuICAvLyB3ZSBoYXZlIGltcGxlbWVudGVkIHRoZSBfcmVhZCBtZXRob2QsIGFuZCBkb25lIHRoZSBvdGhlciB0aGluZ3NcbiAgLy8gdGhhdCBSZWFkYWJsZSB3YW50cyBiZWZvcmUgdGhlIGZpcnN0IF9yZWFkIGNhbGwsIHNvIHVuc2V0IHRoZVxuICAvLyBzeW5jIGd1YXJkIGZsYWcuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuc3luYyA9IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fdHJhbnNmb3JtID0gb3B0aW9ucy50cmFuc2Zvcm07XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmx1c2ggPT09ICdmdW5jdGlvbicpIHRoaXMuX2ZsdXNoID0gb3B0aW9ucy5mbHVzaDtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHdyaXRhYmxlIHNpZGUgZmluaXNoZXMsIHRoZW4gZmx1c2ggb3V0IGFueXRoaW5nIHJlbWFpbmluZy5cbiAgdGhpcy5vbigncHJlZmluaXNoJywgcHJlZmluaXNoKTtcbn1cblxuZnVuY3Rpb24gcHJlZmluaXNoKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdGhpcy5fZmx1c2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLl9mbHVzaChmdW5jdGlvbiAoZXIsIGRhdGEpIHtcbiAgICAgIGRvbmUoX3RoaXMsIGVyLCBkYXRhKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb25lKHRoaXMsIG51bGwsIG51bGwpO1xuICB9XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcpIHtcbiAgdGhpcy5fdHJhbnNmb3JtU3RhdGUubmVlZFRyYW5zZm9ybSA9IGZhbHNlO1xuICByZXR1cm4gRHVwbGV4LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgY2h1bmssIGVuY29kaW5nKTtcbn07XG5cbi8vIFRoaXMgaXMgdGhlIHBhcnQgd2hlcmUgeW91IGRvIHN0dWZmIVxuLy8gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiBpbiBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gJ2NodW5rJyBpcyBhbiBpbnB1dCBjaHVuay5cbi8vXG4vLyBDYWxsIGBwdXNoKG5ld0NodW5rKWAgdG8gcGFzcyBhbG9uZyB0cmFuc2Zvcm1lZCBvdXRwdXRcbi8vIHRvIHRoZSByZWFkYWJsZSBzaWRlLiAgWW91IG1heSBjYWxsICdwdXNoJyB6ZXJvIG9yIG1vcmUgdGltZXMuXG4vL1xuLy8gQ2FsbCBgY2IoZXJyKWAgd2hlbiB5b3UgYXJlIGRvbmUgd2l0aCB0aGlzIGNodW5rLiAgSWYgeW91IHBhc3Ncbi8vIGFuIGVycm9yLCB0aGVuIHRoYXQnbGwgcHV0IHRoZSBodXJ0IG9uIHRoZSB3aG9sZSBvcGVyYXRpb24uICBJZiB5b3Vcbi8vIG5ldmVyIGNhbGwgY2IoKSwgdGhlbiB5b3UnbGwgbmV2ZXIgZ2V0IGFub3RoZXIgY2h1bmsuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ190cmFuc2Zvcm0oKSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG4gIHRzLndyaXRlY2IgPSBjYjtcbiAgdHMud3JpdGVjaHVuayA9IGNodW5rO1xuICB0cy53cml0ZWVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIGlmICghdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdmFyIHJzID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgICBpZiAodHMubmVlZFRyYW5zZm9ybSB8fCBycy5uZWVkUmVhZGFibGUgfHwgcnMubGVuZ3RoIDwgcnMuaGlnaFdhdGVyTWFyaykgdGhpcy5fcmVhZChycy5oaWdoV2F0ZXJNYXJrKTtcbiAgfVxufTtcblxuLy8gRG9lc24ndCBtYXR0ZXIgd2hhdCB0aGUgYXJncyBhcmUgaGVyZS5cbi8vIF90cmFuc2Zvcm0gZG9lcyBhbGwgdGhlIHdvcmsuXG4vLyBUaGF0IHdlIGdvdCBoZXJlIG1lYW5zIHRoYXQgdGhlIHJlYWRhYmxlIHNpZGUgd2FudHMgbW9yZSBkYXRhLlxuVHJhbnNmb3JtLnByb3RvdHlwZS5fcmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuXG4gIGlmICh0cy53cml0ZWNodW5rICE9PSBudWxsICYmIHRzLndyaXRlY2IgJiYgIXRzLnRyYW5zZm9ybWluZykge1xuICAgIHRzLnRyYW5zZm9ybWluZyA9IHRydWU7XG4gICAgdGhpcy5fdHJhbnNmb3JtKHRzLndyaXRlY2h1bmssIHRzLndyaXRlZW5jb2RpbmcsIHRzLmFmdGVyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBtYXJrIHRoYXQgd2UgbmVlZCBhIHRyYW5zZm9ybSwgc28gdGhhdCBhbnkgZGF0YSB0aGF0IGNvbWVzIGluXG4gICAgLy8gd2lsbCBnZXQgcHJvY2Vzc2VkLCBub3cgdGhhdCB3ZSd2ZSBhc2tlZCBmb3IgaXQuXG4gICAgdHMubmVlZFRyYW5zZm9ybSA9IHRydWU7XG4gIH1cbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICBEdXBsZXgucHJvdG90eXBlLl9kZXN0cm95LmNhbGwodGhpcywgZXJyLCBmdW5jdGlvbiAoZXJyMikge1xuICAgIGNiKGVycjIpO1xuICAgIF90aGlzMi5lbWl0KCdjbG9zZScpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRvbmUoc3RyZWFtLCBlciwgZGF0YSkge1xuICBpZiAoZXIpIHJldHVybiBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG5cbiAgaWYgKGRhdGEgIT0gbnVsbCkgLy8gc2luZ2xlIGVxdWFscyBjaGVjayBmb3IgYm90aCBgbnVsbGAgYW5kIGB1bmRlZmluZWRgXG4gICAgc3RyZWFtLnB1c2goZGF0YSk7XG5cbiAgLy8gaWYgdGhlcmUncyBub3RoaW5nIGluIHRoZSB3cml0ZSBidWZmZXIsIHRoZW4gdGhhdCBtZWFuc1xuICAvLyB0aGF0IG5vdGhpbmcgbW9yZSB3aWxsIGV2ZXIgYmUgcHJvdmlkZWRcbiAgaWYgKHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignQ2FsbGluZyB0cmFuc2Zvcm0gZG9uZSB3aGVuIHdzLmxlbmd0aCAhPSAwJyk7XG5cbiAgaWYgKHN0cmVhbS5fdHJhbnNmb3JtU3RhdGUudHJhbnNmb3JtaW5nKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxpbmcgdHJhbnNmb3JtIGRvbmUgd2hlbiBzdGlsbCB0cmFuc2Zvcm1pbmcnKTtcblxuICByZXR1cm4gc3RyZWFtLnB1c2gobnVsbCk7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIEEgYml0IHNpbXBsZXIgdGhhbiByZWFkYWJsZSBzdHJlYW1zLlxuLy8gSW1wbGVtZW50IGFuIGFzeW5jIC5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYiksIGFuZCBpdCdsbCBoYW5kbGUgYWxsXG4vLyB0aGUgZHJhaW4gZXZlbnQgZW1pc3Npb24gYW5kIGJ1ZmZlcmluZy5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdyaXRhYmxlO1xuXG4vKiA8cmVwbGFjZW1lbnQ+ICovXG5mdW5jdGlvbiBXcml0ZVJlcShjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHRoaXMuY2h1bmsgPSBjaHVuaztcbiAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xuICB0aGlzLmNhbGxiYWNrID0gY2I7XG4gIHRoaXMubmV4dCA9IG51bGw7XG59XG5cbi8vIEl0IHNlZW1zIGEgbGlua2VkIGxpc3QgYnV0IGl0IGlzIG5vdFxuLy8gdGhlcmUgd2lsbCBiZSBvbmx5IDIgb2YgdGhlc2UgZm9yIGVhY2ggc3RyZWFtXG5mdW5jdGlvbiBDb3JrZWRSZXF1ZXN0KHN0YXRlKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgdGhpcy5lbnRyeSA9IG51bGw7XG4gIHRoaXMuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIG9uQ29ya2VkRmluaXNoKF90aGlzLCBzdGF0ZSk7XG4gIH07XG59XG4vKiA8L3JlcGxhY2VtZW50PiAqL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGFzeW5jV3JpdGUgPSAhcHJvY2Vzcy5icm93c2VyICYmIFsndjAuMTAnLCAndjAuOS4nXS5pbmRleE9mKHByb2Nlc3MudmVyc2lvbi5zbGljZSgwLCA1KSkgPiAtMSA/IHNldEltbWVkaWF0ZSA6IHBuYS5uZXh0VGljaztcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5Xcml0YWJsZS5Xcml0YWJsZVN0YXRlID0gV3JpdGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGludGVybmFsVXRpbCA9IHtcbiAgZGVwcmVjYXRlOiByZXF1aXJlKCd1dGlsLWRlcHJlY2F0ZScpXG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL3N0cmVhbScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciBPdXJVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXkgfHwgZnVuY3Rpb24gKCkge307XG5mdW5jdGlvbiBfdWludDhBcnJheVRvQnVmZmVyKGNodW5rKSB7XG4gIHJldHVybiBCdWZmZXIuZnJvbShjaHVuayk7XG59XG5mdW5jdGlvbiBfaXNVaW50OEFycmF5KG9iaikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgb2JqIGluc3RhbmNlb2YgT3VyVWludDhBcnJheTtcbn1cblxuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBkZXN0cm95SW1wbCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9kZXN0cm95Jyk7XG5cbnV0aWwuaW5oZXJpdHMoV3JpdGFibGUsIFN0cmVhbSk7XG5cbmZ1bmN0aW9uIG5vcCgpIHt9XG5cbmZ1bmN0aW9uIFdyaXRhYmxlU3RhdGUob3B0aW9ucywgc3RyZWFtKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gRHVwbGV4IHN0cmVhbXMgYXJlIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLCBidXQgc2hhcmVcbiAgLy8gdGhlIHNhbWUgb3B0aW9ucyBvYmplY3QuXG4gIC8vIEhvd2V2ZXIsIHNvbWUgY2FzZXMgcmVxdWlyZSBzZXR0aW5nIG9wdGlvbnMgdG8gZGlmZmVyZW50XG4gIC8vIHZhbHVlcyBmb3IgdGhlIHJlYWRhYmxlIGFuZCB0aGUgd3JpdGFibGUgc2lkZXMgb2YgdGhlIGR1cGxleCBzdHJlYW0uXG4gIC8vIFRoZXNlIG9wdGlvbnMgY2FuIGJlIHByb3ZpZGVkIHNlcGFyYXRlbHkgYXMgcmVhZGFibGVYWFggYW5kIHdyaXRhYmxlWFhYLlxuICB2YXIgaXNEdXBsZXggPSBzdHJlYW0gaW5zdGFuY2VvZiBEdXBsZXg7XG5cbiAgLy8gb2JqZWN0IHN0cmVhbSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgb3Igbm90IHRoaXMgc3RyZWFtXG4gIC8vIGNvbnRhaW5zIGJ1ZmZlcnMgb3Igb2JqZWN0cy5cbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG5cbiAgaWYgKGlzRHVwbGV4KSB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLm9iamVjdE1vZGUgfHwgISFvcHRpb25zLndyaXRhYmxlT2JqZWN0TW9kZTtcblxuICAvLyB0aGUgcG9pbnQgYXQgd2hpY2ggd3JpdGUoKSBzdGFydHMgcmV0dXJuaW5nIGZhbHNlXG4gIC8vIE5vdGU6IDAgaXMgYSB2YWxpZCB2YWx1ZSwgbWVhbnMgdGhhdCB3ZSBhbHdheXMgcmV0dXJuIGZhbHNlIGlmXG4gIC8vIHRoZSBlbnRpcmUgYnVmZmVyIGlzIG5vdCBmbHVzaGVkIGltbWVkaWF0ZWx5IG9uIHdyaXRlKClcbiAgdmFyIGh3bSA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgdmFyIHdyaXRhYmxlSHdtID0gb3B0aW9ucy53cml0YWJsZUhpZ2hXYXRlck1hcms7XG4gIHZhciBkZWZhdWx0SHdtID0gdGhpcy5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG5cbiAgaWYgKGh3bSB8fCBod20gPT09IDApIHRoaXMuaGlnaFdhdGVyTWFyayA9IGh3bTtlbHNlIGlmIChpc0R1cGxleCAmJiAod3JpdGFibGVId20gfHwgd3JpdGFibGVId20gPT09IDApKSB0aGlzLmhpZ2hXYXRlck1hcmsgPSB3cml0YWJsZUh3bTtlbHNlIHRoaXMuaGlnaFdhdGVyTWFyayA9IGRlZmF1bHRId207XG5cbiAgLy8gY2FzdCB0byBpbnRzLlxuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBNYXRoLmZsb29yKHRoaXMuaGlnaFdhdGVyTWFyayk7XG5cbiAgLy8gaWYgX2ZpbmFsIGhhcyBiZWVuIGNhbGxlZFxuICB0aGlzLmZpbmFsQ2FsbGVkID0gZmFsc2U7XG5cbiAgLy8gZHJhaW4gZXZlbnQgZmxhZy5cbiAgdGhpcy5uZWVkRHJhaW4gPSBmYWxzZTtcbiAgLy8gYXQgdGhlIHN0YXJ0IG9mIGNhbGxpbmcgZW5kKClcbiAgdGhpcy5lbmRpbmcgPSBmYWxzZTtcbiAgLy8gd2hlbiBlbmQoKSBoYXMgYmVlbiBjYWxsZWQsIGFuZCByZXR1cm5lZFxuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIC8vIHdoZW4gJ2ZpbmlzaCcgaXMgZW1pdHRlZFxuICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG5cbiAgLy8gaGFzIGl0IGJlZW4gZGVzdHJveWVkXG4gIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgLy8gc2hvdWxkIHdlIGRlY29kZSBzdHJpbmdzIGludG8gYnVmZmVycyBiZWZvcmUgcGFzc2luZyB0byBfd3JpdGU/XG4gIC8vIHRoaXMgaXMgaGVyZSBzbyB0aGF0IHNvbWUgbm9kZS1jb3JlIHN0cmVhbXMgY2FuIG9wdGltaXplIHN0cmluZ1xuICAvLyBoYW5kbGluZyBhdCBhIGxvd2VyIGxldmVsLlxuICB2YXIgbm9EZWNvZGUgPSBvcHRpb25zLmRlY29kZVN0cmluZ3MgPT09IGZhbHNlO1xuICB0aGlzLmRlY29kZVN0cmluZ3MgPSAhbm9EZWNvZGU7XG5cbiAgLy8gQ3J5cHRvIGlzIGtpbmQgb2Ygb2xkIGFuZCBjcnVzdHkuICBIaXN0b3JpY2FsbHksIGl0cyBkZWZhdWx0IHN0cmluZ1xuICAvLyBlbmNvZGluZyBpcyAnYmluYXJ5JyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhpcyBjb25maWd1cmFibGUuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgdW5pdmVyc2UgdXNlcyAndXRmOCcsIHRob3VnaC5cbiAgdGhpcy5kZWZhdWx0RW5jb2RpbmcgPSBvcHRpb25zLmRlZmF1bHRFbmNvZGluZyB8fCAndXRmOCc7XG5cbiAgLy8gbm90IGFuIGFjdHVhbCBidWZmZXIgd2Uga2VlcCB0cmFjayBvZiwgYnV0IGEgbWVhc3VyZW1lbnRcbiAgLy8gb2YgaG93IG11Y2ggd2UncmUgd2FpdGluZyB0byBnZXQgcHVzaGVkIHRvIHNvbWUgdW5kZXJseWluZ1xuICAvLyBzb2NrZXQgb3IgZmlsZS5cbiAgdGhpcy5sZW5ndGggPSAwO1xuXG4gIC8vIGEgZmxhZyB0byBzZWUgd2hlbiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgd3JpdGUuXG4gIHRoaXMud3JpdGluZyA9IGZhbHNlO1xuXG4gIC8vIHdoZW4gdHJ1ZSBhbGwgd3JpdGVzIHdpbGwgYmUgYnVmZmVyZWQgdW50aWwgLnVuY29yaygpIGNhbGxcbiAgdGhpcy5jb3JrZWQgPSAwO1xuXG4gIC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIG9ud3JpdGUgY2IgaXMgY2FsbGVkIGltbWVkaWF0ZWx5LFxuICAvLyBvciBvbiBhIGxhdGVyIHRpY2suICBXZSBzZXQgdGhpcyB0byB0cnVlIGF0IGZpcnN0LCBiZWNhdXNlIGFueVxuICAvLyBhY3Rpb25zIHRoYXQgc2hvdWxkbid0IGhhcHBlbiB1bnRpbCBcImxhdGVyXCIgc2hvdWxkIGdlbmVyYWxseSBhbHNvXG4gIC8vIG5vdCBoYXBwZW4gYmVmb3JlIHRoZSBmaXJzdCB3cml0ZSBjYWxsLlxuICB0aGlzLnN5bmMgPSB0cnVlO1xuXG4gIC8vIGEgZmxhZyB0byBrbm93IGlmIHdlJ3JlIHByb2Nlc3NpbmcgcHJldmlvdXNseSBidWZmZXJlZCBpdGVtcywgd2hpY2hcbiAgLy8gbWF5IGNhbGwgdGhlIF93cml0ZSgpIGNhbGxiYWNrIGluIHRoZSBzYW1lIHRpY2ssIHNvIHRoYXQgd2UgZG9uJ3RcbiAgLy8gZW5kIHVwIGluIGFuIG92ZXJsYXBwZWQgb253cml0ZSBzaXR1YXRpb24uXG4gIHRoaXMuYnVmZmVyUHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gIC8vIHRoZSBjYWxsYmFjayB0aGF0J3MgcGFzc2VkIHRvIF93cml0ZShjaHVuayxjYilcbiAgdGhpcy5vbndyaXRlID0gZnVuY3Rpb24gKGVyKSB7XG4gICAgb253cml0ZShzdHJlYW0sIGVyKTtcbiAgfTtcblxuICAvLyB0aGUgY2FsbGJhY2sgdGhhdCB0aGUgdXNlciBzdXBwbGllcyB0byB3cml0ZShjaHVuayxlbmNvZGluZyxjYilcbiAgdGhpcy53cml0ZWNiID0gbnVsbDtcblxuICAvLyB0aGUgYW1vdW50IHRoYXQgaXMgYmVpbmcgd3JpdHRlbiB3aGVuIF93cml0ZSBpcyBjYWxsZWQuXG4gIHRoaXMud3JpdGVsZW4gPSAwO1xuXG4gIHRoaXMuYnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgdGhpcy5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcblxuICAvLyBudW1iZXIgb2YgcGVuZGluZyB1c2VyLXN1cHBsaWVkIHdyaXRlIGNhbGxiYWNrc1xuICAvLyB0aGlzIG11c3QgYmUgMCBiZWZvcmUgJ2ZpbmlzaCcgY2FuIGJlIGVtaXR0ZWRcbiAgdGhpcy5wZW5kaW5nY2IgPSAwO1xuXG4gIC8vIGVtaXQgcHJlZmluaXNoIGlmIHRoZSBvbmx5IHRoaW5nIHdlJ3JlIHdhaXRpbmcgZm9yIGlzIF93cml0ZSBjYnNcbiAgLy8gVGhpcyBpcyByZWxldmFudCBmb3Igc3luY2hyb25vdXMgVHJhbnNmb3JtIHN0cmVhbXNcbiAgdGhpcy5wcmVmaW5pc2hlZCA9IGZhbHNlO1xuXG4gIC8vIFRydWUgaWYgdGhlIGVycm9yIHdhcyBhbHJlYWR5IGVtaXR0ZWQgYW5kIHNob3VsZCBub3QgYmUgdGhyb3duIGFnYWluXG4gIHRoaXMuZXJyb3JFbWl0dGVkID0gZmFsc2U7XG5cbiAgLy8gY291bnQgYnVmZmVyZWQgcmVxdWVzdHNcbiAgdGhpcy5idWZmZXJlZFJlcXVlc3RDb3VudCA9IDA7XG5cbiAgLy8gYWxsb2NhdGUgdGhlIGZpcnN0IENvcmtlZFJlcXVlc3QsIHRoZXJlIGlzIGFsd2F5c1xuICAvLyBvbmUgYWxsb2NhdGVkIGFuZCBmcmVlIHRvIHVzZSwgYW5kIHdlIG1haW50YWluIGF0IG1vc3QgdHdvXG4gIHRoaXMuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3QodGhpcyk7XG59XG5cbldyaXRhYmxlU3RhdGUucHJvdG90eXBlLmdldEJ1ZmZlciA9IGZ1bmN0aW9uIGdldEJ1ZmZlcigpIHtcbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmJ1ZmZlcmVkUmVxdWVzdDtcbiAgdmFyIG91dCA9IFtdO1xuICB3aGlsZSAoY3VycmVudCkge1xuICAgIG91dC5wdXNoKGN1cnJlbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlU3RhdGUucHJvdG90eXBlLCAnYnVmZmVyJywge1xuICAgICAgZ2V0OiBpbnRlcm5hbFV0aWwuZGVwcmVjYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnVmZmVyKCk7XG4gICAgICB9LCAnX3dyaXRhYmxlU3RhdGUuYnVmZmVyIGlzIGRlcHJlY2F0ZWQuIFVzZSBfd3JpdGFibGVTdGF0ZS5nZXRCdWZmZXIgJyArICdpbnN0ZWFkLicsICdERVAwMDAzJylcbiAgICB9KTtcbiAgfSBjYXRjaCAoXykge31cbn0pKCk7XG5cbi8vIFRlc3QgX3dyaXRhYmxlU3RhdGUgZm9yIGluaGVyaXRhbmNlIHRvIGFjY291bnQgZm9yIER1cGxleCBzdHJlYW1zLFxuLy8gd2hvc2UgcHJvdG90eXBlIGNoYWluIG9ubHkgcG9pbnRzIHRvIFJlYWRhYmxlLlxudmFyIHJlYWxIYXNJbnN0YW5jZTtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5oYXNJbnN0YW5jZSAmJiB0eXBlb2YgRnVuY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5oYXNJbnN0YW5jZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgcmVhbEhhc0luc3RhbmNlID0gRnVuY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5oYXNJbnN0YW5jZV07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZSwgU3ltYm9sLmhhc0luc3RhbmNlLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChyZWFsSGFzSW5zdGFuY2UuY2FsbCh0aGlzLCBvYmplY3QpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICh0aGlzICE9PSBXcml0YWJsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gb2JqZWN0ICYmIG9iamVjdC5fd3JpdGFibGVTdGF0ZSBpbnN0YW5jZW9mIFdyaXRhYmxlU3RhdGU7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIHJlYWxIYXNJbnN0YW5jZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgdGhpcztcbiAgfTtcbn1cblxuZnVuY3Rpb24gV3JpdGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIC8vIFdyaXRhYmxlIGN0b3IgaXMgYXBwbGllZCB0byBEdXBsZXhlcywgdG9vLlxuICAvLyBgcmVhbEhhc0luc3RhbmNlYCBpcyBuZWNlc3NhcnkgYmVjYXVzZSB1c2luZyBwbGFpbiBgaW5zdGFuY2VvZmBcbiAgLy8gd291bGQgcmV0dXJuIGZhbHNlLCBhcyBubyBgX3dyaXRhYmxlU3RhdGVgIHByb3BlcnR5IGlzIGF0dGFjaGVkLlxuXG4gIC8vIFRyeWluZyB0byB1c2UgdGhlIGN1c3RvbSBgaW5zdGFuY2VvZmAgZm9yIFdyaXRhYmxlIGhlcmUgd2lsbCBhbHNvIGJyZWFrIHRoZVxuICAvLyBOb2RlLmpzIExhenlUcmFuc2Zvcm0gaW1wbGVtZW50YXRpb24sIHdoaWNoIGhhcyBhIG5vbi10cml2aWFsIGdldHRlciBmb3JcbiAgLy8gYF93cml0YWJsZVN0YXRlYCB0aGF0IHdvdWxkIGxlYWQgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICBpZiAoIXJlYWxIYXNJbnN0YW5jZS5jYWxsKFdyaXRhYmxlLCB0aGlzKSAmJiAhKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSB7XG4gICAgcmV0dXJuIG5ldyBXcml0YWJsZShvcHRpb25zKTtcbiAgfVxuXG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUgPSBuZXcgV3JpdGFibGVTdGF0ZShvcHRpb25zLCB0aGlzKTtcblxuICAvLyBsZWdhY3kuXG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRlID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZSA9IG9wdGlvbnMud3JpdGU7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JpdGV2ID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZXYgPSBvcHRpb25zLndyaXRldjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB0aGlzLl9kZXN0cm95ID0gb3B0aW9ucy5kZXN0cm95O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZpbmFsID09PSAnZnVuY3Rpb24nKSB0aGlzLl9maW5hbCA9IG9wdGlvbnMuZmluYWw7XG4gIH1cblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbn1cblxuLy8gT3RoZXJ3aXNlIHBlb3BsZSBjYW4gcGlwZSBXcml0YWJsZSBzdHJlYW1zLCB3aGljaCBpcyBqdXN0IHdyb25nLlxuV3JpdGFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0Nhbm5vdCBwaXBlLCBub3QgcmVhZGFibGUnKSk7XG59O1xuXG5mdW5jdGlvbiB3cml0ZUFmdGVyRW5kKHN0cmVhbSwgY2IpIHtcbiAgdmFyIGVyID0gbmV3IEVycm9yKCd3cml0ZSBhZnRlciBlbmQnKTtcbiAgLy8gVE9ETzogZGVmZXIgZXJyb3IgZXZlbnRzIGNvbnNpc3RlbnRseSBldmVyeXdoZXJlLCBub3QganVzdCB0aGUgY2JcbiAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICBwbmEubmV4dFRpY2soY2IsIGVyKTtcbn1cblxuLy8gQ2hlY2tzIHRoYXQgYSB1c2VyLXN1cHBsaWVkIGNodW5rIGlzIHZhbGlkLCBlc3BlY2lhbGx5IGZvciB0aGUgcGFydGljdWxhclxuLy8gbW9kZSB0aGUgc3RyZWFtIGlzIGluLiBDdXJyZW50bHkgdGhpcyBtZWFucyB0aGF0IGBudWxsYCBpcyBuZXZlciBhY2NlcHRlZFxuLy8gYW5kIHVuZGVmaW5lZC9ub24tc3RyaW5nIHZhbHVlcyBhcmUgb25seSBhbGxvd2VkIGluIG9iamVjdCBtb2RlLlxuZnVuY3Rpb24gdmFsaWRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgY2IpIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgdmFyIGVyID0gZmFsc2U7XG5cbiAgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdNYXkgbm90IHdyaXRlIG51bGwgdmFsdWVzIHRvIHN0cmVhbScpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIGlmIChlcikge1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICBwbmEubmV4dFRpY2soY2IsIGVyKTtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWxpZDtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHJldCA9IGZhbHNlO1xuICB2YXIgaXNCdWYgPSAhc3RhdGUub2JqZWN0TW9kZSAmJiBfaXNVaW50OEFycmF5KGNodW5rKTtcblxuICBpZiAoaXNCdWYgJiYgIUJ1ZmZlci5pc0J1ZmZlcihjaHVuaykpIHtcbiAgICBjaHVuayA9IF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGlzQnVmKSBlbmNvZGluZyA9ICdidWZmZXInO2Vsc2UgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSBzdGF0ZS5kZWZhdWx0RW5jb2Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgY2IgPSBub3A7XG5cbiAgaWYgKHN0YXRlLmVuZGVkKSB3cml0ZUFmdGVyRW5kKHRoaXMsIGNiKTtlbHNlIGlmIChpc0J1ZiB8fCB2YWxpZENodW5rKHRoaXMsIHN0YXRlLCBjaHVuaywgY2IpKSB7XG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgcmV0ID0gd3JpdGVPckJ1ZmZlcih0aGlzLCBzdGF0ZSwgaXNCdWYsIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIHN0YXRlLmNvcmtlZCsrO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnVuY29yayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkLS07XG5cbiAgICBpZiAoIXN0YXRlLndyaXRpbmcgJiYgIXN0YXRlLmNvcmtlZCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSBjbGVhckJ1ZmZlcih0aGlzLCBzdGF0ZSk7XG4gIH1cbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5zZXREZWZhdWx0RW5jb2RpbmcgPSBmdW5jdGlvbiBzZXREZWZhdWx0RW5jb2RpbmcoZW5jb2RpbmcpIHtcbiAgLy8gbm9kZTo6UGFyc2VFbmNvZGluZygpIHJlcXVpcmVzIGxvd2VyIGNhc2UuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSBlbmNvZGluZyA9IGVuY29kaW5nLnRvTG93ZXJDYXNlKCk7XG4gIGlmICghKFsnaGV4JywgJ3V0ZjgnLCAndXRmLTgnLCAnYXNjaWknLCAnYmluYXJ5JywgJ2Jhc2U2NCcsICd1Y3MyJywgJ3Vjcy0yJywgJ3V0ZjE2bGUnLCAndXRmLTE2bGUnLCAncmF3J10uaW5kZXhPZigoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKSkgPiAtMSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZyk7XG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVmYXVsdEVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZykge1xuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgc3RhdGUuZGVjb2RlU3RyaW5ncyAhPT0gZmFsc2UgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGNodW5rID0gQnVmZmVyLmZyb20oY2h1bmssIGVuY29kaW5nKTtcbiAgfVxuICByZXR1cm4gY2h1bms7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZS5wcm90b3R5cGUsICd3cml0YWJsZUhpZ2hXYXRlck1hcmsnLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl93cml0YWJsZVN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIH1cbn0pO1xuXG4vLyBpZiB3ZSdyZSBhbHJlYWR5IHdyaXRpbmcgc29tZXRoaW5nLCB0aGVuIGp1c3QgcHV0IHRoaXNcbi8vIGluIHRoZSBxdWV1ZSwgYW5kIHdhaXQgb3VyIHR1cm4uICBPdGhlcndpc2UsIGNhbGwgX3dyaXRlXG4vLyBJZiB3ZSByZXR1cm4gZmFsc2UsIHRoZW4gd2UgbmVlZCBhIGRyYWluIGV2ZW50LCBzbyBzZXQgdGhhdCBmbGFnLlxuZnVuY3Rpb24gd3JpdGVPckJ1ZmZlcihzdHJlYW0sIHN0YXRlLCBpc0J1ZiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBpZiAoIWlzQnVmKSB7XG4gICAgdmFyIG5ld0NodW5rID0gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZyk7XG4gICAgaWYgKGNodW5rICE9PSBuZXdDaHVuaykge1xuICAgICAgaXNCdWYgPSB0cnVlO1xuICAgICAgZW5jb2RpbmcgPSAnYnVmZmVyJztcbiAgICAgIGNodW5rID0gbmV3Q2h1bms7XG4gICAgfVxuICB9XG4gIHZhciBsZW4gPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcblxuICBzdGF0ZS5sZW5ndGggKz0gbGVuO1xuXG4gIHZhciByZXQgPSBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICAvLyB3ZSBtdXN0IGVuc3VyZSB0aGF0IHByZXZpb3VzIG5lZWREcmFpbiB3aWxsIG5vdCBiZSByZXNldCB0byBmYWxzZS5cbiAgaWYgKCFyZXQpIHN0YXRlLm5lZWREcmFpbiA9IHRydWU7XG5cbiAgaWYgKHN0YXRlLndyaXRpbmcgfHwgc3RhdGUuY29ya2VkKSB7XG4gICAgdmFyIGxhc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSB7XG4gICAgICBjaHVuazogY2h1bmssXG4gICAgICBlbmNvZGluZzogZW5jb2RpbmcsXG4gICAgICBpc0J1ZjogaXNCdWYsXG4gICAgICBjYWxsYmFjazogY2IsXG4gICAgICBuZXh0OiBudWxsXG4gICAgfTtcbiAgICBpZiAobGFzdCkge1xuICAgICAgbGFzdC5uZXh0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9XG4gICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB3cml0ZXYsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBzdGF0ZS53cml0ZWxlbiA9IGxlbjtcbiAgc3RhdGUud3JpdGVjYiA9IGNiO1xuICBzdGF0ZS53cml0aW5nID0gdHJ1ZTtcbiAgc3RhdGUuc3luYyA9IHRydWU7XG4gIGlmICh3cml0ZXYpIHN0cmVhbS5fd3JpdGV2KGNodW5rLCBzdGF0ZS5vbndyaXRlKTtlbHNlIHN0cmVhbS5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBzdGF0ZS5vbndyaXRlKTtcbiAgc3RhdGUuc3luYyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKSB7XG4gIC0tc3RhdGUucGVuZGluZ2NiO1xuXG4gIGlmIChzeW5jKSB7XG4gICAgLy8gZGVmZXIgdGhlIGNhbGxiYWNrIGlmIHdlIGFyZSBiZWluZyBjYWxsZWQgc3luY2hyb25vdXNseVxuICAgIC8vIHRvIGF2b2lkIHBpbGluZyB1cCB0aGluZ3Mgb24gdGhlIHN0YWNrXG4gICAgcG5hLm5leHRUaWNrKGNiLCBlcik7XG4gICAgLy8gdGhpcyBjYW4gZW1pdCBmaW5pc2gsIGFuZCBpdCB3aWxsIGFsd2F5cyBoYXBwZW5cbiAgICAvLyBhZnRlciBlcnJvclxuICAgIHBuYS5uZXh0VGljayhmaW5pc2hNYXliZSwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBjYWxsZXIgZXhwZWN0IHRoaXMgdG8gaGFwcGVuIGJlZm9yZSBpZlxuICAgIC8vIGl0IGlzIGFzeW5jXG4gICAgY2IoZXIpO1xuICAgIHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICAvLyB0aGlzIGNhbiBlbWl0IGZpbmlzaCwgYnV0IGZpbmlzaCBtdXN0XG4gICAgLy8gYWx3YXlzIGZvbGxvdyBlcnJvclxuICAgIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGVTdGF0ZVVwZGF0ZShzdGF0ZSkge1xuICBzdGF0ZS53cml0aW5nID0gZmFsc2U7XG4gIHN0YXRlLndyaXRlY2IgPSBudWxsO1xuICBzdGF0ZS5sZW5ndGggLT0gc3RhdGUud3JpdGVsZW47XG4gIHN0YXRlLndyaXRlbGVuID0gMDtcbn1cblxuZnVuY3Rpb24gb253cml0ZShzdHJlYW0sIGVyKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHN5bmMgPSBzdGF0ZS5zeW5jO1xuICB2YXIgY2IgPSBzdGF0ZS53cml0ZWNiO1xuXG4gIG9ud3JpdGVTdGF0ZVVwZGF0ZShzdGF0ZSk7XG5cbiAgaWYgKGVyKSBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKTtlbHNlIHtcbiAgICAvLyBDaGVjayBpZiB3ZSdyZSBhY3R1YWxseSByZWFkeSB0byBmaW5pc2gsIGJ1dCBkb24ndCBlbWl0IHlldFxuICAgIHZhciBmaW5pc2hlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuXG4gICAgaWYgKCFmaW5pc2hlZCAmJiAhc3RhdGUuY29ya2VkICYmICFzdGF0ZS5idWZmZXJQcm9jZXNzaW5nICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCkge1xuICAgICAgY2xlYXJCdWZmZXIoc3RyZWFtLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIC8qPHJlcGxhY2VtZW50PiovXG4gICAgICBhc3luY1dyaXRlKGFmdGVyV3JpdGUsIHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgICAvKjwvcmVwbGFjZW1lbnQ+Ki9cbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJXcml0ZShzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZnRlcldyaXRlKHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYikge1xuICBpZiAoIWZpbmlzaGVkKSBvbndyaXRlRHJhaW4oc3RyZWFtLCBzdGF0ZSk7XG4gIHN0YXRlLnBlbmRpbmdjYi0tO1xuICBjYigpO1xuICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbn1cblxuLy8gTXVzdCBmb3JjZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgb24gbmV4dFRpY2ssIHNvIHRoYXQgd2UgZG9uJ3Rcbi8vIGVtaXQgJ2RyYWluJyBiZWZvcmUgdGhlIHdyaXRlKCkgY29uc3VtZXIgZ2V0cyB0aGUgJ2ZhbHNlJyByZXR1cm5cbi8vIHZhbHVlLCBhbmQgaGFzIGEgY2hhbmNlIHRvIGF0dGFjaCBhICdkcmFpbicgbGlzdGVuZXIuXG5mdW5jdGlvbiBvbndyaXRlRHJhaW4oc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLm5lZWREcmFpbikge1xuICAgIHN0YXRlLm5lZWREcmFpbiA9IGZhbHNlO1xuICAgIHN0cmVhbS5lbWl0KCdkcmFpbicpO1xuICB9XG59XG5cbi8vIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHRoZSBidWZmZXIgd2FpdGluZywgdGhlbiBwcm9jZXNzIGl0XG5mdW5jdGlvbiBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKSB7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSB0cnVlO1xuICB2YXIgZW50cnkgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3Q7XG5cbiAgaWYgKHN0cmVhbS5fd3JpdGV2ICYmIGVudHJ5ICYmIGVudHJ5Lm5leHQpIHtcbiAgICAvLyBGYXN0IGNhc2UsIHdyaXRlIGV2ZXJ5dGhpbmcgdXNpbmcgX3dyaXRldigpXG4gICAgdmFyIGwgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudDtcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5KGwpO1xuICAgIHZhciBob2xkZXIgPSBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWU7XG4gICAgaG9sZGVyLmVudHJ5ID0gZW50cnk7XG5cbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBhbGxCdWZmZXJzID0gdHJ1ZTtcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIGJ1ZmZlcltjb3VudF0gPSBlbnRyeTtcbiAgICAgIGlmICghZW50cnkuaXNCdWYpIGFsbEJ1ZmZlcnMgPSBmYWxzZTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuICAgIGJ1ZmZlci5hbGxCdWZmZXJzID0gYWxsQnVmZmVycztcblxuICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgdHJ1ZSwgc3RhdGUubGVuZ3RoLCBidWZmZXIsICcnLCBob2xkZXIuZmluaXNoKTtcblxuICAgIC8vIGRvV3JpdGUgaXMgYWxtb3N0IGFsd2F5cyBhc3luYywgZGVmZXIgdGhlc2UgdG8gc2F2ZSBhIGJpdCBvZiB0aW1lXG4gICAgLy8gYXMgdGhlIGhvdCBwYXRoIGVuZHMgd2l0aCBkb1dyaXRlXG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gICAgaWYgKGhvbGRlci5uZXh0KSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBob2xkZXIubmV4dDtcbiAgICAgIGhvbGRlci5uZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3Qoc3RhdGUpO1xuICAgIH1cbiAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gU2xvdyBjYXNlLCB3cml0ZSBjaHVua3Mgb25lLWJ5LW9uZVxuICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgdmFyIGNodW5rID0gZW50cnkuY2h1bms7XG4gICAgICB2YXIgZW5jb2RpbmcgPSBlbnRyeS5lbmNvZGluZztcbiAgICAgIHZhciBjYiA9IGVudHJ5LmNhbGxiYWNrO1xuICAgICAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXG4gICAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQtLTtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBjYWxsIHRoZSBvbndyaXRlIGltbWVkaWF0ZWx5LCB0aGVuXG4gICAgICAvLyBpdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gd2FpdCB1bnRpbCBpdCBkb2VzLlxuICAgICAgLy8gYWxzbywgdGhhdCBtZWFucyB0aGF0IHRoZSBjaHVuayBhbmQgY2IgYXJlIGN1cnJlbnRseVxuICAgICAgLy8gYmVpbmcgcHJvY2Vzc2VkLCBzbyBtb3ZlIHRoZSBidWZmZXIgY291bnRlciBwYXN0IHRoZW0uXG4gICAgICBpZiAoc3RhdGUud3JpdGluZykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW50cnkgPT09IG51bGwpIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB9XG5cbiAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gZW50cnk7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSBmYWxzZTtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGNiKG5ldyBFcnJvcignX3dyaXRlKCkgaXMgbm90IGltcGxlbWVudGVkJykpO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZXYgPSBudWxsO1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAodHlwZW9mIGNodW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBjaHVuaztcbiAgICBjaHVuayA9IG51bGw7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGNodW5rICE9PSBudWxsICYmIGNodW5rICE9PSB1bmRlZmluZWQpIHRoaXMud3JpdGUoY2h1bmssIGVuY29kaW5nKTtcblxuICAvLyAuZW5kKCkgZnVsbHkgdW5jb3Jrc1xuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkID0gMTtcbiAgICB0aGlzLnVuY29yaygpO1xuICB9XG5cbiAgLy8gaWdub3JlIHVubmVjZXNzYXJ5IGVuZCgpIGNhbGxzLlxuICBpZiAoIXN0YXRlLmVuZGluZyAmJiAhc3RhdGUuZmluaXNoZWQpIGVuZFdyaXRhYmxlKHRoaXMsIHN0YXRlLCBjYik7XG59O1xuXG5mdW5jdGlvbiBuZWVkRmluaXNoKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5lbmRpbmcgJiYgc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9PT0gbnVsbCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLndyaXRpbmc7XG59XG5mdW5jdGlvbiBjYWxsRmluYWwoc3RyZWFtLCBzdGF0ZSkge1xuICBzdHJlYW0uX2ZpbmFsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgIH1cbiAgICBzdGF0ZS5wcmVmaW5pc2hlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ3ByZWZpbmlzaCcpO1xuICAgIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucHJlZmluaXNoZWQgJiYgIXN0YXRlLmZpbmFsQ2FsbGVkKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJlYW0uX2ZpbmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICAgIHN0YXRlLmZpbmFsQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHBuYS5uZXh0VGljayhjYWxsRmluYWwsIHN0cmVhbSwgc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wcmVmaW5pc2hlZCA9IHRydWU7XG4gICAgICBzdHJlYW0uZW1pdCgncHJlZmluaXNoJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpIHtcbiAgdmFyIG5lZWQgPSBuZWVkRmluaXNoKHN0YXRlKTtcbiAgaWYgKG5lZWQpIHtcbiAgICBwcmVmaW5pc2goc3RyZWFtLCBzdGF0ZSk7XG4gICAgaWYgKHN0YXRlLnBlbmRpbmdjYiA9PT0gMCkge1xuICAgICAgc3RhdGUuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLmVtaXQoJ2ZpbmlzaCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmVlZDtcbn1cblxuZnVuY3Rpb24gZW5kV3JpdGFibGUoc3RyZWFtLCBzdGF0ZSwgY2IpIHtcbiAgc3RhdGUuZW5kaW5nID0gdHJ1ZTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIGlmIChjYikge1xuICAgIGlmIChzdGF0ZS5maW5pc2hlZCkgcG5hLm5leHRUaWNrKGNiKTtlbHNlIHN0cmVhbS5vbmNlKCdmaW5pc2gnLCBjYik7XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICBzdHJlYW0ud3JpdGFibGUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb25Db3JrZWRGaW5pc2goY29ya1JlcSwgc3RhdGUsIGVycikge1xuICB2YXIgZW50cnkgPSBjb3JrUmVxLmVudHJ5O1xuICBjb3JrUmVxLmVudHJ5ID0gbnVsbDtcbiAgd2hpbGUgKGVudHJ5KSB7XG4gICAgdmFyIGNiID0gZW50cnkuY2FsbGJhY2s7XG4gICAgc3RhdGUucGVuZGluZ2NiLS07XG4gICAgY2IoZXJyKTtcbiAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gIH1cbiAgaWYgKHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSkge1xuICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZS5uZXh0ID0gY29ya1JlcTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBjb3JrUmVxO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZS5wcm90b3R5cGUsICdkZXN0cm95ZWQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl93cml0YWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHdlIGlnbm9yZSB0aGUgdmFsdWUgaWYgdGhlIHN0cmVhbVxuICAgIC8vIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCB5ZXRcbiAgICBpZiAoIXRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0aGUgdXNlciBpcyBleHBsaWNpdGx5XG4gICAgLy8gbWFuYWdpbmcgZGVzdHJveWVkXG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgfVxufSk7XG5cbldyaXRhYmxlLnByb3RvdHlwZS5kZXN0cm95ID0gZGVzdHJveUltcGwuZGVzdHJveTtcbldyaXRhYmxlLnByb3RvdHlwZS5fdW5kZXN0cm95ID0gZGVzdHJveUltcGwudW5kZXN0cm95O1xuV3JpdGFibGUucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgdGhpcy5lbmQoKTtcbiAgY2IoZXJyKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuZnVuY3Rpb24gY29weUJ1ZmZlcihzcmMsIHRhcmdldCwgb2Zmc2V0KSB7XG4gIHNyYy5jb3B5KHRhcmdldCwgb2Zmc2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJ1ZmZlckxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1ZmZlckxpc3QpO1xuXG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoKHYpIHtcbiAgICB2YXIgZW50cnkgPSB7IGRhdGE6IHYsIG5leHQ6IG51bGwgfTtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB0aGlzLnRhaWwubmV4dCA9IGVudHJ5O2Vsc2UgdGhpcy5oZWFkID0gZW50cnk7XG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgKyt0aGlzLmxlbmd0aDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gdW5zaGlmdCh2KSB7XG4gICAgdmFyIGVudHJ5ID0geyBkYXRhOiB2LCBuZXh0OiB0aGlzLmhlYWQgfTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHRoaXMudGFpbCA9IGVudHJ5O1xuICAgIHRoaXMuaGVhZCA9IGVudHJ5O1xuICAgICsrdGhpcy5sZW5ndGg7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICB2YXIgcmV0ID0gdGhpcy5oZWFkLmRhdGE7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO2Vsc2UgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgLS10aGlzLmxlbmd0aDtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uIGpvaW4ocykge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICAgIHZhciBwID0gdGhpcy5oZWFkO1xuICAgIHZhciByZXQgPSAnJyArIHAuZGF0YTtcbiAgICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgICAgcmV0ICs9IHMgKyBwLmRhdGE7XG4gICAgfXJldHVybiByZXQ7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KG4pIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiBCdWZmZXIuYWxsb2MoMCk7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XG4gICAgdmFyIHJldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuID4+PiAwKTtcbiAgICB2YXIgcCA9IHRoaXMuaGVhZDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKHApIHtcbiAgICAgIGNvcHlCdWZmZXIocC5kYXRhLCByZXQsIGkpO1xuICAgICAgaSArPSBwLmRhdGEubGVuZ3RoO1xuICAgICAgcCA9IHAubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICByZXR1cm4gQnVmZmVyTGlzdDtcbn0oKTtcblxuaWYgKHV0aWwgJiYgdXRpbC5pbnNwZWN0ICYmIHV0aWwuaW5zcGVjdC5jdXN0b20pIHtcbiAgbW9kdWxlLmV4cG9ydHMucHJvdG90eXBlW3V0aWwuaW5zcGVjdC5jdXN0b21dID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYmogPSB1dGlsLmluc3BlY3QoeyBsZW5ndGg6IHRoaXMubGVuZ3RoIH0pO1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyAnICcgKyBvYmo7XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vLyB1bmRvY3VtZW50ZWQgY2IoKSBBUEksIG5lZWRlZCBmb3IgY29yZSwgbm90IGZvciBwdWJsaWMgQVBJXG5mdW5jdGlvbiBkZXN0cm95KGVyciwgY2IpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgcmVhZGFibGVEZXN0cm95ZWQgPSB0aGlzLl9yZWFkYWJsZVN0YXRlICYmIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB2YXIgd3JpdGFibGVEZXN0cm95ZWQgPSB0aGlzLl93cml0YWJsZVN0YXRlICYmIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkO1xuXG4gIGlmIChyZWFkYWJsZURlc3Ryb3llZCB8fCB3cml0YWJsZURlc3Ryb3llZCkge1xuICAgIGlmIChjYikge1xuICAgICAgY2IoZXJyKTtcbiAgICB9IGVsc2UgaWYgKGVyciAmJiAoIXRoaXMuX3dyaXRhYmxlU3RhdGUgfHwgIXRoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkKSkge1xuICAgICAgcG5hLm5leHRUaWNrKGVtaXRFcnJvck5ULCB0aGlzLCBlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHdlIHNldCBkZXN0cm95ZWQgdG8gdHJ1ZSBiZWZvcmUgZmlyaW5nIGVycm9yIGNhbGxiYWNrcyBpbiBvcmRlclxuICAvLyB0byBtYWtlIGl0IHJlLWVudHJhbmNlIHNhZmUgaW4gY2FzZSBkZXN0cm95KCkgaXMgY2FsbGVkIHdpdGhpbiBjYWxsYmFja3NcblxuICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIHRoaXMgaXMgYSBkdXBsZXggc3RyZWFtIG1hcmsgdGhlIHdyaXRhYmxlIHBhcnQgYXMgZGVzdHJveWVkIGFzIHdlbGxcbiAgaWYgKHRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICB0aGlzLl9kZXN0cm95KGVyciB8fCBudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKCFjYiAmJiBlcnIpIHtcbiAgICAgIHBuYS5uZXh0VGljayhlbWl0RXJyb3JOVCwgX3RoaXMsIGVycik7XG4gICAgICBpZiAoX3RoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICAgICAgX3RoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNiKSB7XG4gICAgICBjYihlcnIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHVuZGVzdHJveSgpIHtcbiAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLl93cml0YWJsZVN0YXRlKSB7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmVuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0RXJyb3JOVChzZWxmLCBlcnIpIHtcbiAgc2VsZi5lbWl0KCdlcnJvcicsIGVycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZXN0cm95OiBkZXN0cm95LFxuICB1bmRlc3Ryb3k6IHVuZGVzdHJveVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcmVhZGFibGUuanMnKTtcbmV4cG9ydHMuU3RyZWFtID0gZXhwb3J0cztcbmV4cG9ydHMuUmVhZGFibGUgPSBleHBvcnRzO1xuZXhwb3J0cy5Xcml0YWJsZSA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fd3JpdGFibGUuanMnKTtcbmV4cG9ydHMuRHVwbGV4ID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9kdXBsZXguanMnKTtcbmV4cG9ydHMuVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanMnKTtcbmV4cG9ydHMuUGFzc1Rocm91Z2ggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3Bhc3N0aHJvdWdoLmpzJyk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIGlzRW5jb2RpbmcgPSBCdWZmZXIuaXNFbmNvZGluZyB8fCBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgZW5jb2RpbmcgPSAnJyArIGVuY29kaW5nO1xuICBzd2l0Y2ggKGVuY29kaW5nICYmIGVuY29kaW5nLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOmNhc2UgJ3V0ZjgnOmNhc2UgJ3V0Zi04JzpjYXNlICdhc2NpaSc6Y2FzZSAnYmluYXJ5JzpjYXNlICdiYXNlNjQnOmNhc2UgJ3VjczInOmNhc2UgJ3Vjcy0yJzpjYXNlICd1dGYxNmxlJzpjYXNlICd1dGYtMTZsZSc6Y2FzZSAncmF3JzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9ub3JtYWxpemVFbmNvZGluZyhlbmMpIHtcbiAgaWYgKCFlbmMpIHJldHVybiAndXRmOCc7XG4gIHZhciByZXRyaWVkO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jKSB7XG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuICd1dGY4JztcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiAndXRmMTZsZSc7XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuICdsYXRpbjEnO1xuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBlbmM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAocmV0cmllZCkgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgICAgICAgZW5jID0gKCcnICsgZW5jKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXRyaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIERvIG5vdCBjYWNoZSBgQnVmZmVyLmlzRW5jb2RpbmdgIHdoZW4gY2hlY2tpbmcgZW5jb2RpbmcgbmFtZXMgYXMgc29tZVxuLy8gbW9kdWxlcyBtb25rZXktcGF0Y2ggaXQgdG8gc3VwcG9ydCBhZGRpdGlvbmFsIGVuY29kaW5nc1xuZnVuY3Rpb24gbm9ybWFsaXplRW5jb2RpbmcoZW5jKSB7XG4gIHZhciBuZW5jID0gX25vcm1hbGl6ZUVuY29kaW5nKGVuYyk7XG4gIGlmICh0eXBlb2YgbmVuYyAhPT0gJ3N0cmluZycgJiYgKEJ1ZmZlci5pc0VuY29kaW5nID09PSBpc0VuY29kaW5nIHx8ICFpc0VuY29kaW5nKGVuYykpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmMpO1xuICByZXR1cm4gbmVuYyB8fCBlbmM7XG59XG5cbi8vIFN0cmluZ0RlY29kZXIgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBlZmZpY2llbnRseSBzcGxpdHRpbmcgYSBzZXJpZXMgb2Zcbi8vIGJ1ZmZlcnMgaW50byBhIHNlcmllcyBvZiBKUyBzdHJpbmdzIHdpdGhvdXQgYnJlYWtpbmcgYXBhcnQgbXVsdGktYnl0ZVxuLy8gY2hhcmFjdGVycy5cbmV4cG9ydHMuU3RyaW5nRGVjb2RlciA9IFN0cmluZ0RlY29kZXI7XG5mdW5jdGlvbiBTdHJpbmdEZWNvZGVyKGVuY29kaW5nKSB7XG4gIHRoaXMuZW5jb2RpbmcgPSBub3JtYWxpemVFbmNvZGluZyhlbmNvZGluZyk7XG4gIHZhciBuYjtcbiAgc3dpdGNoICh0aGlzLmVuY29kaW5nKSB7XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICB0aGlzLnRleHQgPSB1dGYxNlRleHQ7XG4gICAgICB0aGlzLmVuZCA9IHV0ZjE2RW5kO1xuICAgICAgbmIgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndXRmOCc6XG4gICAgICB0aGlzLmZpbGxMYXN0ID0gdXRmOEZpbGxMYXN0O1xuICAgICAgbmIgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHRoaXMudGV4dCA9IGJhc2U2NFRleHQ7XG4gICAgICB0aGlzLmVuZCA9IGJhc2U2NEVuZDtcbiAgICAgIG5iID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzLndyaXRlID0gc2ltcGxlV3JpdGU7XG4gICAgICB0aGlzLmVuZCA9IHNpbXBsZUVuZDtcbiAgICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmxhc3ROZWVkID0gMDtcbiAgdGhpcy5sYXN0VG90YWwgPSAwO1xuICB0aGlzLmxhc3RDaGFyID0gQnVmZmVyLmFsbG9jVW5zYWZlKG5iKTtcbn1cblxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gIHZhciByO1xuICB2YXIgaTtcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHtcbiAgICByID0gdGhpcy5maWxsTGFzdChidWYpO1xuICAgIGlmIChyID09PSB1bmRlZmluZWQpIHJldHVybiAnJztcbiAgICBpID0gdGhpcy5sYXN0TmVlZDtcbiAgICB0aGlzLmxhc3ROZWVkID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgfVxuICBpZiAoaSA8IGJ1Zi5sZW5ndGgpIHJldHVybiByID8gciArIHRoaXMudGV4dChidWYsIGkpIDogdGhpcy50ZXh0KGJ1ZiwgaSk7XG4gIHJldHVybiByIHx8ICcnO1xufTtcblxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZW5kID0gdXRmOEVuZDtcblxuLy8gUmV0dXJucyBvbmx5IGNvbXBsZXRlIGNoYXJhY3RlcnMgaW4gYSBCdWZmZXJcblN0cmluZ0RlY29kZXIucHJvdG90eXBlLnRleHQgPSB1dGY4VGV4dDtcblxuLy8gQXR0ZW1wdHMgdG8gY29tcGxldGUgYSBwYXJ0aWFsIG5vbi1VVEYtOCBjaGFyYWN0ZXIgdXNpbmcgYnl0ZXMgZnJvbSBhIEJ1ZmZlclxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZmlsbExhc3QgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIGlmICh0aGlzLmxhc3ROZWVkIDw9IGJ1Zi5sZW5ndGgpIHtcbiAgICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQsIDAsIHRoaXMubGFzdE5lZWQpO1xuICAgIHJldHVybiB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIDAsIHRoaXMubGFzdFRvdGFsKTtcbiAgfVxuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQsIDAsIGJ1Zi5sZW5ndGgpO1xuICB0aGlzLmxhc3ROZWVkIC09IGJ1Zi5sZW5ndGg7XG59O1xuXG4vLyBDaGVja3MgdGhlIHR5cGUgb2YgYSBVVEYtOCBieXRlLCB3aGV0aGVyIGl0J3MgQVNDSUksIGEgbGVhZGluZyBieXRlLCBvciBhXG4vLyBjb250aW51YXRpb24gYnl0ZS4gSWYgYW4gaW52YWxpZCBieXRlIGlzIGRldGVjdGVkLCAtMiBpcyByZXR1cm5lZC5cbmZ1bmN0aW9uIHV0ZjhDaGVja0J5dGUoYnl0ZSkge1xuICBpZiAoYnl0ZSA8PSAweDdGKSByZXR1cm4gMDtlbHNlIGlmIChieXRlID4+IDUgPT09IDB4MDYpIHJldHVybiAyO2Vsc2UgaWYgKGJ5dGUgPj4gNCA9PT0gMHgwRSkgcmV0dXJuIDM7ZWxzZSBpZiAoYnl0ZSA+PiAzID09PSAweDFFKSByZXR1cm4gNDtcbiAgcmV0dXJuIGJ5dGUgPj4gNiA9PT0gMHgwMiA/IC0xIDogLTI7XG59XG5cbi8vIENoZWNrcyBhdCBtb3N0IDMgYnl0ZXMgYXQgdGhlIGVuZCBvZiBhIEJ1ZmZlciBpbiBvcmRlciB0byBkZXRlY3QgYW5cbi8vIGluY29tcGxldGUgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIuIFRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgKDIsIDMsIG9yIDQpXG4vLyBuZWVkZWQgdG8gY29tcGxldGUgdGhlIFVURi04IGNoYXJhY3RlciAoaWYgYXBwbGljYWJsZSkgYXJlIHJldHVybmVkLlxuZnVuY3Rpb24gdXRmOENoZWNrSW5jb21wbGV0ZShzZWxmLCBidWYsIGkpIHtcbiAgdmFyIGogPSBidWYubGVuZ3RoIC0gMTtcbiAgaWYgKGogPCBpKSByZXR1cm4gMDtcbiAgdmFyIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHNlbGYubGFzdE5lZWQgPSBuYiAtIDE7XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIGlmICgtLWogPCBpIHx8IG5iID09PSAtMikgcmV0dXJuIDA7XG4gIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHNlbGYubGFzdE5lZWQgPSBuYiAtIDI7XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIGlmICgtLWogPCBpIHx8IG5iID09PSAtMikgcmV0dXJuIDA7XG4gIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHtcbiAgICAgIGlmIChuYiA9PT0gMikgbmIgPSAwO2Vsc2Ugc2VsZi5sYXN0TmVlZCA9IG5iIC0gMztcbiAgICB9XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG4vLyBWYWxpZGF0ZXMgYXMgbWFueSBjb250aW51YXRpb24gYnl0ZXMgZm9yIGEgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIgYXNcbi8vIG5lZWRlZCBvciBhcmUgYXZhaWxhYmxlLiBJZiB3ZSBzZWUgYSBub24tY29udGludWF0aW9uIGJ5dGUgd2hlcmUgd2UgZXhwZWN0XG4vLyBvbmUsIHdlIFwicmVwbGFjZVwiIHRoZSB2YWxpZGF0ZWQgY29udGludWF0aW9uIGJ5dGVzIHdlJ3ZlIHNlZW4gc28gZmFyIHdpdGhcbi8vIGEgc2luZ2xlIFVURi04IHJlcGxhY2VtZW50IGNoYXJhY3RlciAoJ1xcdWZmZmQnKSwgdG8gbWF0Y2ggdjgncyBVVEYtOCBkZWNvZGluZ1xuLy8gYmVoYXZpb3IuIFRoZSBjb250aW51YXRpb24gYnl0ZSBjaGVjayBpcyBpbmNsdWRlZCB0aHJlZSB0aW1lcyBpbiB0aGUgY2FzZVxuLy8gd2hlcmUgYWxsIG9mIHRoZSBjb250aW51YXRpb24gYnl0ZXMgZm9yIGEgY2hhcmFjdGVyIGV4aXN0IGluIHRoZSBzYW1lIGJ1ZmZlci5cbi8vIEl0IGlzIGFsc28gZG9uZSB0aGlzIHdheSBhcyBhIHNsaWdodCBwZXJmb3JtYW5jZSBpbmNyZWFzZSBpbnN0ZWFkIG9mIHVzaW5nIGFcbi8vIGxvb3AuXG5mdW5jdGlvbiB1dGY4Q2hlY2tFeHRyYUJ5dGVzKHNlbGYsIGJ1ZiwgcCkge1xuICBpZiAoKGJ1ZlswXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgc2VsZi5sYXN0TmVlZCA9IDA7XG4gICAgcmV0dXJuICdcXHVmZmZkJztcbiAgfVxuICBpZiAoc2VsZi5sYXN0TmVlZCA+IDEgJiYgYnVmLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoKGJ1ZlsxXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgICBzZWxmLmxhc3ROZWVkID0gMTtcbiAgICAgIHJldHVybiAnXFx1ZmZmZCc7XG4gICAgfVxuICAgIGlmIChzZWxmLmxhc3ROZWVkID4gMiAmJiBidWYubGVuZ3RoID4gMikge1xuICAgICAgaWYgKChidWZbMl0gJiAweEMwKSAhPT0gMHg4MCkge1xuICAgICAgICBzZWxmLmxhc3ROZWVkID0gMjtcbiAgICAgICAgcmV0dXJuICdcXHVmZmZkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQXR0ZW1wdHMgdG8gY29tcGxldGUgYSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3RlciB1c2luZyBieXRlcyBmcm9tIGEgQnVmZmVyLlxuZnVuY3Rpb24gdXRmOEZpbGxMYXN0KGJ1Zikge1xuICB2YXIgcCA9IHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZDtcbiAgdmFyIHIgPSB1dGY4Q2hlY2tFeHRyYUJ5dGVzKHRoaXMsIGJ1ZiwgcCk7XG4gIGlmIChyICE9PSB1bmRlZmluZWQpIHJldHVybiByO1xuICBpZiAodGhpcy5sYXN0TmVlZCA8PSBidWYubGVuZ3RoKSB7XG4gICAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgcCwgMCwgdGhpcy5sYXN0TmVlZCk7XG4gICAgcmV0dXJuIHRoaXMubGFzdENoYXIudG9TdHJpbmcodGhpcy5lbmNvZGluZywgMCwgdGhpcy5sYXN0VG90YWwpO1xuICB9XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHAsIDAsIGJ1Zi5sZW5ndGgpO1xuICB0aGlzLmxhc3ROZWVkIC09IGJ1Zi5sZW5ndGg7XG59XG5cbi8vIFJldHVybnMgYWxsIGNvbXBsZXRlIFVURi04IGNoYXJhY3RlcnMgaW4gYSBCdWZmZXIuIElmIHRoZSBCdWZmZXIgZW5kZWQgb24gYVxuLy8gcGFydGlhbCBjaGFyYWN0ZXIsIHRoZSBjaGFyYWN0ZXIncyBieXRlcyBhcmUgYnVmZmVyZWQgdW50aWwgdGhlIHJlcXVpcmVkXG4vLyBudW1iZXIgb2YgYnl0ZXMgYXJlIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIHV0ZjhUZXh0KGJ1ZiwgaSkge1xuICB2YXIgdG90YWwgPSB1dGY4Q2hlY2tJbmNvbXBsZXRlKHRoaXMsIGJ1ZiwgaSk7XG4gIGlmICghdGhpcy5sYXN0TmVlZCkgcmV0dXJuIGJ1Zi50b1N0cmluZygndXRmOCcsIGkpO1xuICB0aGlzLmxhc3RUb3RhbCA9IHRvdGFsO1xuICB2YXIgZW5kID0gYnVmLmxlbmd0aCAtICh0b3RhbCAtIHRoaXMubGFzdE5lZWQpO1xuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCAwLCBlbmQpO1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGY4JywgaSwgZW5kKTtcbn1cblxuLy8gRm9yIFVURi04LCBhIHJlcGxhY2VtZW50IGNoYXJhY3RlciBpcyBhZGRlZCB3aGVuIGVuZGluZyBvbiBhIHBhcnRpYWxcbi8vIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHV0ZjhFbmQoYnVmKSB7XG4gIHZhciByID0gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHJldHVybiByICsgJ1xcdWZmZmQnO1xuICByZXR1cm4gcjtcbn1cblxuLy8gVVRGLTE2TEUgdHlwaWNhbGx5IG5lZWRzIHR3byBieXRlcyBwZXIgY2hhcmFjdGVyLCBidXQgZXZlbiBpZiB3ZSBoYXZlIGFuIGV2ZW5cbi8vIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgd2UgZW5kIG9uIGEgbGVhZGluZy9oaWdoXG4vLyBzdXJyb2dhdGUuIEluIHRoYXQgY2FzZSwgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgbmV4dCB0d28gYnl0ZXMgaW4gb3JkZXIgdG9cbi8vIGRlY29kZSB0aGUgbGFzdCBjaGFyYWN0ZXIgcHJvcGVybHkuXG5mdW5jdGlvbiB1dGYxNlRleHQoYnVmLCBpKSB7XG4gIGlmICgoYnVmLmxlbmd0aCAtIGkpICUgMiA9PT0gMCkge1xuICAgIHZhciByID0gYnVmLnRvU3RyaW5nKCd1dGYxNmxlJywgaSk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHZhciBjID0gci5jaGFyQ29kZUF0KHIubGVuZ3RoIC0gMSk7XG4gICAgICBpZiAoYyA+PSAweEQ4MDAgJiYgYyA8PSAweERCRkYpIHtcbiAgICAgICAgdGhpcy5sYXN0TmVlZCA9IDI7XG4gICAgICAgIHRoaXMubGFzdFRvdGFsID0gNDtcbiAgICAgICAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMl07XG4gICAgICAgIHRoaXMubGFzdENoYXJbMV0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gci5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIHRoaXMubGFzdE5lZWQgPSAxO1xuICB0aGlzLmxhc3RUb3RhbCA9IDI7XG4gIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGYxNmxlJywgaSwgYnVmLmxlbmd0aCAtIDEpO1xufVxuXG4vLyBGb3IgVVRGLTE2TEUgd2UgZG8gbm90IGV4cGxpY2l0bHkgYXBwZW5kIHNwZWNpYWwgcmVwbGFjZW1lbnQgY2hhcmFjdGVycyBpZiB3ZVxuLy8gZW5kIG9uIGEgcGFydGlhbCBjaGFyYWN0ZXIsIHdlIHNpbXBseSBsZXQgdjggaGFuZGxlIHRoYXQuXG5mdW5jdGlvbiB1dGYxNkVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkge1xuICAgIHZhciBlbmQgPSB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQ7XG4gICAgcmV0dXJuIHIgKyB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKCd1dGYxNmxlJywgMCwgZW5kKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gYmFzZTY0VGV4dChidWYsIGkpIHtcbiAgdmFyIG4gPSAoYnVmLmxlbmd0aCAtIGkpICUgMztcbiAgaWYgKG4gPT09IDApIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcsIGkpO1xuICB0aGlzLmxhc3ROZWVkID0gMyAtIG47XG4gIHRoaXMubGFzdFRvdGFsID0gMztcbiAgaWYgKG4gPT09IDEpIHtcbiAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAyXTtcbiAgICB0aGlzLmxhc3RDaGFyWzFdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgfVxuICByZXR1cm4gYnVmLnRvU3RyaW5nKCdiYXNlNjQnLCBpLCBidWYubGVuZ3RoIC0gbik7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NEVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkgcmV0dXJuIHIgKyB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKCdiYXNlNjQnLCAwLCAzIC0gdGhpcy5sYXN0TmVlZCk7XG4gIHJldHVybiByO1xufVxuXG4vLyBQYXNzIGJ5dGVzIG9uIHRocm91Z2ggZm9yIHNpbmdsZS1ieXRlIGVuY29kaW5ncyAoZS5nLiBhc2NpaSwgbGF0aW4xLCBoZXgpXG5mdW5jdGlvbiBzaW1wbGVXcml0ZShidWYpIHtcbiAgcmV0dXJuIGJ1Zi50b1N0cmluZyh0aGlzLmVuY29kaW5nKTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlRW5kKGJ1Zikge1xuICByZXR1cm4gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbn0iLCJ2YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtJykuVHJhbnNmb3JtXG4gICwgaW5oZXJpdHMgID0gcmVxdWlyZSgndXRpbCcpLmluaGVyaXRzXG4gICwgeHRlbmQgICAgID0gcmVxdWlyZSgneHRlbmQnKVxuXG5mdW5jdGlvbiBEZXN0cm95YWJsZVRyYW5zZm9ybShvcHRzKSB7XG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMsIG9wdHMpXG4gIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlXG59XG5cbmluaGVyaXRzKERlc3Ryb3lhYmxlVHJhbnNmb3JtLCBUcmFuc2Zvcm0pXG5cbkRlc3Ryb3lhYmxlVHJhbnNmb3JtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZXJyKSB7XG4gIGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVyblxuICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlXG4gIFxuICB2YXIgc2VsZiA9IHRoaXNcbiAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAoZXJyKVxuICAgICAgc2VsZi5lbWl0KCdlcnJvcicsIGVycilcbiAgICBzZWxmLmVtaXQoJ2Nsb3NlJylcbiAgfSlcbn1cblxuLy8gYSBub29wIF90cmFuc2Zvcm0gZnVuY3Rpb25cbmZ1bmN0aW9uIG5vb3AgKGNodW5rLCBlbmMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKG51bGwsIGNodW5rKVxufVxuXG5cbi8vIGNyZWF0ZSBhIG5ldyBleHBvcnQgZnVuY3Rpb24sIHVzZWQgYnkgYm90aCB0aGUgbWFpbiBleHBvcnQgYW5kXG4vLyB0aGUgLmN0b3IgZXhwb3J0LCBjb250YWlucyBjb21tb24gbG9naWMgZm9yIGRlYWxpbmcgd2l0aCBhcmd1bWVudHNcbmZ1bmN0aW9uIHRocm91Z2gyIChjb25zdHJ1Y3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZsdXNoICAgICA9IHRyYW5zZm9ybVxuICAgICAgdHJhbnNmb3JtID0gb3B0aW9uc1xuICAgICAgb3B0aW9ucyAgID0ge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRyYW5zZm9ybSAhPSAnZnVuY3Rpb24nKVxuICAgICAgdHJhbnNmb3JtID0gbm9vcFxuXG4gICAgaWYgKHR5cGVvZiBmbHVzaCAhPSAnZnVuY3Rpb24nKVxuICAgICAgZmx1c2ggPSBudWxsXG5cbiAgICByZXR1cm4gY29uc3RydWN0KG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpXG4gIH1cbn1cblxuXG4vLyBtYWluIGV4cG9ydCwganVzdCBtYWtlIG1lIGEgdHJhbnNmb3JtIHN0cmVhbSFcbm1vZHVsZS5leHBvcnRzID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgdmFyIHQyID0gbmV3IERlc3Ryb3lhYmxlVHJhbnNmb3JtKG9wdGlvbnMpXG5cbiAgdDIuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXG4gIGlmIChmbHVzaClcbiAgICB0Mi5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiB0MlxufSlcblxuXG4vLyBtYWtlIG1lIGEgcmV1c2FibGUgcHJvdG90eXBlIHRoYXQgSSBjYW4gYG5ld2AsIG9yIGltcGxpY2l0bHkgYG5ld2Bcbi8vIHdpdGggYSBjb25zdHJ1Y3RvciBjYWxsXG5tb2R1bGUuZXhwb3J0cy5jdG9yID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgZnVuY3Rpb24gVGhyb3VnaDIgKG92ZXJyaWRlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRocm91Z2gyKSlcbiAgICAgIHJldHVybiBuZXcgVGhyb3VnaDIob3ZlcnJpZGUpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSB4dGVuZChvcHRpb25zLCBvdmVycmlkZSlcblxuICAgIERlc3Ryb3lhYmxlVHJhbnNmb3JtLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgaW5oZXJpdHMoVGhyb3VnaDIsIERlc3Ryb3lhYmxlVHJhbnNmb3JtKVxuXG4gIFRocm91Z2gyLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIFRocm91Z2gyLnByb3RvdHlwZS5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiBUaHJvdWdoMlxufSlcblxuXG5tb2R1bGUuZXhwb3J0cy5vYmogPSB0aHJvdWdoMihmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICB2YXIgdDIgPSBuZXcgRGVzdHJveWFibGVUcmFuc2Zvcm0oeHRlbmQoeyBvYmplY3RNb2RlOiB0cnVlLCBoaWdoV2F0ZXJNYXJrOiAxNiB9LCBvcHRpb25zKSlcblxuICB0Mi5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIHQyLl9mbHVzaCA9IGZsdXNoXG5cbiAgcmV0dXJuIHQyXG59KVxuIiwiLy8gUmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgd3JhcHBlZCBjYWxsYmFja1xuLy8gVGhlIHdyYXBwZXIgZnVuY3Rpb24gc2hvdWxkIGRvIHNvbWUgc3R1ZmYsIGFuZCByZXR1cm4gYVxuLy8gcHJlc3VtYWJseSBkaWZmZXJlbnQgY2FsbGJhY2sgZnVuY3Rpb24uXG4vLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBvd24gcHJvcGVydGllcyBhcmUgcmV0YWluZWQsIHNvIHRoYXRcbi8vIGRlY29yYXRpb25zIGFuZCBzdWNoIGFyZSBub3QgbG9zdCBhbG9uZyB0aGUgd2F5LlxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcHlcbmZ1bmN0aW9uIHdyYXBweSAoZm4sIGNiKSB7XG4gIGlmIChmbiAmJiBjYikgcmV0dXJuIHdyYXBweShmbikoY2IpXG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduZWVkIHdyYXBwZXIgZnVuY3Rpb24nKVxuXG4gIE9iamVjdC5rZXlzKGZuKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgd3JhcHBlcltrXSA9IGZuW2tdXG4gIH0pXG5cbiAgcmV0dXJuIHdyYXBwZXJcblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIHZhciByZXQgPSBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICAgIHZhciBjYiA9IGFyZ3NbYXJncy5sZW5ndGgtMV1cbiAgICBpZiAodHlwZW9mIHJldCA9PT0gJ2Z1bmN0aW9uJyAmJiByZXQgIT09IGNiKSB7XG4gICAgICBPYmplY3Qua2V5cyhjYikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXRba10gPSBjYltrXVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJDb21wb3NlZFN0b3JlIiwiT2JzZXJ2YWJsZVN0b3JlXzEiLCJPYnNlcnZhYmxlU3RvcmUiLCJjb25zdHJ1Y3RvciIsImNoaWxkcmVuIiwic3VwZXIiLCJ0aGlzIiwiX2NoaWxkcmVuIiwia2V5cyIsImZvckVhY2giLCJjaGlsZEtleSIsImNoaWxkIiwiX2FkZENoaWxkIiwidXBkYXRlRnJvbUNoaWxkIiwiY2hpbGRWYWx1ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJwdXRTdGF0ZSIsInN1YnNjcmliZSIsIk1lcmdlZFN0b3JlIiwiX3VwZGF0ZVdob2xlU3RhdGUiLCJjaGlsZFN0YXRlcyIsIm1hcCIsImFzc2lnbiIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJzYWZlX2V2ZW50X2VtaXR0ZXJfMSIsImRlZmF1bHQiLCJpbml0U3RhdGUiLCJfc3RhdGUiLCJfZ2V0U3RhdGUiLCJuZXdTdGF0ZSIsIl9wdXRTdGF0ZSIsImVtaXQiLCJ1cGRhdGVTdGF0ZSIsInBhcnRpYWxTdGF0ZSIsImhhbmRsZXIiLCJvbiIsInVuc3Vic2NyaWJlIiwicmVtb3ZlTGlzdGVuZXIiLCJzdG9yZUFzU3RyZWFtIiwic3RyZWFtXzEiLCJPYnNlcnZhYmxlU3RvcmVTdHJlYW0iLCJEdXBsZXgiLCJvYnNTdG9yZSIsIm9iamVjdE1vZGUiLCJyZXN1bWUiLCJwdXNoIiwicGlwZSIsImRlc3QiLCJvcHRpb25zIiwicmVzdWx0Iiwid3JpdGUiLCJfd3JpdGUiLCJjaHVuayIsIl9lbmNvZGluZyIsImNhbGxiYWNrIiwiX3JlYWQiLCJfc2l6ZSIsIl9kZXN0cm95IiwiZXJyIiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19leHBvcnRTdGFyIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInN0b3JlVHJhbnNmb3JtU3RyZWFtIiwidGhyb3VnaDJfMSIsInN5bmNUcmFuc2Zvcm1GbiIsIm9iaiIsImNiIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJzb3VyY2VLZXlzIiwia2V5IiwiaSIsImxlbmd0aCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIkVUSEVSRVVNX05FVFdPUksiLCJhYmkiLCJjb25zdGFudCIsImlucHV0cyIsIm5hbWUiLCJvdXRwdXRzIiwiaW50ZXJuYWxUeXBlIiwidHlwZSIsInBheWFibGUiLCJzdGF0ZU11dGFiaWxpdHkiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwiZG9uZSIsImFkb3B0IiwidGhlbiIsImFwcGx5IiwiTm9kZURldGFpbE1hbmFnZXIiLCJuZXR3b3JrIiwicHJveHlBZGRyZXNzIiwidXJsIiwiX2N1cnJlbnRFcG9jaCIsIl90b3J1c05vZGVFbmRwb2ludHMiLCJfdG9ydXNOb2RlUHViIiwiWCIsIlkiLCJfdG9ydXNJbmRleGVzIiwiX25ldHdvcmsiLCJVUkwiLCJocmVmIiwiXyIsIm5vZGVMaXN0Q29udHJhY3QiLCJub2RlTGlzdEFkZHJlc3MiLCJ1cGRhdGVkIiwiX25vZGVEZXRhaWxzIiwiY3VycmVudEVwb2NoIiwidG9ydXNOb2RlRW5kcG9pbnRzIiwidG9ydXNOb2RlUHViIiwidG9ydXNJbmRleGVzIiwiZ2V0Q3VycmVudEVwb2NoIiwibWV0aG9kcyIsImdldEVwb2NoSW5mbyIsImVwb2NoIiwiZ2V0Tm9kZUVuZHBvaW50Iiwibm9kZUV0aEFkZHJlc3MiLCJnZXROb2RlRGV0YWlscyIsInNraXAiLCJza2lwUG9zdEVwb2NoQ2hlY2siLCJsYXRlc3RFcG9jaCIsImxhdGVzdEVwb2NoSW5mbyIsImluZGV4ZXMiLCJub2RlTGlzdCIsInBvcyIsIm5vZGVFbmRwb2ludFJlcXVlc3RzIiwibm9kZUVuZFBvaW50cyIsImFsbCIsInVwZGF0ZWRFbmRwb2ludHMiLCJ1cGRhdGVkTm9kZVB1YiIsImluZGV4IiwiZW5kUG9pbnRFbGVtZW50IiwiZW5kcG9pbnQiLCJkZWNsYXJlZElwIiwic3BsaXQiLCJ0b0hleCIsInB1Ykt4IiwicmVwbGFjZSIsInB1Ykt5Iiwib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5Iiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImxvZyIsInNldExldmVsIiwibGV2ZWxzIiwiYXBpS2V5IiwiZW1iZWRIb3N0Iiwic2V0RW1iZWRIb3N0IiwiZW1iZWRIb3N0XyIsInNldEFQSUtleSIsImFwaUtleV8iLCJnZXRBcGlLZXlIZWFkZXJzIiwiaGVhZGVycyIsImRlYnVnTG9nUmVzcG9uc2UiLCJyZXNwb25zZSIsImluZm8iLCJjb25jYXQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicHJvbWlzZVRpbWVvdXQiLCJtcyIsInByb21pc2UiLCJ0aW1lb3V0IiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiRXJyb3IiLCJyYWNlIiwiYXN5bmMiLCJvcHRpb25zXyIsImN1c3RvbU9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsIm1vZGUiLCJ1c2VBUElLZXkiLCJtZXRob2QiLCJmZXRjaCIsIm9rIiwianNvbiIsInBvc3QiLCJkYXRhIiwiaXNVcmxFbmNvZGVkRGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2VuZXJhdGVKc29uUlBDT2JqZWN0IiwicGFyYW1ldGVycyIsImpzb25ycGMiLCJwYXJhbXMiLCJub29wIiwiQUNLIiwiQmFzZVBvc3RNZXNzYWdlU3RyZWFtIiwiX3JlZiIsInRhcmdldFdpbmRvdyIsIndpbmRvdyIsInRhcmdldE9yaWdpbiIsIl9pbml0IiwiX2hhdmVTeW4iLCJfbmFtZSIsIl90YXJnZXQiLCJfdGFyZ2V0V2luZG93IiwiX3RhcmdldE9yaWdpbiIsIl9vbk1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJiaW5kIiwiX3N5bkludGVydmFsSWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRTaGFrZSIsIl9icmVhayIsImNvcmsiLCJfb25EYXRhIiwidW5jb3JrIiwiX3Bvc3RNZXNzYWdlIiwib3JpZ2luQ29uc3RyYWludCIsInBvc3RNZXNzYWdlIiwiZXZlbnQiLCJtZXNzYWdlIiwib3JpZ2luIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNhZmVBcHBseSIsImNvbnRleHQiLCJhcmdzIiwiUmVmbGVjdCIsIlNhZmVFdmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJkb0Vycm9yIiwiZXZlbnRzIiwiX2V2ZW50cyIsImVycm9yIiwiX2xlbiIsIkFycmF5IiwiX2tleSIsImVyIiwibGVuIiwibGlzdGVuZXJzIiwiYXJyIiwibiIsImNvcHkiLCJhcnJheUNsb25lIiwiU2VyaWFsaXphYmxlRXJyb3IiLCJjb2RlIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidG9TdHJpbmciLCJzdGFjayIsInNlcmlhbGl6ZUVycm9yIiwiY3JlYXRlU3RyZWFtTWlkZGxld2FyZSIsImlkTWFwIiwic3RyZWFtIiwicmVhZCIsInJlcyIsInByb2Nlc3NOb3RpZmljYXRpb24iLCJlbmQiLCJwcm9jZXNzUmVzcG9uc2UiLCJfZXJyIiwibWlkZGxld2FyZSIsInJlcSIsImNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlIiwiX2VuZCIsIm9yaWdpbmFsSWQiLCJuZXdJZCIsInJhbmRvbUlkIiwib3duS2V5cyQxIiwiSlJQQ0VuZ2luZSIsIl9taWRkbGV3YXJlIiwic3RhdGljIiwibWlkZGxld2FyZVN0YWNrIiwicmV0dXJuSGFuZGxlcnMiLCJpc0NvbXBsZXRlIiwiX3J1bk1pZGRsZXdhcmUiLCJyZXZlcnNlIiwicmV0dXJuSGFuZGxlciIsImhhbmRsZXJzIiwiaGFuZGxlIiwiaXNBcnJheSIsIl9oYW5kbGVCYXRjaCIsIl9oYW5kbGUiLCJfcHJvbWlzZUhhbmRsZSIsImFzTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVFcnJvciIsIl9ydW5BbGxNaWRkbGV3YXJlIiwiX3J1blJldHVybkhhbmRsZXJzIiwiaGFuZGxlckNhbGxiYWNrIiwicmVxcyIsInJlc3BvbnNlcyIsImNhbGxlclJlcSIsIl9vYmplY3RTcHJlYWQkMSIsIl9wcm9jZXNzUmVxdWVzdCIsIl9lcnJvciIsIl9jaGVja0ZvckNvbXBsZXRpb24iLCJTdWJzdHJlYW0iLCJwYXJlbnQiLCJfcGFyZW50IiwiSUdOT1JFX1NVQlNUUkVBTSIsIlN5bWJvbCIsIk9iamVjdE11bHRpcGxleCIsIl9zdWJzdHJlYW1zIiwiY3JlYXRlU3RyZWFtIiwic3Vic3RyZWFtIiwiX2NiIiwicmVhZGFibGUiLCJhbnlTdHJlYW1FbmQiLCJkZXN0cm95IiwiaWdub3JlU3RyZWFtIiwiY29uc29sZSIsIndhcm4iLCJfdHlwZW9mIiwiaXRlcmF0b3IiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsImFyZyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3NldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIlJlZmVyZW5jZUVycm9yIiwiX2dldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJfY29uc3RydWN0IiwiUGFyZW50IiwiQ2xhc3MiLCJhIiwiRnVuY3Rpb24iLCJfd3JhcE5hdGl2ZVN1cGVyIiwiX2NhY2hlIiwiTWFwIiwiaGFzIiwic2V0IiwiV3JhcHBlciIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyMiIsIl90b0NvbnN1bWFibGVBcnJheSIsIml0ZXIiLCJmcm9tIiwibWluTGVuIiwic2xpY2UiLCJ0ZXN0IiwiX2NyZWF0ZVN1cGVyJDEiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSIsIlN1cGVyIiwiTmV3VGFyZ2V0IiwiZGlzYWJsZUFsbCIsIlNvbWVFcnJvciIsIl9FcnJvciIsIl9zdXBlciIsIl90aGlzIiwiZXJyb3JzIiwicHJlZGljYXRlIiwiU29tZSIsInByb21pc2VzIiwiZmluaXNoZWRDb3VudCIsInNoYXJlZFN0YXRlIiwicmVzb2x2ZWQiLCJlcnJvckFyciIsImZpbGwiLCJyZXN1bHRBcnIiLCJwcmVkaWNhdGVFcnJvciIsIngiLCJyZXNwIiwiY2F0Y2giLCJmaW5hbGx5IiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwieiIsIl9lcnJvciRkYXRhIiwiX3JlZjIiLCJzdGFydHNXaXRoIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJtc2ciLCJpdCIsImpvaW4iLCJfcHJlZGljYXRlRXJyb3IiLCJfY3JlYXRlU3VwZXIiLCJHZXRPclNldE5vbmNlRXJyb3IiLCJrQ29tYmluYXRpb25zIiwicyIsImN1ciIsImNvbWJzIiwidGFpbENvbWJzIiwiaiIsInRocmVzaG9sZFNhbWUiLCJ0IiwiaGFzaE1hcCIsImtleUxvb2t1cCIsIl9jYWxsZWUiLCJlbmRwb2ludHMiLCJ2ZXJpZmllciIsInZlcmlmaWVySWQiLCJsb29rdXBQcm9taXNlcyIsIl9jb250ZXh0IiwicHJldiIsInZlcmlmaWVyX2lkIiwiYWJydXB0IiwibG9va3VwUmVzdWx0cyIsImxvb2t1cFNoYXJlcyIsIngxIiwiZXJyb3JSZXN1bHQiLCJ4MiIsImtleVJlc3VsdCIsIngzIiwic3RvcCIsIl94IiwiX3gyIiwiX3gzIiwid2FpdEtleUxvb2t1cCIsImtleUFzc2lnbiIsIl9jYWxsZWUyIiwidG9ydXNOb2RlUHVicyIsImxhc3RQb2ludCIsImZpcnN0UG9pbnQiLCJub2RlTnVtIiwiaW5pdGlhbFBvaW50Iiwic2lnbmVkRGF0YSIsIl9jb250ZXh0MiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1YktleVgiLCJwdWJLZXlZIiwic2VudCIsInQwIiwiaW5jbHVkZXMiLCJfeDQiLCJfeDUiLCJfeDYiLCJfeDciLCJfeDgiLCJfeDkiLCJUb3J1cyIsIl9yZWYkZW5hYmxlT25lS2V5IiwiZW5hYmxlT25lS2V5IiwiX3JlZiRtZXRhZGF0YUhvc3QiLCJtZXRhZGF0YUhvc3QiLCJfcmVmJGFsbG93SG9zdCIsImFsbG93SG9zdCIsIl9yZWYkc2VydmVyVGltZU9mZnNldCIsInNlcnZlclRpbWVPZmZzZXQiLCJlYyIsIl9nZXRVc2VyVHlwZUFuZEFkZHJlc3MiLCJkb2VzS2V5QXNzaWduIiwiX3JlZjMiLCJpc05ld0tleSIsImZpbmFsS2V5UmVzdWx0IiwiYXNzaWduUmVzdWx0IiwiX2ZpbmFsS2V5UmVzdWx0JGtleXMkIiwidHlwZU9mVXNlciIsIm5vbmNlIiwicHViTm9uY2UiLCJtb2RpZmllZFB1YktleSIsInVwZ3JhZGVkIiwiX3lpZWxkJHRoaXMkZ2V0T3JTZXROIiwiZmluYWxYIiwiZmluYWxZIiwiYWRkcmVzcyIsIl9hcmdzIiwidDEiLCJwdWJfa2V5X1giLCJwdWJfa2V5X1kiLCJnZXRPclNldE5vbmNlIiwidDIiLCJrZXlGcm9tUHVibGljIiwieSIsImdldFB1YmxpYyIsImFkZCIsImtleUZyb21Qcml2YXRlIiwiZ2V0WCIsImdldFkiLCJnZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5IiwiX3NldEN1c3RvbUtleSIsIl9yZWY0IiwicHJpdktleUhleCIsIm1ldGFkYXRhTm9uY2UiLCJ0b3J1c0tleUhleCIsImN1c3RvbUtleUhleCIsInRvcnVzS2V5IiwicHJpdktleSIsImN1c3RvbUtleSIsIm5ld01ldGFkYXRhTm9uY2UiLCJzdWIiLCJ1bW9kIiwiY3VydmUiLCJnZW5lcmF0ZU1ldGFkYXRhUGFyYW1zIiwic2V0TWV0YWRhdGEiLCJfcmV0cmlldmVTaGFyZXMiLCJfY2FsbGVlNSIsInZlcmlmaWVyUGFyYW1zIiwiaWRUb2tlbiIsImV4dHJhUGFyYW1zIiwicHJvbWlzZUFyciIsInRtcEtleSIsInB1YktleSIsInRva2VuQ29tbWl0bWVudCIsIl9hcmdzNSIsIl9jb250ZXh0NSIsImtlY2NhazI1NiIsIm1lc3NhZ2VwcmVmaXgiLCJ0b2tlbmNvbW1pdG1lbnQiLCJ0ZW1wcHVieCIsInRlbXBwdWJ5IiwidmVyaWZpZXJpZGVudGlmaWVyIiwicHJvbWlzZUFyclJlcXVlc3QiLCJub2RlU2lncyIsIl9pIiwiX2kyIiwiX3AiLCJlbmNyeXB0ZWQiLCJpdGVtIiwiaWR0b2tlbiIsIm5vZGVzaWduYXR1cmVzIiwiX3JlZjUiLCJfY2FsbGVlMyIsInNoYXJlUmVzcG9uc2VzIiwiY29tcGxldGVkUmVxdWVzdHMiLCJ0aHJlc2hvbGRQdWJsaWNLZXkiLCJzaGFyZVByb21pc2VzIiwibm9kZUluZGV4IiwiX2kzIiwibWV0YWRhdGEiLCJzaGFyZXNSZXNvbHZlZCIsImRlY3J5cHRlZFNoYXJlcyIsImFsbENvbWJpcyIsInByaXZhdGVLZXkiLCJfbG9vcCIsIl9jb250ZXh0MyIsIlB1YmxpY0tleSIsInNvcnQiLCJiIiwiSW5kZXgiLCJjbXAiLCJNZXRhZGF0YSIsImVwaGVtUHVibGljS2V5IiwiaXYiLCJtYWMiLCJjaXBoZXJ0ZXh0IiwiYXRvYiIsIlNoYXJlIiwicGFkU3RhcnQiLCJkZWJ1ZyIsImN1cnIiLCJjdXJyZW50Q29tYmkiLCJjdXJyZW50Q29tYmlTaGFyZXMiLCJ2Iiwic2hhcmVzIiwiaW5kaWNlcyIsImRlcml2ZWRQcml2YXRlS2V5IiwibGFncmFuZ2VJbnRlcnBvbGF0aW9uIiwiZGVjcnlwdGVkUHViS2V5IiwiZGVjcnlwdGVkUHViS2V5WCIsImRlY3J5cHRlZFB1YktleVkiLCJfeDEwIiwiX3gxMSIsIl9yZWY2IiwiX2NhbGxlZTQiLCJyZXR1cm5lZEtleSIsIl95aWVsZCRfdGhpcyRnZXROb25jZSIsImV0aEFkZHJlc3MiLCJfY29udGV4dDQiLCJnZXROb25jZSIsImdldE1ldGFkYXRhIiwiZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXkiLCJfeDEyIiwiX2dldE1ldGFkYXRhIiwiX2NhbGxlZTYiLCJtZXRhZGF0YVJlc3BvbnNlIiwiX2NvbnRleHQ2IiwiX3gxMyIsIl94MTQiLCJzZXREYXRhIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInNpZyIsInNpZ24iLCJzZXRfZGF0YSIsInNpZ25hdHVyZSIsInIiLCJfc2V0TWV0YWRhdGEiLCJfY2FsbGVlNyIsIl9jb250ZXh0NyIsIl94MTUiLCJfeDE2Iiwic2VjcmV0IiwidXBwZXIiLCJsb3dlciIsIm11bCIsIm5lZyIsInRlbXAiLCJkZWx0YSIsImludm0iLCJwdWJsaWNLZXkiLCJlbmNvZGUiLCJldGhBZGRyZXNzTG93ZXIiLCJ0b0NoZWNrc3VtQWRkcmVzcyIsInB1YmxpY0tleVgiLCJwdWJsaWNLZXlZIiwiX2dldFB1YmxpY0FkZHJlc3MiLCJfY2FsbGVlOCIsIl9yZWY3IiwiaXNFeHRlbmRlZCIsIl9yZWY4IiwiX25vbmNlIiwiX2ZpbmFsS2V5UmVzdWx0JGtleXMkMiIsIl95aWVsZCR0aGlzJGdldE9yU2V0TjIiLCJfYXJnczgiLCJfY29udGV4dDgiLCJfeDE3IiwiX3gxOCIsIl94MTkiLCJfZ2V0T3JTZXROb25jZSIsIl9jYWxsZWU5IiwiZ2V0T25seSIsIl9hcmdzOSIsIl9jb250ZXh0OSIsIl94MjAiLCJfeDIxIiwiX3gyMiIsIl9nZXROb25jZSIsIl9jYWxsZWUxMCIsIl9jb250ZXh0MTAiLCJfeDIzIiwiX3gyNCIsIl94MjUiLCJwcml2S2V5Qk4iLCJub25jZUJOIiwiZW5hYmxlQWxsIiwiaXNTdHJlYW0iLCJpc0R1cGxleFN0cmVhbSIsIl93cml0YWJsZVN0YXRlIiwiaXNXcml0YWJsZVN0cmVhbSIsIl9yZWFkYWJsZVN0YXRlIiwiaXNSZWFkYWJsZVN0cmVhbSIsIkxPR0lOX1BST1ZJREVSIiwiV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVAiLCJUT1JVU19CVUlMRF9FTlYiLCJQUk9EVUNUSU9OIiwiREVWRUxPUE1FTlQiLCJCSU5BTkNFIiwiVEVTVElORyIsIkxSQyIsIkJFVEEiLCJCVVRUT05fUE9TSVRJT04iLCJCT1RUT01fTEVGVCIsIlRPUF9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX1JJR0hUIiwiY29uZmlndXJhdGlvbiIsInN1cHBvcnRlZFZlcmlmaWVyTGlzdCIsInBheW1lbnRQcm92aWRlcnMiLCJsaW5lMSIsImxpbmUyIiwibGluZTMiLCJzdXBwb3J0UGFnZSIsIm1pbk9yZGVyVmFsdWUiLCJtYXhPcmRlclZhbHVlIiwidmFsaWRDdXJyZW5jaWVzIiwidmFsaWRDcnlwdG9DdXJyZW5jaWVzIiwiaW5jbHVkZUZlZXMiLCJlbmZvcmNlTWF4Iiwic2VsbCIsImFwaSIsInRyYW5zbGF0aW9ucyIsImVuIiwiZW1iZWQiLCJjb250aW51ZSIsImFjdGlvblJlcXVpcmVkIiwicGVuZGluZ0FjdGlvbiIsImNvb2tpZXNSZXF1aXJlZCIsImVuYWJsZUNvb2tpZXMiLCJjbGlja0hlcmUiLCJkZSIsImphIiwia28iLCJ6aCIsInByb2RUb3J1c1VybCIsImxvY2FsU3RvcmFnZUtleSIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJydW5PbkxvYWQiLCJkb2N1bWVudCIsImh0bWxUb0VsZW1lbnQiLCJodG1sIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwidHJpbW1lZEh0bWwiLCJ0cmltIiwiaW5uZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJoYW5kbGVTdHJlYW0iLCJldmVudE5hbWUiLCJoYW5kbGVyV3JhcHBlciIsImRvY3VtZW50UmVhZHkiLCJyZWFkeVN0YXRlIiwiaGFuZGxlckFyZ3MiLCJoYW5kbGVFdmVudCIsIm1lc3NhZ2VzIiwiZGlzY29ubmVjdGVkIiwicGVybWFuZW50bHlEaXNjb25uZWN0ZWQiLCJzZW5kU2l0ZU1ldGFkYXRhIiwidW5zdXBwb3J0ZWRTeW5jIiwiaW52YWxpZER1cGxleFN0cmVhbSIsImludmFsaWRPcHRpb25zIiwibWF4RXZlbnRMaXN0ZW5lcnMiLCJzaG91bGRTZW5kTWV0YWRhdGEiLCJpbnZhbGlkUmVxdWVzdEFyZ3MiLCJpbnZhbGlkUmVxdWVzdE1ldGhvZCIsImludmFsaWRSZXF1ZXN0UGFyYW1zIiwiaW52YWxpZExvZ2dlck9iamVjdCIsImludmFsaWRMb2dnZXJNZXRob2QiLCJjb25uZWN0ZWQiLCJjaGFpbklkIiwid2FybmluZ3MiLCJlbmFibGVEZXByZWNhdGlvbiIsInNlbmREZXByZWNhdGlvbiIsImNsb3NlIiwibmV0d29ya0NoYW5nZWQiLCJub3RpZmljYXRpb24iLCJwdWJsaWNDb25maWdTdG9yZSIsImxvZ1N0cmVhbURpc2Nvbm5lY3RXYXJuaW5nIiwicmVtb3RlTGFiZWwiLCJlbWl0dGVyIiwid2FybmluZ01zZyIsImxpc3RlbmVyQ291bnQiLCJnZXRQcmVvcGVuSW5zdGFuY2VJZCIsImdldFRvcnVzVXJsIiwiYnVpbGRFbnYiLCJpbnRlZ3JpdHkiLCJ0b3J1c1VybCIsImxvZ0xldmVsIiwidmVyc2lvbiIsInZlcnNpb25Vc2VkIiwiZ2V0VXNlckxhbmd1YWdlIiwidXNlckxhbmd1YWdlIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJ1c2VyTGFuZ3VhZ2VzIiwiRU1JVFRFRF9OT1RJRklDQVRJT05TIiwiTk9PUCIsIkZFQVRVUkVTX1BST1ZJREVSX0NIQU5HRV9XSU5ET1ciLCJGRUFUVVJFU19DT05GSVJNX1dJTkRPVyIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJ1bndyYXBSZXN1bHQiLCJUb3J1c0lucGFnZVByb3ZpZGVyIiwiY29ubmVjdGlvblN0cmVhbSIsImpzb25ScGNTdHJlYW1OYW1lIiwiZW5hYmxlIiwiZXhwZXJpbWVudGFsTWV0aG9kcyIsInNlbmQiLCJpc1RvcnVzIiwic2V0TWF4TGlzdGVuZXJzIiwiX2RlZmF1bHRTdGF0ZSIsInNlbGVjdGVkQWRkcmVzcyIsIm5ldHdvcmtWZXJzaW9uIiwiX2hhbmRsZUFjY291bnRzQ2hhbmdlZCIsIl9oYW5kbGVDaGFpbkNoYW5nZWQiLCJfaGFuZGxlVW5sb2NrU3RhdGVDaGFuZ2VkIiwiX2hhbmRsZUNvbm5lY3QiLCJfaGFuZGxlRGlzY29ubmVjdCIsIl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0IiwiX3NlbmRTeW5jIiwiX3JwY1JlcXVlc3QiLCJfd2Fybk9mRGVwcmVjYXRpb24iLCJfaW5pdGlhbGl6ZVN0YXRlIiwicmVxdWVzdCIsInNlbmRBc3luYyIsIm11eCIsIl9wdWJsaWNDb25maWdTdG9yZSIsInN0b3JhZ2VLZXkiLCJpc0Nvbm5lY3RlZCIsImpzb25ScGNDb25uZWN0aW9uIiwicnBjRW5naW5lIiwiZXRoRXJyb3JzIiwiX3JwY0VuZ2luZSIsInBheWxvYWQiLCJfc2VudFdhcm5pbmdzIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsIm9uY2UiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwiYWNjb3VudHMiLCJpc1VubG9ja2VkIiwiaW5pdGlhbGl6ZWQiLCJpc0ludGVybmFsIiwiX3BheWxvYWQiLCJ0cnlQcmVvcGVuSGFuZGxlIiwibWV0aG9kT3JQYXlsb2FkIiwiY2FsbGJhY2tPckFyZ3MiLCJpc1JlY292ZXJhYmxlIiwiZXJyb3JNZXNzYWdlIiwiaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZCIsIkV0aGVyZXVtUnBjRXJyb3IiLCJzdHJlYW1OYW1lIiwiaXNFdGhBY2NvdW50cyIsImZpbmFsQWNjb3VudHMiLCJhY2NvdW50IiwiaGFzRW1pdHRlZENvbm5lY3Rpb24iLCJoYXNoZXMiLCJpbnRlcm5hbEhhc2hlcyIsImFsZ29yaXRobXMiLCJhbGdvcml0aG0iLCJ1cGRhdGUiLCJkaWdlc3QiLCJtYWluIiwiZmluYWxPcHRpb25zIiwiZGVsaW1pdGVyIiwiZnVsbCIsImRlZmF1bHRzIiwic3JpIiwib3V0cHV0IiwiUG9wdXBIYW5kbGVyIiwiZmVhdHVyZXMiLCJkdWFsU2NyZWVuTGVmdCIsInNjcmVlbkxlZnQiLCJzY3JlZW5YIiwiZHVhbFNjcmVlblRvcCIsInNjcmVlblRvcCIsInNjcmVlblkiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInNjcmVlbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibGVmdCIsImFicyIsInRvcCIsImgiLCJ3IiwiZ2V0UG9wdXBGZWF0dXJlcyIsIndpbmRvd1RpbWVyIiwiaUNsb3NlZFdpbmRvdyIsIl9zZXR1cFRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbG9zZWQiLCJjbGVhckludGVydmFsIiwib3BlbiIsIl90aGlzJHdpbmRvdyIsImZvY3VzIiwicmVkaXJlY3QiLCJsb2NhdGlvblJlcGxhY2VPblJlZGlyZWN0IiwiaW1nRXhpc3RzIiwiaW1nIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsImdldFNpdGVOYW1lIiwic2l0ZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwibWV0YVRpdGxlIiwidGl0bGUiLCJnZXRTaXRlSWNvbiIsImljb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmluZCIsIl9pY29uIiwiZW5naW5lIiwiZG9tYWluTWV0YWRhdGEiLCJnZXRTaXRlTWV0YWRhdGEiLCJvcmlnaW5hbEVycm9yIiwiX2V4Y2x1ZGVkIiwiZGVmYXVsdFZlcmlmaWVycyIsImlmcmFtZUludGVncml0eSIsIlVOU0FGRV9NRVRIT0RTIiwiaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUiLCJzdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJzdG9yYWdlQXZhaWxhYmxlIiwidG9ydXNJZnJhbWVIdG1sIiwiY2hlY2siLCJoYXNoIiwiY3Jvc3NPcmlnaW4iLCJyZWwiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJidXR0b25Qb3NpdGlvbiIsIm1vZGFsWkluZGV4IiwiaXNMb2dnZWRJbiIsImlzSW5pdGlhbGl6ZWQiLCJ0b3J1c1dpZGdldFZpc2liaWxpdHkiLCJyZXF1ZXN0ZWRWZXJpZmllciIsImN1cnJlbnRWZXJpZmllciIsIm5vZGVEZXRhaWxNYW5hZ2VyIiwidG9ydXNKcyIsImFsZXJ0WkluZGV4IiwiaXNJZnJhbWVGdWxsU2NyZWVuIiwiZGFwcFN0b3JhZ2VLZXkiLCJlbmFibGVMb2dnaW5nIiwiZW5hYmxlZFZlcmlmaWVycyIsImhvc3QiLCJuZXR3b3JrTmFtZSIsImJsb2NrRXhwbG9yZXIiLCJ0aWNrZXIiLCJ0aWNrZXJOYW1lIiwibG9naW5Db25maWciLCJzaG93VG9ydXNCdXR0b24iLCJ3aGl0ZUxhYmVsIiwic2tpcFRLZXkiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJzZXREZWZhdWx0TGV2ZWwiLCJzdG9yZWRLZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2VuZXJhdGVkS2V5IiwidG9ydXNJZnJhbWVVcmwiLCJwYXRobmFtZSIsImVuZHNXaXRoIiwidG9ydXNJZnJhbWUiLCJ0b3J1c0FsZXJ0Q29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0UHJvcGVydHkiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwic3R5bGVMaW5rIiwiZGVmYXVsdExhbmd1YWdlIiwiY3VzdG9tVHJhbnNsYXRpb25zIiwibGFuZ3VhZ2VUcmFuc2xhdGlvbnMiLCJlbWJlZFRyYW5zbGF0aW9ucyIsImhhbmRsZVNldHVwIiwiX3NldHVwV2ViMyIsImluaXRTdHJlYW0iLCJjb21tdW5pY2F0aW9uTXV4IiwiZ2V0U3RyZWFtIiwic3VjY2VzcyIsIl9kaXNwbGF5SWZyYW1lIiwiZmV0Y2hVcmwiLCJjYWNoZSIsInRleHQiLCJjYWxjdWxhdGVkSW50ZWdyaXR5IiwiY2xlYXJJbml0IiwibG9naW4iLCJsb2dpbl9oaW50IiwibG9naW5IaW50IiwiZXRoZXJldW0iLCJsb2dvdXQiLCJzdGF0dXNTdHJlYW0iLCJsb2dnZWRJbiIsImlzRWxlbWVudCIsImVsZW1lbnQiLCJFbGVtZW50IiwiSFRNTERvY3VtZW50IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0b3J1c0FsZXJ0IiwiaGlkZVRvcnVzQnV0dG9uIiwiX3NlbmRXaWRnZXRWaXNpYmlsaXR5U3RhdHVzIiwic2V0UHJvdmlkZXIiLCJyZXN0IiwicHJvdmlkZXJDaGFuZ2VTdHJlYW0iLCJwcmVvcGVuSW5zdGFuY2VJZCIsIl9oYW5kbGVXaW5kb3ciLCJvdmVycmlkZSIsInNob3dXYWxsZXQiLCJwYXRoIiwic2hvd1dhbGxldFN0cmVhbSIsImZpbmFsUGF0aCIsImluc3RhbmNlSWQiLCJmaW5hbFVybCIsInNlYXJjaFBhcmFtcyIsImFwcGVuZCIsIm5vZGVEZXRhaWxzIiwid2FsbGV0VmVyaWZpZXIiLCJvcGVubG9naW5WZXJpZmllciIsImV4aXN0aW5nVjFVc2VyIiwiZ2V0VXNlclR5cGVBbmRBZGRyZXNzIiwidjJVc2VyIiwibmV3VjJVc2VyIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mb0FjY2Vzc1N0cmVhbSIsInVzZXJJbmZvQWNjZXNzSGFuZGxlciIsImFwcHJvdmVkIiwibmV3UmVxdWVzdCIsInVzZXJJbmZvU3RyZWFtIiwiaGFuZGxlckNodW5rIiwiaW5pdGlhdGVUb3B1cCIsInByb3ZpZGVyIiwiaXNWYWxpZCIsInNlbGVjdGVkUHJvdmlkZXIiLCJzZWxlY3RlZFBhcmFtcyIsImZpYXRWYWx1ZSIsInJlcXVlc3RlZE9yZGVyQW1vdW50IiwicGFyc2VGbG9hdCIsInNlbGVjdGVkQ3VycmVuY3kiLCJzZWxlY3RlZENyeXB0b0N1cnJlbmN5IiwidmFsaWRhdGVQYXltZW50UHJvdmlkZXIiLCJ0b3B1cFN0cmVhbSIsIndpbmRvd1N0cmVhbSIsImhhbmRsZWRXaW5kb3ciLCJfY3JlYXRlUG9wdXBCbG9ja0FsZXJ0IiwiY2xvc2VIYW5kbGVyIiwicmVjZWl2ZWRJZCIsIl9zZXRFbWJlZFdoaXRlTGFiZWwiLCJ0aGVtZSIsImlzRGFyayIsImNvbG9ycyIsImNsYXNzTGlzdCIsInRvcnVzQnJhbmQxIiwidG9ydXNHcmF5MiIsIl9nZXRMb2dvVXJsIiwiX3RoaXMkd2hpdGVMYWJlbCIsIl90aGlzJHdoaXRlTGFiZWwkdGhlbSIsImxvZ29VcmwiLCJfdGhpcyR3aGl0ZUxhYmVsMiIsIl90aGlzJHdoaXRlTGFiZWwzIiwibG9nb0xpZ2h0IiwibG9nb0RhcmsiLCJpc0Z1bGwiLCJyaWdodCIsImJvdHRvbSIsIm1ldGFtYXNrU3RyZWFtIiwiY29udGVudFdpbmRvdyIsImNvbW11bmljYXRpb25TdHJlYW0iLCJpbnBhZ2VQcm92aWRlciIsImRldGVjdEFjY291bnRSZXF1ZXN0UHJvdG90eXBlTW9kaWZpZXIiLCJvcmlnaW5hbE1ldGhvZCIsImhhbmRsZUxvZ2luQ2IiLCJfc2hvd0xvZ2luUG9wdXAiLCJpc0xvZ2luQ2FsbGJhY2siLCJwcm94aWVkSW5wYWdlUHJvdmlkZXIiLCJkZWxldGVQcm9wZXJ0eSIsInNldHVwTXVsdGlwbGV4IiwiY2FsbGVkRnJvbUVtYmVkIiwibG9naW5IYW5kbGVyIiwib2F1dGhTdHJlYW0iLCJzdWNjZXNzQWxlcnQiLCJidG5Db250YWluZXIiLCJfX2dlbmVyYXRvciIsImYiLCJnIiwibGFiZWwiLCJ0cnlzIiwib3BzIiwidmVyYiIsIm9wIiwicG9wIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiX2EiLCJFQyIsImJyb3dzZXJDcnlwdG8iLCJjcnlwdG8iLCJtc0NyeXB0byIsInN1YnRsZSIsIndlYmtpdFN1YnRsZSIsIm5vZGVDcnlwdG8iLCJFQ19HUk9VUF9PUkRFUiIsIkJ1ZmZlciIsIlpFUk8zMiIsImFsbG9jIiwiYXNzZXJ0IiwiY29uZGl0aW9uIiwiaXNWYWxpZFByaXZhdGVLZXkiLCJpc0J1ZmZlciIsImlzU2NhbGFyIiwiY29tcGFyZSIsInJhbmRvbUJ5dGVzIiwic2l6ZSIsIlVpbnQ4QXJyYXkiLCJnZXRSYW5kb21WYWx1ZXMiLCJzaGE1MTIiLCJjcmVhdGVIYXNoIiwiZ2V0QWVzIiwiaW1wb3J0S2V5IiwiY3J5cHRvS2V5IiwiZW5jQWxnb3JpdGhtIiwiY2lwaGVyIiwiY3JlYXRlQ2lwaGVyaXYiLCJmaXJzdENodW5rIiwic2Vjb25kQ2h1bmsiLCJmaW5hbCIsImRlY2lwaGVyIiwiY3JlYXRlRGVjaXBoZXJpdiIsImFlc0NiY0VuY3J5cHQiLCJhZXNDYmNEZWNyeXB0IiwiZGVyaXZlIiwicHJpdmF0ZUtleUEiLCJwdWJsaWNLZXlCIiwia2V5QSIsImtleUIiLCJQeCIsInRvQXJyYXkiLCJvcHRzIiwiZW5jcnlwdGlvbktleSIsImhtYWMiLCJjcmVhdGVIbWFjIiwiYjEiLCJiMiIsImVxdWFsQ29uc3RUaW1lIiwiaG1hY1NoYTI1NlZlcmlmeSIsIm1hY0dvb2QiLCJwYWRfc3RyaW5nXzEiLCJpbnB1dCIsImVuY29kaW5nIiwiZnJvbUJhc2U2NCIsInRvQmFzZTY0IiwiYmFzZTY0dXJsIiwiYmFzZTY0IiwiZGVjb2RlIiwidG9CdWZmZXIiLCJzdHJpbmdMZW5ndGgiLCJkaWZmIiwicG9zaXRpb24iLCJwYWRMZW5ndGgiLCJwYWRkZWRTdHJpbmdMZW5ndGgiLCJidWZmZXIiLCJvYmplY3RUb1N0cmluZyIsImlzQm9vbGVhbiIsImlzTnVsbCIsImlzTnVsbE9yVW5kZWZpbmVkIiwiaXNOdW1iZXIiLCJpc1N0cmluZyIsImlzU3ltYm9sIiwiaXNVbmRlZmluZWQiLCJpc1JlZ0V4cCIsInJlIiwiaXNPYmplY3QiLCJpc0RhdGUiLCJkIiwiaXNFcnJvciIsImlzRnVuY3Rpb24iLCJpc1ByaW1pdGl2ZSIsImVvcyIsIndzIiwicnMiLCJjYW5jZWxsZWQiLCJvbmxlZ2FjeWZpbmlzaCIsIm9uZmluaXNoIiwib25lbmQiLCJvbmV4aXQiLCJleGl0Q29kZSIsIm9uY2xvc2UiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJvbmNsb3NlbmV4dHRpY2siLCJlbmRlZCIsImRlc3Ryb3llZCIsIm9ucmVxdWVzdCIsInNldEhlYWRlciIsImFib3J0IiwiaXNSZXF1ZXN0Iiwic3RkaW8iLCJpc0NoaWxkUHJvY2VzcyIsImVxdWFsIiwiUmVnRXhwIiwiZmxhZ3MiLCJIQVNIX1VOREVGSU5FRCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJhcmdzVGFnIiwiZnVuY1RhZyIsIm9iamVjdFRhZyIsInJlSXNIb3N0Q3RvciIsInJlSXNVaW50IiwidHlwZWRBcnJheVRhZ3MiLCJmcmVlR2xvYmFsIiwiZnJlZVNlbGYiLCJyb290IiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiZnJlZVByb2Nlc3MiLCJub2RlVXRpbCIsInR5cGVzIiwicmVxdWlyZSIsImJpbmRpbmciLCJub2RlSXNUeXBlZEFycmF5IiwiaXNUeXBlZEFycmF5IiwiZnVuYyIsImFycmF5UHJvdG8iLCJmdW5jUHJvdG8iLCJvYmplY3RQcm90byIsImNvcmVKc0RhdGEiLCJmdW5jVG9TdHJpbmciLCJtYXNrU3JjS2V5IiwidWlkIiwiZXhlYyIsIklFX1BST1RPIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJvYmplY3RDdG9yU3RyaW5nIiwicmVJc05hdGl2ZSIsImFsbG9jVW5zYWZlIiwiZ2V0UHJvdG90eXBlIiwidHJhbnNmb3JtIiwib3ZlckFyZyIsIm9iamVjdENyZWF0ZSIsInNwbGljZSIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXROYXRpdmUiLCJuYXRpdmVJc0J1ZmZlciIsIm5hdGl2ZU1heCIsIm1heCIsIm5hdGl2ZU5vdyIsIm5hdGl2ZUNyZWF0ZSIsImJhc2VDcmVhdGUiLCJwcm90byIsIkhhc2giLCJlbnRyaWVzIiwiY2xlYXIiLCJlbnRyeSIsIkxpc3RDYWNoZSIsIk1hcENhY2hlIiwiU3RhY2siLCJfX2RhdGFfXyIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNBcmd1bWVudHMiLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIml0ZXJhdGVlIiwiYmFzZVRpbWVzIiwiU3RyaW5nIiwiaXNJbmRleCIsImFzc2lnbk1lcmdlVmFsdWUiLCJlcSIsImJhc2VBc3NpZ25WYWx1ZSIsImFzc2lnblZhbHVlIiwib2JqVmFsdWUiLCJhc3NvY0luZGV4T2YiLCJhcnJheSIsImdldE1hcERhdGEiLCJwYWlycyIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlRm9yIiwiZnJvbVJpZ2h0Iiwia2V5c0Z1bmMiLCJpdGVyYWJsZSIsImNyZWF0ZUJhc2VGb3IiLCJiYXNlR2V0VGFnIiwiaXNPd24iLCJ0YWciLCJ1bm1hc2tlZCIsImdldFJhd1RhZyIsImJhc2VJc0FyZ3VtZW50cyIsImlzT2JqZWN0TGlrZSIsImJhc2VJc05hdGl2ZSIsImlzTWFza2VkIiwidG9Tb3VyY2UiLCJiYXNlS2V5c0luIiwibmF0aXZlS2V5c0luIiwiaXNQcm90byIsImlzUHJvdG90eXBlIiwiYmFzZU1lcmdlIiwic3JjSW5kZXgiLCJjdXN0b21pemVyIiwic3JjVmFsdWUiLCJtZXJnZUZ1bmMiLCJzYWZlR2V0Iiwic3RhY2tlZCIsIm5ld1ZhbHVlIiwiaXNDb21tb24iLCJpc1R5cGVkIiwiaXNBcnJheUxpa2UiLCJpc0FycmF5TGlrZU9iamVjdCIsImlzRGVlcCIsImNsb25lQnVmZmVyIiwidHlwZWRBcnJheSIsImFycmF5QnVmZmVyIiwiYnl0ZUxlbmd0aCIsImNsb25lQXJyYXlCdWZmZXIiLCJieXRlT2Zmc2V0IiwiY2xvbmVUeXBlZEFycmF5IiwiY29weUFycmF5IiwiQ3RvciIsImlzUGxhaW5PYmplY3QiLCJpc05ldyIsImNvcHlPYmplY3QiLCJrZXlzSW4iLCJ0b1BsYWluT2JqZWN0IiwiaW5pdENsb25lT2JqZWN0IiwiYmFzZU1lcmdlRGVlcCIsImJhc2VSZXN0Iiwic3RhcnQiLCJzZXRUb1N0cmluZyIsIm90aGVyQXJncyIsIm92ZXJSZXN0IiwiaWRlbnRpdHkiLCJpc0tleWFibGUiLCJnZXRWYWx1ZSIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicmVtYWluaW5nIiwic2hvcnRPdXQiLCJzdHJpbmciLCJvdGhlciIsImlzTGVuZ3RoIiwiYmFzZVVuYXJ5IiwibWVyZ2UiLCJhc3NpZ25lciIsInNvdXJjZXMiLCJndWFyZCIsImlzSXRlcmF0ZWVDYWxsIiwiY3JlYXRlQXNzaWduZXIiLCJkZWZpbml0aW9uIiwidW5kZWZpbmVkVHlwZSIsImlzSUUiLCJ1c2VyQWdlbnQiLCJsb2dNZXRob2RzIiwiYmluZE1ldGhvZCIsIm1ldGhvZE5hbWUiLCJ0cmFjZUZvcklFIiwidHJhY2UiLCJyZWFsTWV0aG9kIiwicmVwbGFjZUxvZ2dpbmdNZXRob2RzIiwibGV2ZWwiLCJsb2dnZXJOYW1lIiwibWV0aG9kRmFjdG9yeSIsImVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMiLCJkZWZhdWx0TWV0aG9kRmFjdG9yeSIsIkxvZ2dlciIsImRlZmF1bHRMZXZlbCIsImZhY3RvcnkiLCJjdXJyZW50TGV2ZWwiLCJwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlIiwibGV2ZWxOdW0iLCJsZXZlbE5hbWUiLCJpZ25vcmUiLCJjb29raWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRQZXJzaXN0ZWRMZXZlbCIsInN0b3JlZExldmVsIiwiY2xlYXJQZXJzaXN0ZWRMZXZlbCIsImdldExldmVsIiwicGVyc2lzdCIsIlNJTEVOVCIsInJlc2V0TGV2ZWwiLCJUUkFDRSIsImluaXRpYWxMZXZlbCIsImRlZmF1bHRMb2dnZXIiLCJfbG9nZ2Vyc0J5TmFtZSIsImdldExvZ2dlciIsImxvZ2dlciIsIl9sb2ciLCJub0NvbmZsaWN0IiwiZ2V0TG9nZ2VycyIsIndyYXBweSIsImNhbGxlZCIsIm9uY2VTdHJpY3QiLCJvbmNlRXJyb3IiLCJzdHJpY3QiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJmcyIsImFuY2llbnQiLCJpc0ZuIiwiZGVzdHJveWVyIiwicmVhZGluZyIsIndyaXRpbmciLCJSZWFkU3RyZWFtIiwiV3JpdGVTdHJlYW0iLCJpc0ZTIiwidG8iLCJzdHJlYW1zIiwiZGVzdHJveXMiLCJydW50aW1lIiwiT3AiLCJoYXNPd24iLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwiZGVmaW5lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsIkNvbnRleHQiLCJfaW52b2tlIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJDb250aW51ZVNlbnRpbmVsIiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsInJlY29yZCIsInRyeUNhdGNoIiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIm1ha2VJbnZva2VNZXRob2QiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJfX2F3YWl0IiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwiYXdyYXAiLCJza2lwVGVtcFJlc2V0Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsImdsb2JhbFRoaXMiLCJwbmEiLCJvYmplY3RLZXlzIiwidXRpbCIsImluaGVyaXRzIiwiUmVhZGFibGUiLCJXcml0YWJsZSIsImFsbG93SGFsZk9wZW4iLCJvbkVuZE5UIiwiaGlnaFdhdGVyTWFyayIsIlBhc3NUaHJvdWdoIiwiVHJhbnNmb3JtIiwiX3RyYW5zZm9ybSIsIlJlYWRhYmxlU3RhdGUiLCJFRWxpc3RlbmVyQ291bnQiLCJTdHJlYW0iLCJPdXJVaW50OEFycmF5IiwiZGVidWdVdGlsIiwiZGVidWdsb2ciLCJCdWZmZXJMaXN0IiwiZGVzdHJveUltcGwiLCJTdHJpbmdEZWNvZGVyIiwia1Byb3h5RXZlbnRzIiwiaXNEdXBsZXgiLCJyZWFkYWJsZU9iamVjdE1vZGUiLCJod20iLCJyZWFkYWJsZUh3bSIsInJlYWRhYmxlSGlnaFdhdGVyTWFyayIsImRlZmF1bHRId20iLCJwaXBlcyIsInBpcGVzQ291bnQiLCJmbG93aW5nIiwiZW5kRW1pdHRlZCIsInN5bmMiLCJuZWVkUmVhZGFibGUiLCJlbWl0dGVkUmVhZGFibGUiLCJyZWFkYWJsZUxpc3RlbmluZyIsInJlc3VtZVNjaGVkdWxlZCIsImRlZmF1bHRFbmNvZGluZyIsImF3YWl0RHJhaW4iLCJyZWFkaW5nTW9yZSIsImRlY29kZXIiLCJyZWFkYWJsZUFkZENodW5rIiwiYWRkVG9Gcm9udCIsInNraXBDaHVua0NoZWNrIiwiZW1pdFJlYWRhYmxlIiwib25Fb2ZDaHVuayIsIl9pc1VpbnQ4QXJyYXkiLCJjaHVua0ludmFsaWQiLCJfdWludDhBcnJheVRvQnVmZmVyIiwiYWRkQ2h1bmsiLCJtYXliZVJlYWRNb3JlIiwibmVlZE1vcmVEYXRhIiwidW5zaGlmdCIsIl91bmRlc3Ryb3kiLCJ1bmRlc3Ryb3kiLCJpc1BhdXNlZCIsInNldEVuY29kaW5nIiwiZW5jIiwiTUFYX0hXTSIsImhvd011Y2hUb1JlYWQiLCJjb21wdXRlTmV3SGlnaFdhdGVyTWFyayIsImVtaXRSZWFkYWJsZV8iLCJmbG93IiwibWF5YmVSZWFkTW9yZV8iLCJuUmVhZGluZ05leHRUaWNrIiwicmVzdW1lXyIsImZyb21MaXN0IiwicmV0Iiwic2hpZnQiLCJsaXN0IiwiaGFzU3RyaW5ncyIsImMiLCJuYiIsInRhaWwiLCJjb3B5RnJvbUJ1ZmZlclN0cmluZyIsImJ1ZiIsImNvcHlGcm9tQnVmZmVyIiwiZnJvbUxpc3RQYXJ0aWFsIiwiZW5kUmVhZGFibGUiLCJlbmRSZWFkYWJsZU5UIiwieHMiLCJsIiwicGFyc2VJbnQiLCJuT3JpZyIsImRvUmVhZCIsInBpcGVPcHRzIiwiZW5kRm4iLCJzdGRvdXQiLCJzdGRlcnIiLCJ1bnBpcGUiLCJvbnVucGlwZSIsInVucGlwZUluZm8iLCJoYXNVbnBpcGVkIiwib25kcmFpbiIsIm9uZGF0YSIsImNsZWFuZWRVcCIsIm5lZWREcmFpbiIsImNsZWFudXAiLCJwaXBlT25EcmFpbiIsImluY3JlYXNlZEF3YWl0RHJhaW4iLCJwYXVzZSIsImRlc3RzIiwiZXYiLCJwYXVzZWQiLCJfZnJvbUxpc3QiLCJhZnRlclRyYW5zZm9ybSIsInRzIiwiX3RyYW5zZm9ybVN0YXRlIiwidHJhbnNmb3JtaW5nIiwid3JpdGVjYiIsIndyaXRlY2h1bmsiLCJuZWVkVHJhbnNmb3JtIiwid3JpdGVlbmNvZGluZyIsImZsdXNoIiwiX2ZsdXNoIiwicHJlZmluaXNoIiwiX3RoaXMyIiwiZXJyMiIsIkNvcmtlZFJlcXVlc3QiLCJjb3JrUmVxIiwicGVuZGluZ2NiIiwiY29ya2VkUmVxdWVzdHNGcmVlIiwib25Db3JrZWRGaW5pc2giLCJhc3luY1dyaXRlIiwiYnJvd3NlciIsInNldEltbWVkaWF0ZSIsIldyaXRhYmxlU3RhdGUiLCJpbnRlcm5hbFV0aWwiLCJkZXByZWNhdGUiLCJub3AiLCJ3cml0YWJsZU9iamVjdE1vZGUiLCJ3cml0YWJsZUh3bSIsIndyaXRhYmxlSGlnaFdhdGVyTWFyayIsImZpbmFsQ2FsbGVkIiwiZW5kaW5nIiwiZmluaXNoZWQiLCJub0RlY29kZSIsImRlY29kZVN0cmluZ3MiLCJjb3JrZWQiLCJidWZmZXJQcm9jZXNzaW5nIiwib253cml0ZSIsIndyaXRlbGVuIiwib253cml0ZVN0YXRlVXBkYXRlIiwiZmluaXNoTWF5YmUiLCJlcnJvckVtaXR0ZWQiLCJvbndyaXRlRXJyb3IiLCJuZWVkRmluaXNoIiwiYnVmZmVyZWRSZXF1ZXN0IiwiY2xlYXJCdWZmZXIiLCJhZnRlcldyaXRlIiwibGFzdEJ1ZmZlcmVkUmVxdWVzdCIsInByZWZpbmlzaGVkIiwiYnVmZmVyZWRSZXF1ZXN0Q291bnQiLCJyZWFsSGFzSW5zdGFuY2UiLCJ3cml0ZXYiLCJfd3JpdGV2IiwiX2ZpbmFsIiwiZG9Xcml0ZSIsIm9ud3JpdGVEcmFpbiIsImhvbGRlciIsImFsbEJ1ZmZlcnMiLCJpc0J1ZiIsImNhbGxGaW5hbCIsIm5lZWQiLCJnZXRCdWZmZXIiLCJjdXJyZW50Iiwib3V0IiwiaGFzSW5zdGFuY2UiLCJ3cml0ZUFmdGVyRW5kIiwidmFsaWQiLCJ2YWxpZENodW5rIiwibmV3Q2h1bmsiLCJkZWNvZGVDaHVuayIsImxhc3QiLCJ3cml0ZU9yQnVmZmVyIiwic2V0RGVmYXVsdEVuY29kaW5nIiwidG9Mb3dlckNhc2UiLCJlbmRXcml0YWJsZSIsImNvcHlCdWZmZXIiLCJvZmZzZXQiLCJpbnNwZWN0IiwiY3VzdG9tIiwiZW1pdEVycm9yTlQiLCJyZWFkYWJsZURlc3Ryb3llZCIsIndyaXRhYmxlRGVzdHJveWVkIiwiaXNFbmNvZGluZyIsIm5lbmMiLCJyZXRyaWVkIiwiX25vcm1hbGl6ZUVuY29kaW5nIiwibm9ybWFsaXplRW5jb2RpbmciLCJ1dGYxNlRleHQiLCJ1dGYxNkVuZCIsImZpbGxMYXN0IiwidXRmOEZpbGxMYXN0IiwiYmFzZTY0VGV4dCIsImJhc2U2NEVuZCIsInNpbXBsZVdyaXRlIiwic2ltcGxlRW5kIiwibGFzdE5lZWQiLCJsYXN0VG90YWwiLCJsYXN0Q2hhciIsInV0ZjhDaGVja0J5dGUiLCJieXRlIiwidXRmOENoZWNrRXh0cmFCeXRlcyIsImNoYXJDb2RlQXQiLCJ0b3RhbCIsInV0ZjhDaGVja0luY29tcGxldGUiLCJ4dGVuZCIsIkRlc3Ryb3lhYmxlVHJhbnNmb3JtIiwiX2Rlc3Ryb3llZCIsInRocm91Z2gyIiwiVGhyb3VnaDIiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==