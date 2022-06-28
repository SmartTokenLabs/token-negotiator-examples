/*! For license information please see 96.bundle.js.LICENSE.txt */
(self.webpackChunktoken_overlay_website = self.webpackChunktoken_overlay_website || []).push([ [ 96 ], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFHNUZzbEMsRUFBT3ZxQyxVQUFVOFUsR0FBU3kxQixFQUFPdnFDLFFBQVE0QixjQUFhLEdBQU0yb0MsRUFBT3ZxQyxRQUFpQixVQUFJdXFDLEVBQU92cUM7OztJQ1IvRixJQUFJeXNELElBQVUsRUFBUSxNQUFSO0lBQ2RsaUIsRUFBT3ZxQyxVQUFVeXNEO0lBR2pCO01BQ0VDLHFCQUFxQkQ7TUFDckIsT0FBT0U7TUFDbUIsbUJBQWZDLGFBQ1RBLFdBQVdGLHFCQUFxQkQsSUFFaENqMUMsU0FBUyxLQUFLLHlCQUFkQSxDQUF3Q2kxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvQ29tcG9zZWRTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L01lcmdlZFN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvT2JzZXJ2YWJsZVN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvYXNTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2ZldGNoLW5vZGUtZGV0YWlscy9kaXN0L2ZldGNoTm9kZURldGFpbHMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2h0dHAtaGVscGVycy9kaXN0L2h0dHBIZWxwZXJzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy9vcGVubG9naW4tdXRpbHMvZGlzdC9vcGVubG9naW5VdGlscy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b3J1c2xhYnMvb3BlbmxvZ2luLWpycGMvZGlzdC9vcGVubG9naW5KcnBjLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy90b3J1cy5qcy9kaXN0L3RvcnVzVXRpbHMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL3RvcnVzLWVtYmVkL2Rpc3QvdG9ydXMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9rZW5zY3JpcHQvdG9rZW4tbmVnb3RpYXRvci9kaXN0L3dhbGxldC9Ub3J1c1Byb3ZpZGVyLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2VjY3J5cHRvL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9kaXN0L2Jhc2U2NHVybC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2Rpc3QvcGFkLXN0cmluZy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jb3JlLXV0aWwtaXMvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2VuZC1vZi1zdHJlYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvaXMtc3RyZWFtL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVyZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2xvZ2xldmVsL2xpYi9sb2dsZXZlbC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvb25jZS9vbmNlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzLW5leHRpY2stYXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcHVtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fZHVwbGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3Bhc3N0aHJvdWdoLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV93cml0YWJsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvc3RyZWFtLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vcmVhZGFibGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3N0cmluZ19kZWNvZGVyL2xpYi9zdHJpbmdfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvdGhyb3VnaDIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3dyYXBweS93cmFwcHkuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbXBvc2VkU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBPYnNlcnZhYmxlU3RvcmVfMSA9IHJlcXVpcmUoXCIuL09ic2VydmFibGVTdG9yZVwiKTtcbmNsYXNzIENvbXBvc2VkU3RvcmUgZXh0ZW5kcyBPYnNlcnZhYmxlU3RvcmVfMS5PYnNlcnZhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuKSB7XG4gICAgICAgIC8vIFR5cGVjYXN0OiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICBzdXBlcih7fSk7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBjaGlsZHJlblxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5fY2hpbGRyZW5bY2hpbGRLZXldO1xuICAgICAgICAgICAgdGhpcy5fYWRkQ2hpbGQoY2hpbGRLZXksIGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGlsZChjaGlsZEtleSwgY2hpbGQpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlRnJvbUNoaWxkID0gKGNoaWxkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgc3RhdGVbY2hpbGRLZXldID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUoc3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBjaGlsZC5zdWJzY3JpYmUodXBkYXRlRnJvbUNoaWxkKTtcbiAgICAgICAgdXBkYXRlRnJvbUNoaWxkKGNoaWxkLmdldFN0YXRlKCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tcG9zZWRTdG9yZSA9IENvbXBvc2VkU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb3NlZFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZXJnZWRTdG9yZSA9IHZvaWQgMDtcbmNvbnN0IE9ic2VydmFibGVTdG9yZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpO1xuY2xhc3MgTWVyZ2VkU3RvcmUgZXh0ZW5kcyBPYnNlcnZhYmxlU3RvcmVfMS5PYnNlcnZhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuID0gW10pIHtcbiAgICAgICAgLy8gVHlwZWNhc3Q6IFByZXNlcnZlIGV4aXN0aW5nIGJlaGF2aW9yXG4gICAgICAgIHN1cGVyKHt9KTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGNoaWxkcmVuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLl9hZGRDaGlsZChjaGlsZCkpO1xuICAgICAgICB0aGlzLl91cGRhdGVXaG9sZVN0YXRlKCk7XG4gICAgfVxuICAgIF9hZGRDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlV2hvbGVTdGF0ZSgpKTtcbiAgICB9XG4gICAgX3VwZGF0ZVdob2xlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkU3RhdGVzID0gdGhpcy5fY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZ2V0U3RhdGUoKSk7XG4gICAgICAgIC8vIGFwcGx5IHNoYWxsb3cgbWVyZ2Ugb3ZlciBzdGF0ZXNcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5jaGlsZFN0YXRlcyk7XG4gICAgICAgIHRoaXMucHV0U3RhdGUoc3RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVyZ2VkU3RvcmUgPSBNZXJnZWRTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lcmdlZFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PYnNlcnZhYmxlU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBzYWZlX2V2ZW50X2VtaXR0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1ldGFtYXNrL3NhZmUtZXZlbnQtZW1pdHRlclwiKSk7XG5jbGFzcyBPYnNlcnZhYmxlU3RvcmUgZXh0ZW5kcyBzYWZlX2V2ZW50X2VtaXR0ZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0U3RhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKGluaXRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBpbml0U3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUeXBlY2FzdC9kZWZhdWx0IHN0YXRlOiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3cmFwcGVyIGFyb3VuZCBpbnRlcm5hbCBnZXRTdGF0ZVxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U3RhdGUoKTtcbiAgICB9XG4gICAgLy8gd3JhcHBlciBhcm91bmQgaW50ZXJuYWwgcHV0U3RhdGVcbiAgICBwdXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLl9wdXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgbmV3U3RhdGUpO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgLy8gaWYgbm9uLW51bGwgb2JqZWN0LCBtZXJnZVxuICAgICAgICBpZiAocGFydGlhbFN0YXRlICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHBhcnRpYWxTdGF0ZSkpO1xuICAgICAgICAgICAgLy8gaWYgbm90IG9iamVjdCwgdXNlIG5ldyB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXRTdGF0ZShwYXJ0aWFsU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAgc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5vbigndXBkYXRlJywgaGFuZGxlcik7XG4gICAgfVxuICAgIC8vIHVuc3Vic2NyaWJlIHRvIGNoYW5nZXNcbiAgICB1bnN1YnNjcmliZShoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3VwZGF0ZScsIGhhbmRsZXIpO1xuICAgIH1cbiAgICAvL1xuICAgIC8vIHByaXZhdGVcbiAgICAvL1xuICAgIC8vIHJlYWQgZnJvbSBwZXJzaXN0ZW5jZVxuICAgIF9nZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvLyB3cml0ZSB0byBwZXJzaXN0ZW5jZVxuICAgIF9wdXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbn1cbmV4cG9ydHMuT2JzZXJ2YWJsZVN0b3JlID0gT2JzZXJ2YWJsZVN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZVN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZUFzU3RyZWFtID0gdm9pZCAwO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY2xhc3MgT2JzZXJ2YWJsZVN0b3JlU3RyZWFtIGV4dGVuZHMgc3RyZWFtXzEuRHVwbGV4IHtcbiAgICBjb25zdHJ1Y3RvcihvYnNTdG9yZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICAvLyBwYXNzIHZhbHVlcywgbm90IHNlcmlhbGl6YXRpb25zXG4gICAgICAgICAgICBvYmplY3RNb2RlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZG9udCBidWZmZXIgb3V0Z29pbmcgdXBkYXRlc1xuICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAvLyBzYXZlIGhhbmRsZXIgc28gd2UgY2FuIHVuc3Vic2NyaWJlIGxhdGVyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IChzdGF0ZSkgPT4gdGhpcy5wdXNoKHN0YXRlKTtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9ic1N0b3JlIGNoYW5nZXNcbiAgICAgICAgdGhpcy5vYnNTdG9yZSA9IG9ic1N0b3JlO1xuICAgICAgICB0aGlzLm9ic1N0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyBlbWl0IGN1cnJlbnQgc3RhdGUgb24gbmV3IGRlc3RpbmF0aW9uXG4gICAgcGlwZShkZXN0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLnBpcGUoZGVzdCwgb3B0aW9ucyk7XG4gICAgICAgIGRlc3Qud3JpdGUodGhpcy5vYnNTdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gd3JpdGUgZnJvbSBpbmNvbWluZyBzdHJlYW0gdG8gc3RhdGVcbiAgICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vYnNTdG9yZS5wdXRTdGF0ZShjaHVuayk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIC8vIG5vb3AgLSBvdXRnb2luZyBzdHJlYW0gaXMgYXNraW5nIHVzIGlmIHdlIGhhdmUgZGF0YSB3ZSBhcmVudCBnaXZpbmcgaXRcbiAgICBfcmVhZChfc2l6ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyB1bnN1YnNjcmliZSBmcm9tIGV2ZW50IGVtaXR0ZXJcbiAgICBfZGVzdHJveShlcnIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2JzU3RvcmUudW5zdWJzY3JpYmUodGhpcy5oYW5kbGVyKTtcbiAgICAgICAgc3VwZXIuX2Rlc3Ryb3koZXJyLCBjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RvcmVBc1N0cmVhbShvYnNTdG9yZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVN0b3JlU3RyZWFtKG9ic1N0b3JlKTtcbn1cbmV4cG9ydHMuc3RvcmVBc1N0cmVhbSA9IHN0b3JlQXNTdHJlYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc1N0cmVhbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzU3RyZWFtXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Db21wb3NlZFN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9NZXJnZWRTdG9yZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90cmFuc2Zvcm1cIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlVHJhbnNmb3JtU3RyZWFtID0gdm9pZCAwO1xuY29uc3QgdGhyb3VnaDJfMSA9IHJlcXVpcmUoXCJ0aHJvdWdoMlwiKTtcbmZ1bmN0aW9uIHN0b3JlVHJhbnNmb3JtU3RyZWFtKHN5bmNUcmFuc2Zvcm1Gbikge1xuICAgIHJldHVybiB0aHJvdWdoMl8xLm9iaigoc3RhdGUsIF9lbmNvZGluZywgY2IpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3luY1RyYW5zZm9ybUZuKHN0YXRlKTtcbiAgICAgICAgICAgIGNiKG51bGwsIG5ld1N0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc3RvcmVUcmFuc2Zvcm1TdHJlYW0gPSBzdG9yZVRyYW5zZm9ybVN0cmVhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybS5qcy5tYXAiLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBXZWIzRXRoQ29udHJhY3QgZnJvbSAnd2ViMy1ldGgtY29udHJhY3QnO1xuaW1wb3J0IHsga2VjY2FrMjU2LCB0b0hleCB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuXG5jb25zdCBFVEhFUkVVTV9ORVRXT1JLID0ge1xuICBST1BTVEVOOiBcInJvcHN0ZW5cIixcbiAgTUFJTk5FVDogXCJtYWlubmV0XCIsXG4gIFBPTFlHT046IFwicG9seWdvbi1tYWlubmV0XCJcbn07XG5jb25zdCBhYmkgPSBbe1xuICBpbnB1dHM6IFt7XG4gICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxuICAgIG5hbWU6IFwiX3ZlcmlmaWVyXCIsXG4gICAgdHlwZTogXCJzdHJpbmdcIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcImJ5dGVzMzJcIixcbiAgICBuYW1lOiBcImhhc2hlZFZlcmlmaWVySWRcIixcbiAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICB9XSxcbiAgbmFtZTogXCJnZXROb2RlU2V0XCIsXG4gIG91dHB1dHM6IFt7XG4gICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICBuYW1lOiBcImN1cnJlbnRFcG9jaFwiLFxuICAgIHR5cGU6IFwidWludDI1NlwiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwic3RyaW5nW11cIixcbiAgICBuYW1lOiBcInRvcnVzTm9kZUVuZHBvaW50c1wiLFxuICAgIHR5cGU6IFwic3RyaW5nW11cIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZbXVwiLFxuICAgIG5hbWU6IFwidG9ydXNOb2RlUHViWFwiLFxuICAgIHR5cGU6IFwidWludDI1NltdXCJcbiAgfSwge1xuICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2W11cIixcbiAgICBuYW1lOiBcInRvcnVzTm9kZVB1YllcIixcbiAgICB0eXBlOiBcInVpbnQyNTZbXVwiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NltdXCIsXG4gICAgbmFtZTogXCJ0b3J1c0luZGV4ZXNcIixcbiAgICB0eXBlOiBcInVpbnQyNTZbXVwiXG4gIH1dLFxuICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICB0eXBlOiBcImZ1bmN0aW9uXCJcbn1dO1xuXG5jbGFzcyBOb2RlRGV0YWlsTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCB7XG4gICAgICBuZXR3b3JrID0gRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVULFxuICAgICAgcHJveHlBZGRyZXNzID0gXCIweGYyMDMzNmUxNkI1MTgyNjM3ZjA5ODIxYzI3QkRlMjliMEFGY2ZlODBcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2N1cnJlbnRFcG9jaFwiLCBcIjE5XCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RvcnVzTm9kZUVuZHBvaW50c1wiLCBbXCJodHRwczovL3RvcnVzLTE5LnRvcnVzbm9kZS5jb20vanJwY1wiLCBcImh0dHBzOi8vdG9ydXMtbm9kZS5lbnMuZG9tYWlucy9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy1ub2RlLm1hdGljLm5ldHdvcmsvanJwY1wiLCBcImh0dHBzOi8vdG9ydXMuemlsbGlxYS5uZXR3b3JrL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW1haW5uZXQuY29zbW9zLm5ldHdvcmsvanJwY1wiLCBcImh0dHBzOi8vdG9ydXMyLmV0aGVyc2Nhbi5jb20vanJwY1wiLCBcImh0dHBzOi8vdG9ydXMtbm9kZS12Mi5za2FsZWxhYnMuY29tL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW5vZGUuYmluYW5jZXguZGV2L2pycGNcIiwgXCJodHRwczovL3RvcnVzbm9kZS5vbnQuaW8vanJwY1wiXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdG9ydXNOb2RlUHViXCIsIFt7XG4gICAgICBYOiBcImJiZTgzYzY0MTc3YzM3NzU1NTBlNmJhNmFjMmJjMDU5ZjY4NDdkNjQ0YzllNDg5NGU0MmM2MGQ3OTc0ZDhjMmJcIixcbiAgICAgIFk6IFwiODJiNDlhN2NhZjcwZGVmMzhjZGFkMjc0MGFmNDVjMWU0Zjk2OTY1MDEwNWM1MDE5YTI5YmIxOGIyMWE5YWNiNVwiXG4gICAgfSwge1xuICAgICAgWDogXCJjMjA4Y2FjNGVmOWE0N2QzODYwOTdhOWM5MTViMjhlOWNiODkyMTNhYmVlOGQyNmExNzE5OGVlMjYxMjAxYjBkXCIsXG4gICAgICBZOiBcImM3ZGIyZmU0NjMxMTA5ZjQwODMzZGU5ZGM3OGQwN2UzNTcwNjU0OWVlNDhmYTU1N2IzM2U0ZTc1ZTEwNDc4NzNcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiY2ExNzY2YmI0MjZkNGNhNTU4MjgxOGEwYzU0MzlkNTYwZWE2NGY1YmFhMDYwNzkzYWIyOWRkM2QwY2VhY2ZlXCIsXG4gICAgICBZOiBcImQ0NmMxZDA4YzQwZTEzMDZlMWJjYTMyOGMyMjg3YjgyNjgxNjZiMTFhMWJhNGI4NDQyZWEyYWQwYzVlMzIxNTJcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiYzM5MzRkZDJmNmY0YjNkMmUxZTM5OGNjNTAxZTE0M2MxZTFhMzgxYjUyZmViNmQxNTI1YWYzNGQxNjI1Mzc2OFwiLFxuICAgICAgWTogXCI3MWY1MTQxYTUwMzU3OTkwOTlmNWVhM2UyNDFlNjY5NDZiYzU1ZGM4NTdhYzNiZDdkNmZjZGI4ZGNkM2VlZWVmXCJcbiAgICB9LCB7XG4gICAgICBYOiBcIjIyZTY2ZjE5Mjk2MzFkMDBiZjAyNjIyNzU4MTU5N2YwODVmZDk0ZmQ5NTJmYzBkY2E5ZjA4MzMzOThiNWMwNjRcIixcbiAgICAgIFk6IFwiNjA4OGIzOTEyZTEwYTFlOWQ1MDM1NWE2MDljMTBkYjdkMTg4ZjE2YTJlMmZkNzM1N2U1MWJmNGY2YTc0ZjBhMVwiXG4gICAgfSwge1xuICAgICAgWDogXCI5ZGM5ZmE0MTBmM2NlOWViNzBkZjcwY2RlYTAwYTQ5ZjJjNGNjN2EzMWMwOGMwZGFiNWY4NjNlZDM1ZmY1MTM5XCIsXG4gICAgICBZOiBcIjYyN2EyOTFjYjg3YTc1YzYxZGEzZjY1ZDY4MThlMWUwNWUzNjAyMTcxNzk4MTdlZDI3ZThjNzNiY2E3ZWMxMjJcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiMTE4YjlmYzA3ZTk3YjA5NmQ4OTliOWY2NjU4NDYzY2U2YThjYWE2NDAzOGUzN2ZjOTY5ZGY0ZTYwMjNkZDhjNlwiLFxuICAgICAgWTogXCJiYWY5ZmE0ZTUxNzcwZjQ3OTZlYTE2NWRkMDNhNzY5Yjg2MDY2ODFhMzg5NTRhMGE5MmM0Y2JmZmQ2NjA5Y2U5XCJcbiAgICB9LCB7XG4gICAgICBYOiBcIjhhNmQ4YjkyNWRhMTVhMjczZGVjM2Q4ZjgzOTVlYzM1Y2Q2ODc4ZjI3NGIyYjE4MGU0ZTEwNjk5OWRiNjQwNDNcIixcbiAgICAgIFk6IFwiOTZmNjdmODcwYzE1Nzc0M2RhMGIxZWI4NGQ4OWJmMzA1MDBkNzRkYzg0YzExZjUwMWVlMWNiMDEzYWNjOGM0NlwiXG4gICAgfSwge1xuICAgICAgWDogXCIzOWNlY2I2MmU4NjM3MjlmNTcyZjdkZmM0NmMyNDg2Nzk4MWJmMDRiYjQwNWZlZDBkZjM5ZTMzOTg0YmZhZGU1XCIsXG4gICAgICBZOiBcIjYxYzIzNjQ0MzQwMTJlNjhhMmJlMmU5OTUyODA1MDM3ZTUyNjI5ZDc3NjJmYWZjOGUxMGU5ZmI1YmFkOGY3OTBcIlxuICAgIH1dKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90b3J1c0luZGV4ZXNcIiwgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9uZXR3b3JrXCIsIEVUSEVSRVVNX05FVFdPUksuTUFJTk5FVCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJub2RlTGlzdEFkZHJlc3NcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVwZGF0ZWRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5vZGVMaXN0Q29udHJhY3RcIiwgdm9pZCAwKTtcblxuICAgIGxldCB1cmw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9jYWxVcmwgPSBuZXcgVVJMKG5ldHdvcmspO1xuICAgICAgdXJsID0gbG9jYWxVcmwuaHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBcImI4Y2RiMGU0Y2ZmMjQ1OTlhMjg2YmY4ZTg3ZmYxYzk2XCI7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vXCIuY29uY2F0KG5ldHdvcmssIFwiLmluZnVyYS5pby92My9cIikuY29uY2F0KHByb2plY3RJZCk7XG4gICAgfVxuXG4gICAgV2ViM0V0aENvbnRyYWN0LnNldFByb3ZpZGVyKHVybCk7XG4gICAgdGhpcy5ub2RlTGlzdENvbnRyYWN0ID0gbmV3IFdlYjNFdGhDb250cmFjdChhYmksIHByb3h5QWRkcmVzcyk7XG4gICAgdGhpcy5ub2RlTGlzdEFkZHJlc3MgPSBwcm94eUFkZHJlc3M7XG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fbmV0d29yayA9IG5ldHdvcms7XG4gIH1cblxuICBnZXQgX25vZGVEZXRhaWxzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50RXBvY2g6IHRoaXMuX2N1cnJlbnRFcG9jaCxcbiAgICAgIG5vZGVMaXN0QWRkcmVzczogdGhpcy5ub2RlTGlzdEFkZHJlc3MsXG4gICAgICB0b3J1c05vZGVFbmRwb2ludHM6IHRoaXMuX3RvcnVzTm9kZUVuZHBvaW50cyxcbiAgICAgIHRvcnVzTm9kZVB1YjogdGhpcy5fdG9ydXNOb2RlUHViLFxuICAgICAgdG9ydXNJbmRleGVzOiB0aGlzLl90b3J1c0luZGV4ZXMsXG4gICAgICB1cGRhdGVkOiB0aGlzLnVwZGF0ZWRcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0Tm9kZURldGFpbHMoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBza2lwID0gZmFsc2UsXG4gICAgICB2ZXJpZmllcixcbiAgICAgIHZlcmlmaWVySWRcbiAgICB9ID0gX3JlZjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoc2tpcCAmJiB0aGlzLl9uZXR3b3JrID09PSBFVEhFUkVVTV9ORVRXT1JLLk1BSU5ORVQpIHJldHVybiB0aGlzLl9ub2RlRGV0YWlsczsgLy8gRG8gdGhpcyBvbmx5IGZvciBtYWlubmV0IHdoZXJlIHRoZSBsaXN0IGlzIHN0YXRpYyBpcnJlc3BlY3RpdmUgb2YgdmVyaWZpZXIsIHZlcmlmaWVySWRcblxuICAgICAgaWYgKHRoaXMudXBkYXRlZCAmJiB0aGlzLl9uZXR3b3JrID09PSBFVEhFUkVVTV9ORVRXT1JLLk1BSU5ORVQpIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICAgIGNvbnN0IGhhc2hlZFZlcmlmaWVySWQgPSBrZWNjYWsyNTYodmVyaWZpZXJJZCk7XG4gICAgICBjb25zdCBub2RlRGV0YWlscyA9IGF3YWl0IHRoaXMubm9kZUxpc3RDb250cmFjdC5tZXRob2RzLmdldE5vZGVTZXQodmVyaWZpZXIsIGhhc2hlZFZlcmlmaWVySWQpLmNhbGwoKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VycmVudEVwb2NoLFxuICAgICAgICB0b3J1c05vZGVFbmRwb2ludHMsXG4gICAgICAgIHRvcnVzTm9kZVB1YlgsXG4gICAgICAgIHRvcnVzTm9kZVB1YlksXG4gICAgICAgIHRvcnVzSW5kZXhlc1xuICAgICAgfSA9IG5vZGVEZXRhaWxzO1xuICAgICAgdGhpcy5fY3VycmVudEVwb2NoID0gY3VycmVudEVwb2NoO1xuICAgICAgdGhpcy5fdG9ydXNJbmRleGVzID0gdG9ydXNJbmRleGVzLm1hcCh4ID0+IE51bWJlcih4KSk7XG4gICAgICBjb25zdCB1cGRhdGVkRW5kcG9pbnRzID0gW107XG4gICAgICBjb25zdCB1cGRhdGVkTm9kZVB1YiA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9ydXNOb2RlRW5kcG9pbnRzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICBjb25zdCBlbmRQb2ludEVsZW1lbnQgPSB0b3J1c05vZGVFbmRwb2ludHNbaW5kZXhdO1xuICAgICAgICBjb25zdCBwdWJLeCA9IHRvcnVzTm9kZVB1YlhbaW5kZXhdO1xuICAgICAgICBjb25zdCBwdWJLeSA9IHRvcnVzTm9kZVB1YllbaW5kZXhdO1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cHM6Ly9cIi5jb25jYXQoZW5kUG9pbnRFbGVtZW50LnNwbGl0KFwiOlwiKVswXSwgXCIvanJwY1wiKTtcbiAgICAgICAgdXBkYXRlZEVuZHBvaW50cy5wdXNoKGVuZHBvaW50KTtcbiAgICAgICAgdXBkYXRlZE5vZGVQdWIucHVzaCh7XG4gICAgICAgICAgWDogdG9IZXgocHViS3gpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcbiAgICAgICAgICBZOiB0b0hleChwdWJLeSkucmVwbGFjZShcIjB4XCIsIFwiXCIpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90b3J1c05vZGVFbmRwb2ludHMgPSB1cGRhdGVkRW5kcG9pbnRzO1xuICAgICAgdGhpcy5fdG9ydXNOb2RlUHViID0gdXBkYXRlZE5vZGVQdWI7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuX25vZGVEZXRhaWxzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAodGhpcy5fbmV0d29yayA9PT0gRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVUKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IHsgRVRIRVJFVU1fTkVUV09SSywgYWJpLCBOb2RlRGV0YWlsTWFuYWdlciBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZXRjaE5vZGVEZXRhaWxzLmVzbS5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoLm1lcmdlJztcbmltcG9ydCBsb2dMZXZlbCwgeyBsZXZlbHMgfSBmcm9tICdsb2dsZXZlbCc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5jb25zdCBsb2cgPSBsb2dMZXZlbC5nZXRMb2dnZXIoXCJodHRwLWhlbHBlcnNcIik7XG5sb2cuc2V0TGV2ZWwobGV2ZWxzLklORk8pO1xubGV0IGFwaUtleSA9IFwidG9ydXMtZGVmYXVsdFwiO1xubGV0IGVtYmVkSG9zdCA9IFwiXCI7IC8vICNyZWdpb24gQVBJIEtleXNcblxuY29uc3QgZ2F0ZXdheUF1dGhIZWFkZXIgPSBcIngtYXBpLWtleVwiO1xuY29uc3QgZ2F0ZXdheUVtYmVkSG9zdEhlYWRlciA9IFwieC1lbWJlZC1ob3N0XCI7XG5mdW5jdGlvbiBzZXRFbWJlZEhvc3QoZW1iZWRIb3N0Xykge1xuICBlbWJlZEhvc3QgPSBlbWJlZEhvc3RfO1xufVxuZnVuY3Rpb24gY2xlYXJFbWJlZEhvc3QoKSB7XG4gIGVtYmVkSG9zdCA9IFwiXCI7XG59XG5mdW5jdGlvbiBnZXRFbWJlZEhvc3QoKSB7XG4gIHJldHVybiBlbWJlZEhvc3Q7XG59XG5mdW5jdGlvbiBzZXRBUElLZXkoYXBpS2V5Xykge1xuICBhcGlLZXkgPSBhcGlLZXlfO1xufVxuZnVuY3Rpb24gY2xlYXJBUElLZXkoKSB7XG4gIGFwaUtleSA9IFwidG9ydXMtZGVmYXVsdFwiO1xufVxuZnVuY3Rpb24gZ2V0QVBJS2V5KCkge1xuICByZXR1cm4gYXBpS2V5O1xufSAvLyAjZW5kcmVnaW9uXG5cbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7XG4gIGxvZy5zZXRMZXZlbChsZXZlbCk7XG59XG5cbmZ1bmN0aW9uIGdldEFwaUtleUhlYWRlcnMoKSB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgaWYgKGFwaUtleSkgaGVhZGVyc1tnYXRld2F5QXV0aEhlYWRlcl0gPSBhcGlLZXk7XG4gIGlmIChlbWJlZEhvc3QpIGhlYWRlcnNbZ2F0ZXdheUVtYmVkSG9zdEhlYWRlcl0gPSBlbWJlZEhvc3Q7XG4gIHJldHVybiBoZWFkZXJzO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gIGxvZy5pbmZvKFwiUmVzcG9uc2U6IFwiLmNvbmNhdChyZXNwb25zZS5zdGF0dXMsIFwiIFwiKS5jb25jYXQocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICBsb2cuaW5mbyhcIlVybDogXCIuY29uY2F0KHJlc3BvbnNlLnVybCkpO1xufVxuXG5jb25zdCBwcm9taXNlVGltZW91dCA9IChtcywgcHJvbWlzZSkgPT4ge1xuICBjb25zdCB0aW1lb3V0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRpbWVkIG91dCBpbiBcIi5jb25jYXQobXMsIFwibXNcIikpKTtcbiAgICB9LCBtcyk7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtwcm9taXNlLCB0aW1lb3V0XSk7XG59O1xuY29uc3QgZ2V0ID0gYXN5bmMgZnVuY3Rpb24gKHVybCkge1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHt9XG4gIH07XG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiXG4gIH0pO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIGRlYnVnTG9nUmVzcG9uc2UocmVzcG9uc2UpO1xuICB0aHJvdyByZXNwb25zZTtcbn07XG5jb25zdCBwb3N0ID0gZnVuY3Rpb24gKHVybCkge1xuICBsZXQgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGxldCBvcHRpb25zXyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGxldCBjdXN0b21PcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcbiAgICB9XG4gIH07XG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIlxuICB9KTsgLy8gZGVlcCBtZXJnZSBjaGFuZ2VzIHRoZSBzdHJ1Y3R1cmUgb2YgZm9ybSBkYXRhIGFuZCB1cmwgZW5jb2RlZCBkYXRhICxcbiAgLy8gc28gd2Ugc2hvdWxkIG5vdCBkZWVwbWVyZ2UgYm9keSBkYXRhXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMuaXNVcmxFbmNvZGVkRGF0YSkge1xuICAgIC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gICAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAgIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuICAgIG9wdGlvbnMuYm9keSA9IGRhdGE7IC8vIElmIHVybCBlbmNvZGVkIGRhdGEsIHRoaXMgbXVzdCBub3QgYmUgdGhlIGNvbnRlbnQgdHlwZVxuXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl07XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZVRpbWVvdXQoY3VzdG9tT3B0aW9ucy50aW1lb3V0IHx8IDYwMDAwLCBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfSkpO1xufTtcbmNvbnN0IHBhdGNoID0gYXN5bmMgZnVuY3Rpb24gKHVybCkge1xuICBsZXQgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGxldCBvcHRpb25zXyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGxldCBjdXN0b21PcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcbiAgICB9XG4gIH07IC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIlBBVENIXCJcbiAgfSk7IC8vIGRlZXAgbWVyZ2UgY2hhbmdlcyB0aGUgc3RydWN0dXJlIG9mIGZvcm0gZGF0YSBhbmQgdXJsIGVuY29kZWQgZGF0YSAsXG4gIC8vIHNvIHdlIHNob3VsZCBub3QgZGVlcG1lcmdlIGJvZHkgZGF0YVxuXG4gIGlmIChjdXN0b21PcHRpb25zLmlzVXJsRW5jb2RlZERhdGEpIHtcbiAgICAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAgIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cbiAgICBvcHRpb25zLmJvZHkgPSBkYXRhOyAvLyBJZiB1cmwgZW5jb2RlZCBkYXRhLCB0aGlzIG11c3Qgbm90IGJlIHRoZSBjb250ZW50IHR5cGVcblxuICAgIGlmIChvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKSBkZWxldGUgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgdGhyb3cgcmVzcG9uc2U7XG59O1xuY29uc3QgcmVtb3ZlID0gYXN5bmMgZnVuY3Rpb24gKHVybCkge1xuICBsZXQgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGxldCBvcHRpb25zXyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGxldCBjdXN0b21PcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcbiAgICB9XG4gIH07IC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIkRFTEVURVwiXG4gIH0pO1xuXG4gIGlmIChjdXN0b21PcHRpb25zLmlzVXJsRW5jb2RlZERhdGEpIHtcbiAgICAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAgIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cbiAgICBvcHRpb25zLmJvZHkgPSBkYXRhOyAvLyBJZiB1cmwgZW5jb2RlZCBkYXRhLCB0aGlzIG11c3Qgbm90IGJlIHRoZSBjb250ZW50IHR5cGVcblxuICAgIGlmIChvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKSBkZWxldGUgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgdGhyb3cgcmVzcG9uc2U7XG59O1xuY29uc3QgZ2VuZXJhdGVKc29uUlBDT2JqZWN0ID0gKG1ldGhvZCwgcGFyYW1ldGVycykgPT4gKHtcbiAganNvbnJwYzogXCIyLjBcIixcbiAgbWV0aG9kLFxuICBpZDogMTAsXG4gIHBhcmFtczogcGFyYW1ldGVyc1xufSk7XG5jb25zdCBwcm9taXNlUmFjZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgbGV0IHRpbWVvdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDYwMDAwO1xuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtnZXQodXJsLCBvcHRpb25zKSwgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcInRpbWVkIG91dFwiKSk7XG4gICAgfSwgdGltZW91dCk7XG4gIH0pXSk7XG59O1xuXG5leHBvcnQgeyBjbGVhckFQSUtleSwgY2xlYXJFbWJlZEhvc3QsIGdhdGV3YXlBdXRoSGVhZGVyLCBnYXRld2F5RW1iZWRIb3N0SGVhZGVyLCBnZW5lcmF0ZUpzb25SUENPYmplY3QsIGdldCwgZ2V0QVBJS2V5LCBnZXRFbWJlZEhvc3QsIHBhdGNoLCBwb3N0LCBwcm9taXNlUmFjZSwgcHJvbWlzZVRpbWVvdXQsIHJlbW92ZSwgc2V0QVBJS2V5LCBzZXRFbWJlZEhvc3QsIHNldExvZ0xldmVsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwSGVscGVycy5lc20uanMubWFwXG4iLCJpbXBvcnQgcmFuZG9tYnl0ZXMgZnJvbSAncmFuZG9tYnl0ZXMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBiYXNlNjR1cmxMaWIgZnJvbSAnYmFzZTY0dXJsJztcbmltcG9ydCBrZWNjYWtMaWIgZnJvbSAna2VjY2FrJztcblxuY29uc3QgcmFuZG9tSWQgPSAoKSA9PiByYW5kb21ieXRlcygzMikudG9TdHJpbmcoXCJoZXhcIik7XG5cbmNsYXNzIFVSTFdpdGhIYXNoUGFyYW1zIGV4dGVuZHMgVVJMIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhhc2hQYXJhbXNcIiwgbmV3IFVSTFNlYXJjaFBhcmFtcygpKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuaGFzaFBhcmFtcy50b1N0cmluZygpO1xuICAgIHJldHVybiBzdXBlci50b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9XG5cbn1cblxuY29uc3QgYmFzZTY0dXJsID0gYmFzZTY0dXJsTGliO1xuZnVuY3Rpb24gc2FmZWJ0b2Eoc3RyKSB7XG4gIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKHN0cik7XG59XG5mdW5jdGlvbiBzYWZlYXRvYihzdHIpIHtcbiAgLy8gR29pbmcgYmFja3dhcmRzOiBmcm9tIGJ5dGVzdHJlYW0sIHRvIHBlcmNlbnQtZW5jb2RpbmcsIHRvIG9yaWdpbmFsIHN0cmluZy5cbiAgcmV0dXJuIGJhc2U2NHVybC5kZWNvZGUoc3RyKTtcbn1cbmNvbnN0IGtlY2NhayA9IGtlY2Nha0xpYjtcbmZ1bmN0aW9uIGJhc2U2NHRvSlNPTihiNjRzdHIpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0dXJsLmRlY29kZShiNjRzdHIpKTtcbn1cbmZ1bmN0aW9uIGpzb25Ub0Jhc2U2NChqc29uKSB7XG4gIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbn1cbmZ1bmN0aW9uIGtlY2NhazI1NihzdHIpIHtcbiAgbGV0IGlucHV0ID0gc3RyO1xuXG4gIGlmICh0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiICYmIHN0ci5zbGljZSgwLCAyKSA9PT0gXCIweFwiICYmIHN0ci5sZW5ndGggPT09IDY2KSB7XG4gICAgaW5wdXQgPSBCdWZmZXIuZnJvbShzdHIuc2xpY2UoMiksIFwiaGV4XCIpO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IFwiMHhcIi5jb25jYXQoa2VjY2FrKFwia2VjY2FrMjU2XCIpLnVwZGF0ZShpbnB1dCkuZGlnZXN0KFwiaGV4XCIpLnBhZFN0YXJ0KDY0LCBcIjBcIikpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IHsgVVJMV2l0aEhhc2hQYXJhbXMsIGJhc2U2NHRvSlNPTiwgYmFzZTY0dXJsLCBqc29uVG9CYXNlNjQsIGtlY2Nhaywga2VjY2FrMjU2LCByYW5kb21JZCwgc2FmZWF0b2IsIHNhZmVidG9hIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVubG9naW5VdGlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgRHVwbGV4IH0gZnJvbSAncmVhZGFibGUtc3RyZWFtJztcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnQHRvcnVzbGFicy9vcGVubG9naW4tdXRpbHMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnZmFzdC1zYWZlLXN0cmluZ2lmeSc7XG5pbXBvcnQgeyBzZXJpYWxpemVFcnJvciB9IGZyb20gJ2V0aC1ycGMtZXJyb3JzJztcbmltcG9ydCBlb3MgZnJvbSAnZW5kLW9mLXN0cmVhbSc7XG5pbXBvcnQgb25jZSBmcm9tICdvbmNlJztcbmltcG9ydCBwdW1wIGZyb20gJ3B1bXAnO1xuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBTWU4gPSBcIlNZTlwiO1xuY29uc3QgQUNLID0gXCJBQ0tcIjtcbmNvbnN0IEJSSyA9IFwiQlJLXCI7XG5jbGFzcyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0gZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIG5hbWUsXG4gICAgICB0YXJnZXQsXG4gICAgICB0YXJnZXRXaW5kb3cgPSB3aW5kb3csXG4gICAgICB0YXJnZXRPcmlnaW4gPSBcIipcIlxuICAgIH0gPSBfcmVmO1xuICAgIHN1cGVyKHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWVcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbml0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaGF2ZVN5blwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX25hbWVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRXaW5kb3dcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRPcmlnaW5cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9vbk1lc3NhZ2VcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zeW5JbnRlcnZhbElkXCIsIHZvaWQgMCk7XG5cbiAgICBpZiAoIW5hbWUgfHwgIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dC5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuX2hhdmVTeW4gPSBmYWxzZTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQ7IC8vIHRhcmdldCBvcmlnaW5cblxuICAgIHRoaXMuX3RhcmdldFdpbmRvdyA9IHRhcmdldFdpbmRvdztcbiAgICB0aGlzLl90YXJnZXRPcmlnaW4gPSB0YXJnZXRPcmlnaW47XG4gICAgdGhpcy5fb25NZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zeW5JbnRlcnZhbElkID0gbnVsbDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fb25NZXNzYWdlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9oYW5kU2hha2UoKTtcbiAgfVxuXG4gIF9icmVhaygpIHtcbiAgICB0aGlzLmNvcmsoKTtcblxuICAgIHRoaXMuX3dyaXRlKEJSSywgbnVsbCwgbm9vcCk7XG5cbiAgICB0aGlzLl9oYXZlU3luID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdCA9IGZhbHNlO1xuICB9XG5cbiAgX2hhbmRTaGFrZSgpIHtcbiAgICB0aGlzLl93cml0ZShTWU4sIG51bGwsIG5vb3ApO1xuXG4gICAgdGhpcy5jb3JrKCk7XG4gIH1cblxuICBfb25EYXRhKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuX2luaXQpIHtcbiAgICAgIC8vIGxpc3RlbiBmb3IgaGFuZHNoYWtlXG4gICAgICBpZiAoZGF0YSA9PT0gU1lOKSB7XG4gICAgICAgIHRoaXMuX2hhdmVTeW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3dyaXRlKEFDSywgbnVsbCwgbm9vcCk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT09IEFDSykge1xuICAgICAgICB0aGlzLl9pbml0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuX2hhdmVTeW4pIHtcbiAgICAgICAgICB0aGlzLl93cml0ZShBQ0ssIG51bGwsIG5vb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51bmNvcmsoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEgPT09IEJSSykge1xuICAgICAgdGhpcy5fYnJlYWsoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yd2FyZCBtZXNzYWdlXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnB1c2goZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcG9zdE1lc3NhZ2UoZGF0YSkge1xuICAgIGNvbnN0IG9yaWdpbkNvbnN0cmFpbnQgPSB0aGlzLl90YXJnZXRPcmlnaW47XG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgdGFyZ2V0OiB0aGlzLl90YXJnZXQsXG4gICAgICBkYXRhXG4gICAgfSwgb3JpZ2luQ29uc3RyYWludCk7XG4gIH1cblxuICBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YTsgLy8gdmFsaWRhdGUgbWVzc2FnZVxuXG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbiAhPT0gXCIqXCIgJiYgZXZlbnQub3JpZ2luICE9PSB0aGlzLl90YXJnZXRPcmlnaW4gfHwgZXZlbnQuc291cmNlICE9PSB0aGlzLl90YXJnZXRXaW5kb3cgfHwgdHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZS50YXJnZXQgIT09IHRoaXMuX25hbWUgfHwgIW1lc3NhZ2UuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29uRGF0YShtZXNzYWdlLmRhdGEpO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIF93cml0ZShkYXRhLCBfLCBjYikge1xuICAgIHRoaXMuX3Bvc3RNZXNzYWdlKGRhdGEpO1xuXG4gICAgY2IoKTtcbiAgfVxuXG4gIF9kZXN0cm95KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9vbk1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHNhZmVBcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKSB7XG4gIHRyeSB7XG4gICAgUmVmbGVjdC5hcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVGhyb3cgZXJyb3IgYWZ0ZXIgdGltZW91dCBzbyBhcyBub3QgdG8gaW50ZXJydXB0IHRoZSBzdGFja1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyKSB7XG4gIGNvbnN0IG4gPSBhcnIubGVuZ3RoO1xuICBjb25zdCBjb3B5ID0gbmV3IEFycmF5KG4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufVxuXG5jbGFzcyBTYWZlRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgZW1pdCh0eXBlKSB7XG4gICAgbGV0IGRvRXJyb3IgPSB0eXBlID09PSBcImVycm9yXCI7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gICAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb0Vycm9yID0gZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKCFkb0Vycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG5cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChkb0Vycm9yKSB7XG4gICAgICBsZXQgZXI7XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgW2VyXSA9IGFyZ3M7XG4gICAgICB9XG5cbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuXG5cbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlVuaGFuZGxlZCBlcnJvci5cIi5jb25jYXQoZXIgPyBcIiAoXCIuY29uY2F0KGVyLm1lc3NhZ2UsIFwiKVwiKSA6IFwiXCIpKTtcbiAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgc2FmZUFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlcik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgc2FmZUFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxufVxuXG5jbGFzcyBTZXJpYWxpemFibGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBjb2RlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGRhdGFcbiAgICB9ID0gX3JlZjtcblxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29kZSBtdXN0IGJlIGFuIGludGVnZXJcIik7XG4gICAgfVxuXG4gICAgaWYgKCFtZXNzYWdlIHx8IHR5cGVvZiBtZXNzYWdlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXNzYWdlIG11c3QgYmUgc3RyaW5nXCIpO1xuICAgIH1cblxuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29kZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGF0YVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5jb2RlID0gY29kZTtcblxuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeSh7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBzdGFjazogdGhpcy5zdGFja1xuICAgIH0pO1xuICB9XG5cbn1cblxuY29uc3QgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICBsZXQgdW53cmFwUmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4gKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnJvciB8fCByZXNwb25zZS5lcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKTtcbiAgICB9IGVsc2UgaWYgKCF1bndyYXBSZXN1bHQgfHwgQXJyYXkuaXNBcnJheShyZXNwb25zZSkpIHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG4gICAgfVxuICB9O1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yTWlkZGxld2FyZShsb2cpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGpzb24tcnBjLWVuZ2luZSB3aWxsIHRlcm1pbmF0ZSB0aGUgcmVxdWVzdCB3aGVuIGl0IG5vdGljZXMgdGhpcyBlcnJvclxuICAgICAgaWYgKHR5cGVvZiByZXEubWV0aG9kICE9PSBcInN0cmluZ1wiIHx8ICFyZXEubWV0aG9kKSB7XG4gICAgICAgIHJlcy5lcnJvciA9IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBtZXRob2RcIlxuICAgICAgICB9KTtcbiAgICAgICAgZW5kKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dChkb25lID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH0gPSByZXM7XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuZXJyb3IoXCJPcGVuTG9naW4gLSBSUEMgRXJyb3I6IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihcIk9wZW5Mb2dpbiAtIFJQQyBFcnJvciB0aHJvd246IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgcmVzLmVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUoKSB7XG4gIGNvbnN0IGlkTWFwID0ge307XG5cbiAgZnVuY3Rpb24gcmVhZE5vb3AoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gbmV3IFNhZmVFdmVudEVtaXR0ZXIoKTtcblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2UocmVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGlkTWFwW3Jlcy5pZF07XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmVhbU1pZGRsZXdhcmUgLSBVbmtub3duIHJlc3BvbnNlIGlkIFxcXCJcIi5jb25jYXQocmVzLmlkLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBpZE1hcFtyZXMuaWRdOyAvLyBjb3B5IHdob2xlIHJlcyBvbnRvIG9yaWdpbmFsIHJlc1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LnJlcywgcmVzKTsgLy8gcnVuIGNhbGxiYWNrIG9uIGVtcHR5IHN0YWNrLFxuICAgIC8vIHByZXZlbnQgaW50ZXJuYWwgc3RyZWFtLWhhbmRsZXIgZnJvbSBjYXRjaGluZyBlcnJvcnNcblxuICAgIHNldFRpbWVvdXQoY29udGV4dC5lbmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc05vdGlmaWNhdGlvbihyZXMpIHtcbiAgICBldmVudHMuZW1pdChcIm5vdGlmaWNhdGlvblwiLCByZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UocmVzLCBfZW5jb2RpbmcsIGNiKSB7XG4gICAgbGV0IGVycjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc05vdGlmaWNhdGlvbiA9ICFyZXMuaWQ7XG5cbiAgICAgIGlmIChpc05vdGlmaWNhdGlvbikge1xuICAgICAgICBwcm9jZXNzTm90aWZpY2F0aW9uKHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzUmVzcG9uc2UocmVzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICBlcnIgPSBfZXJyO1xuICAgIH0gLy8gY29udGludWUgcHJvY2Vzc2luZyBzdHJlYW1cblxuXG4gICAgY2IoZXJyKTtcbiAgfVxuXG4gIGNvbnN0IHN0cmVhbSA9IG5ldyBEdXBsZXgoe1xuICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgcmVhZDogcmVhZE5vb3AsXG4gICAgd3JpdGU6IHByb2Nlc3NNZXNzYWdlXG4gIH0pO1xuXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQsIGVuZCkgPT4ge1xuICAgIC8vIHdyaXRlIHJlcSB0byBzdHJlYW1cbiAgICBzdHJlYW0ucHVzaChyZXEpOyAvLyByZWdpc3RlciByZXF1ZXN0IG9uIGlkIG1hcFxuXG4gICAgaWRNYXBbcmVxLmlkXSA9IHtcbiAgICAgIHJlcSxcbiAgICAgIHJlcyxcbiAgICAgIG5leHQsXG4gICAgICBlbmRcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZXZlbnRzLFxuICAgIG1pZGRsZXdhcmUsXG4gICAgc3RyZWFtXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTY2FmZm9sZE1pZGRsZXdhcmUoaGFuZGxlcnMpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW3JlcS5tZXRob2RdOyAvLyBpZiBubyBoYW5kbGVyLCByZXR1cm5cblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfSAvLyBpZiBoYW5kbGVyIGlzIGZuLCBjYWxsIGFzIG1pZGRsZXdhcmVcblxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzLCBuZXh0LCBlbmQpO1xuICAgIH0gLy8gaWYgaGFuZGxlciBpcyBzb21lIG90aGVyIHZhbHVlLCB1c2UgYXMgcmVzdWx0XG5cblxuICAgIHJlcy5yZXN1bHQgPSBoYW5kbGVyO1xuICAgIHJldHVybiBlbmQoKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlKCkge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0LCBfZW5kKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxJZCA9IHJlcS5pZDtcbiAgICBjb25zdCBuZXdJZCA9IHJhbmRvbUlkKCk7XG4gICAgcmVxLmlkID0gbmV3SWQ7XG4gICAgcmVzLmlkID0gbmV3SWQ7XG4gICAgbmV4dChkb25lID0+IHtcbiAgICAgIHJlcS5pZCA9IG9yaWdpbmFsSWQ7XG4gICAgICByZXMuaWQgPSBvcmlnaW5hbElkO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyTWlkZGxld2FyZShsb2dnZXIpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgXykgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZyhcIlJFUVwiLCByZXEsIFwiUkVTXCIsIHJlcyk7XG4gICAgbmV4dCgpO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQXN5bmNNaWRkbGV3YXJlKGFzeW5jTWlkZGxld2FyZSkge1xuICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAvLyBuZXh0UHJvbWlzZSBpcyB0aGUga2V5IHRvIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGl0IGlzIHJlc29sdmVkIGJ5IHRoZSByZXR1cm4gaGFuZGxlciBwYXNzZWQgdG8gdGhlXG4gICAgLy8gXCJuZXh0XCIgZnVuY3Rpb25cbiAgICBsZXQgcmVzb2x2ZU5leHRQcm9taXNlO1xuICAgIGNvbnN0IG5leHRQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICByZXNvbHZlTmV4dFByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGxldCByZXR1cm5IYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIGxldCBuZXh0V2FzQ2FsbGVkID0gZmFsc2U7IC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgdGhlIGNvbnN1bWVyJ3MgYXN5bmMgbWlkZGxld2FyZS5cblxuICAgIGNvbnN0IGFzeW5jTmV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgIG5leHRXYXNDYWxsZWQgPSB0cnVlOyAvLyBXZSBwYXNzIGEgcmV0dXJuIGhhbmRsZXIgdG8gbmV4dCgpLiBXaGVuIGl0IGlzIGNhbGxlZCBieSB0aGUgZW5naW5lLFxuICAgICAgLy8gdGhlIGNvbnN1bWVyJ3MgYXN5bmMgbWlkZGxld2FyZSB3aWxsIHJlc3VtZSBleGVjdXRpbmcuXG5cbiAgICAgIG5leHQocnVuUmV0dXJuSGFuZGxlcnNDYWxsYmFjayA9PiB7XG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgY29tZXMgZnJvbSBKUlBDRW5naW5lLl9ydW5SZXR1cm5IYW5kbGVyc1xuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2sgPSBydW5SZXR1cm5IYW5kbGVyc0NhbGxiYWNrO1xuICAgICAgICByZXNvbHZlTmV4dFByb21pc2UoKTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgbmV4dFByb21pc2U7XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhc3luY01pZGRsZXdhcmUocmVxLCByZXMsIGFzeW5jTmV4dCk7XG5cbiAgICAgIGlmIChuZXh0V2FzQ2FsbGVkKSB7XG4gICAgICAgIGF3YWl0IG5leHRQcm9taXNlOyAvLyB3ZSBtdXN0IHdhaXQgdW50aWwgdGhlIHJldHVybiBoYW5kbGVyIGlzIGNhbGxlZFxuXG4gICAgICAgIHJldHVybkhhbmRsZXJDYWxsYmFjayhudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZChudWxsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKHJldHVybkhhbmRsZXJDYWxsYmFjaykge1xuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbi8qKlxuICogQSBKU09OLVJQQyByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9jZXNzb3IuXG4gKiBHaXZlIGl0IGEgc3RhY2sgb2YgbWlkZGxld2FyZSwgcGFzcyBpdCByZXF1ZXN0cywgYW5kIGdldCBiYWNrIHJlc3BvbnNlcy5cbiAqL1xuXG5jbGFzcyBKUlBDRW5naW5lIGV4dGVuZHMgU2FmZUV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWlkZGxld2FyZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbWlkZGxld2FyZSA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBTZXJpYWxseSBleGVjdXRlcyB0aGUgZ2l2ZW4gc3RhY2sgb2YgbWlkZGxld2FyZS5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYW55IGVycm9yIGVuY291bnRlcmVkIGR1cmluZyBtaWRkbGV3YXJlIGV4ZWN1dGlvbixcbiAgICogYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgcmVxdWVzdCB3YXMgY29tcGxldGVkLCBhbmQgYW4gYXJyYXkgb2ZcbiAgICogbWlkZGxld2FyZS1kZWZpbmVkIHJldHVybiBoYW5kbGVycy5cbiAgICovXG5cblxuICBzdGF0aWMgYXN5bmMgX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIG1pZGRsZXdhcmVTdGFjaykge1xuICAgIGNvbnN0IHJldHVybkhhbmRsZXJzID0gW107XG4gICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlOyAvLyBHbyBkb3duIHN0YWNrIG9mIG1pZGRsZXdhcmUsIGNhbGwgYW5kIGNvbGxlY3Qgb3B0aW9uYWwgcmV0dXJuSGFuZGxlcnNcblxuICAgIGZvciAoY29uc3QgbWlkZGxld2FyZSBvZiBtaWRkbGV3YXJlU3RhY2spIHtcbiAgICAgIFtlcnJvciwgaXNDb21wbGV0ZV0gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlLCByZXR1cm5IYW5kbGVycyk7XG5cbiAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbZXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzLnJldmVyc2UoKV07XG4gIH1cbiAgLyoqXG4gICAqIFJ1bnMgYW4gaW5kaXZpZHVhbCBtaWRkbGV3YXJlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBhbnkgZXJyb3IgZW5jb3VudGVyZWQgZHVyaW5nIG1pZGRsZXdhcmUgZXhlY3Rpb24sXG4gICAqIGFuZCBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBlbmQuXG4gICAqL1xuXG5cbiAgc3RhdGljIF9ydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlLCByZXR1cm5IYW5kbGVycykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGVuZCA9IGVyciA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyIHx8IHJlcy5lcnJvcjtcblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuZXJyb3IgPSBzZXJpYWxpemVFcnJvcihlcnJvcik7XG4gICAgICAgIH0gLy8gVHJ1ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBzaG91bGQgZW5kXG5cblxuICAgICAgICByZXNvbHZlKFtlcnJvciwgdHJ1ZV0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV4dCA9IHJldHVybkhhbmRsZXIgPT4ge1xuICAgICAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICAgICAgZW5kKHJlcy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJldHVybkhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0dXJuSGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGVuZChuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICAgICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkpSUENFbmdpbmU6ICduZXh0JyByZXR1cm4gaGFuZGxlcnMgbXVzdCBiZSBmdW5jdGlvbnNcIlxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybkhhbmRsZXJzLnB1c2gocmV0dXJuSGFuZGxlcik7XG4gICAgICAgICAgfSAvLyBGYWxzZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBzaG91bGQgbm90IGVuZFxuXG5cbiAgICAgICAgICByZXNvbHZlKFtudWxsLCBmYWxzZV0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0LCBlbmQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2VyaWFsbHkgZXhlY3V0ZXMgYXJyYXkgb2YgcmV0dXJuIGhhbmRsZXJzLiBUaGUgcmVxdWVzdCBhbmQgcmVzcG9uc2UgYXJlXG4gICAqIGFzc3VtZWQgdG8gYmUgaW4gdGhlaXIgc2NvcGUuXG4gICAqL1xuXG5cbiAgc3RhdGljIGFzeW5jIF9ydW5SZXR1cm5IYW5kbGVycyhoYW5kbGVycykge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBoYW5kbGVycykge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBoYW5kbGVyKGVyciA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcmVzcG9uc2UgaGFzIG5laXRoZXIgYSByZXN1bHQgbm9yIGFuIGVycm9yLCBvciBpZlxuICAgKiB0aGUgXCJpc0NvbXBsZXRlXCIgZmxhZyBpcyBmYWxzeS5cbiAgICovXG5cblxuICBzdGF0aWMgX2NoZWNrRm9yQ29tcGxldGlvbihyZXEsIHJlcywgaXNDb21wbGV0ZSkge1xuICAgIGlmICghKFwicmVzdWx0XCIgaW4gcmVzKSAmJiAhKFwiZXJyb3JcIiBpbiByZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwiUmVzcG9uc2UgaGFzIG5vIGVycm9yIG9yIHJlc3VsdCBmb3IgcmVxdWVzdFwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQ29tcGxldGUpIHtcbiAgICAgIHRocm93IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgbWVzc2FnZTogXCJOb3RoaW5nIGVuZGVkIHJlcXVlc3RcIlxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIHRoZSBlbmdpbmUncyBtaWRkbGV3YXJlIHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gbWlkZGxld2FyZSAtIFRoZSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICovXG5cblxuICBwdXNoKG1pZGRsZXdhcmUpIHtcbiAgICB0aGlzLl9taWRkbGV3YXJlLnB1c2gobWlkZGxld2FyZSk7XG4gIH1cblxuICBoYW5kbGUocmVxLCBjYikge1xuICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNhbGxiYWNrXCIgbXVzdCBiZSBhIGZ1bmN0aW9uIGlmIHByb3ZpZGVkLicpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlcSkpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlQmF0Y2gocmVxLCBjYik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVCYXRjaChyZXEpO1xuICAgIH1cblxuICAgIGlmIChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZShyZXEsIGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZUhhbmRsZShyZXEpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoaXMgZW5naW5lIGFzIGEgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwdXNoZWQgdG8gb3RoZXJcbiAgICogZW5naW5lcy5cbiAgICpcbiAgICogQHJldHVybnMgVGhpcyBlbmdpbmUgYXMgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uLlxuICAgKi9cblxuXG4gIGFzTWlkZGxld2FyZSgpIHtcbiAgICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFttaWRkbGV3YXJlRXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzXSA9IGF3YWl0IEpSUENFbmdpbmUuX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIHRoaXMuX21pZGRsZXdhcmUpO1xuXG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpO1xuICAgICAgICAgIHJldHVybiBlbmQobWlkZGxld2FyZUVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFzeW5jIGhhbmRsZXJDYWxsYmFjayA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEpSUENFbmdpbmUuX3J1blJldHVybkhhbmRsZXJzKHJldHVybkhhbmRsZXJzKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJDYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXJDYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlbmQoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBhc3luYyBfaGFuZGxlQmF0Y2gocmVxcywgY2IpIHtcbiAgICAvLyBUaGUgb3JkZXIgaGVyZSBpcyBpbXBvcnRhbnRcbiAgICB0cnkge1xuICAgICAgLy8gMi4gV2FpdCBmb3IgYWxsIHJlcXVlc3RzIHRvIGZpbmlzaCwgb3IgdGhyb3cgb24gc29tZSBraW5kIG9mIGZhdGFsXG4gICAgICAvLyBlcnJvclxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIC8vIDEuIEJlZ2luIGV4ZWN1dGluZyBlYWNoIHJlcXVlc3QgaW4gdGhlIG9yZGVyIHJlY2VpdmVkXG4gICAgICByZXFzLm1hcCh0aGlzLl9wcm9taXNlSGFuZGxlLmJpbmQodGhpcykpKTsgLy8gMy4gUmV0dXJuIGJhdGNoIHJlc3BvbnNlXG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gY2IobnVsbCwgcmVzcG9uc2VzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBjYihlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQSBwcm9taXNlLXdyYXBwZWQgX2hhbmRsZS5cbiAgICovXG5cblxuICBfcHJvbWlzZUhhbmRsZShyZXEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGUocmVxLCAoX2VyciwgcmVzKSA9PiB7XG4gICAgICAgIC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGEgcmVzcG9uc2UsIGFuZCBpdCB3aWxsIGFsd2F5cyBoYXZlIGFueSBlcnJvclxuICAgICAgICAvLyB0aGF0IGlzIGNhdWdodCBhbmQgcHJvcGFnYXRlZC5cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhhdCB0aGUgcmVxdWVzdCBvYmplY3QgaXMgdmFsaWQsIHByb2Nlc3NlcyBpdCwgYW5kIHBhc3NlcyBhbnlcbiAgICogZXJyb3IgYW5kIHRoZSByZXNwb25zZSBvYmplY3QgdG8gdGhlIGdpdmVuIGNhbGxiYWNrLlxuICAgKlxuICAgKiBEb2VzIG5vdCByZWplY3QuXG4gICAqL1xuXG5cbiAgYXN5bmMgX2hhbmRsZShjYWxsZXJSZXEsIGNiKSB7XG4gICAgaWYgKCFjYWxsZXJSZXEgfHwgQXJyYXkuaXNBcnJheShjYWxsZXJSZXEpIHx8IHR5cGVvZiBjYWxsZXJSZXEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBcInJlcXVlc3QgbXVzdCBiZSBwbGFpbiBvYmplY3RcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2IoZXJyb3IsIHtcbiAgICAgICAgaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgZXJyb3JcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsbGVyUmVxLm1ldGhvZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwibWV0aG9kIG11c3QgYmUgc3RyaW5nXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNiKGVycm9yLCB7XG4gICAgICAgIGlkOiBjYWxsZXJSZXEuaWQsXG4gICAgICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgICAgIGVycm9yXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXEgPSBfb2JqZWN0U3ByZWFkJDEoe30sIGNhbGxlclJlcSk7XG5cbiAgICBjb25zdCByZXMgPSB7XG4gICAgICBpZDogcmVxLmlkLFxuICAgICAganNvbnJwYzogcmVxLmpzb25ycGNcbiAgICB9O1xuICAgIGxldCBlcnJvciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fcHJvY2Vzc1JlcXVlc3QocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgLy8gQSByZXF1ZXN0IGhhbmRsZXIgZXJyb3IsIGEgcmUtdGhyb3duIG1pZGRsZXdhcmUgZXJyb3IsIG9yIHNvbWV0aGluZ1xuICAgICAgLy8gdW5leHBlY3RlZC5cbiAgICAgIGVycm9yID0gX2Vycm9yO1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgLy8gRW5zdXJlIG5vIHJlc3VsdCBpcyBwcmVzZW50IG9uIGFuIGVycm9yZWQgcmVzcG9uc2VcbiAgICAgIGRlbGV0ZSByZXMucmVzdWx0O1xuXG4gICAgICBpZiAoIXJlcy5lcnJvcikge1xuICAgICAgICByZXMuZXJyb3IgPSBzZXJpYWxpemVFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNiKGVycm9yLCByZXMpO1xuICB9XG4gIC8qKlxuICAgKiBGb3IgdGhlIGdpdmVuIHJlcXVlc3QgYW5kIHJlc3BvbnNlLCBydW5zIGFsbCBtaWRkbGV3YXJlIGFuZCB0aGVpciByZXR1cm5cbiAgICogaGFuZGxlcnMsIGlmIGFueSwgYW5kIGVuc3VyZXMgdGhhdCBpbnRlcm5hbCByZXF1ZXN0IHByb2Nlc3Npbmcgc2VtYW50aWNzXG4gICAqIGFyZSBzYXRpc2ZpZWQuXG4gICAqL1xuXG5cbiAgYXN5bmMgX3Byb2Nlc3NSZXF1ZXN0KHJlcSwgcmVzKSB7XG4gICAgY29uc3QgW2Vycm9yLCBpc0NvbXBsZXRlLCByZXR1cm5IYW5kbGVyc10gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5BbGxNaWRkbGV3YXJlKHJlcSwgcmVzLCB0aGlzLl9taWRkbGV3YXJlKTsgLy8gVGhyb3cgaWYgXCJlbmRcIiB3YXMgbm90IGNhbGxlZCwgb3IgaWYgdGhlIHJlc3BvbnNlIGhhcyBuZWl0aGVyIGEgcmVzdWx0XG4gICAgLy8gbm9yIGFuIGVycm9yLlxuXG4gICAgSlJQQ0VuZ2luZS5fY2hlY2tGb3JDb21wbGV0aW9uKHJlcSwgcmVzLCBpc0NvbXBsZXRlKTsgLy8gVGhlIHJldHVybiBoYW5kbGVycyBzaG91bGQgcnVuIGV2ZW4gaWYgYW4gZXJyb3Igd2FzIGVuY291bnRlcmVkIGR1cmluZ1xuICAgIC8vIG1pZGRsZXdhcmUgcHJvY2Vzc2luZy5cblxuXG4gICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpOyAvLyBOb3cgd2UgcmUtdGhyb3cgdGhlIG1pZGRsZXdhcmUgcHJvY2Vzc2luZyBlcnJvciwgaWYgYW55LCB0byBjYXRjaCBpdFxuICAgIC8vIGZ1cnRoZXIgdXAgdGhlIGNhbGwgY2hhaW4uXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG59XG5mdW5jdGlvbiBtZXJnZU1pZGRsZXdhcmUobWlkZGxld2FyZVN0YWNrKSB7XG4gIGNvbnN0IGVuZ2luZSA9IG5ldyBKUlBDRW5naW5lKCk7XG4gIG1pZGRsZXdhcmVTdGFjay5mb3JFYWNoKG1pZGRsZXdhcmUgPT4gZW5naW5lLnB1c2gobWlkZGxld2FyZSkpO1xuICByZXR1cm4gZW5naW5lLmFzTWlkZGxld2FyZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlRW5naW5lU3RyZWFtKG9wdHMpIHtcbiAgaWYgKCFvcHRzIHx8ICFvcHRzLmVuZ2luZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZW5naW5lIHBhcmFtZXRlciFcIik7XG4gIH1cblxuICBjb25zdCB7XG4gICAgZW5naW5lXG4gIH0gPSBvcHRzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5cbiAgbGV0IHN0cmVhbTtcblxuICBmdW5jdGlvbiByZWFkKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZShyZXEsIF9lbmNvZGluZywgY2IpIHtcbiAgICBlbmdpbmUuaGFuZGxlKHJlcSwgKF9lcnIsIHJlcykgPT4ge1xuICAgICAgc3RyZWFtLnB1c2gocmVzKTtcbiAgICB9KTtcbiAgICBjYigpO1xuICB9XG5cbiAgc3RyZWFtID0gbmV3IER1cGxleCh7XG4gICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICByZWFkLFxuICAgIHdyaXRlXG4gIH0pOyAvLyBmb3J3YXJkIG5vdGlmaWNhdGlvbnNcblxuICBpZiAoZW5naW5lLm9uKSB7XG4gICAgZW5naW5lLm9uKFwibm90aWZpY2F0aW9uXCIsIG1lc3NhZ2UgPT4ge1xuICAgICAgc3RyZWFtLnB1c2gobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyZWFtO1xufVxuXG5jbGFzcyBTdWJzdHJlYW0gZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIHBhcmVudCxcbiAgICAgIG5hbWVcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcih7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcGFyZW50XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbmFtZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG4gIC8qKlxuICAgKiBFeHBsaWNpdGx5IHNldHMgcmVhZCBvcGVyYXRpb25zIHRvIGEgbm8tb3AuXG4gICAqL1xuXG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZGF0YSBzaG91bGQgYmUgd3JpdHRlbiB0byB0aGlzIHdyaXRhYmxlIHN0cmVhbS5cbiAgICpcbiAgICogQHBhcmFtIGNodW5rIC0gQXJiaXRyYXJ5IG9iamVjdCB0byB3cml0ZVxuICAgKiBAcGFyYW0gZW5jb2RpbmcgLSBFbmNvZGluZyB0byB1c2Ugd2hlbiB3cml0aW5nIHBheWxvYWRcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gQ2FsbGVkIHdoZW4gd3JpdGluZyBpcyBjb21wbGV0ZSBvciBhbiBlcnJvciBvY2N1cnNcbiAgICovXG5cblxuICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9wYXJlbnQucHVzaCh7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgZGF0YTogY2h1bmtcbiAgICB9KTtcblxuICAgIGNhbGxiYWNrKCk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgSUdOT1JFX1NVQlNUUkVBTSA9IFN5bWJvbChcIklHTk9SRV9TVUJTVFJFQU1cIik7XG5jbGFzcyBPYmplY3RNdWx0aXBsZXggZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgc3VwZXIoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcHRzKSwge30sIHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWVcbiAgICB9KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3Vic3RyZWFtc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0U3RyZWFtXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9zdWJzdHJlYW1zID0ge307XG4gIH1cblxuICBjcmVhdGVTdHJlYW0obmFtZSkge1xuICAgIC8vIHZhbGlkYXRlIG5hbWVcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIG5hbWUgbXVzdCBub3QgYmUgZW1wdHlcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIFN1YnN0cmVhbSBmb3IgbmFtZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBhbHJlYWR5IGV4aXN0c1wiKSk7XG4gICAgfSAvLyBjcmVhdGUgc3Vic3RyZWFtXG5cblxuICAgIGNvbnN0IHN1YnN0cmVhbSA9IG5ldyBTdWJzdHJlYW0oe1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZVxuICAgIH0pO1xuICAgIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0gPSBzdWJzdHJlYW07IC8vIGxpc3RlbiBmb3IgcGFyZW50IHN0cmVhbSB0byBlbmRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG5cbiAgICBhbnlTdHJlYW1FbmQodGhpcywgX2Vycm9yID0+IHN1YnN0cmVhbS5kZXN0cm95KF9lcnJvciB8fCB1bmRlZmluZWQpKTtcbiAgICByZXR1cm4gc3Vic3RyZWFtO1xuICB9IC8vIGlnbm9yZSBzdHJlYW1zIChkb250IGRpc3BsYXkgb3JwaGFuZWQgZGF0YSB3YXJuaW5nKVxuXG5cbiAgaWdub3JlU3RyZWFtKG5hbWUpIHtcbiAgICAvLyB2YWxpZGF0ZSBuYW1lXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBuYW1lIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdWJzdHJlYW1zW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBTdWJzdHJlYW0gZm9yIG5hbWUgXFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIgYWxyZWFkeSBleGlzdHNcIikpO1xuICAgIH0gLy8gc2V0XG5cblxuICAgIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0gPSBJR05PUkVfU1VCU1RSRUFNO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIF93cml0ZShjaHVuaywgX2VuY29kaW5nLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBkYXRhXG4gICAgfSA9IGNodW5rO1xuXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiT2JqZWN0TXVsdGlwbGV4IC0gbWFsZm9ybWVkIGNodW5rIHdpdGhvdXQgbmFtZSBcXFwiXCIuY29uY2F0KGNodW5rLCBcIlxcXCJcIikpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfSAvLyBnZXQgY29ycmVzcG9uZGluZyBzdWJzdHJlYW1cblxuXG4gICAgY29uc3Qgc3Vic3RyZWFtID0gdGhpcy5fc3Vic3RyZWFtc1tuYW1lXTtcblxuICAgIGlmICghc3Vic3RyZWFtKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiT2JqZWN0TXVsdGlwbGV4IC0gb3JwaGFuZWQgZGF0YSBmb3Igc3RyZWFtIFxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiXCIpKTtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0gLy8gcHVzaCBkYXRhIGludG8gc3Vic3RyZWFtXG5cblxuICAgIGlmIChzdWJzdHJlYW0gIT09IElHTk9SRV9TVUJTVFJFQU0pIHtcbiAgICAgIHN1YnN0cmVhbS5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG5cbn0gLy8gdXRpbFxuXG5mdW5jdGlvbiBhbnlTdHJlYW1FbmQoc3RyZWFtLCBfY2IpIHtcbiAgY29uc3QgY2IgPSBvbmNlKF9jYik7XG4gIGVvcyhzdHJlYW0sIHtcbiAgICByZWFkYWJsZTogZmFsc2VcbiAgfSwgY2IpO1xuICBlb3Moc3RyZWFtLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0sIGNiKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBNdWx0aXBsZXgoc3RyZWFtKSB7XG4gIGNvbnN0IG11eCA9IG5ldyBPYmplY3RNdWx0aXBsZXgoKTtcblxuICBtdXguZ2V0U3RyZWFtID0gZnVuY3Rpb24gc3RyZWFtSGVscGVyKG5hbWUpIHtcbiAgICBpZiAodGhpcy5fc3Vic3RyZWFtc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlU3RyZWFtKG5hbWUpO1xuICB9O1xuXG4gIHB1bXAoc3RyZWFtLCBtdXgsIHN0cmVhbSwgZXJyID0+IHtcbiAgICBpZiAoZXJyKSB3aW5kb3cuY29uc29sZS5lcnJvcihlcnIpO1xuICB9KTtcbiAgcmV0dXJuIG11eDtcbn1cblxuY2xhc3MgUG9zdE1lc3NhZ2VTdHJlYW0gZXh0ZW5kcyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0ge1xuICBfcG9zdE1lc3NhZ2UoZGF0YSkge1xuICAgIGxldCBvcmlnaW5Db25zdHJhaW50ID0gdGhpcy5fdGFyZ2V0T3JpZ2luO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCBkYXRhT2JqID0gZGF0YTtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhT2JqLmRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3QgZGF0YU9iakRhdGEgPSBkYXRhT2JqLmRhdGE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YU9iakRhdGEucGFyYW1zKSAmJiBkYXRhT2JqRGF0YS5wYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGRhdGFPYmpEYXRhUGFyYW0gPSBkYXRhT2JqRGF0YS5wYXJhbXNbMF07XG5cbiAgICAgICAgICBpZiAoZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luKSB7XG4gICAgICAgICAgICBvcmlnaW5Db25zdHJhaW50ID0gZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luO1xuICAgICAgICAgIH0gLy8gYWRkIGEgY29uc3RyYWludCBmb3IgdGhlIHJlc3BvbnNlXG5cblxuICAgICAgICAgIGRhdGFPYmpEYXRhUGFyYW0uX29yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgdGFyZ2V0OiB0aGlzLl90YXJnZXQsXG4gICAgICBkYXRhXG4gICAgfSwgb3JpZ2luQ29uc3RyYWludCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0sIElHTk9SRV9TVUJTVFJFQU0sIEpSUENFbmdpbmUsIE9iamVjdE11bHRpcGxleCwgUG9zdE1lc3NhZ2VTdHJlYW0sIFNhZmVFdmVudEVtaXR0ZXIsIFNlcmlhbGl6YWJsZUVycm9yLCBTdWJzdHJlYW0sIGNyZWF0ZUFzeW5jTWlkZGxld2FyZSwgY3JlYXRlRW5naW5lU3RyZWFtLCBjcmVhdGVFcnJvck1pZGRsZXdhcmUsIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlLCBjcmVhdGVMb2dnZXJNaWRkbGV3YXJlLCBjcmVhdGVTY2FmZm9sZE1pZGRsZXdhcmUsIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUsIGdldFJwY1Byb21pc2VDYWxsYmFjaywgbWVyZ2VNaWRkbGV3YXJlLCBzZXR1cE11bHRpcGxleCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3BlbmxvZ2luSnJwYy5lc20uanMubWFwXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3QuYmluZCgpO1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVGdW5jdGlvbiBmcm9tIFwiLi9pc05hdGl2ZUZ1bmN0aW9uLmpzXCI7XG5pbXBvcnQgY29uc3RydWN0IGZyb20gXCIuL2NvbnN0cnVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3InO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcml2YXRlLCBnZXRQdWJsaWMsIGRlY3J5cHQgfSBmcm9tICdAdG9ydXNsYWJzL2VjY3J5cHRvJztcbmltcG9ydCB7IHBvc3QsIGdlbmVyYXRlSnNvblJQQ09iamVjdCwgZ2V0LCBzZXRBUElLZXksIHNldEVtYmVkSG9zdCB9IGZyb20gJ0B0b3J1c2xhYnMvaHR0cC1oZWxwZXJzJztcbmltcG9ydCBCTiBmcm9tICdibi5qcyc7XG5pbXBvcnQgeyBlYyB9IGZyb20gJ2VsbGlwdGljJztcbmltcG9ydCBKc29uU3RyaW5naWZ5IGZyb20gJ2pzb24tc3RhYmxlLXN0cmluZ2lmeSc7XG5pbXBvcnQgeyB0b0NoZWNrc3VtQWRkcmVzcyB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuaW1wb3J0IGxvZ2xldmVsIGZyb20gJ2xvZ2xldmVsJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgX3dyYXBOYXRpdmVTdXBlciBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlcic7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0IGNyZWF0ZUtlY2Nha0hhc2ggZnJvbSAna2VjY2FrJztcblxudmFyIGxvZyA9IGxvZ2xldmVsLmdldExvZ2dlcihcInRvcnVzLmpzXCIpO1xubG9nLmRpc2FibGVBbGwoKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDEoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxudmFyIFNvbWVFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhTb21lRXJyb3IsIF9FcnJvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQxKFNvbWVFcnJvcik7XG5cbiAgZnVuY3Rpb24gU29tZUVycm9yKF9yZWYpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgZXJyb3JzID0gX3JlZi5lcnJvcnMsXG4gICAgICAgIHJlc3BvbnNlcyA9IF9yZWYucmVzcG9uc2VzLFxuICAgICAgICBwcmVkaWNhdGUgPSBfcmVmLnByZWRpY2F0ZTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb21lRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIlVuYWJsZSB0byByZXNvbHZlIGVub3VnaCBwcm9taXNlcy5cIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZXJyb3JzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzcG9uc2VzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJlZGljYXRlXCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgX3RoaXMucmVzcG9uc2VzID0gcmVzcG9uc2VzO1xuICAgIF90aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKFNvbWVFcnJvcik7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xudmFyIFNvbWUgPSBmdW5jdGlvbiBTb21lKHByb21pc2VzLCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZmluaXNoZWRDb3VudCA9IDA7XG4gICAgdmFyIHNoYXJlZFN0YXRlID0ge1xuICAgICAgcmVzb2x2ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICB2YXIgZXJyb3JBcnIgPSBuZXcgQXJyYXkocHJvbWlzZXMubGVuZ3RoKS5maWxsKHVuZGVmaW5lZCk7XG4gICAgdmFyIHJlc3VsdEFyciA9IG5ldyBBcnJheShwcm9taXNlcy5sZW5ndGgpLmZpbGwodW5kZWZpbmVkKTtcbiAgICB2YXIgcHJlZGljYXRlRXJyb3I7XG4gICAgcmV0dXJuIHByb21pc2VzLmZvckVhY2goZnVuY3Rpb24gKHgsIGluZGV4KSB7XG4gICAgICByZXR1cm4geC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIHJlc3VsdEFycltpbmRleF0gPSByZXNwO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGVycm9yQXJyW2luZGV4XSA9IGVycm9yO1xuICAgICAgfSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tcmV0dXJuLWluLWZpbmFsbHlcbiAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNoYXJlZFN0YXRlLnJlc29sdmVkKSByZXR1cm47XG4gICAgICAgIHJldHVybiBwcmVkaWNhdGUocmVzdWx0QXJyLnNsaWNlKDApLCBzaGFyZWRTdGF0ZSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHNoYXJlZFN0YXRlLnJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIC8vIGxvZyBvbmx5IHRoZSBsYXN0IHByZWRpY2F0ZSBlcnJvclxuICAgICAgICAgIHByZWRpY2F0ZUVycm9yID0gZXJyb3I7XG4gICAgICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZpbmlzaGVkQ291bnQgKz0gMTtcblxuICAgICAgICAgIGlmIChmaW5pc2hlZENvdW50ID09PSBwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBPYmplY3QudmFsdWVzKHJlc3VsdEFyci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgeikge1xuICAgICAgICAgICAgICBpZiAoeikge1xuICAgICAgICAgICAgICAgIHZhciBfZXJyb3IkZGF0YTtcblxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHouaWQsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gei5lcnJvcjtcblxuICAgICAgICAgICAgICAgIGlmICgoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXJyb3IkZGF0YSA9IGVycm9yLmRhdGEpID09PSBudWxsIHx8IF9lcnJvciRkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXJyb3IkZGF0YS5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmRhdGEuc3RhcnRzV2l0aChcIkVycm9yIG9jY3VycmVkIHdoaWxlIHZlcmlmeWluZyBwYXJhbXNcIikpIGFjY1tpZF0gPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZXJyb3IuZGF0YSk7ZWxzZSBhY2NbaWRdID0gZXJyb3IuZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pKTtcblxuICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIC8vIEZvcm1hdC1hYmxlIGVycm9yc1xuICAgICAgICAgICAgICB2YXIgbXNnID0gZXJyb3JzLmxlbmd0aCA+IDEgPyBcIlxcblwiLmNvbmNhdChlcnJvcnMubWFwKGZ1bmN0aW9uIChpdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlxcdTIwMjIgXCIuY29uY2F0KGl0KTtcbiAgICAgICAgICAgICAgfSkuam9pbihcIlxcblwiKSkgOiBlcnJvcnNbMF07XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IobXNnKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgX3ByZWRpY2F0ZUVycm9yO1xuXG4gICAgICAgICAgICAgIHJlamVjdChuZXcgU29tZUVycm9yKHtcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9yQXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlczogcmVzdWx0QXJyLFxuICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogKChfcHJlZGljYXRlRXJyb3IgPSBwcmVkaWNhdGVFcnJvcikgPT09IG51bGwgfHwgX3ByZWRpY2F0ZUVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJlZGljYXRlRXJyb3IubWVzc2FnZSkgfHwgcHJlZGljYXRlRXJyb3JcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxudmFyIEdldE9yU2V0Tm9uY2VFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhHZXRPclNldE5vbmNlRXJyb3IsIF9FcnJvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihHZXRPclNldE5vbmNlRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIEdldE9yU2V0Tm9uY2VFcnJvcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2V0T3JTZXROb25jZUVycm9yKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoR2V0T3JTZXROb25jZUVycm9yKTtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG52YXIga0NvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uIGtDb21iaW5hdGlvbnMocywgaykge1xuICB2YXIgc2V0ID0gcztcblxuICBpZiAodHlwZW9mIHNldCA9PT0gXCJudW1iZXJcIikge1xuICAgIHNldCA9IEFycmF5LmZyb20oe1xuICAgICAgbGVuZ3RoOiBzZXRcbiAgICB9LCBmdW5jdGlvbiAoXywgaSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoayA+IHNldC5sZW5ndGggfHwgayA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgaWYgKGsgPT09IHNldC5sZW5ndGgpIHtcbiAgICByZXR1cm4gW3NldF07XG4gIH1cblxuICBpZiAoayA9PT0gMSkge1xuICAgIHJldHVybiBzZXQucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYWNjKSwgW1tjdXJdXSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgdmFyIGNvbWJzID0gW107XG4gIHZhciB0YWlsQ29tYnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBzZXQubGVuZ3RoIC0gayArIDE7IGkgKz0gMSkge1xuICAgIHRhaWxDb21icyA9IGtDb21iaW5hdGlvbnMoc2V0LnNsaWNlKGkgKyAxKSwgayAtIDEpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0YWlsQ29tYnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbWJzLnB1c2goW3NldFtpXV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0YWlsQ29tYnNbal0pKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbWJzO1xufTtcbnZhciB0aHJlc2hvbGRTYW1lID0gZnVuY3Rpb24gdGhyZXNob2xkU2FtZShhcnIsIHQpIHtcbiAgdmFyIGhhc2hNYXAgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBzdHIgPSBKc29uU3RyaW5naWZ5KGFycltpXSk7XG4gICAgaGFzaE1hcFtzdHJdID0gaGFzaE1hcFtzdHJdID8gaGFzaE1hcFtzdHJdICsgMSA6IDE7XG5cbiAgICBpZiAoaGFzaE1hcFtzdHJdID09PSB0KSB7XG4gICAgICByZXR1cm4gYXJyW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xudmFyIGtleUxvb2t1cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKSB7XG4gICAgdmFyIGxvb2t1cFByb21pc2VzO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBsb29rdXBQcm9taXNlcyA9IGVuZHBvaW50cy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBvc3QoeCwgZ2VuZXJhdGVKc29uUlBDT2JqZWN0KFwiVmVyaWZpZXJMb29rdXBSZXF1ZXN0XCIsIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgdmVyaWZpZXJfaWQ6IHZlcmlmaWVySWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2cuZXJyb3IoXCJsb29rdXAgcmVxdWVzdCBmYWlsZWRcIiwgZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgU29tZShsb29rdXBQcm9taXNlcywgZnVuY3Rpb24gKGxvb2t1cFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgdmFyIGxvb2t1cFNoYXJlcyA9IGxvb2t1cFJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uICh4MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4MTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHZhciBlcnJvclJlc3VsdCA9IHRocmVzaG9sZFNhbWUobG9va3VwU2hhcmVzLm1hcChmdW5jdGlvbiAoeDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDIgJiYgeDIuZXJyb3I7XG4gICAgICAgICAgICAgIH0pLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTtcbiAgICAgICAgICAgICAgdmFyIGtleVJlc3VsdCA9IHRocmVzaG9sZFNhbWUobG9va3VwU2hhcmVzLm1hcChmdW5jdGlvbiAoeDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDMgJiYgeDMucmVzdWx0O1xuICAgICAgICAgICAgICB9KSwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7XG5cbiAgICAgICAgICAgICAgaWYgKGtleVJlc3VsdCB8fCBlcnJvclJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAga2V5UmVzdWx0OiBrZXlSZXN1bHQsXG4gICAgICAgICAgICAgICAgICBlcnJvclJlc3VsdDogZXJyb3JSZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIHJlc3VsdHMgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGxvb2t1cFJlc3VsdHMpKSkpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBrZXlMb29rdXAoX3gsIF94MiwgX3gzKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcbnZhciB3YWl0S2V5TG9va3VwID0gZnVuY3Rpb24gd2FpdEtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkLCB0aW1lb3V0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBrZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9KTtcbn07XG52YXIga2V5QXNzaWduID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoX3JlZjIpIHtcbiAgICB2YXIgZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCBsYXN0UG9pbnQsIGZpcnN0UG9pbnQsIHZlcmlmaWVyLCB2ZXJpZmllcklkLCBzaWduZXJIb3N0LCBuZXR3b3JrLCBub2RlTnVtLCBpbml0aWFsUG9pbnQsIGRhdGEsIHNpZ25lZERhdGEsIGFjY2VwdGVkRXJyb3JNc2dzO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZW5kcG9pbnRzID0gX3JlZjIuZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzID0gX3JlZjIudG9ydXNOb2RlUHVicywgbGFzdFBvaW50ID0gX3JlZjIubGFzdFBvaW50LCBmaXJzdFBvaW50ID0gX3JlZjIuZmlyc3RQb2ludCwgdmVyaWZpZXIgPSBfcmVmMi52ZXJpZmllciwgdmVyaWZpZXJJZCA9IF9yZWYyLnZlcmlmaWVySWQsIHNpZ25lckhvc3QgPSBfcmVmMi5zaWduZXJIb3N0LCBuZXR3b3JrID0gX3JlZjIubmV0d29yaztcblxuICAgICAgICAgICAgaWYgKGxhc3RQb2ludCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG5vZGVOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmRwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgaW5pdGlhbFBvaW50ID0gbm9kZU51bTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVOdW0gPSBsYXN0UG9pbnQgJSBlbmRwb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShub2RlTnVtID09PSBmaXJzdFBvaW50KSkge1xuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb29wZWQgdGhyb3VnaCBhbGxcIik7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBpZiAoZmlyc3RQb2ludCAhPT0gdW5kZWZpbmVkKSBpbml0aWFsUG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICAgICAgZGF0YSA9IGdlbmVyYXRlSnNvblJQQ09iamVjdChcIktleUFzc2lnblwiLCB7XG4gICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgdmVyaWZpZXJfaWQ6IHZlcmlmaWVySWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDY7XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDk7XG4gICAgICAgICAgICByZXR1cm4gcG9zdChzaWduZXJIb3N0LCBkYXRhLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBwdWJLZXlYOiB0b3J1c05vZGVQdWJzW25vZGVOdW1dLlgsXG4gICAgICAgICAgICAgICAgcHViS2V5WTogdG9ydXNOb2RlUHVic1tub2RlTnVtXS5ZLFxuICAgICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgc2lnbmVkRGF0YSA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxMjtcbiAgICAgICAgICAgIHJldHVybiBwb3N0KGVuZHBvaW50c1tub2RlTnVtXSwgX29iamVjdFNwcmVhZCQxKF9vYmplY3RTcHJlYWQkMSh7fSwgZGF0YSksIHNpZ25lZERhdGEpLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDIuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAxNTtcbiAgICAgICAgICAgIF9jb250ZXh0Mi50MCA9IF9jb250ZXh0MltcImNhdGNoXCJdKDYpO1xuICAgICAgICAgICAgbG9nLmVycm9yKF9jb250ZXh0Mi50MCk7XG4gICAgICAgICAgICBhY2NlcHRlZEVycm9yTXNncyA9IFsvLyBTbG93IG5vZGVcbiAgICAgICAgICAgIFwiVGltZWQgb3V0XCIsIC8vIEhhcHBlbnMgd2hlbiB0aGUgbm9kZSBpcyBub3QgcmVhY2hhYmxlIChkbnMgaXNzdWUgZXRjKVxuICAgICAgICAgICAgXCJUeXBlRXJyb3I6IEZhaWxlZCB0byBmZXRjaFwiLCBcIlR5cGVFcnJvcjogY2FuY2VsbGVkXCIsIFwiVHlwZUVycm9yOiBOZXR3b3JrRXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGZldGNoIHJlc291cmNlLlwiIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmICghYWNjZXB0ZWRFcnJvck1zZ3MuaW5jbHVkZXMoX2NvbnRleHQyLnQwLm1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBrZXlBc3NpZ24oe1xuICAgICAgICAgICAgICBlbmRwb2ludHM6IGVuZHBvaW50cyxcbiAgICAgICAgICAgICAgdG9ydXNOb2RlUHViczogdG9ydXNOb2RlUHVicyxcbiAgICAgICAgICAgICAgbGFzdFBvaW50OiBub2RlTnVtICsgMSxcbiAgICAgICAgICAgICAgZmlyc3RQb2ludDogaW5pdGlhbFBvaW50LFxuICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgIHZlcmlmaWVySWQ6IHZlcmlmaWVySWQsXG4gICAgICAgICAgICAgIHNpZ25lckhvc3Q6IHNpZ25lckhvc3QsXG4gICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb3JyeSwgdGhlIFRvcnVzIE5ldHdvcmsgdGhhdCBwb3dlcnMgV2ViM0F1dGggaXMgY3VycmVudGx5IHZlcnkgYnVzeS5cXG4gICAgV2Ugd2lsbCBnZW5lcmF0ZSB5b3VyIGtleSBpbiB0aW1lLiBQbHMgdHJ5IGFnYWluIGxhdGVyLiBcXG5cXG4gICAgXCIuY29uY2F0KF9jb250ZXh0Mi50MC5tZXNzYWdlIHx8IFwiXCIpKTtcblxuICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMiwgbnVsbCwgW1s2LCAxNV1dKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBrZXlBc3NpZ24oX3g0KSB7XG4gICAgcmV0dXJuIF9yZWYzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5mdW5jdGlvbiBrZWNjYWsyNTYoYSkge1xuICB2YXIgaGFzaCA9IGNyZWF0ZUtlY2Nha0hhc2goXCJrZWNjYWsyNTZcIikudXBkYXRlKGEpLmRpZ2VzdCgpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICByZXR1cm4gXCIweFwiLmNvbmNhdChoYXNoKTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbi8vIG9mIFRvcnVzIG5vZGVzIHRvIGhhbmRsZSBtYWxpY2lvdXMgbm9kZSByZXNwb25zZXNcblxudmFyIFRvcnVzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVG9ydXMoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJGVuYWJsZU9uZUtleSA9IF9yZWYuZW5hYmxlT25lS2V5LFxuICAgICAgICBlbmFibGVPbmVLZXkgPSBfcmVmJGVuYWJsZU9uZUtleSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGVuYWJsZU9uZUtleSxcbiAgICAgICAgX3JlZiRtZXRhZGF0YUhvc3QgPSBfcmVmLm1ldGFkYXRhSG9zdCxcbiAgICAgICAgbWV0YWRhdGFIb3N0ID0gX3JlZiRtZXRhZGF0YUhvc3QgPT09IHZvaWQgMCA/IFwiaHR0cHM6Ly9tZXRhZGF0YS50b3IudXNcIiA6IF9yZWYkbWV0YWRhdGFIb3N0LFxuICAgICAgICBfcmVmJGFsbG93SG9zdCA9IF9yZWYuYWxsb3dIb3N0LFxuICAgICAgICBhbGxvd0hvc3QgPSBfcmVmJGFsbG93SG9zdCA9PT0gdm9pZCAwID8gXCJodHRwczovL3NpZ25lci50b3IudXMvYXBpL2FsbG93XCIgOiBfcmVmJGFsbG93SG9zdCxcbiAgICAgICAgX3JlZiRzaWduZXJIb3N0ID0gX3JlZi5zaWduZXJIb3N0LFxuICAgICAgICBzaWduZXJIb3N0ID0gX3JlZiRzaWduZXJIb3N0ID09PSB2b2lkIDAgPyBcImh0dHBzOi8vc2lnbmVyLnRvci51cy9hcGkvc2lnblwiIDogX3JlZiRzaWduZXJIb3N0LFxuICAgICAgICBfcmVmJHNlcnZlclRpbWVPZmZzZXQgPSBfcmVmLnNlcnZlclRpbWVPZmZzZXQsXG4gICAgICAgIHNlcnZlclRpbWVPZmZzZXQgPSBfcmVmJHNlcnZlclRpbWVPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfcmVmJHNlcnZlclRpbWVPZmZzZXQsXG4gICAgICAgIF9yZWYkbmV0d29yayA9IF9yZWYubmV0d29yayxcbiAgICAgICAgbmV0d29yayA9IF9yZWYkbmV0d29yayA9PT0gdm9pZCAwID8gXCJtYWlubmV0XCIgOiBfcmVmJG5ldHdvcms7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9ydXMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFIb3N0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGxvd0hvc3RcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlcnZlclRpbWVPZmZzZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuYWJsZU9uZUtleVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2lnbmVySG9zdFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmV0d29ya1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZWNcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuZWMgPSBuZXcgZWMoXCJzZWNwMjU2azFcIik7XG4gICAgdGhpcy5tZXRhZGF0YUhvc3QgPSBtZXRhZGF0YUhvc3Q7XG4gICAgdGhpcy5hbGxvd0hvc3QgPSBhbGxvd0hvc3Q7XG4gICAgdGhpcy5lbmFibGVPbmVLZXkgPSBlbmFibGVPbmVLZXk7XG4gICAgdGhpcy5zZXJ2ZXJUaW1lT2Zmc2V0ID0gc2VydmVyVGltZU9mZnNldCB8fCAwOyAvLyBtc1xuXG4gICAgdGhpcy5zaWduZXJIb3N0ID0gc2lnbmVySG9zdDtcbiAgICB0aGlzLm5ldHdvcmsgPSBuZXR3b3JrO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRvcnVzLCBbe1xuICAgIGtleTogXCJnZXRVc2VyVHlwZUFuZEFkZHJlc3NcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBOb3RlOiB1c2UgdGhpcyBmdW5jdGlvbiBvbmx5IGZvciBvcGVubG9naW4gdGtleSBhY2NvdW50IGxvb2t1cHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRVc2VyVHlwZUFuZEFkZHJlc3MgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywgX3JlZjIpIHtcbiAgICAgICAgdmFyIHZlcmlmaWVyLFxuICAgICAgICAgICAgdmVyaWZpZXJJZCxcbiAgICAgICAgICAgIGRvZXNLZXlBc3NpZ24sXG4gICAgICAgICAgICBfcmVmMyxcbiAgICAgICAgICAgIGtleVJlc3VsdCxcbiAgICAgICAgICAgIGVycm9yUmVzdWx0LFxuICAgICAgICAgICAgaXNOZXdLZXksXG4gICAgICAgICAgICBmaW5hbEtleVJlc3VsdCxcbiAgICAgICAgICAgIGFzc2lnblJlc3VsdCxcbiAgICAgICAgICAgIF9maW5hbEtleVJlc3VsdCRrZXlzJCxcbiAgICAgICAgICAgIFgsXG4gICAgICAgICAgICBZLFxuICAgICAgICAgICAgbm9uY2VSZXN1bHQsXG4gICAgICAgICAgICBub25jZSxcbiAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5LFxuICAgICAgICAgICAgZmluYWxYLFxuICAgICAgICAgICAgZmluYWxZLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIF9hcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdmVyaWZpZXIgPSBfcmVmMi52ZXJpZmllciwgdmVyaWZpZXJJZCA9IF9yZWYyLnZlcmlmaWVySWQ7XG4gICAgICAgICAgICAgICAgZG9lc0tleUFzc2lnbiA9IF9hcmdzLmxlbmd0aCA+IDMgJiYgX2FyZ3NbM10gIT09IHVuZGVmaW5lZCA/IF9hcmdzWzNdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9jb250ZXh0LnQwKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0ge307XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIF9yZWYzID0gX2NvbnRleHQudDA7XG4gICAgICAgICAgICAgICAga2V5UmVzdWx0ID0gX3JlZjMua2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gX3JlZjMuZXJyb3JSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmICghKGVycm9yUmVzdWx0ICYmIEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0KS5pbmNsdWRlcyhcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRvZXNLZXlBc3NpZ24pIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlBc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgZW5kcG9pbnRzOiBlbmRwb2ludHMsXG4gICAgICAgICAgICAgICAgICB0b3J1c05vZGVQdWJzOiB0b3J1c05vZGVQdWJzLFxuICAgICAgICAgICAgICAgICAgbGFzdFBvaW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBmaXJzdFBvaW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcklkOiB2ZXJpZmllcklkLFxuICAgICAgICAgICAgICAgICAgc2lnbmVySG9zdDogdGhpcy5zaWduZXJIb3N0LFxuICAgICAgICAgICAgICAgICAgbmV0d29yazogdGhpcy5uZXR3b3JrXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhaXRLZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICBhc3NpZ25SZXN1bHQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0ID0gYXNzaWduUmVzdWx0ID09PSBudWxsIHx8IGFzc2lnblJlc3VsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXNzaWduUmVzdWx0LmtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBpc05ld0tleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgICAgaWYgKCFrZXlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0ID0ga2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyODtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmlyc3QgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgICAgIGlmICghZmluYWxLZXlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1ODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9maW5hbEtleVJlc3VsdCRrZXlzJCA9IGZpbmFsS2V5UmVzdWx0LmtleXNbMF0sIFggPSBfZmluYWxLZXlSZXN1bHQka2V5cyQucHViX2tleV9YLCBZID0gX2ZpbmFsS2V5UmVzdWx0JGtleXMkLnB1Yl9rZXlfWTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMzA7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDMzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9yU2V0Tm9uY2UoWCwgWSwgdW5kZWZpbmVkLCAhaXNOZXdLZXkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICAgICAgbm9uY2VSZXN1bHQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIG5vbmNlID0gbmV3IEJOKG5vbmNlUmVzdWx0Lm5vbmNlIHx8IFwiMFwiLCAxNik7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDM3O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQxID0gX2NvbnRleHRbXCJjYXRjaFwiXSgzMCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdldE9yU2V0Tm9uY2VFcnJvcigpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgaWYgKCEobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ0O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgIHk6IFlcbiAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHJpdmF0ZShub25jZS50b1N0cmluZygxNikpLmdldFB1YmxpYygpKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBpZiAoIShub25jZVJlc3VsdC50eXBlT2ZVc2VyID09PSBcInYyXCIpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDg7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgeDogbm9uY2VSZXN1bHQucHViTm9uY2UueCxcbiAgICAgICAgICAgICAgICAgIHk6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLnlcbiAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDg6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0T3JTZXROb25jZSBzaG91bGQgYWx3YXlzIHJldHVybiB0eXBlT2ZVc2VyLlwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ5OlxuICAgICAgICAgICAgICAgIGZpbmFsWCA9IG1vZGlmaWVkUHViS2V5LmdldFgoKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgZmluYWxZID0gbW9kaWZpZWRQdWJLZXkuZ2V0WSgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzID0gdGhpcy5nZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5KG1vZGlmaWVkUHViS2V5LmdldFgoKSwgbW9kaWZpZWRQdWJLZXkuZ2V0WSgpKTtcblxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjFcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1NjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgdHlwZU9mVXNlcjogbm9uY2VSZXN1bHQudHlwZU9mVXNlcixcbiAgICAgICAgICAgICAgICAgIG5vbmNlOiBub25jZSxcbiAgICAgICAgICAgICAgICAgIFg6IGZpbmFsWCxcbiAgICAgICAgICAgICAgICAgIFk6IGZpbmFsWSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjJcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1ODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgdHlwZU9mVXNlcjogbm9uY2VSZXN1bHQudHlwZU9mVXNlcixcbiAgICAgICAgICAgICAgICAgIG5vbmNlOiBub25jZSxcbiAgICAgICAgICAgICAgICAgIHB1Yk5vbmNlOiBub25jZVJlc3VsdC5wdWJOb25jZSxcbiAgICAgICAgICAgICAgICAgIHVwZ3JhZGVkOiBub25jZVJlc3VsdC51cGdyYWRlZCxcbiAgICAgICAgICAgICAgICAgIFg6IGZpbmFsWCxcbiAgICAgICAgICAgICAgICAgIFk6IGZpbmFsWSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmluYWwgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMsIFtbMzAsIDM3XV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRVc2VyVHlwZUFuZEFkZHJlc3MoX3gsIF94MiwgX3gzKSB7XG4gICAgICAgIHJldHVybiBfZ2V0VXNlclR5cGVBbmRBZGRyZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRVc2VyVHlwZUFuZEFkZHJlc3M7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0Q3VzdG9tS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc2V0Q3VzdG9tS2V5ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoX3JlZjQpIHtcbiAgICAgICAgdmFyIHByaXZLZXlIZXgsIG1ldGFkYXRhTm9uY2UsIHRvcnVzS2V5SGV4LCBjdXN0b21LZXlIZXgsIHRvcnVzS2V5LCBwcml2S2V5LCBjdXN0b21LZXksIG5ld01ldGFkYXRhTm9uY2UsIGRhdGE7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHByaXZLZXlIZXggPSBfcmVmNC5wcml2S2V5SGV4LCBtZXRhZGF0YU5vbmNlID0gX3JlZjQubWV0YWRhdGFOb25jZSwgdG9ydXNLZXlIZXggPSBfcmVmNC50b3J1c0tleUhleCwgY3VzdG9tS2V5SGV4ID0gX3JlZjQuY3VzdG9tS2V5SGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvcnVzS2V5SGV4KSB7XG4gICAgICAgICAgICAgICAgICB0b3J1c0tleSA9IG5ldyBCTih0b3J1c0tleUhleCwgMTYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwcml2S2V5ID0gbmV3IEJOKHByaXZLZXlIZXgsIDE2KTtcbiAgICAgICAgICAgICAgICAgIHRvcnVzS2V5ID0gcHJpdktleS5zdWIobWV0YWRhdGFOb25jZSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1c3RvbUtleSA9IG5ldyBCTihjdXN0b21LZXlIZXgsIDE2KTtcbiAgICAgICAgICAgICAgICBuZXdNZXRhZGF0YU5vbmNlID0gY3VzdG9tS2V5LnN1Yih0b3J1c0tleSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobmV3TWV0YWRhdGFOb25jZS50b1N0cmluZygxNiksIHRvcnVzS2V5KTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0TWV0YWRhdGEoZGF0YSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMiwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHNldEN1c3RvbUtleShfeDQpIHtcbiAgICAgICAgcmV0dXJuIF9zZXRDdXN0b21LZXkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldEN1c3RvbUtleTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJyZXRyaWV2ZVNoYXJlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JldHJpZXZlU2hhcmVzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUoZW5kcG9pbnRzLCBpbmRleGVzLCB2ZXJpZmllciwgdmVyaWZpZXJQYXJhbXMsIGlkVG9rZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgZXh0cmFQYXJhbXMsXG4gICAgICAgICAgICBwcm9taXNlQXJyLFxuICAgICAgICAgICAgdG1wS2V5LFxuICAgICAgICAgICAgcHViS2V5LFxuICAgICAgICAgICAgcHViS2V5WCxcbiAgICAgICAgICAgIHB1YktleVksXG4gICAgICAgICAgICB0b2tlbkNvbW1pdG1lbnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIF9hcmdzNSA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNSQoX2NvbnRleHQ1KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1LnByZXYgPSBfY29udGV4dDUubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZXh0cmFQYXJhbXMgPSBfYXJnczUubGVuZ3RoID4gNSAmJiBfYXJnczVbNV0gIT09IHVuZGVmaW5lZCA/IF9hcmdzNVs1XSA6IHt9O1xuICAgICAgICAgICAgICAgIHByb21pc2VBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldCh0aGlzLmFsbG93SG9zdCwge1xuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICAgIHZlcmlmaWVyX2lkOiB2ZXJpZmllclBhcmFtcy52ZXJpZmllcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yazogdGhpcy5uZXR3b3JrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICBDb21taXRtZW50UmVxdWVzdFBhcmFtcyBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlUHJlZml4ICAgICAgc3RyaW5nIGBqc29uOlwibWVzc2FnZXByZWZpeFwiYFxuICAgICAgICAgICAgICAgICAgICBUb2tlbkNvbW1pdG1lbnQgICAgc3RyaW5nIGBqc29uOlwidG9rZW5jb21taXRtZW50XCJgXG4gICAgICAgICAgICAgICAgICAgIFRlbXBQdWJYICAgICAgICAgICBzdHJpbmcgYGpzb246XCJ0ZW1wcHVieFwiYFxuICAgICAgICAgICAgICAgICAgICBUZW1wUHViWSAgICAgICAgICAgc3RyaW5nIGBqc29uOlwidGVtcHB1YnlcImBcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpZXJJZGVudGlmaWVyIHN0cmluZyBganNvbjpcInZlcmlmaWVyaWRlbnRpZmllclwiYFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAvLyBnZW5lcmF0ZSB0ZW1wb3JhcnkgcHJpdmF0ZSBhbmQgcHVibGljIGtleSB0aGF0IGlzIHVzZWQgdG8gc2VjdXJlIHJlY2VpdmUgc2hhcmVzXG4gICAgICAgICAgICAgICAgdG1wS2V5ID0gZ2VuZXJhdGVQcml2YXRlKCk7XG4gICAgICAgICAgICAgICAgcHViS2V5ID0gZ2V0UHVibGljKHRtcEtleSkudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgcHViS2V5WCA9IHB1YktleS5zbGljZSgyLCA2Nik7XG4gICAgICAgICAgICAgICAgcHViS2V5WSA9IHB1YktleS5zbGljZSg2Nik7XG4gICAgICAgICAgICAgICAgdG9rZW5Db21taXRtZW50ID0ga2VjY2FrMjU2KGlkVG9rZW4pOyAvLyBtYWtlIGNvbW1pdG1lbnQgcmVxdWVzdHMgdG8gZW5kcG9pbnRzXG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5kcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBwID0gcG9zdChlbmRwb2ludHNbaV0sIGdlbmVyYXRlSnNvblJQQ09iamVjdChcIkNvbW1pdG1lbnRSZXF1ZXN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXByZWZpeDogXCJtdWcwMFwiLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbmNvbW1pdG1lbnQ6IHRva2VuQ29tbWl0bWVudC5zbGljZSgyKSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcHB1Yng6IHB1YktleVgsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBwdWJ5OiBwdWJLZXlZLFxuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcmlkZW50aWZpZXI6IHZlcmlmaWVyXG4gICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJjb21taXRtZW50XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHByb21pc2VBcnIucHVzaChwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIFNoYXJlUmVxdWVzdFBhcmFtcyBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBJdGVtIFtdYmlqc29uLlJhd01lc3NhZ2UgYGpzb246XCJpdGVtXCJgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBTaGFyZVJlcXVlc3RJdGVtIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIElEVG9rZW4gICAgICAgICAgICBzdHJpbmcgICAgICAgICAgYGpzb246XCJpZHRva2VuXCJgXG4gICAgICAgICAgICAgICAgICAgIE5vZGVTaWduYXR1cmVzICAgICBbXU5vZGVTaWduYXR1cmUgYGpzb246XCJub2Rlc2lnbmF0dXJlc1wiYFxuICAgICAgICAgICAgICAgICAgICBWZXJpZmllcklkZW50aWZpZXIgc3RyaW5nICAgICAgICAgIGBqc29uOlwidmVyaWZpZXJpZGVudGlmaWVyXCJgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBOb2RlU2lnbmF0dXJlIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIFNpZ25hdHVyZSAgIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBEYXRhICAgICAgICBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgTm9kZVB1YktleVggc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIE5vZGVQdWJLZXlZIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQ29tbWl0bWVudFJlcXVlc3RSZXN1bHQgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgU2lnbmF0dXJlIHN0cmluZyBganNvbjpcInNpZ25hdHVyZVwiYFxuICAgICAgICAgICAgICAgICAgICBEYXRhICAgICAgc3RyaW5nIGBqc29uOlwiZGF0YVwiYFxuICAgICAgICAgICAgICAgICAgICBOb2RlUHViWCAgc3RyaW5nIGBqc29uOlwibm9kZXB1YnhcImBcbiAgICAgICAgICAgICAgICAgICAgTm9kZVB1YlkgIHN0cmluZyBganNvbjpcIm5vZGVwdWJ5XCJgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIHNlbmQgc2hhcmUgcmVxdWVzdCBvbmNlIGsgKyB0IG51bWJlciBvZiBjb21taXRtZW50IHJlcXVlc3RzIGhhdmUgY29tcGxldGVkXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIsIFNvbWUocHJvbWlzZUFyciwgZnVuY3Rpb24gKHJlc3VsdEFycikge1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlZFJlcXVlc3RzID0gcmVzdWx0QXJyLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXggfHwgX3R5cGVvZih4KSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh4LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZFJlcXVlc3RzLmxlbmd0aCA+PSB+fihlbmRwb2ludHMubGVuZ3RoIC8gNCkgKiAzICsgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdEFycik7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShyZXN1bHRBcnIpKSkpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlcykge1xuICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2VBcnJSZXF1ZXN0ID0gW107XG4gICAgICAgICAgICAgICAgICB2YXIgbm9kZVNpZ3MgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHJlc3BvbnNlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1tfaV0pIG5vZGVTaWdzLnB1c2gocmVzcG9uc2VzW19pXS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBlbmRwb2ludHMubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9uby1uZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcCA9IHBvc3QoZW5kcG9pbnRzW19pMl0sIGdlbmVyYXRlSnNvblJQQ09iamVjdChcIlNoYXJlUmVxdWVzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkOiBcInllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFtfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZlcmlmaWVyUGFyYW1zKSwge30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkdG9rZW46IGlkVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc2lnbmF0dXJlczogbm9kZVNpZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcmlkZW50aWZpZXI6IHZlcmlmaWVyXG4gICAgICAgICAgICAgICAgICAgICAgfSwgZXh0cmFQYXJhbXMpXVxuICAgICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2cuZXJyb3IoXCJzaGFyZSByZXFcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUFyclJlcXVlc3QucHVzaChfcCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBTb21lKHByb21pc2VBcnJSZXF1ZXN0LCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMyhzaGFyZVJlc3BvbnNlcywgc2hhcmVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGVkUmVxdWVzdHMsIHRocmVzaG9sZFB1YmxpY0tleSwgc2hhcmVQcm9taXNlcywgbm9kZUluZGV4ZXMsIF9pMywgX2N1cnJlbnRTaGFyZVJlc3BvbnNlLCBfY3VycmVudFNoYXJlUmVzcG9uc2UyLCBjdXJyZW50U2hhcmVSZXNwb25zZSwgZmlyc3RLZXksIG1ldGFkYXRhLCBzaGFyZXNSZXNvbHZlZCwgZGVjcnlwdGVkU2hhcmVzLCBhbGxDb21iaXMsIHByaXZhdGVLZXksIF9sb29wLCBqLCBfcmV0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNoYXJlUmVxdWVzdFJlc3VsdCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2V5cyBbXUtleUFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIEtleUFzc2lnbm1lbnRQdWJsaWMgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgS2V5QXNzaWdubWVudFB1YmxpYyBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXggICAgIGJpZy5JbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1YmxpY0tleSBjb21tb24uUG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRocmVzaG9sZCBpbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcmlmaWVycyBtYXBbc3RyaW5nXVtdc3RyaW5nIC8vIFZlcmlmaWVyID0+IFZlcmlmaWVySURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtleUFzc2lnbm1lbnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgS2V5QXNzaWdubWVudCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2V5QXNzaWdubWVudFB1YmxpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hhcmUgYmlnLkludCAvLyBPciBTaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRocmVzaG9sZCBudW1iZXIgb2Ygbm9kZXMgaGF2ZSByZXR1cm5lZCB0aGUgc2FtZSB1c2VyIHB1YmxpYyBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFJlcXVlc3RzID0gc2hhcmVSZXNwb25zZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRQdWJsaWNLZXkgPSB0aHJlc2hvbGRTYW1lKHNoYXJlUmVzcG9uc2VzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geCAmJiB4LnJlc3VsdCAmJiB4LnJlc3VsdC5rZXlzWzBdLlB1YmxpY0tleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTsgLy8gb3B0aW1pc3RpY2FsbHkgcnVuIGxhZ3JhbmdlIGludGVycG9sYXRpb24gb25jZSB0aHJlc2hvbGQgbnVtYmVyIG9mIHNoYXJlcyBoYXZlIGJlZW4gcmVjZWl2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbWF0Y2hlZCBhZ2FpbnN0IHRoZSB1c2VyIHB1YmxpYyBrZXkgdG8gZW5zdXJlIHRoYXQgc2hhcmVzIGFyZSBjb25zaXN0ZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGNvbXBsZXRlZFJlcXVlc3RzLmxlbmd0aCA+PSB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxICYmIHRocmVzaG9sZFB1YmxpY0tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJbmRleGVzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kzID0gMDsgX2kzIDwgc2hhcmVSZXNwb25zZXMubGVuZ3RoOyBfaTMgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hhcmVSZXNwb25zZSA9IHNoYXJlUmVzcG9uc2VzW19pM107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjdXJyZW50U2hhcmVSZXNwb25zZSA9PT0gbnVsbCB8fCBjdXJyZW50U2hhcmVSZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9jdXJyZW50U2hhcmVSZXNwb25zZSA9IGN1cnJlbnRTaGFyZVJlc3BvbnNlLnJlc3VsdCkgPT09IG51bGwgfHwgX2N1cnJlbnRTaGFyZVJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2N1cnJlbnRTaGFyZVJlc3BvbnNlMiA9IF9jdXJyZW50U2hhcmVSZXNwb25zZS5rZXlzKSA9PT0gbnVsbCB8fCBfY3VycmVudFNoYXJlUmVzcG9uc2UyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY3VycmVudFNoYXJlUmVzcG9uc2UyLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoYXJlUmVzcG9uc2UucmVzdWx0LmtleXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCTihhLkluZGV4LCAxNikuY21wKG5ldyBCTihiLkluZGV4LCAxNikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0S2V5ID0gY3VycmVudFNoYXJlUmVzcG9uc2UucmVzdWx0LmtleXNbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RLZXkuTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcGhlbVB1YmxpY0tleTogQnVmZmVyLmZyb20oZmlyc3RLZXkuTWV0YWRhdGEuZXBoZW1QdWJsaWNLZXksIFwiaGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdjogQnVmZmVyLmZyb20oZmlyc3RLZXkuTWV0YWRhdGEuaXYsIFwiaGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWM6IEJ1ZmZlci5mcm9tKGZpcnN0S2V5Lk1ldGFkYXRhLm1hYywgXCJoZXhcIikgLy8gbW9kZTogQnVmZmVyLmZyb20oZmlyc3RLZXkuTWV0YWRhdGEubW9kZSwgXCJoZXhcIiksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVByb21pc2VzLnB1c2goIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL25vLW5lc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHQodG1wS2V5LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1ldGFkYXRhKSwge30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lwaGVydGV4dDogQnVmZmVyLmZyb20oQnVmZmVyLmZyb20oZmlyc3RLZXkuU2hhcmUsIFwiYmFzZTY0XCIpLnRvU3RyaW5nKFwiYmluYXJ5XCIpLnBhZFN0YXJ0KDY0LCBcIjBcIiksIFwiaGV4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9nLmRlYnVnKFwic2hhcmUgZGVjcnlwdGlvblwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKEJ1ZmZlci5mcm9tKGZpcnN0S2V5LlNoYXJlLnBhZFN0YXJ0KDY0LCBcIjBcIiksIFwiaGV4XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5kZXhlcy5wdXNoKG5ldyBCTihpbmRleGVzW19pM10sIDE2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzaGFyZVByb21pc2VzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlc1Jlc29sdmVkID0gX2NvbnRleHQzLnNlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hhcmVkU3RhdGUucmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwicmV0dXJuXCIsIHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcnlwdGVkU2hhcmVzID0gc2hhcmVzUmVzb2x2ZWQucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyKSBhY2MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG5vZGVJbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IEJOKGN1cnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pOyAvLyBydW4gbGFncmFuZ2UgaW50ZXJwb2xhdGlvbiBvbiBhbGwgc3Vic2V0cywgZmFzdGVyIGluIHRoZSBvcHRpbWlzdGljIHNjZW5hcmlvIHRoYW4gYmVybGVrYW1wLXdlbGNoIGR1ZSB0byBlYXJseSBleGl0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJ1biBsYWdyYW5nZSBpbnRlcnBvbGF0aW9uIG9uIGFsbCBzdWJzZXRzLCBmYXN0ZXIgaW4gdGhlIG9wdGltaXN0aWMgc2NlbmFyaW8gdGhhbiBiZXJsZWthbXAtd2VsY2ggZHVlIHRvIGVhcmx5IGV4aXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbENvbWJpcyA9IGtDb21iaW5hdGlvbnMoZGVjcnlwdGVkU2hhcmVzLmxlbmd0aCwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q29tYmkgPSBhbGxDb21iaXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q29tYmlTaGFyZXMgPSBkZWNyeXB0ZWRTaGFyZXMuZmlsdGVyKGZ1bmN0aW9uICh2LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50Q29tYmkuaW5jbHVkZXMoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJlcyA9IGN1cnJlbnRDb21iaVNoYXJlcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRpY2VzID0gY3VycmVudENvbWJpU2hhcmVzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVyaXZlZFByaXZhdGVLZXkgPSBfdGhpcy5sYWdyYW5nZUludGVycG9sYXRpb24oc2hhcmVzLCBpbmRpY2VzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlcml2ZWRQcml2YXRlS2V5KSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjcnlwdGVkUHViS2V5ID0gZ2V0UHVibGljKEJ1ZmZlci5mcm9tKGRlcml2ZWRQcml2YXRlS2V5LnRvU3RyaW5nKDE2LCA2NCksIFwiaGV4XCIpKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY3J5cHRlZFB1YktleVggPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjcnlwdGVkUHViS2V5WSA9IGRlY3J5cHRlZFB1YktleS5zbGljZSg2Nik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ldyBCTihkZWNyeXB0ZWRQdWJLZXlYLCAxNikuY21wKG5ldyBCTih0aHJlc2hvbGRQdWJsaWNLZXkuWCwgMTYpKSA9PT0gMCAmJiBuZXcgQk4oZGVjcnlwdGVkUHViS2V5WSwgMTYpLmNtcChuZXcgQk4odGhyZXNob2xkUHVibGljS2V5LlksIDE2KSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gZGVyaXZlZFByaXZhdGVLZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaiA8IGFsbENvbWJpcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmV0ID0gX2xvb3Aoaik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9yZXQgPT09IFwiY29udGludWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwiY29udGludWVcIiwgMjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9yZXQgPT09IFwiYnJlYWtcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwiYnJlYWtcIiwgMjUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwcml2YXRlS2V5ID09PSB1bmRlZmluZWQgfHwgcHJpdmF0ZUtleSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBkZXJpdmUgcHJpdmF0ZSBrZXlcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJyZXR1cm5cIiwgcHJpdmF0ZUtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMyk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94MTAsIF94MTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbiggLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBfcmVmNiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KHJldHVybmVkS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcml2YXRlS2V5LCBkZWNyeXB0ZWRQdWJLZXksIGRlY3J5cHRlZFB1YktleVgsIGRlY3J5cHRlZFB1YktleVksIG1ldGFkYXRhTm9uY2UsIF95aWVsZCRfdGhpcyRnZXROb25jZSwgbm9uY2UsIGV0aEFkZHJlc3M7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNCQoX2NvbnRleHQ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZUtleSA9IHJldHVybmVkS2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaXZhdGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHJpdmF0ZSBrZXkgcmV0dXJuZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFB1YktleSA9IGdldFB1YmxpYyhCdWZmZXIuZnJvbShwcml2YXRlS2V5LnRvU3RyaW5nKDE2LCA2NCksIFwiaGV4XCIpKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRQdWJLZXlYID0gZGVjcnlwdGVkUHViS2V5LnNsaWNlKDIsIDY2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRQdWJLZXlZID0gZGVjcnlwdGVkUHViS2V5LnNsaWNlKDY2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZW5hYmxlT25lS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXROb25jZShkZWNyeXB0ZWRQdWJLZXlYLCBkZWNyeXB0ZWRQdWJLZXlZLCBwcml2YXRlS2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3lpZWxkJF90aGlzJGdldE5vbmNlID0gX2NvbnRleHQ0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2UgPSBfeWllbGQkX3RoaXMkZ2V0Tm9uY2Uubm9uY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZSA9IG5ldyBCTihub25jZSB8fCBcIjBcIiwgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRNZXRhZGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1g6IGRlY3J5cHRlZFB1YktleVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1k6IGRlY3J5cHRlZFB1YktleVlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhTm9uY2UgPSBfY29udGV4dDQuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIj4gdG9ydXMuanMvcmV0cmlldmVTaGFyZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdktleTogcHJpdmF0ZUtleS50b1N0cmluZygxNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YU5vbmNlOiBtZXRhZGF0YU5vbmNlLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVLZXkgPSBwcml2YXRlS2V5LmFkZChtZXRhZGF0YU5vbmNlKS51bW9kKF90aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0aEFkZHJlc3MgPSBfdGhpcy5nZW5lcmF0ZUFkZHJlc3NGcm9tUHJpdktleShwcml2YXRlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL3JldHJpZXZlU2hhcmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0aEFkZHJlc3M6IGV0aEFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2S2V5OiBwcml2YXRlS2V5LnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAvLyByZXR1cm4gcmVjb25zdHJ1Y3RlZCBwcml2YXRlIGtleSBhbmQgZXRoZXJldW0gYWRkcmVzc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoQWRkcmVzczogZXRoQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZLZXk6IHByaXZhdGVLZXkudG9TdHJpbmcoXCJoZXhcIiwgNjQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZTogbWV0YWRhdGFOb25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWU0KTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KCkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJldHJpZXZlU2hhcmVzKF94NSwgX3g2LCBfeDcsIF94OCwgX3g5KSB7XG4gICAgICAgIHJldHVybiBfcmV0cmlldmVTaGFyZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldHJpZXZlU2hhcmVzO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImdldE1ldGFkYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0TWV0YWRhdGEgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNihkYXRhKSB7XG4gICAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgICAgbWV0YWRhdGFSZXNwb25zZSxcbiAgICAgICAgICAgIF9hcmdzNiA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNiQoX2NvbnRleHQ2KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ2LnByZXYgPSBfY29udGV4dDYubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IF9hcmdzNi5sZW5ndGggPiAxICYmIF9hcmdzNlsxXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M2WzFdIDoge307XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2LnByZXYgPSAxO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdChcIlwiLmNvbmNhdCh0aGlzLm1ldGFkYXRhSG9zdCwgXCIvZ2V0XCIpLCBkYXRhLCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFSZXNwb25zZSA9IF9jb250ZXh0Ni5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoIW1ldGFkYXRhUmVzcG9uc2UgfHwgIW1ldGFkYXRhUmVzcG9uc2UubWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBCTigwKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBCTihtZXRhZGF0YVJlc3BvbnNlLm1lc3NhZ2UsIDE2KSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDYucHJldiA9IDEwO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ni50MCA9IF9jb250ZXh0NltcImNhdGNoXCJdKDEpO1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcImdldCBtZXRhZGF0YSBlcnJvclwiLCBfY29udGV4dDYudDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBCTigwKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTYsIHRoaXMsIFtbMSwgMTBdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhKF94MTMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZXRhZGF0YS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0TWV0YWRhdGE7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVNZXRhZGF0YVBhcmFtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZU1ldGFkYXRhUGFyYW1zKG1lc3NhZ2UsIHByaXZhdGVLZXkpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkudG9TdHJpbmcoXCJoZXhcIiwgNjQpKTtcbiAgICAgIHZhciBzZXREYXRhID0ge1xuICAgICAgICBkYXRhOiBtZXNzYWdlLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBCTih+fih0aGlzLnNlcnZlclRpbWVPZmZzZXQgKyBEYXRlLm5vdygpIC8gMTAwMCkpLnRvU3RyaW5nKDE2KVxuICAgICAgfTtcbiAgICAgIHZhciBzaWcgPSBrZXkuc2lnbihrZWNjYWsyNTYoSnNvblN0cmluZ2lmeShzZXREYXRhKSkuc2xpY2UoMikpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHViX2tleV9YOiBrZXkuZ2V0UHVibGljKCkuZ2V0WCgpLnRvU3RyaW5nKFwiaGV4XCIpLFxuICAgICAgICBwdWJfa2V5X1k6IGtleS5nZXRQdWJsaWMoKS5nZXRZKCkudG9TdHJpbmcoXCJoZXhcIiksXG4gICAgICAgIHNldF9kYXRhOiBzZXREYXRhLFxuICAgICAgICBzaWduYXR1cmU6IEJ1ZmZlci5mcm9tKHNpZy5yLnRvU3RyaW5nKDE2LCA2NCkgKyBzaWcucy50b1N0cmluZygxNiwgNjQpICsgbmV3IEJOKFwiXCIpLnRvU3RyaW5nKDE2LCAyKSwgXCJoZXhcIikudG9TdHJpbmcoXCJiYXNlNjRcIilcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldE1ldGFkYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc2V0TWV0YWRhdGEgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNyhkYXRhKSB7XG4gICAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgICAgbWV0YWRhdGFSZXNwb25zZSxcbiAgICAgICAgICAgIF9hcmdzNyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNyQoX2NvbnRleHQ3KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ3LnByZXYgPSBfY29udGV4dDcubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IF9hcmdzNy5sZW5ndGggPiAxICYmIF9hcmdzN1sxXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M3WzFdIDoge307XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ3LnByZXYgPSAxO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdChcIlwiLmNvbmNhdCh0aGlzLm1ldGFkYXRhSG9zdCwgXCIvc2V0XCIpLCBkYXRhLCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFSZXNwb25zZSA9IF9jb250ZXh0Ny5zZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuYWJydXB0KFwicmV0dXJuXCIsIG1ldGFkYXRhUmVzcG9uc2UubWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5wcmV2ID0gODtcbiAgICAgICAgICAgICAgICBfY29udGV4dDcudDAgPSBfY29udGV4dDdbXCJjYXRjaFwiXSgxKTtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJzZXQgbWV0YWRhdGEgZXJyb3JcIiwgX2NvbnRleHQ3LnQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiLCBcIlwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNywgdGhpcywgW1sxLCA4XV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBzZXRNZXRhZGF0YShfeDE0KSB7XG4gICAgICAgIHJldHVybiBfc2V0TWV0YWRhdGEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldE1ldGFkYXRhO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImxhZ3JhbmdlSW50ZXJwb2xhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYWdyYW5nZUludGVycG9sYXRpb24oc2hhcmVzLCBub2RlSW5kZXgpIHtcbiAgICAgIGlmIChzaGFyZXMubGVuZ3RoICE9PSBub2RlSW5kZXgubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VjcmV0ID0gbmV3IEJOKDApO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgdXBwZXIgPSBuZXcgQk4oMSk7XG4gICAgICAgIHZhciBsb3dlciA9IG5ldyBCTigxKTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXJlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICB1cHBlciA9IHVwcGVyLm11bChub2RlSW5kZXhbal0ubmVnKCkpO1xuICAgICAgICAgICAgdXBwZXIgPSB1cHBlci51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgICB2YXIgdGVtcCA9IG5vZGVJbmRleFtpXS5zdWIobm9kZUluZGV4W2pdKTtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICAgIGxvd2VyID0gbG93ZXIubXVsKHRlbXApLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVsdGEgPSB1cHBlci5tdWwobG93ZXIuaW52bSh0aGlzLmVjLmN1cnZlLm4pKS51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgIGRlbHRhID0gZGVsdGEubXVsKHNoYXJlc1tpXSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICBzZWNyZXQgPSBzZWNyZXQuYWRkKGRlbHRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlY3JldC51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlQWRkcmVzc0Zyb21Qcml2S2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQWRkcmVzc0Zyb21Qcml2S2V5KHByaXZhdGVLZXkpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkudG9TdHJpbmcoXCJoZXhcIiwgNjQpLCBcImhleFwiKTtcbiAgICAgIHZhciBwdWJsaWNLZXkgPSBrZXkuZ2V0UHVibGljKCkuZW5jb2RlKFwiaGV4XCIsIGZhbHNlKS5zbGljZSgyKTtcbiAgICAgIGxvZy5pbmZvKHB1YmxpY0tleSwgXCJwdWJsaWMga2V5XCIpO1xuICAgICAgdmFyIGV0aEFkZHJlc3NMb3dlciA9IFwiMHhcIi5jb25jYXQoa2VjY2FrMjU2KEJ1ZmZlci5mcm9tKHB1YmxpY0tleSwgXCJoZXhcIikpLnNsaWNlKDY0IC0gMzgpKTtcbiAgICAgIHJldHVybiB0b0NoZWNrc3VtQWRkcmVzcyhldGhBZGRyZXNzTG93ZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXkocHVibGljS2V5WCwgcHVibGljS2V5WSkge1xuICAgICAgdmFyIGtleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgIHg6IHB1YmxpY0tleVgudG9TdHJpbmcoXCJoZXhcIiwgNjQpLFxuICAgICAgICB5OiBwdWJsaWNLZXlZLnRvU3RyaW5nKFwiaGV4XCIsIDY0KVxuICAgICAgfSk7XG4gICAgICB2YXIgcHVibGljS2V5ID0ga2V5LmdldFB1YmxpYygpLmVuY29kZShcImhleFwiLCBmYWxzZSkuc2xpY2UoMik7XG4gICAgICBsb2cuaW5mbyhrZXkuZ2V0UHVibGljKCkuZW5jb2RlKFwiaGV4XCIsIGZhbHNlKSwgXCJwdWJsaWMga2V5XCIpO1xuICAgICAgdmFyIGV0aEFkZHJlc3NMb3dlciA9IFwiMHhcIi5jb25jYXQoa2VjY2FrMjU2KEJ1ZmZlci5mcm9tKHB1YmxpY0tleSwgXCJoZXhcIikpLnNsaWNlKDY0IC0gMzgpKTtcbiAgICAgIHJldHVybiB0b0NoZWNrc3VtQWRkcmVzcyhldGhBZGRyZXNzTG93ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlOiB1c2UgdGhpcyBmdW5jdGlvbiBvbmx5IHdpdGggY3VzdG9tIGF1dGgsIGRvbid0IHVzZSB0byBsb29rdXAgb3BlbmxvZ2luIGFjY291bnRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UHVibGljQWRkcmVzc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2dldFB1YmxpY0FkZHJlc3MgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlOChlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIF9yZWY3KSB7XG4gICAgICAgIHZhciB2ZXJpZmllcixcbiAgICAgICAgICAgIHZlcmlmaWVySWQsXG4gICAgICAgICAgICBpc0V4dGVuZGVkLFxuICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQsXG4gICAgICAgICAgICBpc05ld0tleSxcbiAgICAgICAgICAgIF9yZWY4LFxuICAgICAgICAgICAga2V5UmVzdWx0LFxuICAgICAgICAgICAgZXJyb3JSZXN1bHQsXG4gICAgICAgICAgICBhc3NpZ25SZXN1bHQsXG4gICAgICAgICAgICBfbm9uY2UsXG4gICAgICAgICAgICBfZmluYWxLZXlSZXN1bHQka2V5cyQyLFxuICAgICAgICAgICAgWCxcbiAgICAgICAgICAgIFksXG4gICAgICAgICAgICBub25jZVJlc3VsdCxcbiAgICAgICAgICAgIG5vbmNlLFxuICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXksXG4gICAgICAgICAgICB0eXBlT2ZVc2VyLFxuICAgICAgICAgICAgcHViTm9uY2UsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgX2FyZ3M4ID0gYXJndW1lbnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTgkKF9jb250ZXh0OCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0OC5wcmV2ID0gX2NvbnRleHQ4Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHZlcmlmaWVyID0gX3JlZjcudmVyaWZpZXIsIHZlcmlmaWVySWQgPSBfcmVmNy52ZXJpZmllcklkO1xuICAgICAgICAgICAgICAgIGlzRXh0ZW5kZWQgPSBfYXJnczgubGVuZ3RoID4gMyAmJiBfYXJnczhbM10gIT09IHVuZGVmaW5lZCA/IF9hcmdzOFszXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIj4gdG9ydXMuanMvZ2V0UHVibGljQWRkcmVzc1wiLCB7XG4gICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IGVuZHBvaW50cyxcbiAgICAgICAgICAgICAgICAgIHRvcnVzTm9kZVB1YnM6IHRvcnVzTm9kZVB1YnMsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcklkOiB2ZXJpZmllcklkLFxuICAgICAgICAgICAgICAgICAgaXNFeHRlbmRlZDogaXNFeHRlbmRlZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlzTmV3S2V5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC50MCA9IF9jb250ZXh0OC5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9jb250ZXh0OC50MCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnQwID0ge307XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIF9yZWY4ID0gX2NvbnRleHQ4LnQwO1xuICAgICAgICAgICAgICAgIGtleVJlc3VsdCA9IF9yZWY4LmtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IF9yZWY4LmVycm9yUmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoZXJyb3JSZXN1bHQgJiYgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQpLmluY2x1ZGVzKFwiVmVyaWZpZXIgbm90IHN1cHBvcnRlZFwiKSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTY7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWZXJpZmllciBub3Qgc3VwcG9ydGVkLiBDaGVjayBpZiB5b3U6IFxcblxcbiAgICAgIDEuIEFyZSBvbiB0aGUgcmlnaHQgbmV0d29yayAoVG9ydXMgdGVzdG5ldC9tYWlubmV0KSBcXG5cXG4gICAgICAyLiBIYXZlIHNldHVwIGEgdmVyaWZpZXIgb24gZGFzaGJvYXJkLndlYjNhdXRoLmlvP1wiKTtcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIGlmICghKGVycm9yUmVzdWx0ICYmIEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0KS5pbmNsdWRlcyhcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAyNjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUFzc2lnbih7XG4gICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IGVuZHBvaW50cyxcbiAgICAgICAgICAgICAgICAgIHRvcnVzTm9kZVB1YnM6IHRvcnVzTm9kZVB1YnMsXG4gICAgICAgICAgICAgICAgICBsYXN0UG9pbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGZpcnN0UG9pbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVySWQ6IHZlcmlmaWVySWQsXG4gICAgICAgICAgICAgICAgICBzaWduZXJIb3N0OiB0aGlzLnNpZ25lckhvc3QsXG4gICAgICAgICAgICAgICAgICBuZXR3b3JrOiB0aGlzLm5ldHdvcmtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMjE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhaXRLZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICBhc3NpZ25SZXN1bHQgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdCA9IGFzc2lnblJlc3VsdCA9PT0gbnVsbCB8fCBhc3NpZ25SZXN1bHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFzc2lnblJlc3VsdC5rZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMzE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgICAgICBpZiAoIWtleVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAzMDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0ID0ga2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMzE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpcnN0IGxvb2t1cCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5UmVzdWx0IHx8IHt9KSwgXCIsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQgfHwge30pKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL2dldFB1YmxpY0FkZHJlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQ6IGZpbmFsS2V5UmVzdWx0LFxuICAgICAgICAgICAgICAgICAgaXNOZXdLZXk6IGlzTmV3S2V5XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZpbmFsS2V5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDY5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2ZpbmFsS2V5UmVzdWx0JGtleXMkMiA9IGZpbmFsS2V5UmVzdWx0LmtleXNbMF0sIFggPSBfZmluYWxLZXlSZXN1bHQka2V5cyQyLnB1Yl9rZXlfWCwgWSA9IF9maW5hbEtleVJlc3VsdCRrZXlzJDIucHViX2tleV9ZO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZU9uZUtleSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1NztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5wcmV2ID0gMzU7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAzODtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPclNldE5vbmNlKFgsIFksIHVuZGVmaW5lZCwgIWlzTmV3S2V5KTtcblxuICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIG5vbmNlUmVzdWx0ID0gX2NvbnRleHQ4LnNlbnQ7XG4gICAgICAgICAgICAgICAgbm9uY2UgPSBuZXcgQk4obm9uY2VSZXN1bHQubm9uY2UgfHwgXCIwXCIsIDE2KTtcbiAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyID0gbm9uY2VSZXN1bHQudHlwZU9mVXNlcjtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDQ2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnByZXYgPSA0MztcbiAgICAgICAgICAgICAgICBfY29udGV4dDgudDEgPSBfY29udGV4dDhbXCJjYXRjaFwiXSgzNSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdldE9yU2V0Tm9uY2VFcnJvcigpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICAgICAgaWYgKCEobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1MDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgIHg6IFgsXG4gICAgICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVByaXZhdGUobm9uY2UudG9TdHJpbmcoMTYpKS5nZXRQdWJsaWMoKSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1NTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjJcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobm9uY2VSZXN1bHQudXBncmFkZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIE9uZUtleSBpcyB1cGdyYWRlZCB0byAyL24sIHJldHVybmVkIGFkZHJlc3MgaXMgYWRkcmVzcyBvZiBUb3J1cyBrZXkgKHBvc3Rib3gga2V5KSwgbm90IHRLZXlcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICAgIHg6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLnlcbiAgICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpKTtcbiAgICAgICAgICAgICAgICAgIHB1Yk5vbmNlID0gbm9uY2VSZXN1bHQucHViTm9uY2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1NTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldE9yU2V0Tm9uY2Ugc2hvdWxkIGFsd2F5cyByZXR1cm4gdHlwZU9mVXNlci5cIik7XG5cbiAgICAgICAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDYyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICAgICAgdHlwZU9mVXNlciA9IFwidjFcIjtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDYwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKHtcbiAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWDogWCxcbiAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWTogWVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgbm9uY2UgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21Qcml2YXRlKG5vbmNlLnRvU3RyaW5nKDE2KSkuZ2V0UHVibGljKCkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgWCA9IG1vZGlmaWVkUHViS2V5LmdldFgoKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgWSA9IG1vZGlmaWVkUHViS2V5LmdldFkoKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA9IHRoaXMuZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleShtb2RpZmllZFB1YktleS5nZXRYKCksIG1vZGlmaWVkUHViS2V5LmdldFkoKSk7XG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiPiB0b3J1cy5qcy9nZXRQdWJsaWNBZGRyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgIFg6IFgsXG4gICAgICAgICAgICAgICAgICBZOiBZLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIHR5cGVPZlVzZXI6IHR5cGVPZlVzZXIsXG4gICAgICAgICAgICAgICAgICBub25jZTogKF9ub25jZSA9IG5vbmNlKSA9PT0gbnVsbCB8fCBfbm9uY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub25jZS50b1N0cmluZygxNiksXG4gICAgICAgICAgICAgICAgICBwdWJOb25jZTogcHViTm9uY2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0V4dGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDY4O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5hYnJ1cHQoXCJyZXR1cm5cIiwgYWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyOiB0eXBlT2ZVc2VyLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIFg6IFgsXG4gICAgICAgICAgICAgICAgICBZOiBZLFxuICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZTogbm9uY2UsXG4gICAgICAgICAgICAgICAgICBwdWJOb25jZTogcHViTm9uY2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmluYWwgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDcwOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlOCwgdGhpcywgW1szNSwgNDNdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFB1YmxpY0FkZHJlc3MoX3gxNSwgX3gxNiwgX3gxNykge1xuICAgICAgICByZXR1cm4gX2dldFB1YmxpY0FkZHJlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFB1YmxpY0FkZHJlc3M7XG4gICAgfSgpXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb25zIGZvciBPbmVLZXkgKE9wZW5Mb2dpbiB2MiksIG9ubHkgY2FsbCB0aGVzZSBmdW5jdGlvbnMgaWYgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldE9yU2V0Tm9uY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRPclNldE5vbmNlID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTkoWCwgWSwgcHJpdktleSkge1xuICAgICAgICB2YXIgZ2V0T25seSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBtc2csXG4gICAgICAgICAgICBfYXJnczkgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTkkKF9jb250ZXh0OSkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0OS5wcmV2ID0gX2NvbnRleHQ5Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGdldE9ubHkgPSBfYXJnczkubGVuZ3RoID4gMyAmJiBfYXJnczlbM10gIT09IHVuZGVmaW5lZCA/IF9hcmdzOVszXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1zZyA9IGdldE9ubHkgPyBcImdldE5vbmNlXCIgOiBcImdldE9yU2V0Tm9uY2VcIjtcblxuICAgICAgICAgICAgICAgIGlmIChwcml2S2V5KSB7XG4gICAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nZW5lcmF0ZU1ldGFkYXRhUGFyYW1zKG1zZywgcHJpdktleSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWDogWCxcbiAgICAgICAgICAgICAgICAgICAgcHViX2tleV9ZOiBZLFxuICAgICAgICAgICAgICAgICAgICBzZXRfZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG1zZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuYWJydXB0KFwicmV0dXJuXCIsIHBvc3QoXCJcIi5jb25jYXQodGhpcy5tZXRhZGF0YUhvc3QsIFwiL2dldF9vcl9zZXRfbm9uY2VcIiksIGRhdGEsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTksIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRPclNldE5vbmNlKF94MTgsIF94MTksIF94MjApIHtcbiAgICAgICAgcmV0dXJuIF9nZXRPclNldE5vbmNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRPclNldE5vbmNlO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImdldE5vbmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0Tm9uY2UgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMTAoWCwgWSwgcHJpdktleSkge1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMCQoX2NvbnRleHQxMCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTAucHJldiA9IF9jb250ZXh0MTAubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMuZ2V0T3JTZXROb25jZShYLCBZLCBwcml2S2V5LCB0cnVlKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTEwLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0Tm9uY2UoX3gyMSwgX3gyMiwgX3gyMykge1xuICAgICAgICByZXR1cm4gX2dldE5vbmNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXROb25jZTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJnZXRQb3N0Ym94S2V5RnJvbTFPdXRPZjFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9zdGJveEtleUZyb20xT3V0T2YxKHByaXZLZXksIG5vbmNlKSB7XG4gICAgICB2YXIgcHJpdktleUJOID0gbmV3IEJOKHByaXZLZXksIDE2KTtcbiAgICAgIHZhciBub25jZUJOID0gbmV3IEJOKG5vbmNlLCAxNik7XG4gICAgICByZXR1cm4gcHJpdktleUJOLnN1Yihub25jZUJOKS51bW9kKHRoaXMuZWMuY3VydmUubikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZW5hYmxlTG9nZ2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVMb2dnaW5nKCkge1xuICAgICAgdmFyIHYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG4gICAgICBpZiAodikgbG9nLmVuYWJsZUFsbCgpO2Vsc2UgbG9nLmRpc2FibGVBbGwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QVBJS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFQSUtleSQxKGFwaUtleSkge1xuICAgICAgc2V0QVBJS2V5KGFwaUtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEVtYmVkSG9zdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRFbWJlZEhvc3QkMShlbWJlZEhvc3QpIHtcbiAgICAgIHNldEVtYmVkSG9zdChlbWJlZEhvc3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0dldE9yU2V0Tm9uY2VFcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0dldE9yU2V0Tm9uY2VFcnJvcihlcnIpIHtcbiAgICAgIHJldHVybiBlcnIgaW5zdGFuY2VvZiBHZXRPclNldE5vbmNlRXJyb3I7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRvcnVzO1xufSgpO1xuXG5leHBvcnQgeyBHZXRPclNldE5vbmNlRXJyb3IsIFRvcnVzIGFzIGRlZmF1bHQsIGtDb21iaW5hdGlvbnMsIGtlY2NhazI1Niwga2V5QXNzaWduLCBrZXlMb29rdXAsIHRocmVzaG9sZFNhbWUsIHdhaXRLZXlMb29rdXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvcnVzVXRpbHMuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgTm9kZURldGFpbE1hbmFnZXIgZnJvbSAnQHRvcnVzbGFicy9mZXRjaC1ub2RlLWRldGFpbHMnO1xuaW1wb3J0IHsgZ2V0LCBzZXRBUElLZXkgfSBmcm9tICdAdG9ydXNsYWJzL2h0dHAtaGVscGVycyc7XG5pbXBvcnQgeyBTYWZlRXZlbnRFbWl0dGVyLCBPYmplY3RNdWx0aXBsZXgsIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUsIEpSUENFbmdpbmUsIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlLCBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0sIHNldHVwTXVsdGlwbGV4IH0gZnJvbSAnQHRvcnVzbGFicy9vcGVubG9naW4tanJwYyc7XG5pbXBvcnQgVG9ydXNKcyBmcm9tICdAdG9ydXNsYWJzL3RvcnVzLmpzJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnbG9kYXNoLm1lcmdlJztcbmltcG9ydCB7IE9ic2VydmFibGVTdG9yZSwgc3RvcmVBc1N0cmVhbSB9IGZyb20gJ0BtZXRhbWFzay9vYnMtc3RvcmUnO1xuaW1wb3J0IHsgZXRoRXJyb3JzLCBFdGhlcmV1bVJwY0Vycm9yIH0gZnJvbSAnZXRoLXJwYy1lcnJvcnMnO1xuaW1wb3J0IGRlcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgZHVwbGV4IH0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCBwdW1wIGZyb20gJ3B1bXAnO1xuaW1wb3J0IGxvZ2xldmVsIGZyb20gJ2xvZ2xldmVsJztcbmltcG9ydCBjcmVhdGVIYXNoIGZyb20gJ2NyZWF0ZS1oYXNoJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5cbmNvbnN0IExPR0lOX1BST1ZJREVSID0ge1xuICBHT09HTEU6IFwiZ29vZ2xlXCIsXG4gIEZBQ0VCT09LOiBcImZhY2Vib29rXCIsXG4gIFRXSVRDSDogXCJ0d2l0Y2hcIixcbiAgUkVERElUOiBcInJlZGRpdFwiLFxuICBESVNDT1JEOiBcImRpc2NvcmRcIlxufTtcbmNvbnN0IFdBTExFVF9WRVJJRklFUlMgPSB7XG4gIEdPT0dMRTogXCJnb29nbGVcIixcbiAgRkFDRUJPT0s6IFwiZmFjZWJvb2tcIixcbiAgVFdJVENIOiBcInR3aXRjaFwiLFxuICBSRURESVQ6IFwicmVkZGl0XCIsXG4gIERJU0NPUkQ6IFwiZGlzY29yZFwiLFxuICBFTUFJTF9QQVNTV09SRExFU1M6IFwidG9ydXMtYXV0aDAtZW1haWwtcGFzc3dvcmRsZXNzXCJcbn07XG5jb25zdCBXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUCA9IHtcbiAgW1dBTExFVF9WRVJJRklFUlMuR09PR0xFXTogXCJ0a2V5LWdvb2dsZVwiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5GQUNFQk9PS106IFwidGtleS1mYWNlYm9va1wiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5UV0lUQ0hdOiBcInRrZXktdHdpdGNoXCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLlJFRERJVF06IFwidGtleS1yZWRkaXRcIixcbiAgW1dBTExFVF9WRVJJRklFUlMuRElTQ09SRF06IFwidGtleS1kaXNjb3JkXCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLkVNQUlMX1BBU1NXT1JETEVTU106IFwidGtleS1hdXRoMC1lbWFpbC1wYXNzd29yZGxlc3NcIlxufTtcbmNvbnN0IFBBWU1FTlRfUFJPVklERVIgPSB7XG4gIE1PT05QQVk6IFwibW9vbnBheVwiLFxuICBXWVJFOiBcInd5cmVcIixcbiAgUkFNUE5FVFdPUks6IFwicmFtcG5ldHdvcmtcIixcbiAgWEFOUE9PTDogXCJ4YW5wb29sXCIsXG4gIE1FUkNVUllPOiBcIm1lcmN1cnlvXCIsXG4gIFRSQU5TQUs6IFwidHJhbnNha1wiXG59O1xuY29uc3QgVE9SVVNfQlVJTERfRU5WID0ge1xuICBQUk9EVUNUSU9OOiBcInByb2R1Y3Rpb25cIixcbiAgREVWRUxPUE1FTlQ6IFwiZGV2ZWxvcG1lbnRcIixcbiAgQklOQU5DRTogXCJiaW5hbmNlXCIsXG4gIFRFU1RJTkc6IFwidGVzdGluZ1wiLFxuICBMUkM6IFwibHJjXCIsXG4gIEJFVEE6IFwiYmV0YVwiXG59O1xuY29uc3QgQlVUVE9OX1BPU0lUSU9OID0ge1xuICBCT1RUT01fTEVGVDogXCJib3R0b20tbGVmdFwiLFxuICBUT1BfTEVGVDogXCJ0b3AtbGVmdFwiLFxuICBCT1RUT01fUklHSFQ6IFwiYm90dG9tLXJpZ2h0XCIsXG4gIFRPUF9SSUdIVDogXCJ0b3AtcmlnaHRcIlxufTtcblxuY29uc3QgcGF5bWVudFByb3ZpZGVycyQxID0ge1xuICBbUEFZTUVOVF9QUk9WSURFUi5SQU1QTkVUV09SS106IHtcbiAgICBsaW5lMTogXCJEZWJpdCBDYXJkLyBBcHBsZSBQYXkvIEJhbmsgdHJhbnNmZXJcIixcbiAgICBsaW5lMjogXCIwLjQ5JSAtIDIuOSVcIixcbiAgICBsaW5lMzogXCI1LDAwMOKCrC9wdXJjaGFzZSwgMjAsMDAw4oKsL21vXCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9pbnN0YW50LnJhbXAubmV0d29yay9cIixcbiAgICBtaW5PcmRlclZhbHVlOiA1MCxcbiAgICBtYXhPcmRlclZhbHVlOiAyMDAwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIkdCUFwiLCBcIkVVUlwiLCBcIlVTRFwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIlVTRENcIiwgXCJCU0NfQk5CXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLk1PT05QQVldOiB7XG4gICAgbGluZTE6IFwiQ3JlZGl0IC8gRGViaXQgQ2FyZCAvIEFwcGxlIFBheVwiLFxuICAgIGxpbmUyOiBcIjQuNSUgb3IgNSBVU0RcIixcbiAgICBsaW5lMzogXCIyLDAwMOKCrC9kYXksIDEwLDAwMOKCrC9tb1wiLFxuICAgIHN1cHBvcnRQYWdlOiBcImh0dHBzOi8vaGVscC5tb29ucGF5LmlvL2VuL1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDI0Ljk5LFxuICAgIG1heE9yZGVyVmFsdWU6IDUwMDAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiVVNEXCIsIFwiRVVSXCIsIFwiR0JQXCIsIFwiQVVEXCIsIFwiQ0FEXCIsIFwiU0dEXCIsIFwiUlVCXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiVFVTRFwiLCBcIlVTRENcIiwgXCJVU0RUXCIsIFwiQk5CX0JTQ1wiLCBcIkJVU0RfQlNDXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLldZUkVdOiB7XG4gICAgbGluZTE6IFwiQXBwbGUgUGF5LyBEZWJpdC8gQ3JlZGl0IENhcmRcIixcbiAgICBsaW5lMjogXCI0LjklICsgMzDCoiBvciA1IFVTRFwiLFxuICAgIGxpbmUzOiBcIiQyNTAvZGF5XCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9zdXBwb3J0LnNlbmR3eXJlLmNvbS9lbi9cIixcbiAgICBtaW5PcmRlclZhbHVlOiA1LFxuICAgIG1heE9yZGVyVmFsdWU6IDUwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlVTRFwiLCBcIkFVRFwiLCBcIkNBRFwiLCBcIkdCUFwiLCBcIkVVUlwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIlVTRENcIiwgXCJVU0RUXCJdLFxuICAgIGluY2x1ZGVGZWVzOiBmYWxzZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9LFxuICBbUEFZTUVOVF9QUk9WSURFUi5YQU5QT09MXToge1xuICAgIGxpbmUxOiBcIlBheU5vdy8gSW5zdGFQYXkvIEZQUy8gR29KZWtQYXkvIFVQSS8gUHJvbXB0UGF5LyBWaWV0ZWxQYXkvIER1aXROb3dcIixcbiAgICBsaW5lMjogXCIyLjUlIGJ1eWluZywgMyUgc2VsbGluZ1wiLFxuICAgIGxpbmUzOiBcIiQyLDUwMCAvIGRheVwiLFxuICAgIHN1cHBvcnRQYWdlOiBcIm1haWx0bzpzdXBwb3J0QHhhbnBvb2wuY29tXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogMTAwLFxuICAgIG1heE9yZGVyVmFsdWU6IDI1MDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbXCJTR0RcIiwgXCJIS0RcIiwgXCJNWVJcIiwgXCJQSFBcIiwgXCJJTlJcIiwgXCJWTkRcIiwgXCJUSEJcIiwgXCJJRFJcIl0sXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzOiBbXCJFVEhcIiwgXCJVU0RUXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIHNlbGw6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuTUVSQ1VSWU9dOiB7XG4gICAgbGluZTE6IFwiQ3JlZGl0LyBEZWJpdCBDYXJkLyBBcHBsZSBQYXlcIixcbiAgICBsaW5lMjogXCIzLjk1JSBvciA0IFVTRFwiLFxuICAgIGxpbmUzOiBcIjEwLDAwMOKCrC9kYXksIDI1LDAwMOKCrC9tb1wiLFxuICAgIHN1cHBvcnRQYWdlOiBcIm1haWx0bzpzdXBwb3J0QG1lcmN1cnlvLmlvXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogMzAsXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlVTRFwiLCBcIkVVUlwiLCBcIlJVQlwiLCBcIlRSWVwiLCBcIkdCUFwiLCBcIlVBSFwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIkJBVFwiLCBcIlVTRFRcIiwgXCJPS0JcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuVFJBTlNBS106IHtcbiAgICBsaW5lMTogXCJDcmVkaXQvIERlYml0IENhcmQvIDxici8+QmFuayBUcmFuc2ZlciAoc2VwYS9nYnApXCIsXG4gICAgbGluZTI6IFwiMC45OSUgLSA1LjUlIG9yIDUgVVNEXCIsXG4gICAgbGluZTM6IFwiNTAw4oKsL2RheVwiLFxuICAgIHN1cHBvcnRQYWdlOiBcImh0dHBzOi8vc3VwcG9ydC50cmFuc2FrLmNvbS9oYy9lbi1VU1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDIwLFxuICAgIG1heE9yZGVyVmFsdWU6IDUwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlVTRFwiLCBcIkVVUlwiLCBcIkdCUFwiLCBcIkFVRFwiLCBcIkNBRFwiLCBcIlNHRFwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIlVTRENcIiwgXCJVU0RUXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH1cbn07XG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGVuOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIkNvbnRpbnVlXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCJBdXRob3JpemF0aW9uIHJlcXVpcmVkXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIkNsaWNrIGNvbnRpbnVlIHRvIHByb2NlZWQgd2l0aCB5b3VyIHJlcXVlc3QgaW4gYSBwb3B1cFwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIkNvb2tpZXMgUmVxdWlyZWRcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwiUGxlYXNlIGVuYWJsZSBjb29raWVzIGluIHlvdXIgYnJvd3NlciBwcmVmZXJlbmNlcyB0byBhY2Nlc3MgVG9ydXNcIixcbiAgICAgIGNsaWNrSGVyZTogXCJNb3JlIEluZm9cIlxuICAgIH1cbiAgfSxcbiAgZGU6IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwiRm9ydHNldHplblwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwiQXV0b3Jpc2llcnVuZyBlcmZvcmRlcmxpY2hcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwiS2xpY2tlbiBTaWUgaW4gZWluZW0gUG9wdXAgYXVmIFdlaXRlciwgdW0gbWl0IElocmVyIEFuZnJhZ2UgZm9ydHp1ZmFocmVuXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwiQ29va2llcyBiZW7DtnRpZ3RcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwiQml0dGUgYWt0aXZpZXJlbiBTaWUgQ29va2llcyBpbiBJaHJlbiBCcm93c2VyZWluc3RlbGx1bmdlbiwgdW0gYXVmIFRvcnVzIHp1enVncmVpZmVuXCIsXG4gICAgICBjbGlja0hlcmU6IFwiTWVociBJbmZvXCJcbiAgICB9XG4gIH0sXG4gIGphOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIue2mee2muOBmeOCi1wiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwi6KqN6Ki844GM5b+F6KaB44Gn44GZXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIue2muihjOOCkuOCr+ODquODg+OCr+OBl+OBpuOAgeODneODg+ODl+OCouODg+ODl+OBp+ODquOCr+OCqOOCueODiOOCkue2muihjOOBl+OBvuOBmVwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIuW/heimgeOBquOCr+ODg+OCreODvFwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCJUb3J1c+OBq+OCouOCr+OCu+OCueOBmeOCi+OBq+OBr+OAgeODluODqeOCpuOCtuOBruioreWumuOBp0Nvb2tpZeOCkuacieWKueOBq+OBl+OBpuOBj+OBoOOBleOBhOOAglwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuips+OBl+OBj+OBr1wiXG4gICAgfVxuICB9LFxuICBrbzoge1xuICAgIGVtYmVkOiB7XG4gICAgICBjb250aW51ZTogXCLqs4Tsho3tlZjri6RcIixcbiAgICAgIGFjdGlvblJlcXVpcmVkOiBcIuyKueyduCDtlYTsmpRcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwi7Yyd7JeF7JeQ7IScIOyalOyyreydhCDsp4TtlontlZjroKTrqbQg6rOE7IaN7J2EIO2BtOumre2VmOyLreyLnOyYpC5cIixcbiAgICAgIGNvb2tpZXNSZXF1aXJlZDogXCLsv6DtgqQg7ZWE7JqUXCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIuu4jOudvOyasOyggCDtmZjqsr0g7ISk7KCV7JeQ7IScIOy/oO2CpOulvCDtmZzshLHtmZTtlZjsl6wgVG9ydXPsl5Ag7JWh7IS47Iqk7ZWY7Iut7Iuc7JikLlwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuuNlCDrp47snYAg7KCV67O0XCJcbiAgICB9XG4gIH0sXG4gIHpoOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIue7p+e7rVwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwi6ZyA6KaB5o6I5p2DXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIuWNleWHu+e7p+e7reS7peWcqOW8ueWHuueql+WPo+S4ree7p+e7reaCqOeahOivt+axglwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIuW/heWhq0Nvb2tpZVwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCLor7flnKjmgqjnmoTmtY/op4jlmajpppbpgInpobnkuK3lkK/nlKhjb29raWXku6Xorr/pl65Ub3J1c+OAglwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuabtOWkmuS/oeaBr1wiXG4gICAgfVxuICB9XG59O1xudmFyIGNvbmZpZ3VyYXRpb24gPSB7XG4gIHN1cHBvcnRlZFZlcmlmaWVyTGlzdDogT2JqZWN0LnZhbHVlcyhXQUxMRVRfVkVSSUZJRVJTKSxcbiAgcGF5bWVudFByb3ZpZGVyczogcGF5bWVudFByb3ZpZGVycyQxLFxuICBhcGk6IFwiaHR0cHM6Ly9hcGkudG9yLnVzXCIsXG4gIHRyYW5zbGF0aW9ucyxcbiAgcHJvZFRvcnVzVXJsOiBcIlwiLFxuICBsb2NhbFN0b3JhZ2VLZXlQcmVmaXg6IFwidG9ydXMtXCJcbn07XG5cbmNvbnN0IHJ1bk9uTG9hZCA9IGZuID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaWYgKHdpbmRvdy5kb2N1bWVudC5ib2R5ICE9IG51bGwpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG59KTtcbmNvbnN0IGh0bWxUb0VsZW1lbnQgPSBodG1sID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICBjb25zdCB0cmltbWVkSHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdHJpbW1lZEh0bWw7XG4gIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59O1xuY29uc3QgaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoaGFuZGxlLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGhhbmRsZXJBcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBoYW5kbGVyQXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBjb25zdCBoYW5kbGVyV3JhcHBlciA9ICgpID0+IHtcbiAgICBoYW5kbGVyKC4uLmhhbmRsZXJBcmdzKTtcbiAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbiAgfTtcblxuICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbn07XG5jb25zdCBoYW5kbGVTdHJlYW0gPSAoaGFuZGxlLCBldmVudE5hbWUsIGhhbmRsZXIpID0+IHtcbiAgY29uc3QgaGFuZGxlcldyYXBwZXIgPSBjaHVuayA9PiB7XG4gICAgaGFuZGxlcihjaHVuayk7XG4gICAgaGFuZGxlLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xuICB9O1xuXG4gIGhhbmRsZS5vbihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbn07XG5hc3luYyBmdW5jdGlvbiBkb2N1bWVudFJlYWR5KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZUV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVzb2x2ZSk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGxvZyA9IGxvZ2xldmVsLmdldExvZ2dlcihcInRvcnVzLWVtYmVkXCIpO1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gIGVycm9yczoge1xuICAgIGRpc2Nvbm5lY3RlZDogKCkgPT4gXCJUb3J1czogTG9zdCBjb25uZWN0aW9uIHRvIFRvcnVzLlwiLFxuICAgIHBlcm1hbmVudGx5RGlzY29ubmVjdGVkOiAoKSA9PiBcIlRvcnVzOiBEaXNjb25uZWN0ZWQgZnJvbSBpZnJhbWUuIFBhZ2UgcmVsb2FkIHJlcXVpcmVkLlwiLFxuICAgIHNlbmRTaXRlTWV0YWRhdGE6ICgpID0+IFwiVG9ydXM6IEZhaWxlZCB0byBzZW5kIHNpdGUgbWV0YWRhdGEuIFRoaXMgaXMgYW4gaW50ZXJuYWwgZXJyb3IsIHBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsXG4gICAgdW5zdXBwb3J0ZWRTeW5jOiBtZXRob2QgPT4gXCJUb3J1czogVGhlIFRvcnVzIEV0aGVyZXVtIHByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgc3luY2hyb25vdXMgbWV0aG9kcyBsaWtlIFwiLmNvbmNhdChtZXRob2QsIFwiIHdpdGhvdXQgYSBjYWxsYmFjayBwYXJhbWV0ZXIuXCIpLFxuICAgIGludmFsaWREdXBsZXhTdHJlYW06ICgpID0+IFwiTXVzdCBwcm92aWRlIGEgTm9kZS5qcy1zdHlsZSBkdXBsZXggc3RyZWFtLlwiLFxuICAgIGludmFsaWRPcHRpb25zOiAobWF4RXZlbnRMaXN0ZW5lcnMsIHNob3VsZFNlbmRNZXRhZGF0YSkgPT4gXCJJbnZhbGlkIG9wdGlvbnMuIFJlY2VpdmVkOiB7IG1heEV2ZW50TGlzdGVuZXJzOiBcIi5jb25jYXQobWF4RXZlbnRMaXN0ZW5lcnMsIFwiLCBzaG91bGRTZW5kTWV0YWRhdGE6IFwiKS5jb25jYXQoc2hvdWxkU2VuZE1ldGFkYXRhLCBcIiB9XCIpLFxuICAgIGludmFsaWRSZXF1ZXN0QXJnczogKCkgPT4gXCJFeHBlY3RlZCBhIHNpbmdsZSwgbm9uLWFycmF5LCBvYmplY3QgYXJndW1lbnQuXCIsXG4gICAgaW52YWxpZFJlcXVlc3RNZXRob2Q6ICgpID0+IFwiJ2FyZ3MubWV0aG9kJyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy5cIixcbiAgICBpbnZhbGlkUmVxdWVzdFBhcmFtczogKCkgPT4gXCInYXJncy5wYXJhbXMnIG11c3QgYmUgYW4gb2JqZWN0IG9yIGFycmF5IGlmIHByb3ZpZGVkLlwiLFxuICAgIGludmFsaWRMb2dnZXJPYmplY3Q6ICgpID0+IFwiJ2FyZ3MubG9nZ2VyJyBtdXN0IGJlIGFuIG9iamVjdCBpZiBwcm92aWRlZC5cIixcbiAgICBpbnZhbGlkTG9nZ2VyTWV0aG9kOiBtZXRob2QgPT4gXCInYXJncy5sb2dnZXInIG11c3QgaW5jbHVkZSByZXF1aXJlZCBtZXRob2QgJ1wiLmNvbmNhdChtZXRob2QsIFwiJy5cIilcbiAgfSxcbiAgaW5mbzoge1xuICAgIGNvbm5lY3RlZDogY2hhaW5JZCA9PiBcIlRvcnVzOiBDb25uZWN0ZWQgdG8gY2hhaW4gd2l0aCBJRCBcXFwiXCIuY29uY2F0KGNoYWluSWQsIFwiXFxcIi5cIilcbiAgfSxcbiAgd2FybmluZ3M6IHtcbiAgICAvLyBkZXByZWNhdGVkIG1ldGhvZHNcbiAgICBlbmFibGVEZXByZWNhdGlvbjogJ1RvcnVzOiBcIlwiZXRoZXJldW0uZW5hYmxlKClcIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiAnICsgJ1BsZWFzZSB1c2UgXCJldGhlcmV1bS5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiKVwiIGluc3RlYWQuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTEwMicsXG4gICAgc2VuZERlcHJlY2F0aW9uOiAnVG9ydXM6IFwiZXRoZXJldW0uc2VuZCguLi4pXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4nICsgJyBQbGVhc2UgdXNlIFwiZXRoZXJldW0uc2VuZEFzeW5jKC4uLilcIiBvciBcImV0aGVyZXVtLnJlcXVlc3QoLi4uKVwiIGluc3RlYWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzJyxcbiAgICBldmVudHM6IHtcbiAgICAgIGNsb3NlOiAnVG9ydXM6IFRoZSBldmVudCBcImNsb3NlXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4gUGxlYXNlIHVzZSBcImRpc2Nvbm5lY3RcIiBpbnN0ZWFkLicgKyBcIlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5M1wiLFxuICAgICAgZGF0YTogJ1RvcnVzOiBUaGUgZXZlbnQgXCJkYXRhXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJyArICdVc2UgXCJtZXNzYWdlXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMjbWVzc2FnZScsXG4gICAgICBuZXR3b3JrQ2hhbmdlZDogJ1RvcnVzOiBUaGUgZXZlbnQgXCJuZXR3b3JrQ2hhbmdlZFwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJyArICcgUGxlYXNlIHVzZSBcImNoYWluQ2hhbmdlZFwiIGluc3RlYWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzJyxcbiAgICAgIG5vdGlmaWNhdGlvbjogJ1RvcnVzOiBUaGUgZXZlbnQgXCJub3RpZmljYXRpb25cIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiAnICsgJ1BsZWFzZSB1c2UgXCJtZXNzYWdlXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMnXG4gICAgfSxcbiAgICBwdWJsaWNDb25maWdTdG9yZTogJ1RvcnVzOiBUaGUgcHJvcGVydHkgXCJwdWJsaWNDb25maWdTdG9yZVwiIGlzIGRlcHJlY2F0ZWQgYW5kIFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLidcbiAgfVxufTtcblxuY29uc3Qge1xuICBwYXltZW50UHJvdmlkZXJzXG59ID0gY29uZmlndXJhdGlvbjtcbmNvbnN0IHZhbGlkYXRlUGF5bWVudFByb3ZpZGVyID0gKHByb3ZpZGVyLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgaWYgKCFwcm92aWRlcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnMsXG4gICAgICBpc1ZhbGlkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm92aWRlciAmJiAhcGF5bWVudFByb3ZpZGVyc1twcm92aWRlcl0pIHtcbiAgICBlcnJvcnMucHJvdmlkZXIgPSBcIkludmFsaWQgUHJvdmlkZXJcIjtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JzLFxuICAgICAgaXNWYWxpZDogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDBcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm92aWRlciA9IHBheW1lbnRQcm92aWRlcnNbcHJvdmlkZXJdO1xuICBjb25zdCBzZWxlY3RlZFBhcmFtcyA9IHBhcmFtcyB8fCB7fTsgLy8gc2V0IGRlZmF1bHQgdmFsdWVzXG4gIC8vIGlmICghc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDdXJyZW5jeSkgW3NlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3VycmVuY3ldID0gc2VsZWN0ZWRQcm92aWRlci52YWxpZEN1cnJlbmNpZXNcbiAgLy8gaWYgKCFzZWxlY3RlZFBhcmFtcy5maWF0VmFsdWUpIHNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZSA9IHNlbGVjdGVkUHJvdmlkZXIubWluT3JkZXJWYWx1ZVxuICAvLyBpZiAoIXNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kpIFtzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZENyeXB0b0N1cnJlbmN5XSA9IHNlbGVjdGVkUHJvdmlkZXIudmFsaWRDcnlwdG9DdXJyZW5jaWVzXG4gIC8vIHZhbGlkYXRpb25zXG5cbiAgaWYgKHNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZSkge1xuICAgIGNvbnN0IHJlcXVlc3RlZE9yZGVyQW1vdW50ID0gK3BhcnNlRmxvYXQoc2VsZWN0ZWRQYXJhbXMuZmlhdFZhbHVlLnRvU3RyaW5nKCkpIHx8IDA7XG4gICAgaWYgKHJlcXVlc3RlZE9yZGVyQW1vdW50IDwgc2VsZWN0ZWRQcm92aWRlci5taW5PcmRlclZhbHVlKSBlcnJvcnMuZmlhdFZhbHVlID0gXCJSZXF1ZXN0ZWQgYW1vdW50IGlzIGxvd2VyIHRoYW4gc3VwcG9ydGVkXCI7XG4gICAgaWYgKHJlcXVlc3RlZE9yZGVyQW1vdW50ID4gc2VsZWN0ZWRQcm92aWRlci5tYXhPcmRlclZhbHVlICYmIHNlbGVjdGVkUHJvdmlkZXIuZW5mb3JjZU1heCkgZXJyb3JzLmZpYXRWYWx1ZSA9IFwiUmVxdWVzdGVkIGFtb3VudCBpcyBoaWdoZXIgdGhhbiBzdXBwb3J0ZWRcIjtcbiAgfVxuXG4gIGlmIChzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5ICYmICFzZWxlY3RlZFByb3ZpZGVyLnZhbGlkQ3VycmVuY2llcy5pbmNsdWRlcyhzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5KSkge1xuICAgIGVycm9ycy5zZWxlY3RlZEN1cnJlbmN5ID0gXCJVbnN1cHBvcnRlZCBjdXJyZW5jeVwiO1xuICB9XG5cbiAgaWYgKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kgJiYgIXNlbGVjdGVkUHJvdmlkZXIudmFsaWRDcnlwdG9DdXJyZW5jaWVzLmluY2x1ZGVzKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kpKSB7XG4gICAgZXJyb3JzLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kgPSBcIlVuc3VwcG9ydGVkIGNyeXB0b0N1cnJlbmN5XCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVycm9ycyxcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMFxuICB9O1xufTsgLy8gdXRpbGl0eSBmdW5jdGlvbnNcblxuLyoqXG4gKiBqc29uLXJwYy1lbmdpbmUgbWlkZGxld2FyZSB0aGF0IGxvZ3MgUlBDIGVycm9ycyBhbmQgYW5kIHZhbGlkYXRlcyByZXEubWV0aG9kLlxuICpcbiAqIEBwYXJhbSBsb2cgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICogQHJldHVybnMgIGpzb24tcnBjLWVuZ2luZSBtaWRkbGV3YXJlIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JNaWRkbGV3YXJlKCkge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgLy8ganNvbi1ycGMtZW5naW5lIHdpbGwgdGVybWluYXRlIHRoZSByZXF1ZXN0IHdoZW4gaXQgbm90aWNlcyB0aGlzIGVycm9yXG4gICAgaWYgKHR5cGVvZiByZXEubWV0aG9kICE9PSBcInN0cmluZ1wiIHx8ICFyZXEubWV0aG9kKSB7XG4gICAgICByZXMuZXJyb3IgPSBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCJUaGUgcmVxdWVzdCAnbWV0aG9kJyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy5cIixcbiAgICAgICAgZGF0YTogcmVxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBuZXh0KGRvbmUgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlcnJvclxuICAgICAgfSA9IHJlcztcblxuICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgfVxuXG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzayAtIFJQQyBFcnJvcjogXCIuY29uY2F0KGVycm9yLm1lc3NhZ2UpLCBlcnJvcik7XG4gICAgICByZXR1cm4gZG9uZSgpO1xuICAgIH0pO1xuICB9O1xufSAvLyByZXNvbHZlIHJlc3BvbnNlLnJlc3VsdCBvciByZXNwb25zZSwgcmVqZWN0IGVycm9yc1xuLyoqXG4gKiBMb2dzIGEgc3RyZWFtIGRpc2Nvbm5lY3Rpb24gZXJyb3IuIEVtaXRzIGFuICdlcnJvcicgaWYgZ2l2ZW4gYW5cbiAqIEV2ZW50RW1pdHRlciB0aGF0IGhhcyBsaXN0ZW5lcnMgZm9yIHRoZSAnZXJyb3InIGV2ZW50LlxuICpcbiAqIEBwYXJhbSBsb2cgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICogQHBhcmFtIHJlbW90ZUxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBkaXNjb25uZWN0ZWQgc3RyZWFtLlxuICogQHBhcmFtIGVycm9yIC0gVGhlIGFzc29jaWF0ZWQgZXJyb3IgdG8gbG9nLlxuICogQHBhcmFtIGVtaXR0ZXIgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICovXG5cbmZ1bmN0aW9uIGxvZ1N0cmVhbURpc2Nvbm5lY3RXYXJuaW5nKHJlbW90ZUxhYmVsLCBlcnJvciwgZW1pdHRlcikge1xuICBsZXQgd2FybmluZ01zZyA9IFwiTWV0YU1hc2s6IExvc3QgY29ubmVjdGlvbiB0byBcXFwiXCIuY29uY2F0KHJlbW90ZUxhYmVsLCBcIlxcXCIuXCIpO1xuXG4gIGlmIChlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwICYmIGVycm9yLnN0YWNrKSB7XG4gICAgd2FybmluZ01zZyArPSBcIlxcblwiLmNvbmNhdChlcnJvci5zdGFjayk7XG4gIH1cblxuICBsb2cud2Fybih3YXJuaW5nTXNnKTtcblxuICBpZiAoZW1pdHRlciAmJiBlbWl0dGVyLmxpc3RlbmVyQ291bnQoXCJlcnJvclwiKSA+IDApIHtcbiAgICBlbWl0dGVyLmVtaXQoXCJlcnJvclwiLCB3YXJuaW5nTXNnKTtcbiAgfVxufVxuY29uc3QgZ2V0UHJlb3Blbkluc3RhbmNlSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcbmNvbnN0IGdldFRvcnVzVXJsID0gYXN5bmMgKGJ1aWxkRW52LCBpbnRlZ3JpdHkpID0+IHtcbiAgbGV0IHRvcnVzVXJsO1xuICBsZXQgbG9nTGV2ZWw7IC8vIERvIG5vdCBjaGFuZ2UgdGhpcyBsaW5lXG5cbiAgY29uc3QgdmVyc2lvbiA9IFwiMS4yNS4wXCI7XG4gIGxldCB2ZXJzaW9uVXNlZCA9IGludGVncml0eS52ZXJzaW9uIHx8IHZlcnNpb247XG5cbiAgdHJ5IHtcbiAgICBpZiAoKGJ1aWxkRW52ID09PSBcImJpbmFuY2VcIiB8fCBidWlsZEVudiA9PT0gXCJwcm9kdWN0aW9uXCIpICYmICFpbnRlZ3JpdHkudmVyc2lvbikge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgaWYgKCFjb25maWd1cmF0aW9uLnByb2RUb3J1c1VybCkgcmVzcG9uc2UgPSBhd2FpdCBnZXQoXCJcIi5jb25jYXQoY29uZmlndXJhdGlvbi5hcGksIFwiL2xhdGVzdHZlcnNpb24/bmFtZT1AdG9ydXNsYWJzL3RvcnVzLWVtYmVkJnZlcnNpb249XCIpLmNvbmNhdCh2ZXJzaW9uKSwge30sIHtcbiAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICB9KTtlbHNlIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiBjb25maWd1cmF0aW9uLnByb2RUb3J1c1VybFxuICAgICAgfTtcbiAgICAgIHZlcnNpb25Vc2VkID0gcmVzcG9uc2UuZGF0YTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXNcblxuICAgICAgY29uZmlndXJhdGlvbi5wcm9kVG9ydXNVcmwgPSByZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoZXJyb3IsIFwidW5hYmxlIHRvIGZldGNoIGxhdGVzdCB2ZXJzaW9uXCIpO1xuICB9XG5cbiAgbG9nLmluZm8oXCJ2ZXJzaW9uIHVzZWQ6IFwiLCB2ZXJzaW9uVXNlZCk7XG5cbiAgc3dpdGNoIChidWlsZEVudikge1xuICAgIGNhc2UgXCJiaW5hbmNlXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly9iaW5hbmNlLnRvci51cy92XCIuY29uY2F0KHZlcnNpb25Vc2VkKTtcbiAgICAgIGxvZ0xldmVsID0gXCJpbmZvXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJ0ZXN0aW5nXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly90ZXN0aW5nLnRvci51c1wiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJscmNcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL2xyYy50b3IudXNcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiYmV0YVwiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vYmV0YS50b3IudXNcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiZGV2ZWxvcG1lbnRcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQwNTBcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vYXBwLnRvci51cy92XCIuY29uY2F0KHZlcnNpb25Vc2VkKTtcbiAgICAgIGxvZ0xldmVsID0gXCJlcnJvclwiO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcnVzVXJsLFxuICAgIGxvZ0xldmVsXG4gIH07XG59O1xuY29uc3QgZ2V0VXNlckxhbmd1YWdlID0gKCkgPT4ge1xuICBsZXQgdXNlckxhbmd1YWdlID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCBcImVuLVVTXCI7XG4gIGNvbnN0IHVzZXJMYW5ndWFnZXMgPSB1c2VyTGFuZ3VhZ2Uuc3BsaXQoXCItXCIpO1xuICB1c2VyTGFuZ3VhZ2UgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlndXJhdGlvbi50cmFuc2xhdGlvbnMsIHVzZXJMYW5ndWFnZXNbMF0pID8gdXNlckxhbmd1YWdlc1swXSA6IFwiZW5cIjtcbiAgcmV0dXJuIHVzZXJMYW5ndWFnZTtcbn07XG5jb25zdCBFTUlUVEVEX05PVElGSUNBVElPTlMgPSBbXCJldGhfc3Vic2NyaXB0aW9uXCIgLy8gcGVyIGV0aC1qc29uLXJwYy1maWx0ZXJzL3N1YnNjcmlwdGlvbk1hbmFnZXJcbl07XG5jb25zdCBOT09QID0gKCkgPT4gey8vIGVtcHR5IGZ1bmN0aW9uXG59O1xuY29uc3QgRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPVyA9IFwiZGlyZWN0b3JpZXM9MCx0aXRsZWJhcj0wLHRvb2xiYXI9MCxzdGF0dXM9MCxsb2NhdGlvbj0wLG1lbnViYXI9MCxoZWlnaHQ9NjYwLHdpZHRoPTM3NVwiO1xuY29uc3QgRkVBVFVSRVNfREVGQVVMVF9XQUxMRVRfV0lORE9XID0gXCJkaXJlY3Rvcmllcz0wLHRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD03NDAsd2lkdGg9MTMxNVwiO1xuY29uc3QgRkVBVFVSRVNfQ09ORklSTV9XSU5ET1cgPSBcImRpcmVjdG9yaWVzPTAsdGl0bGViYXI9MCx0b29sYmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxtZW51YmFyPTAsaGVpZ2h0PTcwMCx3aWR0aD00NTBcIjtcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcblxuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZSAmJiAoIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICBlLmNvZGUgPT09IDIyIHx8IC8vIEZpcmVmb3hcbiAgICBlLmNvZGUgPT09IDEwMTQgfHwgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fCAvLyBGaXJlZm94XG4gICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMDtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0UG9wdXBGZWF0dXJlcygpIHtcbiAgLy8gRml4ZXMgZHVhbC1zY3JlZW4gcG9zaXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vc3QgYnJvd3NlcnMgICAgICBGaXJlZm94XG4gIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlblg7XG4gIGNvbnN0IGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogd2luZG93LnNjcmVlblk7XG4gIGNvbnN0IHcgPSAxMjAwO1xuICBjb25zdCBoID0gNzAwO1xuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICBjb25zdCBzeXN0ZW1ab29tID0gMTsgLy8gTm8gcmVsaWFibGUgZXN0aW1hdGVcblxuICBjb25zdCBsZWZ0ID0gTWF0aC5hYnMoKHdpZHRoIC0gdykgLyAyIC8gc3lzdGVtWm9vbSArIGR1YWxTY3JlZW5MZWZ0KTtcbiAgY29uc3QgdG9wID0gTWF0aC5hYnMoKGhlaWdodCAtIGgpIC8gMiAvIHN5c3RlbVpvb20gKyBkdWFsU2NyZWVuVG9wKTtcbiAgY29uc3QgZmVhdHVyZXMgPSBcInRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD1cIi5jb25jYXQoaCAvIHN5c3RlbVpvb20sIFwiLHdpZHRoPVwiKS5jb25jYXQodyAvIHN5c3RlbVpvb20sIFwiLHRvcD1cIikuY29uY2F0KHRvcCwgXCIsbGVmdD1cIikuY29uY2F0KGxlZnQpO1xuICByZXR1cm4gZmVhdHVyZXM7XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblNhZmVFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDsgLy8gcmVzb2x2ZSByZXNwb25zZS5yZXN1bHQsIHJlamVjdCBlcnJvcnNcblxuY29uc3QgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICBsZXQgdW53cmFwUmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4gKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnJvciB8fCByZXNwb25zZS5lcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdChlcnJvciB8fCByZXNwb25zZS5lcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1bndyYXBSZXN1bHQgfHwgQXJyYXkuaXNBcnJheShyZXNwb25zZSkgPyByZXNvbHZlKHJlc3BvbnNlKSA6IHJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcbiAgfTtcbn07XG5cbmNsYXNzIFRvcnVzSW5wYWdlUHJvdmlkZXIgZXh0ZW5kcyBTYWZlRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRoZSBjaGFpbiBJRCBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBFdGhlcmV1bSBjaGFpbi5cbiAgICogU2VlIFtjaGFpbklkLm5ldHdvcmtde0BsaW5rIGh0dHBzOi8vY2hhaW5pZC5uZXR3b3JrfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSB1c2VyJ3MgY3VycmVudGx5IHNlbGVjdGVkIEV0aGVyZXVtIGFkZHJlc3MuXG4gICAqIElmIG51bGwsIE1ldGFNYXNrIGlzIGVpdGhlciBsb2NrZWQgb3IgdGhlIHVzZXIgaGFzIG5vdCBwZXJtaXR0ZWQgYW55XG4gICAqIGFkZHJlc3NlcyB0byBiZSB2aWV3ZWQuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0aW5nIHRoYXQgdGhpcyBwcm92aWRlciBpcyBhIE1ldGFNYXNrIHByb3ZpZGVyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubmVjdGlvblN0cmVhbSkge1xuICAgIGxldCB7XG4gICAgICBtYXhFdmVudExpc3RlbmVycyA9IDEwMCxcbiAgICAgIHNob3VsZFNlbmRNZXRhZGF0YSA9IHRydWUsXG4gICAgICBqc29uUnBjU3RyZWFtTmFtZSA9IFwicHJvdmlkZXJcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGFpbklkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZWxlY3RlZEFkZHJlc3NcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9ycGNFbmdpbmVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5ldHdvcmtWZXJzaW9uXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaG91bGRTZW5kTWV0YWRhdGFcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzVG9ydXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9wdWJsaWNDb25maWdTdG9yZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidHJ5UHJlb3BlbkhhbmRsZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5hYmxlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9qc29uUnBjQ29ubmVjdGlvblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3NlbnRXYXJuaW5nc1wiLCB7XG4gICAgICAvLyBtZXRob2RzXG4gICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgZXhwZXJpbWVudGFsTWV0aG9kczogZmFsc2UsXG4gICAgICBzZW5kOiBmYWxzZSxcbiAgICAgIHB1YmxpY0NvbmZpZ1N0b3JlOiBmYWxzZSxcbiAgICAgIC8vIGV2ZW50c1xuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICAgIG5ldHdvcmtDaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgbm90aWZpY2F0aW9uOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFkdXBsZXgoY29ubmVjdGlvblN0cmVhbSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5lcnJvcnMuaW52YWxpZER1cGxleFN0cmVhbSgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzVG9ydXMgPSB0cnVlO1xuICAgIHRoaXMuc2V0TWF4TGlzdGVuZXJzKG1heEV2ZW50TGlzdGVuZXJzKTsgLy8gcHJpdmF0ZSBzdGF0ZVxuXG4gICAgdGhpcy5fc3RhdGUgPSBfb2JqZWN0U3ByZWFkJDEoe30sIFRvcnVzSW5wYWdlUHJvdmlkZXIuX2RlZmF1bHRTdGF0ZSk7IC8vIHB1YmxpYyBzdGF0ZVxuXG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBudWxsO1xuICAgIHRoaXMubmV0d29ya1ZlcnNpb24gPSBudWxsO1xuICAgIHRoaXMuY2hhaW5JZCA9IG51bGw7XG4gICAgdGhpcy5zaG91bGRTZW5kTWV0YWRhdGEgPSBzaG91bGRTZW5kTWV0YWRhdGE7IC8vIGJpbmQgZnVuY3Rpb25zICh0byBwcmV2ZW50IGUuZy4gd2ViM0AxLnggZnJvbSBtYWtpbmcgdW5ib3VuZCBjYWxscylcblxuICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QgPSB0aGlzLl9oYW5kbGVDb25uZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlRGlzY29ubmVjdCA9IHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0ID0gdGhpcy5faGFuZGxlU3RyZWFtRGlzY29ubmVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NlbmRTeW5jID0gdGhpcy5fc2VuZFN5bmMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ycGNSZXF1ZXN0ID0gdGhpcy5fcnBjUmVxdWVzdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uID0gdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9pbml0aWFsaXplU3RhdGUgPSB0aGlzLl9pbml0aWFsaXplU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlcXVlc3QgPSB0aGlzLnJlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmQgPSB0aGlzLnNlbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRBc3luYyA9IHRoaXMuc2VuZEFzeW5jLmJpbmQodGhpcyk7IC8vIHRoaXMuZW5hYmxlID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKTtcbiAgICAvLyBzZXR1cCBjb25uZWN0aW9uU3RyZWFtIG11bHRpcGxleGluZ1xuXG4gICAgY29uc3QgbXV4ID0gbmV3IE9iamVjdE11bHRpcGxleCgpO1xuICAgIHB1bXAoY29ubmVjdGlvblN0cmVhbSwgbXV4LCBjb25uZWN0aW9uU3RyZWFtLCB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0LmJpbmQodGhpcywgXCJNZXRhTWFza1wiKSk7IC8vIHN1YnNjcmliZSB0byBtZXRhbWFzayBwdWJsaWMgY29uZmlnIChvbmUtd2F5KVxuXG4gICAgdGhpcy5fcHVibGljQ29uZmlnU3RvcmUgPSBuZXcgT2JzZXJ2YWJsZVN0b3JlKHtcbiAgICAgIHN0b3JhZ2VLZXk6IFwiTWV0YW1hc2stQ29uZmlnXCJcbiAgICB9KTsgLy8gaGFuZGxlIGlzVW5sb2NrZWQgY2hhbmdlcywgYW5kIGNoYWluQ2hhbmdlZCBhbmQgbmV0d29ya0NoYW5nZWQgZXZlbnRzXG4gICAgLy8gdGhpcy5fcHVibGljQ29uZmlnU3RvcmUuc3Vic2NyaWJlKChzdHJpbmdpZmllZFN0YXRlKSA9PiB7XG4gICAgLy8gICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIHN0b3JlIGFzIHN0cmluZ1xuICAgIC8vICAgY29uc3Qgc3RhdGUgPSBKU09OLnBhcnNlKHN0cmluZ2lmaWVkU3RhdGUgYXMgdW5rbm93biBhcyBzdHJpbmcpO1xuICAgIC8vICAgaWYgKFwiaXNVbmxvY2tlZFwiIGluIHN0YXRlICYmIHN0YXRlLmlzVW5sb2NrZWQgIT09IHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQpIHtcbiAgICAvLyAgICAgdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCA9IHN0YXRlLmlzVW5sb2NrZWQ7XG4gICAgLy8gICAgIGlmICghdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCkge1xuICAgIC8vICAgICAgIC8vIGFjY291bnRzIGFyZSBuZXZlciBleHBvc2VkIHdoZW4gdGhlIGV4dGVuc2lvbiBpcyBsb2NrZWRcbiAgICAvLyAgICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQoW10pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIC8vIHRoaXMgd2lsbCBnZXQgdGhlIGV4cG9zZWQgYWNjb3VudHMsIGlmIGFueVxuICAgIC8vICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KFxuICAgIC8vICAgICAgICAgICB7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiwgcGFyYW1zOiBbXSB9LFxuICAgIC8vICAgICAgICAgICBOT09QLFxuICAgIC8vICAgICAgICAgICB0cnVlIC8vIGluZGljYXRpbmcgdGhhdCBldGhfYWNjb3VudHMgX3Nob3VsZF8gdXBkYXRlIGFjY291bnRzXG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyAgICAgICAgIC8vIFN3YWxsb3cgZXJyb3JcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmIChcInNlbGVjdGVkQWRkcmVzc1wiIGluIHN0YXRlICYmIHRoaXMuc2VsZWN0ZWRBZGRyZXNzICE9PSBzdGF0ZS5zZWxlY3RlZEFkZHJlc3MpIHtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KFxuICAgIC8vICAgICAgICAgeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsIHBhcmFtczogW10gfSxcbiAgICAvLyAgICAgICAgIE5PT1AsXG4gICAgLy8gICAgICAgICB0cnVlIC8vIGluZGljYXRpbmcgdGhhdCBldGhfYWNjb3VudHMgX3Nob3VsZF8gdXBkYXRlIGFjY291bnRzXG4gICAgLy8gICAgICAgKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoXykge1xuICAgIC8vICAgICAgIC8vIFN3YWxsb3cgZXJyb3JcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgLy8gRW1pdCBjaGFpbkNoYW5nZWQgZXZlbnQgb24gY2hhaW4gY2hhbmdlXG4gICAgLy8gICBpZiAoXCJjaGFpbklkXCIgaW4gc3RhdGUgJiYgc3RhdGUuY2hhaW5JZCAhPT0gdGhpcy5jaGFpbklkKSB7XG4gICAgLy8gICAgIHRoaXMuY2hhaW5JZCA9IHN0YXRlLmNoYWluSWQgfHwgbnVsbDtcbiAgICAvLyAgICAgdGhpcy5lbWl0KFwiY2hhaW5DaGFuZ2VkXCIsIHRoaXMuY2hhaW5JZCk7XG4gICAgLy8gICAgIC8vIGluZGljYXRlIHRoYXQgd2UndmUgY29ubmVjdGVkLCBmb3IgRUlQLTExOTMgY29tcGxpYW5jZVxuICAgIC8vICAgICAvLyB3ZSBkbyB0aGlzIGhlcmUgc28gdGhhdCBpZnJhbWUgY2FuIGluaXRpYWxpemVcbiAgICAvLyAgICAgaWYgKCF0aGlzLl9zdGF0ZS5oYXNFbWl0dGVkQ29ubmVjdGlvbikge1xuICAgIC8vICAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QodGhpcy5jaGFpbklkKTtcbiAgICAvLyAgICAgICB0aGlzLl9zdGF0ZS5oYXNFbWl0dGVkQ29ubmVjdGlvbiA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIC8vIEVtaXQgbmV0d29ya0NoYW5nZWQgZXZlbnQgb24gbmV0d29yayBjaGFuZ2VcbiAgICAvLyAgIGlmIChcIm5ldHdvcmtWZXJzaW9uXCIgaW4gc3RhdGUgJiYgc3RhdGUubmV0d29ya1ZlcnNpb24gIT09IHRoaXMubmV0d29ya1ZlcnNpb24pIHtcbiAgICAvLyAgICAgdGhpcy5uZXR3b3JrVmVyc2lvbiA9IHN0YXRlLm5ldHdvcmtWZXJzaW9uIHx8IG51bGw7XG4gICAgLy8gICAgIHRoaXMuZW1pdChcIm5ldHdvcmtDaGFuZ2VkXCIsIHRoaXMubmV0d29ya1ZlcnNpb24pO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgcHVtcChtdXguY3JlYXRlU3RyZWFtKFwicHVibGljQ29uZmlnXCIpLCBzdG9yZUFzU3RyZWFtKHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlKSwgLy8gUlBDIHJlcXVlc3RzIHNob3VsZCBzdGlsbCB3b3JrIGlmIG9ubHkgdGhpcyBzdHJlYW0gZmFpbHNcbiAgICBsb2dTdHJlYW1EaXNjb25uZWN0V2FybmluZy5iaW5kKHRoaXMsIFwiTWV0YU1hc2sgUHVibGljQ29uZmlnU3RvcmVcIikpOyAvLyBpZ25vcmUgcGhpc2hpbmcgd2FybmluZyBtZXNzYWdlIChoYW5kbGVkIGVsc2V3aGVyZSlcblxuICAgIG11eC5pZ25vcmVTdHJlYW0oXCJwaGlzaGluZ1wiKTsgLy8gc2V0dXAgb3duIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vIEVJUC0xMTkzIGNvbm5lY3RcblxuICAgIHRoaXMub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9KTsgLy8gY29ubmVjdCB0byBhc3luYyBwcm92aWRlclxuXG4gICAgY29uc3QganNvblJwY0Nvbm5lY3Rpb24gPSBjcmVhdGVTdHJlYW1NaWRkbGV3YXJlKCk7XG4gICAgcHVtcChqc29uUnBjQ29ubmVjdGlvbi5zdHJlYW0sIG11eC5jcmVhdGVTdHJlYW0oanNvblJwY1N0cmVhbU5hbWUpLCBqc29uUnBjQ29ubmVjdGlvbi5zdHJlYW0sIHRoaXMuX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QuYmluZCh0aGlzLCBcIk1ldGFNYXNrIFJwY1Byb3ZpZGVyXCIpKTsgLy8gaGFuZGxlIFJQQyByZXF1ZXN0cyB2aWEgZGFwcC1zaWRlIHJwYyBlbmdpbmVcblxuICAgIGNvbnN0IHJwY0VuZ2luZSA9IG5ldyBKUlBDRW5naW5lKCk7XG4gICAgcnBjRW5naW5lLnB1c2goY3JlYXRlSWRSZW1hcE1pZGRsZXdhcmUoKSk7XG4gICAgcnBjRW5naW5lLnB1c2goY3JlYXRlRXJyb3JNaWRkbGV3YXJlKCkpO1xuICAgIHJwY0VuZ2luZS5wdXNoKGpzb25ScGNDb25uZWN0aW9uLm1pZGRsZXdhcmUpO1xuICAgIHRoaXMuX3JwY0VuZ2luZSA9IHJwY0VuZ2luZTsgLy8ganNvbiBycGMgbm90aWZpY2F0aW9uIGxpc3RlbmVyXG5cbiAgICBqc29uUnBjQ29ubmVjdGlvbi5ldmVudHMub24oXCJub3RpZmljYXRpb25cIiwgcGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGFyYW1zXG4gICAgICB9ID0gcGF5bG9hZDtcblxuICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfYWNjb3VudHNDaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfdW5sb2NrU3RhdGVDaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVW5sb2NrU3RhdGVDaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfY2hhaW5DaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2hhaW5DaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKEVNSVRURURfTk9USUZJQ0FUSU9OUy5pbmNsdWRlcyhwYXlsb2FkLm1ldGhvZCkpIHtcbiAgICAgICAgLy8gRUlQIDExOTMgc3Vic2NyaXB0aW9ucywgcGVyIGV0aC1qc29uLXJwYy1maWx0ZXJzL3N1YnNjcmlwdGlvbk1hbmFnZXJcbiAgICAgICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBwYXlsb2FkKTsgLy8gZGVwcmVjYXRlZFxuXG4gICAgICAgIHRoaXMuZW1pdChcIm5vdGlmaWNhdGlvblwiLCBwYXJhbXMucmVzdWx0KTtcbiAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCB7XG4gICAgICAgICAgdHlwZTogbWV0aG9kLFxuICAgICAgICAgIGRhdGE6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSBmb3Igb2xkZXIgbm9uIEVJUCAxMTkzIHN1YnNjcmlwdGlvbnNcbiAgICAgIC8vIHRoaXMuZW1pdCgnZGF0YScsIG51bGwsIHBheWxvYWQpXG5cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwdWJsaWNDb25maWdTdG9yZSgpIHtcbiAgICBpZiAoIXRoaXMuX3NlbnRXYXJuaW5ncy5wdWJsaWNDb25maWdTdG9yZSkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3MucHVibGljQ29uZmlnU3RvcmUpO1xuICAgICAgdGhpcy5fc2VudFdhcm5pbmdzLnB1YmxpY0NvbmZpZ1N0b3JlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcHVibGljQ29uZmlnU3RvcmU7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgaW5wYWdlIHByb3ZpZGVyIGlzIGNvbm5lY3RlZCB0byBUb3J1cy5cbiAgICovXG5cblxuICBpc0Nvbm5lY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQ7XG4gIH1cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYW4gUlBDIHJlcXVlc3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdpdGggdGhlIGdpdmVuIHBhcmFtcy5cbiAgICogUmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBtZXRob2QgY2FsbCwgb3IgcmVqZWN0cyBvbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3MgLSBUaGUgUlBDIHJlcXVlc3QgYXJndW1lbnRzLlxuICAgKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIFJQQyBtZXRob2QsXG4gICAqIG9yIHJlamVjdHMgaWYgYW4gZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gICAqL1xuXG5cbiAgYXN5bmMgcmVxdWVzdChhcmdzKSB7XG4gICAgaWYgKCFhcmdzIHx8IHR5cGVvZiBhcmdzICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgIHRocm93IGV0aEVycm9ycy5ycGMuaW52YWxpZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuaW52YWxpZFJlcXVlc3RBcmdzKCksXG4gICAgICAgIGRhdGE6IGFyZ3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBhcmdzO1xuXG4gICAgaWYgKHR5cGVvZiBtZXRob2QgIT09IFwic3RyaW5nXCIgfHwgbWV0aG9kLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgZXRoRXJyb3JzLnJwYy5pbnZhbGlkUmVxdWVzdCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VzLmVycm9ycy5pbnZhbGlkUmVxdWVzdE1ldGhvZCgpLFxuICAgICAgICBkYXRhOiBhcmdzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiAodHlwZW9mIHBhcmFtcyAhPT0gXCJvYmplY3RcIiB8fCBwYXJhbXMgPT09IG51bGwpKSB7XG4gICAgICB0aHJvdyBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMuZXJyb3JzLmludmFsaWRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICAgIGRhdGE6IGFyZ3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9ycGNSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBwYXJhbXNcbiAgICAgIH0sIGdldFJwY1Byb21pc2VDYWxsYmFjayhyZXNvbHZlLCByZWplY3QpKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU3VibWl0cyBhbiBSUEMgcmVxdWVzdCBwZXIgdGhlIGdpdmVuIEpTT04tUlBDIHJlcXVlc3Qgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gcGF5bG9hZCAtIFRoZSBSUEMgcmVxdWVzdCBvYmplY3QuXG4gICAqIEBwYXJhbSBjYiAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG5cblxuICBzZW5kQXN5bmMocGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9ycGNSZXF1ZXN0KHBheWxvYWQsIGNhbGxiYWNrKTtcbiAgfVxuICAvKipcbiAgICogV2Ugb3ZlcnJpZGUgdGhlIGZvbGxvd2luZyBldmVudCBtZXRob2RzIHNvIHRoYXQgd2UgY2FuIHdhcm4gY29uc3VtZXJzXG4gICAqIGFib3V0IGRlcHJlY2F0ZWQgZXZlbnRzOlxuICAgKiAgIGFkZExpc3RlbmVyLCBvbiwgb25jZSwgcHJlcGVuZExpc3RlbmVyLCBwcmVwZW5kT25jZUxpc3RlbmVyXG4gICAqL1xuXG5cbiAgYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIG9uY2UoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIub25jZShldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHByZXBlbmRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5wcmVwZW5kTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBwcmVwZW5kT25jZUxpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLnByZXBlbmRPbmNlTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH0gLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGhlbHBlci5cbiAgICogUG9wdWxhdGVzIGluaXRpYWwgc3RhdGUgYnkgY2FsbGluZyAnd2FsbGV0X2dldFByb3ZpZGVyU3RhdGUnIGFuZCBlbWl0c1xuICAgKiBuZWNlc3NhcnkgZXZlbnRzLlxuICAgKi9cblxuXG4gIGFzeW5jIF9pbml0aWFsaXplU3RhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYWNjb3VudHMsXG4gICAgICAgIGNoYWluSWQsXG4gICAgICAgIGlzVW5sb2NrZWQsXG4gICAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIndhbGxldF9nZXRQcm92aWRlclN0YXRlXCJcbiAgICAgIH0pOyAvLyBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGNvbm5lY3RlZCwgZm9yIEVJUC0xMTkzIGNvbXBsaWFuY2VcblxuICAgICAgdGhpcy5lbWl0KFwiY29ubmVjdFwiLCB7XG4gICAgICAgIGNoYWluSWRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVDaGFpbkNoYW5nZWQoe1xuICAgICAgICBjaGFpbklkLFxuICAgICAgICBuZXR3b3JrVmVyc2lvblxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCh7XG4gICAgICAgIGFjY291bnRzLFxuICAgICAgICBpc1VubG9ja2VkXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKGFjY291bnRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IEZhaWxlZCB0byBnZXQgaW5pdGlhbCBzdGF0ZS4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBsb2cuaW5mbyhcImluaXRpYWxpemVkIHN0YXRlXCIpO1xuICAgICAgdGhpcy5fc3RhdGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lbWl0KFwiX2luaXRpYWxpemVkXCIpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW50ZXJuYWwgUlBDIG1ldGhvZC4gRm9yd2FyZHMgcmVxdWVzdHMgdG8gYmFja2dyb3VuZCB2aWEgdGhlIFJQQyBlbmdpbmUuXG4gICAqIEFsc28gcmVtYXAgaWRzIGluYm91bmQgYW5kIG91dGJvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcGF5bG9hZCAtIFRoZSBSUEMgcmVxdWVzdCBvYmplY3QuXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjb25zdW1lcidzIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gaXNJbnRlcm5hbCAtIGZhbHNlIC0gV2hldGhlciB0aGUgcmVxdWVzdCBpcyBpbnRlcm5hbC5cbiAgICovXG5cblxuICBfcnBjUmVxdWVzdChwYXlsb2FkLCBjYWxsYmFjaykge1xuICAgIGxldCBpc0ludGVybmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICBsZXQgY2IgPSBjYWxsYmFjaztcbiAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQ7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3BheWxvYWQpKSB7XG4gICAgICBpZiAoIV9wYXlsb2FkLmpzb25ycGMpIHtcbiAgICAgICAgX3BheWxvYWQuanNvbnJwYyA9IFwiMi4wXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChfcGF5bG9hZC5tZXRob2QgPT09IFwiZXRoX2FjY291bnRzXCIgfHwgX3BheWxvYWQubWV0aG9kID09PSBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIikge1xuICAgICAgICAvLyBoYW5kbGUgYWNjb3VudHMgY2hhbmdpbmdcbiAgICAgICAgY2IgPSAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQocmVzLnJlc3VsdCB8fCBbXSwgX3BheWxvYWQubWV0aG9kID09PSBcImV0aF9hY2NvdW50c1wiLCBpc0ludGVybmFsKTtcblxuICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoX3BheWxvYWQubWV0aG9kID09PSBcIndhbGxldF9nZXRQcm92aWRlclN0YXRlXCIpIHtcbiAgICAgICAgdGhpcy5fcnBjRW5naW5lLmhhbmRsZShwYXlsb2FkLCBjYik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudHJ5UHJlb3BlbkhhbmRsZShfcGF5bG9hZCwgY2IpO1xuICB9XG5cbiAgc2VuZChtZXRob2RPclBheWxvYWQsIGNhbGxiYWNrT3JBcmdzKSB7XG4gICAgaWYgKCF0aGlzLl9zZW50V2FybmluZ3Muc2VuZCkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3Muc2VuZERlcHJlY2F0aW9uKTtcbiAgICAgIHRoaXMuX3NlbnRXYXJuaW5ncy5zZW5kID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1ldGhvZE9yUGF5bG9hZCA9PT0gXCJzdHJpbmdcIiAmJiAoIWNhbGxiYWNrT3JBcmdzIHx8IEFycmF5LmlzQXJyYXkoY2FsbGJhY2tPckFyZ3MpKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kT3JQYXlsb2FkLFxuICAgICAgICAgICAgcGFyYW1zOiBjYWxsYmFja09yQXJnc1xuICAgICAgICAgIH0sIGdldFJwY1Byb21pc2VDYWxsYmFjayhyZXNvbHZlLCByZWplY3QsIGZhbHNlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZE9yUGF5bG9hZCAmJiB0eXBlb2YgbWV0aG9kT3JQYXlsb2FkID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjYWxsYmFja09yQXJncyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnBjUmVxdWVzdChtZXRob2RPclBheWxvYWQsIGNhbGxiYWNrT3JBcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VuZFN5bmMobWV0aG9kT3JQYXlsb2FkKTtcbiAgfVxuICAvKipcbiAgICogREVQUkVDQVRFRC5cbiAgICogSW50ZXJuYWwgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgbWV0aG9kLCB1c2VkIGluIHNlbmQuXG4gICAqL1xuXG5cbiAgX3NlbmRTeW5jKHBheWxvYWQpIHtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgc3dpdGNoIChwYXlsb2FkLm1ldGhvZCkge1xuICAgICAgY2FzZSBcImV0aF9hY2NvdW50c1wiOlxuICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcyA/IFt0aGlzLnNlbGVjdGVkQWRkcmVzc10gOiBbXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJldGhfY29pbmJhc2VcIjpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MgfHwgbnVsbDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJldGhfdW5pbnN0YWxsRmlsdGVyXCI6XG4gICAgICAgIHRoaXMuX3JwY1JlcXVlc3QocGF5bG9hZCwgTk9PUCk7XG5cbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJuZXRfdmVyc2lvblwiOlxuICAgICAgICByZXN1bHQgPSB0aGlzLm5ldHdvcmtWZXJzaW9uIHx8IG51bGw7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuZXJyb3JzLnVuc3VwcG9ydGVkU3luYyhwYXlsb2FkLm1ldGhvZCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogcGF5bG9hZC5pZCxcbiAgICAgIGpzb25ycGM6IHBheWxvYWQuanNvbnJwYyxcbiAgICAgIHJlc3VsdFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHByb3ZpZGVyIGJlY29tZXMgY29ubmVjdGVkLCB1cGRhdGVzIGludGVybmFsIHN0YXRlIGFuZCBlbWl0c1xuICAgKiByZXF1aXJlZCBldmVudHMuIElkZW1wb3RlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBjaGFpbklkIC0gVGhlIElEIG9mIHRoZSBuZXdseSBjb25uZWN0ZWQgY2hhaW4uXG4gICAqIGVtaXRzIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIjY29ubmVjdFxuICAgKi9cblxuXG4gIF9oYW5kbGVDb25uZWN0KGNoYWluSWQpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLmVtaXQoXCJjb25uZWN0XCIsIHtcbiAgICAgICAgY2hhaW5JZFxuICAgICAgfSk7XG4gICAgICBsb2cuZGVidWcobWVzc2FnZXMuaW5mby5jb25uZWN0ZWQoY2hhaW5JZCkpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogV2hlbiB0aGUgcHJvdmlkZXIgYmVjb21lcyBkaXNjb25uZWN0ZWQsIHVwZGF0ZXMgaW50ZXJuYWwgc3RhdGUgYW5kIGVtaXRzXG4gICAqIHJlcXVpcmVkIGV2ZW50cy4gSWRlbXBvdGVudCB3aXRoIHJlc3BlY3QgdG8gdGhlIGlzUmVjb3ZlcmFibGUgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBFcnJvciBjb2RlcyBwZXIgdGhlIENsb3NlRXZlbnQgc3RhdHVzIGNvZGVzIGFzIHJlcXVpcmVkIGJ5IEVJUC0xMTkzOlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2xvc2VFdmVudCNTdGF0dXNfY29kZXNcbiAgICpcbiAgICogQHBhcmFtIGlzUmVjb3ZlcmFibGUgLSBXaGV0aGVyIHRoZSBkaXNjb25uZWN0aW9uIGlzIHJlY292ZXJhYmxlLlxuICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gQSBjdXN0b20gZXJyb3IgbWVzc2FnZS5cbiAgICogZW1pdHMgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciNkaXNjb25uZWN0XG4gICAqL1xuXG5cbiAgX2hhbmRsZURpc2Nvbm5lY3QoaXNSZWNvdmVyYWJsZSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkIHx8ICF0aGlzLl9zdGF0ZS5pc1Blcm1hbmVudGx5RGlzY29ubmVjdGVkICYmICFpc1JlY292ZXJhYmxlKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgbGV0IGVycm9yO1xuXG4gICAgICBpZiAoaXNSZWNvdmVyYWJsZSkge1xuICAgICAgICBlcnJvciA9IG5ldyBFdGhlcmV1bVJwY0Vycm9yKDEwMTMsIC8vIFRyeSBhZ2FpbiBsYXRlclxuICAgICAgICBlcnJvck1lc3NhZ2UgfHwgbWVzc2FnZXMuZXJyb3JzLmRpc2Nvbm5lY3RlZCgpKTtcbiAgICAgICAgbG9nLmRlYnVnKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yID0gbmV3IEV0aGVyZXVtUnBjRXJyb3IoMTAxMSwgLy8gSW50ZXJuYWwgZXJyb3JcbiAgICAgICAgZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VzLmVycm9ycy5wZXJtYW5lbnRseURpc2Nvbm5lY3RlZCgpKTtcbiAgICAgICAgbG9nLmVycm9yKGVycm9yKTtcbiAgICAgICAgdGhpcy5jaGFpbklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RhdGUuYWNjb3VudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhdGUuaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdChcImRpc2Nvbm5lY3RcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBsb3N0IHRvIGNyaXRpY2FsIHN0cmVhbXMuXG4gICAqXG4gICAqIGVtaXRzIE1ldGFtYXNrSW5wYWdlUHJvdmlkZXIjZGlzY29ubmVjdFxuICAgKi9cblxuXG4gIF9oYW5kbGVTdHJlYW1EaXNjb25uZWN0KHN0cmVhbU5hbWUsIGVycm9yKSB7XG4gICAgbG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmcoc3RyZWFtTmFtZSwgZXJyb3IsIHRoaXMpO1xuXG4gICAgdGhpcy5faGFuZGxlRGlzY29ubmVjdChmYWxzZSwgZXJyb3IgPyBlcnJvci5tZXNzYWdlIDogdW5kZWZpbmVkKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYWNjb3VudHMgbWF5IGhhdmUgY2hhbmdlZC5cbiAgICovXG5cblxuICBfaGFuZGxlQWNjb3VudHNDaGFuZ2VkKGFjY291bnRzKSB7XG4gICAgbGV0IGlzRXRoQWNjb3VudHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIGxldCBpc0ludGVybmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICAvLyBkZWZlbnNpdmUgcHJvZ3JhbW1pbmdcbiAgICBsZXQgZmluYWxBY2NvdW50cyA9IGFjY291bnRzO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbmFsQWNjb3VudHMpKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgbm9uLWFycmF5IGFjY291bnRzIHBhcmFtZXRlci4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgZmluYWxBY2NvdW50cyk7XG4gICAgICBmaW5hbEFjY291bnRzID0gW107XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhY2NvdW50IG9mIGFjY291bnRzKSB7XG4gICAgICBpZiAodHlwZW9mIGFjY291bnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIG5vbi1zdHJpbmcgYWNjb3VudC4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgYWNjb3VudHMpO1xuICAgICAgICBmaW5hbEFjY291bnRzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gLy8gZW1pdCBhY2NvdW50c0NoYW5nZWQgaWYgYW55dGhpbmcgYWJvdXQgdGhlIGFjY291bnRzIGFycmF5IGhhcyBjaGFuZ2VkXG5cblxuICAgIGlmICghZGVxdWFsKHRoaXMuX3N0YXRlLmFjY291bnRzLCBmaW5hbEFjY291bnRzKSkge1xuICAgICAgLy8gd2Ugc2hvdWxkIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IGFjY291bnRzIGV2ZW4gYmVmb3JlIGV0aF9hY2NvdW50c1xuICAgICAgLy8gcmV0dXJucywgZXhjZXB0IGluIGNhc2VzIHdoZXJlIGlzSW50ZXJuYWwgaXMgdHJ1ZVxuICAgICAgaWYgKGlzRXRoQWNjb3VudHMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLl9zdGF0ZS5hY2NvdW50cykgJiYgdGhpcy5fc3RhdGUuYWNjb3VudHMubGVuZ3RoID4gMCAmJiAhaXNJbnRlcm5hbCkge1xuICAgICAgICBsb2cuZXJyb3IoJ01ldGFNYXNrOiBcImV0aF9hY2NvdW50c1wiIHVuZXhwZWN0ZWRseSB1cGRhdGVkIGFjY291bnRzLiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLicsIGZpbmFsQWNjb3VudHMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZS5hY2NvdW50cyA9IGZpbmFsQWNjb3VudHM7XG4gICAgICB0aGlzLmVtaXQoXCJhY2NvdW50c0NoYW5nZWRcIiwgZmluYWxBY2NvdW50cyk7XG4gICAgfSAvLyBoYW5kbGUgc2VsZWN0ZWRBZGRyZXNzXG5cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkQWRkcmVzcyAhPT0gZmluYWxBY2NvdW50c1swXSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBmaW5hbEFjY291bnRzWzBdIHx8IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVcG9uIHJlY2VpcHQgb2YgYSBuZXcgY2hhaW5JZCBhbmQgbmV0d29ya1ZlcnNpb24sIGVtaXRzIGNvcnJlc3BvbmRpbmdcbiAgICogZXZlbnRzIGFuZCBzZXRzIHJlbGV2YW50IHB1YmxpYyBzdGF0ZS5cbiAgICogRG9lcyBub3RoaW5nIGlmIG5laXRoZXIgdGhlIGNoYWluSWQgbm9yIHRoZSBuZXR3b3JrVmVyc2lvbiBhcmUgZGlmZmVyZW50XG4gICAqIGZyb20gZXhpc3RpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBlbWl0cyBNZXRhbWFza0lucGFnZVByb3ZpZGVyI2NoYWluQ2hhbmdlZFxuICAgKiBAcGFyYW0gbmV0d29ya0luZm8gLSBBbiBvYmplY3Qgd2l0aCBuZXR3b3JrIGluZm8uXG4gICAqL1xuXG5cbiAgX2hhbmRsZUNoYWluQ2hhbmdlZCgpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZCxcbiAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAoIWNoYWluSWQgfHwgIW5ldHdvcmtWZXJzaW9uKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgaW52YWxpZCBuZXR3b3JrIHBhcmFtZXRlcnMuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIHtcbiAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgbmV0d29ya1ZlcnNpb25cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXR3b3JrVmVyc2lvbiA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QoY2hhaW5JZCk7XG5cbiAgICAgIGlmIChjaGFpbklkICE9PSB0aGlzLmNoYWluSWQpIHtcbiAgICAgICAgdGhpcy5jaGFpbklkID0gY2hhaW5JZDtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJjaGFpbkNoYW5nZWRcIiwgdGhpcy5jaGFpbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXBvbiByZWNlaXB0IG9mIGEgbmV3IGlzVW5sb2NrZWQgc3RhdGUsIHNldHMgcmVsZXZhbnQgcHVibGljIHN0YXRlLlxuICAgKiBDYWxscyB0aGUgYWNjb3VudHMgY2hhbmdlZCBoYW5kbGVyIHdpdGggdGhlIHJlY2VpdmVkIGFjY291bnRzLCBvciBhbiBlbXB0eVxuICAgKiBhcnJheS5cbiAgICpcbiAgICogRG9lcyBub3RoaW5nIGlmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBlcXVhbCB0byB0aGUgZXhpc3RpbmcgdmFsdWUuXG4gICAqIFRoZXJlIGFyZSBubyBsb2NrL3VubG9jayBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRzIC0gT3B0aW9ucyBiYWcuXG4gICAqL1xuXG5cbiAgX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCgpIHtcbiAgICBsZXQge1xuICAgICAgYWNjb3VudHMsXG4gICAgICBpc1VubG9ja2VkXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAodHlwZW9mIGlzVW5sb2NrZWQgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgaW52YWxpZCBpc1VubG9ja2VkIHBhcmFtZXRlci4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwge1xuICAgICAgICBpc1VubG9ja2VkXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNVbmxvY2tlZCAhPT0gdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCA9IGlzVW5sb2NrZWQ7XG5cbiAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChhY2NvdW50cyB8fCBbXSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBXYXJucyBvZiBkZXByZWNhdGlvbiBmb3IgdGhlIGdpdmVuIGV2ZW50LCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cblxuXG4gIF93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpIHtcbiAgICBpZiAodGhpcy5fc2VudFdhcm5pbmdzLmV2ZW50c1tldmVudE5hbWVdID09PSBmYWxzZSkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3MuZXZlbnRzW2V2ZW50TmFtZV0pO1xuICAgICAgdGhpcy5fc2VudFdhcm5pbmdzLmV2ZW50c1tldmVudE5hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuXG5fZGVmaW5lUHJvcGVydHkoVG9ydXNJbnBhZ2VQcm92aWRlciwgXCJfZGVmYXVsdFN0YXRlXCIsIHtcbiAgYWNjb3VudHM6IG51bGwsXG4gIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgaXNVbmxvY2tlZDogZmFsc2UsXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZDogZmFsc2UsXG4gIGhhc0VtaXR0ZWRDb25uZWN0aW9uOiBmYWxzZVxufSk7XG5cbmNvbnN0IGRlZmF1bHRzID0gb3B0aW9ucyA9PiAoe1xuICBhbGdvcml0aG1zOiBvcHRpb25zLmFsZ29yaXRobXMgfHwgW1wic2hhMjU2XCJdLFxuICBkZWxpbWl0ZXI6IG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiIFwiLFxuICBmdWxsOiBvcHRpb25zLmZ1bGwgfHwgZmFsc2Vcbn0pOyAvLyBHZW5lcmF0ZSBsaXN0IG9mIGhhc2hlc1xuXG5cbmNvbnN0IGhhc2hlcyA9IChvcHRpb25zLCBkYXRhKSA9PiB7XG4gIGNvbnN0IGludGVybmFsSGFzaGVzID0ge307XG4gIG9wdGlvbnMuYWxnb3JpdGhtcy5mb3JFYWNoKGFsZ29yaXRobSA9PiB7XG4gICAgaW50ZXJuYWxIYXNoZXNbYWxnb3JpdGhtXSA9IGNyZWF0ZUhhc2goYWxnb3JpdGhtKS51cGRhdGUoZGF0YSwgXCJ1dGY4XCIpLmRpZ2VzdChcImJhc2U2NFwiKTtcbiAgfSk7XG4gIHJldHVybiBpbnRlcm5hbEhhc2hlcztcbn07IC8vIEJ1aWxkIGFuIGludGVncml0eSBzdHJpbmdcblxuXG5jb25zdCBpbnRlZ3JpdHkgPSAob3B0aW9ucywgc3JpKSA9PiB7XG4gIGxldCBvdXRwdXQgPSBcIlwiOyAvLyBIYXNoIGxpc3RcblxuICBvdXRwdXQgKz0gT2JqZWN0LmtleXMoc3JpLmhhc2hlcykubWFwKGFsZ29yaXRobSA9PiBcIlwiLmNvbmNhdChhbGdvcml0aG0sIFwiLVwiKS5jb25jYXQoc3JpLmhhc2hlc1thbGdvcml0aG1dKSkuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBtYWluID0gKG9wdGlvbnMsIGRhdGEpID0+IHtcbiAgLy8gRGVmYXVsdHNcbiAgY29uc3QgZmluYWxPcHRpb25zID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGNvbnN0IHNyaSA9IHtcbiAgICBoYXNoZXM6IGhhc2hlcyhmaW5hbE9wdGlvbnMsIGRhdGEpLFxuICAgIGludGVncml0eTogdW5kZWZpbmVkXG4gIH07XG4gIHNyaS5pbnRlZ3JpdHkgPSBpbnRlZ3JpdHkoZmluYWxPcHRpb25zLCBzcmkpO1xuICByZXR1cm4gZmluYWxPcHRpb25zLmZ1bGwgPyBzcmkgOiBzcmkuaW50ZWdyaXR5O1xufTtcblxuY2xhc3MgUG9wdXBIYW5kbGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICB1cmwsXG4gICAgICB0YXJnZXQsXG4gICAgICBmZWF0dXJlc1xuICAgIH0gPSBfcmVmO1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRhcmdldFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZmVhdHVyZXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpbmRvd1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2luZG93VGltZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlDbG9zZWRXaW5kb3dcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0IHx8IFwiX2JsYW5rXCI7XG4gICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVzIHx8IGdldFBvcHVwRmVhdHVyZXMoKTtcbiAgICB0aGlzLndpbmRvdyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLndpbmRvd1RpbWVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaUNsb3NlZFdpbmRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5fc2V0dXBUaW1lcigpO1xuICB9XG5cbiAgX3NldHVwVGltZXIoKSB7XG4gICAgdGhpcy53aW5kb3dUaW1lciA9IE51bWJlcihzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5kb3cgJiYgdGhpcy53aW5kb3cuY2xvc2VkKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy53aW5kb3dUaW1lcik7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlDbG9zZWRXaW5kb3cpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJjbG9zZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaUNsb3NlZFdpbmRvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndpbmRvdyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMud2luZG93ID09PSB1bmRlZmluZWQpIGNsZWFySW50ZXJ2YWwodGhpcy53aW5kb3dUaW1lcik7XG4gICAgfSwgNTAwKSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHZhciBfdGhpcyR3aW5kb3c7XG5cbiAgICB0aGlzLndpbmRvdyA9IHdpbmRvdy5vcGVuKHRoaXMudXJsLmhyZWYsIHRoaXMudGFyZ2V0LCB0aGlzLmZlYXR1cmVzKTtcbiAgICBpZiAoKF90aGlzJHdpbmRvdyA9IHRoaXMud2luZG93KSAhPT0gbnVsbCAmJiBfdGhpcyR3aW5kb3cgIT09IHZvaWQgMCAmJiBfdGhpcyR3aW5kb3cuZm9jdXMpIHRoaXMud2luZG93LmZvY3VzKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pQ2xvc2VkV2luZG93ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy53aW5kb3cpIHRoaXMud2luZG93LmNsb3NlKCk7XG4gIH1cblxuICByZWRpcmVjdChsb2NhdGlvblJlcGxhY2VPblJlZGlyZWN0KSB7XG4gICAgaWYgKGxvY2F0aW9uUmVwbGFjZU9uUmVkaXJlY3QpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHRoaXMudXJsLmhyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMudXJsLmhyZWY7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGdpdmVuIGltYWdlIFVSTCBleGlzdHNcbiAqIEBwYXJhbSB1cmwgLSB0aGUgdXJsIG9mIHRoZSBpbWFnZVxuICogQHJldHVybnMgLSB3aGV0aGVyIHRoZSBpbWFnZSBleGlzdHNcbiAqL1xuXG5mdW5jdGlvbiBpbWdFeGlzdHModXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHRydWUpO1xuXG4gICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlc29sdmUoZmFsc2UpO1xuXG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBFeHRyYWN0cyBhIG5hbWUgZm9yIHRoZSBzaXRlIGZyb20gdGhlIERPTVxuICovXG5cblxuY29uc3QgZ2V0U2l0ZU5hbWUgPSB3aW5kb3cgPT4ge1xuICBjb25zdCB7XG4gICAgZG9jdW1lbnRcbiAgfSA9IHdpbmRvdztcbiAgY29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkID4gbWV0YVtwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiXScpO1xuXG4gIGlmIChzaXRlTmFtZSkge1xuICAgIHJldHVybiBzaXRlTmFtZS5jb250ZW50O1xuICB9XG5cbiAgY29uc3QgbWV0YVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCA+IG1ldGFbbmFtZT1cInRpdGxlXCJdJyk7XG5cbiAgaWYgKG1ldGFUaXRsZSkge1xuICAgIHJldHVybiBtZXRhVGl0bGUuY29udGVudDtcbiAgfVxuXG4gIGlmIChkb2N1bWVudC50aXRsZSAmJiBkb2N1bWVudC50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnRpdGxlO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbn07XG4vKipcbiAqIEV4dHJhY3RzIGFuIGljb24gZm9yIHRoZSBzaXRlIGZyb20gdGhlIERPTVxuICovXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2l0ZUljb24od2luZG93KSB7XG4gIGNvbnN0IHtcbiAgICBkb2N1bWVudFxuICB9ID0gd2luZG93OyAvLyBVc2UgdGhlIHNpdGUncyBmYXZpY29uIGlmIGl0IGV4aXN0c1xuXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCA+IGxpbmtbcmVsPVwic2hvcnRjdXQgaWNvblwiXScpO1xuXG4gIGlmIChpY29uICYmIChhd2FpdCBpbWdFeGlzdHMoaWNvbi5ocmVmKSkpIHtcbiAgICByZXR1cm4gaWNvbi5ocmVmO1xuICB9IC8vIFNlYXJjaCB0aHJvdWdoIGF2YWlsYWJsZSBpY29ucyBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyXG5cblxuICBpY29uID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoZWFkID4gbGlua1tyZWw9XCJpY29uXCJdJykpLmZpbmQoX2ljb24gPT4gQm9vbGVhbihfaWNvbi5ocmVmKSk7XG5cbiAgaWYgKGljb24gJiYgKGF3YWl0IGltZ0V4aXN0cyhpY29uLmhyZWYpKSkge1xuICAgIHJldHVybiBpY29uLmhyZWY7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogR2V0cyBzaXRlIG1ldGFkYXRhIGFuZCByZXR1cm5zIGl0XG4gKlxuICovXG5cblxuY29uc3QgZ2V0U2l0ZU1ldGFkYXRhID0gYXN5bmMgKCkgPT4gKHtcbiAgbmFtZTogZ2V0U2l0ZU5hbWUod2luZG93KSxcbiAgaWNvbjogYXdhaXQgZ2V0U2l0ZUljb24od2luZG93KVxufSk7XG4vKipcbiAqIFNlbmRzIHNpdGUgbWV0YWRhdGEgb3ZlciBhbiBSUEMgcmVxdWVzdC5cbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRTaXRlTWV0YWRhdGEoZW5naW5lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9tYWluTWV0YWRhdGEgPSBhd2FpdCBnZXRTaXRlTWV0YWRhdGEoKTsgLy8gY2FsbCBlbmdpbmUuaGFuZGxlIGRpcmVjdGx5IHRvIGF2b2lkIG5vcm1hbCBSUEMgcmVxdWVzdCBoYW5kbGluZ1xuXG4gICAgZW5naW5lLmhhbmRsZSh7XG4gICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgaWQ6IGdldFByZW9wZW5JbnN0YW5jZUlkKCksXG4gICAgICBtZXRob2Q6IFwid2FsbGV0X3NlbmREb21haW5NZXRhZGF0YVwiLFxuICAgICAgcGFyYW1zOiBkb21haW5NZXRhZGF0YVxuICAgIH0sIE5PT1ApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZy5lcnJvcih7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuc2VuZFNpdGVNZXRhZGF0YSgpLFxuICAgICAgb3JpZ2luYWxFcnJvcjogZXJyb3JcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJob3N0XCIsIFwiY2hhaW5JZFwiLCBcIm5ldHdvcmtOYW1lXCJdO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgZGVmYXVsdFZlcmlmaWVycyA9IHtcbiAgW0xPR0lOX1BST1ZJREVSLkdPT0dMRV06IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5GQUNFQk9PS106IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5SRURESVRdOiB0cnVlLFxuICBbTE9HSU5fUFJPVklERVIuVFdJVENIXTogdHJ1ZSxcbiAgW0xPR0lOX1BST1ZJREVSLkRJU0NPUkRdOiB0cnVlXG59O1xuY29uc3QgaWZyYW1lSW50ZWdyaXR5ID0gXCJzaGEzODQtbzAyREp5WElSbFgvWmx6Yk82aTlQbTV3TC9tQSt1WmpUUWN4NDBIdzBVRVo4Slp3VGtXSUoxZ3BmKzRXVWdnOFwiO1xuY29uc3QgZXhwZWN0ZWRDYWNoZUNvbnRyb2xIZWFkZXIgPSBcIm1heC1hZ2U9MzYwMFwiO1xuY29uc3QgVU5TQUZFX01FVEhPRFMgPSBbXCJldGhfc2VuZFRyYW5zYWN0aW9uXCIsIFwiZXRoX3NpZ25UeXBlZERhdGFcIiwgXCJldGhfc2lnblR5cGVkRGF0YV92M1wiLCBcImV0aF9zaWduVHlwZWREYXRhX3Y0XCIsIFwicGVyc29uYWxfc2lnblwiLCBcImV0aF9nZXRFbmNyeXB0aW9uUHVibGljS2V5XCIsIFwiZXRoX2RlY3J5cHRcIl07XG5jb25zdCBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSA9IHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIik7IC8vIHByZWxvYWQgZm9yIGlmcmFtZSBkb2Vzbid0IHdvcmsgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTkzMjY3XG5cbihhc3luYyBmdW5jdGlvbiBwcmVMb2FkSWZyYW1lKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICBjb25zdCB0b3J1c0lmcmFtZUh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBjb25zdCB7XG4gICAgICB0b3J1c1VybFxuICAgIH0gPSBhd2FpdCBnZXRUb3J1c1VybChcInByb2R1Y3Rpb25cIiwge1xuICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgaGFzaDogaWZyYW1lSW50ZWdyaXR5LFxuICAgICAgdmVyc2lvbjogXCJcIlxuICAgIH0pO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5ocmVmID0gXCJcIi5jb25jYXQodG9ydXNVcmwsIFwiL3BvcHVwXCIpO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgdG9ydXNJZnJhbWVIdG1sLnR5cGUgPSBcInRleHQvaHRtbFwiO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5yZWwgPSBcInByZWZldGNoXCI7XG5cbiAgICBpZiAodG9ydXNJZnJhbWVIdG1sLnJlbExpc3QgJiYgdG9ydXNJZnJhbWVIdG1sLnJlbExpc3Quc3VwcG9ydHMpIHtcbiAgICAgIGlmICh0b3J1c0lmcmFtZUh0bWwucmVsTGlzdC5zdXBwb3J0cyhcInByZWZldGNoXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodG9ydXNJZnJhbWVIdG1sKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nLndhcm4oZXJyb3IpO1xuICB9XG59KSgpO1xuXG5jbGFzcyBUb3J1cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCB7XG4gICAgICBidXR0b25Qb3NpdGlvbiA9IEJVVFRPTl9QT1NJVElPTi5CT1RUT01fTEVGVCxcbiAgICAgIG1vZGFsWkluZGV4ID0gOTk5OTksXG4gICAgICBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYnV0dG9uUG9zaXRpb25cIiwgQlVUVE9OX1BPU0lUSU9OLkJPVFRPTV9MRUZUKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzVXJsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0lmcmFtZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3R5bGVMaW5rXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0xvZ2dlZEluXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0luaXRpYWxpemVkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c1dpZGdldFZpc2liaWxpdHlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzQWxlcnRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5vZGVEZXRhaWxNYW5hZ2VyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0pzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhcGlLZXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1vZGFsWkluZGV4XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGVydFpJbmRleFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNBbGVydENvbnRhaW5lclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNJZnJhbWVGdWxsU2NyZWVuXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3aGl0ZUxhYmVsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZXF1ZXN0ZWRWZXJpZmllclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY3VycmVudFZlcmlmaWVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbWJlZFRyYW5zbGF0aW9uc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXRoZXJldW1cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3ZpZGVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb21tdW5pY2F0aW9uTXV4XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0xvZ2luQ2FsbGJhY2tcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRhcHBTdG9yYWdlS2V5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXltZW50UHJvdmlkZXJzXCIsIGNvbmZpZ3VyYXRpb24ucGF5bWVudFByb3ZpZGVycyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJsb2dpbkhpbnRcIiwgXCJcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1c2VXYWxsZXRDb25uZWN0XCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLmJ1dHRvblBvc2l0aW9uID0gYnV0dG9uUG9zaXRpb247XG4gICAgdGhpcy50b3J1c1VybCA9IFwiXCI7XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7IC8vIGV0aGVyZXVtLmVuYWJsZSB3b3JraW5nXG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gaW5pdCBkb25lXG5cbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IHRydWU7XG4gICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50VmVyaWZpZXIgPSBcIlwiO1xuICAgIHRoaXMubm9kZURldGFpbE1hbmFnZXIgPSBuZXcgTm9kZURldGFpbE1hbmFnZXIoKTtcbiAgICB0aGlzLnRvcnVzSnMgPSBuZXcgVG9ydXNKcyh7XG4gICAgICBtZXRhZGF0YUhvc3Q6IFwiaHR0cHM6Ly9tZXRhZGF0YS50b3IudXNcIixcbiAgICAgIGFsbG93SG9zdDogXCJodHRwczovL3NpZ25lci50b3IudXMvYXBpL2FsbG93XCJcbiAgICB9KTtcbiAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcbiAgICBUb3J1c0pzLnNldEFQSUtleShhcGlLZXkpO1xuICAgIHNldEFQSUtleShhcGlLZXkpO1xuICAgIHRoaXMubW9kYWxaSW5kZXggPSBtb2RhbFpJbmRleDtcbiAgICB0aGlzLmFsZXJ0WkluZGV4ID0gbW9kYWxaSW5kZXggKyAxMDAwO1xuICAgIHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5kYXBwU3RvcmFnZUtleSA9IFwiXCI7XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGxldCB7XG4gICAgICBidWlsZEVudiA9IFRPUlVTX0JVSUxEX0VOVi5QUk9EVUNUSU9OLFxuICAgICAgZW5hYmxlTG9nZ2luZyA9IGZhbHNlLFxuICAgICAgLy8gZGVwcmVjYXRlZDogdXNlIGxvZ2luQ29uZmlnIGluc3RlYWRcbiAgICAgIGVuYWJsZWRWZXJpZmllcnMgPSBkZWZhdWx0VmVyaWZpZXJzLFxuICAgICAgbmV0d29yayA9IHtcbiAgICAgICAgaG9zdDogXCJtYWlubmV0XCIsXG4gICAgICAgIGNoYWluSWQ6IG51bGwsXG4gICAgICAgIG5ldHdvcmtOYW1lOiBcIlwiLFxuICAgICAgICBibG9ja0V4cGxvcmVyOiBcIlwiLFxuICAgICAgICB0aWNrZXI6IFwiXCIsXG4gICAgICAgIHRpY2tlck5hbWU6IFwiXCJcbiAgICAgIH0sXG4gICAgICBsb2dpbkNvbmZpZyA9IHt9LFxuICAgICAgc2hvd1RvcnVzQnV0dG9uID0gdHJ1ZSxcbiAgICAgIGludGVncml0eSA9IHtcbiAgICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgICBoYXNoOiBpZnJhbWVJbnRlZ3JpdHksXG4gICAgICAgIHZlcnNpb246IFwiXCJcbiAgICAgIH0sXG4gICAgICB3aGl0ZUxhYmVsLFxuICAgICAgc2tpcFRLZXkgPSBmYWxzZSxcbiAgICAgIHVzZUxvY2FsU3RvcmFnZSA9IGZhbHNlLFxuICAgICAgdXNlV2FsbGV0Q29ubmVjdCA9IGZhbHNlXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkgdGhyb3cgbmV3IEVycm9yKFwiQWxyZWFkeSBpbml0aWFsaXplZFwiKTtcbiAgICBjb25zdCB7XG4gICAgICB0b3J1c1VybCxcbiAgICAgIGxvZ0xldmVsXG4gICAgfSA9IGF3YWl0IGdldFRvcnVzVXJsKGJ1aWxkRW52LCBpbnRlZ3JpdHkpO1xuICAgIGxvZy5pbmZvKHRvcnVzVXJsLCBcInVybCBsb2FkZWRcIik7XG4gICAgdGhpcy50b3J1c1VybCA9IHRvcnVzVXJsO1xuICAgIHRoaXMud2hpdGVMYWJlbCA9IHdoaXRlTGFiZWw7XG4gICAgdGhpcy51c2VXYWxsZXRDb25uZWN0ID0gdXNlV2FsbGV0Q29ubmVjdDtcbiAgICBsb2cuc2V0RGVmYXVsdExldmVsKGxvZ0xldmVsKTtcbiAgICBpZiAoZW5hYmxlTG9nZ2luZykgbG9nLmVuYWJsZUFsbCgpO2Vsc2UgbG9nLmRpc2FibGVBbGwoKTtcbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IHNob3dUb3J1c0J1dHRvbjtcbiAgICBsZXQgZGFwcFN0b3JhZ2VLZXkgPSBcIlwiO1xuXG4gICAgaWYgKGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlICYmIHVzZUxvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5ID0gXCJcIi5jb25jYXQoY29uZmlndXJhdGlvbi5sb2NhbFN0b3JhZ2VLZXlQcmVmaXgpLmNvbmNhdCh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgY29uc3Qgc3RvcmVkS2V5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUtleSk7XG4gICAgICBpZiAoc3RvcmVkS2V5KSBkYXBwU3RvcmFnZUtleSA9IHN0b3JlZEtleTtlbHNlIHtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkS2V5ID0gXCJ0b3J1cy1hcHAtXCIuY29uY2F0KGdldFByZW9wZW5JbnN0YW5jZUlkKCkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBnZW5lcmF0ZWRLZXkpO1xuICAgICAgICBkYXBwU3RvcmFnZUtleSA9IGdlbmVyYXRlZEtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRhcHBTdG9yYWdlS2V5ID0gZGFwcFN0b3JhZ2VLZXk7XG4gICAgY29uc3QgdG9ydXNJZnJhbWVVcmwgPSBuZXcgVVJMKHRvcnVzVXJsKTtcbiAgICBpZiAodG9ydXNJZnJhbWVVcmwucGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpKSB0b3J1c0lmcmFtZVVybC5wYXRobmFtZSArPSBcInBvcHVwXCI7ZWxzZSB0b3J1c0lmcmFtZVVybC5wYXRobmFtZSArPSBcIi9wb3B1cFwiO1xuXG4gICAgaWYgKGRhcHBTdG9yYWdlS2V5KSB7XG4gICAgICB0b3J1c0lmcmFtZVVybC5oYXNoID0gXCIjZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KGRhcHBTdG9yYWdlS2V5KTtcbiAgICB9IC8vIElmcmFtZSBjb2RlXG5cblxuICAgIHRoaXMudG9ydXNJZnJhbWUgPSBodG1sVG9FbGVtZW50KFwiPGlmcmFtZVxcbiAgICAgICAgaWQ9XFxcInRvcnVzSWZyYW1lXFxcIlxcbiAgICAgICAgYWxsb3c9XCIuY29uY2F0KHVzZVdhbGxldENvbm5lY3QgPyBcImNhbWVyYVwiIDogXCJcIiwgXCJcXG4gICAgICAgIGNsYXNzPVxcXCJ0b3J1c0lmcmFtZVxcXCJcXG4gICAgICAgIHNyYz1cXFwiXCIpLmNvbmNhdCh0b3J1c0lmcmFtZVVybC5ocmVmLCBcIlxcXCJcXG4gICAgICAgIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lOyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgcmlnaHQ6IDA7IHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDA7IHotaW5kZXg6IFwiKS5jb25jYXQodGhpcy5tb2RhbFpJbmRleCwgXCJcXFwiXFxuICAgICAgPjwvaWZyYW1lPlwiKSk7XG4gICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyID0gaHRtbFRvRWxlbWVudCgnPGRpdiBpZD1cInRvcnVzQWxlcnRDb250YWluZXJcIj48L2Rpdj4nKTtcbiAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcInotaW5kZXhcIiwgdGhpcy5hbGVydFpJbmRleC50b1N0cmluZygpKTtcbiAgICBjb25zdCBsaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIi5jb25jYXQodG9ydXNVcmwsIFwiL2Nzcy93aWRnZXQuY3NzXCIpKTtcbiAgICB0aGlzLnN0eWxlTGluayA9IGxpbms7XG4gICAgY29uc3Qge1xuICAgICAgZGVmYXVsdExhbmd1YWdlID0gZ2V0VXNlckxhbmd1YWdlKCksXG4gICAgICBjdXN0b21UcmFuc2xhdGlvbnMgPSB7fVxuICAgIH0gPSB0aGlzLndoaXRlTGFiZWwgfHwge307XG4gICAgY29uc3QgbWVyZ2VkVHJhbnNsYXRpb25zID0gZGVlcG1lcmdlKGNvbmZpZ3VyYXRpb24udHJhbnNsYXRpb25zLCBjdXN0b21UcmFuc2xhdGlvbnMpO1xuICAgIGNvbnN0IGxhbmd1YWdlVHJhbnNsYXRpb25zID0gbWVyZ2VkVHJhbnNsYXRpb25zW2RlZmF1bHRMYW5ndWFnZV0gfHwgY29uZmlndXJhdGlvbi50cmFuc2xhdGlvbnNbZ2V0VXNlckxhbmd1YWdlKCldO1xuICAgIHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMgPSBsYW5ndWFnZVRyYW5zbGF0aW9ucy5lbWJlZDtcblxuICAgIGNvbnN0IGhhbmRsZVNldHVwID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZG9jdW1lbnRSZWFkeSgpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy50b3J1c0lmcmFtZS5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgLy8gb25seSBkbyB0aGlzIGlmIGlmcmFtZSBpcyBub3QgZnVsbCBzY3JlZW5cbiAgICAgICAgICB0aGlzLl9zZXR1cFdlYjMoKTtcblxuICAgICAgICAgIGNvbnN0IGluaXRTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwiaW5pdF9zdHJlYW1cIik7XG4gICAgICAgICAgaW5pdFN0cmVhbS5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgfSA9IGNodW5rO1xuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJpbml0X2NvbXBsZXRlXCIgJiYgZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIC8vIHJlc29sdmUgcHJvbWlzZVxuICAgICAgICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUodGhpcy5pc0lmcmFtZUZ1bGxTY3JlZW4pO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGluaXRTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgICAgbmFtZTogXCJpbml0X3N0cmVhbVwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlbmFibGVkVmVyaWZpZXJzLFxuICAgICAgICAgICAgICBsb2dpbkNvbmZpZyxcbiAgICAgICAgICAgICAgd2hpdGVMYWJlbDogdGhpcy53aGl0ZUxhYmVsLFxuICAgICAgICAgICAgICBidXR0b25Qb3NpdGlvbjogdGhpcy5idXR0b25Qb3NpdGlvbixcbiAgICAgICAgICAgICAgdG9ydXNXaWRnZXRWaXNpYmlsaXR5OiB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSxcbiAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgICAgICAgICAgc2tpcFRLZXksXG4gICAgICAgICAgICAgIG5ldHdvcmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlTGluayk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudG9ydXNJZnJhbWUpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmIChidWlsZEVudiA9PT0gXCJwcm9kdWN0aW9uXCIgJiYgaW50ZWdyaXR5LmNoZWNrKSB7XG4gICAgICAvLyBoYWNreSBzb2x1dGlvbiB0byBjaGVjayBmb3IgaWZyYW1lIGludGVncml0eVxuICAgICAgY29uc3QgZmV0Y2hVcmwgPSBcIlwiLmNvbmNhdCh0b3J1c1VybCwgXCIvcG9wdXBcIik7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goZmV0Y2hVcmwsIHtcbiAgICAgICAgY2FjaGU6IFwicmVsb2FkXCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcC5oZWFkZXJzLmdldChcIkNhY2hlLUNvbnRyb2xcIikgIT09IGV4cGVjdGVkQ2FjaGVDb250cm9sSGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgQ2FjaGUtQ29udHJvbCBoZWFkZXJzLCBnb3QgXCIuY29uY2F0KHJlc3AuaGVhZGVycy5nZXQoXCJDYWNoZS1Db250cm9sXCIpKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzcC50ZXh0KCk7XG4gICAgICBjb25zdCBjYWxjdWxhdGVkSW50ZWdyaXR5ID0gbWFpbih7XG4gICAgICAgIGFsZ29yaXRobXM6IFtcInNoYTM4NFwiXVxuICAgICAgfSwgcmVzcG9uc2UpO1xuICAgICAgbG9nLmluZm8oY2FsY3VsYXRlZEludGVncml0eSwgXCJpbnRlZ3JpdHlcIik7XG5cbiAgICAgIGlmIChjYWxjdWxhdGVkSW50ZWdyaXR5ID09PSBpbnRlZ3JpdHkuaGFzaCkge1xuICAgICAgICBhd2FpdCBoYW5kbGVTZXR1cCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckluaXQoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW50ZWdyaXR5IGNoZWNrIGZhaWxlZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgaGFuZGxlU2V0dXAoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgbGV0IHtcbiAgICAgIHZlcmlmaWVyID0gXCJcIixcbiAgICAgIGxvZ2luX2hpbnQ6IGxvZ2luSGludCA9IFwiXCJcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbCBpbml0KCkgZmlyc3RcIik7XG4gICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IHZlcmlmaWVyO1xuICAgIHRoaXMubG9naW5IaW50ID0gbG9naW5IaW50O1xuICAgIHJldHVybiB0aGlzLmV0aGVyZXVtLmVuYWJsZSgpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciBoYXMgbm90IGxvZ2dlZCBpbiB5ZXRcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvZ091dFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJsb2dvdXRcIik7XG4gICAgICBsb2dPdXRTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcImxvZ091dFwiXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHN0YXR1c1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJzdGF0dXNcIik7XG5cbiAgICAgIGNvbnN0IHN0YXR1c1N0cmVhbUhhbmRsZXIgPSBzdGF0dXMgPT4ge1xuICAgICAgICBpZiAoIXN0YXR1cy5sb2dnZWRJbikge1xuICAgICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY3VycmVudFZlcmlmaWVyID0gXCJcIjtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyID0gXCJcIjtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiU29tZSBFcnJvciBPY2N1cmVkXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZVN0cmVhbShzdGF0dXNTdHJlYW0sIFwiZGF0YVwiLCBzdGF0dXNTdHJlYW1IYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNsZWFuVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgYXdhaXQgdGhpcy5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFySW5pdCgpO1xuICB9XG5cbiAgY2xlYXJJbml0KCkge1xuICAgIGZ1bmN0aW9uIGlzRWxlbWVudChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KHRoaXMuc3R5bGVMaW5rKSAmJiB3aW5kb3cuZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnN0eWxlTGluaykpIHtcbiAgICAgIHRoaXMuc3R5bGVMaW5rLnJlbW92ZSgpO1xuICAgICAgdGhpcy5zdHlsZUxpbmsgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudCh0aGlzLnRvcnVzSWZyYW1lKSAmJiB3aW5kb3cuZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnRvcnVzSWZyYW1lKSkge1xuICAgICAgdGhpcy50b3J1c0lmcmFtZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMudG9ydXNJZnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudCh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIpICYmIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMudG9ydXNBbGVydENvbnRhaW5lcikpIHtcbiAgICAgIHRoaXMudG9ydXNBbGVydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGhpZGVUb3J1c0J1dHRvbigpIHtcbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXMoZmFsc2UpO1xuXG4gICAgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuICB9XG5cbiAgc2hvd1RvcnVzQnV0dG9uKCkge1xuICAgIHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NlbmRXaWRnZXRWaXNpYmlsaXR5U3RhdHVzKHRydWUpO1xuXG4gICAgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuICB9XG5cbiAgc2V0UHJvdmlkZXIoKSB7XG4gICAgbGV0IF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgbGV0IHtcbiAgICAgIGhvc3QgPSBcIm1haW5uZXRcIixcbiAgICAgIGNoYWluSWQgPSBudWxsLFxuICAgICAgbmV0d29ya05hbWUgPSBcIlwiXG4gICAgfSA9IF9yZWYsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckNoYW5nZVN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJwcm92aWRlcl9jaGFuZ2VcIik7XG5cbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgc3VjY2Vzc1xuICAgICAgICB9ID0gY2h1bmsuZGF0YTtcbiAgICAgICAgbG9nLmluZm8oY2h1bmspO1xuXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcInNvbWUgZXJyb3Igb2NjdXJlZFwiKSk7XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVTdHJlYW0ocHJvdmlkZXJDaGFuZ2VTdHJlYW0sIFwiZGF0YVwiLCBoYW5kbGVyKTtcbiAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkLCB7XG4gICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX1BST1ZJREVSX0NIQU5HRV9XSU5ET1dcbiAgICAgIH0pO1xuXG4gICAgICBwcm92aWRlckNoYW5nZVN0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwic2hvd19wcm92aWRlcl9jaGFuZ2VcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG5ldHdvcms6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgaG9zdCxcbiAgICAgICAgICAgIGNoYWluSWQsXG4gICAgICAgICAgICBuZXR3b3JrTmFtZVxuICAgICAgICAgIH0sIHJlc3QpLFxuICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkLFxuICAgICAgICAgIG92ZXJyaWRlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dXYWxsZXQocGF0aCkge1xuICAgIGxldCBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGNvbnN0IHNob3dXYWxsZXRTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwic2hvd193YWxsZXRcIik7XG4gICAgY29uc3QgZmluYWxQYXRoID0gcGF0aCA/IFwiL1wiLmNvbmNhdChwYXRoKSA6IFwiXCI7XG4gICAgc2hvd1dhbGxldFN0cmVhbS53cml0ZSh7XG4gICAgICBuYW1lOiBcInNob3dfd2FsbGV0XCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBhdGg6IGZpbmFsUGF0aFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2hvd1dhbGxldEhhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJzaG93X3dhbGxldF9pbnN0YW5jZVwiKSB7XG4gICAgICAgIC8vIExldCB0aGUgZXJyb3IgcHJvcG9nYXRlIHVwIChoZW5jZSwgbm8gdHJ5IGNhdGNoKVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaW5zdGFuY2VJZFxuICAgICAgICB9ID0gY2h1bmsuZGF0YTtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKFwiXCIuY29uY2F0KHRoaXMudG9ydXNVcmwsIFwiL3dhbGxldFwiKS5jb25jYXQoZmluYWxQYXRoKSk7IC8vIFVzaW5nIFVSTCBjb25zdHJ1Y3RvciB0byBwcmV2ZW50IGpzIGluamVjdGlvbiBhbmQgYWxsb3cgcGFyYW1ldGVyIHZhbGlkYXRpb24uIVxuXG4gICAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJpbnRlZ3JpdHlcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiaW5zdGFuY2VJZFwiLCBpbnN0YW5jZUlkKTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoeCwgcGFyYW1zW3hdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGFwcFN0b3JhZ2VLZXkpIHtcbiAgICAgICAgICBmaW5hbFVybC5oYXNoID0gXCIjZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KHRoaXMuZGFwcFN0b3JhZ2VLZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FsbGV0V2luZG93ID0gbmV3IFBvcHVwSGFuZGxlcih7XG4gICAgICAgICAgdXJsOiBmaW5hbFVybCxcbiAgICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfREVGQVVMVF9XQUxMRVRfV0lORE9XXG4gICAgICAgIH0pO1xuICAgICAgICB3YWxsZXRXaW5kb3cub3BlbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBoYW5kbGVTdHJlYW0oc2hvd1dhbGxldFN0cmVhbSwgXCJkYXRhXCIsIHNob3dXYWxsZXRIYW5kbGVyKTtcbiAgfVxuXG4gIGFzeW5jIGdldFB1YmxpY0FkZHJlc3MoX3JlZjIpIHtcbiAgICBsZXQge1xuICAgICAgdmVyaWZpZXIsXG4gICAgICB2ZXJpZmllcklkLFxuICAgICAgaXNFeHRlbmRlZCA9IGZhbHNlXG4gICAgfSA9IF9yZWYyO1xuICAgIGlmICghY29uZmlndXJhdGlvbi5zdXBwb3J0ZWRWZXJpZmllckxpc3QuaW5jbHVkZXModmVyaWZpZXIpIHx8ICFXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUFt2ZXJpZmllcl0pIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcmlmaWVyXCIpO1xuICAgIGNvbnN0IG5vZGVEZXRhaWxzID0gYXdhaXQgdGhpcy5ub2RlRGV0YWlsTWFuYWdlci5nZXROb2RlRGV0YWlscyh7XG4gICAgICB2ZXJpZmllcixcbiAgICAgIHZlcmlmaWVySWRcbiAgICB9KTtcbiAgICBjb25zdCBlbmRwb2ludHMgPSBub2RlRGV0YWlscy50b3J1c05vZGVFbmRwb2ludHM7XG4gICAgY29uc3QgdG9ydXNOb2RlUHVicyA9IG5vZGVEZXRhaWxzLnRvcnVzTm9kZVB1YjtcbiAgICBjb25zdCB3YWxsZXRWZXJpZmllciA9IHZlcmlmaWVyO1xuICAgIGNvbnN0IG9wZW5sb2dpblZlcmlmaWVyID0gV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVBbdmVyaWZpZXJdO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nVjFVc2VyID0gYXdhaXQgdGhpcy50b3J1c0pzLmdldFVzZXJUeXBlQW5kQWRkcmVzcyhlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIHtcbiAgICAgICAgdmVyaWZpZXI6IHdhbGxldFZlcmlmaWVyLFxuICAgICAgICB2ZXJpZmllcklkXG4gICAgICB9KTtcblxuICAgICAgaWYgKGV4aXN0aW5nVjFVc2VyLnR5cGVPZlVzZXIgPT09IFwidjFcIikge1xuICAgICAgICBpZiAoIWlzRXh0ZW5kZWQpIHJldHVybiBleGlzdGluZ1YxVXNlci5hZGRyZXNzO1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdWMVVzZXI7XG4gICAgICB9IC8vIHdlIGRvbid0IHN1cHBvcnQgdjIgdXNlcnMgd2l0aCB2MSB2ZXJpZmllcnMgc28gZ2V0IG9yIGFzc2lnbiB0aGUga2V5IGZvciB2MiB1c2VyIG9uIHYyIGB2ZXJpZmllcmBcblxuXG4gICAgICBjb25zdCB2MlVzZXIgPSBhd2FpdCB0aGlzLnRvcnVzSnMuZ2V0VXNlclR5cGVBbmRBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywge1xuICAgICAgICB2ZXJpZmllcjogb3BlbmxvZ2luVmVyaWZpZXIsXG4gICAgICAgIHZlcmlmaWVySWRcbiAgICAgIH0sIHRydWUpO1xuICAgICAgaWYgKCFpc0V4dGVuZGVkKSByZXR1cm4gdjJVc2VyLmFkZHJlc3M7XG4gICAgICByZXR1cm4gdjJVc2VyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgIT09IG51bGwgJiYgZXJyb3IgIT09IHZvaWQgMCAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiVmVyaWZpZXIgKyBWZXJpZmllcklEIGhhcyBub3QgeWV0IGJlZW4gYXNzaWduZWRcIikpIHtcbiAgICAgICAgLy8gaWYgdXNlciBkb2Vzbid0IGhhdmUga2V5IHRoZW4gYXNzaWduIGl0IHdpdGggdjIgdmVyaWZpZXJcbiAgICAgICAgY29uc3QgbmV3VjJVc2VyID0gYXdhaXQgdGhpcy50b3J1c0pzLmdldFVzZXJUeXBlQW5kQWRkcmVzcyhlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIHtcbiAgICAgICAgICB2ZXJpZmllcjogb3BlbmxvZ2luVmVyaWZpZXIsXG4gICAgICAgICAgdmVyaWZpZXJJZFxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgaWYgKCFpc0V4dGVuZGVkKSByZXR1cm4gbmV3VjJVc2VyLmFkZHJlc3M7XG4gICAgICAgIHJldHVybiBuZXdWMlVzZXI7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGdldFVzZXJJbmZvKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICBjb25zdCB1c2VySW5mb0FjY2Vzc1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ1c2VyX2luZm9fYWNjZXNzXCIpO1xuICAgICAgICB1c2VySW5mb0FjY2Vzc1N0cmVhbS53cml0ZSh7XG4gICAgICAgICAgbmFtZTogXCJ1c2VyX2luZm9fYWNjZXNzX3JlcXVlc3RcIlxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1c2VySW5mb0FjY2Vzc0hhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYXBwcm92ZWQsXG4gICAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICAgIHJlamVjdGVkLFxuICAgICAgICAgICAgICBuZXdSZXF1ZXN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSA9IGNodW5rO1xuXG4gICAgICAgICAgaWYgKG5hbWUgPT09IFwidXNlcl9pbmZvX2FjY2Vzc19yZXNwb25zZVwiKSB7XG4gICAgICAgICAgICBpZiAoYXBwcm92ZWQpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgcmVqZWN0ZWQgdGhlIHJlcXVlc3RcIikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInVzZXJfaW5mb1wiKTtcblxuICAgICAgICAgICAgICBjb25zdCB1c2VySW5mb0hhbmRsZXIgPSBoYW5kbGVyQ2h1bmsgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyQ2h1bmsubmFtZSA9PT0gXCJ1c2VyX2luZm9fcmVzcG9uc2VcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJDaHVuay5kYXRhLmFwcHJvdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaGFuZGxlckNodW5rLmRhdGEucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdFwiKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGhhbmRsZVN0cmVhbSh1c2VySW5mb1N0cmVhbSwgXCJkYXRhXCIsIHVzZXJJbmZvSGFuZGxlcik7XG4gICAgICAgICAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX1BST1ZJREVSX0NIQU5HRV9XSU5ET1dcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdXNlckluZm9TdHJlYW0ud3JpdGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwidXNlcl9pbmZvX3JlcXVlc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVTdHJlYW0odXNlckluZm9BY2Nlc3NTdHJlYW0sIFwiZGF0YVwiLCB1c2VySW5mb0FjY2Vzc0hhbmRsZXIpO1xuICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIGhhcyBub3QgbG9nZ2VkIGluIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWF0ZVRvcHVwKHByb3ZpZGVyLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgIGlzVmFsaWRcbiAgICAgICAgfSA9IHZhbGlkYXRlUGF5bWVudFByb3ZpZGVyKHByb3ZpZGVyLCBwYXJhbXMpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvcHVwU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInRvcHVwXCIpO1xuXG4gICAgICAgIGNvbnN0IHRvcHVwSGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJ0b3B1cF9yZXNwb25zZVwiKSB7XG4gICAgICAgICAgICBpZiAoY2h1bmsuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoY2h1bmsuZGF0YS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoY2h1bmsuZGF0YS5lcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVTdHJlYW0odG9wdXBTdHJlYW0sIFwiZGF0YVwiLCB0b3B1cEhhbmRsZXIpO1xuICAgICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkKTtcblxuICAgICAgICB0b3B1cFN0cmVhbS53cml0ZSh7XG4gICAgICAgICAgbmFtZTogXCJ0b3B1cF9yZXF1ZXN0XCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlRvcnVzIGlzIG5vdCBpbml0aWFsaXplZCB5ZXRcIikpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW5XaXRoUHJpdmF0ZUtleShsb2dpblBhcmFtcykge1xuICAgIGNvbnN0IHtcbiAgICAgIHByaXZhdGVLZXksXG4gICAgICB1c2VySW5mb1xuICAgIH0gPSBsb2dpblBhcmFtcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICBpZiAoQnVmZmVyLmZyb20ocHJpdmF0ZUtleSwgXCJoZXhcIikubGVuZ3RoICE9PSAzMikge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIHByaXZhdGUga2V5LCBQbGVhc2UgcHJvdmlkZSBhIDMyIGJ5dGUgdmFsaWQgc2VjcDI1azEgcHJpdmF0ZSBrZXlcIikpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvZ2luUHJpdktleVN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJsb2dpbl93aXRoX3ByaXZhdGVfa2V5XCIpO1xuXG4gICAgICAgIGNvbnN0IGxvZ2luSGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJsb2dpbl93aXRoX3ByaXZhdGVfa2V5X3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmIChjaHVuay5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaHVuay5kYXRhLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihjaHVuay5kYXRhLmVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbShsb2dpblByaXZLZXlTdHJlYW0sIFwiZGF0YVwiLCBsb2dpbkhhbmRsZXIpO1xuICAgICAgICBsb2dpblByaXZLZXlTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgIG5hbWU6IFwibG9naW5fd2l0aF9wcml2YXRlX2tleV9yZXF1ZXN0XCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcHJpdmF0ZUtleSxcbiAgICAgICAgICAgIHVzZXJJbmZvXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiVG9ydXMgaXMgbm90IGluaXRpYWxpemVkIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzaG93V2FsbGV0Q29ubmVjdFNjYW5uZXIoKSB7XG4gICAgaWYgKCF0aGlzLnVzZVdhbGxldENvbm5lY3QpIHRocm93IG5ldyBFcnJvcihcIlNldCBgdXNlV2FsbGV0Q29ubmVjdGAgYXMgdHJ1ZSBpbiBpbml0IGZ1bmN0aW9uIG9wdGlvbnMgdG8gdXNlIHdhbGxldCBjb25uZWN0IHNjYW5uZXJcIik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3YWxsZXRfY29ubmVjdF9zdHJlYW1cIik7XG5cbiAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEhhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwid2FsbGV0X2Nvbm5lY3Rfc3RyZWFtX3Jlc1wiKSB7XG4gICAgICAgICAgICBpZiAoY2h1bmsuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoY2h1bmsuZGF0YS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoY2h1bmsuZGF0YS5lcnJvcikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbSh3YWxsZXRDb25uZWN0U3RyZWFtLCBcImRhdGFcIiwgd2FsbGV0Q29ubmVjdEhhbmRsZXIpO1xuICAgICAgICB3YWxsZXRDb25uZWN0U3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcIndhbGxldF9jb25uZWN0X3N0cmVhbV9yZXFcIlxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKHRydWUpO1xuICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIGhhcyBub3QgbG9nZ2VkIGluIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkKSB7XG4gICAgbGV0IHtcbiAgICAgIHVybCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGZlYXR1cmVzXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBpZiAocHJlb3Blbkluc3RhbmNlSWQpIHtcbiAgICAgIGNvbnN0IHdpbmRvd1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3aW5kb3dcIik7XG4gICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsIHx8IFwiXCIuY29uY2F0KHRoaXMudG9ydXNVcmwsIFwiL3JlZGlyZWN0P3ByZW9wZW5JbnN0YW5jZUlkPVwiKS5jb25jYXQocHJlb3Blbkluc3RhbmNlSWQpKTtcblxuICAgICAgaWYgKHRoaXMuZGFwcFN0b3JhZ2VLZXkpIHtcbiAgICAgICAgLy8gSWYgbXVsdGlwbGUgaW5zdGFuY2VzLCBpdCByZXR1cm5zIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKGZpbmFsVXJsLmhhc2gpIGZpbmFsVXJsLmhhc2ggKz0gXCImZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KHRoaXMuZGFwcFN0b3JhZ2VLZXkpO2Vsc2UgZmluYWxVcmwuaGFzaCA9IFwiI2RhcHBTdG9yYWdlS2V5PVwiLmNvbmNhdCh0aGlzLmRhcHBTdG9yYWdlS2V5KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFuZGxlZFdpbmRvdyA9IG5ldyBQb3B1cEhhbmRsZXIoe1xuICAgICAgICB1cmw6IGZpbmFsVXJsLFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIGZlYXR1cmVzXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZWRXaW5kb3cub3BlbigpO1xuXG4gICAgICBpZiAoIWhhbmRsZWRXaW5kb3cud2luZG93KSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVBvcHVwQmxvY2tBbGVydChwcmVvcGVuSW5zdGFuY2VJZCwgZmluYWxVcmwuaHJlZik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3dTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcIm9wZW5lZF93aW5kb3dcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjbG9zZUhhbmRsZXIgPSBfcmVmMyA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWQ6IHJlY2VpdmVkSWQsXG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgfSA9IF9yZWYzO1xuXG4gICAgICAgIGlmIChyZWNlaXZlZElkID09PSBwcmVvcGVuSW5zdGFuY2VJZCAmJiBjbG9zZSkge1xuICAgICAgICAgIGhhbmRsZWRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICB3aW5kb3dTdHJlYW0ucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsIGNsb3NlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHdpbmRvd1N0cmVhbS5vbihcImRhdGFcIiwgY2xvc2VIYW5kbGVyKTtcbiAgICAgIGhhbmRsZWRXaW5kb3cub25jZShcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgd2luZG93U3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNsb3NlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvd1N0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgY2xvc2VIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFbWJlZFdoaXRlTGFiZWwoZWxlbWVudCkge1xuICAgIC8vIFNldCB3aGl0ZWxhYmVsXG4gICAgY29uc3Qge1xuICAgICAgdGhlbWVcbiAgICB9ID0gdGhpcy53aGl0ZUxhYmVsIHx8IHt9O1xuXG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlzRGFyayA9IGZhbHNlLFxuICAgICAgICBjb2xvcnMgPSB7fVxuICAgICAgfSA9IHRoZW1lO1xuICAgICAgaWYgKGlzRGFyaykgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9ydXMtZGFya1wiKTtcbiAgICAgIGlmIChjb2xvcnMudG9ydXNCcmFuZDEpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRvcnVzLWJyYW5kLTFcIiwgY29sb3JzLnRvcnVzQnJhbmQxKTtcbiAgICAgIGlmIChjb2xvcnMudG9ydXNHcmF5MikgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdG9ydXMtZ3JheS0yXCIsIGNvbG9ycy50b3J1c0dyYXkyKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0TG9nb1VybCgpIHtcbiAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbCwgX3RoaXMkd2hpdGVMYWJlbCR0aGVtO1xuXG4gICAgbGV0IGxvZ29VcmwgPSBcIlwiLmNvbmNhdCh0aGlzLnRvcnVzVXJsLCBcIi9pbWFnZXMvdG9ydXNfaWNvbi1ibHVlLnN2Z1wiKTtcblxuICAgIGlmICgoX3RoaXMkd2hpdGVMYWJlbCA9IHRoaXMud2hpdGVMYWJlbCkgIT09IG51bGwgJiYgX3RoaXMkd2hpdGVMYWJlbCAhPT0gdm9pZCAwICYmIChfdGhpcyR3aGl0ZUxhYmVsJHRoZW0gPSBfdGhpcyR3aGl0ZUxhYmVsLnRoZW1lKSAhPT0gbnVsbCAmJiBfdGhpcyR3aGl0ZUxhYmVsJHRoZW0gIT09IHZvaWQgMCAmJiBfdGhpcyR3aGl0ZUxhYmVsJHRoZW0uaXNEYXJrKSB7XG4gICAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbDI7XG5cbiAgICAgIGxvZ29VcmwgPSAoKF90aGlzJHdoaXRlTGFiZWwyID0gdGhpcy53aGl0ZUxhYmVsKSA9PT0gbnVsbCB8fCBfdGhpcyR3aGl0ZUxhYmVsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkd2hpdGVMYWJlbDIubG9nb0xpZ2h0KSB8fCBsb2dvVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbDM7XG5cbiAgICAgIGxvZ29VcmwgPSAoKF90aGlzJHdoaXRlTGFiZWwzID0gdGhpcy53aGl0ZUxhYmVsKSA9PT0gbnVsbCB8fCBfdGhpcyR3aGl0ZUxhYmVsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkd2hpdGVMYWJlbDMubG9nb0RhcmspIHx8IGxvZ29Vcmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvZ29Vcmw7XG4gIH1cblxuICBfc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXMoc3RhdHVzKSB7XG4gICAgY29uc3QgdG9ydXNXaWRnZXRWaXNpYmlsaXR5U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInRvcnVzLXdpZGdldC12aXNpYmlsaXR5XCIpO1xuICAgIHRvcnVzV2lkZ2V0VmlzaWJpbGl0eVN0cmVhbS53cml0ZSh7XG4gICAgICBkYXRhOiBzdGF0dXNcbiAgICB9KTtcbiAgfVxuXG4gIF9kaXNwbGF5SWZyYW1lKCkge1xuICAgIGxldCBpc0Z1bGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgIGNvbnN0IHN0eWxlID0ge307IC8vIHNldCBwaGFzZVxuXG4gICAgaWYgKCFpc0Z1bGwpIHtcbiAgICAgIHN0eWxlLmRpc3BsYXkgPSB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCI3MHB4XCI7XG4gICAgICBzdHlsZS53aWR0aCA9IFwiNzBweFwiO1xuXG4gICAgICBzd2l0Y2ggKHRoaXMuYnV0dG9uUG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uVE9QX0xFRlQ6XG4gICAgICAgICAgc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQlVUVE9OX1BPU0lUSU9OLlRPUF9SSUdIVDpcbiAgICAgICAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uQk9UVE9NX1JJR0hUOlxuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEJVVFRPTl9QT1NJVElPTi5CT1RUT01fTEVGVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBzdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgICAgc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICBzdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odGhpcy50b3J1c0lmcmFtZS5zdHlsZSwgc3R5bGUpO1xuICAgIHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuID0gaXNGdWxsO1xuICB9XG5cbiAgX3NldHVwV2ViMygpIHtcbiAgICBsb2cuaW5mbyhcInNldHVwV2ViMyBydW5uaW5nXCIpOyAvLyBzZXR1cCBiYWNrZ3JvdW5kIGNvbm5lY3Rpb25cblxuICAgIGNvbnN0IG1ldGFtYXNrU3RyZWFtID0gbmV3IEJhc2VQb3N0TWVzc2FnZVN0cmVhbSh7XG4gICAgICBuYW1lOiBcImVtYmVkX21ldGFtYXNrXCIsXG4gICAgICB0YXJnZXQ6IFwiaWZyYW1lX21ldGFtYXNrXCIsXG4gICAgICB0YXJnZXRXaW5kb3c6IHRoaXMudG9ydXNJZnJhbWUuY29udGVudFdpbmRvdyxcbiAgICAgIHRhcmdldE9yaWdpbjogbmV3IFVSTCh0aGlzLnRvcnVzVXJsKS5vcmlnaW5cbiAgICB9KTsgLy8gRHVlIHRvIGNvbXBhdGliaWxpdHkgcmVhc29ucywgd2Ugc2hvdWxkIG5vdCBzZXQgdXAgbXVsdGlwbGV4aW5nIG9uIHdpbmRvdy5tZXRhbWFza3N0cmVhbVxuICAgIC8vIGJlY2F1c2UgdGhlIE1ldGFtYXNrSW5wYWdlUHJvdmlkZXIgYWxzbyBhdHRlbXB0cyB0byBkbyBzby5cbiAgICAvLyBXZSBjcmVhdGUgYW5vdGhlciBMb2NhbE1lc3NhZ2VEdXBsZXhTdHJlYW0gZm9yIGNvbW11bmljYXRpb24gYmV0d2VlbiBkYXBwIDw+IGlmcmFtZVxuXG4gICAgY29uc3QgY29tbXVuaWNhdGlvblN0cmVhbSA9IG5ldyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0oe1xuICAgICAgbmFtZTogXCJlbWJlZF9jb21tXCIsXG4gICAgICB0YXJnZXQ6IFwiaWZyYW1lX2NvbW1cIixcbiAgICAgIHRhcmdldFdpbmRvdzogdGhpcy50b3J1c0lmcmFtZS5jb250ZW50V2luZG93LFxuICAgICAgdGFyZ2V0T3JpZ2luOiBuZXcgVVJMKHRoaXMudG9ydXNVcmwpLm9yaWdpblxuICAgIH0pOyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggR290Y2hpIDopXG4gICAgLy8gd2luZG93Lm1ldGFtYXNrU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uU3RyZWFtXG4gICAgLy8gY29tcG9zZSB0aGUgaW5wYWdlIHByb3ZpZGVyXG5cbiAgICBjb25zdCBpbnBhZ2VQcm92aWRlciA9IG5ldyBUb3J1c0lucGFnZVByb3ZpZGVyKG1ldGFtYXNrU3RyZWFtKTsgLy8gZGV0ZWN0IGV0aF9yZXF1ZXN0QWNjb3VudHMgYW5kIHBpcGUgdG8gZW5hYmxlIGZvciBub3dcblxuICAgIGNvbnN0IGRldGVjdEFjY291bnRSZXF1ZXN0UHJvdG90eXBlTW9kaWZpZXIgPSBtID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gaW5wYWdlUHJvdmlkZXJbbV07XG5cbiAgICAgIGlucGFnZVByb3ZpZGVyW21dID0gZnVuY3Rpb24gcHJvdmlkZXJGdW5jKG1ldGhvZCkge1xuICAgICAgICBpZiAobWV0aG9kICYmIG1ldGhvZCA9PT0gXCJldGhfcmVxdWVzdEFjY291bnRzXCIpIHtcbiAgICAgICAgICByZXR1cm4gaW5wYWdlUHJvdmlkZXIuZW5hYmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgW21ldGhvZCwgLi4uYXJnc10pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllcihcInNlbmRcIik7XG4gICAgZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllcihcInNlbmRBc3luY1wiKTtcblxuICAgIGlucGFnZVByb3ZpZGVyLmVuYWJsZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIElmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4sIHdlIGFzc3VtZSB0aGV5IGhhdmUgZ2l2ZW4gYWNjZXNzIHRvIHRoZSB3ZWJzaXRlXG4gICAgICAgIGlucGFnZVByb3ZpZGVyLnNlbmRBc3luYyh7XG4gICAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgICBpZDogZ2V0UHJlb3Blbkluc3RhbmNlSWQoKSxcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgICAgIHBhcmFtczogW11cbiAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc1xuICAgICAgICAgIH0gPSByZXNwb25zZSB8fCB7fTtcblxuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzKSAmJiByZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBhbHJlYWR5IHJlaHlkcmF0ZWQsIHJlc29sdmUgdGhpc1xuICAgICAgICAgICAgLy8gZWxzZSB3YWl0IGZvciBzb21ldGhpbmcgdG8gYmUgd3JpdHRlbiB0byBzdGF0dXMgc3RyZWFtXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVMb2dpbkNiID0gKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5yZXF1ZXN0ZWRWZXJpZmllciAhPT0gXCJcIiAmJiB0aGlzLmN1cnJlbnRWZXJpZmllciAhPT0gdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3RlZFZlcmlmaWVyXG4gICAgICAgICAgICAgICAgfSA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL25vLXByb21pc2UtaW4tY2FsbGJhY2tcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nb3V0KCkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2UvYWx3YXlzLXJldHVyblxuICAgICAgICAgICAgICAgIC50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IHJlcXVlc3RlZFZlcmlmaWVyO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLl9zaG93TG9naW5Qb3B1cCh0cnVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICAgICAgICBoYW5kbGVMb2dpbkNiKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmlzTG9naW5DYWxsYmFjayA9IGhhbmRsZUxvZ2luQ2I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldCB1cCBsaXN0ZW5lciBmb3IgbG9naW5cbiAgICAgICAgICAgIHRoaXMuX3Nob3dMb2dpblBvcHVwKHRydWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbnBhZ2VQcm92aWRlci50cnlQcmVvcGVuSGFuZGxlID0gKHBheWxvYWQsIGNiKSA9PiB7XG4gICAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQ7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShfcGF5bG9hZCkgJiYgVU5TQUZFX01FVEhPRFMuaW5jbHVkZXMoX3BheWxvYWQubWV0aG9kKSkge1xuICAgICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkLCB7XG4gICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19DT05GSVJNX1dJTkRPV1xuICAgICAgICB9KTtcblxuICAgICAgICBfcGF5bG9hZC5wcmVvcGVuSW5zdGFuY2VJZCA9IHByZW9wZW5JbnN0YW5jZUlkO1xuICAgICAgfVxuXG4gICAgICBpbnBhZ2VQcm92aWRlci5fcnBjRW5naW5lLmhhbmRsZShfcGF5bG9hZCwgY2IpO1xuICAgIH07IC8vIFdvcmsgYXJvdW5kIGZvciB3ZWIzQDEuMCBkZWxldGluZyB0aGUgYm91bmQgYHNlbmRBc3luY2AgYnV0IG5vdCB0aGUgdW5ib3VuZFxuICAgIC8vIGBzZW5kQXN5bmNgIG1ldGhvZCBvbiB0aGUgcHJvdG90eXBlLCBjYXVzaW5nIGB0aGlzYCByZWZlcmVuY2UgaXNzdWVzIHdpdGggZHJpenpsZVxuXG5cbiAgICBjb25zdCBwcm94aWVkSW5wYWdlUHJvdmlkZXIgPSBuZXcgUHJveHkoaW5wYWdlUHJvdmlkZXIsIHtcbiAgICAgIC8vIHN0cmFpZ2h0IHVwIGxpZSB0aGF0IHdlIGRlbGV0ZWQgdGhlIHByb3BlcnR5IHNvIHRoYXQgaXQgZG9lc250XG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBpbiBzdHJpY3QgbW9kZVxuICAgICAgZGVsZXRlUHJvcGVydHk6ICgpID0+IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmV0aGVyZXVtID0gcHJveGllZElucGFnZVByb3ZpZGVyO1xuICAgIGNvbnN0IGNvbW11bmljYXRpb25NdXggPSBzZXR1cE11bHRpcGxleChjb21tdW5pY2F0aW9uU3RyZWFtKTtcbiAgICB0aGlzLmNvbW11bmljYXRpb25NdXggPSBjb21tdW5pY2F0aW9uTXV4O1xuICAgIGNvbnN0IHdpbmRvd1N0cmVhbSA9IGNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwid2luZG93XCIpO1xuICAgIHdpbmRvd1N0cmVhbS5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwiY3JlYXRlX3dpbmRvd1wiKSB7XG4gICAgICAgIC8vIHVybCBpcyB0aGUgdXJsIHdlIG5lZWQgdG8gb3BlblxuICAgICAgICAvLyB3ZSBjYW4gcGFzcyB0aGUgZmluYWwgdXJsIHVwZnJvbnQgc28gdGhhdCBpdCByZW1vdmVzIHRoZSBzdGVwIG9mIHJlZGlyZWN0aW5nIHRvIC9yZWRpcmVjdCBhbmQgd2FpdGluZyBmb3IgZmluYWxVcmxcbiAgICAgICAgdGhpcy5fY3JlYXRlUG9wdXBCbG9ja0FsZXJ0KGNodW5rLmRhdGEucHJlb3Blbkluc3RhbmNlSWQsIGNodW5rLmRhdGEudXJsKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gc2hvdyB0b3J1cyB3aWRnZXQgaWYgYnV0dG9uIGNsaWNrZWRcblxuICAgIGNvbnN0IHdpZGdldFN0cmVhbSA9IGNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwid2lkZ2V0XCIpO1xuICAgIHdpZGdldFN0cmVhbS5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhXG4gICAgICB9ID0gY2h1bms7XG5cbiAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoZGF0YSk7XG4gICAgfSk7IC8vIFNob3cgdG9ydXMgYnV0dG9uIGlmIHdhbGxldCBoYXMgYmVlbiBoeWRyYXRlZC9kZXRlY3RlZFxuXG4gICAgY29uc3Qgc3RhdHVzU3RyZWFtID0gY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJzdGF0dXNcIik7XG4gICAgc3RhdHVzU3RyZWFtLm9uKFwiZGF0YVwiLCBzdGF0dXMgPT4ge1xuICAgICAgLy8gbG9naW5cbiAgICAgIGlmIChzdGF0dXMubG9nZ2VkSW4pIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gc3RhdHVzLmxvZ2dlZEluO1xuICAgICAgICB0aGlzLmN1cnJlbnRWZXJpZmllciA9IHN0YXR1cy52ZXJpZmllcjtcbiAgICAgIH0gLy8gbG9nb3V0XG4gICAgICBlbHNlIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcblxuICAgICAgaWYgKHRoaXMuaXNMb2dpbkNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaXNMb2dpbkNhbGxiYWNrKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlzTG9naW5DYWxsYmFjaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnByb3ZpZGVyID0gcHJveGllZElucGFnZVByb3ZpZGVyO1xuICAgIGlmICh0aGlzLnByb3ZpZGVyLnNob3VsZFNlbmRNZXRhZGF0YSkgc2VuZFNpdGVNZXRhZGF0YSh0aGlzLnByb3ZpZGVyLl9ycGNFbmdpbmUpO1xuXG4gICAgaW5wYWdlUHJvdmlkZXIuX2luaXRpYWxpemVTdGF0ZSgpO1xuXG4gICAgbG9nLmRlYnVnKFwiVG9ydXMgLSBpbmplY3RlZCBwcm92aWRlclwiKTtcbiAgfVxuXG4gIF9zaG93TG9naW5Qb3B1cChjYWxsZWRGcm9tRW1iZWQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGxvZ2luSGFuZGxlciA9IGRhdGEgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlcnIsXG4gICAgICAgIHNlbGVjdGVkQWRkcmVzc1xuICAgICAgfSA9IGRhdGE7XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgbG9nLmVycm9yKGVycik7XG4gICAgICAgIGlmIChyZWplY3QpIHJlamVjdChlcnIpO1xuICAgICAgfSAvLyByZXR1cm5zIGFuIGFycmF5IChjYXVzZSBhY2NvdW50cyBleHBlY3RzIGl0KVxuICAgICAgZWxzZSBpZiAocmVzb2x2ZSkgcmVzb2x2ZShbc2VsZWN0ZWRBZGRyZXNzXSk7XG5cbiAgICAgIGlmICh0aGlzLmlzSWZyYW1lRnVsbFNjcmVlbikgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvYXV0aFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJvYXV0aFwiKTtcblxuICAgIGlmICghdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcikge1xuICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZSh0cnVlKTtcblxuICAgICAgaGFuZGxlU3RyZWFtKG9hdXRoU3RyZWFtLCBcImRhdGFcIiwgbG9naW5IYW5kbGVyKTtcbiAgICAgIG9hdXRoU3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJvYXV0aF9tb2RhbFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2FsbGVkRnJvbUVtYmVkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVTdHJlYW0ob2F1dGhTdHJlYW0sIFwiZGF0YVwiLCBsb2dpbkhhbmRsZXIpO1xuICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQpO1xuXG4gICAgICBvYXV0aFN0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwib2F1dGhcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNhbGxlZEZyb21FbWJlZCxcbiAgICAgICAgICB2ZXJpZmllcjogdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcixcbiAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZCxcbiAgICAgICAgICBsb2dpbl9oaW50OiB0aGlzLmxvZ2luSGludFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlUG9wdXBCbG9ja0FsZXJ0KHByZW9wZW5JbnN0YW5jZUlkLCB1cmwpIHtcbiAgICBjb25zdCBsb2dvVXJsID0gdGhpcy5fZ2V0TG9nb1VybCgpO1xuXG4gICAgY29uc3QgdG9ydXNBbGVydCA9IGh0bWxUb0VsZW1lbnQoJzxkaXYgaWQ9XCJ0b3J1c0FsZXJ0XCIgY2xhc3M9XCJ0b3J1cy1hbGVydC0tdjJcIj4nICsgXCI8ZGl2IGlkPVxcXCJ0b3J1c0FsZXJ0X19sb2dvXFxcIj48aW1nIHNyYz1cXFwiXCIuY29uY2F0KGxvZ29VcmwsIFwiXFxcIiAvPjwvZGl2PlwiKSArIFwiPGRpdj5cIiArIFwiPGgxIGlkPVxcXCJ0b3J1c0FsZXJ0X190aXRsZVxcXCI+XCIuY29uY2F0KHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMuYWN0aW9uUmVxdWlyZWQsIFwiPC9oMT5cIikgKyBcIjxwIGlkPVxcXCJ0b3J1c0FsZXJ0X19kZXNjXFxcIj5cIi5jb25jYXQodGhpcy5lbWJlZFRyYW5zbGF0aW9ucy5wZW5kaW5nQWN0aW9uLCBcIjwvcD5cIikgKyBcIjwvZGl2PlwiICsgXCI8L2Rpdj5cIik7XG4gICAgY29uc3Qgc3VjY2Vzc0FsZXJ0ID0gaHRtbFRvRWxlbWVudChcIjxkaXY+PGEgaWQ9XFxcInRvcnVzQWxlcnRfX2J0blxcXCI+XCIuY29uY2F0KHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMuY29udGludWUsIFwiPC9hPjwvZGl2PlwiKSk7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gaHRtbFRvRWxlbWVudCgnPGRpdiBpZD1cInRvcnVzQWxlcnRfX2J0bi1jb250YWluZXJcIj48L2Rpdj4nKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VjY2Vzc0FsZXJ0KTtcbiAgICB0b3J1c0FsZXJ0LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBiaW5kT25Mb2FkID0gKCkgPT4ge1xuICAgICAgc3VjY2Vzc0FsZXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX0NPTkZJUk1fV0lORE9XXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvcnVzQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIGlmICh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX3NldEVtYmVkV2hpdGVMYWJlbCh0b3J1c0FsZXJ0KTtcblxuICAgIGNvbnN0IGF0dGFjaE9uTG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvcnVzQWxlcnQpO1xuICAgIH07XG5cbiAgICBydW5PbkxvYWQoYXR0YWNoT25Mb2FkKTtcbiAgICBydW5PbkxvYWQoYmluZE9uTG9hZCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBCVVRUT05fUE9TSVRJT04sIExPR0lOX1BST1ZJREVSLCBQQVlNRU5UX1BST1ZJREVSLCBUT1JVU19CVUlMRF9FTlYsIFRvcnVzSW5wYWdlUHJvdmlkZXIsIFdBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQLCBXQUxMRVRfVkVSSUZJRVJTLCBUb3J1cyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b3J1cy5lc20uanMubWFwXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IFRvcnVzIGZyb20gXCJAdG9ydXNsYWJzL3RvcnVzLWVtYmVkXCI7XG5leHBvcnQgdmFyIGdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gWzIsIG5ldyBUb3J1cygpXTtcbiAgICB9KTtcbn0pOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VG9ydXNQcm92aWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEVDID0gcmVxdWlyZShcImVsbGlwdGljXCIpLmVjO1xuXG52YXIgZWMgPSBuZXcgRUMoXCJzZWNwMjU2azFcIik7XG52YXIgYnJvd3NlckNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvIHx8IHt9O1xudmFyIHN1YnRsZSA9IGJyb3dzZXJDcnlwdG8uc3VidGxlIHx8IGJyb3dzZXJDcnlwdG8ud2Via2l0U3VidGxlO1xuXG52YXIgbm9kZUNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBFQ19HUk9VUF9PUkRFUiA9IEJ1ZmZlci5mcm9tKCdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZWJhYWVkY2U2YWY0OGEwM2JiZmQyNWU4Y2QwMzY0MTQxJywgJ2hleCcpO1xuY29uc3QgWkVSTzMyID0gQnVmZmVyLmFsbG9jKDMyLCAwKTtcblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8IFwiQXNzZXJ0aW9uIGZhaWxlZFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NjYWxhciAoeCkge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHgpICYmIHgubGVuZ3RoID09PSAzMjtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSkge1xuICBpZiAoIWlzU2NhbGFyKHByaXZhdGVLZXkpKVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBwcml2YXRlS2V5LmNvbXBhcmUoWkVSTzMyKSA+IDAgJiYgLy8gPiAwXG4gIHByaXZhdGVLZXkuY29tcGFyZShFQ19HUk9VUF9PUkRFUikgPCAwOyAvLyA8IEdcbn1cblxuLy8gQ29tcGFyZSB0d28gYnVmZmVycyBpbiBjb25zdGFudCB0aW1lIHRvIHByZXZlbnQgdGltaW5nIGF0dGFja3MuXG5mdW5jdGlvbiBlcXVhbENvbnN0VGltZShiMSwgYjIpIHtcbiAgaWYgKGIxLmxlbmd0aCAhPT0gYjIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciByZXMgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGIxLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzIHw9IGIxW2ldIF4gYjJbaV07ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgfVxuICByZXR1cm4gcmVzID09PSAwO1xufVxuXG4vKiBUaGlzIG11c3QgY2hlY2sgaWYgd2UncmUgaW4gdGhlIGJyb3dzZXIgb3Jcbm5vdCwgc2luY2UgdGhlIGZ1bmN0aW9ucyBhcmUgZGlmZmVyZW50IGFuZCBkb2VzXG5ub3QgY29udmVydCB1c2luZyBicm93c2VyaWZ5ICovXG5mdW5jdGlvbiByYW5kb21CeXRlcyhzaXplKSB7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgaWYgKHR5cGVvZiBicm93c2VyQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20obm9kZUNyeXB0by5yYW5kb21CeXRlcyhzaXplKSk7XG4gIH0gZWxzZSB7XG4gICAgYnJvd3NlckNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyKTtcbiAgfVxuICByZXR1cm4gQnVmZmVyLmZyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gc2hhNTEyKG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBoYXNoID0gbm9kZUNyeXB0by5jcmVhdGVIYXNoKCdzaGE1MTInKTtcbiAgICB2YXIgcmVzdWx0ID0gaGFzaC51cGRhdGUobXNnKS5kaWdlc3QoKTtcbiAgICByZXNvbHZlKG5ldyBVaW50OEFycmF5KHJlc3VsdCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QWVzKG9wKSB7XG4gIHJldHVybiBmdW5jdGlvbihpdiwga2V5LCBkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgIGlmIChzdWJ0bGUpIHtcbiAgICAgICAgdmFyIGltcG9ydEFsZ29yaXRobSA9IHtuYW1lOiBcIkFFUy1DQkNcIn07XG4gICAgICAgIHZhciBrZXlwID0gc3VidGxlLmltcG9ydEtleShcInJhd1wiLCBrZXksIGltcG9ydEFsZ29yaXRobSwgZmFsc2UsIFtvcF0pO1xuICAgICAgICByZXR1cm4ga2V5cC50aGVuKGZ1bmN0aW9uKGNyeXB0b0tleSkge1xuICAgICAgICAgIHZhciBlbmNBbGdvcml0aG0gPSB7bmFtZTogXCJBRVMtQ0JDXCIsIGl2OiBpdn07XG4gICAgICAgICAgcmV0dXJuIHN1YnRsZVtvcF0oZW5jQWxnb3JpdGhtLCBjcnlwdG9LZXksIGRhdGEpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkocmVzdWx0KSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcCA9PT0gJ2VuY3J5cHQnKSB7XG4gICAgICAgICAgdmFyIGNpcGhlciA9IG5vZGVDcnlwdG8uY3JlYXRlQ2lwaGVyaXYoJ2Flcy0yNTYtY2JjJywga2V5LCBpdik7XG4gICAgICAgICAgbGV0IGZpcnN0Q2h1bmsgPSBjaXBoZXIudXBkYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCBzZWNvbmRDaHVuayA9IGNpcGhlci5maW5hbCgpO1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmNvbmNhdChbZmlyc3RDaHVuaywgc2Vjb25kQ2h1bmtdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3AgPT09ICdkZWNyeXB0Jykge1xuICAgICAgICAgIHZhciBkZWNpcGhlciA9IG5vZGVDcnlwdG8uY3JlYXRlRGVjaXBoZXJpdignYWVzLTI1Ni1jYmMnLCBrZXksIGl2KTtcbiAgICAgICAgICBsZXQgZmlyc3RDaHVuayA9IGRlY2lwaGVyLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgc2Vjb25kQ2h1bmsgPSBkZWNpcGhlci5maW5hbCgpO1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmNvbmNhdChbZmlyc3RDaHVuaywgc2Vjb25kQ2h1bmtdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxudmFyIGFlc0NiY0VuY3J5cHQgPSBnZXRBZXMoXCJlbmNyeXB0XCIpO1xudmFyIGFlc0NiY0RlY3J5cHQgPSBnZXRBZXMoXCJkZWNyeXB0XCIpO1xuXG5mdW5jdGlvbiBobWFjU2hhMjU2U2lnbihrZXksIG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBobWFjID0gbm9kZUNyeXB0by5jcmVhdGVIbWFjKCdzaGEyNTYnLCBCdWZmZXIuZnJvbShrZXkpKTtcbiAgICBobWFjLnVwZGF0ZShtc2cpO1xuICAgIHZhciByZXN1bHQgPSBobWFjLmRpZ2VzdCgpO1xuICAgIHJlc29sdmUocmVzdWx0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhtYWNTaGEyNTZWZXJpZnkoa2V5LCBtc2csIHNpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBobWFjID0gbm9kZUNyeXB0by5jcmVhdGVIbWFjKCdzaGEyNTYnLCBCdWZmZXIuZnJvbShrZXkpKTtcbiAgICBobWFjLnVwZGF0ZShtc2cpO1xuICAgIHZhciBleHBlY3RlZFNpZyA9IGhtYWMuZGlnZXN0KCk7XG4gICAgcmVzb2x2ZShlcXVhbENvbnN0VGltZShleHBlY3RlZFNpZywgc2lnKSk7XG4gIH0pO1xufVxuXG4vKipcbiAgKiBHZW5lcmF0ZSBhIG5ldyB2YWxpZCBwcml2YXRlIGtleS4gV2lsbCB1c2UgdGhlIHdpbmRvdy5jcnlwdG8gb3Igd2luZG93Lm1zQ3J5cHRvIGFzIHNvdXJjZVxuICAqIGRlcGVuZGluZyBvbiB5b3VyIGJyb3dzZXIuXG4gICogQHJldHVybiB7QnVmZmVyfSBBIDMyLWJ5dGUgcHJpdmF0ZSBrZXkuXG4gICogQGZ1bmN0aW9uXG4gICovXG5leHBvcnRzLmdlbmVyYXRlUHJpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByaXZhdGVLZXkgPSByYW5kb21CeXRlcygzMik7XG4gIHdoaWxlICghaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSkpIHtcbiAgICBwcml2YXRlS2V5ID0gcmFuZG9tQnl0ZXMoMzIpO1xuICB9XG4gIHJldHVybiBwcml2YXRlS2V5O1xufTtcblxudmFyIGdldFB1YmxpYyA9IGV4cG9ydHMuZ2V0UHVibGljID0gZnVuY3Rpb24ocHJpdmF0ZUtleSkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGhhcyBzeW5jIEFQSSBzbyB3ZSB0aHJvdyBhbiBlcnJvciBpbW1lZGlhdGVseS5cbiAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIC8vIFhYWChLYWdhbWkpOiBgZWxsaXB0aWMudXRpbHMuZW5jb2RlYCByZXR1cm5zIGFycmF5IGZvciBldmVyeVxuICAvLyBlbmNvZGluZyBleGNlcHQgYGhleGAuXG4gIHJldHVybiBCdWZmZXIuZnJvbShlYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5KS5nZXRQdWJsaWMoXCJhcnJcIikpO1xufTtcblxuLyoqXG4gKiBHZXQgY29tcHJlc3NlZCB2ZXJzaW9uIG9mIHB1YmxpYyBrZXkuXG4gKi9cbnZhciBnZXRQdWJsaWNDb21wcmVzc2VkID0gZXhwb3J0cy5nZXRQdWJsaWNDb21wcmVzc2VkID0gZnVuY3Rpb24ocHJpdmF0ZUtleSkgeyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2FuZGVyZXIvc2VjcDI1NmsxLW5vZGUvaXNzdWVzLzQ2XG4gIGxldCBjb21wcmVzc2VkID0gdHJ1ZTtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkpLmdldFB1YmxpYyhjb21wcmVzc2VkLCBcImFyclwiKSk7XG59O1xuXG4vLyBOT1RFKEthZ2FtaSk6IFdlIGRvbid0IHVzZSBwcm9taXNlIHNoaW0gaW4gQnJvd3NlciBpbXBsZW1lbnRhdGlvblxuLy8gYmVjYXVzZSBpdCdzIHN1cHBvcnRlZCBuYXRpdmVseSBpbiBuZXcgYnJvd3NlcnMgKHNlZVxuLy8gPGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1wcm9taXNlcz4pIGFuZCB3ZSBjYW4gdXNlIG9ubHkgbmV3IGJyb3dzZXJzXG4vLyBiZWNhdXNlIG9mIHRoZSBXZWJDcnlwdG9BUEkgKHNlZVxuLy8gPGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jcnlwdG9ncmFwaHk+KS5cbmV4cG9ydHMuc2lnbiA9IGZ1bmN0aW9uKHByaXZhdGVLZXksIG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIGFzc2VydChwcml2YXRlS2V5Lmxlbmd0aCA9PT0gMzIsIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAgIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KG1zZy5sZW5ndGggPiAwLCBcIk1lc3NhZ2Ugc2hvdWxkIG5vdCBiZSBlbXB0eVwiKTtcbiAgICBhc3NlcnQobXNnLmxlbmd0aCA8PSAzMiwgXCJNZXNzYWdlIGlzIHRvbyBsb25nXCIpO1xuICAgIHJlc29sdmUoQnVmZmVyLmZyb20oZWMuc2lnbihtc2csIHByaXZhdGVLZXksIHtjYW5vbmljYWw6IHRydWV9KS50b0RFUigpKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy52ZXJpZnkgPSBmdW5jdGlvbihwdWJsaWNLZXksIG1zZywgc2lnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBhc3NlcnQocHVibGljS2V5Lmxlbmd0aCA9PT0gNjUgfHwgcHVibGljS2V5Lmxlbmd0aCA9PT0gMzMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgaWYgKHB1YmxpY0tleS5sZW5ndGggPT09IDY1KVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlbMF0gPT09IDQsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIGlmIChwdWJsaWNLZXkubGVuZ3RoID09PSAzMylcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5WzBdID09PSAyIHx8IHB1YmxpY0tleVswXSA9PT0gMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgYXNzZXJ0KG1zZy5sZW5ndGggPiAwLCBcIk1lc3NhZ2Ugc2hvdWxkIG5vdCBiZSBlbXB0eVwiKTtcbiAgICBhc3NlcnQobXNnLmxlbmd0aCA8PSAzMiwgXCJNZXNzYWdlIGlzIHRvbyBsb25nXCIpO1xuICAgIGlmIChlYy52ZXJpZnkobXNnLCBzaWcsIHB1YmxpY0tleSkpIHtcbiAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJCYWQgc2lnbmF0dXJlXCIpKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGRlcml2ZSA9IGV4cG9ydHMuZGVyaXZlID0gZnVuY3Rpb24ocHJpdmF0ZUtleUEsIHB1YmxpY0tleUIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKHByaXZhdGVLZXlBKSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KEJ1ZmZlci5pc0J1ZmZlcihwdWJsaWNLZXlCKSwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICBhc3NlcnQocHJpdmF0ZUtleUEubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXlBKSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KHB1YmxpY0tleUIubGVuZ3RoID09PSA2NSB8fCBwdWJsaWNLZXlCLmxlbmd0aCA9PT0gMzMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgaWYgKHB1YmxpY0tleUIubGVuZ3RoID09PSA2NSlcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5QlswXSA9PT0gNCwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgaWYgKHB1YmxpY0tleUIubGVuZ3RoID09PSAzMylcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5QlswXSA9PT0gMiB8fCBwdWJsaWNLZXlCWzBdID09PSAzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICB2YXIga2V5QSA9IGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXlBKTtcbiAgICB2YXIga2V5QiA9IGVjLmtleUZyb21QdWJsaWMocHVibGljS2V5Qik7XG4gICAgdmFyIFB4ID0ga2V5QS5kZXJpdmUoa2V5Qi5nZXRQdWJsaWMoKSk7ICAvLyBCTiBpbnN0YW5jZVxuICAgIHJlc29sdmUoQnVmZmVyLmZyb20oUHgudG9BcnJheSgpKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5lbmNyeXB0ID0gZnVuY3Rpb24ocHVibGljS2V5VG8sIG1zZywgb3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgLy8gVG1wIHZhcmlhYmxlcyB0byBzYXZlIGNvbnRleHQgZnJvbSBmbGF0IHByb21pc2VzO1xuICB2YXIgaXYsIGVwaGVtUHVibGljS2V5LCBjaXBoZXJ0ZXh0LCBtYWNLZXk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGVwaGVtUHJpdmF0ZUtleSA9IG9wdHMuZXBoZW1Qcml2YXRlS2V5IHx8IHJhbmRvbUJ5dGVzKDMyKTtcbiAgICAvLyBUaGVyZSBpcyBhIHZlcnkgdW5saWtlbHkgcG9zc2liaWxpdHkgdGhhdCBpdCBpcyBub3QgYSB2YWxpZCBrZXlcbiAgICB3aGlsZSghaXNWYWxpZFByaXZhdGVLZXkoZXBoZW1Qcml2YXRlS2V5KSlcbiAgICB7XG4gICAgICBlcGhlbVByaXZhdGVLZXkgPSBvcHRzLmVwaGVtUHJpdmF0ZUtleSB8fCByYW5kb21CeXRlcygzMik7XG4gICAgfVxuICAgIGVwaGVtUHVibGljS2V5ID0gZ2V0UHVibGljKGVwaGVtUHJpdmF0ZUtleSk7XG4gICAgcmVzb2x2ZShkZXJpdmUoZXBoZW1Qcml2YXRlS2V5LCBwdWJsaWNLZXlUbykpO1xuICB9KS50aGVuKGZ1bmN0aW9uKFB4KSB7XG4gICAgcmV0dXJuIHNoYTUxMihQeCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oaGFzaCkge1xuICAgIGl2ID0gb3B0cy5pdiB8fCByYW5kb21CeXRlcygxNik7XG4gICAgdmFyIGVuY3J5cHRpb25LZXkgPSBoYXNoLnNsaWNlKDAsIDMyKTtcbiAgICBtYWNLZXkgPSBoYXNoLnNsaWNlKDMyKTtcbiAgICByZXR1cm4gYWVzQ2JjRW5jcnlwdChpdiwgZW5jcnlwdGlvbktleSwgbXNnKTtcbiAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgY2lwaGVydGV4dCA9IGRhdGE7XG4gICAgdmFyIGRhdGFUb01hYyA9IEJ1ZmZlci5jb25jYXQoW2l2LCBlcGhlbVB1YmxpY0tleSwgY2lwaGVydGV4dF0pO1xuICAgIHJldHVybiBobWFjU2hhMjU2U2lnbihtYWNLZXksIGRhdGFUb01hYyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24obWFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl2OiBpdixcbiAgICAgIGVwaGVtUHVibGljS2V5OiBlcGhlbVB1YmxpY0tleSxcbiAgICAgIGNpcGhlcnRleHQ6IGNpcGhlcnRleHQsXG4gICAgICBtYWM6IG1hYyxcbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVjcnlwdCA9IGZ1bmN0aW9uKHByaXZhdGVLZXksIG9wdHMpIHtcbiAgLy8gVG1wIHZhcmlhYmxlIHRvIHNhdmUgY29udGV4dCBmcm9tIGZsYXQgcHJvbWlzZXM7XG4gIHZhciBlbmNyeXB0aW9uS2V5O1xuICByZXR1cm4gZGVyaXZlKHByaXZhdGVLZXksIG9wdHMuZXBoZW1QdWJsaWNLZXkpLnRoZW4oZnVuY3Rpb24oUHgpIHtcbiAgICByZXR1cm4gc2hhNTEyKFB4KTtcbiAgfSkudGhlbihmdW5jdGlvbihoYXNoKSB7XG4gICAgZW5jcnlwdGlvbktleSA9IGhhc2guc2xpY2UoMCwgMzIpO1xuICAgIHZhciBtYWNLZXkgPSBoYXNoLnNsaWNlKDMyKTtcbiAgICB2YXIgZGF0YVRvTWFjID0gQnVmZmVyLmNvbmNhdChbXG4gICAgICBvcHRzLml2LFxuICAgICAgb3B0cy5lcGhlbVB1YmxpY0tleSxcbiAgICAgIG9wdHMuY2lwaGVydGV4dFxuICAgIF0pO1xuICAgIHJldHVybiBobWFjU2hhMjU2VmVyaWZ5KG1hY0tleSwgZGF0YVRvTWFjLCBvcHRzLm1hYyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24obWFjR29vZCkge1xuICAgIGFzc2VydChtYWNHb29kLCBcIkJhZCBNQUNcIik7XG4gICAgcmV0dXJuIGFlc0NiY0RlY3J5cHQob3B0cy5pdiwgZW5jcnlwdGlvbktleSwgb3B0cy5jaXBoZXJ0ZXh0KTtcbiAgfSkudGhlbihmdW5jdGlvbihtc2cpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkobXNnKSk7XG4gIH0pO1xufTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGFkX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcGFkLXN0cmluZ1wiKTtcbmZ1bmN0aW9uIGVuY29kZShpbnB1dCwgZW5jb2RpbmcpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09IHZvaWQgMCkgeyBlbmNvZGluZyA9IFwidXRmOFwiOyB9XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21CYXNlNjQoaW5wdXQudG9TdHJpbmcoXCJiYXNlNjRcIikpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUJhc2U2NChCdWZmZXIuZnJvbShpbnB1dCwgZW5jb2RpbmcpLnRvU3RyaW5nKFwiYmFzZTY0XCIpKTtcbn1cbjtcbmZ1bmN0aW9uIGRlY29kZShiYXNlNjR1cmwsIGVuY29kaW5nKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSB2b2lkIDApIHsgZW5jb2RpbmcgPSBcInV0ZjhcIjsgfVxuICAgIHJldHVybiBCdWZmZXIuZnJvbSh0b0Jhc2U2NChiYXNlNjR1cmwpLCBcImJhc2U2NFwiKS50b1N0cmluZyhlbmNvZGluZyk7XG59XG5mdW5jdGlvbiB0b0Jhc2U2NChiYXNlNjR1cmwpIHtcbiAgICBiYXNlNjR1cmwgPSBiYXNlNjR1cmwudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcGFkX3N0cmluZ18xLmRlZmF1bHQoYmFzZTY0dXJsKVxuICAgICAgICAucmVwbGFjZSgvXFwtL2csIFwiK1wiKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIik7XG59XG5mdW5jdGlvbiBmcm9tQmFzZTY0KGJhc2U2NCkge1xuICAgIHJldHVybiBiYXNlNjRcbiAgICAgICAgLnJlcGxhY2UoLz0vZywgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCBcIl9cIik7XG59XG5mdW5jdGlvbiB0b0J1ZmZlcihiYXNlNjR1cmwpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odG9CYXNlNjQoYmFzZTY0dXJsKSwgXCJiYXNlNjRcIik7XG59XG52YXIgYmFzZTY0dXJsID0gZW5jb2RlO1xuYmFzZTY0dXJsLmVuY29kZSA9IGVuY29kZTtcbmJhc2U2NHVybC5kZWNvZGUgPSBkZWNvZGU7XG5iYXNlNjR1cmwudG9CYXNlNjQgPSB0b0Jhc2U2NDtcbmJhc2U2NHVybC5mcm9tQmFzZTY0ID0gZnJvbUJhc2U2NDtcbmJhc2U2NHVybC50b0J1ZmZlciA9IHRvQnVmZmVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZTY0dXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBwYWRTdHJpbmcoaW5wdXQpIHtcbiAgICB2YXIgc2VnbWVudExlbmd0aCA9IDQ7XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB2YXIgZGlmZiA9IHN0cmluZ0xlbmd0aCAlIHNlZ21lbnRMZW5ndGg7XG4gICAgaWYgKCFkaWZmKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgdmFyIHBvc2l0aW9uID0gc3RyaW5nTGVuZ3RoO1xuICAgIHZhciBwYWRMZW5ndGggPSBzZWdtZW50TGVuZ3RoIC0gZGlmZjtcbiAgICB2YXIgcGFkZGVkU3RyaW5nTGVuZ3RoID0gc3RyaW5nTGVuZ3RoICsgcGFkTGVuZ3RoO1xuICAgIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2MocGFkZGVkU3RyaW5nTGVuZ3RoKTtcbiAgICBidWZmZXIud3JpdGUoaW5wdXQpO1xuICAgIHdoaWxlIChwYWRMZW5ndGgtLSkge1xuICAgICAgICBidWZmZXIud3JpdGUoXCI9XCIsIHBvc2l0aW9uKyspO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBwYWRTdHJpbmc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9iYXNlNjR1cmwnKS5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IEJ1ZmZlci5pc0J1ZmZlcjtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuIiwidmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxudmFyIGlzUmVxdWVzdCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRyZXR1cm4gc3RyZWFtLnNldEhlYWRlciAmJiB0eXBlb2Ygc3RyZWFtLmFib3J0ID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIGlzQ2hpbGRQcm9jZXNzID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdHJldHVybiBzdHJlYW0uc3RkaW8gJiYgQXJyYXkuaXNBcnJheShzdHJlYW0uc3RkaW8pICYmIHN0cmVhbS5zdGRpby5sZW5ndGggPT09IDNcbn07XG5cbnZhciBlb3MgPSBmdW5jdGlvbihzdHJlYW0sIG9wdHMsIGNhbGxiYWNrKSB7XG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGVvcyhzdHJlYW0sIG51bGwsIG9wdHMpO1xuXHRpZiAoIW9wdHMpIG9wdHMgPSB7fTtcblxuXHRjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG5cblx0dmFyIHdzID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuXHR2YXIgcnMgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG5cdHZhciByZWFkYWJsZSA9IG9wdHMucmVhZGFibGUgfHwgKG9wdHMucmVhZGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS5yZWFkYWJsZSk7XG5cdHZhciB3cml0YWJsZSA9IG9wdHMud3JpdGFibGUgfHwgKG9wdHMud3JpdGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS53cml0YWJsZSk7XG5cdHZhciBjYW5jZWxsZWQgPSBmYWxzZTtcblxuXHR2YXIgb25sZWdhY3lmaW5pc2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXN0cmVhbS53cml0YWJsZSkgb25maW5pc2goKTtcblx0fTtcblxuXHR2YXIgb25maW5pc2ggPSBmdW5jdGlvbigpIHtcblx0XHR3cml0YWJsZSA9IGZhbHNlO1xuXHRcdGlmICghcmVhZGFibGUpIGNhbGxiYWNrLmNhbGwoc3RyZWFtKTtcblx0fTtcblxuXHR2YXIgb25lbmQgPSBmdW5jdGlvbigpIHtcblx0XHRyZWFkYWJsZSA9IGZhbHNlO1xuXHRcdGlmICghd3JpdGFibGUpIGNhbGxiYWNrLmNhbGwoc3RyZWFtKTtcblx0fTtcblxuXHR2YXIgb25leGl0ID0gZnVuY3Rpb24oZXhpdENvZGUpIHtcblx0XHRjYWxsYmFjay5jYWxsKHN0cmVhbSwgZXhpdENvZGUgPyBuZXcgRXJyb3IoJ2V4aXRlZCB3aXRoIGVycm9yIGNvZGU6ICcgKyBleGl0Q29kZSkgOiBudWxsKTtcblx0fTtcblxuXHR2YXIgb25lcnJvciA9IGZ1bmN0aW9uKGVycikge1xuXHRcdGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBlcnIpO1xuXHR9O1xuXG5cdHZhciBvbmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0cHJvY2Vzcy5uZXh0VGljayhvbmNsb3NlbmV4dHRpY2spO1xuXHR9O1xuXG5cdHZhciBvbmNsb3NlbmV4dHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoY2FuY2VsbGVkKSByZXR1cm47XG5cdFx0aWYgKHJlYWRhYmxlICYmICEocnMgJiYgKHJzLmVuZGVkICYmICFycy5kZXN0cm95ZWQpKSkgcmV0dXJuIGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBuZXcgRXJyb3IoJ3ByZW1hdHVyZSBjbG9zZScpKTtcblx0XHRpZiAod3JpdGFibGUgJiYgISh3cyAmJiAod3MuZW5kZWQgJiYgIXdzLmRlc3Ryb3llZCkpKSByZXR1cm4gY2FsbGJhY2suY2FsbChzdHJlYW0sIG5ldyBFcnJvcigncHJlbWF0dXJlIGNsb3NlJykpO1xuXHR9O1xuXG5cdHZhciBvbnJlcXVlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRzdHJlYW0ucmVxLm9uKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdH07XG5cblx0aWYgKGlzUmVxdWVzdChzdHJlYW0pKSB7XG5cdFx0c3RyZWFtLm9uKCdjb21wbGV0ZScsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ub24oJ2Fib3J0Jywgb25jbG9zZSk7XG5cdFx0aWYgKHN0cmVhbS5yZXEpIG9ucmVxdWVzdCgpO1xuXHRcdGVsc2Ugc3RyZWFtLm9uKCdyZXF1ZXN0Jywgb25yZXF1ZXN0KTtcblx0fSBlbHNlIGlmICh3cml0YWJsZSAmJiAhd3MpIHsgLy8gbGVnYWN5IHN0cmVhbXNcblx0XHRzdHJlYW0ub24oJ2VuZCcsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ub24oJ2Nsb3NlJywgb25sZWdhY3lmaW5pc2gpO1xuXHR9XG5cblx0aWYgKGlzQ2hpbGRQcm9jZXNzKHN0cmVhbSkpIHN0cmVhbS5vbignZXhpdCcsIG9uZXhpdCk7XG5cblx0c3RyZWFtLm9uKCdlbmQnLCBvbmVuZCk7XG5cdHN0cmVhbS5vbignZmluaXNoJywgb25maW5pc2gpO1xuXHRpZiAob3B0cy5lcnJvciAhPT0gZmFsc2UpIHN0cmVhbS5vbignZXJyb3InLCBvbmVycm9yKTtcblx0c3RyZWFtLm9uKCdjbG9zZScsIG9uY2xvc2UpO1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRjYW5jZWxsZWQgPSB0cnVlO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY29tcGxldGUnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdhYm9ydCcsIG9uY2xvc2UpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcigncmVxdWVzdCcsIG9ucmVxdWVzdCk7XG5cdFx0aWYgKHN0cmVhbS5yZXEpIHN0cmVhbS5yZXEucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZXhpdCcsIG9uZXhpdCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcblx0fTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzU3RyZWFtID0gc3RyZWFtID0+XG5cdHN0cmVhbSAhPT0gbnVsbCAmJlxuXHR0eXBlb2Ygc3RyZWFtID09PSAnb2JqZWN0JyAmJlxuXHR0eXBlb2Ygc3RyZWFtLnBpcGUgPT09ICdmdW5jdGlvbic7XG5cbmlzU3RyZWFtLndyaXRhYmxlID0gc3RyZWFtID0+XG5cdGlzU3RyZWFtKHN0cmVhbSkgJiZcblx0c3RyZWFtLndyaXRhYmxlICE9PSBmYWxzZSAmJlxuXHR0eXBlb2Ygc3RyZWFtLl93cml0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHR0eXBlb2Ygc3RyZWFtLl93cml0YWJsZVN0YXRlID09PSAnb2JqZWN0JztcblxuaXNTdHJlYW0ucmVhZGFibGUgPSBzdHJlYW0gPT5cblx0aXNTdHJlYW0oc3RyZWFtKSAmJlxuXHRzdHJlYW0ucmVhZGFibGUgIT09IGZhbHNlICYmXG5cdHR5cGVvZiBzdHJlYW0uX3JlYWQgPT09ICdmdW5jdGlvbicgJiZcblx0dHlwZW9mIHN0cmVhbS5fcmVhZGFibGVTdGF0ZSA9PT0gJ29iamVjdCc7XG5cbmlzU3RyZWFtLmR1cGxleCA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbS53cml0YWJsZShzdHJlYW0pICYmXG5cdGlzU3RyZWFtLnJlYWRhYmxlKHN0cmVhbSk7XG5cbmlzU3RyZWFtLnRyYW5zZm9ybSA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbS5kdXBsZXgoc3RyZWFtKSAmJlxuXHR0eXBlb2Ygc3RyZWFtLl90cmFuc2Zvcm0gPT09ICdmdW5jdGlvbic7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJlYW07XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IE9wZW5KUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vb3BlbmpzZi5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkLFxuICAgIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpLFxuICAgIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZSxcbiAgICBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduXG4gKiBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFlcShvYmplY3Rba2V5XSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1lcmdlYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgbWVyZ2VkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAob2JqZWN0ID09PSBzb3VyY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYmFzZUZvcihzb3VyY2UsIGZ1bmN0aW9uKHNyY1ZhbHVlLCBrZXkpIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIGJhc2VNZXJnZSwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgICAgPyBjdXN0b21pemVyKHNhZmVHZXQob2JqZWN0LCBrZXkpLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sIGtleXNJbik7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlTWVyZ2VgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgbWVyZ2VzIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIG1lcmdlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gbWVyZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWVyZ2VGdW5jIFRoZSBmdW5jdGlvbiB0byBtZXJnZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgbWVyZ2VGdW5jLCBjdXN0b21pemVyLCBzdGFjaykge1xuICB2YXIgb2JqVmFsdWUgPSBzYWZlR2V0KG9iamVjdCwga2V5KSxcbiAgICAgIHNyY1ZhbHVlID0gc2FmZUdldChzb3VyY2UsIGtleSksXG4gICAgICBzdGFja2VkID0gc3RhY2suZ2V0KHNyY1ZhbHVlKTtcblxuICBpZiAoc3RhY2tlZCkge1xuICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHN0YWNrZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIHZhciBpc0NvbW1vbiA9IG5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheShzcmNWYWx1ZSksXG4gICAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiBpc0J1ZmZlcihzcmNWYWx1ZSksXG4gICAgICAgIGlzVHlwZWQgPSAhaXNBcnIgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkoc3JjVmFsdWUpO1xuXG4gICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICBpZiAoaXNBcnIgfHwgaXNCdWZmIHx8IGlzVHlwZWQpIHtcbiAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VPYmplY3Qob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY29weUFycmF5KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQnVmZikge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lQnVmZmVyKHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzVHlwZWQpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZVR5cGVkQXJyYXkoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc3JjVmFsdWUpIHx8IGlzQXJndW1lbnRzKHNyY1ZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIGlmIChpc0FyZ3VtZW50cyhvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0b1BsYWluT2JqZWN0KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFpc09iamVjdChvYmpWYWx1ZSkgfHwgaXNGdW5jdGlvbihvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpbml0Q2xvbmVPYmplY3Qoc3JjVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChpc0NvbW1vbikge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IG1lcmdlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHN0YWNrLnNldChzcmNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIG1lcmdlRnVuYyhuZXdWYWx1ZSwgc3JjVmFsdWUsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCwgdW5sZXNzIGBrZXlgIGlzIFwiX19wcm90b19fXCIgb3IgXCJjb25zdHJ1Y3RvclwiLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2FmZUdldChvYmplY3QsIGtleSkge1xuICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcGxhaW4gb2JqZWN0IGZsYXR0ZW5pbmcgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nXG4gKiBrZXllZCBwcm9wZXJ0aWVzIG9mIGB2YWx1ZWAgdG8gb3duIHByb3BlcnRpZXMgb2YgdGhlIHBsYWluIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBwbGFpbiBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIG5ldyBGb28pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgXy50b1BsYWluT2JqZWN0KG5ldyBGb28pKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMyB9XG4gKi9cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3QodmFsdWUsIGtleXNJbih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmFzc2lnbmAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgbWVyZ2VzIG93biBhbmRcbiAqIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RzIGludG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBwcm9wZXJ0aWVzIHRoYXQgcmVzb2x2ZSB0byBgdW5kZWZpbmVkYCBhcmVcbiAqIHNraXBwZWQgaWYgYSBkZXN0aW5hdGlvbiB2YWx1ZSBleGlzdHMuIEFycmF5IGFuZCBwbGFpbiBvYmplY3QgcHJvcGVydGllc1xuICogYXJlIG1lcmdlZCByZWN1cnNpdmVseS4gT3RoZXIgb2JqZWN0cyBhbmQgdmFsdWUgdHlwZXMgYXJlIG92ZXJyaWRkZW4gYnlcbiAqIGFzc2lnbm1lbnQuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC4gU3Vic2VxdWVudFxuICogc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuNS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7XG4gKiAgICdhJzogW3sgJ2InOiAyIH0sIHsgJ2QnOiA0IH1dXG4gKiB9O1xuICpcbiAqIHZhciBvdGhlciA9IHtcbiAqICAgJ2EnOiBbeyAnYyc6IDMgfSwgeyAnZSc6IDUgfV1cbiAqIH07XG4gKlxuICogXy5tZXJnZShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHsgJ2EnOiBbeyAnYic6IDIsICdjJzogMyB9LCB7ICdkJzogNCwgJ2UnOiA1IH1dIH1cbiAqL1xudmFyIG1lcmdlID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KSB7XG4gIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2U7XG4iLCIvKlxuKiBsb2dsZXZlbCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9waW10ZXJyeS9sb2dsZXZlbFxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTMgVGltIFBlcnJ5XG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKHJvb3QsIGRlZmluaXRpb24pIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShkZWZpbml0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QubG9nID0gZGVmaW5pdGlvbigpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gU2xpZ2h0bHkgZHViaW91cyB0cmlja3MgdG8gY3V0IGRvd24gbWluaW1pemVkIGZpbGUgc2l6ZVxuICAgIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcbiAgICB2YXIgdW5kZWZpbmVkVHlwZSA9IFwidW5kZWZpbmVkXCI7XG4gICAgdmFyIGlzSUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgJiYgKHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yICE9PSB1bmRlZmluZWRUeXBlKSAmJiAoXG4gICAgICAgIC9UcmlkZW50XFwvfE1TSUUgLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICk7XG5cbiAgICB2YXIgbG9nTWV0aG9kcyA9IFtcbiAgICAgICAgXCJ0cmFjZVwiLFxuICAgICAgICBcImRlYnVnXCIsXG4gICAgICAgIFwiaW5mb1wiLFxuICAgICAgICBcIndhcm5cIixcbiAgICAgICAgXCJlcnJvclwiXG4gICAgXTtcblxuICAgIC8vIENyb3NzLWJyb3dzZXIgYmluZCBlcXVpdmFsZW50IHRoYXQgd29ya3MgYXQgbGVhc3QgYmFjayB0byBJRTZcbiAgICBmdW5jdGlvbiBiaW5kTWV0aG9kKG9iaiwgbWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gb2JqW21ldGhvZE5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZC5iaW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kLmJpbmQob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwobWV0aG9kLCBvYmopO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIE1pc3NpbmcgYmluZCBzaGltIG9yIElFOCArIE1vZGVybml6ciwgZmFsbGJhY2sgdG8gd3JhcHBpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuYXBwbHkobWV0aG9kLCBbb2JqLCBhcmd1bWVudHNdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVHJhY2UoKSBkb2Vzbid0IHByaW50IHRoZSBtZXNzYWdlIGluIElFLCBzbyBmb3IgdGhhdCBjYXNlIHdlIG5lZWQgdG8gd3JhcCBpdFxuICAgIGZ1bmN0aW9uIHRyYWNlRm9ySUUoKSB7XG4gICAgICAgIGlmIChjb25zb2xlLmxvZykge1xuICAgICAgICAgICAgaWYgKGNvbnNvbGUubG9nLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gb2xkIElFLCBuYXRpdmUgY29uc29sZSBtZXRob2RzIHRoZW1zZWx2ZXMgZG9uJ3QgaGF2ZSBhcHBseSgpLlxuICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5hcHBseShjb25zb2xlLmxvZywgW2NvbnNvbGUsIGFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25zb2xlLnRyYWNlKSBjb25zb2xlLnRyYWNlKCk7XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgdGhlIGJlc3QgbG9nZ2luZyBtZXRob2QgcG9zc2libGUgZm9yIHRoaXMgZW52XG4gICAgLy8gV2hlcmV2ZXIgcG9zc2libGUgd2Ugd2FudCB0byBiaW5kLCBub3Qgd3JhcCwgdG8gcHJlc2VydmUgc3RhY2sgdHJhY2VzXG4gICAgZnVuY3Rpb24gcmVhbE1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnZGVidWcnKSB7XG4gICAgICAgICAgICBtZXRob2ROYW1lID0gJ2xvZyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09IHVuZGVmaW5lZFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gbWV0aG9kIHBvc3NpYmxlLCBmb3Igbm93IC0gZml4ZWQgbGF0ZXIgYnkgZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlc1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09ICd0cmFjZScgJiYgaXNJRSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYWNlRm9ySUU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc29sZVttZXRob2ROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCBtZXRob2ROYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlLmxvZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCAnbG9nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZXNlIHByaXZhdGUgZnVuY3Rpb25zIGFsd2F5cyBuZWVkIGB0aGlzYCB0byBiZSBzZXQgcHJvcGVybHlcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMb2dnaW5nTWV0aG9kcyhsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gbG9nTWV0aG9kc1tpXTtcbiAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0gPSAoaSA8IGxldmVsKSA/XG4gICAgICAgICAgICAgICAgbm9vcCA6XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSBsb2cubG9nIGFzIGFuIGFsaWFzIGZvciBsb2cuZGVidWdcbiAgICAgICAgdGhpcy5sb2cgPSB0aGlzLmRlYnVnO1xuICAgIH1cblxuICAgIC8vIEluIG9sZCBJRSB2ZXJzaW9ucywgdGhlIGNvbnNvbGUgaXNuJ3QgcHJlc2VudCB1bnRpbCB5b3UgZmlyc3Qgb3BlbiBpdC5cbiAgICAvLyBXZSBidWlsZCByZWFsTWV0aG9kKCkgcmVwbGFjZW1lbnRzIGhlcmUgdGhhdCByZWdlbmVyYXRlIGxvZ2dpbmcgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHRoaXMsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgd2UgdXNlIGNsb3NlbHkgYm91bmQgcmVhbCBtZXRob2RzIHdoZXJldmVyIHBvc3NpYmxlLCBhbmRcbiAgICAvLyBvdGhlcndpc2Ugd2Ugd2FpdCBmb3IgYSBjb25zb2xlIHRvIGFwcGVhciwgYW5kIHRoZW4gdHJ5IGFnYWluLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRNZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIHJldHVybiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHx8XG4gICAgICAgICAgICAgICBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTG9nZ2VyKG5hbWUsIGRlZmF1bHRMZXZlbCwgZmFjdG9yeSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGN1cnJlbnRMZXZlbDtcbiAgICAgIGRlZmF1bHRMZXZlbCA9IGRlZmF1bHRMZXZlbCA9PSBudWxsID8gXCJXQVJOXCIgOiBkZWZhdWx0TGV2ZWw7XG5cbiAgICAgIHZhciBzdG9yYWdlS2V5ID0gXCJsb2dsZXZlbFwiO1xuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHN0b3JhZ2VLZXkgKz0gXCI6XCIgKyBuYW1lO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICBzdG9yYWdlS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlKGxldmVsTnVtKSB7XG4gICAgICAgICAgdmFyIGxldmVsTmFtZSA9IChsb2dNZXRob2RzW2xldmVsTnVtXSB8fCAnc2lsZW50JykudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRUeXBlIHx8ICFzdG9yYWdlS2V5KSByZXR1cm47XG5cbiAgICAgICAgICAvLyBVc2UgbG9jYWxTdG9yYWdlIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Vbc3RvcmFnZUtleV0gPSBsZXZlbE5hbWU7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAvLyBVc2Ugc2Vzc2lvbiBjb29raWUgYXMgZmFsbGJhY2tcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RvcmFnZUtleSkgKyBcIj1cIiArIGxldmVsTmFtZSArIFwiO1wiO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0UGVyc2lzdGVkTGV2ZWwoKSB7XG4gICAgICAgICAgdmFyIHN0b3JlZExldmVsO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUgfHwgIXN0b3JhZ2VLZXkpIHJldHVybjtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHN0b3JlZExldmVsID0gd2luZG93LmxvY2FsU3RvcmFnZVtzdG9yYWdlS2V5XTtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAvLyBGYWxsYmFjayB0byBjb29raWVzIGlmIGxvY2FsIHN0b3JhZ2UgZ2l2ZXMgdXMgbm90aGluZ1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3RvcmVkTGV2ZWwgPT09IHVuZGVmaW5lZFR5cGUpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSB3aW5kb3cuZG9jdW1lbnQuY29va2llO1xuICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gY29va2llLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0b3JhZ2VLZXkpICsgXCI9XCIpO1xuICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlZExldmVsID0gL14oW147XSspLy5leGVjKGNvb2tpZS5zbGljZShsb2NhdGlvbikpWzFdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhlIHN0b3JlZCBsZXZlbCBpcyBub3QgdmFsaWQsIHRyZWF0IGl0IGFzIGlmIG5vdGhpbmcgd2FzIHN0b3JlZC5cbiAgICAgICAgICBpZiAoc2VsZi5sZXZlbHNbc3RvcmVkTGV2ZWxdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0b3JlZExldmVsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGVhclBlcnNpc3RlZExldmVsKCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRUeXBlIHx8ICFzdG9yYWdlS2V5KSByZXR1cm47XG5cbiAgICAgICAgICAvLyBVc2UgbG9jYWxTdG9yYWdlIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlS2V5KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIFVzZSBzZXNzaW9uIGNvb2tpZSBhcyBmYWxsYmFja1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5jb29raWUgPVxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQ1wiO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAqXG4gICAgICAgKiBQdWJsaWMgbG9nZ2VyIEFQSSAtIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcGltdGVycnkvbG9nbGV2ZWwgZm9yIGRldGFpbHNcbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgc2VsZi5uYW1lID0gbmFtZTtcblxuICAgICAgc2VsZi5sZXZlbHMgPSB7IFwiVFJBQ0VcIjogMCwgXCJERUJVR1wiOiAxLCBcIklORk9cIjogMiwgXCJXQVJOXCI6IDMsXG4gICAgICAgICAgXCJFUlJPUlwiOiA0LCBcIlNJTEVOVFwiOiA1fTtcblxuICAgICAgc2VsZi5tZXRob2RGYWN0b3J5ID0gZmFjdG9yeSB8fCBkZWZhdWx0TWV0aG9kRmFjdG9yeTtcblxuICAgICAgc2VsZi5nZXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudExldmVsO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5zZXRMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCwgcGVyc2lzdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwic3RyaW5nXCIgJiYgc2VsZi5sZXZlbHNbbGV2ZWwudG9VcHBlckNhc2UoKV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBsZXZlbCA9IHNlbGYubGV2ZWxzW2xldmVsLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcIm51bWJlclwiICYmIGxldmVsID49IDAgJiYgbGV2ZWwgPD0gc2VsZi5sZXZlbHMuU0lMRU5UKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRMZXZlbCA9IGxldmVsO1xuICAgICAgICAgICAgICBpZiAocGVyc2lzdCAhPT0gZmFsc2UpIHsgIC8vIGRlZmF1bHRzIHRvIHRydWVcbiAgICAgICAgICAgICAgICAgIHBlcnNpc3RMZXZlbElmUG9zc2libGUobGV2ZWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHNlbGYsIGxldmVsLCBuYW1lKTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSB1bmRlZmluZWRUeXBlICYmIGxldmVsIDwgc2VsZi5sZXZlbHMuU0lMRU5UKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBjb25zb2xlIGF2YWlsYWJsZSBmb3IgbG9nZ2luZ1wiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgXCJsb2cuc2V0TGV2ZWwoKSBjYWxsZWQgd2l0aCBpbnZhbGlkIGxldmVsOiBcIiArIGxldmVsO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNlbGYuc2V0RGVmYXVsdExldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICAgICAgZGVmYXVsdExldmVsID0gbGV2ZWw7XG4gICAgICAgICAgaWYgKCFnZXRQZXJzaXN0ZWRMZXZlbCgpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0TGV2ZWwobGV2ZWwsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZWxmLnJlc2V0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChkZWZhdWx0TGV2ZWwsIGZhbHNlKTtcbiAgICAgICAgICBjbGVhclBlcnNpc3RlZExldmVsKCk7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmVuYWJsZUFsbCA9IGZ1bmN0aW9uKHBlcnNpc3QpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKHNlbGYubGV2ZWxzLlRSQUNFLCBwZXJzaXN0KTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuZGlzYWJsZUFsbCA9IGZ1bmN0aW9uKHBlcnNpc3QpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKHNlbGYubGV2ZWxzLlNJTEVOVCwgcGVyc2lzdCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBJbml0aWFsaXplIHdpdGggdGhlIHJpZ2h0IGxldmVsXG4gICAgICB2YXIgaW5pdGlhbExldmVsID0gZ2V0UGVyc2lzdGVkTGV2ZWwoKTtcbiAgICAgIGlmIChpbml0aWFsTGV2ZWwgPT0gbnVsbCkge1xuICAgICAgICAgIGluaXRpYWxMZXZlbCA9IGRlZmF1bHRMZXZlbDtcbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0TGV2ZWwoaW5pdGlhbExldmVsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKlxuICAgICAqIFRvcC1sZXZlbCBBUElcbiAgICAgKlxuICAgICAqL1xuXG4gICAgdmFyIGRlZmF1bHRMb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG5cbiAgICB2YXIgX2xvZ2dlcnNCeU5hbWUgPSB7fTtcbiAgICBkZWZhdWx0TG9nZ2VyLmdldExvZ2dlciA9IGZ1bmN0aW9uIGdldExvZ2dlcihuYW1lKSB7XG4gICAgICAgIGlmICgodHlwZW9mIG5hbWUgIT09IFwic3ltYm9sXCIgJiYgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHx8IG5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3Qgc3VwcGx5IGEgbmFtZSB3aGVuIGNyZWF0aW5nIGEgbG9nZ2VyLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXTtcbiAgICAgICAgaWYgKCFsb2dnZXIpIHtcbiAgICAgICAgICBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXSA9IG5ldyBMb2dnZXIoXG4gICAgICAgICAgICBuYW1lLCBkZWZhdWx0TG9nZ2VyLmdldExldmVsKCksIGRlZmF1bHRMb2dnZXIubWV0aG9kRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9O1xuXG4gICAgLy8gR3JhYiB0aGUgY3VycmVudCBnbG9iYWwgbG9nIHZhcmlhYmxlIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgdmFyIF9sb2cgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgPyB3aW5kb3cubG9nIDogdW5kZWZpbmVkO1xuICAgIGRlZmF1bHRMb2dnZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSAmJlxuICAgICAgICAgICAgICAgd2luZG93LmxvZyA9PT0gZGVmYXVsdExvZ2dlcikge1xuICAgICAgICAgICAgd2luZG93LmxvZyA9IF9sb2c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdExvZ2dlcjtcbiAgICB9O1xuXG4gICAgZGVmYXVsdExvZ2dlci5nZXRMb2dnZXJzID0gZnVuY3Rpb24gZ2V0TG9nZ2VycygpIHtcbiAgICAgICAgcmV0dXJuIF9sb2dnZXJzQnlOYW1lO1xuICAgIH07XG5cbiAgICAvLyBFUzYgZGVmYXVsdCBleHBvcnQsIGZvciBjb21wYXRpYmlsaXR5XG4gICAgZGVmYXVsdExvZ2dlclsnZGVmYXVsdCddID0gZGVmYXVsdExvZ2dlcjtcblxuICAgIHJldHVybiBkZWZhdWx0TG9nZ2VyO1xufSkpO1xuIiwidmFyIHdyYXBweSA9IHJlcXVpcmUoJ3dyYXBweScpXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweShvbmNlKVxubW9kdWxlLmV4cG9ydHMuc3RyaWN0ID0gd3JhcHB5KG9uY2VTdHJpY3QpXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZVN0cmljdCcsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2VTdHJpY3QodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKSByZXR1cm4gZi52YWx1ZVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cblxuZnVuY3Rpb24gb25jZVN0cmljdCAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGYub25jZUVycm9yKVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIHZhciBuYW1lID0gZm4ubmFtZSB8fCAnRnVuY3Rpb24gd3JhcHBlZCB3aXRoIGBvbmNlYCdcbiAgZi5vbmNlRXJyb3IgPSBuYW1lICsgXCIgc2hvdWxkbid0IGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZVwiXG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fFxuICAgICFwcm9jZXNzLnZlcnNpb24gfHxcbiAgICBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjAuJykgPT09IDAgfHxcbiAgICBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjEuJykgPT09IDAgJiYgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YxLjguJykgIT09IDApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG5leHRUaWNrOiBuZXh0VGljayB9O1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzXG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGZuLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNhbGxiYWNrXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBhcmdzLCBpO1xuICBzd2l0Y2ggKGxlbikge1xuICBjYXNlIDA6XG4gIGNhc2UgMTpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gIGNhc2UgMjpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tPbmUoKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEpO1xuICAgIH0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrVHdvKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyKTtcbiAgICB9KTtcbiAgY2FzZSA0OlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja1RocmVlKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB9KTtcbiAgZGVmYXVsdDpcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYXJncy5sZW5ndGgpIHtcbiAgICAgIGFyZ3NbaSsrXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrKCkge1xuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwidmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJylcbnZhciBlb3MgPSByZXF1aXJlKCdlbmQtb2Ytc3RyZWFtJylcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJykgLy8gd2Ugb25seSBuZWVkIGZzIHRvIGdldCB0aGUgUmVhZFN0cmVhbSBhbmQgV3JpdGVTdHJlYW0gcHJvdG90eXBlc1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgYW5jaWVudCA9IC9edj9cXC4wLy50ZXN0KHByb2Nlc3MudmVyc2lvbilcblxudmFyIGlzRm4gPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG52YXIgaXNGUyA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgaWYgKCFhbmNpZW50KSByZXR1cm4gZmFsc2UgLy8gbmV3ZXIgbm9kZSB2ZXJzaW9uIGRvIG5vdCBuZWVkIHRvIGNhcmUgYWJvdXQgZnMgaXMgYSBzcGVjaWFsIHdheVxuICBpZiAoIWZzKSByZXR1cm4gZmFsc2UgLy8gYnJvd3NlclxuICByZXR1cm4gKHN0cmVhbSBpbnN0YW5jZW9mIChmcy5SZWFkU3RyZWFtIHx8IG5vb3ApIHx8IHN0cmVhbSBpbnN0YW5jZW9mIChmcy5Xcml0ZVN0cmVhbSB8fCBub29wKSkgJiYgaXNGbihzdHJlYW0uY2xvc2UpXG59XG5cbnZhciBpc1JlcXVlc3QgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHJldHVybiBzdHJlYW0uc2V0SGVhZGVyICYmIGlzRm4oc3RyZWFtLmFib3J0KVxufVxuXG52YXIgZGVzdHJveWVyID0gZnVuY3Rpb24gKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrKVxuXG4gIHZhciBjbG9zZWQgPSBmYWxzZVxuICBzdHJlYW0ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlZCA9IHRydWVcbiAgfSlcblxuICBlb3Moc3RyZWFtLCB7cmVhZGFibGU6IHJlYWRpbmcsIHdyaXRhYmxlOiB3cml0aW5nfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgY2xvc2VkID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgfSlcblxuICB2YXIgZGVzdHJveWVkID0gZmFsc2VcbiAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoY2xvc2VkKSByZXR1cm5cbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm5cbiAgICBkZXN0cm95ZWQgPSB0cnVlXG5cbiAgICBpZiAoaXNGUyhzdHJlYW0pKSByZXR1cm4gc3RyZWFtLmNsb3NlKG5vb3ApIC8vIHVzZSBjbG9zZSBmb3IgZnMgc3RyZWFtcyB0byBhdm9pZCBmZCBsZWFrc1xuICAgIGlmIChpc1JlcXVlc3Qoc3RyZWFtKSkgcmV0dXJuIHN0cmVhbS5hYm9ydCgpIC8vIHJlcXVlc3QuZGVzdHJveSBqdXN0IGRvIC5lbmQgLSAuYWJvcnQgaXMgd2hhdCB3ZSB3YW50XG5cbiAgICBpZiAoaXNGbihzdHJlYW0uZGVzdHJveSkpIHJldHVybiBzdHJlYW0uZGVzdHJveSgpXG5cbiAgICBjYWxsYmFjayhlcnIgfHwgbmV3IEVycm9yKCdzdHJlYW0gd2FzIGRlc3Ryb3llZCcpKVxuICB9XG59XG5cbnZhciBjYWxsID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuKClcbn1cblxudmFyIHBpcGUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgcmV0dXJuIGZyb20ucGlwZSh0bylcbn1cblxudmFyIHB1bXAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHJlYW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICB2YXIgY2FsbGJhY2sgPSBpc0ZuKHN0cmVhbXNbc3RyZWFtcy5sZW5ndGggLSAxXSB8fCBub29wKSAmJiBzdHJlYW1zLnBvcCgpIHx8IG5vb3BcblxuICBpZiAoQXJyYXkuaXNBcnJheShzdHJlYW1zWzBdKSkgc3RyZWFtcyA9IHN0cmVhbXNbMF1cbiAgaWYgKHN0cmVhbXMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKCdwdW1wIHJlcXVpcmVzIHR3byBzdHJlYW1zIHBlciBtaW5pbXVtJylcblxuICB2YXIgZXJyb3JcbiAgdmFyIGRlc3Ryb3lzID0gc3RyZWFtcy5tYXAoZnVuY3Rpb24gKHN0cmVhbSwgaSkge1xuICAgIHZhciByZWFkaW5nID0gaSA8IHN0cmVhbXMubGVuZ3RoIC0gMVxuICAgIHZhciB3cml0aW5nID0gaSA+IDBcbiAgICByZXR1cm4gZGVzdHJveWVyKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKCFlcnJvcikgZXJyb3IgPSBlcnJcbiAgICAgIGlmIChlcnIpIGRlc3Ryb3lzLmZvckVhY2goY2FsbClcbiAgICAgIGlmIChyZWFkaW5nKSByZXR1cm5cbiAgICAgIGRlc3Ryb3lzLmZvckVhY2goY2FsbClcbiAgICAgIGNhbGxiYWNrKGVycm9yKVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIHN0cmVhbXMucmVkdWNlKHBpcGUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHVtcFxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gYSBkdXBsZXggc3RyZWFtIGlzIGp1c3QgYSBzdHJlYW0gdGhhdCBpcyBib3RoIHJlYWRhYmxlIGFuZCB3cml0YWJsZS5cbi8vIFNpbmNlIEpTIGRvZXNuJ3QgaGF2ZSBtdWx0aXBsZSBwcm90b3R5cGFsIGluaGVyaXRhbmNlLCB0aGlzIGNsYXNzXG4vLyBwcm90b3R5cGFsbHkgaW5oZXJpdHMgZnJvbSBSZWFkYWJsZSwgYW5kIHRoZW4gcGFyYXNpdGljYWxseSBmcm9tXG4vLyBXcml0YWJsZS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgfXJldHVybiBrZXlzO1xufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1cGxleDtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgUmVhZGFibGUgPSByZXF1aXJlKCcuL19zdHJlYW1fcmVhZGFibGUnKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoJy4vX3N0cmVhbV93cml0YWJsZScpO1xuXG51dGlsLmluaGVyaXRzKER1cGxleCwgUmVhZGFibGUpO1xuXG57XG4gIC8vIGF2b2lkIHNjb3BlIGNyZWVwLCB0aGUga2V5cyBhcnJheSBjYW4gdGhlbiBiZSBjb2xsZWN0ZWRcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFdyaXRhYmxlLnByb3RvdHlwZSk7XG4gIGZvciAodmFyIHYgPSAwOyB2IDwga2V5cy5sZW5ndGg7IHYrKykge1xuICAgIHZhciBtZXRob2QgPSBrZXlzW3ZdO1xuICAgIGlmICghRHVwbGV4LnByb3RvdHlwZVttZXRob2RdKSBEdXBsZXgucHJvdG90eXBlW21ldGhvZF0gPSBXcml0YWJsZS5wcm90b3R5cGVbbWV0aG9kXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBEdXBsZXgob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRHVwbGV4KSkgcmV0dXJuIG5ldyBEdXBsZXgob3B0aW9ucyk7XG5cbiAgUmVhZGFibGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgV3JpdGFibGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlYWRhYmxlID09PSBmYWxzZSkgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMud3JpdGFibGUgPT09IGZhbHNlKSB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgdGhpcy5hbGxvd0hhbGZPcGVuID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGxvd0hhbGZPcGVuID09PSBmYWxzZSkgdGhpcy5hbGxvd0hhbGZPcGVuID0gZmFsc2U7XG5cbiAgdGhpcy5vbmNlKCdlbmQnLCBvbmVuZCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnd3JpdGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcblxuLy8gdGhlIG5vLWhhbGYtb3BlbiBlbmZvcmNlclxuZnVuY3Rpb24gb25lbmQoKSB7XG4gIC8vIGlmIHdlIGFsbG93IGhhbGYtb3BlbiBzdGF0ZSwgb3IgaWYgdGhlIHdyaXRhYmxlIHNpZGUgZW5kZWQsXG4gIC8vIHRoZW4gd2UncmUgb2suXG4gIGlmICh0aGlzLmFsbG93SGFsZk9wZW4gfHwgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRlZCkgcmV0dXJuO1xuXG4gIC8vIG5vIG1vcmUgZGF0YSBjYW4gYmUgd3JpdHRlbi5cbiAgLy8gQnV0IGFsbG93IG1vcmUgd3JpdGVzIHRvIGhhcHBlbiBpbiB0aGlzIHRpY2suXG4gIHBuYS5uZXh0VGljayhvbkVuZE5ULCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gb25FbmROVChzZWxmKSB7XG4gIHNlbGYuZW5kKCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnZGVzdHJveWVkJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX3dyaXRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgJiYgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gd2UgaWdub3JlIHRoZSB2YWx1ZSBpZiB0aGUgc3RyZWFtXG4gICAgLy8gaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5fd3JpdGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhlIHVzZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIG1hbmFnaW5nIGRlc3Ryb3llZFxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgfVxufSk7XG5cbkR1cGxleC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB0aGlzLnB1c2gobnVsbCk7XG4gIHRoaXMuZW5kKCk7XG5cbiAgcG5hLm5leHRUaWNrKGNiLCBlcnIpO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gYSBwYXNzdGhyb3VnaCBzdHJlYW0uXG4vLyBiYXNpY2FsbHkganVzdCB0aGUgbW9zdCBtaW5pbWFsIHNvcnQgb2YgVHJhbnNmb3JtIHN0cmVhbS5cbi8vIEV2ZXJ5IHdyaXR0ZW4gY2h1bmsgZ2V0cyBvdXRwdXQgYXMtaXMuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzVGhyb3VnaDtcblxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vX3N0cmVhbV90cmFuc2Zvcm0nKTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFBhc3NUaHJvdWdoLCBUcmFuc2Zvcm0pO1xuXG5mdW5jdGlvbiBQYXNzVGhyb3VnaChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQYXNzVGhyb3VnaCkpIHJldHVybiBuZXcgUGFzc1Rocm91Z2gob3B0aW9ucyk7XG5cbiAgVHJhbnNmb3JtLmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cblBhc3NUaHJvdWdoLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobnVsbCwgY2h1bmspO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWRhYmxlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBEdXBsZXg7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuUmVhZGFibGUuUmVhZGFibGVTdGF0ZSA9IFJlYWRhYmxlU3RhdGU7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRUUgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbnZhciBFRWxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiAoZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lcnModHlwZSkubGVuZ3RoO1xufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIFN0cmVhbSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9zdHJlYW0nKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgT3VyVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5IHx8IGZ1bmN0aW9uICgpIHt9O1xuZnVuY3Rpb24gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuaykge1xuICByZXR1cm4gQnVmZmVyLmZyb20oY2h1bmspO1xufVxuZnVuY3Rpb24gX2lzVWludDhBcnJheShvYmopIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihvYmopIHx8IG9iaiBpbnN0YW5jZW9mIE91clVpbnQ4QXJyYXk7XG59XG5cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgZGVidWdVdGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGRlYnVnID0gdm9pZCAwO1xuaWYgKGRlYnVnVXRpbCAmJiBkZWJ1Z1V0aWwuZGVidWdsb2cpIHtcbiAgZGVidWcgPSBkZWJ1Z1V0aWwuZGVidWdsb2coJ3N0cmVhbScpO1xufSBlbHNlIHtcbiAgZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcbn1cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyTGlzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0Jyk7XG52YXIgZGVzdHJveUltcGwgPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvZGVzdHJveScpO1xudmFyIFN0cmluZ0RlY29kZXI7XG5cbnV0aWwuaW5oZXJpdHMoUmVhZGFibGUsIFN0cmVhbSk7XG5cbnZhciBrUHJveHlFdmVudHMgPSBbJ2Vycm9yJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knLCAncGF1c2UnLCAncmVzdW1lJ107XG5cbmZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4pIHtcbiAgLy8gU2FkbHkgdGhpcyBpcyBub3QgY2FjaGVhYmxlIGFzIHNvbWUgbGlicmFyaWVzIGJ1bmRsZSB0aGVpciBvd25cbiAgLy8gZXZlbnQgZW1pdHRlciBpbXBsZW1lbnRhdGlvbiB3aXRoIHRoZW0uXG4gIGlmICh0eXBlb2YgZW1pdHRlci5wcmVwZW5kTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHJldHVybiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lcihldmVudCwgZm4pO1xuXG4gIC8vIFRoaXMgaXMgYSBoYWNrIHRvIG1ha2Ugc3VyZSB0aGF0IG91ciBlcnJvciBoYW5kbGVyIGlzIGF0dGFjaGVkIGJlZm9yZSBhbnlcbiAgLy8gdXNlcmxhbmQgb25lcy4gIE5FVkVSIERPIFRISVMuIFRoaXMgaXMgaGVyZSBvbmx5IGJlY2F1c2UgdGhpcyBjb2RlIG5lZWRzXG4gIC8vIHRvIGNvbnRpbnVlIHRvIHdvcmsgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiBOb2RlLmpzIHRoYXQgZG8gbm90IGluY2x1ZGVcbiAgLy8gdGhlIHByZXBlbmRMaXN0ZW5lcigpIG1ldGhvZC4gVGhlIGdvYWwgaXMgdG8gZXZlbnR1YWxseSByZW1vdmUgdGhpcyBoYWNrLlxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW2V2ZW50XSkgZW1pdHRlci5vbihldmVudCwgZm4pO2Vsc2UgaWYgKGlzQXJyYXkoZW1pdHRlci5fZXZlbnRzW2V2ZW50XSkpIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0udW5zaGlmdChmbik7ZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZlbnRdID0gW2ZuLCBlbWl0dGVyLl9ldmVudHNbZXZlbnRdXTtcbn1cblxuZnVuY3Rpb24gUmVhZGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0pIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBEdXBsZXggc3RyZWFtcyBhcmUgYm90aCByZWFkYWJsZSBhbmQgd3JpdGFibGUsIGJ1dCBzaGFyZVxuICAvLyB0aGUgc2FtZSBvcHRpb25zIG9iamVjdC5cbiAgLy8gSG93ZXZlciwgc29tZSBjYXNlcyByZXF1aXJlIHNldHRpbmcgb3B0aW9ucyB0byBkaWZmZXJlbnRcbiAgLy8gdmFsdWVzIGZvciB0aGUgcmVhZGFibGUgYW5kIHRoZSB3cml0YWJsZSBzaWRlcyBvZiB0aGUgZHVwbGV4IHN0cmVhbS5cbiAgLy8gVGhlc2Ugb3B0aW9ucyBjYW4gYmUgcHJvdmlkZWQgc2VwYXJhdGVseSBhcyByZWFkYWJsZVhYWCBhbmQgd3JpdGFibGVYWFguXG4gIHZhciBpc0R1cGxleCA9IHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleDtcblxuICAvLyBvYmplY3Qgc3RyZWFtIGZsYWcuIFVzZWQgdG8gbWFrZSByZWFkKG4pIGlnbm9yZSBuIGFuZCB0b1xuICAvLyBtYWtlIGFsbCB0aGUgYnVmZmVyIG1lcmdpbmcgYW5kIGxlbmd0aCBjaGVja3MgZ28gYXdheVxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcblxuICBpZiAoaXNEdXBsZXgpIHRoaXMub2JqZWN0TW9kZSA9IHRoaXMub2JqZWN0TW9kZSB8fCAhIW9wdGlvbnMucmVhZGFibGVPYmplY3RNb2RlO1xuXG4gIC8vIHRoZSBwb2ludCBhdCB3aGljaCBpdCBzdG9wcyBjYWxsaW5nIF9yZWFkKCkgdG8gZmlsbCB0aGUgYnVmZmVyXG4gIC8vIE5vdGU6IDAgaXMgYSB2YWxpZCB2YWx1ZSwgbWVhbnMgXCJkb24ndCBjYWxsIF9yZWFkIHByZWVtcHRpdmVseSBldmVyXCJcbiAgdmFyIGh3bSA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgdmFyIHJlYWRhYmxlSHdtID0gb3B0aW9ucy5yZWFkYWJsZUhpZ2hXYXRlck1hcms7XG4gIHZhciBkZWZhdWx0SHdtID0gdGhpcy5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG5cbiAgaWYgKGh3bSB8fCBod20gPT09IDApIHRoaXMuaGlnaFdhdGVyTWFyayA9IGh3bTtlbHNlIGlmIChpc0R1cGxleCAmJiAocmVhZGFibGVId20gfHwgcmVhZGFibGVId20gPT09IDApKSB0aGlzLmhpZ2hXYXRlck1hcmsgPSByZWFkYWJsZUh3bTtlbHNlIHRoaXMuaGlnaFdhdGVyTWFyayA9IGRlZmF1bHRId207XG5cbiAgLy8gY2FzdCB0byBpbnRzLlxuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBNYXRoLmZsb29yKHRoaXMuaGlnaFdhdGVyTWFyayk7XG5cbiAgLy8gQSBsaW5rZWQgbGlzdCBpcyB1c2VkIHRvIHN0b3JlIGRhdGEgY2h1bmtzIGluc3RlYWQgb2YgYW4gYXJyYXkgYmVjYXVzZSB0aGVcbiAgLy8gbGlua2VkIGxpc3QgY2FuIHJlbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBiZWdpbm5pbmcgZmFzdGVyIHRoYW5cbiAgLy8gYXJyYXkuc2hpZnQoKVxuICB0aGlzLmJ1ZmZlciA9IG5ldyBCdWZmZXJMaXN0KCk7XG4gIHRoaXMubGVuZ3RoID0gMDtcbiAgdGhpcy5waXBlcyA9IG51bGw7XG4gIHRoaXMucGlwZXNDb3VudCA9IDA7XG4gIHRoaXMuZmxvd2luZyA9IG51bGw7XG4gIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgdGhpcy5lbmRFbWl0dGVkID0gZmFsc2U7XG4gIHRoaXMucmVhZGluZyA9IGZhbHNlO1xuXG4gIC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIGV2ZW50ICdyZWFkYWJsZScvJ2RhdGEnIGlzIGVtaXR0ZWRcbiAgLy8gaW1tZWRpYXRlbHksIG9yIG9uIGEgbGF0ZXIgdGljay4gIFdlIHNldCB0aGlzIHRvIHRydWUgYXQgZmlyc3QsIGJlY2F1c2VcbiAgLy8gYW55IGFjdGlvbnMgdGhhdCBzaG91bGRuJ3QgaGFwcGVuIHVudGlsIFwibGF0ZXJcIiBzaG91bGQgZ2VuZXJhbGx5IGFsc29cbiAgLy8gbm90IGhhcHBlbiBiZWZvcmUgdGhlIGZpcnN0IHJlYWQgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyB3aGVuZXZlciB3ZSByZXR1cm4gbnVsbCwgdGhlbiB3ZSBzZXQgYSBmbGFnIHRvIHNheVxuICAvLyB0aGF0IHdlJ3JlIGF3YWl0aW5nIGEgJ3JlYWRhYmxlJyBldmVudCBlbWlzc2lvbi5cbiAgdGhpcy5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZUxpc3RlbmluZyA9IGZhbHNlO1xuICB0aGlzLnJlc3VtZVNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gIC8vIGhhcyBpdCBiZWVuIGRlc3Ryb3llZFxuICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIHRoZSBudW1iZXIgb2Ygd3JpdGVycyB0aGF0IGFyZSBhd2FpdGluZyBhIGRyYWluIGV2ZW50IGluIC5waXBlKClzXG4gIHRoaXMuYXdhaXREcmFpbiA9IDA7XG5cbiAgLy8gaWYgdHJ1ZSwgYSBtYXliZVJlYWRNb3JlIGhhcyBiZWVuIHNjaGVkdWxlZFxuICB0aGlzLnJlYWRpbmdNb3JlID0gZmFsc2U7XG5cbiAgdGhpcy5kZWNvZGVyID0gbnVsbDtcbiAgdGhpcy5lbmNvZGluZyA9IG51bGw7XG4gIGlmIChvcHRpb25zLmVuY29kaW5nKSB7XG4gICAgaWYgKCFTdHJpbmdEZWNvZGVyKSBTdHJpbmdEZWNvZGVyID0gcmVxdWlyZSgnc3RyaW5nX2RlY29kZXIvJykuU3RyaW5nRGVjb2RlcjtcbiAgICB0aGlzLmRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihvcHRpb25zLmVuY29kaW5nKTtcbiAgICB0aGlzLmVuY29kaW5nID0gb3B0aW9ucy5lbmNvZGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBSZWFkYWJsZShvcHRpb25zKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlYWRhYmxlKSkgcmV0dXJuIG5ldyBSZWFkYWJsZShvcHRpb25zKTtcblxuICB0aGlzLl9yZWFkYWJsZVN0YXRlID0gbmV3IFJlYWRhYmxlU3RhdGUob3B0aW9ucywgdGhpcyk7XG5cbiAgLy8gbGVnYWN5XG4gIHRoaXMucmVhZGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnJlYWQgPT09ICdmdW5jdGlvbicpIHRoaXMuX3JlYWQgPSBvcHRpb25zLnJlYWQ7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZGVzdHJveSA9IG9wdGlvbnMuZGVzdHJveTtcbiAgfVxuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGUucHJvdG90eXBlLCAnZGVzdHJveWVkJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyB3ZSBpZ25vcmUgdGhlIHZhbHVlIGlmIHRoZSBzdHJlYW1cbiAgICAvLyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYgKCF0aGlzLl9yZWFkYWJsZVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhlIHVzZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIG1hbmFnaW5nIGRlc3Ryb3llZFxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gIH1cbn0pO1xuXG5SZWFkYWJsZS5wcm90b3R5cGUuZGVzdHJveSA9IGRlc3Ryb3lJbXBsLmRlc3Ryb3k7XG5SZWFkYWJsZS5wcm90b3R5cGUuX3VuZGVzdHJveSA9IGRlc3Ryb3lJbXBsLnVuZGVzdHJveTtcblJlYWRhYmxlLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIHRoaXMucHVzaChudWxsKTtcbiAgY2IoZXJyKTtcbn07XG5cbi8vIE1hbnVhbGx5IHNob3ZlIHNvbWV0aGluZyBpbnRvIHRoZSByZWFkKCkgYnVmZmVyLlxuLy8gVGhpcyByZXR1cm5zIHRydWUgaWYgdGhlIGhpZ2hXYXRlck1hcmsgaGFzIG5vdCBiZWVuIGhpdCB5ZXQsXG4vLyBzaW1pbGFyIHRvIGhvdyBXcml0YWJsZS53cml0ZSgpIHJldHVybnMgdHJ1ZSBpZiB5b3Ugc2hvdWxkXG4vLyB3cml0ZSgpIHNvbWUgbW9yZS5cblJlYWRhYmxlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZykge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgc2tpcENodW5rQ2hlY2s7XG5cbiAgaWYgKCFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5jb2RpbmcgfHwgc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuICAgICAgaWYgKGVuY29kaW5nICE9PSBzdGF0ZS5lbmNvZGluZykge1xuICAgICAgICBjaHVuayA9IEJ1ZmZlci5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gICAgICAgIGVuY29kaW5nID0gJyc7XG4gICAgICB9XG4gICAgICBza2lwQ2h1bmtDaGVjayA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNraXBDaHVua0NoZWNrID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIGNodW5rLCBlbmNvZGluZywgZmFsc2UsIHNraXBDaHVua0NoZWNrKTtcbn07XG5cbi8vIFVuc2hpZnQgc2hvdWxkICphbHdheXMqIGJlIHNvbWV0aGluZyBkaXJlY3RseSBvdXQgb2YgcmVhZCgpXG5SZWFkYWJsZS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICByZXR1cm4gcmVhZGFibGVBZGRDaHVuayh0aGlzLCBjaHVuaywgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xufTtcblxuZnVuY3Rpb24gcmVhZGFibGVBZGRDaHVuayhzdHJlYW0sIGNodW5rLCBlbmNvZGluZywgYWRkVG9Gcm9udCwgc2tpcENodW5rQ2hlY2spIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBpZiAoY2h1bmsgPT09IG51bGwpIHtcbiAgICBzdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgb25Fb2ZDaHVuayhzdHJlYW0sIHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKCFza2lwQ2h1bmtDaGVjaykgZXIgPSBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKTtcbiAgICBpZiAoZXIpIHtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLm9iamVjdE1vZGUgfHwgY2h1bmsgJiYgY2h1bmsubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgIXN0YXRlLm9iamVjdE1vZGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGNodW5rKSAhPT0gQnVmZmVyLnByb3RvdHlwZSkge1xuICAgICAgICBjaHVuayA9IF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWRkVG9Gcm9udCkge1xuICAgICAgICBpZiAoc3RhdGUuZW5kRW1pdHRlZCkgc3RyZWFtLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdzdHJlYW0udW5zaGlmdCgpIGFmdGVyIGVuZCBldmVudCcpKTtlbHNlIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZW5kZWQpIHtcbiAgICAgICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdzdHJlYW0ucHVzaCgpIGFmdGVyIEVPRicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIWVuY29kaW5nKSB7XG4gICAgICAgICAgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcbiAgICAgICAgICBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuay5sZW5ndGggIT09IDApIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBmYWxzZSk7ZWxzZSBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFhZGRUb0Zyb250KSB7XG4gICAgICBzdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5lZWRNb3JlRGF0YShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBhZGRUb0Zyb250KSB7XG4gIGlmIChzdGF0ZS5mbG93aW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiAhc3RhdGUuc3luYykge1xuICAgIHN0cmVhbS5lbWl0KCdkYXRhJywgY2h1bmspO1xuICAgIHN0cmVhbS5yZWFkKDApO1xuICB9IGVsc2Uge1xuICAgIC8vIHVwZGF0ZSB0aGUgYnVmZmVyIGluZm8uXG4gICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIGlmIChhZGRUb0Zyb250KSBzdGF0ZS5idWZmZXIudW5zaGlmdChjaHVuayk7ZWxzZSBzdGF0ZS5idWZmZXIucHVzaChjaHVuayk7XG5cbiAgICBpZiAoc3RhdGUubmVlZFJlYWRhYmxlKSBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbiAgfVxuICBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKSB7XG4gIHZhciBlcjtcbiAgaWYgKCFfaXNVaW50OEFycmF5KGNodW5rKSAmJiB0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmIGNodW5rICE9PSB1bmRlZmluZWQgJiYgIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbm9uLXN0cmluZy9idWZmZXIgY2h1bmsnKTtcbiAgfVxuICByZXR1cm4gZXI7XG59XG5cbi8vIGlmIGl0J3MgcGFzdCB0aGUgaGlnaCB3YXRlciBtYXJrLCB3ZSBjYW4gcHVzaCBpbiBzb21lIG1vcmUuXG4vLyBBbHNvLCBpZiB3ZSBoYXZlIG5vIGRhdGEgeWV0LCB3ZSBjYW4gc3RhbmQgc29tZVxuLy8gbW9yZSBieXRlcy4gIFRoaXMgaXMgdG8gd29yayBhcm91bmQgY2FzZXMgd2hlcmUgaHdtPTAsXG4vLyBzdWNoIGFzIHRoZSByZXBsLiAgQWxzbywgaWYgdGhlIHB1c2goKSB0cmlnZ2VyZWQgYVxuLy8gcmVhZGFibGUgZXZlbnQsIGFuZCB0aGUgdXNlciBjYWxsZWQgcmVhZChsYXJnZU51bWJlcikgc3VjaCB0aGF0XG4vLyBuZWVkUmVhZGFibGUgd2FzIHNldCwgdGhlbiB3ZSBvdWdodCB0byBwdXNoIG1vcmUsIHNvIHRoYXQgYW5vdGhlclxuLy8gJ3JlYWRhYmxlJyBldmVudCB3aWxsIGJlIHRyaWdnZXJlZC5cbmZ1bmN0aW9uIG5lZWRNb3JlRGF0YShzdGF0ZSkge1xuICByZXR1cm4gIXN0YXRlLmVuZGVkICYmIChzdGF0ZS5uZWVkUmVhZGFibGUgfHwgc3RhdGUubGVuZ3RoIDwgc3RhdGUuaGlnaFdhdGVyTWFyayB8fCBzdGF0ZS5sZW5ndGggPT09IDApO1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUuaXNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgPT09IGZhbHNlO1xufTtcblxuLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5SZWFkYWJsZS5wcm90b3R5cGUuc2V0RW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jKSB7XG4gIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKGVuYyk7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5jb2RpbmcgPSBlbmM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gRG9uJ3QgcmFpc2UgdGhlIGh3bSA+IDhNQlxudmFyIE1BWF9IV00gPSAweDgwMDAwMDtcbmZ1bmN0aW9uIGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pIHtcbiAgaWYgKG4gPj0gTUFYX0hXTSkge1xuICAgIG4gPSBNQVhfSFdNO1xuICB9IGVsc2Uge1xuICAgIC8vIEdldCB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyIG9mIDIgdG8gcHJldmVudCBpbmNyZWFzaW5nIGh3bSBleGNlc3NpdmVseSBpblxuICAgIC8vIHRpbnkgYW1vdW50c1xuICAgIG4tLTtcbiAgICBuIHw9IG4gPj4+IDE7XG4gICAgbiB8PSBuID4+PiAyO1xuICAgIG4gfD0gbiA+Pj4gNDtcbiAgICBuIHw9IG4gPj4+IDg7XG4gICAgbiB8PSBuID4+PiAxNjtcbiAgICBuKys7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gaG93TXVjaFRvUmVhZChuLCBzdGF0ZSkge1xuICBpZiAobiA8PSAwIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkgcmV0dXJuIDA7XG4gIGlmIChzdGF0ZS5vYmplY3RNb2RlKSByZXR1cm4gMTtcbiAgaWYgKG4gIT09IG4pIHtcbiAgICAvLyBPbmx5IGZsb3cgb25lIGJ1ZmZlciBhdCBhIHRpbWVcbiAgICBpZiAoc3RhdGUuZmxvd2luZyAmJiBzdGF0ZS5sZW5ndGgpIHJldHVybiBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhLmxlbmd0aDtlbHNlIHJldHVybiBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgLy8gSWYgd2UncmUgYXNraW5nIGZvciBtb3JlIHRoYW4gdGhlIGN1cnJlbnQgaHdtLCB0aGVuIHJhaXNlIHRoZSBod20uXG4gIGlmIChuID4gc3RhdGUuaGlnaFdhdGVyTWFyaykgc3RhdGUuaGlnaFdhdGVyTWFyayA9IGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pO1xuICBpZiAobiA8PSBzdGF0ZS5sZW5ndGgpIHJldHVybiBuO1xuICAvLyBEb24ndCBoYXZlIGVub3VnaFxuICBpZiAoIXN0YXRlLmVuZGVkKSB7XG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gc3RhdGUubGVuZ3RoO1xufVxuXG4vLyB5b3UgY2FuIG92ZXJyaWRlIGVpdGhlciB0aGlzIG1ldGhvZCwgb3IgdGhlIGFzeW5jIF9yZWFkKG4pIGJlbG93LlxuUmVhZGFibGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAobikge1xuICBkZWJ1ZygncmVhZCcsIG4pO1xuICBuID0gcGFyc2VJbnQobiwgMTApO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgbk9yaWcgPSBuO1xuXG4gIGlmIChuICE9PSAwKSBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcblxuICAvLyBpZiB3ZSdyZSBkb2luZyByZWFkKDApIHRvIHRyaWdnZXIgYSByZWFkYWJsZSBldmVudCwgYnV0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhIGJ1bmNoIG9mIGRhdGEgaW4gdGhlIGJ1ZmZlciwgdGhlbiBqdXN0IHRyaWdnZXJcbiAgLy8gdGhlICdyZWFkYWJsZScgZXZlbnQgYW5kIG1vdmUgb24uXG4gIGlmIChuID09PSAwICYmIHN0YXRlLm5lZWRSZWFkYWJsZSAmJiAoc3RhdGUubGVuZ3RoID49IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUuZW5kZWQpKSB7XG4gICAgZGVidWcoJ3JlYWQ6IGVtaXRSZWFkYWJsZScsIHN0YXRlLmxlbmd0aCwgc3RhdGUuZW5kZWQpO1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO2Vsc2UgZW1pdFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbiA9IGhvd011Y2hUb1JlYWQobiwgc3RhdGUpO1xuXG4gIC8vIGlmIHdlJ3ZlIGVuZGVkLCBhbmQgd2UncmUgbm93IGNsZWFyLCB0aGVuIGZpbmlzaCBpdCB1cC5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUuZW5kZWQpIHtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEFsbCB0aGUgYWN0dWFsIGNodW5rIGdlbmVyYXRpb24gbG9naWMgbmVlZHMgdG8gYmVcbiAgLy8gKmJlbG93KiB0aGUgY2FsbCB0byBfcmVhZC4gIFRoZSByZWFzb24gaXMgdGhhdCBpbiBjZXJ0YWluXG4gIC8vIHN5bnRoZXRpYyBzdHJlYW0gY2FzZXMsIHN1Y2ggYXMgcGFzc3Rocm91Z2ggc3RyZWFtcywgX3JlYWRcbiAgLy8gbWF5IGJlIGEgY29tcGxldGVseSBzeW5jaHJvbm91cyBvcGVyYXRpb24gd2hpY2ggbWF5IGNoYW5nZVxuICAvLyB0aGUgc3RhdGUgb2YgdGhlIHJlYWQgYnVmZmVyLCBwcm92aWRpbmcgZW5vdWdoIGRhdGEgd2hlblxuICAvLyBiZWZvcmUgdGhlcmUgd2FzICpub3QqIGVub3VnaC5cbiAgLy9cbiAgLy8gU28sIHRoZSBzdGVwcyBhcmU6XG4gIC8vIDEuIEZpZ3VyZSBvdXQgd2hhdCB0aGUgc3RhdGUgb2YgdGhpbmdzIHdpbGwgYmUgYWZ0ZXIgd2UgZG9cbiAgLy8gYSByZWFkIGZyb20gdGhlIGJ1ZmZlci5cbiAgLy9cbiAgLy8gMi4gSWYgdGhhdCByZXN1bHRpbmcgc3RhdGUgd2lsbCB0cmlnZ2VyIGEgX3JlYWQsIHRoZW4gY2FsbCBfcmVhZC5cbiAgLy8gTm90ZSB0aGF0IHRoaXMgbWF5IGJlIGFzeW5jaHJvbm91cywgb3Igc3luY2hyb25vdXMuICBZZXMsIGl0IGlzXG4gIC8vIGRlZXBseSB1Z2x5IHRvIHdyaXRlIEFQSXMgdGhpcyB3YXksIGJ1dCB0aGF0IHN0aWxsIGRvZXNuJ3QgbWVhblxuICAvLyB0aGF0IHRoZSBSZWFkYWJsZSBjbGFzcyBzaG91bGQgYmVoYXZlIGltcHJvcGVybHksIGFzIHN0cmVhbXMgYXJlXG4gIC8vIGRlc2lnbmVkIHRvIGJlIHN5bmMvYXN5bmMgYWdub3N0aWMuXG4gIC8vIFRha2Ugbm90ZSBpZiB0aGUgX3JlYWQgY2FsbCBpcyBzeW5jIG9yIGFzeW5jIChpZSwgaWYgdGhlIHJlYWQgY2FsbFxuICAvLyBoYXMgcmV0dXJuZWQgeWV0KSwgc28gdGhhdCB3ZSBrbm93IHdoZXRoZXIgb3Igbm90IGl0J3Mgc2FmZSB0byBlbWl0XG4gIC8vICdyZWFkYWJsZScgZXRjLlxuICAvL1xuICAvLyAzLiBBY3R1YWxseSBwdWxsIHRoZSByZXF1ZXN0ZWQgY2h1bmtzIG91dCBvZiB0aGUgYnVmZmVyIGFuZCByZXR1cm4uXG5cbiAgLy8gaWYgd2UgbmVlZCBhIHJlYWRhYmxlIGV2ZW50LCB0aGVuIHdlIG5lZWQgdG8gZG8gc29tZSByZWFkaW5nLlxuICB2YXIgZG9SZWFkID0gc3RhdGUubmVlZFJlYWRhYmxlO1xuICBkZWJ1ZygnbmVlZCByZWFkYWJsZScsIGRvUmVhZCk7XG5cbiAgLy8gaWYgd2UgY3VycmVudGx5IGhhdmUgbGVzcyB0aGFuIHRoZSBoaWdoV2F0ZXJNYXJrLCB0aGVuIGFsc28gcmVhZCBzb21lXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgfHwgc3RhdGUubGVuZ3RoIC0gbiA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkb1JlYWQgPSB0cnVlO1xuICAgIGRlYnVnKCdsZW5ndGggbGVzcyB0aGFuIHdhdGVybWFyaycsIGRvUmVhZCk7XG4gIH1cblxuICAvLyBob3dldmVyLCBpZiB3ZSd2ZSBlbmRlZCwgdGhlbiB0aGVyZSdzIG5vIHBvaW50LCBhbmQgaWYgd2UncmUgYWxyZWFkeVxuICAvLyByZWFkaW5nLCB0aGVuIGl0J3MgdW5uZWNlc3NhcnkuXG4gIGlmIChzdGF0ZS5lbmRlZCB8fCBzdGF0ZS5yZWFkaW5nKSB7XG4gICAgZG9SZWFkID0gZmFsc2U7XG4gICAgZGVidWcoJ3JlYWRpbmcgb3IgZW5kZWQnLCBkb1JlYWQpO1xuICB9IGVsc2UgaWYgKGRvUmVhZCkge1xuICAgIGRlYnVnKCdkbyByZWFkJyk7XG4gICAgc3RhdGUucmVhZGluZyA9IHRydWU7XG4gICAgc3RhdGUuc3luYyA9IHRydWU7XG4gICAgLy8gaWYgdGhlIGxlbmd0aCBpcyBjdXJyZW50bHkgemVybywgdGhlbiB3ZSAqbmVlZCogYSByZWFkYWJsZSBldmVudC5cbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIC8vIGNhbGwgaW50ZXJuYWwgcmVhZCBtZXRob2RcbiAgICB0aGlzLl9yZWFkKHN0YXRlLmhpZ2hXYXRlck1hcmspO1xuICAgIHN0YXRlLnN5bmMgPSBmYWxzZTtcbiAgICAvLyBJZiBfcmVhZCBwdXNoZWQgZGF0YSBzeW5jaHJvbm91c2x5LCB0aGVuIGByZWFkaW5nYCB3aWxsIGJlIGZhbHNlLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHJlLWV2YWx1YXRlIGhvdyBtdWNoIGRhdGEgd2UgY2FuIHJldHVybiB0byB0aGUgdXNlci5cbiAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIG4gPSBob3dNdWNoVG9SZWFkKG5PcmlnLCBzdGF0ZSk7XG4gIH1cblxuICB2YXIgcmV0O1xuICBpZiAobiA+IDApIHJldCA9IGZyb21MaXN0KG4sIHN0YXRlKTtlbHNlIHJldCA9IG51bGw7XG5cbiAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgbiA9IDA7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGVuZ3RoIC09IG47XG4gIH1cblxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3RoaW5nIGluIHRoZSBidWZmZXIsIHRoZW4gd2Ugd2FudCB0byBrbm93XG4gICAgLy8gYXMgc29vbiBhcyB3ZSAqZG8qIGdldCBzb21ldGhpbmcgaW50byB0aGUgYnVmZmVyLlxuICAgIGlmICghc3RhdGUuZW5kZWQpIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG5cbiAgICAvLyBJZiB3ZSB0cmllZCB0byByZWFkKCkgcGFzdCB0aGUgRU9GLCB0aGVuIGVtaXQgZW5kIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgaWYgKG5PcmlnICE9PSBuICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgfVxuXG4gIGlmIChyZXQgIT09IG51bGwpIHRoaXMuZW1pdCgnZGF0YScsIHJldCk7XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoc3RhdGUuZW5kZWQpIHJldHVybjtcbiAgaWYgKHN0YXRlLmRlY29kZXIpIHtcbiAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIHtcbiAgICAgIHN0YXRlLmJ1ZmZlci5wdXNoKGNodW5rKTtcbiAgICAgIHN0YXRlLmxlbmd0aCArPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuXG4gIC8vIGVtaXQgJ3JlYWRhYmxlJyBub3cgdG8gbWFrZSBzdXJlIGl0IGdldHMgcGlja2VkIHVwLlxuICBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbn1cblxuLy8gRG9uJ3QgZW1pdCByZWFkYWJsZSByaWdodCBhd2F5IGluIHN5bmMgbW9kZSwgYmVjYXVzZSB0aGlzIGNhbiB0cmlnZ2VyXG4vLyBhbm90aGVyIHJlYWQoKSBjYWxsID0+IHN0YWNrIG92ZXJmbG93LiAgVGhpcyB3YXksIGl0IG1pZ2h0IHRyaWdnZXJcbi8vIGEgbmV4dFRpY2sgcmVjdXJzaW9uIHdhcm5pbmcsIGJ1dCB0aGF0J3Mgbm90IHNvIGJhZC5cbmZ1bmN0aW9uIGVtaXRSZWFkYWJsZShzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBzdGF0ZS5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgaWYgKCFzdGF0ZS5lbWl0dGVkUmVhZGFibGUpIHtcbiAgICBkZWJ1ZygnZW1pdFJlYWRhYmxlJywgc3RhdGUuZmxvd2luZyk7XG4gICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICBpZiAoc3RhdGUuc3luYykgcG5hLm5leHRUaWNrKGVtaXRSZWFkYWJsZV8sIHN0cmVhbSk7ZWxzZSBlbWl0UmVhZGFibGVfKHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlXyhzdHJlYW0pIHtcbiAgZGVidWcoJ2VtaXQgcmVhZGFibGUnKTtcbiAgc3RyZWFtLmVtaXQoJ3JlYWRhYmxlJyk7XG4gIGZsb3coc3RyZWFtKTtcbn1cblxuLy8gYXQgdGhpcyBwb2ludCwgdGhlIHVzZXIgaGFzIHByZXN1bWFibHkgc2VlbiB0aGUgJ3JlYWRhYmxlJyBldmVudCxcbi8vIGFuZCBjYWxsZWQgcmVhZCgpIHRvIGNvbnN1bWUgc29tZSBkYXRhLiAgdGhhdCBtYXkgaGF2ZSB0cmlnZ2VyZWRcbi8vIGluIHR1cm4gYW5vdGhlciBfcmVhZChuKSBjYWxsLCBpbiB3aGljaCBjYXNlIHJlYWRpbmcgPSB0cnVlIGlmXG4vLyBpdCdzIGluIHByb2dyZXNzLlxuLy8gSG93ZXZlciwgaWYgd2UncmUgbm90IGVuZGVkLCBvciByZWFkaW5nLCBhbmQgdGhlIGxlbmd0aCA8IGh3bSxcbi8vIHRoZW4gZ28gYWhlYWQgYW5kIHRyeSB0byByZWFkIHNvbWUgbW9yZSBwcmVlbXB0aXZlbHkuXG5mdW5jdGlvbiBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5yZWFkaW5nTW9yZSkge1xuICAgIHN0YXRlLnJlYWRpbmdNb3JlID0gdHJ1ZTtcbiAgICBwbmEubmV4dFRpY2sobWF5YmVSZWFkTW9yZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmVfKHN0cmVhbSwgc3RhdGUpIHtcbiAgdmFyIGxlbiA9IHN0YXRlLmxlbmd0aDtcbiAgd2hpbGUgKCFzdGF0ZS5yZWFkaW5nICYmICFzdGF0ZS5mbG93aW5nICYmICFzdGF0ZS5lbmRlZCAmJiBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSB7XG4gICAgZGVidWcoJ21heWJlUmVhZE1vcmUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gICAgaWYgKGxlbiA9PT0gc3RhdGUubGVuZ3RoKVxuICAgICAgLy8gZGlkbid0IGdldCBhbnkgZGF0YSwgc3RvcCBzcGlubmluZy5cbiAgICAgIGJyZWFrO2Vsc2UgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB9XG4gIHN0YXRlLnJlYWRpbmdNb3JlID0gZmFsc2U7XG59XG5cbi8vIGFic3RyYWN0IG1ldGhvZC4gIHRvIGJlIG92ZXJyaWRkZW4gaW4gc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gY2xhc3Nlcy5cbi8vIGNhbGwgY2IoZXIsIGRhdGEpIHdoZXJlIGRhdGEgaXMgPD0gbiBpbiBsZW5ndGguXG4vLyBmb3IgdmlydHVhbCAobm9uLXN0cmluZywgbm9uLWJ1ZmZlcikgc3RyZWFtcywgXCJsZW5ndGhcIiBpcyBzb21ld2hhdFxuLy8gYXJiaXRyYXJ5LCBhbmQgcGVyaGFwcyBub3QgdmVyeSBtZWFuaW5nZnVsLlxuUmVhZGFibGUucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignX3JlYWQoKSBpcyBub3QgaW1wbGVtZW50ZWQnKSk7XG59O1xuXG5SZWFkYWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uIChkZXN0LCBwaXBlT3B0cykge1xuICB2YXIgc3JjID0gdGhpcztcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBzd2l0Y2ggKHN0YXRlLnBpcGVzQ291bnQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBzdGF0ZS5waXBlcyA9IGRlc3Q7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBzdGF0ZS5waXBlcyA9IFtzdGF0ZS5waXBlcywgZGVzdF07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUucGlwZXMucHVzaChkZXN0KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHN0YXRlLnBpcGVzQ291bnQgKz0gMTtcbiAgZGVidWcoJ3BpcGUgY291bnQ9JWQgb3B0cz0laicsIHN0YXRlLnBpcGVzQ291bnQsIHBpcGVPcHRzKTtcblxuICB2YXIgZG9FbmQgPSAoIXBpcGVPcHRzIHx8IHBpcGVPcHRzLmVuZCAhPT0gZmFsc2UpICYmIGRlc3QgIT09IHByb2Nlc3Muc3Rkb3V0ICYmIGRlc3QgIT09IHByb2Nlc3Muc3RkZXJyO1xuXG4gIHZhciBlbmRGbiA9IGRvRW5kID8gb25lbmQgOiB1bnBpcGU7XG4gIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBwbmEubmV4dFRpY2soZW5kRm4pO2Vsc2Ugc3JjLm9uY2UoJ2VuZCcsIGVuZEZuKTtcblxuICBkZXN0Lm9uKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gIGZ1bmN0aW9uIG9udW5waXBlKHJlYWRhYmxlLCB1bnBpcGVJbmZvKSB7XG4gICAgZGVidWcoJ29udW5waXBlJyk7XG4gICAgaWYgKHJlYWRhYmxlID09PSBzcmMpIHtcbiAgICAgIGlmICh1bnBpcGVJbmZvICYmIHVucGlwZUluZm8uaGFzVW5waXBlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdW5waXBlSW5mby5oYXNVbnBpcGVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZW5kKCkge1xuICAgIGRlYnVnKCdvbmVuZCcpO1xuICAgIGRlc3QuZW5kKCk7XG4gIH1cblxuICAvLyB3aGVuIHRoZSBkZXN0IGRyYWlucywgaXQgcmVkdWNlcyB0aGUgYXdhaXREcmFpbiBjb3VudGVyXG4gIC8vIG9uIHRoZSBzb3VyY2UuICBUaGlzIHdvdWxkIGJlIG1vcmUgZWxlZ2FudCB3aXRoIGEgLm9uY2UoKVxuICAvLyBoYW5kbGVyIGluIGZsb3coKSwgYnV0IGFkZGluZyBhbmQgcmVtb3ZpbmcgcmVwZWF0ZWRseSBpc1xuICAvLyB0b28gc2xvdy5cbiAgdmFyIG9uZHJhaW4gPSBwaXBlT25EcmFpbihzcmMpO1xuICBkZXN0Lm9uKCdkcmFpbicsIG9uZHJhaW4pO1xuXG4gIHZhciBjbGVhbmVkVXAgPSBmYWxzZTtcbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBkZWJ1ZygnY2xlYW51cCcpO1xuICAgIC8vIGNsZWFudXAgZXZlbnQgaGFuZGxlcnMgb25jZSB0aGUgcGlwZSBpcyBicm9rZW5cbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdkcmFpbicsIG9uZHJhaW4pO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcigndW5waXBlJywgb251bnBpcGUpO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZW5kJywgdW5waXBlKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBvbmRhdGEpO1xuXG4gICAgY2xlYW5lZFVwID0gdHJ1ZTtcblxuICAgIC8vIGlmIHRoZSByZWFkZXIgaXMgd2FpdGluZyBmb3IgYSBkcmFpbiBldmVudCBmcm9tIHRoaXNcbiAgICAvLyBzcGVjaWZpYyB3cml0ZXIsIHRoZW4gaXQgd291bGQgY2F1c2UgaXQgdG8gbmV2ZXIgc3RhcnRcbiAgICAvLyBmbG93aW5nIGFnYWluLlxuICAgIC8vIFNvLCBpZiB0aGlzIGlzIGF3YWl0aW5nIGEgZHJhaW4sIHRoZW4gd2UganVzdCBjYWxsIGl0IG5vdy5cbiAgICAvLyBJZiB3ZSBkb24ndCBrbm93LCB0aGVuIGFzc3VtZSB0aGF0IHdlIGFyZSB3YWl0aW5nIGZvciBvbmUuXG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gJiYgKCFkZXN0Ll93cml0YWJsZVN0YXRlIHx8IGRlc3QuX3dyaXRhYmxlU3RhdGUubmVlZERyYWluKSkgb25kcmFpbigpO1xuICB9XG5cbiAgLy8gSWYgdGhlIHVzZXIgcHVzaGVzIG1vcmUgZGF0YSB3aGlsZSB3ZSdyZSB3cml0aW5nIHRvIGRlc3QgdGhlbiB3ZSdsbCBlbmQgdXBcbiAgLy8gaW4gb25kYXRhIGFnYWluLiBIb3dldmVyLCB3ZSBvbmx5IHdhbnQgdG8gaW5jcmVhc2UgYXdhaXREcmFpbiBvbmNlIGJlY2F1c2VcbiAgLy8gZGVzdCB3aWxsIG9ubHkgZW1pdCBvbmUgJ2RyYWluJyBldmVudCBmb3IgdGhlIG11bHRpcGxlIHdyaXRlcy5cbiAgLy8gPT4gSW50cm9kdWNlIGEgZ3VhcmQgb24gaW5jcmVhc2luZyBhd2FpdERyYWluLlxuICB2YXIgaW5jcmVhc2VkQXdhaXREcmFpbiA9IGZhbHNlO1xuICBzcmMub24oJ2RhdGEnLCBvbmRhdGEpO1xuICBmdW5jdGlvbiBvbmRhdGEoY2h1bmspIHtcbiAgICBkZWJ1Zygnb25kYXRhJyk7XG4gICAgaW5jcmVhc2VkQXdhaXREcmFpbiA9IGZhbHNlO1xuICAgIHZhciByZXQgPSBkZXN0LndyaXRlKGNodW5rKTtcbiAgICBpZiAoZmFsc2UgPT09IHJldCAmJiAhaW5jcmVhc2VkQXdhaXREcmFpbikge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgdW5waXBlZCBkdXJpbmcgYGRlc3Qud3JpdGUoKWAsIGl0IGlzIHBvc3NpYmxlXG4gICAgICAvLyB0byBnZXQgc3R1Y2sgaW4gYSBwZXJtYW5lbnRseSBwYXVzZWQgc3RhdGUgaWYgdGhhdCB3cml0ZVxuICAgICAgLy8gYWxzbyByZXR1cm5lZCBmYWxzZS5cbiAgICAgIC8vID0+IENoZWNrIHdoZXRoZXIgYGRlc3RgIGlzIHN0aWxsIGEgcGlwaW5nIGRlc3RpbmF0aW9uLlxuICAgICAgaWYgKChzdGF0ZS5waXBlc0NvdW50ID09PSAxICYmIHN0YXRlLnBpcGVzID09PSBkZXN0IHx8IHN0YXRlLnBpcGVzQ291bnQgPiAxICYmIGluZGV4T2Yoc3RhdGUucGlwZXMsIGRlc3QpICE9PSAtMSkgJiYgIWNsZWFuZWRVcCkge1xuICAgICAgICBkZWJ1ZygnZmFsc2Ugd3JpdGUgcmVzcG9uc2UsIHBhdXNlJywgc3JjLl9yZWFkYWJsZVN0YXRlLmF3YWl0RHJhaW4pO1xuICAgICAgICBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbisrO1xuICAgICAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNyYy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBkZXN0IGhhcyBhbiBlcnJvciwgdGhlbiBzdG9wIHBpcGluZyBpbnRvIGl0LlxuICAvLyBob3dldmVyLCBkb24ndCBzdXBwcmVzcyB0aGUgdGhyb3dpbmcgYmVoYXZpb3IgZm9yIHRoaXMuXG4gIGZ1bmN0aW9uIG9uZXJyb3IoZXIpIHtcbiAgICBkZWJ1Zygnb25lcnJvcicsIGVyKTtcbiAgICB1bnBpcGUoKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGlmIChFRWxpc3RlbmVyQ291bnQoZGVzdCwgJ2Vycm9yJykgPT09IDApIGRlc3QuZW1pdCgnZXJyb3InLCBlcik7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgb3VyIGVycm9yIGhhbmRsZXIgaXMgYXR0YWNoZWQgYmVmb3JlIHVzZXJsYW5kIG9uZXMuXG4gIHByZXBlbmRMaXN0ZW5lcihkZXN0LCAnZXJyb3InLCBvbmVycm9yKTtcblxuICAvLyBCb3RoIGNsb3NlIGFuZCBmaW5pc2ggc2hvdWxkIHRyaWdnZXIgdW5waXBlLCBidXQgb25seSBvbmNlLlxuICBmdW5jdGlvbiBvbmNsb3NlKCkge1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2Nsb3NlJywgb25jbG9zZSk7XG4gIGZ1bmN0aW9uIG9uZmluaXNoKCkge1xuICAgIGRlYnVnKCdvbmZpbmlzaCcpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgdW5waXBlKCk7XG4gIH1cbiAgZGVzdC5vbmNlKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cbiAgZnVuY3Rpb24gdW5waXBlKCkge1xuICAgIGRlYnVnKCd1bnBpcGUnKTtcbiAgICBzcmMudW5waXBlKGRlc3QpO1xuICB9XG5cbiAgLy8gdGVsbCB0aGUgZGVzdCB0aGF0IGl0J3MgYmVpbmcgcGlwZWQgdG9cbiAgZGVzdC5lbWl0KCdwaXBlJywgc3JjKTtcblxuICAvLyBzdGFydCB0aGUgZmxvdyBpZiBpdCBoYXNuJ3QgYmVlbiBzdGFydGVkIGFscmVhZHkuXG4gIGlmICghc3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwaXBlIHJlc3VtZScpO1xuICAgIHNyYy5yZXN1bWUoKTtcbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZnVuY3Rpb24gcGlwZU9uRHJhaW4oc3JjKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gc3JjLl9yZWFkYWJsZVN0YXRlO1xuICAgIGRlYnVnKCdwaXBlT25EcmFpbicsIHN0YXRlLmF3YWl0RHJhaW4pO1xuICAgIGlmIChzdGF0ZS5hd2FpdERyYWluKSBzdGF0ZS5hd2FpdERyYWluLS07XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gPT09IDAgJiYgRUVsaXN0ZW5lckNvdW50KHNyYywgJ2RhdGEnKSkge1xuICAgICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgICBmbG93KHNyYyk7XG4gICAgfVxuICB9O1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUudW5waXBlID0gZnVuY3Rpb24gKGRlc3QpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHVucGlwZUluZm8gPSB7IGhhc1VucGlwZWQ6IGZhbHNlIH07XG5cbiAgLy8gaWYgd2UncmUgbm90IHBpcGluZyBhbnl3aGVyZSwgdGhlbiBkbyBub3RoaW5nLlxuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMCkgcmV0dXJuIHRoaXM7XG5cbiAgLy8ganVzdCBvbmUgZGVzdGluYXRpb24uICBtb3N0IGNvbW1vbiBjYXNlLlxuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMSkge1xuICAgIC8vIHBhc3NlZCBpbiBvbmUsIGJ1dCBpdCdzIG5vdCB0aGUgcmlnaHQgb25lLlxuICAgIGlmIChkZXN0ICYmIGRlc3QgIT09IHN0YXRlLnBpcGVzKSByZXR1cm4gdGhpcztcblxuICAgIGlmICghZGVzdCkgZGVzdCA9IHN0YXRlLnBpcGVzO1xuXG4gICAgLy8gZ290IGEgbWF0Y2guXG4gICAgc3RhdGUucGlwZXMgPSBudWxsO1xuICAgIHN0YXRlLnBpcGVzQ291bnQgPSAwO1xuICAgIHN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcbiAgICBpZiAoZGVzdCkgZGVzdC5lbWl0KCd1bnBpcGUnLCB0aGlzLCB1bnBpcGVJbmZvKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNsb3cgY2FzZS4gbXVsdGlwbGUgcGlwZSBkZXN0aW5hdGlvbnMuXG5cbiAgaWYgKCFkZXN0KSB7XG4gICAgLy8gcmVtb3ZlIGFsbC5cbiAgICB2YXIgZGVzdHMgPSBzdGF0ZS5waXBlcztcbiAgICB2YXIgbGVuID0gc3RhdGUucGlwZXNDb3VudDtcbiAgICBzdGF0ZS5waXBlcyA9IG51bGw7XG4gICAgc3RhdGUucGlwZXNDb3VudCA9IDA7XG4gICAgc3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZGVzdHNbaV0uZW1pdCgndW5waXBlJywgdGhpcywgdW5waXBlSW5mbyk7XG4gICAgfXJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdHJ5IHRvIGZpbmQgdGhlIHJpZ2h0IG9uZS5cbiAgdmFyIGluZGV4ID0gaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiB0aGlzO1xuXG4gIHN0YXRlLnBpcGVzLnNwbGljZShpbmRleCwgMSk7XG4gIHN0YXRlLnBpcGVzQ291bnQgLT0gMTtcbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDEpIHN0YXRlLnBpcGVzID0gc3RhdGUucGlwZXNbMF07XG5cbiAgZGVzdC5lbWl0KCd1bnBpcGUnLCB0aGlzLCB1bnBpcGVJbmZvKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHNldCB1cCBkYXRhIGV2ZW50cyBpZiB0aGV5IGFyZSBhc2tlZCBmb3Jcbi8vIEVuc3VyZSByZWFkYWJsZSBsaXN0ZW5lcnMgZXZlbnR1YWxseSBnZXQgc29tZXRoaW5nXG5SZWFkYWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXYsIGZuKSB7XG4gIHZhciByZXMgPSBTdHJlYW0ucHJvdG90eXBlLm9uLmNhbGwodGhpcywgZXYsIGZuKTtcblxuICBpZiAoZXYgPT09ICdkYXRhJykge1xuICAgIC8vIFN0YXJ0IGZsb3dpbmcgb24gbmV4dCB0aWNrIGlmIHN0cmVhbSBpc24ndCBleHBsaWNpdGx5IHBhdXNlZFxuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgIT09IGZhbHNlKSB0aGlzLnJlc3VtZSgpO1xuICB9IGVsc2UgaWYgKGV2ID09PSAncmVhZGFibGUnKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQgJiYgIXN0YXRlLnJlYWRhYmxlTGlzdGVuaW5nKSB7XG4gICAgICBzdGF0ZS5yZWFkYWJsZUxpc3RlbmluZyA9IHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgICAgIGlmICghc3RhdGUucmVhZGluZykge1xuICAgICAgICBwbmEubmV4dFRpY2soblJlYWRpbmdOZXh0VGljaywgdGhpcyk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxlbmd0aCkge1xuICAgICAgICBlbWl0UmVhZGFibGUodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5SZWFkYWJsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBSZWFkYWJsZS5wcm90b3R5cGUub247XG5cbmZ1bmN0aW9uIG5SZWFkaW5nTmV4dFRpY2soc2VsZikge1xuICBkZWJ1ZygncmVhZGFibGUgbmV4dHRpY2sgcmVhZCAwJyk7XG4gIHNlbGYucmVhZCgwKTtcbn1cblxuLy8gcGF1c2UoKSBhbmQgcmVzdW1lKCkgYXJlIHJlbW5hbnRzIG9mIHRoZSBsZWdhY3kgcmVhZGFibGUgc3RyZWFtIEFQSVxuLy8gSWYgdGhlIHVzZXIgdXNlcyB0aGVtLCB0aGVuIHN3aXRjaCBpbnRvIG9sZCBtb2RlLlxuUmVhZGFibGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3Jlc3VtZScpO1xuICAgIHN0YXRlLmZsb3dpbmcgPSB0cnVlO1xuICAgIHJlc3VtZSh0aGlzLCBzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiByZXN1bWUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlc3VtZVNjaGVkdWxlZCkge1xuICAgIHN0YXRlLnJlc3VtZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgcG5hLm5leHRUaWNrKHJlc3VtZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3VtZV8oc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lIHJlYWQgMCcpO1xuICAgIHN0cmVhbS5yZWFkKDApO1xuICB9XG5cbiAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gZmFsc2U7XG4gIHN0YXRlLmF3YWl0RHJhaW4gPSAwO1xuICBzdHJlYW0uZW1pdCgncmVzdW1lJyk7XG4gIGZsb3coc3RyZWFtKTtcbiAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLnJlYWRpbmcpIHN0cmVhbS5yZWFkKDApO1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdjYWxsIHBhdXNlIGZsb3dpbmc9JWonLCB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcpO1xuICBpZiAoZmFsc2UgIT09IHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwYXVzZScpO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncGF1c2UnKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIGZsb3coc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcbiAgZGVidWcoJ2Zsb3cnLCBzdGF0ZS5mbG93aW5nKTtcbiAgd2hpbGUgKHN0YXRlLmZsb3dpbmcgJiYgc3RyZWFtLnJlYWQoKSAhPT0gbnVsbCkge31cbn1cblxuLy8gd3JhcCBhbiBvbGQtc3R5bGUgc3RyZWFtIGFzIHRoZSBhc3luYyBkYXRhIHNvdXJjZS5cbi8vIFRoaXMgaXMgKm5vdCogcGFydCBvZiB0aGUgcmVhZGFibGUgc3RyZWFtIGludGVyZmFjZS5cbi8vIEl0IGlzIGFuIHVnbHkgdW5mb3J0dW5hdGUgbWVzcyBvZiBoaXN0b3J5LlxuUmVhZGFibGUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuXG4gIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIGRlYnVnKCd3cmFwcGVkIGVuZCcpO1xuICAgIGlmIChzdGF0ZS5kZWNvZGVyICYmICFzdGF0ZS5lbmRlZCkge1xuICAgICAgdmFyIGNodW5rID0gc3RhdGUuZGVjb2Rlci5lbmQoKTtcbiAgICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIF90aGlzLnB1c2goY2h1bmspO1xuICAgIH1cblxuICAgIF90aGlzLnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGRlYnVnKCd3cmFwcGVkIGRhdGEnKTtcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcblxuICAgIC8vIGRvbid0IHNraXAgb3ZlciBmYWxzeSB2YWx1ZXMgaW4gb2JqZWN0TW9kZVxuICAgIGlmIChzdGF0ZS5vYmplY3RNb2RlICYmIChjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuO2Vsc2UgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmICghY2h1bmsgfHwgIWNodW5rLmxlbmd0aCkpIHJldHVybjtcblxuICAgIHZhciByZXQgPSBfdGhpcy5wdXNoKGNodW5rKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5wYXVzZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcHJveHkgYWxsIHRoZSBvdGhlciBtZXRob2RzLlxuICAvLyBpbXBvcnRhbnQgd2hlbiB3cmFwcGluZyBmaWx0ZXJzIGFuZCBkdXBsZXhlcy5cbiAgZm9yICh2YXIgaSBpbiBzdHJlYW0pIHtcbiAgICBpZiAodGhpc1tpXSA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzdHJlYW1baV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbaV0gPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cmVhbVttZXRob2RdLmFwcGx5KHN0cmVhbSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0oaSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJveHkgY2VydGFpbiBpbXBvcnRhbnQgZXZlbnRzLlxuICBmb3IgKHZhciBuID0gMDsgbiA8IGtQcm94eUV2ZW50cy5sZW5ndGg7IG4rKykge1xuICAgIHN0cmVhbS5vbihrUHJveHlFdmVudHNbbl0sIHRoaXMuZW1pdC5iaW5kKHRoaXMsIGtQcm94eUV2ZW50c1tuXSkpO1xuICB9XG5cbiAgLy8gd2hlbiB3ZSB0cnkgdG8gY29uc3VtZSBzb21lIG1vcmUgYnl0ZXMsIHNpbXBseSB1bnBhdXNlIHRoZVxuICAvLyB1bmRlcmx5aW5nIHN0cmVhbS5cbiAgdGhpcy5fcmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgX3JlYWQnLCBuKTtcbiAgICBpZiAocGF1c2VkKSB7XG4gICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN0cmVhbS5yZXN1bWUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGUucHJvdG90eXBlLCAncmVhZGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcblxuLy8gZXhwb3NlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuUmVhZGFibGUuX2Zyb21MaXN0ID0gZnJvbUxpc3Q7XG5cbi8vIFBsdWNrIG9mZiBuIGJ5dGVzIGZyb20gYW4gYXJyYXkgb2YgYnVmZmVycy5cbi8vIExlbmd0aCBpcyB0aGUgY29tYmluZWQgbGVuZ3RocyBvZiBhbGwgdGhlIGJ1ZmZlcnMgaW4gdGhlIGxpc3QuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0KG4sIHN0YXRlKSB7XG4gIC8vIG5vdGhpbmcgYnVmZmVyZWRcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHJldDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldCA9IHN0YXRlLmJ1ZmZlci5zaGlmdCgpO2Vsc2UgaWYgKCFuIHx8IG4gPj0gc3RhdGUubGVuZ3RoKSB7XG4gICAgLy8gcmVhZCBpdCBhbGwsIHRydW5jYXRlIHRoZSBsaXN0XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIHJldCA9IHN0YXRlLmJ1ZmZlci5qb2luKCcnKTtlbHNlIGlmIChzdGF0ZS5idWZmZXIubGVuZ3RoID09PSAxKSByZXQgPSBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhO2Vsc2UgcmV0ID0gc3RhdGUuYnVmZmVyLmNvbmNhdChzdGF0ZS5sZW5ndGgpO1xuICAgIHN0YXRlLmJ1ZmZlci5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlYWQgcGFydCBvZiBsaXN0XG4gICAgcmV0ID0gZnJvbUxpc3RQYXJ0aWFsKG4sIHN0YXRlLmJ1ZmZlciwgc3RhdGUuZGVjb2Rlcik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBFeHRyYWN0cyBvbmx5IGVub3VnaCBidWZmZXJlZCBkYXRhIHRvIHNhdGlzZnkgdGhlIGFtb3VudCByZXF1ZXN0ZWQuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0UGFydGlhbChuLCBsaXN0LCBoYXNTdHJpbmdzKSB7XG4gIHZhciByZXQ7XG4gIGlmIChuIDwgbGlzdC5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gc2xpY2UgaXMgdGhlIHNhbWUgZm9yIGJ1ZmZlcnMgYW5kIHN0cmluZ3NcbiAgICByZXQgPSBsaXN0LmhlYWQuZGF0YS5zbGljZSgwLCBuKTtcbiAgICBsaXN0LmhlYWQuZGF0YSA9IGxpc3QuaGVhZC5kYXRhLnNsaWNlKG4pO1xuICB9IGVsc2UgaWYgKG4gPT09IGxpc3QuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgIC8vIGZpcnN0IGNodW5rIGlzIGEgcGVyZmVjdCBtYXRjaFxuICAgIHJldCA9IGxpc3Quc2hpZnQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZXN1bHQgc3BhbnMgbW9yZSB0aGFuIG9uZSBidWZmZXJcbiAgICByZXQgPSBoYXNTdHJpbmdzID8gY29weUZyb21CdWZmZXJTdHJpbmcobiwgbGlzdCkgOiBjb3B5RnJvbUJ1ZmZlcihuLCBsaXN0KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgbGlzdCBvZiBidWZmZXJlZCBkYXRhXG4vLyBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyU3RyaW5nKG4sIGxpc3QpIHtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgdmFyIHJldCA9IHAuZGF0YTtcbiAgbiAtPSByZXQubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBzdHIgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IHN0ci5sZW5ndGggPyBzdHIubGVuZ3RoIDogbjtcbiAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHJldCArPSBzdHI7ZWxzZSByZXQgKz0gc3RyLnNsaWNlKDAsIG4pO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBzdHIuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGJ5dGVzIGZyb20gdGhlIGxpc3Qgb2YgYnVmZmVyZWQgZGF0YSBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyKG4sIGxpc3QpIHtcbiAgdmFyIHJldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuKTtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgcC5kYXRhLmNvcHkocmV0KTtcbiAgbiAtPSBwLmRhdGEubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBidWYgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IGJ1Zi5sZW5ndGggPyBidWYubGVuZ3RoIDogbjtcbiAgICBidWYuY29weShyZXQsIHJldC5sZW5ndGggLSBuLCAwLCBuYik7XG4gICAgbiAtPSBuYjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgaWYgKG5iID09PSBidWYubGVuZ3RoKSB7XG4gICAgICAgICsrYztcbiAgICAgICAgaWYgKHAubmV4dCkgbGlzdC5oZWFkID0gcC5uZXh0O2Vsc2UgbGlzdC5oZWFkID0gbGlzdC50YWlsID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuaGVhZCA9IHA7XG4gICAgICAgIHAuZGF0YSA9IGJ1Zi5zbGljZShuYik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgKytjO1xuICB9XG4gIGxpc3QubGVuZ3RoIC09IGM7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGVuZFJlYWRhYmxlKHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG5cbiAgLy8gSWYgd2UgZ2V0IGhlcmUgYmVmb3JlIGNvbnN1bWluZyBhbGwgdGhlIGJ5dGVzLCB0aGVuIHRoYXQgaXMgYVxuICAvLyBidWcgaW4gbm9kZS4gIFNob3VsZCBuZXZlciBoYXBwZW4uXG4gIGlmIChzdGF0ZS5sZW5ndGggPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ1wiZW5kUmVhZGFibGUoKVwiIGNhbGxlZCBvbiBub24tZW1wdHkgc3RyZWFtJyk7XG5cbiAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICAgIHBuYS5uZXh0VGljayhlbmRSZWFkYWJsZU5ULCBzdGF0ZSwgc3RyZWFtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmRSZWFkYWJsZU5UKHN0YXRlLCBzdHJlYW0pIHtcbiAgLy8gQ2hlY2sgdGhhdCB3ZSBkaWRuJ3QgZ2V0IG9uZSBsYXN0IHVuc2hpZnQuXG4gIGlmICghc3RhdGUuZW5kRW1pdHRlZCAmJiBzdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBzdGF0ZS5lbmRFbWl0dGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0ucmVhZGFibGUgPSBmYWxzZTtcbiAgICBzdHJlYW0uZW1pdCgnZW5kJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZXhPZih4cywgeCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh4c1tpXSA9PT0geCkgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBhIHRyYW5zZm9ybSBzdHJlYW0gaXMgYSByZWFkYWJsZS93cml0YWJsZSBzdHJlYW0gd2hlcmUgeW91IGRvXG4vLyBzb21ldGhpbmcgd2l0aCB0aGUgZGF0YS4gIFNvbWV0aW1lcyBpdCdzIGNhbGxlZCBhIFwiZmlsdGVyXCIsXG4vLyBidXQgdGhhdCdzIG5vdCBhIGdyZWF0IG5hbWUgZm9yIGl0LCBzaW5jZSB0aGF0IGltcGxpZXMgYSB0aGluZyB3aGVyZVxuLy8gc29tZSBiaXRzIHBhc3MgdGhyb3VnaCwgYW5kIG90aGVycyBhcmUgc2ltcGx5IGlnbm9yZWQuICAoVGhhdCB3b3VsZFxuLy8gYmUgYSB2YWxpZCBleGFtcGxlIG9mIGEgdHJhbnNmb3JtLCBvZiBjb3Vyc2UuKVxuLy9cbi8vIFdoaWxlIHRoZSBvdXRwdXQgaXMgY2F1c2FsbHkgcmVsYXRlZCB0byB0aGUgaW5wdXQsIGl0J3Mgbm90IGFcbi8vIG5lY2Vzc2FyaWx5IHN5bW1ldHJpYyBvciBzeW5jaHJvbm91cyB0cmFuc2Zvcm1hdGlvbi4gIEZvciBleGFtcGxlLFxuLy8gYSB6bGliIHN0cmVhbSBtaWdodCB0YWtlIG11bHRpcGxlIHBsYWluLXRleHQgd3JpdGVzKCksIGFuZCB0aGVuXG4vLyBlbWl0IGEgc2luZ2xlIGNvbXByZXNzZWQgY2h1bmsgc29tZSB0aW1lIGluIHRoZSBmdXR1cmUuXG4vL1xuLy8gSGVyZSdzIGhvdyB0aGlzIHdvcmtzOlxuLy9cbi8vIFRoZSBUcmFuc2Zvcm0gc3RyZWFtIGhhcyBhbGwgdGhlIGFzcGVjdHMgb2YgdGhlIHJlYWRhYmxlIGFuZCB3cml0YWJsZVxuLy8gc3RyZWFtIGNsYXNzZXMuICBXaGVuIHlvdSB3cml0ZShjaHVuayksIHRoYXQgY2FsbHMgX3dyaXRlKGNodW5rLGNiKVxuLy8gaW50ZXJuYWxseSwgYW5kIHJldHVybnMgZmFsc2UgaWYgdGhlcmUncyBhIGxvdCBvZiBwZW5kaW5nIHdyaXRlc1xuLy8gYnVmZmVyZWQgdXAuICBXaGVuIHlvdSBjYWxsIHJlYWQoKSwgdGhhdCBjYWxscyBfcmVhZChuKSB1bnRpbFxuLy8gdGhlcmUncyBlbm91Z2ggcGVuZGluZyByZWFkYWJsZSBkYXRhIGJ1ZmZlcmVkIHVwLlxuLy9cbi8vIEluIGEgdHJhbnNmb3JtIHN0cmVhbSwgdGhlIHdyaXR0ZW4gZGF0YSBpcyBwbGFjZWQgaW4gYSBidWZmZXIuICBXaGVuXG4vLyBfcmVhZChuKSBpcyBjYWxsZWQsIGl0IHRyYW5zZm9ybXMgdGhlIHF1ZXVlZCB1cCBkYXRhLCBjYWxsaW5nIHRoZVxuLy8gYnVmZmVyZWQgX3dyaXRlIGNiJ3MgYXMgaXQgY29uc3VtZXMgY2h1bmtzLiAgSWYgY29uc3VtaW5nIGEgc2luZ2xlXG4vLyB3cml0dGVuIGNodW5rIHdvdWxkIHJlc3VsdCBpbiBtdWx0aXBsZSBvdXRwdXQgY2h1bmtzLCB0aGVuIHRoZSBmaXJzdFxuLy8gb3V0cHV0dGVkIGJpdCBjYWxscyB0aGUgcmVhZGNiLCBhbmQgc3Vic2VxdWVudCBjaHVua3MganVzdCBnbyBpbnRvXG4vLyB0aGUgcmVhZCBidWZmZXIsIGFuZCB3aWxsIGNhdXNlIGl0IHRvIGVtaXQgJ3JlYWRhYmxlJyBpZiBuZWNlc3NhcnkuXG4vL1xuLy8gVGhpcyB3YXksIGJhY2stcHJlc3N1cmUgaXMgYWN0dWFsbHkgZGV0ZXJtaW5lZCBieSB0aGUgcmVhZGluZyBzaWRlLFxuLy8gc2luY2UgX3JlYWQgaGFzIHRvIGJlIGNhbGxlZCB0byBzdGFydCBwcm9jZXNzaW5nIGEgbmV3IGNodW5rLiAgSG93ZXZlcixcbi8vIGEgcGF0aG9sb2dpY2FsIGluZmxhdGUgdHlwZSBvZiB0cmFuc2Zvcm0gY2FuIGNhdXNlIGV4Y2Vzc2l2ZSBidWZmZXJpbmdcbi8vIGhlcmUuICBGb3IgZXhhbXBsZSwgaW1hZ2luZSBhIHN0cmVhbSB3aGVyZSBldmVyeSBieXRlIG9mIGlucHV0IGlzXG4vLyBpbnRlcnByZXRlZCBhcyBhbiBpbnRlZ2VyIGZyb20gMC0yNTUsIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhhdCBtYW55XG4vLyBieXRlcyBvZiBvdXRwdXQuICBXcml0aW5nIHRoZSA0IGJ5dGVzIHtmZixmZixmZixmZn0gd291bGQgcmVzdWx0IGluXG4vLyAxa2Igb2YgZGF0YSBiZWluZyBvdXRwdXQuICBJbiB0aGlzIGNhc2UsIHlvdSBjb3VsZCB3cml0ZSBhIHZlcnkgc21hbGxcbi8vIGFtb3VudCBvZiBpbnB1dCwgYW5kIGVuZCB1cCB3aXRoIGEgdmVyeSBsYXJnZSBhbW91bnQgb2Ygb3V0cHV0LiAgSW5cbi8vIHN1Y2ggYSBwYXRob2xvZ2ljYWwgaW5mbGF0aW5nIG1lY2hhbmlzbSwgdGhlcmUnZCBiZSBubyB3YXkgdG8gdGVsbFxuLy8gdGhlIHN5c3RlbSB0byBzdG9wIGRvaW5nIHRoZSB0cmFuc2Zvcm0uICBBIHNpbmdsZSA0TUIgd3JpdGUgY291bGRcbi8vIGNhdXNlIHRoZSBzeXN0ZW0gdG8gcnVuIG91dCBvZiBtZW1vcnkuXG4vL1xuLy8gSG93ZXZlciwgZXZlbiBpbiBzdWNoIGEgcGF0aG9sb2dpY2FsIGNhc2UsIG9ubHkgYSBzaW5nbGUgd3JpdHRlbiBjaHVua1xuLy8gd291bGQgYmUgY29uc3VtZWQsIGFuZCB0aGVuIHRoZSByZXN0IHdvdWxkIHdhaXQgKHVuLXRyYW5zZm9ybWVkKSB1bnRpbFxuLy8gdGhlIHJlc3VsdHMgb2YgdGhlIHByZXZpb3VzIHRyYW5zZm9ybWVkIGNodW5rIHdlcmUgY29uc3VtZWQuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2Zvcm07XG5cbnZhciBEdXBsZXggPSByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IE9iamVjdC5jcmVhdGUocmVxdWlyZSgnY29yZS11dGlsLWlzJykpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudXRpbC5pbmhlcml0cyhUcmFuc2Zvcm0sIER1cGxleCk7XG5cbmZ1bmN0aW9uIGFmdGVyVHJhbnNmb3JtKGVyLCBkYXRhKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuICB0cy50cmFuc2Zvcm1pbmcgPSBmYWxzZTtcblxuICB2YXIgY2IgPSB0cy53cml0ZWNiO1xuXG4gIGlmICghY2IpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignd3JpdGUgY2FsbGJhY2sgY2FsbGVkIG11bHRpcGxlIHRpbWVzJykpO1xuICB9XG5cbiAgdHMud3JpdGVjaHVuayA9IG51bGw7XG4gIHRzLndyaXRlY2IgPSBudWxsO1xuXG4gIGlmIChkYXRhICE9IG51bGwpIC8vIHNpbmdsZSBlcXVhbHMgY2hlY2sgZm9yIGJvdGggYG51bGxgIGFuZCBgdW5kZWZpbmVkYFxuICAgIHRoaXMucHVzaChkYXRhKTtcblxuICBjYihlcik7XG5cbiAgdmFyIHJzID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgcnMucmVhZGluZyA9IGZhbHNlO1xuICBpZiAocnMubmVlZFJlYWRhYmxlIHx8IHJzLmxlbmd0aCA8IHJzLmhpZ2hXYXRlck1hcmspIHtcbiAgICB0aGlzLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFuc2Zvcm0pKSByZXR1cm4gbmV3IFRyYW5zZm9ybShvcHRpb25zKTtcblxuICBEdXBsZXguY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICB0aGlzLl90cmFuc2Zvcm1TdGF0ZSA9IHtcbiAgICBhZnRlclRyYW5zZm9ybTogYWZ0ZXJUcmFuc2Zvcm0uYmluZCh0aGlzKSxcbiAgICBuZWVkVHJhbnNmb3JtOiBmYWxzZSxcbiAgICB0cmFuc2Zvcm1pbmc6IGZhbHNlLFxuICAgIHdyaXRlY2I6IG51bGwsXG4gICAgd3JpdGVjaHVuazogbnVsbCxcbiAgICB3cml0ZWVuY29kaW5nOiBudWxsXG4gIH07XG5cbiAgLy8gc3RhcnQgb3V0IGFza2luZyBmb3IgYSByZWFkYWJsZSBldmVudCBvbmNlIGRhdGEgaXMgdHJhbnNmb3JtZWQuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcblxuICAvLyB3ZSBoYXZlIGltcGxlbWVudGVkIHRoZSBfcmVhZCBtZXRob2QsIGFuZCBkb25lIHRoZSBvdGhlciB0aGluZ3NcbiAgLy8gdGhhdCBSZWFkYWJsZSB3YW50cyBiZWZvcmUgdGhlIGZpcnN0IF9yZWFkIGNhbGwsIHNvIHVuc2V0IHRoZVxuICAvLyBzeW5jIGd1YXJkIGZsYWcuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuc3luYyA9IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fdHJhbnNmb3JtID0gb3B0aW9ucy50cmFuc2Zvcm07XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmx1c2ggPT09ICdmdW5jdGlvbicpIHRoaXMuX2ZsdXNoID0gb3B0aW9ucy5mbHVzaDtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHdyaXRhYmxlIHNpZGUgZmluaXNoZXMsIHRoZW4gZmx1c2ggb3V0IGFueXRoaW5nIHJlbWFpbmluZy5cbiAgdGhpcy5vbigncHJlZmluaXNoJywgcHJlZmluaXNoKTtcbn1cblxuZnVuY3Rpb24gcHJlZmluaXNoKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdGhpcy5fZmx1c2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLl9mbHVzaChmdW5jdGlvbiAoZXIsIGRhdGEpIHtcbiAgICAgIGRvbmUoX3RoaXMsIGVyLCBkYXRhKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb25lKHRoaXMsIG51bGwsIG51bGwpO1xuICB9XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcpIHtcbiAgdGhpcy5fdHJhbnNmb3JtU3RhdGUubmVlZFRyYW5zZm9ybSA9IGZhbHNlO1xuICByZXR1cm4gRHVwbGV4LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgY2h1bmssIGVuY29kaW5nKTtcbn07XG5cbi8vIFRoaXMgaXMgdGhlIHBhcnQgd2hlcmUgeW91IGRvIHN0dWZmIVxuLy8gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiBpbiBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gJ2NodW5rJyBpcyBhbiBpbnB1dCBjaHVuay5cbi8vXG4vLyBDYWxsIGBwdXNoKG5ld0NodW5rKWAgdG8gcGFzcyBhbG9uZyB0cmFuc2Zvcm1lZCBvdXRwdXRcbi8vIHRvIHRoZSByZWFkYWJsZSBzaWRlLiAgWW91IG1heSBjYWxsICdwdXNoJyB6ZXJvIG9yIG1vcmUgdGltZXMuXG4vL1xuLy8gQ2FsbCBgY2IoZXJyKWAgd2hlbiB5b3UgYXJlIGRvbmUgd2l0aCB0aGlzIGNodW5rLiAgSWYgeW91IHBhc3Ncbi8vIGFuIGVycm9yLCB0aGVuIHRoYXQnbGwgcHV0IHRoZSBodXJ0IG9uIHRoZSB3aG9sZSBvcGVyYXRpb24uICBJZiB5b3Vcbi8vIG5ldmVyIGNhbGwgY2IoKSwgdGhlbiB5b3UnbGwgbmV2ZXIgZ2V0IGFub3RoZXIgY2h1bmsuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ190cmFuc2Zvcm0oKSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG4gIHRzLndyaXRlY2IgPSBjYjtcbiAgdHMud3JpdGVjaHVuayA9IGNodW5rO1xuICB0cy53cml0ZWVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIGlmICghdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdmFyIHJzID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgICBpZiAodHMubmVlZFRyYW5zZm9ybSB8fCBycy5uZWVkUmVhZGFibGUgfHwgcnMubGVuZ3RoIDwgcnMuaGlnaFdhdGVyTWFyaykgdGhpcy5fcmVhZChycy5oaWdoV2F0ZXJNYXJrKTtcbiAgfVxufTtcblxuLy8gRG9lc24ndCBtYXR0ZXIgd2hhdCB0aGUgYXJncyBhcmUgaGVyZS5cbi8vIF90cmFuc2Zvcm0gZG9lcyBhbGwgdGhlIHdvcmsuXG4vLyBUaGF0IHdlIGdvdCBoZXJlIG1lYW5zIHRoYXQgdGhlIHJlYWRhYmxlIHNpZGUgd2FudHMgbW9yZSBkYXRhLlxuVHJhbnNmb3JtLnByb3RvdHlwZS5fcmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuXG4gIGlmICh0cy53cml0ZWNodW5rICE9PSBudWxsICYmIHRzLndyaXRlY2IgJiYgIXRzLnRyYW5zZm9ybWluZykge1xuICAgIHRzLnRyYW5zZm9ybWluZyA9IHRydWU7XG4gICAgdGhpcy5fdHJhbnNmb3JtKHRzLndyaXRlY2h1bmssIHRzLndyaXRlZW5jb2RpbmcsIHRzLmFmdGVyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBtYXJrIHRoYXQgd2UgbmVlZCBhIHRyYW5zZm9ybSwgc28gdGhhdCBhbnkgZGF0YSB0aGF0IGNvbWVzIGluXG4gICAgLy8gd2lsbCBnZXQgcHJvY2Vzc2VkLCBub3cgdGhhdCB3ZSd2ZSBhc2tlZCBmb3IgaXQuXG4gICAgdHMubmVlZFRyYW5zZm9ybSA9IHRydWU7XG4gIH1cbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICBEdXBsZXgucHJvdG90eXBlLl9kZXN0cm95LmNhbGwodGhpcywgZXJyLCBmdW5jdGlvbiAoZXJyMikge1xuICAgIGNiKGVycjIpO1xuICAgIF90aGlzMi5lbWl0KCdjbG9zZScpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRvbmUoc3RyZWFtLCBlciwgZGF0YSkge1xuICBpZiAoZXIpIHJldHVybiBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG5cbiAgaWYgKGRhdGEgIT0gbnVsbCkgLy8gc2luZ2xlIGVxdWFscyBjaGVjayBmb3IgYm90aCBgbnVsbGAgYW5kIGB1bmRlZmluZWRgXG4gICAgc3RyZWFtLnB1c2goZGF0YSk7XG5cbiAgLy8gaWYgdGhlcmUncyBub3RoaW5nIGluIHRoZSB3cml0ZSBidWZmZXIsIHRoZW4gdGhhdCBtZWFuc1xuICAvLyB0aGF0IG5vdGhpbmcgbW9yZSB3aWxsIGV2ZXIgYmUgcHJvdmlkZWRcbiAgaWYgKHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignQ2FsbGluZyB0cmFuc2Zvcm0gZG9uZSB3aGVuIHdzLmxlbmd0aCAhPSAwJyk7XG5cbiAgaWYgKHN0cmVhbS5fdHJhbnNmb3JtU3RhdGUudHJhbnNmb3JtaW5nKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxpbmcgdHJhbnNmb3JtIGRvbmUgd2hlbiBzdGlsbCB0cmFuc2Zvcm1pbmcnKTtcblxuICByZXR1cm4gc3RyZWFtLnB1c2gobnVsbCk7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIEEgYml0IHNpbXBsZXIgdGhhbiByZWFkYWJsZSBzdHJlYW1zLlxuLy8gSW1wbGVtZW50IGFuIGFzeW5jIC5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYiksIGFuZCBpdCdsbCBoYW5kbGUgYWxsXG4vLyB0aGUgZHJhaW4gZXZlbnQgZW1pc3Npb24gYW5kIGJ1ZmZlcmluZy5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdyaXRhYmxlO1xuXG4vKiA8cmVwbGFjZW1lbnQ+ICovXG5mdW5jdGlvbiBXcml0ZVJlcShjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHRoaXMuY2h1bmsgPSBjaHVuaztcbiAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xuICB0aGlzLmNhbGxiYWNrID0gY2I7XG4gIHRoaXMubmV4dCA9IG51bGw7XG59XG5cbi8vIEl0IHNlZW1zIGEgbGlua2VkIGxpc3QgYnV0IGl0IGlzIG5vdFxuLy8gdGhlcmUgd2lsbCBiZSBvbmx5IDIgb2YgdGhlc2UgZm9yIGVhY2ggc3RyZWFtXG5mdW5jdGlvbiBDb3JrZWRSZXF1ZXN0KHN0YXRlKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgdGhpcy5lbnRyeSA9IG51bGw7XG4gIHRoaXMuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIG9uQ29ya2VkRmluaXNoKF90aGlzLCBzdGF0ZSk7XG4gIH07XG59XG4vKiA8L3JlcGxhY2VtZW50PiAqL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGFzeW5jV3JpdGUgPSAhcHJvY2Vzcy5icm93c2VyICYmIFsndjAuMTAnLCAndjAuOS4nXS5pbmRleE9mKHByb2Nlc3MudmVyc2lvbi5zbGljZSgwLCA1KSkgPiAtMSA/IHNldEltbWVkaWF0ZSA6IHBuYS5uZXh0VGljaztcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5Xcml0YWJsZS5Xcml0YWJsZVN0YXRlID0gV3JpdGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGludGVybmFsVXRpbCA9IHtcbiAgZGVwcmVjYXRlOiByZXF1aXJlKCd1dGlsLWRlcHJlY2F0ZScpXG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL3N0cmVhbScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciBPdXJVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXkgfHwgZnVuY3Rpb24gKCkge307XG5mdW5jdGlvbiBfdWludDhBcnJheVRvQnVmZmVyKGNodW5rKSB7XG4gIHJldHVybiBCdWZmZXIuZnJvbShjaHVuayk7XG59XG5mdW5jdGlvbiBfaXNVaW50OEFycmF5KG9iaikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgb2JqIGluc3RhbmNlb2YgT3VyVWludDhBcnJheTtcbn1cblxuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBkZXN0cm95SW1wbCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9kZXN0cm95Jyk7XG5cbnV0aWwuaW5oZXJpdHMoV3JpdGFibGUsIFN0cmVhbSk7XG5cbmZ1bmN0aW9uIG5vcCgpIHt9XG5cbmZ1bmN0aW9uIFdyaXRhYmxlU3RhdGUob3B0aW9ucywgc3RyZWFtKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gRHVwbGV4IHN0cmVhbXMgYXJlIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLCBidXQgc2hhcmVcbiAgLy8gdGhlIHNhbWUgb3B0aW9ucyBvYmplY3QuXG4gIC8vIEhvd2V2ZXIsIHNvbWUgY2FzZXMgcmVxdWlyZSBzZXR0aW5nIG9wdGlvbnMgdG8gZGlmZmVyZW50XG4gIC8vIHZhbHVlcyBmb3IgdGhlIHJlYWRhYmxlIGFuZCB0aGUgd3JpdGFibGUgc2lkZXMgb2YgdGhlIGR1cGxleCBzdHJlYW0uXG4gIC8vIFRoZXNlIG9wdGlvbnMgY2FuIGJlIHByb3ZpZGVkIHNlcGFyYXRlbHkgYXMgcmVhZGFibGVYWFggYW5kIHdyaXRhYmxlWFhYLlxuICB2YXIgaXNEdXBsZXggPSBzdHJlYW0gaW5zdGFuY2VvZiBEdXBsZXg7XG5cbiAgLy8gb2JqZWN0IHN0cmVhbSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgb3Igbm90IHRoaXMgc3RyZWFtXG4gIC8vIGNvbnRhaW5zIGJ1ZmZlcnMgb3Igb2JqZWN0cy5cbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG5cbiAgaWYgKGlzRHVwbGV4KSB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLm9iamVjdE1vZGUgfHwgISFvcHRpb25zLndyaXRhYmxlT2JqZWN0TW9kZTtcblxuICAvLyB0aGUgcG9pbnQgYXQgd2hpY2ggd3JpdGUoKSBzdGFydHMgcmV0dXJuaW5nIGZhbHNlXG4gIC8vIE5vdGU6IDAgaXMgYSB2YWxpZCB2YWx1ZSwgbWVhbnMgdGhhdCB3ZSBhbHdheXMgcmV0dXJuIGZhbHNlIGlmXG4gIC8vIHRoZSBlbnRpcmUgYnVmZmVyIGlzIG5vdCBmbHVzaGVkIGltbWVkaWF0ZWx5IG9uIHdyaXRlKClcbiAgdmFyIGh3bSA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgdmFyIHdyaXRhYmxlSHdtID0gb3B0aW9ucy53cml0YWJsZUhpZ2hXYXRlck1hcms7XG4gIHZhciBkZWZhdWx0SHdtID0gdGhpcy5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG5cbiAgaWYgKGh3bSB8fCBod20gPT09IDApIHRoaXMuaGlnaFdhdGVyTWFyayA9IGh3bTtlbHNlIGlmIChpc0R1cGxleCAmJiAod3JpdGFibGVId20gfHwgd3JpdGFibGVId20gPT09IDApKSB0aGlzLmhpZ2hXYXRlck1hcmsgPSB3cml0YWJsZUh3bTtlbHNlIHRoaXMuaGlnaFdhdGVyTWFyayA9IGRlZmF1bHRId207XG5cbiAgLy8gY2FzdCB0byBpbnRzLlxuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBNYXRoLmZsb29yKHRoaXMuaGlnaFdhdGVyTWFyayk7XG5cbiAgLy8gaWYgX2ZpbmFsIGhhcyBiZWVuIGNhbGxlZFxuICB0aGlzLmZpbmFsQ2FsbGVkID0gZmFsc2U7XG5cbiAgLy8gZHJhaW4gZXZlbnQgZmxhZy5cbiAgdGhpcy5uZWVkRHJhaW4gPSBmYWxzZTtcbiAgLy8gYXQgdGhlIHN0YXJ0IG9mIGNhbGxpbmcgZW5kKClcbiAgdGhpcy5lbmRpbmcgPSBmYWxzZTtcbiAgLy8gd2hlbiBlbmQoKSBoYXMgYmVlbiBjYWxsZWQsIGFuZCByZXR1cm5lZFxuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIC8vIHdoZW4gJ2ZpbmlzaCcgaXMgZW1pdHRlZFxuICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG5cbiAgLy8gaGFzIGl0IGJlZW4gZGVzdHJveWVkXG4gIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgLy8gc2hvdWxkIHdlIGRlY29kZSBzdHJpbmdzIGludG8gYnVmZmVycyBiZWZvcmUgcGFzc2luZyB0byBfd3JpdGU/XG4gIC8vIHRoaXMgaXMgaGVyZSBzbyB0aGF0IHNvbWUgbm9kZS1jb3JlIHN0cmVhbXMgY2FuIG9wdGltaXplIHN0cmluZ1xuICAvLyBoYW5kbGluZyBhdCBhIGxvd2VyIGxldmVsLlxuICB2YXIgbm9EZWNvZGUgPSBvcHRpb25zLmRlY29kZVN0cmluZ3MgPT09IGZhbHNlO1xuICB0aGlzLmRlY29kZVN0cmluZ3MgPSAhbm9EZWNvZGU7XG5cbiAgLy8gQ3J5cHRvIGlzIGtpbmQgb2Ygb2xkIGFuZCBjcnVzdHkuICBIaXN0b3JpY2FsbHksIGl0cyBkZWZhdWx0IHN0cmluZ1xuICAvLyBlbmNvZGluZyBpcyAnYmluYXJ5JyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhpcyBjb25maWd1cmFibGUuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgdW5pdmVyc2UgdXNlcyAndXRmOCcsIHRob3VnaC5cbiAgdGhpcy5kZWZhdWx0RW5jb2RpbmcgPSBvcHRpb25zLmRlZmF1bHRFbmNvZGluZyB8fCAndXRmOCc7XG5cbiAgLy8gbm90IGFuIGFjdHVhbCBidWZmZXIgd2Uga2VlcCB0cmFjayBvZiwgYnV0IGEgbWVhc3VyZW1lbnRcbiAgLy8gb2YgaG93IG11Y2ggd2UncmUgd2FpdGluZyB0byBnZXQgcHVzaGVkIHRvIHNvbWUgdW5kZXJseWluZ1xuICAvLyBzb2NrZXQgb3IgZmlsZS5cbiAgdGhpcy5sZW5ndGggPSAwO1xuXG4gIC8vIGEgZmxhZyB0byBzZWUgd2hlbiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgd3JpdGUuXG4gIHRoaXMud3JpdGluZyA9IGZhbHNlO1xuXG4gIC8vIHdoZW4gdHJ1ZSBhbGwgd3JpdGVzIHdpbGwgYmUgYnVmZmVyZWQgdW50aWwgLnVuY29yaygpIGNhbGxcbiAgdGhpcy5jb3JrZWQgPSAwO1xuXG4gIC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIG9ud3JpdGUgY2IgaXMgY2FsbGVkIGltbWVkaWF0ZWx5LFxuICAvLyBvciBvbiBhIGxhdGVyIHRpY2suICBXZSBzZXQgdGhpcyB0byB0cnVlIGF0IGZpcnN0LCBiZWNhdXNlIGFueVxuICAvLyBhY3Rpb25zIHRoYXQgc2hvdWxkbid0IGhhcHBlbiB1bnRpbCBcImxhdGVyXCIgc2hvdWxkIGdlbmVyYWxseSBhbHNvXG4gIC8vIG5vdCBoYXBwZW4gYmVmb3JlIHRoZSBmaXJzdCB3cml0ZSBjYWxsLlxuICB0aGlzLnN5bmMgPSB0cnVlO1xuXG4gIC8vIGEgZmxhZyB0byBrbm93IGlmIHdlJ3JlIHByb2Nlc3NpbmcgcHJldmlvdXNseSBidWZmZXJlZCBpdGVtcywgd2hpY2hcbiAgLy8gbWF5IGNhbGwgdGhlIF93cml0ZSgpIGNhbGxiYWNrIGluIHRoZSBzYW1lIHRpY2ssIHNvIHRoYXQgd2UgZG9uJ3RcbiAgLy8gZW5kIHVwIGluIGFuIG92ZXJsYXBwZWQgb253cml0ZSBzaXR1YXRpb24uXG4gIHRoaXMuYnVmZmVyUHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gIC8vIHRoZSBjYWxsYmFjayB0aGF0J3MgcGFzc2VkIHRvIF93cml0ZShjaHVuayxjYilcbiAgdGhpcy5vbndyaXRlID0gZnVuY3Rpb24gKGVyKSB7XG4gICAgb253cml0ZShzdHJlYW0sIGVyKTtcbiAgfTtcblxuICAvLyB0aGUgY2FsbGJhY2sgdGhhdCB0aGUgdXNlciBzdXBwbGllcyB0byB3cml0ZShjaHVuayxlbmNvZGluZyxjYilcbiAgdGhpcy53cml0ZWNiID0gbnVsbDtcblxuICAvLyB0aGUgYW1vdW50IHRoYXQgaXMgYmVpbmcgd3JpdHRlbiB3aGVuIF93cml0ZSBpcyBjYWxsZWQuXG4gIHRoaXMud3JpdGVsZW4gPSAwO1xuXG4gIHRoaXMuYnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgdGhpcy5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcblxuICAvLyBudW1iZXIgb2YgcGVuZGluZyB1c2VyLXN1cHBsaWVkIHdyaXRlIGNhbGxiYWNrc1xuICAvLyB0aGlzIG11c3QgYmUgMCBiZWZvcmUgJ2ZpbmlzaCcgY2FuIGJlIGVtaXR0ZWRcbiAgdGhpcy5wZW5kaW5nY2IgPSAwO1xuXG4gIC8vIGVtaXQgcHJlZmluaXNoIGlmIHRoZSBvbmx5IHRoaW5nIHdlJ3JlIHdhaXRpbmcgZm9yIGlzIF93cml0ZSBjYnNcbiAgLy8gVGhpcyBpcyByZWxldmFudCBmb3Igc3luY2hyb25vdXMgVHJhbnNmb3JtIHN0cmVhbXNcbiAgdGhpcy5wcmVmaW5pc2hlZCA9IGZhbHNlO1xuXG4gIC8vIFRydWUgaWYgdGhlIGVycm9yIHdhcyBhbHJlYWR5IGVtaXR0ZWQgYW5kIHNob3VsZCBub3QgYmUgdGhyb3duIGFnYWluXG4gIHRoaXMuZXJyb3JFbWl0dGVkID0gZmFsc2U7XG5cbiAgLy8gY291bnQgYnVmZmVyZWQgcmVxdWVzdHNcbiAgdGhpcy5idWZmZXJlZFJlcXVlc3RDb3VudCA9IDA7XG5cbiAgLy8gYWxsb2NhdGUgdGhlIGZpcnN0IENvcmtlZFJlcXVlc3QsIHRoZXJlIGlzIGFsd2F5c1xuICAvLyBvbmUgYWxsb2NhdGVkIGFuZCBmcmVlIHRvIHVzZSwgYW5kIHdlIG1haW50YWluIGF0IG1vc3QgdHdvXG4gIHRoaXMuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3QodGhpcyk7XG59XG5cbldyaXRhYmxlU3RhdGUucHJvdG90eXBlLmdldEJ1ZmZlciA9IGZ1bmN0aW9uIGdldEJ1ZmZlcigpIHtcbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmJ1ZmZlcmVkUmVxdWVzdDtcbiAgdmFyIG91dCA9IFtdO1xuICB3aGlsZSAoY3VycmVudCkge1xuICAgIG91dC5wdXNoKGN1cnJlbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlU3RhdGUucHJvdG90eXBlLCAnYnVmZmVyJywge1xuICAgICAgZ2V0OiBpbnRlcm5hbFV0aWwuZGVwcmVjYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnVmZmVyKCk7XG4gICAgICB9LCAnX3dyaXRhYmxlU3RhdGUuYnVmZmVyIGlzIGRlcHJlY2F0ZWQuIFVzZSBfd3JpdGFibGVTdGF0ZS5nZXRCdWZmZXIgJyArICdpbnN0ZWFkLicsICdERVAwMDAzJylcbiAgICB9KTtcbiAgfSBjYXRjaCAoXykge31cbn0pKCk7XG5cbi8vIFRlc3QgX3dyaXRhYmxlU3RhdGUgZm9yIGluaGVyaXRhbmNlIHRvIGFjY291bnQgZm9yIER1cGxleCBzdHJlYW1zLFxuLy8gd2hvc2UgcHJvdG90eXBlIGNoYWluIG9ubHkgcG9pbnRzIHRvIFJlYWRhYmxlLlxudmFyIHJlYWxIYXNJbnN0YW5jZTtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5oYXNJbnN0YW5jZSAmJiB0eXBlb2YgRnVuY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5oYXNJbnN0YW5jZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgcmVhbEhhc0luc3RhbmNlID0gRnVuY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5oYXNJbnN0YW5jZV07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZSwgU3ltYm9sLmhhc0luc3RhbmNlLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChyZWFsSGFzSW5zdGFuY2UuY2FsbCh0aGlzLCBvYmplY3QpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICh0aGlzICE9PSBXcml0YWJsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gb2JqZWN0ICYmIG9iamVjdC5fd3JpdGFibGVTdGF0ZSBpbnN0YW5jZW9mIFdyaXRhYmxlU3RhdGU7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIHJlYWxIYXNJbnN0YW5jZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgdGhpcztcbiAgfTtcbn1cblxuZnVuY3Rpb24gV3JpdGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIC8vIFdyaXRhYmxlIGN0b3IgaXMgYXBwbGllZCB0byBEdXBsZXhlcywgdG9vLlxuICAvLyBgcmVhbEhhc0luc3RhbmNlYCBpcyBuZWNlc3NhcnkgYmVjYXVzZSB1c2luZyBwbGFpbiBgaW5zdGFuY2VvZmBcbiAgLy8gd291bGQgcmV0dXJuIGZhbHNlLCBhcyBubyBgX3dyaXRhYmxlU3RhdGVgIHByb3BlcnR5IGlzIGF0dGFjaGVkLlxuXG4gIC8vIFRyeWluZyB0byB1c2UgdGhlIGN1c3RvbSBgaW5zdGFuY2VvZmAgZm9yIFdyaXRhYmxlIGhlcmUgd2lsbCBhbHNvIGJyZWFrIHRoZVxuICAvLyBOb2RlLmpzIExhenlUcmFuc2Zvcm0gaW1wbGVtZW50YXRpb24sIHdoaWNoIGhhcyBhIG5vbi10cml2aWFsIGdldHRlciBmb3JcbiAgLy8gYF93cml0YWJsZVN0YXRlYCB0aGF0IHdvdWxkIGxlYWQgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICBpZiAoIXJlYWxIYXNJbnN0YW5jZS5jYWxsKFdyaXRhYmxlLCB0aGlzKSAmJiAhKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSB7XG4gICAgcmV0dXJuIG5ldyBXcml0YWJsZShvcHRpb25zKTtcbiAgfVxuXG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUgPSBuZXcgV3JpdGFibGVTdGF0ZShvcHRpb25zLCB0aGlzKTtcblxuICAvLyBsZWdhY3kuXG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRlID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZSA9IG9wdGlvbnMud3JpdGU7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JpdGV2ID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZXYgPSBvcHRpb25zLndyaXRldjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB0aGlzLl9kZXN0cm95ID0gb3B0aW9ucy5kZXN0cm95O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZpbmFsID09PSAnZnVuY3Rpb24nKSB0aGlzLl9maW5hbCA9IG9wdGlvbnMuZmluYWw7XG4gIH1cblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbn1cblxuLy8gT3RoZXJ3aXNlIHBlb3BsZSBjYW4gcGlwZSBXcml0YWJsZSBzdHJlYW1zLCB3aGljaCBpcyBqdXN0IHdyb25nLlxuV3JpdGFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0Nhbm5vdCBwaXBlLCBub3QgcmVhZGFibGUnKSk7XG59O1xuXG5mdW5jdGlvbiB3cml0ZUFmdGVyRW5kKHN0cmVhbSwgY2IpIHtcbiAgdmFyIGVyID0gbmV3IEVycm9yKCd3cml0ZSBhZnRlciBlbmQnKTtcbiAgLy8gVE9ETzogZGVmZXIgZXJyb3IgZXZlbnRzIGNvbnNpc3RlbnRseSBldmVyeXdoZXJlLCBub3QganVzdCB0aGUgY2JcbiAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICBwbmEubmV4dFRpY2soY2IsIGVyKTtcbn1cblxuLy8gQ2hlY2tzIHRoYXQgYSB1c2VyLXN1cHBsaWVkIGNodW5rIGlzIHZhbGlkLCBlc3BlY2lhbGx5IGZvciB0aGUgcGFydGljdWxhclxuLy8gbW9kZSB0aGUgc3RyZWFtIGlzIGluLiBDdXJyZW50bHkgdGhpcyBtZWFucyB0aGF0IGBudWxsYCBpcyBuZXZlciBhY2NlcHRlZFxuLy8gYW5kIHVuZGVmaW5lZC9ub24tc3RyaW5nIHZhbHVlcyBhcmUgb25seSBhbGxvd2VkIGluIG9iamVjdCBtb2RlLlxuZnVuY3Rpb24gdmFsaWRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgY2IpIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgdmFyIGVyID0gZmFsc2U7XG5cbiAgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdNYXkgbm90IHdyaXRlIG51bGwgdmFsdWVzIHRvIHN0cmVhbScpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIGlmIChlcikge1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICBwbmEubmV4dFRpY2soY2IsIGVyKTtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWxpZDtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHJldCA9IGZhbHNlO1xuICB2YXIgaXNCdWYgPSAhc3RhdGUub2JqZWN0TW9kZSAmJiBfaXNVaW50OEFycmF5KGNodW5rKTtcblxuICBpZiAoaXNCdWYgJiYgIUJ1ZmZlci5pc0J1ZmZlcihjaHVuaykpIHtcbiAgICBjaHVuayA9IF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGlzQnVmKSBlbmNvZGluZyA9ICdidWZmZXInO2Vsc2UgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSBzdGF0ZS5kZWZhdWx0RW5jb2Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgY2IgPSBub3A7XG5cbiAgaWYgKHN0YXRlLmVuZGVkKSB3cml0ZUFmdGVyRW5kKHRoaXMsIGNiKTtlbHNlIGlmIChpc0J1ZiB8fCB2YWxpZENodW5rKHRoaXMsIHN0YXRlLCBjaHVuaywgY2IpKSB7XG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgcmV0ID0gd3JpdGVPckJ1ZmZlcih0aGlzLCBzdGF0ZSwgaXNCdWYsIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIHN0YXRlLmNvcmtlZCsrO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnVuY29yayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkLS07XG5cbiAgICBpZiAoIXN0YXRlLndyaXRpbmcgJiYgIXN0YXRlLmNvcmtlZCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSBjbGVhckJ1ZmZlcih0aGlzLCBzdGF0ZSk7XG4gIH1cbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5zZXREZWZhdWx0RW5jb2RpbmcgPSBmdW5jdGlvbiBzZXREZWZhdWx0RW5jb2RpbmcoZW5jb2RpbmcpIHtcbiAgLy8gbm9kZTo6UGFyc2VFbmNvZGluZygpIHJlcXVpcmVzIGxvd2VyIGNhc2UuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSBlbmNvZGluZyA9IGVuY29kaW5nLnRvTG93ZXJDYXNlKCk7XG4gIGlmICghKFsnaGV4JywgJ3V0ZjgnLCAndXRmLTgnLCAnYXNjaWknLCAnYmluYXJ5JywgJ2Jhc2U2NCcsICd1Y3MyJywgJ3Vjcy0yJywgJ3V0ZjE2bGUnLCAndXRmLTE2bGUnLCAncmF3J10uaW5kZXhPZigoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKSkgPiAtMSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZyk7XG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVmYXVsdEVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZykge1xuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgc3RhdGUuZGVjb2RlU3RyaW5ncyAhPT0gZmFsc2UgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGNodW5rID0gQnVmZmVyLmZyb20oY2h1bmssIGVuY29kaW5nKTtcbiAgfVxuICByZXR1cm4gY2h1bms7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZS5wcm90b3R5cGUsICd3cml0YWJsZUhpZ2hXYXRlck1hcmsnLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl93cml0YWJsZVN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIH1cbn0pO1xuXG4vLyBpZiB3ZSdyZSBhbHJlYWR5IHdyaXRpbmcgc29tZXRoaW5nLCB0aGVuIGp1c3QgcHV0IHRoaXNcbi8vIGluIHRoZSBxdWV1ZSwgYW5kIHdhaXQgb3VyIHR1cm4uICBPdGhlcndpc2UsIGNhbGwgX3dyaXRlXG4vLyBJZiB3ZSByZXR1cm4gZmFsc2UsIHRoZW4gd2UgbmVlZCBhIGRyYWluIGV2ZW50LCBzbyBzZXQgdGhhdCBmbGFnLlxuZnVuY3Rpb24gd3JpdGVPckJ1ZmZlcihzdHJlYW0sIHN0YXRlLCBpc0J1ZiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBpZiAoIWlzQnVmKSB7XG4gICAgdmFyIG5ld0NodW5rID0gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZyk7XG4gICAgaWYgKGNodW5rICE9PSBuZXdDaHVuaykge1xuICAgICAgaXNCdWYgPSB0cnVlO1xuICAgICAgZW5jb2RpbmcgPSAnYnVmZmVyJztcbiAgICAgIGNodW5rID0gbmV3Q2h1bms7XG4gICAgfVxuICB9XG4gIHZhciBsZW4gPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcblxuICBzdGF0ZS5sZW5ndGggKz0gbGVuO1xuXG4gIHZhciByZXQgPSBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICAvLyB3ZSBtdXN0IGVuc3VyZSB0aGF0IHByZXZpb3VzIG5lZWREcmFpbiB3aWxsIG5vdCBiZSByZXNldCB0byBmYWxzZS5cbiAgaWYgKCFyZXQpIHN0YXRlLm5lZWREcmFpbiA9IHRydWU7XG5cbiAgaWYgKHN0YXRlLndyaXRpbmcgfHwgc3RhdGUuY29ya2VkKSB7XG4gICAgdmFyIGxhc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSB7XG4gICAgICBjaHVuazogY2h1bmssXG4gICAgICBlbmNvZGluZzogZW5jb2RpbmcsXG4gICAgICBpc0J1ZjogaXNCdWYsXG4gICAgICBjYWxsYmFjazogY2IsXG4gICAgICBuZXh0OiBudWxsXG4gICAgfTtcbiAgICBpZiAobGFzdCkge1xuICAgICAgbGFzdC5uZXh0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9XG4gICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB3cml0ZXYsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBzdGF0ZS53cml0ZWxlbiA9IGxlbjtcbiAgc3RhdGUud3JpdGVjYiA9IGNiO1xuICBzdGF0ZS53cml0aW5nID0gdHJ1ZTtcbiAgc3RhdGUuc3luYyA9IHRydWU7XG4gIGlmICh3cml0ZXYpIHN0cmVhbS5fd3JpdGV2KGNodW5rLCBzdGF0ZS5vbndyaXRlKTtlbHNlIHN0cmVhbS5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBzdGF0ZS5vbndyaXRlKTtcbiAgc3RhdGUuc3luYyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKSB7XG4gIC0tc3RhdGUucGVuZGluZ2NiO1xuXG4gIGlmIChzeW5jKSB7XG4gICAgLy8gZGVmZXIgdGhlIGNhbGxiYWNrIGlmIHdlIGFyZSBiZWluZyBjYWxsZWQgc3luY2hyb25vdXNseVxuICAgIC8vIHRvIGF2b2lkIHBpbGluZyB1cCB0aGluZ3Mgb24gdGhlIHN0YWNrXG4gICAgcG5hLm5leHRUaWNrKGNiLCBlcik7XG4gICAgLy8gdGhpcyBjYW4gZW1pdCBmaW5pc2gsIGFuZCBpdCB3aWxsIGFsd2F5cyBoYXBwZW5cbiAgICAvLyBhZnRlciBlcnJvclxuICAgIHBuYS5uZXh0VGljayhmaW5pc2hNYXliZSwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBjYWxsZXIgZXhwZWN0IHRoaXMgdG8gaGFwcGVuIGJlZm9yZSBpZlxuICAgIC8vIGl0IGlzIGFzeW5jXG4gICAgY2IoZXIpO1xuICAgIHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICAvLyB0aGlzIGNhbiBlbWl0IGZpbmlzaCwgYnV0IGZpbmlzaCBtdXN0XG4gICAgLy8gYWx3YXlzIGZvbGxvdyBlcnJvclxuICAgIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGVTdGF0ZVVwZGF0ZShzdGF0ZSkge1xuICBzdGF0ZS53cml0aW5nID0gZmFsc2U7XG4gIHN0YXRlLndyaXRlY2IgPSBudWxsO1xuICBzdGF0ZS5sZW5ndGggLT0gc3RhdGUud3JpdGVsZW47XG4gIHN0YXRlLndyaXRlbGVuID0gMDtcbn1cblxuZnVuY3Rpb24gb253cml0ZShzdHJlYW0sIGVyKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHN5bmMgPSBzdGF0ZS5zeW5jO1xuICB2YXIgY2IgPSBzdGF0ZS53cml0ZWNiO1xuXG4gIG9ud3JpdGVTdGF0ZVVwZGF0ZShzdGF0ZSk7XG5cbiAgaWYgKGVyKSBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKTtlbHNlIHtcbiAgICAvLyBDaGVjayBpZiB3ZSdyZSBhY3R1YWxseSByZWFkeSB0byBmaW5pc2gsIGJ1dCBkb24ndCBlbWl0IHlldFxuICAgIHZhciBmaW5pc2hlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuXG4gICAgaWYgKCFmaW5pc2hlZCAmJiAhc3RhdGUuY29ya2VkICYmICFzdGF0ZS5idWZmZXJQcm9jZXNzaW5nICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCkge1xuICAgICAgY2xlYXJCdWZmZXIoc3RyZWFtLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIC8qPHJlcGxhY2VtZW50PiovXG4gICAgICBhc3luY1dyaXRlKGFmdGVyV3JpdGUsIHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgICAvKjwvcmVwbGFjZW1lbnQ+Ki9cbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJXcml0ZShzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZnRlcldyaXRlKHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYikge1xuICBpZiAoIWZpbmlzaGVkKSBvbndyaXRlRHJhaW4oc3RyZWFtLCBzdGF0ZSk7XG4gIHN0YXRlLnBlbmRpbmdjYi0tO1xuICBjYigpO1xuICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbn1cblxuLy8gTXVzdCBmb3JjZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgb24gbmV4dFRpY2ssIHNvIHRoYXQgd2UgZG9uJ3Rcbi8vIGVtaXQgJ2RyYWluJyBiZWZvcmUgdGhlIHdyaXRlKCkgY29uc3VtZXIgZ2V0cyB0aGUgJ2ZhbHNlJyByZXR1cm5cbi8vIHZhbHVlLCBhbmQgaGFzIGEgY2hhbmNlIHRvIGF0dGFjaCBhICdkcmFpbicgbGlzdGVuZXIuXG5mdW5jdGlvbiBvbndyaXRlRHJhaW4oc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLm5lZWREcmFpbikge1xuICAgIHN0YXRlLm5lZWREcmFpbiA9IGZhbHNlO1xuICAgIHN0cmVhbS5lbWl0KCdkcmFpbicpO1xuICB9XG59XG5cbi8vIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHRoZSBidWZmZXIgd2FpdGluZywgdGhlbiBwcm9jZXNzIGl0XG5mdW5jdGlvbiBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKSB7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSB0cnVlO1xuICB2YXIgZW50cnkgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3Q7XG5cbiAgaWYgKHN0cmVhbS5fd3JpdGV2ICYmIGVudHJ5ICYmIGVudHJ5Lm5leHQpIHtcbiAgICAvLyBGYXN0IGNhc2UsIHdyaXRlIGV2ZXJ5dGhpbmcgdXNpbmcgX3dyaXRldigpXG4gICAgdmFyIGwgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudDtcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5KGwpO1xuICAgIHZhciBob2xkZXIgPSBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWU7XG4gICAgaG9sZGVyLmVudHJ5ID0gZW50cnk7XG5cbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBhbGxCdWZmZXJzID0gdHJ1ZTtcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIGJ1ZmZlcltjb3VudF0gPSBlbnRyeTtcbiAgICAgIGlmICghZW50cnkuaXNCdWYpIGFsbEJ1ZmZlcnMgPSBmYWxzZTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuICAgIGJ1ZmZlci5hbGxCdWZmZXJzID0gYWxsQnVmZmVycztcblxuICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgdHJ1ZSwgc3RhdGUubGVuZ3RoLCBidWZmZXIsICcnLCBob2xkZXIuZmluaXNoKTtcblxuICAgIC8vIGRvV3JpdGUgaXMgYWxtb3N0IGFsd2F5cyBhc3luYywgZGVmZXIgdGhlc2UgdG8gc2F2ZSBhIGJpdCBvZiB0aW1lXG4gICAgLy8gYXMgdGhlIGhvdCBwYXRoIGVuZHMgd2l0aCBkb1dyaXRlXG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gICAgaWYgKGhvbGRlci5uZXh0KSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBob2xkZXIubmV4dDtcbiAgICAgIGhvbGRlci5uZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3Qoc3RhdGUpO1xuICAgIH1cbiAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gU2xvdyBjYXNlLCB3cml0ZSBjaHVua3Mgb25lLWJ5LW9uZVxuICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgdmFyIGNodW5rID0gZW50cnkuY2h1bms7XG4gICAgICB2YXIgZW5jb2RpbmcgPSBlbnRyeS5lbmNvZGluZztcbiAgICAgIHZhciBjYiA9IGVudHJ5LmNhbGxiYWNrO1xuICAgICAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXG4gICAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQtLTtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBjYWxsIHRoZSBvbndyaXRlIGltbWVkaWF0ZWx5LCB0aGVuXG4gICAgICAvLyBpdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gd2FpdCB1bnRpbCBpdCBkb2VzLlxuICAgICAgLy8gYWxzbywgdGhhdCBtZWFucyB0aGF0IHRoZSBjaHVuayBhbmQgY2IgYXJlIGN1cnJlbnRseVxuICAgICAgLy8gYmVpbmcgcHJvY2Vzc2VkLCBzbyBtb3ZlIHRoZSBidWZmZXIgY291bnRlciBwYXN0IHRoZW0uXG4gICAgICBpZiAoc3RhdGUud3JpdGluZykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW50cnkgPT09IG51bGwpIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB9XG5cbiAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gZW50cnk7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSBmYWxzZTtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGNiKG5ldyBFcnJvcignX3dyaXRlKCkgaXMgbm90IGltcGxlbWVudGVkJykpO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZXYgPSBudWxsO1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAodHlwZW9mIGNodW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBjaHVuaztcbiAgICBjaHVuayA9IG51bGw7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGNodW5rICE9PSBudWxsICYmIGNodW5rICE9PSB1bmRlZmluZWQpIHRoaXMud3JpdGUoY2h1bmssIGVuY29kaW5nKTtcblxuICAvLyAuZW5kKCkgZnVsbHkgdW5jb3Jrc1xuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkID0gMTtcbiAgICB0aGlzLnVuY29yaygpO1xuICB9XG5cbiAgLy8gaWdub3JlIHVubmVjZXNzYXJ5IGVuZCgpIGNhbGxzLlxuICBpZiAoIXN0YXRlLmVuZGluZyAmJiAhc3RhdGUuZmluaXNoZWQpIGVuZFdyaXRhYmxlKHRoaXMsIHN0YXRlLCBjYik7XG59O1xuXG5mdW5jdGlvbiBuZWVkRmluaXNoKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5lbmRpbmcgJiYgc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9PT0gbnVsbCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLndyaXRpbmc7XG59XG5mdW5jdGlvbiBjYWxsRmluYWwoc3RyZWFtLCBzdGF0ZSkge1xuICBzdHJlYW0uX2ZpbmFsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgIH1cbiAgICBzdGF0ZS5wcmVmaW5pc2hlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ3ByZWZpbmlzaCcpO1xuICAgIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucHJlZmluaXNoZWQgJiYgIXN0YXRlLmZpbmFsQ2FsbGVkKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJlYW0uX2ZpbmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICAgIHN0YXRlLmZpbmFsQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHBuYS5uZXh0VGljayhjYWxsRmluYWwsIHN0cmVhbSwgc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wcmVmaW5pc2hlZCA9IHRydWU7XG4gICAgICBzdHJlYW0uZW1pdCgncHJlZmluaXNoJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpIHtcbiAgdmFyIG5lZWQgPSBuZWVkRmluaXNoKHN0YXRlKTtcbiAgaWYgKG5lZWQpIHtcbiAgICBwcmVmaW5pc2goc3RyZWFtLCBzdGF0ZSk7XG4gICAgaWYgKHN0YXRlLnBlbmRpbmdjYiA9PT0gMCkge1xuICAgICAgc3RhdGUuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLmVtaXQoJ2ZpbmlzaCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmVlZDtcbn1cblxuZnVuY3Rpb24gZW5kV3JpdGFibGUoc3RyZWFtLCBzdGF0ZSwgY2IpIHtcbiAgc3RhdGUuZW5kaW5nID0gdHJ1ZTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIGlmIChjYikge1xuICAgIGlmIChzdGF0ZS5maW5pc2hlZCkgcG5hLm5leHRUaWNrKGNiKTtlbHNlIHN0cmVhbS5vbmNlKCdmaW5pc2gnLCBjYik7XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICBzdHJlYW0ud3JpdGFibGUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb25Db3JrZWRGaW5pc2goY29ya1JlcSwgc3RhdGUsIGVycikge1xuICB2YXIgZW50cnkgPSBjb3JrUmVxLmVudHJ5O1xuICBjb3JrUmVxLmVudHJ5ID0gbnVsbDtcbiAgd2hpbGUgKGVudHJ5KSB7XG4gICAgdmFyIGNiID0gZW50cnkuY2FsbGJhY2s7XG4gICAgc3RhdGUucGVuZGluZ2NiLS07XG4gICAgY2IoZXJyKTtcbiAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gIH1cbiAgaWYgKHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSkge1xuICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZS5uZXh0ID0gY29ya1JlcTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBjb3JrUmVxO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZS5wcm90b3R5cGUsICdkZXN0cm95ZWQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl93cml0YWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHdlIGlnbm9yZSB0aGUgdmFsdWUgaWYgdGhlIHN0cmVhbVxuICAgIC8vIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCB5ZXRcbiAgICBpZiAoIXRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0aGUgdXNlciBpcyBleHBsaWNpdGx5XG4gICAgLy8gbWFuYWdpbmcgZGVzdHJveWVkXG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgfVxufSk7XG5cbldyaXRhYmxlLnByb3RvdHlwZS5kZXN0cm95ID0gZGVzdHJveUltcGwuZGVzdHJveTtcbldyaXRhYmxlLnByb3RvdHlwZS5fdW5kZXN0cm95ID0gZGVzdHJveUltcGwudW5kZXN0cm95O1xuV3JpdGFibGUucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgdGhpcy5lbmQoKTtcbiAgY2IoZXJyKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuZnVuY3Rpb24gY29weUJ1ZmZlcihzcmMsIHRhcmdldCwgb2Zmc2V0KSB7XG4gIHNyYy5jb3B5KHRhcmdldCwgb2Zmc2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJ1ZmZlckxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1ZmZlckxpc3QpO1xuXG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoKHYpIHtcbiAgICB2YXIgZW50cnkgPSB7IGRhdGE6IHYsIG5leHQ6IG51bGwgfTtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB0aGlzLnRhaWwubmV4dCA9IGVudHJ5O2Vsc2UgdGhpcy5oZWFkID0gZW50cnk7XG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgKyt0aGlzLmxlbmd0aDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gdW5zaGlmdCh2KSB7XG4gICAgdmFyIGVudHJ5ID0geyBkYXRhOiB2LCBuZXh0OiB0aGlzLmhlYWQgfTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHRoaXMudGFpbCA9IGVudHJ5O1xuICAgIHRoaXMuaGVhZCA9IGVudHJ5O1xuICAgICsrdGhpcy5sZW5ndGg7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICB2YXIgcmV0ID0gdGhpcy5oZWFkLmRhdGE7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO2Vsc2UgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgLS10aGlzLmxlbmd0aDtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uIGpvaW4ocykge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICAgIHZhciBwID0gdGhpcy5oZWFkO1xuICAgIHZhciByZXQgPSAnJyArIHAuZGF0YTtcbiAgICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgICAgcmV0ICs9IHMgKyBwLmRhdGE7XG4gICAgfXJldHVybiByZXQ7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KG4pIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiBCdWZmZXIuYWxsb2MoMCk7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XG4gICAgdmFyIHJldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuID4+PiAwKTtcbiAgICB2YXIgcCA9IHRoaXMuaGVhZDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKHApIHtcbiAgICAgIGNvcHlCdWZmZXIocC5kYXRhLCByZXQsIGkpO1xuICAgICAgaSArPSBwLmRhdGEubGVuZ3RoO1xuICAgICAgcCA9IHAubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICByZXR1cm4gQnVmZmVyTGlzdDtcbn0oKTtcblxuaWYgKHV0aWwgJiYgdXRpbC5pbnNwZWN0ICYmIHV0aWwuaW5zcGVjdC5jdXN0b20pIHtcbiAgbW9kdWxlLmV4cG9ydHMucHJvdG90eXBlW3V0aWwuaW5zcGVjdC5jdXN0b21dID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYmogPSB1dGlsLmluc3BlY3QoeyBsZW5ndGg6IHRoaXMubGVuZ3RoIH0pO1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyAnICcgKyBvYmo7XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vLyB1bmRvY3VtZW50ZWQgY2IoKSBBUEksIG5lZWRlZCBmb3IgY29yZSwgbm90IGZvciBwdWJsaWMgQVBJXG5mdW5jdGlvbiBkZXN0cm95KGVyciwgY2IpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgcmVhZGFibGVEZXN0cm95ZWQgPSB0aGlzLl9yZWFkYWJsZVN0YXRlICYmIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB2YXIgd3JpdGFibGVEZXN0cm95ZWQgPSB0aGlzLl93cml0YWJsZVN0YXRlICYmIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkO1xuXG4gIGlmIChyZWFkYWJsZURlc3Ryb3llZCB8fCB3cml0YWJsZURlc3Ryb3llZCkge1xuICAgIGlmIChjYikge1xuICAgICAgY2IoZXJyKTtcbiAgICB9IGVsc2UgaWYgKGVyciAmJiAoIXRoaXMuX3dyaXRhYmxlU3RhdGUgfHwgIXRoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkKSkge1xuICAgICAgcG5hLm5leHRUaWNrKGVtaXRFcnJvck5ULCB0aGlzLCBlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHdlIHNldCBkZXN0cm95ZWQgdG8gdHJ1ZSBiZWZvcmUgZmlyaW5nIGVycm9yIGNhbGxiYWNrcyBpbiBvcmRlclxuICAvLyB0byBtYWtlIGl0IHJlLWVudHJhbmNlIHNhZmUgaW4gY2FzZSBkZXN0cm95KCkgaXMgY2FsbGVkIHdpdGhpbiBjYWxsYmFja3NcblxuICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIHRoaXMgaXMgYSBkdXBsZXggc3RyZWFtIG1hcmsgdGhlIHdyaXRhYmxlIHBhcnQgYXMgZGVzdHJveWVkIGFzIHdlbGxcbiAgaWYgKHRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICB0aGlzLl9kZXN0cm95KGVyciB8fCBudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKCFjYiAmJiBlcnIpIHtcbiAgICAgIHBuYS5uZXh0VGljayhlbWl0RXJyb3JOVCwgX3RoaXMsIGVycik7XG4gICAgICBpZiAoX3RoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICAgICAgX3RoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNiKSB7XG4gICAgICBjYihlcnIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHVuZGVzdHJveSgpIHtcbiAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLl93cml0YWJsZVN0YXRlKSB7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmVuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0RXJyb3JOVChzZWxmLCBlcnIpIHtcbiAgc2VsZi5lbWl0KCdlcnJvcicsIGVycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZXN0cm95OiBkZXN0cm95LFxuICB1bmRlc3Ryb3k6IHVuZGVzdHJveVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcmVhZGFibGUuanMnKTtcbmV4cG9ydHMuU3RyZWFtID0gZXhwb3J0cztcbmV4cG9ydHMuUmVhZGFibGUgPSBleHBvcnRzO1xuZXhwb3J0cy5Xcml0YWJsZSA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fd3JpdGFibGUuanMnKTtcbmV4cG9ydHMuRHVwbGV4ID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9kdXBsZXguanMnKTtcbmV4cG9ydHMuVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanMnKTtcbmV4cG9ydHMuUGFzc1Rocm91Z2ggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3Bhc3N0aHJvdWdoLmpzJyk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIGlzRW5jb2RpbmcgPSBCdWZmZXIuaXNFbmNvZGluZyB8fCBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgZW5jb2RpbmcgPSAnJyArIGVuY29kaW5nO1xuICBzd2l0Y2ggKGVuY29kaW5nICYmIGVuY29kaW5nLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOmNhc2UgJ3V0ZjgnOmNhc2UgJ3V0Zi04JzpjYXNlICdhc2NpaSc6Y2FzZSAnYmluYXJ5JzpjYXNlICdiYXNlNjQnOmNhc2UgJ3VjczInOmNhc2UgJ3Vjcy0yJzpjYXNlICd1dGYxNmxlJzpjYXNlICd1dGYtMTZsZSc6Y2FzZSAncmF3JzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9ub3JtYWxpemVFbmNvZGluZyhlbmMpIHtcbiAgaWYgKCFlbmMpIHJldHVybiAndXRmOCc7XG4gIHZhciByZXRyaWVkO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jKSB7XG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuICd1dGY4JztcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiAndXRmMTZsZSc7XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuICdsYXRpbjEnO1xuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBlbmM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAocmV0cmllZCkgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgICAgICAgZW5jID0gKCcnICsgZW5jKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXRyaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIERvIG5vdCBjYWNoZSBgQnVmZmVyLmlzRW5jb2RpbmdgIHdoZW4gY2hlY2tpbmcgZW5jb2RpbmcgbmFtZXMgYXMgc29tZVxuLy8gbW9kdWxlcyBtb25rZXktcGF0Y2ggaXQgdG8gc3VwcG9ydCBhZGRpdGlvbmFsIGVuY29kaW5nc1xuZnVuY3Rpb24gbm9ybWFsaXplRW5jb2RpbmcoZW5jKSB7XG4gIHZhciBuZW5jID0gX25vcm1hbGl6ZUVuY29kaW5nKGVuYyk7XG4gIGlmICh0eXBlb2YgbmVuYyAhPT0gJ3N0cmluZycgJiYgKEJ1ZmZlci5pc0VuY29kaW5nID09PSBpc0VuY29kaW5nIHx8ICFpc0VuY29kaW5nKGVuYykpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmMpO1xuICByZXR1cm4gbmVuYyB8fCBlbmM7XG59XG5cbi8vIFN0cmluZ0RlY29kZXIgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBlZmZpY2llbnRseSBzcGxpdHRpbmcgYSBzZXJpZXMgb2Zcbi8vIGJ1ZmZlcnMgaW50byBhIHNlcmllcyBvZiBKUyBzdHJpbmdzIHdpdGhvdXQgYnJlYWtpbmcgYXBhcnQgbXVsdGktYnl0ZVxuLy8gY2hhcmFjdGVycy5cbmV4cG9ydHMuU3RyaW5nRGVjb2RlciA9IFN0cmluZ0RlY29kZXI7XG5mdW5jdGlvbiBTdHJpbmdEZWNvZGVyKGVuY29kaW5nKSB7XG4gIHRoaXMuZW5jb2RpbmcgPSBub3JtYWxpemVFbmNvZGluZyhlbmNvZGluZyk7XG4gIHZhciBuYjtcbiAgc3dpdGNoICh0aGlzLmVuY29kaW5nKSB7XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICB0aGlzLnRleHQgPSB1dGYxNlRleHQ7XG4gICAgICB0aGlzLmVuZCA9IHV0ZjE2RW5kO1xuICAgICAgbmIgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndXRmOCc6XG4gICAgICB0aGlzLmZpbGxMYXN0ID0gdXRmOEZpbGxMYXN0O1xuICAgICAgbmIgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHRoaXMudGV4dCA9IGJhc2U2NFRleHQ7XG4gICAgICB0aGlzLmVuZCA9IGJhc2U2NEVuZDtcbiAgICAgIG5iID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzLndyaXRlID0gc2ltcGxlV3JpdGU7XG4gICAgICB0aGlzLmVuZCA9IHNpbXBsZUVuZDtcbiAgICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmxhc3ROZWVkID0gMDtcbiAgdGhpcy5sYXN0VG90YWwgPSAwO1xuICB0aGlzLmxhc3RDaGFyID0gQnVmZmVyLmFsbG9jVW5zYWZlKG5iKTtcbn1cblxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gIHZhciByO1xuICB2YXIgaTtcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHtcbiAgICByID0gdGhpcy5maWxsTGFzdChidWYpO1xuICAgIGlmIChyID09PSB1bmRlZmluZWQpIHJldHVybiAnJztcbiAgICBpID0gdGhpcy5sYXN0TmVlZDtcbiAgICB0aGlzLmxhc3ROZWVkID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgfVxuICBpZiAoaSA8IGJ1Zi5sZW5ndGgpIHJldHVybiByID8gciArIHRoaXMudGV4dChidWYsIGkpIDogdGhpcy50ZXh0KGJ1ZiwgaSk7XG4gIHJldHVybiByIHx8ICcnO1xufTtcblxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZW5kID0gdXRmOEVuZDtcblxuLy8gUmV0dXJucyBvbmx5IGNvbXBsZXRlIGNoYXJhY3RlcnMgaW4gYSBCdWZmZXJcblN0cmluZ0RlY29kZXIucHJvdG90eXBlLnRleHQgPSB1dGY4VGV4dDtcblxuLy8gQXR0ZW1wdHMgdG8gY29tcGxldGUgYSBwYXJ0aWFsIG5vbi1VVEYtOCBjaGFyYWN0ZXIgdXNpbmcgYnl0ZXMgZnJvbSBhIEJ1ZmZlclxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZmlsbExhc3QgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIGlmICh0aGlzLmxhc3ROZWVkIDw9IGJ1Zi5sZW5ndGgpIHtcbiAgICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQsIDAsIHRoaXMubGFzdE5lZWQpO1xuICAgIHJldHVybiB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIDAsIHRoaXMubGFzdFRvdGFsKTtcbiAgfVxuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQsIDAsIGJ1Zi5sZW5ndGgpO1xuICB0aGlzLmxhc3ROZWVkIC09IGJ1Zi5sZW5ndGg7XG59O1xuXG4vLyBDaGVja3MgdGhlIHR5cGUgb2YgYSBVVEYtOCBieXRlLCB3aGV0aGVyIGl0J3MgQVNDSUksIGEgbGVhZGluZyBieXRlLCBvciBhXG4vLyBjb250aW51YXRpb24gYnl0ZS4gSWYgYW4gaW52YWxpZCBieXRlIGlzIGRldGVjdGVkLCAtMiBpcyByZXR1cm5lZC5cbmZ1bmN0aW9uIHV0ZjhDaGVja0J5dGUoYnl0ZSkge1xuICBpZiAoYnl0ZSA8PSAweDdGKSByZXR1cm4gMDtlbHNlIGlmIChieXRlID4+IDUgPT09IDB4MDYpIHJldHVybiAyO2Vsc2UgaWYgKGJ5dGUgPj4gNCA9PT0gMHgwRSkgcmV0dXJuIDM7ZWxzZSBpZiAoYnl0ZSA+PiAzID09PSAweDFFKSByZXR1cm4gNDtcbiAgcmV0dXJuIGJ5dGUgPj4gNiA9PT0gMHgwMiA/IC0xIDogLTI7XG59XG5cbi8vIENoZWNrcyBhdCBtb3N0IDMgYnl0ZXMgYXQgdGhlIGVuZCBvZiBhIEJ1ZmZlciBpbiBvcmRlciB0byBkZXRlY3QgYW5cbi8vIGluY29tcGxldGUgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIuIFRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgKDIsIDMsIG9yIDQpXG4vLyBuZWVkZWQgdG8gY29tcGxldGUgdGhlIFVURi04IGNoYXJhY3RlciAoaWYgYXBwbGljYWJsZSkgYXJlIHJldHVybmVkLlxuZnVuY3Rpb24gdXRmOENoZWNrSW5jb21wbGV0ZShzZWxmLCBidWYsIGkpIHtcbiAgdmFyIGogPSBidWYubGVuZ3RoIC0gMTtcbiAgaWYgKGogPCBpKSByZXR1cm4gMDtcbiAgdmFyIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHNlbGYubGFzdE5lZWQgPSBuYiAtIDE7XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIGlmICgtLWogPCBpIHx8IG5iID09PSAtMikgcmV0dXJuIDA7XG4gIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHNlbGYubGFzdE5lZWQgPSBuYiAtIDI7XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIGlmICgtLWogPCBpIHx8IG5iID09PSAtMikgcmV0dXJuIDA7XG4gIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHtcbiAgICAgIGlmIChuYiA9PT0gMikgbmIgPSAwO2Vsc2Ugc2VsZi5sYXN0TmVlZCA9IG5iIC0gMztcbiAgICB9XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG4vLyBWYWxpZGF0ZXMgYXMgbWFueSBjb250aW51YXRpb24gYnl0ZXMgZm9yIGEgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIgYXNcbi8vIG5lZWRlZCBvciBhcmUgYXZhaWxhYmxlLiBJZiB3ZSBzZWUgYSBub24tY29udGludWF0aW9uIGJ5dGUgd2hlcmUgd2UgZXhwZWN0XG4vLyBvbmUsIHdlIFwicmVwbGFjZVwiIHRoZSB2YWxpZGF0ZWQgY29udGludWF0aW9uIGJ5dGVzIHdlJ3ZlIHNlZW4gc28gZmFyIHdpdGhcbi8vIGEgc2luZ2xlIFVURi04IHJlcGxhY2VtZW50IGNoYXJhY3RlciAoJ1xcdWZmZmQnKSwgdG8gbWF0Y2ggdjgncyBVVEYtOCBkZWNvZGluZ1xuLy8gYmVoYXZpb3IuIFRoZSBjb250aW51YXRpb24gYnl0ZSBjaGVjayBpcyBpbmNsdWRlZCB0aHJlZSB0aW1lcyBpbiB0aGUgY2FzZVxuLy8gd2hlcmUgYWxsIG9mIHRoZSBjb250aW51YXRpb24gYnl0ZXMgZm9yIGEgY2hhcmFjdGVyIGV4aXN0IGluIHRoZSBzYW1lIGJ1ZmZlci5cbi8vIEl0IGlzIGFsc28gZG9uZSB0aGlzIHdheSBhcyBhIHNsaWdodCBwZXJmb3JtYW5jZSBpbmNyZWFzZSBpbnN0ZWFkIG9mIHVzaW5nIGFcbi8vIGxvb3AuXG5mdW5jdGlvbiB1dGY4Q2hlY2tFeHRyYUJ5dGVzKHNlbGYsIGJ1ZiwgcCkge1xuICBpZiAoKGJ1ZlswXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgc2VsZi5sYXN0TmVlZCA9IDA7XG4gICAgcmV0dXJuICdcXHVmZmZkJztcbiAgfVxuICBpZiAoc2VsZi5sYXN0TmVlZCA+IDEgJiYgYnVmLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoKGJ1ZlsxXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgICBzZWxmLmxhc3ROZWVkID0gMTtcbiAgICAgIHJldHVybiAnXFx1ZmZmZCc7XG4gICAgfVxuICAgIGlmIChzZWxmLmxhc3ROZWVkID4gMiAmJiBidWYubGVuZ3RoID4gMikge1xuICAgICAgaWYgKChidWZbMl0gJiAweEMwKSAhPT0gMHg4MCkge1xuICAgICAgICBzZWxmLmxhc3ROZWVkID0gMjtcbiAgICAgICAgcmV0dXJuICdcXHVmZmZkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQXR0ZW1wdHMgdG8gY29tcGxldGUgYSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3RlciB1c2luZyBieXRlcyBmcm9tIGEgQnVmZmVyLlxuZnVuY3Rpb24gdXRmOEZpbGxMYXN0KGJ1Zikge1xuICB2YXIgcCA9IHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZDtcbiAgdmFyIHIgPSB1dGY4Q2hlY2tFeHRyYUJ5dGVzKHRoaXMsIGJ1ZiwgcCk7XG4gIGlmIChyICE9PSB1bmRlZmluZWQpIHJldHVybiByO1xuICBpZiAodGhpcy5sYXN0TmVlZCA8PSBidWYubGVuZ3RoKSB7XG4gICAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgcCwgMCwgdGhpcy5sYXN0TmVlZCk7XG4gICAgcmV0dXJuIHRoaXMubGFzdENoYXIudG9TdHJpbmcodGhpcy5lbmNvZGluZywgMCwgdGhpcy5sYXN0VG90YWwpO1xuICB9XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHAsIDAsIGJ1Zi5sZW5ndGgpO1xuICB0aGlzLmxhc3ROZWVkIC09IGJ1Zi5sZW5ndGg7XG59XG5cbi8vIFJldHVybnMgYWxsIGNvbXBsZXRlIFVURi04IGNoYXJhY3RlcnMgaW4gYSBCdWZmZXIuIElmIHRoZSBCdWZmZXIgZW5kZWQgb24gYVxuLy8gcGFydGlhbCBjaGFyYWN0ZXIsIHRoZSBjaGFyYWN0ZXIncyBieXRlcyBhcmUgYnVmZmVyZWQgdW50aWwgdGhlIHJlcXVpcmVkXG4vLyBudW1iZXIgb2YgYnl0ZXMgYXJlIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIHV0ZjhUZXh0KGJ1ZiwgaSkge1xuICB2YXIgdG90YWwgPSB1dGY4Q2hlY2tJbmNvbXBsZXRlKHRoaXMsIGJ1ZiwgaSk7XG4gIGlmICghdGhpcy5sYXN0TmVlZCkgcmV0dXJuIGJ1Zi50b1N0cmluZygndXRmOCcsIGkpO1xuICB0aGlzLmxhc3RUb3RhbCA9IHRvdGFsO1xuICB2YXIgZW5kID0gYnVmLmxlbmd0aCAtICh0b3RhbCAtIHRoaXMubGFzdE5lZWQpO1xuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCAwLCBlbmQpO1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGY4JywgaSwgZW5kKTtcbn1cblxuLy8gRm9yIFVURi04LCBhIHJlcGxhY2VtZW50IGNoYXJhY3RlciBpcyBhZGRlZCB3aGVuIGVuZGluZyBvbiBhIHBhcnRpYWxcbi8vIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHV0ZjhFbmQoYnVmKSB7XG4gIHZhciByID0gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHJldHVybiByICsgJ1xcdWZmZmQnO1xuICByZXR1cm4gcjtcbn1cblxuLy8gVVRGLTE2TEUgdHlwaWNhbGx5IG5lZWRzIHR3byBieXRlcyBwZXIgY2hhcmFjdGVyLCBidXQgZXZlbiBpZiB3ZSBoYXZlIGFuIGV2ZW5cbi8vIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgd2UgZW5kIG9uIGEgbGVhZGluZy9oaWdoXG4vLyBzdXJyb2dhdGUuIEluIHRoYXQgY2FzZSwgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgbmV4dCB0d28gYnl0ZXMgaW4gb3JkZXIgdG9cbi8vIGRlY29kZSB0aGUgbGFzdCBjaGFyYWN0ZXIgcHJvcGVybHkuXG5mdW5jdGlvbiB1dGYxNlRleHQoYnVmLCBpKSB7XG4gIGlmICgoYnVmLmxlbmd0aCAtIGkpICUgMiA9PT0gMCkge1xuICAgIHZhciByID0gYnVmLnRvU3RyaW5nKCd1dGYxNmxlJywgaSk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHZhciBjID0gci5jaGFyQ29kZUF0KHIubGVuZ3RoIC0gMSk7XG4gICAgICBpZiAoYyA+PSAweEQ4MDAgJiYgYyA8PSAweERCRkYpIHtcbiAgICAgICAgdGhpcy5sYXN0TmVlZCA9IDI7XG4gICAgICAgIHRoaXMubGFzdFRvdGFsID0gNDtcbiAgICAgICAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMl07XG4gICAgICAgIHRoaXMubGFzdENoYXJbMV0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gci5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIHRoaXMubGFzdE5lZWQgPSAxO1xuICB0aGlzLmxhc3RUb3RhbCA9IDI7XG4gIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGYxNmxlJywgaSwgYnVmLmxlbmd0aCAtIDEpO1xufVxuXG4vLyBGb3IgVVRGLTE2TEUgd2UgZG8gbm90IGV4cGxpY2l0bHkgYXBwZW5kIHNwZWNpYWwgcmVwbGFjZW1lbnQgY2hhcmFjdGVycyBpZiB3ZVxuLy8gZW5kIG9uIGEgcGFydGlhbCBjaGFyYWN0ZXIsIHdlIHNpbXBseSBsZXQgdjggaGFuZGxlIHRoYXQuXG5mdW5jdGlvbiB1dGYxNkVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkge1xuICAgIHZhciBlbmQgPSB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQ7XG4gICAgcmV0dXJuIHIgKyB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKCd1dGYxNmxlJywgMCwgZW5kKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gYmFzZTY0VGV4dChidWYsIGkpIHtcbiAgdmFyIG4gPSAoYnVmLmxlbmd0aCAtIGkpICUgMztcbiAgaWYgKG4gPT09IDApIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcsIGkpO1xuICB0aGlzLmxhc3ROZWVkID0gMyAtIG47XG4gIHRoaXMubGFzdFRvdGFsID0gMztcbiAgaWYgKG4gPT09IDEpIHtcbiAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAyXTtcbiAgICB0aGlzLmxhc3RDaGFyWzFdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgfVxuICByZXR1cm4gYnVmLnRvU3RyaW5nKCdiYXNlNjQnLCBpLCBidWYubGVuZ3RoIC0gbik7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NEVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkgcmV0dXJuIHIgKyB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKCdiYXNlNjQnLCAwLCAzIC0gdGhpcy5sYXN0TmVlZCk7XG4gIHJldHVybiByO1xufVxuXG4vLyBQYXNzIGJ5dGVzIG9uIHRocm91Z2ggZm9yIHNpbmdsZS1ieXRlIGVuY29kaW5ncyAoZS5nLiBhc2NpaSwgbGF0aW4xLCBoZXgpXG5mdW5jdGlvbiBzaW1wbGVXcml0ZShidWYpIHtcbiAgcmV0dXJuIGJ1Zi50b1N0cmluZyh0aGlzLmVuY29kaW5nKTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlRW5kKGJ1Zikge1xuICByZXR1cm4gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbn0iLCJ2YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtJykuVHJhbnNmb3JtXG4gICwgaW5oZXJpdHMgID0gcmVxdWlyZSgndXRpbCcpLmluaGVyaXRzXG4gICwgeHRlbmQgICAgID0gcmVxdWlyZSgneHRlbmQnKVxuXG5mdW5jdGlvbiBEZXN0cm95YWJsZVRyYW5zZm9ybShvcHRzKSB7XG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMsIG9wdHMpXG4gIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlXG59XG5cbmluaGVyaXRzKERlc3Ryb3lhYmxlVHJhbnNmb3JtLCBUcmFuc2Zvcm0pXG5cbkRlc3Ryb3lhYmxlVHJhbnNmb3JtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZXJyKSB7XG4gIGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVyblxuICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlXG4gIFxuICB2YXIgc2VsZiA9IHRoaXNcbiAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAoZXJyKVxuICAgICAgc2VsZi5lbWl0KCdlcnJvcicsIGVycilcbiAgICBzZWxmLmVtaXQoJ2Nsb3NlJylcbiAgfSlcbn1cblxuLy8gYSBub29wIF90cmFuc2Zvcm0gZnVuY3Rpb25cbmZ1bmN0aW9uIG5vb3AgKGNodW5rLCBlbmMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKG51bGwsIGNodW5rKVxufVxuXG5cbi8vIGNyZWF0ZSBhIG5ldyBleHBvcnQgZnVuY3Rpb24sIHVzZWQgYnkgYm90aCB0aGUgbWFpbiBleHBvcnQgYW5kXG4vLyB0aGUgLmN0b3IgZXhwb3J0LCBjb250YWlucyBjb21tb24gbG9naWMgZm9yIGRlYWxpbmcgd2l0aCBhcmd1bWVudHNcbmZ1bmN0aW9uIHRocm91Z2gyIChjb25zdHJ1Y3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZsdXNoICAgICA9IHRyYW5zZm9ybVxuICAgICAgdHJhbnNmb3JtID0gb3B0aW9uc1xuICAgICAgb3B0aW9ucyAgID0ge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRyYW5zZm9ybSAhPSAnZnVuY3Rpb24nKVxuICAgICAgdHJhbnNmb3JtID0gbm9vcFxuXG4gICAgaWYgKHR5cGVvZiBmbHVzaCAhPSAnZnVuY3Rpb24nKVxuICAgICAgZmx1c2ggPSBudWxsXG5cbiAgICByZXR1cm4gY29uc3RydWN0KG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpXG4gIH1cbn1cblxuXG4vLyBtYWluIGV4cG9ydCwganVzdCBtYWtlIG1lIGEgdHJhbnNmb3JtIHN0cmVhbSFcbm1vZHVsZS5leHBvcnRzID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgdmFyIHQyID0gbmV3IERlc3Ryb3lhYmxlVHJhbnNmb3JtKG9wdGlvbnMpXG5cbiAgdDIuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXG4gIGlmIChmbHVzaClcbiAgICB0Mi5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiB0MlxufSlcblxuXG4vLyBtYWtlIG1lIGEgcmV1c2FibGUgcHJvdG90eXBlIHRoYXQgSSBjYW4gYG5ld2AsIG9yIGltcGxpY2l0bHkgYG5ld2Bcbi8vIHdpdGggYSBjb25zdHJ1Y3RvciBjYWxsXG5tb2R1bGUuZXhwb3J0cy5jdG9yID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgZnVuY3Rpb24gVGhyb3VnaDIgKG92ZXJyaWRlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRocm91Z2gyKSlcbiAgICAgIHJldHVybiBuZXcgVGhyb3VnaDIob3ZlcnJpZGUpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSB4dGVuZChvcHRpb25zLCBvdmVycmlkZSlcblxuICAgIERlc3Ryb3lhYmxlVHJhbnNmb3JtLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgaW5oZXJpdHMoVGhyb3VnaDIsIERlc3Ryb3lhYmxlVHJhbnNmb3JtKVxuXG4gIFRocm91Z2gyLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIFRocm91Z2gyLnByb3RvdHlwZS5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiBUaHJvdWdoMlxufSlcblxuXG5tb2R1bGUuZXhwb3J0cy5vYmogPSB0aHJvdWdoMihmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICB2YXIgdDIgPSBuZXcgRGVzdHJveWFibGVUcmFuc2Zvcm0oeHRlbmQoeyBvYmplY3RNb2RlOiB0cnVlLCBoaWdoV2F0ZXJNYXJrOiAxNiB9LCBvcHRpb25zKSlcblxuICB0Mi5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIHQyLl9mbHVzaCA9IGZsdXNoXG5cbiAgcmV0dXJuIHQyXG59KVxuIiwiLy8gUmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgd3JhcHBlZCBjYWxsYmFja1xuLy8gVGhlIHdyYXBwZXIgZnVuY3Rpb24gc2hvdWxkIGRvIHNvbWUgc3R1ZmYsIGFuZCByZXR1cm4gYVxuLy8gcHJlc3VtYWJseSBkaWZmZXJlbnQgY2FsbGJhY2sgZnVuY3Rpb24uXG4vLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBvd24gcHJvcGVydGllcyBhcmUgcmV0YWluZWQsIHNvIHRoYXRcbi8vIGRlY29yYXRpb25zIGFuZCBzdWNoIGFyZSBub3QgbG9zdCBhbG9uZyB0aGUgd2F5LlxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcHlcbmZ1bmN0aW9uIHdyYXBweSAoZm4sIGNiKSB7XG4gIGlmIChmbiAmJiBjYikgcmV0dXJuIHdyYXBweShmbikoY2IpXG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduZWVkIHdyYXBwZXIgZnVuY3Rpb24nKVxuXG4gIE9iamVjdC5rZXlzKGZuKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgd3JhcHBlcltrXSA9IGZuW2tdXG4gIH0pXG5cbiAgcmV0dXJuIHdyYXBwZXJcblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIHZhciByZXQgPSBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICAgIHZhciBjYiA9IGFyZ3NbYXJncy5sZW5ndGgtMV1cbiAgICBpZiAodHlwZW9mIHJldCA9PT0gJ2Z1bmN0aW9uJyAmJiByZXQgIT09IGNiKSB7XG4gICAgICBPYmplY3Qua2V5cyhjYikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXRba10gPSBjYltrXVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG4iLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgICAgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHksXG4gICAgICAkU3ltYm9sID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICAgIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLFxuICAgICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvci5faW52b2tlID0gZnVuY3Rpb24gKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuXG4gICAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnO1xuICAgICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcblxuICAgICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG4gICAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBcImNvbXBsZXRlZFwiIDogXCJzdXNwZW5kZWRZaWVsZFwiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KGlubmVyRm4sIHNlbGYsIGNvbnRleHQpLCBnZW5lcmF0b3I7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cblxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG5cbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkgOiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICB0aGlzLl9pbnZva2UgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSB7XG4gICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkpIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgcmV0dXJuIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcsIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSwgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLFxuICAgICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmluYWxseUVudHJ5ICYmIChcImJyZWFrXCIgPT09IHR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0eXBlKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MgJiYgKGZpbmFsbHlFbnRyeSA9IG51bGwpO1xuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkNvbXBvc2VkU3RvcmUiLCJPYnNlcnZhYmxlU3RvcmVfMSIsIk9ic2VydmFibGVTdG9yZSIsImNvbnN0cnVjdG9yIiwiY2hpbGRyZW4iLCJzdXBlciIsInRoaXMiLCJfY2hpbGRyZW4iLCJrZXlzIiwiZm9yRWFjaCIsImNoaWxkS2V5IiwiY2hpbGQiLCJfYWRkQ2hpbGQiLCJ1cGRhdGVGcm9tQ2hpbGQiLCJjaGlsZFZhbHVlIiwic3RhdGUiLCJnZXRTdGF0ZSIsInB1dFN0YXRlIiwic3Vic2NyaWJlIiwiTWVyZ2VkU3RvcmUiLCJfdXBkYXRlV2hvbGVTdGF0ZSIsImNoaWxkU3RhdGVzIiwibWFwIiwiYXNzaWduIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsInNhZmVfZXZlbnRfZW1pdHRlcl8xIiwiZGVmYXVsdCIsImluaXRTdGF0ZSIsIl9zdGF0ZSIsIl9nZXRTdGF0ZSIsIm5ld1N0YXRlIiwiX3B1dFN0YXRlIiwiZW1pdCIsInVwZGF0ZVN0YXRlIiwicGFydGlhbFN0YXRlIiwiaGFuZGxlciIsIm9uIiwidW5zdWJzY3JpYmUiLCJyZW1vdmVMaXN0ZW5lciIsInN0b3JlQXNTdHJlYW0iLCJzdHJlYW1fMSIsIk9ic2VydmFibGVTdG9yZVN0cmVhbSIsIkR1cGxleCIsIm9ic1N0b3JlIiwib2JqZWN0TW9kZSIsInJlc3VtZSIsInB1c2giLCJwaXBlIiwiZGVzdCIsIm9wdGlvbnMiLCJyZXN1bHQiLCJ3cml0ZSIsIl93cml0ZSIsImNodW5rIiwiX2VuY29kaW5nIiwiY2FsbGJhY2siLCJfcmVhZCIsIl9zaXplIiwiX2Rlc3Ryb3kiLCJlcnIiLCJfX2NyZWF0ZUJpbmRpbmciLCJjcmVhdGUiLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImVudW1lcmFibGUiLCJnZXQiLCJfX2V4cG9ydFN0YXIiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic3RvcmVUcmFuc2Zvcm1TdHJlYW0iLCJ0aHJvdWdoMl8xIiwic3luY1RyYW5zZm9ybUZuIiwib2JqIiwiY2IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJzb3VyY2UiLCJleGNsdWRlZCIsInRhcmdldCIsInNvdXJjZUtleXMiLCJrZXkiLCJpIiwibGVuZ3RoIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiRVRIRVJFVU1fTkVUV09SSyIsIlJPUFNURU4iLCJNQUlOTkVUIiwiUE9MWUdPTiIsImFiaSIsImlucHV0cyIsImludGVybmFsVHlwZSIsIm5hbWUiLCJ0eXBlIiwib3V0cHV0cyIsInN0YXRlTXV0YWJpbGl0eSIsIk5vZGVEZXRhaWxNYW5hZ2VyIiwibmV0d29yayIsInByb3h5QWRkcmVzcyIsImFyZ3VtZW50cyIsInVybCIsIlgiLCJZIiwiVVJMIiwiaHJlZiIsIl8iLCJwcm9qZWN0SWQiLCJjb25jYXQiLCJub2RlTGlzdENvbnRyYWN0Iiwibm9kZUxpc3RBZGRyZXNzIiwidXBkYXRlZCIsIl9uZXR3b3JrIiwiX25vZGVEZXRhaWxzIiwiY3VycmVudEVwb2NoIiwiX2N1cnJlbnRFcG9jaCIsInRvcnVzTm9kZUVuZHBvaW50cyIsIl90b3J1c05vZGVFbmRwb2ludHMiLCJ0b3J1c05vZGVQdWIiLCJfdG9ydXNOb2RlUHViIiwidG9ydXNJbmRleGVzIiwiX3RvcnVzSW5kZXhlcyIsImFzeW5jIiwiX3JlZiIsInNraXAiLCJ2ZXJpZmllciIsInZlcmlmaWVySWQiLCJoYXNoZWRWZXJpZmllcklkIiwia2VjY2FrMjU2Iiwibm9kZURldGFpbHMiLCJtZXRob2RzIiwiZ2V0Tm9kZVNldCIsInRvcnVzTm9kZVB1YlgiLCJ0b3J1c05vZGVQdWJZIiwieCIsIk51bWJlciIsInVwZGF0ZWRFbmRwb2ludHMiLCJ1cGRhdGVkTm9kZVB1YiIsImluZGV4IiwiZW5kUG9pbnRFbGVtZW50IiwicHViS3giLCJwdWJLeSIsImVuZHBvaW50Iiwic3BsaXQiLCJ0b0hleCIsInJlcGxhY2UiLCJlcnJvciIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImxvZyIsInNldExldmVsIiwibGV2ZWxzIiwiYXBpS2V5IiwiZW1iZWRIb3N0Iiwic2V0RW1iZWRIb3N0IiwiZW1iZWRIb3N0XyIsInNldEFQSUtleSIsImFwaUtleV8iLCJnZXRBcGlLZXlIZWFkZXJzIiwiaGVhZGVycyIsImRlYnVnTG9nUmVzcG9uc2UiLCJyZXNwb25zZSIsImluZm8iLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicHJvbWlzZVRpbWVvdXQiLCJtcyIsInByb21pc2UiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJFcnJvciIsInJhY2UiLCJvcHRpb25zXyIsImN1c3RvbU9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsIm1vZGUiLCJ1c2VBUElLZXkiLCJtZXRob2QiLCJmZXRjaCIsIm9rIiwianNvbiIsInBvc3QiLCJkYXRhIiwiaXNVcmxFbmNvZGVkRGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImdlbmVyYXRlSnNvblJQQ09iamVjdCIsInBhcmFtZXRlcnMiLCJqc29ucnBjIiwicGFyYW1zIiwibm9vcCIsIkFDSyIsIkJhc2VQb3N0TWVzc2FnZVN0cmVhbSIsInRhcmdldFdpbmRvdyIsIndpbmRvdyIsInRhcmdldE9yaWdpbiIsIl9pbml0IiwiX2hhdmVTeW4iLCJfbmFtZSIsIl90YXJnZXQiLCJfdGFyZ2V0V2luZG93IiwiX3RhcmdldE9yaWdpbiIsIl9vbk1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJiaW5kIiwiX3N5bkludGVydmFsSWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRTaGFrZSIsIl9icmVhayIsImNvcmsiLCJfb25EYXRhIiwidW5jb3JrIiwiX3Bvc3RNZXNzYWdlIiwib3JpZ2luQ29uc3RyYWludCIsInBvc3RNZXNzYWdlIiwiZXZlbnQiLCJtZXNzYWdlIiwib3JpZ2luIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNhZmVBcHBseSIsImNvbnRleHQiLCJhcmdzIiwiUmVmbGVjdCIsIlNhZmVFdmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJkb0Vycm9yIiwiZXZlbnRzIiwiX2V2ZW50cyIsIl9sZW4iLCJBcnJheSIsIl9rZXkiLCJlciIsImxlbiIsImxpc3RlbmVycyIsImFyciIsIm4iLCJjb3B5IiwiYXJyYXlDbG9uZSIsIlNlcmlhbGl6YWJsZUVycm9yIiwiY29kZSIsImlzSW50ZWdlciIsInRvU3RyaW5nIiwic3RhY2siLCJjcmVhdGVTdHJlYW1NaWRkbGV3YXJlIiwiaWRNYXAiLCJzdHJlYW0iLCJyZWFkIiwicmVzIiwicHJvY2Vzc05vdGlmaWNhdGlvbiIsImVuZCIsInByb2Nlc3NSZXNwb25zZSIsIl9lcnIiLCJtaWRkbGV3YXJlIiwicmVxIiwibmV4dCIsImNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlIiwiX2VuZCIsIm9yaWdpbmFsSWQiLCJuZXdJZCIsInJhbmRvbUlkIiwiZG9uZSIsIm93bktleXMkMSIsIkpSUENFbmdpbmUiLCJfbWlkZGxld2FyZSIsInN0YXRpYyIsIm1pZGRsZXdhcmVTdGFjayIsInJldHVybkhhbmRsZXJzIiwiaXNDb21wbGV0ZSIsIl9ydW5NaWRkbGV3YXJlIiwicmV2ZXJzZSIsInNlcmlhbGl6ZUVycm9yIiwicmV0dXJuSGFuZGxlciIsImhhbmRsZXJzIiwiaGFuZGxlIiwiaXNBcnJheSIsIl9oYW5kbGVCYXRjaCIsIl9oYW5kbGUiLCJfcHJvbWlzZUhhbmRsZSIsImFzTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVFcnJvciIsIl9ydW5BbGxNaWRkbGV3YXJlIiwiX3J1blJldHVybkhhbmRsZXJzIiwiaGFuZGxlckNhbGxiYWNrIiwicmVxcyIsInJlc3BvbnNlcyIsImFsbCIsImNhbGxlclJlcSIsIl9vYmplY3RTcHJlYWQkMSIsIl9wcm9jZXNzUmVxdWVzdCIsIl9lcnJvciIsIl9jaGVja0ZvckNvbXBsZXRpb24iLCJTdWJzdHJlYW0iLCJwYXJlbnQiLCJfcGFyZW50IiwiSUdOT1JFX1NVQlNUUkVBTSIsIlN5bWJvbCIsIk9iamVjdE11bHRpcGxleCIsIl9zdWJzdHJlYW1zIiwiY3JlYXRlU3RyZWFtIiwic3Vic3RyZWFtIiwiX2NiIiwicmVhZGFibGUiLCJhbnlTdHJlYW1FbmQiLCJkZXN0cm95IiwiaWdub3JlU3RyZWFtIiwiY29uc29sZSIsIndhcm4iLCJfdHlwZW9mIiwiaXRlcmF0b3IiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsImFyZyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiX3NldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiZSIsIl9jb25zdHJ1Y3QiLCJQYXJlbnQiLCJDbGFzcyIsImEiLCJGdW5jdGlvbiIsIl93cmFwTmF0aXZlU3VwZXIiLCJfY2FjaGUiLCJNYXAiLCJoYXMiLCJzZXQiLCJXcmFwcGVyIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaXRlciIsImZyb20iLCJtaW5MZW4iLCJzbGljZSIsInRlc3QiLCJfY3JlYXRlU3VwZXIkMSIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxIiwiU3VwZXIiLCJOZXdUYXJnZXQiLCJkaXNhYmxlQWxsIiwiU29tZUVycm9yIiwiX0Vycm9yIiwiX3N1cGVyIiwiX3RoaXMiLCJlcnJvcnMiLCJwcmVkaWNhdGUiLCJTb21lIiwicHJvbWlzZXMiLCJmaW5pc2hlZENvdW50Iiwic2hhcmVkU3RhdGUiLCJyZXNvbHZlZCIsImVycm9yQXJyIiwiZmlsbCIsInJlc3VsdEFyciIsInByZWRpY2F0ZUVycm9yIiwicmVzcCIsImNhdGNoIiwiZmluYWxseSIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsInoiLCJfZXJyb3IkZGF0YSIsInN0YXJ0c1dpdGgiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsIm1zZyIsIml0Iiwiam9pbiIsIl9wcmVkaWNhdGVFcnJvciIsIl9jcmVhdGVTdXBlciIsIkdldE9yU2V0Tm9uY2VFcnJvciIsImtDb21iaW5hdGlvbnMiLCJzIiwiY3VyIiwiY29tYnMiLCJ0YWlsQ29tYnMiLCJqIiwidGhyZXNob2xkU2FtZSIsInQiLCJoYXNoTWFwIiwia2V5TG9va3VwIiwiX2NhbGxlZSIsImVuZHBvaW50cyIsImxvb2t1cFByb21pc2VzIiwiX2NvbnRleHQiLCJwcmV2IiwidmVyaWZpZXJfaWQiLCJhYnJ1cHQiLCJsb29rdXBSZXN1bHRzIiwibG9va3VwU2hhcmVzIiwieDEiLCJlcnJvclJlc3VsdCIsIngyIiwia2V5UmVzdWx0IiwieDMiLCJzdG9wIiwiX3giLCJfeDIiLCJfeDMiLCJ3YWl0S2V5TG9va3VwIiwia2V5QXNzaWduIiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9yZWYyIiwidG9ydXNOb2RlUHVicyIsImxhc3RQb2ludCIsImZpcnN0UG9pbnQiLCJzaWduZXJIb3N0Iiwibm9kZU51bSIsImluaXRpYWxQb2ludCIsInNpZ25lZERhdGEiLCJfY29udGV4dDIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdWJLZXlYIiwicHViS2V5WSIsInNlbnQiLCJ0MCIsImluY2x1ZGVzIiwiX3g0IiwiaGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsIlRvcnVzIiwiX3JlZiRlbmFibGVPbmVLZXkiLCJlbmFibGVPbmVLZXkiLCJfcmVmJG1ldGFkYXRhSG9zdCIsIm1ldGFkYXRhSG9zdCIsIl9yZWYkYWxsb3dIb3N0IiwiYWxsb3dIb3N0IiwiX3JlZiRzaWduZXJIb3N0IiwiX3JlZiRzZXJ2ZXJUaW1lT2Zmc2V0Iiwic2VydmVyVGltZU9mZnNldCIsIl9yZWYkbmV0d29yayIsImVjIiwiX2dldFVzZXJUeXBlQW5kQWRkcmVzcyIsImRvZXNLZXlBc3NpZ24iLCJpc05ld0tleSIsImZpbmFsS2V5UmVzdWx0IiwiYXNzaWduUmVzdWx0IiwiX2ZpbmFsS2V5UmVzdWx0JGtleXMkIiwibm9uY2VSZXN1bHQiLCJub25jZSIsIm1vZGlmaWVkUHViS2V5IiwiZmluYWxYIiwiZmluYWxZIiwiYWRkcmVzcyIsIl9hcmdzIiwicHViX2tleV9YIiwicHViX2tleV9ZIiwiZ2V0T3JTZXROb25jZSIsInQxIiwidHlwZU9mVXNlciIsImtleUZyb21QdWJsaWMiLCJ5IiwiZ2V0UHVibGljIiwiYWRkIiwia2V5RnJvbVByaXZhdGUiLCJwdWJOb25jZSIsImdldFgiLCJnZXRZIiwiZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleSIsInVwZ3JhZGVkIiwiX3NldEN1c3RvbUtleSIsIl9yZWY0IiwicHJpdktleUhleCIsIm1ldGFkYXRhTm9uY2UiLCJ0b3J1c0tleUhleCIsImN1c3RvbUtleUhleCIsInRvcnVzS2V5IiwicHJpdktleSIsImN1c3RvbUtleSIsIm5ld01ldGFkYXRhTm9uY2UiLCJzdWIiLCJ1bW9kIiwiY3VydmUiLCJnZW5lcmF0ZU1ldGFkYXRhUGFyYW1zIiwic2V0TWV0YWRhdGEiLCJfcmV0cmlldmVTaGFyZXMiLCJfY2FsbGVlNSIsImluZGV4ZXMiLCJ2ZXJpZmllclBhcmFtcyIsImlkVG9rZW4iLCJleHRyYVBhcmFtcyIsInByb21pc2VBcnIiLCJ0bXBLZXkiLCJwdWJLZXkiLCJ0b2tlbkNvbW1pdG1lbnQiLCJfYXJnczUiLCJfY29udGV4dDUiLCJtZXNzYWdlcHJlZml4IiwidG9rZW5jb21taXRtZW50IiwidGVtcHB1YngiLCJ0ZW1wcHVieSIsInZlcmlmaWVyaWRlbnRpZmllciIsInByb21pc2VBcnJSZXF1ZXN0Iiwibm9kZVNpZ3MiLCJfaSIsIl9pMiIsIl9wIiwiZW5jcnlwdGVkIiwiaXRlbSIsImlkdG9rZW4iLCJub2Rlc2lnbmF0dXJlcyIsIl9yZWY1IiwiX2NhbGxlZTMiLCJzaGFyZVJlc3BvbnNlcyIsImNvbXBsZXRlZFJlcXVlc3RzIiwidGhyZXNob2xkUHVibGljS2V5Iiwic2hhcmVQcm9taXNlcyIsIm5vZGVJbmRleGVzIiwiX2kzIiwiX2N1cnJlbnRTaGFyZVJlc3BvbnNlIiwiX2N1cnJlbnRTaGFyZVJlc3BvbnNlMiIsImN1cnJlbnRTaGFyZVJlc3BvbnNlIiwiZmlyc3RLZXkiLCJtZXRhZGF0YSIsInNoYXJlc1Jlc29sdmVkIiwiZGVjcnlwdGVkU2hhcmVzIiwiYWxsQ29tYmlzIiwicHJpdmF0ZUtleSIsIl9sb29wIiwiX3JldCIsIl9jb250ZXh0MyIsIlB1YmxpY0tleSIsInNvcnQiLCJiIiwiSW5kZXgiLCJjbXAiLCJNZXRhZGF0YSIsImVwaGVtUHVibGljS2V5IiwiaXYiLCJtYWMiLCJjaXBoZXJ0ZXh0IiwiU2hhcmUiLCJwYWRTdGFydCIsImRlYnVnIiwiY3VyciIsImN1cnJlbnRDb21iaSIsImN1cnJlbnRDb21iaVNoYXJlcyIsInYiLCJzaGFyZXMiLCJpbmRpY2VzIiwiZGVyaXZlZFByaXZhdGVLZXkiLCJsYWdyYW5nZUludGVycG9sYXRpb24iLCJkZWNyeXB0ZWRQdWJLZXkiLCJkZWNyeXB0ZWRQdWJLZXlYIiwiZGVjcnlwdGVkUHViS2V5WSIsIl94MTAiLCJfeDExIiwiX3JlZjYiLCJfY2FsbGVlNCIsInJldHVybmVkS2V5IiwiX3lpZWxkJF90aGlzJGdldE5vbmNlIiwiZXRoQWRkcmVzcyIsIl9jb250ZXh0NCIsImdldE5vbmNlIiwiZ2V0TWV0YWRhdGEiLCJnZW5lcmF0ZUFkZHJlc3NGcm9tUHJpdktleSIsIl94MTIiLCJfeDUiLCJfeDYiLCJfeDciLCJfeDgiLCJfeDkiLCJfZ2V0TWV0YWRhdGEiLCJfY2FsbGVlNiIsIm1ldGFkYXRhUmVzcG9uc2UiLCJfYXJnczYiLCJfY29udGV4dDYiLCJfeDEzIiwic2V0RGF0YSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaWciLCJzaWduIiwic2V0X2RhdGEiLCJzaWduYXR1cmUiLCJyIiwiX3NldE1ldGFkYXRhIiwiX2NhbGxlZTciLCJfYXJnczciLCJfY29udGV4dDciLCJfeDE0Iiwibm9kZUluZGV4Iiwic2VjcmV0IiwidXBwZXIiLCJsb3dlciIsIm11bCIsIm5lZyIsInRlbXAiLCJkZWx0YSIsImludm0iLCJwdWJsaWNLZXkiLCJlbmNvZGUiLCJldGhBZGRyZXNzTG93ZXIiLCJ0b0NoZWNrc3VtQWRkcmVzcyIsInB1YmxpY0tleVgiLCJwdWJsaWNLZXlZIiwiX2dldFB1YmxpY0FkZHJlc3MiLCJfY2FsbGVlOCIsIl9yZWY3IiwiaXNFeHRlbmRlZCIsIl9yZWY4IiwiX25vbmNlIiwiX2ZpbmFsS2V5UmVzdWx0JGtleXMkMiIsIl9hcmdzOCIsIl9jb250ZXh0OCIsIl94MTUiLCJfeDE2IiwiX3gxNyIsIl9nZXRPclNldE5vbmNlIiwiX2NhbGxlZTkiLCJnZXRPbmx5IiwiX2FyZ3M5IiwiX2NvbnRleHQ5IiwiX3gxOCIsIl94MTkiLCJfeDIwIiwiX2dldE5vbmNlIiwiX2NhbGxlZTEwIiwiX2NvbnRleHQxMCIsIl94MjEiLCJfeDIyIiwiX3gyMyIsInByaXZLZXlCTiIsIm5vbmNlQk4iLCJlbmFibGVBbGwiLCJMT0dJTl9QUk9WSURFUiIsIldBTExFVF9WRVJJRklFUlMiLCJHT09HTEUiLCJGQUNFQk9PSyIsIlRXSVRDSCIsIlJFRERJVCIsIkRJU0NPUkQiLCJFTUFJTF9QQVNTV09SRExFU1MiLCJXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUCIsIlRPUlVTX0JVSUxEX0VOViIsIlBST0RVQ1RJT04iLCJERVZFTE9QTUVOVCIsIkJJTkFOQ0UiLCJURVNUSU5HIiwiTFJDIiwiQkVUQSIsIkJVVFRPTl9QT1NJVElPTiIsIkJPVFRPTV9MRUZUIiwiVE9QX0xFRlQiLCJCT1RUT01fUklHSFQiLCJUT1BfUklHSFQiLCJwYXltZW50UHJvdmlkZXJzJDEiLCJsaW5lMSIsImxpbmUyIiwibGluZTMiLCJzdXBwb3J0UGFnZSIsIm1pbk9yZGVyVmFsdWUiLCJtYXhPcmRlclZhbHVlIiwidmFsaWRDdXJyZW5jaWVzIiwidmFsaWRDcnlwdG9DdXJyZW5jaWVzIiwiaW5jbHVkZUZlZXMiLCJlbmZvcmNlTWF4Iiwic2VsbCIsImNvbmZpZ3VyYXRpb24iLCJzdXBwb3J0ZWRWZXJpZmllckxpc3QiLCJwYXltZW50UHJvdmlkZXJzIiwiYXBpIiwidHJhbnNsYXRpb25zIiwiZW4iLCJlbWJlZCIsImNvbnRpbnVlIiwiYWN0aW9uUmVxdWlyZWQiLCJwZW5kaW5nQWN0aW9uIiwiY29va2llc1JlcXVpcmVkIiwiZW5hYmxlQ29va2llcyIsImNsaWNrSGVyZSIsImRlIiwiamEiLCJrbyIsInpoIiwicHJvZFRvcnVzVXJsIiwibG9jYWxTdG9yYWdlS2V5UHJlZml4IiwicnVuT25Mb2FkIiwiZG9jdW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsInRyaW1tZWRIdG1sIiwidHJpbSIsImlubmVySFRNTCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiaGFuZGxlU3RyZWFtIiwiZXZlbnROYW1lIiwiaGFuZGxlcldyYXBwZXIiLCJkb2N1bWVudFJlYWR5IiwicmVhZHlTdGF0ZSIsImhhbmRsZXJBcmdzIiwiaGFuZGxlRXZlbnQiLCJtZXNzYWdlcyIsImRpc2Nvbm5lY3RlZCIsInBlcm1hbmVudGx5RGlzY29ubmVjdGVkIiwic2VuZFNpdGVNZXRhZGF0YSIsInVuc3VwcG9ydGVkU3luYyIsImludmFsaWREdXBsZXhTdHJlYW0iLCJpbnZhbGlkT3B0aW9ucyIsIm1heEV2ZW50TGlzdGVuZXJzIiwic2hvdWxkU2VuZE1ldGFkYXRhIiwiaW52YWxpZFJlcXVlc3RBcmdzIiwiaW52YWxpZFJlcXVlc3RNZXRob2QiLCJpbnZhbGlkUmVxdWVzdFBhcmFtcyIsImludmFsaWRMb2dnZXJPYmplY3QiLCJpbnZhbGlkTG9nZ2VyTWV0aG9kIiwiY29ubmVjdGVkIiwiY2hhaW5JZCIsIndhcm5pbmdzIiwiZW5hYmxlRGVwcmVjYXRpb24iLCJzZW5kRGVwcmVjYXRpb24iLCJjbG9zZSIsIm5ldHdvcmtDaGFuZ2VkIiwibm90aWZpY2F0aW9uIiwicHVibGljQ29uZmlnU3RvcmUiLCJsb2dTdHJlYW1EaXNjb25uZWN0V2FybmluZyIsInJlbW90ZUxhYmVsIiwiZW1pdHRlciIsIndhcm5pbmdNc2ciLCJsaXN0ZW5lckNvdW50IiwiZ2V0UHJlb3Blbkluc3RhbmNlSWQiLCJnZXRUb3J1c1VybCIsImJ1aWxkRW52IiwiaW50ZWdyaXR5IiwidG9ydXNVcmwiLCJsb2dMZXZlbCIsInZlcnNpb24iLCJ2ZXJzaW9uVXNlZCIsImdldFVzZXJMYW5ndWFnZSIsInVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwidXNlckxhbmd1YWdlcyIsIkVNSVRURURfTk9USUZJQ0FUSU9OUyIsIk5PT1AiLCJGRUFUVVJFU19QUk9WSURFUl9DSEFOR0VfV0lORE9XIiwiRkVBVFVSRVNfQ09ORklSTV9XSU5ET1ciLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwidW53cmFwUmVzdWx0IiwiVG9ydXNJbnBhZ2VQcm92aWRlciIsImNvbm5lY3Rpb25TdHJlYW0iLCJqc29uUnBjU3RyZWFtTmFtZSIsImVuYWJsZSIsImV4cGVyaW1lbnRhbE1ldGhvZHMiLCJzZW5kIiwiZHVwbGV4IiwiaXNUb3J1cyIsInNldE1heExpc3RlbmVycyIsIl9kZWZhdWx0U3RhdGUiLCJzZWxlY3RlZEFkZHJlc3MiLCJuZXR3b3JrVmVyc2lvbiIsIl9oYW5kbGVBY2NvdW50c0NoYW5nZWQiLCJfaGFuZGxlQ2hhaW5DaGFuZ2VkIiwiX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCIsIl9oYW5kbGVDb25uZWN0IiwiX2hhbmRsZURpc2Nvbm5lY3QiLCJfaGFuZGxlU3RyZWFtRGlzY29ubmVjdCIsIl9zZW5kU3luYyIsIl9ycGNSZXF1ZXN0IiwiX3dhcm5PZkRlcHJlY2F0aW9uIiwiX2luaXRpYWxpemVTdGF0ZSIsInJlcXVlc3QiLCJzZW5kQXN5bmMiLCJtdXgiLCJfcHVibGljQ29uZmlnU3RvcmUiLCJzdG9yYWdlS2V5IiwiaXNDb25uZWN0ZWQiLCJqc29uUnBjQ29ubmVjdGlvbiIsInJwY0VuZ2luZSIsImV0aEVycm9ycyIsIl9ycGNFbmdpbmUiLCJwYXlsb2FkIiwiX3NlbnRXYXJuaW5ncyIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJvbmNlIiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImFjY291bnRzIiwiaXNVbmxvY2tlZCIsImluaXRpYWxpemVkIiwiaXNJbnRlcm5hbCIsIl9wYXlsb2FkIiwidHJ5UHJlb3BlbkhhbmRsZSIsIm1ldGhvZE9yUGF5bG9hZCIsImNhbGxiYWNrT3JBcmdzIiwiaXNSZWNvdmVyYWJsZSIsImVycm9yTWVzc2FnZSIsImlzUGVybWFuZW50bHlEaXNjb25uZWN0ZWQiLCJFdGhlcmV1bVJwY0Vycm9yIiwic3RyZWFtTmFtZSIsImlzRXRoQWNjb3VudHMiLCJmaW5hbEFjY291bnRzIiwiYWNjb3VudCIsImhhc0VtaXR0ZWRDb25uZWN0aW9uIiwiaGFzaGVzIiwiaW50ZXJuYWxIYXNoZXMiLCJhbGdvcml0aG1zIiwiYWxnb3JpdGhtIiwibWFpbiIsImZpbmFsT3B0aW9ucyIsImRlbGltaXRlciIsImZ1bGwiLCJkZWZhdWx0cyIsInNyaSIsIm91dHB1dCIsIlBvcHVwSGFuZGxlciIsImZlYXR1cmVzIiwiZHVhbFNjcmVlbkxlZnQiLCJzY3JlZW5MZWZ0Iiwic2NyZWVuWCIsImR1YWxTY3JlZW5Ub3AiLCJzY3JlZW5Ub3AiLCJzY3JlZW5ZIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJzY3JlZW4iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImxlZnQiLCJhYnMiLCJ0b3AiLCJoIiwidyIsImdldFBvcHVwRmVhdHVyZXMiLCJ3aW5kb3dUaW1lciIsImlDbG9zZWRXaW5kb3ciLCJfc2V0dXBUaW1lciIsInNldEludGVydmFsIiwiY2xvc2VkIiwiY2xlYXJJbnRlcnZhbCIsIm9wZW4iLCJfdGhpcyR3aW5kb3ciLCJmb2N1cyIsInJlZGlyZWN0IiwibG9jYXRpb25SZXBsYWNlT25SZWRpcmVjdCIsImxvY2F0aW9uIiwiaW1nRXhpc3RzIiwiaW1nIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsImdldFNpdGVOYW1lIiwic2l0ZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwibWV0YVRpdGxlIiwidGl0bGUiLCJob3N0bmFtZSIsImdldFNpdGVJY29uIiwiaWNvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaW5kIiwiX2ljb24iLCJlbmdpbmUiLCJkb21haW5NZXRhZGF0YSIsImdldFNpdGVNZXRhZGF0YSIsIm9yaWdpbmFsRXJyb3IiLCJfZXhjbHVkZWQiLCJkZWZhdWx0VmVyaWZpZXJzIiwiaWZyYW1lSW50ZWdyaXR5IiwiVU5TQUZFX01FVEhPRFMiLCJpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSIsInN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0b3J1c0lmcmFtZUh0bWwiLCJjaGVjayIsImNyb3NzT3JpZ2luIiwicmVsIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYnV0dG9uUG9zaXRpb24iLCJtb2RhbFpJbmRleCIsImlzTG9nZ2VkSW4iLCJpc0luaXRpYWxpemVkIiwidG9ydXNXaWRnZXRWaXNpYmlsaXR5IiwicmVxdWVzdGVkVmVyaWZpZXIiLCJjdXJyZW50VmVyaWZpZXIiLCJub2RlRGV0YWlsTWFuYWdlciIsInRvcnVzSnMiLCJhbGVydFpJbmRleCIsImlzSWZyYW1lRnVsbFNjcmVlbiIsImRhcHBTdG9yYWdlS2V5IiwiZW5hYmxlTG9nZ2luZyIsImVuYWJsZWRWZXJpZmllcnMiLCJob3N0IiwibmV0d29ya05hbWUiLCJibG9ja0V4cGxvcmVyIiwidGlja2VyIiwidGlja2VyTmFtZSIsImxvZ2luQ29uZmlnIiwic2hvd1RvcnVzQnV0dG9uIiwid2hpdGVMYWJlbCIsInNraXBUS2V5IiwidXNlTG9jYWxTdG9yYWdlIiwidXNlV2FsbGV0Q29ubmVjdCIsInNldERlZmF1bHRMZXZlbCIsImxvY2FsU3RvcmFnZUtleSIsInN0b3JlZEtleSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZW5lcmF0ZWRLZXkiLCJ0b3J1c0lmcmFtZVVybCIsInBhdGhuYW1lIiwiZW5kc1dpdGgiLCJ0b3J1c0lmcmFtZSIsInRvcnVzQWxlcnRDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRQcm9wZXJ0eSIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZUxpbmsiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJjdXN0b21UcmFuc2xhdGlvbnMiLCJsYW5ndWFnZVRyYW5zbGF0aW9ucyIsImVtYmVkVHJhbnNsYXRpb25zIiwiaGFuZGxlU2V0dXAiLCJfc2V0dXBXZWIzIiwiaW5pdFN0cmVhbSIsImNvbW11bmljYXRpb25NdXgiLCJnZXRTdHJlYW0iLCJzdWNjZXNzIiwiX2Rpc3BsYXlJZnJhbWUiLCJmZXRjaFVybCIsImNhY2hlIiwidGV4dCIsImNhbGN1bGF0ZWRJbnRlZ3JpdHkiLCJjbGVhckluaXQiLCJsb2dpbiIsImxvZ2luX2hpbnQiLCJsb2dpbkhpbnQiLCJldGhlcmV1bSIsImxvZ291dCIsInN0YXR1c1N0cmVhbSIsImxvZ2dlZEluIiwiaXNFbGVtZW50IiwiZWxlbWVudCIsIkVsZW1lbnQiLCJIVE1MRG9jdW1lbnQiLCJjb250YWlucyIsInJlbW92ZSIsInRvcnVzQWxlcnQiLCJoaWRlVG9ydXNCdXR0b24iLCJfc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXMiLCJzZXRQcm92aWRlciIsInJlc3QiLCJwcm92aWRlckNoYW5nZVN0cmVhbSIsInByZW9wZW5JbnN0YW5jZUlkIiwiX2hhbmRsZVdpbmRvdyIsIm92ZXJyaWRlIiwic2hvd1dhbGxldCIsInBhdGgiLCJzaG93V2FsbGV0U3RyZWFtIiwiZmluYWxQYXRoIiwiaW5zdGFuY2VJZCIsImZpbmFsVXJsIiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwiZ2V0Tm9kZURldGFpbHMiLCJ3YWxsZXRWZXJpZmllciIsIm9wZW5sb2dpblZlcmlmaWVyIiwiZXhpc3RpbmdWMVVzZXIiLCJnZXRVc2VyVHlwZUFuZEFkZHJlc3MiLCJ2MlVzZXIiLCJuZXdWMlVzZXIiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvQWNjZXNzU3RyZWFtIiwidXNlckluZm9BY2Nlc3NIYW5kbGVyIiwiYXBwcm92ZWQiLCJyZWplY3RlZCIsIm5ld1JlcXVlc3QiLCJ1c2VySW5mb1N0cmVhbSIsImhhbmRsZXJDaHVuayIsImluaXRpYXRlVG9wdXAiLCJwcm92aWRlciIsImlzVmFsaWQiLCJzZWxlY3RlZFByb3ZpZGVyIiwic2VsZWN0ZWRQYXJhbXMiLCJmaWF0VmFsdWUiLCJyZXF1ZXN0ZWRPcmRlckFtb3VudCIsInBhcnNlRmxvYXQiLCJzZWxlY3RlZEN1cnJlbmN5Iiwic2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSIsInZhbGlkYXRlUGF5bWVudFByb3ZpZGVyIiwidG9wdXBTdHJlYW0iLCJsb2dpblBhcmFtcyIsInVzZXJJbmZvIiwibG9naW5Qcml2S2V5U3RyZWFtIiwid2FsbGV0Q29ubmVjdFN0cmVhbSIsIndpbmRvd1N0cmVhbSIsImhhbmRsZWRXaW5kb3ciLCJfY3JlYXRlUG9wdXBCbG9ja0FsZXJ0IiwiY2xvc2VIYW5kbGVyIiwicmVjZWl2ZWRJZCIsIl9zZXRFbWJlZFdoaXRlTGFiZWwiLCJ0aGVtZSIsImlzRGFyayIsImNvbG9ycyIsImNsYXNzTGlzdCIsInRvcnVzQnJhbmQxIiwidG9ydXNHcmF5MiIsIl9nZXRMb2dvVXJsIiwiX3RoaXMkd2hpdGVMYWJlbCIsIl90aGlzJHdoaXRlTGFiZWwkdGhlbSIsImxvZ29VcmwiLCJfdGhpcyR3aGl0ZUxhYmVsMiIsIl90aGlzJHdoaXRlTGFiZWwzIiwibG9nb0xpZ2h0IiwibG9nb0RhcmsiLCJpc0Z1bGwiLCJyaWdodCIsImJvdHRvbSIsIm1ldGFtYXNrU3RyZWFtIiwiY29udGVudFdpbmRvdyIsImNvbW11bmljYXRpb25TdHJlYW0iLCJpbnBhZ2VQcm92aWRlciIsImRldGVjdEFjY291bnRSZXF1ZXN0UHJvdG90eXBlTW9kaWZpZXIiLCJvcmlnaW5hbE1ldGhvZCIsImhhbmRsZUxvZ2luQ2IiLCJfc2hvd0xvZ2luUG9wdXAiLCJpc0xvZ2luQ2FsbGJhY2siLCJwcm94aWVkSW5wYWdlUHJvdmlkZXIiLCJkZWxldGVQcm9wZXJ0eSIsInNldHVwTXVsdGlwbGV4IiwiY2FsbGVkRnJvbUVtYmVkIiwibG9naW5IYW5kbGVyIiwib2F1dGhTdHJlYW0iLCJzdWNjZXNzQWxlcnQiLCJidG5Db250YWluZXIiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJmdWxmaWxsZWQiLCJzdGVwIiwiYWRvcHQiLCJfX2dlbmVyYXRvciIsImYiLCJnIiwibGFiZWwiLCJ0cnlzIiwib3BzIiwidmVyYiIsIm9wIiwicG9wIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiX2EiLCJFQyIsImJyb3dzZXJDcnlwdG8iLCJjcnlwdG8iLCJtc0NyeXB0byIsInN1YnRsZSIsIndlYmtpdFN1YnRsZSIsIm5vZGVDcnlwdG8iLCJFQ19HUk9VUF9PUkRFUiIsIkJ1ZmZlciIsIlpFUk8zMiIsImFsbG9jIiwiYXNzZXJ0IiwiY29uZGl0aW9uIiwiaXNWYWxpZFByaXZhdGVLZXkiLCJpc0J1ZmZlciIsImlzU2NhbGFyIiwiY29tcGFyZSIsInJhbmRvbUJ5dGVzIiwic2l6ZSIsIlVpbnQ4QXJyYXkiLCJnZXRSYW5kb21WYWx1ZXMiLCJzaGE1MTIiLCJjcmVhdGVIYXNoIiwiZ2V0QWVzIiwiaW1wb3J0S2V5IiwiY3J5cHRvS2V5IiwiZW5jQWxnb3JpdGhtIiwiY2lwaGVyIiwiY3JlYXRlQ2lwaGVyaXYiLCJmaXJzdENodW5rIiwic2Vjb25kQ2h1bmsiLCJmaW5hbCIsImRlY2lwaGVyIiwiY3JlYXRlRGVjaXBoZXJpdiIsImFlc0NiY0VuY3J5cHQiLCJhZXNDYmNEZWNyeXB0IiwiZGVyaXZlIiwicHJpdmF0ZUtleUEiLCJwdWJsaWNLZXlCIiwia2V5QSIsImtleUIiLCJQeCIsInRvQXJyYXkiLCJvcHRzIiwiZW5jcnlwdGlvbktleSIsImhtYWMiLCJjcmVhdGVIbWFjIiwiYjEiLCJiMiIsImVxdWFsQ29uc3RUaW1lIiwiaG1hY1NoYTI1NlZlcmlmeSIsIm1hY0dvb2QiLCJwYWRfc3RyaW5nXzEiLCJpbnB1dCIsImVuY29kaW5nIiwiZnJvbUJhc2U2NCIsInRvQmFzZTY0IiwiYmFzZTY0dXJsIiwiYmFzZTY0IiwiZGVjb2RlIiwidG9CdWZmZXIiLCJzdHJpbmdMZW5ndGgiLCJkaWZmIiwicG9zaXRpb24iLCJwYWRMZW5ndGgiLCJwYWRkZWRTdHJpbmdMZW5ndGgiLCJidWZmZXIiLCJtb2R1bGUiLCJvYmplY3RUb1N0cmluZyIsImlzQm9vbGVhbiIsImlzTnVsbCIsImlzTnVsbE9yVW5kZWZpbmVkIiwiaXNOdW1iZXIiLCJpc1N0cmluZyIsImlzU3ltYm9sIiwiaXNVbmRlZmluZWQiLCJpc1JlZ0V4cCIsInJlIiwiaXNPYmplY3QiLCJpc0RhdGUiLCJkIiwiaXNFcnJvciIsImlzRnVuY3Rpb24iLCJpc1ByaW1pdGl2ZSIsImVvcyIsIndzIiwiX3dyaXRhYmxlU3RhdGUiLCJycyIsIl9yZWFkYWJsZVN0YXRlIiwiY2FuY2VsbGVkIiwib25sZWdhY3lmaW5pc2giLCJvbmZpbmlzaCIsIm9uZW5kIiwib25leGl0IiwiZXhpdENvZGUiLCJvbmNsb3NlIiwicHJvY2VzcyIsIm5leHRUaWNrIiwib25jbG9zZW5leHR0aWNrIiwiZW5kZWQiLCJkZXN0cm95ZWQiLCJvbnJlcXVlc3QiLCJzZXRIZWFkZXIiLCJhYm9ydCIsImlzUmVxdWVzdCIsInN0ZGlvIiwiaXNDaGlsZFByb2Nlc3MiLCJlcXVhbCIsIlJlZ0V4cCIsImZsYWdzIiwiaXNTdHJlYW0iLCJ0cmFuc2Zvcm0iLCJfdHJhbnNmb3JtIiwiSEFTSF9VTkRFRklORUQiLCJNQVhfU0FGRV9JTlRFR0VSIiwiYXJnc1RhZyIsImZ1bmNUYWciLCJvYmplY3RUYWciLCJyZUlzSG9zdEN0b3IiLCJyZUlzVWludCIsInR5cGVkQXJyYXlUYWdzIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwicm9vdCIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsImZyZWVQcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImZ1bmMiLCJhcnJheVByb3RvIiwiZnVuY1Byb3RvIiwib2JqZWN0UHJvdG8iLCJjb3JlSnNEYXRhIiwiZnVuY1RvU3RyaW5nIiwibWFza1NyY0tleSIsInVpZCIsImV4ZWMiLCJJRV9QUk9UTyIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwib2JqZWN0Q3RvclN0cmluZyIsInJlSXNOYXRpdmUiLCJhbGxvY1Vuc2FmZSIsImdldFByb3RvdHlwZSIsIm92ZXJBcmciLCJvYmplY3RDcmVhdGUiLCJzcGxpY2UiLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiZ2V0TmF0aXZlIiwibmF0aXZlSXNCdWZmZXIiLCJuYXRpdmVNYXgiLCJtYXgiLCJuYXRpdmVOb3ciLCJuYXRpdmVDcmVhdGUiLCJiYXNlQ3JlYXRlIiwicHJvdG8iLCJIYXNoIiwiZW50cmllcyIsImNsZWFyIiwiZW50cnkiLCJMaXN0Q2FjaGUiLCJNYXBDYWNoZSIsIlN0YWNrIiwiX19kYXRhX18iLCJhcnJheUxpa2VLZXlzIiwiaW5oZXJpdGVkIiwiaXNBcnIiLCJpc0FyZyIsImlzQXJndW1lbnRzIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJpdGVyYXRlZSIsImJhc2VUaW1lcyIsIlN0cmluZyIsImlzSW5kZXgiLCJhc3NpZ25NZXJnZVZhbHVlIiwiZXEiLCJiYXNlQXNzaWduVmFsdWUiLCJhc3NpZ25WYWx1ZSIsIm9ialZhbHVlIiwiYXNzb2NJbmRleE9mIiwiYXJyYXkiLCJnZXRNYXBEYXRhIiwicGFpcnMiLCJMQVJHRV9BUlJBWV9TSVpFIiwiYmFzZUZvciIsImZyb21SaWdodCIsImtleXNGdW5jIiwiaXRlcmFibGUiLCJjcmVhdGVCYXNlRm9yIiwiYmFzZUdldFRhZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJnZXRSYXdUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJpc09iamVjdExpa2UiLCJiYXNlSXNOYXRpdmUiLCJpc01hc2tlZCIsInRvU291cmNlIiwiYmFzZUtleXNJbiIsIm5hdGl2ZUtleXNJbiIsImlzUHJvdG8iLCJpc1Byb3RvdHlwZSIsImJhc2VNZXJnZSIsInNyY0luZGV4IiwiY3VzdG9taXplciIsInNyY1ZhbHVlIiwibWVyZ2VGdW5jIiwic2FmZUdldCIsInN0YWNrZWQiLCJuZXdWYWx1ZSIsImlzQ29tbW9uIiwiaXNUeXBlZCIsImlzQXJyYXlMaWtlIiwiaXNBcnJheUxpa2VPYmplY3QiLCJpc0RlZXAiLCJjbG9uZUJ1ZmZlciIsInR5cGVkQXJyYXkiLCJhcnJheUJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJjbG9uZUFycmF5QnVmZmVyIiwiYnl0ZU9mZnNldCIsImNsb25lVHlwZWRBcnJheSIsImNvcHlBcnJheSIsIkN0b3IiLCJpc1BsYWluT2JqZWN0IiwiaXNOZXciLCJjb3B5T2JqZWN0Iiwia2V5c0luIiwidG9QbGFpbk9iamVjdCIsImluaXRDbG9uZU9iamVjdCIsImJhc2VNZXJnZURlZXAiLCJiYXNlUmVzdCIsInN0YXJ0Iiwic2V0VG9TdHJpbmciLCJvdGhlckFyZ3MiLCJvdmVyUmVzdCIsImlkZW50aXR5IiwiaXNLZXlhYmxlIiwiZ2V0VmFsdWUiLCJjb3VudCIsImxhc3RDYWxsZWQiLCJzdGFtcCIsInJlbWFpbmluZyIsInNob3J0T3V0Iiwic3RyaW5nIiwiY29uc3RhbnQiLCJvdGhlciIsImlzTGVuZ3RoIiwiYmFzZVVuYXJ5IiwibWVyZ2UiLCJhc3NpZ25lciIsInNvdXJjZXMiLCJndWFyZCIsImlzSXRlcmF0ZWVDYWxsIiwiY3JlYXRlQXNzaWduZXIiLCJkZWZpbml0aW9uIiwidW5kZWZpbmVkVHlwZSIsImlzSUUiLCJ1c2VyQWdlbnQiLCJsb2dNZXRob2RzIiwiYmluZE1ldGhvZCIsIm1ldGhvZE5hbWUiLCJ0cmFjZUZvcklFIiwidHJhY2UiLCJyZWFsTWV0aG9kIiwicmVwbGFjZUxvZ2dpbmdNZXRob2RzIiwibGV2ZWwiLCJsb2dnZXJOYW1lIiwibWV0aG9kRmFjdG9yeSIsImVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMiLCJkZWZhdWx0TWV0aG9kRmFjdG9yeSIsIkxvZ2dlciIsImRlZmF1bHRMZXZlbCIsImZhY3RvcnkiLCJjdXJyZW50TGV2ZWwiLCJwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlIiwibGV2ZWxOdW0iLCJsZXZlbE5hbWUiLCJpZ25vcmUiLCJjb29raWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRQZXJzaXN0ZWRMZXZlbCIsInN0b3JlZExldmVsIiwiY2xlYXJQZXJzaXN0ZWRMZXZlbCIsImdldExldmVsIiwicGVyc2lzdCIsIlNJTEVOVCIsInJlc2V0TGV2ZWwiLCJUUkFDRSIsImluaXRpYWxMZXZlbCIsImRlZmF1bHRMb2dnZXIiLCJfbG9nZ2Vyc0J5TmFtZSIsImdldExvZ2dlciIsImxvZ2dlciIsIl9sb2ciLCJub0NvbmZsaWN0IiwiZ2V0TG9nZ2VycyIsIndyYXBweSIsImNhbGxlZCIsIm9uY2VTdHJpY3QiLCJvbmNlRXJyb3IiLCJzdHJpY3QiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJmcyIsImFuY2llbnQiLCJpc0ZuIiwiZGVzdHJveWVyIiwicmVhZGluZyIsIndyaXRpbmciLCJSZWFkU3RyZWFtIiwiV3JpdGVTdHJlYW0iLCJpc0ZTIiwidG8iLCJzdHJlYW1zIiwiZGVzdHJveXMiLCJwbmEiLCJvYmplY3RLZXlzIiwidXRpbCIsImluaGVyaXRzIiwiUmVhZGFibGUiLCJXcml0YWJsZSIsImFsbG93SGFsZk9wZW4iLCJvbkVuZE5UIiwiaGlnaFdhdGVyTWFyayIsIlBhc3NUaHJvdWdoIiwiVHJhbnNmb3JtIiwiUmVhZGFibGVTdGF0ZSIsIkVFbGlzdGVuZXJDb3VudCIsIlN0cmVhbSIsIk91clVpbnQ4QXJyYXkiLCJkZWJ1Z1V0aWwiLCJkZWJ1Z2xvZyIsIkJ1ZmZlckxpc3QiLCJkZXN0cm95SW1wbCIsIlN0cmluZ0RlY29kZXIiLCJrUHJveHlFdmVudHMiLCJpc0R1cGxleCIsInJlYWRhYmxlT2JqZWN0TW9kZSIsImh3bSIsInJlYWRhYmxlSHdtIiwicmVhZGFibGVIaWdoV2F0ZXJNYXJrIiwiZGVmYXVsdEh3bSIsInBpcGVzIiwicGlwZXNDb3VudCIsImZsb3dpbmciLCJlbmRFbWl0dGVkIiwic3luYyIsIm5lZWRSZWFkYWJsZSIsImVtaXR0ZWRSZWFkYWJsZSIsInJlYWRhYmxlTGlzdGVuaW5nIiwicmVzdW1lU2NoZWR1bGVkIiwiZGVmYXVsdEVuY29kaW5nIiwiYXdhaXREcmFpbiIsInJlYWRpbmdNb3JlIiwiZGVjb2RlciIsInJlYWRhYmxlQWRkQ2h1bmsiLCJhZGRUb0Zyb250Iiwic2tpcENodW5rQ2hlY2siLCJlbWl0UmVhZGFibGUiLCJvbkVvZkNodW5rIiwiX2lzVWludDhBcnJheSIsImNodW5rSW52YWxpZCIsIl91aW50OEFycmF5VG9CdWZmZXIiLCJhZGRDaHVuayIsIm1heWJlUmVhZE1vcmUiLCJuZWVkTW9yZURhdGEiLCJ1bnNoaWZ0IiwiX3VuZGVzdHJveSIsInVuZGVzdHJveSIsImlzUGF1c2VkIiwic2V0RW5jb2RpbmciLCJlbmMiLCJNQVhfSFdNIiwiaG93TXVjaFRvUmVhZCIsImNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrIiwiZW1pdFJlYWRhYmxlXyIsImZsb3ciLCJtYXliZVJlYWRNb3JlXyIsIm5SZWFkaW5nTmV4dFRpY2siLCJyZXN1bWVfIiwiZnJvbUxpc3QiLCJyZXQiLCJzaGlmdCIsImxpc3QiLCJoYXNTdHJpbmdzIiwiYyIsIm5iIiwidGFpbCIsImNvcHlGcm9tQnVmZmVyU3RyaW5nIiwiYnVmIiwiY29weUZyb21CdWZmZXIiLCJmcm9tTGlzdFBhcnRpYWwiLCJlbmRSZWFkYWJsZSIsImVuZFJlYWRhYmxlTlQiLCJ4cyIsImwiLCJwYXJzZUludCIsIm5PcmlnIiwiZG9SZWFkIiwicGlwZU9wdHMiLCJlbmRGbiIsInN0ZG91dCIsInN0ZGVyciIsInVucGlwZSIsIm9udW5waXBlIiwidW5waXBlSW5mbyIsImhhc1VucGlwZWQiLCJvbmRyYWluIiwib25kYXRhIiwiY2xlYW5lZFVwIiwibmVlZERyYWluIiwiY2xlYW51cCIsInBpcGVPbkRyYWluIiwiaW5jcmVhc2VkQXdhaXREcmFpbiIsInBhdXNlIiwiZGVzdHMiLCJldiIsIndyYXAiLCJwYXVzZWQiLCJfZnJvbUxpc3QiLCJhZnRlclRyYW5zZm9ybSIsInRzIiwiX3RyYW5zZm9ybVN0YXRlIiwidHJhbnNmb3JtaW5nIiwid3JpdGVjYiIsIndyaXRlY2h1bmsiLCJuZWVkVHJhbnNmb3JtIiwid3JpdGVlbmNvZGluZyIsImZsdXNoIiwiX2ZsdXNoIiwicHJlZmluaXNoIiwiX3RoaXMyIiwiZXJyMiIsIkNvcmtlZFJlcXVlc3QiLCJmaW5pc2giLCJjb3JrUmVxIiwicGVuZGluZ2NiIiwiY29ya2VkUmVxdWVzdHNGcmVlIiwib25Db3JrZWRGaW5pc2giLCJhc3luY1dyaXRlIiwiYnJvd3NlciIsInNldEltbWVkaWF0ZSIsIldyaXRhYmxlU3RhdGUiLCJpbnRlcm5hbFV0aWwiLCJkZXByZWNhdGUiLCJub3AiLCJ3cml0YWJsZU9iamVjdE1vZGUiLCJ3cml0YWJsZUh3bSIsIndyaXRhYmxlSGlnaFdhdGVyTWFyayIsImZpbmFsQ2FsbGVkIiwiZW5kaW5nIiwiZmluaXNoZWQiLCJub0RlY29kZSIsImRlY29kZVN0cmluZ3MiLCJjb3JrZWQiLCJidWZmZXJQcm9jZXNzaW5nIiwib253cml0ZSIsIndyaXRlbGVuIiwib253cml0ZVN0YXRlVXBkYXRlIiwiZmluaXNoTWF5YmUiLCJlcnJvckVtaXR0ZWQiLCJvbndyaXRlRXJyb3IiLCJuZWVkRmluaXNoIiwiYnVmZmVyZWRSZXF1ZXN0IiwiY2xlYXJCdWZmZXIiLCJhZnRlcldyaXRlIiwibGFzdEJ1ZmZlcmVkUmVxdWVzdCIsInByZWZpbmlzaGVkIiwiYnVmZmVyZWRSZXF1ZXN0Q291bnQiLCJyZWFsSGFzSW5zdGFuY2UiLCJ3cml0ZXYiLCJfd3JpdGV2IiwiX2ZpbmFsIiwiZG9Xcml0ZSIsIm9ud3JpdGVEcmFpbiIsImhvbGRlciIsImFsbEJ1ZmZlcnMiLCJpc0J1ZiIsImNhbGxGaW5hbCIsIm5lZWQiLCJnZXRCdWZmZXIiLCJjdXJyZW50Iiwib3V0IiwiaGFzSW5zdGFuY2UiLCJ3cml0ZUFmdGVyRW5kIiwidmFsaWQiLCJ2YWxpZENodW5rIiwibmV3Q2h1bmsiLCJkZWNvZGVDaHVuayIsImxhc3QiLCJ3cml0ZU9yQnVmZmVyIiwic2V0RGVmYXVsdEVuY29kaW5nIiwidG9Mb3dlckNhc2UiLCJlbmRXcml0YWJsZSIsImNvcHlCdWZmZXIiLCJvZmZzZXQiLCJpbnNwZWN0IiwiY3VzdG9tIiwiZW1pdEVycm9yTlQiLCJyZWFkYWJsZURlc3Ryb3llZCIsIndyaXRhYmxlRGVzdHJveWVkIiwiaXNFbmNvZGluZyIsIm5lbmMiLCJyZXRyaWVkIiwiX25vcm1hbGl6ZUVuY29kaW5nIiwibm9ybWFsaXplRW5jb2RpbmciLCJ1dGYxNlRleHQiLCJ1dGYxNkVuZCIsImZpbGxMYXN0IiwidXRmOEZpbGxMYXN0IiwiYmFzZTY0VGV4dCIsImJhc2U2NEVuZCIsInNpbXBsZVdyaXRlIiwic2ltcGxlRW5kIiwibGFzdE5lZWQiLCJsYXN0VG90YWwiLCJsYXN0Q2hhciIsInV0ZjhDaGVja0J5dGUiLCJieXRlIiwidXRmOENoZWNrRXh0cmFCeXRlcyIsImNoYXJDb2RlQXQiLCJ0b3RhbCIsInV0ZjhDaGVja0luY29tcGxldGUiLCJ4dGVuZCIsIkRlc3Ryb3lhYmxlVHJhbnNmb3JtIiwiX2Rlc3Ryb3llZCIsInRocm91Z2gyIiwidDIiLCJjdG9yIiwiVGhyb3VnaDIiLCJ3cmFwcGVyIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIk9wIiwiaGFzT3duIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsImRlZmluZSIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsIkNvbnRleHQiLCJfaW52b2tlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwiQ29udGludWVTZW50aW5lbCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJyZWNvcmQiLCJ0cnlDYXRjaCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsIl9fYXdhaXQiLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwibWFyayIsImF3cmFwIiwic2tpcFRlbXBSZXNldCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicnVudGltZSIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiZ2xvYmFsVGhpcyJdLCJzb3VyY2VSb290IjoiIn0=