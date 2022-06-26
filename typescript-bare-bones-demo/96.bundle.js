/*! For license information please see 96.bundle.js.LICENSE.txt */
(self.webpackChunktoken_overlay_website = self.webpackChunktoken_overlay_website || []).push([ [ 96 ], {
  59591: (e, t, r) => {
    var n = r(50008).default;
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
  50008: e => {
    function t(r) {
      return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  },
  87757: (e, t, r) => {
    var n = r(59591)();
    e.exports = n;
    try {
      regeneratorRuntime = n;
    } catch (i) {
      "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
    }
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
    var le = r(87757);
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
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ2hDbzNDLEVBQUlwM0MsS0FBS1EsRUFBR1I7YUFHVG8zQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvQ29tcG9zZWRTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L01lcmdlZFN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvT2JzZXJ2YWJsZVN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvYXNTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2ZldGNoLW5vZGUtZGV0YWlscy9kaXN0L2ZldGNoTm9kZURldGFpbHMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2h0dHAtaGVscGVycy9kaXN0L2h0dHBIZWxwZXJzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy9vcGVubG9naW4tdXRpbHMvZGlzdC9vcGVubG9naW5VdGlscy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b3J1c2xhYnMvb3BlbmxvZ2luLWpycGMvZGlzdC9vcGVubG9naW5KcnBjLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy90b3J1cy5qcy9kaXN0L3RvcnVzVXRpbHMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL3RvcnVzLWVtYmVkL2Rpc3QvdG9ydXMuZXNtLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9rZW5zY3JpcHQvdG9rZW4tbmVnb3RpYXRvci9kaXN0L3dhbGxldC9Ub3J1c1Byb3ZpZGVyLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2VjY3J5cHRvL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9kaXN0L2Jhc2U2NHVybC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2Rpc3QvcGFkLXN0cmluZy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jb3JlLXV0aWwtaXMvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2VuZC1vZi1zdHJlYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvaXMtc3RyZWFtL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVyZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2xvZ2xldmVsL2xpYi9sb2dsZXZlbC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvb25jZS9vbmNlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzLW5leHRpY2stYXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcHVtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fZHVwbGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3Bhc3N0aHJvdWdoLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV93cml0YWJsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvc3RyZWFtLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vcmVhZGFibGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3N0cmluZ19kZWNvZGVyL2xpYi9zdHJpbmdfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvdGhyb3VnaDIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3dyYXBweS93cmFwcHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIGV4cG9ydHMgPSB7fSxcbiAgICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgICBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pLCBvYmpba2V5XTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgICAgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBnZW5lcmF0b3IuX2ludm9rZSA9IGZ1bmN0aW9uIChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgICB2YXIgc3RhdGUgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgIGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcblxuICAgICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBtZXRob2QpIHRocm93IGFyZztcbiAgICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7Oykge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG5cbiAgICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcIm5leHRcIiA9PT0gY29udGV4dC5tZXRob2QpIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUgJiYgKHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfShpbm5lckZuLCBzZWxmLCBjb250ZXh0KSwgZ2VuZXJhdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cblxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuXG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKHZhbHVlKSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgdGhpcy5faW52b2tlID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcblxuICAgIGlmICh1bmRlZmluZWQgPT09IG1ldGhvZCkge1xuICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpKSByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHtcbiAgICAgIHRyeUxvYzogbG9jc1swXVxuICAgIH07XG4gICAgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTtcblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiAhMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSksIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbiksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSk7XG4gIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCksIGdlbkZ1bjtcbiAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogYXJnXG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSxcbiAgICAgICAgICAgIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICAgIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzRmluYWxseSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTtcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHJlY29yZC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gcmVjb3JkLnR5cGUgPyB0aGlzLm5leHQgPSByZWNvcmQuYXJnIDogXCJyZXR1cm5cIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9LCBleHBvcnRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tcG9zZWRTdG9yZSA9IHZvaWQgMDtcbmNvbnN0IE9ic2VydmFibGVTdG9yZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpO1xuY2xhc3MgQ29tcG9zZWRTdG9yZSBleHRlbmRzIE9ic2VydmFibGVTdG9yZV8xLk9ic2VydmFibGVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoY2hpbGRyZW4pIHtcbiAgICAgICAgLy8gVHlwZWNhc3Q6IFByZXNlcnZlIGV4aXN0aW5nIGJlaGF2aW9yXG4gICAgICAgIHN1cGVyKHt9KTtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGNoaWxkcmVuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW4gfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2NoaWxkcmVuKS5mb3JFYWNoKChjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLl9jaGlsZHJlbltjaGlsZEtleV07XG4gICAgICAgICAgICB0aGlzLl9hZGRDaGlsZChjaGlsZEtleSwgY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoaWxkKGNoaWxkS2V5LCBjaGlsZCkge1xuICAgICAgICBjb25zdCB1cGRhdGVGcm9tQ2hpbGQgPSAoY2hpbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gICAgICAgICAgICBzdGF0ZVtjaGlsZEtleV0gPSBjaGlsZFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wdXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGNoaWxkLnN1YnNjcmliZSh1cGRhdGVGcm9tQ2hpbGQpO1xuICAgICAgICB1cGRhdGVGcm9tQ2hpbGQoY2hpbGQuZ2V0U3RhdGUoKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Db21wb3NlZFN0b3JlID0gQ29tcG9zZWRTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbXBvc2VkU3RvcmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lcmdlZFN0b3JlID0gdm9pZCAwO1xuY29uc3QgT2JzZXJ2YWJsZVN0b3JlXzEgPSByZXF1aXJlKFwiLi9PYnNlcnZhYmxlU3RvcmVcIik7XG5jbGFzcyBNZXJnZWRTdG9yZSBleHRlbmRzIE9ic2VydmFibGVTdG9yZV8xLk9ic2VydmFibGVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoY2hpbGRyZW4gPSBbXSkge1xuICAgICAgICAvLyBUeXBlY2FzdDogUHJlc2VydmUgZXhpc3RpbmcgYmVoYXZpb3JcbiAgICAgICAgc3VwZXIoe30pO1xuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gY2hpbGRyZW5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHRoaXMuX2FkZENoaWxkKGNoaWxkKSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVdob2xlU3RhdGUoKTtcbiAgICB9XG4gICAgX2FkZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl91cGRhdGVXaG9sZVN0YXRlKCkpO1xuICAgIH1cbiAgICBfdXBkYXRlV2hvbGVTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY2hpbGRTdGF0ZXMgPSB0aGlzLl9jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC5nZXRTdGF0ZSgpKTtcbiAgICAgICAgLy8gYXBwbHkgc2hhbGxvdyBtZXJnZSBvdmVyIHN0YXRlc1xuICAgICAgICBjb25zdCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgdGhpcy5wdXRTdGF0ZShzdGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5NZXJnZWRTdG9yZSA9IE1lcmdlZFN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWVyZ2VkU3RvcmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9ic2VydmFibGVTdG9yZSA9IHZvaWQgMDtcbmNvbnN0IHNhZmVfZXZlbnRfZW1pdHRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbWV0YW1hc2svc2FmZS1ldmVudC1lbWl0dGVyXCIpKTtcbmNsYXNzIE9ic2VydmFibGVTdG9yZSBleHRlbmRzIHNhZmVfZXZlbnRfZW1pdHRlcl8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGluaXRTdGF0ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoaW5pdFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IGluaXRTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFR5cGVjYXN0L2RlZmF1bHQgc3RhdGU6IFByZXNlcnZlIGV4aXN0aW5nIGJlaGF2aW9yXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHt9O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdyYXBwZXIgYXJvdW5kIGludGVybmFsIGdldFN0YXRlXG4gICAgZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTdGF0ZSgpO1xuICAgIH1cbiAgICAvLyB3cmFwcGVyIGFyb3VuZCBpbnRlcm5hbCBwdXRTdGF0ZVxuICAgIHB1dFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIHRoaXMuX3B1dFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCBuZXdTdGF0ZSk7XG4gICAgfVxuICAgIHVwZGF0ZVN0YXRlKHBhcnRpYWxTdGF0ZSkge1xuICAgICAgICAvLyBpZiBub24tbnVsbCBvYmplY3QsIG1lcmdlXG4gICAgICAgIGlmIChwYXJ0aWFsU3RhdGUgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgcGFydGlhbFN0YXRlKSk7XG4gICAgICAgICAgICAvLyBpZiBub3Qgb2JqZWN0LCB1c2UgbmV3IHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1dFN0YXRlKHBhcnRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc3Vic2NyaWJlIHRvIGNoYW5nZXNcbiAgICBzdWJzY3JpYmUoaGFuZGxlcikge1xuICAgICAgICB0aGlzLm9uKCd1cGRhdGUnLCBoYW5kbGVyKTtcbiAgICB9XG4gICAgLy8gdW5zdWJzY3JpYmUgdG8gY2hhbmdlc1xuICAgIHVuc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigndXBkYXRlJywgaGFuZGxlcik7XG4gICAgfVxuICAgIC8vXG4gICAgLy8gcHJpdmF0ZVxuICAgIC8vXG4gICAgLy8gcmVhZCBmcm9tIHBlcnNpc3RlbmNlXG4gICAgX2dldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIC8vIHdyaXRlIHRvIHBlcnNpc3RlbmNlXG4gICAgX3B1dFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxufVxuZXhwb3J0cy5PYnNlcnZhYmxlU3RvcmUgPSBPYnNlcnZhYmxlU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlU3RvcmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlQXNTdHJlYW0gPSB2b2lkIDA7XG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5jbGFzcyBPYnNlcnZhYmxlU3RvcmVTdHJlYW0gZXh0ZW5kcyBzdHJlYW1fMS5EdXBsZXgge1xuICAgIGNvbnN0cnVjdG9yKG9ic1N0b3JlKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIC8vIHBhc3MgdmFsdWVzLCBub3Qgc2VyaWFsaXphdGlvbnNcbiAgICAgICAgICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkb250IGJ1ZmZlciBvdXRnb2luZyB1cGRhdGVzXG4gICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgIC8vIHNhdmUgaGFuZGxlciBzbyB3ZSBjYW4gdW5zdWJzY3JpYmUgbGF0ZXJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gKHN0YXRlKSA9PiB0aGlzLnB1c2goc3RhdGUpO1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb2JzU3RvcmUgY2hhbmdlc1xuICAgICAgICB0aGlzLm9ic1N0b3JlID0gb2JzU3RvcmU7XG4gICAgICAgIHRoaXMub2JzU3RvcmUuc3Vic2NyaWJlKHRoaXMuaGFuZGxlcik7XG4gICAgfVxuICAgIC8vIGVtaXQgY3VycmVudCBzdGF0ZSBvbiBuZXcgZGVzdGluYXRpb25cbiAgICBwaXBlKGRlc3QsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIucGlwZShkZXN0LCBvcHRpb25zKTtcbiAgICAgICAgZGVzdC53cml0ZSh0aGlzLm9ic1N0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyB3cml0ZSBmcm9tIGluY29taW5nIHN0cmVhbSB0byBzdGF0ZVxuICAgIF93cml0ZShjaHVuaywgX2VuY29kaW5nLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9ic1N0b3JlLnB1dFN0YXRlKGNodW5rKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgLy8gbm9vcCAtIG91dGdvaW5nIHN0cmVhbSBpcyBhc2tpbmcgdXMgaWYgd2UgaGF2ZSBkYXRhIHdlIGFyZW50IGdpdmluZyBpdFxuICAgIF9yZWFkKF9zaXplKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIHVuc3Vic2NyaWJlIGZyb20gZXZlbnQgZW1pdHRlclxuICAgIF9kZXN0cm95KGVyciwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vYnNTdG9yZS51bnN1YnNjcmliZSh0aGlzLmhhbmRsZXIpO1xuICAgICAgICBzdXBlci5fZGVzdHJveShlcnIsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdG9yZUFzU3RyZWFtKG9ic1N0b3JlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlU3RvcmVTdHJlYW0ob2JzU3RvcmUpO1xufVxuZXhwb3J0cy5zdG9yZUFzU3RyZWFtID0gc3RvcmVBc1N0cmVhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzU3RyZWFtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYXNTdHJlYW1cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL0NvbXBvc2VkU3RvcmVcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL01lcmdlZFN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9PYnNlcnZhYmxlU3RvcmVcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RyYW5zZm9ybVwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RvcmVUcmFuc2Zvcm1TdHJlYW0gPSB2b2lkIDA7XG5jb25zdCB0aHJvdWdoMl8xID0gcmVxdWlyZShcInRocm91Z2gyXCIpO1xuZnVuY3Rpb24gc3RvcmVUcmFuc2Zvcm1TdHJlYW0oc3luY1RyYW5zZm9ybUZuKSB7XG4gICAgcmV0dXJuIHRocm91Z2gyXzEub2JqKChzdGF0ZSwgX2VuY29kaW5nLCBjYikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBzeW5jVHJhbnNmb3JtRm4oc3RhdGUpO1xuICAgICAgICAgICAgY2IobnVsbCwgbmV3U3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zdG9yZVRyYW5zZm9ybVN0cmVhbSA9IHN0b3JlVHJhbnNmb3JtU3RyZWFtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNmb3JtLmpzLm1hcCIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFdlYjNFdGhDb250cmFjdCBmcm9tICd3ZWIzLWV0aC1jb250cmFjdCc7XG5pbXBvcnQgeyBrZWNjYWsyNTYsIHRvSGV4IH0gZnJvbSAnd2ViMy11dGlscyc7XG5cbmNvbnN0IEVUSEVSRVVNX05FVFdPUksgPSB7XG4gIFJPUFNURU46IFwicm9wc3RlblwiLFxuICBNQUlOTkVUOiBcIm1haW5uZXRcIixcbiAgUE9MWUdPTjogXCJwb2x5Z29uLW1haW5uZXRcIlxufTtcbmNvbnN0IGFiaSA9IFt7XG4gIGlucHV0czogW3tcbiAgICBpbnRlcm5hbFR5cGU6IFwic3RyaW5nXCIsXG4gICAgbmFtZTogXCJfdmVyaWZpZXJcIixcbiAgICB0eXBlOiBcInN0cmluZ1wiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMzMlwiLFxuICAgIG5hbWU6IFwiaGFzaGVkVmVyaWZpZXJJZFwiLFxuICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gIH1dLFxuICBuYW1lOiBcImdldE5vZGVTZXRcIixcbiAgb3V0cHV0czogW3tcbiAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgIG5hbWU6IFwiY3VycmVudEVwb2NoXCIsXG4gICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgfSwge1xuICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdbXVwiLFxuICAgIG5hbWU6IFwidG9ydXNOb2RlRW5kcG9pbnRzXCIsXG4gICAgdHlwZTogXCJzdHJpbmdbXVwiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NltdXCIsXG4gICAgbmFtZTogXCJ0b3J1c05vZGVQdWJYXCIsXG4gICAgdHlwZTogXCJ1aW50MjU2W11cIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZbXVwiLFxuICAgIG5hbWU6IFwidG9ydXNOb2RlUHViWVwiLFxuICAgIHR5cGU6IFwidWludDI1NltdXCJcbiAgfSwge1xuICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2W11cIixcbiAgICBuYW1lOiBcInRvcnVzSW5kZXhlc1wiLFxuICAgIHR5cGU6IFwidWludDI1NltdXCJcbiAgfV0sXG4gIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gIHR5cGU6IFwiZnVuY3Rpb25cIlxufV07XG5cbmNsYXNzIE5vZGVEZXRhaWxNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IHtcbiAgICAgIG5ldHdvcmsgPSBFVEhFUkVVTV9ORVRXT1JLLk1BSU5ORVQsXG4gICAgICBwcm94eUFkZHJlc3MgPSBcIjB4ZjIwMzM2ZTE2QjUxODI2MzdmMDk4MjFjMjdCRGUyOWIwQUZjZmU4MFwiXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfY3VycmVudEVwb2NoXCIsIFwiMTlcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdG9ydXNOb2RlRW5kcG9pbnRzXCIsIFtcImh0dHBzOi8vdG9ydXMtMTkudG9ydXNub2RlLmNvbS9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy1ub2RlLmVucy5kb21haW5zL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW5vZGUubWF0aWMubmV0d29yay9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy56aWxsaXFhLm5ldHdvcmsvanJwY1wiLCBcImh0dHBzOi8vdG9ydXMtbWFpbm5ldC5jb3Ntb3MubmV0d29yay9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1czIuZXRoZXJzY2FuLmNvbS9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy1ub2RlLXYyLnNrYWxlbGFicy5jb20vanJwY1wiLCBcImh0dHBzOi8vdG9ydXMtbm9kZS5iaW5hbmNleC5kZXYvanJwY1wiLCBcImh0dHBzOi8vdG9ydXNub2RlLm9udC5pby9qcnBjXCJdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90b3J1c05vZGVQdWJcIiwgW3tcbiAgICAgIFg6IFwiYmJlODNjNjQxNzdjMzc3NTU1MGU2YmE2YWMyYmMwNTlmNjg0N2Q2NDRjOWU0ODk0ZTQyYzYwZDc5NzRkOGMyYlwiLFxuICAgICAgWTogXCI4MmI0OWE3Y2FmNzBkZWYzOGNkYWQyNzQwYWY0NWMxZTRmOTY5NjUwMTA1YzUwMTlhMjliYjE4YjIxYTlhY2I1XCJcbiAgICB9LCB7XG4gICAgICBYOiBcImMyMDhjYWM0ZWY5YTQ3ZDM4NjA5N2E5YzkxNWIyOGU5Y2I4OTIxM2FiZWU4ZDI2YTE3MTk4ZWUyNjEyMDFiMGRcIixcbiAgICAgIFk6IFwiYzdkYjJmZTQ2MzExMDlmNDA4MzNkZTlkYzc4ZDA3ZTM1NzA2NTQ5ZWU0OGZhNTU3YjMzZTRlNzVlMTA0Nzg3M1wiXG4gICAgfSwge1xuICAgICAgWDogXCJjYTE3NjZiYjQyNmQ0Y2E1NTgyODE4YTBjNTQzOWQ1NjBlYTY0ZjViYWEwNjA3OTNhYjI5ZGQzZDBjZWFjZmVcIixcbiAgICAgIFk6IFwiZDQ2YzFkMDhjNDBlMTMwNmUxYmNhMzI4YzIyODdiODI2ODE2NmIxMWExYmE0Yjg0NDJlYTJhZDBjNWUzMjE1MlwiXG4gICAgfSwge1xuICAgICAgWDogXCJjMzkzNGRkMmY2ZjRiM2QyZTFlMzk4Y2M1MDFlMTQzYzFlMWEzODFiNTJmZWI2ZDE1MjVhZjM0ZDE2MjUzNzY4XCIsXG4gICAgICBZOiBcIjcxZjUxNDFhNTAzNTc5OTA5OWY1ZWEzZTI0MWU2Njk0NmJjNTVkYzg1N2FjM2JkN2Q2ZmNkYjhkY2QzZWVlZWZcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiMjJlNjZmMTkyOTYzMWQwMGJmMDI2MjI3NTgxNTk3ZjA4NWZkOTRmZDk1MmZjMGRjYTlmMDgzMzM5OGI1YzA2NFwiLFxuICAgICAgWTogXCI2MDg4YjM5MTJlMTBhMWU5ZDUwMzU1YTYwOWMxMGRiN2QxODhmMTZhMmUyZmQ3MzU3ZTUxYmY0ZjZhNzRmMGExXCJcbiAgICB9LCB7XG4gICAgICBYOiBcIjlkYzlmYTQxMGYzY2U5ZWI3MGRmNzBjZGVhMDBhNDlmMmM0Y2M3YTMxYzA4YzBkYWI1Zjg2M2VkMzVmZjUxMzlcIixcbiAgICAgIFk6IFwiNjI3YTI5MWNiODdhNzVjNjFkYTNmNjVkNjgxOGUxZTA1ZTM2MDIxNzE3OTgxN2VkMjdlOGM3M2JjYTdlYzEyMlwiXG4gICAgfSwge1xuICAgICAgWDogXCIxMThiOWZjMDdlOTdiMDk2ZDg5OWI5ZjY2NTg0NjNjZTZhOGNhYTY0MDM4ZTM3ZmM5NjlkZjRlNjAyM2RkOGM2XCIsXG4gICAgICBZOiBcImJhZjlmYTRlNTE3NzBmNDc5NmVhMTY1ZGQwM2E3NjliODYwNjY4MWEzODk1NGEwYTkyYzRjYmZmZDY2MDljZTlcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiOGE2ZDhiOTI1ZGExNWEyNzNkZWMzZDhmODM5NWVjMzVjZDY4NzhmMjc0YjJiMTgwZTRlMTA2OTk5ZGI2NDA0M1wiLFxuICAgICAgWTogXCI5NmY2N2Y4NzBjMTU3NzQzZGEwYjFlYjg0ZDg5YmYzMDUwMGQ3NGRjODRjMTFmNTAxZWUxY2IwMTNhY2M4YzQ2XCJcbiAgICB9LCB7XG4gICAgICBYOiBcIjM5Y2VjYjYyZTg2MzcyOWY1NzJmN2RmYzQ2YzI0ODY3OTgxYmYwNGJiNDA1ZmVkMGRmMzllMzM5ODRiZmFkZTVcIixcbiAgICAgIFk6IFwiNjFjMjM2NDQzNDAxMmU2OGEyYmUyZTk5NTI4MDUwMzdlNTI2MjlkNzc2MmZhZmM4ZTEwZTlmYjViYWQ4Zjc5MFwiXG4gICAgfV0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RvcnVzSW5kZXhlc1wiLCBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX25ldHdvcmtcIiwgRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVUKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5vZGVMaXN0QWRkcmVzc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXBkYXRlZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibm9kZUxpc3RDb250cmFjdFwiLCB2b2lkIDApO1xuXG4gICAgbGV0IHVybDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NhbFVybCA9IG5ldyBVUkwobmV0d29yayk7XG4gICAgICB1cmwgPSBsb2NhbFVybC5ocmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IFwiYjhjZGIwZTRjZmYyNDU5OWEyODZiZjhlODdmZjFjOTZcIjtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9cIi5jb25jYXQobmV0d29yaywgXCIuaW5mdXJhLmlvL3YzL1wiKS5jb25jYXQocHJvamVjdElkKTtcbiAgICB9XG5cbiAgICBXZWIzRXRoQ29udHJhY3Quc2V0UHJvdmlkZXIodXJsKTtcbiAgICB0aGlzLm5vZGVMaXN0Q29udHJhY3QgPSBuZXcgV2ViM0V0aENvbnRyYWN0KGFiaSwgcHJveHlBZGRyZXNzKTtcbiAgICB0aGlzLm5vZGVMaXN0QWRkcmVzcyA9IHByb3h5QWRkcmVzcztcbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9uZXR3b3JrID0gbmV0d29yaztcbiAgfVxuXG4gIGdldCBfbm9kZURldGFpbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRFcG9jaDogdGhpcy5fY3VycmVudEVwb2NoLFxuICAgICAgbm9kZUxpc3RBZGRyZXNzOiB0aGlzLm5vZGVMaXN0QWRkcmVzcyxcbiAgICAgIHRvcnVzTm9kZUVuZHBvaW50czogdGhpcy5fdG9ydXNOb2RlRW5kcG9pbnRzLFxuICAgICAgdG9ydXNOb2RlUHViOiB0aGlzLl90b3J1c05vZGVQdWIsXG4gICAgICB0b3J1c0luZGV4ZXM6IHRoaXMuX3RvcnVzSW5kZXhlcyxcbiAgICAgIHVwZGF0ZWQ6IHRoaXMudXBkYXRlZFxuICAgIH07XG4gIH1cblxuICBhc3luYyBnZXROb2RlRGV0YWlscyhfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIHNraXAgPSBmYWxzZSxcbiAgICAgIHZlcmlmaWVyLFxuICAgICAgdmVyaWZpZXJJZFxuICAgIH0gPSBfcmVmO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChza2lwICYmIHRoaXMuX25ldHdvcmsgPT09IEVUSEVSRVVNX05FVFdPUksuTUFJTk5FVCkgcmV0dXJuIHRoaXMuX25vZGVEZXRhaWxzOyAvLyBEbyB0aGlzIG9ubHkgZm9yIG1haW5uZXQgd2hlcmUgdGhlIGxpc3QgaXMgc3RhdGljIGlycmVzcGVjdGl2ZSBvZiB2ZXJpZmllciwgdmVyaWZpZXJJZFxuXG4gICAgICBpZiAodGhpcy51cGRhdGVkICYmIHRoaXMuX25ldHdvcmsgPT09IEVUSEVSRVVNX05FVFdPUksuTUFJTk5FVCkgcmV0dXJuIHRoaXMuX25vZGVEZXRhaWxzO1xuICAgICAgY29uc3QgaGFzaGVkVmVyaWZpZXJJZCA9IGtlY2NhazI1Nih2ZXJpZmllcklkKTtcbiAgICAgIGNvbnN0IG5vZGVEZXRhaWxzID0gYXdhaXQgdGhpcy5ub2RlTGlzdENvbnRyYWN0Lm1ldGhvZHMuZ2V0Tm9kZVNldCh2ZXJpZmllciwgaGFzaGVkVmVyaWZpZXJJZCkuY2FsbCgpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXJyZW50RXBvY2gsXG4gICAgICAgIHRvcnVzTm9kZUVuZHBvaW50cyxcbiAgICAgICAgdG9ydXNOb2RlUHViWCxcbiAgICAgICAgdG9ydXNOb2RlUHViWSxcbiAgICAgICAgdG9ydXNJbmRleGVzXG4gICAgICB9ID0gbm9kZURldGFpbHM7XG4gICAgICB0aGlzLl9jdXJyZW50RXBvY2ggPSBjdXJyZW50RXBvY2g7XG4gICAgICB0aGlzLl90b3J1c0luZGV4ZXMgPSB0b3J1c0luZGV4ZXMubWFwKHggPT4gTnVtYmVyKHgpKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRFbmRwb2ludHMgPSBbXTtcbiAgICAgIGNvbnN0IHVwZGF0ZWROb2RlUHViID0gW107XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3J1c05vZGVFbmRwb2ludHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGVuZFBvaW50RWxlbWVudCA9IHRvcnVzTm9kZUVuZHBvaW50c1tpbmRleF07XG4gICAgICAgIGNvbnN0IHB1Ykt4ID0gdG9ydXNOb2RlUHViWFtpbmRleF07XG4gICAgICAgIGNvbnN0IHB1Ykt5ID0gdG9ydXNOb2RlUHViWVtpbmRleF07XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwczovL1wiLmNvbmNhdChlbmRQb2ludEVsZW1lbnQuc3BsaXQoXCI6XCIpWzBdLCBcIi9qcnBjXCIpO1xuICAgICAgICB1cGRhdGVkRW5kcG9pbnRzLnB1c2goZW5kcG9pbnQpO1xuICAgICAgICB1cGRhdGVkTm9kZVB1Yi5wdXNoKHtcbiAgICAgICAgICBYOiB0b0hleChwdWJLeCkucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxuICAgICAgICAgIFk6IHRvSGV4KHB1Ykt5KS5yZXBsYWNlKFwiMHhcIiwgXCJcIilcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RvcnVzTm9kZUVuZHBvaW50cyA9IHVwZGF0ZWRFbmRwb2ludHM7XG4gICAgICB0aGlzLl90b3J1c05vZGVQdWIgPSB1cGRhdGVkTm9kZVB1YjtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5fbm9kZURldGFpbHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLl9uZXR3b3JrID09PSBFVEhFUkVVTV9ORVRXT1JLLk1BSU5ORVQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGVEZXRhaWxzO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgeyBFVEhFUkVVTV9ORVRXT1JLLCBhYmksIE5vZGVEZXRhaWxNYW5hZ2VyIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZldGNoTm9kZURldGFpbHMuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gubWVyZ2UnO1xuaW1wb3J0IGxvZ0xldmVsLCB7IGxldmVscyB9IGZyb20gJ2xvZ2xldmVsJztcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbmNvbnN0IGxvZyA9IGxvZ0xldmVsLmdldExvZ2dlcihcImh0dHAtaGVscGVyc1wiKTtcbmxvZy5zZXRMZXZlbChsZXZlbHMuSU5GTyk7XG5sZXQgYXBpS2V5ID0gXCJ0b3J1cy1kZWZhdWx0XCI7XG5sZXQgZW1iZWRIb3N0ID0gXCJcIjsgLy8gI3JlZ2lvbiBBUEkgS2V5c1xuXG5jb25zdCBnYXRld2F5QXV0aEhlYWRlciA9IFwieC1hcGkta2V5XCI7XG5jb25zdCBnYXRld2F5RW1iZWRIb3N0SGVhZGVyID0gXCJ4LWVtYmVkLWhvc3RcIjtcbmZ1bmN0aW9uIHNldEVtYmVkSG9zdChlbWJlZEhvc3RfKSB7XG4gIGVtYmVkSG9zdCA9IGVtYmVkSG9zdF87XG59XG5mdW5jdGlvbiBjbGVhckVtYmVkSG9zdCgpIHtcbiAgZW1iZWRIb3N0ID0gXCJcIjtcbn1cbmZ1bmN0aW9uIGdldEVtYmVkSG9zdCgpIHtcbiAgcmV0dXJuIGVtYmVkSG9zdDtcbn1cbmZ1bmN0aW9uIHNldEFQSUtleShhcGlLZXlfKSB7XG4gIGFwaUtleSA9IGFwaUtleV87XG59XG5mdW5jdGlvbiBjbGVhckFQSUtleSgpIHtcbiAgYXBpS2V5ID0gXCJ0b3J1cy1kZWZhdWx0XCI7XG59XG5mdW5jdGlvbiBnZXRBUElLZXkoKSB7XG4gIHJldHVybiBhcGlLZXk7XG59IC8vICNlbmRyZWdpb25cblxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHtcbiAgbG9nLnNldExldmVsKGxldmVsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXBpS2V5SGVhZGVycygpIHtcbiAgY29uc3QgaGVhZGVycyA9IHt9O1xuICBpZiAoYXBpS2V5KSBoZWFkZXJzW2dhdGV3YXlBdXRoSGVhZGVyXSA9IGFwaUtleTtcbiAgaWYgKGVtYmVkSG9zdCkgaGVhZGVyc1tnYXRld2F5RW1iZWRIb3N0SGVhZGVyXSA9IGVtYmVkSG9zdDtcbiAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbmZ1bmN0aW9uIGRlYnVnTG9nUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgbG9nLmluZm8oXCJSZXNwb25zZTogXCIuY29uY2F0KHJlc3BvbnNlLnN0YXR1cywgXCIgXCIpLmNvbmNhdChyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gIGxvZy5pbmZvKFwiVXJsOiBcIi5jb25jYXQocmVzcG9uc2UudXJsKSk7XG59XG5cbmNvbnN0IHByb21pc2VUaW1lb3V0ID0gKG1zLCBwcm9taXNlKSA9PiB7XG4gIGNvbnN0IHRpbWVvdXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICByZWplY3QobmV3IEVycm9yKFwiVGltZWQgb3V0IGluIFwiLmNvbmNhdChtcywgXCJtc1wiKSkpO1xuICAgIH0sIG1zKTtcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLnJhY2UoW3Byb21pc2UsIHRpbWVvdXRdKTtcbn07XG5jb25zdCBnZXQgPSBhc3luYyBmdW5jdGlvbiAodXJsKSB7XG4gIGxldCBvcHRpb25zXyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGxldCBjdXN0b21PcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge31cbiAgfTtcblxuICBpZiAoY3VzdG9tT3B0aW9ucy51c2VBUElLZXkpIHtcbiAgICBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzKSwgZ2V0QXBpS2V5SGVhZGVycygpKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9uc18sIHtcbiAgICBtZXRob2Q6IFwiR0VUXCJcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgZGVidWdMb2dSZXNwb25zZShyZXNwb25zZSk7XG4gIHRocm93IHJlc3BvbnNlO1xufTtcbmNvbnN0IHBvc3QgPSBmdW5jdGlvbiAodXJsKSB7XG4gIGxldCBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgbGV0IG9wdGlvbnNfID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgbGV0IGN1c3RvbU9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIlxuICAgIH1cbiAgfTtcblxuICBpZiAoY3VzdG9tT3B0aW9ucy51c2VBUElLZXkpIHtcbiAgICBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzKSwgZ2V0QXBpS2V5SGVhZGVycygpKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9uc18sIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiXG4gIH0pOyAvLyBkZWVwIG1lcmdlIGNoYW5nZXMgdGhlIHN0cnVjdHVyZSBvZiBmb3JtIGRhdGEgYW5kIHVybCBlbmNvZGVkIGRhdGEgLFxuICAvLyBzbyB3ZSBzaG91bGQgbm90IGRlZXBtZXJnZSBib2R5IGRhdGFcblxuICBpZiAoY3VzdG9tT3B0aW9ucy5pc1VybEVuY29kZWREYXRhKSB7XG4gICAgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgICAvLyBhbG9uZyB3aXRoIG11bHRpcGFydCBib3VuZGFyeSAsIHNvIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBzZW5kXG4gICAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG4gICAgb3B0aW9ucy5ib2R5ID0gZGF0YTsgLy8gSWYgdXJsIGVuY29kZWQgZGF0YSwgdGhpcyBtdXN0IG5vdCBiZSB0aGUgY29udGVudCB0eXBlXG5cbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIikgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlVGltZW91dChjdXN0b21PcHRpb25zLnRpbWVvdXQgfHwgNjAwMDAsIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cblxuICAgIGRlYnVnTG9nUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIHRocm93IHJlc3BvbnNlO1xuICB9KSk7XG59O1xuY29uc3QgcGF0Y2ggPSBhc3luYyBmdW5jdGlvbiAodXJsKSB7XG4gIGxldCBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgbGV0IG9wdGlvbnNfID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgbGV0IGN1c3RvbU9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIlxuICAgIH1cbiAgfTsgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cblxuICBpZiAoY3VzdG9tT3B0aW9ucy51c2VBUElLZXkpIHtcbiAgICBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzKSwgZ2V0QXBpS2V5SGVhZGVycygpKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9uc18sIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIlxuICB9KTsgLy8gZGVlcCBtZXJnZSBjaGFuZ2VzIHRoZSBzdHJ1Y3R1cmUgb2YgZm9ybSBkYXRhIGFuZCB1cmwgZW5jb2RlZCBkYXRhICxcbiAgLy8gc28gd2Ugc2hvdWxkIG5vdCBkZWVwbWVyZ2UgYm9keSBkYXRhXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMuaXNVcmxFbmNvZGVkRGF0YSkge1xuICAgIC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gICAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAgIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuICAgIG9wdGlvbnMuYm9keSA9IGRhdGE7IC8vIElmIHVybCBlbmNvZGVkIGRhdGEsIHRoaXMgbXVzdCBub3QgYmUgdGhlIGNvbnRlbnQgdHlwZVxuXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl07XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIGRlYnVnTG9nUmVzcG9uc2UocmVzcG9uc2UpO1xuICB0aHJvdyByZXNwb25zZTtcbn07XG5jb25zdCByZW1vdmUgPSBhc3luYyBmdW5jdGlvbiAodXJsKSB7XG4gIGxldCBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgbGV0IG9wdGlvbnNfID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgbGV0IGN1c3RvbU9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIlxuICAgIH1cbiAgfTsgLy8gZm9yIG11bHRpcGFydCByZXF1ZXN0IGJyb3dzZXIvY2xpZW50IHdpbGwgYWRkIG11bHRpcGFydCBjb250ZW50IHR5cGVcbiAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cblxuICBpZiAoY3VzdG9tT3B0aW9ucy51c2VBUElLZXkpIHtcbiAgICBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0T3B0aW9ucy5oZWFkZXJzKSwgZ2V0QXBpS2V5SGVhZGVycygpKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9uc18sIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCJcbiAgfSk7XG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMuaXNVcmxFbmNvZGVkRGF0YSkge1xuICAgIC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gICAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAgIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuICAgIG9wdGlvbnMuYm9keSA9IGRhdGE7IC8vIElmIHVybCBlbmNvZGVkIGRhdGEsIHRoaXMgbXVzdCBub3QgYmUgdGhlIGNvbnRlbnQgdHlwZVxuXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl07XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIGRlYnVnTG9nUmVzcG9uc2UocmVzcG9uc2UpO1xuICB0aHJvdyByZXNwb25zZTtcbn07XG5jb25zdCBnZW5lcmF0ZUpzb25SUENPYmplY3QgPSAobWV0aG9kLCBwYXJhbWV0ZXJzKSA9PiAoe1xuICBqc29ucnBjOiBcIjIuMFwiLFxuICBtZXRob2QsXG4gIGlkOiAxMCxcbiAgcGFyYW1zOiBwYXJhbWV0ZXJzXG59KTtcbmNvbnN0IHByb21pc2VSYWNlID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBsZXQgdGltZW91dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogNjAwMDA7XG4gIHJldHVybiBQcm9taXNlLnJhY2UoW2dldCh1cmwsIG9wdGlvbnMpLCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWplY3QobmV3IEVycm9yKFwidGltZWQgb3V0XCIpKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfSldKTtcbn07XG5cbmV4cG9ydCB7IGNsZWFyQVBJS2V5LCBjbGVhckVtYmVkSG9zdCwgZ2F0ZXdheUF1dGhIZWFkZXIsIGdhdGV3YXlFbWJlZEhvc3RIZWFkZXIsIGdlbmVyYXRlSnNvblJQQ09iamVjdCwgZ2V0LCBnZXRBUElLZXksIGdldEVtYmVkSG9zdCwgcGF0Y2gsIHBvc3QsIHByb21pc2VSYWNlLCBwcm9taXNlVGltZW91dCwgcmVtb3ZlLCBzZXRBUElLZXksIHNldEVtYmVkSG9zdCwgc2V0TG9nTGV2ZWwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHBIZWxwZXJzLmVzbS5qcy5tYXBcbiIsImltcG9ydCByYW5kb21ieXRlcyBmcm9tICdyYW5kb21ieXRlcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IGJhc2U2NHVybExpYiBmcm9tICdiYXNlNjR1cmwnO1xuaW1wb3J0IGtlY2Nha0xpYiBmcm9tICdrZWNjYWsnO1xuXG5jb25zdCByYW5kb21JZCA9ICgpID0+IHJhbmRvbWJ5dGVzKDMyKS50b1N0cmluZyhcImhleFwiKTtcblxuY2xhc3MgVVJMV2l0aEhhc2hQYXJhbXMgZXh0ZW5kcyBVUkwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFzaFBhcmFtc1wiLCBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgdGhpcy5oYXNoID0gdGhpcy5oYXNoUGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHN1cGVyLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH1cblxufVxuXG5jb25zdCBiYXNlNjR1cmwgPSBiYXNlNjR1cmxMaWI7XG5mdW5jdGlvbiBzYWZlYnRvYShzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NHVybC5lbmNvZGUoc3RyKTtcbn1cbmZ1bmN0aW9uIHNhZmVhdG9iKHN0cikge1xuICAvLyBHb2luZyBiYWNrd2FyZHM6IGZyb20gYnl0ZXN0cmVhbSwgdG8gcGVyY2VudC1lbmNvZGluZywgdG8gb3JpZ2luYWwgc3RyaW5nLlxuICByZXR1cm4gYmFzZTY0dXJsLmRlY29kZShzdHIpO1xufVxuY29uc3Qga2VjY2FrID0ga2VjY2FrTGliO1xuZnVuY3Rpb24gYmFzZTY0dG9KU09OKGI2NHN0cikge1xuICByZXR1cm4gSlNPTi5wYXJzZShiYXNlNjR1cmwuZGVjb2RlKGI2NHN0cikpO1xufVxuZnVuY3Rpb24ganNvblRvQmFzZTY0KGpzb24pIHtcbiAgcmV0dXJuIGJhc2U2NHVybC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkoanNvbikpO1xufVxuZnVuY3Rpb24ga2VjY2FrMjU2KHN0cikge1xuICBsZXQgaW5wdXQgPSBzdHI7XG5cbiAgaWYgKHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIgJiYgc3RyLnNsaWNlKDAsIDIpID09PSBcIjB4XCIgJiYgc3RyLmxlbmd0aCA9PT0gNjYpIHtcbiAgICBpbnB1dCA9IEJ1ZmZlci5mcm9tKHN0ci5zbGljZSgyKSwgXCJoZXhcIik7XG4gIH1cblxuICBjb25zdCBkYXRhID0gXCIweFwiLmNvbmNhdChrZWNjYWsoXCJrZWNjYWsyNTZcIikudXBkYXRlKGlucHV0KS5kaWdlc3QoXCJoZXhcIikucGFkU3RhcnQoNjQsIFwiMFwiKSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgeyBVUkxXaXRoSGFzaFBhcmFtcywgYmFzZTY0dG9KU09OLCBiYXNlNjR1cmwsIGpzb25Ub0Jhc2U2NCwga2VjY2FrLCBrZWNjYWsyNTYsIHJhbmRvbUlkLCBzYWZlYXRvYiwgc2FmZWJ0b2EgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZW5sb2dpblV0aWxzLmVzbS5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgeyBEdXBsZXggfSBmcm9tICdyZWFkYWJsZS1zdHJlYW0nO1xuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICdAdG9ydXNsYWJzL29wZW5sb2dpbi11dGlscyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdmYXN0LXNhZmUtc3RyaW5naWZ5JztcbmltcG9ydCB7IHNlcmlhbGl6ZUVycm9yIH0gZnJvbSAnZXRoLXJwYy1lcnJvcnMnO1xuaW1wb3J0IGVvcyBmcm9tICdlbmQtb2Ytc3RyZWFtJztcbmltcG9ydCBvbmNlIGZyb20gJ29uY2UnO1xuaW1wb3J0IHB1bXAgZnJvbSAncHVtcCc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IFNZTiA9IFwiU1lOXCI7XG5jb25zdCBBQ0sgPSBcIkFDS1wiO1xuY29uc3QgQlJLID0gXCJCUktcIjtcbmNsYXNzIEJhc2VQb3N0TWVzc2FnZVN0cmVhbSBleHRlbmRzIER1cGxleCB7XG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgbmFtZSxcbiAgICAgIHRhcmdldCxcbiAgICAgIHRhcmdldFdpbmRvdyA9IHdpbmRvdyxcbiAgICAgIHRhcmdldE9yaWdpbiA9IFwiKlwiXG4gICAgfSA9IF9yZWY7XG4gICAgc3VwZXIoe1xuICAgICAgb2JqZWN0TW9kZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2luaXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9oYXZlU3luXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbmFtZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RhcmdldFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RhcmdldFdpbmRvd1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RhcmdldE9yaWdpblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX29uTWVzc2FnZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3N5bkludGVydmFsSWRcIiwgdm9pZCAwKTtcblxuICAgIGlmICghbmFtZSB8fCAhdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0LlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbml0ID0gZmFsc2U7XG4gICAgdGhpcy5faGF2ZVN5biA9IGZhbHNlO1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDsgLy8gdGFyZ2V0IG9yaWdpblxuXG4gICAgdGhpcy5fdGFyZ2V0V2luZG93ID0gdGFyZ2V0V2luZG93O1xuICAgIHRoaXMuX3RhcmdldE9yaWdpbiA9IHRhcmdldE9yaWdpbjtcbiAgICB0aGlzLl9vbk1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3N5bkludGVydmFsSWQgPSBudWxsO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9vbk1lc3NhZ2UsIGZhbHNlKTtcblxuICAgIHRoaXMuX2hhbmRTaGFrZSgpO1xuICB9XG5cbiAgX2JyZWFrKCkge1xuICAgIHRoaXMuY29yaygpO1xuXG4gICAgdGhpcy5fd3JpdGUoQlJLLCBudWxsLCBub29wKTtcblxuICAgIHRoaXMuX2hhdmVTeW4gPSBmYWxzZTtcbiAgICB0aGlzLl9pbml0ID0gZmFsc2U7XG4gIH1cblxuICBfaGFuZFNoYWtlKCkge1xuICAgIHRoaXMuX3dyaXRlKFNZTiwgbnVsbCwgbm9vcCk7XG5cbiAgICB0aGlzLmNvcmsoKTtcbiAgfVxuXG4gIF9vbkRhdGEoZGF0YSkge1xuICAgIGlmICghdGhpcy5faW5pdCkge1xuICAgICAgLy8gbGlzdGVuIGZvciBoYW5kc2hha2VcbiAgICAgIGlmIChkYXRhID09PSBTWU4pIHtcbiAgICAgICAgdGhpcy5faGF2ZVN5biA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fd3JpdGUoQUNLLCBudWxsLCBub29wKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gQUNLKSB7XG4gICAgICAgIHRoaXMuX2luaXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdGhpcy5faGF2ZVN5bikge1xuICAgICAgICAgIHRoaXMuX3dyaXRlKEFDSywgbnVsbCwgbm9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVuY29yaygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gQlJLKSB7XG4gICAgICB0aGlzLl9icmVhaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3J3YXJkIG1lc3NhZ2VcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucHVzaChkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wb3N0TWVzc2FnZShkYXRhKSB7XG4gICAgY29uc3Qgb3JpZ2luQ29uc3RyYWludCA9IHRoaXMuX3RhcmdldE9yaWdpbjtcblxuICAgIHRoaXMuX3RhcmdldFdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICB0YXJnZXQ6IHRoaXMuX3RhcmdldCxcbiAgICAgIGRhdGFcbiAgICB9LCBvcmlnaW5Db25zdHJhaW50KTtcbiAgfVxuXG4gIG9uTWVzc2FnZShldmVudCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhOyAvLyB2YWxpZGF0ZSBtZXNzYWdlXG5cbiAgICBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luICE9PSBcIipcIiAmJiBldmVudC5vcmlnaW4gIT09IHRoaXMuX3RhcmdldE9yaWdpbiB8fCBldmVudC5zb3VyY2UgIT09IHRoaXMuX3RhcmdldFdpbmRvdyB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIiB8fCBtZXNzYWdlLnRhcmdldCAhPT0gdGhpcy5fbmFtZSB8fCAhbWVzc2FnZS5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25EYXRhKG1lc3NhZ2UuZGF0YSk7XG4gIH1cblxuICBfcmVhZCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgX3dyaXRlKGRhdGEsIF8sIGNiKSB7XG4gICAgdGhpcy5fcG9zdE1lc3NhZ2UoZGF0YSk7XG5cbiAgICBjYigpO1xuICB9XG5cbiAgX2Rlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX29uTWVzc2FnZSwgZmFsc2UpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gc2FmZUFwcGx5KGhhbmRsZXIsIGNvbnRleHQsIGFyZ3MpIHtcbiAgdHJ5IHtcbiAgICBSZWZsZWN0LmFwcGx5KGhhbmRsZXIsIGNvbnRleHQsIGFyZ3MpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUaHJvdyBlcnJvciBhZnRlciB0aW1lb3V0IHNvIGFzIG5vdCB0byBpbnRlcnJ1cHQgdGhlIHN0YWNrXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIpIHtcbiAgY29uc3QgbiA9IGFyci5sZW5ndGg7XG4gIGNvbnN0IGNvcHkgPSBuZXcgQXJyYXkobik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmNsYXNzIFNhZmVFdmVudEVtaXR0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBlbWl0KHR5cGUpIHtcbiAgICBsZXQgZG9FcnJvciA9IHR5cGUgPT09IFwiZXJyb3JcIjtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvRXJyb3IgPSBkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoIWRvRXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cblxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGRvRXJyb3IpIHtcbiAgICAgIGxldCBlcjtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBbZXJdID0gYXJncztcbiAgICAgIH1cblxuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG5cblxuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiVW5oYW5kbGVkIGVycm9yLlwiLmNvbmNhdChlciA/IFwiIChcIi5jb25jYXQoZXIubWVzc2FnZSwgXCIpXCIpIDogXCJcIikpO1xuICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBzYWZlQXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBzYWZlQXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG5cbmNsYXNzIFNlcmlhbGl6YWJsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIGNvZGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZGF0YVxuICAgIH0gPSBfcmVmO1xuXG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb2RlIG11c3QgYmUgYW4gaW50ZWdlclwiKTtcbiAgICB9XG5cbiAgICBpZiAoIW1lc3NhZ2UgfHwgdHlwZW9mIG1lc3NhZ2UgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm1lc3NhZ2UgbXVzdCBiZSBzdHJpbmdcIik7XG4gICAgfVxuXG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb2RlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkYXRhXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuXG4gICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5KHtcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrXG4gICAgfSk7XG4gIH1cblxufVxuXG5jb25zdCBnZXRScGNQcm9taXNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGxldCB1bndyYXBSZXN1bHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gIHJldHVybiAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IgfHwgcmVzcG9uc2UuZXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoIXVud3JhcFJlc3VsdCB8fCBBcnJheS5pc0FycmF5KHJlc3BvbnNlKSkge1xuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcbiAgICB9XG4gIH07XG59O1xuZnVuY3Rpb24gY3JlYXRlRXJyb3JNaWRkbGV3YXJlKGxvZykge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8ganNvbi1ycGMtZW5naW5lIHdpbGwgdGVybWluYXRlIHRoZSByZXF1ZXN0IHdoZW4gaXQgbm90aWNlcyB0aGlzIGVycm9yXG4gICAgICBpZiAodHlwZW9mIHJlcS5tZXRob2QgIT09IFwic3RyaW5nXCIgfHwgIXJlcS5tZXRob2QpIHtcbiAgICAgICAgcmVzLmVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgICAgbWVzc2FnZTogXCJpbnZhbGlkIG1ldGhvZFwiXG4gICAgICAgIH0pO1xuICAgICAgICBlbmQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KGRvbmUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgfSA9IHJlcztcblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5lcnJvcihcIk9wZW5Mb2dpbiAtIFJQQyBFcnJvcjogXCIuY29uY2F0KGVycm9yLm1lc3NhZ2UpLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKFwiT3BlbkxvZ2luIC0gUlBDIEVycm9yIHRocm93bjogXCIuY29uY2F0KGVycm9yLm1lc3NhZ2UpLCBlcnJvcik7XG4gICAgICByZXMuZXJyb3IgPSBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0pO1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlU3RyZWFtTWlkZGxld2FyZSgpIHtcbiAgY29uc3QgaWRNYXAgPSB7fTtcblxuICBmdW5jdGlvbiByZWFkTm9vcCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBldmVudHMgPSBuZXcgU2FmZUV2ZW50RW1pdHRlcigpO1xuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShyZXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gaWRNYXBbcmVzLmlkXTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RyZWFtTWlkZGxld2FyZSAtIFVua25vd24gcmVzcG9uc2UgaWQgXFxcIlwiLmNvbmNhdChyZXMuaWQsIFwiXFxcIlwiKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlIGlkTWFwW3Jlcy5pZF07IC8vIGNvcHkgd2hvbGUgcmVzIG9udG8gb3JpZ2luYWwgcmVzXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQucmVzLCByZXMpOyAvLyBydW4gY2FsbGJhY2sgb24gZW1wdHkgc3RhY2ssXG4gICAgLy8gcHJldmVudCBpbnRlcm5hbCBzdHJlYW0taGFuZGxlciBmcm9tIGNhdGNoaW5nIGVycm9yc1xuXG4gICAgc2V0VGltZW91dChjb250ZXh0LmVuZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTm90aWZpY2F0aW9uKHJlcykge1xuICAgIGV2ZW50cy5lbWl0KFwibm90aWZpY2F0aW9uXCIsIHJlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShyZXMsIF9lbmNvZGluZywgY2IpIHtcbiAgICBsZXQgZXJyO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlzTm90aWZpY2F0aW9uID0gIXJlcy5pZDtcblxuICAgICAgaWYgKGlzTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIHByb2Nlc3NOb3RpZmljYXRpb24ocmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3NSZXNwb25zZShyZXMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIGVyciA9IF9lcnI7XG4gICAgfSAvLyBjb250aW51ZSBwcm9jZXNzaW5nIHN0cmVhbVxuXG5cbiAgICBjYihlcnIpO1xuICB9XG5cbiAgY29uc3Qgc3RyZWFtID0gbmV3IER1cGxleCh7XG4gICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICByZWFkOiByZWFkTm9vcCxcbiAgICB3cml0ZTogcHJvY2Vzc01lc3NhZ2VcbiAgfSk7XG5cbiAgY29uc3QgbWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgLy8gd3JpdGUgcmVxIHRvIHN0cmVhbVxuICAgIHN0cmVhbS5wdXNoKHJlcSk7IC8vIHJlZ2lzdGVyIHJlcXVlc3Qgb24gaWQgbWFwXG5cbiAgICBpZE1hcFtyZXEuaWRdID0ge1xuICAgICAgcmVxLFxuICAgICAgcmVzLFxuICAgICAgbmV4dCxcbiAgICAgIGVuZFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHMsXG4gICAgbWlkZGxld2FyZSxcbiAgICBzdHJlYW1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNjYWZmb2xkTWlkZGxld2FyZShoYW5kbGVycykge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNbcmVxLm1ldGhvZF07IC8vIGlmIG5vIGhhbmRsZXIsIHJldHVyblxuXG4gICAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9IC8vIGlmIGhhbmRsZXIgaXMgZm4sIGNhbGwgYXMgbWlkZGxld2FyZVxuXG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMsIG5leHQsIGVuZCk7XG4gICAgfSAvLyBpZiBoYW5kbGVyIGlzIHNvbWUgb3RoZXIgdmFsdWUsIHVzZSBhcyByZXN1bHRcblxuXG4gICAgcmVzLnJlc3VsdCA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIGVuZCgpO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSWRSZW1hcE1pZGRsZXdhcmUoKSB7XG4gIHJldHVybiAocmVxLCByZXMsIG5leHQsIF9lbmQpID0+IHtcbiAgICBjb25zdCBvcmlnaW5hbElkID0gcmVxLmlkO1xuICAgIGNvbnN0IG5ld0lkID0gcmFuZG9tSWQoKTtcbiAgICByZXEuaWQgPSBuZXdJZDtcbiAgICByZXMuaWQgPSBuZXdJZDtcbiAgICBuZXh0KGRvbmUgPT4ge1xuICAgICAgcmVxLmlkID0gb3JpZ2luYWxJZDtcbiAgICAgIHJlcy5pZCA9IG9yaWdpbmFsSWQ7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVMb2dnZXJNaWRkbGV3YXJlKGxvZ2dlcikge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0LCBfKSA9PiB7XG4gICAgbG9nZ2VyLmRlYnVnKFwiUkVRXCIsIHJlcSwgXCJSRVNcIiwgcmVzKTtcbiAgICBuZXh0KCk7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVBc3luY01pZGRsZXdhcmUoYXN5bmNNaWRkbGV3YXJlKSB7XG4gIHJldHVybiBhc3luYyAocmVxLCByZXMsIG5leHQsIGVuZCkgPT4ge1xuICAgIC8vIG5leHRQcm9taXNlIGlzIHRoZSBrZXkgdG8gdGhlIGltcGxlbWVudGF0aW9uXG4gICAgLy8gaXQgaXMgcmVzb2x2ZWQgYnkgdGhlIHJldHVybiBoYW5kbGVyIHBhc3NlZCB0byB0aGVcbiAgICAvLyBcIm5leHRcIiBmdW5jdGlvblxuICAgIGxldCByZXNvbHZlTmV4dFByb21pc2U7XG4gICAgY29uc3QgbmV4dFByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHJlc29sdmVOZXh0UHJvbWlzZSA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbGV0IHJldHVybkhhbmRsZXJDYWxsYmFjayA9IG51bGw7XG4gICAgbGV0IG5leHRXYXNDYWxsZWQgPSBmYWxzZTsgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCBieSB0aGUgY29uc3VtZXIncyBhc3luYyBtaWRkbGV3YXJlLlxuXG4gICAgY29uc3QgYXN5bmNOZXh0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgbmV4dFdhc0NhbGxlZCA9IHRydWU7IC8vIFdlIHBhc3MgYSByZXR1cm4gaGFuZGxlciB0byBuZXh0KCkuIFdoZW4gaXQgaXMgY2FsbGVkIGJ5IHRoZSBlbmdpbmUsXG4gICAgICAvLyB0aGUgY29uc3VtZXIncyBhc3luYyBtaWRkbGV3YXJlIHdpbGwgcmVzdW1lIGV4ZWN1dGluZy5cblxuICAgICAgbmV4dChydW5SZXR1cm5IYW5kbGVyc0NhbGxiYWNrID0+IHtcbiAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBjb21lcyBmcm9tIEpSUENFbmdpbmUuX3J1blJldHVybkhhbmRsZXJzXG4gICAgICAgIHJldHVybkhhbmRsZXJDYWxsYmFjayA9IHJ1blJldHVybkhhbmRsZXJzQ2FsbGJhY2s7XG4gICAgICAgIHJlc29sdmVOZXh0UHJvbWlzZSgpO1xuICAgICAgfSk7XG4gICAgICBhd2FpdCBuZXh0UHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFzeW5jTWlkZGxld2FyZShyZXEsIHJlcywgYXN5bmNOZXh0KTtcblxuICAgICAgaWYgKG5leHRXYXNDYWxsZWQpIHtcbiAgICAgICAgYXdhaXQgbmV4dFByb21pc2U7IC8vIHdlIG11c3Qgd2FpdCB1bnRpbCB0aGUgcmV0dXJuIGhhbmRsZXIgaXMgY2FsbGVkXG5cbiAgICAgICAgcmV0dXJuSGFuZGxlckNhbGxiYWNrKG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKG51bGwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAocmV0dXJuSGFuZGxlckNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybkhhbmRsZXJDYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuLyoqXG4gKiBBIEpTT04tUlBDIHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2Nlc3Nvci5cbiAqIEdpdmUgaXQgYSBzdGFjayBvZiBtaWRkbGV3YXJlLCBwYXNzIGl0IHJlcXVlc3RzLCBhbmQgZ2V0IGJhY2sgcmVzcG9uc2VzLlxuICovXG5cbmNsYXNzIEpSUENFbmdpbmUgZXh0ZW5kcyBTYWZlRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9taWRkbGV3YXJlXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9taWRkbGV3YXJlID0gW107XG4gIH1cbiAgLyoqXG4gICAqIFNlcmlhbGx5IGV4ZWN1dGVzIHRoZSBnaXZlbiBzdGFjayBvZiBtaWRkbGV3YXJlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBhbnkgZXJyb3IgZW5jb3VudGVyZWQgZHVyaW5nIG1pZGRsZXdhcmUgZXhlY3V0aW9uLFxuICAgKiBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByZXF1ZXN0IHdhcyBjb21wbGV0ZWQsIGFuZCBhbiBhcnJheSBvZlxuICAgKiBtaWRkbGV3YXJlLWRlZmluZWQgcmV0dXJuIGhhbmRsZXJzLlxuICAgKi9cblxuXG4gIHN0YXRpYyBhc3luYyBfcnVuQWxsTWlkZGxld2FyZShyZXEsIHJlcywgbWlkZGxld2FyZVN0YWNrKSB7XG4gICAgY29uc3QgcmV0dXJuSGFuZGxlcnMgPSBbXTtcbiAgICBsZXQgZXJyb3IgPSBudWxsO1xuICAgIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7IC8vIEdvIGRvd24gc3RhY2sgb2YgbWlkZGxld2FyZSwgY2FsbCBhbmQgY29sbGVjdCBvcHRpb25hbCByZXR1cm5IYW5kbGVyc1xuXG4gICAgZm9yIChjb25zdCBtaWRkbGV3YXJlIG9mIG1pZGRsZXdhcmVTdGFjaykge1xuICAgICAgW2Vycm9yLCBpc0NvbXBsZXRlXSA9IGF3YWl0IEpSUENFbmdpbmUuX3J1bk1pZGRsZXdhcmUocmVxLCByZXMsIG1pZGRsZXdhcmUsIHJldHVybkhhbmRsZXJzKTtcblxuICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFtlcnJvciwgaXNDb21wbGV0ZSwgcmV0dXJuSGFuZGxlcnMucmV2ZXJzZSgpXTtcbiAgfVxuICAvKipcbiAgICogUnVucyBhbiBpbmRpdmlkdWFsIG1pZGRsZXdhcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGFueSBlcnJvciBlbmNvdW50ZXJlZCBkdXJpbmcgbWlkZGxld2FyZSBleGVjdGlvbixcbiAgICogYW5kIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIGVuZC5cbiAgICovXG5cblxuICBzdGF0aWMgX3J1bk1pZGRsZXdhcmUocmVxLCByZXMsIG1pZGRsZXdhcmUsIHJldHVybkhhbmRsZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgZW5kID0gZXJyID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnIgfHwgcmVzLmVycm9yO1xuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5lcnJvciA9IHNlcmlhbGl6ZUVycm9yKGVycm9yKTtcbiAgICAgICAgfSAvLyBUcnVlIGluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IHNob3VsZCBlbmRcblxuXG4gICAgICAgIHJlc29sdmUoW2Vycm9yLCB0cnVlXSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXh0ID0gcmV0dXJuSGFuZGxlciA9PiB7XG4gICAgICAgIGlmIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICBlbmQocmVzLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocmV0dXJuSGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXR1cm5IYW5kbGVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgZW5kKG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgICAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSlJQQ0VuZ2luZTogJ25leHQnIHJldHVybiBoYW5kbGVycyBtdXN0IGJlIGZ1bmN0aW9uc1wiXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuSGFuZGxlcnMucHVzaChyZXR1cm5IYW5kbGVyKTtcbiAgICAgICAgICB9IC8vIEZhbHNlIGluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IHNob3VsZCBub3QgZW5kXG5cblxuICAgICAgICAgIHJlc29sdmUoW251bGwsIGZhbHNlXSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQsIGVuZCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlbmQoZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXJpYWxseSBleGVjdXRlcyBhcnJheSBvZiByZXR1cm4gaGFuZGxlcnMuIFRoZSByZXF1ZXN0IGFuZCByZXNwb25zZSBhcmVcbiAgICogYXNzdW1lZCB0byBiZSBpbiB0aGVpciBzY29wZS5cbiAgICovXG5cblxuICBzdGF0aWMgYXN5bmMgX3J1blJldHVybkhhbmRsZXJzKGhhbmRsZXJzKSB7XG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIGhhbmRsZXJzKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGhhbmRsZXIoZXJyID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZSgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSByZXNwb25zZSBoYXMgbmVpdGhlciBhIHJlc3VsdCBub3IgYW4gZXJyb3IsIG9yIGlmXG4gICAqIHRoZSBcImlzQ29tcGxldGVcIiBmbGFnIGlzIGZhbHN5LlxuICAgKi9cblxuXG4gIHN0YXRpYyBfY2hlY2tGb3JDb21wbGV0aW9uKHJlcSwgcmVzLCBpc0NvbXBsZXRlKSB7XG4gICAgaWYgKCEoXCJyZXN1bHRcIiBpbiByZXMpICYmICEoXCJlcnJvclwiIGluIHJlcykpIHtcbiAgICAgIHRocm93IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgbWVzc2FnZTogXCJSZXNwb25zZSBoYXMgbm8gZXJyb3Igb3IgcmVzdWx0IGZvciByZXF1ZXN0XCJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghaXNDb21wbGV0ZSkge1xuICAgICAgdGhyb3cgbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBcIk5vdGhpbmcgZW5kZWQgcmVxdWVzdFwiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIG1pZGRsZXdhcmUgZnVuY3Rpb24gdG8gdGhlIGVuZ2luZSdzIG1pZGRsZXdhcmUgc3RhY2suXG4gICAqXG4gICAqIEBwYXJhbSBtaWRkbGV3YXJlIC0gVGhlIG1pZGRsZXdhcmUgZnVuY3Rpb24gdG8gYWRkLlxuICAgKi9cblxuXG4gIHB1c2gobWlkZGxld2FyZSkge1xuICAgIHRoaXMuX21pZGRsZXdhcmUucHVzaChtaWRkbGV3YXJlKTtcbiAgfVxuXG4gIGhhbmRsZShyZXEsIGNiKSB7XG4gICAgaWYgKGNiICYmIHR5cGVvZiBjYiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY2FsbGJhY2tcIiBtdXN0IGJlIGEgZnVuY3Rpb24gaWYgcHJvdmlkZWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVxKSkge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVCYXRjaChyZXEsIGNiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUJhdGNoKHJlcSk7XG4gICAgfVxuXG4gICAgaWYgKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlKHJlcSwgY2IpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9wcm9taXNlSGFuZGxlKHJlcSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhpcyBlbmdpbmUgYXMgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHB1c2hlZCB0byBvdGhlclxuICAgKiBlbmdpbmVzLlxuICAgKlxuICAgKiBAcmV0dXJucyBUaGlzIGVuZ2luZSBhcyBhIG1pZGRsZXdhcmUgZnVuY3Rpb24uXG4gICAqL1xuXG5cbiAgYXNNaWRkbGV3YXJlKCkge1xuICAgIHJldHVybiBhc3luYyAocmVxLCByZXMsIG5leHQsIGVuZCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW21pZGRsZXdhcmVFcnJvciwgaXNDb21wbGV0ZSwgcmV0dXJuSGFuZGxlcnNdID0gYXdhaXQgSlJQQ0VuZ2luZS5fcnVuQWxsTWlkZGxld2FyZShyZXEsIHJlcywgdGhpcy5fbWlkZGxld2FyZSk7XG5cbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICBhd2FpdCBKUlBDRW5naW5lLl9ydW5SZXR1cm5IYW5kbGVycyhyZXR1cm5IYW5kbGVycyk7XG4gICAgICAgICAgcmV0dXJuIGVuZChtaWRkbGV3YXJlRXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQoYXN5bmMgaGFuZGxlckNhbGxiYWNrID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlckNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlckNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVuZChlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIF9oYW5kbGVCYXRjaChyZXFzLCBjYikge1xuICAgIC8vIFRoZSBvcmRlciBoZXJlIGlzIGltcG9ydGFudFxuICAgIHRyeSB7XG4gICAgICAvLyAyLiBXYWl0IGZvciBhbGwgcmVxdWVzdHMgdG8gZmluaXNoLCBvciB0aHJvdyBvbiBzb21lIGtpbmQgb2YgZmF0YWxcbiAgICAgIC8vIGVycm9yXG4gICAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbCggLy8gMS4gQmVnaW4gZXhlY3V0aW5nIGVhY2ggcmVxdWVzdCBpbiB0aGUgb3JkZXIgcmVjZWl2ZWRcbiAgICAgIHJlcXMubWFwKHRoaXMuX3Byb21pc2VIYW5kbGUuYmluZCh0aGlzKSkpOyAvLyAzLiBSZXR1cm4gYmF0Y2ggcmVzcG9uc2VcblxuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBjYihudWxsLCByZXNwb25zZXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBIHByb21pc2Utd3JhcHBlZCBfaGFuZGxlLlxuICAgKi9cblxuXG4gIF9wcm9taXNlSGFuZGxlKHJlcSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZShyZXEsIChfZXJyLCByZXMpID0+IHtcbiAgICAgICAgLy8gVGhlcmUgd2lsbCBhbHdheXMgYmUgYSByZXNwb25zZSwgYW5kIGl0IHdpbGwgYWx3YXlzIGhhdmUgYW55IGVycm9yXG4gICAgICAgIC8vIHRoYXQgaXMgY2F1Z2h0IGFuZCBwcm9wYWdhdGVkLlxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHRoZSByZXF1ZXN0IG9iamVjdCBpcyB2YWxpZCwgcHJvY2Vzc2VzIGl0LCBhbmQgcGFzc2VzIGFueVxuICAgKiBlcnJvciBhbmQgdGhlIHJlc3BvbnNlIG9iamVjdCB0byB0aGUgZ2l2ZW4gY2FsbGJhY2suXG4gICAqXG4gICAqIERvZXMgbm90IHJlamVjdC5cbiAgICovXG5cblxuICBhc3luYyBfaGFuZGxlKGNhbGxlclJlcSwgY2IpIHtcbiAgICBpZiAoIWNhbGxlclJlcSB8fCBBcnJheS5pc0FycmF5KGNhbGxlclJlcSkgfHwgdHlwZW9mIGNhbGxlclJlcSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwicmVxdWVzdCBtdXN0IGJlIHBsYWluIG9iamVjdFwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYihlcnJvciwge1xuICAgICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgICBlcnJvclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsZXJSZXEubWV0aG9kICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgbWVzc2FnZTogXCJtZXRob2QgbXVzdCBiZSBzdHJpbmdcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2IoZXJyb3IsIHtcbiAgICAgICAgaWQ6IGNhbGxlclJlcS5pZCxcbiAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgZXJyb3JcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcSA9IF9vYmplY3RTcHJlYWQkMSh7fSwgY2FsbGVyUmVxKTtcblxuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIGlkOiByZXEuaWQsXG4gICAgICBqc29ucnBjOiByZXEuanNvbnJwY1xuICAgIH07XG4gICAgbGV0IGVycm9yID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9wcm9jZXNzUmVxdWVzdChyZXEsIHJlcyk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAvLyBBIHJlcXVlc3QgaGFuZGxlciBlcnJvciwgYSByZS10aHJvd24gbWlkZGxld2FyZSBlcnJvciwgb3Igc29tZXRoaW5nXG4gICAgICAvLyB1bmV4cGVjdGVkLlxuICAgICAgZXJyb3IgPSBfZXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAvLyBFbnN1cmUgbm8gcmVzdWx0IGlzIHByZXNlbnQgb24gYW4gZXJyb3JlZCByZXNwb25zZVxuICAgICAgZGVsZXRlIHJlcy5yZXN1bHQ7XG5cbiAgICAgIGlmICghcmVzLmVycm9yKSB7XG4gICAgICAgIHJlcy5lcnJvciA9IHNlcmlhbGl6ZUVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2IoZXJyb3IsIHJlcyk7XG4gIH1cbiAgLyoqXG4gICAqIEZvciB0aGUgZ2l2ZW4gcmVxdWVzdCBhbmQgcmVzcG9uc2UsIHJ1bnMgYWxsIG1pZGRsZXdhcmUgYW5kIHRoZWlyIHJldHVyblxuICAgKiBoYW5kbGVycywgaWYgYW55LCBhbmQgZW5zdXJlcyB0aGF0IGludGVybmFsIHJlcXVlc3QgcHJvY2Vzc2luZyBzZW1hbnRpY3NcbiAgICogYXJlIHNhdGlzZmllZC5cbiAgICovXG5cblxuICBhc3luYyBfcHJvY2Vzc1JlcXVlc3QocmVxLCByZXMpIHtcbiAgICBjb25zdCBbZXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzXSA9IGF3YWl0IEpSUENFbmdpbmUuX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIHRoaXMuX21pZGRsZXdhcmUpOyAvLyBUaHJvdyBpZiBcImVuZFwiIHdhcyBub3QgY2FsbGVkLCBvciBpZiB0aGUgcmVzcG9uc2UgaGFzIG5laXRoZXIgYSByZXN1bHRcbiAgICAvLyBub3IgYW4gZXJyb3IuXG5cbiAgICBKUlBDRW5naW5lLl9jaGVja0ZvckNvbXBsZXRpb24ocmVxLCByZXMsIGlzQ29tcGxldGUpOyAvLyBUaGUgcmV0dXJuIGhhbmRsZXJzIHNob3VsZCBydW4gZXZlbiBpZiBhbiBlcnJvciB3YXMgZW5jb3VudGVyZWQgZHVyaW5nXG4gICAgLy8gbWlkZGxld2FyZSBwcm9jZXNzaW5nLlxuXG5cbiAgICBhd2FpdCBKUlBDRW5naW5lLl9ydW5SZXR1cm5IYW5kbGVycyhyZXR1cm5IYW5kbGVycyk7IC8vIE5vdyB3ZSByZS10aHJvdyB0aGUgbWlkZGxld2FyZSBwcm9jZXNzaW5nIGVycm9yLCBpZiBhbnksIHRvIGNhdGNoIGl0XG4gICAgLy8gZnVydGhlciB1cCB0aGUgY2FsbCBjaGFpbi5cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbn1cbmZ1bmN0aW9uIG1lcmdlTWlkZGxld2FyZShtaWRkbGV3YXJlU3RhY2spIHtcbiAgY29uc3QgZW5naW5lID0gbmV3IEpSUENFbmdpbmUoKTtcbiAgbWlkZGxld2FyZVN0YWNrLmZvckVhY2gobWlkZGxld2FyZSA9PiBlbmdpbmUucHVzaChtaWRkbGV3YXJlKSk7XG4gIHJldHVybiBlbmdpbmUuYXNNaWRkbGV3YXJlKCk7XG59XG5mdW5jdGlvbiBjcmVhdGVFbmdpbmVTdHJlYW0ob3B0cykge1xuICBpZiAoIW9wdHMgfHwgIW9wdHMuZW5naW5lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBlbmdpbmUgcGFyYW1ldGVyIVwiKTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBlbmdpbmVcbiAgfSA9IG9wdHM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblxuICBsZXQgc3RyZWFtO1xuXG4gIGZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlKHJlcSwgX2VuY29kaW5nLCBjYikge1xuICAgIGVuZ2luZS5oYW5kbGUocmVxLCAoX2VyciwgcmVzKSA9PiB7XG4gICAgICBzdHJlYW0ucHVzaChyZXMpO1xuICAgIH0pO1xuICAgIGNiKCk7XG4gIH1cblxuICBzdHJlYW0gPSBuZXcgRHVwbGV4KHtcbiAgICBvYmplY3RNb2RlOiB0cnVlLFxuICAgIHJlYWQsXG4gICAgd3JpdGVcbiAgfSk7IC8vIGZvcndhcmQgbm90aWZpY2F0aW9uc1xuXG4gIGlmIChlbmdpbmUub24pIHtcbiAgICBlbmdpbmUub24oXCJub3RpZmljYXRpb25cIiwgbWVzc2FnZSA9PiB7XG4gICAgICBzdHJlYW0ucHVzaChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdHJlYW07XG59XG5cbmNsYXNzIFN1YnN0cmVhbSBleHRlbmRzIER1cGxleCB7XG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgcGFyZW50LFxuICAgICAgbmFtZVxuICAgIH0gPSBfcmVmO1xuICAgIHN1cGVyKHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWVcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9wYXJlbnRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9uYW1lXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cbiAgLyoqXG4gICAqIEV4cGxpY2l0bHkgc2V0cyByZWFkIG9wZXJhdGlvbnMgdG8gYSBuby1vcC5cbiAgICovXG5cblxuICBfcmVhZCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBkYXRhIHNob3VsZCBiZSB3cml0dGVuIHRvIHRoaXMgd3JpdGFibGUgc3RyZWFtLlxuICAgKlxuICAgKiBAcGFyYW0gY2h1bmsgLSBBcmJpdHJhcnkgb2JqZWN0IHRvIHdyaXRlXG4gICAqIEBwYXJhbSBlbmNvZGluZyAtIEVuY29kaW5nIHRvIHVzZSB3aGVuIHdyaXRpbmcgcGF5bG9hZFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBDYWxsZWQgd2hlbiB3cml0aW5nIGlzIGNvbXBsZXRlIG9yIGFuIGVycm9yIG9jY3Vyc1xuICAgKi9cblxuXG4gIF93cml0ZShjaHVuaywgX2VuY29kaW5nLCBjYWxsYmFjaykge1xuICAgIHRoaXMuX3BhcmVudC5wdXNoKHtcbiAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICBkYXRhOiBjaHVua1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5jb25zdCBJR05PUkVfU1VCU1RSRUFNID0gU3ltYm9sKFwiSUdOT1JFX1NVQlNUUkVBTVwiKTtcbmNsYXNzIE9iamVjdE11bHRpcGxleCBleHRlbmRzIER1cGxleCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBzdXBlcihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG9wdHMpLCB7fSwge1xuICAgICAgb2JqZWN0TW9kZTogdHJ1ZVxuICAgIH0pKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zdWJzdHJlYW1zXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRTdHJlYW1cIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX3N1YnN0cmVhbXMgPSB7fTtcbiAgfVxuXG4gIGNyZWF0ZVN0cmVhbShuYW1lKSB7XG4gICAgLy8gdmFsaWRhdGUgbmFtZVxuICAgIGlmICghbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0TXVsdGlwbGV4IC0gbmFtZSBtdXN0IG5vdCBiZSBlbXB0eVwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3Vic3RyZWFtc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0TXVsdGlwbGV4IC0gU3Vic3RyZWFtIGZvciBuYW1lIFxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiIGFscmVhZHkgZXhpc3RzXCIpKTtcbiAgICB9IC8vIGNyZWF0ZSBzdWJzdHJlYW1cblxuXG4gICAgY29uc3Qgc3Vic3RyZWFtID0gbmV3IFN1YnN0cmVhbSh7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lXG4gICAgfSk7XG4gICAgdGhpcy5fc3Vic3RyZWFtc1tuYW1lXSA9IHN1YnN0cmVhbTsgLy8gbGlzdGVuIGZvciBwYXJlbnQgc3RyZWFtIHRvIGVuZFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcblxuICAgIGFueVN0cmVhbUVuZCh0aGlzLCBfZXJyb3IgPT4gc3Vic3RyZWFtLmRlc3Ryb3koX2Vycm9yIHx8IHVuZGVmaW5lZCkpO1xuICAgIHJldHVybiBzdWJzdHJlYW07XG4gIH0gLy8gaWdub3JlIHN0cmVhbXMgKGRvbnQgZGlzcGxheSBvcnBoYW5lZCBkYXRhIHdhcm5pbmcpXG5cblxuICBpZ25vcmVTdHJlYW0obmFtZSkge1xuICAgIC8vIHZhbGlkYXRlIG5hbWVcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIG5hbWUgbXVzdCBub3QgYmUgZW1wdHlcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIFN1YnN0cmVhbSBmb3IgbmFtZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBhbHJlYWR5IGV4aXN0c1wiKSk7XG4gICAgfSAvLyBzZXRcblxuXG4gICAgdGhpcy5fc3Vic3RyZWFtc1tuYW1lXSA9IElHTk9SRV9TVUJTVFJFQU07XG4gIH1cblxuICBfcmVhZCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgX3dyaXRlKGNodW5rLCBfZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIGRhdGFcbiAgICB9ID0gY2h1bms7XG5cbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4oXCJPYmplY3RNdWx0aXBsZXggLSBtYWxmb3JtZWQgY2h1bmsgd2l0aG91dCBuYW1lIFxcXCJcIi5jb25jYXQoY2h1bmssIFwiXFxcIlwiKSk7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9IC8vIGdldCBjb3JyZXNwb25kaW5nIHN1YnN0cmVhbVxuXG5cbiAgICBjb25zdCBzdWJzdHJlYW0gPSB0aGlzLl9zdWJzdHJlYW1zW25hbWVdO1xuXG4gICAgaWYgKCFzdWJzdHJlYW0pIHtcbiAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4oXCJPYmplY3RNdWx0aXBsZXggLSBvcnBoYW5lZCBkYXRhIGZvciBzdHJlYW0gXFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCJcIikpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfSAvLyBwdXNoIGRhdGEgaW50byBzdWJzdHJlYW1cblxuXG4gICAgaWYgKHN1YnN0cmVhbSAhPT0gSUdOT1JFX1NVQlNUUkVBTSkge1xuICAgICAgc3Vic3RyZWFtLnB1c2goZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cblxufSAvLyB1dGlsXG5cbmZ1bmN0aW9uIGFueVN0cmVhbUVuZChzdHJlYW0sIF9jYikge1xuICBjb25zdCBjYiA9IG9uY2UoX2NiKTtcbiAgZW9zKHN0cmVhbSwge1xuICAgIHJlYWRhYmxlOiBmYWxzZVxuICB9LCBjYik7XG4gIGVvcyhzdHJlYW0sIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSwgY2IpO1xufVxuXG5mdW5jdGlvbiBzZXR1cE11bHRpcGxleChzdHJlYW0pIHtcbiAgY29uc3QgbXV4ID0gbmV3IE9iamVjdE11bHRpcGxleCgpO1xuXG4gIG11eC5nZXRTdHJlYW0gPSBmdW5jdGlvbiBzdHJlYW1IZWxwZXIobmFtZSkge1xuICAgIGlmICh0aGlzLl9zdWJzdHJlYW1zW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3Vic3RyZWFtc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVTdHJlYW0obmFtZSk7XG4gIH07XG5cbiAgcHVtcChzdHJlYW0sIG11eCwgc3RyZWFtLCBlcnIgPT4ge1xuICAgIGlmIChlcnIpIHdpbmRvdy5jb25zb2xlLmVycm9yKGVycik7XG4gIH0pO1xuICByZXR1cm4gbXV4O1xufVxuXG5jbGFzcyBQb3N0TWVzc2FnZVN0cmVhbSBleHRlbmRzIEJhc2VQb3N0TWVzc2FnZVN0cmVhbSB7XG4gIF9wb3N0TWVzc2FnZShkYXRhKSB7XG4gICAgbGV0IG9yaWdpbkNvbnN0cmFpbnQgPSB0aGlzLl90YXJnZXRPcmlnaW47XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IGRhdGFPYmogPSBkYXRhO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGFPYmouZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjb25zdCBkYXRhT2JqRGF0YSA9IGRhdGFPYmouZGF0YTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhT2JqRGF0YS5wYXJhbXMpICYmIGRhdGFPYmpEYXRhLnBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZGF0YU9iakRhdGFQYXJhbSA9IGRhdGFPYmpEYXRhLnBhcmFtc1swXTtcblxuICAgICAgICAgIGlmIChkYXRhT2JqRGF0YVBhcmFtLl9vcmlnaW4pIHtcbiAgICAgICAgICAgIG9yaWdpbkNvbnN0cmFpbnQgPSBkYXRhT2JqRGF0YVBhcmFtLl9vcmlnaW47XG4gICAgICAgICAgfSAvLyBhZGQgYSBjb25zdHJhaW50IGZvciB0aGUgcmVzcG9uc2VcblxuXG4gICAgICAgICAgZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3RhcmdldFdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICB0YXJnZXQ6IHRoaXMuX3RhcmdldCxcbiAgICAgIGRhdGFcbiAgICB9LCBvcmlnaW5Db25zdHJhaW50KTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEJhc2VQb3N0TWVzc2FnZVN0cmVhbSwgSUdOT1JFX1NVQlNUUkVBTSwgSlJQQ0VuZ2luZSwgT2JqZWN0TXVsdGlwbGV4LCBQb3N0TWVzc2FnZVN0cmVhbSwgU2FmZUV2ZW50RW1pdHRlciwgU2VyaWFsaXphYmxlRXJyb3IsIFN1YnN0cmVhbSwgY3JlYXRlQXN5bmNNaWRkbGV3YXJlLCBjcmVhdGVFbmdpbmVTdHJlYW0sIGNyZWF0ZUVycm9yTWlkZGxld2FyZSwgY3JlYXRlSWRSZW1hcE1pZGRsZXdhcmUsIGNyZWF0ZUxvZ2dlck1pZGRsZXdhcmUsIGNyZWF0ZVNjYWZmb2xkTWlkZGxld2FyZSwgY3JlYXRlU3RyZWFtTWlkZGxld2FyZSwgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrLCBtZXJnZU1pZGRsZXdhcmUsIHNldHVwTXVsdGlwbGV4IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVubG9naW5KcnBjLmVzbS5qcy5tYXBcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGZyb20gXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IGdldFByb3RvdHlwZU9mIGZyb20gXCIuL2dldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBpc05hdGl2ZUZ1bmN0aW9uIGZyb20gXCIuL2lzTmF0aXZlRnVuY3Rpb24uanNcIjtcbmltcG9ydCBjb25zdHJ1Y3QgZnJvbSBcIi4vY29uc3RydWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIWlzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9O1xuXG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgeyBnZW5lcmF0ZVByaXZhdGUsIGdldFB1YmxpYywgZGVjcnlwdCB9IGZyb20gJ0B0b3J1c2xhYnMvZWNjcnlwdG8nO1xuaW1wb3J0IHsgcG9zdCwgZ2VuZXJhdGVKc29uUlBDT2JqZWN0LCBnZXQsIHNldEFQSUtleSwgc2V0RW1iZWRIb3N0IH0gZnJvbSAnQHRvcnVzbGFicy9odHRwLWhlbHBlcnMnO1xuaW1wb3J0IEJOIGZyb20gJ2JuLmpzJztcbmltcG9ydCB7IGVjIH0gZnJvbSAnZWxsaXB0aWMnO1xuaW1wb3J0IEpzb25TdHJpbmdpZnkgZnJvbSAnanNvbi1zdGFibGUtc3RyaW5naWZ5JztcbmltcG9ydCB7IHRvQ2hlY2tzdW1BZGRyZXNzIH0gZnJvbSAnd2ViMy11dGlscyc7XG5pbXBvcnQgbG9nbGV2ZWwgZnJvbSAnbG9nbGV2ZWwnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBfd3JhcE5hdGl2ZVN1cGVyIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyJztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgY3JlYXRlS2VjY2FrSGFzaCBmcm9tICdrZWNjYWsnO1xuXG52YXIgbG9nID0gbG9nbGV2ZWwuZ2V0TG9nZ2VyKFwidG9ydXMuanNcIik7XG5sb2cuZGlzYWJsZUFsbCgpO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkMShEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxKCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG52YXIgU29tZUVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzKFNvbWVFcnJvciwgX0Vycm9yKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDEoU29tZUVycm9yKTtcblxuICBmdW5jdGlvbiBTb21lRXJyb3IoX3JlZikge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBlcnJvcnMgPSBfcmVmLmVycm9ycyxcbiAgICAgICAgcmVzcG9uc2VzID0gX3JlZi5yZXNwb25zZXMsXG4gICAgICAgIHByZWRpY2F0ZSA9IF9yZWYucHJlZGljYXRlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvbWVFcnJvcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFwiVW5hYmxlIHRvIHJlc29sdmUgZW5vdWdoIHByb21pc2VzLlwiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJlcnJvcnNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZXNwb25zZXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmVkaWNhdGVcIiwgdm9pZCAwKTtcblxuICAgIF90aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICBfdGhpcy5yZXNwb25zZXMgPSByZXNwb25zZXM7XG4gICAgX3RoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoU29tZUVycm9yKTtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG52YXIgU29tZSA9IGZ1bmN0aW9uIFNvbWUocHJvbWlzZXMsIHByZWRpY2F0ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBmaW5pc2hlZENvdW50ID0gMDtcbiAgICB2YXIgc2hhcmVkU3RhdGUgPSB7XG4gICAgICByZXNvbHZlZDogZmFsc2VcbiAgICB9O1xuICAgIHZhciBlcnJvckFyciA9IG5ldyBBcnJheShwcm9taXNlcy5sZW5ndGgpLmZpbGwodW5kZWZpbmVkKTtcbiAgICB2YXIgcmVzdWx0QXJyID0gbmV3IEFycmF5KHByb21pc2VzLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpO1xuICAgIHZhciBwcmVkaWNhdGVFcnJvcjtcbiAgICByZXR1cm4gcHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAoeCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB4LnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgcmVzdWx0QXJyW2luZGV4XSA9IHJlc3A7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JBcnJbaW5kZXhdID0gZXJyb3I7XG4gICAgICB9KSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9uby1yZXR1cm4taW4tZmluYWxseVxuICAgICAgLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hhcmVkU3RhdGUucmVzb2x2ZWQpIHJldHVybjtcbiAgICAgICAgcmV0dXJuIHByZWRpY2F0ZShyZXN1bHRBcnIuc2xpY2UoMCksIHNoYXJlZFN0YXRlKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgc2hhcmVkU3RhdGUucmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgLy8gbG9nIG9ubHkgdGhlIGxhc3QgcHJlZGljYXRlIGVycm9yXG4gICAgICAgICAgcHJlZGljYXRlRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZmluaXNoZWRDb3VudCArPSAxO1xuXG4gICAgICAgICAgaWYgKGZpbmlzaGVkQ291bnQgPT09IHByb21pc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IE9iamVjdC52YWx1ZXMocmVzdWx0QXJyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB6KSB7XG4gICAgICAgICAgICAgIGlmICh6KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9lcnJvciRkYXRhO1xuXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gei5pZCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB6LmVycm9yO1xuXG4gICAgICAgICAgICAgICAgaWYgKChlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9lcnJvciRkYXRhID0gZXJyb3IuZGF0YSkgPT09IG51bGwgfHwgX2Vycm9yJGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lcnJvciRkYXRhLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZGF0YS5zdGFydHNXaXRoKFwiRXJyb3Igb2NjdXJyZWQgd2hpbGUgdmVyaWZ5aW5nIHBhcmFtc1wiKSkgYWNjW2lkXSA9IGNhcGl0YWxpemVGaXJzdExldHRlcihlcnJvci5kYXRhKTtlbHNlIGFjY1tpZF0gPSBlcnJvci5kYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSkpO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gRm9ybWF0LWFibGUgZXJyb3JzXG4gICAgICAgICAgICAgIHZhciBtc2cgPSBlcnJvcnMubGVuZ3RoID4gMSA/IFwiXFxuXCIuY29uY2F0KGVycm9ycy5tYXAoZnVuY3Rpb24gKGl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXFx1MjAyMiBcIi5jb25jYXQoaXQpO1xuICAgICAgICAgICAgICB9KS5qb2luKFwiXFxuXCIpKSA6IGVycm9yc1swXTtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihtc2cpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBfcHJlZGljYXRlRXJyb3I7XG5cbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBTb21lRXJyb3Ioe1xuICAgICAgICAgICAgICAgIGVycm9yczogZXJyb3JBcnIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzOiByZXN1bHRBcnIsXG4gICAgICAgICAgICAgICAgcHJlZGljYXRlOiAoKF9wcmVkaWNhdGVFcnJvciA9IHByZWRpY2F0ZUVycm9yKSA9PT0gbnVsbCB8fCBfcHJlZGljYXRlRXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcmVkaWNhdGVFcnJvci5tZXNzYWdlKSB8fCBwcmVkaWNhdGVFcnJvclxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgR2V0T3JTZXROb25jZUVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzKEdldE9yU2V0Tm9uY2VFcnJvciwgX0Vycm9yKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEdldE9yU2V0Tm9uY2VFcnJvcik7XG5cbiAgZnVuY3Rpb24gR2V0T3JTZXROb25jZUVycm9yKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHZXRPclNldE5vbmNlRXJyb3IpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhHZXRPclNldE5vbmNlRXJyb3IpO1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcbnZhciBrQ29tYmluYXRpb25zID0gZnVuY3Rpb24ga0NvbWJpbmF0aW9ucyhzLCBrKSB7XG4gIHZhciBzZXQgPSBzO1xuXG4gIGlmICh0eXBlb2Ygc2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgc2V0ID0gQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IHNldFxuICAgIH0sIGZ1bmN0aW9uIChfLCBpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChrID4gc2V0Lmxlbmd0aCB8fCBrIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAoayA9PT0gc2V0Lmxlbmd0aCkge1xuICAgIHJldHVybiBbc2V0XTtcbiAgfVxuXG4gIGlmIChrID09PSAxKSB7XG4gICAgcmV0dXJuIHNldC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhY2MpLCBbW2N1cl1dKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICB2YXIgY29tYnMgPSBbXTtcbiAgdmFyIHRhaWxDb21icyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IHNldC5sZW5ndGggLSBrICsgMTsgaSArPSAxKSB7XG4gICAgdGFpbENvbWJzID0ga0NvbWJpbmF0aW9ucyhzZXQuc2xpY2UoaSArIDEpLCBrIC0gMSk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRhaWxDb21icy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29tYnMucHVzaChbc2V0W2ldXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRhaWxDb21ic1tqXSkpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29tYnM7XG59O1xudmFyIHRocmVzaG9sZFNhbWUgPSBmdW5jdGlvbiB0aHJlc2hvbGRTYW1lKGFyciwgdCkge1xuICB2YXIgaGFzaE1hcCA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHN0ciA9IEpzb25TdHJpbmdpZnkoYXJyW2ldKTtcbiAgICBoYXNoTWFwW3N0cl0gPSBoYXNoTWFwW3N0cl0gPyBoYXNoTWFwW3N0cl0gKyAxIDogMTtcblxuICAgIGlmIChoYXNoTWFwW3N0cl0gPT09IHQpIHtcbiAgICAgIHJldHVybiBhcnJbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG52YXIga2V5TG9va3VwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQpIHtcbiAgICB2YXIgbG9va3VwUHJvbWlzZXM7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGxvb2t1cFByb21pc2VzID0gZW5kcG9pbnRzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICByZXR1cm4gcG9zdCh4LCBnZW5lcmF0ZUpzb25SUENPYmplY3QoXCJWZXJpZmllckxvb2t1cFJlcXVlc3RcIiwge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgICB2ZXJpZmllcl9pZDogdmVyaWZpZXJJZC50b1N0cmluZygpXG4gICAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvZy5lcnJvcihcImxvb2t1cCByZXF1ZXN0IGZhaWxlZFwiLCBlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBTb21lKGxvb2t1cFByb21pc2VzLCBmdW5jdGlvbiAobG9va3VwUmVzdWx0cykge1xuICAgICAgICAgICAgICB2YXIgbG9va3VwU2hhcmVzID0gbG9va3VwUmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24gKHgxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgxO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdmFyIGVycm9yUmVzdWx0ID0gdGhyZXNob2xkU2FtZShsb29rdXBTaGFyZXMubWFwKGZ1bmN0aW9uICh4Mikge1xuICAgICAgICAgICAgICAgIHJldHVybiB4MiAmJiB4Mi5lcnJvcjtcbiAgICAgICAgICAgICAgfSksIH5+KGVuZHBvaW50cy5sZW5ndGggLyAyKSArIDEpO1xuICAgICAgICAgICAgICB2YXIga2V5UmVzdWx0ID0gdGhyZXNob2xkU2FtZShsb29rdXBTaGFyZXMubWFwKGZ1bmN0aW9uICh4Mykge1xuICAgICAgICAgICAgICAgIHJldHVybiB4MyAmJiB4My5yZXN1bHQ7XG4gICAgICAgICAgICAgIH0pLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTtcblxuICAgICAgICAgICAgICBpZiAoa2V5UmVzdWx0IHx8IGVycm9yUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICBrZXlSZXN1bHQ6IGtleVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgIGVycm9yUmVzdWx0OiBlcnJvclJlc3VsdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzdWx0cyBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkobG9va3VwUmVzdWx0cykpKSk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGtleUxvb2t1cChfeCwgX3gyLCBfeDMpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xudmFyIHdhaXRLZXlMb29rdXAgPSBmdW5jdGlvbiB3YWl0S2V5TG9va3VwKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQsIHRpbWVvdXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSwgdGltZW91dCk7XG4gIH0pO1xufTtcbnZhciBrZXlBc3NpZ24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMihfcmVmMikge1xuICAgIHZhciBlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIGxhc3RQb2ludCwgZmlyc3RQb2ludCwgdmVyaWZpZXIsIHZlcmlmaWVySWQsIHNpZ25lckhvc3QsIG5ldHdvcmssIG5vZGVOdW0sIGluaXRpYWxQb2ludCwgZGF0YSwgc2lnbmVkRGF0YSwgYWNjZXB0ZWRFcnJvck1zZ3M7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBlbmRwb2ludHMgPSBfcmVmMi5lbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMgPSBfcmVmMi50b3J1c05vZGVQdWJzLCBsYXN0UG9pbnQgPSBfcmVmMi5sYXN0UG9pbnQsIGZpcnN0UG9pbnQgPSBfcmVmMi5maXJzdFBvaW50LCB2ZXJpZmllciA9IF9yZWYyLnZlcmlmaWVyLCB2ZXJpZmllcklkID0gX3JlZjIudmVyaWZpZXJJZCwgc2lnbmVySG9zdCA9IF9yZWYyLnNpZ25lckhvc3QsIG5ldHdvcmsgPSBfcmVmMi5uZXR3b3JrO1xuXG4gICAgICAgICAgICBpZiAobGFzdFBvaW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbm9kZU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZHBvaW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgICBpbml0aWFsUG9pbnQgPSBub2RlTnVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm9kZU51bSA9IGxhc3RQb2ludCAlIGVuZHBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKG5vZGVOdW0gPT09IGZpcnN0UG9pbnQpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxvb3BlZCB0aHJvdWdoIGFsbFwiKTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGlmIChmaXJzdFBvaW50ICE9PSB1bmRlZmluZWQpIGluaXRpYWxQb2ludCA9IGZpcnN0UG9pbnQ7XG4gICAgICAgICAgICBkYXRhID0gZ2VuZXJhdGVKc29uUlBDT2JqZWN0KFwiS2V5QXNzaWduXCIsIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyLFxuICAgICAgICAgICAgICB2ZXJpZmllcl9pZDogdmVyaWZpZXJJZC50b1N0cmluZygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gNjtcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gOTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0KHNpZ25lckhvc3QsIGRhdGEsIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIHB1YktleVg6IHRvcnVzTm9kZVB1YnNbbm9kZU51bV0uWCxcbiAgICAgICAgICAgICAgICBwdWJLZXlZOiB0b3J1c05vZGVQdWJzW25vZGVOdW1dLlksXG4gICAgICAgICAgICAgICAgbmV0d29yazogbmV0d29ya1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBzaWduZWREYXRhID0gX2NvbnRleHQyLnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDEyO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3QoZW5kcG9pbnRzW25vZGVOdW1dLCBfb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt9LCBkYXRhKSwgc2lnbmVkRGF0YSksIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0Mi5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDE1O1xuICAgICAgICAgICAgX2NvbnRleHQyLnQwID0gX2NvbnRleHQyW1wiY2F0Y2hcIl0oNik7XG4gICAgICAgICAgICBsb2cuZXJyb3IoX2NvbnRleHQyLnQwKTtcbiAgICAgICAgICAgIGFjY2VwdGVkRXJyb3JNc2dzID0gWy8vIFNsb3cgbm9kZVxuICAgICAgICAgICAgXCJUaW1lZCBvdXRcIiwgLy8gSGFwcGVucyB3aGVuIHRoZSBub2RlIGlzIG5vdCByZWFjaGFibGUgKGRucyBpc3N1ZSBldGMpXG4gICAgICAgICAgICBcIlR5cGVFcnJvcjogRmFpbGVkIHRvIGZldGNoXCIsIFwiVHlwZUVycm9yOiBjYW5jZWxsZWRcIiwgXCJUeXBlRXJyb3I6IE5ldHdvcmtFcnJvciB3aGVuIGF0dGVtcHRpbmcgdG8gZmV0Y2ggcmVzb3VyY2UuXCIgLy8gRmlyZWZveFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgaWYgKCFhY2NlcHRlZEVycm9yTXNncy5pbmNsdWRlcyhfY29udGV4dDIudDAubWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIGtleUFzc2lnbih7XG4gICAgICAgICAgICAgIGVuZHBvaW50czogZW5kcG9pbnRzLFxuICAgICAgICAgICAgICB0b3J1c05vZGVQdWJzOiB0b3J1c05vZGVQdWJzLFxuICAgICAgICAgICAgICBsYXN0UG9pbnQ6IG5vZGVOdW0gKyAxLFxuICAgICAgICAgICAgICBmaXJzdFBvaW50OiBpbml0aWFsUG9pbnQsXG4gICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgdmVyaWZpZXJJZDogdmVyaWZpZXJJZCxcbiAgICAgICAgICAgICAgc2lnbmVySG9zdDogc2lnbmVySG9zdCxcbiAgICAgICAgICAgICAgbmV0d29yazogbmV0d29ya1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvcnJ5LCB0aGUgVG9ydXMgTmV0d29yayB0aGF0IHBvd2VycyBXZWIzQXV0aCBpcyBjdXJyZW50bHkgdmVyeSBidXN5LlxcbiAgICBXZSB3aWxsIGdlbmVyYXRlIHlvdXIga2V5IGluIHRpbWUuIFBscyB0cnkgYWdhaW4gbGF0ZXIuIFxcblxcbiAgICBcIi5jb25jYXQoX2NvbnRleHQyLnQwLm1lc3NhZ2UgfHwgXCJcIikpO1xuXG4gICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyLCBudWxsLCBbWzYsIDE1XV0pO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGtleUFzc2lnbihfeDQpIHtcbiAgICByZXR1cm4gX3JlZjMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcbmZ1bmN0aW9uIGtlY2NhazI1NihhKSB7XG4gIHZhciBoYXNoID0gY3JlYXRlS2VjY2FrSGFzaChcImtlY2NhazI1NlwiKS51cGRhdGUoYSkuZGlnZXN0KCkudG9TdHJpbmcoXCJoZXhcIik7XG4gIHJldHVybiBcIjB4XCIuY29uY2F0KGhhc2gpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuLy8gb2YgVG9ydXMgbm9kZXMgdG8gaGFuZGxlIG1hbGljaW91cyBub2RlIHJlc3BvbnNlc1xuXG52YXIgVG9ydXMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUb3J1cygpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWYkZW5hYmxlT25lS2V5ID0gX3JlZi5lbmFibGVPbmVLZXksXG4gICAgICAgIGVuYWJsZU9uZUtleSA9IF9yZWYkZW5hYmxlT25lS2V5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZW5hYmxlT25lS2V5LFxuICAgICAgICBfcmVmJG1ldGFkYXRhSG9zdCA9IF9yZWYubWV0YWRhdGFIb3N0LFxuICAgICAgICBtZXRhZGF0YUhvc3QgPSBfcmVmJG1ldGFkYXRhSG9zdCA9PT0gdm9pZCAwID8gXCJodHRwczovL21ldGFkYXRhLnRvci51c1wiIDogX3JlZiRtZXRhZGF0YUhvc3QsXG4gICAgICAgIF9yZWYkYWxsb3dIb3N0ID0gX3JlZi5hbGxvd0hvc3QsXG4gICAgICAgIGFsbG93SG9zdCA9IF9yZWYkYWxsb3dIb3N0ID09PSB2b2lkIDAgPyBcImh0dHBzOi8vc2lnbmVyLnRvci51cy9hcGkvYWxsb3dcIiA6IF9yZWYkYWxsb3dIb3N0LFxuICAgICAgICBfcmVmJHNpZ25lckhvc3QgPSBfcmVmLnNpZ25lckhvc3QsXG4gICAgICAgIHNpZ25lckhvc3QgPSBfcmVmJHNpZ25lckhvc3QgPT09IHZvaWQgMCA/IFwiaHR0cHM6Ly9zaWduZXIudG9yLnVzL2FwaS9zaWduXCIgOiBfcmVmJHNpZ25lckhvc3QsXG4gICAgICAgIF9yZWYkc2VydmVyVGltZU9mZnNldCA9IF9yZWYuc2VydmVyVGltZU9mZnNldCxcbiAgICAgICAgc2VydmVyVGltZU9mZnNldCA9IF9yZWYkc2VydmVyVGltZU9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9yZWYkc2VydmVyVGltZU9mZnNldCxcbiAgICAgICAgX3JlZiRuZXR3b3JrID0gX3JlZi5uZXR3b3JrLFxuICAgICAgICBuZXR3b3JrID0gX3JlZiRuZXR3b3JrID09PSB2b2lkIDAgPyBcIm1haW5uZXRcIiA6IF9yZWYkbmV0d29yaztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb3J1cyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YUhvc3RcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFsbG93SG9zdFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2VydmVyVGltZU9mZnNldFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5hYmxlT25lS2V5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaWduZXJIb3N0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuZXR3b3JrXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlY1wiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5lYyA9IG5ldyBlYyhcInNlY3AyNTZrMVwiKTtcbiAgICB0aGlzLm1ldGFkYXRhSG9zdCA9IG1ldGFkYXRhSG9zdDtcbiAgICB0aGlzLmFsbG93SG9zdCA9IGFsbG93SG9zdDtcbiAgICB0aGlzLmVuYWJsZU9uZUtleSA9IGVuYWJsZU9uZUtleTtcbiAgICB0aGlzLnNlcnZlclRpbWVPZmZzZXQgPSBzZXJ2ZXJUaW1lT2Zmc2V0IHx8IDA7IC8vIG1zXG5cbiAgICB0aGlzLnNpZ25lckhvc3QgPSBzaWduZXJIb3N0O1xuICAgIHRoaXMubmV0d29yayA9IG5ldHdvcms7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVG9ydXMsIFt7XG4gICAga2V5OiBcImdldFVzZXJUeXBlQW5kQWRkcmVzc1wiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIE5vdGU6IHVzZSB0aGlzIGZ1bmN0aW9uIG9ubHkgZm9yIG9wZW5sb2dpbiB0a2V5IGFjY291bnQgbG9va3Vwcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2dldFVzZXJUeXBlQW5kQWRkcmVzcyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCBfcmVmMikge1xuICAgICAgICB2YXIgdmVyaWZpZXIsXG4gICAgICAgICAgICB2ZXJpZmllcklkLFxuICAgICAgICAgICAgZG9lc0tleUFzc2lnbixcbiAgICAgICAgICAgIF9yZWYzLFxuICAgICAgICAgICAga2V5UmVzdWx0LFxuICAgICAgICAgICAgZXJyb3JSZXN1bHQsXG4gICAgICAgICAgICBpc05ld0tleSxcbiAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0LFxuICAgICAgICAgICAgYXNzaWduUmVzdWx0LFxuICAgICAgICAgICAgX2ZpbmFsS2V5UmVzdWx0JGtleXMkLFxuICAgICAgICAgICAgWCxcbiAgICAgICAgICAgIFksXG4gICAgICAgICAgICBub25jZVJlc3VsdCxcbiAgICAgICAgICAgIG5vbmNlLFxuICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXksXG4gICAgICAgICAgICBmaW5hbFgsXG4gICAgICAgICAgICBmaW5hbFksXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgX2FyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB2ZXJpZmllciA9IF9yZWYyLnZlcmlmaWVyLCB2ZXJpZmllcklkID0gX3JlZjIudmVyaWZpZXJJZDtcbiAgICAgICAgICAgICAgICBkb2VzS2V5QXNzaWduID0gX2FyZ3MubGVuZ3RoID4gMyAmJiBfYXJnc1szXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3NbM10gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5TG9va3VwKGVuZHBvaW50cywgdmVyaWZpZXIsIHZlcmlmaWVySWQpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2NvbnRleHQudDApIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSB7fTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgX3JlZjMgPSBfY29udGV4dC50MDtcbiAgICAgICAgICAgICAgICBrZXlSZXN1bHQgPSBfcmVmMy5rZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgZXJyb3JSZXN1bHQgPSBfcmVmMy5lcnJvclJlc3VsdDtcbiAgICAgICAgICAgICAgICBpc05ld0tleSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoZXJyb3JSZXN1bHQgJiYgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQpLmluY2x1ZGVzKFwiVmVyaWZpZXIgKyBWZXJpZmllcklEIGhhcyBub3QgeWV0IGJlZW4gYXNzaWduZWRcIikpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9lc0tleUFzc2lnbikge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE0O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmVyaWZpZXIgKyBWZXJpZmllcklEIGhhcyBub3QgeWV0IGJlZW4gYXNzaWduZWRcIik7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUFzc2lnbih7XG4gICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IGVuZHBvaW50cyxcbiAgICAgICAgICAgICAgICAgIHRvcnVzTm9kZVB1YnM6IHRvcnVzTm9kZVB1YnMsXG4gICAgICAgICAgICAgICAgICBsYXN0UG9pbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGZpcnN0UG9pbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVySWQ6IHZlcmlmaWVySWQsXG4gICAgICAgICAgICAgICAgICBzaWduZXJIb3N0OiB0aGlzLnNpZ25lckhvc3QsXG4gICAgICAgICAgICAgICAgICBuZXR3b3JrOiB0aGlzLm5ldHdvcmtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxODtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2FpdEtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkLCAxMDAwKTtcblxuICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgIGFzc2lnblJlc3VsdCA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQgPSBhc3NpZ25SZXN1bHQgPT09IG51bGwgfHwgYXNzaWduUmVzdWx0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhc3NpZ25SZXN1bHQua2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIGlzTmV3S2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgICAgICBpZiAoIWtleVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI3O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQgPSBrZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9kZSByZXN1bHRzIGRvIG5vdCBtYXRjaCBhdCBmaXJzdCBsb29rdXAgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGtleVJlc3VsdCB8fCB7fSksIFwiLCBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0IHx8IHt9KSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICAgICAgaWYgKCFmaW5hbEtleVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU4O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2ZpbmFsS2V5UmVzdWx0JGtleXMkID0gZmluYWxLZXlSZXN1bHQua2V5c1swXSwgWCA9IF9maW5hbEtleVJlc3VsdCRrZXlzJC5wdWJfa2V5X1gsIFkgPSBfZmluYWxLZXlSZXN1bHQka2V5cyQucHViX2tleV9ZO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAzMDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JTZXROb25jZShYLCBZLCB1bmRlZmluZWQsICFpc05ld0tleSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgICAgICBub25jZVJlc3VsdCA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgbm9uY2UgPSBuZXcgQk4obm9uY2VSZXN1bHQubm9uY2UgfHwgXCIwXCIsIDE2KTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMzc7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDEgPSBfY29udGV4dFtcImNhdGNoXCJdKDMwKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR2V0T3JTZXROb25jZUVycm9yKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICBpZiAoIShub25jZVJlc3VsdC50eXBlT2ZVc2VyID09PSBcInYxXCIpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21Qcml2YXRlKG5vbmNlLnRvU3RyaW5nKDE2KSkuZ2V0UHVibGljKCkpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0OTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjJcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0ODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgIHg6IFgsXG4gICAgICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBub25jZVJlc3VsdC5wdWJOb25jZS54LFxuICAgICAgICAgICAgICAgICAgeTogbm9uY2VSZXN1bHQucHViTm9uY2UueVxuICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRPclNldE5vbmNlIHNob3VsZCBhbHdheXMgcmV0dXJuIHR5cGVPZlVzZXIuXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICAgICAgZmluYWxYID0gbW9kaWZpZWRQdWJLZXkuZ2V0WCgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBmaW5hbFkgPSBtb2RpZmllZFB1YktleS5nZXRZKCkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLmdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXkobW9kaWZpZWRQdWJLZXkuZ2V0WCgpLCBtb2RpZmllZFB1YktleS5nZXRZKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU2O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyOiBub25jZVJlc3VsdC50eXBlT2ZVc2VyLFxuICAgICAgICAgICAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgICAgICAgICAgICAgWDogZmluYWxYLFxuICAgICAgICAgICAgICAgICAgWTogZmluYWxZLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTY6XG4gICAgICAgICAgICAgICAgaWYgKCEobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MlwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU4O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyOiBub25jZVJlc3VsdC50eXBlT2ZVc2VyLFxuICAgICAgICAgICAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgICAgICAgICAgICAgcHViTm9uY2U6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLFxuICAgICAgICAgICAgICAgICAgdXBncmFkZWQ6IG5vbmNlUmVzdWx0LnVwZ3JhZGVkLFxuICAgICAgICAgICAgICAgICAgWDogZmluYWxYLFxuICAgICAgICAgICAgICAgICAgWTogZmluYWxZLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9kZSByZXN1bHRzIGRvIG5vdCBtYXRjaCBhdCBmaW5hbCBsb29rdXAgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGtleVJlc3VsdCB8fCB7fSksIFwiLCBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0IHx8IHt9KSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcywgW1szMCwgMzddXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFVzZXJUeXBlQW5kQWRkcmVzcyhfeCwgX3gyLCBfeDMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRVc2VyVHlwZUFuZEFkZHJlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFVzZXJUeXBlQW5kQWRkcmVzcztcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJzZXRDdXN0b21LZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9zZXRDdXN0b21LZXkgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMihfcmVmNCkge1xuICAgICAgICB2YXIgcHJpdktleUhleCwgbWV0YWRhdGFOb25jZSwgdG9ydXNLZXlIZXgsIGN1c3RvbUtleUhleCwgdG9ydXNLZXksIHByaXZLZXksIGN1c3RvbUtleSwgbmV3TWV0YWRhdGFOb25jZSwgZGF0YTtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcHJpdktleUhleCA9IF9yZWY0LnByaXZLZXlIZXgsIG1ldGFkYXRhTm9uY2UgPSBfcmVmNC5tZXRhZGF0YU5vbmNlLCB0b3J1c0tleUhleCA9IF9yZWY0LnRvcnVzS2V5SGV4LCBjdXN0b21LZXlIZXggPSBfcmVmNC5jdXN0b21LZXlIZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9ydXNLZXlIZXgpIHtcbiAgICAgICAgICAgICAgICAgIHRvcnVzS2V5ID0gbmV3IEJOKHRvcnVzS2V5SGV4LCAxNik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHByaXZLZXkgPSBuZXcgQk4ocHJpdktleUhleCwgMTYpO1xuICAgICAgICAgICAgICAgICAgdG9ydXNLZXkgPSBwcml2S2V5LnN1YihtZXRhZGF0YU5vbmNlKS51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VzdG9tS2V5ID0gbmV3IEJOKGN1c3RvbUtleUhleCwgMTYpO1xuICAgICAgICAgICAgICAgIG5ld01ldGFkYXRhTm9uY2UgPSBjdXN0b21LZXkuc3ViKHRvcnVzS2V5KS51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2VuZXJhdGVNZXRhZGF0YVBhcmFtcyhuZXdNZXRhZGF0YU5vbmNlLnRvU3RyaW5nKDE2KSwgdG9ydXNLZXkpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRNZXRhZGF0YShkYXRhKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUyLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gc2V0Q3VzdG9tS2V5KF94NCkge1xuICAgICAgICByZXR1cm4gX3NldEN1c3RvbUtleS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0Q3VzdG9tS2V5O1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcInJldHJpZXZlU2hhcmVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmV0cmlldmVTaGFyZXMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNShlbmRwb2ludHMsIGluZGV4ZXMsIHZlcmlmaWVyLCB2ZXJpZmllclBhcmFtcywgaWRUb2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBleHRyYVBhcmFtcyxcbiAgICAgICAgICAgIHByb21pc2VBcnIsXG4gICAgICAgICAgICB0bXBLZXksXG4gICAgICAgICAgICBwdWJLZXksXG4gICAgICAgICAgICBwdWJLZXlYLFxuICAgICAgICAgICAgcHViS2V5WSxcbiAgICAgICAgICAgIHRva2VuQ29tbWl0bWVudCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBwLFxuICAgICAgICAgICAgX2FyZ3M1ID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBleHRyYVBhcmFtcyA9IF9hcmdzNS5sZW5ndGggPiA1ICYmIF9hcmdzNVs1XSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M1WzVdIDoge307XG4gICAgICAgICAgICAgICAgcHJvbWlzZUFyciA9IFtdO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMuYWxsb3dIb3N0LCB7XG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZpZXJfaWQ6IHZlcmlmaWVyUGFyYW1zLnZlcmlmaWVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiB0aGlzLm5ldHdvcmtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIENvbW1pdG1lbnRSZXF1ZXN0UGFyYW1zIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VQcmVmaXggICAgICBzdHJpbmcgYGpzb246XCJtZXNzYWdlcHJlZml4XCJgXG4gICAgICAgICAgICAgICAgICAgIFRva2VuQ29tbWl0bWVudCAgICBzdHJpbmcgYGpzb246XCJ0b2tlbmNvbW1pdG1lbnRcImBcbiAgICAgICAgICAgICAgICAgICAgVGVtcFB1YlggICAgICAgICAgIHN0cmluZyBganNvbjpcInRlbXBwdWJ4XCJgXG4gICAgICAgICAgICAgICAgICAgIFRlbXBQdWJZICAgICAgICAgICBzdHJpbmcgYGpzb246XCJ0ZW1wcHVieVwiYFxuICAgICAgICAgICAgICAgICAgICBWZXJpZmllcklkZW50aWZpZXIgc3RyaW5nIGBqc29uOlwidmVyaWZpZXJpZGVudGlmaWVyXCJgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIGdlbmVyYXRlIHRlbXBvcmFyeSBwcml2YXRlIGFuZCBwdWJsaWMga2V5IHRoYXQgaXMgdXNlZCB0byBzZWN1cmUgcmVjZWl2ZSBzaGFyZXNcbiAgICAgICAgICAgICAgICB0bXBLZXkgPSBnZW5lcmF0ZVByaXZhdGUoKTtcbiAgICAgICAgICAgICAgICBwdWJLZXkgPSBnZXRQdWJsaWModG1wS2V5KS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgICAgICBwdWJLZXlYID0gcHViS2V5LnNsaWNlKDIsIDY2KTtcbiAgICAgICAgICAgICAgICBwdWJLZXlZID0gcHViS2V5LnNsaWNlKDY2KTtcbiAgICAgICAgICAgICAgICB0b2tlbkNvbW1pdG1lbnQgPSBrZWNjYWsyNTYoaWRUb2tlbik7IC8vIG1ha2UgY29tbWl0bWVudCByZXF1ZXN0cyB0byBlbmRwb2ludHNcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmRwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgIHAgPSBwb3N0KGVuZHBvaW50c1tpXSwgZ2VuZXJhdGVKc29uUlBDT2JqZWN0KFwiQ29tbWl0bWVudFJlcXVlc3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcHJlZml4OiBcIm11ZzAwXCIsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuY29tbWl0bWVudDogdG9rZW5Db21taXRtZW50LnNsaWNlKDIpLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wcHVieDogcHViS2V5WCxcbiAgICAgICAgICAgICAgICAgICAgdGVtcHB1Ynk6IHB1YktleVksXG4gICAgICAgICAgICAgICAgICAgIHZlcmlmaWVyaWRlbnRpZmllcjogdmVyaWZpZXJcbiAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcImNvbW1pdG1lbnRcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgcHJvbWlzZUFyci5wdXNoKHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgU2hhcmVSZXF1ZXN0UGFyYW1zIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIEl0ZW0gW11iaWpzb24uUmF3TWVzc2FnZSBganNvbjpcIml0ZW1cImBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFNoYXJlUmVxdWVzdEl0ZW0gc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgSURUb2tlbiAgICAgICAgICAgIHN0cmluZyAgICAgICAgICBganNvbjpcImlkdG9rZW5cImBcbiAgICAgICAgICAgICAgICAgICAgTm9kZVNpZ25hdHVyZXMgICAgIFtdTm9kZVNpZ25hdHVyZSBganNvbjpcIm5vZGVzaWduYXR1cmVzXCJgXG4gICAgICAgICAgICAgICAgICAgIFZlcmlmaWVySWRlbnRpZmllciBzdHJpbmcgICAgICAgICAgYGpzb246XCJ2ZXJpZmllcmlkZW50aWZpZXJcImBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIE5vZGVTaWduYXR1cmUgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgU2lnbmF0dXJlICAgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIERhdGEgICAgICAgIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBOb2RlUHViS2V5WCBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgTm9kZVB1YktleVkgc3RyaW5nXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBDb21taXRtZW50UmVxdWVzdFJlc3VsdCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBTaWduYXR1cmUgc3RyaW5nIGBqc29uOlwic2lnbmF0dXJlXCJgXG4gICAgICAgICAgICAgICAgICAgIERhdGEgICAgICBzdHJpbmcgYGpzb246XCJkYXRhXCJgXG4gICAgICAgICAgICAgICAgICAgIE5vZGVQdWJYICBzdHJpbmcgYGpzb246XCJub2RlcHVieFwiYFxuICAgICAgICAgICAgICAgICAgICBOb2RlUHViWSAgc3RyaW5nIGBqc29uOlwibm9kZXB1YnlcImBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gc2VuZCBzaGFyZSByZXF1ZXN0IG9uY2UgayArIHQgbnVtYmVyIG9mIGNvbW1pdG1lbnQgcmVxdWVzdHMgaGF2ZSBjb21wbGV0ZWRcblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIiwgU29tZShwcm9taXNlQXJyLCBmdW5jdGlvbiAocmVzdWx0QXJyKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGVkUmVxdWVzdHMgPSByZXN1bHRBcnIuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgheCB8fCBfdHlwZW9mKHgpICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHguZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkUmVxdWVzdHMubGVuZ3RoID49IH5+KGVuZHBvaW50cy5sZW5ndGggLyA0KSAqIDMgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0QXJyKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJlc3VsdEFycikpKSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2VzKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZUFyclJlcXVlc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgIHZhciBub2RlU2lncyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgcmVzcG9uc2VzLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzW19pXSkgbm9kZVNpZ3MucHVzaChyZXNwb25zZXNbX2ldLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGVuZHBvaW50cy5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL25vLW5lc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wID0gcG9zdChlbmRwb2ludHNbX2kyXSwgZ2VuZXJhdGVKc29uUlBDT2JqZWN0KFwiU2hhcmVSZXF1ZXN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWQ6IFwieWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbTogW19vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmVyaWZpZXJQYXJhbXMpLCB7fSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR0b2tlbjogaWRUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzaWduYXR1cmVzOiBub2RlU2lncyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmaWVyaWRlbnRpZmllcjogdmVyaWZpZXJcbiAgICAgICAgICAgICAgICAgICAgICB9LCBleHRyYVBhcmFtcyldXG4gICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZy5lcnJvcihcInNoYXJlIHJlcVwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlQXJyUmVxdWVzdC5wdXNoKF9wKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFNvbWUocHJvbWlzZUFyclJlcXVlc3QsIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKHNoYXJlUmVzcG9uc2VzLCBzaGFyZWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZWRSZXF1ZXN0cywgdGhyZXNob2xkUHVibGljS2V5LCBzaGFyZVByb21pc2VzLCBub2RlSW5kZXhlcywgX2kzLCBfY3VycmVudFNoYXJlUmVzcG9uc2UsIF9jdXJyZW50U2hhcmVSZXNwb25zZTIsIGN1cnJlbnRTaGFyZVJlc3BvbnNlLCBmaXJzdEtleSwgbWV0YWRhdGEsIHNoYXJlc1Jlc29sdmVkLCBkZWNyeXB0ZWRTaGFyZXMsIGFsbENvbWJpcywgcHJpdmF0ZUtleSwgX2xvb3AsIGosIF9yZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQzLnByZXYgPSBfY29udGV4dDMubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hhcmVSZXF1ZXN0UmVzdWx0IHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLZXlzIFtdS2V5QXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8gS2V5QXNzaWdubWVudFB1YmxpYyAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSBLZXlBc3NpZ25tZW50UHVibGljIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRleCAgICAgYmlnLkludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHVibGljS2V5IGNvbW1vbi5Qb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhyZXNob2xkIGludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyaWZpZXJzIG1hcFtzdHJpbmddW11zdHJpbmcgLy8gVmVyaWZpZXIgPT4gVmVyaWZpZXJJRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gS2V5QXNzaWdubWVudCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSBLZXlBc3NpZ25tZW50IHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLZXlBc3NpZ25tZW50UHVibGljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGFyZSBiaWcuSW50IC8vIE9yIFNpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhyZXNob2xkIG51bWJlciBvZiBub2RlcyBoYXZlIHJldHVybmVkIHRoZSBzYW1lIHVzZXIgcHVibGljIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkUmVxdWVzdHMgPSBzaGFyZVJlc3BvbnNlcy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZFB1YmxpY0tleSA9IHRocmVzaG9sZFNhbWUoc2hhcmVSZXNwb25zZXMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4ICYmIHgucmVzdWx0ICYmIHgucmVzdWx0LmtleXNbMF0uUHVibGljS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIH5+KGVuZHBvaW50cy5sZW5ndGggLyAyKSArIDEpOyAvLyBvcHRpbWlzdGljYWxseSBydW4gbGFncmFuZ2UgaW50ZXJwb2xhdGlvbiBvbmNlIHRocmVzaG9sZCBudW1iZXIgb2Ygc2hhcmVzIGhhdmUgYmVlbiByZWNlaXZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBtYXRjaGVkIGFnYWluc3QgdGhlIHVzZXIgcHVibGljIGtleSB0byBlbnN1cmUgdGhhdCBzaGFyZXMgYXJlIGNvbnNpc3RlbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY29tcGxldGVkUmVxdWVzdHMubGVuZ3RoID49IH5+KGVuZHBvaW50cy5sZW5ndGggLyAyKSArIDEgJiYgdGhyZXNob2xkUHVibGljS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVQcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUluZGV4ZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaTMgPSAwOyBfaTMgPCBzaGFyZVJlc3BvbnNlcy5sZW5ndGg7IF9pMyArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGFyZVJlc3BvbnNlID0gc2hhcmVSZXNwb25zZXNbX2kzXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRTaGFyZVJlc3BvbnNlID09PSBudWxsIHx8IGN1cnJlbnRTaGFyZVJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2N1cnJlbnRTaGFyZVJlc3BvbnNlID0gY3VycmVudFNoYXJlUmVzcG9uc2UucmVzdWx0KSA9PT0gbnVsbCB8fCBfY3VycmVudFNoYXJlUmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfY3VycmVudFNoYXJlUmVzcG9uc2UyID0gX2N1cnJlbnRTaGFyZVJlc3BvbnNlLmtleXMpID09PSBudWxsIHx8IF9jdXJyZW50U2hhcmVSZXNwb25zZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jdXJyZW50U2hhcmVSZXNwb25zZTIubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hhcmVSZXNwb25zZS5yZXN1bHQua2V5cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJOKGEuSW5kZXgsIDE2KS5jbXAobmV3IEJOKGIuSW5kZXgsIDE2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RLZXkgPSBjdXJyZW50U2hhcmVSZXNwb25zZS5yZXN1bHQua2V5c1swXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdEtleS5NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVwaGVtUHVibGljS2V5OiBCdWZmZXIuZnJvbShmaXJzdEtleS5NZXRhZGF0YS5lcGhlbVB1YmxpY0tleSwgXCJoZXhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2OiBCdWZmZXIuZnJvbShmaXJzdEtleS5NZXRhZGF0YS5pdiwgXCJoZXhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hYzogQnVmZmVyLmZyb20oZmlyc3RLZXkuTWV0YWRhdGEubWFjLCBcImhleFwiKSAvLyBtb2RlOiBCdWZmZXIuZnJvbShmaXJzdEtleS5NZXRhZGF0YS5tb2RlLCBcImhleFwiKSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMucHVzaCggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tbmVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcnlwdCh0bXBLZXksIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWV0YWRhdGEpLCB7fSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXBoZXJ0ZXh0OiBCdWZmZXIuZnJvbShCdWZmZXIuZnJvbShmaXJzdEtleS5TaGFyZSwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJiaW5hcnlcIikucGFkU3RhcnQoNjQsIFwiMFwiKSwgXCJoZXhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2cuZGVidWcoXCJzaGFyZSBkZWNyeXB0aW9uXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUoQnVmZmVyLmZyb20oZmlyc3RLZXkuU2hhcmUucGFkU3RhcnQoNjQsIFwiMFwiKSwgXCJoZXhcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVQcm9taXNlcy5wdXNoKFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJbmRleGVzLnB1c2gobmV3IEJOKGluZGV4ZXNbX2kzXSwgMTYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHNoYXJlUHJvbWlzZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVzUmVzb2x2ZWQgPSBfY29udGV4dDMuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGFyZWRTdGF0ZS5yZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJyZXR1cm5cIiwgdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRTaGFyZXMgPSBzaGFyZXNSZXNvbHZlZC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyciwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnIpIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgQk4oY3VycilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSk7IC8vIHJ1biBsYWdyYW5nZSBpbnRlcnBvbGF0aW9uIG9uIGFsbCBzdWJzZXRzLCBmYXN0ZXIgaW4gdGhlIG9wdGltaXN0aWMgc2NlbmFyaW8gdGhhbiBiZXJsZWthbXAtd2VsY2ggZHVlIHRvIGVhcmx5IGV4aXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcnVuIGxhZ3JhbmdlIGludGVycG9sYXRpb24gb24gYWxsIHN1YnNldHMsIGZhc3RlciBpbiB0aGUgb3B0aW1pc3RpYyBzY2VuYXJpbyB0aGFuIGJlcmxla2FtcC13ZWxjaCBkdWUgdG8gZWFybHkgZXhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29tYmlzID0ga0NvbWJpbmF0aW9ucyhkZWNyeXB0ZWRTaGFyZXMubGVuZ3RoLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVLZXkgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb21iaSA9IGFsbENvbWJpc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb21iaVNoYXJlcyA9IGRlY3J5cHRlZFNoYXJlcy5maWx0ZXIoZnVuY3Rpb24gKHYsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRDb21iaS5pbmNsdWRlcyhpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcmVzID0gY3VycmVudENvbWJpU2hhcmVzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGljZXMgPSBjdXJyZW50Q29tYmlTaGFyZXMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHguaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXJpdmVkUHJpdmF0ZUtleSA9IF90aGlzLmxhZ3JhbmdlSW50ZXJwb2xhdGlvbihzaGFyZXMsIGluZGljZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVyaXZlZFByaXZhdGVLZXkpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNyeXB0ZWRQdWJLZXkgPSBnZXRQdWJsaWMoQnVmZmVyLmZyb20oZGVyaXZlZFByaXZhdGVLZXkudG9TdHJpbmcoMTYsIDY0KSwgXCJoZXhcIikpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjcnlwdGVkUHViS2V5WCA9IGRlY3J5cHRlZFB1YktleS5zbGljZSgyLCA2Nik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNyeXB0ZWRQdWJLZXlZID0gZGVjcnlwdGVkUHViS2V5LnNsaWNlKDY2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3IEJOKGRlY3J5cHRlZFB1YktleVgsIDE2KS5jbXAobmV3IEJOKHRocmVzaG9sZFB1YmxpY0tleS5YLCAxNikpID09PSAwICYmIG5ldyBCTihkZWNyeXB0ZWRQdWJLZXlZLCAxNikuY21wKG5ldyBCTih0aHJlc2hvbGRQdWJsaWNLZXkuWSwgMTYpKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVLZXkgPSBkZXJpdmVkUHJpdmF0ZUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShqIDwgYWxsQ29tYmlzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXQgPSBfbG9vcChqKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX3JldCA9PT0gXCJjb250aW51ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJjb250aW51ZVwiLCAyMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX3JldCA9PT0gXCJicmVha1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJicmVha1wiLCAyNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHByaXZhdGVLZXkgPT09IHVuZGVmaW5lZCB8fCBwcml2YXRlS2V5ID09PSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGRlcml2ZSBwcml2YXRlIGtleVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCBwcml2YXRlS2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUzKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gxMCwgX3gxMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIF9yZWY2ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQocmV0dXJuZWRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaXZhdGVLZXksIGRlY3J5cHRlZFB1YktleSwgZGVjcnlwdGVkUHViS2V5WCwgZGVjcnlwdGVkUHViS2V5WSwgbWV0YWRhdGFOb25jZSwgX3lpZWxkJF90aGlzJGdldE5vbmNlLCBub25jZSwgZXRoQWRkcmVzcztcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDQucHJldiA9IF9jb250ZXh0NC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gcmV0dXJuZWRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpdmF0ZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwcml2YXRlIGtleSByZXR1cm5lZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcnlwdGVkUHViS2V5ID0gZ2V0UHVibGljKEJ1ZmZlci5mcm9tKHByaXZhdGVLZXkudG9TdHJpbmcoMTYsIDY0KSwgXCJoZXhcIikpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFB1YktleVggPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFB1YktleVkgPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoNjYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5lbmFibGVPbmVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldE5vbmNlKGRlY3J5cHRlZFB1YktleVgsIGRlY3J5cHRlZFB1YktleVksIHByaXZhdGVLZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfeWllbGQkX3RoaXMkZ2V0Tm9uY2UgPSBfY29udGV4dDQuc2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25jZSA9IF95aWVsZCRfdGhpcyRnZXROb25jZS5ub25jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YU5vbmNlID0gbmV3IEJOKG5vbmNlIHx8IFwiMFwiLCAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldE1ldGFkYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWDogZGVjcnlwdGVkUHViS2V5WCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWTogZGVjcnlwdGVkUHViS2V5WVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZSA9IF9jb250ZXh0NC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiPiB0b3J1cy5qcy9yZXRyaWV2ZVNoYXJlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2S2V5OiBwcml2YXRlS2V5LnRvU3RyaW5nKDE2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhTm9uY2U6IG1ldGFkYXRhTm9uY2UudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZUtleSA9IHByaXZhdGVLZXkuYWRkKG1ldGFkYXRhTm9uY2UpLnVtb2QoX3RoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoQWRkcmVzcyA9IF90aGlzLmdlbmVyYXRlQWRkcmVzc0Zyb21Qcml2S2V5KHByaXZhdGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIj4gdG9ydXMuanMvcmV0cmlldmVTaGFyZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoQWRkcmVzczogZXRoQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZLZXk6IHByaXZhdGVLZXkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IC8vIHJldHVybiByZWNvbnN0cnVjdGVkIHByaXZhdGUga2V5IGFuZCBldGhlcmV1bSBhZGRyZXNzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldGhBZGRyZXNzOiBldGhBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdktleTogcHJpdmF0ZUtleS50b1N0cmluZyhcImhleFwiLCA2NCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YU5vbmNlOiBtZXRhZGF0YU5vbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZTQpO1xuICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94MTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0oKSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU1LCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gcmV0cmlldmVTaGFyZXMoX3g1LCBfeDYsIF94NywgX3g4LCBfeDkpIHtcbiAgICAgICAgcmV0dXJuIF9yZXRyaWV2ZVNoYXJlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0cmlldmVTaGFyZXM7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TWV0YWRhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRNZXRhZGF0YSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KGRhdGEpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMsXG4gICAgICAgICAgICBtZXRhZGF0YVJlc3BvbnNlLFxuICAgICAgICAgICAgX2FyZ3M2ID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2JChfY29udGV4dDYpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gX2FyZ3M2Lmxlbmd0aCA+IDEgJiYgX2FyZ3M2WzFdICE9PSB1bmRlZmluZWQgPyBfYXJnczZbMV0gOiB7fTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDYucHJldiA9IDE7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0KFwiXCIuY29uY2F0KHRoaXMubWV0YWRhdGFIb3N0LCBcIi9nZXRcIiksIGRhdGEsIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBtZXRhZGF0YVJlc3BvbnNlID0gX2NvbnRleHQ2LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoISghbWV0YWRhdGFSZXNwb25zZSB8fCAhbWV0YWRhdGFSZXNwb25zZS5tZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgbmV3IEJOKDApKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgbmV3IEJOKG1ldGFkYXRhUmVzcG9uc2UubWVzc2FnZSwgMTYpKTtcblxuICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5wcmV2ID0gMTA7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2LnQwID0gX2NvbnRleHQ2W1wiY2F0Y2hcIl0oMSk7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiZ2V0IG1ldGFkYXRhIGVycm9yXCIsIF9jb250ZXh0Ni50MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgbmV3IEJOKDApKTtcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNiwgdGhpcywgW1sxLCAxMF1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGEoX3gxMykge1xuICAgICAgICByZXR1cm4gX2dldE1ldGFkYXRhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRNZXRhZGF0YTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZU1ldGFkYXRhUGFyYW1zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobWVzc2FnZSwgcHJpdmF0ZUtleSkge1xuICAgICAgdmFyIGtleSA9IHRoaXMuZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleS50b1N0cmluZyhcImhleFwiLCA2NCkpO1xuICAgICAgdmFyIHNldERhdGEgPSB7XG4gICAgICAgIGRhdGE6IG1lc3NhZ2UsXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IEJOKH5+KHRoaXMuc2VydmVyVGltZU9mZnNldCArIERhdGUubm93KCkgLyAxMDAwKSkudG9TdHJpbmcoMTYpXG4gICAgICB9O1xuICAgICAgdmFyIHNpZyA9IGtleS5zaWduKGtlY2NhazI1NihKc29uU3RyaW5naWZ5KHNldERhdGEpKS5zbGljZSgyKSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwdWJfa2V5X1g6IGtleS5nZXRQdWJsaWMoKS5nZXRYKCkudG9TdHJpbmcoXCJoZXhcIiksXG4gICAgICAgIHB1Yl9rZXlfWToga2V5LmdldFB1YmxpYygpLmdldFkoKS50b1N0cmluZyhcImhleFwiKSxcbiAgICAgICAgc2V0X2RhdGE6IHNldERhdGEsXG4gICAgICAgIHNpZ25hdHVyZTogQnVmZmVyLmZyb20oc2lnLnIudG9TdHJpbmcoMTYsIDY0KSArIHNpZy5zLnRvU3RyaW5nKDE2LCA2NCkgKyBuZXcgQk4oXCJcIikudG9TdHJpbmcoMTYsIDIpLCBcImhleFwiKS50b1N0cmluZyhcImJhc2U2NFwiKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0TWV0YWRhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9zZXRNZXRhZGF0YSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU3KGRhdGEpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMsXG4gICAgICAgICAgICBtZXRhZGF0YVJlc3BvbnNlLFxuICAgICAgICAgICAgX2FyZ3M3ID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU3JChfY29udGV4dDcpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDcucHJldiA9IF9jb250ZXh0Ny5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gX2FyZ3M3Lmxlbmd0aCA+IDEgJiYgX2FyZ3M3WzFdICE9PSB1bmRlZmluZWQgPyBfYXJnczdbMV0gOiB7fTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDcucHJldiA9IDE7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0KFwiXCIuY29uY2F0KHRoaXMubWV0YWRhdGFIb3N0LCBcIi9zZXRcIiksIGRhdGEsIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIHVzZUFQSUtleTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBtZXRhZGF0YVJlc3BvbnNlID0gX2NvbnRleHQ3LnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgbWV0YWRhdGFSZXNwb25zZS5tZXNzYWdlKTtcblxuICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ3LnByZXYgPSA4O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ny50MCA9IF9jb250ZXh0N1tcImNhdGNoXCJdKDEpO1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcInNldCBtZXRhZGF0YSBlcnJvclwiLCBfY29udGV4dDcudDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuYWJydXB0KFwicmV0dXJuXCIsIFwiXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU3LCB0aGlzLCBbWzEsIDhdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHNldE1ldGFkYXRhKF94MTQpIHtcbiAgICAgICAgcmV0dXJuIF9zZXRNZXRhZGF0YS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0TWV0YWRhdGE7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwibGFncmFuZ2VJbnRlcnBvbGF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxhZ3JhbmdlSW50ZXJwb2xhdGlvbihzaGFyZXMsIG5vZGVJbmRleCkge1xuICAgICAgaWYgKHNoYXJlcy5sZW5ndGggIT09IG5vZGVJbmRleC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWNyZXQgPSBuZXcgQk4oMCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciB1cHBlciA9IG5ldyBCTigxKTtcbiAgICAgICAgdmFyIGxvd2VyID0gbmV3IEJOKDEpO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hhcmVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKGkgIT09IGopIHtcbiAgICAgICAgICAgIHVwcGVyID0gdXBwZXIubXVsKG5vZGVJbmRleFtqXS5uZWcoKSk7XG4gICAgICAgICAgICB1cHBlciA9IHVwcGVyLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICAgIHZhciB0ZW1wID0gbm9kZUluZGV4W2ldLnN1Yihub2RlSW5kZXhbal0pO1xuICAgICAgICAgICAgdGVtcCA9IHRlbXAudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgbG93ZXIgPSBsb3dlci5tdWwodGVtcCkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWx0YSA9IHVwcGVyLm11bChsb3dlci5pbnZtKHRoaXMuZWMuY3VydmUubikpLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgZGVsdGEgPSBkZWx0YS5tdWwoc2hhcmVzW2ldKS51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgIHNlY3JldCA9IHNlY3JldC5hZGQoZGVsdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VjcmV0LnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXkocHJpdmF0ZUtleSkge1xuICAgICAgdmFyIGtleSA9IHRoaXMuZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleS50b1N0cmluZyhcImhleFwiLCA2NCksIFwiaGV4XCIpO1xuICAgICAgdmFyIHB1YmxpY0tleSA9IGtleS5nZXRQdWJsaWMoKS5lbmNvZGUoXCJoZXhcIiwgZmFsc2UpLnNsaWNlKDIpO1xuICAgICAgbG9nLmluZm8ocHVibGljS2V5LCBcInB1YmxpYyBrZXlcIik7XG4gICAgICB2YXIgZXRoQWRkcmVzc0xvd2VyID0gXCIweFwiLmNvbmNhdChrZWNjYWsyNTYoQnVmZmVyLmZyb20ocHVibGljS2V5LCBcImhleFwiKSkuc2xpY2UoNjQgLSAzOCkpO1xuICAgICAgcmV0dXJuIHRvQ2hlY2tzdW1BZGRyZXNzKGV0aEFkZHJlc3NMb3dlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleShwdWJsaWNLZXlYLCBwdWJsaWNLZXlZKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgeDogcHVibGljS2V5WC50b1N0cmluZyhcImhleFwiLCA2NCksXG4gICAgICAgIHk6IHB1YmxpY0tleVkudG9TdHJpbmcoXCJoZXhcIiwgNjQpXG4gICAgICB9KTtcbiAgICAgIHZhciBwdWJsaWNLZXkgPSBrZXkuZ2V0UHVibGljKCkuZW5jb2RlKFwiaGV4XCIsIGZhbHNlKS5zbGljZSgyKTtcbiAgICAgIGxvZy5pbmZvKGtleS5nZXRQdWJsaWMoKS5lbmNvZGUoXCJoZXhcIiwgZmFsc2UpLCBcInB1YmxpYyBrZXlcIik7XG4gICAgICB2YXIgZXRoQWRkcmVzc0xvd2VyID0gXCIweFwiLmNvbmNhdChrZWNjYWsyNTYoQnVmZmVyLmZyb20ocHVibGljS2V5LCBcImhleFwiKSkuc2xpY2UoNjQgLSAzOCkpO1xuICAgICAgcmV0dXJuIHRvQ2hlY2tzdW1BZGRyZXNzKGV0aEFkZHJlc3NMb3dlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5vdGU6IHVzZSB0aGlzIGZ1bmN0aW9uIG9ubHkgd2l0aCBjdXN0b20gYXV0aCwgZG9uJ3QgdXNlIHRvIGxvb2t1cCBvcGVubG9naW4gYWNjb3VudHMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQdWJsaWNBZGRyZXNzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0UHVibGljQWRkcmVzcyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU4KGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywgX3JlZjcpIHtcbiAgICAgICAgdmFyIHZlcmlmaWVyLFxuICAgICAgICAgICAgdmVyaWZpZXJJZCxcbiAgICAgICAgICAgIGlzRXh0ZW5kZWQsXG4gICAgICAgICAgICBmaW5hbEtleVJlc3VsdCxcbiAgICAgICAgICAgIGlzTmV3S2V5LFxuICAgICAgICAgICAgX3JlZjgsXG4gICAgICAgICAgICBrZXlSZXN1bHQsXG4gICAgICAgICAgICBlcnJvclJlc3VsdCxcbiAgICAgICAgICAgIGFzc2lnblJlc3VsdCxcbiAgICAgICAgICAgIF9ub25jZSxcbiAgICAgICAgICAgIF9maW5hbEtleVJlc3VsdCRrZXlzJDIsXG4gICAgICAgICAgICBYLFxuICAgICAgICAgICAgWSxcbiAgICAgICAgICAgIG5vbmNlUmVzdWx0LFxuICAgICAgICAgICAgbm9uY2UsXG4gICAgICAgICAgICBtb2RpZmllZFB1YktleSxcbiAgICAgICAgICAgIHR5cGVPZlVzZXIsXG4gICAgICAgICAgICBwdWJOb25jZSxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBfYXJnczggPSBhcmd1bWVudHM7XG5cbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlOCQoX2NvbnRleHQ4KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ4LnByZXYgPSBfY29udGV4dDgubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdmVyaWZpZXIgPSBfcmVmNy52ZXJpZmllciwgdmVyaWZpZXJJZCA9IF9yZWY3LnZlcmlmaWVySWQ7XG4gICAgICAgICAgICAgICAgaXNFeHRlbmRlZCA9IF9hcmdzOC5sZW5ndGggPiAzICYmIF9hcmdzOFszXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M4WzNdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiPiB0b3J1cy5qcy9nZXRQdWJsaWNBZGRyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgIGVuZHBvaW50czogZW5kcG9pbnRzLFxuICAgICAgICAgICAgICAgICAgdG9ydXNOb2RlUHViczogdG9ydXNOb2RlUHVicyxcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVySWQ6IHZlcmlmaWVySWQsXG4gICAgICAgICAgICAgICAgICBpc0V4dGVuZGVkOiBpc0V4dGVuZGVkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKTtcblxuICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnQwID0gX2NvbnRleHQ4LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2NvbnRleHQ4LnQwKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDgudDAgPSB7fTtcblxuICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgX3JlZjggPSBfY29udGV4dDgudDA7XG4gICAgICAgICAgICAgICAga2V5UmVzdWx0ID0gX3JlZjgua2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gX3JlZjguZXJyb3JSZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShlcnJvclJlc3VsdCAmJiBKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCkuaW5jbHVkZXMoXCJWZXJpZmllciBub3Qgc3VwcG9ydGVkXCIpKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxNjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlcmlmaWVyIG5vdCBzdXBwb3J0ZWQuIENoZWNrIGlmIHlvdTogXFxuXFxuICAgICAgMS4gQXJlIG9uIHRoZSByaWdodCBuZXR3b3JrIChUb3J1cyB0ZXN0bmV0L21haW5uZXQpIFxcblxcbiAgICAgIDIuIEhhdmUgc2V0dXAgYSB2ZXJpZmllciBvbiBkYXNoYm9hcmQud2ViM2F1dGguaW8/XCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgaWYgKCEoZXJyb3JSZXN1bHQgJiYgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQpLmluY2x1ZGVzKFwiVmVyaWZpZXIgKyBWZXJpZmllcklEIGhhcyBub3QgeWV0IGJlZW4gYXNzaWduZWRcIikpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDI2O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5QXNzaWduKHtcbiAgICAgICAgICAgICAgICAgIGVuZHBvaW50czogZW5kcG9pbnRzLFxuICAgICAgICAgICAgICAgICAgdG9ydXNOb2RlUHViczogdG9ydXNOb2RlUHVicyxcbiAgICAgICAgICAgICAgICAgIGxhc3RQb2ludDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgZmlyc3RQb2ludDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgdmVyaWZpZXI6IHZlcmlmaWVyLFxuICAgICAgICAgICAgICAgICAgdmVyaWZpZXJJZDogdmVyaWZpZXJJZCxcbiAgICAgICAgICAgICAgICAgIHNpZ25lckhvc3Q6IHRoaXMuc2lnbmVySG9zdCxcbiAgICAgICAgICAgICAgICAgIG5ldHdvcms6IHRoaXMubmV0d29ya1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2FpdEtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkLCAxMDAwKTtcblxuICAgICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgIGFzc2lnblJlc3VsdCA9IF9jb250ZXh0OC5zZW50O1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0ID0gYXNzaWduUmVzdWx0ID09PSBudWxsIHx8IGFzc2lnblJlc3VsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXNzaWduUmVzdWx0LmtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBpc05ld0tleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAzMTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgICAgIGlmICgha2V5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDMwO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQgPSBrZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAzMTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmlyc3QgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIj4gdG9ydXMuanMvZ2V0UHVibGljQWRkcmVzc1wiLCB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdDogZmluYWxLZXlSZXN1bHQsXG4gICAgICAgICAgICAgICAgICBpc05ld0tleTogaXNOZXdLZXlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghZmluYWxLZXlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNjk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfZmluYWxLZXlSZXN1bHQka2V5cyQyID0gZmluYWxLZXlSZXN1bHQua2V5c1swXSwgWCA9IF9maW5hbEtleVJlc3VsdCRrZXlzJDIucHViX2tleV9YLCBZID0gX2ZpbmFsS2V5UmVzdWx0JGtleXMkMi5wdWJfa2V5X1k7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW5hYmxlT25lS2V5KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDU3O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnByZXYgPSAzNTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDM4O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9yU2V0Tm9uY2UoWCwgWSwgdW5kZWZpbmVkLCAhaXNOZXdLZXkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgbm9uY2VSZXN1bHQgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgICAgICBub25jZSA9IG5ldyBCTihub25jZVJlc3VsdC5ub25jZSB8fCBcIjBcIiwgMTYpO1xuICAgICAgICAgICAgICAgIHR5cGVPZlVzZXIgPSBub25jZVJlc3VsdC50eXBlT2ZVc2VyO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNDY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICAgICAgICBfY29udGV4dDgucHJldiA9IDQzO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC50MSA9IF9jb250ZXh0OFtcImNhdGNoXCJdKDM1KTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR2V0T3JTZXROb25jZUVycm9yKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgICAgICBpZiAoIShub25jZVJlc3VsdC50eXBlT2ZVc2VyID09PSBcInYxXCIpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDUwO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgIHk6IFlcbiAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHJpdmF0ZShub25jZS50b1N0cmluZygxNikpLmdldFB1YmxpYygpKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDU1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTA6XG4gICAgICAgICAgICAgICAgaWYgKCEobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MlwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1NDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChub25jZVJlc3VsdC51cGdyYWRlZCkge1xuICAgICAgICAgICAgICAgICAgLy8gT25lS2V5IGlzIHVwZ3JhZGVkIHRvIDIvbiwgcmV0dXJuZWQgYWRkcmVzcyBpcyBhZGRyZXNzIG9mIFRvcnVzIGtleSAocG9zdGJveCBrZXkpLCBub3QgdEtleVxuICAgICAgICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgICAgeDogbm9uY2VSZXN1bHQucHViTm9uY2UueCxcbiAgICAgICAgICAgICAgICAgICAgeTogbm9uY2VSZXN1bHQucHViTm9uY2UueVxuICAgICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkpO1xuICAgICAgICAgICAgICAgICAgcHViTm9uY2UgPSBub25jZVJlc3VsdC5wdWJOb25jZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDU1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0T3JTZXROb25jZSBzaG91bGQgYWx3YXlzIHJldHVybiB0eXBlT2ZVc2VyLlwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDU1OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNjI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA1NzpcbiAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyID0gXCJ2MVwiO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNjA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWV0YWRhdGEoe1xuICAgICAgICAgICAgICAgICAgcHViX2tleV9YOiBYLFxuICAgICAgICAgICAgICAgICAgcHViX2tleV9ZOiBZXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgICAgICBub25jZSA9IF9jb250ZXh0OC5zZW50O1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgIHg6IFgsXG4gICAgICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVByaXZhdGUobm9uY2UudG9TdHJpbmcoMTYpKS5nZXRQdWJsaWMoKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICBYID0gbW9kaWZpZWRQdWJLZXkuZ2V0WCgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBZID0gbW9kaWZpZWRQdWJLZXkuZ2V0WSgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzID0gdGhpcy5nZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5KG1vZGlmaWVkUHViS2V5LmdldFgoKSwgbW9kaWZpZWRQdWJLZXkuZ2V0WSgpKTtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL2dldFB1YmxpY0FkZHJlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgWDogWCxcbiAgICAgICAgICAgICAgICAgIFk6IFksXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgdHlwZU9mVXNlcjogdHlwZU9mVXNlcixcbiAgICAgICAgICAgICAgICAgIG5vbmNlOiAoX25vbmNlID0gbm9uY2UpID09PSBudWxsIHx8IF9ub25jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vbmNlLnRvU3RyaW5nKDE2KSxcbiAgICAgICAgICAgICAgICAgIHB1Yk5vbmNlOiBwdWJOb25jZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRXh0ZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNjg7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdChcInJldHVyblwiLCBhZGRyZXNzKTtcblxuICAgICAgICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDguYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgICAgIHR5cGVPZlVzZXI6IHR5cGVPZlVzZXIsXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgWDogWCxcbiAgICAgICAgICAgICAgICAgIFk6IFksXG4gICAgICAgICAgICAgICAgICBtZXRhZGF0YU5vbmNlOiBub25jZSxcbiAgICAgICAgICAgICAgICAgIHB1Yk5vbmNlOiBwdWJOb25jZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjk6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9kZSByZXN1bHRzIGRvIG5vdCBtYXRjaCBhdCBmaW5hbCBsb29rdXAgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGtleVJlc3VsdCB8fCB7fSksIFwiLCBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0IHx8IHt9KSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzA6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU4LCB0aGlzLCBbWzM1LCA0M11dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0UHVibGljQWRkcmVzcyhfeDE1LCBfeDE2LCBfeDE3KSB7XG4gICAgICAgIHJldHVybiBfZ2V0UHVibGljQWRkcmVzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0UHVibGljQWRkcmVzcztcbiAgICB9KClcbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBmdW5jdGlvbnMgZm9yIE9uZUtleSAoT3BlbkxvZ2luIHYyKSwgb25seSBjYWxsIHRoZXNlIGZ1bmN0aW9ucyBpZiB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZ1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0T3JTZXROb25jZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2dldE9yU2V0Tm9uY2UgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlOShYLCBZLCBwcml2S2V5KSB7XG4gICAgICAgIHZhciBnZXRPbmx5LFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIG1zZyxcbiAgICAgICAgICAgIF9hcmdzOSA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlOSQoX2NvbnRleHQ5KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ5LnByZXYgPSBfY29udGV4dDkubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZ2V0T25seSA9IF9hcmdzOS5sZW5ndGggPiAzICYmIF9hcmdzOVszXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M5WzNdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbXNnID0gZ2V0T25seSA/IFwiZ2V0Tm9uY2VcIiA6IFwiZ2V0T3JTZXROb25jZVwiO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByaXZLZXkpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobXNnLCBwcml2S2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHViX2tleV9YOiBYLFxuICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1k6IFksXG4gICAgICAgICAgICAgICAgICAgIHNldF9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogbXNnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5hYnJ1cHQoXCJyZXR1cm5cIiwgcG9zdChcIlwiLmNvbmNhdCh0aGlzLm1ldGFkYXRhSG9zdCwgXCIvZ2V0X29yX3NldF9ub25jZVwiKSwgZGF0YSwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlOSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE9yU2V0Tm9uY2UoX3gxOCwgX3gxOSwgX3gyMCkge1xuICAgICAgICByZXR1cm4gX2dldE9yU2V0Tm9uY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldE9yU2V0Tm9uY2U7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Tm9uY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXROb25jZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUxMChYLCBZLCBwcml2S2V5KSB7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTEwJChfY29udGV4dDEwKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQxMC5wcmV2ID0gX2NvbnRleHQxMC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy5nZXRPclNldE5vbmNlKFgsIFksIHByaXZLZXksIHRydWUpKTtcblxuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMTAsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXROb25jZShfeDIxLCBfeDIyLCBfeDIzKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Tm9uY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldE5vbmNlO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImdldFBvc3Rib3hLZXlGcm9tMU91dE9mMVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3N0Ym94S2V5RnJvbTFPdXRPZjEocHJpdktleSwgbm9uY2UpIHtcbiAgICAgIHZhciBwcml2S2V5Qk4gPSBuZXcgQk4ocHJpdktleSwgMTYpO1xuICAgICAgdmFyIG5vbmNlQk4gPSBuZXcgQk4obm9uY2UsIDE2KTtcbiAgICAgIHJldHVybiBwcml2S2V5Qk4uc3ViKG5vbmNlQk4pLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKS50b1N0cmluZyhcImhleFwiKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJlbmFibGVMb2dnaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmcoKSB7XG4gICAgICB2YXIgdiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcbiAgICAgIGlmICh2KSBsb2cuZW5hYmxlQWxsKCk7ZWxzZSBsb2cuZGlzYWJsZUFsbCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRBUElLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QVBJS2V5JDEoYXBpS2V5KSB7XG4gICAgICBzZXRBUElLZXkoYXBpS2V5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RW1iZWRIb3N0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEVtYmVkSG9zdCQxKGVtYmVkSG9zdCkge1xuICAgICAgc2V0RW1iZWRIb3N0KGVtYmVkSG9zdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzR2V0T3JTZXROb25jZUVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzR2V0T3JTZXROb25jZUVycm9yKGVycikge1xuICAgICAgcmV0dXJuIGVyciBpbnN0YW5jZW9mIEdldE9yU2V0Tm9uY2VFcnJvcjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVG9ydXM7XG59KCk7XG5cbmV4cG9ydCB7IEdldE9yU2V0Tm9uY2VFcnJvciwgVG9ydXMgYXMgZGVmYXVsdCwga0NvbWJpbmF0aW9ucywga2VjY2FrMjU2LCBrZXlBc3NpZ24sIGtleUxvb2t1cCwgdGhyZXNob2xkU2FtZSwgd2FpdEtleUxvb2t1cCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9ydXNVdGlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBOb2RlRGV0YWlsTWFuYWdlciBmcm9tICdAdG9ydXNsYWJzL2ZldGNoLW5vZGUtZGV0YWlscyc7XG5pbXBvcnQgeyBnZXQsIHNldEFQSUtleSB9IGZyb20gJ0B0b3J1c2xhYnMvaHR0cC1oZWxwZXJzJztcbmltcG9ydCB7IFNhZmVFdmVudEVtaXR0ZXIsIE9iamVjdE11bHRpcGxleCwgY3JlYXRlU3RyZWFtTWlkZGxld2FyZSwgSlJQQ0VuZ2luZSwgY3JlYXRlSWRSZW1hcE1pZGRsZXdhcmUsIEJhc2VQb3N0TWVzc2FnZVN0cmVhbSwgc2V0dXBNdWx0aXBsZXggfSBmcm9tICdAdG9ydXNsYWJzL29wZW5sb2dpbi1qcnBjJztcbmltcG9ydCBUb3J1c0pzIGZyb20gJ0B0b3J1c2xhYnMvdG9ydXMuanMnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdsb2Rhc2gubWVyZ2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVN0b3JlLCBzdG9yZUFzU3RyZWFtIH0gZnJvbSAnQG1ldGFtYXNrL29icy1zdG9yZSc7XG5pbXBvcnQgeyBldGhFcnJvcnMsIEV0aGVyZXVtUnBjRXJyb3IgfSBmcm9tICdldGgtcnBjLWVycm9ycyc7XG5pbXBvcnQgZGVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBkdXBsZXggfSBmcm9tICdpcy1zdHJlYW0nO1xuaW1wb3J0IHB1bXAgZnJvbSAncHVtcCc7XG5pbXBvcnQgbG9nbGV2ZWwgZnJvbSAnbG9nbGV2ZWwnO1xuaW1wb3J0IGNyZWF0ZUhhc2ggZnJvbSAnY3JlYXRlLWhhc2gnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcblxuY29uc3QgTE9HSU5fUFJPVklERVIgPSB7XG4gIEdPT0dMRTogXCJnb29nbGVcIixcbiAgRkFDRUJPT0s6IFwiZmFjZWJvb2tcIixcbiAgVFdJVENIOiBcInR3aXRjaFwiLFxuICBSRURESVQ6IFwicmVkZGl0XCIsXG4gIERJU0NPUkQ6IFwiZGlzY29yZFwiXG59O1xuY29uc3QgV0FMTEVUX1ZFUklGSUVSUyA9IHtcbiAgR09PR0xFOiBcImdvb2dsZVwiLFxuICBGQUNFQk9PSzogXCJmYWNlYm9va1wiLFxuICBUV0lUQ0g6IFwidHdpdGNoXCIsXG4gIFJFRERJVDogXCJyZWRkaXRcIixcbiAgRElTQ09SRDogXCJkaXNjb3JkXCIsXG4gIEVNQUlMX1BBU1NXT1JETEVTUzogXCJ0b3J1cy1hdXRoMC1lbWFpbC1wYXNzd29yZGxlc3NcIlxufTtcbmNvbnN0IFdBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQID0ge1xuICBbV0FMTEVUX1ZFUklGSUVSUy5HT09HTEVdOiBcInRrZXktZ29vZ2xlXCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLkZBQ0VCT09LXTogXCJ0a2V5LWZhY2Vib29rXCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLlRXSVRDSF06IFwidGtleS10d2l0Y2hcIixcbiAgW1dBTExFVF9WRVJJRklFUlMuUkVERElUXTogXCJ0a2V5LXJlZGRpdFwiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5ESVNDT1JEXTogXCJ0a2V5LWRpc2NvcmRcIixcbiAgW1dBTExFVF9WRVJJRklFUlMuRU1BSUxfUEFTU1dPUkRMRVNTXTogXCJ0a2V5LWF1dGgwLWVtYWlsLXBhc3N3b3JkbGVzc1wiXG59O1xuY29uc3QgUEFZTUVOVF9QUk9WSURFUiA9IHtcbiAgTU9PTlBBWTogXCJtb29ucGF5XCIsXG4gIFdZUkU6IFwid3lyZVwiLFxuICBSQU1QTkVUV09SSzogXCJyYW1wbmV0d29ya1wiLFxuICBYQU5QT09MOiBcInhhbnBvb2xcIixcbiAgTUVSQ1VSWU86IFwibWVyY3VyeW9cIixcbiAgVFJBTlNBSzogXCJ0cmFuc2FrXCJcbn07XG5jb25zdCBUT1JVU19CVUlMRF9FTlYgPSB7XG4gIFBST0RVQ1RJT046IFwicHJvZHVjdGlvblwiLFxuICBERVZFTE9QTUVOVDogXCJkZXZlbG9wbWVudFwiLFxuICBCSU5BTkNFOiBcImJpbmFuY2VcIixcbiAgVEVTVElORzogXCJ0ZXN0aW5nXCIsXG4gIExSQzogXCJscmNcIixcbiAgQkVUQTogXCJiZXRhXCJcbn07XG5jb25zdCBCVVRUT05fUE9TSVRJT04gPSB7XG4gIEJPVFRPTV9MRUZUOiBcImJvdHRvbS1sZWZ0XCIsXG4gIFRPUF9MRUZUOiBcInRvcC1sZWZ0XCIsXG4gIEJPVFRPTV9SSUdIVDogXCJib3R0b20tcmlnaHRcIixcbiAgVE9QX1JJR0hUOiBcInRvcC1yaWdodFwiXG59O1xuXG5jb25zdCBwYXltZW50UHJvdmlkZXJzJDEgPSB7XG4gIFtQQVlNRU5UX1BST1ZJREVSLlJBTVBORVRXT1JLXToge1xuICAgIGxpbmUxOiBcIkRlYml0IENhcmQvIEFwcGxlIFBheS8gQmFuayB0cmFuc2ZlclwiLFxuICAgIGxpbmUyOiBcIjAuNDklIC0gMi45JVwiLFxuICAgIGxpbmUzOiBcIjUsMDAw4oKsL3B1cmNoYXNlLCAyMCwwMDDigqwvbW9cIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL2luc3RhbnQucmFtcC5uZXR3b3JrL1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDUwLFxuICAgIG1heE9yZGVyVmFsdWU6IDIwMDAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiR0JQXCIsIFwiRVVSXCIsIFwiVVNEXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiVVNEQ1wiLCBcIkJTQ19CTkJcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuTU9PTlBBWV06IHtcbiAgICBsaW5lMTogXCJDcmVkaXQgLyBEZWJpdCBDYXJkIC8gQXBwbGUgUGF5XCIsXG4gICAgbGluZTI6IFwiNC41JSBvciA1IFVTRFwiLFxuICAgIGxpbmUzOiBcIjIsMDAw4oKsL2RheSwgMTAsMDAw4oKsL21vXCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9oZWxwLm1vb25wYXkuaW8vZW4vXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogMjQuOTksXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwMDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbXCJVU0RcIiwgXCJFVVJcIiwgXCJHQlBcIiwgXCJBVURcIiwgXCJDQURcIiwgXCJTR0RcIiwgXCJSVUJcIl0sXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzOiBbXCJFVEhcIiwgXCJEQUlcIiwgXCJUVVNEXCIsIFwiVVNEQ1wiLCBcIlVTRFRcIiwgXCJCTkJfQlNDXCIsIFwiQlVTRF9CU0NcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuV1lSRV06IHtcbiAgICBsaW5lMTogXCJBcHBsZSBQYXkvIERlYml0LyBDcmVkaXQgQ2FyZFwiLFxuICAgIGxpbmUyOiBcIjQuOSUgKyAzMMKiIG9yIDUgVVNEXCIsXG4gICAgbGluZTM6IFwiJDI1MC9kYXlcIixcbiAgICBzdXBwb3J0UGFnZTogXCJodHRwczovL3N1cHBvcnQuc2VuZHd5cmUuY29tL2VuL1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDUsXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiVVNEXCIsIFwiQVVEXCIsIFwiQ0FEXCIsIFwiR0JQXCIsIFwiRVVSXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiVVNEQ1wiLCBcIlVTRFRcIl0sXG4gICAgaW5jbHVkZUZlZXM6IGZhbHNlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLlhBTlBPT0xdOiB7XG4gICAgbGluZTE6IFwiUGF5Tm93LyBJbnN0YVBheS8gRlBTLyBHb0pla1BheS8gVVBJLyBQcm9tcHRQYXkvIFZpZXRlbFBheS8gRHVpdE5vd1wiLFxuICAgIGxpbmUyOiBcIjIuNSUgYnV5aW5nLCAzJSBzZWxsaW5nXCIsXG4gICAgbGluZTM6IFwiJDIsNTAwIC8gZGF5XCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwibWFpbHRvOnN1cHBvcnRAeGFucG9vbC5jb21cIixcbiAgICBtaW5PcmRlclZhbHVlOiAxMDAsXG4gICAgbWF4T3JkZXJWYWx1ZTogMjUwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlNHRFwiLCBcIkhLRFwiLCBcIk1ZUlwiLCBcIlBIUFwiLCBcIklOUlwiLCBcIlZORFwiLCBcIlRIQlwiLCBcIklEUlwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIlVTRFRcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgc2VsbDogdHJ1ZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9LFxuICBbUEFZTUVOVF9QUk9WSURFUi5NRVJDVVJZT106IHtcbiAgICBsaW5lMTogXCJDcmVkaXQvIERlYml0IENhcmQvIEFwcGxlIFBheVwiLFxuICAgIGxpbmUyOiBcIjMuOTUlIG9yIDQgVVNEXCIsXG4gICAgbGluZTM6IFwiMTAsMDAw4oKsL2RheSwgMjUsMDAw4oKsL21vXCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwibWFpbHRvOnN1cHBvcnRAbWVyY3VyeW8uaW9cIixcbiAgICBtaW5PcmRlclZhbHVlOiAzMCxcbiAgICBtYXhPcmRlclZhbHVlOiA1MDAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiVVNEXCIsIFwiRVVSXCIsIFwiUlVCXCIsIFwiVFJZXCIsIFwiR0JQXCIsIFwiVUFIXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiQkFUXCIsIFwiVVNEVFwiLCBcIk9LQlwiXSxcbiAgICBpbmNsdWRlRmVlczogdHJ1ZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9LFxuICBbUEFZTUVOVF9QUk9WSURFUi5UUkFOU0FLXToge1xuICAgIGxpbmUxOiBcIkNyZWRpdC8gRGViaXQgQ2FyZC8gPGJyLz5CYW5rIFRyYW5zZmVyIChzZXBhL2dicClcIixcbiAgICBsaW5lMjogXCIwLjk5JSAtIDUuNSUgb3IgNSBVU0RcIixcbiAgICBsaW5lMzogXCI1MDDigqwvZGF5XCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9zdXBwb3J0LnRyYW5zYWsuY29tL2hjL2VuLVVTXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogMjAsXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiVVNEXCIsIFwiRVVSXCIsIFwiR0JQXCIsIFwiQVVEXCIsIFwiQ0FEXCIsIFwiU0dEXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiVVNEQ1wiLCBcIlVTRFRcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfVxufTtcbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZW46IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwiQ29udGludWVcIixcbiAgICAgIGFjdGlvblJlcXVpcmVkOiBcIkF1dGhvcml6YXRpb24gcmVxdWlyZWRcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwiQ2xpY2sgY29udGludWUgdG8gcHJvY2VlZCB3aXRoIHlvdXIgcmVxdWVzdCBpbiBhIHBvcHVwXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwiQ29va2llcyBSZXF1aXJlZFwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCJQbGVhc2UgZW5hYmxlIGNvb2tpZXMgaW4geW91ciBicm93c2VyIHByZWZlcmVuY2VzIHRvIGFjY2VzcyBUb3J1c1wiLFxuICAgICAgY2xpY2tIZXJlOiBcIk1vcmUgSW5mb1wiXG4gICAgfVxuICB9LFxuICBkZToge1xuICAgIGVtYmVkOiB7XG4gICAgICBjb250aW51ZTogXCJGb3J0c2V0emVuXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCJBdXRvcmlzaWVydW5nIGVyZm9yZGVybGljaFwiLFxuICAgICAgcGVuZGluZ0FjdGlvbjogXCJLbGlja2VuIFNpZSBpbiBlaW5lbSBQb3B1cCBhdWYgV2VpdGVyLCB1bSBtaXQgSWhyZXIgQW5mcmFnZSBmb3J0enVmYWhyZW5cIixcbiAgICAgIGNvb2tpZXNSZXF1aXJlZDogXCJDb29raWVzIGJlbsO2dGlndFwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCJCaXR0ZSBha3RpdmllcmVuIFNpZSBDb29raWVzIGluIElocmVuIEJyb3dzZXJlaW5zdGVsbHVuZ2VuLCB1bSBhdWYgVG9ydXMgenV6dWdyZWlmZW5cIixcbiAgICAgIGNsaWNrSGVyZTogXCJNZWhyIEluZm9cIlxuICAgIH1cbiAgfSxcbiAgamE6IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwi57aZ57aa44GZ44KLXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCLoqo3oqLzjgYzlv4XopoHjgafjgZlcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwi57aa6KGM44KS44Kv44Oq44OD44Kv44GX44Gm44CB44Od44OD44OX44Ki44OD44OX44Gn44Oq44Kv44Ko44K544OI44KS57aa6KGM44GX44G+44GZXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwi5b+F6KaB44Gq44Kv44OD44Kt44O8XCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIlRvcnVz44Gr44Ki44Kv44K744K544GZ44KL44Gr44Gv44CB44OW44Op44Km44K244Gu6Kit5a6a44GnQ29va2ll44KS5pyJ5Yq544Gr44GX44Gm44GP44Gg44GV44GE44CCXCIsXG4gICAgICBjbGlja0hlcmU6IFwi6Kmz44GX44GP44GvXCJcbiAgICB9XG4gIH0sXG4gIGtvOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIuqzhOyGje2VmOuLpFwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwi7Iq57J24IO2VhOyalFwiLFxuICAgICAgcGVuZGluZ0FjdGlvbjogXCLtjJ3sl4Xsl5DshJwg7JqU7LKt7J2EIOynhO2Wie2VmOugpOuptCDqs4Tsho3snYQg7YG066at7ZWY7Iut7Iuc7JikLlwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIuy/oO2CpCDtlYTsmpRcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwi67iM65287Jqw7KCAIO2ZmOqyvSDshKTsoJXsl5DshJwg7L+g7YKk66W8IO2ZnOyEse2ZlO2VmOyXrCBUb3J1c+yXkCDslaHshLjsiqTtlZjsi63si5zsmKQuXCIsXG4gICAgICBjbGlja0hlcmU6IFwi642UIOunjuydgCDsoJXrs7RcIlxuICAgIH1cbiAgfSxcbiAgemg6IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwi57un57utXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCLpnIDopoHmjojmnYNcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwi5Y2V5Ye757un57ut5Lul5Zyo5by55Ye656qX5Y+j5Lit57un57ut5oKo55qE6K+35rGCXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwi5b+F5aGrQ29va2llXCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIuivt+WcqOaCqOeahOa1j+iniOWZqOmmlumAiemhueS4reWQr+eUqGNvb2tpZeS7peiuv+mXrlRvcnVz44CCXCIsXG4gICAgICBjbGlja0hlcmU6IFwi5pu05aSa5L+h5oGvXCJcbiAgICB9XG4gIH1cbn07XG52YXIgY29uZmlndXJhdGlvbiA9IHtcbiAgc3VwcG9ydGVkVmVyaWZpZXJMaXN0OiBPYmplY3QudmFsdWVzKFdBTExFVF9WRVJJRklFUlMpLFxuICBwYXltZW50UHJvdmlkZXJzOiBwYXltZW50UHJvdmlkZXJzJDEsXG4gIGFwaTogXCJodHRwczovL2FwaS50b3IudXNcIixcbiAgdHJhbnNsYXRpb25zLFxuICBwcm9kVG9ydXNVcmw6IFwiXCIsXG4gIGxvY2FsU3RvcmFnZUtleVByZWZpeDogXCJ0b3J1cy1cIlxufTtcblxuY29uc3QgcnVuT25Mb2FkID0gZm4gPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBpZiAod2luZG93LmRvY3VtZW50LmJvZHkgIT0gbnVsbCkge1xuICAgIFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbn0pO1xuY29uc3QgaHRtbFRvRWxlbWVudCA9IGh0bWwgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gIGNvbnN0IHRyaW1tZWRIdG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcblxuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0cmltbWVkSHRtbDtcbiAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbn07XG5jb25zdCBoYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChoYW5kbGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaGFuZGxlckFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGhhbmRsZXJBcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXJXcmFwcGVyID0gKCkgPT4ge1xuICAgIGhhbmRsZXIoLi4uaGFuZGxlckFyZ3MpO1xuICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xuICB9O1xuXG4gIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xufTtcbmNvbnN0IGhhbmRsZVN0cmVhbSA9IChoYW5kbGUsIGV2ZW50TmFtZSwgaGFuZGxlcikgPT4ge1xuICBjb25zdCBoYW5kbGVyV3JhcHBlciA9IGNodW5rID0+IHtcbiAgICBoYW5kbGVyKGNodW5rKTtcbiAgICBoYW5kbGUucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyV3JhcHBlcik7XG4gIH07XG5cbiAgaGFuZGxlLm9uKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xufTtcbmFzeW5jIGZ1bmN0aW9uIGRvY3VtZW50UmVhZHkoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCByZXNvbHZlKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgbG9nID0gbG9nbGV2ZWwuZ2V0TG9nZ2VyKFwidG9ydXMtZW1iZWRcIik7XG5cbnZhciBtZXNzYWdlcyA9IHtcbiAgZXJyb3JzOiB7XG4gICAgZGlzY29ubmVjdGVkOiAoKSA9PiBcIlRvcnVzOiBMb3N0IGNvbm5lY3Rpb24gdG8gVG9ydXMuXCIsXG4gICAgcGVybWFuZW50bHlEaXNjb25uZWN0ZWQ6ICgpID0+IFwiVG9ydXM6IERpc2Nvbm5lY3RlZCBmcm9tIGlmcmFtZS4gUGFnZSByZWxvYWQgcmVxdWlyZWQuXCIsXG4gICAgc2VuZFNpdGVNZXRhZGF0YTogKCkgPT4gXCJUb3J1czogRmFpbGVkIHRvIHNlbmQgc2l0ZSBtZXRhZGF0YS4gVGhpcyBpcyBhbiBpbnRlcm5hbCBlcnJvciwgcGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIixcbiAgICB1bnN1cHBvcnRlZFN5bmM6IG1ldGhvZCA9PiBcIlRvcnVzOiBUaGUgVG9ydXMgRXRoZXJldW0gcHJvdmlkZXIgZG9lcyBub3Qgc3VwcG9ydCBzeW5jaHJvbm91cyBtZXRob2RzIGxpa2UgXCIuY29uY2F0KG1ldGhvZCwgXCIgd2l0aG91dCBhIGNhbGxiYWNrIHBhcmFtZXRlci5cIiksXG4gICAgaW52YWxpZER1cGxleFN0cmVhbTogKCkgPT4gXCJNdXN0IHByb3ZpZGUgYSBOb2RlLmpzLXN0eWxlIGR1cGxleCBzdHJlYW0uXCIsXG4gICAgaW52YWxpZE9wdGlvbnM6IChtYXhFdmVudExpc3RlbmVycywgc2hvdWxkU2VuZE1ldGFkYXRhKSA9PiBcIkludmFsaWQgb3B0aW9ucy4gUmVjZWl2ZWQ6IHsgbWF4RXZlbnRMaXN0ZW5lcnM6IFwiLmNvbmNhdChtYXhFdmVudExpc3RlbmVycywgXCIsIHNob3VsZFNlbmRNZXRhZGF0YTogXCIpLmNvbmNhdChzaG91bGRTZW5kTWV0YWRhdGEsIFwiIH1cIiksXG4gICAgaW52YWxpZFJlcXVlc3RBcmdzOiAoKSA9PiBcIkV4cGVjdGVkIGEgc2luZ2xlLCBub24tYXJyYXksIG9iamVjdCBhcmd1bWVudC5cIixcbiAgICBpbnZhbGlkUmVxdWVzdE1ldGhvZDogKCkgPT4gXCInYXJncy5tZXRob2QnIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLlwiLFxuICAgIGludmFsaWRSZXF1ZXN0UGFyYW1zOiAoKSA9PiBcIidhcmdzLnBhcmFtcycgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYXJyYXkgaWYgcHJvdmlkZWQuXCIsXG4gICAgaW52YWxpZExvZ2dlck9iamVjdDogKCkgPT4gXCInYXJncy5sb2dnZXInIG11c3QgYmUgYW4gb2JqZWN0IGlmIHByb3ZpZGVkLlwiLFxuICAgIGludmFsaWRMb2dnZXJNZXRob2Q6IG1ldGhvZCA9PiBcIidhcmdzLmxvZ2dlcicgbXVzdCBpbmNsdWRlIHJlcXVpcmVkIG1ldGhvZCAnXCIuY29uY2F0KG1ldGhvZCwgXCInLlwiKVxuICB9LFxuICBpbmZvOiB7XG4gICAgY29ubmVjdGVkOiBjaGFpbklkID0+IFwiVG9ydXM6IENvbm5lY3RlZCB0byBjaGFpbiB3aXRoIElEIFxcXCJcIi5jb25jYXQoY2hhaW5JZCwgXCJcXFwiLlwiKVxuICB9LFxuICB3YXJuaW5nczoge1xuICAgIC8vIGRlcHJlY2F0ZWQgbWV0aG9kc1xuICAgIGVuYWJsZURlcHJlY2F0aW9uOiAnVG9ydXM6IFwiXCJldGhlcmV1bS5lbmFibGUoKVwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuICcgKyAnUGxlYXNlIHVzZSBcImV0aGVyZXVtLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIpXCIgaW5zdGVhZC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTAyJyxcbiAgICBzZW5kRGVwcmVjYXRpb246ICdUb3J1czogXCJldGhlcmV1bS5zZW5kKC4uLilcIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLicgKyAnIFBsZWFzZSB1c2UgXCJldGhlcmV1bS5zZW5kQXN5bmMoLi4uKVwiIG9yIFwiZXRoZXJldW0ucmVxdWVzdCguLi4pXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMnLFxuICAgIGV2ZW50czoge1xuICAgICAgY2xvc2U6ICdUb3J1czogVGhlIGV2ZW50IFwiY2xvc2VcIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiBQbGVhc2UgdXNlIFwiZGlzY29ubmVjdFwiIGluc3RlYWQuJyArIFwiXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzXCIsXG4gICAgICBkYXRhOiAnVG9ydXM6IFRoZSBldmVudCBcImRhdGFcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4nICsgJ1VzZSBcIm1lc3NhZ2VcIiBpbnN0ZWFkLlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5MyNtZXNzYWdlJyxcbiAgICAgIG5ldHdvcmtDaGFuZ2VkOiAnVG9ydXM6IFRoZSBldmVudCBcIm5ldHdvcmtDaGFuZ2VkXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4nICsgJyBQbGVhc2UgdXNlIFwiY2hhaW5DaGFuZ2VkXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMnLFxuICAgICAgbm90aWZpY2F0aW9uOiAnVG9ydXM6IFRoZSBldmVudCBcIm5vdGlmaWNhdGlvblwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuICcgKyAnUGxlYXNlIHVzZSBcIm1lc3NhZ2VcIiBpbnN0ZWFkLlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5MydcbiAgICB9LFxuICAgIHB1YmxpY0NvbmZpZ1N0b3JlOiAnVG9ydXM6IFRoZSBwcm9wZXJ0eSBcInB1YmxpY0NvbmZpZ1N0b3JlXCIgaXMgZGVwcmVjYXRlZCBhbmQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJ1xuICB9XG59O1xuXG5jb25zdCB7XG4gIHBheW1lbnRQcm92aWRlcnNcbn0gPSBjb25maWd1cmF0aW9uO1xuY29uc3QgdmFsaWRhdGVQYXltZW50UHJvdmlkZXIgPSAocHJvdmlkZXIsIHBhcmFtcykgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9ycyxcbiAgICAgIGlzVmFsaWQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb3ZpZGVyICYmICFwYXltZW50UHJvdmlkZXJzW3Byb3ZpZGVyXSkge1xuICAgIGVycm9ycy5wcm92aWRlciA9IFwiSW52YWxpZCBQcm92aWRlclwiO1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnMsXG4gICAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMFxuICAgIH07XG4gIH1cblxuICBjb25zdCBzZWxlY3RlZFByb3ZpZGVyID0gcGF5bWVudFByb3ZpZGVyc1twcm92aWRlcl07XG4gIGNvbnN0IHNlbGVjdGVkUGFyYW1zID0gcGFyYW1zIHx8IHt9OyAvLyBzZXQgZGVmYXVsdCB2YWx1ZXNcbiAgLy8gaWYgKCFzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5KSBbc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDdXJyZW5jeV0gPSBzZWxlY3RlZFByb3ZpZGVyLnZhbGlkQ3VycmVuY2llc1xuICAvLyBpZiAoIXNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZSkgc2VsZWN0ZWRQYXJhbXMuZmlhdFZhbHVlID0gc2VsZWN0ZWRQcm92aWRlci5taW5PcmRlclZhbHVlXG4gIC8vIGlmICghc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSkgW3NlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3ldID0gc2VsZWN0ZWRQcm92aWRlci52YWxpZENyeXB0b0N1cnJlbmNpZXNcbiAgLy8gdmFsaWRhdGlvbnNcblxuICBpZiAoc2VsZWN0ZWRQYXJhbXMuZmlhdFZhbHVlKSB7XG4gICAgY29uc3QgcmVxdWVzdGVkT3JkZXJBbW91bnQgPSArcGFyc2VGbG9hdChzZWxlY3RlZFBhcmFtcy5maWF0VmFsdWUudG9TdHJpbmcoKSkgfHwgMDtcbiAgICBpZiAocmVxdWVzdGVkT3JkZXJBbW91bnQgPCBzZWxlY3RlZFByb3ZpZGVyLm1pbk9yZGVyVmFsdWUpIGVycm9ycy5maWF0VmFsdWUgPSBcIlJlcXVlc3RlZCBhbW91bnQgaXMgbG93ZXIgdGhhbiBzdXBwb3J0ZWRcIjtcbiAgICBpZiAocmVxdWVzdGVkT3JkZXJBbW91bnQgPiBzZWxlY3RlZFByb3ZpZGVyLm1heE9yZGVyVmFsdWUgJiYgc2VsZWN0ZWRQcm92aWRlci5lbmZvcmNlTWF4KSBlcnJvcnMuZmlhdFZhbHVlID0gXCJSZXF1ZXN0ZWQgYW1vdW50IGlzIGhpZ2hlciB0aGFuIHN1cHBvcnRlZFwiO1xuICB9XG5cbiAgaWYgKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3VycmVuY3kgJiYgIXNlbGVjdGVkUHJvdmlkZXIudmFsaWRDdXJyZW5jaWVzLmluY2x1ZGVzKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3VycmVuY3kpKSB7XG4gICAgZXJyb3JzLnNlbGVjdGVkQ3VycmVuY3kgPSBcIlVuc3VwcG9ydGVkIGN1cnJlbmN5XCI7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSAmJiAhc2VsZWN0ZWRQcm92aWRlci52YWxpZENyeXB0b0N1cnJlbmNpZXMuaW5jbHVkZXMoc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSkpIHtcbiAgICBlcnJvcnMuc2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSA9IFwiVW5zdXBwb3J0ZWQgY3J5cHRvQ3VycmVuY3lcIjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzLFxuICAgIGlzVmFsaWQ6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwXG4gIH07XG59OyAvLyB1dGlsaXR5IGZ1bmN0aW9uc1xuXG4vKipcbiAqIGpzb24tcnBjLWVuZ2luZSBtaWRkbGV3YXJlIHRoYXQgbG9ncyBSUEMgZXJyb3JzIGFuZCBhbmQgdmFsaWRhdGVzIHJlcS5tZXRob2QuXG4gKlxuICogQHBhcmFtIGxvZyAtIFRoZSBsb2dnaW5nIEFQSSB0byB1c2UuXG4gKiBAcmV0dXJucyAganNvbi1ycGMtZW5naW5lIG1pZGRsZXdhcmUgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFcnJvck1pZGRsZXdhcmUoKSB7XG4gIHJldHVybiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAvLyBqc29uLXJwYy1lbmdpbmUgd2lsbCB0ZXJtaW5hdGUgdGhlIHJlcXVlc3Qgd2hlbiBpdCBub3RpY2VzIHRoaXMgZXJyb3JcbiAgICBpZiAodHlwZW9mIHJlcS5tZXRob2QgIT09IFwic3RyaW5nXCIgfHwgIXJlcS5tZXRob2QpIHtcbiAgICAgIHJlcy5lcnJvciA9IGV0aEVycm9ycy5ycGMuaW52YWxpZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIlRoZSByZXF1ZXN0ICdtZXRob2QnIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nLlwiLFxuICAgICAgICBkYXRhOiByZXFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5leHQoZG9uZSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVycm9yXG4gICAgICB9ID0gcmVzO1xuXG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICB9XG5cbiAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrIC0gUlBDIEVycm9yOiBcIi5jb25jYXQoZXJyb3IubWVzc2FnZSksIGVycm9yKTtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfSk7XG4gIH07XG59IC8vIHJlc29sdmUgcmVzcG9uc2UucmVzdWx0IG9yIHJlc3BvbnNlLCByZWplY3QgZXJyb3JzXG4vKipcbiAqIExvZ3MgYSBzdHJlYW0gZGlzY29ubmVjdGlvbiBlcnJvci4gRW1pdHMgYW4gJ2Vycm9yJyBpZiBnaXZlbiBhblxuICogRXZlbnRFbWl0dGVyIHRoYXQgaGFzIGxpc3RlbmVycyBmb3IgdGhlICdlcnJvcicgZXZlbnQuXG4gKlxuICogQHBhcmFtIGxvZyAtIFRoZSBsb2dnaW5nIEFQSSB0byB1c2UuXG4gKiBAcGFyYW0gcmVtb3RlTGFiZWwgLSBUaGUgbGFiZWwgb2YgdGhlIGRpc2Nvbm5lY3RlZCBzdHJlYW0uXG4gKiBAcGFyYW0gZXJyb3IgLSBUaGUgYXNzb2NpYXRlZCBlcnJvciB0byBsb2cuXG4gKiBAcGFyYW0gZW1pdHRlciAtIFRoZSBsb2dnaW5nIEFQSSB0byB1c2UuXG4gKi9cblxuZnVuY3Rpb24gbG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmcocmVtb3RlTGFiZWwsIGVycm9yLCBlbWl0dGVyKSB7XG4gIGxldCB3YXJuaW5nTXNnID0gXCJNZXRhTWFzazogTG9zdCBjb25uZWN0aW9uIHRvIFxcXCJcIi5jb25jYXQocmVtb3RlTGFiZWwsIFwiXFxcIi5cIik7XG5cbiAgaWYgKGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgJiYgZXJyb3Iuc3RhY2spIHtcbiAgICB3YXJuaW5nTXNnICs9IFwiXFxuXCIuY29uY2F0KGVycm9yLnN0YWNrKTtcbiAgfVxuXG4gIGxvZy53YXJuKHdhcm5pbmdNc2cpO1xuXG4gIGlmIChlbWl0dGVyICYmIGVtaXR0ZXIubGlzdGVuZXJDb3VudChcImVycm9yXCIpID4gMCkge1xuICAgIGVtaXR0ZXIuZW1pdChcImVycm9yXCIsIHdhcm5pbmdNc2cpO1xuICB9XG59XG5jb25zdCBnZXRQcmVvcGVuSW5zdGFuY2VJZCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xuY29uc3QgZ2V0VG9ydXNVcmwgPSBhc3luYyAoYnVpbGRFbnYsIGludGVncml0eSkgPT4ge1xuICBsZXQgdG9ydXNVcmw7XG4gIGxldCBsb2dMZXZlbDsgLy8gRG8gbm90IGNoYW5nZSB0aGlzIGxpbmVcblxuICBjb25zdCB2ZXJzaW9uID0gXCIxLjI1LjBcIjtcbiAgbGV0IHZlcnNpb25Vc2VkID0gaW50ZWdyaXR5LnZlcnNpb24gfHwgdmVyc2lvbjtcblxuICB0cnkge1xuICAgIGlmICgoYnVpbGRFbnYgPT09IFwiYmluYW5jZVwiIHx8IGJ1aWxkRW52ID09PSBcInByb2R1Y3Rpb25cIikgJiYgIWludGVncml0eS52ZXJzaW9uKSB7XG4gICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICBpZiAoIWNvbmZpZ3VyYXRpb24ucHJvZFRvcnVzVXJsKSByZXNwb25zZSA9IGF3YWl0IGdldChcIlwiLmNvbmNhdChjb25maWd1cmF0aW9uLmFwaSwgXCIvbGF0ZXN0dmVyc2lvbj9uYW1lPUB0b3J1c2xhYnMvdG9ydXMtZW1iZWQmdmVyc2lvbj1cIikuY29uY2F0KHZlcnNpb24pLCB7fSwge1xuICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgIH0pO2Vsc2UgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IGNvbmZpZ3VyYXRpb24ucHJvZFRvcnVzVXJsXG4gICAgICB9O1xuICAgICAgdmVyc2lvblVzZWQgPSByZXNwb25zZS5kYXRhOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1hdG9taWMtdXBkYXRlc1xuXG4gICAgICBjb25maWd1cmF0aW9uLnByb2RUb3J1c1VybCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZy5lcnJvcihlcnJvciwgXCJ1bmFibGUgdG8gZmV0Y2ggbGF0ZXN0IHZlcnNpb25cIik7XG4gIH1cblxuICBsb2cuaW5mbyhcInZlcnNpb24gdXNlZDogXCIsIHZlcnNpb25Vc2VkKTtcblxuICBzd2l0Y2ggKGJ1aWxkRW52KSB7XG4gICAgY2FzZSBcImJpbmFuY2VcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL2JpbmFuY2UudG9yLnVzL3ZcIi5jb25jYXQodmVyc2lvblVzZWQpO1xuICAgICAgbG9nTGV2ZWwgPSBcImluZm9cIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcInRlc3RpbmdcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL3Rlc3RpbmcudG9yLnVzXCI7XG4gICAgICBsb2dMZXZlbCA9IFwiZGVidWdcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImxyY1wiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vbHJjLnRvci51c1wiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJiZXRhXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly9iZXRhLnRvci51c1wiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJkZXZlbG9wbWVudFwiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDA1MFwiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly9hcHAudG9yLnVzL3ZcIi5jb25jYXQodmVyc2lvblVzZWQpO1xuICAgICAgbG9nTGV2ZWwgPSBcImVycm9yXCI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9ydXNVcmwsXG4gICAgbG9nTGV2ZWxcbiAgfTtcbn07XG5jb25zdCBnZXRVc2VyTGFuZ3VhZ2UgPSAoKSA9PiB7XG4gIGxldCB1c2VyTGFuZ3VhZ2UgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlIHx8IFwiZW4tVVNcIjtcbiAgY29uc3QgdXNlckxhbmd1YWdlcyA9IHVzZXJMYW5ndWFnZS5zcGxpdChcIi1cIik7XG4gIHVzZXJMYW5ndWFnZSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWd1cmF0aW9uLnRyYW5zbGF0aW9ucywgdXNlckxhbmd1YWdlc1swXSkgPyB1c2VyTGFuZ3VhZ2VzWzBdIDogXCJlblwiO1xuICByZXR1cm4gdXNlckxhbmd1YWdlO1xufTtcbmNvbnN0IEVNSVRURURfTk9USUZJQ0FUSU9OUyA9IFtcImV0aF9zdWJzY3JpcHRpb25cIiAvLyBwZXIgZXRoLWpzb24tcnBjLWZpbHRlcnMvc3Vic2NyaXB0aW9uTWFuYWdlclxuXTtcbmNvbnN0IE5PT1AgPSAoKSA9PiB7Ly8gZW1wdHkgZnVuY3Rpb25cbn07XG5jb25zdCBGRUFUVVJFU19QUk9WSURFUl9DSEFOR0VfV0lORE9XID0gXCJkaXJlY3Rvcmllcz0wLHRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD02NjAsd2lkdGg9Mzc1XCI7XG5jb25zdCBGRUFUVVJFU19ERUZBVUxUX1dBTExFVF9XSU5ET1cgPSBcImRpcmVjdG9yaWVzPTAsdGl0bGViYXI9MCx0b29sYmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxtZW51YmFyPTAsaGVpZ2h0PTc0MCx3aWR0aD0xMzE1XCI7XG5jb25zdCBGRUFUVVJFU19DT05GSVJNX1dJTkRPVyA9IFwiZGlyZWN0b3JpZXM9MCx0aXRsZWJhcj0wLHRvb2xiYXI9MCxzdGF0dXM9MCxsb2NhdGlvbj0wLG1lbnViYXI9MCxoZWlnaHQ9NzAwLHdpZHRoPTQ1MFwiO1xuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuXG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlICYmICggLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgIGUuY29kZSA9PT0gMjIgfHwgLy8gRmlyZWZveFxuICAgIGUuY29kZSA9PT0gMTAxNCB8fCAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8IC8vIEZpcmVmb3hcbiAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiYgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICBzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwO1xuICB9XG59XG5mdW5jdGlvbiBnZXRQb3B1cEZlYXR1cmVzKCkge1xuICAvLyBGaXhlcyBkdWFsLXNjcmVlbiBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9zdCBicm93c2VycyAgICAgIEZpcmVmb3hcbiAgY29uc3QgZHVhbFNjcmVlbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiB3aW5kb3cuc2NyZWVuWDtcbiAgY29uc3QgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiB3aW5kb3cuc2NyZWVuWTtcbiAgY29uc3QgdyA9IDEyMDA7XG4gIGNvbnN0IGggPSA3MDA7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gIGNvbnN0IHN5c3RlbVpvb20gPSAxOyAvLyBObyByZWxpYWJsZSBlc3RpbWF0ZVxuXG4gIGNvbnN0IGxlZnQgPSBNYXRoLmFicygod2lkdGggLSB3KSAvIDIgLyBzeXN0ZW1ab29tICsgZHVhbFNjcmVlbkxlZnQpO1xuICBjb25zdCB0b3AgPSBNYXRoLmFicygoaGVpZ2h0IC0gaCkgLyAyIC8gc3lzdGVtWm9vbSArIGR1YWxTY3JlZW5Ub3ApO1xuICBjb25zdCBmZWF0dXJlcyA9IFwidGl0bGViYXI9MCx0b29sYmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxtZW51YmFyPTAsaGVpZ2h0PVwiLmNvbmNhdChoIC8gc3lzdGVtWm9vbSwgXCIsd2lkdGg9XCIpLmNvbmNhdCh3IC8gc3lzdGVtWm9vbSwgXCIsdG9wPVwiKS5jb25jYXQodG9wLCBcIixsZWZ0PVwiKS5jb25jYXQobGVmdCk7XG4gIHJldHVybiBmZWF0dXJlcztcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuU2FmZUV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAwOyAvLyByZXNvbHZlIHJlc3BvbnNlLnJlc3VsdCwgcmVqZWN0IGVycm9yc1xuXG5jb25zdCBnZXRScGNQcm9taXNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGxldCB1bndyYXBSZXN1bHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gIHJldHVybiAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIXVud3JhcFJlc3VsdCB8fCBBcnJheS5pc0FycmF5KHJlc3BvbnNlKSA/IHJlc29sdmUocmVzcG9uc2UpIDogcmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuICB9O1xufTtcblxuY2xhc3MgVG9ydXNJbnBhZ2VQcm92aWRlciBleHRlbmRzIFNhZmVFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogVGhlIGNoYWluIElEIG9mIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIEV0aGVyZXVtIGNoYWluLlxuICAgKiBTZWUgW2NoYWluSWQubmV0d29ya117QGxpbmsgaHR0cHM6Ly9jaGFpbmlkLm5ldHdvcmt9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIHVzZXIncyBjdXJyZW50bHkgc2VsZWN0ZWQgRXRoZXJldW0gYWRkcmVzcy5cbiAgICogSWYgbnVsbCwgTWV0YU1hc2sgaXMgZWl0aGVyIGxvY2tlZCBvciB0aGUgdXNlciBoYXMgbm90IHBlcm1pdHRlZCBhbnlcbiAgICogYWRkcmVzc2VzIHRvIGJlIHZpZXdlZC5cbiAgICovXG5cbiAgLyoqXG4gICAqIEluZGljYXRpbmcgdGhhdCB0aGlzIHByb3ZpZGVyIGlzIGEgTWV0YU1hc2sgcHJvdmlkZXIuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25uZWN0aW9uU3RyZWFtKSB7XG4gICAgbGV0IHtcbiAgICAgIG1heEV2ZW50TGlzdGVuZXJzID0gMTAwLFxuICAgICAgc2hvdWxkU2VuZE1ldGFkYXRhID0gdHJ1ZSxcbiAgICAgIGpzb25ScGNTdHJlYW1OYW1lID0gXCJwcm92aWRlclwiXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgc3VwZXIoKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYWluSWRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlbGVjdGVkQWRkcmVzc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3JwY0VuZ2luZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmV0d29ya1ZlcnNpb25cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNob3VsZFNlbmRNZXRhZGF0YVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNUb3J1c1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3B1YmxpY0NvbmZpZ1N0b3JlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0cnlQcmVvcGVuSGFuZGxlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmFibGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zdGF0ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2pzb25ScGNDb25uZWN0aW9uXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc2VudFdhcm5pbmdzXCIsIHtcbiAgICAgIC8vIG1ldGhvZHNcbiAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICBleHBlcmltZW50YWxNZXRob2RzOiBmYWxzZSxcbiAgICAgIHNlbmQ6IGZhbHNlLFxuICAgICAgcHVibGljQ29uZmlnU3RvcmU6IGZhbHNlLFxuICAgICAgLy8gZXZlbnRzXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xvc2U6IGZhbHNlLFxuICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgICAgbmV0d29ya0NoYW5nZWQ6IGZhbHNlLFxuICAgICAgICBub3RpZmljYXRpb246IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWR1cGxleChjb25uZWN0aW9uU3RyZWFtKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLmVycm9ycy5pbnZhbGlkRHVwbGV4U3RyZWFtKCkpO1xuICAgIH1cblxuICAgIHRoaXMuaXNUb3J1cyA9IHRydWU7XG4gICAgdGhpcy5zZXRNYXhMaXN0ZW5lcnMobWF4RXZlbnRMaXN0ZW5lcnMpOyAvLyBwcml2YXRlIHN0YXRlXG5cbiAgICB0aGlzLl9zdGF0ZSA9IF9vYmplY3RTcHJlYWQkMSh7fSwgVG9ydXNJbnBhZ2VQcm92aWRlci5fZGVmYXVsdFN0YXRlKTsgLy8gcHVibGljIHN0YXRlXG5cbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IG51bGw7XG4gICAgdGhpcy5uZXR3b3JrVmVyc2lvbiA9IG51bGw7XG4gICAgdGhpcy5jaGFpbklkID0gbnVsbDtcbiAgICB0aGlzLnNob3VsZFNlbmRNZXRhZGF0YSA9IHNob3VsZFNlbmRNZXRhZGF0YTsgLy8gYmluZCBmdW5jdGlvbnMgKHRvIHByZXZlbnQgZS5nLiB3ZWIzQDEueCBmcm9tIG1ha2luZyB1bmJvdW5kIGNhbGxzKVxuXG4gICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkID0gdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlQ2hhaW5DaGFuZ2VkID0gdGhpcy5faGFuZGxlQ2hhaW5DaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlVW5sb2NrU3RhdGVDaGFuZ2VkID0gdGhpcy5faGFuZGxlVW5sb2NrU3RhdGVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlQ29ubmVjdCA9IHRoaXMuX2hhbmRsZUNvbm5lY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVEaXNjb25uZWN0ID0gdGhpcy5faGFuZGxlRGlzY29ubmVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QgPSB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc2VuZFN5bmMgPSB0aGlzLl9zZW5kU3luYy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3JwY1JlcXVlc3QgPSB0aGlzLl9ycGNSZXF1ZXN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24gPSB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2luaXRpYWxpemVTdGF0ZSA9IHRoaXMuX2luaXRpYWxpemVTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVxdWVzdCA9IHRoaXMucmVxdWVzdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZCA9IHRoaXMuc2VuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZEFzeW5jID0gdGhpcy5zZW5kQXN5bmMuYmluZCh0aGlzKTsgLy8gdGhpcy5lbmFibGUgPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpO1xuICAgIC8vIHNldHVwIGNvbm5lY3Rpb25TdHJlYW0gbXVsdGlwbGV4aW5nXG5cbiAgICBjb25zdCBtdXggPSBuZXcgT2JqZWN0TXVsdGlwbGV4KCk7XG4gICAgcHVtcChjb25uZWN0aW9uU3RyZWFtLCBtdXgsIGNvbm5lY3Rpb25TdHJlYW0sIHRoaXMuX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QuYmluZCh0aGlzLCBcIk1ldGFNYXNrXCIpKTsgLy8gc3Vic2NyaWJlIHRvIG1ldGFtYXNrIHB1YmxpYyBjb25maWcgKG9uZS13YXkpXG5cbiAgICB0aGlzLl9wdWJsaWNDb25maWdTdG9yZSA9IG5ldyBPYnNlcnZhYmxlU3RvcmUoe1xuICAgICAgc3RvcmFnZUtleTogXCJNZXRhbWFzay1Db25maWdcIlxuICAgIH0pOyAvLyBoYW5kbGUgaXNVbmxvY2tlZCBjaGFuZ2VzLCBhbmQgY2hhaW5DaGFuZ2VkIGFuZCBuZXR3b3JrQ2hhbmdlZCBldmVudHNcbiAgICAvLyB0aGlzLl9wdWJsaWNDb25maWdTdG9yZS5zdWJzY3JpYmUoKHN0cmluZ2lmaWVkU3RhdGUpID0+IHtcbiAgICAvLyAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgc3RvcmUgYXMgc3RyaW5nXG4gICAgLy8gICBjb25zdCBzdGF0ZSA9IEpTT04ucGFyc2Uoc3RyaW5naWZpZWRTdGF0ZSBhcyB1bmtub3duIGFzIHN0cmluZyk7XG4gICAgLy8gICBpZiAoXCJpc1VubG9ja2VkXCIgaW4gc3RhdGUgJiYgc3RhdGUuaXNVbmxvY2tlZCAhPT0gdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCkge1xuICAgIC8vICAgICB0aGlzLl9zdGF0ZS5pc1VubG9ja2VkID0gc3RhdGUuaXNVbmxvY2tlZDtcbiAgICAvLyAgICAgaWYgKCF0aGlzLl9zdGF0ZS5pc1VubG9ja2VkKSB7XG4gICAgLy8gICAgICAgLy8gYWNjb3VudHMgYXJlIG5ldmVyIGV4cG9zZWQgd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIGxvY2tlZFxuICAgIC8vICAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChbXSk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgLy8gdGhpcyB3aWxsIGdldCB0aGUgZXhwb3NlZCBhY2NvdW50cywgaWYgYW55XG4gICAgLy8gICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIHRoaXMuX3JwY1JlcXVlc3QoXG4gICAgLy8gICAgICAgICAgIHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiLCBwYXJhbXM6IFtdIH0sXG4gICAgLy8gICAgICAgICAgIE5PT1AsXG4gICAgLy8gICAgICAgICAgIHRydWUgLy8gaW5kaWNhdGluZyB0aGF0IGV0aF9hY2NvdW50cyBfc2hvdWxkXyB1cGRhdGUgYWNjb3VudHNcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgICAgfSBjYXRjaCAoXykge1xuICAgIC8vICAgICAgICAgLy8gU3dhbGxvdyBlcnJvclxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKFwic2VsZWN0ZWRBZGRyZXNzXCIgaW4gc3RhdGUgJiYgdGhpcy5zZWxlY3RlZEFkZHJlc3MgIT09IHN0YXRlLnNlbGVjdGVkQWRkcmVzcykge1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgIHRoaXMuX3JwY1JlcXVlc3QoXG4gICAgLy8gICAgICAgICB7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiwgcGFyYW1zOiBbXSB9LFxuICAgIC8vICAgICAgICAgTk9PUCxcbiAgICAvLyAgICAgICAgIHRydWUgLy8gaW5kaWNhdGluZyB0aGF0IGV0aF9hY2NvdW50cyBfc2hvdWxkXyB1cGRhdGUgYWNjb3VudHNcbiAgICAvLyAgICAgICApO1xuICAgIC8vICAgICB9IGNhdGNoIChfKSB7XG4gICAgLy8gICAgICAgLy8gU3dhbGxvdyBlcnJvclxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICAvLyBFbWl0IGNoYWluQ2hhbmdlZCBldmVudCBvbiBjaGFpbiBjaGFuZ2VcbiAgICAvLyAgIGlmIChcImNoYWluSWRcIiBpbiBzdGF0ZSAmJiBzdGF0ZS5jaGFpbklkICE9PSB0aGlzLmNoYWluSWQpIHtcbiAgICAvLyAgICAgdGhpcy5jaGFpbklkID0gc3RhdGUuY2hhaW5JZCB8fCBudWxsO1xuICAgIC8vICAgICB0aGlzLmVtaXQoXCJjaGFpbkNoYW5nZWRcIiwgdGhpcy5jaGFpbklkKTtcbiAgICAvLyAgICAgLy8gaW5kaWNhdGUgdGhhdCB3ZSd2ZSBjb25uZWN0ZWQsIGZvciBFSVAtMTE5MyBjb21wbGlhbmNlXG4gICAgLy8gICAgIC8vIHdlIGRvIHRoaXMgaGVyZSBzbyB0aGF0IGlmcmFtZSBjYW4gaW5pdGlhbGl6ZVxuICAgIC8vICAgICBpZiAoIXRoaXMuX3N0YXRlLmhhc0VtaXR0ZWRDb25uZWN0aW9uKSB7XG4gICAgLy8gICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdCh0aGlzLmNoYWluSWQpO1xuICAgIC8vICAgICAgIHRoaXMuX3N0YXRlLmhhc0VtaXR0ZWRDb25uZWN0aW9uID0gdHJ1ZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgLy8gRW1pdCBuZXR3b3JrQ2hhbmdlZCBldmVudCBvbiBuZXR3b3JrIGNoYW5nZVxuICAgIC8vICAgaWYgKFwibmV0d29ya1ZlcnNpb25cIiBpbiBzdGF0ZSAmJiBzdGF0ZS5uZXR3b3JrVmVyc2lvbiAhPT0gdGhpcy5uZXR3b3JrVmVyc2lvbikge1xuICAgIC8vICAgICB0aGlzLm5ldHdvcmtWZXJzaW9uID0gc3RhdGUubmV0d29ya1ZlcnNpb24gfHwgbnVsbDtcbiAgICAvLyAgICAgdGhpcy5lbWl0KFwibmV0d29ya0NoYW5nZWRcIiwgdGhpcy5uZXR3b3JrVmVyc2lvbik7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICBwdW1wKG11eC5jcmVhdGVTdHJlYW0oXCJwdWJsaWNDb25maWdcIiksIHN0b3JlQXNTdHJlYW0odGhpcy5fcHVibGljQ29uZmlnU3RvcmUpLCAvLyBSUEMgcmVxdWVzdHMgc2hvdWxkIHN0aWxsIHdvcmsgaWYgb25seSB0aGlzIHN0cmVhbSBmYWlsc1xuICAgIGxvZ1N0cmVhbURpc2Nvbm5lY3RXYXJuaW5nLmJpbmQodGhpcywgXCJNZXRhTWFzayBQdWJsaWNDb25maWdTdG9yZVwiKSk7IC8vIGlnbm9yZSBwaGlzaGluZyB3YXJuaW5nIG1lc3NhZ2UgKGhhbmRsZWQgZWxzZXdoZXJlKVxuXG4gICAgbXV4Lmlnbm9yZVN0cmVhbShcInBoaXNoaW5nXCIpOyAvLyBzZXR1cCBvd24gZXZlbnQgbGlzdGVuZXJzXG4gICAgLy8gRUlQLTExOTMgY29ubmVjdFxuXG4gICAgdGhpcy5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIH0pOyAvLyBjb25uZWN0IHRvIGFzeW5jIHByb3ZpZGVyXG5cbiAgICBjb25zdCBqc29uUnBjQ29ubmVjdGlvbiA9IGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUoKTtcbiAgICBwdW1wKGpzb25ScGNDb25uZWN0aW9uLnN0cmVhbSwgbXV4LmNyZWF0ZVN0cmVhbShqc29uUnBjU3RyZWFtTmFtZSksIGpzb25ScGNDb25uZWN0aW9uLnN0cmVhbSwgdGhpcy5faGFuZGxlU3RyZWFtRGlzY29ubmVjdC5iaW5kKHRoaXMsIFwiTWV0YU1hc2sgUnBjUHJvdmlkZXJcIikpOyAvLyBoYW5kbGUgUlBDIHJlcXVlc3RzIHZpYSBkYXBwLXNpZGUgcnBjIGVuZ2luZVxuXG4gICAgY29uc3QgcnBjRW5naW5lID0gbmV3IEpSUENFbmdpbmUoKTtcbiAgICBycGNFbmdpbmUucHVzaChjcmVhdGVJZFJlbWFwTWlkZGxld2FyZSgpKTtcbiAgICBycGNFbmdpbmUucHVzaChjcmVhdGVFcnJvck1pZGRsZXdhcmUoKSk7XG4gICAgcnBjRW5naW5lLnB1c2goanNvblJwY0Nvbm5lY3Rpb24ubWlkZGxld2FyZSk7XG4gICAgdGhpcy5fcnBjRW5naW5lID0gcnBjRW5naW5lOyAvLyBqc29uIHJwYyBub3RpZmljYXRpb24gbGlzdGVuZXJcblxuICAgIGpzb25ScGNDb25uZWN0aW9uLmV2ZW50cy5vbihcIm5vdGlmaWNhdGlvblwiLCBwYXlsb2FkID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBwYXJhbXNcbiAgICAgIH0gPSBwYXlsb2FkO1xuXG4gICAgICBpZiAobWV0aG9kID09PSBcIndhbGxldF9hY2NvdW50c0NoYW5nZWRcIikge1xuICAgICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQocGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcIndhbGxldF91bmxvY2tTdGF0ZUNoYW5nZWRcIikge1xuICAgICAgICB0aGlzLl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQocGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcIndhbGxldF9jaGFpbkNoYW5nZWRcIikge1xuICAgICAgICB0aGlzLl9oYW5kbGVDaGFpbkNoYW5nZWQocGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAoRU1JVFRFRF9OT1RJRklDQVRJT05TLmluY2x1ZGVzKHBheWxvYWQubWV0aG9kKSkge1xuICAgICAgICAvLyBFSVAgMTE5MyBzdWJzY3JpcHRpb25zLCBwZXIgZXRoLWpzb24tcnBjLWZpbHRlcnMvc3Vic2NyaXB0aW9uTWFuYWdlclxuICAgICAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIHBheWxvYWQpOyAvLyBkZXByZWNhdGVkXG5cbiAgICAgICAgdGhpcy5lbWl0KFwibm90aWZpY2F0aW9uXCIsIHBhcmFtcy5yZXN1bHQpO1xuICAgICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHtcbiAgICAgICAgICB0eXBlOiBtZXRob2QsXG4gICAgICAgICAgZGF0YTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5IGZvciBvbGRlciBub24gRUlQIDExOTMgc3Vic2NyaXB0aW9uc1xuICAgICAgLy8gdGhpcy5lbWl0KCdkYXRhJywgbnVsbCwgcGF5bG9hZClcblxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHB1YmxpY0NvbmZpZ1N0b3JlKCkge1xuICAgIGlmICghdGhpcy5fc2VudFdhcm5pbmdzLnB1YmxpY0NvbmZpZ1N0b3JlKSB7XG4gICAgICBsb2cud2FybihtZXNzYWdlcy53YXJuaW5ncy5wdWJsaWNDb25maWdTdG9yZSk7XG4gICAgICB0aGlzLl9zZW50V2FybmluZ3MucHVibGljQ29uZmlnU3RvcmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9wdWJsaWNDb25maWdTdG9yZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBpbnBhZ2UgcHJvdmlkZXIgaXMgY29ubmVjdGVkIHRvIFRvcnVzLlxuICAgKi9cblxuXG4gIGlzQ29ubmVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZDtcbiAgfVxuICAvKipcbiAgICogU3VibWl0cyBhbiBSUEMgcmVxdWVzdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2l0aCB0aGUgZ2l2ZW4gcGFyYW1zLlxuICAgKiBSZXNvbHZlcyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIG1ldGhvZCBjYWxsLCBvciByZWplY3RzIG9uIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gYXJncyAtIFRoZSBSUEMgcmVxdWVzdCBhcmd1bWVudHMuXG4gICAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgUlBDIG1ldGhvZCxcbiAgICogb3IgcmVqZWN0cyBpZiBhbiBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAgICovXG5cblxuICBhc3luYyByZXF1ZXN0KGFyZ3MpIHtcbiAgICBpZiAoIWFyZ3MgfHwgdHlwZW9mIGFyZ3MgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShhcmdzKSkge1xuICAgICAgdGhyb3cgZXRoRXJyb3JzLnJwYy5pbnZhbGlkUmVxdWVzdCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VzLmVycm9ycy5pbnZhbGlkUmVxdWVzdEFyZ3MoKSxcbiAgICAgICAgZGF0YTogYXJnc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgbWV0aG9kLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IGFyZ3M7XG5cbiAgICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gXCJzdHJpbmdcIiB8fCBtZXRob2QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMuZXJyb3JzLmludmFsaWRSZXF1ZXN0TWV0aG9kKCksXG4gICAgICAgIGRhdGE6IGFyZ3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMgIT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheShwYXJhbXMpICYmICh0eXBlb2YgcGFyYW1zICE9PSBcIm9iamVjdFwiIHx8IHBhcmFtcyA9PT0gbnVsbCkpIHtcbiAgICAgIHRocm93IGV0aEVycm9ycy5ycGMuaW52YWxpZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuaW52YWxpZFJlcXVlc3RQYXJhbXMoKSxcbiAgICAgICAgZGF0YTogYXJnc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3JwY1JlcXVlc3Qoe1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIHBhcmFtc1xuICAgICAgfSwgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrKHJlc29sdmUsIHJlamVjdCkpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTdWJtaXRzIGFuIFJQQyByZXF1ZXN0IHBlciB0aGUgZ2l2ZW4gSlNPTi1SUEMgcmVxdWVzdCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSBwYXlsb2FkIC0gVGhlIFJQQyByZXF1ZXN0IG9iamVjdC5cbiAgICogQHBhcmFtIGNiIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cblxuXG4gIHNlbmRBc3luYyhwYXlsb2FkLCBjYWxsYmFjaykge1xuICAgIHRoaXMuX3JwY1JlcXVlc3QocGF5bG9hZCwgY2FsbGJhY2spO1xuICB9XG4gIC8qKlxuICAgKiBXZSBvdmVycmlkZSB0aGUgZm9sbG93aW5nIGV2ZW50IG1ldGhvZHMgc28gdGhhdCB3ZSBjYW4gd2FybiBjb25zdW1lcnNcbiAgICogYWJvdXQgZGVwcmVjYXRlZCBldmVudHM6XG4gICAqICAgYWRkTGlzdGVuZXIsIG9uLCBvbmNlLCBwcmVwZW5kTGlzdGVuZXIsIHByZXBlbmRPbmNlTGlzdGVuZXJcbiAgICovXG5cblxuICBhZGRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgb25jZShldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5vbmNlKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcHJlcGVuZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLnByZXBlbmRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHByZXBlbmRPbmNlTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIucHJlcGVuZE9uY2VMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfSAvLyBQcml2YXRlIE1ldGhvZHNcbiAgLy89ID09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgaGVscGVyLlxuICAgKiBQb3B1bGF0ZXMgaW5pdGlhbCBzdGF0ZSBieSBjYWxsaW5nICd3YWxsZXRfZ2V0UHJvdmlkZXJTdGF0ZScgYW5kIGVtaXRzXG4gICAqIG5lY2Vzc2FyeSBldmVudHMuXG4gICAqL1xuXG5cbiAgYXN5bmMgX2luaXRpYWxpemVTdGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhY2NvdW50cyxcbiAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgaXNVbmxvY2tlZCxcbiAgICAgICAgbmV0d29ya1ZlcnNpb25cbiAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwid2FsbGV0X2dldFByb3ZpZGVyU3RhdGVcIlxuICAgICAgfSk7IC8vIGluZGljYXRlIHRoYXQgd2UndmUgY29ubmVjdGVkLCBmb3IgRUlQLTExOTMgY29tcGxpYW5jZVxuXG4gICAgICB0aGlzLmVtaXQoXCJjb25uZWN0XCIsIHtcbiAgICAgICAgY2hhaW5JZFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZCh7XG4gICAgICAgIGNoYWluSWQsXG4gICAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlVW5sb2NrU3RhdGVDaGFuZ2VkKHtcbiAgICAgICAgYWNjb3VudHMsXG4gICAgICAgIGlzVW5sb2NrZWRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQoYWNjb3VudHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogRmFpbGVkIHRvIGdldCBpbml0aWFsIHN0YXRlLiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLlwiLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGxvZy5pbmZvKFwiaW5pdGlhbGl6ZWQgc3RhdGVcIik7XG4gICAgICB0aGlzLl9zdGF0ZS5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmVtaXQoXCJfaW5pdGlhbGl6ZWRcIik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbnRlcm5hbCBSUEMgbWV0aG9kLiBGb3J3YXJkcyByZXF1ZXN0cyB0byBiYWNrZ3JvdW5kIHZpYSB0aGUgUlBDIGVuZ2luZS5cbiAgICogQWxzbyByZW1hcCBpZHMgaW5ib3VuZCBhbmQgb3V0Ym91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBwYXlsb2FkIC0gVGhlIFJQQyByZXF1ZXN0IG9iamVjdC5cbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGNvbnN1bWVyJ3MgY2FsbGJhY2suXG4gICAqIEBwYXJhbSBpc0ludGVybmFsIC0gZmFsc2UgLSBXaGV0aGVyIHRoZSByZXF1ZXN0IGlzIGludGVybmFsLlxuICAgKi9cblxuXG4gIF9ycGNSZXF1ZXN0KHBheWxvYWQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IGlzSW50ZXJuYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICAgIGxldCBjYiA9IGNhbGxiYWNrO1xuICAgIGNvbnN0IF9wYXlsb2FkID0gcGF5bG9hZDtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShfcGF5bG9hZCkpIHtcbiAgICAgIGlmICghX3BheWxvYWQuanNvbnJwYykge1xuICAgICAgICBfcGF5bG9hZC5qc29ucnBjID0gXCIyLjBcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKF9wYXlsb2FkLm1ldGhvZCA9PT0gXCJldGhfYWNjb3VudHNcIiB8fCBfcGF5bG9hZC5tZXRob2QgPT09IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiKSB7XG4gICAgICAgIC8vIGhhbmRsZSBhY2NvdW50cyBjaGFuZ2luZ1xuICAgICAgICBjYiA9IChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChyZXMucmVzdWx0IHx8IFtdLCBfcGF5bG9hZC5tZXRob2QgPT09IFwiZXRoX2FjY291bnRzXCIsIGlzSW50ZXJuYWwpO1xuXG4gICAgICAgICAgY2FsbGJhY2soZXJyLCByZXMpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChfcGF5bG9hZC5tZXRob2QgPT09IFwid2FsbGV0X2dldFByb3ZpZGVyU3RhdGVcIikge1xuICAgICAgICB0aGlzLl9ycGNFbmdpbmUuaGFuZGxlKHBheWxvYWQsIGNiKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50cnlQcmVvcGVuSGFuZGxlKF9wYXlsb2FkLCBjYik7XG4gIH1cblxuICBzZW5kKG1ldGhvZE9yUGF5bG9hZCwgY2FsbGJhY2tPckFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuX3NlbnRXYXJuaW5ncy5zZW5kKSB7XG4gICAgICBsb2cud2FybihtZXNzYWdlcy53YXJuaW5ncy5zZW5kRGVwcmVjYXRpb24pO1xuICAgICAgdGhpcy5fc2VudFdhcm5pbmdzLnNlbmQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWV0aG9kT3JQYXlsb2FkID09PSBcInN0cmluZ1wiICYmICghY2FsbGJhY2tPckFyZ3MgfHwgQXJyYXkuaXNBcnJheShjYWxsYmFja09yQXJncykpKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuX3JwY1JlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2RPclBheWxvYWQsXG4gICAgICAgICAgICBwYXJhbXM6IGNhbGxiYWNrT3JBcmdzXG4gICAgICAgICAgfSwgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrKHJlc29sdmUsIHJlamVjdCwgZmFsc2UpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kT3JQYXlsb2FkICYmIHR5cGVvZiBtZXRob2RPclBheWxvYWQgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNhbGxiYWNrT3JBcmdzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ycGNSZXF1ZXN0KG1ldGhvZE9yUGF5bG9hZCwgY2FsbGJhY2tPckFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZW5kU3luYyhtZXRob2RPclBheWxvYWQpO1xuICB9XG4gIC8qKlxuICAgKiBERVBSRUNBVEVELlxuICAgKiBJbnRlcm5hbCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBtZXRob2QsIHVzZWQgaW4gc2VuZC5cbiAgICovXG5cblxuICBfc2VuZFN5bmMocGF5bG9hZCkge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBzd2l0Y2ggKHBheWxvYWQubWV0aG9kKSB7XG4gICAgICBjYXNlIFwiZXRoX2FjY291bnRzXCI6XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzID8gW3RoaXMuc2VsZWN0ZWRBZGRyZXNzXSA6IFtdO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImV0aF9jb2luYmFzZVwiOlxuICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcyB8fCBudWxsO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImV0aF91bmluc3RhbGxGaWx0ZXJcIjpcbiAgICAgICAgdGhpcy5fcnBjUmVxdWVzdChwYXlsb2FkLCBOT09QKTtcblxuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm5ldF92ZXJzaW9uXCI6XG4gICAgICAgIHJlc3VsdCA9IHRoaXMubmV0d29ya1ZlcnNpb24gfHwgbnVsbDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5lcnJvcnMudW5zdXBwb3J0ZWRTeW5jKHBheWxvYWQubWV0aG9kKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBwYXlsb2FkLmlkLFxuICAgICAganNvbnJwYzogcGF5bG9hZC5qc29ucnBjLFxuICAgICAgcmVzdWx0XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogV2hlbiB0aGUgcHJvdmlkZXIgYmVjb21lcyBjb25uZWN0ZWQsIHVwZGF0ZXMgaW50ZXJuYWwgc3RhdGUgYW5kIGVtaXRzXG4gICAqIHJlcXVpcmVkIGV2ZW50cy4gSWRlbXBvdGVudC5cbiAgICpcbiAgICogQHBhcmFtIGNoYWluSWQgLSBUaGUgSUQgb2YgdGhlIG5ld2x5IGNvbm5lY3RlZCBjaGFpbi5cbiAgICogZW1pdHMgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciNjb25uZWN0XG4gICAqL1xuXG5cbiAgX2hhbmRsZUNvbm5lY3QoY2hhaW5JZCkge1xuICAgIGlmICghdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW1pdChcImNvbm5lY3RcIiwge1xuICAgICAgICBjaGFpbklkXG4gICAgICB9KTtcbiAgICAgIGxvZy5kZWJ1ZyhtZXNzYWdlcy5pbmZvLmNvbm5lY3RlZChjaGFpbklkKSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBwcm92aWRlciBiZWNvbWVzIGRpc2Nvbm5lY3RlZCwgdXBkYXRlcyBpbnRlcm5hbCBzdGF0ZSBhbmQgZW1pdHNcbiAgICogcmVxdWlyZWQgZXZlbnRzLiBJZGVtcG90ZW50IHdpdGggcmVzcGVjdCB0byB0aGUgaXNSZWNvdmVyYWJsZSBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIEVycm9yIGNvZGVzIHBlciB0aGUgQ2xvc2VFdmVudCBzdGF0dXMgY29kZXMgYXMgcmVxdWlyZWQgYnkgRUlQLTExOTM6XG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DbG9zZUV2ZW50I1N0YXR1c19jb2Rlc1xuICAgKlxuICAgKiBAcGFyYW0gaXNSZWNvdmVyYWJsZSAtIFdoZXRoZXIgdGhlIGRpc2Nvbm5lY3Rpb24gaXMgcmVjb3ZlcmFibGUuXG4gICAqIEBwYXJhbSBlcnJvck1lc3NhZ2UgLSBBIGN1c3RvbSBlcnJvciBtZXNzYWdlLlxuICAgKiBlbWl0cyBNZXRhTWFza0lucGFnZVByb3ZpZGVyI2Rpc2Nvbm5lY3RcbiAgICovXG5cblxuICBfaGFuZGxlRGlzY29ubmVjdChpc1JlY292ZXJhYmxlLCBlcnJvck1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQgfHwgIXRoaXMuX3N0YXRlLmlzUGVybWFuZW50bHlEaXNjb25uZWN0ZWQgJiYgIWlzUmVjb3ZlcmFibGUpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICBsZXQgZXJyb3I7XG5cbiAgICAgIGlmIChpc1JlY292ZXJhYmxlKSB7XG4gICAgICAgIGVycm9yID0gbmV3IEV0aGVyZXVtUnBjRXJyb3IoMTAxMywgLy8gVHJ5IGFnYWluIGxhdGVyXG4gICAgICAgIGVycm9yTWVzc2FnZSB8fCBtZXNzYWdlcy5lcnJvcnMuZGlzY29ubmVjdGVkKCkpO1xuICAgICAgICBsb2cuZGVidWcoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSBuZXcgRXRoZXJldW1ScGNFcnJvcigxMDExLCAvLyBJbnRlcm5hbCBlcnJvclxuICAgICAgICBlcnJvck1lc3NhZ2UgfHwgbWVzc2FnZXMuZXJyb3JzLnBlcm1hbmVudGx5RGlzY29ubmVjdGVkKCkpO1xuICAgICAgICBsb2cuZXJyb3IoZXJyb3IpO1xuICAgICAgICB0aGlzLmNoYWluSWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdGF0ZS5hY2NvdW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdGF0ZS5pc1Blcm1hbmVudGx5RGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0KFwiZGlzY29ubmVjdFwiLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGxvc3QgdG8gY3JpdGljYWwgc3RyZWFtcy5cbiAgICpcbiAgICogZW1pdHMgTWV0YW1hc2tJbnBhZ2VQcm92aWRlciNkaXNjb25uZWN0XG4gICAqL1xuXG5cbiAgX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3Qoc3RyZWFtTmFtZSwgZXJyb3IpIHtcbiAgICBsb2dTdHJlYW1EaXNjb25uZWN0V2FybmluZyhzdHJlYW1OYW1lLCBlcnJvciwgdGhpcyk7XG5cbiAgICB0aGlzLl9oYW5kbGVEaXNjb25uZWN0KGZhbHNlLCBlcnJvciA/IGVycm9yLm1lc3NhZ2UgOiB1bmRlZmluZWQpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhY2NvdW50cyBtYXkgaGF2ZSBjaGFuZ2VkLlxuICAgKi9cblxuXG4gIF9oYW5kbGVBY2NvdW50c0NoYW5nZWQoYWNjb3VudHMpIHtcbiAgICBsZXQgaXNFdGhBY2NvdW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgbGV0IGlzSW50ZXJuYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICAgIC8vIGRlZmVuc2l2ZSBwcm9ncmFtbWluZ1xuICAgIGxldCBmaW5hbEFjY291bnRzID0gYWNjb3VudHM7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmluYWxBY2NvdW50cykpIHtcbiAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrOiBSZWNlaXZlZCBub24tYXJyYXkgYWNjb3VudHMgcGFyYW1ldGVyLiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLlwiLCBmaW5hbEFjY291bnRzKTtcbiAgICAgIGZpbmFsQWNjb3VudHMgPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGFjY291bnQgb2YgYWNjb3VudHMpIHtcbiAgICAgIGlmICh0eXBlb2YgYWNjb3VudCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgbm9uLXN0cmluZyBhY2NvdW50LiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLlwiLCBhY2NvdW50cyk7XG4gICAgICAgIGZpbmFsQWNjb3VudHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSAvLyBlbWl0IGFjY291bnRzQ2hhbmdlZCBpZiBhbnl0aGluZyBhYm91dCB0aGUgYWNjb3VudHMgYXJyYXkgaGFzIGNoYW5nZWRcblxuXG4gICAgaWYgKCFkZXF1YWwodGhpcy5fc3RhdGUuYWNjb3VudHMsIGZpbmFsQWNjb3VudHMpKSB7XG4gICAgICAvLyB3ZSBzaG91bGQgYWx3YXlzIGhhdmUgdGhlIGNvcnJlY3QgYWNjb3VudHMgZXZlbiBiZWZvcmUgZXRoX2FjY291bnRzXG4gICAgICAvLyByZXR1cm5zLCBleGNlcHQgaW4gY2FzZXMgd2hlcmUgaXNJbnRlcm5hbCBpcyB0cnVlXG4gICAgICBpZiAoaXNFdGhBY2NvdW50cyAmJiBBcnJheS5pc0FycmF5KHRoaXMuX3N0YXRlLmFjY291bnRzKSAmJiB0aGlzLl9zdGF0ZS5hY2NvdW50cy5sZW5ndGggPiAwICYmICFpc0ludGVybmFsKSB7XG4gICAgICAgIGxvZy5lcnJvcignTWV0YU1hc2s6IFwiZXRoX2FjY291bnRzXCIgdW5leHBlY3RlZGx5IHVwZGF0ZWQgYWNjb3VudHMuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuJywgZmluYWxBY2NvdW50cyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlLmFjY291bnRzID0gZmluYWxBY2NvdW50cztcbiAgICAgIHRoaXMuZW1pdChcImFjY291bnRzQ2hhbmdlZFwiLCBmaW5hbEFjY291bnRzKTtcbiAgICB9IC8vIGhhbmRsZSBzZWxlY3RlZEFkZHJlc3NcblxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRBZGRyZXNzICE9PSBmaW5hbEFjY291bnRzWzBdKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGZpbmFsQWNjb3VudHNbMF0gfHwgbnVsbDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVwb24gcmVjZWlwdCBvZiBhIG5ldyBjaGFpbklkIGFuZCBuZXR3b3JrVmVyc2lvbiwgZW1pdHMgY29ycmVzcG9uZGluZ1xuICAgKiBldmVudHMgYW5kIHNldHMgcmVsZXZhbnQgcHVibGljIHN0YXRlLlxuICAgKiBEb2VzIG5vdGhpbmcgaWYgbmVpdGhlciB0aGUgY2hhaW5JZCBub3IgdGhlIG5ldHdvcmtWZXJzaW9uIGFyZSBkaWZmZXJlbnRcbiAgICogZnJvbSBleGlzdGluZyB2YWx1ZXMuXG4gICAqXG4gICAqIGVtaXRzIE1ldGFtYXNrSW5wYWdlUHJvdmlkZXIjY2hhaW5DaGFuZ2VkXG4gICAqIEBwYXJhbSBuZXR3b3JrSW5mbyAtIEFuIG9iamVjdCB3aXRoIG5ldHdvcmsgaW5mby5cbiAgICovXG5cblxuICBfaGFuZGxlQ2hhaW5DaGFuZ2VkKCkge1xuICAgIGxldCB7XG4gICAgICBjaGFpbklkLFxuICAgICAgbmV0d29ya1ZlcnNpb25cbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmICghY2hhaW5JZCB8fCAhbmV0d29ya1ZlcnNpb24pIHtcbiAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrOiBSZWNlaXZlZCBpbnZhbGlkIG5ldHdvcmsgcGFyYW1ldGVycy4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwge1xuICAgICAgICBjaGFpbklkLFxuICAgICAgICBuZXR3b3JrVmVyc2lvblxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5ldHdvcmtWZXJzaW9uID09PSBcImxvYWRpbmdcIikge1xuICAgICAgdGhpcy5faGFuZGxlRGlzY29ubmVjdCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdChjaGFpbklkKTtcblxuICAgICAgaWYgKGNoYWluSWQgIT09IHRoaXMuY2hhaW5JZCkge1xuICAgICAgICB0aGlzLmNoYWluSWQgPSBjaGFpbklkO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZS5pbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuZW1pdChcImNoYWluQ2hhbmdlZFwiLCB0aGlzLmNoYWluSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVcG9uIHJlY2VpcHQgb2YgYSBuZXcgaXNVbmxvY2tlZCBzdGF0ZSwgc2V0cyByZWxldmFudCBwdWJsaWMgc3RhdGUuXG4gICAqIENhbGxzIHRoZSBhY2NvdW50cyBjaGFuZ2VkIGhhbmRsZXIgd2l0aCB0aGUgcmVjZWl2ZWQgYWNjb3VudHMsIG9yIGFuIGVtcHR5XG4gICAqIGFycmF5LlxuICAgKlxuICAgKiBEb2VzIG5vdGhpbmcgaWYgdGhlIHJlY2VpdmVkIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSBleGlzdGluZyB2YWx1ZS5cbiAgICogVGhlcmUgYXJlIG5vIGxvY2svdW5sb2NrIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIG9wdHMgLSBPcHRpb25zIGJhZy5cbiAgICovXG5cblxuICBfaGFuZGxlVW5sb2NrU3RhdGVDaGFuZ2VkKCkge1xuICAgIGxldCB7XG4gICAgICBhY2NvdW50cyxcbiAgICAgIGlzVW5sb2NrZWRcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmICh0eXBlb2YgaXNVbmxvY2tlZCAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgIGxvZy5lcnJvcihcIk1ldGFNYXNrOiBSZWNlaXZlZCBpbnZhbGlkIGlzVW5sb2NrZWQgcGFyYW1ldGVyLiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLlwiLCB7XG4gICAgICAgIGlzVW5sb2NrZWRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1VubG9ja2VkICE9PSB0aGlzLl9zdGF0ZS5pc1VubG9ja2VkKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc1VubG9ja2VkID0gaXNVbmxvY2tlZDtcblxuICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKGFjY291bnRzIHx8IFtdKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFdhcm5zIG9mIGRlcHJlY2F0aW9uIGZvciB0aGUgZ2l2ZW4gZXZlbnQsIGlmIGFwcGxpY2FibGUuXG4gICAqL1xuXG5cbiAgX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSkge1xuICAgIGlmICh0aGlzLl9zZW50V2FybmluZ3MuZXZlbnRzW2V2ZW50TmFtZV0gPT09IGZhbHNlKSB7XG4gICAgICBsb2cud2FybihtZXNzYWdlcy53YXJuaW5ncy5ldmVudHNbZXZlbnROYW1lXSk7XG4gICAgICB0aGlzLl9zZW50V2FybmluZ3MuZXZlbnRzW2V2ZW50TmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG59XG5cbl9kZWZpbmVQcm9wZXJ0eShUb3J1c0lucGFnZVByb3ZpZGVyLCBcIl9kZWZhdWx0U3RhdGVcIiwge1xuICBhY2NvdW50czogbnVsbCxcbiAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICBpc1VubG9ja2VkOiBmYWxzZSxcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICBpc1Blcm1hbmVudGx5RGlzY29ubmVjdGVkOiBmYWxzZSxcbiAgaGFzRW1pdHRlZENvbm5lY3Rpb246IGZhbHNlXG59KTtcblxuY29uc3QgZGVmYXVsdHMgPSBvcHRpb25zID0+ICh7XG4gIGFsZ29yaXRobXM6IG9wdGlvbnMuYWxnb3JpdGhtcyB8fCBbXCJzaGEyNTZcIl0sXG4gIGRlbGltaXRlcjogb3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIgXCIsXG4gIGZ1bGw6IG9wdGlvbnMuZnVsbCB8fCBmYWxzZVxufSk7IC8vIEdlbmVyYXRlIGxpc3Qgb2YgaGFzaGVzXG5cblxuY29uc3QgaGFzaGVzID0gKG9wdGlvbnMsIGRhdGEpID0+IHtcbiAgY29uc3QgaW50ZXJuYWxIYXNoZXMgPSB7fTtcbiAgb3B0aW9ucy5hbGdvcml0aG1zLmZvckVhY2goYWxnb3JpdGhtID0+IHtcbiAgICBpbnRlcm5hbEhhc2hlc1thbGdvcml0aG1dID0gY3JlYXRlSGFzaChhbGdvcml0aG0pLnVwZGF0ZShkYXRhLCBcInV0ZjhcIikuZGlnZXN0KFwiYmFzZTY0XCIpO1xuICB9KTtcbiAgcmV0dXJuIGludGVybmFsSGFzaGVzO1xufTsgLy8gQnVpbGQgYW4gaW50ZWdyaXR5IHN0cmluZ1xuXG5cbmNvbnN0IGludGVncml0eSA9IChvcHRpb25zLCBzcmkpID0+IHtcbiAgbGV0IG91dHB1dCA9IFwiXCI7IC8vIEhhc2ggbGlzdFxuXG4gIG91dHB1dCArPSBPYmplY3Qua2V5cyhzcmkuaGFzaGVzKS5tYXAoYWxnb3JpdGhtID0+IFwiXCIuY29uY2F0KGFsZ29yaXRobSwgXCItXCIpLmNvbmNhdChzcmkuaGFzaGVzW2FsZ29yaXRobV0pKS5qb2luKG9wdGlvbnMuZGVsaW1pdGVyKTtcbiAgcmV0dXJuIG91dHB1dDtcbn07XG5cbmNvbnN0IG1haW4gPSAob3B0aW9ucywgZGF0YSkgPT4ge1xuICAvLyBEZWZhdWx0c1xuICBjb25zdCBmaW5hbE9wdGlvbnMgPSBkZWZhdWx0cyhvcHRpb25zKTtcbiAgY29uc3Qgc3JpID0ge1xuICAgIGhhc2hlczogaGFzaGVzKGZpbmFsT3B0aW9ucywgZGF0YSksXG4gICAgaW50ZWdyaXR5OiB1bmRlZmluZWRcbiAgfTtcbiAgc3JpLmludGVncml0eSA9IGludGVncml0eShmaW5hbE9wdGlvbnMsIHNyaSk7XG4gIHJldHVybiBmaW5hbE9wdGlvbnMuZnVsbCA/IHNyaSA6IHNyaS5pbnRlZ3JpdHk7XG59O1xuXG5jbGFzcyBQb3B1cEhhbmRsZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIHVybCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGZlYXR1cmVzXG4gICAgfSA9IF9yZWY7XG4gICAgc3VwZXIoKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVybFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidGFyZ2V0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJmZWF0dXJlc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2luZG93XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3aW5kb3dUaW1lclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaUNsb3NlZFdpbmRvd1wiLCB2b2lkIDApO1xuXG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQgfHwgXCJfYmxhbmtcIjtcbiAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZXMgfHwgZ2V0UG9wdXBGZWF0dXJlcygpO1xuICAgIHRoaXMud2luZG93ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMud2luZG93VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pQ2xvc2VkV2luZG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLl9zZXR1cFRpbWVyKCk7XG4gIH1cblxuICBfc2V0dXBUaW1lcigpIHtcbiAgICB0aGlzLndpbmRvd1RpbWVyID0gTnVtYmVyKHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLndpbmRvdyAmJiB0aGlzLndpbmRvdy5jbG9zZWQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLndpbmRvd1RpbWVyKTtcblxuICAgICAgICBpZiAoIXRoaXMuaUNsb3NlZFdpbmRvdykge1xuICAgICAgICAgIHRoaXMuZW1pdChcImNsb3NlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pQ2xvc2VkV2luZG93ID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2luZG93ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy53aW5kb3cgPT09IHVuZGVmaW5lZCkgY2xlYXJJbnRlcnZhbCh0aGlzLndpbmRvd1RpbWVyKTtcbiAgICB9LCA1MDApKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdmFyIF90aGlzJHdpbmRvdztcblxuICAgIHRoaXMud2luZG93ID0gd2luZG93Lm9wZW4odGhpcy51cmwuaHJlZiwgdGhpcy50YXJnZXQsIHRoaXMuZmVhdHVyZXMpO1xuICAgIGlmICgoX3RoaXMkd2luZG93ID0gdGhpcy53aW5kb3cpICE9PSBudWxsICYmIF90aGlzJHdpbmRvdyAhPT0gdm9pZCAwICYmIF90aGlzJHdpbmRvdy5mb2N1cykgdGhpcy53aW5kb3cuZm9jdXMoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlDbG9zZWRXaW5kb3cgPSB0cnVlO1xuICAgIGlmICh0aGlzLndpbmRvdykgdGhpcy53aW5kb3cuY2xvc2UoKTtcbiAgfVxuXG4gIHJlZGlyZWN0KGxvY2F0aW9uUmVwbGFjZU9uUmVkaXJlY3QpIHtcbiAgICBpZiAobG9jYXRpb25SZXBsYWNlT25SZWRpcmVjdCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodGhpcy51cmwuaHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy51cmwuaHJlZjtcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gaW1hZ2UgVVJMIGV4aXN0c1xuICogQHBhcmFtIHVybCAtIHRoZSB1cmwgb2YgdGhlIGltYWdlXG4gKiBAcmV0dXJucyAtIHdoZXRoZXIgdGhlIGltYWdlIGV4aXN0c1xuICovXG5cbmZ1bmN0aW9uIGltZ0V4aXN0cyh1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUodHJ1ZSk7XG5cbiAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVzb2x2ZShmYWxzZSk7XG5cbiAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KGUpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIEV4dHJhY3RzIGEgbmFtZSBmb3IgdGhlIHNpdGUgZnJvbSB0aGUgRE9NXG4gKi9cblxuXG5jb25zdCBnZXRTaXRlTmFtZSA9IHdpbmRvdyA9PiB7XG4gIGNvbnN0IHtcbiAgICBkb2N1bWVudFxuICB9ID0gd2luZG93O1xuICBjb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQgPiBtZXRhW3Byb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCJdJyk7XG5cbiAgaWYgKHNpdGVOYW1lKSB7XG4gICAgcmV0dXJuIHNpdGVOYW1lLmNvbnRlbnQ7XG4gIH1cblxuICBjb25zdCBtZXRhVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkID4gbWV0YVtuYW1lPVwidGl0bGVcIl0nKTtcblxuICBpZiAobWV0YVRpdGxlKSB7XG4gICAgcmV0dXJuIG1ldGFUaXRsZS5jb250ZW50O1xuICB9XG5cbiAgaWYgKGRvY3VtZW50LnRpdGxlICYmIGRvY3VtZW50LnRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gIH1cblxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xufTtcbi8qKlxuICogRXh0cmFjdHMgYW4gaWNvbiBmb3IgdGhlIHNpdGUgZnJvbSB0aGUgRE9NXG4gKi9cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRTaXRlSWNvbih3aW5kb3cpIHtcbiAgY29uc3Qge1xuICAgIGRvY3VtZW50XG4gIH0gPSB3aW5kb3c7IC8vIFVzZSB0aGUgc2l0ZSdzIGZhdmljb24gaWYgaXQgZXhpc3RzXG5cbiAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkID4gbGlua1tyZWw9XCJzaG9ydGN1dCBpY29uXCJdJyk7XG5cbiAgaWYgKGljb24gJiYgKGF3YWl0IGltZ0V4aXN0cyhpY29uLmhyZWYpKSkge1xuICAgIHJldHVybiBpY29uLmhyZWY7XG4gIH0gLy8gU2VhcmNoIHRocm91Z2ggYXZhaWxhYmxlIGljb25zIGluIG5vIHBhcnRpY3VsYXIgb3JkZXJcblxuXG4gIGljb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hlYWQgPiBsaW5rW3JlbD1cImljb25cIl0nKSkuZmluZChfaWNvbiA9PiBCb29sZWFuKF9pY29uLmhyZWYpKTtcblxuICBpZiAoaWNvbiAmJiAoYXdhaXQgaW1nRXhpc3RzKGljb24uaHJlZikpKSB7XG4gICAgcmV0dXJuIGljb24uaHJlZjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBHZXRzIHNpdGUgbWV0YWRhdGEgYW5kIHJldHVybnMgaXRcbiAqXG4gKi9cblxuXG5jb25zdCBnZXRTaXRlTWV0YWRhdGEgPSBhc3luYyAoKSA9PiAoe1xuICBuYW1lOiBnZXRTaXRlTmFtZSh3aW5kb3cpLFxuICBpY29uOiBhd2FpdCBnZXRTaXRlSWNvbih3aW5kb3cpXG59KTtcbi8qKlxuICogU2VuZHMgc2l0ZSBtZXRhZGF0YSBvdmVyIGFuIFJQQyByZXF1ZXN0LlxuICovXG5cblxuYXN5bmMgZnVuY3Rpb24gc2VuZFNpdGVNZXRhZGF0YShlbmdpbmUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkb21haW5NZXRhZGF0YSA9IGF3YWl0IGdldFNpdGVNZXRhZGF0YSgpOyAvLyBjYWxsIGVuZ2luZS5oYW5kbGUgZGlyZWN0bHkgdG8gYXZvaWQgbm9ybWFsIFJQQyByZXF1ZXN0IGhhbmRsaW5nXG5cbiAgICBlbmdpbmUuaGFuZGxlKHtcbiAgICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgICBpZDogZ2V0UHJlb3Blbkluc3RhbmNlSWQoKSxcbiAgICAgIG1ldGhvZDogXCJ3YWxsZXRfc2VuZERvbWFpbk1ldGFkYXRhXCIsXG4gICAgICBwYXJhbXM6IGRvbWFpbk1ldGFkYXRhXG4gICAgfSwgTk9PUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nLmVycm9yKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VzLmVycm9ycy5zZW5kU2l0ZU1ldGFkYXRhKCksXG4gICAgICBvcmlnaW5hbEVycm9yOiBlcnJvclxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IF9leGNsdWRlZCA9IFtcImhvc3RcIiwgXCJjaGFpbklkXCIsIFwibmV0d29ya05hbWVcIl07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5jb25zdCBkZWZhdWx0VmVyaWZpZXJzID0ge1xuICBbTE9HSU5fUFJPVklERVIuR09PR0xFXTogdHJ1ZSxcbiAgW0xPR0lOX1BST1ZJREVSLkZBQ0VCT09LXTogdHJ1ZSxcbiAgW0xPR0lOX1BST1ZJREVSLlJFRERJVF06IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5UV0lUQ0hdOiB0cnVlLFxuICBbTE9HSU5fUFJPVklERVIuRElTQ09SRF06IHRydWVcbn07XG5jb25zdCBpZnJhbWVJbnRlZ3JpdHkgPSBcInNoYTM4NC1vMDJESnlYSVJsWC9abHpiTzZpOVBtNXdML21BK3VaalRRY3g0MEh3MFVFWjhKWndUa1dJSjFncGYrNFdVZ2c4XCI7XG5jb25zdCBleHBlY3RlZENhY2hlQ29udHJvbEhlYWRlciA9IFwibWF4LWFnZT0zNjAwXCI7XG5jb25zdCBVTlNBRkVfTUVUSE9EUyA9IFtcImV0aF9zZW5kVHJhbnNhY3Rpb25cIiwgXCJldGhfc2lnblR5cGVkRGF0YVwiLCBcImV0aF9zaWduVHlwZWREYXRhX3YzXCIsIFwiZXRoX3NpZ25UeXBlZERhdGFfdjRcIiwgXCJwZXJzb25hbF9zaWduXCIsIFwiZXRoX2dldEVuY3J5cHRpb25QdWJsaWNLZXlcIiwgXCJldGhfZGVjcnlwdFwiXTtcbmNvbnN0IGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlID0gc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKTsgLy8gcHJlbG9hZCBmb3IgaWZyYW1lIGRvZXNuJ3Qgd29yayBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01OTMyNjdcblxuKGFzeW5jIGZ1bmN0aW9uIHByZUxvYWRJZnJhbWUoKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgIGNvbnN0IHRvcnVzSWZyYW1lSHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvcnVzVXJsXG4gICAgfSA9IGF3YWl0IGdldFRvcnVzVXJsKFwicHJvZHVjdGlvblwiLCB7XG4gICAgICBjaGVjazogZmFsc2UsXG4gICAgICBoYXNoOiBpZnJhbWVJbnRlZ3JpdHksXG4gICAgICB2ZXJzaW9uOiBcIlwiXG4gICAgfSk7XG4gICAgdG9ydXNJZnJhbWVIdG1sLmhyZWYgPSBcIlwiLmNvbmNhdCh0b3J1c1VybCwgXCIvcG9wdXBcIik7XG4gICAgdG9ydXNJZnJhbWVIdG1sLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICB0b3J1c0lmcmFtZUh0bWwudHlwZSA9IFwidGV4dC9odG1sXCI7XG4gICAgdG9ydXNJZnJhbWVIdG1sLnJlbCA9IFwicHJlZmV0Y2hcIjtcblxuICAgIGlmICh0b3J1c0lmcmFtZUh0bWwucmVsTGlzdCAmJiB0b3J1c0lmcmFtZUh0bWwucmVsTGlzdC5zdXBwb3J0cykge1xuICAgICAgaWYgKHRvcnVzSWZyYW1lSHRtbC5yZWxMaXN0LnN1cHBvcnRzKFwicHJlZmV0Y2hcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0b3J1c0lmcmFtZUh0bWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cud2FybihlcnJvcik7XG4gIH1cbn0pKCk7XG5cbmNsYXNzIFRvcnVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IHtcbiAgICAgIGJ1dHRvblBvc2l0aW9uID0gQlVUVE9OX1BPU0lUSU9OLkJPVFRPTV9MRUZULFxuICAgICAgbW9kYWxaSW5kZXggPSA5OTk5OSxcbiAgICAgIGFwaUtleSA9IFwidG9ydXMtZGVmYXVsdFwiXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJidXR0b25Qb3NpdGlvblwiLCBCVVRUT05fUE9TSVRJT04uQk9UVE9NX0xFRlQpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNVcmxcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzSWZyYW1lXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdHlsZUxpbmtcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzTG9nZ2VkSW5cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSW5pdGlhbGl6ZWRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzV2lkZ2V0VmlzaWJpbGl0eVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNBbGVydFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibm9kZURldGFpbE1hbmFnZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzSnNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFwaUtleVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibW9kYWxaSW5kZXhcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFsZXJ0WkluZGV4XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0FsZXJ0Q29udGFpbmVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0lmcmFtZUZ1bGxTY3JlZW5cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndoaXRlTGFiZWxcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJlcXVlc3RlZFZlcmlmaWVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjdXJyZW50VmVyaWZpZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVtYmVkVHJhbnNsYXRpb25zXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldGhlcmV1bVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicHJvdmlkZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbW11bmljYXRpb25NdXhcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzTG9naW5DYWxsYmFja1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGFwcFN0b3JhZ2VLZXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBheW1lbnRQcm92aWRlcnNcIiwgY29uZmlndXJhdGlvbi5wYXltZW50UHJvdmlkZXJzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxvZ2luSGludFwiLCBcIlwiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVzZVdhbGxldENvbm5lY3RcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuYnV0dG9uUG9zaXRpb24gPSBidXR0b25Qb3NpdGlvbjtcbiAgICB0aGlzLnRvcnVzVXJsID0gXCJcIjtcbiAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTsgLy8gZXRoZXJldW0uZW5hYmxlIHdvcmtpbmdcblxuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlOyAvLyBpbml0IGRvbmVcblxuICAgIHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyID0gXCJcIjtcbiAgICB0aGlzLmN1cnJlbnRWZXJpZmllciA9IFwiXCI7XG4gICAgdGhpcy5ub2RlRGV0YWlsTWFuYWdlciA9IG5ldyBOb2RlRGV0YWlsTWFuYWdlcigpO1xuICAgIHRoaXMudG9ydXNKcyA9IG5ldyBUb3J1c0pzKHtcbiAgICAgIG1ldGFkYXRhSG9zdDogXCJodHRwczovL21ldGFkYXRhLnRvci51c1wiLFxuICAgICAgYWxsb3dIb3N0OiBcImh0dHBzOi8vc2lnbmVyLnRvci51cy9hcGkvYWxsb3dcIlxuICAgIH0pO1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgIFRvcnVzSnMuc2V0QVBJS2V5KGFwaUtleSk7XG4gICAgc2V0QVBJS2V5KGFwaUtleSk7XG4gICAgdGhpcy5tb2RhbFpJbmRleCA9IG1vZGFsWkluZGV4O1xuICAgIHRoaXMuYWxlcnRaSW5kZXggPSBtb2RhbFpJbmRleCArIDEwMDA7XG4gICAgdGhpcy5pc0lmcmFtZUZ1bGxTY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmRhcHBTdG9yYWdlS2V5ID0gXCJcIjtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgbGV0IHtcbiAgICAgIGJ1aWxkRW52ID0gVE9SVVNfQlVJTERfRU5WLlBST0RVQ1RJT04sXG4gICAgICBlbmFibGVMb2dnaW5nID0gZmFsc2UsXG4gICAgICAvLyBkZXByZWNhdGVkOiB1c2UgbG9naW5Db25maWcgaW5zdGVhZFxuICAgICAgZW5hYmxlZFZlcmlmaWVycyA9IGRlZmF1bHRWZXJpZmllcnMsXG4gICAgICBuZXR3b3JrID0ge1xuICAgICAgICBob3N0OiBcIm1haW5uZXRcIixcbiAgICAgICAgY2hhaW5JZDogbnVsbCxcbiAgICAgICAgbmV0d29ya05hbWU6IFwiXCIsXG4gICAgICAgIGJsb2NrRXhwbG9yZXI6IFwiXCIsXG4gICAgICAgIHRpY2tlcjogXCJcIixcbiAgICAgICAgdGlja2VyTmFtZTogXCJcIlxuICAgICAgfSxcbiAgICAgIGxvZ2luQ29uZmlnID0ge30sXG4gICAgICBzaG93VG9ydXNCdXR0b24gPSB0cnVlLFxuICAgICAgaW50ZWdyaXR5ID0ge1xuICAgICAgICBjaGVjazogZmFsc2UsXG4gICAgICAgIGhhc2g6IGlmcmFtZUludGVncml0eSxcbiAgICAgICAgdmVyc2lvbjogXCJcIlxuICAgICAgfSxcbiAgICAgIHdoaXRlTGFiZWwsXG4gICAgICBza2lwVEtleSA9IGZhbHNlLFxuICAgICAgdXNlTG9jYWxTdG9yYWdlID0gZmFsc2UsXG4gICAgICB1c2VXYWxsZXRDb25uZWN0ID0gZmFsc2VcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB0aHJvdyBuZXcgRXJyb3IoXCJBbHJlYWR5IGluaXRpYWxpemVkXCIpO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvcnVzVXJsLFxuICAgICAgbG9nTGV2ZWxcbiAgICB9ID0gYXdhaXQgZ2V0VG9ydXNVcmwoYnVpbGRFbnYsIGludGVncml0eSk7XG4gICAgbG9nLmluZm8odG9ydXNVcmwsIFwidXJsIGxvYWRlZFwiKTtcbiAgICB0aGlzLnRvcnVzVXJsID0gdG9ydXNVcmw7XG4gICAgdGhpcy53aGl0ZUxhYmVsID0gd2hpdGVMYWJlbDtcbiAgICB0aGlzLnVzZVdhbGxldENvbm5lY3QgPSB1c2VXYWxsZXRDb25uZWN0O1xuICAgIGxvZy5zZXREZWZhdWx0TGV2ZWwobG9nTGV2ZWwpO1xuICAgIGlmIChlbmFibGVMb2dnaW5nKSBsb2cuZW5hYmxlQWxsKCk7ZWxzZSBsb2cuZGlzYWJsZUFsbCgpO1xuICAgIHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID0gc2hvd1RvcnVzQnV0dG9uO1xuICAgIGxldCBkYXBwU3RvcmFnZUtleSA9IFwiXCI7XG5cbiAgICBpZiAoaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgJiYgdXNlTG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zdCBsb2NhbFN0b3JhZ2VLZXkgPSBcIlwiLmNvbmNhdChjb25maWd1cmF0aW9uLmxvY2FsU3RvcmFnZUtleVByZWZpeCkuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICBjb25zdCBzdG9yZWRLZXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KTtcbiAgICAgIGlmIChzdG9yZWRLZXkpIGRhcHBTdG9yYWdlS2V5ID0gc3RvcmVkS2V5O2Vsc2Uge1xuICAgICAgICBjb25zdCBnZW5lcmF0ZWRLZXkgPSBcInRvcnVzLWFwcC1cIi5jb25jYXQoZ2V0UHJlb3Blbkluc3RhbmNlSWQoKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIGdlbmVyYXRlZEtleSk7XG4gICAgICAgIGRhcHBTdG9yYWdlS2V5ID0gZ2VuZXJhdGVkS2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZGFwcFN0b3JhZ2VLZXkgPSBkYXBwU3RvcmFnZUtleTtcbiAgICBjb25zdCB0b3J1c0lmcmFtZVVybCA9IG5ldyBVUkwodG9ydXNVcmwpO1xuICAgIGlmICh0b3J1c0lmcmFtZVVybC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikpIHRvcnVzSWZyYW1lVXJsLnBhdGhuYW1lICs9IFwicG9wdXBcIjtlbHNlIHRvcnVzSWZyYW1lVXJsLnBhdGhuYW1lICs9IFwiL3BvcHVwXCI7XG5cbiAgICBpZiAoZGFwcFN0b3JhZ2VLZXkpIHtcbiAgICAgIHRvcnVzSWZyYW1lVXJsLmhhc2ggPSBcIiNkYXBwU3RvcmFnZUtleT1cIi5jb25jYXQoZGFwcFN0b3JhZ2VLZXkpO1xuICAgIH0gLy8gSWZyYW1lIGNvZGVcblxuXG4gICAgdGhpcy50b3J1c0lmcmFtZSA9IGh0bWxUb0VsZW1lbnQoXCI8aWZyYW1lXFxuICAgICAgICBpZD1cXFwidG9ydXNJZnJhbWVcXFwiXFxuICAgICAgICBhbGxvdz1cIi5jb25jYXQodXNlV2FsbGV0Q29ubmVjdCA/IFwiY2FtZXJhXCIgOiBcIlwiLCBcIlxcbiAgICAgICAgY2xhc3M9XFxcInRvcnVzSWZyYW1lXFxcIlxcbiAgICAgICAgc3JjPVxcXCJcIikuY29uY2F0KHRvcnVzSWZyYW1lVXJsLmhyZWYsIFwiXFxcIlxcbiAgICAgICAgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyByaWdodDogMDsgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMDsgei1pbmRleDogXCIpLmNvbmNhdCh0aGlzLm1vZGFsWkluZGV4LCBcIlxcXCJcXG4gICAgICA+PC9pZnJhbWU+XCIpKTtcbiAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIgPSBodG1sVG9FbGVtZW50KCc8ZGl2IGlkPVwidG9ydXNBbGVydENvbnRhaW5lclwiPjwvZGl2PicpO1xuICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiei1pbmRleFwiLCB0aGlzLmFsZXJ0WkluZGV4LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGxpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiLmNvbmNhdCh0b3J1c1VybCwgXCIvY3NzL3dpZGdldC5jc3NcIikpO1xuICAgIHRoaXMuc3R5bGVMaW5rID0gbGluaztcbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0TGFuZ3VhZ2UgPSBnZXRVc2VyTGFuZ3VhZ2UoKSxcbiAgICAgIGN1c3RvbVRyYW5zbGF0aW9ucyA9IHt9XG4gICAgfSA9IHRoaXMud2hpdGVMYWJlbCB8fCB7fTtcbiAgICBjb25zdCBtZXJnZWRUcmFuc2xhdGlvbnMgPSBkZWVwbWVyZ2UoY29uZmlndXJhdGlvbi50cmFuc2xhdGlvbnMsIGN1c3RvbVRyYW5zbGF0aW9ucyk7XG4gICAgY29uc3QgbGFuZ3VhZ2VUcmFuc2xhdGlvbnMgPSBtZXJnZWRUcmFuc2xhdGlvbnNbZGVmYXVsdExhbmd1YWdlXSB8fCBjb25maWd1cmF0aW9uLnRyYW5zbGF0aW9uc1tnZXRVc2VyTGFuZ3VhZ2UoKV07XG4gICAgdGhpcy5lbWJlZFRyYW5zbGF0aW9ucyA9IGxhbmd1YWdlVHJhbnNsYXRpb25zLmVtYmVkO1xuXG4gICAgY29uc3QgaGFuZGxlU2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBkb2N1bWVudFJlYWR5KCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLnRvcnVzSWZyYW1lLm9ubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAvLyBvbmx5IGRvIHRoaXMgaWYgaWZyYW1lIGlzIG5vdCBmdWxsIHNjcmVlblxuICAgICAgICAgIHRoaXMuX3NldHVwV2ViMygpO1xuXG4gICAgICAgICAgY29uc3QgaW5pdFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJpbml0X3N0cmVhbVwiKTtcbiAgICAgICAgICBpbml0U3RyZWFtLm9uKFwiZGF0YVwiLCBjaHVuayA9PiB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICB9ID0gY2h1bms7XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSBcImluaXRfY29tcGxldGVcIiAmJiBkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgLy8gcmVzb2x2ZSBwcm9taXNlXG4gICAgICAgICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZSh0aGlzLmlzSWZyYW1lRnVsbFNjcmVlbik7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaW5pdFN0cmVhbS53cml0ZSh7XG4gICAgICAgICAgICBuYW1lOiBcImluaXRfc3RyZWFtXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGVuYWJsZWRWZXJpZmllcnMsXG4gICAgICAgICAgICAgIGxvZ2luQ29uZmlnLFxuICAgICAgICAgICAgICB3aGl0ZUxhYmVsOiB0aGlzLndoaXRlTGFiZWwsXG4gICAgICAgICAgICAgIGJ1dHRvblBvc2l0aW9uOiB0aGlzLmJ1dHRvblBvc2l0aW9uLFxuICAgICAgICAgICAgICB0b3J1c1dpZGdldFZpc2liaWxpdHk6IHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5LFxuICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgICAgICAgICBza2lwVEtleSxcbiAgICAgICAgICAgICAgbmV0d29ya1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMuc3R5bGVMaW5rKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b3J1c0lmcmFtZSk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudG9ydXNBbGVydENvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKGJ1aWxkRW52ID09PSBcInByb2R1Y3Rpb25cIiAmJiBpbnRlZ3JpdHkuY2hlY2spIHtcbiAgICAgIC8vIGhhY2t5IHNvbHV0aW9uIHRvIGNoZWNrIGZvciBpZnJhbWUgaW50ZWdyaXR5XG4gICAgICBjb25zdCBmZXRjaFVybCA9IFwiXCIuY29uY2F0KHRvcnVzVXJsLCBcIi9wb3B1cFwiKTtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChmZXRjaFVybCwge1xuICAgICAgICBjYWNoZTogXCJyZWxvYWRcIlxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwLmhlYWRlcnMuZ2V0KFwiQ2FjaGUtQ29udHJvbFwiKSAhPT0gZXhwZWN0ZWRDYWNoZUNvbnRyb2xIZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBDYWNoZS1Db250cm9sIGhlYWRlcnMsIGdvdCBcIi5jb25jYXQocmVzcC5oZWFkZXJzLmdldChcIkNhY2hlLUNvbnRyb2xcIikpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXNwLnRleHQoKTtcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRJbnRlZ3JpdHkgPSBtYWluKHtcbiAgICAgICAgYWxnb3JpdGhtczogW1wic2hhMzg0XCJdXG4gICAgICB9LCByZXNwb25zZSk7XG4gICAgICBsb2cuaW5mbyhjYWxjdWxhdGVkSW50ZWdyaXR5LCBcImludGVncml0eVwiKTtcblxuICAgICAgaWYgKGNhbGN1bGF0ZWRJbnRlZ3JpdHkgPT09IGludGVncml0eS5oYXNoKSB7XG4gICAgICAgIGF3YWl0IGhhbmRsZVNldHVwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFySW5pdCgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlZ3JpdHkgY2hlY2sgZmFpbGVkXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBoYW5kbGVTZXR1cCgpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBsZXQge1xuICAgICAgdmVyaWZpZXIgPSBcIlwiLFxuICAgICAgbG9naW5faGludDogbG9naW5IaW50ID0gXCJcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKSB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsIGluaXQoKSBmaXJzdFwiKTtcbiAgICB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyID0gdmVyaWZpZXI7XG4gICAgdGhpcy5sb2dpbkhpbnQgPSBsb2dpbkhpbnQ7XG4gICAgcmV0dXJuIHRoaXMuZXRoZXJldW0uZW5hYmxlKCk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIGhhcyBub3QgbG9nZ2VkIGluIHlldFwiKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9nT3V0U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcImxvZ291dFwiKTtcbiAgICAgIGxvZ091dFN0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwibG9nT3V0XCJcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc3RhdHVzU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInN0YXR1c1wiKTtcblxuICAgICAgY29uc3Qgc3RhdHVzU3RyZWFtSGFuZGxlciA9IHN0YXR1cyA9PiB7XG4gICAgICAgIGlmICghc3RhdHVzLmxvZ2dlZEluKSB7XG4gICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VmVyaWZpZXIgPSBcIlwiO1xuICAgICAgICAgIHRoaXMucmVxdWVzdGVkVmVyaWZpZXIgPSBcIlwiO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJTb21lIEVycm9yIE9jY3VyZWRcIikpO1xuICAgICAgfTtcblxuICAgICAgaGFuZGxlU3RyZWFtKHN0YXR1c1N0cmVhbSwgXCJkYXRhXCIsIHN0YXR1c1N0cmVhbUhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY2xlYW5VcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICBhd2FpdCB0aGlzLmxvZ291dCgpO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXJJbml0KCk7XG4gIH1cblxuICBjbGVhckluaXQoKSB7XG4gICAgZnVuY3Rpb24gaXNFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTERvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQodGhpcy5zdHlsZUxpbmspICYmIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuc3R5bGVMaW5rKSkge1xuICAgICAgdGhpcy5zdHlsZUxpbmsucmVtb3ZlKCk7XG4gICAgICB0aGlzLnN0eWxlTGluayA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KHRoaXMudG9ydXNJZnJhbWUpICYmIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMudG9ydXNJZnJhbWUpKSB7XG4gICAgICB0aGlzLnRvcnVzSWZyYW1lLnJlbW92ZSgpO1xuICAgICAgdGhpcy50b3J1c0lmcmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KHRoaXMudG9ydXNBbGVydENvbnRhaW5lcikgJiYgd2luZG93LmRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyKSkge1xuICAgICAgdGhpcy50b3J1c0FsZXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICB9XG5cbiAgaGlkZVRvcnVzQnV0dG9uKCkge1xuICAgIHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID0gZmFsc2U7XG5cbiAgICB0aGlzLl9zZW5kV2lkZ2V0VmlzaWJpbGl0eVN0YXR1cyhmYWxzZSk7XG5cbiAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG4gIH1cblxuICBzaG93VG9ydXNCdXR0b24oKSB7XG4gICAgdGhpcy50b3J1c1dpZGdldFZpc2liaWxpdHkgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXModHJ1ZSk7XG5cbiAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG4gIH1cblxuICBzZXRQcm92aWRlcigpIHtcbiAgICBsZXQgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBsZXQge1xuICAgICAgaG9zdCA9IFwibWFpbm5ldFwiLFxuICAgICAgY2hhaW5JZCA9IG51bGwsXG4gICAgICBuZXR3b3JrTmFtZSA9IFwiXCJcbiAgICB9ID0gX3JlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyQ2hhbmdlU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInByb3ZpZGVyX2NoYW5nZVwiKTtcblxuICAgICAgY29uc3QgaGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBzdWNjZXNzXG4gICAgICAgIH0gPSBjaHVuay5kYXRhO1xuICAgICAgICBsb2cuaW5mbyhjaHVuayk7XG5cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9IGVsc2UgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwic29tZSBlcnJvciBvY2N1cmVkXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZVN0cmVhbShwcm92aWRlckNoYW5nZVN0cmVhbSwgXCJkYXRhXCIsIGhhbmRsZXIpO1xuICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQsIHtcbiAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPV1xuICAgICAgfSk7XG5cbiAgICAgIHByb3ZpZGVyQ2hhbmdlU3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJzaG93X3Byb3ZpZGVyX2NoYW5nZVwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmV0d29yazogX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICBob3N0LFxuICAgICAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgICAgIG5ldHdvcmtOYW1lXG4gICAgICAgICAgfSwgcmVzdCksXG4gICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWQsXG4gICAgICAgICAgb3ZlcnJpZGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1dhbGxldChwYXRoKSB7XG4gICAgbGV0IHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgY29uc3Qgc2hvd1dhbGxldFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJzaG93X3dhbGxldFwiKTtcbiAgICBjb25zdCBmaW5hbFBhdGggPSBwYXRoID8gXCIvXCIuY29uY2F0KHBhdGgpIDogXCJcIjtcbiAgICBzaG93V2FsbGV0U3RyZWFtLndyaXRlKHtcbiAgICAgIG5hbWU6IFwic2hvd193YWxsZXRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcGF0aDogZmluYWxQYXRoXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaG93V2FsbGV0SGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgIGlmIChjaHVuay5uYW1lID09PSBcInNob3dfd2FsbGV0X2luc3RhbmNlXCIpIHtcbiAgICAgICAgLy8gTGV0IHRoZSBlcnJvciBwcm9wb2dhdGUgdXAgKGhlbmNlLCBubyB0cnkgY2F0Y2gpXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBpbnN0YW5jZUlkXG4gICAgICAgIH0gPSBjaHVuay5kYXRhO1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwoXCJcIi5jb25jYXQodGhpcy50b3J1c1VybCwgXCIvd2FsbGV0XCIpLmNvbmNhdChmaW5hbFBhdGgpKTsgLy8gVXNpbmcgVVJMIGNvbnN0cnVjdG9yIHRvIHByZXZlbnQganMgaW5qZWN0aW9uIGFuZCBhbGxvdyBwYXJhbWV0ZXIgdmFsaWRhdGlvbi4hXG5cbiAgICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImludGVncml0eVwiLCBcInRydWVcIik7XG4gICAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJpbnN0YW5jZUlkXCIsIGluc3RhbmNlSWQpO1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZCh4LCBwYXJhbXNbeF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5kYXBwU3RvcmFnZUtleSkge1xuICAgICAgICAgIGZpbmFsVXJsLmhhc2ggPSBcIiNkYXBwU3RvcmFnZUtleT1cIi5jb25jYXQodGhpcy5kYXBwU3RvcmFnZUtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWxsZXRXaW5kb3cgPSBuZXcgUG9wdXBIYW5kbGVyKHtcbiAgICAgICAgICB1cmw6IGZpbmFsVXJsLFxuICAgICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19ERUZBVUxUX1dBTExFVF9XSU5ET1dcbiAgICAgICAgfSk7XG4gICAgICAgIHdhbGxldFdpbmRvdy5vcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGhhbmRsZVN0cmVhbShzaG93V2FsbGV0U3RyZWFtLCBcImRhdGFcIiwgc2hvd1dhbGxldEhhbmRsZXIpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UHVibGljQWRkcmVzcyhfcmVmMikge1xuICAgIGxldCB7XG4gICAgICB2ZXJpZmllcixcbiAgICAgIHZlcmlmaWVySWQsXG4gICAgICBpc0V4dGVuZGVkID0gZmFsc2VcbiAgICB9ID0gX3JlZjI7XG4gICAgaWYgKCFjb25maWd1cmF0aW9uLnN1cHBvcnRlZFZlcmlmaWVyTGlzdC5pbmNsdWRlcyh2ZXJpZmllcikgfHwgIVdBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQW3ZlcmlmaWVyXSkgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdmVyaWZpZXJcIik7XG4gICAgY29uc3Qgbm9kZURldGFpbHMgPSBhd2FpdCB0aGlzLm5vZGVEZXRhaWxNYW5hZ2VyLmdldE5vZGVEZXRhaWxzKHtcbiAgICAgIHZlcmlmaWVyLFxuICAgICAgdmVyaWZpZXJJZFxuICAgIH0pO1xuICAgIGNvbnN0IGVuZHBvaW50cyA9IG5vZGVEZXRhaWxzLnRvcnVzTm9kZUVuZHBvaW50cztcbiAgICBjb25zdCB0b3J1c05vZGVQdWJzID0gbm9kZURldGFpbHMudG9ydXNOb2RlUHViO1xuICAgIGNvbnN0IHdhbGxldFZlcmlmaWVyID0gdmVyaWZpZXI7XG4gICAgY29uc3Qgb3BlbmxvZ2luVmVyaWZpZXIgPSBXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUFt2ZXJpZmllcl07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdWMVVzZXIgPSBhd2FpdCB0aGlzLnRvcnVzSnMuZ2V0VXNlclR5cGVBbmRBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywge1xuICAgICAgICB2ZXJpZmllcjogd2FsbGV0VmVyaWZpZXIsXG4gICAgICAgIHZlcmlmaWVySWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXhpc3RpbmdWMVVzZXIudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSB7XG4gICAgICAgIGlmICghaXNFeHRlbmRlZCkgcmV0dXJuIGV4aXN0aW5nVjFVc2VyLmFkZHJlc3M7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1YxVXNlcjtcbiAgICAgIH0gLy8gd2UgZG9uJ3Qgc3VwcG9ydCB2MiB1c2VycyB3aXRoIHYxIHZlcmlmaWVycyBzbyBnZXQgb3IgYXNzaWduIHRoZSBrZXkgZm9yIHYyIHVzZXIgb24gdjIgYHZlcmlmaWVyYFxuXG5cbiAgICAgIGNvbnN0IHYyVXNlciA9IGF3YWl0IHRoaXMudG9ydXNKcy5nZXRVc2VyVHlwZUFuZEFkZHJlc3MoZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCB7XG4gICAgICAgIHZlcmlmaWVyOiBvcGVubG9naW5WZXJpZmllcixcbiAgICAgICAgdmVyaWZpZXJJZFxuICAgICAgfSwgdHJ1ZSk7XG4gICAgICBpZiAoIWlzRXh0ZW5kZWQpIHJldHVybiB2MlVzZXIuYWRkcmVzcztcbiAgICAgIHJldHVybiB2MlVzZXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwICYmIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJWZXJpZmllciArIFZlcmlmaWVySUQgaGFzIG5vdCB5ZXQgYmVlbiBhc3NpZ25lZFwiKSkge1xuICAgICAgICAvLyBpZiB1c2VyIGRvZXNuJ3QgaGF2ZSBrZXkgdGhlbiBhc3NpZ24gaXQgd2l0aCB2MiB2ZXJpZmllclxuICAgICAgICBjb25zdCBuZXdWMlVzZXIgPSBhd2FpdCB0aGlzLnRvcnVzSnMuZ2V0VXNlclR5cGVBbmRBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywge1xuICAgICAgICAgIHZlcmlmaWVyOiBvcGVubG9naW5WZXJpZmllcixcbiAgICAgICAgICB2ZXJpZmllcklkXG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgICBpZiAoIWlzRXh0ZW5kZWQpIHJldHVybiBuZXdWMlVzZXIuYWRkcmVzcztcbiAgICAgICAgcmV0dXJuIG5ld1YyVXNlcjtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlckluZm8obWVzc2FnZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvQWNjZXNzU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInVzZXJfaW5mb19hY2Nlc3NcIik7XG4gICAgICAgIHVzZXJJbmZvQWNjZXNzU3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcInVzZXJfaW5mb19hY2Nlc3NfcmVxdWVzdFwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvQWNjZXNzSGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBhcHByb3ZlZCxcbiAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgICAgcmVqZWN0ZWQsXG4gICAgICAgICAgICAgIG5ld1JlcXVlc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ID0gY2h1bms7XG5cbiAgICAgICAgICBpZiAobmFtZSA9PT0gXCJ1c2VyX2luZm9fYWNjZXNzX3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmIChhcHByb3ZlZCkge1xuICAgICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdFwiKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgY29uc3QgdXNlckluZm9TdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidXNlcl9pbmZvXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvSGFuZGxlciA9IGhhbmRsZXJDaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJDaHVuay5uYW1lID09PSBcInVzZXJfaW5mb19yZXNwb25zZVwiKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlckNodW5rLmRhdGEuYXBwcm92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShoYW5kbGVyQ2h1bmsuZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIHJlamVjdGVkIHRoZSByZXF1ZXN0XCIpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgaGFuZGxlU3RyZWFtKHVzZXJJbmZvU3RyZWFtLCBcImRhdGFcIiwgdXNlckluZm9IYW5kbGVyKTtcbiAgICAgICAgICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPV1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICB1c2VySW5mb1N0cmVhbS53cml0ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ1c2VyX2luZm9fcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbSh1c2VySW5mb0FjY2Vzc1N0cmVhbSwgXCJkYXRhXCIsIHVzZXJJbmZvQWNjZXNzSGFuZGxlcik7XG4gICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgaGFzIG5vdCBsb2dnZWQgaW4geWV0XCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYXRlVG9wdXAocHJvdmlkZXIsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgaXNWYWxpZFxuICAgICAgICB9ID0gdmFsaWRhdGVQYXltZW50UHJvdmlkZXIocHJvdmlkZXIsIHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShlcnJvcnMpKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9wdXBTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidG9wdXBcIik7XG5cbiAgICAgICAgY29uc3QgdG9wdXBIYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICAgIGlmIChjaHVuay5uYW1lID09PSBcInRvcHVwX3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmIChjaHVuay5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaHVuay5kYXRhLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihjaHVuay5kYXRhLmVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbSh0b3B1cFN0cmVhbSwgXCJkYXRhXCIsIHRvcHVwSGFuZGxlcik7XG4gICAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQpO1xuXG4gICAgICAgIHRvcHVwU3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcInRvcHVwX3JlcXVlc3RcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwcm92aWRlcixcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiVG9ydXMgaXMgbm90IGluaXRpYWxpemVkIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBsb2dpbldpdGhQcml2YXRlS2V5KGxvZ2luUGFyYW1zKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJpdmF0ZUtleSxcbiAgICAgIHVzZXJJbmZvXG4gICAgfSA9IGxvZ2luUGFyYW1zO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIGlmIChCdWZmZXIuZnJvbShwcml2YXRlS2V5LCBcImhleFwiKS5sZW5ndGggIT09IDMyKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgcHJpdmF0ZSBrZXksIFBsZWFzZSBwcm92aWRlIGEgMzIgYnl0ZSB2YWxpZCBzZWNwMjVrMSBwcml2YXRlIGtleVwiKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9naW5Qcml2S2V5U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcImxvZ2luX3dpdGhfcHJpdmF0ZV9rZXlcIik7XG5cbiAgICAgICAgY29uc3QgbG9naW5IYW5kbGVyID0gY2h1bmsgPT4ge1xuICAgICAgICAgIGlmIChjaHVuay5uYW1lID09PSBcImxvZ2luX3dpdGhfcHJpdmF0ZV9rZXlfcmVzcG9uc2VcIikge1xuICAgICAgICAgICAgaWYgKGNodW5rLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICByZXNvbHZlKGNodW5rLmRhdGEuc3VjY2Vzcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGNodW5rLmRhdGEuZXJyb3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlU3RyZWFtKGxvZ2luUHJpdktleVN0cmVhbSwgXCJkYXRhXCIsIGxvZ2luSGFuZGxlcik7XG4gICAgICAgIGxvZ2luUHJpdktleVN0cmVhbS53cml0ZSh7XG4gICAgICAgICAgbmFtZTogXCJsb2dpbl93aXRoX3ByaXZhdGVfa2V5X3JlcXVlc3RcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwcml2YXRlS2V5LFxuICAgICAgICAgICAgdXNlckluZm9cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJUb3J1cyBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0XCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHNob3dXYWxsZXRDb25uZWN0U2Nhbm5lcigpIHtcbiAgICBpZiAoIXRoaXMudXNlV2FsbGV0Q29ubmVjdCkgdGhyb3cgbmV3IEVycm9yKFwiU2V0IGB1c2VXYWxsZXRDb25uZWN0YCBhcyB0cnVlIGluIGluaXQgZnVuY3Rpb24gb3B0aW9ucyB0byB1c2Ugd2FsbGV0IGNvbm5lY3Qgc2Nhbm5lclwiKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcIndhbGxldF9jb25uZWN0X3N0cmVhbVwiKTtcblxuICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0SGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJ3YWxsZXRfY29ubmVjdF9zdHJlYW1fcmVzXCIpIHtcbiAgICAgICAgICAgIGlmIChjaHVuay5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaHVuay5kYXRhLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihjaHVuay5kYXRhLmVycm9yKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlU3RyZWFtKHdhbGxldENvbm5lY3RTdHJlYW0sIFwiZGF0YVwiLCB3YWxsZXRDb25uZWN0SGFuZGxlcik7XG4gICAgICAgIHdhbGxldENvbm5lY3RTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgIG5hbWU6IFwid2FsbGV0X2Nvbm5lY3Rfc3RyZWFtX3JlcVwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUodHJ1ZSk7XG4gICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgaGFzIG5vdCBsb2dnZWQgaW4geWV0XCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQpIHtcbiAgICBsZXQge1xuICAgICAgdXJsLFxuICAgICAgdGFyZ2V0LFxuICAgICAgZmVhdHVyZXNcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIGlmIChwcmVvcGVuSW5zdGFuY2VJZCkge1xuICAgICAgY29uc3Qgd2luZG93U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcIndpbmRvd1wiKTtcbiAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmwgfHwgXCJcIi5jb25jYXQodGhpcy50b3J1c1VybCwgXCIvcmVkaXJlY3Q/cHJlb3Blbkluc3RhbmNlSWQ9XCIpLmNvbmNhdChwcmVvcGVuSW5zdGFuY2VJZCkpO1xuXG4gICAgICBpZiAodGhpcy5kYXBwU3RvcmFnZUtleSkge1xuICAgICAgICAvLyBJZiBtdWx0aXBsZSBpbnN0YW5jZXMsIGl0IHJldHVybnMgdGhlIGZpcnN0IG9uZVxuICAgICAgICBpZiAoZmluYWxVcmwuaGFzaCkgZmluYWxVcmwuaGFzaCArPSBcIiZkYXBwU3RvcmFnZUtleT1cIi5jb25jYXQodGhpcy5kYXBwU3RvcmFnZUtleSk7ZWxzZSBmaW5hbFVybC5oYXNoID0gXCIjZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KHRoaXMuZGFwcFN0b3JhZ2VLZXkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoYW5kbGVkV2luZG93ID0gbmV3IFBvcHVwSGFuZGxlcih7XG4gICAgICAgIHVybDogZmluYWxVcmwsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgZmVhdHVyZXNcbiAgICAgIH0pO1xuICAgICAgaGFuZGxlZFdpbmRvdy5vcGVuKCk7XG5cbiAgICAgIGlmICghaGFuZGxlZFdpbmRvdy53aW5kb3cpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlUG9wdXBCbG9ja0FsZXJ0KHByZW9wZW5JbnN0YW5jZUlkLCBmaW5hbFVybC5ocmVmKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvd1N0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwib3BlbmVkX3dpbmRvd1wiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWRcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNsb3NlSGFuZGxlciA9IF9yZWYzID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZDogcmVjZWl2ZWRJZCxcbiAgICAgICAgICBjbG9zZVxuICAgICAgICB9ID0gX3JlZjM7XG5cbiAgICAgICAgaWYgKHJlY2VpdmVkSWQgPT09IHByZW9wZW5JbnN0YW5jZUlkICYmIGNsb3NlKSB7XG4gICAgICAgICAgaGFuZGxlZFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgIHdpbmRvd1N0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgY2xvc2VIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgd2luZG93U3RyZWFtLm9uKFwiZGF0YVwiLCBjbG9zZUhhbmRsZXIpO1xuICAgICAgaGFuZGxlZFdpbmRvdy5vbmNlKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgICB3aW5kb3dTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkLFxuICAgICAgICAgICAgY2xvc2VkOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93U3RyZWFtLnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLCBjbG9zZUhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3NldEVtYmVkV2hpdGVMYWJlbChlbGVtZW50KSB7XG4gICAgLy8gU2V0IHdoaXRlbGFiZWxcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZVxuICAgIH0gPSB0aGlzLndoaXRlTGFiZWwgfHwge307XG5cbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNEYXJrID0gZmFsc2UsXG4gICAgICAgIGNvbG9ycyA9IHt9XG4gICAgICB9ID0gdGhlbWU7XG4gICAgICBpZiAoaXNEYXJrKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b3J1cy1kYXJrXCIpO1xuICAgICAgaWYgKGNvbG9ycy50b3J1c0JyYW5kMSkgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdG9ydXMtYnJhbmQtMVwiLCBjb2xvcnMudG9ydXNCcmFuZDEpO1xuICAgICAgaWYgKGNvbG9ycy50b3J1c0dyYXkyKSBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS10b3J1cy1ncmF5LTJcIiwgY29sb3JzLnRvcnVzR3JheTIpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRMb2dvVXJsKCkge1xuICAgIHZhciBfdGhpcyR3aGl0ZUxhYmVsLCBfdGhpcyR3aGl0ZUxhYmVsJHRoZW07XG5cbiAgICBsZXQgbG9nb1VybCA9IFwiXCIuY29uY2F0KHRoaXMudG9ydXNVcmwsIFwiL2ltYWdlcy90b3J1c19pY29uLWJsdWUuc3ZnXCIpO1xuXG4gICAgaWYgKChfdGhpcyR3aGl0ZUxhYmVsID0gdGhpcy53aGl0ZUxhYmVsKSAhPT0gbnVsbCAmJiBfdGhpcyR3aGl0ZUxhYmVsICE9PSB2b2lkIDAgJiYgKF90aGlzJHdoaXRlTGFiZWwkdGhlbSA9IF90aGlzJHdoaXRlTGFiZWwudGhlbWUpICE9PSBudWxsICYmIF90aGlzJHdoaXRlTGFiZWwkdGhlbSAhPT0gdm9pZCAwICYmIF90aGlzJHdoaXRlTGFiZWwkdGhlbS5pc0RhcmspIHtcbiAgICAgIHZhciBfdGhpcyR3aGl0ZUxhYmVsMjtcblxuICAgICAgbG9nb1VybCA9ICgoX3RoaXMkd2hpdGVMYWJlbDIgPSB0aGlzLndoaXRlTGFiZWwpID09PSBudWxsIHx8IF90aGlzJHdoaXRlTGFiZWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyR3aGl0ZUxhYmVsMi5sb2dvTGlnaHQpIHx8IGxvZ29Vcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfdGhpcyR3aGl0ZUxhYmVsMztcblxuICAgICAgbG9nb1VybCA9ICgoX3RoaXMkd2hpdGVMYWJlbDMgPSB0aGlzLndoaXRlTGFiZWwpID09PSBudWxsIHx8IF90aGlzJHdoaXRlTGFiZWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyR3aGl0ZUxhYmVsMy5sb2dvRGFyaykgfHwgbG9nb1VybDtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9nb1VybDtcbiAgfVxuXG4gIF9zZW5kV2lkZ2V0VmlzaWJpbGl0eVN0YXR1cyhzdGF0dXMpIHtcbiAgICBjb25zdCB0b3J1c1dpZGdldFZpc2liaWxpdHlTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwidG9ydXMtd2lkZ2V0LXZpc2liaWxpdHlcIik7XG4gICAgdG9ydXNXaWRnZXRWaXNpYmlsaXR5U3RyZWFtLndyaXRlKHtcbiAgICAgIGRhdGE6IHN0YXR1c1xuICAgIH0pO1xuICB9XG5cbiAgX2Rpc3BsYXlJZnJhbWUoKSB7XG4gICAgbGV0IGlzRnVsbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgY29uc3Qgc3R5bGUgPSB7fTsgLy8gc2V0IHBoYXNlXG5cbiAgICBpZiAoIWlzRnVsbCkge1xuICAgICAgc3R5bGUuZGlzcGxheSA9IHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBcIjcwcHhcIjtcbiAgICAgIHN0eWxlLndpZHRoID0gXCI3MHB4XCI7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5idXR0b25Qb3NpdGlvbikge1xuICAgICAgICBjYXNlIEJVVFRPTl9QT1NJVElPTi5UT1BfTEVGVDpcbiAgICAgICAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uVE9QX1JJR0hUOlxuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICBzdHlsZS5ib3R0b20gPSBcImF1dG9cIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEJVVFRPTl9QT1NJVElPTi5CT1RUT01fUklHSFQ6XG4gICAgICAgICAgc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUudG9wID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQlVUVE9OX1BPU0lUSU9OLkJPVFRPTV9MRUZUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUudG9wID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgIHN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICBzdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgICBzdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgIHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnRvcnVzSWZyYW1lLnN0eWxlLCBzdHlsZSk7XG4gICAgdGhpcy5pc0lmcmFtZUZ1bGxTY3JlZW4gPSBpc0Z1bGw7XG4gIH1cblxuICBfc2V0dXBXZWIzKCkge1xuICAgIGxvZy5pbmZvKFwic2V0dXBXZWIzIHJ1bm5pbmdcIik7IC8vIHNldHVwIGJhY2tncm91bmQgY29ubmVjdGlvblxuXG4gICAgY29uc3QgbWV0YW1hc2tTdHJlYW0gPSBuZXcgQmFzZVBvc3RNZXNzYWdlU3RyZWFtKHtcbiAgICAgIG5hbWU6IFwiZW1iZWRfbWV0YW1hc2tcIixcbiAgICAgIHRhcmdldDogXCJpZnJhbWVfbWV0YW1hc2tcIixcbiAgICAgIHRhcmdldFdpbmRvdzogdGhpcy50b3J1c0lmcmFtZS5jb250ZW50V2luZG93LFxuICAgICAgdGFyZ2V0T3JpZ2luOiBuZXcgVVJMKHRoaXMudG9ydXNVcmwpLm9yaWdpblxuICAgIH0pOyAvLyBEdWUgdG8gY29tcGF0aWJpbGl0eSByZWFzb25zLCB3ZSBzaG91bGQgbm90IHNldCB1cCBtdWx0aXBsZXhpbmcgb24gd2luZG93Lm1ldGFtYXNrc3RyZWFtXG4gICAgLy8gYmVjYXVzZSB0aGUgTWV0YW1hc2tJbnBhZ2VQcm92aWRlciBhbHNvIGF0dGVtcHRzIHRvIGRvIHNvLlxuICAgIC8vIFdlIGNyZWF0ZSBhbm90aGVyIExvY2FsTWVzc2FnZUR1cGxleFN0cmVhbSBmb3IgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIGRhcHAgPD4gaWZyYW1lXG5cbiAgICBjb25zdCBjb21tdW5pY2F0aW9uU3RyZWFtID0gbmV3IEJhc2VQb3N0TWVzc2FnZVN0cmVhbSh7XG4gICAgICBuYW1lOiBcImVtYmVkX2NvbW1cIixcbiAgICAgIHRhcmdldDogXCJpZnJhbWVfY29tbVwiLFxuICAgICAgdGFyZ2V0V2luZG93OiB0aGlzLnRvcnVzSWZyYW1lLmNvbnRlbnRXaW5kb3csXG4gICAgICB0YXJnZXRPcmlnaW46IG5ldyBVUkwodGhpcy50b3J1c1VybCkub3JpZ2luXG4gICAgfSk7IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBHb3RjaGkgOilcbiAgICAvLyB3aW5kb3cubWV0YW1hc2tTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25TdHJlYW1cbiAgICAvLyBjb21wb3NlIHRoZSBpbnBhZ2UgcHJvdmlkZXJcblxuICAgIGNvbnN0IGlucGFnZVByb3ZpZGVyID0gbmV3IFRvcnVzSW5wYWdlUHJvdmlkZXIobWV0YW1hc2tTdHJlYW0pOyAvLyBkZXRlY3QgZXRoX3JlcXVlc3RBY2NvdW50cyBhbmQgcGlwZSB0byBlbmFibGUgZm9yIG5vd1xuXG4gICAgY29uc3QgZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllciA9IG0gPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBpbnBhZ2VQcm92aWRlclttXTtcblxuICAgICAgaW5wYWdlUHJvdmlkZXJbbV0gPSBmdW5jdGlvbiBwcm92aWRlckZ1bmMobWV0aG9kKSB7XG4gICAgICAgIGlmIChtZXRob2QgJiYgbWV0aG9kID09PSBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIikge1xuICAgICAgICAgIHJldHVybiBpbnBhZ2VQcm92aWRlci5lbmFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBbbWV0aG9kLCAuLi5hcmdzXSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBkZXRlY3RBY2NvdW50UmVxdWVzdFByb3RvdHlwZU1vZGlmaWVyKFwic2VuZFwiKTtcbiAgICBkZXRlY3RBY2NvdW50UmVxdWVzdFByb3RvdHlwZU1vZGlmaWVyKFwic2VuZEFzeW5jXCIpO1xuXG4gICAgaW5wYWdlUHJvdmlkZXIuZW5hYmxlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gSWYgdXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpbiwgd2UgYXNzdW1lIHRoZXkgaGF2ZSBnaXZlbiBhY2Nlc3MgdG8gdGhlIHdlYnNpdGVcbiAgICAgICAgaW5wYWdlUHJvdmlkZXIuc2VuZEFzeW5jKHtcbiAgICAgICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgICAgIGlkOiBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpLFxuICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgcGFyYW1zOiBbXVxuICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzXG4gICAgICAgICAgfSA9IHJlc3BvbnNlIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXMpICYmIHJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB1c2VyIGlzIGFscmVhZHkgcmVoeWRyYXRlZCwgcmVzb2x2ZSB0aGlzXG4gICAgICAgICAgICAvLyBlbHNlIHdhaXQgZm9yIHNvbWV0aGluZyB0byBiZSB3cml0dGVuIHRvIHN0YXR1cyBzdHJlYW1cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVlc3RlZFZlcmlmaWVyICE9PSBcIlwiICYmIHRoaXMuY3VycmVudFZlcmlmaWVyICE9PSB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgcmVxdWVzdGVkVmVyaWZpZXJcbiAgICAgICAgICAgICAgICB9ID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tcHJvbWlzZS1pbi1jYWxsYmFja1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvdXQoKSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9hbHdheXMtcmV0dXJuXG4gICAgICAgICAgICAgICAgLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyID0gcmVxdWVzdGVkVmVyaWZpZXI7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dMb2dpblBvcHVwKHRydWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICAgIGhhbmRsZUxvZ2luQ2IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2dpbkNhbGxiYWNrID0gaGFuZGxlTG9naW5DYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2V0IHVwIGxpc3RlbmVyIGZvciBsb2dpblxuICAgICAgICAgICAgdGhpcy5fc2hvd0xvZ2luUG9wdXAodHJ1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlucGFnZVByb3ZpZGVyLnRyeVByZW9wZW5IYW5kbGUgPSAocGF5bG9hZCwgY2IpID0+IHtcbiAgICAgIGNvbnN0IF9wYXlsb2FkID0gcGF5bG9hZDtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9wYXlsb2FkKSAmJiBVTlNBRkVfTUVUSE9EUy5pbmNsdWRlcyhfcGF5bG9hZC5tZXRob2QpKSB7XG4gICAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQsIHtcbiAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX0NPTkZJUk1fV0lORE9XXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9wYXlsb2FkLnByZW9wZW5JbnN0YW5jZUlkID0gcHJlb3Blbkluc3RhbmNlSWQ7XG4gICAgICB9XG5cbiAgICAgIGlucGFnZVByb3ZpZGVyLl9ycGNFbmdpbmUuaGFuZGxlKF9wYXlsb2FkLCBjYik7XG4gICAgfTsgLy8gV29yayBhcm91bmQgZm9yIHdlYjNAMS4wIGRlbGV0aW5nIHRoZSBib3VuZCBgc2VuZEFzeW5jYCBidXQgbm90IHRoZSB1bmJvdW5kXG4gICAgLy8gYHNlbmRBc3luY2AgbWV0aG9kIG9uIHRoZSBwcm90b3R5cGUsIGNhdXNpbmcgYHRoaXNgIHJlZmVyZW5jZSBpc3N1ZXMgd2l0aCBkcml6emxlXG5cblxuICAgIGNvbnN0IHByb3hpZWRJbnBhZ2VQcm92aWRlciA9IG5ldyBQcm94eShpbnBhZ2VQcm92aWRlciwge1xuICAgICAgLy8gc3RyYWlnaHQgdXAgbGllIHRoYXQgd2UgZGVsZXRlZCB0aGUgcHJvcGVydHkgc28gdGhhdCBpdCBkb2VzbnRcbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGluIHN0cmljdCBtb2RlXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKCkgPT4gdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZXRoZXJldW0gPSBwcm94aWVkSW5wYWdlUHJvdmlkZXI7XG4gICAgY29uc3QgY29tbXVuaWNhdGlvbk11eCA9IHNldHVwTXVsdGlwbGV4KGNvbW11bmljYXRpb25TdHJlYW0pO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbk11eCA9IGNvbW11bmljYXRpb25NdXg7XG4gICAgY29uc3Qgd2luZG93U3RyZWFtID0gY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3aW5kb3dcIik7XG4gICAgd2luZG93U3RyZWFtLm9uKFwiZGF0YVwiLCBjaHVuayA9PiB7XG4gICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJjcmVhdGVfd2luZG93XCIpIHtcbiAgICAgICAgLy8gdXJsIGlzIHRoZSB1cmwgd2UgbmVlZCB0byBvcGVuXG4gICAgICAgIC8vIHdlIGNhbiBwYXNzIHRoZSBmaW5hbCB1cmwgdXBmcm9udCBzbyB0aGF0IGl0IHJlbW92ZXMgdGhlIHN0ZXAgb2YgcmVkaXJlY3RpbmcgdG8gL3JlZGlyZWN0IGFuZCB3YWl0aW5nIGZvciBmaW5hbFVybFxuICAgICAgICB0aGlzLl9jcmVhdGVQb3B1cEJsb2NrQWxlcnQoY2h1bmsuZGF0YS5wcmVvcGVuSW5zdGFuY2VJZCwgY2h1bmsuZGF0YS51cmwpO1xuICAgICAgfVxuICAgIH0pOyAvLyBzaG93IHRvcnVzIHdpZGdldCBpZiBidXR0b24gY2xpY2tlZFxuXG4gICAgY29uc3Qgd2lkZ2V0U3RyZWFtID0gY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3aWRnZXRcIik7XG4gICAgd2lkZ2V0U3RyZWFtLm9uKFwiZGF0YVwiLCBjaHVuayA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGFcbiAgICAgIH0gPSBjaHVuaztcblxuICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZShkYXRhKTtcbiAgICB9KTsgLy8gU2hvdyB0b3J1cyBidXR0b24gaWYgd2FsbGV0IGhhcyBiZWVuIGh5ZHJhdGVkL2RldGVjdGVkXG5cbiAgICBjb25zdCBzdGF0dXNTdHJlYW0gPSBjb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInN0YXR1c1wiKTtcbiAgICBzdGF0dXNTdHJlYW0ub24oXCJkYXRhXCIsIHN0YXR1cyA9PiB7XG4gICAgICAvLyBsb2dpblxuICAgICAgaWYgKHN0YXR1cy5sb2dnZWRJbikge1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBzdGF0dXMubG9nZ2VkSW47XG4gICAgICAgIHRoaXMuY3VycmVudFZlcmlmaWVyID0gc3RhdHVzLnZlcmlmaWVyO1xuICAgICAgfSAvLyBsb2dvdXRcbiAgICAgIGVsc2UgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuXG4gICAgICBpZiAodGhpcy5pc0xvZ2luQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5pc0xvZ2luQ2FsbGJhY2soKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXNMb2dpbkNhbGxiYWNrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucHJvdmlkZXIgPSBwcm94aWVkSW5wYWdlUHJvdmlkZXI7XG4gICAgaWYgKHRoaXMucHJvdmlkZXIuc2hvdWxkU2VuZE1ldGFkYXRhKSBzZW5kU2l0ZU1ldGFkYXRhKHRoaXMucHJvdmlkZXIuX3JwY0VuZ2luZSk7XG5cbiAgICBpbnBhZ2VQcm92aWRlci5faW5pdGlhbGl6ZVN0YXRlKCk7XG5cbiAgICBsb2cuZGVidWcoXCJUb3J1cyAtIGluamVjdGVkIHByb3ZpZGVyXCIpO1xuICB9XG5cbiAgX3Nob3dMb2dpblBvcHVwKGNhbGxlZEZyb21FbWJlZCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgY29uc3QgbG9naW5IYW5kbGVyID0gZGF0YSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVycixcbiAgICAgICAgc2VsZWN0ZWRBZGRyZXNzXG4gICAgICB9ID0gZGF0YTtcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBsb2cuZXJyb3IoZXJyKTtcbiAgICAgICAgaWYgKHJlamVjdCkgcmVqZWN0KGVycik7XG4gICAgICB9IC8vIHJldHVybnMgYW4gYXJyYXkgKGNhdXNlIGFjY291bnRzIGV4cGVjdHMgaXQpXG4gICAgICBlbHNlIGlmIChyZXNvbHZlKSByZXNvbHZlKFtzZWxlY3RlZEFkZHJlc3NdKTtcblxuICAgICAgaWYgKHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuKSB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9hdXRoU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcIm9hdXRoXCIpO1xuXG4gICAgaWYgKCF0aGlzLnJlcXVlc3RlZFZlcmlmaWVyKSB7XG4gICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKHRydWUpO1xuXG4gICAgICBoYW5kbGVTdHJlYW0ob2F1dGhTdHJlYW0sIFwiZGF0YVwiLCBsb2dpbkhhbmRsZXIpO1xuICAgICAgb2F1dGhTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcIm9hdXRoX21vZGFsXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYWxsZWRGcm9tRW1iZWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZVN0cmVhbShvYXV0aFN0cmVhbSwgXCJkYXRhXCIsIGxvZ2luSGFuZGxlcik7XG4gICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCk7XG5cbiAgICAgIG9hdXRoU3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJvYXV0aFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2FsbGVkRnJvbUVtYmVkLFxuICAgICAgICAgIHZlcmlmaWVyOiB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyLFxuICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkLFxuICAgICAgICAgIGxvZ2luX2hpbnQ6IHRoaXMubG9naW5IaW50XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVQb3B1cEJsb2NrQWxlcnQocHJlb3Blbkluc3RhbmNlSWQsIHVybCkge1xuICAgIGNvbnN0IGxvZ29VcmwgPSB0aGlzLl9nZXRMb2dvVXJsKCk7XG5cbiAgICBjb25zdCB0b3J1c0FsZXJ0ID0gaHRtbFRvRWxlbWVudCgnPGRpdiBpZD1cInRvcnVzQWxlcnRcIiBjbGFzcz1cInRvcnVzLWFsZXJ0LS12MlwiPicgKyBcIjxkaXYgaWQ9XFxcInRvcnVzQWxlcnRfX2xvZ29cXFwiPjxpbWcgc3JjPVxcXCJcIi5jb25jYXQobG9nb1VybCwgXCJcXFwiIC8+PC9kaXY+XCIpICsgXCI8ZGl2PlwiICsgXCI8aDEgaWQ9XFxcInRvcnVzQWxlcnRfX3RpdGxlXFxcIj5cIi5jb25jYXQodGhpcy5lbWJlZFRyYW5zbGF0aW9ucy5hY3Rpb25SZXF1aXJlZCwgXCI8L2gxPlwiKSArIFwiPHAgaWQ9XFxcInRvcnVzQWxlcnRfX2Rlc2NcXFwiPlwiLmNvbmNhdCh0aGlzLmVtYmVkVHJhbnNsYXRpb25zLnBlbmRpbmdBY3Rpb24sIFwiPC9wPlwiKSArIFwiPC9kaXY+XCIgKyBcIjwvZGl2PlwiKTtcbiAgICBjb25zdCBzdWNjZXNzQWxlcnQgPSBodG1sVG9FbGVtZW50KFwiPGRpdj48YSBpZD1cXFwidG9ydXNBbGVydF9fYnRuXFxcIj5cIi5jb25jYXQodGhpcy5lbWJlZFRyYW5zbGF0aW9ucy5jb250aW51ZSwgXCI8L2E+PC9kaXY+XCIpKTtcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBodG1sVG9FbGVtZW50KCc8ZGl2IGlkPVwidG9ydXNBbGVydF9fYnRuLWNvbnRhaW5lclwiPjwvZGl2PicpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzQWxlcnQpO1xuICAgIHRvcnVzQWxlcnQuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJpbmRPbkxvYWQgPSAoKSA9PiB7XG4gICAgICBzdWNjZXNzQWxlcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkLCB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfQ09ORklSTV9XSU5ET1dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9ydXNBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgaWYgKHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPT09IDApIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fc2V0RW1iZWRXaGl0ZUxhYmVsKHRvcnVzQWxlcnQpO1xuXG4gICAgY29uc3QgYXR0YWNoT25Mb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9ydXNBbGVydCk7XG4gICAgfTtcblxuICAgIHJ1bk9uTG9hZChhdHRhY2hPbkxvYWQpO1xuICAgIHJ1bk9uTG9hZChiaW5kT25Mb2FkKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEJVVFRPTl9QT1NJVElPTiwgTE9HSU5fUFJPVklERVIsIFBBWU1FTlRfUFJPVklERVIsIFRPUlVTX0JVSUxEX0VOViwgVG9ydXNJbnBhZ2VQcm92aWRlciwgV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVAsIFdBTExFVF9WRVJJRklFUlMsIFRvcnVzIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvcnVzLmVzbS5qcy5tYXBcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgVG9ydXMgZnJvbSBcIkB0b3J1c2xhYnMvdG9ydXMtZW1iZWRcIjtcbmV4cG9ydCB2YXIgZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBbMiwgbmV3IFRvcnVzKCldO1xuICAgIH0pO1xufSk7IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ub3J1c1Byb3ZpZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgRUMgPSByZXF1aXJlKFwiZWxsaXB0aWNcIikuZWM7XG5cbnZhciBlYyA9IG5ldyBFQyhcInNlY3AyNTZrMVwiKTtcbnZhciBicm93c2VyQ3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG8gfHwge307XG52YXIgc3VidGxlID0gYnJvd3NlckNyeXB0by5zdWJ0bGUgfHwgYnJvd3NlckNyeXB0by53ZWJraXRTdWJ0bGU7XG5cbnZhciBub2RlQ3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbmNvbnN0IEVDX0dST1VQX09SREVSID0gQnVmZmVyLmZyb20oJ2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlYmFhZWRjZTZhZjQ4YTAzYmJmZDI1ZThjZDAzNjQxNDEnLCAnaGV4Jyk7XG5jb25zdCBaRVJPMzIgPSBCdWZmZXIuYWxsb2MoMzIsIDApO1xuXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgXCJBc3NlcnRpb24gZmFpbGVkXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU2NhbGFyICh4KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoeCkgJiYgeC5sZW5ndGggPT09IDMyO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSB7XG4gIGlmICghaXNTY2FsYXIocHJpdmF0ZUtleSkpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHByaXZhdGVLZXkuY29tcGFyZShaRVJPMzIpID4gMCAmJiAvLyA+IDBcbiAgcHJpdmF0ZUtleS5jb21wYXJlKEVDX0dST1VQX09SREVSKSA8IDA7IC8vIDwgR1xufVxuXG4vLyBDb21wYXJlIHR3byBidWZmZXJzIGluIGNvbnN0YW50IHRpbWUgdG8gcHJldmVudCB0aW1pbmcgYXR0YWNrcy5cbmZ1bmN0aW9uIGVxdWFsQ29uc3RUaW1lKGIxLCBiMikge1xuICBpZiAoYjEubGVuZ3RoICE9PSBiMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHJlcyA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYjEubGVuZ3RoOyBpKyspIHtcbiAgICByZXMgfD0gYjFbaV0gXiBiMltpXTsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICB9XG4gIHJldHVybiByZXMgPT09IDA7XG59XG5cbi8qIFRoaXMgbXVzdCBjaGVjayBpZiB3ZSdyZSBpbiB0aGUgYnJvd3NlciBvclxubm90LCBzaW5jZSB0aGUgZnVuY3Rpb25zIGFyZSBkaWZmZXJlbnQgYW5kIGRvZXNcbm5vdCBjb252ZXJ0IHVzaW5nIGJyb3dzZXJpZnkgKi9cbmZ1bmN0aW9uIHJhbmRvbUJ5dGVzKHNpemUpIHtcbiAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICBpZiAodHlwZW9mIGJyb3dzZXJDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShub2RlQ3J5cHRvLnJhbmRvbUJ5dGVzKHNpemUpKTtcbiAgfSBlbHNlIHtcbiAgICBicm93c2VyQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnIpO1xuICB9XG4gIHJldHVybiBCdWZmZXIuZnJvbShhcnIpO1xufVxuXG5mdW5jdGlvbiBzaGE1MTIobXNnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGhhc2ggPSBub2RlQ3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTUxMicpO1xuICAgIHZhciByZXN1bHQgPSBoYXNoLnVwZGF0ZShtc2cpLmRpZ2VzdCgpO1xuICAgIHJlc29sdmUobmV3IFVpbnQ4QXJyYXkocmVzdWx0KSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBZXMob3ApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl2LCBrZXksIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgaWYgKHN1YnRsZSkge1xuICAgICAgICB2YXIgaW1wb3J0QWxnb3JpdGhtID0ge25hbWU6IFwiQUVTLUNCQ1wifTtcbiAgICAgICAgdmFyIGtleXAgPSBzdWJ0bGUuaW1wb3J0S2V5KFwicmF3XCIsIGtleSwgaW1wb3J0QWxnb3JpdGhtLCBmYWxzZSwgW29wXSk7XG4gICAgICAgIHJldHVybiBrZXlwLnRoZW4oZnVuY3Rpb24oY3J5cHRvS2V5KSB7XG4gICAgICAgICAgdmFyIGVuY0FsZ29yaXRobSA9IHtuYW1lOiBcIkFFUy1DQkNcIiwgaXY6IGl2fTtcbiAgICAgICAgICByZXR1cm4gc3VidGxlW29wXShlbmNBbGdvcml0aG0sIGNyeXB0b0tleSwgZGF0YSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmVzb2x2ZShCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShyZXN1bHQpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wID09PSAnZW5jcnlwdCcpIHtcbiAgICAgICAgICB2YXIgY2lwaGVyID0gbm9kZUNyeXB0by5jcmVhdGVDaXBoZXJpdignYWVzLTI1Ni1jYmMnLCBrZXksIGl2KTtcbiAgICAgICAgICBsZXQgZmlyc3RDaHVuayA9IGNpcGhlci51cGRhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHNlY29uZENodW5rID0gY2lwaGVyLmZpbmFsKCk7XG4gICAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KFtmaXJzdENodW5rLCBzZWNvbmRDaHVua10pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcCA9PT0gJ2RlY3J5cHQnKSB7XG4gICAgICAgICAgdmFyIGRlY2lwaGVyID0gbm9kZUNyeXB0by5jcmVhdGVEZWNpcGhlcml2KCdhZXMtMjU2LWNiYycsIGtleSwgaXYpO1xuICAgICAgICAgIGxldCBmaXJzdENodW5rID0gZGVjaXBoZXIudXBkYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCBzZWNvbmRDaHVuayA9IGRlY2lwaGVyLmZpbmFsKCk7XG4gICAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KFtmaXJzdENodW5rLCBzZWNvbmRDaHVua10pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG52YXIgYWVzQ2JjRW5jcnlwdCA9IGdldEFlcyhcImVuY3J5cHRcIik7XG52YXIgYWVzQ2JjRGVjcnlwdCA9IGdldEFlcyhcImRlY3J5cHRcIik7XG5cbmZ1bmN0aW9uIGhtYWNTaGEyNTZTaWduKGtleSwgbXNnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGhtYWMgPSBub2RlQ3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTI1NicsIEJ1ZmZlci5mcm9tKGtleSkpO1xuICAgIGhtYWMudXBkYXRlKG1zZyk7XG4gICAgdmFyIHJlc3VsdCA9IGhtYWMuZGlnZXN0KCk7XG4gICAgcmVzb2x2ZShyZXN1bHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaG1hY1NoYTI1NlZlcmlmeShrZXksIG1zZywgc2lnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGhtYWMgPSBub2RlQ3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTI1NicsIEJ1ZmZlci5mcm9tKGtleSkpO1xuICAgIGhtYWMudXBkYXRlKG1zZyk7XG4gICAgdmFyIGV4cGVjdGVkU2lnID0gaG1hYy5kaWdlc3QoKTtcbiAgICByZXNvbHZlKGVxdWFsQ29uc3RUaW1lKGV4cGVjdGVkU2lnLCBzaWcpKTtcbiAgfSk7XG59XG5cbi8qKlxuICAqIEdlbmVyYXRlIGEgbmV3IHZhbGlkIHByaXZhdGUga2V5LiBXaWxsIHVzZSB0aGUgd2luZG93LmNyeXB0byBvciB3aW5kb3cubXNDcnlwdG8gYXMgc291cmNlXG4gICogZGVwZW5kaW5nIG9uIHlvdXIgYnJvd3Nlci5cbiAgKiBAcmV0dXJuIHtCdWZmZXJ9IEEgMzItYnl0ZSBwcml2YXRlIGtleS5cbiAgKiBAZnVuY3Rpb25cbiAgKi9cbmV4cG9ydHMuZ2VuZXJhdGVQcml2YXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJpdmF0ZUtleSA9IHJhbmRvbUJ5dGVzKDMyKTtcbiAgd2hpbGUgKCFpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSkge1xuICAgIHByaXZhdGVLZXkgPSByYW5kb21CeXRlcygzMik7XG4gIH1cbiAgcmV0dXJuIHByaXZhdGVLZXk7XG59O1xuXG52YXIgZ2V0UHVibGljID0gZXhwb3J0cy5nZXRQdWJsaWMgPSBmdW5jdGlvbihwcml2YXRlS2V5KSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gaGFzIHN5bmMgQVBJIHNvIHdlIHRocm93IGFuIGVycm9yIGltbWVkaWF0ZWx5LlxuICBhc3NlcnQocHJpdmF0ZUtleS5sZW5ndGggPT09IDMyLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXkpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgLy8gWFhYKEthZ2FtaSk6IGBlbGxpcHRpYy51dGlscy5lbmNvZGVgIHJldHVybnMgYXJyYXkgZm9yIGV2ZXJ5XG4gIC8vIGVuY29kaW5nIGV4Y2VwdCBgaGV4YC5cbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkpLmdldFB1YmxpYyhcImFyclwiKSk7XG59O1xuXG4vKipcbiAqIEdldCBjb21wcmVzc2VkIHZlcnNpb24gb2YgcHVibGljIGtleS5cbiAqL1xudmFyIGdldFB1YmxpY0NvbXByZXNzZWQgPSBleHBvcnRzLmdldFB1YmxpY0NvbXByZXNzZWQgPSBmdW5jdGlvbihwcml2YXRlS2V5KSB7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICBhc3NlcnQocHJpdmF0ZUtleS5sZW5ndGggPT09IDMyLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXkpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93YW5kZXJlci9zZWNwMjU2azEtbm9kZS9pc3N1ZXMvNDZcbiAgbGV0IGNvbXByZXNzZWQgPSB0cnVlO1xuICByZXR1cm4gQnVmZmVyLmZyb20oZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleSkuZ2V0UHVibGljKGNvbXByZXNzZWQsIFwiYXJyXCIpKTtcbn07XG5cbi8vIE5PVEUoS2FnYW1pKTogV2UgZG9uJ3QgdXNlIHByb21pc2Ugc2hpbSBpbiBCcm93c2VyIGltcGxlbWVudGF0aW9uXG4vLyBiZWNhdXNlIGl0J3Mgc3VwcG9ydGVkIG5hdGl2ZWx5IGluIG5ldyBicm93c2VycyAoc2VlXG4vLyA8aHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PXByb21pc2VzPikgYW5kIHdlIGNhbiB1c2Ugb25seSBuZXcgYnJvd3NlcnNcbi8vIGJlY2F1c2Ugb2YgdGhlIFdlYkNyeXB0b0FQSSAoc2VlXG4vLyA8aHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWNyeXB0b2dyYXBoeT4pLlxuZXhwb3J0cy5zaWduID0gZnVuY3Rpb24ocHJpdmF0ZUtleSwgbXNnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXkpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQobXNnLmxlbmd0aCA+IDAsIFwiTWVzc2FnZSBzaG91bGQgbm90IGJlIGVtcHR5XCIpO1xuICAgIGFzc2VydChtc2cubGVuZ3RoIDw9IDMyLCBcIk1lc3NhZ2UgaXMgdG9vIGxvbmdcIik7XG4gICAgcmVzb2x2ZShCdWZmZXIuZnJvbShlYy5zaWduKG1zZywgcHJpdmF0ZUtleSwge2Nhbm9uaWNhbDogdHJ1ZX0pLnRvREVSKCkpKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLnZlcmlmeSA9IGZ1bmN0aW9uKHB1YmxpY0tleSwgbXNnLCBzaWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGFzc2VydChwdWJsaWNLZXkubGVuZ3RoID09PSA2NSB8fCBwdWJsaWNLZXkubGVuZ3RoID09PSAzMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICBpZiAocHVibGljS2V5Lmxlbmd0aCA9PT0gNjUpXG4gICAge1xuICAgICAgYXNzZXJ0KHB1YmxpY0tleVswXSA9PT0gNCwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgaWYgKHB1YmxpY0tleS5sZW5ndGggPT09IDMzKVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlbMF0gPT09IDIgfHwgcHVibGljS2V5WzBdID09PSAzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICBhc3NlcnQobXNnLmxlbmd0aCA+IDAsIFwiTWVzc2FnZSBzaG91bGQgbm90IGJlIGVtcHR5XCIpO1xuICAgIGFzc2VydChtc2cubGVuZ3RoIDw9IDMyLCBcIk1lc3NhZ2UgaXMgdG9vIGxvbmdcIik7XG4gICAgaWYgKGVjLnZlcmlmeShtc2csIHNpZywgcHVibGljS2V5KSkge1xuICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkJhZCBzaWduYXR1cmVcIikpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgZGVyaXZlID0gZXhwb3J0cy5kZXJpdmUgPSBmdW5jdGlvbihwcml2YXRlS2V5QSwgcHVibGljS2V5Qikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIGFzc2VydChCdWZmZXIuaXNCdWZmZXIocHJpdmF0ZUtleUEpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKHB1YmxpY0tleUIpLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIGFzc2VydChwcml2YXRlS2V5QS5sZW5ndGggPT09IDMyLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQoaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleUEpLCBcIkJhZCBwcml2YXRlIGtleVwiKTtcbiAgICBhc3NlcnQocHVibGljS2V5Qi5sZW5ndGggPT09IDY1IHx8IHB1YmxpY0tleUIubGVuZ3RoID09PSAzMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICBpZiAocHVibGljS2V5Qi5sZW5ndGggPT09IDY1KVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlCWzBdID09PSA0LCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICBpZiAocHVibGljS2V5Qi5sZW5ndGggPT09IDMzKVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlCWzBdID09PSAyIHx8IHB1YmxpY0tleUJbMF0gPT09IDMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIHZhciBrZXlBID0gZWMua2V5RnJvbVByaXZhdGUocHJpdmF0ZUtleUEpO1xuICAgIHZhciBrZXlCID0gZWMua2V5RnJvbVB1YmxpYyhwdWJsaWNLZXlCKTtcbiAgICB2YXIgUHggPSBrZXlBLmRlcml2ZShrZXlCLmdldFB1YmxpYygpKTsgIC8vIEJOIGluc3RhbmNlXG4gICAgcmVzb2x2ZShCdWZmZXIuZnJvbShQeC50b0FycmF5KCkpKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmVuY3J5cHQgPSBmdW5jdGlvbihwdWJsaWNLZXlUbywgbXNnLCBvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAvLyBUbXAgdmFyaWFibGVzIHRvIHNhdmUgY29udGV4dCBmcm9tIGZsYXQgcHJvbWlzZXM7XG4gIHZhciBpdiwgZXBoZW1QdWJsaWNLZXksIGNpcGhlcnRleHQsIG1hY0tleTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICB2YXIgZXBoZW1Qcml2YXRlS2V5ID0gb3B0cy5lcGhlbVByaXZhdGVLZXkgfHwgcmFuZG9tQnl0ZXMoMzIpO1xuICAgIC8vIFRoZXJlIGlzIGEgdmVyeSB1bmxpa2VseSBwb3NzaWJpbGl0eSB0aGF0IGl0IGlzIG5vdCBhIHZhbGlkIGtleVxuICAgIHdoaWxlKCFpc1ZhbGlkUHJpdmF0ZUtleShlcGhlbVByaXZhdGVLZXkpKVxuICAgIHtcbiAgICAgIGVwaGVtUHJpdmF0ZUtleSA9IG9wdHMuZXBoZW1Qcml2YXRlS2V5IHx8IHJhbmRvbUJ5dGVzKDMyKTtcbiAgICB9XG4gICAgZXBoZW1QdWJsaWNLZXkgPSBnZXRQdWJsaWMoZXBoZW1Qcml2YXRlS2V5KTtcbiAgICByZXNvbHZlKGRlcml2ZShlcGhlbVByaXZhdGVLZXksIHB1YmxpY0tleVRvKSk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oUHgpIHtcbiAgICByZXR1cm4gc2hhNTEyKFB4KTtcbiAgfSkudGhlbihmdW5jdGlvbihoYXNoKSB7XG4gICAgaXYgPSBvcHRzLml2IHx8IHJhbmRvbUJ5dGVzKDE2KTtcbiAgICB2YXIgZW5jcnlwdGlvbktleSA9IGhhc2guc2xpY2UoMCwgMzIpO1xuICAgIG1hY0tleSA9IGhhc2guc2xpY2UoMzIpO1xuICAgIHJldHVybiBhZXNDYmNFbmNyeXB0KGl2LCBlbmNyeXB0aW9uS2V5LCBtc2cpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBjaXBoZXJ0ZXh0ID0gZGF0YTtcbiAgICB2YXIgZGF0YVRvTWFjID0gQnVmZmVyLmNvbmNhdChbaXYsIGVwaGVtUHVibGljS2V5LCBjaXBoZXJ0ZXh0XSk7XG4gICAgcmV0dXJuIGhtYWNTaGEyNTZTaWduKG1hY0tleSwgZGF0YVRvTWFjKTtcbiAgfSkudGhlbihmdW5jdGlvbihtYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXY6IGl2LFxuICAgICAgZXBoZW1QdWJsaWNLZXk6IGVwaGVtUHVibGljS2V5LFxuICAgICAgY2lwaGVydGV4dDogY2lwaGVydGV4dCxcbiAgICAgIG1hYzogbWFjLFxuICAgIH07XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWNyeXB0ID0gZnVuY3Rpb24ocHJpdmF0ZUtleSwgb3B0cykge1xuICAvLyBUbXAgdmFyaWFibGUgdG8gc2F2ZSBjb250ZXh0IGZyb20gZmxhdCBwcm9taXNlcztcbiAgdmFyIGVuY3J5cHRpb25LZXk7XG4gIHJldHVybiBkZXJpdmUocHJpdmF0ZUtleSwgb3B0cy5lcGhlbVB1YmxpY0tleSkudGhlbihmdW5jdGlvbihQeCkge1xuICAgIHJldHVybiBzaGE1MTIoUHgpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGhhc2gpIHtcbiAgICBlbmNyeXB0aW9uS2V5ID0gaGFzaC5zbGljZSgwLCAzMik7XG4gICAgdmFyIG1hY0tleSA9IGhhc2guc2xpY2UoMzIpO1xuICAgIHZhciBkYXRhVG9NYWMgPSBCdWZmZXIuY29uY2F0KFtcbiAgICAgIG9wdHMuaXYsXG4gICAgICBvcHRzLmVwaGVtUHVibGljS2V5LFxuICAgICAgb3B0cy5jaXBoZXJ0ZXh0XG4gICAgXSk7XG4gICAgcmV0dXJuIGhtYWNTaGEyNTZWZXJpZnkobWFjS2V5LCBkYXRhVG9NYWMsIG9wdHMubWFjKTtcbiAgfSkudGhlbihmdW5jdGlvbihtYWNHb29kKSB7XG4gICAgYXNzZXJ0KG1hY0dvb2QsIFwiQmFkIE1BQ1wiKTtcbiAgICByZXR1cm4gYWVzQ2JjRGVjcnlwdChvcHRzLml2LCBlbmNyeXB0aW9uS2V5LCBvcHRzLmNpcGhlcnRleHQpO1xuICB9KS50aGVuKGZ1bmN0aW9uKG1zZykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShtc2cpKTtcbiAgfSk7XG59O1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwYWRfc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9wYWQtc3RyaW5nXCIpO1xuZnVuY3Rpb24gZW5jb2RlKGlucHV0LCBlbmNvZGluZykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gdm9pZCAwKSB7IGVuY29kaW5nID0gXCJ1dGY4XCI7IH1cbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gZnJvbUJhc2U2NChpbnB1dC50b1N0cmluZyhcImJhc2U2NFwiKSk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tQmFzZTY0KEJ1ZmZlci5mcm9tKGlucHV0LCBlbmNvZGluZykudG9TdHJpbmcoXCJiYXNlNjRcIikpO1xufVxuO1xuZnVuY3Rpb24gZGVjb2RlKGJhc2U2NHVybCwgZW5jb2RpbmcpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09IHZvaWQgMCkgeyBlbmNvZGluZyA9IFwidXRmOFwiOyB9XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRvQmFzZTY0KGJhc2U2NHVybCksIFwiYmFzZTY0XCIpLnRvU3RyaW5nKGVuY29kaW5nKTtcbn1cbmZ1bmN0aW9uIHRvQmFzZTY0KGJhc2U2NHVybCkge1xuICAgIGJhc2U2NHVybCA9IGJhc2U2NHVybC50b1N0cmluZygpO1xuICAgIHJldHVybiBwYWRfc3RyaW5nXzEuZGVmYXVsdChiYXNlNjR1cmwpXG4gICAgICAgIC5yZXBsYWNlKC9cXC0vZywgXCIrXCIpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csIFwiL1wiKTtcbn1cbmZ1bmN0aW9uIGZyb21CYXNlNjQoYmFzZTY0KSB7XG4gICAgcmV0dXJuIGJhc2U2NFxuICAgICAgICAucmVwbGFjZSgvPS9nLCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvXFwrL2csIFwiLVwiKVxuICAgICAgICAucmVwbGFjZSgvXFwvL2csIFwiX1wiKTtcbn1cbmZ1bmN0aW9uIHRvQnVmZmVyKGJhc2U2NHVybCkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh0b0Jhc2U2NChiYXNlNjR1cmwpLCBcImJhc2U2NFwiKTtcbn1cbnZhciBiYXNlNjR1cmwgPSBlbmNvZGU7XG5iYXNlNjR1cmwuZW5jb2RlID0gZW5jb2RlO1xuYmFzZTY0dXJsLmRlY29kZSA9IGRlY29kZTtcbmJhc2U2NHVybC50b0Jhc2U2NCA9IHRvQmFzZTY0O1xuYmFzZTY0dXJsLmZyb21CYXNlNjQgPSBmcm9tQmFzZTY0O1xuYmFzZTY0dXJsLnRvQnVmZmVyID0gdG9CdWZmZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBiYXNlNjR1cmw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHBhZFN0cmluZyhpbnB1dCkge1xuICAgIHZhciBzZWdtZW50TGVuZ3RoID0gNDtcbiAgICB2YXIgc3RyaW5nTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHZhciBkaWZmID0gc3RyaW5nTGVuZ3RoICUgc2VnbWVudExlbmd0aDtcbiAgICBpZiAoIWRpZmYpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICB2YXIgcG9zaXRpb24gPSBzdHJpbmdMZW5ndGg7XG4gICAgdmFyIHBhZExlbmd0aCA9IHNlZ21lbnRMZW5ndGggLSBkaWZmO1xuICAgIHZhciBwYWRkZWRTdHJpbmdMZW5ndGggPSBzdHJpbmdMZW5ndGggKyBwYWRMZW5ndGg7XG4gICAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvYyhwYWRkZWRTdHJpbmdMZW5ndGgpO1xuICAgIGJ1ZmZlci53cml0ZShpbnB1dCk7XG4gICAgd2hpbGUgKHBhZExlbmd0aC0tKSB7XG4gICAgICAgIGJ1ZmZlci53cml0ZShcIj1cIiwgcG9zaXRpb24rKyk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHBhZFN0cmluZztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Jhc2U2NHVybCcpLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cblxuZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xuICB9XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gQnVmZmVyLmlzQnVmZmVyO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG4iLCJ2YXIgb25jZSA9IHJlcXVpcmUoJ29uY2UnKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXG52YXIgaXNSZXF1ZXN0ID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdHJldHVybiBzdHJlYW0uc2V0SGVhZGVyICYmIHR5cGVvZiBzdHJlYW0uYWJvcnQgPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgaXNDaGlsZFByb2Nlc3MgPSBmdW5jdGlvbihzdHJlYW0pIHtcblx0cmV0dXJuIHN0cmVhbS5zdGRpbyAmJiBBcnJheS5pc0FycmF5KHN0cmVhbS5zdGRpbykgJiYgc3RyZWFtLnN0ZGlvLmxlbmd0aCA9PT0gM1xufTtcblxudmFyIGVvcyA9IGZ1bmN0aW9uKHN0cmVhbSwgb3B0cywgY2FsbGJhY2spIHtcblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZW9zKHN0cmVhbSwgbnVsbCwgb3B0cyk7XG5cdGlmICghb3B0cykgb3B0cyA9IHt9O1xuXG5cdGNhbGxiYWNrID0gb25jZShjYWxsYmFjayB8fCBub29wKTtcblxuXHR2YXIgd3MgPSBzdHJlYW0uX3dyaXRhYmxlU3RhdGU7XG5cdHZhciBycyA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcblx0dmFyIHJlYWRhYmxlID0gb3B0cy5yZWFkYWJsZSB8fCAob3B0cy5yZWFkYWJsZSAhPT0gZmFsc2UgJiYgc3RyZWFtLnJlYWRhYmxlKTtcblx0dmFyIHdyaXRhYmxlID0gb3B0cy53cml0YWJsZSB8fCAob3B0cy53cml0YWJsZSAhPT0gZmFsc2UgJiYgc3RyZWFtLndyaXRhYmxlKTtcblx0dmFyIGNhbmNlbGxlZCA9IGZhbHNlO1xuXG5cdHZhciBvbmxlZ2FjeWZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghc3RyZWFtLndyaXRhYmxlKSBvbmZpbmlzaCgpO1xuXHR9O1xuXG5cdHZhciBvbmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHdyaXRhYmxlID0gZmFsc2U7XG5cdFx0aWYgKCFyZWFkYWJsZSkgY2FsbGJhY2suY2FsbChzdHJlYW0pO1xuXHR9O1xuXG5cdHZhciBvbmVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJlYWRhYmxlID0gZmFsc2U7XG5cdFx0aWYgKCF3cml0YWJsZSkgY2FsbGJhY2suY2FsbChzdHJlYW0pO1xuXHR9O1xuXG5cdHZhciBvbmV4aXQgPSBmdW5jdGlvbihleGl0Q29kZSkge1xuXHRcdGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBleGl0Q29kZSA/IG5ldyBFcnJvcignZXhpdGVkIHdpdGggZXJyb3IgY29kZTogJyArIGV4aXRDb2RlKSA6IG51bGwpO1xuXHR9O1xuXG5cdHZhciBvbmVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG5cdFx0Y2FsbGJhY2suY2FsbChzdHJlYW0sIGVycik7XG5cdH07XG5cblx0dmFyIG9uY2xvc2UgPSBmdW5jdGlvbigpIHtcblx0XHRwcm9jZXNzLm5leHRUaWNrKG9uY2xvc2VuZXh0dGljayk7XG5cdH07XG5cblx0dmFyIG9uY2xvc2VuZXh0dGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChjYW5jZWxsZWQpIHJldHVybjtcblx0XHRpZiAocmVhZGFibGUgJiYgIShycyAmJiAocnMuZW5kZWQgJiYgIXJzLmRlc3Ryb3llZCkpKSByZXR1cm4gY2FsbGJhY2suY2FsbChzdHJlYW0sIG5ldyBFcnJvcigncHJlbWF0dXJlIGNsb3NlJykpO1xuXHRcdGlmICh3cml0YWJsZSAmJiAhKHdzICYmICh3cy5lbmRlZCAmJiAhd3MuZGVzdHJveWVkKSkpIHJldHVybiBjYWxsYmFjay5jYWxsKHN0cmVhbSwgbmV3IEVycm9yKCdwcmVtYXR1cmUgY2xvc2UnKSk7XG5cdH07XG5cblx0dmFyIG9ucmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdHN0cmVhbS5yZXEub24oJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0fTtcblxuXHRpZiAoaXNSZXF1ZXN0KHN0cmVhbSkpIHtcblx0XHRzdHJlYW0ub24oJ2NvbXBsZXRlJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5vbignYWJvcnQnLCBvbmNsb3NlKTtcblx0XHRpZiAoc3RyZWFtLnJlcSkgb25yZXF1ZXN0KCk7XG5cdFx0ZWxzZSBzdHJlYW0ub24oJ3JlcXVlc3QnLCBvbnJlcXVlc3QpO1xuXHR9IGVsc2UgaWYgKHdyaXRhYmxlICYmICF3cykgeyAvLyBsZWdhY3kgc3RyZWFtc1xuXHRcdHN0cmVhbS5vbignZW5kJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5vbignY2xvc2UnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdH1cblxuXHRpZiAoaXNDaGlsZFByb2Nlc3Moc3RyZWFtKSkgc3RyZWFtLm9uKCdleGl0Jywgb25leGl0KTtcblxuXHRzdHJlYW0ub24oJ2VuZCcsIG9uZW5kKTtcblx0c3RyZWFtLm9uKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdGlmIChvcHRzLmVycm9yICE9PSBmYWxzZSkgc3RyZWFtLm9uKCdlcnJvcicsIG9uZXJyb3IpO1xuXHRzdHJlYW0ub24oJ2Nsb3NlJywgb25jbG9zZSk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGNhbmNlbGxlZCA9IHRydWU7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjb21wbGV0ZScsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Fib3J0Jywgb25jbG9zZSk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdyZXF1ZXN0Jywgb25yZXF1ZXN0KTtcblx0XHRpZiAoc3RyZWFtLnJlcSkgc3RyZWFtLnJlcS5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdleGl0Jywgb25leGl0KTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuXHR9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGRvIG5vdCBlZGl0IC5qcyBmaWxlcyBkaXJlY3RseSAtIGVkaXQgc3JjL2luZGV4LmpzdFxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZikgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0cnVlIGlmIGJvdGggTmFOLCBmYWxzZSBvdGhlcndpc2VcbiAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNTdHJlYW0gPSBzdHJlYW0gPT5cblx0c3RyZWFtICE9PSBudWxsICYmXG5cdHR5cGVvZiBzdHJlYW0gPT09ICdvYmplY3QnICYmXG5cdHR5cGVvZiBzdHJlYW0ucGlwZSA9PT0gJ2Z1bmN0aW9uJztcblxuaXNTdHJlYW0ud3JpdGFibGUgPSBzdHJlYW0gPT5cblx0aXNTdHJlYW0oc3RyZWFtKSAmJlxuXHRzdHJlYW0ud3JpdGFibGUgIT09IGZhbHNlICYmXG5cdHR5cGVvZiBzdHJlYW0uX3dyaXRlID09PSAnZnVuY3Rpb24nICYmXG5cdHR5cGVvZiBzdHJlYW0uX3dyaXRhYmxlU3RhdGUgPT09ICdvYmplY3QnO1xuXG5pc1N0cmVhbS5yZWFkYWJsZSA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbShzdHJlYW0pICYmXG5cdHN0cmVhbS5yZWFkYWJsZSAhPT0gZmFsc2UgJiZcblx0dHlwZW9mIHN0cmVhbS5fcmVhZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHR0eXBlb2Ygc3RyZWFtLl9yZWFkYWJsZVN0YXRlID09PSAnb2JqZWN0JztcblxuaXNTdHJlYW0uZHVwbGV4ID0gc3RyZWFtID0+XG5cdGlzU3RyZWFtLndyaXRhYmxlKHN0cmVhbSkgJiZcblx0aXNTdHJlYW0ucmVhZGFibGUoc3RyZWFtKTtcblxuaXNTdHJlYW0udHJhbnNmb3JtID0gc3RyZWFtID0+XG5cdGlzU3RyZWFtLmR1cGxleChzdHJlYW0pICYmXG5cdHR5cGVvZiBzdHJlYW0uX3RyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmVhbTtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9vcGVuanNmLm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQsXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlLFxuICAgIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgaWYgKGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgICAgYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgYmFzZU1lcmdlLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgICA/IGN1c3RvbWl6ZXIoc2FmZUdldChvYmplY3QsIGtleSksIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgICAgfVxuICAgICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSwga2V5c0luKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VNZXJnZWAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgbWVyZ2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXJnZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1lcmdlIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IHNhZmVHZXQob2JqZWN0LCBrZXkpLFxuICAgICAgc3JjVmFsdWUgPSBzYWZlR2V0KHNvdXJjZSwga2V5KSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuXG4gIGlmIChzdGFja2VkKSB7XG4gICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICBpZiAoaXNDb21tb24pIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KHNyY1ZhbHVlKSxcbiAgICAgICAgaXNCdWZmID0gIWlzQXJyICYmIGlzQnVmZmVyKHNyY1ZhbHVlKSxcbiAgICAgICAgaXNUeXBlZCA9ICFpc0FyciAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheShzcmNWYWx1ZSk7XG5cbiAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgIGlmIChpc0FyciB8fCBpc0J1ZmYgfHwgaXNUeXBlZCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCdWZmKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVCdWZmZXIoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNUeXBlZCkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lVHlwZWRBcnJheShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCBpc0Z1bmN0aW9uKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGluaXRDbG9uZU9iamVjdChzcmNWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgbWVyZ2VGdW5jKG5ld1ZhbHVlLCBzcmNWYWx1ZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgLCB1bmxlc3MgYGtleWAgaXMgXCJfX3Byb3RvX19cIiBvciBcImNvbnN0cnVjdG9yXCIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzYWZlR2V0KG9iamVjdCwga2V5KSB7XG4gIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIG9iamVjdFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGtleSA9PSAnX19wcm90b19fJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBtZXJnZXMgb3duIGFuZFxuICogaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgaW50byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIHByb3BlcnRpZXMgdGhhdCByZXNvbHZlIHRvIGB1bmRlZmluZWRgIGFyZVxuICogc2tpcHBlZCBpZiBhIGRlc3RpbmF0aW9uIHZhbHVlIGV4aXN0cy4gQXJyYXkgYW5kIHBsYWluIG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBhcmUgbWVyZ2VkIHJlY3Vyc2l2ZWx5LiBPdGhlciBvYmplY3RzIGFuZCB2YWx1ZSB0eXBlcyBhcmUgb3ZlcnJpZGRlbiBieVxuICogYXNzaWdubWVudC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBTdWJzZXF1ZW50XG4gKiBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC41LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHtcbiAqICAgJ2EnOiBbeyAnYic6IDIgfSwgeyAnZCc6IDQgfV1cbiAqIH07XG4gKlxuICogdmFyIG90aGVyID0ge1xuICogICAnYSc6IFt7ICdjJzogMyB9LCB7ICdlJzogNSB9XVxuICogfTtcbiAqXG4gKiBfLm1lcmdlKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4geyAnYSc6IFt7ICdiJzogMiwgJ2MnOiAzIH0sIHsgJ2QnOiA0LCAnZSc6IDUgfV0gfVxuICovXG52YXIgbWVyZ2UgPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcbiIsIi8qXG4qIGxvZ2xldmVsIC0gaHR0cHM6Ly9naXRodWIuY29tL3BpbXRlcnJ5L2xvZ2xldmVsXG4qXG4qIENvcHlyaWdodCAoYykgMjAxMyBUaW0gUGVycnlcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAocm9vdCwgZGVmaW5pdGlvbikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGRlZmluaXRpb24pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5sb2cgPSBkZWZpbml0aW9uKCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBTbGlnaHRseSBkdWJpb3VzIHRyaWNrcyB0byBjdXQgZG93biBtaW5pbWl6ZWQgZmlsZSBzaXplXG4gICAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuICAgIHZhciB1bmRlZmluZWRUeXBlID0gXCJ1bmRlZmluZWRcIjtcbiAgICB2YXIgaXNJRSA9ICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlKSAmJiAodHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgIT09IHVuZGVmaW5lZFR5cGUpICYmIChcbiAgICAgICAgL1RyaWRlbnRcXC98TVNJRSAvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgKTtcblxuICAgIHZhciBsb2dNZXRob2RzID0gW1xuICAgICAgICBcInRyYWNlXCIsXG4gICAgICAgIFwiZGVidWdcIixcbiAgICAgICAgXCJpbmZvXCIsXG4gICAgICAgIFwid2FyblwiLFxuICAgICAgICBcImVycm9yXCJcbiAgICBdO1xuXG4gICAgLy8gQ3Jvc3MtYnJvd3NlciBiaW5kIGVxdWl2YWxlbnQgdGhhdCB3b3JrcyBhdCBsZWFzdCBiYWNrIHRvIElFNlxuICAgIGZ1bmN0aW9uIGJpbmRNZXRob2Qob2JqLCBtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBvYmpbbWV0aG9kTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kLmJpbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuYmluZChvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChtZXRob2QsIG9iaik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gTWlzc2luZyBiaW5kIHNoaW0gb3IgSUU4ICsgTW9kZXJuaXpyLCBmYWxsYmFjayB0byB3cmFwcGluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5hcHBseShtZXRob2QsIFtvYmosIGFyZ3VtZW50c10pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUcmFjZSgpIGRvZXNuJ3QgcHJpbnQgdGhlIG1lc3NhZ2UgaW4gSUUsIHNvIGZvciB0aGF0IGNhc2Ugd2UgbmVlZCB0byB3cmFwIGl0XG4gICAgZnVuY3Rpb24gdHJhY2VGb3JJRSgpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUubG9nKSB7XG4gICAgICAgICAgICBpZiAoY29uc29sZS5sb2cuYXBwbHkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBvbGQgSUUsIG5hdGl2ZSBjb25zb2xlIG1ldGhvZHMgdGhlbXNlbHZlcyBkb24ndCBoYXZlIGFwcGx5KCkuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmFwcGx5KGNvbnNvbGUubG9nLCBbY29uc29sZSwgYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnNvbGUudHJhY2UpIGNvbnNvbGUudHJhY2UoKTtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCB0aGUgYmVzdCBsb2dnaW5nIG1ldGhvZCBwb3NzaWJsZSBmb3IgdGhpcyBlbnZcbiAgICAvLyBXaGVyZXZlciBwb3NzaWJsZSB3ZSB3YW50IHRvIGJpbmQsIG5vdCB3cmFwLCB0byBwcmVzZXJ2ZSBzdGFjayB0cmFjZXNcbiAgICBmdW5jdGlvbiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgICAgIG1ldGhvZE5hbWUgPSAnbG9nJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBtZXRob2QgcG9zc2libGUsIGZvciBub3cgLSBmaXhlZCBsYXRlciBieSBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ3RyYWNlJyAmJiBpc0lFKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhY2VGb3JJRTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlW21ldGhvZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kTWV0aG9kKGNvbnNvbGUsIG1ldGhvZE5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnNvbGUubG9nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kTWV0aG9kKGNvbnNvbGUsICdsb2cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlc2UgcHJpdmF0ZSBmdW5jdGlvbnMgYWx3YXlzIG5lZWQgYHRoaXNgIHRvIGJlIHNldCBwcm9wZXJseVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvZ2dpbmdNZXRob2RzKGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBsb2dNZXRob2RzW2ldO1xuICAgICAgICAgICAgdGhpc1ttZXRob2ROYW1lXSA9IChpIDwgbGV2ZWwpID9cbiAgICAgICAgICAgICAgICBub29wIDpcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZEZhY3RvcnkobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIGxvZy5sb2cgYXMgYW4gYWxpYXMgZm9yIGxvZy5kZWJ1Z1xuICAgICAgICB0aGlzLmxvZyA9IHRoaXMuZGVidWc7XG4gICAgfVxuXG4gICAgLy8gSW4gb2xkIElFIHZlcnNpb25zLCB0aGUgY29uc29sZSBpc24ndCBwcmVzZW50IHVudGlsIHlvdSBmaXJzdCBvcGVuIGl0LlxuICAgIC8vIFdlIGJ1aWxkIHJlYWxNZXRob2QoKSByZXBsYWNlbWVudHMgaGVyZSB0aGF0IHJlZ2VuZXJhdGUgbG9nZ2luZyBtZXRob2RzXG4gICAgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlcyhtZXRob2ROYW1lLCBsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSB1bmRlZmluZWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUxvZ2dpbmdNZXRob2RzLmNhbGwodGhpcywgbGV2ZWwsIGxvZ2dlck5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBCeSBkZWZhdWx0LCB3ZSB1c2UgY2xvc2VseSBib3VuZCByZWFsIG1ldGhvZHMgd2hlcmV2ZXIgcG9zc2libGUsIGFuZFxuICAgIC8vIG90aGVyd2lzZSB3ZSB3YWl0IGZvciBhIGNvbnNvbGUgdG8gYXBwZWFyLCBhbmQgdGhlbiB0cnkgYWdhaW4uXG4gICAgZnVuY3Rpb24gZGVmYXVsdE1ldGhvZEZhY3RvcnkobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgcmV0dXJuIHJlYWxNZXRob2QobWV0aG9kTmFtZSkgfHxcbiAgICAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBMb2dnZXIobmFtZSwgZGVmYXVsdExldmVsLCBmYWN0b3J5KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgY3VycmVudExldmVsO1xuICAgICAgZGVmYXVsdExldmVsID0gZGVmYXVsdExldmVsID09IG51bGwgPyBcIldBUk5cIiA6IGRlZmF1bHRMZXZlbDtcblxuICAgICAgdmFyIHN0b3JhZ2VLZXkgPSBcImxvZ2xldmVsXCI7XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgc3RvcmFnZUtleSArPSBcIjpcIiArIG5hbWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIHN0b3JhZ2VLZXkgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBlcnNpc3RMZXZlbElmUG9zc2libGUobGV2ZWxOdW0pIHtcbiAgICAgICAgICB2YXIgbGV2ZWxOYW1lID0gKGxvZ01ldGhvZHNbbGV2ZWxOdW1dIHx8ICdzaWxlbnQnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUgfHwgIXN0b3JhZ2VLZXkpIHJldHVybjtcblxuICAgICAgICAgIC8vIFVzZSBsb2NhbFN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVtzdG9yYWdlS2V5XSA9IGxldmVsTmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIFVzZSBzZXNzaW9uIGNvb2tpZSBhcyBmYWxsYmFja1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5jb29raWUgPVxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPVwiICsgbGV2ZWxOYW1lICsgXCI7XCI7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRQZXJzaXN0ZWRMZXZlbCgpIHtcbiAgICAgICAgICB2YXIgc3RvcmVkTGV2ZWw7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkVHlwZSB8fCAhc3RvcmFnZUtleSkgcmV0dXJuO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSB3aW5kb3cubG9jYWxTdG9yYWdlW3N0b3JhZ2VLZXldO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGNvb2tpZXMgaWYgbG9jYWwgc3RvcmFnZSBnaXZlcyB1cyBub3RoaW5nXG4gICAgICAgICAgaWYgKHR5cGVvZiBzdG9yZWRMZXZlbCA9PT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IHdpbmRvdy5kb2N1bWVudC5jb29raWU7XG4gICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjb29raWUuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RvcmFnZUtleSkgKyBcIj1cIik7XG4gICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSAvXihbXjtdKykvLmV4ZWMoY29va2llLnNsaWNlKGxvY2F0aW9uKSlbMV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB0aGUgc3RvcmVkIGxldmVsIGlzIG5vdCB2YWxpZCwgdHJlYXQgaXQgYXMgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuICAgICAgICAgIGlmIChzZWxmLmxldmVsc1tzdG9yZWRMZXZlbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzdG9yZWRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3RvcmVkTGV2ZWw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFyUGVyc2lzdGVkTGV2ZWwoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUgfHwgIXN0b3JhZ2VLZXkpIHJldHVybjtcblxuICAgICAgICAgIC8vIFVzZSBsb2NhbFN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VLZXkpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgICAgICAgLy8gVXNlIHNlc3Npb24gY29va2llIGFzIGZhbGxiYWNrXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmNvb2tpZSA9XG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0b3JhZ2VLZXkpICsgXCI9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDXCI7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgICpcbiAgICAgICAqIFB1YmxpYyBsb2dnZXIgQVBJIC0gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9waW10ZXJyeS9sb2dsZXZlbCBmb3IgZGV0YWlsc1xuICAgICAgICpcbiAgICAgICAqL1xuXG4gICAgICBzZWxmLm5hbWUgPSBuYW1lO1xuXG4gICAgICBzZWxmLmxldmVscyA9IHsgXCJUUkFDRVwiOiAwLCBcIkRFQlVHXCI6IDEsIFwiSU5GT1wiOiAyLCBcIldBUk5cIjogMyxcbiAgICAgICAgICBcIkVSUk9SXCI6IDQsIFwiU0lMRU5UXCI6IDV9O1xuXG4gICAgICBzZWxmLm1ldGhvZEZhY3RvcnkgPSBmYWN0b3J5IHx8IGRlZmF1bHRNZXRob2RGYWN0b3J5O1xuXG4gICAgICBzZWxmLmdldExldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50TGV2ZWw7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLnNldExldmVsID0gZnVuY3Rpb24gKGxldmVsLCBwZXJzaXN0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJzdHJpbmdcIiAmJiBzZWxmLmxldmVsc1tsZXZlbC50b1VwcGVyQ2FzZSgpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldmVsID0gc2VsZi5sZXZlbHNbbGV2ZWwudG9VcHBlckNhc2UoKV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwibnVtYmVyXCIgJiYgbGV2ZWwgPj0gMCAmJiBsZXZlbCA8PSBzZWxmLmxldmVscy5TSUxFTlQpIHtcbiAgICAgICAgICAgICAgY3VycmVudExldmVsID0gbGV2ZWw7XG4gICAgICAgICAgICAgIGlmIChwZXJzaXN0ICE9PSBmYWxzZSkgeyAgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgcGVyc2lzdExldmVsSWZQb3NzaWJsZShsZXZlbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVwbGFjZUxvZ2dpbmdNZXRob2RzLmNhbGwoc2VsZiwgbGV2ZWwsIG5hbWUpO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09IHVuZGVmaW5lZFR5cGUgJiYgbGV2ZWwgPCBzZWxmLmxldmVscy5TSUxFTlQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIGNvbnNvbGUgYXZhaWxhYmxlIGZvciBsb2dnaW5nXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBcImxvZy5zZXRMZXZlbCgpIGNhbGxlZCB3aXRoIGludmFsaWQgbGV2ZWw6IFwiICsgbGV2ZWw7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2VsZi5zZXREZWZhdWx0TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgICBkZWZhdWx0TGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICBpZiAoIWdldFBlcnNpc3RlZExldmVsKCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRMZXZlbChsZXZlbCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNlbGYucmVzZXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKGRlZmF1bHRMZXZlbCwgZmFsc2UpO1xuICAgICAgICAgIGNsZWFyUGVyc2lzdGVkTGV2ZWwoKTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuZW5hYmxlQWxsID0gZnVuY3Rpb24ocGVyc2lzdCkge1xuICAgICAgICAgIHNlbGYuc2V0TGV2ZWwoc2VsZi5sZXZlbHMuVFJBQ0UsIHBlcnNpc3QpO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5kaXNhYmxlQWxsID0gZnVuY3Rpb24ocGVyc2lzdCkge1xuICAgICAgICAgIHNlbGYuc2V0TGV2ZWwoc2VsZi5sZXZlbHMuU0lMRU5ULCBwZXJzaXN0KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEluaXRpYWxpemUgd2l0aCB0aGUgcmlnaHQgbGV2ZWxcbiAgICAgIHZhciBpbml0aWFsTGV2ZWwgPSBnZXRQZXJzaXN0ZWRMZXZlbCgpO1xuICAgICAgaWYgKGluaXRpYWxMZXZlbCA9PSBudWxsKSB7XG4gICAgICAgICAgaW5pdGlhbExldmVsID0gZGVmYXVsdExldmVsO1xuICAgICAgfVxuICAgICAgc2VsZi5zZXRMZXZlbChpbml0aWFsTGV2ZWwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqXG4gICAgICogVG9wLWxldmVsIEFQSVxuICAgICAqXG4gICAgICovXG5cbiAgICB2YXIgZGVmYXVsdExvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuICAgIHZhciBfbG9nZ2Vyc0J5TmFtZSA9IHt9O1xuICAgIGRlZmF1bHRMb2dnZXIuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gZ2V0TG9nZ2VyKG5hbWUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgbmFtZSAhPT0gXCJzeW1ib2xcIiAmJiB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikgfHwgbmFtZSA9PT0gXCJcIikge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBzdXBwbHkgYSBuYW1lIHdoZW4gY3JlYXRpbmcgYSBsb2dnZXIuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvZ2dlciA9IF9sb2dnZXJzQnlOYW1lW25hbWVdO1xuICAgICAgICBpZiAoIWxvZ2dlcikge1xuICAgICAgICAgIGxvZ2dlciA9IF9sb2dnZXJzQnlOYW1lW25hbWVdID0gbmV3IExvZ2dlcihcbiAgICAgICAgICAgIG5hbWUsIGRlZmF1bHRMb2dnZXIuZ2V0TGV2ZWwoKSwgZGVmYXVsdExvZ2dlci5tZXRob2RGYWN0b3J5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH07XG5cbiAgICAvLyBHcmFiIHRoZSBjdXJyZW50IGdsb2JhbCBsb2cgdmFyaWFibGUgaW4gY2FzZSBvZiBvdmVyd3JpdGVcbiAgICB2YXIgX2xvZyA9ICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlKSA/IHdpbmRvdy5sb2cgOiB1bmRlZmluZWQ7XG4gICAgZGVmYXVsdExvZ2dlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWRUeXBlICYmXG4gICAgICAgICAgICAgICB3aW5kb3cubG9nID09PSBkZWZhdWx0TG9nZ2VyKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9nID0gX2xvZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0TG9nZ2VyO1xuICAgIH07XG5cbiAgICBkZWZhdWx0TG9nZ2VyLmdldExvZ2dlcnMgPSBmdW5jdGlvbiBnZXRMb2dnZXJzKCkge1xuICAgICAgICByZXR1cm4gX2xvZ2dlcnNCeU5hbWU7XG4gICAgfTtcblxuICAgIC8vIEVTNiBkZWZhdWx0IGV4cG9ydCwgZm9yIGNvbXBhdGliaWxpdHlcbiAgICBkZWZhdWx0TG9nZ2VyWydkZWZhdWx0J10gPSBkZWZhdWx0TG9nZ2VyO1xuXG4gICAgcmV0dXJuIGRlZmF1bHRMb2dnZXI7XG59KSk7XG4iLCJ2YXIgd3JhcHB5ID0gcmVxdWlyZSgnd3JhcHB5Jylcbm1vZHVsZS5leHBvcnRzID0gd3JhcHB5KG9uY2UpXG5tb2R1bGUuZXhwb3J0cy5zdHJpY3QgPSB3cmFwcHkob25jZVN0cmljdClcblxub25jZS5wcm90byA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZScsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2UodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICdvbmNlU3RyaWN0Jywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb25jZVN0cmljdCh0aGlzKVxuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZi5jYWxsZWQpIHJldHVybiBmLnZhbHVlXG4gICAgZi5jYWxsZWQgPSB0cnVlXG4gICAgcmV0dXJuIGYudmFsdWUgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgZi5jYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZlxufVxuXG5mdW5jdGlvbiBvbmNlU3RyaWN0IChmbikge1xuICB2YXIgZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZi5jYWxsZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZi5vbmNlRXJyb3IpXG4gICAgZi5jYWxsZWQgPSB0cnVlXG4gICAgcmV0dXJuIGYudmFsdWUgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgdmFyIG5hbWUgPSBmbi5uYW1lIHx8ICdGdW5jdGlvbiB3cmFwcGVkIHdpdGggYG9uY2VgJ1xuICBmLm9uY2VFcnJvciA9IG5hbWUgKyBcIiBzaG91bGRuJ3QgYmUgY2FsbGVkIG1vcmUgdGhhbiBvbmNlXCJcbiAgZi5jYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZlxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXByb2Nlc3MudmVyc2lvbiB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MC4nKSA9PT0gMCB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MS4nKSA9PT0gMCAmJiBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjEuOC4nKSAhPT0gMCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgbmV4dFRpY2s6IG5leHRUaWNrIH07XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3Ncbn1cblxuZnVuY3Rpb24gbmV4dFRpY2soZm4sIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiY2FsbGJhY2tcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGFyZ3MsIGk7XG4gIHN3aXRjaCAobGVuKSB7XG4gIGNhc2UgMDpcbiAgY2FzZSAxOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZuKTtcbiAgY2FzZSAyOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja09uZSgpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSk7XG4gICAgfSk7XG4gIGNhc2UgMzpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tUd28oKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEsIGFyZzIpO1xuICAgIH0pO1xuICBjYXNlIDQ6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrVGhyZWUoKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIH0pO1xuICBkZWZhdWx0OlxuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgYXJnc1tpKytdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2soKSB7XG4gICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxufVxuXG4iLCJ2YXIgb25jZSA9IHJlcXVpcmUoJ29uY2UnKVxudmFyIGVvcyA9IHJlcXVpcmUoJ2VuZC1vZi1zdHJlYW0nKVxudmFyIGZzID0gcmVxdWlyZSgnZnMnKSAvLyB3ZSBvbmx5IG5lZWQgZnMgdG8gZ2V0IHRoZSBSZWFkU3RyZWFtIGFuZCBXcml0ZVN0cmVhbSBwcm90b3R5cGVzXG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBhbmNpZW50ID0gL152P1xcLjAvLnRlc3QocHJvY2Vzcy52ZXJzaW9uKVxuXG52YXIgaXNGbiA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nXG59XG5cbnZhciBpc0ZTID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICBpZiAoIWFuY2llbnQpIHJldHVybiBmYWxzZSAvLyBuZXdlciBub2RlIHZlcnNpb24gZG8gbm90IG5lZWQgdG8gY2FyZSBhYm91dCBmcyBpcyBhIHNwZWNpYWwgd2F5XG4gIGlmICghZnMpIHJldHVybiBmYWxzZSAvLyBicm93c2VyXG4gIHJldHVybiAoc3RyZWFtIGluc3RhbmNlb2YgKGZzLlJlYWRTdHJlYW0gfHwgbm9vcCkgfHwgc3RyZWFtIGluc3RhbmNlb2YgKGZzLldyaXRlU3RyZWFtIHx8IG5vb3ApKSAmJiBpc0ZuKHN0cmVhbS5jbG9zZSlcbn1cblxudmFyIGlzUmVxdWVzdCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgcmV0dXJuIHN0cmVhbS5zZXRIZWFkZXIgJiYgaXNGbihzdHJlYW0uYWJvcnQpXG59XG5cbnZhciBkZXN0cm95ZXIgPSBmdW5jdGlvbiAoc3RyZWFtLCByZWFkaW5nLCB3cml0aW5nLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2spXG5cbiAgdmFyIGNsb3NlZCA9IGZhbHNlXG4gIHN0cmVhbS5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VkID0gdHJ1ZVxuICB9KVxuXG4gIGVvcyhzdHJlYW0sIHtyZWFkYWJsZTogcmVhZGluZywgd3JpdGFibGU6IHdyaXRpbmd9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICBjbG9zZWQgPSB0cnVlXG4gICAgY2FsbGJhY2soKVxuICB9KVxuXG4gIHZhciBkZXN0cm95ZWQgPSBmYWxzZVxuICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChjbG9zZWQpIHJldHVyblxuICAgIGlmIChkZXN0cm95ZWQpIHJldHVyblxuICAgIGRlc3Ryb3llZCA9IHRydWVcblxuICAgIGlmIChpc0ZTKHN0cmVhbSkpIHJldHVybiBzdHJlYW0uY2xvc2Uobm9vcCkgLy8gdXNlIGNsb3NlIGZvciBmcyBzdHJlYW1zIHRvIGF2b2lkIGZkIGxlYWtzXG4gICAgaWYgKGlzUmVxdWVzdChzdHJlYW0pKSByZXR1cm4gc3RyZWFtLmFib3J0KCkgLy8gcmVxdWVzdC5kZXN0cm95IGp1c3QgZG8gLmVuZCAtIC5hYm9ydCBpcyB3aGF0IHdlIHdhbnRcblxuICAgIGlmIChpc0ZuKHN0cmVhbS5kZXN0cm95KSkgcmV0dXJuIHN0cmVhbS5kZXN0cm95KClcblxuICAgIGNhbGxiYWNrKGVyciB8fCBuZXcgRXJyb3IoJ3N0cmVhbSB3YXMgZGVzdHJveWVkJykpXG4gIH1cbn1cblxudmFyIGNhbGwgPSBmdW5jdGlvbiAoZm4pIHtcbiAgZm4oKVxufVxuXG52YXIgcGlwZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICByZXR1cm4gZnJvbS5waXBlKHRvKVxufVxuXG52YXIgcHVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0cmVhbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIHZhciBjYWxsYmFjayA9IGlzRm4oc3RyZWFtc1tzdHJlYW1zLmxlbmd0aCAtIDFdIHx8IG5vb3ApICYmIHN0cmVhbXMucG9wKCkgfHwgbm9vcFxuXG4gIGlmIChBcnJheS5pc0FycmF5KHN0cmVhbXNbMF0pKSBzdHJlYW1zID0gc3RyZWFtc1swXVxuICBpZiAoc3RyZWFtcy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoJ3B1bXAgcmVxdWlyZXMgdHdvIHN0cmVhbXMgcGVyIG1pbmltdW0nKVxuXG4gIHZhciBlcnJvclxuICB2YXIgZGVzdHJveXMgPSBzdHJlYW1zLm1hcChmdW5jdGlvbiAoc3RyZWFtLCBpKSB7XG4gICAgdmFyIHJlYWRpbmcgPSBpIDwgc3RyZWFtcy5sZW5ndGggLSAxXG4gICAgdmFyIHdyaXRpbmcgPSBpID4gMFxuICAgIHJldHVybiBkZXN0cm95ZXIoc3RyZWFtLCByZWFkaW5nLCB3cml0aW5nLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoIWVycm9yKSBlcnJvciA9IGVyclxuICAgICAgaWYgKGVycikgZGVzdHJveXMuZm9yRWFjaChjYWxsKVxuICAgICAgaWYgKHJlYWRpbmcpIHJldHVyblxuICAgICAgZGVzdHJveXMuZm9yRWFjaChjYWxsKVxuICAgICAgY2FsbGJhY2soZXJyb3IpXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gc3RyZWFtcy5yZWR1Y2UocGlwZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwdW1wXG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBhIGR1cGxleCBzdHJlYW0gaXMganVzdCBhIHN0cmVhbSB0aGF0IGlzIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLlxuLy8gU2luY2UgSlMgZG9lc24ndCBoYXZlIG11bHRpcGxlIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UsIHRoaXMgY2xhc3Ncbi8vIHByb3RvdHlwYWxseSBpbmhlcml0cyBmcm9tIFJlYWRhYmxlLCBhbmQgdGhlbiBwYXJhc2l0aWNhbGx5IGZyb21cbi8vIFdyaXRhYmxlLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBwbmEgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGtleXMucHVzaChrZXkpO1xuICB9cmV0dXJuIGtleXM7XG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbm1vZHVsZS5leHBvcnRzID0gRHVwbGV4O1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBSZWFkYWJsZSA9IHJlcXVpcmUoJy4vX3N0cmVhbV9yZWFkYWJsZScpO1xudmFyIFdyaXRhYmxlID0gcmVxdWlyZSgnLi9fc3RyZWFtX3dyaXRhYmxlJyk7XG5cbnV0aWwuaW5oZXJpdHMoRHVwbGV4LCBSZWFkYWJsZSk7XG5cbntcbiAgLy8gYXZvaWQgc2NvcGUgY3JlZXAsIHRoZSBrZXlzIGFycmF5IGNhbiB0aGVuIGJlIGNvbGxlY3RlZFxuICB2YXIga2V5cyA9IG9iamVjdEtleXMoV3JpdGFibGUucHJvdG90eXBlKTtcbiAgZm9yICh2YXIgdiA9IDA7IHYgPCBrZXlzLmxlbmd0aDsgdisrKSB7XG4gICAgdmFyIG1ldGhvZCA9IGtleXNbdl07XG4gICAgaWYgKCFEdXBsZXgucHJvdG90eXBlW21ldGhvZF0pIER1cGxleC5wcm90b3R5cGVbbWV0aG9kXSA9IFdyaXRhYmxlLnByb3RvdHlwZVttZXRob2RdO1xuICB9XG59XG5cbmZ1bmN0aW9uIER1cGxleChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSByZXR1cm4gbmV3IER1cGxleChvcHRpb25zKTtcblxuICBSZWFkYWJsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICBXcml0YWJsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVhZGFibGUgPT09IGZhbHNlKSB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy53cml0YWJsZSA9PT0gZmFsc2UpIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICB0aGlzLmFsbG93SGFsZk9wZW4gPSB0cnVlO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFsbG93SGFsZk9wZW4gPT09IGZhbHNlKSB0aGlzLmFsbG93SGFsZk9wZW4gPSBmYWxzZTtcblxuICB0aGlzLm9uY2UoJ2VuZCcsIG9uZW5kKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KER1cGxleC5wcm90b3R5cGUsICd3cml0YWJsZUhpZ2hXYXRlck1hcmsnLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl93cml0YWJsZVN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIH1cbn0pO1xuXG4vLyB0aGUgbm8taGFsZi1vcGVuIGVuZm9yY2VyXG5mdW5jdGlvbiBvbmVuZCgpIHtcbiAgLy8gaWYgd2UgYWxsb3cgaGFsZi1vcGVuIHN0YXRlLCBvciBpZiB0aGUgd3JpdGFibGUgc2lkZSBlbmRlZCxcbiAgLy8gdGhlbiB3ZSdyZSBvay5cbiAgaWYgKHRoaXMuYWxsb3dIYWxmT3BlbiB8fCB0aGlzLl93cml0YWJsZVN0YXRlLmVuZGVkKSByZXR1cm47XG5cbiAgLy8gbm8gbW9yZSBkYXRhIGNhbiBiZSB3cml0dGVuLlxuICAvLyBCdXQgYWxsb3cgbW9yZSB3cml0ZXMgdG8gaGFwcGVuIGluIHRoaXMgdGljay5cbiAgcG5hLm5leHRUaWNrKG9uRW5kTlQsIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBvbkVuZE5UKHNlbGYpIHtcbiAgc2VsZi5lbmQoKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KER1cGxleC5wcm90b3R5cGUsICdkZXN0cm95ZWQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5fd3JpdGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCAmJiB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyB3ZSBpZ25vcmUgdGhlIHZhbHVlIGlmIHRoZSBzdHJlYW1cbiAgICAvLyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl93cml0YWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0aGUgdXNlciBpcyBleHBsaWNpdGx5XG4gICAgLy8gbWFuYWdpbmcgZGVzdHJveWVkXG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHZhbHVlO1xuICB9XG59KTtcblxuRHVwbGV4LnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIHRoaXMucHVzaChudWxsKTtcbiAgdGhpcy5lbmQoKTtcblxuICBwbmEubmV4dFRpY2soY2IsIGVycik7XG59OyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBhIHBhc3N0aHJvdWdoIHN0cmVhbS5cbi8vIGJhc2ljYWxseSBqdXN0IHRoZSBtb3N0IG1pbmltYWwgc29ydCBvZiBUcmFuc2Zvcm0gc3RyZWFtLlxuLy8gRXZlcnkgd3JpdHRlbiBjaHVuayBnZXRzIG91dHB1dCBhcy1pcy5cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhc3NUaHJvdWdoO1xuXG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9fc3RyZWFtX3RyYW5zZm9ybScpO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnV0aWwuaW5oZXJpdHMoUGFzc1Rocm91Z2gsIFRyYW5zZm9ybSk7XG5cbmZ1bmN0aW9uIFBhc3NUaHJvdWdoKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFBhc3NUaHJvdWdoKSkgcmV0dXJuIG5ldyBQYXNzVGhyb3VnaChvcHRpb25zKTtcblxuICBUcmFuc2Zvcm0uY2FsbCh0aGlzLCBvcHRpb25zKTtcbn1cblxuUGFzc1Rocm91Z2gucHJvdG90eXBlLl90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBjYihudWxsLCBjaHVuayk7XG59OyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBwbmEgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhZGFibGU7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5SZWFkYWJsZS5SZWFkYWJsZVN0YXRlID0gUmVhZGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBFRSA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxudmFyIEVFbGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIChlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVycyh0eXBlKS5sZW5ndGg7XG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL3N0cmVhbScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciBPdXJVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXkgfHwgZnVuY3Rpb24gKCkge307XG5mdW5jdGlvbiBfdWludDhBcnJheVRvQnVmZmVyKGNodW5rKSB7XG4gIHJldHVybiBCdWZmZXIuZnJvbShjaHVuayk7XG59XG5mdW5jdGlvbiBfaXNVaW50OEFycmF5KG9iaikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgb2JqIGluc3RhbmNlb2YgT3VyVWludDhBcnJheTtcbn1cblxuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IE9iamVjdC5jcmVhdGUocmVxdWlyZSgnY29yZS11dGlsLWlzJykpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBkZWJ1Z1V0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgZGVidWcgPSB2b2lkIDA7XG5pZiAoZGVidWdVdGlsICYmIGRlYnVnVXRpbC5kZWJ1Z2xvZykge1xuICBkZWJ1ZyA9IGRlYnVnVXRpbC5kZWJ1Z2xvZygnc3RyZWFtJyk7XG59IGVsc2Uge1xuICBkZWJ1ZyA9IGZ1bmN0aW9uICgpIHt9O1xufVxuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXJMaXN0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL0J1ZmZlckxpc3QnKTtcbnZhciBkZXN0cm95SW1wbCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9kZXN0cm95Jyk7XG52YXIgU3RyaW5nRGVjb2RlcjtcblxudXRpbC5pbmhlcml0cyhSZWFkYWJsZSwgU3RyZWFtKTtcblxudmFyIGtQcm94eUV2ZW50cyA9IFsnZXJyb3InLCAnY2xvc2UnLCAnZGVzdHJveScsICdwYXVzZScsICdyZXN1bWUnXTtcblxuZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbikge1xuICAvLyBTYWRseSB0aGlzIGlzIG5vdCBjYWNoZWFibGUgYXMgc29tZSBsaWJyYXJpZXMgYnVuZGxlIHRoZWlyIG93blxuICAvLyBldmVudCBlbWl0dGVyIGltcGxlbWVudGF0aW9uIHdpdGggdGhlbS5cbiAgaWYgKHR5cGVvZiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGVtaXR0ZXIucHJlcGVuZExpc3RlbmVyKGV2ZW50LCBmbik7XG5cbiAgLy8gVGhpcyBpcyBhIGhhY2sgdG8gbWFrZSBzdXJlIHRoYXQgb3VyIGVycm9yIGhhbmRsZXIgaXMgYXR0YWNoZWQgYmVmb3JlIGFueVxuICAvLyB1c2VybGFuZCBvbmVzLiAgTkVWRVIgRE8gVEhJUy4gVGhpcyBpcyBoZXJlIG9ubHkgYmVjYXVzZSB0aGlzIGNvZGUgbmVlZHNcbiAgLy8gdG8gY29udGludWUgdG8gd29yayB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIE5vZGUuanMgdGhhdCBkbyBub3QgaW5jbHVkZVxuICAvLyB0aGUgcHJlcGVuZExpc3RlbmVyKCkgbWV0aG9kLiBUaGUgZ29hbCBpcyB0byBldmVudHVhbGx5IHJlbW92ZSB0aGlzIGhhY2suXG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSBlbWl0dGVyLm9uKGV2ZW50LCBmbik7ZWxzZSBpZiAoaXNBcnJheShlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSkgZW1pdHRlci5fZXZlbnRzW2V2ZW50XS51bnNoaWZ0KGZuKTtlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0gPSBbZm4sIGVtaXR0ZXIuX2V2ZW50c1tldmVudF1dO1xufVxuXG5mdW5jdGlvbiBSZWFkYWJsZVN0YXRlKG9wdGlvbnMsIHN0cmVhbSkge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIER1cGxleCBzdHJlYW1zIGFyZSBib3RoIHJlYWRhYmxlIGFuZCB3cml0YWJsZSwgYnV0IHNoYXJlXG4gIC8vIHRoZSBzYW1lIG9wdGlvbnMgb2JqZWN0LlxuICAvLyBIb3dldmVyLCBzb21lIGNhc2VzIHJlcXVpcmUgc2V0dGluZyBvcHRpb25zIHRvIGRpZmZlcmVudFxuICAvLyB2YWx1ZXMgZm9yIHRoZSByZWFkYWJsZSBhbmQgdGhlIHdyaXRhYmxlIHNpZGVzIG9mIHRoZSBkdXBsZXggc3RyZWFtLlxuICAvLyBUaGVzZSBvcHRpb25zIGNhbiBiZSBwcm92aWRlZCBzZXBhcmF0ZWx5IGFzIHJlYWRhYmxlWFhYIGFuZCB3cml0YWJsZVhYWC5cbiAgdmFyIGlzRHVwbGV4ID0gc3RyZWFtIGluc3RhbmNlb2YgRHVwbGV4O1xuXG4gIC8vIG9iamVjdCBzdHJlYW0gZmxhZy4gVXNlZCB0byBtYWtlIHJlYWQobikgaWdub3JlIG4gYW5kIHRvXG4gIC8vIG1ha2UgYWxsIHRoZSBidWZmZXIgbWVyZ2luZyBhbmQgbGVuZ3RoIGNoZWNrcyBnbyBhd2F5XG4gIHRoaXMub2JqZWN0TW9kZSA9ICEhb3B0aW9ucy5vYmplY3RNb2RlO1xuXG4gIGlmIChpc0R1cGxleCkgdGhpcy5vYmplY3RNb2RlID0gdGhpcy5vYmplY3RNb2RlIHx8ICEhb3B0aW9ucy5yZWFkYWJsZU9iamVjdE1vZGU7XG5cbiAgLy8gdGhlIHBvaW50IGF0IHdoaWNoIGl0IHN0b3BzIGNhbGxpbmcgX3JlYWQoKSB0byBmaWxsIHRoZSBidWZmZXJcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyBcImRvbid0IGNhbGwgX3JlYWQgcHJlZW1wdGl2ZWx5IGV2ZXJcIlxuICB2YXIgaHdtID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICB2YXIgcmVhZGFibGVId20gPSBvcHRpb25zLnJlYWRhYmxlSGlnaFdhdGVyTWFyaztcbiAgdmFyIGRlZmF1bHRId20gPSB0aGlzLm9iamVjdE1vZGUgPyAxNiA6IDE2ICogMTAyNDtcblxuICBpZiAoaHdtIHx8IGh3bSA9PT0gMCkgdGhpcy5oaWdoV2F0ZXJNYXJrID0gaHdtO2Vsc2UgaWYgKGlzRHVwbGV4ICYmIChyZWFkYWJsZUh3bSB8fCByZWFkYWJsZUh3bSA9PT0gMCkpIHRoaXMuaGlnaFdhdGVyTWFyayA9IHJlYWRhYmxlSHdtO2Vsc2UgdGhpcy5oaWdoV2F0ZXJNYXJrID0gZGVmYXVsdEh3bTtcblxuICAvLyBjYXN0IHRvIGludHMuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IE1hdGguZmxvb3IodGhpcy5oaWdoV2F0ZXJNYXJrKTtcblxuICAvLyBBIGxpbmtlZCBsaXN0IGlzIHVzZWQgdG8gc3RvcmUgZGF0YSBjaHVua3MgaW5zdGVhZCBvZiBhbiBhcnJheSBiZWNhdXNlIHRoZVxuICAvLyBsaW5rZWQgbGlzdCBjYW4gcmVtb3ZlIGVsZW1lbnRzIGZyb20gdGhlIGJlZ2lubmluZyBmYXN0ZXIgdGhhblxuICAvLyBhcnJheS5zaGlmdCgpXG4gIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlckxpc3QoKTtcbiAgdGhpcy5sZW5ndGggPSAwO1xuICB0aGlzLnBpcGVzID0gbnVsbDtcbiAgdGhpcy5waXBlc0NvdW50ID0gMDtcbiAgdGhpcy5mbG93aW5nID0gbnVsbDtcbiAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICB0aGlzLmVuZEVtaXR0ZWQgPSBmYWxzZTtcbiAgdGhpcy5yZWFkaW5nID0gZmFsc2U7XG5cbiAgLy8gYSBmbGFnIHRvIGJlIGFibGUgdG8gdGVsbCBpZiB0aGUgZXZlbnQgJ3JlYWRhYmxlJy8nZGF0YScgaXMgZW1pdHRlZFxuICAvLyBpbW1lZGlhdGVseSwgb3Igb24gYSBsYXRlciB0aWNrLiAgV2Ugc2V0IHRoaXMgdG8gdHJ1ZSBhdCBmaXJzdCwgYmVjYXVzZVxuICAvLyBhbnkgYWN0aW9ucyB0aGF0IHNob3VsZG4ndCBoYXBwZW4gdW50aWwgXCJsYXRlclwiIHNob3VsZCBnZW5lcmFsbHkgYWxzb1xuICAvLyBub3QgaGFwcGVuIGJlZm9yZSB0aGUgZmlyc3QgcmVhZCBjYWxsLlxuICB0aGlzLnN5bmMgPSB0cnVlO1xuXG4gIC8vIHdoZW5ldmVyIHdlIHJldHVybiBudWxsLCB0aGVuIHdlIHNldCBhIGZsYWcgdG8gc2F5XG4gIC8vIHRoYXQgd2UncmUgYXdhaXRpbmcgYSAncmVhZGFibGUnIGV2ZW50IGVtaXNzaW9uLlxuICB0aGlzLm5lZWRSZWFkYWJsZSA9IGZhbHNlO1xuICB0aGlzLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlO1xuICB0aGlzLnJlYWRhYmxlTGlzdGVuaW5nID0gZmFsc2U7XG4gIHRoaXMucmVzdW1lU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgLy8gaGFzIGl0IGJlZW4gZGVzdHJveWVkXG4gIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgLy8gQ3J5cHRvIGlzIGtpbmQgb2Ygb2xkIGFuZCBjcnVzdHkuICBIaXN0b3JpY2FsbHksIGl0cyBkZWZhdWx0IHN0cmluZ1xuICAvLyBlbmNvZGluZyBpcyAnYmluYXJ5JyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhpcyBjb25maWd1cmFibGUuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgdW5pdmVyc2UgdXNlcyAndXRmOCcsIHRob3VnaC5cbiAgdGhpcy5kZWZhdWx0RW5jb2RpbmcgPSBvcHRpb25zLmRlZmF1bHRFbmNvZGluZyB8fCAndXRmOCc7XG5cbiAgLy8gdGhlIG51bWJlciBvZiB3cml0ZXJzIHRoYXQgYXJlIGF3YWl0aW5nIGEgZHJhaW4gZXZlbnQgaW4gLnBpcGUoKXNcbiAgdGhpcy5hd2FpdERyYWluID0gMDtcblxuICAvLyBpZiB0cnVlLCBhIG1heWJlUmVhZE1vcmUgaGFzIGJlZW4gc2NoZWR1bGVkXG4gIHRoaXMucmVhZGluZ01vcmUgPSBmYWxzZTtcblxuICB0aGlzLmRlY29kZXIgPSBudWxsO1xuICB0aGlzLmVuY29kaW5nID0gbnVsbDtcbiAgaWYgKG9wdGlvbnMuZW5jb2RpbmcpIHtcbiAgICBpZiAoIVN0cmluZ0RlY29kZXIpIFN0cmluZ0RlY29kZXIgPSByZXF1aXJlKCdzdHJpbmdfZGVjb2Rlci8nKS5TdHJpbmdEZWNvZGVyO1xuICAgIHRoaXMuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIHRoaXMuZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIFJlYWRhYmxlKG9wdGlvbnMpIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVhZGFibGUpKSByZXR1cm4gbmV3IFJlYWRhYmxlKG9wdGlvbnMpO1xuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUgPSBuZXcgUmVhZGFibGVTdGF0ZShvcHRpb25zLCB0aGlzKTtcblxuICAvLyBsZWdhY3lcbiAgdGhpcy5yZWFkYWJsZSA9IHRydWU7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucmVhZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fcmVhZCA9IG9wdGlvbnMucmVhZDtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB0aGlzLl9kZXN0cm95ID0gb3B0aW9ucy5kZXN0cm95O1xuICB9XG5cbiAgU3RyZWFtLmNhbGwodGhpcyk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZS5wcm90b3R5cGUsICdkZXN0cm95ZWQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHdlIGlnbm9yZSB0aGUgdmFsdWUgaWYgdGhlIHN0cmVhbVxuICAgIC8vIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCB5ZXRcbiAgICBpZiAoIXRoaXMuX3JlYWRhYmxlU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0aGUgdXNlciBpcyBleHBsaWNpdGx5XG4gICAgLy8gbWFuYWdpbmcgZGVzdHJveWVkXG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgfVxufSk7XG5cblJlYWRhYmxlLnByb3RvdHlwZS5kZXN0cm95ID0gZGVzdHJveUltcGwuZGVzdHJveTtcblJlYWRhYmxlLnByb3RvdHlwZS5fdW5kZXN0cm95ID0gZGVzdHJveUltcGwudW5kZXN0cm95O1xuUmVhZGFibGUucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgdGhpcy5wdXNoKG51bGwpO1xuICBjYihlcnIpO1xufTtcblxuLy8gTWFudWFsbHkgc2hvdmUgc29tZXRoaW5nIGludG8gdGhlIHJlYWQoKSBidWZmZXIuXG4vLyBUaGlzIHJldHVybnMgdHJ1ZSBpZiB0aGUgaGlnaFdhdGVyTWFyayBoYXMgbm90IGJlZW4gaGl0IHlldCxcbi8vIHNpbWlsYXIgdG8gaG93IFdyaXRhYmxlLndyaXRlKCkgcmV0dXJucyB0cnVlIGlmIHlvdSBzaG91bGRcbi8vIHdyaXRlKCkgc29tZSBtb3JlLlxuUmVhZGFibGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHZhciBza2lwQ2h1bmtDaGVjaztcblxuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmNvZGluZyB8fCBzdGF0ZS5kZWZhdWx0RW5jb2Rpbmc7XG4gICAgICBpZiAoZW5jb2RpbmcgIT09IHN0YXRlLmVuY29kaW5nKSB7XG4gICAgICAgIGNodW5rID0gQnVmZmVyLmZyb20oY2h1bmssIGVuY29kaW5nKTtcbiAgICAgICAgZW5jb2RpbmcgPSAnJztcbiAgICAgIH1cbiAgICAgIHNraXBDaHVua0NoZWNrID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2tpcENodW5rQ2hlY2sgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlYWRhYmxlQWRkQ2h1bmsodGhpcywgY2h1bmssIGVuY29kaW5nLCBmYWxzZSwgc2tpcENodW5rQ2hlY2spO1xufTtcblxuLy8gVW5zaGlmdCBzaG91bGQgKmFsd2F5cyogYmUgc29tZXRoaW5nIGRpcmVjdGx5IG91dCBvZiByZWFkKClcblJlYWRhYmxlLnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIGNodW5rLCBudWxsLCB0cnVlLCBmYWxzZSk7XG59O1xuXG5mdW5jdGlvbiByZWFkYWJsZUFkZENodW5rKHN0cmVhbSwgY2h1bmssIGVuY29kaW5nLCBhZGRUb0Zyb250LCBza2lwQ2h1bmtDaGVjaykge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIGlmIChjaHVuayA9PT0gbnVsbCkge1xuICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICBvbkVvZkNodW5rKHN0cmVhbSwgc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBlcjtcbiAgICBpZiAoIXNraXBDaHVua0NoZWNrKSBlciA9IGNodW5rSW52YWxpZChzdGF0ZSwgY2h1bmspO1xuICAgIGlmIChlcikge1xuICAgICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuayAmJiBjaHVuay5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiAhc3RhdGUub2JqZWN0TW9kZSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2h1bmspICE9PSBCdWZmZXIucHJvdG90eXBlKSB7XG4gICAgICAgIGNodW5rID0gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuayk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRUb0Zyb250KSB7XG4gICAgICAgIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBzdHJlYW0uZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ3N0cmVhbS51bnNoaWZ0KCkgYWZ0ZXIgZW5kIGV2ZW50JykpO2Vsc2UgYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5lbmRlZCkge1xuICAgICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ3N0cmVhbS5wdXNoKCkgYWZ0ZXIgRU9GJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGUuZGVjb2RlciAmJiAhZW5jb2RpbmcpIHtcbiAgICAgICAgICBjaHVuayA9IHN0YXRlLmRlY29kZXIud3JpdGUoY2h1bmspO1xuICAgICAgICAgIGlmIChzdGF0ZS5vYmplY3RNb2RlIHx8IGNodW5rLmxlbmd0aCAhPT0gMCkgYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGZhbHNlKTtlbHNlIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWFkZFRvRnJvbnQpIHtcbiAgICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmVlZE1vcmVEYXRhKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGFkZFRvRnJvbnQpIHtcbiAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgc3RhdGUubGVuZ3RoID09PSAwICYmICFzdGF0ZS5zeW5jKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2RhdGEnLCBjaHVuayk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gdXBkYXRlIHRoZSBidWZmZXIgaW5mby5cbiAgICBzdGF0ZS5sZW5ndGggKz0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG4gICAgaWYgKGFkZFRvRnJvbnQpIHN0YXRlLmJ1ZmZlci51bnNoaWZ0KGNodW5rKTtlbHNlIHN0YXRlLmJ1ZmZlci5wdXNoKGNodW5rKTtcblxuICAgIGlmIChzdGF0ZS5uZWVkUmVhZGFibGUpIGVtaXRSZWFkYWJsZShzdHJlYW0pO1xuICB9XG4gIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNodW5rSW52YWxpZChzdGF0ZSwgY2h1bmspIHtcbiAgdmFyIGVyO1xuICBpZiAoIV9pc1VpbnQ4QXJyYXkoY2h1bmspICYmIHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIHJldHVybiBlcjtcbn1cblxuLy8gaWYgaXQncyBwYXN0IHRoZSBoaWdoIHdhdGVyIG1hcmssIHdlIGNhbiBwdXNoIGluIHNvbWUgbW9yZS5cbi8vIEFsc28sIGlmIHdlIGhhdmUgbm8gZGF0YSB5ZXQsIHdlIGNhbiBzdGFuZCBzb21lXG4vLyBtb3JlIGJ5dGVzLiAgVGhpcyBpcyB0byB3b3JrIGFyb3VuZCBjYXNlcyB3aGVyZSBod209MCxcbi8vIHN1Y2ggYXMgdGhlIHJlcGwuICBBbHNvLCBpZiB0aGUgcHVzaCgpIHRyaWdnZXJlZCBhXG4vLyByZWFkYWJsZSBldmVudCwgYW5kIHRoZSB1c2VyIGNhbGxlZCByZWFkKGxhcmdlTnVtYmVyKSBzdWNoIHRoYXRcbi8vIG5lZWRSZWFkYWJsZSB3YXMgc2V0LCB0aGVuIHdlIG91Z2h0IHRvIHB1c2ggbW9yZSwgc28gdGhhdCBhbm90aGVyXG4vLyAncmVhZGFibGUnIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkLlxuZnVuY3Rpb24gbmVlZE1vcmVEYXRhKHN0YXRlKSB7XG4gIHJldHVybiAhc3RhdGUuZW5kZWQgJiYgKHN0YXRlLm5lZWRSZWFkYWJsZSB8fCBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCk7XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS5pc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9PT0gZmFsc2U7XG59O1xuXG4vLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblJlYWRhYmxlLnByb3RvdHlwZS5zZXRFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmMpIHtcbiAgaWYgKCFTdHJpbmdEZWNvZGVyKSBTdHJpbmdEZWNvZGVyID0gcmVxdWlyZSgnc3RyaW5nX2RlY29kZXIvJykuU3RyaW5nRGVjb2RlcjtcbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIoZW5jKTtcbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmNvZGluZyA9IGVuYztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBEb24ndCByYWlzZSB0aGUgaHdtID4gOE1CXG52YXIgTUFYX0hXTSA9IDB4ODAwMDAwO1xuZnVuY3Rpb24gY29tcHV0ZU5ld0hpZ2hXYXRlck1hcmsobikge1xuICBpZiAobiA+PSBNQVhfSFdNKSB7XG4gICAgbiA9IE1BWF9IV007XG4gIH0gZWxzZSB7XG4gICAgLy8gR2V0IHRoZSBuZXh0IGhpZ2hlc3QgcG93ZXIgb2YgMiB0byBwcmV2ZW50IGluY3JlYXNpbmcgaHdtIGV4Y2Vzc2l2ZWx5IGluXG4gICAgLy8gdGlueSBhbW91bnRzXG4gICAgbi0tO1xuICAgIG4gfD0gbiA+Pj4gMTtcbiAgICBuIHw9IG4gPj4+IDI7XG4gICAgbiB8PSBuID4+PiA0O1xuICAgIG4gfD0gbiA+Pj4gODtcbiAgICBuIHw9IG4gPj4+IDE2O1xuICAgIG4rKztcbiAgfVxuICByZXR1cm4gbjtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBkZXNpZ25lZCB0byBiZSBpbmxpbmFibGUsIHNvIHBsZWFzZSB0YWtlIGNhcmUgd2hlbiBtYWtpbmdcbi8vIGNoYW5nZXMgdG8gdGhlIGZ1bmN0aW9uIGJvZHkuXG5mdW5jdGlvbiBob3dNdWNoVG9SZWFkKG4sIHN0YXRlKSB7XG4gIGlmIChuIDw9IDAgfHwgc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmVuZGVkKSByZXR1cm4gMDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldHVybiAxO1xuICBpZiAobiAhPT0gbikge1xuICAgIC8vIE9ubHkgZmxvdyBvbmUgYnVmZmVyIGF0IGEgdGltZVxuICAgIGlmIChzdGF0ZS5mbG93aW5nICYmIHN0YXRlLmxlbmd0aCkgcmV0dXJuIHN0YXRlLmJ1ZmZlci5oZWFkLmRhdGEubGVuZ3RoO2Vsc2UgcmV0dXJuIHN0YXRlLmxlbmd0aDtcbiAgfVxuICAvLyBJZiB3ZSdyZSBhc2tpbmcgZm9yIG1vcmUgdGhhbiB0aGUgY3VycmVudCBod20sIHRoZW4gcmFpc2UgdGhlIGh3bS5cbiAgaWYgKG4gPiBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSBzdGF0ZS5oaWdoV2F0ZXJNYXJrID0gY29tcHV0ZU5ld0hpZ2hXYXRlck1hcmsobik7XG4gIGlmIChuIDw9IHN0YXRlLmxlbmd0aCkgcmV0dXJuIG47XG4gIC8vIERvbid0IGhhdmUgZW5vdWdoXG4gIGlmICghc3RhdGUuZW5kZWQpIHtcbiAgICBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBzdGF0ZS5sZW5ndGg7XG59XG5cbi8vIHlvdSBjYW4gb3ZlcnJpZGUgZWl0aGVyIHRoaXMgbWV0aG9kLCBvciB0aGUgYXN5bmMgX3JlYWQobikgYmVsb3cuXG5SZWFkYWJsZS5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gIGRlYnVnKCdyZWFkJywgbik7XG4gIG4gPSBwYXJzZUludChuLCAxMCk7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHZhciBuT3JpZyA9IG47XG5cbiAgaWYgKG4gIT09IDApIHN0YXRlLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlO1xuXG4gIC8vIGlmIHdlJ3JlIGRvaW5nIHJlYWQoMCkgdG8gdHJpZ2dlciBhIHJlYWRhYmxlIGV2ZW50LCBidXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGEgYnVuY2ggb2YgZGF0YSBpbiB0aGUgYnVmZmVyLCB0aGVuIGp1c3QgdHJpZ2dlclxuICAvLyB0aGUgJ3JlYWRhYmxlJyBldmVudCBhbmQgbW92ZSBvbi5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUubmVlZFJlYWRhYmxlICYmIChzdGF0ZS5sZW5ndGggPj0gc3RhdGUuaGlnaFdhdGVyTWFyayB8fCBzdGF0ZS5lbmRlZCkpIHtcbiAgICBkZWJ1ZygncmVhZDogZW1pdFJlYWRhYmxlJywgc3RhdGUubGVuZ3RoLCBzdGF0ZS5lbmRlZCk7XG4gICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkgZW5kUmVhZGFibGUodGhpcyk7ZWxzZSBlbWl0UmVhZGFibGUodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuID0gaG93TXVjaFRvUmVhZChuLCBzdGF0ZSk7XG5cbiAgLy8gaWYgd2UndmUgZW5kZWQsIGFuZCB3ZSdyZSBub3cgY2xlYXIsIHRoZW4gZmluaXNoIGl0IHVwLlxuICBpZiAobiA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkge1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIGVuZFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQWxsIHRoZSBhY3R1YWwgY2h1bmsgZ2VuZXJhdGlvbiBsb2dpYyBuZWVkcyB0byBiZVxuICAvLyAqYmVsb3cqIHRoZSBjYWxsIHRvIF9yZWFkLiAgVGhlIHJlYXNvbiBpcyB0aGF0IGluIGNlcnRhaW5cbiAgLy8gc3ludGhldGljIHN0cmVhbSBjYXNlcywgc3VjaCBhcyBwYXNzdGhyb3VnaCBzdHJlYW1zLCBfcmVhZFxuICAvLyBtYXkgYmUgYSBjb21wbGV0ZWx5IHN5bmNocm9ub3VzIG9wZXJhdGlvbiB3aGljaCBtYXkgY2hhbmdlXG4gIC8vIHRoZSBzdGF0ZSBvZiB0aGUgcmVhZCBidWZmZXIsIHByb3ZpZGluZyBlbm91Z2ggZGF0YSB3aGVuXG4gIC8vIGJlZm9yZSB0aGVyZSB3YXMgKm5vdCogZW5vdWdoLlxuICAvL1xuICAvLyBTbywgdGhlIHN0ZXBzIGFyZTpcbiAgLy8gMS4gRmlndXJlIG91dCB3aGF0IHRoZSBzdGF0ZSBvZiB0aGluZ3Mgd2lsbCBiZSBhZnRlciB3ZSBkb1xuICAvLyBhIHJlYWQgZnJvbSB0aGUgYnVmZmVyLlxuICAvL1xuICAvLyAyLiBJZiB0aGF0IHJlc3VsdGluZyBzdGF0ZSB3aWxsIHRyaWdnZXIgYSBfcmVhZCwgdGhlbiBjYWxsIF9yZWFkLlxuICAvLyBOb3RlIHRoYXQgdGhpcyBtYXkgYmUgYXN5bmNocm9ub3VzLCBvciBzeW5jaHJvbm91cy4gIFllcywgaXQgaXNcbiAgLy8gZGVlcGx5IHVnbHkgdG8gd3JpdGUgQVBJcyB0aGlzIHdheSwgYnV0IHRoYXQgc3RpbGwgZG9lc24ndCBtZWFuXG4gIC8vIHRoYXQgdGhlIFJlYWRhYmxlIGNsYXNzIHNob3VsZCBiZWhhdmUgaW1wcm9wZXJseSwgYXMgc3RyZWFtcyBhcmVcbiAgLy8gZGVzaWduZWQgdG8gYmUgc3luYy9hc3luYyBhZ25vc3RpYy5cbiAgLy8gVGFrZSBub3RlIGlmIHRoZSBfcmVhZCBjYWxsIGlzIHN5bmMgb3IgYXN5bmMgKGllLCBpZiB0aGUgcmVhZCBjYWxsXG4gIC8vIGhhcyByZXR1cm5lZCB5ZXQpLCBzbyB0aGF0IHdlIGtub3cgd2hldGhlciBvciBub3QgaXQncyBzYWZlIHRvIGVtaXRcbiAgLy8gJ3JlYWRhYmxlJyBldGMuXG4gIC8vXG4gIC8vIDMuIEFjdHVhbGx5IHB1bGwgdGhlIHJlcXVlc3RlZCBjaHVua3Mgb3V0IG9mIHRoZSBidWZmZXIgYW5kIHJldHVybi5cblxuICAvLyBpZiB3ZSBuZWVkIGEgcmVhZGFibGUgZXZlbnQsIHRoZW4gd2UgbmVlZCB0byBkbyBzb21lIHJlYWRpbmcuXG4gIHZhciBkb1JlYWQgPSBzdGF0ZS5uZWVkUmVhZGFibGU7XG4gIGRlYnVnKCduZWVkIHJlYWRhYmxlJywgZG9SZWFkKTtcblxuICAvLyBpZiB3ZSBjdXJyZW50bHkgaGF2ZSBsZXNzIHRoYW4gdGhlIGhpZ2hXYXRlck1hcmssIHRoZW4gYWxzbyByZWFkIHNvbWVcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCB8fCBzdGF0ZS5sZW5ndGggLSBuIDwgc3RhdGUuaGlnaFdhdGVyTWFyaykge1xuICAgIGRvUmVhZCA9IHRydWU7XG4gICAgZGVidWcoJ2xlbmd0aCBsZXNzIHRoYW4gd2F0ZXJtYXJrJywgZG9SZWFkKTtcbiAgfVxuXG4gIC8vIGhvd2V2ZXIsIGlmIHdlJ3ZlIGVuZGVkLCB0aGVuIHRoZXJlJ3Mgbm8gcG9pbnQsIGFuZCBpZiB3ZSdyZSBhbHJlYWR5XG4gIC8vIHJlYWRpbmcsIHRoZW4gaXQncyB1bm5lY2Vzc2FyeS5cbiAgaWYgKHN0YXRlLmVuZGVkIHx8IHN0YXRlLnJlYWRpbmcpIHtcbiAgICBkb1JlYWQgPSBmYWxzZTtcbiAgICBkZWJ1ZygncmVhZGluZyBvciBlbmRlZCcsIGRvUmVhZCk7XG4gIH0gZWxzZSBpZiAoZG9SZWFkKSB7XG4gICAgZGVidWcoJ2RvIHJlYWQnKTtcbiAgICBzdGF0ZS5yZWFkaW5nID0gdHJ1ZTtcbiAgICBzdGF0ZS5zeW5jID0gdHJ1ZTtcbiAgICAvLyBpZiB0aGUgbGVuZ3RoIGlzIGN1cnJlbnRseSB6ZXJvLCB0aGVuIHdlICpuZWVkKiBhIHJlYWRhYmxlIGV2ZW50LlxuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgLy8gY2FsbCBpbnRlcm5hbCByZWFkIG1ldGhvZFxuICAgIHRoaXMuX3JlYWQoc3RhdGUuaGlnaFdhdGVyTWFyayk7XG4gICAgc3RhdGUuc3luYyA9IGZhbHNlO1xuICAgIC8vIElmIF9yZWFkIHB1c2hlZCBkYXRhIHN5bmNocm9ub3VzbHksIHRoZW4gYHJlYWRpbmdgIHdpbGwgYmUgZmFsc2UsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gcmUtZXZhbHVhdGUgaG93IG11Y2ggZGF0YSB3ZSBjYW4gcmV0dXJuIHRvIHRoZSB1c2VyLlxuICAgIGlmICghc3RhdGUucmVhZGluZykgbiA9IGhvd011Y2hUb1JlYWQobk9yaWcsIHN0YXRlKTtcbiAgfVxuXG4gIHZhciByZXQ7XG4gIGlmIChuID4gMCkgcmV0ID0gZnJvbUxpc3Qobiwgc3RhdGUpO2Vsc2UgcmV0ID0gbnVsbDtcblxuICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICBuID0gMDtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5sZW5ndGggLT0gbjtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBJZiB3ZSBoYXZlIG5vdGhpbmcgaW4gdGhlIGJ1ZmZlciwgdGhlbiB3ZSB3YW50IHRvIGtub3dcbiAgICAvLyBhcyBzb29uIGFzIHdlICpkbyogZ2V0IHNvbWV0aGluZyBpbnRvIHRoZSBidWZmZXIuXG4gICAgaWYgKCFzdGF0ZS5lbmRlZCkgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcblxuICAgIC8vIElmIHdlIHRyaWVkIHRvIHJlYWQoKSBwYXN0IHRoZSBFT0YsIHRoZW4gZW1pdCBlbmQgb24gdGhlIG5leHQgdGljay5cbiAgICBpZiAobk9yaWcgIT09IG4gJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO1xuICB9XG5cbiAgaWYgKHJldCAhPT0gbnVsbCkgdGhpcy5lbWl0KCdkYXRhJywgcmV0KTtcblxuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gb25Fb2ZDaHVuayhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5lbmRlZCkgcmV0dXJuO1xuICBpZiAoc3RhdGUuZGVjb2Rlcikge1xuICAgIHZhciBjaHVuayA9IHN0YXRlLmRlY29kZXIuZW5kKCk7XG4gICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkge1xuICAgICAgc3RhdGUuYnVmZmVyLnB1c2goY2h1bmspO1xuICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgfVxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG5cbiAgLy8gZW1pdCAncmVhZGFibGUnIG5vdyB0byBtYWtlIHN1cmUgaXQgZ2V0cyBwaWNrZWQgdXAuXG4gIGVtaXRSZWFkYWJsZShzdHJlYW0pO1xufVxuXG4vLyBEb24ndCBlbWl0IHJlYWRhYmxlIHJpZ2h0IGF3YXkgaW4gc3luYyBtb2RlLCBiZWNhdXNlIHRoaXMgY2FuIHRyaWdnZXJcbi8vIGFub3RoZXIgcmVhZCgpIGNhbGwgPT4gc3RhY2sgb3ZlcmZsb3cuICBUaGlzIHdheSwgaXQgbWlnaHQgdHJpZ2dlclxuLy8gYSBuZXh0VGljayByZWN1cnNpb24gd2FybmluZywgYnV0IHRoYXQncyBub3Qgc28gYmFkLlxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlKHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIHN0YXRlLm5lZWRSZWFkYWJsZSA9IGZhbHNlO1xuICBpZiAoIXN0YXRlLmVtaXR0ZWRSZWFkYWJsZSkge1xuICAgIGRlYnVnKCdlbWl0UmVhZGFibGUnLCBzdGF0ZS5mbG93aW5nKTtcbiAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSB0cnVlO1xuICAgIGlmIChzdGF0ZS5zeW5jKSBwbmEubmV4dFRpY2soZW1pdFJlYWRhYmxlXywgc3RyZWFtKTtlbHNlIGVtaXRSZWFkYWJsZV8oc3RyZWFtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0UmVhZGFibGVfKHN0cmVhbSkge1xuICBkZWJ1ZygnZW1pdCByZWFkYWJsZScpO1xuICBzdHJlYW0uZW1pdCgncmVhZGFibGUnKTtcbiAgZmxvdyhzdHJlYW0pO1xufVxuXG4vLyBhdCB0aGlzIHBvaW50LCB0aGUgdXNlciBoYXMgcHJlc3VtYWJseSBzZWVuIHRoZSAncmVhZGFibGUnIGV2ZW50LFxuLy8gYW5kIGNhbGxlZCByZWFkKCkgdG8gY29uc3VtZSBzb21lIGRhdGEuICB0aGF0IG1heSBoYXZlIHRyaWdnZXJlZFxuLy8gaW4gdHVybiBhbm90aGVyIF9yZWFkKG4pIGNhbGwsIGluIHdoaWNoIGNhc2UgcmVhZGluZyA9IHRydWUgaWZcbi8vIGl0J3MgaW4gcHJvZ3Jlc3MuXG4vLyBIb3dldmVyLCBpZiB3ZSdyZSBub3QgZW5kZWQsIG9yIHJlYWRpbmcsIGFuZCB0aGUgbGVuZ3RoIDwgaHdtLFxuLy8gdGhlbiBnbyBhaGVhZCBhbmQgdHJ5IHRvIHJlYWQgc29tZSBtb3JlIHByZWVtcHRpdmVseS5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmdNb3JlKSB7XG4gICAgc3RhdGUucmVhZGluZ01vcmUgPSB0cnVlO1xuICAgIHBuYS5uZXh0VGljayhtYXliZVJlYWRNb3JlXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVSZWFkTW9yZV8oc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB3aGlsZSAoIXN0YXRlLnJlYWRpbmcgJiYgIXN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLmVuZGVkICYmIHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkZWJ1ZygnbWF5YmVSZWFkTW9yZSByZWFkIDAnKTtcbiAgICBzdHJlYW0ucmVhZCgwKTtcbiAgICBpZiAobGVuID09PSBzdGF0ZS5sZW5ndGgpXG4gICAgICAvLyBkaWRuJ3QgZ2V0IGFueSBkYXRhLCBzdG9wIHNwaW5uaW5nLlxuICAgICAgYnJlYWs7ZWxzZSBsZW4gPSBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgc3RhdGUucmVhZGluZ01vcmUgPSBmYWxzZTtcbn1cblxuLy8gYWJzdHJhY3QgbWV0aG9kLiAgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gY2FsbCBjYihlciwgZGF0YSkgd2hlcmUgZGF0YSBpcyA8PSBuIGluIGxlbmd0aC5cbi8vIGZvciB2aXJ0dWFsIChub24tc3RyaW5nLCBub24tYnVmZmVyKSBzdHJlYW1zLCBcImxlbmd0aFwiIGlzIHNvbWV3aGF0XG4vLyBhcmJpdHJhcnksIGFuZCBwZXJoYXBzIG5vdCB2ZXJ5IG1lYW5pbmdmdWwuXG5SZWFkYWJsZS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdfcmVhZCgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpKTtcbn07XG5cblJlYWRhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKGRlc3QsIHBpcGVPcHRzKSB7XG4gIHZhciBzcmMgPSB0aGlzO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuXG4gIHN3aXRjaCAoc3RhdGUucGlwZXNDb3VudCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHN0YXRlLnBpcGVzID0gZGVzdDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHN0YXRlLnBpcGVzID0gW3N0YXRlLnBpcGVzLCBkZXN0XTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZS5waXBlcy5wdXNoKGRlc3QpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgc3RhdGUucGlwZXNDb3VudCArPSAxO1xuICBkZWJ1ZygncGlwZSBjb3VudD0lZCBvcHRzPSVqJywgc3RhdGUucGlwZXNDb3VudCwgcGlwZU9wdHMpO1xuXG4gIHZhciBkb0VuZCA9ICghcGlwZU9wdHMgfHwgcGlwZU9wdHMuZW5kICE9PSBmYWxzZSkgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRvdXQgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRlcnI7XG5cbiAgdmFyIGVuZEZuID0gZG9FbmQgPyBvbmVuZCA6IHVucGlwZTtcbiAgaWYgKHN0YXRlLmVuZEVtaXR0ZWQpIHBuYS5uZXh0VGljayhlbmRGbik7ZWxzZSBzcmMub25jZSgnZW5kJywgZW5kRm4pO1xuXG4gIGRlc3Qub24oJ3VucGlwZScsIG9udW5waXBlKTtcbiAgZnVuY3Rpb24gb251bnBpcGUocmVhZGFibGUsIHVucGlwZUluZm8pIHtcbiAgICBkZWJ1Zygnb251bnBpcGUnKTtcbiAgICBpZiAocmVhZGFibGUgPT09IHNyYykge1xuICAgICAgaWYgKHVucGlwZUluZm8gJiYgdW5waXBlSW5mby5oYXNVbnBpcGVkID09PSBmYWxzZSkge1xuICAgICAgICB1bnBpcGVJbmZvLmhhc1VucGlwZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbmQoKSB7XG4gICAgZGVidWcoJ29uZW5kJyk7XG4gICAgZGVzdC5lbmQoKTtcbiAgfVxuXG4gIC8vIHdoZW4gdGhlIGRlc3QgZHJhaW5zLCBpdCByZWR1Y2VzIHRoZSBhd2FpdERyYWluIGNvdW50ZXJcbiAgLy8gb24gdGhlIHNvdXJjZS4gIFRoaXMgd291bGQgYmUgbW9yZSBlbGVnYW50IHdpdGggYSAub25jZSgpXG4gIC8vIGhhbmRsZXIgaW4gZmxvdygpLCBidXQgYWRkaW5nIGFuZCByZW1vdmluZyByZXBlYXRlZGx5IGlzXG4gIC8vIHRvbyBzbG93LlxuICB2YXIgb25kcmFpbiA9IHBpcGVPbkRyYWluKHNyYyk7XG4gIGRlc3Qub24oJ2RyYWluJywgb25kcmFpbik7XG5cbiAgdmFyIGNsZWFuZWRVcCA9IGZhbHNlO1xuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGRlYnVnKCdjbGVhbnVwJyk7XG4gICAgLy8gY2xlYW51cCBldmVudCBoYW5kbGVycyBvbmNlIHRoZSBwaXBlIGlzIGJyb2tlblxuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2RyYWluJywgb25kcmFpbik7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCB1bnBpcGUpO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uZGF0YSk7XG5cbiAgICBjbGVhbmVkVXAgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHJlYWRlciBpcyB3YWl0aW5nIGZvciBhIGRyYWluIGV2ZW50IGZyb20gdGhpc1xuICAgIC8vIHNwZWNpZmljIHdyaXRlciwgdGhlbiBpdCB3b3VsZCBjYXVzZSBpdCB0byBuZXZlciBzdGFydFxuICAgIC8vIGZsb3dpbmcgYWdhaW4uXG4gICAgLy8gU28sIGlmIHRoaXMgaXMgYXdhaXRpbmcgYSBkcmFpbiwgdGhlbiB3ZSBqdXN0IGNhbGwgaXQgbm93LlxuICAgIC8vIElmIHdlIGRvbid0IGtub3csIHRoZW4gYXNzdW1lIHRoYXQgd2UgYXJlIHdhaXRpbmcgZm9yIG9uZS5cbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiAmJiAoIWRlc3QuX3dyaXRhYmxlU3RhdGUgfHwgZGVzdC5fd3JpdGFibGVTdGF0ZS5uZWVkRHJhaW4pKSBvbmRyYWluKCk7XG4gIH1cblxuICAvLyBJZiB0aGUgdXNlciBwdXNoZXMgbW9yZSBkYXRhIHdoaWxlIHdlJ3JlIHdyaXRpbmcgdG8gZGVzdCB0aGVuIHdlJ2xsIGVuZCB1cFxuICAvLyBpbiBvbmRhdGEgYWdhaW4uIEhvd2V2ZXIsIHdlIG9ubHkgd2FudCB0byBpbmNyZWFzZSBhd2FpdERyYWluIG9uY2UgYmVjYXVzZVxuICAvLyBkZXN0IHdpbGwgb25seSBlbWl0IG9uZSAnZHJhaW4nIGV2ZW50IGZvciB0aGUgbXVsdGlwbGUgd3JpdGVzLlxuICAvLyA9PiBJbnRyb2R1Y2UgYSBndWFyZCBvbiBpbmNyZWFzaW5nIGF3YWl0RHJhaW4uXG4gIHZhciBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gIHNyYy5vbignZGF0YScsIG9uZGF0YSk7XG4gIGZ1bmN0aW9uIG9uZGF0YShjaHVuaykge1xuICAgIGRlYnVnKCdvbmRhdGEnKTtcbiAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gICAgdmFyIHJldCA9IGRlc3Qud3JpdGUoY2h1bmspO1xuICAgIGlmIChmYWxzZSA9PT0gcmV0ICYmICFpbmNyZWFzZWRBd2FpdERyYWluKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB1bnBpcGVkIGR1cmluZyBgZGVzdC53cml0ZSgpYCwgaXQgaXMgcG9zc2libGVcbiAgICAgIC8vIHRvIGdldCBzdHVjayBpbiBhIHBlcm1hbmVudGx5IHBhdXNlZCBzdGF0ZSBpZiB0aGF0IHdyaXRlXG4gICAgICAvLyBhbHNvIHJldHVybmVkIGZhbHNlLlxuICAgICAgLy8gPT4gQ2hlY2sgd2hldGhlciBgZGVzdGAgaXMgc3RpbGwgYSBwaXBpbmcgZGVzdGluYXRpb24uXG4gICAgICBpZiAoKHN0YXRlLnBpcGVzQ291bnQgPT09IDEgJiYgc3RhdGUucGlwZXMgPT09IGRlc3QgfHwgc3RhdGUucGlwZXNDb3VudCA+IDEgJiYgaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCkgIT09IC0xKSAmJiAhY2xlYW5lZFVwKSB7XG4gICAgICAgIGRlYnVnKCdmYWxzZSB3cml0ZSByZXNwb25zZSwgcGF1c2UnLCBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbik7XG4gICAgICAgIHNyYy5fcmVhZGFibGVTdGF0ZS5hd2FpdERyYWluKys7XG4gICAgICAgIGluY3JlYXNlZEF3YWl0RHJhaW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgc3JjLnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIGRlc3QgaGFzIGFuIGVycm9yLCB0aGVuIHN0b3AgcGlwaW5nIGludG8gaXQuXG4gIC8vIGhvd2V2ZXIsIGRvbid0IHN1cHByZXNzIHRoZSB0aHJvd2luZyBiZWhhdmlvciBmb3IgdGhpcy5cbiAgZnVuY3Rpb24gb25lcnJvcihlcikge1xuICAgIGRlYnVnKCdvbmVycm9yJywgZXIpO1xuICAgIHVucGlwZSgpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgaWYgKEVFbGlzdGVuZXJDb3VudChkZXN0LCAnZXJyb3InKSA9PT0gMCkgZGVzdC5lbWl0KCdlcnJvcicsIGVyKTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSBvdXIgZXJyb3IgaGFuZGxlciBpcyBhdHRhY2hlZCBiZWZvcmUgdXNlcmxhbmQgb25lcy5cbiAgcHJlcGVuZExpc3RlbmVyKGRlc3QsICdlcnJvcicsIG9uZXJyb3IpO1xuXG4gIC8vIEJvdGggY2xvc2UgYW5kIGZpbmlzaCBzaG91bGQgdHJpZ2dlciB1bnBpcGUsIGJ1dCBvbmx5IG9uY2UuXG4gIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIHVucGlwZSgpO1xuICB9XG4gIGRlc3Qub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgZnVuY3Rpb24gb25maW5pc2goKSB7XG4gICAgZGVidWcoJ29uZmluaXNoJyk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblxuICBmdW5jdGlvbiB1bnBpcGUoKSB7XG4gICAgZGVidWcoJ3VucGlwZScpO1xuICAgIHNyYy51bnBpcGUoZGVzdCk7XG4gIH1cblxuICAvLyB0ZWxsIHRoZSBkZXN0IHRoYXQgaXQncyBiZWluZyBwaXBlZCB0b1xuICBkZXN0LmVtaXQoJ3BpcGUnLCBzcmMpO1xuXG4gIC8vIHN0YXJ0IHRoZSBmbG93IGlmIGl0IGhhc24ndCBiZWVuIHN0YXJ0ZWQgYWxyZWFkeS5cbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BpcGUgcmVzdW1lJyk7XG4gICAgc3JjLnJlc3VtZSgpO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5mdW5jdGlvbiBwaXBlT25EcmFpbihzcmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBzcmMuX3JlYWRhYmxlU3RhdGU7XG4gICAgZGVidWcoJ3BpcGVPbkRyYWluJywgc3RhdGUuYXdhaXREcmFpbik7XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4pIHN0YXRlLmF3YWl0RHJhaW4tLTtcbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiA9PT0gMCAmJiBFRWxpc3RlbmVyQ291bnQoc3JjLCAnZGF0YScpKSB7XG4gICAgICBzdGF0ZS5mbG93aW5nID0gdHJ1ZTtcbiAgICAgIGZsb3coc3JjKTtcbiAgICB9XG4gIH07XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS51bnBpcGUgPSBmdW5jdGlvbiAoZGVzdCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgdW5waXBlSW5mbyA9IHsgaGFzVW5waXBlZDogZmFsc2UgfTtcblxuICAvLyBpZiB3ZSdyZSBub3QgcGlwaW5nIGFueXdoZXJlLCB0aGVuIGRvIG5vdGhpbmcuXG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAwKSByZXR1cm4gdGhpcztcblxuICAvLyBqdXN0IG9uZSBkZXN0aW5hdGlvbi4gIG1vc3QgY29tbW9uIGNhc2UuXG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAxKSB7XG4gICAgLy8gcGFzc2VkIGluIG9uZSwgYnV0IGl0J3Mgbm90IHRoZSByaWdodCBvbmUuXG4gICAgaWYgKGRlc3QgJiYgZGVzdCAhPT0gc3RhdGUucGlwZXMpIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKCFkZXN0KSBkZXN0ID0gc3RhdGUucGlwZXM7XG5cbiAgICAvLyBnb3QgYSBtYXRjaC5cbiAgICBzdGF0ZS5waXBlcyA9IG51bGw7XG4gICAgc3RhdGUucGlwZXNDb3VudCA9IDA7XG4gICAgc3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgIGlmIChkZXN0KSBkZXN0LmVtaXQoJ3VucGlwZScsIHRoaXMsIHVucGlwZUluZm8pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc2xvdyBjYXNlLiBtdWx0aXBsZSBwaXBlIGRlc3RpbmF0aW9ucy5cblxuICBpZiAoIWRlc3QpIHtcbiAgICAvLyByZW1vdmUgYWxsLlxuICAgIHZhciBkZXN0cyA9IHN0YXRlLnBpcGVzO1xuICAgIHZhciBsZW4gPSBzdGF0ZS5waXBlc0NvdW50O1xuICAgIHN0YXRlLnBpcGVzID0gbnVsbDtcbiAgICBzdGF0ZS5waXBlc0NvdW50ID0gMDtcbiAgICBzdGF0ZS5mbG93aW5nID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBkZXN0c1tpXS5lbWl0KCd1bnBpcGUnLCB0aGlzLCB1bnBpcGVJbmZvKTtcbiAgICB9cmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0cnkgdG8gZmluZCB0aGUgcmlnaHQgb25lLlxuICB2YXIgaW5kZXggPSBpbmRleE9mKHN0YXRlLnBpcGVzLCBkZXN0KTtcbiAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIHRoaXM7XG5cbiAgc3RhdGUucGlwZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgc3RhdGUucGlwZXNDb3VudCAtPSAxO1xuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMSkgc3RhdGUucGlwZXMgPSBzdGF0ZS5waXBlc1swXTtcblxuICBkZXN0LmVtaXQoJ3VucGlwZScsIHRoaXMsIHVucGlwZUluZm8pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gc2V0IHVwIGRhdGEgZXZlbnRzIGlmIHRoZXkgYXJlIGFza2VkIGZvclxuLy8gRW5zdXJlIHJlYWRhYmxlIGxpc3RlbmVycyBldmVudHVhbGx5IGdldCBzb21ldGhpbmdcblJlYWRhYmxlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldiwgZm4pIHtcbiAgdmFyIHJlcyA9IFN0cmVhbS5wcm90b3R5cGUub24uY2FsbCh0aGlzLCBldiwgZm4pO1xuXG4gIGlmIChldiA9PT0gJ2RhdGEnKSB7XG4gICAgLy8gU3RhcnQgZmxvd2luZyBvbiBuZXh0IHRpY2sgaWYgc3RyZWFtIGlzbid0IGV4cGxpY2l0bHkgcGF1c2VkXG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyAhPT0gZmFsc2UpIHRoaXMucmVzdW1lKCk7XG4gIH0gZWxzZSBpZiAoZXYgPT09ICdyZWFkYWJsZScpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICAgIGlmICghc3RhdGUuZW5kRW1pdHRlZCAmJiAhc3RhdGUucmVhZGFibGVMaXN0ZW5pbmcpIHtcbiAgICAgIHN0YXRlLnJlYWRhYmxlTGlzdGVuaW5nID0gc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgaWYgKCFzdGF0ZS5yZWFkaW5nKSB7XG4gICAgICAgIHBuYS5uZXh0VGljayhuUmVhZGluZ05leHRUaWNrLCB0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgIGVtaXRSZWFkYWJsZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblJlYWRhYmxlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IFJlYWRhYmxlLnByb3RvdHlwZS5vbjtcblxuZnVuY3Rpb24gblJlYWRpbmdOZXh0VGljayhzZWxmKSB7XG4gIGRlYnVnKCdyZWFkYWJsZSBuZXh0dGljayByZWFkIDAnKTtcbiAgc2VsZi5yZWFkKDApO1xufVxuXG4vLyBwYXVzZSgpIGFuZCByZXN1bWUoKSBhcmUgcmVtbmFudHMgb2YgdGhlIGxlZ2FjeSByZWFkYWJsZSBzdHJlYW0gQVBJXG4vLyBJZiB0aGUgdXNlciB1c2VzIHRoZW0sIHRoZW4gc3dpdGNoIGludG8gb2xkIG1vZGUuXG5SZWFkYWJsZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICBpZiAoIXN0YXRlLmZsb3dpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lJyk7XG4gICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgcmVzdW1lKHRoaXMsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHJlc3VtZShzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVzdW1lU2NoZWR1bGVkKSB7XG4gICAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBwbmEubmV4dFRpY2socmVzdW1lXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzdW1lXyhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVhZGluZykge1xuICAgIGRlYnVnKCdyZXN1bWUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bWVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgc3RhdGUuYXdhaXREcmFpbiA9IDA7XG4gIHN0cmVhbS5lbWl0KCdyZXN1bWUnKTtcbiAgZmxvdyhzdHJlYW0pO1xuICBpZiAoc3RhdGUuZmxvd2luZyAmJiAhc3RhdGUucmVhZGluZykgc3RyZWFtLnJlYWQoMCk7XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2NhbGwgcGF1c2UgZmxvd2luZz0laicsIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyk7XG4gIGlmIChmYWxzZSAhPT0gdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BhdXNlJyk7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KCdwYXVzZScpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZmxvdyhzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBkZWJ1ZygnZmxvdycsIHN0YXRlLmZsb3dpbmcpO1xuICB3aGlsZSAoc3RhdGUuZmxvd2luZyAmJiBzdHJlYW0ucmVhZCgpICE9PSBudWxsKSB7fVxufVxuXG4vLyB3cmFwIGFuIG9sZC1zdHlsZSBzdHJlYW0gYXMgdGhlIGFzeW5jIGRhdGEgc291cmNlLlxuLy8gVGhpcyBpcyAqbm90KiBwYXJ0IG9mIHRoZSByZWFkYWJsZSBzdHJlYW0gaW50ZXJmYWNlLlxuLy8gSXQgaXMgYW4gdWdseSB1bmZvcnR1bmF0ZSBtZXNzIG9mIGhpc3RvcnkuXG5SZWFkYWJsZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgcGF1c2VkID0gZmFsc2U7XG5cbiAgc3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgZW5kJyk7XG4gICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIXN0YXRlLmVuZGVkKSB7XG4gICAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkgX3RoaXMucHVzaChjaHVuayk7XG4gICAgfVxuXG4gICAgX3RoaXMucHVzaChudWxsKTtcbiAgfSk7XG5cbiAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgZGF0YScpO1xuICAgIGlmIChzdGF0ZS5kZWNvZGVyKSBjaHVuayA9IHN0YXRlLmRlY29kZXIud3JpdGUoY2h1bmspO1xuXG4gICAgLy8gZG9uJ3Qgc2tpcCBvdmVyIGZhbHN5IHZhbHVlcyBpbiBvYmplY3RNb2RlXG4gICAgaWYgKHN0YXRlLm9iamVjdE1vZGUgJiYgKGNodW5rID09PSBudWxsIHx8IGNodW5rID09PSB1bmRlZmluZWQpKSByZXR1cm47ZWxzZSBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgKCFjaHVuayB8fCAhY2h1bmsubGVuZ3RoKSkgcmV0dXJuO1xuXG4gICAgdmFyIHJldCA9IF90aGlzLnB1c2goY2h1bmspO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLnBhdXNlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBwcm94eSBhbGwgdGhlIG90aGVyIG1ldGhvZHMuXG4gIC8vIGltcG9ydGFudCB3aGVuIHdyYXBwaW5nIGZpbHRlcnMgYW5kIGR1cGxleGVzLlxuICBmb3IgKHZhciBpIGluIHN0cmVhbSkge1xuICAgIGlmICh0aGlzW2ldID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHN0cmVhbVtpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tpXSA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc3RyZWFtW21ldGhvZF0uYXBwbHkoc3RyZWFtLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfShpKTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm94eSBjZXJ0YWluIGltcG9ydGFudCBldmVudHMuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwga1Byb3h5RXZlbnRzLmxlbmd0aDsgbisrKSB7XG4gICAgc3RyZWFtLm9uKGtQcm94eUV2ZW50c1tuXSwgdGhpcy5lbWl0LmJpbmQodGhpcywga1Byb3h5RXZlbnRzW25dKSk7XG4gIH1cblxuICAvLyB3aGVuIHdlIHRyeSB0byBjb25zdW1lIHNvbWUgbW9yZSBieXRlcywgc2ltcGx5IHVucGF1c2UgdGhlXG4gIC8vIHVuZGVybHlpbmcgc3RyZWFtLlxuICB0aGlzLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgICBkZWJ1Zygnd3JhcHBlZCBfcmVhZCcsIG4pO1xuICAgIGlmIChwYXVzZWQpIHtcbiAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgc3RyZWFtLnJlc3VtZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZS5wcm90b3R5cGUsICdyZWFkYWJsZUhpZ2hXYXRlck1hcmsnLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIH1cbn0pO1xuXG4vLyBleHBvc2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkuXG5SZWFkYWJsZS5fZnJvbUxpc3QgPSBmcm9tTGlzdDtcblxuLy8gUGx1Y2sgb2ZmIG4gYnl0ZXMgZnJvbSBhbiBhcnJheSBvZiBidWZmZXJzLlxuLy8gTGVuZ3RoIGlzIHRoZSBjb21iaW5lZCBsZW5ndGhzIG9mIGFsbCB0aGUgYnVmZmVycyBpbiB0aGUgbGlzdC5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gZnJvbUxpc3Qobiwgc3RhdGUpIHtcbiAgLy8gbm90aGluZyBidWZmZXJlZFxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICB2YXIgcmV0O1xuICBpZiAoc3RhdGUub2JqZWN0TW9kZSkgcmV0ID0gc3RhdGUuYnVmZmVyLnNoaWZ0KCk7ZWxzZSBpZiAoIW4gfHwgbiA+PSBzdGF0ZS5sZW5ndGgpIHtcbiAgICAvLyByZWFkIGl0IGFsbCwgdHJ1bmNhdGUgdGhlIGxpc3RcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgcmV0ID0gc3RhdGUuYnVmZmVyLmpvaW4oJycpO2Vsc2UgaWYgKHN0YXRlLmJ1ZmZlci5sZW5ndGggPT09IDEpIHJldCA9IHN0YXRlLmJ1ZmZlci5oZWFkLmRhdGE7ZWxzZSByZXQgPSBzdGF0ZS5idWZmZXIuY29uY2F0KHN0YXRlLmxlbmd0aCk7XG4gICAgc3RhdGUuYnVmZmVyLmNsZWFyKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVhZCBwYXJ0IG9mIGxpc3RcbiAgICByZXQgPSBmcm9tTGlzdFBhcnRpYWwobiwgc3RhdGUuYnVmZmVyLCBzdGF0ZS5kZWNvZGVyKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8vIEV4dHJhY3RzIG9ubHkgZW5vdWdoIGJ1ZmZlcmVkIGRhdGEgdG8gc2F0aXNmeSB0aGUgYW1vdW50IHJlcXVlc3RlZC5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gZnJvbUxpc3RQYXJ0aWFsKG4sIGxpc3QsIGhhc1N0cmluZ3MpIHtcbiAgdmFyIHJldDtcbiAgaWYgKG4gPCBsaXN0LmhlYWQuZGF0YS5sZW5ndGgpIHtcbiAgICAvLyBzbGljZSBpcyB0aGUgc2FtZSBmb3IgYnVmZmVycyBhbmQgc3RyaW5nc1xuICAgIHJldCA9IGxpc3QuaGVhZC5kYXRhLnNsaWNlKDAsIG4pO1xuICAgIGxpc3QuaGVhZC5kYXRhID0gbGlzdC5oZWFkLmRhdGEuc2xpY2Uobik7XG4gIH0gZWxzZSBpZiAobiA9PT0gbGlzdC5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gZmlyc3QgY2h1bmsgaXMgYSBwZXJmZWN0IG1hdGNoXG4gICAgcmV0ID0gbGlzdC5zaGlmdCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlc3VsdCBzcGFucyBtb3JlIHRoYW4gb25lIGJ1ZmZlclxuICAgIHJldCA9IGhhc1N0cmluZ3MgPyBjb3B5RnJvbUJ1ZmZlclN0cmluZyhuLCBsaXN0KSA6IGNvcHlGcm9tQnVmZmVyKG4sIGxpc3QpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8vIENvcGllcyBhIHNwZWNpZmllZCBhbW91bnQgb2YgY2hhcmFjdGVycyBmcm9tIHRoZSBsaXN0IG9mIGJ1ZmZlcmVkIGRhdGFcbi8vIGNodW5rcy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gY29weUZyb21CdWZmZXJTdHJpbmcobiwgbGlzdCkge1xuICB2YXIgcCA9IGxpc3QuaGVhZDtcbiAgdmFyIGMgPSAxO1xuICB2YXIgcmV0ID0gcC5kYXRhO1xuICBuIC09IHJldC5sZW5ndGg7XG4gIHdoaWxlIChwID0gcC5uZXh0KSB7XG4gICAgdmFyIHN0ciA9IHAuZGF0YTtcbiAgICB2YXIgbmIgPSBuID4gc3RyLmxlbmd0aCA/IHN0ci5sZW5ndGggOiBuO1xuICAgIGlmIChuYiA9PT0gc3RyLmxlbmd0aCkgcmV0ICs9IHN0cjtlbHNlIHJldCArPSBzdHIuc2xpY2UoMCwgbik7XG4gICAgbiAtPSBuYjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgaWYgKG5iID09PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgICsrYztcbiAgICAgICAgaWYgKHAubmV4dCkgbGlzdC5oZWFkID0gcC5uZXh0O2Vsc2UgbGlzdC5oZWFkID0gbGlzdC50YWlsID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuaGVhZCA9IHA7XG4gICAgICAgIHAuZGF0YSA9IHN0ci5zbGljZShuYik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgKytjO1xuICB9XG4gIGxpc3QubGVuZ3RoIC09IGM7XG4gIHJldHVybiByZXQ7XG59XG5cbi8vIENvcGllcyBhIHNwZWNpZmllZCBhbW91bnQgb2YgYnl0ZXMgZnJvbSB0aGUgbGlzdCBvZiBidWZmZXJlZCBkYXRhIGNodW5rcy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gY29weUZyb21CdWZmZXIobiwgbGlzdCkge1xuICB2YXIgcmV0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG4pO1xuICB2YXIgcCA9IGxpc3QuaGVhZDtcbiAgdmFyIGMgPSAxO1xuICBwLmRhdGEuY29weShyZXQpO1xuICBuIC09IHAuZGF0YS5sZW5ndGg7XG4gIHdoaWxlIChwID0gcC5uZXh0KSB7XG4gICAgdmFyIGJ1ZiA9IHAuZGF0YTtcbiAgICB2YXIgbmIgPSBuID4gYnVmLmxlbmd0aCA/IGJ1Zi5sZW5ndGggOiBuO1xuICAgIGJ1Zi5jb3B5KHJldCwgcmV0Lmxlbmd0aCAtIG4sIDAsIG5iKTtcbiAgICBuIC09IG5iO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICBpZiAobmIgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgKytjO1xuICAgICAgICBpZiAocC5uZXh0KSBsaXN0LmhlYWQgPSBwLm5leHQ7ZWxzZSBsaXN0LmhlYWQgPSBsaXN0LnRhaWwgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5oZWFkID0gcDtcbiAgICAgICAgcC5kYXRhID0gYnVmLnNsaWNlKG5iKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICArK2M7XG4gIH1cbiAgbGlzdC5sZW5ndGggLT0gYztcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGUoc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcblxuICAvLyBJZiB3ZSBnZXQgaGVyZSBiZWZvcmUgY29uc3VtaW5nIGFsbCB0aGUgYnl0ZXMsIHRoZW4gdGhhdCBpcyBhXG4gIC8vIGJ1ZyBpbiBub2RlLiAgU2hvdWxkIG5ldmVyIGhhcHBlbi5cbiAgaWYgKHN0YXRlLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcignXCJlbmRSZWFkYWJsZSgpXCIgY2FsbGVkIG9uIG5vbi1lbXB0eSBzdHJlYW0nKTtcblxuICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQpIHtcbiAgICBzdGF0ZS5lbmRlZCA9IHRydWU7XG4gICAgcG5hLm5leHRUaWNrKGVuZFJlYWRhYmxlTlQsIHN0YXRlLCBzdHJlYW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuZFJlYWRhYmxlTlQoc3RhdGUsIHN0cmVhbSkge1xuICAvLyBDaGVjayB0aGF0IHdlIGRpZG4ndCBnZXQgb25lIGxhc3QgdW5zaGlmdC5cbiAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmIHN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXRlLmVuZEVtaXR0ZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5yZWFkYWJsZSA9IGZhbHNlO1xuICAgIHN0cmVhbS5lbWl0KCdlbmQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKHhzLCB4KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHhzW2ldID09PSB4KSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIGEgdHJhbnNmb3JtIHN0cmVhbSBpcyBhIHJlYWRhYmxlL3dyaXRhYmxlIHN0cmVhbSB3aGVyZSB5b3UgZG9cbi8vIHNvbWV0aGluZyB3aXRoIHRoZSBkYXRhLiAgU29tZXRpbWVzIGl0J3MgY2FsbGVkIGEgXCJmaWx0ZXJcIixcbi8vIGJ1dCB0aGF0J3Mgbm90IGEgZ3JlYXQgbmFtZSBmb3IgaXQsIHNpbmNlIHRoYXQgaW1wbGllcyBhIHRoaW5nIHdoZXJlXG4vLyBzb21lIGJpdHMgcGFzcyB0aHJvdWdoLCBhbmQgb3RoZXJzIGFyZSBzaW1wbHkgaWdub3JlZC4gIChUaGF0IHdvdWxkXG4vLyBiZSBhIHZhbGlkIGV4YW1wbGUgb2YgYSB0cmFuc2Zvcm0sIG9mIGNvdXJzZS4pXG4vL1xuLy8gV2hpbGUgdGhlIG91dHB1dCBpcyBjYXVzYWxseSByZWxhdGVkIHRvIHRoZSBpbnB1dCwgaXQncyBub3QgYVxuLy8gbmVjZXNzYXJpbHkgc3ltbWV0cmljIG9yIHN5bmNocm9ub3VzIHRyYW5zZm9ybWF0aW9uLiAgRm9yIGV4YW1wbGUsXG4vLyBhIHpsaWIgc3RyZWFtIG1pZ2h0IHRha2UgbXVsdGlwbGUgcGxhaW4tdGV4dCB3cml0ZXMoKSwgYW5kIHRoZW5cbi8vIGVtaXQgYSBzaW5nbGUgY29tcHJlc3NlZCBjaHVuayBzb21lIHRpbWUgaW4gdGhlIGZ1dHVyZS5cbi8vXG4vLyBIZXJlJ3MgaG93IHRoaXMgd29ya3M6XG4vL1xuLy8gVGhlIFRyYW5zZm9ybSBzdHJlYW0gaGFzIGFsbCB0aGUgYXNwZWN0cyBvZiB0aGUgcmVhZGFibGUgYW5kIHdyaXRhYmxlXG4vLyBzdHJlYW0gY2xhc3Nlcy4gIFdoZW4geW91IHdyaXRlKGNodW5rKSwgdGhhdCBjYWxscyBfd3JpdGUoY2h1bmssY2IpXG4vLyBpbnRlcm5hbGx5LCBhbmQgcmV0dXJucyBmYWxzZSBpZiB0aGVyZSdzIGEgbG90IG9mIHBlbmRpbmcgd3JpdGVzXG4vLyBidWZmZXJlZCB1cC4gIFdoZW4geW91IGNhbGwgcmVhZCgpLCB0aGF0IGNhbGxzIF9yZWFkKG4pIHVudGlsXG4vLyB0aGVyZSdzIGVub3VnaCBwZW5kaW5nIHJlYWRhYmxlIGRhdGEgYnVmZmVyZWQgdXAuXG4vL1xuLy8gSW4gYSB0cmFuc2Zvcm0gc3RyZWFtLCB0aGUgd3JpdHRlbiBkYXRhIGlzIHBsYWNlZCBpbiBhIGJ1ZmZlci4gIFdoZW5cbi8vIF9yZWFkKG4pIGlzIGNhbGxlZCwgaXQgdHJhbnNmb3JtcyB0aGUgcXVldWVkIHVwIGRhdGEsIGNhbGxpbmcgdGhlXG4vLyBidWZmZXJlZCBfd3JpdGUgY2IncyBhcyBpdCBjb25zdW1lcyBjaHVua3MuICBJZiBjb25zdW1pbmcgYSBzaW5nbGVcbi8vIHdyaXR0ZW4gY2h1bmsgd291bGQgcmVzdWx0IGluIG11bHRpcGxlIG91dHB1dCBjaHVua3MsIHRoZW4gdGhlIGZpcnN0XG4vLyBvdXRwdXR0ZWQgYml0IGNhbGxzIHRoZSByZWFkY2IsIGFuZCBzdWJzZXF1ZW50IGNodW5rcyBqdXN0IGdvIGludG9cbi8vIHRoZSByZWFkIGJ1ZmZlciwgYW5kIHdpbGwgY2F1c2UgaXQgdG8gZW1pdCAncmVhZGFibGUnIGlmIG5lY2Vzc2FyeS5cbi8vXG4vLyBUaGlzIHdheSwgYmFjay1wcmVzc3VyZSBpcyBhY3R1YWxseSBkZXRlcm1pbmVkIGJ5IHRoZSByZWFkaW5nIHNpZGUsXG4vLyBzaW5jZSBfcmVhZCBoYXMgdG8gYmUgY2FsbGVkIHRvIHN0YXJ0IHByb2Nlc3NpbmcgYSBuZXcgY2h1bmsuICBIb3dldmVyLFxuLy8gYSBwYXRob2xvZ2ljYWwgaW5mbGF0ZSB0eXBlIG9mIHRyYW5zZm9ybSBjYW4gY2F1c2UgZXhjZXNzaXZlIGJ1ZmZlcmluZ1xuLy8gaGVyZS4gIEZvciBleGFtcGxlLCBpbWFnaW5lIGEgc3RyZWFtIHdoZXJlIGV2ZXJ5IGJ5dGUgb2YgaW5wdXQgaXNcbi8vIGludGVycHJldGVkIGFzIGFuIGludGVnZXIgZnJvbSAwLTI1NSwgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGF0IG1hbnlcbi8vIGJ5dGVzIG9mIG91dHB1dC4gIFdyaXRpbmcgdGhlIDQgYnl0ZXMge2ZmLGZmLGZmLGZmfSB3b3VsZCByZXN1bHQgaW5cbi8vIDFrYiBvZiBkYXRhIGJlaW5nIG91dHB1dC4gIEluIHRoaXMgY2FzZSwgeW91IGNvdWxkIHdyaXRlIGEgdmVyeSBzbWFsbFxuLy8gYW1vdW50IG9mIGlucHV0LCBhbmQgZW5kIHVwIHdpdGggYSB2ZXJ5IGxhcmdlIGFtb3VudCBvZiBvdXRwdXQuICBJblxuLy8gc3VjaCBhIHBhdGhvbG9naWNhbCBpbmZsYXRpbmcgbWVjaGFuaXNtLCB0aGVyZSdkIGJlIG5vIHdheSB0byB0ZWxsXG4vLyB0aGUgc3lzdGVtIHRvIHN0b3AgZG9pbmcgdGhlIHRyYW5zZm9ybS4gIEEgc2luZ2xlIDRNQiB3cml0ZSBjb3VsZFxuLy8gY2F1c2UgdGhlIHN5c3RlbSB0byBydW4gb3V0IG9mIG1lbW9yeS5cbi8vXG4vLyBIb3dldmVyLCBldmVuIGluIHN1Y2ggYSBwYXRob2xvZ2ljYWwgY2FzZSwgb25seSBhIHNpbmdsZSB3cml0dGVuIGNodW5rXG4vLyB3b3VsZCBiZSBjb25zdW1lZCwgYW5kIHRoZW4gdGhlIHJlc3Qgd291bGQgd2FpdCAodW4tdHJhbnNmb3JtZWQpIHVudGlsXG4vLyB0aGUgcmVzdWx0cyBvZiB0aGUgcHJldmlvdXMgdHJhbnNmb3JtZWQgY2h1bmsgd2VyZSBjb25zdW1lZC5cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcblxudmFyIER1cGxleCA9IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFRyYW5zZm9ybSwgRHVwbGV4KTtcblxuZnVuY3Rpb24gYWZ0ZXJUcmFuc2Zvcm0oZXIsIGRhdGEpIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG4gIHRzLnRyYW5zZm9ybWluZyA9IGZhbHNlO1xuXG4gIHZhciBjYiA9IHRzLndyaXRlY2I7XG5cbiAgaWYgKCFjYikge1xuICAgIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCd3cml0ZSBjYWxsYmFjayBjYWxsZWQgbXVsdGlwbGUgdGltZXMnKSk7XG4gIH1cblxuICB0cy53cml0ZWNodW5rID0gbnVsbDtcbiAgdHMud3JpdGVjYiA9IG51bGw7XG5cbiAgaWYgKGRhdGEgIT0gbnVsbCkgLy8gc2luZ2xlIGVxdWFscyBjaGVjayBmb3IgYm90aCBgbnVsbGAgYW5kIGB1bmRlZmluZWRgXG4gICAgdGhpcy5wdXNoKGRhdGEpO1xuXG4gIGNiKGVyKTtcblxuICB2YXIgcnMgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICBycy5yZWFkaW5nID0gZmFsc2U7XG4gIGlmIChycy5uZWVkUmVhZGFibGUgfHwgcnMubGVuZ3RoIDwgcnMuaGlnaFdhdGVyTWFyaykge1xuICAgIHRoaXMuX3JlYWQocnMuaGlnaFdhdGVyTWFyayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gVHJhbnNmb3JtKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRyYW5zZm9ybSkpIHJldHVybiBuZXcgVHJhbnNmb3JtKG9wdGlvbnMpO1xuXG4gIER1cGxleC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gIHRoaXMuX3RyYW5zZm9ybVN0YXRlID0ge1xuICAgIGFmdGVyVHJhbnNmb3JtOiBhZnRlclRyYW5zZm9ybS5iaW5kKHRoaXMpLFxuICAgIG5lZWRUcmFuc2Zvcm06IGZhbHNlLFxuICAgIHRyYW5zZm9ybWluZzogZmFsc2UsXG4gICAgd3JpdGVjYjogbnVsbCxcbiAgICB3cml0ZWNodW5rOiBudWxsLFxuICAgIHdyaXRlZW5jb2Rpbmc6IG51bGxcbiAgfTtcblxuICAvLyBzdGFydCBvdXQgYXNraW5nIGZvciBhIHJlYWRhYmxlIGV2ZW50IG9uY2UgZGF0YSBpcyB0cmFuc2Zvcm1lZC5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuXG4gIC8vIHdlIGhhdmUgaW1wbGVtZW50ZWQgdGhlIF9yZWFkIG1ldGhvZCwgYW5kIGRvbmUgdGhlIG90aGVyIHRoaW5nc1xuICAvLyB0aGF0IFJlYWRhYmxlIHdhbnRzIGJlZm9yZSB0aGUgZmlyc3QgX3JlYWQgY2FsbCwgc28gdW5zZXQgdGhlXG4gIC8vIHN5bmMgZ3VhcmQgZmxhZy5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5zeW5jID0gZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nKSB0aGlzLl90cmFuc2Zvcm0gPSBvcHRpb25zLnRyYW5zZm9ybTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5mbHVzaCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZmx1c2ggPSBvcHRpb25zLmZsdXNoO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgd3JpdGFibGUgc2lkZSBmaW5pc2hlcywgdGhlbiBmbHVzaCBvdXQgYW55dGhpbmcgcmVtYWluaW5nLlxuICB0aGlzLm9uKCdwcmVmaW5pc2gnLCBwcmVmaW5pc2gpO1xufVxuXG5mdW5jdGlvbiBwcmVmaW5pc2goKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0aGlzLl9mbHVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuX2ZsdXNoKGZ1bmN0aW9uIChlciwgZGF0YSkge1xuICAgICAgZG9uZShfdGhpcywgZXIsIGRhdGEpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGRvbmUodGhpcywgbnVsbCwgbnVsbCk7XG4gIH1cbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZykge1xuICB0aGlzLl90cmFuc2Zvcm1TdGF0ZS5uZWVkVHJhbnNmb3JtID0gZmFsc2U7XG4gIHJldHVybiBEdXBsZXgucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCBjaHVuaywgZW5jb2RpbmcpO1xufTtcblxuLy8gVGhpcyBpcyB0aGUgcGFydCB3aGVyZSB5b3UgZG8gc3R1ZmYhXG4vLyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uIGluIGltcGxlbWVudGF0aW9uIGNsYXNzZXMuXG4vLyAnY2h1bmsnIGlzIGFuIGlucHV0IGNodW5rLlxuLy9cbi8vIENhbGwgYHB1c2gobmV3Q2h1bmspYCB0byBwYXNzIGFsb25nIHRyYW5zZm9ybWVkIG91dHB1dFxuLy8gdG8gdGhlIHJlYWRhYmxlIHNpZGUuICBZb3UgbWF5IGNhbGwgJ3B1c2gnIHplcm8gb3IgbW9yZSB0aW1lcy5cbi8vXG4vLyBDYWxsIGBjYihlcnIpYCB3aGVuIHlvdSBhcmUgZG9uZSB3aXRoIHRoaXMgY2h1bmsuICBJZiB5b3UgcGFzc1xuLy8gYW4gZXJyb3IsIHRoZW4gdGhhdCdsbCBwdXQgdGhlIGh1cnQgb24gdGhlIHdob2xlIG9wZXJhdGlvbi4gIElmIHlvdVxuLy8gbmV2ZXIgY2FsbCBjYigpLCB0aGVuIHlvdSdsbCBuZXZlciBnZXQgYW5vdGhlciBjaHVuay5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHRocm93IG5ldyBFcnJvcignX3RyYW5zZm9ybSgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgdHMgPSB0aGlzLl90cmFuc2Zvcm1TdGF0ZTtcbiAgdHMud3JpdGVjYiA9IGNiO1xuICB0cy53cml0ZWNodW5rID0gY2h1bms7XG4gIHRzLndyaXRlZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgaWYgKCF0cy50cmFuc2Zvcm1pbmcpIHtcbiAgICB2YXIgcnMgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICAgIGlmICh0cy5uZWVkVHJhbnNmb3JtIHx8IHJzLm5lZWRSZWFkYWJsZSB8fCBycy5sZW5ndGggPCBycy5oaWdoV2F0ZXJNYXJrKSB0aGlzLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59O1xuXG4vLyBEb2Vzbid0IG1hdHRlciB3aGF0IHRoZSBhcmdzIGFyZSBoZXJlLlxuLy8gX3RyYW5zZm9ybSBkb2VzIGFsbCB0aGUgd29yay5cbi8vIFRoYXQgd2UgZ290IGhlcmUgbWVhbnMgdGhhdCB0aGUgcmVhZGFibGUgc2lkZSB3YW50cyBtb3JlIGRhdGEuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG5cbiAgaWYgKHRzLndyaXRlY2h1bmsgIT09IG51bGwgJiYgdHMud3JpdGVjYiAmJiAhdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdHMudHJhbnNmb3JtaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl90cmFuc2Zvcm0odHMud3JpdGVjaHVuaywgdHMud3JpdGVlbmNvZGluZywgdHMuYWZ0ZXJUcmFuc2Zvcm0pO1xuICB9IGVsc2Uge1xuICAgIC8vIG1hcmsgdGhhdCB3ZSBuZWVkIGEgdHJhbnNmb3JtLCBzbyB0aGF0IGFueSBkYXRhIHRoYXQgY29tZXMgaW5cbiAgICAvLyB3aWxsIGdldCBwcm9jZXNzZWQsIG5vdyB0aGF0IHdlJ3ZlIGFza2VkIGZvciBpdC5cbiAgICB0cy5uZWVkVHJhbnNmb3JtID0gdHJ1ZTtcbiAgfVxufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIER1cGxleC5wcm90b3R5cGUuX2Rlc3Ryb3kuY2FsbCh0aGlzLCBlcnIsIGZ1bmN0aW9uIChlcnIyKSB7XG4gICAgY2IoZXJyMik7XG4gICAgX3RoaXMyLmVtaXQoJ2Nsb3NlJyk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZG9uZShzdHJlYW0sIGVyLCBkYXRhKSB7XG4gIGlmIChlcikgcmV0dXJuIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcblxuICBpZiAoZGF0YSAhPSBudWxsKSAvLyBzaW5nbGUgZXF1YWxzIGNoZWNrIGZvciBib3RoIGBudWxsYCBhbmQgYHVuZGVmaW5lZGBcbiAgICBzdHJlYW0ucHVzaChkYXRhKTtcblxuICAvLyBpZiB0aGVyZSdzIG5vdGhpbmcgaW4gdGhlIHdyaXRlIGJ1ZmZlciwgdGhlbiB0aGF0IG1lYW5zXG4gIC8vIHRoYXQgbm90aGluZyBtb3JlIHdpbGwgZXZlciBiZSBwcm92aWRlZFxuICBpZiAoc3RyZWFtLl93cml0YWJsZVN0YXRlLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKCdDYWxsaW5nIHRyYW5zZm9ybSBkb25lIHdoZW4gd3MubGVuZ3RoICE9IDAnKTtcblxuICBpZiAoc3RyZWFtLl90cmFuc2Zvcm1TdGF0ZS50cmFuc2Zvcm1pbmcpIHRocm93IG5ldyBFcnJvcignQ2FsbGluZyB0cmFuc2Zvcm0gZG9uZSB3aGVuIHN0aWxsIHRyYW5zZm9ybWluZycpO1xuXG4gIHJldHVybiBzdHJlYW0ucHVzaChudWxsKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gQSBiaXQgc2ltcGxlciB0aGFuIHJlYWRhYmxlIHN0cmVhbXMuXG4vLyBJbXBsZW1lbnQgYW4gYXN5bmMgLl93cml0ZShjaHVuaywgZW5jb2RpbmcsIGNiKSwgYW5kIGl0J2xsIGhhbmRsZSBhbGxcbi8vIHRoZSBkcmFpbiBldmVudCBlbWlzc2lvbiBhbmQgYnVmZmVyaW5nLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBwbmEgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbm1vZHVsZS5leHBvcnRzID0gV3JpdGFibGU7XG5cbi8qIDxyZXBsYWNlbWVudD4gKi9cbmZ1bmN0aW9uIFdyaXRlUmVxKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdGhpcy5jaHVuayA9IGNodW5rO1xuICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHRoaXMuY2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5uZXh0ID0gbnVsbDtcbn1cblxuLy8gSXQgc2VlbXMgYSBsaW5rZWQgbGlzdCBidXQgaXQgaXMgbm90XG4vLyB0aGVyZSB3aWxsIGJlIG9ubHkgMiBvZiB0aGVzZSBmb3IgZWFjaCBzdHJlYW1cbmZ1bmN0aW9uIENvcmtlZFJlcXVlc3Qoc3RhdGUpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLm5leHQgPSBudWxsO1xuICB0aGlzLmVudHJ5ID0gbnVsbDtcbiAgdGhpcy5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgb25Db3JrZWRGaW5pc2goX3RoaXMsIHN0YXRlKTtcbiAgfTtcbn1cbi8qIDwvcmVwbGFjZW1lbnQ+ICovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYXN5bmNXcml0ZSA9ICFwcm9jZXNzLmJyb3dzZXIgJiYgWyd2MC4xMCcsICd2MC45LiddLmluZGV4T2YocHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDAsIDUpKSA+IC0xID8gc2V0SW1tZWRpYXRlIDogcG5hLm5leHRUaWNrO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRHVwbGV4O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbldyaXRhYmxlLldyaXRhYmxlU3RhdGUgPSBXcml0YWJsZVN0YXRlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaW50ZXJuYWxVdGlsID0ge1xuICBkZXByZWNhdGU6IHJlcXVpcmUoJ3V0aWwtZGVwcmVjYXRlJylcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBTdHJlYW0gPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvc3RyZWFtJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIE91clVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheSB8fCBmdW5jdGlvbiAoKSB7fTtcbmZ1bmN0aW9uIF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspIHtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGNodW5rKTtcbn1cbmZ1bmN0aW9uIF9pc1VpbnQ4QXJyYXkob2JqKSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIob2JqKSB8fCBvYmogaW5zdGFuY2VvZiBPdXJVaW50OEFycmF5O1xufVxuXG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIGRlc3Ryb3lJbXBsID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3knKTtcblxudXRpbC5pbmhlcml0cyhXcml0YWJsZSwgU3RyZWFtKTtcblxuZnVuY3Rpb24gbm9wKCkge31cblxuZnVuY3Rpb24gV3JpdGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0pIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBEdXBsZXggc3RyZWFtcyBhcmUgYm90aCByZWFkYWJsZSBhbmQgd3JpdGFibGUsIGJ1dCBzaGFyZVxuICAvLyB0aGUgc2FtZSBvcHRpb25zIG9iamVjdC5cbiAgLy8gSG93ZXZlciwgc29tZSBjYXNlcyByZXF1aXJlIHNldHRpbmcgb3B0aW9ucyB0byBkaWZmZXJlbnRcbiAgLy8gdmFsdWVzIGZvciB0aGUgcmVhZGFibGUgYW5kIHRoZSB3cml0YWJsZSBzaWRlcyBvZiB0aGUgZHVwbGV4IHN0cmVhbS5cbiAgLy8gVGhlc2Ugb3B0aW9ucyBjYW4gYmUgcHJvdmlkZWQgc2VwYXJhdGVseSBhcyByZWFkYWJsZVhYWCBhbmQgd3JpdGFibGVYWFguXG4gIHZhciBpc0R1cGxleCA9IHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleDtcblxuICAvLyBvYmplY3Qgc3RyZWFtIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciBvciBub3QgdGhpcyBzdHJlYW1cbiAgLy8gY29udGFpbnMgYnVmZmVycyBvciBvYmplY3RzLlxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcblxuICBpZiAoaXNEdXBsZXgpIHRoaXMub2JqZWN0TW9kZSA9IHRoaXMub2JqZWN0TW9kZSB8fCAhIW9wdGlvbnMud3JpdGFibGVPYmplY3RNb2RlO1xuXG4gIC8vIHRoZSBwb2ludCBhdCB3aGljaCB3cml0ZSgpIHN0YXJ0cyByZXR1cm5pbmcgZmFsc2VcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyB0aGF0IHdlIGFsd2F5cyByZXR1cm4gZmFsc2UgaWZcbiAgLy8gdGhlIGVudGlyZSBidWZmZXIgaXMgbm90IGZsdXNoZWQgaW1tZWRpYXRlbHkgb24gd3JpdGUoKVxuICB2YXIgaHdtID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICB2YXIgd3JpdGFibGVId20gPSBvcHRpb25zLndyaXRhYmxlSGlnaFdhdGVyTWFyaztcbiAgdmFyIGRlZmF1bHRId20gPSB0aGlzLm9iamVjdE1vZGUgPyAxNiA6IDE2ICogMTAyNDtcblxuICBpZiAoaHdtIHx8IGh3bSA9PT0gMCkgdGhpcy5oaWdoV2F0ZXJNYXJrID0gaHdtO2Vsc2UgaWYgKGlzRHVwbGV4ICYmICh3cml0YWJsZUh3bSB8fCB3cml0YWJsZUh3bSA9PT0gMCkpIHRoaXMuaGlnaFdhdGVyTWFyayA9IHdyaXRhYmxlSHdtO2Vsc2UgdGhpcy5oaWdoV2F0ZXJNYXJrID0gZGVmYXVsdEh3bTtcblxuICAvLyBjYXN0IHRvIGludHMuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IE1hdGguZmxvb3IodGhpcy5oaWdoV2F0ZXJNYXJrKTtcblxuICAvLyBpZiBfZmluYWwgaGFzIGJlZW4gY2FsbGVkXG4gIHRoaXMuZmluYWxDYWxsZWQgPSBmYWxzZTtcblxuICAvLyBkcmFpbiBldmVudCBmbGFnLlxuICB0aGlzLm5lZWREcmFpbiA9IGZhbHNlO1xuICAvLyBhdCB0aGUgc3RhcnQgb2YgY2FsbGluZyBlbmQoKVxuICB0aGlzLmVuZGluZyA9IGZhbHNlO1xuICAvLyB3aGVuIGVuZCgpIGhhcyBiZWVuIGNhbGxlZCwgYW5kIHJldHVybmVkXG4gIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgLy8gd2hlbiAnZmluaXNoJyBpcyBlbWl0dGVkXG4gIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcblxuICAvLyBoYXMgaXQgYmVlbiBkZXN0cm95ZWRcbiAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAvLyBzaG91bGQgd2UgZGVjb2RlIHN0cmluZ3MgaW50byBidWZmZXJzIGJlZm9yZSBwYXNzaW5nIHRvIF93cml0ZT9cbiAgLy8gdGhpcyBpcyBoZXJlIHNvIHRoYXQgc29tZSBub2RlLWNvcmUgc3RyZWFtcyBjYW4gb3B0aW1pemUgc3RyaW5nXG4gIC8vIGhhbmRsaW5nIGF0IGEgbG93ZXIgbGV2ZWwuXG4gIHZhciBub0RlY29kZSA9IG9wdGlvbnMuZGVjb2RlU3RyaW5ncyA9PT0gZmFsc2U7XG4gIHRoaXMuZGVjb2RlU3RyaW5ncyA9ICFub0RlY29kZTtcblxuICAvLyBDcnlwdG8gaXMga2luZCBvZiBvbGQgYW5kIGNydXN0eS4gIEhpc3RvcmljYWxseSwgaXRzIGRlZmF1bHQgc3RyaW5nXG4gIC8vIGVuY29kaW5nIGlzICdiaW5hcnknIHNvIHdlIGhhdmUgdG8gbWFrZSB0aGlzIGNvbmZpZ3VyYWJsZS5cbiAgLy8gRXZlcnl0aGluZyBlbHNlIGluIHRoZSB1bml2ZXJzZSB1c2VzICd1dGY4JywgdGhvdWdoLlxuICB0aGlzLmRlZmF1bHRFbmNvZGluZyA9IG9wdGlvbnMuZGVmYXVsdEVuY29kaW5nIHx8ICd1dGY4JztcblxuICAvLyBub3QgYW4gYWN0dWFsIGJ1ZmZlciB3ZSBrZWVwIHRyYWNrIG9mLCBidXQgYSBtZWFzdXJlbWVudFxuICAvLyBvZiBob3cgbXVjaCB3ZSdyZSB3YWl0aW5nIHRvIGdldCBwdXNoZWQgdG8gc29tZSB1bmRlcmx5aW5nXG4gIC8vIHNvY2tldCBvciBmaWxlLlxuICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgLy8gYSBmbGFnIHRvIHNlZSB3aGVuIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYSB3cml0ZS5cbiAgdGhpcy53cml0aW5nID0gZmFsc2U7XG5cbiAgLy8gd2hlbiB0cnVlIGFsbCB3cml0ZXMgd2lsbCBiZSBidWZmZXJlZCB1bnRpbCAudW5jb3JrKCkgY2FsbFxuICB0aGlzLmNvcmtlZCA9IDA7XG5cbiAgLy8gYSBmbGFnIHRvIGJlIGFibGUgdG8gdGVsbCBpZiB0aGUgb253cml0ZSBjYiBpcyBjYWxsZWQgaW1tZWRpYXRlbHksXG4gIC8vIG9yIG9uIGEgbGF0ZXIgdGljay4gIFdlIHNldCB0aGlzIHRvIHRydWUgYXQgZmlyc3QsIGJlY2F1c2UgYW55XG4gIC8vIGFjdGlvbnMgdGhhdCBzaG91bGRuJ3QgaGFwcGVuIHVudGlsIFwibGF0ZXJcIiBzaG91bGQgZ2VuZXJhbGx5IGFsc29cbiAgLy8gbm90IGhhcHBlbiBiZWZvcmUgdGhlIGZpcnN0IHdyaXRlIGNhbGwuXG4gIHRoaXMuc3luYyA9IHRydWU7XG5cbiAgLy8gYSBmbGFnIHRvIGtub3cgaWYgd2UncmUgcHJvY2Vzc2luZyBwcmV2aW91c2x5IGJ1ZmZlcmVkIGl0ZW1zLCB3aGljaFxuICAvLyBtYXkgY2FsbCB0aGUgX3dyaXRlKCkgY2FsbGJhY2sgaW4gdGhlIHNhbWUgdGljaywgc28gdGhhdCB3ZSBkb24ndFxuICAvLyBlbmQgdXAgaW4gYW4gb3ZlcmxhcHBlZCBvbndyaXRlIHNpdHVhdGlvbi5cbiAgdGhpcy5idWZmZXJQcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgLy8gdGhlIGNhbGxiYWNrIHRoYXQncyBwYXNzZWQgdG8gX3dyaXRlKGNodW5rLGNiKVxuICB0aGlzLm9ud3JpdGUgPSBmdW5jdGlvbiAoZXIpIHtcbiAgICBvbndyaXRlKHN0cmVhbSwgZXIpO1xuICB9O1xuXG4gIC8vIHRoZSBjYWxsYmFjayB0aGF0IHRoZSB1c2VyIHN1cHBsaWVzIHRvIHdyaXRlKGNodW5rLGVuY29kaW5nLGNiKVxuICB0aGlzLndyaXRlY2IgPSBudWxsO1xuXG4gIC8vIHRoZSBhbW91bnQgdGhhdCBpcyBiZWluZyB3cml0dGVuIHdoZW4gX3dyaXRlIGlzIGNhbGxlZC5cbiAgdGhpcy53cml0ZWxlbiA9IDA7XG5cbiAgdGhpcy5idWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB0aGlzLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuXG4gIC8vIG51bWJlciBvZiBwZW5kaW5nIHVzZXItc3VwcGxpZWQgd3JpdGUgY2FsbGJhY2tzXG4gIC8vIHRoaXMgbXVzdCBiZSAwIGJlZm9yZSAnZmluaXNoJyBjYW4gYmUgZW1pdHRlZFxuICB0aGlzLnBlbmRpbmdjYiA9IDA7XG5cbiAgLy8gZW1pdCBwcmVmaW5pc2ggaWYgdGhlIG9ubHkgdGhpbmcgd2UncmUgd2FpdGluZyBmb3IgaXMgX3dyaXRlIGNic1xuICAvLyBUaGlzIGlzIHJlbGV2YW50IGZvciBzeW5jaHJvbm91cyBUcmFuc2Zvcm0gc3RyZWFtc1xuICB0aGlzLnByZWZpbmlzaGVkID0gZmFsc2U7XG5cbiAgLy8gVHJ1ZSBpZiB0aGUgZXJyb3Igd2FzIGFscmVhZHkgZW1pdHRlZCBhbmQgc2hvdWxkIG5vdCBiZSB0aHJvd24gYWdhaW5cbiAgdGhpcy5lcnJvckVtaXR0ZWQgPSBmYWxzZTtcblxuICAvLyBjb3VudCBidWZmZXJlZCByZXF1ZXN0c1xuICB0aGlzLmJ1ZmZlcmVkUmVxdWVzdENvdW50ID0gMDtcblxuICAvLyBhbGxvY2F0ZSB0aGUgZmlyc3QgQ29ya2VkUmVxdWVzdCwgdGhlcmUgaXMgYWx3YXlzXG4gIC8vIG9uZSBhbGxvY2F0ZWQgYW5kIGZyZWUgdG8gdXNlLCBhbmQgd2UgbWFpbnRhaW4gYXQgbW9zdCB0d29cbiAgdGhpcy5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBuZXcgQ29ya2VkUmVxdWVzdCh0aGlzKTtcbn1cblxuV3JpdGFibGVTdGF0ZS5wcm90b3R5cGUuZ2V0QnVmZmVyID0gZnVuY3Rpb24gZ2V0QnVmZmVyKCkge1xuICB2YXIgY3VycmVudCA9IHRoaXMuYnVmZmVyZWRSZXF1ZXN0O1xuICB2YXIgb3V0ID0gW107XG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgb3V0LnB1c2goY3VycmVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgfVxuICByZXR1cm4gb3V0O1xufTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGVTdGF0ZS5wcm90b3R5cGUsICdidWZmZXInLCB7XG4gICAgICBnZXQ6IGludGVybmFsVXRpbC5kZXByZWNhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIoKTtcbiAgICAgIH0sICdfd3JpdGFibGVTdGF0ZS5idWZmZXIgaXMgZGVwcmVjYXRlZC4gVXNlIF93cml0YWJsZVN0YXRlLmdldEJ1ZmZlciAnICsgJ2luc3RlYWQuJywgJ0RFUDAwMDMnKVxuICAgIH0pO1xuICB9IGNhdGNoIChfKSB7fVxufSkoKTtcblxuLy8gVGVzdCBfd3JpdGFibGVTdGF0ZSBmb3IgaW5oZXJpdGFuY2UgdG8gYWNjb3VudCBmb3IgRHVwbGV4IHN0cmVhbXMsXG4vLyB3aG9zZSBwcm90b3R5cGUgY2hhaW4gb25seSBwb2ludHMgdG8gUmVhZGFibGUuXG52YXIgcmVhbEhhc0luc3RhbmNlO1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmhhc0luc3RhbmNlICYmIHR5cGVvZiBGdW5jdGlvbi5wcm90b3R5cGVbU3ltYm9sLmhhc0luc3RhbmNlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICByZWFsSGFzSW5zdGFuY2UgPSBGdW5jdGlvbi5wcm90b3R5cGVbU3ltYm9sLmhhc0luc3RhbmNlXTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLCBTeW1ib2wuaGFzSW5zdGFuY2UsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKHJlYWxIYXNJbnN0YW5jZS5jYWxsKHRoaXMsIG9iamVjdCkpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHRoaXMgIT09IFdyaXRhYmxlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiBvYmplY3QgJiYgb2JqZWN0Ll93cml0YWJsZVN0YXRlIGluc3RhbmNlb2YgV3JpdGFibGVTdGF0ZTtcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgcmVhbEhhc0luc3RhbmNlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB0aGlzO1xuICB9O1xufVxuXG5mdW5jdGlvbiBXcml0YWJsZShvcHRpb25zKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgLy8gV3JpdGFibGUgY3RvciBpcyBhcHBsaWVkIHRvIER1cGxleGVzLCB0b28uXG4gIC8vIGByZWFsSGFzSW5zdGFuY2VgIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHVzaW5nIHBsYWluIGBpbnN0YW5jZW9mYFxuICAvLyB3b3VsZCByZXR1cm4gZmFsc2UsIGFzIG5vIGBfd3JpdGFibGVTdGF0ZWAgcHJvcGVydHkgaXMgYXR0YWNoZWQuXG5cbiAgLy8gVHJ5aW5nIHRvIHVzZSB0aGUgY3VzdG9tIGBpbnN0YW5jZW9mYCBmb3IgV3JpdGFibGUgaGVyZSB3aWxsIGFsc28gYnJlYWsgdGhlXG4gIC8vIE5vZGUuanMgTGF6eVRyYW5zZm9ybSBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaGFzIGEgbm9uLXRyaXZpYWwgZ2V0dGVyIGZvclxuICAvLyBgX3dyaXRhYmxlU3RhdGVgIHRoYXQgd291bGQgbGVhZCB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gIGlmICghcmVhbEhhc0luc3RhbmNlLmNhbGwoV3JpdGFibGUsIHRoaXMpICYmICEodGhpcyBpbnN0YW5jZW9mIER1cGxleCkpIHtcbiAgICByZXR1cm4gbmV3IFdyaXRhYmxlKG9wdGlvbnMpO1xuICB9XG5cbiAgdGhpcy5fd3JpdGFibGVTdGF0ZSA9IG5ldyBXcml0YWJsZVN0YXRlKG9wdGlvbnMsIHRoaXMpO1xuXG4gIC8vIGxlZ2FjeS5cbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JpdGUgPT09ICdmdW5jdGlvbicpIHRoaXMuX3dyaXRlID0gb3B0aW9ucy53cml0ZTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53cml0ZXYgPT09ICdmdW5jdGlvbicpIHRoaXMuX3dyaXRldiA9IG9wdGlvbnMud3JpdGV2O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHRoaXMuX2Rlc3Ryb3kgPSBvcHRpb25zLmRlc3Ryb3k7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmluYWwgPT09ICdmdW5jdGlvbicpIHRoaXMuX2ZpbmFsID0gb3B0aW9ucy5maW5hbDtcbiAgfVxuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG4vLyBPdGhlcndpc2UgcGVvcGxlIGNhbiBwaXBlIFdyaXRhYmxlIHN0cmVhbXMsIHdoaWNoIGlzIGp1c3Qgd3JvbmcuXG5Xcml0YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignQ2Fubm90IHBpcGUsIG5vdCByZWFkYWJsZScpKTtcbn07XG5cbmZ1bmN0aW9uIHdyaXRlQWZ0ZXJFbmQoc3RyZWFtLCBjYikge1xuICB2YXIgZXIgPSBuZXcgRXJyb3IoJ3dyaXRlIGFmdGVyIGVuZCcpO1xuICAvLyBUT0RPOiBkZWZlciBlcnJvciBldmVudHMgY29uc2lzdGVudGx5IGV2ZXJ5d2hlcmUsIG5vdCBqdXN0IHRoZSBjYlxuICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gIHBuYS5uZXh0VGljayhjYiwgZXIpO1xufVxuXG4vLyBDaGVja3MgdGhhdCBhIHVzZXItc3VwcGxpZWQgY2h1bmsgaXMgdmFsaWQsIGVzcGVjaWFsbHkgZm9yIHRoZSBwYXJ0aWN1bGFyXG4vLyBtb2RlIHRoZSBzdHJlYW0gaXMgaW4uIEN1cnJlbnRseSB0aGlzIG1lYW5zIHRoYXQgYG51bGxgIGlzIG5ldmVyIGFjY2VwdGVkXG4vLyBhbmQgdW5kZWZpbmVkL25vbi1zdHJpbmcgdmFsdWVzIGFyZSBvbmx5IGFsbG93ZWQgaW4gb2JqZWN0IG1vZGUuXG5mdW5jdGlvbiB2YWxpZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBjYikge1xuICB2YXIgdmFsaWQgPSB0cnVlO1xuICB2YXIgZXIgPSBmYWxzZTtcblxuICBpZiAoY2h1bmsgPT09IG51bGwpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ01heSBub3Qgd3JpdGUgbnVsbCB2YWx1ZXMgdG8gc3RyZWFtJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiBjaHVuayAhPT0gdW5kZWZpbmVkICYmICFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG5vbi1zdHJpbmcvYnVmZmVyIGNodW5rJyk7XG4gIH1cbiAgaWYgKGVyKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICAgIHBuYS5uZXh0VGljayhjYiwgZXIpO1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5Xcml0YWJsZS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuICB2YXIgcmV0ID0gZmFsc2U7XG4gIHZhciBpc0J1ZiA9ICFzdGF0ZS5vYmplY3RNb2RlICYmIF9pc1VpbnQ4QXJyYXkoY2h1bmspO1xuXG4gIGlmIChpc0J1ZiAmJiAhQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkge1xuICAgIGNodW5rID0gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuayk7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICBpZiAoaXNCdWYpIGVuY29kaW5nID0gJ2J1ZmZlcic7ZWxzZSBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9IHN0YXRlLmRlZmF1bHRFbmNvZGluZztcblxuICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSBjYiA9IG5vcDtcblxuICBpZiAoc3RhdGUuZW5kZWQpIHdyaXRlQWZ0ZXJFbmQodGhpcywgY2IpO2Vsc2UgaWYgKGlzQnVmIHx8IHZhbGlkQ2h1bmsodGhpcywgc3RhdGUsIGNodW5rLCBjYikpIHtcbiAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICByZXQgPSB3cml0ZU9yQnVmZmVyKHRoaXMsIHN0YXRlLCBpc0J1ZiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLmNvcmsgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG5cbiAgc3RhdGUuY29ya2VkKys7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUudW5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIGlmIChzdGF0ZS5jb3JrZWQpIHtcbiAgICBzdGF0ZS5jb3JrZWQtLTtcblxuICAgIGlmICghc3RhdGUud3JpdGluZyAmJiAhc3RhdGUuY29ya2VkICYmICFzdGF0ZS5maW5pc2hlZCAmJiAhc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QpIGNsZWFyQnVmZmVyKHRoaXMsIHN0YXRlKTtcbiAgfVxufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnNldERlZmF1bHRFbmNvZGluZyA9IGZ1bmN0aW9uIHNldERlZmF1bHRFbmNvZGluZyhlbmNvZGluZykge1xuICAvLyBub2RlOjpQYXJzZUVuY29kaW5nKCkgcmVxdWlyZXMgbG93ZXIgY2FzZS5cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycpIGVuY29kaW5nID0gZW5jb2RpbmcudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCEoWydoZXgnLCAndXRmOCcsICd1dGYtOCcsICdhc2NpaScsICdiaW5hcnknLCAnYmFzZTY0JywgJ3VjczInLCAndWNzLTInLCAndXRmMTZsZScsICd1dGYtMTZsZScsICdyYXcnXS5pbmRleE9mKChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKTtcbiAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZWZhdWx0RW5jb2RpbmcgPSBlbmNvZGluZztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBkZWNvZGVDaHVuayhzdGF0ZSwgY2h1bmssIGVuY29kaW5nKSB7XG4gIGlmICghc3RhdGUub2JqZWN0TW9kZSAmJiBzdGF0ZS5kZWNvZGVTdHJpbmdzICE9PSBmYWxzZSAmJiB0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgY2h1bmsgPSBCdWZmZXIuZnJvbShjaHVuaywgZW5jb2RpbmcpO1xuICB9XG4gIHJldHVybiBjaHVuaztcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLnByb3RvdHlwZSwgJ3dyaXRhYmxlSGlnaFdhdGVyTWFyaycsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUuaGlnaFdhdGVyTWFyaztcbiAgfVxufSk7XG5cbi8vIGlmIHdlJ3JlIGFscmVhZHkgd3JpdGluZyBzb21ldGhpbmcsIHRoZW4ganVzdCBwdXQgdGhpc1xuLy8gaW4gdGhlIHF1ZXVlLCBhbmQgd2FpdCBvdXIgdHVybi4gIE90aGVyd2lzZSwgY2FsbCBfd3JpdGVcbi8vIElmIHdlIHJldHVybiBmYWxzZSwgdGhlbiB3ZSBuZWVkIGEgZHJhaW4gZXZlbnQsIHNvIHNldCB0aGF0IGZsYWcuXG5mdW5jdGlvbiB3cml0ZU9yQnVmZmVyKHN0cmVhbSwgc3RhdGUsIGlzQnVmLCBjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGlmICghaXNCdWYpIHtcbiAgICB2YXIgbmV3Q2h1bmsgPSBkZWNvZGVDaHVuayhzdGF0ZSwgY2h1bmssIGVuY29kaW5nKTtcbiAgICBpZiAoY2h1bmsgIT09IG5ld0NodW5rKSB7XG4gICAgICBpc0J1ZiA9IHRydWU7XG4gICAgICBlbmNvZGluZyA9ICdidWZmZXInO1xuICAgICAgY2h1bmsgPSBuZXdDaHVuaztcbiAgICB9XG4gIH1cbiAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXG4gIHN0YXRlLmxlbmd0aCArPSBsZW47XG5cbiAgdmFyIHJldCA9IHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIC8vIHdlIG11c3QgZW5zdXJlIHRoYXQgcHJldmlvdXMgbmVlZERyYWluIHdpbGwgbm90IGJlIHJlc2V0IHRvIGZhbHNlLlxuICBpZiAoIXJldCkgc3RhdGUubmVlZERyYWluID0gdHJ1ZTtcblxuICBpZiAoc3RhdGUud3JpdGluZyB8fCBzdGF0ZS5jb3JrZWQpIHtcbiAgICB2YXIgbGFzdCA9IHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3Q7XG4gICAgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IHtcbiAgICAgIGNodW5rOiBjaHVuayxcbiAgICAgIGVuY29kaW5nOiBlbmNvZGluZyxcbiAgICAgIGlzQnVmOiBpc0J1ZixcbiAgICAgIGNhbGxiYWNrOiBjYixcbiAgICAgIG5leHQ6IG51bGxcbiAgICB9O1xuICAgIGlmIChsYXN0KSB7XG4gICAgICBsYXN0Lm5leHQgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIH1cbiAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudCArPSAxO1xuICB9IGVsc2Uge1xuICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmFsc2UsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIHdyaXRldiwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHN0YXRlLndyaXRlbGVuID0gbGVuO1xuICBzdGF0ZS53cml0ZWNiID0gY2I7XG4gIHN0YXRlLndyaXRpbmcgPSB0cnVlO1xuICBzdGF0ZS5zeW5jID0gdHJ1ZTtcbiAgaWYgKHdyaXRldikgc3RyZWFtLl93cml0ZXYoY2h1bmssIHN0YXRlLm9ud3JpdGUpO2Vsc2Ugc3RyZWFtLl93cml0ZShjaHVuaywgZW5jb2RpbmcsIHN0YXRlLm9ud3JpdGUpO1xuICBzdGF0ZS5zeW5jID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGVFcnJvcihzdHJlYW0sIHN0YXRlLCBzeW5jLCBlciwgY2IpIHtcbiAgLS1zdGF0ZS5wZW5kaW5nY2I7XG5cbiAgaWYgKHN5bmMpIHtcbiAgICAvLyBkZWZlciB0aGUgY2FsbGJhY2sgaWYgd2UgYXJlIGJlaW5nIGNhbGxlZCBzeW5jaHJvbm91c2x5XG4gICAgLy8gdG8gYXZvaWQgcGlsaW5nIHVwIHRoaW5ncyBvbiB0aGUgc3RhY2tcbiAgICBwbmEubmV4dFRpY2soY2IsIGVyKTtcbiAgICAvLyB0aGlzIGNhbiBlbWl0IGZpbmlzaCwgYW5kIGl0IHdpbGwgYWx3YXlzIGhhcHBlblxuICAgIC8vIGFmdGVyIGVycm9yXG4gICAgcG5hLm5leHRUaWNrKGZpbmlzaE1heWJlLCBzdHJlYW0sIHN0YXRlKTtcbiAgICBzdHJlYW0uX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNhbGxlciBleHBlY3QgdGhpcyB0byBoYXBwZW4gYmVmb3JlIGlmXG4gICAgLy8gaXQgaXMgYXN5bmNcbiAgICBjYihlcik7XG4gICAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICAgIC8vIHRoaXMgY2FuIGVtaXQgZmluaXNoLCBidXQgZmluaXNoIG11c3RcbiAgICAvLyBhbHdheXMgZm9sbG93IGVycm9yXG4gICAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb253cml0ZVN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gIHN0YXRlLndyaXRpbmcgPSBmYWxzZTtcbiAgc3RhdGUud3JpdGVjYiA9IG51bGw7XG4gIHN0YXRlLmxlbmd0aCAtPSBzdGF0ZS53cml0ZWxlbjtcbiAgc3RhdGUud3JpdGVsZW4gPSAwO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlKHN0cmVhbSwgZXIpIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuICB2YXIgc3luYyA9IHN0YXRlLnN5bmM7XG4gIHZhciBjYiA9IHN0YXRlLndyaXRlY2I7XG5cbiAgb253cml0ZVN0YXRlVXBkYXRlKHN0YXRlKTtcblxuICBpZiAoZXIpIG9ud3JpdGVFcnJvcihzdHJlYW0sIHN0YXRlLCBzeW5jLCBlciwgY2IpO2Vsc2Uge1xuICAgIC8vIENoZWNrIGlmIHdlJ3JlIGFjdHVhbGx5IHJlYWR5IHRvIGZpbmlzaCwgYnV0IGRvbid0IGVtaXQgeWV0XG4gICAgdmFyIGZpbmlzaGVkID0gbmVlZEZpbmlzaChzdGF0ZSk7XG5cbiAgICBpZiAoIWZpbmlzaGVkICYmICFzdGF0ZS5jb3JrZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSB7XG4gICAgICBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoc3luYykge1xuICAgICAgLyo8cmVwbGFjZW1lbnQ+Ki9cbiAgICAgIGFzeW5jV3JpdGUoYWZ0ZXJXcml0ZSwgc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKTtcbiAgICAgIC8qPC9yZXBsYWNlbWVudD4qL1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlcldyaXRlKHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFmdGVyV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKSB7XG4gIGlmICghZmluaXNoZWQpIG9ud3JpdGVEcmFpbihzdHJlYW0sIHN0YXRlKTtcbiAgc3RhdGUucGVuZGluZ2NiLS07XG4gIGNiKCk7XG4gIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xufVxuXG4vLyBNdXN0IGZvcmNlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBvbiBuZXh0VGljaywgc28gdGhhdCB3ZSBkb24ndFxuLy8gZW1pdCAnZHJhaW4nIGJlZm9yZSB0aGUgd3JpdGUoKSBjb25zdW1lciBnZXRzIHRoZSAnZmFsc2UnIHJldHVyblxuLy8gdmFsdWUsIGFuZCBoYXMgYSBjaGFuY2UgdG8gYXR0YWNoIGEgJ2RyYWluJyBsaXN0ZW5lci5cbmZ1bmN0aW9uIG9ud3JpdGVEcmFpbihzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUubmVlZERyYWluKSB7XG4gICAgc3RhdGUubmVlZERyYWluID0gZmFsc2U7XG4gICAgc3RyZWFtLmVtaXQoJ2RyYWluJyk7XG4gIH1cbn1cblxuLy8gaWYgdGhlcmUncyBzb21ldGhpbmcgaW4gdGhlIGJ1ZmZlciB3YWl0aW5nLCB0aGVuIHByb2Nlc3MgaXRcbmZ1bmN0aW9uIGNsZWFyQnVmZmVyKHN0cmVhbSwgc3RhdGUpIHtcbiAgc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyA9IHRydWU7XG4gIHZhciBlbnRyeSA9IHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdDtcblxuICBpZiAoc3RyZWFtLl93cml0ZXYgJiYgZW50cnkgJiYgZW50cnkubmV4dCkge1xuICAgIC8vIEZhc3QgY2FzZSwgd3JpdGUgZXZlcnl0aGluZyB1c2luZyBfd3JpdGV2KClcbiAgICB2YXIgbCA9IHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50O1xuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXkobCk7XG4gICAgdmFyIGhvbGRlciA9IHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZTtcbiAgICBob2xkZXIuZW50cnkgPSBlbnRyeTtcblxuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGFsbEJ1ZmZlcnMgPSB0cnVlO1xuICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgYnVmZmVyW2NvdW50XSA9IGVudHJ5O1xuICAgICAgaWYgKCFlbnRyeS5pc0J1ZikgYWxsQnVmZmVycyA9IGZhbHNlO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG4gICAgYnVmZmVyLmFsbEJ1ZmZlcnMgPSBhbGxCdWZmZXJzO1xuXG4gICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB0cnVlLCBzdGF0ZS5sZW5ndGgsIGJ1ZmZlciwgJycsIGhvbGRlci5maW5pc2gpO1xuXG4gICAgLy8gZG9Xcml0ZSBpcyBhbG1vc3QgYWx3YXlzIGFzeW5jLCBkZWZlciB0aGVzZSB0byBzYXZlIGEgYml0IG9mIHRpbWVcbiAgICAvLyBhcyB0aGUgaG90IHBhdGggZW5kcyB3aXRoIGRvV3JpdGVcbiAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgICBpZiAoaG9sZGVyLm5leHQpIHtcbiAgICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IGhvbGRlci5uZXh0O1xuICAgICAgaG9sZGVyLm5leHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBuZXcgQ29ya2VkUmVxdWVzdChzdGF0ZSk7XG4gICAgfVxuICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTbG93IGNhc2UsIHdyaXRlIGNodW5rcyBvbmUtYnktb25lXG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICB2YXIgY2h1bmsgPSBlbnRyeS5jaHVuaztcbiAgICAgIHZhciBlbmNvZGluZyA9IGVudHJ5LmVuY29kaW5nO1xuICAgICAgdmFyIGNiID0gZW50cnkuY2FsbGJhY2s7XG4gICAgICB2YXIgbGVuID0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG5cbiAgICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmFsc2UsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gICAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudC0tO1xuICAgICAgLy8gaWYgd2UgZGlkbid0IGNhbGwgdGhlIG9ud3JpdGUgaW1tZWRpYXRlbHksIHRoZW5cbiAgICAgIC8vIGl0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byB3YWl0IHVudGlsIGl0IGRvZXMuXG4gICAgICAvLyBhbHNvLCB0aGF0IG1lYW5zIHRoYXQgdGhlIGNodW5rIGFuZCBjYiBhcmUgY3VycmVudGx5XG4gICAgICAvLyBiZWluZyBwcm9jZXNzZWQsIHNvIG1vdmUgdGhlIGJ1ZmZlciBjb3VudGVyIHBhc3QgdGhlbS5cbiAgICAgIGlmIChzdGF0ZS53cml0aW5nKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbnRyeSA9PT0gbnVsbCkgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gIH1cblxuICBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPSBlbnRyeTtcbiAgc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyA9IGZhbHNlO1xufVxuXG5Xcml0YWJsZS5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobmV3IEVycm9yKCdfd3JpdGUoKSBpcyBub3QgaW1wbGVtZW50ZWQnKSk7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuX3dyaXRldiA9IG51bGw7XG5cbldyaXRhYmxlLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIGlmICh0eXBlb2YgY2h1bmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGNodW5rO1xuICAgIGNodW5rID0gbnVsbDtcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICBpZiAoY2h1bmsgIT09IG51bGwgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCkgdGhpcy53cml0ZShjaHVuaywgZW5jb2RpbmcpO1xuXG4gIC8vIC5lbmQoKSBmdWxseSB1bmNvcmtzXG4gIGlmIChzdGF0ZS5jb3JrZWQpIHtcbiAgICBzdGF0ZS5jb3JrZWQgPSAxO1xuICAgIHRoaXMudW5jb3JrKCk7XG4gIH1cblxuICAvLyBpZ25vcmUgdW5uZWNlc3NhcnkgZW5kKCkgY2FsbHMuXG4gIGlmICghc3RhdGUuZW5kaW5nICYmICFzdGF0ZS5maW5pc2hlZCkgZW5kV3JpdGFibGUodGhpcywgc3RhdGUsIGNiKTtcbn07XG5cbmZ1bmN0aW9uIG5lZWRGaW5pc2goc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmVuZGluZyAmJiBzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID09PSBudWxsICYmICFzdGF0ZS5maW5pc2hlZCAmJiAhc3RhdGUud3JpdGluZztcbn1cbmZ1bmN0aW9uIGNhbGxGaW5hbChzdHJlYW0sIHN0YXRlKSB7XG4gIHN0cmVhbS5fZmluYWwoZnVuY3Rpb24gKGVycikge1xuICAgIHN0YXRlLnBlbmRpbmdjYi0tO1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgfVxuICAgIHN0YXRlLnByZWZpbmlzaGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0uZW1pdCgncHJlZmluaXNoJyk7XG4gICAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5wcmVmaW5pc2hlZCAmJiAhc3RhdGUuZmluYWxDYWxsZWQpIHtcbiAgICBpZiAodHlwZW9mIHN0cmVhbS5fZmluYWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN0YXRlLnBlbmRpbmdjYisrO1xuICAgICAgc3RhdGUuZmluYWxDYWxsZWQgPSB0cnVlO1xuICAgICAgcG5hLm5leHRUaWNrKGNhbGxGaW5hbCwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnByZWZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5lbWl0KCdwcmVmaW5pc2gnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbmVlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuICBpZiAobmVlZCkge1xuICAgIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKTtcbiAgICBpZiAoc3RhdGUucGVuZGluZ2NiID09PSAwKSB7XG4gICAgICBzdGF0ZS5maW5pc2hlZCA9IHRydWU7XG4gICAgICBzdHJlYW0uZW1pdCgnZmluaXNoJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZWVkO1xufVxuXG5mdW5jdGlvbiBlbmRXcml0YWJsZShzdHJlYW0sIHN0YXRlLCBjYikge1xuICBzdGF0ZS5lbmRpbmcgPSB0cnVlO1xuICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbiAgaWYgKGNiKSB7XG4gICAgaWYgKHN0YXRlLmZpbmlzaGVkKSBwbmEubmV4dFRpY2soY2IpO2Vsc2Ugc3RyZWFtLm9uY2UoJ2ZpbmlzaCcsIGNiKTtcbiAgfVxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG4gIHN0cmVhbS53cml0YWJsZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbkNvcmtlZEZpbmlzaChjb3JrUmVxLCBzdGF0ZSwgZXJyKSB7XG4gIHZhciBlbnRyeSA9IGNvcmtSZXEuZW50cnk7XG4gIGNvcmtSZXEuZW50cnkgPSBudWxsO1xuICB3aGlsZSAoZW50cnkpIHtcbiAgICB2YXIgY2IgPSBlbnRyeS5jYWxsYmFjaztcbiAgICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgICBjYihlcnIpO1xuICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgfVxuICBpZiAoc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlKSB7XG4gICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlLm5leHQgPSBjb3JrUmVxO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IGNvcmtSZXE7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLnByb3RvdHlwZSwgJ2Rlc3Ryb3llZCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3dyaXRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gd2UgaWdub3JlIHRoZSB2YWx1ZSBpZiB0aGUgc3RyZWFtXG4gICAgLy8gaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgIGlmICghdGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRoZSB1c2VyIGlzIGV4cGxpY2l0bHlcbiAgICAvLyBtYW5hZ2luZyBkZXN0cm95ZWRcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHZhbHVlO1xuICB9XG59KTtcblxuV3JpdGFibGUucHJvdG90eXBlLmRlc3Ryb3kgPSBkZXN0cm95SW1wbC5kZXN0cm95O1xuV3JpdGFibGUucHJvdG90eXBlLl91bmRlc3Ryb3kgPSBkZXN0cm95SW1wbC51bmRlc3Ryb3k7XG5Xcml0YWJsZS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB0aGlzLmVuZCgpO1xuICBjYihlcnIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG5mdW5jdGlvbiBjb3B5QnVmZmVyKHNyYywgdGFyZ2V0LCBvZmZzZXQpIHtcbiAgc3JjLmNvcHkodGFyZ2V0LCBvZmZzZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQnVmZmVyTGlzdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnVmZmVyTGlzdCk7XG5cbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2godikge1xuICAgIHZhciBlbnRyeSA9IHsgZGF0YTogdiwgbmV4dDogbnVsbCB9O1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHRoaXMudGFpbC5uZXh0ID0gZW50cnk7ZWxzZSB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgICB0aGlzLnRhaWwgPSBlbnRyeTtcbiAgICArK3RoaXMubGVuZ3RoO1xuICB9O1xuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiB1bnNoaWZ0KHYpIHtcbiAgICB2YXIgZW50cnkgPSB7IGRhdGE6IHYsIG5leHQ6IHRoaXMuaGVhZCB9O1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgdGhpcy50YWlsID0gZW50cnk7XG4gICAgdGhpcy5oZWFkID0gZW50cnk7XG4gICAgKyt0aGlzLmxlbmd0aDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciByZXQgPSB0aGlzLmhlYWQuZGF0YTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7ZWxzZSB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAtLXRoaXMubGVuZ3RoO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24gam9pbihzKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gICAgdmFyIHAgPSB0aGlzLmhlYWQ7XG4gICAgdmFyIHJldCA9ICcnICsgcC5kYXRhO1xuICAgIHdoaWxlIChwID0gcC5uZXh0KSB7XG4gICAgICByZXQgKz0gcyArIHAuZGF0YTtcbiAgICB9cmV0dXJuIHJldDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQobikge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHJldHVybiB0aGlzLmhlYWQuZGF0YTtcbiAgICB2YXIgcmV0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG4gPj4+IDApO1xuICAgIHZhciBwID0gdGhpcy5oZWFkO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAocCkge1xuICAgICAgY29weUJ1ZmZlcihwLmRhdGEsIHJldCwgaSk7XG4gICAgICBpICs9IHAuZGF0YS5sZW5ndGg7XG4gICAgICBwID0gcC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIHJldHVybiBCdWZmZXJMaXN0O1xufSgpO1xuXG5pZiAodXRpbCAmJiB1dGlsLmluc3BlY3QgJiYgdXRpbC5pbnNwZWN0LmN1c3RvbSkge1xuICBtb2R1bGUuZXhwb3J0cy5wcm90b3R5cGVbdXRpbC5pbnNwZWN0LmN1c3RvbV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9iaiA9IHV0aWwuaW5zcGVjdCh7IGxlbmd0aDogdGhpcy5sZW5ndGggfSk7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZSArICcgJyArIG9iajtcbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBwbmEgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8vIHVuZG9jdW1lbnRlZCBjYigpIEFQSSwgbmVlZGVkIGZvciBjb3JlLCBub3QgZm9yIHB1YmxpYyBBUElcbmZ1bmN0aW9uIGRlc3Ryb3koZXJyLCBjYikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciByZWFkYWJsZURlc3Ryb3llZCA9IHRoaXMuX3JlYWRhYmxlU3RhdGUgJiYgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIHZhciB3cml0YWJsZURlc3Ryb3llZCA9IHRoaXMuX3dyaXRhYmxlU3RhdGUgJiYgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG5cbiAgaWYgKHJlYWRhYmxlRGVzdHJveWVkIHx8IHdyaXRhYmxlRGVzdHJveWVkKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICBjYihlcnIpO1xuICAgIH0gZWxzZSBpZiAoZXJyICYmICghdGhpcy5fd3JpdGFibGVTdGF0ZSB8fCAhdGhpcy5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQpKSB7XG4gICAgICBwbmEubmV4dFRpY2soZW1pdEVycm9yTlQsIHRoaXMsIGVycik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gd2Ugc2V0IGRlc3Ryb3llZCB0byB0cnVlIGJlZm9yZSBmaXJpbmcgZXJyb3IgY2FsbGJhY2tzIGluIG9yZGVyXG4gIC8vIHRvIG1ha2UgaXQgcmUtZW50cmFuY2Ugc2FmZSBpbiBjYXNlIGRlc3Ryb3koKSBpcyBjYWxsZWQgd2l0aGluIGNhbGxiYWNrc1xuXG4gIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlKSB7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgLy8gaWYgdGhpcyBpcyBhIGR1cGxleCBzdHJlYW0gbWFyayB0aGUgd3JpdGFibGUgcGFydCBhcyBkZXN0cm95ZWQgYXMgd2VsbFxuICBpZiAodGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHRoaXMuX2Rlc3Ryb3koZXJyIHx8IG51bGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoIWNiICYmIGVycikge1xuICAgICAgcG5hLm5leHRUaWNrKGVtaXRFcnJvck5ULCBfdGhpcywgZXJyKTtcbiAgICAgIGlmIChfdGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgICAgICBfdGhpcy5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2IpIHtcbiAgICAgIGNiKGVycik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdW5kZXN0cm95KCkge1xuICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVtaXRFcnJvck5UKHNlbGYsIGVycikge1xuICBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gIHVuZGVzdHJveTogdW5kZXN0cm95XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9yZWFkYWJsZS5qcycpO1xuZXhwb3J0cy5TdHJlYW0gPSBleHBvcnRzO1xuZXhwb3J0cy5SZWFkYWJsZSA9IGV4cG9ydHM7XG5leHBvcnRzLldyaXRhYmxlID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV93cml0YWJsZS5qcycpO1xuZXhwb3J0cy5EdXBsZXggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX2R1cGxleC5qcycpO1xuZXhwb3J0cy5UcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcycpO1xuZXhwb3J0cy5QYXNzVGhyb3VnaCA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMnKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgaXNFbmNvZGluZyA9IEJ1ZmZlci5pc0VuY29kaW5nIHx8IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBlbmNvZGluZyA9ICcnICsgZW5jb2Rpbmc7XG4gIHN3aXRjaCAoZW5jb2RpbmcgJiYgZW5jb2RpbmcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6Y2FzZSAndXRmOCc6Y2FzZSAndXRmLTgnOmNhc2UgJ2FzY2lpJzpjYXNlICdiaW5hcnknOmNhc2UgJ2Jhc2U2NCc6Y2FzZSAndWNzMic6Y2FzZSAndWNzLTInOmNhc2UgJ3V0ZjE2bGUnOmNhc2UgJ3V0Zi0xNmxlJzpjYXNlICdyYXcnOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gX25vcm1hbGl6ZUVuY29kaW5nKGVuYykge1xuICBpZiAoIWVuYykgcmV0dXJuICd1dGY4JztcbiAgdmFyIHJldHJpZWQ7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmMpIHtcbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gJ3V0ZjgnO1xuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuICd1dGYxNmxlJztcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gJ2xhdGluMSc7XG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGVuYztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChyZXRyaWVkKSByZXR1cm47IC8vIHVuZGVmaW5lZFxuICAgICAgICBlbmMgPSAoJycgKyBlbmMpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHJpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRG8gbm90IGNhY2hlIGBCdWZmZXIuaXNFbmNvZGluZ2Agd2hlbiBjaGVja2luZyBlbmNvZGluZyBuYW1lcyBhcyBzb21lXG4vLyBtb2R1bGVzIG1vbmtleS1wYXRjaCBpdCB0byBzdXBwb3J0IGFkZGl0aW9uYWwgZW5jb2RpbmdzXG5mdW5jdGlvbiBub3JtYWxpemVFbmNvZGluZyhlbmMpIHtcbiAgdmFyIG5lbmMgPSBfbm9ybWFsaXplRW5jb2RpbmcoZW5jKTtcbiAgaWYgKHR5cGVvZiBuZW5jICE9PSAnc3RyaW5nJyAmJiAoQnVmZmVyLmlzRW5jb2RpbmcgPT09IGlzRW5jb2RpbmcgfHwgIWlzRW5jb2RpbmcoZW5jKSkpIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuYyk7XG4gIHJldHVybiBuZW5jIHx8IGVuYztcbn1cblxuLy8gU3RyaW5nRGVjb2RlciBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIGVmZmljaWVudGx5IHNwbGl0dGluZyBhIHNlcmllcyBvZlxuLy8gYnVmZmVycyBpbnRvIGEgc2VyaWVzIG9mIEpTIHN0cmluZ3Mgd2l0aG91dCBicmVha2luZyBhcGFydCBtdWx0aS1ieXRlXG4vLyBjaGFyYWN0ZXJzLlxuZXhwb3J0cy5TdHJpbmdEZWNvZGVyID0gU3RyaW5nRGVjb2RlcjtcbmZ1bmN0aW9uIFN0cmluZ0RlY29kZXIoZW5jb2RpbmcpIHtcbiAgdGhpcy5lbmNvZGluZyA9IG5vcm1hbGl6ZUVuY29kaW5nKGVuY29kaW5nKTtcbiAgdmFyIG5iO1xuICBzd2l0Y2ggKHRoaXMuZW5jb2RpbmcpIHtcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIHRoaXMudGV4dCA9IHV0ZjE2VGV4dDtcbiAgICAgIHRoaXMuZW5kID0gdXRmMTZFbmQ7XG4gICAgICBuYiA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd1dGY4JzpcbiAgICAgIHRoaXMuZmlsbExhc3QgPSB1dGY4RmlsbExhc3Q7XG4gICAgICBuYiA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgdGhpcy50ZXh0ID0gYmFzZTY0VGV4dDtcbiAgICAgIHRoaXMuZW5kID0gYmFzZTY0RW5kO1xuICAgICAgbmIgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXMud3JpdGUgPSBzaW1wbGVXcml0ZTtcbiAgICAgIHRoaXMuZW5kID0gc2ltcGxlRW5kO1xuICAgICAgcmV0dXJuO1xuICB9XG4gIHRoaXMubGFzdE5lZWQgPSAwO1xuICB0aGlzLmxhc3RUb3RhbCA9IDA7XG4gIHRoaXMubGFzdENoYXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobmIpO1xufVxuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChidWYpIHtcbiAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHJldHVybiAnJztcbiAgdmFyIHI7XG4gIHZhciBpO1xuICBpZiAodGhpcy5sYXN0TmVlZCkge1xuICAgIHIgPSB0aGlzLmZpbGxMYXN0KGJ1Zik7XG4gICAgaWYgKHIgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuICAgIGkgPSB0aGlzLmxhc3ROZWVkO1xuICAgIHRoaXMubGFzdE5lZWQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGkgPSAwO1xuICB9XG4gIGlmIChpIDwgYnVmLmxlbmd0aCkgcmV0dXJuIHIgPyByICsgdGhpcy50ZXh0KGJ1ZiwgaSkgOiB0aGlzLnRleHQoYnVmLCBpKTtcbiAgcmV0dXJuIHIgfHwgJyc7XG59O1xuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5lbmQgPSB1dGY4RW5kO1xuXG4vLyBSZXR1cm5zIG9ubHkgY29tcGxldGUgY2hhcmFjdGVycyBpbiBhIEJ1ZmZlclxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUudGV4dCA9IHV0ZjhUZXh0O1xuXG4vLyBBdHRlbXB0cyB0byBjb21wbGV0ZSBhIHBhcnRpYWwgbm9uLVVURi04IGNoYXJhY3RlciB1c2luZyBieXRlcyBmcm9tIGEgQnVmZmVyXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5maWxsTGFzdCA9IGZ1bmN0aW9uIChidWYpIHtcbiAgaWYgKHRoaXMubGFzdE5lZWQgPD0gYnVmLmxlbmd0aCkge1xuICAgIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZCwgMCwgdGhpcy5sYXN0TmVlZCk7XG4gICAgcmV0dXJuIHRoaXMubGFzdENoYXIudG9TdHJpbmcodGhpcy5lbmNvZGluZywgMCwgdGhpcy5sYXN0VG90YWwpO1xuICB9XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZCwgMCwgYnVmLmxlbmd0aCk7XG4gIHRoaXMubGFzdE5lZWQgLT0gYnVmLmxlbmd0aDtcbn07XG5cbi8vIENoZWNrcyB0aGUgdHlwZSBvZiBhIFVURi04IGJ5dGUsIHdoZXRoZXIgaXQncyBBU0NJSSwgYSBsZWFkaW5nIGJ5dGUsIG9yIGFcbi8vIGNvbnRpbnVhdGlvbiBieXRlLiBJZiBhbiBpbnZhbGlkIGJ5dGUgaXMgZGV0ZWN0ZWQsIC0yIGlzIHJldHVybmVkLlxuZnVuY3Rpb24gdXRmOENoZWNrQnl0ZShieXRlKSB7XG4gIGlmIChieXRlIDw9IDB4N0YpIHJldHVybiAwO2Vsc2UgaWYgKGJ5dGUgPj4gNSA9PT0gMHgwNikgcmV0dXJuIDI7ZWxzZSBpZiAoYnl0ZSA+PiA0ID09PSAweDBFKSByZXR1cm4gMztlbHNlIGlmIChieXRlID4+IDMgPT09IDB4MUUpIHJldHVybiA0O1xuICByZXR1cm4gYnl0ZSA+PiA2ID09PSAweDAyID8gLTEgOiAtMjtcbn1cblxuLy8gQ2hlY2tzIGF0IG1vc3QgMyBieXRlcyBhdCB0aGUgZW5kIG9mIGEgQnVmZmVyIGluIG9yZGVyIHRvIGRldGVjdCBhblxuLy8gaW5jb21wbGV0ZSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3Rlci4gVGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyAoMiwgMywgb3IgNClcbi8vIG5lZWRlZCB0byBjb21wbGV0ZSB0aGUgVVRGLTggY2hhcmFjdGVyIChpZiBhcHBsaWNhYmxlKSBhcmUgcmV0dXJuZWQuXG5mdW5jdGlvbiB1dGY4Q2hlY2tJbmNvbXBsZXRlKHNlbGYsIGJ1ZiwgaSkge1xuICB2YXIgaiA9IGJ1Zi5sZW5ndGggLSAxO1xuICBpZiAoaiA8IGkpIHJldHVybiAwO1xuICB2YXIgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkgc2VsZi5sYXN0TmVlZCA9IG5iIC0gMTtcbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgaWYgKC0taiA8IGkgfHwgbmIgPT09IC0yKSByZXR1cm4gMDtcbiAgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkgc2VsZi5sYXN0TmVlZCA9IG5iIC0gMjtcbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgaWYgKC0taiA8IGkgfHwgbmIgPT09IC0yKSByZXR1cm4gMDtcbiAgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkge1xuICAgICAgaWYgKG5iID09PSAyKSBuYiA9IDA7ZWxzZSBzZWxmLmxhc3ROZWVkID0gbmIgLSAzO1xuICAgIH1cbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbi8vIFZhbGlkYXRlcyBhcyBtYW55IGNvbnRpbnVhdGlvbiBieXRlcyBmb3IgYSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3RlciBhc1xuLy8gbmVlZGVkIG9yIGFyZSBhdmFpbGFibGUuIElmIHdlIHNlZSBhIG5vbi1jb250aW51YXRpb24gYnl0ZSB3aGVyZSB3ZSBleHBlY3Rcbi8vIG9uZSwgd2UgXCJyZXBsYWNlXCIgdGhlIHZhbGlkYXRlZCBjb250aW51YXRpb24gYnl0ZXMgd2UndmUgc2VlbiBzbyBmYXIgd2l0aFxuLy8gYSBzaW5nbGUgVVRGLTggcmVwbGFjZW1lbnQgY2hhcmFjdGVyICgnXFx1ZmZmZCcpLCB0byBtYXRjaCB2OCdzIFVURi04IGRlY29kaW5nXG4vLyBiZWhhdmlvci4gVGhlIGNvbnRpbnVhdGlvbiBieXRlIGNoZWNrIGlzIGluY2x1ZGVkIHRocmVlIHRpbWVzIGluIHRoZSBjYXNlXG4vLyB3aGVyZSBhbGwgb2YgdGhlIGNvbnRpbnVhdGlvbiBieXRlcyBmb3IgYSBjaGFyYWN0ZXIgZXhpc3QgaW4gdGhlIHNhbWUgYnVmZmVyLlxuLy8gSXQgaXMgYWxzbyBkb25lIHRoaXMgd2F5IGFzIGEgc2xpZ2h0IHBlcmZvcm1hbmNlIGluY3JlYXNlIGluc3RlYWQgb2YgdXNpbmcgYVxuLy8gbG9vcC5cbmZ1bmN0aW9uIHV0ZjhDaGVja0V4dHJhQnl0ZXMoc2VsZiwgYnVmLCBwKSB7XG4gIGlmICgoYnVmWzBdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICBzZWxmLmxhc3ROZWVkID0gMDtcbiAgICByZXR1cm4gJ1xcdWZmZmQnO1xuICB9XG4gIGlmIChzZWxmLmxhc3ROZWVkID4gMSAmJiBidWYubGVuZ3RoID4gMSkge1xuICAgIGlmICgoYnVmWzFdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICAgIHNlbGYubGFzdE5lZWQgPSAxO1xuICAgICAgcmV0dXJuICdcXHVmZmZkJztcbiAgICB9XG4gICAgaWYgKHNlbGYubGFzdE5lZWQgPiAyICYmIGJ1Zi5sZW5ndGggPiAyKSB7XG4gICAgICBpZiAoKGJ1ZlsyXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgICAgIHNlbGYubGFzdE5lZWQgPSAyO1xuICAgICAgICByZXR1cm4gJ1xcdWZmZmQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBdHRlbXB0cyB0byBjb21wbGV0ZSBhIG11bHRpLWJ5dGUgVVRGLTggY2hhcmFjdGVyIHVzaW5nIGJ5dGVzIGZyb20gYSBCdWZmZXIuXG5mdW5jdGlvbiB1dGY4RmlsbExhc3QoYnVmKSB7XG4gIHZhciBwID0gdGhpcy5sYXN0VG90YWwgLSB0aGlzLmxhc3ROZWVkO1xuICB2YXIgciA9IHV0ZjhDaGVja0V4dHJhQnl0ZXModGhpcywgYnVmLCBwKTtcbiAgaWYgKHIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHI7XG4gIGlmICh0aGlzLmxhc3ROZWVkIDw9IGJ1Zi5sZW5ndGgpIHtcbiAgICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCBwLCAwLCB0aGlzLmxhc3ROZWVkKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0Q2hhci50b1N0cmluZyh0aGlzLmVuY29kaW5nLCAwLCB0aGlzLmxhc3RUb3RhbCk7XG4gIH1cbiAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgcCwgMCwgYnVmLmxlbmd0aCk7XG4gIHRoaXMubGFzdE5lZWQgLT0gYnVmLmxlbmd0aDtcbn1cblxuLy8gUmV0dXJucyBhbGwgY29tcGxldGUgVVRGLTggY2hhcmFjdGVycyBpbiBhIEJ1ZmZlci4gSWYgdGhlIEJ1ZmZlciBlbmRlZCBvbiBhXG4vLyBwYXJ0aWFsIGNoYXJhY3RlciwgdGhlIGNoYXJhY3RlcidzIGJ5dGVzIGFyZSBidWZmZXJlZCB1bnRpbCB0aGUgcmVxdWlyZWRcbi8vIG51bWJlciBvZiBieXRlcyBhcmUgYXZhaWxhYmxlLlxuZnVuY3Rpb24gdXRmOFRleHQoYnVmLCBpKSB7XG4gIHZhciB0b3RhbCA9IHV0ZjhDaGVja0luY29tcGxldGUodGhpcywgYnVmLCBpKTtcbiAgaWYgKCF0aGlzLmxhc3ROZWVkKSByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGY4JywgaSk7XG4gIHRoaXMubGFzdFRvdGFsID0gdG90YWw7XG4gIHZhciBlbmQgPSBidWYubGVuZ3RoIC0gKHRvdGFsIC0gdGhpcy5sYXN0TmVlZCk7XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIDAsIGVuZCk7XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ3V0ZjgnLCBpLCBlbmQpO1xufVxuXG4vLyBGb3IgVVRGLTgsIGEgcmVwbGFjZW1lbnQgY2hhcmFjdGVyIGlzIGFkZGVkIHdoZW4gZW5kaW5nIG9uIGEgcGFydGlhbFxuLy8gY2hhcmFjdGVyLlxuZnVuY3Rpb24gdXRmOEVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkgcmV0dXJuIHIgKyAnXFx1ZmZmZCc7XG4gIHJldHVybiByO1xufVxuXG4vLyBVVEYtMTZMRSB0eXBpY2FsbHkgbmVlZHMgdHdvIGJ5dGVzIHBlciBjaGFyYWN0ZXIsIGJ1dCBldmVuIGlmIHdlIGhhdmUgYW4gZXZlblxuLy8gbnVtYmVyIG9mIGJ5dGVzIGF2YWlsYWJsZSwgd2UgbmVlZCB0byBjaGVjayBpZiB3ZSBlbmQgb24gYSBsZWFkaW5nL2hpZ2hcbi8vIHN1cnJvZ2F0ZS4gSW4gdGhhdCBjYXNlLCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBuZXh0IHR3byBieXRlcyBpbiBvcmRlciB0b1xuLy8gZGVjb2RlIHRoZSBsYXN0IGNoYXJhY3RlciBwcm9wZXJseS5cbmZ1bmN0aW9uIHV0ZjE2VGV4dChidWYsIGkpIHtcbiAgaWYgKChidWYubGVuZ3RoIC0gaSkgJSAyID09PSAwKSB7XG4gICAgdmFyIHIgPSBidWYudG9TdHJpbmcoJ3V0ZjE2bGUnLCBpKTtcbiAgICBpZiAocikge1xuICAgICAgdmFyIGMgPSByLmNoYXJDb2RlQXQoci5sZW5ndGggLSAxKTtcbiAgICAgIGlmIChjID49IDB4RDgwMCAmJiBjIDw9IDB4REJGRikge1xuICAgICAgICB0aGlzLmxhc3ROZWVkID0gMjtcbiAgICAgICAgdGhpcy5sYXN0VG90YWwgPSA0O1xuICAgICAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAyXTtcbiAgICAgICAgdGhpcy5sYXN0Q2hhclsxXSA9IGJ1ZltidWYubGVuZ3RoIC0gMV07XG4gICAgICAgIHJldHVybiByLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgdGhpcy5sYXN0TmVlZCA9IDE7XG4gIHRoaXMubGFzdFRvdGFsID0gMjtcbiAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMV07XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ3V0ZjE2bGUnLCBpLCBidWYubGVuZ3RoIC0gMSk7XG59XG5cbi8vIEZvciBVVEYtMTZMRSB3ZSBkbyBub3QgZXhwbGljaXRseSBhcHBlbmQgc3BlY2lhbCByZXBsYWNlbWVudCBjaGFyYWN0ZXJzIGlmIHdlXG4vLyBlbmQgb24gYSBwYXJ0aWFsIGNoYXJhY3Rlciwgd2Ugc2ltcGx5IGxldCB2OCBoYW5kbGUgdGhhdC5cbmZ1bmN0aW9uIHV0ZjE2RW5kKGJ1Zikge1xuICB2YXIgciA9IGJ1ZiAmJiBidWYubGVuZ3RoID8gdGhpcy53cml0ZShidWYpIDogJyc7XG4gIGlmICh0aGlzLmxhc3ROZWVkKSB7XG4gICAgdmFyIGVuZCA9IHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZDtcbiAgICByZXR1cm4gciArIHRoaXMubGFzdENoYXIudG9TdHJpbmcoJ3V0ZjE2bGUnLCAwLCBlbmQpO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBiYXNlNjRUZXh0KGJ1ZiwgaSkge1xuICB2YXIgbiA9IChidWYubGVuZ3RoIC0gaSkgJSAzO1xuICBpZiAobiA9PT0gMCkgcmV0dXJuIGJ1Zi50b1N0cmluZygnYmFzZTY0JywgaSk7XG4gIHRoaXMubGFzdE5lZWQgPSAzIC0gbjtcbiAgdGhpcy5sYXN0VG90YWwgPSAzO1xuICBpZiAobiA9PT0gMSkge1xuICAgIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDJdO1xuICAgIHRoaXMubGFzdENoYXJbMV0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICB9XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcsIGksIGJ1Zi5sZW5ndGggLSBuKTtcbn1cblxuZnVuY3Rpb24gYmFzZTY0RW5kKGJ1Zikge1xuICB2YXIgciA9IGJ1ZiAmJiBidWYubGVuZ3RoID8gdGhpcy53cml0ZShidWYpIDogJyc7XG4gIGlmICh0aGlzLmxhc3ROZWVkKSByZXR1cm4gciArIHRoaXMubGFzdENoYXIudG9TdHJpbmcoJ2Jhc2U2NCcsIDAsIDMgLSB0aGlzLmxhc3ROZWVkKTtcbiAgcmV0dXJuIHI7XG59XG5cbi8vIFBhc3MgYnl0ZXMgb24gdGhyb3VnaCBmb3Igc2luZ2xlLWJ5dGUgZW5jb2RpbmdzIChlLmcuIGFzY2lpLCBsYXRpbjEsIGhleClcbmZ1bmN0aW9uIHNpbXBsZVdyaXRlKGJ1Zikge1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcpO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVFbmQoYnVmKSB7XG4gIHJldHVybiBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xufSIsInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCdyZWFkYWJsZS1zdHJlYW0nKS5UcmFuc2Zvcm1cbiAgLCBpbmhlcml0cyAgPSByZXF1aXJlKCd1dGlsJykuaW5oZXJpdHNcbiAgLCB4dGVuZCAgICAgPSByZXF1aXJlKCd4dGVuZCcpXG5cbmZ1bmN0aW9uIERlc3Ryb3lhYmxlVHJhbnNmb3JtKG9wdHMpIHtcbiAgVHJhbnNmb3JtLmNhbGwodGhpcywgb3B0cylcbiAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2Vcbn1cblxuaW5oZXJpdHMoRGVzdHJveWFibGVUcmFuc2Zvcm0sIFRyYW5zZm9ybSlcblxuRGVzdHJveWFibGVUcmFuc2Zvcm0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihlcnIpIHtcbiAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuXG4gIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWVcbiAgXG4gIHZhciBzZWxmID0gdGhpc1xuICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgIGlmIChlcnIpXG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgIHNlbGYuZW1pdCgnY2xvc2UnKVxuICB9KVxufVxuXG4vLyBhIG5vb3AgX3RyYW5zZm9ybSBmdW5jdGlvblxuZnVuY3Rpb24gbm9vcCAoY2h1bmssIGVuYywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sobnVsbCwgY2h1bmspXG59XG5cblxuLy8gY3JlYXRlIGEgbmV3IGV4cG9ydCBmdW5jdGlvbiwgdXNlZCBieSBib3RoIHRoZSBtYWluIGV4cG9ydCBhbmRcbi8vIHRoZSAuY3RvciBleHBvcnQsIGNvbnRhaW5zIGNvbW1vbiBsb2dpYyBmb3IgZGVhbGluZyB3aXRoIGFyZ3VtZW50c1xuZnVuY3Rpb24gdGhyb3VnaDIgKGNvbnN0cnVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmx1c2ggICAgID0gdHJhbnNmb3JtXG4gICAgICB0cmFuc2Zvcm0gPSBvcHRpb25zXG4gICAgICBvcHRpb25zICAgPSB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtICE9ICdmdW5jdGlvbicpXG4gICAgICB0cmFuc2Zvcm0gPSBub29wXG5cbiAgICBpZiAodHlwZW9mIGZsdXNoICE9ICdmdW5jdGlvbicpXG4gICAgICBmbHVzaCA9IG51bGxcblxuICAgIHJldHVybiBjb25zdHJ1Y3Qob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaClcbiAgfVxufVxuXG5cbi8vIG1haW4gZXhwb3J0LCBqdXN0IG1ha2UgbWUgYSB0cmFuc2Zvcm0gc3RyZWFtIVxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdWdoMihmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICB2YXIgdDIgPSBuZXcgRGVzdHJveWFibGVUcmFuc2Zvcm0ob3B0aW9ucylcblxuICB0Mi5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIHQyLl9mbHVzaCA9IGZsdXNoXG5cbiAgcmV0dXJuIHQyXG59KVxuXG5cbi8vIG1ha2UgbWUgYSByZXVzYWJsZSBwcm90b3R5cGUgdGhhdCBJIGNhbiBgbmV3YCwgb3IgaW1wbGljaXRseSBgbmV3YFxuLy8gd2l0aCBhIGNvbnN0cnVjdG9yIGNhbGxcbm1vZHVsZS5leHBvcnRzLmN0b3IgPSB0aHJvdWdoMihmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICBmdW5jdGlvbiBUaHJvdWdoMiAob3ZlcnJpZGUpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGhyb3VnaDIpKVxuICAgICAgcmV0dXJuIG5ldyBUaHJvdWdoMihvdmVycmlkZSlcblxuICAgIHRoaXMub3B0aW9ucyA9IHh0ZW5kKG9wdGlvbnMsIG92ZXJyaWRlKVxuXG4gICAgRGVzdHJveWFibGVUcmFuc2Zvcm0uY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMpXG4gIH1cblxuICBpbmhlcml0cyhUaHJvdWdoMiwgRGVzdHJveWFibGVUcmFuc2Zvcm0pXG5cbiAgVGhyb3VnaDIucHJvdG90eXBlLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cblxuICBpZiAoZmx1c2gpXG4gICAgVGhyb3VnaDIucHJvdG90eXBlLl9mbHVzaCA9IGZsdXNoXG5cbiAgcmV0dXJuIFRocm91Z2gyXG59KVxuXG5cbm1vZHVsZS5leHBvcnRzLm9iaiA9IHRocm91Z2gyKGZ1bmN0aW9uIChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKSB7XG4gIHZhciB0MiA9IG5ldyBEZXN0cm95YWJsZVRyYW5zZm9ybSh4dGVuZCh7IG9iamVjdE1vZGU6IHRydWUsIGhpZ2hXYXRlck1hcms6IDE2IH0sIG9wdGlvbnMpKVxuXG4gIHQyLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cblxuICBpZiAoZmx1c2gpXG4gICAgdDIuX2ZsdXNoID0gZmx1c2hcblxuICByZXR1cm4gdDJcbn0pXG4iLCIvLyBSZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB3cmFwcGVkIGNhbGxiYWNrXG4vLyBUaGUgd3JhcHBlciBmdW5jdGlvbiBzaG91bGQgZG8gc29tZSBzdHVmZiwgYW5kIHJldHVybiBhXG4vLyBwcmVzdW1hYmx5IGRpZmZlcmVudCBjYWxsYmFjayBmdW5jdGlvbi5cbi8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IG93biBwcm9wZXJ0aWVzIGFyZSByZXRhaW5lZCwgc28gdGhhdFxuLy8gZGVjb3JhdGlvbnMgYW5kIHN1Y2ggYXJlIG5vdCBsb3N0IGFsb25nIHRoZSB3YXkuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweVxuZnVuY3Rpb24gd3JhcHB5IChmbiwgY2IpIHtcbiAgaWYgKGZuICYmIGNiKSByZXR1cm4gd3JhcHB5KGZuKShjYilcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25lZWQgd3JhcHBlciBmdW5jdGlvbicpXG5cbiAgT2JqZWN0LmtleXMoZm4pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICB3cmFwcGVyW2tdID0gZm5ba11cbiAgfSlcblxuICByZXR1cm4gd3JhcHBlclxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgdmFyIHJldCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgdmFyIGNiID0gYXJnc1thcmdzLmxlbmd0aC0xXVxuICAgIGlmICh0eXBlb2YgcmV0ID09PSAnZnVuY3Rpb24nICYmIHJldCAhPT0gY2IpIHtcbiAgICAgIE9iamVjdC5rZXlzKGNiKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIHJldFtrXSA9IGNiW2tdXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJfdHlwZW9mIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwib2JqIiwia2V5IiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwic3RhdGUiLCJtZXRob2QiLCJhcmciLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsIkNvbnRpbnVlU2VudGluZWwiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJlY29yZCIsInRyeUNhdGNoIiwidHlwZSIsImRvbmUiLCJmbiIsImNhbGwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJ0aGlzIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicnVudGltZSIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiQ29tcG9zZWRTdG9yZSIsIk9ic2VydmFibGVTdG9yZV8xIiwiT2JzZXJ2YWJsZVN0b3JlIiwiY2hpbGRyZW4iLCJzdXBlciIsIl9jaGlsZHJlbiIsImNoaWxkS2V5IiwiY2hpbGQiLCJfYWRkQ2hpbGQiLCJ1cGRhdGVGcm9tQ2hpbGQiLCJjaGlsZFZhbHVlIiwiZ2V0U3RhdGUiLCJwdXRTdGF0ZSIsInN1YnNjcmliZSIsIk1lcmdlZFN0b3JlIiwiX3VwZGF0ZVdob2xlU3RhdGUiLCJjaGlsZFN0YXRlcyIsIm1hcCIsImFzc2lnbiIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInNhZmVfZXZlbnRfZW1pdHRlcl8xIiwiZGVmYXVsdCIsImluaXRTdGF0ZSIsIl9zdGF0ZSIsIl9nZXRTdGF0ZSIsIm5ld1N0YXRlIiwiX3B1dFN0YXRlIiwiZW1pdCIsInVwZGF0ZVN0YXRlIiwicGFydGlhbFN0YXRlIiwiaGFuZGxlciIsIm9uIiwidW5zdWJzY3JpYmUiLCJyZW1vdmVMaXN0ZW5lciIsInN0b3JlQXNTdHJlYW0iLCJzdHJlYW1fMSIsIk9ic2VydmFibGVTdG9yZVN0cmVhbSIsIkR1cGxleCIsIm9ic1N0b3JlIiwib2JqZWN0TW9kZSIsInJlc3VtZSIsInBpcGUiLCJkZXN0Iiwib3B0aW9ucyIsIndyaXRlIiwiX3dyaXRlIiwiY2h1bmsiLCJfZW5jb2RpbmciLCJjYWxsYmFjayIsIl9yZWFkIiwiX3NpemUiLCJfZGVzdHJveSIsIl9fY3JlYXRlQmluZGluZyIsIm8iLCJtIiwiayIsImsyIiwiZ2V0IiwiX19leHBvcnRTdGFyIiwicCIsInN0b3JlVHJhbnNmb3JtU3RyZWFtIiwidGhyb3VnaDJfMSIsInN5bmNUcmFuc2Zvcm1GbiIsImNiIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJzb3VyY2VLZXlzIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIkVUSEVSRVVNX05FVFdPUksiLCJST1BTVEVOIiwiTUFJTk5FVCIsIlBPTFlHT04iLCJhYmkiLCJpbnB1dHMiLCJpbnRlcm5hbFR5cGUiLCJvdXRwdXRzIiwic3RhdGVNdXRhYmlsaXR5IiwiTm9kZURldGFpbE1hbmFnZXIiLCJuZXR3b3JrIiwicHJveHlBZGRyZXNzIiwiYXJndW1lbnRzIiwidXJsIiwiWCIsIlkiLCJVUkwiLCJocmVmIiwiXyIsInByb2plY3RJZCIsImNvbmNhdCIsIm5vZGVMaXN0Q29udHJhY3QiLCJub2RlTGlzdEFkZHJlc3MiLCJ1cGRhdGVkIiwiX25ldHdvcmsiLCJfbm9kZURldGFpbHMiLCJjdXJyZW50RXBvY2giLCJfY3VycmVudEVwb2NoIiwidG9ydXNOb2RlRW5kcG9pbnRzIiwiX3RvcnVzTm9kZUVuZHBvaW50cyIsInRvcnVzTm9kZVB1YiIsIl90b3J1c05vZGVQdWIiLCJ0b3J1c0luZGV4ZXMiLCJfdG9ydXNJbmRleGVzIiwiX3JlZiIsInNraXAiLCJ2ZXJpZmllciIsInZlcmlmaWVySWQiLCJoYXNoZWRWZXJpZmllcklkIiwia2VjY2FrMjU2Iiwibm9kZURldGFpbHMiLCJtZXRob2RzIiwiZ2V0Tm9kZVNldCIsInRvcnVzTm9kZVB1YlgiLCJ0b3J1c05vZGVQdWJZIiwieCIsIk51bWJlciIsInVwZGF0ZWRFbmRwb2ludHMiLCJ1cGRhdGVkTm9kZVB1YiIsImluZGV4IiwiZW5kUG9pbnRFbGVtZW50IiwicHViS3giLCJwdWJLeSIsImVuZHBvaW50Iiwic3BsaXQiLCJ0b0hleCIsInJlcGxhY2UiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJsb2ciLCJzZXRMZXZlbCIsImxldmVscyIsImFwaUtleSIsImVtYmVkSG9zdCIsInNldEVtYmVkSG9zdCIsImVtYmVkSG9zdF8iLCJzZXRBUElLZXkiLCJhcGlLZXlfIiwiZ2V0QXBpS2V5SGVhZGVycyIsImhlYWRlcnMiLCJkZWJ1Z0xvZ1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicHJvbWlzZVRpbWVvdXQiLCJtcyIsInByb21pc2UiLCJ0aW1lb3V0IiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmFjZSIsIm9wdGlvbnNfIiwiY3VzdG9tT3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwibW9kZSIsInVzZUFQSUtleSIsImZldGNoIiwib2siLCJqc29uIiwicG9zdCIsImRhdGEiLCJpc1VybEVuY29kZWREYXRhIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZW5lcmF0ZUpzb25SUENPYmplY3QiLCJwYXJhbWV0ZXJzIiwianNvbnJwYyIsInBhcmFtcyIsIm5vb3AiLCJBQ0siLCJCYXNlUG9zdE1lc3NhZ2VTdHJlYW0iLCJ0YXJnZXRXaW5kb3ciLCJ3aW5kb3ciLCJ0YXJnZXRPcmlnaW4iLCJfaW5pdCIsIl9oYXZlU3luIiwiX25hbWUiLCJfdGFyZ2V0IiwiX3RhcmdldFdpbmRvdyIsIl90YXJnZXRPcmlnaW4iLCJfb25NZXNzYWdlIiwib25NZXNzYWdlIiwiYmluZCIsIl9zeW5JbnRlcnZhbElkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kU2hha2UiLCJfYnJlYWsiLCJjb3JrIiwiX29uRGF0YSIsInVuY29yayIsIl9wb3N0TWVzc2FnZSIsIm9yaWdpbkNvbnN0cmFpbnQiLCJwb3N0TWVzc2FnZSIsImV2ZW50IiwibWVzc2FnZSIsIm9yaWdpbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzYWZlQXBwbHkiLCJhcmdzIiwiUmVmbGVjdCIsIlNhZmVFdmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJkb0Vycm9yIiwiZXZlbnRzIiwiX2V2ZW50cyIsIl9sZW4iLCJBcnJheSIsIl9rZXkiLCJlciIsImxlbiIsImxpc3RlbmVycyIsImFyciIsIm4iLCJjb3B5IiwiYXJyYXlDbG9uZSIsIlNlcmlhbGl6YWJsZUVycm9yIiwiY29kZSIsImlzSW50ZWdlciIsInRvU3RyaW5nIiwic3RhY2siLCJjcmVhdGVTdHJlYW1NaWRkbGV3YXJlIiwiaWRNYXAiLCJzdHJlYW0iLCJyZWFkIiwicmVzIiwicHJvY2Vzc05vdGlmaWNhdGlvbiIsImVuZCIsInByb2Nlc3NSZXNwb25zZSIsIl9lcnIiLCJtaWRkbGV3YXJlIiwicmVxIiwiY3JlYXRlSWRSZW1hcE1pZGRsZXdhcmUiLCJfZW5kIiwib3JpZ2luYWxJZCIsIm5ld0lkIiwicmFuZG9tSWQiLCJvd25LZXlzJDEiLCJKUlBDRW5naW5lIiwiX21pZGRsZXdhcmUiLCJzdGF0aWMiLCJtaWRkbGV3YXJlU3RhY2siLCJyZXR1cm5IYW5kbGVycyIsImlzQ29tcGxldGUiLCJfcnVuTWlkZGxld2FyZSIsInNlcmlhbGl6ZUVycm9yIiwicmV0dXJuSGFuZGxlciIsImhhbmRsZXJzIiwiaXNBcnJheSIsIl9oYW5kbGVCYXRjaCIsIl9oYW5kbGUiLCJfcHJvbWlzZUhhbmRsZSIsImFzTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVFcnJvciIsIl9ydW5BbGxNaWRkbGV3YXJlIiwiX3J1blJldHVybkhhbmRsZXJzIiwiaGFuZGxlckNhbGxiYWNrIiwicmVxcyIsInJlc3BvbnNlcyIsImFsbCIsImNhbGxlclJlcSIsIl9vYmplY3RTcHJlYWQkMSIsIl9wcm9jZXNzUmVxdWVzdCIsIl9lcnJvciIsIl9jaGVja0ZvckNvbXBsZXRpb24iLCJTdWJzdHJlYW0iLCJwYXJlbnQiLCJfcGFyZW50IiwiSUdOT1JFX1NVQlNUUkVBTSIsIk9iamVjdE11bHRpcGxleCIsIl9zdWJzdHJlYW1zIiwiY3JlYXRlU3RyZWFtIiwic3Vic3RyZWFtIiwiX2NiIiwicmVhZGFibGUiLCJhbnlTdHJlYW1FbmQiLCJkZXN0cm95IiwiaWdub3JlU3RyZWFtIiwiY29uc29sZSIsIndhcm4iLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiX3NldFByb3RvdHlwZU9mIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJlIiwiX2NvbnN0cnVjdCIsIlBhcmVudCIsIkNsYXNzIiwiYSIsIl93cmFwTmF0aXZlU3VwZXIiLCJfY2FjaGUiLCJNYXAiLCJoYXMiLCJzZXQiLCJXcmFwcGVyIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZnJvbSIsIm1pbkxlbiIsInRlc3QiLCJfY3JlYXRlU3VwZXIkMSIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxIiwiU3VwZXIiLCJOZXdUYXJnZXQiLCJkaXNhYmxlQWxsIiwiU29tZUVycm9yIiwiX0Vycm9yIiwiX3N1cGVyIiwiX3RoaXMiLCJlcnJvcnMiLCJwcmVkaWNhdGUiLCJTb21lIiwicHJvbWlzZXMiLCJmaW5pc2hlZENvdW50Iiwic2hhcmVkU3RhdGUiLCJyZXNvbHZlZCIsImVycm9yQXJyIiwiZmlsbCIsInJlc3VsdEFyciIsInByZWRpY2F0ZUVycm9yIiwicmVzcCIsImNhdGNoIiwiZmluYWxseSIsInJlZHVjZSIsImFjYyIsInoiLCJfZXJyb3IkZGF0YSIsInN0YXJ0c1dpdGgiLCJzdHIiLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsIm1zZyIsIml0Iiwiam9pbiIsIl9wcmVkaWNhdGVFcnJvciIsIl9jcmVhdGVTdXBlciIsIkdldE9yU2V0Tm9uY2VFcnJvciIsImtDb21iaW5hdGlvbnMiLCJzIiwiY3VyIiwiY29tYnMiLCJ0YWlsQ29tYnMiLCJqIiwidGhyZXNob2xkU2FtZSIsInQiLCJoYXNoTWFwIiwia2V5TG9va3VwIiwiX2NhbGxlZSIsImVuZHBvaW50cyIsImxvb2t1cFByb21pc2VzIiwiX2NvbnRleHQiLCJ2ZXJpZmllcl9pZCIsImxvb2t1cFJlc3VsdHMiLCJsb29rdXBTaGFyZXMiLCJ4MSIsImVycm9yUmVzdWx0IiwieDIiLCJrZXlSZXN1bHQiLCJ4MyIsIl94IiwiX3gyIiwiX3gzIiwid2FpdEtleUxvb2t1cCIsImtleUFzc2lnbiIsIl9yZWYzIiwiX2NhbGxlZTIiLCJfcmVmMiIsInRvcnVzTm9kZVB1YnMiLCJsYXN0UG9pbnQiLCJmaXJzdFBvaW50Iiwic2lnbmVySG9zdCIsIm5vZGVOdW0iLCJpbml0aWFsUG9pbnQiLCJzaWduZWREYXRhIiwiX2NvbnRleHQyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHViS2V5WCIsInB1YktleVkiLCJ0MCIsImluY2x1ZGVzIiwiX3g0IiwiaGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsIlRvcnVzIiwiX3JlZiRlbmFibGVPbmVLZXkiLCJlbmFibGVPbmVLZXkiLCJfcmVmJG1ldGFkYXRhSG9zdCIsIm1ldGFkYXRhSG9zdCIsIl9yZWYkYWxsb3dIb3N0IiwiYWxsb3dIb3N0IiwiX3JlZiRzaWduZXJIb3N0IiwiX3JlZiRzZXJ2ZXJUaW1lT2Zmc2V0Iiwic2VydmVyVGltZU9mZnNldCIsIl9yZWYkbmV0d29yayIsImVjIiwiX2dldFVzZXJUeXBlQW5kQWRkcmVzcyIsImRvZXNLZXlBc3NpZ24iLCJpc05ld0tleSIsImZpbmFsS2V5UmVzdWx0IiwiYXNzaWduUmVzdWx0IiwiX2ZpbmFsS2V5UmVzdWx0JGtleXMkIiwibm9uY2VSZXN1bHQiLCJub25jZSIsIm1vZGlmaWVkUHViS2V5IiwiZmluYWxYIiwiZmluYWxZIiwiYWRkcmVzcyIsIl9hcmdzIiwicHViX2tleV9YIiwicHViX2tleV9ZIiwiZ2V0T3JTZXROb25jZSIsInQxIiwidHlwZU9mVXNlciIsImtleUZyb21QdWJsaWMiLCJ5IiwiZ2V0UHVibGljIiwiYWRkIiwia2V5RnJvbVByaXZhdGUiLCJwdWJOb25jZSIsImdldFgiLCJnZXRZIiwiZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleSIsInVwZ3JhZGVkIiwiX3NldEN1c3RvbUtleSIsIl9yZWY0IiwicHJpdktleUhleCIsIm1ldGFkYXRhTm9uY2UiLCJ0b3J1c0tleUhleCIsImN1c3RvbUtleUhleCIsInRvcnVzS2V5IiwicHJpdktleSIsImN1c3RvbUtleSIsIm5ld01ldGFkYXRhTm9uY2UiLCJzdWIiLCJ1bW9kIiwiY3VydmUiLCJnZW5lcmF0ZU1ldGFkYXRhUGFyYW1zIiwic2V0TWV0YWRhdGEiLCJfcmV0cmlldmVTaGFyZXMiLCJfY2FsbGVlNSIsImluZGV4ZXMiLCJ2ZXJpZmllclBhcmFtcyIsImlkVG9rZW4iLCJleHRyYVBhcmFtcyIsInByb21pc2VBcnIiLCJ0bXBLZXkiLCJwdWJLZXkiLCJ0b2tlbkNvbW1pdG1lbnQiLCJfYXJnczUiLCJfY29udGV4dDUiLCJtZXNzYWdlcHJlZml4IiwidG9rZW5jb21taXRtZW50IiwidGVtcHB1YngiLCJ0ZW1wcHVieSIsInZlcmlmaWVyaWRlbnRpZmllciIsInByb21pc2VBcnJSZXF1ZXN0Iiwibm9kZVNpZ3MiLCJfaSIsIl9pMiIsIl9wIiwiZW5jcnlwdGVkIiwiaXRlbSIsImlkdG9rZW4iLCJub2Rlc2lnbmF0dXJlcyIsIl9yZWY1IiwiX2NhbGxlZTMiLCJzaGFyZVJlc3BvbnNlcyIsImNvbXBsZXRlZFJlcXVlc3RzIiwidGhyZXNob2xkUHVibGljS2V5Iiwic2hhcmVQcm9taXNlcyIsIm5vZGVJbmRleGVzIiwiX2kzIiwiX2N1cnJlbnRTaGFyZVJlc3BvbnNlIiwiX2N1cnJlbnRTaGFyZVJlc3BvbnNlMiIsImN1cnJlbnRTaGFyZVJlc3BvbnNlIiwiZmlyc3RLZXkiLCJtZXRhZGF0YSIsInNoYXJlc1Jlc29sdmVkIiwiZGVjcnlwdGVkU2hhcmVzIiwiYWxsQ29tYmlzIiwicHJpdmF0ZUtleSIsIl9sb29wIiwiX3JldCIsIl9jb250ZXh0MyIsIlB1YmxpY0tleSIsInNvcnQiLCJiIiwiSW5kZXgiLCJjbXAiLCJNZXRhZGF0YSIsImVwaGVtUHVibGljS2V5IiwiaXYiLCJtYWMiLCJjaXBoZXJ0ZXh0IiwiU2hhcmUiLCJwYWRTdGFydCIsImRlYnVnIiwiY3VyciIsImN1cnJlbnRDb21iaSIsImN1cnJlbnRDb21iaVNoYXJlcyIsInYiLCJzaGFyZXMiLCJpbmRpY2VzIiwiZGVyaXZlZFByaXZhdGVLZXkiLCJsYWdyYW5nZUludGVycG9sYXRpb24iLCJkZWNyeXB0ZWRQdWJLZXkiLCJkZWNyeXB0ZWRQdWJLZXlYIiwiZGVjcnlwdGVkUHViS2V5WSIsIl94MTAiLCJfeDExIiwiX3JlZjYiLCJfY2FsbGVlNCIsInJldHVybmVkS2V5IiwiX3lpZWxkJF90aGlzJGdldE5vbmNlIiwiZXRoQWRkcmVzcyIsIl9jb250ZXh0NCIsImdldE5vbmNlIiwiZ2V0TWV0YWRhdGEiLCJnZW5lcmF0ZUFkZHJlc3NGcm9tUHJpdktleSIsIl94MTIiLCJfeDUiLCJfeDYiLCJfeDciLCJfeDgiLCJfeDkiLCJfZ2V0TWV0YWRhdGEiLCJfY2FsbGVlNiIsIm1ldGFkYXRhUmVzcG9uc2UiLCJfYXJnczYiLCJfY29udGV4dDYiLCJfeDEzIiwic2V0RGF0YSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaWciLCJzaWduIiwic2V0X2RhdGEiLCJzaWduYXR1cmUiLCJyIiwiX3NldE1ldGFkYXRhIiwiX2NhbGxlZTciLCJfYXJnczciLCJfY29udGV4dDciLCJfeDE0Iiwibm9kZUluZGV4Iiwic2VjcmV0IiwidXBwZXIiLCJsb3dlciIsIm11bCIsIm5lZyIsInRlbXAiLCJkZWx0YSIsImludm0iLCJwdWJsaWNLZXkiLCJlbmNvZGUiLCJldGhBZGRyZXNzTG93ZXIiLCJ0b0NoZWNrc3VtQWRkcmVzcyIsInB1YmxpY0tleVgiLCJwdWJsaWNLZXlZIiwiX2dldFB1YmxpY0FkZHJlc3MiLCJfY2FsbGVlOCIsIl9yZWY3IiwiaXNFeHRlbmRlZCIsIl9yZWY4IiwiX25vbmNlIiwiX2ZpbmFsS2V5UmVzdWx0JGtleXMkMiIsIl9hcmdzOCIsIl9jb250ZXh0OCIsIl94MTUiLCJfeDE2IiwiX3gxNyIsIl9nZXRPclNldE5vbmNlIiwiX2NhbGxlZTkiLCJnZXRPbmx5IiwiX2FyZ3M5IiwiX2NvbnRleHQ5IiwiX3gxOCIsIl94MTkiLCJfeDIwIiwiX2dldE5vbmNlIiwiX2NhbGxlZTEwIiwiX2NvbnRleHQxMCIsIl94MjEiLCJfeDIyIiwiX3gyMyIsInByaXZLZXlCTiIsIm5vbmNlQk4iLCJlbmFibGVBbGwiLCJMT0dJTl9QUk9WSURFUiIsIldBTExFVF9WRVJJRklFUlMiLCJHT09HTEUiLCJGQUNFQk9PSyIsIlRXSVRDSCIsIlJFRERJVCIsIkRJU0NPUkQiLCJFTUFJTF9QQVNTV09SRExFU1MiLCJXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUCIsIlRPUlVTX0JVSUxEX0VOViIsIlBST0RVQ1RJT04iLCJERVZFTE9QTUVOVCIsIkJJTkFOQ0UiLCJURVNUSU5HIiwiTFJDIiwiQkVUQSIsIkJVVFRPTl9QT1NJVElPTiIsIkJPVFRPTV9MRUZUIiwiVE9QX0xFRlQiLCJCT1RUT01fUklHSFQiLCJUT1BfUklHSFQiLCJwYXltZW50UHJvdmlkZXJzJDEiLCJsaW5lMSIsImxpbmUyIiwibGluZTMiLCJzdXBwb3J0UGFnZSIsIm1pbk9yZGVyVmFsdWUiLCJtYXhPcmRlclZhbHVlIiwidmFsaWRDdXJyZW5jaWVzIiwidmFsaWRDcnlwdG9DdXJyZW5jaWVzIiwiaW5jbHVkZUZlZXMiLCJlbmZvcmNlTWF4Iiwic2VsbCIsImNvbmZpZ3VyYXRpb24iLCJzdXBwb3J0ZWRWZXJpZmllckxpc3QiLCJwYXltZW50UHJvdmlkZXJzIiwiYXBpIiwidHJhbnNsYXRpb25zIiwiZW4iLCJlbWJlZCIsImNvbnRpbnVlIiwiYWN0aW9uUmVxdWlyZWQiLCJwZW5kaW5nQWN0aW9uIiwiY29va2llc1JlcXVpcmVkIiwiZW5hYmxlQ29va2llcyIsImNsaWNrSGVyZSIsImRlIiwiamEiLCJrbyIsInpoIiwicHJvZFRvcnVzVXJsIiwibG9jYWxTdG9yYWdlS2V5UHJlZml4IiwicnVuT25Mb2FkIiwiZG9jdW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsInRyaW1tZWRIdG1sIiwidHJpbSIsImlubmVySFRNTCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiaGFuZGxlU3RyZWFtIiwiZXZlbnROYW1lIiwiaGFuZGxlcldyYXBwZXIiLCJkb2N1bWVudFJlYWR5IiwicmVhZHlTdGF0ZSIsImhhbmRsZXJBcmdzIiwiaGFuZGxlRXZlbnQiLCJtZXNzYWdlcyIsImRpc2Nvbm5lY3RlZCIsInBlcm1hbmVudGx5RGlzY29ubmVjdGVkIiwic2VuZFNpdGVNZXRhZGF0YSIsInVuc3VwcG9ydGVkU3luYyIsImludmFsaWREdXBsZXhTdHJlYW0iLCJpbnZhbGlkT3B0aW9ucyIsIm1heEV2ZW50TGlzdGVuZXJzIiwic2hvdWxkU2VuZE1ldGFkYXRhIiwiaW52YWxpZFJlcXVlc3RBcmdzIiwiaW52YWxpZFJlcXVlc3RNZXRob2QiLCJpbnZhbGlkUmVxdWVzdFBhcmFtcyIsImludmFsaWRMb2dnZXJPYmplY3QiLCJpbnZhbGlkTG9nZ2VyTWV0aG9kIiwiY29ubmVjdGVkIiwiY2hhaW5JZCIsIndhcm5pbmdzIiwiZW5hYmxlRGVwcmVjYXRpb24iLCJzZW5kRGVwcmVjYXRpb24iLCJjbG9zZSIsIm5ldHdvcmtDaGFuZ2VkIiwibm90aWZpY2F0aW9uIiwicHVibGljQ29uZmlnU3RvcmUiLCJsb2dTdHJlYW1EaXNjb25uZWN0V2FybmluZyIsInJlbW90ZUxhYmVsIiwiZW1pdHRlciIsIndhcm5pbmdNc2ciLCJsaXN0ZW5lckNvdW50IiwiZ2V0UHJlb3Blbkluc3RhbmNlSWQiLCJnZXRUb3J1c1VybCIsImJ1aWxkRW52IiwiaW50ZWdyaXR5IiwidG9ydXNVcmwiLCJsb2dMZXZlbCIsInZlcnNpb24iLCJ2ZXJzaW9uVXNlZCIsImdldFVzZXJMYW5ndWFnZSIsInVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwidXNlckxhbmd1YWdlcyIsIkVNSVRURURfTk9USUZJQ0FUSU9OUyIsIk5PT1AiLCJGRUFUVVJFU19QUk9WSURFUl9DSEFOR0VfV0lORE9XIiwiRkVBVFVSRVNfQ09ORklSTV9XSU5ET1ciLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwidW53cmFwUmVzdWx0IiwiVG9ydXNJbnBhZ2VQcm92aWRlciIsImNvbm5lY3Rpb25TdHJlYW0iLCJqc29uUnBjU3RyZWFtTmFtZSIsImVuYWJsZSIsImV4cGVyaW1lbnRhbE1ldGhvZHMiLCJzZW5kIiwiZHVwbGV4IiwiaXNUb3J1cyIsInNldE1heExpc3RlbmVycyIsIl9kZWZhdWx0U3RhdGUiLCJzZWxlY3RlZEFkZHJlc3MiLCJuZXR3b3JrVmVyc2lvbiIsIl9oYW5kbGVBY2NvdW50c0NoYW5nZWQiLCJfaGFuZGxlQ2hhaW5DaGFuZ2VkIiwiX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCIsIl9oYW5kbGVDb25uZWN0IiwiX2hhbmRsZURpc2Nvbm5lY3QiLCJfaGFuZGxlU3RyZWFtRGlzY29ubmVjdCIsIl9zZW5kU3luYyIsIl9ycGNSZXF1ZXN0IiwiX3dhcm5PZkRlcHJlY2F0aW9uIiwiX2luaXRpYWxpemVTdGF0ZSIsInJlcXVlc3QiLCJzZW5kQXN5bmMiLCJtdXgiLCJfcHVibGljQ29uZmlnU3RvcmUiLCJzdG9yYWdlS2V5IiwiaXNDb25uZWN0ZWQiLCJqc29uUnBjQ29ubmVjdGlvbiIsInJwY0VuZ2luZSIsImV0aEVycm9ycyIsIl9ycGNFbmdpbmUiLCJwYXlsb2FkIiwiX3NlbnRXYXJuaW5ncyIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJvbmNlIiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImFjY291bnRzIiwiaXNVbmxvY2tlZCIsImluaXRpYWxpemVkIiwiaXNJbnRlcm5hbCIsIl9wYXlsb2FkIiwidHJ5UHJlb3BlbkhhbmRsZSIsIm1ldGhvZE9yUGF5bG9hZCIsImNhbGxiYWNrT3JBcmdzIiwiaXNSZWNvdmVyYWJsZSIsImVycm9yTWVzc2FnZSIsImlzUGVybWFuZW50bHlEaXNjb25uZWN0ZWQiLCJFdGhlcmV1bVJwY0Vycm9yIiwic3RyZWFtTmFtZSIsImlzRXRoQWNjb3VudHMiLCJmaW5hbEFjY291bnRzIiwiYWNjb3VudCIsImhhc0VtaXR0ZWRDb25uZWN0aW9uIiwiaGFzaGVzIiwiaW50ZXJuYWxIYXNoZXMiLCJhbGdvcml0aG1zIiwiYWxnb3JpdGhtIiwibWFpbiIsImZpbmFsT3B0aW9ucyIsImRlbGltaXRlciIsImZ1bGwiLCJkZWZhdWx0cyIsInNyaSIsIm91dHB1dCIsIlBvcHVwSGFuZGxlciIsImZlYXR1cmVzIiwiZHVhbFNjcmVlbkxlZnQiLCJzY3JlZW5MZWZ0Iiwic2NyZWVuWCIsImR1YWxTY3JlZW5Ub3AiLCJzY3JlZW5Ub3AiLCJzY3JlZW5ZIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJzY3JlZW4iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImxlZnQiLCJhYnMiLCJ0b3AiLCJoIiwidyIsImdldFBvcHVwRmVhdHVyZXMiLCJ3aW5kb3dUaW1lciIsImlDbG9zZWRXaW5kb3ciLCJfc2V0dXBUaW1lciIsInNldEludGVydmFsIiwiY2xvc2VkIiwiY2xlYXJJbnRlcnZhbCIsIm9wZW4iLCJfdGhpcyR3aW5kb3ciLCJmb2N1cyIsInJlZGlyZWN0IiwibG9jYXRpb25SZXBsYWNlT25SZWRpcmVjdCIsImxvY2F0aW9uIiwiaW1nRXhpc3RzIiwiaW1nIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsImdldFNpdGVOYW1lIiwic2l0ZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwibWV0YVRpdGxlIiwidGl0bGUiLCJob3N0bmFtZSIsImdldFNpdGVJY29uIiwiaWNvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaW5kIiwiX2ljb24iLCJlbmdpbmUiLCJkb21haW5NZXRhZGF0YSIsImdldFNpdGVNZXRhZGF0YSIsIm9yaWdpbmFsRXJyb3IiLCJfZXhjbHVkZWQiLCJkZWZhdWx0VmVyaWZpZXJzIiwiaWZyYW1lSW50ZWdyaXR5IiwiVU5TQUZFX01FVEhPRFMiLCJpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSIsInN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0b3J1c0lmcmFtZUh0bWwiLCJjaGVjayIsImNyb3NzT3JpZ2luIiwicmVsIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYnV0dG9uUG9zaXRpb24iLCJtb2RhbFpJbmRleCIsImlzTG9nZ2VkSW4iLCJpc0luaXRpYWxpemVkIiwidG9ydXNXaWRnZXRWaXNpYmlsaXR5IiwicmVxdWVzdGVkVmVyaWZpZXIiLCJjdXJyZW50VmVyaWZpZXIiLCJub2RlRGV0YWlsTWFuYWdlciIsInRvcnVzSnMiLCJhbGVydFpJbmRleCIsImlzSWZyYW1lRnVsbFNjcmVlbiIsImRhcHBTdG9yYWdlS2V5IiwiZW5hYmxlTG9nZ2luZyIsImVuYWJsZWRWZXJpZmllcnMiLCJob3N0IiwibmV0d29ya05hbWUiLCJibG9ja0V4cGxvcmVyIiwidGlja2VyIiwidGlja2VyTmFtZSIsImxvZ2luQ29uZmlnIiwic2hvd1RvcnVzQnV0dG9uIiwid2hpdGVMYWJlbCIsInNraXBUS2V5IiwidXNlTG9jYWxTdG9yYWdlIiwidXNlV2FsbGV0Q29ubmVjdCIsInNldERlZmF1bHRMZXZlbCIsImxvY2FsU3RvcmFnZUtleSIsInN0b3JlZEtleSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZW5lcmF0ZWRLZXkiLCJ0b3J1c0lmcmFtZVVybCIsInBhdGhuYW1lIiwiZW5kc1dpdGgiLCJ0b3J1c0lmcmFtZSIsInRvcnVzQWxlcnRDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRQcm9wZXJ0eSIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZUxpbmsiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJjdXN0b21UcmFuc2xhdGlvbnMiLCJsYW5ndWFnZVRyYW5zbGF0aW9ucyIsImVtYmVkVHJhbnNsYXRpb25zIiwiaGFuZGxlU2V0dXAiLCJfc2V0dXBXZWIzIiwiaW5pdFN0cmVhbSIsImNvbW11bmljYXRpb25NdXgiLCJnZXRTdHJlYW0iLCJzdWNjZXNzIiwiX2Rpc3BsYXlJZnJhbWUiLCJmZXRjaFVybCIsImNhY2hlIiwidGV4dCIsImNhbGN1bGF0ZWRJbnRlZ3JpdHkiLCJjbGVhckluaXQiLCJsb2dpbiIsImxvZ2luX2hpbnQiLCJsb2dpbkhpbnQiLCJldGhlcmV1bSIsImxvZ291dCIsInN0YXR1c1N0cmVhbSIsImxvZ2dlZEluIiwiaXNFbGVtZW50IiwiZWxlbWVudCIsIkVsZW1lbnQiLCJIVE1MRG9jdW1lbnQiLCJjb250YWlucyIsInJlbW92ZSIsInRvcnVzQWxlcnQiLCJoaWRlVG9ydXNCdXR0b24iLCJfc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXMiLCJzZXRQcm92aWRlciIsInJlc3QiLCJwcm92aWRlckNoYW5nZVN0cmVhbSIsInByZW9wZW5JbnN0YW5jZUlkIiwiX2hhbmRsZVdpbmRvdyIsIm92ZXJyaWRlIiwic2hvd1dhbGxldCIsInBhdGgiLCJzaG93V2FsbGV0U3RyZWFtIiwiZmluYWxQYXRoIiwiaW5zdGFuY2VJZCIsImZpbmFsVXJsIiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwiZ2V0Tm9kZURldGFpbHMiLCJ3YWxsZXRWZXJpZmllciIsIm9wZW5sb2dpblZlcmlmaWVyIiwiZXhpc3RpbmdWMVVzZXIiLCJnZXRVc2VyVHlwZUFuZEFkZHJlc3MiLCJ2MlVzZXIiLCJuZXdWMlVzZXIiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvQWNjZXNzU3RyZWFtIiwidXNlckluZm9BY2Nlc3NIYW5kbGVyIiwiYXBwcm92ZWQiLCJyZWplY3RlZCIsIm5ld1JlcXVlc3QiLCJ1c2VySW5mb1N0cmVhbSIsImhhbmRsZXJDaHVuayIsImluaXRpYXRlVG9wdXAiLCJwcm92aWRlciIsImlzVmFsaWQiLCJzZWxlY3RlZFByb3ZpZGVyIiwic2VsZWN0ZWRQYXJhbXMiLCJmaWF0VmFsdWUiLCJyZXF1ZXN0ZWRPcmRlckFtb3VudCIsInBhcnNlRmxvYXQiLCJzZWxlY3RlZEN1cnJlbmN5Iiwic2VsZWN0ZWRDcnlwdG9DdXJyZW5jeSIsInZhbGlkYXRlUGF5bWVudFByb3ZpZGVyIiwidG9wdXBTdHJlYW0iLCJsb2dpblBhcmFtcyIsInVzZXJJbmZvIiwibG9naW5Qcml2S2V5U3RyZWFtIiwid2FsbGV0Q29ubmVjdFN0cmVhbSIsIndpbmRvd1N0cmVhbSIsImhhbmRsZWRXaW5kb3ciLCJfY3JlYXRlUG9wdXBCbG9ja0FsZXJ0IiwiY2xvc2VIYW5kbGVyIiwicmVjZWl2ZWRJZCIsIl9zZXRFbWJlZFdoaXRlTGFiZWwiLCJ0aGVtZSIsImlzRGFyayIsImNvbG9ycyIsImNsYXNzTGlzdCIsInRvcnVzQnJhbmQxIiwidG9ydXNHcmF5MiIsIl9nZXRMb2dvVXJsIiwiX3RoaXMkd2hpdGVMYWJlbCIsIl90aGlzJHdoaXRlTGFiZWwkdGhlbSIsImxvZ29VcmwiLCJfdGhpcyR3aGl0ZUxhYmVsMiIsIl90aGlzJHdoaXRlTGFiZWwzIiwibG9nb0xpZ2h0IiwibG9nb0RhcmsiLCJpc0Z1bGwiLCJyaWdodCIsImJvdHRvbSIsIm1ldGFtYXNrU3RyZWFtIiwiY29udGVudFdpbmRvdyIsImNvbW11bmljYXRpb25TdHJlYW0iLCJpbnBhZ2VQcm92aWRlciIsImRldGVjdEFjY291bnRSZXF1ZXN0UHJvdG90eXBlTW9kaWZpZXIiLCJvcmlnaW5hbE1ldGhvZCIsImhhbmRsZUxvZ2luQ2IiLCJfc2hvd0xvZ2luUG9wdXAiLCJpc0xvZ2luQ2FsbGJhY2siLCJwcm94aWVkSW5wYWdlUHJvdmlkZXIiLCJkZWxldGVQcm9wZXJ0eSIsInNldHVwTXVsdGlwbGV4IiwiY2FsbGVkRnJvbUVtYmVkIiwibG9naW5IYW5kbGVyIiwib2F1dGhTdHJlYW0iLCJzdWNjZXNzQWxlcnQiLCJidG5Db250YWluZXIiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJmdWxmaWxsZWQiLCJzdGVwIiwiYWRvcHQiLCJfX2dlbmVyYXRvciIsImYiLCJnIiwibGFiZWwiLCJ0cnlzIiwib3BzIiwidmVyYiIsIm9wIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiX2EiLCJFQyIsImJyb3dzZXJDcnlwdG8iLCJjcnlwdG8iLCJtc0NyeXB0byIsInN1YnRsZSIsIndlYmtpdFN1YnRsZSIsIm5vZGVDcnlwdG8iLCJFQ19HUk9VUF9PUkRFUiIsIkJ1ZmZlciIsIlpFUk8zMiIsImFsbG9jIiwiYXNzZXJ0IiwiY29uZGl0aW9uIiwiaXNWYWxpZFByaXZhdGVLZXkiLCJpc0J1ZmZlciIsImlzU2NhbGFyIiwiY29tcGFyZSIsInJhbmRvbUJ5dGVzIiwic2l6ZSIsIlVpbnQ4QXJyYXkiLCJnZXRSYW5kb21WYWx1ZXMiLCJzaGE1MTIiLCJjcmVhdGVIYXNoIiwiZ2V0QWVzIiwiaW1wb3J0S2V5IiwiY3J5cHRvS2V5IiwiZW5jQWxnb3JpdGhtIiwiY2lwaGVyIiwiY3JlYXRlQ2lwaGVyaXYiLCJmaXJzdENodW5rIiwic2Vjb25kQ2h1bmsiLCJmaW5hbCIsImRlY2lwaGVyIiwiY3JlYXRlRGVjaXBoZXJpdiIsImFlc0NiY0VuY3J5cHQiLCJhZXNDYmNEZWNyeXB0IiwiZGVyaXZlIiwicHJpdmF0ZUtleUEiLCJwdWJsaWNLZXlCIiwia2V5QSIsImtleUIiLCJQeCIsInRvQXJyYXkiLCJvcHRzIiwiZW5jcnlwdGlvbktleSIsImhtYWMiLCJjcmVhdGVIbWFjIiwiYjEiLCJiMiIsImVxdWFsQ29uc3RUaW1lIiwiaG1hY1NoYTI1NlZlcmlmeSIsIm1hY0dvb2QiLCJwYWRfc3RyaW5nXzEiLCJpbnB1dCIsImVuY29kaW5nIiwiZnJvbUJhc2U2NCIsInRvQmFzZTY0IiwiYmFzZTY0dXJsIiwiYmFzZTY0IiwiZGVjb2RlIiwidG9CdWZmZXIiLCJzdHJpbmdMZW5ndGgiLCJkaWZmIiwicG9zaXRpb24iLCJwYWRMZW5ndGgiLCJwYWRkZWRTdHJpbmdMZW5ndGgiLCJidWZmZXIiLCJvYmplY3RUb1N0cmluZyIsImlzQm9vbGVhbiIsImlzTnVsbCIsImlzTnVsbE9yVW5kZWZpbmVkIiwiaXNOdW1iZXIiLCJpc1N0cmluZyIsImlzU3ltYm9sIiwiaXNVbmRlZmluZWQiLCJpc1JlZ0V4cCIsInJlIiwiaXNPYmplY3QiLCJpc0RhdGUiLCJkIiwiaXNFcnJvciIsImlzRnVuY3Rpb24iLCJpc1ByaW1pdGl2ZSIsImVvcyIsIndzIiwiX3dyaXRhYmxlU3RhdGUiLCJycyIsIl9yZWFkYWJsZVN0YXRlIiwiY2FuY2VsbGVkIiwib25sZWdhY3lmaW5pc2giLCJvbmZpbmlzaCIsIm9uZW5kIiwib25leGl0IiwiZXhpdENvZGUiLCJvbmNsb3NlIiwicHJvY2VzcyIsIm5leHRUaWNrIiwib25jbG9zZW5leHR0aWNrIiwiZW5kZWQiLCJkZXN0cm95ZWQiLCJvbnJlcXVlc3QiLCJzZXRIZWFkZXIiLCJhYm9ydCIsImlzUmVxdWVzdCIsInN0ZGlvIiwiaXNDaGlsZFByb2Nlc3MiLCJlcXVhbCIsIlJlZ0V4cCIsImZsYWdzIiwiaXNTdHJlYW0iLCJ0cmFuc2Zvcm0iLCJfdHJhbnNmb3JtIiwiSEFTSF9VTkRFRklORUQiLCJNQVhfU0FGRV9JTlRFR0VSIiwiYXJnc1RhZyIsImZ1bmNUYWciLCJvYmplY3RUYWciLCJyZUlzSG9zdEN0b3IiLCJyZUlzVWludCIsInR5cGVkQXJyYXlUYWdzIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwicm9vdCIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsImZyZWVQcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImZ1bmMiLCJhcnJheVByb3RvIiwiZnVuY1Byb3RvIiwib2JqZWN0UHJvdG8iLCJjb3JlSnNEYXRhIiwiZnVuY1RvU3RyaW5nIiwibWFza1NyY0tleSIsInVpZCIsImV4ZWMiLCJJRV9QUk9UTyIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwib2JqZWN0Q3RvclN0cmluZyIsInJlSXNOYXRpdmUiLCJhbGxvY1Vuc2FmZSIsImdldFByb3RvdHlwZSIsIm92ZXJBcmciLCJvYmplY3RDcmVhdGUiLCJzcGxpY2UiLCJzeW1Ub1N0cmluZ1RhZyIsImdldE5hdGl2ZSIsIm5hdGl2ZUlzQnVmZmVyIiwibmF0aXZlTWF4IiwibWF4IiwibmF0aXZlTm93IiwibmF0aXZlQ3JlYXRlIiwiYmFzZUNyZWF0ZSIsInByb3RvIiwiSGFzaCIsImVudHJpZXMiLCJjbGVhciIsIkxpc3RDYWNoZSIsIk1hcENhY2hlIiwiU3RhY2siLCJfX2RhdGFfXyIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNBcmd1bWVudHMiLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIml0ZXJhdGVlIiwiYmFzZVRpbWVzIiwiU3RyaW5nIiwiaXNJbmRleCIsImFzc2lnbk1lcmdlVmFsdWUiLCJlcSIsImJhc2VBc3NpZ25WYWx1ZSIsImFzc2lnblZhbHVlIiwib2JqVmFsdWUiLCJhc3NvY0luZGV4T2YiLCJhcnJheSIsImdldE1hcERhdGEiLCJwYWlycyIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlRm9yIiwiZnJvbVJpZ2h0Iiwia2V5c0Z1bmMiLCJjcmVhdGVCYXNlRm9yIiwiYmFzZUdldFRhZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJnZXRSYXdUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJpc09iamVjdExpa2UiLCJiYXNlSXNOYXRpdmUiLCJpc01hc2tlZCIsInRvU291cmNlIiwiYmFzZUtleXNJbiIsIm5hdGl2ZUtleXNJbiIsImlzUHJvdG8iLCJpc1Byb3RvdHlwZSIsImJhc2VNZXJnZSIsInNyY0luZGV4IiwiY3VzdG9taXplciIsInNyY1ZhbHVlIiwibWVyZ2VGdW5jIiwic2FmZUdldCIsInN0YWNrZWQiLCJuZXdWYWx1ZSIsImlzQ29tbW9uIiwiaXNUeXBlZCIsImlzQXJyYXlMaWtlIiwiaXNBcnJheUxpa2VPYmplY3QiLCJpc0RlZXAiLCJjbG9uZUJ1ZmZlciIsInR5cGVkQXJyYXkiLCJhcnJheUJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJjbG9uZUFycmF5QnVmZmVyIiwiYnl0ZU9mZnNldCIsImNsb25lVHlwZWRBcnJheSIsImNvcHlBcnJheSIsIkN0b3IiLCJpc1BsYWluT2JqZWN0IiwiaXNOZXciLCJjb3B5T2JqZWN0Iiwia2V5c0luIiwidG9QbGFpbk9iamVjdCIsImluaXRDbG9uZU9iamVjdCIsImJhc2VNZXJnZURlZXAiLCJiYXNlUmVzdCIsInN0YXJ0Iiwic2V0VG9TdHJpbmciLCJvdGhlckFyZ3MiLCJvdmVyUmVzdCIsImlkZW50aXR5IiwiaXNLZXlhYmxlIiwiZ2V0VmFsdWUiLCJjb3VudCIsImxhc3RDYWxsZWQiLCJzdGFtcCIsInJlbWFpbmluZyIsInNob3J0T3V0Iiwic3RyaW5nIiwiY29uc3RhbnQiLCJvdGhlciIsImlzTGVuZ3RoIiwiYmFzZVVuYXJ5IiwibWVyZ2UiLCJhc3NpZ25lciIsInNvdXJjZXMiLCJndWFyZCIsImlzSXRlcmF0ZWVDYWxsIiwiY3JlYXRlQXNzaWduZXIiLCJkZWZpbml0aW9uIiwidW5kZWZpbmVkVHlwZSIsImlzSUUiLCJ1c2VyQWdlbnQiLCJsb2dNZXRob2RzIiwiYmluZE1ldGhvZCIsIm1ldGhvZE5hbWUiLCJ0cmFjZUZvcklFIiwidHJhY2UiLCJyZWFsTWV0aG9kIiwicmVwbGFjZUxvZ2dpbmdNZXRob2RzIiwibGV2ZWwiLCJsb2dnZXJOYW1lIiwibWV0aG9kRmFjdG9yeSIsImVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMiLCJkZWZhdWx0TWV0aG9kRmFjdG9yeSIsIkxvZ2dlciIsImRlZmF1bHRMZXZlbCIsImZhY3RvcnkiLCJjdXJyZW50TGV2ZWwiLCJwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlIiwibGV2ZWxOdW0iLCJsZXZlbE5hbWUiLCJpZ25vcmUiLCJjb29raWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRQZXJzaXN0ZWRMZXZlbCIsInN0b3JlZExldmVsIiwiY2xlYXJQZXJzaXN0ZWRMZXZlbCIsImdldExldmVsIiwicGVyc2lzdCIsIlNJTEVOVCIsInJlc2V0TGV2ZWwiLCJUUkFDRSIsImluaXRpYWxMZXZlbCIsImRlZmF1bHRMb2dnZXIiLCJfbG9nZ2Vyc0J5TmFtZSIsImdldExvZ2dlciIsImxvZ2dlciIsIl9sb2ciLCJub0NvbmZsaWN0IiwiZ2V0TG9nZ2VycyIsIndyYXBweSIsImNhbGxlZCIsIm9uY2VTdHJpY3QiLCJvbmNlRXJyb3IiLCJzdHJpY3QiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJmcyIsImFuY2llbnQiLCJpc0ZuIiwiZGVzdHJveWVyIiwicmVhZGluZyIsIndyaXRpbmciLCJSZWFkU3RyZWFtIiwiV3JpdGVTdHJlYW0iLCJpc0ZTIiwidG8iLCJzdHJlYW1zIiwiZGVzdHJveXMiLCJwbmEiLCJvYmplY3RLZXlzIiwidXRpbCIsImluaGVyaXRzIiwiUmVhZGFibGUiLCJXcml0YWJsZSIsImFsbG93SGFsZk9wZW4iLCJvbkVuZE5UIiwiaGlnaFdhdGVyTWFyayIsIlBhc3NUaHJvdWdoIiwiVHJhbnNmb3JtIiwiUmVhZGFibGVTdGF0ZSIsIkVFbGlzdGVuZXJDb3VudCIsIlN0cmVhbSIsIk91clVpbnQ4QXJyYXkiLCJkZWJ1Z1V0aWwiLCJkZWJ1Z2xvZyIsIkJ1ZmZlckxpc3QiLCJkZXN0cm95SW1wbCIsIlN0cmluZ0RlY29kZXIiLCJrUHJveHlFdmVudHMiLCJpc0R1cGxleCIsInJlYWRhYmxlT2JqZWN0TW9kZSIsImh3bSIsInJlYWRhYmxlSHdtIiwicmVhZGFibGVIaWdoV2F0ZXJNYXJrIiwiZGVmYXVsdEh3bSIsInBpcGVzIiwicGlwZXNDb3VudCIsImZsb3dpbmciLCJlbmRFbWl0dGVkIiwic3luYyIsIm5lZWRSZWFkYWJsZSIsImVtaXR0ZWRSZWFkYWJsZSIsInJlYWRhYmxlTGlzdGVuaW5nIiwicmVzdW1lU2NoZWR1bGVkIiwiZGVmYXVsdEVuY29kaW5nIiwiYXdhaXREcmFpbiIsInJlYWRpbmdNb3JlIiwiZGVjb2RlciIsInJlYWRhYmxlQWRkQ2h1bmsiLCJhZGRUb0Zyb250Iiwic2tpcENodW5rQ2hlY2siLCJlbWl0UmVhZGFibGUiLCJvbkVvZkNodW5rIiwiX2lzVWludDhBcnJheSIsImNodW5rSW52YWxpZCIsIl91aW50OEFycmF5VG9CdWZmZXIiLCJhZGRDaHVuayIsIm1heWJlUmVhZE1vcmUiLCJuZWVkTW9yZURhdGEiLCJ1bnNoaWZ0IiwiX3VuZGVzdHJveSIsInVuZGVzdHJveSIsImlzUGF1c2VkIiwic2V0RW5jb2RpbmciLCJlbmMiLCJNQVhfSFdNIiwiaG93TXVjaFRvUmVhZCIsImNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrIiwiZW1pdFJlYWRhYmxlXyIsImZsb3ciLCJtYXliZVJlYWRNb3JlXyIsIm5SZWFkaW5nTmV4dFRpY2siLCJyZXN1bWVfIiwiZnJvbUxpc3QiLCJyZXQiLCJzaGlmdCIsImxpc3QiLCJoYXNTdHJpbmdzIiwiYyIsIm5iIiwidGFpbCIsImNvcHlGcm9tQnVmZmVyU3RyaW5nIiwiYnVmIiwiY29weUZyb21CdWZmZXIiLCJmcm9tTGlzdFBhcnRpYWwiLCJlbmRSZWFkYWJsZSIsImVuZFJlYWRhYmxlTlQiLCJ4cyIsImwiLCJwYXJzZUludCIsIm5PcmlnIiwiZG9SZWFkIiwicGlwZU9wdHMiLCJlbmRGbiIsInN0ZG91dCIsInN0ZGVyciIsInVucGlwZSIsIm9udW5waXBlIiwidW5waXBlSW5mbyIsImhhc1VucGlwZWQiLCJvbmRyYWluIiwib25kYXRhIiwiY2xlYW5lZFVwIiwibmVlZERyYWluIiwiY2xlYW51cCIsInBpcGVPbkRyYWluIiwiaW5jcmVhc2VkQXdhaXREcmFpbiIsInBhdXNlIiwiZGVzdHMiLCJldiIsInBhdXNlZCIsIl9mcm9tTGlzdCIsImFmdGVyVHJhbnNmb3JtIiwidHMiLCJfdHJhbnNmb3JtU3RhdGUiLCJ0cmFuc2Zvcm1pbmciLCJ3cml0ZWNiIiwid3JpdGVjaHVuayIsIm5lZWRUcmFuc2Zvcm0iLCJ3cml0ZWVuY29kaW5nIiwiZmx1c2giLCJfZmx1c2giLCJwcmVmaW5pc2giLCJfdGhpczIiLCJlcnIyIiwiQ29ya2VkUmVxdWVzdCIsImNvcmtSZXEiLCJwZW5kaW5nY2IiLCJjb3JrZWRSZXF1ZXN0c0ZyZWUiLCJvbkNvcmtlZEZpbmlzaCIsImFzeW5jV3JpdGUiLCJicm93c2VyIiwic2V0SW1tZWRpYXRlIiwiV3JpdGFibGVTdGF0ZSIsImludGVybmFsVXRpbCIsImRlcHJlY2F0ZSIsIm5vcCIsIndyaXRhYmxlT2JqZWN0TW9kZSIsIndyaXRhYmxlSHdtIiwid3JpdGFibGVIaWdoV2F0ZXJNYXJrIiwiZmluYWxDYWxsZWQiLCJlbmRpbmciLCJmaW5pc2hlZCIsIm5vRGVjb2RlIiwiZGVjb2RlU3RyaW5ncyIsImNvcmtlZCIsImJ1ZmZlclByb2Nlc3NpbmciLCJvbndyaXRlIiwid3JpdGVsZW4iLCJvbndyaXRlU3RhdGVVcGRhdGUiLCJmaW5pc2hNYXliZSIsImVycm9yRW1pdHRlZCIsIm9ud3JpdGVFcnJvciIsIm5lZWRGaW5pc2giLCJidWZmZXJlZFJlcXVlc3QiLCJjbGVhckJ1ZmZlciIsImFmdGVyV3JpdGUiLCJsYXN0QnVmZmVyZWRSZXF1ZXN0IiwicHJlZmluaXNoZWQiLCJidWZmZXJlZFJlcXVlc3RDb3VudCIsInJlYWxIYXNJbnN0YW5jZSIsIndyaXRldiIsIl93cml0ZXYiLCJfZmluYWwiLCJkb1dyaXRlIiwib253cml0ZURyYWluIiwiaG9sZGVyIiwiYWxsQnVmZmVycyIsImlzQnVmIiwiY2FsbEZpbmFsIiwibmVlZCIsImdldEJ1ZmZlciIsImN1cnJlbnQiLCJvdXQiLCJoYXNJbnN0YW5jZSIsIndyaXRlQWZ0ZXJFbmQiLCJ2YWxpZCIsInZhbGlkQ2h1bmsiLCJuZXdDaHVuayIsImRlY29kZUNodW5rIiwibGFzdCIsIndyaXRlT3JCdWZmZXIiLCJzZXREZWZhdWx0RW5jb2RpbmciLCJ0b0xvd2VyQ2FzZSIsImVuZFdyaXRhYmxlIiwiY29weUJ1ZmZlciIsIm9mZnNldCIsImluc3BlY3QiLCJjdXN0b20iLCJlbWl0RXJyb3JOVCIsInJlYWRhYmxlRGVzdHJveWVkIiwid3JpdGFibGVEZXN0cm95ZWQiLCJpc0VuY29kaW5nIiwibmVuYyIsInJldHJpZWQiLCJfbm9ybWFsaXplRW5jb2RpbmciLCJub3JtYWxpemVFbmNvZGluZyIsInV0ZjE2VGV4dCIsInV0ZjE2RW5kIiwiZmlsbExhc3QiLCJ1dGY4RmlsbExhc3QiLCJiYXNlNjRUZXh0IiwiYmFzZTY0RW5kIiwic2ltcGxlV3JpdGUiLCJzaW1wbGVFbmQiLCJsYXN0TmVlZCIsImxhc3RUb3RhbCIsImxhc3RDaGFyIiwidXRmOENoZWNrQnl0ZSIsImJ5dGUiLCJ1dGY4Q2hlY2tFeHRyYUJ5dGVzIiwiY2hhckNvZGVBdCIsInRvdGFsIiwidXRmOENoZWNrSW5jb21wbGV0ZSIsInh0ZW5kIiwiRGVzdHJveWFibGVUcmFuc2Zvcm0iLCJfZGVzdHJveWVkIiwidGhyb3VnaDIiLCJ0MiIsIlRocm91Z2gyIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=