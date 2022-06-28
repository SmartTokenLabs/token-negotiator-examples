/*! For license information please see 96.d5c37e8f.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 96 ], {
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
  91096: (e, t, r) => {
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
      getTorusProviderInstance: () => Kt
    });
    var o = r(31692);
    var a = r.n(o);
    var s = r(18269);
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
        let {network: e = c.MAINNET, proxyAddress: t = "0xf20336e16B5182637f09821c27BDe29b0AFcfe80"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        let r;
        i(this, "_currentEpoch", "19"), i(this, "_torusNodeEndpoints", [ "https://torus-19.torusnode.com/jrpc", "https://torus-node.ens.domains/jrpc", "https://torus-node.matic.network/jrpc", "https://torus.zilliqa.network/jrpc", "https://torus-mainnet.cosmos.network/jrpc", "https://torus2.etherscan.com/jrpc", "https://torus-node-v2.skalelabs.com/jrpc", "https://torus-node.binancex.dev/jrpc", "https://torusnode.ont.io/jrpc" ]), 
        i(this, "_torusNodePub", [ {
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
        } ]), i(this, "_torusIndexes", [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]), i(this, "_network", c.MAINNET), i(this, "nodeListAddress", void 0), 
        i(this, "updated", void 0), i(this, "nodeListContract", void 0);
        try {
          r = new URL(e).href;
        } catch (n) {
          const t = "b8cdb0e4cff24599a286bf8e87ff1c96";
          r = "https://".concat(e, ".infura.io/v3/").concat(t);
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
      async getNodeDetails(e) {
        let {skip: t = !1, verifier: r, verifierId: n} = e;
        try {
          if (t && this._network === c.MAINNET) return this._nodeDetails;
          if (this.updated && this._network === c.MAINNET) return this._nodeDetails;
          const e = (0, s.keccak256)(n);
          const i = await this.nodeListContract.methods.getNodeSet(r, e).call();
          const {currentEpoch: o, torusNodeEndpoints: a, torusNodePubX: u, torusNodePubY: l, torusIndexes: d} = i;
          this._currentEpoch = o, this._torusIndexes = d.map((e => Number(e)));
          const h = [];
          const f = [];
          for (let t = 0; t < a.length; t += 1) {
            const e = a[t];
            const r = u[t];
            const n = l[t];
            const i = "https://".concat(e.split(":")[0], "/jrpc");
            h.push(i), f.push({
              X: (0, s.toHex)(r).replace("0x", ""),
              Y: (0, s.toHex)(n).replace("0x", "")
            });
          }
          return this._torusNodeEndpoints = h, this._torusNodePub = f, this.updated = !0, this._nodeDetails;
        } catch (i) {
          if (this._network === c.MAINNET) return this._nodeDetails;
          throw i;
        }
      }
    }
    var d = r(72378);
    var h = r.n(d);
    var f = r(2043);
    var p = r.n(f);
    function v(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function g(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? v(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    const y = p().getLogger("http-helpers");
    y.setLevel(f.levels.INFO);
    let b = "torus-default";
    let m = "";
    function w(e) {
      m = e;
    }
    function _(e) {
      b = e;
    }
    function k() {
      const e = {};
      return b && (e["x-api-key"] = b), m && (e["x-embed-host"] = m), e;
    }
    function S(e) {
      y.info("Response: ".concat(e.status, " ").concat(e.statusText)), y.info("Url: ".concat(e.url));
    }
    const x = (e, t) => {
      const r = new Promise(((t, r) => {
        const n = setTimeout((() => {
          clearTimeout(n), r(new Error("Timed out in ".concat(e, "ms")));
        }), e);
      }));
      return Promise.race([ t, r ]);
    };
    const O = async function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const n = {
        mode: "cors",
        headers: {}
      };
      r.useAPIKey && (n.headers = g(g({}, n.headers), k()));
      const i = h()(n, t, {
        method: "GET"
      });
      const o = await fetch(e, i);
      if (o.ok) return o.json();
      throw S(o), o;
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
      n.useAPIKey && (i.headers = g(g({}, i.headers), k()));
      const o = h()(i, r, {
        method: "POST"
      });
      return n.isUrlEncodedData ? (o.body = t, "application/json; charset=utf-8" === o.headers["Content-Type"] && delete o.headers["Content-Type"]) : o.body = JSON.stringify(t), 
      x(n.timeout || 6e4, fetch(e, o).then((e => {
        if (e.ok) return e.json();
        throw S(e), e;
      })));
    };
    const j = (e, t) => ({
      jsonrpc: "2.0",
      method: e,
      id: 10,
      params: t
    });
    var E = r(88473);
    var C = r(61798);
    var A = r.n(C);
    r(45772);
    var T = r(95811);
    var I = r.n(T);
    r(48764).Buffer;
    URL;
    var M = r(17187);
    var L = r(4445);
    var R = r.n(L);
    var D = r(79826);
    var N = r(12840);
    var U = r.n(N);
    var q = r(30778);
    var B = r.n(q);
    var W = r(74286);
    var F = r.n(W);
    function H() {}
    const V = "ACK";
    class K extends E.Duplex {
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
        this.cork(), this._write("BRK", null, H), this._haveSyn = !1, this._init = !1;
      }
      _handShake() {
        this._write("SYN", null, H), this.cork();
      }
      _onData(e) {
        if (this._init) if ("BRK" === e) this._break(); else try {
          this.push(e);
        } catch (t) {
          this.emit("error", t);
        } else "SYN" === e ? (this._haveSyn = !0, this._write(V, null, H)) : e === V && (this._init = !0, this._haveSyn || this._write(V, null, H), 
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
    function z(e, t, r) {
      try {
        Reflect.apply(e, t, r);
      } catch (n) {
        setTimeout((() => {
          throw n;
        }));
      }
    }
    class Y extends M.EventEmitter {
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
        if ("function" == typeof a) z(a, this, i); else {
          const e = a.length;
          const t = function(e) {
            const t = e.length;
            const r = new Array(t);
            for (let n = 0; n < t; n += 1) r[n] = e[n];
            return r;
          }(a);
          for (let r = 0; r < e; r += 1) z(t[r], this, i);
        }
        return !0;
      }
    }
    class G extends Error {
      constructor(e) {
        let {code: t, message: r, data: n} = e;
        if (!Number.isInteger(t)) throw new Error("code must be an integer");
        if (!r || "string" != typeof r) throw new Error("message must be string");
        super(r), i(this, "code", void 0), i(this, "data", void 0), this.code = t, void 0 !== n && (this.data = n);
      }
      toString() {
        return R()({
          code: this.code,
          message: this.message,
          data: this.data,
          stack: this.stack
        });
      }
    }
    function X() {
      const e = {};
      const t = new Y;
      const r = new E.Duplex({
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
    function J() {
      return (e, t, r, n) => {
        const i = e.id;
        const o = (() => A()(32).toString("hex"))();
        e.id = o, t.id = o, r((r => {
          e.id = i, t.id = i, r();
        }));
      };
    }
    function Z(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    class $ extends Y {
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
            r && (t.error = (0, D.serializeError)(r)), i([ r, !0 ]);
          };
          const a = e => {
            t.error ? o(t.error) : (e && ("function" != typeof e && o(new G({
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
        if (!("result" in t) && !("error" in t)) throw new G({
          code: -32603,
          message: "Response has no error or result for request"
        });
        if (!r) throw new G({
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
          const e = new G({
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
          const r = new G({
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
            t % 2 ? Z(Object(r), !0).forEach((function(t) {
              i(e, t, r[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(t) {
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
        return o && (delete n.result, n.error || (n.error = (0, D.serializeError)(o))), t(o, n);
      }
      async _processRequest(e, t) {
        const [r, n, i] = await $._runAllMiddleware(e, t, this._middleware);
        if ($._checkForCompletion(e, t, n), await $._runReturnHandlers(i), r) throw r;
      }
    }
    class Q extends E.Duplex {
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
    function ee(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function te(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ee(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    const re = Symbol("IGNORE_SUBSTREAM");
    class ne extends E.Duplex {
      constructor() {
        super(te(te({}, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), {}, {
          objectMode: !0
        })), i(this, "_substreams", void 0), i(this, "getStream", void 0), this._substreams = {};
      }
      createStream(e) {
        if (!e) throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e]) throw new Error("ObjectMultiplex - Substream for name \"".concat(e, "\" already exists"));
        const t = new Q({
          parent: this,
          name: e
        });
        return this._substreams[e] = t, function(e, t) {
          const r = B()(t);
          U()(e, {
            readable: !1
          }, r), U()(e, {
            writable: !1
          }, r);
        }(this, (e => t.destroy(e || void 0))), t;
      }
      ignoreStream(e) {
        if (!e) throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e]) throw new Error("ObjectMultiplex - Substream for name \"".concat(e, "\" already exists"));
        this._substreams[e] = re;
      }
      _read() {}
      _write(e, t, r) {
        const {name: n, data: i} = e;
        if (!n) return window.console.warn("ObjectMultiplex - malformed chunk without name \"".concat(e, "\"")), r();
        const o = this._substreams[n];
        return o ? (o !== re && o.push(i), r()) : (window.console.warn("ObjectMultiplex - orphaned data for stream \"".concat(n, "\"")), 
        r());
      }
    }
    function ie(e) {
      return ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, ie(e);
    }
    function oe(e, t, r, n, i, o, a) {
      try {
        var s = e[o](a);
        var c = s.value;
      } catch (u) {
        return void r(u);
      }
      s.done ? t(c) : Promise.resolve(c).then(n, i);
    }
    function ae(e) {
      return function() {
        var t = this, r = arguments;
        return new Promise((function(n, i) {
          var o = e.apply(t, r);
          function a(e) {
            oe(o, n, i, a, s, "next", e);
          }
          function s(e) {
            oe(o, n, i, a, s, "throw", e);
          }
          a(void 0);
        }));
      };
    }
    function se(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function ce(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function ue(e, t, r) {
      return t && ce(e.prototype, t), r && ce(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }
    var le = r(64687);
    var de = r.n(le);
    var he = r(2450);
    var fe = r(13550);
    var pe = r.n(fe);
    var ve = r(86266);
    var ge = r(67266);
    var ye = r.n(ge);
    function be(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function me(e, t) {
      return me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e;
      }, me(e, t);
    }
    function we(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t && me(e, t);
    }
    function _e(e, t) {
      if (t && ("object" === ie(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return be(e);
    }
    function ke(e) {
      return ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, ke(e);
    }
    function Se() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
      } catch (e) {
        return !1;
      }
    }
    function xe(e, t, r) {
      return xe = Se() ? Reflect.construct.bind() : function(e, t, r) {
        var n = [ null ];
        n.push.apply(n, t);
        var i = new (Function.bind.apply(e, n));
        return r && me(i, r.prototype), i;
      }, xe.apply(null, arguments);
    }
    function Oe(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return Oe = function(e) {
        if (null === e || !function(e) {
          return -1 !== Function.toString.call(e).indexOf("[native code]");
        }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return xe(e, arguments, ke(this).constructor);
        }
        return r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), me(r, e);
      }, Oe(e);
    }
    function Pe(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function je(e) {
      return function(e) {
        if (Array.isArray(e)) return Pe(e);
      }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function(e, t) {
        if (e) {
          if ("string" == typeof e) return Pe(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pe(e, t) : void 0;
        }
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    var Ee = r(48764).Buffer;
    var Ce = p().getLogger("torus.js");
    function Ae(e) {
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
        var r, n = ke(e);
        if (t) {
          var i = ke(this).constructor;
          r = Reflect.construct(n, arguments, i);
        } else r = n.apply(this, arguments);
        return _e(this, r);
      };
    }
    Ce.disableAll();
    var Te = function(e) {
      we(r, e);
      var t = Ae(r);
      function r(e) {
        var n;
        var o = e.errors, a = e.responses, s = e.predicate;
        return se(this, r), i(be(n = t.call(this, "Unable to resolve enough promises.")), "errors", void 0), i(be(n), "responses", void 0), 
        i(be(n), "predicate", void 0), n.errors = o, n.responses = a, n.predicate = s, n;
      }
      return ue(r);
    }(Oe(Error));
    var Ie = function(e, t) {
      return new Promise((function(r, n) {
        var i = 0;
        var o = {
          resolved: !1
        };
        var a = new Array(e.length).fill(void 0);
        var s = new Array(e.length).fill(void 0);
        var c;
        return e.forEach((function(u, l) {
          return u.then((function(e) {
            s[l] = e;
          })).catch((function(e) {
            a[l] = e;
          })).finally((function() {
            if (!o.resolved) return t(s.slice(0), o).then((function(e) {
              o.resolved = !0, r(e);
            })).catch((function(e) {
              c = e;
            })).finally((function() {
              if ((i += 1) === e.length) {
                var t = Object.values(s.reduce((function(e, t) {
                  if (t) {
                    var r;
                    var n = t.id, i = t.error;
                    (null == i || null === (r = i.data) || void 0 === r ? void 0 : r.length) > 0 && (i.data.startsWith("Error occurred while verifying params") ? e[n] = function(e) {
                      return e.charAt(0).toUpperCase() + e.slice(1);
                    }(i.data) : e[n] = i.data);
                  }
                  return e;
                }), {}));
                if (t.length > 0) {
                  var r = t.length > 1 ? "\n".concat(t.map((function(e) {
                    return "• ".concat(e);
                  })).join("\n")) : t[0];
                  n(new Error(r));
                } else {
                  var o;
                  n(new Te({
                    errors: a,
                    responses: s,
                    predicate: (null === (o = c) || void 0 === o ? void 0 : o.message) || c
                  }));
                }
              }
            }));
          }));
        }));
      }));
    };
    function Me(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function Le(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Me(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Me(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    function Re(e) {
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
        var r, n = ke(e);
        if (t) {
          var i = ke(this).constructor;
          r = Reflect.construct(n, arguments, i);
        } else r = n.apply(this, arguments);
        return _e(this, r);
      };
    }
    var De = function(e) {
      we(r, e);
      var t = Re(r);
      function r() {
        return se(this, r), t.apply(this, arguments);
      }
      return ue(r);
    }(Oe(Error));
    var Ne = function e(t, r) {
      var n = t;
      if ("number" == typeof n && (n = Array.from({
        length: n
      }, (function(e, t) {
        return t;
      }))), r > n.length || r <= 0) return [];
      if (r === n.length) return [ n ];
      if (1 === r) return n.reduce((function(e, t) {
        return [].concat(je(e), [ [ t ] ]);
      }), []);
      var i = [];
      var o = [];
      for (var a = 0; a <= n.length - r + 1; a += 1) {
        o = e(n.slice(a + 1), r - 1);
        for (var s = 0; s < o.length; s += 1) i.push([ n[a] ].concat(je(o[s])));
      }
      return i;
    };
    var Ue = function(e, t) {
      var r = {};
      for (var n = 0; n < e.length; n += 1) {
        var i = ye()(e[n]);
        if (r[i] = r[i] ? r[i] + 1 : 1, r[i] === t) return e[n];
      }
    };
    var qe = function() {
      var e = ae(de().mark((function e(t, r, n) {
        var i;
        return de().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return i = t.map((function(e) {
              return P(e, j("VerifierLookupRequest", {
                verifier: r,
                verifier_id: n.toString()
              })).catch((function(e) {
                return Ce.error("lookup request failed", e);
              }));
            })), e.abrupt("return", Ie(i, (function(e) {
              var r = e.filter((function(e) {
                return e;
              }));
              var n = Ue(r.map((function(e) {
                return e && e.error;
              })), 1 + ~~(t.length / 2));
              var i = Ue(r.map((function(e) {
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
    var Be = function(e, t, r, n) {
      return new Promise((function(i, o) {
        setTimeout((function() {
          qe(e, t, r).then(i).catch(o);
        }), n);
      }));
    };
    var We = function() {
      var e = ae(de().mark((function e(t) {
        var r, n, i, o, a, s, c, u, l, d, h, f;
        return de().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (r = t.endpoints, n = t.torusNodePubs, i = t.lastPoint, o = t.firstPoint, a = t.verifier, s = t.verifierId, c = t.signerHost, 
            u = t.network, void 0 === i ? (l = Math.floor(Math.random() * r.length), d = l) : l = i % r.length, l !== o) {
              e.next = 4;
              break;
            }
            throw new Error("Looped through all");

           case 4:
            return void 0 !== o && (d = o), h = j("KeyAssign", {
              verifier: a,
              verifier_id: s.toString()
            }), e.prev = 6, e.next = 9, P(c, h, {
              headers: {
                pubKeyX: n[l].X,
                pubKeyY: n[l].Y,
                network: u
              }
            }, {
              useAPIKey: !0
            });

           case 9:
            return f = e.sent, e.next = 12, P(r[l], Le(Le({}, h), f), {
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            });

           case 12:
            return e.abrupt("return", e.sent);

           case 15:
            if (e.prev = 15, e.t0 = e.catch(6), Ce.error(e.t0), ![ "Timed out", "TypeError: Failed to fetch", "TypeError: cancelled", "TypeError: NetworkError when attempting to fetch resource." ].includes(e.t0.message)) {
              e.next = 21;
              break;
            }
            return e.abrupt("return", We({
              endpoints: r,
              torusNodePubs: n,
              lastPoint: l + 1,
              firstPoint: d,
              verifier: a,
              verifierId: s,
              signerHost: c,
              network: u
            }));

           case 21:
            throw new Error("Sorry, the Torus Network that powers Web3Auth is currently very busy.\n    We will generate your key in time. Pls try again later. \n\n    ".concat(e.t0.message || ""));

           case 22:
           case "end":
            return e.stop();
          }
        }), e, null, [ [ 6, 15 ] ]);
      })));
      return function(t) {
        return e.apply(this, arguments);
      };
    }();
    function Fe(e) {
      var t = I()("keccak256").update(e).digest().toString("hex");
      return "0x".concat(t);
    }
    function He(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function Ve(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? He(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : He(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    var Ke = function() {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.enableOneKey, n = void 0 !== r && r, o = t.metadataHost, a = void 0 === o ? "https://metadata.tor.us" : o, s = t.allowHost, c = void 0 === s ? "https://signer.tor.us/api/allow" : s, u = t.signerHost, l = void 0 === u ? "https://signer.tor.us/api/sign" : u, d = t.serverTimeOffset, h = void 0 === d ? 0 : d, f = t.network, p = void 0 === f ? "mainnet" : f;
        se(this, e), i(this, "metadataHost", void 0), i(this, "allowHost", void 0), i(this, "serverTimeOffset", void 0), i(this, "enableOneKey", void 0), 
        i(this, "signerHost", void 0), i(this, "network", void 0), i(this, "ec", void 0), this.ec = new ve.ec("secp256k1"), this.metadataHost = a, 
        this.allowHost = c, this.enableOneKey = n, this.serverTimeOffset = h || 0, this.signerHost = l, this.network = p;
      }
      return ue(e, [ {
        key: "getUserTypeAndAddress",
        value: function() {
          var e = ae(de().mark((function e(t, r, n) {
            var i, o, a, s, c, u, l, d, h, f, p, v, g, y, b, m, w, _, k = arguments;
            return de().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return i = n.verifier, o = n.verifierId, a = k.length > 3 && void 0 !== k[3] && k[3], e.next = 4, qe(t, i, o);

               case 4:
                if (e.t0 = e.sent, e.t0) {
                  e.next = 7;
                  break;
                }
                e.t0 = {};

               case 7:
                if (s = e.t0, c = s.keyResult, u = s.errorResult, l = !1, !u || !JSON.stringify(u).includes("Verifier + VerifierID has not yet been assigned")) {
                  e.next = 23;
                  break;
                }
                if (a) {
                  e.next = 14;
                  break;
                }
                throw new Error("Verifier + VerifierID has not yet been assigned");

               case 14:
                return e.next = 16, We({
                  endpoints: t,
                  torusNodePubs: r,
                  lastPoint: void 0,
                  firstPoint: void 0,
                  verifier: i,
                  verifierId: o,
                  signerHost: this.signerHost,
                  network: this.network
                });

               case 16:
                return e.next = 18, Be(t, i, o, 1e3);

               case 18:
                h = e.sent, d = null == h ? void 0 : h.keyResult, l = !0, e.next = 28;
                break;

               case 23:
                if (!c) {
                  e.next = 27;
                  break;
                }
                d = c, e.next = 28;
                break;

               case 27:
                throw new Error("node results do not match at first lookup ".concat(JSON.stringify(c || {}), ", ").concat(JSON.stringify(u || {})));

               case 28:
                if (!d) {
                  e.next = 58;
                  break;
                }
                return f = d.keys[0], p = f.pub_key_X, v = f.pub_key_Y, e.prev = 30, e.next = 33, this.getOrSetNonce(p, v, void 0, !l);

               case 33:
                g = e.sent, y = new (pe())(g.nonce || "0", 16), e.next = 40;
                break;

               case 37:
                throw e.prev = 37, e.t1 = e.catch(30), new De;

               case 40:
                if ("v1" !== g.typeOfUser) {
                  e.next = 44;
                  break;
                }
                b = this.ec.keyFromPublic({
                  x: p,
                  y: v
                }).getPublic().add(this.ec.keyFromPrivate(y.toString(16)).getPublic()), e.next = 49;
                break;

               case 44:
                if ("v2" !== g.typeOfUser) {
                  e.next = 48;
                  break;
                }
                b = this.ec.keyFromPublic({
                  x: p,
                  y: v
                }).getPublic().add(this.ec.keyFromPublic({
                  x: g.pubNonce.x,
                  y: g.pubNonce.y
                }).getPublic()), e.next = 49;
                break;

               case 48:
                throw new Error("getOrSetNonce should always return typeOfUser.");

               case 49:
                if (m = b.getX().toString(16), w = b.getY().toString(16), _ = this.generateAddressFromPubKey(b.getX(), b.getY()), "v1" !== g.typeOfUser) {
                  e.next = 56;
                  break;
                }
                return e.abrupt("return", {
                  typeOfUser: g.typeOfUser,
                  nonce: y,
                  X: m,
                  Y: w,
                  address: _
                });

               case 56:
                if ("v2" !== g.typeOfUser) {
                  e.next = 58;
                  break;
                }
                return e.abrupt("return", {
                  typeOfUser: g.typeOfUser,
                  nonce: y,
                  pubNonce: g.pubNonce,
                  upgraded: g.upgraded,
                  X: m,
                  Y: w,
                  address: _
                });

               case 58:
                throw new Error("node results do not match at final lookup ".concat(JSON.stringify(c || {}), ", ").concat(JSON.stringify(u || {})));

               case 59:
               case "end":
                return e.stop();
              }
            }), e, this, [ [ 30, 37 ] ]);
          })));
          return function(t, r, n) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "setCustomKey",
        value: function() {
          var e = ae(de().mark((function e(t) {
            var r, n, i, o, a, s, c, u, l;
            return de().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return r = t.privKeyHex, n = t.metadataNonce, i = t.torusKeyHex, o = t.customKeyHex, i ? a = new (pe())(i, 16) : (s = new (pe())(r, 16), 
                a = s.sub(n).umod(this.ec.curve.n)), c = new (pe())(o, 16), u = c.sub(a).umod(this.ec.curve.n), l = this.generateMetadataParams(u.toString(16), a), 
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
          var e = ae(de().mark((function e(t, r, n, i, o) {
            var a = this;
            var s, c, u, l, d, h, f, p, v, g = arguments;
            return de().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return s = g.length > 5 && void 0 !== g[5] ? g[5] : {}, c = [], e.next = 4, O(this.allowHost, {
                  headers: {
                    verifier: n,
                    verifier_id: i.verifier_id,
                    network: this.network
                  }
                }, {
                  useAPIKey: !0
                });

               case 4:
                for (u = (0, he.oq)(), l = (0, he.rc)(u).toString("hex"), d = l.slice(2, 66), h = l.slice(66), f = Fe(o), p = 0; p < t.length; p += 1) v = P(t[p], j("CommitmentRequest", {
                  messageprefix: "mug00",
                  tokencommitment: f.slice(2),
                  temppubx: d,
                  temppuby: h,
                  verifieridentifier: n
                })).catch((function(e) {
                  Ce.error("commitment", e);
                })), c.push(v);
                return e.abrupt("return", Ie(c, (function(e) {
                  return e.filter((function(e) {
                    return !(!e || "object" !== ie(e)) && !e.error;
                  })).length >= 3 * ~~(t.length / 4) + 1 ? Promise.resolve(e) : Promise.reject(new Error("invalid ".concat(JSON.stringify(e))));
                })).then((function(e) {
                  var c = [];
                  var l = [];
                  for (var d = 0; d < e.length; d += 1) e[d] && l.push(e[d].result);
                  for (var h = 0; h < t.length; h += 1) {
                    var f = P(t[h], j("ShareRequest", {
                      encrypted: "yes",
                      item: [ Ve(Ve({}, i), {}, {
                        idtoken: o,
                        nodesignatures: l,
                        verifieridentifier: n
                      }, s) ]
                    })).catch((function(e) {
                      return Ce.error("share req", e);
                    }));
                    c.push(f);
                  }
                  return Ie(c, function() {
                    var e = ae(de().mark((function e(n, i) {
                      var o, s, c, l, d, h, f, p, v, g, y, b, m, w, _, k, S;
                      return de().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                         case 0:
                          if (o = n.filter((function(e) {
                            return e;
                          })), s = Ue(n.map((function(e) {
                            return e && e.result && e.result.keys[0].PublicKey;
                          })), 1 + ~~(t.length / 2)), !(o.length >= 1 + ~~(t.length / 2) && s)) {
                            e.next = 28;
                            break;
                          }
                          for (c = [], l = [], d = 0; d < n.length; d += 1) (null == (p = n[d]) || null === (h = p.result) || void 0 === h || null === (f = h.keys) || void 0 === f ? void 0 : f.length) > 0 ? (p.result.keys.sort((function(e, t) {
                            return new (pe())(e.Index, 16).cmp(new (pe())(t.Index, 16));
                          })), (v = p.result.keys[0]).Metadata ? (g = {
                            ephemPublicKey: Ee.from(v.Metadata.ephemPublicKey, "hex"),
                            iv: Ee.from(v.Metadata.iv, "hex"),
                            mac: Ee.from(v.Metadata.mac, "hex")
                          }, c.push((0, he.pe)(u, Ve(Ve({}, g), {}, {
                            ciphertext: Ee.from(Ee.from(v.Share, "base64").toString("binary").padStart(64, "0"), "hex")
                          })).catch((function(e) {
                            return Ce.debug("share decryption", e);
                          })))) : c.push(Promise.resolve(Ee.from(v.Share.padStart(64, "0"), "hex")))) : c.push(Promise.resolve(void 0)), l.push(new (pe())(r[d], 16));
                          return e.next = 8, Promise.all(c);

                         case 8:
                          if (y = e.sent, !i.resolved) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt("return", void 0);

                         case 11:
                          b = y.reduce((function(e, t, r) {
                            return t && e.push({
                              index: l[r],
                              value: new (pe())(t)
                            }), e;
                          }), []), m = Ne(b.length, 1 + ~~(t.length / 2)), w = null, _ = function(e) {
                            var t = m[e];
                            var r = b.filter((function(e, r) {
                              return t.includes(r);
                            }));
                            var n = r.map((function(e) {
                              return e.value;
                            }));
                            var i = r.map((function(e) {
                              return e.index;
                            }));
                            var o = a.lagrangeInterpolation(n, i);
                            if (!o) return "continue";
                            var c = (0, he.rc)(Ee.from(o.toString(16, 64), "hex")).toString("hex");
                            var u = c.slice(2, 66);
                            var l = c.slice(66);
                            return 0 === new (pe())(u, 16).cmp(new (pe())(s.X, 16)) && 0 === new (pe())(l, 16).cmp(new (pe())(s.Y, 16)) ? (w = o, "break") : void 0;
                          }, k = 0;

                         case 16:
                          if (!(k < m.length)) {
                            e.next = 25;
                            break;
                          }
                          if ("continue" !== (S = _(k))) {
                            e.next = 20;
                            break;
                          }
                          return e.abrupt("continue", 22);

                         case 20:
                          if ("break" !== S) {
                            e.next = 22;
                            break;
                          }
                          return e.abrupt("break", 25);

                         case 22:
                          k += 1, e.next = 16;
                          break;

                         case 25:
                          if (null != w) {
                            e.next = 27;
                            break;
                          }
                          throw new Error("could not derive private key");

                         case 27:
                          return e.abrupt("return", w);

                         case 28:
                          throw new Error("invalid");

                         case 29:
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
                  var e = ae(de().mark((function e(t) {
                    var r, n, i, o, s, c, u, l;
                    return de().wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        if (r = t) {
                          e.next = 3;
                          break;
                        }
                        throw new Error("Invalid private key returned");

                       case 3:
                        if (n = (0, he.rc)(Ee.from(r.toString(16, 64), "hex")).toString("hex"), i = n.slice(2, 66), o = n.slice(66), !a.enableOneKey) {
                          e.next = 14;
                          break;
                        }
                        return e.next = 9, a.getNonce(i, o, r);

                       case 9:
                        c = e.sent, u = c.nonce, s = new (pe())(u || "0", 16), e.next = 17;
                        break;

                       case 14:
                        return e.next = 16, a.getMetadata({
                          pub_key_X: i,
                          pub_key_Y: o
                        });

                       case 16:
                        s = e.sent;

                       case 17:
                        return Ce.debug("> torus.js/retrieveShares", {
                          privKey: r.toString(16),
                          metadataNonce: s.toString(16)
                        }), r = r.add(s).umod(a.ec.curve.n), l = a.generateAddressFromPrivKey(r), Ce.debug("> torus.js/retrieveShares", {
                          ethAddress: l,
                          privKey: r.toString(16)
                        }), e.abrupt("return", {
                          ethAddress: l,
                          privKey: r.toString("hex", 64),
                          metadataNonce: s
                        });

                       case 22:
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
          var e = ae(de().mark((function e(t) {
            var r, n, i = arguments;
            return de().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return r = i.length > 1 && void 0 !== i[1] ? i[1] : {}, e.prev = 1, e.next = 4, P("".concat(this.metadataHost, "/get"), t, r, {
                  useAPIKey: !0
                });

               case 4:
                if ((n = e.sent) && n.message) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return", new (pe())(0));

               case 7:
                return e.abrupt("return", new (pe())(n.message, 16));

               case 10:
                return e.prev = 10, e.t0 = e.catch(1), Ce.error("get metadata error", e.t0), e.abrupt("return", new (pe())(0));

               case 14:
               case "end":
                return e.stop();
              }
            }), e, this, [ [ 1, 10 ] ]);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "generateMetadataParams",
        value: function(e, t) {
          var r = this.ec.keyFromPrivate(t.toString("hex", 64));
          var n = {
            data: e,
            timestamp: new (pe())(~~(this.serverTimeOffset + Date.now() / 1e3)).toString(16)
          };
          var i = r.sign(Fe(ye()(n)).slice(2));
          return {
            pub_key_X: r.getPublic().getX().toString("hex"),
            pub_key_Y: r.getPublic().getY().toString("hex"),
            set_data: n,
            signature: Ee.from(i.r.toString(16, 64) + i.s.toString(16, 64) + new (pe())("").toString(16, 2), "hex").toString("base64")
          };
        }
      }, {
        key: "setMetadata",
        value: function() {
          var e = ae(de().mark((function e(t) {
            var r, n, i = arguments;
            return de().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return r = i.length > 1 && void 0 !== i[1] ? i[1] : {}, e.prev = 1, e.next = 4, P("".concat(this.metadataHost, "/set"), t, r, {
                  useAPIKey: !0
                });

               case 4:
                return n = e.sent, e.abrupt("return", n.message);

               case 8:
                return e.prev = 8, e.t0 = e.catch(1), Ce.error("set metadata error", e.t0), e.abrupt("return", "");

               case 12:
               case "end":
                return e.stop();
              }
            }), e, this, [ [ 1, 8 ] ]);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "lagrangeInterpolation",
        value: function(e, t) {
          if (e.length !== t.length) return null;
          var r = new (pe())(0);
          for (var n = 0; n < e.length; n += 1) {
            var i = new (pe())(1);
            var o = new (pe())(1);
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
          var t = this.ec.keyFromPrivate(e.toString("hex", 64), "hex").getPublic().encode("hex", !1).slice(2);
          Ce.info(t, "public key");
          var r = "0x".concat(Fe(Ee.from(t, "hex")).slice(26));
          return (0, s.toChecksumAddress)(r);
        }
      }, {
        key: "generateAddressFromPubKey",
        value: function(e, t) {
          var r = this.ec.keyFromPublic({
            x: e.toString("hex", 64),
            y: t.toString("hex", 64)
          });
          var n = r.getPublic().encode("hex", !1).slice(2);
          Ce.info(r.getPublic().encode("hex", !1), "public key");
          var i = "0x".concat(Fe(Ee.from(n, "hex")).slice(26));
          return (0, s.toChecksumAddress)(i);
        }
      }, {
        key: "getPublicAddress",
        value: function() {
          var e = ae(de().mark((function e(t, r, n) {
            var i, o, a, s, c, u, l, d, h, f, p, v, g, y, b, m, w, _, k, S = arguments;
            return de().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return i = n.verifier, o = n.verifierId, a = S.length > 3 && void 0 !== S[3] && S[3], Ce.debug("> torus.js/getPublicAddress", {
                  endpoints: t,
                  torusNodePubs: r,
                  verifier: i,
                  verifierId: o,
                  isExtended: a
                }), c = !1, e.next = 6, qe(t, i, o);

               case 6:
                if (e.t0 = e.sent, e.t0) {
                  e.next = 9;
                  break;
                }
                e.t0 = {};

               case 9:
                if (u = e.t0, l = u.keyResult, !(d = u.errorResult) || !JSON.stringify(d).includes("Verifier not supported")) {
                  e.next = 16;
                  break;
                }
                throw new Error("Verifier not supported. Check if you: \n\n      1. Are on the right network (Torus testnet/mainnet) \n\n      2. Have setup a verifier on dashboard.web3auth.io?");

               case 16:
                if (!d || !JSON.stringify(d).includes("Verifier + VerifierID has not yet been assigned")) {
                  e.next = 26;
                  break;
                }
                return e.next = 19, We({
                  endpoints: t,
                  torusNodePubs: r,
                  lastPoint: void 0,
                  firstPoint: void 0,
                  verifier: i,
                  verifierId: o,
                  signerHost: this.signerHost,
                  network: this.network
                });

               case 19:
                return e.next = 21, Be(t, i, o, 1e3);

               case 21:
                h = e.sent, s = null == h ? void 0 : h.keyResult, c = !0, e.next = 31;
                break;

               case 26:
                if (!l) {
                  e.next = 30;
                  break;
                }
                s = l, e.next = 31;
                break;

               case 30:
                throw new Error("node results do not match at first lookup ".concat(JSON.stringify(l || {}), ", ").concat(JSON.stringify(d || {})));

               case 31:
                if (Ce.debug("> torus.js/getPublicAddress", {
                  finalKeyResult: s,
                  isNewKey: c
                }), !s) {
                  e.next = 69;
                  break;
                }
                if (p = s.keys[0], v = p.pub_key_X, g = p.pub_key_Y, !this.enableOneKey) {
                  e.next = 57;
                  break;
                }
                return e.prev = 35, e.next = 38, this.getOrSetNonce(v, g, void 0, !c);

               case 38:
                y = e.sent, b = new (pe())(y.nonce || "0", 16), w = y.typeOfUser, e.next = 46;
                break;

               case 43:
                throw e.prev = 43, e.t1 = e.catch(35), new De;

               case 46:
                if ("v1" !== y.typeOfUser) {
                  e.next = 50;
                  break;
                }
                m = this.ec.keyFromPublic({
                  x: v,
                  y: g
                }).getPublic().add(this.ec.keyFromPrivate(b.toString(16)).getPublic()), e.next = 55;
                break;

               case 50:
                if ("v2" !== y.typeOfUser) {
                  e.next = 54;
                  break;
                }
                y.upgraded ? m = this.ec.keyFromPublic({
                  x: v,
                  y: g
                }).getPublic() : (m = this.ec.keyFromPublic({
                  x: v,
                  y: g
                }).getPublic().add(this.ec.keyFromPublic({
                  x: y.pubNonce.x,
                  y: y.pubNonce.y
                }).getPublic()), _ = y.pubNonce), e.next = 55;
                break;

               case 54:
                throw new Error("getOrSetNonce should always return typeOfUser.");

               case 55:
                e.next = 62;
                break;

               case 57:
                return w = "v1", e.next = 60, this.getMetadata({
                  pub_key_X: v,
                  pub_key_Y: g
                });

               case 60:
                b = e.sent, m = this.ec.keyFromPublic({
                  x: v,
                  y: g
                }).getPublic().add(this.ec.keyFromPrivate(b.toString(16)).getPublic());

               case 62:
                if (v = m.getX().toString(16), g = m.getY().toString(16), k = this.generateAddressFromPubKey(m.getX(), m.getY()), Ce.debug("> torus.js/getPublicAddress", {
                  X: v,
                  Y: g,
                  address: k,
                  typeOfUser: w,
                  nonce: null === (f = b) || void 0 === f ? void 0 : f.toString(16),
                  pubNonce: _
                }), a) {
                  e.next = 68;
                  break;
                }
                return e.abrupt("return", k);

               case 68:
                return e.abrupt("return", {
                  typeOfUser: w,
                  address: k,
                  X: v,
                  Y: g,
                  metadataNonce: b,
                  pubNonce: _
                });

               case 69:
                throw new Error("node results do not match at final lookup ".concat(JSON.stringify(l || {}), ", ").concat(JSON.stringify(d || {})));

               case 70:
               case "end":
                return e.stop();
              }
            }), e, this, [ [ 35, 43 ] ]);
          })));
          return function(t, r, n) {
            return e.apply(this, arguments);
          };
        }()
      }, {
        key: "getOrSetNonce",
        value: function() {
          var e = ae(de().mark((function e(t, r, n) {
            var i, o, a, s = arguments;
            return de().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return i = s.length > 3 && void 0 !== s[3] && s[3], a = i ? "getNonce" : "getOrSetNonce", o = n ? this.generateMetadataParams(a, n) : {
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
          var e = ae(de().mark((function e(t, r, n) {
            return de().wrap((function(e) {
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
          var r = new (pe())(e, 16);
          var n = new (pe())(t, 16);
          return r.sub(n).umod(this.ec.curve.n).toString("hex");
        }
      } ], [ {
        key: "enableLogging",
        value: function() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          e ? Ce.enableAll() : Ce.disableAll();
        }
      }, {
        key: "setAPIKey",
        value: function(e) {
          _(e);
        }
      }, {
        key: "setEmbedHost",
        value: function(e) {
          w(e);
        }
      }, {
        key: "isGetOrSetNonceError",
        value: function(e) {
          return e instanceof De;
        }
      } ]), e;
    }();
    var ze = r(12724);
    var Ye = r(64063);
    var Ge = r.n(Ye);
    var Xe = r(24970);
    var Je = r(23482);
    var Ze = r.n(Je);
    var $e = r(48764).Buffer;
    const Qe = "google", et = "facebook", tt = "twitch", rt = "reddit", nt = "discord";
    const it = {
      GOOGLE: "google",
      FACEBOOK: "facebook",
      TWITCH: "twitch",
      REDDIT: "reddit",
      DISCORD: "discord",
      EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless"
    };
    const ot = {
      [it.GOOGLE]: "tkey-google",
      [it.FACEBOOK]: "tkey-facebook",
      [it.TWITCH]: "tkey-twitch",
      [it.REDDIT]: "tkey-reddit",
      [it.DISCORD]: "tkey-discord",
      [it.EMAIL_PASSWORDLESS]: "tkey-auth0-email-passwordless"
    };
    const at = {
      PRODUCTION: "production",
      DEVELOPMENT: "development",
      BINANCE: "binance",
      TESTING: "testing",
      LRC: "lrc",
      BETA: "beta"
    };
    const st = {
      BOTTOM_LEFT: "bottom-left",
      TOP_LEFT: "top-left",
      BOTTOM_RIGHT: "bottom-right",
      TOP_RIGHT: "top-right"
    };
    const ct = {
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
    };
    var ut = {
      supportedVerifierList: Object.values(it),
      paymentProviders: ct,
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
    const lt = e => new Promise(((t, r) => {
      null != window.document.body ? Promise.resolve(e()).then(t).catch(r) : window.document.addEventListener("DOMContentLoaded", (() => {
        Promise.resolve(e()).then(t).catch(r);
      }));
    }));
    const dt = e => {
      const t = window.document.createElement("template");
      const r = e.trim();
      return t.innerHTML = r, t.content.firstChild;
    };
    const ht = (e, t, r) => {
      const n = i => {
        r(i), e.removeListener(t, n);
      };
      e.on(t, n);
    };
    async function ft() {
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
    var pt = p().getLogger("torus-embed");
    var vt = {
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
    const {paymentProviders: gt} = ut;
    function yt(e, t, r) {
      let n = "MetaMask: Lost connection to \"".concat(e, "\".");
      null != t && t.stack && (n += "\n".concat(t.stack)), pt.warn(n), r && r.listenerCount("error") > 0 && r.emit("error", n);
    }
    const bt = () => Math.random().toString(36).slice(2);
    const mt = async (e, t) => {
      let r;
      let n;
      const i = "1.25.0";
      let o = t.version || i;
      try {
        if (("binance" === e || "production" === e) && !t.version) {
          let e;
          e = ut.prodTorusUrl ? {
            data: ut.prodTorusUrl
          } : await O("".concat(ut.api, "/latestversion?name=@toruslabs/torus-embed&version=").concat(i), {}, {
            useAPIKey: !0
          }), o = e.data, ut.prodTorusUrl = e.data;
        }
      } catch (a) {
        pt.error(a, "unable to fetch latest version");
      }
      switch (pt.info("version used: ", o), e) {
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
    const wt = () => {
      let e = window.navigator.language || "en-US";
      const t = e.split("-");
      return e = Object.prototype.hasOwnProperty.call(ut.translations, t[0]) ? t[0] : "en", e;
    };
    const _t = [ "eth_subscription" ];
    const kt = () => {};
    const St = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375";
    const xt = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
    function Ot(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    Y.defaultMaxListeners = 100;
    const Pt = function(e, t) {
      let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      return (n, i) => n || i.error ? t(n || i.error) : !r || Array.isArray(i) ? e(i) : e(i.result);
    };
    class jt extends Y {
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
        }), !(0, Xe.duplex)(e)) throw new Error(vt.errors.invalidDuplexStream());
        this.isTorus = !0, this.setMaxListeners(t), this._state = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ot(Object(r), !0).forEach((function(t) {
              i(e, t, r[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ot(Object(r)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            }));
          }
          return e;
        }({}, jt._defaultState), this.selectedAddress = null, this.networkVersion = null, this.chainId = null, this.shouldSendMetadata = r, 
        this._handleAccountsChanged = this._handleAccountsChanged.bind(this), this._handleChainChanged = this._handleChainChanged.bind(this), 
        this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this), this._handleConnect = this._handleConnect.bind(this), 
        this._handleDisconnect = this._handleDisconnect.bind(this), this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this), 
        this._sendSync = this._sendSync.bind(this), this._rpcRequest = this._rpcRequest.bind(this), this._warnOfDeprecation = this._warnOfDeprecation.bind(this), 
        this._initializeState = this._initializeState.bind(this), this.request = this.request.bind(this), this.send = this.send.bind(this), 
        this.sendAsync = this.sendAsync.bind(this);
        const o = new ne;
        F()(e, o, e, this._handleStreamDisconnect.bind(this, "MetaMask")), this._publicConfigStore = new ze.ObservableStore({
          storageKey: "Metamask-Config"
        }), F()(o.createStream("publicConfig"), (0, ze.storeAsStream)(this._publicConfigStore), yt.bind(this, "MetaMask PublicConfigStore")), 
        o.ignoreStream("phishing"), this.on("connect", (() => {
          this._state.isConnected = !0;
        }));
        const a = X();
        F()(a.stream, o.createStream(n), a.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider"));
        const s = new $;
        s.push(J()), s.push(function() {
          return (e, t, r) => {
            "string" == typeof e.method && e.method || (t.error = D.ethErrors.rpc.invalidRequest({
              message: "The request 'method' must be a non-empty string.",
              data: e
            })), r((e => {
              const {error: r} = t;
              return r ? (pt.error("MetaMask - RPC Error: ".concat(r.message), r), e()) : e();
            }));
          };
        }()), s.push(a.middleware), this._rpcEngine = s, a.events.on("notification", (e => {
          const {method: t, params: r} = e;
          "wallet_accountsChanged" === t ? this._handleAccountsChanged(r) : "wallet_unlockStateChanged" === t ? this._handleUnlockStateChanged(r) : "wallet_chainChanged" === t ? this._handleChainChanged(r) : _t.includes(e.method) && (this.emit("data", e), 
          this.emit("notification", r.result), this.emit("message", {
            type: t,
            data: r
          }));
        }));
      }
      get publicConfigStore() {
        return this._sentWarnings.publicConfigStore || (pt.warn(vt.warnings.publicConfigStore), this._sentWarnings.publicConfigStore = !0), 
        this._publicConfigStore;
      }
      isConnected() {
        return this._state.isConnected;
      }
      async request(e) {
        if (!e || "object" != typeof e || Array.isArray(e)) throw D.ethErrors.rpc.invalidRequest({
          message: vt.errors.invalidRequestArgs(),
          data: e
        });
        const {method: t, params: r} = e;
        if ("string" != typeof t || 0 === t.length) throw D.ethErrors.rpc.invalidRequest({
          message: vt.errors.invalidRequestMethod(),
          data: e
        });
        if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r)) throw D.ethErrors.rpc.invalidRequest({
          message: vt.errors.invalidRequestParams(),
          data: e
        });
        return new Promise(((e, n) => {
          this._rpcRequest({
            method: t,
            params: r
          }, Pt(e, n));
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
          pt.error("MetaMask: Failed to get initial state. Please report this bug.", e);
        } finally {
          pt.info("initialized state"), this._state.initialized = !0, this.emit("_initialized");
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
        return this._sentWarnings.send || (pt.warn(vt.warnings.sendDeprecation), this._sentWarnings.send = !0), "string" != typeof e || t && !Array.isArray(t) ? e && "object" == typeof e && "function" == typeof t ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise(((r, n) => {
          try {
            this._rpcRequest({
              method: e,
              params: t
            }, Pt(r, n, !1));
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
          this._rpcRequest(e, kt), t = !0;
          break;

         case "net_version":
          t = this.networkVersion || null;
          break;

         default:
          throw new Error(vt.errors.unsupportedSync(e.method));
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
        }), pt.debug(vt.info.connected(e)));
      }
      _handleDisconnect(e, t) {
        if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
          let r;
          this._state.isConnected = !1, e ? (r = new D.EthereumRpcError(1013, t || vt.errors.disconnected()), pt.debug(r)) : (r = new D.EthereumRpcError(1011, t || vt.errors.permanentlyDisconnected()), 
          pt.error(r), this.chainId = null, this._state.accounts = null, this.selectedAddress = null, this._state.isUnlocked = !1, 
          this._state.isPermanentlyDisconnected = !0), this.emit("disconnect", r);
        }
      }
      _handleStreamDisconnect(e, t) {
        yt(e, t, this), this._handleDisconnect(!1, t ? t.message : void 0);
      }
      _handleAccountsChanged(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let n = e;
        Array.isArray(n) || (pt.error("MetaMask: Received non-array accounts parameter. Please report this bug.", n), n = []);
        for (const i of e) if ("string" != typeof i) {
          pt.error("MetaMask: Received non-string account. Please report this bug.", e), n = [];
          break;
        }
        Ge()(this._state.accounts, n) || (t && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !r && pt.error('MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.', n), 
        this._state.accounts = n, this.emit("accountsChanged", n)), this.selectedAddress !== n[0] && (this.selectedAddress = n[0] || null);
      }
      _handleChainChanged() {
        let {chainId: e, networkVersion: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e && t ? "loading" === t ? this._handleDisconnect(!0) : (this._handleConnect(e), e !== this.chainId && (this.chainId = e, 
        this._state.initialized && this.emit("chainChanged", this.chainId))) : pt.error("MetaMask: Received invalid network parameters. Please report this bug.", {
          chainId: e,
          networkVersion: t
        });
      }
      _handleUnlockStateChanged() {
        let {accounts: e, isUnlocked: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        "boolean" == typeof t ? t !== this._state.isUnlocked && (this._state.isUnlocked = t, this._handleAccountsChanged(e || [])) : pt.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.", {
          isUnlocked: t
        });
      }
      _warnOfDeprecation(e) {
        !1 === this._sentWarnings.events[e] && (pt.warn(vt.warnings.events[e]), this._sentWarnings.events[e] = !0);
      }
    }
    i(jt, "_defaultState", {
      accounts: null,
      isConnected: !1,
      isUnlocked: !1,
      initialized: !1,
      isPermanentlyDisconnected: !1,
      hasEmittedConnection: !1
    });
    const Et = (e, t) => {
      const r = {};
      return e.algorithms.forEach((e => {
        r[e] = Ze()(e).update(t, "utf8").digest("base64");
      })), r;
    };
    const Ct = (e, t) => {
      const r = (e => ({
        algorithms: e.algorithms || [ "sha256" ],
        delimiter: e.delimiter || " ",
        full: e.full || !1
      }))(e);
      const n = {
        hashes: Et(r, t),
        integrity: void 0
      };
      return n.integrity = ((e, t) => {
        let r = "";
        return r += Object.keys(t.hashes).map((e => "".concat(e, "-").concat(t.hashes[e]))).join(e.delimiter), r;
      })(r, n), r.full ? n : n.integrity;
    };
    class At extends M.EventEmitter {
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
    function Tt(e) {
      return new Promise(((t, r) => {
        try {
          const r = document.createElement("img");
          r.onload = () => t(!0), r.onerror = () => t(!1), r.src = e;
        } catch (n) {
          r(n);
        }
      }));
    }
    const It = e => {
      const {document: t} = e;
      const r = t.querySelector('head > meta[property="og:site_name"]');
      if (r) return r.content;
      const n = t.querySelector('head > meta[name="title"]');
      return n ? n.content : t.title && t.title.length > 0 ? t.title : e.location.hostname;
    };
    async function Mt(e) {
      const {document: t} = e;
      let r = t.querySelector('head > link[rel="shortcut icon"]');
      return r && await Tt(r.href) ? r.href : (r = Array.from(t.querySelectorAll('head > link[rel="icon"]')).find((e => Boolean(e.href))), 
      r && await Tt(r.href) ? r.href : null);
    }
    async function Lt(e) {
      try {
        const t = await (async () => ({
          name: It(window),
          icon: await Mt(window)
        }))();
        e.handle({
          jsonrpc: "2.0",
          id: bt(),
          method: "wallet_sendDomainMetadata",
          params: t
        }, kt);
      } catch (t) {
        pt.error({
          message: vt.errors.sendSiteMetadata(),
          originalError: t
        });
      }
    }
    const Rt = [ "host", "chainId", "networkName" ];
    function Dt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function Nt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Dt(Object(r), !0).forEach((function(t) {
          i(e, t, r[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dt(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        }));
      }
      return e;
    }
    const Ut = {
      [Qe]: !0,
      [et]: !0,
      [rt]: !0,
      [tt]: !0,
      [nt]: !0
    };
    const qt = "sha384-o02DJyXIRlX/ZlzbO6i9Pm5wL/mA+uZjTQcx40Hw0UEZ8JZwTkWIJ1gpf+4WUgg8";
    const Bt = [ "eth_sendTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "eth_getEncryptionPublicKey", "eth_decrypt" ];
    const Wt = function(e) {
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
        const {torusUrl: t} = await mt("production", {
          check: !1,
          hash: qt,
          version: ""
        });
        e.href = "".concat(t, "/popup"), e.crossOrigin = "anonymous", e.type = "text/html", e.rel = "prefetch", e.relList && e.relList.supports && e.relList.supports("prefetch") && document.head.appendChild(e);
      } catch (e) {
        pt.warn(e);
      }
    }();
    class Ft {
      constructor() {
        let {buttonPosition: e = st.BOTTOM_LEFT, modalZIndex: t = 99999, apiKey: r = "torus-default"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, "buttonPosition", st.BOTTOM_LEFT), i(this, "torusUrl", void 0), i(this, "torusIframe", void 0), i(this, "styleLink", void 0), 
        i(this, "isLoggedIn", void 0), i(this, "isInitialized", void 0), i(this, "torusWidgetVisibility", void 0), i(this, "torusAlert", void 0), 
        i(this, "nodeDetailManager", void 0), i(this, "torusJs", void 0), i(this, "apiKey", void 0), i(this, "modalZIndex", void 0), 
        i(this, "alertZIndex", void 0), i(this, "torusAlertContainer", void 0), i(this, "isIframeFullScreen", void 0), i(this, "whiteLabel", void 0), 
        i(this, "requestedVerifier", void 0), i(this, "currentVerifier", void 0), i(this, "embedTranslations", void 0), i(this, "ethereum", void 0), 
        i(this, "provider", void 0), i(this, "communicationMux", void 0), i(this, "isLoginCallback", void 0), i(this, "dappStorageKey", void 0), 
        i(this, "paymentProviders", ut.paymentProviders), i(this, "loginHint", ""), i(this, "useWalletConnect", void 0), this.buttonPosition = e, 
        this.torusUrl = "", this.isLoggedIn = !1, this.isInitialized = !1, this.torusWidgetVisibility = !0, this.requestedVerifier = "", 
        this.currentVerifier = "", this.nodeDetailManager = new l, this.torusJs = new Ke({
          metadataHost: "https://metadata.tor.us",
          allowHost: "https://signer.tor.us/api/allow"
        }), this.apiKey = r, Ke.setAPIKey(r), _(r), this.modalZIndex = t, this.alertZIndex = t + 1e3, this.isIframeFullScreen = !1, 
        this.dappStorageKey = "";
      }
      async init() {
        let {buildEnv: e = at.PRODUCTION, enableLogging: t = !1, enabledVerifiers: r = Ut, network: n = {
          host: "mainnet",
          chainId: null,
          networkName: "",
          blockExplorer: "",
          ticker: "",
          tickerName: ""
        }, loginConfig: i = {}, showTorusButton: o = !0, integrity: a = {
          check: !1,
          hash: qt,
          version: ""
        }, whiteLabel: s, skipTKey: c = !1, useLocalStorage: u = !1, useWalletConnect: l = !1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.isInitialized) throw new Error("Already initialized");
        const {torusUrl: d, logLevel: f} = await mt(e, a);
        pt.info(d, "url loaded"), this.torusUrl = d, this.whiteLabel = s, this.useWalletConnect = l, pt.setDefaultLevel(f), t ? pt.enableAll() : pt.disableAll(), 
        this.torusWidgetVisibility = o;
        let p = "";
        if (Wt && u) {
          const e = "".concat(ut.localStorageKeyPrefix).concat(window.location.hostname);
          const t = window.localStorage.getItem(e);
          if (t) p = t; else {
            const t = "torus-app-".concat(bt());
            window.localStorage.setItem(e, t), p = t;
          }
        }
        this.dappStorageKey = p;
        const v = new URL(d);
        v.pathname.endsWith("/") ? v.pathname += "popup" : v.pathname += "/popup", p && (v.hash = "#dappStorageKey=".concat(p)), 
        this.torusIframe = dt("<iframe\n        id=\"torusIframe\"\n        allow=".concat(l ? "camera" : "", "\n        class=\"torusIframe\"\n        src=\"").concat(v.href, "\"\n        style=\"display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ").concat(this.modalZIndex, "\"\n      ></iframe>")), 
        this.torusAlertContainer = dt('<div id="torusAlertContainer"></div>'), this.torusAlertContainer.style.display = "none", 
        this.torusAlertContainer.style.setProperty("z-index", this.alertZIndex.toString());
        const g = window.document.createElement("link");
        g.setAttribute("rel", "stylesheet"), g.setAttribute("type", "text/css"), g.setAttribute("href", "".concat(d, "/css/widget.css")), 
        this.styleLink = g;
        const {defaultLanguage: y = wt(), customTranslations: b = {}} = this.whiteLabel || {};
        const m = h()(ut.translations, b)[y] || ut.translations[wt()];
        this.embedTranslations = m.embed;
        const w = async () => (await ft(), new Promise(((e, t) => {
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
          const e = "".concat(d, "/popup");
          const t = await fetch(e, {
            cache: "reload"
          });
          if ("max-age=3600" !== t.headers.get("Cache-Control")) throw new Error("Unexpected Cache-Control headers, got ".concat(t.headers.get("Cache-Control")));
          const r = await t.text();
          const n = Ct({
            algorithms: [ "sha384" ]
          }, r);
          if (pt.info(n, "integrity"), n !== a.hash) throw this.clearInit(), new Error("Integrity check failed");
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
          ht(r, "data", (r => {
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
        let {host: t = "mainnet", chainId: r = null, networkName: i = ""} = e, o = n(e, Rt);
        return new Promise(((e, n) => {
          const a = this.communicationMux.getStream("provider_change");
          ht(a, "data", (t => {
            const {err: r, success: i} = t.data;
            pt.info(t), r ? n(r) : i ? e() : n(new Error("some error occured"));
          }));
          const s = bt();
          this._handleWindow(s, {
            target: "_blank",
            features: St
          }), a.write({
            name: "show_provider_change",
            data: {
              network: Nt({
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
        ht(r, "data", (e => {
          if ("show_wallet_instance" === e.name) {
            const {instanceId: r} = e.data;
            const i = new URL("".concat(this.torusUrl, "/wallet").concat(n));
            i.searchParams.append("integrity", "true"), i.searchParams.append("instanceId", r), Object.keys(t).forEach((e => {
              i.searchParams.append(e, t[e]);
            })), this.dappStorageKey && (i.hash = "#dappStorageKey=".concat(this.dappStorageKey));
            new At({
              url: i,
              features: "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315"
            }).open();
          }
        }));
      }
      async getPublicAddress(e) {
        let {verifier: t, verifierId: r, isExtended: n = !1} = e;
        if (!ut.supportedVerifierList.includes(t) || !ot[t]) throw new Error("Unsupported verifier");
        const i = await this.nodeDetailManager.getNodeDetails({
          verifier: t,
          verifierId: r
        });
        const o = i.torusNodeEndpoints;
        const a = i.torusNodePub;
        const s = t;
        const c = ot[t];
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
                ht(n, "data", (e => {
                  "user_info_response" === e.name && (e.data.approved ? t(e.data.payload) : r(new Error("User rejected the request")));
                }));
                const i = bt();
                this._handleWindow(i, {
                  target: "_blank",
                  features: St
                }), n.write({
                  name: "user_info_request",
                  data: {
                    message: e,
                    preopenInstanceId: i
                  }
                });
              }
            };
            ht(n, "data", i);
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
              if (e && !gt[e]) return r.provider = "Invalid Provider", {
                errors: r,
                isValid: 0 === Object.keys(r).length
              };
              const n = gt[e];
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
            ht(a, "data", (e => {
              "topup_response" === e.name && (e.data.success ? r(e.data.success) : n(new Error(e.data.error)));
            }));
            const s = bt();
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
      async loginWithPrivateKey(e) {
        const {privateKey: t, userInfo: r} = e;
        return new Promise(((e, n) => {
          if (this.isInitialized) {
            if (32 !== $e.from(t, "hex").length) return void n(new Error("Invalid private key, Please provide a 32 byte valid secp25k1 private key"));
            const i = this.communicationMux.getStream("login_with_private_key");
            ht(i, "data", (t => {
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
            ht(r, "data", (r => {
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
          const a = new At({
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
         case st.TOP_LEFT:
          t.top = "0px", t.left = "0px", t.right = "auto", t.bottom = "auto";
          break;

         case st.TOP_RIGHT:
          t.top = "0px", t.right = "0px", t.left = "auto", t.bottom = "auto";
          break;

         case st.BOTTOM_RIGHT:
          t.bottom = "0px", t.right = "0px", t.top = "auto", t.left = "auto";
          break;

         case st.BOTTOM_LEFT:
         default:
          t.bottom = "0px", t.left = "0px", t.top = "auto", t.right = "auto";
        }
        Object.assign(this.torusIframe.style, t), this.isIframeFullScreen = e;
      }
      _setupWeb3() {
        pt.info("setupWeb3 running");
        const e = new K({
          name: "embed_metamask",
          target: "iframe_metamask",
          targetWindow: this.torusIframe.contentWindow,
          targetOrigin: new URL(this.torusUrl).origin
        });
        const t = new K({
          name: "embed_comm",
          target: "iframe_comm",
          targetWindow: this.torusIframe.contentWindow,
          targetOrigin: new URL(this.torusUrl).origin
        });
        const r = new jt(e);
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
            id: bt(),
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
          if (!Array.isArray(n) && Bt.includes(n.method)) {
            const e = bt();
            this._handleWindow(e, {
              target: "_blank",
              features: xt
            }), n.preopenInstanceId = e;
          }
          r._rpcEngine.handle(n, t);
        };
        const i = new Proxy(r, {
          deleteProperty: () => !0
        });
        this.ethereum = i;
        const o = function(e) {
          const t = new ne;
          return t.getStream = function(e) {
            return this._substreams[e] ? this._substreams[e] : this.createStream(e);
          }, F()(e, t, e, (e => {
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
        })), this.provider = i, this.provider.shouldSendMetadata && Lt(this.provider._rpcEngine), r._initializeState(), pt.debug("Torus - injected provider");
      }
      _showLoginPopup(e, t, r) {
        const n = e => {
          const {err: n, selectedAddress: i} = e;
          n ? (pt.error(n), r && r(n)) : t && t([ i ]), this.isIframeFullScreen && this._displayIframe();
        };
        const i = this.communicationMux.getStream("oauth");
        if (this.requestedVerifier) {
          ht(i, "data", n);
          const t = bt();
          this._handleWindow(t), i.write({
            name: "oauth",
            data: {
              calledFromEmbed: e,
              verifier: this.requestedVerifier,
              preopenInstanceId: t,
              login_hint: this.loginHint
            }
          });
        } else this._displayIframe(!0), ht(i, "data", n), i.write({
          name: "oauth_modal",
          data: {
            calledFromEmbed: e
          }
        });
      }
      _createPopupBlockAlert(e, t) {
        const r = this._getLogoUrl();
        const n = dt('<div id="torusAlert" class="torus-alert--v2">' + "<div id=\"torusAlert__logo\"><img src=\"".concat(r, "\" /></div>") + "<div>" + "<h1 id=\"torusAlert__title\">".concat(this.embedTranslations.actionRequired, "</h1>") + "<p id=\"torusAlert__desc\">".concat(this.embedTranslations.pendingAction, "</p>") + "</div></div>");
        const i = dt("<div><a id=\"torusAlert__btn\">".concat(this.embedTranslations.continue, "</a></div>"));
        const o = dt('<div id="torusAlert__btn-container"></div>');
        o.appendChild(i), n.appendChild(o);
        this._setEmbedWhiteLabel(n);
        lt((() => {
          this.torusAlertContainer.style.display = "block", this.torusAlertContainer.appendChild(n);
        })), lt((() => {
          i.addEventListener("click", (() => {
            this._handleWindow(e, {
              url: t,
              target: "_blank",
              features: xt
            }), n.remove(), 0 === this.torusAlertContainer.children.length && (this.torusAlertContainer.style.display = "none");
          }));
        }));
      }
    }
    var Ht = function(e, t, r, n) {
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
    var Vt = function(e, t) {
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
    var Kt = function() {
      return Ht(void 0, void 0, void 0, (function() {
        return Vt(this, (function(e) {
          return [ 2, new Ft ];
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
    var _ = Array.prototype, k = Function.prototype, S = Object.prototype;
    var x = f['__core-js_shared__'];
    var O = k.toString;
    var P = S.hasOwnProperty;
    var j = function() {
      var e = /[^.]+$/.exec(x && x.keys && x.keys.IE_PROTO || '');
      return e ? 'Symbol(src)_1.' + e : '';
    }();
    var E = S.toString;
    var C = O.call(Object);
    var A = RegExp('^' + O.call(P).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    var T = g ? f.Buffer : void 0, I = f.Symbol, M = f.Uint8Array, L = T ? T.allocUnsafe : void 0, R = function(e, t) {
      return function(r) {
        return e(t(r));
      };
    }(Object.getPrototypeOf, Object), D = Object.create, N = S.propertyIsEnumerable, U = _.splice, q = I ? I.toStringTag : void 0;
    var B = function() {
      try {
        var e = le(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch (t) {}
    }();
    var W = T ? T.isBuffer : void 0, F = Math.max, H = Date.now;
    var V = le(f, 'Map'), K = le(Object, 'create');
    var z = function() {
      function e() {}
      return function(t) {
        if (!ke(t)) return {};
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
    function Z(e, t) {
      var r = ye(e), n = !r && ge(e), i = !r && !n && me(e), o = !r && !n && !i && xe(e), a = r || n || i || o, s = a ? function(e, t) {
        var r = -1, n = Array(e);
        for (;++r < e; ) n[r] = t(r);
        return n;
      }(e.length, String) : [], c = s.length;
      for (var u in e) !t && !P.call(e, u) || a && ('length' == u || i && ('offset' == u || 'parent' == u) || o && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u) || de(u, c)) || s.push(u);
      return s;
    }
    function $(e, t, r) {
      (void 0 !== r && !ve(e[t], r) || void 0 === r && !(t in e)) && te(e, t, r);
    }
    function Q(e, t, r) {
      var n = e[t];
      P.call(e, t) && ve(n, r) && (void 0 !== r || t in e) || te(e, t, r);
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
      this.__data__ = K ? K(null) : {}, this.size = 0;
    }, Y.prototype.delete = function(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    }, Y.prototype.get = function(e) {
      var t = this.__data__;
      if (K) {
        var r = t[e];
        return r === n ? void 0 : r;
      }
      return P.call(t, e) ? t[e] : void 0;
    }, Y.prototype.has = function(e) {
      var t = this.__data__;
      return K ? void 0 !== t[e] : P.call(t, e);
    }, Y.prototype.set = function(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = K && void 0 === t ? n : t, this;
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
    }, X.prototype.clear = function() {
      this.size = 0, this.__data__ = {
        hash: new Y,
        map: new (V || G),
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
        if (!V || n.length < 199) return n.push([ e, t ]), this.size = ++r.size, this;
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
        var t = P.call(e, q), r = e[q];
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
      return Se(e) && ne(e) == o;
    }
    function oe(e) {
      return !(!ke(e) || function(e) {
        return !!j && j in e;
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
      if (!ke(e)) return function(e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      }(e);
      var t = he(e), r = [];
      for (var n in e) ('constructor' != n || !t && P.call(e, n)) && r.push(n);
      return r;
    }
    function se(e, t, r, n, i) {
      e !== t && re(t, (function(o, a) {
        if (i || (i = new J), ke(o)) !function(e, t, r, n, i, o, a) {
          var c = fe(e, r), u = fe(t, r), l = a.get(u);
          if (l) return void $(e, r, l);
          var d = o ? o(c, u, r + '', e, t, a) : void 0;
          var h = void 0 === d;
          if (h) {
            var f = ye(u), p = !f && me(u), v = !f && !p && xe(u);
            d = u, f || p || v ? ye(c) ? d = c : !function(e) {
              return Se(e) && be(e);
            }(c) ? p ? (h = !1, d = function(e, t) {
              if (t) return e.slice();
              var r = e.length, n = L ? L(r) : new e.constructor(r);
              return e.copy(n), n;
            }(u, !0)) : v ? (h = !1, d = function(e, t) {
              var r = t ? function(e) {
                var t = new e.constructor(e.byteLength);
                return new M(t).set(new M(e)), t;
              }(e.buffer) : e.buffer;
              return new e.constructor(r, e.byteOffset, e.length);
            }(u, !0)) : d = [] : d = function(e, t) {
              var r = -1, n = e.length;
              t || (t = Array(n));
              for (;++r < n; ) t[r] = e[r];
              return t;
            }(c) : function(e) {
              if (!Se(e) || ne(e) != s) return !1;
              var t = R(e);
              if (null === t) return !0;
              var r = P.call(t, 'constructor') && t.constructor;
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
            }(c) : ke(c) && !we(c) || (d = function(e) {
              return 'function' != typeof e.constructor || he(e) ? {} : z(R(e));
            }(u))) : h = !1;
          }
          h && (a.set(u, d), i(d, u, n, o, a), a.delete(u));
          $(e, r, d);
        }(e, t, a, r, se, n, i); else {
          var c = n ? n(fe(e, a), o, a + '', e, t, i) : void 0;
          void 0 === c && (c = o), $(e, a, c);
        }
      }), Oe);
    }
    function ce(e, t) {
      return pe(function(e, t, r) {
        return t = F(void 0 === t ? e.length - 1 : t, 0), function() {
          var n = arguments, i = -1, o = F(n.length - t, 0), a = Array(o);
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
      return e === ('function' == typeof t && t.prototype || S);
    }
    function fe(e, t) {
      if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
    }
    var pe = function(e) {
      var t = 0, r = 0;
      return function() {
        var n = H(), i = 16 - (n - r);
        if (r = n, i > 0) {
          if (++t >= 800) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }(B ? function(e, t) {
      return B(e, 'toString', {
        configurable: !0,
        enumerable: !1,
        value: je(t),
        writable: !0
      });
    } : Ee);
    function ve(e, t) {
      return e === t || e != e && t != t;
    }
    var ge = ie(function() {
      return arguments;
    }()) ? ie : function(e) {
      return Se(e) && P.call(e, 'callee') && !N.call(e, 'callee');
    };
    var ye = Array.isArray;
    function be(e) {
      return null != e && _e(e.length) && !we(e);
    }
    var me = W || function() {
      return !1;
    };
    function we(e) {
      if (!ke(e)) return !1;
      var t = ne(e);
      return t == a || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    }
    function _e(e) {
      return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= i;
    }
    function ke(e) {
      var t = typeof e;
      return null != e && ('object' == t || 'function' == t);
    }
    function Se(e) {
      return null != e && 'object' == typeof e;
    }
    var xe = m ? function(e) {
      return function(t) {
        return e(t);
      };
    }(m) : function(e) {
      return Se(e) && _e(e.length) && !!l[ne(e)];
    };
    function Oe(e) {
      return be(e) ? Z(e, !0) : ae(e);
    }
    var Pe = function(e) {
      return ce((function(t, r) {
        var n = -1, i = r.length, o = i > 1 ? r[i - 1] : void 0, a = i > 2 ? r[2] : void 0;
        for (o = e.length > 3 && 'function' == typeof o ? (i--, o) : void 0, a && function(e, t, r) {
          if (!ke(r)) return !1;
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
    function je(e) {
      return function() {
        return e;
      };
    }
    function Ee(e) {
      return e;
    }
    e.exports = Pe;
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
      o.decoder && !r ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? _(e, o, t, !1) : P(e, o)) : _(e, o, t, !1))) : n || (o.reading = !1));
      return function(e) {
        return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
      }(o);
    }
    function _(e, t, r, n) {
      t.flowing && 0 === t.length && !t.sync ? (e.emit('data', r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), 
      t.needReadable && x(e)), P(e, t);
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
    var k = 8388608;
    function S(e, t) {
      return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
        return e >= k ? e = k : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
      }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
    }
    function x(e) {
      var t = e._readableState;
      t.needReadable = !1, t.emittedReadable || (f('emitReadable', t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(O, e) : O(e));
    }
    function O(e) {
      f('emit readable'), e.emit('readable'), A(e);
    }
    function P(e, t) {
      t.readingMore || (t.readingMore = !0, i.nextTick(j, e, t));
    }
    function j(e, t) {
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
    function I(e) {
      var t = e._readableState;
      if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      t.endEmitted || (t.ended = !0, i.nextTick(M, t, e));
    }
    function M(e, t) {
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
      0 === t.length && t.ended ? I(this) : x(this), null;
      if (0 === (e = S(e, t)) && t.ended) return 0 === t.length && I(this), null;
      var n = t.needReadable;
      var i;
      return f('need readable', n), (0 === t.length || t.length - e < t.highWaterMark) && f('length less than watermark', n = !0), 
      t.ended || t.reading ? f('reading or ended', n = !1) : n && (f('do read'), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), 
      this._read(t.highWaterMark), t.sync = !1, t.reading || (e = S(r, t))), null === (i = e > 0 ? T(e, t) : null) ? (t.needReadable = !0, 
      e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && I(this)), null !== i && this.emit('data', i), 
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
            --t.pendingcb, r ? (i.nextTick(o, n), i.nextTick(S, e, t), e._writableState.errorEmitted = !0, e.emit('error', n)) : (o(n), 
            e._writableState.errorEmitted = !0, e.emit('error', n), S(e, t));
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
      }(e, t), t.pendingcb--, n(), S(e, t);
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
    function k(e, t) {
      e._final((function(r) {
        t.pendingcb--, r && e.emit('error', r), t.prefinished = !0, e.emit('prefinish'), S(e, t);
      }));
    }
    function S(e, t) {
      var r = _(t);
      return r && (!function(e, t) {
        t.prefinished || t.finalCalled || ('function' == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, i.nextTick(k, e, t)) : (t.prefinished = !0, 
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
        t.ending = !0, S(e, t), r && (t.finished ? i.nextTick(r) : e.once('finish', r));
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
  },
  17061: (e, t, r) => {
    var n = r(18698).default;
    function i() {
      "use strict";
      e.exports = i = function() {
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports;
      var t = {}, r = Object.prototype, o = r.hasOwnProperty, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator", c = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
      function l(e, t, r) {
        return Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), e[t];
      }
      try {
        l({}, "");
      } catch (C) {
        l = function(e, t, r) {
          return e[t] = r;
        };
      }
      function d(e, t, r, n) {
        var i = t && t.prototype instanceof p ? t : p, o = Object.create(i.prototype), a = new P(n || []);
        return o._invoke = function(e, t, r) {
          var n = "suspendedStart";
          return function(i, o) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === i) throw o;
              return E();
            }
            for (r.method = i, r.arg = o; ;) {
              var a = r.delegate;
              if (a) {
                var s = S(a, r);
                if (s) {
                  if (s === f) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw n = "completed", r.arg;
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var c = h(e, t, r);
              if ("normal" === c.type) {
                if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                return {
                  value: c.arg,
                  done: r.done
                };
              }
              "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg);
            }
          };
        }(e, r, a), o;
      }
      function h(e, t, r) {
        try {
          return {
            type: "normal",
            arg: e.call(t, r)
          };
        } catch (C) {
          return {
            type: "throw",
            arg: C
          };
        }
      }
      t.wrap = d;
      var f = {};
      function p() {}
      function v() {}
      function g() {}
      var y = {};
      l(y, s, (function() {
        return this;
      }));
      var b = Object.getPrototypeOf, m = b && b(b(j([])));
      m && m !== r && o.call(m, s) && (y = m);
      var w = g.prototype = p.prototype = Object.create(y);
      function _(e) {
        [ "next", "throw", "return" ].forEach((function(t) {
          l(e, t, (function(e) {
            return this._invoke(t, e);
          }));
        }));
      }
      function k(e, t) {
        function r(i, a, s, c) {
          var u = h(e[i], e, a);
          if ("throw" !== u.type) {
            var l = u.arg, d = l.value;
            return d && "object" == n(d) && o.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
              r("next", e, s, c);
            }), (function(e) {
              r("throw", e, s, c);
            })) : t.resolve(d).then((function(e) {
              l.value = e, s(l);
            }), (function(e) {
              return r("throw", e, s, c);
            }));
          }
          c(u.arg);
        }
        var i;
        this._invoke = function(e, n) {
          function o() {
            return new t((function(t, i) {
              r(e, n, t, i);
            }));
          }
          return i = i ? i.then(o, o) : o();
        };
      }
      function S(e, t) {
        var r = e.iterator[t.method];
        if (void 0 === r) {
          if (t.delegate = null, "throw" === t.method) {
            if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return f;
            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return f;
        }
        var n = h(r, e.iterator, t.arg);
        if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
        var i = n.arg;
        return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), 
        t.delegate = null, f) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, 
        f);
      }
      function x(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }
      function O(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }
      function P(e) {
        this.tryEntries = [ {
          tryLoc: "root"
        } ], e.forEach(x, this), this.reset(!0);
      }
      function j(e) {
        if (e) {
          var t = e[s];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1, n = function t() {
              for (;++r < e.length; ) if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
              return t.value = void 0, t.done = !0, t;
            };
            return n.next = n;
          }
        }
        return {
          next: E
        };
      }
      function E() {
        return {
          value: void 0,
          done: !0
        };
      }
      return v.prototype = g, l(w, "constructor", g), l(g, "constructor", v), v.displayName = l(g, u, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
      }, t.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, l(e, u, "GeneratorFunction")), e.prototype = Object.create(w), 
        e;
      }, t.awrap = function(e) {
        return {
          __await: e
        };
      }, _(k.prototype), l(k.prototype, c, (function() {
        return this;
      })), t.AsyncIterator = k, t.async = function(e, r, n, i, o) {
        void 0 === o && (o = Promise);
        var a = new k(d(e, r, n, i), o);
        return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
          return e.done ? e.value : a.next();
        }));
      }, _(w), l(w, u, "Generator"), l(w, s, (function() {
        return this;
      })), l(w, "toString", (function() {
        return "[object Generator]";
      })), t.keys = function(e) {
        var t = [];
        for (var r in e) t.push(r);
        return t.reverse(), function r() {
          for (;t.length; ) {
            var n = t.pop();
            if (n in e) return r.value = n, r.done = !1, r;
          }
          return r.done = !0, r;
        };
      }, t.values = j, P.prototype = {
        constructor: P,
        reset: function(e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", 
          this.arg = void 0, this.tryEntries.forEach(O), !e) for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
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
          function r(r, n) {
            return a.type = "throw", a.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n;
          }
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n], a = i.completion;
            if ("root" === i.tryLoc) return r("end");
            if (i.tryLoc <= this.prev) {
              var s = o.call(i, "catchLoc"), c = o.call(i, "finallyLoc");
              if (s && c) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
              } else if (s) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function(e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r];
            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
              var i = n;
              break;
            }
          }
          i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a);
        },
        complete: function(e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
          this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f;
        },
        finish: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f;
          }
        },
        catch: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.tryLoc === e) {
              var n = r.completion;
              if ("throw" === n.type) {
                var i = n.arg;
                O(r);
              }
              return i;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(e, t, r) {
          return this.delegate = {
            iterator: j(e),
            resultName: t,
            nextLoc: r
          }, "next" === this.method && (this.arg = void 0), f;
        }
      }, t;
    }
    e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
  },
  18698: e => {
    function t(r) {
      return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  },
  64687: (e, t, r) => {
    var n = r(17061)();
    e.exports = n;
    try {
      regeneratorRuntime = n;
    } catch (i) {
      "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
    }
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYuZDVjMzdlOGYuanMiLCJtYXBwaW5ncyI6Ijs7OztJQUNBQSxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7TUFBRUMsUUFBTztRQUN0REQsRUFBUUUscUJBQWdCO0lBQ3hCLE1BQU1DLElBQW9CLEVBQVE7SUFDbEMsTUFBTUQsVUFBc0JDLEVBQWtCQztNQUMxQ0MsWUFBWUM7UUFFUkMsTUFBTSxLQUVOQyxLQUFLQyxZQUFZSCxLQUFZLElBQzdCUixPQUFPWSxLQUFLRixLQUFLQyxXQUFXRSxTQUFTQztVQUNqQyxNQUFNQyxJQUFRTCxLQUFLQyxVQUFVRztVQUM3QkosS0FBS00sVUFBVUYsR0FBVUM7OztNQUdqQ0MsVUFBVUYsR0FBVUM7UUFDaEIsTUFBTUUsSUFBbUJDO1VBQ3JCLE1BQU1DLElBQVFULEtBQUtVO1VBQ25CRCxFQUFNTCxLQUFZSSxHQUNsQlIsS0FBS1csU0FBU0Y7O1FBRWxCSixFQUFNTyxVQUFVTCxJQUNoQkEsRUFBZ0JGLEVBQU1LOzs7SUFHOUJsQixFQUFRRSxnQkFBZ0JBOzs7O0lDeEJ4QkosT0FBT0MsZUFBZUMsR0FBUyxjQUFjO01BQUVDLFFBQU87UUFDdERELEVBQVFxQixtQkFBYztJQUN0QixNQUFNbEIsSUFBb0IsRUFBUTtJQUNsQyxNQUFNa0IsVUFBb0JsQixFQUFrQkM7TUFDeENDLFlBQVlDLElBQVc7UUFFbkJDLE1BQU0sS0FDTkMsS0FBS0MsWUFBWUgsR0FFakJBLEVBQVNLLFNBQVNFLEtBQVVMLEtBQUtNLFVBQVVELE1BQzNDTCxLQUFLYzs7TUFFVFIsVUFBVUQ7UUFDTkEsRUFBTU8sV0FBVSxNQUFNWixLQUFLYzs7TUFFL0JBO1FBQ0ksTUFBTUMsSUFBY2YsS0FBS0MsVUFBVWUsS0FBS1gsS0FBVUEsRUFBTUs7UUFFeEQsTUFBTUQsSUFBUW5CLE9BQU8yQixPQUFPLE9BQU9GO1FBQ25DZixLQUFLVyxTQUFTRjs7O0lBR3RCakIsRUFBUXFCLGNBQWNBOzs7O0lDdEJ0QixJQUFJSyxJQUFtQmxCLFFBQVFBLEtBQUtrQixtQkFBb0IsU0FBVUM7TUFDOUQsT0FBUUEsS0FBT0EsRUFBSUMsYUFBY0QsSUFBTTtRQUFFLFNBQVdBOzs7SUFFeEQ3QixPQUFPQyxlQUFlQyxHQUFTLGNBQWM7TUFBRUMsUUFBTztRQUN0REQsRUFBUUksdUJBQWtCO0lBQzFCLE1BQU15QixJQUF1QkgsRUFBZ0IsRUFBUTtJQUNyRCxNQUFNdEIsVUFBd0J5QixFQUFxQkM7TUFDL0N6QixZQUFZMEI7UUFDUnhCLFNBRUlDLEtBQUt3QixTQURMRCxLQUtjOztNQUl0QmI7UUFDSSxPQUFPVixLQUFLeUI7O01BR2hCZCxTQUFTZTtRQUNMMUIsS0FBSzJCLFVBQVVELElBQ2YxQixLQUFLNEIsS0FBSyxVQUFVRjs7TUFFeEJHLFlBQVlDO1FBRVIsSUFBSUEsS0FBd0MsbUJBQWpCQSxHQUEyQjtVQUNsRCxNQUFNckIsSUFBUVQsS0FBS1U7VUFDbkJWLEtBQUtXLFNBQVNyQixPQUFPMkIsT0FBTzNCLE9BQU8yQixPQUFPLElBQUlSLElBQVFxQjtlQUl0RDlCLEtBQUtXLFNBQVNtQjs7TUFJdEJsQixVQUFVbUI7UUFDTi9CLEtBQUtnQyxHQUFHLFVBQVVEOztNQUd0QkUsWUFBWUY7UUFDUi9CLEtBQUtrQyxlQUFlLFVBQVVIOztNQU1sQ047UUFDSSxPQUFPekIsS0FBS3dCOztNQUdoQkcsVUFBVUQ7UUFDTjFCLEtBQUt3QixTQUFTRTs7O0lBR3RCbEMsRUFBUUksa0JBQWtCQTs7OztJQ3pEMUJOLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztNQUFFQyxRQUFPO1FBQ3RERCxFQUFRMkMscUJBQWdCO0lBQ3hCLE1BQU1DLElBQVcsRUFBUTtJQUN6QixNQUFNQyxVQUE4QkQsRUFBU0U7TUFDekN6QyxZQUFZMEM7UUFDUnhDLE1BQU07VUFFRnlDLGFBQVk7WUFHaEJ4QyxLQUFLeUMsVUFFTHpDLEtBQUsrQixVQUFXdEIsS0FBVVQsS0FBSzBDLEtBQUtqQyxJQUVwQ1QsS0FBS3VDLFdBQVdBLEdBQ2hCdkMsS0FBS3VDLFNBQVMzQixVQUFVWixLQUFLK0I7O01BR2pDWSxLQUFLQyxHQUFNQztRQUNQLE1BQU1DLElBQVMvQyxNQUFNNEMsS0FBS0MsR0FBTUM7UUFFaEMsT0FEQUQsRUFBS0csTUFBTS9DLEtBQUt1QyxTQUFTN0IsYUFDbEJvQzs7TUFHWEUsT0FBT0MsR0FBT0MsR0FBV0M7UUFDckJuRCxLQUFLdUMsU0FBUzVCLFNBQVNzQyxJQUN2QkU7O01BR0pDLE1BQU1DO01BSU5DLFNBQVNDLEdBQUtKO1FBQ1ZuRCxLQUFLdUMsU0FBU04sWUFBWWpDLEtBQUsrQixVQUMvQmhDLE1BQU11RCxTQUFTQyxHQUFLSjs7O0lBTTVCM0QsRUFBUTJDLGdCQUhSLFNBQXVCSTtNQUNuQixPQUFPLElBQUlGLEVBQXNCRTs7Ozs7SUN2Q3JDLElBQUlpQixJQUFtQnhELFFBQVFBLEtBQUt3RCxvQkFBcUJsRSxPQUFPbUUsU0FBUyxTQUFVQyxHQUFHQyxHQUFHQyxHQUFHQztXQUM3RUMsTUFBUEQsTUFBa0JBLElBQUtELElBQzNCdEUsT0FBT0MsZUFBZW1FLEdBQUdHLEdBQUk7UUFBRUUsYUFBWTtRQUFNQyxLQUFLO1VBQWEsT0FBT0wsRUFBRUM7OztRQUMzRSxTQUFVRixHQUFHQyxHQUFHQyxHQUFHQztXQUNUQyxNQUFQRCxNQUFrQkEsSUFBS0QsSUFDM0JGLEVBQUVHLEtBQU1GLEVBQUVDOztJQUVkLElBQUlLLElBQWdCakUsUUFBUUEsS0FBS2lFLGdCQUFpQixTQUFTTixHQUFHbkU7TUFDMUQsS0FBSyxJQUFJMEUsS0FBS1AsR0FBYSxjQUFOTyxLQUFvQjVFLE9BQU82RSxVQUFVQyxlQUFlQyxLQUFLN0UsR0FBUzBFLE1BQUlWLEVBQWdCaEUsR0FBU21FLEdBQUdPOztJQUUzSDVFLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztNQUFFQyxRQUFPO1FBQ3REd0UsRUFBYSxFQUFRLFFBQWV6RSxJQUNwQ3lFLEVBQWEsRUFBUSxRQUFvQnpFLElBQ3pDeUUsRUFBYSxFQUFRLFFBQWtCekUsSUFDdkN5RSxFQUFhLEVBQVEsUUFBc0J6RSxJQUMzQ3lFLEVBQWEsRUFBUSxRQUFnQnpFOzs7O0lDZnJDRixPQUFPQyxlQUFlQyxHQUFTLGNBQWM7TUFBRUMsUUFBTztRQUN0REQsRUFBUThFLDRCQUF1QjtJQUMvQixNQUFNQyxJQUFhLEVBQVE7SUFjM0IvRSxFQUFROEUsdUJBYlIsU0FBOEJFO01BQzFCLE9BQU9ELEVBQVdFLEtBQUksQ0FBQ2hFLEdBQU95QyxHQUFXd0I7UUFDckM7VUFHSSxZQURBQSxFQUFHLE1BRGNGLEVBQWdCL0Q7VUFJckMsT0FBTzhDO1VBRUgsWUFEQW1CLEVBQUduQjs7Ozs7OztJQ1hBLFNBQVNvQixFQUF5QkMsR0FBUUM7TUFDdkQsSUFBYyxRQUFWRCxHQUFnQixPQUFPO01BQzNCLElBQUlFLElDSFMsU0FBdUNGLEdBQVFDO1FBQzVELElBQWMsUUFBVkQsR0FBZ0IsT0FBTztRQUMzQixJQUFJRSxJQUFTO1FBQ2IsSUFBSUMsSUFBYXpGLE9BQU9ZLEtBQUswRTtRQUM3QixJQUFJSSxHQUFLQztRQUVULEtBQUtBLElBQUksR0FBR0EsSUFBSUYsRUFBV0csUUFBUUQsS0FDakNELElBQU1ELEVBQVdFLElBQ2JKLEVBQVNNLFFBQVFILE1BQVEsTUFDN0JGLEVBQU9FLEtBQU9KLEVBQU9JO1FBR3ZCLE9BQU9GO09EVE0sQ0FBNkJGLEdBQVFDO01BQ2xELElBQUlHLEdBQUtDO01BRVQsSUFBSTNGLE9BQU84Rix1QkFBdUI7UUFDaEMsSUFBSUMsSUFBbUIvRixPQUFPOEYsc0JBQXNCUjtRQUVwRCxLQUFLSyxJQUFJLEdBQUdBLElBQUlJLEVBQWlCSCxRQUFRRCxLQUN2Q0QsSUFBTUssRUFBaUJKLElBQ25CSixFQUFTTSxRQUFRSCxNQUFRLEtBQ3hCMUYsT0FBTzZFLFVBQVVtQixxQkFBcUJqQixLQUFLTyxHQUFRSSxPQUN4REYsRUFBT0UsS0FBT0osRUFBT0k7O01BSXpCLE9BQU9GOztJRWpCTSxTQUFTLEVBQWdCTCxHQUFLTyxHQUFLdkY7TUFZaEQsT0FYSXVGLEtBQU9QLElBQ1RuRixPQUFPQyxlQUFla0YsR0FBS08sR0FBSztRQUM5QnZGLE9BQU9BO1FBQ1BzRSxhQUFZO1FBQ1p3QixlQUFjO1FBQ2RDLFdBQVU7V0FHWmYsRUFBSU8sS0FBT3ZGLEdBR05nRjs7Ozs7Ozs7SUNSVCxNQUFNZ0IsSUFBbUI7TUFDdkJDLFNBQVM7TUFDVEMsU0FBUztNQUNUQyxTQUFTOztJQUVYLE1BQU1DLElBQU0sRUFBQztNQUNYQyxRQUFRLEVBQUM7UUFDUEMsY0FBYztRQUNkQyxNQUFNO1FBQ05DLE1BQU07U0FDTDtRQUNERixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsTUFBTTs7TUFFUkQsTUFBTTtNQUNORSxTQUFTLEVBQUM7UUFDUkgsY0FBYztRQUNkQyxNQUFNO1FBQ05DLE1BQU07U0FDTDtRQUNERixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsTUFBTTtTQUNMO1FBQ0RGLGNBQWM7UUFDZEMsTUFBTTtRQUNOQyxNQUFNO1NBQ0w7UUFDREYsY0FBYztRQUNkQyxNQUFNO1FBQ05DLE1BQU07U0FDTDtRQUNERixjQUFjO1FBQ2RDLE1BQU07UUFDTkMsTUFBTTs7TUFFUkUsaUJBQWlCO01BQ2pCRixNQUFNOztJQUdSLE1BQU1HO01BQ0p2RztRQUNFLEtBQUksU0FDRndHLElBQVVaLEVBQWlCRSxTQUFPLGNBQ2xDVyxJQUFlLGdEQUNiQyxVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLO1FBNkN4RSxJQUFJQztRQTNDSixFQUFnQnhHLE1BQU0saUJBQWlCLE9BRXZDLEVBQWdCQSxNQUFNLHVCQUF1QixFQUFDLHVDQUF1Qyx1Q0FBdUMseUNBQXlDLHNDQUFzQyw2Q0FBNkMscUNBQXFDLDRDQUE0Qyx3Q0FBd0M7UUFFalgsRUFBZ0JBLE1BQU0saUJBQWlCLEVBQUM7VUFDdEN5RyxHQUFHO1VBQ0hDLEdBQUc7V0FDRjtVQUNERCxHQUFHO1VBQ0hDLEdBQUc7V0FDRjtVQUNERCxHQUFHO1VBQ0hDLEdBQUc7V0FDRjtVQUNERCxHQUFHO1VBQ0hDLEdBQUc7V0FDRjtVQUNERCxHQUFHO1VBQ0hDLEdBQUc7V0FDRjtVQUNERCxHQUFHO1VBQ0hDLEdBQUc7V0FDRjtVQUNERCxHQUFHO1VBQ0hDLEdBQUc7V0FDRjtVQUNERCxHQUFHO1VBQ0hDLEdBQUc7V0FDRjtVQUNERCxHQUFHO1VBQ0hDLEdBQUc7Y0FHTCxFQUFnQjFHLE1BQU0saUJBQWlCLEVBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BRWhFLEVBQWdCQSxNQUFNLFlBQVl5RixFQUFpQkUsVUFFbkQsRUFBZ0IzRixNQUFNLHdCQUFtQjtRQUV6QyxFQUFnQkEsTUFBTSxnQkFBVyxJQUVqQyxFQUFnQkEsTUFBTSx5QkFBb0I7UUFJMUM7VUFFRXdHLElBRGlCLElBQUlHLElBQUlOLEdBQ1ZPO1VBQ2YsT0FBT0M7VUFDUCxNQUFNQyxJQUFZO1VBQ2xCTixJQUFNLFdBQVdPLE9BQU9WLEdBQVMsa0JBQWtCVSxPQUFPRDs7UUFHNUQsZ0JBQTRCTixJQUM1QnhHLEtBQUtnSCxtQkFBbUIsS0FBSSxJQUFKLENBQW9CbkIsR0FBS1MsSUFDakR0RyxLQUFLaUgsa0JBQWtCWCxHQUN2QnRHLEtBQUtrSCxXQUFVLEdBQ2ZsSCxLQUFLbUgsV0FBV2Q7O01BR2RlO1FBQ0YsT0FBTztVQUNMQyxjQUFjckgsS0FBS3NIO1VBQ25CTCxpQkFBaUJqSCxLQUFLaUg7VUFDdEJNLG9CQUFvQnZILEtBQUt3SDtVQUN6QkMsY0FBY3pILEtBQUswSDtVQUNuQkMsY0FBYzNILEtBQUs0SDtVQUNuQlYsU0FBU2xILEtBQUtrSDs7O01BSWxCVyxxQkFBcUJDO1FBQ25CLEtBQUksTUFDRkMsS0FBTyxHQUFLLFVBQ1pDLEdBQVEsWUFDUkMsS0FDRUg7UUFFSjtVQUNFLElBQUlDLEtBQVEvSCxLQUFLbUgsYUFBYTFCLEVBQWlCRSxTQUFTLE9BQU8zRixLQUFLb0g7VUFFcEUsSUFBSXBILEtBQUtrSCxXQUFXbEgsS0FBS21ILGFBQWExQixFQUFpQkUsU0FBUyxPQUFPM0YsS0FBS29IO1VBQzVFLE1BQU1jLEtBQW1CLEtBQUFDLFdBQVVGO1VBQ25DLE1BQU1HLFVBQW9CcEksS0FBS2dILGlCQUFpQnFCLFFBQVFDLFdBQVdOLEdBQVVFLEdBQWtCN0Q7VUFDL0YsT0FBTSxjQUNKZ0QsR0FBWSxvQkFDWkUsR0FBa0IsZUFDbEJnQixHQUFhLGVBQ2JDLEdBQWEsY0FDYmIsS0FDRVM7VUFDSnBJLEtBQUtzSCxnQkFBZ0JELEdBQ3JCckgsS0FBSzRILGdCQUFnQkQsRUFBYTNHLEtBQUl5SCxLQUFLQyxPQUFPRDtVQUNsRCxNQUFNRSxJQUFtQjtVQUN6QixNQUFNQyxJQUFpQjtVQUV2QixLQUFLLElBQUlDLElBQVEsR0FBR0EsSUFBUXRCLEVBQW1CckMsUUFBUTJELEtBQVMsR0FBRztZQUNqRSxNQUFNQyxJQUFrQnZCLEVBQW1Cc0I7WUFDM0MsTUFBTUUsSUFBUVIsRUFBY007WUFDNUIsTUFBTUcsSUFBUVIsRUFBY0s7WUFDNUIsTUFBTUksSUFBVyxXQUFXbEMsT0FBTytCLEVBQWdCSSxNQUFNLEtBQUssSUFBSTtZQUNsRVAsRUFBaUJqRyxLQUFLdUcsSUFDdEJMLEVBQWVsRyxLQUFLO2NBQ2xCK0QsSUFBRyxLQUFBMEMsT0FBTUosR0FBT0ssUUFBUSxNQUFNO2NBQzlCMUMsSUFBRyxLQUFBeUMsT0FBTUgsR0FBT0ksUUFBUSxNQUFNOzs7VUFPbEMsT0FIQXBKLEtBQUt3SCxzQkFBc0JtQixHQUMzQjNJLEtBQUswSCxnQkFBZ0JrQixHQUNyQjVJLEtBQUtrSCxXQUFVLEdBQ1JsSCxLQUFLb0g7VUFDWixPQUFPaUM7VUFDUCxJQUFJckosS0FBS21ILGFBQWExQixFQUFpQkUsU0FDckMsT0FBTzNGLEtBQUtvSDtVQUdkLE1BQU1pQzs7Ozs7Ozs7SUNyS1osU0FBU0MsRUFBUUMsR0FBUUM7TUFBa0IsSUFBSXRKLElBQU9aLE9BQU9ZLEtBQUtxSjtNQUFTLElBQUlqSyxPQUFPOEYsdUJBQXVCO1FBQUUsSUFBSXFFLElBQVVuSyxPQUFPOEYsc0JBQXNCbUU7UUFBU0MsTUFBbUJDLElBQVVBLEVBQVFDLFFBQU8sU0FBVUM7VUFBTyxPQUFPckssT0FBT3NLLHlCQUF5QkwsR0FBUUksR0FBSzVGO2NBQWlCN0QsRUFBS3dDLEtBQUttSCxNQUFNM0osR0FBTXVKOztNQUFZLE9BQU92Sjs7SUFFOVUsU0FBUzRKLEVBQWNoRjtNQUFVLEtBQUssSUFBSUcsSUFBSSxHQUFHQSxJQUFJc0IsVUFBVXJCLFFBQVFELEtBQUs7UUFBRSxJQUFJTCxJQUFTLFFBQVEyQixVQUFVdEIsS0FBS3NCLFVBQVV0QixLQUFLO1FBQUlBLElBQUksSUFBSXFFLEVBQVFoSyxPQUFPc0YsS0FBUyxHQUFJekUsU0FBUSxTQUFVNkU7VUFBTyxFQUFnQkYsR0FBUUUsR0FBS0osRUFBT0k7Y0FBWTFGLE9BQU95Syw0QkFBNEJ6SyxPQUFPMEssaUJBQWlCbEYsR0FBUXhGLE9BQU95SywwQkFBMEJuRixNQUFXMEUsRUFBUWhLLE9BQU9zRixJQUFTekUsU0FBUSxTQUFVNkU7VUFBTzFGLE9BQU9DLGVBQWV1RixHQUFRRSxHQUFLMUYsT0FBT3NLLHlCQUF5QmhGLEdBQVFJOzs7TUFBYSxPQUFPRjs7SUFDamYsTUFBTW1GLElBQU0sY0FBbUI7SUFDL0JBLEVBQUlDLFNBQVMsRUFBQUMsT0FBQTtJQUNiLElBQUlDLElBQVM7SUFDYixJQUFJQyxJQUFZO0lBSWhCLFNBQVNDLEVBQWFDO01BQ3BCRixJQUFZRTs7SUFRZCxTQUFTQyxFQUFVQztNQUNqQkwsSUFBU0s7O0lBYVgsU0FBU0M7TUFDUCxNQUFNQyxJQUFVO01BR2hCLE9BRklQLE1BQVFPLEVBM0JZLGVBMkJpQlAsSUFDckNDLE1BQVdNLEVBM0JjLGtCQTJCb0JOLElBQzFDTTs7SUFHVCxTQUFTQyxFQUFpQkM7TUFDeEJaLEVBQUlhLEtBQUssYUFBYS9ELE9BQU84RCxFQUFTRSxRQUFRLEtBQUtoRSxPQUFPOEQsRUFBU0csY0FDbkVmLEVBQUlhLEtBQUssUUFBUS9ELE9BQU84RCxFQUFTckU7O0lBR25DLE1BQU15RSxJQUFpQixDQUFDQyxHQUFJQztNQUMxQixNQUFNQyxJQUFVLElBQUlDLFNBQVEsQ0FBQ0MsR0FBU0M7UUFDcEMsTUFBTUMsSUFBS0MsWUFBVztVQUNwQkMsYUFBYUYsSUFDYkQsRUFBTyxJQUFJSSxNQUFNLGdCQUFnQjVFLE9BQU9tRSxHQUFJO1lBQzNDQTs7TUFFTCxPQUFPRyxRQUFRTyxLQUFLLEVBQUNULEdBQVNDOztJQUVoQyxNQUFNcEgsSUFBTTZELGVBQWdCckI7TUFDMUIsSUFBSXFGLElBQVd0RixVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLO01BQ25GLElBQUl1RixJQUFnQnZGLFVBQVVyQixTQUFTLFVBQXNCcEIsTUFBakJ5QyxVQUFVLEtBQW1CQSxVQUFVLEtBQUs7TUFDeEYsTUFBTXdGLElBQWlCO1FBQ3JCQyxNQUFNO1FBQ05yQixTQUFTOztNQUdQbUIsRUFBY0csY0FDaEJGLEVBQWVwQixVQUFVYixFQUFjQSxFQUFjLElBQUlpQyxFQUFlcEIsVUFBVUQ7TUFHcEYsTUFBTTdILElBQVUsSUFBTWtKLEdBQWdCRixHQUFVO1FBQzlDSyxRQUFROztNQUVWLE1BQU1yQixVQUFpQnNCLE1BQU0zRixHQUFLM0Q7TUFFbEMsSUFBSWdJLEVBQVN1QixJQUNYLE9BQU92QixFQUFTd0I7TUFJbEIsTUFEQXpCLEVBQWlCQyxJQUNYQTs7SUFFUixNQUFNeUIsSUFBTyxTQUFVOUY7TUFDckIsSUFBSStGLElBQU9oRyxVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLO01BQy9FLElBQUlzRixJQUFXdEYsVUFBVXJCLFNBQVMsVUFBc0JwQixNQUFqQnlDLFVBQVUsS0FBbUJBLFVBQVUsS0FBSztNQUNuRixJQUFJdUYsSUFBZ0J2RixVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLO01BQ3hGLE1BQU13RixJQUFpQjtRQUNyQkMsTUFBTTtRQUNOckIsU0FBUztVQUNQLGdCQUFnQjs7O01BSWhCbUIsRUFBY0csY0FDaEJGLEVBQWVwQixVQUFVYixFQUFjQSxFQUFjLElBQUlpQyxFQUFlcEIsVUFBVUQ7TUFHcEYsTUFBTTdILElBQVUsSUFBTWtKLEdBQWdCRixHQUFVO1FBQzlDSyxRQUFROztNQWVWLE9BWElKLEVBQWNVLG9CQUloQjNKLEVBQVE0SixPQUFPRixHQUV5QixzQ0FBcEMxSixFQUFROEgsUUFBUSwwQkFBOEQ5SCxFQUFROEgsUUFBUSxtQkFFbEc5SCxFQUFRNEosT0FBT0MsS0FBS0MsVUFBVUo7TUFHekJ0QixFQUFlYSxFQUFjVixXQUFXLEtBQU9lLE1BQU0zRixHQUFLM0QsR0FBUytKLE1BQUsvQjtRQUM3RSxJQUFJQSxFQUFTdUIsSUFDWCxPQUFPdkIsRUFBU3dCO1FBSWxCLE1BREF6QixFQUFpQkMsSUFDWEE7OztJQXNGVixNQUFNZ0MsSUFBd0IsQ0FBQ1gsR0FBUVksT0FBZTtNQUNwREMsU0FBUztNQUNUYjtNQUNBVixJQUFJO01BQ0p3QixRQUFRRjs7Ozs7Ozs7O0lDMU1zQm5HOzs7Ozs7Ozs7OztJQ0doQyxTQUFTc0c7SUFLVCxNQUFNQyxJQUFNO0lBRVosTUFBTUMsVUFBOEIsRUFBQTdLO01BQ2xDekMsWUFBWWlJO1FBQ1YsS0FBSSxNQUNGOUIsR0FBSSxRQUNKbEIsR0FBTSxjQUNOc0ksSUFBZUMsUUFBTSxjQUNyQkMsSUFBZSxPQUNieEY7UUFxQkosSUFwQkEvSCxNQUFNO1VBQ0p5QyxhQUFZO1lBR2QsRUFBZ0J4QyxNQUFNLGNBQVMsSUFFL0IsRUFBZ0JBLE1BQU0saUJBQVksSUFFbEMsRUFBZ0JBLE1BQU0sY0FBUyxJQUUvQixFQUFnQkEsTUFBTSxnQkFBVyxJQUVqQyxFQUFnQkEsTUFBTSxzQkFBaUI7UUFFdkMsRUFBZ0JBLE1BQU0sc0JBQWlCLElBRXZDLEVBQWdCQSxNQUFNLG1CQUFjLElBRXBDLEVBQWdCQSxNQUFNLHVCQUFrQixLQUVuQ2dHLE1BQVNsQixHQUNaLE1BQU0sSUFBSTZHLE1BQU07UUFHbEIzTCxLQUFLdU4sU0FBUSxHQUNidk4sS0FBS3dOLFlBQVcsR0FDaEJ4TixLQUFLeU4sUUFBUXpILEdBQ2JoRyxLQUFLME4sVUFBVTVJLEdBRWY5RSxLQUFLMk4sZ0JBQWdCUCxHQUNyQnBOLEtBQUs0TixnQkFBZ0JOLEdBQ3JCdE4sS0FBSzZOLGFBQWE3TixLQUFLOE4sVUFBVUMsS0FBSy9OO1FBQ3RDQSxLQUFLZ08saUJBQWlCLE1BQ3RCWCxPQUFPWSxpQkFBaUIsV0FBV2pPLEtBQUs2TixhQUFZLElBRXBEN04sS0FBS2tPOztNQUdQQztRQUNFbk8sS0FBS29PLFFBRUxwTyxLQUFLZ0QsT0FsREcsT0FrRFMsTUFBTWlLLElBRXZCak4sS0FBS3dOLFlBQVcsR0FDaEJ4TixLQUFLdU4sU0FBUTs7TUFHZlc7UUFDRWxPLEtBQUtnRCxPQTNERyxPQTJEUyxNQUFNaUssSUFFdkJqTixLQUFLb087O01BR1BDLFFBQVE5QjtRQUNOLElBQUt2TSxLQUFLdU4sT0FlSCxJQTlFQyxVQThFR2hCLEdBQ1R2TSxLQUFLbU8sZUFHTDtVQUNFbk8sS0FBSzBDLEtBQUs2SjtVQUNWLE9BQU9oSjtVQUNQdkQsS0FBSzRCLEtBQUssU0FBUzJCO2VBdkZmLFVBbUVGZ0osS0FDRnZNLEtBQUt3TixZQUFXLEdBRWhCeE4sS0FBS2dELE9BQU9rSyxHQUFLLE1BQU1ELE1BQ2RWLE1BQVNXLE1BQ2xCbE4sS0FBS3VOLFNBQVEsR0FFUnZOLEtBQUt3TixZQUNSeE4sS0FBS2dELE9BQU9rSyxHQUFLLE1BQU1EO1FBR3pCak4sS0FBS3NPOztNQWNYQyxhQUFhaEM7UUFDWCxNQUFNaUMsSUFBbUJ4TyxLQUFLNE47UUFFOUI1TixLQUFLMk4sY0FBY2MsWUFBWTtVQUM3QjNKLFFBQVE5RSxLQUFLME47VUFDYm5CO1dBQ0NpQzs7TUFHTFYsVUFBVVk7UUFDUixNQUFNQyxJQUFVRCxFQUFNbkM7UUFFSyxRQUF2QnZNLEtBQUs0TixpQkFBeUJjLEVBQU1FLFdBQVc1TyxLQUFLNE4saUJBQWlCYyxFQUFNOUosV0FBVzVFLEtBQUsyTixpQkFBb0MsbUJBQVpnQixLQUF3QkEsRUFBUTdKLFdBQVc5RSxLQUFLeU4sVUFBVWtCLEVBQVFwQyxRQUl6THZNLEtBQUtxTyxRQUFRTSxFQUFRcEM7O01BR3ZCbko7TUFJQUosT0FBT3VKLEdBQU0xRixHQUFHbkM7UUFDZDFFLEtBQUt1TyxhQUFhaEMsSUFFbEI3SDs7TUFHRnBCO1FBQ0UrSixPQUFPd0Isb0JBQW9CLFdBQVc3TyxLQUFLNk4sYUFBWTs7O0lBSzNELFNBQVNpQixFQUFVL00sR0FBU2dOLEdBQVNDO01BQ25DO1FBQ0VDLFFBQVFwRixNQUFNOUgsR0FBU2dOLEdBQVNDO1FBQ2hDLE9BQU96TDtRQUVQa0ksWUFBVztVQUNULE1BQU1sSTs7OztJQWdCWixNQUFNMkwsVUFBeUIsRUFBQUM7TUFDN0J2TixLQUFLcUU7UUFDSCxJQUFJbUosSUFBbUIsWUFBVG5KO1FBQ2QsTUFBTW9KLElBQVNyUCxLQUFLc1A7UUFFcEIsU0FBZXhMLE1BQVh1TCxHQUNGRCxJQUFVQSxVQUE0QnRMLE1BQWpCdUwsRUFBT2hHLFlBQ3ZCLEtBQUsrRixHQUNWLFFBQU87UUFJVCxLQUFLLElBQUlHLElBQU9oSixVQUFVckIsUUFBUThKLElBQU8sSUFBSVEsTUFBTUQsSUFBTyxJQUFJQSxJQUFPLElBQUksSUFBSUUsSUFBTyxHQUFHQSxJQUFPRixHQUFNRSxLQUNsR1QsRUFBS1MsSUFBTyxLQUFLbEosVUFBVWtKO1FBRzdCLElBQUlMLEdBQVM7VUFDWCxJQUFJTTtVQU1KLElBSklWLEVBQUs5SixTQUFTLE9BQ2Z3SyxLQUFNVixJQUdMVSxhQUFjL0QsT0FHaEIsTUFBTStEO1VBSVIsTUFBTW5NLElBQU0sSUFBSW9JLE1BQU0sbUJBQW1CNUUsT0FBTzJJLElBQUssS0FBSzNJLE9BQU8ySSxFQUFHZixTQUFTLE9BQU87VUFFcEYsTUFEQXBMLEVBQUl3TCxVQUFVVyxHQUNSbk07O1FBR1IsTUFBTXhCLElBQVVzTixFQUFPcEo7UUFFdkIsU0FBZ0JuQyxNQUFaL0IsR0FDRixRQUFPO1FBR1QsSUFBdUIscUJBQVpBLEdBQ1QrTSxFQUFVL00sR0FBUy9CLE1BQU1nUCxTQUNwQjtVQUNMLE1BQU1XLElBQU01TixFQUFRbUQ7VUFDcEIsTUFBTTBLLElBeERaLFNBQW9CQztZQUNsQixNQUFNQyxJQUFJRCxFQUFJM0s7WUFDZCxNQUFNNkssSUFBTyxJQUFJUCxNQUFNTTtZQUV2QixLQUFLLElBQUk3SyxJQUFJLEdBQUdBLElBQUk2SyxHQUFHN0ssS0FBSyxHQUMxQjhLLEVBQUs5SyxLQUFLNEssRUFBSTVLO1lBR2hCLE9BQU84SztXQWdEZUMsQ0FBV2pPO1VBRTdCLEtBQUssSUFBSWtELElBQUksR0FBR0EsSUFBSTBLLEdBQUsxSyxLQUFLLEdBQzVCNkosRUFBVWMsRUFBVTNLLElBQUlqRixNQUFNZ1A7O1FBSWxDLFFBQU87OztJQUtYLE1BQU1pQixVQUEwQnRFO01BQzlCOUwsWUFBWWlJO1FBQ1YsS0FBSSxNQUNGb0ksR0FBSSxTQUNKdkIsR0FBTyxNQUNQcEMsS0FDRXpFO1FBRUosS0FBS1ksT0FBT3lILFVBQVVELElBQ3BCLE1BQU0sSUFBSXZFLE1BQU07UUFHbEIsS0FBS2dELEtBQThCLG1CQUFaQSxHQUNyQixNQUFNLElBQUloRCxNQUFNO1FBR2xCNUwsTUFBTTRPLElBRU4sRUFBZ0IzTyxNQUFNLGFBQVEsSUFFOUIsRUFBZ0JBLE1BQU0sYUFBUSxJQUU5QkEsS0FBS2tRLE9BQU9BLFFBRUNwTSxNQUFUeUksTUFDRnZNLEtBQUt1TSxPQUFPQTs7TUFJaEI2RDtRQUNFLE9BQU8sSUFBVTtVQUNmRixNQUFNbFEsS0FBS2tRO1VBQ1h2QixTQUFTM08sS0FBSzJPO1VBQ2RwQyxNQUFNdk0sS0FBS3VNO1VBQ1g4RCxPQUFPclEsS0FBS3FROzs7O0lBcURsQixTQUFTQztNQUNQLE1BQU1DLElBQVE7TUFNZCxNQUFNbEIsSUFBUyxJQUFJSDtNQXdDbkIsTUFBTXNCLElBQVMsSUFBSSxFQUFBbE8sT0FBTztRQUN4QkUsYUFBWTtRQUNaaU8sTUE5Q0Y7VUFDRSxRQUFPOztRQThDUDFOLE9BdEJGLFNBQXdCMk4sR0FBS3hOLEdBQVd3QjtVQUN0QyxJQUFJbkI7VUFFSjthQUMwQm1OLEVBQUlsRixLQVJoQyxTQUE2QmtGO2NBQzNCckIsRUFBT3pOLEtBQUssZ0JBQWdCOE87YUFVeEJDLENBQW9CRCxLQTFCMUIsU0FBeUJBO2NBQ3ZCLE1BQU0zQixJQUFVd0IsRUFBTUcsRUFBSWxGO2NBRTFCLEtBQUt1RCxHQUNILE1BQU0sSUFBSXBELE1BQU0sNENBQTRDNUUsT0FBTzJKLEVBQUlsRixJQUFJO3FCQUd0RStFLEVBQU1HLEVBQUlsRixLQUVqQmxNLE9BQU8yQixPQUFPOE4sRUFBUTJCLEtBQUtBLElBRzNCakYsV0FBV3NELEVBQVE2QjthQWdCZkMsQ0FBZ0JIO1lBRWxCLE9BQU9JO1lBQ1B2TixJQUFNdU47O1VBSVJwTSxFQUFHbkI7OztNQXFCTCxPQUFPO1FBQ0w4TDtRQUNBMEIsWUFkaUIsQ0FBQ0MsR0FBS04sR0FBS08sR0FBTUw7VUFFbENKLEVBQU85TixLQUFLc08sSUFFWlQsRUFBTVMsRUFBSXhGLE1BQU07WUFDZHdGO1lBQ0FOO1lBQ0FPO1lBQ0FMOzs7UUFPRko7OztJQXFCSixTQUFTVTtNQUNQLE9BQU8sQ0FBQ0YsR0FBS04sR0FBS08sR0FBTUU7UUFDdEIsTUFBTUMsSUFBYUosRUFBSXhGO1FBQ3ZCLE1BQU02RixJRDFZTyxPQUFNLElBQVksSUFBSWpCLFNBQVMsT0MwWTlCa0I7UUFDZE4sRUFBSXhGLEtBQUs2RixHQUNUWCxFQUFJbEYsS0FBSzZGLEdBQ1RKLEdBQUtNO1VBQ0hQLEVBQUl4RixLQUFLNEYsR0FDVFYsRUFBSWxGLEtBQUs0RixHQUNURzs7OztJQXNETixTQUFTQyxFQUFVakksR0FBUUM7TUFBa0IsSUFBSXRKLElBQU9aLE9BQU9ZLEtBQUtxSjtNQUFTLElBQUlqSyxPQUFPOEYsdUJBQXVCO1FBQUUsSUFBSXFFLElBQVVuSyxPQUFPOEYsc0JBQXNCbUU7UUFBU0MsTUFBbUJDLElBQVVBLEVBQVFDLFFBQU8sU0FBVUM7VUFBTyxPQUFPckssT0FBT3NLLHlCQUF5QkwsR0FBUUksR0FBSzVGO2NBQWlCN0QsRUFBS3dDLEtBQUttSCxNQUFNM0osR0FBTXVKOztNQUFZLE9BQU92Sjs7SUFRaFYsTUFBTXVSLFVBQW1CdkM7TUFDdkJyUDtRQUNFRSxTQUVBLEVBQWdCQyxNQUFNLG9CQUFlLElBRXJDQSxLQUFLMFIsY0FBYzs7TUFXckJDLCtCQUErQlgsR0FBS04sR0FBS2tCO1FBQ3ZDLE1BQU1DLElBQWlCO1FBQ3ZCLElBQUl4SSxJQUFRO1FBQ1osSUFBSXlJLEtBQWE7UUFFakIsS0FBSyxNQUFNZixLQUFjYSxHQUd2QixLQUZDdkksR0FBT3lJLFdBQW9CTCxFQUFXTSxlQUFlZixHQUFLTixHQUFLSyxHQUFZYyxJQUV4RUMsR0FDRjtRQUlKLE9BQU8sRUFBQ3pJLEdBQU95SSxHQUFZRCxFQUFlRzs7TUFVNUNMLHNCQUFzQlgsR0FBS04sR0FBS0ssR0FBWWM7UUFDMUMsT0FBTyxJQUFJeEcsU0FBUUM7VUFDakIsTUFBTXNGLElBQU1yTjtZQUNWLE1BQU04RixJQUFROUYsS0FBT21OLEVBQUlySDtZQUVyQkEsTUFDRnFILEVBQUlySCxTQUFRLEtBQUE0SSxnQkFBZTVJLEtBSTdCaUMsRUFBUSxFQUFDakMsSUFBTzs7VUFHbEIsTUFBTTRILElBQU9pQjtZQUNQeEIsRUFBSXJILFFBQ051SCxFQUFJRixFQUFJckgsVUFFSjZJLE1BQzJCLHFCQUFsQkEsS0FDVHRCLEVBQUksSUFBSVgsRUFBa0I7Y0FDeEJDLE9BQU87Y0FDUHZCLFNBQVM7aUJBSWJrRCxFQUFlblAsS0FBS3dQLEtBSXRCNUcsRUFBUSxFQUFDLE9BQU07O1VBSW5CO1lBQ0V5RixFQUFXQyxHQUFLTixHQUFLTyxHQUFNTDtZQUMzQixPQUFPdkg7WUFDUHVILEVBQUl2SDs7OztNQVVWc0ksZ0NBQWdDUTtRQUM5QixLQUFLLE1BQU1wUSxLQUFXb1EsU0FDZCxJQUFJOUcsU0FBUSxDQUFDQyxHQUFTQztVQUMxQnhKLEdBQVF3QixLQUFPQSxJQUFNZ0ksRUFBT2hJLEtBQU8rSDs7O01BVXpDcUcsMkJBQTJCWCxHQUFLTixHQUFLb0I7UUFDbkMsTUFBTSxZQUFZcEIsUUFBVSxXQUFXQSxJQUNyQyxNQUFNLElBQUlULEVBQWtCO1VBQzFCQyxPQUFPO1VBQ1B2QixTQUFTOztRQUliLEtBQUttRCxHQUNILE1BQU0sSUFBSTdCLEVBQWtCO1VBQzFCQyxPQUFPO1VBQ1B2QixTQUFTOzs7TUFXZmpNLEtBQUtxTztRQUNIL1EsS0FBSzBSLFlBQVloUCxLQUFLcU87O01BR3hCcUIsT0FBT3BCLEdBQUt0TTtRQUNWLElBQUlBLEtBQW9CLHFCQUFQQSxHQUNmLE1BQU0sSUFBSWlILE1BQU07UUFHbEIsT0FBSTZELE1BQU02QyxRQUFRckIsS0FDWnRNLElBQ0sxRSxLQUFLc1MsYUFBYXRCLEdBQUt0TSxLQUd6QjFFLEtBQUtzUyxhQUFhdEIsS0FHdkJ0TSxJQUNLMUUsS0FBS3VTLFFBQVF2QixHQUFLdE0sS0FHcEIxRSxLQUFLd1MsZUFBZXhCOztNQVU3QnlCO1FBQ0UsT0FBTzVLLE9BQU9tSixHQUFLTixHQUFLTyxHQUFNTDtVQUM1QjtZQUNFLE9BQU84QixHQUFpQlosR0FBWUQsV0FBd0JKLEVBQVdrQixrQkFBa0IzQixHQUFLTixHQUFLMVEsS0FBSzBSO1lBRXhHLE9BQUlJLFdBQ0lMLEVBQVdtQixtQkFBbUJmLElBQzdCakIsRUFBSThCLE1BR056QixHQUFLcEo7Y0FDVjtzQkFDUTRKLEVBQVdtQixtQkFBbUJmO2dCQUNwQyxPQUFPeEk7Z0JBQ1AsT0FBT3dKLEVBQWdCeEo7O2NBR3pCLE9BQU93Sjs7WUFFVCxPQUFPeEo7WUFDUCxPQUFPdUgsRUFBSXZIOzs7O01BS2pCeEIsbUJBQW1CaUwsR0FBTXBPO1FBRXZCO1VBR0UsTUFBTXFPLFVBQWtCMUgsUUFBUTJILElBQ2hDRixFQUFLOVIsSUFBSWhCLEtBQUt3UyxlQUFlekUsS0FBSy9OO1VBRWxDLE9BQUkwRSxJQUNLQSxFQUFHLE1BQU1xTyxLQUdYQTtVQUNQLE9BQU8xSjtVQUNQLElBQUkzRSxHQUNGLE9BQU9BLEVBQUcyRTtVQUdaLE1BQU1BOzs7TUFRVm1KLGVBQWV4QjtRQUNiLE9BQU8sSUFBSTNGLFNBQVFDO1VBQ2pCdEwsS0FBS3VTLFFBQVF2QixJQUFLLENBQUNGLEdBQU1KO1lBR3ZCcEYsRUFBUW9GOzs7O01BWWQ3SSxjQUFjb0wsR0FBV3ZPO1FBQ3ZCLEtBQUt1TyxLQUFhekQsTUFBTTZDLFFBQVFZLE1BQW1DLG1CQUFkQSxHQUF3QjtVQUMzRSxNQUFNNUosSUFBUSxJQUFJNEcsRUFBa0I7WUFDbENDLE9BQU87WUFDUHZCLFNBQVM7O1VBRVgsT0FBT2pLLEVBQUcyRSxHQUFPO1lBQ2ZtQyxTQUFJMUg7WUFDSmlKLFNBQVM7WUFDVDFEOzs7UUFJSixJQUFnQyxtQkFBckI0SixFQUFVL0csUUFBcUI7VUFDeEMsTUFBTTdDLElBQVEsSUFBSTRHLEVBQWtCO1lBQ2xDQyxPQUFPO1lBQ1B2QixTQUFTOztVQUVYLE9BQU9qSyxFQUFHMkUsR0FBTztZQUNmbUMsSUFBSXlILEVBQVV6SDtZQUNkdUIsU0FBUztZQUNUMUQ7OztRQUlKLE1BQU0ySCxJQTNQVixTQUF5QmxNO1VBQVUsS0FBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUlzQixVQUFVckIsUUFBUUQsS0FBSztZQUFFLElBQUlMLElBQVMsUUFBUTJCLFVBQVV0QixLQUFLc0IsVUFBVXRCLEtBQUs7WUFBSUEsSUFBSSxJQUFJdU0sRUFBVWxTLE9BQU9zRixLQUFTLEdBQUl6RSxTQUFRLFNBQVU2RTtjQUFPLEVBQWdCRixHQUFRRSxHQUFLSixFQUFPSTtrQkFBWTFGLE9BQU95Syw0QkFBNEJ6SyxPQUFPMEssaUJBQWlCbEYsR0FBUXhGLE9BQU95SywwQkFBMEJuRixNQUFXNE0sRUFBVWxTLE9BQU9zRixJQUFTekUsU0FBUSxTQUFVNkU7Y0FBTzFGLE9BQU9DLGVBQWV1RixHQUFRRSxHQUFLMUYsT0FBT3NLLHlCQUF5QmhGLEdBQVFJOzs7VUFBYSxPQUFPRjtTQTJQdmVvTyxDQUFnQixJQUFJRDtRQUVoQyxNQUFNdkMsSUFBTTtVQUNWbEYsSUFBSXdGLEVBQUl4RjtVQUNSdUIsU0FBU2lFLEVBQUlqRTs7UUFFZixJQUFJMUQsSUFBUTtRQUVaO2dCQUNRckosS0FBS21ULGdCQUFnQm5DLEdBQUtOO1VBQ2hDLE9BQU8wQztVQUdQL0osSUFBUStKOztRQVlWLE9BVEkvSixhQUVLcUgsRUFBSTVOLFFBRU40TixFQUFJckgsVUFDUHFILEVBQUlySCxTQUFRLEtBQUE0SSxnQkFBZTVJLE1BSXhCM0UsRUFBRzJFLEdBQU9xSDs7TUFTbkI3SSxzQkFBc0JtSixHQUFLTjtRQUN6QixPQUFPckgsR0FBT3lJLEdBQVlELFdBQXdCSixFQUFXa0Isa0JBQWtCM0IsR0FBS04sR0FBSzFRLEtBQUswUjtRQVU5RixJQVBBRCxFQUFXNEIsb0JBQW9CckMsR0FBS04sR0FBS29CLFVBSW5DTCxFQUFXbUIsbUJBQW1CZixJQUdoQ3hJLEdBQ0YsTUFBTUE7OztJQStDWixNQUFNaUssVUFBa0IsRUFBQWhSO01BQ3RCekMsWUFBWWlJO1FBQ1YsS0FBSSxRQUNGeUwsR0FBTSxNQUNOdk4sS0FDRThCO1FBQ0ovSCxNQUFNO1VBQ0p5QyxhQUFZO1lBR2QsRUFBZ0J4QyxNQUFNLGdCQUFXLElBRWpDLEVBQWdCQSxNQUFNLGNBQVMsSUFFL0JBLEtBQUt3VCxVQUFVRCxHQUNmdlQsS0FBS3lOLFFBQVF6SDs7TUFPZjVDO01BWUFKLE9BQU9DLEdBQU9DLEdBQVdDO1FBQ3ZCbkQsS0FBS3dULFFBQVE5USxLQUFLO1VBQ2hCc0QsTUFBTWhHLEtBQUt5TjtVQUNYbEIsTUFBTXRKO1lBR1JFOzs7SUFLSixTQUFTLEdBQVFvRyxHQUFRQztNQUFrQixJQUFJdEosSUFBT1osT0FBT1ksS0FBS3FKO01BQVMsSUFBSWpLLE9BQU84Rix1QkFBdUI7UUFBRSxJQUFJcUUsSUFBVW5LLE9BQU84RixzQkFBc0JtRTtRQUFTQyxNQUFtQkMsSUFBVUEsRUFBUUMsUUFBTyxTQUFVQztVQUFPLE9BQU9ySyxPQUFPc0sseUJBQXlCTCxHQUFRSSxHQUFLNUY7Y0FBaUI3RCxFQUFLd0MsS0FBS21ILE1BQU0zSixHQUFNdUo7O01BQVksT0FBT3ZKOztJQUU5VSxTQUFTLEdBQWM0RTtNQUFVLEtBQUssSUFBSUcsSUFBSSxHQUFHQSxJQUFJc0IsVUFBVXJCLFFBQVFELEtBQUs7UUFBRSxJQUFJTCxJQUFTLFFBQVEyQixVQUFVdEIsS0FBS3NCLFVBQVV0QixLQUFLO1FBQUlBLElBQUksSUFBSSxHQUFRM0YsT0FBT3NGLEtBQVMsR0FBSXpFLFNBQVEsU0FBVTZFO1VBQU8sRUFBZ0JGLEdBQVFFLEdBQUtKLEVBQU9JO2NBQVkxRixPQUFPeUssNEJBQTRCekssT0FBTzBLLGlCQUFpQmxGLEdBQVF4RixPQUFPeUssMEJBQTBCbkYsTUFBVyxHQUFRdEYsT0FBT3NGLElBQVN6RSxTQUFRLFNBQVU2RTtVQUFPMUYsT0FBT0MsZUFBZXVGLEdBQVFFLEdBQUsxRixPQUFPc0sseUJBQXlCaEYsR0FBUUk7OztNQUFhLE9BQU9GOztJQUNqZixNQUFNMk8sS0FBbUJDLE9BQU87SUFDaEMsTUFBTUMsV0FBd0IsRUFBQXJSO01BQzVCekM7UUFFRUUsTUFBTSxHQUFjLEdBQWMsSUFEdkJ3RyxVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLLEtBQ2xDLElBQUk7VUFDL0MvRCxhQUFZO2FBR2QsRUFBZ0J4QyxNQUFNLG9CQUFlLElBRXJDLEVBQWdCQSxNQUFNLGtCQUFhLElBRW5DQSxLQUFLNFQsY0FBYzs7TUFHckJDLGFBQWE3TjtRQUVYLEtBQUtBLEdBQ0gsTUFBTSxJQUFJMkYsTUFBTTtRQUdsQixJQUFJM0wsS0FBSzRULFlBQVk1TixJQUNuQixNQUFNLElBQUkyRixNQUFNLDBDQUEwQzVFLE9BQU9mLEdBQU07UUFJekUsTUFBTThOLElBQVksSUFBSVIsRUFBVTtVQUM5QkMsUUFBUXZUO1VBQ1JnRzs7UUFNRixPQUpBaEcsS0FBSzRULFlBQVk1TixLQUFROE4sR0F1RDdCLFNBQXNCdEQsR0FBUXVEO1VBQzVCLE1BQU1yUCxJQUFLLElBQUtxUDtVQUNoQixJQUFJdkQsR0FBUTtZQUNWd0QsV0FBVTthQUNUdFAsSUFDSCxJQUFJOEwsR0FBUTtZQUNWaEwsV0FBVTthQUNUZDtTQTNERHVQLENBQWFqVSxPQUFNb1QsS0FBVVUsRUFBVUksUUFBUWQsVUFBVXRQLE1BQ2xEZ1E7O01BSVRLLGFBQWFuTztRQUVYLEtBQUtBLEdBQ0gsTUFBTSxJQUFJMkYsTUFBTTtRQUdsQixJQUFJM0wsS0FBSzRULFlBQVk1TixJQUNuQixNQUFNLElBQUkyRixNQUFNLDBDQUEwQzVFLE9BQU9mLEdBQU07UUFJekVoRyxLQUFLNFQsWUFBWTVOLEtBQVF5Tjs7TUFHM0JyUTtNQUlBSixPQUFPQyxHQUFPQyxHQUFXQztRQUN2QixPQUFNLE1BQ0o2QyxHQUFJLE1BQ0p1RyxLQUNFdEo7UUFFSixLQUFLK0MsR0FFSCxPQURBcUgsT0FBTytHLFFBQVFDLEtBQUssb0RBQW9EdE4sT0FBTzlELEdBQU8sUUFDL0VFO1FBSVQsTUFBTTJRLElBQVk5VCxLQUFLNFQsWUFBWTVOO1FBRW5DLE9BQUs4TixLQU1EQSxNQUFjTCxNQUNoQkssRUFBVXBSLEtBQUs2SixJQUdWcEosUUFUTGtLLE9BQU8rRyxRQUFRQyxLQUFLLGdEQUFnRHROLE9BQU9mLEdBQU07UUFDMUU3Qzs7O0lDNzVCRSxTQUFTbVIsR0FBUTdQO01BRzlCLE9BQU82UCxLQUFVLHFCQUFxQlosVUFBVSxtQkFBbUJBLE9BQU9hLFdBQVcsU0FBVTlQO1FBQzdGLGNBQWNBO1VBQ1osU0FBVUE7UUFDWixPQUFPQSxLQUFPLHFCQUFxQmlQLFVBQVVqUCxFQUFJNUUsZ0JBQWdCNlQsVUFBVWpQLE1BQVFpUCxPQUFPdlAsWUFBWSxrQkFBa0JNO1NBQ3ZINlAsR0FBUTdQOztJQ1BiLFNBQVMrUCxHQUFtQkMsR0FBS25KLEdBQVNDLEdBQVFtSixHQUFPQyxHQUFRM1AsR0FBSzRQO01BQ3BFO1FBQ0UsSUFBSTlKLElBQU8ySixFQUFJelAsR0FBSzRQO1FBQ3BCLElBQUluVixJQUFRcUwsRUFBS3JMO1FBQ2pCLE9BQU80SjtRQUVQLFlBREFrQyxFQUFPbEM7O01BSUx5QixFQUFLeUcsT0FDUGpHLEVBQVE3TCxLQUVSNEwsUUFBUUMsUUFBUTdMLEdBQU9tTixLQUFLOEgsR0FBT0M7O0lBSXhCLFNBQVNFLEdBQWtCQztNQUN4QyxPQUFPO1FBQ0wsSUFBSUMsSUFBTy9VLE1BQ1BnUCxJQUFPekk7UUFDWCxPQUFPLElBQUk4RSxTQUFRLFNBQVVDLEdBQVNDO1VBQ3BDLElBQUlrSixJQUFNSyxFQUFHakwsTUFBTWtMLEdBQU0vRjtVQUV6QixTQUFTMEYsRUFBTWpWO1lBQ2IrVSxHQUFtQkMsR0FBS25KLEdBQVNDLEdBQVFtSixHQUFPQyxHQUFRLFFBQVFsVjs7VUFHbEUsU0FBU2tWLEVBQU9wUjtZQUNkaVIsR0FBbUJDLEdBQUtuSixHQUFTQyxHQUFRbUosR0FBT0MsR0FBUSxTQUFTcFI7O1VBR25FbVIsT0FBTTVROzs7O0lDL0JHLFNBQVNrUixHQUFnQkMsR0FBVUM7TUFDaEQsTUFBTUQsYUFBb0JDLElBQ3hCLE1BQU0sSUFBSUMsVUFBVTs7SUNGeEIsU0FBU0MsR0FBa0J0USxHQUFRdVE7TUFDakMsS0FBSyxJQUFJcFEsSUFBSSxHQUFHQSxJQUFJb1EsRUFBTW5RLFFBQVFELEtBQUs7UUFDckMsSUFBSXFRLElBQWFELEVBQU1wUTtRQUN2QnFRLEVBQVd2UixhQUFhdVIsRUFBV3ZSLGVBQWMsR0FDakR1UixFQUFXL1AsZ0JBQWUsR0FDdEIsV0FBVytQLE1BQVlBLEVBQVc5UCxZQUFXLElBQ2pEbEcsT0FBT0MsZUFBZXVGLEdBQVF3USxFQUFXdFEsS0FBS3NROzs7SUFJbkMsU0FBU0MsR0FBYUwsR0FBYU0sR0FBWUM7TUFNNUQsT0FMSUQsS0FBWUosR0FBa0JGLEVBQVkvUSxXQUFXcVIsSUFDckRDLEtBQWFMLEdBQWtCRixHQUFhTyxJQUNoRG5XLE9BQU9DLGVBQWUyVixHQUFhLGFBQWE7UUFDOUMxUCxXQUFVO1VBRUwwUDs7Ozs7Ozs7OztJQ2hCTSxTQUFTUSxHQUF1Qlg7TUFDN0MsU0FBYSxNQUFUQSxHQUNGLE1BQU0sSUFBSVksZUFBZTtNQUczQixPQUFPWjs7SUNMTSxTQUFTYSxHQUFnQmxTLEdBQUdRO01BS3pDLE9BSkEwUixLQUFrQnRXLE9BQU91VyxpQkFBaUJ2VyxPQUFPdVcsZUFBZTlILFNBQVMsU0FBeUJySyxHQUFHUTtRQUVuRyxPQURBUixFQUFFb1MsWUFBWTVSLEdBQ1BSO1NBRUZrUyxHQUFnQmxTLEdBQUdROztJQ0piLFNBQVM2UixHQUFVQyxHQUFVQztNQUMxQyxJQUEwQixxQkFBZkEsS0FBNEMsU0FBZkEsR0FDdEMsTUFBTSxJQUFJZCxVQUFVO01BR3RCYSxFQUFTN1IsWUFBWTdFLE9BQU9tRSxPQUFPd1MsS0FBY0EsRUFBVzlSLFdBQVc7UUFDckV0RSxhQUFhO1VBQ1hKLE9BQU91VztVQUNQeFEsV0FBVTtVQUNWRCxlQUFjOztVQUdsQmpHLE9BQU9DLGVBQWV5VyxHQUFVLGFBQWE7UUFDM0N4USxXQUFVO1VBRVJ5USxLQUFZLEdBQWVELEdBQVVDOztJQ2Q1QixTQUFTQyxHQUEyQm5CLEdBQU0xUTtNQUN2RCxJQUFJQSxNQUEyQixhQUFsQmlRLEdBQVFqUSxNQUFzQyxxQkFBVEEsSUFDaEQsT0FBT0E7TUFDRixTQUFhLE1BQVRBLEdBQ1QsTUFBTSxJQUFJOFEsVUFBVTtNQUd0QixPQUFPLEdBQXNCSjs7SUNUaEIsU0FBU29CLEdBQWdCelM7TUFJdEMsT0FIQXlTLEtBQWtCN1csT0FBT3VXLGlCQUFpQnZXLE9BQU84VyxlQUFlckksU0FBUyxTQUF5QnJLO1FBQ2hHLE9BQU9BLEVBQUVvUyxhQUFheFcsT0FBTzhXLGVBQWUxUztTQUV2Q3lTLEdBQWdCelM7O0lDSlYsU0FBUzJTO01BQ3RCLElBQXVCLHNCQUFacEgsWUFBNEJBLFFBQVFxSCxXQUFXLFFBQU87TUFDakUsSUFBSXJILFFBQVFxSCxVQUFVQyxNQUFNLFFBQU87TUFDbkMsSUFBcUIscUJBQVZDLE9BQXNCLFFBQU87TUFFeEM7UUFFRSxPQURBQyxRQUFRdFMsVUFBVXVTLFFBQVFyUyxLQUFLNEssUUFBUXFILFVBQVVHLFNBQVMsS0FBSSxtQkFDdkQ7UUFDUCxPQUFPRTtRQUNQLFFBQU87OztJQ1BJLFNBQVNDLEdBQVdDLEdBQVE3SCxHQUFNOEg7TUFjL0MsT0FaRUYsS0FERSxPQUNXM0gsUUFBUXFILFVBQVV2SSxTQUVsQixTQUFvQjhJLEdBQVE3SCxHQUFNOEg7UUFDN0MsSUFBSUMsSUFBSSxFQUFDO1FBQ1RBLEVBQUVyVSxLQUFLbUgsTUFBTWtOLEdBQUcvSDtRQUVoQixJQUFJaUcsSUFBVyxLQURHK0IsU0FBU2pKLEtBQUtsRSxNQUFNZ04sR0FBUUU7UUFHOUMsT0FESUQsS0FBTyxHQUFlN0IsR0FBVTZCLEVBQU0zUyxZQUNuQzhRO1NBSUoyQixHQUFXL00sTUFBTSxNQUFNdEQ7O0lDWmpCLFNBQVMwUSxHQUFpQkg7TUFDdkMsSUFBSUksSUFBd0IscUJBQVJDLE1BQXFCLElBQUlBLFdBQVFyVDtNQThCckQsT0E1QkFtVCxLQUFtQixTQUEwQkg7UUFDM0MsSUFBYyxTQUFWQSxNQ1JPLFNBQTJCaEM7VUFDeEMsUUFBZ0UsTUFBekRrQyxTQUFTNUcsU0FBUy9MLEtBQUt5USxHQUFJM1AsUUFBUTtTRE9qQixDQUFpQjJSLElBQVEsT0FBT0E7UUFFdkQsSUFBcUIscUJBQVZBLEdBQ1QsTUFBTSxJQUFJM0IsVUFBVTtRQUd0QixTQUFzQixNQUFYK0IsR0FBd0I7VUFDakMsSUFBSUEsRUFBT0UsSUFBSU4sSUFBUSxPQUFPSSxFQUFPbFQsSUFBSThTO1VBRXpDSSxFQUFPRyxJQUFJUCxHQUFPUTs7UUFHcEIsU0FBU0E7VUFDUCxPQUFPLEdBQVVSLEdBQU92USxXQUFXLEdBQWV2RyxNQUFNSDs7UUFXMUQsT0FSQXlYLEVBQVFuVCxZQUFZN0UsT0FBT21FLE9BQU9xVCxFQUFNM1MsV0FBVztVQUNqRHRFLGFBQWE7WUFDWEosT0FBTzZYO1lBQ1B2VCxhQUFZO1lBQ1p5QixXQUFVO1lBQ1ZELGVBQWM7O1lBR1gsR0FBZStSLEdBQVNSO1NBRzFCRyxHQUFpQkg7O0lFbkNYLFNBQVNTLEdBQWtCMUgsR0FBS0Y7T0FDbEMsUUFBUEEsS0FBZUEsSUFBTUUsRUFBSTNLLFlBQVF5SyxJQUFNRSxFQUFJM0s7TUFFL0MsS0FBSyxJQUFJRCxJQUFJLEdBQUd1UyxJQUFPLElBQUloSSxNQUFNRyxJQUFNMUssSUFBSTBLLEdBQUsxSyxLQUM5Q3VTLEVBQUt2UyxLQUFLNEssRUFBSTVLO01BR2hCLE9BQU91Uzs7SUNITSxTQUFTQyxHQUFtQjVIO01BQ3pDLE9DSmEsU0FBNEJBO1FBQ3pDLElBQUlMLE1BQU02QyxRQUFReEMsSUFBTSxPQUFPLEdBQWlCQTtPREd6QyxDQUFrQkEsTUVMWixTQUEwQjZIO1FBQ3ZDLElBQXNCLHNCQUFYaEUsVUFBbUQsUUFBekJnRSxFQUFLaEUsT0FBT2EsYUFBMkMsUUFBdEJtRCxFQUFLLGVBQXVCLE9BQU9sSSxNQUFNbUksS0FBS0Q7T0ZJbkYsQ0FBZ0I3SCxNR0pwQyxTQUFxQ25NLEdBQUdrVTtRQUNyRCxJQUFLbFUsR0FBTDtVQUNBLElBQWlCLG1CQUFOQSxHQUFnQixPQUFPLEdBQWlCQSxHQUFHa1U7VUFDdEQsSUFBSTlILElBQUl4USxPQUFPNkUsVUFBVWlNLFNBQVMvTCxLQUFLWCxHQUFHbVUsTUFBTSxJQUFJO1VBRXBELE9BRFUsYUFBTi9ILEtBQWtCcE0sRUFBRTdELGdCQUFhaVEsSUFBSXBNLEVBQUU3RCxZQUFZbUcsT0FDN0MsVUFBTjhKLEtBQXFCLFVBQU5BLElBQW9CTixNQUFNbUksS0FBS2pVLEtBQ3hDLGdCQUFOb00sS0FBcUIsMkNBQTJDZ0ksS0FBS2hJLEtBQVcsR0FBaUJwTSxHQUFHa1UsVUFBeEc7O09IRnlELENBQTJCL0gsTUlMdkU7UUFDYixNQUFNLElBQUlzRixVQUFVO09KSXdFOzs7SUtnQjlGLElBQUksS0FBTSxjQUFtQjtJQUc3QixTQUFTNEMsR0FBZUM7TUFBVyxJQUFJQyxJQUV2QztRQUF5QyxJQUF1QixzQkFBWmhKLFlBQTRCQSxRQUFRcUgsV0FBVyxRQUFPO1FBQU8sSUFBSXJILFFBQVFxSCxVQUFVQyxNQUFNLFFBQU87UUFBTyxJQUFxQixxQkFBVkMsT0FBc0IsUUFBTztRQUFNO1VBQXNGLE9BQWhGQyxRQUFRdFMsVUFBVXVTLFFBQVFyUyxLQUFLNEssUUFBUXFILFVBQVVHLFNBQVMsS0FBSSxtQkFBeUI7VUFBUSxPQUFPRTtVQUFLLFFBQU87O09BRjlQdUI7TUFBK0IsT0FBTztRQUFrQyxJQUFzQ3BWLEdBQWxDcVYsSUFBUWhDLEdBQWdCNkI7UUFBa0IsSUFBSUMsR0FBMkI7VUFBRSxJQUFJRyxJQUFZakMsR0FBZ0JuVyxNQUFNSDtVQUFhaUQsSUFBU21NLFFBQVFxSCxVQUFVNkIsR0FBTzVSLFdBQVc2UjtlQUFxQnRWLElBQVNxVixFQUFNdE8sTUFBTTdKLE1BQU11RztRQUFjLE9BQU8yUCxHQUEyQmxXLE1BQU04Qzs7O0lBRmhhLEdBQUl1VjtJQVVKLElBQUlDLEtBQXlCLFNBQVVDO01BQ3JDeEMsR0FBVXVDLEdBQVdDO01BRXJCLElBQUlDLElBQVNULEdBQWVPO01BRTVCLFNBQVNBLEVBQVV4UTtRQUNqQixJQUFJMlE7UUFFSixJQUFJQyxJQUFTNVEsRUFBSzRRLFFBQ2QzRixJQUFZakwsRUFBS2lMLFdBQ2pCNEYsSUFBWTdRLEVBQUs2UTtRQWVyQixPQWJBM0QsR0FBZ0JoVixNQUFNc1ksSUFJdEIsRUFBZ0I1QyxHQUZoQitDLElBQVFELEVBQU9uVSxLQUFLckUsTUFBTSx3Q0FFcUIsZUFBVSxJQUV6RCxFQUFnQjBWLEdBQXVCK0MsSUFBUSxrQkFBYTtRQUU1RCxFQUFnQi9DLEdBQXVCK0MsSUFBUSxrQkFBYSxJQUU1REEsRUFBTUMsU0FBU0EsR0FDZkQsRUFBTTFGLFlBQVlBLEdBQ2xCMEYsRUFBTUUsWUFBWUEsR0FDWEY7O01BR1QsT0FBT2xELEdBQWErQztLQTVCTyxDQTZCYnJCLEdBQWlCdEw7SUFDakMsSUFBSWlOLEtBQU8sU0FBY0MsR0FBVUY7TUFDakMsT0FBTyxJQUFJdE4sU0FBUSxTQUFVQyxHQUFTQztRQUNwQyxJQUFJdU4sSUFBZ0I7UUFDcEIsSUFBSUMsSUFBYztVQUNoQkMsV0FBVTs7UUFFWixJQUFJQyxJQUFXLElBQUl6SixNQUFNcUosRUFBUzNULFFBQVFnVSxVQUFLcFY7UUFDL0MsSUFBSXFWLElBQVksSUFBSTNKLE1BQU1xSixFQUFTM1QsUUFBUWdVLFVBQUtwVjtRQUNoRCxJQUFJc1Y7UUFDSixPQUFPUCxFQUFTMVksU0FBUSxTQUFVc0ksR0FBR0k7VUFDbkMsT0FBT0osRUFBRW1FLE1BQUssU0FBVXlNO1lBQ3RCRixFQUFVdFEsS0FBU3dRO2NBRWxCQyxPQUFNLFNBQVVqUTtZQUNqQjRQLEVBQVNwUSxLQUFTUTtjQUVuQmtRLFNBQVE7WUFDUCxLQUFJUixFQUFZQyxVQUNoQixPQUFPTCxFQUFVUSxFQUFVdEIsTUFBTSxJQUFJa0IsR0FBYW5NLE1BQUssU0FBVUw7Y0FDL0R3TSxFQUFZQyxZQUFXLEdBQ3ZCMU4sRUFBUWlCO2dCQUVQK00sT0FBTSxTQUFValE7Y0FFakIrUCxJQUFpQi9QO2dCQUNoQmtRLFNBQVE7Y0FHVCxLQUZBVCxLQUFpQixPQUVLRCxFQUFTM1QsUUFBUTtnQkFDckMsSUFBSXdULElBQVNwWixPQUFPa2EsT0FBT0wsRUFBVU0sUUFBTyxTQUFVQyxHQUFLQztrQkFDekQsSUFBSUEsR0FBRztvQkFDTCxJQUFJQztvQkFFSixJQUFJcE8sSUFBS21PLEVBQUVuTyxJQUNQbkMsSUFBUXNRLEVBQUV0UTtxQkFFVEEsYUFBNkUsVUFBOUJ1USxJQUFjdlEsRUFBTWtELGNBQWtDLE1BQWhCcU4sU0FBaEQsSUFBa0ZBLEVBQVkxVSxVQUFVLE1BQzVJbUUsRUFBTWtELEtBQUtzTixXQUFXLDJDQUEwQ0gsRUFBSWxPLEtBdkUxRixTQUErQnNPO3NCQUM3QixPQUFPQSxFQUFJQyxPQUFPLEdBQUdDLGdCQUFnQkYsRUFBSWpDLE1BQU07cUJBc0UrQ29DLENBQXNCNVEsRUFBTWtELFFBQVdtTixFQUFJbE8sS0FBTW5DLEVBQU1rRDs7a0JBSXpJLE9BQU9tTjtvQkFDTjtnQkFFSCxJQUFJaEIsRUFBT3hULFNBQVMsR0FBRztrQkFFckIsSUFBSWdWLElBQU14QixFQUFPeFQsU0FBUyxJQUFJLEtBQUs2QixPQUFPMlIsRUFBTzFYLEtBQUksU0FBVW1aO29CQUM3RCxPQUFPLEtBQVVwVCxPQUFPb1Q7c0JBQ3ZCQyxLQUFLLFNBQVMxQixFQUFPO2tCQUN4Qm5OLEVBQU8sSUFBSUksTUFBTXVPO3VCQUNaO2tCQUNMLElBQUlHO2tCQUVKOU8sRUFBTyxJQUFJK00sR0FBVTtvQkFDbkJJLFFBQVFPO29CQUNSbEcsV0FBV29HO29CQUNYUixZQUFtRCxVQUF0QzBCLElBQWtCakIsV0FBZ0QsTUFBcEJpQixTQUE2QixJQUFTQSxFQUFnQjFMLFlBQVl5Szs7Ozs7Ozs7O0lBVTdJLFNBQVMsR0FBVTdQLEdBQVFDO01BQWtCLElBQUl0SixJQUFPWixPQUFPWSxLQUFLcUo7TUFBUyxJQUFJakssT0FBTzhGLHVCQUF1QjtRQUFFLElBQUlxRSxJQUFVbkssT0FBTzhGLHNCQUFzQm1FO1FBQVNDLE1BQW1CQyxJQUFVQSxFQUFRQyxRQUFPLFNBQVVDO1VBQU8sT0FBT3JLLE9BQU9zSyx5QkFBeUJMLEdBQVFJLEdBQUs1RjtjQUFpQjdELEVBQUt3QyxLQUFLbUgsTUFBTTNKLEdBQU11Sjs7TUFBWSxPQUFPdko7O0lBRWhWLFNBQVMsR0FBZ0I0RTtNQUFVLEtBQUssSUFBSUcsSUFBSSxHQUFHQSxJQUFJc0IsVUFBVXJCLFFBQVFELEtBQUs7UUFBRSxJQUFJTCxJQUFTLFFBQVEyQixVQUFVdEIsS0FBS3NCLFVBQVV0QixLQUFLO1FBQUlBLElBQUksSUFBSSxHQUFVM0YsT0FBT3NGLEtBQVMsR0FBSXpFLFNBQVEsU0FBVTZFO1VBQU8sRUFBZ0JGLEdBQVFFLEdBQUtKLEVBQU9JO2NBQVkxRixPQUFPeUssNEJBQTRCekssT0FBTzBLLGlCQUFpQmxGLEdBQVF4RixPQUFPeUssMEJBQTBCbkYsTUFBVyxHQUFVdEYsT0FBT3NGLElBQVN6RSxTQUFRLFNBQVU2RTtVQUFPMUYsT0FBT0MsZUFBZXVGLEdBQVFFLEdBQUsxRixPQUFPc0sseUJBQXlCaEYsR0FBUUk7OztNQUFhLE9BQU9GOztJQUV2ZixTQUFTd1YsR0FBYXRDO01BQVcsSUFBSUMsSUFFckM7UUFBdUMsSUFBdUIsc0JBQVpoSixZQUE0QkEsUUFBUXFILFdBQVcsUUFBTztRQUFPLElBQUlySCxRQUFRcUgsVUFBVUMsTUFBTSxRQUFPO1FBQU8sSUFBcUIscUJBQVZDLE9BQXNCLFFBQU87UUFBTTtVQUFzRixPQUFoRkMsUUFBUXRTLFVBQVV1UyxRQUFRclMsS0FBSzRLLFFBQVFxSCxVQUFVRyxTQUFTLEtBQUksbUJBQXlCO1VBQVEsT0FBT0U7VUFBSyxRQUFPOztPQUY5UDtNQUE2QixPQUFPO1FBQWtDLElBQXNDN1QsR0FBbENxVixJQUFRaEMsR0FBZ0I2QjtRQUFrQixJQUFJQyxHQUEyQjtVQUFFLElBQUlHLElBQVlqQyxHQUFnQm5XLE1BQU1IO1VBQWFpRCxJQUFTbU0sUUFBUXFILFVBQVU2QixHQUFPNVIsV0FBVzZSO2VBQXFCdFYsSUFBU3FWLEVBQU10TyxNQUFNN0osTUFBTXVHO1FBQWMsT0FBTzJQLEdBQTJCbFcsTUFBTThDOzs7SUFHNVosSUFBSXlYLEtBQWtDLFNBQVVoQztNQUM5Q3hDLEdBQVV3RSxHQUFvQmhDO01BRTlCLElBQUlDLElBQVM4QixHQUFhQztNQUUxQixTQUFTQTtRQUdQLE9BRkF2RixHQUFnQmhWLE1BQU11YSxJQUVmL0IsRUFBTzNPLE1BQU03SixNQUFNdUc7O01BRzVCLE9BQU9nUCxHQUFhZ0Y7S0FYZ0IsQ0FZdEJ0RCxHQUFpQnRMO0lBQ2pDLElBQUk2TyxLQUFnQixTQUFTQSxFQUFjQyxHQUFHN1c7TUFDNUMsSUFBSXlULElBQU1vRDtNQVVWLElBUm1CLG1CQUFScEQsTUFDVEEsSUFBTTdILE1BQU1tSSxLQUFLO1FBQ2Z6UyxRQUFRbVM7VUFDUCxTQUFVeFEsR0FBRzVCO1FBQ2QsT0FBT0E7WUFJUHJCLElBQUl5VCxFQUFJblMsVUFBVXRCLEtBQUssR0FDekIsT0FBTztNQUdULElBQUlBLE1BQU15VCxFQUFJblMsUUFDWixPQUFPLEVBQUNtUztNQUdWLElBQVUsTUFBTnpULEdBQ0YsT0FBT3lULEVBQUlvQyxRQUFPLFNBQVVDLEdBQUtnQjtRQUMvQixPQUFPLEdBQUczVCxPQUFPMFEsR0FBbUJpQyxJQUFNLEVBQUMsRUFBQ2dCO1VBQzNDO01BR0wsSUFBSUMsSUFBUTtNQUNaLElBQUlDLElBQVk7TUFFaEIsS0FBSyxJQUFJM1YsSUFBSSxHQUFHQSxLQUFLb1MsRUFBSW5TLFNBQVN0QixJQUFJLEdBQUdxQixLQUFLLEdBQUc7UUFDL0MyVixJQUFZSixFQUFjbkQsRUFBSVEsTUFBTTVTLElBQUksSUFBSXJCLElBQUk7UUFFaEQsS0FBSyxJQUFJaVgsSUFBSSxHQUFHQSxJQUFJRCxFQUFVMVYsUUFBUTJWLEtBQUssR0FDekNGLEVBQU1qWSxLQUFLLEVBQUMyVSxFQUFJcFMsS0FBSThCLE9BQU8wUSxHQUFtQm1ELEVBQVVDOztNQUk1RCxPQUFPRjs7SUFFVCxJQUFJRyxLQUFnQixTQUF1QmpMLEdBQUtrTDtNQUM5QyxJQUFJQyxJQUFVO01BRWQsS0FBSyxJQUFJL1YsSUFBSSxHQUFHQSxJQUFJNEssRUFBSTNLLFFBQVFELEtBQUssR0FBRztRQUN0QyxJQUFJNlUsSUFBTSxLQUFjakssRUFBSTVLO1FBRzVCLElBRkErVixFQUFRbEIsS0FBT2tCLEVBQVFsQixLQUFPa0IsRUFBUWxCLEtBQU8sSUFBSSxHQUU3Q2tCLEVBQVFsQixPQUFTaUIsR0FDbkIsT0FBT2xMLEVBQUk1Szs7O0lBTWpCLElBQUlnVyxLQUF5QjtNQUMzQixJQUFJblQsSUFBTytNLEdBQWdDLFdBQXlCLFNBQVNxRyxFQUFRQyxHQUFXblQsR0FBVUM7UUFDeEcsSUFBSW1UO1FBQ0osT0FBTyxXQUF5QixTQUFrQkM7VUFDaEQsU0FDRSxRQUFRQSxFQUFTQyxPQUFPRCxFQUFTcEs7V0FDL0IsS0FBSztZQVNILE9BUkFtSyxJQUFpQkQsRUFBVW5hLEtBQUksU0FBVXlIO2NBQ3ZDLE9BQU82RCxFQUFLN0QsR0FBR29FLEVBQXNCLHlCQUF5QjtnQkFDNUQ3RSxVQUFVQTtnQkFDVnVULGFBQWF0VCxFQUFXbUk7a0JBQ3RCa0osT0FBTSxTQUFVL1Y7Z0JBQ2xCLE9BQU8sR0FBSThGLE1BQU0seUJBQXlCOUY7O2lCQUd2QzhYLEVBQVNHLE9BQU8sVUFBVTVDLEdBQUt3QyxJQUFnQixTQUFVSztjQUM5RCxJQUFJQyxJQUFlRCxFQUFjL1IsUUFBTyxTQUFVaVM7Z0JBQ2hELE9BQU9BOztjQUVULElBQUlDLElBQWNkLEdBQWNZLEVBQWExYSxLQUFJLFNBQVU2YTtnQkFDekQsT0FBT0EsS0FBTUEsRUFBR3hTO21CQUNhLE9BQXhCOFIsRUFBVWpXLFNBQVM7Y0FDMUIsSUFBSTRXLElBQVloQixHQUFjWSxFQUFhMWEsS0FBSSxTQUFVK2E7Z0JBQ3ZELE9BQU9BLEtBQU1BLEVBQUdqWjttQkFDYSxPQUF4QnFZLEVBQVVqVyxTQUFTO2NBRTFCLE9BQUk0VyxLQUFhRixJQUNSdlEsUUFBUUMsUUFBUTtnQkFDckJ3USxXQUFXQTtnQkFDWEYsYUFBYUE7bUJBSVZ2USxRQUFRRSxPQUFPLElBQUlJLE1BQU0sbUJBQW1CNUUsT0FBTzJGLEtBQUtDLFVBQVU4Tzs7O1dBRzdFLEtBQUs7V0FDTCxLQUFLO1lBQ0gsT0FBT0osRUFBU1c7O1lBR3JCZDs7TUFHTCxPQUFPLFNBQW1CZSxHQUFJQyxHQUFLQztRQUNqQyxPQUFPclUsRUFBSytCLE1BQU03SixNQUFNdUc7O0tBN0NDO0lBZ0Q3QixJQUFJNlYsS0FBZ0IsU0FBdUJqQixHQUFXblQsR0FBVUMsR0FBWW1EO01BQzFFLE9BQU8sSUFBSUMsU0FBUSxTQUFVQyxHQUFTQztRQUNwQ0UsWUFBVztVQUNUd1AsR0FBVUUsR0FBV25ULEdBQVVDLEdBQVkyRSxLQUFLdEIsR0FBU2dPLE1BQU0vTjtZQUM5REg7OztJQUdQLElBQUlpUixLQUF5QjtNQUMzQixJQUFJQyxJQUFRekgsR0FBZ0MsV0FBeUIsU0FBUzBILEVBQVNDO1FBQ3JGLElBQUlyQixHQUFXc0IsR0FBZUMsR0FBV0MsR0FBWTNVLEdBQVVDLEdBQVkyVSxHQUFZdlcsR0FBU3dXLEdBQVNDLEdBQWN2USxHQUFNd1E7UUFDN0gsT0FBTyxXQUF5QixTQUFtQkM7VUFDakQsU0FDRSxRQUFRQSxFQUFVMUIsT0FBTzBCLEVBQVUvTDtXQUNqQyxLQUFLO1lBVUgsSUFUQWtLLElBQVlxQixFQUFNckIsV0FBV3NCLElBQWdCRCxFQUFNQyxlQUFlQyxJQUFZRixFQUFNRSxXQUFXQyxJQUFhSCxFQUFNRyxZQUFZM1UsSUFBV3dVLEVBQU14VSxVQUFVQyxJQUFhdVUsRUFBTXZVLFlBQVkyVSxJQUFhSixFQUFNSTtZQUFZdlcsSUFBVW1XLEVBQU1uVyxjQUVyTnZDLE1BQWQ0WSxLQUNGRyxJQUFVSSxLQUFLQyxNQUFNRCxLQUFLRSxXQUFXaEMsRUFBVWpXLFNBQy9DNFgsSUFBZUQsS0FFZkEsSUFBVUgsSUFBWXZCLEVBQVVqVyxRQUc1QjJYLE1BQVlGLEdBQWE7Y0FDN0JLLEVBQVUvTCxPQUFPO2NBQ2pCOztZQUdGLE1BQU0sSUFBSXRGLE1BQU07O1dBRWxCLEtBQUs7WUFRSCxZQVBtQjdILE1BQWY2WSxNQUEwQkcsSUFBZUgsSUFDN0NwUSxJQUFPTSxFQUFzQixhQUFhO2NBQ3hDN0UsVUFBVUE7Y0FDVnVULGFBQWF0VCxFQUFXbUk7Z0JBRTFCNE0sRUFBVTFCLE9BQU8sR0FDakIwQixFQUFVL0wsT0FBTyxHQUNWM0UsRUFBS3NRLEdBQVlyUSxHQUFNO2NBQzVCNUIsU0FBUztnQkFDUHlTLFNBQVNYLEVBQWNJLEdBQVNwVztnQkFDaEM0VyxTQUFTWixFQUFjSSxHQUFTblc7Z0JBQ2hDTCxTQUFTQTs7ZUFFVjtjQUNENEYsWUFBVzs7O1dBR2YsS0FBSztZQUdILE9BRkE4USxJQUFhQyxFQUFVTSxNQUN2Qk4sRUFBVS9MLE9BQU8sSUFDVjNFLEVBQUs2TyxFQUFVMEIsSUFBVSxHQUFnQixHQUFnQixJQUFJdFEsSUFBT3dRLElBQWE7Y0FDdEZwUyxTQUFTO2dCQUNQLGdCQUFnQjs7OztXQUl0QixLQUFLO1lBQ0gsT0FBT3FTLEVBQVV4QixPQUFPLFVBQVV3QixFQUFVTTs7V0FFOUMsS0FBSztZQVNILElBUkFOLEVBQVUxQixPQUFPLElBQ2pCMEIsRUFBVU8sS0FBS1AsRUFBaUIsTUFBRSxJQUNsQyxHQUFJM1QsTUFBTTJULEVBQVVPLE1BQ0EsRUFDcEIsYUFDQSw4QkFBOEIsd0JBQXdCLCtEQUcvQkMsU0FBU1IsRUFBVU8sR0FBRzVPLFVBQVU7Y0FDckRxTyxFQUFVL0wsT0FBTztjQUNqQjs7WUFHRixPQUFPK0wsRUFBVXhCLE9BQU8sVUFBVWEsR0FBVTtjQUMxQ2xCLFdBQVdBO2NBQ1hzQixlQUFlQTtjQUNmQyxXQUFXRyxJQUFVO2NBQ3JCRixZQUFZRztjQUNaOVUsVUFBVUE7Y0FDVkMsWUFBWUE7Y0FDWjJVLFlBQVlBO2NBQ1p2VyxTQUFTQTs7O1dBR2IsS0FBSztZQUNILE1BQU0sSUFBSXNGLE1BQU0sOElBQThJNUUsT0FBT2lXLEVBQVVPLEdBQUc1TyxXQUFXOztXQUUvTCxLQUFLO1dBQ0wsS0FBSztZQUNILE9BQU9xTyxFQUFVaEI7O1lBR3RCTyxHQUFVLE1BQU0sRUFBQyxFQUFDLEdBQUc7O01BRzFCLE9BQU8sU0FBbUJrQjtRQUN4QixPQUFPbkIsRUFBTXpTLE1BQU03SixNQUFNdUc7O0tBMUZBO0lBNkY3QixTQUFTLEdBQVV3UTtNQUNqQixJQUFJMkcsSUFBTyxJQUFpQixhQUFhQyxPQUFPNUcsR0FBRzZHLFNBQVN4TixTQUFTO01BQ3JFLE9BQU8sS0FBS3JKLE9BQU8yVzs7SUFHckIsU0FBUyxHQUFRblUsR0FBUUM7TUFBa0IsSUFBSXRKLElBQU9aLE9BQU9ZLEtBQUtxSjtNQUFTLElBQUlqSyxPQUFPOEYsdUJBQXVCO1FBQUUsSUFBSXFFLElBQVVuSyxPQUFPOEYsc0JBQXNCbUU7UUFBU0MsTUFBbUJDLElBQVVBLEVBQVFDLFFBQU8sU0FBVUM7VUFBTyxPQUFPckssT0FBT3NLLHlCQUF5QkwsR0FBUUksR0FBSzVGO2NBQWlCN0QsRUFBS3dDLEtBQUttSCxNQUFNM0osR0FBTXVKOztNQUFZLE9BQU92Sjs7SUFFOVUsU0FBUyxHQUFjNEU7TUFBVSxLQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSXNCLFVBQVVyQixRQUFRRCxLQUFLO1FBQUUsSUFBSUwsSUFBUyxRQUFRMkIsVUFBVXRCLEtBQUtzQixVQUFVdEIsS0FBSztRQUFJQSxJQUFJLElBQUksR0FBUTNGLE9BQU9zRixLQUFTLEdBQUl6RSxTQUFRLFNBQVU2RTtVQUFPLEVBQWdCRixHQUFRRSxHQUFLSixFQUFPSTtjQUFZMUYsT0FBT3lLLDRCQUE0QnpLLE9BQU8wSyxpQkFBaUJsRixHQUFReEYsT0FBT3lLLDBCQUEwQm5GLE1BQVcsR0FBUXRGLE9BQU9zRixJQUFTekUsU0FBUSxTQUFVNkU7VUFBTzFGLE9BQU9DLGVBQWV1RixHQUFRRSxHQUFLMUYsT0FBT3NLLHlCQUF5QmhGLEdBQVFJOzs7TUFBYSxPQUFPRjs7SUFHamYsSUFBSSxLQUFxQjtNQUN2QixTQUFTK1k7UUFDUCxJQUFJL1YsSUFBT3ZCLFVBQVVyQixTQUFTLFVBQXNCcEIsTUFBakJ5QyxVQUFVLEtBQW1CQSxVQUFVLEtBQUssSUFDM0V1WCxJQUFvQmhXLEVBQUtpVyxjQUN6QkEsU0FBcUMsTUFBdEJELEtBQXVDQSxHQUN0REUsSUFBb0JsVyxFQUFLbVcsY0FDekJBLFNBQXFDLE1BQXRCRCxJQUErQiw0QkFBNEJBLEdBQzFFRSxJQUFpQnBXLEVBQUtxVyxXQUN0QkEsU0FBK0IsTUFBbkJELElBQTRCLG9DQUFvQ0EsR0FDNUVFLElBQWtCdFcsRUFBSzhVLFlBQ3ZCQSxTQUFpQyxNQUFwQndCLElBQTZCLG1DQUFtQ0EsR0FDN0VDLElBQXdCdlcsRUFBS3dXLGtCQUM3QkEsU0FBNkMsTUFBMUJELElBQW1DLElBQUlBLEdBQzFERSxJQUFlelcsRUFBS3pCLFNBQ3BCQSxTQUEyQixNQUFqQmtZLElBQTBCLFlBQVlBO1FBRXBEdkosR0FBZ0JoVixNQUFNNmQsSUFFdEIsRUFBZ0I3ZCxNQUFNLHFCQUFnQixJQUV0QyxFQUFnQkEsTUFBTSxrQkFBYSxJQUVuQyxFQUFnQkEsTUFBTSx5QkFBb0IsSUFFMUMsRUFBZ0JBLE1BQU0scUJBQWdCO1FBRXRDLEVBQWdCQSxNQUFNLG1CQUFjLElBRXBDLEVBQWdCQSxNQUFNLGdCQUFXLElBRWpDLEVBQWdCQSxNQUFNLFdBQU0sSUFFNUJBLEtBQUt3ZSxLQUFLLElBQUksR0FBQUEsR0FBRyxjQUNqQnhlLEtBQUtpZSxlQUFlQTtRQUNwQmplLEtBQUttZSxZQUFZQSxHQUNqQm5lLEtBQUsrZCxlQUFlQSxHQUNwQi9kLEtBQUtzZSxtQkFBbUJBLEtBQW9CLEdBRTVDdGUsS0FBSzRjLGFBQWFBLEdBQ2xCNWMsS0FBS3FHLFVBQVVBOztNQTZvQ2pCLE9BMW9DQWtQLEdBQWFzSSxHQUFPLEVBQUM7UUFDbkI3WSxLQUFLO1FBQ0x2RixPQUlBO1VBQ0UsSUFBSWdmLElBQXlCNUosR0FBZ0MsV0FBeUIsU0FBU3FHLEVBQVFDLEdBQVdzQixHQUFlRDtZQUMvSCxJQUFJeFUsR0FDQUMsR0FDQXlXLEdBQ0FwQyxHQUNBUixHQUNBRixHQUNBK0MsR0FDQUMsR0FDQUMsR0FDQUMsR0FDQXJZLEdBQ0FDLEdBQ0FxWSxHQUNBQyxHQUNBQyxHQUNBQyxHQUNBQyxHQUNBQyxHQUNBQyxJQUFROVk7WUFFWixPQUFPLFdBQXlCLFNBQWtCOFU7Y0FDaEQsU0FDRSxRQUFRQSxFQUFTQyxPQUFPRCxFQUFTcEs7ZUFDL0IsS0FBSztnQkFJSCxPQUhBakosSUFBV3dVLEVBQU14VSxVQUFVQyxJQUFhdVUsRUFBTXZVLFlBQzlDeVcsSUFBZ0JXLEVBQU1uYSxTQUFTLFVBQWtCcEIsTUFBYnViLEVBQU0sTUFBbUJBLEVBQU0sSUFDbkVoRSxFQUFTcEssT0FBTyxHQUNUZ0ssR0FBVUUsR0FBV25ULEdBQVVDOztlQUV4QyxLQUFLO2dCQUdILElBRkFvVCxFQUFTa0MsS0FBS2xDLEVBQVNpQyxNQUVuQmpDLEVBQVNrQyxJQUFJO2tCQUNmbEMsRUFBU3BLLE9BQU87a0JBQ2hCOztnQkFHRm9LLEVBQVNrQyxLQUFLOztlQUVoQixLQUFLO2dCQU1ILElBTEFqQixJQUFRakIsRUFBU2tDLElBQ2pCekIsSUFBWVEsRUFBTVIsV0FDbEJGLElBQWNVLEVBQU1WLGFBQ3BCK0MsS0FBVyxJQUVML0MsTUFBZWxQLEtBQUtDLFVBQVVpUCxHQUFhNEIsU0FBUyxvREFBcUQ7a0JBQzdHbkMsRUFBU3BLLE9BQU87a0JBQ2hCOztnQkFHRixJQUFJeU4sR0FBZTtrQkFDakJyRCxFQUFTcEssT0FBTztrQkFDaEI7O2dCQUdGLE1BQU0sSUFBSXRGLE1BQU07O2VBRWxCLEtBQUs7Z0JBRUgsT0FEQTBQLEVBQVNwSyxPQUFPLElBQ1RvTCxHQUFVO2tCQUNmbEIsV0FBV0E7a0JBQ1hzQixlQUFlQTtrQkFDZkMsZ0JBQVc1WTtrQkFDWDZZLGlCQUFZN1k7a0JBQ1prRSxVQUFVQTtrQkFDVkMsWUFBWUE7a0JBQ1oyVSxZQUFZNWMsS0FBSzRjO2tCQUNqQnZXLFNBQVNyRyxLQUFLcUc7OztlQUdsQixLQUFLO2dCQUVILE9BREFnVixFQUFTcEssT0FBTyxJQUNUbUwsR0FBY2pCLEdBQVduVCxHQUFVQyxHQUFZOztlQUV4RCxLQUFLO2dCQUNINFcsSUFBZXhELEVBQVNpQyxNQUN4QnNCLElBQWlCQyxpQkFBbUQsSUFBU0EsRUFBYS9DLFdBQzFGNkMsS0FBVyxHQUNYdEQsRUFBU3BLLE9BQU87Z0JBQ2hCOztlQUVGLEtBQUs7Z0JBQ0gsS0FBSzZLLEdBQVc7a0JBQ2RULEVBQVNwSyxPQUFPO2tCQUNoQjs7Z0JBR0YyTixJQUFpQjlDLEdBQ2pCVCxFQUFTcEssT0FBTztnQkFDaEI7O2VBRUYsS0FBSztnQkFDSCxNQUFNLElBQUl0RixNQUFNLDZDQUE2QzVFLE9BQU8yRixLQUFLQyxVQUFVbVAsS0FBYSxLQUFLLE1BQU0vVSxPQUFPMkYsS0FBS0MsVUFBVWlQLEtBQWU7O2VBRWxKLEtBQUs7Z0JBQ0gsS0FBS2dELEdBQWdCO2tCQUNuQnZELEVBQVNwSyxPQUFPO2tCQUNoQjs7Z0JBTUYsT0FIQTZOLElBQXdCRixFQUFlMWUsS0FBSyxJQUFJdUcsSUFBSXFZLEVBQXNCUSxXQUFXNVksSUFBSW9ZLEVBQXNCUyxXQUMvR2xFLEVBQVNDLE9BQU8sSUFDaEJELEVBQVNwSyxPQUFPLElBQ1RqUixLQUFLd2YsY0FBYy9ZLEdBQUdDLFFBQUc1QyxJQUFZNmE7O2VBRTlDLEtBQUs7Z0JBQ0hJLElBQWMxRCxFQUFTaUMsTUFDdkIwQixJQUFRLEtBQUksS0FBSixDQUFPRCxFQUFZQyxTQUFTLEtBQUssS0FDekMzRCxFQUFTcEssT0FBTztnQkFDaEI7O2VBRUYsS0FBSztnQkFHSCxNQUZBb0ssRUFBU0MsT0FBTyxJQUNoQkQsRUFBU29FLEtBQUtwRSxFQUFnQixNQUFFLEtBQzFCLElBQUlkOztlQUVaLEtBQUs7Z0JBQ0gsSUFBaUMsU0FBM0J3RSxFQUFZVyxZQUFzQjtrQkFDdENyRSxFQUFTcEssT0FBTztrQkFDaEI7O2dCQUdGZ08sSUFBaUJqZixLQUFLd2UsR0FBR21CLGNBQWM7a0JBQ3JDbFgsR0FBR2hDO2tCQUNIbVosR0FBR2xaO21CQUNGbVosWUFBWUMsSUFBSTlmLEtBQUt3ZSxHQUFHdUIsZUFBZWYsRUFBTTVPLFNBQVMsS0FBS3lQLGNBQzlEeEUsRUFBU3BLLE9BQU87Z0JBQ2hCOztlQUVGLEtBQUs7Z0JBQ0gsSUFBaUMsU0FBM0I4TixFQUFZVyxZQUFzQjtrQkFDdENyRSxFQUFTcEssT0FBTztrQkFDaEI7O2dCQUdGZ08sSUFBaUJqZixLQUFLd2UsR0FBR21CLGNBQWM7a0JBQ3JDbFgsR0FBR2hDO2tCQUNIbVosR0FBR2xaO21CQUNGbVosWUFBWUMsSUFBSTlmLEtBQUt3ZSxHQUFHbUIsY0FBYztrQkFDdkNsWCxHQUFHc1csRUFBWWlCLFNBQVN2WDtrQkFDeEJtWCxHQUFHYixFQUFZaUIsU0FBU0o7bUJBQ3ZCQyxjQUNIeEUsRUFBU3BLLE9BQU87Z0JBQ2hCOztlQUVGLEtBQUs7Z0JBQ0gsTUFBTSxJQUFJdEYsTUFBTTs7ZUFFbEIsS0FBSztnQkFLSCxJQUpBdVQsSUFBU0QsRUFBZWdCLE9BQU83UCxTQUFTLEtBQ3hDK08sSUFBU0YsRUFBZWlCLE9BQU85UCxTQUFTLEtBQ3hDZ1AsSUFBVXBmLEtBQUttZ0IsMEJBQTBCbEIsRUFBZWdCLFFBQVFoQixFQUFlaUIsU0FFOUMsU0FBM0JuQixFQUFZVyxZQUFzQjtrQkFDdENyRSxFQUFTcEssT0FBTztrQkFDaEI7O2dCQUdGLE9BQU9vSyxFQUFTRyxPQUFPLFVBQVU7a0JBQy9Ca0UsWUFBWVgsRUFBWVc7a0JBQ3hCVixPQUFPQTtrQkFDUHZZLEdBQUd5WTtrQkFDSHhZLEdBQUd5WTtrQkFDSEMsU0FBU0E7OztlQUdiLEtBQUs7Z0JBQ0gsSUFBaUMsU0FBM0JMLEVBQVlXLFlBQXNCO2tCQUN0Q3JFLEVBQVNwSyxPQUFPO2tCQUNoQjs7Z0JBR0YsT0FBT29LLEVBQVNHLE9BQU8sVUFBVTtrQkFDL0JrRSxZQUFZWCxFQUFZVztrQkFDeEJWLE9BQU9BO2tCQUNQZ0IsVUFBVWpCLEVBQVlpQjtrQkFDdEJJLFVBQVVyQixFQUFZcUI7a0JBQ3RCM1osR0FBR3lZO2tCQUNIeFksR0FBR3lZO2tCQUNIQyxTQUFTQTs7O2VBR2IsS0FBSztnQkFDSCxNQUFNLElBQUl6VCxNQUFNLDZDQUE2QzVFLE9BQU8yRixLQUFLQyxVQUFVbVAsS0FBYSxLQUFLLE1BQU0vVSxPQUFPMkYsS0FBS0MsVUFBVWlQLEtBQWU7O2VBRWxKLEtBQUs7ZUFDTCxLQUFLO2dCQUNILE9BQU9QLEVBQVNXOztnQkFHckJkLEdBQVNsYixNQUFNLEVBQUMsRUFBQyxJQUFJOztVQU8xQixPQUpBLFNBQStCaWMsR0FBSUMsR0FBS0M7WUFDdEMsT0FBT3NDLEVBQXVCNVUsTUFBTTdKLE1BQU11Rzs7U0FwTTlDO1NBeU1DO1FBQ0R2QixLQUFLO1FBQ0x2RixPQUFPO1VBQ0wsSUFBSTRnQixJQUFnQnhMLEdBQWdDLFdBQXlCLFNBQVMwSCxFQUFTK0Q7WUFDN0YsSUFBSUMsR0FBWUMsR0FBZUMsR0FBYUMsR0FBY0MsR0FBVUMsR0FBU0MsR0FBV0MsR0FBa0J2VTtZQUMxRyxPQUFPLFdBQXlCLFNBQW1CeVE7Y0FDakQsU0FDRSxRQUFRQSxFQUFVMUIsT0FBTzBCLEVBQVUvTDtlQUNqQyxLQUFLO2dCQWNILE9BYkFzUCxJQUFhRCxFQUFNQyxZQUFZQyxJQUFnQkYsRUFBTUUsZUFBZUMsSUFBY0gsRUFBTUcsYUFBYUMsSUFBZUosRUFBTUksY0FFdEhELElBQ0ZFLElBQVcsS0FBSSxLQUFKLENBQU9GLEdBQWEsT0FFL0JHLElBQVUsS0FBSSxLQUFKLENBQU9MLEdBQVk7Z0JBQzdCSSxJQUFXQyxFQUFRRyxJQUFJUCxHQUFlUSxLQUFLaGhCLEtBQUt3ZSxHQUFHeUMsTUFBTW5SLEtBRzNEK1EsSUFBWSxLQUFJLEtBQUosQ0FBT0gsR0FBYyxLQUNqQ0ksSUFBbUJELEVBQVVFLElBQUlKLEdBQVVLLEtBQUtoaEIsS0FBS3dlLEdBQUd5QyxNQUFNblIsSUFDOUR2RCxJQUFPdk0sS0FBS2toQix1QkFBdUJKLEVBQWlCMVEsU0FBUyxLQUFLdVE7Z0JBQ2xFM0QsRUFBVS9MLE9BQU8sR0FDVmpSLEtBQUttaEIsWUFBWTVVOztlQUUxQixLQUFLO2VBQ0wsS0FBSztnQkFDSCxPQUFPeVEsRUFBVWhCOztnQkFHdEJPLEdBQVV2Yzs7VUFPZixPQUpBLFNBQXNCeWQ7WUFDcEIsT0FBTzRDLEVBQWN4VyxNQUFNN0osTUFBTXVHOztTQS9COUI7U0FvQ047UUFDRHZCLEtBQUs7UUFDTHZGLE9BQU87VUFDTCxJQUFJMmhCLElBQWtCdk0sR0FBZ0MsV0FBeUIsU0FBU3dNLEVBQVNsRyxHQUFXbUcsR0FBU3RaLEdBQVV1WixHQUFnQkM7WUFDN0ksSUFBSS9JLElBQVF6WTtZQUVaLElBQUl5aEIsR0FDQUMsR0FDQUMsR0FDQUMsR0FDQXhFLEdBQ0FDLEdBQ0F3RSxHQUNBNWMsR0FDQWYsR0FDQTRkLElBQVN2YjtZQUNiLE9BQU8sV0FBeUIsU0FBbUJ3YjtjQUNqRCxTQUNFLFFBQVFBLEVBQVV6RyxPQUFPeUcsRUFBVTlRO2VBQ2pDLEtBQUs7Z0JBSUgsT0FIQXdRLElBQWNLLEVBQU81YyxTQUFTLFVBQW1CcEIsTUFBZGdlLEVBQU8sS0FBbUJBLEVBQU8sS0FBSyxJQUN6RUosSUFBYSxJQUNiSyxFQUFVOVEsT0FBTyxHQUNWak4sRUFBSWhFLEtBQUttZSxXQUFXO2tCQUN6QnhULFNBQVM7b0JBQ1AzQyxVQUFVQTtvQkFDVnVULGFBQWFnRyxFQUFlaEc7b0JBQzVCbFYsU0FBU3JHLEtBQUtxRzs7bUJBRWY7a0JBQ0Q0RixZQUFXOzs7ZUFHZixLQUFLO2dCQWlCSCxLQU5BMFYsS0FBUyxhQUNUQyxLQUFTLFVBQVVELEdBQVF2UixTQUFTLFFBQ3BDZ04sSUFBVXdFLEVBQU8vSixNQUFNLEdBQUcsS0FDMUJ3RixJQUFVdUUsRUFBTy9KLE1BQU0sS0FDdkJnSyxJQUFrQixHQUFVTCxJQUV2QnZjLElBQUksR0FBR0EsSUFBSWtXLEVBQVVqVyxRQUFRRCxLQUFLLEdBQ3JDZixJQUFJb0ksRUFBSzZPLEVBQVVsVyxJQUFJNEgsRUFBc0IscUJBQXFCO2tCQUNoRW1WLGVBQWU7a0JBQ2ZDLGlCQUFpQkosRUFBZ0JoSyxNQUFNO2tCQUN2Q3FLLFVBQVU5RTtrQkFDVitFLFVBQVU5RTtrQkFDVitFLG9CQUFvQnBhO29CQUNsQnNSLE9BQU0sU0FBVS9WO2tCQUNsQixHQUFJOEYsTUFBTSxjQUFjOUY7cUJBRTFCbWUsRUFBV2hmLEtBQUt3QjtnQkEyQmxCLE9BQU82ZCxFQUFVdkcsT0FBTyxVQUFVNUMsR0FBSzhJLElBQVksU0FBVXZJO2tCQWEzRCxPQVp3QkEsRUFBVXpQLFFBQU8sU0FBVWpCO29CQUNqRCxVQUFLQSxLQUFvQixhQUFmNkwsR0FBUTdMLFFBSWRBLEVBQUVZO3NCQU9jbkUsVUFBcUMsT0FBeEJpVyxFQUFValcsU0FBUyxLQUFTLElBQ3REbUcsUUFBUUMsUUFBUTZOLEtBR2xCOU4sUUFBUUUsT0FBTyxJQUFJSSxNQUFNLFdBQVc1RSxPQUFPMkYsS0FBS0MsVUFBVXdNO29CQUNoRXZNLE1BQUssU0FBVW1HO2tCQUNoQixJQUFJc1AsSUFBb0I7a0JBQ3hCLElBQUlDLElBQVc7a0JBRWYsS0FBSyxJQUFJQyxJQUFLLEdBQUdBLElBQUt4UCxFQUFVN04sUUFBUXFkLEtBQU0sR0FDeEN4UCxFQUFVd1AsTUFBS0QsRUFBUzVmLEtBQUtxUSxFQUFVd1AsR0FBSXpmO2tCQUdqRCxLQUFLLElBQUkwZixJQUFNLEdBQUdBLElBQU1ySCxFQUFValcsUUFBUXNkLEtBQU8sR0FBRztvQkFFbEQsSUFBSUMsSUFBS25XLEVBQUs2TyxFQUFVcUgsSUFBTTNWLEVBQXNCLGdCQUFnQjtzQkFDbEU2VixXQUFXO3NCQUNYQyxNQUFNLEVBQUMsR0FBYyxHQUFjLElBQUlwQixJQUFpQixJQUFJO3dCQUMxRHFCLFNBQVNwQjt3QkFDVHFCLGdCQUFnQlA7d0JBQ2hCRixvQkFBb0JwYTt5QkFDbkJ5Wjt3QkFDRG5JLE9BQU0sU0FBVS9WO3NCQUNsQixPQUFPLEdBQUk4RixNQUFNLGFBQWE5Rjs7b0JBR2hDOGUsRUFBa0IzZixLQUFLK2Y7O2tCQUd6QixPQUFPN0osR0FBS3lKLEdBQWdDO29CQUMxQyxJQUFJUyxJQUFRak8sR0FBZ0MsV0FBeUIsU0FBU2tPLEVBQVNDLEdBQWdCaks7c0JBQ3JHLElBQUlrSyxHQUFtQkMsR0FBb0JDLEdBQWVDLEdBQWFDLEdBQUtDLEdBQXVCQyxHQUF3QkMsR0FBc0JDLEdBQVVDLEdBQVVDLEdBQWdCQyxHQUFpQkMsR0FBV0MsR0FBWUMsR0FBT2xKLEdBQUdtSjtzQkFFdk8sT0FBTyxXQUF5QixTQUFtQkM7d0JBQ2pELFNBQ0UsUUFBUUEsRUFBVTNJLE9BQU8ySSxFQUFVaFQ7eUJBQ2pDLEtBQUs7MEJBMkJILElBUkFnUyxJQUFvQkQsRUFBZXRaLFFBQU8sU0FBVWpCOzRCQUNsRCxPQUFPQTsrQkFFVHlhLElBQXFCcEksR0FBY2tJLEVBQWVoaUIsS0FBSSxTQUFVeUg7NEJBQzlELE9BQU9BLEtBQUtBLEVBQUUzRixVQUFVMkYsRUFBRTNGLE9BQU81QyxLQUFLLEdBQUdna0I7K0JBQ1osT0FBeEIvSSxFQUFValcsU0FBUyxPQUdwQitkLEVBQWtCL2QsVUFBcUMsT0FBeEJpVyxFQUFValcsU0FBUyxNQUFVZ2UsSUFBcUI7NEJBQ3JGZSxFQUFVaFQsT0FBTzs0QkFDakI7OzBCQU1GLEtBSEFrUyxJQUFnQixJQUNoQkMsSUFBYyxJQUVUQyxJQUFNLEdBQUdBLElBQU1MLEVBQWU5ZCxRQUFRbWUsS0FBTyxJQUczQ0csU0FGTEEsSUFBdUJSLEVBQWVLLE9BRXFHLFVBQXpEQyxJQUF3QkUsRUFBcUIxZ0IsZ0JBQThDLE1BQTFCd2dCLEtBQXNHLFVBQXpEQyxJQUF5QkQsRUFBc0JwakIsY0FBNkMsTUFBM0JxakIsU0FBekwsSUFBc09BLEVBQXVCcmUsVUFBVSxLQUM3VXNlLEVBQXFCMWdCLE9BQU81QyxLQUFLaWtCLE1BQUssU0FBVXBOLEdBQUdxTjs0QkFDakQsT0FBTyxLQUFJLEtBQUosQ0FBT3JOLEVBQUVzTixPQUFPLElBQUlDLElBQUksS0FBSSxLQUFKLENBQU9GLEVBQUVDLE9BQU87Z0NBRWpEWixJQUFXRCxFQUFxQjFnQixPQUFPNUMsS0FBSyxJQUUvQnFrQixZQUNYYixJQUFXOzRCQUNUYyxnQkFBZ0IsR0FBTzdNLEtBQUs4TCxFQUFTYyxTQUFTQyxnQkFBZ0I7NEJBQzlEQyxJQUFJLEdBQU85TSxLQUFLOEwsRUFBU2MsU0FBU0UsSUFBSTs0QkFDdENDLEtBQUssR0FBTy9NLEtBQUs4TCxFQUFTYyxTQUFTRyxLQUFLOzZCQUcxQ3ZCLEVBQWN6Z0IsTUFDZCxVQUFRaWYsR0FBUSxHQUFjLEdBQWMsSUFBSStCLElBQVcsSUFBSTs0QkFDN0RpQixZQUFZLEdBQU9oTixLQUFLLEdBQU9BLEtBQUs4TCxFQUFTbUIsT0FBTyxVQUFVeFUsU0FBUyxVQUFVeVUsU0FBUyxJQUFJLE1BQU07OEJBQ2xHdkwsT0FBTSxTQUFVL1Y7NEJBQ2xCLE9BQU8sR0FBSXVoQixNQUFNLG9CQUFvQnZoQjtrQ0FHdkM0ZixFQUFjemdCLEtBQUsySSxRQUFRQyxRQUFRLEdBQU9xTSxLQUFLOEwsRUFBU21CLE1BQU1DLFNBQVMsSUFBSSxNQUFNLFlBR25GMUIsRUFBY3pnQixLQUFLMkksUUFBUUMsYUFBUXhILEtBR3JDc2YsRUFBWTFnQixLQUFLLEtBQUksS0FBSixDQUFPNGUsRUFBUStCLElBQU07MEJBSXhDLE9BREFZLEVBQVVoVCxPQUFPLEdBQ1Y1RixRQUFRMkgsSUFBSW1ROzt5QkFFckIsS0FBSzswQkFHSCxJQUZBUSxJQUFpQk0sRUFBVTNHLE9BRXRCdkUsRUFBWUMsVUFBVTs0QkFDekJpTCxFQUFVaFQsT0FBTzs0QkFDakI7OzBCQUdGLE9BQU9nVCxFQUFVekksT0FBTyxlQUFVMVg7O3lCQUVwQyxLQUFLOzBCQUNIOGYsSUFBa0JELEVBQWVsSyxRQUFPLFNBQVVDLEdBQUtxTCxHQUFNbGM7NEJBSzNELE9BSklrYyxLQUFNckwsRUFBSWhYLEtBQUs7OEJBQ2pCbUcsT0FBT3VhLEVBQVl2YTs4QkFDbkJwSixPQUFPLEtBQUksS0FBSixDQUFPc2xCO2dDQUVUckw7OEJBQ04sS0FHSG1LLElBQVlySixHQUFjb0osRUFBZ0IxZSxRQUFtQyxPQUF4QmlXLEVBQVVqVyxTQUFTLEtBQ3hFNGUsSUFBYSxNQUViQyxJQUFRLFNBQWVsSjs0QkFDckIsSUFBSW1LLElBQWVuQixFQUFVaEo7NEJBQzdCLElBQUlvSyxJQUFxQnJCLEVBQWdCbGEsUUFBTyxTQUFVd2IsR0FBR3JjOzhCQUMzRCxPQUFPbWMsRUFBYXhILFNBQVMzVTs7NEJBRS9CLElBQUlzYyxJQUFTRixFQUFtQmprQixLQUFJLFNBQVV5SDs4QkFDNUMsT0FBT0EsRUFBRWhKOzs0QkFFWCxJQUFJMmxCLElBQVVILEVBQW1CamtCLEtBQUksU0FBVXlIOzhCQUM3QyxPQUFPQSxFQUFFSTs7NEJBR1gsSUFBSXdjLElBQW9CNU0sRUFBTTZNLHNCQUFzQkgsR0FBUUM7NEJBRTVELEtBQUtDLEdBQW1CLE9BQU87NEJBQy9CLElBQUlFLEtBQWtCLFVBQVUsR0FBTzVOLEtBQUswTixFQUFrQmpWLFNBQVMsSUFBSSxLQUFLLFFBQVFBLFNBQVM7NEJBQ2pHLElBQUlvVixJQUFtQkQsRUFBZ0IxTixNQUFNLEdBQUc7NEJBQ2hELElBQUk0TixJQUFtQkYsRUFBZ0IxTixNQUFNOzRCQUU3QyxPQUEyRSxNQUF2RSxLQUFJLEtBQUosQ0FBTzJOLEdBQWtCLElBQUlsQixJQUFJLEtBQUksS0FBSixDQUFPcEIsRUFBbUJ6YyxHQUFHLFFBQXFGLE1BQXZFLEtBQUksS0FBSixDQUFPZ2YsR0FBa0IsSUFBSW5CLElBQUksS0FBSSxLQUFKLENBQU9wQixFQUFtQnhjLEdBQUcsUUFDNUlvZCxJQUFhdUIsR0FDTixnQkFGVDs2QkFNRnhLLElBQUk7O3lCQUVOLEtBQUs7MEJBQ0gsTUFBTUEsSUFBSWdKLEVBQVUzZSxTQUFTOzRCQUMzQitlLEVBQVVoVCxPQUFPOzRCQUNqQjs7MEJBS0YsSUFBZSxnQkFGZitTLElBQU9ELEVBQU1sSixLQUVlOzRCQUMxQm9KLEVBQVVoVCxPQUFPOzRCQUNqQjs7MEJBR0YsT0FBT2dULEVBQVV6SSxPQUFPLFlBQVk7O3lCQUV0QyxLQUFLOzBCQUNILElBQWUsWUFBVHdJLEdBQW1COzRCQUN2QkMsRUFBVWhULE9BQU87NEJBQ2pCOzswQkFHRixPQUFPZ1QsRUFBVXpJLE9BQU8sU0FBUzs7eUJBRW5DLEtBQUs7MEJBQ0hYLEtBQUssR0FDTG9KLEVBQVVoVCxPQUFPOzBCQUNqQjs7eUJBRUYsS0FBSzswQkFDSCxJQUFLLFFBQUM2UyxHQUFrRDs0QkFDdERHLEVBQVVoVCxPQUFPOzRCQUNqQjs7MEJBR0YsTUFBTSxJQUFJdEYsTUFBTTs7eUJBRWxCLEtBQUs7MEJBQ0gsT0FBT3NZLEVBQVV6SSxPQUFPLFVBQVVzSTs7eUJBRXBDLEtBQUs7MEJBQ0gsTUFBTSxJQUFJblksTUFBTTs7eUJBRWxCLEtBQUs7eUJBQ0wsS0FBSzswQkFDSCxPQUFPc1ksRUFBVWpJOzswQkFHdEIrRzs7b0JBR0wsT0FBTyxTQUFVMkMsR0FBTUM7c0JBQ3JCLE9BQU83QyxFQUFNalosTUFBTTdKLE1BQU11Rzs7bUJBbExlO29CQXFMM0NxRyxLQUFtQjtrQkFDcEIsSUFBSWdaLElBQVEvUSxHQUFnQyxXQUF5QixTQUFTZ1IsRUFBU0M7b0JBQ3JGLElBQUloQyxHQUFZeUIsR0FBaUJDLEdBQWtCQyxHQUFrQmpGLEdBQWV1RixHQUF1Qi9HLEdBQU9nSDtvQkFFbEgsT0FBTyxXQUF5QixTQUFtQkM7c0JBQ2pELFNBQ0UsUUFBUUEsRUFBVTNLLE9BQU8ySyxFQUFVaFY7dUJBQ2pDLEtBQUs7d0JBR0gsSUFGQTZTLElBQWFnQyxHQUVHOzBCQUNkRyxFQUFVaFYsT0FBTzswQkFDakI7O3dCQUdGLE1BQU0sSUFBSXRGLE1BQU07O3VCQUVsQixLQUFLO3dCQUtILElBSkE0WixLQUFrQixVQUFVLEdBQU81TixLQUFLbU0sRUFBVzFULFNBQVMsSUFBSSxLQUFLLFFBQVFBLFNBQVMsUUFDdEZvVixJQUFtQkQsRUFBZ0IxTixNQUFNLEdBQUcsS0FDNUM0TixJQUFtQkYsRUFBZ0IxTixNQUFNLE1BRXBDWSxFQUFNc0YsY0FBYzswQkFDdkJrSSxFQUFVaFYsT0FBTzswQkFDakI7O3dCQUlGLE9BREFnVixFQUFVaFYsT0FBTyxHQUNWd0gsRUFBTXlOLFNBQVNWLEdBQWtCQyxHQUFrQjNCOzt1QkFFNUQsS0FBSzt3QkFDSGlDLElBQXdCRSxFQUFVM0ksTUFDbEMwQixJQUFRK0csRUFBc0IvRyxPQUM5QndCLElBQWdCLEtBQUksS0FBSixDQUFPeEIsS0FBUyxLQUFLLEtBQ3JDaUgsRUFBVWhWLE9BQU87d0JBQ2pCOzt1QkFFRixLQUFLO3dCQUVILE9BREFnVixFQUFVaFYsT0FBTyxJQUNWd0gsRUFBTTBOLFlBQVk7MEJBQ3ZCN0csV0FBV2tHOzBCQUNYakcsV0FBV2tHOzs7dUJBR2YsS0FBSzt3QkFDSGpGLElBQWdCeUYsRUFBVTNJOzt1QkFFNUIsS0FBSzt3QkFZSCxPQVhBLEdBQUl3SCxNQUFNLDZCQUE2QjswQkFDckNsRSxTQUFTa0QsRUFBVzFULFNBQVM7MEJBQzdCb1EsZUFBZUEsRUFBY3BRLFNBQVM7NEJBRXhDMFQsSUFBYUEsRUFBV2hFLElBQUlVLEdBQWVRLEtBQUt2SSxFQUFNK0YsR0FBR3lDLE1BQU1uUixJQUMvRGtXLElBQWF2TixFQUFNMk4sMkJBQTJCdEMsSUFDOUMsR0FBSWdCLE1BQU0sNkJBQTZCOzBCQUNyQ2tCLFlBQVlBOzBCQUNacEYsU0FBU2tELEVBQVcxVCxTQUFTOzRCQUd4QjZWLEVBQVV6SyxPQUFPLFVBQVU7MEJBQ2hDd0ssWUFBWUE7MEJBQ1pwRixTQUFTa0QsRUFBVzFULFNBQVMsT0FBTzswQkFDcENvUSxlQUFlQTs7O3VCQUduQixLQUFLO3VCQUNMLEtBQUs7d0JBQ0gsT0FBT3lGLEVBQVVqSzs7d0JBR3RCNko7O2tCQUdMLE9BQU8sU0FBVVE7b0JBQ2YsT0FBT1QsRUFBTS9iLE1BQU03SixNQUFNdUc7O2lCQTFFUDs7ZUE4RXhCLEtBQUs7ZUFDTCxLQUFLO2dCQUNILE9BQU93YixFQUFVL0Y7O2dCQUd0QnFGLEdBQVVyaEI7O1VBT2YsT0FKQSxTQUF3QnNtQixHQUFLQyxHQUFLQyxHQUFLQyxHQUFLQztZQUMxQyxPQUFPdEYsRUFBZ0J2WCxNQUFNN0osTUFBTXVHOztTQTNZaEM7U0FnWk47UUFDRHZCLEtBQUs7UUFDTHZGLE9BQU87VUFDTCxJQUFJa25CLElBQWU5UixHQUFnQyxXQUF5QixTQUFTK1IsRUFBU3JhO1lBQzVGLElBQUkxSixHQUNBZ2tCLEdBQ0FDLElBQVN2Z0I7WUFDYixPQUFPLFdBQXlCLFNBQW1Cd2dCO2NBQ2pELFNBQ0UsUUFBUUEsRUFBVXpMLE9BQU95TCxFQUFVOVY7ZUFDakMsS0FBSztnQkFJSCxPQUhBcE8sSUFBVWlrQixFQUFPNWhCLFNBQVMsVUFBbUJwQixNQUFkZ2pCLEVBQU8sS0FBbUJBLEVBQU8sS0FBSyxJQUNyRUMsRUFBVXpMLE9BQU8sR0FDakJ5TCxFQUFVOVYsT0FBTyxHQUNWM0UsRUFBSyxHQUFHdkYsT0FBTy9HLEtBQUtpZSxjQUFjLFNBQVMxUixHQUFNMUosR0FBUztrQkFDL0RvSixZQUFXOzs7ZUFHZixLQUFLO2dCQUdILEtBRkE0YSxJQUFtQkUsRUFBVXpKLFNBRUR1SixFQUFpQmxZLFNBQVU7a0JBQ3JEb1ksRUFBVTlWLE9BQU87a0JBQ2pCOztnQkFHRixPQUFPOFYsRUFBVXZMLE9BQU8sVUFBVSxLQUFJLEtBQUosQ0FBTzs7ZUFFM0MsS0FBSztnQkFDSCxPQUFPdUwsRUFBVXZMLE9BQU8sVUFBVSxLQUFJLEtBQUosQ0FBT3FMLEVBQWlCbFksU0FBUzs7ZUFFckUsS0FBSztnQkFJSCxPQUhBb1ksRUFBVXpMLE9BQU8sSUFDakJ5TCxFQUFVeEosS0FBS3dKLEVBQWlCLE1BQUUsSUFDbEMsR0FBSTFkLE1BQU0sc0JBQXNCMGQsRUFBVXhKLEtBQ25Dd0osRUFBVXZMLE9BQU8sVUFBVSxLQUFJLEtBQUosQ0FBTzs7ZUFFM0MsS0FBSztlQUNMLEtBQUs7Z0JBQ0gsT0FBT3VMLEVBQVUvSzs7Z0JBR3RCNEssR0FBVTVtQixNQUFNLEVBQUMsRUFBQyxHQUFHOztVQU8xQixPQUpBLFNBQXFCZ25CO1lBQ25CLE9BQU9MLEVBQWE5YyxNQUFNN0osTUFBTXVHOztTQTVDN0I7U0FpRE47UUFDRHZCLEtBQUs7UUFDTHZGLE9BQU8sU0FBZ0NrUCxHQUFTbVY7VUFDOUMsSUFBSTllLElBQU1oRixLQUFLd2UsR0FBR3VCLGVBQWUrRCxFQUFXMVQsU0FBUyxPQUFPO1VBQzVELElBQUk2VyxJQUFVO1lBQ1oxYSxNQUFNb0M7WUFDTnVZLFdBQVcsS0FBSSxLQUFKLElBQVVsbkIsS0FBS3NlLG1CQUFtQjZJLEtBQUtDLFFBQVEsTUFBT2hYLFNBQVM7O1VBRTVFLElBQUlpWCxJQUFNcmlCLEVBQUlzaUIsS0FBSyxHQUFVLEtBQWNMLElBQVVwUCxNQUFNO1VBQzNELE9BQU87WUFDTHlILFdBQVd0YSxFQUFJNmEsWUFBWUksT0FBTzdQLFNBQVM7WUFDM0NtUCxXQUFXdmEsRUFBSTZhLFlBQVlLLE9BQU85UCxTQUFTO1lBQzNDbVgsVUFBVU47WUFDVk8sV0FBVyxHQUFPN1AsS0FBSzBQLEVBQUlJLEVBQUVyWCxTQUFTLElBQUksTUFBTWlYLEVBQUk1TSxFQUFFckssU0FBUyxJQUFJLE1BQU0sS0FBSSxLQUFKLENBQU8sSUFBSUEsU0FBUyxJQUFJLElBQUksT0FBT0EsU0FBUzs7O1NBR3hIO1FBQ0RwTCxLQUFLO1FBQ0x2RixPQUFPO1VBQ0wsSUFBSWlvQixJQUFlN1MsR0FBZ0MsV0FBeUIsU0FBUzhTLEVBQVNwYjtZQUM1RixJQUFJMUosR0FDQWdrQixHQUNBZSxJQUFTcmhCO1lBQ2IsT0FBTyxXQUF5QixTQUFtQnNoQjtjQUNqRCxTQUNFLFFBQVFBLEVBQVV2TSxPQUFPdU0sRUFBVTVXO2VBQ2pDLEtBQUs7Z0JBSUgsT0FIQXBPLElBQVUra0IsRUFBTzFpQixTQUFTLFVBQW1CcEIsTUFBZDhqQixFQUFPLEtBQW1CQSxFQUFPLEtBQUssSUFDckVDLEVBQVV2TSxPQUFPLEdBQ2pCdU0sRUFBVTVXLE9BQU8sR0FDVjNFLEVBQUssR0FBR3ZGLE9BQU8vRyxLQUFLaWUsY0FBYyxTQUFTMVIsR0FBTTFKLEdBQVM7a0JBQy9Eb0osWUFBVzs7O2VBR2YsS0FBSztnQkFFSCxPQURBNGEsSUFBbUJnQixFQUFVdkssTUFDdEJ1SyxFQUFVck0sT0FBTyxVQUFVcUwsRUFBaUJsWTs7ZUFFckQsS0FBSztnQkFJSCxPQUhBa1osRUFBVXZNLE9BQU8sR0FDakJ1TSxFQUFVdEssS0FBS3NLLEVBQWlCLE1BQUUsSUFDbEMsR0FBSXhlLE1BQU0sc0JBQXNCd2UsRUFBVXRLLEtBQ25Dc0ssRUFBVXJNLE9BQU8sVUFBVTs7ZUFFcEMsS0FBSztlQUNMLEtBQUs7Z0JBQ0gsT0FBT3FNLEVBQVU3TDs7Z0JBR3RCMkwsR0FBVTNuQixNQUFNLEVBQUMsRUFBQyxHQUFHOztVQU8xQixPQUpBLFNBQXFCOG5CO1lBQ25CLE9BQU9KLEVBQWE3ZCxNQUFNN0osTUFBTXVHOztTQW5DN0I7U0F3Q047UUFDRHZCLEtBQUs7UUFDTHZGLE9BQU8sU0FBK0IwbEIsR0FBUTRDO1VBQzVDLElBQUk1QyxFQUFPamdCLFdBQVc2aUIsRUFBVTdpQixRQUM5QixPQUFPO1VBR1QsSUFBSThpQixJQUFTLEtBQUksS0FBSixDQUFPO1VBRXBCLEtBQUssSUFBSS9pQixJQUFJLEdBQUdBLElBQUlrZ0IsRUFBT2pnQixRQUFRRCxLQUFLLEdBQUc7WUFDekMsSUFBSWdqQixJQUFRLEtBQUksS0FBSixDQUFPO1lBQ25CLElBQUlDLElBQVEsS0FBSSxLQUFKLENBQU87WUFFbkIsS0FBSyxJQUFJck4sSUFBSSxHQUFHQSxJQUFJc0ssRUFBT2pnQixRQUFRMlYsS0FBSyxHQUN0QyxJQUFJNVYsTUFBTTRWLEdBQUc7Y0FFWG9OLEtBREFBLElBQVFBLEVBQU1FLElBQUlKLEVBQVVsTixHQUFHdU4sUUFDakJwSCxLQUFLaGhCLEtBQUt3ZSxHQUFHeUMsTUFBTW5SO2NBQ2pDLElBQUl1WSxJQUFPTixFQUFVOWlCLEdBQUc4YixJQUFJZ0gsRUFBVWxOO2NBQ3RDd04sSUFBT0EsRUFBS3JILEtBQUtoaEIsS0FBS3dlLEdBQUd5QyxNQUFNblIsSUFDL0JvWSxJQUFRQSxFQUFNQyxJQUFJRSxHQUFNckgsS0FBS2hoQixLQUFLd2UsR0FBR3lDLE1BQU1uUjs7WUFJL0MsSUFBSXdZLElBQVFMLEVBQU1FLElBQUlELEVBQU1LLEtBQUt2b0IsS0FBS3dlLEdBQUd5QyxNQUFNblIsSUFBSWtSLEtBQUtoaEIsS0FBS3dlLEdBQUd5QyxNQUFNblI7WUFDdEV3WSxJQUFRQSxFQUFNSCxJQUFJaEQsRUFBT2xnQixJQUFJK2IsS0FBS2hoQixLQUFLd2UsR0FBR3lDLE1BQU1uUixJQUNoRGtZLElBQVNBLEVBQU9sSSxJQUFJd0k7O1VBR3RCLE9BQU9OLEVBQU9oSCxLQUFLaGhCLEtBQUt3ZSxHQUFHeUMsTUFBTW5SOztTQUVsQztRQUNEOUssS0FBSztRQUNMdkYsT0FBTyxTQUFvQ3FrQjtVQUV6QyxJQUFJMEUsSUFETXhvQixLQUFLd2UsR0FBR3VCLGVBQWUrRCxFQUFXMVQsU0FBUyxPQUFPLEtBQUssT0FDN0N5UCxZQUFZNEksT0FBTyxRQUFPLEdBQU81USxNQUFNO1VBQzNELEdBQUkvTSxLQUFLMGQsR0FBVztVQUNwQixJQUFJRSxJQUFrQixLQUFLM2hCLE9BQU8sR0FBVSxHQUFPNFEsS0FBSzZRLEdBQVcsUUFBUTNRLE1BQU07VUFDakYsUUFBTyxLQUFBOFEsbUJBQWtCRDs7U0FFMUI7UUFDRDFqQixLQUFLO1FBQ0x2RixPQUFPLFNBQW1DbXBCLEdBQVlDO1VBQ3BELElBQUk3akIsSUFBTWhGLEtBQUt3ZSxHQUFHbUIsY0FBYztZQUM5QmxYLEdBQUdtZ0IsRUFBV3hZLFNBQVMsT0FBTztZQUM5QndQLEdBQUdpSixFQUFXelksU0FBUyxPQUFPOztVQUVoQyxJQUFJb1ksSUFBWXhqQixFQUFJNmEsWUFBWTRJLE9BQU8sUUFBTyxHQUFPNVEsTUFBTTtVQUMzRCxHQUFJL00sS0FBSzlGLEVBQUk2YSxZQUFZNEksT0FBTyxRQUFPLElBQVE7VUFDL0MsSUFBSUMsSUFBa0IsS0FBSzNoQixPQUFPLEdBQVUsR0FBTzRRLEtBQUs2USxHQUFXLFFBQVEzUSxNQUFNO1VBQ2pGLFFBQU8sS0FBQThRLG1CQUFrQkQ7O1NBTTFCO1FBQ0QxakIsS0FBSztRQUNMdkYsT0FBTztVQUNMLElBQUlxcEIsSUFBb0JqVSxHQUFnQyxXQUF5QixTQUFTa1UsRUFBUzVOLEdBQVdzQixHQUFldU07WUFDM0gsSUFBSWhoQixHQUNBQyxHQUNBZ2hCLEdBQ0FySyxHQUNBRCxHQUNBdUssR0FDQXBOLEdBQ0FGLEdBQ0FpRCxHQUNBc0ssR0FDQUMsR0FDQTNpQixHQUNBQyxHQUNBcVksR0FDQUMsR0FDQUMsR0FDQVMsR0FDQU0sR0FDQVosR0FDQWlLLElBQVM5aUI7WUFFYixPQUFPLFdBQXlCLFNBQW1CK2lCO2NBQ2pELFNBQ0UsUUFBUUEsRUFBVWhPLE9BQU9nTyxFQUFVclk7ZUFDakMsS0FBSztnQkFZSCxPQVhBakosSUFBV2doQixFQUFNaGhCLFVBQVVDLElBQWErZ0IsRUFBTS9nQixZQUM5Q2doQixJQUFhSSxFQUFPbmtCLFNBQVMsVUFBbUJwQixNQUFkdWxCLEVBQU8sTUFBbUJBLEVBQU8sSUFDbkUsR0FBSXZFLE1BQU0sK0JBQStCO2tCQUN2QzNKLFdBQVdBO2tCQUNYc0IsZUFBZUE7a0JBQ2Z6VSxVQUFVQTtrQkFDVkMsWUFBWUE7a0JBQ1pnaEIsWUFBWUE7b0JBRWR0SyxLQUFXLEdBQ1gySyxFQUFVclksT0FBTyxHQUNWZ0ssR0FBVUUsR0FBV25ULEdBQVVDOztlQUV4QyxLQUFLO2dCQUdILElBRkFxaEIsRUFBVS9MLEtBQUsrTCxFQUFVaE0sTUFFckJnTSxFQUFVL0wsSUFBSTtrQkFDaEIrTCxFQUFVclksT0FBTztrQkFDakI7O2dCQUdGcVksRUFBVS9MLEtBQUs7O2VBRWpCLEtBQUs7Z0JBS0gsSUFKQTJMLElBQVFJLEVBQVUvTCxJQUNsQnpCLElBQVlvTixFQUFNcE4sYUFDbEJGLElBQWNzTixFQUFNdE4saUJBRUNsUCxLQUFLQyxVQUFVaVAsR0FBYTRCLFNBQVMsMkJBQTRCO2tCQUNwRjhMLEVBQVVyWSxPQUFPO2tCQUNqQjs7Z0JBR0YsTUFBTSxJQUFJdEYsTUFBTTs7ZUFFbEIsS0FBSztnQkFDSCxLQUFNaVEsTUFBZWxQLEtBQUtDLFVBQVVpUCxHQUFhNEIsU0FBUyxvREFBcUQ7a0JBQzdHOEwsRUFBVXJZLE9BQU87a0JBQ2pCOztnQkFJRixPQURBcVksRUFBVXJZLE9BQU8sSUFDVm9MLEdBQVU7a0JBQ2ZsQixXQUFXQTtrQkFDWHNCLGVBQWVBO2tCQUNmQyxnQkFBVzVZO2tCQUNYNlksaUJBQVk3WTtrQkFDWmtFLFVBQVVBO2tCQUNWQyxZQUFZQTtrQkFDWjJVLFlBQVk1YyxLQUFLNGM7a0JBQ2pCdlcsU0FBU3JHLEtBQUtxRzs7O2VBR2xCLEtBQUs7Z0JBRUgsT0FEQWlqQixFQUFVclksT0FBTyxJQUNWbUwsR0FBY2pCLEdBQVduVCxHQUFVQyxHQUFZOztlQUV4RCxLQUFLO2dCQUNINFcsSUFBZXlLLEVBQVVoTSxNQUN6QnNCLElBQWlCQyxpQkFBbUQsSUFBU0EsRUFBYS9DLFdBQzFGNkMsS0FBVyxHQUNYMkssRUFBVXJZLE9BQU87Z0JBQ2pCOztlQUVGLEtBQUs7Z0JBQ0gsS0FBSzZLLEdBQVc7a0JBQ2R3TixFQUFVclksT0FBTztrQkFDakI7O2dCQUdGMk4sSUFBaUI5QyxHQUNqQndOLEVBQVVyWSxPQUFPO2dCQUNqQjs7ZUFFRixLQUFLO2dCQUNILE1BQU0sSUFBSXRGLE1BQU0sNkNBQTZDNUUsT0FBTzJGLEtBQUtDLFVBQVVtUCxLQUFhLEtBQUssTUFBTS9VLE9BQU8yRixLQUFLQyxVQUFVaVAsS0FBZTs7ZUFFbEosS0FBSztnQkFNSCxJQUxBLEdBQUlrSixNQUFNLCtCQUErQjtrQkFDdkNsRyxnQkFBZ0JBO2tCQUNoQkQsVUFBVUE7cUJBR1BDLEdBQWdCO2tCQUNuQjBLLEVBQVVyWSxPQUFPO2tCQUNqQjs7Z0JBS0YsSUFGQW1ZLElBQXlCeEssRUFBZTFlLEtBQUssSUFBSXVHLElBQUkyaUIsRUFBdUI5SixXQUFXNVksSUFBSTBpQixFQUF1QjdKLFlBRTdHdmYsS0FBSytkLGNBQWM7a0JBQ3RCdUwsRUFBVXJZLE9BQU87a0JBQ2pCOztnQkFLRixPQUZBcVksRUFBVWhPLE9BQU8sSUFDakJnTyxFQUFVclksT0FBTyxJQUNWalIsS0FBS3dmLGNBQWMvWSxHQUFHQyxRQUFHNUMsSUFBWTZhOztlQUU5QyxLQUFLO2dCQUNISSxJQUFjdUssRUFBVWhNLE1BQ3hCMEIsSUFBUSxLQUFJLEtBQUosQ0FBT0QsRUFBWUMsU0FBUyxLQUFLLEtBQ3pDVSxJQUFhWCxFQUFZVyxZQUN6QjRKLEVBQVVyWSxPQUFPO2dCQUNqQjs7ZUFFRixLQUFLO2dCQUdILE1BRkFxWSxFQUFVaE8sT0FBTyxJQUNqQmdPLEVBQVU3SixLQUFLNkosRUFBaUIsTUFBRSxLQUM1QixJQUFJL087O2VBRVosS0FBSztnQkFDSCxJQUFpQyxTQUEzQndFLEVBQVlXLFlBQXNCO2tCQUN0QzRKLEVBQVVyWSxPQUFPO2tCQUNqQjs7Z0JBR0ZnTyxJQUFpQmpmLEtBQUt3ZSxHQUFHbUIsY0FBYztrQkFDckNsWCxHQUFHaEM7a0JBQ0htWixHQUFHbFo7bUJBQ0ZtWixZQUFZQyxJQUFJOWYsS0FBS3dlLEdBQUd1QixlQUFlZixFQUFNNU8sU0FBUyxLQUFLeVAsY0FDOUR5SixFQUFVclksT0FBTztnQkFDakI7O2VBRUYsS0FBSztnQkFDSCxJQUFpQyxTQUEzQjhOLEVBQVlXLFlBQXNCO2tCQUN0QzRKLEVBQVVyWSxPQUFPO2tCQUNqQjs7Z0JBR0U4TixFQUFZcUIsV0FFZG5CLElBQWlCamYsS0FBS3dlLEdBQUdtQixjQUFjO2tCQUNyQ2xYLEdBQUdoQztrQkFDSG1aLEdBQUdsWjttQkFDRm1aLGVBRUhaLElBQWlCamYsS0FBS3dlLEdBQUdtQixjQUFjO2tCQUNyQ2xYLEdBQUdoQztrQkFDSG1aLEdBQUdsWjttQkFDRm1aLFlBQVlDLElBQUk5ZixLQUFLd2UsR0FBR21CLGNBQWM7a0JBQ3ZDbFgsR0FBR3NXLEVBQVlpQixTQUFTdlg7a0JBQ3hCbVgsR0FBR2IsRUFBWWlCLFNBQVNKO21CQUN2QkMsY0FDSEcsSUFBV2pCLEVBQVlpQixXQUd6QnNKLEVBQVVyWSxPQUFPO2dCQUNqQjs7ZUFFRixLQUFLO2dCQUNILE1BQU0sSUFBSXRGLE1BQU07O2VBRWxCLEtBQUs7Z0JBQ0gyZCxFQUFVclksT0FBTztnQkFDakI7O2VBRUYsS0FBSztnQkFHSCxPQUZBeU8sSUFBYSxNQUNiNEosRUFBVXJZLE9BQU8sSUFDVmpSLEtBQUttbUIsWUFBWTtrQkFDdEI3RyxXQUFXN1k7a0JBQ1g4WSxXQUFXN1k7OztlQUdmLEtBQUs7Z0JBQ0hzWSxJQUFRc0ssRUFBVWhNLE1BQ2xCMkIsSUFBaUJqZixLQUFLd2UsR0FBR21CLGNBQWM7a0JBQ3JDbFgsR0FBR2hDO2tCQUNIbVosR0FBR2xaO21CQUNGbVosWUFBWUMsSUFBSTlmLEtBQUt3ZSxHQUFHdUIsZUFBZWYsRUFBTTVPLFNBQVMsS0FBS3lQOztlQUVoRSxLQUFLO2dCQWFILElBWkFwWixJQUFJd1ksRUFBZWdCLE9BQU83UCxTQUFTLEtBQ25DMUosSUFBSXVZLEVBQWVpQixPQUFPOVAsU0FBUyxLQUNuQ2dQLElBQVVwZixLQUFLbWdCLDBCQUEwQmxCLEVBQWVnQixRQUFRaEIsRUFBZWlCLFNBQy9FLEdBQUk0RSxNQUFNLCtCQUErQjtrQkFDdkNyZSxHQUFHQTtrQkFDSEMsR0FBR0E7a0JBQ0gwWSxTQUFTQTtrQkFDVE0sWUFBWUE7a0JBQ1pWLE9BQTRCLFVBQXBCbUssSUFBU25LLFdBQThCLE1BQVhtSyxTQUFvQixJQUFTQSxFQUFPL1ksU0FBUztrQkFDakY0UCxVQUFVQTtvQkFHUmlKLEdBQVk7a0JBQ2RLLEVBQVVyWSxPQUFPO2tCQUNqQjs7Z0JBR0YsT0FBT3FZLEVBQVU5TixPQUFPLFVBQVU0RDs7ZUFFcEMsS0FBSztnQkFDSCxPQUFPa0ssRUFBVTlOLE9BQU8sVUFBVTtrQkFDaENrRSxZQUFZQTtrQkFDWk4sU0FBU0E7a0JBQ1QzWSxHQUFHQTtrQkFDSEMsR0FBR0E7a0JBQ0g4WixlQUFleEI7a0JBQ2ZnQixVQUFVQTs7O2VBR2QsS0FBSztnQkFDSCxNQUFNLElBQUlyVSxNQUFNLDZDQUE2QzVFLE9BQU8yRixLQUFLQyxVQUFVbVAsS0FBYSxLQUFLLE1BQU0vVSxPQUFPMkYsS0FBS0MsVUFBVWlQLEtBQWU7O2VBRWxKLEtBQUs7ZUFDTCxLQUFLO2dCQUNILE9BQU8wTixFQUFVdE47O2dCQUd0QitNLEdBQVUvb0IsTUFBTSxFQUFDLEVBQUMsSUFBSTs7VUFPM0IsT0FKQSxTQUEwQnVwQixHQUFNQyxHQUFNQztZQUNwQyxPQUFPWCxFQUFrQmpmLE1BQU03SixNQUFNdUc7O1NBalBsQztTQTBQTjtRQUNEdkIsS0FBSztRQUNMdkYsT0FBTztVQUNMLElBQUlpcUIsSUFBaUI3VSxHQUFnQyxXQUF5QixTQUFTOFUsRUFBU2xqQixHQUFHQyxHQUFHa2E7WUFDcEcsSUFBSWdKLEdBQ0FyZCxHQUNBMk4sR0FDQTJQLElBQVN0akI7WUFDYixPQUFPLFdBQXlCLFNBQW1CdWpCO2NBQ2pELFNBQ0UsUUFBUUEsRUFBVXhPLE9BQU93TyxFQUFVN1k7ZUFDakMsS0FBSztnQkFnQkgsT0FmQTJZLElBQVVDLEVBQU8za0IsU0FBUyxVQUFtQnBCLE1BQWQrbEIsRUFBTyxNQUFtQkEsRUFBTyxJQUNoRTNQLElBQU0wUCxJQUFVLGFBQWEsaUJBRzNCcmQsSUFERXFVLElBQ0s1Z0IsS0FBS2toQix1QkFBdUJoSCxHQUFLMEcsS0FFakM7a0JBQ0x0QixXQUFXN1k7a0JBQ1g4WSxXQUFXN1k7a0JBQ1g2Z0IsVUFBVTtvQkFDUmhiLE1BQU0yTjs7bUJBS0w0UCxFQUFVdE8sT0FBTyxVQUFVbFAsRUFBSyxHQUFHdkYsT0FBTy9HLEtBQUtpZSxjQUFjLHNCQUFzQjFSLFFBQU16SSxHQUFXO2tCQUN6R21JLFlBQVc7OztlQUdmLEtBQUs7ZUFDTCxLQUFLO2dCQUNILE9BQU82ZCxFQUFVOU47O2dCQUd0QjJOLEdBQVUzcEI7O1VBT2YsT0FKQSxTQUF1QitwQixHQUFNQyxHQUFNQztZQUNqQyxPQUFPUCxFQUFlN2YsTUFBTTdKLE1BQU11Rzs7U0F0Qy9CO1NBMkNOO1FBQ0R2QixLQUFLO1FBQ0x2RixPQUFPO1VBQ0wsSUFBSXlxQixJQUFZclYsR0FBZ0MsV0FBeUIsU0FBU3NWLEVBQVUxakIsR0FBR0MsR0FBR2thO1lBQ2hHLE9BQU8sV0FBeUIsU0FBb0J3SjtjQUNsRCxTQUNFLFFBQVFBLEVBQVc5TyxPQUFPOE8sRUFBV25aO2VBQ25DLEtBQUs7Z0JBQ0gsT0FBT21aLEVBQVc1TyxPQUFPLFVBQVV4YixLQUFLd2YsY0FBYy9ZLEdBQUdDLEdBQUdrYSxJQUFTOztlQUV2RSxLQUFLO2VBQ0wsS0FBSztnQkFDSCxPQUFPd0osRUFBV3BPOztnQkFHdkJtTyxHQUFXbnFCOztVQU9oQixPQUpBLFNBQWtCcXFCLEdBQU1DLEdBQU1DO1lBQzVCLE9BQU9MLEVBQVVyZ0IsTUFBTTdKLE1BQU11Rzs7U0FqQjFCO1NBc0JOO1FBQ0R2QixLQUFLO1FBQ0x2RixPQUFPLFNBQWtDbWhCLEdBQVM1QjtVQUNoRCxJQUFJd0wsSUFBWSxLQUFJLEtBQUosQ0FBTzVKLEdBQVM7VUFDaEMsSUFBSTZKLElBQVUsS0FBSSxLQUFKLENBQU96TCxHQUFPO1VBQzVCLE9BQU93TCxFQUFVekosSUFBSTBKLEdBQVN6SixLQUFLaGhCLEtBQUt3ZSxHQUFHeUMsTUFBTW5SLEdBQUdNLFNBQVM7O1dBRTdELEVBQUM7UUFDSHBMLEtBQUs7UUFDTHZGLE9BQU87VUFDTCxJQUFJeWxCLE1BQUkzZSxVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxPQUFtQkEsVUFBVTtVQUNuRTJlLElBQUcsR0FBSXdGLGNBQWlCLEdBQUlyUzs7U0FFakM7UUFDRHJULEtBQUs7UUFDTHZGLE9BQU8sU0FBcUIySztVQUMxQkksRUFBVUo7O1NBRVg7UUFDRHBGLEtBQUs7UUFDTHZGLE9BQU8sU0FBd0I0SztVQUM3QkMsRUFBYUQ7O1NBRWQ7UUFDRHJGLEtBQUs7UUFDTHZGLE9BQU8sU0FBOEI4RDtVQUNuQyxPQUFPQSxhQUFlZ1g7O1lBSW5Cc0Q7S0FwckNnQjs7Ozs7Ozs7SUN0VnpCLE1BQU04TSxLQUNJLFVBREpBLEtBRU0sWUFGTkEsS0FHSSxVQUhKQSxLQUlJLFVBSkpBLEtBS0s7SUFFWCxNQUFNQyxLQUFtQjtNQUN2QkMsUUFBUTtNQUNSQyxVQUFVO01BQ1ZDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxTQUFTO01BQ1RDLG9CQUFvQjs7SUFFdEIsTUFBTUMsS0FBZ0M7TUFDcEMsQ0FBQ1AsR0FBaUJDLFNBQVM7TUFDM0IsQ0FBQ0QsR0FBaUJFLFdBQVc7TUFDN0IsQ0FBQ0YsR0FBaUJHLFNBQVM7TUFDM0IsQ0FBQ0gsR0FBaUJJLFNBQVM7TUFDM0IsQ0FBQ0osR0FBaUJLLFVBQVU7TUFDNUIsQ0FBQ0wsR0FBaUJNLHFCQUFxQjs7SUFVekMsTUFBTUUsS0FBa0I7TUFDdEJDLFlBQVk7TUFDWkMsYUFBYTtNQUNiQyxTQUFTO01BQ1RDLFNBQVM7TUFDVEMsS0FBSztNQUNMQyxNQUFNOztJQUVSLE1BQU1DLEtBQWtCO01BQ3RCQyxhQUFhO01BQ2JDLFVBQVU7TUFDVkMsY0FBYztNQUNkQyxXQUFXOztJQUdiLE1BQU1DLEtBQXFCO01BQ3pCLENBckJhLGdCQXFCbUI7UUFDOUJDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsZUFBZTtRQUNmQyxlQUFlO1FBQ2ZDLGlCQUFpQixFQUFDLE9BQU8sT0FBTztRQUNoQ0MsdUJBQXVCLEVBQUMsT0FBTyxPQUFPLFFBQVE7UUFDOUNDLGNBQWE7UUFDYkMsYUFBWTs7TUFFZCxDQW5DUyxZQW1DbUI7UUFDMUJULE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsZUFBZTtRQUNmQyxlQUFlO1FBQ2ZDLGlCQUFpQixFQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPO1FBQzVEQyx1QkFBdUIsRUFBQyxPQUFPLE9BQU8sUUFBUSxRQUFRLFFBQVEsV0FBVztRQUN6RUMsY0FBYTtRQUNiQyxhQUFZOztNQUVkLENBOUNNLFNBOENtQjtRQUN2QlQsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxlQUFlO1FBQ2ZDLGVBQWU7UUFDZkMsaUJBQWlCLEVBQUMsT0FBTyxPQUFPLE9BQU8sT0FBTztRQUM5Q0MsdUJBQXVCLEVBQUMsT0FBTyxPQUFPLFFBQVE7UUFDOUNDLGNBQWE7UUFDYkMsYUFBWTs7TUFFZCxDQXhEUyxZQXdEbUI7UUFDMUJULE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsZUFBZTtRQUNmQyxlQUFlO1FBQ2ZDLGlCQUFpQixFQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU87UUFDbkVDLHVCQUF1QixFQUFDLE9BQU87UUFDL0JDLGNBQWE7UUFDYkUsT0FBTTtRQUNORCxhQUFZOztNQUVkLENBcEVVLGFBb0VtQjtRQUMzQlQsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxlQUFlO1FBQ2ZDLGVBQWU7UUFDZkMsaUJBQWlCLEVBQUMsT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPO1FBQ3JEQyx1QkFBdUIsRUFBQyxPQUFPLE9BQU8sT0FBTyxRQUFRO1FBQ3JEQyxjQUFhO1FBQ2JDLGFBQVk7O01BRWQsQ0EvRVMsWUErRW1CO1FBQzFCVCxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLGVBQWU7UUFDZkMsZUFBZTtRQUNmQyxpQkFBaUIsRUFBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU87UUFDckRDLHVCQUF1QixFQUFDLE9BQU8sT0FBTyxRQUFRO1FBQzlDQyxjQUFhO1FBQ2JDLGFBQVk7OztJQXVEaEIsSUFBSUUsS0FBZ0I7TUFDbEJDLHVCQUF1QnZ0QixPQUFPa2EsT0FBT29SO01BQ3JDa0Msa0JBQWtCZDtNQUNsQmUsS0FBSztNQUNMQyxjQXhEbUI7UUFDbkJDLElBQUk7VUFDRkMsT0FBTztZQUNMQyxVQUFVO1lBQ1ZDLGdCQUFnQjtZQUNoQkMsZUFBZTtZQUNmQyxpQkFBaUI7WUFDakJDLGVBQWU7WUFDZkMsV0FBVzs7O1FBR2ZDLElBQUk7VUFDRlAsT0FBTztZQUNMQyxVQUFVO1lBQ1ZDLGdCQUFnQjtZQUNoQkMsZUFBZTtZQUNmQyxpQkFBaUI7WUFDakJDLGVBQWU7WUFDZkMsV0FBVzs7O1FBR2ZFLElBQUk7VUFDRlIsT0FBTztZQUNMQyxVQUFVO1lBQ1ZDLGdCQUFnQjtZQUNoQkMsZUFBZTtZQUNmQyxpQkFBaUI7WUFDakJDLGVBQWU7WUFDZkMsV0FBVzs7O1FBR2ZHLElBQUk7VUFDRlQsT0FBTztZQUNMQyxVQUFVO1lBQ1ZDLGdCQUFnQjtZQUNoQkMsZUFBZTtZQUNmQyxpQkFBaUI7WUFDakJDLGVBQWU7WUFDZkMsV0FBVzs7O1FBR2ZJLElBQUk7VUFDRlYsT0FBTztZQUNMQyxVQUFVO1lBQ1ZDLGdCQUFnQjtZQUNoQkMsZUFBZTtZQUNmQyxpQkFBaUI7WUFDakJDLGVBQWU7WUFDZkMsV0FBVzs7OztNQVNmSyxjQUFjO01BQ2RDLHVCQUF1Qjs7SUFHekIsTUFBTUMsS0FBWWpaLEtBQU0sSUFBSXpKLFNBQVEsQ0FBQ0MsR0FBU0M7TUFDaEIsUUFBeEI4QixPQUFPMmdCLFNBQVN2aEIsT0FDbEJwQixRQUFRQyxRQUFRd0osS0FBTWxJLEtBQUt0QixHQUFTZ08sTUFBTS9OLEtBRTFDOEIsT0FBTzJnQixTQUFTL2YsaUJBQWlCLHFCQUFvQjtRQUNuRDVDLFFBQVFDLFFBQVF3SixLQUFNbEksS0FBS3RCLEdBQVNnTyxNQUFNL047OztJQUloRCxNQUFNMGlCLEtBQWdCQztNQUNwQixNQUFNQyxJQUFXOWdCLE9BQU8yZ0IsU0FBU0ksY0FBYztNQUMvQyxNQUFNQyxJQUFjSCxFQUFLSTtNQUd6QixPQURBSCxFQUFTSSxZQUFZRixHQUNkRixFQUFTSyxRQUFRQzs7SUFjMUIsTUFBTUMsS0FBZSxDQUFDdGMsR0FBUXVjLEdBQVc1c0I7TUFDdkMsTUFBTTZzQixJQUFpQjNyQjtRQUNyQmxCLEVBQVFrQixJQUNSbVAsRUFBT2xRLGVBQWV5c0IsR0FBV0M7O01BR25DeGMsRUFBT3BRLEdBQUcyc0IsR0FBV0M7O0lBRXZCL21CLGVBQWVnbkI7TUFDYixPQUFPLElBQUl4akIsU0FBUUM7UUFDVyxjQUF4QjBpQixTQUFTYyxhQUNYeGpCLE1BdkJjLFNBQVU4RyxHQUFRdWMsR0FBVzVzQjtVQUMvQyxLQUFLLElBQUl3TixJQUFPaEosVUFBVXJCLFFBQVE2cEIsSUFBYyxJQUFJdmYsTUFBTUQsSUFBTyxJQUFJQSxJQUFPLElBQUksSUFBSUUsSUFBTyxHQUFHQSxJQUFPRixHQUFNRSxLQUN6R3NmLEVBQVl0ZixJQUFPLEtBQUtsSixVQUFVa0o7VUFHcEMsTUFBTW1mLElBQWlCO1lBQ3JCN3NCLEtBQVdndEIsSUFDWDNjLEVBQU92RCxvQkFBb0I4ZixHQUFXQzs7VUFHeEN4YyxFQUFPbkUsaUJBQWlCMGdCLEdBQVdDO1NBZS9CSSxDQUFZaEIsVUFBVSxvQkFBb0IxaUI7OztJQUtoRCxJQUFJLEtBQU0sY0FBbUI7SUFFN0IsSUFBSTJqQixLQUFXO01BQ2J2VyxRQUFRO1FBQ053VyxjQUFjLE1BQU07UUFDcEJDLHlCQUF5QixNQUFNO1FBQy9CQyxrQkFBa0IsTUFBTTtRQUN4QkMsaUJBQWlCbmpCLEtBQVUsZ0ZBQWdGbkYsT0FBT21GLEdBQVE7UUFDMUhvakIscUJBQXFCLE1BQU07UUFDM0JDLGdCQUFnQixDQUFDQyxHQUFtQkMsTUFBdUIsbURBQW1EMW9CLE9BQU95b0IsR0FBbUIsMEJBQTBCem9CLE9BQU8wb0IsR0FBb0I7UUFDN0xDLG9CQUFvQixNQUFNO1FBQzFCQyxzQkFBc0IsTUFBTTtRQUM1QkMsc0JBQXNCLE1BQU07UUFDNUJDLHFCQUFxQixNQUFNO1FBQzNCQyxxQkFBcUI1akIsS0FBVSwrQ0FBK0NuRixPQUFPbUYsR0FBUTs7TUFFL0ZwQixNQUFNO1FBQ0ppbEIsV0FBV0MsS0FBVyx1Q0FBdUNqcEIsT0FBT2lwQixHQUFTOztNQUUvRUMsVUFBVTtRQUVSQyxtQkFBbUI7UUFDbkJDLGlCQUFpQjtRQUNqQjlnQixRQUFRO1VBQ04rZ0IsT0FBTztVQUNQN2pCLE1BQU07VUFDTjhqQixnQkFBZ0I7VUFDaEJDLGNBQWM7O1FBRWhCQyxtQkFBbUI7OztJQUl2QixPQUFNLGtCQUNKekQsTUFDRUY7SUF1RkosU0FBUzRELEdBQTJCQyxHQUFhcG5CLEdBQU9xbkI7TUFDdEQsSUFBSUMsSUFBYSxrQ0FBa0M1cEIsT0FBTzBwQixHQUFhO01BRW5FcG5CLGFBQXNDQSxFQUFNZ0gsVUFDOUNzZ0IsS0FBYyxLQUFLNXBCLE9BQU9zQyxFQUFNZ0gsU0FHbEMsR0FBSWdFLEtBQUtzYyxJQUVMRCxLQUFXQSxFQUFRRSxjQUFjLFdBQVcsS0FDOUNGLEVBQVE5dUIsS0FBSyxTQUFTK3VCOztJQUcxQixNQUFNRSxLQUF1QixNQUFNNVQsS0FBS0UsU0FBUy9NLFNBQVMsSUFBSXlILE1BQU07SUFDcEUsTUFBTWlaLEtBQWNqcEIsT0FBT2twQixHQUFVQztNQUNuQyxJQUFJQztNQUNKLElBQUlDO01BRUosTUFBTUMsSUFBVTtNQUNoQixJQUFJQyxJQUFjSixFQUFVRyxXQUFXQTtNQUV2QztRQUNFLEtBQWtCLGNBQWJKLEtBQXVDLGlCQUFiQSxPQUErQkMsRUFBVUcsU0FBUztVQUMvRSxJQUFJdG1CO1VBR0lBLElBRkgraEIsR0FBY2lCLGVBRUE7WUFDakJ0aEIsTUFBTXFnQixHQUFjaUI7b0JBSDRCN3BCLEVBQUksR0FBRytDLE9BQU82bEIsR0FBY0csS0FBSyx1REFBdURobUIsT0FBT29xQixJQUFVLElBQUk7WUFDN0psbEIsWUFBVztjQUlibWxCLElBQWN2bUIsRUFBUzBCLE1BRXZCcWdCLEdBQWNpQixlQUFlaGpCLEVBQVMwQjs7UUFFeEMsT0FBT2xEO1FBQ1AsR0FBSUEsTUFBTUEsR0FBTzs7TUFLbkIsUUFGQSxHQUFJeUIsS0FBSyxrQkFBa0JzbUIsSUFFbkJMO09BQ04sS0FBSztRQUNIRSxJQUFXLDJCQUEyQmxxQixPQUFPcXFCLElBQzdDRixJQUFXO1FBQ1g7O09BRUYsS0FBSztRQUNIRCxJQUFXLDBCQUNYQyxJQUFXO1FBQ1g7O09BRUYsS0FBSztRQUNIRCxJQUFXLHNCQUNYQyxJQUFXO1FBQ1g7O09BRUYsS0FBSztRQUNIRCxJQUFXLHVCQUNYQyxJQUFXO1FBQ1g7O09BRUYsS0FBSztRQUNIRCxJQUFXLHlCQUNYQyxJQUFXO1FBQ1g7O09BRUY7UUFDRUQsSUFBVyx1QkFBdUJscUIsT0FBT3FxQixJQUN6Q0YsSUFBVzs7TUFJZixPQUFPO1FBQ0xEO1FBQ0FDOzs7SUFHSixNQUFNRyxLQUFrQjtNQUN0QixJQUFJQyxJQUFlamtCLE9BQU9ra0IsVUFBVUMsWUFBWTtNQUNoRCxNQUFNQyxJQUFnQkgsRUFBYXBvQixNQUFNO01BRXpDLE9BREFvb0IsSUFBZWh5QixPQUFPNkUsVUFBVUMsZUFBZUMsS0FBS3VvQixHQUFjSSxjQUFjeUUsRUFBYyxNQUFNQSxFQUFjLEtBQUssTUFDaEhIOztJQUVULE1BQU1JLEtBQXdCLEVBQUM7SUFFL0IsTUFBTUMsS0FBTztJQUViLE1BQU1DLEtBQWtDO0lBRXhDLE1BQU1DLEtBQTBCO0lBb0NoQyxTQUFTLEdBQVV0b0IsR0FBUUM7TUFBa0IsSUFBSXRKLElBQU9aLE9BQU9ZLEtBQUtxSjtNQUFTLElBQUlqSyxPQUFPOEYsdUJBQXVCO1FBQUUsSUFBSXFFLElBQVVuSyxPQUFPOEYsc0JBQXNCbUU7UUFBU0MsTUFBbUJDLElBQVVBLEVBQVFDLFFBQU8sU0FBVUM7VUFBTyxPQUFPckssT0FBT3NLLHlCQUF5QkwsR0FBUUksR0FBSzVGO2NBQWlCN0QsRUFBS3dDLEtBQUttSCxNQUFNM0osR0FBTXVKOztNQUFZLE9BQU92Sjs7SUFHaFZnUCxFQUFpQjRpQixzQkFBc0I7SUFFdkMsTUFBTSxLQUF3QixTQUFVeG1CLEdBQVNDO01BQy9DLElBQUl3bUIsTUFBZXhyQixVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxPQUFtQkEsVUFBVTtNQUNsRixPQUFPLENBQUM4QyxHQUFPd0IsTUFDVHhCLEtBQVN3QixFQUFTeEIsUUFDYmtDLEVBQU9sQyxLQUFTd0IsRUFBU3hCLFVBRzFCMG9CLEtBQWdCdmlCLE1BQU02QyxRQUFReEgsS0FBWVMsRUFBUVQsS0FBWVMsRUFBUVQsRUFBUy9IOztJQUkzRixNQUFNa3ZCLFdBQTRCOWlCO01BZWhDclAsWUFBWW95QjtRQUNWLEtBQUksbUJBQ0Z6QyxJQUFvQixLQUFHLG9CQUN2QkMsS0FBcUIsR0FBSSxtQkFDekJ5QyxJQUFvQixjQUNsQjNyQixVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLO1FBd0N4RSxJQXZDQXhHLFNBRUEsRUFBZ0JDLE1BQU0sZ0JBQVcsSUFFakMsRUFBZ0JBLE1BQU0sd0JBQW1CLElBRXpDLEVBQWdCQSxNQUFNLG1CQUFjLElBRXBDLEVBQWdCQSxNQUFNLHVCQUFrQjtRQUV4QyxFQUFnQkEsTUFBTSwyQkFBc0IsSUFFNUMsRUFBZ0JBLE1BQU0sZ0JBQVcsSUFFakMsRUFBZ0JBLE1BQU0sMkJBQXNCLElBRTVDLEVBQWdCQSxNQUFNLHlCQUFvQjtRQUUxQyxFQUFnQkEsTUFBTSxlQUFVLElBRWhDLEVBQWdCQSxNQUFNLGVBQVUsSUFFaEMsRUFBZ0JBLE1BQU0sMkJBQXNCLElBRTVDLEVBQWdCQSxNQUFNLGlCQUFpQjtVQUVyQ215QixTQUFRO1VBQ1JDLHNCQUFxQjtVQUNyQkMsT0FBTTtVQUNOOUIsb0JBQW1CO1VBRW5CbGhCLFFBQVE7WUFDTitnQixRQUFPO1lBQ1A3akIsT0FBTTtZQUNOOGpCLGlCQUFnQjtZQUNoQkMsZUFBYzs7Y0FJYixNQUFBZ0MsUUFBT0wsSUFDVixNQUFNLElBQUl0bUIsTUFBTXNqQixHQUFTdlcsT0FBTzRXO1FBR2xDdHZCLEtBQUt1eUIsV0FBVSxHQUNmdnlCLEtBQUt3eUIsZ0JBQWdCaEQsSUFFckJ4dkIsS0FBS3dCLFNBakZULFNBQXlCc0Q7VUFBVSxLQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSXNCLFVBQVVyQixRQUFRRCxLQUFLO1lBQUUsSUFBSUwsSUFBUyxRQUFRMkIsVUFBVXRCLEtBQUtzQixVQUFVdEIsS0FBSztZQUFJQSxJQUFJLElBQUksR0FBVTNGLE9BQU9zRixLQUFTLEdBQUl6RSxTQUFRLFNBQVU2RTtjQUFPLEVBQWdCRixHQUFRRSxHQUFLSixFQUFPSTtrQkFBWTFGLE9BQU95Syw0QkFBNEJ6SyxPQUFPMEssaUJBQWlCbEYsR0FBUXhGLE9BQU95SywwQkFBMEJuRixNQUFXLEdBQVV0RixPQUFPc0YsSUFBU3pFLFNBQVEsU0FBVTZFO2NBQU8xRixPQUFPQyxlQUFldUYsR0FBUUUsR0FBSzFGLE9BQU9zSyx5QkFBeUJoRixHQUFRSTs7O1VBQWEsT0FBT0Y7U0FpRnJlLENBQWdCLElBQUlrdEIsR0FBb0JTLGdCQUV0RHp5QixLQUFLMHlCLGtCQUFrQixNQUN2QjF5QixLQUFLMnlCLGlCQUFpQixNQUN0QjN5QixLQUFLZ3dCLFVBQVUsTUFDZmh3QixLQUFLeXZCLHFCQUFxQkE7UUFFMUJ6dkIsS0FBSzR5Qix5QkFBeUI1eUIsS0FBSzR5Qix1QkFBdUI3a0IsS0FBSy9OLE9BQy9EQSxLQUFLNnlCLHNCQUFzQjd5QixLQUFLNnlCLG9CQUFvQjlrQixLQUFLL047UUFDekRBLEtBQUs4eUIsNEJBQTRCOXlCLEtBQUs4eUIsMEJBQTBCL2tCLEtBQUsvTixPQUNyRUEsS0FBSyt5QixpQkFBaUIveUIsS0FBSyt5QixlQUFlaGxCLEtBQUsvTjtRQUMvQ0EsS0FBS2d6QixvQkFBb0JoekIsS0FBS2d6QixrQkFBa0JqbEIsS0FBSy9OLE9BQ3JEQSxLQUFLaXpCLDBCQUEwQmp6QixLQUFLaXpCLHdCQUF3QmxsQixLQUFLL047UUFDakVBLEtBQUtrekIsWUFBWWx6QixLQUFLa3pCLFVBQVVubEIsS0FBSy9OLE9BQ3JDQSxLQUFLbXpCLGNBQWNuekIsS0FBS216QixZQUFZcGxCLEtBQUsvTixPQUN6Q0EsS0FBS296QixxQkFBcUJwekIsS0FBS296QixtQkFBbUJybEIsS0FBSy9OO1FBQ3ZEQSxLQUFLcXpCLG1CQUFtQnJ6QixLQUFLcXpCLGlCQUFpQnRsQixLQUFLL04sT0FDbkRBLEtBQUtzekIsVUFBVXR6QixLQUFLc3pCLFFBQVF2bEIsS0FBSy9OLE9BQ2pDQSxLQUFLcXlCLE9BQU9yeUIsS0FBS3F5QixLQUFLdGtCLEtBQUsvTjtRQUMzQkEsS0FBS3V6QixZQUFZdnpCLEtBQUt1ekIsVUFBVXhsQixLQUFLL047UUFHckMsTUFBTXd6QixJQUFNLElBQUk3ZjtRQUNoQixJQUFLc2UsR0FBa0J1QixHQUFLdkIsR0FBa0JqeUIsS0FBS2l6Qix3QkFBd0JsbEIsS0FBSy9OLE1BQU0sY0FFdEZBLEtBQUt5ekIscUJBQXFCLElBQUksR0FBQTd6QixnQkFBZ0I7VUFDNUM4ekIsWUFBWTtZQW9EZCxJQUFLRixFQUFJM2YsYUFBYSxrQkFBaUIsTUFBQTFSLGVBQWNuQyxLQUFLeXpCLHFCQUMxRGpELEdBQTJCemlCLEtBQUsvTixNQUFNO1FBRXRDd3pCLEVBQUlyZixhQUFhLGFBR2pCblUsS0FBS2dDLEdBQUcsWUFBVztVQUNqQmhDLEtBQUt3QixPQUFPbXlCLGVBQWM7O1FBRzVCLE1BQU1DLElBQW9CdGpCO1FBQzFCLElBQUtzakIsRUFBa0JwakIsUUFBUWdqQixFQUFJM2YsYUFBYXFlLElBQW9CMEIsRUFBa0JwakIsUUFBUXhRLEtBQUtpekIsd0JBQXdCbGxCLEtBQUsvTixNQUFNO1FBRXRJLE1BQU02ekIsSUFBWSxJQUFJcGlCO1FBQ3RCb2lCLEVBQVVueEIsS0FBS3dPLE1BQ2YyaUIsRUFBVW54QixLQTlVZDtVQUNFLE9BQU8sQ0FBQ3NPLEdBQUtOLEdBQUtPO1lBRVUsbUJBQWZELEVBQUk5RSxVQUF3QjhFLEVBQUk5RSxXQUN6Q3dFLEVBQUlySCxRQUFRLEVBQUF5cUIsVUFBQSxtQkFBNkI7Y0FDdkNubEIsU0FBUztjQUNUcEMsTUFBTXlFO2lCQUlWQyxHQUFLTTtjQUNILE9BQU0sT0FDSmxJLEtBQ0VxSDtjQUVKLE9BQUtySCxLQUlMLEdBQUlBLE1BQU0seUJBQXlCdEMsT0FBT3NDLEVBQU1zRixVQUFVdEYsSUFDbkRrSSxPQUpFQTs7O1NBOFRJLEtBQ2ZzaUIsRUFBVW54QixLQUFLa3hCLEVBQWtCN2lCLGFBQ2pDL1EsS0FBSyt6QixhQUFhRixHQUVsQkQsRUFBa0J2a0IsT0FBT3JOLEdBQUcsaUJBQWdCZ3lCO1VBQzFDLE9BQU0sUUFDSjluQixHQUFNLFFBQ05jLEtBQ0VnbkI7VUFFVyw2QkFBWDluQixJQUNGbE0sS0FBSzR5Qix1QkFBdUI1bEIsS0FDUixnQ0FBWGQsSUFDVGxNLEtBQUs4eUIsMEJBQTBCOWxCLEtBQ1gsMEJBQVhkLElBQ1RsTSxLQUFLNnlCLG9CQUFvQjdsQixLQUNoQjBrQixHQUFzQmxVLFNBQVN3VyxFQUFROW5CLFlBRWhEbE0sS0FBSzRCLEtBQUssUUFBUW95QjtVQUVsQmgwQixLQUFLNEIsS0FBSyxnQkFBZ0JvTCxFQUFPbEssU0FDakM5QyxLQUFLNEIsS0FBSyxXQUFXO1lBQ25CcUUsTUFBTWlHO1lBQ05LLE1BQU1TOzs7O01BUVZ1akI7UUFNRixPQUxLdndCLEtBQUtpMEIsY0FBYzFELHNCQUN0QixHQUFJbGMsS0FBSzRhLEdBQVNnQixTQUFTTSxvQkFDM0J2d0IsS0FBS2kwQixjQUFjMUQscUJBQW9CO1FBR2xDdndCLEtBQUt5ekI7O01BT2RFO1FBQ0UsT0FBTzN6QixLQUFLd0IsT0FBT215Qjs7TUFZckI5ckIsY0FBY21IO1FBQ1osS0FBS0EsS0FBd0IsbUJBQVRBLEtBQXFCUSxNQUFNNkMsUUFBUXJELElBQ3JELE1BQU0sRUFBQThrQixVQUFBLG1CQUE2QjtVQUNqQ25sQixTQUFTc2dCLEdBQVN2VyxPQUFPZ1g7VUFDekJuakIsTUFBTXlDOztRQUlWLE9BQU0sUUFDSjlDLEdBQU0sUUFDTmMsS0FDRWdDO1FBRUosSUFBc0IsbUJBQVg5QyxLQUF5QyxNQUFsQkEsRUFBT2hILFFBQ3ZDLE1BQU0sRUFBQTR1QixVQUFBLG1CQUE2QjtVQUNqQ25sQixTQUFTc2dCLEdBQVN2VyxPQUFPaVg7VUFDekJwakIsTUFBTXlDOztRQUlWLFNBQWVsTCxNQUFYa0osTUFBeUJ3QyxNQUFNNkMsUUFBUXJGLE9BQThCLG1CQUFYQSxLQUFrQyxTQUFYQSxJQUNuRixNQUFNLEVBQUE4bUIsVUFBQSxtQkFBNkI7VUFDakNubEIsU0FBU3NnQixHQUFTdlcsT0FBT2tYO1VBQ3pCcmpCLE1BQU15Qzs7UUFJVixPQUFPLElBQUkzRCxTQUFRLENBQUNDLEdBQVNDO1VBQzNCdkwsS0FBS216QixZQUFZO1lBQ2ZqbkI7WUFDQWM7YUFDQyxHQUFzQjFCLEdBQVNDOzs7TUFXdENnb0IsVUFBVVMsR0FBUzd3QjtRQUNqQm5ELEtBQUttekIsWUFBWWEsR0FBUzd3Qjs7TUFTNUIrd0IsWUFBWXZGLEdBQVd3RjtRQUdyQixPQUZBbjBCLEtBQUtvekIsbUJBQW1CekUsSUFFakI1dUIsTUFBTW0wQixZQUFZdkYsR0FBV3dGOztNQUd0Q255QixHQUFHMnNCLEdBQVd3RjtRQUdaLE9BRkFuMEIsS0FBS296QixtQkFBbUJ6RSxJQUVqQjV1QixNQUFNaUMsR0FBRzJzQixHQUFXd0Y7O01BRzdCQyxLQUFLekYsR0FBV3dGO1FBR2QsT0FGQW4wQixLQUFLb3pCLG1CQUFtQnpFLElBRWpCNXVCLE1BQU1xMEIsS0FBS3pGLEdBQVd3Rjs7TUFHL0JFLGdCQUFnQjFGLEdBQVd3RjtRQUd6QixPQUZBbjBCLEtBQUtvekIsbUJBQW1CekUsSUFFakI1dUIsTUFBTXMwQixnQkFBZ0IxRixHQUFXd0Y7O01BRzFDRyxvQkFBb0IzRixHQUFXd0Y7UUFHN0IsT0FGQW4wQixLQUFLb3pCLG1CQUFtQnpFLElBRWpCNXVCLE1BQU11MEIsb0JBQW9CM0YsR0FBV3dGOztNQVc5Q3RzQjtRQUNFO1VBQ0UsT0FBTSxVQUNKMHNCLEdBQVEsU0FDUnZFLEdBQU8sWUFDUHdFLEdBQVUsZ0JBQ1Y3QixXQUNRM3lCLEtBQUtzekIsUUFBUTtZQUNyQnBuQixRQUFROztVQUdWbE0sS0FBSzRCLEtBQUssV0FBVztZQUNuQm91QjtjQUdGaHdCLEtBQUs2eUIsb0JBQW9CO1lBQ3ZCN0M7WUFDQTJDO2NBR0YzeUIsS0FBSzh5QiwwQkFBMEI7WUFDN0J5QjtZQUNBQztjQUdGeDBCLEtBQUs0eUIsdUJBQXVCMkI7VUFDNUIsT0FBT2xyQjtVQUNQLEdBQUlBLE1BQU0sa0VBQWtFQTtVQUM1RTtVQUNBLEdBQUl5QixLQUFLLHNCQUNUOUssS0FBS3dCLE9BQU9pekIsZUFBYyxHQUMxQnowQixLQUFLNEIsS0FBSzs7O01BYWR1eEIsWUFBWWEsR0FBUzd3QjtRQUNuQixJQUFJdXhCLElBQWFudUIsVUFBVXJCLFNBQVMsVUFBc0JwQixNQUFqQnlDLFVBQVUsTUFBbUJBLFVBQVU7UUFDaEYsSUFBSTdCLElBQUt2QjtRQUNULE1BQU13eEIsSUFBV1g7UUFFakIsS0FBS3hrQixNQUFNNkMsUUFBUXNpQixJQUtqQixJQUpLQSxFQUFTNW5CLFlBQ1o0bkIsRUFBUzVuQixVQUFVLFFBR0csbUJBQXBCNG5CLEVBQVN6b0IsVUFBaUQsMEJBQXBCeW9CLEVBQVN6b0IsUUFFakR4SCxJQUFLLENBQUNuQixHQUFLbU47VUFDVDFRLEtBQUs0eUIsdUJBQXVCbGlCLEVBQUk1TixVQUFVLElBQXdCLG1CQUFwQjZ4QixFQUFTem9CLFFBQTJCd29CLElBRWxGdnhCLEVBQVNJLEdBQUttTjtnQkFFWCxJQUF3Qiw4QkFBcEJpa0IsRUFBU3pvQixRQUdsQixZQUZBbE0sS0FBSyt6QixXQUFXM2hCLE9BQU80aEIsR0FBU3R2QjtRQU1wQzFFLEtBQUs0MEIsaUJBQWlCRCxHQUFVandCOztNQUdsQzJ0QixLQUFLd0MsR0FBaUJDO1FBTXBCLE9BTEs5MEIsS0FBS2kwQixjQUFjNUIsU0FDdEIsR0FBSWhlLEtBQUs0YSxHQUFTZ0IsU0FBU0Usa0JBQzNCbndCLEtBQUtpMEIsY0FBYzVCLFFBQU8sSUFHRyxtQkFBcEJ3QyxLQUFrQ0MsTUFBa0J0bEIsTUFBTTZDLFFBQVF5aUIsS0FhekVELEtBQThDLG1CQUFwQkEsS0FBMEQscUJBQW5CQyxJQUM1RDkwQixLQUFLbXpCLFlBQVkwQixHQUFpQkMsS0FHcEM5MEIsS0FBS2t6QixVQUFVMkIsS0FoQmIsSUFBSXhwQixTQUFRLENBQUNDLEdBQVNDO1VBQzNCO1lBQ0V2TCxLQUFLbXpCLFlBQVk7Y0FDZmpuQixRQUFRMm9CO2NBQ1I3bkIsUUFBUThuQjtlQUNQLEdBQXNCeHBCLEdBQVNDLElBQVE7WUFDMUMsT0FBT2xDO1lBQ1BrQyxFQUFPbEM7Ozs7TUFpQmY2cEIsVUFBVWM7UUFDUixJQUFJbHhCO1FBRUosUUFBUWt4QixFQUFROW5CO1NBQ2QsS0FBSztVQUNIcEosSUFBUzlDLEtBQUsweUIsa0JBQWtCLEVBQUMxeUIsS0FBSzB5QixvQkFBbUI7VUFDekQ7O1NBRUYsS0FBSztVQUNINXZCLElBQVM5QyxLQUFLMHlCLG1CQUFtQjtVQUNqQzs7U0FFRixLQUFLO1VBQ0gxeUIsS0FBS216QixZQUFZYSxHQUFTckMsS0FFMUI3dUIsS0FBUztVQUNUOztTQUVGLEtBQUs7VUFDSEEsSUFBUzlDLEtBQUsyeUIsa0JBQWtCO1VBQ2hDOztTQUVGO1VBQ0UsTUFBTSxJQUFJaG5CLE1BQU1zakIsR0FBU3ZXLE9BQU8yVyxnQkFBZ0IyRSxFQUFROW5COztRQUc1RCxPQUFPO1VBQ0xWLElBQUl3b0IsRUFBUXhvQjtVQUNadUIsU0FBU2luQixFQUFRam5CO1VBQ2pCaks7OztNQVlKaXdCLGVBQWUvQztRQUNSaHdCLEtBQUt3QixPQUFPbXlCLGdCQUNmM3pCLEtBQUt3QixPQUFPbXlCLGVBQWMsR0FDMUIzekIsS0FBSzRCLEtBQUssV0FBVztVQUNuQm91QjtZQUVGLEdBQUlsTCxNQUFNbUssR0FBU25rQixLQUFLaWxCLFVBQVVDOztNQWdCdENnRCxrQkFBa0IrQixHQUFlQztRQUMvQixJQUFJaDFCLEtBQUt3QixPQUFPbXlCLGdCQUFnQjN6QixLQUFLd0IsT0FBT3l6Qiw4QkFBOEJGLEdBQWU7VUFFdkYsSUFBSTFyQjtVQURKckosS0FBS3dCLE9BQU9teUIsZUFBYyxHQUd0Qm9CLEtBQ0YxckIsSUFBUSxJQUFJLEVBQUE2ckIsaUJBQWlCLE1BQzdCRixLQUFnQi9GLEdBQVN2VyxPQUFPd1csaUJBQ2hDLEdBQUlwSyxNQUFNemIsT0FFVkEsSUFBUSxJQUFJLEVBQUE2ckIsaUJBQWlCLE1BQzdCRixLQUFnQi9GLEdBQVN2VyxPQUFPeVc7VUFDaEMsR0FBSTlsQixNQUFNQSxJQUNWckosS0FBS2d3QixVQUFVLE1BQ2Zod0IsS0FBS3dCLE9BQU8reUIsV0FBVyxNQUN2QnYwQixLQUFLMHlCLGtCQUFrQixNQUN2QjF5QixLQUFLd0IsT0FBT2d6QixjQUFhO1VBQ3pCeDBCLEtBQUt3QixPQUFPeXpCLDZCQUE0QixJQUcxQ2oxQixLQUFLNEIsS0FBSyxjQUFjeUg7OztNQVU1QjRwQix3QkFBd0JrQyxHQUFZOXJCO1FBQ2xDbW5CLEdBQTJCMkUsR0FBWTlyQixHQUFPckosT0FFOUNBLEtBQUtnekIsbUJBQWtCLEdBQU8zcEIsSUFBUUEsRUFBTXNGLGVBQVU3Szs7TUFPeEQ4dUIsdUJBQXVCMkI7UUFDckIsSUFBSWEsSUFBZ0I3dUIsVUFBVXJCLFNBQVMsVUFBc0JwQixNQUFqQnlDLFVBQVUsTUFBbUJBLFVBQVU7UUFDbkYsSUFBSW11QixJQUFhbnVCLFVBQVVyQixTQUFTLFVBQXNCcEIsTUFBakJ5QyxVQUFVLE1BQW1CQSxVQUFVO1FBRWhGLElBQUk4dUIsSUFBZ0JkO1FBRWYva0IsTUFBTTZDLFFBQVFnakIsT0FDakIsR0FBSWhzQixNQUFNLDRFQUE0RWdzQixJQUN0RkEsSUFBZ0I7UUFHbEIsS0FBSyxNQUFNQyxLQUFXZixHQUNwQixJQUF1QixtQkFBWmUsR0FBc0I7VUFDL0IsR0FBSWpzQixNQUFNLGtFQUFrRWtyQixJQUM1RWMsSUFBZ0I7VUFDaEI7O1FBS0MsS0FBT3IxQixLQUFLd0IsT0FBTyt5QixVQUFVYyxPQUc1QkQsS0FBaUI1bEIsTUFBTTZDLFFBQVFyUyxLQUFLd0IsT0FBTyt5QixhQUFhdjBCLEtBQUt3QixPQUFPK3lCLFNBQVNydkIsU0FBUyxNQUFNd3ZCLEtBQzlGLEdBQUlyckIsTUFBTSxtRkFBbUZnc0I7UUFHL0ZyMUIsS0FBS3dCLE9BQU8reUIsV0FBV2MsR0FDdkJyMUIsS0FBSzRCLEtBQUssbUJBQW1CeXpCLEtBSTNCcjFCLEtBQUsweUIsb0JBQW9CMkMsRUFBYyxPQUN6Q3IxQixLQUFLMHlCLGtCQUFrQjJDLEVBQWMsTUFBTTs7TUFjL0N4QztRQUNFLEtBQUksU0FDRjdDLEdBQU8sZ0JBQ1AyQyxLQUNFcHNCLFVBQVVyQixTQUFTLFVBQXNCcEIsTUFBakJ5QyxVQUFVLEtBQW1CQSxVQUFVLEtBQUs7UUFFbkV5cEIsS0FBWTJDLElBUU0sY0FBbkJBLElBQ0YzeUIsS0FBS2d6QixtQkFBa0IsTUFFdkJoekIsS0FBSyt5QixlQUFlL0MsSUFFaEJBLE1BQVlod0IsS0FBS2d3QixZQUNuQmh3QixLQUFLZ3dCLFVBQVVBO1FBRVhod0IsS0FBS3dCLE9BQU9pekIsZUFDZHowQixLQUFLNEIsS0FBSyxnQkFBZ0I1QixLQUFLZ3dCLGFBaEJuQyxHQUFJM21CLE1BQU0sMEVBQTBFO1VBQ2xGMm1CO1VBQ0EyQzs7O01BK0JORztRQUNFLEtBQUksVUFDRnlCLEdBQVEsWUFDUkMsS0FDRWp1QixVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLO1FBRTlDLG9CQUFmaXVCLElBT1BBLE1BQWV4MEIsS0FBS3dCLE9BQU9nekIsZUFDN0J4MEIsS0FBS3dCLE9BQU9nekIsYUFBYUEsR0FFekJ4MEIsS0FBSzR5Qix1QkFBdUIyQixLQUFZLE9BVHhDLEdBQUlsckIsTUFBTSw0RUFBNEU7VUFDcEZtckI7OztNQWdCTnBCLG1CQUFtQnpFO1NBQzRCLE1BQXpDM3VCLEtBQUtpMEIsY0FBYzVrQixPQUFPc2YsT0FDNUIsR0FBSXRhLEtBQUs0YSxHQUFTZ0IsU0FBUzVnQixPQUFPc2YsS0FDbEMzdUIsS0FBS2kwQixjQUFjNWtCLE9BQU9zZixNQUFhOzs7SUFNN0MsRUFBZ0JxRCxJQUFxQixpQkFBaUI7TUFDcER1QyxVQUFVO01BQ1ZaLGNBQWE7TUFDYmEsYUFBWTtNQUNaQyxjQUFhO01BQ2JRLDRCQUEyQjtNQUMzQk0sdUJBQXNCOztJQVV4QixNQUFNQyxLQUFTLENBQUMzeUIsR0FBUzBKO01BQ3ZCLE1BQU1rcEIsSUFBaUI7TUFJdkIsT0FIQTV5QixFQUFRNnlCLFdBQVd2MUIsU0FBUXcxQjtRQUN6QkYsRUFBZUUsS0FBYSxLQUFXQSxHQUFXaFksT0FBT3BSLEdBQU0sUUFBUXFSLE9BQU87V0FFekU2WDs7SUFXVCxNQUFNRyxLQUFPLENBQUMveUIsR0FBUzBKO01BRXJCLE1BQU1zcEIsSUF6QlNoekIsT0FBVztRQUMxQjZ5QixZQUFZN3lCLEVBQVE2eUIsY0FBYyxFQUFDO1FBQ25DSSxXQUFXanpCLEVBQVFpekIsYUFBYTtRQUNoQ0MsTUFBTWx6QixFQUFRa3pCLFNBQVE7U0FzQkRDLENBQVNuekI7TUFDOUIsTUFBTW96QixJQUFNO1FBQ1ZULFFBQVFBLEdBQU9LLEdBQWN0cEI7UUFDN0J5a0IsZ0JBQVdsdEI7O01BR2IsT0FEQW15QixFQUFJakYsWUFkWSxFQUFDbnVCLEdBQVNvekI7UUFDMUIsSUFBSUMsSUFBUztRQUdiLE9BREFBLEtBQVU1MkIsT0FBT1ksS0FBSysxQixFQUFJVCxRQUFReDBCLEtBQUkyMEIsS0FBYSxHQUFHNXVCLE9BQU80dUIsR0FBVyxLQUFLNXVCLE9BQU9rdkIsRUFBSVQsT0FBT0csTUFBYXZiLEtBQUt2WCxFQUFRaXpCLFlBQ2xISTtRQVVTbEYsQ0FBVTZFLEdBQWNJLElBQ2pDSixFQUFhRSxPQUFPRSxJQUFNQSxFQUFJakY7O0lBR3ZDLE1BQU1tRixXQUFxQixFQUFBaG5CO01BQ3pCdFAsWUFBWWlJO1FBQ1YsS0FBSSxLQUNGdEIsR0FBRyxRQUNIMUIsR0FBTSxVQUNOc3hCLEtBQ0V0dUI7UUFDSi9ILFNBRUEsRUFBZ0JDLE1BQU0sWUFBTyxJQUU3QixFQUFnQkEsTUFBTSxlQUFVLElBRWhDLEVBQWdCQSxNQUFNLGlCQUFZLElBRWxDLEVBQWdCQSxNQUFNLGVBQVUsSUFFaEMsRUFBZ0JBLE1BQU0sb0JBQWU7UUFFckMsRUFBZ0JBLE1BQU0sc0JBQWlCLElBRXZDQSxLQUFLd0csTUFBTUEsR0FDWHhHLEtBQUs4RSxTQUFTQSxLQUFVLFVBQ3hCOUUsS0FBS28yQixXQUFXQSxLQTF0QnBCO1VBRUUsTUFBTUMsU0FBdUN2eUIsTUFBdEJ1SixPQUFPaXBCLGFBQTJCanBCLE9BQU9pcEIsYUFBYWpwQixPQUFPa3BCO1VBQ3BGLE1BQU1DLFNBQXFDMXlCLE1BQXJCdUosT0FBT29wQixZQUEwQnBwQixPQUFPb3BCLFlBQVlwcEIsT0FBT3FwQjtVQUdqRixNQUFNQyxJQUFRdHBCLE9BQU91cEIsYUFBYXZwQixPQUFPdXBCLGFBQWE1SSxTQUFTNkksZ0JBQWdCQyxjQUFjOUksU0FBUzZJLGdCQUFnQkMsY0FBY3pwQixPQUFPMHBCLE9BQU9KO1VBQ2xKLE1BQU1LLElBQVMzcEIsT0FBTzRwQixjQUFjNXBCLE9BQU80cEIsY0FBY2pKLFNBQVM2SSxnQkFBZ0JLLGVBQWVsSixTQUFTNkksZ0JBQWdCSyxlQUFlN3BCLE9BQU8wcEIsT0FBT0M7VUFHdkosTUFBTUcsSUFBT2xhLEtBQUttYSxLQUFLVCxJQU5iLFFBTTBCLElBRmpCLElBRWtDTjtVQUNyRCxNQUFNZ0IsSUFBTXBhLEtBQUttYSxLQUFLSixJQU5aLE9BTTBCLElBSGpCLElBR2tDUjtVQUVyRCxPQURpQiw2REFBNkR6dkIsT0FBT3V3QixLQUFnQixXQUFXdndCLE9BQU93d0IsTUFBZ0IsU0FBU3h3QixPQUFPc3dCLEdBQUssVUFBVXR3QixPQUFPb3dCO1NBOHNCL0lLLElBQzVCeDNCLEtBQUtxTixjQUFTdkosR0FDZDlELEtBQUt5M0IsbUJBQWMzekIsR0FDbkI5RCxLQUFLMDNCLGlCQUFnQixHQUVyQjEzQixLQUFLMjNCOztNQUdQQTtRQUNFMzNCLEtBQUt5M0IsY0FBYy91QixPQUFPa3ZCLGFBQVk7VUFDaEM1M0IsS0FBS3FOLFVBQVVyTixLQUFLcU4sT0FBT3dxQixXQUM3QkMsY0FBYzkzQixLQUFLeTNCLGNBRWR6M0IsS0FBSzAzQixpQkFDUjEzQixLQUFLNEIsS0FBSyxVQUdaNUIsS0FBSzAzQixpQkFBZ0I7VUFDckIxM0IsS0FBS3FOLGNBQVN2SixTQUdJQSxNQUFoQjlELEtBQUtxTixVQUFzQnlxQixjQUFjOTNCLEtBQUt5M0I7WUFDakQ7O01BR0xNO1FBQ0UsSUFBSUM7UUFJSixPQUZBaDRCLEtBQUtxTixTQUFTQSxPQUFPMHFCLEtBQUsvM0IsS0FBS3dHLElBQUlJLE1BQU01RyxLQUFLOEUsUUFBUTlFLEtBQUtvMkIsV0FDdEIsVUFBaEM0QixJQUFlaDRCLEtBQUtxTixnQkFBcUMsTUFBakIycUIsS0FBMkJBLEVBQWFDLFNBQU9qNEIsS0FBS3FOLE9BQU80cUI7UUFDakc1c0IsUUFBUUM7O01BR2pCOGtCO1FBQ0Vwd0IsS0FBSzAzQixpQkFBZ0IsR0FDakIxM0IsS0FBS3FOLFVBQVFyTixLQUFLcU4sT0FBTytpQjs7TUFHL0I4SCxTQUFTQztRQUNIQSxJQUNGOXFCLE9BQU8rcUIsU0FBU2h2QixRQUFRcEosS0FBS3dHLElBQUlJLFFBRWpDeUcsT0FBTytxQixTQUFTeHhCLE9BQU81RyxLQUFLd0csSUFBSUk7OztJQVl0QyxTQUFTeXhCLEdBQVU3eEI7TUFDakIsT0FBTyxJQUFJNkUsU0FBUSxDQUFDQyxHQUFTQztRQUMzQjtVQUNFLE1BQU0rc0IsSUFBTXRLLFNBQVNJLGNBQWM7VUFFbkNrSyxFQUFJQyxTQUFTLE1BQU1qdEIsR0FBUSxJQUUzQmd0QixFQUFJRSxVQUFVLE1BQU1sdEIsR0FBUSxJQUU1Qmd0QixFQUFJRyxNQUFNanlCO1VBQ1YsT0FBT21RO1VBQ1BwTCxFQUFPb0w7Ozs7SUFTYixNQUFNK2hCLEtBQWNyckI7TUFDbEIsT0FBTSxVQUNKMmdCLEtBQ0UzZ0I7TUFDSixNQUFNc3JCLElBQVczSyxFQUFTNEssY0FBYztNQUV4QyxJQUFJRCxHQUNGLE9BQU9BLEVBQVNuSztNQUdsQixNQUFNcUssSUFBWTdLLEVBQVM0SyxjQUFjO01BRXpDLE9BQUlDLElBQ0tBLEVBQVVySyxVQUdmUixFQUFTOEssU0FBUzlLLEVBQVM4SyxNQUFNNXpCLFNBQVMsSUFDckM4b0IsRUFBUzhLLFFBR1h6ckIsRUFBTytxQixTQUFTVzs7SUFPekJseEIsZUFBZW14QixHQUFZM3JCO01BQ3pCLE9BQU0sVUFDSjJnQixLQUNFM2dCO01BRUosSUFBSTRyQixJQUFPakwsRUFBUzRLLGNBQWM7TUFFbEMsT0FBSUssV0FBZVosR0FBVVksRUFBS3J5QixRQUN6QnF5QixFQUFLcnlCLFFBSWRxeUIsSUFBT3pwQixNQUFNbUksS0FBS3FXLEVBQVNrTCxpQkFBaUIsNEJBQTRCQyxNQUFLQyxLQUFTM2lCLFFBQVEyaUIsRUFBTXh5QjtNQUVoR3F5QixXQUFlWixHQUFVWSxFQUFLcnlCLFFBQ3pCcXlCLEVBQUtyeUIsT0FHUDs7SUFpQlRpQixlQUFldW5CLEdBQWlCaUs7TUFDOUI7UUFDRSxNQUFNQyxVQVhjenhCLGNBQVk7VUFDbEM3QixNQUFNMHlCLEdBQVlyckI7VUFDbEI0ckIsWUFBWUQsR0FBWTNyQjtXQVNPa3NCO1FBRTdCRixFQUFPam5CLE9BQU87VUFDWnJGLFNBQVM7VUFDVHZCLElBQUlxbEI7VUFDSjNrQixRQUFRO1VBQ1JjLFFBQVFzc0I7V0FDUDNIO1FBQ0gsT0FBT3RvQjtRQUNQLEdBQUlBLE1BQU07VUFDUnNGLFNBQVNzZ0IsR0FBU3ZXLE9BQU8wVztVQUN6Qm9LLGVBQWVud0I7Ozs7SUFLckIsTUFBTW93QixLQUFZLEVBQUMsUUFBUSxXQUFXO0lBRXRDLFNBQVMsR0FBUWx3QixHQUFRQztNQUFrQixJQUFJdEosSUFBT1osT0FBT1ksS0FBS3FKO01BQVMsSUFBSWpLLE9BQU84Rix1QkFBdUI7UUFBRSxJQUFJcUUsSUFBVW5LLE9BQU84RixzQkFBc0JtRTtRQUFTQyxNQUFtQkMsSUFBVUEsRUFBUUMsUUFBTyxTQUFVQztVQUFPLE9BQU9ySyxPQUFPc0sseUJBQXlCTCxHQUFRSSxHQUFLNUY7Y0FBaUI3RCxFQUFLd0MsS0FBS21ILE1BQU0zSixHQUFNdUo7O01BQVksT0FBT3ZKOztJQUU5VSxTQUFTLEdBQWM0RTtNQUFVLEtBQUssSUFBSUcsSUFBSSxHQUFHQSxJQUFJc0IsVUFBVXJCLFFBQVFELEtBQUs7UUFBRSxJQUFJTCxJQUFTLFFBQVEyQixVQUFVdEIsS0FBS3NCLFVBQVV0QixLQUFLO1FBQUlBLElBQUksSUFBSSxHQUFRM0YsT0FBT3NGLEtBQVMsR0FBSXpFLFNBQVEsU0FBVTZFO1VBQU8sRUFBZ0JGLEdBQVFFLEdBQUtKLEVBQU9JO2NBQVkxRixPQUFPeUssNEJBQTRCekssT0FBTzBLLGlCQUFpQmxGLEdBQVF4RixPQUFPeUssMEJBQTBCbkYsTUFBVyxHQUFRdEYsT0FBT3NGLElBQVN6RSxTQUFRLFNBQVU2RTtVQUFPMUYsT0FBT0MsZUFBZXVGLEdBQVFFLEdBQUsxRixPQUFPc0sseUJBQXlCaEYsR0FBUUk7OztNQUFhLE9BQU9GOztJQUNqZixNQUFNNDBCLEtBQW1CO01BQ3ZCLENBQUMvTyxNQUF3QjtNQUN6QixDQUFDQSxNQUEwQjtNQUMzQixDQUFDQSxNQUF3QjtNQUN6QixDQUFDQSxNQUF3QjtNQUN6QixDQUFDQSxNQUF5Qjs7SUFFNUIsTUFBTWdQLEtBQWtCO0lBRXhCLE1BQU1DLEtBQWlCLEVBQUMsdUJBQXVCLHFCQUFxQix3QkFBd0Isd0JBQXdCLGlCQUFpQiw4QkFBOEI7SUFDbkssTUFBTUMsS0F0NUJOLFNBQTBCNXpCO01BQ3hCLElBQUk2ekI7TUFFSjtRQUNFQSxJQUFVenNCLE9BQU9wSDtRQUNqQixNQUFNd0MsSUFBSTtRQUdWLE9BRkFxeEIsRUFBUUMsUUFBUXR4QixHQUFHQSxJQUNuQnF4QixFQUFRRSxXQUFXdnhCLEtBQ1o7UUFDUCxPQUFPa087UUFDUCxPQUFPQSxNQUNJLE9BQVhBLEVBQUV6RyxRQUNTLFNBQVh5RyxFQUFFekcsUUFFUyx5QkFBWHlHLEVBQUUzUSxRQUNTLGlDQUFYMlEsRUFBRTNRLFNBQ0Y4ekIsS0FBOEIsTUFBbkJBLEVBQVE1MEI7O0tBczRCUyswQixDQUFpQjtLQUVqRDtNQUNFO1FBQ0UsSUFBd0Isc0JBQWJqTSxVQUEwQjtRQUNyQyxNQUFNa00sSUFBa0JsTSxTQUFTSSxjQUFjO1FBQy9DLE9BQU0sVUFDSjZDLFdBQ1FILEdBQVksY0FBYztVQUNsQ3FKLFFBQU87VUFDUHpjLE1BQU1pYztVQUNOeEksU0FBUzs7UUFFWCtJLEVBQWdCdHpCLE9BQU8sR0FBR0csT0FBT2txQixHQUFVLFdBQzNDaUosRUFBZ0JFLGNBQWMsYUFDOUJGLEVBQWdCajBCLE9BQU8sYUFDdkJpMEIsRUFBZ0JHLE1BQU0sWUFFbEJILEVBQWdCSSxXQUFXSixFQUFnQkksUUFBUUMsWUFDakRMLEVBQWdCSSxRQUFRQyxTQUFTLGVBQ25Ddk0sU0FBU3dNLEtBQUtDLFlBQVlQO1FBRzlCLE9BQU83d0I7UUFDUCxHQUFJZ0wsS0FBS2hMOztLQXRCYjtJQTBCQSxNQUFNd1U7TUFDSmhlO1FBQ0UsS0FBSSxnQkFDRjY2QixJQUFpQi9PLEdBQWdCQyxhQUFXLGFBQzVDK08sSUFBYyxPQUFLLFFBQ25CdndCLElBQVMsbUJBQ1A3RCxVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLO1FBRXhFLEVBQWdCdkcsTUFBTSxrQkFBa0IyckIsR0FBZ0JDLGNBRXhELEVBQWdCNXJCLE1BQU0saUJBQVksSUFFbEMsRUFBZ0JBLE1BQU0sb0JBQWUsSUFFckMsRUFBZ0JBLE1BQU0sa0JBQWE7UUFFbkMsRUFBZ0JBLE1BQU0sbUJBQWMsSUFFcEMsRUFBZ0JBLE1BQU0sc0JBQWlCLElBRXZDLEVBQWdCQSxNQUFNLDhCQUF5QixJQUUvQyxFQUFnQkEsTUFBTSxtQkFBYztRQUVwQyxFQUFnQkEsTUFBTSwwQkFBcUIsSUFFM0MsRUFBZ0JBLE1BQU0sZ0JBQVcsSUFFakMsRUFBZ0JBLE1BQU0sZUFBVSxJQUVoQyxFQUFnQkEsTUFBTSxvQkFBZTtRQUVyQyxFQUFnQkEsTUFBTSxvQkFBZSxJQUVyQyxFQUFnQkEsTUFBTSw0QkFBdUIsSUFFN0MsRUFBZ0JBLE1BQU0sMkJBQXNCLElBRTVDLEVBQWdCQSxNQUFNLG1CQUFjO1FBRXBDLEVBQWdCQSxNQUFNLDBCQUFxQixJQUUzQyxFQUFnQkEsTUFBTSx3QkFBbUIsSUFFekMsRUFBZ0JBLE1BQU0sMEJBQXFCLElBRTNDLEVBQWdCQSxNQUFNLGlCQUFZO1FBRWxDLEVBQWdCQSxNQUFNLGlCQUFZLElBRWxDLEVBQWdCQSxNQUFNLHlCQUFvQixJQUUxQyxFQUFnQkEsTUFBTSx3QkFBbUIsSUFFekMsRUFBZ0JBLE1BQU0sdUJBQWtCO1FBRXhDLEVBQWdCQSxNQUFNLG9CQUFvQjRzQixHQUFjRSxtQkFFeEQsRUFBZ0I5c0IsTUFBTSxhQUFhLEtBRW5DLEVBQWdCQSxNQUFNLHlCQUFvQixJQUUxQ0EsS0FBSzA2QixpQkFBaUJBO1FBQ3RCMTZCLEtBQUtpeEIsV0FBVyxJQUNoQmp4QixLQUFLNDZCLGNBQWEsR0FFbEI1NkIsS0FBSzY2QixpQkFBZ0IsR0FFckI3NkIsS0FBSzg2Qix5QkFBd0IsR0FDN0I5NkIsS0FBSys2QixvQkFBb0I7UUFDekIvNkIsS0FBS2c3QixrQkFBa0IsSUFDdkJoN0IsS0FBS2k3QixvQkFBb0IsSUFBSTcwQixHQUM3QnBHLEtBQUtrN0IsVUFBVSxJQUFJLEdBQVE7VUFDekJqZCxjQUFjO1VBQ2RFLFdBQVc7WUFFYm5lLEtBQUtvSyxTQUFTQSxHQUNkLGFBQWtCQSxJQUNsQkksRUFBVUosSUFDVnBLLEtBQUsyNkIsY0FBY0EsR0FDbkIzNkIsS0FBS203QixjQUFjUixJQUFjLEtBQ2pDMzZCLEtBQUtvN0Isc0JBQXFCO1FBQzFCcDdCLEtBQUtxN0IsaUJBQWlCOztNQUd4Qnh6QjtRQUNFLEtBQUksVUFDRmtwQixJQUFXM0YsR0FBZ0JDLFlBQVUsZUFDckNpUSxLQUFnQixHQUFLLGtCQUVyQkMsSUFBbUI3QixJQUFnQixTQUNuQ3J6QixJQUFVO1VBQ1JtMUIsTUFBTTtVQUNOeEwsU0FBUztVQUNUeUwsYUFBYTtVQUNiQyxlQUFlO1VBQ2ZDLFFBQVE7VUFDUkMsWUFBWTtXQUNiLGFBQ0RDLElBQWMsSUFBRSxpQkFDaEJDLEtBQWtCLEdBQUksV0FDdEI5SyxJQUFZO1VBQ1ZtSixRQUFPO1VBQ1B6YyxNQUFNaWM7VUFDTnhJLFNBQVM7V0FDVixZQUNENEssR0FBVSxVQUNWQyxLQUFXLEdBQUssaUJBQ2hCQyxLQUFrQixHQUFLLGtCQUN2QkMsS0FBbUIsS0FDakIzMUIsVUFBVXJCLFNBQVMsVUFBc0JwQixNQUFqQnlDLFVBQVUsS0FBbUJBLFVBQVUsS0FBSztRQUN4RSxJQUFJdkcsS0FBSzY2QixlQUFlLE1BQU0sSUFBSWx2QixNQUFNO1FBQ3hDLE9BQU0sVUFDSnNsQixHQUFRLFVBQ1JDLFdBQ1FKLEdBQVlDLEdBQVVDO1FBQ2hDLEdBQUlsbUIsS0FBS21tQixHQUFVLGVBQ25CanhCLEtBQUtpeEIsV0FBV0EsR0FDaEJqeEIsS0FBSys3QixhQUFhQSxHQUNsQi83QixLQUFLazhCLG1CQUFtQkEsR0FDeEIsR0FBSUMsZ0JBQWdCakwsSUFDaEJvSyxJQUFlLEdBQUk1USxjQUFpQixHQUFJclM7UUFDNUNyWSxLQUFLODZCLHdCQUF3QmdCO1FBQzdCLElBQUlULElBQWlCO1FBRXJCLElBQUl4QixNQUEyQm9DLEdBQWlCO1VBQzlDLE1BQU1HLElBQWtCLEdBQUdyMUIsT0FBTzZsQixHQUFja0IsdUJBQXVCL21CLE9BQU9zRyxPQUFPK3FCLFNBQVNXO1VBQzlGLE1BQU1zRCxJQUFZaHZCLE9BQU9pdkIsYUFBYUMsUUFBUUg7VUFDOUMsSUFBSUMsR0FBV2hCLElBQWlCZ0IsUUFBZTtZQUM3QyxNQUFNRyxJQUFlLGFBQWF6MUIsT0FBTzhwQjtZQUN6Q3hqQixPQUFPaXZCLGFBQWF2QyxRQUFRcUMsR0FBaUJJLElBQzdDbkIsSUFBaUJtQjs7O1FBSXJCeDhCLEtBQUtxN0IsaUJBQWlCQTtRQUN0QixNQUFNb0IsSUFBaUIsSUFBSTkxQixJQUFJc3FCO1FBQzNCd0wsRUFBZUMsU0FBU0MsU0FBUyxPQUFNRixFQUFlQyxZQUFZLFVBQWFELEVBQWVDLFlBQVksVUFFMUdyQixNQUNGb0IsRUFBZS9lLE9BQU8sbUJBQW1CM1csT0FBT3MwQjtRQUlsRHI3QixLQUFLNDhCLGNBQWMzTyxHQUFjLHNEQUFzRGxuQixPQUFPbTFCLElBQW1CLFdBQVcsSUFBSSxtREFBbURuMUIsT0FBTzAxQixFQUFlNzFCLE1BQU0sdUpBQXVKRyxPQUFPL0csS0FBSzI2QixhQUFhO1FBQy9YMzZCLEtBQUs2OEIsc0JBQXNCNU8sR0FBYyx5Q0FDekNqdUIsS0FBSzY4QixvQkFBb0JDLE1BQU1DLFVBQVU7UUFDekMvOEIsS0FBSzY4QixvQkFBb0JDLE1BQU1FLFlBQVksV0FBV2g5QixLQUFLbTdCLFlBQVkvcUI7UUFDdkUsTUFBTTZzQixJQUFPNXZCLE9BQU8yZ0IsU0FBU0ksY0FBYztRQUMzQzZPLEVBQUtDLGFBQWEsT0FBTyxlQUN6QkQsRUFBS0MsYUFBYSxRQUFRLGFBQzFCRCxFQUFLQyxhQUFhLFFBQVEsR0FBR24yQixPQUFPa3FCLEdBQVU7UUFDOUNqeEIsS0FBS205QixZQUFZRjtRQUNqQixPQUFNLGlCQUNKRyxJQUFrQi9MLE1BQWlCLG9CQUNuQ2dNLElBQXFCLE1BQ25CcjlCLEtBQUsrN0IsY0FBYztRQUV2QixNQUFNdUIsSUFEcUIsSUFBVTFRLEdBQWNJLGNBQWNxUSxHQUNqQkQsTUFBb0J4USxHQUFjSSxhQUFhcUU7UUFDL0ZyeEIsS0FBS3U5QixvQkFBb0JELEVBQXFCcFE7UUFFOUMsTUFBTXNRLElBQWMzMUIsbUJBQ1pnbkIsTUFDQyxJQUFJeGpCLFNBQVEsQ0FBQ0MsR0FBU0M7VUFDM0J2TCxLQUFLNDhCLFlBQVlyRSxTQUFTMXdCO1lBRXhCN0gsS0FBS3k5QjtZQUVMLE1BQU1DLElBQWExOUIsS0FBSzI5QixpQkFBaUJDLFVBQVU7WUFDbkRGLEVBQVcxN0IsR0FBRyxTQUFRaUI7Y0FDcEIsT0FBTSxNQUNKK0MsR0FBSSxNQUNKdUcsR0FBSSxPQUNKbEQsS0FDRXBHO2NBRVMsb0JBQVQrQyxLQUE0QnVHLEVBQUtzeEIsV0FFbkM3OUIsS0FBSzY2QixpQkFBZ0IsR0FFckI3NkIsS0FBSzg5QixlQUFlOTlCLEtBQUtvN0IscUJBRXpCOXZCLE9BQVF4SCxNQUNDdUYsS0FDVGtDLEVBQU8sSUFBSUksTUFBTXRDO2lCQUdyQnEwQixFQUFXMzZCLE1BQU07Y0FDZmlELE1BQU07Y0FDTnVHLE1BQU07Z0JBQ0pndkI7Z0JBQ0FNO2dCQUNBRSxZQUFZLzdCLEtBQUsrN0I7Z0JBQ2pCckIsZ0JBQWdCMTZCLEtBQUswNkI7Z0JBQ3JCSSx1QkFBdUI5NkIsS0FBSzg2QjtnQkFDNUIxd0IsUUFBUXBLLEtBQUtvSztnQkFDYjR4QjtnQkFDQTMxQjs7O2FBS05nSCxPQUFPMmdCLFNBQVN3TSxLQUFLQyxZQUFZejZCLEtBQUttOUIsWUFDdEM5dkIsT0FBTzJnQixTQUFTdmhCLEtBQUtndUIsWUFBWXo2QixLQUFLNDhCLGNBQ3RDdnZCLE9BQU8yZ0IsU0FBU3ZoQixLQUFLZ3VCLFlBQVl6NkIsS0FBSzY4Qjs7UUFJMUMsSUFBaUIsaUJBQWI5TCxLQUE2QkMsRUFBVW1KLE9BQU87VUFFaEQsTUFBTTRELElBQVcsR0FBR2gzQixPQUFPa3FCLEdBQVU7VUFDckMsTUFBTTVYLFVBQWFsTixNQUFNNHhCLEdBQVU7WUFDakNDLE9BQU87O1VBR1QsSUFyUDZCLG1CQXFQekIza0IsRUFBSzFPLFFBQVEzRyxJQUFJLGtCQUNuQixNQUFNLElBQUkySCxNQUFNLHlDQUF5QzVFLE9BQU9zUyxFQUFLMU8sUUFBUTNHLElBQUk7VUFHbkYsTUFBTTZHLFVBQWlCd08sRUFBSzRrQjtVQUM1QixNQUFNQyxJQUFzQnRJLEdBQUs7WUFDL0JGLFlBQVksRUFBQzthQUNaN3FCO1VBR0gsSUFGQSxHQUFJQyxLQUFLb3pCLEdBQXFCLGNBRTFCQSxNQUF3QmxOLEVBQVV0VCxNQUlwQyxNQURBMWQsS0FBS20rQixhQUNDLElBQUl4eUIsTUFBTTtnQkFIVjZ4QjtxQkFNRkE7O01BTVZZO1FBQ0UsS0FBSSxVQUNGcDJCLElBQVcsSUFDWHEyQixZQUFZQyxJQUFZLE1BQ3RCLzNCLFVBQVVyQixTQUFTLFVBQXNCcEIsTUFBakJ5QyxVQUFVLEtBQW1CQSxVQUFVLEtBQUs7UUFDeEUsS0FBS3ZHLEtBQUs2NkIsZUFBZSxNQUFNLElBQUlsdkIsTUFBTTtRQUd6QyxPQUZBM0wsS0FBSys2QixvQkFBb0IveUIsR0FDekJoSSxLQUFLcytCLFlBQVlBLEdBQ1Z0K0IsS0FBS3UrQixTQUFTcE07O01BR3ZCcU07UUFDRSxPQUFPLElBQUluekIsU0FBUSxDQUFDQyxHQUFTQztVQUMzQixLQUFLdkwsS0FBSzQ2QixZQUVSLFlBREFydkIsRUFBTyxJQUFJSSxNQUFNO1VBSUUzTCxLQUFLMjlCLGlCQUFpQkMsVUFBVSxVQUN4Qzc2QixNQUFNO1lBQ2pCaUQsTUFBTTs7VUFFUixNQUFNeTRCLElBQWV6K0IsS0FBSzI5QixpQkFBaUJDLFVBQVU7VUFXckRsUCxHQUFhK1AsR0FBYyxTQVRDMXpCO1lBQ3JCQSxFQUFPMnpCLFdBS0xuekIsRUFBTyxJQUFJSSxNQUFNLDBCQUp0QjNMLEtBQUs0NkIsY0FBYSxHQUNsQjU2QixLQUFLZzdCLGtCQUFrQixJQUN2Qmg3QixLQUFLKzZCLG9CQUFvQjtZQUN6Qnp2Qjs7OztNQVFSekQ7UUFDTTdILEtBQUs0NkIsb0JBQ0Q1NkIsS0FBS3crQixVQUdieCtCLEtBQUttK0I7O01BR1BBO1FBQ0UsU0FBU1EsRUFBVUM7VUFDakIsT0FBT0EsYUFBbUJDLFdBQVdELGFBQW1CRTs7UUFHdERILEVBQVUzK0IsS0FBS205QixjQUFjOXZCLE9BQU8yZ0IsU0FBU3ZoQixLQUFLc3lCLFNBQVMvK0IsS0FBS205QixlQUNsRW45QixLQUFLbTlCLFVBQVU2QixVQUNmaC9CLEtBQUttOUIsaUJBQVlyNUI7UUFHZjY2QixFQUFVMytCLEtBQUs0OEIsZ0JBQWdCdnZCLE9BQU8yZ0IsU0FBU3ZoQixLQUFLc3lCLFNBQVMvK0IsS0FBSzQ4QixpQkFDcEU1OEIsS0FBSzQ4QixZQUFZb0MsVUFDakJoL0IsS0FBSzQ4QixtQkFBYzk0QjtRQUdqQjY2QixFQUFVMytCLEtBQUs2OEIsd0JBQXdCeHZCLE9BQU8yZ0IsU0FBU3ZoQixLQUFLc3lCLFNBQVMvK0IsS0FBSzY4Qix5QkFDNUU3OEIsS0FBS2kvQixrQkFBYW43QixHQUNsQjlELEtBQUs2OEIsb0JBQW9CbUM7UUFDekJoL0IsS0FBSzY4QiwyQkFBc0IvNEIsSUFHN0I5RCxLQUFLNjZCLGlCQUFnQjs7TUFHdkJxRTtRQUNFbC9CLEtBQUs4NkIseUJBQXdCLEdBRTdCOTZCLEtBQUttL0IsNkJBQTRCLElBRWpDbi9CLEtBQUs4OUI7O01BR1BoQztRQUNFOTdCLEtBQUs4NkIseUJBQXdCLEdBRTdCOTZCLEtBQUttL0IsNkJBQTRCLElBRWpDbi9CLEtBQUs4OUI7O01BR1BzQjtRQUNFLElBQUl0M0IsSUFBT3ZCLFVBQVVyQixTQUFTLFVBQXNCcEIsTUFBakJ5QyxVQUFVLEtBQW1CQSxVQUFVLEtBQUs7UUFFL0UsS0FBSSxNQUNGaTFCLElBQU8sV0FBUyxTQUNoQnhMLElBQVUsTUFBSSxhQUNkeUwsSUFBYyxNQUNaM3pCLEdBQ0F1M0IsSUFBTzE2QixFQUF5Qm1ELEdBQU0yeEI7UUFFMUMsT0FBTyxJQUFJcHVCLFNBQVEsQ0FBQ0MsR0FBU0M7VUFDM0IsTUFBTSt6QixJQUF1QnQvQixLQUFLMjlCLGlCQUFpQkMsVUFBVTtVQWdCN0RsUCxHQUFhNFEsR0FBc0IsU0FkbkJyOEI7WUFDZCxPQUFNLEtBQ0pNLEdBQUcsU0FDSHM2QixLQUNFNTZCLEVBQU1zSjtZQUNWLEdBQUl6QixLQUFLN0gsSUFFTE0sSUFDRmdJLEVBQU9oSSxLQUNFczZCLElBQ1R2eUIsTUFDS0MsRUFBTyxJQUFJSSxNQUFNOztVQUkxQixNQUFNNHpCLElBQW9CMU87VUFFMUI3d0IsS0FBS3cvQixjQUFjRCxHQUFtQjtZQUNwQ3o2QixRQUFRO1lBQ1JzeEIsVUFBVXhFO2NBR1owTixFQUFxQnY4QixNQUFNO1lBQ3pCaUQsTUFBTTtZQUNOdUcsTUFBTTtjQUNKbEcsU0FBUyxHQUFjO2dCQUNyQm0xQjtnQkFDQXhMO2dCQUNBeUw7aUJBQ0M0RDtjQUNIRTtjQUNBRSxXQUFVOzs7OztNQU1sQkMsV0FBV0M7UUFDVCxJQUFJM3lCLElBQVN6RyxVQUFVckIsU0FBUyxVQUFzQnBCLE1BQWpCeUMsVUFBVSxLQUFtQkEsVUFBVSxLQUFLO1FBQ2pGLE1BQU1xNUIsSUFBbUI1L0IsS0FBSzI5QixpQkFBaUJDLFVBQVU7UUFDekQsTUFBTWlDLElBQVlGLElBQU8sSUFBSTU0QixPQUFPNDRCLEtBQVE7UUFDNUNDLEVBQWlCNzhCLE1BQU07VUFDckJpRCxNQUFNO1VBQ051RyxNQUFNO1lBQ0pvekIsTUFBTUU7OztRQThCVm5SLEdBQWFrUixHQUFrQixTQTFCTDM4QjtVQUN4QixJQUFtQiwyQkFBZkEsRUFBTStDLE1BQWlDO1lBRXpDLE9BQU0sWUFDSjg1QixLQUNFNzhCLEVBQU1zSjtZQUNWLE1BQU13ekIsSUFBVyxJQUFJcDVCLElBQUksR0FBR0ksT0FBTy9HLEtBQUtpeEIsVUFBVSxXQUFXbHFCLE9BQU84NEI7WUFFcEVFLEVBQVNDLGFBQWFDLE9BQU8sYUFBYSxTQUMxQ0YsRUFBU0MsYUFBYUMsT0FBTyxjQUFjSCxJQUMzQ3hnQyxPQUFPWSxLQUFLOE0sR0FBUTdNLFNBQVFzSTtjQUMxQnMzQixFQUFTQyxhQUFhQyxPQUFPeDNCLEdBQUd1RSxFQUFPdkU7aUJBR3JDekksS0FBS3E3QixtQkFDUDBFLEVBQVNyaUIsT0FBTyxtQkFBbUIzVyxPQUFPL0csS0FBS3E3QjtZQUc1QixJQUFJbEYsR0FBYTtjQUNwQzN2QixLQUFLdTVCO2NBQ0wzSixVQXgwQzZCO2VBMDBDbEIyQjs7OztNQU9uQmx3Qix1QkFBdUIyVTtRQUNyQixLQUFJLFVBQ0Z4VSxHQUFRLFlBQ1JDLEdBQVUsWUFDVmdoQixLQUFhLEtBQ1h6TTtRQUNKLEtBQUtvUSxHQUFjQyxzQkFBc0JyUCxTQUFTeFYsT0FBY21qQixHQUE4Qm5qQixJQUFXLE1BQU0sSUFBSTJELE1BQU07UUFDekgsTUFBTXZELFVBQW9CcEksS0FBS2k3QixrQkFBa0JpRixlQUFlO1VBQzlEbDRCO1VBQ0FDOztRQUVGLE1BQU1rVCxJQUFZL1MsRUFBWWI7UUFDOUIsTUFBTWtWLElBQWdCclUsRUFBWVg7UUFDbEMsTUFBTTA0QixJQUFpQm40QjtRQUN2QixNQUFNbzRCLElBQW9CalYsR0FBOEJuakI7UUFFeEQ7VUFDRSxNQUFNcTRCLFVBQXVCcmdDLEtBQUtrN0IsUUFBUW9GLHNCQUFzQm5sQixHQUFXc0IsR0FBZTtZQUN4RnpVLFVBQVVtNEI7WUFDVmw0Qjs7VUFHRixJQUFrQyxTQUE5Qm80QixFQUFlM2dCLFlBQ2pCLE9BQUt1SixJQUNFb1gsSUFEaUJBLEVBQWVqaEI7VUFLekMsTUFBTW1oQixVQUFldmdDLEtBQUtrN0IsUUFBUW9GLHNCQUFzQm5sQixHQUFXc0IsR0FBZTtZQUNoRnpVLFVBQVVvNEI7WUFDVm40QjtjQUNDO1VBQ0gsT0FBS2doQixJQUNFc1gsSUFEaUJBLEVBQU9uaEI7VUFFL0IsT0FBTy9WO1VBQ1AsSUFBSUEsYUFBc0NBLEVBQU1zRixRQUFRNk8sU0FBUyxvREFBb0Q7WUFFbkgsTUFBTWdqQixVQUFrQnhnQyxLQUFLazdCLFFBQVFvRixzQkFBc0JubEIsR0FBV3NCLEdBQWU7Y0FDbkZ6VSxVQUFVbzRCO2NBQ1ZuNEI7Z0JBQ0M7WUFDSCxPQUFLZ2hCLElBQ0V1WCxJQURpQkEsRUFBVXBoQjs7VUFJcEMsTUFBTS9WOzs7TUFJVm8zQixZQUFZOXhCO1FBQ1YsT0FBTyxJQUFJdEQsU0FBUSxDQUFDQyxHQUFTQztVQUMzQixJQUFJdkwsS0FBSzQ2QixZQUFZO1lBQ25CLE1BQU04RixJQUF1QjFnQyxLQUFLMjlCLGlCQUFpQkMsVUFBVTtZQUM3RDhDLEVBQXFCMzlCLE1BQU07Y0FDekJpRCxNQUFNOztZQUdSLE1BQU0yNkIsSUFBd0IxOUI7Y0FDNUIsT0FBTSxNQUNKK0MsR0FDQXVHLE9BQU0sVUFDSnEwQixHQUFRLFNBQ1I1TSxHQUFPLFVBQ1A2TSxHQUFRLFlBQ1JDLE1BRUE3OUI7Y0FFSixJQUFhLGdDQUFUK0MsR0FDRixJQUFJNDZCLEdBQ0Z0MUIsRUFBUTBvQixTQUNILElBQUk2TSxHQUNUdDFCLEVBQU8sSUFBSUksTUFBTSxvQ0FDWixJQUFJbTFCLEdBQVk7Z0JBQ3JCLE1BQU1DLElBQWlCL2dDLEtBQUsyOUIsaUJBQWlCQyxVQUFVO2dCQVl2RGxQLEdBQWFxUyxHQUFnQixTQVZMQztrQkFDSSx5QkFBdEJBLEVBQWFoN0IsU0FDWGc3QixFQUFhejBCLEtBQUtxMEIsV0FDcEJ0MUIsRUFBUTAxQixFQUFhejBCLEtBQUt5bkIsV0FFMUJ6b0IsRUFBTyxJQUFJSSxNQUFNOztnQkFNdkIsTUFBTTR6QixJQUFvQjFPO2dCQUUxQjd3QixLQUFLdy9CLGNBQWNELEdBQW1CO2tCQUNwQ3o2QixRQUFRO2tCQUNSc3hCLFVBQVV4RTtvQkFHWm1QLEVBQWVoK0IsTUFBTTtrQkFDbkJpRCxNQUFNO2tCQUNOdUcsTUFBTTtvQkFDSm9DO29CQUNBNHdCOzs7OztZQU9WN1EsR0FBYWdTLEdBQXNCLFFBQVFDO2lCQUN0Q3AxQixFQUFPLElBQUlJLE1BQU07OztNQUk1QnMxQixjQUFjQyxHQUFVbDBCO1FBQ3RCLE9BQU8sSUFBSTNCLFNBQVEsQ0FBQ0MsR0FBU0M7VUFDM0IsSUFBSXZMLEtBQUs2NkIsZUFBZTtZQUN0QixPQUFNLFFBQ0puaUIsR0FBTSxTQUNOeW9CLEtBam5Ec0IsRUFBQ0QsR0FBVWwwQjtjQUN6QyxNQUFNMEwsSUFBUztjQUVmLEtBQUt3b0IsR0FDSCxPQUFPO2dCQUNMeG9CO2dCQUNBeW9CLFVBQVM7O2NBSWIsSUFBSUQsTUFBYXBVLEdBQWlCb1UsSUFFaEMsT0FEQXhvQixFQUFPd29CLFdBQVcsb0JBQ1g7Z0JBQ0x4b0I7Z0JBQ0F5b0IsU0FBd0MsTUFBL0I3aEMsT0FBT1ksS0FBS3dZLEdBQVF4VDs7Y0FJakMsTUFBTWs4QixJQUFtQnRVLEdBQWlCb1U7Y0FDMUMsTUFBTUcsSUFBaUJyMEIsS0FBVTtjQU1qQyxJQUFJcTBCLEVBQWVDLFdBQVc7Z0JBQzVCLE1BQU1DLEtBQXdCQyxXQUFXSCxFQUFlQyxVQUFVbHhCLGVBQWU7Z0JBQzdFbXhCLElBQXVCSCxFQUFpQi9VLGtCQUFlM1QsRUFBTzRvQixZQUFZLDZDQUMxRUMsSUFBdUJILEVBQWlCOVUsaUJBQWlCOFUsRUFBaUIxVSxlQUFZaFUsRUFBTzRvQixZQUFZOztjQVcvRyxPQVJJRCxFQUFlSSxxQkFBcUJMLEVBQWlCN1UsZ0JBQWdCL08sU0FBUzZqQixFQUFlSSxzQkFDL0Yvb0IsRUFBTytvQixtQkFBbUI7Y0FHeEJKLEVBQWVLLDJCQUEyQk4sRUFBaUI1VSxzQkFBc0JoUCxTQUFTNmpCLEVBQWVLLDRCQUMzR2hwQixFQUFPZ3BCLHlCQUF5QjtjQUczQjtnQkFDTGhwQjtnQkFDQXlvQixTQUF3QyxNQUEvQjdoQyxPQUFPWSxLQUFLd1ksR0FBUXhUOztjQXlrRHJCeThCLENBQXdCVCxHQUFVbDBCO1lBRXRDLEtBQUttMEIsR0FFSCxZQURBNTFCLEVBQU8sSUFBSUksTUFBTWUsS0FBS0MsVUFBVStMO1lBSWxDLE1BQU1rcEIsSUFBYzVoQyxLQUFLMjlCLGlCQUFpQkMsVUFBVTtZQVlwRGxQLEdBQWFrVCxHQUFhLFNBVkwzK0I7Y0FDQSxxQkFBZkEsRUFBTStDLFNBQ0ovQyxFQUFNc0osS0FBS3N4QixVQUNidnlCLEVBQVFySSxFQUFNc0osS0FBS3N4QixXQUVuQnR5QixFQUFPLElBQUlJLE1BQU0xSSxFQUFNc0osS0FBS2xEOztZQU1sQyxNQUFNazJCLElBQW9CMU87WUFFMUI3d0IsS0FBS3cvQixjQUFjRCxJQUVuQnFDLEVBQVk3K0IsTUFBTTtjQUNoQmlELE1BQU07Y0FDTnVHLE1BQU07Z0JBQ0oyMEI7Z0JBQ0FsMEI7Z0JBQ0F1eUI7OztpQkFHQ2gwQixFQUFPLElBQUlJLE1BQU07OztNQUk1QjlELDBCQUEwQmc2QjtRQUN4QixPQUFNLFlBQ0ovZCxHQUFVLFVBQ1ZnZSxLQUNFRDtRQUNKLE9BQU8sSUFBSXgyQixTQUFRLENBQUNDLEdBQVNDO1VBQzNCLElBQUl2TCxLQUFLNjZCLGVBQWU7WUFDdEIsSUFBOEMsT0FBMUMsR0FBT2xqQixLQUFLbU0sR0FBWSxPQUFPNWUsUUFFakMsWUFEQXFHLEVBQU8sSUFBSUksTUFBTTtZQUluQixNQUFNbzJCLElBQXFCL2hDLEtBQUsyOUIsaUJBQWlCQyxVQUFVO1lBWTNEbFAsR0FBYXFULEdBQW9CLFNBVlo5K0I7Y0FDQSxzQ0FBZkEsRUFBTStDLFNBQ0ovQyxFQUFNc0osS0FBS3N4QixVQUNidnlCLEVBQVFySSxFQUFNc0osS0FBS3N4QixXQUVuQnR5QixFQUFPLElBQUlJLE1BQU0xSSxFQUFNc0osS0FBS2xEO2lCQU1sQzA0QixFQUFtQmgvQixNQUFNO2NBQ3ZCaUQsTUFBTTtjQUNOdUcsTUFBTTtnQkFDSnVYO2dCQUNBZ2U7OztpQkFHQ3YyQixFQUFPLElBQUlJLE1BQU07OztNQUk1QjlEO1FBQ0UsS0FBSzdILEtBQUtrOEIsa0JBQWtCLE1BQU0sSUFBSXZ3QixNQUFNO1FBQzVDLE9BQU8sSUFBSU4sU0FBUSxDQUFDQyxHQUFTQztVQUMzQixJQUFJdkwsS0FBSzQ2QixZQUFZO1lBQ25CLE1BQU1vSCxJQUFzQmhpQyxLQUFLMjlCLGlCQUFpQkMsVUFBVTtZQWM1RGxQLEdBQWFzVCxHQUFxQixTQVpMLytCO2NBQ1IsZ0NBQWZBLEVBQU0rQyxTQUNKL0MsRUFBTXNKLEtBQUtzeEIsVUFDYnZ5QixFQUFRckksRUFBTXNKLEtBQUtzeEIsV0FFbkJ0eUIsRUFBTyxJQUFJSSxNQUFNMUksRUFBTXNKLEtBQUtsRCxTQUc5QnJKLEtBQUs4OUI7aUJBS1RrRSxFQUFvQmovQixNQUFNO2NBQ3hCaUQsTUFBTTtnQkFHUmhHLEtBQUs4OUIsZ0JBQWU7aUJBQ2Z2eUIsRUFBTyxJQUFJSSxNQUFNOzs7TUFJNUI2ekIsY0FBY0Q7UUFDWixLQUFJLEtBQ0YvNEIsR0FBRyxRQUNIMUIsR0FBTSxVQUNOc3hCLEtBQ0U3dkIsVUFBVXJCLFNBQVMsVUFBc0JwQixNQUFqQnlDLFVBQVUsS0FBbUJBLFVBQVUsS0FBSztRQUV4RSxJQUFJZzVCLEdBQW1CO1VBQ3JCLE1BQU0wQyxJQUFlamlDLEtBQUsyOUIsaUJBQWlCQyxVQUFVO1VBQ3JELE1BQU1tQyxJQUFXLElBQUlwNUIsSUFBSUgsS0FBTyxHQUFHTyxPQUFPL0csS0FBS2l4QixVQUFVLGdDQUFnQ2xxQixPQUFPdzRCO1VBRTVGdi9CLEtBQUtxN0IsbUJBRUgwRSxFQUFTcmlCLE9BQU1xaUIsRUFBU3JpQixRQUFRLG1CQUFtQjNXLE9BQU8vRyxLQUFLcTdCLGtCQUFxQjBFLEVBQVNyaUIsT0FBTyxtQkFBbUIzVyxPQUFPL0csS0FBS3E3QjtVQUd6SSxNQUFNNkcsSUFBZ0IsSUFBSS9MLEdBQWE7WUFDckMzdkIsS0FBS3U1QjtZQUNMajdCO1lBQ0FzeEI7O1VBSUYsSUFGQThMLEVBQWNuSyxTQUVUbUssRUFBYzcwQixRQUdqQixZQUZBck4sS0FBS21pQyx1QkFBdUI1QyxHQUFtQlEsRUFBU241QjtVQUsxRHE3QixFQUFhbC9CLE1BQU07WUFDakJpRCxNQUFNO1lBQ051RyxNQUFNO2NBQ0pnekI7OztVQUlKLE1BQU02QyxJQUFlOWxCO1lBQ25CLEtBQ0VpakIsbUJBQW1COEMsR0FBVSxPQUM3QmpTLEtBQ0U5VDtZQUVBK2xCLE1BQWU5QyxLQUFxQm5QLE1BQ3RDOFIsRUFBYzlSLFNBQ2Q2UixFQUFhLy9CLGVBQWUsUUFBUWtnQzs7VUFJeENILEVBQWFqZ0MsR0FBRyxRQUFRb2dDLElBQ3hCRixFQUFjOU4sS0FBSyxVQUFTO1lBQzFCNk4sRUFBYWwvQixNQUFNO2NBQ2pCd0osTUFBTTtnQkFDSmd6QjtnQkFDQTFILFNBQVE7O2dCQUdab0ssRUFBYS8vQixlQUFlLFFBQVFrZ0M7Ozs7TUFLMUNFLG9CQUFvQjFEO1FBRWxCLE9BQU0sT0FDSjJELEtBQ0V2aUMsS0FBSys3QixjQUFjO1FBRXZCLElBQUl3RyxHQUFPO1VBQ1QsT0FBTSxRQUNKQyxLQUFTLEdBQUssUUFDZEMsSUFBUyxNQUNQRjtVQUNBQyxLQUFRNUQsRUFBUThELFVBQVU1aUIsSUFBSSxlQUM5QjJpQixFQUFPRSxlQUFhL0QsRUFBUTlCLE1BQU1FLFlBQVksbUJBQW1CeUYsRUFBT0UsY0FDeEVGLEVBQU9HLGNBQVloRSxFQUFROUIsTUFBTUUsWUFBWSxrQkFBa0J5RixFQUFPRzs7O01BSTlFQztRQUNFLElBQUlDLEdBQWtCQztRQUV0QixJQUFJQyxJQUFVLEdBQUdqOEIsT0FBTy9HLEtBQUtpeEIsVUFBVTtRQUdyQyxJQUFJZ1M7UUFJSixJQUFJQztRQUx1QyxVQUF4Q0osSUFBbUI5aUMsS0FBSys3QixvQkFBNkMsTUFBckIrRyxLQUFvRixVQUFwREMsSUFBd0JELEVBQWlCUCxlQUE2QyxNQUExQlEsS0FBb0NBLEVBQXNCUCxTQUd6TVEsS0FBcUQsVUFBekNDLElBQW9CampDLEtBQUsrN0Isb0JBQThDLE1BQXRCa0gsU0FBK0IsSUFBU0EsRUFBa0JFLGNBQWNILElBSXJJQSxLQUFxRCxVQUF6Q0UsSUFBb0JsakMsS0FBSys3QixvQkFBOEMsTUFBdEJtSCxTQUErQixJQUFTQSxFQUFrQkUsYUFBYUo7UUFHdEksT0FBT0E7O01BR1Q3RCw0QkFBNEJwMEI7UUFDVS9LLEtBQUsyOUIsaUJBQWlCQyxVQUFVLDJCQUN4Qzc2QixNQUFNO1VBQ2hDd0osTUFBTXhCOzs7TUFJVit5QjtRQUNFLElBQUl1RixJQUFTOThCLFVBQVVyQixTQUFTLFVBQXNCcEIsTUFBakJ5QyxVQUFVLE1BQW1CQSxVQUFVO1FBQzVFLE1BQU11MkIsSUFBUTtRQUVkLElBQUt1RyxHQW9DSHZHLEVBQU1DLFVBQVUsU0FDaEJELEVBQU1uRyxRQUFRLFFBQ2RtRyxFQUFNOUYsU0FBUyxRQUNmOEYsRUFBTXpGLE1BQU0sT0FDWnlGLEVBQU13RyxRQUFRLE9BQ2R4RyxFQUFNM0YsT0FBTyxPQUNiMkYsRUFBTXlHLFNBQVMsWUFyQ2YsUUFKQXpHLEVBQU1DLFVBQVUvOEIsS0FBSzg2Qix3QkFBd0IsVUFBVTtRQUN2RGdDLEVBQU05RixTQUFTLFFBQ2Y4RixFQUFNbkcsUUFBUSxRQUVOMzJCLEtBQUswNkI7U0FDWCxLQUFLL08sR0FBZ0JFO1VBQ25CaVIsRUFBTXpGLE1BQU0sT0FDWnlGLEVBQU0zRixPQUFPLE9BQ2IyRixFQUFNd0csUUFBUSxRQUNkeEcsRUFBTXlHLFNBQVM7VUFDZjs7U0FFRixLQUFLNVgsR0FBZ0JJO1VBQ25CK1EsRUFBTXpGLE1BQU0sT0FDWnlGLEVBQU13RyxRQUFRLE9BQ2R4RyxFQUFNM0YsT0FBTyxRQUNiMkYsRUFBTXlHLFNBQVM7VUFDZjs7U0FFRixLQUFLNVgsR0FBZ0JHO1VBQ25CZ1IsRUFBTXlHLFNBQVMsT0FDZnpHLEVBQU13RyxRQUFRLE9BQ2R4RyxFQUFNekYsTUFBTSxRQUNaeUYsRUFBTTNGLE9BQU87VUFDYjs7U0FFRixLQUFLeEwsR0FBZ0JDO1NBQ3JCO1VBQ0VrUixFQUFNeUcsU0FBUyxPQUNmekcsRUFBTTNGLE9BQU8sT0FDYjJGLEVBQU16RixNQUFNLFFBQ1p5RixFQUFNd0csUUFBUTs7UUFhcEJoa0MsT0FBTzJCLE9BQU9qQixLQUFLNDhCLFlBQVlFLE9BQU9BLElBQ3RDOThCLEtBQUtvN0IscUJBQXFCaUk7O01BRzVCNUY7UUFDRSxHQUFJM3lCLEtBQUs7UUFFVCxNQUFNMDRCLElBQWlCLElBQUlyMkIsRUFBc0I7VUFDL0NuSCxNQUFNO1VBQ05sQixRQUFRO1VBQ1JzSSxjQUFjcE4sS0FBSzQ4QixZQUFZNkc7VUFDL0JuMkIsY0FBYyxJQUFJM0csSUFBSTNHLEtBQUtpeEIsVUFBVXJpQjs7UUFLdkMsTUFBTTgwQixJQUFzQixJQUFJdjJCLEVBQXNCO1VBQ3BEbkgsTUFBTTtVQUNObEIsUUFBUTtVQUNSc0ksY0FBY3BOLEtBQUs0OEIsWUFBWTZHO1VBQy9CbjJCLGNBQWMsSUFBSTNHLElBQUkzRyxLQUFLaXhCLFVBQVVyaUI7O1FBS3ZDLE1BQU0rMEIsSUFBaUIsSUFBSTNSLEdBQW9Cd1I7UUFFL0MsTUFBTUksSUFBd0NqZ0M7VUFDNUMsTUFBTWtnQyxJQUFpQkYsRUFBZWhnQztVQUV0Q2dnQyxFQUFlaGdDLEtBQUssU0FBc0J1STtZQUN4QyxJQUFJQSxLQUFxQiwwQkFBWEEsR0FDWixPQUFPeTNCLEVBQWV4UjtZQUd4QixLQUFLLElBQUk1aUIsSUFBT2hKLFVBQVVyQixRQUFROEosSUFBTyxJQUFJUSxNQUFNRCxJQUFPLElBQUlBLElBQU8sSUFBSSxJQUFJRSxJQUFPLEdBQUdBLElBQU9GLEdBQU1FLEtBQ2xHVCxFQUFLUyxJQUFPLEtBQUtsSixVQUFVa0o7WUFHN0IsT0FBT28wQixFQUFlaDZCLE1BQU03SixNQUFNLEVBQUNrTSxNQUFXOEM7OztRQUlsRDQwQixFQUFzQyxTQUN0Q0EsRUFBc0MsY0FFdENELEVBQWV4UixTQUFTLE1BQ2YsSUFBSTltQixTQUFRLENBQUNDLEdBQVNDO1VBRTNCbzRCLEVBQWVwUSxVQUFVO1lBQ3ZCeG1CLFNBQVM7WUFDVHZCLElBQUlxbEI7WUFDSjNrQixRQUFRO1lBQ1JjLFFBQVE7Y0FDUCxDQUFDekosR0FBS3NIO1lBQ1AsT0FDRS9ILFFBQVE0TixLQUNON0YsS0FBWTtZQUVoQixJQUFJdEgsR0FDRmtJLFlBQVc7Y0FDVEYsRUFBT2hJO2dCQUNOLFVBQ0UsSUFBSWlNLE1BQU02QyxRQUFRM0IsTUFBUUEsRUFBSXhMLFNBQVMsR0FBRztjQUcvQyxNQUFNNCtCLElBQWdCO2dCQUNwQixJQUErQixPQUEzQjlqQyxLQUFLKzZCLHFCQUE0Qi82QixLQUFLZzdCLG9CQUFvQmg3QixLQUFLKzZCLG1CQUFtQjtrQkFDcEYsT0FBTSxtQkFDSkEsS0FDRS82QjtrQkFFSkEsS0FBS3crQixTQUNKNXhCLE1BQUsvRjtvQkFDSjdHLEtBQUsrNkIsb0JBQW9CQSxHQUV6Qi82QixLQUFLK2pDLGlCQUFnQixHQUFNejRCLEdBQVNDO3NCQUNuQytOLE9BQU1qUSxLQUFTa0MsRUFBT2xDO3VCQUV6QmlDLEVBQVFvRjs7Y0FJUjFRLEtBQUs0NkIsYUFDUGtKLE1BRUE5akMsS0FBS2drQyxrQkFBa0JGO21CQUl6QjlqQyxLQUFLK2pDLGlCQUFnQixHQUFNejRCLEdBQVNDOzthQU01Q280QixFQUFlL08sbUJBQW1CLENBQUNaLEdBQVN0dkI7VUFDMUMsTUFBTWl3QixJQUFXWDtVQUVqQixLQUFLeGtCLE1BQU02QyxRQUFRc2lCLE1BQWFpRixHQUFlcGMsU0FBU21YLEVBQVN6b0IsU0FBUztZQUN4RSxNQUFNcXpCLElBQW9CMU87WUFFMUI3d0IsS0FBS3cvQixjQUFjRCxHQUFtQjtjQUNwQ3o2QixRQUFRO2NBQ1JzeEIsVUFBVXZFO2dCQUdaOEMsRUFBUzRLLG9CQUFvQkE7O1VBRy9Cb0UsRUFBZTVQLFdBQVczaEIsT0FBT3VpQixHQUFVandCOztRQUs3QyxNQUFNdS9CLElBQXdCLElBQUl6dEIsTUFBTW10QixHQUFnQjtVQUd0RE8sZ0JBQWdCLE9BQU07O1FBRXhCbGtDLEtBQUt1K0IsV0FBVzBGO1FBQ2hCLE1BQU10RyxJckIzMENWLFNBQXdCbnRCO1VBQ3RCLE1BQU1nakIsSUFBTSxJQUFJN2Y7VUFhaEIsT0FYQTZmLEVBQUlvSyxZQUFZLFNBQXNCNTNCO1lBQ3BDLE9BQUloRyxLQUFLNFQsWUFBWTVOLEtBQ1poRyxLQUFLNFQsWUFBWTVOLEtBR25CaEcsS0FBSzZULGFBQWE3TjthQUczQixJQUFLd0ssR0FBUWdqQixHQUFLaGpCLElBQVFqTjtZQUNwQkEsS0FBSzhKLE9BQU8rRyxRQUFRL0ssTUFBTTlGO2VBRXpCaXdCO1NxQjZ6Q29CMlEsQ0FBZVQ7UUFDeEMxakMsS0FBSzI5QixtQkFBbUJBO1FBQ0hBLEVBQWlCQyxVQUFVLFVBQ25DNTdCLEdBQUcsU0FBUWlCO1VBQ0gsb0JBQWZBLEVBQU0rQyxRQUdSaEcsS0FBS21pQyx1QkFBdUJsL0IsRUFBTXNKLEtBQUtnekIsbUJBQW1CdDhCLEVBQU1zSixLQUFLL0Y7O1FBSXBEbTNCLEVBQWlCQyxVQUFVLFVBQ25DNTdCLEdBQUcsU0FBUWlCO1VBQ3RCLE9BQU0sTUFDSnNKLEtBQ0V0SjtVQUVKakQsS0FBSzg5QixlQUFldnhCOztRQUdEb3hCLEVBQWlCQyxVQUFVLFVBQ25DNTdCLEdBQUcsU0FBUStJO1VBRWxCQSxFQUFPMnpCLFlBQ1QxK0IsS0FBSzQ2QixhQUFhN3ZCLEVBQU8yekIsVUFDekIxK0IsS0FBS2c3QixrQkFBa0Jqd0IsRUFBTy9DLFlBRTNCaEksS0FBSzg5QixrQkFFTjk5QixLQUFLZ2tDLG9CQUNQaGtDLEtBQUtna0M7aUJBQ0Voa0MsS0FBS2drQzthQUdoQmhrQyxLQUFLa2hDLFdBQVcrQyxHQUNaamtDLEtBQUtraEMsU0FBU3pSLHNCQUFvQkwsR0FBaUJwdkIsS0FBS2toQyxTQUFTbk4sYUFFckU0UCxFQUFldFEsb0JBRWYsR0FBSXZPLE1BQU07O01BR1ppZixnQkFBZ0JLLEdBQWlCOTRCLEdBQVNDO1FBQ3hDLE1BQU04NEIsSUFBZTkzQjtVQUNuQixPQUFNLEtBQ0poSixHQUFHLGlCQUNIbXZCLEtBQ0VubUI7VUFFQWhKLEtBQ0YsR0FBSThGLE1BQU05RixJQUNOZ0ksS0FBUUEsRUFBT2hJLE1BRVorSCxLQUFTQSxFQUFRLEVBQUNvbkIsTUFFdkIxeUIsS0FBS283QixzQkFBb0JwN0IsS0FBSzg5Qjs7UUFHcEMsTUFBTXdHLElBQWN0a0MsS0FBSzI5QixpQkFBaUJDLFVBQVU7UUFFcEQsSUFBSzU5QixLQUFLKzZCLG1CQVVIO1VBQ0xyTSxHQUFhNFYsR0FBYSxRQUFRRDtVQUNsQyxNQUFNOUUsSUFBb0IxTztVQUUxQjd3QixLQUFLdy9CLGNBQWNELElBRW5CK0UsRUFBWXZoQyxNQUFNO1lBQ2hCaUQsTUFBTTtZQUNOdUcsTUFBTTtjQUNKNjNCO2NBQ0FwOEIsVUFBVWhJLEtBQUsrNkI7Y0FDZndFO2NBQ0FsQixZQUFZcitCLEtBQUtzK0I7OztlQXJCckJ0K0IsS0FBSzg5QixnQkFBZSxJQUVwQnBQLEdBQWE0VixHQUFhLFFBQVFELElBQ2xDQyxFQUFZdmhDLE1BQU07VUFDaEJpRCxNQUFNO1VBQ051RyxNQUFNO1lBQ0o2M0I7Ozs7TUFxQlJqQyx1QkFBdUI1QyxHQUFtQi80QjtRQUN4QyxNQUFNdzhCLElBQVVoakMsS0FBSzZpQztRQUVyQixNQUFNNUQsSUFBYWhSLEdBQWMsa0RBQWtELDJDQUEyQ2xuQixPQUFPaThCLEdBQVMsaUJBQWlCLFVBQVUsZ0NBQWdDajhCLE9BQU8vRyxLQUFLdTlCLGtCQUFrQm5RLGdCQUFnQixXQUFXLDhCQUE4QnJtQixPQUFPL0csS0FBS3U5QixrQkFBa0JsUSxlQUFlLFVBQTVTO1FBQ2pDLE1BQU1rWCxJQUFldFcsR0FBYyxrQ0FBa0NsbkIsT0FBTy9HLEtBQUt1OUIsa0JBQWtCcFEsVUFBVTtRQUM3RyxNQUFNcVgsSUFBZXZXLEdBQWM7UUFDbkN1VyxFQUFhL0osWUFBWThKLElBQ3pCdEYsRUFBV3hFLFlBQVkrSjtRQWV2QnhrQyxLQUFLc2lDLG9CQUFvQnJEO1FBT3pCbFIsSUFMcUI7VUFDbkIvdEIsS0FBSzY4QixvQkFBb0JDLE1BQU1DLFVBQVUsU0FDekMvOEIsS0FBSzY4QixvQkFBb0JwQyxZQUFZd0U7YUFJdkNsUixJQXJCbUI7VUFDakJ3VyxFQUFhdDJCLGlCQUFpQixVQUFTO1lBQ3JDak8sS0FBS3cvQixjQUFjRCxHQUFtQjtjQUNwQy80QjtjQUNBMUIsUUFBUTtjQUNSc3hCLFVBQVV2RTtnQkFHWm9OLEVBQVdELFVBQ3NDLE1BQTdDaC9CLEtBQUs2OEIsb0JBQW9CLzhCLFNBQVNvRixXQUFjbEYsS0FBSzY4QixvQkFBb0JDLE1BQU1DLFVBQVU7Ozs7O0lDejJFckcsSUFBSTBILEtBQXdDLFNBQVVDLEdBQVNDLEdBQVlDLEdBQUdDO01BRTFFLE9BQU8sS0FBS0QsTUFBTUEsSUFBSXY1QixXQUFVLFNBQVVDLEdBQVNDO1FBQy9DLFNBQVN1NUIsRUFBVXJsQztVQUFTO1lBQU1zbEMsRUFBS0YsRUFBVTV6QixLQUFLeFI7WUFBVyxPQUFPa1g7WUFBS3BMLEVBQU9vTDs7O1FBQ3BGLFNBQVNrcUIsRUFBU3BoQztVQUFTO1lBQU1zbEMsRUFBS0YsRUFBaUIsTUFBRXBsQztZQUFXLE9BQU9rWDtZQUFLcEwsRUFBT29MOzs7UUFDdkYsU0FBU291QixFQUFLamlDO1VBQVVBLEVBQU95TyxPQUFPakcsRUFBUXhJLEVBQU9yRCxTQUp6RCxTQUFlQTtZQUFTLE9BQU9BLGFBQWlCbWxDLElBQUlubEMsSUFBUSxJQUFJbWxDLEdBQUUsU0FBVXQ1QjtjQUFXQSxFQUFRN0w7O1dBSTdCdWxDLENBQU1saUMsRUFBT3JELE9BQU9tTixLQUFLazRCLEdBQVdqRTs7UUFDbEdrRSxHQUFNRixJQUFZQSxFQUFVaDdCLE1BQU02NkIsR0FBU0MsS0FBYyxLQUFLMXpCOzs7SUFHdEUsSUFBSWcwQixLQUE0QyxTQUFVUCxHQUFTajRCO01BQy9ELElBQXNHeTRCLEdBQUd0bEIsR0FBRzdFLEdBQUdvcUIsR0FBM0d0K0IsSUFBSTtRQUFFdStCLE9BQU87UUFBRzluQixNQUFNO1VBQWEsSUFBVyxJQUFQdkMsRUFBRSxJQUFRLE1BQU1BLEVBQUU7VUFBSSxPQUFPQSxFQUFFOztRQUFPc3FCLE1BQU07UUFBSUMsS0FBSzs7TUFDaEcsT0FBT0gsSUFBSTtRQUFFbDBCLE1BQU1zMEIsRUFBSztRQUFJLE9BQVNBLEVBQUs7UUFBSSxRQUFVQSxFQUFLO1NBQXdCLHFCQUFYN3hCLFdBQTBCeXhCLEVBQUV6eEIsT0FBT2EsWUFBWTtRQUFhLE9BQU92VTtVQUFVbWxDO01BQ3ZKLFNBQVNJLEVBQUt6MUI7UUFBSyxPQUFPLFNBQVVvVjtVQUFLLE9BQ3pDLFNBQWNzZ0I7WUFDVixJQUFJTixHQUFHLE1BQU0sSUFBSS92QixVQUFVO1lBQzNCLE1BQU90TztjQUNILElBQUlxK0IsSUFBSSxHQUFHdGxCLE1BQU03RSxJQUFZLElBQVJ5cUIsRUFBRyxLQUFTNWxCLEVBQVUsU0FBSTRsQixFQUFHLEtBQUs1bEIsRUFBUyxXQUFPN0UsSUFBSTZFLEVBQVUsV0FBTTdFLEVBQUUxVyxLQUFLdWIsSUFBSSxLQUFLQSxFQUFFM08sV0FBVzhKLElBQUlBLEVBQUUxVyxLQUFLdWIsR0FBRzRsQixFQUFHLEtBQUtqMEIsTUFBTSxPQUFPd0o7Y0FFM0osUUFESTZFLElBQUksR0FBRzdFLE1BQUd5cUIsSUFBSyxFQUFTLElBQVJBLEVBQUcsSUFBUXpxQixFQUFFdGIsVUFDekIrbEMsRUFBRztlQUNQLEtBQUs7ZUFBRyxLQUFLO2dCQUFHenFCLElBQUl5cUI7Z0JBQUk7O2VBQ3hCLEtBQUs7Z0JBQWMsT0FBWDMrQixFQUFFdStCLFNBQWdCO2tCQUFFM2xDLE9BQU8rbEMsRUFBRztrQkFBSWowQixPQUFNOzs7ZUFDaEQsS0FBSztnQkFBRzFLLEVBQUV1K0IsU0FBU3hsQixJQUFJNGxCLEVBQUcsSUFBSUEsSUFBSyxFQUFDO2dCQUFJOztlQUN4QyxLQUFLO2dCQUFHQSxJQUFLMytCLEVBQUV5K0IsSUFBSUcsT0FBTzUrQixFQUFFdytCLEtBQUtJO2dCQUFPOztlQUN4QztnQkFDSSxNQUFNMXFCLElBQUlsVSxFQUFFdytCLE9BQU10cUIsSUFBSUEsRUFBRTdWLFNBQVMsS0FBSzZWLEVBQUVBLEVBQUU3VixTQUFTLE9BQWtCLE1BQVZzZ0MsRUFBRyxNQUFzQixNQUFWQSxFQUFHLEtBQVc7a0JBQUUzK0IsSUFBSTtrQkFBRzs7Z0JBQ2pHLElBQWMsTUFBVjIrQixFQUFHLFFBQWN6cUIsS0FBTXlxQixFQUFHLEtBQUt6cUIsRUFBRSxNQUFNeXFCLEVBQUcsS0FBS3pxQixFQUFFLEtBQU07a0JBQUVsVSxFQUFFdStCLFFBQVFJLEVBQUc7a0JBQUk7O2dCQUM5RSxJQUFjLE1BQVZBLEVBQUcsTUFBWTMrQixFQUFFdStCLFFBQVFycUIsRUFBRSxJQUFJO2tCQUFFbFUsRUFBRXUrQixRQUFRcnFCLEVBQUUsSUFBSUEsSUFBSXlxQjtrQkFBSTs7Z0JBQzdELElBQUl6cUIsS0FBS2xVLEVBQUV1K0IsUUFBUXJxQixFQUFFLElBQUk7a0JBQUVsVSxFQUFFdStCLFFBQVFycUIsRUFBRSxJQUFJbFUsRUFBRXkrQixJQUFJNWlDLEtBQUs4aUM7a0JBQUs7O2dCQUN2RHpxQixFQUFFLE1BQUlsVSxFQUFFeStCLElBQUlHLE9BQ2hCNStCLEVBQUV3K0IsS0FBS0k7Z0JBQU87O2NBRXRCRCxJQUFLLzRCLEVBQUtwSSxLQUFLcWdDLEdBQVM3OUI7Y0FDMUIsT0FBTzhQO2NBQUs2dUIsSUFBSyxFQUFDLEdBQUc3dUIsS0FBSWlKLElBQUk7Y0FBSztjQUFVc2xCLElBQUlucUIsSUFBSTs7WUFDdEQsSUFBWSxJQUFSeXFCLEVBQUcsSUFBUSxNQUFNQSxFQUFHO1lBQUksT0FBTztjQUFFL2xDLE9BQU8rbEMsRUFBRyxLQUFLQSxFQUFHLFVBQUs7Y0FBUWowQixPQUFNOztXQXJCOUJ3ekIsQ0FBSyxFQUFDajFCLEdBQUdvVjs7OztJQXlCdEQsSUFBSXdnQixLQUEyQjtNQUFjLE9BQU9qQixRQUFVLFFBQVEsUUFBUSxJQUFRO1FBQ3pGLE9BQU9RLEdBQVlqbEMsT0FBTSxTQUFVMmxDO1VBQy9CLE9BQU8sRUFBQyxHQUFHLElBQUk5bkI7Ozs7Ozs7O0lDbkN2QixJQUFJVyxJQUFLLEtBQUlvbkIsR0FGSixhQUVPO0lBQ2hCLElBQUlDLElBQWdCLEVBQUFWLEVBQU9XLFVBQVUsRUFBQVgsRUFBT1ksWUFBWTtJQUN4RCxJQUFJQyxJQUFTSCxFQUFjRyxVQUFVSCxFQUFjSTtJQUVuRCxJQUFJQyxJQUFhLEVBQVE7SUFFekIsTUFBTUMsSUFBaUJDLEVBQU96dUIsS0FBSyxvRUFBb0U7SUFDdkcsTUFBTTB1QixJQUFTRCxFQUFPRSxNQUFNLElBQUk7SUFFaEMsU0FBU0MsRUFBT0MsR0FBVzczQjtNQUN6QixLQUFLNjNCLEdBQ0gsTUFBTSxJQUFJNzZCLE1BQU1nRCxLQUFXOztJQVEvQixTQUFTODNCLEVBQWtCM2lCO01BQ3pCLFNBTEYsU0FBbUJyYjtRQUNqQixPQUFPMjlCLEVBQU9NLFNBQVNqK0IsTUFBbUIsT0FBYkEsRUFBRXZEO09BSTFCeWhDLENBQVM3aUIsT0FJUEEsRUFBVzhpQixRQUFRUCxLQUFVLEtBQ3BDdmlCLEVBQVc4aUIsUUFBUVQsS0FBa0I7O0lBa0J2QyxTQUFTVSxFQUFZQztNQUNuQixJQUFJajNCLElBQU0sSUFBSWszQixXQUFXRDtNQUN6QixZQUE2QyxNQUFsQ2pCLEVBQWNtQixrQkFDaEJaLEVBQU96dUIsS0FBS3V1QixFQUFXVyxZQUFZQyxPQUUxQ2pCLEVBQWNtQixnQkFBZ0JuM0IsSUFFekJ1MkIsRUFBT3p1QixLQUFLOUg7O0lBR3JCLFNBQVNvM0IsRUFBTy9zQjtNQUNkLE9BQU8sSUFBSTdPLFNBQVEsU0FBU0M7UUFFMUIsSUFBSXhJLElBRE9vakMsRUFBV2dCLFdBQVcsVUFDZnZwQixPQUFPekQsR0FBSzBEO1FBQzlCdFMsRUFBUSxJQUFJeTdCLFdBQVdqa0M7OztJQUkzQixTQUFTcWtDLEVBQU8zQjtNQUNkLE9BQU8sU0FBUy9nQixHQUFJemYsR0FBS3VIO1FBQ3ZCLE9BQU8sSUFBSWxCLFNBQVEsU0FBU0M7VUFDMUIsSUFBSTA2QixHQUFRO1lBR1YsT0FEV0EsRUFBT29CLFVBQVUsT0FBT3BpQyxHQURiO2NBQUNnQixNQUFNO2dCQUM0QixHQUFPLEVBQUN3L0IsS0FDckQ1NEIsTUFBSyxTQUFTeTZCO2NBQ3hCLElBQUlDLElBQWU7Z0JBQUN0aEMsTUFBTTtnQkFBV3llLElBQUlBOztjQUN6QyxPQUFPdWhCLEVBQU9SLEdBQUk4QixHQUFjRCxHQUFXOTZCO2dCQUMxQ0ssTUFBSyxTQUFTOUo7Y0FDZndJLEVBQVE4NkIsRUFBT3p1QixLQUFLLElBQUlvdkIsV0FBV2prQzs7O1VBR3JDLElBQVcsY0FBUDBpQyxHQUFrQjtZQUNwQixJQUFJK0IsSUFBU3JCLEVBQVdzQixlQUFlLGVBQWV4aUMsR0FBS3lmO1lBQzNELElBQUlnakIsSUFBYUYsRUFBTzVwQixPQUFPcFI7WUFDL0IsSUFBSW03QixJQUFjSCxFQUFPSTtZQUN6QnI4QixFQUFRODZCLEVBQU9yL0IsT0FBTyxFQUFDMGdDLEdBQVlDO2lCQUVoQyxJQUFXLGNBQVBsQyxHQUFrQjtZQUN6QixJQUFJb0MsSUFBVzFCLEVBQVcyQixpQkFBaUIsZUFBZTdpQyxHQUFLeWY7WUFDL0QsSUFBSWdqQixJQUFhRyxFQUFTanFCLE9BQU9wUjtZQUNqQyxJQUFJbTdCLElBQWNFLEVBQVNEO1lBQzNCcjhCLEVBQVE4NkIsRUFBT3IvQixPQUFPLEVBQUMwZ0MsR0FBWUM7Ozs7O0lBTzdDLElBQUlJLElBQWdCWCxFQUFPO0lBQzNCLElBQUlZLElBQWdCWixFQUFPO0lBMEIzQjNuQyxFQUFRLEtBQWtCO01BQ3hCLElBQUlza0IsSUFBYStpQixFQUFZO01BQzdCLE9BQVFKLEVBQWtCM2lCLE1BQ3hCQSxJQUFhK2lCLEVBQVk7TUFFM0IsT0FBTy9pQjs7SUFHVCxJQUFJakUsSUFBWXJnQixFQUFRLEtBQVksU0FBU3NrQjtNQU0zQyxPQUpBeWlCLEVBQTZCLE9BQXRCemlCLEVBQVc1ZSxRQUFlLG9CQUNqQ3FoQyxFQUFPRSxFQUFrQjNpQixJQUFhLG9CQUcvQnNpQixFQUFPenVCLEtBQUs2RyxFQUFHdUIsZUFBZStELEdBQVlqRSxVQUFVOztJQWtEN0QsSUFBSW1vQixJQUEwQixTQUFTQyxHQUFhQztNQUNsRCxPQUFPLElBQUk3OEIsU0FBUSxTQUFTQztRQUMxQmk3QixFQUFPSCxFQUFPTSxTQUFTdUIsSUFBYyxvQkFDckMxQixFQUFPSCxFQUFPTSxTQUFTd0IsSUFBYSxtQkFDcEMzQixFQUE4QixPQUF2QjBCLEVBQVkvaUMsUUFBZSxvQkFDbENxaEMsRUFBT0UsRUFBa0J3QixJQUFjO1FBQ3ZDMUIsRUFBNkIsT0FBdEIyQixFQUFXaGpDLFVBQXVDLE9BQXRCZ2pDLEVBQVdoakMsUUFBZSxtQkFDbkMsT0FBdEJnakMsRUFBV2hqQyxVQUVicWhDLEVBQXlCLE1BQWxCMkIsRUFBVyxJQUFVLG1CQUVKLE9BQXRCQSxFQUFXaGpDLFVBRWJxaEMsRUFBeUIsTUFBbEIyQixFQUFXLE1BQThCLE1BQWxCQSxFQUFXLElBQVU7UUFFckQsSUFBSUMsSUFBTzNwQixFQUFHdUIsZUFBZWtvQjtRQUM3QixJQUFJRyxJQUFPNXBCLEVBQUdtQixjQUFjdW9CO1FBQzVCLElBQUlHLElBQUtGLEVBQUtILE9BQU9JLEVBQUt2b0I7UUFDMUJ2VSxFQUFRODZCLEVBQU96dUIsS0FBSzB3QixFQUFHQzs7O0lBc0MzQjlvQyxFQUFRLEtBQVUsU0FBU3NrQixHQUFZeWtCO01BRXJDLElBQUlDO01BQ0osT0FBT1IsRUFBT2xrQixHQUFZeWtCLEVBQUsvakIsZ0JBQWdCNVgsTUFBSyxTQUFTeTdCO1FBQzNELE9BQU9wQixFQUFPb0I7VUFDYno3QixNQUFLLFNBQVM4UTtRQVFmLE9BUEE4cUIsSUFBZ0I5cUIsRUFBSzdGLE1BQU0sR0FBRyxLQTdJbEMsU0FBMEI3UyxHQUFLa1YsR0FBS21OO1VBQ2xDLE9BQU8sSUFBSWhjLFNBQVEsU0FBU0M7WUFDMUIsSUFBSW05QixJQUFPdkMsRUFBV3dDLFdBQVcsVUFBVXRDLEVBQU96dUIsS0FBSzNTO1lBQ3ZEeWpDLEVBQUs5cUIsT0FBT3pELElBRVo1TyxFQS9FSixTQUF3QnE5QixHQUFJQztjQUMxQixJQUFJRCxFQUFHempDLFdBQVcwakMsRUFBRzFqQyxRQUNuQixRQUFPO2NBRVQsSUFBSXdMLElBQU07Y0FDVixLQUFLLElBQUl6TCxJQUFJLEdBQUdBLElBQUkwakMsRUFBR3pqQyxRQUFRRCxLQUM3QnlMLEtBQU9pNEIsRUFBRzFqQyxLQUFLMmpDLEVBQUczakM7Y0FFcEIsT0FBZSxNQUFSeUw7YUF1RUdtNEIsQ0FEVUosRUFBSzdxQixVQUNheUo7O1NBK0k3QnloQixDQU5NcHJCLEVBQUs3RixNQUFNLEtBQ1J1dUIsRUFBT3IvQixPQUFPLEVBQzVCd2hDLEVBQUs5akIsSUFDTDhqQixFQUFLL2pCLGdCQUNMK2pCLEVBQUs1akIsZUFFb0M0akIsRUFBSzdqQjtVQUMvQzlYLE1BQUssU0FBU204QjtRQUVmLE9BREF4QyxFQUFPd0MsR0FBUyxZQUNUaEIsRUFBY1EsRUFBSzlqQixJQUFJK2pCLEdBQWVELEVBQUs1akI7VUFDakQvWCxNQUFLLFNBQVNzTjtRQUNmLE9BQU9rc0IsRUFBT3p1QixLQUFLLElBQUlvdkIsV0FBVzdzQjs7Ozs7OztJQ2xRdEMsSUFBSTh1QixJQUFlLEVBQVE7SUFDM0IsU0FBU3ZnQixFQUFPd2dCLEdBQU9DO01BRW5CLFlBRGlCLE1BQWJBLE1BQXVCQSxJQUFXLFNBQ2xDOUMsRUFBT00sU0FBU3VDLEtBQ1RFLEVBQVdGLEVBQU03NEIsU0FBUyxhQUU5Qis0QixFQUFXL0MsRUFBT3p1QixLQUFLc3hCLEdBQU9DLEdBQVU5NEIsU0FBUzs7SUFPNUQsU0FBU2c1QixFQUFTQztNQUVkLE9BREFBLElBQVlBLEVBQVVqNUIsWUFDZjQ0QixFQUFhMW5DLFFBQVErbkMsR0FDdkJqZ0MsUUFBUSxPQUFPLEtBQ2ZBLFFBQVEsTUFBTTs7SUFFdkIsU0FBUysvQixFQUFXRztNQUNoQixPQUFPQSxFQUNGbGdDLFFBQVEsTUFBTSxJQUNkQSxRQUFRLE9BQU8sS0FDZkEsUUFBUSxPQUFPOztJQUt4QixJQUFJaWdDLElBQVk1Z0I7SUFDaEI0Z0IsRUFBVTVnQixTQUFTQSxHQUNuQjRnQixFQUFVRSxTQXJCVixTQUFnQkYsR0FBV0g7TUFFdkIsWUFEaUIsTUFBYkEsTUFBdUJBLElBQVcsU0FDL0I5QyxFQUFPenVCLEtBQUt5eEIsRUFBU0MsSUFBWSxVQUFVajVCLFNBQVM4NEI7T0FvQi9ERyxFQUFVRCxXQUFXQSxHQUNyQkMsRUFBVUYsYUFBYUEsR0FDdkJFLEVBQVVHLFdBUlYsU0FBa0JIO01BQ2QsT0FBT2pELEVBQU96dUIsS0FBS3l4QixFQUFTQyxJQUFZO09BUTVDN3BDLEVBQUEsVUFBa0I2cEM7Ozs7O0lDbkNsQi9wQyxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7TUFBRUMsUUFBTztRQWtCdERELEVBQUEsVUFqQkEsU0FBbUJ5cEM7TUFFZixJQUFJUSxJQUFlUixFQUFNL2pDO01BQ3pCLElBQUl3a0MsSUFBT0QsSUFGUztNQUdwQixLQUFLQyxHQUNELE9BQU9UO01BRVgsSUFBSVUsSUFBV0Y7TUFDZixJQUFJRyxJQVBnQixJQU9ZRjtNQUNoQyxJQUFJRyxJQUFxQkosSUFBZUc7TUFDeEMsSUFBSUUsSUFBUzFELEVBQU9FLE1BQU11RDtNQUUxQixLQURBQyxFQUFPL21DLE1BQU1rbUMsSUFDTlcsT0FDSEUsRUFBTy9tQyxNQUFNLEtBQUs0bUM7TUFFdEIsT0FBT0csRUFBTzE1Qjs7OztJQ2pCbEIyNUIsRUFBT3ZxQyxVQUFVLEVBQWpCLGdCQUNBdXFDLEVBQU92cUMsUUFBUCxVQUF5QnVxQyxFQUFPdnFDOzs7O0lDdUdoQyxTQUFTd3FDLEVBQWV0bUM7TUFDdEIsT0FBT3BFLE9BQU82RSxVQUFVaU0sU0FBUy9MLEtBQUtYOztJQTNFeENsRSxFQUFRNlMsVUFOUixTQUFpQnVDO01BQ2YsT0FBSXBGLE1BQU02QyxVQUNEN0MsTUFBTTZDLFFBQVF1QyxLQUVRLHFCQUF4Qm8xQixFQUFlcDFCO09BT3hCcFYsRUFBUXlxQyxZQUhSLFNBQW1CcjFCO01BQ2pCLE9BQXNCLG9CQUFSQTtPQU9oQnBWLEVBQVEwcUMsU0FIUixTQUFnQnQxQjtNQUNkLE9BQWUsU0FBUkE7T0FPVHBWLEVBQVEycUMsb0JBSFIsU0FBMkJ2MUI7TUFDekIsT0FBYyxRQUFQQTtPQU9UcFYsRUFBUTRxQyxXQUhSLFNBQWtCeDFCO01BQ2hCLE9BQXNCLG1CQUFSQTtPQU9oQnBWLEVBQVE2cUMsV0FIUixTQUFrQnoxQjtNQUNoQixPQUFzQixtQkFBUkE7T0FPaEJwVixFQUFROHFDLFdBSFIsU0FBa0IxMUI7TUFDaEIsT0FBc0IsbUJBQVJBO09BT2hCcFYsRUFBUStxQyxjQUhSLFNBQXFCMzFCO01BQ25CLFlBQWUsTUFBUkE7T0FPVHBWLEVBQVFnckMsV0FIUixTQUFrQkM7TUFDaEIsT0FBOEIsc0JBQXZCVCxFQUFlUztPQU94QmpyQyxFQUFRa3JDLFdBSFIsU0FBa0I5MUI7TUFDaEIsT0FBc0IsbUJBQVJBLEtBQTRCLFNBQVJBO09BT3BDcFYsRUFBUW1yQyxTQUhSLFNBQWdCQztNQUNkLE9BQTZCLG9CQUF0QlosRUFBZVk7T0FPeEJwckMsRUFBUXFyQyxVQUhSLFNBQWlCbDBCO01BQ2YsT0FBOEIscUJBQXRCcXpCLEVBQWVyekIsTUFBMkJBLGFBQWFoTDtPQU9qRW5NLEVBQVFzckMsYUFIUixTQUFvQmwyQjtNQUNsQixPQUFzQixxQkFBUkE7T0FZaEJwVixFQUFRdXJDLGNBUlIsU0FBcUJuMkI7TUFDbkIsT0FBZSxTQUFSQSxLQUNlLG9CQUFSQSxLQUNRLG1CQUFSQSxLQUNRLG1CQUFSQSxLQUNRLG1CQUFSQSxVQUNRLE1BQVJBO09BSWhCcFYsRUFBUWtuQyxXQUFXTixFQUFPTTs7OztJQ3RHMUIsSUFBSXRTLElBQU8sRUFBUTtJQUVuQixJQUFJbm5CLElBQU87SUFVWCxJQUFJKzlCLElBQU0sU0FBU3g2QixHQUFRKzNCLEdBQU1wbEM7TUFDaEMsSUFBb0IscUJBQVRvbEMsR0FBcUIsT0FBT3lDLEVBQUl4NkIsR0FBUSxNQUFNKzNCO01BQ3BEQSxNQUFNQSxJQUFPLEtBRWxCcGxDLElBQVdpeEIsRUFBS2p4QixLQUFZOEo7TUFFNUIsSUFBSWcrQixJQUFLejZCLEVBQU8wNkI7TUFDaEIsSUFBSUMsSUFBSzM2QixFQUFPNDZCO01BQ2hCLElBQUlwM0IsSUFBV3UwQixFQUFLdjBCLGFBQStCLE1BQWxCdTBCLEVBQUt2MEIsWUFBc0J4RCxFQUFPd0Q7TUFDbkUsSUFBSXhPLElBQVcraUMsRUFBSy9pQyxhQUErQixNQUFsQitpQyxFQUFLL2lDLFlBQXNCZ0wsRUFBT2hMO01BQ25FLElBQUk2bEMsS0FBWTtNQUVoQixJQUFJQyxJQUFpQjtRQUNmOTZCLEVBQU9oTCxZQUFVK2xDOztNQUd2QixJQUFJQSxJQUFXO1FBQ2QvbEMsS0FBVyxHQUNOd08sS0FBVTdRLEVBQVNrQixLQUFLbU07O01BRzlCLElBQUlnN0IsSUFBUTtRQUNYeDNCLEtBQVcsR0FDTnhPLEtBQVVyQyxFQUFTa0IsS0FBS21NOztNQUc5QixJQUFJaTdCLElBQVMsU0FBU0M7UUFDckJ2b0MsRUFBU2tCLEtBQUttTSxHQUFRazdCLElBQVcsSUFBSS8vQixNQUFNLDZCQUE2QisvQixLQUFZOztNQUdyRixJQUFJbFQsSUFBVSxTQUFTajFCO1FBQ3RCSixFQUFTa0IsS0FBS21NLEdBQVFqTjs7TUFHdkIsSUFBSW9vQyxJQUFVO1FBQ2JDLEVBQVFDLFNBQVNDOztNQUdsQixJQUFJQSxJQUFrQjtRQUNyQixLQUFJVCxHQUNKLFNBQUlyM0IsS0FBY20zQixLQUFPQSxFQUFHWSxVQUFVWixFQUFHYSxnQkFDckN4bUMsS0FBY3lsQyxLQUFPQSxFQUFHYyxVQUFVZCxFQUFHZSxrQkFBekMsSUFENkQ3b0MsRUFBU2tCLEtBQUttTSxHQUFRLElBQUk3RSxNQUFNOztNQUk5RixJQUFJc2dDLElBQVk7UUFDZno3QixFQUFPUSxJQUFJaFAsR0FBRyxVQUFVdXBDOztNQW9CekIsUUF6RWUsU0FBUy82QjtRQUN4QixPQUFPQSxFQUFPMDdCLGFBQXFDLHFCQUFqQjE3QixFQUFPMjdCO09BdURyQ0MsQ0FBVTU3QixLQUtIaEwsTUFBYXlsQyxNQUN2Qno2QixFQUFPeE8sR0FBRyxPQUFPc3BDLElBQ2pCOTZCLEVBQU94TyxHQUFHLFNBQVNzcEMsT0FObkI5NkIsRUFBT3hPLEdBQUcsWUFBWXVwQyxJQUN0Qi82QixFQUFPeE8sR0FBRyxTQUFTMnBDLElBQ2ZuN0IsRUFBT1EsTUFBS2k3QixNQUNYejdCLEVBQU94TyxHQUFHLFdBQVdpcUM7TUF4RFAsU0FBU3o3QjtRQUM3QixPQUFPQSxFQUFPNjdCLFNBQVM3OEIsTUFBTTZDLFFBQVE3QixFQUFPNjdCLFVBQWtDLE1BQXhCNzdCLEVBQU82N0IsTUFBTW5uQztPQTZEL0RvbkMsQ0FBZTk3QixNQUFTQSxFQUFPeE8sR0FBRyxRQUFReXBDLElBRTlDajdCLEVBQU94TyxHQUFHLE9BQU93cEMsSUFDakJoN0IsRUFBT3hPLEdBQUcsVUFBVXVwQyxLQUNELE1BQWZoRCxFQUFLbC9CLFNBQWlCbUgsRUFBT3hPLEdBQUcsU0FBU3cyQixJQUM3Q2hvQixFQUFPeE8sR0FBRyxTQUFTMnBDLElBRVo7UUFDTk4sS0FBWSxHQUNaNzZCLEVBQU90TyxlQUFlLFlBQVlxcEMsSUFDbEMvNkIsRUFBT3RPLGVBQWUsU0FBU3lwQyxJQUMvQm43QixFQUFPdE8sZUFBZSxXQUFXK3BDLElBQzdCejdCLEVBQU9RLE9BQUtSLEVBQU9RLElBQUk5TyxlQUFlLFVBQVVxcEM7UUFDcEQvNkIsRUFBT3RPLGVBQWUsT0FBT29wQyxJQUM3Qjk2QixFQUFPdE8sZUFBZSxTQUFTb3BDLElBQy9COTZCLEVBQU90TyxlQUFlLFVBQVVxcEMsSUFDaEMvNkIsRUFBT3RPLGVBQWUsUUFBUXVwQyxJQUM5Qmo3QixFQUFPdE8sZUFBZSxPQUFPc3BDO1FBQzdCaDdCLEVBQU90TyxlQUFlLFNBQVNzMkIsSUFDL0Job0IsRUFBT3RPLGVBQWUsU0FBU3lwQzs7O0lBSWpDNUIsRUFBT3ZxQyxVQUFVd3JDOzs7O0lDdkZqQmpCLEVBQU92cUMsVUFBVSxTQUFTK3NDLEVBQU14MUIsR0FBR3FOO01BQ2pDLElBQUlyTixNQUFNcU4sR0FBRyxRQUFPO01BRXBCLElBQUlyTixLQUFLcU4sS0FBaUIsbUJBQUxyTixLQUE2QixtQkFBTHFOLEdBQWU7UUFDMUQsSUFBSXJOLEVBQUVsWCxnQkFBZ0J1a0IsRUFBRXZrQixhQUFhLFFBQU87UUFFNUMsSUFBSXFGLEdBQVFELEdBQUcvRTtRQUNmLElBQUlzUCxNQUFNNkMsUUFBUTBFLElBQUk7VUFFcEIsS0FEQTdSLElBQVM2UixFQUFFN1IsV0FDR2tmLEVBQUVsZixRQUFRLFFBQU87VUFDL0IsS0FBS0QsSUFBSUMsR0FBZ0IsS0FBUkQsT0FDZixLQUFLc25DLEVBQU14MUIsRUFBRTlSLElBQUltZixFQUFFbmYsS0FBSyxRQUFPO1VBQ2pDLFFBQU87O1FBS1QsSUFBSThSLEVBQUVsWCxnQkFBZ0Iyc0MsUUFBUSxPQUFPejFCLEVBQUVuUyxXQUFXd2YsRUFBRXhmLFVBQVVtUyxFQUFFMDFCLFVBQVVyb0IsRUFBRXFvQjtRQUM1RSxJQUFJMTFCLEVBQUVMLFlBQVlwWCxPQUFPNkUsVUFBVXVTLFNBQVMsT0FBT0ssRUFBRUwsY0FBYzBOLEVBQUUxTjtRQUNyRSxJQUFJSyxFQUFFM0csYUFBYTlRLE9BQU82RSxVQUFVaU0sVUFBVSxPQUFPMkcsRUFBRTNHLGVBQWVnVSxFQUFFaFU7UUFJeEUsS0FEQWxMLEtBREFoRixJQUFPWixPQUFPWSxLQUFLNlcsSUFDTDdSLFlBQ0M1RixPQUFPWSxLQUFLa2tCLEdBQUdsZixRQUFRLFFBQU87UUFFN0MsS0FBS0QsSUFBSUMsR0FBZ0IsS0FBUkQsT0FDZixLQUFLM0YsT0FBTzZFLFVBQVVDLGVBQWVDLEtBQUsrZixHQUFHbGtCLEVBQUsrRSxLQUFLLFFBQU87UUFFaEUsS0FBS0EsSUFBSUMsR0FBZ0IsS0FBUkQsT0FBWTtVQUMzQixJQUFJRCxJQUFNOUUsRUFBSytFO1VBRWYsS0FBS3NuQyxFQUFNeDFCLEVBQUUvUixJQUFNb2YsRUFBRXBmLEtBQU8sUUFBTzs7UUFHckMsUUFBTzs7TUFJVCxPQUFPK1IsS0FBSUEsS0FBS3FOLEtBQUlBOzs7OztJQzFDdEIsTUFBTXNvQixJQUFXbDhCLEtBQ0wsU0FBWEEsS0FDa0IsbUJBQVhBLEtBQ2dCLHFCQUFoQkEsRUFBTzdOO0lBRWYrcEMsRUFBU2xuQyxXQUFXZ0wsS0FDbkJrOEIsRUFBU2w4QixPQUNXLE1BQXBCQSxFQUFPaEwsWUFDa0IscUJBQWxCZ0wsRUFBT3hOLFVBQ21CLG1CQUExQndOLEVBQU8wNkIsZ0JBRWZ3QixFQUFTMTRCLFdBQVd4RCxLQUNuQms4QixFQUFTbDhCLE9BQ1csTUFBcEJBLEVBQU93RCxZQUNpQixxQkFBakJ4RCxFQUFPcE4sU0FDbUIsbUJBQTFCb04sRUFBTzQ2QjtJQUVmc0IsRUFBU3BhLFNBQVM5aEIsS0FDakJrOEIsRUFBU2xuQyxTQUFTZ0wsTUFDbEJrOEIsRUFBUzE0QixTQUFTeEQsSUFFbkJrOEIsRUFBU0MsWUFBWW44QixLQUNwQms4QixFQUFTcGEsT0FBTzloQixNQUNhLHFCQUF0QkEsRUFBT284QixZQUVmN0MsRUFBT3ZxQyxVQUFVa3RDOzs7O0lDZGpCLElBQUlHLElBQWlCO0lBT3JCLElBQUlDLElBQW1CO0lBR3ZCLElBQUlDLElBQVUsc0JBTVZDLElBQVUscUJBS1ZDLElBQVk7SUEyQmhCLElBQUlDLElBQWU7SUFHbkIsSUFBSUMsSUFBVztJQUdmLElBQUlDLElBQWlCO0lBQ3JCQSxFQXhCaUIsMkJBd0JZQSxFQXZCWiwyQkF3QmpCQSxFQXZCYyx3QkF1QllBLEVBdEJYLHlCQXVCZkEsRUF0QmUseUJBc0JZQSxFQXJCWix5QkFzQmZBLEVBckJzQixnQ0FxQllBLEVBcEJsQiwwQkFxQmhCQSxFQXBCZ0IsMkJBb0JZO0lBQzVCQSxFQUFlTCxLQUFXSyxFQWpEWCxvQkFrRGZBLEVBaENxQiwwQkFnQ1lBLEVBaERuQixzQkFpRGRBLEVBaENrQix1QkFnQ1lBLEVBaERoQixtQkFpRGRBLEVBaERlLG9CQWdEWUEsRUFBZUosS0FDMUNJLEVBOUNhLGtCQThDWUEsRUE3Q1QscUJBOENoQkEsRUFBZUgsS0FBYUcsRUExQ1oscUJBMkNoQkEsRUExQ2Esa0JBMENZQSxFQXpDVCxxQkEwQ2hCQSxFQXhDaUIsdUJBd0NZO0lBRzdCLElBQUlDLElBQThCLG1CQUFWLEVBQUFsSSxLQUFzQixFQUFBQSxLQUFVLEVBQUFBLEVBQU83bEMsV0FBV0EsVUFBVSxFQUFBNmxDO0lBR3BGLElBQUltSSxJQUEwQixtQkFBUnY0QixRQUFvQkEsUUFBUUEsS0FBS3pWLFdBQVdBLFVBQVV5VjtJQUc1RSxJQUFJdzRCLElBQU9GLEtBQWNDLEtBQVl0MkIsU0FBUyxjQUFUQTtJQUdyQyxJQUFJdzJCLElBQTRDaHVDLE1BQVlBLEVBQVFpdUMsWUFBWWp1QztJQUdoRixJQUFJa3VDLElBQWFGLEtBQTRDekQsTUFBV0EsRUFBTzBELFlBQVkxRDtJQUczRixJQUFJNEQsSUFBZ0JELEtBQWNBLEVBQVdsdUMsWUFBWWd1QztJQUd6RCxJQUFJSSxJQUFjRCxLQUFpQk4sRUFBV3pCO0lBRzlDLElBQUlpQyxJQUFZO01BQ2Q7UUFFRSxJQUFJQyxJQUFRSixLQUFjQSxFQUFXSyxXQUFXTCxFQUFXSyxRQUFRLFFBQVFEO1FBRTNFLE9BQUlBLEtBS0dGLEtBQWVBLEVBQVlJLFdBQVdKLEVBQVlJLFFBQVE7UUFDakUsT0FBT3IzQjtLQVhJO0lBZWYsSUFBSXMzQixJQUFtQkosS0FBWUEsRUFBU0s7SUFZNUMsU0FBU3JrQyxFQUFNc2tDLEdBQU16SixHQUFTMTFCO01BQzVCLFFBQVFBLEVBQUs5SjtPQUNYLEtBQUs7UUFBRyxPQUFPaXBDLEVBQUs5cEMsS0FBS3FnQzs7T0FDekIsS0FBSztRQUFHLE9BQU95SixFQUFLOXBDLEtBQUtxZ0MsR0FBUzExQixFQUFLOztPQUN2QyxLQUFLO1FBQUcsT0FBT20vQixFQUFLOXBDLEtBQUtxZ0MsR0FBUzExQixFQUFLLElBQUlBLEVBQUs7O09BQ2hELEtBQUs7UUFBRyxPQUFPbS9CLEVBQUs5cEMsS0FBS3FnQyxHQUFTMTFCLEVBQUssSUFBSUEsRUFBSyxJQUFJQSxFQUFLOztNQUUzRCxPQUFPbS9CLEVBQUt0a0MsTUFBTTY2QixHQUFTMTFCOztJQThEN0IsSUFBSW8vQixJQUFhNStCLE1BQU1yTCxXQUNuQmtxQyxJQUFZcjNCLFNBQVM3UyxXQUNyQm1xQyxJQUFjaHZDLE9BQU82RTtJQUd6QixJQUFJb3FDLElBQWFoQixFQUFLO0lBR3RCLElBQUlpQixJQUFlSCxFQUFVaitCO0lBRzdCLElBQUloTSxJQUFpQmtxQyxFQUFZbHFDO0lBR2pDLElBQUlxcUMsSUFBYztNQUNoQixJQUFJQyxJQUFNLFNBQVNDLEtBQUtKLEtBQWNBLEVBQVdydUMsUUFBUXF1QyxFQUFXcnVDLEtBQUswdUMsWUFBWTtNQUNyRixPQUFPRixJQUFPLG1CQUFtQkEsSUFBTztLQUZ6QjtJQVVqQixJQUFJRyxJQUF1QlAsRUFBWWwrQjtJQUd2QyxJQUFJMCtCLElBQW1CTixFQUFhbnFDLEtBQUsvRTtJQUd6QyxJQUFJeXZDLElBQWF2QyxPQUFPLE1BQ3RCZ0MsRUFBYW5xQyxLQUFLRCxHQUFnQmdGLFFBN0tqQix1QkE2S3VDLFFBQ3ZEQSxRQUFRLDBEQUEwRCxXQUFXO0lBSWhGLElBQUlnOUIsSUFBU3VILElBQWdCSixFQUFLbkgsY0FBU3RpQyxHQUN2QzRQLElBQVM2NUIsRUFBSzc1QixRQUNkcXpCLElBQWF3RyxFQUFLeEcsWUFDbEJpSSxJQUFjNUksSUFBU0EsRUFBTzRJLG1CQUFjbHJDLEdBQzVDbXJDLElBL0NKLFNBQWlCZCxHQUFNeEI7TUFDckIsT0FBTyxTQUFTLzNCO1FBQ2QsT0FBT3U1QixFQUFLeEIsRUFBVS8zQjs7S0E2Q1BzNkIsQ0FBUTV2QyxPQUFPOFcsZ0JBQWdCOVcsU0FDOUM2dkMsSUFBZTd2QyxPQUFPbUUsUUFDdEI2QixJQUF1QmdwQyxFQUFZaHBDLHNCQUNuQzhwQyxJQUFTaEIsRUFBV2dCLFFBQ3BCQyxJQUFpQjM3QixJQUFTQSxFQUFPNDdCLG1CQUFjeHJDO0lBRW5ELElBQUl2RSxJQUFrQjtNQUNwQjtRQUNFLElBQUk0dUMsSUFBT29CLEdBQVVqd0MsUUFBUTtRQUU3QixPQURBNnVDLEVBQUssSUFBSSxJQUFJLEtBQ05BO1FBQ1AsT0FBT3gzQjtLQUxVO0lBU3JCLElBQUk2NEIsSUFBaUJwSixJQUFTQSxFQUFPTSxnQkFBVzVpQyxHQUM1QzJyQyxJQUFZeHlCLEtBQUt5eUIsS0FDakJDLElBQVl4b0IsS0FBS0M7SUFHckIsSUFBSWpRLElBQU1vNEIsR0FBVWhDLEdBQU0sUUFDdEJxQyxJQUFlTCxHQUFVandDLFFBQVE7SUFVckMsSUFBSXV3QyxJQUFjO01BQ2hCLFNBQVN0bUM7TUFDVCxPQUFPLFNBQVN1bUM7UUFDZCxLQUFLcEYsR0FBU29GLElBQ1osT0FBTztRQUVULElBQUlYLEdBQ0YsT0FBT0EsRUFBYVc7UUFFdEJ2bUMsRUFBT3BGLFlBQVkyckM7UUFDbkIsSUFBSWh0QyxJQUFTLElBQUl5RztRQUVqQixPQURBQSxFQUFPcEYsaUJBQVlMLEdBQ1poQjs7S0FaTTtJQXVCakIsU0FBU2l0QyxFQUFLQztNQUNaLElBQUlubkMsS0FBUyxHQUNUM0QsSUFBb0IsUUFBWDhxQyxJQUFrQixJQUFJQSxFQUFROXFDO01BRzNDLEtBREFsRixLQUFLaXdDLFdBQ0lwbkMsSUFBUTNELEtBQVE7UUFDdkIsSUFBSWdyQyxJQUFRRixFQUFRbm5DO1FBQ3BCN0ksS0FBS3FYLElBQUk2NEIsRUFBTSxJQUFJQSxFQUFNOzs7SUErRjdCLFNBQVNDLEVBQVVIO01BQ2pCLElBQUlubkMsS0FBUyxHQUNUM0QsSUFBb0IsUUFBWDhxQyxJQUFrQixJQUFJQSxFQUFROXFDO01BRzNDLEtBREFsRixLQUFLaXdDLFdBQ0lwbkMsSUFBUTNELEtBQVE7UUFDdkIsSUFBSWdyQyxJQUFRRixFQUFRbm5DO1FBQ3BCN0ksS0FBS3FYLElBQUk2NEIsRUFBTSxJQUFJQSxFQUFNOzs7SUE0RzdCLFNBQVNFLEVBQVNKO01BQ2hCLElBQUlubkMsS0FBUyxHQUNUM0QsSUFBb0IsUUFBWDhxQyxJQUFrQixJQUFJQSxFQUFROXFDO01BRzNDLEtBREFsRixLQUFLaXdDLFdBQ0lwbkMsSUFBUTNELEtBQVE7UUFDdkIsSUFBSWdyQyxJQUFRRixFQUFRbm5DO1FBQ3BCN0ksS0FBS3FYLElBQUk2NEIsRUFBTSxJQUFJQSxFQUFNOzs7SUE4RjdCLFNBQVNHLEVBQU1MO01BQ2IsSUFBSXpqQyxJQUFPdk0sS0FBS3N3QyxXQUFXLElBQUlILEVBQVVIO01BQ3pDaHdDLEtBQUs4bUMsT0FBT3Y2QixFQUFLdTZCOztJQW1HbkIsU0FBU3lKLEVBQWM5d0MsR0FBTyt3QztNQUM1QixJQUFJQyxJQUFRcCtCLEdBQVE1UyxJQUNoQml4QyxLQUFTRCxLQUFTRSxHQUFZbHhDLElBQzlCbXhDLEtBQVVILE1BQVVDLEtBQVNoSyxHQUFTam5DLElBQ3RDb3hDLEtBQVVKLE1BQVVDLE1BQVVFLEtBQVUxQyxHQUFhenVDLElBQ3JEcXhDLElBQWNMLEtBQVNDLEtBQVNFLEtBQVVDLEdBQzFDL3RDLElBQVNndUMsSUF6akJmLFNBQW1CaGhDLEdBQUdpaEM7UUFDcEIsSUFBSWxvQyxLQUFTLEdBQ1QvRixJQUFTME0sTUFBTU07UUFFbkIsUUFBU2pILElBQVFpSCxLQUNmaE4sRUFBTytGLEtBQVNrb0MsRUFBU2xvQztRQUUzQixPQUFPL0Y7T0FrakJvQmt1QyxDQUFVdnhDLEVBQU15RixRQUFRK3JDLFVBQVUsSUFDekQvckMsSUFBU3BDLEVBQU9vQztNQUVwQixLQUFLLElBQUlGLEtBQU92RixJQUNUK3dDLE1BQWFwc0MsRUFBZUMsS0FBSzVFLEdBQU91RixNQUN2QzhyQyxNQUVRLFlBQVA5ckMsS0FFQzRyQyxNQUFrQixZQUFQNXJDLEtBQTBCLFlBQVBBLE1BRTlCNnJDLE1BQWtCLFlBQVA3ckMsS0FBMEIsZ0JBQVBBLEtBQThCLGdCQUFQQSxNQUV0RGtzQyxHQUFRbHNDLEdBQUtFLE9BRWxCcEMsRUFBT0osS0FBS3NDO01BR2hCLE9BQU9sQzs7SUFZVCxTQUFTcXVDLEVBQWlCNW5DLEdBQVF2RSxHQUFLdkY7WUFDdEJxRSxNQUFWckUsTUFBd0IyeEMsR0FBRzduQyxFQUFPdkUsSUFBTXZGLFdBQzlCcUUsTUFBVnJFLE9BQXlCdUYsS0FBT3VFLE9BQ25DOG5DLEdBQWdCOW5DLEdBQVF2RSxHQUFLdkY7O0lBY2pDLFNBQVM2eEMsRUFBWS9uQyxHQUFRdkUsR0FBS3ZGO01BQ2hDLElBQUk4eEMsSUFBV2hvQyxFQUFPdkU7TUFDaEJaLEVBQWVDLEtBQUtrRixHQUFRdkUsTUFBUW9zQyxHQUFHRyxHQUFVOXhDLFlBQ3hDcUUsTUFBVnJFLEtBQXlCdUYsS0FBT3VFLE1BQ25DOG5DLEdBQWdCOW5DLEdBQVF2RSxHQUFLdkY7O0lBWWpDLFNBQVMreEMsR0FBYUMsR0FBT3pzQztNQUMzQixJQUFJRSxJQUFTdXNDLEVBQU12c0M7TUFDbkIsTUFBT0EsT0FDTCxJQUFJa3NDLEdBQUdLLEVBQU12c0MsR0FBUSxJQUFJRixJQUN2QixPQUFPRTtNQUdYLFFBQVE7O0lBWVYsU0FBU21zQyxHQUFnQjluQyxHQUFRdkUsR0FBS3ZGO01BQ3pCLGVBQVB1RixLQUFzQnpGLElBQ3hCQSxFQUFlZ0ssR0FBUXZFLEdBQUs7UUFDMUIsZUFBZ0I7UUFDaEIsYUFBYztRQUNkLE9BQVN2RjtRQUNULFdBQVk7V0FHZDhKLEVBQU92RSxLQUFPdkY7O0lBM2FsQnN3QyxFQUFLNXJDLFVBQVU4ckMsUUF2RWY7TUFDRWp3QyxLQUFLc3dDLFdBQVdWLElBQWVBLEVBQWEsUUFBUSxJQUNwRDV2QyxLQUFLOG1DLE9BQU87T0FzRWRpSixFQUFLNXJDLFVBQWtCLFNBekR2QixTQUFvQmE7TUFDbEIsSUFBSWxDLElBQVM5QyxLQUFLb1gsSUFBSXBTLGFBQWVoRixLQUFLc3dDLFNBQVN0ckM7TUFFbkQsT0FEQWhGLEtBQUs4bUMsUUFBUWhrQyxJQUFTLElBQUksR0FDbkJBO09BdURUaXRDLEVBQUs1ckMsVUFBVUgsTUEzQ2YsU0FBaUJnQjtNQUNmLElBQUl1SCxJQUFPdk0sS0FBS3N3QztNQUNoQixJQUFJVixHQUFjO1FBQ2hCLElBQUk5c0MsSUFBU3lKLEVBQUt2SDtRQUNsQixPQUFPbEMsTUFBVytwQyxTQUFpQi9vQyxJQUFZaEI7O01BRWpELE9BQU9zQixFQUFlQyxLQUFLa0ksR0FBTXZILEtBQU91SCxFQUFLdkgsVUFBT2xCO09Bc0N0RGlzQyxFQUFLNXJDLFVBQVVpVCxNQTFCZixTQUFpQnBTO01BQ2YsSUFBSXVILElBQU92TSxLQUFLc3dDO01BQ2hCLE9BQU9WLFNBQThCOXJDLE1BQWR5SSxFQUFLdkgsS0FBc0JaLEVBQWVDLEtBQUtrSSxHQUFNdkg7T0F5QjlFK3FDLEVBQUs1ckMsVUFBVWtULE1BWmYsU0FBaUJyUyxHQUFLdkY7TUFDcEIsSUFBSThNLElBQU92TSxLQUFLc3dDO01BR2hCLE9BRkF0d0MsS0FBSzhtQyxRQUFROW1DLEtBQUtvWCxJQUFJcFMsS0FBTyxJQUFJLEdBQ2pDdUgsRUFBS3ZILEtBQVE0cUMsVUFBMEI5ckMsTUFBVnJFLElBQXVCb3RDLElBQWlCcHRDLEdBQzlETztPQXVIVG13QyxFQUFVaHNDLFVBQVU4ckMsUUFwRnBCO01BQ0Vqd0MsS0FBS3N3QyxXQUFXLElBQ2hCdHdDLEtBQUs4bUMsT0FBTztPQW1GZHFKLEVBQVVoc0MsVUFBa0IsU0F2RTVCLFNBQXlCYTtNQUN2QixJQUFJdUgsSUFBT3ZNLEtBQUtzd0MsVUFDWnpuQyxJQUFRMm9DLEdBQWFqbEMsR0FBTXZIO01BRS9CLFNBQUk2RCxJQUFRLE9BSVJBLEtBRFkwRCxFQUFLckgsU0FBUyxJQUU1QnFILEVBQUtrNUIsUUFFTDJKLEVBQU8vcUMsS0FBS2tJLEdBQU0xRCxHQUFPLE1BRXpCN0ksS0FBSzhtQyxPQUNBO09BMERUcUosRUFBVWhzQyxVQUFVSCxNQTlDcEIsU0FBc0JnQjtNQUNwQixJQUFJdUgsSUFBT3ZNLEtBQUtzd0MsVUFDWnpuQyxJQUFRMm9DLEdBQWFqbEMsR0FBTXZIO01BRS9CLE9BQU82RCxJQUFRLFNBQUkvRSxJQUFZeUksRUFBSzFELEdBQU87T0EyQzdDc25DLEVBQVVoc0MsVUFBVWlULE1BL0JwQixTQUFzQnBTO01BQ3BCLE9BQU93c0MsR0FBYXh4QyxLQUFLc3dDLFVBQVV0ckMsTUFBUTtPQStCN0NtckMsRUFBVWhzQyxVQUFVa1QsTUFsQnBCLFNBQXNCclMsR0FBS3ZGO01BQ3pCLElBQUk4TSxJQUFPdk0sS0FBS3N3QyxVQUNaem5DLElBQVEyb0MsR0FBYWpsQyxHQUFNdkg7TUFRL0IsT0FOSTZELElBQVEsT0FDUjdJLEtBQUs4bUMsTUFDUHY2QixFQUFLN0osS0FBSyxFQUFDc0MsR0FBS3ZGLFFBRWhCOE0sRUFBSzFELEdBQU8sS0FBS3BKLEdBRVpPO09BeUdUb3dDLEVBQVNqc0MsVUFBVThyQyxRQXRFbkI7TUFDRWp3QyxLQUFLOG1DLE9BQU8sR0FDWjltQyxLQUFLc3dDLFdBQVc7UUFDZCxNQUFRLElBQUlQO1FBQ1osS0FBTyxLQUFLNTRCLEtBQU9nNUI7UUFDbkIsUUFBVSxJQUFJSjs7T0FrRWxCSyxFQUFTanNDLFVBQWtCLFNBckQzQixTQUF3QmE7TUFDdEIsSUFBSWxDLElBQVM0dUMsR0FBVzF4QyxNQUFNZ0YsR0FBYSxPQUFFQTtNQUU3QyxPQURBaEYsS0FBSzhtQyxRQUFRaGtDLElBQVMsSUFBSSxHQUNuQkE7T0FtRFRzdEMsRUFBU2pzQyxVQUFVSCxNQXZDbkIsU0FBcUJnQjtNQUNuQixPQUFPMHNDLEdBQVcxeEMsTUFBTWdGLEdBQUtoQixJQUFJZ0I7T0F1Q25Db3JDLEVBQVNqc0MsVUFBVWlULE1BM0JuQixTQUFxQnBTO01BQ25CLE9BQU8wc0MsR0FBVzF4QyxNQUFNZ0YsR0FBS29TLElBQUlwUztPQTJCbkNvckMsRUFBU2pzQyxVQUFVa1QsTUFkbkIsU0FBcUJyUyxHQUFLdkY7TUFDeEIsSUFBSThNLElBQU9tbEMsR0FBVzF4QyxNQUFNZ0YsSUFDeEI4aEMsSUFBT3Y2QixFQUFLdTZCO01BSWhCLE9BRkF2NkIsRUFBSzhLLElBQUlyUyxHQUFLdkYsSUFDZE8sS0FBSzhtQyxRQUFRdjZCLEVBQUt1NkIsUUFBUUEsSUFBTyxJQUFJLEdBQzlCOW1DO09Bd0dUcXdDLEVBQU1sc0MsVUFBVThyQyxRQTNFaEI7TUFDRWp3QyxLQUFLc3dDLFdBQVcsSUFBSUgsR0FDcEJud0MsS0FBSzhtQyxPQUFPO09BMEVkdUosRUFBTWxzQyxVQUFrQixTQTlEeEIsU0FBcUJhO01BQ25CLElBQUl1SCxJQUFPdk0sS0FBS3N3QyxVQUNaeHRDLElBQVN5SixFQUFhLE9BQUV2SDtNQUc1QixPQURBaEYsS0FBSzhtQyxPQUFPdjZCLEVBQUt1NkIsTUFDVmhrQztPQTBEVHV0QyxFQUFNbHNDLFVBQVVILE1BOUNoQixTQUFrQmdCO01BQ2hCLE9BQU9oRixLQUFLc3dDLFNBQVN0c0MsSUFBSWdCO09BOEMzQnFyQyxFQUFNbHNDLFVBQVVpVCxNQWxDaEIsU0FBa0JwUztNQUNoQixPQUFPaEYsS0FBS3N3QyxTQUFTbDVCLElBQUlwUztPQWtDM0JxckMsRUFBTWxzQyxVQUFVa1QsTUFyQmhCLFNBQWtCclMsR0FBS3ZGO01BQ3JCLElBQUk4TSxJQUFPdk0sS0FBS3N3QztNQUNoQixJQUFJL2pDLGFBQWdCNGpDLEdBQVc7UUFDN0IsSUFBSXdCLElBQVFwbEMsRUFBSytqQztRQUNqQixLQUFLbjVCLEtBQVF3NkIsRUFBTXpzQyxTQUFTMHNDLEtBRzFCLE9BRkFELEVBQU1qdkMsS0FBSyxFQUFDc0MsR0FBS3ZGLE1BQ2pCTyxLQUFLOG1DLFNBQVN2NkIsRUFBS3U2QixNQUNaOW1DO1FBRVR1TSxJQUFPdk0sS0FBS3N3QyxXQUFXLElBQUlGLEVBQVN1Qjs7TUFJdEMsT0FGQXBsQyxFQUFLOEssSUFBSXJTLEdBQUt2RixJQUNkTyxLQUFLOG1DLE9BQU92NkIsRUFBS3U2QixNQUNWOW1DOztJQWtJVCxJQUFJNnhDLEtBc1dKLFNBQXVCQztNQUNyQixPQUFPLFNBQVN2b0MsR0FBUXduQyxHQUFVZ0I7UUFDaEMsSUFBSWxwQyxLQUFTLEdBQ1RtcEMsSUFBVzF5QyxPQUFPaUssSUFDbEI4TCxJQUFRMDhCLEVBQVN4b0MsSUFDakJyRSxJQUFTbVEsRUFBTW5RO1FBRW5CLE1BQU9BLE9BQVU7VUFDZixJQUFJRixJQUFNcVEsRUFBTXk4QixJQUFZNXNDLE1BQVcyRDtVQUN2QyxLQUErQyxNQUEzQ2tvQyxFQUFTaUIsRUFBU2h0QyxJQUFNQSxHQUFLZ3RDLElBQy9COztRQUdKLE9BQU96b0M7O0tBblhHMG9DO0lBU2QsU0FBU0MsR0FBV3p5QztNQUNsQixPQUFhLFFBQVRBLFNBQ2VxRSxNQUFWckUsSUE3eEJRLHVCQU5MLGtCQXF5Qko0dkMsS0FBa0JBLEtBQWtCL3ZDLE9BQU9HLEtBNllyRCxTQUFtQkE7UUFDakIsSUFBSTB5QyxJQUFRL3RDLEVBQWVDLEtBQUs1RSxHQUFPNHZDLElBQ25DK0MsSUFBTTN5QyxFQUFNNHZDO1FBRWhCO1VBQ0U1dkMsRUFBTTR2QyxVQUFrQnZyQztVQUN4QixJQUFJdXVDLEtBQVc7VUFDZixPQUFPMTdCO1FBRVQsSUFBSTdULElBQVMrckMsRUFBcUJ4cUMsS0FBSzVFO1FBQ25DNHlDLE1BQ0VGLElBQ0YxeUMsRUFBTTR2QyxLQUFrQitDLFdBRWpCM3lDLEVBQU00dkM7UUFHakIsT0FBT3ZzQztPQTdaSHd2QyxDQUFVN3lDLEtBd2hCaEIsU0FBd0JBO1FBQ3RCLE9BQU9vdkMsRUFBcUJ4cUMsS0FBSzVFO09BeGhCN0J1cUMsQ0FBZXZxQzs7SUFVckIsU0FBUzh5QyxHQUFnQjl5QztNQUN2QixPQUFPK3lDLEdBQWEveUMsTUFBVXl5QyxHQUFXenlDLE1BQVVzdEM7O0lBV3JELFNBQVMwRixHQUFhaHpDO01BQ3BCLFVBQUtpckMsR0FBU2pyQyxNQW9kaEIsU0FBa0IwdUM7UUFDaEIsU0FBU00sS0FBZUEsS0FBY047T0FyZGR1RSxDQUFTanpDLFFBR25CcXJDLEdBQVdyckMsS0FBU3N2QyxJQUFhN0IsR0FDaENwMUIsS0FnbUJqQixTQUFrQnEyQjtRQUNoQixJQUFZLFFBQVJBLEdBQWM7VUFDaEI7WUFDRSxPQUFPSyxFQUFhbnFDLEtBQUs4cEM7WUFDekIsT0FBT3gzQjtVQUNUO1lBQ0UsT0FBUXczQixJQUFPO1lBQ2YsT0FBT3gzQjs7UUFFWCxPQUFPO09Bem1CYWc4QixDQUFTbHpDOztJQXNCL0IsU0FBU216QyxHQUFXcnBDO01BQ2xCLEtBQUttaEMsR0FBU25oQyxJQUNaLE9BbWRKLFNBQXNCQTtRQUNwQixJQUFJekcsSUFBUztRQUNiLElBQWMsUUFBVnlHLEdBQ0YsS0FBSyxJQUFJdkUsS0FBTzFGLE9BQU9pSyxJQUNyQnpHLEVBQU9KLEtBQUtzQztRQUdoQixPQUFPbEM7T0ExZEUrdkMsQ0FBYXRwQztNQUV0QixJQUFJdXBDLElBQVVDLEdBQVl4cEMsSUFDdEJ6RyxJQUFTO01BRWIsS0FBSyxJQUFJa0MsS0FBT3VFLElBQ0QsaUJBQVB2RSxNQUF5Qjh0QyxLQUFZMXVDLEVBQWVDLEtBQUtrRixHQUFRdkUsT0FDckVsQyxFQUFPSixLQUFLc0M7TUFHaEIsT0FBT2xDOztJQWNULFNBQVNrd0MsR0FBVXpwQyxHQUFRM0UsR0FBUXF1QyxHQUFVQyxHQUFZN2lDO01BQ25EOUcsTUFBVzNFLEtBR2ZpdEMsR0FBUWp0QyxJQUFRLFNBQVN1dUMsR0FBVW51QztRQUVqQyxJQURBcUwsTUFBVUEsSUFBUSxJQUFJZ2dDLElBQ2xCM0YsR0FBU3lJLEtBK0JqQixTQUF1QjVwQyxHQUFRM0UsR0FBUUksR0FBS2l1QyxHQUFVRyxHQUFXRixHQUFZN2lDO1VBQzNFLElBQUlraEMsSUFBVzhCLEdBQVE5cEMsR0FBUXZFLElBQzNCbXVDLElBQVdFLEdBQVF6dUMsR0FBUUksSUFDM0JzdUMsSUFBVWpqQyxFQUFNck0sSUFBSW12QztVQUV4QixJQUFJRyxHQUVGLFlBREFuQyxFQUFpQjVuQyxHQUFRdkUsR0FBS3N1QztVQUdoQyxJQUFJQyxJQUFXTCxJQUNYQSxFQUFXM0IsR0FBVTRCLEdBQVdudUMsSUFBTSxJQUFLdUUsR0FBUTNFLEdBQVF5TCxVQUMzRHZNO1VBRUosSUFBSTB2QyxTQUF3QjF2QyxNQUFieXZDO1VBRWYsSUFBSUMsR0FBVTtZQUNaLElBQUkvQyxJQUFRcCtCLEdBQVE4Z0MsSUFDaEJ2QyxLQUFVSCxLQUFTL0osR0FBU3lNLElBQzVCTSxLQUFXaEQsTUFBVUcsS0FBVTFDLEdBQWFpRjtZQUVoREksSUFBV0osR0FDUDFDLEtBQVNHLEtBQVU2QyxJQUNqQnBoQyxHQUFRay9CLEtBQ1ZnQyxJQUFXaEMsS0Ewb0JuQixTQUEyQjl4QztjQUN6QixPQUFPK3lDLEdBQWEveUMsTUFBVWkwQyxHQUFZajBDO2FBem9CN0JrMEMsQ0FBa0JwQyxLQUdsQlgsS0FDUDRDLEtBQVcsR0FDWEQsSUFxRVIsU0FBcUJ6SixHQUFROEo7Y0FDM0IsSUFBSUEsR0FDRixPQUFPOUosRUFBT2p5QjtjQUVoQixJQUFJM1MsSUFBUzRrQyxFQUFPNWtDLFFBQ2hCcEMsSUFBU2tzQyxJQUFjQSxFQUFZOXBDLEtBQVUsSUFBSTRrQyxFQUFPanFDLFlBQVlxRjtjQUd4RSxPQURBNGtDLEVBQU8vNUIsS0FBS2pOLElBQ0xBO2FBN0VVK3dDLENBQVlWLElBQVUsTUFFMUJNLEtBQ1BELEtBQVcsR0FDWEQsSUFpR1IsU0FBeUJPLEdBQVlGO2NBQ25DLElBQUk5SixJQUFTOEosSUFmZixTQUEwQkc7Z0JBQ3hCLElBQUlqeEMsSUFBUyxJQUFJaXhDLEVBQVlsMEMsWUFBWWswQyxFQUFZQztnQkFFckQsT0FEQSxJQUFJak4sRUFBV2prQyxHQUFRdVUsSUFBSSxJQUFJMHZCLEVBQVdnTixLQUNuQ2p4QztlQVllbXhDLENBQWlCSCxFQUFXaEssVUFBVWdLLEVBQVdoSztjQUN2RSxPQUFPLElBQUlnSyxFQUFXajBDLFlBQVlpcUMsR0FBUWdLLEVBQVdJLFlBQVlKLEVBQVc1dUM7YUFuRzNEaXZDLENBQWdCaEIsSUFBVSxNQUdyQ0ksSUFBVyxLQVhYQSxJQXNIUixTQUFtQjN1QyxHQUFRNnNDO2NBQ3pCLElBQUk1b0MsS0FBUyxHQUNUM0QsSUFBU04sRUFBT007Y0FFcEJ1c0MsTUFBVUEsSUFBUWppQyxNQUFNdEs7Y0FDeEIsUUFBUzJELElBQVEzRCxLQUNmdXNDLEVBQU01b0MsS0FBU2pFLEVBQU9pRTtjQUV4QixPQUFPNG9DO2FBOUhVMkMsQ0FBVTdDLEtBOHlCN0IsU0FBdUI5eEM7Y0FDckIsS0FBSyt5QyxHQUFhL3lDLE1BQVV5eUMsR0FBV3p5QyxNQUFVd3RDLEdBQy9DLFFBQU87Y0FFVCxJQUFJNkMsSUFBUWIsRUFBYXh2QztjQUN6QixJQUFjLFNBQVZxd0MsR0FDRixRQUFPO2NBRVQsSUFBSXVFLElBQU9qd0MsRUFBZUMsS0FBS3lyQyxHQUFPLGtCQUFrQkEsRUFBTWp3QztjQUM5RCxPQUFzQixxQkFBUncwQyxLQUFzQkEsYUFBZ0JBLEtBQ2xEN0YsRUFBYW5xQyxLQUFLZ3dDLE1BQVN2RjthQTF5QmxCd0YsQ0FBY25CLE1BQWF4QyxHQUFZd0MsTUFDOUNJLElBQVdoQyxHQUNQWixHQUFZWSxLQUNkZ0MsSUFxMUJSLFNBQXVCOXpDO2NBQ3JCLE9BNXRCRixTQUFvQm1GLEdBQVF5USxHQUFPOUwsR0FBUTJwQztnQkFDekMsSUFBSXFCLEtBQVNockM7Z0JBQ2JBLE1BQVdBLElBQVM7Z0JBRXBCLElBQUlWLEtBQVMsR0FDVDNELElBQVNtUSxFQUFNblE7Z0JBRW5CLFFBQVMyRCxJQUFRM0QsS0FBUTtrQkFDdkIsSUFBSUYsSUFBTXFRLEVBQU14TTtrQkFFaEIsSUFBSTBxQyxJQUFXTCxJQUNYQSxFQUFXM3BDLEVBQU92RSxJQUFNSixFQUFPSSxJQUFNQSxHQUFLdUUsR0FBUTNFLFVBQ2xEZDt1QkFFYUEsTUFBYnl2QyxNQUNGQSxJQUFXM3VDLEVBQU9JLEtBRWhCdXZDLElBQ0ZsRCxHQUFnQjluQyxHQUFRdkUsR0FBS3V1QyxLQUU3QmpDLEVBQVkvbkMsR0FBUXZFLEdBQUt1dUM7O2dCQUc3QixPQUFPaHFDO2VBcXNCQWlyQyxDQUFXLzBDLEdBQU9nMUMsR0FBT2gxQzthQXQxQmZpMUMsQ0FBY25ELEtBRWpCN0csR0FBUzZHLE9BQWF6RyxHQUFXeUcsT0FDekNnQyxJQXdRUixTQUF5QmhxQztjQUN2QixPQUFxQyxxQkFBdEJBLEVBQU8xSixlQUE4Qmt6QyxHQUFZeHBDLEtBRTVELEtBREFzbUMsRUFBV1osRUFBYTFsQzthQTFRWG9yQyxDQUFnQnhCLE9BSTdCSyxLQUFXOztVQUdYQSxNQUVGbmpDLEVBQU1nSCxJQUFJODdCLEdBQVVJLElBQ3BCSCxFQUFVRyxHQUFVSixHQUFVRixHQUFVQyxHQUFZN2lDLElBQ3BEQSxFQUFjLE9BQUU4aUM7VUFFbEJoQyxFQUFpQjVuQyxHQUFRdkUsR0FBS3V1QztTQXpGMUJxQixDQUFjcnJDLEdBQVEzRSxHQUFRSSxHQUFLaXVDLEdBQVVELElBQVdFLEdBQVk3aUMsU0FFakU7VUFDSCxJQUFJa2pDLElBQVdMLElBQ1hBLEVBQVdHLEdBQVE5cEMsR0FBUXZFLElBQU1tdUMsR0FBV251QyxJQUFNLElBQUt1RSxHQUFRM0UsR0FBUXlMLFVBQ3ZFdk07ZUFFYUEsTUFBYnl2QyxNQUNGQSxJQUFXSixJQUViaEMsRUFBaUI1bkMsR0FBUXZFLEdBQUt1dUM7O1VBRS9Ca0I7O0lBd0ZMLFNBQVNJLEdBQVMxRyxHQUFNMkc7TUFDdEIsT0FBT0MsR0E2V1QsU0FBa0I1RyxHQUFNMkcsR0FBT25JO1FBRTdCLE9BREFtSSxJQUFRckYsT0FBb0IzckMsTUFBVmd4QyxJQUF1QjNHLEVBQUtqcEMsU0FBUyxJQUFLNHZDLEdBQU8sSUFDNUQ7VUFDTCxJQUFJOWxDLElBQU96SSxXQUNQc0MsS0FBUyxHQUNUM0QsSUFBU3VxQyxFQUFVemdDLEVBQUs5SixTQUFTNHZDLEdBQU8sSUFDeENyRCxJQUFRamlDLE1BQU10SztVQUVsQixRQUFTMkQsSUFBUTNELEtBQ2Z1c0MsRUFBTTVvQyxLQUFTbUcsRUFBSzhsQyxJQUFRanNDO1VBRTlCQSxLQUFTO1VBQ1QsSUFBSW1zQyxJQUFZeGxDLE1BQU1zbEMsSUFBUTtVQUM5QixRQUFTanNDLElBQVFpc0MsS0FDZkUsRUFBVW5zQyxLQUFTbUcsRUFBS25HO1VBRzFCLE9BREFtc0MsRUFBVUYsS0FBU25JLEVBQVU4RSxJQUN0QjVuQyxFQUFNc2tDLEdBQU1udUMsTUFBTWcxQzs7T0E5WFJDLENBQVM5RyxHQUFNMkcsR0FBT0ksS0FBVy9HLElBQU87O0lBeUw3RCxTQUFTdUQsR0FBVzF3QyxHQUFLZ0U7TUFDdkIsSUFBSXVILElBQU92TCxFQUFJc3ZDO01BQ2YsT0EyR0YsU0FBbUI3d0M7UUFDakIsSUFBSXdHLFdBQWN4RztRQUNsQixPQUFnQixZQUFSd0csS0FBNEIsWUFBUkEsS0FBNEIsWUFBUkEsS0FBNEIsYUFBUkEsSUFDckQsZ0JBQVZ4RyxJQUNVLFNBQVZBO09BL0dFMDFDLENBQVVud0MsS0FDYnVILEVBQW1CLG1CQUFQdkgsSUFBa0IsV0FBVyxVQUN6Q3VILEVBQUt2TDs7SUFXWCxTQUFTdXVDLEdBQVVobUMsR0FBUXZFO01BQ3pCLElBQUl2RixJQW5oQ04sU0FBa0I4SixHQUFRdkU7UUFDeEIsT0FBaUIsUUFBVnVFLFNBQWlCekYsSUFBWXlGLEVBQU92RTtPQWtoQy9Cb3dDLENBQVM3ckMsR0FBUXZFO01BQzdCLE9BQU95dEMsR0FBYWh6QyxLQUFTQSxTQUFRcUU7O0lBbUR2QyxTQUFTb3RDLEdBQVF6eEMsR0FBT3lGO01BQ3RCLElBQUllLFdBQWN4RztNQUdsQixVQUZBeUYsSUFBbUIsUUFBVkEsSUFBaUI0bkMsSUFBbUI1bkMsT0FHbEMsWUFBUmUsS0FDVSxZQUFSQSxLQUFvQmtuQyxFQUFTcjFCLEtBQUtyWSxPQUNoQ0EsS0FBUyxLQUFLQSxJQUFRLEtBQUssS0FBS0EsSUFBUXlGOztJQTJEakQsU0FBUzZ0QyxHQUFZdHpDO01BQ25CLElBQUk0MEMsSUFBTzUwQyxLQUFTQSxFQUFNSTtNQUcxQixPQUFPSixPQUZxQixxQkFBUjQwQyxLQUFzQkEsRUFBS2x3QyxhQUFjbXFDOztJQXlFL0QsU0FBUytFLEdBQVE5cEMsR0FBUXZFO01BQ3ZCLEtBQVksa0JBQVJBLEtBQWdELHFCQUFoQnVFLEVBQU92RSxPQUloQyxlQUFQQSxHQUlKLE9BQU91RSxFQUFPdkU7O0lBV2hCLElBQUkrdkMsS0FXSixTQUFrQjVHO01BQ2hCLElBQUlrSCxJQUFRLEdBQ1JDLElBQWE7TUFFakIsT0FBTztRQUNMLElBQUlDLElBQVE1RixLQUNSNkYsSUE3NUNPLE1BNjVDaUJELElBQVFEO1FBR3BDLElBREFBLElBQWFDLEdBQ1RDLElBQVk7VUFDZCxNQUFNSCxLQWw2Q0ksS0FtNkNSLE9BQU85dUMsVUFBVTtlQUduQjh1QyxJQUFRO1FBRVYsT0FBT2xILEVBQUt0a0MsV0FBTS9GLEdBQVd5Qzs7S0EzQmZrdkMsQ0FuWktsMkMsSUFBNEIsU0FBUzR1QyxHQUFNdUg7TUFDaEUsT0FBT24yQyxFQUFlNHVDLEdBQU0sWUFBWTtRQUN0QyxlQUFnQjtRQUNoQixhQUFjO1FBQ2QsT0FBU3dILEdBQVNEO1FBQ2xCLFdBQVk7O1FBTHdCUjtJQXFleEMsU0FBUzlELEdBQUczeEMsR0FBT20yQztNQUNqQixPQUFPbjJDLE1BQVVtMkMsS0FBVW4yQyxLQUFVQSxLQUFTbTJDLEtBQVVBOztJQXFCMUQsSUFBSWpGLEtBQWM0QixHQUFnQjtNQUFhLE9BQU9oc0M7S0FBcEIsTUFBc0Nnc0MsS0FBa0IsU0FBUzl5QztNQUNqRyxPQUFPK3lDLEdBQWEveUMsTUFBVTJFLEVBQWVDLEtBQUs1RSxHQUFPLGNBQ3RENkYsRUFBcUJqQixLQUFLNUUsR0FBTzs7SUEwQnRDLElBQUk0UyxLQUFVN0MsTUFBTTZDO0lBMkJwQixTQUFTcWhDLEdBQVlqMEM7TUFDbkIsT0FBZ0IsUUFBVEEsS0FBaUJvMkMsR0FBU3AyQyxFQUFNeUYsWUFBWTRsQyxHQUFXcnJDOztJQWlEaEUsSUFBSWluQyxLQUFXOEksS0FzVWY7TUFDRSxRQUFPOztJQXBUVCxTQUFTMUUsR0FBV3JyQztNQUNsQixLQUFLaXJDLEdBQVNqckMsSUFDWixRQUFPO01BSVQsSUFBSTJ5QyxJQUFNRixHQUFXenlDO01BQ3JCLE9BQU8yeUMsS0FBT3BGLEtBMW1ESCxnQ0EwbURjb0YsS0EvbURaLDRCQSttRDZCQSxLQXJtRDdCLG9CQXFtRGdEQTs7SUE2Qi9ELFNBQVN5RCxHQUFTcDJDO01BQ2hCLE9BQXVCLG1CQUFUQSxLQUNaQSxLQUFTLEtBQUtBLElBQVEsS0FBSyxLQUFLQSxLQUFTcXRDOztJQTRCN0MsU0FBU3BDLEdBQVNqckM7TUFDaEIsSUFBSXdHLFdBQWN4RztNQUNsQixPQUFnQixRQUFUQSxNQUEwQixZQUFSd0csS0FBNEIsY0FBUkE7O0lBMkIvQyxTQUFTdXNDLEdBQWEveUM7TUFDcEIsT0FBZ0IsUUFBVEEsS0FBaUMsbUJBQVRBOztJQTZEakMsSUFBSXl1QyxLQUFlRCxJQXZuRG5CLFNBQW1CRTtNQUNqQixPQUFPLFNBQVMxdUM7UUFDZCxPQUFPMHVDLEVBQUsxdUM7O0tBcW5Ec0JxMkMsQ0FBVTdILEtBajdCaEQsU0FBMEJ4dUM7TUFDeEIsT0FBTyt5QyxHQUFhL3lDLE1BQ2xCbzJDLEdBQVNwMkMsRUFBTXlGLGFBQWFrb0MsRUFBZThFLEdBQVd6eUM7O0lBbytCMUQsU0FBU2cxQyxHQUFPbHJDO01BQ2QsT0FBT21xQyxHQUFZbnFDLEtBQVVnbkMsRUFBY2huQyxJQUFRLEtBQVFxcEMsR0FBV3JwQzs7SUFrQ3hFLElBQUl3c0MsS0F4dkJKLFNBQXdCQztNQUN0QixPQUFPbkIsSUFBUyxTQUFTdHJDLEdBQVEwc0M7UUFDL0IsSUFBSXB0QyxLQUFTLEdBQ1QzRCxJQUFTK3dDLEVBQVEvd0MsUUFDakJndUMsSUFBYWh1QyxJQUFTLElBQUkrd0MsRUFBUS93QyxJQUFTLFVBQUtwQixHQUNoRG95QyxJQUFRaHhDLElBQVMsSUFBSSt3QyxFQUFRLFVBQUtueUM7UUFXdEMsS0FUQW92QyxJQUFjOEMsRUFBUzl3QyxTQUFTLEtBQTBCLHFCQUFkZ3VDLEtBQ3ZDaHVDLEtBQVVndUMsVUFDWHB2QyxHQUVBb3lDLEtBdUlSLFNBQXdCejJDLEdBQU9vSixHQUFPVTtVQUNwQyxLQUFLbWhDLEdBQVNuaEMsSUFDWixRQUFPO1VBRVQsSUFBSXRELFdBQWM0QztVQUNsQixJQUFZLFlBQVI1QyxJQUNLeXRDLEdBQVlucUMsTUFBVzJuQyxHQUFRcm9DLEdBQU9VLEVBQU9yRSxVQUNyQyxZQUFSZSxLQUFvQjRDLEtBQVNVLEdBRXBDLE9BQU82bkMsR0FBRzduQyxFQUFPVixJQUFRcEo7VUFFM0IsUUFBTztTQWxKUTAyQyxDQUFlRixFQUFRLElBQUlBLEVBQVEsSUFBSUMsT0FDbERoRCxJQUFhaHVDLElBQVMsU0FBSXBCLElBQVlvdkMsR0FDdENodUMsSUFBUyxJQUVYcUUsSUFBU2pLLE9BQU9pSyxNQUNQVixJQUFRM0QsS0FBUTtVQUN2QixJQUFJTixJQUFTcXhDLEVBQVFwdEM7VUFDakJqRSxLQUNGb3hDLEVBQVN6c0MsR0FBUTNFLEdBQVFpRSxHQUFPcXFDOztRQUdwQyxPQUFPM3BDOztLQWt1QkM2c0MsRUFBZSxTQUFTN3NDLEdBQVEzRSxHQUFRcXVDO01BQ2xERCxHQUFVenBDLEdBQVEzRSxHQUFRcXVDOztJQXNCNUIsU0FBUzBDLEdBQVNsMkM7TUFDaEIsT0FBTztRQUNMLE9BQU9BOzs7SUFvQlgsU0FBU3kxQyxHQUFTejFDO01BQ2hCLE9BQU9BOztJQW9CVHNxQyxFQUFPdnFDLFVBQVV1MkM7Ozs7SUN4N0RqQjtLQU1DLFNBQVV4SSxHQUFNOEk7TUFDYjtNQUVJLElBTUE7UUFJSixJQUFJcHBDLElBQU87UUFDWCxJQUFJcXBDLElBQWdCO1FBQ3BCLElBQUlDLFdBQWVscEMsV0FBV2lwQyxZQUEwQmpwQyxPQUFPa2tCLGNBQWMra0IsS0FDekUsa0JBQWtCeCtCLEtBQUt6SyxPQUFPa2tCLFVBQVVpbEI7UUFHNUMsSUFBSUMsSUFBYSxFQUNiLFNBQ0EsU0FDQSxRQUNBLFFBQ0E7UUFJSixTQUFTQyxFQUFXanlDLEdBQUtreUM7VUFDckIsSUFBSXpxQyxJQUFTekgsRUFBSWt5QztVQUNqQixJQUEyQixxQkFBaEJ6cUMsRUFBTzZCLE1BQ2QsT0FBTzdCLEVBQU82QixLQUFLdEo7VUFFbkI7WUFDSSxPQUFPdVMsU0FBUzdTLFVBQVU0SixLQUFLMUosS0FBSzZILEdBQVF6SDtZQUM5QyxPQUFPa1M7WUFFTCxPQUFPO2NBQ0gsT0FBT0ssU0FBUzdTLFVBQVUwRixNQUFNQSxNQUFNcUMsR0FBUSxFQUFDekgsR0FBSzhCOzs7O1FBT3BFLFNBQVNxd0M7VUFDRHhpQyxFQUFRbkssUUFDSm1LLEVBQVFuSyxJQUFJSixRQUNadUssRUFBUW5LLElBQUlKLE1BQU11SyxHQUFTN04sYUFHM0J5USxTQUFTN1MsVUFBVTBGLE1BQU1BLE1BQU11SyxFQUFRbkssS0FBSyxFQUFDbUssR0FBUzdOLGVBRzFENk4sRUFBUXlpQyxTQUFPemlDLEVBQVF5aUM7O1FBSy9CLFNBQVNDLEVBQVdIO1VBS2hCLE9BSm1CLFlBQWZBLE1BQ0FBLElBQWEsZUFHTnZpQyxNQUFZa2lDLE1BRUcsWUFBZkssS0FBMEJKLElBQzFCSyxTQUN3Qjl5QyxNQUF4QnNRLEVBQVF1aUMsS0FDUkQsRUFBV3RpQyxHQUFTdWlDLFVBQ0o3eUMsTUFBaEJzUSxFQUFRbkssTUFDUnlzQyxFQUFXdGlDLEdBQVMsU0FFcEJuSDs7UUFNZixTQUFTOHBDLEVBQXNCQyxHQUFPQztVQUVsQyxLQUFLLElBQUloeUMsSUFBSSxHQUFHQSxJQUFJd3hDLEVBQVd2eEMsUUFBUUQsS0FBSztZQUN4QyxJQUFJMHhDLElBQWFGLEVBQVd4eEM7WUFDNUJqRixLQUFLMjJDLEtBQWUxeEMsSUFBSSt4QyxJQUNwQi9wQyxJQUNBak4sS0FBS2szQyxjQUFjUCxHQUFZSyxHQUFPQzs7VUFJOUNqM0MsS0FBS2lLLE1BQU1qSyxLQUFLOGtCOztRQUtwQixTQUFTcXlCLEVBQWdDUixHQUFZSyxHQUFPQztVQUN4RCxPQUFPO21CQUNRN2lDLE1BQVlraUMsTUFDbkJTLEVBQXNCMXlDLEtBQUtyRSxNQUFNZzNDLEdBQU9DLElBQ3hDajNDLEtBQUsyMkMsR0FBWTlzQyxNQUFNN0osTUFBTXVHOzs7UUFPekMsU0FBUzZ3QyxFQUFxQlQsR0FBWUssR0FBT0M7VUFFN0MsT0FBT0gsRUFBV0gsTUFDWFEsRUFBZ0N0dEMsTUFBTTdKLE1BQU11Rzs7UUFHdkQsU0FBUzh3QyxFQUFPcnhDLEdBQU1zeEMsR0FBY0M7VUFDbEMsSUFBSXhpQyxJQUFPL1U7VUFDWCxJQUFJdzNDO1VBQ0pGLElBQStCLFFBQWhCQSxJQUF1QixTQUFTQTtVQUUvQyxJQUFJNWpCLElBQWE7VUFPakIsU0FBUytqQixFQUF1QkM7WUFDNUIsSUFBSUMsS0FBYWxCLEVBQVdpQixNQUFhLFVBQVUxOUI7WUFFbkQsV0FBVzNNLFdBQVdpcEMsS0FBa0I1aUIsR0FBeEM7Y0FHQTtnQkFFSSxhQURBcm1CLE9BQU9pdkIsYUFBYTVJLEtBQWNpa0I7Z0JBRXBDLE9BQU9DO2NBR1Q7Z0JBQ0l2cUMsT0FBTzJnQixTQUFTNnBCLFNBQ2RDLG1CQUFtQnBrQixLQUFjLE1BQU1pa0IsSUFBWTtnQkFDdkQsT0FBT0M7OztVQUdiLFNBQVNHO1lBQ0wsSUFBSUM7WUFFSixXQUFXM3FDLFdBQVdpcEMsS0FBa0I1aUIsR0FBeEM7Y0FFQTtnQkFDSXNrQixJQUFjM3FDLE9BQU9pdkIsYUFBYTVJO2dCQUNwQyxPQUFPa2tCO2NBR1QsV0FBV0ksTUFBZ0IxQixHQUN2QjtnQkFDSSxJQUFJdUIsSUFBU3hxQyxPQUFPMmdCLFNBQVM2cEI7Z0JBQzdCLElBQUl6ZixJQUFXeWYsRUFBTzF5QyxRQUNsQjJ5QyxtQkFBbUJwa0IsS0FBYztpQkFDbkIsTUFBZDBFLE1BQ0E0ZixJQUFjLFdBQVdySixLQUFLa0osRUFBT2hnQyxNQUFNdWdCLElBQVc7Z0JBRTVELE9BQU93ZjtjQVFiLFlBSmlDOXpDLE1BQTdCaVIsRUFBSzVLLE9BQU82dEMsT0FDWkEsU0FBY2wwQyxJQUdYazBDOzs7VUFHWCxTQUFTQztZQUNMLFdBQVc1cUMsV0FBV2lwQyxLQUFrQjVpQixHQUF4QztjQUdBO2dCQUVJLFlBREFybUIsT0FBT2l2QixhQUFhdEMsV0FBV3RHO2dCQUVqQyxPQUFPa2tCO2NBR1Q7Z0JBQ0l2cUMsT0FBTzJnQixTQUFTNnBCLFNBQ2RDLG1CQUFtQnBrQixLQUFjO2dCQUNyQyxPQUFPa2tCOzs7VUFsRU8sbUJBQVQ1eEMsSUFDVDB0QixLQUFjLE1BQU0xdEIsSUFDSyxtQkFBVEEsTUFDaEIwdEIsU0FBYTV2QixJQXdFZmlSLEVBQUsvTyxPQUFPQSxHQUVaK08sRUFBSzVLLFNBQVM7WUFBRSxPQUFTO1lBQUcsT0FBUztZQUFHLE1BQVE7WUFBRyxNQUFRO1lBQ3ZELE9BQVM7WUFBRyxRQUFVO2FBRTFCNEssRUFBS21pQyxnQkFBZ0JLLEtBQVdILEdBRWhDcmlDLEVBQUttakMsV0FBVztZQUNaLE9BQU9WO2FBR1h6aUMsRUFBSzdLLFdBQVcsU0FBVThzQyxHQUFPbUI7WUFJN0IsSUFIcUIsbUJBQVZuQixVQUEyRGx6QyxNQUFyQ2lSLEVBQUs1SyxPQUFPNnNDLEVBQU1oOUIsbUJBQy9DZzlCLElBQVFqaUMsRUFBSzVLLE9BQU82c0MsRUFBTWg5QixtQkFFVCxtQkFBVmc5QixLQUFzQkEsS0FBUyxLQUFLQSxLQUFTamlDLEVBQUs1SyxPQUFPaXVDLFNBVWhFLE1BQU0sK0NBQStDcEI7WUFKckQsSUFMQVEsSUFBZVIsSUFDQyxNQUFabUIsS0FDQVYsRUFBdUJULElBRTNCRCxFQUFzQjF5QyxLQUFLMFEsR0FBTWlpQyxHQUFPaHhDLFdBQzdCb08sTUFBWWtpQyxLQUFpQlUsSUFBUWppQyxFQUFLNUssT0FBT2l1QyxRQUN4RCxPQUFPO2FBT25CcmpDLEVBQUtvbkIsa0JBQWtCLFNBQVU2YTtZQUM3Qk0sSUFBZU4sR0FDVmUsT0FDRGhqQyxFQUFLN0ssU0FBUzhzQyxJQUFPO2FBSTdCamlDLEVBQUtzakMsYUFBYTtZQUNkdGpDLEVBQUs3SyxTQUFTb3RDLElBQWMsSUFDNUJXO2FBR0psakMsRUFBSzJWLFlBQVksU0FBU3l0QjtZQUN0QnBqQyxFQUFLN0ssU0FBUzZLLEVBQUs1SyxPQUFPbXVDLE9BQU9IO2FBR3JDcGpDLEVBQUtzRCxhQUFhLFNBQVM4L0I7WUFDdkJwakMsRUFBSzdLLFNBQVM2SyxFQUFLNUssT0FBT2l1QyxRQUFRRDs7VUFJdEMsSUFBSUksSUFBZVI7VUFDQyxRQUFoQlEsTUFDQUEsSUFBZWpCLElBRW5CdmlDLEVBQUs3SyxTQUFTcXVDLElBQWM7O1FBUzlCLElBQUlDLElBQWdCLElBQUluQjtRQUV4QixJQUFJb0IsSUFBaUI7UUFDckJELEVBQWNFLFlBQVksU0FBbUIxeUM7VUFDekMsSUFBcUIsbUJBQVRBLEtBQXFDLG1CQUFUQSxLQUErQixPQUFUQSxHQUM1RCxNQUFNLElBQUltUCxVQUFVO1VBR3RCLElBQUl3akMsSUFBU0YsRUFBZXp5QztVQUs1QixPQUpLMnlDLE1BQ0hBLElBQVNGLEVBQWV6eUMsS0FBUSxJQUFJcXhDLEVBQ2xDcnhDLEdBQU13eUMsRUFBY04sWUFBWU0sRUFBY3RCLGlCQUUzQ3lCOztRQUlYLElBQUlDLFdBQWV2ckMsV0FBV2lwQyxJQUFpQmpwQyxPQUFPcEQsV0FBTW5HO1FBaUI1RCxPQWhCQTAwQyxFQUFjSyxhQUFhO1VBTXZCLGNBTFd4ckMsV0FBV2lwQyxLQUNmanBDLE9BQU9wRCxRQUFRdXVDLE1BQ2xCbnJDLE9BQU9wRCxNQUFNMnVDLElBR1ZKO1dBR1hBLEVBQWNNLGFBQWE7VUFDdkIsT0FBT0w7V0FJWEQsRUFBdUIsVUFBSUEsR0FFcEJBO2NBOVJjO0tBSHpCOzs7SUNOQSxJQUFJTyxJQUFTLEVBQVE7SUFvQnJCLFNBQVMza0IsRUFBTXRmO01BQ2IsSUFBSW93QixJQUFJO1FBQ04sT0FBSUEsRUFBRThULFNBQWU5VCxFQUFFemxDLFNBQ3ZCeWxDLEVBQUU4VCxVQUFTLEdBQ0o5VCxFQUFFemxDLFFBQVFxVixFQUFHakwsTUFBTTdKLE1BQU11Rzs7TUFHbEMsT0FEQTIrQixFQUFFOFQsVUFBUyxHQUNKOVQ7O0lBR1QsU0FBUytULEVBQVlua0M7TUFDbkIsSUFBSW93QixJQUFJO1FBQ04sSUFBSUEsRUFBRThULFFBQ0osTUFBTSxJQUFJcnRDLE1BQU11NUIsRUFBRWdVO1FBRXBCLE9BREFoVSxFQUFFOFQsVUFBUyxHQUNKOVQsRUFBRXpsQyxRQUFRcVYsRUFBR2pMLE1BQU03SixNQUFNdUc7O01BRWxDLElBQUlQLElBQU84TyxFQUFHOU8sUUFBUTtNQUd0QixPQUZBay9CLEVBQUVnVSxZQUFZbHpDLElBQU8sdUNBQ3JCay9CLEVBQUU4VCxVQUFTLEdBQ0o5VDs7SUF2Q1Q2RSxFQUFPdnFDLFVBQVV1NUMsRUFBTzNrQixJQUN4QjJWLEVBQU92cUMsUUFBUTI1QyxTQUFTSixFQUFPRSxJQUUvQjdrQixFQUFLMGIsUUFBUTFiLEdBQUs7TUFDaEI5MEIsT0FBT0MsZUFBZXlYLFNBQVM3UyxXQUFXLFFBQVE7UUFDaEQxRSxPQUFPO1VBQ0wsT0FBTzIwQixFQUFLcDBCOztRQUVkdUYsZUFBYztVQUdoQmpHLE9BQU9DLGVBQWV5WCxTQUFTN1MsV0FBVyxjQUFjO1FBQ3REMUUsT0FBTztVQUNMLE9BQU93NUMsRUFBV2o1Qzs7UUFFcEJ1RixlQUFjOzs7Ozs7O1NDZEssTUFBWnFtQyxNQUNOQSxFQUFRemEsV0FDMEIsTUFBbkN5YSxFQUFRemEsUUFBUWhzQixRQUFRLFVBQ1csTUFBbkN5bUMsRUFBUXphLFFBQVFoc0IsUUFBUSxVQUFxRCxNQUFyQ3ltQyxFQUFRemEsUUFBUWhzQixRQUFRLFdBQ2xFNGtDLEVBQU92cUMsVUFBVTtNQUFFcXNDLFVBS3JCLFNBQWtCLzJCLEdBQUlza0MsR0FBTUMsR0FBTUM7UUFDaEMsSUFBa0IscUJBQVB4a0MsR0FDVCxNQUFNLElBQUlLLFVBQVU7UUFFdEIsSUFBSXhGLElBQU1wSixVQUFVckI7UUFDcEIsSUFBSThKLEdBQU0vSjtRQUNWLFFBQVEwSztTQUNSLEtBQUs7U0FDTCxLQUFLO1VBQ0gsT0FBT2k4QixFQUFRQyxTQUFTLzJCOztTQUMxQixLQUFLO1VBQ0gsT0FBTzgyQixFQUFRQyxVQUFTO1lBQ3RCLzJCLEVBQUd6USxLQUFLLE1BQU0rMEM7OztTQUVsQixLQUFLO1VBQ0gsT0FBT3hOLEVBQVFDLFVBQVM7WUFDdEIvMkIsRUFBR3pRLEtBQUssTUFBTSswQyxHQUFNQzs7O1NBRXhCLEtBQUs7VUFDSCxPQUFPek4sRUFBUUMsVUFBUztZQUN0Qi8yQixFQUFHelEsS0FBSyxNQUFNKzBDLEdBQU1DLEdBQU1DOzs7U0FFOUI7VUFHRSxLQUZBdHFDLElBQU8sSUFBSVEsTUFBTUcsSUFBTSxJQUN2QjFLLElBQUksR0FDR0EsSUFBSStKLEVBQUs5SixVQUNkOEosRUFBSy9KLE9BQU9zQixVQUFVdEI7VUFFeEIsT0FBTzJtQyxFQUFRQyxVQUFTO1lBQ3RCLzJCLEVBQUdqTCxNQUFNLE1BQU1tRjs7OztRQWhDbkIrNkIsRUFBT3ZxQyxVQUFVb3NDOzs7O0lDUm5CLElBQUl4WCxJQUFPLEVBQVE7SUFDbkIsSUFBSTRXLElBQU0sRUFBUTtJQUNsQixJQUFJdU8sSUFBSyxFQUFRO0lBRWpCLElBQUl0c0MsSUFBTztJQUNYLElBQUl1c0MsSUFBVSxTQUFTMWhDLEtBQUs4ekIsRUFBUXphO0lBRXBDLElBQUlzb0IsSUFBTyxTQUFVM2tDO01BQ25CLE9BQXFCLHFCQUFQQTs7SUFhaEIsSUFBSTRrQyxJQUFZLFNBQVVscEMsR0FBUW1wQyxHQUFTQyxHQUFTejJDO01BQ2xEQSxJQUFXaXhCLEVBQUtqeEI7TUFFaEIsSUFBSTAwQixLQUFTO01BQ2JybkIsRUFBT3hPLEdBQUcsVUFBUztRQUNqQjYxQixLQUFTO1dBR1htVCxFQUFJeDZCLEdBQVE7UUFBQ3dELFVBQVUybEM7UUFBU24wQyxVQUFVbzBDO1VBQVUsU0FBVXIyQztRQUM1RCxJQUFJQSxHQUFLLE9BQU9KLEVBQVNJO1FBQ3pCczBCLEtBQVMsR0FDVDEwQjs7TUFHRixJQUFJNm9DLEtBQVk7TUFDaEIsT0FBTyxTQUFVem9DO1FBQ2YsS0FBSXMwQixNQUNBbVUsR0FHSixPQUZBQSxLQUFZLEdBNUJMLFNBQVV4N0I7VUFDbkIsU0FBS2dwQyxPQUNBRCxNQUNHL29DLGNBQW1CK29DLEVBQUdNLGNBQWM1c0MsTUFBU3VELGNBQW1CK29DLEVBQUdPLGVBQWU3c0MsT0FBVXdzQyxFQUFLanBDLEVBQU80ZjtTQTJCMUcycEIsQ0FBS3ZwQyxLQUFnQkEsRUFBTzRmLE1BQU1uakIsS0F4QjFCLFNBQVV1RDtVQUN4QixPQUFPQSxFQUFPMDdCLGFBQWF1TixFQUFLanBDLEVBQU8yN0I7U0F3QmpDQyxDQUFVNTdCLEtBQWdCQSxFQUFPMjdCLFVBRWpDc04sRUFBS2pwQyxFQUFPMEQsV0FBaUIxRCxFQUFPMEQsaUJBRXhDL1EsRUFBU0ksS0FBTyxJQUFJb0ksTUFBTTs7O0lBSTlCLElBQUl0SCxJQUFPLFNBQVV5UTtNQUNuQkE7O0lBR0YsSUFBSW5TLElBQU8sU0FBVWdWLEdBQU1xaUM7TUFDekIsT0FBT3JpQyxFQUFLaFYsS0FBS3EzQzs7SUEwQm5CalEsRUFBT3ZxQyxVQXZCSTtNQUNULElBQUl5NkMsSUFBVXpxQyxNQUFNckwsVUFBVTBULE1BQU14VCxLQUFLa0M7TUFDekMsSUFBSXBELElBQVdzMkMsRUFBS1EsRUFBUUEsRUFBUS8wQyxTQUFTLE1BQU0rSCxNQUFTZ3RDLEVBQVF4VSxTQUFTeDRCO01BRzdFLElBREl1QyxNQUFNNkMsUUFBUTRuQyxFQUFRLFFBQUtBLElBQVVBLEVBQVEsS0FDN0NBLEVBQVEvMEMsU0FBUyxHQUFHLE1BQU0sSUFBSXlHLE1BQU07TUFFeEMsSUFBSXRDO01BQ0osSUFBSTZ3QyxJQUFXRCxFQUFRajVDLEtBQUksU0FBVXdQLEdBQVF2TDtRQUMzQyxJQUFJMDBDLElBQVUxMEMsSUFBSWcxQyxFQUFRLzBDLFNBQVM7UUFFbkMsT0FBT3cwQyxFQUFVbHBDLEdBQVFtcEMsR0FEWDEwQyxJQUFJLElBQ3lCLFNBQVUxQjtVQUM5QzhGLE1BQU9BLElBQVE5RixJQUNoQkEsS0FBSzIyQyxFQUFTLzVDLFFBQVFrRSxJQUN0QnMxQyxNQUNKTyxFQUFTLzVDLFFBQVFrRSxJQUNqQmxCLEVBQVNrRzs7O01BSWIsT0FBTzR3QyxFQUFReGdDLE9BQU85Vzs7OztJQzlFeEIsSUFBSXlOLElBQVcsR0FBR0E7SUFFbEIyNUIsRUFBT3ZxQyxVQUFVZ1EsTUFBTTZDLFdBQVcsU0FBVXhDO01BQzFDLE9BQTZCLG9CQUF0Qk8sRUFBUy9MLEtBQUt3TDs7Ozs7SUMyQnZCLElBQUlzcUMsSUFBTSxFQUFRO0lBSWxCLElBQUlDLElBQWE5NkMsT0FBT1ksUUFBUSxTQUFVdUU7TUFDeEMsSUFBSXZFLElBQU87TUFDWCxLQUFLLElBQUk4RSxLQUFPUCxHQUNkdkUsRUFBS3dDLEtBQUtzQztNQUNYLE9BQU85RTs7SUFJVjZwQyxFQUFPdnFDLFVBQVU4QztJQUdqQixJQUFJKzNDLElBQU8vNkMsT0FBT21FLE9BQU8sRUFBUTtJQUNqQzQyQyxFQUFLQyxXQUFXLEVBQVE7SUFHeEIsSUFBSUMsSUFBVyxFQUFRO0lBQ3ZCLElBQUlDLElBQVcsRUFBUTtJQUV2QkgsRUFBS0MsU0FBU2g0QyxHQUFRaTRDO0lBSXBCLElBQUlyNkMsSUFBT2s2QyxFQUFXSSxFQUFTcjJDO0lBQy9CLEtBQUssSUFBSStnQixJQUFJLEdBQUdBLElBQUlobEIsRUFBS2dGLFFBQVFnZ0IsS0FBSztNQUNwQyxJQUFJaFosSUFBU2hNLEVBQUtnbEI7TUFDYjVpQixFQUFPNkIsVUFBVStILE9BQVM1SixFQUFPNkIsVUFBVStILEtBQVVzdUMsRUFBU3IyQyxVQUFVK0g7O0lBSWpGLFNBQVM1SixFQUFPTztNQUNkLE1BQU03QyxnQkFBZ0JzQyxJQUFTLE9BQU8sSUFBSUEsRUFBT087TUFFakQwM0MsRUFBU2wyQyxLQUFLckUsTUFBTTZDLElBQ3BCMjNDLEVBQVNuMkMsS0FBS3JFLE1BQU02QyxJQUVoQkEsTUFBZ0MsTUFBckJBLEVBQVFtUixhQUFvQmhVLEtBQUtnVSxZQUFXLElBRXZEblIsTUFBZ0MsTUFBckJBLEVBQVEyQyxhQUFvQnhGLEtBQUt3RixZQUFXO01BRTNEeEYsS0FBS3k2QyxpQkFBZ0IsR0FDakI1M0MsTUFBcUMsTUFBMUJBLEVBQVE0M0Msa0JBQXlCejZDLEtBQUt5NkMsaUJBQWdCLElBRXJFejZDLEtBQUtvMEIsS0FBSyxPQUFPb1g7O0lBY25CLFNBQVNBO01BR0h4ckMsS0FBS3k2QyxpQkFBaUJ6NkMsS0FBS2tyQyxlQUFlYSxTQUk5Q29PLEVBQUl0TyxTQUFTNk8sR0FBUzE2Qzs7SUFHeEIsU0FBUzA2QyxFQUFRM2xDO01BQ2ZBLEVBQUtuRTs7SUF0QlB0UixPQUFPQyxlQUFlK0MsRUFBTzZCLFdBQVcseUJBQXlCO01BSS9ESixhQUFZO01BQ1pDLEtBQUs7UUFDSCxPQUFPaEUsS0FBS2tyQyxlQUFleVA7O1FBbUIvQnI3QyxPQUFPQyxlQUFlK0MsRUFBTzZCLFdBQVcsYUFBYTtNQUNuREgsS0FBSztRQUNILFlBQTRCRixNQUF4QjlELEtBQUtvckMsdUJBQXdEdG5DLE1BQXhCOUQsS0FBS2tyQyxtQkFHdkNsckMsS0FBS29yQyxlQUFlWSxhQUFhaHNDLEtBQUtrckMsZUFBZWM7O01BRTlEMzBCLEtBQUssU0FBVTVYO2FBR2VxRSxNQUF4QjlELEtBQUtvckMsdUJBQXdEdG5DLE1BQXhCOUQsS0FBS2tyQyxtQkFNOUNsckMsS0FBS29yQyxlQUFlWSxZQUFZdnNDLEdBQ2hDTyxLQUFLa3JDLGVBQWVjLFlBQVl2c0M7O1FBSXBDNkMsRUFBTzZCLFVBQVViLFdBQVcsU0FBVUMsR0FBS21CO01BQ3pDMUUsS0FBSzBDLEtBQUssT0FDVjFDLEtBQUs0USxPQUVMdXBDLEVBQUl0TyxTQUFTbm5DLEdBQUluQjs7Ozs7SUN0R25Cd21DLEVBQU92cUMsVUFBVW83QztJQUVqQixJQUFJQyxJQUFZLEVBQVE7SUFHeEIsSUFBSVIsSUFBTy82QyxPQUFPbUUsT0FBTyxFQUFRO0lBTWpDLFNBQVNtM0MsRUFBWS8zQztNQUNuQixNQUFNN0MsZ0JBQWdCNDZDLElBQWMsT0FBTyxJQUFJQSxFQUFZLzNDO01BRTNEZzRDLEVBQVV4MkMsS0FBS3JFLE1BQU02Qzs7SUFSdkJ3M0MsRUFBS0MsV0FBVyxFQUFRLFFBR3hCRCxFQUFLQyxTQUFTTSxHQUFhQyxJQVEzQkQsRUFBWXoyQyxVQUFVeW9DLGFBQWEsU0FBVTNwQyxHQUFPaW1DLEdBQVV4a0M7TUFDNURBLEVBQUcsTUFBTXpCOzs7Ozs7SUNwQlgsSUFBSWszQyxJQUFNLEVBQVE7SUFHbEJwUSxFQUFPdnFDLFVBQVUrNkM7SUFHakIsSUFBSWxvQyxJQUFVLEVBQVE7SUFJdEIsSUFBSS9QO0lBR0ppNEMsRUFBU08sZ0JBQWdCQTtJQUdoQjtJQUVULElBQUlDLElBQWtCLFNBQVVycUIsR0FBU3pxQjtNQUN2QyxPQUFPeXFCLEVBQVE5Z0IsVUFBVTNKLEdBQU1mOztJQUtqQyxJQUFJODFDLElBQVMsRUFBUTtJQUtyQixJQUFJNVUsSUFBUztJQUNiLElBQUk2VSxJQUFnQixFQUFBOVYsRUFBTzRCLGNBQWM7SUFXekMsSUFBSXNULElBQU8vNkMsT0FBT21FLE9BQU8sRUFBUTtJQUNqQzQyQyxFQUFLQyxXQUFXLEVBQVE7SUFJeEIsSUFBSVksSUFBWSxFQUFRO0lBQ3hCLElBQUlwMkIsU0FBUTtJQUVWQSxJQURFbzJCLEtBQWFBLEVBQVVDLFdBQ2pCRCxFQUFVQyxTQUFTLFlBRW5CO0lBSVYsSUFBSUMsSUFBYSxFQUFRO0lBQ3pCLElBQUlDLElBQWMsRUFBUTtJQUMxQixJQUFJQztJQUVKakIsRUFBS0MsU0FBU0MsR0FBVVM7SUFFeEIsSUFBSU8sSUFBZSxFQUFDLFNBQVMsU0FBUyxXQUFXLFNBQVM7SUFjMUQsU0FBU1QsRUFBY2o0QyxHQUFTMk47TUFHOUIzTixJQUFVQSxLQUFXO01BT3JCLElBQUkyNEMsSUFBV2hyQyxjQVRmbE8sSUFBU0EsS0FBVSxFQUFRO01BYTNCdEMsS0FBS3dDLGVBQWVLLEVBQVFMLFlBRXhCZzVDLE1BQVV4N0MsS0FBS3dDLGFBQWF4QyxLQUFLd0MsZ0JBQWdCSyxFQUFRNDRDO01BSTdELElBQUlDLElBQU03NEMsRUFBUTgzQztNQUNsQixJQUFJZ0IsSUFBYzk0QyxFQUFRKzRDO01BQzFCLElBQUlDLElBQWE3N0MsS0FBS3dDLGFBQWEsS0FBSztNQUVsQnhDLEtBQUsyNkMsZ0JBQXZCZSxLQUFlLE1BQVJBLElBQWdDQSxJQUFhRixNQUFhRyxLQUErQixNQUFoQkEsS0FBeUNBLElBQXNDRSxHQUduSzc3QyxLQUFLMjZDLGdCQUFnQjE5QixLQUFLQyxNQUFNbGQsS0FBSzI2QztNQUtyQzM2QyxLQUFLOHBDLFNBQVMsSUFBSXNSLEdBQ2xCcDdDLEtBQUtrRixTQUFTLEdBQ2RsRixLQUFLODdDLFFBQVEsTUFDYjk3QyxLQUFLKzdDLGFBQWEsR0FDbEIvN0MsS0FBS2c4QyxVQUFVLE1BQ2ZoOEMsS0FBSytyQyxTQUFRLEdBQ2IvckMsS0FBS2k4QyxjQUFhO01BQ2xCajhDLEtBQUsyNUMsV0FBVSxHQU1mMzVDLEtBQUtrOEMsUUFBTyxHQUlabDhDLEtBQUttOEMsZ0JBQWUsR0FDcEJuOEMsS0FBS284QyxtQkFBa0IsR0FDdkJwOEMsS0FBS3E4QyxxQkFBb0IsR0FDekJyOEMsS0FBS3M4QyxtQkFBa0I7TUFHdkJ0OEMsS0FBS2dzQyxhQUFZLEdBS2pCaHNDLEtBQUt1OEMsa0JBQWtCMTVDLEVBQVEwNUMsbUJBQW1CLFFBR2xEdjhDLEtBQUt3OEMsYUFBYSxHQUdsQng4QyxLQUFLeThDLGVBQWMsR0FFbkJ6OEMsS0FBSzA4QyxVQUFVO01BQ2YxOEMsS0FBS2twQyxXQUFXLE1BQ1pybUMsRUFBUXFtQyxhQUNMb1MsTUFBZUEsSUFBZ0IsYUFDcEN0N0MsS0FBSzA4QyxVQUFVLElBQUlwQixFQUFjejRDLEVBQVFxbUMsV0FDekNscEMsS0FBS2twQyxXQUFXcm1DLEVBQVFxbUM7O0lBSTVCLFNBQVNxUixFQUFTMTNDO01BR2hCLElBRkFQLElBQVNBLEtBQVUsRUFBUSxVQUVyQnRDLGdCQUFnQnU2QyxJQUFXLE9BQU8sSUFBSUEsRUFBUzEzQztNQUVyRDdDLEtBQUtvckMsaUJBQWlCLElBQUkwUCxFQUFjajRDLEdBQVM3QyxPQUdqREEsS0FBS2dVLFlBQVcsR0FFWm5SLE1BQzBCLHFCQUFqQkEsRUFBUTROLFNBQXFCelEsS0FBS29ELFFBQVFQLEVBQVE0TixPQUU5QixxQkFBcEI1TixFQUFRcVIsWUFBd0JsVSxLQUFLc0QsV0FBV1QsRUFBUXFSO01BR3JFOG1DLEVBQU8zMkMsS0FBS3JFOztJQTJEZCxTQUFTMjhDLEVBQWlCbnNDLEdBQVF2TixHQUFPaW1DLEdBQVUwVCxHQUFZQztNQUM3RCxJQUFJcDhDLElBQVErUCxFQUFPNDZCO01BS2pCLElBQUkxN0I7TUFKUSxTQUFWek0sS0FDRnhDLEVBQU1rNUMsV0FBVSxHQTBOcEIsU0FBb0JucEMsR0FBUS9QO1FBQzFCLElBQUlBLEVBQU1zckMsT0FBTztRQUNqQixJQUFJdHJDLEVBQU1pOEMsU0FBUztVQUNqQixJQUFJejVDLElBQVF4QyxFQUFNaThDLFFBQVE5ckM7VUFDdEIzTixLQUFTQSxFQUFNaUMsV0FDakJ6RSxFQUFNcXBDLE9BQU9wbkMsS0FBS08sSUFDbEJ4QyxFQUFNeUUsVUFBVXpFLEVBQU0rQixhQUFhLElBQUlTLEVBQU1pQzs7UUFHakR6RSxFQUFNc3JDLFNBQVEsR0FHZCtRLEVBQWF0c0M7T0FyT1h1c0MsQ0FBV3ZzQyxHQUFRL1AsT0FHZG84QyxNQUFnQm50QyxJQTJDekIsU0FBc0JqUCxHQUFPd0M7UUFDM0IsSUFBSXlNO1NBcFBOLFNBQXVCakw7VUFDckIsT0FBTzJoQyxFQUFPTSxTQUFTamlDLE1BQVFBLGFBQWV3MkM7VUFvUHpDK0IsQ0FBYy81QyxNQUEyQixtQkFBVkEsVUFBZ0NhLE1BQVZiLEtBQXdCeEMsRUFBTStCLGVBQ3RGa04sSUFBSyxJQUFJeUYsVUFBVTtRQUVyQixPQUFPekY7T0FoRHFCdXRDLENBQWF4OEMsR0FBT3dDLEtBQzFDeU0sSUFDRmMsRUFBTzVPLEtBQUssU0FBUzhOLEtBQ1pqUCxFQUFNK0IsY0FBY1MsS0FBU0EsRUFBTWlDLFNBQVMsS0FDaEMsbUJBQVZqQyxLQUF1QnhDLEVBQU0rQixjQUFjbEQsT0FBTzhXLGVBQWVuVCxPQUFXbWpDLEVBQU9qaUMsY0FDNUZsQixJQWhOUixTQUE2QkE7UUFDM0IsT0FBT21qQyxFQUFPenVCLEtBQUsxVTtPQStNTGk2QyxDQUFvQmo2QyxLQUcxQjI1QyxJQUNFbjhDLEVBQU13N0MsYUFBWXpyQyxFQUFPNU8sS0FBSyxTQUFTLElBQUkrSixNQUFNLHVDQUEwQ3d4QyxFQUFTM3NDLEdBQVEvUCxHQUFPd0MsSUFBTyxLQUNySHhDLEVBQU1zckMsUUFDZnY3QixFQUFPNU8sS0FBSyxTQUFTLElBQUkrSixNQUFNLCtCQUUvQmxMLEVBQU1rNUMsV0FBVTtNQUNabDVDLEVBQU1pOEMsWUFBWXhULEtBQ3BCam1DLElBQVF4QyxFQUFNaThDLFFBQVEzNUMsTUFBTUUsSUFDeEJ4QyxFQUFNK0IsY0FBK0IsTUFBakJTLEVBQU1pQyxTQUFjaTRDLEVBQVMzc0MsR0FBUS9QLEdBQU93QyxJQUFPLEtBQVltNkMsRUFBYzVzQyxHQUFRL1AsTUFFN0cwOEMsRUFBUzNzQyxHQUFRL1AsR0FBT3dDLElBQU8sT0FHekIyNUMsTUFDVm44QyxFQUFNazVDLFdBQVU7TUFJcEIsT0FnQ0YsU0FBc0JsNUM7UUFDcEIsUUFBUUEsRUFBTXNyQyxVQUFVdHJDLEVBQU0wN0MsZ0JBQWdCMTdDLEVBQU15RSxTQUFTekUsRUFBTWs2QyxpQkFBa0MsTUFBakJsNkMsRUFBTXlFO09BakNuRm00QyxDQUFhNThDOztJQUd0QixTQUFTMDhDLEVBQVMzc0MsR0FBUS9QLEdBQU93QyxHQUFPMjVDO01BQ2xDbjhDLEVBQU11N0MsV0FBNEIsTUFBakJ2N0MsRUFBTXlFLFdBQWlCekUsRUFBTXk3QyxRQUNoRDFyQyxFQUFPNU8sS0FBSyxRQUFRcUIsSUFDcEJ1TixFQUFPQyxLQUFLLE9BR1poUSxFQUFNeUUsVUFBVXpFLEVBQU0rQixhQUFhLElBQUlTLEVBQU1pQyxRQUN6QzAzQyxJQUFZbjhDLEVBQU1xcEMsT0FBT3dULFFBQVFyNkMsS0FBWXhDLEVBQU1xcEMsT0FBT3BuQyxLQUFLTztNQUUvRHhDLEVBQU0wN0MsZ0JBQWNXLEVBQWF0c0MsS0FFdkM0c0MsRUFBYzVzQyxHQUFRL1A7O0lBdkd4Qm5CLE9BQU9DLGVBQWVnN0MsRUFBU3AyQyxXQUFXLGFBQWE7TUFDckRILEtBQUs7UUFDSCxZQUE0QkYsTUFBeEI5RCxLQUFLb3JDLGtCQUdGcHJDLEtBQUtvckMsZUFBZVk7O01BRTdCMzBCLEtBQUssU0FBVTVYO1FBR1JPLEtBQUtvckMsbUJBTVZwckMsS0FBS29yQyxlQUFlWSxZQUFZdnNDOztRQUlwQzg2QyxFQUFTcDJDLFVBQVUrUCxVQUFVbW5DLEVBQVlubkMsU0FDekNxbUMsRUFBU3AyQyxVQUFVbzVDLGFBQWFsQyxFQUFZbUMsV0FDNUNqRCxFQUFTcDJDLFVBQVViLFdBQVcsU0FBVUMsR0FBS21CO01BQzNDMUUsS0FBSzBDLEtBQUssT0FDVmdDLEVBQUduQjtPQU9MZzNDLEVBQVNwMkMsVUFBVXpCLE9BQU8sU0FBVU8sR0FBT2ltQztNQUN6QyxJQUFJem9DLElBQVFULEtBQUtvckM7TUFDakIsSUFBSXlSO01BZUosT0FiS3A4QyxFQUFNK0IsYUFVVHE2QyxLQUFpQixJQVRJLG1CQUFWNTVDLE9BQ1RpbUMsSUFBV0EsS0FBWXpvQyxFQUFNODdDLHFCQUNaOTdDLEVBQU15b0MsYUFDckJqbUMsSUFBUW1qQyxFQUFPenVCLEtBQUsxVSxHQUFPaW1DO01BQzNCQSxJQUFXLEtBRWIyVCxLQUFpQixJQU1kRixFQUFpQjM4QyxNQUFNaUQsR0FBT2ltQyxJQUFVLEdBQU8yVDtPQUl4RHRDLEVBQVNwMkMsVUFBVW01QyxVQUFVLFNBQVVyNkM7TUFDckMsT0FBTzA1QyxFQUFpQjM4QyxNQUFNaUQsR0FBTyxPQUFNLElBQU07T0F3RW5EczNDLEVBQVNwMkMsVUFBVXM1QyxXQUFXO01BQzVCLFFBQXVDLE1BQWhDejlDLEtBQUtvckMsZUFBZTRRO09BSTdCekIsRUFBU3AyQyxVQUFVdTVDLGNBQWMsU0FBVUM7TUFJekMsT0FIS3JDLE1BQWVBLElBQWdCLGFBQ3BDdDdDLEtBQUtvckMsZUFBZXNSLFVBQVUsSUFBSXBCLEVBQWNxQyxJQUNoRDM5QyxLQUFLb3JDLGVBQWVsQyxXQUFXeVUsR0FDeEIzOUM7O0lBSVQsSUFBSTQ5QyxJQUFVO0lBb0JkLFNBQVNDLEVBQWMvdEMsR0FBR3JQO01BQ3hCLE9BQUlxUCxLQUFLLEtBQXNCLE1BQWpCclAsRUFBTXlFLFVBQWdCekUsRUFBTXNyQyxRQUFjLElBQ3BEdHJDLEVBQU0rQixhQUFtQixJQUN6QnNOLEtBQU1BLElBRUpyUCxFQUFNdTdDLFdBQVd2N0MsRUFBTXlFLFNBQWV6RSxFQUFNcXBDLE9BQU90UCxLQUFLanVCLEtBQUtySCxTQUFtQnpFLEVBQU15RSxVQUd4RjRLLElBQUlyUCxFQUFNazZDLGtCQUFlbDZDLEVBQU1rNkMsZ0JBM0JyQyxTQUFpQzdxQztRQWMvQixPQWJJQSxLQUFLOHRDLElBQ1A5dEMsSUFBSTh0QyxLQUlKOXRDLEtBQ0FBLEtBQUtBLE1BQU0sR0FDWEEsS0FBS0EsTUFBTSxHQUNYQSxLQUFLQSxNQUFNLEdBQ1hBLEtBQUtBLE1BQU0sR0FDWEEsS0FBS0EsTUFBTSxJQUNYQSxNQUVLQTtPQWE0Q2d1QyxDQUF3Qmh1QyxLQUN2RUEsS0FBS3JQLEVBQU15RSxTQUFlNEssSUFFekJyUCxFQUFNc3JDLFFBSUp0ckMsRUFBTXlFLFVBSFh6RSxFQUFNMDdDLGdCQUFlLEdBQ2Q7O0lBNEhYLFNBQVNXLEVBQWF0c0M7TUFDcEIsSUFBSS9QLElBQVErUCxFQUFPNDZCO01BQ25CM3FDLEVBQU0wN0MsZ0JBQWUsR0FDaEIxN0MsRUFBTTI3QyxvQkFDVHQzQixFQUFNLGdCQUFnQnJrQixFQUFNdTdDLFVBQzVCdjdDLEVBQU0yN0MsbUJBQWtCLEdBQ3BCMzdDLEVBQU15N0MsT0FBTS9CLEVBQUl0TyxTQUFTa1MsR0FBZXZ0QyxLQUFhdXRDLEVBQWN2dEM7O0lBSTNFLFNBQVN1dEMsRUFBY3Z0QztNQUNyQnNVLEVBQU0sa0JBQ050VSxFQUFPNU8sS0FBSyxhQUNabzhDLEVBQUt4dEM7O0lBU1AsU0FBUzRzQyxFQUFjNXNDLEdBQVEvUDtNQUN4QkEsRUFBTWc4QyxnQkFDVGg4QyxFQUFNZzhDLGVBQWMsR0FDcEJ0QyxFQUFJdE8sU0FBU29TLEdBQWdCenRDLEdBQVEvUDs7SUFJekMsU0FBU3c5QyxFQUFlenRDLEdBQVEvUDtNQUM5QixJQUFJa1AsSUFBTWxQLEVBQU15RTtNQUNoQixPQUFRekUsRUFBTWs1QyxZQUFZbDVDLEVBQU11N0MsWUFBWXY3QyxFQUFNc3JDLFNBQVN0ckMsRUFBTXlFLFNBQVN6RSxFQUFNazZDLGtCQUM5RTcxQixFQUFNLHlCQUNOdFUsRUFBT0MsS0FBSyxJQUNSZCxNQUFRbFAsRUFBTXlFLFdBRUx5SyxJQUFNbFAsRUFBTXlFO01BRTNCekUsRUFBTWc4QyxlQUFjOztJQXlPdEIsU0FBU3lCLEVBQWlCbnBDO01BQ3hCK1AsRUFBTSw2QkFDTi9QLEVBQUt0RSxLQUFLOztJQXNCWixTQUFTMHRDLEVBQVEzdEMsR0FBUS9QO01BQ2xCQSxFQUFNazVDLFlBQ1Q3MEIsRUFBTSxrQkFDTnRVLEVBQU9DLEtBQUssS0FHZGhRLEVBQU02N0MsbUJBQWtCLEdBQ3hCNzdDLEVBQU0rN0MsYUFBYSxHQUNuQmhzQyxFQUFPNU8sS0FBSyxXQUNabzhDLEVBQUt4dEMsSUFDRC9QLEVBQU11N0MsWUFBWXY3QyxFQUFNazVDLFdBQVNucEMsRUFBT0MsS0FBSzs7SUFhbkQsU0FBU3V0QyxFQUFLeHRDO01BQ1osSUFBSS9QLElBQVErUCxFQUFPNDZCO01BRW5CLEtBREF0bUIsRUFBTSxRQUFRcmtCLEVBQU11N0MsVUFDYnY3QyxFQUFNdTdDLFdBQTZCLFNBQWxCeHJDLEVBQU9DOztJQW1GakMsU0FBUzJ0QyxFQUFTdHVDLEdBQUdyUDtNQUVuQixPQUFxQixNQUFqQkEsRUFBTXlFLFNBQXFCLFFBRzNCekUsRUFBTStCLGFBQVk2N0MsSUFBTTU5QyxFQUFNcXBDLE9BQU93VSxXQUFrQnh1QyxLQUFLQSxLQUFLclAsRUFBTXlFLFVBRXREbTVDLElBQWY1OUMsRUFBTWk4QyxVQUFlajhDLEVBQU1xcEMsT0FBTzF2QixLQUFLLE1BQXFDLE1BQXhCM1osRUFBTXFwQyxPQUFPNWtDLFNBQW9CekUsRUFBTXFwQyxPQUFPdFAsS0FBS2p1QixPQUFnQjlMLEVBQU1xcEMsT0FBTy9pQyxPQUFPdEcsRUFBTXlFO01BQ3JKekUsRUFBTXFwQyxPQUFPbUcsV0FHYm9PLElBU0osU0FBeUJ2dUMsR0FBR3l1QyxHQUFNQztRQUNoQyxJQUFJSDtRQUNBdnVDLElBQUl5dUMsRUFBSy9qQixLQUFLanVCLEtBQUtySCxVQUVyQm01QyxJQUFNRSxFQUFLL2pCLEtBQUtqdUIsS0FBS3NMLE1BQU0sR0FBRy9ILElBQzlCeXVDLEVBQUsvakIsS0FBS2p1QixPQUFPZ3lDLEVBQUsvakIsS0FBS2p1QixLQUFLc0wsTUFBTS9ILE1BR3RDdXVDLElBRlN2dUMsTUFBTXl1QyxFQUFLL2pCLEtBQUtqdUIsS0FBS3JILFNBRXhCcTVDLEVBQUtELFVBR0xFLElBU1YsU0FBOEIxdUMsR0FBR3l1QztVQUMvQixJQUFJcjZDLElBQUlxNkMsRUFBSy9qQjtVQUNiLElBQUlpa0IsSUFBSTtVQUNSLElBQUlKLElBQU1uNkMsRUFBRXFJO1VBQ1p1RCxLQUFLdXVDLEVBQUluNUM7VUFDVCxNQUFPaEIsSUFBSUEsRUFBRStNLFFBQU07WUFDakIsSUFBSTZJLElBQU01VixFQUFFcUk7WUFDWixJQUFJbXlDLElBQUs1dUMsSUFBSWdLLEVBQUk1VSxTQUFTNFUsRUFBSTVVLFNBQVM0SztZQUd2QyxJQUZJNHVDLE1BQU81a0MsRUFBSTVVLFNBQVFtNUMsS0FBT3ZrQyxJQUFTdWtDLEtBQU92a0MsRUFBSWpDLE1BQU0sR0FBRy9ILElBRWpELE9BRFZBLEtBQUs0dUMsSUFDUTtjQUNQQSxNQUFPNWtDLEVBQUk1VSxZQUNYdTVDLEdBQ0V2NkMsRUFBRStNLE9BQU1zdEMsRUFBSy9qQixPQUFPdDJCLEVBQUUrTSxPQUFVc3RDLEVBQUsvakIsT0FBTytqQixFQUFLSSxPQUFPLFNBRTVESixFQUFLL2pCLE9BQU90MkIsR0FDWkEsRUFBRXFJLE9BQU91TixFQUFJakMsTUFBTTZtQztjQUVyQjs7Y0FFQUQ7O1VBR0osT0FEQUYsRUFBS3I1QyxVQUFVdTVDLEdBQ1JKO1NBaENjTyxDQUFxQjl1QyxHQUFHeXVDLEtBc0MvQyxTQUF3Qnp1QyxHQUFHeXVDO1VBQ3pCLElBQUlGLElBQU1qWSxFQUFPNEksWUFBWWwvQjtVQUM3QixJQUFJNUwsSUFBSXE2QyxFQUFLL2pCO1VBQ2IsSUFBSWlrQixJQUFJO1VBQ1J2NkMsRUFBRXFJLEtBQUt3RCxLQUFLc3VDLElBQ1p2dUMsS0FBSzVMLEVBQUVxSSxLQUFLckg7VUFDWixNQUFPaEIsSUFBSUEsRUFBRStNLFFBQU07WUFDakIsSUFBSTR0QyxJQUFNMzZDLEVBQUVxSTtZQUNaLElBQUlteUMsSUFBSzV1QyxJQUFJK3VDLEVBQUkzNUMsU0FBUzI1QyxFQUFJMzVDLFNBQVM0SztZQUd2QyxJQUZBK3VDLEVBQUk5dUMsS0FBS3N1QyxHQUFLQSxFQUFJbjVDLFNBQVM0SyxHQUFHLEdBQUc0dUMsSUFFdkIsT0FEVjV1QyxLQUFLNHVDLElBQ1E7Y0FDUEEsTUFBT0csRUFBSTM1QyxZQUNYdTVDLEdBQ0V2NkMsRUFBRStNLE9BQU1zdEMsRUFBSy9qQixPQUFPdDJCLEVBQUUrTSxPQUFVc3RDLEVBQUsvakIsT0FBTytqQixFQUFLSSxPQUFPLFNBRTVESixFQUFLL2pCLE9BQU90MkIsR0FDWkEsRUFBRXFJLE9BQU9zeUMsRUFBSWhuQyxNQUFNNm1DO2NBRXJCOztjQUVBRDs7VUFHSixPQURBRixFQUFLcjVDLFVBQVV1NUMsR0FDUko7U0E5RDhDUyxDQUFlaHZDLEdBQUd5dUM7UUFFdkUsT0FBT0Y7T0F0QkNVLENBQWdCanZDLEdBQUdyUCxFQUFNcXBDLFFBQVFycEMsRUFBTWk4QyxVQUd4QzJCO01BVlAsSUFBSUE7O0lBNEZOLFNBQVNXLEVBQVl4dUM7TUFDbkIsSUFBSS9QLElBQVErUCxFQUFPNDZCO01BSW5CLElBQUkzcUMsRUFBTXlFLFNBQVMsR0FBRyxNQUFNLElBQUl5RyxNQUFNO01BRWpDbEwsRUFBTXc3QyxlQUNUeDdDLEVBQU1zckMsU0FBUSxHQUNkb08sRUFBSXRPLFNBQVNvVCxHQUFleCtDLEdBQU8rUDs7SUFJdkMsU0FBU3l1QyxFQUFjeCtDLEdBQU8rUDtNQUV2Qi9QLEVBQU13N0MsY0FBK0IsTUFBakJ4N0MsRUFBTXlFLFdBQzdCekUsRUFBTXc3QyxjQUFhLEdBQ25CenJDLEVBQU93RCxZQUFXLEdBQ2xCeEQsRUFBTzVPLEtBQUs7O0lBSWhCLFNBQVN1RCxFQUFRKzVDLEdBQUl6MkM7TUFDbkIsS0FBSyxJQUFJeEQsSUFBSSxHQUFHazZDLElBQUlELEVBQUdoNkMsUUFBUUQsSUFBSWs2QyxHQUFHbDZDLEtBQ3BDLElBQUlpNkMsRUFBR2o2QyxPQUFPd0QsR0FBRyxPQUFPeEQ7TUFFMUIsUUFBUTs7SUFwb0JWczFDLEVBQVNwMkMsVUFBVXNNLE9BQU8sU0FBVVg7TUFDbENnVixFQUFNLFFBQVFoVixJQUNkQSxJQUFJc3ZDLFNBQVN0dkMsR0FBRztNQUNoQixJQUFJclAsSUFBUVQsS0FBS29yQztNQUNqQixJQUFJaVUsSUFBUXZ2QztNQU9aLElBTFUsTUFBTkEsTUFBU3JQLEVBQU0yN0MsbUJBQWtCLElBSzNCLE1BQU50c0MsS0FBV3JQLEVBQU0wN0MsaUJBQWlCMTdDLEVBQU15RSxVQUFVekUsRUFBTWs2QyxpQkFBaUJsNkMsRUFBTXNyQyxRQUdqRixPQUZBam5CLEVBQU0sc0JBQXNCcmtCLEVBQU15RSxRQUFRekUsRUFBTXNyQztNQUMzQixNQUFqQnRyQyxFQUFNeUUsVUFBZ0J6RSxFQUFNc3JDLFFBQU9pVCxFQUFZaC9DLFFBQVc4OEMsRUFBYTk4QyxPQUNwRTtNQU1ULElBQVUsT0FIVjhQLElBQUkrdEMsRUFBYy90QyxHQUFHclAsT0FHTkEsRUFBTXNyQyxPQUVuQixPQURxQixNQUFqQnRyQyxFQUFNeUUsVUFBYzg1QyxFQUFZaC9DLE9BQzdCO01BMEJULElBQUlzL0MsSUFBUzcrQyxFQUFNMDdDO01BNEJuQixJQUFJa0M7TUFxQkosT0FoREF2NUIsRUFBTSxpQkFBaUJ3NkIsS0FHRixNQUFqQjcrQyxFQUFNeUUsVUFBZ0J6RSxFQUFNeUUsU0FBUzRLLElBQUlyUCxFQUFNazZDLGtCQUVqRDcxQixFQUFNLDhCQUROdzZCLEtBQVM7TUFNUDcrQyxFQUFNc3JDLFNBQVN0ckMsRUFBTWs1QyxVQUV2QjcwQixFQUFNLG9CQUROdzZCLEtBQVMsS0FFQUEsTUFDVHg2QixFQUFNLFlBQ05ya0IsRUFBTWs1QyxXQUFVLEdBQ2hCbDVDLEVBQU15N0MsUUFBTyxHQUVRLE1BQWpCejdDLEVBQU15RSxXQUFjekUsRUFBTTA3QyxnQkFBZTtNQUU3Q244QyxLQUFLb0QsTUFBTTNDLEVBQU1rNkMsZ0JBQ2pCbDZDLEVBQU15N0MsUUFBTyxHQUdSejdDLEVBQU1rNUMsWUFBUzdwQyxJQUFJK3RDLEVBQWN3QixHQUFPNStDLE1BTW5DLFVBRkQ0OUMsSUFBUHZ1QyxJQUFJLElBQVNzdUMsRUFBU3R1QyxHQUFHclAsS0FBa0IsU0FHN0NBLEVBQU0wN0MsZ0JBQWU7TUFDckJyc0MsSUFBSSxLQUVKclAsRUFBTXlFLFVBQVU0SyxHQUdHLE1BQWpCclAsRUFBTXlFLFdBR0h6RSxFQUFNc3JDLFVBQU90ckMsRUFBTTA3QyxnQkFBZSxJQUduQ2tELE1BQVV2dkMsS0FBS3JQLEVBQU1zckMsU0FBT2lULEVBQVloL0MsUUFHbEMsU0FBUnErQyxLQUFjcitDLEtBQUs0QixLQUFLLFFBQVF5OEM7TUFFN0JBO09Ba0VUOUQsRUFBU3AyQyxVQUFVZixRQUFRLFNBQVUwTTtNQUNuQzlQLEtBQUs0QixLQUFLLFNBQVMsSUFBSStKLE1BQU07T0FHL0I0dUMsRUFBU3AyQyxVQUFVeEIsT0FBTyxTQUFVQyxHQUFNMjhDO01BQ3hDLElBQUk5bUIsSUFBTXo0QjtNQUNWLElBQUlTLElBQVFULEtBQUtvckM7TUFFakIsUUFBUTNxQyxFQUFNczdDO09BQ1osS0FBSztRQUNIdDdDLEVBQU1xN0MsUUFBUWw1QztRQUNkOztPQUNGLEtBQUs7UUFDSG5DLEVBQU1xN0MsUUFBUSxFQUFDcjdDLEVBQU1xN0MsT0FBT2w1QztRQUM1Qjs7T0FDRjtRQUNFbkMsRUFBTXE3QyxNQUFNcDVDLEtBQUtFOztNQUdyQm5DLEVBQU1zN0MsY0FBYyxHQUNwQmozQixFQUFNLHlCQUF5QnJrQixFQUFNczdDLFlBQVl3RDtNQUlqRCxJQUFJQyxNQUZVRCxNQUE2QixNQUFqQkEsRUFBUzN1QyxRQUFrQmhPLE1BQVNncEMsRUFBUTZULFVBQVU3OEMsTUFBU2dwQyxFQUFROFQsU0FFN0VsVSxJQUFRbVU7TUFJNUIsU0FBU0MsRUFBUzVyQyxHQUFVNnJDO1FBQzFCLzZCLEVBQU0sYUFDRjlRLE1BQWF5a0IsS0FDWG9uQixNQUF3QyxNQUExQkEsRUFBV0MsZUFDM0JELEVBQVdDLGNBQWEsR0FtQjlCO1VBQ0VoN0IsRUFBTSxZQUVObGlCLEVBQUtWLGVBQWUsU0FBU3lwQyxJQUM3Qi9vQyxFQUFLVixlQUFlLFVBQVVxcEMsSUFDOUIzb0MsRUFBS1YsZUFBZSxTQUFTNjlDLElBQzdCbjlDLEVBQUtWLGVBQWUsU0FBU3MyQjtVQUM3QjUxQixFQUFLVixlQUFlLFVBQVUwOUMsSUFDOUJubkIsRUFBSXYyQixlQUFlLE9BQU9zcEMsSUFDMUIvUyxFQUFJdjJCLGVBQWUsT0FBT3k5QyxJQUMxQmxuQixFQUFJdjJCLGVBQWUsUUFBUTg5QyxJQUUzQkMsS0FBWTtXQU9SeC9DLEVBQU0rN0MsY0FBZ0I1NUMsRUFBS3NvQyxtQkFBa0J0b0MsRUFBS3NvQyxlQUFlZ1YsYUFBWUg7U0FyQzdFSTs7TUFLTixTQUFTM1U7UUFDUDFtQixFQUFNLFVBQ05saUIsRUFBS2dPOztNQWZIblEsRUFBTXc3QyxhQUFZOUIsRUFBSXRPLFNBQVMyVCxLQUFZL21CLEVBQUlyRSxLQUFLLE9BQU9vckIsSUFFL0Q1OEMsRUFBS1osR0FBRyxVQUFVNDlDO01Bb0JsQixJQUFJRyxJQTRGTixTQUFxQnRuQjtRQUNuQixPQUFPO1VBQ0wsSUFBSWg0QixJQUFRZzRCLEVBQUkyUztVQUNoQnRtQixFQUFNLGVBQWVya0IsRUFBTSs3QyxhQUN2Qi83QyxFQUFNKzdDLGNBQVkvN0MsRUFBTSs3QyxjQUNILE1BQXJCLzdDLEVBQU0rN0MsY0FBb0J6QixFQUFnQnRpQixHQUFLLFlBQ2pEaDRCLEVBQU11N0MsV0FBVSxHQUNoQmdDLEVBQUt2bEI7O09BbkdLMm5CLENBQVkzbkI7TUFDMUI3MUIsRUFBS1osR0FBRyxTQUFTKzlDO01BRWpCLElBQUlFLEtBQVk7TUEyQmhCLElBQUlJLEtBQXNCO01BRTFCLFNBQVNMLEVBQU8vOEM7UUFDZDZoQixFQUFNLFdBQ051N0IsS0FBc0IsSUFFbEIsTUFETXo5QyxFQUFLRyxNQUFNRSxNQUNDbzlDLE9BS00sTUFBckI1L0MsRUFBTXM3QyxjQUFvQnQ3QyxFQUFNcTdDLFVBQVVsNUMsS0FBUW5DLEVBQU1zN0MsYUFBYSxNQUFxQyxNQUFoQzUyQyxFQUFRMUUsRUFBTXE3QyxPQUFPbDVDLFFBQWtCcTlDLE1BQ3BIbjdCLEVBQU0sK0JBQStCMlQsRUFBSTJTLGVBQWVvUjtRQUN4RC9qQixFQUFJMlMsZUFBZW9SLGNBQ25CNkQsS0FBc0IsSUFFeEI1bkIsRUFBSTZuQjs7TUFNUixTQUFTOW5CLEVBQVE5b0I7UUFDZm9WLEVBQU0sV0FBV3BWLElBQ2pCaXdDLEtBQ0EvOEMsRUFBS1YsZUFBZSxTQUFTczJCLElBQ1UsTUFBbkN1aUIsRUFBZ0JuNEMsR0FBTSxZQUFnQkEsRUFBS2hCLEtBQUssU0FBUzhOOztNQU8vRCxTQUFTaThCO1FBQ1Avb0MsRUFBS1YsZUFBZSxVQUFVcXBDLElBQzlCb1U7O01BR0YsU0FBU3BVO1FBQ1B6bUIsRUFBTSxhQUNObGlCLEVBQUtWLGVBQWUsU0FBU3lwQyxJQUM3QmdVOztNQUlGLFNBQVNBO1FBQ1A3NkIsRUFBTSxXQUNOMlQsRUFBSWtuQixPQUFPLzhDOztNQVliLE9BMURBNjFCLEVBQUl6MkIsR0FBRyxRQUFRZytDLElBOWdCakIsU0FBeUJ0dkIsR0FBU2hpQixHQUFPb0c7UUFHdkMsSUFBdUMscUJBQTVCNGIsRUFBUTJELGlCQUFnQyxPQUFPM0QsRUFBUTJELGdCQUFnQjNsQixHQUFPb0c7UUFNcEY0YixFQUFRcGhCLFdBQVlvaEIsRUFBUXBoQixRQUFRWixLQUF1QzJELEVBQVFxZSxFQUFRcGhCLFFBQVFaLE1BQVNnaUIsRUFBUXBoQixRQUFRWixHQUFPNHVDLFFBQVF4b0MsS0FBUzRiLEVBQVFwaEIsUUFBUVosS0FBUyxFQUFDb0csR0FBSTRiLEVBQVFwaEIsUUFBUVosT0FBdEpnaUIsRUFBUTF1QixHQUFHME0sR0FBT29HO09Ba2lCbkV1ZixDQUFnQnp4QixHQUFNLFNBQVM0MUIsSUFPL0I1MUIsRUFBS3d4QixLQUFLLFNBQVN1WCxJQU1uQi9vQyxFQUFLd3hCLEtBQUssVUFBVW1YLElBUXBCM29DLEVBQUtoQixLQUFLLFFBQVE2MkIsSUFHYmg0QixFQUFNdTdDLFlBQ1RsM0IsRUFBTSxnQkFDTjJULEVBQUloMkI7TUFHQ0c7T0FlVDIzQyxFQUFTcDJDLFVBQVV3N0MsU0FBUyxTQUFVLzhDO01BQ3BDLElBQUluQyxJQUFRVCxLQUFLb3JDO01BQ2pCLElBQUl5VSxJQUFhO1FBQUVDLGFBQVk7O01BRy9CLElBQXlCLE1BQXJCci9DLEVBQU1zN0MsWUFBa0IsT0FBTy83QztNQUduQyxJQUF5QixNQUFyQlMsRUFBTXM3QyxZQUVSLE9BQUluNUMsS0FBUUEsTUFBU25DLEVBQU1xN0MsVUFFdEJsNUMsTUFBTUEsSUFBT25DLEVBQU1xN0MsUUFHeEJyN0MsRUFBTXE3QyxRQUFRLE1BQ2RyN0MsRUFBTXM3QyxhQUFhLEdBQ25CdDdDLEVBQU11N0MsV0FBVTtNQUNacDVDLEtBQU1BLEVBQUtoQixLQUFLLFVBQVU1QixNQUFNNi9DLEtBUks3L0M7TUFjM0MsS0FBSzRDLEdBQU07UUFFVCxJQUFJMjlDLElBQVE5L0MsRUFBTXE3QztRQUNsQixJQUFJbnNDLElBQU1sUCxFQUFNczdDO1FBQ2hCdDdDLEVBQU1xN0MsUUFBUSxNQUNkcjdDLEVBQU1zN0MsYUFBYSxHQUNuQnQ3QyxFQUFNdTdDLFdBQVU7UUFFaEIsS0FBSyxJQUFJLzJDLElBQUksR0FBR0EsSUFBSTBLLEdBQUsxSyxLQUN2QnM3QyxFQUFNdDdDLEdBQUdyRCxLQUFLLFVBQVU1QixNQUFNNi9DO1FBQy9CLE9BQU83L0M7O01BSVYsSUFBSTZJLElBQVExRCxFQUFRMUUsRUFBTXE3QyxPQUFPbDVDO01BQ2pDLFFBQWUsTUFBWGlHLE1BRUpwSSxFQUFNcTdDLE1BQU0xTSxPQUFPdm1DLEdBQU8sSUFDMUJwSSxFQUFNczdDLGNBQWMsR0FDSyxNQUFyQnQ3QyxFQUFNczdDLGVBQWtCdDdDLEVBQU1xN0MsUUFBUXI3QyxFQUFNcTdDLE1BQU0sS0FFdERsNUMsRUFBS2hCLEtBQUssVUFBVTVCLE1BQU02L0M7TUFORDcvQztPQWEzQnU2QyxFQUFTcDJDLFVBQVVuQyxLQUFLLFNBQVV3K0MsR0FBSTFyQztNQUNwQyxJQUFJcEUsSUFBTXNxQyxFQUFPNzJDLFVBQVVuQyxHQUFHcUMsS0FBS3JFLE1BQU13Z0QsR0FBSTFyQztNQUU3QyxJQUFXLFdBQVAwckMsSUFFa0MsTUFBaEN4Z0QsS0FBS29yQyxlQUFlNFEsV0FBbUJoOEMsS0FBS3lDLGVBQzNDLElBQVcsZUFBUCs5QyxHQUFtQjtRQUM1QixJQUFJLy9DLElBQVFULEtBQUtvckM7UUFDWjNxQyxFQUFNdzdDLGNBQWV4N0MsRUFBTTQ3QyxzQkFDOUI1N0MsRUFBTTQ3QyxvQkFBb0I1N0MsRUFBTTA3QyxnQkFBZSxHQUMvQzE3QyxFQUFNMjdDLG1CQUFrQixHQUNuQjM3QyxFQUFNazVDLFVBRUFsNUMsRUFBTXlFLFVBQ2Y0M0MsRUFBYTk4QyxRQUZibTZDLEVBQUl0TyxTQUFTcVMsR0FBa0JsK0M7O01BT3JDLE9BQU8wUTtPQUVUNnBDLEVBQVNwMkMsVUFBVSt2QixjQUFjcW1CLEVBQVNwMkMsVUFBVW5DLElBU3BEdTRDLEVBQVNwMkMsVUFBVTFCLFNBQVM7TUFDMUIsSUFBSWhDLElBQVFULEtBQUtvckM7TUFNakIsT0FMSzNxQyxFQUFNdTdDLFlBQ1RsM0IsRUFBTSxXQUNOcmtCLEVBQU11N0MsV0FBVSxHQU1wQixTQUFnQnhyQyxHQUFRL1A7UUFDakJBLEVBQU02N0Msb0JBQ1Q3N0MsRUFBTTY3QyxtQkFBa0IsR0FDeEJuQyxFQUFJdE8sU0FBU3NTLEdBQVMzdEMsR0FBUS9QO09BUjlCZ0MsQ0FBT3pDLE1BQU1TLEtBRVJUO09BdUJUdTZDLEVBQVNwMkMsVUFBVW04QyxRQUFRO01BT3pCLE9BTkF4N0IsRUFBTSx5QkFBeUI5a0IsS0FBS29yQyxlQUFlNFEsV0FDL0MsTUFBVWg4QyxLQUFLb3JDLGVBQWU0USxZQUNoQ2wzQixFQUFNLFVBQ045a0IsS0FBS29yQyxlQUFlNFEsV0FBVTtNQUM5Qmg4QyxLQUFLNEIsS0FBSyxXQUVMNUI7T0FZVHU2QyxFQUFTcDJDLFVBQVVzOEMsT0FBTyxTQUFVandDO01BQ2xDLElBQUlpSSxJQUFRelk7TUFFWixJQUFJUyxJQUFRVCxLQUFLb3JDO01BQ2pCLElBQUlzVixLQUFTO01BNEJiLEtBQUssSUFBSXo3QyxLQTFCVHVMLEVBQU94TyxHQUFHLFFBQU87UUFFZixJQURBOGlCLEVBQU0sZ0JBQ0Zya0IsRUFBTWk4QyxZQUFZajhDLEVBQU1zckMsT0FBTztVQUNqQyxJQUFJOW9DLElBQVF4QyxFQUFNaThDLFFBQVE5ckM7VUFDdEIzTixLQUFTQSxFQUFNaUMsVUFBUXVULEVBQU0vVixLQUFLTzs7UUFHeEN3VixFQUFNL1YsS0FBSztXQUdiOE4sRUFBT3hPLEdBQUcsU0FBUSxTQUFVaUI7U0FDMUI2aEIsRUFBTSxpQkFDRnJrQixFQUFNaThDLFlBQVN6NUMsSUFBUXhDLEVBQU1pOEMsUUFBUTM1QyxNQUFNRSxLQUczQ3hDLEVBQU0rQixjQUFjLFFBQUNTLE9BQXlEeEMsRUFBTStCLGNBQWdCUyxLQUFVQSxFQUFNaUMsWUFFOUd1VCxFQUFNL1YsS0FBS08sT0FFbkJ5OUMsS0FBUztRQUNUbHdDLEVBQU84dkM7V0FNRzl2QyxRQUNJMU0sTUFBWjlELEtBQUtpRixNQUF5QyxxQkFBZHVMLEVBQU92TCxPQUN6Q2pGLEtBQUtpRixLQUFLLFNBQVVpSDtRQUNsQixPQUFPO1VBQ0wsT0FBT3NFLEVBQU90RSxHQUFRckMsTUFBTTJHLEdBQVFqSzs7T0FGOUIsQ0FJUnRCO01BS04sS0FBSyxJQUFJNkssSUFBSSxHQUFHQSxJQUFJeXJDLEVBQWFyMkMsUUFBUTRLLEtBQ3ZDVSxFQUFPeE8sR0FBR3U1QyxFQUFhenJDLElBQUk5UCxLQUFLNEIsS0FBS21NLEtBQUsvTixNQUFNdTdDLEVBQWF6ckM7TUFhL0QsT0FSQTlQLEtBQUtvRCxRQUFRLFNBQVUwTTtRQUNyQmdWLEVBQU0saUJBQWlCaFYsSUFDbkI0d0MsTUFDRkEsS0FBUyxHQUNUbHdDLEVBQU8vTjtTQUlKekM7T0FHVFYsT0FBT0MsZUFBZWc3QyxFQUFTcDJDLFdBQVcseUJBQXlCO01BSWpFSixhQUFZO01BQ1pDLEtBQUs7UUFDSCxPQUFPaEUsS0FBS29yQyxlQUFldVA7O1FBSy9CSixFQUFTb0csWUFBWXZDOzs7O0lDeHpCckJyVSxFQUFPdnFDLFVBQVVxN0M7SUFFakIsSUFBSXY0QyxJQUFTLEVBQVE7SUFHckIsSUFBSSszQyxJQUFPLzZDLE9BQU9tRSxPQUFPLEVBQVE7SUFNakMsU0FBU205QyxFQUFlbHhDLEdBQUluRDtNQUMxQixJQUFJczBDLElBQUs3Z0QsS0FBSzhnRDtNQUNkRCxFQUFHRSxnQkFBZTtNQUVsQixJQUFJcjhDLElBQUttOEMsRUFBR0c7TUFFWixLQUFLdDhDLEdBQ0gsT0FBTzFFLEtBQUs0QixLQUFLLFNBQVMsSUFBSStKLE1BQU07TUFHdENrMUMsRUFBR0ksYUFBYSxNQUNoQkosRUFBR0csVUFBVSxNQUVELFFBQVJ6MEMsS0FDRnZNLEtBQUswQyxLQUFLNkosSUFFWjdILEVBQUdnTDtNQUVILElBQUl5N0IsSUFBS25yQyxLQUFLb3JDO01BQ2RELEVBQUd3TyxXQUFVLElBQ1R4TyxFQUFHZ1IsZ0JBQWdCaFIsRUFBR2ptQyxTQUFTaW1DLEVBQUd3UCxrQkFDcEMzNkMsS0FBS29ELE1BQU0rbkMsRUFBR3dQOztJQUlsQixTQUFTRSxFQUFVaDRDO01BQ2pCLE1BQU03QyxnQkFBZ0I2NkMsSUFBWSxPQUFPLElBQUlBLEVBQVVoNEM7TUFFdkRQLEVBQU8rQixLQUFLckUsTUFBTTZDLElBRWxCN0MsS0FBSzhnRCxrQkFBa0I7UUFDckJGLGdCQUFnQkEsRUFBZTd5QyxLQUFLL047UUFDcENraEQsZ0JBQWU7UUFDZkgsZUFBYztRQUNkQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkUsZUFBZTtTQUlqQm5oRCxLQUFLb3JDLGVBQWUrUSxnQkFBZSxHQUtuQ244QyxLQUFLb3JDLGVBQWU4USxRQUFPLEdBRXZCcjVDLE1BQytCLHFCQUF0QkEsRUFBUThwQyxjQUEwQjNzQyxLQUFLNHNDLGFBQWEvcEMsRUFBUThwQztNQUUxQyxxQkFBbEI5cEMsRUFBUXUrQyxVQUFzQnBoRCxLQUFLcWhELFNBQVN4K0MsRUFBUXUrQyxTQUlqRXBoRCxLQUFLZ0MsR0FBRyxhQUFhcy9DOztJQUd2QixTQUFTQTtNQUNQLElBQUk3b0MsSUFBUXpZO01BRWUscUJBQWhCQSxLQUFLcWhELFNBQ2RyaEQsS0FBS3FoRCxRQUFPLFNBQVUzeEMsR0FBSW5EO1FBQ3hCZ0YsRUFBS2tILEdBQU8vSSxHQUFJbkQ7WUFHbEJnRixFQUFLdlIsTUFBTSxNQUFNOztJQTJEckIsU0FBU3VSLEVBQUtmLEdBQVFkLEdBQUluRDtNQUN4QixJQUFJbUQsR0FBSSxPQUFPYyxFQUFPNU8sS0FBSyxTQUFTOE47TUFPcEMsSUFMWSxRQUFSbkQsS0FDRmlFLEVBQU85TixLQUFLNkosSUFJVmlFLEVBQU8wNkIsZUFBZWhtQyxRQUFRLE1BQU0sSUFBSXlHLE1BQU07TUFFbEQsSUFBSTZFLEVBQU9zd0MsZ0JBQWdCQyxjQUFjLE1BQU0sSUFBSXAxQyxNQUFNO01BRXpELE9BQU82RSxFQUFPOU4sS0FBSzs7SUE3SXJCMjNDLEVBQUtDLFdBQVcsRUFBUSxRQUd4QkQsRUFBS0MsU0FBU08sR0FBV3Y0QyxJQXVFekJ1NEMsRUFBVTEyQyxVQUFVekIsT0FBTyxTQUFVTyxHQUFPaW1DO01BRTFDLE9BREFscEMsS0FBSzhnRCxnQkFBZ0JJLGlCQUFnQixHQUM5QjUrQyxFQUFPNkIsVUFBVXpCLEtBQUsyQixLQUFLckUsTUFBTWlELEdBQU9pbUM7T0FhakQyUixFQUFVMTJDLFVBQVV5b0MsYUFBYSxTQUFVM3BDLEdBQU9pbUMsR0FBVXhrQztNQUMxRCxNQUFNLElBQUlpSCxNQUFNO09BR2xCa3ZDLEVBQVUxMkMsVUFBVW5CLFNBQVMsU0FBVUMsR0FBT2ltQyxHQUFVeGtDO01BQ3RELElBQUltOEMsSUFBSzdnRCxLQUFLOGdEO01BSWQsSUFIQUQsRUFBR0csVUFBVXQ4QyxHQUNibThDLEVBQUdJLGFBQWFoK0MsR0FDaEI0OUMsRUFBR00sZ0JBQWdCalksSUFDZDJYLEVBQUdFLGNBQWM7UUFDcEIsSUFBSTVWLElBQUtuckMsS0FBS29yQztTQUNWeVYsRUFBR0ssaUJBQWlCL1YsRUFBR2dSLGdCQUFnQmhSLEVBQUdqbUMsU0FBU2ltQyxFQUFHd1Asa0JBQWUzNkMsS0FBS29ELE1BQU0rbkMsRUFBR3dQOztPQU8zRkUsRUFBVTEyQyxVQUFVZixRQUFRLFNBQVUwTTtNQUNwQyxJQUFJK3dDLElBQUs3Z0QsS0FBSzhnRDtNQUVRLFNBQWxCRCxFQUFHSSxjQUF1QkosRUFBR0csWUFBWUgsRUFBR0UsZ0JBQzlDRixFQUFHRSxnQkFBZSxHQUNsQi9nRCxLQUFLNHNDLFdBQVdpVSxFQUFHSSxZQUFZSixFQUFHTSxlQUFlTixFQUFHRCxtQkFJcERDLEVBQUdLLGlCQUFnQjtPQUl2QnJHLEVBQVUxMkMsVUFBVWIsV0FBVyxTQUFVQyxHQUFLbUI7TUFDNUMsSUFBSTY4QyxJQUFTdmhEO01BRWJzQyxFQUFPNkIsVUFBVWIsU0FBU2UsS0FBS3JFLE1BQU11RCxJQUFLLFNBQVVpK0M7UUFDbEQ5OEMsRUFBRzg4QyxJQUNIRCxFQUFPMy9DLEtBQUs7Ozs7Ozs7SUN2S2hCLElBQUl1NEMsSUFBTSxFQUFRO0lBZWxCLFNBQVNzSCxFQUFjaGhEO01BQ3JCLElBQUlnWSxJQUFRelk7TUFFWkEsS0FBS2lSLE9BQU8sTUFDWmpSLEtBQUtrd0MsUUFBUSxNQUNibHdDLEtBQUswaEQsU0FBUztTQW9sQmhCLFNBQXdCQyxHQUFTbGhELEdBQU84QztVQUN0QyxJQUFJMnNDLElBQVF5UixFQUFRelI7VUFDcEJ5UixFQUFRelIsUUFBUTtVQUNoQixNQUFPQSxLQUFPO1lBQ1osSUFBSXhyQyxJQUFLd3JDLEVBQU0vc0M7WUFDZjFDLEVBQU1taEQsYUFDTmw5QyxFQUFHbkIsSUFDSDJzQyxJQUFRQSxFQUFNai9COztVQUVaeFEsRUFBTW9oRCxxQkFDUnBoRCxFQUFNb2hELG1CQUFtQjV3QyxPQUFPMHdDLElBRWhDbGhELEVBQU1vaEQscUJBQXFCRjtTQS9sQjNCRyxDQUFlcnBDLEdBQU9oWTs7O0lBbEIxQnNwQyxFQUFPdnFDLFVBQVVnN0M7SUF3QmpCLElBQUl1SCxLQUFjblcsRUFBUW9XLFdBQVcsRUFBQyxTQUFTLFVBQVM3OEMsUUFBUXltQyxFQUFRemEsUUFBUXRaLE1BQU0sR0FBRyxPQUFPLElBQUlvcUMsZUFBZTlILEVBQUl0TztJQUl2SCxJQUFJdnBDO0lBR0prNEMsRUFBUzBILGdCQUFnQkE7SUFHekIsSUFBSTdILElBQU8vNkMsT0FBT21FLE9BQU8sRUFBUTtJQUNqQzQyQyxFQUFLQyxXQUFXLEVBQVE7SUFJeEIsSUFBSTZILElBQWU7TUFDakJDLFdBQVcsRUFBUTs7SUFLckIsSUFBSXBILElBQVMsRUFBUTtJQUtyQixJQUFJNVUsSUFBUztJQUNiLElBQUk2VSxJQUFnQixFQUFBOVYsRUFBTzRCLGNBQWM7SUFVekMsSUFBSXNVLElBQWMsRUFBUTtJQUkxQixTQUFTZ0g7SUFFVCxTQUFTSCxFQUFjci9DLEdBQVMyTjtNQUM5QmxPLElBQVNBLEtBQVUsRUFBUSxRQUUzQk8sSUFBVUEsS0FBVztNQU9yQixJQUFJMjRDLElBQVdockMsYUFBa0JsTztNQUlqQ3RDLEtBQUt3QyxlQUFlSyxFQUFRTCxZQUV4Qmc1QyxNQUFVeDdDLEtBQUt3QyxhQUFheEMsS0FBS3dDLGdCQUFnQkssRUFBUXkvQztNQUs3RCxJQUFJNUcsSUFBTTc0QyxFQUFRODNDO01BQ2xCLElBQUk0SCxJQUFjMS9DLEVBQVEyL0M7TUFDMUIsSUFBSTNHLElBQWE3N0MsS0FBS3dDLGFBQWEsS0FBSztNQUVsQnhDLEtBQUsyNkMsZ0JBQXZCZSxLQUFlLE1BQVJBLElBQWdDQSxJQUFhRixNQUFhK0csS0FBK0IsTUFBaEJBLEtBQXlDQSxJQUFzQzFHLEdBR25LNzdDLEtBQUsyNkMsZ0JBQWdCMTlCLEtBQUtDLE1BQU1sZCxLQUFLMjZDO01BR3JDMzZDLEtBQUt5aUQsZUFBYyxHQUduQnppRCxLQUFLa2dELGFBQVksR0FFakJsZ0QsS0FBSzBpRCxVQUFTLEdBRWQxaUQsS0FBSytyQyxTQUFRLEdBRWIvckMsS0FBSzJpRCxZQUFXLEdBR2hCM2lELEtBQUtnc0MsYUFBWTtNQUtqQixJQUFJNFcsS0FBcUMsTUFBMUIvL0MsRUFBUWdnRDtNQUN2QjdpRCxLQUFLNmlELGlCQUFpQkQsR0FLdEI1aUQsS0FBS3U4QyxrQkFBa0IxNUMsRUFBUTA1QyxtQkFBbUIsUUFLbER2OEMsS0FBS2tGLFNBQVMsR0FHZGxGLEtBQUs0NUMsV0FBVSxHQUdmNTVDLEtBQUs4aUQsU0FBUztNQU1kOWlELEtBQUtrOEMsUUFBTyxHQUtabDhDLEtBQUsraUQsb0JBQW1CLEdBR3hCL2lELEtBQUtnakQsVUFBVSxTQUFVdHpDO1NBNFIzQixTQUFpQmMsR0FBUWQ7VUFDdkIsSUFBSWpQLElBQVErUCxFQUFPMDZCO1VBQ25CLElBQUlnUixJQUFPejdDLEVBQU15N0M7VUFDakIsSUFBSXgzQyxJQUFLakUsRUFBTXVnRDtVQUlmLElBZEYsU0FBNEJ2Z0Q7WUFDMUJBLEVBQU1tNUMsV0FBVSxHQUNoQm41QyxFQUFNdWdELFVBQVUsTUFDaEJ2Z0QsRUFBTXlFLFVBQVV6RSxFQUFNd2lELFVBQ3RCeGlELEVBQU13aUQsV0FBVztXQVFqQkMsQ0FBbUJ6aUQsSUFFZmlQLElBdENOLFNBQXNCYyxHQUFRL1AsR0FBT3k3QyxHQUFNeHNDLEdBQUloTDtjQUMzQ2pFLEVBQU1taEQsV0FFSjFGLEtBR0YvQixFQUFJdE8sU0FBU25uQyxHQUFJZ0wsSUFHakJ5cUMsRUFBSXRPLFNBQVNzWCxHQUFhM3lDLEdBQVEvUCxJQUNsQytQLEVBQU8wNkIsZUFBZWtZLGdCQUFlLEdBQ3JDNXlDLEVBQU81TyxLQUFLLFNBQVM4TixPQUlyQmhMLEVBQUdnTDtZQUNIYyxFQUFPMDZCLGVBQWVrWSxnQkFBZSxHQUNyQzV5QyxFQUFPNU8sS0FBSyxTQUFTOE4sSUFHckJ5ekMsRUFBWTN5QyxHQUFRL1A7V0FrQmQ0aUQsQ0FBYTd5QyxHQUFRL1AsR0FBT3k3QyxHQUFNeHNDLEdBQUloTCxTQUFTO1lBRXJELElBQUlpK0MsSUFBV1csRUFBVzdpRDtZQUVyQmtpRCxLQUFhbGlELEVBQU1xaUQsVUFBV3JpRCxFQUFNc2lELHFCQUFvQnRpRCxFQUFNOGlELG1CQUNqRUMsRUFBWWh6QyxHQUFRL1AsSUFHbEJ5N0MsSUFFRjZGLEVBQVcwQixHQUFZanpDLEdBQVEvUCxHQUFPa2lELEdBQVVqK0MsS0FHaEQrK0MsRUFBV2p6QyxHQUFRL1AsR0FBT2tpRCxHQUFVaitDOztTQS9TdENzK0MsQ0FBUXh5QyxHQUFRZDtTQUlsQjFQLEtBQUtnaEQsVUFBVSxNQUdmaGhELEtBQUtpakQsV0FBVyxHQUVoQmpqRCxLQUFLdWpELGtCQUFrQixNQUN2QnZqRCxLQUFLMGpELHNCQUFzQixNQUkzQjFqRCxLQUFLNGhELFlBQVk7TUFJakI1aEQsS0FBSzJqRCxlQUFjLEdBR25CM2pELEtBQUtvakQsZ0JBQWUsR0FHcEJwakQsS0FBSzRqRCx1QkFBdUIsR0FJNUI1akQsS0FBSzZoRCxxQkFBcUIsSUFBSUosRUFBY3poRDs7SUF5QjlDLElBQUk2akQ7SUFpQkosU0FBU3JKLEVBQVMzM0M7TUFVaEIsSUFUQVAsSUFBU0EsS0FBVSxFQUFRLFVBU3RCdWhELEVBQWdCeC9DLEtBQUttMkMsR0FBVXg2QyxTQUFXQSxnQkFBZ0JzQyxJQUM3RCxPQUFPLElBQUlrNEMsRUFBUzMzQztNQUd0QjdDLEtBQUtrckMsaUJBQWlCLElBQUlnWCxFQUFjci9DLEdBQVM3QyxPQUdqREEsS0FBS3dGLFlBQVcsR0FFWjNDLE1BQzJCLHFCQUFsQkEsRUFBUUUsVUFBc0IvQyxLQUFLZ0QsU0FBU0gsRUFBUUU7TUFFakMscUJBQW5CRixFQUFRaWhELFdBQXVCOWpELEtBQUsrakQsVUFBVWxoRCxFQUFRaWhELFNBRWxDLHFCQUFwQmpoRCxFQUFRcVIsWUFBd0JsVSxLQUFLc0QsV0FBV1QsRUFBUXFSO01BRXRDLHFCQUFsQnJSLEVBQVE4a0MsVUFBc0IzbkMsS0FBS2drRCxTQUFTbmhELEVBQVE4a0MsU0FHakVxVCxFQUFPMzJDLEtBQUtyRTs7SUFnSmQsU0FBU2lrRCxFQUFRenpDLEdBQVEvUCxHQUFPcWpELEdBQVFuMEMsR0FBSzFNLEdBQU9pbUMsR0FBVXhrQztNQUM1RGpFLEVBQU13aUQsV0FBV3R6QyxHQUNqQmxQLEVBQU11Z0QsVUFBVXQ4QyxHQUNoQmpFLEVBQU1tNUMsV0FBVSxHQUNoQm41QyxFQUFNeTdDLFFBQU8sR0FDVDRILElBQVF0ekMsRUFBT3V6QyxRQUFROWdELEdBQU94QyxFQUFNdWlELFdBQWN4eUMsRUFBT3hOLE9BQU9DLEdBQU9pbUMsR0FBVXpvQyxFQUFNdWlELFVBQzNGdmlELEVBQU15N0MsUUFBTzs7SUEyRGYsU0FBU3VILEVBQVdqekMsR0FBUS9QLEdBQU9raUQsR0FBVWorQztNQUN0Q2krQyxLQVNQLFNBQXNCbnlDLEdBQVEvUDtRQUNQLE1BQWpCQSxFQUFNeUUsVUFBZ0J6RSxFQUFNeS9DLGNBQzlCei9DLEVBQU15L0MsYUFBWSxHQUNsQjF2QyxFQUFPNU8sS0FBSztPQVpDc2lELENBQWExekMsR0FBUS9QLElBQ3BDQSxFQUFNbWhELGFBQ05sOUMsS0FDQXkrQyxFQUFZM3lDLEdBQVEvUDs7SUFjdEIsU0FBUytpRCxFQUFZaHpDLEdBQVEvUDtNQUMzQkEsRUFBTXNpRCxvQkFBbUI7TUFDekIsSUFBSTdTLElBQVF6dkMsRUFBTThpRDtNQUVsQixJQUFJL3lDLEVBQU91ekMsV0FBVzdULEtBQVNBLEVBQU1qL0IsTUFBTTtRQUV6QyxJQUFJa3VDLElBQUkxK0MsRUFBTW1qRDtRQUNkLElBQUk5WixJQUFTLElBQUl0NkIsTUFBTTJ2QztRQUN2QixJQUFJZ0YsSUFBUzFqRCxFQUFNb2hEO1FBQ25Cc0MsRUFBT2pVLFFBQVFBO1FBRWYsSUFBSW1GLElBQVE7UUFDWixJQUFJK08sS0FBYTtRQUNqQixNQUFPbFUsS0FDTHBHLEVBQU91TCxLQUFTbkYsR0FDWEEsRUFBTW1VLFVBQU9ELEtBQWEsSUFDL0JsVSxJQUFRQSxFQUFNai9CLE1BQ2Rva0MsS0FBUztRQUVYdkwsRUFBT3NhLGFBQWFBLEdBRXBCSCxFQUFRenpDLEdBQVEvUCxJQUFPLEdBQU1BLEVBQU15RSxRQUFRNGtDLEdBQVEsSUFBSXFhLEVBQU96QyxTQUk5RGpoRCxFQUFNbWhELGFBQ05uaEQsRUFBTWlqRCxzQkFBc0IsTUFDeEJTLEVBQU9sekMsUUFDVHhRLEVBQU1vaEQscUJBQXFCc0MsRUFBT2x6QztRQUNsQ2t6QyxFQUFPbHpDLE9BQU8sUUFFZHhRLEVBQU1vaEQscUJBQXFCLElBQUlKLEVBQWNoaEQsSUFFL0NBLEVBQU1takQsdUJBQXVCO2FBQ3hCO1FBRUwsTUFBTzFULEtBQU87VUFDWixJQUFJanRDLElBQVFpdEMsRUFBTWp0QztVQUNsQixJQUFJaW1DLElBQVdnSCxFQUFNaEg7VUFDckIsSUFBSXhrQyxJQUFLd3JDLEVBQU0vc0M7VUFVZixJQVBBOGdELEVBQVF6ekMsR0FBUS9QLElBQU8sR0FGYkEsRUFBTStCLGFBQWEsSUFBSVMsRUFBTWlDLFFBRUpqQyxHQUFPaW1DLEdBQVV4a0MsSUFDcER3ckMsSUFBUUEsRUFBTWovQixNQUNkeFEsRUFBTW1qRCx3QkFLRm5qRCxFQUFNbTVDLFNBQ1I7O1FBSVUsU0FBVjFKLE1BQWdCenZDLEVBQU1pakQsc0JBQXNCOztNQUdsRGpqRCxFQUFNOGlELGtCQUFrQnJULEdBQ3hCenZDLEVBQU1zaUQsb0JBQW1COztJQWlDM0IsU0FBU08sRUFBVzdpRDtNQUNsQixPQUFPQSxFQUFNaWlELFVBQTJCLE1BQWpCamlELEVBQU15RSxVQUEwQyxTQUExQnpFLEVBQU04aUQsb0JBQTZCOWlELEVBQU1raUQsYUFBYWxpRCxFQUFNbTVDOztJQUUzRyxTQUFTMEssRUFBVTl6QyxHQUFRL1A7TUFDekIrUCxFQUFPd3pDLFFBQU8sU0FBVXpnRDtRQUN0QjlDLEVBQU1taEQsYUFDRnIrQyxLQUNGaU4sRUFBTzVPLEtBQUssU0FBUzJCLElBRXZCOUMsRUFBTWtqRCxlQUFjLEdBQ3BCbnpDLEVBQU81TyxLQUFLLGNBQ1p1aEQsRUFBWTN5QyxHQUFRL1A7OztJQWdCeEIsU0FBUzBpRCxFQUFZM3lDLEdBQVEvUDtNQUMzQixJQUFJOGpELElBQU9qQixFQUFXN2lEO01BUXRCLE9BUEk4akQsT0FmTixTQUFtQi96QyxHQUFRL1A7UUFDcEJBLEVBQU1rakQsZUFBZ0JsakQsRUFBTWdpRCxnQkFDRixxQkFBbEJqeUMsRUFBT3d6QyxVQUNoQnZqRCxFQUFNbWhELGFBQ05uaEQsRUFBTWdpRCxlQUFjLEdBQ3BCdEksRUFBSXRPLFNBQVN5WSxHQUFXOXpDLEdBQVEvUCxPQUVoQ0EsRUFBTWtqRCxlQUFjO1FBQ3BCbnpDLEVBQU81TyxLQUFLO09BUWQwL0MsQ0FBVTl3QyxHQUFRL1AsSUFDTSxNQUFwQkEsRUFBTW1oRCxjQUNSbmhELEVBQU1raUQsWUFBVyxHQUNqQm55QyxFQUFPNU8sS0FBSyxhQUdUMmlEOztJQXpoQlRsSyxFQUFLQyxTQUFTRSxHQUFVUSxJQW1IeEJrSCxFQUFjLzlDLFVBQVVxZ0QsWUFBWTtNQUNsQyxJQUFJQyxJQUFVemtELEtBQUt1akQ7TUFDbkIsSUFBSW1CLElBQU07TUFDVixNQUFPRCxLQUNMQyxFQUFJaGlELEtBQUsraEQsSUFDVEEsSUFBVUEsRUFBUXh6QztNQUVwQixPQUFPeXpDO09BR1Q7TUFDRTtRQUNFcGxELE9BQU9DLGVBQWUyaUQsRUFBYy85QyxXQUFXLFVBQVU7VUFDdkRILEtBQUttK0MsRUFBYUMsV0FBVTtZQUMxQixPQUFPcGlELEtBQUt3a0Q7Y0FDWCw4RUFBbUY7O1FBRXhGLE9BQU8zOUM7S0FQWCxJQWFzQixxQkFBWDZNLFVBQXlCQSxPQUFPaXhDLGVBQWlFLHFCQUEzQzN0QyxTQUFTN1MsVUFBVXVQLE9BQU9peEMsZ0JBQ3pGZCxJQUFrQjdzQyxTQUFTN1MsVUFBVXVQLE9BQU9peEM7SUFDNUNybEQsT0FBT0MsZUFBZWk3QyxHQUFVOW1DLE9BQU9peEMsYUFBYTtNQUNsRGxsRCxPQUFPLFNBQVU4SjtRQUNmLFNBQUlzNkMsRUFBZ0J4L0MsS0FBS3JFLE1BQU11SixNQUMzQnZKLFNBQVN3NkMsTUFFTmp4QyxLQUFVQSxFQUFPMmhDLDBCQUEwQmdYOztVQUl0RDJCLElBQWtCLFNBQVV0NkM7TUFDMUIsT0FBT0EsYUFBa0J2SjtPQXFDN0J3NkMsRUFBU3IyQyxVQUFVeEIsT0FBTztNQUN4QjNDLEtBQUs0QixLQUFLLFNBQVMsSUFBSStKLE1BQU07T0E4Qi9CNnVDLEVBQVNyMkMsVUFBVXBCLFFBQVEsU0FBVUUsR0FBT2ltQyxHQUFVeGtDO01BQ3BELElBQUlqRSxJQUFRVCxLQUFLa3JDO01BQ2pCLElBQUltVCxLQUFNO01BQ1YsSUFBSWdHLEtBQVM1akQsRUFBTStCLGNBck9yQixTQUF1QmlDO1FBQ3JCLE9BQU8yaEMsRUFBT00sU0FBU2ppQyxNQUFRQSxhQUFldzJDO09Bb09iK0IsQ0FBYy81QztNQW9CL0MsT0FsQklvaEQsTUFBVWplLEVBQU9NLFNBQVN6akMsT0FDNUJBLElBM09KLFNBQTZCQTtRQUMzQixPQUFPbWpDLEVBQU96dUIsS0FBSzFVO09BME9UaTZDLENBQW9CajZDLEtBR04scUJBQWJpbUMsTUFDVHhrQyxJQUFLd2tDLEdBQ0xBLElBQVcsT0FHVG1iLElBQU9uYixJQUFXLFdBQW1CQSxNQUFVQSxJQUFXem9DLEVBQU04N0Msa0JBRWxELHFCQUFQNzNDLE1BQW1CQSxJQUFLMjlDO01BRS9CNWhELEVBQU1zckMsUUE3Q1osU0FBdUJ2N0IsR0FBUTlMO1FBQzdCLElBQUlnTCxJQUFLLElBQUkvRCxNQUFNO1FBRW5CNkUsRUFBTzVPLEtBQUssU0FBUzhOLElBQ3JCeXFDLEVBQUl0TyxTQUFTbm5DLEdBQUlnTDtPQXlDQWsxQyxDQUFjNWtELE1BQU0wRSxNQUFhMi9DLEtBbkNwRCxTQUFvQjd6QyxHQUFRL1AsR0FBT3dDLEdBQU95QjtRQUN4QyxJQUFJbWdELEtBQVE7UUFDWixJQUFJbjFDLEtBQUs7UUFZVCxPQVZjLFNBQVZ6TSxJQUNGeU0sSUFBSyxJQUFJeUYsVUFBVSx5Q0FDTyxtQkFBVmxTLFVBQWdDYSxNQUFWYixLQUF3QnhDLEVBQU0rQixlQUNwRWtOLElBQUssSUFBSXlGLFVBQVU7UUFFakJ6RixNQUNGYyxFQUFPNU8sS0FBSyxTQUFTOE4sSUFDckJ5cUMsRUFBSXRPLFNBQVNubkMsR0FBSWdMLElBQ2pCbTFDLEtBQVEsSUFFSEE7T0FxQm9EQyxDQUFXOWtELE1BQU1TLEdBQU93QyxHQUFPeUIsUUFDeEZqRSxFQUFNbWhELGFBQ052RCxJQWtESixTQUF1Qjd0QyxHQUFRL1AsR0FBTzRqRCxHQUFPcGhELEdBQU9pbUMsR0FBVXhrQztRQUM1RCxLQUFLMi9DLEdBQU87VUFDVixJQUFJVSxJQXRCUixTQUFxQnRrRCxHQUFPd0MsR0FBT2ltQztZQUM1QnpvQyxFQUFNK0IsZUFBc0MsTUFBeEIvQixFQUFNb2lELGlCQUE0QyxtQkFBVjUvQyxNQUMvREEsSUFBUW1qQyxFQUFPenVCLEtBQUsxVSxHQUFPaW1DO1lBRTdCLE9BQU9qbUM7V0FrQlUraEQsQ0FBWXZrRCxHQUFPd0MsR0FBT2ltQztVQUNyQ2ptQyxNQUFVOGhELE1BQ1pWLEtBQVEsR0FDUm5iLElBQVcsVUFDWGptQyxJQUFROGhEOztRQUdaLElBQUlwMUMsSUFBTWxQLEVBQU0rQixhQUFhLElBQUlTLEVBQU1pQztRQUV2Q3pFLEVBQU15RSxVQUFVeUs7UUFFaEIsSUFBSTB1QyxJQUFNNTlDLEVBQU15RSxTQUFTekUsRUFBTWs2QztRQUUxQjBELE1BQUs1OUMsRUFBTXkvQyxhQUFZO1FBRTVCLElBQUl6L0MsRUFBTW01QyxXQUFXbjVDLEVBQU1xaUQsUUFBUTtVQUNqQyxJQUFJbUMsSUFBT3hrRCxFQUFNaWpEO1VBQ2pCampELEVBQU1pakQsc0JBQXNCO1lBQzFCemdELE9BQU9BO1lBQ1BpbUMsVUFBVUE7WUFDVm1iLE9BQU9BO1lBQ1BsaEQsVUFBVXVCO1lBQ1Z1TSxNQUFNO2FBRUpnMEMsSUFDRkEsRUFBS2gwQyxPQUFPeFEsRUFBTWlqRCxzQkFFbEJqakQsRUFBTThpRCxrQkFBa0I5aUQsRUFBTWlqRCxxQkFFaENqakQsRUFBTW1qRCx3QkFBd0I7ZUFFOUJLLEVBQVF6ekMsR0FBUS9QLElBQU8sR0FBT2tQLEdBQUsxTSxHQUFPaW1DLEdBQVV4a0M7UUFHdEQsT0FBTzI1QztPQXRGQzZHLENBQWNsbEQsTUFBTVMsR0FBTzRqRCxHQUFPcGhELEdBQU9pbUMsR0FBVXhrQyxLQUdwRDI1QztPQUdUN0QsRUFBU3IyQyxVQUFVaUssT0FBTztNQUNacE8sS0FBS2tyQyxlQUVYNFg7T0FHUnRJLEVBQVNyMkMsVUFBVW1LLFNBQVM7TUFDMUIsSUFBSTdOLElBQVFULEtBQUtrckM7TUFFYnpxQyxFQUFNcWlELFdBQ1JyaUQsRUFBTXFpRCxVQUVEcmlELEVBQU1tNUMsV0FBWW41QyxFQUFNcWlELFVBQVdyaUQsRUFBTWtpRCxZQUFhbGlELEVBQU1zaUQscUJBQW9CdGlELEVBQU04aUQsbUJBQWlCQyxFQUFZeGpELE1BQU1TO09BSWxJKzVDLEVBQVNyMkMsVUFBVWdoRCxxQkFBcUIsU0FBNEJqYztNQUdsRSxJQUR3QixtQkFBYkEsTUFBdUJBLElBQVdBLEVBQVNrYyxrQkFDaEQsRUFBQyxPQUFPLFFBQVEsU0FBUyxTQUFTLFVBQVUsVUFBVSxRQUFRLFNBQVMsV0FBVyxZQUFZLFFBQU9qZ0QsU0FBUytqQyxJQUFXLElBQUlrYyxrQkFBa0IsSUFBSSxNQUFNLElBQUlqd0MsVUFBVSx1QkFBdUIrekI7TUFFcE0sT0FEQWxwQyxLQUFLa3JDLGVBQWVxUixrQkFBa0JyVCxHQUMvQmxwQztPQVVUVixPQUFPQyxlQUFlaTdDLEVBQVNyMkMsV0FBVyx5QkFBeUI7TUFJakVKLGFBQVk7TUFDWkMsS0FBSztRQUNILE9BQU9oRSxLQUFLa3JDLGVBQWV5UDs7UUE4TC9CSCxFQUFTcjJDLFVBQVVuQixTQUFTLFNBQVVDLEdBQU9pbUMsR0FBVXhrQztNQUNyREEsRUFBRyxJQUFJaUgsTUFBTTtPQUdmNnVDLEVBQVNyMkMsVUFBVTQvQyxVQUFVLE1BRTdCdkosRUFBU3IyQyxVQUFVeU0sTUFBTSxTQUFVM04sR0FBT2ltQyxHQUFVeGtDO01BQ2xELElBQUlqRSxJQUFRVCxLQUFLa3JDO01BRUkscUJBQVZqb0MsS0FDVHlCLElBQUt6QixHQUNMQSxJQUFRLE1BQ1JpbUMsSUFBVyxRQUNrQixxQkFBYkEsTUFDaEJ4a0MsSUFBS3drQyxHQUNMQSxJQUFXLE9BR1RqbUMsYUFBdUNqRCxLQUFLK0MsTUFBTUUsR0FBT2ltQztNQUd6RHpvQyxFQUFNcWlELFdBQ1JyaUQsRUFBTXFpRCxTQUFTLEdBQ2Y5aUQsS0FBS3NPLFdBSUY3TixFQUFNaWlELFVBQVdqaUQsRUFBTWtpRCxZQTBDOUIsU0FBcUJueUMsR0FBUS9QLEdBQU9pRTtRQUNsQ2pFLEVBQU1paUQsVUFBUyxHQUNmUyxFQUFZM3lDLEdBQVEvUCxJQUNoQmlFLE1BQ0VqRSxFQUFNa2lELFdBQVV4SSxFQUFJdE8sU0FBU25uQyxLQUFTOEwsRUFBTzRqQixLQUFLLFVBQVUxdkI7UUFFbEVqRSxFQUFNc3JDLFNBQVEsR0FDZHY3QixFQUFPaEwsWUFBVztPQWpEb0I2L0MsQ0FBWXJsRCxNQUFNUyxHQUFPaUU7T0FvRWpFcEYsT0FBT0MsZUFBZWk3QyxFQUFTcjJDLFdBQVcsYUFBYTtNQUNyREgsS0FBSztRQUNILFlBQTRCRixNQUF4QjlELEtBQUtrckMsa0JBR0ZsckMsS0FBS2tyQyxlQUFlYzs7TUFFN0IzMEIsS0FBSyxTQUFVNVg7UUFHUk8sS0FBS2tyQyxtQkFNVmxyQyxLQUFLa3JDLGVBQWVjLFlBQVl2c0M7O1FBSXBDKzZDLEVBQVNyMkMsVUFBVStQLFVBQVVtbkMsRUFBWW5uQyxTQUN6Q3NtQyxFQUFTcjJDLFVBQVVvNUMsYUFBYWxDLEVBQVltQyxXQUM1Q2hELEVBQVNyMkMsVUFBVWIsV0FBVyxTQUFVQyxHQUFLbUI7TUFDM0MxRSxLQUFLNFEsT0FDTGxNLEVBQUduQjs7Ozs7SUN6cUJMLElBQUk2aUMsSUFBUztJQUNiLElBQUlpVSxJQUFPLEVBQVE7SUFFbkIsU0FBU2lMLEVBQVc3c0IsR0FBSzN6QixHQUFReWdEO01BQy9COXNCLEVBQUkxb0IsS0FBS2pMLEdBQVF5Z0Q7O0lBR25CeGIsRUFBT3ZxQyxVQUFVO01BQ2YsU0FBUzQ3QztTQVZYLFNBQXlCbm1DLEdBQVVDO1VBQWUsTUFBTUQsYUFBb0JDLElBQWdCLE1BQU0sSUFBSUMsVUFBVTtTQVc1R0gsQ0FBZ0JoVixNQUFNbzdDLElBRXRCcDdDLEtBQUt3NkIsT0FBTyxNQUNaeDZCLEtBQUsyK0MsT0FBTyxNQUNaMytDLEtBQUtrRixTQUFTOztNQXFEaEIsT0FsREFrMkMsRUFBV2ozQyxVQUFVekIsT0FBTyxTQUFjd2lCO1FBQ3hDLElBQUlnckIsSUFBUTtVQUFFM2pDLE1BQU0yWTtVQUFHalUsTUFBTTs7UUFDekJqUixLQUFLa0YsU0FBUyxJQUFHbEYsS0FBSzIrQyxLQUFLMXRDLE9BQU9pL0IsSUFBV2x3QyxLQUFLdzZCLE9BQU8wVixHQUM3RGx3QyxLQUFLMitDLE9BQU96TyxLQUNWbHdDLEtBQUtrRjtTQUdUazJDLEVBQVdqM0MsVUFBVW01QyxVQUFVLFNBQWlCcDRCO1FBQzlDLElBQUlnckIsSUFBUTtVQUFFM2pDLE1BQU0yWTtVQUFHalUsTUFBTWpSLEtBQUt3NkI7O1FBQ2QsTUFBaEJ4NkIsS0FBS2tGLFdBQWNsRixLQUFLMitDLE9BQU96TyxJQUNuQ2x3QyxLQUFLdzZCLE9BQU8wVixLQUNWbHdDLEtBQUtrRjtTQUdUazJDLEVBQVdqM0MsVUFBVW02QyxRQUFRO1FBQzNCLElBQW9CLE1BQWhCdCtDLEtBQUtrRixRQUFUO1VBQ0EsSUFBSW01QyxJQUFNcitDLEtBQUt3NkIsS0FBS2p1QjtVQUdwQixPQUZvQixNQUFoQnZNLEtBQUtrRixTQUFjbEYsS0FBS3c2QixPQUFPeDZCLEtBQUsyK0MsT0FBTyxPQUFVMytDLEtBQUt3NkIsT0FBT3g2QixLQUFLdzZCLEtBQUt2cEIsUUFDN0VqUixLQUFLa0YsUUFDQW01Qzs7U0FHVGpELEVBQVdqM0MsVUFBVThyQyxRQUFRO1FBQzNCandDLEtBQUt3NkIsT0FBT3g2QixLQUFLMitDLE9BQU8sTUFDeEIzK0MsS0FBS2tGLFNBQVM7U0FHaEJrMkMsRUFBV2ozQyxVQUFVaVcsT0FBTyxTQUFjSztRQUN4QyxJQUFvQixNQUFoQnphLEtBQUtrRixRQUFjLE9BQU87UUFDOUIsSUFBSWhCLElBQUlsRSxLQUFLdzZCO1FBQ2IsSUFBSTZqQixJQUFNLEtBQUtuNkMsRUFBRXFJO1FBQ2pCLE1BQU9ySSxJQUFJQSxFQUFFK00sUUFDWG90QyxLQUFPNWpDLElBQUl2VyxFQUFFcUk7UUFDZCxPQUFPOHhDO1NBR1ZqRCxFQUFXajNDLFVBQVU0QyxTQUFTLFNBQWdCK0k7UUFDNUMsSUFBb0IsTUFBaEI5UCxLQUFLa0YsUUFBYyxPQUFPa2hDLEVBQU9FLE1BQU07UUFDM0MsSUFBb0IsTUFBaEJ0bUMsS0FBS2tGLFFBQWMsT0FBT2xGLEtBQUt3NkIsS0FBS2p1QjtRQUN4QyxJQUFJOHhDLElBQU1qWSxFQUFPNEksWUFBWWwvQixNQUFNO1FBQ25DLElBQUk1TCxJQUFJbEUsS0FBS3c2QjtRQUNiLElBQUl2MUIsSUFBSTtRQUNSLE1BQU9mLEtBQ0xvaEQsRUFBV3BoRCxFQUFFcUksTUFBTTh4QyxHQUFLcDVDLElBQ3hCQSxLQUFLZixFQUFFcUksS0FBS3JILFFBQ1poQixJQUFJQSxFQUFFK007UUFFUixPQUFPb3RDO1NBR0ZqRDtLQTNEUSxJQThEYmYsS0FBUUEsRUFBS21MLFdBQVduTCxFQUFLbUwsUUFBUUMsV0FDdkMxYixFQUFPdnFDLFFBQVEyRSxVQUFVazJDLEVBQUttTCxRQUFRQyxVQUFVO01BQzlDLElBQUloaEQsSUFBTTQxQyxFQUFLbUwsUUFBUTtRQUFFdGdELFFBQVFsRixLQUFLa0Y7O01BQ3RDLE9BQU9sRixLQUFLSCxZQUFZbUcsT0FBTyxNQUFNdkI7Ozs7O0lDeEV6QyxJQUFJMDFDLElBQU0sRUFBUTtJQThEbEIsU0FBU3VMLEVBQVkzd0MsR0FBTXhSO01BQ3pCd1IsRUFBS25ULEtBQUssU0FBUzJCOztJQUdyQndtQyxFQUFPdnFDLFVBQVU7TUFDZjBVLFNBL0RGLFNBQWlCM1EsR0FBS21CO1FBQ3BCLElBQUkrVCxJQUFRelk7UUFFWixJQUFJMmxELElBQW9CM2xELEtBQUtvckMsa0JBQWtCcHJDLEtBQUtvckMsZUFBZVk7UUFDbkUsSUFBSTRaLElBQW9CNWxELEtBQUtrckMsa0JBQWtCbHJDLEtBQUtrckMsZUFBZWM7UUFFbkUsT0FBSTJaLEtBQXFCQyxLQUNuQmxoRCxJQUNGQSxFQUFHbkIsTUFDTUEsS0FBU3ZELEtBQUtrckMsa0JBQW1CbHJDLEtBQUtrckMsZUFBZWtZLGdCQUM5RGpKLEVBQUl0TyxTQUFTNlosR0FBYTFsRCxNQUFNdUQsSUFFM0J2RCxTQU1MQSxLQUFLb3JDLG1CQUNQcHJDLEtBQUtvckMsZUFBZVksYUFBWTtRQUk5QmhzQyxLQUFLa3JDLG1CQUNQbHJDLEtBQUtrckMsZUFBZWMsYUFBWSxJQUdsQ2hzQyxLQUFLc0QsU0FBU0MsS0FBTyxPQUFNLFNBQVVBO1dBQzlCbUIsS0FBTW5CLEtBQ1Q0MkMsRUFBSXRPLFNBQVM2WixHQUFhanRDLEdBQU9sVixJQUM3QmtWLEVBQU15eUIsbUJBQ1J6eUIsRUFBTXl5QixlQUFla1ksZ0JBQWUsTUFFN0IxK0MsS0FDVEEsRUFBR25CO2FBSUF2RDs7TUEwQlB3OUMsV0F2QkY7UUFDTXg5QyxLQUFLb3JDLG1CQUNQcHJDLEtBQUtvckMsZUFBZVksYUFBWSxHQUNoQ2hzQyxLQUFLb3JDLGVBQWV1TyxXQUFVLEdBQzlCMzVDLEtBQUtvckMsZUFBZVcsU0FBUTtRQUM1Qi9yQyxLQUFLb3JDLGVBQWU2USxjQUFhLElBRy9CajhDLEtBQUtrckMsbUJBQ1BsckMsS0FBS2tyQyxlQUFlYyxhQUFZLEdBQ2hDaHNDLEtBQUtrckMsZUFBZWEsU0FBUTtRQUM1Qi9yQyxLQUFLa3JDLGVBQWV3WCxVQUFTLEdBQzdCMWlELEtBQUtrckMsZUFBZXlYLFlBQVcsR0FDL0IzaUQsS0FBS2tyQyxlQUFla1ksZ0JBQWU7Ozs7O0lDOUR2Q3JaLEVBQU92cUMsVUFBVSxFQUFqQjs7O0tDQUFBLElBQVV1cUMsRUFBT3ZxQyxVQUFVLEVBQWpCLFFBQ0Z3N0MsU0FBU3g3QyxHQUNqQkEsRUFBUSs2QyxXQUFXLzZDLEdBQ25CQSxFQUFRZzdDLFdBQVcsRUFBbkIsUUFDQWg3QyxFQUFROEMsU0FBUyxFQUFqQixRQUNBOUMsRUFBUXE3QyxZQUFZLEVBQXBCO0lBQ0FyN0MsRUFBUW83QyxjQUFjLEVBQXRCOzs7O0lDbUJBLElBQUl4VSxJQUFTO0lBR2IsSUFBSXlmLElBQWF6ZixFQUFPeWYsY0FBYyxTQUFVM2M7TUFFOUMsU0FEQUEsSUFBVyxLQUFLQSxNQUNJQSxFQUFTa2M7T0FDM0IsS0FBSztPQUFNLEtBQUs7T0FBTyxLQUFLO09BQVEsS0FBSztPQUFRLEtBQUs7T0FBUyxLQUFLO09BQVMsS0FBSztPQUFPLEtBQUs7T0FBUSxLQUFLO09BQVUsS0FBSztPQUFXLEtBQUs7UUFDeEksUUFBTzs7T0FDVDtRQUNFLFFBQU87OztJQTRDYixTQUFTOUosRUFBY3BTO01BRXJCLElBQUl3VjtNQUNKLFFBRkExK0MsS0FBS2twQyxXQVhQLFNBQTJCeVU7UUFDekIsSUFBSW1JLElBL0JOLFNBQTRCbkk7VUFDMUIsS0FBS0EsR0FBSyxPQUFPO1VBQ2pCLElBQUlvSTtVQUNKLFNBQ0UsUUFBUXBJO1dBQ04sS0FBSztXQUNMLEtBQUs7WUFDSCxPQUFPOztXQUNULEtBQUs7V0FDTCxLQUFLO1dBQ0wsS0FBSztXQUNMLEtBQUs7WUFDSCxPQUFPOztXQUNULEtBQUs7V0FDTCxLQUFLO1lBQ0gsT0FBTzs7V0FDVCxLQUFLO1dBQ0wsS0FBSztXQUNMLEtBQUs7WUFDSCxPQUFPQTs7V0FDVDtZQUNFLElBQUlvSSxHQUFTO1lBQ2JwSSxLQUFPLEtBQUtBLEdBQUt5SCxlQUNqQlcsS0FBVTs7U0FRTEMsQ0FBbUJySTtRQUM5QixJQUFvQixtQkFBVG1JLE1BQXNCMWYsRUFBT3lmLGVBQWVBLE1BQWVBLEVBQVdsSSxLQUFPLE1BQU0sSUFBSWh5QyxNQUFNLHVCQUF1Qmd5QztRQUMvSCxPQUFPbUksS0FBUW5JO09BUUNzSSxDQUFrQi9jLElBRTFCbHBDLEtBQUtrcEM7T0FDWCxLQUFLO1FBQ0hscEMsS0FBS2krQixPQUFPaW9CLEdBQ1psbUQsS0FBSzRRLE1BQU11MUMsR0FDWHpILElBQUs7UUFDTDs7T0FDRixLQUFLO1FBQ0gxK0MsS0FBS29tRCxXQUFXQyxHQUNoQjNILElBQUs7UUFDTDs7T0FDRixLQUFLO1FBQ0gxK0MsS0FBS2krQixPQUFPcW9CLEdBQ1p0bUQsS0FBSzRRLE1BQU0yMUMsR0FDWDdILElBQUs7UUFDTDs7T0FDRjtRQUdFLE9BRkExK0MsS0FBSytDLFFBQVF5akQsU0FDYnhtRCxLQUFLNFEsTUFBTTYxQzs7TUFHZnptRCxLQUFLMG1ELFdBQVcsR0FDaEIxbUQsS0FBSzJtRCxZQUFZLEdBQ2pCM21ELEtBQUs0bUQsV0FBV3hnQixFQUFPNEksWUFBWTBQOztJQW9DckMsU0FBU21JLEVBQWNDO01BQ3JCLE9BQUlBLEtBQVEsTUFBYSxJQUFXQSxLQUFRLEtBQU0sSUFBYSxJQUFXQSxLQUFRLEtBQU0sS0FBYSxJQUFXQSxLQUFRLEtBQU0sS0FBYSxJQUNwSUEsS0FBUSxLQUFNLEtBQVEsS0FBSzs7SUEyRHBDLFNBQVNULEVBQWF4SDtNQUNwQixJQUFJMzZDLElBQUlsRSxLQUFLMm1ELFlBQVkzbUQsS0FBSzBtRDtNQUM5QixJQUFJai9CLElBdEJOLFNBQTZCMVMsR0FBTThwQyxHQUFLMzZDO1FBQ3RDLElBQXdCLFFBQVYsTUFBVDI2QyxFQUFJLEtBRVAsT0FEQTlwQyxFQUFLMnhDLFdBQVcsR0FDVDtRQUVULElBQUkzeEMsRUFBSzJ4QyxXQUFXLEtBQUs3SCxFQUFJMzVDLFNBQVMsR0FBRztVQUN2QyxJQUF3QixRQUFWLE1BQVQyNUMsRUFBSSxLQUVQLE9BREE5cEMsRUFBSzJ4QyxXQUFXLEdBQ1Q7VUFFVCxJQUFJM3hDLEVBQUsyeEMsV0FBVyxLQUFLN0gsRUFBSTM1QyxTQUFTLEtBQ1osUUFBVixNQUFUMjVDLEVBQUksS0FFUCxPQURBOXBDLEVBQUsyeEMsV0FBVyxHQUNUOztPQVNMSyxDQUFvQi9tRCxNQUFNNitDO01BQ2xDLFlBQVUvNkMsTUFBTjJqQixJQUF3QkEsSUFDeEJ6bkIsS0FBSzBtRCxZQUFZN0gsRUFBSTM1QyxVQUN2QjI1QyxFQUFJOXVDLEtBQUsvUCxLQUFLNG1ELFVBQVUxaUQsR0FBRyxHQUFHbEUsS0FBSzBtRCxXQUM1QjFtRCxLQUFLNG1ELFNBQVN4MkMsU0FBU3BRLEtBQUtrcEMsVUFBVSxHQUFHbHBDLEtBQUsybUQsZUFFdkQ5SCxFQUFJOXVDLEtBQUsvUCxLQUFLNG1ELFVBQVUxaUQsR0FBRyxHQUFHMjZDLEVBQUkzNUM7WUFDbENsRixLQUFLMG1ELFlBQVk3SCxFQUFJMzVDOztJQTJCdkIsU0FBU2doRCxFQUFVckgsR0FBSzU1QztNQUN0QixLQUFLNDVDLEVBQUkzNUMsU0FBU0QsS0FBSyxLQUFNLEdBQUc7UUFDOUIsSUFBSXdpQixJQUFJbzNCLEVBQUl6dUMsU0FBUyxXQUFXbkw7UUFDaEMsSUFBSXdpQixHQUFHO1VBQ0wsSUFBSWczQixJQUFJaDNCLEVBQUV1L0IsV0FBV3YvQixFQUFFdmlCLFNBQVM7VUFDaEMsSUFBSXU1QyxLQUFLLFNBQVVBLEtBQUssT0FLdEIsT0FKQXorQyxLQUFLMG1ELFdBQVcsR0FDaEIxbUQsS0FBSzJtRCxZQUFZLEdBQ2pCM21ELEtBQUs0bUQsU0FBUyxLQUFLL0gsRUFBSUEsRUFBSTM1QyxTQUFTLElBQ3BDbEYsS0FBSzRtRCxTQUFTLEtBQUsvSCxFQUFJQSxFQUFJMzVDLFNBQVM7VUFDN0J1aUIsRUFBRTVQLE1BQU0sSUFBSTs7UUFHdkIsT0FBTzRQOztNQUtULE9BSEF6bkIsS0FBSzBtRCxXQUFXLEdBQ2hCMW1ELEtBQUsybUQsWUFBWSxHQUNqQjNtRCxLQUFLNG1ELFNBQVMsS0FBSy9ILEVBQUlBLEVBQUkzNUMsU0FBUyxJQUM3QjI1QyxFQUFJenVDLFNBQVMsV0FBV25MLEdBQUc0NUMsRUFBSTM1QyxTQUFTOztJQUtqRCxTQUFTaWhELEVBQVN0SDtNQUNoQixJQUFJcDNCLElBQUlvM0IsS0FBT0EsRUFBSTM1QyxTQUFTbEYsS0FBSytDLE1BQU04N0MsS0FBTztNQUM5QyxJQUFJNytDLEtBQUswbUQsVUFBVTtRQUNqQixJQUFJOTFDLElBQU01USxLQUFLMm1ELFlBQVkzbUQsS0FBSzBtRDtRQUNoQyxPQUFPai9CLElBQUl6bkIsS0FBSzRtRCxTQUFTeDJDLFNBQVMsV0FBVyxHQUFHUTs7TUFFbEQsT0FBTzZXOztJQUdULFNBQVM2K0IsRUFBV3pILEdBQUs1NUM7TUFDdkIsSUFBSTZLLEtBQUsrdUMsRUFBSTM1QyxTQUFTRCxLQUFLO01BQzNCLE9BQVUsTUFBTjZLLElBQWdCK3VDLEVBQUl6dUMsU0FBUyxVQUFVbkwsTUFDM0NqRixLQUFLMG1ELFdBQVcsSUFBSTUyQyxHQUNwQjlQLEtBQUsybUQsWUFBWSxHQUNQLE1BQU43MkMsSUFDRjlQLEtBQUs0bUQsU0FBUyxLQUFLL0gsRUFBSUEsRUFBSTM1QyxTQUFTLE1BRXBDbEYsS0FBSzRtRCxTQUFTLEtBQUsvSCxFQUFJQSxFQUFJMzVDLFNBQVM7TUFDcENsRixLQUFLNG1ELFNBQVMsS0FBSy9ILEVBQUlBLEVBQUkzNUMsU0FBUyxLQUUvQjI1QyxFQUFJenVDLFNBQVMsVUFBVW5MLEdBQUc0NUMsRUFBSTM1QyxTQUFTNEs7O0lBR2hELFNBQVN5MkMsRUFBVTFIO01BQ2pCLElBQUlwM0IsSUFBSW8zQixLQUFPQSxFQUFJMzVDLFNBQVNsRixLQUFLK0MsTUFBTTg3QyxLQUFPO01BQzlDLE9BQUk3K0MsS0FBSzBtRCxXQUFpQmovQixJQUFJem5CLEtBQUs0bUQsU0FBU3gyQyxTQUFTLFVBQVUsR0FBRyxJQUFJcFEsS0FBSzBtRCxZQUNwRWovQjs7SUFJVCxTQUFTKytCLEVBQVkzSDtNQUNuQixPQUFPQSxFQUFJenVDLFNBQVNwUSxLQUFLa3BDOztJQUczQixTQUFTdWQsRUFBVTVIO01BQ2pCLE9BQU9BLEtBQU9BLEVBQUkzNUMsU0FBU2xGLEtBQUsrQyxNQUFNODdDLEtBQU87O0lBek4vQ3IvQyxFQUFRLElBQWdCODdDLEdBNkJ4QkEsRUFBY24zQyxVQUFVcEIsUUFBUSxTQUFVODdDO01BQ3hDLElBQW1CLE1BQWZBLEVBQUkzNUMsUUFBYyxPQUFPO01BQzdCLElBQUl1aUI7TUFDSixJQUFJeGlCO01BQ0osSUFBSWpGLEtBQUswbUQsVUFBVTtRQUVqQixTQUFVNWlELE9BRFYyakIsSUFBSXpuQixLQUFLb21ELFNBQVN2SCxLQUNHLE9BQU87UUFDNUI1NUMsSUFBSWpGLEtBQUswbUQsVUFDVDFtRCxLQUFLMG1ELFdBQVc7YUFFaEJ6aEQsSUFBSTtNQUVOLE9BQUlBLElBQUk0NUMsRUFBSTM1QyxTQUFldWlCLElBQUlBLElBQUl6bkIsS0FBS2krQixLQUFLNGdCLEdBQUs1NUMsS0FBS2pGLEtBQUtpK0IsS0FBSzRnQixHQUFLNTVDLEtBQy9Ed2lCLEtBQUs7T0FHZDZ6QixFQUFjbjNDLFVBQVV5TSxNQXdHeEIsU0FBaUJpdUM7TUFDZixJQUFJcDNCLElBQUlvM0IsS0FBT0EsRUFBSTM1QyxTQUFTbEYsS0FBSytDLE1BQU04N0MsS0FBTztNQUM5QyxPQUFJNytDLEtBQUswbUQsV0FBaUJqL0IsSUFBSSxNQUN2QkE7T0F4R1Q2ekIsRUFBY24zQyxVQUFVODVCLE9BMEZ4QixTQUFrQjRnQixHQUFLNTVDO01BQ3JCLElBQUlnaUQsSUFyRU4sU0FBNkJseUMsR0FBTThwQyxHQUFLNTVDO1FBQ3RDLElBQUk0VixJQUFJZ2tDLEVBQUkzNUMsU0FBUztRQUNyQixJQUFJMlYsSUFBSTVWLEdBQUcsT0FBTztRQUNsQixJQUFJeTVDLElBQUttSSxFQUFjaEksRUFBSWhrQztRQUMzQixJQUFJNmpDLEtBQU0sR0FFUixPQURJQSxJQUFLLE1BQUczcEMsRUFBSzJ4QyxXQUFXaEksSUFBSyxJQUMxQkE7UUFFVCxNQUFNN2pDLElBQUk1VixNQUFhLE1BQVJ5NUMsR0FBVyxPQUFPO1FBRWpDLEtBREFBLElBQUttSSxFQUFjaEksRUFBSWhrQyxRQUNiLEdBRVIsT0FESTZqQyxJQUFLLE1BQUczcEMsRUFBSzJ4QyxXQUFXaEksSUFBSyxJQUMxQkE7UUFFVCxNQUFNN2pDLElBQUk1VixNQUFhLE1BQVJ5NUMsR0FBVyxPQUFPO1FBRWpDLEtBREFBLElBQUttSSxFQUFjaEksRUFBSWhrQyxRQUNiLEdBSVIsT0FISTZqQyxJQUFLLE1BQ0ksTUFBUEEsSUFBVUEsSUFBSyxJQUFPM3BDLEVBQUsyeEMsV0FBV2hJLElBQUssSUFFMUNBO1FBRVQsT0FBTztPQStDS3dJLENBQW9CbG5ELE1BQU02K0MsR0FBSzU1QztNQUMzQyxLQUFLakYsS0FBSzBtRCxVQUFVLE9BQU83SCxFQUFJenVDLFNBQVMsUUFBUW5MO01BQ2hEakYsS0FBSzJtRCxZQUFZTTtNQUNqQixJQUFJcjJDLElBQU1pdUMsRUFBSTM1QyxVQUFVK2hELElBQVFqbkQsS0FBSzBtRDtNQUVyQyxPQURBN0gsRUFBSTl1QyxLQUFLL1AsS0FBSzRtRCxVQUFVLEdBQUdoMkMsSUFDcEJpdUMsRUFBSXp1QyxTQUFTLFFBQVFuTCxHQUFHMkw7T0E3RmpDMHFDLEVBQWNuM0MsVUFBVWlpRCxXQUFXLFNBQVV2SDtNQUMzQyxJQUFJNytDLEtBQUswbUQsWUFBWTdILEVBQUkzNUMsUUFFdkIsT0FEQTI1QyxFQUFJOXVDLEtBQUsvUCxLQUFLNG1ELFVBQVU1bUQsS0FBSzJtRCxZQUFZM21ELEtBQUswbUQsVUFBVSxHQUFHMW1ELEtBQUswbUQsV0FDekQxbUQsS0FBSzRtRCxTQUFTeDJDLFNBQVNwUSxLQUFLa3BDLFVBQVUsR0FBR2xwQyxLQUFLMm1EO01BRXZEOUgsRUFBSTl1QyxLQUFLL1AsS0FBSzRtRCxVQUFVNW1ELEtBQUsybUQsWUFBWTNtRCxLQUFLMG1ELFVBQVUsR0FBRzdILEVBQUkzNUMsU0FDL0RsRixLQUFLMG1ELFlBQVk3SCxFQUFJMzVDOzs7OztJQ3RJdkIsSUFBSTIxQyxJQUFZLG9CQUNaUCxJQUFZLG1CQUNaNk0sSUFBWSxFQUFRO0lBRXhCLFNBQVNDLEVBQXFCN2U7TUFDNUJzUyxFQUFVeDJDLEtBQUtyRSxNQUFNdW9DLElBQ3JCdm9DLEtBQUtxbkQsY0FBYTs7SUFrQnBCLFNBQVNwNkMsRUFBTWhLLEdBQU8wNkMsR0FBS3g2QztNQUN6QkEsRUFBUyxNQUFNRjs7SUFNakIsU0FBU3FrRCxFQUFVaHhDO01BQ2pCLE9BQU8sU0FBVXpULEdBQVM4cEMsR0FBV3lVO1FBYW5DLE9BWnNCLHFCQUFYditDLE1BQ1R1K0MsSUFBWXpVLEdBQ1pBLElBQVk5cEMsR0FDWkEsSUFBWSxLQUdVLHFCQUFiOHBDLE1BQ1RBLElBQVkxL0IsSUFFTSxxQkFBVG0wQyxNQUNUQSxJQUFRO1FBRUg5cUMsRUFBVXpULEdBQVM4cEMsR0FBV3lVOzs7SUFwQ3pDOUcsRUFBUzhNLEdBQXNCdk0sSUFFL0J1TSxFQUFxQmpqRCxVQUFVK1AsVUFBVSxTQUFTM1E7TUFDaEQsS0FBSXZELEtBQUtxbkQsWUFBVDtRQUNBcm5ELEtBQUtxbkQsY0FBYTtRQUVsQixJQUFJdHlDLElBQU8vVTtRQUNYNHJDLEVBQVFDLFVBQVM7VUFDWHRvQyxLQUNGd1IsRUFBS25ULEtBQUssU0FBUzJCLElBQ3JCd1IsRUFBS25ULEtBQUs7OztPQWdDZG1vQyxFQUFPdnFDLFVBQVU4bkQsR0FBUyxTQUFVemtELEdBQVM4cEMsR0FBV3lVO01BQ3RELElBQUltRyxJQUFLLElBQUlILEVBQXFCdmtEO01BT2xDLE9BTEEwa0QsRUFBRzNhLGFBQWFELEdBRVp5VSxNQUNGbUcsRUFBR2xHLFNBQVNELElBRVBtRztTQU1UeGQsRUFBT3ZxQyxRQUFRZ29ELE9BQU9GLEdBQVMsU0FBVXprRCxHQUFTOHBDLEdBQVd5VTtNQUMzRCxTQUFTcUcsRUFBVWhvQjtRQUNqQixNQUFNei9CLGdCQUFnQnluRCxJQUNwQixPQUFPLElBQUlBLEVBQVNob0I7UUFFdEJ6L0IsS0FBSzZDLFVBQVVza0QsRUFBTXRrRCxHQUFTNDhCLElBRTlCMm5CLEVBQXFCL2lELEtBQUtyRSxNQUFNQSxLQUFLNkM7O01BVXZDLE9BUEF5M0MsRUFBU21OLEdBQVVMLElBRW5CSyxFQUFTdGpELFVBQVV5b0MsYUFBYUQsR0FFNUJ5VSxNQUNGcUcsRUFBU3RqRCxVQUFVazlDLFNBQVNELElBRXZCcUc7U0FJVDFkLEVBQU92cUMsUUFBUWlGLE1BQU02aUQsR0FBUyxTQUFVemtELEdBQVM4cEMsR0FBV3lVO01BQzFELElBQUltRyxJQUFLLElBQUlILEVBQXFCRCxFQUFNO1FBQUUza0QsYUFBWTtRQUFNbTRDLGVBQWU7U0FBTTkzQztNQU9qRixPQUxBMGtELEVBQUczYSxhQUFhRCxHQUVaeVUsTUFDRm1HLEVBQUdsRyxTQUFTRCxJQUVQbUc7Ozs7SUN6RlR4ZCxFQUFPdnFDLFVBQ1AsU0FBU3U1QyxFQUFRamtDLEdBQUlwUTtNQUNuQixJQUFJb1EsS0FBTXBRLEdBQUksT0FBT3EwQyxFQUFPamtDLEVBQVBpa0MsQ0FBV3IwQztNQUVoQyxJQUFrQixxQkFBUG9RLEdBQ1QsTUFBTSxJQUFJSyxVQUFVO01BTXRCLE9BSkE3VixPQUFPWSxLQUFLNFUsR0FBSTNVLFNBQVEsU0FBVXlEO1FBQ2hDOGpELEVBQVE5akQsS0FBS2tSLEVBQUdsUjtXQUdYOGpEO01BRVAsU0FBU0E7UUFDUCxJQUFJMTRDLElBQU8sSUFBSVEsTUFBTWpKLFVBQVVyQjtRQUMvQixLQUFLLElBQUlELElBQUksR0FBR0EsSUFBSStKLEVBQUs5SixRQUFRRCxLQUMvQitKLEVBQUsvSixLQUFLc0IsVUFBVXRCO1FBRXRCLElBQUlvNUMsSUFBTXZwQyxFQUFHakwsTUFBTTdKLE1BQU1nUDtRQUN6QixJQUFJdEssSUFBS3NLLEVBQUtBLEVBQUs5SixTQUFPO1FBTTFCLE9BTG1CLHFCQUFSbTVDLEtBQXNCQSxNQUFRMzVDLEtBQ3ZDcEYsT0FBT1ksS0FBS3dFLEdBQUl2RSxTQUFRLFNBQVV5RDtVQUNoQ3k2QyxFQUFJejZDLEtBQUtjLEVBQUdkO2FBR1R5NkM7Ozs7O0lDOUJYLElBQUkvcEMsSUFBVTtJQUVkLFNBQVNxekM7TUFDUDtNQUdBNWQsRUFBT3ZxQyxVQUFVbW9ELElBQXNCO1FBQ3JDLE9BQU9ub0Q7U0FDTnVxQyxFQUFPdnFDLFFBQVE0QixjQUFhLEdBQU0yb0MsRUFBT3ZxQyxRQUFpQixVQUFJdXFDLEVBQU92cUM7TUFDeEUsSUFBSUEsSUFBVSxJQUNWb29ELElBQUt0b0QsT0FBTzZFLFdBQ1owakQsSUFBU0QsRUFBR3hqRCxnQkFDWjBqRCxJQUFVLHFCQUFxQnAwQyxTQUFTQSxTQUFTLElBQ2pEcTBDLElBQWlCRCxFQUFRdnpDLFlBQVksY0FDckN5ekMsSUFBc0JGLEVBQVFHLGlCQUFpQixtQkFDL0NDLElBQW9CSixFQUFReFksZUFBZTtNQUUvQyxTQUFTNlksRUFBTzFqRCxHQUFLTyxHQUFLdkY7UUFDeEIsT0FBT0gsT0FBT0MsZUFBZWtGLEdBQUtPLEdBQUs7VUFDckN2RixPQUFPQTtVQUNQc0UsYUFBWTtVQUNad0IsZUFBYztVQUNkQyxXQUFVO1lBQ1JmLEVBQUlPOztNQUdWO1FBQ0VtakQsRUFBTyxJQUFJO1FBQ1gsT0FBTzVrRDtRQUNQNGtELElBQVMsU0FBZ0IxakQsR0FBS08sR0FBS3ZGO1VBQ2pDLE9BQU9nRixFQUFJTyxLQUFPdkY7OztNQUl0QixTQUFTZ2hELEVBQUsySCxHQUFTQyxHQUFTdHpDLEdBQU11ekM7UUFDcEMsSUFBSUMsSUFBaUJGLEtBQVdBLEVBQVFsa0QscUJBQXFCcWtELElBQVlILElBQVVHLEdBQy9FM2pCLElBQVl2bEMsT0FBT21FLE9BQU84a0QsRUFBZXBrRCxZQUN6QzRLLElBQVUsSUFBSTA1QyxFQUFRSCxLQUFlO1FBQ3pDLE9BQU96akIsRUFBVTZqQixVQUFVLFNBQVVOLEdBQVNyekMsR0FBTWhHO1VBQ2xELElBQUl0TyxJQUFRO1VBQ1osT0FBTyxTQUFVeUwsR0FBUTBJO1lBQ3ZCLElBQUksZ0JBQWdCblUsR0FBTyxNQUFNLElBQUlrTCxNQUFNO1lBRTNDLElBQUksZ0JBQWdCbEwsR0FBTztjQUN6QixJQUFJLFlBQVl5TCxHQUFRLE1BQU0wSTtjQUM5QixPQUFPK3pDOztZQUdULEtBQUs1NUMsRUFBUTdDLFNBQVNBLEdBQVE2QyxFQUFRNkYsTUFBTUEsTUFBTztjQUNqRCxJQUFJZzBDLElBQVc3NUMsRUFBUTY1QztjQUV2QixJQUFJQSxHQUFVO2dCQUNaLElBQUlDLElBQWlCQyxFQUFvQkYsR0FBVTc1QztnQkFFbkQsSUFBSTg1QyxHQUFnQjtrQkFDbEIsSUFBSUEsTUFBbUJFLEdBQWtCO2tCQUN6QyxPQUFPRjs7O2NBSVgsSUFBSSxXQUFXOTVDLEVBQVE3QyxRQUFRNkMsRUFBUXVPLE9BQU92TyxFQUFRaTZDLFFBQVFqNkMsRUFBUTZGLFVBQVMsSUFBSSxZQUFZN0YsRUFBUTdDLFFBQVE7Z0JBQzdHLElBQUkscUJBQXFCekwsR0FBTyxNQUFNQSxJQUFRLGFBQWFzTyxFQUFRNkY7Z0JBQ25FN0YsRUFBUWs2QyxrQkFBa0JsNkMsRUFBUTZGO3FCQUM3QixhQUFhN0YsRUFBUTdDLFVBQVU2QyxFQUFReU0sT0FBTyxVQUFVek0sRUFBUTZGO2NBQ3ZFblUsSUFBUTtjQUNSLElBQUl5b0QsSUFBU0MsRUFBU2YsR0FBU3J6QyxHQUFNaEc7Y0FFckMsSUFBSSxhQUFhbTZDLEVBQU9qakQsTUFBTTtnQkFDNUIsSUFBSXhGLElBQVFzTyxFQUFRd0MsT0FBTyxjQUFjLGtCQUFrQjIzQyxFQUFPdDBDLFFBQVFtMEMsR0FBa0I7Z0JBQzVGLE9BQU87a0JBQ0x0cEQsT0FBT3lwRCxFQUFPdDBDO2tCQUNkckQsTUFBTXhDLEVBQVF3Qzs7O2NBSWxCLFlBQVkyM0MsRUFBT2pqRCxTQUFTeEYsSUFBUSxhQUFhc08sRUFBUTdDLFNBQVMsU0FBUzZDLEVBQVE2RixNQUFNczBDLEVBQU90MEM7OztTQXJDM0UsQ0F3Q3pCd3pDLEdBQVNyekMsR0FBTWhHLElBQVU4MUI7O01BRzdCLFNBQVNza0IsRUFBU3IwQyxHQUFJclEsR0FBS21RO1FBQ3pCO1VBQ0UsT0FBTztZQUNMM08sTUFBTTtZQUNOMk8sS0FBS0UsRUFBR3pRLEtBQUtJLEdBQUttUTs7VUFFcEIsT0FBT3JSO1VBQ1AsT0FBTztZQUNMMEMsTUFBTTtZQUNOMk8sS0FBS3JSOzs7O01BS1gvRCxFQUFRaWhELE9BQU9BO01BQ2YsSUFBSXNJLElBQW1CO01BRXZCLFNBQVNQO01BRVQsU0FBU1k7TUFFVCxTQUFTQztNQUVULElBQUlDLElBQW9CO01BQ3hCbkIsRUFBT21CLEdBQW1CdkIsSUFBZ0I7UUFDeEMsT0FBTy9uRDs7TUFFVCxJQUFJdXBELElBQVdqcUQsT0FBTzhXLGdCQUNsQm96QyxJQUEwQkQsS0FBWUEsRUFBU0EsRUFBUy92QyxFQUFPO01BQ25FZ3dDLEtBQTJCQSxNQUE0QjVCLEtBQU1DLEVBQU94akQsS0FBS21sRCxHQUF5QnpCLE9BQW9CdUIsSUFBb0JFO01BQzFJLElBQUlDLElBQUtKLEVBQTJCbGxELFlBQVlxa0QsRUFBVXJrRCxZQUFZN0UsT0FBT21FLE9BQU82bEQ7TUFFcEYsU0FBU0ksRUFBc0J2bEQ7UUFDN0IsRUFBQyxRQUFRLFNBQVMsV0FBVWhFLFNBQVEsU0FBVStMO1VBQzVDaThDLEVBQU9oa0QsR0FBVytILElBQVEsU0FBVTBJO1lBQ2xDLE9BQU81VSxLQUFLMG9ELFFBQVF4OEMsR0FBUTBJOzs7O01BS2xDLFNBQVMrMEMsRUFBYzlrQixHQUFXK2tCO1FBQ2hDLFNBQVNDLEVBQU8zOUMsR0FBUTBJLEdBQUt0SixHQUFTQztVQUNwQyxJQUFJMjlDLElBQVNDLEVBQVN0a0IsRUFBVTM0QixJQUFTMjRCLEdBQVdqd0I7VUFFcEQsSUFBSSxZQUFZczBDLEVBQU9qakQsTUFBTTtZQUMzQixJQUFJbkQsSUFBU29tRCxFQUFPdDBDLEtBQ2hCblYsSUFBUXFELEVBQU9yRDtZQUNuQixPQUFPQSxLQUFTLFlBQVk2VSxFQUFRN1UsTUFBVW9vRCxFQUFPeGpELEtBQUs1RSxHQUFPLGFBQWFtcUQsRUFBWXQrQyxRQUFRN0wsRUFBTXFxRCxTQUFTbDlDLE1BQUssU0FBVW5OO2NBQzlIb3FELEVBQU8sUUFBUXBxRCxHQUFPNkwsR0FBU0M7aUJBQzlCLFNBQVVoSTtjQUNYc21ELEVBQU8sU0FBU3RtRCxHQUFLK0gsR0FBU0M7a0JBQzNCcStDLEVBQVl0K0MsUUFBUTdMLEdBQU9tTixNQUFLLFNBQVVtOUM7Y0FDN0NqbkQsRUFBT3JELFFBQVFzcUQsR0FBV3orQyxFQUFReEk7aUJBQ2pDLFNBQVV1RztjQUNYLE9BQU93Z0QsRUFBTyxTQUFTeGdELEdBQU9pQyxHQUFTQzs7O1VBSTNDQSxFQUFPMjlDLEVBQU90MEM7O1FBR2hCLElBQUlvMUM7UUFFSmhxRCxLQUFLMG9ELFVBQVUsU0FBVXg4QyxHQUFRMEk7VUFDL0IsU0FBU3ExQztZQUNQLE9BQU8sSUFBSUwsR0FBWSxTQUFVdCtDLEdBQVNDO2NBQ3hDcytDLEVBQU8zOUMsR0FBUTBJLEdBQUt0SixHQUFTQzs7O1VBSWpDLE9BQU95K0MsSUFBa0JBLElBQWtCQSxFQUFnQnA5QyxLQUFLcTlDLEdBQTRCQSxLQUE4QkE7OztNQUk5SCxTQUFTbkIsRUFBb0JGLEdBQVU3NUM7UUFDckMsSUFBSTdDLElBQVMwOEMsRUFBU3IwQyxTQUFTeEYsRUFBUTdDO1FBRXZDLFNBQUlwSSxNQUFjb0ksR0FBUTtVQUN4QixJQUFJNkMsRUFBUTY1QyxXQUFXLE1BQU0sWUFBWTc1QyxFQUFRN0MsUUFBUTtZQUN2RCxJQUFJMDhDLEVBQVNyMEMsU0FBaUIsV0FBTXhGLEVBQVE3QyxTQUFTLFVBQVU2QyxFQUFRNkYsV0FBTTlRLEdBQVdnbEQsRUFBb0JGLEdBQVU3NUMsSUFBVSxZQUFZQSxFQUFRN0MsU0FBUyxPQUFPNjhDO1lBQ3BLaDZDLEVBQVE3QyxTQUFTLFNBQVM2QyxFQUFRNkYsTUFBTSxJQUFJTyxVQUFVOztVQUd4RCxPQUFPNHpDOztRQUdULElBQUlHLElBQVNDLEVBQVNqOUMsR0FBUTA4QyxFQUFTcjBDLFVBQVV4RixFQUFRNkY7UUFDekQsSUFBSSxZQUFZczBDLEVBQU9qakQsTUFBTSxPQUFPOEksRUFBUTdDLFNBQVMsU0FBUzZDLEVBQVE2RixNQUFNczBDLEVBQU90MEMsS0FBSzdGLEVBQVE2NUMsV0FBVyxNQUFNRztRQUNqSCxJQUFJaitDLElBQU9vK0MsRUFBT3QwQztRQUNsQixPQUFPOUosSUFBT0EsRUFBS3lHLFFBQVF4QyxFQUFRNjVDLEVBQVNzQixjQUFjcC9DLEVBQUtyTCxPQUFPc1AsRUFBUWtDLE9BQU8yM0MsRUFBU3VCLFNBQVMsYUFBYXA3QyxFQUFRN0MsV0FBVzZDLEVBQVE3QyxTQUFTLFFBQVE2QyxFQUFRNkYsV0FBTTlRO1FBQVlpTCxFQUFRNjVDLFdBQVcsTUFBTUcsS0FBb0JqK0MsS0FBUWlFLEVBQVE3QyxTQUFTLFNBQVM2QyxFQUFRNkYsTUFBTSxJQUFJTyxVQUFVLHFDQUFxQ3BHLEVBQVE2NUMsV0FBVztRQUFNRzs7TUFHclcsU0FBU3FCLEVBQWFDO1FBQ3BCLElBQUluYSxJQUFRO1VBQ1ZvYSxRQUFRRCxFQUFLOztRQUVmLEtBQUtBLE1BQVNuYSxFQUFNcWEsV0FBV0YsRUFBSyxLQUFLLEtBQUtBLE1BQVNuYSxFQUFNc2EsYUFBYUgsRUFBSyxJQUFJbmEsRUFBTXVhLFdBQVdKLEVBQUssS0FBS3JxRCxLQUFLMHFELFdBQVdob0QsS0FBS3d0Qzs7TUFHckksU0FBU3lhLEVBQWN6YTtRQUNyQixJQUFJZ1osSUFBU2haLEVBQU0wYSxjQUFjO1FBQ2pDMUIsRUFBT2pqRCxPQUFPLGlCQUFpQmlqRCxFQUFPdDBDLEtBQUtzN0IsRUFBTTBhLGFBQWExQjs7TUFHaEUsU0FBU1QsRUFBUUg7UUFDZnRvRCxLQUFLMHFELGFBQWEsRUFBQztVQUNqQkosUUFBUTthQUNOaEMsRUFBWW5vRCxRQUFRaXFELEdBQWNwcUQsT0FBT0EsS0FBSzZxRCxPQUFNOztNQUcxRCxTQUFTcnhDLEVBQU93NEI7UUFDZCxJQUFJQSxHQUFVO1VBQ1osSUFBSThZLElBQWlCOVksRUFBUytWO1VBQzlCLElBQUkrQyxHQUFnQixPQUFPQSxFQUFlem1ELEtBQUsydEM7VUFDL0MsSUFBSSxxQkFBcUJBLEVBQVMvZ0MsTUFBTSxPQUFPK2dDO1VBRS9DLEtBQUsrWSxNQUFNL1ksRUFBUzlzQyxTQUFTO1lBQzNCLElBQUlELEtBQUssR0FDTGdNLElBQU8sU0FBU0E7Y0FDbEIsUUFBU2hNLElBQUkrc0MsRUFBUzlzQyxVQUNwQixJQUFJMmlELEVBQU94akQsS0FBSzJ0QyxHQUFVL3NDLElBQUksT0FBT2dNLEVBQUt4UixRQUFRdXlDLEVBQVMvc0MsSUFBSWdNLEVBQUtNLFFBQU8sR0FBSU47Y0FHakYsT0FBT0EsRUFBS3hSLGFBQVFxRSxHQUFXbU4sRUFBS00sUUFBTyxHQUFJTjs7WUFHakQsT0FBT0EsRUFBS0EsT0FBT0E7OztRQUl2QixPQUFPO1VBQ0xBLE1BQU0wM0M7OztNQUlWLFNBQVNBO1FBQ1AsT0FBTztVQUNMbHBELFlBQU9xRTtVQUNQeU4sT0FBTTs7O01BSVYsT0FBTzYzQyxFQUFrQmpsRCxZQUFZa2xELEdBQTRCbEIsRUFBT3NCLEdBQUksZUFBZUosSUFBNkJsQixFQUFPa0IsR0FBNEIsZUFBZUQsSUFBb0JBLEVBQWtCNEIsY0FBYzdDLEVBQU9rQixHQUE0Qm5CLEdBQW1CLHNCQUFzQjFvRCxFQUFReXJELHNCQUFzQixTQUFVQztRQUNoVixJQUFJMUQsSUFBTyxxQkFBcUIwRCxLQUFVQSxFQUFPcnJEO1FBQ2pELFNBQVMybkQsTUFBU0EsTUFBUzRCLEtBQXFCLHlCQUF5QjVCLEVBQUt3RCxlQUFleEQsRUFBS3hoRDtTQUNqR3hHLEVBQVEyckQsT0FBTyxTQUFVRDtRQUMxQixPQUFPNXJELE9BQU91VyxpQkFBaUJ2VyxPQUFPdVcsZUFBZXExQyxHQUFRN0IsTUFBK0I2QixFQUFPcDFDLFlBQVl1ekMsR0FBNEJsQixFQUFPK0MsR0FBUWhELEdBQW1CLHVCQUF1QmdELEVBQU8vbUQsWUFBWTdFLE9BQU9tRSxPQUFPZ21EO1FBQUt5QjtTQUN6TzFyRCxFQUFRNHJELFFBQVEsU0FBVXgyQztRQUMzQixPQUFPO1VBQ0xrMUMsU0FBU2wxQzs7U0FFVjgwQyxFQUFzQkMsRUFBY3hsRCxZQUFZZ2tELEVBQU93QixFQUFjeGxELFdBQVc2akQsSUFBcUI7UUFDdEcsT0FBT2hvRDtXQUNMUixFQUFRbXFELGdCQUFnQkEsR0FBZW5xRCxFQUFRcUksUUFBUSxTQUFVdWdELEdBQVNDLEdBQVN0ekMsR0FBTXV6QyxHQUFhc0I7YUFDeEcsTUFBV0EsTUFBZ0JBLElBQWN2K0M7UUFDekMsSUFBSXFNLElBQU8sSUFBSWl5QyxFQUFjbEosRUFBSzJILEdBQVNDLEdBQVN0ekMsR0FBTXV6QyxJQUFjc0I7UUFDeEUsT0FBT3BxRCxFQUFReXJELG9CQUFvQjVDLEtBQVczd0MsSUFBT0EsRUFBS3pHLE9BQU9yRSxNQUFLLFNBQVU5SjtVQUM5RSxPQUFPQSxFQUFPeU8sT0FBT3pPLEVBQU9yRCxRQUFRaVksRUFBS3pHOztTQUUxQ3k0QyxFQUFzQkQsSUFBS3RCLEVBQU9zQixHQUFJdkIsR0FBbUIsY0FBY0MsRUFBT3NCLEdBQUkxQixJQUFnQjtRQUNuRyxPQUFPL25EO1dBQ0xtb0QsRUFBT3NCLEdBQUksYUFBWTtRQUN6QixPQUFPO1dBQ0xqcUQsRUFBUVUsT0FBTyxTQUFVcUo7UUFDM0IsSUFBSXJKLElBQU87UUFFWCxLQUFLLElBQUk4RSxLQUFPdUUsR0FDZHJKLEVBQUt3QyxLQUFLc0M7UUFHWixPQUFPOUUsRUFBSzhSLFdBQVcsU0FBU2Y7VUFDOUIsTUFBTy9RLEVBQUtnRixVQUFTO1lBQ25CLElBQUlGLElBQU05RSxFQUFLdWxDO1lBQ2YsSUFBSXpnQyxLQUFPdUUsR0FBUSxPQUFPMEgsRUFBS3hSLFFBQVF1RixHQUFLaU0sRUFBS00sUUFBTyxHQUFJTjs7VUFHOUQsT0FBT0EsRUFBS00sUUFBTyxHQUFJTjs7U0FFeEJ6UixFQUFRZ2EsU0FBU0EsR0FBUWl2QyxFQUFRdGtELFlBQVk7UUFDOUN0RSxhQUFhNG9EO1FBQ2JvQyxPQUFPLFNBQWVRO1VBQ3BCLElBQUlyckQsS0FBS3NiLE9BQU8sR0FBR3RiLEtBQUtpUixPQUFPLEdBQUdqUixLQUFLc2QsT0FBT3RkLEtBQUtncEQsYUFBUWxsRCxHQUFXOUQsS0FBS3VSLFFBQU8sR0FBSXZSLEtBQUs0b0QsV0FBVyxNQUFNNW9ELEtBQUtrTSxTQUFTO1VBQVFsTSxLQUFLNFUsV0FBTTlRLEdBQVc5RCxLQUFLMHFELFdBQVd2cUQsUUFBUXdxRCxLQUFpQlUsR0FBZSxLQUFLLElBQUlybEQsS0FBUWhHLE1BQy9OLFFBQVFnRyxFQUFLK1QsT0FBTyxNQUFNOHRDLEVBQU94akQsS0FBS3JFLE1BQU1nRyxPQUFVK2tELE9BQU8va0QsRUFBSzZSLE1BQU0sUUFBUTdYLEtBQUtnRyxVQUFRbEM7O1FBR2pHa1ksTUFBTTtVQUNKaGMsS0FBS3VSLFFBQU87VUFDWixJQUFJKzVDLElBQWF0ckQsS0FBSzBxRCxXQUFXLEdBQUdFO1VBQ3BDLElBQUksWUFBWVUsRUFBV3JsRCxNQUFNLE1BQU1xbEQsRUFBVzEyQztVQUNsRCxPQUFPNVUsS0FBS3VyRDs7UUFFZHRDLG1CQUFtQixTQUEyQnVDO1VBQzVDLElBQUl4ckQsS0FBS3VSLE1BQU0sTUFBTWk2QztVQUNyQixJQUFJejhDLElBQVUvTztVQUVkLFNBQVNvUyxFQUFPcTVDLEdBQUtDO1lBQ25CLE9BQU94QyxFQUFPampELE9BQU8sU0FBU2lqRCxFQUFPdDBDLE1BQU00MkMsR0FBV3o4QyxFQUFRa0MsT0FBT3c2QyxHQUFLQyxNQUFXMzhDLEVBQVE3QyxTQUFTLFFBQVE2QyxFQUFRNkYsV0FBTTlRLE1BQWM0bkQ7O1VBRzVJLEtBQUssSUFBSXptRCxJQUFJakYsS0FBSzBxRCxXQUFXeGxELFNBQVMsR0FBR0QsS0FBSyxLQUFLQSxHQUFHO1lBQ3BELElBQUlpckMsSUFBUWx3QyxLQUFLMHFELFdBQVd6bEQsSUFDeEJpa0QsSUFBU2haLEVBQU0wYTtZQUNuQixJQUFJLFdBQVcxYSxFQUFNb2EsUUFBUSxPQUFPbDRDLEVBQU87WUFFM0MsSUFBSTg5QixFQUFNb2EsVUFBVXRxRCxLQUFLc2IsTUFBTTtjQUM3QixJQUFJcXdDLElBQVc5RCxFQUFPeGpELEtBQUs2ckMsR0FBTyxhQUM5QjBiLElBQWEvRCxFQUFPeGpELEtBQUs2ckMsR0FBTztjQUVwQyxJQUFJeWIsS0FBWUMsR0FBWTtnQkFDMUIsSUFBSTVyRCxLQUFLc2IsT0FBTzQwQixFQUFNcWEsVUFBVSxPQUFPbjRDLEVBQU84OUIsRUFBTXFhLFdBQVU7Z0JBQzlELElBQUl2cUQsS0FBS3NiLE9BQU80MEIsRUFBTXNhLFlBQVksT0FBT3A0QyxFQUFPODlCLEVBQU1zYTtxQkFDakQsSUFBSW1CO2dCQUNULElBQUkzckQsS0FBS3NiLE9BQU80MEIsRUFBTXFhLFVBQVUsT0FBT240QyxFQUFPODlCLEVBQU1xYSxXQUFVO3FCQUN6RDtnQkFDTCxLQUFLcUIsR0FBWSxNQUFNLElBQUlqZ0QsTUFBTTtnQkFDakMsSUFBSTNMLEtBQUtzYixPQUFPNDBCLEVBQU1zYSxZQUFZLE9BQU9wNEMsRUFBTzg5QixFQUFNc2E7Ozs7O1FBSzlEaHZDLFFBQVEsU0FBZ0J2VixHQUFNMk87VUFDNUIsS0FBSyxJQUFJM1AsSUFBSWpGLEtBQUswcUQsV0FBV3hsRCxTQUFTLEdBQUdELEtBQUssS0FBS0EsR0FBRztZQUNwRCxJQUFJaXJDLElBQVFsd0MsS0FBSzBxRCxXQUFXemxEO1lBRTVCLElBQUlpckMsRUFBTW9hLFVBQVV0cUQsS0FBS3NiLFFBQVF1c0MsRUFBT3hqRCxLQUFLNnJDLEdBQU8saUJBQWlCbHdDLEtBQUtzYixPQUFPNDBCLEVBQU1zYSxZQUFZO2NBQ2pHLElBQUlxQixJQUFlM2I7Y0FDbkI7OztVQUlKMmIsTUFBaUIsWUFBWTVsRCxLQUFRLGVBQWVBLE1BQVM0bEQsRUFBYXZCLFVBQVUxMUMsS0FBT0EsS0FBT2kzQyxFQUFhckIsZUFBZXFCLElBQWU7VUFDN0ksSUFBSTNDLElBQVMyQyxJQUFlQSxFQUFhakIsYUFBYTtVQUN0RCxPQUFPMUIsRUFBT2pqRCxPQUFPQSxHQUFNaWpELEVBQU90MEMsTUFBTUEsR0FBS2kzQyxLQUFnQjdyRCxLQUFLa00sU0FBUyxRQUFRbE0sS0FBS2lSLE9BQU80NkMsRUFBYXJCLFlBQVl6QixLQUFvQi9vRCxLQUFLOHJELFNBQVM1Qzs7UUFFNUo0QyxVQUFVLFNBQWtCNUMsR0FBUXVCO1VBQ2xDLElBQUksWUFBWXZCLEVBQU9qakQsTUFBTSxNQUFNaWpELEVBQU90MEM7VUFDMUMsT0FBTyxZQUFZczBDLEVBQU9qakQsUUFBUSxlQUFlaWpELEVBQU9qakQsT0FBT2pHLEtBQUtpUixPQUFPaTRDLEVBQU90MEMsTUFBTSxhQUFhczBDLEVBQU9qakQsUUFBUWpHLEtBQUt1ckQsT0FBT3ZyRCxLQUFLNFUsTUFBTXMwQyxFQUFPdDBDO1VBQUs1VSxLQUFLa00sU0FBUyxVQUFVbE0sS0FBS2lSLE9BQU8sU0FBUyxhQUFhaTRDLEVBQU9qakQsUUFBUXdrRCxNQUFhenFELEtBQUtpUixPQUFPdzVDLElBQVcxQjs7UUFFdFFySCxRQUFRLFNBQWdCOEk7VUFDdEIsS0FBSyxJQUFJdmxELElBQUlqRixLQUFLMHFELFdBQVd4bEQsU0FBUyxHQUFHRCxLQUFLLEtBQUtBLEdBQUc7WUFDcEQsSUFBSWlyQyxJQUFRbHdDLEtBQUswcUQsV0FBV3psRDtZQUM1QixJQUFJaXJDLEVBQU1zYSxlQUFlQSxHQUFZLE9BQU94cUQsS0FBSzhyRCxTQUFTNWIsRUFBTTBhLFlBQVkxYSxFQUFNdWEsV0FBV0UsRUFBY3phLElBQVE2WTs7O1FBR3ZILE9BQVMsU0FBZ0J1QjtVQUN2QixLQUFLLElBQUlybEQsSUFBSWpGLEtBQUswcUQsV0FBV3hsRCxTQUFTLEdBQUdELEtBQUssS0FBS0EsR0FBRztZQUNwRCxJQUFJaXJDLElBQVFsd0MsS0FBSzBxRCxXQUFXemxEO1lBRTVCLElBQUlpckMsRUFBTW9hLFdBQVdBLEdBQVE7Y0FDM0IsSUFBSXBCLElBQVNoWixFQUFNMGE7Y0FFbkIsSUFBSSxZQUFZMUIsRUFBT2pqRCxNQUFNO2dCQUMzQixJQUFJOGxELElBQVM3QyxFQUFPdDBDO2dCQUNwQisxQyxFQUFjemE7O2NBR2hCLE9BQU82Yjs7O1VBSVgsTUFBTSxJQUFJcGdELE1BQU07O1FBRWxCcWdELGVBQWUsU0FBdUJoYSxHQUFVa1ksR0FBWUM7VUFDMUQsT0FBT25xRCxLQUFLNG9ELFdBQVc7WUFDckJyMEMsVUFBVWlGLEVBQU93NEI7WUFDakJrWSxZQUFZQTtZQUNaQyxTQUFTQTthQUNSLFdBQVducUQsS0FBS2tNLFdBQVdsTSxLQUFLNFUsV0FBTTlRLElBQVlpbEQ7O1NBRXREdnBEOztJQUdMdXFDLEVBQU92cUMsVUFBVW1vRCxHQUFxQjVkLEVBQU92cUMsUUFBUTRCLGNBQWEsR0FBTTJvQyxFQUFPdnFDLFFBQWlCLFVBQUl1cUMsRUFBT3ZxQzs7O0lDalczRyxTQUFTOFUsRUFBUTdQO01BR2YsT0FBUXNsQyxFQUFPdnFDLFVBQVU4VSxJQUFVLHFCQUFxQlosVUFBVSxtQkFBbUJBLE9BQU9hLFdBQVcsU0FBVTlQO1FBQy9HLGNBQWNBO1VBQ1osU0FBVUE7UUFDWixPQUFPQSxLQUFPLHFCQUFxQmlQLFVBQVVqUCxFQUFJNUUsZ0JBQWdCNlQsVUFBVWpQLE1BQVFpUCxPQUFPdlAsWUFBWSxrQkFBa0JNO1NBQ3ZIc2xDLEVBQU92cUMsUUFBUTRCLGNBQWEsR0FBTTJvQyxFQUFPdnFDLFFBQWlCLFVBQUl1cUMsRUFBT3ZxQyxTQUFVOFUsRUFBUTdQOztJQUc1RnNsQyxFQUFPdnFDLFVBQVU4VSxHQUFTeTFCLEVBQU92cUMsUUFBUTRCLGNBQWEsR0FBTTJvQyxFQUFPdnFDLFFBQWlCLFVBQUl1cUMsRUFBT3ZxQzs7O0lDUi9GLElBQUl5c0QsSUFBVSxFQUFRLE1BQVI7SUFDZGxpQixFQUFPdnFDLFVBQVV5c0Q7SUFHakI7TUFDRUMscUJBQXFCRDtNQUNyQixPQUFPRTtNQUNtQixtQkFBZkMsYUFDVEEsV0FBV0YscUJBQXFCRCxJQUVoQ2oxQyxTQUFTLEtBQUsseUJBQWRBLENBQXdDaTFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L0NvbXBvc2VkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L01lcmdlZFN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9PYnNlcnZhYmxlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L2FzU3RyZWFtLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy9mZXRjaC1ub2RlLWRldGFpbHMvZGlzdC9mZXRjaE5vZGVEZXRhaWxzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2h0dHAtaGVscGVycy9kaXN0L2h0dHBIZWxwZXJzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL29wZW5sb2dpbi11dGlscy9kaXN0L29wZW5sb2dpblV0aWxzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL29wZW5sb2dpbi1qcnBjL2Rpc3Qvb3BlbmxvZ2luSnJwYy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS93cmFwTmF0aXZlU3VwZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL3RvcnVzLmpzL2Rpc3QvdG9ydXNVdGlscy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy90b3J1cy1lbWJlZC9kaXN0L3RvcnVzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9rZW5zY3JpcHQvdG9rZW4tbmVnb3RpYXRvci9kaXN0L3dhbGxldC9Ub3J1c1Byb3ZpZGVyLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b3J1c2xhYnMvZWNjcnlwdG8vYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9iYXNlNjR1cmwvZGlzdC9iYXNlNjR1cmwuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2Rpc3QvcGFkLXN0cmluZy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9iYXNlNjR1cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY29yZS11dGlsLWlzL2xpYi91dGlsLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2VuZC1vZi1zdHJlYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2lzLXN0cmVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVyZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvbG9nbGV2ZWwvbGliL2xvZ2xldmVsLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzLW5leHRpY2stYXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wdW1wL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fZHVwbGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV9yZWFkYWJsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3dyaXRhYmxlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvQnVmZmVyTGlzdC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9zdHJlYW0tYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL3JlYWRhYmxlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3N0cmluZ19kZWNvZGVyL2xpYi9zdHJpbmdfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi90aHJvdWdoMi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy93cmFwcHkvd3JhcHB5LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21wb3NlZFN0b3JlID0gdm9pZCAwO1xuY29uc3QgT2JzZXJ2YWJsZVN0b3JlXzEgPSByZXF1aXJlKFwiLi9PYnNlcnZhYmxlU3RvcmVcIik7XG5jbGFzcyBDb21wb3NlZFN0b3JlIGV4dGVuZHMgT2JzZXJ2YWJsZVN0b3JlXzEuT2JzZXJ2YWJsZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcihjaGlsZHJlbikge1xuICAgICAgICAvLyBUeXBlY2FzdDogUHJlc2VydmUgZXhpc3RpbmcgYmVoYXZpb3JcbiAgICAgICAgc3VwZXIoe30pO1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gY2hpbGRyZW5cbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbiB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkS2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuX2NoaWxkcmVuW2NoaWxkS2V5XTtcbiAgICAgICAgICAgIHRoaXMuX2FkZENoaWxkKGNoaWxkS2V5LCBjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hpbGQoY2hpbGRLZXksIGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZUZyb21DaGlsZCA9IChjaGlsZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHN0YXRlW2NoaWxkS2V5XSA9IGNoaWxkVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnB1dFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY2hpbGQuc3Vic2NyaWJlKHVwZGF0ZUZyb21DaGlsZCk7XG4gICAgICAgIHVwZGF0ZUZyb21DaGlsZChjaGlsZC5nZXRTdGF0ZSgpKTtcbiAgICB9XG59XG5leHBvcnRzLkNvbXBvc2VkU3RvcmUgPSBDb21wb3NlZFN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tcG9zZWRTdG9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVyZ2VkU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBPYnNlcnZhYmxlU3RvcmVfMSA9IHJlcXVpcmUoXCIuL09ic2VydmFibGVTdG9yZVwiKTtcbmNsYXNzIE1lcmdlZFN0b3JlIGV4dGVuZHMgT2JzZXJ2YWJsZVN0b3JlXzEuT2JzZXJ2YWJsZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcihjaGlsZHJlbiA9IFtdKSB7XG4gICAgICAgIC8vIFR5cGVjYXN0OiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICBzdXBlcih7fSk7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBjaGlsZHJlblxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gdGhpcy5fYWRkQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlV2hvbGVTdGF0ZSgpO1xuICAgIH1cbiAgICBfYWRkQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVdob2xlU3RhdGUoKSk7XG4gICAgfVxuICAgIF91cGRhdGVXaG9sZVN0YXRlKCkge1xuICAgICAgICBjb25zdCBjaGlsZFN0YXRlcyA9IHRoaXMuX2NoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLmdldFN0YXRlKCkpO1xuICAgICAgICAvLyBhcHBseSBzaGFsbG93IG1lcmdlIG92ZXIgc3RhdGVzXG4gICAgICAgIGNvbnN0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB0aGlzLnB1dFN0YXRlKHN0YXRlKTtcbiAgICB9XG59XG5leHBvcnRzLk1lcmdlZFN0b3JlID0gTWVyZ2VkU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NZXJnZWRTdG9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT2JzZXJ2YWJsZVN0b3JlID0gdm9pZCAwO1xuY29uc3Qgc2FmZV9ldmVudF9lbWl0dGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtZXRhbWFzay9zYWZlLWV2ZW50LWVtaXR0ZXJcIikpO1xuY2xhc3MgT2JzZXJ2YWJsZVN0b3JlIGV4dGVuZHMgc2FmZV9ldmVudF9lbWl0dGVyXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoaW5pdFN0YXRlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChpbml0U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gaW5pdFN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVHlwZWNhc3QvZGVmYXVsdCBzdGF0ZTogUHJlc2VydmUgZXhpc3RpbmcgYmVoYXZpb3JcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0ge307XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd3JhcHBlciBhcm91bmQgaW50ZXJuYWwgZ2V0U3RhdGVcbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFN0YXRlKCk7XG4gICAgfVxuICAgIC8vIHdyYXBwZXIgYXJvdW5kIGludGVybmFsIHB1dFN0YXRlXG4gICAgcHV0U3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5fcHV0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIG5ld1N0YXRlKTtcbiAgICB9XG4gICAgdXBkYXRlU3RhdGUocGFydGlhbFN0YXRlKSB7XG4gICAgICAgIC8vIGlmIG5vbi1udWxsIG9iamVjdCwgbWVyZ2VcbiAgICAgICAgaWYgKHBhcnRpYWxTdGF0ZSAmJiB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCBwYXJ0aWFsU3RhdGUpKTtcbiAgICAgICAgICAgIC8vIGlmIG5vdCBvYmplY3QsIHVzZSBuZXcgdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUocGFydGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hhbmdlc1xuICAgIHN1YnNjcmliZShoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMub24oJ3VwZGF0ZScsIGhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyB1bnN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAgdW5zdWJzY3JpYmUoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCd1cGRhdGUnLCBoYW5kbGVyKTtcbiAgICB9XG4gICAgLy9cbiAgICAvLyBwcml2YXRlXG4gICAgLy9cbiAgICAvLyByZWFkIGZyb20gcGVyc2lzdGVuY2VcbiAgICBfZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgLy8gd3JpdGUgdG8gcGVyc2lzdGVuY2VcbiAgICBfcHV0U3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB9XG59XG5leHBvcnRzLk9ic2VydmFibGVTdG9yZSA9IE9ic2VydmFibGVTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmFibGVTdG9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RvcmVBc1N0cmVhbSA9IHZvaWQgMDtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbmNsYXNzIE9ic2VydmFibGVTdG9yZVN0cmVhbSBleHRlbmRzIHN0cmVhbV8xLkR1cGxleCB7XG4gICAgY29uc3RydWN0b3Iob2JzU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgLy8gcGFzcyB2YWx1ZXMsIG5vdCBzZXJpYWxpemF0aW9uc1xuICAgICAgICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGRvbnQgYnVmZmVyIG91dGdvaW5nIHVwZGF0ZXNcbiAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgICAgLy8gc2F2ZSBoYW5kbGVyIHNvIHdlIGNhbiB1bnN1YnNjcmliZSBsYXRlclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSAoc3RhdGUpID0+IHRoaXMucHVzaChzdGF0ZSk7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvYnNTdG9yZSBjaGFuZ2VzXG4gICAgICAgIHRoaXMub2JzU3RvcmUgPSBvYnNTdG9yZTtcbiAgICAgICAgdGhpcy5vYnNTdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVyKTtcbiAgICB9XG4gICAgLy8gZW1pdCBjdXJyZW50IHN0YXRlIG9uIG5ldyBkZXN0aW5hdGlvblxuICAgIHBpcGUoZGVzdCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5waXBlKGRlc3QsIG9wdGlvbnMpO1xuICAgICAgICBkZXN0LndyaXRlKHRoaXMub2JzU3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vIHdyaXRlIGZyb20gaW5jb21pbmcgc3RyZWFtIHRvIHN0YXRlXG4gICAgX3dyaXRlKGNodW5rLCBfZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2JzU3RvcmUucHV0U3RhdGUoY2h1bmspO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICAvLyBub29wIC0gb3V0Z29pbmcgc3RyZWFtIGlzIGFza2luZyB1cyBpZiB3ZSBoYXZlIGRhdGEgd2UgYXJlbnQgZ2l2aW5nIGl0XG4gICAgX3JlYWQoX3NpemUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gdW5zdWJzY3JpYmUgZnJvbSBldmVudCBlbWl0dGVyXG4gICAgX2Rlc3Ryb3koZXJyLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9ic1N0b3JlLnVuc3Vic2NyaWJlKHRoaXMuaGFuZGxlcik7XG4gICAgICAgIHN1cGVyLl9kZXN0cm95KGVyciwgY2FsbGJhY2spO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0b3JlQXNTdHJlYW0ob2JzU3RvcmUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVTdG9yZVN0cmVhbShvYnNTdG9yZSk7XG59XG5leHBvcnRzLnN0b3JlQXNTdHJlYW0gPSBzdG9yZUFzU3RyZWFtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXNTdHJlYW0uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hc1N0cmVhbVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vQ29tcG9zZWRTdG9yZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vTWVyZ2VkU3RvcmVcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL09ic2VydmFibGVTdG9yZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHJhbnNmb3JtXCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZVRyYW5zZm9ybVN0cmVhbSA9IHZvaWQgMDtcbmNvbnN0IHRocm91Z2gyXzEgPSByZXF1aXJlKFwidGhyb3VnaDJcIik7XG5mdW5jdGlvbiBzdG9yZVRyYW5zZm9ybVN0cmVhbShzeW5jVHJhbnNmb3JtRm4pIHtcbiAgICByZXR1cm4gdGhyb3VnaDJfMS5vYmooKHN0YXRlLCBfZW5jb2RpbmcsIGNiKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHN5bmNUcmFuc2Zvcm1GbihzdGF0ZSk7XG4gICAgICAgICAgICBjYihudWxsLCBuZXdTdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNiKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnN0b3JlVHJhbnNmb3JtU3RyZWFtID0gc3RvcmVUcmFuc2Zvcm1TdHJlYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2Zvcm0uanMubWFwIiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgV2ViM0V0aENvbnRyYWN0IGZyb20gJ3dlYjMtZXRoLWNvbnRyYWN0JztcbmltcG9ydCB7IGtlY2NhazI1NiwgdG9IZXggfSBmcm9tICd3ZWIzLXV0aWxzJztcblxuY29uc3QgRVRIRVJFVU1fTkVUV09SSyA9IHtcbiAgUk9QU1RFTjogXCJyb3BzdGVuXCIsXG4gIE1BSU5ORVQ6IFwibWFpbm5ldFwiLFxuICBQT0xZR09OOiBcInBvbHlnb24tbWFpbm5ldFwiXG59O1xuY29uc3QgYWJpID0gW3tcbiAgaW5wdXRzOiBbe1xuICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcbiAgICBuYW1lOiBcIl92ZXJpZmllclwiLFxuICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgfSwge1xuICAgIGludGVybmFsVHlwZTogXCJieXRlczMyXCIsXG4gICAgbmFtZTogXCJoYXNoZWRWZXJpZmllcklkXCIsXG4gICAgdHlwZTogXCJieXRlczMyXCJcbiAgfV0sXG4gIG5hbWU6IFwiZ2V0Tm9kZVNldFwiLFxuICBvdXRwdXRzOiBbe1xuICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgbmFtZTogXCJjdXJyZW50RXBvY2hcIixcbiAgICB0eXBlOiBcInVpbnQyNTZcIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1tdXCIsXG4gICAgbmFtZTogXCJ0b3J1c05vZGVFbmRwb2ludHNcIixcbiAgICB0eXBlOiBcInN0cmluZ1tdXCJcbiAgfSwge1xuICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2W11cIixcbiAgICBuYW1lOiBcInRvcnVzTm9kZVB1YlhcIixcbiAgICB0eXBlOiBcInVpbnQyNTZbXVwiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NltdXCIsXG4gICAgbmFtZTogXCJ0b3J1c05vZGVQdWJZXCIsXG4gICAgdHlwZTogXCJ1aW50MjU2W11cIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZbXVwiLFxuICAgIG5hbWU6IFwidG9ydXNJbmRleGVzXCIsXG4gICAgdHlwZTogXCJ1aW50MjU2W11cIlxuICB9XSxcbiAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgdHlwZTogXCJmdW5jdGlvblwiXG59XTtcblxuY2xhc3MgTm9kZURldGFpbE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQge1xuICAgICAgbmV0d29yayA9IEVUSEVSRVVNX05FVFdPUksuTUFJTk5FVCxcbiAgICAgIHByb3h5QWRkcmVzcyA9IFwiMHhmMjAzMzZlMTZCNTE4MjYzN2YwOTgyMWMyN0JEZTI5YjBBRmNmZTgwXCJcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9jdXJyZW50RXBvY2hcIiwgXCIxOVwiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90b3J1c05vZGVFbmRwb2ludHNcIiwgW1wiaHR0cHM6Ly90b3J1cy0xOS50b3J1c25vZGUuY29tL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW5vZGUuZW5zLmRvbWFpbnMvanJwY1wiLCBcImh0dHBzOi8vdG9ydXMtbm9kZS5tYXRpYy5uZXR3b3JrL2pycGNcIiwgXCJodHRwczovL3RvcnVzLnppbGxpcWEubmV0d29yay9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy1tYWlubmV0LmNvc21vcy5uZXR3b3JrL2pycGNcIiwgXCJodHRwczovL3RvcnVzMi5ldGhlcnNjYW4uY29tL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW5vZGUtdjIuc2thbGVsYWJzLmNvbS9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy1ub2RlLmJpbmFuY2V4LmRldi9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1c25vZGUub250LmlvL2pycGNcIl0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RvcnVzTm9kZVB1YlwiLCBbe1xuICAgICAgWDogXCJiYmU4M2M2NDE3N2MzNzc1NTUwZTZiYTZhYzJiYzA1OWY2ODQ3ZDY0NGM5ZTQ4OTRlNDJjNjBkNzk3NGQ4YzJiXCIsXG4gICAgICBZOiBcIjgyYjQ5YTdjYWY3MGRlZjM4Y2RhZDI3NDBhZjQ1YzFlNGY5Njk2NTAxMDVjNTAxOWEyOWJiMThiMjFhOWFjYjVcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiYzIwOGNhYzRlZjlhNDdkMzg2MDk3YTljOTE1YjI4ZTljYjg5MjEzYWJlZThkMjZhMTcxOThlZTI2MTIwMWIwZFwiLFxuICAgICAgWTogXCJjN2RiMmZlNDYzMTEwOWY0MDgzM2RlOWRjNzhkMDdlMzU3MDY1NDllZTQ4ZmE1NTdiMzNlNGU3NWUxMDQ3ODczXCJcbiAgICB9LCB7XG4gICAgICBYOiBcImNhMTc2NmJiNDI2ZDRjYTU1ODI4MThhMGM1NDM5ZDU2MGVhNjRmNWJhYTA2MDc5M2FiMjlkZDNkMGNlYWNmZVwiLFxuICAgICAgWTogXCJkNDZjMWQwOGM0MGUxMzA2ZTFiY2EzMjhjMjI4N2I4MjY4MTY2YjExYTFiYTRiODQ0MmVhMmFkMGM1ZTMyMTUyXCJcbiAgICB9LCB7XG4gICAgICBYOiBcImMzOTM0ZGQyZjZmNGIzZDJlMWUzOThjYzUwMWUxNDNjMWUxYTM4MWI1MmZlYjZkMTUyNWFmMzRkMTYyNTM3NjhcIixcbiAgICAgIFk6IFwiNzFmNTE0MWE1MDM1Nzk5MDk5ZjVlYTNlMjQxZTY2OTQ2YmM1NWRjODU3YWMzYmQ3ZDZmY2RiOGRjZDNlZWVlZlwiXG4gICAgfSwge1xuICAgICAgWDogXCIyMmU2NmYxOTI5NjMxZDAwYmYwMjYyMjc1ODE1OTdmMDg1ZmQ5NGZkOTUyZmMwZGNhOWYwODMzMzk4YjVjMDY0XCIsXG4gICAgICBZOiBcIjYwODhiMzkxMmUxMGExZTlkNTAzNTVhNjA5YzEwZGI3ZDE4OGYxNmEyZTJmZDczNTdlNTFiZjRmNmE3NGYwYTFcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiOWRjOWZhNDEwZjNjZTllYjcwZGY3MGNkZWEwMGE0OWYyYzRjYzdhMzFjMDhjMGRhYjVmODYzZWQzNWZmNTEzOVwiLFxuICAgICAgWTogXCI2MjdhMjkxY2I4N2E3NWM2MWRhM2Y2NWQ2ODE4ZTFlMDVlMzYwMjE3MTc5ODE3ZWQyN2U4YzczYmNhN2VjMTIyXCJcbiAgICB9LCB7XG4gICAgICBYOiBcIjExOGI5ZmMwN2U5N2IwOTZkODk5YjlmNjY1ODQ2M2NlNmE4Y2FhNjQwMzhlMzdmYzk2OWRmNGU2MDIzZGQ4YzZcIixcbiAgICAgIFk6IFwiYmFmOWZhNGU1MTc3MGY0Nzk2ZWExNjVkZDAzYTc2OWI4NjA2NjgxYTM4OTU0YTBhOTJjNGNiZmZkNjYwOWNlOVwiXG4gICAgfSwge1xuICAgICAgWDogXCI4YTZkOGI5MjVkYTE1YTI3M2RlYzNkOGY4Mzk1ZWMzNWNkNjg3OGYyNzRiMmIxODBlNGUxMDY5OTlkYjY0MDQzXCIsXG4gICAgICBZOiBcIjk2ZjY3Zjg3MGMxNTc3NDNkYTBiMWViODRkODliZjMwNTAwZDc0ZGM4NGMxMWY1MDFlZTFjYjAxM2FjYzhjNDZcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiMzljZWNiNjJlODYzNzI5ZjU3MmY3ZGZjNDZjMjQ4Njc5ODFiZjA0YmI0MDVmZWQwZGYzOWUzMzk4NGJmYWRlNVwiLFxuICAgICAgWTogXCI2MWMyMzY0NDM0MDEyZTY4YTJiZTJlOTk1MjgwNTAzN2U1MjYyOWQ3NzYyZmFmYzhlMTBlOWZiNWJhZDhmNzkwXCJcbiAgICB9XSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdG9ydXNJbmRleGVzXCIsIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbmV0d29ya1wiLCBFVEhFUkVVTV9ORVRXT1JLLk1BSU5ORVQpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibm9kZUxpc3RBZGRyZXNzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cGRhdGVkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJub2RlTGlzdENvbnRyYWN0XCIsIHZvaWQgMCk7XG5cbiAgICBsZXQgdXJsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2FsVXJsID0gbmV3IFVSTChuZXR3b3JrKTtcbiAgICAgIHVybCA9IGxvY2FsVXJsLmhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gXCJiOGNkYjBlNGNmZjI0NTk5YTI4NmJmOGU4N2ZmMWM5NlwiO1xuICAgICAgdXJsID0gXCJodHRwczovL1wiLmNvbmNhdChuZXR3b3JrLCBcIi5pbmZ1cmEuaW8vdjMvXCIpLmNvbmNhdChwcm9qZWN0SWQpO1xuICAgIH1cblxuICAgIFdlYjNFdGhDb250cmFjdC5zZXRQcm92aWRlcih1cmwpO1xuICAgIHRoaXMubm9kZUxpc3RDb250cmFjdCA9IG5ldyBXZWIzRXRoQ29udHJhY3QoYWJpLCBwcm94eUFkZHJlc3MpO1xuICAgIHRoaXMubm9kZUxpc3RBZGRyZXNzID0gcHJveHlBZGRyZXNzO1xuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX25ldHdvcmsgPSBuZXR3b3JrO1xuICB9XG5cbiAgZ2V0IF9ub2RlRGV0YWlscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudEVwb2NoOiB0aGlzLl9jdXJyZW50RXBvY2gsXG4gICAgICBub2RlTGlzdEFkZHJlc3M6IHRoaXMubm9kZUxpc3RBZGRyZXNzLFxuICAgICAgdG9ydXNOb2RlRW5kcG9pbnRzOiB0aGlzLl90b3J1c05vZGVFbmRwb2ludHMsXG4gICAgICB0b3J1c05vZGVQdWI6IHRoaXMuX3RvcnVzTm9kZVB1YixcbiAgICAgIHRvcnVzSW5kZXhlczogdGhpcy5fdG9ydXNJbmRleGVzLFxuICAgICAgdXBkYXRlZDogdGhpcy51cGRhdGVkXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGdldE5vZGVEZXRhaWxzKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgc2tpcCA9IGZhbHNlLFxuICAgICAgdmVyaWZpZXIsXG4gICAgICB2ZXJpZmllcklkXG4gICAgfSA9IF9yZWY7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHNraXAgJiYgdGhpcy5fbmV0d29yayA9PT0gRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVUKSByZXR1cm4gdGhpcy5fbm9kZURldGFpbHM7IC8vIERvIHRoaXMgb25seSBmb3IgbWFpbm5ldCB3aGVyZSB0aGUgbGlzdCBpcyBzdGF0aWMgaXJyZXNwZWN0aXZlIG9mIHZlcmlmaWVyLCB2ZXJpZmllcklkXG5cbiAgICAgIGlmICh0aGlzLnVwZGF0ZWQgJiYgdGhpcy5fbmV0d29yayA9PT0gRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVUKSByZXR1cm4gdGhpcy5fbm9kZURldGFpbHM7XG4gICAgICBjb25zdCBoYXNoZWRWZXJpZmllcklkID0ga2VjY2FrMjU2KHZlcmlmaWVySWQpO1xuICAgICAgY29uc3Qgbm9kZURldGFpbHMgPSBhd2FpdCB0aGlzLm5vZGVMaXN0Q29udHJhY3QubWV0aG9kcy5nZXROb2RlU2V0KHZlcmlmaWVyLCBoYXNoZWRWZXJpZmllcklkKS5jYWxsKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRFcG9jaCxcbiAgICAgICAgdG9ydXNOb2RlRW5kcG9pbnRzLFxuICAgICAgICB0b3J1c05vZGVQdWJYLFxuICAgICAgICB0b3J1c05vZGVQdWJZLFxuICAgICAgICB0b3J1c0luZGV4ZXNcbiAgICAgIH0gPSBub2RlRGV0YWlscztcbiAgICAgIHRoaXMuX2N1cnJlbnRFcG9jaCA9IGN1cnJlbnRFcG9jaDtcbiAgICAgIHRoaXMuX3RvcnVzSW5kZXhlcyA9IHRvcnVzSW5kZXhlcy5tYXAoeCA9PiBOdW1iZXIoeCkpO1xuICAgICAgY29uc3QgdXBkYXRlZEVuZHBvaW50cyA9IFtdO1xuICAgICAgY29uc3QgdXBkYXRlZE5vZGVQdWIgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcnVzTm9kZUVuZHBvaW50cy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgY29uc3QgZW5kUG9pbnRFbGVtZW50ID0gdG9ydXNOb2RlRW5kcG9pbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgcHViS3ggPSB0b3J1c05vZGVQdWJYW2luZGV4XTtcbiAgICAgICAgY29uc3QgcHViS3kgPSB0b3J1c05vZGVQdWJZW2luZGV4XTtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHBzOi8vXCIuY29uY2F0KGVuZFBvaW50RWxlbWVudC5zcGxpdChcIjpcIilbMF0sIFwiL2pycGNcIik7XG4gICAgICAgIHVwZGF0ZWRFbmRwb2ludHMucHVzaChlbmRwb2ludCk7XG4gICAgICAgIHVwZGF0ZWROb2RlUHViLnB1c2goe1xuICAgICAgICAgIFg6IHRvSGV4KHB1Ykt4KS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG4gICAgICAgICAgWTogdG9IZXgocHViS3kpLnJlcGxhY2UoXCIweFwiLCBcIlwiKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdG9ydXNOb2RlRW5kcG9pbnRzID0gdXBkYXRlZEVuZHBvaW50cztcbiAgICAgIHRoaXMuX3RvcnVzTm9kZVB1YiA9IHVwZGF0ZWROb2RlUHViO1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKHRoaXMuX25ldHdvcmsgPT09IEVUSEVSRVVNX05FVFdPUksuTUFJTk5FVCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZURldGFpbHM7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCB7IEVUSEVSRVVNX05FVFdPUkssIGFiaSwgTm9kZURldGFpbE1hbmFnZXIgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmV0Y2hOb2RlRGV0YWlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC5tZXJnZSc7XG5pbXBvcnQgbG9nTGV2ZWwsIHsgbGV2ZWxzIH0gZnJvbSAnbG9nbGV2ZWwnO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgbG9nID0gbG9nTGV2ZWwuZ2V0TG9nZ2VyKFwiaHR0cC1oZWxwZXJzXCIpO1xubG9nLnNldExldmVsKGxldmVscy5JTkZPKTtcbmxldCBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIjtcbmxldCBlbWJlZEhvc3QgPSBcIlwiOyAvLyAjcmVnaW9uIEFQSSBLZXlzXG5cbmNvbnN0IGdhdGV3YXlBdXRoSGVhZGVyID0gXCJ4LWFwaS1rZXlcIjtcbmNvbnN0IGdhdGV3YXlFbWJlZEhvc3RIZWFkZXIgPSBcIngtZW1iZWQtaG9zdFwiO1xuZnVuY3Rpb24gc2V0RW1iZWRIb3N0KGVtYmVkSG9zdF8pIHtcbiAgZW1iZWRIb3N0ID0gZW1iZWRIb3N0Xztcbn1cbmZ1bmN0aW9uIGNsZWFyRW1iZWRIb3N0KCkge1xuICBlbWJlZEhvc3QgPSBcIlwiO1xufVxuZnVuY3Rpb24gZ2V0RW1iZWRIb3N0KCkge1xuICByZXR1cm4gZW1iZWRIb3N0O1xufVxuZnVuY3Rpb24gc2V0QVBJS2V5KGFwaUtleV8pIHtcbiAgYXBpS2V5ID0gYXBpS2V5Xztcbn1cbmZ1bmN0aW9uIGNsZWFyQVBJS2V5KCkge1xuICBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIjtcbn1cbmZ1bmN0aW9uIGdldEFQSUtleSgpIHtcbiAgcmV0dXJuIGFwaUtleTtcbn0gLy8gI2VuZHJlZ2lvblxuXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xuICBsb2cuc2V0TGV2ZWwobGV2ZWwpO1xufVxuXG5mdW5jdGlvbiBnZXRBcGlLZXlIZWFkZXJzKCkge1xuICBjb25zdCBoZWFkZXJzID0ge307XG4gIGlmIChhcGlLZXkpIGhlYWRlcnNbZ2F0ZXdheUF1dGhIZWFkZXJdID0gYXBpS2V5O1xuICBpZiAoZW1iZWRIb3N0KSBoZWFkZXJzW2dhdGV3YXlFbWJlZEhvc3RIZWFkZXJdID0gZW1iZWRIb3N0O1xuICByZXR1cm4gaGVhZGVycztcbn1cblxuZnVuY3Rpb24gZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSkge1xuICBsb2cuaW5mbyhcIlJlc3BvbnNlOiBcIi5jb25jYXQocmVzcG9uc2Uuc3RhdHVzLCBcIiBcIikuY29uY2F0KHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgbG9nLmluZm8oXCJVcmw6IFwiLmNvbmNhdChyZXNwb25zZS51cmwpKTtcbn1cblxuY29uc3QgcHJvbWlzZVRpbWVvdXQgPSAobXMsIHByb21pc2UpID0+IHtcbiAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaW1lZCBvdXQgaW4gXCIuY29uY2F0KG1zLCBcIm1zXCIpKSk7XG4gICAgfSwgbXMpO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmFjZShbcHJvbWlzZSwgdGltZW91dF0pO1xufTtcbmNvbnN0IGdldCA9IGFzeW5jIGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IG9wdGlvbnNfID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgbGV0IGN1c3RvbU9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgICBoZWFkZXJzOiB7fVxuICB9O1xuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJHRVRcIlxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgdGhyb3cgcmVzcG9uc2U7XG59O1xuY29uc3QgcG9zdCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgfVxuICB9O1xuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgfSk7IC8vIGRlZXAgbWVyZ2UgY2hhbmdlcyB0aGUgc3RydWN0dXJlIG9mIGZvcm0gZGF0YSBhbmQgdXJsIGVuY29kZWQgZGF0YSAsXG4gIC8vIHNvIHdlIHNob3VsZCBub3QgZGVlcG1lcmdlIGJvZHkgZGF0YVxuXG4gIGlmIChjdXN0b21PcHRpb25zLmlzVXJsRW5jb2RlZERhdGEpIHtcbiAgICAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAgIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cbiAgICBvcHRpb25zLmJvZHkgPSBkYXRhOyAvLyBJZiB1cmwgZW5jb2RlZCBkYXRhLCB0aGlzIG11c3Qgbm90IGJlIHRoZSBjb250ZW50IHR5cGVcblxuICAgIGlmIChvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKSBkZWxldGUgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2VUaW1lb3V0KGN1c3RvbU9wdGlvbnMudGltZW91dCB8fCA2MDAwMCwgZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSk7XG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH0pKTtcbn07XG5jb25zdCBwYXRjaCA9IGFzeW5jIGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgfVxuICB9OyAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiXG4gIH0pOyAvLyBkZWVwIG1lcmdlIGNoYW5nZXMgdGhlIHN0cnVjdHVyZSBvZiBmb3JtIGRhdGEgYW5kIHVybCBlbmNvZGVkIGRhdGEgLFxuICAvLyBzbyB3ZSBzaG91bGQgbm90IGRlZXBtZXJnZSBib2R5IGRhdGFcblxuICBpZiAoY3VzdG9tT3B0aW9ucy5pc1VybEVuY29kZWREYXRhKSB7XG4gICAgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gICAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG4gICAgb3B0aW9ucy5ib2R5ID0gZGF0YTsgLy8gSWYgdXJsIGVuY29kZWQgZGF0YSwgdGhpcyBtdXN0IG5vdCBiZSB0aGUgY29udGVudCB0eXBlXG5cbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIikgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSk7XG4gIHRocm93IHJlc3BvbnNlO1xufTtcbmNvbnN0IHJlbW92ZSA9IGFzeW5jIGZ1bmN0aW9uICh1cmwpIHtcbiAgbGV0IGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgfVxuICB9OyAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuXG4gIGlmIChjdXN0b21PcHRpb25zLnVzZUFQSUtleSkge1xuICAgIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zLmhlYWRlcnMpLCBnZXRBcGlLZXlIZWFkZXJzKCkpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zXywge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIlxuICB9KTtcblxuICBpZiAoY3VzdG9tT3B0aW9ucy5pc1VybEVuY29kZWREYXRhKSB7XG4gICAgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gICAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG4gICAgb3B0aW9ucy5ib2R5ID0gZGF0YTsgLy8gSWYgdXJsIGVuY29kZWQgZGF0YSwgdGhpcyBtdXN0IG5vdCBiZSB0aGUgY29udGVudCB0eXBlXG5cbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIikgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSk7XG4gIHRocm93IHJlc3BvbnNlO1xufTtcbmNvbnN0IGdlbmVyYXRlSnNvblJQQ09iamVjdCA9IChtZXRob2QsIHBhcmFtZXRlcnMpID0+ICh7XG4gIGpzb25ycGM6IFwiMi4wXCIsXG4gIG1ldGhvZCxcbiAgaWQ6IDEwLFxuICBwYXJhbXM6IHBhcmFtZXRlcnNcbn0pO1xuY29uc3QgcHJvbWlzZVJhY2UgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGxldCB0aW1lb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiA2MDAwMDtcbiAgcmV0dXJuIFByb21pc2UucmFjZShbZ2V0KHVybCwgb3B0aW9ucyksIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJ0aW1lZCBvdXRcIikpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9KV0pO1xufTtcblxuZXhwb3J0IHsgY2xlYXJBUElLZXksIGNsZWFyRW1iZWRIb3N0LCBnYXRld2F5QXV0aEhlYWRlciwgZ2F0ZXdheUVtYmVkSG9zdEhlYWRlciwgZ2VuZXJhdGVKc29uUlBDT2JqZWN0LCBnZXQsIGdldEFQSUtleSwgZ2V0RW1iZWRIb3N0LCBwYXRjaCwgcG9zdCwgcHJvbWlzZVJhY2UsIHByb21pc2VUaW1lb3V0LCByZW1vdmUsIHNldEFQSUtleSwgc2V0RW1iZWRIb3N0LCBzZXRMb2dMZXZlbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cEhlbHBlcnMuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHJhbmRvbWJ5dGVzIGZyb20gJ3JhbmRvbWJ5dGVzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgYmFzZTY0dXJsTGliIGZyb20gJ2Jhc2U2NHVybCc7XG5pbXBvcnQga2VjY2FrTGliIGZyb20gJ2tlY2Nhayc7XG5cbmNvbnN0IHJhbmRvbUlkID0gKCkgPT4gcmFuZG9tYnl0ZXMoMzIpLnRvU3RyaW5nKFwiaGV4XCIpO1xuXG5jbGFzcyBVUkxXaXRoSGFzaFBhcmFtcyBleHRlbmRzIFVSTCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYXNoUGFyYW1zXCIsIG5ldyBVUkxTZWFyY2hQYXJhbXMoKSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLmhhc2hQYXJhbXMudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gc3VwZXIudG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfVxuXG59XG5cbmNvbnN0IGJhc2U2NHVybCA9IGJhc2U2NHVybExpYjtcbmZ1bmN0aW9uIHNhZmVidG9hKHN0cikge1xuICByZXR1cm4gYmFzZTY0dXJsLmVuY29kZShzdHIpO1xufVxuZnVuY3Rpb24gc2FmZWF0b2Ioc3RyKSB7XG4gIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gIHJldHVybiBiYXNlNjR1cmwuZGVjb2RlKHN0cik7XG59XG5jb25zdCBrZWNjYWsgPSBrZWNjYWtMaWI7XG5mdW5jdGlvbiBiYXNlNjR0b0pTT04oYjY0c3RyKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGJhc2U2NHVybC5kZWNvZGUoYjY0c3RyKSk7XG59XG5mdW5jdGlvbiBqc29uVG9CYXNlNjQoanNvbikge1xuICByZXR1cm4gYmFzZTY0dXJsLmVuY29kZShKU09OLnN0cmluZ2lmeShqc29uKSk7XG59XG5mdW5jdGlvbiBrZWNjYWsyNTYoc3RyKSB7XG4gIGxldCBpbnB1dCA9IHN0cjtcblxuICBpZiAodHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIiAmJiBzdHIuc2xpY2UoMCwgMikgPT09IFwiMHhcIiAmJiBzdHIubGVuZ3RoID09PSA2Nikge1xuICAgIGlucHV0ID0gQnVmZmVyLmZyb20oc3RyLnNsaWNlKDIpLCBcImhleFwiKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBcIjB4XCIuY29uY2F0KGtlY2NhayhcImtlY2NhazI1NlwiKS51cGRhdGUoaW5wdXQpLmRpZ2VzdChcImhleFwiKS5wYWRTdGFydCg2NCwgXCIwXCIpKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCB7IFVSTFdpdGhIYXNoUGFyYW1zLCBiYXNlNjR0b0pTT04sIGJhc2U2NHVybCwganNvblRvQmFzZTY0LCBrZWNjYWssIGtlY2NhazI1NiwgcmFuZG9tSWQsIHNhZmVhdG9iLCBzYWZlYnRvYSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3BlbmxvZ2luVXRpbHMuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCB7IER1cGxleCB9IGZyb20gJ3JlYWRhYmxlLXN0cmVhbSc7XG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJ0B0b3J1c2xhYnMvb3BlbmxvZ2luLXV0aWxzJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ2Zhc3Qtc2FmZS1zdHJpbmdpZnknO1xuaW1wb3J0IHsgc2VyaWFsaXplRXJyb3IgfSBmcm9tICdldGgtcnBjLWVycm9ycyc7XG5pbXBvcnQgZW9zIGZyb20gJ2VuZC1vZi1zdHJlYW0nO1xuaW1wb3J0IG9uY2UgZnJvbSAnb25jZSc7XG5pbXBvcnQgcHVtcCBmcm9tICdwdW1wJztcblxuZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgU1lOID0gXCJTWU5cIjtcbmNvbnN0IEFDSyA9IFwiQUNLXCI7XG5jb25zdCBCUksgPSBcIkJSS1wiO1xuY2xhc3MgQmFzZVBvc3RNZXNzYWdlU3RyZWFtIGV4dGVuZHMgRHVwbGV4IHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBuYW1lLFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGFyZ2V0V2luZG93ID0gd2luZG93LFxuICAgICAgdGFyZ2V0T3JpZ2luID0gXCIqXCJcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcih7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW5pdFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2hhdmVTeW5cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9uYW1lXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFyZ2V0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFyZ2V0V2luZG93XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFyZ2V0T3JpZ2luXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfb25NZXNzYWdlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3luSW50ZXJ2YWxJZFwiLCB2b2lkIDApO1xuXG4gICAgaWYgKCFuYW1lIHx8ICF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQuXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2luaXQgPSBmYWxzZTtcbiAgICB0aGlzLl9oYXZlU3luID0gZmFsc2U7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0OyAvLyB0YXJnZXQgb3JpZ2luXG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cgPSB0YXJnZXRXaW5kb3c7XG4gICAgdGhpcy5fdGFyZ2V0T3JpZ2luID0gdGFyZ2V0T3JpZ2luO1xuICAgIHRoaXMuX29uTWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc3luSW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX29uTWVzc2FnZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5faGFuZFNoYWtlKCk7XG4gIH1cblxuICBfYnJlYWsoKSB7XG4gICAgdGhpcy5jb3JrKCk7XG5cbiAgICB0aGlzLl93cml0ZShCUkssIG51bGwsIG5vb3ApO1xuXG4gICAgdGhpcy5faGF2ZVN5biA9IGZhbHNlO1xuICAgIHRoaXMuX2luaXQgPSBmYWxzZTtcbiAgfVxuXG4gIF9oYW5kU2hha2UoKSB7XG4gICAgdGhpcy5fd3JpdGUoU1lOLCBudWxsLCBub29wKTtcblxuICAgIHRoaXMuY29yaygpO1xuICB9XG5cbiAgX29uRGF0YShkYXRhKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0KSB7XG4gICAgICAvLyBsaXN0ZW4gZm9yIGhhbmRzaGFrZVxuICAgICAgaWYgKGRhdGEgPT09IFNZTikge1xuICAgICAgICB0aGlzLl9oYXZlU3luID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl93cml0ZShBQ0ssIG51bGwsIG5vb3ApO1xuICAgICAgfSBlbHNlIGlmIChkYXRhID09PSBBQ0spIHtcbiAgICAgICAgdGhpcy5faW5pdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9oYXZlU3luKSB7XG4gICAgICAgICAgdGhpcy5fd3JpdGUoQUNLLCBudWxsLCBub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudW5jb3JrKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhID09PSBCUkspIHtcbiAgICAgIHRoaXMuX2JyZWFrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvcndhcmQgbWVzc2FnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5wdXNoKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3Bvc3RNZXNzYWdlKGRhdGEpIHtcbiAgICBjb25zdCBvcmlnaW5Db25zdHJhaW50ID0gdGhpcy5fdGFyZ2V0T3JpZ2luO1xuXG4gICAgdGhpcy5fdGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgIHRhcmdldDogdGhpcy5fdGFyZ2V0LFxuICAgICAgZGF0YVxuICAgIH0sIG9yaWdpbkNvbnN0cmFpbnQpO1xuICB9XG5cbiAgb25NZXNzYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LmRhdGE7IC8vIHZhbGlkYXRlIG1lc3NhZ2VcblxuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW4gIT09IFwiKlwiICYmIGV2ZW50Lm9yaWdpbiAhPT0gdGhpcy5fdGFyZ2V0T3JpZ2luIHx8IGV2ZW50LnNvdXJjZSAhPT0gdGhpcy5fdGFyZ2V0V2luZG93IHx8IHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiIHx8IG1lc3NhZ2UudGFyZ2V0ICE9PSB0aGlzLl9uYW1lIHx8ICFtZXNzYWdlLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkRhdGEobWVzc2FnZS5kYXRhKTtcbiAgfVxuXG4gIF9yZWFkKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBfd3JpdGUoZGF0YSwgXywgY2IpIHtcbiAgICB0aGlzLl9wb3N0TWVzc2FnZShkYXRhKTtcblxuICAgIGNiKCk7XG4gIH1cblxuICBfZGVzdHJveSgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fb25NZXNzYWdlLCBmYWxzZSk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBzYWZlQXBwbHkoaGFuZGxlciwgY29udGV4dCwgYXJncykge1xuICB0cnkge1xuICAgIFJlZmxlY3QuYXBwbHkoaGFuZGxlciwgY29udGV4dCwgYXJncyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRocm93IGVycm9yIGFmdGVyIHRpbWVvdXQgc28gYXMgbm90IHRvIGludGVycnVwdCB0aGUgc3RhY2tcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFycikge1xuICBjb25zdCBuID0gYXJyLmxlbmd0aDtcbiAgY29uc3QgY29weSA9IG5ldyBBcnJheShuKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gY29weTtcbn1cblxuY2xhc3MgU2FmZUV2ZW50RW1pdHRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGVtaXQodHlwZSkge1xuICAgIGxldCBkb0Vycm9yID0gdHlwZSA9PT0gXCJlcnJvclwiO1xuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICAgIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9FcnJvciA9IGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICghZG9FcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuXG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZG9FcnJvcikge1xuICAgICAgbGV0IGVyO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIFtlcl0gPSBhcmdzO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcblxuXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJVbmhhbmRsZWQgZXJyb3IuXCIuY29uY2F0KGVyID8gXCIgKFwiLmNvbmNhdChlci5tZXNzYWdlLCBcIilcIikgOiBcIlwiKSk7XG4gICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHNhZmVBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIHNhZmVBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn1cblxuY2xhc3MgU2VyaWFsaXphYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgY29kZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBkYXRhXG4gICAgfSA9IF9yZWY7XG5cbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoY29kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNvZGUgbXVzdCBiZSBhbiBpbnRlZ2VyXCIpO1xuICAgIH1cblxuICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWVzc2FnZSBtdXN0IGJlIHN0cmluZ1wiKTtcbiAgICB9XG5cbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvZGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRhdGFcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuY29kZSA9IGNvZGU7XG5cbiAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBzdHJpbmdpZnkoe1xuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2tcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNvbnN0IGdldFJwY1Byb21pc2VDYWxsYmFjayA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgbGV0IHVud3JhcFJlc3VsdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgcmV0dXJuIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICBpZiAoZXJyb3IgfHwgcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgIHJlamVjdChlcnJvciB8fCByZXNwb25zZS5lcnJvcik7XG4gICAgfSBlbHNlIGlmICghdW53cmFwUmVzdWx0IHx8IEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuICAgIH1cbiAgfTtcbn07XG5mdW5jdGlvbiBjcmVhdGVFcnJvck1pZGRsZXdhcmUobG9nKSB7XG4gIHJldHVybiAocmVxLCByZXMsIG5leHQsIGVuZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBqc29uLXJwYy1lbmdpbmUgd2lsbCB0ZXJtaW5hdGUgdGhlIHJlcXVlc3Qgd2hlbiBpdCBub3RpY2VzIHRoaXMgZXJyb3JcbiAgICAgIGlmICh0eXBlb2YgcmVxLm1ldGhvZCAhPT0gXCJzdHJpbmdcIiB8fCAhcmVxLm1ldGhvZCkge1xuICAgICAgICByZXMuZXJyb3IgPSBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgbWV0aG9kXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGVuZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoZG9uZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9ID0gcmVzO1xuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmVycm9yKFwiT3BlbkxvZ2luIC0gUlBDIEVycm9yOiBcIi5jb25jYXQoZXJyb3IubWVzc2FnZSksIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2cuZXJyb3IoXCJPcGVuTG9naW4gLSBSUEMgRXJyb3IgdGhyb3duOiBcIi5jb25jYXQoZXJyb3IubWVzc2FnZSksIGVycm9yKTtcbiAgICAgIHJlcy5lcnJvciA9IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfSk7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTdHJlYW1NaWRkbGV3YXJlKCkge1xuICBjb25zdCBpZE1hcCA9IHt9O1xuXG4gIGZ1bmN0aW9uIHJlYWROb29wKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IG5ldyBTYWZlRXZlbnRFbWl0dGVyKCk7XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHJlcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBpZE1hcFtyZXMuaWRdO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHJlYW1NaWRkbGV3YXJlIC0gVW5rbm93biByZXNwb25zZSBpZCBcXFwiXCIuY29uY2F0KHJlcy5pZCwgXCJcXFwiXCIpKTtcbiAgICB9XG5cbiAgICBkZWxldGUgaWRNYXBbcmVzLmlkXTsgLy8gY29weSB3aG9sZSByZXMgb250byBvcmlnaW5hbCByZXNcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dC5yZXMsIHJlcyk7IC8vIHJ1biBjYWxsYmFjayBvbiBlbXB0eSBzdGFjayxcbiAgICAvLyBwcmV2ZW50IGludGVybmFsIHN0cmVhbS1oYW5kbGVyIGZyb20gY2F0Y2hpbmcgZXJyb3JzXG5cbiAgICBzZXRUaW1lb3V0KGNvbnRleHQuZW5kKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NOb3RpZmljYXRpb24ocmVzKSB7XG4gICAgZXZlbnRzLmVtaXQoXCJub3RpZmljYXRpb25cIiwgcmVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKHJlcywgX2VuY29kaW5nLCBjYikge1xuICAgIGxldCBlcnI7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgaXNOb3RpZmljYXRpb24gPSAhcmVzLmlkO1xuXG4gICAgICBpZiAoaXNOb3RpZmljYXRpb24pIHtcbiAgICAgICAgcHJvY2Vzc05vdGlmaWNhdGlvbihyZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlKHJlcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgZXJyID0gX2VycjtcbiAgICB9IC8vIGNvbnRpbnVlIHByb2Nlc3Npbmcgc3RyZWFtXG5cblxuICAgIGNiKGVycik7XG4gIH1cblxuICBjb25zdCBzdHJlYW0gPSBuZXcgRHVwbGV4KHtcbiAgICBvYmplY3RNb2RlOiB0cnVlLFxuICAgIHJlYWQ6IHJlYWROb29wLFxuICAgIHdyaXRlOiBwcm9jZXNzTWVzc2FnZVxuICB9KTtcblxuICBjb25zdCBtaWRkbGV3YXJlID0gKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAvLyB3cml0ZSByZXEgdG8gc3RyZWFtXG4gICAgc3RyZWFtLnB1c2gocmVxKTsgLy8gcmVnaXN0ZXIgcmVxdWVzdCBvbiBpZCBtYXBcblxuICAgIGlkTWFwW3JlcS5pZF0gPSB7XG4gICAgICByZXEsXG4gICAgICByZXMsXG4gICAgICBuZXh0LFxuICAgICAgZW5kXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGV2ZW50cyxcbiAgICBtaWRkbGV3YXJlLFxuICAgIHN0cmVhbVxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlU2NhZmZvbGRNaWRkbGV3YXJlKGhhbmRsZXJzKSB7XG4gIHJldHVybiAocmVxLCByZXMsIG5leHQsIGVuZCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyc1tyZXEubWV0aG9kXTsgLy8gaWYgbm8gaGFuZGxlciwgcmV0dXJuXG5cbiAgICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH0gLy8gaWYgaGFuZGxlciBpcyBmbiwgY2FsbCBhcyBtaWRkbGV3YXJlXG5cblxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcywgbmV4dCwgZW5kKTtcbiAgICB9IC8vIGlmIGhhbmRsZXIgaXMgc29tZSBvdGhlciB2YWx1ZSwgdXNlIGFzIHJlc3VsdFxuXG5cbiAgICByZXMucmVzdWx0ID0gaGFuZGxlcjtcbiAgICByZXR1cm4gZW5kKCk7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJZFJlbWFwTWlkZGxld2FyZSgpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgX2VuZCkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsSWQgPSByZXEuaWQ7XG4gICAgY29uc3QgbmV3SWQgPSByYW5kb21JZCgpO1xuICAgIHJlcS5pZCA9IG5ld0lkO1xuICAgIHJlcy5pZCA9IG5ld0lkO1xuICAgIG5leHQoZG9uZSA9PiB7XG4gICAgICByZXEuaWQgPSBvcmlnaW5hbElkO1xuICAgICAgcmVzLmlkID0gb3JpZ2luYWxJZDtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxvZ2dlck1pZGRsZXdhcmUobG9nZ2VyKSB7XG4gIHJldHVybiAocmVxLCByZXMsIG5leHQsIF8pID0+IHtcbiAgICBsb2dnZXIuZGVidWcoXCJSRVFcIiwgcmVxLCBcIlJFU1wiLCByZXMpO1xuICAgIG5leHQoKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jTWlkZGxld2FyZShhc3luY01pZGRsZXdhcmUpIHtcbiAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgLy8gbmV4dFByb21pc2UgaXMgdGhlIGtleSB0byB0aGUgaW1wbGVtZW50YXRpb25cbiAgICAvLyBpdCBpcyByZXNvbHZlZCBieSB0aGUgcmV0dXJuIGhhbmRsZXIgcGFzc2VkIHRvIHRoZVxuICAgIC8vIFwibmV4dFwiIGZ1bmN0aW9uXG4gICAgbGV0IHJlc29sdmVOZXh0UHJvbWlzZTtcbiAgICBjb25zdCBuZXh0UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgcmVzb2x2ZU5leHRQcm9taXNlID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBsZXQgcmV0dXJuSGFuZGxlckNhbGxiYWNrID0gbnVsbDtcbiAgICBsZXQgbmV4dFdhc0NhbGxlZCA9IGZhbHNlOyAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBjb25zdW1lcidzIGFzeW5jIG1pZGRsZXdhcmUuXG5cbiAgICBjb25zdCBhc3luY05leHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBuZXh0V2FzQ2FsbGVkID0gdHJ1ZTsgLy8gV2UgcGFzcyBhIHJldHVybiBoYW5kbGVyIHRvIG5leHQoKS4gV2hlbiBpdCBpcyBjYWxsZWQgYnkgdGhlIGVuZ2luZSxcbiAgICAgIC8vIHRoZSBjb25zdW1lcidzIGFzeW5jIG1pZGRsZXdhcmUgd2lsbCByZXN1bWUgZXhlY3V0aW5nLlxuXG4gICAgICBuZXh0KHJ1blJldHVybkhhbmRsZXJzQ2FsbGJhY2sgPT4ge1xuICAgICAgICAvLyBUaGlzIGNhbGxiYWNrIGNvbWVzIGZyb20gSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnNcbiAgICAgICAgcmV0dXJuSGFuZGxlckNhbGxiYWNrID0gcnVuUmV0dXJuSGFuZGxlcnNDYWxsYmFjaztcbiAgICAgICAgcmVzb2x2ZU5leHRQcm9taXNlKCk7XG4gICAgICB9KTtcbiAgICAgIGF3YWl0IG5leHRQcm9taXNlO1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXN5bmNNaWRkbGV3YXJlKHJlcSwgcmVzLCBhc3luY05leHQpO1xuXG4gICAgICBpZiAobmV4dFdhc0NhbGxlZCkge1xuICAgICAgICBhd2FpdCBuZXh0UHJvbWlzZTsgLy8gd2UgbXVzdCB3YWl0IHVudGlsIHRoZSByZXR1cm4gaGFuZGxlciBpcyBjYWxsZWRcblxuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2sobnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQobnVsbCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChyZXR1cm5IYW5kbGVyQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuSGFuZGxlckNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG4vKipcbiAqIEEgSlNPTi1SUEMgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvY2Vzc29yLlxuICogR2l2ZSBpdCBhIHN0YWNrIG9mIG1pZGRsZXdhcmUsIHBhc3MgaXQgcmVxdWVzdHMsIGFuZCBnZXQgYmFjayByZXNwb25zZXMuXG4gKi9cblxuY2xhc3MgSlJQQ0VuZ2luZSBleHRlbmRzIFNhZmVFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21pZGRsZXdhcmVcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX21pZGRsZXdhcmUgPSBbXTtcbiAgfVxuICAvKipcbiAgICogU2VyaWFsbHkgZXhlY3V0ZXMgdGhlIGdpdmVuIHN0YWNrIG9mIG1pZGRsZXdhcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGFueSBlcnJvciBlbmNvdW50ZXJlZCBkdXJpbmcgbWlkZGxld2FyZSBleGVjdXRpb24sXG4gICAqIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHJlcXVlc3Qgd2FzIGNvbXBsZXRlZCwgYW5kIGFuIGFycmF5IG9mXG4gICAqIG1pZGRsZXdhcmUtZGVmaW5lZCByZXR1cm4gaGFuZGxlcnMuXG4gICAqL1xuXG5cbiAgc3RhdGljIGFzeW5jIF9ydW5BbGxNaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlU3RhY2spIHtcbiAgICBjb25zdCByZXR1cm5IYW5kbGVycyA9IFtdO1xuICAgIGxldCBlcnJvciA9IG51bGw7XG4gICAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTsgLy8gR28gZG93biBzdGFjayBvZiBtaWRkbGV3YXJlLCBjYWxsIGFuZCBjb2xsZWN0IG9wdGlvbmFsIHJldHVybkhhbmRsZXJzXG5cbiAgICBmb3IgKGNvbnN0IG1pZGRsZXdhcmUgb2YgbWlkZGxld2FyZVN0YWNrKSB7XG4gICAgICBbZXJyb3IsIGlzQ29tcGxldGVdID0gYXdhaXQgSlJQQ0VuZ2luZS5fcnVuTWlkZGxld2FyZShyZXEsIHJlcywgbWlkZGxld2FyZSwgcmV0dXJuSGFuZGxlcnMpO1xuXG4gICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW2Vycm9yLCBpc0NvbXBsZXRlLCByZXR1cm5IYW5kbGVycy5yZXZlcnNlKCldO1xuICB9XG4gIC8qKlxuICAgKiBSdW5zIGFuIGluZGl2aWR1YWwgbWlkZGxld2FyZS5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYW55IGVycm9yIGVuY291bnRlcmVkIGR1cmluZyBtaWRkbGV3YXJlIGV4ZWN0aW9uLFxuICAgKiBhbmQgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgcmVxdWVzdCBzaG91bGQgZW5kLlxuICAgKi9cblxuXG4gIHN0YXRpYyBfcnVuTWlkZGxld2FyZShyZXEsIHJlcywgbWlkZGxld2FyZSwgcmV0dXJuSGFuZGxlcnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBlbmQgPSBlcnIgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IGVyciB8fCByZXMuZXJyb3I7XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLmVycm9yID0gc2VyaWFsaXplRXJyb3IoZXJyb3IpO1xuICAgICAgICB9IC8vIFRydWUgaW5kaWNhdGVzIHRoYXQgdGhlIHJlcXVlc3Qgc2hvdWxkIGVuZFxuXG5cbiAgICAgICAgcmVzb2x2ZShbZXJyb3IsIHRydWVdKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHQgPSByZXR1cm5IYW5kbGVyID0+IHtcbiAgICAgICAgaWYgKHJlcy5lcnJvcikge1xuICAgICAgICAgIGVuZChyZXMuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZXR1cm5IYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldHVybkhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBlbmQobmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJKUlBDRW5naW5lOiAnbmV4dCcgcmV0dXJuIGhhbmRsZXJzIG11c3QgYmUgZnVuY3Rpb25zXCJcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm5IYW5kbGVycy5wdXNoKHJldHVybkhhbmRsZXIpO1xuICAgICAgICAgIH0gLy8gRmFsc2UgaW5kaWNhdGVzIHRoYXQgdGhlIHJlcXVlc3Qgc2hvdWxkIG5vdCBlbmRcblxuXG4gICAgICAgICAgcmVzb2x2ZShbbnVsbCwgZmFsc2VdKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCwgZW5kKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVuZChlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNlcmlhbGx5IGV4ZWN1dGVzIGFycmF5IG9mIHJldHVybiBoYW5kbGVycy4gVGhlIHJlcXVlc3QgYW5kIHJlc3BvbnNlIGFyZVxuICAgKiBhc3N1bWVkIHRvIGJlIGluIHRoZWlyIHNjb3BlLlxuICAgKi9cblxuXG4gIHN0YXRpYyBhc3luYyBfcnVuUmV0dXJuSGFuZGxlcnMoaGFuZGxlcnMpIHtcbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgaGFuZGxlcnMpIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaGFuZGxlcihlcnIgPT4gZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHJlc3BvbnNlIGhhcyBuZWl0aGVyIGEgcmVzdWx0IG5vciBhbiBlcnJvciwgb3IgaWZcbiAgICogdGhlIFwiaXNDb21wbGV0ZVwiIGZsYWcgaXMgZmFsc3kuXG4gICAqL1xuXG5cbiAgc3RhdGljIF9jaGVja0ZvckNvbXBsZXRpb24ocmVxLCByZXMsIGlzQ29tcGxldGUpIHtcbiAgICBpZiAoIShcInJlc3VsdFwiIGluIHJlcykgJiYgIShcImVycm9yXCIgaW4gcmVzKSkge1xuICAgICAgdGhyb3cgbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBcIlJlc3BvbnNlIGhhcyBubyBlcnJvciBvciByZXN1bHQgZm9yIHJlcXVlc3RcIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0NvbXBsZXRlKSB7XG4gICAgICB0aHJvdyBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwiTm90aGluZyBlbmRlZCByZXF1ZXN0XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQWRkIGEgbWlkZGxld2FyZSBmdW5jdGlvbiB0byB0aGUgZW5naW5lJ3MgbWlkZGxld2FyZSBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIG1pZGRsZXdhcmUgLSBUaGUgbWlkZGxld2FyZSBmdW5jdGlvbiB0byBhZGQuXG4gICAqL1xuXG5cbiAgcHVzaChtaWRkbGV3YXJlKSB7XG4gICAgdGhpcy5fbWlkZGxld2FyZS5wdXNoKG1pZGRsZXdhcmUpO1xuICB9XG5cbiAgaGFuZGxlKHJlcSwgY2IpIHtcbiAgICBpZiAoY2IgJiYgdHlwZW9mIGNiICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJjYWxsYmFja1wiIG11c3QgYmUgYSBmdW5jdGlvbiBpZiBwcm92aWRlZC4nKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZXEpKSB7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUJhdGNoKHJlcSwgY2IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlQmF0Y2gocmVxKTtcbiAgICB9XG5cbiAgICBpZiAoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGUocmVxLCBjYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2VIYW5kbGUocmVxKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGlzIGVuZ2luZSBhcyBhIG1pZGRsZXdhcmUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcHVzaGVkIHRvIG90aGVyXG4gICAqIGVuZ2luZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIFRoaXMgZW5naW5lIGFzIGEgbWlkZGxld2FyZSBmdW5jdGlvbi5cbiAgICovXG5cblxuICBhc01pZGRsZXdhcmUoKSB7XG4gICAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBbbWlkZGxld2FyZUVycm9yLCBpc0NvbXBsZXRlLCByZXR1cm5IYW5kbGVyc10gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5BbGxNaWRkbGV3YXJlKHJlcSwgcmVzLCB0aGlzLl9taWRkbGV3YXJlKTtcblxuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgIGF3YWl0IEpSUENFbmdpbmUuX3J1blJldHVybkhhbmRsZXJzKHJldHVybkhhbmRsZXJzKTtcbiAgICAgICAgICByZXR1cm4gZW5kKG1pZGRsZXdhcmVFcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChhc3luYyBoYW5kbGVyQ2FsbGJhY2sgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBKUlBDRW5naW5lLl9ydW5SZXR1cm5IYW5kbGVycyhyZXR1cm5IYW5kbGVycyk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBoYW5kbGVyQ2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgX2hhbmRsZUJhdGNoKHJlcXMsIGNiKSB7XG4gICAgLy8gVGhlIG9yZGVyIGhlcmUgaXMgaW1wb3J0YW50XG4gICAgdHJ5IHtcbiAgICAgIC8vIDIuIFdhaXQgZm9yIGFsbCByZXF1ZXN0cyB0byBmaW5pc2gsIG9yIHRocm93IG9uIHNvbWUga2luZCBvZiBmYXRhbFxuICAgICAgLy8gZXJyb3JcbiAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKCAvLyAxLiBCZWdpbiBleGVjdXRpbmcgZWFjaCByZXF1ZXN0IGluIHRoZSBvcmRlciByZWNlaXZlZFxuICAgICAgcmVxcy5tYXAodGhpcy5fcHJvbWlzZUhhbmRsZS5iaW5kKHRoaXMpKSk7IC8vIDMuIFJldHVybiBiYXRjaCByZXNwb25zZVxuXG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiKG51bGwsIHJlc3BvbnNlcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gY2IoZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEEgcHJvbWlzZS13cmFwcGVkIF9oYW5kbGUuXG4gICAqL1xuXG5cbiAgX3Byb21pc2VIYW5kbGUocmVxKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlKHJlcSwgKF9lcnIsIHJlcykgPT4ge1xuICAgICAgICAvLyBUaGVyZSB3aWxsIGFsd2F5cyBiZSBhIHJlc3BvbnNlLCBhbmQgaXQgd2lsbCBhbHdheXMgaGF2ZSBhbnkgZXJyb3JcbiAgICAgICAgLy8gdGhhdCBpcyBjYXVnaHQgYW5kIHByb3BhZ2F0ZWQuXG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBFbnN1cmVzIHRoYXQgdGhlIHJlcXVlc3Qgb2JqZWN0IGlzIHZhbGlkLCBwcm9jZXNzZXMgaXQsIGFuZCBwYXNzZXMgYW55XG4gICAqIGVycm9yIGFuZCB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRvIHRoZSBnaXZlbiBjYWxsYmFjay5cbiAgICpcbiAgICogRG9lcyBub3QgcmVqZWN0LlxuICAgKi9cblxuXG4gIGFzeW5jIF9oYW5kbGUoY2FsbGVyUmVxLCBjYikge1xuICAgIGlmICghY2FsbGVyUmVxIHx8IEFycmF5LmlzQXJyYXkoY2FsbGVyUmVxKSB8fCB0eXBlb2YgY2FsbGVyUmVxICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgbWVzc2FnZTogXCJyZXF1ZXN0IG11c3QgYmUgcGxhaW4gb2JqZWN0XCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNiKGVycm9yLCB7XG4gICAgICAgIGlkOiB1bmRlZmluZWQsXG4gICAgICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgICAgIGVycm9yXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNhbGxlclJlcS5tZXRob2QgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBcIm1ldGhvZCBtdXN0IGJlIHN0cmluZ1wiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYihlcnJvciwge1xuICAgICAgICBpZDogY2FsbGVyUmVxLmlkLFxuICAgICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgICBlcnJvclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxID0gX29iamVjdFNwcmVhZCQxKHt9LCBjYWxsZXJSZXEpO1xuXG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgaWQ6IHJlcS5pZCxcbiAgICAgIGpzb25ycGM6IHJlcS5qc29ucnBjXG4gICAgfTtcbiAgICBsZXQgZXJyb3IgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3Byb2Nlc3NSZXF1ZXN0KHJlcSwgcmVzKTtcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgIC8vIEEgcmVxdWVzdCBoYW5kbGVyIGVycm9yLCBhIHJlLXRocm93biBtaWRkbGV3YXJlIGVycm9yLCBvciBzb21ldGhpbmdcbiAgICAgIC8vIHVuZXhwZWN0ZWQuXG4gICAgICBlcnJvciA9IF9lcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIC8vIEVuc3VyZSBubyByZXN1bHQgaXMgcHJlc2VudCBvbiBhbiBlcnJvcmVkIHJlc3BvbnNlXG4gICAgICBkZWxldGUgcmVzLnJlc3VsdDtcblxuICAgICAgaWYgKCFyZXMuZXJyb3IpIHtcbiAgICAgICAgcmVzLmVycm9yID0gc2VyaWFsaXplRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYihlcnJvciwgcmVzKTtcbiAgfVxuICAvKipcbiAgICogRm9yIHRoZSBnaXZlbiByZXF1ZXN0IGFuZCByZXNwb25zZSwgcnVucyBhbGwgbWlkZGxld2FyZSBhbmQgdGhlaXIgcmV0dXJuXG4gICAqIGhhbmRsZXJzLCBpZiBhbnksIGFuZCBlbnN1cmVzIHRoYXQgaW50ZXJuYWwgcmVxdWVzdCBwcm9jZXNzaW5nIHNlbWFudGljc1xuICAgKiBhcmUgc2F0aXNmaWVkLlxuICAgKi9cblxuXG4gIGFzeW5jIF9wcm9jZXNzUmVxdWVzdChyZXEsIHJlcykge1xuICAgIGNvbnN0IFtlcnJvciwgaXNDb21wbGV0ZSwgcmV0dXJuSGFuZGxlcnNdID0gYXdhaXQgSlJQQ0VuZ2luZS5fcnVuQWxsTWlkZGxld2FyZShyZXEsIHJlcywgdGhpcy5fbWlkZGxld2FyZSk7IC8vIFRocm93IGlmIFwiZW5kXCIgd2FzIG5vdCBjYWxsZWQsIG9yIGlmIHRoZSByZXNwb25zZSBoYXMgbmVpdGhlciBhIHJlc3VsdFxuICAgIC8vIG5vciBhbiBlcnJvci5cblxuICAgIEpSUENFbmdpbmUuX2NoZWNrRm9yQ29tcGxldGlvbihyZXEsIHJlcywgaXNDb21wbGV0ZSk7IC8vIFRoZSByZXR1cm4gaGFuZGxlcnMgc2hvdWxkIHJ1biBldmVuIGlmIGFuIGVycm9yIHdhcyBlbmNvdW50ZXJlZCBkdXJpbmdcbiAgICAvLyBtaWRkbGV3YXJlIHByb2Nlc3NpbmcuXG5cblxuICAgIGF3YWl0IEpSUENFbmdpbmUuX3J1blJldHVybkhhbmRsZXJzKHJldHVybkhhbmRsZXJzKTsgLy8gTm93IHdlIHJlLXRocm93IHRoZSBtaWRkbGV3YXJlIHByb2Nlc3NpbmcgZXJyb3IsIGlmIGFueSwgdG8gY2F0Y2ggaXRcbiAgICAvLyBmdXJ0aGVyIHVwIHRoZSBjYWxsIGNoYWluLlxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxufVxuZnVuY3Rpb24gbWVyZ2VNaWRkbGV3YXJlKG1pZGRsZXdhcmVTdGFjaykge1xuICBjb25zdCBlbmdpbmUgPSBuZXcgSlJQQ0VuZ2luZSgpO1xuICBtaWRkbGV3YXJlU3RhY2suZm9yRWFjaChtaWRkbGV3YXJlID0+IGVuZ2luZS5wdXNoKG1pZGRsZXdhcmUpKTtcbiAgcmV0dXJuIGVuZ2luZS5hc01pZGRsZXdhcmUoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVuZ2luZVN0cmVhbShvcHRzKSB7XG4gIGlmICghb3B0cyB8fCAhb3B0cy5lbmdpbmUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGVuZ2luZSBwYXJhbWV0ZXIhXCIpO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGVuZ2luZVxuICB9ID0gb3B0czsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuXG4gIGxldCBzdHJlYW07XG5cbiAgZnVuY3Rpb24gcmVhZCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gd3JpdGUocmVxLCBfZW5jb2RpbmcsIGNiKSB7XG4gICAgZW5naW5lLmhhbmRsZShyZXEsIChfZXJyLCByZXMpID0+IHtcbiAgICAgIHN0cmVhbS5wdXNoKHJlcyk7XG4gICAgfSk7XG4gICAgY2IoKTtcbiAgfVxuXG4gIHN0cmVhbSA9IG5ldyBEdXBsZXgoe1xuICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgcmVhZCxcbiAgICB3cml0ZVxuICB9KTsgLy8gZm9yd2FyZCBub3RpZmljYXRpb25zXG5cbiAgaWYgKGVuZ2luZS5vbikge1xuICAgIGVuZ2luZS5vbihcIm5vdGlmaWNhdGlvblwiLCBtZXNzYWdlID0+IHtcbiAgICAgIHN0cmVhbS5wdXNoKG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0cmVhbTtcbn1cblxuY2xhc3MgU3Vic3RyZWFtIGV4dGVuZHMgRHVwbGV4IHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBwYXJlbnQsXG4gICAgICBuYW1lXG4gICAgfSA9IF9yZWY7XG4gICAgc3VwZXIoe1xuICAgICAgb2JqZWN0TW9kZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3BhcmVudFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX25hbWVcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuICAvKipcbiAgICogRXhwbGljaXRseSBzZXRzIHJlYWQgb3BlcmF0aW9ucyB0byBhIG5vLW9wLlxuICAgKi9cblxuXG4gIF9yZWFkKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGRhdGEgc2hvdWxkIGJlIHdyaXR0ZW4gdG8gdGhpcyB3cml0YWJsZSBzdHJlYW0uXG4gICAqXG4gICAqIEBwYXJhbSBjaHVuayAtIEFyYml0cmFyeSBvYmplY3QgdG8gd3JpdGVcbiAgICogQHBhcmFtIGVuY29kaW5nIC0gRW5jb2RpbmcgdG8gdXNlIHdoZW4gd3JpdGluZyBwYXlsb2FkXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIENhbGxlZCB3aGVuIHdyaXRpbmcgaXMgY29tcGxldGUgb3IgYW4gZXJyb3Igb2NjdXJzXG4gICAqL1xuXG5cbiAgX3dyaXRlKGNodW5rLCBfZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fcGFyZW50LnB1c2goe1xuICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgIGRhdGE6IGNodW5rXG4gICAgfSk7XG5cbiAgICBjYWxsYmFjaygpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbmNvbnN0IElHTk9SRV9TVUJTVFJFQU0gPSBTeW1ib2woXCJJR05PUkVfU1VCU1RSRUFNXCIpO1xuY2xhc3MgT2JqZWN0TXVsdGlwbGV4IGV4dGVuZHMgRHVwbGV4IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHN1cGVyKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgb3B0cyksIHt9LCB7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlXG4gICAgfSkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3N1YnN0cmVhbXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFN0cmVhbVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fc3Vic3RyZWFtcyA9IHt9O1xuICB9XG5cbiAgY3JlYXRlU3RyZWFtKG5hbWUpIHtcbiAgICAvLyB2YWxpZGF0ZSBuYW1lXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBuYW1lIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdWJzdHJlYW1zW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBTdWJzdHJlYW0gZm9yIG5hbWUgXFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIgYWxyZWFkeSBleGlzdHNcIikpO1xuICAgIH0gLy8gY3JlYXRlIHN1YnN0cmVhbVxuXG5cbiAgICBjb25zdCBzdWJzdHJlYW0gPSBuZXcgU3Vic3RyZWFtKHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWVcbiAgICB9KTtcbiAgICB0aGlzLl9zdWJzdHJlYW1zW25hbWVdID0gc3Vic3RyZWFtOyAvLyBsaXN0ZW4gZm9yIHBhcmVudCBzdHJlYW0gdG8gZW5kXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZVxuXG4gICAgYW55U3RyZWFtRW5kKHRoaXMsIF9lcnJvciA9PiBzdWJzdHJlYW0uZGVzdHJveShfZXJyb3IgfHwgdW5kZWZpbmVkKSk7XG4gICAgcmV0dXJuIHN1YnN0cmVhbTtcbiAgfSAvLyBpZ25vcmUgc3RyZWFtcyAoZG9udCBkaXNwbGF5IG9ycGhhbmVkIGRhdGEgd2FybmluZylcblxuXG4gIGlnbm9yZVN0cmVhbShuYW1lKSB7XG4gICAgLy8gdmFsaWRhdGUgbmFtZVxuICAgIGlmICghbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0TXVsdGlwbGV4IC0gbmFtZSBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3Vic3RyZWFtc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0TXVsdGlwbGV4IC0gU3Vic3RyZWFtIGZvciBuYW1lIFxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiIGFscmVhZHkgZXhpc3RzXCIpKTtcbiAgICB9IC8vIHNldFxuXG5cbiAgICB0aGlzLl9zdWJzdHJlYW1zW25hbWVdID0gSUdOT1JFX1NVQlNUUkVBTTtcbiAgfVxuXG4gIF9yZWFkKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgZGF0YVxuICAgIH0gPSBjaHVuaztcblxuICAgIGlmICghbmFtZSkge1xuICAgICAgd2luZG93LmNvbnNvbGUud2FybihcIk9iamVjdE11bHRpcGxleCAtIG1hbGZvcm1lZCBjaHVuayB3aXRob3V0IG5hbWUgXFxcIlwiLmNvbmNhdChjaHVuaywgXCJcXFwiXCIpKTtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0gLy8gZ2V0IGNvcnJlc3BvbmRpbmcgc3Vic3RyZWFtXG5cblxuICAgIGNvbnN0IHN1YnN0cmVhbSA9IHRoaXMuX3N1YnN0cmVhbXNbbmFtZV07XG5cbiAgICBpZiAoIXN1YnN0cmVhbSkge1xuICAgICAgd2luZG93LmNvbnNvbGUud2FybihcIk9iamVjdE11bHRpcGxleCAtIG9ycGhhbmVkIGRhdGEgZm9yIHN0cmVhbSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIlwiKSk7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9IC8vIHB1c2ggZGF0YSBpbnRvIHN1YnN0cmVhbVxuXG5cbiAgICBpZiAoc3Vic3RyZWFtICE9PSBJR05PUkVfU1VCU1RSRUFNKSB7XG4gICAgICBzdWJzdHJlYW0ucHVzaChkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuXG59IC8vIHV0aWxcblxuZnVuY3Rpb24gYW55U3RyZWFtRW5kKHN0cmVhbSwgX2NiKSB7XG4gIGNvbnN0IGNiID0gb25jZShfY2IpO1xuICBlb3Moc3RyZWFtLCB7XG4gICAgcmVhZGFibGU6IGZhbHNlXG4gIH0sIGNiKTtcbiAgZW9zKHN0cmVhbSwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9LCBjYik7XG59XG5cbmZ1bmN0aW9uIHNldHVwTXVsdGlwbGV4KHN0cmVhbSkge1xuICBjb25zdCBtdXggPSBuZXcgT2JqZWN0TXVsdGlwbGV4KCk7XG5cbiAgbXV4LmdldFN0cmVhbSA9IGZ1bmN0aW9uIHN0cmVhbUhlbHBlcihuYW1lKSB7XG4gICAgaWYgKHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzdHJlYW1zW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVN0cmVhbShuYW1lKTtcbiAgfTtcblxuICBwdW1wKHN0cmVhbSwgbXV4LCBzdHJlYW0sIGVyciA9PiB7XG4gICAgaWYgKGVycikgd2luZG93LmNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfSk7XG4gIHJldHVybiBtdXg7XG59XG5cbmNsYXNzIFBvc3RNZXNzYWdlU3RyZWFtIGV4dGVuZHMgQmFzZVBvc3RNZXNzYWdlU3RyZWFtIHtcbiAgX3Bvc3RNZXNzYWdlKGRhdGEpIHtcbiAgICBsZXQgb3JpZ2luQ29uc3RyYWludCA9IHRoaXMuX3RhcmdldE9yaWdpbjtcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3QgZGF0YU9iaiA9IGRhdGE7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YU9iai5kYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IGRhdGFPYmpEYXRhID0gZGF0YU9iai5kYXRhO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFPYmpEYXRhLnBhcmFtcykgJiYgZGF0YU9iakRhdGEucGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBkYXRhT2JqRGF0YVBhcmFtID0gZGF0YU9iakRhdGEucGFyYW1zWzBdO1xuXG4gICAgICAgICAgaWYgKGRhdGFPYmpEYXRhUGFyYW0uX29yaWdpbikge1xuICAgICAgICAgICAgb3JpZ2luQ29uc3RyYWludCA9IGRhdGFPYmpEYXRhUGFyYW0uX29yaWdpbjtcbiAgICAgICAgICB9IC8vIGFkZCBhIGNvbnN0cmFpbnQgZm9yIHRoZSByZXNwb25zZVxuXG5cbiAgICAgICAgICBkYXRhT2JqRGF0YVBhcmFtLl9vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fdGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgIHRhcmdldDogdGhpcy5fdGFyZ2V0LFxuICAgICAgZGF0YVxuICAgIH0sIG9yaWdpbkNvbnN0cmFpbnQpO1xuICB9XG5cbn1cblxuZXhwb3J0IHsgQmFzZVBvc3RNZXNzYWdlU3RyZWFtLCBJR05PUkVfU1VCU1RSRUFNLCBKUlBDRW5naW5lLCBPYmplY3RNdWx0aXBsZXgsIFBvc3RNZXNzYWdlU3RyZWFtLCBTYWZlRXZlbnRFbWl0dGVyLCBTZXJpYWxpemFibGVFcnJvciwgU3Vic3RyZWFtLCBjcmVhdGVBc3luY01pZGRsZXdhcmUsIGNyZWF0ZUVuZ2luZVN0cmVhbSwgY3JlYXRlRXJyb3JNaWRkbGV3YXJlLCBjcmVhdGVJZFJlbWFwTWlkZGxld2FyZSwgY3JlYXRlTG9nZ2VyTWlkZGxld2FyZSwgY3JlYXRlU2NhZmZvbGRNaWRkbGV3YXJlLCBjcmVhdGVTdHJlYW1NaWRkbGV3YXJlLCBnZXRScGNQcm9taXNlQ2FsbGJhY2ssIG1lcmdlTWlkZGxld2FyZSwgc2V0dXBNdWx0aXBsZXggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZW5sb2dpbkpycGMuZXNtLmpzLm1hcFxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgZnJvbSBcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0LmJpbmQoKTtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlRnVuY3Rpb24gZnJvbSBcIi4vaXNOYXRpdmVGdW5jdGlvbi5qc1wiO1xuaW1wb3J0IGNvbnN0cnVjdCBmcm9tIFwiLi9jb25zdHJ1Y3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCB7IGdlbmVyYXRlUHJpdmF0ZSwgZ2V0UHVibGljLCBkZWNyeXB0IH0gZnJvbSAnQHRvcnVzbGFicy9lY2NyeXB0byc7XG5pbXBvcnQgeyBwb3N0LCBnZW5lcmF0ZUpzb25SUENPYmplY3QsIGdldCwgc2V0QVBJS2V5LCBzZXRFbWJlZEhvc3QgfSBmcm9tICdAdG9ydXNsYWJzL2h0dHAtaGVscGVycyc7XG5pbXBvcnQgQk4gZnJvbSAnYm4uanMnO1xuaW1wb3J0IHsgZWMgfSBmcm9tICdlbGxpcHRpYyc7XG5pbXBvcnQgSnNvblN0cmluZ2lmeSBmcm9tICdqc29uLXN0YWJsZS1zdHJpbmdpZnknO1xuaW1wb3J0IHsgdG9DaGVja3N1bUFkZHJlc3MgfSBmcm9tICd3ZWIzLXV0aWxzJztcbmltcG9ydCBsb2dsZXZlbCBmcm9tICdsb2dsZXZlbCc7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0IF93cmFwTmF0aXZlU3VwZXIgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXInO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCBjcmVhdGVLZWNjYWtIYXNoIGZyb20gJ2tlY2Nhayc7XG5cbnZhciBsb2cgPSBsb2dsZXZlbC5nZXRMb2dnZXIoXCJ0b3J1cy5qc1wiKTtcbmxvZy5kaXNhYmxlQWxsKCk7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlciQxKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDEoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDEoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbnZhciBTb21lRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoU29tZUVycm9yLCBfRXJyb3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkMShTb21lRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFNvbWVFcnJvcihfcmVmKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIGVycm9ycyA9IF9yZWYuZXJyb3JzLFxuICAgICAgICByZXNwb25zZXMgPSBfcmVmLnJlc3BvbnNlcyxcbiAgICAgICAgcHJlZGljYXRlID0gX3JlZi5wcmVkaWNhdGU7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29tZUVycm9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJVbmFibGUgdG8gcmVzb2x2ZSBlbm91Z2ggcHJvbWlzZXMuXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImVycm9yc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlc3BvbnNlc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByZWRpY2F0ZVwiLCB2b2lkIDApO1xuXG4gICAgX3RoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIF90aGlzLnJlc3BvbnNlcyA9IHJlc3BvbnNlcztcbiAgICBfdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhTb21lRXJyb3IpO1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcbnZhciBTb21lID0gZnVuY3Rpb24gU29tZShwcm9taXNlcywgcHJlZGljYXRlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGZpbmlzaGVkQ291bnQgPSAwO1xuICAgIHZhciBzaGFyZWRTdGF0ZSA9IHtcbiAgICAgIHJlc29sdmVkOiBmYWxzZVxuICAgIH07XG4gICAgdmFyIGVycm9yQXJyID0gbmV3IEFycmF5KHByb21pc2VzLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpO1xuICAgIHZhciByZXN1bHRBcnIgPSBuZXcgQXJyYXkocHJvbWlzZXMubGVuZ3RoKS5maWxsKHVuZGVmaW5lZCk7XG4gICAgdmFyIHByZWRpY2F0ZUVycm9yO1xuICAgIHJldHVybiBwcm9taXNlcy5mb3JFYWNoKGZ1bmN0aW9uICh4LCBpbmRleCkge1xuICAgICAgcmV0dXJuIHgudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICByZXN1bHRBcnJbaW5kZXhdID0gcmVzcDtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBlcnJvckFycltpbmRleF0gPSBlcnJvcjtcbiAgICAgIH0pIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL25vLXJldHVybi1pbi1maW5hbGx5XG4gICAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaGFyZWRTdGF0ZS5yZXNvbHZlZCkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gcHJlZGljYXRlKHJlc3VsdEFyci5zbGljZSgwKSwgc2hhcmVkU3RhdGUpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBzaGFyZWRTdGF0ZS5yZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBsb2cgb25seSB0aGUgbGFzdCBwcmVkaWNhdGUgZXJyb3JcbiAgICAgICAgICBwcmVkaWNhdGVFcnJvciA9IGVycm9yO1xuICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmaW5pc2hlZENvdW50ICs9IDE7XG5cbiAgICAgICAgICBpZiAoZmluaXNoZWRDb3VudCA9PT0gcHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gT2JqZWN0LnZhbHVlcyhyZXN1bHRBcnIucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHopIHtcbiAgICAgICAgICAgICAgaWYgKHopIHtcbiAgICAgICAgICAgICAgICB2YXIgX2Vycm9yJGRhdGE7XG5cbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB6LmlkLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHouZXJyb3I7XG5cbiAgICAgICAgICAgICAgICBpZiAoKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2Vycm9yJGRhdGEgPSBlcnJvci5kYXRhKSA9PT0gbnVsbCB8fCBfZXJyb3IkZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Vycm9yJGRhdGEubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5kYXRhLnN0YXJ0c1dpdGgoXCJFcnJvciBvY2N1cnJlZCB3aGlsZSB2ZXJpZnlpbmcgcGFyYW1zXCIpKSBhY2NbaWRdID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGVycm9yLmRhdGEpO2Vsc2UgYWNjW2lkXSA9IGVycm9yLmRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KSk7XG5cbiAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAvLyBGb3JtYXQtYWJsZSBlcnJvcnNcbiAgICAgICAgICAgICAgdmFyIG1zZyA9IGVycm9ycy5sZW5ndGggPiAxID8gXCJcXG5cIi5jb25jYXQoZXJyb3JzLm1hcChmdW5jdGlvbiAoaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcXHUyMDIyIFwiLmNvbmNhdChpdCk7XG4gICAgICAgICAgICAgIH0pLmpvaW4oXCJcXG5cIikpIDogZXJyb3JzWzBdO1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKG1zZykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIF9wcmVkaWNhdGVFcnJvcjtcblxuICAgICAgICAgICAgICByZWplY3QobmV3IFNvbWVFcnJvcih7XG4gICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvckFycixcbiAgICAgICAgICAgICAgICByZXNwb25zZXM6IHJlc3VsdEFycixcbiAgICAgICAgICAgICAgICBwcmVkaWNhdGU6ICgoX3ByZWRpY2F0ZUVycm9yID0gcHJlZGljYXRlRXJyb3IpID09PSBudWxsIHx8IF9wcmVkaWNhdGVFcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ByZWRpY2F0ZUVycm9yLm1lc3NhZ2UpIHx8IHByZWRpY2F0ZUVycm9yXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBHZXRPclNldE5vbmNlRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoR2V0T3JTZXROb25jZUVycm9yLCBfRXJyb3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR2V0T3JTZXROb25jZUVycm9yKTtcblxuICBmdW5jdGlvbiBHZXRPclNldE5vbmNlRXJyb3IoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdldE9yU2V0Tm9uY2VFcnJvcik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKEdldE9yU2V0Tm9uY2VFcnJvcik7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xudmFyIGtDb21iaW5hdGlvbnMgPSBmdW5jdGlvbiBrQ29tYmluYXRpb25zKHMsIGspIHtcbiAgdmFyIHNldCA9IHM7XG5cbiAgaWYgKHR5cGVvZiBzZXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICBzZXQgPSBBcnJheS5mcm9tKHtcbiAgICAgIGxlbmd0aDogc2V0XG4gICAgfSwgZnVuY3Rpb24gKF8sIGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGsgPiBzZXQubGVuZ3RoIHx8IGsgPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmIChrID09PSBzZXQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtzZXRdO1xuICB9XG5cbiAgaWYgKGsgPT09IDEpIHtcbiAgICByZXR1cm4gc2V0LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXIpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFjYyksIFtbY3VyXV0pO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHZhciBjb21icyA9IFtdO1xuICB2YXIgdGFpbENvbWJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPD0gc2V0Lmxlbmd0aCAtIGsgKyAxOyBpICs9IDEpIHtcbiAgICB0YWlsQ29tYnMgPSBrQ29tYmluYXRpb25zKHNldC5zbGljZShpICsgMSksIGsgLSAxKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGFpbENvbWJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb21icy5wdXNoKFtzZXRbaV1dLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGFpbENvbWJzW2pdKSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21icztcbn07XG52YXIgdGhyZXNob2xkU2FtZSA9IGZ1bmN0aW9uIHRocmVzaG9sZFNhbWUoYXJyLCB0KSB7XG4gIHZhciBoYXNoTWFwID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgc3RyID0gSnNvblN0cmluZ2lmeShhcnJbaV0pO1xuICAgIGhhc2hNYXBbc3RyXSA9IGhhc2hNYXBbc3RyXSA/IGhhc2hNYXBbc3RyXSArIDEgOiAxO1xuXG4gICAgaWYgKGhhc2hNYXBbc3RyXSA9PT0gdCkge1xuICAgICAgcmV0dXJuIGFycltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbnZhciBrZXlMb29rdXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCkge1xuICAgIHZhciBsb29rdXBQcm9taXNlcztcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbG9va3VwUHJvbWlzZXMgPSBlbmRwb2ludHMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBwb3N0KHgsIGdlbmVyYXRlSnNvblJQQ09iamVjdChcIlZlcmlmaWVyTG9va3VwUmVxdWVzdFwiLCB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyLFxuICAgICAgICAgICAgICAgIHZlcmlmaWVyX2lkOiB2ZXJpZmllcklkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgfSkpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9nLmVycm9yKFwibG9va3VwIHJlcXVlc3QgZmFpbGVkXCIsIGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIFNvbWUobG9va3VwUHJvbWlzZXMsIGZ1bmN0aW9uIChsb29rdXBSZXN1bHRzKSB7XG4gICAgICAgICAgICAgIHZhciBsb29rdXBTaGFyZXMgPSBsb29rdXBSZXN1bHRzLmZpbHRlcihmdW5jdGlvbiAoeDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDE7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB2YXIgZXJyb3JSZXN1bHQgPSB0aHJlc2hvbGRTYW1lKGxvb2t1cFNoYXJlcy5tYXAoZnVuY3Rpb24gKHgyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgyICYmIHgyLmVycm9yO1xuICAgICAgICAgICAgICB9KSwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7XG4gICAgICAgICAgICAgIHZhciBrZXlSZXN1bHQgPSB0aHJlc2hvbGRTYW1lKGxvb2t1cFNoYXJlcy5tYXAoZnVuY3Rpb24gKHgzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgzICYmIHgzLnJlc3VsdDtcbiAgICAgICAgICAgICAgfSksIH5+KGVuZHBvaW50cy5sZW5ndGggLyAyKSArIDEpO1xuXG4gICAgICAgICAgICAgIGlmIChrZXlSZXN1bHQgfHwgZXJyb3JSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgIGtleVJlc3VsdDoga2V5UmVzdWx0LFxuICAgICAgICAgICAgICAgICAgZXJyb3JSZXN1bHQ6IGVycm9yUmVzdWx0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaW52YWxpZCByZXN1bHRzIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShsb29rdXBSZXN1bHRzKSkpKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24ga2V5TG9va3VwKF94LCBfeDIsIF94Mykge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG52YXIgd2FpdEtleUxvb2t1cCA9IGZ1bmN0aW9uIHdhaXRLZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCwgdGltZW91dCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAga2V5TG9va3VwKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfSk7XG59O1xudmFyIGtleUFzc2lnbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKF9yZWYyKSB7XG4gICAgdmFyIGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywgbGFzdFBvaW50LCBmaXJzdFBvaW50LCB2ZXJpZmllciwgdmVyaWZpZXJJZCwgc2lnbmVySG9zdCwgbmV0d29yaywgbm9kZU51bSwgaW5pdGlhbFBvaW50LCBkYXRhLCBzaWduZWREYXRhLCBhY2NlcHRlZEVycm9yTXNncztcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGVuZHBvaW50cyA9IF9yZWYyLmVuZHBvaW50cywgdG9ydXNOb2RlUHVicyA9IF9yZWYyLnRvcnVzTm9kZVB1YnMsIGxhc3RQb2ludCA9IF9yZWYyLmxhc3RQb2ludCwgZmlyc3RQb2ludCA9IF9yZWYyLmZpcnN0UG9pbnQsIHZlcmlmaWVyID0gX3JlZjIudmVyaWZpZXIsIHZlcmlmaWVySWQgPSBfcmVmMi52ZXJpZmllcklkLCBzaWduZXJIb3N0ID0gX3JlZjIuc2lnbmVySG9zdCwgbmV0d29yayA9IF9yZWYyLm5ldHdvcms7XG5cbiAgICAgICAgICAgIGlmIChsYXN0UG9pbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBub2RlTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW5kcG9pbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGluaXRpYWxQb2ludCA9IG5vZGVOdW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub2RlTnVtID0gbGFzdFBvaW50ICUgZW5kcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEobm9kZU51bSA9PT0gZmlyc3RQb2ludCkpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9vcGVkIHRocm91Z2ggYWxsXCIpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgaWYgKGZpcnN0UG9pbnQgIT09IHVuZGVmaW5lZCkgaW5pdGlhbFBvaW50ID0gZmlyc3RQb2ludDtcbiAgICAgICAgICAgIGRhdGEgPSBnZW5lcmF0ZUpzb25SUENPYmplY3QoXCJLZXlBc3NpZ25cIiwge1xuICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgIHZlcmlmaWVyX2lkOiB2ZXJpZmllcklkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSA2O1xuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA5O1xuICAgICAgICAgICAgcmV0dXJuIHBvc3Qoc2lnbmVySG9zdCwgZGF0YSwge1xuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgcHViS2V5WDogdG9ydXNOb2RlUHVic1tub2RlTnVtXS5YLFxuICAgICAgICAgICAgICAgIHB1YktleVk6IHRvcnVzTm9kZVB1YnNbbm9kZU51bV0uWSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrOiBuZXR3b3JrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHNpZ25lZERhdGEgPSBfY29udGV4dDIuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTI7XG4gICAgICAgICAgICByZXR1cm4gcG9zdChlbmRwb2ludHNbbm9kZU51bV0sIF9vYmplY3RTcHJlYWQkMShfb2JqZWN0U3ByZWFkJDEoe30sIGRhdGEpLCBzaWduZWREYXRhKSwge1xuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQyLnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMTU7XG4gICAgICAgICAgICBfY29udGV4dDIudDAgPSBfY29udGV4dDJbXCJjYXRjaFwiXSg2KTtcbiAgICAgICAgICAgIGxvZy5lcnJvcihfY29udGV4dDIudDApO1xuICAgICAgICAgICAgYWNjZXB0ZWRFcnJvck1zZ3MgPSBbLy8gU2xvdyBub2RlXG4gICAgICAgICAgICBcIlRpbWVkIG91dFwiLCAvLyBIYXBwZW5zIHdoZW4gdGhlIG5vZGUgaXMgbm90IHJlYWNoYWJsZSAoZG5zIGlzc3VlIGV0YylcbiAgICAgICAgICAgIFwiVHlwZUVycm9yOiBGYWlsZWQgdG8gZmV0Y2hcIiwgXCJUeXBlRXJyb3I6IGNhbmNlbGxlZFwiLCBcIlR5cGVFcnJvcjogTmV0d29ya0Vycm9yIHdoZW4gYXR0ZW1wdGluZyB0byBmZXRjaCByZXNvdXJjZS5cIiAvLyBGaXJlZm94XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBpZiAoIWFjY2VwdGVkRXJyb3JNc2dzLmluY2x1ZGVzKF9jb250ZXh0Mi50MC5tZXNzYWdlKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDIxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwga2V5QXNzaWduKHtcbiAgICAgICAgICAgICAgZW5kcG9pbnRzOiBlbmRwb2ludHMsXG4gICAgICAgICAgICAgIHRvcnVzTm9kZVB1YnM6IHRvcnVzTm9kZVB1YnMsXG4gICAgICAgICAgICAgIGxhc3RQb2ludDogbm9kZU51bSArIDEsXG4gICAgICAgICAgICAgIGZpcnN0UG9pbnQ6IGluaXRpYWxQb2ludCxcbiAgICAgICAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyLFxuICAgICAgICAgICAgICB2ZXJpZmllcklkOiB2ZXJpZmllcklkLFxuICAgICAgICAgICAgICBzaWduZXJIb3N0OiBzaWduZXJIb3N0LFxuICAgICAgICAgICAgICBuZXR3b3JrOiBuZXR3b3JrXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29ycnksIHRoZSBUb3J1cyBOZXR3b3JrIHRoYXQgcG93ZXJzIFdlYjNBdXRoIGlzIGN1cnJlbnRseSB2ZXJ5IGJ1c3kuXFxuICAgIFdlIHdpbGwgZ2VuZXJhdGUgeW91ciBrZXkgaW4gdGltZS4gUGxzIHRyeSBhZ2FpbiBsYXRlci4gXFxuXFxuICAgIFwiLmNvbmNhdChfY29udGV4dDIudDAubWVzc2FnZSB8fCBcIlwiKSk7XG5cbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIsIG51bGwsIFtbNiwgMTVdXSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24ga2V5QXNzaWduKF94NCkge1xuICAgIHJldHVybiBfcmVmMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuZnVuY3Rpb24ga2VjY2FrMjU2KGEpIHtcbiAgdmFyIGhhc2ggPSBjcmVhdGVLZWNjYWtIYXNoKFwia2VjY2FrMjU2XCIpLnVwZGF0ZShhKS5kaWdlc3QoKS50b1N0cmluZyhcImhleFwiKTtcbiAgcmV0dXJuIFwiMHhcIi5jb25jYXQoaGFzaCk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG4vLyBvZiBUb3J1cyBub2RlcyB0byBoYW5kbGUgbWFsaWNpb3VzIG5vZGUgcmVzcG9uc2VzXG5cbnZhciBUb3J1cyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRvcnVzKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgX3JlZiRlbmFibGVPbmVLZXkgPSBfcmVmLmVuYWJsZU9uZUtleSxcbiAgICAgICAgZW5hYmxlT25lS2V5ID0gX3JlZiRlbmFibGVPbmVLZXkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRlbmFibGVPbmVLZXksXG4gICAgICAgIF9yZWYkbWV0YWRhdGFIb3N0ID0gX3JlZi5tZXRhZGF0YUhvc3QsXG4gICAgICAgIG1ldGFkYXRhSG9zdCA9IF9yZWYkbWV0YWRhdGFIb3N0ID09PSB2b2lkIDAgPyBcImh0dHBzOi8vbWV0YWRhdGEudG9yLnVzXCIgOiBfcmVmJG1ldGFkYXRhSG9zdCxcbiAgICAgICAgX3JlZiRhbGxvd0hvc3QgPSBfcmVmLmFsbG93SG9zdCxcbiAgICAgICAgYWxsb3dIb3N0ID0gX3JlZiRhbGxvd0hvc3QgPT09IHZvaWQgMCA/IFwiaHR0cHM6Ly9zaWduZXIudG9yLnVzL2FwaS9hbGxvd1wiIDogX3JlZiRhbGxvd0hvc3QsXG4gICAgICAgIF9yZWYkc2lnbmVySG9zdCA9IF9yZWYuc2lnbmVySG9zdCxcbiAgICAgICAgc2lnbmVySG9zdCA9IF9yZWYkc2lnbmVySG9zdCA9PT0gdm9pZCAwID8gXCJodHRwczovL3NpZ25lci50b3IudXMvYXBpL3NpZ25cIiA6IF9yZWYkc2lnbmVySG9zdCxcbiAgICAgICAgX3JlZiRzZXJ2ZXJUaW1lT2Zmc2V0ID0gX3JlZi5zZXJ2ZXJUaW1lT2Zmc2V0LFxuICAgICAgICBzZXJ2ZXJUaW1lT2Zmc2V0ID0gX3JlZiRzZXJ2ZXJUaW1lT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX3JlZiRzZXJ2ZXJUaW1lT2Zmc2V0LFxuICAgICAgICBfcmVmJG5ldHdvcmsgPSBfcmVmLm5ldHdvcmssXG4gICAgICAgIG5ldHdvcmsgPSBfcmVmJG5ldHdvcmsgPT09IHZvaWQgMCA/IFwibWFpbm5ldFwiIDogX3JlZiRuZXR3b3JrO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvcnVzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhSG9zdFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxsb3dIb3N0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZXJ2ZXJUaW1lT2Zmc2V0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmFibGVPbmVLZXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNpZ25lckhvc3RcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5ldHdvcmtcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVjXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLmVjID0gbmV3IGVjKFwic2VjcDI1NmsxXCIpO1xuICAgIHRoaXMubWV0YWRhdGFIb3N0ID0gbWV0YWRhdGFIb3N0O1xuICAgIHRoaXMuYWxsb3dIb3N0ID0gYWxsb3dIb3N0O1xuICAgIHRoaXMuZW5hYmxlT25lS2V5ID0gZW5hYmxlT25lS2V5O1xuICAgIHRoaXMuc2VydmVyVGltZU9mZnNldCA9IHNlcnZlclRpbWVPZmZzZXQgfHwgMDsgLy8gbXNcblxuICAgIHRoaXMuc2lnbmVySG9zdCA9IHNpZ25lckhvc3Q7XG4gICAgdGhpcy5uZXR3b3JrID0gbmV0d29yaztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUb3J1cywgW3tcbiAgICBrZXk6IFwiZ2V0VXNlclR5cGVBbmRBZGRyZXNzXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogTm90ZTogdXNlIHRoaXMgZnVuY3Rpb24gb25seSBmb3Igb3BlbmxvZ2luIHRrZXkgYWNjb3VudCBsb29rdXBzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0VXNlclR5cGVBbmRBZGRyZXNzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIF9yZWYyKSB7XG4gICAgICAgIHZhciB2ZXJpZmllcixcbiAgICAgICAgICAgIHZlcmlmaWVySWQsXG4gICAgICAgICAgICBkb2VzS2V5QXNzaWduLFxuICAgICAgICAgICAgX3JlZjMsXG4gICAgICAgICAgICBrZXlSZXN1bHQsXG4gICAgICAgICAgICBlcnJvclJlc3VsdCxcbiAgICAgICAgICAgIGlzTmV3S2V5LFxuICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQsXG4gICAgICAgICAgICBhc3NpZ25SZXN1bHQsXG4gICAgICAgICAgICBfZmluYWxLZXlSZXN1bHQka2V5cyQsXG4gICAgICAgICAgICBYLFxuICAgICAgICAgICAgWSxcbiAgICAgICAgICAgIG5vbmNlUmVzdWx0LFxuICAgICAgICAgICAgbm9uY2UsXG4gICAgICAgICAgICBtb2RpZmllZFB1YktleSxcbiAgICAgICAgICAgIGZpbmFsWCxcbiAgICAgICAgICAgIGZpbmFsWSxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBfYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHZlcmlmaWVyID0gX3JlZjIudmVyaWZpZXIsIHZlcmlmaWVySWQgPSBfcmVmMi52ZXJpZmllcklkO1xuICAgICAgICAgICAgICAgIGRvZXNLZXlBc3NpZ24gPSBfYXJncy5sZW5ndGggPiAzICYmIF9hcmdzWzNdICE9PSB1bmRlZmluZWQgPyBfYXJnc1szXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICAgIGlmIChfY29udGV4dC50MCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IHt9O1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBfcmVmMyA9IF9jb250ZXh0LnQwO1xuICAgICAgICAgICAgICAgIGtleVJlc3VsdCA9IF9yZWYzLmtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IF9yZWYzLmVycm9yUmVzdWx0O1xuICAgICAgICAgICAgICAgIGlzTmV3S2V5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShlcnJvclJlc3VsdCAmJiBKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCkuaW5jbHVkZXMoXCJWZXJpZmllciArIFZlcmlmaWVySUQgaGFzIG5vdCB5ZXQgYmVlbiBhc3NpZ25lZFwiKSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkb2VzS2V5QXNzaWduKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWZXJpZmllciArIFZlcmlmaWVySUQgaGFzIG5vdCB5ZXQgYmVlbiBhc3NpZ25lZFwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNjtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5QXNzaWduKHtcbiAgICAgICAgICAgICAgICAgIGVuZHBvaW50czogZW5kcG9pbnRzLFxuICAgICAgICAgICAgICAgICAgdG9ydXNOb2RlUHViczogdG9ydXNOb2RlUHVicyxcbiAgICAgICAgICAgICAgICAgIGxhc3RQb2ludDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgZmlyc3RQb2ludDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyLFxuICAgICAgICAgICAgICAgICAgdmVyaWZpZXJJZDogdmVyaWZpZXJJZCxcbiAgICAgICAgICAgICAgICAgIHNpZ25lckhvc3Q6IHRoaXMuc2lnbmVySG9zdCxcbiAgICAgICAgICAgICAgICAgIG5ldHdvcms6IHRoaXMubmV0d29ya1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE4O1xuICAgICAgICAgICAgICAgIHJldHVybiB3YWl0S2V5TG9va3VwKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQsIDEwMDApO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgYXNzaWduUmVzdWx0ID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdCA9IGFzc2lnblJlc3VsdCA9PT0gbnVsbCB8fCBhc3NpZ25SZXN1bHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFzc2lnblJlc3VsdC5rZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyODtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICAgIGlmICgha2V5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdCA9IGtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpcnN0IGxvb2t1cCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5UmVzdWx0IHx8IHt9KSwgXCIsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQgfHwge30pKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmFsS2V5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTg7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfZmluYWxLZXlSZXN1bHQka2V5cyQgPSBmaW5hbEtleVJlc3VsdC5rZXlzWzBdLCBYID0gX2ZpbmFsS2V5UmVzdWx0JGtleXMkLnB1Yl9rZXlfWCwgWSA9IF9maW5hbEtleVJlc3VsdCRrZXlzJC5wdWJfa2V5X1k7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDMwO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPclNldE5vbmNlKFgsIFksIHVuZGVmaW5lZCwgIWlzTmV3S2V5KTtcblxuICAgICAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgICAgIG5vbmNlUmVzdWx0ID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBub25jZSA9IG5ldyBCTihub25jZVJlc3VsdC5ub25jZSB8fCBcIjBcIiwgMTYpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAzNztcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MSA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMzApO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHZXRPclNldE5vbmNlRXJyb3IoKTtcblxuICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjFcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0NDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgIHg6IFgsXG4gICAgICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVByaXZhdGUobm9uY2UudG9TdHJpbmcoMTYpKS5nZXRQdWJsaWMoKSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgaWYgKCEobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MlwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ4O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgIHk6IFlcbiAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgIHg6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLngsXG4gICAgICAgICAgICAgICAgICB5OiBub25jZVJlc3VsdC5wdWJOb25jZS55XG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0OTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldE9yU2V0Tm9uY2Ugc2hvdWxkIGFsd2F5cyByZXR1cm4gdHlwZU9mVXNlci5cIik7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OTpcbiAgICAgICAgICAgICAgICBmaW5hbFggPSBtb2RpZmllZFB1YktleS5nZXRYKCkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgIGZpbmFsWSA9IG1vZGlmaWVkUHViS2V5LmdldFkoKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA9IHRoaXMuZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleShtb2RpZmllZFB1YktleS5nZXRYKCksIG1vZGlmaWVkUHViS2V5LmdldFkoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShub25jZVJlc3VsdC50eXBlT2ZVc2VyID09PSBcInYxXCIpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTY7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgICAgIHR5cGVPZlVzZXI6IG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIsXG4gICAgICAgICAgICAgICAgICBub25jZTogbm9uY2UsXG4gICAgICAgICAgICAgICAgICBYOiBmaW5hbFgsXG4gICAgICAgICAgICAgICAgICBZOiBmaW5hbFksXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA1NjpcbiAgICAgICAgICAgICAgICBpZiAoIShub25jZVJlc3VsdC50eXBlT2ZVc2VyID09PSBcInYyXCIpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTg7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgICAgIHR5cGVPZlVzZXI6IG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIsXG4gICAgICAgICAgICAgICAgICBub25jZTogbm9uY2UsXG4gICAgICAgICAgICAgICAgICBwdWJOb25jZTogbm9uY2VSZXN1bHQucHViTm9uY2UsXG4gICAgICAgICAgICAgICAgICB1cGdyYWRlZDogbm9uY2VSZXN1bHQudXBncmFkZWQsXG4gICAgICAgICAgICAgICAgICBYOiBmaW5hbFgsXG4gICAgICAgICAgICAgICAgICBZOiBmaW5hbFksXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpbmFsIGxvb2t1cCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5UmVzdWx0IHx8IHt9KSwgXCIsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQgfHwge30pKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzLCBbWzMwLCAzN11dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0VXNlclR5cGVBbmRBZGRyZXNzKF94LCBfeDIsIF94Mykge1xuICAgICAgICByZXR1cm4gX2dldFVzZXJUeXBlQW5kQWRkcmVzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0VXNlclR5cGVBbmRBZGRyZXNzO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcInNldEN1c3RvbUtleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3NldEN1c3RvbUtleSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKF9yZWY0KSB7XG4gICAgICAgIHZhciBwcml2S2V5SGV4LCBtZXRhZGF0YU5vbmNlLCB0b3J1c0tleUhleCwgY3VzdG9tS2V5SGV4LCB0b3J1c0tleSwgcHJpdktleSwgY3VzdG9tS2V5LCBuZXdNZXRhZGF0YU5vbmNlLCBkYXRhO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBwcml2S2V5SGV4ID0gX3JlZjQucHJpdktleUhleCwgbWV0YWRhdGFOb25jZSA9IF9yZWY0Lm1ldGFkYXRhTm9uY2UsIHRvcnVzS2V5SGV4ID0gX3JlZjQudG9ydXNLZXlIZXgsIGN1c3RvbUtleUhleCA9IF9yZWY0LmN1c3RvbUtleUhleDtcblxuICAgICAgICAgICAgICAgIGlmICh0b3J1c0tleUhleCkge1xuICAgICAgICAgICAgICAgICAgdG9ydXNLZXkgPSBuZXcgQk4odG9ydXNLZXlIZXgsIDE2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcHJpdktleSA9IG5ldyBCTihwcml2S2V5SGV4LCAxNik7XG4gICAgICAgICAgICAgICAgICB0b3J1c0tleSA9IHByaXZLZXkuc3ViKG1ldGFkYXRhTm9uY2UpLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXN0b21LZXkgPSBuZXcgQk4oY3VzdG9tS2V5SGV4LCAxNik7XG4gICAgICAgICAgICAgICAgbmV3TWV0YWRhdGFOb25jZSA9IGN1c3RvbUtleS5zdWIodG9ydXNLZXkpLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nZW5lcmF0ZU1ldGFkYXRhUGFyYW1zKG5ld01ldGFkYXRhTm9uY2UudG9TdHJpbmcoMTYpLCB0b3J1c0tleSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldE1ldGFkYXRhKGRhdGEpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBzZXRDdXN0b21LZXkoX3g0KSB7XG4gICAgICAgIHJldHVybiBfc2V0Q3VzdG9tS2V5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXRDdXN0b21LZXk7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwicmV0cmlldmVTaGFyZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZXRyaWV2ZVNoYXJlcyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1KGVuZHBvaW50cywgaW5kZXhlcywgdmVyaWZpZXIsIHZlcmlmaWVyUGFyYW1zLCBpZFRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV4dHJhUGFyYW1zLFxuICAgICAgICAgICAgcHJvbWlzZUFycixcbiAgICAgICAgICAgIHRtcEtleSxcbiAgICAgICAgICAgIHB1YktleSxcbiAgICAgICAgICAgIHB1YktleVgsXG4gICAgICAgICAgICBwdWJLZXlZLFxuICAgICAgICAgICAgdG9rZW5Db21taXRtZW50LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHAsXG4gICAgICAgICAgICBfYXJnczUgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTUkKF9jb250ZXh0NSkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NS5wcmV2ID0gX2NvbnRleHQ1Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV4dHJhUGFyYW1zID0gX2FyZ3M1Lmxlbmd0aCA+IDUgJiYgX2FyZ3M1WzVdICE9PSB1bmRlZmluZWQgPyBfYXJnczVbNV0gOiB7fTtcbiAgICAgICAgICAgICAgICBwcm9taXNlQXJyID0gW107XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXQodGhpcy5hbGxvd0hvc3QsIHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyLFxuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcl9pZDogdmVyaWZpZXJQYXJhbXMudmVyaWZpZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcms6IHRoaXMubmV0d29ya1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgQ29tbWl0bWVudFJlcXVlc3RQYXJhbXMgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVByZWZpeCAgICAgIHN0cmluZyBganNvbjpcIm1lc3NhZ2VwcmVmaXhcImBcbiAgICAgICAgICAgICAgICAgICAgVG9rZW5Db21taXRtZW50ICAgIHN0cmluZyBganNvbjpcInRva2VuY29tbWl0bWVudFwiYFxuICAgICAgICAgICAgICAgICAgICBUZW1wUHViWCAgICAgICAgICAgc3RyaW5nIGBqc29uOlwidGVtcHB1YnhcImBcbiAgICAgICAgICAgICAgICAgICAgVGVtcFB1YlkgICAgICAgICAgIHN0cmluZyBganNvbjpcInRlbXBwdWJ5XCJgXG4gICAgICAgICAgICAgICAgICAgIFZlcmlmaWVySWRlbnRpZmllciBzdHJpbmcgYGpzb246XCJ2ZXJpZmllcmlkZW50aWZpZXJcImBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gZ2VuZXJhdGUgdGVtcG9yYXJ5IHByaXZhdGUgYW5kIHB1YmxpYyBrZXkgdGhhdCBpcyB1c2VkIHRvIHNlY3VyZSByZWNlaXZlIHNoYXJlc1xuICAgICAgICAgICAgICAgIHRtcEtleSA9IGdlbmVyYXRlUHJpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIHB1YktleSA9IGdldFB1YmxpYyh0bXBLZXkpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICAgICAgICAgIHB1YktleVggPSBwdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgICAgICAgICAgIHB1YktleVkgPSBwdWJLZXkuc2xpY2UoNjYpO1xuICAgICAgICAgICAgICAgIHRva2VuQ29tbWl0bWVudCA9IGtlY2NhazI1NihpZFRva2VuKTsgLy8gbWFrZSBjb21taXRtZW50IHJlcXVlc3RzIHRvIGVuZHBvaW50c1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgcCA9IHBvc3QoZW5kcG9pbnRzW2ldLCBnZW5lcmF0ZUpzb25SUENPYmplY3QoXCJDb21taXRtZW50UmVxdWVzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VwcmVmaXg6IFwibXVnMDBcIixcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5jb21taXRtZW50OiB0b2tlbkNvbW1pdG1lbnQuc2xpY2UoMiksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBwdWJ4OiBwdWJLZXlYLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wcHVieTogcHViS2V5WSxcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZpZXJpZGVudGlmaWVyOiB2ZXJpZmllclxuICAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiY29tbWl0bWVudFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBwcm9taXNlQXJyLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICBTaGFyZVJlcXVlc3RQYXJhbXMgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgSXRlbSBbXWJpanNvbi5SYXdNZXNzYWdlIGBqc29uOlwiaXRlbVwiYFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgU2hhcmVSZXF1ZXN0SXRlbSBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBJRFRva2VuICAgICAgICAgICAgc3RyaW5nICAgICAgICAgIGBqc29uOlwiaWR0b2tlblwiYFxuICAgICAgICAgICAgICAgICAgICBOb2RlU2lnbmF0dXJlcyAgICAgW11Ob2RlU2lnbmF0dXJlIGBqc29uOlwibm9kZXNpZ25hdHVyZXNcImBcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpZXJJZGVudGlmaWVyIHN0cmluZyAgICAgICAgICBganNvbjpcInZlcmlmaWVyaWRlbnRpZmllclwiYFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgTm9kZVNpZ25hdHVyZSBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBTaWduYXR1cmUgICBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgRGF0YSAgICAgICAgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIE5vZGVQdWJLZXlYIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBOb2RlUHViS2V5WSBzdHJpbmdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIENvbW1pdG1lbnRSZXF1ZXN0UmVzdWx0IHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIFNpZ25hdHVyZSBzdHJpbmcgYGpzb246XCJzaWduYXR1cmVcImBcbiAgICAgICAgICAgICAgICAgICAgRGF0YSAgICAgIHN0cmluZyBganNvbjpcImRhdGFcImBcbiAgICAgICAgICAgICAgICAgICAgTm9kZVB1YlggIHN0cmluZyBganNvbjpcIm5vZGVwdWJ4XCJgXG4gICAgICAgICAgICAgICAgICAgIE5vZGVQdWJZICBzdHJpbmcgYGpzb246XCJub2RlcHVieVwiYFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAvLyBzZW5kIHNoYXJlIHJlcXVlc3Qgb25jZSBrICsgdCBudW1iZXIgb2YgY29tbWl0bWVudCByZXF1ZXN0cyBoYXZlIGNvbXBsZXRlZFxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiLCBTb21lKHByb21pc2VBcnIsIGZ1bmN0aW9uIChyZXN1bHRBcnIpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZWRSZXF1ZXN0cyA9IHJlc3VsdEFyci5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF4IHx8IF90eXBlb2YoeCkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoeC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWRSZXF1ZXN0cy5sZW5ndGggPj0gfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDQpICogMyArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHRBcnIpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaW52YWxpZCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocmVzdWx0QXJyKSkpKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZXMpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlQXJyUmVxdWVzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgdmFyIG5vZGVTaWdzID0gW107XG5cbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCByZXNwb25zZXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZXNbX2ldKSBub2RlU2lncy5wdXNoKHJlc3BvbnNlc1tfaV0ucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgZW5kcG9pbnRzLmxlbmd0aDsgX2kyICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tbmVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3AgPSBwb3N0KGVuZHBvaW50c1tfaTJdLCBnZW5lcmF0ZUpzb25SUENPYmplY3QoXCJTaGFyZVJlcXVlc3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZDogXCJ5ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBbX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2ZXJpZmllclBhcmFtcyksIHt9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHRva2VuOiBpZFRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNpZ25hdHVyZXM6IG5vZGVTaWdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZpZXJpZGVudGlmaWVyOiB2ZXJpZmllclxuICAgICAgICAgICAgICAgICAgICAgIH0sIGV4dHJhUGFyYW1zKV1cbiAgICAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9nLmVycm9yKFwic2hhcmUgcmVxXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VBcnJSZXF1ZXN0LnB1c2goX3ApO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gU29tZShwcm9taXNlQXJyUmVxdWVzdCwgLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWY1ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMoc2hhcmVSZXNwb25zZXMsIHNoYXJlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlZFJlcXVlc3RzLCB0aHJlc2hvbGRQdWJsaWNLZXksIHNoYXJlUHJvbWlzZXMsIG5vZGVJbmRleGVzLCBfaTMsIF9jdXJyZW50U2hhcmVSZXNwb25zZSwgX2N1cnJlbnRTaGFyZVJlc3BvbnNlMiwgY3VycmVudFNoYXJlUmVzcG9uc2UsIGZpcnN0S2V5LCBtZXRhZGF0YSwgc2hhcmVzUmVzb2x2ZWQsIGRlY3J5cHRlZFNoYXJlcywgYWxsQ29tYmlzLCBwcml2YXRlS2V5LCBfbG9vcCwgaiwgX3JldDtcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGFyZVJlcXVlc3RSZXN1bHQgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtleXMgW11LZXlBc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyBLZXlBc3NpZ25tZW50UHVibGljIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlIEtleUFzc2lnbm1lbnRQdWJsaWMgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4ICAgICBiaWcuSW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdWJsaWNLZXkgY29tbW9uLlBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHJlc2hvbGQgaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJpZmllcnMgbWFwW3N0cmluZ11bXXN0cmluZyAvLyBWZXJpZmllciA9PiBWZXJpZmllcklEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBLZXlBc3NpZ25tZW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlIEtleUFzc2lnbm1lbnQgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtleUFzc2lnbm1lbnRQdWJsaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNoYXJlIGJpZy5JbnQgLy8gT3IgU2lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aHJlc2hvbGQgbnVtYmVyIG9mIG5vZGVzIGhhdmUgcmV0dXJuZWQgdGhlIHNhbWUgdXNlciBwdWJsaWMga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRSZXF1ZXN0cyA9IHNoYXJlUmVzcG9uc2VzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkUHVibGljS2V5ID0gdGhyZXNob2xkU2FtZShzaGFyZVJlc3BvbnNlcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHggJiYgeC5yZXN1bHQgJiYgeC5yZXN1bHQua2V5c1swXS5QdWJsaWNLZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7IC8vIG9wdGltaXN0aWNhbGx5IHJ1biBsYWdyYW5nZSBpbnRlcnBvbGF0aW9uIG9uY2UgdGhyZXNob2xkIG51bWJlciBvZiBzaGFyZXMgaGF2ZSBiZWVuIHJlY2VpdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIG1hdGNoZWQgYWdhaW5zdCB0aGUgdXNlciBwdWJsaWMga2V5IHRvIGVuc3VyZSB0aGF0IHNoYXJlcyBhcmUgY29uc2lzdGVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShjb21wbGV0ZWRSZXF1ZXN0cy5sZW5ndGggPj0gfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSAmJiB0aHJlc2hvbGRQdWJsaWNLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVByb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5kZXhlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9pMyA9IDA7IF9pMyA8IHNoYXJlUmVzcG9uc2VzLmxlbmd0aDsgX2kzICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoYXJlUmVzcG9uc2UgPSBzaGFyZVJlc3BvbnNlc1tfaTNdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFNoYXJlUmVzcG9uc2UgPT09IG51bGwgfHwgY3VycmVudFNoYXJlUmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfY3VycmVudFNoYXJlUmVzcG9uc2UgPSBjdXJyZW50U2hhcmVSZXNwb25zZS5yZXN1bHQpID09PSBudWxsIHx8IF9jdXJyZW50U2hhcmVSZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9jdXJyZW50U2hhcmVSZXNwb25zZTIgPSBfY3VycmVudFNoYXJlUmVzcG9uc2Uua2V5cykgPT09IG51bGwgfHwgX2N1cnJlbnRTaGFyZVJlc3BvbnNlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2N1cnJlbnRTaGFyZVJlc3BvbnNlMi5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGFyZVJlc3BvbnNlLnJlc3VsdC5rZXlzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk4oYS5JbmRleCwgMTYpLmNtcChuZXcgQk4oYi5JbmRleCwgMTYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEtleSA9IGN1cnJlbnRTaGFyZVJlc3BvbnNlLnJlc3VsdC5rZXlzWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0S2V5Lk1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXBoZW1QdWJsaWNLZXk6IEJ1ZmZlci5mcm9tKGZpcnN0S2V5Lk1ldGFkYXRhLmVwaGVtUHVibGljS2V5LCBcImhleFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXY6IEJ1ZmZlci5mcm9tKGZpcnN0S2V5Lk1ldGFkYXRhLml2LCBcImhleFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFjOiBCdWZmZXIuZnJvbShmaXJzdEtleS5NZXRhZGF0YS5tYWMsIFwiaGV4XCIpIC8vIG1vZGU6IEJ1ZmZlci5mcm9tKGZpcnN0S2V5Lk1ldGFkYXRhLm1vZGUsIFwiaGV4XCIpLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVQcm9taXNlcy5wdXNoKCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9uby1uZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0KHRtcEtleSwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtZXRhZGF0YSksIHt9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcGhlcnRleHQ6IEJ1ZmZlci5mcm9tKEJ1ZmZlci5mcm9tKGZpcnN0S2V5LlNoYXJlLCBcImJhc2U2NFwiKS50b1N0cmluZyhcImJpbmFyeVwiKS5wYWRTdGFydCg2NCwgXCIwXCIpLCBcImhleFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZy5kZWJ1ZyhcInNoYXJlIGRlY3J5cHRpb25cIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVQcm9taXNlcy5wdXNoKFByb21pc2UucmVzb2x2ZShCdWZmZXIuZnJvbShmaXJzdEtleS5TaGFyZS5wYWRTdGFydCg2NCwgXCIwXCIpLCBcImhleFwiKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUluZGV4ZXMucHVzaChuZXcgQk4oaW5kZXhlc1tfaTNdLCAxNikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc2hhcmVQcm9taXNlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZXNSZXNvbHZlZCA9IF9jb250ZXh0My5zZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlZFN0YXRlLnJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFNoYXJlcyA9IHNoYXJlc1Jlc29sdmVkLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycikgYWNjLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBCTihjdXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKTsgLy8gcnVuIGxhZ3JhbmdlIGludGVycG9sYXRpb24gb24gYWxsIHN1YnNldHMsIGZhc3RlciBpbiB0aGUgb3B0aW1pc3RpYyBzY2VuYXJpbyB0aGFuIGJlcmxla2FtcC13ZWxjaCBkdWUgdG8gZWFybHkgZXhpdFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBydW4gbGFncmFuZ2UgaW50ZXJwb2xhdGlvbiBvbiBhbGwgc3Vic2V0cywgZmFzdGVyIGluIHRoZSBvcHRpbWlzdGljIHNjZW5hcmlvIHRoYW4gYmVybGVrYW1wLXdlbGNoIGR1ZSB0byBlYXJseSBleGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxDb21iaXMgPSBrQ29tYmluYXRpb25zKGRlY3J5cHRlZFNoYXJlcy5sZW5ndGgsIH5+KGVuZHBvaW50cy5sZW5ndGggLyAyKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZUtleSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudENvbWJpID0gYWxsQ29tYmlzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudENvbWJpU2hhcmVzID0gZGVjcnlwdGVkU2hhcmVzLmZpbHRlcihmdW5jdGlvbiAodiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudENvbWJpLmluY2x1ZGVzKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFyZXMgPSBjdXJyZW50Q29tYmlTaGFyZXMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kaWNlcyA9IGN1cnJlbnRDb21iaVNoYXJlcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geC5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlcml2ZWRQcml2YXRlS2V5ID0gX3RoaXMubGFncmFuZ2VJbnRlcnBvbGF0aW9uKHNoYXJlcywgaW5kaWNlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXJpdmVkUHJpdmF0ZUtleSkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY3J5cHRlZFB1YktleSA9IGdldFB1YmxpYyhCdWZmZXIuZnJvbShkZXJpdmVkUHJpdmF0ZUtleS50b1N0cmluZygxNiwgNjQpLCBcImhleFwiKSkudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNyeXB0ZWRQdWJLZXlYID0gZGVjcnlwdGVkUHViS2V5LnNsaWNlKDIsIDY2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY3J5cHRlZFB1YktleVkgPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoNjYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXcgQk4oZGVjcnlwdGVkUHViS2V5WCwgMTYpLmNtcChuZXcgQk4odGhyZXNob2xkUHVibGljS2V5LlgsIDE2KSkgPT09IDAgJiYgbmV3IEJOKGRlY3J5cHRlZFB1YktleVksIDE2KS5jbXAobmV3IEJOKHRocmVzaG9sZFB1YmxpY0tleS5ZLCAxNikpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZUtleSA9IGRlcml2ZWRQcml2YXRlS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGogPCBhbGxDb21iaXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JldCA9IF9sb29wKGopO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfcmV0ID09PSBcImNvbnRpbnVlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcImNvbnRpbnVlXCIsIDIyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfcmV0ID09PSBcImJyZWFrXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcImJyZWFrXCIsIDI1KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocHJpdmF0ZUtleSA9PT0gdW5kZWZpbmVkIHx8IHByaXZhdGVLZXkgPT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZGVyaXZlIHByaXZhdGUga2V5XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwicmV0dXJuXCIsIHByaXZhdGVLZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZTMpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeDEwLCBfeDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgX3JlZjYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNChyZXR1cm5lZEtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSwgZGVjcnlwdGVkUHViS2V5LCBkZWNyeXB0ZWRQdWJLZXlYLCBkZWNyeXB0ZWRQdWJLZXlZLCBtZXRhZGF0YU5vbmNlLCBfeWllbGQkX3RoaXMkZ2V0Tm9uY2UsIG5vbmNlLCBldGhBZGRyZXNzO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQkKF9jb250ZXh0NCkge1xuICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVLZXkgPSByZXR1cm5lZEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcml2YXRlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHByaXZhdGUga2V5IHJldHVybmVkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRQdWJLZXkgPSBnZXRQdWJsaWMoQnVmZmVyLmZyb20ocHJpdmF0ZUtleS50b1N0cmluZygxNiwgNjQpLCBcImhleFwiKSkudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcnlwdGVkUHViS2V5WCA9IGRlY3J5cHRlZFB1YktleS5zbGljZSgyLCA2Nik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcnlwdGVkUHViS2V5WSA9IGRlY3J5cHRlZFB1YktleS5zbGljZSg2Nik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmVuYWJsZU9uZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0Tm9uY2UoZGVjcnlwdGVkUHViS2V5WCwgZGVjcnlwdGVkUHViS2V5WSwgcHJpdmF0ZUtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF95aWVsZCRfdGhpcyRnZXROb25jZSA9IF9jb250ZXh0NC5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlID0gX3lpZWxkJF90aGlzJGdldE5vbmNlLm5vbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhTm9uY2UgPSBuZXcgQk4obm9uY2UgfHwgXCIwXCIsIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0TWV0YWRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHViX2tleV9YOiBkZWNyeXB0ZWRQdWJLZXlYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHViX2tleV9ZOiBkZWNyeXB0ZWRQdWJLZXlZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YU5vbmNlID0gX2NvbnRleHQ0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL3JldHJpZXZlU2hhcmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZLZXk6IHByaXZhdGVLZXkudG9TdHJpbmcoMTYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZTogbWV0YWRhdGFOb25jZS50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gcHJpdmF0ZUtleS5hZGQobWV0YWRhdGFOb25jZSkudW1vZChfdGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldGhBZGRyZXNzID0gX3RoaXMuZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXkocHJpdmF0ZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiPiB0b3J1cy5qcy9yZXRyaWV2ZVNoYXJlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldGhBZGRyZXNzOiBldGhBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdktleTogcHJpdmF0ZUtleS50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgLy8gcmV0dXJuIHJlY29uc3RydWN0ZWQgcHJpdmF0ZSBrZXkgYW5kIGV0aGVyZXVtIGFkZHJlc3NcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0aEFkZHJlc3M6IGV0aEFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2S2V5OiBwcml2YXRlS2V5LnRvU3RyaW5nKFwiaGV4XCIsIDY0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhTm9uY2U6IG1ldGFkYXRhTm9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBfY2FsbGVlNCk7XG4gICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gxMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSgpKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTUsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiByZXRyaWV2ZVNoYXJlcyhfeDUsIF94NiwgX3g3LCBfeDgsIF94OSkge1xuICAgICAgICByZXR1cm4gX3JldHJpZXZlU2hhcmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXRyaWV2ZVNoYXJlcztcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJnZXRNZXRhZGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2dldE1ldGFkYXRhID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTYoZGF0YSkge1xuICAgICAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgICAgIG1ldGFkYXRhUmVzcG9uc2UsXG4gICAgICAgICAgICBfYXJnczYgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0Nikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ni5wcmV2ID0gX2NvbnRleHQ2Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBfYXJnczYubGVuZ3RoID4gMSAmJiBfYXJnczZbMV0gIT09IHVuZGVmaW5lZCA/IF9hcmdzNlsxXSA6IHt9O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5wcmV2ID0gMTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3QoXCJcIi5jb25jYXQodGhpcy5tZXRhZGF0YUhvc3QsIFwiL2dldFwiKSwgZGF0YSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIG1ldGFkYXRhUmVzcG9uc2UgPSBfY29udGV4dDYuc2VudDtcblxuICAgICAgICAgICAgICAgIGlmICghKCFtZXRhZGF0YVJlc3BvbnNlIHx8ICFtZXRhZGF0YVJlc3BvbnNlLm1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCBuZXcgQk4oMCkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCBuZXcgQk4obWV0YWRhdGFSZXNwb25zZS5tZXNzYWdlLCAxNikpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2LnByZXYgPSAxMDtcbiAgICAgICAgICAgICAgICBfY29udGV4dDYudDAgPSBfY29udGV4dDZbXCJjYXRjaFwiXSgxKTtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJnZXQgbWV0YWRhdGEgZXJyb3JcIiwgX2NvbnRleHQ2LnQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCBuZXcgQk4oMCkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU2LCB0aGlzLCBbWzEsIDEwXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YShfeDEzKSB7XG4gICAgICAgIHJldHVybiBfZ2V0TWV0YWRhdGEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldE1ldGFkYXRhO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlTWV0YWRhdGFQYXJhbXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVNZXRhZGF0YVBhcmFtcyhtZXNzYWdlLCBwcml2YXRlS2V5KSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy5lYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5LnRvU3RyaW5nKFwiaGV4XCIsIDY0KSk7XG4gICAgICB2YXIgc2V0RGF0YSA9IHtcbiAgICAgICAgZGF0YTogbWVzc2FnZSxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgQk4ofn4odGhpcy5zZXJ2ZXJUaW1lT2Zmc2V0ICsgRGF0ZS5ub3coKSAvIDEwMDApKS50b1N0cmluZygxNilcbiAgICAgIH07XG4gICAgICB2YXIgc2lnID0ga2V5LnNpZ24oa2VjY2FrMjU2KEpzb25TdHJpbmdpZnkoc2V0RGF0YSkpLnNsaWNlKDIpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHB1Yl9rZXlfWDoga2V5LmdldFB1YmxpYygpLmdldFgoKS50b1N0cmluZyhcImhleFwiKSxcbiAgICAgICAgcHViX2tleV9ZOiBrZXkuZ2V0UHVibGljKCkuZ2V0WSgpLnRvU3RyaW5nKFwiaGV4XCIpLFxuICAgICAgICBzZXRfZGF0YTogc2V0RGF0YSxcbiAgICAgICAgc2lnbmF0dXJlOiBCdWZmZXIuZnJvbShzaWcuci50b1N0cmluZygxNiwgNjQpICsgc2lnLnMudG9TdHJpbmcoMTYsIDY0KSArIG5ldyBCTihcIlwiKS50b1N0cmluZygxNiwgMiksIFwiaGV4XCIpLnRvU3RyaW5nKFwiYmFzZTY0XCIpXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRNZXRhZGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3NldE1ldGFkYXRhID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTcoZGF0YSkge1xuICAgICAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgICAgIG1ldGFkYXRhUmVzcG9uc2UsXG4gICAgICAgICAgICBfYXJnczcgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTckKF9jb250ZXh0Nykge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ny5wcmV2ID0gX2NvbnRleHQ3Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBfYXJnczcubGVuZ3RoID4gMSAmJiBfYXJnczdbMV0gIT09IHVuZGVmaW5lZCA/IF9hcmdzN1sxXSA6IHt9O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5wcmV2ID0gMTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3QoXCJcIi5jb25jYXQodGhpcy5tZXRhZGF0YUhvc3QsIFwiL3NldFwiKSwgZGF0YSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIG1ldGFkYXRhUmVzcG9uc2UgPSBfY29udGV4dDcuc2VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiLCBtZXRhZGF0YVJlc3BvbnNlLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBfY29udGV4dDcucHJldiA9IDg7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ3LnQwID0gX2NvbnRleHQ3W1wiY2F0Y2hcIl0oMSk7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKFwic2V0IG1ldGFkYXRhIGVycm9yXCIsIF9jb250ZXh0Ny50MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgXCJcIik7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTcsIHRoaXMsIFtbMSwgOF1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gc2V0TWV0YWRhdGEoX3gxNCkge1xuICAgICAgICByZXR1cm4gX3NldE1ldGFkYXRhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXRNZXRhZGF0YTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJsYWdyYW5nZUludGVycG9sYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGFncmFuZ2VJbnRlcnBvbGF0aW9uKHNoYXJlcywgbm9kZUluZGV4KSB7XG4gICAgICBpZiAoc2hhcmVzLmxlbmd0aCAhPT0gbm9kZUluZGV4Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlY3JldCA9IG5ldyBCTigwKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHVwcGVyID0gbmV3IEJOKDEpO1xuICAgICAgICB2YXIgbG93ZXIgPSBuZXcgQk4oMSk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFyZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgdXBwZXIgPSB1cHBlci5tdWwobm9kZUluZGV4W2pdLm5lZygpKTtcbiAgICAgICAgICAgIHVwcGVyID0gdXBwZXIudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgdmFyIHRlbXAgPSBub2RlSW5kZXhbaV0uc3ViKG5vZGVJbmRleFtqXSk7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcC51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgICBsb3dlciA9IGxvd2VyLm11bCh0ZW1wKS51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlbHRhID0gdXBwZXIubXVsKGxvd2VyLmludm0odGhpcy5lYy5jdXJ2ZS5uKSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICBkZWx0YSA9IGRlbHRhLm11bChzaGFyZXNbaV0pLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgc2VjcmV0ID0gc2VjcmV0LmFkZChkZWx0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWNyZXQudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZUFkZHJlc3NGcm9tUHJpdktleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUFkZHJlc3NGcm9tUHJpdktleShwcml2YXRlS2V5KSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy5lYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5LnRvU3RyaW5nKFwiaGV4XCIsIDY0KSwgXCJoZXhcIik7XG4gICAgICB2YXIgcHVibGljS2V5ID0ga2V5LmdldFB1YmxpYygpLmVuY29kZShcImhleFwiLCBmYWxzZSkuc2xpY2UoMik7XG4gICAgICBsb2cuaW5mbyhwdWJsaWNLZXksIFwicHVibGljIGtleVwiKTtcbiAgICAgIHZhciBldGhBZGRyZXNzTG93ZXIgPSBcIjB4XCIuY29uY2F0KGtlY2NhazI1NihCdWZmZXIuZnJvbShwdWJsaWNLZXksIFwiaGV4XCIpKS5zbGljZSg2NCAtIDM4KSk7XG4gICAgICByZXR1cm4gdG9DaGVja3N1bUFkZHJlc3MoZXRoQWRkcmVzc0xvd2VyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5KHB1YmxpY0tleVgsIHB1YmxpY0tleVkpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICB4OiBwdWJsaWNLZXlYLnRvU3RyaW5nKFwiaGV4XCIsIDY0KSxcbiAgICAgICAgeTogcHVibGljS2V5WS50b1N0cmluZyhcImhleFwiLCA2NClcbiAgICAgIH0pO1xuICAgICAgdmFyIHB1YmxpY0tleSA9IGtleS5nZXRQdWJsaWMoKS5lbmNvZGUoXCJoZXhcIiwgZmFsc2UpLnNsaWNlKDIpO1xuICAgICAgbG9nLmluZm8oa2V5LmdldFB1YmxpYygpLmVuY29kZShcImhleFwiLCBmYWxzZSksIFwicHVibGljIGtleVwiKTtcbiAgICAgIHZhciBldGhBZGRyZXNzTG93ZXIgPSBcIjB4XCIuY29uY2F0KGtlY2NhazI1NihCdWZmZXIuZnJvbShwdWJsaWNLZXksIFwiaGV4XCIpKS5zbGljZSg2NCAtIDM4KSk7XG4gICAgICByZXR1cm4gdG9DaGVja3N1bUFkZHJlc3MoZXRoQWRkcmVzc0xvd2VyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTm90ZTogdXNlIHRoaXMgZnVuY3Rpb24gb25seSB3aXRoIGN1c3RvbSBhdXRoLCBkb24ndCB1c2UgdG8gbG9va3VwIG9wZW5sb2dpbiBhY2NvdW50cy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFB1YmxpY0FkZHJlc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRQdWJsaWNBZGRyZXNzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTgoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCBfcmVmNykge1xuICAgICAgICB2YXIgdmVyaWZpZXIsXG4gICAgICAgICAgICB2ZXJpZmllcklkLFxuICAgICAgICAgICAgaXNFeHRlbmRlZCxcbiAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0LFxuICAgICAgICAgICAgaXNOZXdLZXksXG4gICAgICAgICAgICBfcmVmOCxcbiAgICAgICAgICAgIGtleVJlc3VsdCxcbiAgICAgICAgICAgIGVycm9yUmVzdWx0LFxuICAgICAgICAgICAgYXNzaWduUmVzdWx0LFxuICAgICAgICAgICAgX25vbmNlLFxuICAgICAgICAgICAgX2ZpbmFsS2V5UmVzdWx0JGtleXMkMixcbiAgICAgICAgICAgIFgsXG4gICAgICAgICAgICBZLFxuICAgICAgICAgICAgbm9uY2VSZXN1bHQsXG4gICAgICAgICAgICBub25jZSxcbiAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5LFxuICAgICAgICAgICAgdHlwZU9mVXNlcixcbiAgICAgICAgICAgIHB1Yk5vbmNlLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIF9hcmdzOCA9IGFyZ3VtZW50cztcblxuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU4JChfY29udGV4dDgpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDgucHJldiA9IF9jb250ZXh0OC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB2ZXJpZmllciA9IF9yZWY3LnZlcmlmaWVyLCB2ZXJpZmllcklkID0gX3JlZjcudmVyaWZpZXJJZDtcbiAgICAgICAgICAgICAgICBpc0V4dGVuZGVkID0gX2FyZ3M4Lmxlbmd0aCA+IDMgJiYgX2FyZ3M4WzNdICE9PSB1bmRlZmluZWQgPyBfYXJnczhbM10gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL2dldFB1YmxpY0FkZHJlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgZW5kcG9pbnRzOiBlbmRwb2ludHMsXG4gICAgICAgICAgICAgICAgICB0b3J1c05vZGVQdWJzOiB0b3J1c05vZGVQdWJzLFxuICAgICAgICAgICAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyLFxuICAgICAgICAgICAgICAgICAgdmVyaWZpZXJJZDogdmVyaWZpZXJJZCxcbiAgICAgICAgICAgICAgICAgIGlzRXh0ZW5kZWQ6IGlzRXh0ZW5kZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpc05ld0tleSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5TG9va3VwKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBfY29udGV4dDgudDAgPSBfY29udGV4dDguc2VudDtcblxuICAgICAgICAgICAgICAgIGlmIChfY29udGV4dDgudDApIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC50MCA9IHt9O1xuXG4gICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBfcmVmOCA9IF9jb250ZXh0OC50MDtcbiAgICAgICAgICAgICAgICBrZXlSZXN1bHQgPSBfcmVmOC5rZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgZXJyb3JSZXN1bHQgPSBfcmVmOC5lcnJvclJlc3VsdDtcblxuICAgICAgICAgICAgICAgIGlmICghKGVycm9yUmVzdWx0ICYmIEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0KS5pbmNsdWRlcyhcIlZlcmlmaWVyIG5vdCBzdXBwb3J0ZWRcIikpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmVyaWZpZXIgbm90IHN1cHBvcnRlZC4gQ2hlY2sgaWYgeW91OiBcXG5cXG4gICAgICAxLiBBcmUgb24gdGhlIHJpZ2h0IG5ldHdvcmsgKFRvcnVzIHRlc3RuZXQvbWFpbm5ldCkgXFxuXFxuICAgICAgMi4gSGF2ZSBzZXR1cCBhIHZlcmlmaWVyIG9uIGRhc2hib2FyZC53ZWIzYXV0aC5pbz9cIik7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICBpZiAoIShlcnJvclJlc3VsdCAmJiBKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCkuaW5jbHVkZXMoXCJWZXJpZmllciArIFZlcmlmaWVySUQgaGFzIG5vdCB5ZXQgYmVlbiBhc3NpZ25lZFwiKSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMjY7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDE5O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlBc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgZW5kcG9pbnRzOiBlbmRwb2ludHMsXG4gICAgICAgICAgICAgICAgICB0b3J1c05vZGVQdWJzOiB0b3J1c05vZGVQdWJzLFxuICAgICAgICAgICAgICAgICAgbGFzdFBvaW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBmaXJzdFBvaW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcklkOiB2ZXJpZmllcklkLFxuICAgICAgICAgICAgICAgICAgc2lnbmVySG9zdDogdGhpcy5zaWduZXJIb3N0LFxuICAgICAgICAgICAgICAgICAgbmV0d29yazogdGhpcy5uZXR3b3JrXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDIxO1xuICAgICAgICAgICAgICAgIHJldHVybiB3YWl0S2V5TG9va3VwKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQsIDEwMDApO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgICAgYXNzaWduUmVzdWx0ID0gX2NvbnRleHQ4LnNlbnQ7XG4gICAgICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQgPSBhc3NpZ25SZXN1bHQgPT09IG51bGwgfHwgYXNzaWduUmVzdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhc3NpZ25SZXN1bHQua2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIGlzTmV3S2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDMxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICAgICAgaWYgKCFrZXlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMzA7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdCA9IGtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDMxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9kZSByZXN1bHRzIGRvIG5vdCBtYXRjaCBhdCBmaXJzdCBsb29rdXAgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGtleVJlc3VsdCB8fCB7fSksIFwiLCBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0IHx8IHt9KSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiPiB0b3J1cy5qcy9nZXRQdWJsaWNBZGRyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0OiBmaW5hbEtleVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgIGlzTmV3S2V5OiBpc05ld0tleVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmaW5hbEtleVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA2OTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9maW5hbEtleVJlc3VsdCRrZXlzJDIgPSBmaW5hbEtleVJlc3VsdC5rZXlzWzBdLCBYID0gX2ZpbmFsS2V5UmVzdWx0JGtleXMkMi5wdWJfa2V5X1gsIFkgPSBfZmluYWxLZXlSZXN1bHQka2V5cyQyLnB1Yl9rZXlfWTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVPbmVLZXkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDgucHJldiA9IDM1O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMzg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JTZXROb25jZShYLCBZLCB1bmRlZmluZWQsICFpc05ld0tleSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBub25jZVJlc3VsdCA9IF9jb250ZXh0OC5zZW50O1xuICAgICAgICAgICAgICAgIG5vbmNlID0gbmV3IEJOKG5vbmNlUmVzdWx0Lm5vbmNlIHx8IFwiMFwiLCAxNik7XG4gICAgICAgICAgICAgICAgdHlwZU9mVXNlciA9IG5vbmNlUmVzdWx0LnR5cGVPZlVzZXI7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA0NjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5wcmV2ID0gNDM7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnQxID0gX2NvbnRleHQ4W1wiY2F0Y2hcIl0oMzUpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHZXRPclNldE5vbmNlRXJyb3IoKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjFcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTA7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21Qcml2YXRlKG5vbmNlLnRvU3RyaW5nKDE2KSkuZ2V0UHVibGljKCkpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA1MDpcbiAgICAgICAgICAgICAgICBpZiAoIShub25jZVJlc3VsdC50eXBlT2ZVc2VyID09PSBcInYyXCIpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDU0O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5vbmNlUmVzdWx0LnVwZ3JhZGVkKSB7XG4gICAgICAgICAgICAgICAgICAvLyBPbmVLZXkgaXMgdXBncmFkZWQgdG8gMi9uLCByZXR1cm5lZCBhZGRyZXNzIGlzIGFkZHJlc3Mgb2YgVG9ydXMga2V5IChwb3N0Ym94IGtleSksIG5vdCB0S2V5XG4gICAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICAgIHg6IFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IFlcbiAgICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICAgIHg6IFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IFlcbiAgICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgICB4OiBub25jZVJlc3VsdC5wdWJOb25jZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBub25jZVJlc3VsdC5wdWJOb25jZS55XG4gICAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKSk7XG4gICAgICAgICAgICAgICAgICBwdWJOb25jZSA9IG5vbmNlUmVzdWx0LnB1Yk5vbmNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA1NDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRPclNldE5vbmNlIHNob3VsZCBhbHdheXMgcmV0dXJuIHR5cGVPZlVzZXIuXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTU6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA2MjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgICAgIHR5cGVPZlVzZXIgPSBcInYxXCI7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA2MDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YSh7XG4gICAgICAgICAgICAgICAgICBwdWJfa2V5X1g6IFgsXG4gICAgICAgICAgICAgICAgICBwdWJfa2V5X1k6IFlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgIG5vbmNlID0gX2NvbnRleHQ4LnNlbnQ7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgIHk6IFlcbiAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHJpdmF0ZShub25jZS50b1N0cmluZygxNikpLmdldFB1YmxpYygpKTtcblxuICAgICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICAgIFggPSBtb2RpZmllZFB1YktleS5nZXRYKCkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgIFkgPSBtb2RpZmllZFB1YktleS5nZXRZKCkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLmdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXkobW9kaWZpZWRQdWJLZXkuZ2V0WCgpLCBtb2RpZmllZFB1YktleS5nZXRZKCkpO1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIj4gdG9ydXMuanMvZ2V0UHVibGljQWRkcmVzc1wiLCB7XG4gICAgICAgICAgICAgICAgICBYOiBYLFxuICAgICAgICAgICAgICAgICAgWTogWSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyOiB0eXBlT2ZVc2VyLFxuICAgICAgICAgICAgICAgICAgbm9uY2U6IChfbm9uY2UgPSBub25jZSkgPT09IG51bGwgfHwgX25vbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9uY2UudG9TdHJpbmcoMTYpLFxuICAgICAgICAgICAgICAgICAgcHViTm9uY2U6IHB1Yk5vbmNlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNFeHRlbmRlZCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA2ODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDguYWJydXB0KFwicmV0dXJuXCIsIGFkZHJlc3MpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgdHlwZU9mVXNlcjogdHlwZU9mVXNlcixcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICBYOiBYLFxuICAgICAgICAgICAgICAgICAgWTogWSxcbiAgICAgICAgICAgICAgICAgIG1ldGFkYXRhTm9uY2U6IG5vbmNlLFxuICAgICAgICAgICAgICAgICAgcHViTm9uY2U6IHB1Yk5vbmNlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OTpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpbmFsIGxvb2t1cCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5UmVzdWx0IHx8IHt9KSwgXCIsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQgfHwge30pKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3MDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDguc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTgsIHRoaXMsIFtbMzUsIDQzXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRQdWJsaWNBZGRyZXNzKF94MTUsIF94MTYsIF94MTcpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRQdWJsaWNBZGRyZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRQdWJsaWNBZGRyZXNzO1xuICAgIH0oKVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGZ1bmN0aW9ucyBmb3IgT25lS2V5IChPcGVuTG9naW4gdjIpLCBvbmx5IGNhbGwgdGhlc2UgZnVuY3Rpb25zIGlmIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRPclNldE5vbmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0T3JTZXROb25jZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU5KFgsIFksIHByaXZLZXkpIHtcbiAgICAgICAgdmFyIGdldE9ubHksXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgbXNnLFxuICAgICAgICAgICAgX2FyZ3M5ID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU5JChfY29udGV4dDkpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDkucHJldiA9IF9jb250ZXh0OS5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBnZXRPbmx5ID0gX2FyZ3M5Lmxlbmd0aCA+IDMgJiYgX2FyZ3M5WzNdICE9PSB1bmRlZmluZWQgPyBfYXJnczlbM10gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBtc2cgPSBnZXRPbmx5ID8gXCJnZXROb25jZVwiIDogXCJnZXRPclNldE5vbmNlXCI7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJpdktleSkge1xuICAgICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2VuZXJhdGVNZXRhZGF0YVBhcmFtcyhtc2csIHByaXZLZXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1g6IFgsXG4gICAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWTogWSxcbiAgICAgICAgICAgICAgICAgICAgc2V0X2RhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBtc2dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ5LmFicnVwdChcInJldHVyblwiLCBwb3N0KFwiXCIuY29uY2F0KHRoaXMubWV0YWRhdGFIb3N0LCBcIi9nZXRfb3Jfc2V0X25vbmNlXCIpLCBkYXRhLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ5LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU5LCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0T3JTZXROb25jZShfeDE4LCBfeDE5LCBfeDIwKSB7XG4gICAgICAgIHJldHVybiBfZ2V0T3JTZXROb25jZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0T3JTZXROb25jZTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJnZXROb25jZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2dldE5vbmNlID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTEwKFgsIFksIHByaXZLZXkpIHtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMTAkKF9jb250ZXh0MTApIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDEwLnByZXYgPSBfY29udGV4dDEwLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDEwLmFicnVwdChcInJldHVyblwiLCB0aGlzLmdldE9yU2V0Tm9uY2UoWCwgWSwgcHJpdktleSwgdHJ1ZSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDEwLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUxMCwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE5vbmNlKF94MjEsIF94MjIsIF94MjMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXROb25jZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0Tm9uY2U7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UG9zdGJveEtleUZyb20xT3V0T2YxXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvc3Rib3hLZXlGcm9tMU91dE9mMShwcml2S2V5LCBub25jZSkge1xuICAgICAgdmFyIHByaXZLZXlCTiA9IG5ldyBCTihwcml2S2V5LCAxNik7XG4gICAgICB2YXIgbm9uY2VCTiA9IG5ldyBCTihub25jZSwgMTYpO1xuICAgICAgcmV0dXJuIHByaXZLZXlCTi5zdWIobm9uY2VCTikudW1vZCh0aGlzLmVjLmN1cnZlLm4pLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImVuYWJsZUxvZ2dpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlTG9nZ2luZygpIHtcbiAgICAgIHZhciB2ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuICAgICAgaWYgKHYpIGxvZy5lbmFibGVBbGwoKTtlbHNlIGxvZy5kaXNhYmxlQWxsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEFQSUtleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBUElLZXkkMShhcGlLZXkpIHtcbiAgICAgIHNldEFQSUtleShhcGlLZXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRFbWJlZEhvc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RW1iZWRIb3N0JDEoZW1iZWRIb3N0KSB7XG4gICAgICBzZXRFbWJlZEhvc3QoZW1iZWRIb3N0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNHZXRPclNldE5vbmNlRXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNHZXRPclNldE5vbmNlRXJyb3IoZXJyKSB7XG4gICAgICByZXR1cm4gZXJyIGluc3RhbmNlb2YgR2V0T3JTZXROb25jZUVycm9yO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb3J1cztcbn0oKTtcblxuZXhwb3J0IHsgR2V0T3JTZXROb25jZUVycm9yLCBUb3J1cyBhcyBkZWZhdWx0LCBrQ29tYmluYXRpb25zLCBrZWNjYWsyNTYsIGtleUFzc2lnbiwga2V5TG9va3VwLCB0aHJlc2hvbGRTYW1lLCB3YWl0S2V5TG9va3VwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b3J1c1V0aWxzLmVzbS5qcy5tYXBcbiIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IE5vZGVEZXRhaWxNYW5hZ2VyIGZyb20gJ0B0b3J1c2xhYnMvZmV0Y2gtbm9kZS1kZXRhaWxzJztcbmltcG9ydCB7IGdldCwgc2V0QVBJS2V5IH0gZnJvbSAnQHRvcnVzbGFicy9odHRwLWhlbHBlcnMnO1xuaW1wb3J0IHsgU2FmZUV2ZW50RW1pdHRlciwgT2JqZWN0TXVsdGlwbGV4LCBjcmVhdGVTdHJlYW1NaWRkbGV3YXJlLCBKUlBDRW5naW5lLCBjcmVhdGVJZFJlbWFwTWlkZGxld2FyZSwgQmFzZVBvc3RNZXNzYWdlU3RyZWFtLCBzZXR1cE11bHRpcGxleCB9IGZyb20gJ0B0b3J1c2xhYnMvb3BlbmxvZ2luLWpycGMnO1xuaW1wb3J0IFRvcnVzSnMgZnJvbSAnQHRvcnVzbGFicy90b3J1cy5qcyc7XG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2xvZGFzaC5tZXJnZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlU3RvcmUsIHN0b3JlQXNTdHJlYW0gfSBmcm9tICdAbWV0YW1hc2svb2JzLXN0b3JlJztcbmltcG9ydCB7IGV0aEVycm9ycywgRXRoZXJldW1ScGNFcnJvciB9IGZyb20gJ2V0aC1ycGMtZXJyb3JzJztcbmltcG9ydCBkZXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCB7IGR1cGxleCB9IGZyb20gJ2lzLXN0cmVhbSc7XG5pbXBvcnQgcHVtcCBmcm9tICdwdW1wJztcbmltcG9ydCBsb2dsZXZlbCBmcm9tICdsb2dsZXZlbCc7XG5pbXBvcnQgY3JlYXRlSGFzaCBmcm9tICdjcmVhdGUtaGFzaCc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuXG5jb25zdCBMT0dJTl9QUk9WSURFUiA9IHtcbiAgR09PR0xFOiBcImdvb2dsZVwiLFxuICBGQUNFQk9PSzogXCJmYWNlYm9va1wiLFxuICBUV0lUQ0g6IFwidHdpdGNoXCIsXG4gIFJFRERJVDogXCJyZWRkaXRcIixcbiAgRElTQ09SRDogXCJkaXNjb3JkXCJcbn07XG5jb25zdCBXQUxMRVRfVkVSSUZJRVJTID0ge1xuICBHT09HTEU6IFwiZ29vZ2xlXCIsXG4gIEZBQ0VCT09LOiBcImZhY2Vib29rXCIsXG4gIFRXSVRDSDogXCJ0d2l0Y2hcIixcbiAgUkVERElUOiBcInJlZGRpdFwiLFxuICBESVNDT1JEOiBcImRpc2NvcmRcIixcbiAgRU1BSUxfUEFTU1dPUkRMRVNTOiBcInRvcnVzLWF1dGgwLWVtYWlsLXBhc3N3b3JkbGVzc1wiXG59O1xuY29uc3QgV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVAgPSB7XG4gIFtXQUxMRVRfVkVSSUZJRVJTLkdPT0dMRV06IFwidGtleS1nb29nbGVcIixcbiAgW1dBTExFVF9WRVJJRklFUlMuRkFDRUJPT0tdOiBcInRrZXktZmFjZWJvb2tcIixcbiAgW1dBTExFVF9WRVJJRklFUlMuVFdJVENIXTogXCJ0a2V5LXR3aXRjaFwiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5SRURESVRdOiBcInRrZXktcmVkZGl0XCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLkRJU0NPUkRdOiBcInRrZXktZGlzY29yZFwiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5FTUFJTF9QQVNTV09SRExFU1NdOiBcInRrZXktYXV0aDAtZW1haWwtcGFzc3dvcmRsZXNzXCJcbn07XG5jb25zdCBQQVlNRU5UX1BST1ZJREVSID0ge1xuICBNT09OUEFZOiBcIm1vb25wYXlcIixcbiAgV1lSRTogXCJ3eXJlXCIsXG4gIFJBTVBORVRXT1JLOiBcInJhbXBuZXR3b3JrXCIsXG4gIFhBTlBPT0w6IFwieGFucG9vbFwiLFxuICBNRVJDVVJZTzogXCJtZXJjdXJ5b1wiLFxuICBUUkFOU0FLOiBcInRyYW5zYWtcIlxufTtcbmNvbnN0IFRPUlVTX0JVSUxEX0VOViA9IHtcbiAgUFJPRFVDVElPTjogXCJwcm9kdWN0aW9uXCIsXG4gIERFVkVMT1BNRU5UOiBcImRldmVsb3BtZW50XCIsXG4gIEJJTkFOQ0U6IFwiYmluYW5jZVwiLFxuICBURVNUSU5HOiBcInRlc3RpbmdcIixcbiAgTFJDOiBcImxyY1wiLFxuICBCRVRBOiBcImJldGFcIlxufTtcbmNvbnN0IEJVVFRPTl9QT1NJVElPTiA9IHtcbiAgQk9UVE9NX0xFRlQ6IFwiYm90dG9tLWxlZnRcIixcbiAgVE9QX0xFRlQ6IFwidG9wLWxlZnRcIixcbiAgQk9UVE9NX1JJR0hUOiBcImJvdHRvbS1yaWdodFwiLFxuICBUT1BfUklHSFQ6IFwidG9wLXJpZ2h0XCJcbn07XG5cbmNvbnN0IHBheW1lbnRQcm92aWRlcnMkMSA9IHtcbiAgW1BBWU1FTlRfUFJPVklERVIuUkFNUE5FVFdPUktdOiB7XG4gICAgbGluZTE6IFwiRGViaXQgQ2FyZC8gQXBwbGUgUGF5LyBCYW5rIHRyYW5zZmVyXCIsXG4gICAgbGluZTI6IFwiMC40OSUgLSAyLjklXCIsXG4gICAgbGluZTM6IFwiNSwwMDDigqwvcHVyY2hhc2UsIDIwLDAwMOKCrC9tb1wiLFxuICAgIHN1cHBvcnRQYWdlOiBcImh0dHBzOi8vaW5zdGFudC5yYW1wLm5ldHdvcmsvXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogNTAsXG4gICAgbWF4T3JkZXJWYWx1ZTogMjAwMDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbXCJHQlBcIiwgXCJFVVJcIiwgXCJVU0RcIl0sXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzOiBbXCJFVEhcIiwgXCJEQUlcIiwgXCJVU0RDXCIsIFwiQlNDX0JOQlwiXSxcbiAgICBpbmNsdWRlRmVlczogdHJ1ZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9LFxuICBbUEFZTUVOVF9QUk9WSURFUi5NT09OUEFZXToge1xuICAgIGxpbmUxOiBcIkNyZWRpdCAvIERlYml0IENhcmQgLyBBcHBsZSBQYXlcIixcbiAgICBsaW5lMjogXCI0LjUlIG9yIDUgVVNEXCIsXG4gICAgbGluZTM6IFwiMiwwMDDigqwvZGF5LCAxMCwwMDDigqwvbW9cIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL2hlbHAubW9vbnBheS5pby9lbi9cIixcbiAgICBtaW5PcmRlclZhbHVlOiAyNC45OSxcbiAgICBtYXhPcmRlclZhbHVlOiA1MDAwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlVTRFwiLCBcIkVVUlwiLCBcIkdCUFwiLCBcIkFVRFwiLCBcIkNBRFwiLCBcIlNHRFwiLCBcIlJVQlwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIlRVU0RcIiwgXCJVU0RDXCIsIFwiVVNEVFwiLCBcIkJOQl9CU0NcIiwgXCJCVVNEX0JTQ1wiXSxcbiAgICBpbmNsdWRlRmVlczogdHJ1ZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9LFxuICBbUEFZTUVOVF9QUk9WSURFUi5XWVJFXToge1xuICAgIGxpbmUxOiBcIkFwcGxlIFBheS8gRGViaXQvIENyZWRpdCBDYXJkXCIsXG4gICAgbGluZTI6IFwiNC45JSArIDMwwqIgb3IgNSBVU0RcIixcbiAgICBsaW5lMzogXCIkMjUwL2RheVwiLFxuICAgIHN1cHBvcnRQYWdlOiBcImh0dHBzOi8vc3VwcG9ydC5zZW5kd3lyZS5jb20vZW4vXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogNSxcbiAgICBtYXhPcmRlclZhbHVlOiA1MDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbXCJVU0RcIiwgXCJBVURcIiwgXCJDQURcIiwgXCJHQlBcIiwgXCJFVVJcIl0sXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzOiBbXCJFVEhcIiwgXCJEQUlcIiwgXCJVU0RDXCIsIFwiVVNEVFwiXSxcbiAgICBpbmNsdWRlRmVlczogZmFsc2UsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuWEFOUE9PTF06IHtcbiAgICBsaW5lMTogXCJQYXlOb3cvIEluc3RhUGF5LyBGUFMvIEdvSmVrUGF5LyBVUEkvIFByb21wdFBheS8gVmlldGVsUGF5LyBEdWl0Tm93XCIsXG4gICAgbGluZTI6IFwiMi41JSBidXlpbmcsIDMlIHNlbGxpbmdcIixcbiAgICBsaW5lMzogXCIkMiw1MDAgLyBkYXlcIixcbiAgICBzdXBwb3J0UGFnZTogXCJtYWlsdG86c3VwcG9ydEB4YW5wb29sLmNvbVwiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDEwMCxcbiAgICBtYXhPcmRlclZhbHVlOiAyNTAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiU0dEXCIsIFwiSEtEXCIsIFwiTVlSXCIsIFwiUEhQXCIsIFwiSU5SXCIsIFwiVk5EXCIsIFwiVEhCXCIsIFwiSURSXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiVVNEVFwiXSxcbiAgICBpbmNsdWRlRmVlczogdHJ1ZSxcbiAgICBzZWxsOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLk1FUkNVUllPXToge1xuICAgIGxpbmUxOiBcIkNyZWRpdC8gRGViaXQgQ2FyZC8gQXBwbGUgUGF5XCIsXG4gICAgbGluZTI6IFwiMy45NSUgb3IgNCBVU0RcIixcbiAgICBsaW5lMzogXCIxMCwwMDDigqwvZGF5LCAyNSwwMDDigqwvbW9cIixcbiAgICBzdXBwb3J0UGFnZTogXCJtYWlsdG86c3VwcG9ydEBtZXJjdXJ5by5pb1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDMwLFxuICAgIG1heE9yZGVyVmFsdWU6IDUwMDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbXCJVU0RcIiwgXCJFVVJcIiwgXCJSVUJcIiwgXCJUUllcIiwgXCJHQlBcIiwgXCJVQUhcIl0sXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzOiBbXCJFVEhcIiwgXCJEQUlcIiwgXCJCQVRcIiwgXCJVU0RUXCIsIFwiT0tCXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLlRSQU5TQUtdOiB7XG4gICAgbGluZTE6IFwiQ3JlZGl0LyBEZWJpdCBDYXJkLyA8YnIvPkJhbmsgVHJhbnNmZXIgKHNlcGEvZ2JwKVwiLFxuICAgIGxpbmUyOiBcIjAuOTklIC0gNS41JSBvciA1IFVTRFwiLFxuICAgIGxpbmUzOiBcIjUwMOKCrC9kYXlcIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL3N1cHBvcnQudHJhbnNhay5jb20vaGMvZW4tVVNcIixcbiAgICBtaW5PcmRlclZhbHVlOiAyMCxcbiAgICBtYXhPcmRlclZhbHVlOiA1MDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbXCJVU0RcIiwgXCJFVVJcIiwgXCJHQlBcIiwgXCJBVURcIiwgXCJDQURcIiwgXCJTR0RcIl0sXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzOiBbXCJFVEhcIiwgXCJEQUlcIiwgXCJVU0RDXCIsIFwiVVNEVFwiXSxcbiAgICBpbmNsdWRlRmVlczogdHJ1ZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9XG59O1xuY29uc3QgdHJhbnNsYXRpb25zID0ge1xuICBlbjoge1xuICAgIGVtYmVkOiB7XG4gICAgICBjb250aW51ZTogXCJDb250aW51ZVwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwiQXV0aG9yaXphdGlvbiByZXF1aXJlZFwiLFxuICAgICAgcGVuZGluZ0FjdGlvbjogXCJDbGljayBjb250aW51ZSB0byBwcm9jZWVkIHdpdGggeW91ciByZXF1ZXN0IGluIGEgcG9wdXBcIixcbiAgICAgIGNvb2tpZXNSZXF1aXJlZDogXCJDb29raWVzIFJlcXVpcmVkXCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIlBsZWFzZSBlbmFibGUgY29va2llcyBpbiB5b3VyIGJyb3dzZXIgcHJlZmVyZW5jZXMgdG8gYWNjZXNzIFRvcnVzXCIsXG4gICAgICBjbGlja0hlcmU6IFwiTW9yZSBJbmZvXCJcbiAgICB9XG4gIH0sXG4gIGRlOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIkZvcnRzZXR6ZW5cIixcbiAgICAgIGFjdGlvblJlcXVpcmVkOiBcIkF1dG9yaXNpZXJ1bmcgZXJmb3JkZXJsaWNoXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIktsaWNrZW4gU2llIGluIGVpbmVtIFBvcHVwIGF1ZiBXZWl0ZXIsIHVtIG1pdCBJaHJlciBBbmZyYWdlIGZvcnR6dWZhaHJlblwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIkNvb2tpZXMgYmVuw7Z0aWd0XCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIkJpdHRlIGFrdGl2aWVyZW4gU2llIENvb2tpZXMgaW4gSWhyZW4gQnJvd3NlcmVpbnN0ZWxsdW5nZW4sIHVtIGF1ZiBUb3J1cyB6dXp1Z3JlaWZlblwiLFxuICAgICAgY2xpY2tIZXJlOiBcIk1laHIgSW5mb1wiXG4gICAgfVxuICB9LFxuICBqYToge1xuICAgIGVtYmVkOiB7XG4gICAgICBjb250aW51ZTogXCLntpnntprjgZnjgotcIixcbiAgICAgIGFjdGlvblJlcXVpcmVkOiBcIuiqjeiovOOBjOW/heimgeOBp+OBmVwiLFxuICAgICAgcGVuZGluZ0FjdGlvbjogXCLntprooYzjgpLjgq/jg6rjg4Pjgq/jgZfjgabjgIHjg53jg4Pjg5fjgqLjg4Pjg5fjgafjg6rjgq/jgqjjgrnjg4jjgpLntprooYzjgZfjgb7jgZlcIixcbiAgICAgIGNvb2tpZXNSZXF1aXJlZDogXCLlv4XopoHjgarjgq/jg4Pjgq3jg7xcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwiVG9ydXPjgavjgqLjgq/jgrvjgrnjgZnjgovjgavjga/jgIHjg5bjg6njgqbjgrbjga7oqK3lrprjgadDb29raWXjgpLmnInlirnjgavjgZfjgabjgY/jgaDjgZXjgYTjgIJcIixcbiAgICAgIGNsaWNrSGVyZTogXCLoqbPjgZfjgY/jga9cIlxuICAgIH1cbiAgfSxcbiAga286IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwi6rOE7IaN7ZWY64ukXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCLsirnsnbgg7ZWE7JqUXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIu2MneyXheyXkOyEnCDsmpTssq3snYQg7KeE7ZaJ7ZWY66Ck66m0IOqzhOyGjeydhCDtgbTrpq3tlZjsi63si5zsmKQuXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwi7L+g7YKkIO2VhOyalFwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCLruIzrnbzsmrDsoIAg7ZmY6rK9IOyEpOygleyXkOyEnCDsv6DtgqTrpbwg7Zmc7ISx7ZmU7ZWY7JesIFRvcnVz7JeQIOyVoeyEuOyKpO2VmOyLreyLnOyYpC5cIixcbiAgICAgIGNsaWNrSGVyZTogXCLrjZQg66eO7J2AIOygleuztFwiXG4gICAgfVxuICB9LFxuICB6aDoge1xuICAgIGVtYmVkOiB7XG4gICAgICBjb250aW51ZTogXCLnu6fnu61cIixcbiAgICAgIGFjdGlvblJlcXVpcmVkOiBcIumcgOimgeaOiOadg1wiLFxuICAgICAgcGVuZGluZ0FjdGlvbjogXCLljZXlh7vnu6fnu63ku6XlnKjlvLnlh7rnqpflj6PkuK3nu6fnu63mgqjnmoTor7fmsYJcIixcbiAgICAgIGNvb2tpZXNSZXF1aXJlZDogXCLlv4XloatDb29raWVcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwi6K+35Zyo5oKo55qE5rWP6KeI5Zmo6aaW6YCJ6aG55Lit5ZCv55SoY29va2ll5Lul6K6/6ZeuVG9ydXPjgIJcIixcbiAgICAgIGNsaWNrSGVyZTogXCLmm7TlpJrkv6Hmga9cIlxuICAgIH1cbiAgfVxufTtcbnZhciBjb25maWd1cmF0aW9uID0ge1xuICBzdXBwb3J0ZWRWZXJpZmllckxpc3Q6IE9iamVjdC52YWx1ZXMoV0FMTEVUX1ZFUklGSUVSUyksXG4gIHBheW1lbnRQcm92aWRlcnM6IHBheW1lbnRQcm92aWRlcnMkMSxcbiAgYXBpOiBcImh0dHBzOi8vYXBpLnRvci51c1wiLFxuICB0cmFuc2xhdGlvbnMsXG4gIHByb2RUb3J1c1VybDogXCJcIixcbiAgbG9jYWxTdG9yYWdlS2V5UHJlZml4OiBcInRvcnVzLVwiXG59O1xuXG5jb25zdCBydW5PbkxvYWQgPSBmbiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGlmICh3aW5kb3cuZG9jdW1lbnQuYm9keSAhPSBudWxsKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKGZuKCkpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGZuKCkpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufSk7XG5jb25zdCBodG1sVG9FbGVtZW50ID0gaHRtbCA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgY29uc3QgdHJpbW1lZEh0bWwgPSBodG1sLnRyaW0oKTsgLy8gTmV2ZXIgcmV0dXJuIGEgdGV4dCBub2RlIG9mIHdoaXRlc3BhY2UgYXMgdGhlIHJlc3VsdFxuXG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHRyaW1tZWRIdG1sO1xuICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xufTtcbmNvbnN0IGhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGhhbmRsZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBoYW5kbGVyQXJncyA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaGFuZGxlckFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlcldyYXBwZXIgPSAoKSA9PiB7XG4gICAgaGFuZGxlciguLi5oYW5kbGVyQXJncyk7XG4gICAgaGFuZGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyV3JhcHBlcik7XG4gIH07XG5cbiAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyV3JhcHBlcik7XG59O1xuY29uc3QgaGFuZGxlU3RyZWFtID0gKGhhbmRsZSwgZXZlbnROYW1lLCBoYW5kbGVyKSA9PiB7XG4gIGNvbnN0IGhhbmRsZXJXcmFwcGVyID0gY2h1bmsgPT4ge1xuICAgIGhhbmRsZXIoY2h1bmspO1xuICAgIGhhbmRsZS5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbiAgfTtcblxuICBoYW5kbGUub24oZXZlbnROYW1lLCBoYW5kbGVyV3JhcHBlcik7XG59O1xuYXN5bmMgZnVuY3Rpb24gZG9jdW1lbnRSZWFkeSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIikge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVFdmVudChkb2N1bWVudCwgXCJET01Db250ZW50TG9hZGVkXCIsIHJlc29sdmUpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBsb2cgPSBsb2dsZXZlbC5nZXRMb2dnZXIoXCJ0b3J1cy1lbWJlZFwiKTtcblxudmFyIG1lc3NhZ2VzID0ge1xuICBlcnJvcnM6IHtcbiAgICBkaXNjb25uZWN0ZWQ6ICgpID0+IFwiVG9ydXM6IExvc3QgY29ubmVjdGlvbiB0byBUb3J1cy5cIixcbiAgICBwZXJtYW5lbnRseURpc2Nvbm5lY3RlZDogKCkgPT4gXCJUb3J1czogRGlzY29ubmVjdGVkIGZyb20gaWZyYW1lLiBQYWdlIHJlbG9hZCByZXF1aXJlZC5cIixcbiAgICBzZW5kU2l0ZU1ldGFkYXRhOiAoKSA9PiBcIlRvcnVzOiBGYWlsZWQgdG8gc2VuZCBzaXRlIG1ldGFkYXRhLiBUaGlzIGlzIGFuIGludGVybmFsIGVycm9yLCBwbGVhc2UgcmVwb3J0IHRoaXMgYnVnLlwiLFxuICAgIHVuc3VwcG9ydGVkU3luYzogbWV0aG9kID0+IFwiVG9ydXM6IFRoZSBUb3J1cyBFdGhlcmV1bSBwcm92aWRlciBkb2VzIG5vdCBzdXBwb3J0IHN5bmNocm9ub3VzIG1ldGhvZHMgbGlrZSBcIi5jb25jYXQobWV0aG9kLCBcIiB3aXRob3V0IGEgY2FsbGJhY2sgcGFyYW1ldGVyLlwiKSxcbiAgICBpbnZhbGlkRHVwbGV4U3RyZWFtOiAoKSA9PiBcIk11c3QgcHJvdmlkZSBhIE5vZGUuanMtc3R5bGUgZHVwbGV4IHN0cmVhbS5cIixcbiAgICBpbnZhbGlkT3B0aW9uczogKG1heEV2ZW50TGlzdGVuZXJzLCBzaG91bGRTZW5kTWV0YWRhdGEpID0+IFwiSW52YWxpZCBvcHRpb25zLiBSZWNlaXZlZDogeyBtYXhFdmVudExpc3RlbmVyczogXCIuY29uY2F0KG1heEV2ZW50TGlzdGVuZXJzLCBcIiwgc2hvdWxkU2VuZE1ldGFkYXRhOiBcIikuY29uY2F0KHNob3VsZFNlbmRNZXRhZGF0YSwgXCIgfVwiKSxcbiAgICBpbnZhbGlkUmVxdWVzdEFyZ3M6ICgpID0+IFwiRXhwZWN0ZWQgYSBzaW5nbGUsIG5vbi1hcnJheSwgb2JqZWN0IGFyZ3VtZW50LlwiLFxuICAgIGludmFsaWRSZXF1ZXN0TWV0aG9kOiAoKSA9PiBcIidhcmdzLm1ldGhvZCcgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuXCIsXG4gICAgaW52YWxpZFJlcXVlc3RQYXJhbXM6ICgpID0+IFwiJ2FyZ3MucGFyYW1zJyBtdXN0IGJlIGFuIG9iamVjdCBvciBhcnJheSBpZiBwcm92aWRlZC5cIixcbiAgICBpbnZhbGlkTG9nZ2VyT2JqZWN0OiAoKSA9PiBcIidhcmdzLmxvZ2dlcicgbXVzdCBiZSBhbiBvYmplY3QgaWYgcHJvdmlkZWQuXCIsXG4gICAgaW52YWxpZExvZ2dlck1ldGhvZDogbWV0aG9kID0+IFwiJ2FyZ3MubG9nZ2VyJyBtdXN0IGluY2x1ZGUgcmVxdWlyZWQgbWV0aG9kICdcIi5jb25jYXQobWV0aG9kLCBcIicuXCIpXG4gIH0sXG4gIGluZm86IHtcbiAgICBjb25uZWN0ZWQ6IGNoYWluSWQgPT4gXCJUb3J1czogQ29ubmVjdGVkIHRvIGNoYWluIHdpdGggSUQgXFxcIlwiLmNvbmNhdChjaGFpbklkLCBcIlxcXCIuXCIpXG4gIH0sXG4gIHdhcm5pbmdzOiB7XG4gICAgLy8gZGVwcmVjYXRlZCBtZXRob2RzXG4gICAgZW5hYmxlRGVwcmVjYXRpb246ICdUb3J1czogXCJcImV0aGVyZXVtLmVuYWJsZSgpXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4gJyArICdQbGVhc2UgdXNlIFwiZXRoZXJldW0uc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIilcIiBpbnN0ZWFkLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExMDInLFxuICAgIHNlbmREZXByZWNhdGlvbjogJ1RvcnVzOiBcImV0aGVyZXVtLnNlbmQoLi4uKVwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJyArICcgUGxlYXNlIHVzZSBcImV0aGVyZXVtLnNlbmRBc3luYyguLi4pXCIgb3IgXCJldGhlcmV1bS5yZXF1ZXN0KC4uLilcIiBpbnN0ZWFkLlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5MycsXG4gICAgZXZlbnRzOiB7XG4gICAgICBjbG9zZTogJ1RvcnVzOiBUaGUgZXZlbnQgXCJjbG9zZVwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuIFBsZWFzZSB1c2UgXCJkaXNjb25uZWN0XCIgaW5zdGVhZC4nICsgXCJcXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTNcIixcbiAgICAgIGRhdGE6ICdUb3J1czogVGhlIGV2ZW50IFwiZGF0YVwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLicgKyAnVXNlIFwibWVzc2FnZVwiIGluc3RlYWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzI21lc3NhZ2UnLFxuICAgICAgbmV0d29ya0NoYW5nZWQ6ICdUb3J1czogVGhlIGV2ZW50IFwibmV0d29ya0NoYW5nZWRcIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLicgKyAnIFBsZWFzZSB1c2UgXCJjaGFpbkNoYW5nZWRcIiBpbnN0ZWFkLlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5MycsXG4gICAgICBub3RpZmljYXRpb246ICdUb3J1czogVGhlIGV2ZW50IFwibm90aWZpY2F0aW9uXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4gJyArICdQbGVhc2UgdXNlIFwibWVzc2FnZVwiIGluc3RlYWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzJ1xuICAgIH0sXG4gICAgcHVibGljQ29uZmlnU3RvcmU6ICdUb3J1czogVGhlIHByb3BlcnR5IFwicHVibGljQ29uZmlnU3RvcmVcIiBpcyBkZXByZWNhdGVkIGFuZCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4nXG4gIH1cbn07XG5cbmNvbnN0IHtcbiAgcGF5bWVudFByb3ZpZGVyc1xufSA9IGNvbmZpZ3VyYXRpb247XG5jb25zdCB2YWxpZGF0ZVBheW1lbnRQcm92aWRlciA9IChwcm92aWRlciwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IHt9O1xuXG4gIGlmICghcHJvdmlkZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JzLFxuICAgICAgaXNWYWxpZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBpZiAocHJvdmlkZXIgJiYgIXBheW1lbnRQcm92aWRlcnNbcHJvdmlkZXJdKSB7XG4gICAgZXJyb3JzLnByb3ZpZGVyID0gXCJJbnZhbGlkIFByb3ZpZGVyXCI7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9ycyxcbiAgICAgIGlzVmFsaWQ6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGVkUHJvdmlkZXIgPSBwYXltZW50UHJvdmlkZXJzW3Byb3ZpZGVyXTtcbiAgY29uc3Qgc2VsZWN0ZWRQYXJhbXMgPSBwYXJhbXMgfHwge307IC8vIHNldCBkZWZhdWx0IHZhbHVlc1xuICAvLyBpZiAoIXNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3VycmVuY3kpIFtzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5XSA9IHNlbGVjdGVkUHJvdmlkZXIudmFsaWRDdXJyZW5jaWVzXG4gIC8vIGlmICghc2VsZWN0ZWRQYXJhbXMuZmlhdFZhbHVlKSBzZWxlY3RlZFBhcmFtcy5maWF0VmFsdWUgPSBzZWxlY3RlZFByb3ZpZGVyLm1pbk9yZGVyVmFsdWVcbiAgLy8gaWYgKCFzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZENyeXB0b0N1cnJlbmN5KSBbc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeV0gPSBzZWxlY3RlZFByb3ZpZGVyLnZhbGlkQ3J5cHRvQ3VycmVuY2llc1xuICAvLyB2YWxpZGF0aW9uc1xuXG4gIGlmIChzZWxlY3RlZFBhcmFtcy5maWF0VmFsdWUpIHtcbiAgICBjb25zdCByZXF1ZXN0ZWRPcmRlckFtb3VudCA9ICtwYXJzZUZsb2F0KHNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZS50b1N0cmluZygpKSB8fCAwO1xuICAgIGlmIChyZXF1ZXN0ZWRPcmRlckFtb3VudCA8IHNlbGVjdGVkUHJvdmlkZXIubWluT3JkZXJWYWx1ZSkgZXJyb3JzLmZpYXRWYWx1ZSA9IFwiUmVxdWVzdGVkIGFtb3VudCBpcyBsb3dlciB0aGFuIHN1cHBvcnRlZFwiO1xuICAgIGlmIChyZXF1ZXN0ZWRPcmRlckFtb3VudCA+IHNlbGVjdGVkUHJvdmlkZXIubWF4T3JkZXJWYWx1ZSAmJiBzZWxlY3RlZFByb3ZpZGVyLmVuZm9yY2VNYXgpIGVycm9ycy5maWF0VmFsdWUgPSBcIlJlcXVlc3RlZCBhbW91bnQgaXMgaGlnaGVyIHRoYW4gc3VwcG9ydGVkXCI7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDdXJyZW5jeSAmJiAhc2VsZWN0ZWRQcm92aWRlci52YWxpZEN1cnJlbmNpZXMuaW5jbHVkZXMoc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDdXJyZW5jeSkpIHtcbiAgICBlcnJvcnMuc2VsZWN0ZWRDdXJyZW5jeSA9IFwiVW5zdXBwb3J0ZWQgY3VycmVuY3lcIjtcbiAgfVxuXG4gIGlmIChzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZENyeXB0b0N1cnJlbmN5ICYmICFzZWxlY3RlZFByb3ZpZGVyLnZhbGlkQ3J5cHRvQ3VycmVuY2llcy5pbmNsdWRlcyhzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZENyeXB0b0N1cnJlbmN5KSkge1xuICAgIGVycm9ycy5zZWxlY3RlZENyeXB0b0N1cnJlbmN5ID0gXCJVbnN1cHBvcnRlZCBjcnlwdG9DdXJyZW5jeVwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnMsXG4gICAgaXNWYWxpZDogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDBcbiAgfTtcbn07IC8vIHV0aWxpdHkgZnVuY3Rpb25zXG5cbi8qKlxuICoganNvbi1ycGMtZW5naW5lIG1pZGRsZXdhcmUgdGhhdCBsb2dzIFJQQyBlcnJvcnMgYW5kIGFuZCB2YWxpZGF0ZXMgcmVxLm1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gbG9nIC0gVGhlIGxvZ2dpbmcgQVBJIHRvIHVzZS5cbiAqIEByZXR1cm5zICBqc29uLXJwYy1lbmdpbmUgbWlkZGxld2FyZSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yTWlkZGxld2FyZSgpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIC8vIGpzb24tcnBjLWVuZ2luZSB3aWxsIHRlcm1pbmF0ZSB0aGUgcmVxdWVzdCB3aGVuIGl0IG5vdGljZXMgdGhpcyBlcnJvclxuICAgIGlmICh0eXBlb2YgcmVxLm1ldGhvZCAhPT0gXCJzdHJpbmdcIiB8fCAhcmVxLm1ldGhvZCkge1xuICAgICAgcmVzLmVycm9yID0gZXRoRXJyb3JzLnJwYy5pbnZhbGlkUmVxdWVzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwiVGhlIHJlcXVlc3QgJ21ldGhvZCcgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuXCIsXG4gICAgICAgIGRhdGE6IHJlcVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmV4dChkb25lID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXJyb3JcbiAgICAgIH0gPSByZXM7XG5cbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICAgIH1cblxuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2sgLSBSUEMgRXJyb3I6IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gcmVzb2x2ZSByZXNwb25zZS5yZXN1bHQgb3IgcmVzcG9uc2UsIHJlamVjdCBlcnJvcnNcbi8qKlxuICogTG9ncyBhIHN0cmVhbSBkaXNjb25uZWN0aW9uIGVycm9yLiBFbWl0cyBhbiAnZXJyb3InIGlmIGdpdmVuIGFuXG4gKiBFdmVudEVtaXR0ZXIgdGhhdCBoYXMgbGlzdGVuZXJzIGZvciB0aGUgJ2Vycm9yJyBldmVudC5cbiAqXG4gKiBAcGFyYW0gbG9nIC0gVGhlIGxvZ2dpbmcgQVBJIHRvIHVzZS5cbiAqIEBwYXJhbSByZW1vdGVMYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgZGlzY29ubmVjdGVkIHN0cmVhbS5cbiAqIEBwYXJhbSBlcnJvciAtIFRoZSBhc3NvY2lhdGVkIGVycm9yIHRvIGxvZy5cbiAqIEBwYXJhbSBlbWl0dGVyIC0gVGhlIGxvZ2dpbmcgQVBJIHRvIHVzZS5cbiAqL1xuXG5mdW5jdGlvbiBsb2dTdHJlYW1EaXNjb25uZWN0V2FybmluZyhyZW1vdGVMYWJlbCwgZXJyb3IsIGVtaXR0ZXIpIHtcbiAgbGV0IHdhcm5pbmdNc2cgPSBcIk1ldGFNYXNrOiBMb3N0IGNvbm5lY3Rpb24gdG8gXFxcIlwiLmNvbmNhdChyZW1vdGVMYWJlbCwgXCJcXFwiLlwiKTtcblxuICBpZiAoZXJyb3IgIT09IG51bGwgJiYgZXJyb3IgIT09IHZvaWQgMCAmJiBlcnJvci5zdGFjaykge1xuICAgIHdhcm5pbmdNc2cgKz0gXCJcXG5cIi5jb25jYXQoZXJyb3Iuc3RhY2spO1xuICB9XG5cbiAgbG9nLndhcm4od2FybmluZ01zZyk7XG5cbiAgaWYgKGVtaXR0ZXIgJiYgZW1pdHRlci5saXN0ZW5lckNvdW50KFwiZXJyb3JcIikgPiAwKSB7XG4gICAgZW1pdHRlci5lbWl0KFwiZXJyb3JcIiwgd2FybmluZ01zZyk7XG4gIH1cbn1cbmNvbnN0IGdldFByZW9wZW5JbnN0YW5jZUlkID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XG5jb25zdCBnZXRUb3J1c1VybCA9IGFzeW5jIChidWlsZEVudiwgaW50ZWdyaXR5KSA9PiB7XG4gIGxldCB0b3J1c1VybDtcbiAgbGV0IGxvZ0xldmVsOyAvLyBEbyBub3QgY2hhbmdlIHRoaXMgbGluZVxuXG4gIGNvbnN0IHZlcnNpb24gPSBcIjEuMjUuMFwiO1xuICBsZXQgdmVyc2lvblVzZWQgPSBpbnRlZ3JpdHkudmVyc2lvbiB8fCB2ZXJzaW9uO1xuXG4gIHRyeSB7XG4gICAgaWYgKChidWlsZEVudiA9PT0gXCJiaW5hbmNlXCIgfHwgYnVpbGRFbnYgPT09IFwicHJvZHVjdGlvblwiKSAmJiAhaW50ZWdyaXR5LnZlcnNpb24pIHtcbiAgICAgIGxldCByZXNwb25zZTtcbiAgICAgIGlmICghY29uZmlndXJhdGlvbi5wcm9kVG9ydXNVcmwpIHJlc3BvbnNlID0gYXdhaXQgZ2V0KFwiXCIuY29uY2F0KGNvbmZpZ3VyYXRpb24uYXBpLCBcIi9sYXRlc3R2ZXJzaW9uP25hbWU9QHRvcnVzbGFicy90b3J1cy1lbWJlZCZ2ZXJzaW9uPVwiKS5jb25jYXQodmVyc2lvbiksIHt9LCB7XG4gICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgfSk7ZWxzZSByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogY29uZmlndXJhdGlvbi5wcm9kVG9ydXNVcmxcbiAgICAgIH07XG4gICAgICB2ZXJzaW9uVXNlZCA9IHJlc3BvbnNlLmRhdGE7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWF0b21pYy11cGRhdGVzXG5cbiAgICAgIGNvbmZpZ3VyYXRpb24ucHJvZFRvcnVzVXJsID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nLmVycm9yKGVycm9yLCBcInVuYWJsZSB0byBmZXRjaCBsYXRlc3QgdmVyc2lvblwiKTtcbiAgfVxuXG4gIGxvZy5pbmZvKFwidmVyc2lvbiB1c2VkOiBcIiwgdmVyc2lvblVzZWQpO1xuXG4gIHN3aXRjaCAoYnVpbGRFbnYpIHtcbiAgICBjYXNlIFwiYmluYW5jZVwiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vYmluYW5jZS50b3IudXMvdlwiLmNvbmNhdCh2ZXJzaW9uVXNlZCk7XG4gICAgICBsb2dMZXZlbCA9IFwiaW5mb1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwidGVzdGluZ1wiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vdGVzdGluZy50b3IudXNcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwibHJjXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly9scmMudG9yLnVzXCI7XG4gICAgICBsb2dMZXZlbCA9IFwiZGVidWdcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImJldGFcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL2JldGEudG9yLnVzXCI7XG4gICAgICBsb2dMZXZlbCA9IFwiZGVidWdcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImRldmVsb3BtZW50XCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDUwXCI7XG4gICAgICBsb2dMZXZlbCA9IFwiZGVidWdcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL2FwcC50b3IudXMvdlwiLmNvbmNhdCh2ZXJzaW9uVXNlZCk7XG4gICAgICBsb2dMZXZlbCA9IFwiZXJyb3JcIjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3J1c1VybCxcbiAgICBsb2dMZXZlbFxuICB9O1xufTtcbmNvbnN0IGdldFVzZXJMYW5ndWFnZSA9ICgpID0+IHtcbiAgbGV0IHVzZXJMYW5ndWFnZSA9IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgXCJlbi1VU1wiO1xuICBjb25zdCB1c2VyTGFuZ3VhZ2VzID0gdXNlckxhbmd1YWdlLnNwbGl0KFwiLVwiKTtcbiAgdXNlckxhbmd1YWdlID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ3VyYXRpb24udHJhbnNsYXRpb25zLCB1c2VyTGFuZ3VhZ2VzWzBdKSA/IHVzZXJMYW5ndWFnZXNbMF0gOiBcImVuXCI7XG4gIHJldHVybiB1c2VyTGFuZ3VhZ2U7XG59O1xuY29uc3QgRU1JVFRFRF9OT1RJRklDQVRJT05TID0gW1wiZXRoX3N1YnNjcmlwdGlvblwiIC8vIHBlciBldGgtanNvbi1ycGMtZmlsdGVycy9zdWJzY3JpcHRpb25NYW5hZ2VyXG5dO1xuY29uc3QgTk9PUCA9ICgpID0+IHsvLyBlbXB0eSBmdW5jdGlvblxufTtcbmNvbnN0IEZFQVRVUkVTX1BST1ZJREVSX0NIQU5HRV9XSU5ET1cgPSBcImRpcmVjdG9yaWVzPTAsdGl0bGViYXI9MCx0b29sYmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxtZW51YmFyPTAsaGVpZ2h0PTY2MCx3aWR0aD0zNzVcIjtcbmNvbnN0IEZFQVRVUkVTX0RFRkFVTFRfV0FMTEVUX1dJTkRPVyA9IFwiZGlyZWN0b3JpZXM9MCx0aXRsZWJhcj0wLHRvb2xiYXI9MCxzdGF0dXM9MCxsb2NhdGlvbj0wLG1lbnViYXI9MCxoZWlnaHQ9NzQwLHdpZHRoPTEzMTVcIjtcbmNvbnN0IEZFQVRVUkVTX0NPTkZJUk1fV0lORE9XID0gXCJkaXJlY3Rvcmllcz0wLHRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD03MDAsd2lkdGg9NDUwXCI7XG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG5cbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUgJiYgKCAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgZS5jb2RlID09PSAyMiB8fCAvLyBGaXJlZm94XG4gICAgZS5jb2RlID09PSAxMDE0IHx8IC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHwgLy8gRmlyZWZveFxuICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJiAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgIHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDA7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFBvcHVwRmVhdHVyZXMoKSB7XG4gIC8vIEZpeGVzIGR1YWwtc2NyZWVuIHBvc2l0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3N0IGJyb3dzZXJzICAgICAgRmlyZWZveFxuICBjb25zdCBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW5YO1xuICBjb25zdCBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW5ZO1xuICBjb25zdCB3ID0gMTIwMDtcbiAgY29uc3QgaCA9IDcwMDtcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogd2luZG93LnNjcmVlbi53aWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ID8gd2luZG93LmlubmVySGVpZ2h0IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgY29uc3Qgc3lzdGVtWm9vbSA9IDE7IC8vIE5vIHJlbGlhYmxlIGVzdGltYXRlXG5cbiAgY29uc3QgbGVmdCA9IE1hdGguYWJzKCh3aWR0aCAtIHcpIC8gMiAvIHN5c3RlbVpvb20gKyBkdWFsU2NyZWVuTGVmdCk7XG4gIGNvbnN0IHRvcCA9IE1hdGguYWJzKChoZWlnaHQgLSBoKSAvIDIgLyBzeXN0ZW1ab29tICsgZHVhbFNjcmVlblRvcCk7XG4gIGNvbnN0IGZlYXR1cmVzID0gXCJ0aXRsZWJhcj0wLHRvb2xiYXI9MCxzdGF0dXM9MCxsb2NhdGlvbj0wLG1lbnViYXI9MCxoZWlnaHQ9XCIuY29uY2F0KGggLyBzeXN0ZW1ab29tLCBcIix3aWR0aD1cIikuY29uY2F0KHcgLyBzeXN0ZW1ab29tLCBcIix0b3A9XCIpLmNvbmNhdCh0b3AsIFwiLGxlZnQ9XCIpLmNvbmNhdChsZWZ0KTtcbiAgcmV0dXJuIGZlYXR1cmVzO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5TYWZlRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDA7IC8vIHJlc29sdmUgcmVzcG9uc2UucmVzdWx0LCByZWplY3QgZXJyb3JzXG5cbmNvbnN0IGdldFJwY1Byb21pc2VDYWxsYmFjayA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgbGV0IHVud3JhcFJlc3VsdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgcmV0dXJuIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICBpZiAoZXJyb3IgfHwgcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3QoZXJyb3IgfHwgcmVzcG9uc2UuZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiAhdW53cmFwUmVzdWx0IHx8IEFycmF5LmlzQXJyYXkocmVzcG9uc2UpID8gcmVzb2x2ZShyZXNwb25zZSkgOiByZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG4gIH07XG59O1xuXG5jbGFzcyBUb3J1c0lucGFnZVByb3ZpZGVyIGV4dGVuZHMgU2FmZUV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBUaGUgY2hhaW4gSUQgb2YgdGhlIGN1cnJlbnRseSBjb25uZWN0ZWQgRXRoZXJldW0gY2hhaW4uXG4gICAqIFNlZSBbY2hhaW5JZC5uZXR3b3JrXXtAbGluayBodHRwczovL2NoYWluaWQubmV0d29ya30gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgdXNlcidzIGN1cnJlbnRseSBzZWxlY3RlZCBFdGhlcmV1bSBhZGRyZXNzLlxuICAgKiBJZiBudWxsLCBNZXRhTWFzayBpcyBlaXRoZXIgbG9ja2VkIG9yIHRoZSB1c2VyIGhhcyBub3QgcGVybWl0dGVkIGFueVxuICAgKiBhZGRyZXNzZXMgdG8gYmUgdmlld2VkLlxuICAgKi9cblxuICAvKipcbiAgICogSW5kaWNhdGluZyB0aGF0IHRoaXMgcHJvdmlkZXIgaXMgYSBNZXRhTWFzayBwcm92aWRlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb25TdHJlYW0pIHtcbiAgICBsZXQge1xuICAgICAgbWF4RXZlbnRMaXN0ZW5lcnMgPSAxMDAsXG4gICAgICBzaG91bGRTZW5kTWV0YWRhdGEgPSB0cnVlLFxuICAgICAganNvblJwY1N0cmVhbU5hbWUgPSBcInByb3ZpZGVyXCJcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBzdXBlcigpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2hhaW5JZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2VsZWN0ZWRBZGRyZXNzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcnBjRW5naW5lXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuZXR3b3JrVmVyc2lvblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2hvdWxkU2VuZE1ldGFkYXRhXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc1RvcnVzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcHVibGljQ29uZmlnU3RvcmVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRyeVByZW9wZW5IYW5kbGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuYWJsZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3N0YXRlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfanNvblJwY0Nvbm5lY3Rpb25cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zZW50V2FybmluZ3NcIiwge1xuICAgICAgLy8gbWV0aG9kc1xuICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgIGV4cGVyaW1lbnRhbE1ldGhvZHM6IGZhbHNlLFxuICAgICAgc2VuZDogZmFsc2UsXG4gICAgICBwdWJsaWNDb25maWdTdG9yZTogZmFsc2UsXG4gICAgICAvLyBldmVudHNcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBjbG9zZTogZmFsc2UsXG4gICAgICAgIGRhdGE6IGZhbHNlLFxuICAgICAgICBuZXR3b3JrQ2hhbmdlZDogZmFsc2UsXG4gICAgICAgIG5vdGlmaWNhdGlvbjogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghZHVwbGV4KGNvbm5lY3Rpb25TdHJlYW0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuZXJyb3JzLmludmFsaWREdXBsZXhTdHJlYW0oKSk7XG4gICAgfVxuXG4gICAgdGhpcy5pc1RvcnVzID0gdHJ1ZTtcbiAgICB0aGlzLnNldE1heExpc3RlbmVycyhtYXhFdmVudExpc3RlbmVycyk7IC8vIHByaXZhdGUgc3RhdGVcblxuICAgIHRoaXMuX3N0YXRlID0gX29iamVjdFNwcmVhZCQxKHt9LCBUb3J1c0lucGFnZVByb3ZpZGVyLl9kZWZhdWx0U3RhdGUpOyAvLyBwdWJsaWMgc3RhdGVcblxuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gbnVsbDtcbiAgICB0aGlzLm5ldHdvcmtWZXJzaW9uID0gbnVsbDtcbiAgICB0aGlzLmNoYWluSWQgPSBudWxsO1xuICAgIHRoaXMuc2hvdWxkU2VuZE1ldGFkYXRhID0gc2hvdWxkU2VuZE1ldGFkYXRhOyAvLyBiaW5kIGZ1bmN0aW9ucyAodG8gcHJldmVudCBlLmcuIHdlYjNAMS54IGZyb20gbWFraW5nIHVuYm91bmQgY2FsbHMpXG5cbiAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQgPSB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVDaGFpbkNoYW5nZWQgPSB0aGlzLl9oYW5kbGVDaGFpbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQgPSB0aGlzLl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVDb25uZWN0ID0gdGhpcy5faGFuZGxlQ29ubmVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QgPSB0aGlzLl9oYW5kbGVEaXNjb25uZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlU3RyZWFtRGlzY29ubmVjdCA9IHRoaXMuX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zZW5kU3luYyA9IHRoaXMuX3NlbmRTeW5jLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcnBjUmVxdWVzdCA9IHRoaXMuX3JwY1JlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbiA9IHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZVN0YXRlID0gdGhpcy5faW5pdGlhbGl6ZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXF1ZXN0ID0gdGhpcy5yZXF1ZXN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kQXN5bmMgPSB0aGlzLnNlbmRBc3luYy5iaW5kKHRoaXMpOyAvLyB0aGlzLmVuYWJsZSA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyk7XG4gICAgLy8gc2V0dXAgY29ubmVjdGlvblN0cmVhbSBtdWx0aXBsZXhpbmdcblxuICAgIGNvbnN0IG11eCA9IG5ldyBPYmplY3RNdWx0aXBsZXgoKTtcbiAgICBwdW1wKGNvbm5lY3Rpb25TdHJlYW0sIG11eCwgY29ubmVjdGlvblN0cmVhbSwgdGhpcy5faGFuZGxlU3RyZWFtRGlzY29ubmVjdC5iaW5kKHRoaXMsIFwiTWV0YU1hc2tcIikpOyAvLyBzdWJzY3JpYmUgdG8gbWV0YW1hc2sgcHVibGljIGNvbmZpZyAob25lLXdheSlcblxuICAgIHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlID0gbmV3IE9ic2VydmFibGVTdG9yZSh7XG4gICAgICBzdG9yYWdlS2V5OiBcIk1ldGFtYXNrLUNvbmZpZ1wiXG4gICAgfSk7IC8vIGhhbmRsZSBpc1VubG9ja2VkIGNoYW5nZXMsIGFuZCBjaGFpbkNoYW5nZWQgYW5kIG5ldHdvcmtDaGFuZ2VkIGV2ZW50c1xuICAgIC8vIHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlLnN1YnNjcmliZSgoc3RyaW5naWZpZWRTdGF0ZSkgPT4ge1xuICAgIC8vICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB1c2luZyBzdG9yZSBhcyBzdHJpbmdcbiAgICAvLyAgIGNvbnN0IHN0YXRlID0gSlNPTi5wYXJzZShzdHJpbmdpZmllZFN0YXRlIGFzIHVua25vd24gYXMgc3RyaW5nKTtcbiAgICAvLyAgIGlmIChcImlzVW5sb2NrZWRcIiBpbiBzdGF0ZSAmJiBzdGF0ZS5pc1VubG9ja2VkICE9PSB0aGlzLl9zdGF0ZS5pc1VubG9ja2VkKSB7XG4gICAgLy8gICAgIHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQgPSBzdGF0ZS5pc1VubG9ja2VkO1xuICAgIC8vICAgICBpZiAoIXRoaXMuX3N0YXRlLmlzVW5sb2NrZWQpIHtcbiAgICAvLyAgICAgICAvLyBhY2NvdW50cyBhcmUgbmV2ZXIgZXhwb3NlZCB3aGVuIHRoZSBleHRlbnNpb24gaXMgbG9ja2VkXG4gICAgLy8gICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKFtdKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAvLyB0aGlzIHdpbGwgZ2V0IHRoZSBleHBvc2VkIGFjY291bnRzLCBpZiBhbnlcbiAgICAvLyAgICAgICB0cnkge1xuICAgIC8vICAgICAgICAgdGhpcy5fcnBjUmVxdWVzdChcbiAgICAvLyAgICAgICAgICAgeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsIHBhcmFtczogW10gfSxcbiAgICAvLyAgICAgICAgICAgTk9PUCxcbiAgICAvLyAgICAgICAgICAgdHJ1ZSAvLyBpbmRpY2F0aW5nIHRoYXQgZXRoX2FjY291bnRzIF9zaG91bGRfIHVwZGF0ZSBhY2NvdW50c1xuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgLy8gICAgICAgICAvLyBTd2FsbG93IGVycm9yXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBpZiAoXCJzZWxlY3RlZEFkZHJlc3NcIiBpbiBzdGF0ZSAmJiB0aGlzLnNlbGVjdGVkQWRkcmVzcyAhPT0gc3RhdGUuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgdGhpcy5fcnBjUmVxdWVzdChcbiAgICAvLyAgICAgICAgIHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiLCBwYXJhbXM6IFtdIH0sXG4gICAgLy8gICAgICAgICBOT09QLFxuICAgIC8vICAgICAgICAgdHJ1ZSAvLyBpbmRpY2F0aW5nIHRoYXQgZXRoX2FjY291bnRzIF9zaG91bGRfIHVwZGF0ZSBhY2NvdW50c1xuICAgIC8vICAgICAgICk7XG4gICAgLy8gICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyAgICAgICAvLyBTd2FsbG93IGVycm9yXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIC8vIEVtaXQgY2hhaW5DaGFuZ2VkIGV2ZW50IG9uIGNoYWluIGNoYW5nZVxuICAgIC8vICAgaWYgKFwiY2hhaW5JZFwiIGluIHN0YXRlICYmIHN0YXRlLmNoYWluSWQgIT09IHRoaXMuY2hhaW5JZCkge1xuICAgIC8vICAgICB0aGlzLmNoYWluSWQgPSBzdGF0ZS5jaGFpbklkIHx8IG51bGw7XG4gICAgLy8gICAgIHRoaXMuZW1pdChcImNoYWluQ2hhbmdlZFwiLCB0aGlzLmNoYWluSWQpO1xuICAgIC8vICAgICAvLyBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGNvbm5lY3RlZCwgZm9yIEVJUC0xMTkzIGNvbXBsaWFuY2VcbiAgICAvLyAgICAgLy8gd2UgZG8gdGhpcyBoZXJlIHNvIHRoYXQgaWZyYW1lIGNhbiBpbml0aWFsaXplXG4gICAgLy8gICAgIGlmICghdGhpcy5fc3RhdGUuaGFzRW1pdHRlZENvbm5lY3Rpb24pIHtcbiAgICAvLyAgICAgICB0aGlzLl9oYW5kbGVDb25uZWN0KHRoaXMuY2hhaW5JZCk7XG4gICAgLy8gICAgICAgdGhpcy5fc3RhdGUuaGFzRW1pdHRlZENvbm5lY3Rpb24gPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICAvLyBFbWl0IG5ldHdvcmtDaGFuZ2VkIGV2ZW50IG9uIG5ldHdvcmsgY2hhbmdlXG4gICAgLy8gICBpZiAoXCJuZXR3b3JrVmVyc2lvblwiIGluIHN0YXRlICYmIHN0YXRlLm5ldHdvcmtWZXJzaW9uICE9PSB0aGlzLm5ldHdvcmtWZXJzaW9uKSB7XG4gICAgLy8gICAgIHRoaXMubmV0d29ya1ZlcnNpb24gPSBzdGF0ZS5uZXR3b3JrVmVyc2lvbiB8fCBudWxsO1xuICAgIC8vICAgICB0aGlzLmVtaXQoXCJuZXR3b3JrQ2hhbmdlZFwiLCB0aGlzLm5ldHdvcmtWZXJzaW9uKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICAgIHB1bXAobXV4LmNyZWF0ZVN0cmVhbShcInB1YmxpY0NvbmZpZ1wiKSwgc3RvcmVBc1N0cmVhbSh0aGlzLl9wdWJsaWNDb25maWdTdG9yZSksIC8vIFJQQyByZXF1ZXN0cyBzaG91bGQgc3RpbGwgd29yayBpZiBvbmx5IHRoaXMgc3RyZWFtIGZhaWxzXG4gICAgbG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmcuYmluZCh0aGlzLCBcIk1ldGFNYXNrIFB1YmxpY0NvbmZpZ1N0b3JlXCIpKTsgLy8gaWdub3JlIHBoaXNoaW5nIHdhcm5pbmcgbWVzc2FnZSAoaGFuZGxlZCBlbHNld2hlcmUpXG5cbiAgICBtdXguaWdub3JlU3RyZWFtKFwicGhpc2hpbmdcIik7IC8vIHNldHVwIG93biBldmVudCBsaXN0ZW5lcnNcbiAgICAvLyBFSVAtMTE5MyBjb25uZWN0XG5cbiAgICB0aGlzLm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgfSk7IC8vIGNvbm5lY3QgdG8gYXN5bmMgcHJvdmlkZXJcblxuICAgIGNvbnN0IGpzb25ScGNDb25uZWN0aW9uID0gY3JlYXRlU3RyZWFtTWlkZGxld2FyZSgpO1xuICAgIHB1bXAoanNvblJwY0Nvbm5lY3Rpb24uc3RyZWFtLCBtdXguY3JlYXRlU3RyZWFtKGpzb25ScGNTdHJlYW1OYW1lKSwganNvblJwY0Nvbm5lY3Rpb24uc3RyZWFtLCB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0LmJpbmQodGhpcywgXCJNZXRhTWFzayBScGNQcm92aWRlclwiKSk7IC8vIGhhbmRsZSBSUEMgcmVxdWVzdHMgdmlhIGRhcHAtc2lkZSBycGMgZW5naW5lXG5cbiAgICBjb25zdCBycGNFbmdpbmUgPSBuZXcgSlJQQ0VuZ2luZSgpO1xuICAgIHJwY0VuZ2luZS5wdXNoKGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlKCkpO1xuICAgIHJwY0VuZ2luZS5wdXNoKGNyZWF0ZUVycm9yTWlkZGxld2FyZSgpKTtcbiAgICBycGNFbmdpbmUucHVzaChqc29uUnBjQ29ubmVjdGlvbi5taWRkbGV3YXJlKTtcbiAgICB0aGlzLl9ycGNFbmdpbmUgPSBycGNFbmdpbmU7IC8vIGpzb24gcnBjIG5vdGlmaWNhdGlvbiBsaXN0ZW5lclxuXG4gICAganNvblJwY0Nvbm5lY3Rpb24uZXZlbnRzLm9uKFwibm90aWZpY2F0aW9uXCIsIHBheWxvYWQgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIHBhcmFtc1xuICAgICAgfSA9IHBheWxvYWQ7XG5cbiAgICAgIGlmIChtZXRob2QgPT09IFwid2FsbGV0X2FjY291bnRzQ2hhbmdlZFwiKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwid2FsbGV0X3VubG9ja1N0YXRlQ2hhbmdlZFwiKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZChwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwid2FsbGV0X2NoYWluQ2hhbmdlZFwiKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZChwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChFTUlUVEVEX05PVElGSUNBVElPTlMuaW5jbHVkZXMocGF5bG9hZC5tZXRob2QpKSB7XG4gICAgICAgIC8vIEVJUCAxMTkzIHN1YnNjcmlwdGlvbnMsIHBlciBldGgtanNvbi1ycGMtZmlsdGVycy9zdWJzY3JpcHRpb25NYW5hZ2VyXG4gICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgcGF5bG9hZCk7IC8vIGRlcHJlY2F0ZWRcblxuICAgICAgICB0aGlzLmVtaXQoXCJub3RpZmljYXRpb25cIiwgcGFyYW1zLnJlc3VsdCk7XG4gICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwge1xuICAgICAgICAgIHR5cGU6IG1ldGhvZCxcbiAgICAgICAgICBkYXRhOiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgZm9yIG9sZGVyIG5vbiBFSVAgMTE5MyBzdWJzY3JpcHRpb25zXG4gICAgICAvLyB0aGlzLmVtaXQoJ2RhdGEnLCBudWxsLCBwYXlsb2FkKVxuXG4gICAgfSk7XG4gIH1cblxuICBnZXQgcHVibGljQ29uZmlnU3RvcmUoKSB7XG4gICAgaWYgKCF0aGlzLl9zZW50V2FybmluZ3MucHVibGljQ29uZmlnU3RvcmUpIHtcbiAgICAgIGxvZy53YXJuKG1lc3NhZ2VzLndhcm5pbmdzLnB1YmxpY0NvbmZpZ1N0b3JlKTtcbiAgICAgIHRoaXMuX3NlbnRXYXJuaW5ncy5wdWJsaWNDb25maWdTdG9yZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGlucGFnZSBwcm92aWRlciBpcyBjb25uZWN0ZWQgdG8gVG9ydXMuXG4gICAqL1xuXG5cbiAgaXNDb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkO1xuICB9XG4gIC8qKlxuICAgKiBTdWJtaXRzIGFuIFJQQyByZXF1ZXN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aXRoIHRoZSBnaXZlbiBwYXJhbXMuXG4gICAqIFJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGNhbGwsIG9yIHJlamVjdHMgb24gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSBhcmdzIC0gVGhlIFJQQyByZXF1ZXN0IGFyZ3VtZW50cy5cbiAgICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBSUEMgbWV0aG9kLFxuICAgKiBvciByZWplY3RzIGlmIGFuIGVycm9yIGlzIGVuY291bnRlcmVkLlxuICAgKi9cblxuXG4gIGFzeW5jIHJlcXVlc3QoYXJncykge1xuICAgIGlmICghYXJncyB8fCB0eXBlb2YgYXJncyAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICB0aHJvdyBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMuZXJyb3JzLmludmFsaWRSZXF1ZXN0QXJncygpLFxuICAgICAgICBkYXRhOiBhcmdzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBtZXRob2QsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gYXJncztcblxuICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSBcInN0cmluZ1wiIHx8IG1ldGhvZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IGV0aEVycm9ycy5ycGMuaW52YWxpZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuaW52YWxpZFJlcXVlc3RNZXRob2QoKSxcbiAgICAgICAgZGF0YTogYXJnc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KHBhcmFtcykgJiYgKHR5cGVvZiBwYXJhbXMgIT09IFwib2JqZWN0XCIgfHwgcGFyYW1zID09PSBudWxsKSkge1xuICAgICAgdGhyb3cgZXRoRXJyb3JzLnJwYy5pbnZhbGlkUmVxdWVzdCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VzLmVycm9ycy5pbnZhbGlkUmVxdWVzdFBhcmFtcygpLFxuICAgICAgICBkYXRhOiBhcmdzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcnBjUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGFyYW1zXG4gICAgICB9LCBnZXRScGNQcm9taXNlQ2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0KSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYW4gUlBDIHJlcXVlc3QgcGVyIHRoZSBnaXZlbiBKU09OLVJQQyByZXF1ZXN0IG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHBheWxvYWQgLSBUaGUgUlBDIHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcGFyYW0gY2IgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuXG5cbiAgc2VuZEFzeW5jKHBheWxvYWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fcnBjUmVxdWVzdChwYXlsb2FkLCBjYWxsYmFjayk7XG4gIH1cbiAgLyoqXG4gICAqIFdlIG92ZXJyaWRlIHRoZSBmb2xsb3dpbmcgZXZlbnQgbWV0aG9kcyBzbyB0aGF0IHdlIGNhbiB3YXJuIGNvbnN1bWVyc1xuICAgKiBhYm91dCBkZXByZWNhdGVkIGV2ZW50czpcbiAgICogICBhZGRMaXN0ZW5lciwgb24sIG9uY2UsIHByZXBlbmRMaXN0ZW5lciwgcHJlcGVuZE9uY2VMaXN0ZW5lclxuICAgKi9cblxuXG4gIGFkZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIub24oZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLm9uY2UoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBwcmVwZW5kTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIucHJlcGVuZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcHJlcGVuZE9uY2VMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5wcmVwZW5kT25jZUxpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9IC8vIFByaXZhdGUgTWV0aG9kc1xuICAvLz0gPT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBoZWxwZXIuXG4gICAqIFBvcHVsYXRlcyBpbml0aWFsIHN0YXRlIGJ5IGNhbGxpbmcgJ3dhbGxldF9nZXRQcm92aWRlclN0YXRlJyBhbmQgZW1pdHNcbiAgICogbmVjZXNzYXJ5IGV2ZW50cy5cbiAgICovXG5cblxuICBhc3luYyBfaW5pdGlhbGl6ZVN0YXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjY291bnRzLFxuICAgICAgICBjaGFpbklkLFxuICAgICAgICBpc1VubG9ja2VkLFxuICAgICAgICBuZXR3b3JrVmVyc2lvblxuICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJ3YWxsZXRfZ2V0UHJvdmlkZXJTdGF0ZVwiXG4gICAgICB9KTsgLy8gaW5kaWNhdGUgdGhhdCB3ZSd2ZSBjb25uZWN0ZWQsIGZvciBFSVAtMTE5MyBjb21wbGlhbmNlXG5cbiAgICAgIHRoaXMuZW1pdChcImNvbm5lY3RcIiwge1xuICAgICAgICBjaGFpbklkXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlQ2hhaW5DaGFuZ2VkKHtcbiAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgbmV0d29ya1ZlcnNpb25cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQoe1xuICAgICAgICBhY2NvdW50cyxcbiAgICAgICAgaXNVbmxvY2tlZFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChhY2NvdW50cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrOiBGYWlsZWQgdG8gZ2V0IGluaXRpYWwgc3RhdGUuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgbG9nLmluZm8oXCJpbml0aWFsaXplZCBzdGF0ZVwiKTtcbiAgICAgIHRoaXMuX3N0YXRlLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW1pdChcIl9pbml0aWFsaXplZFwiKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEludGVybmFsIFJQQyBtZXRob2QuIEZvcndhcmRzIHJlcXVlc3RzIHRvIGJhY2tncm91bmQgdmlhIHRoZSBSUEMgZW5naW5lLlxuICAgKiBBbHNvIHJlbWFwIGlkcyBpbmJvdW5kIGFuZCBvdXRib3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHBheWxvYWQgLSBUaGUgUlBDIHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY29uc3VtZXIncyBjYWxsYmFjay5cbiAgICogQHBhcmFtIGlzSW50ZXJuYWwgLSBmYWxzZSAtIFdoZXRoZXIgdGhlIHJlcXVlc3QgaXMgaW50ZXJuYWwuXG4gICAqL1xuXG5cbiAgX3JwY1JlcXVlc3QocGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgICBsZXQgaXNJbnRlcm5hbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgbGV0IGNiID0gY2FsbGJhY2s7XG4gICAgY29uc3QgX3BheWxvYWQgPSBwYXlsb2FkO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KF9wYXlsb2FkKSkge1xuICAgICAgaWYgKCFfcGF5bG9hZC5qc29ucnBjKSB7XG4gICAgICAgIF9wYXlsb2FkLmpzb25ycGMgPSBcIjIuMFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3BheWxvYWQubWV0aG9kID09PSBcImV0aF9hY2NvdW50c1wiIHx8IF9wYXlsb2FkLm1ldGhvZCA9PT0gXCJldGhfcmVxdWVzdEFjY291bnRzXCIpIHtcbiAgICAgICAgLy8gaGFuZGxlIGFjY291bnRzIGNoYW5naW5nXG4gICAgICAgIGNiID0gKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKHJlcy5yZXN1bHQgfHwgW10sIF9wYXlsb2FkLm1ldGhvZCA9PT0gXCJldGhfYWNjb3VudHNcIiwgaXNJbnRlcm5hbCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKF9wYXlsb2FkLm1ldGhvZCA9PT0gXCJ3YWxsZXRfZ2V0UHJvdmlkZXJTdGF0ZVwiKSB7XG4gICAgICAgIHRoaXMuX3JwY0VuZ2luZS5oYW5kbGUocGF5bG9hZCwgY2IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRyeVByZW9wZW5IYW5kbGUoX3BheWxvYWQsIGNiKTtcbiAgfVxuXG4gIHNlbmQobWV0aG9kT3JQYXlsb2FkLCBjYWxsYmFja09yQXJncykge1xuICAgIGlmICghdGhpcy5fc2VudFdhcm5pbmdzLnNlbmQpIHtcbiAgICAgIGxvZy53YXJuKG1lc3NhZ2VzLndhcm5pbmdzLnNlbmREZXByZWNhdGlvbik7XG4gICAgICB0aGlzLl9zZW50V2FybmluZ3Muc2VuZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtZXRob2RPclBheWxvYWQgPT09IFwic3RyaW5nXCIgJiYgKCFjYWxsYmFja09yQXJncyB8fCBBcnJheS5pc0FycmF5KGNhbGxiYWNrT3JBcmdzKSkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5fcnBjUmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZE9yUGF5bG9hZCxcbiAgICAgICAgICAgIHBhcmFtczogY2FsbGJhY2tPckFyZ3NcbiAgICAgICAgICB9LCBnZXRScGNQcm9taXNlQ2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0LCBmYWxzZSkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChtZXRob2RPclBheWxvYWQgJiYgdHlwZW9mIG1ldGhvZE9yUGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2FsbGJhY2tPckFyZ3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JwY1JlcXVlc3QobWV0aG9kT3JQYXlsb2FkLCBjYWxsYmFja09yQXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbmRTeW5jKG1ldGhvZE9yUGF5bG9hZCk7XG4gIH1cbiAgLyoqXG4gICAqIERFUFJFQ0FURUQuXG4gICAqIEludGVybmFsIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IG1ldGhvZCwgdXNlZCBpbiBzZW5kLlxuICAgKi9cblxuXG4gIF9zZW5kU3luYyhwYXlsb2FkKSB7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIHN3aXRjaCAocGF5bG9hZC5tZXRob2QpIHtcbiAgICAgIGNhc2UgXCJldGhfYWNjb3VudHNcIjpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MgPyBbdGhpcy5zZWxlY3RlZEFkZHJlc3NdIDogW107XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXRoX2NvaW5iYXNlXCI6XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzIHx8IG51bGw7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXRoX3VuaW5zdGFsbEZpbHRlclwiOlxuICAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KHBheWxvYWQsIE5PT1ApO1xuXG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwibmV0X3ZlcnNpb25cIjpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5uZXR3b3JrVmVyc2lvbiB8fCBudWxsO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLmVycm9ycy51bnN1cHBvcnRlZFN5bmMocGF5bG9hZC5tZXRob2QpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHBheWxvYWQuaWQsXG4gICAgICBqc29ucnBjOiBwYXlsb2FkLmpzb25ycGMsXG4gICAgICByZXN1bHRcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBwcm92aWRlciBiZWNvbWVzIGNvbm5lY3RlZCwgdXBkYXRlcyBpbnRlcm5hbCBzdGF0ZSBhbmQgZW1pdHNcbiAgICogcmVxdWlyZWQgZXZlbnRzLiBJZGVtcG90ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gY2hhaW5JZCAtIFRoZSBJRCBvZiB0aGUgbmV3bHkgY29ubmVjdGVkIGNoYWluLlxuICAgKiBlbWl0cyBNZXRhTWFza0lucGFnZVByb3ZpZGVyI2Nvbm5lY3RcbiAgICovXG5cblxuICBfaGFuZGxlQ29ubmVjdChjaGFpbklkKSB7XG4gICAgaWYgKCF0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lbWl0KFwiY29ubmVjdFwiLCB7XG4gICAgICAgIGNoYWluSWRcbiAgICAgIH0pO1xuICAgICAgbG9nLmRlYnVnKG1lc3NhZ2VzLmluZm8uY29ubmVjdGVkKGNoYWluSWQpKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHByb3ZpZGVyIGJlY29tZXMgZGlzY29ubmVjdGVkLCB1cGRhdGVzIGludGVybmFsIHN0YXRlIGFuZCBlbWl0c1xuICAgKiByZXF1aXJlZCBldmVudHMuIElkZW1wb3RlbnQgd2l0aCByZXNwZWN0IHRvIHRoZSBpc1JlY292ZXJhYmxlIHBhcmFtZXRlci5cbiAgICpcbiAgICogRXJyb3IgY29kZXMgcGVyIHRoZSBDbG9zZUV2ZW50IHN0YXR1cyBjb2RlcyBhcyByZXF1aXJlZCBieSBFSVAtMTE5MzpcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Nsb3NlRXZlbnQjU3RhdHVzX2NvZGVzXG4gICAqXG4gICAqIEBwYXJhbSBpc1JlY292ZXJhYmxlIC0gV2hldGhlciB0aGUgZGlzY29ubmVjdGlvbiBpcyByZWNvdmVyYWJsZS5cbiAgICogQHBhcmFtIGVycm9yTWVzc2FnZSAtIEEgY3VzdG9tIGVycm9yIG1lc3NhZ2UuXG4gICAqIGVtaXRzIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIjZGlzY29ubmVjdFxuICAgKi9cblxuXG4gIF9oYW5kbGVEaXNjb25uZWN0KGlzUmVjb3ZlcmFibGUsIGVycm9yTWVzc2FnZSkge1xuICAgIGlmICh0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCB8fCAhdGhpcy5fc3RhdGUuaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZCAmJiAhaXNSZWNvdmVyYWJsZSkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBlcnJvcjtcblxuICAgICAgaWYgKGlzUmVjb3ZlcmFibGUpIHtcbiAgICAgICAgZXJyb3IgPSBuZXcgRXRoZXJldW1ScGNFcnJvcigxMDEzLCAvLyBUcnkgYWdhaW4gbGF0ZXJcbiAgICAgICAgZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VzLmVycm9ycy5kaXNjb25uZWN0ZWQoKSk7XG4gICAgICAgIGxvZy5kZWJ1ZyhlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvciA9IG5ldyBFdGhlcmV1bVJwY0Vycm9yKDEwMTEsIC8vIEludGVybmFsIGVycm9yXG4gICAgICAgIGVycm9yTWVzc2FnZSB8fCBtZXNzYWdlcy5lcnJvcnMucGVybWFuZW50bHlEaXNjb25uZWN0ZWQoKSk7XG4gICAgICAgIGxvZy5lcnJvcihlcnJvcik7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0YXRlLmFjY291bnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdGF0ZS5pc1VubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N0YXRlLmlzUGVybWFuZW50bHlEaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXQoXCJkaXNjb25uZWN0XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgbG9zdCB0byBjcml0aWNhbCBzdHJlYW1zLlxuICAgKlxuICAgKiBlbWl0cyBNZXRhbWFza0lucGFnZVByb3ZpZGVyI2Rpc2Nvbm5lY3RcbiAgICovXG5cblxuICBfaGFuZGxlU3RyZWFtRGlzY29ubmVjdChzdHJlYW1OYW1lLCBlcnJvcikge1xuICAgIGxvZ1N0cmVhbURpc2Nvbm5lY3RXYXJuaW5nKHN0cmVhbU5hbWUsIGVycm9yLCB0aGlzKTtcblxuICAgIHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QoZmFsc2UsIGVycm9yID8gZXJyb3IubWVzc2FnZSA6IHVuZGVmaW5lZCk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFjY291bnRzIG1heSBoYXZlIGNoYW5nZWQuXG4gICAqL1xuXG5cbiAgX2hhbmRsZUFjY291bnRzQ2hhbmdlZChhY2NvdW50cykge1xuICAgIGxldCBpc0V0aEFjY291bnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICBsZXQgaXNJbnRlcm5hbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgLy8gZGVmZW5zaXZlIHByb2dyYW1taW5nXG4gICAgbGV0IGZpbmFsQWNjb3VudHMgPSBhY2NvdW50cztcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShmaW5hbEFjY291bnRzKSkge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIG5vbi1hcnJheSBhY2NvdW50cyBwYXJhbWV0ZXIuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIGZpbmFsQWNjb3VudHMpO1xuICAgICAgZmluYWxBY2NvdW50cyA9IFtdO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWNjb3VudCBvZiBhY2NvdW50cykge1xuICAgICAgaWYgKHR5cGVvZiBhY2NvdW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrOiBSZWNlaXZlZCBub24tc3RyaW5nIGFjY291bnQuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIGFjY291bnRzKTtcbiAgICAgICAgZmluYWxBY2NvdW50cyA9IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IC8vIGVtaXQgYWNjb3VudHNDaGFuZ2VkIGlmIGFueXRoaW5nIGFib3V0IHRoZSBhY2NvdW50cyBhcnJheSBoYXMgY2hhbmdlZFxuXG5cbiAgICBpZiAoIWRlcXVhbCh0aGlzLl9zdGF0ZS5hY2NvdW50cywgZmluYWxBY2NvdW50cykpIHtcbiAgICAgIC8vIHdlIHNob3VsZCBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBhY2NvdW50cyBldmVuIGJlZm9yZSBldGhfYWNjb3VudHNcbiAgICAgIC8vIHJldHVybnMsIGV4Y2VwdCBpbiBjYXNlcyB3aGVyZSBpc0ludGVybmFsIGlzIHRydWVcbiAgICAgIGlmIChpc0V0aEFjY291bnRzICYmIEFycmF5LmlzQXJyYXkodGhpcy5fc3RhdGUuYWNjb3VudHMpICYmIHRoaXMuX3N0YXRlLmFjY291bnRzLmxlbmd0aCA+IDAgJiYgIWlzSW50ZXJuYWwpIHtcbiAgICAgICAgbG9nLmVycm9yKCdNZXRhTWFzazogXCJldGhfYWNjb3VudHNcIiB1bmV4cGVjdGVkbHkgdXBkYXRlZCBhY2NvdW50cy4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy4nLCBmaW5hbEFjY291bnRzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUuYWNjb3VudHMgPSBmaW5hbEFjY291bnRzO1xuICAgICAgdGhpcy5lbWl0KFwiYWNjb3VudHNDaGFuZ2VkXCIsIGZpbmFsQWNjb3VudHMpO1xuICAgIH0gLy8gaGFuZGxlIHNlbGVjdGVkQWRkcmVzc1xuXG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEFkZHJlc3MgIT09IGZpbmFsQWNjb3VudHNbMF0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gZmluYWxBY2NvdW50c1swXSB8fCBudWxsO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXBvbiByZWNlaXB0IG9mIGEgbmV3IGNoYWluSWQgYW5kIG5ldHdvcmtWZXJzaW9uLCBlbWl0cyBjb3JyZXNwb25kaW5nXG4gICAqIGV2ZW50cyBhbmQgc2V0cyByZWxldmFudCBwdWJsaWMgc3RhdGUuXG4gICAqIERvZXMgbm90aGluZyBpZiBuZWl0aGVyIHRoZSBjaGFpbklkIG5vciB0aGUgbmV0d29ya1ZlcnNpb24gYXJlIGRpZmZlcmVudFxuICAgKiBmcm9tIGV4aXN0aW5nIHZhbHVlcy5cbiAgICpcbiAgICogZW1pdHMgTWV0YW1hc2tJbnBhZ2VQcm92aWRlciNjaGFpbkNoYW5nZWRcbiAgICogQHBhcmFtIG5ldHdvcmtJbmZvIC0gQW4gb2JqZWN0IHdpdGggbmV0d29yayBpbmZvLlxuICAgKi9cblxuXG4gIF9oYW5kbGVDaGFpbkNoYW5nZWQoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWluSWQsXG4gICAgICBuZXR3b3JrVmVyc2lvblxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKCFjaGFpbklkIHx8ICFuZXR3b3JrVmVyc2lvbikge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIGludmFsaWQgbmV0d29yayBwYXJhbWV0ZXJzLiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLlwiLCB7XG4gICAgICAgIGNoYWluSWQsXG4gICAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV0d29ya1ZlcnNpb24gPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICB0aGlzLl9oYW5kbGVEaXNjb25uZWN0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oYW5kbGVDb25uZWN0KGNoYWluSWQpO1xuXG4gICAgICBpZiAoY2hhaW5JZCAhPT0gdGhpcy5jaGFpbklkKSB7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KFwiY2hhaW5DaGFuZ2VkXCIsIHRoaXMuY2hhaW5JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVwb24gcmVjZWlwdCBvZiBhIG5ldyBpc1VubG9ja2VkIHN0YXRlLCBzZXRzIHJlbGV2YW50IHB1YmxpYyBzdGF0ZS5cbiAgICogQ2FsbHMgdGhlIGFjY291bnRzIGNoYW5nZWQgaGFuZGxlciB3aXRoIHRoZSByZWNlaXZlZCBhY2NvdW50cywgb3IgYW4gZW1wdHlcbiAgICogYXJyYXkuXG4gICAqXG4gICAqIERvZXMgbm90aGluZyBpZiB0aGUgcmVjZWl2ZWQgdmFsdWUgaXMgZXF1YWwgdG8gdGhlIGV4aXN0aW5nIHZhbHVlLlxuICAgKiBUaGVyZSBhcmUgbm8gbG9jay91bmxvY2sgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyAtIE9wdGlvbnMgYmFnLlxuICAgKi9cblxuXG4gIF9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQoKSB7XG4gICAgbGV0IHtcbiAgICAgIGFjY291bnRzLFxuICAgICAgaXNVbmxvY2tlZFxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpc1VubG9ja2VkICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIGludmFsaWQgaXNVbmxvY2tlZCBwYXJhbWV0ZXIuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIHtcbiAgICAgICAgaXNVbmxvY2tlZFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzVW5sb2NrZWQgIT09IHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQgPSBpc1VubG9ja2VkO1xuXG4gICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQoYWNjb3VudHMgfHwgW10pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogV2FybnMgb2YgZGVwcmVjYXRpb24gZm9yIHRoZSBnaXZlbiBldmVudCwgaWYgYXBwbGljYWJsZS5cbiAgICovXG5cblxuICBfd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKSB7XG4gICAgaWYgKHRoaXMuX3NlbnRXYXJuaW5ncy5ldmVudHNbZXZlbnROYW1lXSA9PT0gZmFsc2UpIHtcbiAgICAgIGxvZy53YXJuKG1lc3NhZ2VzLndhcm5pbmdzLmV2ZW50c1tldmVudE5hbWVdKTtcbiAgICAgIHRoaXMuX3NlbnRXYXJuaW5ncy5ldmVudHNbZXZlbnROYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cblxuX2RlZmluZVByb3BlcnR5KFRvcnVzSW5wYWdlUHJvdmlkZXIsIFwiX2RlZmF1bHRTdGF0ZVwiLCB7XG4gIGFjY291bnRzOiBudWxsLFxuICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gIGlzVW5sb2NrZWQ6IGZhbHNlLFxuICBpbml0aWFsaXplZDogZmFsc2UsXG4gIGlzUGVybWFuZW50bHlEaXNjb25uZWN0ZWQ6IGZhbHNlLFxuICBoYXNFbWl0dGVkQ29ubmVjdGlvbjogZmFsc2Vcbn0pO1xuXG5jb25zdCBkZWZhdWx0cyA9IG9wdGlvbnMgPT4gKHtcbiAgYWxnb3JpdGhtczogb3B0aW9ucy5hbGdvcml0aG1zIHx8IFtcInNoYTI1NlwiXSxcbiAgZGVsaW1pdGVyOiBvcHRpb25zLmRlbGltaXRlciB8fCBcIiBcIixcbiAgZnVsbDogb3B0aW9ucy5mdWxsIHx8IGZhbHNlXG59KTsgLy8gR2VuZXJhdGUgbGlzdCBvZiBoYXNoZXNcblxuXG5jb25zdCBoYXNoZXMgPSAob3B0aW9ucywgZGF0YSkgPT4ge1xuICBjb25zdCBpbnRlcm5hbEhhc2hlcyA9IHt9O1xuICBvcHRpb25zLmFsZ29yaXRobXMuZm9yRWFjaChhbGdvcml0aG0gPT4ge1xuICAgIGludGVybmFsSGFzaGVzW2FsZ29yaXRobV0gPSBjcmVhdGVIYXNoKGFsZ29yaXRobSkudXBkYXRlKGRhdGEsIFwidXRmOFwiKS5kaWdlc3QoXCJiYXNlNjRcIik7XG4gIH0pO1xuICByZXR1cm4gaW50ZXJuYWxIYXNoZXM7XG59OyAvLyBCdWlsZCBhbiBpbnRlZ3JpdHkgc3RyaW5nXG5cblxuY29uc3QgaW50ZWdyaXR5ID0gKG9wdGlvbnMsIHNyaSkgPT4ge1xuICBsZXQgb3V0cHV0ID0gXCJcIjsgLy8gSGFzaCBsaXN0XG5cbiAgb3V0cHV0ICs9IE9iamVjdC5rZXlzKHNyaS5oYXNoZXMpLm1hcChhbGdvcml0aG0gPT4gXCJcIi5jb25jYXQoYWxnb3JpdGhtLCBcIi1cIikuY29uY2F0KHNyaS5oYXNoZXNbYWxnb3JpdGhtXSkpLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICByZXR1cm4gb3V0cHV0O1xufTtcblxuY29uc3QgbWFpbiA9IChvcHRpb25zLCBkYXRhKSA9PiB7XG4gIC8vIERlZmF1bHRzXG4gIGNvbnN0IGZpbmFsT3B0aW9ucyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuICBjb25zdCBzcmkgPSB7XG4gICAgaGFzaGVzOiBoYXNoZXMoZmluYWxPcHRpb25zLCBkYXRhKSxcbiAgICBpbnRlZ3JpdHk6IHVuZGVmaW5lZFxuICB9O1xuICBzcmkuaW50ZWdyaXR5ID0gaW50ZWdyaXR5KGZpbmFsT3B0aW9ucywgc3JpKTtcbiAgcmV0dXJuIGZpbmFsT3B0aW9ucy5mdWxsID8gc3JpIDogc3JpLmludGVncml0eTtcbn07XG5cbmNsYXNzIFBvcHVwSGFuZGxlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgdXJsLFxuICAgICAgdGFyZ2V0LFxuICAgICAgZmVhdHVyZXNcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcigpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXJsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0YXJnZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZlYXR1cmVzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3aW5kb3dcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpbmRvd1RpbWVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpQ2xvc2VkV2luZG93XCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldCB8fCBcIl9ibGFua1wiO1xuICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBnZXRQb3B1cEZlYXR1cmVzKCk7XG4gICAgdGhpcy53aW5kb3cgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53aW5kb3dUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlDbG9zZWRXaW5kb3cgPSBmYWxzZTtcblxuICAgIHRoaXMuX3NldHVwVGltZXIoKTtcbiAgfVxuXG4gIF9zZXR1cFRpbWVyKCkge1xuICAgIHRoaXMud2luZG93VGltZXIgPSBOdW1iZXIoc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMud2luZG93ICYmIHRoaXMud2luZG93LmNsb3NlZCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMud2luZG93VGltZXIpO1xuXG4gICAgICAgIGlmICghdGhpcy5pQ2xvc2VkV2luZG93KSB7XG4gICAgICAgICAgdGhpcy5lbWl0KFwiY2xvc2VcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlDbG9zZWRXaW5kb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLndpbmRvdyA9PT0gdW5kZWZpbmVkKSBjbGVhckludGVydmFsKHRoaXMud2luZG93VGltZXIpO1xuICAgIH0sIDUwMCkpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB2YXIgX3RoaXMkd2luZG93O1xuXG4gICAgdGhpcy53aW5kb3cgPSB3aW5kb3cub3Blbih0aGlzLnVybC5ocmVmLCB0aGlzLnRhcmdldCwgdGhpcy5mZWF0dXJlcyk7XG4gICAgaWYgKChfdGhpcyR3aW5kb3cgPSB0aGlzLndpbmRvdykgIT09IG51bGwgJiYgX3RoaXMkd2luZG93ICE9PSB2b2lkIDAgJiYgX3RoaXMkd2luZG93LmZvY3VzKSB0aGlzLndpbmRvdy5mb2N1cygpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaUNsb3NlZFdpbmRvdyA9IHRydWU7XG4gICAgaWYgKHRoaXMud2luZG93KSB0aGlzLndpbmRvdy5jbG9zZSgpO1xuICB9XG5cbiAgcmVkaXJlY3QobG9jYXRpb25SZXBsYWNlT25SZWRpcmVjdCkge1xuICAgIGlmIChsb2NhdGlvblJlcGxhY2VPblJlZGlyZWN0KSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh0aGlzLnVybC5ocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnVybC5ocmVmO1xuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBpbWFnZSBVUkwgZXhpc3RzXG4gKiBAcGFyYW0gdXJsIC0gdGhlIHVybCBvZiB0aGUgaW1hZ2VcbiAqIEByZXR1cm5zIC0gd2hldGhlciB0aGUgaW1hZ2UgZXhpc3RzXG4gKi9cblxuZnVuY3Rpb24gaW1nRXhpc3RzKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh0cnVlKTtcblxuICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZXNvbHZlKGZhbHNlKTtcblxuICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZSk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogRXh0cmFjdHMgYSBuYW1lIGZvciB0aGUgc2l0ZSBmcm9tIHRoZSBET01cbiAqL1xuXG5cbmNvbnN0IGdldFNpdGVOYW1lID0gd2luZG93ID0+IHtcbiAgY29uc3Qge1xuICAgIGRvY3VtZW50XG4gIH0gPSB3aW5kb3c7XG4gIGNvbnN0IHNpdGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCA+IG1ldGFbcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIl0nKTtcblxuICBpZiAoc2l0ZU5hbWUpIHtcbiAgICByZXR1cm4gc2l0ZU5hbWUuY29udGVudDtcbiAgfVxuXG4gIGNvbnN0IG1ldGFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQgPiBtZXRhW25hbWU9XCJ0aXRsZVwiXScpO1xuXG4gIGlmIChtZXRhVGl0bGUpIHtcbiAgICByZXR1cm4gbWV0YVRpdGxlLmNvbnRlbnQ7XG4gIH1cblxuICBpZiAoZG9jdW1lbnQudGl0bGUgJiYgZG9jdW1lbnQudGl0bGUubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG59O1xuLyoqXG4gKiBFeHRyYWN0cyBhbiBpY29uIGZvciB0aGUgc2l0ZSBmcm9tIHRoZSBET01cbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNpdGVJY29uKHdpbmRvdykge1xuICBjb25zdCB7XG4gICAgZG9jdW1lbnRcbiAgfSA9IHdpbmRvdzsgLy8gVXNlIHRoZSBzaXRlJ3MgZmF2aWNvbiBpZiBpdCBleGlzdHNcblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQgPiBsaW5rW3JlbD1cInNob3J0Y3V0IGljb25cIl0nKTtcblxuICBpZiAoaWNvbiAmJiAoYXdhaXQgaW1nRXhpc3RzKGljb24uaHJlZikpKSB7XG4gICAgcmV0dXJuIGljb24uaHJlZjtcbiAgfSAvLyBTZWFyY2ggdGhyb3VnaCBhdmFpbGFibGUgaWNvbnMgaW4gbm8gcGFydGljdWxhciBvcmRlclxuXG5cbiAgaWNvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaGVhZCA+IGxpbmtbcmVsPVwiaWNvblwiXScpKS5maW5kKF9pY29uID0+IEJvb2xlYW4oX2ljb24uaHJlZikpO1xuXG4gIGlmIChpY29uICYmIChhd2FpdCBpbWdFeGlzdHMoaWNvbi5ocmVmKSkpIHtcbiAgICByZXR1cm4gaWNvbi5ocmVmO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEdldHMgc2l0ZSBtZXRhZGF0YSBhbmQgcmV0dXJucyBpdFxuICpcbiAqL1xuXG5cbmNvbnN0IGdldFNpdGVNZXRhZGF0YSA9IGFzeW5jICgpID0+ICh7XG4gIG5hbWU6IGdldFNpdGVOYW1lKHdpbmRvdyksXG4gIGljb246IGF3YWl0IGdldFNpdGVJY29uKHdpbmRvdylcbn0pO1xuLyoqXG4gKiBTZW5kcyBzaXRlIG1ldGFkYXRhIG92ZXIgYW4gUlBDIHJlcXVlc3QuXG4gKi9cblxuXG5hc3luYyBmdW5jdGlvbiBzZW5kU2l0ZU1ldGFkYXRhKGVuZ2luZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGRvbWFpbk1ldGFkYXRhID0gYXdhaXQgZ2V0U2l0ZU1ldGFkYXRhKCk7IC8vIGNhbGwgZW5naW5lLmhhbmRsZSBkaXJlY3RseSB0byBhdm9pZCBub3JtYWwgUlBDIHJlcXVlc3QgaGFuZGxpbmdcblxuICAgIGVuZ2luZS5oYW5kbGUoe1xuICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgIGlkOiBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpLFxuICAgICAgbWV0aG9kOiBcIndhbGxldF9zZW5kRG9tYWluTWV0YWRhdGFcIixcbiAgICAgIHBhcmFtczogZG9tYWluTWV0YWRhdGFcbiAgICB9LCBOT09QKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3Ioe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZXMuZXJyb3JzLnNlbmRTaXRlTWV0YWRhdGEoKSxcbiAgICAgIG9yaWdpbmFsRXJyb3I6IGVycm9yXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgX2V4Y2x1ZGVkID0gW1wiaG9zdFwiLCBcImNoYWluSWRcIiwgXCJuZXR3b3JrTmFtZVwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbmNvbnN0IGRlZmF1bHRWZXJpZmllcnMgPSB7XG4gIFtMT0dJTl9QUk9WSURFUi5HT09HTEVdOiB0cnVlLFxuICBbTE9HSU5fUFJPVklERVIuRkFDRUJPT0tdOiB0cnVlLFxuICBbTE9HSU5fUFJPVklERVIuUkVERElUXTogdHJ1ZSxcbiAgW0xPR0lOX1BST1ZJREVSLlRXSVRDSF06IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5ESVNDT1JEXTogdHJ1ZVxufTtcbmNvbnN0IGlmcmFtZUludGVncml0eSA9IFwic2hhMzg0LW8wMkRKeVhJUmxYL1psemJPNmk5UG01d0wvbUErdVpqVFFjeDQwSHcwVUVaOEpad1RrV0lKMWdwZis0V1VnZzhcIjtcbmNvbnN0IGV4cGVjdGVkQ2FjaGVDb250cm9sSGVhZGVyID0gXCJtYXgtYWdlPTM2MDBcIjtcbmNvbnN0IFVOU0FGRV9NRVRIT0RTID0gW1wiZXRoX3NlbmRUcmFuc2FjdGlvblwiLCBcImV0aF9zaWduVHlwZWREYXRhXCIsIFwiZXRoX3NpZ25UeXBlZERhdGFfdjNcIiwgXCJldGhfc2lnblR5cGVkRGF0YV92NFwiLCBcInBlcnNvbmFsX3NpZ25cIiwgXCJldGhfZ2V0RW5jcnlwdGlvblB1YmxpY0tleVwiLCBcImV0aF9kZWNyeXB0XCJdO1xuY29uc3QgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSBzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpOyAvLyBwcmVsb2FkIGZvciBpZnJhbWUgZG9lc24ndCB3b3JrIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTU5MzI2N1xuXG4oYXN5bmMgZnVuY3Rpb24gcHJlTG9hZElmcmFtZSgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gICAgY29uc3QgdG9ydXNJZnJhbWVIdG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgY29uc3Qge1xuICAgICAgdG9ydXNVcmxcbiAgICB9ID0gYXdhaXQgZ2V0VG9ydXNVcmwoXCJwcm9kdWN0aW9uXCIsIHtcbiAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICAgIGhhc2g6IGlmcmFtZUludGVncml0eSxcbiAgICAgIHZlcnNpb246IFwiXCJcbiAgICB9KTtcbiAgICB0b3J1c0lmcmFtZUh0bWwuaHJlZiA9IFwiXCIuY29uY2F0KHRvcnVzVXJsLCBcIi9wb3B1cFwiKTtcbiAgICB0b3J1c0lmcmFtZUh0bWwuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgIHRvcnVzSWZyYW1lSHRtbC50eXBlID0gXCJ0ZXh0L2h0bWxcIjtcbiAgICB0b3J1c0lmcmFtZUh0bWwucmVsID0gXCJwcmVmZXRjaFwiO1xuXG4gICAgaWYgKHRvcnVzSWZyYW1lSHRtbC5yZWxMaXN0ICYmIHRvcnVzSWZyYW1lSHRtbC5yZWxMaXN0LnN1cHBvcnRzKSB7XG4gICAgICBpZiAodG9ydXNJZnJhbWVIdG1sLnJlbExpc3Quc3VwcG9ydHMoXCJwcmVmZXRjaFwiKSkge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRvcnVzSWZyYW1lSHRtbCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZy53YXJuKGVycm9yKTtcbiAgfVxufSkoKTtcblxuY2xhc3MgVG9ydXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQge1xuICAgICAgYnV0dG9uUG9zaXRpb24gPSBCVVRUT05fUE9TSVRJT04uQk9UVE9NX0xFRlQsXG4gICAgICBtb2RhbFpJbmRleCA9IDk5OTk5LFxuICAgICAgYXBpS2V5ID0gXCJ0b3J1cy1kZWZhdWx0XCJcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ1dHRvblBvc2l0aW9uXCIsIEJVVFRPTl9QT1NJVElPTi5CT1RUT01fTEVGVCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c1VybFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNJZnJhbWVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0eWxlTGlua1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNMb2dnZWRJblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNJbml0aWFsaXplZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNXaWRnZXRWaXNpYmlsaXR5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0FsZXJ0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJub2RlRGV0YWlsTWFuYWdlclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNKc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBpS2V5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtb2RhbFpJbmRleFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxlcnRaSW5kZXhcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzQWxlcnRDb250YWluZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSWZyYW1lRnVsbFNjcmVlblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2hpdGVMYWJlbFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmVxdWVzdGVkVmVyaWZpZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImN1cnJlbnRWZXJpZmllclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW1iZWRUcmFuc2xhdGlvbnNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV0aGVyZXVtXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwcm92aWRlclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29tbXVuaWNhdGlvbk11eFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNMb2dpbkNhbGxiYWNrXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkYXBwU3RvcmFnZUtleVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGF5bWVudFByb3ZpZGVyc1wiLCBjb25maWd1cmF0aW9uLnBheW1lbnRQcm92aWRlcnMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibG9naW5IaW50XCIsIFwiXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXNlV2FsbGV0Q29ubmVjdFwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5idXR0b25Qb3NpdGlvbiA9IGJ1dHRvblBvc2l0aW9uO1xuICAgIHRoaXMudG9ydXNVcmwgPSBcIlwiO1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlOyAvLyBldGhlcmV1bS5lbmFibGUgd29ya2luZ1xuXG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7IC8vIGluaXQgZG9uZVxuXG4gICAgdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHkgPSB0cnVlO1xuICAgIHRoaXMucmVxdWVzdGVkVmVyaWZpZXIgPSBcIlwiO1xuICAgIHRoaXMuY3VycmVudFZlcmlmaWVyID0gXCJcIjtcbiAgICB0aGlzLm5vZGVEZXRhaWxNYW5hZ2VyID0gbmV3IE5vZGVEZXRhaWxNYW5hZ2VyKCk7XG4gICAgdGhpcy50b3J1c0pzID0gbmV3IFRvcnVzSnMoe1xuICAgICAgbWV0YWRhdGFIb3N0OiBcImh0dHBzOi8vbWV0YWRhdGEudG9yLnVzXCIsXG4gICAgICBhbGxvd0hvc3Q6IFwiaHR0cHM6Ly9zaWduZXIudG9yLnVzL2FwaS9hbGxvd1wiXG4gICAgfSk7XG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgVG9ydXNKcy5zZXRBUElLZXkoYXBpS2V5KTtcbiAgICBzZXRBUElLZXkoYXBpS2V5KTtcbiAgICB0aGlzLm1vZGFsWkluZGV4ID0gbW9kYWxaSW5kZXg7XG4gICAgdGhpcy5hbGVydFpJbmRleCA9IG1vZGFsWkluZGV4ICsgMTAwMDtcbiAgICB0aGlzLmlzSWZyYW1lRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgIHRoaXMuZGFwcFN0b3JhZ2VLZXkgPSBcIlwiO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBsZXQge1xuICAgICAgYnVpbGRFbnYgPSBUT1JVU19CVUlMRF9FTlYuUFJPRFVDVElPTixcbiAgICAgIGVuYWJsZUxvZ2dpbmcgPSBmYWxzZSxcbiAgICAgIC8vIGRlcHJlY2F0ZWQ6IHVzZSBsb2dpbkNvbmZpZyBpbnN0ZWFkXG4gICAgICBlbmFibGVkVmVyaWZpZXJzID0gZGVmYXVsdFZlcmlmaWVycyxcbiAgICAgIG5ldHdvcmsgPSB7XG4gICAgICAgIGhvc3Q6IFwibWFpbm5ldFwiLFxuICAgICAgICBjaGFpbklkOiBudWxsLFxuICAgICAgICBuZXR3b3JrTmFtZTogXCJcIixcbiAgICAgICAgYmxvY2tFeHBsb3JlcjogXCJcIixcbiAgICAgICAgdGlja2VyOiBcIlwiLFxuICAgICAgICB0aWNrZXJOYW1lOiBcIlwiXG4gICAgICB9LFxuICAgICAgbG9naW5Db25maWcgPSB7fSxcbiAgICAgIHNob3dUb3J1c0J1dHRvbiA9IHRydWUsXG4gICAgICBpbnRlZ3JpdHkgPSB7XG4gICAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICAgICAgaGFzaDogaWZyYW1lSW50ZWdyaXR5LFxuICAgICAgICB2ZXJzaW9uOiBcIlwiXG4gICAgICB9LFxuICAgICAgd2hpdGVMYWJlbCxcbiAgICAgIHNraXBUS2V5ID0gZmFsc2UsXG4gICAgICB1c2VMb2NhbFN0b3JhZ2UgPSBmYWxzZSxcbiAgICAgIHVzZVdhbGxldENvbm5lY3QgPSBmYWxzZVxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQpIHRocm93IG5ldyBFcnJvcihcIkFscmVhZHkgaW5pdGlhbGl6ZWRcIik7XG4gICAgY29uc3Qge1xuICAgICAgdG9ydXNVcmwsXG4gICAgICBsb2dMZXZlbFxuICAgIH0gPSBhd2FpdCBnZXRUb3J1c1VybChidWlsZEVudiwgaW50ZWdyaXR5KTtcbiAgICBsb2cuaW5mbyh0b3J1c1VybCwgXCJ1cmwgbG9hZGVkXCIpO1xuICAgIHRoaXMudG9ydXNVcmwgPSB0b3J1c1VybDtcbiAgICB0aGlzLndoaXRlTGFiZWwgPSB3aGl0ZUxhYmVsO1xuICAgIHRoaXMudXNlV2FsbGV0Q29ubmVjdCA9IHVzZVdhbGxldENvbm5lY3Q7XG4gICAgbG9nLnNldERlZmF1bHRMZXZlbChsb2dMZXZlbCk7XG4gICAgaWYgKGVuYWJsZUxvZ2dpbmcpIGxvZy5lbmFibGVBbGwoKTtlbHNlIGxvZy5kaXNhYmxlQWxsKCk7XG4gICAgdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHkgPSBzaG93VG9ydXNCdXR0b247XG4gICAgbGV0IGRhcHBTdG9yYWdlS2V5ID0gXCJcIjtcblxuICAgIGlmIChpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSAmJiB1c2VMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUtleSA9IFwiXCIuY29uY2F0KGNvbmZpZ3VyYXRpb24ubG9jYWxTdG9yYWdlS2V5UHJlZml4KS5jb25jYXQod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgIGNvbnN0IHN0b3JlZEtleSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VLZXkpO1xuICAgICAgaWYgKHN0b3JlZEtleSkgZGFwcFN0b3JhZ2VLZXkgPSBzdG9yZWRLZXk7ZWxzZSB7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZEtleSA9IFwidG9ydXMtYXBwLVwiLmNvbmNhdChnZXRQcmVvcGVuSW5zdGFuY2VJZCgpKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgZ2VuZXJhdGVkS2V5KTtcbiAgICAgICAgZGFwcFN0b3JhZ2VLZXkgPSBnZW5lcmF0ZWRLZXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kYXBwU3RvcmFnZUtleSA9IGRhcHBTdG9yYWdlS2V5O1xuICAgIGNvbnN0IHRvcnVzSWZyYW1lVXJsID0gbmV3IFVSTCh0b3J1c1VybCk7XG4gICAgaWYgKHRvcnVzSWZyYW1lVXJsLnBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSkgdG9ydXNJZnJhbWVVcmwucGF0aG5hbWUgKz0gXCJwb3B1cFwiO2Vsc2UgdG9ydXNJZnJhbWVVcmwucGF0aG5hbWUgKz0gXCIvcG9wdXBcIjtcblxuICAgIGlmIChkYXBwU3RvcmFnZUtleSkge1xuICAgICAgdG9ydXNJZnJhbWVVcmwuaGFzaCA9IFwiI2RhcHBTdG9yYWdlS2V5PVwiLmNvbmNhdChkYXBwU3RvcmFnZUtleSk7XG4gICAgfSAvLyBJZnJhbWUgY29kZVxuXG5cbiAgICB0aGlzLnRvcnVzSWZyYW1lID0gaHRtbFRvRWxlbWVudChcIjxpZnJhbWVcXG4gICAgICAgIGlkPVxcXCJ0b3J1c0lmcmFtZVxcXCJcXG4gICAgICAgIGFsbG93PVwiLmNvbmNhdCh1c2VXYWxsZXRDb25uZWN0ID8gXCJjYW1lcmFcIiA6IFwiXCIsIFwiXFxuICAgICAgICBjbGFzcz1cXFwidG9ydXNJZnJhbWVcXFwiXFxuICAgICAgICBzcmM9XFxcIlwiKS5jb25jYXQodG9ydXNJZnJhbWVVcmwuaHJlZiwgXCJcXFwiXFxuICAgICAgICBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IHJpZ2h0OiAwOyB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAwOyB6LWluZGV4OiBcIikuY29uY2F0KHRoaXMubW9kYWxaSW5kZXgsIFwiXFxcIlxcbiAgICAgID48L2lmcmFtZT5cIikpO1xuICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lciA9IGh0bWxUb0VsZW1lbnQoJzxkaXYgaWQ9XCJ0b3J1c0FsZXJ0Q29udGFpbmVyXCI+PC9kaXY+Jyk7XG4gICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCJ6LWluZGV4XCIsIHRoaXMuYWxlcnRaSW5kZXgudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgbGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIuY29uY2F0KHRvcnVzVXJsLCBcIi9jc3Mvd2lkZ2V0LmNzc1wiKSk7XG4gICAgdGhpcy5zdHlsZUxpbmsgPSBsaW5rO1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRMYW5ndWFnZSA9IGdldFVzZXJMYW5ndWFnZSgpLFxuICAgICAgY3VzdG9tVHJhbnNsYXRpb25zID0ge31cbiAgICB9ID0gdGhpcy53aGl0ZUxhYmVsIHx8IHt9O1xuICAgIGNvbnN0IG1lcmdlZFRyYW5zbGF0aW9ucyA9IGRlZXBtZXJnZShjb25maWd1cmF0aW9uLnRyYW5zbGF0aW9ucywgY3VzdG9tVHJhbnNsYXRpb25zKTtcbiAgICBjb25zdCBsYW5ndWFnZVRyYW5zbGF0aW9ucyA9IG1lcmdlZFRyYW5zbGF0aW9uc1tkZWZhdWx0TGFuZ3VhZ2VdIHx8IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRpb25zW2dldFVzZXJMYW5ndWFnZSgpXTtcbiAgICB0aGlzLmVtYmVkVHJhbnNsYXRpb25zID0gbGFuZ3VhZ2VUcmFuc2xhdGlvbnMuZW1iZWQ7XG5cbiAgICBjb25zdCBoYW5kbGVTZXR1cCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGRvY3VtZW50UmVhZHkoKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudG9ydXNJZnJhbWUub25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIC8vIG9ubHkgZG8gdGhpcyBpZiBpZnJhbWUgaXMgbm90IGZ1bGwgc2NyZWVuXG4gICAgICAgICAgdGhpcy5fc2V0dXBXZWIzKCk7XG5cbiAgICAgICAgICBjb25zdCBpbml0U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcImluaXRfc3RyZWFtXCIpO1xuICAgICAgICAgIGluaXRTdHJlYW0ub24oXCJkYXRhXCIsIGNodW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgIH0gPSBjaHVuaztcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiaW5pdF9jb21wbGV0ZVwiICYmIGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAvLyByZXNvbHZlIHByb21pc2VcbiAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuKTtcblxuICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbml0U3RyZWFtLndyaXRlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiaW5pdF9zdHJlYW1cIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZW5hYmxlZFZlcmlmaWVycyxcbiAgICAgICAgICAgICAgbG9naW5Db25maWcsXG4gICAgICAgICAgICAgIHdoaXRlTGFiZWw6IHRoaXMud2hpdGVMYWJlbCxcbiAgICAgICAgICAgICAgYnV0dG9uUG9zaXRpb246IHRoaXMuYnV0dG9uUG9zaXRpb24sXG4gICAgICAgICAgICAgIHRvcnVzV2lkZ2V0VmlzaWJpbGl0eTogdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHksXG4gICAgICAgICAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICAgICAgICAgIHNraXBUS2V5LFxuICAgICAgICAgICAgICBuZXR3b3JrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5zdHlsZUxpbmspO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvcnVzSWZyYW1lKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoYnVpbGRFbnYgPT09IFwicHJvZHVjdGlvblwiICYmIGludGVncml0eS5jaGVjaykge1xuICAgICAgLy8gaGFja3kgc29sdXRpb24gdG8gY2hlY2sgZm9yIGlmcmFtZSBpbnRlZ3JpdHlcbiAgICAgIGNvbnN0IGZldGNoVXJsID0gXCJcIi5jb25jYXQodG9ydXNVcmwsIFwiL3BvcHVwXCIpO1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGZldGNoVXJsLCB7XG4gICAgICAgIGNhY2hlOiBcInJlbG9hZFwiXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3AuaGVhZGVycy5nZXQoXCJDYWNoZS1Db250cm9sXCIpICE9PSBleHBlY3RlZENhY2hlQ29udHJvbEhlYWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIENhY2hlLUNvbnRyb2wgaGVhZGVycywgZ290IFwiLmNvbmNhdChyZXNwLmhlYWRlcnMuZ2V0KFwiQ2FjaGUtQ29udHJvbFwiKSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc3AudGV4dCgpO1xuICAgICAgY29uc3QgY2FsY3VsYXRlZEludGVncml0eSA9IG1haW4oe1xuICAgICAgICBhbGdvcml0aG1zOiBbXCJzaGEzODRcIl1cbiAgICAgIH0sIHJlc3BvbnNlKTtcbiAgICAgIGxvZy5pbmZvKGNhbGN1bGF0ZWRJbnRlZ3JpdHksIFwiaW50ZWdyaXR5XCIpO1xuXG4gICAgICBpZiAoY2FsY3VsYXRlZEludGVncml0eSA9PT0gaW50ZWdyaXR5Lmhhc2gpIHtcbiAgICAgICAgYXdhaXQgaGFuZGxlU2V0dXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbml0KCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludGVncml0eSBjaGVjayBmYWlsZWRcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IGhhbmRsZVNldHVwKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIGxldCB7XG4gICAgICB2ZXJpZmllciA9IFwiXCIsXG4gICAgICBsb2dpbl9oaW50OiBsb2dpbkhpbnQgPSBcIlwiXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHRocm93IG5ldyBFcnJvcihcIkNhbGwgaW5pdCgpIGZpcnN0XCIpO1xuICAgIHRoaXMucmVxdWVzdGVkVmVyaWZpZXIgPSB2ZXJpZmllcjtcbiAgICB0aGlzLmxvZ2luSGludCA9IGxvZ2luSGludDtcbiAgICByZXR1cm4gdGhpcy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgaGFzIG5vdCBsb2dnZWQgaW4geWV0XCIpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2dPdXRTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwibG9nb3V0XCIpO1xuICAgICAgbG9nT3V0U3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJsb2dPdXRcIlxuICAgICAgfSk7XG4gICAgICBjb25zdCBzdGF0dXNTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwic3RhdHVzXCIpO1xuXG4gICAgICBjb25zdCBzdGF0dXNTdHJlYW1IYW5kbGVyID0gc3RhdHVzID0+IHtcbiAgICAgICAgaWYgKCFzdGF0dXMubG9nZ2VkSW4pIHtcbiAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWZXJpZmllciA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IFwiXCI7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlNvbWUgRXJyb3IgT2NjdXJlZFwiKSk7XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVTdHJlYW0oc3RhdHVzU3RyZWFtLCBcImRhdGFcIiwgc3RhdHVzU3RyZWFtSGFuZGxlcik7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjbGVhblVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgIGF3YWl0IHRoaXMubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhckluaXQoKTtcbiAgfVxuXG4gIGNsZWFySW5pdCgpIHtcbiAgICBmdW5jdGlvbiBpc0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudCh0aGlzLnN0eWxlTGluaykgJiYgd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5zdHlsZUxpbmspKSB7XG4gICAgICB0aGlzLnN0eWxlTGluay5yZW1vdmUoKTtcbiAgICAgIHRoaXMuc3R5bGVMaW5rID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQodGhpcy50b3J1c0lmcmFtZSkgJiYgd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy50b3J1c0lmcmFtZSkpIHtcbiAgICAgIHRoaXMudG9ydXNJZnJhbWUucmVtb3ZlKCk7XG4gICAgICB0aGlzLnRvcnVzSWZyYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQodGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyKSAmJiB3aW5kb3cuZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIpKSB7XG4gICAgICB0aGlzLnRvcnVzQWxlcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gIH1cblxuICBoaWRlVG9ydXNCdXR0b24oKSB7XG4gICAgdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHkgPSBmYWxzZTtcblxuICAgIHRoaXMuX3NlbmRXaWRnZXRWaXNpYmlsaXR5U3RhdHVzKGZhbHNlKTtcblxuICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcbiAgfVxuXG4gIHNob3dUb3J1c0J1dHRvbigpIHtcbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgICB0aGlzLl9zZW5kV2lkZ2V0VmlzaWJpbGl0eVN0YXR1cyh0cnVlKTtcblxuICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcbiAgfVxuXG4gIHNldFByb3ZpZGVyKCkge1xuICAgIGxldCBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGxldCB7XG4gICAgICBob3N0ID0gXCJtYWlubmV0XCIsXG4gICAgICBjaGFpbklkID0gbnVsbCxcbiAgICAgIG5ldHdvcmtOYW1lID0gXCJcIlxuICAgIH0gPSBfcmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvdmlkZXJDaGFuZ2VTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwicHJvdmlkZXJfY2hhbmdlXCIpO1xuXG4gICAgICBjb25zdCBoYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgfSA9IGNodW5rLmRhdGE7XG4gICAgICAgIGxvZy5pbmZvKGNodW5rKTtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJzb21lIGVycm9yIG9jY3VyZWRcIikpO1xuICAgICAgfTtcblxuICAgICAgaGFuZGxlU3RyZWFtKHByb3ZpZGVyQ2hhbmdlU3RyZWFtLCBcImRhdGFcIiwgaGFuZGxlcik7XG4gICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19QUk9WSURFUl9DSEFOR0VfV0lORE9XXG4gICAgICB9KTtcblxuICAgICAgcHJvdmlkZXJDaGFuZ2VTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcInNob3dfcHJvdmlkZXJfY2hhbmdlXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuZXR3b3JrOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIGhvc3QsXG4gICAgICAgICAgICBjaGFpbklkLFxuICAgICAgICAgICAgbmV0d29ya05hbWVcbiAgICAgICAgICB9LCByZXN0KSxcbiAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZCxcbiAgICAgICAgICBvdmVycmlkZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93V2FsbGV0KHBhdGgpIHtcbiAgICBsZXQgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjb25zdCBzaG93V2FsbGV0U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInNob3dfd2FsbGV0XCIpO1xuICAgIGNvbnN0IGZpbmFsUGF0aCA9IHBhdGggPyBcIi9cIi5jb25jYXQocGF0aCkgOiBcIlwiO1xuICAgIHNob3dXYWxsZXRTdHJlYW0ud3JpdGUoe1xuICAgICAgbmFtZTogXCJzaG93X3dhbGxldFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBwYXRoOiBmaW5hbFBhdGhcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNob3dXYWxsZXRIYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwic2hvd193YWxsZXRfaW5zdGFuY2VcIikge1xuICAgICAgICAvLyBMZXQgdGhlIGVycm9yIHByb3BvZ2F0ZSB1cCAoaGVuY2UsIG5vIHRyeSBjYXRjaClcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGluc3RhbmNlSWRcbiAgICAgICAgfSA9IGNodW5rLmRhdGE7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTChcIlwiLmNvbmNhdCh0aGlzLnRvcnVzVXJsLCBcIi93YWxsZXRcIikuY29uY2F0KGZpbmFsUGF0aCkpOyAvLyBVc2luZyBVUkwgY29uc3RydWN0b3IgdG8gcHJldmVudCBqcyBpbmplY3Rpb24gYW5kIGFsbG93IHBhcmFtZXRlciB2YWxpZGF0aW9uLiFcblxuICAgICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiaW50ZWdyaXR5XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImluc3RhbmNlSWRcIiwgaW5zdGFuY2VJZCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHgsIHBhcmFtc1t4XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmRhcHBTdG9yYWdlS2V5KSB7XG4gICAgICAgICAgZmluYWxVcmwuaGFzaCA9IFwiI2RhcHBTdG9yYWdlS2V5PVwiLmNvbmNhdCh0aGlzLmRhcHBTdG9yYWdlS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhbGxldFdpbmRvdyA9IG5ldyBQb3B1cEhhbmRsZXIoe1xuICAgICAgICAgIHVybDogZmluYWxVcmwsXG4gICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX0RFRkFVTFRfV0FMTEVUX1dJTkRPV1xuICAgICAgICB9KTtcbiAgICAgICAgd2FsbGV0V2luZG93Lm9wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaGFuZGxlU3RyZWFtKHNob3dXYWxsZXRTdHJlYW0sIFwiZGF0YVwiLCBzaG93V2FsbGV0SGFuZGxlcik7XG4gIH1cblxuICBhc3luYyBnZXRQdWJsaWNBZGRyZXNzKF9yZWYyKSB7XG4gICAgbGV0IHtcbiAgICAgIHZlcmlmaWVyLFxuICAgICAgdmVyaWZpZXJJZCxcbiAgICAgIGlzRXh0ZW5kZWQgPSBmYWxzZVxuICAgIH0gPSBfcmVmMjtcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uc3VwcG9ydGVkVmVyaWZpZXJMaXN0LmluY2x1ZGVzKHZlcmlmaWVyKSB8fCAhV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVBbdmVyaWZpZXJdKSB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCB2ZXJpZmllclwiKTtcbiAgICBjb25zdCBub2RlRGV0YWlscyA9IGF3YWl0IHRoaXMubm9kZURldGFpbE1hbmFnZXIuZ2V0Tm9kZURldGFpbHMoe1xuICAgICAgdmVyaWZpZXIsXG4gICAgICB2ZXJpZmllcklkXG4gICAgfSk7XG4gICAgY29uc3QgZW5kcG9pbnRzID0gbm9kZURldGFpbHMudG9ydXNOb2RlRW5kcG9pbnRzO1xuICAgIGNvbnN0IHRvcnVzTm9kZVB1YnMgPSBub2RlRGV0YWlscy50b3J1c05vZGVQdWI7XG4gICAgY29uc3Qgd2FsbGV0VmVyaWZpZXIgPSB2ZXJpZmllcjtcbiAgICBjb25zdCBvcGVubG9naW5WZXJpZmllciA9IFdBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQW3ZlcmlmaWVyXTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1YxVXNlciA9IGF3YWl0IHRoaXMudG9ydXNKcy5nZXRVc2VyVHlwZUFuZEFkZHJlc3MoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCB7XG4gICAgICAgIHZlcmlmaWVyOiB3YWxsZXRWZXJpZmllcixcbiAgICAgICAgdmVyaWZpZXJJZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChleGlzdGluZ1YxVXNlci50eXBlT2ZVc2VyID09PSBcInYxXCIpIHtcbiAgICAgICAgaWYgKCFpc0V4dGVuZGVkKSByZXR1cm4gZXhpc3RpbmdWMVVzZXIuYWRkcmVzcztcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nVjFVc2VyO1xuICAgICAgfSAvLyB3ZSBkb24ndCBzdXBwb3J0IHYyIHVzZXJzIHdpdGggdjEgdmVyaWZpZXJzIHNvIGdldCBvciBhc3NpZ24gdGhlIGtleSBmb3IgdjIgdXNlciBvbiB2MiBgdmVyaWZpZXJgXG5cblxuICAgICAgY29uc3QgdjJVc2VyID0gYXdhaXQgdGhpcy50b3J1c0pzLmdldFVzZXJUeXBlQW5kQWRkcmVzcyhlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIHtcbiAgICAgICAgdmVyaWZpZXI6IG9wZW5sb2dpblZlcmlmaWVyLFxuICAgICAgICB2ZXJpZmllcklkXG4gICAgICB9LCB0cnVlKTtcbiAgICAgIGlmICghaXNFeHRlbmRlZCkgcmV0dXJuIHYyVXNlci5hZGRyZXNzO1xuICAgICAgcmV0dXJuIHYyVXNlcjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpKSB7XG4gICAgICAgIC8vIGlmIHVzZXIgZG9lc24ndCBoYXZlIGtleSB0aGVuIGFzc2lnbiBpdCB3aXRoIHYyIHZlcmlmaWVyXG4gICAgICAgIGNvbnN0IG5ld1YyVXNlciA9IGF3YWl0IHRoaXMudG9ydXNKcy5nZXRVc2VyVHlwZUFuZEFkZHJlc3MoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCB7XG4gICAgICAgICAgdmVyaWZpZXI6IG9wZW5sb2dpblZlcmlmaWVyLFxuICAgICAgICAgIHZlcmlmaWVySWRcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIGlmICghaXNFeHRlbmRlZCkgcmV0dXJuIG5ld1YyVXNlci5hZGRyZXNzO1xuICAgICAgICByZXR1cm4gbmV3VjJVc2VyO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBnZXRVc2VySW5mbyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgY29uc3QgdXNlckluZm9BY2Nlc3NTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidXNlcl9pbmZvX2FjY2Vzc1wiKTtcbiAgICAgICAgdXNlckluZm9BY2Nlc3NTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgIG5hbWU6IFwidXNlcl9pbmZvX2FjY2Vzc19yZXF1ZXN0XCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXNlckluZm9BY2Nlc3NIYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGFwcHJvdmVkLFxuICAgICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgICByZWplY3RlZCxcbiAgICAgICAgICAgICAgbmV3UmVxdWVzdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gPSBjaHVuaztcblxuICAgICAgICAgIGlmIChuYW1lID09PSBcInVzZXJfaW5mb19hY2Nlc3NfcmVzcG9uc2VcIikge1xuICAgICAgICAgICAgaWYgKGFwcHJvdmVkKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocGF5bG9hZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIHJlamVjdGVkIHRoZSByZXF1ZXN0XCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICBjb25zdCB1c2VySW5mb1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ1c2VyX2luZm9cIik7XG5cbiAgICAgICAgICAgICAgY29uc3QgdXNlckluZm9IYW5kbGVyID0gaGFuZGxlckNodW5rID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlckNodW5rLm5hbWUgPT09IFwidXNlcl9pbmZvX3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyQ2h1bmsuZGF0YS5hcHByb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGhhbmRsZXJDaHVuay5kYXRhLnBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgcmVqZWN0ZWQgdGhlIHJlcXVlc3RcIikpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBoYW5kbGVTdHJlYW0odXNlckluZm9TdHJlYW0sIFwiZGF0YVwiLCB1c2VySW5mb0hhbmRsZXIpO1xuICAgICAgICAgICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19QUk9WSURFUl9DSEFOR0VfV0lORE9XXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHVzZXJJbmZvU3RyZWFtLndyaXRlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInVzZXJfaW5mb19yZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlU3RyZWFtKHVzZXJJbmZvQWNjZXNzU3RyZWFtLCBcImRhdGFcIiwgdXNlckluZm9BY2Nlc3NIYW5kbGVyKTtcbiAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiVXNlciBoYXMgbm90IGxvZ2dlZCBpbiB5ZXRcIikpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhdGVUb3B1cChwcm92aWRlciwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICBpc1ZhbGlkXG4gICAgICAgIH0gPSB2YWxpZGF0ZVBheW1lbnRQcm92aWRlcihwcm92aWRlciwgcGFyYW1zKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KGVycm9ycykpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b3B1cFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ0b3B1cFwiKTtcblxuICAgICAgICBjb25zdCB0b3B1cEhhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwidG9wdXBfcmVzcG9uc2VcIikge1xuICAgICAgICAgICAgaWYgKGNodW5rLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICByZXNvbHZlKGNodW5rLmRhdGEuc3VjY2Vzcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGNodW5rLmRhdGEuZXJyb3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlU3RyZWFtKHRvcHVwU3RyZWFtLCBcImRhdGFcIiwgdG9wdXBIYW5kbGVyKTtcbiAgICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCk7XG5cbiAgICAgICAgdG9wdXBTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgIG5hbWU6IFwidG9wdXBfcmVxdWVzdFwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHByb3ZpZGVyLFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJUb3J1cyBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0XCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGxvZ2luV2l0aFByaXZhdGVLZXkobG9naW5QYXJhbXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcml2YXRlS2V5LFxuICAgICAgdXNlckluZm9cbiAgICB9ID0gbG9naW5QYXJhbXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaWYgKEJ1ZmZlci5mcm9tKHByaXZhdGVLZXksIFwiaGV4XCIpLmxlbmd0aCAhPT0gMzIpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBwcml2YXRlIGtleSwgUGxlYXNlIHByb3ZpZGUgYSAzMiBieXRlIHZhbGlkIHNlY3AyNWsxIHByaXZhdGUga2V5XCIpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2dpblByaXZLZXlTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwibG9naW5fd2l0aF9wcml2YXRlX2tleVwiKTtcblxuICAgICAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwibG9naW5fd2l0aF9wcml2YXRlX2tleV9yZXNwb25zZVwiKSB7XG4gICAgICAgICAgICBpZiAoY2h1bmsuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoY2h1bmsuZGF0YS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoY2h1bmsuZGF0YS5lcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVTdHJlYW0obG9naW5Qcml2S2V5U3RyZWFtLCBcImRhdGFcIiwgbG9naW5IYW5kbGVyKTtcbiAgICAgICAgbG9naW5Qcml2S2V5U3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcImxvZ2luX3dpdGhfcHJpdmF0ZV9rZXlfcmVxdWVzdFwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHByaXZhdGVLZXksXG4gICAgICAgICAgICB1c2VySW5mb1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlRvcnVzIGlzIG5vdCBpbml0aWFsaXplZCB5ZXRcIikpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2hvd1dhbGxldENvbm5lY3RTY2FubmVyKCkge1xuICAgIGlmICghdGhpcy51c2VXYWxsZXRDb25uZWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJTZXQgYHVzZVdhbGxldENvbm5lY3RgIGFzIHRydWUgaW4gaW5pdCBmdW5jdGlvbiBvcHRpb25zIHRvIHVzZSB3YWxsZXQgY29ubmVjdCBzY2FubmVyXCIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICAgIGNvbnN0IHdhbGxldENvbm5lY3RTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwid2FsbGV0X2Nvbm5lY3Rfc3RyZWFtXCIpO1xuXG4gICAgICAgIGNvbnN0IHdhbGxldENvbm5lY3RIYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICAgIGlmIChjaHVuay5uYW1lID09PSBcIndhbGxldF9jb25uZWN0X3N0cmVhbV9yZXNcIikge1xuICAgICAgICAgICAgaWYgKGNodW5rLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICByZXNvbHZlKGNodW5rLmRhdGEuc3VjY2Vzcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGNodW5rLmRhdGEuZXJyb3IpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVTdHJlYW0od2FsbGV0Q29ubmVjdFN0cmVhbSwgXCJkYXRhXCIsIHdhbGxldENvbm5lY3RIYW5kbGVyKTtcbiAgICAgICAgd2FsbGV0Q29ubmVjdFN0cmVhbS53cml0ZSh7XG4gICAgICAgICAgbmFtZTogXCJ3YWxsZXRfY29ubmVjdF9zdHJlYW1fcmVxXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZSh0cnVlKTtcbiAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiVXNlciBoYXMgbm90IGxvZ2dlZCBpbiB5ZXRcIikpO1xuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCkge1xuICAgIGxldCB7XG4gICAgICB1cmwsXG4gICAgICB0YXJnZXQsXG4gICAgICBmZWF0dXJlc1xuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgaWYgKHByZW9wZW5JbnN0YW5jZUlkKSB7XG4gICAgICBjb25zdCB3aW5kb3dTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwid2luZG93XCIpO1xuICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybCB8fCBcIlwiLmNvbmNhdCh0aGlzLnRvcnVzVXJsLCBcIi9yZWRpcmVjdD9wcmVvcGVuSW5zdGFuY2VJZD1cIikuY29uY2F0KHByZW9wZW5JbnN0YW5jZUlkKSk7XG5cbiAgICAgIGlmICh0aGlzLmRhcHBTdG9yYWdlS2V5KSB7XG4gICAgICAgIC8vIElmIG11bHRpcGxlIGluc3RhbmNlcywgaXQgcmV0dXJucyB0aGUgZmlyc3Qgb25lXG4gICAgICAgIGlmIChmaW5hbFVybC5oYXNoKSBmaW5hbFVybC5oYXNoICs9IFwiJmRhcHBTdG9yYWdlS2V5PVwiLmNvbmNhdCh0aGlzLmRhcHBTdG9yYWdlS2V5KTtlbHNlIGZpbmFsVXJsLmhhc2ggPSBcIiNkYXBwU3RvcmFnZUtleT1cIi5jb25jYXQodGhpcy5kYXBwU3RvcmFnZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbmRsZWRXaW5kb3cgPSBuZXcgUG9wdXBIYW5kbGVyKHtcbiAgICAgICAgdXJsOiBmaW5hbFVybCxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBmZWF0dXJlc1xuICAgICAgfSk7XG4gICAgICBoYW5kbGVkV2luZG93Lm9wZW4oKTtcblxuICAgICAgaWYgKCFoYW5kbGVkV2luZG93LndpbmRvdykge1xuICAgICAgICB0aGlzLl9jcmVhdGVQb3B1cEJsb2NrQWxlcnQocHJlb3Blbkluc3RhbmNlSWQsIGZpbmFsVXJsLmhyZWYpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93U3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJvcGVuZWRfd2luZG93XCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY2xvc2VIYW5kbGVyID0gX3JlZjMgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkOiByZWNlaXZlZElkLFxuICAgICAgICAgIGNsb3NlXG4gICAgICAgIH0gPSBfcmVmMztcblxuICAgICAgICBpZiAocmVjZWl2ZWRJZCA9PT0gcHJlb3Blbkluc3RhbmNlSWQgJiYgY2xvc2UpIHtcbiAgICAgICAgICBoYW5kbGVkV2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgd2luZG93U3RyZWFtLnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLCBjbG9zZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3dTdHJlYW0ub24oXCJkYXRhXCIsIGNsb3NlSGFuZGxlcik7XG4gICAgICBoYW5kbGVkV2luZG93Lm9uY2UoXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvd1N0cmVhbS53cml0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWQsXG4gICAgICAgICAgICBjbG9zZWQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3dTdHJlYW0ucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsIGNsb3NlSGFuZGxlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2V0RW1iZWRXaGl0ZUxhYmVsKGVsZW1lbnQpIHtcbiAgICAvLyBTZXQgd2hpdGVsYWJlbFxuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lXG4gICAgfSA9IHRoaXMud2hpdGVMYWJlbCB8fCB7fTtcblxuICAgIGlmICh0aGVtZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpc0RhcmsgPSBmYWxzZSxcbiAgICAgICAgY29sb3JzID0ge31cbiAgICAgIH0gPSB0aGVtZTtcbiAgICAgIGlmIChpc0RhcmspIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvcnVzLWRhcmtcIik7XG4gICAgICBpZiAoY29sb3JzLnRvcnVzQnJhbmQxKSBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS10b3J1cy1icmFuZC0xXCIsIGNvbG9ycy50b3J1c0JyYW5kMSk7XG4gICAgICBpZiAoY29sb3JzLnRvcnVzR3JheTIpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRvcnVzLWdyYXktMlwiLCBjb2xvcnMudG9ydXNHcmF5Mik7XG4gICAgfVxuICB9XG5cbiAgX2dldExvZ29VcmwoKSB7XG4gICAgdmFyIF90aGlzJHdoaXRlTGFiZWwsIF90aGlzJHdoaXRlTGFiZWwkdGhlbTtcblxuICAgIGxldCBsb2dvVXJsID0gXCJcIi5jb25jYXQodGhpcy50b3J1c1VybCwgXCIvaW1hZ2VzL3RvcnVzX2ljb24tYmx1ZS5zdmdcIik7XG5cbiAgICBpZiAoKF90aGlzJHdoaXRlTGFiZWwgPSB0aGlzLndoaXRlTGFiZWwpICE9PSBudWxsICYmIF90aGlzJHdoaXRlTGFiZWwgIT09IHZvaWQgMCAmJiAoX3RoaXMkd2hpdGVMYWJlbCR0aGVtID0gX3RoaXMkd2hpdGVMYWJlbC50aGVtZSkgIT09IG51bGwgJiYgX3RoaXMkd2hpdGVMYWJlbCR0aGVtICE9PSB2b2lkIDAgJiYgX3RoaXMkd2hpdGVMYWJlbCR0aGVtLmlzRGFyaykge1xuICAgICAgdmFyIF90aGlzJHdoaXRlTGFiZWwyO1xuXG4gICAgICBsb2dvVXJsID0gKChfdGhpcyR3aGl0ZUxhYmVsMiA9IHRoaXMud2hpdGVMYWJlbCkgPT09IG51bGwgfHwgX3RoaXMkd2hpdGVMYWJlbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHdoaXRlTGFiZWwyLmxvZ29MaWdodCkgfHwgbG9nb1VybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF90aGlzJHdoaXRlTGFiZWwzO1xuXG4gICAgICBsb2dvVXJsID0gKChfdGhpcyR3aGl0ZUxhYmVsMyA9IHRoaXMud2hpdGVMYWJlbCkgPT09IG51bGwgfHwgX3RoaXMkd2hpdGVMYWJlbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHdoaXRlTGFiZWwzLmxvZ29EYXJrKSB8fCBsb2dvVXJsO1xuICAgIH1cblxuICAgIHJldHVybiBsb2dvVXJsO1xuICB9XG5cbiAgX3NlbmRXaWRnZXRWaXNpYmlsaXR5U3RhdHVzKHN0YXR1cykge1xuICAgIGNvbnN0IHRvcnVzV2lkZ2V0VmlzaWJpbGl0eVN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ0b3J1cy13aWRnZXQtdmlzaWJpbGl0eVwiKTtcbiAgICB0b3J1c1dpZGdldFZpc2liaWxpdHlTdHJlYW0ud3JpdGUoe1xuICAgICAgZGF0YTogc3RhdHVzXG4gICAgfSk7XG4gIH1cblxuICBfZGlzcGxheUlmcmFtZSgpIHtcbiAgICBsZXQgaXNGdWxsID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICBjb25zdCBzdHlsZSA9IHt9OyAvLyBzZXQgcGhhc2VcblxuICAgIGlmICghaXNGdWxsKSB7XG4gICAgICBzdHlsZS5kaXNwbGF5ID0gdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHkgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICAgIHN0eWxlLmhlaWdodCA9IFwiNzBweFwiO1xuICAgICAgc3R5bGUud2lkdGggPSBcIjcwcHhcIjtcblxuICAgICAgc3dpdGNoICh0aGlzLmJ1dHRvblBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgQlVUVE9OX1BPU0lUSU9OLlRPUF9MRUZUOlxuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICBzdHlsZS5ib3R0b20gPSBcImF1dG9cIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEJVVFRPTl9QT1NJVElPTi5UT1BfUklHSFQ6XG4gICAgICAgICAgc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQlVUVE9OX1BPU0lUSU9OLkJPVFRPTV9SSUdIVDpcbiAgICAgICAgICBzdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS50b3AgPSBcImF1dG9cIjtcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uQk9UVE9NX0xFRlQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS50b3AgPSBcImF1dG9cIjtcbiAgICAgICAgICBzdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIHN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgIHN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICAgIHN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMudG9ydXNJZnJhbWUuc3R5bGUsIHN0eWxlKTtcbiAgICB0aGlzLmlzSWZyYW1lRnVsbFNjcmVlbiA9IGlzRnVsbDtcbiAgfVxuXG4gIF9zZXR1cFdlYjMoKSB7XG4gICAgbG9nLmluZm8oXCJzZXR1cFdlYjMgcnVubmluZ1wiKTsgLy8gc2V0dXAgYmFja2dyb3VuZCBjb25uZWN0aW9uXG5cbiAgICBjb25zdCBtZXRhbWFza1N0cmVhbSA9IG5ldyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0oe1xuICAgICAgbmFtZTogXCJlbWJlZF9tZXRhbWFza1wiLFxuICAgICAgdGFyZ2V0OiBcImlmcmFtZV9tZXRhbWFza1wiLFxuICAgICAgdGFyZ2V0V2luZG93OiB0aGlzLnRvcnVzSWZyYW1lLmNvbnRlbnRXaW5kb3csXG4gICAgICB0YXJnZXRPcmlnaW46IG5ldyBVUkwodGhpcy50b3J1c1VybCkub3JpZ2luXG4gICAgfSk7IC8vIER1ZSB0byBjb21wYXRpYmlsaXR5IHJlYXNvbnMsIHdlIHNob3VsZCBub3Qgc2V0IHVwIG11bHRpcGxleGluZyBvbiB3aW5kb3cubWV0YW1hc2tzdHJlYW1cbiAgICAvLyBiZWNhdXNlIHRoZSBNZXRhbWFza0lucGFnZVByb3ZpZGVyIGFsc28gYXR0ZW1wdHMgdG8gZG8gc28uXG4gICAgLy8gV2UgY3JlYXRlIGFub3RoZXIgTG9jYWxNZXNzYWdlRHVwbGV4U3RyZWFtIGZvciBjb21tdW5pY2F0aW9uIGJldHdlZW4gZGFwcCA8PiBpZnJhbWVcblxuICAgIGNvbnN0IGNvbW11bmljYXRpb25TdHJlYW0gPSBuZXcgQmFzZVBvc3RNZXNzYWdlU3RyZWFtKHtcbiAgICAgIG5hbWU6IFwiZW1iZWRfY29tbVwiLFxuICAgICAgdGFyZ2V0OiBcImlmcmFtZV9jb21tXCIsXG4gICAgICB0YXJnZXRXaW5kb3c6IHRoaXMudG9ydXNJZnJhbWUuY29udGVudFdpbmRvdyxcbiAgICAgIHRhcmdldE9yaWdpbjogbmV3IFVSTCh0aGlzLnRvcnVzVXJsKS5vcmlnaW5cbiAgICB9KTsgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIEdvdGNoaSA6KVxuICAgIC8vIHdpbmRvdy5tZXRhbWFza1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvblN0cmVhbVxuICAgIC8vIGNvbXBvc2UgdGhlIGlucGFnZSBwcm92aWRlclxuXG4gICAgY29uc3QgaW5wYWdlUHJvdmlkZXIgPSBuZXcgVG9ydXNJbnBhZ2VQcm92aWRlcihtZXRhbWFza1N0cmVhbSk7IC8vIGRldGVjdCBldGhfcmVxdWVzdEFjY291bnRzIGFuZCBwaXBlIHRvIGVuYWJsZSBmb3Igbm93XG5cbiAgICBjb25zdCBkZXRlY3RBY2NvdW50UmVxdWVzdFByb3RvdHlwZU1vZGlmaWVyID0gbSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGlucGFnZVByb3ZpZGVyW21dO1xuXG4gICAgICBpbnBhZ2VQcm92aWRlclttXSA9IGZ1bmN0aW9uIHByb3ZpZGVyRnVuYyhtZXRob2QpIHtcbiAgICAgICAgaWYgKG1ldGhvZCAmJiBtZXRob2QgPT09IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIGlucGFnZVByb3ZpZGVyLmVuYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIFttZXRob2QsIC4uLmFyZ3NdKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGRldGVjdEFjY291bnRSZXF1ZXN0UHJvdG90eXBlTW9kaWZpZXIoXCJzZW5kXCIpO1xuICAgIGRldGVjdEFjY291bnRSZXF1ZXN0UHJvdG90eXBlTW9kaWZpZXIoXCJzZW5kQXN5bmNcIik7XG5cbiAgICBpbnBhZ2VQcm92aWRlci5lbmFibGUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBJZiB1c2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluLCB3ZSBhc3N1bWUgdGhleSBoYXZlIGdpdmVuIGFjY2VzcyB0byB0aGUgd2Vic2l0ZVxuICAgICAgICBpbnBhZ2VQcm92aWRlci5zZW5kQXN5bmMoe1xuICAgICAgICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgICAgICAgaWQ6IGdldFByZW9wZW5JbnN0YW5jZUlkKCksXG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgICBwYXJhbXM6IFtdXG4gICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcmVzdWx0OiByZXNcbiAgICAgICAgICB9ID0gcmVzcG9uc2UgfHwge307XG5cbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlcykgJiYgcmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaXMgYWxyZWFkeSByZWh5ZHJhdGVkLCByZXNvbHZlIHRoaXNcbiAgICAgICAgICAgIC8vIGVsc2Ugd2FpdCBmb3Igc29tZXRoaW5nIHRvIGJlIHdyaXR0ZW4gdG8gc3RhdHVzIHN0cmVhbVxuICAgICAgICAgICAgY29uc3QgaGFuZGxlTG9naW5DYiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWVzdGVkVmVyaWZpZXIgIT09IFwiXCIgJiYgdGhpcy5jdXJyZW50VmVyaWZpZXIgIT09IHRoaXMucmVxdWVzdGVkVmVyaWZpZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICByZXF1ZXN0ZWRWZXJpZmllclxuICAgICAgICAgICAgICAgIH0gPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9uby1wcm9taXNlLWluLWNhbGxiYWNrXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ291dCgpIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL2Fsd2F5cy1yZXR1cm5cbiAgICAgICAgICAgICAgICAudGhlbihfID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdGVkVmVyaWZpZXIgPSByZXF1ZXN0ZWRWZXJpZmllcjtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvd0xvZ2luUG9wdXAodHJ1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgICAgaGFuZGxlTG9naW5DYigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvZ2luQ2FsbGJhY2sgPSBoYW5kbGVMb2dpbkNiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzZXQgdXAgbGlzdGVuZXIgZm9yIGxvZ2luXG4gICAgICAgICAgICB0aGlzLl9zaG93TG9naW5Qb3B1cCh0cnVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaW5wYWdlUHJvdmlkZXIudHJ5UHJlb3BlbkhhbmRsZSA9IChwYXlsb2FkLCBjYikgPT4ge1xuICAgICAgY29uc3QgX3BheWxvYWQgPSBwYXlsb2FkO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3BheWxvYWQpICYmIFVOU0FGRV9NRVRIT0RTLmluY2x1ZGVzKF9wYXlsb2FkLm1ldGhvZCkpIHtcbiAgICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfQ09ORklSTV9XSU5ET1dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3BheWxvYWQucHJlb3Blbkluc3RhbmNlSWQgPSBwcmVvcGVuSW5zdGFuY2VJZDtcbiAgICAgIH1cblxuICAgICAgaW5wYWdlUHJvdmlkZXIuX3JwY0VuZ2luZS5oYW5kbGUoX3BheWxvYWQsIGNiKTtcbiAgICB9OyAvLyBXb3JrIGFyb3VuZCBmb3Igd2ViM0AxLjAgZGVsZXRpbmcgdGhlIGJvdW5kIGBzZW5kQXN5bmNgIGJ1dCBub3QgdGhlIHVuYm91bmRcbiAgICAvLyBgc2VuZEFzeW5jYCBtZXRob2Qgb24gdGhlIHByb3RvdHlwZSwgY2F1c2luZyBgdGhpc2AgcmVmZXJlbmNlIGlzc3VlcyB3aXRoIGRyaXp6bGVcblxuXG4gICAgY29uc3QgcHJveGllZElucGFnZVByb3ZpZGVyID0gbmV3IFByb3h5KGlucGFnZVByb3ZpZGVyLCB7XG4gICAgICAvLyBzdHJhaWdodCB1cCBsaWUgdGhhdCB3ZSBkZWxldGVkIHRoZSBwcm9wZXJ0eSBzbyB0aGF0IGl0IGRvZXNudFxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgaW4gc3RyaWN0IG1vZGVcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAoKSA9PiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5ldGhlcmV1bSA9IHByb3hpZWRJbnBhZ2VQcm92aWRlcjtcbiAgICBjb25zdCBjb21tdW5pY2F0aW9uTXV4ID0gc2V0dXBNdWx0aXBsZXgoY29tbXVuaWNhdGlvblN0cmVhbSk7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uTXV4ID0gY29tbXVuaWNhdGlvbk11eDtcbiAgICBjb25zdCB3aW5kb3dTdHJlYW0gPSBjb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcIndpbmRvd1wiKTtcbiAgICB3aW5kb3dTdHJlYW0ub24oXCJkYXRhXCIsIGNodW5rID0+IHtcbiAgICAgIGlmIChjaHVuay5uYW1lID09PSBcImNyZWF0ZV93aW5kb3dcIikge1xuICAgICAgICAvLyB1cmwgaXMgdGhlIHVybCB3ZSBuZWVkIHRvIG9wZW5cbiAgICAgICAgLy8gd2UgY2FuIHBhc3MgdGhlIGZpbmFsIHVybCB1cGZyb250IHNvIHRoYXQgaXQgcmVtb3ZlcyB0aGUgc3RlcCBvZiByZWRpcmVjdGluZyB0byAvcmVkaXJlY3QgYW5kIHdhaXRpbmcgZm9yIGZpbmFsVXJsXG4gICAgICAgIHRoaXMuX2NyZWF0ZVBvcHVwQmxvY2tBbGVydChjaHVuay5kYXRhLnByZW9wZW5JbnN0YW5jZUlkLCBjaHVuay5kYXRhLnVybCk7XG4gICAgICB9XG4gICAgfSk7IC8vIHNob3cgdG9ydXMgd2lkZ2V0IGlmIGJ1dHRvbiBjbGlja2VkXG5cbiAgICBjb25zdCB3aWRnZXRTdHJlYW0gPSBjb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcIndpZGdldFwiKTtcbiAgICB3aWRnZXRTdHJlYW0ub24oXCJkYXRhXCIsIGNodW5rID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YVxuICAgICAgfSA9IGNodW5rO1xuXG4gICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKGRhdGEpO1xuICAgIH0pOyAvLyBTaG93IHRvcnVzIGJ1dHRvbiBpZiB3YWxsZXQgaGFzIGJlZW4gaHlkcmF0ZWQvZGV0ZWN0ZWRcblxuICAgIGNvbnN0IHN0YXR1c1N0cmVhbSA9IGNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwic3RhdHVzXCIpO1xuICAgIHN0YXR1c1N0cmVhbS5vbihcImRhdGFcIiwgc3RhdHVzID0+IHtcbiAgICAgIC8vIGxvZ2luXG4gICAgICBpZiAoc3RhdHVzLmxvZ2dlZEluKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHN0YXR1cy5sb2dnZWRJbjtcbiAgICAgICAgdGhpcy5jdXJyZW50VmVyaWZpZXIgPSBzdGF0dXMudmVyaWZpZXI7XG4gICAgICB9IC8vIGxvZ291dFxuICAgICAgZWxzZSB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG5cbiAgICAgIGlmICh0aGlzLmlzTG9naW5DYWxsYmFjaykge1xuICAgICAgICB0aGlzLmlzTG9naW5DYWxsYmFjaygpO1xuICAgICAgICBkZWxldGUgdGhpcy5pc0xvZ2luQ2FsbGJhY2s7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5wcm92aWRlciA9IHByb3hpZWRJbnBhZ2VQcm92aWRlcjtcbiAgICBpZiAodGhpcy5wcm92aWRlci5zaG91bGRTZW5kTWV0YWRhdGEpIHNlbmRTaXRlTWV0YWRhdGEodGhpcy5wcm92aWRlci5fcnBjRW5naW5lKTtcblxuICAgIGlucGFnZVByb3ZpZGVyLl9pbml0aWFsaXplU3RhdGUoKTtcblxuICAgIGxvZy5kZWJ1ZyhcIlRvcnVzIC0gaW5qZWN0ZWQgcHJvdmlkZXJcIik7XG4gIH1cblxuICBfc2hvd0xvZ2luUG9wdXAoY2FsbGVkRnJvbUVtYmVkLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXJyLFxuICAgICAgICBzZWxlY3RlZEFkZHJlc3NcbiAgICAgIH0gPSBkYXRhO1xuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGxvZy5lcnJvcihlcnIpO1xuICAgICAgICBpZiAocmVqZWN0KSByZWplY3QoZXJyKTtcbiAgICAgIH0gLy8gcmV0dXJucyBhbiBhcnJheSAoY2F1c2UgYWNjb3VudHMgZXhwZWN0cyBpdClcbiAgICAgIGVsc2UgaWYgKHJlc29sdmUpIHJlc29sdmUoW3NlbGVjdGVkQWRkcmVzc10pO1xuXG4gICAgICBpZiAodGhpcy5pc0lmcmFtZUZ1bGxTY3JlZW4pIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb2F1dGhTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwib2F1dGhcIik7XG5cbiAgICBpZiAoIXRoaXMucmVxdWVzdGVkVmVyaWZpZXIpIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUodHJ1ZSk7XG5cbiAgICAgIGhhbmRsZVN0cmVhbShvYXV0aFN0cmVhbSwgXCJkYXRhXCIsIGxvZ2luSGFuZGxlcik7XG4gICAgICBvYXV0aFN0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwib2F1dGhfbW9kYWxcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNhbGxlZEZyb21FbWJlZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlU3RyZWFtKG9hdXRoU3RyZWFtLCBcImRhdGFcIiwgbG9naW5IYW5kbGVyKTtcbiAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkKTtcblxuICAgICAgb2F1dGhTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcIm9hdXRoXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYWxsZWRGcm9tRW1iZWQsXG4gICAgICAgICAgdmVyaWZpZXI6IHRoaXMucmVxdWVzdGVkVmVyaWZpZXIsXG4gICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWQsXG4gICAgICAgICAgbG9naW5faGludDogdGhpcy5sb2dpbkhpbnRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZVBvcHVwQmxvY2tBbGVydChwcmVvcGVuSW5zdGFuY2VJZCwgdXJsKSB7XG4gICAgY29uc3QgbG9nb1VybCA9IHRoaXMuX2dldExvZ29VcmwoKTtcblxuICAgIGNvbnN0IHRvcnVzQWxlcnQgPSBodG1sVG9FbGVtZW50KCc8ZGl2IGlkPVwidG9ydXNBbGVydFwiIGNsYXNzPVwidG9ydXMtYWxlcnQtLXYyXCI+JyArIFwiPGRpdiBpZD1cXFwidG9ydXNBbGVydF9fbG9nb1xcXCI+PGltZyBzcmM9XFxcIlwiLmNvbmNhdChsb2dvVXJsLCBcIlxcXCIgLz48L2Rpdj5cIikgKyBcIjxkaXY+XCIgKyBcIjxoMSBpZD1cXFwidG9ydXNBbGVydF9fdGl0bGVcXFwiPlwiLmNvbmNhdCh0aGlzLmVtYmVkVHJhbnNsYXRpb25zLmFjdGlvblJlcXVpcmVkLCBcIjwvaDE+XCIpICsgXCI8cCBpZD1cXFwidG9ydXNBbGVydF9fZGVzY1xcXCI+XCIuY29uY2F0KHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMucGVuZGluZ0FjdGlvbiwgXCI8L3A+XCIpICsgXCI8L2Rpdj5cIiArIFwiPC9kaXY+XCIpO1xuICAgIGNvbnN0IHN1Y2Nlc3NBbGVydCA9IGh0bWxUb0VsZW1lbnQoXCI8ZGl2PjxhIGlkPVxcXCJ0b3J1c0FsZXJ0X19idG5cXFwiPlwiLmNvbmNhdCh0aGlzLmVtYmVkVHJhbnNsYXRpb25zLmNvbnRpbnVlLCBcIjwvYT48L2Rpdj5cIikpO1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGh0bWxUb0VsZW1lbnQoJzxkaXYgaWQ9XCJ0b3J1c0FsZXJ0X19idG4tY29udGFpbmVyXCI+PC9kaXY+Jyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Y2Nlc3NBbGVydCk7XG4gICAgdG9ydXNBbGVydC5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4gICAgY29uc3QgYmluZE9uTG9hZCA9ICgpID0+IHtcbiAgICAgIHN1Y2Nlc3NBbGVydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQsIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19DT05GSVJNX1dJTkRPV1xuICAgICAgICB9KTtcblxuICAgICAgICB0b3J1c0FsZXJ0LnJlbW92ZSgpO1xuICAgICAgICBpZiAodGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9zZXRFbWJlZFdoaXRlTGFiZWwodG9ydXNBbGVydCk7XG5cbiAgICBjb25zdCBhdHRhY2hPbkxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3J1c0FsZXJ0KTtcbiAgICB9O1xuXG4gICAgcnVuT25Mb2FkKGF0dGFjaE9uTG9hZCk7XG4gICAgcnVuT25Mb2FkKGJpbmRPbkxvYWQpO1xuICB9XG5cbn1cblxuZXhwb3J0IHsgQlVUVE9OX1BPU0lUSU9OLCBMT0dJTl9QUk9WSURFUiwgUEFZTUVOVF9QUk9WSURFUiwgVE9SVVNfQlVJTERfRU5WLCBUb3J1c0lucGFnZVByb3ZpZGVyLCBXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUCwgV0FMTEVUX1ZFUklGSUVSUywgVG9ydXMgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9ydXMuZXNtLmpzLm1hcFxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBUb3J1cyBmcm9tIFwiQHRvcnVzbGFicy90b3J1cy1lbWJlZFwiO1xuZXhwb3J0IHZhciBnZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgcmV0dXJuIFsyLCBuZXcgVG9ydXMoKV07XG4gICAgfSk7XG59KTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRvcnVzUHJvdmlkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBFQyA9IHJlcXVpcmUoXCJlbGxpcHRpY1wiKS5lYztcblxudmFyIGVjID0gbmV3IEVDKFwic2VjcDI1NmsxXCIpO1xudmFyIGJyb3dzZXJDcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0byB8fCB7fTtcbnZhciBzdWJ0bGUgPSBicm93c2VyQ3J5cHRvLnN1YnRsZSB8fCBicm93c2VyQ3J5cHRvLndlYmtpdFN1YnRsZTtcblxudmFyIG5vZGVDcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxuY29uc3QgRUNfR1JPVVBfT1JERVIgPSBCdWZmZXIuZnJvbSgnZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmViYWFlZGNlNmFmNDhhMDNiYmZkMjVlOGNkMDM2NDE0MScsICdoZXgnKTtcbmNvbnN0IFpFUk8zMiA9IEJ1ZmZlci5hbGxvYygzMiwgMCk7XG5cbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCBcIkFzc2VydGlvbiBmYWlsZWRcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTY2FsYXIgKHgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih4KSAmJiB4Lmxlbmd0aCA9PT0gMzI7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXkpIHtcbiAgaWYgKCFpc1NjYWxhcihwcml2YXRlS2V5KSlcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcHJpdmF0ZUtleS5jb21wYXJlKFpFUk8zMikgPiAwICYmIC8vID4gMFxuICBwcml2YXRlS2V5LmNvbXBhcmUoRUNfR1JPVVBfT1JERVIpIDwgMDsgLy8gPCBHXG59XG5cbi8vIENvbXBhcmUgdHdvIGJ1ZmZlcnMgaW4gY29uc3RhbnQgdGltZSB0byBwcmV2ZW50IHRpbWluZyBhdHRhY2tzLlxuZnVuY3Rpb24gZXF1YWxDb25zdFRpbWUoYjEsIGIyKSB7XG4gIGlmIChiMS5sZW5ndGggIT09IGIyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcmVzID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBiMS5sZW5ndGg7IGkrKykge1xuICAgIHJlcyB8PSBiMVtpXSBeIGIyW2ldOyAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gIH1cbiAgcmV0dXJuIHJlcyA9PT0gMDtcbn1cblxuLyogVGhpcyBtdXN0IGNoZWNrIGlmIHdlJ3JlIGluIHRoZSBicm93c2VyIG9yXG5ub3QsIHNpbmNlIHRoZSBmdW5jdGlvbnMgYXJlIGRpZmZlcmVudCBhbmQgZG9lc1xubm90IGNvbnZlcnQgdXNpbmcgYnJvd3NlcmlmeSAqL1xuZnVuY3Rpb24gcmFuZG9tQnl0ZXMoc2l6ZSkge1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gIGlmICh0eXBlb2YgYnJvd3NlckNyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKG5vZGVDcnlwdG8ucmFuZG9tQnl0ZXMoc2l6ZSkpO1xuICB9IGVsc2Uge1xuICAgIGJyb3dzZXJDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycik7XG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIHNoYTUxMihtc2cpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICB2YXIgaGFzaCA9IG5vZGVDcnlwdG8uY3JlYXRlSGFzaCgnc2hhNTEyJyk7XG4gICAgdmFyIHJlc3VsdCA9IGhhc2gudXBkYXRlKG1zZykuZGlnZXN0KCk7XG4gICAgcmVzb2x2ZShuZXcgVWludDhBcnJheShyZXN1bHQpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFlcyhvcCkge1xuICByZXR1cm4gZnVuY3Rpb24oaXYsIGtleSwgZGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICBpZiAoc3VidGxlKSB7XG4gICAgICAgIHZhciBpbXBvcnRBbGdvcml0aG0gPSB7bmFtZTogXCJBRVMtQ0JDXCJ9O1xuICAgICAgICB2YXIga2V5cCA9IHN1YnRsZS5pbXBvcnRLZXkoXCJyYXdcIiwga2V5LCBpbXBvcnRBbGdvcml0aG0sIGZhbHNlLCBbb3BdKTtcbiAgICAgICAgcmV0dXJuIGtleXAudGhlbihmdW5jdGlvbihjcnlwdG9LZXkpIHtcbiAgICAgICAgICB2YXIgZW5jQWxnb3JpdGhtID0ge25hbWU6IFwiQUVTLUNCQ1wiLCBpdjogaXZ9O1xuICAgICAgICAgIHJldHVybiBzdWJ0bGVbb3BdKGVuY0FsZ29yaXRobSwgY3J5cHRvS2V5LCBkYXRhKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXNvbHZlKEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KHJlc3VsdCkpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3AgPT09ICdlbmNyeXB0Jykge1xuICAgICAgICAgIHZhciBjaXBoZXIgPSBub2RlQ3J5cHRvLmNyZWF0ZUNpcGhlcml2KCdhZXMtMjU2LWNiYycsIGtleSwgaXYpO1xuICAgICAgICAgIGxldCBmaXJzdENodW5rID0gY2lwaGVyLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgc2Vjb25kQ2h1bmsgPSBjaXBoZXIuZmluYWwoKTtcbiAgICAgICAgICByZXNvbHZlKEJ1ZmZlci5jb25jYXQoW2ZpcnN0Q2h1bmssIHNlY29uZENodW5rXSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wID09PSAnZGVjcnlwdCcpIHtcbiAgICAgICAgICB2YXIgZGVjaXBoZXIgPSBub2RlQ3J5cHRvLmNyZWF0ZURlY2lwaGVyaXYoJ2Flcy0yNTYtY2JjJywga2V5LCBpdik7XG4gICAgICAgICAgbGV0IGZpcnN0Q2h1bmsgPSBkZWNpcGhlci51cGRhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHNlY29uZENodW5rID0gZGVjaXBoZXIuZmluYWwoKTtcbiAgICAgICAgICByZXNvbHZlKEJ1ZmZlci5jb25jYXQoW2ZpcnN0Q2h1bmssIHNlY29uZENodW5rXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbnZhciBhZXNDYmNFbmNyeXB0ID0gZ2V0QWVzKFwiZW5jcnlwdFwiKTtcbnZhciBhZXNDYmNEZWNyeXB0ID0gZ2V0QWVzKFwiZGVjcnlwdFwiKTtcblxuZnVuY3Rpb24gaG1hY1NoYTI1NlNpZ24oa2V5LCBtc2cpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICB2YXIgaG1hYyA9IG5vZGVDcnlwdG8uY3JlYXRlSG1hYygnc2hhMjU2JywgQnVmZmVyLmZyb20oa2V5KSk7XG4gICAgaG1hYy51cGRhdGUobXNnKTtcbiAgICB2YXIgcmVzdWx0ID0gaG1hYy5kaWdlc3QoKTtcbiAgICByZXNvbHZlKHJlc3VsdCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBobWFjU2hhMjU2VmVyaWZ5KGtleSwgbXNnLCBzaWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICB2YXIgaG1hYyA9IG5vZGVDcnlwdG8uY3JlYXRlSG1hYygnc2hhMjU2JywgQnVmZmVyLmZyb20oa2V5KSk7XG4gICAgaG1hYy51cGRhdGUobXNnKTtcbiAgICB2YXIgZXhwZWN0ZWRTaWcgPSBobWFjLmRpZ2VzdCgpO1xuICAgIHJlc29sdmUoZXF1YWxDb25zdFRpbWUoZXhwZWN0ZWRTaWcsIHNpZykpO1xuICB9KTtcbn1cblxuLyoqXG4gICogR2VuZXJhdGUgYSBuZXcgdmFsaWQgcHJpdmF0ZSBrZXkuIFdpbGwgdXNlIHRoZSB3aW5kb3cuY3J5cHRvIG9yIHdpbmRvdy5tc0NyeXB0byBhcyBzb3VyY2VcbiAgKiBkZXBlbmRpbmcgb24geW91ciBicm93c2VyLlxuICAqIEByZXR1cm4ge0J1ZmZlcn0gQSAzMi1ieXRlIHByaXZhdGUga2V5LlxuICAqIEBmdW5jdGlvblxuICAqL1xuZXhwb3J0cy5nZW5lcmF0ZVByaXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcml2YXRlS2V5ID0gcmFuZG9tQnl0ZXMoMzIpO1xuICB3aGlsZSAoIWlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXkpKSB7XG4gICAgcHJpdmF0ZUtleSA9IHJhbmRvbUJ5dGVzKDMyKTtcbiAgfVxuICByZXR1cm4gcHJpdmF0ZUtleTtcbn07XG5cbnZhciBnZXRQdWJsaWMgPSBleHBvcnRzLmdldFB1YmxpYyA9IGZ1bmN0aW9uKHByaXZhdGVLZXkpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBoYXMgc3luYyBBUEkgc28gd2UgdGhyb3cgYW4gZXJyb3IgaW1tZWRpYXRlbHkuXG4gIGFzc2VydChwcml2YXRlS2V5Lmxlbmd0aCA9PT0gMzIsIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICBhc3NlcnQoaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSksIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAvLyBYWFgoS2FnYW1pKTogYGVsbGlwdGljLnV0aWxzLmVuY29kZWAgcmV0dXJucyBhcnJheSBmb3IgZXZlcnlcbiAgLy8gZW5jb2RpbmcgZXhjZXB0IGBoZXhgLlxuICByZXR1cm4gQnVmZmVyLmZyb20oZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleSkuZ2V0UHVibGljKFwiYXJyXCIpKTtcbn07XG5cbi8qKlxuICogR2V0IGNvbXByZXNzZWQgdmVyc2lvbiBvZiBwdWJsaWMga2V5LlxuICovXG52YXIgZ2V0UHVibGljQ29tcHJlc3NlZCA9IGV4cG9ydHMuZ2V0UHVibGljQ29tcHJlc3NlZCA9IGZ1bmN0aW9uKHByaXZhdGVLZXkpIHsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gIGFzc2VydChwcml2YXRlS2V5Lmxlbmd0aCA9PT0gMzIsIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICBhc3NlcnQoaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSksIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3dhbmRlcmVyL3NlY3AyNTZrMS1ub2RlL2lzc3Vlcy80NlxuICBsZXQgY29tcHJlc3NlZCA9IHRydWU7XG4gIHJldHVybiBCdWZmZXIuZnJvbShlYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5KS5nZXRQdWJsaWMoY29tcHJlc3NlZCwgXCJhcnJcIikpO1xufTtcblxuLy8gTk9URShLYWdhbWkpOiBXZSBkb24ndCB1c2UgcHJvbWlzZSBzaGltIGluIEJyb3dzZXIgaW1wbGVtZW50YXRpb25cbi8vIGJlY2F1c2UgaXQncyBzdXBwb3J0ZWQgbmF0aXZlbHkgaW4gbmV3IGJyb3dzZXJzIChzZWVcbi8vIDxodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9cHJvbWlzZXM+KSBhbmQgd2UgY2FuIHVzZSBvbmx5IG5ldyBicm93c2Vyc1xuLy8gYmVjYXVzZSBvZiB0aGUgV2ViQ3J5cHRvQVBJIChzZWVcbi8vIDxodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9Y3J5cHRvZ3JhcGh5PikuXG5leHBvcnRzLnNpZ24gPSBmdW5jdGlvbihwcml2YXRlS2V5LCBtc2cpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICBhc3NlcnQocHJpdmF0ZUtleS5sZW5ndGggPT09IDMyLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQoaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSksIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAgIGFzc2VydChtc2cubGVuZ3RoID4gMCwgXCJNZXNzYWdlIHNob3VsZCBub3QgYmUgZW1wdHlcIik7XG4gICAgYXNzZXJ0KG1zZy5sZW5ndGggPD0gMzIsIFwiTWVzc2FnZSBpcyB0b28gbG9uZ1wiKTtcbiAgICByZXNvbHZlKEJ1ZmZlci5mcm9tKGVjLnNpZ24obXNnLCBwcml2YXRlS2V5LCB7Y2Fub25pY2FsOiB0cnVlfSkudG9ERVIoKSkpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMudmVyaWZ5ID0gZnVuY3Rpb24ocHVibGljS2V5LCBtc2csIHNpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgYXNzZXJ0KHB1YmxpY0tleS5sZW5ndGggPT09IDY1IHx8IHB1YmxpY0tleS5sZW5ndGggPT09IDMzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIGlmIChwdWJsaWNLZXkubGVuZ3RoID09PSA2NSlcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5WzBdID09PSA0LCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICBpZiAocHVibGljS2V5Lmxlbmd0aCA9PT0gMzMpXG4gICAge1xuICAgICAgYXNzZXJ0KHB1YmxpY0tleVswXSA9PT0gMiB8fCBwdWJsaWNLZXlbMF0gPT09IDMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIGFzc2VydChtc2cubGVuZ3RoID4gMCwgXCJNZXNzYWdlIHNob3VsZCBub3QgYmUgZW1wdHlcIik7XG4gICAgYXNzZXJ0KG1zZy5sZW5ndGggPD0gMzIsIFwiTWVzc2FnZSBpcyB0b28gbG9uZ1wiKTtcbiAgICBpZiAoZWMudmVyaWZ5KG1zZywgc2lnLCBwdWJsaWNLZXkpKSB7XG4gICAgICByZXNvbHZlKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKFwiQmFkIHNpZ25hdHVyZVwiKSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBkZXJpdmUgPSBleHBvcnRzLmRlcml2ZSA9IGZ1bmN0aW9uKHByaXZhdGVLZXlBLCBwdWJsaWNLZXlCKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgYXNzZXJ0KEJ1ZmZlci5pc0J1ZmZlcihwcml2YXRlS2V5QSksIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAgIGFzc2VydChCdWZmZXIuaXNCdWZmZXIocHVibGljS2V5QiksIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgYXNzZXJ0KHByaXZhdGVLZXlBLmxlbmd0aCA9PT0gMzIsIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAgIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5QSksIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAgIGFzc2VydChwdWJsaWNLZXlCLmxlbmd0aCA9PT0gNjUgfHwgcHVibGljS2V5Qi5sZW5ndGggPT09IDMzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIGlmIChwdWJsaWNLZXlCLmxlbmd0aCA9PT0gNjUpXG4gICAge1xuICAgICAgYXNzZXJ0KHB1YmxpY0tleUJbMF0gPT09IDQsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIGlmIChwdWJsaWNLZXlCLmxlbmd0aCA9PT0gMzMpXG4gICAge1xuICAgICAgYXNzZXJ0KHB1YmxpY0tleUJbMF0gPT09IDIgfHwgcHVibGljS2V5QlswXSA9PT0gMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgdmFyIGtleUEgPSBlYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5QSk7XG4gICAgdmFyIGtleUIgPSBlYy5rZXlGcm9tUHVibGljKHB1YmxpY0tleUIpO1xuICAgIHZhciBQeCA9IGtleUEuZGVyaXZlKGtleUIuZ2V0UHVibGljKCkpOyAgLy8gQk4gaW5zdGFuY2VcbiAgICByZXNvbHZlKEJ1ZmZlci5mcm9tKFB4LnRvQXJyYXkoKSkpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZW5jcnlwdCA9IGZ1bmN0aW9uKHB1YmxpY0tleVRvLCBtc2csIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIC8vIFRtcCB2YXJpYWJsZXMgdG8gc2F2ZSBjb250ZXh0IGZyb20gZmxhdCBwcm9taXNlcztcbiAgdmFyIGl2LCBlcGhlbVB1YmxpY0tleSwgY2lwaGVydGV4dCwgbWFjS2V5O1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBlcGhlbVByaXZhdGVLZXkgPSBvcHRzLmVwaGVtUHJpdmF0ZUtleSB8fCByYW5kb21CeXRlcygzMik7XG4gICAgLy8gVGhlcmUgaXMgYSB2ZXJ5IHVubGlrZWx5IHBvc3NpYmlsaXR5IHRoYXQgaXQgaXMgbm90IGEgdmFsaWQga2V5XG4gICAgd2hpbGUoIWlzVmFsaWRQcml2YXRlS2V5KGVwaGVtUHJpdmF0ZUtleSkpXG4gICAge1xuICAgICAgZXBoZW1Qcml2YXRlS2V5ID0gb3B0cy5lcGhlbVByaXZhdGVLZXkgfHwgcmFuZG9tQnl0ZXMoMzIpO1xuICAgIH1cbiAgICBlcGhlbVB1YmxpY0tleSA9IGdldFB1YmxpYyhlcGhlbVByaXZhdGVLZXkpO1xuICAgIHJlc29sdmUoZGVyaXZlKGVwaGVtUHJpdmF0ZUtleSwgcHVibGljS2V5VG8pKTtcbiAgfSkudGhlbihmdW5jdGlvbihQeCkge1xuICAgIHJldHVybiBzaGE1MTIoUHgpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGhhc2gpIHtcbiAgICBpdiA9IG9wdHMuaXYgfHwgcmFuZG9tQnl0ZXMoMTYpO1xuICAgIHZhciBlbmNyeXB0aW9uS2V5ID0gaGFzaC5zbGljZSgwLCAzMik7XG4gICAgbWFjS2V5ID0gaGFzaC5zbGljZSgzMik7XG4gICAgcmV0dXJuIGFlc0NiY0VuY3J5cHQoaXYsIGVuY3J5cHRpb25LZXksIG1zZyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIGNpcGhlcnRleHQgPSBkYXRhO1xuICAgIHZhciBkYXRhVG9NYWMgPSBCdWZmZXIuY29uY2F0KFtpdiwgZXBoZW1QdWJsaWNLZXksIGNpcGhlcnRleHRdKTtcbiAgICByZXR1cm4gaG1hY1NoYTI1NlNpZ24obWFjS2V5LCBkYXRhVG9NYWMpO1xuICB9KS50aGVuKGZ1bmN0aW9uKG1hYykge1xuICAgIHJldHVybiB7XG4gICAgICBpdjogaXYsXG4gICAgICBlcGhlbVB1YmxpY0tleTogZXBoZW1QdWJsaWNLZXksXG4gICAgICBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0LFxuICAgICAgbWFjOiBtYWMsXG4gICAgfTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlY3J5cHQgPSBmdW5jdGlvbihwcml2YXRlS2V5LCBvcHRzKSB7XG4gIC8vIFRtcCB2YXJpYWJsZSB0byBzYXZlIGNvbnRleHQgZnJvbSBmbGF0IHByb21pc2VzO1xuICB2YXIgZW5jcnlwdGlvbktleTtcbiAgcmV0dXJuIGRlcml2ZShwcml2YXRlS2V5LCBvcHRzLmVwaGVtUHVibGljS2V5KS50aGVuKGZ1bmN0aW9uKFB4KSB7XG4gICAgcmV0dXJuIHNoYTUxMihQeCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oaGFzaCkge1xuICAgIGVuY3J5cHRpb25LZXkgPSBoYXNoLnNsaWNlKDAsIDMyKTtcbiAgICB2YXIgbWFjS2V5ID0gaGFzaC5zbGljZSgzMik7XG4gICAgdmFyIGRhdGFUb01hYyA9IEJ1ZmZlci5jb25jYXQoW1xuICAgICAgb3B0cy5pdixcbiAgICAgIG9wdHMuZXBoZW1QdWJsaWNLZXksXG4gICAgICBvcHRzLmNpcGhlcnRleHRcbiAgICBdKTtcbiAgICByZXR1cm4gaG1hY1NoYTI1NlZlcmlmeShtYWNLZXksIGRhdGFUb01hYywgb3B0cy5tYWMpO1xuICB9KS50aGVuKGZ1bmN0aW9uKG1hY0dvb2QpIHtcbiAgICBhc3NlcnQobWFjR29vZCwgXCJCYWQgTUFDXCIpO1xuICAgIHJldHVybiBhZXNDYmNEZWNyeXB0KG9wdHMuaXYsIGVuY3J5cHRpb25LZXksIG9wdHMuY2lwaGVydGV4dCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KG1zZykpO1xuICB9KTtcbn07XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBhZF9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3BhZC1zdHJpbmdcIik7XG5mdW5jdGlvbiBlbmNvZGUoaW5wdXQsIGVuY29kaW5nKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSB2b2lkIDApIHsgZW5jb2RpbmcgPSBcInV0ZjhcIjsgfVxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBmcm9tQmFzZTY0KGlucHV0LnRvU3RyaW5nKFwiYmFzZTY0XCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21CYXNlNjQoQnVmZmVyLmZyb20oaW5wdXQsIGVuY29kaW5nKS50b1N0cmluZyhcImJhc2U2NFwiKSk7XG59XG47XG5mdW5jdGlvbiBkZWNvZGUoYmFzZTY0dXJsLCBlbmNvZGluZykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gdm9pZCAwKSB7IGVuY29kaW5nID0gXCJ1dGY4XCI7IH1cbiAgICByZXR1cm4gQnVmZmVyLmZyb20odG9CYXNlNjQoYmFzZTY0dXJsKSwgXCJiYXNlNjRcIikudG9TdHJpbmcoZW5jb2RpbmcpO1xufVxuZnVuY3Rpb24gdG9CYXNlNjQoYmFzZTY0dXJsKSB7XG4gICAgYmFzZTY0dXJsID0gYmFzZTY0dXJsLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHBhZF9zdHJpbmdfMS5kZWZhdWx0KGJhc2U2NHVybClcbiAgICAgICAgLnJlcGxhY2UoL1xcLS9nLCBcIitcIilcbiAgICAgICAgLnJlcGxhY2UoL18vZywgXCIvXCIpO1xufVxuZnVuY3Rpb24gZnJvbUJhc2U2NChiYXNlNjQpIHtcbiAgICByZXR1cm4gYmFzZTY0XG4gICAgICAgIC5yZXBsYWNlKC89L2csIFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXCsvZywgXCItXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xufVxuZnVuY3Rpb24gdG9CdWZmZXIoYmFzZTY0dXJsKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRvQmFzZTY0KGJhc2U2NHVybCksIFwiYmFzZTY0XCIpO1xufVxudmFyIGJhc2U2NHVybCA9IGVuY29kZTtcbmJhc2U2NHVybC5lbmNvZGUgPSBlbmNvZGU7XG5iYXNlNjR1cmwuZGVjb2RlID0gZGVjb2RlO1xuYmFzZTY0dXJsLnRvQmFzZTY0ID0gdG9CYXNlNjQ7XG5iYXNlNjR1cmwuZnJvbUJhc2U2NCA9IGZyb21CYXNlNjQ7XG5iYXNlNjR1cmwudG9CdWZmZXIgPSB0b0J1ZmZlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2U2NHVybDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gcGFkU3RyaW5nKGlucHV0KSB7XG4gICAgdmFyIHNlZ21lbnRMZW5ndGggPSA0O1xuICAgIHZhciBzdHJpbmdMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgdmFyIGRpZmYgPSBzdHJpbmdMZW5ndGggJSBzZWdtZW50TGVuZ3RoO1xuICAgIGlmICghZGlmZikge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIHZhciBwb3NpdGlvbiA9IHN0cmluZ0xlbmd0aDtcbiAgICB2YXIgcGFkTGVuZ3RoID0gc2VnbWVudExlbmd0aCAtIGRpZmY7XG4gICAgdmFyIHBhZGRlZFN0cmluZ0xlbmd0aCA9IHN0cmluZ0xlbmd0aCArIHBhZExlbmd0aDtcbiAgICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jKHBhZGRlZFN0cmluZ0xlbmd0aCk7XG4gICAgYnVmZmVyLndyaXRlKGlucHV0KTtcbiAgICB3aGlsZSAocGFkTGVuZ3RoLS0pIHtcbiAgICAgICAgYnVmZmVyLndyaXRlKFwiPVwiLCBwb3NpdGlvbisrKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcGFkU3RyaW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvYmFzZTY0dXJsJykuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuXG5mdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFyZyk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBCdWZmZXIuaXNCdWZmZXI7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cbiIsInZhciBvbmNlID0gcmVxdWlyZSgnb25jZScpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbnZhciBpc1JlcXVlc3QgPSBmdW5jdGlvbihzdHJlYW0pIHtcblx0cmV0dXJuIHN0cmVhbS5zZXRIZWFkZXIgJiYgdHlwZW9mIHN0cmVhbS5hYm9ydCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBpc0NoaWxkUHJvY2VzcyA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRyZXR1cm4gc3RyZWFtLnN0ZGlvICYmIEFycmF5LmlzQXJyYXkoc3RyZWFtLnN0ZGlvKSAmJiBzdHJlYW0uc3RkaW8ubGVuZ3RoID09PSAzXG59O1xuXG52YXIgZW9zID0gZnVuY3Rpb24oc3RyZWFtLCBvcHRzLCBjYWxsYmFjaykge1xuXHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHJldHVybiBlb3Moc3RyZWFtLCBudWxsLCBvcHRzKTtcblx0aWYgKCFvcHRzKSBvcHRzID0ge307XG5cblx0Y2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuXG5cdHZhciB3cyA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZTtcblx0dmFyIHJzID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuXHR2YXIgcmVhZGFibGUgPSBvcHRzLnJlYWRhYmxlIHx8IChvcHRzLnJlYWRhYmxlICE9PSBmYWxzZSAmJiBzdHJlYW0ucmVhZGFibGUpO1xuXHR2YXIgd3JpdGFibGUgPSBvcHRzLndyaXRhYmxlIHx8IChvcHRzLndyaXRhYmxlICE9PSBmYWxzZSAmJiBzdHJlYW0ud3JpdGFibGUpO1xuXHR2YXIgY2FuY2VsbGVkID0gZmFsc2U7XG5cblx0dmFyIG9ubGVnYWN5ZmluaXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCFzdHJlYW0ud3JpdGFibGUpIG9uZmluaXNoKCk7XG5cdH07XG5cblx0dmFyIG9uZmluaXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0d3JpdGFibGUgPSBmYWxzZTtcblx0XHRpZiAoIXJlYWRhYmxlKSBjYWxsYmFjay5jYWxsKHN0cmVhbSk7XG5cdH07XG5cblx0dmFyIG9uZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0cmVhZGFibGUgPSBmYWxzZTtcblx0XHRpZiAoIXdyaXRhYmxlKSBjYWxsYmFjay5jYWxsKHN0cmVhbSk7XG5cdH07XG5cblx0dmFyIG9uZXhpdCA9IGZ1bmN0aW9uKGV4aXRDb2RlKSB7XG5cdFx0Y2FsbGJhY2suY2FsbChzdHJlYW0sIGV4aXRDb2RlID8gbmV3IEVycm9yKCdleGl0ZWQgd2l0aCBlcnJvciBjb2RlOiAnICsgZXhpdENvZGUpIDogbnVsbCk7XG5cdH07XG5cblx0dmFyIG9uZXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcblx0XHRjYWxsYmFjay5jYWxsKHN0cmVhbSwgZXJyKTtcblx0fTtcblxuXHR2YXIgb25jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHByb2Nlc3MubmV4dFRpY2sob25jbG9zZW5leHR0aWNrKTtcblx0fTtcblxuXHR2YXIgb25jbG9zZW5leHR0aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKGNhbmNlbGxlZCkgcmV0dXJuO1xuXHRcdGlmIChyZWFkYWJsZSAmJiAhKHJzICYmIChycy5lbmRlZCAmJiAhcnMuZGVzdHJveWVkKSkpIHJldHVybiBjYWxsYmFjay5jYWxsKHN0cmVhbSwgbmV3IEVycm9yKCdwcmVtYXR1cmUgY2xvc2UnKSk7XG5cdFx0aWYgKHdyaXRhYmxlICYmICEod3MgJiYgKHdzLmVuZGVkICYmICF3cy5kZXN0cm95ZWQpKSkgcmV0dXJuIGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBuZXcgRXJyb3IoJ3ByZW1hdHVyZSBjbG9zZScpKTtcblx0fTtcblxuXHR2YXIgb25yZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0c3RyZWFtLnJlcS5vbignZmluaXNoJywgb25maW5pc2gpO1xuXHR9O1xuXG5cdGlmIChpc1JlcXVlc3Qoc3RyZWFtKSkge1xuXHRcdHN0cmVhbS5vbignY29tcGxldGUnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLm9uKCdhYm9ydCcsIG9uY2xvc2UpO1xuXHRcdGlmIChzdHJlYW0ucmVxKSBvbnJlcXVlc3QoKTtcblx0XHRlbHNlIHN0cmVhbS5vbigncmVxdWVzdCcsIG9ucmVxdWVzdCk7XG5cdH0gZWxzZSBpZiAod3JpdGFibGUgJiYgIXdzKSB7IC8vIGxlZ2FjeSBzdHJlYW1zXG5cdFx0c3RyZWFtLm9uKCdlbmQnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdFx0c3RyZWFtLm9uKCdjbG9zZScsIG9ubGVnYWN5ZmluaXNoKTtcblx0fVxuXG5cdGlmIChpc0NoaWxkUHJvY2VzcyhzdHJlYW0pKSBzdHJlYW0ub24oJ2V4aXQnLCBvbmV4aXQpO1xuXG5cdHN0cmVhbS5vbignZW5kJywgb25lbmQpO1xuXHRzdHJlYW0ub24oJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0aWYgKG9wdHMuZXJyb3IgIT09IGZhbHNlKSBzdHJlYW0ub24oJ2Vycm9yJywgb25lcnJvcik7XG5cdHN0cmVhbS5vbignY2xvc2UnLCBvbmNsb3NlKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0Y2FuY2VsbGVkID0gdHJ1ZTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2NvbXBsZXRlJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignYWJvcnQnLCBvbmNsb3NlKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ3JlcXVlc3QnLCBvbnJlcXVlc3QpO1xuXHRcdGlmIChzdHJlYW0ucmVxKSBzdHJlYW0ucmVxLnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2V4aXQnLCBvbmV4aXQpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG5cdH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gZG8gbm90IGVkaXQgLmpzIGZpbGVzIGRpcmVjdGx5IC0gZWRpdCBzcmMvaW5kZXguanN0XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYS5jb25zdHJ1Y3RvciAhPT0gYi5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGxlbmd0aCwgaSwga2V5cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG5cbiAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwKSByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3M7XG4gICAgaWYgKGEudmFsdWVPZiAhPT0gT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mKSByZXR1cm4gYS52YWx1ZU9mKCkgPT09IGIudmFsdWVPZigpO1xuICAgIGlmIChhLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHRydWUgaWYgYm90aCBOYU4sIGZhbHNlIG90aGVyd2lzZVxuICByZXR1cm4gYSE9PWEgJiYgYiE9PWI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc1N0cmVhbSA9IHN0cmVhbSA9PlxuXHRzdHJlYW0gIT09IG51bGwgJiZcblx0dHlwZW9mIHN0cmVhbSA9PT0gJ29iamVjdCcgJiZcblx0dHlwZW9mIHN0cmVhbS5waXBlID09PSAnZnVuY3Rpb24nO1xuXG5pc1N0cmVhbS53cml0YWJsZSA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbShzdHJlYW0pICYmXG5cdHN0cmVhbS53cml0YWJsZSAhPT0gZmFsc2UgJiZcblx0dHlwZW9mIHN0cmVhbS5fd3JpdGUgPT09ICdmdW5jdGlvbicgJiZcblx0dHlwZW9mIHN0cmVhbS5fd3JpdGFibGVTdGF0ZSA9PT0gJ29iamVjdCc7XG5cbmlzU3RyZWFtLnJlYWRhYmxlID0gc3RyZWFtID0+XG5cdGlzU3RyZWFtKHN0cmVhbSkgJiZcblx0c3RyZWFtLnJlYWRhYmxlICE9PSBmYWxzZSAmJlxuXHR0eXBlb2Ygc3RyZWFtLl9yZWFkID09PSAnZnVuY3Rpb24nICYmXG5cdHR5cGVvZiBzdHJlYW0uX3JlYWRhYmxlU3RhdGUgPT09ICdvYmplY3QnO1xuXG5pc1N0cmVhbS5kdXBsZXggPSBzdHJlYW0gPT5cblx0aXNTdHJlYW0ud3JpdGFibGUoc3RyZWFtKSAmJlxuXHRpc1N0cmVhbS5yZWFkYWJsZShzdHJlYW0pO1xuXG5pc1N0cmVhbS50cmFuc2Zvcm0gPSBzdHJlYW0gPT5cblx0aXNTdHJlYW0uZHVwbGV4KHN0cmVhbSkgJiZcblx0dHlwZW9mIHN0cmVhbS5fdHJhbnNmb3JtID09PSAnZnVuY3Rpb24nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyZWFtO1xuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL29wZW5qc2Yub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZCxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2UsXG4gICAgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFzc2lnblZhbHVlYCBleGNlcHQgdGhhdCBpdCBkb2Vzbid0IGFzc2lnblxuICogYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmICgodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZXEob2JqZWN0W2tleV0sIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZXJnZWAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIG1lcmdlZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKG9iamVjdCA9PT0gc291cmNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGJhc2VGb3Ioc291cmNlLCBmdW5jdGlvbihzcmNWYWx1ZSwga2V5KSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICBpZiAoaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgID8gY3VzdG9taXplcihzYWZlR2V0KG9iamVjdCwga2V5KSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgICB9XG4gICAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9LCBrZXlzSW4pO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZU1lcmdlYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIG1lcmdlcyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBtZXJnZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIG1lcmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1lcmdlRnVuYyBUaGUgZnVuY3Rpb24gdG8gbWVyZ2UgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIG1lcmdlRnVuYywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgdmFyIG9ialZhbHVlID0gc2FmZUdldChvYmplY3QsIGtleSksXG4gICAgICBzcmNWYWx1ZSA9IHNhZmVHZXQoc291cmNlLCBrZXkpLFxuICAgICAgc3RhY2tlZCA9IHN0YWNrLmdldChzcmNWYWx1ZSk7XG5cbiAgaWYgKHN0YWNrZWQpIHtcbiAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBzdGFja2VkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICA6IHVuZGVmaW5lZDtcblxuICB2YXIgaXNDb21tb24gPSBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc0NvbW1vbikge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkoc3JjVmFsdWUpLFxuICAgICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgaXNCdWZmZXIoc3JjVmFsdWUpLFxuICAgICAgICBpc1R5cGVkID0gIWlzQXJyICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHNyY1ZhbHVlKTtcblxuICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgaWYgKGlzQXJyIHx8IGlzQnVmZiB8fCBpc1R5cGVkKSB7XG4gICAgICBpZiAoaXNBcnJheShvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGNvcHlBcnJheShvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0J1ZmYpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZUJ1ZmZlcihzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc1R5cGVkKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVUeXBlZEFycmF5KHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHNyY1ZhbHVlKSB8fCBpc0FyZ3VtZW50cyhzcmNWYWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICBpZiAoaXNBcmd1bWVudHMob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdG9QbGFpbk9iamVjdChvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaXNPYmplY3Qob2JqVmFsdWUpIHx8IGlzRnVuY3Rpb24ob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaW5pdENsb25lT2JqZWN0KHNyY1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoaXNDb21tb24pIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICBtZXJnZUZ1bmMobmV3VmFsdWUsIHNyY1ZhbHVlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIHN0YWNrWydkZWxldGUnXShzcmNWYWx1ZSk7XG4gIH1cbiAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAsIHVubGVzcyBga2V5YCBpcyBcIl9fcHJvdG9fX1wiIG9yIFwiY29uc3RydWN0b3JcIi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNhZmVHZXQob2JqZWN0LCBrZXkpIHtcbiAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJyAmJiB0eXBlb2Ygb2JqZWN0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHBsYWluIG9iamVjdCBmbGF0dGVuaW5nIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZ1xuICoga2V5ZWQgcHJvcGVydGllcyBvZiBgdmFsdWVgIHRvIG93biBwcm9wZXJ0aWVzIG9mIHRoZSBwbGFpbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgcGxhaW4gb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBuZXcgRm9vKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIgfVxuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIF8udG9QbGFpbk9iamVjdChuZXcgRm9vKSk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDMgfVxuICovXG5mdW5jdGlvbiB0b1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHZhbHVlLCBrZXlzSW4odmFsdWUpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5hc3NpZ25gIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IG1lcmdlcyBvd24gYW5kXG4gKiBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0cyBpbnRvIHRoZVxuICogZGVzdGluYXRpb24gb2JqZWN0LiBTb3VyY2UgcHJvcGVydGllcyB0aGF0IHJlc29sdmUgdG8gYHVuZGVmaW5lZGAgYXJlXG4gKiBza2lwcGVkIGlmIGEgZGVzdGluYXRpb24gdmFsdWUgZXhpc3RzLiBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IHByb3BlcnRpZXNcbiAqIGFyZSBtZXJnZWQgcmVjdXJzaXZlbHkuIE90aGVyIG9iamVjdHMgYW5kIHZhbHVlIHR5cGVzIGFyZSBvdmVycmlkZGVuIGJ5XG4gKiBhc3NpZ25tZW50LiBTb3VyY2Ugb2JqZWN0cyBhcmUgYXBwbGllZCBmcm9tIGxlZnQgdG8gcmlnaHQuIFN1YnNlcXVlbnRcbiAqIHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjUuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0ge1xuICogICAnYSc6IFt7ICdiJzogMiB9LCB7ICdkJzogNCB9XVxuICogfTtcbiAqXG4gKiB2YXIgb3RoZXIgPSB7XG4gKiAgICdhJzogW3sgJ2MnOiAzIH0sIHsgJ2UnOiA1IH1dXG4gKiB9O1xuICpcbiAqIF8ubWVyZ2Uob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB7ICdhJzogW3sgJ2InOiAyLCAnYyc6IDMgfSwgeyAnZCc6IDQsICdlJzogNSB9XSB9XG4gKi9cbnZhciBtZXJnZSA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCkge1xuICBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KTtcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlO1xuIiwiLypcbiogbG9nbGV2ZWwgLSBodHRwczovL2dpdGh1Yi5jb20vcGltdGVycnkvbG9nbGV2ZWxcbipcbiogQ29weXJpZ2h0IChjKSAyMDEzIFRpbSBQZXJyeVxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4qL1xuKGZ1bmN0aW9uIChyb290LCBkZWZpbml0aW9uKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZGVmaW5pdGlvbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LmxvZyA9IGRlZmluaXRpb24oKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFNsaWdodGx5IGR1YmlvdXMgdHJpY2tzIHRvIGN1dCBkb3duIG1pbmltaXplZCBmaWxlIHNpemVcbiAgICB2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG4gICAgdmFyIHVuZGVmaW5lZFR5cGUgPSBcInVuZGVmaW5lZFwiO1xuICAgIHZhciBpc0lFID0gKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZFR5cGUpICYmICh0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciAhPT0gdW5kZWZpbmVkVHlwZSkgJiYgKFxuICAgICAgICAvVHJpZGVudFxcL3xNU0lFIC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICApO1xuXG4gICAgdmFyIGxvZ01ldGhvZHMgPSBbXG4gICAgICAgIFwidHJhY2VcIixcbiAgICAgICAgXCJkZWJ1Z1wiLFxuICAgICAgICBcImluZm9cIixcbiAgICAgICAgXCJ3YXJuXCIsXG4gICAgICAgIFwiZXJyb3JcIlxuICAgIF07XG5cbiAgICAvLyBDcm9zcy1icm93c2VyIGJpbmQgZXF1aXZhbGVudCB0aGF0IHdvcmtzIGF0IGxlYXN0IGJhY2sgdG8gSUU2XG4gICAgZnVuY3Rpb24gYmluZE1ldGhvZChvYmosIG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IG9ialttZXRob2ROYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QuYmluZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5iaW5kKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKG1ldGhvZCwgb2JqKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBNaXNzaW5nIGJpbmQgc2hpbSBvciBJRTggKyBNb2Rlcm5penIsIGZhbGxiYWNrIHRvIHdyYXBwaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmFwcGx5KG1ldGhvZCwgW29iaiwgYXJndW1lbnRzXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRyYWNlKCkgZG9lc24ndCBwcmludCB0aGUgbWVzc2FnZSBpbiBJRSwgc28gZm9yIHRoYXQgY2FzZSB3ZSBuZWVkIHRvIHdyYXAgaXRcbiAgICBmdW5jdGlvbiB0cmFjZUZvcklFKCkge1xuICAgICAgICBpZiAoY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgIGlmIChjb25zb2xlLmxvZy5hcHBseSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEluIG9sZCBJRSwgbmF0aXZlIGNvbnNvbGUgbWV0aG9kcyB0aGVtc2VsdmVzIGRvbid0IGhhdmUgYXBwbHkoKS5cbiAgICAgICAgICAgICAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuYXBwbHkoY29uc29sZS5sb2csIFtjb25zb2xlLCBhcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uc29sZS50cmFjZSkgY29uc29sZS50cmFjZSgpO1xuICAgIH1cblxuICAgIC8vIEJ1aWxkIHRoZSBiZXN0IGxvZ2dpbmcgbWV0aG9kIHBvc3NpYmxlIGZvciB0aGlzIGVudlxuICAgIC8vIFdoZXJldmVyIHBvc3NpYmxlIHdlIHdhbnQgdG8gYmluZCwgbm90IHdyYXAsIHRvIHByZXNlcnZlIHN0YWNrIHRyYWNlc1xuICAgIGZ1bmN0aW9uIHJlYWxNZXRob2QobWV0aG9kTmFtZSkge1xuICAgICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ2RlYnVnJykge1xuICAgICAgICAgICAgbWV0aG9kTmFtZSA9ICdsb2cnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSB1bmRlZmluZWRUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIE5vIG1ldGhvZCBwb3NzaWJsZSwgZm9yIG5vdyAtIGZpeGVkIGxhdGVyIGJ5IGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXNcbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSAndHJhY2UnICYmIGlzSUUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFjZUZvcklFO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnNvbGVbbWV0aG9kTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGJpbmRNZXRob2QoY29uc29sZSwgbWV0aG9kTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc29sZS5sb2cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGJpbmRNZXRob2QoY29uc29sZSwgJ2xvZycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGVzZSBwcml2YXRlIGZ1bmN0aW9ucyBhbHdheXMgbmVlZCBgdGhpc2AgdG8gYmUgc2V0IHByb3Blcmx5XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTG9nZ2luZ01ldGhvZHMobGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2dNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kTmFtZSA9IGxvZ01ldGhvZHNbaV07XG4gICAgICAgICAgICB0aGlzW21ldGhvZE5hbWVdID0gKGkgPCBsZXZlbCkgP1xuICAgICAgICAgICAgICAgIG5vb3AgOlxuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kRmFjdG9yeShtZXRob2ROYW1lLCBsZXZlbCwgbG9nZ2VyTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgbG9nLmxvZyBhcyBhbiBhbGlhcyBmb3IgbG9nLmRlYnVnXG4gICAgICAgIHRoaXMubG9nID0gdGhpcy5kZWJ1ZztcbiAgICB9XG5cbiAgICAvLyBJbiBvbGQgSUUgdmVyc2lvbnMsIHRoZSBjb25zb2xlIGlzbid0IHByZXNlbnQgdW50aWwgeW91IGZpcnN0IG9wZW4gaXQuXG4gICAgLy8gV2UgYnVpbGQgcmVhbE1ldGhvZCgpIHJlcGxhY2VtZW50cyBoZXJlIHRoYXQgcmVnZW5lcmF0ZSBsb2dnaW5nIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzKG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IHVuZGVmaW5lZFR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlTG9nZ2luZ01ldGhvZHMuY2FsbCh0aGlzLCBsZXZlbCwgbG9nZ2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpc1ttZXRob2ROYW1lXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEJ5IGRlZmF1bHQsIHdlIHVzZSBjbG9zZWx5IGJvdW5kIHJlYWwgbWV0aG9kcyB3aGVyZXZlciBwb3NzaWJsZSwgYW5kXG4gICAgLy8gb3RoZXJ3aXNlIHdlIHdhaXQgZm9yIGEgY29uc29sZSB0byBhcHBlYXIsIGFuZCB0aGVuIHRyeSBhZ2Fpbi5cbiAgICBmdW5jdGlvbiBkZWZhdWx0TWV0aG9kRmFjdG9yeShtZXRob2ROYW1lLCBsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICByZXR1cm4gcmVhbE1ldGhvZChtZXRob2ROYW1lKSB8fFxuICAgICAgICAgICAgICAgZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIExvZ2dlcihuYW1lLCBkZWZhdWx0TGV2ZWwsIGZhY3RvcnkpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBjdXJyZW50TGV2ZWw7XG4gICAgICBkZWZhdWx0TGV2ZWwgPSBkZWZhdWx0TGV2ZWwgPT0gbnVsbCA/IFwiV0FSTlwiIDogZGVmYXVsdExldmVsO1xuXG4gICAgICB2YXIgc3RvcmFnZUtleSA9IFwibG9nbGV2ZWxcIjtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBzdG9yYWdlS2V5ICs9IFwiOlwiICsgbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgc3RvcmFnZUtleSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcGVyc2lzdExldmVsSWZQb3NzaWJsZShsZXZlbE51bSkge1xuICAgICAgICAgIHZhciBsZXZlbE5hbWUgPSAobG9nTWV0aG9kc1tsZXZlbE51bV0gfHwgJ3NpbGVudCcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkVHlwZSB8fCAhc3RvcmFnZUtleSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVXNlIGxvY2FsU3RvcmFnZSBpZiBhdmFpbGFibGVcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlW3N0b3JhZ2VLZXldID0gbGV2ZWxOYW1lO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgICAgICAgLy8gVXNlIHNlc3Npb24gY29va2llIGFzIGZhbGxiYWNrXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmNvb2tpZSA9XG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0b3JhZ2VLZXkpICsgXCI9XCIgKyBsZXZlbE5hbWUgKyBcIjtcIjtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFBlcnNpc3RlZExldmVsKCkge1xuICAgICAgICAgIHZhciBzdG9yZWRMZXZlbDtcblxuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRUeXBlIHx8ICFzdG9yYWdlS2V5KSByZXR1cm47XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzdG9yZWRMZXZlbCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Vbc3RvcmFnZUtleV07XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgICAgICAgLy8gRmFsbGJhY2sgdG8gY29va2llcyBpZiBsb2NhbCBzdG9yYWdlIGdpdmVzIHVzIG5vdGhpbmdcbiAgICAgICAgICBpZiAodHlwZW9mIHN0b3JlZExldmVsID09PSB1bmRlZmluZWRUeXBlKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY29va2llID0gd2luZG93LmRvY3VtZW50LmNvb2tpZTtcbiAgICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNvb2tpZS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPVwiKTtcbiAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZWRMZXZlbCA9IC9eKFteO10rKS8uZXhlYyhjb29raWUuc2xpY2UobG9jYXRpb24pKVsxXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSBzdG9yZWQgbGV2ZWwgaXMgbm90IHZhbGlkLCB0cmVhdCBpdCBhcyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG4gICAgICAgICAgaWYgKHNlbGYubGV2ZWxzW3N0b3JlZExldmVsXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHN0b3JlZExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdG9yZWRMZXZlbDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2xlYXJQZXJzaXN0ZWRMZXZlbCgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkVHlwZSB8fCAhc3RvcmFnZUtleSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gVXNlIGxvY2FsU3RvcmFnZSBpZiBhdmFpbGFibGVcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUtleSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAvLyBVc2Ugc2Vzc2lvbiBjb29raWUgYXMgZmFsbGJhY2tcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RvcmFnZUtleSkgKyBcIj07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVENcIjtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKlxuICAgICAgICogUHVibGljIGxvZ2dlciBBUEkgLSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3BpbXRlcnJ5L2xvZ2xldmVsIGZvciBkZXRhaWxzXG4gICAgICAgKlxuICAgICAgICovXG5cbiAgICAgIHNlbGYubmFtZSA9IG5hbWU7XG5cbiAgICAgIHNlbGYubGV2ZWxzID0geyBcIlRSQUNFXCI6IDAsIFwiREVCVUdcIjogMSwgXCJJTkZPXCI6IDIsIFwiV0FSTlwiOiAzLFxuICAgICAgICAgIFwiRVJST1JcIjogNCwgXCJTSUxFTlRcIjogNX07XG5cbiAgICAgIHNlbGYubWV0aG9kRmFjdG9yeSA9IGZhY3RvcnkgfHwgZGVmYXVsdE1ldGhvZEZhY3Rvcnk7XG5cbiAgICAgIHNlbGYuZ2V0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRMZXZlbDtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuc2V0TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwsIHBlcnNpc3QpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcInN0cmluZ1wiICYmIHNlbGYubGV2ZWxzW2xldmVsLnRvVXBwZXJDYXNlKCldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV2ZWwgPSBzZWxmLmxldmVsc1tsZXZlbC50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJudW1iZXJcIiAmJiBsZXZlbCA+PSAwICYmIGxldmVsIDw9IHNlbGYubGV2ZWxzLlNJTEVOVCkge1xuICAgICAgICAgICAgICBjdXJyZW50TGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICAgICAgaWYgKHBlcnNpc3QgIT09IGZhbHNlKSB7ICAvLyBkZWZhdWx0cyB0byB0cnVlXG4gICAgICAgICAgICAgICAgICBwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlKGxldmVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXBsYWNlTG9nZ2luZ01ldGhvZHMuY2FsbChzZWxmLCBsZXZlbCwgbmFtZSk7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gdW5kZWZpbmVkVHlwZSAmJiBsZXZlbCA8IHNlbGYubGV2ZWxzLlNJTEVOVCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gY29uc29sZSBhdmFpbGFibGUgZm9yIGxvZ2dpbmdcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IFwibG9nLnNldExldmVsKCkgY2FsbGVkIHdpdGggaW52YWxpZCBsZXZlbDogXCIgKyBsZXZlbDtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZWxmLnNldERlZmF1bHRMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICAgICAgICAgIGRlZmF1bHRMZXZlbCA9IGxldmVsO1xuICAgICAgICAgIGlmICghZ2V0UGVyc2lzdGVkTGV2ZWwoKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldExldmVsKGxldmVsLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2VsZi5yZXNldExldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuc2V0TGV2ZWwoZGVmYXVsdExldmVsLCBmYWxzZSk7XG4gICAgICAgICAgY2xlYXJQZXJzaXN0ZWRMZXZlbCgpO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5lbmFibGVBbGwgPSBmdW5jdGlvbihwZXJzaXN0KSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChzZWxmLmxldmVscy5UUkFDRSwgcGVyc2lzdCk7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmRpc2FibGVBbGwgPSBmdW5jdGlvbihwZXJzaXN0KSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChzZWxmLmxldmVscy5TSUxFTlQsIHBlcnNpc3QpO1xuICAgICAgfTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSB3aXRoIHRoZSByaWdodCBsZXZlbFxuICAgICAgdmFyIGluaXRpYWxMZXZlbCA9IGdldFBlcnNpc3RlZExldmVsKCk7XG4gICAgICBpZiAoaW5pdGlhbExldmVsID09IG51bGwpIHtcbiAgICAgICAgICBpbml0aWFsTGV2ZWwgPSBkZWZhdWx0TGV2ZWw7XG4gICAgICB9XG4gICAgICBzZWxmLnNldExldmVsKGluaXRpYWxMZXZlbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICpcbiAgICAgKiBUb3AtbGV2ZWwgQVBJXG4gICAgICpcbiAgICAgKi9cblxuICAgIHZhciBkZWZhdWx0TG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG4gICAgdmFyIF9sb2dnZXJzQnlOYW1lID0ge307XG4gICAgZGVmYXVsdExvZ2dlci5nZXRMb2dnZXIgPSBmdW5jdGlvbiBnZXRMb2dnZXIobmFtZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBuYW1lICE9PSBcInN5bWJvbFwiICYmIHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB8fCBuYW1lID09PSBcIlwiKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHN1cHBseSBhIG5hbWUgd2hlbiBjcmVhdGluZyBhIGxvZ2dlci5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9nZ2VyID0gX2xvZ2dlcnNCeU5hbWVbbmFtZV07XG4gICAgICAgIGlmICghbG9nZ2VyKSB7XG4gICAgICAgICAgbG9nZ2VyID0gX2xvZ2dlcnNCeU5hbWVbbmFtZV0gPSBuZXcgTG9nZ2VyKFxuICAgICAgICAgICAgbmFtZSwgZGVmYXVsdExvZ2dlci5nZXRMZXZlbCgpLCBkZWZhdWx0TG9nZ2VyLm1ldGhvZEZhY3RvcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2dnZXI7XG4gICAgfTtcblxuICAgIC8vIEdyYWIgdGhlIGN1cnJlbnQgZ2xvYmFsIGxvZyB2YXJpYWJsZSBpbiBjYXNlIG9mIG92ZXJ3cml0ZVxuICAgIHZhciBfbG9nID0gKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZFR5cGUpID8gd2luZG93LmxvZyA6IHVuZGVmaW5lZDtcbiAgICBkZWZhdWx0TG9nZ2VyLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZFR5cGUgJiZcbiAgICAgICAgICAgICAgIHdpbmRvdy5sb2cgPT09IGRlZmF1bHRMb2dnZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2cgPSBfbG9nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRMb2dnZXI7XG4gICAgfTtcblxuICAgIGRlZmF1bHRMb2dnZXIuZ2V0TG9nZ2VycyA9IGZ1bmN0aW9uIGdldExvZ2dlcnMoKSB7XG4gICAgICAgIHJldHVybiBfbG9nZ2Vyc0J5TmFtZTtcbiAgICB9O1xuXG4gICAgLy8gRVM2IGRlZmF1bHQgZXhwb3J0LCBmb3IgY29tcGF0aWJpbGl0eVxuICAgIGRlZmF1bHRMb2dnZXJbJ2RlZmF1bHQnXSA9IGRlZmF1bHRMb2dnZXI7XG5cbiAgICByZXR1cm4gZGVmYXVsdExvZ2dlcjtcbn0pKTtcbiIsInZhciB3cmFwcHkgPSByZXF1aXJlKCd3cmFwcHknKVxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcHkob25jZSlcbm1vZHVsZS5leHBvcnRzLnN0cmljdCA9IHdyYXBweShvbmNlU3RyaWN0KVxuXG5vbmNlLnByb3RvID0gb25jZShmdW5jdGlvbiAoKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICdvbmNlJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb25jZSh0aGlzKVxuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2VTdHJpY3QnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlU3RyaWN0KHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChmLmNhbGxlZCkgcmV0dXJuIGYudmFsdWVcbiAgICBmLmNhbGxlZCA9IHRydWVcbiAgICByZXR1cm4gZi52YWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBmLmNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiBmXG59XG5cbmZ1bmN0aW9uIG9uY2VTdHJpY3QgKGZuKSB7XG4gIHZhciBmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChmLmNhbGxlZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihmLm9uY2VFcnJvcilcbiAgICBmLmNhbGxlZCA9IHRydWVcbiAgICByZXR1cm4gZi52YWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICB2YXIgbmFtZSA9IGZuLm5hbWUgfHwgJ0Z1bmN0aW9uIHdyYXBwZWQgd2l0aCBgb25jZWAnXG4gIGYub25jZUVycm9yID0gbmFtZSArIFwiIHNob3VsZG4ndCBiZSBjYWxsZWQgbW9yZSB0aGFuIG9uY2VcIlxuICBmLmNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiBmXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAhcHJvY2Vzcy52ZXJzaW9uIHx8XG4gICAgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YwLicpID09PSAwIHx8XG4gICAgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YxLicpID09PSAwICYmIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MS44LicpICE9PSAwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyBuZXh0VGljazogbmV4dFRpY2sgfTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayhmbiwgYXJnMSwgYXJnMiwgYXJnMykge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJjYWxsYmFja1wiIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgYXJncywgaTtcbiAgc3dpdGNoIChsZW4pIHtcbiAgY2FzZSAwOlxuICBjYXNlIDE6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZm4pO1xuICBjYXNlIDI6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrT25lKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxKTtcbiAgICB9KTtcbiAgY2FzZSAzOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja1R3bygpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSwgYXJnMik7XG4gICAgfSk7XG4gIGNhc2UgNDpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tUaHJlZSgpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgfSk7XG4gIGRlZmF1bHQ6XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGFyZ3MubGVuZ3RoKSB7XG4gICAgICBhcmdzW2krK10gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGljaygpIHtcbiAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG59XG5cbiIsInZhciBvbmNlID0gcmVxdWlyZSgnb25jZScpXG52YXIgZW9zID0gcmVxdWlyZSgnZW5kLW9mLXN0cmVhbScpXG52YXIgZnMgPSByZXF1aXJlKCdmcycpIC8vIHdlIG9ubHkgbmVlZCBmcyB0byBnZXQgdGhlIFJlYWRTdHJlYW0gYW5kIFdyaXRlU3RyZWFtIHByb3RvdHlwZXNcblxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIGFuY2llbnQgPSAvXnY/XFwuMC8udGVzdChwcm9jZXNzLnZlcnNpb24pXG5cbnZhciBpc0ZuID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbidcbn1cblxudmFyIGlzRlMgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIGlmICghYW5jaWVudCkgcmV0dXJuIGZhbHNlIC8vIG5ld2VyIG5vZGUgdmVyc2lvbiBkbyBub3QgbmVlZCB0byBjYXJlIGFib3V0IGZzIGlzIGEgc3BlY2lhbCB3YXlcbiAgaWYgKCFmcykgcmV0dXJuIGZhbHNlIC8vIGJyb3dzZXJcbiAgcmV0dXJuIChzdHJlYW0gaW5zdGFuY2VvZiAoZnMuUmVhZFN0cmVhbSB8fCBub29wKSB8fCBzdHJlYW0gaW5zdGFuY2VvZiAoZnMuV3JpdGVTdHJlYW0gfHwgbm9vcCkpICYmIGlzRm4oc3RyZWFtLmNsb3NlKVxufVxuXG52YXIgaXNSZXF1ZXN0ID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICByZXR1cm4gc3RyZWFtLnNldEhlYWRlciAmJiBpc0ZuKHN0cmVhbS5hYm9ydClcbn1cblxudmFyIGRlc3Ryb3llciA9IGZ1bmN0aW9uIChzdHJlYW0sIHJlYWRpbmcsIHdyaXRpbmcsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gb25jZShjYWxsYmFjaylcblxuICB2YXIgY2xvc2VkID0gZmFsc2VcbiAgc3RyZWFtLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBjbG9zZWQgPSB0cnVlXG4gIH0pXG5cbiAgZW9zKHN0cmVhbSwge3JlYWRhYmxlOiByZWFkaW5nLCB3cml0YWJsZTogd3JpdGluZ30sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIGNsb3NlZCA9IHRydWVcbiAgICBjYWxsYmFjaygpXG4gIH0pXG5cbiAgdmFyIGRlc3Ryb3llZCA9IGZhbHNlXG4gIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGNsb3NlZCkgcmV0dXJuXG4gICAgaWYgKGRlc3Ryb3llZCkgcmV0dXJuXG4gICAgZGVzdHJveWVkID0gdHJ1ZVxuXG4gICAgaWYgKGlzRlMoc3RyZWFtKSkgcmV0dXJuIHN0cmVhbS5jbG9zZShub29wKSAvLyB1c2UgY2xvc2UgZm9yIGZzIHN0cmVhbXMgdG8gYXZvaWQgZmQgbGVha3NcbiAgICBpZiAoaXNSZXF1ZXN0KHN0cmVhbSkpIHJldHVybiBzdHJlYW0uYWJvcnQoKSAvLyByZXF1ZXN0LmRlc3Ryb3kganVzdCBkbyAuZW5kIC0gLmFib3J0IGlzIHdoYXQgd2Ugd2FudFxuXG4gICAgaWYgKGlzRm4oc3RyZWFtLmRlc3Ryb3kpKSByZXR1cm4gc3RyZWFtLmRlc3Ryb3koKVxuXG4gICAgY2FsbGJhY2soZXJyIHx8IG5ldyBFcnJvcignc3RyZWFtIHdhcyBkZXN0cm95ZWQnKSlcbiAgfVxufVxuXG52YXIgY2FsbCA9IGZ1bmN0aW9uIChmbikge1xuICBmbigpXG59XG5cbnZhciBwaXBlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gIHJldHVybiBmcm9tLnBpcGUodG8pXG59XG5cbnZhciBwdW1wID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RyZWFtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgdmFyIGNhbGxiYWNrID0gaXNGbihzdHJlYW1zW3N0cmVhbXMubGVuZ3RoIC0gMV0gfHwgbm9vcCkgJiYgc3RyZWFtcy5wb3AoKSB8fCBub29wXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoc3RyZWFtc1swXSkpIHN0cmVhbXMgPSBzdHJlYW1zWzBdXG4gIGlmIChzdHJlYW1zLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcigncHVtcCByZXF1aXJlcyB0d28gc3RyZWFtcyBwZXIgbWluaW11bScpXG5cbiAgdmFyIGVycm9yXG4gIHZhciBkZXN0cm95cyA9IHN0cmVhbXMubWFwKGZ1bmN0aW9uIChzdHJlYW0sIGkpIHtcbiAgICB2YXIgcmVhZGluZyA9IGkgPCBzdHJlYW1zLmxlbmd0aCAtIDFcbiAgICB2YXIgd3JpdGluZyA9IGkgPiAwXG4gICAgcmV0dXJuIGRlc3Ryb3llcihzdHJlYW0sIHJlYWRpbmcsIHdyaXRpbmcsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmICghZXJyb3IpIGVycm9yID0gZXJyXG4gICAgICBpZiAoZXJyKSBkZXN0cm95cy5mb3JFYWNoKGNhbGwpXG4gICAgICBpZiAocmVhZGluZykgcmV0dXJuXG4gICAgICBkZXN0cm95cy5mb3JFYWNoKGNhbGwpXG4gICAgICBjYWxsYmFjayhlcnJvcilcbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBzdHJlYW1zLnJlZHVjZShwaXBlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHB1bXBcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIGEgZHVwbGV4IHN0cmVhbSBpcyBqdXN0IGEgc3RyZWFtIHRoYXQgaXMgYm90aCByZWFkYWJsZSBhbmQgd3JpdGFibGUuXG4vLyBTaW5jZSBKUyBkb2Vzbid0IGhhdmUgbXVsdGlwbGUgcHJvdG90eXBhbCBpbmhlcml0YW5jZSwgdGhpcyBjbGFzc1xuLy8gcHJvdG90eXBhbGx5IGluaGVyaXRzIGZyb20gUmVhZGFibGUsIGFuZCB0aGVuIHBhcmFzaXRpY2FsbHkgZnJvbVxuLy8gV3JpdGFibGUuXG5cbid1c2Ugc3RyaWN0JztcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIHBuYSA9IHJlcXVpcmUoJ3Byb2Nlc3MtbmV4dGljay1hcmdzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gIH1yZXR1cm4ga2V5cztcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxubW9kdWxlLmV4cG9ydHMgPSBEdXBsZXg7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IE9iamVjdC5jcmVhdGUocmVxdWlyZSgnY29yZS11dGlsLWlzJykpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIFJlYWRhYmxlID0gcmVxdWlyZSgnLi9fc3RyZWFtX3JlYWRhYmxlJyk7XG52YXIgV3JpdGFibGUgPSByZXF1aXJlKCcuL19zdHJlYW1fd3JpdGFibGUnKTtcblxudXRpbC5pbmhlcml0cyhEdXBsZXgsIFJlYWRhYmxlKTtcblxue1xuICAvLyBhdm9pZCBzY29wZSBjcmVlcCwgdGhlIGtleXMgYXJyYXkgY2FuIHRoZW4gYmUgY29sbGVjdGVkXG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhXcml0YWJsZS5wcm90b3R5cGUpO1xuICBmb3IgKHZhciB2ID0gMDsgdiA8IGtleXMubGVuZ3RoOyB2KyspIHtcbiAgICB2YXIgbWV0aG9kID0ga2V5c1t2XTtcbiAgICBpZiAoIUR1cGxleC5wcm90b3R5cGVbbWV0aG9kXSkgRHVwbGV4LnByb3RvdHlwZVttZXRob2RdID0gV3JpdGFibGUucHJvdG90eXBlW21ldGhvZF07XG4gIH1cbn1cblxuZnVuY3Rpb24gRHVwbGV4KG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIER1cGxleCkpIHJldHVybiBuZXcgRHVwbGV4KG9wdGlvbnMpO1xuXG4gIFJlYWRhYmxlLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gIFdyaXRhYmxlLmNhbGwodGhpcywgb3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZWFkYWJsZSA9PT0gZmFsc2UpIHRoaXMucmVhZGFibGUgPSBmYWxzZTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLndyaXRhYmxlID09PSBmYWxzZSkgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuYWxsb3dIYWxmT3BlbiA9IHRydWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWxsb3dIYWxmT3BlbiA9PT0gZmFsc2UpIHRoaXMuYWxsb3dIYWxmT3BlbiA9IGZhbHNlO1xuXG4gIHRoaXMub25jZSgnZW5kJywgb25lbmQpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRHVwbGV4LnByb3RvdHlwZSwgJ3dyaXRhYmxlSGlnaFdhdGVyTWFyaycsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUuaGlnaFdhdGVyTWFyaztcbiAgfVxufSk7XG5cbi8vIHRoZSBuby1oYWxmLW9wZW4gZW5mb3JjZXJcbmZ1bmN0aW9uIG9uZW5kKCkge1xuICAvLyBpZiB3ZSBhbGxvdyBoYWxmLW9wZW4gc3RhdGUsIG9yIGlmIHRoZSB3cml0YWJsZSBzaWRlIGVuZGVkLFxuICAvLyB0aGVuIHdlJ3JlIG9rLlxuICBpZiAodGhpcy5hbGxvd0hhbGZPcGVuIHx8IHRoaXMuX3dyaXRhYmxlU3RhdGUuZW5kZWQpIHJldHVybjtcblxuICAvLyBubyBtb3JlIGRhdGEgY2FuIGJlIHdyaXR0ZW4uXG4gIC8vIEJ1dCBhbGxvdyBtb3JlIHdyaXRlcyB0byBoYXBwZW4gaW4gdGhpcyB0aWNrLlxuICBwbmEubmV4dFRpY2sob25FbmROVCwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIG9uRW5kTlQoc2VsZikge1xuICBzZWxmLmVuZCgpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRHVwbGV4LnByb3RvdHlwZSwgJ2Rlc3Ryb3llZCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl93cml0YWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkICYmIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHdlIGlnbm9yZSB0aGUgdmFsdWUgaWYgdGhlIHN0cmVhbVxuICAgIC8vIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCB5ZXRcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX3dyaXRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRoZSB1c2VyIGlzIGV4cGxpY2l0bHlcbiAgICAvLyBtYW5hZ2luZyBkZXN0cm95ZWRcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCA9IHZhbHVlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gIH1cbn0pO1xuXG5EdXBsZXgucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgdGhpcy5wdXNoKG51bGwpO1xuICB0aGlzLmVuZCgpO1xuXG4gIHBuYS5uZXh0VGljayhjYiwgZXJyKTtcbn07IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIGEgcGFzc3Rocm91Z2ggc3RyZWFtLlxuLy8gYmFzaWNhbGx5IGp1c3QgdGhlIG1vc3QgbWluaW1hbCBzb3J0IG9mIFRyYW5zZm9ybSBzdHJlYW0uXG4vLyBFdmVyeSB3cml0dGVuIGNodW5rIGdldHMgb3V0cHV0IGFzLWlzLlxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFzc1Rocm91Z2g7XG5cbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL19zdHJlYW1fdHJhbnNmb3JtJyk7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IE9iamVjdC5jcmVhdGUocmVxdWlyZSgnY29yZS11dGlsLWlzJykpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudXRpbC5pbmhlcml0cyhQYXNzVGhyb3VnaCwgVHJhbnNmb3JtKTtcblxuZnVuY3Rpb24gUGFzc1Rocm91Z2gob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUGFzc1Rocm91Z2gpKSByZXR1cm4gbmV3IFBhc3NUaHJvdWdoKG9wdGlvbnMpO1xuXG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xufVxuXG5QYXNzVGhyb3VnaC5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGNiKG51bGwsIGNodW5rKTtcbn07IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIHBuYSA9IHJlcXVpcmUoJ3Byb2Nlc3MtbmV4dGljay1hcmdzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFkYWJsZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRHVwbGV4O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cblJlYWRhYmxlLlJlYWRhYmxlU3RhdGUgPSBSZWFkYWJsZVN0YXRlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIEVFID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuXG52YXIgRUVsaXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJzKHR5cGUpLmxlbmd0aDtcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBTdHJlYW0gPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvc3RyZWFtJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIE91clVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheSB8fCBmdW5jdGlvbiAoKSB7fTtcbmZ1bmN0aW9uIF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspIHtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGNodW5rKTtcbn1cbmZ1bmN0aW9uIF9pc1VpbnQ4QXJyYXkob2JqKSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIob2JqKSB8fCBvYmogaW5zdGFuY2VvZiBPdXJVaW50OEFycmF5O1xufVxuXG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGRlYnVnVXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBkZWJ1ZyA9IHZvaWQgMDtcbmlmIChkZWJ1Z1V0aWwgJiYgZGVidWdVdGlsLmRlYnVnbG9nKSB7XG4gIGRlYnVnID0gZGVidWdVdGlsLmRlYnVnbG9nKCdzdHJlYW0nKTtcbn0gZWxzZSB7XG4gIGRlYnVnID0gZnVuY3Rpb24gKCkge307XG59XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIEJ1ZmZlckxpc3QgPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvQnVmZmVyTGlzdCcpO1xudmFyIGRlc3Ryb3lJbXBsID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3knKTtcbnZhciBTdHJpbmdEZWNvZGVyO1xuXG51dGlsLmluaGVyaXRzKFJlYWRhYmxlLCBTdHJlYW0pO1xuXG52YXIga1Byb3h5RXZlbnRzID0gWydlcnJvcicsICdjbG9zZScsICdkZXN0cm95JywgJ3BhdXNlJywgJ3Jlc3VtZSddO1xuXG5mdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuKSB7XG4gIC8vIFNhZGx5IHRoaXMgaXMgbm90IGNhY2hlYWJsZSBhcyBzb21lIGxpYnJhcmllcyBidW5kbGUgdGhlaXIgb3duXG4gIC8vIGV2ZW50IGVtaXR0ZXIgaW1wbGVtZW50YXRpb24gd2l0aCB0aGVtLlxuICBpZiAodHlwZW9mIGVtaXR0ZXIucHJlcGVuZExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZW1pdHRlci5wcmVwZW5kTGlzdGVuZXIoZXZlbnQsIGZuKTtcblxuICAvLyBUaGlzIGlzIGEgaGFjayB0byBtYWtlIHN1cmUgdGhhdCBvdXIgZXJyb3IgaGFuZGxlciBpcyBhdHRhY2hlZCBiZWZvcmUgYW55XG4gIC8vIHVzZXJsYW5kIG9uZXMuICBORVZFUiBETyBUSElTLiBUaGlzIGlzIGhlcmUgb25seSBiZWNhdXNlIHRoaXMgY29kZSBuZWVkc1xuICAvLyB0byBjb250aW51ZSB0byB3b3JrIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgTm9kZS5qcyB0aGF0IGRvIG5vdCBpbmNsdWRlXG4gIC8vIHRoZSBwcmVwZW5kTGlzdGVuZXIoKSBtZXRob2QuIFRoZSBnb2FsIGlzIHRvIGV2ZW50dWFsbHkgcmVtb3ZlIHRoaXMgaGFjay5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1tldmVudF0pIGVtaXR0ZXIub24oZXZlbnQsIGZuKTtlbHNlIGlmIChpc0FycmF5KGVtaXR0ZXIuX2V2ZW50c1tldmVudF0pKSBlbWl0dGVyLl9ldmVudHNbZXZlbnRdLnVuc2hpZnQoZm4pO2Vsc2UgZW1pdHRlci5fZXZlbnRzW2V2ZW50XSA9IFtmbiwgZW1pdHRlci5fZXZlbnRzW2V2ZW50XV07XG59XG5cbmZ1bmN0aW9uIFJlYWRhYmxlU3RhdGUob3B0aW9ucywgc3RyZWFtKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gRHVwbGV4IHN0cmVhbXMgYXJlIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLCBidXQgc2hhcmVcbiAgLy8gdGhlIHNhbWUgb3B0aW9ucyBvYmplY3QuXG4gIC8vIEhvd2V2ZXIsIHNvbWUgY2FzZXMgcmVxdWlyZSBzZXR0aW5nIG9wdGlvbnMgdG8gZGlmZmVyZW50XG4gIC8vIHZhbHVlcyBmb3IgdGhlIHJlYWRhYmxlIGFuZCB0aGUgd3JpdGFibGUgc2lkZXMgb2YgdGhlIGR1cGxleCBzdHJlYW0uXG4gIC8vIFRoZXNlIG9wdGlvbnMgY2FuIGJlIHByb3ZpZGVkIHNlcGFyYXRlbHkgYXMgcmVhZGFibGVYWFggYW5kIHdyaXRhYmxlWFhYLlxuICB2YXIgaXNEdXBsZXggPSBzdHJlYW0gaW5zdGFuY2VvZiBEdXBsZXg7XG5cbiAgLy8gb2JqZWN0IHN0cmVhbSBmbGFnLiBVc2VkIHRvIG1ha2UgcmVhZChuKSBpZ25vcmUgbiBhbmQgdG9cbiAgLy8gbWFrZSBhbGwgdGhlIGJ1ZmZlciBtZXJnaW5nIGFuZCBsZW5ndGggY2hlY2tzIGdvIGF3YXlcbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG5cbiAgaWYgKGlzRHVwbGV4KSB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLm9iamVjdE1vZGUgfHwgISFvcHRpb25zLnJlYWRhYmxlT2JqZWN0TW9kZTtcblxuICAvLyB0aGUgcG9pbnQgYXQgd2hpY2ggaXQgc3RvcHMgY2FsbGluZyBfcmVhZCgpIHRvIGZpbGwgdGhlIGJ1ZmZlclxuICAvLyBOb3RlOiAwIGlzIGEgdmFsaWQgdmFsdWUsIG1lYW5zIFwiZG9uJ3QgY2FsbCBfcmVhZCBwcmVlbXB0aXZlbHkgZXZlclwiXG4gIHZhciBod20gPSBvcHRpb25zLmhpZ2hXYXRlck1hcms7XG4gIHZhciByZWFkYWJsZUh3bSA9IG9wdGlvbnMucmVhZGFibGVIaWdoV2F0ZXJNYXJrO1xuICB2YXIgZGVmYXVsdEh3bSA9IHRoaXMub2JqZWN0TW9kZSA/IDE2IDogMTYgKiAxMDI0O1xuXG4gIGlmIChod20gfHwgaHdtID09PSAwKSB0aGlzLmhpZ2hXYXRlck1hcmsgPSBod207ZWxzZSBpZiAoaXNEdXBsZXggJiYgKHJlYWRhYmxlSHdtIHx8IHJlYWRhYmxlSHdtID09PSAwKSkgdGhpcy5oaWdoV2F0ZXJNYXJrID0gcmVhZGFibGVId207ZWxzZSB0aGlzLmhpZ2hXYXRlck1hcmsgPSBkZWZhdWx0SHdtO1xuXG4gIC8vIGNhc3QgdG8gaW50cy5cbiAgdGhpcy5oaWdoV2F0ZXJNYXJrID0gTWF0aC5mbG9vcih0aGlzLmhpZ2hXYXRlck1hcmspO1xuXG4gIC8vIEEgbGlua2VkIGxpc3QgaXMgdXNlZCB0byBzdG9yZSBkYXRhIGNodW5rcyBpbnN0ZWFkIG9mIGFuIGFycmF5IGJlY2F1c2UgdGhlXG4gIC8vIGxpbmtlZCBsaXN0IGNhbiByZW1vdmUgZWxlbWVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIGZhc3RlciB0aGFuXG4gIC8vIGFycmF5LnNoaWZ0KClcbiAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyTGlzdCgpO1xuICB0aGlzLmxlbmd0aCA9IDA7XG4gIHRoaXMucGlwZXMgPSBudWxsO1xuICB0aGlzLnBpcGVzQ291bnQgPSAwO1xuICB0aGlzLmZsb3dpbmcgPSBudWxsO1xuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIHRoaXMuZW5kRW1pdHRlZCA9IGZhbHNlO1xuICB0aGlzLnJlYWRpbmcgPSBmYWxzZTtcblxuICAvLyBhIGZsYWcgdG8gYmUgYWJsZSB0byB0ZWxsIGlmIHRoZSBldmVudCAncmVhZGFibGUnLydkYXRhJyBpcyBlbWl0dGVkXG4gIC8vIGltbWVkaWF0ZWx5LCBvciBvbiBhIGxhdGVyIHRpY2suICBXZSBzZXQgdGhpcyB0byB0cnVlIGF0IGZpcnN0LCBiZWNhdXNlXG4gIC8vIGFueSBhY3Rpb25zIHRoYXQgc2hvdWxkbid0IGhhcHBlbiB1bnRpbCBcImxhdGVyXCIgc2hvdWxkIGdlbmVyYWxseSBhbHNvXG4gIC8vIG5vdCBoYXBwZW4gYmVmb3JlIHRoZSBmaXJzdCByZWFkIGNhbGwuXG4gIHRoaXMuc3luYyA9IHRydWU7XG5cbiAgLy8gd2hlbmV2ZXIgd2UgcmV0dXJuIG51bGwsIHRoZW4gd2Ugc2V0IGEgZmxhZyB0byBzYXlcbiAgLy8gdGhhdCB3ZSdyZSBhd2FpdGluZyBhICdyZWFkYWJsZScgZXZlbnQgZW1pc3Npb24uXG4gIHRoaXMubmVlZFJlYWRhYmxlID0gZmFsc2U7XG4gIHRoaXMuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG4gIHRoaXMucmVhZGFibGVMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgdGhpcy5yZXN1bWVTY2hlZHVsZWQgPSBmYWxzZTtcblxuICAvLyBoYXMgaXQgYmVlbiBkZXN0cm95ZWRcbiAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAvLyBDcnlwdG8gaXMga2luZCBvZiBvbGQgYW5kIGNydXN0eS4gIEhpc3RvcmljYWxseSwgaXRzIGRlZmF1bHQgc3RyaW5nXG4gIC8vIGVuY29kaW5nIGlzICdiaW5hcnknIHNvIHdlIGhhdmUgdG8gbWFrZSB0aGlzIGNvbmZpZ3VyYWJsZS5cbiAgLy8gRXZlcnl0aGluZyBlbHNlIGluIHRoZSB1bml2ZXJzZSB1c2VzICd1dGY4JywgdGhvdWdoLlxuICB0aGlzLmRlZmF1bHRFbmNvZGluZyA9IG9wdGlvbnMuZGVmYXVsdEVuY29kaW5nIHx8ICd1dGY4JztcblxuICAvLyB0aGUgbnVtYmVyIG9mIHdyaXRlcnMgdGhhdCBhcmUgYXdhaXRpbmcgYSBkcmFpbiBldmVudCBpbiAucGlwZSgpc1xuICB0aGlzLmF3YWl0RHJhaW4gPSAwO1xuXG4gIC8vIGlmIHRydWUsIGEgbWF5YmVSZWFkTW9yZSBoYXMgYmVlbiBzY2hlZHVsZWRcbiAgdGhpcy5yZWFkaW5nTW9yZSA9IGZhbHNlO1xuXG4gIHRoaXMuZGVjb2RlciA9IG51bGw7XG4gIHRoaXMuZW5jb2RpbmcgPSBudWxsO1xuICBpZiAob3B0aW9ucy5lbmNvZGluZykge1xuICAgIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gICAgdGhpcy5kZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIob3B0aW9ucy5lbmNvZGluZyk7XG4gICAgdGhpcy5lbmNvZGluZyA9IG9wdGlvbnMuZW5jb2Rpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gUmVhZGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZWFkYWJsZSkpIHJldHVybiBuZXcgUmVhZGFibGUob3B0aW9ucyk7XG5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZSA9IG5ldyBSZWFkYWJsZVN0YXRlKG9wdGlvbnMsIHRoaXMpO1xuXG4gIC8vIGxlZ2FjeVxuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5yZWFkID09PSAnZnVuY3Rpb24nKSB0aGlzLl9yZWFkID0gb3B0aW9ucy5yZWFkO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHRoaXMuX2Rlc3Ryb3kgPSBvcHRpb25zLmRlc3Ryb3k7XG4gIH1cblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlLnByb3RvdHlwZSwgJ2Rlc3Ryb3llZCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gd2UgaWdub3JlIHRoZSB2YWx1ZSBpZiB0aGUgc3RyZWFtXG4gICAgLy8gaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgIGlmICghdGhpcy5fcmVhZGFibGVTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRoZSB1c2VyIGlzIGV4cGxpY2l0bHlcbiAgICAvLyBtYW5hZ2luZyBkZXN0cm95ZWRcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCA9IHZhbHVlO1xuICB9XG59KTtcblxuUmVhZGFibGUucHJvdG90eXBlLmRlc3Ryb3kgPSBkZXN0cm95SW1wbC5kZXN0cm95O1xuUmVhZGFibGUucHJvdG90eXBlLl91bmRlc3Ryb3kgPSBkZXN0cm95SW1wbC51bmRlc3Ryb3k7XG5SZWFkYWJsZS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB0aGlzLnB1c2gobnVsbCk7XG4gIGNiKGVycik7XG59O1xuXG4vLyBNYW51YWxseSBzaG92ZSBzb21ldGhpbmcgaW50byB0aGUgcmVhZCgpIGJ1ZmZlci5cbi8vIFRoaXMgcmV0dXJucyB0cnVlIGlmIHRoZSBoaWdoV2F0ZXJNYXJrIGhhcyBub3QgYmVlbiBoaXQgeWV0LFxuLy8gc2ltaWxhciB0byBob3cgV3JpdGFibGUud3JpdGUoKSByZXR1cm5zIHRydWUgaWYgeW91IHNob3VsZFxuLy8gd3JpdGUoKSBzb21lIG1vcmUuXG5SZWFkYWJsZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHNraXBDaHVua0NoZWNrO1xuXG4gIGlmICghc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGlmICh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuY29kaW5nIHx8IHN0YXRlLmRlZmF1bHRFbmNvZGluZztcbiAgICAgIGlmIChlbmNvZGluZyAhPT0gc3RhdGUuZW5jb2RpbmcpIHtcbiAgICAgICAgY2h1bmsgPSBCdWZmZXIuZnJvbShjaHVuaywgZW5jb2RpbmcpO1xuICAgICAgICBlbmNvZGluZyA9ICcnO1xuICAgICAgfVxuICAgICAgc2tpcENodW5rQ2hlY2sgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBza2lwQ2h1bmtDaGVjayA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVhZGFibGVBZGRDaHVuayh0aGlzLCBjaHVuaywgZW5jb2RpbmcsIGZhbHNlLCBza2lwQ2h1bmtDaGVjayk7XG59O1xuXG4vLyBVbnNoaWZ0IHNob3VsZCAqYWx3YXlzKiBiZSBzb21ldGhpbmcgZGlyZWN0bHkgb3V0IG9mIHJlYWQoKVxuUmVhZGFibGUucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgcmV0dXJuIHJlYWRhYmxlQWRkQ2h1bmsodGhpcywgY2h1bmssIG51bGwsIHRydWUsIGZhbHNlKTtcbn07XG5cbmZ1bmN0aW9uIHJlYWRhYmxlQWRkQ2h1bmsoc3RyZWFtLCBjaHVuaywgZW5jb2RpbmcsIGFkZFRvRnJvbnQsIHNraXBDaHVua0NoZWNrKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcbiAgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGVyO1xuICAgIGlmICghc2tpcENodW5rQ2hlY2spIGVyID0gY2h1bmtJbnZhbGlkKHN0YXRlLCBjaHVuayk7XG4gICAgaWYgKGVyKSB7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5vYmplY3RNb2RlIHx8IGNodW5rICYmIGNodW5rLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmICFzdGF0ZS5vYmplY3RNb2RlICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihjaHVuaykgIT09IEJ1ZmZlci5wcm90b3R5cGUpIHtcbiAgICAgICAgY2h1bmsgPSBfdWludDhBcnJheVRvQnVmZmVyKGNodW5rKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFkZFRvRnJvbnQpIHtcbiAgICAgICAgaWYgKHN0YXRlLmVuZEVtaXR0ZWQpIHN0cmVhbS5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignc3RyZWFtLnVuc2hpZnQoKSBhZnRlciBlbmQgZXZlbnQnKSk7ZWxzZSBhZGRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmVuZGVkKSB7XG4gICAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignc3RyZWFtLnB1c2goKSBhZnRlciBFT0YnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChzdGF0ZS5kZWNvZGVyICYmICFlbmNvZGluZykge1xuICAgICAgICAgIGNodW5rID0gc3RhdGUuZGVjb2Rlci53cml0ZShjaHVuayk7XG4gICAgICAgICAgaWYgKHN0YXRlLm9iamVjdE1vZGUgfHwgY2h1bmsubGVuZ3RoICE9PSAwKSBhZGRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgZmFsc2UpO2Vsc2UgbWF5YmVSZWFkTW9yZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghYWRkVG9Gcm9udCkge1xuICAgICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZWVkTW9yZURhdGEoc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBhZGRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgYWRkVG9Gcm9udCkge1xuICBpZiAoc3RhdGUuZmxvd2luZyAmJiBzdGF0ZS5sZW5ndGggPT09IDAgJiYgIXN0YXRlLnN5bmMpIHtcbiAgICBzdHJlYW0uZW1pdCgnZGF0YScsIGNodW5rKTtcbiAgICBzdHJlYW0ucmVhZCgwKTtcbiAgfSBlbHNlIHtcbiAgICAvLyB1cGRhdGUgdGhlIGJ1ZmZlciBpbmZvLlxuICAgIHN0YXRlLmxlbmd0aCArPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcbiAgICBpZiAoYWRkVG9Gcm9udCkgc3RhdGUuYnVmZmVyLnVuc2hpZnQoY2h1bmspO2Vsc2Ugc3RhdGUuYnVmZmVyLnB1c2goY2h1bmspO1xuXG4gICAgaWYgKHN0YXRlLm5lZWRSZWFkYWJsZSkgZW1pdFJlYWRhYmxlKHN0cmVhbSk7XG4gIH1cbiAgbWF5YmVSZWFkTW9yZShzdHJlYW0sIHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gY2h1bmtJbnZhbGlkKHN0YXRlLCBjaHVuaykge1xuICB2YXIgZXI7XG4gIGlmICghX2lzVWludDhBcnJheShjaHVuaykgJiYgdHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiBjaHVuayAhPT0gdW5kZWZpbmVkICYmICFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG5vbi1zdHJpbmcvYnVmZmVyIGNodW5rJyk7XG4gIH1cbiAgcmV0dXJuIGVyO1xufVxuXG4vLyBpZiBpdCdzIHBhc3QgdGhlIGhpZ2ggd2F0ZXIgbWFyaywgd2UgY2FuIHB1c2ggaW4gc29tZSBtb3JlLlxuLy8gQWxzbywgaWYgd2UgaGF2ZSBubyBkYXRhIHlldCwgd2UgY2FuIHN0YW5kIHNvbWVcbi8vIG1vcmUgYnl0ZXMuICBUaGlzIGlzIHRvIHdvcmsgYXJvdW5kIGNhc2VzIHdoZXJlIGh3bT0wLFxuLy8gc3VjaCBhcyB0aGUgcmVwbC4gIEFsc28sIGlmIHRoZSBwdXNoKCkgdHJpZ2dlcmVkIGFcbi8vIHJlYWRhYmxlIGV2ZW50LCBhbmQgdGhlIHVzZXIgY2FsbGVkIHJlYWQobGFyZ2VOdW1iZXIpIHN1Y2ggdGhhdFxuLy8gbmVlZFJlYWRhYmxlIHdhcyBzZXQsIHRoZW4gd2Ugb3VnaHQgdG8gcHVzaCBtb3JlLCBzbyB0aGF0IGFub3RoZXJcbi8vICdyZWFkYWJsZScgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQuXG5mdW5jdGlvbiBuZWVkTW9yZURhdGEoc3RhdGUpIHtcbiAgcmV0dXJuICFzdGF0ZS5lbmRlZCAmJiAoc3RhdGUubmVlZFJlYWRhYmxlIHx8IHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUubGVuZ3RoID09PSAwKTtcbn1cblxuUmVhZGFibGUucHJvdG90eXBlLmlzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nID09PSBmYWxzZTtcbn07XG5cbi8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuUmVhZGFibGUucHJvdG90eXBlLnNldEVuY29kaW5nID0gZnVuY3Rpb24gKGVuYykge1xuICBpZiAoIVN0cmluZ0RlY29kZXIpIFN0cmluZ0RlY29kZXIgPSByZXF1aXJlKCdzdHJpbmdfZGVjb2Rlci8nKS5TdHJpbmdEZWNvZGVyO1xuICB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihlbmMpO1xuICB0aGlzLl9yZWFkYWJsZVN0YXRlLmVuY29kaW5nID0gZW5jO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIERvbid0IHJhaXNlIHRoZSBod20gPiA4TUJcbnZhciBNQVhfSFdNID0gMHg4MDAwMDA7XG5mdW5jdGlvbiBjb21wdXRlTmV3SGlnaFdhdGVyTWFyayhuKSB7XG4gIGlmIChuID49IE1BWF9IV00pIHtcbiAgICBuID0gTUFYX0hXTTtcbiAgfSBlbHNlIHtcbiAgICAvLyBHZXQgdGhlIG5leHQgaGlnaGVzdCBwb3dlciBvZiAyIHRvIHByZXZlbnQgaW5jcmVhc2luZyBod20gZXhjZXNzaXZlbHkgaW5cbiAgICAvLyB0aW55IGFtb3VudHNcbiAgICBuLS07XG4gICAgbiB8PSBuID4+PiAxO1xuICAgIG4gfD0gbiA+Pj4gMjtcbiAgICBuIHw9IG4gPj4+IDQ7XG4gICAgbiB8PSBuID4+PiA4O1xuICAgIG4gfD0gbiA+Pj4gMTY7XG4gICAgbisrO1xuICB9XG4gIHJldHVybiBuO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGhvd011Y2hUb1JlYWQobiwgc3RhdGUpIHtcbiAgaWYgKG4gPD0gMCB8fCBzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIHJldHVybiAwO1xuICBpZiAoc3RhdGUub2JqZWN0TW9kZSkgcmV0dXJuIDE7XG4gIGlmIChuICE9PSBuKSB7XG4gICAgLy8gT25seSBmbG93IG9uZSBidWZmZXIgYXQgYSB0aW1lXG4gICAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgc3RhdGUubGVuZ3RoKSByZXR1cm4gc3RhdGUuYnVmZmVyLmhlYWQuZGF0YS5sZW5ndGg7ZWxzZSByZXR1cm4gc3RhdGUubGVuZ3RoO1xuICB9XG4gIC8vIElmIHdlJ3JlIGFza2luZyBmb3IgbW9yZSB0aGFuIHRoZSBjdXJyZW50IGh3bSwgdGhlbiByYWlzZSB0aGUgaHdtLlxuICBpZiAobiA+IHN0YXRlLmhpZ2hXYXRlck1hcmspIHN0YXRlLmhpZ2hXYXRlck1hcmsgPSBjb21wdXRlTmV3SGlnaFdhdGVyTWFyayhuKTtcbiAgaWYgKG4gPD0gc3RhdGUubGVuZ3RoKSByZXR1cm4gbjtcbiAgLy8gRG9uJ3QgaGF2ZSBlbm91Z2hcbiAgaWYgKCFzdGF0ZS5lbmRlZCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLmxlbmd0aDtcbn1cblxuLy8geW91IGNhbiBvdmVycmlkZSBlaXRoZXIgdGhpcyBtZXRob2QsIG9yIHRoZSBhc3luYyBfcmVhZChuKSBiZWxvdy5cblJlYWRhYmxlLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgZGVidWcoJ3JlYWQnLCBuKTtcbiAgbiA9IHBhcnNlSW50KG4sIDEwKTtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIG5PcmlnID0gbjtcblxuICBpZiAobiAhPT0gMCkgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG5cbiAgLy8gaWYgd2UncmUgZG9pbmcgcmVhZCgwKSB0byB0cmlnZ2VyIGEgcmVhZGFibGUgZXZlbnQsIGJ1dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYSBidW5jaCBvZiBkYXRhIGluIHRoZSBidWZmZXIsIHRoZW4ganVzdCB0cmlnZ2VyXG4gIC8vIHRoZSAncmVhZGFibGUnIGV2ZW50IGFuZCBtb3ZlIG9uLlxuICBpZiAobiA9PT0gMCAmJiBzdGF0ZS5uZWVkUmVhZGFibGUgJiYgKHN0YXRlLmxlbmd0aCA+PSBzdGF0ZS5oaWdoV2F0ZXJNYXJrIHx8IHN0YXRlLmVuZGVkKSkge1xuICAgIGRlYnVnKCdyZWFkOiBlbWl0UmVhZGFibGUnLCBzdGF0ZS5sZW5ndGgsIHN0YXRlLmVuZGVkKTtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtlbHNlIGVtaXRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG4gPSBob3dNdWNoVG9SZWFkKG4sIHN0YXRlKTtcblxuICAvLyBpZiB3ZSd2ZSBlbmRlZCwgYW5kIHdlJ3JlIG5vdyBjbGVhciwgdGhlbiBmaW5pc2ggaXQgdXAuXG4gIGlmIChuID09PSAwICYmIHN0YXRlLmVuZGVkKSB7XG4gICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgZW5kUmVhZGFibGUodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBBbGwgdGhlIGFjdHVhbCBjaHVuayBnZW5lcmF0aW9uIGxvZ2ljIG5lZWRzIHRvIGJlXG4gIC8vICpiZWxvdyogdGhlIGNhbGwgdG8gX3JlYWQuICBUaGUgcmVhc29uIGlzIHRoYXQgaW4gY2VydGFpblxuICAvLyBzeW50aGV0aWMgc3RyZWFtIGNhc2VzLCBzdWNoIGFzIHBhc3N0aHJvdWdoIHN0cmVhbXMsIF9yZWFkXG4gIC8vIG1heSBiZSBhIGNvbXBsZXRlbHkgc3luY2hyb25vdXMgb3BlcmF0aW9uIHdoaWNoIG1heSBjaGFuZ2VcbiAgLy8gdGhlIHN0YXRlIG9mIHRoZSByZWFkIGJ1ZmZlciwgcHJvdmlkaW5nIGVub3VnaCBkYXRhIHdoZW5cbiAgLy8gYmVmb3JlIHRoZXJlIHdhcyAqbm90KiBlbm91Z2guXG4gIC8vXG4gIC8vIFNvLCB0aGUgc3RlcHMgYXJlOlxuICAvLyAxLiBGaWd1cmUgb3V0IHdoYXQgdGhlIHN0YXRlIG9mIHRoaW5ncyB3aWxsIGJlIGFmdGVyIHdlIGRvXG4gIC8vIGEgcmVhZCBmcm9tIHRoZSBidWZmZXIuXG4gIC8vXG4gIC8vIDIuIElmIHRoYXQgcmVzdWx0aW5nIHN0YXRlIHdpbGwgdHJpZ2dlciBhIF9yZWFkLCB0aGVuIGNhbGwgX3JlYWQuXG4gIC8vIE5vdGUgdGhhdCB0aGlzIG1heSBiZSBhc3luY2hyb25vdXMsIG9yIHN5bmNocm9ub3VzLiAgWWVzLCBpdCBpc1xuICAvLyBkZWVwbHkgdWdseSB0byB3cml0ZSBBUElzIHRoaXMgd2F5LCBidXQgdGhhdCBzdGlsbCBkb2Vzbid0IG1lYW5cbiAgLy8gdGhhdCB0aGUgUmVhZGFibGUgY2xhc3Mgc2hvdWxkIGJlaGF2ZSBpbXByb3Blcmx5LCBhcyBzdHJlYW1zIGFyZVxuICAvLyBkZXNpZ25lZCB0byBiZSBzeW5jL2FzeW5jIGFnbm9zdGljLlxuICAvLyBUYWtlIG5vdGUgaWYgdGhlIF9yZWFkIGNhbGwgaXMgc3luYyBvciBhc3luYyAoaWUsIGlmIHRoZSByZWFkIGNhbGxcbiAgLy8gaGFzIHJldHVybmVkIHlldCksIHNvIHRoYXQgd2Uga25vdyB3aGV0aGVyIG9yIG5vdCBpdCdzIHNhZmUgdG8gZW1pdFxuICAvLyAncmVhZGFibGUnIGV0Yy5cbiAgLy9cbiAgLy8gMy4gQWN0dWFsbHkgcHVsbCB0aGUgcmVxdWVzdGVkIGNodW5rcyBvdXQgb2YgdGhlIGJ1ZmZlciBhbmQgcmV0dXJuLlxuXG4gIC8vIGlmIHdlIG5lZWQgYSByZWFkYWJsZSBldmVudCwgdGhlbiB3ZSBuZWVkIHRvIGRvIHNvbWUgcmVhZGluZy5cbiAgdmFyIGRvUmVhZCA9IHN0YXRlLm5lZWRSZWFkYWJsZTtcbiAgZGVidWcoJ25lZWQgcmVhZGFibGUnLCBkb1JlYWQpO1xuXG4gIC8vIGlmIHdlIGN1cnJlbnRseSBoYXZlIGxlc3MgdGhhbiB0aGUgaGlnaFdhdGVyTWFyaywgdGhlbiBhbHNvIHJlYWQgc29tZVxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwIHx8IHN0YXRlLmxlbmd0aCAtIG4gPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSB7XG4gICAgZG9SZWFkID0gdHJ1ZTtcbiAgICBkZWJ1ZygnbGVuZ3RoIGxlc3MgdGhhbiB3YXRlcm1hcmsnLCBkb1JlYWQpO1xuICB9XG5cbiAgLy8gaG93ZXZlciwgaWYgd2UndmUgZW5kZWQsIHRoZW4gdGhlcmUncyBubyBwb2ludCwgYW5kIGlmIHdlJ3JlIGFscmVhZHlcbiAgLy8gcmVhZGluZywgdGhlbiBpdCdzIHVubmVjZXNzYXJ5LlxuICBpZiAoc3RhdGUuZW5kZWQgfHwgc3RhdGUucmVhZGluZykge1xuICAgIGRvUmVhZCA9IGZhbHNlO1xuICAgIGRlYnVnKCdyZWFkaW5nIG9yIGVuZGVkJywgZG9SZWFkKTtcbiAgfSBlbHNlIGlmIChkb1JlYWQpIHtcbiAgICBkZWJ1ZygnZG8gcmVhZCcpO1xuICAgIHN0YXRlLnJlYWRpbmcgPSB0cnVlO1xuICAgIHN0YXRlLnN5bmMgPSB0cnVlO1xuICAgIC8vIGlmIHRoZSBsZW5ndGggaXMgY3VycmVudGx5IHplcm8sIHRoZW4gd2UgKm5lZWQqIGEgcmVhZGFibGUgZXZlbnQuXG4gICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICAvLyBjYWxsIGludGVybmFsIHJlYWQgbWV0aG9kXG4gICAgdGhpcy5fcmVhZChzdGF0ZS5oaWdoV2F0ZXJNYXJrKTtcbiAgICBzdGF0ZS5zeW5jID0gZmFsc2U7XG4gICAgLy8gSWYgX3JlYWQgcHVzaGVkIGRhdGEgc3luY2hyb25vdXNseSwgdGhlbiBgcmVhZGluZ2Agd2lsbCBiZSBmYWxzZSxcbiAgICAvLyBhbmQgd2UgbmVlZCB0byByZS1ldmFsdWF0ZSBob3cgbXVjaCBkYXRhIHdlIGNhbiByZXR1cm4gdG8gdGhlIHVzZXIuXG4gICAgaWYgKCFzdGF0ZS5yZWFkaW5nKSBuID0gaG93TXVjaFRvUmVhZChuT3JpZywgc3RhdGUpO1xuICB9XG5cbiAgdmFyIHJldDtcbiAgaWYgKG4gPiAwKSByZXQgPSBmcm9tTGlzdChuLCBzdGF0ZSk7ZWxzZSByZXQgPSBudWxsO1xuXG4gIGlmIChyZXQgPT09IG51bGwpIHtcbiAgICBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIG4gPSAwO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLmxlbmd0aCAtPSBuO1xuICB9XG5cbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIElmIHdlIGhhdmUgbm90aGluZyBpbiB0aGUgYnVmZmVyLCB0aGVuIHdlIHdhbnQgdG8ga25vd1xuICAgIC8vIGFzIHNvb24gYXMgd2UgKmRvKiBnZXQgc29tZXRoaW5nIGludG8gdGhlIGJ1ZmZlci5cbiAgICBpZiAoIXN0YXRlLmVuZGVkKSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuXG4gICAgLy8gSWYgd2UgdHJpZWQgdG8gcmVhZCgpIHBhc3QgdGhlIEVPRiwgdGhlbiBlbWl0IGVuZCBvbiB0aGUgbmV4dCB0aWNrLlxuICAgIGlmIChuT3JpZyAhPT0gbiAmJiBzdGF0ZS5lbmRlZCkgZW5kUmVhZGFibGUodGhpcyk7XG4gIH1cblxuICBpZiAocmV0ICE9PSBudWxsKSB0aGlzLmVtaXQoJ2RhdGEnLCByZXQpO1xuXG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBvbkVvZkNodW5rKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKHN0YXRlLmVuZGVkKSByZXR1cm47XG4gIGlmIChzdGF0ZS5kZWNvZGVyKSB7XG4gICAgdmFyIGNodW5rID0gc3RhdGUuZGVjb2Rlci5lbmQoKTtcbiAgICBpZiAoY2h1bmsgJiYgY2h1bmsubGVuZ3RoKSB7XG4gICAgICBzdGF0ZS5idWZmZXIucHVzaChjaHVuayk7XG4gICAgICBzdGF0ZS5sZW5ndGggKz0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG4gICAgfVxuICB9XG4gIHN0YXRlLmVuZGVkID0gdHJ1ZTtcblxuICAvLyBlbWl0ICdyZWFkYWJsZScgbm93IHRvIG1ha2Ugc3VyZSBpdCBnZXRzIHBpY2tlZCB1cC5cbiAgZW1pdFJlYWRhYmxlKHN0cmVhbSk7XG59XG5cbi8vIERvbid0IGVtaXQgcmVhZGFibGUgcmlnaHQgYXdheSBpbiBzeW5jIG1vZGUsIGJlY2F1c2UgdGhpcyBjYW4gdHJpZ2dlclxuLy8gYW5vdGhlciByZWFkKCkgY2FsbCA9PiBzdGFjayBvdmVyZmxvdy4gIFRoaXMgd2F5LCBpdCBtaWdodCB0cmlnZ2VyXG4vLyBhIG5leHRUaWNrIHJlY3Vyc2lvbiB3YXJuaW5nLCBidXQgdGhhdCdzIG5vdCBzbyBiYWQuXG5mdW5jdGlvbiBlbWl0UmVhZGFibGUoc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcbiAgc3RhdGUubmVlZFJlYWRhYmxlID0gZmFsc2U7XG4gIGlmICghc3RhdGUuZW1pdHRlZFJlYWRhYmxlKSB7XG4gICAgZGVidWcoJ2VtaXRSZWFkYWJsZScsIHN0YXRlLmZsb3dpbmcpO1xuICAgIHN0YXRlLmVtaXR0ZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgaWYgKHN0YXRlLnN5bmMpIHBuYS5uZXh0VGljayhlbWl0UmVhZGFibGVfLCBzdHJlYW0pO2Vsc2UgZW1pdFJlYWRhYmxlXyhzdHJlYW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVtaXRSZWFkYWJsZV8oc3RyZWFtKSB7XG4gIGRlYnVnKCdlbWl0IHJlYWRhYmxlJyk7XG4gIHN0cmVhbS5lbWl0KCdyZWFkYWJsZScpO1xuICBmbG93KHN0cmVhbSk7XG59XG5cbi8vIGF0IHRoaXMgcG9pbnQsIHRoZSB1c2VyIGhhcyBwcmVzdW1hYmx5IHNlZW4gdGhlICdyZWFkYWJsZScgZXZlbnQsXG4vLyBhbmQgY2FsbGVkIHJlYWQoKSB0byBjb25zdW1lIHNvbWUgZGF0YS4gIHRoYXQgbWF5IGhhdmUgdHJpZ2dlcmVkXG4vLyBpbiB0dXJuIGFub3RoZXIgX3JlYWQobikgY2FsbCwgaW4gd2hpY2ggY2FzZSByZWFkaW5nID0gdHJ1ZSBpZlxuLy8gaXQncyBpbiBwcm9ncmVzcy5cbi8vIEhvd2V2ZXIsIGlmIHdlJ3JlIG5vdCBlbmRlZCwgb3IgcmVhZGluZywgYW5kIHRoZSBsZW5ndGggPCBod20sXG4vLyB0aGVuIGdvIGFoZWFkIGFuZCB0cnkgdG8gcmVhZCBzb21lIG1vcmUgcHJlZW1wdGl2ZWx5LlxuZnVuY3Rpb24gbWF5YmVSZWFkTW9yZShzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVhZGluZ01vcmUpIHtcbiAgICBzdGF0ZS5yZWFkaW5nTW9yZSA9IHRydWU7XG4gICAgcG5hLm5leHRUaWNrKG1heWJlUmVhZE1vcmVfLCBzdHJlYW0sIHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXliZVJlYWRNb3JlXyhzdHJlYW0sIHN0YXRlKSB7XG4gIHZhciBsZW4gPSBzdGF0ZS5sZW5ndGg7XG4gIHdoaWxlICghc3RhdGUucmVhZGluZyAmJiAhc3RhdGUuZmxvd2luZyAmJiAhc3RhdGUuZW5kZWQgJiYgc3RhdGUubGVuZ3RoIDwgc3RhdGUuaGlnaFdhdGVyTWFyaykge1xuICAgIGRlYnVnKCdtYXliZVJlYWRNb3JlIHJlYWQgMCcpO1xuICAgIHN0cmVhbS5yZWFkKDApO1xuICAgIGlmIChsZW4gPT09IHN0YXRlLmxlbmd0aClcbiAgICAgIC8vIGRpZG4ndCBnZXQgYW55IGRhdGEsIHN0b3Agc3Bpbm5pbmcuXG4gICAgICBicmVhaztlbHNlIGxlbiA9IHN0YXRlLmxlbmd0aDtcbiAgfVxuICBzdGF0ZS5yZWFkaW5nTW9yZSA9IGZhbHNlO1xufVxuXG4vLyBhYnN0cmFjdCBtZXRob2QuICB0byBiZSBvdmVycmlkZGVuIGluIHNwZWNpZmljIGltcGxlbWVudGF0aW9uIGNsYXNzZXMuXG4vLyBjYWxsIGNiKGVyLCBkYXRhKSB3aGVyZSBkYXRhIGlzIDw9IG4gaW4gbGVuZ3RoLlxuLy8gZm9yIHZpcnR1YWwgKG5vbi1zdHJpbmcsIG5vbi1idWZmZXIpIHN0cmVhbXMsIFwibGVuZ3RoXCIgaXMgc29tZXdoYXRcbi8vIGFyYml0cmFyeSwgYW5kIHBlcmhhcHMgbm90IHZlcnkgbWVhbmluZ2Z1bC5cblJlYWRhYmxlLnByb3RvdHlwZS5fcmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ19yZWFkKCkgaXMgbm90IGltcGxlbWVudGVkJykpO1xufTtcblxuUmVhZGFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoZGVzdCwgcGlwZU9wdHMpIHtcbiAgdmFyIHNyYyA9IHRoaXM7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG5cbiAgc3dpdGNoIChzdGF0ZS5waXBlc0NvdW50KSB7XG4gICAgY2FzZSAwOlxuICAgICAgc3RhdGUucGlwZXMgPSBkZXN0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgc3RhdGUucGlwZXMgPSBbc3RhdGUucGlwZXMsIGRlc3RdO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlLnBpcGVzLnB1c2goZGVzdCk7XG4gICAgICBicmVhaztcbiAgfVxuICBzdGF0ZS5waXBlc0NvdW50ICs9IDE7XG4gIGRlYnVnKCdwaXBlIGNvdW50PSVkIG9wdHM9JWonLCBzdGF0ZS5waXBlc0NvdW50LCBwaXBlT3B0cyk7XG5cbiAgdmFyIGRvRW5kID0gKCFwaXBlT3B0cyB8fCBwaXBlT3B0cy5lbmQgIT09IGZhbHNlKSAmJiBkZXN0ICE9PSBwcm9jZXNzLnN0ZG91dCAmJiBkZXN0ICE9PSBwcm9jZXNzLnN0ZGVycjtcblxuICB2YXIgZW5kRm4gPSBkb0VuZCA/IG9uZW5kIDogdW5waXBlO1xuICBpZiAoc3RhdGUuZW5kRW1pdHRlZCkgcG5hLm5leHRUaWNrKGVuZEZuKTtlbHNlIHNyYy5vbmNlKCdlbmQnLCBlbmRGbik7XG5cbiAgZGVzdC5vbigndW5waXBlJywgb251bnBpcGUpO1xuICBmdW5jdGlvbiBvbnVucGlwZShyZWFkYWJsZSwgdW5waXBlSW5mbykge1xuICAgIGRlYnVnKCdvbnVucGlwZScpO1xuICAgIGlmIChyZWFkYWJsZSA9PT0gc3JjKSB7XG4gICAgICBpZiAodW5waXBlSW5mbyAmJiB1bnBpcGVJbmZvLmhhc1VucGlwZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHVucGlwZUluZm8uaGFzVW5waXBlZCA9IHRydWU7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbmVuZCgpIHtcbiAgICBkZWJ1Zygnb25lbmQnKTtcbiAgICBkZXN0LmVuZCgpO1xuICB9XG5cbiAgLy8gd2hlbiB0aGUgZGVzdCBkcmFpbnMsIGl0IHJlZHVjZXMgdGhlIGF3YWl0RHJhaW4gY291bnRlclxuICAvLyBvbiB0aGUgc291cmNlLiAgVGhpcyB3b3VsZCBiZSBtb3JlIGVsZWdhbnQgd2l0aCBhIC5vbmNlKClcbiAgLy8gaGFuZGxlciBpbiBmbG93KCksIGJ1dCBhZGRpbmcgYW5kIHJlbW92aW5nIHJlcGVhdGVkbHkgaXNcbiAgLy8gdG9vIHNsb3cuXG4gIHZhciBvbmRyYWluID0gcGlwZU9uRHJhaW4oc3JjKTtcbiAgZGVzdC5vbignZHJhaW4nLCBvbmRyYWluKTtcblxuICB2YXIgY2xlYW5lZFVwID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgZGVidWcoJ2NsZWFudXAnKTtcbiAgICAvLyBjbGVhbnVwIGV2ZW50IGhhbmRsZXJzIG9uY2UgdGhlIHBpcGUgaXMgYnJva2VuXG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZHJhaW4nLCBvbmRyYWluKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ3VucGlwZScsIG9udW5waXBlKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIHVucGlwZSk7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgb25kYXRhKTtcblxuICAgIGNsZWFuZWRVcCA9IHRydWU7XG5cbiAgICAvLyBpZiB0aGUgcmVhZGVyIGlzIHdhaXRpbmcgZm9yIGEgZHJhaW4gZXZlbnQgZnJvbSB0aGlzXG4gICAgLy8gc3BlY2lmaWMgd3JpdGVyLCB0aGVuIGl0IHdvdWxkIGNhdXNlIGl0IHRvIG5ldmVyIHN0YXJ0XG4gICAgLy8gZmxvd2luZyBhZ2Fpbi5cbiAgICAvLyBTbywgaWYgdGhpcyBpcyBhd2FpdGluZyBhIGRyYWluLCB0aGVuIHdlIGp1c3QgY2FsbCBpdCBub3cuXG4gICAgLy8gSWYgd2UgZG9uJ3Qga25vdywgdGhlbiBhc3N1bWUgdGhhdCB3ZSBhcmUgd2FpdGluZyBmb3Igb25lLlxuICAgIGlmIChzdGF0ZS5hd2FpdERyYWluICYmICghZGVzdC5fd3JpdGFibGVTdGF0ZSB8fCBkZXN0Ll93cml0YWJsZVN0YXRlLm5lZWREcmFpbikpIG9uZHJhaW4oKTtcbiAgfVxuXG4gIC8vIElmIHRoZSB1c2VyIHB1c2hlcyBtb3JlIGRhdGEgd2hpbGUgd2UncmUgd3JpdGluZyB0byBkZXN0IHRoZW4gd2UnbGwgZW5kIHVwXG4gIC8vIGluIG9uZGF0YSBhZ2Fpbi4gSG93ZXZlciwgd2Ugb25seSB3YW50IHRvIGluY3JlYXNlIGF3YWl0RHJhaW4gb25jZSBiZWNhdXNlXG4gIC8vIGRlc3Qgd2lsbCBvbmx5IGVtaXQgb25lICdkcmFpbicgZXZlbnQgZm9yIHRoZSBtdWx0aXBsZSB3cml0ZXMuXG4gIC8vID0+IEludHJvZHVjZSBhIGd1YXJkIG9uIGluY3JlYXNpbmcgYXdhaXREcmFpbi5cbiAgdmFyIGluY3JlYXNlZEF3YWl0RHJhaW4gPSBmYWxzZTtcbiAgc3JjLm9uKCdkYXRhJywgb25kYXRhKTtcbiAgZnVuY3Rpb24gb25kYXRhKGNodW5rKSB7XG4gICAgZGVidWcoJ29uZGF0YScpO1xuICAgIGluY3JlYXNlZEF3YWl0RHJhaW4gPSBmYWxzZTtcbiAgICB2YXIgcmV0ID0gZGVzdC53cml0ZShjaHVuayk7XG4gICAgaWYgKGZhbHNlID09PSByZXQgJiYgIWluY3JlYXNlZEF3YWl0RHJhaW4pIHtcbiAgICAgIC8vIElmIHRoZSB1c2VyIHVucGlwZWQgZHVyaW5nIGBkZXN0LndyaXRlKClgLCBpdCBpcyBwb3NzaWJsZVxuICAgICAgLy8gdG8gZ2V0IHN0dWNrIGluIGEgcGVybWFuZW50bHkgcGF1c2VkIHN0YXRlIGlmIHRoYXQgd3JpdGVcbiAgICAgIC8vIGFsc28gcmV0dXJuZWQgZmFsc2UuXG4gICAgICAvLyA9PiBDaGVjayB3aGV0aGVyIGBkZXN0YCBpcyBzdGlsbCBhIHBpcGluZyBkZXN0aW5hdGlvbi5cbiAgICAgIGlmICgoc3RhdGUucGlwZXNDb3VudCA9PT0gMSAmJiBzdGF0ZS5waXBlcyA9PT0gZGVzdCB8fCBzdGF0ZS5waXBlc0NvdW50ID4gMSAmJiBpbmRleE9mKHN0YXRlLnBpcGVzLCBkZXN0KSAhPT0gLTEpICYmICFjbGVhbmVkVXApIHtcbiAgICAgICAgZGVidWcoJ2ZhbHNlIHdyaXRlIHJlc3BvbnNlLCBwYXVzZScsIHNyYy5fcmVhZGFibGVTdGF0ZS5hd2FpdERyYWluKTtcbiAgICAgICAgc3JjLl9yZWFkYWJsZVN0YXRlLmF3YWl0RHJhaW4rKztcbiAgICAgICAgaW5jcmVhc2VkQXdhaXREcmFpbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBzcmMucGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgZGVzdCBoYXMgYW4gZXJyb3IsIHRoZW4gc3RvcCBwaXBpbmcgaW50byBpdC5cbiAgLy8gaG93ZXZlciwgZG9uJ3Qgc3VwcHJlc3MgdGhlIHRocm93aW5nIGJlaGF2aW9yIGZvciB0aGlzLlxuICBmdW5jdGlvbiBvbmVycm9yKGVyKSB7XG4gICAgZGVidWcoJ29uZXJyb3InLCBlcik7XG4gICAgdW5waXBlKCk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICBpZiAoRUVsaXN0ZW5lckNvdW50KGRlc3QsICdlcnJvcicpID09PSAwKSBkZXN0LmVtaXQoJ2Vycm9yJywgZXIpO1xuICB9XG5cbiAgLy8gTWFrZSBzdXJlIG91ciBlcnJvciBoYW5kbGVyIGlzIGF0dGFjaGVkIGJlZm9yZSB1c2VybGFuZCBvbmVzLlxuICBwcmVwZW5kTGlzdGVuZXIoZGVzdCwgJ2Vycm9yJywgb25lcnJvcik7XG5cbiAgLy8gQm90aCBjbG9zZSBhbmQgZmluaXNoIHNob3VsZCB0cmlnZ2VyIHVucGlwZSwgYnV0IG9ubHkgb25jZS5cbiAgZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gICAgdW5waXBlKCk7XG4gIH1cbiAgZGVzdC5vbmNlKCdjbG9zZScsIG9uY2xvc2UpO1xuICBmdW5jdGlvbiBvbmZpbmlzaCgpIHtcbiAgICBkZWJ1Zygnb25maW5pc2gnKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuICAgIHVucGlwZSgpO1xuICB9XG4gIGRlc3Qub25jZSgnZmluaXNoJywgb25maW5pc2gpO1xuXG4gIGZ1bmN0aW9uIHVucGlwZSgpIHtcbiAgICBkZWJ1ZygndW5waXBlJyk7XG4gICAgc3JjLnVucGlwZShkZXN0KTtcbiAgfVxuXG4gIC8vIHRlbGwgdGhlIGRlc3QgdGhhdCBpdCdzIGJlaW5nIHBpcGVkIHRvXG4gIGRlc3QuZW1pdCgncGlwZScsIHNyYyk7XG5cbiAgLy8gc3RhcnQgdGhlIGZsb3cgaWYgaXQgaGFzbid0IGJlZW4gc3RhcnRlZCBhbHJlYWR5LlxuICBpZiAoIXN0YXRlLmZsb3dpbmcpIHtcbiAgICBkZWJ1ZygncGlwZSByZXN1bWUnKTtcbiAgICBzcmMucmVzdW1lKCk7XG4gIH1cblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmZ1bmN0aW9uIHBpcGVPbkRyYWluKHNyYykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IHNyYy5fcmVhZGFibGVTdGF0ZTtcbiAgICBkZWJ1ZygncGlwZU9uRHJhaW4nLCBzdGF0ZS5hd2FpdERyYWluKTtcbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbikgc3RhdGUuYXdhaXREcmFpbi0tO1xuICAgIGlmIChzdGF0ZS5hd2FpdERyYWluID09PSAwICYmIEVFbGlzdGVuZXJDb3VudChzcmMsICdkYXRhJykpIHtcbiAgICAgIHN0YXRlLmZsb3dpbmcgPSB0cnVlO1xuICAgICAgZmxvdyhzcmMpO1xuICAgIH1cbiAgfTtcbn1cblxuUmVhZGFibGUucHJvdG90eXBlLnVucGlwZSA9IGZ1bmN0aW9uIChkZXN0KSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHZhciB1bnBpcGVJbmZvID0geyBoYXNVbnBpcGVkOiBmYWxzZSB9O1xuXG4gIC8vIGlmIHdlJ3JlIG5vdCBwaXBpbmcgYW55d2hlcmUsIHRoZW4gZG8gbm90aGluZy5cbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDApIHJldHVybiB0aGlzO1xuXG4gIC8vIGp1c3Qgb25lIGRlc3RpbmF0aW9uLiAgbW9zdCBjb21tb24gY2FzZS5cbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDEpIHtcbiAgICAvLyBwYXNzZWQgaW4gb25lLCBidXQgaXQncyBub3QgdGhlIHJpZ2h0IG9uZS5cbiAgICBpZiAoZGVzdCAmJiBkZXN0ICE9PSBzdGF0ZS5waXBlcykgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAoIWRlc3QpIGRlc3QgPSBzdGF0ZS5waXBlcztcblxuICAgIC8vIGdvdCBhIG1hdGNoLlxuICAgIHN0YXRlLnBpcGVzID0gbnVsbDtcbiAgICBzdGF0ZS5waXBlc0NvdW50ID0gMDtcbiAgICBzdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgaWYgKGRlc3QpIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcywgdW5waXBlSW5mbyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzbG93IGNhc2UuIG11bHRpcGxlIHBpcGUgZGVzdGluYXRpb25zLlxuXG4gIGlmICghZGVzdCkge1xuICAgIC8vIHJlbW92ZSBhbGwuXG4gICAgdmFyIGRlc3RzID0gc3RhdGUucGlwZXM7XG4gICAgdmFyIGxlbiA9IHN0YXRlLnBpcGVzQ291bnQ7XG4gICAgc3RhdGUucGlwZXMgPSBudWxsO1xuICAgIHN0YXRlLnBpcGVzQ291bnQgPSAwO1xuICAgIHN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RzW2ldLmVtaXQoJ3VucGlwZScsIHRoaXMsIHVucGlwZUluZm8pO1xuICAgIH1yZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRyeSB0byBmaW5kIHRoZSByaWdodCBvbmUuXG4gIHZhciBpbmRleCA9IGluZGV4T2Yoc3RhdGUucGlwZXMsIGRlc3QpO1xuICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gdGhpcztcblxuICBzdGF0ZS5waXBlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBzdGF0ZS5waXBlc0NvdW50IC09IDE7XG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAxKSBzdGF0ZS5waXBlcyA9IHN0YXRlLnBpcGVzWzBdO1xuXG4gIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcywgdW5waXBlSW5mbyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBzZXQgdXAgZGF0YSBldmVudHMgaWYgdGhleSBhcmUgYXNrZWQgZm9yXG4vLyBFbnN1cmUgcmVhZGFibGUgbGlzdGVuZXJzIGV2ZW50dWFsbHkgZ2V0IHNvbWV0aGluZ1xuUmVhZGFibGUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2LCBmbikge1xuICB2YXIgcmVzID0gU3RyZWFtLnByb3RvdHlwZS5vbi5jYWxsKHRoaXMsIGV2LCBmbik7XG5cbiAgaWYgKGV2ID09PSAnZGF0YScpIHtcbiAgICAvLyBTdGFydCBmbG93aW5nIG9uIG5leHQgdGljayBpZiBzdHJlYW0gaXNuJ3QgZXhwbGljaXRseSBwYXVzZWRcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nICE9PSBmYWxzZSkgdGhpcy5yZXN1bWUoKTtcbiAgfSBlbHNlIGlmIChldiA9PT0gJ3JlYWRhYmxlJykge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gICAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmICFzdGF0ZS5yZWFkYWJsZUxpc3RlbmluZykge1xuICAgICAgc3RhdGUucmVhZGFibGVMaXN0ZW5pbmcgPSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG4gICAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICAgICAgcG5hLm5leHRUaWNrKG5SZWFkaW5nTmV4dFRpY2ssIHRoaXMpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgZW1pdFJlYWRhYmxlKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuUmVhZGFibGUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gUmVhZGFibGUucHJvdG90eXBlLm9uO1xuXG5mdW5jdGlvbiBuUmVhZGluZ05leHRUaWNrKHNlbGYpIHtcbiAgZGVidWcoJ3JlYWRhYmxlIG5leHR0aWNrIHJlYWQgMCcpO1xuICBzZWxmLnJlYWQoMCk7XG59XG5cbi8vIHBhdXNlKCkgYW5kIHJlc3VtZSgpIGFyZSByZW1uYW50cyBvZiB0aGUgbGVnYWN5IHJlYWRhYmxlIHN0cmVhbSBBUElcbi8vIElmIHRoZSB1c2VyIHVzZXMgdGhlbSwgdGhlbiBzd2l0Y2ggaW50byBvbGQgbW9kZS5cblJlYWRhYmxlLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIGlmICghc3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdyZXN1bWUnKTtcbiAgICBzdGF0ZS5mbG93aW5nID0gdHJ1ZTtcbiAgICByZXN1bWUodGhpcywgc3RhdGUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gcmVzdW1lKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5yZXN1bWVTY2hlZHVsZWQpIHtcbiAgICBzdGF0ZS5yZXN1bWVTY2hlZHVsZWQgPSB0cnVlO1xuICAgIHBuYS5uZXh0VGljayhyZXN1bWVfLCBzdHJlYW0sIHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXN1bWVfKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5yZWFkaW5nKSB7XG4gICAgZGVidWcoJ3Jlc3VtZSByZWFkIDAnKTtcbiAgICBzdHJlYW0ucmVhZCgwKTtcbiAgfVxuXG4gIHN0YXRlLnJlc3VtZVNjaGVkdWxlZCA9IGZhbHNlO1xuICBzdGF0ZS5hd2FpdERyYWluID0gMDtcbiAgc3RyZWFtLmVtaXQoJ3Jlc3VtZScpO1xuICBmbG93KHN0cmVhbSk7XG4gIGlmIChzdGF0ZS5mbG93aW5nICYmICFzdGF0ZS5yZWFkaW5nKSBzdHJlYW0ucmVhZCgwKTtcbn1cblxuUmVhZGFibGUucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygnY2FsbCBwYXVzZSBmbG93aW5nPSVqJywgdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nKTtcbiAgaWYgKGZhbHNlICE9PSB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcpIHtcbiAgICBkZWJ1ZygncGF1c2UnKTtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoJ3BhdXNlJyk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBmbG93KHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIGRlYnVnKCdmbG93Jywgc3RhdGUuZmxvd2luZyk7XG4gIHdoaWxlIChzdGF0ZS5mbG93aW5nICYmIHN0cmVhbS5yZWFkKCkgIT09IG51bGwpIHt9XG59XG5cbi8vIHdyYXAgYW4gb2xkLXN0eWxlIHN0cmVhbSBhcyB0aGUgYXN5bmMgZGF0YSBzb3VyY2UuXG4vLyBUaGlzIGlzICpub3QqIHBhcnQgb2YgdGhlIHJlYWRhYmxlIHN0cmVhbSBpbnRlcmZhY2UuXG4vLyBJdCBpcyBhbiB1Z2x5IHVuZm9ydHVuYXRlIG1lc3Mgb2YgaGlzdG9yeS5cblJlYWRhYmxlLnByb3RvdHlwZS53cmFwID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHZhciBwYXVzZWQgPSBmYWxzZTtcblxuICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBkZWJ1Zygnd3JhcHBlZCBlbmQnKTtcbiAgICBpZiAoc3RhdGUuZGVjb2RlciAmJiAhc3RhdGUuZW5kZWQpIHtcbiAgICAgIHZhciBjaHVuayA9IHN0YXRlLmRlY29kZXIuZW5kKCk7XG4gICAgICBpZiAoY2h1bmsgJiYgY2h1bmsubGVuZ3RoKSBfdGhpcy5wdXNoKGNodW5rKTtcbiAgICB9XG5cbiAgICBfdGhpcy5wdXNoKG51bGwpO1xuICB9KTtcblxuICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICBkZWJ1Zygnd3JhcHBlZCBkYXRhJyk7XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIGNodW5rID0gc3RhdGUuZGVjb2Rlci53cml0ZShjaHVuayk7XG5cbiAgICAvLyBkb24ndCBza2lwIG92ZXIgZmFsc3kgdmFsdWVzIGluIG9iamVjdE1vZGVcbiAgICBpZiAoc3RhdGUub2JqZWN0TW9kZSAmJiAoY2h1bmsgPT09IG51bGwgfHwgY2h1bmsgPT09IHVuZGVmaW5lZCkpIHJldHVybjtlbHNlIGlmICghc3RhdGUub2JqZWN0TW9kZSAmJiAoIWNodW5rIHx8ICFjaHVuay5sZW5ndGgpKSByZXR1cm47XG5cbiAgICB2YXIgcmV0ID0gX3RoaXMucHVzaChjaHVuayk7XG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICBzdHJlYW0ucGF1c2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHByb3h5IGFsbCB0aGUgb3RoZXIgbWV0aG9kcy5cbiAgLy8gaW1wb3J0YW50IHdoZW4gd3JhcHBpbmcgZmlsdGVycyBhbmQgZHVwbGV4ZXMuXG4gIGZvciAodmFyIGkgaW4gc3RyZWFtKSB7XG4gICAgaWYgKHRoaXNbaV0gPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygc3RyZWFtW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzW2ldID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBzdHJlYW1bbWV0aG9kXS5hcHBseShzdHJlYW0sIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9KGkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByb3h5IGNlcnRhaW4gaW1wb3J0YW50IGV2ZW50cy5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCBrUHJveHlFdmVudHMubGVuZ3RoOyBuKyspIHtcbiAgICBzdHJlYW0ub24oa1Byb3h5RXZlbnRzW25dLCB0aGlzLmVtaXQuYmluZCh0aGlzLCBrUHJveHlFdmVudHNbbl0pKTtcbiAgfVxuXG4gIC8vIHdoZW4gd2UgdHJ5IHRvIGNvbnN1bWUgc29tZSBtb3JlIGJ5dGVzLCBzaW1wbHkgdW5wYXVzZSB0aGVcbiAgLy8gdW5kZXJseWluZyBzdHJlYW0uXG4gIHRoaXMuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICAgIGRlYnVnKCd3cmFwcGVkIF9yZWFkJywgbik7XG4gICAgaWYgKHBhdXNlZCkge1xuICAgICAgcGF1c2VkID0gZmFsc2U7XG4gICAgICBzdHJlYW0ucmVzdW1lKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlLnByb3RvdHlwZSwgJ3JlYWRhYmxlSGlnaFdhdGVyTWFyaycsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuaGlnaFdhdGVyTWFyaztcbiAgfVxufSk7XG5cbi8vIGV4cG9zZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seS5cblJlYWRhYmxlLl9mcm9tTGlzdCA9IGZyb21MaXN0O1xuXG4vLyBQbHVjayBvZmYgbiBieXRlcyBmcm9tIGFuIGFycmF5IG9mIGJ1ZmZlcnMuXG4vLyBMZW5ndGggaXMgdGhlIGNvbWJpbmVkIGxlbmd0aHMgb2YgYWxsIHRoZSBidWZmZXJzIGluIHRoZSBsaXN0LlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBmcm9tTGlzdChuLCBzdGF0ZSkge1xuICAvLyBub3RoaW5nIGJ1ZmZlcmVkXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gIHZhciByZXQ7XG4gIGlmIChzdGF0ZS5vYmplY3RNb2RlKSByZXQgPSBzdGF0ZS5idWZmZXIuc2hpZnQoKTtlbHNlIGlmICghbiB8fCBuID49IHN0YXRlLmxlbmd0aCkge1xuICAgIC8vIHJlYWQgaXQgYWxsLCB0cnVuY2F0ZSB0aGUgbGlzdFxuICAgIGlmIChzdGF0ZS5kZWNvZGVyKSByZXQgPSBzdGF0ZS5idWZmZXIuam9pbignJyk7ZWxzZSBpZiAoc3RhdGUuYnVmZmVyLmxlbmd0aCA9PT0gMSkgcmV0ID0gc3RhdGUuYnVmZmVyLmhlYWQuZGF0YTtlbHNlIHJldCA9IHN0YXRlLmJ1ZmZlci5jb25jYXQoc3RhdGUubGVuZ3RoKTtcbiAgICBzdGF0ZS5idWZmZXIuY2xlYXIoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZWFkIHBhcnQgb2YgbGlzdFxuICAgIHJldCA9IGZyb21MaXN0UGFydGlhbChuLCBzdGF0ZS5idWZmZXIsIHN0YXRlLmRlY29kZXIpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuLy8gRXh0cmFjdHMgb25seSBlbm91Z2ggYnVmZmVyZWQgZGF0YSB0byBzYXRpc2Z5IHRoZSBhbW91bnQgcmVxdWVzdGVkLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBmcm9tTGlzdFBhcnRpYWwobiwgbGlzdCwgaGFzU3RyaW5ncykge1xuICB2YXIgcmV0O1xuICBpZiAobiA8IGxpc3QuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgIC8vIHNsaWNlIGlzIHRoZSBzYW1lIGZvciBidWZmZXJzIGFuZCBzdHJpbmdzXG4gICAgcmV0ID0gbGlzdC5oZWFkLmRhdGEuc2xpY2UoMCwgbik7XG4gICAgbGlzdC5oZWFkLmRhdGEgPSBsaXN0LmhlYWQuZGF0YS5zbGljZShuKTtcbiAgfSBlbHNlIGlmIChuID09PSBsaXN0LmhlYWQuZGF0YS5sZW5ndGgpIHtcbiAgICAvLyBmaXJzdCBjaHVuayBpcyBhIHBlcmZlY3QgbWF0Y2hcbiAgICByZXQgPSBsaXN0LnNoaWZ0KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVzdWx0IHNwYW5zIG1vcmUgdGhhbiBvbmUgYnVmZmVyXG4gICAgcmV0ID0gaGFzU3RyaW5ncyA/IGNvcHlGcm9tQnVmZmVyU3RyaW5nKG4sIGxpc3QpIDogY29weUZyb21CdWZmZXIobiwgbGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLy8gQ29waWVzIGEgc3BlY2lmaWVkIGFtb3VudCBvZiBjaGFyYWN0ZXJzIGZyb20gdGhlIGxpc3Qgb2YgYnVmZmVyZWQgZGF0YVxuLy8gY2h1bmtzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBjb3B5RnJvbUJ1ZmZlclN0cmluZyhuLCBsaXN0KSB7XG4gIHZhciBwID0gbGlzdC5oZWFkO1xuICB2YXIgYyA9IDE7XG4gIHZhciByZXQgPSBwLmRhdGE7XG4gIG4gLT0gcmV0Lmxlbmd0aDtcbiAgd2hpbGUgKHAgPSBwLm5leHQpIHtcbiAgICB2YXIgc3RyID0gcC5kYXRhO1xuICAgIHZhciBuYiA9IG4gPiBzdHIubGVuZ3RoID8gc3RyLmxlbmd0aCA6IG47XG4gICAgaWYgKG5iID09PSBzdHIubGVuZ3RoKSByZXQgKz0gc3RyO2Vsc2UgcmV0ICs9IHN0ci5zbGljZSgwLCBuKTtcbiAgICBuIC09IG5iO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgKytjO1xuICAgICAgICBpZiAocC5uZXh0KSBsaXN0LmhlYWQgPSBwLm5leHQ7ZWxzZSBsaXN0LmhlYWQgPSBsaXN0LnRhaWwgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5oZWFkID0gcDtcbiAgICAgICAgcC5kYXRhID0gc3RyLnNsaWNlKG5iKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICArK2M7XG4gIH1cbiAgbGlzdC5sZW5ndGggLT0gYztcbiAgcmV0dXJuIHJldDtcbn1cblxuLy8gQ29waWVzIGEgc3BlY2lmaWVkIGFtb3VudCBvZiBieXRlcyBmcm9tIHRoZSBsaXN0IG9mIGJ1ZmZlcmVkIGRhdGEgY2h1bmtzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBjb3B5RnJvbUJ1ZmZlcihuLCBsaXN0KSB7XG4gIHZhciByZXQgPSBCdWZmZXIuYWxsb2NVbnNhZmUobik7XG4gIHZhciBwID0gbGlzdC5oZWFkO1xuICB2YXIgYyA9IDE7XG4gIHAuZGF0YS5jb3B5KHJldCk7XG4gIG4gLT0gcC5kYXRhLmxlbmd0aDtcbiAgd2hpbGUgKHAgPSBwLm5leHQpIHtcbiAgICB2YXIgYnVmID0gcC5kYXRhO1xuICAgIHZhciBuYiA9IG4gPiBidWYubGVuZ3RoID8gYnVmLmxlbmd0aCA6IG47XG4gICAgYnVmLmNvcHkocmV0LCByZXQubGVuZ3RoIC0gbiwgMCwgbmIpO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gYnVmLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBidWYuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBlbmRSZWFkYWJsZShzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuXG4gIC8vIElmIHdlIGdldCBoZXJlIGJlZm9yZSBjb25zdW1pbmcgYWxsIHRoZSBieXRlcywgdGhlbiB0aGF0IGlzIGFcbiAgLy8gYnVnIGluIG5vZGUuICBTaG91bGQgbmV2ZXIgaGFwcGVuLlxuICBpZiAoc3RhdGUubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKCdcImVuZFJlYWRhYmxlKClcIiBjYWxsZWQgb24gbm9uLWVtcHR5IHN0cmVhbScpO1xuXG4gIGlmICghc3RhdGUuZW5kRW1pdHRlZCkge1xuICAgIHN0YXRlLmVuZGVkID0gdHJ1ZTtcbiAgICBwbmEubmV4dFRpY2soZW5kUmVhZGFibGVOVCwgc3RhdGUsIHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGVOVChzdGF0ZSwgc3RyZWFtKSB7XG4gIC8vIENoZWNrIHRoYXQgd2UgZGlkbid0IGdldCBvbmUgbGFzdCB1bnNoaWZ0LlxuICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQgJiYgc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhdGUuZW5kRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgc3RyZWFtLmVtaXQoJ2VuZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YoeHMsIHgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoeHNbaV0gPT09IHgpIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gYSB0cmFuc2Zvcm0gc3RyZWFtIGlzIGEgcmVhZGFibGUvd3JpdGFibGUgc3RyZWFtIHdoZXJlIHlvdSBkb1xuLy8gc29tZXRoaW5nIHdpdGggdGhlIGRhdGEuICBTb21ldGltZXMgaXQncyBjYWxsZWQgYSBcImZpbHRlclwiLFxuLy8gYnV0IHRoYXQncyBub3QgYSBncmVhdCBuYW1lIGZvciBpdCwgc2luY2UgdGhhdCBpbXBsaWVzIGEgdGhpbmcgd2hlcmVcbi8vIHNvbWUgYml0cyBwYXNzIHRocm91Z2gsIGFuZCBvdGhlcnMgYXJlIHNpbXBseSBpZ25vcmVkLiAgKFRoYXQgd291bGRcbi8vIGJlIGEgdmFsaWQgZXhhbXBsZSBvZiBhIHRyYW5zZm9ybSwgb2YgY291cnNlLilcbi8vXG4vLyBXaGlsZSB0aGUgb3V0cHV0IGlzIGNhdXNhbGx5IHJlbGF0ZWQgdG8gdGhlIGlucHV0LCBpdCdzIG5vdCBhXG4vLyBuZWNlc3NhcmlseSBzeW1tZXRyaWMgb3Igc3luY2hyb25vdXMgdHJhbnNmb3JtYXRpb24uICBGb3IgZXhhbXBsZSxcbi8vIGEgemxpYiBzdHJlYW0gbWlnaHQgdGFrZSBtdWx0aXBsZSBwbGFpbi10ZXh0IHdyaXRlcygpLCBhbmQgdGhlblxuLy8gZW1pdCBhIHNpbmdsZSBjb21wcmVzc2VkIGNodW5rIHNvbWUgdGltZSBpbiB0aGUgZnV0dXJlLlxuLy9cbi8vIEhlcmUncyBob3cgdGhpcyB3b3Jrczpcbi8vXG4vLyBUaGUgVHJhbnNmb3JtIHN0cmVhbSBoYXMgYWxsIHRoZSBhc3BlY3RzIG9mIHRoZSByZWFkYWJsZSBhbmQgd3JpdGFibGVcbi8vIHN0cmVhbSBjbGFzc2VzLiAgV2hlbiB5b3Ugd3JpdGUoY2h1bmspLCB0aGF0IGNhbGxzIF93cml0ZShjaHVuayxjYilcbi8vIGludGVybmFsbHksIGFuZCByZXR1cm5zIGZhbHNlIGlmIHRoZXJlJ3MgYSBsb3Qgb2YgcGVuZGluZyB3cml0ZXNcbi8vIGJ1ZmZlcmVkIHVwLiAgV2hlbiB5b3UgY2FsbCByZWFkKCksIHRoYXQgY2FsbHMgX3JlYWQobikgdW50aWxcbi8vIHRoZXJlJ3MgZW5vdWdoIHBlbmRpbmcgcmVhZGFibGUgZGF0YSBidWZmZXJlZCB1cC5cbi8vXG4vLyBJbiBhIHRyYW5zZm9ybSBzdHJlYW0sIHRoZSB3cml0dGVuIGRhdGEgaXMgcGxhY2VkIGluIGEgYnVmZmVyLiAgV2hlblxuLy8gX3JlYWQobikgaXMgY2FsbGVkLCBpdCB0cmFuc2Zvcm1zIHRoZSBxdWV1ZWQgdXAgZGF0YSwgY2FsbGluZyB0aGVcbi8vIGJ1ZmZlcmVkIF93cml0ZSBjYidzIGFzIGl0IGNvbnN1bWVzIGNodW5rcy4gIElmIGNvbnN1bWluZyBhIHNpbmdsZVxuLy8gd3JpdHRlbiBjaHVuayB3b3VsZCByZXN1bHQgaW4gbXVsdGlwbGUgb3V0cHV0IGNodW5rcywgdGhlbiB0aGUgZmlyc3Rcbi8vIG91dHB1dHRlZCBiaXQgY2FsbHMgdGhlIHJlYWRjYiwgYW5kIHN1YnNlcXVlbnQgY2h1bmtzIGp1c3QgZ28gaW50b1xuLy8gdGhlIHJlYWQgYnVmZmVyLCBhbmQgd2lsbCBjYXVzZSBpdCB0byBlbWl0ICdyZWFkYWJsZScgaWYgbmVjZXNzYXJ5LlxuLy9cbi8vIFRoaXMgd2F5LCBiYWNrLXByZXNzdXJlIGlzIGFjdHVhbGx5IGRldGVybWluZWQgYnkgdGhlIHJlYWRpbmcgc2lkZSxcbi8vIHNpbmNlIF9yZWFkIGhhcyB0byBiZSBjYWxsZWQgdG8gc3RhcnQgcHJvY2Vzc2luZyBhIG5ldyBjaHVuay4gIEhvd2V2ZXIsXG4vLyBhIHBhdGhvbG9naWNhbCBpbmZsYXRlIHR5cGUgb2YgdHJhbnNmb3JtIGNhbiBjYXVzZSBleGNlc3NpdmUgYnVmZmVyaW5nXG4vLyBoZXJlLiAgRm9yIGV4YW1wbGUsIGltYWdpbmUgYSBzdHJlYW0gd2hlcmUgZXZlcnkgYnl0ZSBvZiBpbnB1dCBpc1xuLy8gaW50ZXJwcmV0ZWQgYXMgYW4gaW50ZWdlciBmcm9tIDAtMjU1LCBhbmQgdGhlbiByZXN1bHRzIGluIHRoYXQgbWFueVxuLy8gYnl0ZXMgb2Ygb3V0cHV0LiAgV3JpdGluZyB0aGUgNCBieXRlcyB7ZmYsZmYsZmYsZmZ9IHdvdWxkIHJlc3VsdCBpblxuLy8gMWtiIG9mIGRhdGEgYmVpbmcgb3V0cHV0LiAgSW4gdGhpcyBjYXNlLCB5b3UgY291bGQgd3JpdGUgYSB2ZXJ5IHNtYWxsXG4vLyBhbW91bnQgb2YgaW5wdXQsIGFuZCBlbmQgdXAgd2l0aCBhIHZlcnkgbGFyZ2UgYW1vdW50IG9mIG91dHB1dC4gIEluXG4vLyBzdWNoIGEgcGF0aG9sb2dpY2FsIGluZmxhdGluZyBtZWNoYW5pc20sIHRoZXJlJ2QgYmUgbm8gd2F5IHRvIHRlbGxcbi8vIHRoZSBzeXN0ZW0gdG8gc3RvcCBkb2luZyB0aGUgdHJhbnNmb3JtLiAgQSBzaW5nbGUgNE1CIHdyaXRlIGNvdWxkXG4vLyBjYXVzZSB0aGUgc3lzdGVtIHRvIHJ1biBvdXQgb2YgbWVtb3J5LlxuLy9cbi8vIEhvd2V2ZXIsIGV2ZW4gaW4gc3VjaCBhIHBhdGhvbG9naWNhbCBjYXNlLCBvbmx5IGEgc2luZ2xlIHdyaXR0ZW4gY2h1bmtcbi8vIHdvdWxkIGJlIGNvbnN1bWVkLCBhbmQgdGhlbiB0aGUgcmVzdCB3b3VsZCB3YWl0ICh1bi10cmFuc2Zvcm1lZCkgdW50aWxcbi8vIHRoZSByZXN1bHRzIG9mIHRoZSBwcmV2aW91cyB0cmFuc2Zvcm1lZCBjaHVuayB3ZXJlIGNvbnN1bWVkLlxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuXG52YXIgRHVwbGV4ID0gcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnV0aWwuaW5oZXJpdHMoVHJhbnNmb3JtLCBEdXBsZXgpO1xuXG5mdW5jdGlvbiBhZnRlclRyYW5zZm9ybShlciwgZGF0YSkge1xuICB2YXIgdHMgPSB0aGlzLl90cmFuc2Zvcm1TdGF0ZTtcbiAgdHMudHJhbnNmb3JtaW5nID0gZmFsc2U7XG5cbiAgdmFyIGNiID0gdHMud3JpdGVjYjtcblxuICBpZiAoIWNiKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ3dyaXRlIGNhbGxiYWNrIGNhbGxlZCBtdWx0aXBsZSB0aW1lcycpKTtcbiAgfVxuXG4gIHRzLndyaXRlY2h1bmsgPSBudWxsO1xuICB0cy53cml0ZWNiID0gbnVsbDtcblxuICBpZiAoZGF0YSAhPSBudWxsKSAvLyBzaW5nbGUgZXF1YWxzIGNoZWNrIGZvciBib3RoIGBudWxsYCBhbmQgYHVuZGVmaW5lZGBcbiAgICB0aGlzLnB1c2goZGF0YSk7XG5cbiAgY2IoZXIpO1xuXG4gIHZhciBycyA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHJzLnJlYWRpbmcgPSBmYWxzZTtcbiAgaWYgKHJzLm5lZWRSZWFkYWJsZSB8fCBycy5sZW5ndGggPCBycy5oaWdoV2F0ZXJNYXJrKSB7XG4gICAgdGhpcy5fcmVhZChycy5oaWdoV2F0ZXJNYXJrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBUcmFuc2Zvcm0ob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHJhbnNmb3JtKSkgcmV0dXJuIG5ldyBUcmFuc2Zvcm0ob3B0aW9ucyk7XG5cbiAgRHVwbGV4LmNhbGwodGhpcywgb3B0aW9ucyk7XG5cbiAgdGhpcy5fdHJhbnNmb3JtU3RhdGUgPSB7XG4gICAgYWZ0ZXJUcmFuc2Zvcm06IGFmdGVyVHJhbnNmb3JtLmJpbmQodGhpcyksXG4gICAgbmVlZFRyYW5zZm9ybTogZmFsc2UsXG4gICAgdHJhbnNmb3JtaW5nOiBmYWxzZSxcbiAgICB3cml0ZWNiOiBudWxsLFxuICAgIHdyaXRlY2h1bms6IG51bGwsXG4gICAgd3JpdGVlbmNvZGluZzogbnVsbFxuICB9O1xuXG4gIC8vIHN0YXJ0IG91dCBhc2tpbmcgZm9yIGEgcmVhZGFibGUgZXZlbnQgb25jZSBkYXRhIGlzIHRyYW5zZm9ybWVkLlxuICB0aGlzLl9yZWFkYWJsZVN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG5cbiAgLy8gd2UgaGF2ZSBpbXBsZW1lbnRlZCB0aGUgX3JlYWQgbWV0aG9kLCBhbmQgZG9uZSB0aGUgb3RoZXIgdGhpbmdzXG4gIC8vIHRoYXQgUmVhZGFibGUgd2FudHMgYmVmb3JlIHRoZSBmaXJzdCBfcmVhZCBjYWxsLCBzbyB1bnNldCB0aGVcbiAgLy8gc3luYyBndWFyZCBmbGFnLlxuICB0aGlzLl9yZWFkYWJsZVN0YXRlLnN5bmMgPSBmYWxzZTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbicpIHRoaXMuX3RyYW5zZm9ybSA9IG9wdGlvbnMudHJhbnNmb3JtO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZsdXNoID09PSAnZnVuY3Rpb24nKSB0aGlzLl9mbHVzaCA9IG9wdGlvbnMuZmx1c2g7XG4gIH1cblxuICAvLyBXaGVuIHRoZSB3cml0YWJsZSBzaWRlIGZpbmlzaGVzLCB0aGVuIGZsdXNoIG91dCBhbnl0aGluZyByZW1haW5pbmcuXG4gIHRoaXMub24oJ3ByZWZpbmlzaCcsIHByZWZpbmlzaCk7XG59XG5cbmZ1bmN0aW9uIHByZWZpbmlzaCgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBpZiAodHlwZW9mIHRoaXMuX2ZsdXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5fZmx1c2goZnVuY3Rpb24gKGVyLCBkYXRhKSB7XG4gICAgICBkb25lKF90aGlzLCBlciwgZGF0YSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZG9uZSh0aGlzLCBudWxsLCBudWxsKTtcbiAgfVxufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nKSB7XG4gIHRoaXMuX3RyYW5zZm9ybVN0YXRlLm5lZWRUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgcmV0dXJuIER1cGxleC5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIGNodW5rLCBlbmNvZGluZyk7XG59O1xuXG4vLyBUaGlzIGlzIHRoZSBwYXJ0IHdoZXJlIHlvdSBkbyBzdHVmZiFcbi8vIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb24gaW4gaW1wbGVtZW50YXRpb24gY2xhc3Nlcy5cbi8vICdjaHVuaycgaXMgYW4gaW5wdXQgY2h1bmsuXG4vL1xuLy8gQ2FsbCBgcHVzaChuZXdDaHVuaylgIHRvIHBhc3MgYWxvbmcgdHJhbnNmb3JtZWQgb3V0cHV0XG4vLyB0byB0aGUgcmVhZGFibGUgc2lkZS4gIFlvdSBtYXkgY2FsbCAncHVzaCcgemVybyBvciBtb3JlIHRpbWVzLlxuLy9cbi8vIENhbGwgYGNiKGVycilgIHdoZW4geW91IGFyZSBkb25lIHdpdGggdGhpcyBjaHVuay4gIElmIHlvdSBwYXNzXG4vLyBhbiBlcnJvciwgdGhlbiB0aGF0J2xsIHB1dCB0aGUgaHVydCBvbiB0aGUgd2hvbGUgb3BlcmF0aW9uLiAgSWYgeW91XG4vLyBuZXZlciBjYWxsIGNiKCksIHRoZW4geW91J2xsIG5ldmVyIGdldCBhbm90aGVyIGNodW5rLlxuVHJhbnNmb3JtLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdfdHJhbnNmb3JtKCkgaXMgbm90IGltcGxlbWVudGVkJyk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuICB0cy53cml0ZWNiID0gY2I7XG4gIHRzLndyaXRlY2h1bmsgPSBjaHVuaztcbiAgdHMud3JpdGVlbmNvZGluZyA9IGVuY29kaW5nO1xuICBpZiAoIXRzLnRyYW5zZm9ybWluZykge1xuICAgIHZhciBycyA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gICAgaWYgKHRzLm5lZWRUcmFuc2Zvcm0gfHwgcnMubmVlZFJlYWRhYmxlIHx8IHJzLmxlbmd0aCA8IHJzLmhpZ2hXYXRlck1hcmspIHRoaXMuX3JlYWQocnMuaGlnaFdhdGVyTWFyayk7XG4gIH1cbn07XG5cbi8vIERvZXNuJ3QgbWF0dGVyIHdoYXQgdGhlIGFyZ3MgYXJlIGhlcmUuXG4vLyBfdHJhbnNmb3JtIGRvZXMgYWxsIHRoZSB3b3JrLlxuLy8gVGhhdCB3ZSBnb3QgaGVyZSBtZWFucyB0aGF0IHRoZSByZWFkYWJsZSBzaWRlIHdhbnRzIG1vcmUgZGF0YS5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICB2YXIgdHMgPSB0aGlzLl90cmFuc2Zvcm1TdGF0ZTtcblxuICBpZiAodHMud3JpdGVjaHVuayAhPT0gbnVsbCAmJiB0cy53cml0ZWNiICYmICF0cy50cmFuc2Zvcm1pbmcpIHtcbiAgICB0cy50cmFuc2Zvcm1pbmcgPSB0cnVlO1xuICAgIHRoaXMuX3RyYW5zZm9ybSh0cy53cml0ZWNodW5rLCB0cy53cml0ZWVuY29kaW5nLCB0cy5hZnRlclRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gbWFyayB0aGF0IHdlIG5lZWQgYSB0cmFuc2Zvcm0sIHNvIHRoYXQgYW55IGRhdGEgdGhhdCBjb21lcyBpblxuICAgIC8vIHdpbGwgZ2V0IHByb2Nlc3NlZCwgbm93IHRoYXQgd2UndmUgYXNrZWQgZm9yIGl0LlxuICAgIHRzLm5lZWRUcmFuc2Zvcm0gPSB0cnVlO1xuICB9XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgRHVwbGV4LnByb3RvdHlwZS5fZGVzdHJveS5jYWxsKHRoaXMsIGVyciwgZnVuY3Rpb24gKGVycjIpIHtcbiAgICBjYihlcnIyKTtcbiAgICBfdGhpczIuZW1pdCgnY2xvc2UnKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBkb25lKHN0cmVhbSwgZXIsIGRhdGEpIHtcbiAgaWYgKGVyKSByZXR1cm4gc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuXG4gIGlmIChkYXRhICE9IG51bGwpIC8vIHNpbmdsZSBlcXVhbHMgY2hlY2sgZm9yIGJvdGggYG51bGxgIGFuZCBgdW5kZWZpbmVkYFxuICAgIHN0cmVhbS5wdXNoKGRhdGEpO1xuXG4gIC8vIGlmIHRoZXJlJ3Mgbm90aGluZyBpbiB0aGUgd3JpdGUgYnVmZmVyLCB0aGVuIHRoYXQgbWVhbnNcbiAgLy8gdGhhdCBub3RoaW5nIG1vcmUgd2lsbCBldmVyIGJlIHByb3ZpZGVkXG4gIGlmIChzdHJlYW0uX3dyaXRhYmxlU3RhdGUubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxpbmcgdHJhbnNmb3JtIGRvbmUgd2hlbiB3cy5sZW5ndGggIT0gMCcpO1xuXG4gIGlmIChzdHJlYW0uX3RyYW5zZm9ybVN0YXRlLnRyYW5zZm9ybWluZykgdGhyb3cgbmV3IEVycm9yKCdDYWxsaW5nIHRyYW5zZm9ybSBkb25lIHdoZW4gc3RpbGwgdHJhbnNmb3JtaW5nJyk7XG5cbiAgcmV0dXJuIHN0cmVhbS5wdXNoKG51bGwpO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBBIGJpdCBzaW1wbGVyIHRoYW4gcmVhZGFibGUgc3RyZWFtcy5cbi8vIEltcGxlbWVudCBhbiBhc3luYyAuX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2IpLCBhbmQgaXQnbGwgaGFuZGxlIGFsbFxuLy8gdGhlIGRyYWluIGV2ZW50IGVtaXNzaW9uIGFuZCBidWZmZXJpbmcuXG5cbid1c2Ugc3RyaWN0JztcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIHBuYSA9IHJlcXVpcmUoJ3Byb2Nlc3MtbmV4dGljay1hcmdzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxubW9kdWxlLmV4cG9ydHMgPSBXcml0YWJsZTtcblxuLyogPHJlcGxhY2VtZW50PiAqL1xuZnVuY3Rpb24gV3JpdGVSZXEoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB0aGlzLmNodW5rID0gY2h1bms7XG4gIHRoaXMuZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgdGhpcy5jYWxsYmFjayA9IGNiO1xuICB0aGlzLm5leHQgPSBudWxsO1xufVxuXG4vLyBJdCBzZWVtcyBhIGxpbmtlZCBsaXN0IGJ1dCBpdCBpcyBub3Rcbi8vIHRoZXJlIHdpbGwgYmUgb25seSAyIG9mIHRoZXNlIGZvciBlYWNoIHN0cmVhbVxuZnVuY3Rpb24gQ29ya2VkUmVxdWVzdChzdGF0ZSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMubmV4dCA9IG51bGw7XG4gIHRoaXMuZW50cnkgPSBudWxsO1xuICB0aGlzLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBvbkNvcmtlZEZpbmlzaChfdGhpcywgc3RhdGUpO1xuICB9O1xufVxuLyogPC9yZXBsYWNlbWVudD4gKi9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBhc3luY1dyaXRlID0gIXByb2Nlc3MuYnJvd3NlciAmJiBbJ3YwLjEwJywgJ3YwLjkuJ10uaW5kZXhPZihwcm9jZXNzLnZlcnNpb24uc2xpY2UoMCwgNSkpID4gLTEgPyBzZXRJbW1lZGlhdGUgOiBwbmEubmV4dFRpY2s7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBEdXBsZXg7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuV3JpdGFibGUuV3JpdGFibGVTdGF0ZSA9IFdyaXRhYmxlU3RhdGU7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IE9iamVjdC5jcmVhdGUocmVxdWlyZSgnY29yZS11dGlsLWlzJykpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBpbnRlcm5hbFV0aWwgPSB7XG4gIGRlcHJlY2F0ZTogcmVxdWlyZSgndXRpbC1kZXByZWNhdGUnKVxufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIFN0cmVhbSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9zdHJlYW0nKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgT3VyVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5IHx8IGZ1bmN0aW9uICgpIHt9O1xuZnVuY3Rpb24gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuaykge1xuICByZXR1cm4gQnVmZmVyLmZyb20oY2h1bmspO1xufVxuZnVuY3Rpb24gX2lzVWludDhBcnJheShvYmopIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihvYmopIHx8IG9iaiBpbnN0YW5jZW9mIE91clVpbnQ4QXJyYXk7XG59XG5cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgZGVzdHJveUltcGwgPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvZGVzdHJveScpO1xuXG51dGlsLmluaGVyaXRzKFdyaXRhYmxlLCBTdHJlYW0pO1xuXG5mdW5jdGlvbiBub3AoKSB7fVxuXG5mdW5jdGlvbiBXcml0YWJsZVN0YXRlKG9wdGlvbnMsIHN0cmVhbSkge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIER1cGxleCBzdHJlYW1zIGFyZSBib3RoIHJlYWRhYmxlIGFuZCB3cml0YWJsZSwgYnV0IHNoYXJlXG4gIC8vIHRoZSBzYW1lIG9wdGlvbnMgb2JqZWN0LlxuICAvLyBIb3dldmVyLCBzb21lIGNhc2VzIHJlcXVpcmUgc2V0dGluZyBvcHRpb25zIHRvIGRpZmZlcmVudFxuICAvLyB2YWx1ZXMgZm9yIHRoZSByZWFkYWJsZSBhbmQgdGhlIHdyaXRhYmxlIHNpZGVzIG9mIHRoZSBkdXBsZXggc3RyZWFtLlxuICAvLyBUaGVzZSBvcHRpb25zIGNhbiBiZSBwcm92aWRlZCBzZXBhcmF0ZWx5IGFzIHJlYWRhYmxlWFhYIGFuZCB3cml0YWJsZVhYWC5cbiAgdmFyIGlzRHVwbGV4ID0gc3RyZWFtIGluc3RhbmNlb2YgRHVwbGV4O1xuXG4gIC8vIG9iamVjdCBzdHJlYW0gZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIG9yIG5vdCB0aGlzIHN0cmVhbVxuICAvLyBjb250YWlucyBidWZmZXJzIG9yIG9iamVjdHMuXG4gIHRoaXMub2JqZWN0TW9kZSA9ICEhb3B0aW9ucy5vYmplY3RNb2RlO1xuXG4gIGlmIChpc0R1cGxleCkgdGhpcy5vYmplY3RNb2RlID0gdGhpcy5vYmplY3RNb2RlIHx8ICEhb3B0aW9ucy53cml0YWJsZU9iamVjdE1vZGU7XG5cbiAgLy8gdGhlIHBvaW50IGF0IHdoaWNoIHdyaXRlKCkgc3RhcnRzIHJldHVybmluZyBmYWxzZVxuICAvLyBOb3RlOiAwIGlzIGEgdmFsaWQgdmFsdWUsIG1lYW5zIHRoYXQgd2UgYWx3YXlzIHJldHVybiBmYWxzZSBpZlxuICAvLyB0aGUgZW50aXJlIGJ1ZmZlciBpcyBub3QgZmx1c2hlZCBpbW1lZGlhdGVseSBvbiB3cml0ZSgpXG4gIHZhciBod20gPSBvcHRpb25zLmhpZ2hXYXRlck1hcms7XG4gIHZhciB3cml0YWJsZUh3bSA9IG9wdGlvbnMud3JpdGFibGVIaWdoV2F0ZXJNYXJrO1xuICB2YXIgZGVmYXVsdEh3bSA9IHRoaXMub2JqZWN0TW9kZSA/IDE2IDogMTYgKiAxMDI0O1xuXG4gIGlmIChod20gfHwgaHdtID09PSAwKSB0aGlzLmhpZ2hXYXRlck1hcmsgPSBod207ZWxzZSBpZiAoaXNEdXBsZXggJiYgKHdyaXRhYmxlSHdtIHx8IHdyaXRhYmxlSHdtID09PSAwKSkgdGhpcy5oaWdoV2F0ZXJNYXJrID0gd3JpdGFibGVId207ZWxzZSB0aGlzLmhpZ2hXYXRlck1hcmsgPSBkZWZhdWx0SHdtO1xuXG4gIC8vIGNhc3QgdG8gaW50cy5cbiAgdGhpcy5oaWdoV2F0ZXJNYXJrID0gTWF0aC5mbG9vcih0aGlzLmhpZ2hXYXRlck1hcmspO1xuXG4gIC8vIGlmIF9maW5hbCBoYXMgYmVlbiBjYWxsZWRcbiAgdGhpcy5maW5hbENhbGxlZCA9IGZhbHNlO1xuXG4gIC8vIGRyYWluIGV2ZW50IGZsYWcuXG4gIHRoaXMubmVlZERyYWluID0gZmFsc2U7XG4gIC8vIGF0IHRoZSBzdGFydCBvZiBjYWxsaW5nIGVuZCgpXG4gIHRoaXMuZW5kaW5nID0gZmFsc2U7XG4gIC8vIHdoZW4gZW5kKCkgaGFzIGJlZW4gY2FsbGVkLCBhbmQgcmV0dXJuZWRcbiAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAvLyB3aGVuICdmaW5pc2gnIGlzIGVtaXR0ZWRcbiAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuXG4gIC8vIGhhcyBpdCBiZWVuIGRlc3Ryb3llZFxuICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIC8vIHNob3VsZCB3ZSBkZWNvZGUgc3RyaW5ncyBpbnRvIGJ1ZmZlcnMgYmVmb3JlIHBhc3NpbmcgdG8gX3dyaXRlP1xuICAvLyB0aGlzIGlzIGhlcmUgc28gdGhhdCBzb21lIG5vZGUtY29yZSBzdHJlYW1zIGNhbiBvcHRpbWl6ZSBzdHJpbmdcbiAgLy8gaGFuZGxpbmcgYXQgYSBsb3dlciBsZXZlbC5cbiAgdmFyIG5vRGVjb2RlID0gb3B0aW9ucy5kZWNvZGVTdHJpbmdzID09PSBmYWxzZTtcbiAgdGhpcy5kZWNvZGVTdHJpbmdzID0gIW5vRGVjb2RlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIG5vdCBhbiBhY3R1YWwgYnVmZmVyIHdlIGtlZXAgdHJhY2sgb2YsIGJ1dCBhIG1lYXN1cmVtZW50XG4gIC8vIG9mIGhvdyBtdWNoIHdlJ3JlIHdhaXRpbmcgdG8gZ2V0IHB1c2hlZCB0byBzb21lIHVuZGVybHlpbmdcbiAgLy8gc29ja2V0IG9yIGZpbGUuXG4gIHRoaXMubGVuZ3RoID0gMDtcblxuICAvLyBhIGZsYWcgdG8gc2VlIHdoZW4gd2UncmUgaW4gdGhlIG1pZGRsZSBvZiBhIHdyaXRlLlxuICB0aGlzLndyaXRpbmcgPSBmYWxzZTtcblxuICAvLyB3aGVuIHRydWUgYWxsIHdyaXRlcyB3aWxsIGJlIGJ1ZmZlcmVkIHVudGlsIC51bmNvcmsoKSBjYWxsXG4gIHRoaXMuY29ya2VkID0gMDtcblxuICAvLyBhIGZsYWcgdG8gYmUgYWJsZSB0byB0ZWxsIGlmIHRoZSBvbndyaXRlIGNiIGlzIGNhbGxlZCBpbW1lZGlhdGVseSxcbiAgLy8gb3Igb24gYSBsYXRlciB0aWNrLiAgV2Ugc2V0IHRoaXMgdG8gdHJ1ZSBhdCBmaXJzdCwgYmVjYXVzZSBhbnlcbiAgLy8gYWN0aW9ucyB0aGF0IHNob3VsZG4ndCBoYXBwZW4gdW50aWwgXCJsYXRlclwiIHNob3VsZCBnZW5lcmFsbHkgYWxzb1xuICAvLyBub3QgaGFwcGVuIGJlZm9yZSB0aGUgZmlyc3Qgd3JpdGUgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyBhIGZsYWcgdG8ga25vdyBpZiB3ZSdyZSBwcm9jZXNzaW5nIHByZXZpb3VzbHkgYnVmZmVyZWQgaXRlbXMsIHdoaWNoXG4gIC8vIG1heSBjYWxsIHRoZSBfd3JpdGUoKSBjYWxsYmFjayBpbiB0aGUgc2FtZSB0aWNrLCBzbyB0aGF0IHdlIGRvbid0XG4gIC8vIGVuZCB1cCBpbiBhbiBvdmVybGFwcGVkIG9ud3JpdGUgc2l0dWF0aW9uLlxuICB0aGlzLmJ1ZmZlclByb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAvLyB0aGUgY2FsbGJhY2sgdGhhdCdzIHBhc3NlZCB0byBfd3JpdGUoY2h1bmssY2IpXG4gIHRoaXMub253cml0ZSA9IGZ1bmN0aW9uIChlcikge1xuICAgIG9ud3JpdGUoc3RyZWFtLCBlcik7XG4gIH07XG5cbiAgLy8gdGhlIGNhbGxiYWNrIHRoYXQgdGhlIHVzZXIgc3VwcGxpZXMgdG8gd3JpdGUoY2h1bmssZW5jb2RpbmcsY2IpXG4gIHRoaXMud3JpdGVjYiA9IG51bGw7XG5cbiAgLy8gdGhlIGFtb3VudCB0aGF0IGlzIGJlaW5nIHdyaXR0ZW4gd2hlbiBfd3JpdGUgaXMgY2FsbGVkLlxuICB0aGlzLndyaXRlbGVuID0gMDtcblxuICB0aGlzLmJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gIHRoaXMubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG5cbiAgLy8gbnVtYmVyIG9mIHBlbmRpbmcgdXNlci1zdXBwbGllZCB3cml0ZSBjYWxsYmFja3NcbiAgLy8gdGhpcyBtdXN0IGJlIDAgYmVmb3JlICdmaW5pc2gnIGNhbiBiZSBlbWl0dGVkXG4gIHRoaXMucGVuZGluZ2NiID0gMDtcblxuICAvLyBlbWl0IHByZWZpbmlzaCBpZiB0aGUgb25seSB0aGluZyB3ZSdyZSB3YWl0aW5nIGZvciBpcyBfd3JpdGUgY2JzXG4gIC8vIFRoaXMgaXMgcmVsZXZhbnQgZm9yIHN5bmNocm9ub3VzIFRyYW5zZm9ybSBzdHJlYW1zXG4gIHRoaXMucHJlZmluaXNoZWQgPSBmYWxzZTtcblxuICAvLyBUcnVlIGlmIHRoZSBlcnJvciB3YXMgYWxyZWFkeSBlbWl0dGVkIGFuZCBzaG91bGQgbm90IGJlIHRocm93biBhZ2FpblxuICB0aGlzLmVycm9yRW1pdHRlZCA9IGZhbHNlO1xuXG4gIC8vIGNvdW50IGJ1ZmZlcmVkIHJlcXVlc3RzXG4gIHRoaXMuYnVmZmVyZWRSZXF1ZXN0Q291bnQgPSAwO1xuXG4gIC8vIGFsbG9jYXRlIHRoZSBmaXJzdCBDb3JrZWRSZXF1ZXN0LCB0aGVyZSBpcyBhbHdheXNcbiAgLy8gb25lIGFsbG9jYXRlZCBhbmQgZnJlZSB0byB1c2UsIGFuZCB3ZSBtYWludGFpbiBhdCBtb3N0IHR3b1xuICB0aGlzLmNvcmtlZFJlcXVlc3RzRnJlZSA9IG5ldyBDb3JrZWRSZXF1ZXN0KHRoaXMpO1xufVxuXG5Xcml0YWJsZVN0YXRlLnByb3RvdHlwZS5nZXRCdWZmZXIgPSBmdW5jdGlvbiBnZXRCdWZmZXIoKSB7XG4gIHZhciBjdXJyZW50ID0gdGhpcy5idWZmZXJlZFJlcXVlc3Q7XG4gIHZhciBvdXQgPSBbXTtcbiAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICBvdXQucHVzaChjdXJyZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZVN0YXRlLnByb3RvdHlwZSwgJ2J1ZmZlcicsIHtcbiAgICAgIGdldDogaW50ZXJuYWxVdGlsLmRlcHJlY2F0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcigpO1xuICAgICAgfSwgJ193cml0YWJsZVN0YXRlLmJ1ZmZlciBpcyBkZXByZWNhdGVkLiBVc2UgX3dyaXRhYmxlU3RhdGUuZ2V0QnVmZmVyICcgKyAnaW5zdGVhZC4nLCAnREVQMDAwMycpXG4gICAgfSk7XG4gIH0gY2F0Y2ggKF8pIHt9XG59KSgpO1xuXG4vLyBUZXN0IF93cml0YWJsZVN0YXRlIGZvciBpbmhlcml0YW5jZSB0byBhY2NvdW50IGZvciBEdXBsZXggc3RyZWFtcyxcbi8vIHdob3NlIHByb3RvdHlwZSBjaGFpbiBvbmx5IHBvaW50cyB0byBSZWFkYWJsZS5cbnZhciByZWFsSGFzSW5zdGFuY2U7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaGFzSW5zdGFuY2UgJiYgdHlwZW9mIEZ1bmN0aW9uLnByb3RvdHlwZVtTeW1ib2wuaGFzSW5zdGFuY2VdID09PSAnZnVuY3Rpb24nKSB7XG4gIHJlYWxIYXNJbnN0YW5jZSA9IEZ1bmN0aW9uLnByb3RvdHlwZVtTeW1ib2wuaGFzSW5zdGFuY2VdO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGUsIFN5bWJvbC5oYXNJbnN0YW5jZSwge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBpZiAocmVhbEhhc0luc3RhbmNlLmNhbGwodGhpcywgb2JqZWN0KSkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAodGhpcyAhPT0gV3JpdGFibGUpIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIG9iamVjdCAmJiBvYmplY3QuX3dyaXRhYmxlU3RhdGUgaW5zdGFuY2VvZiBXcml0YWJsZVN0YXRlO1xuICAgIH1cbiAgfSk7XG59IGVsc2Uge1xuICByZWFsSGFzSW5zdGFuY2UgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIHRoaXM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFdyaXRhYmxlKG9wdGlvbnMpIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICAvLyBXcml0YWJsZSBjdG9yIGlzIGFwcGxpZWQgdG8gRHVwbGV4ZXMsIHRvby5cbiAgLy8gYHJlYWxIYXNJbnN0YW5jZWAgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgdXNpbmcgcGxhaW4gYGluc3RhbmNlb2ZgXG4gIC8vIHdvdWxkIHJldHVybiBmYWxzZSwgYXMgbm8gYF93cml0YWJsZVN0YXRlYCBwcm9wZXJ0eSBpcyBhdHRhY2hlZC5cblxuICAvLyBUcnlpbmcgdG8gdXNlIHRoZSBjdXN0b20gYGluc3RhbmNlb2ZgIGZvciBXcml0YWJsZSBoZXJlIHdpbGwgYWxzbyBicmVhayB0aGVcbiAgLy8gTm9kZS5qcyBMYXp5VHJhbnNmb3JtIGltcGxlbWVudGF0aW9uLCB3aGljaCBoYXMgYSBub24tdHJpdmlhbCBnZXR0ZXIgZm9yXG4gIC8vIGBfd3JpdGFibGVTdGF0ZWAgdGhhdCB3b3VsZCBsZWFkIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgaWYgKCFyZWFsSGFzSW5zdGFuY2UuY2FsbChXcml0YWJsZSwgdGhpcykgJiYgISh0aGlzIGluc3RhbmNlb2YgRHVwbGV4KSkge1xuICAgIHJldHVybiBuZXcgV3JpdGFibGUob3B0aW9ucyk7XG4gIH1cblxuICB0aGlzLl93cml0YWJsZVN0YXRlID0gbmV3IFdyaXRhYmxlU3RhdGUob3B0aW9ucywgdGhpcyk7XG5cbiAgLy8gbGVnYWN5LlxuICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53cml0ZSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fd3JpdGUgPSBvcHRpb25zLndyaXRlO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRldiA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fd3JpdGV2ID0gb3B0aW9ucy53cml0ZXY7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZGVzdHJveSA9IG9wdGlvbnMuZGVzdHJveTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maW5hbCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZmluYWwgPSBvcHRpb25zLmZpbmFsO1xuICB9XG5cbiAgU3RyZWFtLmNhbGwodGhpcyk7XG59XG5cbi8vIE90aGVyd2lzZSBwZW9wbGUgY2FuIHBpcGUgV3JpdGFibGUgc3RyZWFtcywgd2hpY2ggaXMganVzdCB3cm9uZy5cbldyaXRhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdDYW5ub3QgcGlwZSwgbm90IHJlYWRhYmxlJykpO1xufTtcblxuZnVuY3Rpb24gd3JpdGVBZnRlckVuZChzdHJlYW0sIGNiKSB7XG4gIHZhciBlciA9IG5ldyBFcnJvcignd3JpdGUgYWZ0ZXIgZW5kJyk7XG4gIC8vIFRPRE86IGRlZmVyIGVycm9yIGV2ZW50cyBjb25zaXN0ZW50bHkgZXZlcnl3aGVyZSwgbm90IGp1c3QgdGhlIGNiXG4gIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgcG5hLm5leHRUaWNrKGNiLCBlcik7XG59XG5cbi8vIENoZWNrcyB0aGF0IGEgdXNlci1zdXBwbGllZCBjaHVuayBpcyB2YWxpZCwgZXNwZWNpYWxseSBmb3IgdGhlIHBhcnRpY3VsYXJcbi8vIG1vZGUgdGhlIHN0cmVhbSBpcyBpbi4gQ3VycmVudGx5IHRoaXMgbWVhbnMgdGhhdCBgbnVsbGAgaXMgbmV2ZXIgYWNjZXB0ZWRcbi8vIGFuZCB1bmRlZmluZWQvbm9uLXN0cmluZyB2YWx1ZXMgYXJlIG9ubHkgYWxsb3dlZCBpbiBvYmplY3QgbW9kZS5cbmZ1bmN0aW9uIHZhbGlkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGNiKSB7XG4gIHZhciB2YWxpZCA9IHRydWU7XG4gIHZhciBlciA9IGZhbHNlO1xuXG4gIGlmIChjaHVuayA9PT0gbnVsbCkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignTWF5IG5vdCB3cml0ZSBudWxsIHZhbHVlcyB0byBzdHJlYW0nKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmIGNodW5rICE9PSB1bmRlZmluZWQgJiYgIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbm9uLXN0cmluZy9idWZmZXIgY2h1bmsnKTtcbiAgfVxuICBpZiAoZXIpIHtcbiAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gICAgcG5hLm5leHRUaWNrKGNiLCBlcik7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsaWQ7XG59XG5cbldyaXRhYmxlLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG4gIHZhciByZXQgPSBmYWxzZTtcbiAgdmFyIGlzQnVmID0gIXN0YXRlLm9iamVjdE1vZGUgJiYgX2lzVWludDhBcnJheShjaHVuayk7XG5cbiAgaWYgKGlzQnVmICYmICFCdWZmZXIuaXNCdWZmZXIoY2h1bmspKSB7XG4gICAgY2h1bmsgPSBfdWludDhBcnJheVRvQnVmZmVyKGNodW5rKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIGlmIChpc0J1ZikgZW5jb2RpbmcgPSAnYnVmZmVyJztlbHNlIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuXG4gIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIGNiID0gbm9wO1xuXG4gIGlmIChzdGF0ZS5lbmRlZCkgd3JpdGVBZnRlckVuZCh0aGlzLCBjYik7ZWxzZSBpZiAoaXNCdWYgfHwgdmFsaWRDaHVuayh0aGlzLCBzdGF0ZSwgY2h1bmssIGNiKSkge1xuICAgIHN0YXRlLnBlbmRpbmdjYisrO1xuICAgIHJldCA9IHdyaXRlT3JCdWZmZXIodGhpcywgc3RhdGUsIGlzQnVmLCBjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuY29yayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBzdGF0ZS5jb3JrZWQrKztcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS51bmNvcmsgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG5cbiAgaWYgKHN0YXRlLmNvcmtlZCkge1xuICAgIHN0YXRlLmNvcmtlZC0tO1xuXG4gICAgaWYgKCFzdGF0ZS53cml0aW5nICYmICFzdGF0ZS5jb3JrZWQgJiYgIXN0YXRlLmZpbmlzaGVkICYmICFzdGF0ZS5idWZmZXJQcm9jZXNzaW5nICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCkgY2xlYXJCdWZmZXIodGhpcywgc3RhdGUpO1xuICB9XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuc2V0RGVmYXVsdEVuY29kaW5nID0gZnVuY3Rpb24gc2V0RGVmYXVsdEVuY29kaW5nKGVuY29kaW5nKSB7XG4gIC8vIG5vZGU6OlBhcnNlRW5jb2RpbmcoKSByZXF1aXJlcyBsb3dlciBjYXNlLlxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykgZW5jb2RpbmcgPSBlbmNvZGluZy50b0xvd2VyQ2FzZSgpO1xuICBpZiAoIShbJ2hleCcsICd1dGY4JywgJ3V0Zi04JywgJ2FzY2lpJywgJ2JpbmFyeScsICdiYXNlNjQnLCAndWNzMicsICd1Y3MtMicsICd1dGYxNmxlJywgJ3V0Zi0xNmxlJywgJ3JhdyddLmluZGV4T2YoKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKCkpID4gLTEpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpO1xuICB0aGlzLl93cml0YWJsZVN0YXRlLmRlZmF1bHRFbmNvZGluZyA9IGVuY29kaW5nO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIGRlY29kZUNodW5rKHN0YXRlLCBjaHVuaywgZW5jb2RpbmcpIHtcbiAgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmIHN0YXRlLmRlY29kZVN0cmluZ3MgIT09IGZhbHNlICYmIHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICBjaHVuayA9IEJ1ZmZlci5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gIH1cbiAgcmV0dXJuIGNodW5rO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGUucHJvdG90eXBlLCAnd3JpdGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcblxuLy8gaWYgd2UncmUgYWxyZWFkeSB3cml0aW5nIHNvbWV0aGluZywgdGhlbiBqdXN0IHB1dCB0aGlzXG4vLyBpbiB0aGUgcXVldWUsIGFuZCB3YWl0IG91ciB0dXJuLiAgT3RoZXJ3aXNlLCBjYWxsIF93cml0ZVxuLy8gSWYgd2UgcmV0dXJuIGZhbHNlLCB0aGVuIHdlIG5lZWQgYSBkcmFpbiBldmVudCwgc28gc2V0IHRoYXQgZmxhZy5cbmZ1bmN0aW9uIHdyaXRlT3JCdWZmZXIoc3RyZWFtLCBzdGF0ZSwgaXNCdWYsIGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgaWYgKCFpc0J1Zikge1xuICAgIHZhciBuZXdDaHVuayA9IGRlY29kZUNodW5rKHN0YXRlLCBjaHVuaywgZW5jb2RpbmcpO1xuICAgIGlmIChjaHVuayAhPT0gbmV3Q2h1bmspIHtcbiAgICAgIGlzQnVmID0gdHJ1ZTtcbiAgICAgIGVuY29kaW5nID0gJ2J1ZmZlcic7XG4gICAgICBjaHVuayA9IG5ld0NodW5rO1xuICAgIH1cbiAgfVxuICB2YXIgbGVuID0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG5cbiAgc3RhdGUubGVuZ3RoICs9IGxlbjtcblxuICB2YXIgcmV0ID0gc3RhdGUubGVuZ3RoIDwgc3RhdGUuaGlnaFdhdGVyTWFyaztcbiAgLy8gd2UgbXVzdCBlbnN1cmUgdGhhdCBwcmV2aW91cyBuZWVkRHJhaW4gd2lsbCBub3QgYmUgcmVzZXQgdG8gZmFsc2UuXG4gIGlmICghcmV0KSBzdGF0ZS5uZWVkRHJhaW4gPSB0cnVlO1xuXG4gIGlmIChzdGF0ZS53cml0aW5nIHx8IHN0YXRlLmNvcmtlZCkge1xuICAgIHZhciBsYXN0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0ge1xuICAgICAgY2h1bms6IGNodW5rLFxuICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nLFxuICAgICAgaXNCdWY6IGlzQnVmLFxuICAgICAgY2FsbGJhY2s6IGNiLFxuICAgICAgbmV4dDogbnVsbFxuICAgIH07XG4gICAgaWYgKGxhc3QpIHtcbiAgICAgIGxhc3QubmV4dCA9IHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9IHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3Q7XG4gICAgfVxuICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50ICs9IDE7XG4gIH0gZWxzZSB7XG4gICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCBmYWxzZSwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgd3JpdGV2LCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgc3RhdGUud3JpdGVsZW4gPSBsZW47XG4gIHN0YXRlLndyaXRlY2IgPSBjYjtcbiAgc3RhdGUud3JpdGluZyA9IHRydWU7XG4gIHN0YXRlLnN5bmMgPSB0cnVlO1xuICBpZiAod3JpdGV2KSBzdHJlYW0uX3dyaXRldihjaHVuaywgc3RhdGUub253cml0ZSk7ZWxzZSBzdHJlYW0uX3dyaXRlKGNodW5rLCBlbmNvZGluZywgc3RhdGUub253cml0ZSk7XG4gIHN0YXRlLnN5bmMgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb253cml0ZUVycm9yKHN0cmVhbSwgc3RhdGUsIHN5bmMsIGVyLCBjYikge1xuICAtLXN0YXRlLnBlbmRpbmdjYjtcblxuICBpZiAoc3luYykge1xuICAgIC8vIGRlZmVyIHRoZSBjYWxsYmFjayBpZiB3ZSBhcmUgYmVpbmcgY2FsbGVkIHN5bmNocm9ub3VzbHlcbiAgICAvLyB0byBhdm9pZCBwaWxpbmcgdXAgdGhpbmdzIG9uIHRoZSBzdGFja1xuICAgIHBuYS5uZXh0VGljayhjYiwgZXIpO1xuICAgIC8vIHRoaXMgY2FuIGVtaXQgZmluaXNoLCBhbmQgaXQgd2lsbCBhbHdheXMgaGFwcGVuXG4gICAgLy8gYWZ0ZXIgZXJyb3JcbiAgICBwbmEubmV4dFRpY2soZmluaXNoTWF5YmUsIHN0cmVhbSwgc3RhdGUpO1xuICAgIHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgfSBlbHNlIHtcbiAgICAvLyB0aGUgY2FsbGVyIGV4cGVjdCB0aGlzIHRvIGhhcHBlbiBiZWZvcmUgaWZcbiAgICAvLyBpdCBpcyBhc3luY1xuICAgIGNiKGVyKTtcbiAgICBzdHJlYW0uX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gICAgLy8gdGhpcyBjYW4gZW1pdCBmaW5pc2gsIGJ1dCBmaW5pc2ggbXVzdFxuICAgIC8vIGFsd2F5cyBmb2xsb3cgZXJyb3JcbiAgICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbndyaXRlU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgc3RhdGUud3JpdGluZyA9IGZhbHNlO1xuICBzdGF0ZS53cml0ZWNiID0gbnVsbDtcbiAgc3RhdGUubGVuZ3RoIC09IHN0YXRlLndyaXRlbGVuO1xuICBzdGF0ZS53cml0ZWxlbiA9IDA7XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGUoc3RyZWFtLCBlcikge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3dyaXRhYmxlU3RhdGU7XG4gIHZhciBzeW5jID0gc3RhdGUuc3luYztcbiAgdmFyIGNiID0gc3RhdGUud3JpdGVjYjtcblxuICBvbndyaXRlU3RhdGVVcGRhdGUoc3RhdGUpO1xuXG4gIGlmIChlcikgb253cml0ZUVycm9yKHN0cmVhbSwgc3RhdGUsIHN5bmMsIGVyLCBjYik7ZWxzZSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UncmUgYWN0dWFsbHkgcmVhZHkgdG8gZmluaXNoLCBidXQgZG9uJ3QgZW1pdCB5ZXRcbiAgICB2YXIgZmluaXNoZWQgPSBuZWVkRmluaXNoKHN0YXRlKTtcblxuICAgIGlmICghZmluaXNoZWQgJiYgIXN0YXRlLmNvcmtlZCAmJiAhc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QpIHtcbiAgICAgIGNsZWFyQnVmZmVyKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChzeW5jKSB7XG4gICAgICAvKjxyZXBsYWNlbWVudD4qL1xuICAgICAgYXN5bmNXcml0ZShhZnRlcldyaXRlLCBzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpO1xuICAgICAgLyo8L3JlcGxhY2VtZW50PiovXG4gICAgfSBlbHNlIHtcbiAgICAgIGFmdGVyV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWZ0ZXJXcml0ZShzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpIHtcbiAgaWYgKCFmaW5pc2hlZCkgb253cml0ZURyYWluKHN0cmVhbSwgc3RhdGUpO1xuICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgY2IoKTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG59XG5cbi8vIE11c3QgZm9yY2UgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIG9uIG5leHRUaWNrLCBzbyB0aGF0IHdlIGRvbid0XG4vLyBlbWl0ICdkcmFpbicgYmVmb3JlIHRoZSB3cml0ZSgpIGNvbnN1bWVyIGdldHMgdGhlICdmYWxzZScgcmV0dXJuXG4vLyB2YWx1ZSwgYW5kIGhhcyBhIGNoYW5jZSB0byBhdHRhY2ggYSAnZHJhaW4nIGxpc3RlbmVyLlxuZnVuY3Rpb24gb253cml0ZURyYWluKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5uZWVkRHJhaW4pIHtcbiAgICBzdGF0ZS5uZWVkRHJhaW4gPSBmYWxzZTtcbiAgICBzdHJlYW0uZW1pdCgnZHJhaW4nKTtcbiAgfVxufVxuXG4vLyBpZiB0aGVyZSdzIHNvbWV0aGluZyBpbiB0aGUgYnVmZmVyIHdhaXRpbmcsIHRoZW4gcHJvY2VzcyBpdFxuZnVuY3Rpb24gY2xlYXJCdWZmZXIoc3RyZWFtLCBzdGF0ZSkge1xuICBzdGF0ZS5idWZmZXJQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgdmFyIGVudHJ5ID0gc3RhdGUuYnVmZmVyZWRSZXF1ZXN0O1xuXG4gIGlmIChzdHJlYW0uX3dyaXRldiAmJiBlbnRyeSAmJiBlbnRyeS5uZXh0KSB7XG4gICAgLy8gRmFzdCBjYXNlLCB3cml0ZSBldmVyeXRoaW5nIHVzaW5nIF93cml0ZXYoKVxuICAgIHZhciBsID0gc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQ7XG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheShsKTtcbiAgICB2YXIgaG9sZGVyID0gc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlO1xuICAgIGhvbGRlci5lbnRyeSA9IGVudHJ5O1xuXG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgYWxsQnVmZmVycyA9IHRydWU7XG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICBidWZmZXJbY291bnRdID0gZW50cnk7XG4gICAgICBpZiAoIWVudHJ5LmlzQnVmKSBhbGxCdWZmZXJzID0gZmFsc2U7XG4gICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cbiAgICBidWZmZXIuYWxsQnVmZmVycyA9IGFsbEJ1ZmZlcnM7XG5cbiAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIHRydWUsIHN0YXRlLmxlbmd0aCwgYnVmZmVyLCAnJywgaG9sZGVyLmZpbmlzaCk7XG5cbiAgICAvLyBkb1dyaXRlIGlzIGFsbW9zdCBhbHdheXMgYXN5bmMsIGRlZmVyIHRoZXNlIHRvIHNhdmUgYSBiaXQgb2YgdGltZVxuICAgIC8vIGFzIHRoZSBob3QgcGF0aCBlbmRzIHdpdGggZG9Xcml0ZVxuICAgIHN0YXRlLnBlbmRpbmdjYisrO1xuICAgIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICAgIGlmIChob2xkZXIubmV4dCkge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gaG9sZGVyLm5leHQ7XG4gICAgICBob2xkZXIubmV4dCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IG5ldyBDb3JrZWRSZXF1ZXN0KHN0YXRlKTtcbiAgICB9XG4gICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFNsb3cgY2FzZSwgd3JpdGUgY2h1bmtzIG9uZS1ieS1vbmVcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIHZhciBjaHVuayA9IGVudHJ5LmNodW5rO1xuICAgICAgdmFyIGVuY29kaW5nID0gZW50cnkuZW5jb2Rpbmc7XG4gICAgICB2YXIgY2IgPSBlbnRyeS5jYWxsYmFjaztcbiAgICAgIHZhciBsZW4gPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcblxuICAgICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCBmYWxzZSwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50LS07XG4gICAgICAvLyBpZiB3ZSBkaWRuJ3QgY2FsbCB0aGUgb253cml0ZSBpbW1lZGlhdGVseSwgdGhlblxuICAgICAgLy8gaXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHdhaXQgdW50aWwgaXQgZG9lcy5cbiAgICAgIC8vIGFsc28sIHRoYXQgbWVhbnMgdGhhdCB0aGUgY2h1bmsgYW5kIGNiIGFyZSBjdXJyZW50bHlcbiAgICAgIC8vIGJlaW5nIHByb2Nlc3NlZCwgc28gbW92ZSB0aGUgYnVmZmVyIGNvdW50ZXIgcGFzdCB0aGVtLlxuICAgICAgaWYgKHN0YXRlLndyaXRpbmcpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVudHJ5ID09PSBudWxsKSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9IGVudHJ5O1xuICBzdGF0ZS5idWZmZXJQcm9jZXNzaW5nID0gZmFsc2U7XG59XG5cbldyaXRhYmxlLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBjYihuZXcgRXJyb3IoJ193cml0ZSgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpKTtcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5fd3JpdGV2ID0gbnVsbDtcblxuV3JpdGFibGUucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG5cbiAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gY2h1bms7XG4gICAgY2h1bmsgPSBudWxsO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIGlmIChjaHVuayAhPT0gbnVsbCAmJiBjaHVuayAhPT0gdW5kZWZpbmVkKSB0aGlzLndyaXRlKGNodW5rLCBlbmNvZGluZyk7XG5cbiAgLy8gLmVuZCgpIGZ1bGx5IHVuY29ya3NcbiAgaWYgKHN0YXRlLmNvcmtlZCkge1xuICAgIHN0YXRlLmNvcmtlZCA9IDE7XG4gICAgdGhpcy51bmNvcmsoKTtcbiAgfVxuXG4gIC8vIGlnbm9yZSB1bm5lY2Vzc2FyeSBlbmQoKSBjYWxscy5cbiAgaWYgKCFzdGF0ZS5lbmRpbmcgJiYgIXN0YXRlLmZpbmlzaGVkKSBlbmRXcml0YWJsZSh0aGlzLCBzdGF0ZSwgY2IpO1xufTtcblxuZnVuY3Rpb24gbmVlZEZpbmlzaChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuZW5kaW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPT09IG51bGwgJiYgIXN0YXRlLmZpbmlzaGVkICYmICFzdGF0ZS53cml0aW5nO1xufVxuZnVuY3Rpb24gY2FsbEZpbmFsKHN0cmVhbSwgc3RhdGUpIHtcbiAgc3RyZWFtLl9maW5hbChmdW5jdGlvbiAoZXJyKSB7XG4gICAgc3RhdGUucGVuZGluZ2NiLS07XG4gICAgaWYgKGVycikge1xuICAgICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICB9XG4gICAgc3RhdGUucHJlZmluaXNoZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5lbWl0KCdwcmVmaW5pc2gnKTtcbiAgICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwcmVmaW5pc2goc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnByZWZpbmlzaGVkICYmICFzdGF0ZS5maW5hbENhbGxlZCkge1xuICAgIGlmICh0eXBlb2Ygc3RyZWFtLl9maW5hbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgICBzdGF0ZS5maW5hbENhbGxlZCA9IHRydWU7XG4gICAgICBwbmEubmV4dFRpY2soY2FsbEZpbmFsLCBzdHJlYW0sIHN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucHJlZmluaXNoZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLmVtaXQoJ3ByZWZpbmlzaCcpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKSB7XG4gIHZhciBuZWVkID0gbmVlZEZpbmlzaChzdGF0ZSk7XG4gIGlmIChuZWVkKSB7XG4gICAgcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpO1xuICAgIGlmIChzdGF0ZS5wZW5kaW5nY2IgPT09IDApIHtcbiAgICAgIHN0YXRlLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5lbWl0KCdmaW5pc2gnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5lZWQ7XG59XG5cbmZ1bmN0aW9uIGVuZFdyaXRhYmxlKHN0cmVhbSwgc3RhdGUsIGNiKSB7XG4gIHN0YXRlLmVuZGluZyA9IHRydWU7XG4gIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICBpZiAoY2IpIHtcbiAgICBpZiAoc3RhdGUuZmluaXNoZWQpIHBuYS5uZXh0VGljayhjYik7ZWxzZSBzdHJlYW0ub25jZSgnZmluaXNoJywgY2IpO1xuICB9XG4gIHN0YXRlLmVuZGVkID0gdHJ1ZTtcbiAgc3RyZWFtLndyaXRhYmxlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9uQ29ya2VkRmluaXNoKGNvcmtSZXEsIHN0YXRlLCBlcnIpIHtcbiAgdmFyIGVudHJ5ID0gY29ya1JlcS5lbnRyeTtcbiAgY29ya1JlcS5lbnRyeSA9IG51bGw7XG4gIHdoaWxlIChlbnRyeSkge1xuICAgIHZhciBjYiA9IGVudHJ5LmNhbGxiYWNrO1xuICAgIHN0YXRlLnBlbmRpbmdjYi0tO1xuICAgIGNiKGVycik7XG4gICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICB9XG4gIGlmIChzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUpIHtcbiAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUubmV4dCA9IGNvcmtSZXE7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gY29ya1JlcTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGUucHJvdG90eXBlLCAnZGVzdHJveWVkJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fd3JpdGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyB3ZSBpZ25vcmUgdGhlIHZhbHVlIGlmIHRoZSBzdHJlYW1cbiAgICAvLyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYgKCF0aGlzLl93cml0YWJsZVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhlIHVzZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIG1hbmFnaW5nIGRlc3Ryb3llZFxuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gIH1cbn0pO1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuZGVzdHJveSA9IGRlc3Ryb3lJbXBsLmRlc3Ryb3k7XG5Xcml0YWJsZS5wcm90b3R5cGUuX3VuZGVzdHJveSA9IGRlc3Ryb3lJbXBsLnVuZGVzdHJveTtcbldyaXRhYmxlLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIHRoaXMuZW5kKCk7XG4gIGNiKGVycik7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbmZ1bmN0aW9uIGNvcHlCdWZmZXIoc3JjLCB0YXJnZXQsIG9mZnNldCkge1xuICBzcmMuY29weSh0YXJnZXQsIG9mZnNldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBCdWZmZXJMaXN0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdWZmZXJMaXN0KTtcblxuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgdGhpcy50YWlsID0gbnVsbDtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCh2KSB7XG4gICAgdmFyIGVudHJ5ID0geyBkYXRhOiB2LCBuZXh0OiBudWxsIH07XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gMCkgdGhpcy50YWlsLm5leHQgPSBlbnRyeTtlbHNlIHRoaXMuaGVhZCA9IGVudHJ5O1xuICAgIHRoaXMudGFpbCA9IGVudHJ5O1xuICAgICsrdGhpcy5sZW5ndGg7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIHVuc2hpZnQodikge1xuICAgIHZhciBlbnRyeSA9IHsgZGF0YTogdiwgbmV4dDogdGhpcy5oZWFkIH07XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB0aGlzLnRhaWwgPSBlbnRyeTtcbiAgICB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgICArK3RoaXMubGVuZ3RoO1xuICB9O1xuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdmFyIHJldCA9IHRoaXMuaGVhZC5kYXRhO1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtlbHNlIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIC0tdGhpcy5sZW5ndGg7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiBqb2luKHMpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiAnJztcbiAgICB2YXIgcCA9IHRoaXMuaGVhZDtcbiAgICB2YXIgcmV0ID0gJycgKyBwLmRhdGE7XG4gICAgd2hpbGUgKHAgPSBwLm5leHQpIHtcbiAgICAgIHJldCArPSBzICsgcC5kYXRhO1xuICAgIH1yZXR1cm4gcmV0O1xuICB9O1xuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdChuKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHRoaXMuaGVhZC5kYXRhO1xuICAgIHZhciByZXQgPSBCdWZmZXIuYWxsb2NVbnNhZmUobiA+Pj4gMCk7XG4gICAgdmFyIHAgPSB0aGlzLmhlYWQ7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChwKSB7XG4gICAgICBjb3B5QnVmZmVyKHAuZGF0YSwgcmV0LCBpKTtcbiAgICAgIGkgKz0gcC5kYXRhLmxlbmd0aDtcbiAgICAgIHAgPSBwLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgcmV0dXJuIEJ1ZmZlckxpc3Q7XG59KCk7XG5cbmlmICh1dGlsICYmIHV0aWwuaW5zcGVjdCAmJiB1dGlsLmluc3BlY3QuY3VzdG9tKSB7XG4gIG1vZHVsZS5leHBvcnRzLnByb3RvdHlwZVt1dGlsLmluc3BlY3QuY3VzdG9tXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2JqID0gdXRpbC5pbnNwZWN0KHsgbGVuZ3RoOiB0aGlzLmxlbmd0aCB9KTtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgJyAnICsgb2JqO1xuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIHBuYSA9IHJlcXVpcmUoJ3Byb2Nlc3MtbmV4dGljay1hcmdzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLy8gdW5kb2N1bWVudGVkIGNiKCkgQVBJLCBuZWVkZWQgZm9yIGNvcmUsIG5vdCBmb3IgcHVibGljIEFQSVxuZnVuY3Rpb24gZGVzdHJveShlcnIsIGNiKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHJlYWRhYmxlRGVzdHJveWVkID0gdGhpcy5fcmVhZGFibGVTdGF0ZSAmJiB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgdmFyIHdyaXRhYmxlRGVzdHJveWVkID0gdGhpcy5fd3JpdGFibGVTdGF0ZSAmJiB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZDtcblxuICBpZiAocmVhZGFibGVEZXN0cm95ZWQgfHwgd3JpdGFibGVEZXN0cm95ZWQpIHtcbiAgICBpZiAoY2IpIHtcbiAgICAgIGNiKGVycik7XG4gICAgfSBlbHNlIGlmIChlcnIgJiYgKCF0aGlzLl93cml0YWJsZVN0YXRlIHx8ICF0aGlzLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCkpIHtcbiAgICAgIHBuYS5uZXh0VGljayhlbWl0RXJyb3JOVCwgdGhpcywgZXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB3ZSBzZXQgZGVzdHJveWVkIHRvIHRydWUgYmVmb3JlIGZpcmluZyBlcnJvciBjYWxsYmFja3MgaW4gb3JkZXJcbiAgLy8gdG8gbWFrZSBpdCByZS1lbnRyYW5jZSBzYWZlIGluIGNhc2UgZGVzdHJveSgpIGlzIGNhbGxlZCB3aXRoaW4gY2FsbGJhY2tzXG5cbiAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICAvLyBpZiB0aGlzIGlzIGEgZHVwbGV4IHN0cmVhbSBtYXJrIHRoZSB3cml0YWJsZSBwYXJ0IGFzIGRlc3Ryb3llZCBhcyB3ZWxsXG4gIGlmICh0aGlzLl93cml0YWJsZVN0YXRlKSB7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgdGhpcy5fZGVzdHJveShlcnIgfHwgbnVsbCwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmICghY2IgJiYgZXJyKSB7XG4gICAgICBwbmEubmV4dFRpY2soZW1pdEVycm9yTlQsIF90aGlzLCBlcnIpO1xuICAgICAgaWYgKF90aGlzLl93cml0YWJsZVN0YXRlKSB7XG4gICAgICAgIF90aGlzLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjYikge1xuICAgICAgY2IoZXJyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB1bmRlc3Ryb3koKSB7XG4gIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlKSB7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmVuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkID0gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5maW5pc2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1pdEVycm9yTlQoc2VsZiwgZXJyKSB7XG4gIHNlbGYuZW1pdCgnZXJyb3InLCBlcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVzdHJveTogZGVzdHJveSxcbiAgdW5kZXN0cm95OiB1bmRlc3Ryb3lcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzJyk7XG5leHBvcnRzLlN0cmVhbSA9IGV4cG9ydHM7XG5leHBvcnRzLlJlYWRhYmxlID0gZXhwb3J0cztcbmV4cG9ydHMuV3JpdGFibGUgPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3dyaXRhYmxlLmpzJyk7XG5leHBvcnRzLkR1cGxleCA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fZHVwbGV4LmpzJyk7XG5leHBvcnRzLlRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fdHJhbnNmb3JtLmpzJyk7XG5leHBvcnRzLlBhc3NUaHJvdWdoID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9wYXNzdGhyb3VnaC5qcycpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBpc0VuY29kaW5nID0gQnVmZmVyLmlzRW5jb2RpbmcgfHwgZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIGVuY29kaW5nID0gJycgKyBlbmNvZGluZztcbiAgc3dpdGNoIChlbmNvZGluZyAmJiBlbmNvZGluZy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpjYXNlICd1dGY4JzpjYXNlICd1dGYtOCc6Y2FzZSAnYXNjaWknOmNhc2UgJ2JpbmFyeSc6Y2FzZSAnYmFzZTY0JzpjYXNlICd1Y3MyJzpjYXNlICd1Y3MtMic6Y2FzZSAndXRmMTZsZSc6Y2FzZSAndXRmLTE2bGUnOmNhc2UgJ3Jhdyc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfbm9ybWFsaXplRW5jb2RpbmcoZW5jKSB7XG4gIGlmICghZW5jKSByZXR1cm4gJ3V0ZjgnO1xuICB2YXIgcmV0cmllZDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuYykge1xuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiAndXRmOCc7XG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gJ3V0ZjE2bGUnO1xuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiAnbGF0aW4xJztcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gZW5jO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHJldHJpZWQpIHJldHVybjsgLy8gdW5kZWZpbmVkXG4gICAgICAgIGVuYyA9ICgnJyArIGVuYykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0cmllZCA9IHRydWU7XG4gICAgfVxuICB9XG59O1xuXG4vLyBEbyBub3QgY2FjaGUgYEJ1ZmZlci5pc0VuY29kaW5nYCB3aGVuIGNoZWNraW5nIGVuY29kaW5nIG5hbWVzIGFzIHNvbWVcbi8vIG1vZHVsZXMgbW9ua2V5LXBhdGNoIGl0IHRvIHN1cHBvcnQgYWRkaXRpb25hbCBlbmNvZGluZ3NcbmZ1bmN0aW9uIG5vcm1hbGl6ZUVuY29kaW5nKGVuYykge1xuICB2YXIgbmVuYyA9IF9ub3JtYWxpemVFbmNvZGluZyhlbmMpO1xuICBpZiAodHlwZW9mIG5lbmMgIT09ICdzdHJpbmcnICYmIChCdWZmZXIuaXNFbmNvZGluZyA9PT0gaXNFbmNvZGluZyB8fCAhaXNFbmNvZGluZyhlbmMpKSkgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jKTtcbiAgcmV0dXJuIG5lbmMgfHwgZW5jO1xufVxuXG4vLyBTdHJpbmdEZWNvZGVyIHByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgZWZmaWNpZW50bHkgc3BsaXR0aW5nIGEgc2VyaWVzIG9mXG4vLyBidWZmZXJzIGludG8gYSBzZXJpZXMgb2YgSlMgc3RyaW5ncyB3aXRob3V0IGJyZWFraW5nIGFwYXJ0IG11bHRpLWJ5dGVcbi8vIGNoYXJhY3RlcnMuXG5leHBvcnRzLlN0cmluZ0RlY29kZXIgPSBTdHJpbmdEZWNvZGVyO1xuZnVuY3Rpb24gU3RyaW5nRGVjb2RlcihlbmNvZGluZykge1xuICB0aGlzLmVuY29kaW5nID0gbm9ybWFsaXplRW5jb2RpbmcoZW5jb2RpbmcpO1xuICB2YXIgbmI7XG4gIHN3aXRjaCAodGhpcy5lbmNvZGluZykge1xuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgdGhpcy50ZXh0ID0gdXRmMTZUZXh0O1xuICAgICAgdGhpcy5lbmQgPSB1dGYxNkVuZDtcbiAgICAgIG5iID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgdGhpcy5maWxsTGFzdCA9IHV0ZjhGaWxsTGFzdDtcbiAgICAgIG5iID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICB0aGlzLnRleHQgPSBiYXNlNjRUZXh0O1xuICAgICAgdGhpcy5lbmQgPSBiYXNlNjRFbmQ7XG4gICAgICBuYiA9IDM7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhpcy53cml0ZSA9IHNpbXBsZVdyaXRlO1xuICAgICAgdGhpcy5lbmQgPSBzaW1wbGVFbmQ7XG4gICAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5sYXN0TmVlZCA9IDA7XG4gIHRoaXMubGFzdFRvdGFsID0gMDtcbiAgdGhpcy5sYXN0Q2hhciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuYik7XG59XG5cblN0cmluZ0RlY29kZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGJ1Zikge1xuICBpZiAoYnVmLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICB2YXIgcjtcbiAgdmFyIGk7XG4gIGlmICh0aGlzLmxhc3ROZWVkKSB7XG4gICAgciA9IHRoaXMuZmlsbExhc3QoYnVmKTtcbiAgICBpZiAociA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJyc7XG4gICAgaSA9IHRoaXMubGFzdE5lZWQ7XG4gICAgdGhpcy5sYXN0TmVlZCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaSA9IDA7XG4gIH1cbiAgaWYgKGkgPCBidWYubGVuZ3RoKSByZXR1cm4gciA/IHIgKyB0aGlzLnRleHQoYnVmLCBpKSA6IHRoaXMudGV4dChidWYsIGkpO1xuICByZXR1cm4gciB8fCAnJztcbn07XG5cblN0cmluZ0RlY29kZXIucHJvdG90eXBlLmVuZCA9IHV0ZjhFbmQ7XG5cbi8vIFJldHVybnMgb25seSBjb21wbGV0ZSBjaGFyYWN0ZXJzIGluIGEgQnVmZmVyXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS50ZXh0ID0gdXRmOFRleHQ7XG5cbi8vIEF0dGVtcHRzIHRvIGNvbXBsZXRlIGEgcGFydGlhbCBub24tVVRGLTggY2hhcmFjdGVyIHVzaW5nIGJ5dGVzIGZyb20gYSBCdWZmZXJcblN0cmluZ0RlY29kZXIucHJvdG90eXBlLmZpbGxMYXN0ID0gZnVuY3Rpb24gKGJ1Zikge1xuICBpZiAodGhpcy5sYXN0TmVlZCA8PSBidWYubGVuZ3RoKSB7XG4gICAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgdGhpcy5sYXN0VG90YWwgLSB0aGlzLmxhc3ROZWVkLCAwLCB0aGlzLmxhc3ROZWVkKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0Q2hhci50b1N0cmluZyh0aGlzLmVuY29kaW5nLCAwLCB0aGlzLmxhc3RUb3RhbCk7XG4gIH1cbiAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgdGhpcy5sYXN0VG90YWwgLSB0aGlzLmxhc3ROZWVkLCAwLCBidWYubGVuZ3RoKTtcbiAgdGhpcy5sYXN0TmVlZCAtPSBidWYubGVuZ3RoO1xufTtcblxuLy8gQ2hlY2tzIHRoZSB0eXBlIG9mIGEgVVRGLTggYnl0ZSwgd2hldGhlciBpdCdzIEFTQ0lJLCBhIGxlYWRpbmcgYnl0ZSwgb3IgYVxuLy8gY29udGludWF0aW9uIGJ5dGUuIElmIGFuIGludmFsaWQgYnl0ZSBpcyBkZXRlY3RlZCwgLTIgaXMgcmV0dXJuZWQuXG5mdW5jdGlvbiB1dGY4Q2hlY2tCeXRlKGJ5dGUpIHtcbiAgaWYgKGJ5dGUgPD0gMHg3RikgcmV0dXJuIDA7ZWxzZSBpZiAoYnl0ZSA+PiA1ID09PSAweDA2KSByZXR1cm4gMjtlbHNlIGlmIChieXRlID4+IDQgPT09IDB4MEUpIHJldHVybiAzO2Vsc2UgaWYgKGJ5dGUgPj4gMyA9PT0gMHgxRSkgcmV0dXJuIDQ7XG4gIHJldHVybiBieXRlID4+IDYgPT09IDB4MDIgPyAtMSA6IC0yO1xufVxuXG4vLyBDaGVja3MgYXQgbW9zdCAzIGJ5dGVzIGF0IHRoZSBlbmQgb2YgYSBCdWZmZXIgaW4gb3JkZXIgdG8gZGV0ZWN0IGFuXG4vLyBpbmNvbXBsZXRlIG11bHRpLWJ5dGUgVVRGLTggY2hhcmFjdGVyLiBUaGUgdG90YWwgbnVtYmVyIG9mIGJ5dGVzICgyLCAzLCBvciA0KVxuLy8gbmVlZGVkIHRvIGNvbXBsZXRlIHRoZSBVVEYtOCBjaGFyYWN0ZXIgKGlmIGFwcGxpY2FibGUpIGFyZSByZXR1cm5lZC5cbmZ1bmN0aW9uIHV0ZjhDaGVja0luY29tcGxldGUoc2VsZiwgYnVmLCBpKSB7XG4gIHZhciBqID0gYnVmLmxlbmd0aCAtIDE7XG4gIGlmIChqIDwgaSkgcmV0dXJuIDA7XG4gIHZhciBuYiA9IHV0ZjhDaGVja0J5dGUoYnVmW2pdKTtcbiAgaWYgKG5iID49IDApIHtcbiAgICBpZiAobmIgPiAwKSBzZWxmLmxhc3ROZWVkID0gbmIgLSAxO1xuICAgIHJldHVybiBuYjtcbiAgfVxuICBpZiAoLS1qIDwgaSB8fCBuYiA9PT0gLTIpIHJldHVybiAwO1xuICBuYiA9IHV0ZjhDaGVja0J5dGUoYnVmW2pdKTtcbiAgaWYgKG5iID49IDApIHtcbiAgICBpZiAobmIgPiAwKSBzZWxmLmxhc3ROZWVkID0gbmIgLSAyO1xuICAgIHJldHVybiBuYjtcbiAgfVxuICBpZiAoLS1qIDwgaSB8fCBuYiA9PT0gLTIpIHJldHVybiAwO1xuICBuYiA9IHV0ZjhDaGVja0J5dGUoYnVmW2pdKTtcbiAgaWYgKG5iID49IDApIHtcbiAgICBpZiAobmIgPiAwKSB7XG4gICAgICBpZiAobmIgPT09IDIpIG5iID0gMDtlbHNlIHNlbGYubGFzdE5lZWQgPSBuYiAtIDM7XG4gICAgfVxuICAgIHJldHVybiBuYjtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuLy8gVmFsaWRhdGVzIGFzIG1hbnkgY29udGludWF0aW9uIGJ5dGVzIGZvciBhIG11bHRpLWJ5dGUgVVRGLTggY2hhcmFjdGVyIGFzXG4vLyBuZWVkZWQgb3IgYXJlIGF2YWlsYWJsZS4gSWYgd2Ugc2VlIGEgbm9uLWNvbnRpbnVhdGlvbiBieXRlIHdoZXJlIHdlIGV4cGVjdFxuLy8gb25lLCB3ZSBcInJlcGxhY2VcIiB0aGUgdmFsaWRhdGVkIGNvbnRpbnVhdGlvbiBieXRlcyB3ZSd2ZSBzZWVuIHNvIGZhciB3aXRoXG4vLyBhIHNpbmdsZSBVVEYtOCByZXBsYWNlbWVudCBjaGFyYWN0ZXIgKCdcXHVmZmZkJyksIHRvIG1hdGNoIHY4J3MgVVRGLTggZGVjb2Rpbmdcbi8vIGJlaGF2aW9yLiBUaGUgY29udGludWF0aW9uIGJ5dGUgY2hlY2sgaXMgaW5jbHVkZWQgdGhyZWUgdGltZXMgaW4gdGhlIGNhc2Vcbi8vIHdoZXJlIGFsbCBvZiB0aGUgY29udGludWF0aW9uIGJ5dGVzIGZvciBhIGNoYXJhY3RlciBleGlzdCBpbiB0aGUgc2FtZSBidWZmZXIuXG4vLyBJdCBpcyBhbHNvIGRvbmUgdGhpcyB3YXkgYXMgYSBzbGlnaHQgcGVyZm9ybWFuY2UgaW5jcmVhc2UgaW5zdGVhZCBvZiB1c2luZyBhXG4vLyBsb29wLlxuZnVuY3Rpb24gdXRmOENoZWNrRXh0cmFCeXRlcyhzZWxmLCBidWYsIHApIHtcbiAgaWYgKChidWZbMF0gJiAweEMwKSAhPT0gMHg4MCkge1xuICAgIHNlbGYubGFzdE5lZWQgPSAwO1xuICAgIHJldHVybiAnXFx1ZmZmZCc7XG4gIH1cbiAgaWYgKHNlbGYubGFzdE5lZWQgPiAxICYmIGJ1Zi5sZW5ndGggPiAxKSB7XG4gICAgaWYgKChidWZbMV0gJiAweEMwKSAhPT0gMHg4MCkge1xuICAgICAgc2VsZi5sYXN0TmVlZCA9IDE7XG4gICAgICByZXR1cm4gJ1xcdWZmZmQnO1xuICAgIH1cbiAgICBpZiAoc2VsZi5sYXN0TmVlZCA+IDIgJiYgYnVmLmxlbmd0aCA+IDIpIHtcbiAgICAgIGlmICgoYnVmWzJdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICAgICAgc2VsZi5sYXN0TmVlZCA9IDI7XG4gICAgICAgIHJldHVybiAnXFx1ZmZmZCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEF0dGVtcHRzIHRvIGNvbXBsZXRlIGEgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIgdXNpbmcgYnl0ZXMgZnJvbSBhIEJ1ZmZlci5cbmZ1bmN0aW9uIHV0ZjhGaWxsTGFzdChidWYpIHtcbiAgdmFyIHAgPSB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQ7XG4gIHZhciByID0gdXRmOENoZWNrRXh0cmFCeXRlcyh0aGlzLCBidWYsIHApO1xuICBpZiAociAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcjtcbiAgaWYgKHRoaXMubGFzdE5lZWQgPD0gYnVmLmxlbmd0aCkge1xuICAgIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHAsIDAsIHRoaXMubGFzdE5lZWQpO1xuICAgIHJldHVybiB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIDAsIHRoaXMubGFzdFRvdGFsKTtcbiAgfVxuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCBwLCAwLCBidWYubGVuZ3RoKTtcbiAgdGhpcy5sYXN0TmVlZCAtPSBidWYubGVuZ3RoO1xufVxuXG4vLyBSZXR1cm5zIGFsbCBjb21wbGV0ZSBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgQnVmZmVyLiBJZiB0aGUgQnVmZmVyIGVuZGVkIG9uIGFcbi8vIHBhcnRpYWwgY2hhcmFjdGVyLCB0aGUgY2hhcmFjdGVyJ3MgYnl0ZXMgYXJlIGJ1ZmZlcmVkIHVudGlsIHRoZSByZXF1aXJlZFxuLy8gbnVtYmVyIG9mIGJ5dGVzIGFyZSBhdmFpbGFibGUuXG5mdW5jdGlvbiB1dGY4VGV4dChidWYsIGkpIHtcbiAgdmFyIHRvdGFsID0gdXRmOENoZWNrSW5jb21wbGV0ZSh0aGlzLCBidWYsIGkpO1xuICBpZiAoIXRoaXMubGFzdE5lZWQpIHJldHVybiBidWYudG9TdHJpbmcoJ3V0ZjgnLCBpKTtcbiAgdGhpcy5sYXN0VG90YWwgPSB0b3RhbDtcbiAgdmFyIGVuZCA9IGJ1Zi5sZW5ndGggLSAodG90YWwgLSB0aGlzLmxhc3ROZWVkKTtcbiAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgMCwgZW5kKTtcbiAgcmV0dXJuIGJ1Zi50b1N0cmluZygndXRmOCcsIGksIGVuZCk7XG59XG5cbi8vIEZvciBVVEYtOCwgYSByZXBsYWNlbWVudCBjaGFyYWN0ZXIgaXMgYWRkZWQgd2hlbiBlbmRpbmcgb24gYSBwYXJ0aWFsXG4vLyBjaGFyYWN0ZXIuXG5mdW5jdGlvbiB1dGY4RW5kKGJ1Zikge1xuICB2YXIgciA9IGJ1ZiAmJiBidWYubGVuZ3RoID8gdGhpcy53cml0ZShidWYpIDogJyc7XG4gIGlmICh0aGlzLmxhc3ROZWVkKSByZXR1cm4gciArICdcXHVmZmZkJztcbiAgcmV0dXJuIHI7XG59XG5cbi8vIFVURi0xNkxFIHR5cGljYWxseSBuZWVkcyB0d28gYnl0ZXMgcGVyIGNoYXJhY3RlciwgYnV0IGV2ZW4gaWYgd2UgaGF2ZSBhbiBldmVuXG4vLyBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlLCB3ZSBuZWVkIHRvIGNoZWNrIGlmIHdlIGVuZCBvbiBhIGxlYWRpbmcvaGlnaFxuLy8gc3Vycm9nYXRlLiBJbiB0aGF0IGNhc2UsIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG5leHQgdHdvIGJ5dGVzIGluIG9yZGVyIHRvXG4vLyBkZWNvZGUgdGhlIGxhc3QgY2hhcmFjdGVyIHByb3Blcmx5LlxuZnVuY3Rpb24gdXRmMTZUZXh0KGJ1ZiwgaSkge1xuICBpZiAoKGJ1Zi5sZW5ndGggLSBpKSAlIDIgPT09IDApIHtcbiAgICB2YXIgciA9IGJ1Zi50b1N0cmluZygndXRmMTZsZScsIGkpO1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgYyA9IHIuY2hhckNvZGVBdChyLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGMgPj0gMHhEODAwICYmIGMgPD0gMHhEQkZGKSB7XG4gICAgICAgIHRoaXMubGFzdE5lZWQgPSAyO1xuICAgICAgICB0aGlzLmxhc3RUb3RhbCA9IDQ7XG4gICAgICAgIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDJdO1xuICAgICAgICB0aGlzLmxhc3RDaGFyWzFdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgICAgICAgcmV0dXJuIHIuc2xpY2UoMCwgLTEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICB0aGlzLmxhc3ROZWVkID0gMTtcbiAgdGhpcy5sYXN0VG90YWwgPSAyO1xuICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgcmV0dXJuIGJ1Zi50b1N0cmluZygndXRmMTZsZScsIGksIGJ1Zi5sZW5ndGggLSAxKTtcbn1cblxuLy8gRm9yIFVURi0xNkxFIHdlIGRvIG5vdCBleHBsaWNpdGx5IGFwcGVuZCBzcGVjaWFsIHJlcGxhY2VtZW50IGNoYXJhY3RlcnMgaWYgd2Vcbi8vIGVuZCBvbiBhIHBhcnRpYWwgY2hhcmFjdGVyLCB3ZSBzaW1wbHkgbGV0IHY4IGhhbmRsZSB0aGF0LlxuZnVuY3Rpb24gdXRmMTZFbmQoYnVmKSB7XG4gIHZhciByID0gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHtcbiAgICB2YXIgZW5kID0gdGhpcy5sYXN0VG90YWwgLSB0aGlzLmxhc3ROZWVkO1xuICAgIHJldHVybiByICsgdGhpcy5sYXN0Q2hhci50b1N0cmluZygndXRmMTZsZScsIDAsIGVuZCk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRleHQoYnVmLCBpKSB7XG4gIHZhciBuID0gKGJ1Zi5sZW5ndGggLSBpKSAlIDM7XG4gIGlmIChuID09PSAwKSByZXR1cm4gYnVmLnRvU3RyaW5nKCdiYXNlNjQnLCBpKTtcbiAgdGhpcy5sYXN0TmVlZCA9IDMgLSBuO1xuICB0aGlzLmxhc3RUb3RhbCA9IDM7XG4gIGlmIChuID09PSAxKSB7XG4gICAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMV07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMl07XG4gICAgdGhpcy5sYXN0Q2hhclsxXSA9IGJ1ZltidWYubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIGJ1Zi50b1N0cmluZygnYmFzZTY0JywgaSwgYnVmLmxlbmd0aCAtIG4pO1xufVxuXG5mdW5jdGlvbiBiYXNlNjRFbmQoYnVmKSB7XG4gIHZhciByID0gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHJldHVybiByICsgdGhpcy5sYXN0Q2hhci50b1N0cmluZygnYmFzZTY0JywgMCwgMyAtIHRoaXMubGFzdE5lZWQpO1xuICByZXR1cm4gcjtcbn1cblxuLy8gUGFzcyBieXRlcyBvbiB0aHJvdWdoIGZvciBzaW5nbGUtYnl0ZSBlbmNvZGluZ3MgKGUuZy4gYXNjaWksIGxhdGluMSwgaGV4KVxuZnVuY3Rpb24gc2ltcGxlV3JpdGUoYnVmKSB7XG4gIHJldHVybiBidWYudG9TdHJpbmcodGhpcy5lbmNvZGluZyk7XG59XG5cbmZ1bmN0aW9uIHNpbXBsZUVuZChidWYpIHtcbiAgcmV0dXJuIGJ1ZiAmJiBidWYubGVuZ3RoID8gdGhpcy53cml0ZShidWYpIDogJyc7XG59IiwidmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJ3JlYWRhYmxlLXN0cmVhbScpLlRyYW5zZm9ybVxuICAsIGluaGVyaXRzICA9IHJlcXVpcmUoJ3V0aWwnKS5pbmhlcml0c1xuICAsIHh0ZW5kICAgICA9IHJlcXVpcmUoJ3h0ZW5kJylcblxuZnVuY3Rpb24gRGVzdHJveWFibGVUcmFuc2Zvcm0ob3B0cykge1xuICBUcmFuc2Zvcm0uY2FsbCh0aGlzLCBvcHRzKVxuICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZVxufVxuXG5pbmhlcml0cyhEZXN0cm95YWJsZVRyYW5zZm9ybSwgVHJhbnNmb3JtKVxuXG5EZXN0cm95YWJsZVRyYW5zZm9ybS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKGVycikge1xuICBpZiAodGhpcy5fZGVzdHJveWVkKSByZXR1cm5cbiAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZVxuICBcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKGVycilcbiAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgc2VsZi5lbWl0KCdjbG9zZScpXG4gIH0pXG59XG5cbi8vIGEgbm9vcCBfdHJhbnNmb3JtIGZ1bmN0aW9uXG5mdW5jdGlvbiBub29wIChjaHVuaywgZW5jLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayhudWxsLCBjaHVuaylcbn1cblxuXG4vLyBjcmVhdGUgYSBuZXcgZXhwb3J0IGZ1bmN0aW9uLCB1c2VkIGJ5IGJvdGggdGhlIG1haW4gZXhwb3J0IGFuZFxuLy8gdGhlIC5jdG9yIGV4cG9ydCwgY29udGFpbnMgY29tbW9uIGxvZ2ljIGZvciBkZWFsaW5nIHdpdGggYXJndW1lbnRzXG5mdW5jdGlvbiB0aHJvdWdoMiAoY29uc3RydWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmbHVzaCAgICAgPSB0cmFuc2Zvcm1cbiAgICAgIHRyYW5zZm9ybSA9IG9wdGlvbnNcbiAgICAgIG9wdGlvbnMgICA9IHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0cmFuc2Zvcm0gIT0gJ2Z1bmN0aW9uJylcbiAgICAgIHRyYW5zZm9ybSA9IG5vb3BcblxuICAgIGlmICh0eXBlb2YgZmx1c2ggIT0gJ2Z1bmN0aW9uJylcbiAgICAgIGZsdXNoID0gbnVsbFxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKVxuICB9XG59XG5cblxuLy8gbWFpbiBleHBvcnQsIGp1c3QgbWFrZSBtZSBhIHRyYW5zZm9ybSBzdHJlYW0hXG5tb2R1bGUuZXhwb3J0cyA9IHRocm91Z2gyKGZ1bmN0aW9uIChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKSB7XG4gIHZhciB0MiA9IG5ldyBEZXN0cm95YWJsZVRyYW5zZm9ybShvcHRpb25zKVxuXG4gIHQyLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cblxuICBpZiAoZmx1c2gpXG4gICAgdDIuX2ZsdXNoID0gZmx1c2hcblxuICByZXR1cm4gdDJcbn0pXG5cblxuLy8gbWFrZSBtZSBhIHJldXNhYmxlIHByb3RvdHlwZSB0aGF0IEkgY2FuIGBuZXdgLCBvciBpbXBsaWNpdGx5IGBuZXdgXG4vLyB3aXRoIGEgY29uc3RydWN0b3IgY2FsbFxubW9kdWxlLmV4cG9ydHMuY3RvciA9IHRocm91Z2gyKGZ1bmN0aW9uIChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKSB7XG4gIGZ1bmN0aW9uIFRocm91Z2gyIChvdmVycmlkZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUaHJvdWdoMikpXG4gICAgICByZXR1cm4gbmV3IFRocm91Z2gyKG92ZXJyaWRlKVxuXG4gICAgdGhpcy5vcHRpb25zID0geHRlbmQob3B0aW9ucywgb3ZlcnJpZGUpXG5cbiAgICBEZXN0cm95YWJsZVRyYW5zZm9ybS5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIGluaGVyaXRzKFRocm91Z2gyLCBEZXN0cm95YWJsZVRyYW5zZm9ybSlcblxuICBUaHJvdWdoMi5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXG4gIGlmIChmbHVzaClcbiAgICBUaHJvdWdoMi5wcm90b3R5cGUuX2ZsdXNoID0gZmx1c2hcblxuICByZXR1cm4gVGhyb3VnaDJcbn0pXG5cblxubW9kdWxlLmV4cG9ydHMub2JqID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgdmFyIHQyID0gbmV3IERlc3Ryb3lhYmxlVHJhbnNmb3JtKHh0ZW5kKHsgb2JqZWN0TW9kZTogdHJ1ZSwgaGlnaFdhdGVyTWFyazogMTYgfSwgb3B0aW9ucykpXG5cbiAgdDIuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXG4gIGlmIChmbHVzaClcbiAgICB0Mi5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiB0MlxufSlcbiIsIi8vIFJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHdyYXBwZWQgY2FsbGJhY2tcbi8vIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHNob3VsZCBkbyBzb21lIHN0dWZmLCBhbmQgcmV0dXJuIGFcbi8vIHByZXN1bWFibHkgZGlmZmVyZW50IGNhbGxiYWNrIGZ1bmN0aW9uLlxuLy8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgb3duIHByb3BlcnRpZXMgYXJlIHJldGFpbmVkLCBzbyB0aGF0XG4vLyBkZWNvcmF0aW9ucyBhbmQgc3VjaCBhcmUgbm90IGxvc3QgYWxvbmcgdGhlIHdheS5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHB5XG5mdW5jdGlvbiB3cmFwcHkgKGZuLCBjYikge1xuICBpZiAoZm4gJiYgY2IpIHJldHVybiB3cmFwcHkoZm4pKGNiKVxuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbmVlZCB3cmFwcGVyIGZ1bmN0aW9uJylcblxuICBPYmplY3Qua2V5cyhmbikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHdyYXBwZXJba10gPSBmbltrXVxuICB9KVxuXG4gIHJldHVybiB3cmFwcGVyXG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICB2YXIgcmV0ID0gZm4uYXBwbHkodGhpcywgYXJncylcbiAgICB2YXIgY2IgPSBhcmdzW2FyZ3MubGVuZ3RoLTFdXG4gICAgaWYgKHR5cGVvZiByZXQgPT09ICdmdW5jdGlvbicgJiYgcmV0ICE9PSBjYikge1xuICAgICAgT2JqZWN0LmtleXMoY2IpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0W2tdID0gY2Jba11cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuIiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIGV4cG9ydHMgPSB7fSxcbiAgICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgICBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pLCBvYmpba2V5XTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgICAgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBnZW5lcmF0b3IuX2ludm9rZSA9IGZ1bmN0aW9uIChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgICB2YXIgc3RhdGUgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgIGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcblxuICAgICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBtZXRob2QpIHRocm93IGFyZztcbiAgICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7Oykge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG5cbiAgICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcIm5leHRcIiA9PT0gY29udGV4dC5tZXRob2QpIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUgJiYgKHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfShpbm5lckZuLCBzZWxmLCBjb250ZXh0KSwgZ2VuZXJhdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cblxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuXG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKHZhbHVlKSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgdGhpcy5faW52b2tlID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcblxuICAgIGlmICh1bmRlZmluZWQgPT09IG1ldGhvZCkge1xuICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpKSByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHtcbiAgICAgIHRyeUxvYzogbG9jc1swXVxuICAgIH07XG4gICAgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTtcblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiAhMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSksIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbiksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSk7XG4gIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCksIGdlbkZ1bjtcbiAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogYXJnXG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSxcbiAgICAgICAgICAgIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICAgIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzRmluYWxseSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTtcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHJlY29yZC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gcmVjb3JkLnR5cGUgPyB0aGlzLm5leHQgPSByZWNvcmQuYXJnIDogXCJyZXR1cm5cIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9LCBleHBvcnRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJDb21wb3NlZFN0b3JlIiwiT2JzZXJ2YWJsZVN0b3JlXzEiLCJPYnNlcnZhYmxlU3RvcmUiLCJjb25zdHJ1Y3RvciIsImNoaWxkcmVuIiwic3VwZXIiLCJ0aGlzIiwiX2NoaWxkcmVuIiwia2V5cyIsImZvckVhY2giLCJjaGlsZEtleSIsImNoaWxkIiwiX2FkZENoaWxkIiwidXBkYXRlRnJvbUNoaWxkIiwiY2hpbGRWYWx1ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJwdXRTdGF0ZSIsInN1YnNjcmliZSIsIk1lcmdlZFN0b3JlIiwiX3VwZGF0ZVdob2xlU3RhdGUiLCJjaGlsZFN0YXRlcyIsIm1hcCIsImFzc2lnbiIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJzYWZlX2V2ZW50X2VtaXR0ZXJfMSIsImRlZmF1bHQiLCJpbml0U3RhdGUiLCJfc3RhdGUiLCJfZ2V0U3RhdGUiLCJuZXdTdGF0ZSIsIl9wdXRTdGF0ZSIsImVtaXQiLCJ1cGRhdGVTdGF0ZSIsInBhcnRpYWxTdGF0ZSIsImhhbmRsZXIiLCJvbiIsInVuc3Vic2NyaWJlIiwicmVtb3ZlTGlzdGVuZXIiLCJzdG9yZUFzU3RyZWFtIiwic3RyZWFtXzEiLCJPYnNlcnZhYmxlU3RvcmVTdHJlYW0iLCJEdXBsZXgiLCJvYnNTdG9yZSIsIm9iamVjdE1vZGUiLCJyZXN1bWUiLCJwdXNoIiwicGlwZSIsImRlc3QiLCJvcHRpb25zIiwicmVzdWx0Iiwid3JpdGUiLCJfd3JpdGUiLCJjaHVuayIsIl9lbmNvZGluZyIsImNhbGxiYWNrIiwiX3JlYWQiLCJfc2l6ZSIsIl9kZXN0cm95IiwiZXJyIiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19leHBvcnRTdGFyIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInN0b3JlVHJhbnNmb3JtU3RyZWFtIiwidGhyb3VnaDJfMSIsInN5bmNUcmFuc2Zvcm1GbiIsIm9iaiIsImNiIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJzb3VyY2VLZXlzIiwia2V5IiwiaSIsImxlbmd0aCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIkVUSEVSRVVNX05FVFdPUksiLCJST1BTVEVOIiwiTUFJTk5FVCIsIlBPTFlHT04iLCJhYmkiLCJpbnB1dHMiLCJpbnRlcm5hbFR5cGUiLCJuYW1lIiwidHlwZSIsIm91dHB1dHMiLCJzdGF0ZU11dGFiaWxpdHkiLCJOb2RlRGV0YWlsTWFuYWdlciIsIm5ldHdvcmsiLCJwcm94eUFkZHJlc3MiLCJhcmd1bWVudHMiLCJ1cmwiLCJYIiwiWSIsIlVSTCIsImhyZWYiLCJfIiwicHJvamVjdElkIiwiY29uY2F0Iiwibm9kZUxpc3RDb250cmFjdCIsIm5vZGVMaXN0QWRkcmVzcyIsInVwZGF0ZWQiLCJfbmV0d29yayIsIl9ub2RlRGV0YWlscyIsImN1cnJlbnRFcG9jaCIsIl9jdXJyZW50RXBvY2giLCJ0b3J1c05vZGVFbmRwb2ludHMiLCJfdG9ydXNOb2RlRW5kcG9pbnRzIiwidG9ydXNOb2RlUHViIiwiX3RvcnVzTm9kZVB1YiIsInRvcnVzSW5kZXhlcyIsIl90b3J1c0luZGV4ZXMiLCJhc3luYyIsIl9yZWYiLCJza2lwIiwidmVyaWZpZXIiLCJ2ZXJpZmllcklkIiwiaGFzaGVkVmVyaWZpZXJJZCIsImtlY2NhazI1NiIsIm5vZGVEZXRhaWxzIiwibWV0aG9kcyIsImdldE5vZGVTZXQiLCJ0b3J1c05vZGVQdWJYIiwidG9ydXNOb2RlUHViWSIsIngiLCJOdW1iZXIiLCJ1cGRhdGVkRW5kcG9pbnRzIiwidXBkYXRlZE5vZGVQdWIiLCJpbmRleCIsImVuZFBvaW50RWxlbWVudCIsInB1Ykt4IiwicHViS3kiLCJlbmRwb2ludCIsInNwbGl0IiwidG9IZXgiLCJyZXBsYWNlIiwiZXJyb3IiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJsb2ciLCJzZXRMZXZlbCIsImxldmVscyIsImFwaUtleSIsImVtYmVkSG9zdCIsInNldEVtYmVkSG9zdCIsImVtYmVkSG9zdF8iLCJzZXRBUElLZXkiLCJhcGlLZXlfIiwiZ2V0QXBpS2V5SGVhZGVycyIsImhlYWRlcnMiLCJkZWJ1Z0xvZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJpbmZvIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInByb21pc2VUaW1lb3V0IiwibXMiLCJwcm9taXNlIiwidGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiRXJyb3IiLCJyYWNlIiwib3B0aW9uc18iLCJjdXN0b21PcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJtb2RlIiwidXNlQVBJS2V5IiwibWV0aG9kIiwiZmV0Y2giLCJvayIsImpzb24iLCJwb3N0IiwiZGF0YSIsImlzVXJsRW5jb2RlZERhdGEiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJnZW5lcmF0ZUpzb25SUENPYmplY3QiLCJwYXJhbWV0ZXJzIiwianNvbnJwYyIsInBhcmFtcyIsIm5vb3AiLCJBQ0siLCJCYXNlUG9zdE1lc3NhZ2VTdHJlYW0iLCJ0YXJnZXRXaW5kb3ciLCJ3aW5kb3ciLCJ0YXJnZXRPcmlnaW4iLCJfaW5pdCIsIl9oYXZlU3luIiwiX25hbWUiLCJfdGFyZ2V0IiwiX3RhcmdldFdpbmRvdyIsIl90YXJnZXRPcmlnaW4iLCJfb25NZXNzYWdlIiwib25NZXNzYWdlIiwiYmluZCIsIl9zeW5JbnRlcnZhbElkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kU2hha2UiLCJfYnJlYWsiLCJjb3JrIiwiX29uRGF0YSIsInVuY29yayIsIl9wb3N0TWVzc2FnZSIsIm9yaWdpbkNvbnN0cmFpbnQiLCJwb3N0TWVzc2FnZSIsImV2ZW50IiwibWVzc2FnZSIsIm9yaWdpbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzYWZlQXBwbHkiLCJjb250ZXh0IiwiYXJncyIsIlJlZmxlY3QiLCJTYWZlRXZlbnRFbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiZG9FcnJvciIsImV2ZW50cyIsIl9ldmVudHMiLCJfbGVuIiwiQXJyYXkiLCJfa2V5IiwiZXIiLCJsZW4iLCJsaXN0ZW5lcnMiLCJhcnIiLCJuIiwiY29weSIsImFycmF5Q2xvbmUiLCJTZXJpYWxpemFibGVFcnJvciIsImNvZGUiLCJpc0ludGVnZXIiLCJ0b1N0cmluZyIsInN0YWNrIiwiY3JlYXRlU3RyZWFtTWlkZGxld2FyZSIsImlkTWFwIiwic3RyZWFtIiwicmVhZCIsInJlcyIsInByb2Nlc3NOb3RpZmljYXRpb24iLCJlbmQiLCJwcm9jZXNzUmVzcG9uc2UiLCJfZXJyIiwibWlkZGxld2FyZSIsInJlcSIsIm5leHQiLCJjcmVhdGVJZFJlbWFwTWlkZGxld2FyZSIsIl9lbmQiLCJvcmlnaW5hbElkIiwibmV3SWQiLCJyYW5kb21JZCIsImRvbmUiLCJvd25LZXlzJDEiLCJKUlBDRW5naW5lIiwiX21pZGRsZXdhcmUiLCJzdGF0aWMiLCJtaWRkbGV3YXJlU3RhY2siLCJyZXR1cm5IYW5kbGVycyIsImlzQ29tcGxldGUiLCJfcnVuTWlkZGxld2FyZSIsInJldmVyc2UiLCJzZXJpYWxpemVFcnJvciIsInJldHVybkhhbmRsZXIiLCJoYW5kbGVycyIsImhhbmRsZSIsImlzQXJyYXkiLCJfaGFuZGxlQmF0Y2giLCJfaGFuZGxlIiwiX3Byb21pc2VIYW5kbGUiLCJhc01pZGRsZXdhcmUiLCJtaWRkbGV3YXJlRXJyb3IiLCJfcnVuQWxsTWlkZGxld2FyZSIsIl9ydW5SZXR1cm5IYW5kbGVycyIsImhhbmRsZXJDYWxsYmFjayIsInJlcXMiLCJyZXNwb25zZXMiLCJhbGwiLCJjYWxsZXJSZXEiLCJfb2JqZWN0U3ByZWFkJDEiLCJfcHJvY2Vzc1JlcXVlc3QiLCJfZXJyb3IiLCJfY2hlY2tGb3JDb21wbGV0aW9uIiwiU3Vic3RyZWFtIiwicGFyZW50IiwiX3BhcmVudCIsIklHTk9SRV9TVUJTVFJFQU0iLCJTeW1ib2wiLCJPYmplY3RNdWx0aXBsZXgiLCJfc3Vic3RyZWFtcyIsImNyZWF0ZVN0cmVhbSIsInN1YnN0cmVhbSIsIl9jYiIsInJlYWRhYmxlIiwiYW55U3RyZWFtRW5kIiwiZGVzdHJveSIsImlnbm9yZVN0cmVhbSIsImNvbnNvbGUiLCJ3YXJuIiwiX3R5cGVvZiIsIml0ZXJhdG9yIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJhcmciLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIl9zZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJCb29sZWFuIiwidmFsdWVPZiIsImUiLCJfY29uc3RydWN0IiwiUGFyZW50IiwiQ2xhc3MiLCJhIiwiRnVuY3Rpb24iLCJfd3JhcE5hdGl2ZVN1cGVyIiwiX2NhY2hlIiwiTWFwIiwiaGFzIiwic2V0IiwiV3JhcHBlciIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyMiIsIl90b0NvbnN1bWFibGVBcnJheSIsIml0ZXIiLCJmcm9tIiwibWluTGVuIiwic2xpY2UiLCJ0ZXN0IiwiX2NyZWF0ZVN1cGVyJDEiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSIsIlN1cGVyIiwiTmV3VGFyZ2V0IiwiZGlzYWJsZUFsbCIsIlNvbWVFcnJvciIsIl9FcnJvciIsIl9zdXBlciIsIl90aGlzIiwiZXJyb3JzIiwicHJlZGljYXRlIiwiU29tZSIsInByb21pc2VzIiwiZmluaXNoZWRDb3VudCIsInNoYXJlZFN0YXRlIiwicmVzb2x2ZWQiLCJlcnJvckFyciIsImZpbGwiLCJyZXN1bHRBcnIiLCJwcmVkaWNhdGVFcnJvciIsInJlc3AiLCJjYXRjaCIsImZpbmFsbHkiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ6IiwiX2Vycm9yJGRhdGEiLCJzdGFydHNXaXRoIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJtc2ciLCJpdCIsImpvaW4iLCJfcHJlZGljYXRlRXJyb3IiLCJfY3JlYXRlU3VwZXIiLCJHZXRPclNldE5vbmNlRXJyb3IiLCJrQ29tYmluYXRpb25zIiwicyIsImN1ciIsImNvbWJzIiwidGFpbENvbWJzIiwiaiIsInRocmVzaG9sZFNhbWUiLCJ0IiwiaGFzaE1hcCIsImtleUxvb2t1cCIsIl9jYWxsZWUiLCJlbmRwb2ludHMiLCJsb29rdXBQcm9taXNlcyIsIl9jb250ZXh0IiwicHJldiIsInZlcmlmaWVyX2lkIiwiYWJydXB0IiwibG9va3VwUmVzdWx0cyIsImxvb2t1cFNoYXJlcyIsIngxIiwiZXJyb3JSZXN1bHQiLCJ4MiIsImtleVJlc3VsdCIsIngzIiwic3RvcCIsIl94IiwiX3gyIiwiX3gzIiwid2FpdEtleUxvb2t1cCIsImtleUFzc2lnbiIsIl9yZWYzIiwiX2NhbGxlZTIiLCJfcmVmMiIsInRvcnVzTm9kZVB1YnMiLCJsYXN0UG9pbnQiLCJmaXJzdFBvaW50Iiwic2lnbmVySG9zdCIsIm5vZGVOdW0iLCJpbml0aWFsUG9pbnQiLCJzaWduZWREYXRhIiwiX2NvbnRleHQyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHViS2V5WCIsInB1YktleVkiLCJzZW50IiwidDAiLCJpbmNsdWRlcyIsIl94NCIsImhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJUb3J1cyIsIl9yZWYkZW5hYmxlT25lS2V5IiwiZW5hYmxlT25lS2V5IiwiX3JlZiRtZXRhZGF0YUhvc3QiLCJtZXRhZGF0YUhvc3QiLCJfcmVmJGFsbG93SG9zdCIsImFsbG93SG9zdCIsIl9yZWYkc2lnbmVySG9zdCIsIl9yZWYkc2VydmVyVGltZU9mZnNldCIsInNlcnZlclRpbWVPZmZzZXQiLCJfcmVmJG5ldHdvcmsiLCJlYyIsIl9nZXRVc2VyVHlwZUFuZEFkZHJlc3MiLCJkb2VzS2V5QXNzaWduIiwiaXNOZXdLZXkiLCJmaW5hbEtleVJlc3VsdCIsImFzc2lnblJlc3VsdCIsIl9maW5hbEtleVJlc3VsdCRrZXlzJCIsIm5vbmNlUmVzdWx0Iiwibm9uY2UiLCJtb2RpZmllZFB1YktleSIsImZpbmFsWCIsImZpbmFsWSIsImFkZHJlc3MiLCJfYXJncyIsInB1Yl9rZXlfWCIsInB1Yl9rZXlfWSIsImdldE9yU2V0Tm9uY2UiLCJ0MSIsInR5cGVPZlVzZXIiLCJrZXlGcm9tUHVibGljIiwieSIsImdldFB1YmxpYyIsImFkZCIsImtleUZyb21Qcml2YXRlIiwicHViTm9uY2UiLCJnZXRYIiwiZ2V0WSIsImdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXkiLCJ1cGdyYWRlZCIsIl9zZXRDdXN0b21LZXkiLCJfcmVmNCIsInByaXZLZXlIZXgiLCJtZXRhZGF0YU5vbmNlIiwidG9ydXNLZXlIZXgiLCJjdXN0b21LZXlIZXgiLCJ0b3J1c0tleSIsInByaXZLZXkiLCJjdXN0b21LZXkiLCJuZXdNZXRhZGF0YU5vbmNlIiwic3ViIiwidW1vZCIsImN1cnZlIiwiZ2VuZXJhdGVNZXRhZGF0YVBhcmFtcyIsInNldE1ldGFkYXRhIiwiX3JldHJpZXZlU2hhcmVzIiwiX2NhbGxlZTUiLCJpbmRleGVzIiwidmVyaWZpZXJQYXJhbXMiLCJpZFRva2VuIiwiZXh0cmFQYXJhbXMiLCJwcm9taXNlQXJyIiwidG1wS2V5IiwicHViS2V5IiwidG9rZW5Db21taXRtZW50IiwiX2FyZ3M1IiwiX2NvbnRleHQ1IiwibWVzc2FnZXByZWZpeCIsInRva2VuY29tbWl0bWVudCIsInRlbXBwdWJ4IiwidGVtcHB1YnkiLCJ2ZXJpZmllcmlkZW50aWZpZXIiLCJwcm9taXNlQXJyUmVxdWVzdCIsIm5vZGVTaWdzIiwiX2kiLCJfaTIiLCJfcCIsImVuY3J5cHRlZCIsIml0ZW0iLCJpZHRva2VuIiwibm9kZXNpZ25hdHVyZXMiLCJfcmVmNSIsIl9jYWxsZWUzIiwic2hhcmVSZXNwb25zZXMiLCJjb21wbGV0ZWRSZXF1ZXN0cyIsInRocmVzaG9sZFB1YmxpY0tleSIsInNoYXJlUHJvbWlzZXMiLCJub2RlSW5kZXhlcyIsIl9pMyIsIl9jdXJyZW50U2hhcmVSZXNwb25zZSIsIl9jdXJyZW50U2hhcmVSZXNwb25zZTIiLCJjdXJyZW50U2hhcmVSZXNwb25zZSIsImZpcnN0S2V5IiwibWV0YWRhdGEiLCJzaGFyZXNSZXNvbHZlZCIsImRlY3J5cHRlZFNoYXJlcyIsImFsbENvbWJpcyIsInByaXZhdGVLZXkiLCJfbG9vcCIsIl9yZXQiLCJfY29udGV4dDMiLCJQdWJsaWNLZXkiLCJzb3J0IiwiYiIsIkluZGV4IiwiY21wIiwiTWV0YWRhdGEiLCJlcGhlbVB1YmxpY0tleSIsIml2IiwibWFjIiwiY2lwaGVydGV4dCIsIlNoYXJlIiwicGFkU3RhcnQiLCJkZWJ1ZyIsImN1cnIiLCJjdXJyZW50Q29tYmkiLCJjdXJyZW50Q29tYmlTaGFyZXMiLCJ2Iiwic2hhcmVzIiwiaW5kaWNlcyIsImRlcml2ZWRQcml2YXRlS2V5IiwibGFncmFuZ2VJbnRlcnBvbGF0aW9uIiwiZGVjcnlwdGVkUHViS2V5IiwiZGVjcnlwdGVkUHViS2V5WCIsImRlY3J5cHRlZFB1YktleVkiLCJfeDEwIiwiX3gxMSIsIl9yZWY2IiwiX2NhbGxlZTQiLCJyZXR1cm5lZEtleSIsIl95aWVsZCRfdGhpcyRnZXROb25jZSIsImV0aEFkZHJlc3MiLCJfY29udGV4dDQiLCJnZXROb25jZSIsImdldE1ldGFkYXRhIiwiZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXkiLCJfeDEyIiwiX3g1IiwiX3g2IiwiX3g3IiwiX3g4IiwiX3g5IiwiX2dldE1ldGFkYXRhIiwiX2NhbGxlZTYiLCJtZXRhZGF0YVJlc3BvbnNlIiwiX2FyZ3M2IiwiX2NvbnRleHQ2IiwiX3gxMyIsInNldERhdGEiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93Iiwic2lnIiwic2lnbiIsInNldF9kYXRhIiwic2lnbmF0dXJlIiwiciIsIl9zZXRNZXRhZGF0YSIsIl9jYWxsZWU3IiwiX2FyZ3M3IiwiX2NvbnRleHQ3IiwiX3gxNCIsIm5vZGVJbmRleCIsInNlY3JldCIsInVwcGVyIiwibG93ZXIiLCJtdWwiLCJuZWciLCJ0ZW1wIiwiZGVsdGEiLCJpbnZtIiwicHVibGljS2V5IiwiZW5jb2RlIiwiZXRoQWRkcmVzc0xvd2VyIiwidG9DaGVja3N1bUFkZHJlc3MiLCJwdWJsaWNLZXlYIiwicHVibGljS2V5WSIsIl9nZXRQdWJsaWNBZGRyZXNzIiwiX2NhbGxlZTgiLCJfcmVmNyIsImlzRXh0ZW5kZWQiLCJfcmVmOCIsIl9ub25jZSIsIl9maW5hbEtleVJlc3VsdCRrZXlzJDIiLCJfYXJnczgiLCJfY29udGV4dDgiLCJfeDE1IiwiX3gxNiIsIl94MTciLCJfZ2V0T3JTZXROb25jZSIsIl9jYWxsZWU5IiwiZ2V0T25seSIsIl9hcmdzOSIsIl9jb250ZXh0OSIsIl94MTgiLCJfeDE5IiwiX3gyMCIsIl9nZXROb25jZSIsIl9jYWxsZWUxMCIsIl9jb250ZXh0MTAiLCJfeDIxIiwiX3gyMiIsIl94MjMiLCJwcml2S2V5Qk4iLCJub25jZUJOIiwiZW5hYmxlQWxsIiwiTE9HSU5fUFJPVklERVIiLCJXQUxMRVRfVkVSSUZJRVJTIiwiR09PR0xFIiwiRkFDRUJPT0siLCJUV0lUQ0giLCJSRURESVQiLCJESVNDT1JEIiwiRU1BSUxfUEFTU1dPUkRMRVNTIiwiV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVAiLCJUT1JVU19CVUlMRF9FTlYiLCJQUk9EVUNUSU9OIiwiREVWRUxPUE1FTlQiLCJCSU5BTkNFIiwiVEVTVElORyIsIkxSQyIsIkJFVEEiLCJCVVRUT05fUE9TSVRJT04iLCJCT1RUT01fTEVGVCIsIlRPUF9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX1JJR0hUIiwicGF5bWVudFByb3ZpZGVycyQxIiwibGluZTEiLCJsaW5lMiIsImxpbmUzIiwic3VwcG9ydFBhZ2UiLCJtaW5PcmRlclZhbHVlIiwibWF4T3JkZXJWYWx1ZSIsInZhbGlkQ3VycmVuY2llcyIsInZhbGlkQ3J5cHRvQ3VycmVuY2llcyIsImluY2x1ZGVGZWVzIiwiZW5mb3JjZU1heCIsInNlbGwiLCJjb25maWd1cmF0aW9uIiwic3VwcG9ydGVkVmVyaWZpZXJMaXN0IiwicGF5bWVudFByb3ZpZGVycyIsImFwaSIsInRyYW5zbGF0aW9ucyIsImVuIiwiZW1iZWQiLCJjb250aW51ZSIsImFjdGlvblJlcXVpcmVkIiwicGVuZGluZ0FjdGlvbiIsImNvb2tpZXNSZXF1aXJlZCIsImVuYWJsZUNvb2tpZXMiLCJjbGlja0hlcmUiLCJkZSIsImphIiwia28iLCJ6aCIsInByb2RUb3J1c1VybCIsImxvY2FsU3RvcmFnZUtleVByZWZpeCIsInJ1bk9uTG9hZCIsImRvY3VtZW50IiwiaHRtbFRvRWxlbWVudCIsImh0bWwiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0cmltbWVkSHRtbCIsInRyaW0iLCJpbm5lckhUTUwiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsImhhbmRsZVN0cmVhbSIsImV2ZW50TmFtZSIsImhhbmRsZXJXcmFwcGVyIiwiZG9jdW1lbnRSZWFkeSIsInJlYWR5U3RhdGUiLCJoYW5kbGVyQXJncyIsImhhbmRsZUV2ZW50IiwibWVzc2FnZXMiLCJkaXNjb25uZWN0ZWQiLCJwZXJtYW5lbnRseURpc2Nvbm5lY3RlZCIsInNlbmRTaXRlTWV0YWRhdGEiLCJ1bnN1cHBvcnRlZFN5bmMiLCJpbnZhbGlkRHVwbGV4U3RyZWFtIiwiaW52YWxpZE9wdGlvbnMiLCJtYXhFdmVudExpc3RlbmVycyIsInNob3VsZFNlbmRNZXRhZGF0YSIsImludmFsaWRSZXF1ZXN0QXJncyIsImludmFsaWRSZXF1ZXN0TWV0aG9kIiwiaW52YWxpZFJlcXVlc3RQYXJhbXMiLCJpbnZhbGlkTG9nZ2VyT2JqZWN0IiwiaW52YWxpZExvZ2dlck1ldGhvZCIsImNvbm5lY3RlZCIsImNoYWluSWQiLCJ3YXJuaW5ncyIsImVuYWJsZURlcHJlY2F0aW9uIiwic2VuZERlcHJlY2F0aW9uIiwiY2xvc2UiLCJuZXR3b3JrQ2hhbmdlZCIsIm5vdGlmaWNhdGlvbiIsInB1YmxpY0NvbmZpZ1N0b3JlIiwibG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmciLCJyZW1vdGVMYWJlbCIsImVtaXR0ZXIiLCJ3YXJuaW5nTXNnIiwibGlzdGVuZXJDb3VudCIsImdldFByZW9wZW5JbnN0YW5jZUlkIiwiZ2V0VG9ydXNVcmwiLCJidWlsZEVudiIsImludGVncml0eSIsInRvcnVzVXJsIiwibG9nTGV2ZWwiLCJ2ZXJzaW9uIiwidmVyc2lvblVzZWQiLCJnZXRVc2VyTGFuZ3VhZ2UiLCJ1c2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInVzZXJMYW5ndWFnZXMiLCJFTUlUVEVEX05PVElGSUNBVElPTlMiLCJOT09QIiwiRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPVyIsIkZFQVRVUkVTX0NPTkZJUk1fV0lORE9XIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInVud3JhcFJlc3VsdCIsIlRvcnVzSW5wYWdlUHJvdmlkZXIiLCJjb25uZWN0aW9uU3RyZWFtIiwianNvblJwY1N0cmVhbU5hbWUiLCJlbmFibGUiLCJleHBlcmltZW50YWxNZXRob2RzIiwic2VuZCIsImR1cGxleCIsImlzVG9ydXMiLCJzZXRNYXhMaXN0ZW5lcnMiLCJfZGVmYXVsdFN0YXRlIiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJfaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiX2hhbmRsZUNoYWluQ2hhbmdlZCIsIl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQiLCJfaGFuZGxlQ29ubmVjdCIsIl9oYW5kbGVEaXNjb25uZWN0IiwiX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QiLCJfc2VuZFN5bmMiLCJfcnBjUmVxdWVzdCIsIl93YXJuT2ZEZXByZWNhdGlvbiIsIl9pbml0aWFsaXplU3RhdGUiLCJyZXF1ZXN0Iiwic2VuZEFzeW5jIiwibXV4IiwiX3B1YmxpY0NvbmZpZ1N0b3JlIiwic3RvcmFnZUtleSIsImlzQ29ubmVjdGVkIiwianNvblJwY0Nvbm5lY3Rpb24iLCJycGNFbmdpbmUiLCJldGhFcnJvcnMiLCJfcnBjRW5naW5lIiwicGF5bG9hZCIsIl9zZW50V2FybmluZ3MiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwib25jZSIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJhY2NvdW50cyIsImlzVW5sb2NrZWQiLCJpbml0aWFsaXplZCIsImlzSW50ZXJuYWwiLCJfcGF5bG9hZCIsInRyeVByZW9wZW5IYW5kbGUiLCJtZXRob2RPclBheWxvYWQiLCJjYWxsYmFja09yQXJncyIsImlzUmVjb3ZlcmFibGUiLCJlcnJvck1lc3NhZ2UiLCJpc1Blcm1hbmVudGx5RGlzY29ubmVjdGVkIiwiRXRoZXJldW1ScGNFcnJvciIsInN0cmVhbU5hbWUiLCJpc0V0aEFjY291bnRzIiwiZmluYWxBY2NvdW50cyIsImFjY291bnQiLCJoYXNFbWl0dGVkQ29ubmVjdGlvbiIsImhhc2hlcyIsImludGVybmFsSGFzaGVzIiwiYWxnb3JpdGhtcyIsImFsZ29yaXRobSIsIm1haW4iLCJmaW5hbE9wdGlvbnMiLCJkZWxpbWl0ZXIiLCJmdWxsIiwiZGVmYXVsdHMiLCJzcmkiLCJvdXRwdXQiLCJQb3B1cEhhbmRsZXIiLCJmZWF0dXJlcyIsImR1YWxTY3JlZW5MZWZ0Iiwic2NyZWVuTGVmdCIsInNjcmVlblgiLCJkdWFsU2NyZWVuVG9wIiwic2NyZWVuVG9wIiwic2NyZWVuWSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwic2NyZWVuIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJsZWZ0IiwiYWJzIiwidG9wIiwiaCIsInciLCJnZXRQb3B1cEZlYXR1cmVzIiwid2luZG93VGltZXIiLCJpQ2xvc2VkV2luZG93IiwiX3NldHVwVGltZXIiLCJzZXRJbnRlcnZhbCIsImNsb3NlZCIsImNsZWFySW50ZXJ2YWwiLCJvcGVuIiwiX3RoaXMkd2luZG93IiwiZm9jdXMiLCJyZWRpcmVjdCIsImxvY2F0aW9uUmVwbGFjZU9uUmVkaXJlY3QiLCJsb2NhdGlvbiIsImltZ0V4aXN0cyIsImltZyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJnZXRTaXRlTmFtZSIsInNpdGVOYW1lIiwicXVlcnlTZWxlY3RvciIsIm1ldGFUaXRsZSIsInRpdGxlIiwiaG9zdG5hbWUiLCJnZXRTaXRlSWNvbiIsImljb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmluZCIsIl9pY29uIiwiZW5naW5lIiwiZG9tYWluTWV0YWRhdGEiLCJnZXRTaXRlTWV0YWRhdGEiLCJvcmlnaW5hbEVycm9yIiwiX2V4Y2x1ZGVkIiwiZGVmYXVsdFZlcmlmaWVycyIsImlmcmFtZUludGVncml0eSIsIlVOU0FGRV9NRVRIT0RTIiwiaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUiLCJzdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJzdG9yYWdlQXZhaWxhYmxlIiwidG9ydXNJZnJhbWVIdG1sIiwiY2hlY2siLCJjcm9zc09yaWdpbiIsInJlbCIsInJlbExpc3QiLCJzdXBwb3J0cyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImJ1dHRvblBvc2l0aW9uIiwibW9kYWxaSW5kZXgiLCJpc0xvZ2dlZEluIiwiaXNJbml0aWFsaXplZCIsInRvcnVzV2lkZ2V0VmlzaWJpbGl0eSIsInJlcXVlc3RlZFZlcmlmaWVyIiwiY3VycmVudFZlcmlmaWVyIiwibm9kZURldGFpbE1hbmFnZXIiLCJ0b3J1c0pzIiwiYWxlcnRaSW5kZXgiLCJpc0lmcmFtZUZ1bGxTY3JlZW4iLCJkYXBwU3RvcmFnZUtleSIsImVuYWJsZUxvZ2dpbmciLCJlbmFibGVkVmVyaWZpZXJzIiwiaG9zdCIsIm5ldHdvcmtOYW1lIiwiYmxvY2tFeHBsb3JlciIsInRpY2tlciIsInRpY2tlck5hbWUiLCJsb2dpbkNvbmZpZyIsInNob3dUb3J1c0J1dHRvbiIsIndoaXRlTGFiZWwiLCJza2lwVEtleSIsInVzZUxvY2FsU3RvcmFnZSIsInVzZVdhbGxldENvbm5lY3QiLCJzZXREZWZhdWx0TGV2ZWwiLCJsb2NhbFN0b3JhZ2VLZXkiLCJzdG9yZWRLZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2VuZXJhdGVkS2V5IiwidG9ydXNJZnJhbWVVcmwiLCJwYXRobmFtZSIsImVuZHNXaXRoIiwidG9ydXNJZnJhbWUiLCJ0b3J1c0FsZXJ0Q29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0UHJvcGVydHkiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwic3R5bGVMaW5rIiwiZGVmYXVsdExhbmd1YWdlIiwiY3VzdG9tVHJhbnNsYXRpb25zIiwibGFuZ3VhZ2VUcmFuc2xhdGlvbnMiLCJlbWJlZFRyYW5zbGF0aW9ucyIsImhhbmRsZVNldHVwIiwiX3NldHVwV2ViMyIsImluaXRTdHJlYW0iLCJjb21tdW5pY2F0aW9uTXV4IiwiZ2V0U3RyZWFtIiwic3VjY2VzcyIsIl9kaXNwbGF5SWZyYW1lIiwiZmV0Y2hVcmwiLCJjYWNoZSIsInRleHQiLCJjYWxjdWxhdGVkSW50ZWdyaXR5IiwiY2xlYXJJbml0IiwibG9naW4iLCJsb2dpbl9oaW50IiwibG9naW5IaW50IiwiZXRoZXJldW0iLCJsb2dvdXQiLCJzdGF0dXNTdHJlYW0iLCJsb2dnZWRJbiIsImlzRWxlbWVudCIsImVsZW1lbnQiLCJFbGVtZW50IiwiSFRNTERvY3VtZW50IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0b3J1c0FsZXJ0IiwiaGlkZVRvcnVzQnV0dG9uIiwiX3NlbmRXaWRnZXRWaXNpYmlsaXR5U3RhdHVzIiwic2V0UHJvdmlkZXIiLCJyZXN0IiwicHJvdmlkZXJDaGFuZ2VTdHJlYW0iLCJwcmVvcGVuSW5zdGFuY2VJZCIsIl9oYW5kbGVXaW5kb3ciLCJvdmVycmlkZSIsInNob3dXYWxsZXQiLCJwYXRoIiwic2hvd1dhbGxldFN0cmVhbSIsImZpbmFsUGF0aCIsImluc3RhbmNlSWQiLCJmaW5hbFVybCIsInNlYXJjaFBhcmFtcyIsImFwcGVuZCIsImdldE5vZGVEZXRhaWxzIiwid2FsbGV0VmVyaWZpZXIiLCJvcGVubG9naW5WZXJpZmllciIsImV4aXN0aW5nVjFVc2VyIiwiZ2V0VXNlclR5cGVBbmRBZGRyZXNzIiwidjJVc2VyIiwibmV3VjJVc2VyIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mb0FjY2Vzc1N0cmVhbSIsInVzZXJJbmZvQWNjZXNzSGFuZGxlciIsImFwcHJvdmVkIiwicmVqZWN0ZWQiLCJuZXdSZXF1ZXN0IiwidXNlckluZm9TdHJlYW0iLCJoYW5kbGVyQ2h1bmsiLCJpbml0aWF0ZVRvcHVwIiwicHJvdmlkZXIiLCJpc1ZhbGlkIiwic2VsZWN0ZWRQcm92aWRlciIsInNlbGVjdGVkUGFyYW1zIiwiZmlhdFZhbHVlIiwicmVxdWVzdGVkT3JkZXJBbW91bnQiLCJwYXJzZUZsb2F0Iiwic2VsZWN0ZWRDdXJyZW5jeSIsInNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kiLCJ2YWxpZGF0ZVBheW1lbnRQcm92aWRlciIsInRvcHVwU3RyZWFtIiwibG9naW5QYXJhbXMiLCJ1c2VySW5mbyIsImxvZ2luUHJpdktleVN0cmVhbSIsIndhbGxldENvbm5lY3RTdHJlYW0iLCJ3aW5kb3dTdHJlYW0iLCJoYW5kbGVkV2luZG93IiwiX2NyZWF0ZVBvcHVwQmxvY2tBbGVydCIsImNsb3NlSGFuZGxlciIsInJlY2VpdmVkSWQiLCJfc2V0RW1iZWRXaGl0ZUxhYmVsIiwidGhlbWUiLCJpc0RhcmsiLCJjb2xvcnMiLCJjbGFzc0xpc3QiLCJ0b3J1c0JyYW5kMSIsInRvcnVzR3JheTIiLCJfZ2V0TG9nb1VybCIsIl90aGlzJHdoaXRlTGFiZWwiLCJfdGhpcyR3aGl0ZUxhYmVsJHRoZW0iLCJsb2dvVXJsIiwiX3RoaXMkd2hpdGVMYWJlbDIiLCJfdGhpcyR3aGl0ZUxhYmVsMyIsImxvZ29MaWdodCIsImxvZ29EYXJrIiwiaXNGdWxsIiwicmlnaHQiLCJib3R0b20iLCJtZXRhbWFza1N0cmVhbSIsImNvbnRlbnRXaW5kb3ciLCJjb21tdW5pY2F0aW9uU3RyZWFtIiwiaW5wYWdlUHJvdmlkZXIiLCJkZXRlY3RBY2NvdW50UmVxdWVzdFByb3RvdHlwZU1vZGlmaWVyIiwib3JpZ2luYWxNZXRob2QiLCJoYW5kbGVMb2dpbkNiIiwiX3Nob3dMb2dpblBvcHVwIiwiaXNMb2dpbkNhbGxiYWNrIiwicHJveGllZElucGFnZVByb3ZpZGVyIiwiZGVsZXRlUHJvcGVydHkiLCJzZXR1cE11bHRpcGxleCIsImNhbGxlZEZyb21FbWJlZCIsImxvZ2luSGFuZGxlciIsIm9hdXRoU3RyZWFtIiwic3VjY2Vzc0FsZXJ0IiwiYnRuQ29udGFpbmVyIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiZnVsZmlsbGVkIiwic3RlcCIsImFkb3B0IiwiX19nZW5lcmF0b3IiLCJmIiwiZyIsImxhYmVsIiwidHJ5cyIsIm9wcyIsInZlcmIiLCJvcCIsInBvcCIsImdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSIsIl9hIiwiRUMiLCJicm93c2VyQ3J5cHRvIiwiY3J5cHRvIiwibXNDcnlwdG8iLCJzdWJ0bGUiLCJ3ZWJraXRTdWJ0bGUiLCJub2RlQ3J5cHRvIiwiRUNfR1JPVVBfT1JERVIiLCJCdWZmZXIiLCJaRVJPMzIiLCJhbGxvYyIsImFzc2VydCIsImNvbmRpdGlvbiIsImlzVmFsaWRQcml2YXRlS2V5IiwiaXNCdWZmZXIiLCJpc1NjYWxhciIsImNvbXBhcmUiLCJyYW5kb21CeXRlcyIsInNpemUiLCJVaW50OEFycmF5IiwiZ2V0UmFuZG9tVmFsdWVzIiwic2hhNTEyIiwiY3JlYXRlSGFzaCIsImdldEFlcyIsImltcG9ydEtleSIsImNyeXB0b0tleSIsImVuY0FsZ29yaXRobSIsImNpcGhlciIsImNyZWF0ZUNpcGhlcml2IiwiZmlyc3RDaHVuayIsInNlY29uZENodW5rIiwiZmluYWwiLCJkZWNpcGhlciIsImNyZWF0ZURlY2lwaGVyaXYiLCJhZXNDYmNFbmNyeXB0IiwiYWVzQ2JjRGVjcnlwdCIsImRlcml2ZSIsInByaXZhdGVLZXlBIiwicHVibGljS2V5QiIsImtleUEiLCJrZXlCIiwiUHgiLCJ0b0FycmF5Iiwib3B0cyIsImVuY3J5cHRpb25LZXkiLCJobWFjIiwiY3JlYXRlSG1hYyIsImIxIiwiYjIiLCJlcXVhbENvbnN0VGltZSIsImhtYWNTaGEyNTZWZXJpZnkiLCJtYWNHb29kIiwicGFkX3N0cmluZ18xIiwiaW5wdXQiLCJlbmNvZGluZyIsImZyb21CYXNlNjQiLCJ0b0Jhc2U2NCIsImJhc2U2NHVybCIsImJhc2U2NCIsImRlY29kZSIsInRvQnVmZmVyIiwic3RyaW5nTGVuZ3RoIiwiZGlmZiIsInBvc2l0aW9uIiwicGFkTGVuZ3RoIiwicGFkZGVkU3RyaW5nTGVuZ3RoIiwiYnVmZmVyIiwibW9kdWxlIiwib2JqZWN0VG9TdHJpbmciLCJpc0Jvb2xlYW4iLCJpc051bGwiLCJpc051bGxPclVuZGVmaW5lZCIsImlzTnVtYmVyIiwiaXNTdHJpbmciLCJpc1N5bWJvbCIsImlzVW5kZWZpbmVkIiwiaXNSZWdFeHAiLCJyZSIsImlzT2JqZWN0IiwiaXNEYXRlIiwiZCIsImlzRXJyb3IiLCJpc0Z1bmN0aW9uIiwiaXNQcmltaXRpdmUiLCJlb3MiLCJ3cyIsIl93cml0YWJsZVN0YXRlIiwicnMiLCJfcmVhZGFibGVTdGF0ZSIsImNhbmNlbGxlZCIsIm9ubGVnYWN5ZmluaXNoIiwib25maW5pc2giLCJvbmVuZCIsIm9uZXhpdCIsImV4aXRDb2RlIiwib25jbG9zZSIsInByb2Nlc3MiLCJuZXh0VGljayIsIm9uY2xvc2VuZXh0dGljayIsImVuZGVkIiwiZGVzdHJveWVkIiwib25yZXF1ZXN0Iiwic2V0SGVhZGVyIiwiYWJvcnQiLCJpc1JlcXVlc3QiLCJzdGRpbyIsImlzQ2hpbGRQcm9jZXNzIiwiZXF1YWwiLCJSZWdFeHAiLCJmbGFncyIsImlzU3RyZWFtIiwidHJhbnNmb3JtIiwiX3RyYW5zZm9ybSIsIkhBU0hfVU5ERUZJTkVEIiwiTUFYX1NBRkVfSU5URUdFUiIsImFyZ3NUYWciLCJmdW5jVGFnIiwib2JqZWN0VGFnIiwicmVJc0hvc3RDdG9yIiwicmVJc1VpbnQiLCJ0eXBlZEFycmF5VGFncyIsImZyZWVHbG9iYWwiLCJmcmVlU2VsZiIsInJvb3QiLCJmcmVlRXhwb3J0cyIsIm5vZGVUeXBlIiwiZnJlZU1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJmcmVlUHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJyZXF1aXJlIiwiYmluZGluZyIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJmdW5jIiwiYXJyYXlQcm90byIsImZ1bmNQcm90byIsIm9iamVjdFByb3RvIiwiY29yZUpzRGF0YSIsImZ1bmNUb1N0cmluZyIsIm1hc2tTcmNLZXkiLCJ1aWQiLCJleGVjIiwiSUVfUFJPVE8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsIm9iamVjdEN0b3JTdHJpbmciLCJyZUlzTmF0aXZlIiwiYWxsb2NVbnNhZmUiLCJnZXRQcm90b3R5cGUiLCJvdmVyQXJnIiwib2JqZWN0Q3JlYXRlIiwic3BsaWNlIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImdldE5hdGl2ZSIsIm5hdGl2ZUlzQnVmZmVyIiwibmF0aXZlTWF4IiwibWF4IiwibmF0aXZlTm93IiwibmF0aXZlQ3JlYXRlIiwiYmFzZUNyZWF0ZSIsInByb3RvIiwiSGFzaCIsImVudHJpZXMiLCJjbGVhciIsImVudHJ5IiwiTGlzdENhY2hlIiwiTWFwQ2FjaGUiLCJTdGFjayIsIl9fZGF0YV9fIiwiYXJyYXlMaWtlS2V5cyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0FyZ3VtZW50cyIsImlzQnVmZiIsImlzVHlwZSIsInNraXBJbmRleGVzIiwiaXRlcmF0ZWUiLCJiYXNlVGltZXMiLCJTdHJpbmciLCJpc0luZGV4IiwiYXNzaWduTWVyZ2VWYWx1ZSIsImVxIiwiYmFzZUFzc2lnblZhbHVlIiwiYXNzaWduVmFsdWUiLCJvYmpWYWx1ZSIsImFzc29jSW5kZXhPZiIsImFycmF5IiwiZ2V0TWFwRGF0YSIsInBhaXJzIiwiTEFSR0VfQVJSQVlfU0laRSIsImJhc2VGb3IiLCJmcm9tUmlnaHQiLCJrZXlzRnVuYyIsIml0ZXJhYmxlIiwiY3JlYXRlQmFzZUZvciIsImJhc2VHZXRUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwiZ2V0UmF3VGFnIiwiYmFzZUlzQXJndW1lbnRzIiwiaXNPYmplY3RMaWtlIiwiYmFzZUlzTmF0aXZlIiwiaXNNYXNrZWQiLCJ0b1NvdXJjZSIsImJhc2VLZXlzSW4iLCJuYXRpdmVLZXlzSW4iLCJpc1Byb3RvIiwiaXNQcm90b3R5cGUiLCJiYXNlTWVyZ2UiLCJzcmNJbmRleCIsImN1c3RvbWl6ZXIiLCJzcmNWYWx1ZSIsIm1lcmdlRnVuYyIsInNhZmVHZXQiLCJzdGFja2VkIiwibmV3VmFsdWUiLCJpc0NvbW1vbiIsImlzVHlwZWQiLCJpc0FycmF5TGlrZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiaXNEZWVwIiwiY2xvbmVCdWZmZXIiLCJ0eXBlZEFycmF5IiwiYXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiY2xvbmVBcnJheUJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJjbG9uZVR5cGVkQXJyYXkiLCJjb3B5QXJyYXkiLCJDdG9yIiwiaXNQbGFpbk9iamVjdCIsImlzTmV3IiwiY29weU9iamVjdCIsImtleXNJbiIsInRvUGxhaW5PYmplY3QiLCJpbml0Q2xvbmVPYmplY3QiLCJiYXNlTWVyZ2VEZWVwIiwiYmFzZVJlc3QiLCJzdGFydCIsInNldFRvU3RyaW5nIiwib3RoZXJBcmdzIiwib3ZlclJlc3QiLCJpZGVudGl0eSIsImlzS2V5YWJsZSIsImdldFZhbHVlIiwiY291bnQiLCJsYXN0Q2FsbGVkIiwic3RhbXAiLCJyZW1haW5pbmciLCJzaG9ydE91dCIsInN0cmluZyIsImNvbnN0YW50Iiwib3RoZXIiLCJpc0xlbmd0aCIsImJhc2VVbmFyeSIsIm1lcmdlIiwiYXNzaWduZXIiLCJzb3VyY2VzIiwiZ3VhcmQiLCJpc0l0ZXJhdGVlQ2FsbCIsImNyZWF0ZUFzc2lnbmVyIiwiZGVmaW5pdGlvbiIsInVuZGVmaW5lZFR5cGUiLCJpc0lFIiwidXNlckFnZW50IiwibG9nTWV0aG9kcyIsImJpbmRNZXRob2QiLCJtZXRob2ROYW1lIiwidHJhY2VGb3JJRSIsInRyYWNlIiwicmVhbE1ldGhvZCIsInJlcGxhY2VMb2dnaW5nTWV0aG9kcyIsImxldmVsIiwibG9nZ2VyTmFtZSIsIm1ldGhvZEZhY3RvcnkiLCJlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzIiwiZGVmYXVsdE1ldGhvZEZhY3RvcnkiLCJMb2dnZXIiLCJkZWZhdWx0TGV2ZWwiLCJmYWN0b3J5IiwiY3VycmVudExldmVsIiwicGVyc2lzdExldmVsSWZQb3NzaWJsZSIsImxldmVsTnVtIiwibGV2ZWxOYW1lIiwiaWdub3JlIiwiY29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0UGVyc2lzdGVkTGV2ZWwiLCJzdG9yZWRMZXZlbCIsImNsZWFyUGVyc2lzdGVkTGV2ZWwiLCJnZXRMZXZlbCIsInBlcnNpc3QiLCJTSUxFTlQiLCJyZXNldExldmVsIiwiVFJBQ0UiLCJpbml0aWFsTGV2ZWwiLCJkZWZhdWx0TG9nZ2VyIiwiX2xvZ2dlcnNCeU5hbWUiLCJnZXRMb2dnZXIiLCJsb2dnZXIiLCJfbG9nIiwibm9Db25mbGljdCIsImdldExvZ2dlcnMiLCJ3cmFwcHkiLCJjYWxsZWQiLCJvbmNlU3RyaWN0Iiwib25jZUVycm9yIiwic3RyaWN0IiwiYXJnMSIsImFyZzIiLCJhcmczIiwiZnMiLCJhbmNpZW50IiwiaXNGbiIsImRlc3Ryb3llciIsInJlYWRpbmciLCJ3cml0aW5nIiwiUmVhZFN0cmVhbSIsIldyaXRlU3RyZWFtIiwiaXNGUyIsInRvIiwic3RyZWFtcyIsImRlc3Ryb3lzIiwicG5hIiwib2JqZWN0S2V5cyIsInV0aWwiLCJpbmhlcml0cyIsIlJlYWRhYmxlIiwiV3JpdGFibGUiLCJhbGxvd0hhbGZPcGVuIiwib25FbmROVCIsImhpZ2hXYXRlck1hcmsiLCJQYXNzVGhyb3VnaCIsIlRyYW5zZm9ybSIsIlJlYWRhYmxlU3RhdGUiLCJFRWxpc3RlbmVyQ291bnQiLCJTdHJlYW0iLCJPdXJVaW50OEFycmF5IiwiZGVidWdVdGlsIiwiZGVidWdsb2ciLCJCdWZmZXJMaXN0IiwiZGVzdHJveUltcGwiLCJTdHJpbmdEZWNvZGVyIiwia1Byb3h5RXZlbnRzIiwiaXNEdXBsZXgiLCJyZWFkYWJsZU9iamVjdE1vZGUiLCJod20iLCJyZWFkYWJsZUh3bSIsInJlYWRhYmxlSGlnaFdhdGVyTWFyayIsImRlZmF1bHRId20iLCJwaXBlcyIsInBpcGVzQ291bnQiLCJmbG93aW5nIiwiZW5kRW1pdHRlZCIsInN5bmMiLCJuZWVkUmVhZGFibGUiLCJlbWl0dGVkUmVhZGFibGUiLCJyZWFkYWJsZUxpc3RlbmluZyIsInJlc3VtZVNjaGVkdWxlZCIsImRlZmF1bHRFbmNvZGluZyIsImF3YWl0RHJhaW4iLCJyZWFkaW5nTW9yZSIsImRlY29kZXIiLCJyZWFkYWJsZUFkZENodW5rIiwiYWRkVG9Gcm9udCIsInNraXBDaHVua0NoZWNrIiwiZW1pdFJlYWRhYmxlIiwib25Fb2ZDaHVuayIsIl9pc1VpbnQ4QXJyYXkiLCJjaHVua0ludmFsaWQiLCJfdWludDhBcnJheVRvQnVmZmVyIiwiYWRkQ2h1bmsiLCJtYXliZVJlYWRNb3JlIiwibmVlZE1vcmVEYXRhIiwidW5zaGlmdCIsIl91bmRlc3Ryb3kiLCJ1bmRlc3Ryb3kiLCJpc1BhdXNlZCIsInNldEVuY29kaW5nIiwiZW5jIiwiTUFYX0hXTSIsImhvd011Y2hUb1JlYWQiLCJjb21wdXRlTmV3SGlnaFdhdGVyTWFyayIsImVtaXRSZWFkYWJsZV8iLCJmbG93IiwibWF5YmVSZWFkTW9yZV8iLCJuUmVhZGluZ05leHRUaWNrIiwicmVzdW1lXyIsImZyb21MaXN0IiwicmV0Iiwic2hpZnQiLCJsaXN0IiwiaGFzU3RyaW5ncyIsImMiLCJuYiIsInRhaWwiLCJjb3B5RnJvbUJ1ZmZlclN0cmluZyIsImJ1ZiIsImNvcHlGcm9tQnVmZmVyIiwiZnJvbUxpc3RQYXJ0aWFsIiwiZW5kUmVhZGFibGUiLCJlbmRSZWFkYWJsZU5UIiwieHMiLCJsIiwicGFyc2VJbnQiLCJuT3JpZyIsImRvUmVhZCIsInBpcGVPcHRzIiwiZW5kRm4iLCJzdGRvdXQiLCJzdGRlcnIiLCJ1bnBpcGUiLCJvbnVucGlwZSIsInVucGlwZUluZm8iLCJoYXNVbnBpcGVkIiwib25kcmFpbiIsIm9uZGF0YSIsImNsZWFuZWRVcCIsIm5lZWREcmFpbiIsImNsZWFudXAiLCJwaXBlT25EcmFpbiIsImluY3JlYXNlZEF3YWl0RHJhaW4iLCJwYXVzZSIsImRlc3RzIiwiZXYiLCJ3cmFwIiwicGF1c2VkIiwiX2Zyb21MaXN0IiwiYWZ0ZXJUcmFuc2Zvcm0iLCJ0cyIsIl90cmFuc2Zvcm1TdGF0ZSIsInRyYW5zZm9ybWluZyIsIndyaXRlY2IiLCJ3cml0ZWNodW5rIiwibmVlZFRyYW5zZm9ybSIsIndyaXRlZW5jb2RpbmciLCJmbHVzaCIsIl9mbHVzaCIsInByZWZpbmlzaCIsIl90aGlzMiIsImVycjIiLCJDb3JrZWRSZXF1ZXN0IiwiZmluaXNoIiwiY29ya1JlcSIsInBlbmRpbmdjYiIsImNvcmtlZFJlcXVlc3RzRnJlZSIsIm9uQ29ya2VkRmluaXNoIiwiYXN5bmNXcml0ZSIsImJyb3dzZXIiLCJzZXRJbW1lZGlhdGUiLCJXcml0YWJsZVN0YXRlIiwiaW50ZXJuYWxVdGlsIiwiZGVwcmVjYXRlIiwibm9wIiwid3JpdGFibGVPYmplY3RNb2RlIiwid3JpdGFibGVId20iLCJ3cml0YWJsZUhpZ2hXYXRlck1hcmsiLCJmaW5hbENhbGxlZCIsImVuZGluZyIsImZpbmlzaGVkIiwibm9EZWNvZGUiLCJkZWNvZGVTdHJpbmdzIiwiY29ya2VkIiwiYnVmZmVyUHJvY2Vzc2luZyIsIm9ud3JpdGUiLCJ3cml0ZWxlbiIsIm9ud3JpdGVTdGF0ZVVwZGF0ZSIsImZpbmlzaE1heWJlIiwiZXJyb3JFbWl0dGVkIiwib253cml0ZUVycm9yIiwibmVlZEZpbmlzaCIsImJ1ZmZlcmVkUmVxdWVzdCIsImNsZWFyQnVmZmVyIiwiYWZ0ZXJXcml0ZSIsImxhc3RCdWZmZXJlZFJlcXVlc3QiLCJwcmVmaW5pc2hlZCIsImJ1ZmZlcmVkUmVxdWVzdENvdW50IiwicmVhbEhhc0luc3RhbmNlIiwid3JpdGV2IiwiX3dyaXRldiIsIl9maW5hbCIsImRvV3JpdGUiLCJvbndyaXRlRHJhaW4iLCJob2xkZXIiLCJhbGxCdWZmZXJzIiwiaXNCdWYiLCJjYWxsRmluYWwiLCJuZWVkIiwiZ2V0QnVmZmVyIiwiY3VycmVudCIsIm91dCIsImhhc0luc3RhbmNlIiwid3JpdGVBZnRlckVuZCIsInZhbGlkIiwidmFsaWRDaHVuayIsIm5ld0NodW5rIiwiZGVjb2RlQ2h1bmsiLCJsYXN0Iiwid3JpdGVPckJ1ZmZlciIsInNldERlZmF1bHRFbmNvZGluZyIsInRvTG93ZXJDYXNlIiwiZW5kV3JpdGFibGUiLCJjb3B5QnVmZmVyIiwib2Zmc2V0IiwiaW5zcGVjdCIsImN1c3RvbSIsImVtaXRFcnJvck5UIiwicmVhZGFibGVEZXN0cm95ZWQiLCJ3cml0YWJsZURlc3Ryb3llZCIsImlzRW5jb2RpbmciLCJuZW5jIiwicmV0cmllZCIsIl9ub3JtYWxpemVFbmNvZGluZyIsIm5vcm1hbGl6ZUVuY29kaW5nIiwidXRmMTZUZXh0IiwidXRmMTZFbmQiLCJmaWxsTGFzdCIsInV0ZjhGaWxsTGFzdCIsImJhc2U2NFRleHQiLCJiYXNlNjRFbmQiLCJzaW1wbGVXcml0ZSIsInNpbXBsZUVuZCIsImxhc3ROZWVkIiwibGFzdFRvdGFsIiwibGFzdENoYXIiLCJ1dGY4Q2hlY2tCeXRlIiwiYnl0ZSIsInV0ZjhDaGVja0V4dHJhQnl0ZXMiLCJjaGFyQ29kZUF0IiwidG90YWwiLCJ1dGY4Q2hlY2tJbmNvbXBsZXRlIiwieHRlbmQiLCJEZXN0cm95YWJsZVRyYW5zZm9ybSIsIl9kZXN0cm95ZWQiLCJ0aHJvdWdoMiIsInQyIiwiY3RvciIsIlRocm91Z2gyIiwid3JhcHBlciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJPcCIsImhhc093biIsIiRTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJkZWZpbmUiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJDb250ZXh0IiwiX2ludm9rZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsIkNvbnRpbnVlU2VudGluZWwiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwicmVjb3JkIiwidHJ5Q2F0Y2giLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJfX2F3YWl0IiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsIm1hcmsiLCJhd3JhcCIsInNraXBUZW1wUmVzZXQiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJ1bnRpbWUiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsImdsb2JhbFRoaXMiXSwic291cmNlUm9vdCI6IiJ9