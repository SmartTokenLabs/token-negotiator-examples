(self.webpackChunktoken_overlay_website = self.webpackChunktoken_overlay_website || []).push([ [ 65 ], {
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
  42065: (e, t, r) => {
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
      getTorusProviderInstance: () => Wt
    });
    var o = r(31692);
    var s = r.n(o);
    var a = r(18269);
    const c = {
      ROPSTEN: "ropsten",
      MAINNET: "mainnet",
      POLYGON: "polygon-mainnet"
    };
    const u = [ {
      inputs: [ {
        internalType: "string",
        name: "_verifier",
        type: "string"
      }, {
        internalType: "bytes32",
        name: "hashedVerifierId",
        type: "bytes32"
      } ],
      name: "getNodeSet",
      outputs: [ {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256"
      }, {
        internalType: "string[]",
        name: "torusNodeEndpoints",
        type: "string[]"
      }, {
        internalType: "uint256[]",
        name: "torusNodePubX",
        type: "uint256[]"
      }, {
        internalType: "uint256[]",
        name: "torusNodePubY",
        type: "uint256[]"
      }, {
        internalType: "uint256[]",
        name: "torusIndexes",
        type: "uint256[]"
      } ],
      stateMutability: "view",
      type: "function"
    } ];
    class l {
      constructor() {
        let {network: e = c.MAINNET, proxyAddress: t = l.PROXY_ADDRESS_MAINNET} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        let r;
        i(this, "_currentEpoch", ""), i(this, "_torusNodeEndpoints", []), i(this, "_torusNodePub", []), i(this, "_torusIndexes", []), 
        i(this, "nodeListAddress", void 0), i(this, "updated", void 0), i(this, "nodeListContract", void 0);
        try {
          r = new URL(e).href;
        } catch (n) {
          const t = "b8cdb0e4cff24599a286bf8e87ff1c96";
          r = "https://".concat(e, ".infura.io/v3/").concat(t);
        }
        s().setProvider(r), this.nodeListContract = new (s())(u, t), this.nodeListAddress = t, this.updated = !1;
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
      async getNodeDetails(e) {
        let {verifier: t, verifierId: r} = e;
        try {
          if (this.updated && (this.nodeListAddress === l.PROXY_ADDRESS_MAINNET || this.nodeListAddress === l.PROXY_ADDRESS_ROPSTEN)) return this._nodeDetails;
          const e = (0, a.keccak256)(r);
          const n = await this.nodeListContract.methods.getNodeSet(t, e).call();
          const {currentEpoch: i, torusNodeEndpoints: o, torusNodePubX: s, torusNodePubY: c, torusIndexes: u} = n;
          this._currentEpoch = i, this._torusIndexes = u.map((e => Number(e)));
          const d = [];
          const h = [];
          for (let t = 0; t < o.length; t += 1) {
            const e = o[t];
            const r = s[t];
            const n = c[t];
            const i = "https://".concat(e.split(":")[0], "/jrpc");
            d.push(i), h.push({
              X: (0, a.toHex)(r).replace("0x", ""),
              Y: (0, a.toHex)(n).replace("0x", "")
            });
          }
          return this._torusNodeEndpoints = d, this._torusNodePub = h, this.updated = !0, this._nodeDetails;
        } catch (n) {
          if (this.nodeListAddress === l.PROXY_ADDRESS_MAINNET) return l.NODE_DETAILS_MAINNET;
          throw n;
        }
      }
    }
    i(l, "PROXY_ADDRESS_MAINNET", "0xf20336e16B5182637f09821c27BDe29b0AFcfe80"), i(l, "PROXY_ADDRESS_ROPSTEN", "0x6258c9d6c12ed3edda59a1a6527e469517744aa7"), 
    i(l, "PROXY_ADDRESS_POLYGON", "0x9f072ba19b3370e512aa1b4bfcdaf97283168005"), i(l, "NODE_DETAILS_MAINNET", {
      currentEpoch: "19",
      nodeListAddress: l.PROXY_ADDRESS_MAINNET,
      torusNodeEndpoints: [ "https://torus-19.torusnode.com/jrpc", "https://torus-node.ens.domains/jrpc", "https://torus-node.matic.network/jrpc", "https://torus.zilliqa.network/jrpc", "https://torus-mainnet.cosmos.network/jrpc", "https://torus2.etherscan.com/jrpc", "https://torus-node-v2.skalelabs.com/jrpc", "https://torus-node.binancex.dev/jrpc", "https://torusnode.ont.io/jrpc" ],
      torusIndexes: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      torusNodePub: [ {
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
      } ],
      updated: !1
    });
    var d = r(72378);
    var h = r.n(d);
    var f = r(2043);
    var p = r.n(f);
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
    function v(e) {
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
    const y = p().getLogger("http-helpers");
    y.setLevel(f.levels.INFO);
    let b = "torus-default";
    let m = "";
    let w = null;
    const _ = [];
    const S = [];
    function O(e) {
      m = e;
    }
    function k(e) {
      b = e;
    }
    async function P(e, t) {
      let r = null;
      try {
        r = new URL(e);
      } catch (n) {}
      if (w && r && (_.includes(r.origin) || S.includes(r.pathname))) {
        const r = w.startTransaction({
          name: e
        });
        const n = r.startChild({
          op: "http"
        });
        const i = await fetch(e, t);
        return n.finish(), r.finish(), i;
      }
      return fetch(e, t);
    }
    function A() {
      const e = {};
      return b && (e["x-api-key"] = b), m && (e["x-embed-host"] = m), e;
    }
    function E(e) {
      y.info("Response: ".concat(e.status, " ").concat(e.statusText)), y.info("Url: ".concat(e.url));
    }
    const C = (e, t) => {
      const r = new Promise(((t, r) => {
        const n = setTimeout((() => {
          clearTimeout(n), r(new Error("Timed out in ".concat(e, "ms")));
        }), e);
      }));
      return Promise.race([ t, r ]);
    };
    const D = async function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const n = {
        mode: "cors",
        headers: {}
      };
      r.useAPIKey && (n.headers = v(v({}, n.headers), A()));
      const i = h()(n, t, {
        method: "GET"
      });
      const o = await P(e, i);
      if (o.ok) return o.json();
      throw E(o), o;
    };
    const T = function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const i = {
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      };
      n.useAPIKey && (i.headers = v(v({}, i.headers), A()));
      const o = h()(i, r, {
        method: "POST"
      });
      return n.isUrlEncodedData ? (o.body = t, "application/json; charset=utf-8" === o.headers["Content-Type"] && delete o.headers["Content-Type"]) : o.body = JSON.stringify(t), 
      C(n.timeout || 6e4, P(e, o).then((e => {
        if (e.ok) return e.json();
        throw E(e), e;
      })));
    };
    const x = (e, t) => ({
      jsonrpc: "2.0",
      method: e,
      id: 10,
      params: t
    });
    var j = r(88473);
    var R = r(61798);
    var I = r.n(R);
    r(45772);
    var M = r(95811);
    var N = r.n(M);
    r(48764).Buffer;
    URL;
    var L = r(17187);
    var U = r(4445);
    var B = r.n(U);
    var K = r(79826);
    var H = r(12840);
    var W = r.n(H);
    var q = r(30778);
    var F = r.n(q);
    var V = r(74286);
    var X = r.n(V);
    function Y() {}
    const G = "ACK";
    class z extends j.Duplex {
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
        this.cork(), this._write("BRK", null, Y), this._haveSyn = !1, this._init = !1;
      }
      _handShake() {
        this._write("SYN", null, Y), this.cork();
      }
      _onData(e) {
        if (this._init) if ("BRK" === e) this._break(); else try {
          this.push(e);
        } catch (t) {
          this.emit("error", t);
        } else "SYN" === e ? (this._haveSyn = !0, this._write(G, null, Y)) : e === G && (this._init = !0, this._haveSyn || this._write(G, null, Y), 
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
    function J(e, t, r) {
      try {
        Reflect.apply(e, t, r);
      } catch (n) {
        setTimeout((() => {
          throw n;
        }));
      }
    }
    class Z extends L.EventEmitter {
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
        const s = r[e];
        if (void 0 === s) return !1;
        if ("function" == typeof s) J(s, this, i); else {
          const e = s.length;
          const t = function(e) {
            const t = e.length;
            const r = new Array(t);
            for (let n = 0; n < t; n += 1) r[n] = e[n];
            return r;
          }(s);
          for (let r = 0; r < e; r += 1) J(t[r], this, i);
        }
        return !0;
      }
    }
    class $ extends Error {
      constructor(e) {
        let {code: t, message: r, data: n} = e;
        if (!Number.isInteger(t)) throw new Error("code must be an integer");
        if (!r || "string" != typeof r) throw new Error("message must be string");
        super(r), i(this, "code", void 0), i(this, "data", void 0), this.code = t, void 0 !== n && (this.data = n);
      }
      toString() {
        return B()({
          code: this.code,
          message: this.message,
          data: this.data,
          stack: this.stack
        });
      }
    }
    function Q() {
      const e = {};
      const t = new Z;
      const r = new j.Duplex({
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
          } catch (s) {
            o = s;
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
    function ee() {
      return (e, t, r, n) => {
        const i = e.id;
        const o = (() => I()(32).toString("hex"))();
        e.id = o, t.id = o, r((r => {
          e.id = i, t.id = i, r();
        }));
      };
    }
    function te(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    class re extends Z {
      constructor() {
        super(), i(this, "_middleware", void 0), this._middleware = [];
      }
      static async _runAllMiddleware(e, t, r) {
        const n = [];
        let i = null;
        let o = !1;
        for (const s of r) if ([i, o] = await re._runMiddleware(e, t, s, n), o) break;
        return [ i, o, n.reverse() ];
      }
      static _runMiddleware(e, t, r, n) {
        return new Promise((i => {
          const o = e => {
            const r = e || t.error;
            r && (t.error = (0, K.serializeError)(r)), i([ r, !0 ]);
          };
          const s = e => {
            t.error ? o(t.error) : (e && ("function" != typeof e && o(new $({
              code: -32603,
              message: "JRPCEngine: 'next' return handlers must be functions"
            })), n.push(e)), i([ null, !1 ]));
          };
          try {
            r(e, t, s, o);
          } catch (a) {
            o(a);
          }
        }));
      }
      static async _runReturnHandlers(e) {
        for (const t of e) await new Promise(((e, r) => {
          t((t => t ? r(t) : e()));
        }));
      }
      static _checkForCompletion(e, t, r) {
        if (!("result" in t) && !("error" in t)) throw new $({
          code: -32603,
          message: "Response has no error or result for request"
        });
        if (!r) throw new $({
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
            const [i, o, s] = await re._runAllMiddleware(e, t, this._middleware);
            return o ? (await re._runReturnHandlers(s), n(i)) : r((async e => {
              try {
                await re._runReturnHandlers(s);
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
          const e = new $({
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
          const r = new $({
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
            t % 2 ? te(Object(r), !0).forEach((function(t) {
              i(e, t, r[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach((function(t) {
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
        } catch (s) {
          o = s;
        }
        return o && (delete n.result, n.error || (n.error = (0, K.serializeError)(o))), t(o, n);
      }
      async _processRequest(e, t) {
        const [r, n, i] = await re._runAllMiddleware(e, t, this._middleware);
        if (re._checkForCompletion(e, t, n), await re._runReturnHandlers(i), r) throw r;
      }
    }
    class ne extends j.Duplex {
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
    function ie(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function oe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ie(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    const se = Symbol("IGNORE_SUBSTREAM");
    class ae extends j.Duplex {
      constructor() {
        super(oe(oe({}, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), {}, {
          objectMode: !0
        })), i(this, "_substreams", void 0), i(this, "getStream", void 0), this._substreams = {};
      }
      createStream(e) {
        if (!e) throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e]) throw new Error("ObjectMultiplex - Substream for name \"".concat(e, "\" already exists"));
        const t = new ne({
          parent: this,
          name: e
        });
        return this._substreams[e] = t, function(e, t) {
          const r = F()(t);
          W()(e, {
            readable: !1
          }, r), W()(e, {
            writable: !1
          }, r);
        }(this, (e => t.destroy(e || void 0))), t;
      }
      ignoreStream(e) {
        if (!e) throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e]) throw new Error("ObjectMultiplex - Substream for name \"".concat(e, "\" already exists"));
        this._substreams[e] = se;
      }
      _read() {}
      _write(e, t, r) {
        const {name: n, data: i} = e;
        if (!n) return window.console.warn("ObjectMultiplex - malformed chunk without name \"".concat(e, "\"")), r();
        const o = this._substreams[n];
        return o ? (o !== se && o.push(i), r()) : (window.console.warn("ObjectMultiplex - orphaned data for stream \"".concat(n, "\"")), 
        r());
      }
    }
    var ce = r(2450);
    var ue = r(13550);
    var le = r.n(ue);
    var de = r(86266);
    var he = r(67266);
    var fe = r.n(he);
    var pe = r(48764).Buffer;
    const ge = p().getLogger("torus.js");
    ge.disableAll();
    class ve extends Error {
      constructor(e) {
        let {errors: t, responses: r, predicate: n} = e;
        super("Unable to resolve enough promises."), i(this, "errors", void 0), i(this, "responses", void 0), i(this, "predicate", void 0), 
        this.errors = t, this.responses = r, this.predicate = n;
      }
    }
    const ye = (e, t) => new Promise(((r, n) => {
      let i = 0;
      const o = {
        resolved: !1
      };
      const s = new Array(e.length).fill(void 0);
      const a = new Array(e.length).fill(void 0);
      let c;
      return e.forEach(((u, l) => u.then((e => {
        a[l] = e;
      })).catch((e => {
        s[l] = e;
      })).finally((() => {
        if (!o.resolved) return t(a.slice(0), o).then((e => {
          o.resolved = !0, r(e);
        })).catch((e => {
          c = e;
        })).finally((() => {
          if (i += 1, i === e.length) {
            const e = Object.values(a.reduce(((e, t) => {
              if (t) {
                var r;
                const {id: n, error: i} = t;
                (null == i || null === (r = i.data) || void 0 === r ? void 0 : r.length) > 0 && (i.data.startsWith("Error occurred while verifying params") ? e[n] = function(e) {
                  return e.charAt(0).toUpperCase() + e.slice(1);
                }(i.data) : e[n] = i.data);
              }
              return e;
            }), {}));
            if (e.length > 0) {
              const t = e.length > 1 ? `\n${e.map((e => `• ${e}`)).join("\n")}` : e[0];
              n(new Error(t));
            } else {
              var t;
              n(new ve({
                errors: s,
                responses: a,
                predicate: (null === (t = c) || void 0 === t ? void 0 : t.message) || c
              }));
            }
          }
        }));
      }))));
    }));
    function be(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function me(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? be(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    class we extends Error {}
    const _e = (e, t) => {
      let r = e;
      if ("number" == typeof r && (r = Array.from({
        length: r
      }, ((e, t) => t))), t > r.length || t <= 0) return [];
      if (t === r.length) return [ r ];
      if (1 === t) return r.reduce(((e, t) => [ ...e, [ t ] ]), []);
      const n = [];
      let i = [];
      for (let o = 0; o <= r.length - t + 1; o += 1) {
        i = _e(r.slice(o + 1), t - 1);
        for (let e = 0; e < i.length; e += 1) n.push([ r[o], ...i[e] ]);
      }
      return n;
    };
    const Se = (e, t) => {
      const r = {};
      for (let n = 0; n < e.length; n += 1) {
        const i = fe()(e[n]);
        if (r[i] = r[i] ? r[i] + 1 : 1, r[i] === t) return e[n];
      }
    };
    const Oe = async (e, t, r) => {
      const n = e.map((e => T(e, x("VerifierLookupRequest", {
        verifier: t,
        verifier_id: r.toString()
      })).catch((e => ge.error("lookup request failed", e)))));
      return ye(n, (t => {
        const r = t.filter((e => e));
        const n = Se(r.map((e => e && e.error)), 1 + ~~(e.length / 2));
        const i = Se(r.map((e => e && e.result)), 1 + ~~(e.length / 2));
        return i || n ? Promise.resolve({
          keyResult: i,
          errorResult: n
        }) : Promise.reject(new Error(`invalid results ${JSON.stringify(t)}`));
      }));
    };
    const ke = (e, t, r, n) => new Promise(((i, o) => {
      setTimeout((() => {
        Oe(e, t, r).then(i).catch(o);
      }), n);
    }));
    const Pe = async e => {
      let {endpoints: t, torusNodePubs: r, lastPoint: n, firstPoint: i, verifier: o, verifierId: s, signerHost: a, network: c} = e;
      let u;
      let l;
      if (void 0 === n ? (u = Math.floor(Math.random() * t.length), l = u) : u = n % t.length, u === i) throw new Error("Looped through all");
      void 0 !== i && (l = i);
      const d = x("KeyAssign", {
        verifier: o,
        verifier_id: s.toString()
      });
      try {
        const e = await T(a, d, {
          headers: {
            pubKeyX: r[u].X,
            pubKeyY: r[u].Y,
            network: c
          }
        }, {
          useAPIKey: !0
        });
        return await T(t[u], me(me({}, d), e), {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        });
      } catch (h) {
        ge.error(h);
        if ([ "Timed out", "TypeError: Failed to fetch", "TypeError: cancelled", "TypeError: NetworkError when attempting to fetch resource." ].includes(h.message)) return Pe({
          endpoints: t,
          torusNodePubs: r,
          lastPoint: u + 1,
          firstPoint: l,
          verifier: o,
          verifierId: s,
          signerHost: a,
          network: c
        });
        throw new Error(`Sorry, the Torus Network that powers Web3Auth is currently very busy.\n    We will generate your key in time. Pls try again later. \n\n    ${h.message || ""}`);
      }
    };
    function Ae(e) {
      return `0x${N()("keccak256").update(e).digest().toString("hex")}`;
    }
    function Ee(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function Ce(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ee(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    class De {
      constructor() {
        let {enableOneKey: e = !1, metadataHost: t = "https://metadata.tor.us", allowHost: r = "https://signer.tor.us/api/allow", signerHost: n = "https://signer.tor.us/api/sign", serverTimeOffset: o = 0, network: s = "mainnet"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, "metadataHost", void 0), i(this, "allowHost", void 0), i(this, "serverTimeOffset", void 0), i(this, "enableOneKey", void 0), 
        i(this, "signerHost", void 0), i(this, "network", void 0), i(this, "ec", void 0), this.ec = new de.ec("secp256k1"), this.metadataHost = t, 
        this.allowHost = r, this.enableOneKey = e, this.serverTimeOffset = o || 0, this.signerHost = n, this.network = s;
      }
      static enableLogging() {
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? ge.enableAll() : ge.disableAll();
      }
      static setAPIKey(e) {
        k(e);
      }
      static setEmbedHost(e) {
        O(e);
      }
      static isGetOrSetNonceError(e) {
        return e instanceof we;
      }
      async getUserTypeAndAddress(e, t, r) {
        let {verifier: n, verifierId: i} = r;
        let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {keyResult: s, errorResult: a} = await Oe(e, n, i) || {};
        let c = !1;
        let u;
        if (a && JSON.stringify(a).includes("Verifier + VerifierID has not yet been assigned")) {
          if (!o) throw new Error("Verifier + VerifierID has not yet been assigned");
          await Pe({
            endpoints: e,
            torusNodePubs: t,
            lastPoint: void 0,
            firstPoint: void 0,
            verifier: n,
            verifierId: i,
            signerHost: this.signerHost,
            network: this.network
          });
          const r = await ke(e, n, i, 1e3);
          u = null == r ? void 0 : r.keyResult, c = !0;
        } else {
          if (!s) throw new Error(`node results do not match at first lookup ${JSON.stringify(s || {})}, ${JSON.stringify(a || {})}`);
          u = s;
        }
        if (u) {
          const {pub_key_X: e, pub_key_Y: t} = u.keys[0];
          let r;
          let n;
          let i;
          try {
            r = await this.getOrSetNonce(e, t, void 0, !c), n = new (le())(r.nonce || "0", 16);
          } catch {
            throw new we;
          }
          if ("v1" === r.typeOfUser) i = this.ec.keyFromPublic({
            x: e,
            y: t
          }).getPublic().add(this.ec.keyFromPrivate(n.toString(16)).getPublic()); else {
            if ("v2" !== r.typeOfUser) throw new Error("getOrSetNonce should always return typeOfUser.");
            i = this.ec.keyFromPublic({
              x: e,
              y: t
            }).getPublic().add(this.ec.keyFromPublic({
              x: r.pubNonce.x,
              y: r.pubNonce.y
            }).getPublic());
          }
          const o = i.getX().toString(16);
          const s = i.getY().toString(16);
          const a = this.generateAddressFromPubKey(i.getX(), i.getY());
          if ("v1" === r.typeOfUser) return {
            typeOfUser: r.typeOfUser,
            nonce: n,
            X: o,
            Y: s,
            address: a
          };
          if ("v2" === r.typeOfUser) return {
            typeOfUser: r.typeOfUser,
            nonce: n,
            pubNonce: r.pubNonce,
            upgraded: r.upgraded,
            X: o,
            Y: s,
            address: a
          };
        }
        throw new Error(`node results do not match at final lookup ${JSON.stringify(s || {})}, ${JSON.stringify(a || {})}`);
      }
      async setCustomKey(e) {
        let {privKeyHex: t, metadataNonce: r, torusKeyHex: n, customKeyHex: i} = e;
        let o;
        if (n) o = new (le())(n, 16); else {
          o = new (le())(t, 16).sub(r).umod(this.ec.curve.n);
        }
        const s = new (le())(i, 16).sub(o).umod(this.ec.curve.n);
        const a = this.generateMetadataParams(s.toString(16), o);
        await this.setMetadata(a);
      }
      async retrieveShares(e, t, r, n, i) {
        let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
        const s = [];
        await D(this.allowHost, {
          headers: {
            verifier: r,
            verifier_id: n.verifier_id,
            network: this.network
          }
        }, {
          useAPIKey: !0
        });
        const a = (0, ce.oq)();
        const c = (0, ce.rc)(a).toString("hex");
        const u = c.slice(2, 66);
        const l = c.slice(66);
        const d = Ae(i);
        for (let h = 0; h < e.length; h += 1) {
          const t = T(e[h], x("CommitmentRequest", {
            messageprefix: "mug00",
            tokencommitment: d.slice(2),
            temppubx: u,
            temppuby: l,
            verifieridentifier: r
          })).catch((e => {
            ge.error("commitment", e);
          }));
          s.push(t);
        }
        return ye(s, (t => t.filter((e => !(!e || "object" != typeof e) && !e.error)).length >= 3 * ~~(e.length / 4) + 1 ? Promise.resolve(t) : Promise.reject(new Error(`invalid ${JSON.stringify(t)}`)))).then((s => {
          const c = [];
          const u = [];
          for (let e = 0; e < s.length; e += 1) s[e] && u.push(s[e].result);
          for (let t = 0; t < e.length; t += 1) {
            const s = T(e[t], x("ShareRequest", {
              encrypted: "yes",
              item: [ Ce(Ce({}, n), {}, {
                idtoken: i,
                nodesignatures: u,
                verifieridentifier: r
              }, o) ]
            })).catch((e => ge.error("share req", e)));
            c.push(s);
          }
          return ye(c, (async (r, n) => {
            const i = r.filter((e => e));
            const o = Se(r.map((e => e && e.result && e.result.keys[0].PublicKey)), 1 + ~~(e.length / 2));
            if (i.length >= 1 + ~~(e.length / 2) && o) {
              const i = [];
              const u = [];
              for (let e = 0; e < r.length; e += 1) {
                var s, c;
                const n = r[e];
                if ((null == n || null === (s = n.result) || void 0 === s || null === (c = s.keys) || void 0 === c ? void 0 : c.length) > 0) {
                  n.result.keys.sort(((e, t) => new (le())(e.Index, 16).cmp(new (le())(t.Index, 16))));
                  const e = n.result.keys[0];
                  if (e.Metadata) {
                    const t = {
                      ephemPublicKey: pe.from(e.Metadata.ephemPublicKey, "hex"),
                      iv: pe.from(e.Metadata.iv, "hex"),
                      mac: pe.from(e.Metadata.mac, "hex")
                    };
                    i.push((0, ce.pe)(a, Ce(Ce({}, t), {}, {
                      ciphertext: pe.from(pe.from(e.Share, "base64").toString("binary").padStart(64, "0"), "hex")
                    })).catch((e => ge.debug("share decryption", e))));
                  } else i.push(Promise.resolve(pe.from(e.Share.padStart(64, "0"), "hex")));
                } else i.push(Promise.resolve(void 0));
                u.push(new (le())(t[e], 16));
              }
              const l = await Promise.all(i);
              if (n.resolved) return;
              const d = l.reduce(((e, t, r) => (t && e.push({
                index: u[r],
                value: new (le())(t)
              }), e)), []);
              const h = _e(d.length, 1 + ~~(e.length / 2));
              let f = null;
              for (let e = 0; e < h.length; e += 1) {
                const t = h[e];
                const r = d.filter(((e, r) => t.includes(r)));
                const n = r.map((e => e.value));
                const i = r.map((e => e.index));
                const s = this.lagrangeInterpolation(n, i);
                if (!s) continue;
                const a = (0, ce.rc)(pe.from(s.toString(16, 64), "hex")).toString("hex");
                const c = a.slice(2, 66);
                const u = a.slice(66);
                if (0 === new (le())(c, 16).cmp(new (le())(o.X, 16)) && 0 === new (le())(u, 16).cmp(new (le())(o.Y, 16))) {
                  f = s;
                  break;
                }
              }
              if (null == f) throw new Error("could not derive private key");
              return f;
            }
            throw new Error("invalid");
          }));
        })).then((async e => {
          let t = e;
          if (!t) throw new Error("Invalid private key returned");
          const r = (0, ce.rc)(pe.from(t.toString(16, 64), "hex")).toString("hex");
          const n = r.slice(2, 66);
          const i = r.slice(66);
          let o;
          if (this.enableOneKey) {
            const {nonce: e} = await this.getNonce(n, i, t);
            o = new (le())(e || "0", 16);
          } else o = await this.getMetadata({
            pub_key_X: n,
            pub_key_Y: i
          });
          ge.debug("> torus.js/retrieveShares", {
            privKey: t.toString(16),
            metadataNonce: o.toString(16)
          }), t = t.add(o).umod(this.ec.curve.n);
          const s = this.generateAddressFromPrivKey(t);
          return ge.debug("> torus.js/retrieveShares", {
            ethAddress: s,
            privKey: t.toString(16)
          }), {
            ethAddress: s,
            privKey: t.toString("hex", 64),
            metadataNonce: o
          };
        }));
      }
      async getMetadata(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const r = await T(`${this.metadataHost}/get`, e, t, {
            useAPIKey: !0
          });
          return r && r.message ? new (le())(r.message, 16) : new (le())(0);
        } catch (r) {
          return ge.error("get metadata error", r), new (le())(0);
        }
      }
      generateMetadataParams(e, t) {
        const r = this.ec.keyFromPrivate(t.toString("hex", 64));
        const n = {
          data: e,
          timestamp: new (le())(~~(this.serverTimeOffset + Date.now() / 1e3)).toString(16)
        };
        const i = r.sign(Ae(fe()(n)).slice(2));
        return {
          pub_key_X: r.getPublic().getX().toString("hex"),
          pub_key_Y: r.getPublic().getY().toString("hex"),
          set_data: n,
          signature: pe.from(i.r.toString(16, 64) + i.s.toString(16, 64) + new (le())("").toString(16, 2), "hex").toString("base64")
        };
      }
      async setMetadata(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          return (await T(`${this.metadataHost}/set`, e, t, {
            useAPIKey: !0
          })).message;
        } catch (r) {
          return ge.error("set metadata error", r), "";
        }
      }
      lagrangeInterpolation(e, t) {
        if (e.length !== t.length) return null;
        let r = new (le())(0);
        for (let n = 0; n < e.length; n += 1) {
          let i = new (le())(1);
          let o = new (le())(1);
          for (let r = 0; r < e.length; r += 1) if (n !== r) {
            i = i.mul(t[r].neg()), i = i.umod(this.ec.curve.n);
            let e = t[n].sub(t[r]);
            e = e.umod(this.ec.curve.n), o = o.mul(e).umod(this.ec.curve.n);
          }
          let s = i.mul(o.invm(this.ec.curve.n)).umod(this.ec.curve.n);
          s = s.mul(e[n]).umod(this.ec.curve.n), r = r.add(s);
        }
        return r.umod(this.ec.curve.n);
      }
      generateAddressFromPrivKey(e) {
        const t = this.ec.keyFromPrivate(e.toString("hex", 64), "hex").getPublic().encode("hex", !1).slice(2);
        ge.info(t, "public key");
        const r = `0x${Ae(pe.from(t, "hex")).slice(26)}`;
        return (0, a.toChecksumAddress)(r);
      }
      generateAddressFromPubKey(e, t) {
        const r = this.ec.keyFromPublic({
          x: e.toString("hex", 64),
          y: t.toString("hex", 64)
        });
        const n = r.getPublic().encode("hex", !1).slice(2);
        ge.info(r.getPublic().encode("hex", !1), "public key");
        const i = `0x${Ae(pe.from(n, "hex")).slice(26)}`;
        return (0, a.toChecksumAddress)(i);
      }
      async getPublicAddress(e, t, r) {
        let {verifier: n, verifierId: i} = r;
        let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        let s;
        ge.debug("> torus.js/getPublicAddress", {
          endpoints: e,
          torusNodePubs: t,
          verifier: n,
          verifierId: i,
          isExtended: o
        });
        let a = !1;
        const {keyResult: c, errorResult: u} = await Oe(e, n, i) || {};
        if (u && JSON.stringify(u).includes("Verifier not supported")) throw new Error("Verifier not supported. Check if you: \n\n      1. Are on the right network (Torus testnet/mainnet) \n\n      2. Have setup a verifier on dashboard.web3auth.io?");
        if (u && JSON.stringify(u).includes("Verifier + VerifierID has not yet been assigned")) {
          await Pe({
            endpoints: e,
            torusNodePubs: t,
            lastPoint: void 0,
            firstPoint: void 0,
            verifier: n,
            verifierId: i,
            signerHost: this.signerHost,
            network: this.network
          });
          const r = await ke(e, n, i, 1e3);
          s = null == r ? void 0 : r.keyResult, a = !0;
        } else {
          if (!c) throw new Error(`node results do not match at first lookup ${JSON.stringify(c || {})}, ${JSON.stringify(u || {})}`);
          s = c;
        }
        if (ge.debug("> torus.js/getPublicAddress", {
          finalKeyResult: s,
          isNewKey: a
        }), s) {
          var l;
          let {pub_key_X: e, pub_key_Y: t} = s.keys[0];
          let r;
          let n;
          let i;
          let c;
          let u;
          if (this.enableOneKey) {
            try {
              r = await this.getOrSetNonce(e, t, void 0, !a), n = new (le())(r.nonce || "0", 16), c = r.typeOfUser;
            } catch {
              throw new we;
            }
            if ("v1" === r.typeOfUser) i = this.ec.keyFromPublic({
              x: e,
              y: t
            }).getPublic().add(this.ec.keyFromPrivate(n.toString(16)).getPublic()); else {
              if ("v2" !== r.typeOfUser) throw new Error("getOrSetNonce should always return typeOfUser.");
              r.upgraded ? i = this.ec.keyFromPublic({
                x: e,
                y: t
              }).getPublic() : (i = this.ec.keyFromPublic({
                x: e,
                y: t
              }).getPublic().add(this.ec.keyFromPublic({
                x: r.pubNonce.x,
                y: r.pubNonce.y
              }).getPublic()), u = r.pubNonce);
            }
          } else c = "v1", n = await this.getMetadata({
            pub_key_X: e,
            pub_key_Y: t
          }), i = this.ec.keyFromPublic({
            x: e,
            y: t
          }).getPublic().add(this.ec.keyFromPrivate(n.toString(16)).getPublic());
          e = i.getX().toString(16), t = i.getY().toString(16);
          const d = this.generateAddressFromPubKey(i.getX(), i.getY());
          return ge.debug("> torus.js/getPublicAddress", {
            X: e,
            Y: t,
            address: d,
            typeOfUser: c,
            nonce: null === (l = n) || void 0 === l ? void 0 : l.toString(16),
            pubNonce: u
          }), o ? {
            typeOfUser: c,
            address: d,
            X: e,
            Y: t,
            metadataNonce: n,
            pubNonce: u
          } : d;
        }
        throw new Error(`node results do not match at final lookup ${JSON.stringify(c || {})}, ${JSON.stringify(u || {})}`);
      }
      async getOrSetNonce(e, t, r) {
        let n;
        const i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? "getNonce" : "getOrSetNonce";
        return n = r ? this.generateMetadataParams(i, r) : {
          pub_key_X: e,
          pub_key_Y: t,
          set_data: {
            data: i
          }
        }, T(`${this.metadataHost}/get_or_set_nonce`, n, void 0, {
          useAPIKey: !0
        });
      }
      async getNonce(e, t, r) {
        return this.getOrSetNonce(e, t, r, !0);
      }
      getPostboxKeyFrom1OutOf1(e, t) {
        const r = new (le())(e, 16);
        const n = new (le())(t, 16);
        return r.sub(n).umod(this.ec.curve.n).toString("hex");
      }
    }
    var Te = r(12724);
    var xe = r(64063);
    var je = r.n(xe);
    var Re = r(24970);
    var Ie = r(23482);
    var Me = r.n(Ie);
    var Ne = r(48764).Buffer;
    const Le = "google", Ue = "facebook", Be = "twitch", Ke = "reddit", He = "discord";
    const We = {
      GOOGLE: "google",
      FACEBOOK: "facebook",
      TWITCH: "twitch",
      REDDIT: "reddit",
      DISCORD: "discord",
      EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless"
    };
    const qe = {
      [We.GOOGLE]: "tkey-google",
      [We.FACEBOOK]: "tkey-facebook",
      [We.TWITCH]: "tkey-twitch",
      [We.REDDIT]: "tkey-reddit",
      [We.DISCORD]: "tkey-discord",
      [We.EMAIL_PASSWORDLESS]: "tkey-auth0-email-passwordless"
    };
    const Fe = "moonpay", Ve = "wyre", Xe = "rampnetwork", Ye = "xanpool", Ge = "mercuryo", ze = "transak";
    const Je = "mainnet", Ze = "matic", $e = "bsc_mainnet", Qe = "avalanche_mainnet";
    const et = {
      PRODUCTION: "production",
      DEVELOPMENT: "development",
      BINANCE: "binance",
      TESTING: "testing",
      LRC: "lrc",
      BETA: "beta"
    };
    const tt = {
      BOTTOM_LEFT: "bottom-left",
      TOP_LEFT: "top-left",
      BOTTOM_RIGHT: "bottom-right",
      TOP_RIGHT: "top-right"
    };
    const rt = {
      [Fe]: [ "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "COP", "CZK", "DKK", "DOP", "EGP", "EUR", "GBP", "HKD", "HRK", "IDR", "ILS", "JPY", "JOD", "KES", "KRW", "KWD", "LKR", "MAD", "MXN", "MYR", "NGN", "NOK", "NZD", "OMR", "PEN", "PKR", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "USD", "VND", "ZAR" ],
      [Ve]: [ "USD", "EUR", "GBP", "AUD", "CAD", "NZD", "ARS", "BRL", "CHF", "CLP", "COP", "CZK", "DKK", "HKD", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "PHP", "PLN", "SEK", "THB", "VND", "ZAR" ],
      [Xe]: [ "USD", "EUR", "GBP" ],
      [Ye]: [ "SGD", "HKD", "THB", "PHP", "INR", "IDR", "MYR", "AUD", "NZD", "KRW" ],
      [Ge]: [ "EUR", "USD", "GBP", "TRY", "JPY", "BRL", "NGN", "VND", "MXN", "KRW" ],
      [ze]: [ "ARS", "AUD", "BBD", "BGN", "BMD", "BRL", "CAD", "CHF", "CLP", "CRC", "CZK", "DKK", "DOP", "EUR", "FJD", "FKP", "GBP", "GIP", "HRK", "HUF", "IDR", "ILS", "ISK", "JMD", "JPY", "KES", "KRW", "MDL", "MXN", "MYR", "NOK", "NZD", "PEN", "PHP", "PLN", "PYG", "RON", "SEK", "SGD", "THB", "TRY", "TZS", "USD", "ZAR" ]
    };
    const nt = new Set([ "ETH", "USDT", "USDC", "TUSD", "EOSDT", "USD", "DAI", "GUSD", "DKKT", "PAX", "ILS", "RUB", "BYN", "EUR", "GBP", "JPY", "KRW", "PLN", "MXN", "AUD", "BRL", "CAD", "CHF", "KPW", "LAK", "LBP", "LKR", "XOF", "CNHT", "DOGE", "UAH", "TRY", "HKD", "XJP", "SGD", "USC", "NZD", "NGN", "RUR", "COP", "GHS", "EGP", "IDR", "BHD", "CRC", "PEN", "AED", "DOP", "PKR", "HUF", "VND", "XAR", "LTC", "RON", "OMR", "MYR", "DKK", "UGX", "ZMW", "SAR", "SEK", "GEL", "RWF", "IRR", "TZS", "CNY", "VEF", "BDT", "HRK", "CLP", "THB", "XAF", "ARS", "UYU", "SZL", "KZT", "NOK", "KES", "PAB", "INR", "CZK", "MAD", "TWD", "PHP", "ZAR", "BOB", "CDF", "DASH", "VES", "ISK", "MWK", "BAM", "TTD", "XRP", "JOD", "RSD", "HNL", "BGN", "GTQ", "BWP", "XMR", "MMK", "QAR", "AOA", "KWD", "MUR", "WUSD", "WEUR", "WAVES", "WTRY", "LRD", "LSL", "LYD", "AWG", "MDL", "BTO", "EURS", "CHFT", "MKD", "MNT", "MOP", "MRO", "MVR", "VOLLAR", "CKUSD", "KHR", "VUV", "BITCNY", "QC", "BBD", "NAD", "NPR", "PGK", "PYG", "BIF", "BMD", "BND", "XLM", "BNB", "SCR", "BAT", "CRO", "HT", "KCS", "LEO", "LINK", "MKR", "NPXS", "OMG", "REP", "ZB", "ZIL", "ZRX", "BCH", "BZD", "CUP", "CVE", "DJF", "DZD", "ERN", "ETB", "FJD", "FKP", "BUSD", "ANCT", "ALL", "AMD", "ANG", "CNYX", "IQD", "UZS", "TND", "GGP", "XAU", "KGS", "GIP", "JMD", "ZEC", "USDP", "BSV", "EMC2", "SNT", "GTO", "POWR", "EUSD", "EURT", "BCY", "BTS", "ATM", "BLOCKPAY", "ARDR", "AMP", "B2X", "BITGOLD", "BITEUR", "ATB", "BITUSD", "AGRS", "DFXT", "HIKEN", "BIX", "KNC", "EOS", "COB", "COSS", "BMH", "NANO", "BDG", "BNT", "XVG", "LKK1Y", "LKK", "USDK", "EURN", "NZDT", "JSE", "GMD", "GNF", "GYD", "YER", "XPF", "HTG", "SLL", "SOS", "WST", "SVC", "SYP", "NEO", "KMF", "JUMP", "AYA", "BLAST", "WGR", "BCN", "BTG", "URALS", "INN", "USDQ", "CNH", "HUSD", "BKRW", "NZDX", "EURX", "CADX", "USDEX", "JPYX", "AUDX", "VNDC", "EON", "GBPX", "CHFX", "USDJ", "IDRT", "USDS", "USDN", "BIDR", "IDK", "BSD", "BTN", "KYD", "NIO", "SBD", "SDG", "SHP", "TOP", "XCD", "XCHF", "CNYT", "GYEN", "ZUSD", "GOLD", "TRX", "TRYB", "PLATC", "STRAX", "UST", "GLM", "VAI", "BRZ", "DDRST", "XAUT", "MIM" ]);
    function it(e) {
      return rt[e].filter((e => nt.has(e)));
    }
    const ot = {
      [Fe]: {
        line1: "Credit/ Debit Card/ Apple Pay",
        line2: "4.5% or 5 USD",
        line3: "2,000€/day, 10,000€/mo",
        supportPage: "https://help.moonpay.io/en/",
        minOrderValue: 24.99,
        maxOrderValue: 5e4,
        validCurrencies: it(Fe),
        validCryptoCurrenciesByChain: {
          [Je]: [ {
            value: "aave",
            display: "AAVE"
          }, {
            value: "bat",
            display: "BAT"
          }, {
            value: "dai",
            display: "DAI"
          }, {
            value: "eth",
            display: "ETH"
          }, {
            value: "mkr",
            display: "MKR"
          }, {
            value: "matic",
            display: "MATIC"
          }, {
            value: "usdt",
            display: "USDT"
          }, {
            value: "usdc",
            display: "USDC"
          } ],
          [Ze]: [ {
            value: "eth_polygon",
            display: "ETH"
          }, {
            value: "matic_polygon",
            display: "MATIC"
          }, {
            value: "usdc_polygon",
            display: "USDC"
          } ],
          [$e]: [ {
            value: "bnb_bsc",
            display: "BNB"
          }, {
            value: "busd_bsc",
            display: "BUSD"
          } ],
          [Qe]: [ {
            value: "avax_cchain",
            display: "AVAX"
          } ]
        },
        includeFees: !0,
        api: !0,
        enforceMax: !1
      },
      [Ve]: {
        line1: "Apple Pay/ Debit/ Credit Card",
        line2: "4.9% + 30¢ or 5 USD",
        line3: "$250/day",
        supportPage: "https://support.sendwyre.com/en/",
        minOrderValue: 5,
        maxOrderValue: 500,
        validCurrencies: it(Ve),
        validCryptoCurrenciesByChain: {
          [Je]: [ {
            value: "AAVE",
            display: "AAVE"
          }, {
            value: "BAT",
            display: "BAT"
          }, {
            value: "BUSD",
            display: "BUSD"
          }, {
            value: "DAI",
            display: "DAI"
          }, {
            value: "ETH",
            display: "ETH"
          }, {
            value: "MKR",
            display: "MKR"
          }, {
            value: "UNI",
            display: "UNI"
          }, {
            value: "USDC",
            display: "USDC"
          }, {
            value: "USDT",
            display: "USDT"
          } ],
          [Ze]: [ {
            value: "MUSDC",
            display: "USDC"
          } ],
          [Qe]: [ {
            value: "AVAXC",
            display: "AVAXC"
          } ]
        },
        includeFees: !1,
        api: !0,
        enforceMax: !1
      },
      [Xe]: {
        line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
        line2: "0.49% - 2.9%",
        line3: "5,000€/purchase, 20,000€/mo",
        supportPage: "https://instant.ramp.network/",
        minOrderValue: 50,
        maxOrderValue: 2e4,
        validCurrencies: it(Xe),
        validCryptoCurrenciesByChain: {
          [Je]: [ {
            value: "ETH",
            display: "ETH"
          }, {
            value: "DAI",
            display: "DAI"
          }, {
            value: "USDC",
            display: "USDC"
          }, {
            value: "USDT",
            display: "USDT"
          } ],
          [Ze]: [ {
            value: "MATIC_DAI",
            display: "DAI"
          }, {
            value: "MATIC_MATIC",
            display: "MATIC"
          }, {
            value: "MATIC_USDC",
            display: "USDC"
          } ],
          [Qe]: [ {
            value: "AVAX",
            display: "AVAX"
          } ]
        },
        includeFees: !0,
        api: !0,
        receiveHint: "walletTopUp.receiveHintRamp",
        enforceMax: !1
      },
      [Ye]: {
        line1: "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ <br>ViettelPay/ DuitNow",
        line2: "2.5% buying, 3% selling",
        line3: "$2,500 / day",
        supportPage: "mailto:support@xanpool.com",
        minOrderValue: 100,
        maxOrderValue: 2500,
        validCurrencies: it(Ye),
        validCryptoCurrenciesByChain: {
          [Je]: [ {
            value: "ETH",
            display: "ETH"
          }, {
            value: "USDT",
            display: "USDT"
          } ]
        },
        includeFees: !0,
        api: !0,
        sell: !0,
        enforceMax: !1
      },
      [Ge]: {
        line1: "Credit/ Debit Card/ Apple Pay",
        line2: "3.95% or 4 USD",
        line3: "10,000€/day, 25,000€/mo",
        supportPage: "mailto:support@mercuryo.io",
        minOrderValue: 30,
        maxOrderValue: 5e3,
        validCurrencies: it(Ge),
        validCryptoCurrenciesByChain: {
          [Je]: [ {
            value: "ETH",
            display: "ETH"
          }, {
            value: "BAT",
            display: "BAT"
          }, {
            value: "USDT",
            display: "USDT"
          }, {
            value: "DAI",
            display: "DAI"
          } ],
          [$e]: [ {
            value: "BNB",
            display: "BNB"
          }, {
            value: "BUSD",
            display: "BUSD"
          }, {
            value: "1INCH",
            display: "1INCH"
          } ]
        },
        includeFees: !0,
        api: !0,
        enforceMax: !1
      },
      [ze]: {
        line1: "Credit/ Debit Card/ <br/>Bank Transfer (sepa/gbp)",
        line2: "0.99% - 5.5% or 5 USD",
        line3: "500€/day",
        supportPage: "https://support.transak.com/hc/en-US",
        minOrderValue: 30,
        maxOrderValue: 500,
        validCurrencies: it(ze),
        validCryptoCurrenciesByChain: {
          [Je]: [ {
            value: "AAVE",
            display: "AAVE"
          }, {
            value: "DAI",
            display: "DAI"
          }, {
            value: "ETH",
            display: "ETH"
          }, {
            value: "USDC",
            display: "USDC"
          }, {
            value: "USDT",
            display: "USDT"
          } ],
          [Ze]: [ {
            value: "AAVE",
            display: "AAVE"
          }, {
            value: "DAI",
            display: "DAI"
          }, {
            value: "MATIC",
            display: "MATIC"
          }, {
            value: "USDC",
            display: "USDC"
          }, {
            value: "USDT",
            display: "USDT"
          }, {
            value: "WETH",
            display: "WETH"
          } ],
          [$e]: [ {
            value: "BNB",
            display: "BNB"
          }, {
            value: "BUSD",
            display: "BUSD"
          } ],
          [Qe]: [ {
            value: "AVAX",
            display: "AVAX"
          } ]
        },
        includeFees: !0,
        enforceMax: !0
      }
    };
    var st = {
      supportedVerifierList: Object.values(We),
      paymentProviders: ot,
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
      localStorageKeyPrefix: "torus-"
    };
    const at = e => new Promise(((t, r) => {
      null != window.document.body ? Promise.resolve(e()).then(t).catch(r) : window.document.addEventListener("DOMContentLoaded", (() => {
        Promise.resolve(e()).then(t).catch(r);
      }));
    }));
    const ct = e => {
      const t = window.document.createElement("template");
      const r = e.trim();
      return t.innerHTML = r, t.content.firstChild;
    };
    const ut = (e, t, r) => {
      const n = i => {
        r(i), e.removeListener(t, n);
      };
      e.on(t, n);
    };
    async function lt() {
      return new Promise((e => {
        "loading" !== document.readyState ? e() : function(e, t, r) {
          for (var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), o = 3; o < n; o++) i[o - 3] = arguments[o];
          const s = () => {
            r(...i), e.removeEventListener(t, s);
          };
          e.addEventListener(t, s);
        }(document, "DOMContentLoaded", e);
      }));
    }
    var dt = p().getLogger("torus-embed");
    var ht = {
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
    const {paymentProviders: ft} = st;
    function pt(e, t, r) {
      let n = "MetaMask: Lost connection to \"".concat(e, "\".");
      null != t && t.stack && (n += "\n".concat(t.stack)), dt.warn(n), r && r.listenerCount("error") > 0 && r.emit("error", n);
    }
    const gt = () => Math.random().toString(36).slice(2);
    const vt = async (e, t) => {
      let r;
      let n;
      const i = "1.27.2";
      let o = t.version || i;
      try {
        if (("binance" === e || "production" === e) && !t.version) {
          let e;
          e = st.prodTorusUrl ? {
            data: st.prodTorusUrl
          } : await D("".concat(st.api, "/latestversion?name=@toruslabs/torus-embed&version=").concat(i), {}, {
            useAPIKey: !0
          }), o = e.data, st.prodTorusUrl = e.data;
        }
      } catch (s) {
        dt.error(s, "unable to fetch latest version");
      }
      switch (dt.info("version used: ", o), e) {
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
    const yt = () => {
      let e = window.navigator.language || "en-US";
      const t = e.split("-");
      return e = Object.prototype.hasOwnProperty.call(st.translations, t[0]) ? t[0] : "en", e;
    };
    const bt = [ "eth_subscription" ];
    const mt = () => {};
    const wt = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375";
    const _t = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
    function St(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    Z.defaultMaxListeners = 100;
    const Ot = function(e, t) {
      let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      return (n, i) => n || i.error ? t(n || i.error) : !r || Array.isArray(i) ? e(i) : e(i.result);
    };
    class kt extends Z {
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
        }), !(0, Re.duplex)(e)) throw new Error(ht.errors.invalidDuplexStream());
        this.isTorus = !0, this.setMaxListeners(t), this._state = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? St(Object(r), !0).forEach((function(t) {
              i(e, t, r[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : St(Object(r)).forEach((function(t) {
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
        const o = new ae;
        X()(e, o, e, this._handleStreamDisconnect.bind(this, "MetaMask")), this._publicConfigStore = new Te.ObservableStore({
          storageKey: "Metamask-Config"
        }), X()(o.createStream("publicConfig"), (0, Te.storeAsStream)(this._publicConfigStore), pt.bind(this, "MetaMask PublicConfigStore")), 
        o.ignoreStream("phishing"), this.on("connect", (() => {
          this._state.isConnected = !0;
        }));
        const s = Q();
        X()(s.stream, o.createStream(n), s.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider"));
        const a = new re;
        a.push(ee()), a.push(function() {
          return (e, t, r) => {
            "string" == typeof e.method && e.method || (t.error = K.ethErrors.rpc.invalidRequest({
              message: "The request 'method' must be a non-empty string.",
              data: e
            })), r((e => {
              const {error: r} = t;
              return r ? (dt.error("MetaMask - RPC Error: ".concat(r.message), r), e()) : e();
            }));
          };
        }()), a.push(s.middleware), this._rpcEngine = a, s.events.on("notification", (e => {
          const {method: t, params: r} = e;
          "wallet_accountsChanged" === t ? this._handleAccountsChanged(r) : "wallet_unlockStateChanged" === t ? this._handleUnlockStateChanged(r) : "wallet_chainChanged" === t ? this._handleChainChanged(r) : bt.includes(e.method) && (this.emit("data", e), 
          this.emit("notification", r.result), this.emit("message", {
            type: t,
            data: r
          }));
        }));
      }
      get publicConfigStore() {
        return this._sentWarnings.publicConfigStore || (dt.warn(ht.warnings.publicConfigStore), this._sentWarnings.publicConfigStore = !0), 
        this._publicConfigStore;
      }
      isConnected() {
        return this._state.isConnected;
      }
      async request(e) {
        if (!e || "object" != typeof e || Array.isArray(e)) throw K.ethErrors.rpc.invalidRequest({
          message: ht.errors.invalidRequestArgs(),
          data: e
        });
        const {method: t, params: r} = e;
        if ("string" != typeof t || 0 === t.length) throw K.ethErrors.rpc.invalidRequest({
          message: ht.errors.invalidRequestMethod(),
          data: e
        });
        if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r)) throw K.ethErrors.rpc.invalidRequest({
          message: ht.errors.invalidRequestParams(),
          data: e
        });
        return new Promise(((e, n) => {
          this._rpcRequest({
            method: t,
            params: r
          }, Ot(e, n));
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
          dt.error("MetaMask: Failed to get initial state. Please report this bug.", e);
        } finally {
          dt.info("initialized state"), this._state.initialized = !0, this.emit("_initialized");
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
        return this._sentWarnings.send || (dt.warn(ht.warnings.sendDeprecation), this._sentWarnings.send = !0), "string" != typeof e || t && !Array.isArray(t) ? e && "object" == typeof e && "function" == typeof t ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise(((r, n) => {
          try {
            this._rpcRequest({
              method: e,
              params: t
            }, Ot(r, n, !1));
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
          this._rpcRequest(e, mt), t = !0;
          break;

         case "net_version":
          t = this.networkVersion || null;
          break;

         default:
          throw new Error(ht.errors.unsupportedSync(e.method));
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
        }), dt.debug(ht.info.connected(e)));
      }
      _handleDisconnect(e, t) {
        if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
          let r;
          this._state.isConnected = !1, e ? (r = new K.EthereumRpcError(1013, t || ht.errors.disconnected()), dt.debug(r)) : (r = new K.EthereumRpcError(1011, t || ht.errors.permanentlyDisconnected()), 
          dt.error(r), this.chainId = null, this._state.accounts = null, this.selectedAddress = null, this._state.isUnlocked = !1, 
          this._state.isPermanentlyDisconnected = !0), this.emit("disconnect", r);
        }
      }
      _handleStreamDisconnect(e, t) {
        pt(e, t, this), this._handleDisconnect(!1, t ? t.message : void 0);
      }
      _handleAccountsChanged(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let n = e;
        Array.isArray(n) || (dt.error("MetaMask: Received non-array accounts parameter. Please report this bug.", n), n = []);
        for (const i of e) if ("string" != typeof i) {
          dt.error("MetaMask: Received non-string account. Please report this bug.", e), n = [];
          break;
        }
        je()(this._state.accounts, n) || (t && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !r && dt.error('MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.', n), 
        this._state.accounts = n, this.emit("accountsChanged", n)), this.selectedAddress !== n[0] && (this.selectedAddress = n[0] || null);
      }
      _handleChainChanged() {
        let {chainId: e, networkVersion: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e && t ? "loading" === t ? this._handleDisconnect(!0) : (this._handleConnect(e), e !== this.chainId && (this.chainId = e, 
        this._state.initialized && this.emit("chainChanged", this.chainId))) : dt.error("MetaMask: Received invalid network parameters. Please report this bug.", {
          chainId: e,
          networkVersion: t
        });
      }
      _handleUnlockStateChanged() {
        let {accounts: e, isUnlocked: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        "boolean" == typeof t ? t !== this._state.isUnlocked && (this._state.isUnlocked = t, this._handleAccountsChanged(e || [])) : dt.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.", {
          isUnlocked: t
        });
      }
      _warnOfDeprecation(e) {
        !1 === this._sentWarnings.events[e] && (dt.warn(ht.warnings.events[e]), this._sentWarnings.events[e] = !0);
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
    const Pt = (e, t) => {
      const r = {};
      return e.algorithms.forEach((e => {
        r[e] = Me()(e).update(t, "utf8").digest("base64");
      })), r;
    };
    const At = (e, t) => {
      const r = (e => ({
        algorithms: e.algorithms || [ "sha256" ],
        delimiter: e.delimiter || " ",
        full: e.full || !1
      }))(e);
      const n = {
        hashes: Pt(r, t),
        integrity: void 0
      };
      return n.integrity = ((e, t) => {
        let r = "";
        return r += Object.keys(t.hashes).map((e => "".concat(e, "-").concat(t.hashes[e]))).join(e.delimiter), r;
      })(r, n), r.full ? n : n.integrity;
    };
    class Et extends L.EventEmitter {
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
    function Ct(e) {
      return new Promise(((t, r) => {
        try {
          const r = document.createElement("img");
          r.onload = () => t(!0), r.onerror = () => t(!1), r.src = e;
        } catch (n) {
          r(n);
        }
      }));
    }
    const Dt = e => {
      const {document: t} = e;
      const r = t.querySelector('head > meta[property="og:site_name"]');
      if (r) return r.content;
      const n = t.querySelector('head > meta[name="title"]');
      return n ? n.content : t.title && t.title.length > 0 ? t.title : e.location.hostname;
    };
    async function Tt(e) {
      const {document: t} = e;
      let r = t.querySelector('head > link[rel="shortcut icon"]');
      return r && await Ct(r.href) ? r.href : (r = Array.from(t.querySelectorAll('head > link[rel="icon"]')).find((e => Boolean(e.href))), 
      r && await Ct(r.href) ? r.href : null);
    }
    async function xt(e) {
      try {
        const t = await (async () => ({
          name: Dt(window),
          icon: await Tt(window)
        }))();
        e.handle({
          jsonrpc: "2.0",
          id: gt(),
          method: "wallet_sendDomainMetadata",
          params: t
        }, mt);
      } catch (t) {
        dt.error({
          message: ht.errors.sendSiteMetadata(),
          originalError: t
        });
      }
    }
    const jt = [ "host", "chainId", "networkName" ];
    function Rt(e, t) {
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
        t % 2 ? Rt(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rt(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    const Mt = {
      [Le]: !0,
      [Ue]: !0,
      [Ke]: !0,
      [Be]: !0,
      [He]: !0
    };
    const Nt = "sha384-FLPj0jKrb6vIli62Ed4n/sqWhdhHMpFz3NffAV4H8uqTkzPsf4IAtKFgeVGgxb4+";
    const Lt = [ "eth_sendTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "eth_getEncryptionPublicKey", "eth_decrypt" ];
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
          hash: Nt,
          version: ""
        });
        e.href = "".concat(t, "/popup"), e.crossOrigin = "anonymous", e.type = "text/html", e.rel = "prefetch", e.relList && e.relList.supports && e.relList.supports("prefetch") && document.head.appendChild(e);
      } catch (e) {
        dt.warn(e);
      }
    }();
    class Bt {
      constructor() {
        let {buttonPosition: e = tt.BOTTOM_LEFT, modalZIndex: t = 99999, apiKey: r = "torus-default"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, "buttonPosition", tt.BOTTOM_LEFT), i(this, "torusUrl", void 0), i(this, "torusIframe", void 0), i(this, "styleLink", void 0), 
        i(this, "isLoggedIn", void 0), i(this, "isInitialized", void 0), i(this, "torusWidgetVisibility", void 0), i(this, "torusAlert", void 0), 
        i(this, "nodeDetailManager", void 0), i(this, "torusJs", void 0), i(this, "apiKey", void 0), i(this, "modalZIndex", void 0), 
        i(this, "alertZIndex", void 0), i(this, "torusAlertContainer", void 0), i(this, "isIframeFullScreen", void 0), i(this, "whiteLabel", void 0), 
        i(this, "requestedVerifier", void 0), i(this, "currentVerifier", void 0), i(this, "embedTranslations", void 0), i(this, "ethereum", void 0), 
        i(this, "provider", void 0), i(this, "communicationMux", void 0), i(this, "isLoginCallback", void 0), i(this, "dappStorageKey", void 0), 
        i(this, "paymentProviders", st.paymentProviders), i(this, "loginHint", ""), i(this, "useWalletConnect", void 0), this.buttonPosition = e, 
        this.torusUrl = "", this.isLoggedIn = !1, this.isInitialized = !1, this.torusWidgetVisibility = !0, this.requestedVerifier = "", 
        this.currentVerifier = "", this.nodeDetailManager = new l, this.torusJs = new De({
          metadataHost: "https://metadata.tor.us",
          allowHost: "https://signer.tor.us/api/allow",
          network: "mainnet"
        }), this.apiKey = r, De.setAPIKey(r), k(r), this.modalZIndex = t, this.alertZIndex = t + 1e3, this.isIframeFullScreen = !1, 
        this.dappStorageKey = "";
      }
      async init() {
        let {buildEnv: e = et.PRODUCTION, enableLogging: t = !1, enabledVerifiers: r = Mt, network: n = {
          host: "mainnet",
          chainId: null,
          networkName: "",
          blockExplorer: "",
          ticker: "",
          tickerName: ""
        }, loginConfig: i = {}, showTorusButton: o = !0, integrity: s = {
          check: !1,
          hash: Nt,
          version: ""
        }, whiteLabel: a, skipTKey: c = !1, useLocalStorage: u = !1, useWalletConnect: l = !1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.isInitialized) throw new Error("Already initialized");
        const {torusUrl: d, logLevel: f} = await vt(e, s);
        dt.info(d, "url loaded"), this.torusUrl = d, this.whiteLabel = a, this.useWalletConnect = l, dt.setDefaultLevel(f), t ? dt.enableAll() : dt.disableAll(), 
        this.torusWidgetVisibility = o;
        let p = "";
        if (Ut && u) {
          const e = "".concat(st.localStorageKeyPrefix).concat(window.location.hostname);
          const t = window.localStorage.getItem(e);
          if (t) p = t; else {
            const t = "torus-app-".concat(gt());
            window.localStorage.setItem(e, t), p = t;
          }
        }
        this.dappStorageKey = p;
        const g = new URL(d);
        g.pathname.endsWith("/") ? g.pathname += "popup" : g.pathname += "/popup", p && (g.hash = "#dappStorageKey=".concat(p)), 
        this.torusIframe = ct("<iframe\n        id=\"torusIframe\"\n        allow=".concat(l ? "camera" : "", "\n        class=\"torusIframe\"\n        src=\"").concat(g.href, "\"\n        style=\"display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ").concat(this.modalZIndex, "\"\n      ></iframe>")), 
        this.torusAlertContainer = ct('<div id="torusAlertContainer"></div>'), this.torusAlertContainer.style.display = "none", 
        this.torusAlertContainer.style.setProperty("z-index", this.alertZIndex.toString());
        const v = window.document.createElement("link");
        v.setAttribute("rel", "stylesheet"), v.setAttribute("type", "text/css"), v.setAttribute("href", "".concat(d, "/css/widget.css")), 
        this.styleLink = v;
        const {defaultLanguage: y = yt(), customTranslations: b = {}} = this.whiteLabel || {};
        const m = h()(st.translations, b)[y] || st.translations[yt()];
        this.embedTranslations = m.embed;
        const w = async () => (await lt(), new Promise(((e, t) => {
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
        if ("production" === e && s.check) {
          const e = "".concat(d, "/popup");
          const t = await fetch(e, {
            cache: "reload"
          });
          if ("max-age=3600" !== t.headers.get("Cache-Control")) throw new Error("Unexpected Cache-Control headers, got ".concat(t.headers.get("Cache-Control")));
          const r = await t.text();
          const n = At({
            algorithms: [ "sha384" ]
          }, r);
          if (dt.info(n, "integrity"), n !== s.hash) throw this.clearInit(), new Error("Integrity check failed");
          await w();
        } else await w();
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
          ut(r, "data", (r => {
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
        let {host: t = "mainnet", chainId: r = null, networkName: i = ""} = e, o = n(e, jt);
        return new Promise(((e, n) => {
          const s = this.communicationMux.getStream("provider_change");
          ut(s, "data", (t => {
            const {err: r, success: i} = t.data;
            dt.info(t), r ? n(r) : i ? e() : n(new Error("some error occured"));
          }));
          const a = gt();
          this._handleWindow(a, {
            target: "_blank",
            features: wt
          }), s.write({
            name: "show_provider_change",
            data: {
              network: It({
                host: t,
                chainId: r,
                networkName: i
              }, o),
              preopenInstanceId: a,
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
        ut(r, "data", (e => {
          if ("show_wallet_instance" === e.name) {
            const {instanceId: r} = e.data;
            const i = new URL("".concat(this.torusUrl, "/wallet").concat(n));
            i.searchParams.append("integrity", "true"), i.searchParams.append("instanceId", r), Object.keys(t).forEach((e => {
              i.searchParams.append(e, t[e]);
            })), this.dappStorageKey && (i.hash = "#dappStorageKey=".concat(this.dappStorageKey));
            new Et({
              url: i,
              features: "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315"
            }).open();
          }
        }));
      }
      async getPublicAddress(e) {
        let {verifier: t, verifierId: r, isExtended: n = !1} = e;
        if (!st.supportedVerifierList.includes(t) || !qe[t]) throw new Error("Unsupported verifier");
        const i = await this.nodeDetailManager.getNodeDetails({
          verifier: t,
          verifierId: r
        });
        const o = i.torusNodeEndpoints;
        const s = i.torusNodePub;
        const a = t;
        const c = qe[t];
        try {
          const e = await this.torusJs.getUserTypeAndAddress(o, s, {
            verifier: a,
            verifierId: r
          });
          if ("v1" === e.typeOfUser) return n ? e : e.address;
          const t = await this.torusJs.getUserTypeAndAddress(o, s, {
            verifier: c,
            verifierId: r
          }, !0);
          return n ? t : t.address;
        } catch (u) {
          if (null != u && u.message.includes("Verifier + VerifierID has not yet been assigned")) {
            const e = await this.torusJs.getUserTypeAndAddress(o, s, {
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
              const {name: i, data: {approved: o, payload: s, rejected: a, newRequest: c}} = n;
              if ("user_info_access_response" === i) if (o) t(s); else if (a) r(new Error("User rejected the request")); else if (c) {
                const n = this.communicationMux.getStream("user_info");
                ut(n, "data", (e => {
                  "user_info_response" === e.name && (e.data.approved ? t(e.data.payload) : r(new Error("User rejected the request")));
                }));
                const i = gt();
                this._handleWindow(i, {
                  target: "_blank",
                  features: wt
                }), n.write({
                  name: "user_info_request",
                  data: {
                    message: e,
                    preopenInstanceId: i
                  }
                });
              }
            };
            ut(n, "data", i);
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
              if (e && !ft[e]) return r.provider = "Invalid Provider", {
                errors: r,
                isValid: 0 === Object.keys(r).length
              };
              const n = ft[e];
              const i = t || {};
              if (i.fiatValue) {
                const e = +parseFloat(i.fiatValue.toString()) || 0;
                e < n.minOrderValue && (r.fiatValue = "Requested amount is lower than supported"), e > n.maxOrderValue && n.enforceMax && (r.fiatValue = "Requested amount is higher than supported");
              }
              if (i.selectedCurrency && !n.validCurrencies.includes(i.selectedCurrency) && (r.selectedCurrency = "Unsupported currency"), 
              i.selectedCryptoCurrency) {
                const t = Object.values(n.validCryptoCurrenciesByChain).flat().map((e => e.value));
                const o = e === Fe ? i.selectedCryptoCurrency.toLowerCase() : i.selectedCryptoCurrency;
                t && !t.includes(o) && (r.selectedCryptoCurrency = "Unsupported cryptoCurrency");
              }
              return {
                errors: r,
                isValid: 0 === Object.keys(r).length
              };
            })(e, t);
            if (!o) return void n(new Error(JSON.stringify(i)));
            const s = this.communicationMux.getStream("topup");
            ut(s, "data", (e => {
              "topup_response" === e.name && (e.data.success ? r(e.data.success) : n(new Error(e.data.error)));
            }));
            const a = gt();
            this._handleWindow(a), s.write({
              name: "topup_request",
              data: {
                provider: e,
                params: t,
                preopenInstanceId: a
              }
            });
          } else n(new Error("Torus is not initialized yet"));
        }));
      }
      async loginWithPrivateKey(e) {
        const {privateKey: t, userInfo: r} = e;
        return new Promise(((e, n) => {
          if (this.isInitialized) {
            if (32 !== Ne.from(t, "hex").length) return void n(new Error("Invalid private key, Please provide a 32 byte valid secp25k1 private key"));
            const i = this.communicationMux.getStream("login_with_private_key");
            ut(i, "data", (t => {
              "login_with_private_key_response" === t.name && (t.data.success ? e(t.data.success) : n(new Error(t.data.error)));
            })), i.write({
              name: "login_with_private_key_request",
              data: {
                privateKey: t,
                userInfo: r
              }
            });
          } else n(new Error("Torus is not initialized yet"));
        }));
      }
      async showWalletConnectScanner() {
        if (!this.useWalletConnect) throw new Error("Set `useWalletConnect` as true in init function options to use wallet connect scanner");
        return new Promise(((e, t) => {
          if (this.isLoggedIn) {
            const r = this.communicationMux.getStream("wallet_connect_stream");
            ut(r, "data", (r => {
              "wallet_connect_stream_res" === r.name && (r.data.success ? e(r.data.success) : t(new Error(r.data.error)), this._displayIframe());
            })), r.write({
              name: "wallet_connect_stream_req"
            }), this._displayIframe(!0);
          } else t(new Error("User has not logged in yet"));
        }));
      }
      _handleWindow(e) {
        let {url: t, target: r, features: n} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e) {
          const i = this.communicationMux.getStream("window");
          const o = new URL(t || "".concat(this.torusUrl, "/redirect?preopenInstanceId=").concat(e));
          this.dappStorageKey && (o.hash ? o.hash += "&dappStorageKey=".concat(this.dappStorageKey) : o.hash = "#dappStorageKey=".concat(this.dappStorageKey));
          const s = new Et({
            url: o,
            target: r,
            features: n
          });
          if (s.open(), !s.window) return void this._createPopupBlockAlert(e, o.href);
          i.write({
            name: "opened_window",
            data: {
              preopenInstanceId: e
            }
          });
          const a = t => {
            let {preopenInstanceId: r, close: n} = t;
            r === e && n && (s.close(), i.removeListener("data", a));
          };
          i.on("data", a), s.once("close", (() => {
            i.write({
              data: {
                preopenInstanceId: e,
                closed: !0
              }
            }), i.removeListener("data", a);
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
         case tt.TOP_LEFT:
          t.top = "0px", t.left = "0px", t.right = "auto", t.bottom = "auto";
          break;

         case tt.TOP_RIGHT:
          t.top = "0px", t.right = "0px", t.left = "auto", t.bottom = "auto";
          break;

         case tt.BOTTOM_RIGHT:
          t.bottom = "0px", t.right = "0px", t.top = "auto", t.left = "auto";
          break;

         case tt.BOTTOM_LEFT:
         default:
          t.bottom = "0px", t.left = "0px", t.top = "auto", t.right = "auto";
        }
        Object.assign(this.torusIframe.style, t), this.isIframeFullScreen = e;
      }
      _setupWeb3() {
        dt.info("setupWeb3 running");
        const e = new z({
          name: "embed_metamask",
          target: "iframe_metamask",
          targetWindow: this.torusIframe.contentWindow,
          targetOrigin: new URL(this.torusUrl).origin
        });
        const t = new z({
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
            id: gt(),
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
          if (!Array.isArray(n) && Lt.includes(n.method)) {
            const e = gt();
            this._handleWindow(e, {
              target: "_blank",
              features: _t
            }), n.preopenInstanceId = e;
          }
          r._rpcEngine.handle(n, t);
        };
        const i = new Proxy(r, {
          deleteProperty: () => !0
        });
        this.ethereum = i;
        const o = function(e) {
          const t = new ae;
          return t.getStream = function(e) {
            return this._substreams[e] ? this._substreams[e] : this.createStream(e);
          }, X()(e, t, e, (e => {
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
        })), this.provider = i, this.provider.shouldSendMetadata && xt(this.provider._rpcEngine), r._initializeState(), dt.debug("Torus - injected provider");
      }
      _showLoginPopup(e, t, r) {
        const n = e => {
          const {err: n, selectedAddress: i} = e;
          n ? (dt.error(n), r && r(n)) : t && t([ i ]), this.isIframeFullScreen && this._displayIframe();
        };
        const i = this.communicationMux.getStream("oauth");
        if (this.requestedVerifier) {
          ut(i, "data", n);
          const t = gt();
          this._handleWindow(t), i.write({
            name: "oauth",
            data: {
              calledFromEmbed: e,
              verifier: this.requestedVerifier,
              preopenInstanceId: t,
              login_hint: this.loginHint
            }
          });
        } else this._displayIframe(!0), ut(i, "data", n), i.write({
          name: "oauth_modal",
          data: {
            calledFromEmbed: e
          }
        });
      }
      _createPopupBlockAlert(e, t) {
        const r = this._getLogoUrl();
        const n = ct('<div id="torusAlert" class="torus-alert--v2">' + "<div id=\"torusAlert__logo\"><img src=\"".concat(r, "\" /></div>") + "<div>" + "<h1 id=\"torusAlert__title\">".concat(this.embedTranslations.actionRequired, "</h1>") + "<p id=\"torusAlert__desc\">".concat(this.embedTranslations.pendingAction, "</p>") + "</div></div>");
        const i = ct("<div><a id=\"torusAlert__btn\">".concat(this.embedTranslations.continue, "</a></div>"));
        const o = ct('<div id="torusAlert__btn-container"></div>');
        o.appendChild(i), n.appendChild(o);
        this._setEmbedWhiteLabel(n);
        at((() => {
          this.torusAlertContainer.style.display = "block", this.torusAlertContainer.appendChild(n);
        })), at((() => {
          i.addEventListener("click", (() => {
            this._handleWindow(e, {
              url: t,
              target: "_blank",
              features: _t
            }), n.remove(), 0 === this.torusAlertContainer.children.length && (this.torusAlertContainer.style.display = "none");
          }));
        }));
      }
    }
    var Kt = function(e, t, r, n) {
      return new (r || (r = Promise))((function(i, o) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (t) {
            o(t);
          }
        }
        function a(e) {
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
          }(e.value).then(s, a);
        }
        c((n = n.apply(e, t || [])).next());
      }));
    };
    var Ht = function(e, t) {
      var r, n, i, o, s = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
      }), o;
      function a(o) {
        return function(a) {
          return function(o) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;s; ) try {
              if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
              switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
               case 0:
               case 1:
                i = o;
                break;

               case 4:
                return s.label++, {
                  value: o[1],
                  done: !1
                };

               case 5:
                s.label++, n = o[1], o = [ 0 ];
                continue;

               case 7:
                o = s.ops.pop(), s.trys.pop();
                continue;

               default:
                if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                  s = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  s.label = o[1];
                  break;
                }
                if (6 === o[0] && s.label < i[1]) {
                  s.label = i[1], i = o;
                  break;
                }
                if (i && s.label < i[2]) {
                  s.label = i[2], s.ops.push(o);
                  break;
                }
                i[2] && s.ops.pop(), s.trys.pop();
                continue;
              }
              o = t.call(e, s);
            } catch (a) {
              o = [ 6, a ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([ o, a ]);
        };
      }
    };
    var Wt = function() {
      return Kt(void 0, void 0, void 0, (function() {
        return Ht(this, (function(e) {
          return [ 2, new Bt ];
        }));
      }));
    };
  },
  2450: (e, t, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = new (0, r(86266).ec)("secp256k1");
    var o = r.g.crypto || r.g.msCrypto || {};
    var s = o.subtle || o.webkitSubtle;
    var a = r(55835);
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
      return void 0 === o.getRandomValues ? n.from(a.randomBytes(e)) : (o.getRandomValues(t), n.from(t));
    }
    function f(e) {
      return new Promise((function(t) {
        var r = a.createHash('sha512').update(e).digest();
        t(new Uint8Array(r));
      }));
    }
    function p(e) {
      return function(t, r, i) {
        return new Promise((function(o) {
          if (s) {
            return s.importKey("raw", r, {
              name: "AES-CBC"
            }, !1, [ e ]).then((function(r) {
              var n = {
                name: "AES-CBC",
                iv: t
              };
              return s[e](n, r, i);
            })).then((function(e) {
              o(n.from(new Uint8Array(e)));
            }));
          }
          if ('encrypt' === e) {
            var c = a.createCipheriv('aes-256-cbc', r, t);
            let e = c.update(i);
            let s = c.final();
            o(n.concat([ e, s ]));
          } else if ('decrypt' === e) {
            var u = a.createDecipheriv('aes-256-cbc', r, t);
            let e = u.update(i);
            let s = u.final();
            o(n.concat([ e, s ]));
          }
        }));
      };
    }
    var g = p("encrypt");
    var v = p("decrypt");
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
        var s = i.keyFromPublic(t);
        var a = o.derive(s.getPublic());
        r(n.from(a.toArray()));
      }));
    };
    t.pe = function(e, t) {
      var r;
      return b(e, t.ephemPublicKey).then((function(e) {
        return f(e);
      })).then((function(e) {
        return r = e.slice(0, 32), function(e, t, r) {
          return new Promise((function(i) {
            var o = a.createHmac('sha256', n.from(e));
            o.update(t), i(function(e, t) {
              if (e.length !== t.length) return !1;
              var r = 0;
              for (var n = 0; n < e.length; n++) r |= e[n] ^ t[n];
              return 0 === r;
            }(o.digest(), r));
          }));
        }(e.slice(32), n.concat([ t.iv, t.ephemPublicKey, t.ciphertext ]), t.mac);
      })).then((function(e) {
        return l(e, "Bad MAC"), v(t.iv, r, t.ciphertext);
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
      return void 0 === t && (t = "utf8"), n.isBuffer(e) ? a(e.toString("base64")) : a(n.from(e, t).toString("base64"));
    }
    function s(e) {
      return e = e.toString(), i.default(e).replace(/\-/g, "+").replace(/_/g, "/");
    }
    function a(e) {
      return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    var c = o;
    c.encode = o, c.decode = function(e, t) {
      return void 0 === t && (t = "utf8"), n.from(s(e), "base64").toString(t);
    }, c.toBase64 = s, c.fromBase64 = a, c.toBuffer = function(e) {
      return n.from(s(e), "base64");
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
      var s = t + o;
      var a = n.alloc(s);
      for (a.write(e); o--; ) a.write("=", i++);
      return a.toString();
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
    var s = function(e, t, r) {
      if ('function' == typeof t) return s(e, null, t);
      t || (t = {}), r = i(r || o);
      var a = e._writableState;
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
      var g = function(t) {
        r.call(e, t ? new Error('exited with error code: ' + t) : null);
      };
      var v = function(t) {
        r.call(e, t);
      };
      var y = function() {
        n.nextTick(b);
      };
      var b = function() {
        if (!d) return (!u || c && c.ended && !c.destroyed) && (!l || a && a.ended && !a.destroyed) ? void 0 : r.call(e, new Error('premature close'));
      };
      var m = function() {
        e.req.on('finish', f);
      };
      return !function(e) {
        return e.setHeader && 'function' == typeof e.abort;
      }(e) ? l && !a && (e.on('end', h), e.on('close', h)) : (e.on('complete', f), e.on('abort', y), e.req ? m() : e.on('request', m)), 
      function(e) {
        return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length;
      }(e) && e.on('exit', g), e.on('end', p), e.on('finish', f), !1 !== t.error && e.on('error', v), e.on('close', y), function() {
        d = !0, e.removeListener('complete', f), e.removeListener('abort', y), e.removeListener('request', m), e.req && e.req.removeListener('finish', f), 
        e.removeListener('end', h), e.removeListener('close', h), e.removeListener('finish', f), e.removeListener('exit', g), e.removeListener('end', p), 
        e.removeListener('error', v), e.removeListener('close', y);
      };
    };
    e.exports = s;
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
          var s = o[i];
          if (!e(t[s], r[s])) return !1;
        }
        return !0;
      }
      return t != t && r != r;
    };
  },
  24970: e => {
    "use strict";
    const t = e => null !== e && 'object' == typeof e && 'function' == typeof e.pipe;
    t.writable = e => t(e) && !1 !== e.writable && 'function' == typeof e._write && 'object' == typeof e._writableState, t.readable = e => t(e) && !1 !== e.readable && 'function' == typeof e._read && 'object' == typeof e._readableState, 
    t.duplex = e => t.writable(e) && t.readable(e), t.transform = e => t.duplex(e) && 'function' == typeof e._transform, e.exports = t;
  },
  72378: (e, t, r) => {
    e = r.nmd(e);
    var n = '__lodash_hash_undefined__';
    var i = 9007199254740991;
    var o = '[object Arguments]', s = '[object Function]', a = '[object Object]';
    var c = /^\[object .+?Constructor\]$/;
    var u = /^(?:0|[1-9]\d*)$/;
    var l = {};
    l['[object Float32Array]'] = l['[object Float64Array]'] = l['[object Int8Array]'] = l['[object Int16Array]'] = l['[object Int32Array]'] = l['[object Uint8Array]'] = l['[object Uint8ClampedArray]'] = l['[object Uint16Array]'] = l['[object Uint32Array]'] = !0, 
    l[o] = l['[object Array]'] = l['[object ArrayBuffer]'] = l['[object Boolean]'] = l['[object DataView]'] = l['[object Date]'] = l['[object Error]'] = l[s] = l['[object Map]'] = l['[object Number]'] = l[a] = l['[object RegExp]'] = l['[object Set]'] = l['[object String]'] = l['[object WeakMap]'] = !1;
    var d = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g;
    var h = 'object' == typeof self && self && self.Object === Object && self;
    var f = d || h || Function('return this')();
    var p = t && !t.nodeType && t;
    var g = p && e && !e.nodeType && e;
    var v = g && g.exports === p;
    var y = v && d.process;
    var b = function() {
      try {
        var e = g && g.require && g.require('util').types;
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
    var _ = Array.prototype, S = Function.prototype, O = Object.prototype;
    var k = f['__core-js_shared__'];
    var P = S.toString;
    var A = O.hasOwnProperty;
    var E = function() {
      var e = /[^.]+$/.exec(k && k.keys && k.keys.IE_PROTO || '');
      return e ? 'Symbol(src)_1.' + e : '';
    }();
    var C = O.toString;
    var D = P.call(Object);
    var T = RegExp('^' + P.call(A).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    var x = v ? f.Buffer : void 0, j = f.Symbol, R = f.Uint8Array, I = x ? x.allocUnsafe : void 0, M = function(e, t) {
      return function(r) {
        return e(t(r));
      };
    }(Object.getPrototypeOf, Object), N = Object.create, L = O.propertyIsEnumerable, U = _.splice, B = j ? j.toStringTag : void 0;
    var K = function() {
      try {
        var e = le(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch (t) {}
    }();
    var H = x ? x.isBuffer : void 0, W = Math.max, q = Date.now;
    var F = le(f, 'Map'), V = le(Object, 'create');
    var X = function() {
      function e() {}
      return function(t) {
        if (!Se(t)) return {};
        if (N) return N(t);
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
    function z(e) {
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
    function Z(e, t) {
      var r = ye(e), n = !r && ve(e), i = !r && !n && me(e), o = !r && !n && !i && ke(e), s = r || n || i || o, a = s ? function(e, t) {
        var r = -1, n = Array(e);
        for (;++r < e; ) n[r] = t(r);
        return n;
      }(e.length, String) : [], c = a.length;
      for (var u in e) !t && !A.call(e, u) || s && ('length' == u || i && ('offset' == u || 'parent' == u) || o && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u) || de(u, c)) || a.push(u);
      return a;
    }
    function $(e, t, r) {
      (void 0 !== r && !ge(e[t], r) || void 0 === r && !(t in e)) && te(e, t, r);
    }
    function Q(e, t, r) {
      var n = e[t];
      A.call(e, t) && ge(n, r) && (void 0 !== r || t in e) || te(e, t, r);
    }
    function ee(e, t) {
      var r = e.length;
      for (;r--; ) if (ge(e[r][0], t)) return r;
      return -1;
    }
    function te(e, t, r) {
      '__proto__' == t && K ? K(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : e[t] = r;
    }
    Y.prototype.clear = function() {
      this.__data__ = V ? V(null) : {}, this.size = 0;
    }, Y.prototype.delete = function(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    }, Y.prototype.get = function(e) {
      var t = this.__data__;
      if (V) {
        var r = t[e];
        return r === n ? void 0 : r;
      }
      return A.call(t, e) ? t[e] : void 0;
    }, Y.prototype.has = function(e) {
      var t = this.__data__;
      return V ? void 0 !== t[e] : A.call(t, e);
    }, Y.prototype.set = function(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = V && void 0 === t ? n : t, this;
    }, G.prototype.clear = function() {
      this.__data__ = [], this.size = 0;
    }, G.prototype.delete = function(e) {
      var t = this.__data__, r = ee(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : U.call(t, r, 1), --this.size, !0);
    }, G.prototype.get = function(e) {
      var t = this.__data__, r = ee(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, G.prototype.has = function(e) {
      return ee(this.__data__, e) > -1;
    }, G.prototype.set = function(e, t) {
      var r = this.__data__, n = ee(r, e);
      return n < 0 ? (++this.size, r.push([ e, t ])) : r[n][1] = t, this;
    }, z.prototype.clear = function() {
      this.size = 0, this.__data__ = {
        hash: new Y,
        map: new (F || G),
        string: new Y
      };
    }, z.prototype.delete = function(e) {
      var t = ue(this, e).delete(e);
      return this.size -= t ? 1 : 0, t;
    }, z.prototype.get = function(e) {
      return ue(this, e).get(e);
    }, z.prototype.has = function(e) {
      return ue(this, e).has(e);
    }, z.prototype.set = function(e, t) {
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
        if (!F || n.length < 199) return n.push([ e, t ]), this.size = ++r.size, this;
        r = this.__data__ = new z(n);
      }
      return r.set(e, t), this.size = r.size, this;
    };
    var re = function(e) {
      return function(t, r, n) {
        var i = -1, o = Object(t), s = n(t), a = s.length;
        for (;a--; ) {
          var c = s[e ? a : ++i];
          if (!1 === r(o[c], c, o)) break;
        }
        return t;
      };
    }();
    function ne(e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : B && B in Object(e) ? function(e) {
        var t = A.call(e, B), r = e[B];
        try {
          e[B] = void 0;
          var n = !0;
        } catch (o) {}
        var i = C.call(e);
        n && (t ? e[B] = r : delete e[B]);
        return i;
      }(e) : function(e) {
        return C.call(e);
      }(e);
    }
    function ie(e) {
      return Oe(e) && ne(e) == o;
    }
    function oe(e) {
      return !(!Se(e) || function(e) {
        return !!E && E in e;
      }(e)) && (we(e) ? T : c).test(function(e) {
        if (null != e) {
          try {
            return P.call(e);
          } catch (t) {}
          try {
            return e + '';
          } catch (t) {}
        }
        return '';
      }(e));
    }
    function se(e) {
      if (!Se(e)) return function(e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      }(e);
      var t = he(e), r = [];
      for (var n in e) ('constructor' != n || !t && A.call(e, n)) && r.push(n);
      return r;
    }
    function ae(e, t, r, n, i) {
      e !== t && re(t, (function(o, s) {
        if (i || (i = new J), Se(o)) !function(e, t, r, n, i, o, s) {
          var c = fe(e, r), u = fe(t, r), l = s.get(u);
          if (l) return void $(e, r, l);
          var d = o ? o(c, u, r + '', e, t, s) : void 0;
          var h = void 0 === d;
          if (h) {
            var f = ye(u), p = !f && me(u), g = !f && !p && ke(u);
            d = u, f || p || g ? ye(c) ? d = c : !function(e) {
              return Oe(e) && be(e);
            }(c) ? p ? (h = !1, d = function(e, t) {
              if (t) return e.slice();
              var r = e.length, n = I ? I(r) : new e.constructor(r);
              return e.copy(n), n;
            }(u, !0)) : g ? (h = !1, d = function(e, t) {
              var r = t ? function(e) {
                var t = new e.constructor(e.byteLength);
                return new R(t).set(new R(e)), t;
              }(e.buffer) : e.buffer;
              return new e.constructor(r, e.byteOffset, e.length);
            }(u, !0)) : d = [] : d = function(e, t) {
              var r = -1, n = e.length;
              t || (t = Array(n));
              for (;++r < n; ) t[r] = e[r];
              return t;
            }(c) : function(e) {
              if (!Oe(e) || ne(e) != a) return !1;
              var t = M(e);
              if (null === t) return !0;
              var r = A.call(t, 'constructor') && t.constructor;
              return 'function' == typeof r && r instanceof r && P.call(r) == D;
            }(u) || ve(u) ? (d = c, ve(c) ? d = function(e) {
              return function(e, t, r, n) {
                var i = !r;
                r || (r = {});
                var o = -1, s = t.length;
                for (;++o < s; ) {
                  var a = t[o];
                  var c = n ? n(r[a], e[a], a, r, e) : void 0;
                  void 0 === c && (c = e[a]), i ? te(r, a, c) : Q(r, a, c);
                }
                return r;
              }(e, Pe(e));
            }(c) : Se(c) && !we(c) || (d = function(e) {
              return 'function' != typeof e.constructor || he(e) ? {} : X(M(e));
            }(u))) : h = !1;
          }
          h && (s.set(u, d), i(d, u, n, o, s), s.delete(u));
          $(e, r, d);
        }(e, t, s, r, ae, n, i); else {
          var c = n ? n(fe(e, s), o, s + '', e, t, i) : void 0;
          void 0 === c && (c = o), $(e, s, c);
        }
      }), Pe);
    }
    function ce(e, t) {
      return pe(function(e, t, r) {
        return t = W(void 0 === t ? e.length - 1 : t, 0), function() {
          var n = arguments, i = -1, o = W(n.length - t, 0), s = Array(o);
          for (;++i < o; ) s[i] = n[t + i];
          i = -1;
          var a = Array(t + 1);
          for (;++i < t; ) a[i] = n[i];
          return a[t] = r(s), w(e, this, a);
        };
      }(e, t, Ce), e + '');
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
      return e === ('function' == typeof t && t.prototype || O);
    }
    function fe(e, t) {
      if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
    }
    var pe = function(e) {
      var t = 0, r = 0;
      return function() {
        var n = q(), i = 16 - (n - r);
        if (r = n, i > 0) {
          if (++t >= 800) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }(K ? function(e, t) {
      return K(e, 'toString', {
        configurable: !0,
        enumerable: !1,
        value: Ee(t),
        writable: !0
      });
    } : Ce);
    function ge(e, t) {
      return e === t || e != e && t != t;
    }
    var ve = ie(function() {
      return arguments;
    }()) ? ie : function(e) {
      return Oe(e) && A.call(e, 'callee') && !L.call(e, 'callee');
    };
    var ye = Array.isArray;
    function be(e) {
      return null != e && _e(e.length) && !we(e);
    }
    var me = H || function() {
      return !1;
    };
    function we(e) {
      if (!Se(e)) return !1;
      var t = ne(e);
      return t == s || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    }
    function _e(e) {
      return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= i;
    }
    function Se(e) {
      var t = typeof e;
      return null != e && ('object' == t || 'function' == t);
    }
    function Oe(e) {
      return null != e && 'object' == typeof e;
    }
    var ke = m ? function(e) {
      return function(t) {
        return e(t);
      };
    }(m) : function(e) {
      return Oe(e) && _e(e.length) && !!l[ne(e)];
    };
    function Pe(e) {
      return be(e) ? Z(e, !0) : se(e);
    }
    var Ae = function(e) {
      return ce((function(t, r) {
        var n = -1, i = r.length, o = i > 1 ? r[i - 1] : void 0, s = i > 2 ? r[2] : void 0;
        for (o = e.length > 3 && 'function' == typeof o ? (i--, o) : void 0, s && function(e, t, r) {
          if (!Se(r)) return !1;
          var n = typeof t;
          if ('number' == n ? be(r) && de(t, r.length) : 'string' == n && t in r) return ge(r[t], e);
          return !1;
        }(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++n < i; ) {
          var a = r[n];
          a && e(t, a, n, o);
        }
        return t;
      }));
    }((function(e, t, r) {
      ae(e, t, r);
    }));
    function Ee(e) {
      return function() {
        return e;
      };
    }
    function Ce(e) {
      return e;
    }
    e.exports = Ae;
  },
  2043: function(e, t, r) {
    var n = r(25108);
    var i, o;
    !function(s, a) {
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
        function s() {
          n.log && (n.log.apply ? n.log.apply(n, arguments) : Function.prototype.apply.apply(n.log, [ n, arguments ])), n.trace && n.trace();
        }
        function a(i) {
          return 'debug' === i && (i = 'log'), typeof n !== t && ('trace' === i && r ? s : void 0 !== n[i] ? o(n, i) : void 0 !== n.log ? o(n, 'log') : e);
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
          return a(e) || u.apply(this, arguments);
        }
        function d(e, r, o) {
          var s = this;
          var a;
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
              return void 0 === s.levels[e] && (e = void 0), e;
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
          "string" == typeof e ? u += ":" + e : "symbol" == typeof e && (u = void 0), s.name = e, s.levels = {
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            SILENT: 5
          }, s.methodFactory = o || l, s.getLevel = function() {
            return a;
          }, s.setLevel = function(r, i) {
            if ("string" == typeof r && void 0 !== s.levels[r.toUpperCase()] && (r = s.levels[r.toUpperCase()]), !("number" == typeof r && r >= 0 && r <= s.levels.SILENT)) throw "log.setLevel() called with invalid level: " + r;
            if (a = r, !1 !== i && d(r), c.call(s, r, e), typeof n === t && r < s.levels.SILENT) return "No console available for logging";
          }, s.setDefaultLevel = function(e) {
            r = e, h() || s.setLevel(e, !1);
          }, s.resetLevel = function() {
            s.setLevel(r, !1), f();
          }, s.enableAll = function(e) {
            s.setLevel(s.levels.TRACE, e);
          }, s.disableAll = function(e) {
            s.setLevel(s.levels.SILENT, e);
          };
          var p = h();
          null == p && (p = r), s.setLevel(p, !1);
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
        var s, a;
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
          for (s = new Array(o - 1), a = 0; a < s.length; ) s[a++] = arguments[a];
          return n.nextTick((function() {
            e.apply(null, s);
          }));
        }
      }
    } : e.exports = n;
  },
  74286: (e, t, r) => {
    var n = r(34155);
    var i = r(30778);
    var o = r(12840);
    var s = r(71156);
    var a = function() {};
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
          return !!c && !!s && (e instanceof (s.ReadStream || a) || e instanceof (s.WriteStream || a)) && u(e.close);
        }(e) ? e.close(a) : function(e) {
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
      var t = u(e[e.length - 1] || a) && e.pop() || a;
      if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new Error('pump requires two streams per minimum');
      var r;
      var n = e.map((function(i, o) {
        var s = o < e.length - 1;
        return l(i, s, o > 0, (function(e) {
          r || (r = e), e && n.forEach(d), s || (n.forEach(d), t(r));
        }));
      }));
      return e.reduce(h);
    };
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
    var s = r(44278);
    var a = r(10759);
    o.inherits(d, s);
    var c = i(a.prototype);
    for (var u = 0; u < c.length; u++) {
      var l = c[u];
      d.prototype[l] || (d.prototype[l] = a.prototype[l]);
    }
    function d(e) {
      if (!(this instanceof d)) return new d(e);
      s.call(this, e), a.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), 
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
    var s;
    m.ReadableState = b;
    r(17187).EventEmitter;
    var a = function(e, t) {
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
    var g = r(55513);
    var v;
    d.inherits(m, c);
    var y = [ 'error', 'close', 'destroy', 'pause', 'resume' ];
    function b(e, t) {
      e = e || {};
      var n = t instanceof (s = s || r(45867));
      this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
      var i = e.highWaterMark;
      var o = e.readableHighWaterMark;
      var a = this.objectMode ? 16 : 16384;
      this.highWaterMark = i || 0 === i ? i : n && (o || 0 === o) ? o : a, this.highWaterMark = Math.floor(this.highWaterMark), 
      this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, 
      this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, 
      this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || 'utf8', this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, 
      this.encoding = null, e.encoding && (v || (v = r(47989).s), this.decoder = new v(e.encoding), this.encoding = e.encoding);
    }
    function m(e) {
      if (s = s || r(45867), !(this instanceof m)) return new m(e);
      this._readableState = new b(e, this), this.readable = !0, e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), 
      c.call(this);
    }
    function w(e, t, r, n, i) {
      var o = e._readableState;
      var s;
      null === t ? (o.reading = !1, function(e, t) {
        if (t.ended) return;
        if (t.decoder) {
          var r = t.decoder.end();
          r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
        }
        t.ended = !0, k(e);
      }(e, o)) : (i || (s = function(e, t) {
        var r;
        (function(e) {
          return u.isBuffer(e) || e instanceof l;
        })(t) || 'string' == typeof t || void 0 === t || e.objectMode || (r = new TypeError('Invalid non-string/buffer chunk'));
        return r;
      }(o, t)), s ? e.emit('error', s) : o.objectMode || t && t.length > 0 ? ('string' == typeof t || o.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function(e) {
        return u.from(e);
      }(t)), n ? o.endEmitted ? e.emit('error', new Error('stream.unshift() after end event')) : _(e, o, t, !0) : o.ended ? e.emit('error', new Error('stream.push() after EOF')) : (o.reading = !1, 
      o.decoder && !r ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? _(e, o, t, !1) : A(e, o)) : _(e, o, t, !1))) : n || (o.reading = !1));
      return function(e) {
        return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
      }(o);
    }
    function _(e, t, r, n) {
      t.flowing && 0 === t.length && !t.sync ? (e.emit('data', r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), 
      t.needReadable && k(e)), A(e, t);
    }
    Object.defineProperty(m.prototype, 'destroyed', {
      get: function() {
        return void 0 !== this._readableState && this._readableState.destroyed;
      },
      set: function(e) {
        this._readableState && (this._readableState.destroyed = e);
      }
    }), m.prototype.destroy = g.destroy, m.prototype._undestroy = g.undestroy, m.prototype._destroy = function(e, t) {
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
      return v || (v = r(47989).s), this._readableState.decoder = new v(e), this._readableState.encoding = e, this;
    };
    var S = 8388608;
    function O(e, t) {
      return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
        return e >= S ? e = S : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
      }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
    }
    function k(e) {
      var t = e._readableState;
      t.needReadable = !1, t.emittedReadable || (f('emitReadable', t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(P, e) : P(e));
    }
    function P(e) {
      f('emit readable'), e.emit('readable'), T(e);
    }
    function A(e, t) {
      t.readingMore || (t.readingMore = !0, i.nextTick(E, e, t));
    }
    function E(e, t) {
      var r = t.length;
      for (;!t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (f('maybeReadMore read 0'), e.read(0), r !== t.length); ) r = t.length;
      t.readingMore = !1;
    }
    function C(e) {
      f('readable nexttick read 0'), e.read(0);
    }
    function D(e, t) {
      t.reading || (f('resume read 0'), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit('resume'), T(e), t.flowing && !t.reading && e.read(0);
    }
    function T(e) {
      var t = e._readableState;
      for (f('flow', t.flowing); t.flowing && null !== e.read(); ) ;
    }
    function x(e, t) {
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
            var s = e > o.length ? o.length : e;
            if (s === o.length ? i += o : i += o.slice(0, e), 0 === (e -= s)) {
              s === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(s));
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
            var s = e > o.length ? o.length : e;
            if (o.copy(r, r.length - e, 0, s), 0 === (e -= s)) {
              s === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(s));
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
    function j(e) {
      var t = e._readableState;
      if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      t.endEmitted || (t.ended = !0, i.nextTick(R, t, e));
    }
    function R(e, t) {
      e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit('end'));
    }
    function I(e, t) {
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
      return -1;
    }
    m.prototype.read = function(e) {
      f('read', e), e = parseInt(e, 10);
      var t = this._readableState;
      var r = e;
      if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return f('read: emitReadable', t.length, t.ended), 
      0 === t.length && t.ended ? j(this) : k(this), null;
      if (0 === (e = O(e, t)) && t.ended) return 0 === t.length && j(this), null;
      var n = t.needReadable;
      var i;
      return f('need readable', n), (0 === t.length || t.length - e < t.highWaterMark) && f('length less than watermark', n = !0), 
      t.ended || t.reading ? f('reading or ended', n = !1) : n && (f('do read'), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), 
      this._read(t.highWaterMark), t.sync = !1, t.reading || (e = O(r, t))), null === (i = e > 0 ? x(e, t) : null) ? (t.needReadable = !0, 
      e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && j(this)), null !== i && this.emit('data', i), 
      i;
    }, m.prototype._read = function(e) {
      this.emit('error', new Error('_read() is not implemented'));
    }, m.prototype.pipe = function(e, t) {
      var r = this;
      var s = this._readableState;
      switch (s.pipesCount) {
       case 0:
        s.pipes = e;
        break;

       case 1:
        s.pipes = [ s.pipes, e ];
        break;

       default:
        s.pipes.push(e);
      }
      s.pipesCount += 1, f('pipe count=%d opts=%j', s.pipesCount, t);
      var c = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? l : m;
      function u(t, n) {
        f('onunpipe'), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, function() {
          f('cleanup'), e.removeListener('close', y), e.removeListener('finish', b), e.removeListener('drain', d), e.removeListener('error', v), 
          e.removeListener('unpipe', u), r.removeListener('end', l), r.removeListener('end', m), r.removeListener('data', g), h = !0, 
          !s.awaitDrain || e._writableState && !e._writableState.needDrain || d();
        }());
      }
      function l() {
        f('onend'), e.end();
      }
      s.endEmitted ? i.nextTick(c) : r.once('end', c), e.on('unpipe', u);
      var d = function(e) {
        return function() {
          var t = e._readableState;
          f('pipeOnDrain', t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && a(e, 'data') && (t.flowing = !0, T(e));
        };
      }(r);
      e.on('drain', d);
      var h = !1;
      var p = !1;
      function g(t) {
        f('ondata'), p = !1, !1 !== e.write(t) || p || ((1 === s.pipesCount && s.pipes === e || s.pipesCount > 1 && -1 !== I(s.pipes, e)) && !h && (f('false write response, pause', r._readableState.awaitDrain), 
        r._readableState.awaitDrain++, p = !0), r.pause());
      }
      function v(t) {
        f('onerror', t), m(), e.removeListener('error', v), 0 === a(e, 'error') && e.emit('error', t);
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
      return r.on('data', g), function(e, t, r) {
        if ('function' == typeof e.prependListener) return e.prependListener(t, r);
        e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [ r, e._events[t] ] : e.on(t, r);
      }(e, 'error', v), e.once('close', y), e.once('finish', b), e.emit('pipe', r), s.flowing || (f('pipe resume'), r.resume()), 
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
      var s = I(t.pipes, e);
      return -1 === s || (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this, r)), 
      this;
    }, m.prototype.on = function(e, t) {
      var r = c.prototype.on.call(this, e, t);
      if ('data' === e) !1 !== this._readableState.flowing && this.resume(); else if ('readable' === e) {
        var n = this._readableState;
        n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && k(this) : i.nextTick(C, this));
      }
      return r;
    }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function() {
      var e = this._readableState;
      return e.flowing || (f('resume'), e.flowing = !0, function(e, t) {
        t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(D, e, t));
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
    }), m._fromList = x;
  },
  60062: (e, t, r) => {
    "use strict";
    e.exports = s;
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
    function s(e) {
      if (!(this instanceof s)) return new s(e);
      n.call(this, e), this._transformState = {
        afterTransform: o.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ('function' == typeof e.transform && (this._transform = e.transform), 
      'function' == typeof e.flush && (this._flush = e.flush)), this.on('prefinish', a);
    }
    function a() {
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
    i.inherits = r(35717), i.inherits(s, n), s.prototype.push = function(e, t) {
      return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t);
    }, s.prototype._transform = function(e, t, r) {
      throw new Error('_transform() is not implemented');
    }, s.prototype._write = function(e, t, r) {
      var n = this._transformState;
      if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, s.prototype._read = function(e) {
      var t = this._transformState;
      null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
    }, s.prototype._destroy = function(e, t) {
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
    var s = !n.browser && [ 'v0.10', 'v0.9.' ].indexOf(n.version.slice(0, 5)) > -1 ? setImmediate : i.nextTick;
    var a;
    y.WritableState = g;
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
    function g(e, t) {
      a = a || r(45867), e = e || {};
      var n = t instanceof a;
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
            --t.pendingcb, r ? (i.nextTick(o, n), i.nextTick(O, e, t), e._writableState.errorEmitted = !0, e.emit('error', n)) : (o(n), 
            e._writableState.errorEmitted = !0, e.emit('error', n), O(e, t));
          }(e, r, n, t, o); else {
            var a = _(r);
            a || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r), n ? s(m, e, r, a, o) : m(e, r, a, o);
          }
        }(t, e);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, 
      this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this);
    }
    var v;
    function y(e) {
      if (a = a || r(45867), !(v.call(y, this) || this instanceof a)) return new y(e);
      this._writableState = new g(e, this), this.writable = !0, e && ('function' == typeof e.write && (this._write = e.write), 
      'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 
      'function' == typeof e.final && (this._final = e.final)), l.call(this);
    }
    function b(e, t, r, n, i, o, s) {
      t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1;
    }
    function m(e, t, r, n) {
      r || function(e, t) {
        0 === t.length && t.needDrain && (t.needDrain = !1, e.emit('drain'));
      }(e, t), t.pendingcb--, n(), O(e, t);
    }
    function w(e, t) {
      t.bufferProcessing = !0;
      var r = t.bufferedRequest;
      if (e._writev && r && r.next) {
        var n = t.bufferedRequestCount;
        var i = new Array(n);
        var s = t.corkedRequestsFree;
        s.entry = r;
        var a = 0;
        var c = !0;
        for (;r; ) i[a] = r, r.isBuf || (c = !1), r = r.next, a += 1;
        i.allBuffers = c, b(e, t, !0, t.length, i, '', s.finish), t.pendingcb++, t.lastBufferedRequest = null, s.next ? (t.corkedRequestsFree = s.next, 
        s.next = null) : t.corkedRequestsFree = new o(t), t.bufferedRequestCount = 0;
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
        t.pendingcb--, r && e.emit('error', r), t.prefinished = !0, e.emit('prefinish'), O(e, t);
      }));
    }
    function O(e, t) {
      var r = _(t);
      return r && (!function(e, t) {
        t.prefinished || t.finalCalled || ('function' == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, i.nextTick(S, e, t)) : (t.prefinished = !0, 
        e.emit('prefinish')));
      }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit('finish'))), r;
    }
    c.inherits(y, l), g.prototype.getBuffer = function() {
      var e = this.bufferedRequest;
      var t = [];
      for (;e; ) t.push(e), e = e.next;
      return t;
    }, function() {
      try {
        Object.defineProperty(g.prototype, 'buffer', {
          get: u.deprecate((function() {
            return this.getBuffer();
          }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
        });
      } catch (e) {}
    }(), 'function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance] ? (v = Function.prototype[Symbol.hasInstance], 
    Object.defineProperty(y, Symbol.hasInstance, {
      value: function(e) {
        return !!v.call(this, e) || this === y && (e && e._writableState instanceof g);
      }
    })) : v = function(e) {
      return e instanceof this;
    }, y.prototype.pipe = function() {
      this.emit('error', new Error('Cannot pipe, not readable'));
    }, y.prototype.write = function(e, t, r) {
      var n = this._writableState;
      var o = !1;
      var s = !n.objectMode && function(e) {
        return d.isBuffer(e) || e instanceof h;
      }(e);
      return s && !d.isBuffer(e) && (e = function(e) {
        return d.from(e);
      }(e)), 'function' == typeof t && (r = t, t = null), s ? t = 'buffer' : t || (t = n.defaultEncoding), 'function' != typeof r && (r = p), 
      n.ended ? function(e, t) {
        var r = new Error('write after end');
        e.emit('error', r), i.nextTick(t, r);
      }(this, r) : (s || function(e, t, r, n) {
        var o = !0;
        var s = !1;
        return null === r ? s = new TypeError('May not write null values to stream') : 'string' == typeof r || void 0 === r || t.objectMode || (s = new TypeError('Invalid non-string/buffer chunk')), 
        s && (e.emit('error', s), i.nextTick(n, s), o = !1), o;
      }(this, n, e, r)) && (n.pendingcb++, o = function(e, t, r, n, i, o) {
        if (!r) {
          var s = function(e, t, r) {
            e.objectMode || !1 === e.decodeStrings || 'string' != typeof t || (t = d.from(t, r));
            return t;
          }(t, n, i);
          n !== s && (r = !0, i = 'buffer', n = s);
        }
        var a = t.objectMode ? 1 : n.length;
        t.length += a;
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
        } else b(e, t, !1, a, n, i, o);
        return c;
      }(this, n, s, e, t, r)), o;
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
        t.ending = !0, O(e, t), r && (t.finished ? i.nextTick(r) : e.once('finish', r));
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
        var s = this._writableState && this._writableState.destroyed;
        return o || s ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), 
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
        this.fillLast = a, t = 4;
        break;

       case 'base64':
        this.text = l, this.end = d, t = 3;
        break;

       default:
        return this.write = h, void (this.end = f);
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t);
    }
    function s(e) {
      return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
    }
    function a(e) {
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
        var i = s(t[n]);
        if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
        if (--n < r || -2 === i) return 0;
        if ((i = s(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
        if (--n < r || -2 === i) return 0;
        if ((i = s(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
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
    var i = r(96801).Transform, o = r(89539).inherits, s = r(47529);
    function a(e) {
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
    o(a, i), a.prototype.destroy = function(e) {
      if (!this._destroyed) {
        this._destroyed = !0;
        var t = this;
        n.nextTick((function() {
          e && t.emit('error', e), t.emit('close');
        }));
      }
    }, e.exports = u((function(e, t, r) {
      var n = new a(e);
      return n._transform = t, r && (n._flush = r), n;
    })), e.exports.ctor = u((function(e, t, r) {
      function n(t) {
        if (!(this instanceof n)) return new n(t);
        this.options = s(e, t), a.call(this, this.options);
      }
      return o(n, a), n.prototype._transform = t, r && (n.prototype._flush = r), n;
    })), e.exports.obj = u((function(e, t, r) {
      var n = new a(s({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxRQUFRLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLFFBQVEsUUFBUSxTQUFTLFFBQVEsT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sUUFBUSxRQUFRLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxVQUFVLFNBQVMsT0FBTyxPQUFPLFVBQVUsTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE1BQU0sT0FBTyxPQUFPLFFBQVEsT0FBTyxRQUFRLE9BQU8sT0FBTyxNQUFNLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLFFBQVEsUUFBUSxPQUFPLE9BQU8sT0FBTyxRQUFRLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLFFBQVEsT0FBTyxRQUFRLE9BQU8sT0FBTyxRQUFRLFFBQVEsUUFBUSxPQUFPLE9BQU8sT0FBTyxZQUFZLFFBQVEsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLFVBQVUsUUFBUSxRQUFRLFNBQVMsT0FBTyxPQUFPLE9BQU8sT0FBTyxRQUFRLE9BQU8sUUFBUSxPQUFPLE9BQU8sT0FBTyxTQUFTLE9BQU8sUUFBUSxRQUFRLFFBQVEsT0FBTyxPQUFPLE9BQU8sT0FBTyxP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QVFyOUMsS0FBS3dpQixFQUFHeGlCO0FBQ2xCLFdBRU9xOUM7TUFFUCxTQUFTQTtRQUNQLElBQUlseEMsSUFBTyxJQUFJUSxNQUFNL0osVUFBVXRCO1FBQy9CLEtBQUssSUFBSUQsSUFBSSxHQUFHQSxJQUFJOEssRUFBSzdLLFFBQVFELEtBQy9COEssRUFBSzlLLEtBQUt1QixVQUFVdkI7UUFFdEIsSUFBSXd5QyxJQUFNcnhCLEVBQUd0YyxNQUFNOUosTUFBTStQO1FBQ3pCLElBQUlyTCxJQUFLcUwsRUFBS0EsRUFBSzdLLFNBQU87UUFNMUIsT0FMbUIscUJBQVJ1eUMsS0FBc0JBLE1BQVEveUMsS0FDdkNwRixPQUFPWSxLQUFLd0UsR0FBSXZFLFNBQVEsU0FBVXlEO1VBQ2hDNnpDLEVBQUk3ekMsS0FBS2MsRUFBR2Q7QUFDZCxhQUVLNnpDO0FBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvQ29tcG9zZWRTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L01lcmdlZFN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvT2JzZXJ2YWJsZVN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvYXNTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2ZldGNoLW5vZGUtZGV0YWlscy9kaXN0L2ZldGNoTm9kZURldGFpbHMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2h0dHAtaGVscGVycy9kaXN0L2h0dHBIZWxwZXJzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy9vcGVubG9naW4tdXRpbHMvZGlzdC9vcGVubG9naW5VdGlscy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b3J1c2xhYnMvb3BlbmxvZ2luLWpycGMvZGlzdC9vcGVubG9naW5KcnBjLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy90b3J1cy5qcy9kaXN0L3RvcnVzVXRpbHMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL3RvcnVzLWVtYmVkL2Rpc3QvdG9ydXMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9rZW5zY3JpcHQvdG9rZW4tbmVnb3RpYXRvci9kaXN0L3dhbGxldC9Ub3J1c1Byb3ZpZGVyLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2VjY3J5cHRvL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9kaXN0L2Jhc2U2NHVybC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2Rpc3QvcGFkLXN0cmluZy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jb3JlLXV0aWwtaXMvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2VuZC1vZi1zdHJlYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvaXMtc3RyZWFtL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVyZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2xvZ2xldmVsL2xpYi9sb2dsZXZlbC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvb25jZS9vbmNlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzLW5leHRpY2stYXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcHVtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fZHVwbGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3Bhc3N0aHJvdWdoLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV93cml0YWJsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvc3RyZWFtLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vcmVhZGFibGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3N0cmluZ19kZWNvZGVyL2xpYi9zdHJpbmdfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvdGhyb3VnaDIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3dyYXBweS93cmFwcHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbXBvc2VkU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBPYnNlcnZhYmxlU3RvcmVfMSA9IHJlcXVpcmUoXCIuL09ic2VydmFibGVTdG9yZVwiKTtcbmNsYXNzIENvbXBvc2VkU3RvcmUgZXh0ZW5kcyBPYnNlcnZhYmxlU3RvcmVfMS5PYnNlcnZhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuKSB7XG4gICAgICAgIC8vIFR5cGVjYXN0OiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICBzdXBlcih7fSk7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBjaGlsZHJlblxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5fY2hpbGRyZW5bY2hpbGRLZXldO1xuICAgICAgICAgICAgdGhpcy5fYWRkQ2hpbGQoY2hpbGRLZXksIGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGlsZChjaGlsZEtleSwgY2hpbGQpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlRnJvbUNoaWxkID0gKGNoaWxkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgc3RhdGVbY2hpbGRLZXldID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUoc3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBjaGlsZC5zdWJzY3JpYmUodXBkYXRlRnJvbUNoaWxkKTtcbiAgICAgICAgdXBkYXRlRnJvbUNoaWxkKGNoaWxkLmdldFN0YXRlKCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tcG9zZWRTdG9yZSA9IENvbXBvc2VkU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb3NlZFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZXJnZWRTdG9yZSA9IHZvaWQgMDtcbmNvbnN0IE9ic2VydmFibGVTdG9yZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpO1xuY2xhc3MgTWVyZ2VkU3RvcmUgZXh0ZW5kcyBPYnNlcnZhYmxlU3RvcmVfMS5PYnNlcnZhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuID0gW10pIHtcbiAgICAgICAgLy8gVHlwZWNhc3Q6IFByZXNlcnZlIGV4aXN0aW5nIGJlaGF2aW9yXG4gICAgICAgIHN1cGVyKHt9KTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGNoaWxkcmVuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLl9hZGRDaGlsZChjaGlsZCkpO1xuICAgICAgICB0aGlzLl91cGRhdGVXaG9sZVN0YXRlKCk7XG4gICAgfVxuICAgIF9hZGRDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlV2hvbGVTdGF0ZSgpKTtcbiAgICB9XG4gICAgX3VwZGF0ZVdob2xlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkU3RhdGVzID0gdGhpcy5fY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZ2V0U3RhdGUoKSk7XG4gICAgICAgIC8vIGFwcGx5IHNoYWxsb3cgbWVyZ2Ugb3ZlciBzdGF0ZXNcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5jaGlsZFN0YXRlcyk7XG4gICAgICAgIHRoaXMucHV0U3RhdGUoc3RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVyZ2VkU3RvcmUgPSBNZXJnZWRTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lcmdlZFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PYnNlcnZhYmxlU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBzYWZlX2V2ZW50X2VtaXR0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1ldGFtYXNrL3NhZmUtZXZlbnQtZW1pdHRlclwiKSk7XG5jbGFzcyBPYnNlcnZhYmxlU3RvcmUgZXh0ZW5kcyBzYWZlX2V2ZW50X2VtaXR0ZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0U3RhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKGluaXRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBpbml0U3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUeXBlY2FzdC9kZWZhdWx0IHN0YXRlOiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3cmFwcGVyIGFyb3VuZCBpbnRlcm5hbCBnZXRTdGF0ZVxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U3RhdGUoKTtcbiAgICB9XG4gICAgLy8gd3JhcHBlciBhcm91bmQgaW50ZXJuYWwgcHV0U3RhdGVcbiAgICBwdXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLl9wdXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgbmV3U3RhdGUpO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgLy8gaWYgbm9uLW51bGwgb2JqZWN0LCBtZXJnZVxuICAgICAgICBpZiAocGFydGlhbFN0YXRlICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHBhcnRpYWxTdGF0ZSkpO1xuICAgICAgICAgICAgLy8gaWYgbm90IG9iamVjdCwgdXNlIG5ldyB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXRTdGF0ZShwYXJ0aWFsU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAgc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5vbigndXBkYXRlJywgaGFuZGxlcik7XG4gICAgfVxuICAgIC8vIHVuc3Vic2NyaWJlIHRvIGNoYW5nZXNcbiAgICB1bnN1YnNjcmliZShoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3VwZGF0ZScsIGhhbmRsZXIpO1xuICAgIH1cbiAgICAvL1xuICAgIC8vIHByaXZhdGVcbiAgICAvL1xuICAgIC8vIHJlYWQgZnJvbSBwZXJzaXN0ZW5jZVxuICAgIF9nZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvLyB3cml0ZSB0byBwZXJzaXN0ZW5jZVxuICAgIF9wdXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbn1cbmV4cG9ydHMuT2JzZXJ2YWJsZVN0b3JlID0gT2JzZXJ2YWJsZVN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZVN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZUFzU3RyZWFtID0gdm9pZCAwO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY2xhc3MgT2JzZXJ2YWJsZVN0b3JlU3RyZWFtIGV4dGVuZHMgc3RyZWFtXzEuRHVwbGV4IHtcbiAgICBjb25zdHJ1Y3RvcihvYnNTdG9yZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICAvLyBwYXNzIHZhbHVlcywgbm90IHNlcmlhbGl6YXRpb25zXG4gICAgICAgICAgICBvYmplY3RNb2RlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZG9udCBidWZmZXIgb3V0Z29pbmcgdXBkYXRlc1xuICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAvLyBzYXZlIGhhbmRsZXIgc28gd2UgY2FuIHVuc3Vic2NyaWJlIGxhdGVyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IChzdGF0ZSkgPT4gdGhpcy5wdXNoKHN0YXRlKTtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9ic1N0b3JlIGNoYW5nZXNcbiAgICAgICAgdGhpcy5vYnNTdG9yZSA9IG9ic1N0b3JlO1xuICAgICAgICB0aGlzLm9ic1N0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyBlbWl0IGN1cnJlbnQgc3RhdGUgb24gbmV3IGRlc3RpbmF0aW9uXG4gICAgcGlwZShkZXN0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLnBpcGUoZGVzdCwgb3B0aW9ucyk7XG4gICAgICAgIGRlc3Qud3JpdGUodGhpcy5vYnNTdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gd3JpdGUgZnJvbSBpbmNvbWluZyBzdHJlYW0gdG8gc3RhdGVcbiAgICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vYnNTdG9yZS5wdXRTdGF0ZShjaHVuayk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIC8vIG5vb3AgLSBvdXRnb2luZyBzdHJlYW0gaXMgYXNraW5nIHVzIGlmIHdlIGhhdmUgZGF0YSB3ZSBhcmVudCBnaXZpbmcgaXRcbiAgICBfcmVhZChfc2l6ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyB1bnN1YnNjcmliZSBmcm9tIGV2ZW50IGVtaXR0ZXJcbiAgICBfZGVzdHJveShlcnIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2JzU3RvcmUudW5zdWJzY3JpYmUodGhpcy5oYW5kbGVyKTtcbiAgICAgICAgc3VwZXIuX2Rlc3Ryb3koZXJyLCBjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RvcmVBc1N0cmVhbShvYnNTdG9yZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVN0b3JlU3RyZWFtKG9ic1N0b3JlKTtcbn1cbmV4cG9ydHMuc3RvcmVBc1N0cmVhbSA9IHN0b3JlQXNTdHJlYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc1N0cmVhbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzU3RyZWFtXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Db21wb3NlZFN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9NZXJnZWRTdG9yZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90cmFuc2Zvcm1cIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlVHJhbnNmb3JtU3RyZWFtID0gdm9pZCAwO1xuY29uc3QgdGhyb3VnaDJfMSA9IHJlcXVpcmUoXCJ0aHJvdWdoMlwiKTtcbmZ1bmN0aW9uIHN0b3JlVHJhbnNmb3JtU3RyZWFtKHN5bmNUcmFuc2Zvcm1Gbikge1xuICAgIHJldHVybiB0aHJvdWdoMl8xLm9iaigoc3RhdGUsIF9lbmNvZGluZywgY2IpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3luY1RyYW5zZm9ybUZuKHN0YXRlKTtcbiAgICAgICAgICAgIGNiKG51bGwsIG5ld1N0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc3RvcmVUcmFuc2Zvcm1TdHJlYW0gPSBzdG9yZVRyYW5zZm9ybVN0cmVhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybS5qcy5tYXAiLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBXZWIzRXRoQ29udHJhY3QgZnJvbSAnd2ViMy1ldGgtY29udHJhY3QnO1xuaW1wb3J0IHsga2VjY2FrMjU2LCB0b0hleCB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuXG5jb25zdCBFVEhFUkVVTV9ORVRXT1JLID0ge1xuICBST1BTVEVOOiBcInJvcHN0ZW5cIixcbiAgTUFJTk5FVDogXCJtYWlubmV0XCIsXG4gIFBPTFlHT046IFwicG9seWdvbi1tYWlubmV0XCJcbn07XG5jb25zdCBhYmkgPSBbe1xuICBpbnB1dHM6IFt7XG4gICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxuICAgIG5hbWU6IFwiX3ZlcmlmaWVyXCIsXG4gICAgdHlwZTogXCJzdHJpbmdcIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcImJ5dGVzMzJcIixcbiAgICBuYW1lOiBcImhhc2hlZFZlcmlmaWVySWRcIixcbiAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICB9XSxcbiAgbmFtZTogXCJnZXROb2RlU2V0XCIsXG4gIG91dHB1dHM6IFt7XG4gICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICBuYW1lOiBcImN1cnJlbnRFcG9jaFwiLFxuICAgIHR5cGU6IFwidWludDI1NlwiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwic3RyaW5nW11cIixcbiAgICBuYW1lOiBcInRvcnVzTm9kZUVuZHBvaW50c1wiLFxuICAgIHR5cGU6IFwic3RyaW5nW11cIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZbXVwiLFxuICAgIG5hbWU6IFwidG9ydXNOb2RlUHViWFwiLFxuICAgIHR5cGU6IFwidWludDI1NltdXCJcbiAgfSwge1xuICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2W11cIixcbiAgICBuYW1lOiBcInRvcnVzTm9kZVB1YllcIixcbiAgICB0eXBlOiBcInVpbnQyNTZbXVwiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NltdXCIsXG4gICAgbmFtZTogXCJ0b3J1c0luZGV4ZXNcIixcbiAgICB0eXBlOiBcInVpbnQyNTZbXVwiXG4gIH1dLFxuICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICB0eXBlOiBcImZ1bmN0aW9uXCJcbn1dO1xuXG5jbGFzcyBOb2RlRGV0YWlsTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCB7XG4gICAgICBuZXR3b3JrID0gRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVULFxuICAgICAgcHJveHlBZGRyZXNzID0gTm9kZURldGFpbE1hbmFnZXIuUFJPWFlfQUREUkVTU19NQUlOTkVUXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfY3VycmVudEVwb2NoXCIsIFwiXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RvcnVzTm9kZUVuZHBvaW50c1wiLCBbXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdG9ydXNOb2RlUHViXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90b3J1c0luZGV4ZXNcIiwgW10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibm9kZUxpc3RBZGRyZXNzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cGRhdGVkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJub2RlTGlzdENvbnRyYWN0XCIsIHZvaWQgMCk7XG5cbiAgICBsZXQgdXJsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2FsVXJsID0gbmV3IFVSTChuZXR3b3JrKTtcbiAgICAgIHVybCA9IGxvY2FsVXJsLmhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gXCJiOGNkYjBlNGNmZjI0NTk5YTI4NmJmOGU4N2ZmMWM5NlwiO1xuICAgICAgdXJsID0gXCJodHRwczovL1wiLmNvbmNhdChuZXR3b3JrLCBcIi5pbmZ1cmEuaW8vdjMvXCIpLmNvbmNhdChwcm9qZWN0SWQpO1xuICAgIH1cblxuICAgIFdlYjNFdGhDb250cmFjdC5zZXRQcm92aWRlcih1cmwpO1xuICAgIHRoaXMubm9kZUxpc3RDb250cmFjdCA9IG5ldyBXZWIzRXRoQ29udHJhY3QoYWJpLCBwcm94eUFkZHJlc3MpO1xuICAgIHRoaXMubm9kZUxpc3RBZGRyZXNzID0gcHJveHlBZGRyZXNzO1xuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IF9ub2RlRGV0YWlscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudEVwb2NoOiB0aGlzLl9jdXJyZW50RXBvY2gsXG4gICAgICBub2RlTGlzdEFkZHJlc3M6IHRoaXMubm9kZUxpc3RBZGRyZXNzLFxuICAgICAgdG9ydXNOb2RlRW5kcG9pbnRzOiB0aGlzLl90b3J1c05vZGVFbmRwb2ludHMsXG4gICAgICB0b3J1c05vZGVQdWI6IHRoaXMuX3RvcnVzTm9kZVB1YixcbiAgICAgIHRvcnVzSW5kZXhlczogdGhpcy5fdG9ydXNJbmRleGVzLFxuICAgICAgdXBkYXRlZDogdGhpcy51cGRhdGVkXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGdldE5vZGVEZXRhaWxzKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgdmVyaWZpZXIsXG4gICAgICB2ZXJpZmllcklkXG4gICAgfSA9IF9yZWY7XG5cbiAgICB0cnkge1xuICAgICAgLy8gRG8gdGhpcyBvbmx5IGZvciBtYWlubmV0ICYgdGVzdG5ldCB3aGVyZSB0aGUgbGlzdCBpcyBzdGF0aWMgaXJyZXNwZWN0aXZlIG9mIHZlcmlmaWVyLCB2ZXJpZmllcklkXG4gICAgICBpZiAodGhpcy51cGRhdGVkICYmICh0aGlzLm5vZGVMaXN0QWRkcmVzcyA9PT0gTm9kZURldGFpbE1hbmFnZXIuUFJPWFlfQUREUkVTU19NQUlOTkVUIHx8IHRoaXMubm9kZUxpc3RBZGRyZXNzID09PSBOb2RlRGV0YWlsTWFuYWdlci5QUk9YWV9BRERSRVNTX1JPUFNURU4pKSByZXR1cm4gdGhpcy5fbm9kZURldGFpbHM7XG4gICAgICBjb25zdCBoYXNoZWRWZXJpZmllcklkID0ga2VjY2FrMjU2KHZlcmlmaWVySWQpO1xuICAgICAgY29uc3Qgbm9kZURldGFpbHMgPSBhd2FpdCB0aGlzLm5vZGVMaXN0Q29udHJhY3QubWV0aG9kcy5nZXROb2RlU2V0KHZlcmlmaWVyLCBoYXNoZWRWZXJpZmllcklkKS5jYWxsKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRFcG9jaCxcbiAgICAgICAgdG9ydXNOb2RlRW5kcG9pbnRzLFxuICAgICAgICB0b3J1c05vZGVQdWJYLFxuICAgICAgICB0b3J1c05vZGVQdWJZLFxuICAgICAgICB0b3J1c0luZGV4ZXNcbiAgICAgIH0gPSBub2RlRGV0YWlscztcbiAgICAgIHRoaXMuX2N1cnJlbnRFcG9jaCA9IGN1cnJlbnRFcG9jaDtcbiAgICAgIHRoaXMuX3RvcnVzSW5kZXhlcyA9IHRvcnVzSW5kZXhlcy5tYXAoeCA9PiBOdW1iZXIoeCkpO1xuICAgICAgY29uc3QgdXBkYXRlZEVuZHBvaW50cyA9IFtdO1xuICAgICAgY29uc3QgdXBkYXRlZE5vZGVQdWIgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcnVzTm9kZUVuZHBvaW50cy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgY29uc3QgZW5kUG9pbnRFbGVtZW50ID0gdG9ydXNOb2RlRW5kcG9pbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgcHViS3ggPSB0b3J1c05vZGVQdWJYW2luZGV4XTtcbiAgICAgICAgY29uc3QgcHViS3kgPSB0b3J1c05vZGVQdWJZW2luZGV4XTtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHBzOi8vXCIuY29uY2F0KGVuZFBvaW50RWxlbWVudC5zcGxpdChcIjpcIilbMF0sIFwiL2pycGNcIik7XG4gICAgICAgIHVwZGF0ZWRFbmRwb2ludHMucHVzaChlbmRwb2ludCk7XG4gICAgICAgIHVwZGF0ZWROb2RlUHViLnB1c2goe1xuICAgICAgICAgIFg6IHRvSGV4KHB1Ykt4KS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG4gICAgICAgICAgWTogdG9IZXgocHViS3kpLnJlcGxhY2UoXCIweFwiLCBcIlwiKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdG9ydXNOb2RlRW5kcG9pbnRzID0gdXBkYXRlZEVuZHBvaW50cztcbiAgICAgIHRoaXMuX3RvcnVzTm9kZVB1YiA9IHVwZGF0ZWROb2RlUHViO1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKHRoaXMubm9kZUxpc3RBZGRyZXNzID09PSBOb2RlRGV0YWlsTWFuYWdlci5QUk9YWV9BRERSRVNTX01BSU5ORVQpIHtcbiAgICAgICAgcmV0dXJuIE5vZGVEZXRhaWxNYW5hZ2VyLk5PREVfREVUQUlMU19NQUlOTkVUO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxufVxuXG5fZGVmaW5lUHJvcGVydHkoTm9kZURldGFpbE1hbmFnZXIsIFwiUFJPWFlfQUREUkVTU19NQUlOTkVUXCIsIFwiMHhmMjAzMzZlMTZCNTE4MjYzN2YwOTgyMWMyN0JEZTI5YjBBRmNmZTgwXCIpO1xuXG5fZGVmaW5lUHJvcGVydHkoTm9kZURldGFpbE1hbmFnZXIsIFwiUFJPWFlfQUREUkVTU19ST1BTVEVOXCIsIFwiMHg2MjU4YzlkNmMxMmVkM2VkZGE1OWExYTY1MjdlNDY5NTE3NzQ0YWE3XCIpO1xuXG5fZGVmaW5lUHJvcGVydHkoTm9kZURldGFpbE1hbmFnZXIsIFwiUFJPWFlfQUREUkVTU19QT0xZR09OXCIsIFwiMHg5ZjA3MmJhMTliMzM3MGU1MTJhYTFiNGJmY2RhZjk3MjgzMTY4MDA1XCIpO1xuXG5fZGVmaW5lUHJvcGVydHkoTm9kZURldGFpbE1hbmFnZXIsIFwiTk9ERV9ERVRBSUxTX01BSU5ORVRcIiwge1xuICBjdXJyZW50RXBvY2g6IFwiMTlcIixcbiAgbm9kZUxpc3RBZGRyZXNzOiBOb2RlRGV0YWlsTWFuYWdlci5QUk9YWV9BRERSRVNTX01BSU5ORVQsXG4gIHRvcnVzTm9kZUVuZHBvaW50czogW1wiaHR0cHM6Ly90b3J1cy0xOS50b3J1c25vZGUuY29tL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW5vZGUuZW5zLmRvbWFpbnMvanJwY1wiLCBcImh0dHBzOi8vdG9ydXMtbm9kZS5tYXRpYy5uZXR3b3JrL2pycGNcIiwgXCJodHRwczovL3RvcnVzLnppbGxpcWEubmV0d29yay9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy1tYWlubmV0LmNvc21vcy5uZXR3b3JrL2pycGNcIiwgXCJodHRwczovL3RvcnVzMi5ldGhlcnNjYW4uY29tL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW5vZGUtdjIuc2thbGVsYWJzLmNvbS9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy1ub2RlLmJpbmFuY2V4LmRldi9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1c25vZGUub250LmlvL2pycGNcIl0sXG4gIHRvcnVzSW5kZXhlczogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLFxuICB0b3J1c05vZGVQdWI6IFt7XG4gICAgWDogXCJiYmU4M2M2NDE3N2MzNzc1NTUwZTZiYTZhYzJiYzA1OWY2ODQ3ZDY0NGM5ZTQ4OTRlNDJjNjBkNzk3NGQ4YzJiXCIsXG4gICAgWTogXCI4MmI0OWE3Y2FmNzBkZWYzOGNkYWQyNzQwYWY0NWMxZTRmOTY5NjUwMTA1YzUwMTlhMjliYjE4YjIxYTlhY2I1XCJcbiAgfSwge1xuICAgIFg6IFwiYzIwOGNhYzRlZjlhNDdkMzg2MDk3YTljOTE1YjI4ZTljYjg5MjEzYWJlZThkMjZhMTcxOThlZTI2MTIwMWIwZFwiLFxuICAgIFk6IFwiYzdkYjJmZTQ2MzExMDlmNDA4MzNkZTlkYzc4ZDA3ZTM1NzA2NTQ5ZWU0OGZhNTU3YjMzZTRlNzVlMTA0Nzg3M1wiXG4gIH0sIHtcbiAgICBYOiBcImNhMTc2NmJiNDI2ZDRjYTU1ODI4MThhMGM1NDM5ZDU2MGVhNjRmNWJhYTA2MDc5M2FiMjlkZDNkMGNlYWNmZVwiLFxuICAgIFk6IFwiZDQ2YzFkMDhjNDBlMTMwNmUxYmNhMzI4YzIyODdiODI2ODE2NmIxMWExYmE0Yjg0NDJlYTJhZDBjNWUzMjE1MlwiXG4gIH0sIHtcbiAgICBYOiBcImMzOTM0ZGQyZjZmNGIzZDJlMWUzOThjYzUwMWUxNDNjMWUxYTM4MWI1MmZlYjZkMTUyNWFmMzRkMTYyNTM3NjhcIixcbiAgICBZOiBcIjcxZjUxNDFhNTAzNTc5OTA5OWY1ZWEzZTI0MWU2Njk0NmJjNTVkYzg1N2FjM2JkN2Q2ZmNkYjhkY2QzZWVlZWZcIlxuICB9LCB7XG4gICAgWDogXCIyMmU2NmYxOTI5NjMxZDAwYmYwMjYyMjc1ODE1OTdmMDg1ZmQ5NGZkOTUyZmMwZGNhOWYwODMzMzk4YjVjMDY0XCIsXG4gICAgWTogXCI2MDg4YjM5MTJlMTBhMWU5ZDUwMzU1YTYwOWMxMGRiN2QxODhmMTZhMmUyZmQ3MzU3ZTUxYmY0ZjZhNzRmMGExXCJcbiAgfSwge1xuICAgIFg6IFwiOWRjOWZhNDEwZjNjZTllYjcwZGY3MGNkZWEwMGE0OWYyYzRjYzdhMzFjMDhjMGRhYjVmODYzZWQzNWZmNTEzOVwiLFxuICAgIFk6IFwiNjI3YTI5MWNiODdhNzVjNjFkYTNmNjVkNjgxOGUxZTA1ZTM2MDIxNzE3OTgxN2VkMjdlOGM3M2JjYTdlYzEyMlwiXG4gIH0sIHtcbiAgICBYOiBcIjExOGI5ZmMwN2U5N2IwOTZkODk5YjlmNjY1ODQ2M2NlNmE4Y2FhNjQwMzhlMzdmYzk2OWRmNGU2MDIzZGQ4YzZcIixcbiAgICBZOiBcImJhZjlmYTRlNTE3NzBmNDc5NmVhMTY1ZGQwM2E3NjliODYwNjY4MWEzODk1NGEwYTkyYzRjYmZmZDY2MDljZTlcIlxuICB9LCB7XG4gICAgWDogXCI4YTZkOGI5MjVkYTE1YTI3M2RlYzNkOGY4Mzk1ZWMzNWNkNjg3OGYyNzRiMmIxODBlNGUxMDY5OTlkYjY0MDQzXCIsXG4gICAgWTogXCI5NmY2N2Y4NzBjMTU3NzQzZGEwYjFlYjg0ZDg5YmYzMDUwMGQ3NGRjODRjMTFmNTAxZWUxY2IwMTNhY2M4YzQ2XCJcbiAgfSwge1xuICAgIFg6IFwiMzljZWNiNjJlODYzNzI5ZjU3MmY3ZGZjNDZjMjQ4Njc5ODFiZjA0YmI0MDVmZWQwZGYzOWUzMzk4NGJmYWRlNVwiLFxuICAgIFk6IFwiNjFjMjM2NDQzNDAxMmU2OGEyYmUyZTk5NTI4MDUwMzdlNTI2MjlkNzc2MmZhZmM4ZTEwZTlmYjViYWQ4Zjc5MFwiXG4gIH1dLFxuICB1cGRhdGVkOiBmYWxzZVxufSk7XG5cbmV4cG9ydCB7IEVUSEVSRVVNX05FVFdPUkssIGFiaSwgTm9kZURldGFpbE1hbmFnZXIgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmV0Y2hOb2RlRGV0YWlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC5tZXJnZSc7XG5pbXBvcnQgbG9nTGV2ZWwsIHsgbGV2ZWxzIH0gZnJvbSAnbG9nbGV2ZWwnO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgbG9nID0gbG9nTGV2ZWwuZ2V0TG9nZ2VyKFwiaHR0cC1oZWxwZXJzXCIpO1xubG9nLnNldExldmVsKGxldmVscy5JTkZPKTtcbmxldCBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIjtcbmxldCBlbWJlZEhvc3QgPSBcIlwiOyAvLyAjcmVnaW9uIEFQSSBLZXlzXG5cbmNvbnN0IGdhdGV3YXlBdXRoSGVhZGVyID0gXCJ4LWFwaS1rZXlcIjtcbmNvbnN0IGdhdGV3YXlFbWJlZEhvc3RIZWFkZXIgPSBcIngtZW1iZWQtaG9zdFwiO1xubGV0IHNlbnRyeSA9IG51bGw7XG5jb25zdCB0cmFjaW5nT3JpZ2lucyA9IFtdO1xuY29uc3QgdHJhY2luZ1BhdGhzID0gW107XG5mdW5jdGlvbiBlbmFibGVTZW50cnlUcmFjaW5nKF9zZW50cnksIF90cmFjaW5nT3JpZ2lucywgX3RyYWNpbmdQYXRocykge1xuICBzZW50cnkgPSBfc2VudHJ5O1xuICB0cmFjaW5nT3JpZ2lucy5wdXNoKC4uLl90cmFjaW5nT3JpZ2lucyk7XG4gIHRyYWNpbmdQYXRocy5wdXNoKC4uLl90cmFjaW5nUGF0aHMpO1xufVxuZnVuY3Rpb24gc2V0RW1iZWRIb3N0KGVtYmVkSG9zdF8pIHtcbiAgZW1iZWRIb3N0ID0gZW1iZWRIb3N0Xztcbn1cbmZ1bmN0aW9uIGNsZWFyRW1iZWRIb3N0KCkge1xuICBlbWJlZEhvc3QgPSBcIlwiO1xufVxuZnVuY3Rpb24gZ2V0RW1iZWRIb3N0KCkge1xuICByZXR1cm4gZW1iZWRIb3N0O1xufVxuZnVuY3Rpb24gc2V0QVBJS2V5KGFwaUtleV8pIHtcbiAgYXBpS2V5ID0gYXBpS2V5Xztcbn1cbmZ1bmN0aW9uIGNsZWFyQVBJS2V5KCkge1xuICBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIjtcbn1cbmZ1bmN0aW9uIGdldEFQSUtleSgpIHtcbiAgcmV0dXJuIGFwaUtleTtcbn0gLy8gI2VuZHJlZ2lvblxuXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xuICBsb2cuc2V0TGV2ZWwobGV2ZWwpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFuZFRyYWNlKHVybCwgaW5pdCkge1xuICBsZXQgX3VybCA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBfdXJsID0gbmV3IFVSTCh1cmwpO1xuICB9IGNhdGNoIChlcnJvcikge31cblxuICBpZiAoc2VudHJ5ICYmIF91cmwgJiYgKHRyYWNpbmdPcmlnaW5zLmluY2x1ZGVzKF91cmwub3JpZ2luKSB8fCB0cmFjaW5nUGF0aHMuaW5jbHVkZXMoX3VybC5wYXRobmFtZSkpKSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBzZW50cnkuc3RhcnRUcmFuc2FjdGlvbih7XG4gICAgICBuYW1lOiB1cmxcbiAgICB9KTtcbiAgICBjb25zdCBzcGFuID0gdHJhbnNhY3Rpb24uc3RhcnRDaGlsZCh7XG4gICAgICBvcDogXCJodHRwXCJcbiAgICB9KTsgLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgU3BhblxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIHNwYW4uZmluaXNoKCk7IC8vIFJlbWVtYmVyIHRoYXQgb25seSBmaW5pc2hlZCBzcGFucyB3aWxsIGJlIHNlbnQgd2l0aCB0aGUgdHJhbnNhY3Rpb25cblxuICAgIHRyYW5zYWN0aW9uLmZpbmlzaCgpOyAvLyBGaW5pc2hpbmcgdGhlIHRyYW5zYWN0aW9uIHdpbGwgc2VuZCBpdCB0byBTZW50cnlcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHJldHVybiBmZXRjaCh1cmwsIGluaXQpO1xufVxuXG5mdW5jdGlvbiBnZXRBcGlLZXlIZWFkZXJzKCkge1xuICBjb25zdCBoZWFkZXJzID0ge307XG4gIGlmIChhcGlLZXkpIGhlYWRlcnNbZ2F0ZXdheUF1dGhIZWFkZXJdID0gYXBpS2V5O1xuICBpZiAoZW1iZWRIb3N0KSBoZWFkZXJzW2dhdGV3YXlFbWJlZEhvc3RIZWFkZXJdID0gZW1iZWRIb3N0O1xuICByZXR1cm4gaGVhZGVycztcbn1cblxuZnVuY3Rpb24gZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSkge1xuICBsb2cuaW5mbyhcIlJlc3BvbnNlOiBcIi5jb25jYXQocmVzcG9uc2Uuc3RhdHVzLCBcIiBcIikuY29uY2F0KHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgbG9nLmluZm8oXCJVcmw6IFwiLmNvbmNhdChyZXNwb25zZS51cmwpKTtcbn1cblxuY29uc3QgcHJvbWlzZVRpbWVvdXQgPSAobXMsIHByb21pc2UpID0+IHtcbiAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaW1lZCBvdXQgaW4gXCIuY29uY2F0KG1zLCBcIm1zXCIpKSk7XG4gICAgfSwgbXMpO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmFjZShbcHJvbWlzZSwgdGltZW91dF0pO1xufTtcbmNvbnN0IGdldCA9IGFzeW5jIGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IG9wdGlvbnNfID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgbGV0IGN1c3RvbU9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgICBoZWFkZXJzOiB7fVxuICB9O1xuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJHRVRcIlxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEFuZFRyYWNlKHVybCwgb3B0aW9ucyk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIGRlYnVnTG9nUmVzcG9uc2UocmVzcG9uc2UpO1xuICB0aHJvdyByZXNwb25zZTtcbn07XG5jb25zdCBwb3N0ID0gZnVuY3Rpb24gKHVybCkge1xuICBsZXQgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGxldCBvcHRpb25zXyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGxldCBjdXN0b21PcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcbiAgICB9XG4gIH07XG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIlxuICB9KTsgLy8gZGVlcCBtZXJnZSBjaGFuZ2VzIHRoZSBzdHJ1Y3R1cmUgb2YgZm9ybSBkYXRhIGFuZCB1cmwgZW5jb2RlZCBkYXRhICxcbiAgLy8gc28gd2Ugc2hvdWxkIG5vdCBkZWVwbWVyZ2UgYm9keSBkYXRhXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMuaXNVcmxFbmNvZGVkRGF0YSkge1xuICAgIC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gICAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAgIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuICAgIG9wdGlvbnMuYm9keSA9IGRhdGE7IC8vIElmIHVybCBlbmNvZGVkIGRhdGEsIHRoaXMgbXVzdCBub3QgYmUgdGhlIGNvbnRlbnQgdHlwZVxuXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl07XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZVRpbWVvdXQoY3VzdG9tT3B0aW9ucy50aW1lb3V0IHx8IDYwMDAwLCBmZXRjaEFuZFRyYWNlKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cblxuICAgIGRlYnVnTG9nUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIHRocm93IHJlc3BvbnNlO1xuICB9KSk7XG59O1xuY29uc3QgcGF0Y2ggPSBhc3luYyBmdW5jdGlvbiAodXJsKSB7XG4gIGxldCBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgbGV0IG9wdGlvbnNfID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgbGV0IGN1c3RvbU9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIlxuICAgIH1cbiAgfTsgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cblxuICBpZiAoY3VzdG9tT3B0aW9ucy51c2VBUElLZXkpIHtcbiAgICBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzKSwgZ2V0QXBpS2V5SGVhZGVycygpKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9uc18sIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIlxuICB9KTsgLy8gZGVlcCBtZXJnZSBjaGFuZ2VzIHRoZSBzdHJ1Y3R1cmUgb2YgZm9ybSBkYXRhIGFuZCB1cmwgZW5jb2RlZCBkYXRhICxcbiAgLy8gc28gd2Ugc2hvdWxkIG5vdCBkZWVwbWVyZ2UgYm9keSBkYXRhXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMuaXNVcmxFbmNvZGVkRGF0YSkge1xuICAgIC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gICAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAgIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuICAgIG9wdGlvbnMuYm9keSA9IGRhdGE7IC8vIElmIHVybCBlbmNvZGVkIGRhdGEsIHRoaXMgbXVzdCBub3QgYmUgdGhlIGNvbnRlbnQgdHlwZVxuXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl07XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoQW5kVHJhY2UodXJsLCBvcHRpb25zKTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSk7XG4gIHRocm93IHJlc3BvbnNlO1xufTtcbmNvbnN0IHJlbW92ZSA9IGFzeW5jIGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgfVxuICB9OyAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIlxuICB9KTtcblxuICBpZiAoY3VzdG9tT3B0aW9ucy5pc1VybEVuY29kZWREYXRhKSB7XG4gICAgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gICAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG4gICAgb3B0aW9ucy5ib2R5ID0gZGF0YTsgLy8gSWYgdXJsIGVuY29kZWQgZGF0YSwgdGhpcyBtdXN0IG5vdCBiZSB0aGUgY29udGVudCB0eXBlXG5cbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIikgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hBbmRUcmFjZSh1cmwsIG9wdGlvbnMpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgdGhyb3cgcmVzcG9uc2U7XG59O1xuY29uc3QgZ2VuZXJhdGVKc29uUlBDT2JqZWN0ID0gKG1ldGhvZCwgcGFyYW1ldGVycykgPT4gKHtcbiAganNvbnJwYzogXCIyLjBcIixcbiAgbWV0aG9kLFxuICBpZDogMTAsXG4gIHBhcmFtczogcGFyYW1ldGVyc1xufSk7XG5jb25zdCBwcm9taXNlUmFjZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgbGV0IHRpbWVvdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDYwMDAwO1xuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtnZXQodXJsLCBvcHRpb25zKSwgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcInRpbWVkIG91dFwiKSk7XG4gICAgfSwgdGltZW91dCk7XG4gIH0pXSk7XG59O1xuXG5leHBvcnQgeyBjbGVhckFQSUtleSwgY2xlYXJFbWJlZEhvc3QsIGVuYWJsZVNlbnRyeVRyYWNpbmcsIGdhdGV3YXlBdXRoSGVhZGVyLCBnYXRld2F5RW1iZWRIb3N0SGVhZGVyLCBnZW5lcmF0ZUpzb25SUENPYmplY3QsIGdldCwgZ2V0QVBJS2V5LCBnZXRFbWJlZEhvc3QsIHBhdGNoLCBwb3N0LCBwcm9taXNlUmFjZSwgcHJvbWlzZVRpbWVvdXQsIHJlbW92ZSwgc2V0QVBJS2V5LCBzZXRFbWJlZEhvc3QsIHNldExvZ0xldmVsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwSGVscGVycy5lc20uanMubWFwXG4iLCJpbXBvcnQgcmFuZG9tYnl0ZXMgZnJvbSAncmFuZG9tYnl0ZXMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBiYXNlNjR1cmxMaWIgZnJvbSAnYmFzZTY0dXJsJztcbmltcG9ydCBrZWNjYWtMaWIgZnJvbSAna2VjY2FrJztcblxuY29uc3QgcmFuZG9tSWQgPSAoKSA9PiByYW5kb21ieXRlcygzMikudG9TdHJpbmcoXCJoZXhcIik7XG5cbmNsYXNzIFVSTFdpdGhIYXNoUGFyYW1zIGV4dGVuZHMgVVJMIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhhc2hQYXJhbXNcIiwgbmV3IFVSTFNlYXJjaFBhcmFtcygpKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuaGFzaFBhcmFtcy50b1N0cmluZygpO1xuICAgIHJldHVybiBzdXBlci50b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9XG5cbn1cblxuY29uc3QgYmFzZTY0dXJsID0gYmFzZTY0dXJsTGliO1xuZnVuY3Rpb24gc2FmZWJ0b2Eoc3RyKSB7XG4gIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKHN0cik7XG59XG5mdW5jdGlvbiBzYWZlYXRvYihzdHIpIHtcbiAgLy8gR29pbmcgYmFja3dhcmRzOiBmcm9tIGJ5dGVzdHJlYW0sIHRvIHBlcmNlbnQtZW5jb2RpbmcsIHRvIG9yaWdpbmFsIHN0cmluZy5cbiAgcmV0dXJuIGJhc2U2NHVybC5kZWNvZGUoc3RyKTtcbn1cbmNvbnN0IGtlY2NhayA9IGtlY2Nha0xpYjtcbmZ1bmN0aW9uIGJhc2U2NHRvSlNPTihiNjRzdHIpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0dXJsLmRlY29kZShiNjRzdHIpKTtcbn1cbmZ1bmN0aW9uIGpzb25Ub0Jhc2U2NChqc29uKSB7XG4gIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbn1cbmZ1bmN0aW9uIGtlY2NhazI1NihzdHIpIHtcbiAgbGV0IGlucHV0ID0gc3RyO1xuXG4gIGlmICh0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiICYmIHN0ci5zbGljZSgwLCAyKSA9PT0gXCIweFwiICYmIHN0ci5sZW5ndGggPT09IDY2KSB7XG4gICAgaW5wdXQgPSBCdWZmZXIuZnJvbShzdHIuc2xpY2UoMiksIFwiaGV4XCIpO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IFwiMHhcIi5jb25jYXQoa2VjY2FrKFwia2VjY2FrMjU2XCIpLnVwZGF0ZShpbnB1dCkuZGlnZXN0KFwiaGV4XCIpLnBhZFN0YXJ0KDY0LCBcIjBcIikpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IHsgVVJMV2l0aEhhc2hQYXJhbXMsIGJhc2U2NHRvSlNPTiwgYmFzZTY0dXJsLCBqc29uVG9CYXNlNjQsIGtlY2Nhaywga2VjY2FrMjU2LCByYW5kb21JZCwgc2FmZWF0b2IsIHNhZmVidG9hIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVubG9naW5VdGlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgRHVwbGV4IH0gZnJvbSAncmVhZGFibGUtc3RyZWFtJztcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnQHRvcnVzbGFicy9vcGVubG9naW4tdXRpbHMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnZmFzdC1zYWZlLXN0cmluZ2lmeSc7XG5pbXBvcnQgeyBzZXJpYWxpemVFcnJvciB9IGZyb20gJ2V0aC1ycGMtZXJyb3JzJztcbmltcG9ydCBlb3MgZnJvbSAnZW5kLW9mLXN0cmVhbSc7XG5pbXBvcnQgb25jZSBmcm9tICdvbmNlJztcbmltcG9ydCBwdW1wIGZyb20gJ3B1bXAnO1xuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBTWU4gPSBcIlNZTlwiO1xuY29uc3QgQUNLID0gXCJBQ0tcIjtcbmNvbnN0IEJSSyA9IFwiQlJLXCI7XG5jbGFzcyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0gZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIG5hbWUsXG4gICAgICB0YXJnZXQsXG4gICAgICB0YXJnZXRXaW5kb3cgPSB3aW5kb3csXG4gICAgICB0YXJnZXRPcmlnaW4gPSBcIipcIlxuICAgIH0gPSBfcmVmO1xuICAgIHN1cGVyKHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWVcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbml0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaGF2ZVN5blwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX25hbWVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRXaW5kb3dcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRPcmlnaW5cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9vbk1lc3NhZ2VcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zeW5JbnRlcnZhbElkXCIsIHZvaWQgMCk7XG5cbiAgICBpZiAoIW5hbWUgfHwgIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dC5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuX2hhdmVTeW4gPSBmYWxzZTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQ7IC8vIHRhcmdldCBvcmlnaW5cblxuICAgIHRoaXMuX3RhcmdldFdpbmRvdyA9IHRhcmdldFdpbmRvdztcbiAgICB0aGlzLl90YXJnZXRPcmlnaW4gPSB0YXJnZXRPcmlnaW47XG4gICAgdGhpcy5fb25NZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zeW5JbnRlcnZhbElkID0gbnVsbDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fb25NZXNzYWdlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9oYW5kU2hha2UoKTtcbiAgfVxuXG4gIF9icmVhaygpIHtcbiAgICB0aGlzLmNvcmsoKTtcblxuICAgIHRoaXMuX3dyaXRlKEJSSywgbnVsbCwgbm9vcCk7XG5cbiAgICB0aGlzLl9oYXZlU3luID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdCA9IGZhbHNlO1xuICB9XG5cbiAgX2hhbmRTaGFrZSgpIHtcbiAgICB0aGlzLl93cml0ZShTWU4sIG51bGwsIG5vb3ApO1xuXG4gICAgdGhpcy5jb3JrKCk7XG4gIH1cblxuICBfb25EYXRhKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuX2luaXQpIHtcbiAgICAgIC8vIGxpc3RlbiBmb3IgaGFuZHNoYWtlXG4gICAgICBpZiAoZGF0YSA9PT0gU1lOKSB7XG4gICAgICAgIHRoaXMuX2hhdmVTeW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3dyaXRlKEFDSywgbnVsbCwgbm9vcCk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT09IEFDSykge1xuICAgICAgICB0aGlzLl9pbml0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuX2hhdmVTeW4pIHtcbiAgICAgICAgICB0aGlzLl93cml0ZShBQ0ssIG51bGwsIG5vb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51bmNvcmsoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEgPT09IEJSSykge1xuICAgICAgdGhpcy5fYnJlYWsoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yd2FyZCBtZXNzYWdlXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnB1c2goZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcG9zdE1lc3NhZ2UoZGF0YSkge1xuICAgIGNvbnN0IG9yaWdpbkNvbnN0cmFpbnQgPSB0aGlzLl90YXJnZXRPcmlnaW47XG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgdGFyZ2V0OiB0aGlzLl90YXJnZXQsXG4gICAgICBkYXRhXG4gICAgfSwgb3JpZ2luQ29uc3RyYWludCk7XG4gIH1cblxuICBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YTsgLy8gdmFsaWRhdGUgbWVzc2FnZVxuXG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbiAhPT0gXCIqXCIgJiYgZXZlbnQub3JpZ2luICE9PSB0aGlzLl90YXJnZXRPcmlnaW4gfHwgZXZlbnQuc291cmNlICE9PSB0aGlzLl90YXJnZXRXaW5kb3cgfHwgdHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZS50YXJnZXQgIT09IHRoaXMuX25hbWUgfHwgIW1lc3NhZ2UuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29uRGF0YShtZXNzYWdlLmRhdGEpO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIF93cml0ZShkYXRhLCBfLCBjYikge1xuICAgIHRoaXMuX3Bvc3RNZXNzYWdlKGRhdGEpO1xuXG4gICAgY2IoKTtcbiAgfVxuXG4gIF9kZXN0cm95KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9vbk1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHNhZmVBcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKSB7XG4gIHRyeSB7XG4gICAgUmVmbGVjdC5hcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVGhyb3cgZXJyb3IgYWZ0ZXIgdGltZW91dCBzbyBhcyBub3QgdG8gaW50ZXJydXB0IHRoZSBzdGFja1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyKSB7XG4gIGNvbnN0IG4gPSBhcnIubGVuZ3RoO1xuICBjb25zdCBjb3B5ID0gbmV3IEFycmF5KG4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufVxuXG5jbGFzcyBTYWZlRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgZW1pdCh0eXBlKSB7XG4gICAgbGV0IGRvRXJyb3IgPSB0eXBlID09PSBcImVycm9yXCI7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gICAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb0Vycm9yID0gZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKCFkb0Vycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG5cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChkb0Vycm9yKSB7XG4gICAgICBsZXQgZXI7XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgW2VyXSA9IGFyZ3M7XG4gICAgICB9XG5cbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuXG5cbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlVuaGFuZGxlZCBlcnJvci5cIi5jb25jYXQoZXIgPyBcIiAoXCIuY29uY2F0KGVyLm1lc3NhZ2UsIFwiKVwiKSA6IFwiXCIpKTtcbiAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgc2FmZUFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlcik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgc2FmZUFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxufVxuXG5jbGFzcyBTZXJpYWxpemFibGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBjb2RlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGRhdGFcbiAgICB9ID0gX3JlZjtcblxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29kZSBtdXN0IGJlIGFuIGludGVnZXJcIik7XG4gICAgfVxuXG4gICAgaWYgKCFtZXNzYWdlIHx8IHR5cGVvZiBtZXNzYWdlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXNzYWdlIG11c3QgYmUgc3RyaW5nXCIpO1xuICAgIH1cblxuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29kZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGF0YVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5jb2RlID0gY29kZTtcblxuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeSh7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBzdGFjazogdGhpcy5zdGFja1xuICAgIH0pO1xuICB9XG5cbn1cblxuY29uc3QgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICBsZXQgdW53cmFwUmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4gKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnJvciB8fCByZXNwb25zZS5lcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKTtcbiAgICB9IGVsc2UgaWYgKCF1bndyYXBSZXN1bHQgfHwgQXJyYXkuaXNBcnJheShyZXNwb25zZSkpIHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG4gICAgfVxuICB9O1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yTWlkZGxld2FyZShsb2cpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGpzb24tcnBjLWVuZ2luZSB3aWxsIHRlcm1pbmF0ZSB0aGUgcmVxdWVzdCB3aGVuIGl0IG5vdGljZXMgdGhpcyBlcnJvclxuICAgICAgaWYgKHR5cGVvZiByZXEubWV0aG9kICE9PSBcInN0cmluZ1wiIHx8ICFyZXEubWV0aG9kKSB7XG4gICAgICAgIHJlcy5lcnJvciA9IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBtZXRob2RcIlxuICAgICAgICB9KTtcbiAgICAgICAgZW5kKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dChkb25lID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH0gPSByZXM7XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuZXJyb3IoXCJPcGVuTG9naW4gLSBSUEMgRXJyb3I6IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihcIk9wZW5Mb2dpbiAtIFJQQyBFcnJvciB0aHJvd246IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgcmVzLmVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUoKSB7XG4gIGNvbnN0IGlkTWFwID0ge307XG5cbiAgZnVuY3Rpb24gcmVhZE5vb3AoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gbmV3IFNhZmVFdmVudEVtaXR0ZXIoKTtcblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2UocmVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGlkTWFwW3Jlcy5pZF07XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmVhbU1pZGRsZXdhcmUgLSBVbmtub3duIHJlc3BvbnNlIGlkIFxcXCJcIi5jb25jYXQocmVzLmlkLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBpZE1hcFtyZXMuaWRdOyAvLyBjb3B5IHdob2xlIHJlcyBvbnRvIG9yaWdpbmFsIHJlc1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LnJlcywgcmVzKTsgLy8gcnVuIGNhbGxiYWNrIG9uIGVtcHR5IHN0YWNrLFxuICAgIC8vIHByZXZlbnQgaW50ZXJuYWwgc3RyZWFtLWhhbmRsZXIgZnJvbSBjYXRjaGluZyBlcnJvcnNcblxuICAgIHNldFRpbWVvdXQoY29udGV4dC5lbmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc05vdGlmaWNhdGlvbihyZXMpIHtcbiAgICBldmVudHMuZW1pdChcIm5vdGlmaWNhdGlvblwiLCByZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UocmVzLCBfZW5jb2RpbmcsIGNiKSB7XG4gICAgbGV0IGVycjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc05vdGlmaWNhdGlvbiA9ICFyZXMuaWQ7XG5cbiAgICAgIGlmIChpc05vdGlmaWNhdGlvbikge1xuICAgICAgICBwcm9jZXNzTm90aWZpY2F0aW9uKHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzUmVzcG9uc2UocmVzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICBlcnIgPSBfZXJyO1xuICAgIH0gLy8gY29udGludWUgcHJvY2Vzc2luZyBzdHJlYW1cblxuXG4gICAgY2IoZXJyKTtcbiAgfVxuXG4gIGNvbnN0IHN0cmVhbSA9IG5ldyBEdXBsZXgoe1xuICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgcmVhZDogcmVhZE5vb3AsXG4gICAgd3JpdGU6IHByb2Nlc3NNZXNzYWdlXG4gIH0pO1xuXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQsIGVuZCkgPT4ge1xuICAgIC8vIHdyaXRlIHJlcSB0byBzdHJlYW1cbiAgICBzdHJlYW0ucHVzaChyZXEpOyAvLyByZWdpc3RlciByZXF1ZXN0IG9uIGlkIG1hcFxuXG4gICAgaWRNYXBbcmVxLmlkXSA9IHtcbiAgICAgIHJlcSxcbiAgICAgIHJlcyxcbiAgICAgIG5leHQsXG4gICAgICBlbmRcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZXZlbnRzLFxuICAgIG1pZGRsZXdhcmUsXG4gICAgc3RyZWFtXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTY2FmZm9sZE1pZGRsZXdhcmUoaGFuZGxlcnMpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW3JlcS5tZXRob2RdOyAvLyBpZiBubyBoYW5kbGVyLCByZXR1cm5cblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfSAvLyBpZiBoYW5kbGVyIGlzIGZuLCBjYWxsIGFzIG1pZGRsZXdhcmVcblxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzLCBuZXh0LCBlbmQpO1xuICAgIH0gLy8gaWYgaGFuZGxlciBpcyBzb21lIG90aGVyIHZhbHVlLCB1c2UgYXMgcmVzdWx0XG5cblxuICAgIHJlcy5yZXN1bHQgPSBoYW5kbGVyO1xuICAgIHJldHVybiBlbmQoKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlKCkge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0LCBfZW5kKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxJZCA9IHJlcS5pZDtcbiAgICBjb25zdCBuZXdJZCA9IHJhbmRvbUlkKCk7XG4gICAgcmVxLmlkID0gbmV3SWQ7XG4gICAgcmVzLmlkID0gbmV3SWQ7XG4gICAgbmV4dChkb25lID0+IHtcbiAgICAgIHJlcS5pZCA9IG9yaWdpbmFsSWQ7XG4gICAgICByZXMuaWQgPSBvcmlnaW5hbElkO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyTWlkZGxld2FyZShsb2dnZXIpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgXykgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZyhcIlJFUVwiLCByZXEsIFwiUkVTXCIsIHJlcyk7XG4gICAgbmV4dCgpO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQXN5bmNNaWRkbGV3YXJlKGFzeW5jTWlkZGxld2FyZSkge1xuICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAvLyBuZXh0UHJvbWlzZSBpcyB0aGUga2V5IHRvIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGl0IGlzIHJlc29sdmVkIGJ5IHRoZSByZXR1cm4gaGFuZGxlciBwYXNzZWQgdG8gdGhlXG4gICAgLy8gXCJuZXh0XCIgZnVuY3Rpb25cbiAgICBsZXQgcmVzb2x2ZU5leHRQcm9taXNlO1xuICAgIGNvbnN0IG5leHRQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICByZXNvbHZlTmV4dFByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGxldCByZXR1cm5IYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIGxldCBuZXh0V2FzQ2FsbGVkID0gZmFsc2U7IC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgdGhlIGNvbnN1bWVyJ3MgYXN5bmMgbWlkZGxld2FyZS5cblxuICAgIGNvbnN0IGFzeW5jTmV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgIG5leHRXYXNDYWxsZWQgPSB0cnVlOyAvLyBXZSBwYXNzIGEgcmV0dXJuIGhhbmRsZXIgdG8gbmV4dCgpLiBXaGVuIGl0IGlzIGNhbGxlZCBieSB0aGUgZW5naW5lLFxuICAgICAgLy8gdGhlIGNvbnN1bWVyJ3MgYXN5bmMgbWlkZGxld2FyZSB3aWxsIHJlc3VtZSBleGVjdXRpbmcuXG5cbiAgICAgIG5leHQocnVuUmV0dXJuSGFuZGxlcnNDYWxsYmFjayA9PiB7XG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgY29tZXMgZnJvbSBKUlBDRW5naW5lLl9ydW5SZXR1cm5IYW5kbGVyc1xuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2sgPSBydW5SZXR1cm5IYW5kbGVyc0NhbGxiYWNrO1xuICAgICAgICByZXNvbHZlTmV4dFByb21pc2UoKTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgbmV4dFByb21pc2U7XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhc3luY01pZGRsZXdhcmUocmVxLCByZXMsIGFzeW5jTmV4dCk7XG5cbiAgICAgIGlmIChuZXh0V2FzQ2FsbGVkKSB7XG4gICAgICAgIGF3YWl0IG5leHRQcm9taXNlOyAvLyB3ZSBtdXN0IHdhaXQgdW50aWwgdGhlIHJldHVybiBoYW5kbGVyIGlzIGNhbGxlZFxuXG4gICAgICAgIHJldHVybkhhbmRsZXJDYWxsYmFjayhudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZChudWxsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKHJldHVybkhhbmRsZXJDYWxsYmFjaykge1xuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbi8qKlxuICogQSBKU09OLVJQQyByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9jZXNzb3IuXG4gKiBHaXZlIGl0IGEgc3RhY2sgb2YgbWlkZGxld2FyZSwgcGFzcyBpdCByZXF1ZXN0cywgYW5kIGdldCBiYWNrIHJlc3BvbnNlcy5cbiAqL1xuXG5jbGFzcyBKUlBDRW5naW5lIGV4dGVuZHMgU2FmZUV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWlkZGxld2FyZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbWlkZGxld2FyZSA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBTZXJpYWxseSBleGVjdXRlcyB0aGUgZ2l2ZW4gc3RhY2sgb2YgbWlkZGxld2FyZS5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYW55IGVycm9yIGVuY291bnRlcmVkIGR1cmluZyBtaWRkbGV3YXJlIGV4ZWN1dGlvbixcbiAgICogYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgcmVxdWVzdCB3YXMgY29tcGxldGVkLCBhbmQgYW4gYXJyYXkgb2ZcbiAgICogbWlkZGxld2FyZS1kZWZpbmVkIHJldHVybiBoYW5kbGVycy5cbiAgICovXG5cblxuICBzdGF0aWMgYXN5bmMgX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIG1pZGRsZXdhcmVTdGFjaykge1xuICAgIGNvbnN0IHJldHVybkhhbmRsZXJzID0gW107XG4gICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlOyAvLyBHbyBkb3duIHN0YWNrIG9mIG1pZGRsZXdhcmUsIGNhbGwgYW5kIGNvbGxlY3Qgb3B0aW9uYWwgcmV0dXJuSGFuZGxlcnNcblxuICAgIGZvciAoY29uc3QgbWlkZGxld2FyZSBvZiBtaWRkbGV3YXJlU3RhY2spIHtcbiAgICAgIFtlcnJvciwgaXNDb21wbGV0ZV0gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlLCByZXR1cm5IYW5kbGVycyk7XG5cbiAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbZXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzLnJldmVyc2UoKV07XG4gIH1cbiAgLyoqXG4gICAqIFJ1bnMgYW4gaW5kaXZpZHVhbCBtaWRkbGV3YXJlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBhbnkgZXJyb3IgZW5jb3VudGVyZWQgZHVyaW5nIG1pZGRsZXdhcmUgZXhlY3Rpb24sXG4gICAqIGFuZCBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBlbmQuXG4gICAqL1xuXG5cbiAgc3RhdGljIF9ydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlLCByZXR1cm5IYW5kbGVycykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGVuZCA9IGVyciA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyIHx8IHJlcy5lcnJvcjtcblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuZXJyb3IgPSBzZXJpYWxpemVFcnJvcihlcnJvcik7XG4gICAgICAgIH0gLy8gVHJ1ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBzaG91bGQgZW5kXG5cblxuICAgICAgICByZXNvbHZlKFtlcnJvciwgdHJ1ZV0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV4dCA9IHJldHVybkhhbmRsZXIgPT4ge1xuICAgICAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICAgICAgZW5kKHJlcy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJldHVybkhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0dXJuSGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGVuZChuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICAgICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkpSUENFbmdpbmU6ICduZXh0JyByZXR1cm4gaGFuZGxlcnMgbXVzdCBiZSBmdW5jdGlvbnNcIlxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybkhhbmRsZXJzLnB1c2gocmV0dXJuSGFuZGxlcik7XG4gICAgICAgICAgfSAvLyBGYWxzZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBzaG91bGQgbm90IGVuZFxuXG5cbiAgICAgICAgICByZXNvbHZlKFtudWxsLCBmYWxzZV0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0LCBlbmQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2VyaWFsbHkgZXhlY3V0ZXMgYXJyYXkgb2YgcmV0dXJuIGhhbmRsZXJzLiBUaGUgcmVxdWVzdCBhbmQgcmVzcG9uc2UgYXJlXG4gICAqIGFzc3VtZWQgdG8gYmUgaW4gdGhlaXIgc2NvcGUuXG4gICAqL1xuXG5cbiAgc3RhdGljIGFzeW5jIF9ydW5SZXR1cm5IYW5kbGVycyhoYW5kbGVycykge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBoYW5kbGVycykge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBoYW5kbGVyKGVyciA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcmVzcG9uc2UgaGFzIG5laXRoZXIgYSByZXN1bHQgbm9yIGFuIGVycm9yLCBvciBpZlxuICAgKiB0aGUgXCJpc0NvbXBsZXRlXCIgZmxhZyBpcyBmYWxzeS5cbiAgICovXG5cblxuICBzdGF0aWMgX2NoZWNrRm9yQ29tcGxldGlvbihyZXEsIHJlcywgaXNDb21wbGV0ZSkge1xuICAgIGlmICghKFwicmVzdWx0XCIgaW4gcmVzKSAmJiAhKFwiZXJyb3JcIiBpbiByZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwiUmVzcG9uc2UgaGFzIG5vIGVycm9yIG9yIHJlc3VsdCBmb3IgcmVxdWVzdFwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQ29tcGxldGUpIHtcbiAgICAgIHRocm93IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgbWVzc2FnZTogXCJOb3RoaW5nIGVuZGVkIHJlcXVlc3RcIlxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIHRoZSBlbmdpbmUncyBtaWRkbGV3YXJlIHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gbWlkZGxld2FyZSAtIFRoZSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICovXG5cblxuICBwdXNoKG1pZGRsZXdhcmUpIHtcbiAgICB0aGlzLl9taWRkbGV3YXJlLnB1c2gobWlkZGxld2FyZSk7XG4gIH1cblxuICBoYW5kbGUocmVxLCBjYikge1xuICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNhbGxiYWNrXCIgbXVzdCBiZSBhIGZ1bmN0aW9uIGlmIHByb3ZpZGVkLicpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlcSkpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlQmF0Y2gocmVxLCBjYik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVCYXRjaChyZXEpO1xuICAgIH1cblxuICAgIGlmIChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZShyZXEsIGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZUhhbmRsZShyZXEpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoaXMgZW5naW5lIGFzIGEgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwdXNoZWQgdG8gb3RoZXJcbiAgICogZW5naW5lcy5cbiAgICpcbiAgICogQHJldHVybnMgVGhpcyBlbmdpbmUgYXMgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uLlxuICAgKi9cblxuXG4gIGFzTWlkZGxld2FyZSgpIHtcbiAgICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFttaWRkbGV3YXJlRXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzXSA9IGF3YWl0IEpSUENFbmdpbmUuX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIHRoaXMuX21pZGRsZXdhcmUpO1xuXG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpO1xuICAgICAgICAgIHJldHVybiBlbmQobWlkZGxld2FyZUVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFzeW5jIGhhbmRsZXJDYWxsYmFjayA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEpSUENFbmdpbmUuX3J1blJldHVybkhhbmRsZXJzKHJldHVybkhhbmRsZXJzKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJDYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXJDYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlbmQoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBhc3luYyBfaGFuZGxlQmF0Y2gocmVxcywgY2IpIHtcbiAgICAvLyBUaGUgb3JkZXIgaGVyZSBpcyBpbXBvcnRhbnRcbiAgICB0cnkge1xuICAgICAgLy8gMi4gV2FpdCBmb3IgYWxsIHJlcXVlc3RzIHRvIGZpbmlzaCwgb3IgdGhyb3cgb24gc29tZSBraW5kIG9mIGZhdGFsXG4gICAgICAvLyBlcnJvclxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIC8vIDEuIEJlZ2luIGV4ZWN1dGluZyBlYWNoIHJlcXVlc3QgaW4gdGhlIG9yZGVyIHJlY2VpdmVkXG4gICAgICByZXFzLm1hcCh0aGlzLl9wcm9taXNlSGFuZGxlLmJpbmQodGhpcykpKTsgLy8gMy4gUmV0dXJuIGJhdGNoIHJlc3BvbnNlXG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gY2IobnVsbCwgcmVzcG9uc2VzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBjYihlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQSBwcm9taXNlLXdyYXBwZWQgX2hhbmRsZS5cbiAgICovXG5cblxuICBfcHJvbWlzZUhhbmRsZShyZXEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGUocmVxLCAoX2VyciwgcmVzKSA9PiB7XG4gICAgICAgIC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGEgcmVzcG9uc2UsIGFuZCBpdCB3aWxsIGFsd2F5cyBoYXZlIGFueSBlcnJvclxuICAgICAgICAvLyB0aGF0IGlzIGNhdWdodCBhbmQgcHJvcGFnYXRlZC5cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhhdCB0aGUgcmVxdWVzdCBvYmplY3QgaXMgdmFsaWQsIHByb2Nlc3NlcyBpdCwgYW5kIHBhc3NlcyBhbnlcbiAgICogZXJyb3IgYW5kIHRoZSByZXNwb25zZSBvYmplY3QgdG8gdGhlIGdpdmVuIGNhbGxiYWNrLlxuICAgKlxuICAgKiBEb2VzIG5vdCByZWplY3QuXG4gICAqL1xuXG5cbiAgYXN5bmMgX2hhbmRsZShjYWxsZXJSZXEsIGNiKSB7XG4gICAgaWYgKCFjYWxsZXJSZXEgfHwgQXJyYXkuaXNBcnJheShjYWxsZXJSZXEpIHx8IHR5cGVvZiBjYWxsZXJSZXEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBcInJlcXVlc3QgbXVzdCBiZSBwbGFpbiBvYmplY3RcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2IoZXJyb3IsIHtcbiAgICAgICAgaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgZXJyb3JcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsbGVyUmVxLm1ldGhvZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwibWV0aG9kIG11c3QgYmUgc3RyaW5nXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNiKGVycm9yLCB7XG4gICAgICAgIGlkOiBjYWxsZXJSZXEuaWQsXG4gICAgICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgICAgIGVycm9yXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXEgPSBfb2JqZWN0U3ByZWFkJDEoe30sIGNhbGxlclJlcSk7XG5cbiAgICBjb25zdCByZXMgPSB7XG4gICAgICBpZDogcmVxLmlkLFxuICAgICAganNvbnJwYzogcmVxLmpzb25ycGNcbiAgICB9O1xuICAgIGxldCBlcnJvciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fcHJvY2Vzc1JlcXVlc3QocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgLy8gQSByZXF1ZXN0IGhhbmRsZXIgZXJyb3IsIGEgcmUtdGhyb3duIG1pZGRsZXdhcmUgZXJyb3IsIG9yIHNvbWV0aGluZ1xuICAgICAgLy8gdW5leHBlY3RlZC5cbiAgICAgIGVycm9yID0gX2Vycm9yO1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgLy8gRW5zdXJlIG5vIHJlc3VsdCBpcyBwcmVzZW50IG9uIGFuIGVycm9yZWQgcmVzcG9uc2VcbiAgICAgIGRlbGV0ZSByZXMucmVzdWx0O1xuXG4gICAgICBpZiAoIXJlcy5lcnJvcikge1xuICAgICAgICByZXMuZXJyb3IgPSBzZXJpYWxpemVFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNiKGVycm9yLCByZXMpO1xuICB9XG4gIC8qKlxuICAgKiBGb3IgdGhlIGdpdmVuIHJlcXVlc3QgYW5kIHJlc3BvbnNlLCBydW5zIGFsbCBtaWRkbGV3YXJlIGFuZCB0aGVpciByZXR1cm5cbiAgICogaGFuZGxlcnMsIGlmIGFueSwgYW5kIGVuc3VyZXMgdGhhdCBpbnRlcm5hbCByZXF1ZXN0IHByb2Nlc3Npbmcgc2VtYW50aWNzXG4gICAqIGFyZSBzYXRpc2ZpZWQuXG4gICAqL1xuXG5cbiAgYXN5bmMgX3Byb2Nlc3NSZXF1ZXN0KHJlcSwgcmVzKSB7XG4gICAgY29uc3QgW2Vycm9yLCBpc0NvbXBsZXRlLCByZXR1cm5IYW5kbGVyc10gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5BbGxNaWRkbGV3YXJlKHJlcSwgcmVzLCB0aGlzLl9taWRkbGV3YXJlKTsgLy8gVGhyb3cgaWYgXCJlbmRcIiB3YXMgbm90IGNhbGxlZCwgb3IgaWYgdGhlIHJlc3BvbnNlIGhhcyBuZWl0aGVyIGEgcmVzdWx0XG4gICAgLy8gbm9yIGFuIGVycm9yLlxuXG4gICAgSlJQQ0VuZ2luZS5fY2hlY2tGb3JDb21wbGV0aW9uKHJlcSwgcmVzLCBpc0NvbXBsZXRlKTsgLy8gVGhlIHJldHVybiBoYW5kbGVycyBzaG91bGQgcnVuIGV2ZW4gaWYgYW4gZXJyb3Igd2FzIGVuY291bnRlcmVkIGR1cmluZ1xuICAgIC8vIG1pZGRsZXdhcmUgcHJvY2Vzc2luZy5cblxuXG4gICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpOyAvLyBOb3cgd2UgcmUtdGhyb3cgdGhlIG1pZGRsZXdhcmUgcHJvY2Vzc2luZyBlcnJvciwgaWYgYW55LCB0byBjYXRjaCBpdFxuICAgIC8vIGZ1cnRoZXIgdXAgdGhlIGNhbGwgY2hhaW4uXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG59XG5mdW5jdGlvbiBtZXJnZU1pZGRsZXdhcmUobWlkZGxld2FyZVN0YWNrKSB7XG4gIGNvbnN0IGVuZ2luZSA9IG5ldyBKUlBDRW5naW5lKCk7XG4gIG1pZGRsZXdhcmVTdGFjay5mb3JFYWNoKG1pZGRsZXdhcmUgPT4gZW5naW5lLnB1c2gobWlkZGxld2FyZSkpO1xuICByZXR1cm4gZW5naW5lLmFzTWlkZGxld2FyZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlRW5naW5lU3RyZWFtKG9wdHMpIHtcbiAgaWYgKCFvcHRzIHx8ICFvcHRzLmVuZ2luZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZW5naW5lIHBhcmFtZXRlciFcIik7XG4gIH1cblxuICBjb25zdCB7XG4gICAgZW5naW5lXG4gIH0gPSBvcHRzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5cbiAgbGV0IHN0cmVhbTtcblxuICBmdW5jdGlvbiByZWFkKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZShyZXEsIF9lbmNvZGluZywgY2IpIHtcbiAgICBlbmdpbmUuaGFuZGxlKHJlcSwgKF9lcnIsIHJlcykgPT4ge1xuICAgICAgc3RyZWFtLnB1c2gocmVzKTtcbiAgICB9KTtcbiAgICBjYigpO1xuICB9XG5cbiAgc3RyZWFtID0gbmV3IER1cGxleCh7XG4gICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICByZWFkLFxuICAgIHdyaXRlXG4gIH0pOyAvLyBmb3J3YXJkIG5vdGlmaWNhdGlvbnNcblxuICBpZiAoZW5naW5lLm9uKSB7XG4gICAgZW5naW5lLm9uKFwibm90aWZpY2F0aW9uXCIsIG1lc3NhZ2UgPT4ge1xuICAgICAgc3RyZWFtLnB1c2gobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyZWFtO1xufVxuXG5jbGFzcyBTdWJzdHJlYW0gZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIHBhcmVudCxcbiAgICAgIG5hbWVcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcih7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcGFyZW50XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbmFtZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG4gIC8qKlxuICAgKiBFeHBsaWNpdGx5IHNldHMgcmVhZCBvcGVyYXRpb25zIHRvIGEgbm8tb3AuXG4gICAqL1xuXG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZGF0YSBzaG91bGQgYmUgd3JpdHRlbiB0byB0aGlzIHdyaXRhYmxlIHN0cmVhbS5cbiAgICpcbiAgICogQHBhcmFtIGNodW5rIC0gQXJiaXRyYXJ5IG9iamVjdCB0byB3cml0ZVxuICAgKiBAcGFyYW0gZW5jb2RpbmcgLSBFbmNvZGluZyB0byB1c2Ugd2hlbiB3cml0aW5nIHBheWxvYWRcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gQ2FsbGVkIHdoZW4gd3JpdGluZyBpcyBjb21wbGV0ZSBvciBhbiBlcnJvciBvY2N1cnNcbiAgICovXG5cblxuICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9wYXJlbnQucHVzaCh7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgZGF0YTogY2h1bmtcbiAgICB9KTtcblxuICAgIGNhbGxiYWNrKCk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgSUdOT1JFX1NVQlNUUkVBTSA9IFN5bWJvbChcIklHTk9SRV9TVUJTVFJFQU1cIik7XG5jbGFzcyBPYmplY3RNdWx0aXBsZXggZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgc3VwZXIoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcHRzKSwge30sIHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWVcbiAgICB9KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3Vic3RyZWFtc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0U3RyZWFtXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9zdWJzdHJlYW1zID0ge307XG4gIH1cblxuICBjcmVhdGVTdHJlYW0obmFtZSkge1xuICAgIC8vIHZhbGlkYXRlIG5hbWVcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIG5hbWUgbXVzdCBub3QgYmUgZW1wdHlcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIFN1YnN0cmVhbSBmb3IgbmFtZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBhbHJlYWR5IGV4aXN0c1wiKSk7XG4gICAgfSAvLyBjcmVhdGUgc3Vic3RyZWFtXG5cblxuICAgIGNvbnN0IHN1YnN0cmVhbSA9IG5ldyBTdWJzdHJlYW0oe1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZVxuICAgIH0pO1xuICAgIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0gPSBzdWJzdHJlYW07IC8vIGxpc3RlbiBmb3IgcGFyZW50IHN0cmVhbSB0byBlbmRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG5cbiAgICBhbnlTdHJlYW1FbmQodGhpcywgX2Vycm9yID0+IHN1YnN0cmVhbS5kZXN0cm95KF9lcnJvciB8fCB1bmRlZmluZWQpKTtcbiAgICByZXR1cm4gc3Vic3RyZWFtO1xuICB9IC8vIGlnbm9yZSBzdHJlYW1zIChkb250IGRpc3BsYXkgb3JwaGFuZWQgZGF0YSB3YXJuaW5nKVxuXG5cbiAgaWdub3JlU3RyZWFtKG5hbWUpIHtcbiAgICAvLyB2YWxpZGF0ZSBuYW1lXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBuYW1lIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdWJzdHJlYW1zW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBTdWJzdHJlYW0gZm9yIG5hbWUgXFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIgYWxyZWFkeSBleGlzdHNcIikpO1xuICAgIH0gLy8gc2V0XG5cblxuICAgIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0gPSBJR05PUkVfU1VCU1RSRUFNO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIF93cml0ZShjaHVuaywgX2VuY29kaW5nLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBkYXRhXG4gICAgfSA9IGNodW5rO1xuXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiT2JqZWN0TXVsdGlwbGV4IC0gbWFsZm9ybWVkIGNodW5rIHdpdGhvdXQgbmFtZSBcXFwiXCIuY29uY2F0KGNodW5rLCBcIlxcXCJcIikpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfSAvLyBnZXQgY29ycmVzcG9uZGluZyBzdWJzdHJlYW1cblxuXG4gICAgY29uc3Qgc3Vic3RyZWFtID0gdGhpcy5fc3Vic3RyZWFtc1tuYW1lXTtcblxuICAgIGlmICghc3Vic3RyZWFtKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiT2JqZWN0TXVsdGlwbGV4IC0gb3JwaGFuZWQgZGF0YSBmb3Igc3RyZWFtIFxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiXCIpKTtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0gLy8gcHVzaCBkYXRhIGludG8gc3Vic3RyZWFtXG5cblxuICAgIGlmIChzdWJzdHJlYW0gIT09IElHTk9SRV9TVUJTVFJFQU0pIHtcbiAgICAgIHN1YnN0cmVhbS5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG5cbn0gLy8gdXRpbFxuXG5mdW5jdGlvbiBhbnlTdHJlYW1FbmQoc3RyZWFtLCBfY2IpIHtcbiAgY29uc3QgY2IgPSBvbmNlKF9jYik7XG4gIGVvcyhzdHJlYW0sIHtcbiAgICByZWFkYWJsZTogZmFsc2VcbiAgfSwgY2IpO1xuICBlb3Moc3RyZWFtLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0sIGNiKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBNdWx0aXBsZXgoc3RyZWFtKSB7XG4gIGNvbnN0IG11eCA9IG5ldyBPYmplY3RNdWx0aXBsZXgoKTtcblxuICBtdXguZ2V0U3RyZWFtID0gZnVuY3Rpb24gc3RyZWFtSGVscGVyKG5hbWUpIHtcbiAgICBpZiAodGhpcy5fc3Vic3RyZWFtc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlU3RyZWFtKG5hbWUpO1xuICB9O1xuXG4gIHB1bXAoc3RyZWFtLCBtdXgsIHN0cmVhbSwgZXJyID0+IHtcbiAgICBpZiAoZXJyKSB3aW5kb3cuY29uc29sZS5lcnJvcihlcnIpO1xuICB9KTtcbiAgcmV0dXJuIG11eDtcbn1cblxuY2xhc3MgUG9zdE1lc3NhZ2VTdHJlYW0gZXh0ZW5kcyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0ge1xuICBfcG9zdE1lc3NhZ2UoZGF0YSkge1xuICAgIGxldCBvcmlnaW5Db25zdHJhaW50ID0gdGhpcy5fdGFyZ2V0T3JpZ2luO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCBkYXRhT2JqID0gZGF0YTtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhT2JqLmRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3QgZGF0YU9iakRhdGEgPSBkYXRhT2JqLmRhdGE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YU9iakRhdGEucGFyYW1zKSAmJiBkYXRhT2JqRGF0YS5wYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGRhdGFPYmpEYXRhUGFyYW0gPSBkYXRhT2JqRGF0YS5wYXJhbXNbMF07XG5cbiAgICAgICAgICBpZiAoZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luKSB7XG4gICAgICAgICAgICBvcmlnaW5Db25zdHJhaW50ID0gZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luO1xuICAgICAgICAgIH0gLy8gYWRkIGEgY29uc3RyYWludCBmb3IgdGhlIHJlc3BvbnNlXG5cblxuICAgICAgICAgIGRhdGFPYmpEYXRhUGFyYW0uX29yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgdGFyZ2V0OiB0aGlzLl90YXJnZXQsXG4gICAgICBkYXRhXG4gICAgfSwgb3JpZ2luQ29uc3RyYWludCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0sIElHTk9SRV9TVUJTVFJFQU0sIEpSUENFbmdpbmUsIE9iamVjdE11bHRpcGxleCwgUG9zdE1lc3NhZ2VTdHJlYW0sIFNhZmVFdmVudEVtaXR0ZXIsIFNlcmlhbGl6YWJsZUVycm9yLCBTdWJzdHJlYW0sIGNyZWF0ZUFzeW5jTWlkZGxld2FyZSwgY3JlYXRlRW5naW5lU3RyZWFtLCBjcmVhdGVFcnJvck1pZGRsZXdhcmUsIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlLCBjcmVhdGVMb2dnZXJNaWRkbGV3YXJlLCBjcmVhdGVTY2FmZm9sZE1pZGRsZXdhcmUsIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUsIGdldFJwY1Byb21pc2VDYWxsYmFjaywgbWVyZ2VNaWRkbGV3YXJlLCBzZXR1cE11bHRpcGxleCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3BlbmxvZ2luSnJwYy5lc20uanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcml2YXRlLCBnZXRQdWJsaWMsIGRlY3J5cHQgfSBmcm9tICdAdG9ydXNsYWJzL2VjY3J5cHRvJztcbmltcG9ydCB7IHBvc3QsIGdlbmVyYXRlSnNvblJQQ09iamVjdCwgc2V0QVBJS2V5LCBzZXRFbWJlZEhvc3QsIGdldCB9IGZyb20gJ0B0b3J1c2xhYnMvaHR0cC1oZWxwZXJzJztcbmltcG9ydCBCTiBmcm9tICdibi5qcyc7XG5pbXBvcnQgeyBlYyB9IGZyb20gJ2VsbGlwdGljJztcbmltcG9ydCBKc29uU3RyaW5naWZ5IGZyb20gJ2pzb24tc3RhYmxlLXN0cmluZ2lmeSc7XG5pbXBvcnQgeyB0b0NoZWNrc3VtQWRkcmVzcyB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuaW1wb3J0IGxvZ2xldmVsIGZyb20gJ2xvZ2xldmVsJztcbmltcG9ydCBjcmVhdGVLZWNjYWtIYXNoIGZyb20gJ2tlY2Nhayc7XG5cbmNvbnN0IGxvZyA9IGxvZ2xldmVsLmdldExvZ2dlcihcInRvcnVzLmpzXCIpO1xubG9nLmRpc2FibGVBbGwoKTtcblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5jbGFzcyBTb21lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgZXJyb3JzLFxuICAgICAgcmVzcG9uc2VzLFxuICAgICAgcHJlZGljYXRlXG4gICAgfSA9IF9yZWY7XG4gICAgc3VwZXIoXCJVbmFibGUgdG8gcmVzb2x2ZSBlbm91Z2ggcHJvbWlzZXMuXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXJyb3JzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZXNwb25zZXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByZWRpY2F0ZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5yZXNwb25zZXMgPSByZXNwb25zZXM7XG4gICAgdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gIH1cblxufVxuY29uc3QgU29tZSA9IChwcm9taXNlcywgcHJlZGljYXRlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGxldCBmaW5pc2hlZENvdW50ID0gMDtcbiAgY29uc3Qgc2hhcmVkU3RhdGUgPSB7XG4gICAgcmVzb2x2ZWQ6IGZhbHNlXG4gIH07XG4gIGNvbnN0IGVycm9yQXJyID0gbmV3IEFycmF5KHByb21pc2VzLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpO1xuICBjb25zdCByZXN1bHRBcnIgPSBuZXcgQXJyYXkocHJvbWlzZXMubGVuZ3RoKS5maWxsKHVuZGVmaW5lZCk7XG4gIGxldCBwcmVkaWNhdGVFcnJvcjtcbiAgcmV0dXJuIHByb21pc2VzLmZvckVhY2goKHgsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHgudGhlbihyZXNwID0+IHtcbiAgICAgIHJlc3VsdEFycltpbmRleF0gPSByZXNwO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBlcnJvckFycltpbmRleF0gPSBlcnJvcjtcbiAgICB9KSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9uby1yZXR1cm4taW4tZmluYWxseVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGlmIChzaGFyZWRTdGF0ZS5yZXNvbHZlZCkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHByZWRpY2F0ZShyZXN1bHRBcnIuc2xpY2UoMCksIHNoYXJlZFN0YXRlKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzaGFyZWRTdGF0ZS5yZXNvbHZlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIC8vIGxvZyBvbmx5IHRoZSBsYXN0IHByZWRpY2F0ZSBlcnJvclxuICAgICAgICBwcmVkaWNhdGVFcnJvciA9IGVycm9yO1xuICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGZpbmlzaGVkQ291bnQgKz0gMTtcblxuICAgICAgICBpZiAoZmluaXNoZWRDb3VudCA9PT0gcHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0gT2JqZWN0LnZhbHVlcyhyZXN1bHRBcnIucmVkdWNlKChhY2MsIHopID0+IHtcbiAgICAgICAgICAgIGlmICh6KSB7XG4gICAgICAgICAgICAgIHZhciBfZXJyb3IkZGF0YTtcblxuICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgfSA9IHo7XG5cbiAgICAgICAgICAgICAgaWYgKChlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9lcnJvciRkYXRhID0gZXJyb3IuZGF0YSkgPT09IG51bGwgfHwgX2Vycm9yJGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lcnJvciRkYXRhLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmRhdGEuc3RhcnRzV2l0aChcIkVycm9yIG9jY3VycmVkIHdoaWxlIHZlcmlmeWluZyBwYXJhbXNcIikpIGFjY1tpZF0gPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZXJyb3IuZGF0YSk7ZWxzZSBhY2NbaWRdID0gZXJyb3IuZGF0YTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KSk7XG5cbiAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEZvcm1hdC1hYmxlIGVycm9yc1xuICAgICAgICAgICAgY29uc3QgbXNnID0gZXJyb3JzLmxlbmd0aCA+IDEgPyBgXFxuJHtlcnJvcnMubWFwKGl0ID0+IGDigKIgJHtpdH1gKS5qb2luKFwiXFxuXCIpfWAgOiBlcnJvcnNbMF07XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKG1zZykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgX3ByZWRpY2F0ZUVycm9yO1xuXG4gICAgICAgICAgICByZWplY3QobmV3IFNvbWVFcnJvcih7XG4gICAgICAgICAgICAgIGVycm9yczogZXJyb3JBcnIsXG4gICAgICAgICAgICAgIHJlc3BvbnNlczogcmVzdWx0QXJyLFxuICAgICAgICAgICAgICBwcmVkaWNhdGU6ICgoX3ByZWRpY2F0ZUVycm9yID0gcHJlZGljYXRlRXJyb3IpID09PSBudWxsIHx8IF9wcmVkaWNhdGVFcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ByZWRpY2F0ZUVycm9yLm1lc3NhZ2UpIHx8IHByZWRpY2F0ZUVycm9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY2xhc3MgR2V0T3JTZXROb25jZUVycm9yIGV4dGVuZHMgRXJyb3Ige31cbmNvbnN0IGtDb21iaW5hdGlvbnMgPSAocywgaykgPT4ge1xuICBsZXQgc2V0ID0gcztcblxuICBpZiAodHlwZW9mIHNldCA9PT0gXCJudW1iZXJcIikge1xuICAgIHNldCA9IEFycmF5LmZyb20oe1xuICAgICAgbGVuZ3RoOiBzZXRcbiAgICB9LCAoXywgaSkgPT4gaSk7XG4gIH1cblxuICBpZiAoayA+IHNldC5sZW5ndGggfHwgayA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgaWYgKGsgPT09IHNldC5sZW5ndGgpIHtcbiAgICByZXR1cm4gW3NldF07XG4gIH1cblxuICBpZiAoayA9PT0gMSkge1xuICAgIHJldHVybiBzZXQucmVkdWNlKChhY2MsIGN1cikgPT4gWy4uLmFjYywgW2N1cl1dLCBbXSk7XG4gIH1cblxuICBjb25zdCBjb21icyA9IFtdO1xuICBsZXQgdGFpbENvbWJzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2V0Lmxlbmd0aCAtIGsgKyAxOyBpICs9IDEpIHtcbiAgICB0YWlsQ29tYnMgPSBrQ29tYmluYXRpb25zKHNldC5zbGljZShpICsgMSksIGsgLSAxKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFpbENvbWJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb21icy5wdXNoKFtzZXRbaV0sIC4uLnRhaWxDb21ic1tqXV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21icztcbn07XG5jb25zdCB0aHJlc2hvbGRTYW1lID0gKGFyciwgdCkgPT4ge1xuICBjb25zdCBoYXNoTWFwID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzdHIgPSBKc29uU3RyaW5naWZ5KGFycltpXSk7XG4gICAgaGFzaE1hcFtzdHJdID0gaGFzaE1hcFtzdHJdID8gaGFzaE1hcFtzdHJdICsgMSA6IDE7XG5cbiAgICBpZiAoaGFzaE1hcFtzdHJdID09PSB0KSB7XG4gICAgICByZXR1cm4gYXJyW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3Qga2V5TG9va3VwID0gYXN5bmMgKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQpID0+IHtcbiAgY29uc3QgbG9va3VwUHJvbWlzZXMgPSBlbmRwb2ludHMubWFwKHggPT4gcG9zdCh4LCBnZW5lcmF0ZUpzb25SUENPYmplY3QoXCJWZXJpZmllckxvb2t1cFJlcXVlc3RcIiwge1xuICAgIHZlcmlmaWVyLFxuICAgIHZlcmlmaWVyX2lkOiB2ZXJpZmllcklkLnRvU3RyaW5nKClcbiAgfSkpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJsb29rdXAgcmVxdWVzdCBmYWlsZWRcIiwgZXJyKSkpO1xuICByZXR1cm4gU29tZShsb29rdXBQcm9taXNlcywgbG9va3VwUmVzdWx0cyA9PiB7XG4gICAgY29uc3QgbG9va3VwU2hhcmVzID0gbG9va3VwUmVzdWx0cy5maWx0ZXIoeDEgPT4geDEpO1xuICAgIGNvbnN0IGVycm9yUmVzdWx0ID0gdGhyZXNob2xkU2FtZShsb29rdXBTaGFyZXMubWFwKHgyID0+IHgyICYmIHgyLmVycm9yKSwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7XG4gICAgY29uc3Qga2V5UmVzdWx0ID0gdGhyZXNob2xkU2FtZShsb29rdXBTaGFyZXMubWFwKHgzID0+IHgzICYmIHgzLnJlc3VsdCksIH5+KGVuZHBvaW50cy5sZW5ndGggLyAyKSArIDEpO1xuXG4gICAgaWYgKGtleVJlc3VsdCB8fCBlcnJvclJlc3VsdCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgIGtleVJlc3VsdCxcbiAgICAgICAgZXJyb3JSZXN1bHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYGludmFsaWQgcmVzdWx0cyAke0pTT04uc3RyaW5naWZ5KGxvb2t1cFJlc3VsdHMpfWApKTtcbiAgfSk7XG59O1xuY29uc3Qgd2FpdEtleUxvb2t1cCA9IChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkLCB0aW1lb3V0KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gIH0sIHRpbWVvdXQpO1xufSk7XG5jb25zdCBrZXlBc3NpZ24gPSBhc3luYyBfcmVmID0+IHtcbiAgbGV0IHtcbiAgICBlbmRwb2ludHMsXG4gICAgdG9ydXNOb2RlUHVicyxcbiAgICBsYXN0UG9pbnQsXG4gICAgZmlyc3RQb2ludCxcbiAgICB2ZXJpZmllcixcbiAgICB2ZXJpZmllcklkLFxuICAgIHNpZ25lckhvc3QsXG4gICAgbmV0d29ya1xuICB9ID0gX3JlZjtcbiAgbGV0IG5vZGVOdW07XG4gIGxldCBpbml0aWFsUG9pbnQ7XG5cbiAgaWYgKGxhc3RQb2ludCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbm9kZU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZHBvaW50cy5sZW5ndGgpO1xuICAgIGluaXRpYWxQb2ludCA9IG5vZGVOdW07XG4gIH0gZWxzZSB7XG4gICAgbm9kZU51bSA9IGxhc3RQb2ludCAlIGVuZHBvaW50cy5sZW5ndGg7XG4gIH1cblxuICBpZiAobm9kZU51bSA9PT0gZmlyc3RQb2ludCkgdGhyb3cgbmV3IEVycm9yKFwiTG9vcGVkIHRocm91Z2ggYWxsXCIpO1xuICBpZiAoZmlyc3RQb2ludCAhPT0gdW5kZWZpbmVkKSBpbml0aWFsUG9pbnQgPSBmaXJzdFBvaW50O1xuICBjb25zdCBkYXRhID0gZ2VuZXJhdGVKc29uUlBDT2JqZWN0KFwiS2V5QXNzaWduXCIsIHtcbiAgICB2ZXJpZmllcixcbiAgICB2ZXJpZmllcl9pZDogdmVyaWZpZXJJZC50b1N0cmluZygpXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2lnbmVkRGF0YSA9IGF3YWl0IHBvc3Qoc2lnbmVySG9zdCwgZGF0YSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBwdWJLZXlYOiB0b3J1c05vZGVQdWJzW25vZGVOdW1dLlgsXG4gICAgICAgIHB1YktleVk6IHRvcnVzTm9kZVB1YnNbbm9kZU51bV0uWSxcbiAgICAgICAgbmV0d29ya1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCBwb3N0KGVuZHBvaW50c1tub2RlTnVtXSwgX29iamVjdFNwcmVhZCQxKF9vYmplY3RTcHJlYWQkMSh7fSwgZGF0YSksIHNpZ25lZERhdGEpLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgICB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nLmVycm9yKGVycm9yKTtcbiAgICBjb25zdCBhY2NlcHRlZEVycm9yTXNncyA9IFsvLyBTbG93IG5vZGVcbiAgICBcIlRpbWVkIG91dFwiLCAvLyBIYXBwZW5zIHdoZW4gdGhlIG5vZGUgaXMgbm90IHJlYWNoYWJsZSAoZG5zIGlzc3VlIGV0YylcbiAgICBcIlR5cGVFcnJvcjogRmFpbGVkIHRvIGZldGNoXCIsIFwiVHlwZUVycm9yOiBjYW5jZWxsZWRcIiwgXCJUeXBlRXJyb3I6IE5ldHdvcmtFcnJvciB3aGVuIGF0dGVtcHRpbmcgdG8gZmV0Y2ggcmVzb3VyY2UuXCIgLy8gRmlyZWZveFxuICAgIF07XG4gICAgaWYgKGFjY2VwdGVkRXJyb3JNc2dzLmluY2x1ZGVzKGVycm9yLm1lc3NhZ2UpKSByZXR1cm4ga2V5QXNzaWduKHtcbiAgICAgIGVuZHBvaW50cyxcbiAgICAgIHRvcnVzTm9kZVB1YnMsXG4gICAgICBsYXN0UG9pbnQ6IG5vZGVOdW0gKyAxLFxuICAgICAgZmlyc3RQb2ludDogaW5pdGlhbFBvaW50LFxuICAgICAgdmVyaWZpZXIsXG4gICAgICB2ZXJpZmllcklkLFxuICAgICAgc2lnbmVySG9zdCxcbiAgICAgIG5ldHdvcmtcbiAgICB9KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNvcnJ5LCB0aGUgVG9ydXMgTmV0d29yayB0aGF0IHBvd2VycyBXZWIzQXV0aCBpcyBjdXJyZW50bHkgdmVyeSBidXN5LlxuICAgIFdlIHdpbGwgZ2VuZXJhdGUgeW91ciBrZXkgaW4gdGltZS4gUGxzIHRyeSBhZ2FpbiBsYXRlci4gXFxuXG4gICAgJHtlcnJvci5tZXNzYWdlIHx8IFwiXCJ9YCk7XG4gIH1cbn07XG5mdW5jdGlvbiBrZWNjYWsyNTYoYSkge1xuICBjb25zdCBoYXNoID0gY3JlYXRlS2VjY2FrSGFzaChcImtlY2NhazI1NlwiKS51cGRhdGUoYSkuZGlnZXN0KCkudG9TdHJpbmcoXCJoZXhcIik7XG4gIHJldHVybiBgMHgke2hhc2h9YDtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbi8vIG9mIFRvcnVzIG5vZGVzIHRvIGhhbmRsZSBtYWxpY2lvdXMgbm9kZSByZXNwb25zZXNcblxuY2xhc3MgVG9ydXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQge1xuICAgICAgZW5hYmxlT25lS2V5ID0gZmFsc2UsXG4gICAgICBtZXRhZGF0YUhvc3QgPSBcImh0dHBzOi8vbWV0YWRhdGEudG9yLnVzXCIsXG4gICAgICBhbGxvd0hvc3QgPSBcImh0dHBzOi8vc2lnbmVyLnRvci51cy9hcGkvYWxsb3dcIixcbiAgICAgIHNpZ25lckhvc3QgPSBcImh0dHBzOi8vc2lnbmVyLnRvci51cy9hcGkvc2lnblwiLFxuICAgICAgc2VydmVyVGltZU9mZnNldCA9IDAsXG4gICAgICBuZXR3b3JrID0gXCJtYWlubmV0XCJcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhSG9zdFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxsb3dIb3N0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZXJ2ZXJUaW1lT2Zmc2V0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmFibGVPbmVLZXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNpZ25lckhvc3RcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5ldHdvcmtcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVjXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLmVjID0gbmV3IGVjKFwic2VjcDI1NmsxXCIpO1xuICAgIHRoaXMubWV0YWRhdGFIb3N0ID0gbWV0YWRhdGFIb3N0O1xuICAgIHRoaXMuYWxsb3dIb3N0ID0gYWxsb3dIb3N0O1xuICAgIHRoaXMuZW5hYmxlT25lS2V5ID0gZW5hYmxlT25lS2V5O1xuICAgIHRoaXMuc2VydmVyVGltZU9mZnNldCA9IHNlcnZlclRpbWVPZmZzZXQgfHwgMDsgLy8gbXNcblxuICAgIHRoaXMuc2lnbmVySG9zdCA9IHNpZ25lckhvc3Q7XG4gICAgdGhpcy5uZXR3b3JrID0gbmV0d29yaztcbiAgfVxuXG4gIHN0YXRpYyBlbmFibGVMb2dnaW5nKCkge1xuICAgIGxldCB2ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuICAgIGlmICh2KSBsb2cuZW5hYmxlQWxsKCk7ZWxzZSBsb2cuZGlzYWJsZUFsbCgpO1xuICB9XG5cbiAgc3RhdGljIHNldEFQSUtleShhcGlLZXkpIHtcbiAgICBzZXRBUElLZXkoYXBpS2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRFbWJlZEhvc3QoZW1iZWRIb3N0KSB7XG4gICAgc2V0RW1iZWRIb3N0KGVtYmVkSG9zdCk7XG4gIH1cblxuICBzdGF0aWMgaXNHZXRPclNldE5vbmNlRXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciBpbnN0YW5jZW9mIEdldE9yU2V0Tm9uY2VFcnJvcjtcbiAgfVxuICAvKipcbiAgICogTm90ZTogdXNlIHRoaXMgZnVuY3Rpb24gb25seSBmb3Igb3BlbmxvZ2luIHRrZXkgYWNjb3VudCBsb29rdXBzLlxuICAgKi9cblxuXG4gIGFzeW5jIGdldFVzZXJUeXBlQW5kQWRkcmVzcyhlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgdmVyaWZpZXIsXG4gICAgICB2ZXJpZmllcklkXG4gICAgfSA9IF9yZWY7XG4gICAgbGV0IGRvZXNLZXlBc3NpZ24gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIGtleVJlc3VsdCxcbiAgICAgIGVycm9yUmVzdWx0XG4gICAgfSA9IChhd2FpdCBrZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCkpIHx8IHt9O1xuICAgIGxldCBpc05ld0tleSA9IGZhbHNlO1xuICAgIGxldCBmaW5hbEtleVJlc3VsdDtcblxuICAgIGlmIChlcnJvclJlc3VsdCAmJiBKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCkuaW5jbHVkZXMoXCJWZXJpZmllciArIFZlcmlmaWVySUQgaGFzIG5vdCB5ZXQgYmVlbiBhc3NpZ25lZFwiKSkge1xuICAgICAgaWYgKCFkb2VzS2V5QXNzaWduKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBrZXlBc3NpZ24oe1xuICAgICAgICBlbmRwb2ludHMsXG4gICAgICAgIHRvcnVzTm9kZVB1YnMsXG4gICAgICAgIGxhc3RQb2ludDogdW5kZWZpbmVkLFxuICAgICAgICBmaXJzdFBvaW50OiB1bmRlZmluZWQsXG4gICAgICAgIHZlcmlmaWVyLFxuICAgICAgICB2ZXJpZmllcklkLFxuICAgICAgICBzaWduZXJIb3N0OiB0aGlzLnNpZ25lckhvc3QsXG4gICAgICAgIG5ldHdvcms6IHRoaXMubmV0d29ya1xuICAgICAgfSk7XG4gICAgICBjb25zdCBhc3NpZ25SZXN1bHQgPSBhd2FpdCB3YWl0S2V5TG9va3VwKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQsIDEwMDApO1xuICAgICAgZmluYWxLZXlSZXN1bHQgPSBhc3NpZ25SZXN1bHQgPT09IG51bGwgfHwgYXNzaWduUmVzdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhc3NpZ25SZXN1bHQua2V5UmVzdWx0O1xuICAgICAgaXNOZXdLZXkgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoa2V5UmVzdWx0KSB7XG4gICAgICBmaW5hbEtleVJlc3VsdCA9IGtleVJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpcnN0IGxvb2t1cCAke0pTT04uc3RyaW5naWZ5KGtleVJlc3VsdCB8fCB7fSl9LCAke0pTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0IHx8IHt9KX1gKTtcbiAgICB9XG5cbiAgICBpZiAoZmluYWxLZXlSZXN1bHQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcHViX2tleV9YOiBYLFxuICAgICAgICBwdWJfa2V5X1k6IFlcbiAgICAgIH0gPSBmaW5hbEtleVJlc3VsdC5rZXlzWzBdO1xuICAgICAgbGV0IG5vbmNlUmVzdWx0O1xuICAgICAgbGV0IG5vbmNlO1xuICAgICAgbGV0IG1vZGlmaWVkUHViS2V5O1xuXG4gICAgICB0cnkge1xuICAgICAgICBub25jZVJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0T3JTZXROb25jZShYLCBZLCB1bmRlZmluZWQsICFpc05ld0tleSk7XG4gICAgICAgIG5vbmNlID0gbmV3IEJOKG5vbmNlUmVzdWx0Lm5vbmNlIHx8IFwiMFwiLCAxNik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEdldE9yU2V0Tm9uY2VFcnJvcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSB7XG4gICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICB4OiBYLFxuICAgICAgICAgIHk6IFlcbiAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVByaXZhdGUobm9uY2UudG9TdHJpbmcoMTYpKS5nZXRQdWJsaWMoKSk7XG4gICAgICB9IGVsc2UgaWYgKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjJcIikge1xuICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgeDogWCxcbiAgICAgICAgICB5OiBZXG4gICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgIHg6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLngsXG4gICAgICAgICAgeTogbm9uY2VSZXN1bHQucHViTm9uY2UueVxuICAgICAgICB9KS5nZXRQdWJsaWMoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRPclNldE5vbmNlIHNob3VsZCBhbHdheXMgcmV0dXJuIHR5cGVPZlVzZXIuXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaW5hbFggPSBtb2RpZmllZFB1YktleS5nZXRYKCkudG9TdHJpbmcoMTYpO1xuICAgICAgY29uc3QgZmluYWxZID0gbW9kaWZpZWRQdWJLZXkuZ2V0WSgpLnRvU3RyaW5nKDE2KTtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLmdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXkobW9kaWZpZWRQdWJLZXkuZ2V0WCgpLCBtb2RpZmllZFB1YktleS5nZXRZKCkpO1xuICAgICAgaWYgKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjFcIikgcmV0dXJuIHtcbiAgICAgICAgdHlwZU9mVXNlcjogbm9uY2VSZXN1bHQudHlwZU9mVXNlcixcbiAgICAgICAgbm9uY2UsXG4gICAgICAgIFg6IGZpbmFsWCxcbiAgICAgICAgWTogZmluYWxZLFxuICAgICAgICBhZGRyZXNzXG4gICAgICB9O2Vsc2UgaWYgKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjJcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGVPZlVzZXI6IG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIsXG4gICAgICAgICAgbm9uY2UsXG4gICAgICAgICAgcHViTm9uY2U6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLFxuICAgICAgICAgIHVwZ3JhZGVkOiBub25jZVJlc3VsdC51cGdyYWRlZCxcbiAgICAgICAgICBYOiBmaW5hbFgsXG4gICAgICAgICAgWTogZmluYWxZLFxuICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYG5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmluYWwgbG9va3VwICR7SlNPTi5zdHJpbmdpZnkoa2V5UmVzdWx0IHx8IHt9KX0sICR7SlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQgfHwge30pfWApO1xuICB9XG5cbiAgYXN5bmMgc2V0Q3VzdG9tS2V5KF9yZWYyKSB7XG4gICAgbGV0IHtcbiAgICAgIHByaXZLZXlIZXgsXG4gICAgICBtZXRhZGF0YU5vbmNlLFxuICAgICAgdG9ydXNLZXlIZXgsXG4gICAgICBjdXN0b21LZXlIZXhcbiAgICB9ID0gX3JlZjI7XG4gICAgbGV0IHRvcnVzS2V5O1xuXG4gICAgaWYgKHRvcnVzS2V5SGV4KSB7XG4gICAgICB0b3J1c0tleSA9IG5ldyBCTih0b3J1c0tleUhleCwgMTYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcml2S2V5ID0gbmV3IEJOKHByaXZLZXlIZXgsIDE2KTtcbiAgICAgIHRvcnVzS2V5ID0gcHJpdktleS5zdWIobWV0YWRhdGFOb25jZSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbUtleSA9IG5ldyBCTihjdXN0b21LZXlIZXgsIDE2KTtcbiAgICBjb25zdCBuZXdNZXRhZGF0YU5vbmNlID0gY3VzdG9tS2V5LnN1Yih0b3J1c0tleSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobmV3TWV0YWRhdGFOb25jZS50b1N0cmluZygxNiksIHRvcnVzS2V5KTtcbiAgICBhd2FpdCB0aGlzLnNldE1ldGFkYXRhKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgcmV0cmlldmVTaGFyZXMoZW5kcG9pbnRzLCBpbmRleGVzLCB2ZXJpZmllciwgdmVyaWZpZXJQYXJhbXMsIGlkVG9rZW4pIHtcbiAgICBsZXQgZXh0cmFQYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IHt9O1xuICAgIGNvbnN0IHByb21pc2VBcnIgPSBbXTtcbiAgICBhd2FpdCBnZXQodGhpcy5hbGxvd0hvc3QsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgdmVyaWZpZXIsXG4gICAgICAgIHZlcmlmaWVyX2lkOiB2ZXJpZmllclBhcmFtcy52ZXJpZmllcl9pZCxcbiAgICAgICAgbmV0d29yazogdGhpcy5uZXR3b3JrXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgfSk7XG4gICAgLypcbiAgICAgIENvbW1pdG1lbnRSZXF1ZXN0UGFyYW1zIHN0cnVjdCB7XG4gICAgICAgIE1lc3NhZ2VQcmVmaXggICAgICBzdHJpbmcgYGpzb246XCJtZXNzYWdlcHJlZml4XCJgXG4gICAgICAgIFRva2VuQ29tbWl0bWVudCAgICBzdHJpbmcgYGpzb246XCJ0b2tlbmNvbW1pdG1lbnRcImBcbiAgICAgICAgVGVtcFB1YlggICAgICAgICAgIHN0cmluZyBganNvbjpcInRlbXBwdWJ4XCJgXG4gICAgICAgIFRlbXBQdWJZICAgICAgICAgICBzdHJpbmcgYGpzb246XCJ0ZW1wcHVieVwiYFxuICAgICAgICBWZXJpZmllcklkZW50aWZpZXIgc3RyaW5nIGBqc29uOlwidmVyaWZpZXJpZGVudGlmaWVyXCJgXG4gICAgICB9XG4gICAgICAqL1xuICAgIC8vIGdlbmVyYXRlIHRlbXBvcmFyeSBwcml2YXRlIGFuZCBwdWJsaWMga2V5IHRoYXQgaXMgdXNlZCB0byBzZWN1cmUgcmVjZWl2ZSBzaGFyZXNcblxuICAgIGNvbnN0IHRtcEtleSA9IGdlbmVyYXRlUHJpdmF0ZSgpO1xuICAgIGNvbnN0IHB1YktleSA9IGdldFB1YmxpYyh0bXBLZXkpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgIGNvbnN0IHB1YktleVggPSBwdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgIGNvbnN0IHB1YktleVkgPSBwdWJLZXkuc2xpY2UoNjYpO1xuICAgIGNvbnN0IHRva2VuQ29tbWl0bWVudCA9IGtlY2NhazI1NihpZFRva2VuKTsgLy8gbWFrZSBjb21taXRtZW50IHJlcXVlc3RzIHRvIGVuZHBvaW50c1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmRwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHAgPSBwb3N0KGVuZHBvaW50c1tpXSwgZ2VuZXJhdGVKc29uUlBDT2JqZWN0KFwiQ29tbWl0bWVudFJlcXVlc3RcIiwge1xuICAgICAgICBtZXNzYWdlcHJlZml4OiBcIm11ZzAwXCIsXG4gICAgICAgIHRva2VuY29tbWl0bWVudDogdG9rZW5Db21taXRtZW50LnNsaWNlKDIpLFxuICAgICAgICB0ZW1wcHVieDogcHViS2V5WCxcbiAgICAgICAgdGVtcHB1Ynk6IHB1YktleVksXG4gICAgICAgIHZlcmlmaWVyaWRlbnRpZmllcjogdmVyaWZpZXJcbiAgICAgIH0pKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBsb2cuZXJyb3IoXCJjb21taXRtZW50XCIsIGVycik7XG4gICAgICB9KTtcbiAgICAgIHByb21pc2VBcnIucHVzaChwKTtcbiAgICB9XG4gICAgLypcbiAgICAgIFNoYXJlUmVxdWVzdFBhcmFtcyBzdHJ1Y3Qge1xuICAgICAgICBJdGVtIFtdYmlqc29uLlJhd01lc3NhZ2UgYGpzb246XCJpdGVtXCJgXG4gICAgICB9XG4gICAgICBTaGFyZVJlcXVlc3RJdGVtIHN0cnVjdCB7XG4gICAgICAgIElEVG9rZW4gICAgICAgICAgICBzdHJpbmcgICAgICAgICAgYGpzb246XCJpZHRva2VuXCJgXG4gICAgICAgIE5vZGVTaWduYXR1cmVzICAgICBbXU5vZGVTaWduYXR1cmUgYGpzb246XCJub2Rlc2lnbmF0dXJlc1wiYFxuICAgICAgICBWZXJpZmllcklkZW50aWZpZXIgc3RyaW5nICAgICAgICAgIGBqc29uOlwidmVyaWZpZXJpZGVudGlmaWVyXCJgXG4gICAgICB9XG4gICAgICBOb2RlU2lnbmF0dXJlIHN0cnVjdCB7XG4gICAgICAgIFNpZ25hdHVyZSAgIHN0cmluZ1xuICAgICAgICBEYXRhICAgICAgICBzdHJpbmdcbiAgICAgICAgTm9kZVB1YktleVggc3RyaW5nXG4gICAgICAgIE5vZGVQdWJLZXlZIHN0cmluZ1xuICAgICAgfVxuICAgICAgQ29tbWl0bWVudFJlcXVlc3RSZXN1bHQgc3RydWN0IHtcbiAgICAgICAgU2lnbmF0dXJlIHN0cmluZyBganNvbjpcInNpZ25hdHVyZVwiYFxuICAgICAgICBEYXRhICAgICAgc3RyaW5nIGBqc29uOlwiZGF0YVwiYFxuICAgICAgICBOb2RlUHViWCAgc3RyaW5nIGBqc29uOlwibm9kZXB1YnhcImBcbiAgICAgICAgTm9kZVB1YlkgIHN0cmluZyBganNvbjpcIm5vZGVwdWJ5XCJgXG4gICAgICB9XG4gICAgICAqL1xuICAgIC8vIHNlbmQgc2hhcmUgcmVxdWVzdCBvbmNlIGsgKyB0IG51bWJlciBvZiBjb21taXRtZW50IHJlcXVlc3RzIGhhdmUgY29tcGxldGVkXG5cblxuICAgIHJldHVybiBTb21lKHByb21pc2VBcnIsIHJlc3VsdEFyciA9PiB7XG4gICAgICBjb25zdCBjb21wbGV0ZWRSZXF1ZXN0cyA9IHJlc3VsdEFyci5maWx0ZXIoeCA9PiB7XG4gICAgICAgIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh4LmVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbXBsZXRlZFJlcXVlc3RzLmxlbmd0aCA+PSB+fihlbmRwb2ludHMubGVuZ3RoIC8gNCkgKiAzICsgMSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdEFycik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYGludmFsaWQgJHtKU09OLnN0cmluZ2lmeShyZXN1bHRBcnIpfWApKTtcbiAgICB9KS50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICBjb25zdCBwcm9taXNlQXJyUmVxdWVzdCA9IFtdO1xuICAgICAgY29uc3Qgbm9kZVNpZ3MgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlc1tpXSkgbm9kZVNpZ3MucHVzaChyZXNwb25zZXNbaV0ucmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmRwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tbmVzdGluZ1xuICAgICAgICBjb25zdCBwID0gcG9zdChlbmRwb2ludHNbaV0sIGdlbmVyYXRlSnNvblJQQ09iamVjdChcIlNoYXJlUmVxdWVzdFwiLCB7XG4gICAgICAgICAgZW5jcnlwdGVkOiBcInllc1wiLFxuICAgICAgICAgIGl0ZW06IFtfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZlcmlmaWVyUGFyYW1zKSwge30sIHtcbiAgICAgICAgICAgIGlkdG9rZW46IGlkVG9rZW4sXG4gICAgICAgICAgICBub2Rlc2lnbmF0dXJlczogbm9kZVNpZ3MsXG4gICAgICAgICAgICB2ZXJpZmllcmlkZW50aWZpZXI6IHZlcmlmaWVyXG4gICAgICAgICAgfSwgZXh0cmFQYXJhbXMpXVxuICAgICAgICB9KSkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcInNoYXJlIHJlcVwiLCBlcnIpKTtcbiAgICAgICAgcHJvbWlzZUFyclJlcXVlc3QucHVzaChwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFNvbWUocHJvbWlzZUFyclJlcXVlc3QsIGFzeW5jIChzaGFyZVJlc3BvbnNlcywgc2hhcmVkU3RhdGUpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIFNoYXJlUmVxdWVzdFJlc3VsdCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICBLZXlzIFtdS2V5QXNzaWdubWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvIEtleUFzc2lnbm1lbnRQdWJsaWMgLVxuICAgICAgICAgICAgdHlwZSBLZXlBc3NpZ25tZW50UHVibGljIHN0cnVjdCB7XG4gICAgICAgICAgICAgIEluZGV4ICAgICBiaWcuSW50XG4gICAgICAgICAgICAgIFB1YmxpY0tleSBjb21tb24uUG9pbnRcbiAgICAgICAgICAgICAgVGhyZXNob2xkIGludFxuICAgICAgICAgICAgICBWZXJpZmllcnMgbWFwW3N0cmluZ11bXXN0cmluZyAvLyBWZXJpZmllciA9PiBWZXJpZmllcklEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgLy8gS2V5QXNzaWdubWVudCAtXG4gICAgICAgICAgICB0eXBlIEtleUFzc2lnbm1lbnQgc3RydWN0IHtcbiAgICAgICAgICAgICAgS2V5QXNzaWdubWVudFB1YmxpY1xuICAgICAgICAgICAgICBTaGFyZSBiaWcuSW50IC8vIE9yIFNpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKi9cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhyZXNob2xkIG51bWJlciBvZiBub2RlcyBoYXZlIHJldHVybmVkIHRoZSBzYW1lIHVzZXIgcHVibGljIGtleVxuICAgICAgICBjb25zdCBjb21wbGV0ZWRSZXF1ZXN0cyA9IHNoYXJlUmVzcG9uc2VzLmZpbHRlcih4ID0+IHgpO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGRQdWJsaWNLZXkgPSB0aHJlc2hvbGRTYW1lKHNoYXJlUmVzcG9uc2VzLm1hcCh4ID0+IHggJiYgeC5yZXN1bHQgJiYgeC5yZXN1bHQua2V5c1swXS5QdWJsaWNLZXkpLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTsgLy8gb3B0aW1pc3RpY2FsbHkgcnVuIGxhZ3JhbmdlIGludGVycG9sYXRpb24gb25jZSB0aHJlc2hvbGQgbnVtYmVyIG9mIHNoYXJlcyBoYXZlIGJlZW4gcmVjZWl2ZWRcbiAgICAgICAgLy8gdGhpcyBpcyBtYXRjaGVkIGFnYWluc3QgdGhlIHVzZXIgcHVibGljIGtleSB0byBlbnN1cmUgdGhhdCBzaGFyZXMgYXJlIGNvbnNpc3RlbnRcblxuICAgICAgICBpZiAoY29tcGxldGVkUmVxdWVzdHMubGVuZ3RoID49IH5+KGVuZHBvaW50cy5sZW5ndGggLyAyKSArIDEgJiYgdGhyZXNob2xkUHVibGljS2V5KSB7XG4gICAgICAgICAgY29uc3Qgc2hhcmVQcm9taXNlcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IG5vZGVJbmRleGVzID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoYXJlUmVzcG9uc2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgX2N1cnJlbnRTaGFyZVJlc3BvbnNlLCBfY3VycmVudFNoYXJlUmVzcG9uc2UyO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2hhcmVSZXNwb25zZSA9IHNoYXJlUmVzcG9uc2VzW2ldO1xuXG4gICAgICAgICAgICBpZiAoKGN1cnJlbnRTaGFyZVJlc3BvbnNlID09PSBudWxsIHx8IGN1cnJlbnRTaGFyZVJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2N1cnJlbnRTaGFyZVJlc3BvbnNlID0gY3VycmVudFNoYXJlUmVzcG9uc2UucmVzdWx0KSA9PT0gbnVsbCB8fCBfY3VycmVudFNoYXJlUmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfY3VycmVudFNoYXJlUmVzcG9uc2UyID0gX2N1cnJlbnRTaGFyZVJlc3BvbnNlLmtleXMpID09PSBudWxsIHx8IF9jdXJyZW50U2hhcmVSZXNwb25zZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jdXJyZW50U2hhcmVSZXNwb25zZTIubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgICAgY3VycmVudFNoYXJlUmVzcG9uc2UucmVzdWx0LmtleXMuc29ydCgoYSwgYikgPT4gbmV3IEJOKGEuSW5kZXgsIDE2KS5jbXAobmV3IEJOKGIuSW5kZXgsIDE2KSkpO1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdEtleSA9IGN1cnJlbnRTaGFyZVJlc3BvbnNlLnJlc3VsdC5rZXlzWzBdO1xuXG4gICAgICAgICAgICAgIGlmIChmaXJzdEtleS5NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgZXBoZW1QdWJsaWNLZXk6IEJ1ZmZlci5mcm9tKGZpcnN0S2V5Lk1ldGFkYXRhLmVwaGVtUHVibGljS2V5LCBcImhleFwiKSxcbiAgICAgICAgICAgICAgICAgIGl2OiBCdWZmZXIuZnJvbShmaXJzdEtleS5NZXRhZGF0YS5pdiwgXCJoZXhcIiksXG4gICAgICAgICAgICAgICAgICBtYWM6IEJ1ZmZlci5mcm9tKGZpcnN0S2V5Lk1ldGFkYXRhLm1hYywgXCJoZXhcIikgLy8gbW9kZTogQnVmZmVyLmZyb20oZmlyc3RLZXkuTWV0YWRhdGEubW9kZSwgXCJoZXhcIiksXG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMucHVzaCggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tbmVzdGluZ1xuICAgICAgICAgICAgICAgIGRlY3J5cHQodG1wS2V5LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1ldGFkYXRhKSwge30sIHtcbiAgICAgICAgICAgICAgICAgIGNpcGhlcnRleHQ6IEJ1ZmZlci5mcm9tKEJ1ZmZlci5mcm9tKGZpcnN0S2V5LlNoYXJlLCBcImJhc2U2NFwiKS50b1N0cmluZyhcImJpbmFyeVwiKS5wYWRTdGFydCg2NCwgXCIwXCIpLCBcImhleFwiKVxuICAgICAgICAgICAgICAgIH0pKS5jYXRjaChlcnIgPT4gbG9nLmRlYnVnKFwic2hhcmUgZGVjcnlwdGlvblwiLCBlcnIpKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hhcmVQcm9taXNlcy5wdXNoKFByb21pc2UucmVzb2x2ZShCdWZmZXIuZnJvbShmaXJzdEtleS5TaGFyZS5wYWRTdGFydCg2NCwgXCIwXCIpLCBcImhleFwiKSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGFyZVByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlSW5kZXhlcy5wdXNoKG5ldyBCTihpbmRleGVzW2ldLCAxNikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNoYXJlc1Jlc29sdmVkID0gYXdhaXQgUHJvbWlzZS5hbGwoc2hhcmVQcm9taXNlcyk7XG4gICAgICAgICAgaWYgKHNoYXJlZFN0YXRlLnJlc29sdmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIGNvbnN0IGRlY3J5cHRlZFNoYXJlcyA9IHNoYXJlc1Jlc29sdmVkLnJlZHVjZSgoYWNjLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnIpIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAgaW5kZXg6IG5vZGVJbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgdmFsdWU6IG5ldyBCTihjdXJyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIFtdKTsgLy8gcnVuIGxhZ3JhbmdlIGludGVycG9sYXRpb24gb24gYWxsIHN1YnNldHMsIGZhc3RlciBpbiB0aGUgb3B0aW1pc3RpYyBzY2VuYXJpbyB0aGFuIGJlcmxla2FtcC13ZWxjaCBkdWUgdG8gZWFybHkgZXhpdFxuXG4gICAgICAgICAgY29uc3QgYWxsQ29tYmlzID0ga0NvbWJpbmF0aW9ucyhkZWNyeXB0ZWRTaGFyZXMubGVuZ3RoLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTtcbiAgICAgICAgICBsZXQgcHJpdmF0ZUtleSA9IG51bGw7XG5cbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbENvbWJpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbWJpID0gYWxsQ29tYmlzW2pdO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbWJpU2hhcmVzID0gZGVjcnlwdGVkU2hhcmVzLmZpbHRlcigodiwgaW5kZXgpID0+IGN1cnJlbnRDb21iaS5pbmNsdWRlcyhpbmRleCkpO1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVzID0gY3VycmVudENvbWJpU2hhcmVzLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IGN1cnJlbnRDb21iaVNoYXJlcy5tYXAoeCA9PiB4LmluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGRlcml2ZWRQcml2YXRlS2V5ID0gdGhpcy5sYWdyYW5nZUludGVycG9sYXRpb24oc2hhcmVzLCBpbmRpY2VzKTtcbiAgICAgICAgICAgIGlmICghZGVyaXZlZFByaXZhdGVLZXkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgZGVjcnlwdGVkUHViS2V5ID0gZ2V0UHVibGljKEJ1ZmZlci5mcm9tKGRlcml2ZWRQcml2YXRlS2V5LnRvU3RyaW5nKDE2LCA2NCksIFwiaGV4XCIpKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlY3J5cHRlZFB1YktleVggPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgICAgICAgY29uc3QgZGVjcnlwdGVkUHViS2V5WSA9IGRlY3J5cHRlZFB1YktleS5zbGljZSg2Nik7XG5cbiAgICAgICAgICAgIGlmIChuZXcgQk4oZGVjcnlwdGVkUHViS2V5WCwgMTYpLmNtcChuZXcgQk4odGhyZXNob2xkUHVibGljS2V5LlgsIDE2KSkgPT09IDAgJiYgbmV3IEJOKGRlY3J5cHRlZFB1YktleVksIDE2KS5jbXAobmV3IEJOKHRocmVzaG9sZFB1YmxpY0tleS5ZLCAxNikpID09PSAwKSB7XG4gICAgICAgICAgICAgIHByaXZhdGVLZXkgPSBkZXJpdmVkUHJpdmF0ZUtleTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByaXZhdGVLZXkgPT09IHVuZGVmaW5lZCB8fCBwcml2YXRlS2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZGVyaXZlIHByaXZhdGUga2V5XCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwcml2YXRlS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZFwiKTtcbiAgICAgIH0pO1xuICAgIH0pLnRoZW4oYXN5bmMgcmV0dXJuZWRLZXkgPT4ge1xuICAgICAgbGV0IHByaXZhdGVLZXkgPSByZXR1cm5lZEtleTtcbiAgICAgIGlmICghcHJpdmF0ZUtleSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwcml2YXRlIGtleSByZXR1cm5lZFwiKTtcbiAgICAgIGNvbnN0IGRlY3J5cHRlZFB1YktleSA9IGdldFB1YmxpYyhCdWZmZXIuZnJvbShwcml2YXRlS2V5LnRvU3RyaW5nKDE2LCA2NCksIFwiaGV4XCIpKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgIGNvbnN0IGRlY3J5cHRlZFB1YktleVggPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgY29uc3QgZGVjcnlwdGVkUHViS2V5WSA9IGRlY3J5cHRlZFB1YktleS5zbGljZSg2Nik7XG4gICAgICBsZXQgbWV0YWRhdGFOb25jZTtcblxuICAgICAgaWYgKHRoaXMuZW5hYmxlT25lS2V5KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBub25jZVxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5nZXROb25jZShkZWNyeXB0ZWRQdWJLZXlYLCBkZWNyeXB0ZWRQdWJLZXlZLCBwcml2YXRlS2V5KTtcbiAgICAgICAgbWV0YWRhdGFOb25jZSA9IG5ldyBCTihub25jZSB8fCBcIjBcIiwgMTYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0YWRhdGFOb25jZSA9IGF3YWl0IHRoaXMuZ2V0TWV0YWRhdGEoe1xuICAgICAgICAgIHB1Yl9rZXlfWDogZGVjcnlwdGVkUHViS2V5WCxcbiAgICAgICAgICBwdWJfa2V5X1k6IGRlY3J5cHRlZFB1YktleVlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxvZy5kZWJ1ZyhcIj4gdG9ydXMuanMvcmV0cmlldmVTaGFyZXNcIiwge1xuICAgICAgICBwcml2S2V5OiBwcml2YXRlS2V5LnRvU3RyaW5nKDE2KSxcbiAgICAgICAgbWV0YWRhdGFOb25jZTogbWV0YWRhdGFOb25jZS50b1N0cmluZygxNilcbiAgICAgIH0pO1xuICAgICAgcHJpdmF0ZUtleSA9IHByaXZhdGVLZXkuYWRkKG1ldGFkYXRhTm9uY2UpLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgIGNvbnN0IGV0aEFkZHJlc3MgPSB0aGlzLmdlbmVyYXRlQWRkcmVzc0Zyb21Qcml2S2V5KHByaXZhdGVLZXkpO1xuICAgICAgbG9nLmRlYnVnKFwiPiB0b3J1cy5qcy9yZXRyaWV2ZVNoYXJlc1wiLCB7XG4gICAgICAgIGV0aEFkZHJlc3MsXG4gICAgICAgIHByaXZLZXk6IHByaXZhdGVLZXkudG9TdHJpbmcoMTYpXG4gICAgICB9KTsgLy8gcmV0dXJuIHJlY29uc3RydWN0ZWQgcHJpdmF0ZSBrZXkgYW5kIGV0aGVyZXVtIGFkZHJlc3NcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXRoQWRkcmVzcyxcbiAgICAgICAgcHJpdktleTogcHJpdmF0ZUtleS50b1N0cmluZyhcImhleFwiLCA2NCksXG4gICAgICAgIG1ldGFkYXRhTm9uY2VcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBnZXRNZXRhZGF0YShkYXRhKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhUmVzcG9uc2UgPSBhd2FpdCBwb3N0KGAke3RoaXMubWV0YWRhdGFIb3N0fS9nZXRgLCBkYXRhLCBvcHRpb25zLCB7XG4gICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghbWV0YWRhdGFSZXNwb25zZSB8fCAhbWV0YWRhdGFSZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQk4oMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQk4obWV0YWRhdGFSZXNwb25zZS5tZXNzYWdlLCAxNik7IC8vIG5vbmNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihcImdldCBtZXRhZGF0YSBlcnJvclwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gbmV3IEJOKDApO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobWVzc2FnZSwgcHJpdmF0ZUtleSkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleS50b1N0cmluZyhcImhleFwiLCA2NCkpO1xuICAgIGNvbnN0IHNldERhdGEgPSB7XG4gICAgICBkYXRhOiBtZXNzYWdlLFxuICAgICAgdGltZXN0YW1wOiBuZXcgQk4ofn4odGhpcy5zZXJ2ZXJUaW1lT2Zmc2V0ICsgRGF0ZS5ub3coKSAvIDEwMDApKS50b1N0cmluZygxNilcbiAgICB9O1xuICAgIGNvbnN0IHNpZyA9IGtleS5zaWduKGtlY2NhazI1NihKc29uU3RyaW5naWZ5KHNldERhdGEpKS5zbGljZSgyKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHB1Yl9rZXlfWDoga2V5LmdldFB1YmxpYygpLmdldFgoKS50b1N0cmluZyhcImhleFwiKSxcbiAgICAgIHB1Yl9rZXlfWToga2V5LmdldFB1YmxpYygpLmdldFkoKS50b1N0cmluZyhcImhleFwiKSxcbiAgICAgIHNldF9kYXRhOiBzZXREYXRhLFxuICAgICAgc2lnbmF0dXJlOiBCdWZmZXIuZnJvbShzaWcuci50b1N0cmluZygxNiwgNjQpICsgc2lnLnMudG9TdHJpbmcoMTYsIDY0KSArIG5ldyBCTihcIlwiKS50b1N0cmluZygxNiwgMiksIFwiaGV4XCIpLnRvU3RyaW5nKFwiYmFzZTY0XCIpXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHNldE1ldGFkYXRhKGRhdGEpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbWV0YWRhdGFSZXNwb25zZSA9IGF3YWl0IHBvc3QoYCR7dGhpcy5tZXRhZGF0YUhvc3R9L3NldGAsIGRhdGEsIG9wdGlvbnMsIHtcbiAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZXRhZGF0YVJlc3BvbnNlLm1lc3NhZ2U7IC8vIElQRlMgaGFzaFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2cuZXJyb3IoXCJzZXQgbWV0YWRhdGEgZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG5cbiAgbGFncmFuZ2VJbnRlcnBvbGF0aW9uKHNoYXJlcywgbm9kZUluZGV4KSB7XG4gICAgaWYgKHNoYXJlcy5sZW5ndGggIT09IG5vZGVJbmRleC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBzZWNyZXQgPSBuZXcgQk4oMCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoYXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHVwcGVyID0gbmV3IEJOKDEpO1xuICAgICAgbGV0IGxvd2VyID0gbmV3IEJOKDEpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoYXJlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgIHVwcGVyID0gdXBwZXIubXVsKG5vZGVJbmRleFtqXS5uZWcoKSk7XG4gICAgICAgICAgdXBwZXIgPSB1cHBlci51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgbGV0IHRlbXAgPSBub2RlSW5kZXhbaV0uc3ViKG5vZGVJbmRleFtqXSk7XG4gICAgICAgICAgdGVtcCA9IHRlbXAudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgIGxvd2VyID0gbG93ZXIubXVsKHRlbXApLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGVsdGEgPSB1cHBlci5tdWwobG93ZXIuaW52bSh0aGlzLmVjLmN1cnZlLm4pKS51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICBkZWx0YSA9IGRlbHRhLm11bChzaGFyZXNbaV0pLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgIHNlY3JldCA9IHNlY3JldC5hZGQoZGVsdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWNyZXQudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICB9XG5cbiAgZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXkocHJpdmF0ZUtleSkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleS50b1N0cmluZyhcImhleFwiLCA2NCksIFwiaGV4XCIpO1xuICAgIGNvbnN0IHB1YmxpY0tleSA9IGtleS5nZXRQdWJsaWMoKS5lbmNvZGUoXCJoZXhcIiwgZmFsc2UpLnNsaWNlKDIpO1xuICAgIGxvZy5pbmZvKHB1YmxpY0tleSwgXCJwdWJsaWMga2V5XCIpO1xuICAgIGNvbnN0IGV0aEFkZHJlc3NMb3dlciA9IGAweCR7a2VjY2FrMjU2KEJ1ZmZlci5mcm9tKHB1YmxpY0tleSwgXCJoZXhcIikpLnNsaWNlKDY0IC0gMzgpfWA7XG4gICAgcmV0dXJuIHRvQ2hlY2tzdW1BZGRyZXNzKGV0aEFkZHJlc3NMb3dlcik7XG4gIH1cblxuICBnZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5KHB1YmxpY0tleVgsIHB1YmxpY0tleVkpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgeDogcHVibGljS2V5WC50b1N0cmluZyhcImhleFwiLCA2NCksXG4gICAgICB5OiBwdWJsaWNLZXlZLnRvU3RyaW5nKFwiaGV4XCIsIDY0KVxuICAgIH0pO1xuICAgIGNvbnN0IHB1YmxpY0tleSA9IGtleS5nZXRQdWJsaWMoKS5lbmNvZGUoXCJoZXhcIiwgZmFsc2UpLnNsaWNlKDIpO1xuICAgIGxvZy5pbmZvKGtleS5nZXRQdWJsaWMoKS5lbmNvZGUoXCJoZXhcIiwgZmFsc2UpLCBcInB1YmxpYyBrZXlcIik7XG4gICAgY29uc3QgZXRoQWRkcmVzc0xvd2VyID0gYDB4JHtrZWNjYWsyNTYoQnVmZmVyLmZyb20ocHVibGljS2V5LCBcImhleFwiKSkuc2xpY2UoNjQgLSAzOCl9YDtcbiAgICByZXR1cm4gdG9DaGVja3N1bUFkZHJlc3MoZXRoQWRkcmVzc0xvd2VyKTtcbiAgfVxuICAvKipcbiAgICogTm90ZTogdXNlIHRoaXMgZnVuY3Rpb24gb25seSB3aXRoIGN1c3RvbSBhdXRoLCBkb24ndCB1c2UgdG8gbG9va3VwIG9wZW5sb2dpbiBhY2NvdW50cy5cbiAgICovXG5cblxuICBhc3luYyBnZXRQdWJsaWNBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywgX3JlZjMpIHtcbiAgICBsZXQge1xuICAgICAgdmVyaWZpZXIsXG4gICAgICB2ZXJpZmllcklkXG4gICAgfSA9IF9yZWYzO1xuICAgIGxldCBpc0V4dGVuZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL2dldFB1YmxpY0FkZHJlc3NcIiwge1xuICAgICAgZW5kcG9pbnRzLFxuICAgICAgdG9ydXNOb2RlUHVicyxcbiAgICAgIHZlcmlmaWVyLFxuICAgICAgdmVyaWZpZXJJZCxcbiAgICAgIGlzRXh0ZW5kZWRcbiAgICB9KTtcbiAgICBsZXQgZmluYWxLZXlSZXN1bHQ7XG4gICAgbGV0IGlzTmV3S2V5ID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAga2V5UmVzdWx0LFxuICAgICAgZXJyb3JSZXN1bHRcbiAgICB9ID0gKGF3YWl0IGtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKSkgfHwge307XG5cbiAgICBpZiAoZXJyb3JSZXN1bHQgJiYgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQpLmluY2x1ZGVzKFwiVmVyaWZpZXIgbm90IHN1cHBvcnRlZFwiKSkge1xuICAgICAgLy8gY2hhbmdlIGVycm9yIG1zZ1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBWZXJpZmllciBub3Qgc3VwcG9ydGVkLiBDaGVjayBpZiB5b3U6IFxcblxuICAgICAgMS4gQXJlIG9uIHRoZSByaWdodCBuZXR3b3JrIChUb3J1cyB0ZXN0bmV0L21haW5uZXQpIFxcblxuICAgICAgMi4gSGF2ZSBzZXR1cCBhIHZlcmlmaWVyIG9uIGRhc2hib2FyZC53ZWIzYXV0aC5pbz9gKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yUmVzdWx0ICYmIEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0KS5pbmNsdWRlcyhcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpKSB7XG4gICAgICBhd2FpdCBrZXlBc3NpZ24oe1xuICAgICAgICBlbmRwb2ludHMsXG4gICAgICAgIHRvcnVzTm9kZVB1YnMsXG4gICAgICAgIGxhc3RQb2ludDogdW5kZWZpbmVkLFxuICAgICAgICBmaXJzdFBvaW50OiB1bmRlZmluZWQsXG4gICAgICAgIHZlcmlmaWVyLFxuICAgICAgICB2ZXJpZmllcklkLFxuICAgICAgICBzaWduZXJIb3N0OiB0aGlzLnNpZ25lckhvc3QsXG4gICAgICAgIG5ldHdvcms6IHRoaXMubmV0d29ya1xuICAgICAgfSk7XG4gICAgICBjb25zdCBhc3NpZ25SZXN1bHQgPSBhd2FpdCB3YWl0S2V5TG9va3VwKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQsIDEwMDApO1xuICAgICAgZmluYWxLZXlSZXN1bHQgPSBhc3NpZ25SZXN1bHQgPT09IG51bGwgfHwgYXNzaWduUmVzdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhc3NpZ25SZXN1bHQua2V5UmVzdWx0O1xuICAgICAgaXNOZXdLZXkgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoa2V5UmVzdWx0KSB7XG4gICAgICBmaW5hbEtleVJlc3VsdCA9IGtleVJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpcnN0IGxvb2t1cCAke0pTT04uc3RyaW5naWZ5KGtleVJlc3VsdCB8fCB7fSl9LCAke0pTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0IHx8IHt9KX1gKTtcbiAgICB9XG5cbiAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL2dldFB1YmxpY0FkZHJlc3NcIiwge1xuICAgICAgZmluYWxLZXlSZXN1bHQsXG4gICAgICBpc05ld0tleVxuICAgIH0pO1xuXG4gICAgaWYgKGZpbmFsS2V5UmVzdWx0KSB7XG4gICAgICB2YXIgX25vbmNlO1xuXG4gICAgICBsZXQge1xuICAgICAgICBwdWJfa2V5X1g6IFgsXG4gICAgICAgIHB1Yl9rZXlfWTogWVxuICAgICAgfSA9IGZpbmFsS2V5UmVzdWx0LmtleXNbMF07XG4gICAgICBsZXQgbm9uY2VSZXN1bHQ7XG4gICAgICBsZXQgbm9uY2U7XG4gICAgICBsZXQgbW9kaWZpZWRQdWJLZXk7XG4gICAgICBsZXQgdHlwZU9mVXNlcjtcbiAgICAgIGxldCBwdWJOb25jZTtcblxuICAgICAgaWYgKHRoaXMuZW5hYmxlT25lS2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9uY2VSZXN1bHQgPSBhd2FpdCB0aGlzLmdldE9yU2V0Tm9uY2UoWCwgWSwgdW5kZWZpbmVkLCAhaXNOZXdLZXkpO1xuICAgICAgICAgIG5vbmNlID0gbmV3IEJOKG5vbmNlUmVzdWx0Lm5vbmNlIHx8IFwiMFwiLCAxNik7XG4gICAgICAgICAgdHlwZU9mVXNlciA9IG5vbmNlUmVzdWx0LnR5cGVPZlVzZXI7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHRocm93IG5ldyBHZXRPclNldE5vbmNlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub25jZVJlc3VsdC50eXBlT2ZVc2VyID09PSBcInYxXCIpIHtcbiAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgeTogWVxuICAgICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21Qcml2YXRlKG5vbmNlLnRvU3RyaW5nKDE2KSkuZ2V0UHVibGljKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjJcIikge1xuICAgICAgICAgIGlmIChub25jZVJlc3VsdC51cGdyYWRlZCkge1xuICAgICAgICAgICAgLy8gT25lS2V5IGlzIHVwZ3JhZGVkIHRvIDIvbiwgcmV0dXJuZWQgYWRkcmVzcyBpcyBhZGRyZXNzIG9mIFRvcnVzIGtleSAocG9zdGJveCBrZXkpLCBub3QgdEtleVxuICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICB9KS5nZXRQdWJsaWMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgeDogbm9uY2VSZXN1bHQucHViTm9uY2UueCxcbiAgICAgICAgICAgICAgeTogbm9uY2VSZXN1bHQucHViTm9uY2UueVxuICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkpO1xuICAgICAgICAgICAgcHViTm9uY2UgPSBub25jZVJlc3VsdC5wdWJOb25jZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0T3JTZXROb25jZSBzaG91bGQgYWx3YXlzIHJldHVybiB0eXBlT2ZVc2VyLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZU9mVXNlciA9IFwidjFcIjtcbiAgICAgICAgbm9uY2UgPSBhd2FpdCB0aGlzLmdldE1ldGFkYXRhKHtcbiAgICAgICAgICBwdWJfa2V5X1g6IFgsXG4gICAgICAgICAgcHViX2tleV9ZOiBZXG4gICAgICAgIH0pO1xuICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgeDogWCxcbiAgICAgICAgICB5OiBZXG4gICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21Qcml2YXRlKG5vbmNlLnRvU3RyaW5nKDE2KSkuZ2V0UHVibGljKCkpO1xuICAgICAgfVxuXG4gICAgICBYID0gbW9kaWZpZWRQdWJLZXkuZ2V0WCgpLnRvU3RyaW5nKDE2KTtcbiAgICAgIFkgPSBtb2RpZmllZFB1YktleS5nZXRZKCkudG9TdHJpbmcoMTYpO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleShtb2RpZmllZFB1YktleS5nZXRYKCksIG1vZGlmaWVkUHViS2V5LmdldFkoKSk7XG4gICAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL2dldFB1YmxpY0FkZHJlc3NcIiwge1xuICAgICAgICBYLFxuICAgICAgICBZLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICB0eXBlT2ZVc2VyLFxuICAgICAgICBub25jZTogKF9ub25jZSA9IG5vbmNlKSA9PT0gbnVsbCB8fCBfbm9uY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub25jZS50b1N0cmluZygxNiksXG4gICAgICAgIHB1Yk5vbmNlXG4gICAgICB9KTtcbiAgICAgIGlmICghaXNFeHRlbmRlZCkgcmV0dXJuIGFkZHJlc3M7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlT2ZVc2VyLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBYLFxuICAgICAgICBZLFxuICAgICAgICBtZXRhZGF0YU5vbmNlOiBub25jZSxcbiAgICAgICAgcHViTm9uY2VcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpbmFsIGxvb2t1cCAke0pTT04uc3RyaW5naWZ5KGtleVJlc3VsdCB8fCB7fSl9LCAke0pTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0IHx8IHt9KX1gKTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJuYWwgZnVuY3Rpb25zIGZvciBPbmVLZXkgKE9wZW5Mb2dpbiB2MiksIG9ubHkgY2FsbCB0aGVzZSBmdW5jdGlvbnMgaWYgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICovXG5cblxuICBhc3luYyBnZXRPclNldE5vbmNlKFgsIFksIHByaXZLZXkpIHtcbiAgICBsZXQgZ2V0T25seSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG4gICAgbGV0IGRhdGE7XG4gICAgY29uc3QgbXNnID0gZ2V0T25seSA/IFwiZ2V0Tm9uY2VcIiA6IFwiZ2V0T3JTZXROb25jZVwiO1xuXG4gICAgaWYgKHByaXZLZXkpIHtcbiAgICAgIGRhdGEgPSB0aGlzLmdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobXNnLCBwcml2S2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgcHViX2tleV9YOiBYLFxuICAgICAgICBwdWJfa2V5X1k6IFksXG4gICAgICAgIHNldF9kYXRhOiB7XG4gICAgICAgICAgZGF0YTogbXNnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc3QoYCR7dGhpcy5tZXRhZGF0YUhvc3R9L2dldF9vcl9zZXRfbm9uY2VgLCBkYXRhLCB1bmRlZmluZWQsIHtcbiAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0Tm9uY2UoWCwgWSwgcHJpdktleSkge1xuICAgIHJldHVybiB0aGlzLmdldE9yU2V0Tm9uY2UoWCwgWSwgcHJpdktleSwgdHJ1ZSk7XG4gIH1cblxuICBnZXRQb3N0Ym94S2V5RnJvbTFPdXRPZjEocHJpdktleSwgbm9uY2UpIHtcbiAgICBjb25zdCBwcml2S2V5Qk4gPSBuZXcgQk4ocHJpdktleSwgMTYpO1xuICAgIGNvbnN0IG5vbmNlQk4gPSBuZXcgQk4obm9uY2UsIDE2KTtcbiAgICByZXR1cm4gcHJpdktleUJOLnN1Yihub25jZUJOKS51bW9kKHRoaXMuZWMuY3VydmUubikudG9TdHJpbmcoXCJoZXhcIik7XG4gIH1cblxufVxuXG5leHBvcnQgeyBHZXRPclNldE5vbmNlRXJyb3IsIFRvcnVzIGFzIGRlZmF1bHQsIGtDb21iaW5hdGlvbnMsIGtlY2NhazI1Niwga2V5QXNzaWduLCBrZXlMb29rdXAsIHRocmVzaG9sZFNhbWUsIHdhaXRLZXlMb29rdXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvcnVzVXRpbHMuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgTm9kZURldGFpbE1hbmFnZXIgZnJvbSAnQHRvcnVzbGFicy9mZXRjaC1ub2RlLWRldGFpbHMnO1xuaW1wb3J0IHsgZ2V0LCBzZXRBUElLZXkgfSBmcm9tICdAdG9ydXNsYWJzL2h0dHAtaGVscGVycyc7XG5pbXBvcnQgeyBTYWZlRXZlbnRFbWl0dGVyLCBPYmplY3RNdWx0aXBsZXgsIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUsIEpSUENFbmdpbmUsIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlLCBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0sIHNldHVwTXVsdGlwbGV4IH0gZnJvbSAnQHRvcnVzbGFicy9vcGVubG9naW4tanJwYyc7XG5pbXBvcnQgVG9ydXNKcyBmcm9tICdAdG9ydXNsYWJzL3RvcnVzLmpzJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnbG9kYXNoLm1lcmdlJztcbmltcG9ydCB7IE9ic2VydmFibGVTdG9yZSwgc3RvcmVBc1N0cmVhbSB9IGZyb20gJ0BtZXRhbWFzay9vYnMtc3RvcmUnO1xuaW1wb3J0IHsgZXRoRXJyb3JzLCBFdGhlcmV1bVJwY0Vycm9yIH0gZnJvbSAnZXRoLXJwYy1lcnJvcnMnO1xuaW1wb3J0IGRlcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgZHVwbGV4IH0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCBwdW1wIGZyb20gJ3B1bXAnO1xuaW1wb3J0IGxvZ2xldmVsIGZyb20gJ2xvZ2xldmVsJztcbmltcG9ydCBjcmVhdGVIYXNoIGZyb20gJ2NyZWF0ZS1oYXNoJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5cbmNvbnN0IExPR0lOX1BST1ZJREVSID0ge1xuICBHT09HTEU6IFwiZ29vZ2xlXCIsXG4gIEZBQ0VCT09LOiBcImZhY2Vib29rXCIsXG4gIFRXSVRDSDogXCJ0d2l0Y2hcIixcbiAgUkVERElUOiBcInJlZGRpdFwiLFxuICBESVNDT1JEOiBcImRpc2NvcmRcIlxufTtcbmNvbnN0IFdBTExFVF9WRVJJRklFUlMgPSB7XG4gIEdPT0dMRTogXCJnb29nbGVcIixcbiAgRkFDRUJPT0s6IFwiZmFjZWJvb2tcIixcbiAgVFdJVENIOiBcInR3aXRjaFwiLFxuICBSRURESVQ6IFwicmVkZGl0XCIsXG4gIERJU0NPUkQ6IFwiZGlzY29yZFwiLFxuICBFTUFJTF9QQVNTV09SRExFU1M6IFwidG9ydXMtYXV0aDAtZW1haWwtcGFzc3dvcmRsZXNzXCJcbn07XG5jb25zdCBXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUCA9IHtcbiAgW1dBTExFVF9WRVJJRklFUlMuR09PR0xFXTogXCJ0a2V5LWdvb2dsZVwiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5GQUNFQk9PS106IFwidGtleS1mYWNlYm9va1wiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5UV0lUQ0hdOiBcInRrZXktdHdpdGNoXCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLlJFRERJVF06IFwidGtleS1yZWRkaXRcIixcbiAgW1dBTExFVF9WRVJJRklFUlMuRElTQ09SRF06IFwidGtleS1kaXNjb3JkXCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLkVNQUlMX1BBU1NXT1JETEVTU106IFwidGtleS1hdXRoMC1lbWFpbC1wYXNzd29yZGxlc3NcIlxufTtcbmNvbnN0IFBBWU1FTlRfUFJPVklERVIgPSB7XG4gIE1PT05QQVk6IFwibW9vbnBheVwiLFxuICBXWVJFOiBcInd5cmVcIixcbiAgUkFNUE5FVFdPUks6IFwicmFtcG5ldHdvcmtcIixcbiAgWEFOUE9PTDogXCJ4YW5wb29sXCIsXG4gIE1FUkNVUllPOiBcIm1lcmN1cnlvXCIsXG4gIFRSQU5TQUs6IFwidHJhbnNha1wiXG59O1xuY29uc3QgU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSyA9IHtcbiAgTUFJTk5FVDogXCJtYWlubmV0XCIsXG4gIE1BVElDOiBcIm1hdGljXCIsXG4gIEJTQ19NQUlOTkVUOiBcImJzY19tYWlubmV0XCIsXG4gIEFWQUxBTkNIRV9NQUlOTkVUOiBcImF2YWxhbmNoZV9tYWlubmV0XCIsXG4gIFhEQUk6IFwieGRhaVwiXG59O1xuY29uc3QgVE9SVVNfQlVJTERfRU5WID0ge1xuICBQUk9EVUNUSU9OOiBcInByb2R1Y3Rpb25cIixcbiAgREVWRUxPUE1FTlQ6IFwiZGV2ZWxvcG1lbnRcIixcbiAgQklOQU5DRTogXCJiaW5hbmNlXCIsXG4gIFRFU1RJTkc6IFwidGVzdGluZ1wiLFxuICBMUkM6IFwibHJjXCIsXG4gIEJFVEE6IFwiYmV0YVwiXG59O1xuY29uc3QgQlVUVE9OX1BPU0lUSU9OID0ge1xuICBCT1RUT01fTEVGVDogXCJib3R0b20tbGVmdFwiLFxuICBUT1BfTEVGVDogXCJ0b3AtbGVmdFwiLFxuICBCT1RUT01fUklHSFQ6IFwiYm90dG9tLXJpZ2h0XCIsXG4gIFRPUF9SSUdIVDogXCJ0b3AtcmlnaHRcIlxufTtcblxuLyoqXG4gKiBGcm9tIGh0dHBzOi8vbWluLWFwaS5jcnlwdG9jb21wYXJlLmNvbS9kYXRhL3YyL3BhaXIvbWFwcGluZy9mc3ltP2ZzeW09QlRDJmV4dHJhUGFyYW1zPVlvdXJTaXRlXG4gKiBHRVQgaHR0cHM6Ly9taW4tYXBpLmNyeXB0b2NvbXBhcmUuY29tL2RhdGEvdjIvcGFpci9tYXBwaW5nL2ZzeW0/ZnN5bT1CVENcbiAqIFRoZW4gbWFwIG92ZXIgcmV0dXJuZWQgZW50cmllcywgcGlja2luZyB0c3ltXG4gKlxuICogTGFzdCB1cGRhdGVkOiBEYXRlIG9mIGNvbW1pdFxuICovXG5cbmNvbnN0IENSWVBUT19DT01QQVJFX0NVUlJFTkNJRVMgPSBbXCJFVEhcIiwgXCJVU0RUXCIsIFwiVVNEQ1wiLCBcIlRVU0RcIiwgXCJFT1NEVFwiLCBcIlVTRFwiLCBcIkRBSVwiLCBcIkdVU0RcIiwgXCJES0tUXCIsIFwiUEFYXCIsIFwiSUxTXCIsIFwiUlVCXCIsIFwiQllOXCIsIFwiRVVSXCIsIFwiR0JQXCIsIFwiSlBZXCIsIFwiS1JXXCIsIFwiUExOXCIsIFwiTVhOXCIsIFwiQVVEXCIsIFwiQlJMXCIsIFwiQ0FEXCIsIFwiQ0hGXCIsIFwiS1BXXCIsIFwiTEFLXCIsIFwiTEJQXCIsIFwiTEtSXCIsIFwiWE9GXCIsIFwiQ05IVFwiLCBcIkRPR0VcIiwgXCJVQUhcIiwgXCJUUllcIiwgXCJIS0RcIiwgXCJYSlBcIiwgXCJTR0RcIiwgXCJVU0NcIiwgXCJOWkRcIiwgXCJOR05cIiwgXCJSVVJcIiwgXCJDT1BcIiwgXCJHSFNcIiwgXCJFR1BcIiwgXCJJRFJcIiwgXCJCSERcIiwgXCJDUkNcIiwgXCJQRU5cIiwgXCJBRURcIiwgXCJET1BcIiwgXCJQS1JcIiwgXCJIVUZcIiwgXCJWTkRcIiwgXCJYQVJcIiwgXCJMVENcIiwgXCJST05cIiwgXCJPTVJcIiwgXCJNWVJcIiwgXCJES0tcIiwgXCJVR1hcIiwgXCJaTVdcIiwgXCJTQVJcIiwgXCJTRUtcIiwgXCJHRUxcIiwgXCJSV0ZcIiwgXCJJUlJcIiwgXCJUWlNcIiwgXCJDTllcIiwgXCJWRUZcIiwgXCJCRFRcIiwgXCJIUktcIiwgXCJDTFBcIiwgXCJUSEJcIiwgXCJYQUZcIiwgXCJBUlNcIiwgXCJVWVVcIiwgXCJTWkxcIiwgXCJLWlRcIiwgXCJOT0tcIiwgXCJLRVNcIiwgXCJQQUJcIiwgXCJJTlJcIiwgXCJDWktcIiwgXCJNQURcIiwgXCJUV0RcIiwgXCJQSFBcIiwgXCJaQVJcIiwgXCJCT0JcIiwgXCJDREZcIiwgXCJEQVNIXCIsIFwiVkVTXCIsIFwiSVNLXCIsIFwiTVdLXCIsIFwiQkFNXCIsIFwiVFREXCIsIFwiWFJQXCIsIFwiSk9EXCIsIFwiUlNEXCIsIFwiSE5MXCIsIFwiQkdOXCIsIFwiR1RRXCIsIFwiQldQXCIsIFwiWE1SXCIsIFwiTU1LXCIsIFwiUUFSXCIsIFwiQU9BXCIsIFwiS1dEXCIsIFwiTVVSXCIsIFwiV1VTRFwiLCBcIldFVVJcIiwgXCJXQVZFU1wiLCBcIldUUllcIiwgXCJMUkRcIiwgXCJMU0xcIiwgXCJMWURcIiwgXCJBV0dcIiwgXCJNRExcIiwgXCJCVE9cIiwgXCJFVVJTXCIsIFwiQ0hGVFwiLCBcIk1LRFwiLCBcIk1OVFwiLCBcIk1PUFwiLCBcIk1ST1wiLCBcIk1WUlwiLCBcIlZPTExBUlwiLCBcIkNLVVNEXCIsIFwiS0hSXCIsIFwiVlVWXCIsIFwiQklUQ05ZXCIsIFwiUUNcIiwgXCJCQkRcIiwgXCJOQURcIiwgXCJOUFJcIiwgXCJQR0tcIiwgXCJQWUdcIiwgXCJCSUZcIiwgXCJCTURcIiwgXCJCTkRcIiwgXCJYTE1cIiwgXCJCTkJcIiwgXCJTQ1JcIiwgXCJCQVRcIiwgXCJDUk9cIiwgXCJIVFwiLCBcIktDU1wiLCBcIkxFT1wiLCBcIkxJTktcIiwgXCJNS1JcIiwgXCJOUFhTXCIsIFwiT01HXCIsIFwiUkVQXCIsIFwiWkJcIiwgXCJaSUxcIiwgXCJaUlhcIiwgXCJCQ0hcIiwgXCJCWkRcIiwgXCJDVVBcIiwgXCJDVkVcIiwgXCJESkZcIiwgXCJEWkRcIiwgXCJFUk5cIiwgXCJFVEJcIiwgXCJGSkRcIiwgXCJGS1BcIiwgXCJCVVNEXCIsIFwiQU5DVFwiLCBcIkFMTFwiLCBcIkFNRFwiLCBcIkFOR1wiLCBcIkNOWVhcIiwgXCJJUURcIiwgXCJVWlNcIiwgXCJUTkRcIiwgXCJHR1BcIiwgXCJYQVVcIiwgXCJLR1NcIiwgXCJHSVBcIiwgXCJKTURcIiwgXCJaRUNcIiwgXCJVU0RQXCIsIFwiQlNWXCIsIFwiRU1DMlwiLCBcIlNOVFwiLCBcIkdUT1wiLCBcIlBPV1JcIiwgXCJFVVNEXCIsIFwiRVVSVFwiLCBcIkJDWVwiLCBcIkJUU1wiLCBcIkFUTVwiLCBcIkJMT0NLUEFZXCIsIFwiQVJEUlwiLCBcIkFNUFwiLCBcIkIyWFwiLCBcIkJJVEdPTERcIiwgXCJCSVRFVVJcIiwgXCJBVEJcIiwgXCJCSVRVU0RcIiwgXCJBR1JTXCIsIFwiREZYVFwiLCBcIkhJS0VOXCIsIFwiQklYXCIsIFwiS05DXCIsIFwiRU9TXCIsIFwiQ09CXCIsIFwiQ09TU1wiLCBcIkJNSFwiLCBcIk5BTk9cIiwgXCJCREdcIiwgXCJCTlRcIiwgXCJYVkdcIiwgXCJMS0sxWVwiLCBcIkxLS1wiLCBcIlVTREtcIiwgXCJFVVJOXCIsIFwiTlpEVFwiLCBcIkpTRVwiLCBcIkdNRFwiLCBcIkdORlwiLCBcIkdZRFwiLCBcIllFUlwiLCBcIlhQRlwiLCBcIkhUR1wiLCBcIlNMTFwiLCBcIlNPU1wiLCBcIldTVFwiLCBcIlNWQ1wiLCBcIlNZUFwiLCBcIk5FT1wiLCBcIktNRlwiLCBcIkpVTVBcIiwgXCJBWUFcIiwgXCJCTEFTVFwiLCBcIldHUlwiLCBcIkJDTlwiLCBcIkJUR1wiLCBcIlVSQUxTXCIsIFwiSU5OXCIsIFwiVVNEUVwiLCBcIkNOSFwiLCBcIkhVU0RcIiwgXCJCS1JXXCIsIFwiTlpEWFwiLCBcIkVVUlhcIiwgXCJDQURYXCIsIFwiVVNERVhcIiwgXCJKUFlYXCIsIFwiQVVEWFwiLCBcIlZORENcIiwgXCJFT05cIiwgXCJHQlBYXCIsIFwiQ0hGWFwiLCBcIlVTREpcIiwgXCJJRFJUXCIsIFwiVVNEU1wiLCBcIlVTRE5cIiwgXCJCSURSXCIsIFwiSURLXCIsIFwiQlNEXCIsIFwiQlROXCIsIFwiS1lEXCIsIFwiTklPXCIsIFwiU0JEXCIsIFwiU0RHXCIsIFwiU0hQXCIsIFwiVE9QXCIsIFwiWENEXCIsIFwiWENIRlwiLCBcIkNOWVRcIiwgXCJHWUVOXCIsIFwiWlVTRFwiLCBcIkdPTERcIiwgXCJUUlhcIiwgXCJUUllCXCIsIFwiUExBVENcIiwgXCJTVFJBWFwiLCBcIlVTVFwiLCBcIkdMTVwiLCBcIlZBSVwiLCBcIkJSWlwiLCBcIkREUlNUXCIsIFwiWEFVVFwiLCBcIk1JTVwiXTtcbi8qKlxuICogY3VycmVuY2llcyBzdXBwb3J0ZWQgYnkgdGhlIHBheW1lbnQgcHJvdmlkZXJcbiAqIExhc3QgdXBkYXRlZDogRGF0ZSBvZiBjb21taXRcbiAqL1xuXG5jb25zdCBQUk9WSURFUl9TVVBQT1JURURfRklBVF9DVVJSRU5DSUVTID0ge1xuICAvLyBodHRwczovL2ludGVncmF0aW9ucy5zaW1wbGV4LmNvbS9zdXBwb3J0ZWRfY3VycmVuY2llc1xuICAvLyBodHRwczovL3N1cHBvcnQubW9vbnBheS5jb20vaGMvZW4tZ2IvYXJ0aWNsZXMvMzYwMDExOTMxNDU3LVdoaWNoLWZpYXQtY3VycmVuY2llcy1hcmUtc3VwcG9ydGVkLVxuICBbUEFZTUVOVF9QUk9WSURFUi5NT09OUEFZXTogW1wiQVVEXCIsIFwiQkdOXCIsIFwiQlJMXCIsIFwiQ0FEXCIsIFwiQ0hGXCIsIFwiQ05ZXCIsIFwiQ09QXCIsIFwiQ1pLXCIsIFwiREtLXCIsIFwiRE9QXCIsIFwiRUdQXCIsIFwiRVVSXCIsIFwiR0JQXCIsIFwiSEtEXCIsIFwiSFJLXCIsIFwiSURSXCIsIFwiSUxTXCIsIFwiSlBZXCIsIFwiSk9EXCIsIFwiS0VTXCIsIFwiS1JXXCIsIFwiS1dEXCIsIFwiTEtSXCIsIFwiTUFEXCIsIFwiTVhOXCIsIFwiTVlSXCIsIFwiTkdOXCIsIFwiTk9LXCIsIFwiTlpEXCIsIFwiT01SXCIsIFwiUEVOXCIsIFwiUEtSXCIsIFwiUExOXCIsIFwiUk9OXCIsIFwiUlVCXCIsIFwiU0VLXCIsIFwiU0dEXCIsIFwiVEhCXCIsIFwiVFJZXCIsIFwiVFdEXCIsIFwiVVNEXCIsIFwiVk5EXCIsIFwiWkFSXCJdLFxuXG4gIC8qKlxuICAgKiBodHRwczovL2RvY3Muc2VuZHd5cmUuY29tL2RvY3Mvc3VwcG9ydGVkLWN1cnJlbmNpZXMjZmlhdFxuICAgKiBUaGUgb25lcyB3aGVyZSBjcmVkaXQgY2FyZCBpcyBzdXBwb3J0ZWRcbiAgICovXG4gIFtQQVlNRU5UX1BST1ZJREVSLldZUkVdOiBbXCJVU0RcIiwgXCJFVVJcIiwgXCJHQlBcIiwgXCJBVURcIiwgXCJDQURcIiwgXCJOWkRcIiwgXCJBUlNcIiwgXCJCUkxcIiwgXCJDSEZcIiwgXCJDTFBcIiwgXCJDT1BcIiwgXCJDWktcIiwgXCJES0tcIiwgXCJIS0RcIiwgXCJJTFNcIiwgXCJJTlJcIiwgXCJJU0tcIiwgXCJKUFlcIiwgXCJLUldcIiwgXCJNWE5cIiwgXCJNWVJcIiwgXCJOT0tcIiwgXCJQSFBcIiwgXCJQTE5cIiwgXCJTRUtcIiwgXCJUSEJcIiwgXCJWTkRcIiwgXCJaQVJcIl0sXG4gIC8vIGh0dHBzOi8vc3VwcG9ydC5yYW1wLm5ldHdvcmsvZW4vYXJ0aWNsZXMvNDcxLXdoeS1hbS1pLXBheWluZy1pbi11c2QtZXVyLWdicFxuICBbUEFZTUVOVF9QUk9WSURFUi5SQU1QTkVUV09SS106IFtcIlVTRFwiLCBcIkVVUlwiLCBcIkdCUFwiXSxcbiAgLy8gRnJvbSBodHRwczovL3hhbnBvb2wuY29tLyBmaWF0IHNlbGVjdCBkcm9wZG93blxuICBbUEFZTUVOVF9QUk9WSURFUi5YQU5QT09MXTogW1wiU0dEXCIsIFwiSEtEXCIsIFwiVEhCXCIsIFwiUEhQXCIsIFwiSU5SXCIsIFwiSURSXCIsIFwiTVlSXCIsIFwiQVVEXCIsIFwiTlpEXCIsIFwiS1JXXCJdLFxuICAvLyBodHRwczovL3N1cHBvcnQuYWF4LmNvbS9lbi9hcnRpY2xlcy81Mjk1NzYyLW1lcmN1cnlvXG4gIC8vIFJVQiAvIFVBSCBjdXJyZW50bHkgbm90IHN1cHBvcnRlZFxuICBbUEFZTUVOVF9QUk9WSURFUi5NRVJDVVJZT106IFtcIkVVUlwiLCBcIlVTRFwiLCBcIkdCUFwiLCBcIlRSWVwiLCBcIkpQWVwiLCBcIkJSTFwiLCBcIk5HTlwiLCBcIlZORFwiLCBcIk1YTlwiLCBcIktSV1wiXSxcblxuICAvKipcbiAgICogaHR0cHM6Ly9zdXBwb3J0LnRyYW5zYWsuY29tL2hjL2VuLXVzL2FydGljbGVzLzM2MDAyMDYxNTU3OC1DcmVkaXQtYW5kLURlYml0LUNhcmQtUGF5bWVudHMtdGhyb3VnaC1UcmFuc2FrXG4gICAqIG9yXG4gICAqIGh0dHBzOi8vdHJhbnNhay5zdG9wbGlnaHQuaW8vZG9jcy90cmFuc2FrLWRvY3MvYjNBNk9UazFPRFEwLTItZ2V0LWZpYXQtY3VycmVuY2llc1xuICAgKi9cbiAgW1BBWU1FTlRfUFJPVklERVIuVFJBTlNBS106IFtcIkFSU1wiLCBcIkFVRFwiLCBcIkJCRFwiLCBcIkJHTlwiLCBcIkJNRFwiLCBcIkJSTFwiLCBcIkNBRFwiLCBcIkNIRlwiLCBcIkNMUFwiLCBcIkNSQ1wiLCBcIkNaS1wiLCBcIkRLS1wiLCBcIkRPUFwiLCBcIkVVUlwiLCBcIkZKRFwiLCBcIkZLUFwiLCBcIkdCUFwiLCBcIkdJUFwiLCBcIkhSS1wiLCBcIkhVRlwiLCBcIklEUlwiLCBcIklMU1wiLCBcIklTS1wiLCBcIkpNRFwiLCBcIkpQWVwiLCBcIktFU1wiLCBcIktSV1wiLCBcIk1ETFwiLCBcIk1YTlwiLCBcIk1ZUlwiLCBcIk5PS1wiLCBcIk5aRFwiLCBcIlBFTlwiLCBcIlBIUFwiLCBcIlBMTlwiLCBcIlBZR1wiLCBcIlJPTlwiLCBcIlNFS1wiLCBcIlNHRFwiLCBcIlRIQlwiLCBcIlRSWVwiLCBcIlRaU1wiLCBcIlVTRFwiLCBcIlpBUlwiXVxufTtcbmNvbnN0IGNyeXB0b0NvbXBhcmVDdXJyZW5jaWVzU2V0ID0gbmV3IFNldChDUllQVE9fQ09NUEFSRV9DVVJSRU5DSUVTKTtcbi8qKlxuICogRmlhdCBjdXJyZW5jaWVzIHRoYXQgd2Ugc3VwcG9ydFxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZEZpYXRDdXJyZW5jaWVzKHByb3ZpZGVyKSB7XG4gIGNvbnN0IHByb3ZpZGVyU3VwcG9ydGVkRmlhdEN1cnJlbmNpZXMgPSBQUk9WSURFUl9TVVBQT1JURURfRklBVF9DVVJSRU5DSUVTW3Byb3ZpZGVyXTtcbiAgcmV0dXJuIHByb3ZpZGVyU3VwcG9ydGVkRmlhdEN1cnJlbmNpZXMuZmlsdGVyKGN1cnJlbmN5ID0+IGNyeXB0b0NvbXBhcmVDdXJyZW5jaWVzU2V0LmhhcyhjdXJyZW5jeSkpO1xufVxuXG5jb25zdCBwYXltZW50UHJvdmlkZXJzJDEgPSB7XG4gIFtQQVlNRU5UX1BST1ZJREVSLk1PT05QQVldOiB7XG4gICAgbGluZTE6IFwiQ3JlZGl0LyBEZWJpdCBDYXJkLyBBcHBsZSBQYXlcIixcbiAgICBsaW5lMjogXCI0LjUlIG9yIDUgVVNEXCIsXG4gICAgbGluZTM6IFwiMiwwMDDigqwvZGF5LCAxMCwwMDDigqwvbW9cIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL2hlbHAubW9vbnBheS5pby9lbi9cIixcbiAgICBtaW5PcmRlclZhbHVlOiAyNC45OSxcbiAgICBtYXhPcmRlclZhbHVlOiA1MDAwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IHN1cHBvcnRlZEZpYXRDdXJyZW5jaWVzKFBBWU1FTlRfUFJPVklERVIuTU9PTlBBWSksXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzQnlDaGFpbjoge1xuICAgICAgW1NVUFBPUlRFRF9QQVlNRU5UX05FVFdPUksuTUFJTk5FVF06IFt7XG4gICAgICAgIHZhbHVlOiBcImFhdmVcIixcbiAgICAgICAgZGlzcGxheTogXCJBQVZFXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiYmF0XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQkFUXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiZGFpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiREFJXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiZXRoXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiRVRIXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwibWtyXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiTUtSXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwibWF0aWNcIixcbiAgICAgICAgZGlzcGxheTogXCJNQVRJQ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcInVzZHRcIixcbiAgICAgICAgZGlzcGxheTogXCJVU0RUXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwidXNkY1wiLFxuICAgICAgICBkaXNwbGF5OiBcIlVTRENcIlxuICAgICAgfV0sXG4gICAgICBbU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSy5NQVRJQ106IFt7XG4gICAgICAgIHZhbHVlOiBcImV0aF9wb2x5Z29uXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiRVRIXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwibWF0aWNfcG9seWdvblwiLFxuICAgICAgICBkaXNwbGF5OiBcIk1BVElDXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwidXNkY19wb2x5Z29uXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiVVNEQ1wiXG4gICAgICB9XSxcbiAgICAgIFtTVVBQT1JURURfUEFZTUVOVF9ORVRXT1JLLkJTQ19NQUlOTkVUXTogW3tcbiAgICAgICAgdmFsdWU6IFwiYm5iX2JzY1wiLFxuICAgICAgICBkaXNwbGF5OiBcIkJOQlwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcImJ1c2RfYnNjXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQlVTRFwiXG4gICAgICB9XSxcbiAgICAgIFtTVVBQT1JURURfUEFZTUVOVF9ORVRXT1JLLkFWQUxBTkNIRV9NQUlOTkVUXTogW3tcbiAgICAgICAgdmFsdWU6IFwiYXZheF9jY2hhaW5cIixcbiAgICAgICAgZGlzcGxheTogXCJBVkFYXCJcbiAgICAgIH1dXG4gICAgfSxcbiAgICBpbmNsdWRlRmVlczogdHJ1ZSxcbiAgICBhcGk6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuV1lSRV06IHtcbiAgICBsaW5lMTogXCJBcHBsZSBQYXkvIERlYml0LyBDcmVkaXQgQ2FyZFwiLFxuICAgIGxpbmUyOiBcIjQuOSUgKyAzMMKiIG9yIDUgVVNEXCIsXG4gICAgbGluZTM6IFwiJDI1MC9kYXlcIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL3N1cHBvcnQuc2VuZHd5cmUuY29tL2VuL1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDUsXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogc3VwcG9ydGVkRmlhdEN1cnJlbmNpZXMoUEFZTUVOVF9QUk9WSURFUi5XWVJFKSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXNCeUNoYWluOiB7XG4gICAgICBbU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSy5NQUlOTkVUXTogW3tcbiAgICAgICAgdmFsdWU6IFwiQUFWRVwiLFxuICAgICAgICBkaXNwbGF5OiBcIkFBVkVcIlxuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogXCJCQVRcIixcbiAgICAgICAgZGlzcGxheTogXCJCQVRcIlxuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogXCJCVVNEXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQlVTRFwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIkRBSVwiLFxuICAgICAgICBkaXNwbGF5OiBcIkRBSVwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIkVUSFwiLFxuICAgICAgICBkaXNwbGF5OiBcIkVUSFwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIk1LUlwiLFxuICAgICAgICBkaXNwbGF5OiBcIk1LUlwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIlVOSVwiLFxuICAgICAgICBkaXNwbGF5OiBcIlVOSVwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIlVTRENcIixcbiAgICAgICAgZGlzcGxheTogXCJVU0RDXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiVVNEVFwiLFxuICAgICAgICBkaXNwbGF5OiBcIlVTRFRcIlxuICAgICAgfV0sXG4gICAgICBbU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSy5NQVRJQ106IFt7XG4gICAgICAgIHZhbHVlOiBcIk1VU0RDXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiVVNEQ1wiXG4gICAgICB9XSxcbiAgICAgIC8vIEFWQVhDPyBvciBBVkFYP1xuICAgICAgW1NVUFBPUlRFRF9QQVlNRU5UX05FVFdPUksuQVZBTEFOQ0hFX01BSU5ORVRdOiBbe1xuICAgICAgICB2YWx1ZTogXCJBVkFYQ1wiLFxuICAgICAgICBkaXNwbGF5OiBcIkFWQVhDXCJcbiAgICAgIH1dXG4gICAgfSxcbiAgICBpbmNsdWRlRmVlczogZmFsc2UsXG4gICAgYXBpOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLlJBTVBORVRXT1JLXToge1xuICAgIGxpbmUxOiBcIkRlYml0IENhcmQvIDxicj5BcHBsZSBQYXkvIEJhbmsgdHJhbnNmZXJcIixcbiAgICBsaW5lMjogXCIwLjQ5JSAtIDIuOSVcIixcbiAgICBsaW5lMzogXCI1LDAwMOKCrC9wdXJjaGFzZSwgMjAsMDAw4oKsL21vXCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9pbnN0YW50LnJhbXAubmV0d29yay9cIixcbiAgICBtaW5PcmRlclZhbHVlOiA1MCxcbiAgICBtYXhPcmRlclZhbHVlOiAyMDAwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IHN1cHBvcnRlZEZpYXRDdXJyZW5jaWVzKFBBWU1FTlRfUFJPVklERVIuUkFNUE5FVFdPUkspLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llc0J5Q2hhaW46IHtcbiAgICAgIFtTVVBQT1JURURfUEFZTUVOVF9ORVRXT1JLLk1BSU5ORVRdOiBbe1xuICAgICAgICB2YWx1ZTogXCJFVEhcIixcbiAgICAgICAgZGlzcGxheTogXCJFVEhcIlxuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogXCJEQUlcIixcbiAgICAgICAgZGlzcGxheTogXCJEQUlcIlxuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogXCJVU0RDXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiVVNEQ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIlVTRFRcIixcbiAgICAgICAgZGlzcGxheTogXCJVU0RUXCJcbiAgICAgIH1dLFxuICAgICAgW1NVUFBPUlRFRF9QQVlNRU5UX05FVFdPUksuTUFUSUNdOiBbe1xuICAgICAgICB2YWx1ZTogXCJNQVRJQ19EQUlcIixcbiAgICAgICAgZGlzcGxheTogXCJEQUlcIlxuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogXCJNQVRJQ19NQVRJQ1wiLFxuICAgICAgICBkaXNwbGF5OiBcIk1BVElDXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiTUFUSUNfVVNEQ1wiLFxuICAgICAgICBkaXNwbGF5OiBcIlVTRENcIlxuICAgICAgfV0sXG4gICAgICAvLyB3aGF0IGFib3V0IEFWQVhDP1xuICAgICAgW1NVUFBPUlRFRF9QQVlNRU5UX05FVFdPUksuQVZBTEFOQ0hFX01BSU5ORVRdOiBbe1xuICAgICAgICB2YWx1ZTogXCJBVkFYXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQVZBWFwiXG4gICAgICB9XSAvLyBUZW1wb3JhcnkgdW5hdmFpbGFibGVcbiAgICAgIC8vIFtTVVBQT1JURURfUEFZTUVOVF9ORVRXT1JLLlhEQUldOiBbeyB2YWx1ZTogJ1hEQUlfWERBSScsIGRpc3BsYXk6ICdYREFJJyB9XSxcblxuICAgIH0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgYXBpOiB0cnVlLFxuICAgIHJlY2VpdmVIaW50OiBcIndhbGxldFRvcFVwLnJlY2VpdmVIaW50UmFtcFwiLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLlhBTlBPT0xdOiB7XG4gICAgbGluZTE6IFwiUGF5Tm93LyBJbnN0YVBheS8gRlBTLyBHb0pla1BheS8gVVBJLyBQcm9tcHRQYXkvIDxicj5WaWV0dGVsUGF5LyBEdWl0Tm93XCIsXG4gICAgbGluZTI6IFwiMi41JSBidXlpbmcsIDMlIHNlbGxpbmdcIixcbiAgICBsaW5lMzogXCIkMiw1MDAgLyBkYXlcIixcbiAgICBzdXBwb3J0UGFnZTogXCJtYWlsdG86c3VwcG9ydEB4YW5wb29sLmNvbVwiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDEwMCxcbiAgICBtYXhPcmRlclZhbHVlOiAyNTAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogc3VwcG9ydGVkRmlhdEN1cnJlbmNpZXMoUEFZTUVOVF9QUk9WSURFUi5YQU5QT09MKSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXNCeUNoYWluOiB7XG4gICAgICBbU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSy5NQUlOTkVUXTogW3tcbiAgICAgICAgdmFsdWU6IFwiRVRIXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiRVRIXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiVVNEVFwiLFxuICAgICAgICBkaXNwbGF5OiBcIlVTRFRcIlxuICAgICAgfV1cbiAgICB9LFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIGFwaTogdHJ1ZSxcbiAgICBzZWxsOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLk1FUkNVUllPXToge1xuICAgIGxpbmUxOiBcIkNyZWRpdC8gRGViaXQgQ2FyZC8gQXBwbGUgUGF5XCIsXG4gICAgbGluZTI6IFwiMy45NSUgb3IgNCBVU0RcIixcbiAgICBsaW5lMzogXCIxMCwwMDDigqwvZGF5LCAyNSwwMDDigqwvbW9cIixcbiAgICBzdXBwb3J0UGFnZTogXCJtYWlsdG86c3VwcG9ydEBtZXJjdXJ5by5pb1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDMwLFxuICAgIG1heE9yZGVyVmFsdWU6IDUwMDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBzdXBwb3J0ZWRGaWF0Q3VycmVuY2llcyhQQVlNRU5UX1BST1ZJREVSLk1FUkNVUllPKSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXNCeUNoYWluOiB7XG4gICAgICBbU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSy5NQUlOTkVUXTogW3tcbiAgICAgICAgdmFsdWU6IFwiRVRIXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiRVRIXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiQkFUXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQkFUXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiVVNEVFwiLFxuICAgICAgICBkaXNwbGF5OiBcIlVTRFRcIlxuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogXCJEQUlcIixcbiAgICAgICAgZGlzcGxheTogXCJEQUlcIlxuICAgICAgfV0sXG4gICAgICBbU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSy5CU0NfTUFJTk5FVF06IFt7XG4gICAgICAgIHZhbHVlOiBcIkJOQlwiLFxuICAgICAgICBkaXNwbGF5OiBcIkJOQlwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIkJVU0RcIixcbiAgICAgICAgZGlzcGxheTogXCJCVVNEXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiMUlOQ0hcIixcbiAgICAgICAgZGlzcGxheTogXCIxSU5DSFwiXG4gICAgICB9XVxuICAgIH0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgYXBpOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLlRSQU5TQUtdOiB7XG4gICAgbGluZTE6IFwiQ3JlZGl0LyBEZWJpdCBDYXJkLyA8YnIvPkJhbmsgVHJhbnNmZXIgKHNlcGEvZ2JwKVwiLFxuICAgIGxpbmUyOiBcIjAuOTklIC0gNS41JSBvciA1IFVTRFwiLFxuICAgIGxpbmUzOiBcIjUwMOKCrC9kYXlcIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL3N1cHBvcnQudHJhbnNhay5jb20vaGMvZW4tVVNcIixcbiAgICBtaW5PcmRlclZhbHVlOiAzMCxcbiAgICBtYXhPcmRlclZhbHVlOiA1MDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBzdXBwb3J0ZWRGaWF0Q3VycmVuY2llcyhQQVlNRU5UX1BST1ZJREVSLlRSQU5TQUspLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llc0J5Q2hhaW46IHtcbiAgICAgIFtTVVBQT1JURURfUEFZTUVOVF9ORVRXT1JLLk1BSU5ORVRdOiBbe1xuICAgICAgICB2YWx1ZTogXCJBQVZFXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQUFWRVwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIkRBSVwiLFxuICAgICAgICBkaXNwbGF5OiBcIkRBSVwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIkVUSFwiLFxuICAgICAgICBkaXNwbGF5OiBcIkVUSFwiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIlVTRENcIixcbiAgICAgICAgZGlzcGxheTogXCJVU0RDXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiVVNEVFwiLFxuICAgICAgICBkaXNwbGF5OiBcIlVTRFRcIlxuICAgICAgfV0sXG4gICAgICBbU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSy5NQVRJQ106IFt7XG4gICAgICAgIHZhbHVlOiBcIkFBVkVcIixcbiAgICAgICAgZGlzcGxheTogXCJBQVZFXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiREFJXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiREFJXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiTUFUSUNcIixcbiAgICAgICAgZGlzcGxheTogXCJNQVRJQ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBcIlVTRENcIixcbiAgICAgICAgZGlzcGxheTogXCJVU0RDXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiVVNEVFwiLFxuICAgICAgICBkaXNwbGF5OiBcIlVTRFRcIlxuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogXCJXRVRIXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiV0VUSFwiXG4gICAgICB9XSxcbiAgICAgIFtTVVBQT1JURURfUEFZTUVOVF9ORVRXT1JLLkJTQ19NQUlOTkVUXTogW3tcbiAgICAgICAgdmFsdWU6IFwiQk5CXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiQk5CXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFwiQlVTRFwiLFxuICAgICAgICBkaXNwbGF5OiBcIkJVU0RcIlxuICAgICAgfV0sXG4gICAgICBbU1VQUE9SVEVEX1BBWU1FTlRfTkVUV09SSy5BVkFMQU5DSEVfTUFJTk5FVF06IFt7XG4gICAgICAgIHZhbHVlOiBcIkFWQVhcIixcbiAgICAgICAgZGlzcGxheTogXCJBVkFYXCJcbiAgICAgIH1dXG4gICAgfSxcbiAgICBpbmNsdWRlRmVlczogdHJ1ZSxcbiAgICBlbmZvcmNlTWF4OiB0cnVlXG4gIH1cbn07XG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGVuOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIkNvbnRpbnVlXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCJBdXRob3JpemF0aW9uIHJlcXVpcmVkXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIkNsaWNrIGNvbnRpbnVlIHRvIHByb2NlZWQgd2l0aCB5b3VyIHJlcXVlc3QgaW4gYSBwb3B1cFwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIkNvb2tpZXMgUmVxdWlyZWRcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwiUGxlYXNlIGVuYWJsZSBjb29raWVzIGluIHlvdXIgYnJvd3NlciBwcmVmZXJlbmNlcyB0byBhY2Nlc3MgVG9ydXNcIixcbiAgICAgIGNsaWNrSGVyZTogXCJNb3JlIEluZm9cIlxuICAgIH1cbiAgfSxcbiAgZGU6IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwiRm9ydHNldHplblwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwiQXV0b3Jpc2llcnVuZyBlcmZvcmRlcmxpY2hcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwiS2xpY2tlbiBTaWUgaW4gZWluZW0gUG9wdXAgYXVmIFdlaXRlciwgdW0gbWl0IElocmVyIEFuZnJhZ2UgZm9ydHp1ZmFocmVuXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwiQ29va2llcyBiZW7DtnRpZ3RcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwiQml0dGUgYWt0aXZpZXJlbiBTaWUgQ29va2llcyBpbiBJaHJlbiBCcm93c2VyZWluc3RlbGx1bmdlbiwgdW0gYXVmIFRvcnVzIHp1enVncmVpZmVuXCIsXG4gICAgICBjbGlja0hlcmU6IFwiTWVociBJbmZvXCJcbiAgICB9XG4gIH0sXG4gIGphOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIue2mee2muOBmeOCi1wiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwi6KqN6Ki844GM5b+F6KaB44Gn44GZXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIue2muihjOOCkuOCr+ODquODg+OCr+OBl+OBpuOAgeODneODg+ODl+OCouODg+ODl+OBp+ODquOCr+OCqOOCueODiOOCkue2muihjOOBl+OBvuOBmVwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIuW/heimgeOBquOCr+ODg+OCreODvFwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCJUb3J1c+OBq+OCouOCr+OCu+OCueOBmeOCi+OBq+OBr+OAgeODluODqeOCpuOCtuOBruioreWumuOBp0Nvb2tpZeOCkuacieWKueOBq+OBl+OBpuOBj+OBoOOBleOBhOOAglwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuips+OBl+OBj+OBr1wiXG4gICAgfVxuICB9LFxuICBrbzoge1xuICAgIGVtYmVkOiB7XG4gICAgICBjb250aW51ZTogXCLqs4Tsho3tlZjri6RcIixcbiAgICAgIGFjdGlvblJlcXVpcmVkOiBcIuyKueyduCDtlYTsmpRcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwi7Yyd7JeF7JeQ7IScIOyalOyyreydhCDsp4TtlontlZjroKTrqbQg6rOE7IaN7J2EIO2BtOumre2VmOyLreyLnOyYpC5cIixcbiAgICAgIGNvb2tpZXNSZXF1aXJlZDogXCLsv6DtgqQg7ZWE7JqUXCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIuu4jOudvOyasOyggCDtmZjqsr0g7ISk7KCV7JeQ7IScIOy/oO2CpOulvCDtmZzshLHtmZTtlZjsl6wgVG9ydXPsl5Ag7JWh7IS47Iqk7ZWY7Iut7Iuc7JikLlwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuuNlCDrp47snYAg7KCV67O0XCJcbiAgICB9XG4gIH0sXG4gIHpoOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIue7p+e7rVwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwi6ZyA6KaB5o6I5p2DXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIuWNleWHu+e7p+e7reS7peWcqOW8ueWHuueql+WPo+S4ree7p+e7reaCqOeahOivt+axglwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIuW/heWhq0Nvb2tpZVwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCLor7flnKjmgqjnmoTmtY/op4jlmajpppbpgInpobnkuK3lkK/nlKhjb29raWXku6Xorr/pl65Ub3J1c+OAglwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuabtOWkmuS/oeaBr1wiXG4gICAgfVxuICB9XG59O1xudmFyIGNvbmZpZ3VyYXRpb24gPSB7XG4gIHN1cHBvcnRlZFZlcmlmaWVyTGlzdDogT2JqZWN0LnZhbHVlcyhXQUxMRVRfVkVSSUZJRVJTKSxcbiAgcGF5bWVudFByb3ZpZGVyczogcGF5bWVudFByb3ZpZGVycyQxLFxuICBhcGk6IFwiaHR0cHM6Ly9hcGkudG9yLnVzXCIsXG4gIHRyYW5zbGF0aW9ucyxcbiAgcHJvZFRvcnVzVXJsOiBcIlwiLFxuICBsb2NhbFN0b3JhZ2VLZXlQcmVmaXg6IFwidG9ydXMtXCJcbn07XG5cbmNvbnN0IHJ1bk9uTG9hZCA9IGZuID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaWYgKHdpbmRvdy5kb2N1bWVudC5ib2R5ICE9IG51bGwpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG59KTtcbmNvbnN0IGh0bWxUb0VsZW1lbnQgPSBodG1sID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICBjb25zdCB0cmltbWVkSHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdHJpbW1lZEh0bWw7XG4gIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59O1xuY29uc3QgaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoaGFuZGxlLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGhhbmRsZXJBcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBoYW5kbGVyQXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBjb25zdCBoYW5kbGVyV3JhcHBlciA9ICgpID0+IHtcbiAgICBoYW5kbGVyKC4uLmhhbmRsZXJBcmdzKTtcbiAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbiAgfTtcblxuICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbn07XG5jb25zdCBoYW5kbGVTdHJlYW0gPSAoaGFuZGxlLCBldmVudE5hbWUsIGhhbmRsZXIpID0+IHtcbiAgY29uc3QgaGFuZGxlcldyYXBwZXIgPSBjaHVuayA9PiB7XG4gICAgaGFuZGxlcihjaHVuayk7XG4gICAgaGFuZGxlLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xuICB9O1xuXG4gIGhhbmRsZS5vbihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbn07XG5hc3luYyBmdW5jdGlvbiBkb2N1bWVudFJlYWR5KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZUV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVzb2x2ZSk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGxvZyA9IGxvZ2xldmVsLmdldExvZ2dlcihcInRvcnVzLWVtYmVkXCIpO1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gIGVycm9yczoge1xuICAgIGRpc2Nvbm5lY3RlZDogKCkgPT4gXCJUb3J1czogTG9zdCBjb25uZWN0aW9uIHRvIFRvcnVzLlwiLFxuICAgIHBlcm1hbmVudGx5RGlzY29ubmVjdGVkOiAoKSA9PiBcIlRvcnVzOiBEaXNjb25uZWN0ZWQgZnJvbSBpZnJhbWUuIFBhZ2UgcmVsb2FkIHJlcXVpcmVkLlwiLFxuICAgIHNlbmRTaXRlTWV0YWRhdGE6ICgpID0+IFwiVG9ydXM6IEZhaWxlZCB0byBzZW5kIHNpdGUgbWV0YWRhdGEuIFRoaXMgaXMgYW4gaW50ZXJuYWwgZXJyb3IsIHBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsXG4gICAgdW5zdXBwb3J0ZWRTeW5jOiBtZXRob2QgPT4gXCJUb3J1czogVGhlIFRvcnVzIEV0aGVyZXVtIHByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgc3luY2hyb25vdXMgbWV0aG9kcyBsaWtlIFwiLmNvbmNhdChtZXRob2QsIFwiIHdpdGhvdXQgYSBjYWxsYmFjayBwYXJhbWV0ZXIuXCIpLFxuICAgIGludmFsaWREdXBsZXhTdHJlYW06ICgpID0+IFwiTXVzdCBwcm92aWRlIGEgTm9kZS5qcy1zdHlsZSBkdXBsZXggc3RyZWFtLlwiLFxuICAgIGludmFsaWRPcHRpb25zOiAobWF4RXZlbnRMaXN0ZW5lcnMsIHNob3VsZFNlbmRNZXRhZGF0YSkgPT4gXCJJbnZhbGlkIG9wdGlvbnMuIFJlY2VpdmVkOiB7IG1heEV2ZW50TGlzdGVuZXJzOiBcIi5jb25jYXQobWF4RXZlbnRMaXN0ZW5lcnMsIFwiLCBzaG91bGRTZW5kTWV0YWRhdGE6IFwiKS5jb25jYXQoc2hvdWxkU2VuZE1ldGFkYXRhLCBcIiB9XCIpLFxuICAgIGludmFsaWRSZXF1ZXN0QXJnczogKCkgPT4gXCJFeHBlY3RlZCBhIHNpbmdsZSwgbm9uLWFycmF5LCBvYmplY3QgYXJndW1lbnQuXCIsXG4gICAgaW52YWxpZFJlcXVlc3RNZXRob2Q6ICgpID0+IFwiJ2FyZ3MubWV0aG9kJyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy5cIixcbiAgICBpbnZhbGlkUmVxdWVzdFBhcmFtczogKCkgPT4gXCInYXJncy5wYXJhbXMnIG11c3QgYmUgYW4gb2JqZWN0IG9yIGFycmF5IGlmIHByb3ZpZGVkLlwiLFxuICAgIGludmFsaWRMb2dnZXJPYmplY3Q6ICgpID0+IFwiJ2FyZ3MubG9nZ2VyJyBtdXN0IGJlIGFuIG9iamVjdCBpZiBwcm92aWRlZC5cIixcbiAgICBpbnZhbGlkTG9nZ2VyTWV0aG9kOiBtZXRob2QgPT4gXCInYXJncy5sb2dnZXInIG11c3QgaW5jbHVkZSByZXF1aXJlZCBtZXRob2QgJ1wiLmNvbmNhdChtZXRob2QsIFwiJy5cIilcbiAgfSxcbiAgaW5mbzoge1xuICAgIGNvbm5lY3RlZDogY2hhaW5JZCA9PiBcIlRvcnVzOiBDb25uZWN0ZWQgdG8gY2hhaW4gd2l0aCBJRCBcXFwiXCIuY29uY2F0KGNoYWluSWQsIFwiXFxcIi5cIilcbiAgfSxcbiAgd2FybmluZ3M6IHtcbiAgICAvLyBkZXByZWNhdGVkIG1ldGhvZHNcbiAgICBlbmFibGVEZXByZWNhdGlvbjogJ1RvcnVzOiBcIlwiZXRoZXJldW0uZW5hYmxlKClcIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiAnICsgJ1BsZWFzZSB1c2UgXCJldGhlcmV1bS5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiKVwiIGluc3RlYWQuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTEwMicsXG4gICAgc2VuZERlcHJlY2F0aW9uOiAnVG9ydXM6IFwiZXRoZXJldW0uc2VuZCguLi4pXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4nICsgJyBQbGVhc2UgdXNlIFwiZXRoZXJldW0uc2VuZEFzeW5jKC4uLilcIiBvciBcImV0aGVyZXVtLnJlcXVlc3QoLi4uKVwiIGluc3RlYWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzJyxcbiAgICBldmVudHM6IHtcbiAgICAgIGNsb3NlOiAnVG9ydXM6IFRoZSBldmVudCBcImNsb3NlXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4gUGxlYXNlIHVzZSBcImRpc2Nvbm5lY3RcIiBpbnN0ZWFkLicgKyBcIlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5M1wiLFxuICAgICAgZGF0YTogJ1RvcnVzOiBUaGUgZXZlbnQgXCJkYXRhXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJyArICdVc2UgXCJtZXNzYWdlXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMjbWVzc2FnZScsXG4gICAgICBuZXR3b3JrQ2hhbmdlZDogJ1RvcnVzOiBUaGUgZXZlbnQgXCJuZXR3b3JrQ2hhbmdlZFwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJyArICcgUGxlYXNlIHVzZSBcImNoYWluQ2hhbmdlZFwiIGluc3RlYWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzJyxcbiAgICAgIG5vdGlmaWNhdGlvbjogJ1RvcnVzOiBUaGUgZXZlbnQgXCJub3RpZmljYXRpb25cIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiAnICsgJ1BsZWFzZSB1c2UgXCJtZXNzYWdlXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMnXG4gICAgfSxcbiAgICBwdWJsaWNDb25maWdTdG9yZTogJ1RvcnVzOiBUaGUgcHJvcGVydHkgXCJwdWJsaWNDb25maWdTdG9yZVwiIGlzIGRlcHJlY2F0ZWQgYW5kIFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLidcbiAgfVxufTtcblxuY29uc3Qge1xuICBwYXltZW50UHJvdmlkZXJzXG59ID0gY29uZmlndXJhdGlvbjtcbmNvbnN0IHZhbGlkYXRlUGF5bWVudFByb3ZpZGVyID0gKHByb3ZpZGVyLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgaWYgKCFwcm92aWRlcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnMsXG4gICAgICBpc1ZhbGlkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm92aWRlciAmJiAhcGF5bWVudFByb3ZpZGVyc1twcm92aWRlcl0pIHtcbiAgICBlcnJvcnMucHJvdmlkZXIgPSBcIkludmFsaWQgUHJvdmlkZXJcIjtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JzLFxuICAgICAgaXNWYWxpZDogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDBcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm92aWRlciA9IHBheW1lbnRQcm92aWRlcnNbcHJvdmlkZXJdO1xuICBjb25zdCBzZWxlY3RlZFBhcmFtcyA9IHBhcmFtcyB8fCB7fTsgLy8gc2V0IGRlZmF1bHQgdmFsdWVzXG4gIC8vIGlmICghc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDdXJyZW5jeSkgW3NlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3VycmVuY3ldID0gc2VsZWN0ZWRQcm92aWRlci52YWxpZEN1cnJlbmNpZXNcbiAgLy8gaWYgKCFzZWxlY3RlZFBhcmFtcy5maWF0VmFsdWUpIHNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZSA9IHNlbGVjdGVkUHJvdmlkZXIubWluT3JkZXJWYWx1ZVxuICAvLyBpZiAoIXNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kpIFtzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZENyeXB0b0N1cnJlbmN5XSA9IHNlbGVjdGVkUHJvdmlkZXIudmFsaWRDcnlwdG9DdXJyZW5jaWVzXG4gIC8vIHZhbGlkYXRpb25zXG5cbiAgaWYgKHNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZSkge1xuICAgIGNvbnN0IHJlcXVlc3RlZE9yZGVyQW1vdW50ID0gK3BhcnNlRmxvYXQoc2VsZWN0ZWRQYXJhbXMuZmlhdFZhbHVlLnRvU3RyaW5nKCkpIHx8IDA7XG4gICAgaWYgKHJlcXVlc3RlZE9yZGVyQW1vdW50IDwgc2VsZWN0ZWRQcm92aWRlci5taW5PcmRlclZhbHVlKSBlcnJvcnMuZmlhdFZhbHVlID0gXCJSZXF1ZXN0ZWQgYW1vdW50IGlzIGxvd2VyIHRoYW4gc3VwcG9ydGVkXCI7XG4gICAgaWYgKHJlcXVlc3RlZE9yZGVyQW1vdW50ID4gc2VsZWN0ZWRQcm92aWRlci5tYXhPcmRlclZhbHVlICYmIHNlbGVjdGVkUHJvdmlkZXIuZW5mb3JjZU1heCkgZXJyb3JzLmZpYXRWYWx1ZSA9IFwiUmVxdWVzdGVkIGFtb3VudCBpcyBoaWdoZXIgdGhhbiBzdXBwb3J0ZWRcIjtcbiAgfVxuXG4gIGlmIChzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5ICYmICFzZWxlY3RlZFByb3ZpZGVyLnZhbGlkQ3VycmVuY2llcy5pbmNsdWRlcyhzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5KSkge1xuICAgIGVycm9ycy5zZWxlY3RlZEN1cnJlbmN5ID0gXCJVbnN1cHBvcnRlZCBjdXJyZW5jeVwiO1xuICB9XG5cbiAgaWYgKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kpIHtcbiAgICBjb25zdCB2YWxpZENyeXB0b0N1cnJlbmNpZXNCeUNoYWluID0gT2JqZWN0LnZhbHVlcyhzZWxlY3RlZFByb3ZpZGVyLnZhbGlkQ3J5cHRvQ3VycmVuY2llc0J5Q2hhaW4pLmZsYXQoKS5tYXAoY3VycmVuY3kgPT4gY3VycmVuY3kudmFsdWUpO1xuICAgIGNvbnN0IGZpbmFsQ3J5cHRvQ3VycmVuY3kgPSBwcm92aWRlciA9PT0gUEFZTUVOVF9QUk9WSURFUi5NT09OUEFZID8gc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeS50b0xvd2VyQ2FzZSgpIDogc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeTtcbiAgICBpZiAodmFsaWRDcnlwdG9DdXJyZW5jaWVzQnlDaGFpbiAmJiAhdmFsaWRDcnlwdG9DdXJyZW5jaWVzQnlDaGFpbi5pbmNsdWRlcyhmaW5hbENyeXB0b0N1cnJlbmN5KSkgZXJyb3JzLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kgPSBcIlVuc3VwcG9ydGVkIGNyeXB0b0N1cnJlbmN5XCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVycm9ycyxcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMFxuICB9O1xufTsgLy8gdXRpbGl0eSBmdW5jdGlvbnNcblxuLyoqXG4gKiBqc29uLXJwYy1lbmdpbmUgbWlkZGxld2FyZSB0aGF0IGxvZ3MgUlBDIGVycm9ycyBhbmQgYW5kIHZhbGlkYXRlcyByZXEubWV0aG9kLlxuICpcbiAqIEBwYXJhbSBsb2cgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICogQHJldHVybnMgIGpzb24tcnBjLWVuZ2luZSBtaWRkbGV3YXJlIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JNaWRkbGV3YXJlKCkge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgLy8ganNvbi1ycGMtZW5naW5lIHdpbGwgdGVybWluYXRlIHRoZSByZXF1ZXN0IHdoZW4gaXQgbm90aWNlcyB0aGlzIGVycm9yXG4gICAgaWYgKHR5cGVvZiByZXEubWV0aG9kICE9PSBcInN0cmluZ1wiIHx8ICFyZXEubWV0aG9kKSB7XG4gICAgICByZXMuZXJyb3IgPSBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCJUaGUgcmVxdWVzdCAnbWV0aG9kJyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy5cIixcbiAgICAgICAgZGF0YTogcmVxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBuZXh0KGRvbmUgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlcnJvclxuICAgICAgfSA9IHJlcztcblxuICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgfVxuXG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzayAtIFJQQyBFcnJvcjogXCIuY29uY2F0KGVycm9yLm1lc3NhZ2UpLCBlcnJvcik7XG4gICAgICByZXR1cm4gZG9uZSgpO1xuICAgIH0pO1xuICB9O1xufSAvLyByZXNvbHZlIHJlc3BvbnNlLnJlc3VsdCBvciByZXNwb25zZSwgcmVqZWN0IGVycm9yc1xuLyoqXG4gKiBMb2dzIGEgc3RyZWFtIGRpc2Nvbm5lY3Rpb24gZXJyb3IuIEVtaXRzIGFuICdlcnJvcicgaWYgZ2l2ZW4gYW5cbiAqIEV2ZW50RW1pdHRlciB0aGF0IGhhcyBsaXN0ZW5lcnMgZm9yIHRoZSAnZXJyb3InIGV2ZW50LlxuICpcbiAqIEBwYXJhbSBsb2cgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICogQHBhcmFtIHJlbW90ZUxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBkaXNjb25uZWN0ZWQgc3RyZWFtLlxuICogQHBhcmFtIGVycm9yIC0gVGhlIGFzc29jaWF0ZWQgZXJyb3IgdG8gbG9nLlxuICogQHBhcmFtIGVtaXR0ZXIgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICovXG5cbmZ1bmN0aW9uIGxvZ1N0cmVhbURpc2Nvbm5lY3RXYXJuaW5nKHJlbW90ZUxhYmVsLCBlcnJvciwgZW1pdHRlcikge1xuICBsZXQgd2FybmluZ01zZyA9IFwiTWV0YU1hc2s6IExvc3QgY29ubmVjdGlvbiB0byBcXFwiXCIuY29uY2F0KHJlbW90ZUxhYmVsLCBcIlxcXCIuXCIpO1xuXG4gIGlmIChlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwICYmIGVycm9yLnN0YWNrKSB7XG4gICAgd2FybmluZ01zZyArPSBcIlxcblwiLmNvbmNhdChlcnJvci5zdGFjayk7XG4gIH1cblxuICBsb2cud2Fybih3YXJuaW5nTXNnKTtcblxuICBpZiAoZW1pdHRlciAmJiBlbWl0dGVyLmxpc3RlbmVyQ291bnQoXCJlcnJvclwiKSA+IDApIHtcbiAgICBlbWl0dGVyLmVtaXQoXCJlcnJvclwiLCB3YXJuaW5nTXNnKTtcbiAgfVxufVxuY29uc3QgZ2V0UHJlb3Blbkluc3RhbmNlSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcbmNvbnN0IGdldFRvcnVzVXJsID0gYXN5bmMgKGJ1aWxkRW52LCBpbnRlZ3JpdHkpID0+IHtcbiAgbGV0IHRvcnVzVXJsO1xuICBsZXQgbG9nTGV2ZWw7IC8vIERvIG5vdCBjaGFuZ2UgdGhpcyBsaW5lXG5cbiAgY29uc3QgdmVyc2lvbiA9IFwiMS4yNy4yXCI7XG4gIGxldCB2ZXJzaW9uVXNlZCA9IGludGVncml0eS52ZXJzaW9uIHx8IHZlcnNpb247XG5cbiAgdHJ5IHtcbiAgICBpZiAoKGJ1aWxkRW52ID09PSBcImJpbmFuY2VcIiB8fCBidWlsZEVudiA9PT0gXCJwcm9kdWN0aW9uXCIpICYmICFpbnRlZ3JpdHkudmVyc2lvbikge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgaWYgKCFjb25maWd1cmF0aW9uLnByb2RUb3J1c1VybCkgcmVzcG9uc2UgPSBhd2FpdCBnZXQoXCJcIi5jb25jYXQoY29uZmlndXJhdGlvbi5hcGksIFwiL2xhdGVzdHZlcnNpb24/bmFtZT1AdG9ydXNsYWJzL3RvcnVzLWVtYmVkJnZlcnNpb249XCIpLmNvbmNhdCh2ZXJzaW9uKSwge30sIHtcbiAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICB9KTtlbHNlIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiBjb25maWd1cmF0aW9uLnByb2RUb3J1c1VybFxuICAgICAgfTtcbiAgICAgIHZlcnNpb25Vc2VkID0gcmVzcG9uc2UuZGF0YTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXNcblxuICAgICAgY29uZmlndXJhdGlvbi5wcm9kVG9ydXNVcmwgPSByZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoZXJyb3IsIFwidW5hYmxlIHRvIGZldGNoIGxhdGVzdCB2ZXJzaW9uXCIpO1xuICB9XG5cbiAgbG9nLmluZm8oXCJ2ZXJzaW9uIHVzZWQ6IFwiLCB2ZXJzaW9uVXNlZCk7XG5cbiAgc3dpdGNoIChidWlsZEVudikge1xuICAgIGNhc2UgXCJiaW5hbmNlXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly9iaW5hbmNlLnRvci51cy92XCIuY29uY2F0KHZlcnNpb25Vc2VkKTtcbiAgICAgIGxvZ0xldmVsID0gXCJpbmZvXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJ0ZXN0aW5nXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly90ZXN0aW5nLnRvci51c1wiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJscmNcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL2xyYy50b3IudXNcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiYmV0YVwiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vYmV0YS50b3IudXNcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiZGV2ZWxvcG1lbnRcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQwNTBcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vYXBwLnRvci51cy92XCIuY29uY2F0KHZlcnNpb25Vc2VkKTtcbiAgICAgIGxvZ0xldmVsID0gXCJlcnJvclwiO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcnVzVXJsLFxuICAgIGxvZ0xldmVsXG4gIH07XG59O1xuY29uc3QgZ2V0VXNlckxhbmd1YWdlID0gKCkgPT4ge1xuICBsZXQgdXNlckxhbmd1YWdlID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCBcImVuLVVTXCI7XG4gIGNvbnN0IHVzZXJMYW5ndWFnZXMgPSB1c2VyTGFuZ3VhZ2Uuc3BsaXQoXCItXCIpO1xuICB1c2VyTGFuZ3VhZ2UgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlndXJhdGlvbi50cmFuc2xhdGlvbnMsIHVzZXJMYW5ndWFnZXNbMF0pID8gdXNlckxhbmd1YWdlc1swXSA6IFwiZW5cIjtcbiAgcmV0dXJuIHVzZXJMYW5ndWFnZTtcbn07XG5jb25zdCBFTUlUVEVEX05PVElGSUNBVElPTlMgPSBbXCJldGhfc3Vic2NyaXB0aW9uXCIgLy8gcGVyIGV0aC1qc29uLXJwYy1maWx0ZXJzL3N1YnNjcmlwdGlvbk1hbmFnZXJcbl07XG5jb25zdCBOT09QID0gKCkgPT4gey8vIGVtcHR5IGZ1bmN0aW9uXG59O1xuY29uc3QgRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPVyA9IFwiZGlyZWN0b3JpZXM9MCx0aXRsZWJhcj0wLHRvb2xiYXI9MCxzdGF0dXM9MCxsb2NhdGlvbj0wLG1lbnViYXI9MCxoZWlnaHQ9NjYwLHdpZHRoPTM3NVwiO1xuY29uc3QgRkVBVFVSRVNfREVGQVVMVF9XQUxMRVRfV0lORE9XID0gXCJkaXJlY3Rvcmllcz0wLHRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD03NDAsd2lkdGg9MTMxNVwiO1xuY29uc3QgRkVBVFVSRVNfQ09ORklSTV9XSU5ET1cgPSBcImRpcmVjdG9yaWVzPTAsdGl0bGViYXI9MCx0b29sYmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxtZW51YmFyPTAsaGVpZ2h0PTcwMCx3aWR0aD00NTBcIjtcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcblxuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZSAmJiAoIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICBlLmNvZGUgPT09IDIyIHx8IC8vIEZpcmVmb3hcbiAgICBlLmNvZGUgPT09IDEwMTQgfHwgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fCAvLyBGaXJlZm94XG4gICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMDtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0UG9wdXBGZWF0dXJlcygpIHtcbiAgLy8gRml4ZXMgZHVhbC1zY3JlZW4gcG9zaXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vc3QgYnJvd3NlcnMgICAgICBGaXJlZm94XG4gIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlblg7XG4gIGNvbnN0IGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogd2luZG93LnNjcmVlblk7XG4gIGNvbnN0IHcgPSAxMjAwO1xuICBjb25zdCBoID0gNzAwO1xuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICBjb25zdCBzeXN0ZW1ab29tID0gMTsgLy8gTm8gcmVsaWFibGUgZXN0aW1hdGVcblxuICBjb25zdCBsZWZ0ID0gTWF0aC5hYnMoKHdpZHRoIC0gdykgLyAyIC8gc3lzdGVtWm9vbSArIGR1YWxTY3JlZW5MZWZ0KTtcbiAgY29uc3QgdG9wID0gTWF0aC5hYnMoKGhlaWdodCAtIGgpIC8gMiAvIHN5c3RlbVpvb20gKyBkdWFsU2NyZWVuVG9wKTtcbiAgY29uc3QgZmVhdHVyZXMgPSBcInRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD1cIi5jb25jYXQoaCAvIHN5c3RlbVpvb20sIFwiLHdpZHRoPVwiKS5jb25jYXQodyAvIHN5c3RlbVpvb20sIFwiLHRvcD1cIikuY29uY2F0KHRvcCwgXCIsbGVmdD1cIikuY29uY2F0KGxlZnQpO1xuICByZXR1cm4gZmVhdHVyZXM7XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblNhZmVFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDsgLy8gcmVzb2x2ZSByZXNwb25zZS5yZXN1bHQsIHJlamVjdCBlcnJvcnNcblxuY29uc3QgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICBsZXQgdW53cmFwUmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4gKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnJvciB8fCByZXNwb25zZS5lcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdChlcnJvciB8fCByZXNwb25zZS5lcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1bndyYXBSZXN1bHQgfHwgQXJyYXkuaXNBcnJheShyZXNwb25zZSkgPyByZXNvbHZlKHJlc3BvbnNlKSA6IHJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcbiAgfTtcbn07XG5cbmNsYXNzIFRvcnVzSW5wYWdlUHJvdmlkZXIgZXh0ZW5kcyBTYWZlRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRoZSBjaGFpbiBJRCBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBFdGhlcmV1bSBjaGFpbi5cbiAgICogU2VlIFtjaGFpbklkLm5ldHdvcmtde0BsaW5rIGh0dHBzOi8vY2hhaW5pZC5uZXR3b3JrfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSB1c2VyJ3MgY3VycmVudGx5IHNlbGVjdGVkIEV0aGVyZXVtIGFkZHJlc3MuXG4gICAqIElmIG51bGwsIE1ldGFNYXNrIGlzIGVpdGhlciBsb2NrZWQgb3IgdGhlIHVzZXIgaGFzIG5vdCBwZXJtaXR0ZWQgYW55XG4gICAqIGFkZHJlc3NlcyB0byBiZSB2aWV3ZWQuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0aW5nIHRoYXQgdGhpcyBwcm92aWRlciBpcyBhIE1ldGFNYXNrIHByb3ZpZGVyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubmVjdGlvblN0cmVhbSkge1xuICAgIGxldCB7XG4gICAgICBtYXhFdmVudExpc3RlbmVycyA9IDEwMCxcbiAgICAgIHNob3VsZFNlbmRNZXRhZGF0YSA9IHRydWUsXG4gICAgICBqc29uUnBjU3RyZWFtTmFtZSA9IFwicHJvdmlkZXJcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGFpbklkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZWxlY3RlZEFkZHJlc3NcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9ycGNFbmdpbmVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5ldHdvcmtWZXJzaW9uXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaG91bGRTZW5kTWV0YWRhdGFcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzVG9ydXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9wdWJsaWNDb25maWdTdG9yZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidHJ5UHJlb3BlbkhhbmRsZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5hYmxlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9qc29uUnBjQ29ubmVjdGlvblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3NlbnRXYXJuaW5nc1wiLCB7XG4gICAgICAvLyBtZXRob2RzXG4gICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgZXhwZXJpbWVudGFsTWV0aG9kczogZmFsc2UsXG4gICAgICBzZW5kOiBmYWxzZSxcbiAgICAgIHB1YmxpY0NvbmZpZ1N0b3JlOiBmYWxzZSxcbiAgICAgIC8vIGV2ZW50c1xuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICAgIG5ldHdvcmtDaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgbm90aWZpY2F0aW9uOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFkdXBsZXgoY29ubmVjdGlvblN0cmVhbSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5lcnJvcnMuaW52YWxpZER1cGxleFN0cmVhbSgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzVG9ydXMgPSB0cnVlO1xuICAgIHRoaXMuc2V0TWF4TGlzdGVuZXJzKG1heEV2ZW50TGlzdGVuZXJzKTsgLy8gcHJpdmF0ZSBzdGF0ZVxuXG4gICAgdGhpcy5fc3RhdGUgPSBfb2JqZWN0U3ByZWFkJDEoe30sIFRvcnVzSW5wYWdlUHJvdmlkZXIuX2RlZmF1bHRTdGF0ZSk7IC8vIHB1YmxpYyBzdGF0ZVxuXG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBudWxsO1xuICAgIHRoaXMubmV0d29ya1ZlcnNpb24gPSBudWxsO1xuICAgIHRoaXMuY2hhaW5JZCA9IG51bGw7XG4gICAgdGhpcy5zaG91bGRTZW5kTWV0YWRhdGEgPSBzaG91bGRTZW5kTWV0YWRhdGE7IC8vIGJpbmQgZnVuY3Rpb25zICh0byBwcmV2ZW50IGUuZy4gd2ViM0AxLnggZnJvbSBtYWtpbmcgdW5ib3VuZCBjYWxscylcblxuICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QgPSB0aGlzLl9oYW5kbGVDb25uZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlRGlzY29ubmVjdCA9IHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0ID0gdGhpcy5faGFuZGxlU3RyZWFtRGlzY29ubmVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NlbmRTeW5jID0gdGhpcy5fc2VuZFN5bmMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ycGNSZXF1ZXN0ID0gdGhpcy5fcnBjUmVxdWVzdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uID0gdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9pbml0aWFsaXplU3RhdGUgPSB0aGlzLl9pbml0aWFsaXplU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlcXVlc3QgPSB0aGlzLnJlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmQgPSB0aGlzLnNlbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRBc3luYyA9IHRoaXMuc2VuZEFzeW5jLmJpbmQodGhpcyk7IC8vIHRoaXMuZW5hYmxlID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKTtcbiAgICAvLyBzZXR1cCBjb25uZWN0aW9uU3RyZWFtIG11bHRpcGxleGluZ1xuXG4gICAgY29uc3QgbXV4ID0gbmV3IE9iamVjdE11bHRpcGxleCgpO1xuICAgIHB1bXAoY29ubmVjdGlvblN0cmVhbSwgbXV4LCBjb25uZWN0aW9uU3RyZWFtLCB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0LmJpbmQodGhpcywgXCJNZXRhTWFza1wiKSk7IC8vIHN1YnNjcmliZSB0byBtZXRhbWFzayBwdWJsaWMgY29uZmlnIChvbmUtd2F5KVxuXG4gICAgdGhpcy5fcHVibGljQ29uZmlnU3RvcmUgPSBuZXcgT2JzZXJ2YWJsZVN0b3JlKHtcbiAgICAgIHN0b3JhZ2VLZXk6IFwiTWV0YW1hc2stQ29uZmlnXCJcbiAgICB9KTsgLy8gaGFuZGxlIGlzVW5sb2NrZWQgY2hhbmdlcywgYW5kIGNoYWluQ2hhbmdlZCBhbmQgbmV0d29ya0NoYW5nZWQgZXZlbnRzXG4gICAgLy8gdGhpcy5fcHVibGljQ29uZmlnU3RvcmUuc3Vic2NyaWJlKChzdHJpbmdpZmllZFN0YXRlKSA9PiB7XG4gICAgLy8gICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIHN0b3JlIGFzIHN0cmluZ1xuICAgIC8vICAgY29uc3Qgc3RhdGUgPSBKU09OLnBhcnNlKHN0cmluZ2lmaWVkU3RhdGUgYXMgdW5rbm93biBhcyBzdHJpbmcpO1xuICAgIC8vICAgaWYgKFwiaXNVbmxvY2tlZFwiIGluIHN0YXRlICYmIHN0YXRlLmlzVW5sb2NrZWQgIT09IHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQpIHtcbiAgICAvLyAgICAgdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCA9IHN0YXRlLmlzVW5sb2NrZWQ7XG4gICAgLy8gICAgIGlmICghdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCkge1xuICAgIC8vICAgICAgIC8vIGFjY291bnRzIGFyZSBuZXZlciBleHBvc2VkIHdoZW4gdGhlIGV4dGVuc2lvbiBpcyBsb2NrZWRcbiAgICAvLyAgICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQoW10pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIC8vIHRoaXMgd2lsbCBnZXQgdGhlIGV4cG9zZWQgYWNjb3VudHMsIGlmIGFueVxuICAgIC8vICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KFxuICAgIC8vICAgICAgICAgICB7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiwgcGFyYW1zOiBbXSB9LFxuICAgIC8vICAgICAgICAgICBOT09QLFxuICAgIC8vICAgICAgICAgICB0cnVlIC8vIGluZGljYXRpbmcgdGhhdCBldGhfYWNjb3VudHMgX3Nob3VsZF8gdXBkYXRlIGFjY291bnRzXG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyAgICAgICAgIC8vIFN3YWxsb3cgZXJyb3JcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmIChcInNlbGVjdGVkQWRkcmVzc1wiIGluIHN0YXRlICYmIHRoaXMuc2VsZWN0ZWRBZGRyZXNzICE9PSBzdGF0ZS5zZWxlY3RlZEFkZHJlc3MpIHtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KFxuICAgIC8vICAgICAgICAgeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsIHBhcmFtczogW10gfSxcbiAgICAvLyAgICAgICAgIE5PT1AsXG4gICAgLy8gICAgICAgICB0cnVlIC8vIGluZGljYXRpbmcgdGhhdCBldGhfYWNjb3VudHMgX3Nob3VsZF8gdXBkYXRlIGFjY291bnRzXG4gICAgLy8gICAgICAgKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoXykge1xuICAgIC8vICAgICAgIC8vIFN3YWxsb3cgZXJyb3JcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgLy8gRW1pdCBjaGFpbkNoYW5nZWQgZXZlbnQgb24gY2hhaW4gY2hhbmdlXG4gICAgLy8gICBpZiAoXCJjaGFpbklkXCIgaW4gc3RhdGUgJiYgc3RhdGUuY2hhaW5JZCAhPT0gdGhpcy5jaGFpbklkKSB7XG4gICAgLy8gICAgIHRoaXMuY2hhaW5JZCA9IHN0YXRlLmNoYWluSWQgfHwgbnVsbDtcbiAgICAvLyAgICAgdGhpcy5lbWl0KFwiY2hhaW5DaGFuZ2VkXCIsIHRoaXMuY2hhaW5JZCk7XG4gICAgLy8gICAgIC8vIGluZGljYXRlIHRoYXQgd2UndmUgY29ubmVjdGVkLCBmb3IgRUlQLTExOTMgY29tcGxpYW5jZVxuICAgIC8vICAgICAvLyB3ZSBkbyB0aGlzIGhlcmUgc28gdGhhdCBpZnJhbWUgY2FuIGluaXRpYWxpemVcbiAgICAvLyAgICAgaWYgKCF0aGlzLl9zdGF0ZS5oYXNFbWl0dGVkQ29ubmVjdGlvbikge1xuICAgIC8vICAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QodGhpcy5jaGFpbklkKTtcbiAgICAvLyAgICAgICB0aGlzLl9zdGF0ZS5oYXNFbWl0dGVkQ29ubmVjdGlvbiA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIC8vIEVtaXQgbmV0d29ya0NoYW5nZWQgZXZlbnQgb24gbmV0d29yayBjaGFuZ2VcbiAgICAvLyAgIGlmIChcIm5ldHdvcmtWZXJzaW9uXCIgaW4gc3RhdGUgJiYgc3RhdGUubmV0d29ya1ZlcnNpb24gIT09IHRoaXMubmV0d29ya1ZlcnNpb24pIHtcbiAgICAvLyAgICAgdGhpcy5uZXR3b3JrVmVyc2lvbiA9IHN0YXRlLm5ldHdvcmtWZXJzaW9uIHx8IG51bGw7XG4gICAgLy8gICAgIHRoaXMuZW1pdChcIm5ldHdvcmtDaGFuZ2VkXCIsIHRoaXMubmV0d29ya1ZlcnNpb24pO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgcHVtcChtdXguY3JlYXRlU3RyZWFtKFwicHVibGljQ29uZmlnXCIpLCBzdG9yZUFzU3RyZWFtKHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlKSwgLy8gUlBDIHJlcXVlc3RzIHNob3VsZCBzdGlsbCB3b3JrIGlmIG9ubHkgdGhpcyBzdHJlYW0gZmFpbHNcbiAgICBsb2dTdHJlYW1EaXNjb25uZWN0V2FybmluZy5iaW5kKHRoaXMsIFwiTWV0YU1hc2sgUHVibGljQ29uZmlnU3RvcmVcIikpOyAvLyBpZ25vcmUgcGhpc2hpbmcgd2FybmluZyBtZXNzYWdlIChoYW5kbGVkIGVsc2V3aGVyZSlcblxuICAgIG11eC5pZ25vcmVTdHJlYW0oXCJwaGlzaGluZ1wiKTsgLy8gc2V0dXAgb3duIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vIEVJUC0xMTkzIGNvbm5lY3RcblxuICAgIHRoaXMub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9KTsgLy8gY29ubmVjdCB0byBhc3luYyBwcm92aWRlclxuXG4gICAgY29uc3QganNvblJwY0Nvbm5lY3Rpb24gPSBjcmVhdGVTdHJlYW1NaWRkbGV3YXJlKCk7XG4gICAgcHVtcChqc29uUnBjQ29ubmVjdGlvbi5zdHJlYW0sIG11eC5jcmVhdGVTdHJlYW0oanNvblJwY1N0cmVhbU5hbWUpLCBqc29uUnBjQ29ubmVjdGlvbi5zdHJlYW0sIHRoaXMuX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QuYmluZCh0aGlzLCBcIk1ldGFNYXNrIFJwY1Byb3ZpZGVyXCIpKTsgLy8gaGFuZGxlIFJQQyByZXF1ZXN0cyB2aWEgZGFwcC1zaWRlIHJwYyBlbmdpbmVcblxuICAgIGNvbnN0IHJwY0VuZ2luZSA9IG5ldyBKUlBDRW5naW5lKCk7XG4gICAgcnBjRW5naW5lLnB1c2goY3JlYXRlSWRSZW1hcE1pZGRsZXdhcmUoKSk7XG4gICAgcnBjRW5naW5lLnB1c2goY3JlYXRlRXJyb3JNaWRkbGV3YXJlKCkpO1xuICAgIHJwY0VuZ2luZS5wdXNoKGpzb25ScGNDb25uZWN0aW9uLm1pZGRsZXdhcmUpO1xuICAgIHRoaXMuX3JwY0VuZ2luZSA9IHJwY0VuZ2luZTsgLy8ganNvbiBycGMgbm90aWZpY2F0aW9uIGxpc3RlbmVyXG5cbiAgICBqc29uUnBjQ29ubmVjdGlvbi5ldmVudHMub24oXCJub3RpZmljYXRpb25cIiwgcGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGFyYW1zXG4gICAgICB9ID0gcGF5bG9hZDtcblxuICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfYWNjb3VudHNDaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfdW5sb2NrU3RhdGVDaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVW5sb2NrU3RhdGVDaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfY2hhaW5DaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2hhaW5DaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKEVNSVRURURfTk9USUZJQ0FUSU9OUy5pbmNsdWRlcyhwYXlsb2FkLm1ldGhvZCkpIHtcbiAgICAgICAgLy8gRUlQIDExOTMgc3Vic2NyaXB0aW9ucywgcGVyIGV0aC1qc29uLXJwYy1maWx0ZXJzL3N1YnNjcmlwdGlvbk1hbmFnZXJcbiAgICAgICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBwYXlsb2FkKTsgLy8gZGVwcmVjYXRlZFxuXG4gICAgICAgIHRoaXMuZW1pdChcIm5vdGlmaWNhdGlvblwiLCBwYXJhbXMucmVzdWx0KTtcbiAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCB7XG4gICAgICAgICAgdHlwZTogbWV0aG9kLFxuICAgICAgICAgIGRhdGE6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSBmb3Igb2xkZXIgbm9uIEVJUCAxMTkzIHN1YnNjcmlwdGlvbnNcbiAgICAgIC8vIHRoaXMuZW1pdCgnZGF0YScsIG51bGwsIHBheWxvYWQpXG5cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwdWJsaWNDb25maWdTdG9yZSgpIHtcbiAgICBpZiAoIXRoaXMuX3NlbnRXYXJuaW5ncy5wdWJsaWNDb25maWdTdG9yZSkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3MucHVibGljQ29uZmlnU3RvcmUpO1xuICAgICAgdGhpcy5fc2VudFdhcm5pbmdzLnB1YmxpY0NvbmZpZ1N0b3JlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcHVibGljQ29uZmlnU3RvcmU7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgaW5wYWdlIHByb3ZpZGVyIGlzIGNvbm5lY3RlZCB0byBUb3J1cy5cbiAgICovXG5cblxuICBpc0Nvbm5lY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQ7XG4gIH1cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYW4gUlBDIHJlcXVlc3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdpdGggdGhlIGdpdmVuIHBhcmFtcy5cbiAgICogUmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBtZXRob2QgY2FsbCwgb3IgcmVqZWN0cyBvbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3MgLSBUaGUgUlBDIHJlcXVlc3QgYXJndW1lbnRzLlxuICAgKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIFJQQyBtZXRob2QsXG4gICAqIG9yIHJlamVjdHMgaWYgYW4gZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gICAqL1xuXG5cbiAgYXN5bmMgcmVxdWVzdChhcmdzKSB7XG4gICAgaWYgKCFhcmdzIHx8IHR5cGVvZiBhcmdzICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgIHRocm93IGV0aEVycm9ycy5ycGMuaW52YWxpZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuaW52YWxpZFJlcXVlc3RBcmdzKCksXG4gICAgICAgIGRhdGE6IGFyZ3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBhcmdzO1xuXG4gICAgaWYgKHR5cGVvZiBtZXRob2QgIT09IFwic3RyaW5nXCIgfHwgbWV0aG9kLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgZXRoRXJyb3JzLnJwYy5pbnZhbGlkUmVxdWVzdCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VzLmVycm9ycy5pbnZhbGlkUmVxdWVzdE1ldGhvZCgpLFxuICAgICAgICBkYXRhOiBhcmdzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiAodHlwZW9mIHBhcmFtcyAhPT0gXCJvYmplY3RcIiB8fCBwYXJhbXMgPT09IG51bGwpKSB7XG4gICAgICB0aHJvdyBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMuZXJyb3JzLmludmFsaWRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICAgIGRhdGE6IGFyZ3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9ycGNSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBwYXJhbXNcbiAgICAgIH0sIGdldFJwY1Byb21pc2VDYWxsYmFjayhyZXNvbHZlLCByZWplY3QpKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU3VibWl0cyBhbiBSUEMgcmVxdWVzdCBwZXIgdGhlIGdpdmVuIEpTT04tUlBDIHJlcXVlc3Qgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gcGF5bG9hZCAtIFRoZSBSUEMgcmVxdWVzdCBvYmplY3QuXG4gICAqIEBwYXJhbSBjYiAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG5cblxuICBzZW5kQXN5bmMocGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9ycGNSZXF1ZXN0KHBheWxvYWQsIGNhbGxiYWNrKTtcbiAgfVxuICAvKipcbiAgICogV2Ugb3ZlcnJpZGUgdGhlIGZvbGxvd2luZyBldmVudCBtZXRob2RzIHNvIHRoYXQgd2UgY2FuIHdhcm4gY29uc3VtZXJzXG4gICAqIGFib3V0IGRlcHJlY2F0ZWQgZXZlbnRzOlxuICAgKiAgIGFkZExpc3RlbmVyLCBvbiwgb25jZSwgcHJlcGVuZExpc3RlbmVyLCBwcmVwZW5kT25jZUxpc3RlbmVyXG4gICAqL1xuXG5cbiAgYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIG9uY2UoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIub25jZShldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHByZXBlbmRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5wcmVwZW5kTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBwcmVwZW5kT25jZUxpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLnByZXBlbmRPbmNlTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH0gLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGhlbHBlci5cbiAgICogUG9wdWxhdGVzIGluaXRpYWwgc3RhdGUgYnkgY2FsbGluZyAnd2FsbGV0X2dldFByb3ZpZGVyU3RhdGUnIGFuZCBlbWl0c1xuICAgKiBuZWNlc3NhcnkgZXZlbnRzLlxuICAgKi9cblxuXG4gIGFzeW5jIF9pbml0aWFsaXplU3RhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYWNjb3VudHMsXG4gICAgICAgIGNoYWluSWQsXG4gICAgICAgIGlzVW5sb2NrZWQsXG4gICAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIndhbGxldF9nZXRQcm92aWRlclN0YXRlXCJcbiAgICAgIH0pOyAvLyBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGNvbm5lY3RlZCwgZm9yIEVJUC0xMTkzIGNvbXBsaWFuY2VcblxuICAgICAgdGhpcy5lbWl0KFwiY29ubmVjdFwiLCB7XG4gICAgICAgIGNoYWluSWRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVDaGFpbkNoYW5nZWQoe1xuICAgICAgICBjaGFpbklkLFxuICAgICAgICBuZXR3b3JrVmVyc2lvblxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCh7XG4gICAgICAgIGFjY291bnRzLFxuICAgICAgICBpc1VubG9ja2VkXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKGFjY291bnRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IEZhaWxlZCB0byBnZXQgaW5pdGlhbCBzdGF0ZS4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBsb2cuaW5mbyhcImluaXRpYWxpemVkIHN0YXRlXCIpO1xuICAgICAgdGhpcy5fc3RhdGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lbWl0KFwiX2luaXRpYWxpemVkXCIpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW50ZXJuYWwgUlBDIG1ldGhvZC4gRm9yd2FyZHMgcmVxdWVzdHMgdG8gYmFja2dyb3VuZCB2aWEgdGhlIFJQQyBlbmdpbmUuXG4gICAqIEFsc28gcmVtYXAgaWRzIGluYm91bmQgYW5kIG91dGJvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcGF5bG9hZCAtIFRoZSBSUEMgcmVxdWVzdCBvYmplY3QuXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjb25zdW1lcidzIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gaXNJbnRlcm5hbCAtIGZhbHNlIC0gV2hldGhlciB0aGUgcmVxdWVzdCBpcyBpbnRlcm5hbC5cbiAgICovXG5cblxuICBfcnBjUmVxdWVzdChwYXlsb2FkLCBjYWxsYmFjaykge1xuICAgIGxldCBpc0ludGVybmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICBsZXQgY2IgPSBjYWxsYmFjaztcbiAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQ7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3BheWxvYWQpKSB7XG4gICAgICBpZiAoIV9wYXlsb2FkLmpzb25ycGMpIHtcbiAgICAgICAgX3BheWxvYWQuanNvbnJwYyA9IFwiMi4wXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChfcGF5bG9hZC5tZXRob2QgPT09IFwiZXRoX2FjY291bnRzXCIgfHwgX3BheWxvYWQubWV0aG9kID09PSBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIikge1xuICAgICAgICAvLyBoYW5kbGUgYWNjb3VudHMgY2hhbmdpbmdcbiAgICAgICAgY2IgPSAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQocmVzLnJlc3VsdCB8fCBbXSwgX3BheWxvYWQubWV0aG9kID09PSBcImV0aF9hY2NvdW50c1wiLCBpc0ludGVybmFsKTtcblxuICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoX3BheWxvYWQubWV0aG9kID09PSBcIndhbGxldF9nZXRQcm92aWRlclN0YXRlXCIpIHtcbiAgICAgICAgdGhpcy5fcnBjRW5naW5lLmhhbmRsZShwYXlsb2FkLCBjYik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudHJ5UHJlb3BlbkhhbmRsZShfcGF5bG9hZCwgY2IpO1xuICB9XG5cbiAgc2VuZChtZXRob2RPclBheWxvYWQsIGNhbGxiYWNrT3JBcmdzKSB7XG4gICAgaWYgKCF0aGlzLl9zZW50V2FybmluZ3Muc2VuZCkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3Muc2VuZERlcHJlY2F0aW9uKTtcbiAgICAgIHRoaXMuX3NlbnRXYXJuaW5ncy5zZW5kID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1ldGhvZE9yUGF5bG9hZCA9PT0gXCJzdHJpbmdcIiAmJiAoIWNhbGxiYWNrT3JBcmdzIHx8IEFycmF5LmlzQXJyYXkoY2FsbGJhY2tPckFyZ3MpKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kT3JQYXlsb2FkLFxuICAgICAgICAgICAgcGFyYW1zOiBjYWxsYmFja09yQXJnc1xuICAgICAgICAgIH0sIGdldFJwY1Byb21pc2VDYWxsYmFjayhyZXNvbHZlLCByZWplY3QsIGZhbHNlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZE9yUGF5bG9hZCAmJiB0eXBlb2YgbWV0aG9kT3JQYXlsb2FkID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjYWxsYmFja09yQXJncyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnBjUmVxdWVzdChtZXRob2RPclBheWxvYWQsIGNhbGxiYWNrT3JBcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VuZFN5bmMobWV0aG9kT3JQYXlsb2FkKTtcbiAgfVxuICAvKipcbiAgICogREVQUkVDQVRFRC5cbiAgICogSW50ZXJuYWwgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgbWV0aG9kLCB1c2VkIGluIHNlbmQuXG4gICAqL1xuXG5cbiAgX3NlbmRTeW5jKHBheWxvYWQpIHtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgc3dpdGNoIChwYXlsb2FkLm1ldGhvZCkge1xuICAgICAgY2FzZSBcImV0aF9hY2NvdW50c1wiOlxuICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcyA/IFt0aGlzLnNlbGVjdGVkQWRkcmVzc10gOiBbXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJldGhfY29pbmJhc2VcIjpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MgfHwgbnVsbDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJldGhfdW5pbnN0YWxsRmlsdGVyXCI6XG4gICAgICAgIHRoaXMuX3JwY1JlcXVlc3QocGF5bG9hZCwgTk9PUCk7XG5cbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJuZXRfdmVyc2lvblwiOlxuICAgICAgICByZXN1bHQgPSB0aGlzLm5ldHdvcmtWZXJzaW9uIHx8IG51bGw7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuZXJyb3JzLnVuc3VwcG9ydGVkU3luYyhwYXlsb2FkLm1ldGhvZCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogcGF5bG9hZC5pZCxcbiAgICAgIGpzb25ycGM6IHBheWxvYWQuanNvbnJwYyxcbiAgICAgIHJlc3VsdFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHByb3ZpZGVyIGJlY29tZXMgY29ubmVjdGVkLCB1cGRhdGVzIGludGVybmFsIHN0YXRlIGFuZCBlbWl0c1xuICAgKiByZXF1aXJlZCBldmVudHMuIElkZW1wb3RlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBjaGFpbklkIC0gVGhlIElEIG9mIHRoZSBuZXdseSBjb25uZWN0ZWQgY2hhaW4uXG4gICAqIGVtaXRzIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIjY29ubmVjdFxuICAgKi9cblxuXG4gIF9oYW5kbGVDb25uZWN0KGNoYWluSWQpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLmVtaXQoXCJjb25uZWN0XCIsIHtcbiAgICAgICAgY2hhaW5JZFxuICAgICAgfSk7XG4gICAgICBsb2cuZGVidWcobWVzc2FnZXMuaW5mby5jb25uZWN0ZWQoY2hhaW5JZCkpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogV2hlbiB0aGUgcHJvdmlkZXIgYmVjb21lcyBkaXNjb25uZWN0ZWQsIHVwZGF0ZXMgaW50ZXJuYWwgc3RhdGUgYW5kIGVtaXRzXG4gICAqIHJlcXVpcmVkIGV2ZW50cy4gSWRlbXBvdGVudCB3aXRoIHJlc3BlY3QgdG8gdGhlIGlzUmVjb3ZlcmFibGUgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBFcnJvciBjb2RlcyBwZXIgdGhlIENsb3NlRXZlbnQgc3RhdHVzIGNvZGVzIGFzIHJlcXVpcmVkIGJ5IEVJUC0xMTkzOlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2xvc2VFdmVudCNTdGF0dXNfY29kZXNcbiAgICpcbiAgICogQHBhcmFtIGlzUmVjb3ZlcmFibGUgLSBXaGV0aGVyIHRoZSBkaXNjb25uZWN0aW9uIGlzIHJlY292ZXJhYmxlLlxuICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gQSBjdXN0b20gZXJyb3IgbWVzc2FnZS5cbiAgICogZW1pdHMgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciNkaXNjb25uZWN0XG4gICAqL1xuXG5cbiAgX2hhbmRsZURpc2Nvbm5lY3QoaXNSZWNvdmVyYWJsZSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkIHx8ICF0aGlzLl9zdGF0ZS5pc1Blcm1hbmVudGx5RGlzY29ubmVjdGVkICYmICFpc1JlY292ZXJhYmxlKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgbGV0IGVycm9yO1xuXG4gICAgICBpZiAoaXNSZWNvdmVyYWJsZSkge1xuICAgICAgICBlcnJvciA9IG5ldyBFdGhlcmV1bVJwY0Vycm9yKDEwMTMsIC8vIFRyeSBhZ2FpbiBsYXRlclxuICAgICAgICBlcnJvck1lc3NhZ2UgfHwgbWVzc2FnZXMuZXJyb3JzLmRpc2Nvbm5lY3RlZCgpKTtcbiAgICAgICAgbG9nLmRlYnVnKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yID0gbmV3IEV0aGVyZXVtUnBjRXJyb3IoMTAxMSwgLy8gSW50ZXJuYWwgZXJyb3JcbiAgICAgICAgZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VzLmVycm9ycy5wZXJtYW5lbnRseURpc2Nvbm5lY3RlZCgpKTtcbiAgICAgICAgbG9nLmVycm9yKGVycm9yKTtcbiAgICAgICAgdGhpcy5jaGFpbklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RhdGUuYWNjb3VudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhdGUuaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdChcImRpc2Nvbm5lY3RcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBsb3N0IHRvIGNyaXRpY2FsIHN0cmVhbXMuXG4gICAqXG4gICAqIGVtaXRzIE1ldGFtYXNrSW5wYWdlUHJvdmlkZXIjZGlzY29ubmVjdFxuICAgKi9cblxuXG4gIF9oYW5kbGVTdHJlYW1EaXNjb25uZWN0KHN0cmVhbU5hbWUsIGVycm9yKSB7XG4gICAgbG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmcoc3RyZWFtTmFtZSwgZXJyb3IsIHRoaXMpO1xuXG4gICAgdGhpcy5faGFuZGxlRGlzY29ubmVjdChmYWxzZSwgZXJyb3IgPyBlcnJvci5tZXNzYWdlIDogdW5kZWZpbmVkKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYWNjb3VudHMgbWF5IGhhdmUgY2hhbmdlZC5cbiAgICovXG5cblxuICBfaGFuZGxlQWNjb3VudHNDaGFuZ2VkKGFjY291bnRzKSB7XG4gICAgbGV0IGlzRXRoQWNjb3VudHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIGxldCBpc0ludGVybmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICAvLyBkZWZlbnNpdmUgcHJvZ3JhbW1pbmdcbiAgICBsZXQgZmluYWxBY2NvdW50cyA9IGFjY291bnRzO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbmFsQWNjb3VudHMpKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgbm9uLWFycmF5IGFjY291bnRzIHBhcmFtZXRlci4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgZmluYWxBY2NvdW50cyk7XG4gICAgICBmaW5hbEFjY291bnRzID0gW107XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhY2NvdW50IG9mIGFjY291bnRzKSB7XG4gICAgICBpZiAodHlwZW9mIGFjY291bnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIG5vbi1zdHJpbmcgYWNjb3VudC4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgYWNjb3VudHMpO1xuICAgICAgICBmaW5hbEFjY291bnRzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gLy8gZW1pdCBhY2NvdW50c0NoYW5nZWQgaWYgYW55dGhpbmcgYWJvdXQgdGhlIGFjY291bnRzIGFycmF5IGhhcyBjaGFuZ2VkXG5cblxuICAgIGlmICghZGVxdWFsKHRoaXMuX3N0YXRlLmFjY291bnRzLCBmaW5hbEFjY291bnRzKSkge1xuICAgICAgLy8gd2Ugc2hvdWxkIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IGFjY291bnRzIGV2ZW4gYmVmb3JlIGV0aF9hY2NvdW50c1xuICAgICAgLy8gcmV0dXJucywgZXhjZXB0IGluIGNhc2VzIHdoZXJlIGlzSW50ZXJuYWwgaXMgdHJ1ZVxuICAgICAgaWYgKGlzRXRoQWNjb3VudHMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLl9zdGF0ZS5hY2NvdW50cykgJiYgdGhpcy5fc3RhdGUuYWNjb3VudHMubGVuZ3RoID4gMCAmJiAhaXNJbnRlcm5hbCkge1xuICAgICAgICBsb2cuZXJyb3IoJ01ldGFNYXNrOiBcImV0aF9hY2NvdW50c1wiIHVuZXhwZWN0ZWRseSB1cGRhdGVkIGFjY291bnRzLiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLicsIGZpbmFsQWNjb3VudHMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZS5hY2NvdW50cyA9IGZpbmFsQWNjb3VudHM7XG4gICAgICB0aGlzLmVtaXQoXCJhY2NvdW50c0NoYW5nZWRcIiwgZmluYWxBY2NvdW50cyk7XG4gICAgfSAvLyBoYW5kbGUgc2VsZWN0ZWRBZGRyZXNzXG5cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkQWRkcmVzcyAhPT0gZmluYWxBY2NvdW50c1swXSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBmaW5hbEFjY291bnRzWzBdIHx8IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVcG9uIHJlY2VpcHQgb2YgYSBuZXcgY2hhaW5JZCBhbmQgbmV0d29ya1ZlcnNpb24sIGVtaXRzIGNvcnJlc3BvbmRpbmdcbiAgICogZXZlbnRzIGFuZCBzZXRzIHJlbGV2YW50IHB1YmxpYyBzdGF0ZS5cbiAgICogRG9lcyBub3RoaW5nIGlmIG5laXRoZXIgdGhlIGNoYWluSWQgbm9yIHRoZSBuZXR3b3JrVmVyc2lvbiBhcmUgZGlmZmVyZW50XG4gICAqIGZyb20gZXhpc3RpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBlbWl0cyBNZXRhbWFza0lucGFnZVByb3ZpZGVyI2NoYWluQ2hhbmdlZFxuICAgKiBAcGFyYW0gbmV0d29ya0luZm8gLSBBbiBvYmplY3Qgd2l0aCBuZXR3b3JrIGluZm8uXG4gICAqL1xuXG5cbiAgX2hhbmRsZUNoYWluQ2hhbmdlZCgpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZCxcbiAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAoIWNoYWluSWQgfHwgIW5ldHdvcmtWZXJzaW9uKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgaW52YWxpZCBuZXR3b3JrIHBhcmFtZXRlcnMuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIHtcbiAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgbmV0d29ya1ZlcnNpb25cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXR3b3JrVmVyc2lvbiA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QoY2hhaW5JZCk7XG5cbiAgICAgIGlmIChjaGFpbklkICE9PSB0aGlzLmNoYWluSWQpIHtcbiAgICAgICAgdGhpcy5jaGFpbklkID0gY2hhaW5JZDtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJjaGFpbkNoYW5nZWRcIiwgdGhpcy5jaGFpbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXBvbiByZWNlaXB0IG9mIGEgbmV3IGlzVW5sb2NrZWQgc3RhdGUsIHNldHMgcmVsZXZhbnQgcHVibGljIHN0YXRlLlxuICAgKiBDYWxscyB0aGUgYWNjb3VudHMgY2hhbmdlZCBoYW5kbGVyIHdpdGggdGhlIHJlY2VpdmVkIGFjY291bnRzLCBvciBhbiBlbXB0eVxuICAgKiBhcnJheS5cbiAgICpcbiAgICogRG9lcyBub3RoaW5nIGlmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBlcXVhbCB0byB0aGUgZXhpc3RpbmcgdmFsdWUuXG4gICAqIFRoZXJlIGFyZSBubyBsb2NrL3VubG9jayBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRzIC0gT3B0aW9ucyBiYWcuXG4gICAqL1xuXG5cbiAgX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCgpIHtcbiAgICBsZXQge1xuICAgICAgYWNjb3VudHMsXG4gICAgICBpc1VubG9ja2VkXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAodHlwZW9mIGlzVW5sb2NrZWQgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgaW52YWxpZCBpc1VubG9ja2VkIHBhcmFtZXRlci4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwge1xuICAgICAgICBpc1VubG9ja2VkXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNVbmxvY2tlZCAhPT0gdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCA9IGlzVW5sb2NrZWQ7XG5cbiAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChhY2NvdW50cyB8fCBbXSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBXYXJucyBvZiBkZXByZWNhdGlvbiBmb3IgdGhlIGdpdmVuIGV2ZW50LCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cblxuXG4gIF93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpIHtcbiAgICBpZiAodGhpcy5fc2VudFdhcm5pbmdzLmV2ZW50c1tldmVudE5hbWVdID09PSBmYWxzZSkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3MuZXZlbnRzW2V2ZW50TmFtZV0pO1xuICAgICAgdGhpcy5fc2VudFdhcm5pbmdzLmV2ZW50c1tldmVudE5hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuXG5fZGVmaW5lUHJvcGVydHkoVG9ydXNJbnBhZ2VQcm92aWRlciwgXCJfZGVmYXVsdFN0YXRlXCIsIHtcbiAgYWNjb3VudHM6IG51bGwsXG4gIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgaXNVbmxvY2tlZDogZmFsc2UsXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZDogZmFsc2UsXG4gIGhhc0VtaXR0ZWRDb25uZWN0aW9uOiBmYWxzZVxufSk7XG5cbmNvbnN0IGRlZmF1bHRzID0gb3B0aW9ucyA9PiAoe1xuICBhbGdvcml0aG1zOiBvcHRpb25zLmFsZ29yaXRobXMgfHwgW1wic2hhMjU2XCJdLFxuICBkZWxpbWl0ZXI6IG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiIFwiLFxuICBmdWxsOiBvcHRpb25zLmZ1bGwgfHwgZmFsc2Vcbn0pOyAvLyBHZW5lcmF0ZSBsaXN0IG9mIGhhc2hlc1xuXG5cbmNvbnN0IGhhc2hlcyA9IChvcHRpb25zLCBkYXRhKSA9PiB7XG4gIGNvbnN0IGludGVybmFsSGFzaGVzID0ge307XG4gIG9wdGlvbnMuYWxnb3JpdGhtcy5mb3JFYWNoKGFsZ29yaXRobSA9PiB7XG4gICAgaW50ZXJuYWxIYXNoZXNbYWxnb3JpdGhtXSA9IGNyZWF0ZUhhc2goYWxnb3JpdGhtKS51cGRhdGUoZGF0YSwgXCJ1dGY4XCIpLmRpZ2VzdChcImJhc2U2NFwiKTtcbiAgfSk7XG4gIHJldHVybiBpbnRlcm5hbEhhc2hlcztcbn07IC8vIEJ1aWxkIGFuIGludGVncml0eSBzdHJpbmdcblxuXG5jb25zdCBpbnRlZ3JpdHkgPSAob3B0aW9ucywgc3JpKSA9PiB7XG4gIGxldCBvdXRwdXQgPSBcIlwiOyAvLyBIYXNoIGxpc3RcblxuICBvdXRwdXQgKz0gT2JqZWN0LmtleXMoc3JpLmhhc2hlcykubWFwKGFsZ29yaXRobSA9PiBcIlwiLmNvbmNhdChhbGdvcml0aG0sIFwiLVwiKS5jb25jYXQoc3JpLmhhc2hlc1thbGdvcml0aG1dKSkuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBtYWluID0gKG9wdGlvbnMsIGRhdGEpID0+IHtcbiAgLy8gRGVmYXVsdHNcbiAgY29uc3QgZmluYWxPcHRpb25zID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGNvbnN0IHNyaSA9IHtcbiAgICBoYXNoZXM6IGhhc2hlcyhmaW5hbE9wdGlvbnMsIGRhdGEpLFxuICAgIGludGVncml0eTogdW5kZWZpbmVkXG4gIH07XG4gIHNyaS5pbnRlZ3JpdHkgPSBpbnRlZ3JpdHkoZmluYWxPcHRpb25zLCBzcmkpO1xuICByZXR1cm4gZmluYWxPcHRpb25zLmZ1bGwgPyBzcmkgOiBzcmkuaW50ZWdyaXR5O1xufTtcblxuY2xhc3MgUG9wdXBIYW5kbGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICB1cmwsXG4gICAgICB0YXJnZXQsXG4gICAgICBmZWF0dXJlc1xuICAgIH0gPSBfcmVmO1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRhcmdldFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZmVhdHVyZXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpbmRvd1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2luZG93VGltZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlDbG9zZWRXaW5kb3dcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0IHx8IFwiX2JsYW5rXCI7XG4gICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVzIHx8IGdldFBvcHVwRmVhdHVyZXMoKTtcbiAgICB0aGlzLndpbmRvdyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLndpbmRvd1RpbWVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaUNsb3NlZFdpbmRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5fc2V0dXBUaW1lcigpO1xuICB9XG5cbiAgX3NldHVwVGltZXIoKSB7XG4gICAgdGhpcy53aW5kb3dUaW1lciA9IE51bWJlcihzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5kb3cgJiYgdGhpcy53aW5kb3cuY2xvc2VkKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy53aW5kb3dUaW1lcik7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlDbG9zZWRXaW5kb3cpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJjbG9zZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaUNsb3NlZFdpbmRvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndpbmRvdyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMud2luZG93ID09PSB1bmRlZmluZWQpIGNsZWFySW50ZXJ2YWwodGhpcy53aW5kb3dUaW1lcik7XG4gICAgfSwgNTAwKSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHZhciBfdGhpcyR3aW5kb3c7XG5cbiAgICB0aGlzLndpbmRvdyA9IHdpbmRvdy5vcGVuKHRoaXMudXJsLmhyZWYsIHRoaXMudGFyZ2V0LCB0aGlzLmZlYXR1cmVzKTtcbiAgICBpZiAoKF90aGlzJHdpbmRvdyA9IHRoaXMud2luZG93KSAhPT0gbnVsbCAmJiBfdGhpcyR3aW5kb3cgIT09IHZvaWQgMCAmJiBfdGhpcyR3aW5kb3cuZm9jdXMpIHRoaXMud2luZG93LmZvY3VzKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pQ2xvc2VkV2luZG93ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy53aW5kb3cpIHRoaXMud2luZG93LmNsb3NlKCk7XG4gIH1cblxuICByZWRpcmVjdChsb2NhdGlvblJlcGxhY2VPblJlZGlyZWN0KSB7XG4gICAgaWYgKGxvY2F0aW9uUmVwbGFjZU9uUmVkaXJlY3QpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHRoaXMudXJsLmhyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMudXJsLmhyZWY7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGdpdmVuIGltYWdlIFVSTCBleGlzdHNcbiAqIEBwYXJhbSB1cmwgLSB0aGUgdXJsIG9mIHRoZSBpbWFnZVxuICogQHJldHVybnMgLSB3aGV0aGVyIHRoZSBpbWFnZSBleGlzdHNcbiAqL1xuXG5mdW5jdGlvbiBpbWdFeGlzdHModXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHRydWUpO1xuXG4gICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlc29sdmUoZmFsc2UpO1xuXG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBFeHRyYWN0cyBhIG5hbWUgZm9yIHRoZSBzaXRlIGZyb20gdGhlIERPTVxuICovXG5cblxuY29uc3QgZ2V0U2l0ZU5hbWUgPSB3aW5kb3cgPT4ge1xuICBjb25zdCB7XG4gICAgZG9jdW1lbnRcbiAgfSA9IHdpbmRvdztcbiAgY29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkID4gbWV0YVtwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiXScpO1xuXG4gIGlmIChzaXRlTmFtZSkge1xuICAgIHJldHVybiBzaXRlTmFtZS5jb250ZW50O1xuICB9XG5cbiAgY29uc3QgbWV0YVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCA+IG1ldGFbbmFtZT1cInRpdGxlXCJdJyk7XG5cbiAgaWYgKG1ldGFUaXRsZSkge1xuICAgIHJldHVybiBtZXRhVGl0bGUuY29udGVudDtcbiAgfVxuXG4gIGlmIChkb2N1bWVudC50aXRsZSAmJiBkb2N1bWVudC50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnRpdGxlO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbn07XG4vKipcbiAqIEV4dHJhY3RzIGFuIGljb24gZm9yIHRoZSBzaXRlIGZyb20gdGhlIERPTVxuICovXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2l0ZUljb24od2luZG93KSB7XG4gIGNvbnN0IHtcbiAgICBkb2N1bWVudFxuICB9ID0gd2luZG93OyAvLyBVc2UgdGhlIHNpdGUncyBmYXZpY29uIGlmIGl0IGV4aXN0c1xuXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCA+IGxpbmtbcmVsPVwic2hvcnRjdXQgaWNvblwiXScpO1xuXG4gIGlmIChpY29uICYmIChhd2FpdCBpbWdFeGlzdHMoaWNvbi5ocmVmKSkpIHtcbiAgICByZXR1cm4gaWNvbi5ocmVmO1xuICB9IC8vIFNlYXJjaCB0aHJvdWdoIGF2YWlsYWJsZSBpY29ucyBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyXG5cblxuICBpY29uID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoZWFkID4gbGlua1tyZWw9XCJpY29uXCJdJykpLmZpbmQoX2ljb24gPT4gQm9vbGVhbihfaWNvbi5ocmVmKSk7XG5cbiAgaWYgKGljb24gJiYgKGF3YWl0IGltZ0V4aXN0cyhpY29uLmhyZWYpKSkge1xuICAgIHJldHVybiBpY29uLmhyZWY7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogR2V0cyBzaXRlIG1ldGFkYXRhIGFuZCByZXR1cm5zIGl0XG4gKlxuICovXG5cblxuY29uc3QgZ2V0U2l0ZU1ldGFkYXRhID0gYXN5bmMgKCkgPT4gKHtcbiAgbmFtZTogZ2V0U2l0ZU5hbWUod2luZG93KSxcbiAgaWNvbjogYXdhaXQgZ2V0U2l0ZUljb24od2luZG93KVxufSk7XG4vKipcbiAqIFNlbmRzIHNpdGUgbWV0YWRhdGEgb3ZlciBhbiBSUEMgcmVxdWVzdC5cbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRTaXRlTWV0YWRhdGEoZW5naW5lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9tYWluTWV0YWRhdGEgPSBhd2FpdCBnZXRTaXRlTWV0YWRhdGEoKTsgLy8gY2FsbCBlbmdpbmUuaGFuZGxlIGRpcmVjdGx5IHRvIGF2b2lkIG5vcm1hbCBSUEMgcmVxdWVzdCBoYW5kbGluZ1xuXG4gICAgZW5naW5lLmhhbmRsZSh7XG4gICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgaWQ6IGdldFByZW9wZW5JbnN0YW5jZUlkKCksXG4gICAgICBtZXRob2Q6IFwid2FsbGV0X3NlbmREb21haW5NZXRhZGF0YVwiLFxuICAgICAgcGFyYW1zOiBkb21haW5NZXRhZGF0YVxuICAgIH0sIE5PT1ApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZy5lcnJvcih7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuc2VuZFNpdGVNZXRhZGF0YSgpLFxuICAgICAgb3JpZ2luYWxFcnJvcjogZXJyb3JcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJob3N0XCIsIFwiY2hhaW5JZFwiLCBcIm5ldHdvcmtOYW1lXCJdO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgZGVmYXVsdFZlcmlmaWVycyA9IHtcbiAgW0xPR0lOX1BST1ZJREVSLkdPT0dMRV06IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5GQUNFQk9PS106IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5SRURESVRdOiB0cnVlLFxuICBbTE9HSU5fUFJPVklERVIuVFdJVENIXTogdHJ1ZSxcbiAgW0xPR0lOX1BST1ZJREVSLkRJU0NPUkRdOiB0cnVlXG59O1xuY29uc3QgaWZyYW1lSW50ZWdyaXR5ID0gXCJzaGEzODQtRkxQajBqS3JiNnZJbGk2MkVkNG4vc3FXaGRoSE1wRnozTmZmQVY0SDh1cVRrelBzZjRJQXRLRmdlVkdneGI0K1wiO1xuY29uc3QgZXhwZWN0ZWRDYWNoZUNvbnRyb2xIZWFkZXIgPSBcIm1heC1hZ2U9MzYwMFwiO1xuY29uc3QgVU5TQUZFX01FVEhPRFMgPSBbXCJldGhfc2VuZFRyYW5zYWN0aW9uXCIsIFwiZXRoX3NpZ25UeXBlZERhdGFcIiwgXCJldGhfc2lnblR5cGVkRGF0YV92M1wiLCBcImV0aF9zaWduVHlwZWREYXRhX3Y0XCIsIFwicGVyc29uYWxfc2lnblwiLCBcImV0aF9nZXRFbmNyeXB0aW9uUHVibGljS2V5XCIsIFwiZXRoX2RlY3J5cHRcIl07XG5jb25zdCBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSA9IHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIik7IC8vIHByZWxvYWQgZm9yIGlmcmFtZSBkb2Vzbid0IHdvcmsgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTkzMjY3XG5cbihhc3luYyBmdW5jdGlvbiBwcmVMb2FkSWZyYW1lKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICBjb25zdCB0b3J1c0lmcmFtZUh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBjb25zdCB7XG4gICAgICB0b3J1c1VybFxuICAgIH0gPSBhd2FpdCBnZXRUb3J1c1VybChcInByb2R1Y3Rpb25cIiwge1xuICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgaGFzaDogaWZyYW1lSW50ZWdyaXR5LFxuICAgICAgdmVyc2lvbjogXCJcIlxuICAgIH0pO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5ocmVmID0gXCJcIi5jb25jYXQodG9ydXNVcmwsIFwiL3BvcHVwXCIpO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgdG9ydXNJZnJhbWVIdG1sLnR5cGUgPSBcInRleHQvaHRtbFwiO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5yZWwgPSBcInByZWZldGNoXCI7XG5cbiAgICBpZiAodG9ydXNJZnJhbWVIdG1sLnJlbExpc3QgJiYgdG9ydXNJZnJhbWVIdG1sLnJlbExpc3Quc3VwcG9ydHMpIHtcbiAgICAgIGlmICh0b3J1c0lmcmFtZUh0bWwucmVsTGlzdC5zdXBwb3J0cyhcInByZWZldGNoXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodG9ydXNJZnJhbWVIdG1sKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nLndhcm4oZXJyb3IpO1xuICB9XG59KSgpO1xuXG5jbGFzcyBUb3J1cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCB7XG4gICAgICBidXR0b25Qb3NpdGlvbiA9IEJVVFRPTl9QT1NJVElPTi5CT1RUT01fTEVGVCxcbiAgICAgIG1vZGFsWkluZGV4ID0gOTk5OTksXG4gICAgICBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYnV0dG9uUG9zaXRpb25cIiwgQlVUVE9OX1BPU0lUSU9OLkJPVFRPTV9MRUZUKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzVXJsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0lmcmFtZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3R5bGVMaW5rXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0xvZ2dlZEluXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0luaXRpYWxpemVkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c1dpZGdldFZpc2liaWxpdHlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzQWxlcnRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5vZGVEZXRhaWxNYW5hZ2VyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0pzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhcGlLZXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1vZGFsWkluZGV4XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGVydFpJbmRleFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNBbGVydENvbnRhaW5lclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNJZnJhbWVGdWxsU2NyZWVuXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3aGl0ZUxhYmVsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZXF1ZXN0ZWRWZXJpZmllclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY3VycmVudFZlcmlmaWVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbWJlZFRyYW5zbGF0aW9uc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXRoZXJldW1cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3ZpZGVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb21tdW5pY2F0aW9uTXV4XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0xvZ2luQ2FsbGJhY2tcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRhcHBTdG9yYWdlS2V5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXltZW50UHJvdmlkZXJzXCIsIGNvbmZpZ3VyYXRpb24ucGF5bWVudFByb3ZpZGVycyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJsb2dpbkhpbnRcIiwgXCJcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1c2VXYWxsZXRDb25uZWN0XCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLmJ1dHRvblBvc2l0aW9uID0gYnV0dG9uUG9zaXRpb247XG4gICAgdGhpcy50b3J1c1VybCA9IFwiXCI7XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7IC8vIGV0aGVyZXVtLmVuYWJsZSB3b3JraW5nXG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gaW5pdCBkb25lXG5cbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IHRydWU7XG4gICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50VmVyaWZpZXIgPSBcIlwiO1xuICAgIHRoaXMubm9kZURldGFpbE1hbmFnZXIgPSBuZXcgTm9kZURldGFpbE1hbmFnZXIoKTtcbiAgICB0aGlzLnRvcnVzSnMgPSBuZXcgVG9ydXNKcyh7XG4gICAgICBtZXRhZGF0YUhvc3Q6IFwiaHR0cHM6Ly9tZXRhZGF0YS50b3IudXNcIixcbiAgICAgIGFsbG93SG9zdDogXCJodHRwczovL3NpZ25lci50b3IudXMvYXBpL2FsbG93XCIsXG4gICAgICBuZXR3b3JrOiBcIm1haW5uZXRcIlxuICAgIH0pO1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgIFRvcnVzSnMuc2V0QVBJS2V5KGFwaUtleSk7XG4gICAgc2V0QVBJS2V5KGFwaUtleSk7XG4gICAgdGhpcy5tb2RhbFpJbmRleCA9IG1vZGFsWkluZGV4O1xuICAgIHRoaXMuYWxlcnRaSW5kZXggPSBtb2RhbFpJbmRleCArIDEwMDA7XG4gICAgdGhpcy5pc0lmcmFtZUZ1bGxTY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmRhcHBTdG9yYWdlS2V5ID0gXCJcIjtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgbGV0IHtcbiAgICAgIGJ1aWxkRW52ID0gVE9SVVNfQlVJTERfRU5WLlBST0RVQ1RJT04sXG4gICAgICBlbmFibGVMb2dnaW5nID0gZmFsc2UsXG4gICAgICAvLyBkZXByZWNhdGVkOiB1c2UgbG9naW5Db25maWcgaW5zdGVhZFxuICAgICAgZW5hYmxlZFZlcmlmaWVycyA9IGRlZmF1bHRWZXJpZmllcnMsXG4gICAgICBuZXR3b3JrID0ge1xuICAgICAgICBob3N0OiBcIm1haW5uZXRcIixcbiAgICAgICAgY2hhaW5JZDogbnVsbCxcbiAgICAgICAgbmV0d29ya05hbWU6IFwiXCIsXG4gICAgICAgIGJsb2NrRXhwbG9yZXI6IFwiXCIsXG4gICAgICAgIHRpY2tlcjogXCJcIixcbiAgICAgICAgdGlja2VyTmFtZTogXCJcIlxuICAgICAgfSxcbiAgICAgIGxvZ2luQ29uZmlnID0ge30sXG4gICAgICBzaG93VG9ydXNCdXR0b24gPSB0cnVlLFxuICAgICAgaW50ZWdyaXR5ID0ge1xuICAgICAgICBjaGVjazogZmFsc2UsXG4gICAgICAgIGhhc2g6IGlmcmFtZUludGVncml0eSxcbiAgICAgICAgdmVyc2lvbjogXCJcIlxuICAgICAgfSxcbiAgICAgIHdoaXRlTGFiZWwsXG4gICAgICBza2lwVEtleSA9IGZhbHNlLFxuICAgICAgdXNlTG9jYWxTdG9yYWdlID0gZmFsc2UsXG4gICAgICB1c2VXYWxsZXRDb25uZWN0ID0gZmFsc2VcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB0aHJvdyBuZXcgRXJyb3IoXCJBbHJlYWR5IGluaXRpYWxpemVkXCIpO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvcnVzVXJsLFxuICAgICAgbG9nTGV2ZWxcbiAgICB9ID0gYXdhaXQgZ2V0VG9ydXNVcmwoYnVpbGRFbnYsIGludGVncml0eSk7XG4gICAgbG9nLmluZm8odG9ydXNVcmwsIFwidXJsIGxvYWRlZFwiKTtcbiAgICB0aGlzLnRvcnVzVXJsID0gdG9ydXNVcmw7XG4gICAgdGhpcy53aGl0ZUxhYmVsID0gd2hpdGVMYWJlbDtcbiAgICB0aGlzLnVzZVdhbGxldENvbm5lY3QgPSB1c2VXYWxsZXRDb25uZWN0O1xuICAgIGxvZy5zZXREZWZhdWx0TGV2ZWwobG9nTGV2ZWwpO1xuICAgIGlmIChlbmFibGVMb2dnaW5nKSBsb2cuZW5hYmxlQWxsKCk7ZWxzZSBsb2cuZGlzYWJsZUFsbCgpO1xuICAgIHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID0gc2hvd1RvcnVzQnV0dG9uO1xuICAgIGxldCBkYXBwU3RvcmFnZUtleSA9IFwiXCI7XG5cbiAgICBpZiAoaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgJiYgdXNlTG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zdCBsb2NhbFN0b3JhZ2VLZXkgPSBcIlwiLmNvbmNhdChjb25maWd1cmF0aW9uLmxvY2FsU3RvcmFnZUtleVByZWZpeCkuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICBjb25zdCBzdG9yZWRLZXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KTtcbiAgICAgIGlmIChzdG9yZWRLZXkpIGRhcHBTdG9yYWdlS2V5ID0gc3RvcmVkS2V5O2Vsc2Uge1xuICAgICAgICBjb25zdCBnZW5lcmF0ZWRLZXkgPSBcInRvcnVzLWFwcC1cIi5jb25jYXQoZ2V0UHJlb3Blbkluc3RhbmNlSWQoKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIGdlbmVyYXRlZEtleSk7XG4gICAgICAgIGRhcHBTdG9yYWdlS2V5ID0gZ2VuZXJhdGVkS2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZGFwcFN0b3JhZ2VLZXkgPSBkYXBwU3RvcmFnZUtleTtcbiAgICBjb25zdCB0b3J1c0lmcmFtZVVybCA9IG5ldyBVUkwodG9ydXNVcmwpO1xuICAgIGlmICh0b3J1c0lmcmFtZVVybC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikpIHRvcnVzSWZyYW1lVXJsLnBhdGhuYW1lICs9IFwicG9wdXBcIjtlbHNlIHRvcnVzSWZyYW1lVXJsLnBhdGhuYW1lICs9IFwiL3BvcHVwXCI7XG5cbiAgICBpZiAoZGFwcFN0b3JhZ2VLZXkpIHtcbiAgICAgIHRvcnVzSWZyYW1lVXJsLmhhc2ggPSBcIiNkYXBwU3RvcmFnZUtleT1cIi5jb25jYXQoZGFwcFN0b3JhZ2VLZXkpO1xuICAgIH0gLy8gSWZyYW1lIGNvZGVcblxuXG4gICAgdGhpcy50b3J1c0lmcmFtZSA9IGh0bWxUb0VsZW1lbnQoXCI8aWZyYW1lXFxuICAgICAgICBpZD1cXFwidG9ydXNJZnJhbWVcXFwiXFxuICAgICAgICBhbGxvdz1cIi5jb25jYXQodXNlV2FsbGV0Q29ubmVjdCA/IFwiY2FtZXJhXCIgOiBcIlwiLCBcIlxcbiAgICAgICAgY2xhc3M9XFxcInRvcnVzSWZyYW1lXFxcIlxcbiAgICAgICAgc3JjPVxcXCJcIikuY29uY2F0KHRvcnVzSWZyYW1lVXJsLmhyZWYsIFwiXFxcIlxcbiAgICAgICAgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyByaWdodDogMDsgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMDsgei1pbmRleDogXCIpLmNvbmNhdCh0aGlzLm1vZGFsWkluZGV4LCBcIlxcXCJcXG4gICAgICA+PC9pZnJhbWU+XCIpKTtcbiAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIgPSBodG1sVG9FbGVtZW50KCc8ZGl2IGlkPVwidG9ydXNBbGVydENvbnRhaW5lclwiPjwvZGl2PicpO1xuICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiei1pbmRleFwiLCB0aGlzLmFsZXJ0WkluZGV4LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGxpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiLmNvbmNhdCh0b3J1c1VybCwgXCIvY3NzL3dpZGdldC5jc3NcIikpO1xuICAgIHRoaXMuc3R5bGVMaW5rID0gbGluaztcbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0TGFuZ3VhZ2UgPSBnZXRVc2VyTGFuZ3VhZ2UoKSxcbiAgICAgIGN1c3RvbVRyYW5zbGF0aW9ucyA9IHt9XG4gICAgfSA9IHRoaXMud2hpdGVMYWJlbCB8fCB7fTtcbiAgICBjb25zdCBtZXJnZWRUcmFuc2xhdGlvbnMgPSBkZWVwbWVyZ2UoY29uZmlndXJhdGlvbi50cmFuc2xhdGlvbnMsIGN1c3RvbVRyYW5zbGF0aW9ucyk7XG4gICAgY29uc3QgbGFuZ3VhZ2VUcmFuc2xhdGlvbnMgPSBtZXJnZWRUcmFuc2xhdGlvbnNbZGVmYXVsdExhbmd1YWdlXSB8fCBjb25maWd1cmF0aW9uLnRyYW5zbGF0aW9uc1tnZXRVc2VyTGFuZ3VhZ2UoKV07XG4gICAgdGhpcy5lbWJlZFRyYW5zbGF0aW9ucyA9IGxhbmd1YWdlVHJhbnNsYXRpb25zLmVtYmVkO1xuXG4gICAgY29uc3QgaGFuZGxlU2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBkb2N1bWVudFJlYWR5KCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLnRvcnVzSWZyYW1lLm9ubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAvLyBvbmx5IGRvIHRoaXMgaWYgaWZyYW1lIGlzIG5vdCBmdWxsIHNjcmVlblxuICAgICAgICAgIHRoaXMuX3NldHVwV2ViMygpO1xuXG4gICAgICAgICAgY29uc3QgaW5pdFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJpbml0X3N0cmVhbVwiKTtcbiAgICAgICAgICBpbml0U3RyZWFtLm9uKFwiZGF0YVwiLCBjaHVuayA9PiB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICB9ID0gY2h1bms7XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSBcImluaXRfY29tcGxldGVcIiAmJiBkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgLy8gcmVzb2x2ZSBwcm9taXNlXG4gICAgICAgICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZSh0aGlzLmlzSWZyYW1lRnVsbFNjcmVlbik7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaW5pdFN0cmVhbS53cml0ZSh7XG4gICAgICAgICAgICBuYW1lOiBcImluaXRfc3RyZWFtXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGVuYWJsZWRWZXJpZmllcnMsXG4gICAgICAgICAgICAgIGxvZ2luQ29uZmlnLFxuICAgICAgICAgICAgICB3aGl0ZUxhYmVsOiB0aGlzLndoaXRlTGFiZWwsXG4gICAgICAgICAgICAgIGJ1dHRvblBvc2l0aW9uOiB0aGlzLmJ1dHRvblBvc2l0aW9uLFxuICAgICAgICAgICAgICB0b3J1c1dpZGdldFZpc2liaWxpdHk6IHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5LFxuICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgICAgICAgICBza2lwVEtleSxcbiAgICAgICAgICAgICAgbmV0d29ya1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMuc3R5bGVMaW5rKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b3J1c0lmcmFtZSk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudG9ydXNBbGVydENvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKGJ1aWxkRW52ID09PSBcInByb2R1Y3Rpb25cIiAmJiBpbnRlZ3JpdHkuY2hlY2spIHtcbiAgICAgIC8vIGhhY2t5IHNvbHV0aW9uIHRvIGNoZWNrIGZvciBpZnJhbWUgaW50ZWdyaXR5XG4gICAgICBjb25zdCBmZXRjaFVybCA9IFwiXCIuY29uY2F0KHRvcnVzVXJsLCBcIi9wb3B1cFwiKTtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChmZXRjaFVybCwge1xuICAgICAgICBjYWNoZTogXCJyZWxvYWRcIlxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwLmhlYWRlcnMuZ2V0KFwiQ2FjaGUtQ29udHJvbFwiKSAhPT0gZXhwZWN0ZWRDYWNoZUNvbnRyb2xIZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBDYWNoZS1Db250cm9sIGhlYWRlcnMsIGdvdCBcIi5jb25jYXQocmVzcC5oZWFkZXJzLmdldChcIkNhY2hlLUNvbnRyb2xcIikpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXNwLnRleHQoKTtcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRJbnRlZ3JpdHkgPSBtYWluKHtcbiAgICAgICAgYWxnb3JpdGhtczogW1wic2hhMzg0XCJdXG4gICAgICB9LCByZXNwb25zZSk7XG4gICAgICBsb2cuaW5mbyhjYWxjdWxhdGVkSW50ZWdyaXR5LCBcImludGVncml0eVwiKTtcblxuICAgICAgaWYgKGNhbGN1bGF0ZWRJbnRlZ3JpdHkgPT09IGludGVncml0eS5oYXNoKSB7XG4gICAgICAgIGF3YWl0IGhhbmRsZVNldHVwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFySW5pdCgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlZ3JpdHkgY2hlY2sgZmFpbGVkXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBoYW5kbGVTZXR1cCgpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBsZXQge1xuICAgICAgdmVyaWZpZXIgPSBcIlwiLFxuICAgICAgbG9naW5faGludDogbG9naW5IaW50ID0gXCJcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKSB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsIGluaXQoKSBmaXJzdFwiKTtcbiAgICB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyID0gdmVyaWZpZXI7XG4gICAgdGhpcy5sb2dpbkhpbnQgPSBsb2dpbkhpbnQ7XG4gICAgcmV0dXJuIHRoaXMuZXRoZXJldW0uZW5hYmxlKCk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIGhhcyBub3QgbG9nZ2VkIGluIHlldFwiKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9nT3V0U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcImxvZ291dFwiKTtcbiAgICAgIGxvZ091dFN0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwibG9nT3V0XCJcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc3RhdHVzU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInN0YXR1c1wiKTtcblxuICAgICAgY29uc3Qgc3RhdHVzU3RyZWFtSGFuZGxlciA9IHN0YXR1cyA9PiB7XG4gICAgICAgIGlmICghc3RhdHVzLmxvZ2dlZEluKSB7XG4gICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VmVyaWZpZXIgPSBcIlwiO1xuICAgICAgICAgIHRoaXMucmVxdWVzdGVkVmVyaWZpZXIgPSBcIlwiO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJTb21lIEVycm9yIE9jY3VyZWRcIikpO1xuICAgICAgfTtcblxuICAgICAgaGFuZGxlU3RyZWFtKHN0YXR1c1N0cmVhbSwgXCJkYXRhXCIsIHN0YXR1c1N0cmVhbUhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY2xlYW5VcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICBhd2FpdCB0aGlzLmxvZ291dCgpO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXJJbml0KCk7XG4gIH1cblxuICBjbGVhckluaXQoKSB7XG4gICAgZnVuY3Rpb24gaXNFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTERvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQodGhpcy5zdHlsZUxpbmspICYmIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuc3R5bGVMaW5rKSkge1xuICAgICAgdGhpcy5zdHlsZUxpbmsucmVtb3ZlKCk7XG4gICAgICB0aGlzLnN0eWxlTGluayA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KHRoaXMudG9ydXNJZnJhbWUpICYmIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMudG9ydXNJZnJhbWUpKSB7XG4gICAgICB0aGlzLnRvcnVzSWZyYW1lLnJlbW92ZSgpO1xuICAgICAgdGhpcy50b3J1c0lmcmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KHRoaXMudG9ydXNBbGVydENvbnRhaW5lcikgJiYgd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyKSkge1xuICAgICAgdGhpcy50b3J1c0FsZXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICB9XG5cbiAgaGlkZVRvcnVzQnV0dG9uKCkge1xuICAgIHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID0gZmFsc2U7XG5cbiAgICB0aGlzLl9zZW5kV2lkZ2V0VmlzaWJpbGl0eVN0YXR1cyhmYWxzZSk7XG5cbiAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG4gIH1cblxuICBzaG93VG9ydXNCdXR0b24oKSB7XG4gICAgdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHkgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXModHJ1ZSk7XG5cbiAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG4gIH1cblxuICBzZXRQcm92aWRlcigpIHtcbiAgICBsZXQgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBsZXQge1xuICAgICAgaG9zdCA9IFwibWFpbm5ldFwiLFxuICAgICAgY2hhaW5JZCA9IG51bGwsXG4gICAgICBuZXR3b3JrTmFtZSA9IFwiXCJcbiAgICB9ID0gX3JlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyQ2hhbmdlU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInByb3ZpZGVyX2NoYW5nZVwiKTtcblxuICAgICAgY29uc3QgaGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBzdWNjZXNzXG4gICAgICAgIH0gPSBjaHVuay5kYXRhO1xuICAgICAgICBsb2cuaW5mbyhjaHVuayk7XG5cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9IGVsc2UgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwic29tZSBlcnJvciBvY2N1cmVkXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZVN0cmVhbShwcm92aWRlckNoYW5nZVN0cmVhbSwgXCJkYXRhXCIsIGhhbmRsZXIpO1xuICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQsIHtcbiAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPV1xuICAgICAgfSk7XG5cbiAgICAgIHByb3ZpZGVyQ2hhbmdlU3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJzaG93X3Byb3ZpZGVyX2NoYW5nZVwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmV0d29yazogX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICBob3N0LFxuICAgICAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgICAgIG5ldHdvcmtOYW1lXG4gICAgICAgICAgfSwgcmVzdCksXG4gICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWQsXG4gICAgICAgICAgb3ZlcnJpZGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1dhbGxldChwYXRoKSB7XG4gICAgbGV0IHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgY29uc3Qgc2hvd1dhbGxldFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJzaG93X3dhbGxldFwiKTtcbiAgICBjb25zdCBmaW5hbFBhdGggPSBwYXRoID8gXCIvXCIuY29uY2F0KHBhdGgpIDogXCJcIjtcbiAgICBzaG93V2FsbGV0U3RyZWFtLndyaXRlKHtcbiAgICAgIG5hbWU6IFwic2hvd193YWxsZXRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcGF0aDogZmluYWxQYXRoXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaG93V2FsbGV0SGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgIGlmIChjaHVuay5uYW1lID09PSBcInNob3dfd2FsbGV0X2luc3RhbmNlXCIpIHtcbiAgICAgICAgLy8gTGV0IHRoZSBlcnJvciBwcm9wb2dhdGUgdXAgKGhlbmNlLCBubyB0cnkgY2F0Y2gpXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBpbnN0YW5jZUlkXG4gICAgICAgIH0gPSBjaHVuay5kYXRhO1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwoXCJcIi5jb25jYXQodGhpcy50b3J1c1VybCwgXCIvd2FsbGV0XCIpLmNvbmNhdChmaW5hbFBhdGgpKTsgLy8gVXNpbmcgVVJMIGNvbnN0cnVjdG9yIHRvIHByZXZlbnQganMgaW5qZWN0aW9uIGFuZCBhbGxvdyBwYXJhbWV0ZXIgdmFsaWRhdGlvbi4hXG5cbiAgICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImludGVncml0eVwiLCBcInRydWVcIik7XG4gICAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJpbnN0YW5jZUlkXCIsIGluc3RhbmNlSWQpO1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZCh4LCBwYXJhbXNbeF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5kYXBwU3RvcmFnZUtleSkge1xuICAgICAgICAgIGZpbmFsVXJsLmhhc2ggPSBcIiNkYXBwU3RvcmFnZUtleT1cIi5jb25jYXQodGhpcy5kYXBwU3RvcmFnZUtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWxsZXRXaW5kb3cgPSBuZXcgUG9wdXBIYW5kbGVyKHtcbiAgICAgICAgICB1cmw6IGZpbmFsVXJsLFxuICAgICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19ERUZBVUxUX1dBTExFVF9XSU5ET1dcbiAgICAgICAgfSk7XG4gICAgICAgIHdhbGxldFdpbmRvdy5vcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGhhbmRsZVN0cmVhbShzaG93V2FsbGV0U3RyZWFtLCBcImRhdGFcIiwgc2hvd1dhbGxldEhhbmRsZXIpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UHVibGljQWRkcmVzcyhfcmVmMikge1xuICAgIGxldCB7XG4gICAgICB2ZXJpZmllcixcbiAgICAgIHZlcmlmaWVySWQsXG4gICAgICBpc0V4dGVuZGVkID0gZmFsc2VcbiAgICB9ID0gX3JlZjI7XG4gICAgaWYgKCFjb25maWd1cmF0aW9uLnN1cHBvcnRlZFZlcmlmaWVyTGlzdC5pbmNsdWRlcyh2ZXJpZmllcikgfHwgIVdBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQW3ZlcmlmaWVyXSkgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdmVyaWZpZXJcIik7XG4gICAgY29uc3Qgbm9kZURldGFpbHMgPSBhd2FpdCB0aGlzLm5vZGVEZXRhaWxNYW5hZ2VyLmdldE5vZGVEZXRhaWxzKHtcbiAgICAgIHZlcmlmaWVyLFxuICAgICAgdmVyaWZpZXJJZFxuICAgIH0pO1xuICAgIGNvbnN0IGVuZHBvaW50cyA9IG5vZGVEZXRhaWxzLnRvcnVzTm9kZUVuZHBvaW50cztcbiAgICBjb25zdCB0b3J1c05vZGVQdWJzID0gbm9kZURldGFpbHMudG9ydXNOb2RlUHViO1xuICAgIGNvbnN0IHdhbGxldFZlcmlmaWVyID0gdmVyaWZpZXI7XG4gICAgY29uc3Qgb3BlbmxvZ2luVmVyaWZpZXIgPSBXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUFt2ZXJpZmllcl07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdWMVVzZXIgPSBhd2FpdCB0aGlzLnRvcnVzSnMuZ2V0VXNlclR5cGVBbmRBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywge1xuICAgICAgICB2ZXJpZmllcjogd2FsbGV0VmVyaWZpZXIsXG4gICAgICAgIHZlcmlmaWVySWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXhpc3RpbmdWMVVzZXIudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSB7XG4gICAgICAgIGlmICghaXNFeHRlbmRlZCkgcmV0dXJuIGV4aXN0aW5nVjFVc2VyLmFkZHJlc3M7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1YxVXNlcjtcbiAgICAgIH0gLy8gd2UgZG9uJ3Qgc3VwcG9ydCB2MiB1c2VycyB3aXRoIHYxIHZlcmlmaWVycyBzbyBnZXQgb3IgYXNzaWduIHRoZSBrZXkgZm9yIHYyIHVzZXIgb24gdjIgYHZlcmlmaWVyYFxuXG5cbiAgICAgIGNvbnN0IHYyVXNlciA9IGF3YWl0IHRoaXMudG9ydXNKcy5nZXRVc2VyVHlwZUFuZEFkZHJlc3MoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCB7XG4gICAgICAgIHZlcmlmaWVyOiBvcGVubG9naW5WZXJpZmllcixcbiAgICAgICAgdmVyaWZpZXJJZFxuICAgICAgfSwgdHJ1ZSk7XG4gICAgICBpZiAoIWlzRXh0ZW5kZWQpIHJldHVybiB2MlVzZXIuYWRkcmVzcztcbiAgICAgIHJldHVybiB2MlVzZXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwICYmIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJWZXJpZmllciArIFZlcmlmaWVySUQgaGFzIG5vdCB5ZXQgYmVlbiBhc3NpZ25lZFwiKSkge1xuICAgICAgICAvLyBpZiB1c2VyIGRvZXNuJ3QgaGF2ZSBrZXkgdGhlbiBhc3NpZ24gaXQgd2l0aCB2MiB2ZXJpZmllclxuICAgICAgICBjb25zdCBuZXdWMlVzZXIgPSBhd2FpdCB0aGlzLnRvcnVzSnMuZ2V0VXNlclR5cGVBbmRBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywge1xuICAgICAgICAgIHZlcmlmaWVyOiBvcGVubG9naW5WZXJpZmllcixcbiAgICAgICAgICB2ZXJpZmllcklkXG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgICBpZiAoIWlzRXh0ZW5kZWQpIHJldHVybiBuZXdWMlVzZXIuYWRkcmVzcztcbiAgICAgICAgcmV0dXJuIG5ld1YyVXNlcjtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlckluZm8obWVzc2FnZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvQWNjZXNzU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInVzZXJfaW5mb19hY2Nlc3NcIik7XG4gICAgICAgIHVzZXJJbmZvQWNjZXNzU3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcInVzZXJfaW5mb19hY2Nlc3NfcmVxdWVzdFwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvQWNjZXNzSGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBhcHByb3ZlZCxcbiAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgICAgcmVqZWN0ZWQsXG4gICAgICAgICAgICAgIG5ld1JlcXVlc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ID0gY2h1bms7XG5cbiAgICAgICAgICBpZiAobmFtZSA9PT0gXCJ1c2VyX2luZm9fYWNjZXNzX3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmIChhcHByb3ZlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdFwiKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgY29uc3QgdXNlckluZm9TdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidXNlcl9pbmZvXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvSGFuZGxlciA9IGhhbmRsZXJDaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJDaHVuay5uYW1lID09PSBcInVzZXJfaW5mb19yZXNwb25zZVwiKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlckNodW5rLmRhdGEuYXBwcm92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShoYW5kbGVyQ2h1bmsuZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIHJlamVjdGVkIHRoZSByZXF1ZXN0XCIpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgaGFuZGxlU3RyZWFtKHVzZXJJbmZvU3RyZWFtLCBcImRhdGFcIiwgdXNlckluZm9IYW5kbGVyKTtcbiAgICAgICAgICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPV1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICB1c2VySW5mb1N0cmVhbS53cml0ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ1c2VyX2luZm9fcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbSh1c2VySW5mb0FjY2Vzc1N0cmVhbSwgXCJkYXRhXCIsIHVzZXJJbmZvQWNjZXNzSGFuZGxlcik7XG4gICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgaGFzIG5vdCBsb2dnZWQgaW4geWV0XCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYXRlVG9wdXAocHJvdmlkZXIsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgaXNWYWxpZFxuICAgICAgICB9ID0gdmFsaWRhdGVQYXltZW50UHJvdmlkZXIocHJvdmlkZXIsIHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcnMpKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9wdXBTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidG9wdXBcIik7XG5cbiAgICAgICAgY29uc3QgdG9wdXBIYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICAgIGlmIChjaHVuay5uYW1lID09PSBcInRvcHVwX3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmIChjaHVuay5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaHVuay5kYXRhLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihjaHVuay5kYXRhLmVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbSh0b3B1cFN0cmVhbSwgXCJkYXRhXCIsIHRvcHVwSGFuZGxlcik7XG4gICAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQpO1xuXG4gICAgICAgIHRvcHVwU3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcInRvcHVwX3JlcXVlc3RcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwcm92aWRlcixcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiVG9ydXMgaXMgbm90IGluaXRpYWxpemVkIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBsb2dpbldpdGhQcml2YXRlS2V5KGxvZ2luUGFyYW1zKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJpdmF0ZUtleSxcbiAgICAgIHVzZXJJbmZvXG4gICAgfSA9IGxvZ2luUGFyYW1zO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIGlmIChCdWZmZXIuZnJvbShwcml2YXRlS2V5LCBcImhleFwiKS5sZW5ndGggIT09IDMyKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgcHJpdmF0ZSBrZXksIFBsZWFzZSBwcm92aWRlIGEgMzIgYnl0ZSB2YWxpZCBzZWNwMjVrMSBwcml2YXRlIGtleVwiKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9naW5Qcml2S2V5U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcImxvZ2luX3dpdGhfcHJpdmF0ZV9rZXlcIik7XG5cbiAgICAgICAgY29uc3QgbG9naW5IYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICAgIGlmIChjaHVuay5uYW1lID09PSBcImxvZ2luX3dpdGhfcHJpdmF0ZV9rZXlfcmVzcG9uc2VcIikge1xuICAgICAgICAgICAgaWYgKGNodW5rLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICByZXNvbHZlKGNodW5rLmRhdGEuc3VjY2Vzcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGNodW5rLmRhdGEuZXJyb3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlU3RyZWFtKGxvZ2luUHJpdktleVN0cmVhbSwgXCJkYXRhXCIsIGxvZ2luSGFuZGxlcik7XG4gICAgICAgIGxvZ2luUHJpdktleVN0cmVhbS53cml0ZSh7XG4gICAgICAgICAgbmFtZTogXCJsb2dpbl93aXRoX3ByaXZhdGVfa2V5X3JlcXVlc3RcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwcml2YXRlS2V5LFxuICAgICAgICAgICAgdXNlckluZm9cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJUb3J1cyBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0XCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHNob3dXYWxsZXRDb25uZWN0U2Nhbm5lcigpIHtcbiAgICBpZiAoIXRoaXMudXNlV2FsbGV0Q29ubmVjdCkgdGhyb3cgbmV3IEVycm9yKFwiU2V0IGB1c2VXYWxsZXRDb25uZWN0YCBhcyB0cnVlIGluIGluaXQgZnVuY3Rpb24gb3B0aW9ucyB0byB1c2Ugd2FsbGV0IGNvbm5lY3Qgc2Nhbm5lclwiKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcIndhbGxldF9jb25uZWN0X3N0cmVhbVwiKTtcblxuICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0SGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJ3YWxsZXRfY29ubmVjdF9zdHJlYW1fcmVzXCIpIHtcbiAgICAgICAgICAgIGlmIChjaHVuay5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaHVuay5kYXRhLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihjaHVuay5kYXRhLmVycm9yKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlU3RyZWFtKHdhbGxldENvbm5lY3RTdHJlYW0sIFwiZGF0YVwiLCB3YWxsZXRDb25uZWN0SGFuZGxlcik7XG4gICAgICAgIHdhbGxldENvbm5lY3RTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgIG5hbWU6IFwid2FsbGV0X2Nvbm5lY3Rfc3RyZWFtX3JlcVwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUodHJ1ZSk7XG4gICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgaGFzIG5vdCBsb2dnZWQgaW4geWV0XCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQpIHtcbiAgICBsZXQge1xuICAgICAgdXJsLFxuICAgICAgdGFyZ2V0LFxuICAgICAgZmVhdHVyZXNcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIGlmIChwcmVvcGVuSW5zdGFuY2VJZCkge1xuICAgICAgY29uc3Qgd2luZG93U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcIndpbmRvd1wiKTtcbiAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmwgfHwgXCJcIi5jb25jYXQodGhpcy50b3J1c1VybCwgXCIvcmVkaXJlY3Q/cHJlb3Blbkluc3RhbmNlSWQ9XCIpLmNvbmNhdChwcmVvcGVuSW5zdGFuY2VJZCkpO1xuXG4gICAgICBpZiAodGhpcy5kYXBwU3RvcmFnZUtleSkge1xuICAgICAgICAvLyBJZiBtdWx0aXBsZSBpbnN0YW5jZXMsIGl0IHJldHVybnMgdGhlIGZpcnN0IG9uZVxuICAgICAgICBpZiAoZmluYWxVcmwuaGFzaCkgZmluYWxVcmwuaGFzaCArPSBcIiZkYXBwU3RvcmFnZUtleT1cIi5jb25jYXQodGhpcy5kYXBwU3RvcmFnZUtleSk7ZWxzZSBmaW5hbFVybC5oYXNoID0gXCIjZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KHRoaXMuZGFwcFN0b3JhZ2VLZXkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoYW5kbGVkV2luZG93ID0gbmV3IFBvcHVwSGFuZGxlcih7XG4gICAgICAgIHVybDogZmluYWxVcmwsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgZmVhdHVyZXNcbiAgICAgIH0pO1xuICAgICAgaGFuZGxlZFdpbmRvdy5vcGVuKCk7XG5cbiAgICAgIGlmICghaGFuZGxlZFdpbmRvdy53aW5kb3cpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlUG9wdXBCbG9ja0FsZXJ0KHByZW9wZW5JbnN0YW5jZUlkLCBmaW5hbFVybC5ocmVmKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvd1N0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwib3BlbmVkX3dpbmRvd1wiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWRcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNsb3NlSGFuZGxlciA9IF9yZWYzID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZDogcmVjZWl2ZWRJZCxcbiAgICAgICAgICBjbG9zZVxuICAgICAgICB9ID0gX3JlZjM7XG5cbiAgICAgICAgaWYgKHJlY2VpdmVkSWQgPT09IHByZW9wZW5JbnN0YW5jZUlkICYmIGNsb3NlKSB7XG4gICAgICAgICAgaGFuZGxlZFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgIHdpbmRvd1N0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgY2xvc2VIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgd2luZG93U3RyZWFtLm9uKFwiZGF0YVwiLCBjbG9zZUhhbmRsZXIpO1xuICAgICAgaGFuZGxlZFdpbmRvdy5vbmNlKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgICB3aW5kb3dTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkLFxuICAgICAgICAgICAgY2xvc2VkOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93U3RyZWFtLnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLCBjbG9zZUhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3NldEVtYmVkV2hpdGVMYWJlbChlbGVtZW50KSB7XG4gICAgLy8gU2V0IHdoaXRlbGFiZWxcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZVxuICAgIH0gPSB0aGlzLndoaXRlTGFiZWwgfHwge307XG5cbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNEYXJrID0gZmFsc2UsXG4gICAgICAgIGNvbG9ycyA9IHt9XG4gICAgICB9ID0gdGhlbWU7XG4gICAgICBpZiAoaXNEYXJrKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b3J1cy1kYXJrXCIpO1xuICAgICAgaWYgKGNvbG9ycy50b3J1c0JyYW5kMSkgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdG9ydXMtYnJhbmQtMVwiLCBjb2xvcnMudG9ydXNCcmFuZDEpO1xuICAgICAgaWYgKGNvbG9ycy50b3J1c0dyYXkyKSBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS10b3J1cy1ncmF5LTJcIiwgY29sb3JzLnRvcnVzR3JheTIpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRMb2dvVXJsKCkge1xuICAgIHZhciBfdGhpcyR3aGl0ZUxhYmVsLCBfdGhpcyR3aGl0ZUxhYmVsJHRoZW07XG5cbiAgICBsZXQgbG9nb1VybCA9IFwiXCIuY29uY2F0KHRoaXMudG9ydXNVcmwsIFwiL2ltYWdlcy90b3J1c19pY29uLWJsdWUuc3ZnXCIpO1xuXG4gICAgaWYgKChfdGhpcyR3aGl0ZUxhYmVsID0gdGhpcy53aGl0ZUxhYmVsKSAhPT0gbnVsbCAmJiBfdGhpcyR3aGl0ZUxhYmVsICE9PSB2b2lkIDAgJiYgKF90aGlzJHdoaXRlTGFiZWwkdGhlbSA9IF90aGlzJHdoaXRlTGFiZWwudGhlbWUpICE9PSBudWxsICYmIF90aGlzJHdoaXRlTGFiZWwkdGhlbSAhPT0gdm9pZCAwICYmIF90aGlzJHdoaXRlTGFiZWwkdGhlbS5pc0RhcmspIHtcbiAgICAgIHZhciBfdGhpcyR3aGl0ZUxhYmVsMjtcblxuICAgICAgbG9nb1VybCA9ICgoX3RoaXMkd2hpdGVMYWJlbDIgPSB0aGlzLndoaXRlTGFiZWwpID09PSBudWxsIHx8IF90aGlzJHdoaXRlTGFiZWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyR3aGl0ZUxhYmVsMi5sb2dvTGlnaHQpIHx8IGxvZ29Vcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfdGhpcyR3aGl0ZUxhYmVsMztcblxuICAgICAgbG9nb1VybCA9ICgoX3RoaXMkd2hpdGVMYWJlbDMgPSB0aGlzLndoaXRlTGFiZWwpID09PSBudWxsIHx8IF90aGlzJHdoaXRlTGFiZWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyR3aGl0ZUxhYmVsMy5sb2dvRGFyaykgfHwgbG9nb1VybDtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9nb1VybDtcbiAgfVxuXG4gIF9zZW5kV2lkZ2V0VmlzaWJpbGl0eVN0YXR1cyhzdGF0dXMpIHtcbiAgICBjb25zdCB0b3J1c1dpZGdldFZpc2liaWxpdHlTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidG9ydXMtd2lkZ2V0LXZpc2liaWxpdHlcIik7XG4gICAgdG9ydXNXaWRnZXRWaXNpYmlsaXR5U3RyZWFtLndyaXRlKHtcbiAgICAgIGRhdGE6IHN0YXR1c1xuICAgIH0pO1xuICB9XG5cbiAgX2Rpc3BsYXlJZnJhbWUoKSB7XG4gICAgbGV0IGlzRnVsbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgY29uc3Qgc3R5bGUgPSB7fTsgLy8gc2V0IHBoYXNlXG5cbiAgICBpZiAoIWlzRnVsbCkge1xuICAgICAgc3R5bGUuZGlzcGxheSA9IHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBcIjcwcHhcIjtcbiAgICAgIHN0eWxlLndpZHRoID0gXCI3MHB4XCI7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5idXR0b25Qb3NpdGlvbikge1xuICAgICAgICBjYXNlIEJVVFRPTl9QT1NJVElPTi5UT1BfTEVGVDpcbiAgICAgICAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uVE9QX1JJR0hUOlxuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICBzdHlsZS5ib3R0b20gPSBcImF1dG9cIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEJVVFRPTl9QT1NJVElPTi5CT1RUT01fUklHSFQ6XG4gICAgICAgICAgc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUudG9wID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQlVUVE9OX1BPU0lUSU9OLkJPVFRPTV9MRUZUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUudG9wID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgIHN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICBzdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgICBzdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgIHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnRvcnVzSWZyYW1lLnN0eWxlLCBzdHlsZSk7XG4gICAgdGhpcy5pc0lmcmFtZUZ1bGxTY3JlZW4gPSBpc0Z1bGw7XG4gIH1cblxuICBfc2V0dXBXZWIzKCkge1xuICAgIGxvZy5pbmZvKFwic2V0dXBXZWIzIHJ1bm5pbmdcIik7IC8vIHNldHVwIGJhY2tncm91bmQgY29ubmVjdGlvblxuXG4gICAgY29uc3QgbWV0YW1hc2tTdHJlYW0gPSBuZXcgQmFzZVBvc3RNZXNzYWdlU3RyZWFtKHtcbiAgICAgIG5hbWU6IFwiZW1iZWRfbWV0YW1hc2tcIixcbiAgICAgIHRhcmdldDogXCJpZnJhbWVfbWV0YW1hc2tcIixcbiAgICAgIHRhcmdldFdpbmRvdzogdGhpcy50b3J1c0lmcmFtZS5jb250ZW50V2luZG93LFxuICAgICAgdGFyZ2V0T3JpZ2luOiBuZXcgVVJMKHRoaXMudG9ydXNVcmwpLm9yaWdpblxuICAgIH0pOyAvLyBEdWUgdG8gY29tcGF0aWJpbGl0eSByZWFzb25zLCB3ZSBzaG91bGQgbm90IHNldCB1cCBtdWx0aXBsZXhpbmcgb24gd2luZG93Lm1ldGFtYXNrc3RyZWFtXG4gICAgLy8gYmVjYXVzZSB0aGUgTWV0YW1hc2tJbnBhZ2VQcm92aWRlciBhbHNvIGF0dGVtcHRzIHRvIGRvIHNvLlxuICAgIC8vIFdlIGNyZWF0ZSBhbm90aGVyIExvY2FsTWVzc2FnZUR1cGxleFN0cmVhbSBmb3IgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIGRhcHAgPD4gaWZyYW1lXG5cbiAgICBjb25zdCBjb21tdW5pY2F0aW9uU3RyZWFtID0gbmV3IEJhc2VQb3N0TWVzc2FnZVN0cmVhbSh7XG4gICAgICBuYW1lOiBcImVtYmVkX2NvbW1cIixcbiAgICAgIHRhcmdldDogXCJpZnJhbWVfY29tbVwiLFxuICAgICAgdGFyZ2V0V2luZG93OiB0aGlzLnRvcnVzSWZyYW1lLmNvbnRlbnRXaW5kb3csXG4gICAgICB0YXJnZXRPcmlnaW46IG5ldyBVUkwodGhpcy50b3J1c1VybCkub3JpZ2luXG4gICAgfSk7IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBHb3RjaGkgOilcbiAgICAvLyB3aW5kb3cubWV0YW1hc2tTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25TdHJlYW1cbiAgICAvLyBjb21wb3NlIHRoZSBpbnBhZ2UgcHJvdmlkZXJcblxuICAgIGNvbnN0IGlucGFnZVByb3ZpZGVyID0gbmV3IFRvcnVzSW5wYWdlUHJvdmlkZXIobWV0YW1hc2tTdHJlYW0pOyAvLyBkZXRlY3QgZXRoX3JlcXVlc3RBY2NvdW50cyBhbmQgcGlwZSB0byBlbmFibGUgZm9yIG5vd1xuXG4gICAgY29uc3QgZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllciA9IG0gPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBpbnBhZ2VQcm92aWRlclttXTtcblxuICAgICAgaW5wYWdlUHJvdmlkZXJbbV0gPSBmdW5jdGlvbiBwcm92aWRlckZ1bmMobWV0aG9kKSB7XG4gICAgICAgIGlmIChtZXRob2QgJiYgbWV0aG9kID09PSBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIikge1xuICAgICAgICAgIHJldHVybiBpbnBhZ2VQcm92aWRlci5lbmFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBbbWV0aG9kLCAuLi5hcmdzXSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBkZXRlY3RBY2NvdW50UmVxdWVzdFByb3RvdHlwZU1vZGlmaWVyKFwic2VuZFwiKTtcbiAgICBkZXRlY3RBY2NvdW50UmVxdWVzdFByb3RvdHlwZU1vZGlmaWVyKFwic2VuZEFzeW5jXCIpO1xuXG4gICAgaW5wYWdlUHJvdmlkZXIuZW5hYmxlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gSWYgdXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpbiwgd2UgYXNzdW1lIHRoZXkgaGF2ZSBnaXZlbiBhY2Nlc3MgdG8gdGhlIHdlYnNpdGVcbiAgICAgICAgaW5wYWdlUHJvdmlkZXIuc2VuZEFzeW5jKHtcbiAgICAgICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgICAgIGlkOiBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpLFxuICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgcGFyYW1zOiBbXVxuICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzXG4gICAgICAgICAgfSA9IHJlc3BvbnNlIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXMpICYmIHJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB1c2VyIGlzIGFscmVhZHkgcmVoeWRyYXRlZCwgcmVzb2x2ZSB0aGlzXG4gICAgICAgICAgICAvLyBlbHNlIHdhaXQgZm9yIHNvbWV0aGluZyB0byBiZSB3cml0dGVuIHRvIHN0YXR1cyBzdHJlYW1cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVlc3RlZFZlcmlmaWVyICE9PSBcIlwiICYmIHRoaXMuY3VycmVudFZlcmlmaWVyICE9PSB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgcmVxdWVzdGVkVmVyaWZpZXJcbiAgICAgICAgICAgICAgICB9ID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tcHJvbWlzZS1pbi1jYWxsYmFja1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvdXQoKSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9hbHdheXMtcmV0dXJuXG4gICAgICAgICAgICAgICAgLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyID0gcmVxdWVzdGVkVmVyaWZpZXI7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dMb2dpblBvcHVwKHRydWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICAgIGhhbmRsZUxvZ2luQ2IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2dpbkNhbGxiYWNrID0gaGFuZGxlTG9naW5DYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2V0IHVwIGxpc3RlbmVyIGZvciBsb2dpblxuICAgICAgICAgICAgdGhpcy5fc2hvd0xvZ2luUG9wdXAodHJ1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlucGFnZVByb3ZpZGVyLnRyeVByZW9wZW5IYW5kbGUgPSAocGF5bG9hZCwgY2IpID0+IHtcbiAgICAgIGNvbnN0IF9wYXlsb2FkID0gcGF5bG9hZDtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9wYXlsb2FkKSAmJiBVTlNBRkVfTUVUSE9EUy5pbmNsdWRlcyhfcGF5bG9hZC5tZXRob2QpKSB7XG4gICAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQsIHtcbiAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX0NPTkZJUk1fV0lORE9XXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9wYXlsb2FkLnByZW9wZW5JbnN0YW5jZUlkID0gcHJlb3Blbkluc3RhbmNlSWQ7XG4gICAgICB9XG5cbiAgICAgIGlucGFnZVByb3ZpZGVyLl9ycGNFbmdpbmUuaGFuZGxlKF9wYXlsb2FkLCBjYik7XG4gICAgfTsgLy8gV29yayBhcm91bmQgZm9yIHdlYjNAMS4wIGRlbGV0aW5nIHRoZSBib3VuZCBgc2VuZEFzeW5jYCBidXQgbm90IHRoZSB1bmJvdW5kXG4gICAgLy8gYHNlbmRBc3luY2AgbWV0aG9kIG9uIHRoZSBwcm90b3R5cGUsIGNhdXNpbmcgYHRoaXNgIHJlZmVyZW5jZSBpc3N1ZXMgd2l0aCBkcml6emxlXG5cblxuICAgIGNvbnN0IHByb3hpZWRJbnBhZ2VQcm92aWRlciA9IG5ldyBQcm94eShpbnBhZ2VQcm92aWRlciwge1xuICAgICAgLy8gc3RyYWlnaHQgdXAgbGllIHRoYXQgd2UgZGVsZXRlZCB0aGUgcHJvcGVydHkgc28gdGhhdCBpdCBkb2VzbnRcbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGluIHN0cmljdCBtb2RlXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKCkgPT4gdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZXRoZXJldW0gPSBwcm94aWVkSW5wYWdlUHJvdmlkZXI7XG4gICAgY29uc3QgY29tbXVuaWNhdGlvbk11eCA9IHNldHVwTXVsdGlwbGV4KGNvbW11bmljYXRpb25TdHJlYW0pO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbk11eCA9IGNvbW11bmljYXRpb25NdXg7XG4gICAgY29uc3Qgd2luZG93U3RyZWFtID0gY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3aW5kb3dcIik7XG4gICAgd2luZG93U3RyZWFtLm9uKFwiZGF0YVwiLCBjaHVuayA9PiB7XG4gICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJjcmVhdGVfd2luZG93XCIpIHtcbiAgICAgICAgLy8gdXJsIGlzIHRoZSB1cmwgd2UgbmVlZCB0byBvcGVuXG4gICAgICAgIC8vIHdlIGNhbiBwYXNzIHRoZSBmaW5hbCB1cmwgdXBmcm9udCBzbyB0aGF0IGl0IHJlbW92ZXMgdGhlIHN0ZXAgb2YgcmVkaXJlY3RpbmcgdG8gL3JlZGlyZWN0IGFuZCB3YWl0aW5nIGZvciBmaW5hbFVybFxuICAgICAgICB0aGlzLl9jcmVhdGVQb3B1cEJsb2NrQWxlcnQoY2h1bmsuZGF0YS5wcmVvcGVuSW5zdGFuY2VJZCwgY2h1bmsuZGF0YS51cmwpO1xuICAgICAgfVxuICAgIH0pOyAvLyBzaG93IHRvcnVzIHdpZGdldCBpZiBidXR0b24gY2xpY2tlZFxuXG4gICAgY29uc3Qgd2lkZ2V0U3RyZWFtID0gY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3aWRnZXRcIik7XG4gICAgd2lkZ2V0U3RyZWFtLm9uKFwiZGF0YVwiLCBjaHVuayA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGFcbiAgICAgIH0gPSBjaHVuaztcblxuICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZShkYXRhKTtcbiAgICB9KTsgLy8gU2hvdyB0b3J1cyBidXR0b24gaWYgd2FsbGV0IGhhcyBiZWVuIGh5ZHJhdGVkL2RldGVjdGVkXG5cbiAgICBjb25zdCBzdGF0dXNTdHJlYW0gPSBjb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInN0YXR1c1wiKTtcbiAgICBzdGF0dXNTdHJlYW0ub24oXCJkYXRhXCIsIHN0YXR1cyA9PiB7XG4gICAgICAvLyBsb2dpblxuICAgICAgaWYgKHN0YXR1cy5sb2dnZWRJbikge1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBzdGF0dXMubG9nZ2VkSW47XG4gICAgICAgIHRoaXMuY3VycmVudFZlcmlmaWVyID0gc3RhdHVzLnZlcmlmaWVyO1xuICAgICAgfSAvLyBsb2dvdXRcbiAgICAgIGVsc2UgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuXG4gICAgICBpZiAodGhpcy5pc0xvZ2luQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5pc0xvZ2luQ2FsbGJhY2soKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXNMb2dpbkNhbGxiYWNrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucHJvdmlkZXIgPSBwcm94aWVkSW5wYWdlUHJvdmlkZXI7XG4gICAgaWYgKHRoaXMucHJvdmlkZXIuc2hvdWxkU2VuZE1ldGFkYXRhKSBzZW5kU2l0ZU1ldGFkYXRhKHRoaXMucHJvdmlkZXIuX3JwY0VuZ2luZSk7XG5cbiAgICBpbnBhZ2VQcm92aWRlci5faW5pdGlhbGl6ZVN0YXRlKCk7XG5cbiAgICBsb2cuZGVidWcoXCJUb3J1cyAtIGluamVjdGVkIHByb3ZpZGVyXCIpO1xuICB9XG5cbiAgX3Nob3dMb2dpblBvcHVwKGNhbGxlZEZyb21FbWJlZCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgY29uc3QgbG9naW5IYW5kbGVyID0gZGF0YSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVycixcbiAgICAgICAgc2VsZWN0ZWRBZGRyZXNzXG4gICAgICB9ID0gZGF0YTtcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBsb2cuZXJyb3IoZXJyKTtcbiAgICAgICAgaWYgKHJlamVjdCkgcmVqZWN0KGVycik7XG4gICAgICB9IC8vIHJldHVybnMgYW4gYXJyYXkgKGNhdXNlIGFjY291bnRzIGV4cGVjdHMgaXQpXG4gICAgICBlbHNlIGlmIChyZXNvbHZlKSByZXNvbHZlKFtzZWxlY3RlZEFkZHJlc3NdKTtcblxuICAgICAgaWYgKHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuKSB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9hdXRoU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcIm9hdXRoXCIpO1xuXG4gICAgaWYgKCF0aGlzLnJlcXVlc3RlZFZlcmlmaWVyKSB7XG4gICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKHRydWUpO1xuXG4gICAgICBoYW5kbGVTdHJlYW0ob2F1dGhTdHJlYW0sIFwiZGF0YVwiLCBsb2dpbkhhbmRsZXIpO1xuICAgICAgb2F1dGhTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcIm9hdXRoX21vZGFsXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYWxsZWRGcm9tRW1iZWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZVN0cmVhbShvYXV0aFN0cmVhbSwgXCJkYXRhXCIsIGxvZ2luSGFuZGxlcik7XG4gICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCk7XG5cbiAgICAgIG9hdXRoU3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJvYXV0aFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2FsbGVkRnJvbUVtYmVkLFxuICAgICAgICAgIHZlcmlmaWVyOiB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyLFxuICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkLFxuICAgICAgICAgIGxvZ2luX2hpbnQ6IHRoaXMubG9naW5IaW50XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVQb3B1cEJsb2NrQWxlcnQocHJlb3Blbkluc3RhbmNlSWQsIHVybCkge1xuICAgIGNvbnN0IGxvZ29VcmwgPSB0aGlzLl9nZXRMb2dvVXJsKCk7XG5cbiAgICBjb25zdCB0b3J1c0FsZXJ0ID0gaHRtbFRvRWxlbWVudCgnPGRpdiBpZD1cInRvcnVzQWxlcnRcIiBjbGFzcz1cInRvcnVzLWFsZXJ0LS12MlwiPicgKyBcIjxkaXYgaWQ9XFxcInRvcnVzQWxlcnRfX2xvZ29cXFwiPjxpbWcgc3JjPVxcXCJcIi5jb25jYXQobG9nb1VybCwgXCJcXFwiIC8+PC9kaXY+XCIpICsgXCI8ZGl2PlwiICsgXCI8aDEgaWQ9XFxcInRvcnVzQWxlcnRfX3RpdGxlXFxcIj5cIi5jb25jYXQodGhpcy5lbWJlZFRyYW5zbGF0aW9ucy5hY3Rpb25SZXF1aXJlZCwgXCI8L2gxPlwiKSArIFwiPHAgaWQ9XFxcInRvcnVzQWxlcnRfX2Rlc2NcXFwiPlwiLmNvbmNhdCh0aGlzLmVtYmVkVHJhbnNsYXRpb25zLnBlbmRpbmdBY3Rpb24sIFwiPC9wPlwiKSArIFwiPC9kaXY+XCIgKyBcIjwvZGl2PlwiKTtcbiAgICBjb25zdCBzdWNjZXNzQWxlcnQgPSBodG1sVG9FbGVtZW50KFwiPGRpdj48YSBpZD1cXFwidG9ydXNBbGVydF9fYnRuXFxcIj5cIi5jb25jYXQodGhpcy5lbWJlZFRyYW5zbGF0aW9ucy5jb250aW51ZSwgXCI8L2E+PC9kaXY+XCIpKTtcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBodG1sVG9FbGVtZW50KCc8ZGl2IGlkPVwidG9ydXNBbGVydF9fYnRuLWNvbnRhaW5lclwiPjwvZGl2PicpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzQWxlcnQpO1xuICAgIHRvcnVzQWxlcnQuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJpbmRPbkxvYWQgPSAoKSA9PiB7XG4gICAgICBzdWNjZXNzQWxlcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkLCB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfQ09ORklSTV9XSU5ET1dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9ydXNBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgaWYgKHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPT09IDApIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fc2V0RW1iZWRXaGl0ZUxhYmVsKHRvcnVzQWxlcnQpO1xuXG4gICAgY29uc3QgYXR0YWNoT25Mb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9ydXNBbGVydCk7XG4gICAgfTtcblxuICAgIHJ1bk9uTG9hZChhdHRhY2hPbkxvYWQpO1xuICAgIHJ1bk9uTG9hZChiaW5kT25Mb2FkKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEJVVFRPTl9QT1NJVElPTiwgTE9HSU5fUFJPVklERVIsIFBBWU1FTlRfUFJPVklERVIsIFNVUFBPUlRFRF9QQVlNRU5UX05FVFdPUkssIFRPUlVTX0JVSUxEX0VOViwgVG9ydXNJbnBhZ2VQcm92aWRlciwgV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVAsIFdBTExFVF9WRVJJRklFUlMsIFRvcnVzIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvcnVzLmVzbS5qcy5tYXBcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgVG9ydXMgZnJvbSBcIkB0b3J1c2xhYnMvdG9ydXMtZW1iZWRcIjtcbmV4cG9ydCB2YXIgZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBbMiwgbmV3IFRvcnVzKCldO1xuICAgIH0pO1xufSk7IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ub3J1c1Byb3ZpZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgRUMgPSByZXF1aXJlKFwiZWxsaXB0aWNcIikuZWM7XG5cbnZhciBlYyA9IG5ldyBFQyhcInNlY3AyNTZrMVwiKTtcbnZhciBicm93c2VyQ3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG8gfHwge307XG52YXIgc3VidGxlID0gYnJvd3NlckNyeXB0by5zdWJ0bGUgfHwgYnJvd3NlckNyeXB0by53ZWJraXRTdWJ0bGU7XG5cbnZhciBub2RlQ3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbmNvbnN0IEVDX0dST1VQX09SREVSID0gQnVmZmVyLmZyb20oJ2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlYmFhZWRjZTZhZjQ4YTAzYmJmZDI1ZThjZDAzNjQxNDEnLCAnaGV4Jyk7XG5jb25zdCBaRVJPMzIgPSBCdWZmZXIuYWxsb2MoMzIsIDApO1xuXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgXCJBc3NlcnRpb24gZmFpbGVkXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU2NhbGFyICh4KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoeCkgJiYgeC5sZW5ndGggPT09IDMyO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSB7XG4gIGlmICghaXNTY2FsYXIocHJpdmF0ZUtleSkpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHByaXZhdGVLZXkuY29tcGFyZShaRVJPMzIpID4gMCAmJiAvLyA+IDBcbiAgcHJpdmF0ZUtleS5jb21wYXJlKEVDX0dST1VQX09SREVSKSA8IDA7IC8vIDwgR1xufVxuXG4vLyBDb21wYXJlIHR3byBidWZmZXJzIGluIGNvbnN0YW50IHRpbWUgdG8gcHJldmVudCB0aW1pbmcgYXR0YWNrcy5cbmZ1bmN0aW9uIGVxdWFsQ29uc3RUaW1lKGIxLCBiMikge1xuICBpZiAoYjEubGVuZ3RoICE9PSBiMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHJlcyA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYjEubGVuZ3RoOyBpKyspIHtcbiAgICByZXMgfD0gYjFbaV0gXiBiMltpXTsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICB9XG4gIHJldHVybiByZXMgPT09IDA7XG59XG5cbi8qIFRoaXMgbXVzdCBjaGVjayBpZiB3ZSdyZSBpbiB0aGUgYnJvd3NlciBvclxubm90LCBzaW5jZSB0aGUgZnVuY3Rpb25zIGFyZSBkaWZmZXJlbnQgYW5kIGRvZXNcbm5vdCBjb252ZXJ0IHVzaW5nIGJyb3dzZXJpZnkgKi9cbmZ1bmN0aW9uIHJhbmRvbUJ5dGVzKHNpemUpIHtcbiAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICBpZiAodHlwZW9mIGJyb3dzZXJDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShub2RlQ3J5cHRvLnJhbmRvbUJ5dGVzKHNpemUpKTtcbiAgfSBlbHNlIHtcbiAgICBicm93c2VyQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnIpO1xuICB9XG4gIHJldHVybiBCdWZmZXIuZnJvbShhcnIpO1xufVxuXG5mdW5jdGlvbiBzaGE1MTIobXNnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGhhc2ggPSBub2RlQ3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTUxMicpO1xuICAgIHZhciByZXN1bHQgPSBoYXNoLnVwZGF0ZShtc2cpLmRpZ2VzdCgpO1xuICAgIHJlc29sdmUobmV3IFVpbnQ4QXJyYXkocmVzdWx0KSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBZXMob3ApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl2LCBrZXksIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgaWYgKHN1YnRsZSkge1xuICAgICAgICB2YXIgaW1wb3J0QWxnb3JpdGhtID0ge25hbWU6IFwiQUVTLUNCQ1wifTtcbiAgICAgICAgdmFyIGtleXAgPSBzdWJ0bGUuaW1wb3J0S2V5KFwicmF3XCIsIGtleSwgaW1wb3J0QWxnb3JpdGhtLCBmYWxzZSwgW29wXSk7XG4gICAgICAgIHJldHVybiBrZXlwLnRoZW4oZnVuY3Rpb24oY3J5cHRvS2V5KSB7XG4gICAgICAgICAgdmFyIGVuY0FsZ29yaXRobSA9IHtuYW1lOiBcIkFFUy1DQkNcIiwgaXY6IGl2fTtcbiAgICAgICAgICByZXR1cm4gc3VidGxlW29wXShlbmNBbGdvcml0aG0sIGNyeXB0b0tleSwgZGF0YSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmVzb2x2ZShCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShyZXN1bHQpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wID09PSAnZW5jcnlwdCcpIHtcbiAgICAgICAgICB2YXIgY2lwaGVyID0gbm9kZUNyeXB0by5jcmVhdGVDaXBoZXJpdignYWVzLTI1Ni1jYmMnLCBrZXksIGl2KTtcbiAgICAgICAgICBsZXQgZmlyc3RDaHVuayA9IGNpcGhlci51cGRhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHNlY29uZENodW5rID0gY2lwaGVyLmZpbmFsKCk7XG4gICAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KFtmaXJzdENodW5rLCBzZWNvbmRDaHVua10pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcCA9PT0gJ2RlY3J5cHQnKSB7XG4gICAgICAgICAgdmFyIGRlY2lwaGVyID0gbm9kZUNyeXB0by5jcmVhdGVEZWNpcGhlcml2KCdhZXMtMjU2LWNiYycsIGtleSwgaXYpO1xuICAgICAgICAgIGxldCBmaXJzdENodW5rID0gZGVjaXBoZXIudXBkYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCBzZWNvbmRDaHVuayA9IGRlY2lwaGVyLmZpbmFsKCk7XG4gICAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KFtmaXJzdENodW5rLCBzZWNvbmRDaHVua10pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG52YXIgYWVzQ2JjRW5jcnlwdCA9IGdldEFlcyhcImVuY3J5cHRcIik7XG52YXIgYWVzQ2JjRGVjcnlwdCA9IGdldEFlcyhcImRlY3J5cHRcIik7XG5cbmZ1bmN0aW9uIGhtYWNTaGEyNTZTaWduKGtleSwgbXNnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGhtYWMgPSBub2RlQ3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTI1NicsIEJ1ZmZlci5mcm9tKGtleSkpO1xuICAgIGhtYWMudXBkYXRlKG1zZyk7XG4gICAgdmFyIHJlc3VsdCA9IGhtYWMuZGlnZXN0KCk7XG4gICAgcmVzb2x2ZShyZXN1bHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaG1hY1NoYTI1NlZlcmlmeShrZXksIG1zZywgc2lnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGhtYWMgPSBub2RlQ3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTI1NicsIEJ1ZmZlci5mcm9tKGtleSkpO1xuICAgIGhtYWMudXBkYXRlKG1zZyk7XG4gICAgdmFyIGV4cGVjdGVkU2lnID0gaG1hYy5kaWdlc3QoKTtcbiAgICByZXNvbHZlKGVxdWFsQ29uc3RUaW1lKGV4cGVjdGVkU2lnLCBzaWcpKTtcbiAgfSk7XG59XG5cbi8qKlxuICAqIEdlbmVyYXRlIGEgbmV3IHZhbGlkIHByaXZhdGUga2V5LiBXaWxsIHVzZSB0aGUgd2luZG93LmNyeXB0byBvciB3aW5kb3cubXNDcnlwdG8gYXMgc291cmNlXG4gICogZGVwZW5kaW5nIG9uIHlvdXIgYnJvd3Nlci5cbiAgKiBAcmV0dXJuIHtCdWZmZXJ9IEEgMzItYnl0ZSBwcml2YXRlIGtleS5cbiAgKiBAZnVuY3Rpb25cbiAgKi9cbmV4cG9ydHMuZ2VuZXJhdGVQcml2YXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJpdmF0ZUtleSA9IHJhbmRvbUJ5dGVzKDMyKTtcbiAgd2hpbGUgKCFpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSkge1xuICAgIHByaXZhdGVLZXkgPSByYW5kb21CeXRlcygzMik7XG4gIH1cbiAgcmV0dXJuIHByaXZhdGVLZXk7XG59O1xuXG52YXIgZ2V0UHVibGljID0gZXhwb3J0cy5nZXRQdWJsaWMgPSBmdW5jdGlvbihwcml2YXRlS2V5KSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gaGFzIHN5bmMgQVBJIHNvIHdlIHRocm93IGFuIGVycm9yIGltbWVkaWF0ZWx5LlxuICBhc3NlcnQocHJpdmF0ZUtleS5sZW5ndGggPT09IDMyLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXkpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgLy8gWFhYKEthZ2FtaSk6IGBlbGxpcHRpYy51dGlscy5lbmNvZGVgIHJldHVybnMgYXJyYXkgZm9yIGV2ZXJ5XG4gIC8vIGVuY29kaW5nIGV4Y2VwdCBgaGV4YC5cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkpLmdldFB1YmxpYyhcImFyclwiKSk7XG59O1xuXG4vKipcbiAqIEdldCBjb21wcmVzc2VkIHZlcnNpb24gb2YgcHVibGljIGtleS5cbiAqL1xudmFyIGdldFB1YmxpY0NvbXByZXNzZWQgPSBleHBvcnRzLmdldFB1YmxpY0NvbXByZXNzZWQgPSBmdW5jdGlvbihwcml2YXRlS2V5KSB7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICBhc3NlcnQocHJpdmF0ZUtleS5sZW5ndGggPT09IDMyLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXkpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93YW5kZXJlci9zZWNwMjU2azEtbm9kZS9pc3N1ZXMvNDZcbiAgbGV0IGNvbXByZXNzZWQgPSB0cnVlO1xuICByZXR1cm4gQnVmZmVyLmZyb20oZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleSkuZ2V0UHVibGljKGNvbXByZXNzZWQsIFwiYXJyXCIpKTtcbn07XG5cbi8vIE5PVEUoS2FnYW1pKTogV2UgZG9uJ3QgdXNlIHByb21pc2Ugc2hpbSBpbiBCcm93c2VyIGltcGxlbWVudGF0aW9uXG4vLyBiZWNhdXNlIGl0J3Mgc3VwcG9ydGVkIG5hdGl2ZWx5IGluIG5ldyBicm93c2VycyAoc2VlXG4vLyA8aHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PXByb21pc2VzPikgYW5kIHdlIGNhbiB1c2Ugb25seSBuZXcgYnJvd3NlcnNcbi8vIGJlY2F1c2Ugb2YgdGhlIFdlYkNyeXB0b0FQSSAoc2VlXG4vLyA8aHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWNyeXB0b2dyYXBoeT4pLlxuZXhwb3J0cy5zaWduID0gZnVuY3Rpb24ocHJpdmF0ZUtleSwgbXNnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXkpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQobXNnLmxlbmd0aCA+IDAsIFwiTWVzc2FnZSBzaG91bGQgbm90IGJlIGVtcHR5XCIpO1xuICAgIGFzc2VydChtc2cubGVuZ3RoIDw9IDMyLCBcIk1lc3NhZ2UgaXMgdG9vIGxvbmdcIik7XG4gICAgcmVzb2x2ZShCdWZmZXIuZnJvbShlYy5zaWduKG1zZywgcHJpdmF0ZUtleSwge2Nhbm9uaWNhbDogdHJ1ZX0pLnRvREVSKCkpKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLnZlcmlmeSA9IGZ1bmN0aW9uKHB1YmxpY0tleSwgbXNnLCBzaWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGFzc2VydChwdWJsaWNLZXkubGVuZ3RoID09PSA2NSB8fCBwdWJsaWNLZXkubGVuZ3RoID09PSAzMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICBpZiAocHVibGljS2V5Lmxlbmd0aCA9PT0gNjUpXG4gICAge1xuICAgICAgYXNzZXJ0KHB1YmxpY0tleVswXSA9PT0gNCwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgaWYgKHB1YmxpY0tleS5sZW5ndGggPT09IDMzKVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlbMF0gPT09IDIgfHwgcHVibGljS2V5WzBdID09PSAzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICBhc3NlcnQobXNnLmxlbmd0aCA+IDAsIFwiTWVzc2FnZSBzaG91bGQgbm90IGJlIGVtcHR5XCIpO1xuICAgIGFzc2VydChtc2cubGVuZ3RoIDw9IDMyLCBcIk1lc3NhZ2UgaXMgdG9vIGxvbmdcIik7XG4gICAgaWYgKGVjLnZlcmlmeShtc2csIHNpZywgcHVibGljS2V5KSkge1xuICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkJhZCBzaWduYXR1cmVcIikpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgZGVyaXZlID0gZXhwb3J0cy5kZXJpdmUgPSBmdW5jdGlvbihwcml2YXRlS2V5QSwgcHVibGljS2V5Qikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIGFzc2VydChCdWZmZXIuaXNCdWZmZXIocHJpdmF0ZUtleUEpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKHB1YmxpY0tleUIpLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIGFzc2VydChwcml2YXRlS2V5QS5sZW5ndGggPT09IDMyLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQoaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleUEpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQocHVibGljS2V5Qi5sZW5ndGggPT09IDY1IHx8IHB1YmxpY0tleUIubGVuZ3RoID09PSAzMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICBpZiAocHVibGljS2V5Qi5sZW5ndGggPT09IDY1KVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlCWzBdID09PSA0LCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICBpZiAocHVibGljS2V5Qi5sZW5ndGggPT09IDMzKVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlCWzBdID09PSAyIHx8IHB1YmxpY0tleUJbMF0gPT09IDMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIHZhciBrZXlBID0gZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleUEpO1xuICAgIHZhciBrZXlCID0gZWMua2V5RnJvbVB1YmxpYyhwdWJsaWNLZXlCKTtcbiAgICB2YXIgUHggPSBrZXlBLmRlcml2ZShrZXlCLmdldFB1YmxpYygpKTsgIC8vIEJOIGluc3RhbmNlXG4gICAgcmVzb2x2ZShCdWZmZXIuZnJvbShQeC50b0FycmF5KCkpKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmVuY3J5cHQgPSBmdW5jdGlvbihwdWJsaWNLZXlUbywgbXNnLCBvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAvLyBUbXAgdmFyaWFibGVzIHRvIHNhdmUgY29udGV4dCBmcm9tIGZsYXQgcHJvbWlzZXM7XG4gIHZhciBpdiwgZXBoZW1QdWJsaWNLZXksIGNpcGhlcnRleHQsIG1hY0tleTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICB2YXIgZXBoZW1Qcml2YXRlS2V5ID0gb3B0cy5lcGhlbVByaXZhdGVLZXkgfHwgcmFuZG9tQnl0ZXMoMzIpO1xuICAgIC8vIFRoZXJlIGlzIGEgdmVyeSB1bmxpa2VseSBwb3NzaWJpbGl0eSB0aGF0IGl0IGlzIG5vdCBhIHZhbGlkIGtleVxuICAgIHdoaWxlKCFpc1ZhbGlkUHJpdmF0ZUtleShlcGhlbVByaXZhdGVLZXkpKVxuICAgIHtcbiAgICAgIGVwaGVtUHJpdmF0ZUtleSA9IG9wdHMuZXBoZW1Qcml2YXRlS2V5IHx8IHJhbmRvbUJ5dGVzKDMyKTtcbiAgICB9XG4gICAgZXBoZW1QdWJsaWNLZXkgPSBnZXRQdWJsaWMoZXBoZW1Qcml2YXRlS2V5KTtcbiAgICByZXNvbHZlKGRlcml2ZShlcGhlbVByaXZhdGVLZXksIHB1YmxpY0tleVRvKSk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oUHgpIHtcbiAgICByZXR1cm4gc2hhNTEyKFB4KTtcbiAgfSkudGhlbihmdW5jdGlvbihoYXNoKSB7XG4gICAgaXYgPSBvcHRzLml2IHx8IHJhbmRvbUJ5dGVzKDE2KTtcbiAgICB2YXIgZW5jcnlwdGlvbktleSA9IGhhc2guc2xpY2UoMCwgMzIpO1xuICAgIG1hY0tleSA9IGhhc2guc2xpY2UoMzIpO1xuICAgIHJldHVybiBhZXNDYmNFbmNyeXB0KGl2LCBlbmNyeXB0aW9uS2V5LCBtc2cpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBjaXBoZXJ0ZXh0ID0gZGF0YTtcbiAgICB2YXIgZGF0YVRvTWFjID0gQnVmZmVyLmNvbmNhdChbaXYsIGVwaGVtUHVibGljS2V5LCBjaXBoZXJ0ZXh0XSk7XG4gICAgcmV0dXJuIGhtYWNTaGEyNTZTaWduKG1hY0tleSwgZGF0YVRvTWFjKTtcbiAgfSkudGhlbihmdW5jdGlvbihtYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXY6IGl2LFxuICAgICAgZXBoZW1QdWJsaWNLZXk6IGVwaGVtUHVibGljS2V5LFxuICAgICAgY2lwaGVydGV4dDogY2lwaGVydGV4dCxcbiAgICAgIG1hYzogbWFjLFxuICAgIH07XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWNyeXB0ID0gZnVuY3Rpb24ocHJpdmF0ZUtleSwgb3B0cykge1xuICAvLyBUbXAgdmFyaWFibGUgdG8gc2F2ZSBjb250ZXh0IGZyb20gZmxhdCBwcm9taXNlcztcbiAgdmFyIGVuY3J5cHRpb25LZXk7XG4gIHJldHVybiBkZXJpdmUocHJpdmF0ZUtleSwgb3B0cy5lcGhlbVB1YmxpY0tleSkudGhlbihmdW5jdGlvbihQeCkge1xuICAgIHJldHVybiBzaGE1MTIoUHgpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGhhc2gpIHtcbiAgICBlbmNyeXB0aW9uS2V5ID0gaGFzaC5zbGljZSgwLCAzMik7XG4gICAgdmFyIG1hY0tleSA9IGhhc2guc2xpY2UoMzIpO1xuICAgIHZhciBkYXRhVG9NYWMgPSBCdWZmZXIuY29uY2F0KFtcbiAgICAgIG9wdHMuaXYsXG4gICAgICBvcHRzLmVwaGVtUHVibGljS2V5LFxuICAgICAgb3B0cy5jaXBoZXJ0ZXh0XG4gICAgXSk7XG4gICAgcmV0dXJuIGhtYWNTaGEyNTZWZXJpZnkobWFjS2V5LCBkYXRhVG9NYWMsIG9wdHMubWFjKTtcbiAgfSkudGhlbihmdW5jdGlvbihtYWNHb29kKSB7XG4gICAgYXNzZXJ0KG1hY0dvb2QsIFwiQmFkIE1BQ1wiKTtcbiAgICByZXR1cm4gYWVzQ2JjRGVjcnlwdChvcHRzLml2LCBlbmNyeXB0aW9uS2V5LCBvcHRzLmNpcGhlcnRleHQpO1xuICB9KS50aGVuKGZ1bmN0aW9uKG1zZykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShtc2cpKTtcbiAgfSk7XG59O1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwYWRfc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9wYWQtc3RyaW5nXCIpO1xuZnVuY3Rpb24gZW5jb2RlKGlucHV0LCBlbmNvZGluZykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gdm9pZCAwKSB7IGVuY29kaW5nID0gXCJ1dGY4XCI7IH1cbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gZnJvbUJhc2U2NChpbnB1dC50b1N0cmluZyhcImJhc2U2NFwiKSk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tQmFzZTY0KEJ1ZmZlci5mcm9tKGlucHV0LCBlbmNvZGluZykudG9TdHJpbmcoXCJiYXNlNjRcIikpO1xufVxuO1xuZnVuY3Rpb24gZGVjb2RlKGJhc2U2NHVybCwgZW5jb2RpbmcpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09IHZvaWQgMCkgeyBlbmNvZGluZyA9IFwidXRmOFwiOyB9XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRvQmFzZTY0KGJhc2U2NHVybCksIFwiYmFzZTY0XCIpLnRvU3RyaW5nKGVuY29kaW5nKTtcbn1cbmZ1bmN0aW9uIHRvQmFzZTY0KGJhc2U2NHVybCkge1xuICAgIGJhc2U2NHVybCA9IGJhc2U2NHVybC50b1N0cmluZygpO1xuICAgIHJldHVybiBwYWRfc3RyaW5nXzEuZGVmYXVsdChiYXNlNjR1cmwpXG4gICAgICAgIC5yZXBsYWNlKC9cXC0vZywgXCIrXCIpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csIFwiL1wiKTtcbn1cbmZ1bmN0aW9uIGZyb21CYXNlNjQoYmFzZTY0KSB7XG4gICAgcmV0dXJuIGJhc2U2NFxuICAgICAgICAucmVwbGFjZSgvPS9nLCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvXFwrL2csIFwiLVwiKVxuICAgICAgICAucmVwbGFjZSgvXFwvL2csIFwiX1wiKTtcbn1cbmZ1bmN0aW9uIHRvQnVmZmVyKGJhc2U2NHVybCkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh0b0Jhc2U2NChiYXNlNjR1cmwpLCBcImJhc2U2NFwiKTtcbn1cbnZhciBiYXNlNjR1cmwgPSBlbmNvZGU7XG5iYXNlNjR1cmwuZW5jb2RlID0gZW5jb2RlO1xuYmFzZTY0dXJsLmRlY29kZSA9IGRlY29kZTtcbmJhc2U2NHVybC50b0Jhc2U2NCA9IHRvQmFzZTY0O1xuYmFzZTY0dXJsLmZyb21CYXNlNjQgPSBmcm9tQmFzZTY0O1xuYmFzZTY0dXJsLnRvQnVmZmVyID0gdG9CdWZmZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBiYXNlNjR1cmw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHBhZFN0cmluZyhpbnB1dCkge1xuICAgIHZhciBzZWdtZW50TGVuZ3RoID0gNDtcbiAgICB2YXIgc3RyaW5nTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHZhciBkaWZmID0gc3RyaW5nTGVuZ3RoICUgc2VnbWVudExlbmd0aDtcbiAgICBpZiAoIWRpZmYpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICB2YXIgcG9zaXRpb24gPSBzdHJpbmdMZW5ndGg7XG4gICAgdmFyIHBhZExlbmd0aCA9IHNlZ21lbnRMZW5ndGggLSBkaWZmO1xuICAgIHZhciBwYWRkZWRTdHJpbmdMZW5ndGggPSBzdHJpbmdMZW5ndGggKyBwYWRMZW5ndGg7XG4gICAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvYyhwYWRkZWRTdHJpbmdMZW5ndGgpO1xuICAgIGJ1ZmZlci53cml0ZShpbnB1dCk7XG4gICAgd2hpbGUgKHBhZExlbmd0aC0tKSB7XG4gICAgICAgIGJ1ZmZlci53cml0ZShcIj1cIiwgcG9zaXRpb24rKyk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHBhZFN0cmluZztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Jhc2U2NHVybCcpLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cblxuZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xuICB9XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gQnVmZmVyLmlzQnVmZmVyO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG4iLCJ2YXIgb25jZSA9IHJlcXVpcmUoJ29uY2UnKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXG52YXIgaXNSZXF1ZXN0ID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdHJldHVybiBzdHJlYW0uc2V0SGVhZGVyICYmIHR5cGVvZiBzdHJlYW0uYWJvcnQgPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgaXNDaGlsZFByb2Nlc3MgPSBmdW5jdGlvbihzdHJlYW0pIHtcblx0cmV0dXJuIHN0cmVhbS5zdGRpbyAmJiBBcnJheS5pc0FycmF5KHN0cmVhbS5zdGRpbykgJiYgc3RyZWFtLnN0ZGlvLmxlbmd0aCA9PT0gM1xufTtcblxudmFyIGVvcyA9IGZ1bmN0aW9uKHN0cmVhbSwgb3B0cywgY2FsbGJhY2spIHtcblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZW9zKHN0cmVhbSwgbnVsbCwgb3B0cyk7XG5cdGlmICghb3B0cykgb3B0cyA9IHt9O1xuXG5cdGNhbGxiYWNrID0gb25jZShjYWxsYmFjayB8fCBub29wKTtcblxuXHR2YXIgd3MgPSBzdHJlYW0uX3dyaXRhYmxlU3RhdGU7XG5cdHZhciBycyA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcblx0dmFyIHJlYWRhYmxlID0gb3B0cy5yZWFkYWJsZSB8fCAob3B0cy5yZWFkYWJsZSAhPT0gZmFsc2UgJiYgc3RyZWFtLnJlYWRhYmxlKTtcblx0dmFyIHdyaXRhYmxlID0gb3B0cy53cml0YWJsZSB8fCAob3B0cy53cml0YWJsZSAhPT0gZmFsc2UgJiYgc3RyZWFtLndyaXRhYmxlKTtcblx0dmFyIGNhbmNlbGxlZCA9IGZhbHNlO1xuXG5cdHZhciBvbmxlZ2FjeWZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghc3RyZWFtLndyaXRhYmxlKSBvbmZpbmlzaCgpO1xuXHR9O1xuXG5cdHZhciBvbmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHdyaXRhYmxlID0gZmFsc2U7XG5cdFx0aWYgKCFyZWFkYWJsZSkgY2FsbGJhY2suY2FsbChzdHJlYW0pO1xuXHR9O1xuXG5cdHZhciBvbmVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJlYWRhYmxlID0gZmFsc2U7XG5cdFx0aWYgKCF3cml0YWJsZSkgY2FsbGJhY2suY2FsbChzdHJlYW0pO1xuXHR9O1xuXG5cdHZhciBvbmV4aXQgPSBmdW5jdGlvbihleGl0Q29kZSkge1xuXHRcdGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBleGl0Q29kZSA/IG5ldyBFcnJvcignZXhpdGVkIHdpdGggZXJyb3IgY29kZTogJyArIGV4aXRDb2RlKSA6IG51bGwpO1xuXHR9O1xuXG5cdHZhciBvbmVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG5cdFx0Y2FsbGJhY2suY2FsbChzdHJlYW0sIGVycik7XG5cdH07XG5cblx0dmFyIG9uY2xvc2UgPSBmdW5jdGlvbigpIHtcblx0XHRwcm9jZXNzLm5leHRUaWNrKG9uY2xvc2VuZXh0dGljayk7XG5cdH07XG5cblx0dmFyIG9uY2xvc2VuZXh0dGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChjYW5jZWxsZWQpIHJldHVybjtcblx0XHRpZiAocmVhZGFibGUgJiYgIShycyAmJiAocnMuZW5kZWQgJiYgIXJzLmRlc3Ryb3llZCkpKSByZXR1cm4gY2FsbGJhY2suY2FsbChzdHJlYW0sIG5ldyBFcnJvcigncHJlbWF0dXJlIGNsb3NlJykpO1xuXHRcdGlmICh3cml0YWJsZSAmJiAhKHdzICYmICh3cy5lbmRlZCAmJiAhd3MuZGVzdHJveWVkKSkpIHJldHVybiBjYWxsYmFjay5jYWxsKHN0cmVhbSwgbmV3IEVycm9yKCdwcmVtYXR1cmUgY2xvc2UnKSk7XG5cdH07XG5cblx0dmFyIG9ucmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdHN0cmVhbS5yZXEub24oJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0fTtcblxuXHRpZiAoaXNSZXF1ZXN0KHN0cmVhbSkpIHtcblx0XHRzdHJlYW0ub24oJ2NvbXBsZXRlJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5vbignYWJvcnQnLCBvbmNsb3NlKTtcblx0XHRpZiAoc3RyZWFtLnJlcSkgb25yZXF1ZXN0KCk7XG5cdFx0ZWxzZSBzdHJlYW0ub24oJ3JlcXVlc3QnLCBvbnJlcXVlc3QpO1xuXHR9IGVsc2UgaWYgKHdyaXRhYmxlICYmICF3cykgeyAvLyBsZWdhY3kgc3RyZWFtc1xuXHRcdHN0cmVhbS5vbignZW5kJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5vbignY2xvc2UnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdH1cblxuXHRpZiAoaXNDaGlsZFByb2Nlc3Moc3RyZWFtKSkgc3RyZWFtLm9uKCdleGl0Jywgb25leGl0KTtcblxuXHRzdHJlYW0ub24oJ2VuZCcsIG9uZW5kKTtcblx0c3RyZWFtLm9uKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdGlmIChvcHRzLmVycm9yICE9PSBmYWxzZSkgc3RyZWFtLm9uKCdlcnJvcicsIG9uZXJyb3IpO1xuXHRzdHJlYW0ub24oJ2Nsb3NlJywgb25jbG9zZSk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGNhbmNlbGxlZCA9IHRydWU7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjb21wbGV0ZScsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Fib3J0Jywgb25jbG9zZSk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdyZXF1ZXN0Jywgb25yZXF1ZXN0KTtcblx0XHRpZiAoc3RyZWFtLnJlcSkgc3RyZWFtLnJlcS5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdleGl0Jywgb25leGl0KTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuXHR9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGRvIG5vdCBlZGl0IC5qcyBmaWxlcyBkaXJlY3RseSAtIGVkaXQgc3JjL2luZGV4LmpzdFxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZikgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0cnVlIGlmIGJvdGggTmFOLCBmYWxzZSBvdGhlcndpc2VcbiAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNTdHJlYW0gPSBzdHJlYW0gPT5cblx0c3RyZWFtICE9PSBudWxsICYmXG5cdHR5cGVvZiBzdHJlYW0gPT09ICdvYmplY3QnICYmXG5cdHR5cGVvZiBzdHJlYW0ucGlwZSA9PT0gJ2Z1bmN0aW9uJztcblxuaXNTdHJlYW0ud3JpdGFibGUgPSBzdHJlYW0gPT5cblx0aXNTdHJlYW0oc3RyZWFtKSAmJlxuXHRzdHJlYW0ud3JpdGFibGUgIT09IGZhbHNlICYmXG5cdHR5cGVvZiBzdHJlYW0uX3dyaXRlID09PSAnZnVuY3Rpb24nICYmXG5cdHR5cGVvZiBzdHJlYW0uX3dyaXRhYmxlU3RhdGUgPT09ICdvYmplY3QnO1xuXG5pc1N0cmVhbS5yZWFkYWJsZSA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbShzdHJlYW0pICYmXG5cdHN0cmVhbS5yZWFkYWJsZSAhPT0gZmFsc2UgJiZcblx0dHlwZW9mIHN0cmVhbS5fcmVhZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHR0eXBlb2Ygc3RyZWFtLl9yZWFkYWJsZVN0YXRlID09PSAnb2JqZWN0JztcblxuaXNTdHJlYW0uZHVwbGV4ID0gc3RyZWFtID0+XG5cdGlzU3RyZWFtLndyaXRhYmxlKHN0cmVhbSkgJiZcblx0aXNTdHJlYW0ucmVhZGFibGUoc3RyZWFtKTtcblxuaXNTdHJlYW0udHJhbnNmb3JtID0gc3RyZWFtID0+XG5cdGlzU3RyZWFtLmR1cGxleChzdHJlYW0pICYmXG5cdHR5cGVvZiBzdHJlYW0uX3RyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmVhbTtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9vcGVuanNmLm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQsXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlLFxuICAgIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgaWYgKGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgICAgYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgYmFzZU1lcmdlLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgICA/IGN1c3RvbWl6ZXIoc2FmZUdldChvYmplY3QsIGtleSksIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgICAgfVxuICAgICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSwga2V5c0luKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VNZXJnZWAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgbWVyZ2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXJnZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1lcmdlIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IHNhZmVHZXQob2JqZWN0LCBrZXkpLFxuICAgICAgc3JjVmFsdWUgPSBzYWZlR2V0KHNvdXJjZSwga2V5KSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuXG4gIGlmIChzdGFja2VkKSB7XG4gICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICBpZiAoaXNDb21tb24pIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KHNyY1ZhbHVlKSxcbiAgICAgICAgaXNCdWZmID0gIWlzQXJyICYmIGlzQnVmZmVyKHNyY1ZhbHVlKSxcbiAgICAgICAgaXNUeXBlZCA9ICFpc0FyciAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheShzcmNWYWx1ZSk7XG5cbiAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgIGlmIChpc0FyciB8fCBpc0J1ZmYgfHwgaXNUeXBlZCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCdWZmKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVCdWZmZXIoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNUeXBlZCkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lVHlwZWRBcnJheShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCBpc0Z1bmN0aW9uKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGluaXRDbG9uZU9iamVjdChzcmNWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgbWVyZ2VGdW5jKG5ld1ZhbHVlLCBzcmNWYWx1ZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgLCB1bmxlc3MgYGtleWAgaXMgXCJfX3Byb3RvX19cIiBvciBcImNvbnN0cnVjdG9yXCIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzYWZlR2V0KG9iamVjdCwga2V5KSB7XG4gIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIG9iamVjdFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PSAnX19wcm90b19fJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBtZXJnZXMgb3duIGFuZFxuICogaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgaW50byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIHByb3BlcnRpZXMgdGhhdCByZXNvbHZlIHRvIGB1bmRlZmluZWRgIGFyZVxuICogc2tpcHBlZCBpZiBhIGRlc3RpbmF0aW9uIHZhbHVlIGV4aXN0cy4gQXJyYXkgYW5kIHBsYWluIG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBhcmUgbWVyZ2VkIHJlY3Vyc2l2ZWx5LiBPdGhlciBvYmplY3RzIGFuZCB2YWx1ZSB0eXBlcyBhcmUgb3ZlcnJpZGRlbiBieVxuICogYXNzaWdubWVudC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBTdWJzZXF1ZW50XG4gKiBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC41LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHtcbiAqICAgJ2EnOiBbeyAnYic6IDIgfSwgeyAnZCc6IDQgfV1cbiAqIH07XG4gKlxuICogdmFyIG90aGVyID0ge1xuICogICAnYSc6IFt7ICdjJzogMyB9LCB7ICdlJzogNSB9XVxuICogfTtcbiAqXG4gKiBfLm1lcmdlKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4geyAnYSc6IFt7ICdiJzogMiwgJ2MnOiAzIH0sIHsgJ2QnOiA0LCAnZSc6IDUgfV0gfVxuICovXG52YXIgbWVyZ2UgPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcbiIsIi8qXG4qIGxvZ2xldmVsIC0gaHR0cHM6Ly9naXRodWIuY29tL3BpbXRlcnJ5L2xvZ2xldmVsXG4qXG4qIENvcHlyaWdodCAoYykgMjAxMyBUaW0gUGVycnlcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAocm9vdCwgZGVmaW5pdGlvbikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGRlZmluaXRpb24pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5sb2cgPSBkZWZpbml0aW9uKCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBTbGlnaHRseSBkdWJpb3VzIHRyaWNrcyB0byBjdXQgZG93biBtaW5pbWl6ZWQgZmlsZSBzaXplXG4gICAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuICAgIHZhciB1bmRlZmluZWRUeXBlID0gXCJ1bmRlZmluZWRcIjtcbiAgICB2YXIgaXNJRSA9ICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlKSAmJiAodHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgIT09IHVuZGVmaW5lZFR5cGUpICYmIChcbiAgICAgICAgL1RyaWRlbnRcXC98TVNJRSAvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgKTtcblxuICAgIHZhciBsb2dNZXRob2RzID0gW1xuICAgICAgICBcInRyYWNlXCIsXG4gICAgICAgIFwiZGVidWdcIixcbiAgICAgICAgXCJpbmZvXCIsXG4gICAgICAgIFwid2FyblwiLFxuICAgICAgICBcImVycm9yXCJcbiAgICBdO1xuXG4gICAgLy8gQ3Jvc3MtYnJvd3NlciBiaW5kIGVxdWl2YWxlbnQgdGhhdCB3b3JrcyBhdCBsZWFzdCBiYWNrIHRvIElFNlxuICAgIGZ1bmN0aW9uIGJpbmRNZXRob2Qob2JqLCBtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBvYmpbbWV0aG9kTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kLmJpbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuYmluZChvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChtZXRob2QsIG9iaik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gTWlzc2luZyBiaW5kIHNoaW0gb3IgSUU4ICsgTW9kZXJuaXpyLCBmYWxsYmFjayB0byB3cmFwcGluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5hcHBseShtZXRob2QsIFtvYmosIGFyZ3VtZW50c10pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUcmFjZSgpIGRvZXNuJ3QgcHJpbnQgdGhlIG1lc3NhZ2UgaW4gSUUsIHNvIGZvciB0aGF0IGNhc2Ugd2UgbmVlZCB0byB3cmFwIGl0XG4gICAgZnVuY3Rpb24gdHJhY2VGb3JJRSgpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUubG9nKSB7XG4gICAgICAgICAgICBpZiAoY29uc29sZS5sb2cuYXBwbHkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBvbGQgSUUsIG5hdGl2ZSBjb25zb2xlIG1ldGhvZHMgdGhlbXNlbHZlcyBkb24ndCBoYXZlIGFwcGx5KCkuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmFwcGx5KGNvbnNvbGUubG9nLCBbY29uc29sZSwgYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnNvbGUudHJhY2UpIGNvbnNvbGUudHJhY2UoKTtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCB0aGUgYmVzdCBsb2dnaW5nIG1ldGhvZCBwb3NzaWJsZSBmb3IgdGhpcyBlbnZcbiAgICAvLyBXaGVyZXZlciBwb3NzaWJsZSB3ZSB3YW50IHRvIGJpbmQsIG5vdCB3cmFwLCB0byBwcmVzZXJ2ZSBzdGFjayB0cmFjZXNcbiAgICBmdW5jdGlvbiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgICAgIG1ldGhvZE5hbWUgPSAnbG9nJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBtZXRob2QgcG9zc2libGUsIGZvciBub3cgLSBmaXhlZCBsYXRlciBieSBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ3RyYWNlJyAmJiBpc0lFKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhY2VGb3JJRTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlW21ldGhvZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kTWV0aG9kKGNvbnNvbGUsIG1ldGhvZE5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnNvbGUubG9nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kTWV0aG9kKGNvbnNvbGUsICdsb2cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlc2UgcHJpdmF0ZSBmdW5jdGlvbnMgYWx3YXlzIG5lZWQgYHRoaXNgIHRvIGJlIHNldCBwcm9wZXJseVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvZ2dpbmdNZXRob2RzKGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBsb2dNZXRob2RzW2ldO1xuICAgICAgICAgICAgdGhpc1ttZXRob2ROYW1lXSA9IChpIDwgbGV2ZWwpID9cbiAgICAgICAgICAgICAgICBub29wIDpcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZEZhY3RvcnkobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIGxvZy5sb2cgYXMgYW4gYWxpYXMgZm9yIGxvZy5kZWJ1Z1xuICAgICAgICB0aGlzLmxvZyA9IHRoaXMuZGVidWc7XG4gICAgfVxuXG4gICAgLy8gSW4gb2xkIElFIHZlcnNpb25zLCB0aGUgY29uc29sZSBpc24ndCBwcmVzZW50IHVudGlsIHlvdSBmaXJzdCBvcGVuIGl0LlxuICAgIC8vIFdlIGJ1aWxkIHJlYWxNZXRob2QoKSByZXBsYWNlbWVudHMgaGVyZSB0aGF0IHJlZ2VuZXJhdGUgbG9nZ2luZyBtZXRob2RzXG4gICAgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlcyhtZXRob2ROYW1lLCBsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSB1bmRlZmluZWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUxvZ2dpbmdNZXRob2RzLmNhbGwodGhpcywgbGV2ZWwsIGxvZ2dlck5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBCeSBkZWZhdWx0LCB3ZSB1c2UgY2xvc2VseSBib3VuZCByZWFsIG1ldGhvZHMgd2hlcmV2ZXIgcG9zc2libGUsIGFuZFxuICAgIC8vIG90aGVyd2lzZSB3ZSB3YWl0IGZvciBhIGNvbnNvbGUgdG8gYXBwZWFyLCBhbmQgdGhlbiB0cnkgYWdhaW4uXG4gICAgZnVuY3Rpb24gZGVmYXVsdE1ldGhvZEZhY3RvcnkobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgcmV0dXJuIHJlYWxNZXRob2QobWV0aG9kTmFtZSkgfHxcbiAgICAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBMb2dnZXIobmFtZSwgZGVmYXVsdExldmVsLCBmYWN0b3J5KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgY3VycmVudExldmVsO1xuICAgICAgZGVmYXVsdExldmVsID0gZGVmYXVsdExldmVsID09IG51bGwgPyBcIldBUk5cIiA6IGRlZmF1bHRMZXZlbDtcblxuICAgICAgdmFyIHN0b3JhZ2VLZXkgPSBcImxvZ2xldmVsXCI7XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgc3RvcmFnZUtleSArPSBcIjpcIiArIG5hbWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIHN0b3JhZ2VLZXkgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBlcnNpc3RMZXZlbElmUG9zc2libGUobGV2ZWxOdW0pIHtcbiAgICAgICAgICB2YXIgbGV2ZWxOYW1lID0gKGxvZ01ldGhvZHNbbGV2ZWxOdW1dIHx8ICdzaWxlbnQnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUgfHwgIXN0b3JhZ2VLZXkpIHJldHVybjtcblxuICAgICAgICAgIC8vIFVzZSBsb2NhbFN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVtzdG9yYWdlS2V5XSA9IGxldmVsTmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIFVzZSBzZXNzaW9uIGNvb2tpZSBhcyBmYWxsYmFja1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5jb29raWUgPVxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPVwiICsgbGV2ZWxOYW1lICsgXCI7XCI7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRQZXJzaXN0ZWRMZXZlbCgpIHtcbiAgICAgICAgICB2YXIgc3RvcmVkTGV2ZWw7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkVHlwZSB8fCAhc3RvcmFnZUtleSkgcmV0dXJuO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSB3aW5kb3cubG9jYWxTdG9yYWdlW3N0b3JhZ2VLZXldO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGNvb2tpZXMgaWYgbG9jYWwgc3RvcmFnZSBnaXZlcyB1cyBub3RoaW5nXG4gICAgICAgICAgaWYgKHR5cGVvZiBzdG9yZWRMZXZlbCA9PT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IHdpbmRvdy5kb2N1bWVudC5jb29raWU7XG4gICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjb29raWUuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RvcmFnZUtleSkgKyBcIj1cIik7XG4gICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSAvXihbXjtdKykvLmV4ZWMoY29va2llLnNsaWNlKGxvY2F0aW9uKSlbMV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB0aGUgc3RvcmVkIGxldmVsIGlzIG5vdCB2YWxpZCwgdHJlYXQgaXQgYXMgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuICAgICAgICAgIGlmIChzZWxmLmxldmVsc1tzdG9yZWRMZXZlbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzdG9yZWRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3RvcmVkTGV2ZWw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFyUGVyc2lzdGVkTGV2ZWwoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUgfHwgIXN0b3JhZ2VLZXkpIHJldHVybjtcblxuICAgICAgICAgIC8vIFVzZSBsb2NhbFN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VLZXkpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgICAgICAgLy8gVXNlIHNlc3Npb24gY29va2llIGFzIGZhbGxiYWNrXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmNvb2tpZSA9XG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0b3JhZ2VLZXkpICsgXCI9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDXCI7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgICpcbiAgICAgICAqIFB1YmxpYyBsb2dnZXIgQVBJIC0gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9waW10ZXJyeS9sb2dsZXZlbCBmb3IgZGV0YWlsc1xuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICBzZWxmLm5hbWUgPSBuYW1lO1xuXG4gICAgICBzZWxmLmxldmVscyA9IHsgXCJUUkFDRVwiOiAwLCBcIkRFQlVHXCI6IDEsIFwiSU5GT1wiOiAyLCBcIldBUk5cIjogMyxcbiAgICAgICAgICBcIkVSUk9SXCI6IDQsIFwiU0lMRU5UXCI6IDV9O1xuXG4gICAgICBzZWxmLm1ldGhvZEZhY3RvcnkgPSBmYWN0b3J5IHx8IGRlZmF1bHRNZXRob2RGYWN0b3J5O1xuXG4gICAgICBzZWxmLmdldExldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50TGV2ZWw7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLnNldExldmVsID0gZnVuY3Rpb24gKGxldmVsLCBwZXJzaXN0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJzdHJpbmdcIiAmJiBzZWxmLmxldmVsc1tsZXZlbC50b1VwcGVyQ2FzZSgpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldmVsID0gc2VsZi5sZXZlbHNbbGV2ZWwudG9VcHBlckNhc2UoKV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwibnVtYmVyXCIgJiYgbGV2ZWwgPj0gMCAmJiBsZXZlbCA8PSBzZWxmLmxldmVscy5TSUxFTlQpIHtcbiAgICAgICAgICAgICAgY3VycmVudExldmVsID0gbGV2ZWw7XG4gICAgICAgICAgICAgIGlmIChwZXJzaXN0ICE9PSBmYWxzZSkgeyAgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgcGVyc2lzdExldmVsSWZQb3NzaWJsZShsZXZlbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVwbGFjZUxvZ2dpbmdNZXRob2RzLmNhbGwoc2VsZiwgbGV2ZWwsIG5hbWUpO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09IHVuZGVmaW5lZFR5cGUgJiYgbGV2ZWwgPCBzZWxmLmxldmVscy5TSUxFTlQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIGNvbnNvbGUgYXZhaWxhYmxlIGZvciBsb2dnaW5nXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBcImxvZy5zZXRMZXZlbCgpIGNhbGxlZCB3aXRoIGludmFsaWQgbGV2ZWw6IFwiICsgbGV2ZWw7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2VsZi5zZXREZWZhdWx0TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgICBkZWZhdWx0TGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICBpZiAoIWdldFBlcnNpc3RlZExldmVsKCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRMZXZlbChsZXZlbCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNlbGYucmVzZXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKGRlZmF1bHRMZXZlbCwgZmFsc2UpO1xuICAgICAgICAgIGNsZWFyUGVyc2lzdGVkTGV2ZWwoKTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuZW5hYmxlQWxsID0gZnVuY3Rpb24ocGVyc2lzdCkge1xuICAgICAgICAgIHNlbGYuc2V0TGV2ZWwoc2VsZi5sZXZlbHMuVFJBQ0UsIHBlcnNpc3QpO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5kaXNhYmxlQWxsID0gZnVuY3Rpb24ocGVyc2lzdCkge1xuICAgICAgICAgIHNlbGYuc2V0TGV2ZWwoc2VsZi5sZXZlbHMuU0lMRU5ULCBwZXJzaXN0KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEluaXRpYWxpemUgd2l0aCB0aGUgcmlnaHQgbGV2ZWxcbiAgICAgIHZhciBpbml0aWFsTGV2ZWwgPSBnZXRQZXJzaXN0ZWRMZXZlbCgpO1xuICAgICAgaWYgKGluaXRpYWxMZXZlbCA9PSBudWxsKSB7XG4gICAgICAgICAgaW5pdGlhbExldmVsID0gZGVmYXVsdExldmVsO1xuICAgICAgfVxuICAgICAgc2VsZi5zZXRMZXZlbChpbml0aWFsTGV2ZWwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqXG4gICAgICogVG9wLWxldmVsIEFQSVxuICAgICAqXG4gICAgICovXG5cbiAgICB2YXIgZGVmYXVsdExvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuICAgIHZhciBfbG9nZ2Vyc0J5TmFtZSA9IHt9O1xuICAgIGRlZmF1bHRMb2dnZXIuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gZ2V0TG9nZ2VyKG5hbWUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgbmFtZSAhPT0gXCJzeW1ib2xcIiAmJiB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikgfHwgbmFtZSA9PT0gXCJcIikge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBzdXBwbHkgYSBuYW1lIHdoZW4gY3JlYXRpbmcgYSBsb2dnZXIuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvZ2dlciA9IF9sb2dnZXJzQnlOYW1lW25hbWVdO1xuICAgICAgICBpZiAoIWxvZ2dlcikge1xuICAgICAgICAgIGxvZ2dlciA9IF9sb2dnZXJzQnlOYW1lW25hbWVdID0gbmV3IExvZ2dlcihcbiAgICAgICAgICAgIG5hbWUsIGRlZmF1bHRMb2dnZXIuZ2V0TGV2ZWwoKSwgZGVmYXVsdExvZ2dlci5tZXRob2RGYWN0b3J5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH07XG5cbiAgICAvLyBHcmFiIHRoZSBjdXJyZW50IGdsb2JhbCBsb2cgdmFyaWFibGUgaW4gY2FzZSBvZiBvdmVyd3JpdGVcbiAgICB2YXIgX2xvZyA9ICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlKSA/IHdpbmRvdy5sb2cgOiB1bmRlZmluZWQ7XG4gICAgZGVmYXVsdExvZ2dlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlICYmXG4gICAgICAgICAgICAgICB3aW5kb3cubG9nID09PSBkZWZhdWx0TG9nZ2VyKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9nID0gX2xvZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0TG9nZ2VyO1xuICAgIH07XG5cbiAgICBkZWZhdWx0TG9nZ2VyLmdldExvZ2dlcnMgPSBmdW5jdGlvbiBnZXRMb2dnZXJzKCkge1xuICAgICAgICByZXR1cm4gX2xvZ2dlcnNCeU5hbWU7XG4gICAgfTtcblxuICAgIC8vIEVTNiBkZWZhdWx0IGV4cG9ydCwgZm9yIGNvbXBhdGliaWxpdHlcbiAgICBkZWZhdWx0TG9nZ2VyWydkZWZhdWx0J10gPSBkZWZhdWx0TG9nZ2VyO1xuXG4gICAgcmV0dXJuIGRlZmF1bHRMb2dnZXI7XG59KSk7XG4iLCJ2YXIgd3JhcHB5ID0gcmVxdWlyZSgnd3JhcHB5Jylcbm1vZHVsZS5leHBvcnRzID0gd3JhcHB5KG9uY2UpXG5tb2R1bGUuZXhwb3J0cy5zdHJpY3QgPSB3cmFwcHkob25jZVN0cmljdClcblxub25jZS5wcm90byA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZScsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2UodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICdvbmNlU3RyaWN0Jywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb25jZVN0cmljdCh0aGlzKVxuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZi5jYWxsZWQpIHJldHVybiBmLnZhbHVlXG4gICAgZi5jYWxsZWQgPSB0cnVlXG4gICAgcmV0dXJuIGYudmFsdWUgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgZi5jYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZlxufVxuXG5mdW5jdGlvbiBvbmNlU3RyaWN0IChmbikge1xuICB2YXIgZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZi5jYWxsZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZi5vbmNlRXJyb3IpXG4gICAgZi5jYWxsZWQgPSB0cnVlXG4gICAgcmV0dXJuIGYudmFsdWUgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgdmFyIG5hbWUgPSBmbi5uYW1lIHx8ICdGdW5jdGlvbiB3cmFwcGVkIHdpdGggYG9uY2VgJ1xuICBmLm9uY2VFcnJvciA9IG5hbWUgKyBcIiBzaG91bGRuJ3QgYmUgY2FsbGVkIG1vcmUgdGhhbiBvbmNlXCJcbiAgZi5jYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZlxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXByb2Nlc3MudmVyc2lvbiB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MC4nKSA9PT0gMCB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MS4nKSA9PT0gMCAmJiBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjEuOC4nKSAhPT0gMCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgbmV4dFRpY2s6IG5leHRUaWNrIH07XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3Ncbn1cblxuZnVuY3Rpb24gbmV4dFRpY2soZm4sIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiY2FsbGJhY2tcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGFyZ3MsIGk7XG4gIHN3aXRjaCAobGVuKSB7XG4gIGNhc2UgMDpcbiAgY2FzZSAxOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZuKTtcbiAgY2FzZSAyOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja09uZSgpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSk7XG4gICAgfSk7XG4gIGNhc2UgMzpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tUd28oKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEsIGFyZzIpO1xuICAgIH0pO1xuICBjYXNlIDQ6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrVGhyZWUoKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIH0pO1xuICBkZWZhdWx0OlxuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgYXJnc1tpKytdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2soKSB7XG4gICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxufVxuXG4iLCJ2YXIgb25jZSA9IHJlcXVpcmUoJ29uY2UnKVxudmFyIGVvcyA9IHJlcXVpcmUoJ2VuZC1vZi1zdHJlYW0nKVxudmFyIGZzID0gcmVxdWlyZSgnZnMnKSAvLyB3ZSBvbmx5IG5lZWQgZnMgdG8gZ2V0IHRoZSBSZWFkU3RyZWFtIGFuZCBXcml0ZVN0cmVhbSBwcm90b3R5cGVzXG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBhbmNpZW50ID0gL152P1xcLjAvLnRlc3QocHJvY2Vzcy52ZXJzaW9uKVxuXG52YXIgaXNGbiA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nXG59XG5cbnZhciBpc0ZTID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICBpZiAoIWFuY2llbnQpIHJldHVybiBmYWxzZSAvLyBuZXdlciBub2RlIHZlcnNpb24gZG8gbm90IG5lZWQgdG8gY2FyZSBhYm91dCBmcyBpcyBhIHNwZWNpYWwgd2F5XG4gIGlmICghZnMpIHJldHVybiBmYWxzZSAvLyBicm93c2VyXG4gIHJldHVybiAoc3RyZWFtIGluc3RhbmNlb2YgKGZzLlJlYWRTdHJlYW0gfHwgbm9vcCkgfHwgc3RyZWFtIGluc3RhbmNlb2YgKGZzLldyaXRlU3RyZWFtIHx8IG5vb3ApKSAmJiBpc0ZuKHN0cmVhbS5jbG9zZSlcbn1cblxudmFyIGlzUmVxdWVzdCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgcmV0dXJuIHN0cmVhbS5zZXRIZWFkZXIgJiYgaXNGbihzdHJlYW0uYWJvcnQpXG59XG5cbnZhciBkZXN0cm95ZXIgPSBmdW5jdGlvbiAoc3RyZWFtLCByZWFkaW5nLCB3cml0aW5nLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2spXG5cbiAgdmFyIGNsb3NlZCA9IGZhbHNlXG4gIHN0cmVhbS5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VkID0gdHJ1ZVxuICB9KVxuXG4gIGVvcyhzdHJlYW0sIHtyZWFkYWJsZTogcmVhZGluZywgd3JpdGFibGU6IHdyaXRpbmd9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICBjbG9zZWQgPSB0cnVlXG4gICAgY2FsbGJhY2soKVxuICB9KVxuXG4gIHZhciBkZXN0cm95ZWQgPSBmYWxzZVxuICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChjbG9zZWQpIHJldHVyblxuICAgIGlmIChkZXN0cm95ZWQpIHJldHVyblxuICAgIGRlc3Ryb3llZCA9IHRydWVcblxuICAgIGlmIChpc0ZTKHN0cmVhbSkpIHJldHVybiBzdHJlYW0uY2xvc2Uobm9vcCkgLy8gdXNlIGNsb3NlIGZvciBmcyBzdHJlYW1zIHRvIGF2b2lkIGZkIGxlYWtzXG4gICAgaWYgKGlzUmVxdWVzdChzdHJlYW0pKSByZXR1cm4gc3RyZWFtLmFib3J0KCkgLy8gcmVxdWVzdC5kZXN0cm95IGp1c3QgZG8gLmVuZCAtIC5hYm9ydCBpcyB3aGF0IHdlIHdhbnRcblxuICAgIGlmIChpc0ZuKHN0cmVhbS5kZXN0cm95KSkgcmV0dXJuIHN0cmVhbS5kZXN0cm95KClcblxuICAgIGNhbGxiYWNrKGVyciB8fCBuZXcgRXJyb3IoJ3N0cmVhbSB3YXMgZGVzdHJveWVkJykpXG4gIH1cbn1cblxudmFyIGNhbGwgPSBmdW5jdGlvbiAoZm4pIHtcbiAgZm4oKVxufVxuXG52YXIgcGlwZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICByZXR1cm4gZnJvbS5waXBlKHRvKVxufVxuXG52YXIgcHVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0cmVhbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIHZhciBjYWxsYmFjayA9IGlzRm4oc3RyZWFtc1tzdHJlYW1zLmxlbmd0aCAtIDFdIHx8IG5vb3ApICYmIHN0cmVhbXMucG9wKCkgfHwgbm9vcFxuXG4gIGlmIChBcnJheS5pc0FycmF5KHN0cmVhbXNbMF0pKSBzdHJlYW1zID0gc3RyZWFtc1swXVxuICBpZiAoc3RyZWFtcy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoJ3B1bXAgcmVxdWlyZXMgdHdvIHN0cmVhbXMgcGVyIG1pbmltdW0nKVxuXG4gIHZhciBlcnJvclxuICB2YXIgZGVzdHJveXMgPSBzdHJlYW1zLm1hcChmdW5jdGlvbiAoc3RyZWFtLCBpKSB7XG4gICAgdmFyIHJlYWRpbmcgPSBpIDwgc3RyZWFtcy5sZW5ndGggLSAxXG4gICAgdmFyIHdyaXRpbmcgPSBpID4gMFxuICAgIHJldHVybiBkZXN0cm95ZXIoc3RyZWFtLCByZWFkaW5nLCB3cml0aW5nLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoIWVycm9yKSBlcnJvciA9IGVyclxuICAgICAgaWYgKGVycikgZGVzdHJveXMuZm9yRWFjaChjYWxsKVxuICAgICAgaWYgKHJlYWRpbmcpIHJldHVyblxuICAgICAgZGVzdHJveXMuZm9yRWFjaChjYWxsKVxuICAgICAgY2FsbGJhY2soZXJyb3IpXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gc3RyZWFtcy5yZWR1Y2UocGlwZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwdW1wXG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBhIGR1cGxleCBzdHJlYW0gaXMganVzdCBhIHN0cmVhbSB0aGF0IGlzIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLlxuLy8gU2luY2UgSlMgZG9lc24ndCBoYXZlIG11bHRpcGxlIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UsIHRoaXMgY2xhc3Ncbi8vIHByb3RvdHlwYWxseSBpbmhlcml0cyBmcm9tIFJlYWRhYmxlLCBhbmQgdGhlbiBwYXJhc2l0aWNhbGx5IGZyb21cbi8vIFdyaXRhYmxlLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBwbmEgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGtleXMucHVzaChrZXkpO1xuICB9cmV0dXJuIGtleXM7XG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbm1vZHVsZS5leHBvcnRzID0gRHVwbGV4O1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBSZWFkYWJsZSA9IHJlcXVpcmUoJy4vX3N0cmVhbV9yZWFkYWJsZScpO1xudmFyIFdyaXRhYmxlID0gcmVxdWlyZSgnLi9fc3RyZWFtX3dyaXRhYmxlJyk7XG5cbnV0aWwuaW5oZXJpdHMoRHVwbGV4LCBSZWFkYWJsZSk7XG5cbntcbiAgLy8gYXZvaWQgc2NvcGUgY3JlZXAsIHRoZSBrZXlzIGFycmF5IGNhbiB0aGVuIGJlIGNvbGxlY3RlZFxuICB2YXIga2V5cyA9IG9iamVjdEtleXMoV3JpdGFibGUucHJvdG90eXBlKTtcbiAgZm9yICh2YXIgdiA9IDA7IHYgPCBrZXlzLmxlbmd0aDsgdisrKSB7XG4gICAgdmFyIG1ldGhvZCA9IGtleXNbdl07XG4gICAgaWYgKCFEdXBsZXgucHJvdG90eXBlW21ldGhvZF0pIER1cGxleC5wcm90b3R5cGVbbWV0aG9kXSA9IFdyaXRhYmxlLnByb3RvdHlwZVttZXRob2RdO1xuICB9XG59XG5cbmZ1bmN0aW9uIER1cGxleChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSByZXR1cm4gbmV3IER1cGxleChvcHRpb25zKTtcblxuICBSZWFkYWJsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICBXcml0YWJsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVhZGFibGUgPT09IGZhbHNlKSB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy53cml0YWJsZSA9PT0gZmFsc2UpIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICB0aGlzLmFsbG93SGFsZk9wZW4gPSB0cnVlO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFsbG93SGFsZk9wZW4gPT09IGZhbHNlKSB0aGlzLmFsbG93SGFsZk9wZW4gPSBmYWxzZTtcblxuICB0aGlzLm9uY2UoJ2VuZCcsIG9uZW5kKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KER1cGxleC5wcm90b3R5cGUsICd3cml0YWJsZUhpZ2hXYXRlck1hcmsnLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl93cml0YWJsZVN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIH1cbn0pO1xuXG4vLyB0aGUgbm8taGFsZi1vcGVuIGVuZm9yY2VyXG5mdW5jdGlvbiBvbmVuZCgpIHtcbiAgLy8gaWYgd2UgYWxsb3cgaGFsZi1vcGVuIHN0YXRlLCBvciBpZiB0aGUgd3JpdGFibGUgc2lkZSBlbmRlZCxcbiAgLy8gdGhlbiB3ZSdyZSBvay5cbiAgaWYgKHRoaXMuYWxsb3dIYWxmT3BlbiB8fCB0aGlzLl93cml0YWJsZVN0YXRlLmVuZGVkKSByZXR1cm47XG5cbiAgLy8gbm8gbW9yZSBkYXRhIGNhbiBiZSB3cml0dGVuLlxuICAvLyBCdXQgYWxsb3cgbW9yZSB3cml0ZXMgdG8gaGFwcGVuIGluIHRoaXMgdGljay5cbiAgcG5hLm5leHRUaWNrKG9uRW5kTlQsIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBvbkVuZE5UKHNlbGYpIHtcbiAgc2VsZi5lbmQoKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KER1cGxleC5wcm90b3R5cGUsICdkZXN0cm95ZWQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5fd3JpdGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCAmJiB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyB3ZSBpZ25vcmUgdGhlIHZhbHVlIGlmIHRoZSBzdHJlYW1cbiAgICAvLyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl93cml0YWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0aGUgdXNlciBpcyBleHBsaWNpdGx5XG4gICAgLy8gbWFuYWdpbmcgZGVzdHJveWVkXG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHZhbHVlO1xuICB9XG59KTtcblxuRHVwbGV4LnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIHRoaXMucHVzaChudWxsKTtcbiAgdGhpcy5lbmQoKTtcblxuICBwbmEubmV4dFRpY2soY2IsIGVycik7XG59OyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBhIHBhc3N0aHJvdWdoIHN0cmVhbS5cbi8vIGJhc2ljYWxseSBqdXN0IHRoZSBtb3N0IG1pbmltYWwgc29ydCBvZiBUcmFuc2Zvcm0gc3RyZWFtLlxuLy8gRXZlcnkgd3JpdHRlbiBjaHVuayBnZXRzIG91dHB1dCBhcy1pcy5cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhc3NUaHJvdWdoO1xuXG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9fc3RyZWFtX3RyYW5zZm9ybScpO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnV0aWwuaW5oZXJpdHMoUGFzc1Rocm91Z2gsIFRyYW5zZm9ybSk7XG5cbmZ1bmN0aW9uIFBhc3NUaHJvdWdoKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFBhc3NUaHJvdWdoKSkgcmV0dXJuIG5ldyBQYXNzVGhyb3VnaChvcHRpb25zKTtcblxuICBUcmFuc2Zvcm0uY2FsbCh0aGlzLCBvcHRpb25zKTtcbn1cblxuUGFzc1Rocm91Z2gucHJvdG90eXBlLl90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBjYihudWxsLCBjaHVuayk7XG59OyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBwbmEgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhZGFibGU7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5SZWFkYWJsZS5SZWFkYWJsZVN0YXRlID0gUmVhZGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBFRSA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxudmFyIEVFbGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIChlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVycyh0eXBlKS5sZW5ndGg7XG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL3N0cmVhbScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciBPdXJVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXkgfHwgZnVuY3Rpb24gKCkge307XG5mdW5jdGlvbiBfdWludDhBcnJheVRvQnVmZmVyKGNodW5rKSB7XG4gIHJldHVybiBCdWZmZXIuZnJvbShjaHVuayk7XG59XG5mdW5jdGlvbiBfaXNVaW50OEFycmF5KG9iaikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgb2JqIGluc3RhbmNlb2YgT3VyVWludDhBcnJheTtcbn1cblxuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IE9iamVjdC5jcmVhdGUocmVxdWlyZSgnY29yZS11dGlsLWlzJykpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBkZWJ1Z1V0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgZGVidWcgPSB2b2lkIDA7XG5pZiAoZGVidWdVdGlsICYmIGRlYnVnVXRpbC5kZWJ1Z2xvZykge1xuICBkZWJ1ZyA9IGRlYnVnVXRpbC5kZWJ1Z2xvZygnc3RyZWFtJyk7XG59IGVsc2Uge1xuICBkZWJ1ZyA9IGZ1bmN0aW9uICgpIHt9O1xufVxuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXJMaXN0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL0J1ZmZlckxpc3QnKTtcbnZhciBkZXN0cm95SW1wbCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9kZXN0cm95Jyk7XG52YXIgU3RyaW5nRGVjb2RlcjtcblxudXRpbC5pbmhlcml0cyhSZWFkYWJsZSwgU3RyZWFtKTtcblxudmFyIGtQcm94eUV2ZW50cyA9IFsnZXJyb3InLCAnY2xvc2UnLCAnZGVzdHJveScsICdwYXVzZScsICdyZXN1bWUnXTtcblxuZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbikge1xuICAvLyBTYWRseSB0aGlzIGlzIG5vdCBjYWNoZWFibGUgYXMgc29tZSBsaWJyYXJpZXMgYnVuZGxlIHRoZWlyIG93blxuICAvLyBldmVudCBlbWl0dGVyIGltcGxlbWVudGF0aW9uIHdpdGggdGhlbS5cbiAgaWYgKHR5cGVvZiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGVtaXR0ZXIucHJlcGVuZExpc3RlbmVyKGV2ZW50LCBmbik7XG5cbiAgLy8gVGhpcyBpcyBhIGhhY2sgdG8gbWFrZSBzdXJlIHRoYXQgb3VyIGVycm9yIGhhbmRsZXIgaXMgYXR0YWNoZWQgYmVmb3JlIGFueVxuICAvLyB1c2VybGFuZCBvbmVzLiAgTkVWRVIgRE8gVEhJUy4gVGhpcyBpcyBoZXJlIG9ubHkgYmVjYXVzZSB0aGlzIGNvZGUgbmVlZHNcbiAgLy8gdG8gY29udGludWUgdG8gd29yayB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIE5vZGUuanMgdGhhdCBkbyBub3QgaW5jbHVkZVxuICAvLyB0aGUgcHJlcGVuZExpc3RlbmVyKCkgbWV0aG9kLiBUaGUgZ29hbCBpcyB0byBldmVudHVhbGx5IHJlbW92ZSB0aGlzIGhhY2suXG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSBlbWl0dGVyLm9uKGV2ZW50LCBmbik7ZWxzZSBpZiAoaXNBcnJheShlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSkgZW1pdHRlci5fZXZlbnRzW2V2ZW50XS51bnNoaWZ0KGZuKTtlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0gPSBbZm4sIGVtaXR0ZXIuX2V2ZW50c1tldmVudF1dO1xufVxuXG5mdW5jdGlvbiBSZWFkYWJsZVN0YXRlKG9wdGlvbnMsIHN0cmVhbSkge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIER1cGxleCBzdHJlYW1zIGFyZSBib3RoIHJlYWRhYmxlIGFuZCB3cml0YWJsZSwgYnV0IHNoYXJlXG4gIC8vIHRoZSBzYW1lIG9wdGlvbnMgb2JqZWN0LlxuICAvLyBIb3dldmVyLCBzb21lIGNhc2VzIHJlcXVpcmUgc2V0dGluZyBvcHRpb25zIHRvIGRpZmZlcmVudFxuICAvLyB2YWx1ZXMgZm9yIHRoZSByZWFkYWJsZSBhbmQgdGhlIHdyaXRhYmxlIHNpZGVzIG9mIHRoZSBkdXBsZXggc3RyZWFtLlxuICAvLyBUaGVzZSBvcHRpb25zIGNhbiBiZSBwcm92aWRlZCBzZXBhcmF0ZWx5IGFzIHJlYWRhYmxlWFhYIGFuZCB3cml0YWJsZVhYWC5cbiAgdmFyIGlzRHVwbGV4ID0gc3RyZWFtIGluc3RhbmNlb2YgRHVwbGV4O1xuXG4gIC8vIG9iamVjdCBzdHJlYW0gZmxhZy4gVXNlZCB0byBtYWtlIHJlYWQobikgaWdub3JlIG4gYW5kIHRvXG4gIC8vIG1ha2UgYWxsIHRoZSBidWZmZXIgbWVyZ2luZyBhbmQgbGVuZ3RoIGNoZWNrcyBnbyBhd2F5XG4gIHRoaXMub2JqZWN0TW9kZSA9ICEhb3B0aW9ucy5vYmplY3RNb2RlO1xuXG4gIGlmIChpc0R1cGxleCkgdGhpcy5vYmplY3RNb2RlID0gdGhpcy5vYmplY3RNb2RlIHx8ICEhb3B0aW9ucy5yZWFkYWJsZU9iamVjdE1vZGU7XG5cbiAgLy8gdGhlIHBvaW50IGF0IHdoaWNoIGl0IHN0b3BzIGNhbGxpbmcgX3JlYWQoKSB0byBmaWxsIHRoZSBidWZmZXJcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyBcImRvbid0IGNhbGwgX3JlYWQgcHJlZW1wdGl2ZWx5IGV2ZXJcIlxuICB2YXIgaHdtID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICB2YXIgcmVhZGFibGVId20gPSBvcHRpb25zLnJlYWRhYmxlSGlnaFdhdGVyTWFyaztcbiAgdmFyIGRlZmF1bHRId20gPSB0aGlzLm9iamVjdE1vZGUgPyAxNiA6IDE2ICogMTAyNDtcblxuICBpZiAoaHdtIHx8IGh3bSA9PT0gMCkgdGhpcy5oaWdoV2F0ZXJNYXJrID0gaHdtO2Vsc2UgaWYgKGlzRHVwbGV4ICYmIChyZWFkYWJsZUh3bSB8fCByZWFkYWJsZUh3bSA9PT0gMCkpIHRoaXMuaGlnaFdhdGVyTWFyayA9IHJlYWRhYmxlSHdtO2Vsc2UgdGhpcy5oaWdoV2F0ZXJNYXJrID0gZGVmYXVsdEh3bTtcblxuICAvLyBjYXN0IHRvIGludHMuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IE1hdGguZmxvb3IodGhpcy5oaWdoV2F0ZXJNYXJrKTtcblxuICAvLyBBIGxpbmtlZCBsaXN0IGlzIHVzZWQgdG8gc3RvcmUgZGF0YSBjaHVua3MgaW5zdGVhZCBvZiBhbiBhcnJheSBiZWNhdXNlIHRoZVxuICAvLyBsaW5rZWQgbGlzdCBjYW4gcmVtb3ZlIGVsZW1lbnRzIGZyb20gdGhlIGJlZ2lubmluZyBmYXN0ZXIgdGhhblxuICAvLyBhcnJheS5zaGlmdCgpXG4gIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlckxpc3QoKTtcbiAgdGhpcy5sZW5ndGggPSAwO1xuICB0aGlzLnBpcGVzID0gbnVsbDtcbiAgdGhpcy5waXBlc0NvdW50ID0gMDtcbiAgdGhpcy5mbG93aW5nID0gbnVsbDtcbiAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICB0aGlzLmVuZEVtaXR0ZWQgPSBmYWxzZTtcbiAgdGhpcy5yZWFkaW5nID0gZmFsc2U7XG5cbiAgLy8gYSBmbGFnIHRvIGJlIGFibGUgdG8gdGVsbCBpZiB0aGUgZXZlbnQgJ3JlYWRhYmxlJy8nZGF0YScgaXMgZW1pdHRlZFxuICAvLyBpbW1lZGlhdGVseSwgb3Igb24gYSBsYXRlciB0aWNrLiAgV2Ugc2V0IHRoaXMgdG8gdHJ1ZSBhdCBmaXJzdCwgYmVjYXVzZVxuICAvLyBhbnkgYWN0aW9ucyB0aGF0IHNob3VsZG4ndCBoYXBwZW4gdW50aWwgXCJsYXRlclwiIHNob3VsZCBnZW5lcmFsbHkgYWxzb1xuICAvLyBub3QgaGFwcGVuIGJlZm9yZSB0aGUgZmlyc3QgcmVhZCBjYWxsLlxuICB0aGlzLnN5bmMgPSB0cnVlO1xuXG4gIC8vIHdoZW5ldmVyIHdlIHJldHVybiBudWxsLCB0aGVuIHdlIHNldCBhIGZsYWcgdG8gc2F5XG4gIC8vIHRoYXQgd2UncmUgYXdhaXRpbmcgYSAncmVhZGFibGUnIGV2ZW50IGVtaXNzaW9uLlxuICB0aGlzLm5lZWRSZWFkYWJsZSA9IGZhbHNlO1xuICB0aGlzLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlO1xuICB0aGlzLnJlYWRhYmxlTGlzdGVuaW5nID0gZmFsc2U7XG4gIHRoaXMucmVzdW1lU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgLy8gaGFzIGl0IGJlZW4gZGVzdHJveWVkXG4gIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgLy8gQ3J5cHRvIGlzIGtpbmQgb2Ygb2xkIGFuZCBjcnVzdHkuICBIaXN0b3JpY2FsbHksIGl0cyBkZWZhdWx0IHN0cmluZ1xuICAvLyBlbmNvZGluZyBpcyAnYmluYXJ5JyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhpcyBjb25maWd1cmFibGUuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgdW5pdmVyc2UgdXNlcyAndXRmOCcsIHRob3VnaC5cbiAgdGhpcy5kZWZhdWx0RW5jb2RpbmcgPSBvcHRpb25zLmRlZmF1bHRFbmNvZGluZyB8fCAndXRmOCc7XG5cbiAgLy8gdGhlIG51bWJlciBvZiB3cml0ZXJzIHRoYXQgYXJlIGF3YWl0aW5nIGEgZHJhaW4gZXZlbnQgaW4gLnBpcGUoKXNcbiAgdGhpcy5hd2FpdERyYWluID0gMDtcblxuICAvLyBpZiB0cnVlLCBhIG1heWJlUmVhZE1vcmUgaGFzIGJlZW4gc2NoZWR1bGVkXG4gIHRoaXMucmVhZGluZ01vcmUgPSBmYWxzZTtcblxuICB0aGlzLmRlY29kZXIgPSBudWxsO1xuICB0aGlzLmVuY29kaW5nID0gbnVsbDtcbiAgaWYgKG9wdGlvbnMuZW5jb2RpbmcpIHtcbiAgICBpZiAoIVN0cmluZ0RlY29kZXIpIFN0cmluZ0RlY29kZXIgPSByZXF1aXJlKCdzdHJpbmdfZGVjb2Rlci8nKS5TdHJpbmdEZWNvZGVyO1xuICAgIHRoaXMuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIHRoaXMuZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIFJlYWRhYmxlKG9wdGlvbnMpIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVhZGFibGUpKSByZXR1cm4gbmV3IFJlYWRhYmxlKG9wdGlvbnMpO1xuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUgPSBuZXcgUmVhZGFibGVTdGF0ZShvcHRpb25zLCB0aGlzKTtcblxuICAvLyBsZWdhY3lcbiAgdGhpcy5yZWFkYWJsZSA9IHRydWU7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucmVhZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fcmVhZCA9IG9wdGlvbnMucmVhZDtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB0aGlzLl9kZXN0cm95ID0gb3B0aW9ucy5kZXN0cm95O1xuICB9XG5cbiAgU3RyZWFtLmNhbGwodGhpcyk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZS5wcm90b3R5cGUsICdkZXN0cm95ZWQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHdlIGlnbm9yZSB0aGUgdmFsdWUgaWYgdGhlIHN0cmVhbVxuICAgIC8vIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCB5ZXRcbiAgICBpZiAoIXRoaXMuX3JlYWRhYmxlU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0aGUgdXNlciBpcyBleHBsaWNpdGx5XG4gICAgLy8gbWFuYWdpbmcgZGVzdHJveWVkXG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgfVxufSk7XG5cblJlYWRhYmxlLnByb3RvdHlwZS5kZXN0cm95ID0gZGVzdHJveUltcGwuZGVzdHJveTtcblJlYWRhYmxlLnByb3RvdHlwZS5fdW5kZXN0cm95ID0gZGVzdHJveUltcGwudW5kZXN0cm95O1xuUmVhZGFibGUucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgdGhpcy5wdXNoKG51bGwpO1xuICBjYihlcnIpO1xufTtcblxuLy8gTWFudWFsbHkgc2hvdmUgc29tZXRoaW5nIGludG8gdGhlIHJlYWQoKSBidWZmZXIuXG4vLyBUaGlzIHJldHVybnMgdHJ1ZSBpZiB0aGUgaGlnaFdhdGVyTWFyayBoYXMgbm90IGJlZW4gaGl0IHlldCxcbi8vIHNpbWlsYXIgdG8gaG93IFdyaXRhYmxlLndyaXRlKCkgcmV0dXJucyB0cnVlIGlmIHlvdSBzaG91bGRcbi8vIHdyaXRlKCkgc29tZSBtb3JlLlxuUmVhZGFibGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHZhciBza2lwQ2h1bmtDaGVjaztcblxuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmNvZGluZyB8fCBzdGF0ZS5kZWZhdWx0RW5jb2Rpbmc7XG4gICAgICBpZiAoZW5jb2RpbmcgIT09IHN0YXRlLmVuY29kaW5nKSB7XG4gICAgICAgIGNodW5rID0gQnVmZmVyLmZyb20oY2h1bmssIGVuY29kaW5nKTtcbiAgICAgICAgZW5jb2RpbmcgPSAnJztcbiAgICAgIH1cbiAgICAgIHNraXBDaHVua0NoZWNrID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2tpcENodW5rQ2hlY2sgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlYWRhYmxlQWRkQ2h1bmsodGhpcywgY2h1bmssIGVuY29kaW5nLCBmYWxzZSwgc2tpcENodW5rQ2hlY2spO1xufTtcblxuLy8gVW5zaGlmdCBzaG91bGQgKmFsd2F5cyogYmUgc29tZXRoaW5nIGRpcmVjdGx5IG91dCBvZiByZWFkKClcblJlYWRhYmxlLnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIGNodW5rLCBudWxsLCB0cnVlLCBmYWxzZSk7XG59O1xuXG5mdW5jdGlvbiByZWFkYWJsZUFkZENodW5rKHN0cmVhbSwgY2h1bmssIGVuY29kaW5nLCBhZGRUb0Zyb250LCBza2lwQ2h1bmtDaGVjaykge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIGlmIChjaHVuayA9PT0gbnVsbCkge1xuICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICBvbkVvZkNodW5rKHN0cmVhbSwgc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBlcjtcbiAgICBpZiAoIXNraXBDaHVua0NoZWNrKSBlciA9IGNodW5rSW52YWxpZChzdGF0ZSwgY2h1bmspO1xuICAgIGlmIChlcikge1xuICAgICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuayAmJiBjaHVuay5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiAhc3RhdGUub2JqZWN0TW9kZSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2h1bmspICE9PSBCdWZmZXIucHJvdG90eXBlKSB7XG4gICAgICAgIGNodW5rID0gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuayk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRUb0Zyb250KSB7XG4gICAgICAgIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBzdHJlYW0uZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ3N0cmVhbS51bnNoaWZ0KCkgYWZ0ZXIgZW5kIGV2ZW50JykpO2Vsc2UgYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5lbmRlZCkge1xuICAgICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ3N0cmVhbS5wdXNoKCkgYWZ0ZXIgRU9GJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGUuZGVjb2RlciAmJiAhZW5jb2RpbmcpIHtcbiAgICAgICAgICBjaHVuayA9IHN0YXRlLmRlY29kZXIud3JpdGUoY2h1bmspO1xuICAgICAgICAgIGlmIChzdGF0ZS5vYmplY3RNb2RlIHx8IGNodW5rLmxlbmd0aCAhPT0gMCkgYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGZhbHNlKTtlbHNlIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWFkZFRvRnJvbnQpIHtcbiAgICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmVlZE1vcmVEYXRhKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGFkZFRvRnJvbnQpIHtcbiAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgc3RhdGUubGVuZ3RoID09PSAwICYmICFzdGF0ZS5zeW5jKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2RhdGEnLCBjaHVuayk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gdXBkYXRlIHRoZSBidWZmZXIgaW5mby5cbiAgICBzdGF0ZS5sZW5ndGggKz0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG4gICAgaWYgKGFkZFRvRnJvbnQpIHN0YXRlLmJ1ZmZlci51bnNoaWZ0KGNodW5rKTtlbHNlIHN0YXRlLmJ1ZmZlci5wdXNoKGNodW5rKTtcblxuICAgIGlmIChzdGF0ZS5uZWVkUmVhZGFibGUpIGVtaXRSZWFkYWJsZShzdHJlYW0pO1xuICB9XG4gIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNodW5rSW52YWxpZChzdGF0ZSwgY2h1bmspIHtcbiAgdmFyIGVyO1xuICBpZiAoIV9pc1VpbnQ4QXJyYXkoY2h1bmspICYmIHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIHJldHVybiBlcjtcbn1cblxuLy8gaWYgaXQncyBwYXN0IHRoZSBoaWdoIHdhdGVyIG1hcmssIHdlIGNhbiBwdXNoIGluIHNvbWUgbW9yZS5cbi8vIEFsc28sIGlmIHdlIGhhdmUgbm8gZGF0YSB5ZXQsIHdlIGNhbiBzdGFuZCBzb21lXG4vLyBtb3JlIGJ5dGVzLiAgVGhpcyBpcyB0byB3b3JrIGFyb3VuZCBjYXNlcyB3aGVyZSBod209MCxcbi8vIHN1Y2ggYXMgdGhlIHJlcGwuICBBbHNvLCBpZiB0aGUgcHVzaCgpIHRyaWdnZXJlZCBhXG4vLyByZWFkYWJsZSBldmVudCwgYW5kIHRoZSB1c2VyIGNhbGxlZCByZWFkKGxhcmdlTnVtYmVyKSBzdWNoIHRoYXRcbi8vIG5lZWRSZWFkYWJsZSB3YXMgc2V0LCB0aGVuIHdlIG91Z2h0IHRvIHB1c2ggbW9yZSwgc28gdGhhdCBhbm90aGVyXG4vLyAncmVhZGFibGUnIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkLlxuZnVuY3Rpb24gbmVlZE1vcmVEYXRhKHN0YXRlKSB7XG4gIHJldHVybiAhc3RhdGUuZW5kZWQgJiYgKHN0YXRlLm5lZWRSZWFkYWJsZSB8fCBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCk7XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS5pc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9PT0gZmFsc2U7XG59O1xuXG4vLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblJlYWRhYmxlLnByb3RvdHlwZS5zZXRFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmMpIHtcbiAgaWYgKCFTdHJpbmdEZWNvZGVyKSBTdHJpbmdEZWNvZGVyID0gcmVxdWlyZSgnc3RyaW5nX2RlY29kZXIvJykuU3RyaW5nRGVjb2RlcjtcbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIoZW5jKTtcbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmNvZGluZyA9IGVuYztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBEb24ndCByYWlzZSB0aGUgaHdtID4gOE1CXG52YXIgTUFYX0hXTSA9IDB4ODAwMDAwO1xuZnVuY3Rpb24gY29tcHV0ZU5ld0hpZ2hXYXRlck1hcmsobikge1xuICBpZiAobiA+PSBNQVhfSFdNKSB7XG4gICAgbiA9IE1BWF9IV007XG4gIH0gZWxzZSB7XG4gICAgLy8gR2V0IHRoZSBuZXh0IGhpZ2hlc3QgcG93ZXIgb2YgMiB0byBwcmV2ZW50IGluY3JlYXNpbmcgaHdtIGV4Y2Vzc2l2ZWx5IGluXG4gICAgLy8gdGlueSBhbW91bnRzXG4gICAgbi0tO1xuICAgIG4gfD0gbiA+Pj4gMTtcbiAgICBuIHw9IG4gPj4+IDI7XG4gICAgbiB8PSBuID4+PiA0O1xuICAgIG4gfD0gbiA+Pj4gODtcbiAgICBuIHw9IG4gPj4+IDE2O1xuICAgIG4rKztcbiAgfVxuICByZXR1cm4gbjtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBob3dNdWNoVG9SZWFkKG4sIHN0YXRlKSB7XG4gIGlmIChuIDw9IDAgfHwgc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmVuZGVkKSByZXR1cm4gMDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldHVybiAxO1xuICBpZiAobiAhPT0gbikge1xuICAgIC8vIE9ubHkgZmxvdyBvbmUgYnVmZmVyIGF0IGEgdGltZVxuICAgIGlmIChzdGF0ZS5mbG93aW5nICYmIHN0YXRlLmxlbmd0aCkgcmV0dXJuIHN0YXRlLmJ1ZmZlci5oZWFkLmRhdGEubGVuZ3RoO2Vsc2UgcmV0dXJuIHN0YXRlLmxlbmd0aDtcbiAgfVxuICAvLyBJZiB3ZSdyZSBhc2tpbmcgZm9yIG1vcmUgdGhhbiB0aGUgY3VycmVudCBod20sIHRoZW4gcmFpc2UgdGhlIGh3bS5cbiAgaWYgKG4gPiBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSBzdGF0ZS5oaWdoV2F0ZXJNYXJrID0gY29tcHV0ZU5ld0hpZ2hXYXRlck1hcmsobik7XG4gIGlmIChuIDw9IHN0YXRlLmxlbmd0aCkgcmV0dXJuIG47XG4gIC8vIERvbid0IGhhdmUgZW5vdWdoXG4gIGlmICghc3RhdGUuZW5kZWQpIHtcbiAgICBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBzdGF0ZS5sZW5ndGg7XG59XG5cbi8vIHlvdSBjYW4gb3ZlcnJpZGUgZWl0aGVyIHRoaXMgbWV0aG9kLCBvciB0aGUgYXN5bmMgX3JlYWQobikgYmVsb3cuXG5SZWFkYWJsZS5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gIGRlYnVnKCdyZWFkJywgbik7XG4gIG4gPSBwYXJzZUludChuLCAxMCk7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHZhciBuT3JpZyA9IG47XG5cbiAgaWYgKG4gIT09IDApIHN0YXRlLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlO1xuXG4gIC8vIGlmIHdlJ3JlIGRvaW5nIHJlYWQoMCkgdG8gdHJpZ2dlciBhIHJlYWRhYmxlIGV2ZW50LCBidXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGEgYnVuY2ggb2YgZGF0YSBpbiB0aGUgYnVmZmVyLCB0aGVuIGp1c3QgdHJpZ2dlclxuICAvLyB0aGUgJ3JlYWRhYmxlJyBldmVudCBhbmQgbW92ZSBvbi5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUubmVlZFJlYWRhYmxlICYmIChzdGF0ZS5sZW5ndGggPj0gc3RhdGUuaGlnaFdhdGVyTWFyayB8fCBzdGF0ZS5lbmRlZCkpIHtcbiAgICBkZWJ1ZygncmVhZDogZW1pdFJlYWRhYmxlJywgc3RhdGUubGVuZ3RoLCBzdGF0ZS5lbmRlZCk7XG4gICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkgZW5kUmVhZGFibGUodGhpcyk7ZWxzZSBlbWl0UmVhZGFibGUodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuID0gaG93TXVjaFRvUmVhZChuLCBzdGF0ZSk7XG5cbiAgLy8gaWYgd2UndmUgZW5kZWQsIGFuZCB3ZSdyZSBub3cgY2xlYXIsIHRoZW4gZmluaXNoIGl0IHVwLlxuICBpZiAobiA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkge1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIGVuZFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQWxsIHRoZSBhY3R1YWwgY2h1bmsgZ2VuZXJhdGlvbiBsb2dpYyBuZWVkcyB0byBiZVxuICAvLyAqYmVsb3cqIHRoZSBjYWxsIHRvIF9yZWFkLiAgVGhlIHJlYXNvbiBpcyB0aGF0IGluIGNlcnRhaW5cbiAgLy8gc3ludGhldGljIHN0cmVhbSBjYXNlcywgc3VjaCBhcyBwYXNzdGhyb3VnaCBzdHJlYW1zLCBfcmVhZFxuICAvLyBtYXkgYmUgYSBjb21wbGV0ZWx5IHN5bmNocm9ub3VzIG9wZXJhdGlvbiB3aGljaCBtYXkgY2hhbmdlXG4gIC8vIHRoZSBzdGF0ZSBvZiB0aGUgcmVhZCBidWZmZXIsIHByb3ZpZGluZyBlbm91Z2ggZGF0YSB3aGVuXG4gIC8vIGJlZm9yZSB0aGVyZSB3YXMgKm5vdCogZW5vdWdoLlxuICAvL1xuICAvLyBTbywgdGhlIHN0ZXBzIGFyZTpcbiAgLy8gMS4gRmlndXJlIG91dCB3aGF0IHRoZSBzdGF0ZSBvZiB0aGluZ3Mgd2lsbCBiZSBhZnRlciB3ZSBkb1xuICAvLyBhIHJlYWQgZnJvbSB0aGUgYnVmZmVyLlxuICAvL1xuICAvLyAyLiBJZiB0aGF0IHJlc3VsdGluZyBzdGF0ZSB3aWxsIHRyaWdnZXIgYSBfcmVhZCwgdGhlbiBjYWxsIF9yZWFkLlxuICAvLyBOb3RlIHRoYXQgdGhpcyBtYXkgYmUgYXN5bmNocm9ub3VzLCBvciBzeW5jaHJvbm91cy4gIFllcywgaXQgaXNcbiAgLy8gZGVlcGx5IHVnbHkgdG8gd3JpdGUgQVBJcyB0aGlzIHdheSwgYnV0IHRoYXQgc3RpbGwgZG9lc24ndCBtZWFuXG4gIC8vIHRoYXQgdGhlIFJlYWRhYmxlIGNsYXNzIHNob3VsZCBiZWhhdmUgaW1wcm9wZXJseSwgYXMgc3RyZWFtcyBhcmVcbiAgLy8gZGVzaWduZWQgdG8gYmUgc3luYy9hc3luYyBhZ25vc3RpYy5cbiAgLy8gVGFrZSBub3RlIGlmIHRoZSBfcmVhZCBjYWxsIGlzIHN5bmMgb3IgYXN5bmMgKGllLCBpZiB0aGUgcmVhZCBjYWxsXG4gIC8vIGhhcyByZXR1cm5lZCB5ZXQpLCBzbyB0aGF0IHdlIGtub3cgd2hldGhlciBvciBub3QgaXQncyBzYWZlIHRvIGVtaXRcbiAgLy8gJ3JlYWRhYmxlJyBldGMuXG4gIC8vXG4gIC8vIDMuIEFjdHVhbGx5IHB1bGwgdGhlIHJlcXVlc3RlZCBjaHVua3Mgb3V0IG9mIHRoZSBidWZmZXIgYW5kIHJldHVybi5cblxuICAvLyBpZiB3ZSBuZWVkIGEgcmVhZGFibGUgZXZlbnQsIHRoZW4gd2UgbmVlZCB0byBkbyBzb21lIHJlYWRpbmcuXG4gIHZhciBkb1JlYWQgPSBzdGF0ZS5uZWVkUmVhZGFibGU7XG4gIGRlYnVnKCduZWVkIHJlYWRhYmxlJywgZG9SZWFkKTtcblxuICAvLyBpZiB3ZSBjdXJyZW50bHkgaGF2ZSBsZXNzIHRoYW4gdGhlIGhpZ2hXYXRlck1hcmssIHRoZW4gYWxzbyByZWFkIHNvbWVcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCB8fCBzdGF0ZS5sZW5ndGggLSBuIDwgc3RhdGUuaGlnaFdhdGVyTWFyaykge1xuICAgIGRvUmVhZCA9IHRydWU7XG4gICAgZGVidWcoJ2xlbmd0aCBsZXNzIHRoYW4gd2F0ZXJtYXJrJywgZG9SZWFkKTtcbiAgfVxuXG4gIC8vIGhvd2V2ZXIsIGlmIHdlJ3ZlIGVuZGVkLCB0aGVuIHRoZXJlJ3Mgbm8gcG9pbnQsIGFuZCBpZiB3ZSdyZSBhbHJlYWR5XG4gIC8vIHJlYWRpbmcsIHRoZW4gaXQncyB1bm5lY2Vzc2FyeS5cbiAgaWYgKHN0YXRlLmVuZGVkIHx8IHN0YXRlLnJlYWRpbmcpIHtcbiAgICBkb1JlYWQgPSBmYWxzZTtcbiAgICBkZWJ1ZygncmVhZGluZyBvciBlbmRlZCcsIGRvUmVhZCk7XG4gIH0gZWxzZSBpZiAoZG9SZWFkKSB7XG4gICAgZGVidWcoJ2RvIHJlYWQnKTtcbiAgICBzdGF0ZS5yZWFkaW5nID0gdHJ1ZTtcbiAgICBzdGF0ZS5zeW5jID0gdHJ1ZTtcbiAgICAvLyBpZiB0aGUgbGVuZ3RoIGlzIGN1cnJlbnRseSB6ZXJvLCB0aGVuIHdlICpuZWVkKiBhIHJlYWRhYmxlIGV2ZW50LlxuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgLy8gY2FsbCBpbnRlcm5hbCByZWFkIG1ldGhvZFxuICAgIHRoaXMuX3JlYWQoc3RhdGUuaGlnaFdhdGVyTWFyayk7XG4gICAgc3RhdGUuc3luYyA9IGZhbHNlO1xuICAgIC8vIElmIF9yZWFkIHB1c2hlZCBkYXRhIHN5bmNocm9ub3VzbHksIHRoZW4gYHJlYWRpbmdgIHdpbGwgYmUgZmFsc2UsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gcmUtZXZhbHVhdGUgaG93IG11Y2ggZGF0YSB3ZSBjYW4gcmV0dXJuIHRvIHRoZSB1c2VyLlxuICAgIGlmICghc3RhdGUucmVhZGluZykgbiA9IGhvd011Y2hUb1JlYWQobk9yaWcsIHN0YXRlKTtcbiAgfVxuXG4gIHZhciByZXQ7XG4gIGlmIChuID4gMCkgcmV0ID0gZnJvbUxpc3Qobiwgc3RhdGUpO2Vsc2UgcmV0ID0gbnVsbDtcblxuICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICBuID0gMDtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5sZW5ndGggLT0gbjtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBJZiB3ZSBoYXZlIG5vdGhpbmcgaW4gdGhlIGJ1ZmZlciwgdGhlbiB3ZSB3YW50IHRvIGtub3dcbiAgICAvLyBhcyBzb29uIGFzIHdlICpkbyogZ2V0IHNvbWV0aGluZyBpbnRvIHRoZSBidWZmZXIuXG4gICAgaWYgKCFzdGF0ZS5lbmRlZCkgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcblxuICAgIC8vIElmIHdlIHRyaWVkIHRvIHJlYWQoKSBwYXN0IHRoZSBFT0YsIHRoZW4gZW1pdCBlbmQgb24gdGhlIG5leHQgdGljay5cbiAgICBpZiAobk9yaWcgIT09IG4gJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO1xuICB9XG5cbiAgaWYgKHJldCAhPT0gbnVsbCkgdGhpcy5lbWl0KCdkYXRhJywgcmV0KTtcblxuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gb25Fb2ZDaHVuayhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5lbmRlZCkgcmV0dXJuO1xuICBpZiAoc3RhdGUuZGVjb2Rlcikge1xuICAgIHZhciBjaHVuayA9IHN0YXRlLmRlY29kZXIuZW5kKCk7XG4gICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkge1xuICAgICAgc3RhdGUuYnVmZmVyLnB1c2goY2h1bmspO1xuICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgfVxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG5cbiAgLy8gZW1pdCAncmVhZGFibGUnIG5vdyB0byBtYWtlIHN1cmUgaXQgZ2V0cyBwaWNrZWQgdXAuXG4gIGVtaXRSZWFkYWJsZShzdHJlYW0pO1xufVxuXG4vLyBEb24ndCBlbWl0IHJlYWRhYmxlIHJpZ2h0IGF3YXkgaW4gc3luYyBtb2RlLCBiZWNhdXNlIHRoaXMgY2FuIHRyaWdnZXJcbi8vIGFub3RoZXIgcmVhZCgpIGNhbGwgPT4gc3RhY2sgb3ZlcmZsb3cuICBUaGlzIHdheSwgaXQgbWlnaHQgdHJpZ2dlclxuLy8gYSBuZXh0VGljayByZWN1cnNpb24gd2FybmluZywgYnV0IHRoYXQncyBub3Qgc28gYmFkLlxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlKHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIHN0YXRlLm5lZWRSZWFkYWJsZSA9IGZhbHNlO1xuICBpZiAoIXN0YXRlLmVtaXR0ZWRSZWFkYWJsZSkge1xuICAgIGRlYnVnKCdlbWl0UmVhZGFibGUnLCBzdGF0ZS5mbG93aW5nKTtcbiAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSB0cnVlO1xuICAgIGlmIChzdGF0ZS5zeW5jKSBwbmEubmV4dFRpY2soZW1pdFJlYWRhYmxlXywgc3RyZWFtKTtlbHNlIGVtaXRSZWFkYWJsZV8oc3RyZWFtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0UmVhZGFibGVfKHN0cmVhbSkge1xuICBkZWJ1ZygnZW1pdCByZWFkYWJsZScpO1xuICBzdHJlYW0uZW1pdCgncmVhZGFibGUnKTtcbiAgZmxvdyhzdHJlYW0pO1xufVxuXG4vLyBhdCB0aGlzIHBvaW50LCB0aGUgdXNlciBoYXMgcHJlc3VtYWJseSBzZWVuIHRoZSAncmVhZGFibGUnIGV2ZW50LFxuLy8gYW5kIGNhbGxlZCByZWFkKCkgdG8gY29uc3VtZSBzb21lIGRhdGEuICB0aGF0IG1heSBoYXZlIHRyaWdnZXJlZFxuLy8gaW4gdHVybiBhbm90aGVyIF9yZWFkKG4pIGNhbGwsIGluIHdoaWNoIGNhc2UgcmVhZGluZyA9IHRydWUgaWZcbi8vIGl0J3MgaW4gcHJvZ3Jlc3MuXG4vLyBIb3dldmVyLCBpZiB3ZSdyZSBub3QgZW5kZWQsIG9yIHJlYWRpbmcsIGFuZCB0aGUgbGVuZ3RoIDwgaHdtLFxuLy8gdGhlbiBnbyBhaGVhZCBhbmQgdHJ5IHRvIHJlYWQgc29tZSBtb3JlIHByZWVtcHRpdmVseS5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmdNb3JlKSB7XG4gICAgc3RhdGUucmVhZGluZ01vcmUgPSB0cnVlO1xuICAgIHBuYS5uZXh0VGljayhtYXliZVJlYWRNb3JlXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVSZWFkTW9yZV8oc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB3aGlsZSAoIXN0YXRlLnJlYWRpbmcgJiYgIXN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLmVuZGVkICYmIHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkZWJ1ZygnbWF5YmVSZWFkTW9yZSByZWFkIDAnKTtcbiAgICBzdHJlYW0ucmVhZCgwKTtcbiAgICBpZiAobGVuID09PSBzdGF0ZS5sZW5ndGgpXG4gICAgICAvLyBkaWRuJ3QgZ2V0IGFueSBkYXRhLCBzdG9wIHNwaW5uaW5nLlxuICAgICAgYnJlYWs7ZWxzZSBsZW4gPSBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgc3RhdGUucmVhZGluZ01vcmUgPSBmYWxzZTtcbn1cblxuLy8gYWJzdHJhY3QgbWV0aG9kLiAgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gY2FsbCBjYihlciwgZGF0YSkgd2hlcmUgZGF0YSBpcyA8PSBuIGluIGxlbmd0aC5cbi8vIGZvciB2aXJ0dWFsIChub24tc3RyaW5nLCBub24tYnVmZmVyKSBzdHJlYW1zLCBcImxlbmd0aFwiIGlzIHNvbWV3aGF0XG4vLyBhcmJpdHJhcnksIGFuZCBwZXJoYXBzIG5vdCB2ZXJ5IG1lYW5pbmdmdWwuXG5SZWFkYWJsZS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdfcmVhZCgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpKTtcbn07XG5cblJlYWRhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKGRlc3QsIHBpcGVPcHRzKSB7XG4gIHZhciBzcmMgPSB0aGlzO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuXG4gIHN3aXRjaCAoc3RhdGUucGlwZXNDb3VudCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHN0YXRlLnBpcGVzID0gZGVzdDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHN0YXRlLnBpcGVzID0gW3N0YXRlLnBpcGVzLCBkZXN0XTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZS5waXBlcy5wdXNoKGRlc3QpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgc3RhdGUucGlwZXNDb3VudCArPSAxO1xuICBkZWJ1ZygncGlwZSBjb3VudD0lZCBvcHRzPSVqJywgc3RhdGUucGlwZXNDb3VudCwgcGlwZU9wdHMpO1xuXG4gIHZhciBkb0VuZCA9ICghcGlwZU9wdHMgfHwgcGlwZU9wdHMuZW5kICE9PSBmYWxzZSkgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRvdXQgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRlcnI7XG5cbiAgdmFyIGVuZEZuID0gZG9FbmQgPyBvbmVuZCA6IHVucGlwZTtcbiAgaWYgKHN0YXRlLmVuZEVtaXR0ZWQpIHBuYS5uZXh0VGljayhlbmRGbik7ZWxzZSBzcmMub25jZSgnZW5kJywgZW5kRm4pO1xuXG4gIGRlc3Qub24oJ3VucGlwZScsIG9udW5waXBlKTtcbiAgZnVuY3Rpb24gb251bnBpcGUocmVhZGFibGUsIHVucGlwZUluZm8pIHtcbiAgICBkZWJ1Zygnb251bnBpcGUnKTtcbiAgICBpZiAocmVhZGFibGUgPT09IHNyYykge1xuICAgICAgaWYgKHVucGlwZUluZm8gJiYgdW5waXBlSW5mby5oYXNVbnBpcGVkID09PSBmYWxzZSkge1xuICAgICAgICB1bnBpcGVJbmZvLmhhc1VucGlwZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbmQoKSB7XG4gICAgZGVidWcoJ29uZW5kJyk7XG4gICAgZGVzdC5lbmQoKTtcbiAgfVxuXG4gIC8vIHdoZW4gdGhlIGRlc3QgZHJhaW5zLCBpdCByZWR1Y2VzIHRoZSBhd2FpdERyYWluIGNvdW50ZXJcbiAgLy8gb24gdGhlIHNvdXJjZS4gIFRoaXMgd291bGQgYmUgbW9yZSBlbGVnYW50IHdpdGggYSAub25jZSgpXG4gIC8vIGhhbmRsZXIgaW4gZmxvdygpLCBidXQgYWRkaW5nIGFuZCByZW1vdmluZyByZXBlYXRlZGx5IGlzXG4gIC8vIHRvbyBzbG93LlxuICB2YXIgb25kcmFpbiA9IHBpcGVPbkRyYWluKHNyYyk7XG4gIGRlc3Qub24oJ2RyYWluJywgb25kcmFpbik7XG5cbiAgdmFyIGNsZWFuZWRVcCA9IGZhbHNlO1xuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGRlYnVnKCdjbGVhbnVwJyk7XG4gICAgLy8gY2xlYW51cCBldmVudCBoYW5kbGVycyBvbmNlIHRoZSBwaXBlIGlzIGJyb2tlblxuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2RyYWluJywgb25kcmFpbik7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCB1bnBpcGUpO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uZGF0YSk7XG5cbiAgICBjbGVhbmVkVXAgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHJlYWRlciBpcyB3YWl0aW5nIGZvciBhIGRyYWluIGV2ZW50IGZyb20gdGhpc1xuICAgIC8vIHNwZWNpZmljIHdyaXRlciwgdGhlbiBpdCB3b3VsZCBjYXVzZSBpdCB0byBuZXZlciBzdGFydFxuICAgIC8vIGZsb3dpbmcgYWdhaW4uXG4gICAgLy8gU28sIGlmIHRoaXMgaXMgYXdhaXRpbmcgYSBkcmFpbiwgdGhlbiB3ZSBqdXN0IGNhbGwgaXQgbm93LlxuICAgIC8vIElmIHdlIGRvbid0IGtub3csIHRoZW4gYXNzdW1lIHRoYXQgd2UgYXJlIHdhaXRpbmcgZm9yIG9uZS5cbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiAmJiAoIWRlc3QuX3dyaXRhYmxlU3RhdGUgfHwgZGVzdC5fd3JpdGFibGVTdGF0ZS5uZWVkRHJhaW4pKSBvbmRyYWluKCk7XG4gIH1cblxuICAvLyBJZiB0aGUgdXNlciBwdXNoZXMgbW9yZSBkYXRhIHdoaWxlIHdlJ3JlIHdyaXRpbmcgdG8gZGVzdCB0aGVuIHdlJ2xsIGVuZCB1cFxuICAvLyBpbiBvbmRhdGEgYWdhaW4uIEhvd2V2ZXIsIHdlIG9ubHkgd2FudCB0byBpbmNyZWFzZSBhd2FpdERyYWluIG9uY2UgYmVjYXVzZVxuICAvLyBkZXN0IHdpbGwgb25seSBlbWl0IG9uZSAnZHJhaW4nIGV2ZW50IGZvciB0aGUgbXVsdGlwbGUgd3JpdGVzLlxuICAvLyA9PiBJbnRyb2R1Y2UgYSBndWFyZCBvbiBpbmNyZWFzaW5nIGF3YWl0RHJhaW4uXG4gIHZhciBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gIHNyYy5vbignZGF0YScsIG9uZGF0YSk7XG4gIGZ1bmN0aW9uIG9uZGF0YShjaHVuaykge1xuICAgIGRlYnVnKCdvbmRhdGEnKTtcbiAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gICAgdmFyIHJldCA9IGRlc3Qud3JpdGUoY2h1bmspO1xuICAgIGlmIChmYWxzZSA9PT0gcmV0ICYmICFpbmNyZWFzZWRBd2FpdERyYWluKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB1bnBpcGVkIGR1cmluZyBgZGVzdC53cml0ZSgpYCwgaXQgaXMgcG9zc2libGVcbiAgICAgIC8vIHRvIGdldCBzdHVjayBpbiBhIHBlcm1hbmVudGx5IHBhdXNlZCBzdGF0ZSBpZiB0aGF0IHdyaXRlXG4gICAgICAvLyBhbHNvIHJldHVybmVkIGZhbHNlLlxuICAgICAgLy8gPT4gQ2hlY2sgd2hldGhlciBgZGVzdGAgaXMgc3RpbGwgYSBwaXBpbmcgZGVzdGluYXRpb24uXG4gICAgICBpZiAoKHN0YXRlLnBpcGVzQ291bnQgPT09IDEgJiYgc3RhdGUucGlwZXMgPT09IGRlc3QgfHwgc3RhdGUucGlwZXNDb3VudCA+IDEgJiYgaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCkgIT09IC0xKSAmJiAhY2xlYW5lZFVwKSB7XG4gICAgICAgIGRlYnVnKCdmYWxzZSB3cml0ZSByZXNwb25zZSwgcGF1c2UnLCBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbik7XG4gICAgICAgIHNyYy5fcmVhZGFibGVTdGF0ZS5hd2FpdERyYWluKys7XG4gICAgICAgIGluY3JlYXNlZEF3YWl0RHJhaW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgc3JjLnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIGRlc3QgaGFzIGFuIGVycm9yLCB0aGVuIHN0b3AgcGlwaW5nIGludG8gaXQuXG4gIC8vIGhvd2V2ZXIsIGRvbid0IHN1cHByZXNzIHRoZSB0aHJvd2luZyBiZWhhdmlvciBmb3IgdGhpcy5cbiAgZnVuY3Rpb24gb25lcnJvcihlcikge1xuICAgIGRlYnVnKCdvbmVycm9yJywgZXIpO1xuICAgIHVucGlwZSgpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgaWYgKEVFbGlzdGVuZXJDb3VudChkZXN0LCAnZXJyb3InKSA9PT0gMCkgZGVzdC5lbWl0KCdlcnJvcicsIGVyKTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSBvdXIgZXJyb3IgaGFuZGxlciBpcyBhdHRhY2hlZCBiZWZvcmUgdXNlcmxhbmQgb25lcy5cbiAgcHJlcGVuZExpc3RlbmVyKGRlc3QsICdlcnJvcicsIG9uZXJyb3IpO1xuXG4gIC8vIEJvdGggY2xvc2UgYW5kIGZpbmlzaCBzaG91bGQgdHJpZ2dlciB1bnBpcGUsIGJ1dCBvbmx5IG9uY2UuXG4gIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIHVucGlwZSgpO1xuICB9XG4gIGRlc3Qub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgZnVuY3Rpb24gb25maW5pc2goKSB7XG4gICAgZGVidWcoJ29uZmluaXNoJyk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblxuICBmdW5jdGlvbiB1bnBpcGUoKSB7XG4gICAgZGVidWcoJ3VucGlwZScpO1xuICAgIHNyYy51bnBpcGUoZGVzdCk7XG4gIH1cblxuICAvLyB0ZWxsIHRoZSBkZXN0IHRoYXQgaXQncyBiZWluZyBwaXBlZCB0b1xuICBkZXN0LmVtaXQoJ3BpcGUnLCBzcmMpO1xuXG4gIC8vIHN0YXJ0IHRoZSBmbG93IGlmIGl0IGhhc24ndCBiZWVuIHN0YXJ0ZWQgYWxyZWFkeS5cbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BpcGUgcmVzdW1lJyk7XG4gICAgc3JjLnJlc3VtZSgpO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5mdW5jdGlvbiBwaXBlT25EcmFpbihzcmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBzcmMuX3JlYWRhYmxlU3RhdGU7XG4gICAgZGVidWcoJ3BpcGVPbkRyYWluJywgc3RhdGUuYXdhaXREcmFpbik7XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4pIHN0YXRlLmF3YWl0RHJhaW4tLTtcbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiA9PT0gMCAmJiBFRWxpc3RlbmVyQ291bnQoc3JjLCAnZGF0YScpKSB7XG4gICAgICBzdGF0ZS5mbG93aW5nID0gdHJ1ZTtcbiAgICAgIGZsb3coc3JjKTtcbiAgICB9XG4gIH07XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS51bnBpcGUgPSBmdW5jdGlvbiAoZGVzdCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgdW5waXBlSW5mbyA9IHsgaGFzVW5waXBlZDogZmFsc2UgfTtcblxuICAvLyBpZiB3ZSdyZSBub3QgcGlwaW5nIGFueXdoZXJlLCB0aGVuIGRvIG5vdGhpbmcuXG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAwKSByZXR1cm4gdGhpcztcblxuICAvLyBqdXN0IG9uZSBkZXN0aW5hdGlvbi4gIG1vc3QgY29tbW9uIGNhc2UuXG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAxKSB7XG4gICAgLy8gcGFzc2VkIGluIG9uZSwgYnV0IGl0J3Mgbm90IHRoZSByaWdodCBvbmUuXG4gICAgaWYgKGRlc3QgJiYgZGVzdCAhPT0gc3RhdGUucGlwZXMpIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKCFkZXN0KSBkZXN0ID0gc3RhdGUucGlwZXM7XG5cbiAgICAvLyBnb3QgYSBtYXRjaC5cbiAgICBzdGF0ZS5waXBlcyA9IG51bGw7XG4gICAgc3RhdGUucGlwZXNDb3VudCA9IDA7XG4gICAgc3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgIGlmIChkZXN0KSBkZXN0LmVtaXQoJ3VucGlwZScsIHRoaXMsIHVucGlwZUluZm8pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc2xvdyBjYXNlLiBtdWx0aXBsZSBwaXBlIGRlc3RpbmF0aW9ucy5cblxuICBpZiAoIWRlc3QpIHtcbiAgICAvLyByZW1vdmUgYWxsLlxuICAgIHZhciBkZXN0cyA9IHN0YXRlLnBpcGVzO1xuICAgIHZhciBsZW4gPSBzdGF0ZS5waXBlc0NvdW50O1xuICAgIHN0YXRlLnBpcGVzID0gbnVsbDtcbiAgICBzdGF0ZS5waXBlc0NvdW50ID0gMDtcbiAgICBzdGF0ZS5mbG93aW5nID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBkZXN0c1tpXS5lbWl0KCd1bnBpcGUnLCB0aGlzLCB1bnBpcGVJbmZvKTtcbiAgICB9cmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0cnkgdG8gZmluZCB0aGUgcmlnaHQgb25lLlxuICB2YXIgaW5kZXggPSBpbmRleE9mKHN0YXRlLnBpcGVzLCBkZXN0KTtcbiAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIHRoaXM7XG5cbiAgc3RhdGUucGlwZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgc3RhdGUucGlwZXNDb3VudCAtPSAxO1xuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMSkgc3RhdGUucGlwZXMgPSBzdGF0ZS5waXBlc1swXTtcblxuICBkZXN0LmVtaXQoJ3VucGlwZScsIHRoaXMsIHVucGlwZUluZm8pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gc2V0IHVwIGRhdGEgZXZlbnRzIGlmIHRoZXkgYXJlIGFza2VkIGZvclxuLy8gRW5zdXJlIHJlYWRhYmxlIGxpc3RlbmVycyBldmVudHVhbGx5IGdldCBzb21ldGhpbmdcblJlYWRhYmxlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldiwgZm4pIHtcbiAgdmFyIHJlcyA9IFN0cmVhbS5wcm90b3R5cGUub24uY2FsbCh0aGlzLCBldiwgZm4pO1xuXG4gIGlmIChldiA9PT0gJ2RhdGEnKSB7XG4gICAgLy8gU3RhcnQgZmxvd2luZyBvbiBuZXh0IHRpY2sgaWYgc3RyZWFtIGlzbid0IGV4cGxpY2l0bHkgcGF1c2VkXG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyAhPT0gZmFsc2UpIHRoaXMucmVzdW1lKCk7XG4gIH0gZWxzZSBpZiAoZXYgPT09ICdyZWFkYWJsZScpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICAgIGlmICghc3RhdGUuZW5kRW1pdHRlZCAmJiAhc3RhdGUucmVhZGFibGVMaXN0ZW5pbmcpIHtcbiAgICAgIHN0YXRlLnJlYWRhYmxlTGlzdGVuaW5nID0gc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgaWYgKCFzdGF0ZS5yZWFkaW5nKSB7XG4gICAgICAgIHBuYS5uZXh0VGljayhuUmVhZGluZ05leHRUaWNrLCB0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgIGVtaXRSZWFkYWJsZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblJlYWRhYmxlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IFJlYWRhYmxlLnByb3RvdHlwZS5vbjtcblxuZnVuY3Rpb24gblJlYWRpbmdOZXh0VGljayhzZWxmKSB7XG4gIGRlYnVnKCdyZWFkYWJsZSBuZXh0dGljayByZWFkIDAnKTtcbiAgc2VsZi5yZWFkKDApO1xufVxuXG4vLyBwYXVzZSgpIGFuZCByZXN1bWUoKSBhcmUgcmVtbmFudHMgb2YgdGhlIGxlZ2FjeSByZWFkYWJsZSBzdHJlYW0gQVBJXG4vLyBJZiB0aGUgdXNlciB1c2VzIHRoZW0sIHRoZW4gc3dpdGNoIGludG8gb2xkIG1vZGUuXG5SZWFkYWJsZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICBpZiAoIXN0YXRlLmZsb3dpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lJyk7XG4gICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgcmVzdW1lKHRoaXMsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHJlc3VtZShzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVzdW1lU2NoZWR1bGVkKSB7XG4gICAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBwbmEubmV4dFRpY2socmVzdW1lXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzdW1lXyhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVhZGluZykge1xuICAgIGRlYnVnKCdyZXN1bWUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bWVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgc3RhdGUuYXdhaXREcmFpbiA9IDA7XG4gIHN0cmVhbS5lbWl0KCdyZXN1bWUnKTtcbiAgZmxvdyhzdHJlYW0pO1xuICBpZiAoc3RhdGUuZmxvd2luZyAmJiAhc3RhdGUucmVhZGluZykgc3RyZWFtLnJlYWQoMCk7XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2NhbGwgcGF1c2UgZmxvd2luZz0laicsIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyk7XG4gIGlmIChmYWxzZSAhPT0gdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BhdXNlJyk7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KCdwYXVzZScpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZmxvdyhzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBkZWJ1ZygnZmxvdycsIHN0YXRlLmZsb3dpbmcpO1xuICB3aGlsZSAoc3RhdGUuZmxvd2luZyAmJiBzdHJlYW0ucmVhZCgpICE9PSBudWxsKSB7fVxufVxuXG4vLyB3cmFwIGFuIG9sZC1zdHlsZSBzdHJlYW0gYXMgdGhlIGFzeW5jIGRhdGEgc291cmNlLlxuLy8gVGhpcyBpcyAqbm90KiBwYXJ0IG9mIHRoZSByZWFkYWJsZSBzdHJlYW0gaW50ZXJmYWNlLlxuLy8gSXQgaXMgYW4gdWdseSB1bmZvcnR1bmF0ZSBtZXNzIG9mIGhpc3RvcnkuXG5SZWFkYWJsZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgcGF1c2VkID0gZmFsc2U7XG5cbiAgc3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgZW5kJyk7XG4gICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIXN0YXRlLmVuZGVkKSB7XG4gICAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkgX3RoaXMucHVzaChjaHVuayk7XG4gICAgfVxuXG4gICAgX3RoaXMucHVzaChudWxsKTtcbiAgfSk7XG5cbiAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgZGF0YScpO1xuICAgIGlmIChzdGF0ZS5kZWNvZGVyKSBjaHVuayA9IHN0YXRlLmRlY29kZXIud3JpdGUoY2h1bmspO1xuXG4gICAgLy8gZG9uJ3Qgc2tpcCBvdmVyIGZhbHN5IHZhbHVlcyBpbiBvYmplY3RNb2RlXG4gICAgaWYgKHN0YXRlLm9iamVjdE1vZGUgJiYgKGNodW5rID09PSBudWxsIHx8IGNodW5rID09PSB1bmRlZmluZWQpKSByZXR1cm47ZWxzZSBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgKCFjaHVuayB8fCAhY2h1bmsubGVuZ3RoKSkgcmV0dXJuO1xuXG4gICAgdmFyIHJldCA9IF90aGlzLnB1c2goY2h1bmspO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLnBhdXNlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBwcm94eSBhbGwgdGhlIG90aGVyIG1ldGhvZHMuXG4gIC8vIGltcG9ydGFudCB3aGVuIHdyYXBwaW5nIGZpbHRlcnMgYW5kIGR1cGxleGVzLlxuICBmb3IgKHZhciBpIGluIHN0cmVhbSkge1xuICAgIGlmICh0aGlzW2ldID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHN0cmVhbVtpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tpXSA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc3RyZWFtW21ldGhvZF0uYXBwbHkoc3RyZWFtLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfShpKTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm94eSBjZXJ0YWluIGltcG9ydGFudCBldmVudHMuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwga1Byb3h5RXZlbnRzLmxlbmd0aDsgbisrKSB7XG4gICAgc3RyZWFtLm9uKGtQcm94eUV2ZW50c1tuXSwgdGhpcy5lbWl0LmJpbmQodGhpcywga1Byb3h5RXZlbnRzW25dKSk7XG4gIH1cblxuICAvLyB3aGVuIHdlIHRyeSB0byBjb25zdW1lIHNvbWUgbW9yZSBieXRlcywgc2ltcGx5IHVucGF1c2UgdGhlXG4gIC8vIHVuZGVybHlpbmcgc3RyZWFtLlxuICB0aGlzLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgICBkZWJ1Zygnd3JhcHBlZCBfcmVhZCcsIG4pO1xuICAgIGlmIChwYXVzZWQpIHtcbiAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgc3RyZWFtLnJlc3VtZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZS5wcm90b3R5cGUsICdyZWFkYWJsZUhpZ2hXYXRlck1hcmsnLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIH1cbn0pO1xuXG4vLyBleHBvc2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkuXG5SZWFkYWJsZS5fZnJvbUxpc3QgPSBmcm9tTGlzdDtcblxuLy8gUGx1Y2sgb2ZmIG4gYnl0ZXMgZnJvbSBhbiBhcnJheSBvZiBidWZmZXJzLlxuLy8gTGVuZ3RoIGlzIHRoZSBjb21iaW5lZCBsZW5ndGhzIG9mIGFsbCB0aGUgYnVmZmVycyBpbiB0aGUgbGlzdC5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gZnJvbUxpc3Qobiwgc3RhdGUpIHtcbiAgLy8gbm90aGluZyBidWZmZXJlZFxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICB2YXIgcmV0O1xuICBpZiAoc3RhdGUub2JqZWN0TW9kZSkgcmV0ID0gc3RhdGUuYnVmZmVyLnNoaWZ0KCk7ZWxzZSBpZiAoIW4gfHwgbiA+PSBzdGF0ZS5sZW5ndGgpIHtcbiAgICAvLyByZWFkIGl0IGFsbCwgdHJ1bmNhdGUgdGhlIGxpc3RcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgcmV0ID0gc3RhdGUuYnVmZmVyLmpvaW4oJycpO2Vsc2UgaWYgKHN0YXRlLmJ1ZmZlci5sZW5ndGggPT09IDEpIHJldCA9IHN0YXRlLmJ1ZmZlci5oZWFkLmRhdGE7ZWxzZSByZXQgPSBzdGF0ZS5idWZmZXIuY29uY2F0KHN0YXRlLmxlbmd0aCk7XG4gICAgc3RhdGUuYnVmZmVyLmNsZWFyKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVhZCBwYXJ0IG9mIGxpc3RcbiAgICByZXQgPSBmcm9tTGlzdFBhcnRpYWwobiwgc3RhdGUuYnVmZmVyLCBzdGF0ZS5kZWNvZGVyKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8vIEV4dHJhY3RzIG9ubHkgZW5vdWdoIGJ1ZmZlcmVkIGRhdGEgdG8gc2F0aXNmeSB0aGUgYW1vdW50IHJlcXVlc3RlZC5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gZnJvbUxpc3RQYXJ0aWFsKG4sIGxpc3QsIGhhc1N0cmluZ3MpIHtcbiAgdmFyIHJldDtcbiAgaWYgKG4gPCBsaXN0LmhlYWQuZGF0YS5sZW5ndGgpIHtcbiAgICAvLyBzbGljZSBpcyB0aGUgc2FtZSBmb3IgYnVmZmVycyBhbmQgc3RyaW5nc1xuICAgIHJldCA9IGxpc3QuaGVhZC5kYXRhLnNsaWNlKDAsIG4pO1xuICAgIGxpc3QuaGVhZC5kYXRhID0gbGlzdC5oZWFkLmRhdGEuc2xpY2Uobik7XG4gIH0gZWxzZSBpZiAobiA9PT0gbGlzdC5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gZmlyc3QgY2h1bmsgaXMgYSBwZXJmZWN0IG1hdGNoXG4gICAgcmV0ID0gbGlzdC5zaGlmdCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlc3VsdCBzcGFucyBtb3JlIHRoYW4gb25lIGJ1ZmZlclxuICAgIHJldCA9IGhhc1N0cmluZ3MgPyBjb3B5RnJvbUJ1ZmZlclN0cmluZyhuLCBsaXN0KSA6IGNvcHlGcm9tQnVmZmVyKG4sIGxpc3QpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8vIENvcGllcyBhIHNwZWNpZmllZCBhbW91bnQgb2YgY2hhcmFjdGVycyBmcm9tIHRoZSBsaXN0IG9mIGJ1ZmZlcmVkIGRhdGFcbi8vIGNodW5rcy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gY29weUZyb21CdWZmZXJTdHJpbmcobiwgbGlzdCkge1xuICB2YXIgcCA9IGxpc3QuaGVhZDtcbiAgdmFyIGMgPSAxO1xuICB2YXIgcmV0ID0gcC5kYXRhO1xuICBuIC09IHJldC5sZW5ndGg7XG4gIHdoaWxlIChwID0gcC5uZXh0KSB7XG4gICAgdmFyIHN0ciA9IHAuZGF0YTtcbiAgICB2YXIgbmIgPSBuID4gc3RyLmxlbmd0aCA/IHN0ci5sZW5ndGggOiBuO1xuICAgIGlmIChuYiA9PT0gc3RyLmxlbmd0aCkgcmV0ICs9IHN0cjtlbHNlIHJldCArPSBzdHIuc2xpY2UoMCwgbik7XG4gICAgbiAtPSBuYjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgaWYgKG5iID09PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgICsrYztcbiAgICAgICAgaWYgKHAubmV4dCkgbGlzdC5oZWFkID0gcC5uZXh0O2Vsc2UgbGlzdC5oZWFkID0gbGlzdC50YWlsID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuaGVhZCA9IHA7XG4gICAgICAgIHAuZGF0YSA9IHN0ci5zbGljZShuYik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgKytjO1xuICB9XG4gIGxpc3QubGVuZ3RoIC09IGM7XG4gIHJldHVybiByZXQ7XG59XG5cbi8vIENvcGllcyBhIHNwZWNpZmllZCBhbW91bnQgb2YgYnl0ZXMgZnJvbSB0aGUgbGlzdCBvZiBidWZmZXJlZCBkYXRhIGNodW5rcy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gY29weUZyb21CdWZmZXIobiwgbGlzdCkge1xuICB2YXIgcmV0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG4pO1xuICB2YXIgcCA9IGxpc3QuaGVhZDtcbiAgdmFyIGMgPSAxO1xuICBwLmRhdGEuY29weShyZXQpO1xuICBuIC09IHAuZGF0YS5sZW5ndGg7XG4gIHdoaWxlIChwID0gcC5uZXh0KSB7XG4gICAgdmFyIGJ1ZiA9IHAuZGF0YTtcbiAgICB2YXIgbmIgPSBuID4gYnVmLmxlbmd0aCA/IGJ1Zi5sZW5ndGggOiBuO1xuICAgIGJ1Zi5jb3B5KHJldCwgcmV0Lmxlbmd0aCAtIG4sIDAsIG5iKTtcbiAgICBuIC09IG5iO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICBpZiAobmIgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgKytjO1xuICAgICAgICBpZiAocC5uZXh0KSBsaXN0LmhlYWQgPSBwLm5leHQ7ZWxzZSBsaXN0LmhlYWQgPSBsaXN0LnRhaWwgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5oZWFkID0gcDtcbiAgICAgICAgcC5kYXRhID0gYnVmLnNsaWNlKG5iKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICArK2M7XG4gIH1cbiAgbGlzdC5sZW5ndGggLT0gYztcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGUoc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcblxuICAvLyBJZiB3ZSBnZXQgaGVyZSBiZWZvcmUgY29uc3VtaW5nIGFsbCB0aGUgYnl0ZXMsIHRoZW4gdGhhdCBpcyBhXG4gIC8vIGJ1ZyBpbiBub2RlLiAgU2hvdWxkIG5ldmVyIGhhcHBlbi5cbiAgaWYgKHN0YXRlLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcignXCJlbmRSZWFkYWJsZSgpXCIgY2FsbGVkIG9uIG5vbi1lbXB0eSBzdHJlYW0nKTtcblxuICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQpIHtcbiAgICBzdGF0ZS5lbmRlZCA9IHRydWU7XG4gICAgcG5hLm5leHRUaWNrKGVuZFJlYWRhYmxlTlQsIHN0YXRlLCBzdHJlYW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuZFJlYWRhYmxlTlQoc3RhdGUsIHN0cmVhbSkge1xuICAvLyBDaGVjayB0aGF0IHdlIGRpZG4ndCBnZXQgb25lIGxhc3QgdW5zaGlmdC5cbiAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmIHN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXRlLmVuZEVtaXR0ZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5yZWFkYWJsZSA9IGZhbHNlO1xuICAgIHN0cmVhbS5lbWl0KCdlbmQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKHhzLCB4KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHhzW2ldID09PSB4KSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIGEgdHJhbnNmb3JtIHN0cmVhbSBpcyBhIHJlYWRhYmxlL3dyaXRhYmxlIHN0cmVhbSB3aGVyZSB5b3UgZG9cbi8vIHNvbWV0aGluZyB3aXRoIHRoZSBkYXRhLiAgU29tZXRpbWVzIGl0J3MgY2FsbGVkIGEgXCJmaWx0ZXJcIixcbi8vIGJ1dCB0aGF0J3Mgbm90IGEgZ3JlYXQgbmFtZSBmb3IgaXQsIHNpbmNlIHRoYXQgaW1wbGllcyBhIHRoaW5nIHdoZXJlXG4vLyBzb21lIGJpdHMgcGFzcyB0aHJvdWdoLCBhbmQgb3RoZXJzIGFyZSBzaW1wbHkgaWdub3JlZC4gIChUaGF0IHdvdWxkXG4vLyBiZSBhIHZhbGlkIGV4YW1wbGUgb2YgYSB0cmFuc2Zvcm0sIG9mIGNvdXJzZS4pXG4vL1xuLy8gV2hpbGUgdGhlIG91dHB1dCBpcyBjYXVzYWxseSByZWxhdGVkIHRvIHRoZSBpbnB1dCwgaXQncyBub3QgYVxuLy8gbmVjZXNzYXJpbHkgc3ltbWV0cmljIG9yIHN5bmNocm9ub3VzIHRyYW5zZm9ybWF0aW9uLiAgRm9yIGV4YW1wbGUsXG4vLyBhIHpsaWIgc3RyZWFtIG1pZ2h0IHRha2UgbXVsdGlwbGUgcGxhaW4tdGV4dCB3cml0ZXMoKSwgYW5kIHRoZW5cbi8vIGVtaXQgYSBzaW5nbGUgY29tcHJlc3NlZCBjaHVuayBzb21lIHRpbWUgaW4gdGhlIGZ1dHVyZS5cbi8vXG4vLyBIZXJlJ3MgaG93IHRoaXMgd29ya3M6XG4vL1xuLy8gVGhlIFRyYW5zZm9ybSBzdHJlYW0gaGFzIGFsbCB0aGUgYXNwZWN0cyBvZiB0aGUgcmVhZGFibGUgYW5kIHdyaXRhYmxlXG4vLyBzdHJlYW0gY2xhc3Nlcy4gIFdoZW4geW91IHdyaXRlKGNodW5rKSwgdGhhdCBjYWxscyBfd3JpdGUoY2h1bmssY2IpXG4vLyBpbnRlcm5hbGx5LCBhbmQgcmV0dXJucyBmYWxzZSBpZiB0aGVyZSdzIGEgbG90IG9mIHBlbmRpbmcgd3JpdGVzXG4vLyBidWZmZXJlZCB1cC4gIFdoZW4geW91IGNhbGwgcmVhZCgpLCB0aGF0IGNhbGxzIF9yZWFkKG4pIHVudGlsXG4vLyB0aGVyZSdzIGVub3VnaCBwZW5kaW5nIHJlYWRhYmxlIGRhdGEgYnVmZmVyZWQgdXAuXG4vL1xuLy8gSW4gYSB0cmFuc2Zvcm0gc3RyZWFtLCB0aGUgd3JpdHRlbiBkYXRhIGlzIHBsYWNlZCBpbiBhIGJ1ZmZlci4gIFdoZW5cbi8vIF9yZWFkKG4pIGlzIGNhbGxlZCwgaXQgdHJhbnNmb3JtcyB0aGUgcXVldWVkIHVwIGRhdGEsIGNhbGxpbmcgdGhlXG4vLyBidWZmZXJlZCBfd3JpdGUgY2IncyBhcyBpdCBjb25zdW1lcyBjaHVua3MuICBJZiBjb25zdW1pbmcgYSBzaW5nbGVcbi8vIHdyaXR0ZW4gY2h1bmsgd291bGQgcmVzdWx0IGluIG11bHRpcGxlIG91dHB1dCBjaHVua3MsIHRoZW4gdGhlIGZpcnN0XG4vLyBvdXRwdXR0ZWQgYml0IGNhbGxzIHRoZSByZWFkY2IsIGFuZCBzdWJzZXF1ZW50IGNodW5rcyBqdXN0IGdvIGludG9cbi8vIHRoZSByZWFkIGJ1ZmZlciwgYW5kIHdpbGwgY2F1c2UgaXQgdG8gZW1pdCAncmVhZGFibGUnIGlmIG5lY2Vzc2FyeS5cbi8vXG4vLyBUaGlzIHdheSwgYmFjay1wcmVzc3VyZSBpcyBhY3R1YWxseSBkZXRlcm1pbmVkIGJ5IHRoZSByZWFkaW5nIHNpZGUsXG4vLyBzaW5jZSBfcmVhZCBoYXMgdG8gYmUgY2FsbGVkIHRvIHN0YXJ0IHByb2Nlc3NpbmcgYSBuZXcgY2h1bmsuICBIb3dldmVyLFxuLy8gYSBwYXRob2xvZ2ljYWwgaW5mbGF0ZSB0eXBlIG9mIHRyYW5zZm9ybSBjYW4gY2F1c2UgZXhjZXNzaXZlIGJ1ZmZlcmluZ1xuLy8gaGVyZS4gIEZvciBleGFtcGxlLCBpbWFnaW5lIGEgc3RyZWFtIHdoZXJlIGV2ZXJ5IGJ5dGUgb2YgaW5wdXQgaXNcbi8vIGludGVycHJldGVkIGFzIGFuIGludGVnZXIgZnJvbSAwLTI1NSwgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGF0IG1hbnlcbi8vIGJ5dGVzIG9mIG91dHB1dC4gIFdyaXRpbmcgdGhlIDQgYnl0ZXMge2ZmLGZmLGZmLGZmfSB3b3VsZCByZXN1bHQgaW5cbi8vIDFrYiBvZiBkYXRhIGJlaW5nIG91dHB1dC4gIEluIHRoaXMgY2FzZSwgeW91IGNvdWxkIHdyaXRlIGEgdmVyeSBzbWFsbFxuLy8gYW1vdW50IG9mIGlucHV0LCBhbmQgZW5kIHVwIHdpdGggYSB2ZXJ5IGxhcmdlIGFtb3VudCBvZiBvdXRwdXQuICBJblxuLy8gc3VjaCBhIHBhdGhvbG9naWNhbCBpbmZsYXRpbmcgbWVjaGFuaXNtLCB0aGVyZSdkIGJlIG5vIHdheSB0byB0ZWxsXG4vLyB0aGUgc3lzdGVtIHRvIHN0b3AgZG9pbmcgdGhlIHRyYW5zZm9ybS4gIEEgc2luZ2xlIDRNQiB3cml0ZSBjb3VsZFxuLy8gY2F1c2UgdGhlIHN5c3RlbSB0byBydW4gb3V0IG9mIG1lbW9yeS5cbi8vXG4vLyBIb3dldmVyLCBldmVuIGluIHN1Y2ggYSBwYXRob2xvZ2ljYWwgY2FzZSwgb25seSBhIHNpbmdsZSB3cml0dGVuIGNodW5rXG4vLyB3b3VsZCBiZSBjb25zdW1lZCwgYW5kIHRoZW4gdGhlIHJlc3Qgd291bGQgd2FpdCAodW4tdHJhbnNmb3JtZWQpIHVudGlsXG4vLyB0aGUgcmVzdWx0cyBvZiB0aGUgcHJldmlvdXMgdHJhbnNmb3JtZWQgY2h1bmsgd2VyZSBjb25zdW1lZC5cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcblxudmFyIER1cGxleCA9IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFRyYW5zZm9ybSwgRHVwbGV4KTtcblxuZnVuY3Rpb24gYWZ0ZXJUcmFuc2Zvcm0oZXIsIGRhdGEpIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG4gIHRzLnRyYW5zZm9ybWluZyA9IGZhbHNlO1xuXG4gIHZhciBjYiA9IHRzLndyaXRlY2I7XG5cbiAgaWYgKCFjYikge1xuICAgIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCd3cml0ZSBjYWxsYmFjayBjYWxsZWQgbXVsdGlwbGUgdGltZXMnKSk7XG4gIH1cblxuICB0cy53cml0ZWNodW5rID0gbnVsbDtcbiAgdHMud3JpdGVjYiA9IG51bGw7XG5cbiAgaWYgKGRhdGEgIT0gbnVsbCkgLy8gc2luZ2xlIGVxdWFscyBjaGVjayBmb3IgYm90aCBgbnVsbGAgYW5kIGB1bmRlZmluZWRgXG4gICAgdGhpcy5wdXNoKGRhdGEpO1xuXG4gIGNiKGVyKTtcblxuICB2YXIgcnMgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICBycy5yZWFkaW5nID0gZmFsc2U7XG4gIGlmIChycy5uZWVkUmVhZGFibGUgfHwgcnMubGVuZ3RoIDwgcnMuaGlnaFdhdGVyTWFyaykge1xuICAgIHRoaXMuX3JlYWQocnMuaGlnaFdhdGVyTWFyayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gVHJhbnNmb3JtKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRyYW5zZm9ybSkpIHJldHVybiBuZXcgVHJhbnNmb3JtKG9wdGlvbnMpO1xuXG4gIER1cGxleC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gIHRoaXMuX3RyYW5zZm9ybVN0YXRlID0ge1xuICAgIGFmdGVyVHJhbnNmb3JtOiBhZnRlclRyYW5zZm9ybS5iaW5kKHRoaXMpLFxuICAgIG5lZWRUcmFuc2Zvcm06IGZhbHNlLFxuICAgIHRyYW5zZm9ybWluZzogZmFsc2UsXG4gICAgd3JpdGVjYjogbnVsbCxcbiAgICB3cml0ZWNodW5rOiBudWxsLFxuICAgIHdyaXRlZW5jb2Rpbmc6IG51bGxcbiAgfTtcblxuICAvLyBzdGFydCBvdXQgYXNraW5nIGZvciBhIHJlYWRhYmxlIGV2ZW50IG9uY2UgZGF0YSBpcyB0cmFuc2Zvcm1lZC5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuXG4gIC8vIHdlIGhhdmUgaW1wbGVtZW50ZWQgdGhlIF9yZWFkIG1ldGhvZCwgYW5kIGRvbmUgdGhlIG90aGVyIHRoaW5nc1xuICAvLyB0aGF0IFJlYWRhYmxlIHdhbnRzIGJlZm9yZSB0aGUgZmlyc3QgX3JlYWQgY2FsbCwgc28gdW5zZXQgdGhlXG4gIC8vIHN5bmMgZ3VhcmQgZmxhZy5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5zeW5jID0gZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nKSB0aGlzLl90cmFuc2Zvcm0gPSBvcHRpb25zLnRyYW5zZm9ybTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5mbHVzaCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZmx1c2ggPSBvcHRpb25zLmZsdXNoO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgd3JpdGFibGUgc2lkZSBmaW5pc2hlcywgdGhlbiBmbHVzaCBvdXQgYW55dGhpbmcgcmVtYWluaW5nLlxuICB0aGlzLm9uKCdwcmVmaW5pc2gnLCBwcmVmaW5pc2gpO1xufVxuXG5mdW5jdGlvbiBwcmVmaW5pc2goKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0aGlzLl9mbHVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuX2ZsdXNoKGZ1bmN0aW9uIChlciwgZGF0YSkge1xuICAgICAgZG9uZShfdGhpcywgZXIsIGRhdGEpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGRvbmUodGhpcywgbnVsbCwgbnVsbCk7XG4gIH1cbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZykge1xuICB0aGlzLl90cmFuc2Zvcm1TdGF0ZS5uZWVkVHJhbnNmb3JtID0gZmFsc2U7XG4gIHJldHVybiBEdXBsZXgucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCBjaHVuaywgZW5jb2RpbmcpO1xufTtcblxuLy8gVGhpcyBpcyB0aGUgcGFydCB3aGVyZSB5b3UgZG8gc3R1ZmYhXG4vLyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uIGluIGltcGxlbWVudGF0aW9uIGNsYXNzZXMuXG4vLyAnY2h1bmsnIGlzIGFuIGlucHV0IGNodW5rLlxuLy9cbi8vIENhbGwgYHB1c2gobmV3Q2h1bmspYCB0byBwYXNzIGFsb25nIHRyYW5zZm9ybWVkIG91dHB1dFxuLy8gdG8gdGhlIHJlYWRhYmxlIHNpZGUuICBZb3UgbWF5IGNhbGwgJ3B1c2gnIHplcm8gb3IgbW9yZSB0aW1lcy5cbi8vXG4vLyBDYWxsIGBjYihlcnIpYCB3aGVuIHlvdSBhcmUgZG9uZSB3aXRoIHRoaXMgY2h1bmsuICBJZiB5b3UgcGFzc1xuLy8gYW4gZXJyb3IsIHRoZW4gdGhhdCdsbCBwdXQgdGhlIGh1cnQgb24gdGhlIHdob2xlIG9wZXJhdGlvbi4gIElmIHlvdVxuLy8gbmV2ZXIgY2FsbCBjYigpLCB0aGVuIHlvdSdsbCBuZXZlciBnZXQgYW5vdGhlciBjaHVuay5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHRocm93IG5ldyBFcnJvcignX3RyYW5zZm9ybSgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgdHMgPSB0aGlzLl90cmFuc2Zvcm1TdGF0ZTtcbiAgdHMud3JpdGVjYiA9IGNiO1xuICB0cy53cml0ZWNodW5rID0gY2h1bms7XG4gIHRzLndyaXRlZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgaWYgKCF0cy50cmFuc2Zvcm1pbmcpIHtcbiAgICB2YXIgcnMgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICAgIGlmICh0cy5uZWVkVHJhbnNmb3JtIHx8IHJzLm5lZWRSZWFkYWJsZSB8fCBycy5sZW5ndGggPCBycy5oaWdoV2F0ZXJNYXJrKSB0aGlzLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59O1xuXG4vLyBEb2Vzbid0IG1hdHRlciB3aGF0IHRoZSBhcmdzIGFyZSBoZXJlLlxuLy8gX3RyYW5zZm9ybSBkb2VzIGFsbCB0aGUgd29yay5cbi8vIFRoYXQgd2UgZ290IGhlcmUgbWVhbnMgdGhhdCB0aGUgcmVhZGFibGUgc2lkZSB3YW50cyBtb3JlIGRhdGEuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG5cbiAgaWYgKHRzLndyaXRlY2h1bmsgIT09IG51bGwgJiYgdHMud3JpdGVjYiAmJiAhdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdHMudHJhbnNmb3JtaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl90cmFuc2Zvcm0odHMud3JpdGVjaHVuaywgdHMud3JpdGVlbmNvZGluZywgdHMuYWZ0ZXJUcmFuc2Zvcm0pO1xuICB9IGVsc2Uge1xuICAgIC8vIG1hcmsgdGhhdCB3ZSBuZWVkIGEgdHJhbnNmb3JtLCBzbyB0aGF0IGFueSBkYXRhIHRoYXQgY29tZXMgaW5cbiAgICAvLyB3aWxsIGdldCBwcm9jZXNzZWQsIG5vdyB0aGF0IHdlJ3ZlIGFza2VkIGZvciBpdC5cbiAgICB0cy5uZWVkVHJhbnNmb3JtID0gdHJ1ZTtcbiAgfVxufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIER1cGxleC5wcm90b3R5cGUuX2Rlc3Ryb3kuY2FsbCh0aGlzLCBlcnIsIGZ1bmN0aW9uIChlcnIyKSB7XG4gICAgY2IoZXJyMik7XG4gICAgX3RoaXMyLmVtaXQoJ2Nsb3NlJyk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZG9uZShzdHJlYW0sIGVyLCBkYXRhKSB7XG4gIGlmIChlcikgcmV0dXJuIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcblxuICBpZiAoZGF0YSAhPSBudWxsKSAvLyBzaW5nbGUgZXF1YWxzIGNoZWNrIGZvciBib3RoIGBudWxsYCBhbmQgYHVuZGVmaW5lZGBcbiAgICBzdHJlYW0ucHVzaChkYXRhKTtcblxuICAvLyBpZiB0aGVyZSdzIG5vdGhpbmcgaW4gdGhlIHdyaXRlIGJ1ZmZlciwgdGhlbiB0aGF0IG1lYW5zXG4gIC8vIHRoYXQgbm90aGluZyBtb3JlIHdpbGwgZXZlciBiZSBwcm92aWRlZFxuICBpZiAoc3RyZWFtLl93cml0YWJsZVN0YXRlLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKCdDYWxsaW5nIHRyYW5zZm9ybSBkb25lIHdoZW4gd3MubGVuZ3RoICE9IDAnKTtcblxuICBpZiAoc3RyZWFtLl90cmFuc2Zvcm1TdGF0ZS50cmFuc2Zvcm1pbmcpIHRocm93IG5ldyBFcnJvcignQ2FsbGluZyB0cmFuc2Zvcm0gZG9uZSB3aGVuIHN0aWxsIHRyYW5zZm9ybWluZycpO1xuXG4gIHJldHVybiBzdHJlYW0ucHVzaChudWxsKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gQSBiaXQgc2ltcGxlciB0aGFuIHJlYWRhYmxlIHN0cmVhbXMuXG4vLyBJbXBsZW1lbnQgYW4gYXN5bmMgLl93cml0ZShjaHVuaywgZW5jb2RpbmcsIGNiKSwgYW5kIGl0J2xsIGhhbmRsZSBhbGxcbi8vIHRoZSBkcmFpbiBldmVudCBlbWlzc2lvbiBhbmQgYnVmZmVyaW5nLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBwbmEgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbm1vZHVsZS5leHBvcnRzID0gV3JpdGFibGU7XG5cbi8qIDxyZXBsYWNlbWVudD4gKi9cbmZ1bmN0aW9uIFdyaXRlUmVxKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdGhpcy5jaHVuayA9IGNodW5rO1xuICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHRoaXMuY2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5uZXh0ID0gbnVsbDtcbn1cblxuLy8gSXQgc2VlbXMgYSBsaW5rZWQgbGlzdCBidXQgaXQgaXMgbm90XG4vLyB0aGVyZSB3aWxsIGJlIG9ubHkgMiBvZiB0aGVzZSBmb3IgZWFjaCBzdHJlYW1cbmZ1bmN0aW9uIENvcmtlZFJlcXVlc3Qoc3RhdGUpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLm5leHQgPSBudWxsO1xuICB0aGlzLmVudHJ5ID0gbnVsbDtcbiAgdGhpcy5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgb25Db3JrZWRGaW5pc2goX3RoaXMsIHN0YXRlKTtcbiAgfTtcbn1cbi8qIDwvcmVwbGFjZW1lbnQ+ICovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYXN5bmNXcml0ZSA9ICFwcm9jZXNzLmJyb3dzZXIgJiYgWyd2MC4xMCcsICd2MC45LiddLmluZGV4T2YocHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDAsIDUpKSA+IC0xID8gc2V0SW1tZWRpYXRlIDogcG5hLm5leHRUaWNrO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRHVwbGV4O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbldyaXRhYmxlLldyaXRhYmxlU3RhdGUgPSBXcml0YWJsZVN0YXRlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaW50ZXJuYWxVdGlsID0ge1xuICBkZXByZWNhdGU6IHJlcXVpcmUoJ3V0aWwtZGVwcmVjYXRlJylcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBTdHJlYW0gPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvc3RyZWFtJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIE91clVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheSB8fCBmdW5jdGlvbiAoKSB7fTtcbmZ1bmN0aW9uIF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspIHtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGNodW5rKTtcbn1cbmZ1bmN0aW9uIF9pc1VpbnQ4QXJyYXkob2JqKSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIob2JqKSB8fCBvYmogaW5zdGFuY2VvZiBPdXJVaW50OEFycmF5O1xufVxuXG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIGRlc3Ryb3lJbXBsID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3knKTtcblxudXRpbC5pbmhlcml0cyhXcml0YWJsZSwgU3RyZWFtKTtcblxuZnVuY3Rpb24gbm9wKCkge31cblxuZnVuY3Rpb24gV3JpdGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0pIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBEdXBsZXggc3RyZWFtcyBhcmUgYm90aCByZWFkYWJsZSBhbmQgd3JpdGFibGUsIGJ1dCBzaGFyZVxuICAvLyB0aGUgc2FtZSBvcHRpb25zIG9iamVjdC5cbiAgLy8gSG93ZXZlciwgc29tZSBjYXNlcyByZXF1aXJlIHNldHRpbmcgb3B0aW9ucyB0byBkaWZmZXJlbnRcbiAgLy8gdmFsdWVzIGZvciB0aGUgcmVhZGFibGUgYW5kIHRoZSB3cml0YWJsZSBzaWRlcyBvZiB0aGUgZHVwbGV4IHN0cmVhbS5cbiAgLy8gVGhlc2Ugb3B0aW9ucyBjYW4gYmUgcHJvdmlkZWQgc2VwYXJhdGVseSBhcyByZWFkYWJsZVhYWCBhbmQgd3JpdGFibGVYWFguXG4gIHZhciBpc0R1cGxleCA9IHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleDtcblxuICAvLyBvYmplY3Qgc3RyZWFtIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciBvciBub3QgdGhpcyBzdHJlYW1cbiAgLy8gY29udGFpbnMgYnVmZmVycyBvciBvYmplY3RzLlxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcblxuICBpZiAoaXNEdXBsZXgpIHRoaXMub2JqZWN0TW9kZSA9IHRoaXMub2JqZWN0TW9kZSB8fCAhIW9wdGlvbnMud3JpdGFibGVPYmplY3RNb2RlO1xuXG4gIC8vIHRoZSBwb2ludCBhdCB3aGljaCB3cml0ZSgpIHN0YXJ0cyByZXR1cm5pbmcgZmFsc2VcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyB0aGF0IHdlIGFsd2F5cyByZXR1cm4gZmFsc2UgaWZcbiAgLy8gdGhlIGVudGlyZSBidWZmZXIgaXMgbm90IGZsdXNoZWQgaW1tZWRpYXRlbHkgb24gd3JpdGUoKVxuICB2YXIgaHdtID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICB2YXIgd3JpdGFibGVId20gPSBvcHRpb25zLndyaXRhYmxlSGlnaFdhdGVyTWFyaztcbiAgdmFyIGRlZmF1bHRId20gPSB0aGlzLm9iamVjdE1vZGUgPyAxNiA6IDE2ICogMTAyNDtcblxuICBpZiAoaHdtIHx8IGh3bSA9PT0gMCkgdGhpcy5oaWdoV2F0ZXJNYXJrID0gaHdtO2Vsc2UgaWYgKGlzRHVwbGV4ICYmICh3cml0YWJsZUh3bSB8fCB3cml0YWJsZUh3bSA9PT0gMCkpIHRoaXMuaGlnaFdhdGVyTWFyayA9IHdyaXRhYmxlSHdtO2Vsc2UgdGhpcy5oaWdoV2F0ZXJNYXJrID0gZGVmYXVsdEh3bTtcblxuICAvLyBjYXN0IHRvIGludHMuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IE1hdGguZmxvb3IodGhpcy5oaWdoV2F0ZXJNYXJrKTtcblxuICAvLyBpZiBfZmluYWwgaGFzIGJlZW4gY2FsbGVkXG4gIHRoaXMuZmluYWxDYWxsZWQgPSBmYWxzZTtcblxuICAvLyBkcmFpbiBldmVudCBmbGFnLlxuICB0aGlzLm5lZWREcmFpbiA9IGZhbHNlO1xuICAvLyBhdCB0aGUgc3RhcnQgb2YgY2FsbGluZyBlbmQoKVxuICB0aGlzLmVuZGluZyA9IGZhbHNlO1xuICAvLyB3aGVuIGVuZCgpIGhhcyBiZWVuIGNhbGxlZCwgYW5kIHJldHVybmVkXG4gIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgLy8gd2hlbiAnZmluaXNoJyBpcyBlbWl0dGVkXG4gIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcblxuICAvLyBoYXMgaXQgYmVlbiBkZXN0cm95ZWRcbiAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAvLyBzaG91bGQgd2UgZGVjb2RlIHN0cmluZ3MgaW50byBidWZmZXJzIGJlZm9yZSBwYXNzaW5nIHRvIF93cml0ZT9cbiAgLy8gdGhpcyBpcyBoZXJlIHNvIHRoYXQgc29tZSBub2RlLWNvcmUgc3RyZWFtcyBjYW4gb3B0aW1pemUgc3RyaW5nXG4gIC8vIGhhbmRsaW5nIGF0IGEgbG93ZXIgbGV2ZWwuXG4gIHZhciBub0RlY29kZSA9IG9wdGlvbnMuZGVjb2RlU3RyaW5ncyA9PT0gZmFsc2U7XG4gIHRoaXMuZGVjb2RlU3RyaW5ncyA9ICFub0RlY29kZTtcblxuICAvLyBDcnlwdG8gaXMga2luZCBvZiBvbGQgYW5kIGNydXN0eS4gIEhpc3RvcmljYWxseSwgaXRzIGRlZmF1bHQgc3RyaW5nXG4gIC8vIGVuY29kaW5nIGlzICdiaW5hcnknIHNvIHdlIGhhdmUgdG8gbWFrZSB0aGlzIGNvbmZpZ3VyYWJsZS5cbiAgLy8gRXZlcnl0aGluZyBlbHNlIGluIHRoZSB1bml2ZXJzZSB1c2VzICd1dGY4JywgdGhvdWdoLlxuICB0aGlzLmRlZmF1bHRFbmNvZGluZyA9IG9wdGlvbnMuZGVmYXVsdEVuY29kaW5nIHx8ICd1dGY4JztcblxuICAvLyBub3QgYW4gYWN0dWFsIGJ1ZmZlciB3ZSBrZWVwIHRyYWNrIG9mLCBidXQgYSBtZWFzdXJlbWVudFxuICAvLyBvZiBob3cgbXVjaCB3ZSdyZSB3YWl0aW5nIHRvIGdldCBwdXNoZWQgdG8gc29tZSB1bmRlcmx5aW5nXG4gIC8vIHNvY2tldCBvciBmaWxlLlxuICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgLy8gYSBmbGFnIHRvIHNlZSB3aGVuIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYSB3cml0ZS5cbiAgdGhpcy53cml0aW5nID0gZmFsc2U7XG5cbiAgLy8gd2hlbiB0cnVlIGFsbCB3cml0ZXMgd2lsbCBiZSBidWZmZXJlZCB1bnRpbCAudW5jb3JrKCkgY2FsbFxuICB0aGlzLmNvcmtlZCA9IDA7XG5cbiAgLy8gYSBmbGFnIHRvIGJlIGFibGUgdG8gdGVsbCBpZiB0aGUgb253cml0ZSBjYiBpcyBjYWxsZWQgaW1tZWRpYXRlbHksXG4gIC8vIG9yIG9uIGEgbGF0ZXIgdGljay4gIFdlIHNldCB0aGlzIHRvIHRydWUgYXQgZmlyc3QsIGJlY2F1c2UgYW55XG4gIC8vIGFjdGlvbnMgdGhhdCBzaG91bGRuJ3QgaGFwcGVuIHVudGlsIFwibGF0ZXJcIiBzaG91bGQgZ2VuZXJhbGx5IGFsc29cbiAgLy8gbm90IGhhcHBlbiBiZWZvcmUgdGhlIGZpcnN0IHdyaXRlIGNhbGwuXG4gIHRoaXMuc3luYyA9IHRydWU7XG5cbiAgLy8gYSBmbGFnIHRvIGtub3cgaWYgd2UncmUgcHJvY2Vzc2luZyBwcmV2aW91c2x5IGJ1ZmZlcmVkIGl0ZW1zLCB3aGljaFxuICAvLyBtYXkgY2FsbCB0aGUgX3dyaXRlKCkgY2FsbGJhY2sgaW4gdGhlIHNhbWUgdGljaywgc28gdGhhdCB3ZSBkb24ndFxuICAvLyBlbmQgdXAgaW4gYW4gb3ZlcmxhcHBlZCBvbndyaXRlIHNpdHVhdGlvbi5cbiAgdGhpcy5idWZmZXJQcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgLy8gdGhlIGNhbGxiYWNrIHRoYXQncyBwYXNzZWQgdG8gX3dyaXRlKGNodW5rLGNiKVxuICB0aGlzLm9ud3JpdGUgPSBmdW5jdGlvbiAoZXIpIHtcbiAgICBvbndyaXRlKHN0cmVhbSwgZXIpO1xuICB9O1xuXG4gIC8vIHRoZSBjYWxsYmFjayB0aGF0IHRoZSB1c2VyIHN1cHBsaWVzIHRvIHdyaXRlKGNodW5rLGVuY29kaW5nLGNiKVxuICB0aGlzLndyaXRlY2IgPSBudWxsO1xuXG4gIC8vIHRoZSBhbW91bnQgdGhhdCBpcyBiZWluZyB3cml0dGVuIHdoZW4gX3dyaXRlIGlzIGNhbGxlZC5cbiAgdGhpcy53cml0ZWxlbiA9IDA7XG5cbiAgdGhpcy5idWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB0aGlzLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuXG4gIC8vIG51bWJlciBvZiBwZW5kaW5nIHVzZXItc3VwcGxpZWQgd3JpdGUgY2FsbGJhY2tzXG4gIC8vIHRoaXMgbXVzdCBiZSAwIGJlZm9yZSAnZmluaXNoJyBjYW4gYmUgZW1pdHRlZFxuICB0aGlzLnBlbmRpbmdjYiA9IDA7XG5cbiAgLy8gZW1pdCBwcmVmaW5pc2ggaWYgdGhlIG9ubHkgdGhpbmcgd2UncmUgd2FpdGluZyBmb3IgaXMgX3dyaXRlIGNic1xuICAvLyBUaGlzIGlzIHJlbGV2YW50IGZvciBzeW5jaHJvbm91cyBUcmFuc2Zvcm0gc3RyZWFtc1xuICB0aGlzLnByZWZpbmlzaGVkID0gZmFsc2U7XG5cbiAgLy8gVHJ1ZSBpZiB0aGUgZXJyb3Igd2FzIGFscmVhZHkgZW1pdHRlZCBhbmQgc2hvdWxkIG5vdCBiZSB0aHJvd24gYWdhaW5cbiAgdGhpcy5lcnJvckVtaXR0ZWQgPSBmYWxzZTtcblxuICAvLyBjb3VudCBidWZmZXJlZCByZXF1ZXN0c1xuICB0aGlzLmJ1ZmZlcmVkUmVxdWVzdENvdW50ID0gMDtcblxuICAvLyBhbGxvY2F0ZSB0aGUgZmlyc3QgQ29ya2VkUmVxdWVzdCwgdGhlcmUgaXMgYWx3YXlzXG4gIC8vIG9uZSBhbGxvY2F0ZWQgYW5kIGZyZWUgdG8gdXNlLCBhbmQgd2UgbWFpbnRhaW4gYXQgbW9zdCB0d29cbiAgdGhpcy5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBuZXcgQ29ya2VkUmVxdWVzdCh0aGlzKTtcbn1cblxuV3JpdGFibGVTdGF0ZS5wcm90b3R5cGUuZ2V0QnVmZmVyID0gZnVuY3Rpb24gZ2V0QnVmZmVyKCkge1xuICB2YXIgY3VycmVudCA9IHRoaXMuYnVmZmVyZWRSZXF1ZXN0O1xuICB2YXIgb3V0ID0gW107XG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgb3V0LnB1c2goY3VycmVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgfVxuICByZXR1cm4gb3V0O1xufTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGVTdGF0ZS5wcm90b3R5cGUsICdidWZmZXInLCB7XG4gICAgICBnZXQ6IGludGVybmFsVXRpbC5kZXByZWNhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIoKTtcbiAgICAgIH0sICdfd3JpdGFibGVTdGF0ZS5idWZmZXIgaXMgZGVwcmVjYXRlZC4gVXNlIF93cml0YWJsZVN0YXRlLmdldEJ1ZmZlciAnICsgJ2luc3RlYWQuJywgJ0RFUDAwMDMnKVxuICAgIH0pO1xuICB9IGNhdGNoIChfKSB7fVxufSkoKTtcblxuLy8gVGVzdCBfd3JpdGFibGVTdGF0ZSBmb3IgaW5oZXJpdGFuY2UgdG8gYWNjb3VudCBmb3IgRHVwbGV4IHN0cmVhbXMsXG4vLyB3aG9zZSBwcm90b3R5cGUgY2hhaW4gb25seSBwb2ludHMgdG8gUmVhZGFibGUuXG52YXIgcmVhbEhhc0luc3RhbmNlO1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmhhc0luc3RhbmNlICYmIHR5cGVvZiBGdW5jdGlvbi5wcm90b3R5cGVbU3ltYm9sLmhhc0luc3RhbmNlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICByZWFsSGFzSW5zdGFuY2UgPSBGdW5jdGlvbi5wcm90b3R5cGVbU3ltYm9sLmhhc0luc3RhbmNlXTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLCBTeW1ib2wuaGFzSW5zdGFuY2UsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKHJlYWxIYXNJbnN0YW5jZS5jYWxsKHRoaXMsIG9iamVjdCkpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHRoaXMgIT09IFdyaXRhYmxlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiBvYmplY3QgJiYgb2JqZWN0Ll93cml0YWJsZVN0YXRlIGluc3RhbmNlb2YgV3JpdGFibGVTdGF0ZTtcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgcmVhbEhhc0luc3RhbmNlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB0aGlzO1xuICB9O1xufVxuXG5mdW5jdGlvbiBXcml0YWJsZShvcHRpb25zKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgLy8gV3JpdGFibGUgY3RvciBpcyBhcHBsaWVkIHRvIER1cGxleGVzLCB0b28uXG4gIC8vIGByZWFsSGFzSW5zdGFuY2VgIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHVzaW5nIHBsYWluIGBpbnN0YW5jZW9mYFxuICAvLyB3b3VsZCByZXR1cm4gZmFsc2UsIGFzIG5vIGBfd3JpdGFibGVTdGF0ZWAgcHJvcGVydHkgaXMgYXR0YWNoZWQuXG5cbiAgLy8gVHJ5aW5nIHRvIHVzZSB0aGUgY3VzdG9tIGBpbnN0YW5jZW9mYCBmb3IgV3JpdGFibGUgaGVyZSB3aWxsIGFsc28gYnJlYWsgdGhlXG4gIC8vIE5vZGUuanMgTGF6eVRyYW5zZm9ybSBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaGFzIGEgbm9uLXRyaXZpYWwgZ2V0dGVyIGZvclxuICAvLyBgX3dyaXRhYmxlU3RhdGVgIHRoYXQgd291bGQgbGVhZCB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gIGlmICghcmVhbEhhc0luc3RhbmNlLmNhbGwoV3JpdGFibGUsIHRoaXMpICYmICEodGhpcyBpbnN0YW5jZW9mIER1cGxleCkpIHtcbiAgICByZXR1cm4gbmV3IFdyaXRhYmxlKG9wdGlvbnMpO1xuICB9XG5cbiAgdGhpcy5fd3JpdGFibGVTdGF0ZSA9IG5ldyBXcml0YWJsZVN0YXRlKG9wdGlvbnMsIHRoaXMpO1xuXG4gIC8vIGxlZ2FjeS5cbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JpdGUgPT09ICdmdW5jdGlvbicpIHRoaXMuX3dyaXRlID0gb3B0aW9ucy53cml0ZTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53cml0ZXYgPT09ICdmdW5jdGlvbicpIHRoaXMuX3dyaXRldiA9IG9wdGlvbnMud3JpdGV2O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHRoaXMuX2Rlc3Ryb3kgPSBvcHRpb25zLmRlc3Ryb3k7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmluYWwgPT09ICdmdW5jdGlvbicpIHRoaXMuX2ZpbmFsID0gb3B0aW9ucy5maW5hbDtcbiAgfVxuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG4vLyBPdGhlcndpc2UgcGVvcGxlIGNhbiBwaXBlIFdyaXRhYmxlIHN0cmVhbXMsIHdoaWNoIGlzIGp1c3Qgd3JvbmcuXG5Xcml0YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignQ2Fubm90IHBpcGUsIG5vdCByZWFkYWJsZScpKTtcbn07XG5cbmZ1bmN0aW9uIHdyaXRlQWZ0ZXJFbmQoc3RyZWFtLCBjYikge1xuICB2YXIgZXIgPSBuZXcgRXJyb3IoJ3dyaXRlIGFmdGVyIGVuZCcpO1xuICAvLyBUT0RPOiBkZWZlciBlcnJvciBldmVudHMgY29uc2lzdGVudGx5IGV2ZXJ5d2hlcmUsIG5vdCBqdXN0IHRoZSBjYlxuICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gIHBuYS5uZXh0VGljayhjYiwgZXIpO1xufVxuXG4vLyBDaGVja3MgdGhhdCBhIHVzZXItc3VwcGxpZWQgY2h1bmsgaXMgdmFsaWQsIGVzcGVjaWFsbHkgZm9yIHRoZSBwYXJ0aWN1bGFyXG4vLyBtb2RlIHRoZSBzdHJlYW0gaXMgaW4uIEN1cnJlbnRseSB0aGlzIG1lYW5zIHRoYXQgYG51bGxgIGlzIG5ldmVyIGFjY2VwdGVkXG4vLyBhbmQgdW5kZWZpbmVkL25vbi1zdHJpbmcgdmFsdWVzIGFyZSBvbmx5IGFsbG93ZWQgaW4gb2JqZWN0IG1vZGUuXG5mdW5jdGlvbiB2YWxpZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBjYikge1xuICB2YXIgdmFsaWQgPSB0cnVlO1xuICB2YXIgZXIgPSBmYWxzZTtcblxuICBpZiAoY2h1bmsgPT09IG51bGwpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ01heSBub3Qgd3JpdGUgbnVsbCB2YWx1ZXMgdG8gc3RyZWFtJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiBjaHVuayAhPT0gdW5kZWZpbmVkICYmICFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG5vbi1zdHJpbmcvYnVmZmVyIGNodW5rJyk7XG4gIH1cbiAgaWYgKGVyKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICAgIHBuYS5uZXh0VGljayhjYiwgZXIpO1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5Xcml0YWJsZS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuICB2YXIgcmV0ID0gZmFsc2U7XG4gIHZhciBpc0J1ZiA9ICFzdGF0ZS5vYmplY3RNb2RlICYmIF9pc1VpbnQ4QXJyYXkoY2h1bmspO1xuXG4gIGlmIChpc0J1ZiAmJiAhQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkge1xuICAgIGNodW5rID0gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuayk7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICBpZiAoaXNCdWYpIGVuY29kaW5nID0gJ2J1ZmZlcic7ZWxzZSBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9IHN0YXRlLmRlZmF1bHRFbmNvZGluZztcblxuICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSBjYiA9IG5vcDtcblxuICBpZiAoc3RhdGUuZW5kZWQpIHdyaXRlQWZ0ZXJFbmQodGhpcywgY2IpO2Vsc2UgaWYgKGlzQnVmIHx8IHZhbGlkQ2h1bmsodGhpcywgc3RhdGUsIGNodW5rLCBjYikpIHtcbiAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICByZXQgPSB3cml0ZU9yQnVmZmVyKHRoaXMsIHN0YXRlLCBpc0J1ZiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLmNvcmsgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG5cbiAgc3RhdGUuY29ya2VkKys7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUudW5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIGlmIChzdGF0ZS5jb3JrZWQpIHtcbiAgICBzdGF0ZS5jb3JrZWQtLTtcblxuICAgIGlmICghc3RhdGUud3JpdGluZyAmJiAhc3RhdGUuY29ya2VkICYmICFzdGF0ZS5maW5pc2hlZCAmJiAhc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QpIGNsZWFyQnVmZmVyKHRoaXMsIHN0YXRlKTtcbiAgfVxufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnNldERlZmF1bHRFbmNvZGluZyA9IGZ1bmN0aW9uIHNldERlZmF1bHRFbmNvZGluZyhlbmNvZGluZykge1xuICAvLyBub2RlOjpQYXJzZUVuY29kaW5nKCkgcmVxdWlyZXMgbG93ZXIgY2FzZS5cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycpIGVuY29kaW5nID0gZW5jb2RpbmcudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCEoWydoZXgnLCAndXRmOCcsICd1dGYtOCcsICdhc2NpaScsICdiaW5hcnknLCAnYmFzZTY0JywgJ3VjczInLCAndWNzLTInLCAndXRmMTZsZScsICd1dGYtMTZsZScsICdyYXcnXS5pbmRleE9mKChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKTtcbiAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZWZhdWx0RW5jb2RpbmcgPSBlbmNvZGluZztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBkZWNvZGVDaHVuayhzdGF0ZSwgY2h1bmssIGVuY29kaW5nKSB7XG4gIGlmICghc3RhdGUub2JqZWN0TW9kZSAmJiBzdGF0ZS5kZWNvZGVTdHJpbmdzICE9PSBmYWxzZSAmJiB0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgY2h1bmsgPSBCdWZmZXIuZnJvbShjaHVuaywgZW5jb2RpbmcpO1xuICB9XG4gIHJldHVybiBjaHVuaztcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLnByb3RvdHlwZSwgJ3dyaXRhYmxlSGlnaFdhdGVyTWFyaycsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUuaGlnaFdhdGVyTWFyaztcbiAgfVxufSk7XG5cbi8vIGlmIHdlJ3JlIGFscmVhZHkgd3JpdGluZyBzb21ldGhpbmcsIHRoZW4ganVzdCBwdXQgdGhpc1xuLy8gaW4gdGhlIHF1ZXVlLCBhbmQgd2FpdCBvdXIgdHVybi4gIE90aGVyd2lzZSwgY2FsbCBfd3JpdGVcbi8vIElmIHdlIHJldHVybiBmYWxzZSwgdGhlbiB3ZSBuZWVkIGEgZHJhaW4gZXZlbnQsIHNvIHNldCB0aGF0IGZsYWcuXG5mdW5jdGlvbiB3cml0ZU9yQnVmZmVyKHN0cmVhbSwgc3RhdGUsIGlzQnVmLCBjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGlmICghaXNCdWYpIHtcbiAgICB2YXIgbmV3Q2h1bmsgPSBkZWNvZGVDaHVuayhzdGF0ZSwgY2h1bmssIGVuY29kaW5nKTtcbiAgICBpZiAoY2h1bmsgIT09IG5ld0NodW5rKSB7XG4gICAgICBpc0J1ZiA9IHRydWU7XG4gICAgICBlbmNvZGluZyA9ICdidWZmZXInO1xuICAgICAgY2h1bmsgPSBuZXdDaHVuaztcbiAgICB9XG4gIH1cbiAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXG4gIHN0YXRlLmxlbmd0aCArPSBsZW47XG5cbiAgdmFyIHJldCA9IHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIC8vIHdlIG11c3QgZW5zdXJlIHRoYXQgcHJldmlvdXMgbmVlZERyYWluIHdpbGwgbm90IGJlIHJlc2V0IHRvIGZhbHNlLlxuICBpZiAoIXJldCkgc3RhdGUubmVlZERyYWluID0gdHJ1ZTtcblxuICBpZiAoc3RhdGUud3JpdGluZyB8fCBzdGF0ZS5jb3JrZWQpIHtcbiAgICB2YXIgbGFzdCA9IHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3Q7XG4gICAgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IHtcbiAgICAgIGNodW5rOiBjaHVuayxcbiAgICAgIGVuY29kaW5nOiBlbmNvZGluZyxcbiAgICAgIGlzQnVmOiBpc0J1ZixcbiAgICAgIGNhbGxiYWNrOiBjYixcbiAgICAgIG5leHQ6IG51bGxcbiAgICB9O1xuICAgIGlmIChsYXN0KSB7XG4gICAgICBsYXN0Lm5leHQgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIH1cbiAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudCArPSAxO1xuICB9IGVsc2Uge1xuICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmFsc2UsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIHdyaXRldiwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHN0YXRlLndyaXRlbGVuID0gbGVuO1xuICBzdGF0ZS53cml0ZWNiID0gY2I7XG4gIHN0YXRlLndyaXRpbmcgPSB0cnVlO1xuICBzdGF0ZS5zeW5jID0gdHJ1ZTtcbiAgaWYgKHdyaXRldikgc3RyZWFtLl93cml0ZXYoY2h1bmssIHN0YXRlLm9ud3JpdGUpO2Vsc2Ugc3RyZWFtLl93cml0ZShjaHVuaywgZW5jb2RpbmcsIHN0YXRlLm9ud3JpdGUpO1xuICBzdGF0ZS5zeW5jID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGVFcnJvcihzdHJlYW0sIHN0YXRlLCBzeW5jLCBlciwgY2IpIHtcbiAgLS1zdGF0ZS5wZW5kaW5nY2I7XG5cbiAgaWYgKHN5bmMpIHtcbiAgICAvLyBkZWZlciB0aGUgY2FsbGJhY2sgaWYgd2UgYXJlIGJlaW5nIGNhbGxlZCBzeW5jaHJvbm91c2x5XG4gICAgLy8gdG8gYXZvaWQgcGlsaW5nIHVwIHRoaW5ncyBvbiB0aGUgc3RhY2tcbiAgICBwbmEubmV4dFRpY2soY2IsIGVyKTtcbiAgICAvLyB0aGlzIGNhbiBlbWl0IGZpbmlzaCwgYW5kIGl0IHdpbGwgYWx3YXlzIGhhcHBlblxuICAgIC8vIGFmdGVyIGVycm9yXG4gICAgcG5hLm5leHRUaWNrKGZpbmlzaE1heWJlLCBzdHJlYW0sIHN0YXRlKTtcbiAgICBzdHJlYW0uX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNhbGxlciBleHBlY3QgdGhpcyB0byBoYXBwZW4gYmVmb3JlIGlmXG4gICAgLy8gaXQgaXMgYXN5bmNcbiAgICBjYihlcik7XG4gICAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICAgIC8vIHRoaXMgY2FuIGVtaXQgZmluaXNoLCBidXQgZmluaXNoIG11c3RcbiAgICAvLyBhbHdheXMgZm9sbG93IGVycm9yXG4gICAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb253cml0ZVN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gIHN0YXRlLndyaXRpbmcgPSBmYWxzZTtcbiAgc3RhdGUud3JpdGVjYiA9IG51bGw7XG4gIHN0YXRlLmxlbmd0aCAtPSBzdGF0ZS53cml0ZWxlbjtcbiAgc3RhdGUud3JpdGVsZW4gPSAwO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlKHN0cmVhbSwgZXIpIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuICB2YXIgc3luYyA9IHN0YXRlLnN5bmM7XG4gIHZhciBjYiA9IHN0YXRlLndyaXRlY2I7XG5cbiAgb253cml0ZVN0YXRlVXBkYXRlKHN0YXRlKTtcblxuICBpZiAoZXIpIG9ud3JpdGVFcnJvcihzdHJlYW0sIHN0YXRlLCBzeW5jLCBlciwgY2IpO2Vsc2Uge1xuICAgIC8vIENoZWNrIGlmIHdlJ3JlIGFjdHVhbGx5IHJlYWR5IHRvIGZpbmlzaCwgYnV0IGRvbid0IGVtaXQgeWV0XG4gICAgdmFyIGZpbmlzaGVkID0gbmVlZEZpbmlzaChzdGF0ZSk7XG5cbiAgICBpZiAoIWZpbmlzaGVkICYmICFzdGF0ZS5jb3JrZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSB7XG4gICAgICBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoc3luYykge1xuICAgICAgLyo8cmVwbGFjZW1lbnQ+Ki9cbiAgICAgIGFzeW5jV3JpdGUoYWZ0ZXJXcml0ZSwgc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKTtcbiAgICAgIC8qPC9yZXBsYWNlbWVudD4qL1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlcldyaXRlKHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFmdGVyV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKSB7XG4gIGlmICghZmluaXNoZWQpIG9ud3JpdGVEcmFpbihzdHJlYW0sIHN0YXRlKTtcbiAgc3RhdGUucGVuZGluZ2NiLS07XG4gIGNiKCk7XG4gIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xufVxuXG4vLyBNdXN0IGZvcmNlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBvbiBuZXh0VGljaywgc28gdGhhdCB3ZSBkb24ndFxuLy8gZW1pdCAnZHJhaW4nIGJlZm9yZSB0aGUgd3JpdGUoKSBjb25zdW1lciBnZXRzIHRoZSAnZmFsc2UnIHJldHVyblxuLy8gdmFsdWUsIGFuZCBoYXMgYSBjaGFuY2UgdG8gYXR0YWNoIGEgJ2RyYWluJyBsaXN0ZW5lci5cbmZ1bmN0aW9uIG9ud3JpdGVEcmFpbihzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUubmVlZERyYWluKSB7XG4gICAgc3RhdGUubmVlZERyYWluID0gZmFsc2U7XG4gICAgc3RyZWFtLmVtaXQoJ2RyYWluJyk7XG4gIH1cbn1cblxuLy8gaWYgdGhlcmUncyBzb21ldGhpbmcgaW4gdGhlIGJ1ZmZlciB3YWl0aW5nLCB0aGVuIHByb2Nlc3MgaXRcbmZ1bmN0aW9uIGNsZWFyQnVmZmVyKHN0cmVhbSwgc3RhdGUpIHtcbiAgc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyA9IHRydWU7XG4gIHZhciBlbnRyeSA9IHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdDtcblxuICBpZiAoc3RyZWFtLl93cml0ZXYgJiYgZW50cnkgJiYgZW50cnkubmV4dCkge1xuICAgIC8vIEZhc3QgY2FzZSwgd3JpdGUgZXZlcnl0aGluZyB1c2luZyBfd3JpdGV2KClcbiAgICB2YXIgbCA9IHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50O1xuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXkobCk7XG4gICAgdmFyIGhvbGRlciA9IHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZTtcbiAgICBob2xkZXIuZW50cnkgPSBlbnRyeTtcblxuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGFsbEJ1ZmZlcnMgPSB0cnVlO1xuICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgYnVmZmVyW2NvdW50XSA9IGVudHJ5O1xuICAgICAgaWYgKCFlbnRyeS5pc0J1ZikgYWxsQnVmZmVycyA9IGZhbHNlO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG4gICAgYnVmZmVyLmFsbEJ1ZmZlcnMgPSBhbGxCdWZmZXJzO1xuXG4gICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB0cnVlLCBzdGF0ZS5sZW5ndGgsIGJ1ZmZlciwgJycsIGhvbGRlci5maW5pc2gpO1xuXG4gICAgLy8gZG9Xcml0ZSBpcyBhbG1vc3QgYWx3YXlzIGFzeW5jLCBkZWZlciB0aGVzZSB0byBzYXZlIGEgYml0IG9mIHRpbWVcbiAgICAvLyBhcyB0aGUgaG90IHBhdGggZW5kcyB3aXRoIGRvV3JpdGVcbiAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgICBpZiAoaG9sZGVyLm5leHQpIHtcbiAgICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IGhvbGRlci5uZXh0O1xuICAgICAgaG9sZGVyLm5leHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBuZXcgQ29ya2VkUmVxdWVzdChzdGF0ZSk7XG4gICAgfVxuICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTbG93IGNhc2UsIHdyaXRlIGNodW5rcyBvbmUtYnktb25lXG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICB2YXIgY2h1bmsgPSBlbnRyeS5jaHVuaztcbiAgICAgIHZhciBlbmNvZGluZyA9IGVudHJ5LmVuY29kaW5nO1xuICAgICAgdmFyIGNiID0gZW50cnkuY2FsbGJhY2s7XG4gICAgICB2YXIgbGVuID0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG5cbiAgICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmFsc2UsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gICAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudC0tO1xuICAgICAgLy8gaWYgd2UgZGlkbid0IGNhbGwgdGhlIG9ud3JpdGUgaW1tZWRpYXRlbHksIHRoZW5cbiAgICAgIC8vIGl0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byB3YWl0IHVudGlsIGl0IGRvZXMuXG4gICAgICAvLyBhbHNvLCB0aGF0IG1lYW5zIHRoYXQgdGhlIGNodW5rIGFuZCBjYiBhcmUgY3VycmVudGx5XG4gICAgICAvLyBiZWluZyBwcm9jZXNzZWQsIHNvIG1vdmUgdGhlIGJ1ZmZlciBjb3VudGVyIHBhc3QgdGhlbS5cbiAgICAgIGlmIChzdGF0ZS53cml0aW5nKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbnRyeSA9PT0gbnVsbCkgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gIH1cblxuICBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPSBlbnRyeTtcbiAgc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyA9IGZhbHNlO1xufVxuXG5Xcml0YWJsZS5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobmV3IEVycm9yKCdfd3JpdGUoKSBpcyBub3QgaW1wbGVtZW50ZWQnKSk7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuX3dyaXRldiA9IG51bGw7XG5cbldyaXRhYmxlLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIGlmICh0eXBlb2YgY2h1bmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGNodW5rO1xuICAgIGNodW5rID0gbnVsbDtcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICBpZiAoY2h1bmsgIT09IG51bGwgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCkgdGhpcy53cml0ZShjaHVuaywgZW5jb2RpbmcpO1xuXG4gIC8vIC5lbmQoKSBmdWxseSB1bmNvcmtzXG4gIGlmIChzdGF0ZS5jb3JrZWQpIHtcbiAgICBzdGF0ZS5jb3JrZWQgPSAxO1xuICAgIHRoaXMudW5jb3JrKCk7XG4gIH1cblxuICAvLyBpZ25vcmUgdW5uZWNlc3NhcnkgZW5kKCkgY2FsbHMuXG4gIGlmICghc3RhdGUuZW5kaW5nICYmICFzdGF0ZS5maW5pc2hlZCkgZW5kV3JpdGFibGUodGhpcywgc3RhdGUsIGNiKTtcbn07XG5cbmZ1bmN0aW9uIG5lZWRGaW5pc2goc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmVuZGluZyAmJiBzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID09PSBudWxsICYmICFzdGF0ZS5maW5pc2hlZCAmJiAhc3RhdGUud3JpdGluZztcbn1cbmZ1bmN0aW9uIGNhbGxGaW5hbChzdHJlYW0sIHN0YXRlKSB7XG4gIHN0cmVhbS5fZmluYWwoZnVuY3Rpb24gKGVycikge1xuICAgIHN0YXRlLnBlbmRpbmdjYi0tO1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgfVxuICAgIHN0YXRlLnByZWZpbmlzaGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0uZW1pdCgncHJlZmluaXNoJyk7XG4gICAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5wcmVmaW5pc2hlZCAmJiAhc3RhdGUuZmluYWxDYWxsZWQpIHtcbiAgICBpZiAodHlwZW9mIHN0cmVhbS5fZmluYWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN0YXRlLnBlbmRpbmdjYisrO1xuICAgICAgc3RhdGUuZmluYWxDYWxsZWQgPSB0cnVlO1xuICAgICAgcG5hLm5leHRUaWNrKGNhbGxGaW5hbCwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnByZWZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5lbWl0KCdwcmVmaW5pc2gnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbmVlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuICBpZiAobmVlZCkge1xuICAgIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKTtcbiAgICBpZiAoc3RhdGUucGVuZGluZ2NiID09PSAwKSB7XG4gICAgICBzdGF0ZS5maW5pc2hlZCA9IHRydWU7XG4gICAgICBzdHJlYW0uZW1pdCgnZmluaXNoJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZWVkO1xufVxuXG5mdW5jdGlvbiBlbmRXcml0YWJsZShzdHJlYW0sIHN0YXRlLCBjYikge1xuICBzdGF0ZS5lbmRpbmcgPSB0cnVlO1xuICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbiAgaWYgKGNiKSB7XG4gICAgaWYgKHN0YXRlLmZpbmlzaGVkKSBwbmEubmV4dFRpY2soY2IpO2Vsc2Ugc3RyZWFtLm9uY2UoJ2ZpbmlzaCcsIGNiKTtcbiAgfVxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG4gIHN0cmVhbS53cml0YWJsZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbkNvcmtlZEZpbmlzaChjb3JrUmVxLCBzdGF0ZSwgZXJyKSB7XG4gIHZhciBlbnRyeSA9IGNvcmtSZXEuZW50cnk7XG4gIGNvcmtSZXEuZW50cnkgPSBudWxsO1xuICB3aGlsZSAoZW50cnkpIHtcbiAgICB2YXIgY2IgPSBlbnRyeS5jYWxsYmFjaztcbiAgICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgICBjYihlcnIpO1xuICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgfVxuICBpZiAoc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlKSB7XG4gICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlLm5leHQgPSBjb3JrUmVxO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IGNvcmtSZXE7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLnByb3RvdHlwZSwgJ2Rlc3Ryb3llZCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3dyaXRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gd2UgaWdub3JlIHRoZSB2YWx1ZSBpZiB0aGUgc3RyZWFtXG4gICAgLy8gaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgIGlmICghdGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRoZSB1c2VyIGlzIGV4cGxpY2l0bHlcbiAgICAvLyBtYW5hZ2luZyBkZXN0cm95ZWRcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHZhbHVlO1xuICB9XG59KTtcblxuV3JpdGFibGUucHJvdG90eXBlLmRlc3Ryb3kgPSBkZXN0cm95SW1wbC5kZXN0cm95O1xuV3JpdGFibGUucHJvdG90eXBlLl91bmRlc3Ryb3kgPSBkZXN0cm95SW1wbC51bmRlc3Ryb3k7XG5Xcml0YWJsZS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB0aGlzLmVuZCgpO1xuICBjYihlcnIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG5mdW5jdGlvbiBjb3B5QnVmZmVyKHNyYywgdGFyZ2V0LCBvZmZzZXQpIHtcbiAgc3JjLmNvcHkodGFyZ2V0LCBvZmZzZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQnVmZmVyTGlzdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnVmZmVyTGlzdCk7XG5cbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2godikge1xuICAgIHZhciBlbnRyeSA9IHsgZGF0YTogdiwgbmV4dDogbnVsbCB9O1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHRoaXMudGFpbC5uZXh0ID0gZW50cnk7ZWxzZSB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgICB0aGlzLnRhaWwgPSBlbnRyeTtcbiAgICArK3RoaXMubGVuZ3RoO1xuICB9O1xuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiB1bnNoaWZ0KHYpIHtcbiAgICB2YXIgZW50cnkgPSB7IGRhdGE6IHYsIG5leHQ6IHRoaXMuaGVhZCB9O1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgdGhpcy50YWlsID0gZW50cnk7XG4gICAgdGhpcy5oZWFkID0gZW50cnk7XG4gICAgKyt0aGlzLmxlbmd0aDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciByZXQgPSB0aGlzLmhlYWQuZGF0YTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7ZWxzZSB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAtLXRoaXMubGVuZ3RoO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24gam9pbihzKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gICAgdmFyIHAgPSB0aGlzLmhlYWQ7XG4gICAgdmFyIHJldCA9ICcnICsgcC5kYXRhO1xuICAgIHdoaWxlIChwID0gcC5uZXh0KSB7XG4gICAgICByZXQgKz0gcyArIHAuZGF0YTtcbiAgICB9cmV0dXJuIHJldDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQobikge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHJldHVybiB0aGlzLmhlYWQuZGF0YTtcbiAgICB2YXIgcmV0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG4gPj4+IDApO1xuICAgIHZhciBwID0gdGhpcy5oZWFkO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAocCkge1xuICAgICAgY29weUJ1ZmZlcihwLmRhdGEsIHJldCwgaSk7XG4gICAgICBpICs9IHAuZGF0YS5sZW5ndGg7XG4gICAgICBwID0gcC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIHJldHVybiBCdWZmZXJMaXN0O1xufSgpO1xuXG5pZiAodXRpbCAmJiB1dGlsLmluc3BlY3QgJiYgdXRpbC5pbnNwZWN0LmN1c3RvbSkge1xuICBtb2R1bGUuZXhwb3J0cy5wcm90b3R5cGVbdXRpbC5pbnNwZWN0LmN1c3RvbV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9iaiA9IHV0aWwuaW5zcGVjdCh7IGxlbmd0aDogdGhpcy5sZW5ndGggfSk7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZSArICcgJyArIG9iajtcbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBwbmEgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8vIHVuZG9jdW1lbnRlZCBjYigpIEFQSSwgbmVlZGVkIGZvciBjb3JlLCBub3QgZm9yIHB1YmxpYyBBUElcbmZ1bmN0aW9uIGRlc3Ryb3koZXJyLCBjYikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciByZWFkYWJsZURlc3Ryb3llZCA9IHRoaXMuX3JlYWRhYmxlU3RhdGUgJiYgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIHZhciB3cml0YWJsZURlc3Ryb3llZCA9IHRoaXMuX3dyaXRhYmxlU3RhdGUgJiYgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG5cbiAgaWYgKHJlYWRhYmxlRGVzdHJveWVkIHx8IHdyaXRhYmxlRGVzdHJveWVkKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICBjYihlcnIpO1xuICAgIH0gZWxzZSBpZiAoZXJyICYmICghdGhpcy5fd3JpdGFibGVTdGF0ZSB8fCAhdGhpcy5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQpKSB7XG4gICAgICBwbmEubmV4dFRpY2soZW1pdEVycm9yTlQsIHRoaXMsIGVycik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gd2Ugc2V0IGRlc3Ryb3llZCB0byB0cnVlIGJlZm9yZSBmaXJpbmcgZXJyb3IgY2FsbGJhY2tzIGluIG9yZGVyXG4gIC8vIHRvIG1ha2UgaXQgcmUtZW50cmFuY2Ugc2FmZSBpbiBjYXNlIGRlc3Ryb3koKSBpcyBjYWxsZWQgd2l0aGluIGNhbGxiYWNrc1xuXG4gIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlKSB7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgLy8gaWYgdGhpcyBpcyBhIGR1cGxleCBzdHJlYW0gbWFyayB0aGUgd3JpdGFibGUgcGFydCBhcyBkZXN0cm95ZWQgYXMgd2VsbFxuICBpZiAodGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHRoaXMuX2Rlc3Ryb3koZXJyIHx8IG51bGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoIWNiICYmIGVycikge1xuICAgICAgcG5hLm5leHRUaWNrKGVtaXRFcnJvck5ULCBfdGhpcywgZXJyKTtcbiAgICAgIGlmIChfdGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgICAgICBfdGhpcy5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2IpIHtcbiAgICAgIGNiKGVycik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdW5kZXN0cm95KCkge1xuICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVtaXRFcnJvck5UKHNlbGYsIGVycikge1xuICBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gIHVuZGVzdHJveTogdW5kZXN0cm95XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9yZWFkYWJsZS5qcycpO1xuZXhwb3J0cy5TdHJlYW0gPSBleHBvcnRzO1xuZXhwb3J0cy5SZWFkYWJsZSA9IGV4cG9ydHM7XG5leHBvcnRzLldyaXRhYmxlID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV93cml0YWJsZS5qcycpO1xuZXhwb3J0cy5EdXBsZXggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX2R1cGxleC5qcycpO1xuZXhwb3J0cy5UcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcycpO1xuZXhwb3J0cy5QYXNzVGhyb3VnaCA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMnKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgaXNFbmNvZGluZyA9IEJ1ZmZlci5pc0VuY29kaW5nIHx8IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBlbmNvZGluZyA9ICcnICsgZW5jb2Rpbmc7XG4gIHN3aXRjaCAoZW5jb2RpbmcgJiYgZW5jb2RpbmcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6Y2FzZSAndXRmOCc6Y2FzZSAndXRmLTgnOmNhc2UgJ2FzY2lpJzpjYXNlICdiaW5hcnknOmNhc2UgJ2Jhc2U2NCc6Y2FzZSAndWNzMic6Y2FzZSAndWNzLTInOmNhc2UgJ3V0ZjE2bGUnOmNhc2UgJ3V0Zi0xNmxlJzpjYXNlICdyYXcnOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gX25vcm1hbGl6ZUVuY29kaW5nKGVuYykge1xuICBpZiAoIWVuYykgcmV0dXJuICd1dGY4JztcbiAgdmFyIHJldHJpZWQ7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmMpIHtcbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gJ3V0ZjgnO1xuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuICd1dGYxNmxlJztcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gJ2xhdGluMSc7XG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGVuYztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChyZXRyaWVkKSByZXR1cm47IC8vIHVuZGVmaW5lZFxuICAgICAgICBlbmMgPSAoJycgKyBlbmMpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHJpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRG8gbm90IGNhY2hlIGBCdWZmZXIuaXNFbmNvZGluZ2Agd2hlbiBjaGVja2luZyBlbmNvZGluZyBuYW1lcyBhcyBzb21lXG4vLyBtb2R1bGVzIG1vbmtleS1wYXRjaCBpdCB0byBzdXBwb3J0IGFkZGl0aW9uYWwgZW5jb2RpbmdzXG5mdW5jdGlvbiBub3JtYWxpemVFbmNvZGluZyhlbmMpIHtcbiAgdmFyIG5lbmMgPSBfbm9ybWFsaXplRW5jb2RpbmcoZW5jKTtcbiAgaWYgKHR5cGVvZiBuZW5jICE9PSAnc3RyaW5nJyAmJiAoQnVmZmVyLmlzRW5jb2RpbmcgPT09IGlzRW5jb2RpbmcgfHwgIWlzRW5jb2RpbmcoZW5jKSkpIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuYyk7XG4gIHJldHVybiBuZW5jIHx8IGVuYztcbn1cblxuLy8gU3RyaW5nRGVjb2RlciBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIGVmZmljaWVudGx5IHNwbGl0dGluZyBhIHNlcmllcyBvZlxuLy8gYnVmZmVycyBpbnRvIGEgc2VyaWVzIG9mIEpTIHN0cmluZ3Mgd2l0aG91dCBicmVha2luZyBhcGFydCBtdWx0aS1ieXRlXG4vLyBjaGFyYWN0ZXJzLlxuZXhwb3J0cy5TdHJpbmdEZWNvZGVyID0gU3RyaW5nRGVjb2RlcjtcbmZ1bmN0aW9uIFN0cmluZ0RlY29kZXIoZW5jb2RpbmcpIHtcbiAgdGhpcy5lbmNvZGluZyA9IG5vcm1hbGl6ZUVuY29kaW5nKGVuY29kaW5nKTtcbiAgdmFyIG5iO1xuICBzd2l0Y2ggKHRoaXMuZW5jb2RpbmcpIHtcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIHRoaXMudGV4dCA9IHV0ZjE2VGV4dDtcbiAgICAgIHRoaXMuZW5kID0gdXRmMTZFbmQ7XG4gICAgICBuYiA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd1dGY4JzpcbiAgICAgIHRoaXMuZmlsbExhc3QgPSB1dGY4RmlsbExhc3Q7XG4gICAgICBuYiA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgdGhpcy50ZXh0ID0gYmFzZTY0VGV4dDtcbiAgICAgIHRoaXMuZW5kID0gYmFzZTY0RW5kO1xuICAgICAgbmIgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXMud3JpdGUgPSBzaW1wbGVXcml0ZTtcbiAgICAgIHRoaXMuZW5kID0gc2ltcGxlRW5kO1xuICAgICAgcmV0dXJuO1xuICB9XG4gIHRoaXMubGFzdE5lZWQgPSAwO1xuICB0aGlzLmxhc3RUb3RhbCA9IDA7XG4gIHRoaXMubGFzdENoYXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobmIpO1xufVxuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChidWYpIHtcbiAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHJldHVybiAnJztcbiAgdmFyIHI7XG4gIHZhciBpO1xuICBpZiAodGhpcy5sYXN0TmVlZCkge1xuICAgIHIgPSB0aGlzLmZpbGxMYXN0KGJ1Zik7XG4gICAgaWYgKHIgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuICAgIGkgPSB0aGlzLmxhc3ROZWVkO1xuICAgIHRoaXMubGFzdE5lZWQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGkgPSAwO1xuICB9XG4gIGlmIChpIDwgYnVmLmxlbmd0aCkgcmV0dXJuIHIgPyByICsgdGhpcy50ZXh0KGJ1ZiwgaSkgOiB0aGlzLnRleHQoYnVmLCBpKTtcbiAgcmV0dXJuIHIgfHwgJyc7XG59O1xuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5lbmQgPSB1dGY4RW5kO1xuXG4vLyBSZXR1cm5zIG9ubHkgY29tcGxldGUgY2hhcmFjdGVycyBpbiBhIEJ1ZmZlclxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUudGV4dCA9IHV0ZjhUZXh0O1xuXG4vLyBBdHRlbXB0cyB0byBjb21wbGV0ZSBhIHBhcnRpYWwgbm9uLVVURi04IGNoYXJhY3RlciB1c2luZyBieXRlcyBmcm9tIGEgQnVmZmVyXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5maWxsTGFzdCA9IGZ1bmN0aW9uIChidWYpIHtcbiAgaWYgKHRoaXMubGFzdE5lZWQgPD0gYnVmLmxlbmd0aCkge1xuICAgIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZCwgMCwgdGhpcy5sYXN0TmVlZCk7XG4gICAgcmV0dXJuIHRoaXMubGFzdENoYXIudG9TdHJpbmcodGhpcy5lbmNvZGluZywgMCwgdGhpcy5sYXN0VG90YWwpO1xuICB9XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZCwgMCwgYnVmLmxlbmd0aCk7XG4gIHRoaXMubGFzdE5lZWQgLT0gYnVmLmxlbmd0aDtcbn07XG5cbi8vIENoZWNrcyB0aGUgdHlwZSBvZiBhIFVURi04IGJ5dGUsIHdoZXRoZXIgaXQncyBBU0NJSSwgYSBsZWFkaW5nIGJ5dGUsIG9yIGFcbi8vIGNvbnRpbnVhdGlvbiBieXRlLiBJZiBhbiBpbnZhbGlkIGJ5dGUgaXMgZGV0ZWN0ZWQsIC0yIGlzIHJldHVybmVkLlxuZnVuY3Rpb24gdXRmOENoZWNrQnl0ZShieXRlKSB7XG4gIGlmIChieXRlIDw9IDB4N0YpIHJldHVybiAwO2Vsc2UgaWYgKGJ5dGUgPj4gNSA9PT0gMHgwNikgcmV0dXJuIDI7ZWxzZSBpZiAoYnl0ZSA+PiA0ID09PSAweDBFKSByZXR1cm4gMztlbHNlIGlmIChieXRlID4+IDMgPT09IDB4MUUpIHJldHVybiA0O1xuICByZXR1cm4gYnl0ZSA+PiA2ID09PSAweDAyID8gLTEgOiAtMjtcbn1cblxuLy8gQ2hlY2tzIGF0IG1vc3QgMyBieXRlcyBhdCB0aGUgZW5kIG9mIGEgQnVmZmVyIGluIG9yZGVyIHRvIGRldGVjdCBhblxuLy8gaW5jb21wbGV0ZSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3Rlci4gVGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyAoMiwgMywgb3IgNClcbi8vIG5lZWRlZCB0byBjb21wbGV0ZSB0aGUgVVRGLTggY2hhcmFjdGVyIChpZiBhcHBsaWNhYmxlKSBhcmUgcmV0dXJuZWQuXG5mdW5jdGlvbiB1dGY4Q2hlY2tJbmNvbXBsZXRlKHNlbGYsIGJ1ZiwgaSkge1xuICB2YXIgaiA9IGJ1Zi5sZW5ndGggLSAxO1xuICBpZiAoaiA8IGkpIHJldHVybiAwO1xuICB2YXIgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkgc2VsZi5sYXN0TmVlZCA9IG5iIC0gMTtcbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgaWYgKC0taiA8IGkgfHwgbmIgPT09IC0yKSByZXR1cm4gMDtcbiAgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkgc2VsZi5sYXN0TmVlZCA9IG5iIC0gMjtcbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgaWYgKC0taiA8IGkgfHwgbmIgPT09IC0yKSByZXR1cm4gMDtcbiAgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkge1xuICAgICAgaWYgKG5iID09PSAyKSBuYiA9IDA7ZWxzZSBzZWxmLmxhc3ROZWVkID0gbmIgLSAzO1xuICAgIH1cbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbi8vIFZhbGlkYXRlcyBhcyBtYW55IGNvbnRpbnVhdGlvbiBieXRlcyBmb3IgYSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3RlciBhc1xuLy8gbmVlZGVkIG9yIGFyZSBhdmFpbGFibGUuIElmIHdlIHNlZSBhIG5vbi1jb250aW51YXRpb24gYnl0ZSB3aGVyZSB3ZSBleHBlY3Rcbi8vIG9uZSwgd2UgXCJyZXBsYWNlXCIgdGhlIHZhbGlkYXRlZCBjb250aW51YXRpb24gYnl0ZXMgd2UndmUgc2VlbiBzbyBmYXIgd2l0aFxuLy8gYSBzaW5nbGUgVVRGLTggcmVwbGFjZW1lbnQgY2hhcmFjdGVyICgnXFx1ZmZmZCcpLCB0byBtYXRjaCB2OCdzIFVURi04IGRlY29kaW5nXG4vLyBiZWhhdmlvci4gVGhlIGNvbnRpbnVhdGlvbiBieXRlIGNoZWNrIGlzIGluY2x1ZGVkIHRocmVlIHRpbWVzIGluIHRoZSBjYXNlXG4vLyB3aGVyZSBhbGwgb2YgdGhlIGNvbnRpbnVhdGlvbiBieXRlcyBmb3IgYSBjaGFyYWN0ZXIgZXhpc3QgaW4gdGhlIHNhbWUgYnVmZmVyLlxuLy8gSXQgaXMgYWxzbyBkb25lIHRoaXMgd2F5IGFzIGEgc2xpZ2h0IHBlcmZvcm1hbmNlIGluY3JlYXNlIGluc3RlYWQgb2YgdXNpbmcgYVxuLy8gbG9vcC5cbmZ1bmN0aW9uIHV0ZjhDaGVja0V4dHJhQnl0ZXMoc2VsZiwgYnVmLCBwKSB7XG4gIGlmICgoYnVmWzBdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICBzZWxmLmxhc3ROZWVkID0gMDtcbiAgICByZXR1cm4gJ1xcdWZmZmQnO1xuICB9XG4gIGlmIChzZWxmLmxhc3ROZWVkID4gMSAmJiBidWYubGVuZ3RoID4gMSkge1xuICAgIGlmICgoYnVmWzFdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICAgIHNlbGYubGFzdE5lZWQgPSAxO1xuICAgICAgcmV0dXJuICdcXHVmZmZkJztcbiAgICB9XG4gICAgaWYgKHNlbGYubGFzdE5lZWQgPiAyICYmIGJ1Zi5sZW5ndGggPiAyKSB7XG4gICAgICBpZiAoKGJ1ZlsyXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgICAgIHNlbGYubGFzdE5lZWQgPSAyO1xuICAgICAgICByZXR1cm4gJ1xcdWZmZmQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBdHRlbXB0cyB0byBjb21wbGV0ZSBhIG11bHRpLWJ5dGUgVVRGLTggY2hhcmFjdGVyIHVzaW5nIGJ5dGVzIGZyb20gYSBCdWZmZXIuXG5mdW5jdGlvbiB1dGY4RmlsbExhc3QoYnVmKSB7XG4gIHZhciBwID0gdGhpcy5sYXN0VG90YWwgLSB0aGlzLmxhc3ROZWVkO1xuICB2YXIgciA9IHV0ZjhDaGVja0V4dHJhQnl0ZXModGhpcywgYnVmLCBwKTtcbiAgaWYgKHIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHI7XG4gIGlmICh0aGlzLmxhc3ROZWVkIDw9IGJ1Zi5sZW5ndGgpIHtcbiAgICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCBwLCAwLCB0aGlzLmxhc3ROZWVkKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0Q2hhci50b1N0cmluZyh0aGlzLmVuY29kaW5nLCAwLCB0aGlzLmxhc3RUb3RhbCk7XG4gIH1cbiAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgcCwgMCwgYnVmLmxlbmd0aCk7XG4gIHRoaXMubGFzdE5lZWQgLT0gYnVmLmxlbmd0aDtcbn1cblxuLy8gUmV0dXJucyBhbGwgY29tcGxldGUgVVRGLTggY2hhcmFjdGVycyBpbiBhIEJ1ZmZlci4gSWYgdGhlIEJ1ZmZlciBlbmRlZCBvbiBhXG4vLyBwYXJ0aWFsIGNoYXJhY3RlciwgdGhlIGNoYXJhY3RlcidzIGJ5dGVzIGFyZSBidWZmZXJlZCB1bnRpbCB0aGUgcmVxdWlyZWRcbi8vIG51bWJlciBvZiBieXRlcyBhcmUgYXZhaWxhYmxlLlxuZnVuY3Rpb24gdXRmOFRleHQoYnVmLCBpKSB7XG4gIHZhciB0b3RhbCA9IHV0ZjhDaGVja0luY29tcGxldGUodGhpcywgYnVmLCBpKTtcbiAgaWYgKCF0aGlzLmxhc3ROZWVkKSByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGY4JywgaSk7XG4gIHRoaXMubGFzdFRvdGFsID0gdG90YWw7XG4gIHZhciBlbmQgPSBidWYubGVuZ3RoIC0gKHRvdGFsIC0gdGhpcy5sYXN0TmVlZCk7XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIDAsIGVuZCk7XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ3V0ZjgnLCBpLCBlbmQpO1xufVxuXG4vLyBGb3IgVVRGLTgsIGEgcmVwbGFjZW1lbnQgY2hhcmFjdGVyIGlzIGFkZGVkIHdoZW4gZW5kaW5nIG9uIGEgcGFydGlhbFxuLy8gY2hhcmFjdGVyLlxuZnVuY3Rpb24gdXRmOEVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkgcmV0dXJuIHIgKyAnXFx1ZmZmZCc7XG4gIHJldHVybiByO1xufVxuXG4vLyBVVEYtMTZMRSB0eXBpY2FsbHkgbmVlZHMgdHdvIGJ5dGVzIHBlciBjaGFyYWN0ZXIsIGJ1dCBldmVuIGlmIHdlIGhhdmUgYW4gZXZlblxuLy8gbnVtYmVyIG9mIGJ5dGVzIGF2YWlsYWJsZSwgd2UgbmVlZCB0byBjaGVjayBpZiB3ZSBlbmQgb24gYSBsZWFkaW5nL2hpZ2hcbi8vIHN1cnJvZ2F0ZS4gSW4gdGhhdCBjYXNlLCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBuZXh0IHR3byBieXRlcyBpbiBvcmRlciB0b1xuLy8gZGVjb2RlIHRoZSBsYXN0IGNoYXJhY3RlciBwcm9wZXJseS5cbmZ1bmN0aW9uIHV0ZjE2VGV4dChidWYsIGkpIHtcbiAgaWYgKChidWYubGVuZ3RoIC0gaSkgJSAyID09PSAwKSB7XG4gICAgdmFyIHIgPSBidWYudG9TdHJpbmcoJ3V0ZjE2bGUnLCBpKTtcbiAgICBpZiAocikge1xuICAgICAgdmFyIGMgPSByLmNoYXJDb2RlQXQoci5sZW5ndGggLSAxKTtcbiAgICAgIGlmIChjID49IDB4RDgwMCAmJiBjIDw9IDB4REJGRikge1xuICAgICAgICB0aGlzLmxhc3ROZWVkID0gMjtcbiAgICAgICAgdGhpcy5sYXN0VG90YWwgPSA0O1xuICAgICAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAyXTtcbiAgICAgICAgdGhpcy5sYXN0Q2hhclsxXSA9IGJ1ZltidWYubGVuZ3RoIC0gMV07XG4gICAgICAgIHJldHVybiByLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgdGhpcy5sYXN0TmVlZCA9IDE7XG4gIHRoaXMubGFzdFRvdGFsID0gMjtcbiAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMV07XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ3V0ZjE2bGUnLCBpLCBidWYubGVuZ3RoIC0gMSk7XG59XG5cbi8vIEZvciBVVEYtMTZMRSB3ZSBkbyBub3QgZXhwbGljaXRseSBhcHBlbmQgc3BlY2lhbCByZXBsYWNlbWVudCBjaGFyYWN0ZXJzIGlmIHdlXG4vLyBlbmQgb24gYSBwYXJ0aWFsIGNoYXJhY3Rlciwgd2Ugc2ltcGx5IGxldCB2OCBoYW5kbGUgdGhhdC5cbmZ1bmN0aW9uIHV0ZjE2RW5kKGJ1Zikge1xuICB2YXIgciA9IGJ1ZiAmJiBidWYubGVuZ3RoID8gdGhpcy53cml0ZShidWYpIDogJyc7XG4gIGlmICh0aGlzLmxhc3ROZWVkKSB7XG4gICAgdmFyIGVuZCA9IHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZDtcbiAgICByZXR1cm4gciArIHRoaXMubGFzdENoYXIudG9TdHJpbmcoJ3V0ZjE2bGUnLCAwLCBlbmQpO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBiYXNlNjRUZXh0KGJ1ZiwgaSkge1xuICB2YXIgbiA9IChidWYubGVuZ3RoIC0gaSkgJSAzO1xuICBpZiAobiA9PT0gMCkgcmV0dXJuIGJ1Zi50b1N0cmluZygnYmFzZTY0JywgaSk7XG4gIHRoaXMubGFzdE5lZWQgPSAzIC0gbjtcbiAgdGhpcy5sYXN0VG90YWwgPSAzO1xuICBpZiAobiA9PT0gMSkge1xuICAgIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDJdO1xuICAgIHRoaXMubGFzdENoYXJbMV0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICB9XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcsIGksIGJ1Zi5sZW5ndGggLSBuKTtcbn1cblxuZnVuY3Rpb24gYmFzZTY0RW5kKGJ1Zikge1xuICB2YXIgciA9IGJ1ZiAmJiBidWYubGVuZ3RoID8gdGhpcy53cml0ZShidWYpIDogJyc7XG4gIGlmICh0aGlzLmxhc3ROZWVkKSByZXR1cm4gciArIHRoaXMubGFzdENoYXIudG9TdHJpbmcoJ2Jhc2U2NCcsIDAsIDMgLSB0aGlzLmxhc3ROZWVkKTtcbiAgcmV0dXJuIHI7XG59XG5cbi8vIFBhc3MgYnl0ZXMgb24gdGhyb3VnaCBmb3Igc2luZ2xlLWJ5dGUgZW5jb2RpbmdzIChlLmcuIGFzY2lpLCBsYXRpbjEsIGhleClcbmZ1bmN0aW9uIHNpbXBsZVdyaXRlKGJ1Zikge1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcpO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVFbmQoYnVmKSB7XG4gIHJldHVybiBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xufSIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCdyZWFkYWJsZS1zdHJlYW0nKS5UcmFuc2Zvcm1cbiAgLCBpbmhlcml0cyAgPSByZXF1aXJlKCd1dGlsJykuaW5oZXJpdHNcbiAgLCB4dGVuZCAgICAgPSByZXF1aXJlKCd4dGVuZCcpXG5cbmZ1bmN0aW9uIERlc3Ryb3lhYmxlVHJhbnNmb3JtKG9wdHMpIHtcbiAgVHJhbnNmb3JtLmNhbGwodGhpcywgb3B0cylcbiAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2Vcbn1cblxuaW5oZXJpdHMoRGVzdHJveWFibGVUcmFuc2Zvcm0sIFRyYW5zZm9ybSlcblxuRGVzdHJveWFibGVUcmFuc2Zvcm0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihlcnIpIHtcbiAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuXG4gIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWVcbiAgXG4gIHZhciBzZWxmID0gdGhpc1xuICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgIGlmIChlcnIpXG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgIHNlbGYuZW1pdCgnY2xvc2UnKVxuICB9KVxufVxuXG4vLyBhIG5vb3AgX3RyYW5zZm9ybSBmdW5jdGlvblxuZnVuY3Rpb24gbm9vcCAoY2h1bmssIGVuYywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sobnVsbCwgY2h1bmspXG59XG5cblxuLy8gY3JlYXRlIGEgbmV3IGV4cG9ydCBmdW5jdGlvbiwgdXNlZCBieSBib3RoIHRoZSBtYWluIGV4cG9ydCBhbmRcbi8vIHRoZSAuY3RvciBleHBvcnQsIGNvbnRhaW5zIGNvbW1vbiBsb2dpYyBmb3IgZGVhbGluZyB3aXRoIGFyZ3VtZW50c1xuZnVuY3Rpb24gdGhyb3VnaDIgKGNvbnN0cnVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmx1c2ggICAgID0gdHJhbnNmb3JtXG4gICAgICB0cmFuc2Zvcm0gPSBvcHRpb25zXG4gICAgICBvcHRpb25zICAgPSB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtICE9ICdmdW5jdGlvbicpXG4gICAgICB0cmFuc2Zvcm0gPSBub29wXG5cbiAgICBpZiAodHlwZW9mIGZsdXNoICE9ICdmdW5jdGlvbicpXG4gICAgICBmbHVzaCA9IG51bGxcblxuICAgIHJldHVybiBjb25zdHJ1Y3Qob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaClcbiAgfVxufVxuXG5cbi8vIG1haW4gZXhwb3J0LCBqdXN0IG1ha2UgbWUgYSB0cmFuc2Zvcm0gc3RyZWFtIVxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdWdoMihmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICB2YXIgdDIgPSBuZXcgRGVzdHJveWFibGVUcmFuc2Zvcm0ob3B0aW9ucylcblxuICB0Mi5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIHQyLl9mbHVzaCA9IGZsdXNoXG5cbiAgcmV0dXJuIHQyXG59KVxuXG5cbi8vIG1ha2UgbWUgYSByZXVzYWJsZSBwcm90b3R5cGUgdGhhdCBJIGNhbiBgbmV3YCwgb3IgaW1wbGljaXRseSBgbmV3YFxuLy8gd2l0aCBhIGNvbnN0cnVjdG9yIGNhbGxcbm1vZHVsZS5leHBvcnRzLmN0b3IgPSB0aHJvdWdoMihmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICBmdW5jdGlvbiBUaHJvdWdoMiAob3ZlcnJpZGUpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGhyb3VnaDIpKVxuICAgICAgcmV0dXJuIG5ldyBUaHJvdWdoMihvdmVycmlkZSlcblxuICAgIHRoaXMub3B0aW9ucyA9IHh0ZW5kKG9wdGlvbnMsIG92ZXJyaWRlKVxuXG4gICAgRGVzdHJveWFibGVUcmFuc2Zvcm0uY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMpXG4gIH1cblxuICBpbmhlcml0cyhUaHJvdWdoMiwgRGVzdHJveWFibGVUcmFuc2Zvcm0pXG5cbiAgVGhyb3VnaDIucHJvdG90eXBlLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cblxuICBpZiAoZmx1c2gpXG4gICAgVGhyb3VnaDIucHJvdG90eXBlLl9mbHVzaCA9IGZsdXNoXG5cbiAgcmV0dXJuIFRocm91Z2gyXG59KVxuXG5cbm1vZHVsZS5leHBvcnRzLm9iaiA9IHRocm91Z2gyKGZ1bmN0aW9uIChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKSB7XG4gIHZhciB0MiA9IG5ldyBEZXN0cm95YWJsZVRyYW5zZm9ybSh4dGVuZCh7IG9iamVjdE1vZGU6IHRydWUsIGhpZ2hXYXRlck1hcms6IDE2IH0sIG9wdGlvbnMpKVxuXG4gIHQyLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cblxuICBpZiAoZmx1c2gpXG4gICAgdDIuX2ZsdXNoID0gZmx1c2hcblxuICByZXR1cm4gdDJcbn0pXG4iLCIvLyBSZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB3cmFwcGVkIGNhbGxiYWNrXG4vLyBUaGUgd3JhcHBlciBmdW5jdGlvbiBzaG91bGQgZG8gc29tZSBzdHVmZiwgYW5kIHJldHVybiBhXG4vLyBwcmVzdW1hYmx5IGRpZmZlcmVudCBjYWxsYmFjayBmdW5jdGlvbi5cbi8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IG93biBwcm9wZXJ0aWVzIGFyZSByZXRhaW5lZCwgc28gdGhhdFxuLy8gZGVjb3JhdGlvbnMgYW5kIHN1Y2ggYXJlIG5vdCBsb3N0IGFsb25nIHRoZSB3YXkuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweVxuZnVuY3Rpb24gd3JhcHB5IChmbiwgY2IpIHtcbiAgaWYgKGZuICYmIGNiKSByZXR1cm4gd3JhcHB5KGZuKShjYilcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25lZWQgd3JhcHBlciBmdW5jdGlvbicpXG5cbiAgT2JqZWN0LmtleXMoZm4pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICB3cmFwcGVyW2tdID0gZm5ba11cbiAgfSlcblxuICByZXR1cm4gd3JhcHBlclxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgdmFyIHJldCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgdmFyIGNiID0gYXJnc1thcmdzLmxlbmd0aC0xXVxuICAgIGlmICh0eXBlb2YgcmV0ID09PSAnZnVuY3Rpb24nICYmIHJldCAhPT0gY2IpIHtcbiAgICAgIE9iamVjdC5rZXlzKGNiKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIHJldFtrXSA9IGNiW2tdXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkNvbXBvc2VkU3RvcmUiLCJPYnNlcnZhYmxlU3RvcmVfMSIsIk9ic2VydmFibGVTdG9yZSIsImNvbnN0cnVjdG9yIiwiY2hpbGRyZW4iLCJzdXBlciIsInRoaXMiLCJfY2hpbGRyZW4iLCJrZXlzIiwiZm9yRWFjaCIsImNoaWxkS2V5IiwiY2hpbGQiLCJfYWRkQ2hpbGQiLCJ1cGRhdGVGcm9tQ2hpbGQiLCJjaGlsZFZhbHVlIiwic3RhdGUiLCJnZXRTdGF0ZSIsInB1dFN0YXRlIiwic3Vic2NyaWJlIiwiTWVyZ2VkU3RvcmUiLCJfdXBkYXRlV2hvbGVTdGF0ZSIsImNoaWxkU3RhdGVzIiwibWFwIiwiYXNzaWduIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsInNhZmVfZXZlbnRfZW1pdHRlcl8xIiwiZGVmYXVsdCIsImluaXRTdGF0ZSIsIl9zdGF0ZSIsIl9nZXRTdGF0ZSIsIm5ld1N0YXRlIiwiX3B1dFN0YXRlIiwiZW1pdCIsInVwZGF0ZVN0YXRlIiwicGFydGlhbFN0YXRlIiwiaGFuZGxlciIsIm9uIiwidW5zdWJzY3JpYmUiLCJyZW1vdmVMaXN0ZW5lciIsInN0b3JlQXNTdHJlYW0iLCJzdHJlYW1fMSIsIk9ic2VydmFibGVTdG9yZVN0cmVhbSIsIkR1cGxleCIsIm9ic1N0b3JlIiwib2JqZWN0TW9kZSIsInJlc3VtZSIsInB1c2giLCJwaXBlIiwiZGVzdCIsIm9wdGlvbnMiLCJyZXN1bHQiLCJ3cml0ZSIsIl93cml0ZSIsImNodW5rIiwiX2VuY29kaW5nIiwiY2FsbGJhY2siLCJfcmVhZCIsIl9zaXplIiwiX2Rlc3Ryb3kiLCJlcnIiLCJfX2NyZWF0ZUJpbmRpbmciLCJjcmVhdGUiLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImVudW1lcmFibGUiLCJnZXQiLCJfX2V4cG9ydFN0YXIiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic3RvcmVUcmFuc2Zvcm1TdHJlYW0iLCJ0aHJvdWdoMl8xIiwic3luY1RyYW5zZm9ybUZuIiwib2JqIiwiY2IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJzb3VyY2UiLCJleGNsdWRlZCIsInRhcmdldCIsInNvdXJjZUtleXMiLCJrZXkiLCJpIiwibGVuZ3RoIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiRVRIRVJFVU1fTkVUV09SSyIsIlJPUFNURU4iLCJNQUlOTkVUIiwiUE9MWUdPTiIsImFiaSIsImlucHV0cyIsImludGVybmFsVHlwZSIsIm5hbWUiLCJ0eXBlIiwib3V0cHV0cyIsInN0YXRlTXV0YWJpbGl0eSIsIk5vZGVEZXRhaWxNYW5hZ2VyIiwibmV0d29yayIsInByb3h5QWRkcmVzcyIsIlBST1hZX0FERFJFU1NfTUFJTk5FVCIsImFyZ3VtZW50cyIsInVybCIsIlVSTCIsImhyZWYiLCJfIiwicHJvamVjdElkIiwiY29uY2F0Iiwibm9kZUxpc3RDb250cmFjdCIsIm5vZGVMaXN0QWRkcmVzcyIsInVwZGF0ZWQiLCJfbm9kZURldGFpbHMiLCJjdXJyZW50RXBvY2giLCJfY3VycmVudEVwb2NoIiwidG9ydXNOb2RlRW5kcG9pbnRzIiwiX3RvcnVzTm9kZUVuZHBvaW50cyIsInRvcnVzTm9kZVB1YiIsIl90b3J1c05vZGVQdWIiLCJ0b3J1c0luZGV4ZXMiLCJfdG9ydXNJbmRleGVzIiwiYXN5bmMiLCJfcmVmIiwidmVyaWZpZXIiLCJ2ZXJpZmllcklkIiwiUFJPWFlfQUREUkVTU19ST1BTVEVOIiwiaGFzaGVkVmVyaWZpZXJJZCIsImtlY2NhazI1NiIsIm5vZGVEZXRhaWxzIiwibWV0aG9kcyIsImdldE5vZGVTZXQiLCJ0b3J1c05vZGVQdWJYIiwidG9ydXNOb2RlUHViWSIsIngiLCJOdW1iZXIiLCJ1cGRhdGVkRW5kcG9pbnRzIiwidXBkYXRlZE5vZGVQdWIiLCJpbmRleCIsImVuZFBvaW50RWxlbWVudCIsInB1Ykt4IiwicHViS3kiLCJlbmRwb2ludCIsInNwbGl0IiwiWCIsInRvSGV4IiwicmVwbGFjZSIsIlkiLCJlcnJvciIsIk5PREVfREVUQUlMU19NQUlOTkVUIiwib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5Iiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwibG9nIiwic2V0TGV2ZWwiLCJsZXZlbHMiLCJhcGlLZXkiLCJlbWJlZEhvc3QiLCJzZW50cnkiLCJ0cmFjaW5nT3JpZ2lucyIsInRyYWNpbmdQYXRocyIsInNldEVtYmVkSG9zdCIsImVtYmVkSG9zdF8iLCJzZXRBUElLZXkiLCJhcGlLZXlfIiwiZmV0Y2hBbmRUcmFjZSIsImluaXQiLCJfdXJsIiwiaW5jbHVkZXMiLCJvcmlnaW4iLCJwYXRobmFtZSIsInRyYW5zYWN0aW9uIiwic3RhcnRUcmFuc2FjdGlvbiIsInNwYW4iLCJzdGFydENoaWxkIiwib3AiLCJyZXNwb25zZSIsImZldGNoIiwiZmluaXNoIiwiZ2V0QXBpS2V5SGVhZGVycyIsImhlYWRlcnMiLCJkZWJ1Z0xvZ1Jlc3BvbnNlIiwiaW5mbyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJwcm9taXNlVGltZW91dCIsIm1zIiwicHJvbWlzZSIsInRpbWVvdXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkVycm9yIiwicmFjZSIsIm9wdGlvbnNfIiwiY3VzdG9tT3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwibW9kZSIsInVzZUFQSUtleSIsIm1ldGhvZCIsIm9rIiwianNvbiIsInBvc3QiLCJkYXRhIiwiaXNVcmxFbmNvZGVkRGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImdlbmVyYXRlSnNvblJQQ09iamVjdCIsInBhcmFtZXRlcnMiLCJqc29ucnBjIiwicGFyYW1zIiwibm9vcCIsIkFDSyIsIkJhc2VQb3N0TWVzc2FnZVN0cmVhbSIsInRhcmdldFdpbmRvdyIsIndpbmRvdyIsInRhcmdldE9yaWdpbiIsIl9pbml0IiwiX2hhdmVTeW4iLCJfbmFtZSIsIl90YXJnZXQiLCJfdGFyZ2V0V2luZG93IiwiX3RhcmdldE9yaWdpbiIsIl9vbk1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJiaW5kIiwiX3N5bkludGVydmFsSWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRTaGFrZSIsIl9icmVhayIsImNvcmsiLCJfb25EYXRhIiwidW5jb3JrIiwiX3Bvc3RNZXNzYWdlIiwib3JpZ2luQ29uc3RyYWludCIsInBvc3RNZXNzYWdlIiwiZXZlbnQiLCJtZXNzYWdlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNhZmVBcHBseSIsImNvbnRleHQiLCJhcmdzIiwiUmVmbGVjdCIsIlNhZmVFdmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJkb0Vycm9yIiwiZXZlbnRzIiwiX2V2ZW50cyIsIl9sZW4iLCJBcnJheSIsIl9rZXkiLCJlciIsImxlbiIsImxpc3RlbmVycyIsImFyciIsIm4iLCJjb3B5IiwiYXJyYXlDbG9uZSIsIlNlcmlhbGl6YWJsZUVycm9yIiwiY29kZSIsImlzSW50ZWdlciIsInRvU3RyaW5nIiwic3RhY2siLCJjcmVhdGVTdHJlYW1NaWRkbGV3YXJlIiwiaWRNYXAiLCJzdHJlYW0iLCJyZWFkIiwicmVzIiwicHJvY2Vzc05vdGlmaWNhdGlvbiIsImVuZCIsInByb2Nlc3NSZXNwb25zZSIsIl9lcnIiLCJtaWRkbGV3YXJlIiwicmVxIiwibmV4dCIsImNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlIiwiX2VuZCIsIm9yaWdpbmFsSWQiLCJuZXdJZCIsInJhbmRvbUlkIiwiZG9uZSIsIm93bktleXMkMSIsIkpSUENFbmdpbmUiLCJfbWlkZGxld2FyZSIsInN0YXRpYyIsIm1pZGRsZXdhcmVTdGFjayIsInJldHVybkhhbmRsZXJzIiwiaXNDb21wbGV0ZSIsIl9ydW5NaWRkbGV3YXJlIiwicmV2ZXJzZSIsInNlcmlhbGl6ZUVycm9yIiwicmV0dXJuSGFuZGxlciIsImhhbmRsZXJzIiwiaGFuZGxlIiwiaXNBcnJheSIsIl9oYW5kbGVCYXRjaCIsIl9oYW5kbGUiLCJfcHJvbWlzZUhhbmRsZSIsImFzTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVFcnJvciIsIl9ydW5BbGxNaWRkbGV3YXJlIiwiX3J1blJldHVybkhhbmRsZXJzIiwiaGFuZGxlckNhbGxiYWNrIiwicmVxcyIsInJlc3BvbnNlcyIsImFsbCIsImNhbGxlclJlcSIsIl9vYmplY3RTcHJlYWQkMSIsIl9wcm9jZXNzUmVxdWVzdCIsIl9lcnJvciIsIl9jaGVja0ZvckNvbXBsZXRpb24iLCJTdWJzdHJlYW0iLCJwYXJlbnQiLCJfcGFyZW50IiwiSUdOT1JFX1NVQlNUUkVBTSIsIlN5bWJvbCIsIk9iamVjdE11bHRpcGxleCIsIl9zdWJzdHJlYW1zIiwiY3JlYXRlU3RyZWFtIiwic3Vic3RyZWFtIiwiX2NiIiwicmVhZGFibGUiLCJhbnlTdHJlYW1FbmQiLCJkZXN0cm95IiwiaWdub3JlU3RyZWFtIiwiY29uc29sZSIsIndhcm4iLCJkaXNhYmxlQWxsIiwiU29tZUVycm9yIiwiZXJyb3JzIiwicHJlZGljYXRlIiwiU29tZSIsInByb21pc2VzIiwiZmluaXNoZWRDb3VudCIsInNoYXJlZFN0YXRlIiwicmVzb2x2ZWQiLCJlcnJvckFyciIsImZpbGwiLCJyZXN1bHRBcnIiLCJwcmVkaWNhdGVFcnJvciIsInJlc3AiLCJjYXRjaCIsImZpbmFsbHkiLCJzbGljZSIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsInoiLCJfZXJyb3IkZGF0YSIsInN0YXJ0c1dpdGgiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsIm1zZyIsIml0Iiwiam9pbiIsIl9wcmVkaWNhdGVFcnJvciIsIkdldE9yU2V0Tm9uY2VFcnJvciIsImtDb21iaW5hdGlvbnMiLCJzIiwic2V0IiwiZnJvbSIsImN1ciIsImNvbWJzIiwidGFpbENvbWJzIiwiaiIsInRocmVzaG9sZFNhbWUiLCJ0IiwiaGFzaE1hcCIsImtleUxvb2t1cCIsImVuZHBvaW50cyIsImxvb2t1cFByb21pc2VzIiwidmVyaWZpZXJfaWQiLCJsb29rdXBSZXN1bHRzIiwibG9va3VwU2hhcmVzIiwieDEiLCJlcnJvclJlc3VsdCIsIngyIiwia2V5UmVzdWx0IiwieDMiLCJ3YWl0S2V5TG9va3VwIiwia2V5QXNzaWduIiwidG9ydXNOb2RlUHVicyIsImxhc3RQb2ludCIsImZpcnN0UG9pbnQiLCJzaWduZXJIb3N0Iiwibm9kZU51bSIsImluaXRpYWxQb2ludCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNpZ25lZERhdGEiLCJwdWJLZXlYIiwicHViS2V5WSIsImEiLCJ1cGRhdGUiLCJkaWdlc3QiLCJlbmFibGVPbmVLZXkiLCJtZXRhZGF0YUhvc3QiLCJhbGxvd0hvc3QiLCJzZXJ2ZXJUaW1lT2Zmc2V0IiwiZWMiLCJlbmFibGVBbGwiLCJkb2VzS2V5QXNzaWduIiwiaXNOZXdLZXkiLCJmaW5hbEtleVJlc3VsdCIsImFzc2lnblJlc3VsdCIsInB1Yl9rZXlfWCIsInB1Yl9rZXlfWSIsIm5vbmNlUmVzdWx0Iiwibm9uY2UiLCJtb2RpZmllZFB1YktleSIsImdldE9yU2V0Tm9uY2UiLCJ0eXBlT2ZVc2VyIiwia2V5RnJvbVB1YmxpYyIsInkiLCJnZXRQdWJsaWMiLCJhZGQiLCJrZXlGcm9tUHJpdmF0ZSIsInB1Yk5vbmNlIiwiZmluYWxYIiwiZ2V0WCIsImZpbmFsWSIsImdldFkiLCJhZGRyZXNzIiwiZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleSIsInVwZ3JhZGVkIiwiX3JlZjIiLCJwcml2S2V5SGV4IiwibWV0YWRhdGFOb25jZSIsInRvcnVzS2V5SGV4IiwiY3VzdG9tS2V5SGV4IiwidG9ydXNLZXkiLCJzdWIiLCJ1bW9kIiwiY3VydmUiLCJuZXdNZXRhZGF0YU5vbmNlIiwiZ2VuZXJhdGVNZXRhZGF0YVBhcmFtcyIsInNldE1ldGFkYXRhIiwiaW5kZXhlcyIsInZlcmlmaWVyUGFyYW1zIiwiaWRUb2tlbiIsImV4dHJhUGFyYW1zIiwicHJvbWlzZUFyciIsInRtcEtleSIsInB1YktleSIsInRva2VuQ29tbWl0bWVudCIsIm1lc3NhZ2VwcmVmaXgiLCJ0b2tlbmNvbW1pdG1lbnQiLCJ0ZW1wcHVieCIsInRlbXBwdWJ5IiwidmVyaWZpZXJpZGVudGlmaWVyIiwicHJvbWlzZUFyclJlcXVlc3QiLCJub2RlU2lncyIsImVuY3J5cHRlZCIsIml0ZW0iLCJpZHRva2VuIiwibm9kZXNpZ25hdHVyZXMiLCJzaGFyZVJlc3BvbnNlcyIsImNvbXBsZXRlZFJlcXVlc3RzIiwidGhyZXNob2xkUHVibGljS2V5IiwiUHVibGljS2V5Iiwic2hhcmVQcm9taXNlcyIsIm5vZGVJbmRleGVzIiwiX2N1cnJlbnRTaGFyZVJlc3BvbnNlIiwiX2N1cnJlbnRTaGFyZVJlc3BvbnNlMiIsImN1cnJlbnRTaGFyZVJlc3BvbnNlIiwic29ydCIsImIiLCJJbmRleCIsImNtcCIsImZpcnN0S2V5IiwiTWV0YWRhdGEiLCJtZXRhZGF0YSIsImVwaGVtUHVibGljS2V5IiwiaXYiLCJtYWMiLCJjaXBoZXJ0ZXh0IiwiU2hhcmUiLCJwYWRTdGFydCIsImRlYnVnIiwic2hhcmVzUmVzb2x2ZWQiLCJkZWNyeXB0ZWRTaGFyZXMiLCJjdXJyIiwiYWxsQ29tYmlzIiwicHJpdmF0ZUtleSIsImN1cnJlbnRDb21iaSIsImN1cnJlbnRDb21iaVNoYXJlcyIsInYiLCJzaGFyZXMiLCJpbmRpY2VzIiwiZGVyaXZlZFByaXZhdGVLZXkiLCJsYWdyYW5nZUludGVycG9sYXRpb24iLCJkZWNyeXB0ZWRQdWJLZXkiLCJkZWNyeXB0ZWRQdWJLZXlYIiwiZGVjcnlwdGVkUHViS2V5WSIsInJldHVybmVkS2V5IiwiZ2V0Tm9uY2UiLCJnZXRNZXRhZGF0YSIsInByaXZLZXkiLCJldGhBZGRyZXNzIiwiZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXkiLCJtZXRhZGF0YVJlc3BvbnNlIiwic2V0RGF0YSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaWciLCJzaWduIiwic2V0X2RhdGEiLCJzaWduYXR1cmUiLCJyIiwibm9kZUluZGV4Iiwic2VjcmV0IiwidXBwZXIiLCJsb3dlciIsIm11bCIsIm5lZyIsInRlbXAiLCJkZWx0YSIsImludm0iLCJwdWJsaWNLZXkiLCJlbmNvZGUiLCJldGhBZGRyZXNzTG93ZXIiLCJ0b0NoZWNrc3VtQWRkcmVzcyIsInB1YmxpY0tleVgiLCJwdWJsaWNLZXlZIiwiX3JlZjMiLCJpc0V4dGVuZGVkIiwiX25vbmNlIiwiZ2V0UG9zdGJveEtleUZyb20xT3V0T2YxIiwicHJpdktleUJOIiwibm9uY2VCTiIsIkxPR0lOX1BST1ZJREVSIiwiV0FMTEVUX1ZFUklGSUVSUyIsIkdPT0dMRSIsIkZBQ0VCT09LIiwiVFdJVENIIiwiUkVERElUIiwiRElTQ09SRCIsIkVNQUlMX1BBU1NXT1JETEVTUyIsIldBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQIiwiUEFZTUVOVF9QUk9WSURFUiIsIlNVUFBPUlRFRF9QQVlNRU5UX05FVFdPUksiLCJUT1JVU19CVUlMRF9FTlYiLCJQUk9EVUNUSU9OIiwiREVWRUxPUE1FTlQiLCJCSU5BTkNFIiwiVEVTVElORyIsIkxSQyIsIkJFVEEiLCJCVVRUT05fUE9TSVRJT04iLCJCT1RUT01fTEVGVCIsIlRPUF9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX1JJR0hUIiwiUFJPVklERVJfU1VQUE9SVEVEX0ZJQVRfQ1VSUkVOQ0lFUyIsImNyeXB0b0NvbXBhcmVDdXJyZW5jaWVzU2V0IiwiU2V0Iiwic3VwcG9ydGVkRmlhdEN1cnJlbmNpZXMiLCJwcm92aWRlciIsImN1cnJlbmN5IiwiaGFzIiwicGF5bWVudFByb3ZpZGVycyQxIiwibGluZTEiLCJsaW5lMiIsImxpbmUzIiwic3VwcG9ydFBhZ2UiLCJtaW5PcmRlclZhbHVlIiwibWF4T3JkZXJWYWx1ZSIsInZhbGlkQ3VycmVuY2llcyIsInZhbGlkQ3J5cHRvQ3VycmVuY2llc0J5Q2hhaW4iLCJkaXNwbGF5IiwiaW5jbHVkZUZlZXMiLCJhcGkiLCJlbmZvcmNlTWF4IiwicmVjZWl2ZUhpbnQiLCJzZWxsIiwiY29uZmlndXJhdGlvbiIsInN1cHBvcnRlZFZlcmlmaWVyTGlzdCIsInBheW1lbnRQcm92aWRlcnMiLCJ0cmFuc2xhdGlvbnMiLCJlbiIsImVtYmVkIiwiY29udGludWUiLCJhY3Rpb25SZXF1aXJlZCIsInBlbmRpbmdBY3Rpb24iLCJjb29raWVzUmVxdWlyZWQiLCJlbmFibGVDb29raWVzIiwiY2xpY2tIZXJlIiwiZGUiLCJqYSIsImtvIiwiemgiLCJwcm9kVG9ydXNVcmwiLCJsb2NhbFN0b3JhZ2VLZXlQcmVmaXgiLCJydW5PbkxvYWQiLCJmbiIsImRvY3VtZW50IiwiaHRtbFRvRWxlbWVudCIsImh0bWwiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0cmltbWVkSHRtbCIsInRyaW0iLCJpbm5lckhUTUwiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsImhhbmRsZVN0cmVhbSIsImV2ZW50TmFtZSIsImhhbmRsZXJXcmFwcGVyIiwiZG9jdW1lbnRSZWFkeSIsInJlYWR5U3RhdGUiLCJoYW5kbGVyQXJncyIsImhhbmRsZUV2ZW50IiwibWVzc2FnZXMiLCJkaXNjb25uZWN0ZWQiLCJwZXJtYW5lbnRseURpc2Nvbm5lY3RlZCIsInNlbmRTaXRlTWV0YWRhdGEiLCJ1bnN1cHBvcnRlZFN5bmMiLCJpbnZhbGlkRHVwbGV4U3RyZWFtIiwiaW52YWxpZE9wdGlvbnMiLCJtYXhFdmVudExpc3RlbmVycyIsInNob3VsZFNlbmRNZXRhZGF0YSIsImludmFsaWRSZXF1ZXN0QXJncyIsImludmFsaWRSZXF1ZXN0TWV0aG9kIiwiaW52YWxpZFJlcXVlc3RQYXJhbXMiLCJpbnZhbGlkTG9nZ2VyT2JqZWN0IiwiaW52YWxpZExvZ2dlck1ldGhvZCIsImNvbm5lY3RlZCIsImNoYWluSWQiLCJ3YXJuaW5ncyIsImVuYWJsZURlcHJlY2F0aW9uIiwic2VuZERlcHJlY2F0aW9uIiwiY2xvc2UiLCJuZXR3b3JrQ2hhbmdlZCIsIm5vdGlmaWNhdGlvbiIsInB1YmxpY0NvbmZpZ1N0b3JlIiwibG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmciLCJyZW1vdGVMYWJlbCIsImVtaXR0ZXIiLCJ3YXJuaW5nTXNnIiwibGlzdGVuZXJDb3VudCIsImdldFByZW9wZW5JbnN0YW5jZUlkIiwiZ2V0VG9ydXNVcmwiLCJidWlsZEVudiIsImludGVncml0eSIsInRvcnVzVXJsIiwibG9nTGV2ZWwiLCJ2ZXJzaW9uIiwidmVyc2lvblVzZWQiLCJnZXRVc2VyTGFuZ3VhZ2UiLCJ1c2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInVzZXJMYW5ndWFnZXMiLCJFTUlUVEVEX05PVElGSUNBVElPTlMiLCJOT09QIiwiRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPVyIsIkZFQVRVUkVTX0NPTkZJUk1fV0lORE9XIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInVud3JhcFJlc3VsdCIsIlRvcnVzSW5wYWdlUHJvdmlkZXIiLCJjb25uZWN0aW9uU3RyZWFtIiwianNvblJwY1N0cmVhbU5hbWUiLCJlbmFibGUiLCJleHBlcmltZW50YWxNZXRob2RzIiwic2VuZCIsImR1cGxleCIsImlzVG9ydXMiLCJzZXRNYXhMaXN0ZW5lcnMiLCJfZGVmYXVsdFN0YXRlIiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJfaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiX2hhbmRsZUNoYWluQ2hhbmdlZCIsIl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQiLCJfaGFuZGxlQ29ubmVjdCIsIl9oYW5kbGVEaXNjb25uZWN0IiwiX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QiLCJfc2VuZFN5bmMiLCJfcnBjUmVxdWVzdCIsIl93YXJuT2ZEZXByZWNhdGlvbiIsIl9pbml0aWFsaXplU3RhdGUiLCJyZXF1ZXN0Iiwic2VuZEFzeW5jIiwibXV4IiwiX3B1YmxpY0NvbmZpZ1N0b3JlIiwic3RvcmFnZUtleSIsImlzQ29ubmVjdGVkIiwianNvblJwY0Nvbm5lY3Rpb24iLCJycGNFbmdpbmUiLCJldGhFcnJvcnMiLCJfcnBjRW5naW5lIiwicGF5bG9hZCIsIl9zZW50V2FybmluZ3MiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwib25jZSIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJhY2NvdW50cyIsImlzVW5sb2NrZWQiLCJpbml0aWFsaXplZCIsImlzSW50ZXJuYWwiLCJfcGF5bG9hZCIsInRyeVByZW9wZW5IYW5kbGUiLCJtZXRob2RPclBheWxvYWQiLCJjYWxsYmFja09yQXJncyIsImlzUmVjb3ZlcmFibGUiLCJlcnJvck1lc3NhZ2UiLCJpc1Blcm1hbmVudGx5RGlzY29ubmVjdGVkIiwiRXRoZXJldW1ScGNFcnJvciIsInN0cmVhbU5hbWUiLCJpc0V0aEFjY291bnRzIiwiZmluYWxBY2NvdW50cyIsImFjY291bnQiLCJoYXNFbWl0dGVkQ29ubmVjdGlvbiIsImhhc2hlcyIsImludGVybmFsSGFzaGVzIiwiYWxnb3JpdGhtcyIsImFsZ29yaXRobSIsIm1haW4iLCJmaW5hbE9wdGlvbnMiLCJkZWxpbWl0ZXIiLCJmdWxsIiwiZGVmYXVsdHMiLCJzcmkiLCJvdXRwdXQiLCJQb3B1cEhhbmRsZXIiLCJmZWF0dXJlcyIsImR1YWxTY3JlZW5MZWZ0Iiwic2NyZWVuTGVmdCIsInNjcmVlblgiLCJkdWFsU2NyZWVuVG9wIiwic2NyZWVuVG9wIiwic2NyZWVuWSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwic2NyZWVuIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJsZWZ0IiwiYWJzIiwidG9wIiwiaCIsInciLCJnZXRQb3B1cEZlYXR1cmVzIiwid2luZG93VGltZXIiLCJpQ2xvc2VkV2luZG93IiwiX3NldHVwVGltZXIiLCJzZXRJbnRlcnZhbCIsImNsb3NlZCIsImNsZWFySW50ZXJ2YWwiLCJvcGVuIiwiX3RoaXMkd2luZG93IiwiZm9jdXMiLCJyZWRpcmVjdCIsImxvY2F0aW9uUmVwbGFjZU9uUmVkaXJlY3QiLCJsb2NhdGlvbiIsImltZ0V4aXN0cyIsImltZyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJlIiwiZ2V0U2l0ZU5hbWUiLCJzaXRlTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJtZXRhVGl0bGUiLCJ0aXRsZSIsImhvc3RuYW1lIiwiZ2V0U2l0ZUljb24iLCJpY29uIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbmQiLCJfaWNvbiIsIkJvb2xlYW4iLCJlbmdpbmUiLCJkb21haW5NZXRhZGF0YSIsImdldFNpdGVNZXRhZGF0YSIsIm9yaWdpbmFsRXJyb3IiLCJfZXhjbHVkZWQiLCJkZWZhdWx0VmVyaWZpZXJzIiwiaWZyYW1lSW50ZWdyaXR5IiwiVU5TQUZFX01FVEhPRFMiLCJpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSIsInN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0b3J1c0lmcmFtZUh0bWwiLCJjaGVjayIsImhhc2giLCJjcm9zc09yaWdpbiIsInJlbCIsInJlbExpc3QiLCJzdXBwb3J0cyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIlRvcnVzIiwiYnV0dG9uUG9zaXRpb24iLCJtb2RhbFpJbmRleCIsImlzTG9nZ2VkSW4iLCJpc0luaXRpYWxpemVkIiwidG9ydXNXaWRnZXRWaXNpYmlsaXR5IiwicmVxdWVzdGVkVmVyaWZpZXIiLCJjdXJyZW50VmVyaWZpZXIiLCJub2RlRGV0YWlsTWFuYWdlciIsInRvcnVzSnMiLCJhbGVydFpJbmRleCIsImlzSWZyYW1lRnVsbFNjcmVlbiIsImRhcHBTdG9yYWdlS2V5IiwiZW5hYmxlTG9nZ2luZyIsImVuYWJsZWRWZXJpZmllcnMiLCJob3N0IiwibmV0d29ya05hbWUiLCJibG9ja0V4cGxvcmVyIiwidGlja2VyIiwidGlja2VyTmFtZSIsImxvZ2luQ29uZmlnIiwic2hvd1RvcnVzQnV0dG9uIiwid2hpdGVMYWJlbCIsInNraXBUS2V5IiwidXNlTG9jYWxTdG9yYWdlIiwidXNlV2FsbGV0Q29ubmVjdCIsInNldERlZmF1bHRMZXZlbCIsImxvY2FsU3RvcmFnZUtleSIsInN0b3JlZEtleSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZW5lcmF0ZWRLZXkiLCJ0b3J1c0lmcmFtZVVybCIsImVuZHNXaXRoIiwidG9ydXNJZnJhbWUiLCJ0b3J1c0FsZXJ0Q29udGFpbmVyIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZUxpbmsiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJjdXN0b21UcmFuc2xhdGlvbnMiLCJsYW5ndWFnZVRyYW5zbGF0aW9ucyIsImVtYmVkVHJhbnNsYXRpb25zIiwiaGFuZGxlU2V0dXAiLCJfc2V0dXBXZWIzIiwiaW5pdFN0cmVhbSIsImNvbW11bmljYXRpb25NdXgiLCJnZXRTdHJlYW0iLCJzdWNjZXNzIiwiX2Rpc3BsYXlJZnJhbWUiLCJmZXRjaFVybCIsImNhY2hlIiwidGV4dCIsImNhbGN1bGF0ZWRJbnRlZ3JpdHkiLCJjbGVhckluaXQiLCJsb2dpbiIsImxvZ2luX2hpbnQiLCJsb2dpbkhpbnQiLCJldGhlcmV1bSIsImxvZ291dCIsInN0YXR1c1N0cmVhbSIsImxvZ2dlZEluIiwiaXNFbGVtZW50IiwiZWxlbWVudCIsIkVsZW1lbnQiLCJIVE1MRG9jdW1lbnQiLCJjb250YWlucyIsInJlbW92ZSIsInRvcnVzQWxlcnQiLCJoaWRlVG9ydXNCdXR0b24iLCJfc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXMiLCJzZXRQcm92aWRlciIsInJlc3QiLCJwcm92aWRlckNoYW5nZVN0cmVhbSIsInByZW9wZW5JbnN0YW5jZUlkIiwiX2hhbmRsZVdpbmRvdyIsIm92ZXJyaWRlIiwic2hvd1dhbGxldCIsInBhdGgiLCJzaG93V2FsbGV0U3RyZWFtIiwiZmluYWxQYXRoIiwiaW5zdGFuY2VJZCIsImZpbmFsVXJsIiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwiZ2V0Tm9kZURldGFpbHMiLCJ3YWxsZXRWZXJpZmllciIsIm9wZW5sb2dpblZlcmlmaWVyIiwiZXhpc3RpbmdWMVVzZXIiLCJnZXRVc2VyVHlwZUFuZEFkZHJlc3MiLCJ2MlVzZXIiLCJuZXdWMlVzZXIiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvQWNjZXNzU3RyZWFtIiwidXNlckluZm9BY2Nlc3NIYW5kbGVyIiwiYXBwcm92ZWQiLCJyZWplY3RlZCIsIm5ld1JlcXVlc3QiLCJ1c2VySW5mb1N0cmVhbSIsImhhbmRsZXJDaHVuayIsImluaXRpYXRlVG9wdXAiLCJpc1ZhbGlkIiwic2VsZWN0ZWRQcm92aWRlciIsInNlbGVjdGVkUGFyYW1zIiwiZmlhdFZhbHVlIiwicmVxdWVzdGVkT3JkZXJBbW91bnQiLCJwYXJzZUZsb2F0Iiwic2VsZWN0ZWRDdXJyZW5jeSIsInNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kiLCJmbGF0IiwiZmluYWxDcnlwdG9DdXJyZW5jeSIsInRvTG93ZXJDYXNlIiwidmFsaWRhdGVQYXltZW50UHJvdmlkZXIiLCJ0b3B1cFN0cmVhbSIsImxvZ2luUGFyYW1zIiwidXNlckluZm8iLCJsb2dpblByaXZLZXlTdHJlYW0iLCJ3YWxsZXRDb25uZWN0U3RyZWFtIiwid2luZG93U3RyZWFtIiwiaGFuZGxlZFdpbmRvdyIsIl9jcmVhdGVQb3B1cEJsb2NrQWxlcnQiLCJjbG9zZUhhbmRsZXIiLCJyZWNlaXZlZElkIiwiX3NldEVtYmVkV2hpdGVMYWJlbCIsInRoZW1lIiwiaXNEYXJrIiwiY29sb3JzIiwiY2xhc3NMaXN0IiwidG9ydXNCcmFuZDEiLCJ0b3J1c0dyYXkyIiwiX2dldExvZ29VcmwiLCJfdGhpcyR3aGl0ZUxhYmVsIiwiX3RoaXMkd2hpdGVMYWJlbCR0aGVtIiwibG9nb1VybCIsIl90aGlzJHdoaXRlTGFiZWwyIiwiX3RoaXMkd2hpdGVMYWJlbDMiLCJsb2dvTGlnaHQiLCJsb2dvRGFyayIsImlzRnVsbCIsInJpZ2h0IiwiYm90dG9tIiwibWV0YW1hc2tTdHJlYW0iLCJjb250ZW50V2luZG93IiwiY29tbXVuaWNhdGlvblN0cmVhbSIsImlucGFnZVByb3ZpZGVyIiwiZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllciIsIm9yaWdpbmFsTWV0aG9kIiwiaGFuZGxlTG9naW5DYiIsIl9zaG93TG9naW5Qb3B1cCIsImlzTG9naW5DYWxsYmFjayIsInByb3hpZWRJbnBhZ2VQcm92aWRlciIsIlByb3h5IiwiZGVsZXRlUHJvcGVydHkiLCJzZXR1cE11bHRpcGxleCIsImNhbGxlZEZyb21FbWJlZCIsImxvZ2luSGFuZGxlciIsIm9hdXRoU3RyZWFtIiwic3VjY2Vzc0FsZXJ0IiwiYnRuQ29udGFpbmVyIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiZnVsZmlsbGVkIiwic3RlcCIsImFkb3B0IiwiX19nZW5lcmF0b3IiLCJmIiwiZyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiaXRlcmF0b3IiLCJUeXBlRXJyb3IiLCJwb3AiLCJnZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UiLCJfYSIsIkVDIiwiYnJvd3NlckNyeXB0byIsImNyeXB0byIsIm1zQ3J5cHRvIiwic3VidGxlIiwid2Via2l0U3VidGxlIiwibm9kZUNyeXB0byIsIkVDX0dST1VQX09SREVSIiwiQnVmZmVyIiwiWkVSTzMyIiwiYWxsb2MiLCJhc3NlcnQiLCJjb25kaXRpb24iLCJpc1ZhbGlkUHJpdmF0ZUtleSIsImlzQnVmZmVyIiwiaXNTY2FsYXIiLCJjb21wYXJlIiwicmFuZG9tQnl0ZXMiLCJzaXplIiwiVWludDhBcnJheSIsImdldFJhbmRvbVZhbHVlcyIsInNoYTUxMiIsImNyZWF0ZUhhc2giLCJnZXRBZXMiLCJpbXBvcnRLZXkiLCJjcnlwdG9LZXkiLCJlbmNBbGdvcml0aG0iLCJjaXBoZXIiLCJjcmVhdGVDaXBoZXJpdiIsImZpcnN0Q2h1bmsiLCJzZWNvbmRDaHVuayIsImZpbmFsIiwiZGVjaXBoZXIiLCJjcmVhdGVEZWNpcGhlcml2IiwiYWVzQ2JjRW5jcnlwdCIsImFlc0NiY0RlY3J5cHQiLCJkZXJpdmUiLCJwcml2YXRlS2V5QSIsInB1YmxpY0tleUIiLCJrZXlBIiwia2V5QiIsIlB4IiwidG9BcnJheSIsIm9wdHMiLCJlbmNyeXB0aW9uS2V5IiwiaG1hYyIsImNyZWF0ZUhtYWMiLCJiMSIsImIyIiwiZXF1YWxDb25zdFRpbWUiLCJobWFjU2hhMjU2VmVyaWZ5IiwibWFjR29vZCIsInBhZF9zdHJpbmdfMSIsImlucHV0IiwiZW5jb2RpbmciLCJmcm9tQmFzZTY0IiwidG9CYXNlNjQiLCJiYXNlNjR1cmwiLCJiYXNlNjQiLCJkZWNvZGUiLCJ0b0J1ZmZlciIsInN0cmluZ0xlbmd0aCIsImRpZmYiLCJwb3NpdGlvbiIsInBhZExlbmd0aCIsInBhZGRlZFN0cmluZ0xlbmd0aCIsImJ1ZmZlciIsIm1vZHVsZSIsIm9iamVjdFRvU3RyaW5nIiwiYXJnIiwiaXNCb29sZWFuIiwiaXNOdWxsIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJpc051bWJlciIsImlzU3RyaW5nIiwiaXNTeW1ib2wiLCJpc1VuZGVmaW5lZCIsImlzUmVnRXhwIiwicmUiLCJpc09iamVjdCIsImlzRGF0ZSIsImQiLCJpc0Vycm9yIiwiaXNGdW5jdGlvbiIsImlzUHJpbWl0aXZlIiwiZW9zIiwid3MiLCJfd3JpdGFibGVTdGF0ZSIsInJzIiwiX3JlYWRhYmxlU3RhdGUiLCJjYW5jZWxsZWQiLCJvbmxlZ2FjeWZpbmlzaCIsIm9uZmluaXNoIiwib25lbmQiLCJvbmV4aXQiLCJleGl0Q29kZSIsIm9uY2xvc2UiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJvbmNsb3NlbmV4dHRpY2siLCJlbmRlZCIsImRlc3Ryb3llZCIsIm9ucmVxdWVzdCIsInNldEhlYWRlciIsImFib3J0IiwiaXNSZXF1ZXN0Iiwic3RkaW8iLCJpc0NoaWxkUHJvY2VzcyIsImVxdWFsIiwiUmVnRXhwIiwiZmxhZ3MiLCJ2YWx1ZU9mIiwiaXNTdHJlYW0iLCJ0cmFuc2Zvcm0iLCJfdHJhbnNmb3JtIiwiSEFTSF9VTkRFRklORUQiLCJNQVhfU0FGRV9JTlRFR0VSIiwiYXJnc1RhZyIsImZ1bmNUYWciLCJvYmplY3RUYWciLCJyZUlzSG9zdEN0b3IiLCJyZUlzVWludCIsInR5cGVkQXJyYXlUYWdzIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwic2VsZiIsInJvb3QiLCJGdW5jdGlvbiIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsImZyZWVQcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImZ1bmMiLCJhcnJheVByb3RvIiwiZnVuY1Byb3RvIiwib2JqZWN0UHJvdG8iLCJjb3JlSnNEYXRhIiwiZnVuY1RvU3RyaW5nIiwibWFza1NyY0tleSIsInVpZCIsImV4ZWMiLCJJRV9QUk9UTyIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwib2JqZWN0Q3RvclN0cmluZyIsInJlSXNOYXRpdmUiLCJhbGxvY1Vuc2FmZSIsImdldFByb3RvdHlwZSIsIm92ZXJBcmciLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdENyZWF0ZSIsInNwbGljZSIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXROYXRpdmUiLCJuYXRpdmVJc0J1ZmZlciIsIm5hdGl2ZU1heCIsIm1heCIsIm5hdGl2ZU5vdyIsIk1hcCIsIm5hdGl2ZUNyZWF0ZSIsImJhc2VDcmVhdGUiLCJwcm90byIsIkhhc2giLCJlbnRyaWVzIiwiY2xlYXIiLCJlbnRyeSIsIkxpc3RDYWNoZSIsIk1hcENhY2hlIiwiU3RhY2siLCJfX2RhdGFfXyIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNBcmd1bWVudHMiLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIml0ZXJhdGVlIiwiYmFzZVRpbWVzIiwiU3RyaW5nIiwiaXNJbmRleCIsImFzc2lnbk1lcmdlVmFsdWUiLCJlcSIsImJhc2VBc3NpZ25WYWx1ZSIsImFzc2lnblZhbHVlIiwib2JqVmFsdWUiLCJhc3NvY0luZGV4T2YiLCJhcnJheSIsImdldE1hcERhdGEiLCJwYWlycyIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlRm9yIiwiZnJvbVJpZ2h0Iiwia2V5c0Z1bmMiLCJpdGVyYWJsZSIsInByb3BzIiwiY3JlYXRlQmFzZUZvciIsImJhc2VHZXRUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwiZ2V0UmF3VGFnIiwiYmFzZUlzQXJndW1lbnRzIiwiaXNPYmplY3RMaWtlIiwiYmFzZUlzTmF0aXZlIiwiaXNNYXNrZWQiLCJ0ZXN0IiwidG9Tb3VyY2UiLCJiYXNlS2V5c0luIiwibmF0aXZlS2V5c0luIiwiaXNQcm90byIsImlzUHJvdG90eXBlIiwiYmFzZU1lcmdlIiwic3JjSW5kZXgiLCJjdXN0b21pemVyIiwic3JjVmFsdWUiLCJtZXJnZUZ1bmMiLCJzYWZlR2V0Iiwic3RhY2tlZCIsIm5ld1ZhbHVlIiwiaXNDb21tb24iLCJpc1R5cGVkIiwiaXNBcnJheUxpa2UiLCJpc0FycmF5TGlrZU9iamVjdCIsImlzRGVlcCIsImNsb25lQnVmZmVyIiwidHlwZWRBcnJheSIsImFycmF5QnVmZmVyIiwiYnl0ZUxlbmd0aCIsImNsb25lQXJyYXlCdWZmZXIiLCJieXRlT2Zmc2V0IiwiY2xvbmVUeXBlZEFycmF5IiwiY29weUFycmF5IiwiQ3RvciIsImlzUGxhaW5PYmplY3QiLCJpc05ldyIsImNvcHlPYmplY3QiLCJrZXlzSW4iLCJ0b1BsYWluT2JqZWN0IiwiaW5pdENsb25lT2JqZWN0IiwiYmFzZU1lcmdlRGVlcCIsImJhc2VSZXN0Iiwic3RhcnQiLCJzZXRUb1N0cmluZyIsIm90aGVyQXJncyIsIm92ZXJSZXN0IiwiaWRlbnRpdHkiLCJpc0tleWFibGUiLCJnZXRWYWx1ZSIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicmVtYWluaW5nIiwic2hvcnRPdXQiLCJzdHJpbmciLCJjb25zdGFudCIsIm90aGVyIiwiaXNMZW5ndGgiLCJiYXNlVW5hcnkiLCJtZXJnZSIsImFzc2lnbmVyIiwic291cmNlcyIsImd1YXJkIiwiaXNJdGVyYXRlZUNhbGwiLCJjcmVhdGVBc3NpZ25lciIsImRlZmluaXRpb24iLCJ1bmRlZmluZWRUeXBlIiwiaXNJRSIsInVzZXJBZ2VudCIsImxvZ01ldGhvZHMiLCJiaW5kTWV0aG9kIiwibWV0aG9kTmFtZSIsInRyYWNlRm9ySUUiLCJ0cmFjZSIsInJlYWxNZXRob2QiLCJyZXBsYWNlTG9nZ2luZ01ldGhvZHMiLCJsZXZlbCIsImxvZ2dlck5hbWUiLCJtZXRob2RGYWN0b3J5IiwiZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlcyIsImRlZmF1bHRNZXRob2RGYWN0b3J5IiwiTG9nZ2VyIiwiZGVmYXVsdExldmVsIiwiZmFjdG9yeSIsImN1cnJlbnRMZXZlbCIsInBlcnNpc3RMZXZlbElmUG9zc2libGUiLCJsZXZlbE51bSIsImxldmVsTmFtZSIsImlnbm9yZSIsImNvb2tpZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldFBlcnNpc3RlZExldmVsIiwic3RvcmVkTGV2ZWwiLCJjbGVhclBlcnNpc3RlZExldmVsIiwiZ2V0TGV2ZWwiLCJwZXJzaXN0IiwiU0lMRU5UIiwicmVzZXRMZXZlbCIsIlRSQUNFIiwiaW5pdGlhbExldmVsIiwiZGVmYXVsdExvZ2dlciIsIl9sb2dnZXJzQnlOYW1lIiwiZ2V0TG9nZ2VyIiwibG9nZ2VyIiwiX2xvZyIsIm5vQ29uZmxpY3QiLCJnZXRMb2dnZXJzIiwid3JhcHB5IiwiY2FsbGVkIiwib25jZVN0cmljdCIsIm9uY2VFcnJvciIsInN0cmljdCIsImFyZzEiLCJhcmcyIiwiYXJnMyIsImZzIiwiYW5jaWVudCIsImlzRm4iLCJkZXN0cm95ZXIiLCJyZWFkaW5nIiwid3JpdGluZyIsIlJlYWRTdHJlYW0iLCJXcml0ZVN0cmVhbSIsImlzRlMiLCJ0byIsInN0cmVhbXMiLCJkZXN0cm95cyIsInBuYSIsIm9iamVjdEtleXMiLCJ1dGlsIiwiaW5oZXJpdHMiLCJSZWFkYWJsZSIsIldyaXRhYmxlIiwiYWxsb3dIYWxmT3BlbiIsIm9uRW5kTlQiLCJoaWdoV2F0ZXJNYXJrIiwiUGFzc1Rocm91Z2giLCJUcmFuc2Zvcm0iLCJSZWFkYWJsZVN0YXRlIiwiRUVsaXN0ZW5lckNvdW50IiwiU3RyZWFtIiwiT3VyVWludDhBcnJheSIsImRlYnVnVXRpbCIsImRlYnVnbG9nIiwiQnVmZmVyTGlzdCIsImRlc3Ryb3lJbXBsIiwiU3RyaW5nRGVjb2RlciIsImtQcm94eUV2ZW50cyIsImlzRHVwbGV4IiwicmVhZGFibGVPYmplY3RNb2RlIiwiaHdtIiwicmVhZGFibGVId20iLCJyZWFkYWJsZUhpZ2hXYXRlck1hcmsiLCJkZWZhdWx0SHdtIiwicGlwZXMiLCJwaXBlc0NvdW50IiwiZmxvd2luZyIsImVuZEVtaXR0ZWQiLCJzeW5jIiwibmVlZFJlYWRhYmxlIiwiZW1pdHRlZFJlYWRhYmxlIiwicmVhZGFibGVMaXN0ZW5pbmciLCJyZXN1bWVTY2hlZHVsZWQiLCJkZWZhdWx0RW5jb2RpbmciLCJhd2FpdERyYWluIiwicmVhZGluZ01vcmUiLCJkZWNvZGVyIiwicmVhZGFibGVBZGRDaHVuayIsImFkZFRvRnJvbnQiLCJza2lwQ2h1bmtDaGVjayIsImVtaXRSZWFkYWJsZSIsIm9uRW9mQ2h1bmsiLCJfaXNVaW50OEFycmF5IiwiY2h1bmtJbnZhbGlkIiwiX3VpbnQ4QXJyYXlUb0J1ZmZlciIsImFkZENodW5rIiwibWF5YmVSZWFkTW9yZSIsIm5lZWRNb3JlRGF0YSIsInVuc2hpZnQiLCJfdW5kZXN0cm95IiwidW5kZXN0cm95IiwiaXNQYXVzZWQiLCJzZXRFbmNvZGluZyIsImVuYyIsIk1BWF9IV00iLCJob3dNdWNoVG9SZWFkIiwiY29tcHV0ZU5ld0hpZ2hXYXRlck1hcmsiLCJlbWl0UmVhZGFibGVfIiwiZmxvdyIsIm1heWJlUmVhZE1vcmVfIiwiblJlYWRpbmdOZXh0VGljayIsInJlc3VtZV8iLCJmcm9tTGlzdCIsInJldCIsInNoaWZ0IiwibGlzdCIsImhhc1N0cmluZ3MiLCJjIiwibmIiLCJ0YWlsIiwiY29weUZyb21CdWZmZXJTdHJpbmciLCJidWYiLCJjb3B5RnJvbUJ1ZmZlciIsImZyb21MaXN0UGFydGlhbCIsImVuZFJlYWRhYmxlIiwiZW5kUmVhZGFibGVOVCIsInhzIiwibCIsInBhcnNlSW50Iiwibk9yaWciLCJkb1JlYWQiLCJwaXBlT3B0cyIsImVuZEZuIiwic3Rkb3V0Iiwic3RkZXJyIiwidW5waXBlIiwib251bnBpcGUiLCJ1bnBpcGVJbmZvIiwiaGFzVW5waXBlZCIsIm9uZHJhaW4iLCJvbmRhdGEiLCJjbGVhbmVkVXAiLCJuZWVkRHJhaW4iLCJjbGVhbnVwIiwicGlwZU9uRHJhaW4iLCJpbmNyZWFzZWRBd2FpdERyYWluIiwicGF1c2UiLCJkZXN0cyIsImV2Iiwid3JhcCIsIl90aGlzIiwicGF1c2VkIiwiX2Zyb21MaXN0IiwiYWZ0ZXJUcmFuc2Zvcm0iLCJ0cyIsIl90cmFuc2Zvcm1TdGF0ZSIsInRyYW5zZm9ybWluZyIsIndyaXRlY2IiLCJ3cml0ZWNodW5rIiwibmVlZFRyYW5zZm9ybSIsIndyaXRlZW5jb2RpbmciLCJmbHVzaCIsIl9mbHVzaCIsInByZWZpbmlzaCIsIl90aGlzMiIsImVycjIiLCJDb3JrZWRSZXF1ZXN0IiwiY29ya1JlcSIsInBlbmRpbmdjYiIsImNvcmtlZFJlcXVlc3RzRnJlZSIsIm9uQ29ya2VkRmluaXNoIiwiYXN5bmNXcml0ZSIsImJyb3dzZXIiLCJzZXRJbW1lZGlhdGUiLCJXcml0YWJsZVN0YXRlIiwiaW50ZXJuYWxVdGlsIiwiZGVwcmVjYXRlIiwibm9wIiwid3JpdGFibGVPYmplY3RNb2RlIiwid3JpdGFibGVId20iLCJ3cml0YWJsZUhpZ2hXYXRlck1hcmsiLCJmaW5hbENhbGxlZCIsImVuZGluZyIsImZpbmlzaGVkIiwibm9EZWNvZGUiLCJkZWNvZGVTdHJpbmdzIiwiY29ya2VkIiwiYnVmZmVyUHJvY2Vzc2luZyIsIm9ud3JpdGUiLCJ3cml0ZWxlbiIsIm9ud3JpdGVTdGF0ZVVwZGF0ZSIsImZpbmlzaE1heWJlIiwiZXJyb3JFbWl0dGVkIiwib253cml0ZUVycm9yIiwibmVlZEZpbmlzaCIsImJ1ZmZlcmVkUmVxdWVzdCIsImNsZWFyQnVmZmVyIiwiYWZ0ZXJXcml0ZSIsImxhc3RCdWZmZXJlZFJlcXVlc3QiLCJwcmVmaW5pc2hlZCIsImJ1ZmZlcmVkUmVxdWVzdENvdW50IiwicmVhbEhhc0luc3RhbmNlIiwid3JpdGV2IiwiX3dyaXRldiIsIl9maW5hbCIsImRvV3JpdGUiLCJvbndyaXRlRHJhaW4iLCJob2xkZXIiLCJhbGxCdWZmZXJzIiwiaXNCdWYiLCJjYWxsRmluYWwiLCJuZWVkIiwiZ2V0QnVmZmVyIiwiY3VycmVudCIsIm91dCIsImhhc0luc3RhbmNlIiwid3JpdGVBZnRlckVuZCIsInZhbGlkIiwidmFsaWRDaHVuayIsIm5ld0NodW5rIiwiZGVjb2RlQ2h1bmsiLCJsYXN0Iiwid3JpdGVPckJ1ZmZlciIsInNldERlZmF1bHRFbmNvZGluZyIsImVuZFdyaXRhYmxlIiwiY29weUJ1ZmZlciIsIm9mZnNldCIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnNwZWN0IiwiY3VzdG9tIiwiZW1pdEVycm9yTlQiLCJyZWFkYWJsZURlc3Ryb3llZCIsIndyaXRhYmxlRGVzdHJveWVkIiwiaXNFbmNvZGluZyIsIm5lbmMiLCJyZXRyaWVkIiwiX25vcm1hbGl6ZUVuY29kaW5nIiwibm9ybWFsaXplRW5jb2RpbmciLCJ1dGYxNlRleHQiLCJ1dGYxNkVuZCIsImZpbGxMYXN0IiwidXRmOEZpbGxMYXN0IiwiYmFzZTY0VGV4dCIsImJhc2U2NEVuZCIsInNpbXBsZVdyaXRlIiwic2ltcGxlRW5kIiwibGFzdE5lZWQiLCJsYXN0VG90YWwiLCJsYXN0Q2hhciIsInV0ZjhDaGVja0J5dGUiLCJieXRlIiwidXRmOENoZWNrRXh0cmFCeXRlcyIsImNoYXJDb2RlQXQiLCJ0b3RhbCIsInV0ZjhDaGVja0luY29tcGxldGUiLCJ4dGVuZCIsIkRlc3Ryb3lhYmxlVHJhbnNmb3JtIiwiX2Rlc3Ryb3llZCIsInRocm91Z2gyIiwiY29uc3RydWN0IiwidDIiLCJjdG9yIiwiVGhyb3VnaDIiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==