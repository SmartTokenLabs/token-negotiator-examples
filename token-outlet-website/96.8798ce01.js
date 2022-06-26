/*! For license information please see 96.8798ce01.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 96 ], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0k7VUFDaENvM0MsRUFBSXAzQyxLQUFLUSxFQUFHUjthQUdUbzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L0NvbXBvc2VkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L01lcmdlZFN0b3JlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9PYnNlcnZhYmxlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL29icy1zdG9yZS9kaXN0L2FzU3RyZWFtLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9vYnMtc3RvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svb2JzLXN0b3JlL2Rpc3QvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy9mZXRjaC1ub2RlLWRldGFpbHMvZGlzdC9mZXRjaE5vZGVEZXRhaWxzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL2h0dHAtaGVscGVycy9kaXN0L2h0dHBIZWxwZXJzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL29wZW5sb2dpbi11dGlscy9kaXN0L29wZW5sb2dpblV0aWxzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL29wZW5sb2dpbi1qcnBjL2Rpc3Qvb3BlbmxvZ2luSnJwYy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS93cmFwTmF0aXZlU3VwZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9ydXNsYWJzL3RvcnVzLmpzL2Rpc3QvdG9ydXNVdGlscy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRvcnVzbGFicy90b3J1cy1lbWJlZC9kaXN0L3RvcnVzLmVzbS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9rZW5zY3JpcHQvdG9rZW4tbmVnb3RpYXRvci9kaXN0L3dhbGxldC9Ub3J1c1Byb3ZpZGVyLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b3J1c2xhYnMvZWNjcnlwdG8vYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9iYXNlNjR1cmwvZGlzdC9iYXNlNjR1cmwuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2Rpc3QvcGFkLXN0cmluZy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9iYXNlNjR1cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY29yZS11dGlsLWlzL2xpYi91dGlsLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2VuZC1vZi1zdHJlYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2lzLXN0cmVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVyZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvbG9nbGV2ZWwvbGliL2xvZ2xldmVsLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzLW5leHRpY2stYXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wdW1wL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fZHVwbGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV9yZWFkYWJsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3dyaXRhYmxlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3Rocm91Z2gyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvQnVmZmVyTGlzdC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9zdHJlYW0tYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL3JlYWRhYmxlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdGhyb3VnaDIvbm9kZV9tb2R1bGVzL3N0cmluZ19kZWNvZGVyL2xpYi9zdHJpbmdfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90aHJvdWdoMi90aHJvdWdoMi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy93cmFwcHkvd3JhcHB5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cblxuICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgICBPcCA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgICAgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cblxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSxcbiAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yLl9pbnZva2UgPSBmdW5jdGlvbiAoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgICAgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICAgICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG5cbiAgICAgICAgaWYgKFwiY29tcGxldGVkXCIgPT09IHN0YXRlKSB7XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuXG4gICAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICAgICAgaWYgKFwic3VzcGVuZGVkU3RhcnRcIiA9PT0gc3RhdGUpIHRocm93IHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5hcmc7XG4gICAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICAgIHN0YXRlID0gXCJleGVjdXRpbmdcIjtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0oaW5uZXJGbiwgc2VsZiwgY29udGV4dCksIGdlbmVyYXRvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IGVyclxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpICYmIChJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcblxuICAgICAgaWYgKFwidGhyb3dcIiAhPT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmcsXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZih2YWx1ZSkgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIHRoaXMuX2ludm9rZSA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPSBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG5cbiAgICBpZiAodW5kZWZpbmVkID09PSBtZXRob2QpIHtcbiAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQsIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSkgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICB0cnlMb2M6IGxvY3NbMF1cbiAgICB9O1xuICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIiwgZGVsZXRlIHJlY29yZC5hcmcsIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgZm9yICg7ICsraSA8IGl0ZXJhYmxlLmxlbmd0aDspIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHJldHVybiBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV0sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogITBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpLCBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZ2VuRnVuICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpO1xuICB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApLCBnZW5GdW47XG4gIH0sIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IGFyZ1xuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICB2b2lkIDAgPT09IFByb21pc2VJbXBsICYmIChQcm9taXNlSW1wbCA9IFByb21pc2UpO1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksIFByb21pc2VJbXBsKTtcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cy5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBmb3IgKDsga2V5cy5sZW5ndGg7KSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgXCJ0XCIgPT09IG5hbWUuY2hhckF0KDApICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkgJiYgKHRoaXNbbmFtZV0gPSB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJvb3RSZWNvcmQudHlwZSkgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sXG4gICAgICAgICAgICByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGVudHJ5LnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7XG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfSwgZXhwb3J0cztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLy8gVE9ETyhCYWJlbCA4KTogUmVtb3ZlIHRoaXMgZmlsZS5cblxudmFyIHJ1bnRpbWUgPSByZXF1aXJlKFwiLi4vaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWVcIikoKTtcbm1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcblxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9wYWNrYWdlcy9ydW50aW1lL3J1bnRpbWUuanMjTDczNj1cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbXBvc2VkU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBPYnNlcnZhYmxlU3RvcmVfMSA9IHJlcXVpcmUoXCIuL09ic2VydmFibGVTdG9yZVwiKTtcbmNsYXNzIENvbXBvc2VkU3RvcmUgZXh0ZW5kcyBPYnNlcnZhYmxlU3RvcmVfMS5PYnNlcnZhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuKSB7XG4gICAgICAgIC8vIFR5cGVjYXN0OiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICBzdXBlcih7fSk7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBjaGlsZHJlblxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5fY2hpbGRyZW5bY2hpbGRLZXldO1xuICAgICAgICAgICAgdGhpcy5fYWRkQ2hpbGQoY2hpbGRLZXksIGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGlsZChjaGlsZEtleSwgY2hpbGQpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlRnJvbUNoaWxkID0gKGNoaWxkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgc3RhdGVbY2hpbGRLZXldID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUoc3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBjaGlsZC5zdWJzY3JpYmUodXBkYXRlRnJvbUNoaWxkKTtcbiAgICAgICAgdXBkYXRlRnJvbUNoaWxkKGNoaWxkLmdldFN0YXRlKCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tcG9zZWRTdG9yZSA9IENvbXBvc2VkU3RvcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb3NlZFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZXJnZWRTdG9yZSA9IHZvaWQgMDtcbmNvbnN0IE9ic2VydmFibGVTdG9yZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpO1xuY2xhc3MgTWVyZ2VkU3RvcmUgZXh0ZW5kcyBPYnNlcnZhYmxlU3RvcmVfMS5PYnNlcnZhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuID0gW10pIHtcbiAgICAgICAgLy8gVHlwZWNhc3Q6IFByZXNlcnZlIGV4aXN0aW5nIGJlaGF2aW9yXG4gICAgICAgIHN1cGVyKHt9KTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGNoaWxkcmVuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLl9hZGRDaGlsZChjaGlsZCkpO1xuICAgICAgICB0aGlzLl91cGRhdGVXaG9sZVN0YXRlKCk7XG4gICAgfVxuICAgIF9hZGRDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlV2hvbGVTdGF0ZSgpKTtcbiAgICB9XG4gICAgX3VwZGF0ZVdob2xlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkU3RhdGVzID0gdGhpcy5fY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZ2V0U3RhdGUoKSk7XG4gICAgICAgIC8vIGFwcGx5IHNoYWxsb3cgbWVyZ2Ugb3ZlciBzdGF0ZXNcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5jaGlsZFN0YXRlcyk7XG4gICAgICAgIHRoaXMucHV0U3RhdGUoc3RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVyZ2VkU3RvcmUgPSBNZXJnZWRTdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lcmdlZFN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PYnNlcnZhYmxlU3RvcmUgPSB2b2lkIDA7XG5jb25zdCBzYWZlX2V2ZW50X2VtaXR0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG1ldGFtYXNrL3NhZmUtZXZlbnQtZW1pdHRlclwiKSk7XG5jbGFzcyBPYnNlcnZhYmxlU3RvcmUgZXh0ZW5kcyBzYWZlX2V2ZW50X2VtaXR0ZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0U3RhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKGluaXRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBpbml0U3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUeXBlY2FzdC9kZWZhdWx0IHN0YXRlOiBQcmVzZXJ2ZSBleGlzdGluZyBiZWhhdmlvclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3cmFwcGVyIGFyb3VuZCBpbnRlcm5hbCBnZXRTdGF0ZVxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U3RhdGUoKTtcbiAgICB9XG4gICAgLy8gd3JhcHBlciBhcm91bmQgaW50ZXJuYWwgcHV0U3RhdGVcbiAgICBwdXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLl9wdXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgbmV3U3RhdGUpO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgLy8gaWYgbm9uLW51bGwgb2JqZWN0LCBtZXJnZVxuICAgICAgICBpZiAocGFydGlhbFN0YXRlICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHBhcnRpYWxTdGF0ZSkpO1xuICAgICAgICAgICAgLy8gaWYgbm90IG9iamVjdCwgdXNlIG5ldyB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXRTdGF0ZShwYXJ0aWFsU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAgc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5vbigndXBkYXRlJywgaGFuZGxlcik7XG4gICAgfVxuICAgIC8vIHVuc3Vic2NyaWJlIHRvIGNoYW5nZXNcbiAgICB1bnN1YnNjcmliZShoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ3VwZGF0ZScsIGhhbmRsZXIpO1xuICAgIH1cbiAgICAvL1xuICAgIC8vIHByaXZhdGVcbiAgICAvL1xuICAgIC8vIHJlYWQgZnJvbSBwZXJzaXN0ZW5jZVxuICAgIF9nZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvLyB3cml0ZSB0byBwZXJzaXN0ZW5jZVxuICAgIF9wdXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cbn1cbmV4cG9ydHMuT2JzZXJ2YWJsZVN0b3JlID0gT2JzZXJ2YWJsZVN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZVN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZUFzU3RyZWFtID0gdm9pZCAwO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY2xhc3MgT2JzZXJ2YWJsZVN0b3JlU3RyZWFtIGV4dGVuZHMgc3RyZWFtXzEuRHVwbGV4IHtcbiAgICBjb25zdHJ1Y3RvcihvYnNTdG9yZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICAvLyBwYXNzIHZhbHVlcywgbm90IHNlcmlhbGl6YXRpb25zXG4gICAgICAgICAgICBvYmplY3RNb2RlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZG9udCBidWZmZXIgb3V0Z29pbmcgdXBkYXRlc1xuICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAvLyBzYXZlIGhhbmRsZXIgc28gd2UgY2FuIHVuc3Vic2NyaWJlIGxhdGVyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IChzdGF0ZSkgPT4gdGhpcy5wdXNoKHN0YXRlKTtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9ic1N0b3JlIGNoYW5nZXNcbiAgICAgICAgdGhpcy5vYnNTdG9yZSA9IG9ic1N0b3JlO1xuICAgICAgICB0aGlzLm9ic1N0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyBlbWl0IGN1cnJlbnQgc3RhdGUgb24gbmV3IGRlc3RpbmF0aW9uXG4gICAgcGlwZShkZXN0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLnBpcGUoZGVzdCwgb3B0aW9ucyk7XG4gICAgICAgIGRlc3Qud3JpdGUodGhpcy5vYnNTdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gd3JpdGUgZnJvbSBpbmNvbWluZyBzdHJlYW0gdG8gc3RhdGVcbiAgICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vYnNTdG9yZS5wdXRTdGF0ZShjaHVuayk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIC8vIG5vb3AgLSBvdXRnb2luZyBzdHJlYW0gaXMgYXNraW5nIHVzIGlmIHdlIGhhdmUgZGF0YSB3ZSBhcmVudCBnaXZpbmcgaXRcbiAgICBfcmVhZChfc2l6ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyB1bnN1YnNjcmliZSBmcm9tIGV2ZW50IGVtaXR0ZXJcbiAgICBfZGVzdHJveShlcnIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2JzU3RvcmUudW5zdWJzY3JpYmUodGhpcy5oYW5kbGVyKTtcbiAgICAgICAgc3VwZXIuX2Rlc3Ryb3koZXJyLCBjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RvcmVBc1N0cmVhbShvYnNTdG9yZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVN0b3JlU3RyZWFtKG9ic1N0b3JlKTtcbn1cbmV4cG9ydHMuc3RvcmVBc1N0cmVhbSA9IHN0b3JlQXNTdHJlYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc1N0cmVhbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzU3RyZWFtXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Db21wb3NlZFN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9NZXJnZWRTdG9yZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vT2JzZXJ2YWJsZVN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90cmFuc2Zvcm1cIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlVHJhbnNmb3JtU3RyZWFtID0gdm9pZCAwO1xuY29uc3QgdGhyb3VnaDJfMSA9IHJlcXVpcmUoXCJ0aHJvdWdoMlwiKTtcbmZ1bmN0aW9uIHN0b3JlVHJhbnNmb3JtU3RyZWFtKHN5bmNUcmFuc2Zvcm1Gbikge1xuICAgIHJldHVybiB0aHJvdWdoMl8xLm9iaigoc3RhdGUsIF9lbmNvZGluZywgY2IpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3luY1RyYW5zZm9ybUZuKHN0YXRlKTtcbiAgICAgICAgICAgIGNiKG51bGwsIG5ld1N0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc3RvcmVUcmFuc2Zvcm1TdHJlYW0gPSBzdG9yZVRyYW5zZm9ybVN0cmVhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zZm9ybS5qcy5tYXAiLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBXZWIzRXRoQ29udHJhY3QgZnJvbSAnd2ViMy1ldGgtY29udHJhY3QnO1xuaW1wb3J0IHsga2VjY2FrMjU2LCB0b0hleCB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuXG5jb25zdCBFVEhFUkVVTV9ORVRXT1JLID0ge1xuICBST1BTVEVOOiBcInJvcHN0ZW5cIixcbiAgTUFJTk5FVDogXCJtYWlubmV0XCIsXG4gIFBPTFlHT046IFwicG9seWdvbi1tYWlubmV0XCJcbn07XG5jb25zdCBhYmkgPSBbe1xuICBpbnB1dHM6IFt7XG4gICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxuICAgIG5hbWU6IFwiX3ZlcmlmaWVyXCIsXG4gICAgdHlwZTogXCJzdHJpbmdcIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcImJ5dGVzMzJcIixcbiAgICBuYW1lOiBcImhhc2hlZFZlcmlmaWVySWRcIixcbiAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICB9XSxcbiAgbmFtZTogXCJnZXROb2RlU2V0XCIsXG4gIG91dHB1dHM6IFt7XG4gICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICBuYW1lOiBcImN1cnJlbnRFcG9jaFwiLFxuICAgIHR5cGU6IFwidWludDI1NlwiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwic3RyaW5nW11cIixcbiAgICBuYW1lOiBcInRvcnVzTm9kZUVuZHBvaW50c1wiLFxuICAgIHR5cGU6IFwic3RyaW5nW11cIlxuICB9LCB7XG4gICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZbXVwiLFxuICAgIG5hbWU6IFwidG9ydXNOb2RlUHViWFwiLFxuICAgIHR5cGU6IFwidWludDI1NltdXCJcbiAgfSwge1xuICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2W11cIixcbiAgICBuYW1lOiBcInRvcnVzTm9kZVB1YllcIixcbiAgICB0eXBlOiBcInVpbnQyNTZbXVwiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NltdXCIsXG4gICAgbmFtZTogXCJ0b3J1c0luZGV4ZXNcIixcbiAgICB0eXBlOiBcInVpbnQyNTZbXVwiXG4gIH1dLFxuICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICB0eXBlOiBcImZ1bmN0aW9uXCJcbn1dO1xuXG5jbGFzcyBOb2RlRGV0YWlsTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCB7XG4gICAgICBuZXR3b3JrID0gRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVULFxuICAgICAgcHJveHlBZGRyZXNzID0gXCIweGYyMDMzNmUxNkI1MTgyNjM3ZjA5ODIxYzI3QkRlMjliMEFGY2ZlODBcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2N1cnJlbnRFcG9jaFwiLCBcIjE5XCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RvcnVzTm9kZUVuZHBvaW50c1wiLCBbXCJodHRwczovL3RvcnVzLTE5LnRvcnVzbm9kZS5jb20vanJwY1wiLCBcImh0dHBzOi8vdG9ydXMtbm9kZS5lbnMuZG9tYWlucy9qcnBjXCIsIFwiaHR0cHM6Ly90b3J1cy1ub2RlLm1hdGljLm5ldHdvcmsvanJwY1wiLCBcImh0dHBzOi8vdG9ydXMuemlsbGlxYS5uZXR3b3JrL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW1haW5uZXQuY29zbW9zLm5ldHdvcmsvanJwY1wiLCBcImh0dHBzOi8vdG9ydXMyLmV0aGVyc2Nhbi5jb20vanJwY1wiLCBcImh0dHBzOi8vdG9ydXMtbm9kZS12Mi5za2FsZWxhYnMuY29tL2pycGNcIiwgXCJodHRwczovL3RvcnVzLW5vZGUuYmluYW5jZXguZGV2L2pycGNcIiwgXCJodHRwczovL3RvcnVzbm9kZS5vbnQuaW8vanJwY1wiXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdG9ydXNOb2RlUHViXCIsIFt7XG4gICAgICBYOiBcImJiZTgzYzY0MTc3YzM3NzU1NTBlNmJhNmFjMmJjMDU5ZjY4NDdkNjQ0YzllNDg5NGU0MmM2MGQ3OTc0ZDhjMmJcIixcbiAgICAgIFk6IFwiODJiNDlhN2NhZjcwZGVmMzhjZGFkMjc0MGFmNDVjMWU0Zjk2OTY1MDEwNWM1MDE5YTI5YmIxOGIyMWE5YWNiNVwiXG4gICAgfSwge1xuICAgICAgWDogXCJjMjA4Y2FjNGVmOWE0N2QzODYwOTdhOWM5MTViMjhlOWNiODkyMTNhYmVlOGQyNmExNzE5OGVlMjYxMjAxYjBkXCIsXG4gICAgICBZOiBcImM3ZGIyZmU0NjMxMTA5ZjQwODMzZGU5ZGM3OGQwN2UzNTcwNjU0OWVlNDhmYTU1N2IzM2U0ZTc1ZTEwNDc4NzNcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiY2ExNzY2YmI0MjZkNGNhNTU4MjgxOGEwYzU0MzlkNTYwZWE2NGY1YmFhMDYwNzkzYWIyOWRkM2QwY2VhY2ZlXCIsXG4gICAgICBZOiBcImQ0NmMxZDA4YzQwZTEzMDZlMWJjYTMyOGMyMjg3YjgyNjgxNjZiMTFhMWJhNGI4NDQyZWEyYWQwYzVlMzIxNTJcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiYzM5MzRkZDJmNmY0YjNkMmUxZTM5OGNjNTAxZTE0M2MxZTFhMzgxYjUyZmViNmQxNTI1YWYzNGQxNjI1Mzc2OFwiLFxuICAgICAgWTogXCI3MWY1MTQxYTUwMzU3OTkwOTlmNWVhM2UyNDFlNjY5NDZiYzU1ZGM4NTdhYzNiZDdkNmZjZGI4ZGNkM2VlZWVmXCJcbiAgICB9LCB7XG4gICAgICBYOiBcIjIyZTY2ZjE5Mjk2MzFkMDBiZjAyNjIyNzU4MTU5N2YwODVmZDk0ZmQ5NTJmYzBkY2E5ZjA4MzMzOThiNWMwNjRcIixcbiAgICAgIFk6IFwiNjA4OGIzOTEyZTEwYTFlOWQ1MDM1NWE2MDljMTBkYjdkMTg4ZjE2YTJlMmZkNzM1N2U1MWJmNGY2YTc0ZjBhMVwiXG4gICAgfSwge1xuICAgICAgWDogXCI5ZGM5ZmE0MTBmM2NlOWViNzBkZjcwY2RlYTAwYTQ5ZjJjNGNjN2EzMWMwOGMwZGFiNWY4NjNlZDM1ZmY1MTM5XCIsXG4gICAgICBZOiBcIjYyN2EyOTFjYjg3YTc1YzYxZGEzZjY1ZDY4MThlMWUwNWUzNjAyMTcxNzk4MTdlZDI3ZThjNzNiY2E3ZWMxMjJcIlxuICAgIH0sIHtcbiAgICAgIFg6IFwiMTE4YjlmYzA3ZTk3YjA5NmQ4OTliOWY2NjU4NDYzY2U2YThjYWE2NDAzOGUzN2ZjOTY5ZGY0ZTYwMjNkZDhjNlwiLFxuICAgICAgWTogXCJiYWY5ZmE0ZTUxNzcwZjQ3OTZlYTE2NWRkMDNhNzY5Yjg2MDY2ODFhMzg5NTRhMGE5MmM0Y2JmZmQ2NjA5Y2U5XCJcbiAgICB9LCB7XG4gICAgICBYOiBcIjhhNmQ4YjkyNWRhMTVhMjczZGVjM2Q4ZjgzOTVlYzM1Y2Q2ODc4ZjI3NGIyYjE4MGU0ZTEwNjk5OWRiNjQwNDNcIixcbiAgICAgIFk6IFwiOTZmNjdmODcwYzE1Nzc0M2RhMGIxZWI4NGQ4OWJmMzA1MDBkNzRkYzg0YzExZjUwMWVlMWNiMDEzYWNjOGM0NlwiXG4gICAgfSwge1xuICAgICAgWDogXCIzOWNlY2I2MmU4NjM3MjlmNTcyZjdkZmM0NmMyNDg2Nzk4MWJmMDRiYjQwNWZlZDBkZjM5ZTMzOTg0YmZhZGU1XCIsXG4gICAgICBZOiBcIjYxYzIzNjQ0MzQwMTJlNjhhMmJlMmU5OTUyODA1MDM3ZTUyNjI5ZDc3NjJmYWZjOGUxMGU5ZmI1YmFkOGY3OTBcIlxuICAgIH1dKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90b3J1c0luZGV4ZXNcIiwgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9uZXR3b3JrXCIsIEVUSEVSRVVNX05FVFdPUksuTUFJTk5FVCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJub2RlTGlzdEFkZHJlc3NcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVwZGF0ZWRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5vZGVMaXN0Q29udHJhY3RcIiwgdm9pZCAwKTtcblxuICAgIGxldCB1cmw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9jYWxVcmwgPSBuZXcgVVJMKG5ldHdvcmspO1xuICAgICAgdXJsID0gbG9jYWxVcmwuaHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBcImI4Y2RiMGU0Y2ZmMjQ1OTlhMjg2YmY4ZTg3ZmYxYzk2XCI7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vXCIuY29uY2F0KG5ldHdvcmssIFwiLmluZnVyYS5pby92My9cIikuY29uY2F0KHByb2plY3RJZCk7XG4gICAgfVxuXG4gICAgV2ViM0V0aENvbnRyYWN0LnNldFByb3ZpZGVyKHVybCk7XG4gICAgdGhpcy5ub2RlTGlzdENvbnRyYWN0ID0gbmV3IFdlYjNFdGhDb250cmFjdChhYmksIHByb3h5QWRkcmVzcyk7XG4gICAgdGhpcy5ub2RlTGlzdEFkZHJlc3MgPSBwcm94eUFkZHJlc3M7XG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fbmV0d29yayA9IG5ldHdvcms7XG4gIH1cblxuICBnZXQgX25vZGVEZXRhaWxzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50RXBvY2g6IHRoaXMuX2N1cnJlbnRFcG9jaCxcbiAgICAgIG5vZGVMaXN0QWRkcmVzczogdGhpcy5ub2RlTGlzdEFkZHJlc3MsXG4gICAgICB0b3J1c05vZGVFbmRwb2ludHM6IHRoaXMuX3RvcnVzTm9kZUVuZHBvaW50cyxcbiAgICAgIHRvcnVzTm9kZVB1YjogdGhpcy5fdG9ydXNOb2RlUHViLFxuICAgICAgdG9ydXNJbmRleGVzOiB0aGlzLl90b3J1c0luZGV4ZXMsXG4gICAgICB1cGRhdGVkOiB0aGlzLnVwZGF0ZWRcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0Tm9kZURldGFpbHMoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBza2lwID0gZmFsc2UsXG4gICAgICB2ZXJpZmllcixcbiAgICAgIHZlcmlmaWVySWRcbiAgICB9ID0gX3JlZjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoc2tpcCAmJiB0aGlzLl9uZXR3b3JrID09PSBFVEhFUkVVTV9ORVRXT1JLLk1BSU5ORVQpIHJldHVybiB0aGlzLl9ub2RlRGV0YWlsczsgLy8gRG8gdGhpcyBvbmx5IGZvciBtYWlubmV0IHdoZXJlIHRoZSBsaXN0IGlzIHN0YXRpYyBpcnJlc3BlY3RpdmUgb2YgdmVyaWZpZXIsIHZlcmlmaWVySWRcblxuICAgICAgaWYgKHRoaXMudXBkYXRlZCAmJiB0aGlzLl9uZXR3b3JrID09PSBFVEhFUkVVTV9ORVRXT1JLLk1BSU5ORVQpIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICAgIGNvbnN0IGhhc2hlZFZlcmlmaWVySWQgPSBrZWNjYWsyNTYodmVyaWZpZXJJZCk7XG4gICAgICBjb25zdCBub2RlRGV0YWlscyA9IGF3YWl0IHRoaXMubm9kZUxpc3RDb250cmFjdC5tZXRob2RzLmdldE5vZGVTZXQodmVyaWZpZXIsIGhhc2hlZFZlcmlmaWVySWQpLmNhbGwoKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VycmVudEVwb2NoLFxuICAgICAgICB0b3J1c05vZGVFbmRwb2ludHMsXG4gICAgICAgIHRvcnVzTm9kZVB1YlgsXG4gICAgICAgIHRvcnVzTm9kZVB1YlksXG4gICAgICAgIHRvcnVzSW5kZXhlc1xuICAgICAgfSA9IG5vZGVEZXRhaWxzO1xuICAgICAgdGhpcy5fY3VycmVudEVwb2NoID0gY3VycmVudEVwb2NoO1xuICAgICAgdGhpcy5fdG9ydXNJbmRleGVzID0gdG9ydXNJbmRleGVzLm1hcCh4ID0+IE51bWJlcih4KSk7XG4gICAgICBjb25zdCB1cGRhdGVkRW5kcG9pbnRzID0gW107XG4gICAgICBjb25zdCB1cGRhdGVkTm9kZVB1YiA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9ydXNOb2RlRW5kcG9pbnRzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICBjb25zdCBlbmRQb2ludEVsZW1lbnQgPSB0b3J1c05vZGVFbmRwb2ludHNbaW5kZXhdO1xuICAgICAgICBjb25zdCBwdWJLeCA9IHRvcnVzTm9kZVB1YlhbaW5kZXhdO1xuICAgICAgICBjb25zdCBwdWJLeSA9IHRvcnVzTm9kZVB1YllbaW5kZXhdO1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cHM6Ly9cIi5jb25jYXQoZW5kUG9pbnRFbGVtZW50LnNwbGl0KFwiOlwiKVswXSwgXCIvanJwY1wiKTtcbiAgICAgICAgdXBkYXRlZEVuZHBvaW50cy5wdXNoKGVuZHBvaW50KTtcbiAgICAgICAgdXBkYXRlZE5vZGVQdWIucHVzaCh7XG4gICAgICAgICAgWDogdG9IZXgocHViS3gpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcbiAgICAgICAgICBZOiB0b0hleChwdWJLeSkucmVwbGFjZShcIjB4XCIsIFwiXCIpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90b3J1c05vZGVFbmRwb2ludHMgPSB1cGRhdGVkRW5kcG9pbnRzO1xuICAgICAgdGhpcy5fdG9ydXNOb2RlUHViID0gdXBkYXRlZE5vZGVQdWI7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuX25vZGVEZXRhaWxzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAodGhpcy5fbmV0d29yayA9PT0gRVRIRVJFVU1fTkVUV09SSy5NQUlOTkVUKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlRGV0YWlscztcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IHsgRVRIRVJFVU1fTkVUV09SSywgYWJpLCBOb2RlRGV0YWlsTWFuYWdlciBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZXRjaE5vZGVEZXRhaWxzLmVzbS5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoLm1lcmdlJztcbmltcG9ydCBsb2dMZXZlbCwgeyBsZXZlbHMgfSBmcm9tICdsb2dsZXZlbCc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5jb25zdCBsb2cgPSBsb2dMZXZlbC5nZXRMb2dnZXIoXCJodHRwLWhlbHBlcnNcIik7XG5sb2cuc2V0TGV2ZWwobGV2ZWxzLklORk8pO1xubGV0IGFwaUtleSA9IFwidG9ydXMtZGVmYXVsdFwiO1xubGV0IGVtYmVkSG9zdCA9IFwiXCI7IC8vICNyZWdpb24gQVBJIEtleXNcblxuY29uc3QgZ2F0ZXdheUF1dGhIZWFkZXIgPSBcIngtYXBpLWtleVwiO1xuY29uc3QgZ2F0ZXdheUVtYmVkSG9zdEhlYWRlciA9IFwieC1lbWJlZC1ob3N0XCI7XG5mdW5jdGlvbiBzZXRFbWJlZEhvc3QoZW1iZWRIb3N0Xykge1xuICBlbWJlZEhvc3QgPSBlbWJlZEhvc3RfO1xufVxuZnVuY3Rpb24gY2xlYXJFbWJlZEhvc3QoKSB7XG4gIGVtYmVkSG9zdCA9IFwiXCI7XG59XG5mdW5jdGlvbiBnZXRFbWJlZEhvc3QoKSB7XG4gIHJldHVybiBlbWJlZEhvc3Q7XG59XG5mdW5jdGlvbiBzZXRBUElLZXkoYXBpS2V5Xykge1xuICBhcGlLZXkgPSBhcGlLZXlfO1xufVxuZnVuY3Rpb24gY2xlYXJBUElLZXkoKSB7XG4gIGFwaUtleSA9IFwidG9ydXMtZGVmYXVsdFwiO1xufVxuZnVuY3Rpb24gZ2V0QVBJS2V5KCkge1xuICByZXR1cm4gYXBpS2V5O1xufSAvLyAjZW5kcmVnaW9uXG5cbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7XG4gIGxvZy5zZXRMZXZlbChsZXZlbCk7XG59XG5cbmZ1bmN0aW9uIGdldEFwaUtleUhlYWRlcnMoKSB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgaWYgKGFwaUtleSkgaGVhZGVyc1tnYXRld2F5QXV0aEhlYWRlcl0gPSBhcGlLZXk7XG4gIGlmIChlbWJlZEhvc3QpIGhlYWRlcnNbZ2F0ZXdheUVtYmVkSG9zdEhlYWRlcl0gPSBlbWJlZEhvc3Q7XG4gIHJldHVybiBoZWFkZXJzO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gIGxvZy5pbmZvKFwiUmVzcG9uc2U6IFwiLmNvbmNhdChyZXNwb25zZS5zdGF0dXMsIFwiIFwiKS5jb25jYXQocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICBsb2cuaW5mbyhcIlVybDogXCIuY29uY2F0KHJlc3BvbnNlLnVybCkpO1xufVxuXG5jb25zdCBwcm9taXNlVGltZW91dCA9IChtcywgcHJvbWlzZSkgPT4ge1xuICBjb25zdCB0aW1lb3V0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRpbWVkIG91dCBpbiBcIi5jb25jYXQobXMsIFwibXNcIikpKTtcbiAgICB9LCBtcyk7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtwcm9taXNlLCB0aW1lb3V0XSk7XG59O1xuY29uc3QgZ2V0ID0gYXN5bmMgZnVuY3Rpb24gKHVybCkge1xuICBsZXQgb3B0aW9uc18gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBsZXQgY3VzdG9tT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIGhlYWRlcnM6IHt9XG4gIH07XG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiXG4gIH0pO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIGRlYnVnTG9nUmVzcG9uc2UocmVzcG9uc2UpO1xuICB0aHJvdyByZXNwb25zZTtcbn07XG5jb25zdCBwb3N0ID0gZnVuY3Rpb24gKHVybCkge1xuICBsZXQgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGxldCBvcHRpb25zXyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGxldCBjdXN0b21PcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcbiAgICB9XG4gIH07XG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIlxuICB9KTsgLy8gZGVlcCBtZXJnZSBjaGFuZ2VzIHRoZSBzdHJ1Y3R1cmUgb2YgZm9ybSBkYXRhIGFuZCB1cmwgZW5jb2RlZCBkYXRhICxcbiAgLy8gc28gd2Ugc2hvdWxkIG5vdCBkZWVwbWVyZ2UgYm9keSBkYXRhXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMuaXNVcmxFbmNvZGVkRGF0YSkge1xuICAgIC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gICAgLy8gYWxvbmcgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgLCBzbyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3Qgc2VuZFxuICAgIC8vIGNvbnRlbnQtdHlwZTogdW5kZWZpbmVkIG9yIHNlbmQgd2l0aCBtdWx0aXBhcnQgYm91bmRhcnkgaWYgYWxyZWFkeSBrbm93blxuICAgIG9wdGlvbnMuYm9keSA9IGRhdGE7IC8vIElmIHVybCBlbmNvZGVkIGRhdGEsIHRoaXMgbXVzdCBub3QgYmUgdGhlIGNvbnRlbnQgdHlwZVxuXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl07XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZVRpbWVvdXQoY3VzdG9tT3B0aW9ucy50aW1lb3V0IHx8IDYwMDAwLCBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfSkpO1xufTtcbmNvbnN0IHBhdGNoID0gYXN5bmMgZnVuY3Rpb24gKHVybCkge1xuICBsZXQgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGxldCBvcHRpb25zXyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGxldCBjdXN0b21PcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcbiAgICB9XG4gIH07IC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIlBBVENIXCJcbiAgfSk7IC8vIGRlZXAgbWVyZ2UgY2hhbmdlcyB0aGUgc3RydWN0dXJlIG9mIGZvcm0gZGF0YSBhbmQgdXJsIGVuY29kZWQgZGF0YSAsXG4gIC8vIHNvIHdlIHNob3VsZCBub3QgZGVlcG1lcmdlIGJvZHkgZGF0YVxuXG4gIGlmIChjdXN0b21PcHRpb25zLmlzVXJsRW5jb2RlZERhdGEpIHtcbiAgICAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAgIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cbiAgICBvcHRpb25zLmJvZHkgPSBkYXRhOyAvLyBJZiB1cmwgZW5jb2RlZCBkYXRhLCB0aGlzIG11c3Qgbm90IGJlIHRoZSBjb250ZW50IHR5cGVcblxuICAgIGlmIChvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKSBkZWxldGUgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgdGhyb3cgcmVzcG9uc2U7XG59O1xuY29uc3QgcmVtb3ZlID0gYXN5bmMgZnVuY3Rpb24gKHVybCkge1xuICBsZXQgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGxldCBvcHRpb25zXyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGxldCBjdXN0b21PcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcbiAgICB9XG4gIH07IC8vIGZvciBtdWx0aXBhcnQgcmVxdWVzdCBicm93c2VyL2NsaWVudCB3aWxsIGFkZCBtdWx0aXBhcnQgY29udGVudCB0eXBlXG4gIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgLy8gY29udGVudC10eXBlOiB1bmRlZmluZWQgb3Igc2VuZCB3aXRoIG11bHRpcGFydCBib3VuZGFyeSBpZiBhbHJlYWR5IGtub3duXG5cbiAgaWYgKGN1c3RvbU9wdGlvbnMudXNlQVBJS2V5KSB7XG4gICAgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMuaGVhZGVycyksIGdldEFwaUtleUhlYWRlcnMoKSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNfLCB7XG4gICAgbWV0aG9kOiBcIkRFTEVURVwiXG4gIH0pO1xuXG4gIGlmIChjdXN0b21PcHRpb25zLmlzVXJsRW5jb2RlZERhdGEpIHtcbiAgICAvLyBmb3IgbXVsdGlwYXJ0IHJlcXVlc3QgYnJvd3Nlci9jbGllbnQgd2lsbCBhZGQgbXVsdGlwYXJ0IGNvbnRlbnQgdHlwZVxuICAgIC8vIGFsb25nIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5ICwgc28gZm9yIG11bHRpcGFydCByZXF1ZXN0IHNlbmRcbiAgICAvLyBjb250ZW50LXR5cGU6IHVuZGVmaW5lZCBvciBzZW5kIHdpdGggbXVsdGlwYXJ0IGJvdW5kYXJ5IGlmIGFscmVhZHkga25vd25cbiAgICBvcHRpb25zLmJvZHkgPSBkYXRhOyAvLyBJZiB1cmwgZW5jb2RlZCBkYXRhLCB0aGlzIG11c3Qgbm90IGJlIHRoZSBjb250ZW50IHR5cGVcblxuICAgIGlmIChvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKSBkZWxldGUgb3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBkZWJ1Z0xvZ1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgdGhyb3cgcmVzcG9uc2U7XG59O1xuY29uc3QgZ2VuZXJhdGVKc29uUlBDT2JqZWN0ID0gKG1ldGhvZCwgcGFyYW1ldGVycykgPT4gKHtcbiAganNvbnJwYzogXCIyLjBcIixcbiAgbWV0aG9kLFxuICBpZDogMTAsXG4gIHBhcmFtczogcGFyYW1ldGVyc1xufSk7XG5jb25zdCBwcm9taXNlUmFjZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgbGV0IHRpbWVvdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDYwMDAwO1xuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtnZXQodXJsLCBvcHRpb25zKSwgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcInRpbWVkIG91dFwiKSk7XG4gICAgfSwgdGltZW91dCk7XG4gIH0pXSk7XG59O1xuXG5leHBvcnQgeyBjbGVhckFQSUtleSwgY2xlYXJFbWJlZEhvc3QsIGdhdGV3YXlBdXRoSGVhZGVyLCBnYXRld2F5RW1iZWRIb3N0SGVhZGVyLCBnZW5lcmF0ZUpzb25SUENPYmplY3QsIGdldCwgZ2V0QVBJS2V5LCBnZXRFbWJlZEhvc3QsIHBhdGNoLCBwb3N0LCBwcm9taXNlUmFjZSwgcHJvbWlzZVRpbWVvdXQsIHJlbW92ZSwgc2V0QVBJS2V5LCBzZXRFbWJlZEhvc3QsIHNldExvZ0xldmVsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwSGVscGVycy5lc20uanMubWFwXG4iLCJpbXBvcnQgcmFuZG9tYnl0ZXMgZnJvbSAncmFuZG9tYnl0ZXMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBiYXNlNjR1cmxMaWIgZnJvbSAnYmFzZTY0dXJsJztcbmltcG9ydCBrZWNjYWtMaWIgZnJvbSAna2VjY2FrJztcblxuY29uc3QgcmFuZG9tSWQgPSAoKSA9PiByYW5kb21ieXRlcygzMikudG9TdHJpbmcoXCJoZXhcIik7XG5cbmNsYXNzIFVSTFdpdGhIYXNoUGFyYW1zIGV4dGVuZHMgVVJMIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhhc2hQYXJhbXNcIiwgbmV3IFVSTFNlYXJjaFBhcmFtcygpKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuaGFzaFBhcmFtcy50b1N0cmluZygpO1xuICAgIHJldHVybiBzdXBlci50b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9XG5cbn1cblxuY29uc3QgYmFzZTY0dXJsID0gYmFzZTY0dXJsTGliO1xuZnVuY3Rpb24gc2FmZWJ0b2Eoc3RyKSB7XG4gIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKHN0cik7XG59XG5mdW5jdGlvbiBzYWZlYXRvYihzdHIpIHtcbiAgLy8gR29pbmcgYmFja3dhcmRzOiBmcm9tIGJ5dGVzdHJlYW0sIHRvIHBlcmNlbnQtZW5jb2RpbmcsIHRvIG9yaWdpbmFsIHN0cmluZy5cbiAgcmV0dXJuIGJhc2U2NHVybC5kZWNvZGUoc3RyKTtcbn1cbmNvbnN0IGtlY2NhayA9IGtlY2Nha0xpYjtcbmZ1bmN0aW9uIGJhc2U2NHRvSlNPTihiNjRzdHIpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0dXJsLmRlY29kZShiNjRzdHIpKTtcbn1cbmZ1bmN0aW9uIGpzb25Ub0Jhc2U2NChqc29uKSB7XG4gIHJldHVybiBiYXNlNjR1cmwuZW5jb2RlKEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbn1cbmZ1bmN0aW9uIGtlY2NhazI1NihzdHIpIHtcbiAgbGV0IGlucHV0ID0gc3RyO1xuXG4gIGlmICh0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiICYmIHN0ci5zbGljZSgwLCAyKSA9PT0gXCIweFwiICYmIHN0ci5sZW5ndGggPT09IDY2KSB7XG4gICAgaW5wdXQgPSBCdWZmZXIuZnJvbShzdHIuc2xpY2UoMiksIFwiaGV4XCIpO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IFwiMHhcIi5jb25jYXQoa2VjY2FrKFwia2VjY2FrMjU2XCIpLnVwZGF0ZShpbnB1dCkuZGlnZXN0KFwiaGV4XCIpLnBhZFN0YXJ0KDY0LCBcIjBcIikpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IHsgVVJMV2l0aEhhc2hQYXJhbXMsIGJhc2U2NHRvSlNPTiwgYmFzZTY0dXJsLCBqc29uVG9CYXNlNjQsIGtlY2Nhaywga2VjY2FrMjU2LCByYW5kb21JZCwgc2FmZWF0b2IsIHNhZmVidG9hIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVubG9naW5VdGlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgRHVwbGV4IH0gZnJvbSAncmVhZGFibGUtc3RyZWFtJztcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnQHRvcnVzbGFicy9vcGVubG9naW4tdXRpbHMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnZmFzdC1zYWZlLXN0cmluZ2lmeSc7XG5pbXBvcnQgeyBzZXJpYWxpemVFcnJvciB9IGZyb20gJ2V0aC1ycGMtZXJyb3JzJztcbmltcG9ydCBlb3MgZnJvbSAnZW5kLW9mLXN0cmVhbSc7XG5pbXBvcnQgb25jZSBmcm9tICdvbmNlJztcbmltcG9ydCBwdW1wIGZyb20gJ3B1bXAnO1xuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBTWU4gPSBcIlNZTlwiO1xuY29uc3QgQUNLID0gXCJBQ0tcIjtcbmNvbnN0IEJSSyA9IFwiQlJLXCI7XG5jbGFzcyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0gZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIG5hbWUsXG4gICAgICB0YXJnZXQsXG4gICAgICB0YXJnZXRXaW5kb3cgPSB3aW5kb3csXG4gICAgICB0YXJnZXRPcmlnaW4gPSBcIipcIlxuICAgIH0gPSBfcmVmO1xuICAgIHN1cGVyKHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWVcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbml0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaGF2ZVN5blwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX25hbWVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRXaW5kb3dcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YXJnZXRPcmlnaW5cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9vbk1lc3NhZ2VcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zeW5JbnRlcnZhbElkXCIsIHZvaWQgMCk7XG5cbiAgICBpZiAoIW5hbWUgfHwgIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dC5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuX2hhdmVTeW4gPSBmYWxzZTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQ7IC8vIHRhcmdldCBvcmlnaW5cblxuICAgIHRoaXMuX3RhcmdldFdpbmRvdyA9IHRhcmdldFdpbmRvdztcbiAgICB0aGlzLl90YXJnZXRPcmlnaW4gPSB0YXJnZXRPcmlnaW47XG4gICAgdGhpcy5fb25NZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zeW5JbnRlcnZhbElkID0gbnVsbDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fb25NZXNzYWdlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9oYW5kU2hha2UoKTtcbiAgfVxuXG4gIF9icmVhaygpIHtcbiAgICB0aGlzLmNvcmsoKTtcblxuICAgIHRoaXMuX3dyaXRlKEJSSywgbnVsbCwgbm9vcCk7XG5cbiAgICB0aGlzLl9oYXZlU3luID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdCA9IGZhbHNlO1xuICB9XG5cbiAgX2hhbmRTaGFrZSgpIHtcbiAgICB0aGlzLl93cml0ZShTWU4sIG51bGwsIG5vb3ApO1xuXG4gICAgdGhpcy5jb3JrKCk7XG4gIH1cblxuICBfb25EYXRhKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuX2luaXQpIHtcbiAgICAgIC8vIGxpc3RlbiBmb3IgaGFuZHNoYWtlXG4gICAgICBpZiAoZGF0YSA9PT0gU1lOKSB7XG4gICAgICAgIHRoaXMuX2hhdmVTeW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3dyaXRlKEFDSywgbnVsbCwgbm9vcCk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT09IEFDSykge1xuICAgICAgICB0aGlzLl9pbml0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuX2hhdmVTeW4pIHtcbiAgICAgICAgICB0aGlzLl93cml0ZShBQ0ssIG51bGwsIG5vb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51bmNvcmsoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEgPT09IEJSSykge1xuICAgICAgdGhpcy5fYnJlYWsoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yd2FyZCBtZXNzYWdlXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnB1c2goZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcG9zdE1lc3NhZ2UoZGF0YSkge1xuICAgIGNvbnN0IG9yaWdpbkNvbnN0cmFpbnQgPSB0aGlzLl90YXJnZXRPcmlnaW47XG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgdGFyZ2V0OiB0aGlzLl90YXJnZXQsXG4gICAgICBkYXRhXG4gICAgfSwgb3JpZ2luQ29uc3RyYWludCk7XG4gIH1cblxuICBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YTsgLy8gdmFsaWRhdGUgbWVzc2FnZVxuXG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbiAhPT0gXCIqXCIgJiYgZXZlbnQub3JpZ2luICE9PSB0aGlzLl90YXJnZXRPcmlnaW4gfHwgZXZlbnQuc291cmNlICE9PSB0aGlzLl90YXJnZXRXaW5kb3cgfHwgdHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIgfHwgbWVzc2FnZS50YXJnZXQgIT09IHRoaXMuX25hbWUgfHwgIW1lc3NhZ2UuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29uRGF0YShtZXNzYWdlLmRhdGEpO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIF93cml0ZShkYXRhLCBfLCBjYikge1xuICAgIHRoaXMuX3Bvc3RNZXNzYWdlKGRhdGEpO1xuXG4gICAgY2IoKTtcbiAgfVxuXG4gIF9kZXN0cm95KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9vbk1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHNhZmVBcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKSB7XG4gIHRyeSB7XG4gICAgUmVmbGVjdC5hcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVGhyb3cgZXJyb3IgYWZ0ZXIgdGltZW91dCBzbyBhcyBub3QgdG8gaW50ZXJydXB0IHRoZSBzdGFja1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyKSB7XG4gIGNvbnN0IG4gPSBhcnIubGVuZ3RoO1xuICBjb25zdCBjb3B5ID0gbmV3IEFycmF5KG4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufVxuXG5jbGFzcyBTYWZlRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgZW1pdCh0eXBlKSB7XG4gICAgbGV0IGRvRXJyb3IgPSB0eXBlID09PSBcImVycm9yXCI7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gICAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb0Vycm9yID0gZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKCFkb0Vycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG5cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChkb0Vycm9yKSB7XG4gICAgICBsZXQgZXI7XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgW2VyXSA9IGFyZ3M7XG4gICAgICB9XG5cbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuXG5cbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlVuaGFuZGxlZCBlcnJvci5cIi5jb25jYXQoZXIgPyBcIiAoXCIuY29uY2F0KGVyLm1lc3NhZ2UsIFwiKVwiKSA6IFwiXCIpKTtcbiAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgc2FmZUFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlcik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgc2FmZUFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxufVxuXG5jbGFzcyBTZXJpYWxpemFibGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBjb2RlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGRhdGFcbiAgICB9ID0gX3JlZjtcblxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29kZSBtdXN0IGJlIGFuIGludGVnZXJcIik7XG4gICAgfVxuXG4gICAgaWYgKCFtZXNzYWdlIHx8IHR5cGVvZiBtZXNzYWdlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXNzYWdlIG11c3QgYmUgc3RyaW5nXCIpO1xuICAgIH1cblxuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29kZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGF0YVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5jb2RlID0gY29kZTtcblxuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeSh7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBzdGFjazogdGhpcy5zdGFja1xuICAgIH0pO1xuICB9XG5cbn1cblxuY29uc3QgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICBsZXQgdW53cmFwUmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4gKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnJvciB8fCByZXNwb25zZS5lcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yIHx8IHJlc3BvbnNlLmVycm9yKTtcbiAgICB9IGVsc2UgaWYgKCF1bndyYXBSZXN1bHQgfHwgQXJyYXkuaXNBcnJheShyZXNwb25zZSkpIHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG4gICAgfVxuICB9O1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yTWlkZGxld2FyZShsb2cpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGpzb24tcnBjLWVuZ2luZSB3aWxsIHRlcm1pbmF0ZSB0aGUgcmVxdWVzdCB3aGVuIGl0IG5vdGljZXMgdGhpcyBlcnJvclxuICAgICAgaWYgKHR5cGVvZiByZXEubWV0aG9kICE9PSBcInN0cmluZ1wiIHx8ICFyZXEubWV0aG9kKSB7XG4gICAgICAgIHJlcy5lcnJvciA9IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBtZXRob2RcIlxuICAgICAgICB9KTtcbiAgICAgICAgZW5kKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dChkb25lID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH0gPSByZXM7XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuZXJyb3IoXCJPcGVuTG9naW4gLSBSUEMgRXJyb3I6IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihcIk9wZW5Mb2dpbiAtIFJQQyBFcnJvciB0aHJvd246IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICAgICAgcmVzLmVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUoKSB7XG4gIGNvbnN0IGlkTWFwID0ge307XG5cbiAgZnVuY3Rpb24gcmVhZE5vb3AoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gbmV3IFNhZmVFdmVudEVtaXR0ZXIoKTtcblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2UocmVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGlkTWFwW3Jlcy5pZF07XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmVhbU1pZGRsZXdhcmUgLSBVbmtub3duIHJlc3BvbnNlIGlkIFxcXCJcIi5jb25jYXQocmVzLmlkLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBpZE1hcFtyZXMuaWRdOyAvLyBjb3B5IHdob2xlIHJlcyBvbnRvIG9yaWdpbmFsIHJlc1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LnJlcywgcmVzKTsgLy8gcnVuIGNhbGxiYWNrIG9uIGVtcHR5IHN0YWNrLFxuICAgIC8vIHByZXZlbnQgaW50ZXJuYWwgc3RyZWFtLWhhbmRsZXIgZnJvbSBjYXRjaGluZyBlcnJvcnNcblxuICAgIHNldFRpbWVvdXQoY29udGV4dC5lbmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc05vdGlmaWNhdGlvbihyZXMpIHtcbiAgICBldmVudHMuZW1pdChcIm5vdGlmaWNhdGlvblwiLCByZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UocmVzLCBfZW5jb2RpbmcsIGNiKSB7XG4gICAgbGV0IGVycjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc05vdGlmaWNhdGlvbiA9ICFyZXMuaWQ7XG5cbiAgICAgIGlmIChpc05vdGlmaWNhdGlvbikge1xuICAgICAgICBwcm9jZXNzTm90aWZpY2F0aW9uKHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzUmVzcG9uc2UocmVzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICBlcnIgPSBfZXJyO1xuICAgIH0gLy8gY29udGludWUgcHJvY2Vzc2luZyBzdHJlYW1cblxuXG4gICAgY2IoZXJyKTtcbiAgfVxuXG4gIGNvbnN0IHN0cmVhbSA9IG5ldyBEdXBsZXgoe1xuICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgcmVhZDogcmVhZE5vb3AsXG4gICAgd3JpdGU6IHByb2Nlc3NNZXNzYWdlXG4gIH0pO1xuXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQsIGVuZCkgPT4ge1xuICAgIC8vIHdyaXRlIHJlcSB0byBzdHJlYW1cbiAgICBzdHJlYW0ucHVzaChyZXEpOyAvLyByZWdpc3RlciByZXF1ZXN0IG9uIGlkIG1hcFxuXG4gICAgaWRNYXBbcmVxLmlkXSA9IHtcbiAgICAgIHJlcSxcbiAgICAgIHJlcyxcbiAgICAgIG5leHQsXG4gICAgICBlbmRcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZXZlbnRzLFxuICAgIG1pZGRsZXdhcmUsXG4gICAgc3RyZWFtXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTY2FmZm9sZE1pZGRsZXdhcmUoaGFuZGxlcnMpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgZW5kKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW3JlcS5tZXRob2RdOyAvLyBpZiBubyBoYW5kbGVyLCByZXR1cm5cblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfSAvLyBpZiBoYW5kbGVyIGlzIGZuLCBjYWxsIGFzIG1pZGRsZXdhcmVcblxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzLCBuZXh0LCBlbmQpO1xuICAgIH0gLy8gaWYgaGFuZGxlciBpcyBzb21lIG90aGVyIHZhbHVlLCB1c2UgYXMgcmVzdWx0XG5cblxuICAgIHJlcy5yZXN1bHQgPSBoYW5kbGVyO1xuICAgIHJldHVybiBlbmQoKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlKCkge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0LCBfZW5kKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxJZCA9IHJlcS5pZDtcbiAgICBjb25zdCBuZXdJZCA9IHJhbmRvbUlkKCk7XG4gICAgcmVxLmlkID0gbmV3SWQ7XG4gICAgcmVzLmlkID0gbmV3SWQ7XG4gICAgbmV4dChkb25lID0+IHtcbiAgICAgIHJlcS5pZCA9IG9yaWdpbmFsSWQ7XG4gICAgICByZXMuaWQgPSBvcmlnaW5hbElkO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyTWlkZGxld2FyZShsb2dnZXIpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCwgXykgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZyhcIlJFUVwiLCByZXEsIFwiUkVTXCIsIHJlcyk7XG4gICAgbmV4dCgpO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQXN5bmNNaWRkbGV3YXJlKGFzeW5jTWlkZGxld2FyZSkge1xuICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAvLyBuZXh0UHJvbWlzZSBpcyB0aGUga2V5IHRvIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGl0IGlzIHJlc29sdmVkIGJ5IHRoZSByZXR1cm4gaGFuZGxlciBwYXNzZWQgdG8gdGhlXG4gICAgLy8gXCJuZXh0XCIgZnVuY3Rpb25cbiAgICBsZXQgcmVzb2x2ZU5leHRQcm9taXNlO1xuICAgIGNvbnN0IG5leHRQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICByZXNvbHZlTmV4dFByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGxldCByZXR1cm5IYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgIGxldCBuZXh0V2FzQ2FsbGVkID0gZmFsc2U7IC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgdGhlIGNvbnN1bWVyJ3MgYXN5bmMgbWlkZGxld2FyZS5cblxuICAgIGNvbnN0IGFzeW5jTmV4dCA9IGFzeW5jICgpID0+IHtcbiAgICAgIG5leHRXYXNDYWxsZWQgPSB0cnVlOyAvLyBXZSBwYXNzIGEgcmV0dXJuIGhhbmRsZXIgdG8gbmV4dCgpLiBXaGVuIGl0IGlzIGNhbGxlZCBieSB0aGUgZW5naW5lLFxuICAgICAgLy8gdGhlIGNvbnN1bWVyJ3MgYXN5bmMgbWlkZGxld2FyZSB3aWxsIHJlc3VtZSBleGVjdXRpbmcuXG5cbiAgICAgIG5leHQocnVuUmV0dXJuSGFuZGxlcnNDYWxsYmFjayA9PiB7XG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgY29tZXMgZnJvbSBKUlBDRW5naW5lLl9ydW5SZXR1cm5IYW5kbGVyc1xuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2sgPSBydW5SZXR1cm5IYW5kbGVyc0NhbGxiYWNrO1xuICAgICAgICByZXNvbHZlTmV4dFByb21pc2UoKTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgbmV4dFByb21pc2U7XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhc3luY01pZGRsZXdhcmUocmVxLCByZXMsIGFzeW5jTmV4dCk7XG5cbiAgICAgIGlmIChuZXh0V2FzQ2FsbGVkKSB7XG4gICAgICAgIGF3YWl0IG5leHRQcm9taXNlOyAvLyB3ZSBtdXN0IHdhaXQgdW50aWwgdGhlIHJldHVybiBoYW5kbGVyIGlzIGNhbGxlZFxuXG4gICAgICAgIHJldHVybkhhbmRsZXJDYWxsYmFjayhudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZChudWxsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKHJldHVybkhhbmRsZXJDYWxsYmFjaykge1xuICAgICAgICByZXR1cm5IYW5kbGVyQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbi8qKlxuICogQSBKU09OLVJQQyByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9jZXNzb3IuXG4gKiBHaXZlIGl0IGEgc3RhY2sgb2YgbWlkZGxld2FyZSwgcGFzcyBpdCByZXF1ZXN0cywgYW5kIGdldCBiYWNrIHJlc3BvbnNlcy5cbiAqL1xuXG5jbGFzcyBKUlBDRW5naW5lIGV4dGVuZHMgU2FmZUV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWlkZGxld2FyZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbWlkZGxld2FyZSA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBTZXJpYWxseSBleGVjdXRlcyB0aGUgZ2l2ZW4gc3RhY2sgb2YgbWlkZGxld2FyZS5cbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYW55IGVycm9yIGVuY291bnRlcmVkIGR1cmluZyBtaWRkbGV3YXJlIGV4ZWN1dGlvbixcbiAgICogYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgcmVxdWVzdCB3YXMgY29tcGxldGVkLCBhbmQgYW4gYXJyYXkgb2ZcbiAgICogbWlkZGxld2FyZS1kZWZpbmVkIHJldHVybiBoYW5kbGVycy5cbiAgICovXG5cblxuICBzdGF0aWMgYXN5bmMgX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIG1pZGRsZXdhcmVTdGFjaykge1xuICAgIGNvbnN0IHJldHVybkhhbmRsZXJzID0gW107XG4gICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlOyAvLyBHbyBkb3duIHN0YWNrIG9mIG1pZGRsZXdhcmUsIGNhbGwgYW5kIGNvbGxlY3Qgb3B0aW9uYWwgcmV0dXJuSGFuZGxlcnNcblxuICAgIGZvciAoY29uc3QgbWlkZGxld2FyZSBvZiBtaWRkbGV3YXJlU3RhY2spIHtcbiAgICAgIFtlcnJvciwgaXNDb21wbGV0ZV0gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlLCByZXR1cm5IYW5kbGVycyk7XG5cbiAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbZXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzLnJldmVyc2UoKV07XG4gIH1cbiAgLyoqXG4gICAqIFJ1bnMgYW4gaW5kaXZpZHVhbCBtaWRkbGV3YXJlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBhbnkgZXJyb3IgZW5jb3VudGVyZWQgZHVyaW5nIG1pZGRsZXdhcmUgZXhlY3Rpb24sXG4gICAqIGFuZCBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCBlbmQuXG4gICAqL1xuXG5cbiAgc3RhdGljIF9ydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtaWRkbGV3YXJlLCByZXR1cm5IYW5kbGVycykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGVuZCA9IGVyciA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyIHx8IHJlcy5lcnJvcjtcblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuZXJyb3IgPSBzZXJpYWxpemVFcnJvcihlcnJvcik7XG4gICAgICAgIH0gLy8gVHJ1ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBzaG91bGQgZW5kXG5cblxuICAgICAgICByZXNvbHZlKFtlcnJvciwgdHJ1ZV0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV4dCA9IHJldHVybkhhbmRsZXIgPT4ge1xuICAgICAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICAgICAgZW5kKHJlcy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJldHVybkhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0dXJuSGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGVuZChuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICAgICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkpSUENFbmdpbmU6ICduZXh0JyByZXR1cm4gaGFuZGxlcnMgbXVzdCBiZSBmdW5jdGlvbnNcIlxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybkhhbmRsZXJzLnB1c2gocmV0dXJuSGFuZGxlcik7XG4gICAgICAgICAgfSAvLyBGYWxzZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBzaG91bGQgbm90IGVuZFxuXG5cbiAgICAgICAgICByZXNvbHZlKFtudWxsLCBmYWxzZV0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0LCBlbmQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZW5kKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2VyaWFsbHkgZXhlY3V0ZXMgYXJyYXkgb2YgcmV0dXJuIGhhbmRsZXJzLiBUaGUgcmVxdWVzdCBhbmQgcmVzcG9uc2UgYXJlXG4gICAqIGFzc3VtZWQgdG8gYmUgaW4gdGhlaXIgc2NvcGUuXG4gICAqL1xuXG5cbiAgc3RhdGljIGFzeW5jIF9ydW5SZXR1cm5IYW5kbGVycyhoYW5kbGVycykge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBoYW5kbGVycykge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBoYW5kbGVyKGVyciA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcmVzcG9uc2UgaGFzIG5laXRoZXIgYSByZXN1bHQgbm9yIGFuIGVycm9yLCBvciBpZlxuICAgKiB0aGUgXCJpc0NvbXBsZXRlXCIgZmxhZyBpcyBmYWxzeS5cbiAgICovXG5cblxuICBzdGF0aWMgX2NoZWNrRm9yQ29tcGxldGlvbihyZXEsIHJlcywgaXNDb21wbGV0ZSkge1xuICAgIGlmICghKFwicmVzdWx0XCIgaW4gcmVzKSAmJiAhKFwiZXJyb3JcIiBpbiByZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwiUmVzcG9uc2UgaGFzIG5vIGVycm9yIG9yIHJlc3VsdCBmb3IgcmVxdWVzdFwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQ29tcGxldGUpIHtcbiAgICAgIHRocm93IG5ldyBTZXJpYWxpemFibGVFcnJvcih7XG4gICAgICAgIGNvZGU6IC0zMjYwMyxcbiAgICAgICAgbWVzc2FnZTogXCJOb3RoaW5nIGVuZGVkIHJlcXVlc3RcIlxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIHRoZSBlbmdpbmUncyBtaWRkbGV3YXJlIHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gbWlkZGxld2FyZSAtIFRoZSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICovXG5cblxuICBwdXNoKG1pZGRsZXdhcmUpIHtcbiAgICB0aGlzLl9taWRkbGV3YXJlLnB1c2gobWlkZGxld2FyZSk7XG4gIH1cblxuICBoYW5kbGUocmVxLCBjYikge1xuICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNhbGxiYWNrXCIgbXVzdCBiZSBhIGZ1bmN0aW9uIGlmIHByb3ZpZGVkLicpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlcSkpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlQmF0Y2gocmVxLCBjYik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVCYXRjaChyZXEpO1xuICAgIH1cblxuICAgIGlmIChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZShyZXEsIGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZUhhbmRsZShyZXEpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoaXMgZW5naW5lIGFzIGEgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwdXNoZWQgdG8gb3RoZXJcbiAgICogZW5naW5lcy5cbiAgICpcbiAgICogQHJldHVybnMgVGhpcyBlbmdpbmUgYXMgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uLlxuICAgKi9cblxuXG4gIGFzTWlkZGxld2FyZSgpIHtcbiAgICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0LCBlbmQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFttaWRkbGV3YXJlRXJyb3IsIGlzQ29tcGxldGUsIHJldHVybkhhbmRsZXJzXSA9IGF3YWl0IEpSUENFbmdpbmUuX3J1bkFsbE1pZGRsZXdhcmUocmVxLCByZXMsIHRoaXMuX21pZGRsZXdhcmUpO1xuXG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpO1xuICAgICAgICAgIHJldHVybiBlbmQobWlkZGxld2FyZUVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFzeW5jIGhhbmRsZXJDYWxsYmFjayA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEpSUENFbmdpbmUuX3J1blJldHVybkhhbmRsZXJzKHJldHVybkhhbmRsZXJzKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJDYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXJDYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlbmQoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBhc3luYyBfaGFuZGxlQmF0Y2gocmVxcywgY2IpIHtcbiAgICAvLyBUaGUgb3JkZXIgaGVyZSBpcyBpbXBvcnRhbnRcbiAgICB0cnkge1xuICAgICAgLy8gMi4gV2FpdCBmb3IgYWxsIHJlcXVlc3RzIHRvIGZpbmlzaCwgb3IgdGhyb3cgb24gc29tZSBraW5kIG9mIGZhdGFsXG4gICAgICAvLyBlcnJvclxuICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoIC8vIDEuIEJlZ2luIGV4ZWN1dGluZyBlYWNoIHJlcXVlc3QgaW4gdGhlIG9yZGVyIHJlY2VpdmVkXG4gICAgICByZXFzLm1hcCh0aGlzLl9wcm9taXNlSGFuZGxlLmJpbmQodGhpcykpKTsgLy8gMy4gUmV0dXJuIGJhdGNoIHJlc3BvbnNlXG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICByZXR1cm4gY2IobnVsbCwgcmVzcG9uc2VzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBjYihlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQSBwcm9taXNlLXdyYXBwZWQgX2hhbmRsZS5cbiAgICovXG5cblxuICBfcHJvbWlzZUhhbmRsZShyZXEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGUocmVxLCAoX2VyciwgcmVzKSA9PiB7XG4gICAgICAgIC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGEgcmVzcG9uc2UsIGFuZCBpdCB3aWxsIGFsd2F5cyBoYXZlIGFueSBlcnJvclxuICAgICAgICAvLyB0aGF0IGlzIGNhdWdodCBhbmQgcHJvcGFnYXRlZC5cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhhdCB0aGUgcmVxdWVzdCBvYmplY3QgaXMgdmFsaWQsIHByb2Nlc3NlcyBpdCwgYW5kIHBhc3NlcyBhbnlcbiAgICogZXJyb3IgYW5kIHRoZSByZXNwb25zZSBvYmplY3QgdG8gdGhlIGdpdmVuIGNhbGxiYWNrLlxuICAgKlxuICAgKiBEb2VzIG5vdCByZWplY3QuXG4gICAqL1xuXG5cbiAgYXN5bmMgX2hhbmRsZShjYWxsZXJSZXEsIGNiKSB7XG4gICAgaWYgKCFjYWxsZXJSZXEgfHwgQXJyYXkuaXNBcnJheShjYWxsZXJSZXEpIHx8IHR5cGVvZiBjYWxsZXJSZXEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IFNlcmlhbGl6YWJsZUVycm9yKHtcbiAgICAgICAgY29kZTogLTMyNjAzLFxuICAgICAgICBtZXNzYWdlOiBcInJlcXVlc3QgbXVzdCBiZSBwbGFpbiBvYmplY3RcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2IoZXJyb3IsIHtcbiAgICAgICAgaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgZXJyb3JcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsbGVyUmVxLm1ldGhvZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgU2VyaWFsaXphYmxlRXJyb3Ioe1xuICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgIG1lc3NhZ2U6IFwibWV0aG9kIG11c3QgYmUgc3RyaW5nXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNiKGVycm9yLCB7XG4gICAgICAgIGlkOiBjYWxsZXJSZXEuaWQsXG4gICAgICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgICAgIGVycm9yXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXEgPSBfb2JqZWN0U3ByZWFkJDEoe30sIGNhbGxlclJlcSk7XG5cbiAgICBjb25zdCByZXMgPSB7XG4gICAgICBpZDogcmVxLmlkLFxuICAgICAganNvbnJwYzogcmVxLmpzb25ycGNcbiAgICB9O1xuICAgIGxldCBlcnJvciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fcHJvY2Vzc1JlcXVlc3QocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgLy8gQSByZXF1ZXN0IGhhbmRsZXIgZXJyb3IsIGEgcmUtdGhyb3duIG1pZGRsZXdhcmUgZXJyb3IsIG9yIHNvbWV0aGluZ1xuICAgICAgLy8gdW5leHBlY3RlZC5cbiAgICAgIGVycm9yID0gX2Vycm9yO1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgLy8gRW5zdXJlIG5vIHJlc3VsdCBpcyBwcmVzZW50IG9uIGFuIGVycm9yZWQgcmVzcG9uc2VcbiAgICAgIGRlbGV0ZSByZXMucmVzdWx0O1xuXG4gICAgICBpZiAoIXJlcy5lcnJvcikge1xuICAgICAgICByZXMuZXJyb3IgPSBzZXJpYWxpemVFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNiKGVycm9yLCByZXMpO1xuICB9XG4gIC8qKlxuICAgKiBGb3IgdGhlIGdpdmVuIHJlcXVlc3QgYW5kIHJlc3BvbnNlLCBydW5zIGFsbCBtaWRkbGV3YXJlIGFuZCB0aGVpciByZXR1cm5cbiAgICogaGFuZGxlcnMsIGlmIGFueSwgYW5kIGVuc3VyZXMgdGhhdCBpbnRlcm5hbCByZXF1ZXN0IHByb2Nlc3Npbmcgc2VtYW50aWNzXG4gICAqIGFyZSBzYXRpc2ZpZWQuXG4gICAqL1xuXG5cbiAgYXN5bmMgX3Byb2Nlc3NSZXF1ZXN0KHJlcSwgcmVzKSB7XG4gICAgY29uc3QgW2Vycm9yLCBpc0NvbXBsZXRlLCByZXR1cm5IYW5kbGVyc10gPSBhd2FpdCBKUlBDRW5naW5lLl9ydW5BbGxNaWRkbGV3YXJlKHJlcSwgcmVzLCB0aGlzLl9taWRkbGV3YXJlKTsgLy8gVGhyb3cgaWYgXCJlbmRcIiB3YXMgbm90IGNhbGxlZCwgb3IgaWYgdGhlIHJlc3BvbnNlIGhhcyBuZWl0aGVyIGEgcmVzdWx0XG4gICAgLy8gbm9yIGFuIGVycm9yLlxuXG4gICAgSlJQQ0VuZ2luZS5fY2hlY2tGb3JDb21wbGV0aW9uKHJlcSwgcmVzLCBpc0NvbXBsZXRlKTsgLy8gVGhlIHJldHVybiBoYW5kbGVycyBzaG91bGQgcnVuIGV2ZW4gaWYgYW4gZXJyb3Igd2FzIGVuY291bnRlcmVkIGR1cmluZ1xuICAgIC8vIG1pZGRsZXdhcmUgcHJvY2Vzc2luZy5cblxuXG4gICAgYXdhaXQgSlJQQ0VuZ2luZS5fcnVuUmV0dXJuSGFuZGxlcnMocmV0dXJuSGFuZGxlcnMpOyAvLyBOb3cgd2UgcmUtdGhyb3cgdGhlIG1pZGRsZXdhcmUgcHJvY2Vzc2luZyBlcnJvciwgaWYgYW55LCB0byBjYXRjaCBpdFxuICAgIC8vIGZ1cnRoZXIgdXAgdGhlIGNhbGwgY2hhaW4uXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG59XG5mdW5jdGlvbiBtZXJnZU1pZGRsZXdhcmUobWlkZGxld2FyZVN0YWNrKSB7XG4gIGNvbnN0IGVuZ2luZSA9IG5ldyBKUlBDRW5naW5lKCk7XG4gIG1pZGRsZXdhcmVTdGFjay5mb3JFYWNoKG1pZGRsZXdhcmUgPT4gZW5naW5lLnB1c2gobWlkZGxld2FyZSkpO1xuICByZXR1cm4gZW5naW5lLmFzTWlkZGxld2FyZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlRW5naW5lU3RyZWFtKG9wdHMpIHtcbiAgaWYgKCFvcHRzIHx8ICFvcHRzLmVuZ2luZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZW5naW5lIHBhcmFtZXRlciFcIik7XG4gIH1cblxuICBjb25zdCB7XG4gICAgZW5naW5lXG4gIH0gPSBvcHRzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5cbiAgbGV0IHN0cmVhbTtcblxuICBmdW5jdGlvbiByZWFkKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZShyZXEsIF9lbmNvZGluZywgY2IpIHtcbiAgICBlbmdpbmUuaGFuZGxlKHJlcSwgKF9lcnIsIHJlcykgPT4ge1xuICAgICAgc3RyZWFtLnB1c2gocmVzKTtcbiAgICB9KTtcbiAgICBjYigpO1xuICB9XG5cbiAgc3RyZWFtID0gbmV3IER1cGxleCh7XG4gICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICByZWFkLFxuICAgIHdyaXRlXG4gIH0pOyAvLyBmb3J3YXJkIG5vdGlmaWNhdGlvbnNcblxuICBpZiAoZW5naW5lLm9uKSB7XG4gICAgZW5naW5lLm9uKFwibm90aWZpY2F0aW9uXCIsIG1lc3NhZ2UgPT4ge1xuICAgICAgc3RyZWFtLnB1c2gobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyZWFtO1xufVxuXG5jbGFzcyBTdWJzdHJlYW0gZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIHBhcmVudCxcbiAgICAgIG5hbWVcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcih7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcGFyZW50XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbmFtZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG4gIC8qKlxuICAgKiBFeHBsaWNpdGx5IHNldHMgcmVhZCBvcGVyYXRpb25zIHRvIGEgbm8tb3AuXG4gICAqL1xuXG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZGF0YSBzaG91bGQgYmUgd3JpdHRlbiB0byB0aGlzIHdyaXRhYmxlIHN0cmVhbS5cbiAgICpcbiAgICogQHBhcmFtIGNodW5rIC0gQXJiaXRyYXJ5IG9iamVjdCB0byB3cml0ZVxuICAgKiBAcGFyYW0gZW5jb2RpbmcgLSBFbmNvZGluZyB0byB1c2Ugd2hlbiB3cml0aW5nIHBheWxvYWRcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gQ2FsbGVkIHdoZW4gd3JpdGluZyBpcyBjb21wbGV0ZSBvciBhbiBlcnJvciBvY2N1cnNcbiAgICovXG5cblxuICBfd3JpdGUoY2h1bmssIF9lbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9wYXJlbnQucHVzaCh7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgZGF0YTogY2h1bmtcbiAgICB9KTtcblxuICAgIGNhbGxiYWNrKCk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgSUdOT1JFX1NVQlNUUkVBTSA9IFN5bWJvbChcIklHTk9SRV9TVUJTVFJFQU1cIik7XG5jbGFzcyBPYmplY3RNdWx0aXBsZXggZXh0ZW5kcyBEdXBsZXgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgc3VwZXIoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcHRzKSwge30sIHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWVcbiAgICB9KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3Vic3RyZWFtc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0U3RyZWFtXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9zdWJzdHJlYW1zID0ge307XG4gIH1cblxuICBjcmVhdGVTdHJlYW0obmFtZSkge1xuICAgIC8vIHZhbGlkYXRlIG5hbWVcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIG5hbWUgbXVzdCBub3QgYmUgZW1wdHlcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdE11bHRpcGxleCAtIFN1YnN0cmVhbSBmb3IgbmFtZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBhbHJlYWR5IGV4aXN0c1wiKSk7XG4gICAgfSAvLyBjcmVhdGUgc3Vic3RyZWFtXG5cblxuICAgIGNvbnN0IHN1YnN0cmVhbSA9IG5ldyBTdWJzdHJlYW0oe1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZVxuICAgIH0pO1xuICAgIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0gPSBzdWJzdHJlYW07IC8vIGxpc3RlbiBmb3IgcGFyZW50IHN0cmVhbSB0byBlbmRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG5cbiAgICBhbnlTdHJlYW1FbmQodGhpcywgX2Vycm9yID0+IHN1YnN0cmVhbS5kZXN0cm95KF9lcnJvciB8fCB1bmRlZmluZWQpKTtcbiAgICByZXR1cm4gc3Vic3RyZWFtO1xuICB9IC8vIGlnbm9yZSBzdHJlYW1zIChkb250IGRpc3BsYXkgb3JwaGFuZWQgZGF0YSB3YXJuaW5nKVxuXG5cbiAgaWdub3JlU3RyZWFtKG5hbWUpIHtcbiAgICAvLyB2YWxpZGF0ZSBuYW1lXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBuYW1lIG11c3Qgbm90IGJlIGVtcHR5XCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdWJzdHJlYW1zW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RNdWx0aXBsZXggLSBTdWJzdHJlYW0gZm9yIG5hbWUgXFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIgYWxyZWFkeSBleGlzdHNcIikpO1xuICAgIH0gLy8gc2V0XG5cblxuICAgIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV0gPSBJR05PUkVfU1VCU1RSRUFNO1xuICB9XG5cbiAgX3JlYWQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIF93cml0ZShjaHVuaywgX2VuY29kaW5nLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBkYXRhXG4gICAgfSA9IGNodW5rO1xuXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiT2JqZWN0TXVsdGlwbGV4IC0gbWFsZm9ybWVkIGNodW5rIHdpdGhvdXQgbmFtZSBcXFwiXCIuY29uY2F0KGNodW5rLCBcIlxcXCJcIikpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfSAvLyBnZXQgY29ycmVzcG9uZGluZyBzdWJzdHJlYW1cblxuXG4gICAgY29uc3Qgc3Vic3RyZWFtID0gdGhpcy5fc3Vic3RyZWFtc1tuYW1lXTtcblxuICAgIGlmICghc3Vic3RyZWFtKSB7XG4gICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiT2JqZWN0TXVsdGlwbGV4IC0gb3JwaGFuZWQgZGF0YSBmb3Igc3RyZWFtIFxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiXCIpKTtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0gLy8gcHVzaCBkYXRhIGludG8gc3Vic3RyZWFtXG5cblxuICAgIGlmIChzdWJzdHJlYW0gIT09IElHTk9SRV9TVUJTVFJFQU0pIHtcbiAgICAgIHN1YnN0cmVhbS5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG5cbn0gLy8gdXRpbFxuXG5mdW5jdGlvbiBhbnlTdHJlYW1FbmQoc3RyZWFtLCBfY2IpIHtcbiAgY29uc3QgY2IgPSBvbmNlKF9jYik7XG4gIGVvcyhzdHJlYW0sIHtcbiAgICByZWFkYWJsZTogZmFsc2VcbiAgfSwgY2IpO1xuICBlb3Moc3RyZWFtLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0sIGNiKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBNdWx0aXBsZXgoc3RyZWFtKSB7XG4gIGNvbnN0IG11eCA9IG5ldyBPYmplY3RNdWx0aXBsZXgoKTtcblxuICBtdXguZ2V0U3RyZWFtID0gZnVuY3Rpb24gc3RyZWFtSGVscGVyKG5hbWUpIHtcbiAgICBpZiAodGhpcy5fc3Vic3RyZWFtc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnN0cmVhbXNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlU3RyZWFtKG5hbWUpO1xuICB9O1xuXG4gIHB1bXAoc3RyZWFtLCBtdXgsIHN0cmVhbSwgZXJyID0+IHtcbiAgICBpZiAoZXJyKSB3aW5kb3cuY29uc29sZS5lcnJvcihlcnIpO1xuICB9KTtcbiAgcmV0dXJuIG11eDtcbn1cblxuY2xhc3MgUG9zdE1lc3NhZ2VTdHJlYW0gZXh0ZW5kcyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0ge1xuICBfcG9zdE1lc3NhZ2UoZGF0YSkge1xuICAgIGxldCBvcmlnaW5Db25zdHJhaW50ID0gdGhpcy5fdGFyZ2V0T3JpZ2luO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCBkYXRhT2JqID0gZGF0YTtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhT2JqLmRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3QgZGF0YU9iakRhdGEgPSBkYXRhT2JqLmRhdGE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YU9iakRhdGEucGFyYW1zKSAmJiBkYXRhT2JqRGF0YS5wYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGRhdGFPYmpEYXRhUGFyYW0gPSBkYXRhT2JqRGF0YS5wYXJhbXNbMF07XG5cbiAgICAgICAgICBpZiAoZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luKSB7XG4gICAgICAgICAgICBvcmlnaW5Db25zdHJhaW50ID0gZGF0YU9iakRhdGFQYXJhbS5fb3JpZ2luO1xuICAgICAgICAgIH0gLy8gYWRkIGEgY29uc3RyYWludCBmb3IgdGhlIHJlc3BvbnNlXG5cblxuICAgICAgICAgIGRhdGFPYmpEYXRhUGFyYW0uX29yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl90YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgdGFyZ2V0OiB0aGlzLl90YXJnZXQsXG4gICAgICBkYXRhXG4gICAgfSwgb3JpZ2luQ29uc3RyYWludCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0sIElHTk9SRV9TVUJTVFJFQU0sIEpSUENFbmdpbmUsIE9iamVjdE11bHRpcGxleCwgUG9zdE1lc3NhZ2VTdHJlYW0sIFNhZmVFdmVudEVtaXR0ZXIsIFNlcmlhbGl6YWJsZUVycm9yLCBTdWJzdHJlYW0sIGNyZWF0ZUFzeW5jTWlkZGxld2FyZSwgY3JlYXRlRW5naW5lU3RyZWFtLCBjcmVhdGVFcnJvck1pZGRsZXdhcmUsIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlLCBjcmVhdGVMb2dnZXJNaWRkbGV3YXJlLCBjcmVhdGVTY2FmZm9sZE1pZGRsZXdhcmUsIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUsIGdldFJwY1Byb21pc2VDYWxsYmFjaywgbWVyZ2VNaWRkbGV3YXJlLCBzZXR1cE11bHRpcGxleCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3BlbmxvZ2luSnJwYy5lc20uanMubWFwXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3QuYmluZCgpO1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVGdW5jdGlvbiBmcm9tIFwiLi9pc05hdGl2ZUZ1bmN0aW9uLmpzXCI7XG5pbXBvcnQgY29uc3RydWN0IGZyb20gXCIuL2NvbnN0cnVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3InO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcml2YXRlLCBnZXRQdWJsaWMsIGRlY3J5cHQgfSBmcm9tICdAdG9ydXNsYWJzL2VjY3J5cHRvJztcbmltcG9ydCB7IHBvc3QsIGdlbmVyYXRlSnNvblJQQ09iamVjdCwgZ2V0LCBzZXRBUElLZXksIHNldEVtYmVkSG9zdCB9IGZyb20gJ0B0b3J1c2xhYnMvaHR0cC1oZWxwZXJzJztcbmltcG9ydCBCTiBmcm9tICdibi5qcyc7XG5pbXBvcnQgeyBlYyB9IGZyb20gJ2VsbGlwdGljJztcbmltcG9ydCBKc29uU3RyaW5naWZ5IGZyb20gJ2pzb24tc3RhYmxlLXN0cmluZ2lmeSc7XG5pbXBvcnQgeyB0b0NoZWNrc3VtQWRkcmVzcyB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuaW1wb3J0IGxvZ2xldmVsIGZyb20gJ2xvZ2xldmVsJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgX3dyYXBOYXRpdmVTdXBlciBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlcic7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0IGNyZWF0ZUtlY2Nha0hhc2ggZnJvbSAna2VjY2FrJztcblxudmFyIGxvZyA9IGxvZ2xldmVsLmdldExvZ2dlcihcInRvcnVzLmpzXCIpO1xubG9nLmRpc2FibGVBbGwoKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDEoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxudmFyIFNvbWVFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhTb21lRXJyb3IsIF9FcnJvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQxKFNvbWVFcnJvcik7XG5cbiAgZnVuY3Rpb24gU29tZUVycm9yKF9yZWYpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgZXJyb3JzID0gX3JlZi5lcnJvcnMsXG4gICAgICAgIHJlc3BvbnNlcyA9IF9yZWYucmVzcG9uc2VzLFxuICAgICAgICBwcmVkaWNhdGUgPSBfcmVmLnByZWRpY2F0ZTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb21lRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIlVuYWJsZSB0byByZXNvbHZlIGVub3VnaCBwcm9taXNlcy5cIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZXJyb3JzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzcG9uc2VzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJlZGljYXRlXCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgX3RoaXMucmVzcG9uc2VzID0gcmVzcG9uc2VzO1xuICAgIF90aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gX2NyZWF0ZUNsYXNzKFNvbWVFcnJvcik7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xudmFyIFNvbWUgPSBmdW5jdGlvbiBTb21lKHByb21pc2VzLCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZmluaXNoZWRDb3VudCA9IDA7XG4gICAgdmFyIHNoYXJlZFN0YXRlID0ge1xuICAgICAgcmVzb2x2ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICB2YXIgZXJyb3JBcnIgPSBuZXcgQXJyYXkocHJvbWlzZXMubGVuZ3RoKS5maWxsKHVuZGVmaW5lZCk7XG4gICAgdmFyIHJlc3VsdEFyciA9IG5ldyBBcnJheShwcm9taXNlcy5sZW5ndGgpLmZpbGwodW5kZWZpbmVkKTtcbiAgICB2YXIgcHJlZGljYXRlRXJyb3I7XG4gICAgcmV0dXJuIHByb21pc2VzLmZvckVhY2goZnVuY3Rpb24gKHgsIGluZGV4KSB7XG4gICAgICByZXR1cm4geC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIHJlc3VsdEFycltpbmRleF0gPSByZXNwO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGVycm9yQXJyW2luZGV4XSA9IGVycm9yO1xuICAgICAgfSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2Uvbm8tcmV0dXJuLWluLWZpbmFsbHlcbiAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNoYXJlZFN0YXRlLnJlc29sdmVkKSByZXR1cm47XG4gICAgICAgIHJldHVybiBwcmVkaWNhdGUocmVzdWx0QXJyLnNsaWNlKDApLCBzaGFyZWRTdGF0ZSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHNoYXJlZFN0YXRlLnJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIC8vIGxvZyBvbmx5IHRoZSBsYXN0IHByZWRpY2F0ZSBlcnJvclxuICAgICAgICAgIHByZWRpY2F0ZUVycm9yID0gZXJyb3I7XG4gICAgICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZpbmlzaGVkQ291bnQgKz0gMTtcblxuICAgICAgICAgIGlmIChmaW5pc2hlZENvdW50ID09PSBwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBPYmplY3QudmFsdWVzKHJlc3VsdEFyci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgeikge1xuICAgICAgICAgICAgICBpZiAoeikge1xuICAgICAgICAgICAgICAgIHZhciBfZXJyb3IkZGF0YTtcblxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHouaWQsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gei5lcnJvcjtcblxuICAgICAgICAgICAgICAgIGlmICgoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXJyb3IkZGF0YSA9IGVycm9yLmRhdGEpID09PSBudWxsIHx8IF9lcnJvciRkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXJyb3IkZGF0YS5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmRhdGEuc3RhcnRzV2l0aChcIkVycm9yIG9jY3VycmVkIHdoaWxlIHZlcmlmeWluZyBwYXJhbXNcIikpIGFjY1tpZF0gPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZXJyb3IuZGF0YSk7ZWxzZSBhY2NbaWRdID0gZXJyb3IuZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pKTtcblxuICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIC8vIEZvcm1hdC1hYmxlIGVycm9yc1xuICAgICAgICAgICAgICB2YXIgbXNnID0gZXJyb3JzLmxlbmd0aCA+IDEgPyBcIlxcblwiLmNvbmNhdChlcnJvcnMubWFwKGZ1bmN0aW9uIChpdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlxcdTIwMjIgXCIuY29uY2F0KGl0KTtcbiAgICAgICAgICAgICAgfSkuam9pbihcIlxcblwiKSkgOiBlcnJvcnNbMF07XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IobXNnKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgX3ByZWRpY2F0ZUVycm9yO1xuXG4gICAgICAgICAgICAgIHJlamVjdChuZXcgU29tZUVycm9yKHtcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9yQXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlczogcmVzdWx0QXJyLFxuICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogKChfcHJlZGljYXRlRXJyb3IgPSBwcmVkaWNhdGVFcnJvcikgPT09IG51bGwgfHwgX3ByZWRpY2F0ZUVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJlZGljYXRlRXJyb3IubWVzc2FnZSkgfHwgcHJlZGljYXRlRXJyb3JcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxudmFyIEdldE9yU2V0Tm9uY2VFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhHZXRPclNldE5vbmNlRXJyb3IsIF9FcnJvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihHZXRPclNldE5vbmNlRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIEdldE9yU2V0Tm9uY2VFcnJvcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2V0T3JTZXROb25jZUVycm9yKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoR2V0T3JTZXROb25jZUVycm9yKTtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG52YXIga0NvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uIGtDb21iaW5hdGlvbnMocywgaykge1xuICB2YXIgc2V0ID0gcztcblxuICBpZiAodHlwZW9mIHNldCA9PT0gXCJudW1iZXJcIikge1xuICAgIHNldCA9IEFycmF5LmZyb20oe1xuICAgICAgbGVuZ3RoOiBzZXRcbiAgICB9LCBmdW5jdGlvbiAoXywgaSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoayA+IHNldC5sZW5ndGggfHwgayA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgaWYgKGsgPT09IHNldC5sZW5ndGgpIHtcbiAgICByZXR1cm4gW3NldF07XG4gIH1cblxuICBpZiAoayA9PT0gMSkge1xuICAgIHJldHVybiBzZXQucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYWNjKSwgW1tjdXJdXSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgdmFyIGNvbWJzID0gW107XG4gIHZhciB0YWlsQ29tYnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBzZXQubGVuZ3RoIC0gayArIDE7IGkgKz0gMSkge1xuICAgIHRhaWxDb21icyA9IGtDb21iaW5hdGlvbnMoc2V0LnNsaWNlKGkgKyAxKSwgayAtIDEpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0YWlsQ29tYnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbWJzLnB1c2goW3NldFtpXV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0YWlsQ29tYnNbal0pKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbWJzO1xufTtcbnZhciB0aHJlc2hvbGRTYW1lID0gZnVuY3Rpb24gdGhyZXNob2xkU2FtZShhcnIsIHQpIHtcbiAgdmFyIGhhc2hNYXAgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBzdHIgPSBKc29uU3RyaW5naWZ5KGFycltpXSk7XG4gICAgaGFzaE1hcFtzdHJdID0gaGFzaE1hcFtzdHJdID8gaGFzaE1hcFtzdHJdICsgMSA6IDE7XG5cbiAgICBpZiAoaGFzaE1hcFtzdHJdID09PSB0KSB7XG4gICAgICByZXR1cm4gYXJyW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xudmFyIGtleUxvb2t1cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKSB7XG4gICAgdmFyIGxvb2t1cFByb21pc2VzO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBsb29rdXBQcm9taXNlcyA9IGVuZHBvaW50cy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBvc3QoeCwgZ2VuZXJhdGVKc29uUlBDT2JqZWN0KFwiVmVyaWZpZXJMb29rdXBSZXF1ZXN0XCIsIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgdmVyaWZpZXJfaWQ6IHZlcmlmaWVySWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2cuZXJyb3IoXCJsb29rdXAgcmVxdWVzdCBmYWlsZWRcIiwgZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgU29tZShsb29rdXBQcm9taXNlcywgZnVuY3Rpb24gKGxvb2t1cFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgdmFyIGxvb2t1cFNoYXJlcyA9IGxvb2t1cFJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uICh4MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4MTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHZhciBlcnJvclJlc3VsdCA9IHRocmVzaG9sZFNhbWUobG9va3VwU2hhcmVzLm1hcChmdW5jdGlvbiAoeDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDIgJiYgeDIuZXJyb3I7XG4gICAgICAgICAgICAgIH0pLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTtcbiAgICAgICAgICAgICAgdmFyIGtleVJlc3VsdCA9IHRocmVzaG9sZFNhbWUobG9va3VwU2hhcmVzLm1hcChmdW5jdGlvbiAoeDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDMgJiYgeDMucmVzdWx0O1xuICAgICAgICAgICAgICB9KSwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7XG5cbiAgICAgICAgICAgICAgaWYgKGtleVJlc3VsdCB8fCBlcnJvclJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAga2V5UmVzdWx0OiBrZXlSZXN1bHQsXG4gICAgICAgICAgICAgICAgICBlcnJvclJlc3VsdDogZXJyb3JSZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIHJlc3VsdHMgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGxvb2t1cFJlc3VsdHMpKSkpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBrZXlMb29rdXAoX3gsIF94MiwgX3gzKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcbnZhciB3YWl0S2V5TG9va3VwID0gZnVuY3Rpb24gd2FpdEtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkLCB0aW1lb3V0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBrZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9KTtcbn07XG52YXIga2V5QXNzaWduID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoX3JlZjIpIHtcbiAgICB2YXIgZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzLCBsYXN0UG9pbnQsIGZpcnN0UG9pbnQsIHZlcmlmaWVyLCB2ZXJpZmllcklkLCBzaWduZXJIb3N0LCBuZXR3b3JrLCBub2RlTnVtLCBpbml0aWFsUG9pbnQsIGRhdGEsIHNpZ25lZERhdGEsIGFjY2VwdGVkRXJyb3JNc2dzO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZW5kcG9pbnRzID0gX3JlZjIuZW5kcG9pbnRzLCB0b3J1c05vZGVQdWJzID0gX3JlZjIudG9ydXNOb2RlUHVicywgbGFzdFBvaW50ID0gX3JlZjIubGFzdFBvaW50LCBmaXJzdFBvaW50ID0gX3JlZjIuZmlyc3RQb2ludCwgdmVyaWZpZXIgPSBfcmVmMi52ZXJpZmllciwgdmVyaWZpZXJJZCA9IF9yZWYyLnZlcmlmaWVySWQsIHNpZ25lckhvc3QgPSBfcmVmMi5zaWduZXJIb3N0LCBuZXR3b3JrID0gX3JlZjIubmV0d29yaztcblxuICAgICAgICAgICAgaWYgKGxhc3RQb2ludCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG5vZGVOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmRwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgaW5pdGlhbFBvaW50ID0gbm9kZU51bTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVOdW0gPSBsYXN0UG9pbnQgJSBlbmRwb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShub2RlTnVtID09PSBmaXJzdFBvaW50KSkge1xuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb29wZWQgdGhyb3VnaCBhbGxcIik7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBpZiAoZmlyc3RQb2ludCAhPT0gdW5kZWZpbmVkKSBpbml0aWFsUG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICAgICAgZGF0YSA9IGdlbmVyYXRlSnNvblJQQ09iamVjdChcIktleUFzc2lnblwiLCB7XG4gICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgdmVyaWZpZXJfaWQ6IHZlcmlmaWVySWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDY7XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDk7XG4gICAgICAgICAgICByZXR1cm4gcG9zdChzaWduZXJIb3N0LCBkYXRhLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBwdWJLZXlYOiB0b3J1c05vZGVQdWJzW25vZGVOdW1dLlgsXG4gICAgICAgICAgICAgICAgcHViS2V5WTogdG9ydXNOb2RlUHVic1tub2RlTnVtXS5ZLFxuICAgICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgc2lnbmVkRGF0YSA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxMjtcbiAgICAgICAgICAgIHJldHVybiBwb3N0KGVuZHBvaW50c1tub2RlTnVtXSwgX29iamVjdFNwcmVhZCQxKF9vYmplY3RTcHJlYWQkMSh7fSwgZGF0YSksIHNpZ25lZERhdGEpLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDIuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAxNTtcbiAgICAgICAgICAgIF9jb250ZXh0Mi50MCA9IF9jb250ZXh0MltcImNhdGNoXCJdKDYpO1xuICAgICAgICAgICAgbG9nLmVycm9yKF9jb250ZXh0Mi50MCk7XG4gICAgICAgICAgICBhY2NlcHRlZEVycm9yTXNncyA9IFsvLyBTbG93IG5vZGVcbiAgICAgICAgICAgIFwiVGltZWQgb3V0XCIsIC8vIEhhcHBlbnMgd2hlbiB0aGUgbm9kZSBpcyBub3QgcmVhY2hhYmxlIChkbnMgaXNzdWUgZXRjKVxuICAgICAgICAgICAgXCJUeXBlRXJyb3I6IEZhaWxlZCB0byBmZXRjaFwiLCBcIlR5cGVFcnJvcjogY2FuY2VsbGVkXCIsIFwiVHlwZUVycm9yOiBOZXR3b3JrRXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGZldGNoIHJlc291cmNlLlwiIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmICghYWNjZXB0ZWRFcnJvck1zZ3MuaW5jbHVkZXMoX2NvbnRleHQyLnQwLm1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBrZXlBc3NpZ24oe1xuICAgICAgICAgICAgICBlbmRwb2ludHM6IGVuZHBvaW50cyxcbiAgICAgICAgICAgICAgdG9ydXNOb2RlUHViczogdG9ydXNOb2RlUHVicyxcbiAgICAgICAgICAgICAgbGFzdFBvaW50OiBub2RlTnVtICsgMSxcbiAgICAgICAgICAgICAgZmlyc3RQb2ludDogaW5pdGlhbFBvaW50LFxuICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgIHZlcmlmaWVySWQ6IHZlcmlmaWVySWQsXG4gICAgICAgICAgICAgIHNpZ25lckhvc3Q6IHNpZ25lckhvc3QsXG4gICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb3JyeSwgdGhlIFRvcnVzIE5ldHdvcmsgdGhhdCBwb3dlcnMgV2ViM0F1dGggaXMgY3VycmVudGx5IHZlcnkgYnVzeS5cXG4gICAgV2Ugd2lsbCBnZW5lcmF0ZSB5b3VyIGtleSBpbiB0aW1lLiBQbHMgdHJ5IGFnYWluIGxhdGVyLiBcXG5cXG4gICAgXCIuY29uY2F0KF9jb250ZXh0Mi50MC5tZXNzYWdlIHx8IFwiXCIpKTtcblxuICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMiwgbnVsbCwgW1s2LCAxNV1dKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBrZXlBc3NpZ24oX3g0KSB7XG4gICAgcmV0dXJuIF9yZWYzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5mdW5jdGlvbiBrZWNjYWsyNTYoYSkge1xuICB2YXIgaGFzaCA9IGNyZWF0ZUtlY2Nha0hhc2goXCJrZWNjYWsyNTZcIikudXBkYXRlKGEpLmRpZ2VzdCgpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICByZXR1cm4gXCIweFwiLmNvbmNhdChoYXNoKTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbi8vIG9mIFRvcnVzIG5vZGVzIHRvIGhhbmRsZSBtYWxpY2lvdXMgbm9kZSByZXNwb25zZXNcblxudmFyIFRvcnVzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVG9ydXMoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJGVuYWJsZU9uZUtleSA9IF9yZWYuZW5hYmxlT25lS2V5LFxuICAgICAgICBlbmFibGVPbmVLZXkgPSBfcmVmJGVuYWJsZU9uZUtleSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGVuYWJsZU9uZUtleSxcbiAgICAgICAgX3JlZiRtZXRhZGF0YUhvc3QgPSBfcmVmLm1ldGFkYXRhSG9zdCxcbiAgICAgICAgbWV0YWRhdGFIb3N0ID0gX3JlZiRtZXRhZGF0YUhvc3QgPT09IHZvaWQgMCA/IFwiaHR0cHM6Ly9tZXRhZGF0YS50b3IudXNcIiA6IF9yZWYkbWV0YWRhdGFIb3N0LFxuICAgICAgICBfcmVmJGFsbG93SG9zdCA9IF9yZWYuYWxsb3dIb3N0LFxuICAgICAgICBhbGxvd0hvc3QgPSBfcmVmJGFsbG93SG9zdCA9PT0gdm9pZCAwID8gXCJodHRwczovL3NpZ25lci50b3IudXMvYXBpL2FsbG93XCIgOiBfcmVmJGFsbG93SG9zdCxcbiAgICAgICAgX3JlZiRzaWduZXJIb3N0ID0gX3JlZi5zaWduZXJIb3N0LFxuICAgICAgICBzaWduZXJIb3N0ID0gX3JlZiRzaWduZXJIb3N0ID09PSB2b2lkIDAgPyBcImh0dHBzOi8vc2lnbmVyLnRvci51cy9hcGkvc2lnblwiIDogX3JlZiRzaWduZXJIb3N0LFxuICAgICAgICBfcmVmJHNlcnZlclRpbWVPZmZzZXQgPSBfcmVmLnNlcnZlclRpbWVPZmZzZXQsXG4gICAgICAgIHNlcnZlclRpbWVPZmZzZXQgPSBfcmVmJHNlcnZlclRpbWVPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfcmVmJHNlcnZlclRpbWVPZmZzZXQsXG4gICAgICAgIF9yZWYkbmV0d29yayA9IF9yZWYubmV0d29yayxcbiAgICAgICAgbmV0d29yayA9IF9yZWYkbmV0d29yayA9PT0gdm9pZCAwID8gXCJtYWlubmV0XCIgOiBfcmVmJG5ldHdvcms7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9ydXMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFIb3N0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGxvd0hvc3RcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlcnZlclRpbWVPZmZzZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuYWJsZU9uZUtleVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2lnbmVySG9zdFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmV0d29ya1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZWNcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuZWMgPSBuZXcgZWMoXCJzZWNwMjU2azFcIik7XG4gICAgdGhpcy5tZXRhZGF0YUhvc3QgPSBtZXRhZGF0YUhvc3Q7XG4gICAgdGhpcy5hbGxvd0hvc3QgPSBhbGxvd0hvc3Q7XG4gICAgdGhpcy5lbmFibGVPbmVLZXkgPSBlbmFibGVPbmVLZXk7XG4gICAgdGhpcy5zZXJ2ZXJUaW1lT2Zmc2V0ID0gc2VydmVyVGltZU9mZnNldCB8fCAwOyAvLyBtc1xuXG4gICAgdGhpcy5zaWduZXJIb3N0ID0gc2lnbmVySG9zdDtcbiAgICB0aGlzLm5ldHdvcmsgPSBuZXR3b3JrO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRvcnVzLCBbe1xuICAgIGtleTogXCJnZXRVc2VyVHlwZUFuZEFkZHJlc3NcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBOb3RlOiB1c2UgdGhpcyBmdW5jdGlvbiBvbmx5IGZvciBvcGVubG9naW4gdGtleSBhY2NvdW50IGxvb2t1cHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRVc2VyVHlwZUFuZEFkZHJlc3MgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywgX3JlZjIpIHtcbiAgICAgICAgdmFyIHZlcmlmaWVyLFxuICAgICAgICAgICAgdmVyaWZpZXJJZCxcbiAgICAgICAgICAgIGRvZXNLZXlBc3NpZ24sXG4gICAgICAgICAgICBfcmVmMyxcbiAgICAgICAgICAgIGtleVJlc3VsdCxcbiAgICAgICAgICAgIGVycm9yUmVzdWx0LFxuICAgICAgICAgICAgaXNOZXdLZXksXG4gICAgICAgICAgICBmaW5hbEtleVJlc3VsdCxcbiAgICAgICAgICAgIGFzc2lnblJlc3VsdCxcbiAgICAgICAgICAgIF9maW5hbEtleVJlc3VsdCRrZXlzJCxcbiAgICAgICAgICAgIFgsXG4gICAgICAgICAgICBZLFxuICAgICAgICAgICAgbm9uY2VSZXN1bHQsXG4gICAgICAgICAgICBub25jZSxcbiAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5LFxuICAgICAgICAgICAgZmluYWxYLFxuICAgICAgICAgICAgZmluYWxZLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIF9hcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdmVyaWZpZXIgPSBfcmVmMi52ZXJpZmllciwgdmVyaWZpZXJJZCA9IF9yZWYyLnZlcmlmaWVySWQ7XG4gICAgICAgICAgICAgICAgZG9lc0tleUFzc2lnbiA9IF9hcmdzLmxlbmd0aCA+IDMgJiYgX2FyZ3NbM10gIT09IHVuZGVmaW5lZCA/IF9hcmdzWzNdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUxvb2t1cChlbmRwb2ludHMsIHZlcmlmaWVyLCB2ZXJpZmllcklkKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9jb250ZXh0LnQwKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0ge307XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIF9yZWYzID0gX2NvbnRleHQudDA7XG4gICAgICAgICAgICAgICAga2V5UmVzdWx0ID0gX3JlZjMua2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gX3JlZjMuZXJyb3JSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmICghKGVycm9yUmVzdWx0ICYmIEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0KS5pbmNsdWRlcyhcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRvZXNLZXlBc3NpZ24pIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlBc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgZW5kcG9pbnRzOiBlbmRwb2ludHMsXG4gICAgICAgICAgICAgICAgICB0b3J1c05vZGVQdWJzOiB0b3J1c05vZGVQdWJzLFxuICAgICAgICAgICAgICAgICAgbGFzdFBvaW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBmaXJzdFBvaW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcklkOiB2ZXJpZmllcklkLFxuICAgICAgICAgICAgICAgICAgc2lnbmVySG9zdDogdGhpcy5zaWduZXJIb3N0LFxuICAgICAgICAgICAgICAgICAgbmV0d29yazogdGhpcy5uZXR3b3JrXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhaXRLZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICBhc3NpZ25SZXN1bHQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0ID0gYXNzaWduUmVzdWx0ID09PSBudWxsIHx8IGFzc2lnblJlc3VsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXNzaWduUmVzdWx0LmtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBpc05ld0tleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgICAgaWYgKCFrZXlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0ID0ga2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyODtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmlyc3QgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgICAgIGlmICghZmluYWxLZXlSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1ODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9maW5hbEtleVJlc3VsdCRrZXlzJCA9IGZpbmFsS2V5UmVzdWx0LmtleXNbMF0sIFggPSBfZmluYWxLZXlSZXN1bHQka2V5cyQucHViX2tleV9YLCBZID0gX2ZpbmFsS2V5UmVzdWx0JGtleXMkLnB1Yl9rZXlfWTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMzA7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDMzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9yU2V0Tm9uY2UoWCwgWSwgdW5kZWZpbmVkLCAhaXNOZXdLZXkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICAgICAgbm9uY2VSZXN1bHQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIG5vbmNlID0gbmV3IEJOKG5vbmNlUmVzdWx0Lm5vbmNlIHx8IFwiMFwiLCAxNik7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDM3O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQxID0gX2NvbnRleHRbXCJjYXRjaFwiXSgzMCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdldE9yU2V0Tm9uY2VFcnJvcigpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgaWYgKCEobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ0O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXkgPSB0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgIHk6IFlcbiAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKS5hZGQodGhpcy5lYy5rZXlGcm9tUHJpdmF0ZShub25jZS50b1N0cmluZygxNikpLmdldFB1YmxpYygpKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBpZiAoIShub25jZVJlc3VsdC50eXBlT2ZVc2VyID09PSBcInYyXCIpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDg7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21QdWJsaWMoe1xuICAgICAgICAgICAgICAgICAgeDogbm9uY2VSZXN1bHQucHViTm9uY2UueCxcbiAgICAgICAgICAgICAgICAgIHk6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLnlcbiAgICAgICAgICAgICAgICB9KS5nZXRQdWJsaWMoKSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDg6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0T3JTZXROb25jZSBzaG91bGQgYWx3YXlzIHJldHVybiB0eXBlT2ZVc2VyLlwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ5OlxuICAgICAgICAgICAgICAgIGZpbmFsWCA9IG1vZGlmaWVkUHViS2V5LmdldFgoKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgZmluYWxZID0gbW9kaWZpZWRQdWJLZXkuZ2V0WSgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzID0gdGhpcy5nZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5KG1vZGlmaWVkUHViS2V5LmdldFgoKSwgbW9kaWZpZWRQdWJLZXkuZ2V0WSgpKTtcblxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjFcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1NjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgdHlwZU9mVXNlcjogbm9uY2VSZXN1bHQudHlwZU9mVXNlcixcbiAgICAgICAgICAgICAgICAgIG5vbmNlOiBub25jZSxcbiAgICAgICAgICAgICAgICAgIFg6IGZpbmFsWCxcbiAgICAgICAgICAgICAgICAgIFk6IGZpbmFsWSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjJcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1ODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgdHlwZU9mVXNlcjogbm9uY2VSZXN1bHQudHlwZU9mVXNlcixcbiAgICAgICAgICAgICAgICAgIG5vbmNlOiBub25jZSxcbiAgICAgICAgICAgICAgICAgIHB1Yk5vbmNlOiBub25jZVJlc3VsdC5wdWJOb25jZSxcbiAgICAgICAgICAgICAgICAgIHVwZ3JhZGVkOiBub25jZVJlc3VsdC51cGdyYWRlZCxcbiAgICAgICAgICAgICAgICAgIFg6IGZpbmFsWCxcbiAgICAgICAgICAgICAgICAgIFk6IGZpbmFsWSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmluYWwgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMsIFtbMzAsIDM3XV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRVc2VyVHlwZUFuZEFkZHJlc3MoX3gsIF94MiwgX3gzKSB7XG4gICAgICAgIHJldHVybiBfZ2V0VXNlclR5cGVBbmRBZGRyZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRVc2VyVHlwZUFuZEFkZHJlc3M7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0Q3VzdG9tS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc2V0Q3VzdG9tS2V5ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoX3JlZjQpIHtcbiAgICAgICAgdmFyIHByaXZLZXlIZXgsIG1ldGFkYXRhTm9uY2UsIHRvcnVzS2V5SGV4LCBjdXN0b21LZXlIZXgsIHRvcnVzS2V5LCBwcml2S2V5LCBjdXN0b21LZXksIG5ld01ldGFkYXRhTm9uY2UsIGRhdGE7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHByaXZLZXlIZXggPSBfcmVmNC5wcml2S2V5SGV4LCBtZXRhZGF0YU5vbmNlID0gX3JlZjQubWV0YWRhdGFOb25jZSwgdG9ydXNLZXlIZXggPSBfcmVmNC50b3J1c0tleUhleCwgY3VzdG9tS2V5SGV4ID0gX3JlZjQuY3VzdG9tS2V5SGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvcnVzS2V5SGV4KSB7XG4gICAgICAgICAgICAgICAgICB0b3J1c0tleSA9IG5ldyBCTih0b3J1c0tleUhleCwgMTYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwcml2S2V5ID0gbmV3IEJOKHByaXZLZXlIZXgsIDE2KTtcbiAgICAgICAgICAgICAgICAgIHRvcnVzS2V5ID0gcHJpdktleS5zdWIobWV0YWRhdGFOb25jZSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1c3RvbUtleSA9IG5ldyBCTihjdXN0b21LZXlIZXgsIDE2KTtcbiAgICAgICAgICAgICAgICBuZXdNZXRhZGF0YU5vbmNlID0gY3VzdG9tS2V5LnN1Yih0b3J1c0tleSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdlbmVyYXRlTWV0YWRhdGFQYXJhbXMobmV3TWV0YWRhdGFOb25jZS50b1N0cmluZygxNiksIHRvcnVzS2V5KTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0TWV0YWRhdGEoZGF0YSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMiwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHNldEN1c3RvbUtleShfeDQpIHtcbiAgICAgICAgcmV0dXJuIF9zZXRDdXN0b21LZXkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldEN1c3RvbUtleTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJyZXRyaWV2ZVNoYXJlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JldHJpZXZlU2hhcmVzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUoZW5kcG9pbnRzLCBpbmRleGVzLCB2ZXJpZmllciwgdmVyaWZpZXJQYXJhbXMsIGlkVG9rZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgZXh0cmFQYXJhbXMsXG4gICAgICAgICAgICBwcm9taXNlQXJyLFxuICAgICAgICAgICAgdG1wS2V5LFxuICAgICAgICAgICAgcHViS2V5LFxuICAgICAgICAgICAgcHViS2V5WCxcbiAgICAgICAgICAgIHB1YktleVksXG4gICAgICAgICAgICB0b2tlbkNvbW1pdG1lbnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIF9hcmdzNSA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNSQoX2NvbnRleHQ1KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1LnByZXYgPSBfY29udGV4dDUubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZXh0cmFQYXJhbXMgPSBfYXJnczUubGVuZ3RoID4gNSAmJiBfYXJnczVbNV0gIT09IHVuZGVmaW5lZCA/IF9hcmdzNVs1XSA6IHt9O1xuICAgICAgICAgICAgICAgIHByb21pc2VBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldCh0aGlzLmFsbG93SG9zdCwge1xuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICAgIHZlcmlmaWVyX2lkOiB2ZXJpZmllclBhcmFtcy52ZXJpZmllcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yazogdGhpcy5uZXR3b3JrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICBDb21taXRtZW50UmVxdWVzdFBhcmFtcyBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlUHJlZml4ICAgICAgc3RyaW5nIGBqc29uOlwibWVzc2FnZXByZWZpeFwiYFxuICAgICAgICAgICAgICAgICAgICBUb2tlbkNvbW1pdG1lbnQgICAgc3RyaW5nIGBqc29uOlwidG9rZW5jb21taXRtZW50XCJgXG4gICAgICAgICAgICAgICAgICAgIFRlbXBQdWJYICAgICAgICAgICBzdHJpbmcgYGpzb246XCJ0ZW1wcHVieFwiYFxuICAgICAgICAgICAgICAgICAgICBUZW1wUHViWSAgICAgICAgICAgc3RyaW5nIGBqc29uOlwidGVtcHB1YnlcImBcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpZXJJZGVudGlmaWVyIHN0cmluZyBganNvbjpcInZlcmlmaWVyaWRlbnRpZmllclwiYFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAvLyBnZW5lcmF0ZSB0ZW1wb3JhcnkgcHJpdmF0ZSBhbmQgcHVibGljIGtleSB0aGF0IGlzIHVzZWQgdG8gc2VjdXJlIHJlY2VpdmUgc2hhcmVzXG4gICAgICAgICAgICAgICAgdG1wS2V5ID0gZ2VuZXJhdGVQcml2YXRlKCk7XG4gICAgICAgICAgICAgICAgcHViS2V5ID0gZ2V0UHVibGljKHRtcEtleSkudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgcHViS2V5WCA9IHB1YktleS5zbGljZSgyLCA2Nik7XG4gICAgICAgICAgICAgICAgcHViS2V5WSA9IHB1YktleS5zbGljZSg2Nik7XG4gICAgICAgICAgICAgICAgdG9rZW5Db21taXRtZW50ID0ga2VjY2FrMjU2KGlkVG9rZW4pOyAvLyBtYWtlIGNvbW1pdG1lbnQgcmVxdWVzdHMgdG8gZW5kcG9pbnRzXG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5kcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBwID0gcG9zdChlbmRwb2ludHNbaV0sIGdlbmVyYXRlSnNvblJQQ09iamVjdChcIkNvbW1pdG1lbnRSZXF1ZXN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXByZWZpeDogXCJtdWcwMFwiLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbmNvbW1pdG1lbnQ6IHRva2VuQ29tbWl0bWVudC5zbGljZSgyKSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcHB1Yng6IHB1YktleVgsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBwdWJ5OiBwdWJLZXlZLFxuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcmlkZW50aWZpZXI6IHZlcmlmaWVyXG4gICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJjb21taXRtZW50XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHByb21pc2VBcnIucHVzaChwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIFNoYXJlUmVxdWVzdFBhcmFtcyBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBJdGVtIFtdYmlqc29uLlJhd01lc3NhZ2UgYGpzb246XCJpdGVtXCJgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBTaGFyZVJlcXVlc3RJdGVtIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIElEVG9rZW4gICAgICAgICAgICBzdHJpbmcgICAgICAgICAgYGpzb246XCJpZHRva2VuXCJgXG4gICAgICAgICAgICAgICAgICAgIE5vZGVTaWduYXR1cmVzICAgICBbXU5vZGVTaWduYXR1cmUgYGpzb246XCJub2Rlc2lnbmF0dXJlc1wiYFxuICAgICAgICAgICAgICAgICAgICBWZXJpZmllcklkZW50aWZpZXIgc3RyaW5nICAgICAgICAgIGBqc29uOlwidmVyaWZpZXJpZGVudGlmaWVyXCJgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBOb2RlU2lnbmF0dXJlIHN0cnVjdCB7XG4gICAgICAgICAgICAgICAgICAgIFNpZ25hdHVyZSAgIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBEYXRhICAgICAgICBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgTm9kZVB1YktleVggc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIE5vZGVQdWJLZXlZIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQ29tbWl0bWVudFJlcXVlc3RSZXN1bHQgc3RydWN0IHtcbiAgICAgICAgICAgICAgICAgICAgU2lnbmF0dXJlIHN0cmluZyBganNvbjpcInNpZ25hdHVyZVwiYFxuICAgICAgICAgICAgICAgICAgICBEYXRhICAgICAgc3RyaW5nIGBqc29uOlwiZGF0YVwiYFxuICAgICAgICAgICAgICAgICAgICBOb2RlUHViWCAgc3RyaW5nIGBqc29uOlwibm9kZXB1YnhcImBcbiAgICAgICAgICAgICAgICAgICAgTm9kZVB1YlkgIHN0cmluZyBganNvbjpcIm5vZGVwdWJ5XCJgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIHNlbmQgc2hhcmUgcmVxdWVzdCBvbmNlIGsgKyB0IG51bWJlciBvZiBjb21taXRtZW50IHJlcXVlc3RzIGhhdmUgY29tcGxldGVkXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIsIFNvbWUocHJvbWlzZUFyciwgZnVuY3Rpb24gKHJlc3VsdEFycikge1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlZFJlcXVlc3RzID0gcmVzdWx0QXJyLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXggfHwgX3R5cGVvZih4KSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh4LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZFJlcXVlc3RzLmxlbmd0aCA+PSB+fihlbmRwb2ludHMubGVuZ3RoIC8gNCkgKiAzICsgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdEFycik7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShyZXN1bHRBcnIpKSkpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlcykge1xuICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2VBcnJSZXF1ZXN0ID0gW107XG4gICAgICAgICAgICAgICAgICB2YXIgbm9kZVNpZ3MgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHJlc3BvbnNlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1tfaV0pIG5vZGVTaWdzLnB1c2gocmVzcG9uc2VzW19pXS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBlbmRwb2ludHMubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9uby1uZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcCA9IHBvc3QoZW5kcG9pbnRzW19pMl0sIGdlbmVyYXRlSnNvblJQQ09iamVjdChcIlNoYXJlUmVxdWVzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkOiBcInllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFtfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZlcmlmaWVyUGFyYW1zKSwge30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkdG9rZW46IGlkVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc2lnbmF0dXJlczogbm9kZVNpZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZmllcmlkZW50aWZpZXI6IHZlcmlmaWVyXG4gICAgICAgICAgICAgICAgICAgICAgfSwgZXh0cmFQYXJhbXMpXVxuICAgICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2cuZXJyb3IoXCJzaGFyZSByZXFcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUFyclJlcXVlc3QucHVzaChfcCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBTb21lKHByb21pc2VBcnJSZXF1ZXN0LCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMyhzaGFyZVJlc3BvbnNlcywgc2hhcmVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGVkUmVxdWVzdHMsIHRocmVzaG9sZFB1YmxpY0tleSwgc2hhcmVQcm9taXNlcywgbm9kZUluZGV4ZXMsIF9pMywgX2N1cnJlbnRTaGFyZVJlc3BvbnNlLCBfY3VycmVudFNoYXJlUmVzcG9uc2UyLCBjdXJyZW50U2hhcmVSZXNwb25zZSwgZmlyc3RLZXksIG1ldGFkYXRhLCBzaGFyZXNSZXNvbHZlZCwgZGVjcnlwdGVkU2hhcmVzLCBhbGxDb21iaXMsIHByaXZhdGVLZXksIF9sb29wLCBqLCBfcmV0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNoYXJlUmVxdWVzdFJlc3VsdCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2V5cyBbXUtleUFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIEtleUFzc2lnbm1lbnRQdWJsaWMgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgS2V5QXNzaWdubWVudFB1YmxpYyBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXggICAgIGJpZy5JbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1YmxpY0tleSBjb21tb24uUG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRocmVzaG9sZCBpbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcmlmaWVycyBtYXBbc3RyaW5nXVtdc3RyaW5nIC8vIFZlcmlmaWVyID0+IFZlcmlmaWVySURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtleUFzc2lnbm1lbnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgS2V5QXNzaWdubWVudCBzdHJ1Y3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2V5QXNzaWdubWVudFB1YmxpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hhcmUgYmlnLkludCAvLyBPciBTaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRocmVzaG9sZCBudW1iZXIgb2Ygbm9kZXMgaGF2ZSByZXR1cm5lZCB0aGUgc2FtZSB1c2VyIHB1YmxpYyBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFJlcXVlc3RzID0gc2hhcmVSZXNwb25zZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRQdWJsaWNLZXkgPSB0aHJlc2hvbGRTYW1lKHNoYXJlUmVzcG9uc2VzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geCAmJiB4LnJlc3VsdCAmJiB4LnJlc3VsdC5rZXlzWzBdLlB1YmxpY0tleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxKTsgLy8gb3B0aW1pc3RpY2FsbHkgcnVuIGxhZ3JhbmdlIGludGVycG9sYXRpb24gb25jZSB0aHJlc2hvbGQgbnVtYmVyIG9mIHNoYXJlcyBoYXZlIGJlZW4gcmVjZWl2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbWF0Y2hlZCBhZ2FpbnN0IHRoZSB1c2VyIHB1YmxpYyBrZXkgdG8gZW5zdXJlIHRoYXQgc2hhcmVzIGFyZSBjb25zaXN0ZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGNvbXBsZXRlZFJlcXVlc3RzLmxlbmd0aCA+PSB+fihlbmRwb2ludHMubGVuZ3RoIC8gMikgKyAxICYmIHRocmVzaG9sZFB1YmxpY0tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJbmRleGVzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kzID0gMDsgX2kzIDwgc2hhcmVSZXNwb25zZXMubGVuZ3RoOyBfaTMgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hhcmVSZXNwb25zZSA9IHNoYXJlUmVzcG9uc2VzW19pM107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjdXJyZW50U2hhcmVSZXNwb25zZSA9PT0gbnVsbCB8fCBjdXJyZW50U2hhcmVSZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9jdXJyZW50U2hhcmVSZXNwb25zZSA9IGN1cnJlbnRTaGFyZVJlc3BvbnNlLnJlc3VsdCkgPT09IG51bGwgfHwgX2N1cnJlbnRTaGFyZVJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2N1cnJlbnRTaGFyZVJlc3BvbnNlMiA9IF9jdXJyZW50U2hhcmVSZXNwb25zZS5rZXlzKSA9PT0gbnVsbCB8fCBfY3VycmVudFNoYXJlUmVzcG9uc2UyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY3VycmVudFNoYXJlUmVzcG9uc2UyLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoYXJlUmVzcG9uc2UucmVzdWx0LmtleXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCTihhLkluZGV4LCAxNikuY21wKG5ldyBCTihiLkluZGV4LCAxNikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0S2V5ID0gY3VycmVudFNoYXJlUmVzcG9uc2UucmVzdWx0LmtleXNbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RLZXkuTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcGhlbVB1YmxpY0tleTogQnVmZmVyLmZyb20oZmlyc3RLZXkuTWV0YWRhdGEuZXBoZW1QdWJsaWNLZXksIFwiaGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdjogQnVmZmVyLmZyb20oZmlyc3RLZXkuTWV0YWRhdGEuaXYsIFwiaGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWM6IEJ1ZmZlci5mcm9tKGZpcnN0S2V5Lk1ldGFkYXRhLm1hYywgXCJoZXhcIikgLy8gbW9kZTogQnVmZmVyLmZyb20oZmlyc3RLZXkuTWV0YWRhdGEubW9kZSwgXCJoZXhcIiksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVByb21pc2VzLnB1c2goIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL25vLW5lc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHQodG1wS2V5LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1ldGFkYXRhKSwge30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lwaGVydGV4dDogQnVmZmVyLmZyb20oQnVmZmVyLmZyb20oZmlyc3RLZXkuU2hhcmUsIFwiYmFzZTY0XCIpLnRvU3RyaW5nKFwiYmluYXJ5XCIpLnBhZFN0YXJ0KDY0LCBcIjBcIiksIFwiaGV4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9nLmRlYnVnKFwic2hhcmUgZGVjcnlwdGlvblwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKEJ1ZmZlci5mcm9tKGZpcnN0S2V5LlNoYXJlLnBhZFN0YXJ0KDY0LCBcIjBcIiksIFwiaGV4XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlUHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5kZXhlcy5wdXNoKG5ldyBCTihpbmRleGVzW19pM10sIDE2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzaGFyZVByb21pc2VzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlc1Jlc29sdmVkID0gX2NvbnRleHQzLnNlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hhcmVkU3RhdGUucmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwicmV0dXJuXCIsIHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcnlwdGVkU2hhcmVzID0gc2hhcmVzUmVzb2x2ZWQucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyKSBhY2MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG5vZGVJbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IEJOKGN1cnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pOyAvLyBydW4gbGFncmFuZ2UgaW50ZXJwb2xhdGlvbiBvbiBhbGwgc3Vic2V0cywgZmFzdGVyIGluIHRoZSBvcHRpbWlzdGljIHNjZW5hcmlvIHRoYW4gYmVybGVrYW1wLXdlbGNoIGR1ZSB0byBlYXJseSBleGl0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJ1biBsYWdyYW5nZSBpbnRlcnBvbGF0aW9uIG9uIGFsbCBzdWJzZXRzLCBmYXN0ZXIgaW4gdGhlIG9wdGltaXN0aWMgc2NlbmFyaW8gdGhhbiBiZXJsZWthbXAtd2VsY2ggZHVlIHRvIGVhcmx5IGV4aXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbENvbWJpcyA9IGtDb21iaW5hdGlvbnMoZGVjcnlwdGVkU2hhcmVzLmxlbmd0aCwgfn4oZW5kcG9pbnRzLmxlbmd0aCAvIDIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q29tYmkgPSBhbGxDb21iaXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q29tYmlTaGFyZXMgPSBkZWNyeXB0ZWRTaGFyZXMuZmlsdGVyKGZ1bmN0aW9uICh2LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50Q29tYmkuaW5jbHVkZXMoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJlcyA9IGN1cnJlbnRDb21iaVNoYXJlcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRpY2VzID0gY3VycmVudENvbWJpU2hhcmVzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVyaXZlZFByaXZhdGVLZXkgPSBfdGhpcy5sYWdyYW5nZUludGVycG9sYXRpb24oc2hhcmVzLCBpbmRpY2VzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlcml2ZWRQcml2YXRlS2V5KSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjcnlwdGVkUHViS2V5ID0gZ2V0UHVibGljKEJ1ZmZlci5mcm9tKGRlcml2ZWRQcml2YXRlS2V5LnRvU3RyaW5nKDE2LCA2NCksIFwiaGV4XCIpKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY3J5cHRlZFB1YktleVggPSBkZWNyeXB0ZWRQdWJLZXkuc2xpY2UoMiwgNjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjcnlwdGVkUHViS2V5WSA9IGRlY3J5cHRlZFB1YktleS5zbGljZSg2Nik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ldyBCTihkZWNyeXB0ZWRQdWJLZXlYLCAxNikuY21wKG5ldyBCTih0aHJlc2hvbGRQdWJsaWNLZXkuWCwgMTYpKSA9PT0gMCAmJiBuZXcgQk4oZGVjcnlwdGVkUHViS2V5WSwgMTYpLmNtcChuZXcgQk4odGhyZXNob2xkUHVibGljS2V5LlksIDE2KSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gZGVyaXZlZFByaXZhdGVLZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaiA8IGFsbENvbWJpcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmV0ID0gX2xvb3Aoaik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9yZXQgPT09IFwiY29udGludWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwiY29udGludWVcIiwgMjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9yZXQgPT09IFwiYnJlYWtcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwiYnJlYWtcIiwgMjUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwcml2YXRlS2V5ID09PSB1bmRlZmluZWQgfHwgcHJpdmF0ZUtleSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBkZXJpdmUgcHJpdmF0ZSBrZXlcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJyZXR1cm5cIiwgcHJpdmF0ZUtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMyk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94MTAsIF94MTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbiggLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBfcmVmNiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KHJldHVybmVkS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcml2YXRlS2V5LCBkZWNyeXB0ZWRQdWJLZXksIGRlY3J5cHRlZFB1YktleVgsIGRlY3J5cHRlZFB1YktleVksIG1ldGFkYXRhTm9uY2UsIF95aWVsZCRfdGhpcyRnZXROb25jZSwgbm9uY2UsIGV0aEFkZHJlc3M7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNCQoX2NvbnRleHQ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZUtleSA9IHJldHVybmVkS2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaXZhdGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHJpdmF0ZSBrZXkgcmV0dXJuZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFB1YktleSA9IGdldFB1YmxpYyhCdWZmZXIuZnJvbShwcml2YXRlS2V5LnRvU3RyaW5nKDE2LCA2NCksIFwiaGV4XCIpKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRQdWJLZXlYID0gZGVjcnlwdGVkUHViS2V5LnNsaWNlKDIsIDY2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRQdWJLZXlZID0gZGVjcnlwdGVkUHViS2V5LnNsaWNlKDY2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZW5hYmxlT25lS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXROb25jZShkZWNyeXB0ZWRQdWJLZXlYLCBkZWNyeXB0ZWRQdWJLZXlZLCBwcml2YXRlS2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3lpZWxkJF90aGlzJGdldE5vbmNlID0gX2NvbnRleHQ0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2UgPSBfeWllbGQkX3RoaXMkZ2V0Tm9uY2Uubm9uY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZSA9IG5ldyBCTihub25jZSB8fCBcIjBcIiwgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRNZXRhZGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1g6IGRlY3J5cHRlZFB1YktleVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJfa2V5X1k6IGRlY3J5cHRlZFB1YktleVlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhTm9uY2UgPSBfY29udGV4dDQuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIj4gdG9ydXMuanMvcmV0cmlldmVTaGFyZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdktleTogcHJpdmF0ZUtleS50b1N0cmluZygxNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YU5vbmNlOiBtZXRhZGF0YU5vbmNlLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVLZXkgPSBwcml2YXRlS2V5LmFkZChtZXRhZGF0YU5vbmNlKS51bW9kKF90aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0aEFkZHJlc3MgPSBfdGhpcy5nZW5lcmF0ZUFkZHJlc3NGcm9tUHJpdktleShwcml2YXRlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL3JldHJpZXZlU2hhcmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0aEFkZHJlc3M6IGV0aEFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2S2V5OiBwcml2YXRlS2V5LnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAvLyByZXR1cm4gcmVjb25zdHJ1Y3RlZCBwcml2YXRlIGtleSBhbmQgZXRoZXJldW0gYWRkcmVzc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRoQWRkcmVzczogZXRoQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZLZXk6IHByaXZhdGVLZXkudG9TdHJpbmcoXCJoZXhcIiwgNjQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZTogbWV0YWRhdGFOb25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWU0KTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KCkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJldHJpZXZlU2hhcmVzKF94NSwgX3g2LCBfeDcsIF94OCwgX3g5KSB7XG4gICAgICAgIHJldHVybiBfcmV0cmlldmVTaGFyZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldHJpZXZlU2hhcmVzO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImdldE1ldGFkYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0TWV0YWRhdGEgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNihkYXRhKSB7XG4gICAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgICAgbWV0YWRhdGFSZXNwb25zZSxcbiAgICAgICAgICAgIF9hcmdzNiA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNiQoX2NvbnRleHQ2KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ2LnByZXYgPSBfY29udGV4dDYubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IF9hcmdzNi5sZW5ndGggPiAxICYmIF9hcmdzNlsxXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M2WzFdIDoge307XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2LnByZXYgPSAxO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdChcIlwiLmNvbmNhdCh0aGlzLm1ldGFkYXRhSG9zdCwgXCIvZ2V0XCIpLCBkYXRhLCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFSZXNwb25zZSA9IF9jb250ZXh0Ni5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoIW1ldGFkYXRhUmVzcG9uc2UgfHwgIW1ldGFkYXRhUmVzcG9uc2UubWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBCTigwKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBCTihtZXRhZGF0YVJlc3BvbnNlLm1lc3NhZ2UsIDE2KSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDYucHJldiA9IDEwO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ni50MCA9IF9jb250ZXh0NltcImNhdGNoXCJdKDEpO1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcImdldCBtZXRhZGF0YSBlcnJvclwiLCBfY29udGV4dDYudDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBCTigwKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTYsIHRoaXMsIFtbMSwgMTBdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhKF94MTMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZXRhZGF0YS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0TWV0YWRhdGE7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVNZXRhZGF0YVBhcmFtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZU1ldGFkYXRhUGFyYW1zKG1lc3NhZ2UsIHByaXZhdGVLZXkpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkudG9TdHJpbmcoXCJoZXhcIiwgNjQpKTtcbiAgICAgIHZhciBzZXREYXRhID0ge1xuICAgICAgICBkYXRhOiBtZXNzYWdlLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBCTih+fih0aGlzLnNlcnZlclRpbWVPZmZzZXQgKyBEYXRlLm5vdygpIC8gMTAwMCkpLnRvU3RyaW5nKDE2KVxuICAgICAgfTtcbiAgICAgIHZhciBzaWcgPSBrZXkuc2lnbihrZWNjYWsyNTYoSnNvblN0cmluZ2lmeShzZXREYXRhKSkuc2xpY2UoMikpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHViX2tleV9YOiBrZXkuZ2V0UHVibGljKCkuZ2V0WCgpLnRvU3RyaW5nKFwiaGV4XCIpLFxuICAgICAgICBwdWJfa2V5X1k6IGtleS5nZXRQdWJsaWMoKS5nZXRZKCkudG9TdHJpbmcoXCJoZXhcIiksXG4gICAgICAgIHNldF9kYXRhOiBzZXREYXRhLFxuICAgICAgICBzaWduYXR1cmU6IEJ1ZmZlci5mcm9tKHNpZy5yLnRvU3RyaW5nKDE2LCA2NCkgKyBzaWcucy50b1N0cmluZygxNiwgNjQpICsgbmV3IEJOKFwiXCIpLnRvU3RyaW5nKDE2LCAyKSwgXCJoZXhcIikudG9TdHJpbmcoXCJiYXNlNjRcIilcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldE1ldGFkYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc2V0TWV0YWRhdGEgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNyhkYXRhKSB7XG4gICAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgICAgbWV0YWRhdGFSZXNwb25zZSxcbiAgICAgICAgICAgIF9hcmdzNyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNyQoX2NvbnRleHQ3KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ3LnByZXYgPSBfY29udGV4dDcubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IF9hcmdzNy5sZW5ndGggPiAxICYmIF9hcmdzN1sxXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M3WzFdIDoge307XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ3LnByZXYgPSAxO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdChcIlwiLmNvbmNhdCh0aGlzLm1ldGFkYXRhSG9zdCwgXCIvc2V0XCIpLCBkYXRhLCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICB1c2VBUElLZXk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgbWV0YWRhdGFSZXNwb25zZSA9IF9jb250ZXh0Ny5zZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuYWJydXB0KFwicmV0dXJuXCIsIG1ldGFkYXRhUmVzcG9uc2UubWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5wcmV2ID0gODtcbiAgICAgICAgICAgICAgICBfY29udGV4dDcudDAgPSBfY29udGV4dDdbXCJjYXRjaFwiXSgxKTtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJzZXQgbWV0YWRhdGEgZXJyb3JcIiwgX2NvbnRleHQ3LnQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiLCBcIlwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNywgdGhpcywgW1sxLCA4XV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBzZXRNZXRhZGF0YShfeDE0KSB7XG4gICAgICAgIHJldHVybiBfc2V0TWV0YWRhdGEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldE1ldGFkYXRhO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImxhZ3JhbmdlSW50ZXJwb2xhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYWdyYW5nZUludGVycG9sYXRpb24oc2hhcmVzLCBub2RlSW5kZXgpIHtcbiAgICAgIGlmIChzaGFyZXMubGVuZ3RoICE9PSBub2RlSW5kZXgubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VjcmV0ID0gbmV3IEJOKDApO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgdXBwZXIgPSBuZXcgQk4oMSk7XG4gICAgICAgIHZhciBsb3dlciA9IG5ldyBCTigxKTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXJlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICB1cHBlciA9IHVwcGVyLm11bChub2RlSW5kZXhbal0ubmVnKCkpO1xuICAgICAgICAgICAgdXBwZXIgPSB1cHBlci51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgICAgICB2YXIgdGVtcCA9IG5vZGVJbmRleFtpXS5zdWIobm9kZUluZGV4W2pdKTtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICAgIGxvd2VyID0gbG93ZXIubXVsKHRlbXApLnVtb2QodGhpcy5lYy5jdXJ2ZS5uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVsdGEgPSB1cHBlci5tdWwobG93ZXIuaW52bSh0aGlzLmVjLmN1cnZlLm4pKS51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgICAgIGRlbHRhID0gZGVsdGEubXVsKHNoYXJlc1tpXSkudW1vZCh0aGlzLmVjLmN1cnZlLm4pO1xuICAgICAgICBzZWNyZXQgPSBzZWNyZXQuYWRkKGRlbHRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlY3JldC51bW9kKHRoaXMuZWMuY3VydmUubik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlQWRkcmVzc0Zyb21Qcml2S2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQWRkcmVzc0Zyb21Qcml2S2V5KHByaXZhdGVLZXkpIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkudG9TdHJpbmcoXCJoZXhcIiwgNjQpLCBcImhleFwiKTtcbiAgICAgIHZhciBwdWJsaWNLZXkgPSBrZXkuZ2V0UHVibGljKCkuZW5jb2RlKFwiaGV4XCIsIGZhbHNlKS5zbGljZSgyKTtcbiAgICAgIGxvZy5pbmZvKHB1YmxpY0tleSwgXCJwdWJsaWMga2V5XCIpO1xuICAgICAgdmFyIGV0aEFkZHJlc3NMb3dlciA9IFwiMHhcIi5jb25jYXQoa2VjY2FrMjU2KEJ1ZmZlci5mcm9tKHB1YmxpY0tleSwgXCJoZXhcIikpLnNsaWNlKDY0IC0gMzgpKTtcbiAgICAgIHJldHVybiB0b0NoZWNrc3VtQWRkcmVzcyhldGhBZGRyZXNzTG93ZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZUFkZHJlc3NGcm9tUHViS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXkocHVibGljS2V5WCwgcHVibGljS2V5WSkge1xuICAgICAgdmFyIGtleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgIHg6IHB1YmxpY0tleVgudG9TdHJpbmcoXCJoZXhcIiwgNjQpLFxuICAgICAgICB5OiBwdWJsaWNLZXlZLnRvU3RyaW5nKFwiaGV4XCIsIDY0KVxuICAgICAgfSk7XG4gICAgICB2YXIgcHVibGljS2V5ID0ga2V5LmdldFB1YmxpYygpLmVuY29kZShcImhleFwiLCBmYWxzZSkuc2xpY2UoMik7XG4gICAgICBsb2cuaW5mbyhrZXkuZ2V0UHVibGljKCkuZW5jb2RlKFwiaGV4XCIsIGZhbHNlKSwgXCJwdWJsaWMga2V5XCIpO1xuICAgICAgdmFyIGV0aEFkZHJlc3NMb3dlciA9IFwiMHhcIi5jb25jYXQoa2VjY2FrMjU2KEJ1ZmZlci5mcm9tKHB1YmxpY0tleSwgXCJoZXhcIikpLnNsaWNlKDY0IC0gMzgpKTtcbiAgICAgIHJldHVybiB0b0NoZWNrc3VtQWRkcmVzcyhldGhBZGRyZXNzTG93ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlOiB1c2UgdGhpcyBmdW5jdGlvbiBvbmx5IHdpdGggY3VzdG9tIGF1dGgsIGRvbid0IHVzZSB0byBsb29rdXAgb3BlbmxvZ2luIGFjY291bnRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UHVibGljQWRkcmVzc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2dldFB1YmxpY0FkZHJlc3MgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlOChlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIF9yZWY3KSB7XG4gICAgICAgIHZhciB2ZXJpZmllcixcbiAgICAgICAgICAgIHZlcmlmaWVySWQsXG4gICAgICAgICAgICBpc0V4dGVuZGVkLFxuICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQsXG4gICAgICAgICAgICBpc05ld0tleSxcbiAgICAgICAgICAgIF9yZWY4LFxuICAgICAgICAgICAga2V5UmVzdWx0LFxuICAgICAgICAgICAgZXJyb3JSZXN1bHQsXG4gICAgICAgICAgICBhc3NpZ25SZXN1bHQsXG4gICAgICAgICAgICBfbm9uY2UsXG4gICAgICAgICAgICBfZmluYWxLZXlSZXN1bHQka2V5cyQyLFxuICAgICAgICAgICAgWCxcbiAgICAgICAgICAgIFksXG4gICAgICAgICAgICBub25jZVJlc3VsdCxcbiAgICAgICAgICAgIG5vbmNlLFxuICAgICAgICAgICAgbW9kaWZpZWRQdWJLZXksXG4gICAgICAgICAgICB0eXBlT2ZVc2VyLFxuICAgICAgICAgICAgcHViTm9uY2UsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgX2FyZ3M4ID0gYXJndW1lbnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTgkKF9jb250ZXh0OCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0OC5wcmV2ID0gX2NvbnRleHQ4Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHZlcmlmaWVyID0gX3JlZjcudmVyaWZpZXIsIHZlcmlmaWVySWQgPSBfcmVmNy52ZXJpZmllcklkO1xuICAgICAgICAgICAgICAgIGlzRXh0ZW5kZWQgPSBfYXJnczgubGVuZ3RoID4gMyAmJiBfYXJnczhbM10gIT09IHVuZGVmaW5lZCA/IF9hcmdzOFszXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIj4gdG9ydXMuanMvZ2V0UHVibGljQWRkcmVzc1wiLCB7XG4gICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IGVuZHBvaW50cyxcbiAgICAgICAgICAgICAgICAgIHRvcnVzTm9kZVB1YnM6IHRvcnVzTm9kZVB1YnMsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcjogdmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllcklkOiB2ZXJpZmllcklkLFxuICAgICAgICAgICAgICAgICAgaXNFeHRlbmRlZDogaXNFeHRlbmRlZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlzTmV3S2V5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC50MCA9IF9jb250ZXh0OC5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9jb250ZXh0OC50MCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnQwID0ge307XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIF9yZWY4ID0gX2NvbnRleHQ4LnQwO1xuICAgICAgICAgICAgICAgIGtleVJlc3VsdCA9IF9yZWY4LmtleVJlc3VsdDtcbiAgICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IF9yZWY4LmVycm9yUmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoZXJyb3JSZXN1bHQgJiYgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQpLmluY2x1ZGVzKFwiVmVyaWZpZXIgbm90IHN1cHBvcnRlZFwiKSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTY7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWZXJpZmllciBub3Qgc3VwcG9ydGVkLiBDaGVjayBpZiB5b3U6IFxcblxcbiAgICAgIDEuIEFyZSBvbiB0aGUgcmlnaHQgbmV0d29yayAoVG9ydXMgdGVzdG5ldC9tYWlubmV0KSBcXG5cXG4gICAgICAyLiBIYXZlIHNldHVwIGEgdmVyaWZpZXIgb24gZGFzaGJvYXJkLndlYjNhdXRoLmlvP1wiKTtcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIGlmICghKGVycm9yUmVzdWx0ICYmIEpTT04uc3RyaW5naWZ5KGVycm9yUmVzdWx0KS5pbmNsdWRlcyhcIlZlcmlmaWVyICsgVmVyaWZpZXJJRCBoYXMgbm90IHlldCBiZWVuIGFzc2lnbmVkXCIpKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAyNjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUFzc2lnbih7XG4gICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IGVuZHBvaW50cyxcbiAgICAgICAgICAgICAgICAgIHRvcnVzTm9kZVB1YnM6IHRvcnVzTm9kZVB1YnMsXG4gICAgICAgICAgICAgICAgICBsYXN0UG9pbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGZpcnN0UG9pbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVySWQ6IHZlcmlmaWVySWQsXG4gICAgICAgICAgICAgICAgICBzaWduZXJIb3N0OiB0aGlzLnNpZ25lckhvc3QsXG4gICAgICAgICAgICAgICAgICBuZXR3b3JrOiB0aGlzLm5ldHdvcmtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMjE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhaXRLZXlMb29rdXAoZW5kcG9pbnRzLCB2ZXJpZmllciwgdmVyaWZpZXJJZCwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICBhc3NpZ25SZXN1bHQgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgICAgICBmaW5hbEtleVJlc3VsdCA9IGFzc2lnblJlc3VsdCA9PT0gbnVsbCB8fCBhc3NpZ25SZXN1bHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFzc2lnblJlc3VsdC5rZXlSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaXNOZXdLZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMzE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgICAgICBpZiAoIWtleVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAzMDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbmFsS2V5UmVzdWx0ID0ga2V5UmVzdWx0O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gMzE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlIHJlc3VsdHMgZG8gbm90IG1hdGNoIGF0IGZpcnN0IGxvb2t1cCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5UmVzdWx0IHx8IHt9KSwgXCIsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXN1bHQgfHwge30pKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCI+IHRvcnVzLmpzL2dldFB1YmxpY0FkZHJlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgZmluYWxLZXlSZXN1bHQ6IGZpbmFsS2V5UmVzdWx0LFxuICAgICAgICAgICAgICAgICAgaXNOZXdLZXk6IGlzTmV3S2V5XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZpbmFsS2V5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDY5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2ZpbmFsS2V5UmVzdWx0JGtleXMkMiA9IGZpbmFsS2V5UmVzdWx0LmtleXNbMF0sIFggPSBfZmluYWxLZXlSZXN1bHQka2V5cyQyLnB1Yl9rZXlfWCwgWSA9IF9maW5hbEtleVJlc3VsdCRrZXlzJDIucHViX2tleV9ZO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZU9uZUtleSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1NztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0OC5wcmV2ID0gMzU7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAzODtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPclNldE5vbmNlKFgsIFksIHVuZGVmaW5lZCwgIWlzTmV3S2V5KTtcblxuICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIG5vbmNlUmVzdWx0ID0gX2NvbnRleHQ4LnNlbnQ7XG4gICAgICAgICAgICAgICAgbm9uY2UgPSBuZXcgQk4obm9uY2VSZXN1bHQubm9uY2UgfHwgXCIwXCIsIDE2KTtcbiAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyID0gbm9uY2VSZXN1bHQudHlwZU9mVXNlcjtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDQ2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4LnByZXYgPSA0MztcbiAgICAgICAgICAgICAgICBfY29udGV4dDgudDEgPSBfY29udGV4dDhbXCJjYXRjaFwiXSgzNSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdldE9yU2V0Tm9uY2VFcnJvcigpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICAgICAgaWYgKCEobm9uY2VSZXN1bHQudHlwZU9mVXNlciA9PT0gXCJ2MVwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1MDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgIHg6IFgsXG4gICAgICAgICAgICAgICAgICB5OiBZXG4gICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVByaXZhdGUobm9uY2UudG9TdHJpbmcoMTYpKS5nZXRQdWJsaWMoKSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1NTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgICAgIGlmICghKG5vbmNlUmVzdWx0LnR5cGVPZlVzZXIgPT09IFwidjJcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobm9uY2VSZXN1bHQudXBncmFkZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIE9uZUtleSBpcyB1cGdyYWRlZCB0byAyL24sIHJldHVybmVkIGFkZHJlc3MgaXMgYWRkcmVzcyBvZiBUb3J1cyBrZXkgKHBvc3Rib3gga2V5KSwgbm90IHRLZXlcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVkUHViS2V5ID0gdGhpcy5lYy5rZXlGcm9tUHVibGljKHtcbiAgICAgICAgICAgICAgICAgICAgeDogWCxcbiAgICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgICAgfSkuZ2V0UHVibGljKCkuYWRkKHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICAgIHg6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IG5vbmNlUmVzdWx0LnB1Yk5vbmNlLnlcbiAgICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpKTtcbiAgICAgICAgICAgICAgICAgIHB1Yk5vbmNlID0gbm9uY2VSZXN1bHQucHViTm9uY2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSA1NTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldE9yU2V0Tm9uY2Ugc2hvdWxkIGFsd2F5cyByZXR1cm4gdHlwZU9mVXNlci5cIik7XG5cbiAgICAgICAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDYyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICAgICAgdHlwZU9mVXNlciA9IFwidjFcIjtcbiAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDYwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKHtcbiAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWDogWCxcbiAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWTogWVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgbm9uY2UgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgICAgICBtb2RpZmllZFB1YktleSA9IHRoaXMuZWMua2V5RnJvbVB1YmxpYyh7XG4gICAgICAgICAgICAgICAgICB4OiBYLFxuICAgICAgICAgICAgICAgICAgeTogWVxuICAgICAgICAgICAgICAgIH0pLmdldFB1YmxpYygpLmFkZCh0aGlzLmVjLmtleUZyb21Qcml2YXRlKG5vbmNlLnRvU3RyaW5nKDE2KSkuZ2V0UHVibGljKCkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgWCA9IG1vZGlmaWVkUHViS2V5LmdldFgoKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgWSA9IG1vZGlmaWVkUHViS2V5LmdldFkoKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA9IHRoaXMuZ2VuZXJhdGVBZGRyZXNzRnJvbVB1YktleShtb2RpZmllZFB1YktleS5nZXRYKCksIG1vZGlmaWVkUHViS2V5LmdldFkoKSk7XG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiPiB0b3J1cy5qcy9nZXRQdWJsaWNBZGRyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgIFg6IFgsXG4gICAgICAgICAgICAgICAgICBZOiBZLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIHR5cGVPZlVzZXI6IHR5cGVPZlVzZXIsXG4gICAgICAgICAgICAgICAgICBub25jZTogKF9ub25jZSA9IG5vbmNlKSA9PT0gbnVsbCB8fCBfbm9uY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub25jZS50b1N0cmluZygxNiksXG4gICAgICAgICAgICAgICAgICBwdWJOb25jZTogcHViTm9uY2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0V4dGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDY4O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5hYnJ1cHQoXCJyZXR1cm5cIiwgYWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlT2ZVc2VyOiB0eXBlT2ZVc2VyLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIFg6IFgsXG4gICAgICAgICAgICAgICAgICBZOiBZLFxuICAgICAgICAgICAgICAgICAgbWV0YWRhdGFOb25jZTogbm9uY2UsXG4gICAgICAgICAgICAgICAgICBwdWJOb25jZTogcHViTm9uY2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGUgcmVzdWx0cyBkbyBub3QgbWF0Y2ggYXQgZmluYWwgbG9va3VwIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShrZXlSZXN1bHQgfHwge30pLCBcIiwgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlcnJvclJlc3VsdCB8fCB7fSkpKTtcblxuICAgICAgICAgICAgICBjYXNlIDcwOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlOCwgdGhpcywgW1szNSwgNDNdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFB1YmxpY0FkZHJlc3MoX3gxNSwgX3gxNiwgX3gxNykge1xuICAgICAgICByZXR1cm4gX2dldFB1YmxpY0FkZHJlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFB1YmxpY0FkZHJlc3M7XG4gICAgfSgpXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb25zIGZvciBPbmVLZXkgKE9wZW5Mb2dpbiB2MiksIG9ubHkgY2FsbCB0aGVzZSBmdW5jdGlvbnMgaWYgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldE9yU2V0Tm9uY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRPclNldE5vbmNlID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTkoWCwgWSwgcHJpdktleSkge1xuICAgICAgICB2YXIgZ2V0T25seSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBtc2csXG4gICAgICAgICAgICBfYXJnczkgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTkkKF9jb250ZXh0OSkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0OS5wcmV2ID0gX2NvbnRleHQ5Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGdldE9ubHkgPSBfYXJnczkubGVuZ3RoID4gMyAmJiBfYXJnczlbM10gIT09IHVuZGVmaW5lZCA/IF9hcmdzOVszXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1zZyA9IGdldE9ubHkgPyBcImdldE5vbmNlXCIgOiBcImdldE9yU2V0Tm9uY2VcIjtcblxuICAgICAgICAgICAgICAgIGlmIChwcml2S2V5KSB7XG4gICAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nZW5lcmF0ZU1ldGFkYXRhUGFyYW1zKG1zZywgcHJpdktleSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHB1Yl9rZXlfWDogWCxcbiAgICAgICAgICAgICAgICAgICAgcHViX2tleV9ZOiBZLFxuICAgICAgICAgICAgICAgICAgICBzZXRfZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG1zZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuYWJydXB0KFwicmV0dXJuXCIsIHBvc3QoXCJcIi5jb25jYXQodGhpcy5tZXRhZGF0YUhvc3QsIFwiL2dldF9vcl9zZXRfbm9uY2VcIiksIGRhdGEsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTksIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRPclNldE5vbmNlKF94MTgsIF94MTksIF94MjApIHtcbiAgICAgICAgcmV0dXJuIF9nZXRPclNldE5vbmNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRPclNldE5vbmNlO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImdldE5vbmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0Tm9uY2UgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMTAoWCwgWSwgcHJpdktleSkge1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMCQoX2NvbnRleHQxMCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0MTAucHJldiA9IF9jb250ZXh0MTAubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMuZ2V0T3JTZXROb25jZShYLCBZLCBwcml2S2V5LCB0cnVlKSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTEwLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0Tm9uY2UoX3gyMSwgX3gyMiwgX3gyMykge1xuICAgICAgICByZXR1cm4gX2dldE5vbmNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXROb25jZTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJnZXRQb3N0Ym94S2V5RnJvbTFPdXRPZjFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9zdGJveEtleUZyb20xT3V0T2YxKHByaXZLZXksIG5vbmNlKSB7XG4gICAgICB2YXIgcHJpdktleUJOID0gbmV3IEJOKHByaXZLZXksIDE2KTtcbiAgICAgIHZhciBub25jZUJOID0gbmV3IEJOKG5vbmNlLCAxNik7XG4gICAgICByZXR1cm4gcHJpdktleUJOLnN1Yihub25jZUJOKS51bW9kKHRoaXMuZWMuY3VydmUubikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZW5hYmxlTG9nZ2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVMb2dnaW5nKCkge1xuICAgICAgdmFyIHYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG4gICAgICBpZiAodikgbG9nLmVuYWJsZUFsbCgpO2Vsc2UgbG9nLmRpc2FibGVBbGwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QVBJS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFQSUtleSQxKGFwaUtleSkge1xuICAgICAgc2V0QVBJS2V5KGFwaUtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEVtYmVkSG9zdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRFbWJlZEhvc3QkMShlbWJlZEhvc3QpIHtcbiAgICAgIHNldEVtYmVkSG9zdChlbWJlZEhvc3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0dldE9yU2V0Tm9uY2VFcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0dldE9yU2V0Tm9uY2VFcnJvcihlcnIpIHtcbiAgICAgIHJldHVybiBlcnIgaW5zdGFuY2VvZiBHZXRPclNldE5vbmNlRXJyb3I7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRvcnVzO1xufSgpO1xuXG5leHBvcnQgeyBHZXRPclNldE5vbmNlRXJyb3IsIFRvcnVzIGFzIGRlZmF1bHQsIGtDb21iaW5hdGlvbnMsIGtlY2NhazI1Niwga2V5QXNzaWduLCBrZXlMb29rdXAsIHRocmVzaG9sZFNhbWUsIHdhaXRLZXlMb29rdXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvcnVzVXRpbHMuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgTm9kZURldGFpbE1hbmFnZXIgZnJvbSAnQHRvcnVzbGFicy9mZXRjaC1ub2RlLWRldGFpbHMnO1xuaW1wb3J0IHsgZ2V0LCBzZXRBUElLZXkgfSBmcm9tICdAdG9ydXNsYWJzL2h0dHAtaGVscGVycyc7XG5pbXBvcnQgeyBTYWZlRXZlbnRFbWl0dGVyLCBPYmplY3RNdWx0aXBsZXgsIGNyZWF0ZVN0cmVhbU1pZGRsZXdhcmUsIEpSUENFbmdpbmUsIGNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlLCBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0sIHNldHVwTXVsdGlwbGV4IH0gZnJvbSAnQHRvcnVzbGFicy9vcGVubG9naW4tanJwYyc7XG5pbXBvcnQgVG9ydXNKcyBmcm9tICdAdG9ydXNsYWJzL3RvcnVzLmpzJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnbG9kYXNoLm1lcmdlJztcbmltcG9ydCB7IE9ic2VydmFibGVTdG9yZSwgc3RvcmVBc1N0cmVhbSB9IGZyb20gJ0BtZXRhbWFzay9vYnMtc3RvcmUnO1xuaW1wb3J0IHsgZXRoRXJyb3JzLCBFdGhlcmV1bVJwY0Vycm9yIH0gZnJvbSAnZXRoLXJwYy1lcnJvcnMnO1xuaW1wb3J0IGRlcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgZHVwbGV4IH0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCBwdW1wIGZyb20gJ3B1bXAnO1xuaW1wb3J0IGxvZ2xldmVsIGZyb20gJ2xvZ2xldmVsJztcbmltcG9ydCBjcmVhdGVIYXNoIGZyb20gJ2NyZWF0ZS1oYXNoJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5cbmNvbnN0IExPR0lOX1BST1ZJREVSID0ge1xuICBHT09HTEU6IFwiZ29vZ2xlXCIsXG4gIEZBQ0VCT09LOiBcImZhY2Vib29rXCIsXG4gIFRXSVRDSDogXCJ0d2l0Y2hcIixcbiAgUkVERElUOiBcInJlZGRpdFwiLFxuICBESVNDT1JEOiBcImRpc2NvcmRcIlxufTtcbmNvbnN0IFdBTExFVF9WRVJJRklFUlMgPSB7XG4gIEdPT0dMRTogXCJnb29nbGVcIixcbiAgRkFDRUJPT0s6IFwiZmFjZWJvb2tcIixcbiAgVFdJVENIOiBcInR3aXRjaFwiLFxuICBSRURESVQ6IFwicmVkZGl0XCIsXG4gIERJU0NPUkQ6IFwiZGlzY29yZFwiLFxuICBFTUFJTF9QQVNTV09SRExFU1M6IFwidG9ydXMtYXV0aDAtZW1haWwtcGFzc3dvcmRsZXNzXCJcbn07XG5jb25zdCBXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUCA9IHtcbiAgW1dBTExFVF9WRVJJRklFUlMuR09PR0xFXTogXCJ0a2V5LWdvb2dsZVwiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5GQUNFQk9PS106IFwidGtleS1mYWNlYm9va1wiLFxuICBbV0FMTEVUX1ZFUklGSUVSUy5UV0lUQ0hdOiBcInRrZXktdHdpdGNoXCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLlJFRERJVF06IFwidGtleS1yZWRkaXRcIixcbiAgW1dBTExFVF9WRVJJRklFUlMuRElTQ09SRF06IFwidGtleS1kaXNjb3JkXCIsXG4gIFtXQUxMRVRfVkVSSUZJRVJTLkVNQUlMX1BBU1NXT1JETEVTU106IFwidGtleS1hdXRoMC1lbWFpbC1wYXNzd29yZGxlc3NcIlxufTtcbmNvbnN0IFBBWU1FTlRfUFJPVklERVIgPSB7XG4gIE1PT05QQVk6IFwibW9vbnBheVwiLFxuICBXWVJFOiBcInd5cmVcIixcbiAgUkFNUE5FVFdPUks6IFwicmFtcG5ldHdvcmtcIixcbiAgWEFOUE9PTDogXCJ4YW5wb29sXCIsXG4gIE1FUkNVUllPOiBcIm1lcmN1cnlvXCIsXG4gIFRSQU5TQUs6IFwidHJhbnNha1wiXG59O1xuY29uc3QgVE9SVVNfQlVJTERfRU5WID0ge1xuICBQUk9EVUNUSU9OOiBcInByb2R1Y3Rpb25cIixcbiAgREVWRUxPUE1FTlQ6IFwiZGV2ZWxvcG1lbnRcIixcbiAgQklOQU5DRTogXCJiaW5hbmNlXCIsXG4gIFRFU1RJTkc6IFwidGVzdGluZ1wiLFxuICBMUkM6IFwibHJjXCIsXG4gIEJFVEE6IFwiYmV0YVwiXG59O1xuY29uc3QgQlVUVE9OX1BPU0lUSU9OID0ge1xuICBCT1RUT01fTEVGVDogXCJib3R0b20tbGVmdFwiLFxuICBUT1BfTEVGVDogXCJ0b3AtbGVmdFwiLFxuICBCT1RUT01fUklHSFQ6IFwiYm90dG9tLXJpZ2h0XCIsXG4gIFRPUF9SSUdIVDogXCJ0b3AtcmlnaHRcIlxufTtcblxuY29uc3QgcGF5bWVudFByb3ZpZGVycyQxID0ge1xuICBbUEFZTUVOVF9QUk9WSURFUi5SQU1QTkVUV09SS106IHtcbiAgICBsaW5lMTogXCJEZWJpdCBDYXJkLyBBcHBsZSBQYXkvIEJhbmsgdHJhbnNmZXJcIixcbiAgICBsaW5lMjogXCIwLjQ5JSAtIDIuOSVcIixcbiAgICBsaW5lMzogXCI1LDAwMOKCrC9wdXJjaGFzZSwgMjAsMDAw4oKsL21vXCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9pbnN0YW50LnJhbXAubmV0d29yay9cIixcbiAgICBtaW5PcmRlclZhbHVlOiA1MCxcbiAgICBtYXhPcmRlclZhbHVlOiAyMDAwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIkdCUFwiLCBcIkVVUlwiLCBcIlVTRFwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIlVTRENcIiwgXCJCU0NfQk5CXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLk1PT05QQVldOiB7XG4gICAgbGluZTE6IFwiQ3JlZGl0IC8gRGViaXQgQ2FyZCAvIEFwcGxlIFBheVwiLFxuICAgIGxpbmUyOiBcIjQuNSUgb3IgNSBVU0RcIixcbiAgICBsaW5lMzogXCIyLDAwMOKCrC9kYXksIDEwLDAwMOKCrC9tb1wiLFxuICAgIHN1cHBvcnRQYWdlOiBcImh0dHBzOi8vaGVscC5tb29ucGF5LmlvL2VuL1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDI0Ljk5LFxuICAgIG1heE9yZGVyVmFsdWU6IDUwMDAwLFxuICAgIHZhbGlkQ3VycmVuY2llczogW1wiVVNEXCIsIFwiRVVSXCIsIFwiR0JQXCIsIFwiQVVEXCIsIFwiQ0FEXCIsIFwiU0dEXCIsIFwiUlVCXCJdLFxuICAgIHZhbGlkQ3J5cHRvQ3VycmVuY2llczogW1wiRVRIXCIsIFwiREFJXCIsIFwiVFVTRFwiLCBcIlVTRENcIiwgXCJVU0RUXCIsIFwiQk5CX0JTQ1wiLCBcIkJVU0RfQlNDXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH0sXG4gIFtQQVlNRU5UX1BST1ZJREVSLldZUkVdOiB7XG4gICAgbGluZTE6IFwiQXBwbGUgUGF5LyBEZWJpdC8gQ3JlZGl0IENhcmRcIixcbiAgICBsaW5lMjogXCI0LjklICsgMzDCoiBvciA1IFVTRFwiLFxuICAgIGxpbmUzOiBcIiQyNTAvZGF5XCIsXG4gICAgc3VwcG9ydFBhZ2U6IFwiaHR0cHM6Ly9zdXBwb3J0LnNlbmR3eXJlLmNvbS9lbi9cIixcbiAgICBtaW5PcmRlclZhbHVlOiA1LFxuICAgIG1heE9yZGVyVmFsdWU6IDUwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlVTRFwiLCBcIkFVRFwiLCBcIkNBRFwiLCBcIkdCUFwiLCBcIkVVUlwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIlVTRENcIiwgXCJVU0RUXCJdLFxuICAgIGluY2x1ZGVGZWVzOiBmYWxzZSxcbiAgICBlbmZvcmNlTWF4OiBmYWxzZVxuICB9LFxuICBbUEFZTUVOVF9QUk9WSURFUi5YQU5QT09MXToge1xuICAgIGxpbmUxOiBcIlBheU5vdy8gSW5zdGFQYXkvIEZQUy8gR29KZWtQYXkvIFVQSS8gUHJvbXB0UGF5LyBWaWV0ZWxQYXkvIER1aXROb3dcIixcbiAgICBsaW5lMjogXCIyLjUlIGJ1eWluZywgMyUgc2VsbGluZ1wiLFxuICAgIGxpbmUzOiBcIiQyLDUwMCAvIGRheVwiLFxuICAgIHN1cHBvcnRQYWdlOiBcIm1haWx0bzpzdXBwb3J0QHhhbnBvb2wuY29tXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogMTAwLFxuICAgIG1heE9yZGVyVmFsdWU6IDI1MDAsXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbXCJTR0RcIiwgXCJIS0RcIiwgXCJNWVJcIiwgXCJQSFBcIiwgXCJJTlJcIiwgXCJWTkRcIiwgXCJUSEJcIiwgXCJJRFJcIl0sXG4gICAgdmFsaWRDcnlwdG9DdXJyZW5jaWVzOiBbXCJFVEhcIiwgXCJVU0RUXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIHNlbGw6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuTUVSQ1VSWU9dOiB7XG4gICAgbGluZTE6IFwiQ3JlZGl0LyBEZWJpdCBDYXJkLyBBcHBsZSBQYXlcIixcbiAgICBsaW5lMjogXCIzLjk1JSBvciA0IFVTRFwiLFxuICAgIGxpbmUzOiBcIjEwLDAwMOKCrC9kYXksIDI1LDAwMOKCrC9tb1wiLFxuICAgIHN1cHBvcnRQYWdlOiBcIm1haWx0bzpzdXBwb3J0QG1lcmN1cnlvLmlvXCIsXG4gICAgbWluT3JkZXJWYWx1ZTogMzAsXG4gICAgbWF4T3JkZXJWYWx1ZTogNTAwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlVTRFwiLCBcIkVVUlwiLCBcIlJVQlwiLCBcIlRSWVwiLCBcIkdCUFwiLCBcIlVBSFwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIkJBVFwiLCBcIlVTRFRcIiwgXCJPS0JcIl0sXG4gICAgaW5jbHVkZUZlZXM6IHRydWUsXG4gICAgZW5mb3JjZU1heDogZmFsc2VcbiAgfSxcbiAgW1BBWU1FTlRfUFJPVklERVIuVFJBTlNBS106IHtcbiAgICBsaW5lMTogXCJDcmVkaXQvIERlYml0IENhcmQvIDxici8+QmFuayBUcmFuc2ZlciAoc2VwYS9nYnApXCIsXG4gICAgbGluZTI6IFwiMC45OSUgLSA1LjUlIG9yIDUgVVNEXCIsXG4gICAgbGluZTM6IFwiNTAw4oKsL2RheVwiLFxuICAgIHN1cHBvcnRQYWdlOiBcImh0dHBzOi8vc3VwcG9ydC50cmFuc2FrLmNvbS9oYy9lbi1VU1wiLFxuICAgIG1pbk9yZGVyVmFsdWU6IDIwLFxuICAgIG1heE9yZGVyVmFsdWU6IDUwMCxcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFtcIlVTRFwiLCBcIkVVUlwiLCBcIkdCUFwiLCBcIkFVRFwiLCBcIkNBRFwiLCBcIlNHRFwiXSxcbiAgICB2YWxpZENyeXB0b0N1cnJlbmNpZXM6IFtcIkVUSFwiLCBcIkRBSVwiLCBcIlVTRENcIiwgXCJVU0RUXCJdLFxuICAgIGluY2x1ZGVGZWVzOiB0cnVlLFxuICAgIGVuZm9yY2VNYXg6IGZhbHNlXG4gIH1cbn07XG5jb25zdCB0cmFuc2xhdGlvbnMgPSB7XG4gIGVuOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIkNvbnRpbnVlXCIsXG4gICAgICBhY3Rpb25SZXF1aXJlZDogXCJBdXRob3JpemF0aW9uIHJlcXVpcmVkXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIkNsaWNrIGNvbnRpbnVlIHRvIHByb2NlZWQgd2l0aCB5b3VyIHJlcXVlc3QgaW4gYSBwb3B1cFwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIkNvb2tpZXMgUmVxdWlyZWRcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwiUGxlYXNlIGVuYWJsZSBjb29raWVzIGluIHlvdXIgYnJvd3NlciBwcmVmZXJlbmNlcyB0byBhY2Nlc3MgVG9ydXNcIixcbiAgICAgIGNsaWNrSGVyZTogXCJNb3JlIEluZm9cIlxuICAgIH1cbiAgfSxcbiAgZGU6IHtcbiAgICBlbWJlZDoge1xuICAgICAgY29udGludWU6IFwiRm9ydHNldHplblwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwiQXV0b3Jpc2llcnVuZyBlcmZvcmRlcmxpY2hcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwiS2xpY2tlbiBTaWUgaW4gZWluZW0gUG9wdXAgYXVmIFdlaXRlciwgdW0gbWl0IElocmVyIEFuZnJhZ2UgZm9ydHp1ZmFocmVuXCIsXG4gICAgICBjb29raWVzUmVxdWlyZWQ6IFwiQ29va2llcyBiZW7DtnRpZ3RcIixcbiAgICAgIGVuYWJsZUNvb2tpZXM6IFwiQml0dGUgYWt0aXZpZXJlbiBTaWUgQ29va2llcyBpbiBJaHJlbiBCcm93c2VyZWluc3RlbGx1bmdlbiwgdW0gYXVmIFRvcnVzIHp1enVncmVpZmVuXCIsXG4gICAgICBjbGlja0hlcmU6IFwiTWVociBJbmZvXCJcbiAgICB9XG4gIH0sXG4gIGphOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIue2mee2muOBmeOCi1wiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwi6KqN6Ki844GM5b+F6KaB44Gn44GZXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIue2muihjOOCkuOCr+ODquODg+OCr+OBl+OBpuOAgeODneODg+ODl+OCouODg+ODl+OBp+ODquOCr+OCqOOCueODiOOCkue2muihjOOBl+OBvuOBmVwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIuW/heimgeOBquOCr+ODg+OCreODvFwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCJUb3J1c+OBq+OCouOCr+OCu+OCueOBmeOCi+OBq+OBr+OAgeODluODqeOCpuOCtuOBruioreWumuOBp0Nvb2tpZeOCkuacieWKueOBq+OBl+OBpuOBj+OBoOOBleOBhOOAglwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuips+OBl+OBj+OBr1wiXG4gICAgfVxuICB9LFxuICBrbzoge1xuICAgIGVtYmVkOiB7XG4gICAgICBjb250aW51ZTogXCLqs4Tsho3tlZjri6RcIixcbiAgICAgIGFjdGlvblJlcXVpcmVkOiBcIuyKueyduCDtlYTsmpRcIixcbiAgICAgIHBlbmRpbmdBY3Rpb246IFwi7Yyd7JeF7JeQ7IScIOyalOyyreydhCDsp4TtlontlZjroKTrqbQg6rOE7IaN7J2EIO2BtOumre2VmOyLreyLnOyYpC5cIixcbiAgICAgIGNvb2tpZXNSZXF1aXJlZDogXCLsv6DtgqQg7ZWE7JqUXCIsXG4gICAgICBlbmFibGVDb29raWVzOiBcIuu4jOudvOyasOyggCDtmZjqsr0g7ISk7KCV7JeQ7IScIOy/oO2CpOulvCDtmZzshLHtmZTtlZjsl6wgVG9ydXPsl5Ag7JWh7IS47Iqk7ZWY7Iut7Iuc7JikLlwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuuNlCDrp47snYAg7KCV67O0XCJcbiAgICB9XG4gIH0sXG4gIHpoOiB7XG4gICAgZW1iZWQ6IHtcbiAgICAgIGNvbnRpbnVlOiBcIue7p+e7rVwiLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IFwi6ZyA6KaB5o6I5p2DXCIsXG4gICAgICBwZW5kaW5nQWN0aW9uOiBcIuWNleWHu+e7p+e7reS7peWcqOW8ueWHuueql+WPo+S4ree7p+e7reaCqOeahOivt+axglwiLFxuICAgICAgY29va2llc1JlcXVpcmVkOiBcIuW/heWhq0Nvb2tpZVwiLFxuICAgICAgZW5hYmxlQ29va2llczogXCLor7flnKjmgqjnmoTmtY/op4jlmajpppbpgInpobnkuK3lkK/nlKhjb29raWXku6Xorr/pl65Ub3J1c+OAglwiLFxuICAgICAgY2xpY2tIZXJlOiBcIuabtOWkmuS/oeaBr1wiXG4gICAgfVxuICB9XG59O1xudmFyIGNvbmZpZ3VyYXRpb24gPSB7XG4gIHN1cHBvcnRlZFZlcmlmaWVyTGlzdDogT2JqZWN0LnZhbHVlcyhXQUxMRVRfVkVSSUZJRVJTKSxcbiAgcGF5bWVudFByb3ZpZGVyczogcGF5bWVudFByb3ZpZGVycyQxLFxuICBhcGk6IFwiaHR0cHM6Ly9hcGkudG9yLnVzXCIsXG4gIHRyYW5zbGF0aW9ucyxcbiAgcHJvZFRvcnVzVXJsOiBcIlwiLFxuICBsb2NhbFN0b3JhZ2VLZXlQcmVmaXg6IFwidG9ydXMtXCJcbn07XG5cbmNvbnN0IHJ1bk9uTG9hZCA9IGZuID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaWYgKHdpbmRvdy5kb2N1bWVudC5ib2R5ICE9IG51bGwpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG59KTtcbmNvbnN0IGh0bWxUb0VsZW1lbnQgPSBodG1sID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICBjb25zdCB0cmltbWVkSHRtbCA9IGh0bWwudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdHJpbW1lZEh0bWw7XG4gIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59O1xuY29uc3QgaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoaGFuZGxlLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGhhbmRsZXJBcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBoYW5kbGVyQXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBjb25zdCBoYW5kbGVyV3JhcHBlciA9ICgpID0+IHtcbiAgICBoYW5kbGVyKC4uLmhhbmRsZXJBcmdzKTtcbiAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbiAgfTtcblxuICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbn07XG5jb25zdCBoYW5kbGVTdHJlYW0gPSAoaGFuZGxlLCBldmVudE5hbWUsIGhhbmRsZXIpID0+IHtcbiAgY29uc3QgaGFuZGxlcldyYXBwZXIgPSBjaHVuayA9PiB7XG4gICAgaGFuZGxlcihjaHVuayk7XG4gICAgaGFuZGxlLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcldyYXBwZXIpO1xuICB9O1xuXG4gIGhhbmRsZS5vbihldmVudE5hbWUsIGhhbmRsZXJXcmFwcGVyKTtcbn07XG5hc3luYyBmdW5jdGlvbiBkb2N1bWVudFJlYWR5KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZUV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVzb2x2ZSk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGxvZyA9IGxvZ2xldmVsLmdldExvZ2dlcihcInRvcnVzLWVtYmVkXCIpO1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gIGVycm9yczoge1xuICAgIGRpc2Nvbm5lY3RlZDogKCkgPT4gXCJUb3J1czogTG9zdCBjb25uZWN0aW9uIHRvIFRvcnVzLlwiLFxuICAgIHBlcm1hbmVudGx5RGlzY29ubmVjdGVkOiAoKSA9PiBcIlRvcnVzOiBEaXNjb25uZWN0ZWQgZnJvbSBpZnJhbWUuIFBhZ2UgcmVsb2FkIHJlcXVpcmVkLlwiLFxuICAgIHNlbmRTaXRlTWV0YWRhdGE6ICgpID0+IFwiVG9ydXM6IEZhaWxlZCB0byBzZW5kIHNpdGUgbWV0YWRhdGEuIFRoaXMgaXMgYW4gaW50ZXJuYWwgZXJyb3IsIHBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsXG4gICAgdW5zdXBwb3J0ZWRTeW5jOiBtZXRob2QgPT4gXCJUb3J1czogVGhlIFRvcnVzIEV0aGVyZXVtIHByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgc3luY2hyb25vdXMgbWV0aG9kcyBsaWtlIFwiLmNvbmNhdChtZXRob2QsIFwiIHdpdGhvdXQgYSBjYWxsYmFjayBwYXJhbWV0ZXIuXCIpLFxuICAgIGludmFsaWREdXBsZXhTdHJlYW06ICgpID0+IFwiTXVzdCBwcm92aWRlIGEgTm9kZS5qcy1zdHlsZSBkdXBsZXggc3RyZWFtLlwiLFxuICAgIGludmFsaWRPcHRpb25zOiAobWF4RXZlbnRMaXN0ZW5lcnMsIHNob3VsZFNlbmRNZXRhZGF0YSkgPT4gXCJJbnZhbGlkIG9wdGlvbnMuIFJlY2VpdmVkOiB7IG1heEV2ZW50TGlzdGVuZXJzOiBcIi5jb25jYXQobWF4RXZlbnRMaXN0ZW5lcnMsIFwiLCBzaG91bGRTZW5kTWV0YWRhdGE6IFwiKS5jb25jYXQoc2hvdWxkU2VuZE1ldGFkYXRhLCBcIiB9XCIpLFxuICAgIGludmFsaWRSZXF1ZXN0QXJnczogKCkgPT4gXCJFeHBlY3RlZCBhIHNpbmdsZSwgbm9uLWFycmF5LCBvYmplY3QgYXJndW1lbnQuXCIsXG4gICAgaW52YWxpZFJlcXVlc3RNZXRob2Q6ICgpID0+IFwiJ2FyZ3MubWV0aG9kJyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy5cIixcbiAgICBpbnZhbGlkUmVxdWVzdFBhcmFtczogKCkgPT4gXCInYXJncy5wYXJhbXMnIG11c3QgYmUgYW4gb2JqZWN0IG9yIGFycmF5IGlmIHByb3ZpZGVkLlwiLFxuICAgIGludmFsaWRMb2dnZXJPYmplY3Q6ICgpID0+IFwiJ2FyZ3MubG9nZ2VyJyBtdXN0IGJlIGFuIG9iamVjdCBpZiBwcm92aWRlZC5cIixcbiAgICBpbnZhbGlkTG9nZ2VyTWV0aG9kOiBtZXRob2QgPT4gXCInYXJncy5sb2dnZXInIG11c3QgaW5jbHVkZSByZXF1aXJlZCBtZXRob2QgJ1wiLmNvbmNhdChtZXRob2QsIFwiJy5cIilcbiAgfSxcbiAgaW5mbzoge1xuICAgIGNvbm5lY3RlZDogY2hhaW5JZCA9PiBcIlRvcnVzOiBDb25uZWN0ZWQgdG8gY2hhaW4gd2l0aCBJRCBcXFwiXCIuY29uY2F0KGNoYWluSWQsIFwiXFxcIi5cIilcbiAgfSxcbiAgd2FybmluZ3M6IHtcbiAgICAvLyBkZXByZWNhdGVkIG1ldGhvZHNcbiAgICBlbmFibGVEZXByZWNhdGlvbjogJ1RvcnVzOiBcIlwiZXRoZXJldW0uZW5hYmxlKClcIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiAnICsgJ1BsZWFzZSB1c2UgXCJldGhlcmV1bS5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiKVwiIGluc3RlYWQuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTEwMicsXG4gICAgc2VuZERlcHJlY2F0aW9uOiAnVG9ydXM6IFwiZXRoZXJldW0uc2VuZCguLi4pXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4nICsgJyBQbGVhc2UgdXNlIFwiZXRoZXJldW0uc2VuZEFzeW5jKC4uLilcIiBvciBcImV0aGVyZXVtLnJlcXVlc3QoLi4uKVwiIGluc3RlYWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzJyxcbiAgICBldmVudHM6IHtcbiAgICAgIGNsb3NlOiAnVG9ydXM6IFRoZSBldmVudCBcImNsb3NlXCIgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS4gUGxlYXNlIHVzZSBcImRpc2Nvbm5lY3RcIiBpbnN0ZWFkLicgKyBcIlxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE5M1wiLFxuICAgICAgZGF0YTogJ1RvcnVzOiBUaGUgZXZlbnQgXCJkYXRhXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJyArICdVc2UgXCJtZXNzYWdlXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMjbWVzc2FnZScsXG4gICAgICBuZXR3b3JrQ2hhbmdlZDogJ1RvcnVzOiBUaGUgZXZlbnQgXCJuZXR3b3JrQ2hhbmdlZFwiIGlzIGRlcHJlY2F0ZWQgYW5kIG1heSBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuJyArICcgUGxlYXNlIHVzZSBcImNoYWluQ2hhbmdlZFwiIGluc3RlYWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZTogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzJyxcbiAgICAgIG5vdGlmaWNhdGlvbjogJ1RvcnVzOiBUaGUgZXZlbnQgXCJub3RpZmljYXRpb25cIiBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiAnICsgJ1BsZWFzZSB1c2UgXCJtZXNzYWdlXCIgaW5zdGVhZC5cXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTMnXG4gICAgfSxcbiAgICBwdWJsaWNDb25maWdTdG9yZTogJ1RvcnVzOiBUaGUgcHJvcGVydHkgXCJwdWJsaWNDb25maWdTdG9yZVwiIGlzIGRlcHJlY2F0ZWQgYW5kIFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLidcbiAgfVxufTtcblxuY29uc3Qge1xuICBwYXltZW50UHJvdmlkZXJzXG59ID0gY29uZmlndXJhdGlvbjtcbmNvbnN0IHZhbGlkYXRlUGF5bWVudFByb3ZpZGVyID0gKHByb3ZpZGVyLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgaWYgKCFwcm92aWRlcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnMsXG4gICAgICBpc1ZhbGlkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm92aWRlciAmJiAhcGF5bWVudFByb3ZpZGVyc1twcm92aWRlcl0pIHtcbiAgICBlcnJvcnMucHJvdmlkZXIgPSBcIkludmFsaWQgUHJvdmlkZXJcIjtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JzLFxuICAgICAgaXNWYWxpZDogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDBcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm92aWRlciA9IHBheW1lbnRQcm92aWRlcnNbcHJvdmlkZXJdO1xuICBjb25zdCBzZWxlY3RlZFBhcmFtcyA9IHBhcmFtcyB8fCB7fTsgLy8gc2V0IGRlZmF1bHQgdmFsdWVzXG4gIC8vIGlmICghc2VsZWN0ZWRQYXJhbXMuc2VsZWN0ZWRDdXJyZW5jeSkgW3NlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3VycmVuY3ldID0gc2VsZWN0ZWRQcm92aWRlci52YWxpZEN1cnJlbmNpZXNcbiAgLy8gaWYgKCFzZWxlY3RlZFBhcmFtcy5maWF0VmFsdWUpIHNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZSA9IHNlbGVjdGVkUHJvdmlkZXIubWluT3JkZXJWYWx1ZVxuICAvLyBpZiAoIXNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kpIFtzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZENyeXB0b0N1cnJlbmN5XSA9IHNlbGVjdGVkUHJvdmlkZXIudmFsaWRDcnlwdG9DdXJyZW5jaWVzXG4gIC8vIHZhbGlkYXRpb25zXG5cbiAgaWYgKHNlbGVjdGVkUGFyYW1zLmZpYXRWYWx1ZSkge1xuICAgIGNvbnN0IHJlcXVlc3RlZE9yZGVyQW1vdW50ID0gK3BhcnNlRmxvYXQoc2VsZWN0ZWRQYXJhbXMuZmlhdFZhbHVlLnRvU3RyaW5nKCkpIHx8IDA7XG4gICAgaWYgKHJlcXVlc3RlZE9yZGVyQW1vdW50IDwgc2VsZWN0ZWRQcm92aWRlci5taW5PcmRlclZhbHVlKSBlcnJvcnMuZmlhdFZhbHVlID0gXCJSZXF1ZXN0ZWQgYW1vdW50IGlzIGxvd2VyIHRoYW4gc3VwcG9ydGVkXCI7XG4gICAgaWYgKHJlcXVlc3RlZE9yZGVyQW1vdW50ID4gc2VsZWN0ZWRQcm92aWRlci5tYXhPcmRlclZhbHVlICYmIHNlbGVjdGVkUHJvdmlkZXIuZW5mb3JjZU1heCkgZXJyb3JzLmZpYXRWYWx1ZSA9IFwiUmVxdWVzdGVkIGFtb3VudCBpcyBoaWdoZXIgdGhhbiBzdXBwb3J0ZWRcIjtcbiAgfVxuXG4gIGlmIChzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5ICYmICFzZWxlY3RlZFByb3ZpZGVyLnZhbGlkQ3VycmVuY2llcy5pbmNsdWRlcyhzZWxlY3RlZFBhcmFtcy5zZWxlY3RlZEN1cnJlbmN5KSkge1xuICAgIGVycm9ycy5zZWxlY3RlZEN1cnJlbmN5ID0gXCJVbnN1cHBvcnRlZCBjdXJyZW5jeVwiO1xuICB9XG5cbiAgaWYgKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kgJiYgIXNlbGVjdGVkUHJvdmlkZXIudmFsaWRDcnlwdG9DdXJyZW5jaWVzLmluY2x1ZGVzKHNlbGVjdGVkUGFyYW1zLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kpKSB7XG4gICAgZXJyb3JzLnNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kgPSBcIlVuc3VwcG9ydGVkIGNyeXB0b0N1cnJlbmN5XCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVycm9ycyxcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMFxuICB9O1xufTsgLy8gdXRpbGl0eSBmdW5jdGlvbnNcblxuLyoqXG4gKiBqc29uLXJwYy1lbmdpbmUgbWlkZGxld2FyZSB0aGF0IGxvZ3MgUlBDIGVycm9ycyBhbmQgYW5kIHZhbGlkYXRlcyByZXEubWV0aG9kLlxuICpcbiAqIEBwYXJhbSBsb2cgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICogQHJldHVybnMgIGpzb24tcnBjLWVuZ2luZSBtaWRkbGV3YXJlIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JNaWRkbGV3YXJlKCkge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgLy8ganNvbi1ycGMtZW5naW5lIHdpbGwgdGVybWluYXRlIHRoZSByZXF1ZXN0IHdoZW4gaXQgbm90aWNlcyB0aGlzIGVycm9yXG4gICAgaWYgKHR5cGVvZiByZXEubWV0aG9kICE9PSBcInN0cmluZ1wiIHx8ICFyZXEubWV0aG9kKSB7XG4gICAgICByZXMuZXJyb3IgPSBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCJUaGUgcmVxdWVzdCAnbWV0aG9kJyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy5cIixcbiAgICAgICAgZGF0YTogcmVxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBuZXh0KGRvbmUgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlcnJvclxuICAgICAgfSA9IHJlcztcblxuICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICByZXR1cm4gZG9uZSgpO1xuICAgICAgfVxuXG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzayAtIFJQQyBFcnJvcjogXCIuY29uY2F0KGVycm9yLm1lc3NhZ2UpLCBlcnJvcik7XG4gICAgICByZXR1cm4gZG9uZSgpO1xuICAgIH0pO1xuICB9O1xufSAvLyByZXNvbHZlIHJlc3BvbnNlLnJlc3VsdCBvciByZXNwb25zZSwgcmVqZWN0IGVycm9yc1xuLyoqXG4gKiBMb2dzIGEgc3RyZWFtIGRpc2Nvbm5lY3Rpb24gZXJyb3IuIEVtaXRzIGFuICdlcnJvcicgaWYgZ2l2ZW4gYW5cbiAqIEV2ZW50RW1pdHRlciB0aGF0IGhhcyBsaXN0ZW5lcnMgZm9yIHRoZSAnZXJyb3InIGV2ZW50LlxuICpcbiAqIEBwYXJhbSBsb2cgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICogQHBhcmFtIHJlbW90ZUxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBkaXNjb25uZWN0ZWQgc3RyZWFtLlxuICogQHBhcmFtIGVycm9yIC0gVGhlIGFzc29jaWF0ZWQgZXJyb3IgdG8gbG9nLlxuICogQHBhcmFtIGVtaXR0ZXIgLSBUaGUgbG9nZ2luZyBBUEkgdG8gdXNlLlxuICovXG5cbmZ1bmN0aW9uIGxvZ1N0cmVhbURpc2Nvbm5lY3RXYXJuaW5nKHJlbW90ZUxhYmVsLCBlcnJvciwgZW1pdHRlcikge1xuICBsZXQgd2FybmluZ01zZyA9IFwiTWV0YU1hc2s6IExvc3QgY29ubmVjdGlvbiB0byBcXFwiXCIuY29uY2F0KHJlbW90ZUxhYmVsLCBcIlxcXCIuXCIpO1xuXG4gIGlmIChlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwICYmIGVycm9yLnN0YWNrKSB7XG4gICAgd2FybmluZ01zZyArPSBcIlxcblwiLmNvbmNhdChlcnJvci5zdGFjayk7XG4gIH1cblxuICBsb2cud2Fybih3YXJuaW5nTXNnKTtcblxuICBpZiAoZW1pdHRlciAmJiBlbWl0dGVyLmxpc3RlbmVyQ291bnQoXCJlcnJvclwiKSA+IDApIHtcbiAgICBlbWl0dGVyLmVtaXQoXCJlcnJvclwiLCB3YXJuaW5nTXNnKTtcbiAgfVxufVxuY29uc3QgZ2V0UHJlb3Blbkluc3RhbmNlSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcbmNvbnN0IGdldFRvcnVzVXJsID0gYXN5bmMgKGJ1aWxkRW52LCBpbnRlZ3JpdHkpID0+IHtcbiAgbGV0IHRvcnVzVXJsO1xuICBsZXQgbG9nTGV2ZWw7IC8vIERvIG5vdCBjaGFuZ2UgdGhpcyBsaW5lXG5cbiAgY29uc3QgdmVyc2lvbiA9IFwiMS4yNS4wXCI7XG4gIGxldCB2ZXJzaW9uVXNlZCA9IGludGVncml0eS52ZXJzaW9uIHx8IHZlcnNpb247XG5cbiAgdHJ5IHtcbiAgICBpZiAoKGJ1aWxkRW52ID09PSBcImJpbmFuY2VcIiB8fCBidWlsZEVudiA9PT0gXCJwcm9kdWN0aW9uXCIpICYmICFpbnRlZ3JpdHkudmVyc2lvbikge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgaWYgKCFjb25maWd1cmF0aW9uLnByb2RUb3J1c1VybCkgcmVzcG9uc2UgPSBhd2FpdCBnZXQoXCJcIi5jb25jYXQoY29uZmlndXJhdGlvbi5hcGksIFwiL2xhdGVzdHZlcnNpb24/bmFtZT1AdG9ydXNsYWJzL3RvcnVzLWVtYmVkJnZlcnNpb249XCIpLmNvbmNhdCh2ZXJzaW9uKSwge30sIHtcbiAgICAgICAgdXNlQVBJS2V5OiB0cnVlXG4gICAgICB9KTtlbHNlIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiBjb25maWd1cmF0aW9uLnByb2RUb3J1c1VybFxuICAgICAgfTtcbiAgICAgIHZlcnNpb25Vc2VkID0gcmVzcG9uc2UuZGF0YTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXNcblxuICAgICAgY29uZmlndXJhdGlvbi5wcm9kVG9ydXNVcmwgPSByZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoZXJyb3IsIFwidW5hYmxlIHRvIGZldGNoIGxhdGVzdCB2ZXJzaW9uXCIpO1xuICB9XG5cbiAgbG9nLmluZm8oXCJ2ZXJzaW9uIHVzZWQ6IFwiLCB2ZXJzaW9uVXNlZCk7XG5cbiAgc3dpdGNoIChidWlsZEVudikge1xuICAgIGNhc2UgXCJiaW5hbmNlXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly9iaW5hbmNlLnRvci51cy92XCIuY29uY2F0KHZlcnNpb25Vc2VkKTtcbiAgICAgIGxvZ0xldmVsID0gXCJpbmZvXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJ0ZXN0aW5nXCI6XG4gICAgICB0b3J1c1VybCA9IFwiaHR0cHM6Ly90ZXN0aW5nLnRvci51c1wiO1xuICAgICAgbG9nTGV2ZWwgPSBcImRlYnVnXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJscmNcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwczovL2xyYy50b3IudXNcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiYmV0YVwiOlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vYmV0YS50b3IudXNcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiZGV2ZWxvcG1lbnRcIjpcbiAgICAgIHRvcnVzVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQwNTBcIjtcbiAgICAgIGxvZ0xldmVsID0gXCJkZWJ1Z1wiO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdG9ydXNVcmwgPSBcImh0dHBzOi8vYXBwLnRvci51cy92XCIuY29uY2F0KHZlcnNpb25Vc2VkKTtcbiAgICAgIGxvZ0xldmVsID0gXCJlcnJvclwiO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcnVzVXJsLFxuICAgIGxvZ0xldmVsXG4gIH07XG59O1xuY29uc3QgZ2V0VXNlckxhbmd1YWdlID0gKCkgPT4ge1xuICBsZXQgdXNlckxhbmd1YWdlID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCBcImVuLVVTXCI7XG4gIGNvbnN0IHVzZXJMYW5ndWFnZXMgPSB1c2VyTGFuZ3VhZ2Uuc3BsaXQoXCItXCIpO1xuICB1c2VyTGFuZ3VhZ2UgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlndXJhdGlvbi50cmFuc2xhdGlvbnMsIHVzZXJMYW5ndWFnZXNbMF0pID8gdXNlckxhbmd1YWdlc1swXSA6IFwiZW5cIjtcbiAgcmV0dXJuIHVzZXJMYW5ndWFnZTtcbn07XG5jb25zdCBFTUlUVEVEX05PVElGSUNBVElPTlMgPSBbXCJldGhfc3Vic2NyaXB0aW9uXCIgLy8gcGVyIGV0aC1qc29uLXJwYy1maWx0ZXJzL3N1YnNjcmlwdGlvbk1hbmFnZXJcbl07XG5jb25zdCBOT09QID0gKCkgPT4gey8vIGVtcHR5IGZ1bmN0aW9uXG59O1xuY29uc3QgRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPVyA9IFwiZGlyZWN0b3JpZXM9MCx0aXRsZWJhcj0wLHRvb2xiYXI9MCxzdGF0dXM9MCxsb2NhdGlvbj0wLG1lbnViYXI9MCxoZWlnaHQ9NjYwLHdpZHRoPTM3NVwiO1xuY29uc3QgRkVBVFVSRVNfREVGQVVMVF9XQUxMRVRfV0lORE9XID0gXCJkaXJlY3Rvcmllcz0wLHRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD03NDAsd2lkdGg9MTMxNVwiO1xuY29uc3QgRkVBVFVSRVNfQ09ORklSTV9XSU5ET1cgPSBcImRpcmVjdG9yaWVzPTAsdGl0bGViYXI9MCx0b29sYmFyPTAsc3RhdHVzPTAsbG9jYXRpb249MCxtZW51YmFyPTAsaGVpZ2h0PTcwMCx3aWR0aD00NTBcIjtcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcblxuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZSAmJiAoIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICBlLmNvZGUgPT09IDIyIHx8IC8vIEZpcmVmb3hcbiAgICBlLmNvZGUgPT09IDEwMTQgfHwgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fCAvLyBGaXJlZm94XG4gICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMDtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0UG9wdXBGZWF0dXJlcygpIHtcbiAgLy8gRml4ZXMgZHVhbC1zY3JlZW4gcG9zaXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vc3QgYnJvd3NlcnMgICAgICBGaXJlZm94XG4gIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlblg7XG4gIGNvbnN0IGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogd2luZG93LnNjcmVlblk7XG4gIGNvbnN0IHcgPSAxMjAwO1xuICBjb25zdCBoID0gNzAwO1xuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICBjb25zdCBzeXN0ZW1ab29tID0gMTsgLy8gTm8gcmVsaWFibGUgZXN0aW1hdGVcblxuICBjb25zdCBsZWZ0ID0gTWF0aC5hYnMoKHdpZHRoIC0gdykgLyAyIC8gc3lzdGVtWm9vbSArIGR1YWxTY3JlZW5MZWZ0KTtcbiAgY29uc3QgdG9wID0gTWF0aC5hYnMoKGhlaWdodCAtIGgpIC8gMiAvIHN5c3RlbVpvb20gKyBkdWFsU2NyZWVuVG9wKTtcbiAgY29uc3QgZmVhdHVyZXMgPSBcInRpdGxlYmFyPTAsdG9vbGJhcj0wLHN0YXR1cz0wLGxvY2F0aW9uPTAsbWVudWJhcj0wLGhlaWdodD1cIi5jb25jYXQoaCAvIHN5c3RlbVpvb20sIFwiLHdpZHRoPVwiKS5jb25jYXQodyAvIHN5c3RlbVpvb20sIFwiLHRvcD1cIikuY29uY2F0KHRvcCwgXCIsbGVmdD1cIikuY29uY2F0KGxlZnQpO1xuICByZXR1cm4gZmVhdHVyZXM7XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblNhZmVFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwMDsgLy8gcmVzb2x2ZSByZXNwb25zZS5yZXN1bHQsIHJlamVjdCBlcnJvcnNcblxuY29uc3QgZ2V0UnBjUHJvbWlzZUNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICBsZXQgdW53cmFwUmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4gKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnJvciB8fCByZXNwb25zZS5lcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdChlcnJvciB8fCByZXNwb25zZS5lcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1bndyYXBSZXN1bHQgfHwgQXJyYXkuaXNBcnJheShyZXNwb25zZSkgPyByZXNvbHZlKHJlc3BvbnNlKSA6IHJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcbiAgfTtcbn07XG5cbmNsYXNzIFRvcnVzSW5wYWdlUHJvdmlkZXIgZXh0ZW5kcyBTYWZlRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRoZSBjaGFpbiBJRCBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBFdGhlcmV1bSBjaGFpbi5cbiAgICogU2VlIFtjaGFpbklkLm5ldHdvcmtde0BsaW5rIGh0dHBzOi8vY2hhaW5pZC5uZXR3b3JrfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSB1c2VyJ3MgY3VycmVudGx5IHNlbGVjdGVkIEV0aGVyZXVtIGFkZHJlc3MuXG4gICAqIElmIG51bGwsIE1ldGFNYXNrIGlzIGVpdGhlciBsb2NrZWQgb3IgdGhlIHVzZXIgaGFzIG5vdCBwZXJtaXR0ZWQgYW55XG4gICAqIGFkZHJlc3NlcyB0byBiZSB2aWV3ZWQuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0aW5nIHRoYXQgdGhpcyBwcm92aWRlciBpcyBhIE1ldGFNYXNrIHByb3ZpZGVyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubmVjdGlvblN0cmVhbSkge1xuICAgIGxldCB7XG4gICAgICBtYXhFdmVudExpc3RlbmVycyA9IDEwMCxcbiAgICAgIHNob3VsZFNlbmRNZXRhZGF0YSA9IHRydWUsXG4gICAgICBqc29uUnBjU3RyZWFtTmFtZSA9IFwicHJvdmlkZXJcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGFpbklkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZWxlY3RlZEFkZHJlc3NcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9ycGNFbmdpbmVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5ldHdvcmtWZXJzaW9uXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaG91bGRTZW5kTWV0YWRhdGFcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzVG9ydXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9wdWJsaWNDb25maWdTdG9yZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidHJ5UHJlb3BlbkhhbmRsZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5hYmxlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9qc29uUnBjQ29ubmVjdGlvblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3NlbnRXYXJuaW5nc1wiLCB7XG4gICAgICAvLyBtZXRob2RzXG4gICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgZXhwZXJpbWVudGFsTWV0aG9kczogZmFsc2UsXG4gICAgICBzZW5kOiBmYWxzZSxcbiAgICAgIHB1YmxpY0NvbmZpZ1N0b3JlOiBmYWxzZSxcbiAgICAgIC8vIGV2ZW50c1xuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICAgIG5ldHdvcmtDaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgbm90aWZpY2F0aW9uOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFkdXBsZXgoY29ubmVjdGlvblN0cmVhbSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5lcnJvcnMuaW52YWxpZER1cGxleFN0cmVhbSgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzVG9ydXMgPSB0cnVlO1xuICAgIHRoaXMuc2V0TWF4TGlzdGVuZXJzKG1heEV2ZW50TGlzdGVuZXJzKTsgLy8gcHJpdmF0ZSBzdGF0ZVxuXG4gICAgdGhpcy5fc3RhdGUgPSBfb2JqZWN0U3ByZWFkJDEoe30sIFRvcnVzSW5wYWdlUHJvdmlkZXIuX2RlZmF1bHRTdGF0ZSk7IC8vIHB1YmxpYyBzdGF0ZVxuXG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBudWxsO1xuICAgIHRoaXMubmV0d29ya1ZlcnNpb24gPSBudWxsO1xuICAgIHRoaXMuY2hhaW5JZCA9IG51bGw7XG4gICAgdGhpcy5zaG91bGRTZW5kTWV0YWRhdGEgPSBzaG91bGRTZW5kTWV0YWRhdGE7IC8vIGJpbmQgZnVuY3Rpb25zICh0byBwcmV2ZW50IGUuZy4gd2ViM0AxLnggZnJvbSBtYWtpbmcgdW5ib3VuZCBjYWxscylcblxuICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZUNoYWluQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCA9IHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QgPSB0aGlzLl9oYW5kbGVDb25uZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlRGlzY29ubmVjdCA9IHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0ID0gdGhpcy5faGFuZGxlU3RyZWFtRGlzY29ubmVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NlbmRTeW5jID0gdGhpcy5fc2VuZFN5bmMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ycGNSZXF1ZXN0ID0gdGhpcy5fcnBjUmVxdWVzdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uID0gdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9pbml0aWFsaXplU3RhdGUgPSB0aGlzLl9pbml0aWFsaXplU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlcXVlc3QgPSB0aGlzLnJlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmQgPSB0aGlzLnNlbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRBc3luYyA9IHRoaXMuc2VuZEFzeW5jLmJpbmQodGhpcyk7IC8vIHRoaXMuZW5hYmxlID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKTtcbiAgICAvLyBzZXR1cCBjb25uZWN0aW9uU3RyZWFtIG11bHRpcGxleGluZ1xuXG4gICAgY29uc3QgbXV4ID0gbmV3IE9iamVjdE11bHRpcGxleCgpO1xuICAgIHB1bXAoY29ubmVjdGlvblN0cmVhbSwgbXV4LCBjb25uZWN0aW9uU3RyZWFtLCB0aGlzLl9oYW5kbGVTdHJlYW1EaXNjb25uZWN0LmJpbmQodGhpcywgXCJNZXRhTWFza1wiKSk7IC8vIHN1YnNjcmliZSB0byBtZXRhbWFzayBwdWJsaWMgY29uZmlnIChvbmUtd2F5KVxuXG4gICAgdGhpcy5fcHVibGljQ29uZmlnU3RvcmUgPSBuZXcgT2JzZXJ2YWJsZVN0b3JlKHtcbiAgICAgIHN0b3JhZ2VLZXk6IFwiTWV0YW1hc2stQ29uZmlnXCJcbiAgICB9KTsgLy8gaGFuZGxlIGlzVW5sb2NrZWQgY2hhbmdlcywgYW5kIGNoYWluQ2hhbmdlZCBhbmQgbmV0d29ya0NoYW5nZWQgZXZlbnRzXG4gICAgLy8gdGhpcy5fcHVibGljQ29uZmlnU3RvcmUuc3Vic2NyaWJlKChzdHJpbmdpZmllZFN0YXRlKSA9PiB7XG4gICAgLy8gICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIHN0b3JlIGFzIHN0cmluZ1xuICAgIC8vICAgY29uc3Qgc3RhdGUgPSBKU09OLnBhcnNlKHN0cmluZ2lmaWVkU3RhdGUgYXMgdW5rbm93biBhcyBzdHJpbmcpO1xuICAgIC8vICAgaWYgKFwiaXNVbmxvY2tlZFwiIGluIHN0YXRlICYmIHN0YXRlLmlzVW5sb2NrZWQgIT09IHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQpIHtcbiAgICAvLyAgICAgdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCA9IHN0YXRlLmlzVW5sb2NrZWQ7XG4gICAgLy8gICAgIGlmICghdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCkge1xuICAgIC8vICAgICAgIC8vIGFjY291bnRzIGFyZSBuZXZlciBleHBvc2VkIHdoZW4gdGhlIGV4dGVuc2lvbiBpcyBsb2NrZWRcbiAgICAvLyAgICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQoW10pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIC8vIHRoaXMgd2lsbCBnZXQgdGhlIGV4cG9zZWQgYWNjb3VudHMsIGlmIGFueVxuICAgIC8vICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KFxuICAgIC8vICAgICAgICAgICB7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiwgcGFyYW1zOiBbXSB9LFxuICAgIC8vICAgICAgICAgICBOT09QLFxuICAgIC8vICAgICAgICAgICB0cnVlIC8vIGluZGljYXRpbmcgdGhhdCBldGhfYWNjb3VudHMgX3Nob3VsZF8gdXBkYXRlIGFjY291bnRzXG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyAgICAgICAgIC8vIFN3YWxsb3cgZXJyb3JcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmIChcInNlbGVjdGVkQWRkcmVzc1wiIGluIHN0YXRlICYmIHRoaXMuc2VsZWN0ZWRBZGRyZXNzICE9PSBzdGF0ZS5zZWxlY3RlZEFkZHJlc3MpIHtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KFxuICAgIC8vICAgICAgICAgeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsIHBhcmFtczogW10gfSxcbiAgICAvLyAgICAgICAgIE5PT1AsXG4gICAgLy8gICAgICAgICB0cnVlIC8vIGluZGljYXRpbmcgdGhhdCBldGhfYWNjb3VudHMgX3Nob3VsZF8gdXBkYXRlIGFjY291bnRzXG4gICAgLy8gICAgICAgKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoXykge1xuICAgIC8vICAgICAgIC8vIFN3YWxsb3cgZXJyb3JcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgLy8gRW1pdCBjaGFpbkNoYW5nZWQgZXZlbnQgb24gY2hhaW4gY2hhbmdlXG4gICAgLy8gICBpZiAoXCJjaGFpbklkXCIgaW4gc3RhdGUgJiYgc3RhdGUuY2hhaW5JZCAhPT0gdGhpcy5jaGFpbklkKSB7XG4gICAgLy8gICAgIHRoaXMuY2hhaW5JZCA9IHN0YXRlLmNoYWluSWQgfHwgbnVsbDtcbiAgICAvLyAgICAgdGhpcy5lbWl0KFwiY2hhaW5DaGFuZ2VkXCIsIHRoaXMuY2hhaW5JZCk7XG4gICAgLy8gICAgIC8vIGluZGljYXRlIHRoYXQgd2UndmUgY29ubmVjdGVkLCBmb3IgRUlQLTExOTMgY29tcGxpYW5jZVxuICAgIC8vICAgICAvLyB3ZSBkbyB0aGlzIGhlcmUgc28gdGhhdCBpZnJhbWUgY2FuIGluaXRpYWxpemVcbiAgICAvLyAgICAgaWYgKCF0aGlzLl9zdGF0ZS5oYXNFbWl0dGVkQ29ubmVjdGlvbikge1xuICAgIC8vICAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QodGhpcy5jaGFpbklkKTtcbiAgICAvLyAgICAgICB0aGlzLl9zdGF0ZS5oYXNFbWl0dGVkQ29ubmVjdGlvbiA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIC8vIEVtaXQgbmV0d29ya0NoYW5nZWQgZXZlbnQgb24gbmV0d29yayBjaGFuZ2VcbiAgICAvLyAgIGlmIChcIm5ldHdvcmtWZXJzaW9uXCIgaW4gc3RhdGUgJiYgc3RhdGUubmV0d29ya1ZlcnNpb24gIT09IHRoaXMubmV0d29ya1ZlcnNpb24pIHtcbiAgICAvLyAgICAgdGhpcy5uZXR3b3JrVmVyc2lvbiA9IHN0YXRlLm5ldHdvcmtWZXJzaW9uIHx8IG51bGw7XG4gICAgLy8gICAgIHRoaXMuZW1pdChcIm5ldHdvcmtDaGFuZ2VkXCIsIHRoaXMubmV0d29ya1ZlcnNpb24pO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgcHVtcChtdXguY3JlYXRlU3RyZWFtKFwicHVibGljQ29uZmlnXCIpLCBzdG9yZUFzU3RyZWFtKHRoaXMuX3B1YmxpY0NvbmZpZ1N0b3JlKSwgLy8gUlBDIHJlcXVlc3RzIHNob3VsZCBzdGlsbCB3b3JrIGlmIG9ubHkgdGhpcyBzdHJlYW0gZmFpbHNcbiAgICBsb2dTdHJlYW1EaXNjb25uZWN0V2FybmluZy5iaW5kKHRoaXMsIFwiTWV0YU1hc2sgUHVibGljQ29uZmlnU3RvcmVcIikpOyAvLyBpZ25vcmUgcGhpc2hpbmcgd2FybmluZyBtZXNzYWdlIChoYW5kbGVkIGVsc2V3aGVyZSlcblxuICAgIG11eC5pZ25vcmVTdHJlYW0oXCJwaGlzaGluZ1wiKTsgLy8gc2V0dXAgb3duIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vIEVJUC0xMTkzIGNvbm5lY3RcblxuICAgIHRoaXMub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9KTsgLy8gY29ubmVjdCB0byBhc3luYyBwcm92aWRlclxuXG4gICAgY29uc3QganNvblJwY0Nvbm5lY3Rpb24gPSBjcmVhdGVTdHJlYW1NaWRkbGV3YXJlKCk7XG4gICAgcHVtcChqc29uUnBjQ29ubmVjdGlvbi5zdHJlYW0sIG11eC5jcmVhdGVTdHJlYW0oanNvblJwY1N0cmVhbU5hbWUpLCBqc29uUnBjQ29ubmVjdGlvbi5zdHJlYW0sIHRoaXMuX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QuYmluZCh0aGlzLCBcIk1ldGFNYXNrIFJwY1Byb3ZpZGVyXCIpKTsgLy8gaGFuZGxlIFJQQyByZXF1ZXN0cyB2aWEgZGFwcC1zaWRlIHJwYyBlbmdpbmVcblxuICAgIGNvbnN0IHJwY0VuZ2luZSA9IG5ldyBKUlBDRW5naW5lKCk7XG4gICAgcnBjRW5naW5lLnB1c2goY3JlYXRlSWRSZW1hcE1pZGRsZXdhcmUoKSk7XG4gICAgcnBjRW5naW5lLnB1c2goY3JlYXRlRXJyb3JNaWRkbGV3YXJlKCkpO1xuICAgIHJwY0VuZ2luZS5wdXNoKGpzb25ScGNDb25uZWN0aW9uLm1pZGRsZXdhcmUpO1xuICAgIHRoaXMuX3JwY0VuZ2luZSA9IHJwY0VuZ2luZTsgLy8ganNvbiBycGMgbm90aWZpY2F0aW9uIGxpc3RlbmVyXG5cbiAgICBqc29uUnBjQ29ubmVjdGlvbi5ldmVudHMub24oXCJub3RpZmljYXRpb25cIiwgcGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGFyYW1zXG4gICAgICB9ID0gcGF5bG9hZDtcblxuICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfYWNjb3VudHNDaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfdW5sb2NrU3RhdGVDaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVW5sb2NrU3RhdGVDaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ3YWxsZXRfY2hhaW5DaGFuZ2VkXCIpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2hhaW5DaGFuZ2VkKHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKEVNSVRURURfTk9USUZJQ0FUSU9OUy5pbmNsdWRlcyhwYXlsb2FkLm1ldGhvZCkpIHtcbiAgICAgICAgLy8gRUlQIDExOTMgc3Vic2NyaXB0aW9ucywgcGVyIGV0aC1qc29uLXJwYy1maWx0ZXJzL3N1YnNjcmlwdGlvbk1hbmFnZXJcbiAgICAgICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBwYXlsb2FkKTsgLy8gZGVwcmVjYXRlZFxuXG4gICAgICAgIHRoaXMuZW1pdChcIm5vdGlmaWNhdGlvblwiLCBwYXJhbXMucmVzdWx0KTtcbiAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCB7XG4gICAgICAgICAgdHlwZTogbWV0aG9kLFxuICAgICAgICAgIGRhdGE6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSBmb3Igb2xkZXIgbm9uIEVJUCAxMTkzIHN1YnNjcmlwdGlvbnNcbiAgICAgIC8vIHRoaXMuZW1pdCgnZGF0YScsIG51bGwsIHBheWxvYWQpXG5cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwdWJsaWNDb25maWdTdG9yZSgpIHtcbiAgICBpZiAoIXRoaXMuX3NlbnRXYXJuaW5ncy5wdWJsaWNDb25maWdTdG9yZSkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3MucHVibGljQ29uZmlnU3RvcmUpO1xuICAgICAgdGhpcy5fc2VudFdhcm5pbmdzLnB1YmxpY0NvbmZpZ1N0b3JlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcHVibGljQ29uZmlnU3RvcmU7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgaW5wYWdlIHByb3ZpZGVyIGlzIGNvbm5lY3RlZCB0byBUb3J1cy5cbiAgICovXG5cblxuICBpc0Nvbm5lY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaXNDb25uZWN0ZWQ7XG4gIH1cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYW4gUlBDIHJlcXVlc3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdpdGggdGhlIGdpdmVuIHBhcmFtcy5cbiAgICogUmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBtZXRob2QgY2FsbCwgb3IgcmVqZWN0cyBvbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3MgLSBUaGUgUlBDIHJlcXVlc3QgYXJndW1lbnRzLlxuICAgKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIFJQQyBtZXRob2QsXG4gICAqIG9yIHJlamVjdHMgaWYgYW4gZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gICAqL1xuXG5cbiAgYXN5bmMgcmVxdWVzdChhcmdzKSB7XG4gICAgaWYgKCFhcmdzIHx8IHR5cGVvZiBhcmdzICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgIHRocm93IGV0aEVycm9ycy5ycGMuaW52YWxpZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuaW52YWxpZFJlcXVlc3RBcmdzKCksXG4gICAgICAgIGRhdGE6IGFyZ3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBhcmdzO1xuXG4gICAgaWYgKHR5cGVvZiBtZXRob2QgIT09IFwic3RyaW5nXCIgfHwgbWV0aG9kLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgZXRoRXJyb3JzLnJwYy5pbnZhbGlkUmVxdWVzdCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VzLmVycm9ycy5pbnZhbGlkUmVxdWVzdE1ldGhvZCgpLFxuICAgICAgICBkYXRhOiBhcmdzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiAodHlwZW9mIHBhcmFtcyAhPT0gXCJvYmplY3RcIiB8fCBwYXJhbXMgPT09IG51bGwpKSB7XG4gICAgICB0aHJvdyBldGhFcnJvcnMucnBjLmludmFsaWRSZXF1ZXN0KHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMuZXJyb3JzLmludmFsaWRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICAgIGRhdGE6IGFyZ3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9ycGNSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBwYXJhbXNcbiAgICAgIH0sIGdldFJwY1Byb21pc2VDYWxsYmFjayhyZXNvbHZlLCByZWplY3QpKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU3VibWl0cyBhbiBSUEMgcmVxdWVzdCBwZXIgdGhlIGdpdmVuIEpTT04tUlBDIHJlcXVlc3Qgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gcGF5bG9hZCAtIFRoZSBSUEMgcmVxdWVzdCBvYmplY3QuXG4gICAqIEBwYXJhbSBjYiAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG5cblxuICBzZW5kQXN5bmMocGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9ycGNSZXF1ZXN0KHBheWxvYWQsIGNhbGxiYWNrKTtcbiAgfVxuICAvKipcbiAgICogV2Ugb3ZlcnJpZGUgdGhlIGZvbGxvd2luZyBldmVudCBtZXRob2RzIHNvIHRoYXQgd2UgY2FuIHdhcm4gY29uc3VtZXJzXG4gICAqIGFib3V0IGRlcHJlY2F0ZWQgZXZlbnRzOlxuICAgKiAgIGFkZExpc3RlbmVyLCBvbiwgb25jZSwgcHJlcGVuZExpc3RlbmVyLCBwcmVwZW5kT25jZUxpc3RlbmVyXG4gICAqL1xuXG5cbiAgYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIG9uY2UoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX3dhcm5PZkRlcHJlY2F0aW9uKGV2ZW50TmFtZSk7XG5cbiAgICByZXR1cm4gc3VwZXIub25jZShldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHByZXBlbmRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fd2Fybk9mRGVwcmVjYXRpb24oZXZlbnROYW1lKTtcblxuICAgIHJldHVybiBzdXBlci5wcmVwZW5kTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICBwcmVwZW5kT25jZUxpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cGVyLnByZXBlbmRPbmNlTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gIH0gLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGhlbHBlci5cbiAgICogUG9wdWxhdGVzIGluaXRpYWwgc3RhdGUgYnkgY2FsbGluZyAnd2FsbGV0X2dldFByb3ZpZGVyU3RhdGUnIGFuZCBlbWl0c1xuICAgKiBuZWNlc3NhcnkgZXZlbnRzLlxuICAgKi9cblxuXG4gIGFzeW5jIF9pbml0aWFsaXplU3RhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYWNjb3VudHMsXG4gICAgICAgIGNoYWluSWQsXG4gICAgICAgIGlzVW5sb2NrZWQsXG4gICAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIndhbGxldF9nZXRQcm92aWRlclN0YXRlXCJcbiAgICAgIH0pOyAvLyBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGNvbm5lY3RlZCwgZm9yIEVJUC0xMTkzIGNvbXBsaWFuY2VcblxuICAgICAgdGhpcy5lbWl0KFwiY29ubmVjdFwiLCB7XG4gICAgICAgIGNoYWluSWRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oYW5kbGVDaGFpbkNoYW5nZWQoe1xuICAgICAgICBjaGFpbklkLFxuICAgICAgICBuZXR3b3JrVmVyc2lvblxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCh7XG4gICAgICAgIGFjY291bnRzLFxuICAgICAgICBpc1VubG9ja2VkXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5faGFuZGxlQWNjb3VudHNDaGFuZ2VkKGFjY291bnRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IEZhaWxlZCB0byBnZXQgaW5pdGlhbCBzdGF0ZS4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBsb2cuaW5mbyhcImluaXRpYWxpemVkIHN0YXRlXCIpO1xuICAgICAgdGhpcy5fc3RhdGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lbWl0KFwiX2luaXRpYWxpemVkXCIpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW50ZXJuYWwgUlBDIG1ldGhvZC4gRm9yd2FyZHMgcmVxdWVzdHMgdG8gYmFja2dyb3VuZCB2aWEgdGhlIFJQQyBlbmdpbmUuXG4gICAqIEFsc28gcmVtYXAgaWRzIGluYm91bmQgYW5kIG91dGJvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcGF5bG9hZCAtIFRoZSBSUEMgcmVxdWVzdCBvYmplY3QuXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjb25zdW1lcidzIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gaXNJbnRlcm5hbCAtIGZhbHNlIC0gV2hldGhlciB0aGUgcmVxdWVzdCBpcyBpbnRlcm5hbC5cbiAgICovXG5cblxuICBfcnBjUmVxdWVzdChwYXlsb2FkLCBjYWxsYmFjaykge1xuICAgIGxldCBpc0ludGVybmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICBsZXQgY2IgPSBjYWxsYmFjaztcbiAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQ7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3BheWxvYWQpKSB7XG4gICAgICBpZiAoIV9wYXlsb2FkLmpzb25ycGMpIHtcbiAgICAgICAgX3BheWxvYWQuanNvbnJwYyA9IFwiMi4wXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChfcGF5bG9hZC5tZXRob2QgPT09IFwiZXRoX2FjY291bnRzXCIgfHwgX3BheWxvYWQubWV0aG9kID09PSBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIikge1xuICAgICAgICAvLyBoYW5kbGUgYWNjb3VudHMgY2hhbmdpbmdcbiAgICAgICAgY2IgPSAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVBY2NvdW50c0NoYW5nZWQocmVzLnJlc3VsdCB8fCBbXSwgX3BheWxvYWQubWV0aG9kID09PSBcImV0aF9hY2NvdW50c1wiLCBpc0ludGVybmFsKTtcblxuICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoX3BheWxvYWQubWV0aG9kID09PSBcIndhbGxldF9nZXRQcm92aWRlclN0YXRlXCIpIHtcbiAgICAgICAgdGhpcy5fcnBjRW5naW5lLmhhbmRsZShwYXlsb2FkLCBjYik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudHJ5UHJlb3BlbkhhbmRsZShfcGF5bG9hZCwgY2IpO1xuICB9XG5cbiAgc2VuZChtZXRob2RPclBheWxvYWQsIGNhbGxiYWNrT3JBcmdzKSB7XG4gICAgaWYgKCF0aGlzLl9zZW50V2FybmluZ3Muc2VuZCkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3Muc2VuZERlcHJlY2F0aW9uKTtcbiAgICAgIHRoaXMuX3NlbnRXYXJuaW5ncy5zZW5kID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1ldGhvZE9yUGF5bG9hZCA9PT0gXCJzdHJpbmdcIiAmJiAoIWNhbGxiYWNrT3JBcmdzIHx8IEFycmF5LmlzQXJyYXkoY2FsbGJhY2tPckFyZ3MpKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLl9ycGNSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kT3JQYXlsb2FkLFxuICAgICAgICAgICAgcGFyYW1zOiBjYWxsYmFja09yQXJnc1xuICAgICAgICAgIH0sIGdldFJwY1Byb21pc2VDYWxsYmFjayhyZXNvbHZlLCByZWplY3QsIGZhbHNlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZE9yUGF5bG9hZCAmJiB0eXBlb2YgbWV0aG9kT3JQYXlsb2FkID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjYWxsYmFja09yQXJncyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnBjUmVxdWVzdChtZXRob2RPclBheWxvYWQsIGNhbGxiYWNrT3JBcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VuZFN5bmMobWV0aG9kT3JQYXlsb2FkKTtcbiAgfVxuICAvKipcbiAgICogREVQUkVDQVRFRC5cbiAgICogSW50ZXJuYWwgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgbWV0aG9kLCB1c2VkIGluIHNlbmQuXG4gICAqL1xuXG5cbiAgX3NlbmRTeW5jKHBheWxvYWQpIHtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgc3dpdGNoIChwYXlsb2FkLm1ldGhvZCkge1xuICAgICAgY2FzZSBcImV0aF9hY2NvdW50c1wiOlxuICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcyA/IFt0aGlzLnNlbGVjdGVkQWRkcmVzc10gOiBbXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJldGhfY29pbmJhc2VcIjpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MgfHwgbnVsbDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJldGhfdW5pbnN0YWxsRmlsdGVyXCI6XG4gICAgICAgIHRoaXMuX3JwY1JlcXVlc3QocGF5bG9hZCwgTk9PUCk7XG5cbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJuZXRfdmVyc2lvblwiOlxuICAgICAgICByZXN1bHQgPSB0aGlzLm5ldHdvcmtWZXJzaW9uIHx8IG51bGw7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuZXJyb3JzLnVuc3VwcG9ydGVkU3luYyhwYXlsb2FkLm1ldGhvZCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogcGF5bG9hZC5pZCxcbiAgICAgIGpzb25ycGM6IHBheWxvYWQuanNvbnJwYyxcbiAgICAgIHJlc3VsdFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHByb3ZpZGVyIGJlY29tZXMgY29ubmVjdGVkLCB1cGRhdGVzIGludGVybmFsIHN0YXRlIGFuZCBlbWl0c1xuICAgKiByZXF1aXJlZCBldmVudHMuIElkZW1wb3RlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBjaGFpbklkIC0gVGhlIElEIG9mIHRoZSBuZXdseSBjb25uZWN0ZWQgY2hhaW4uXG4gICAqIGVtaXRzIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIjY29ubmVjdFxuICAgKi9cblxuXG4gIF9oYW5kbGVDb25uZWN0KGNoYWluSWQpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLmVtaXQoXCJjb25uZWN0XCIsIHtcbiAgICAgICAgY2hhaW5JZFxuICAgICAgfSk7XG4gICAgICBsb2cuZGVidWcobWVzc2FnZXMuaW5mby5jb25uZWN0ZWQoY2hhaW5JZCkpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogV2hlbiB0aGUgcHJvdmlkZXIgYmVjb21lcyBkaXNjb25uZWN0ZWQsIHVwZGF0ZXMgaW50ZXJuYWwgc3RhdGUgYW5kIGVtaXRzXG4gICAqIHJlcXVpcmVkIGV2ZW50cy4gSWRlbXBvdGVudCB3aXRoIHJlc3BlY3QgdG8gdGhlIGlzUmVjb3ZlcmFibGUgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBFcnJvciBjb2RlcyBwZXIgdGhlIENsb3NlRXZlbnQgc3RhdHVzIGNvZGVzIGFzIHJlcXVpcmVkIGJ5IEVJUC0xMTkzOlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2xvc2VFdmVudCNTdGF0dXNfY29kZXNcbiAgICpcbiAgICogQHBhcmFtIGlzUmVjb3ZlcmFibGUgLSBXaGV0aGVyIHRoZSBkaXNjb25uZWN0aW9uIGlzIHJlY292ZXJhYmxlLlxuICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gQSBjdXN0b20gZXJyb3IgbWVzc2FnZS5cbiAgICogZW1pdHMgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciNkaXNjb25uZWN0XG4gICAqL1xuXG5cbiAgX2hhbmRsZURpc2Nvbm5lY3QoaXNSZWNvdmVyYWJsZSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlLmlzQ29ubmVjdGVkIHx8ICF0aGlzLl9zdGF0ZS5pc1Blcm1hbmVudGx5RGlzY29ubmVjdGVkICYmICFpc1JlY292ZXJhYmxlKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgbGV0IGVycm9yO1xuXG4gICAgICBpZiAoaXNSZWNvdmVyYWJsZSkge1xuICAgICAgICBlcnJvciA9IG5ldyBFdGhlcmV1bVJwY0Vycm9yKDEwMTMsIC8vIFRyeSBhZ2FpbiBsYXRlclxuICAgICAgICBlcnJvck1lc3NhZ2UgfHwgbWVzc2FnZXMuZXJyb3JzLmRpc2Nvbm5lY3RlZCgpKTtcbiAgICAgICAgbG9nLmRlYnVnKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yID0gbmV3IEV0aGVyZXVtUnBjRXJyb3IoMTAxMSwgLy8gSW50ZXJuYWwgZXJyb3JcbiAgICAgICAgZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VzLmVycm9ycy5wZXJtYW5lbnRseURpc2Nvbm5lY3RlZCgpKTtcbiAgICAgICAgbG9nLmVycm9yKGVycm9yKTtcbiAgICAgICAgdGhpcy5jaGFpbklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RhdGUuYWNjb3VudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0YXRlLmlzVW5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhdGUuaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdChcImRpc2Nvbm5lY3RcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBsb3N0IHRvIGNyaXRpY2FsIHN0cmVhbXMuXG4gICAqXG4gICAqIGVtaXRzIE1ldGFtYXNrSW5wYWdlUHJvdmlkZXIjZGlzY29ubmVjdFxuICAgKi9cblxuXG4gIF9oYW5kbGVTdHJlYW1EaXNjb25uZWN0KHN0cmVhbU5hbWUsIGVycm9yKSB7XG4gICAgbG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmcoc3RyZWFtTmFtZSwgZXJyb3IsIHRoaXMpO1xuXG4gICAgdGhpcy5faGFuZGxlRGlzY29ubmVjdChmYWxzZSwgZXJyb3IgPyBlcnJvci5tZXNzYWdlIDogdW5kZWZpbmVkKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYWNjb3VudHMgbWF5IGhhdmUgY2hhbmdlZC5cbiAgICovXG5cblxuICBfaGFuZGxlQWNjb3VudHNDaGFuZ2VkKGFjY291bnRzKSB7XG4gICAgbGV0IGlzRXRoQWNjb3VudHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIGxldCBpc0ludGVybmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICAvLyBkZWZlbnNpdmUgcHJvZ3JhbW1pbmdcbiAgICBsZXQgZmluYWxBY2NvdW50cyA9IGFjY291bnRzO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbmFsQWNjb3VudHMpKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgbm9uLWFycmF5IGFjY291bnRzIHBhcmFtZXRlci4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgZmluYWxBY2NvdW50cyk7XG4gICAgICBmaW5hbEFjY291bnRzID0gW107XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhY2NvdW50IG9mIGFjY291bnRzKSB7XG4gICAgICBpZiAodHlwZW9mIGFjY291bnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbG9nLmVycm9yKFwiTWV0YU1hc2s6IFJlY2VpdmVkIG5vbi1zdHJpbmcgYWNjb3VudC4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwgYWNjb3VudHMpO1xuICAgICAgICBmaW5hbEFjY291bnRzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gLy8gZW1pdCBhY2NvdW50c0NoYW5nZWQgaWYgYW55dGhpbmcgYWJvdXQgdGhlIGFjY291bnRzIGFycmF5IGhhcyBjaGFuZ2VkXG5cblxuICAgIGlmICghZGVxdWFsKHRoaXMuX3N0YXRlLmFjY291bnRzLCBmaW5hbEFjY291bnRzKSkge1xuICAgICAgLy8gd2Ugc2hvdWxkIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IGFjY291bnRzIGV2ZW4gYmVmb3JlIGV0aF9hY2NvdW50c1xuICAgICAgLy8gcmV0dXJucywgZXhjZXB0IGluIGNhc2VzIHdoZXJlIGlzSW50ZXJuYWwgaXMgdHJ1ZVxuICAgICAgaWYgKGlzRXRoQWNjb3VudHMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLl9zdGF0ZS5hY2NvdW50cykgJiYgdGhpcy5fc3RhdGUuYWNjb3VudHMubGVuZ3RoID4gMCAmJiAhaXNJbnRlcm5hbCkge1xuICAgICAgICBsb2cuZXJyb3IoJ01ldGFNYXNrOiBcImV0aF9hY2NvdW50c1wiIHVuZXhwZWN0ZWRseSB1cGRhdGVkIGFjY291bnRzLiBQbGVhc2UgcmVwb3J0IHRoaXMgYnVnLicsIGZpbmFsQWNjb3VudHMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZS5hY2NvdW50cyA9IGZpbmFsQWNjb3VudHM7XG4gICAgICB0aGlzLmVtaXQoXCJhY2NvdW50c0NoYW5nZWRcIiwgZmluYWxBY2NvdW50cyk7XG4gICAgfSAvLyBoYW5kbGUgc2VsZWN0ZWRBZGRyZXNzXG5cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkQWRkcmVzcyAhPT0gZmluYWxBY2NvdW50c1swXSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSBmaW5hbEFjY291bnRzWzBdIHx8IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVcG9uIHJlY2VpcHQgb2YgYSBuZXcgY2hhaW5JZCBhbmQgbmV0d29ya1ZlcnNpb24sIGVtaXRzIGNvcnJlc3BvbmRpbmdcbiAgICogZXZlbnRzIGFuZCBzZXRzIHJlbGV2YW50IHB1YmxpYyBzdGF0ZS5cbiAgICogRG9lcyBub3RoaW5nIGlmIG5laXRoZXIgdGhlIGNoYWluSWQgbm9yIHRoZSBuZXR3b3JrVmVyc2lvbiBhcmUgZGlmZmVyZW50XG4gICAqIGZyb20gZXhpc3RpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBlbWl0cyBNZXRhbWFza0lucGFnZVByb3ZpZGVyI2NoYWluQ2hhbmdlZFxuICAgKiBAcGFyYW0gbmV0d29ya0luZm8gLSBBbiBvYmplY3Qgd2l0aCBuZXR3b3JrIGluZm8uXG4gICAqL1xuXG5cbiAgX2hhbmRsZUNoYWluQ2hhbmdlZCgpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZCxcbiAgICAgIG5ldHdvcmtWZXJzaW9uXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAoIWNoYWluSWQgfHwgIW5ldHdvcmtWZXJzaW9uKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgaW52YWxpZCBuZXR3b3JrIHBhcmFtZXRlcnMuIFBsZWFzZSByZXBvcnQgdGhpcyBidWcuXCIsIHtcbiAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgbmV0d29ya1ZlcnNpb25cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXR3b3JrVmVyc2lvbiA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIHRoaXMuX2hhbmRsZURpc2Nvbm5lY3QodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3QoY2hhaW5JZCk7XG5cbiAgICAgIGlmIChjaGFpbklkICE9PSB0aGlzLmNoYWluSWQpIHtcbiAgICAgICAgdGhpcy5jaGFpbklkID0gY2hhaW5JZDtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJjaGFpbkNoYW5nZWRcIiwgdGhpcy5jaGFpbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXBvbiByZWNlaXB0IG9mIGEgbmV3IGlzVW5sb2NrZWQgc3RhdGUsIHNldHMgcmVsZXZhbnQgcHVibGljIHN0YXRlLlxuICAgKiBDYWxscyB0aGUgYWNjb3VudHMgY2hhbmdlZCBoYW5kbGVyIHdpdGggdGhlIHJlY2VpdmVkIGFjY291bnRzLCBvciBhbiBlbXB0eVxuICAgKiBhcnJheS5cbiAgICpcbiAgICogRG9lcyBub3RoaW5nIGlmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBlcXVhbCB0byB0aGUgZXhpc3RpbmcgdmFsdWUuXG4gICAqIFRoZXJlIGFyZSBubyBsb2NrL3VubG9jayBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRzIC0gT3B0aW9ucyBiYWcuXG4gICAqL1xuXG5cbiAgX2hhbmRsZVVubG9ja1N0YXRlQ2hhbmdlZCgpIHtcbiAgICBsZXQge1xuICAgICAgYWNjb3VudHMsXG4gICAgICBpc1VubG9ja2VkXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAodHlwZW9mIGlzVW5sb2NrZWQgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBsb2cuZXJyb3IoXCJNZXRhTWFzazogUmVjZWl2ZWQgaW52YWxpZCBpc1VubG9ja2VkIHBhcmFtZXRlci4gUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5cIiwge1xuICAgICAgICBpc1VubG9ja2VkXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNVbmxvY2tlZCAhPT0gdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNVbmxvY2tlZCA9IGlzVW5sb2NrZWQ7XG5cbiAgICAgIHRoaXMuX2hhbmRsZUFjY291bnRzQ2hhbmdlZChhY2NvdW50cyB8fCBbXSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBXYXJucyBvZiBkZXByZWNhdGlvbiBmb3IgdGhlIGdpdmVuIGV2ZW50LCBpZiBhcHBsaWNhYmxlLlxuICAgKi9cblxuXG4gIF93YXJuT2ZEZXByZWNhdGlvbihldmVudE5hbWUpIHtcbiAgICBpZiAodGhpcy5fc2VudFdhcm5pbmdzLmV2ZW50c1tldmVudE5hbWVdID09PSBmYWxzZSkge1xuICAgICAgbG9nLndhcm4obWVzc2FnZXMud2FybmluZ3MuZXZlbnRzW2V2ZW50TmFtZV0pO1xuICAgICAgdGhpcy5fc2VudFdhcm5pbmdzLmV2ZW50c1tldmVudE5hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuXG5fZGVmaW5lUHJvcGVydHkoVG9ydXNJbnBhZ2VQcm92aWRlciwgXCJfZGVmYXVsdFN0YXRlXCIsIHtcbiAgYWNjb3VudHM6IG51bGwsXG4gIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgaXNVbmxvY2tlZDogZmFsc2UsXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgaXNQZXJtYW5lbnRseURpc2Nvbm5lY3RlZDogZmFsc2UsXG4gIGhhc0VtaXR0ZWRDb25uZWN0aW9uOiBmYWxzZVxufSk7XG5cbmNvbnN0IGRlZmF1bHRzID0gb3B0aW9ucyA9PiAoe1xuICBhbGdvcml0aG1zOiBvcHRpb25zLmFsZ29yaXRobXMgfHwgW1wic2hhMjU2XCJdLFxuICBkZWxpbWl0ZXI6IG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiIFwiLFxuICBmdWxsOiBvcHRpb25zLmZ1bGwgfHwgZmFsc2Vcbn0pOyAvLyBHZW5lcmF0ZSBsaXN0IG9mIGhhc2hlc1xuXG5cbmNvbnN0IGhhc2hlcyA9IChvcHRpb25zLCBkYXRhKSA9PiB7XG4gIGNvbnN0IGludGVybmFsSGFzaGVzID0ge307XG4gIG9wdGlvbnMuYWxnb3JpdGhtcy5mb3JFYWNoKGFsZ29yaXRobSA9PiB7XG4gICAgaW50ZXJuYWxIYXNoZXNbYWxnb3JpdGhtXSA9IGNyZWF0ZUhhc2goYWxnb3JpdGhtKS51cGRhdGUoZGF0YSwgXCJ1dGY4XCIpLmRpZ2VzdChcImJhc2U2NFwiKTtcbiAgfSk7XG4gIHJldHVybiBpbnRlcm5hbEhhc2hlcztcbn07IC8vIEJ1aWxkIGFuIGludGVncml0eSBzdHJpbmdcblxuXG5jb25zdCBpbnRlZ3JpdHkgPSAob3B0aW9ucywgc3JpKSA9PiB7XG4gIGxldCBvdXRwdXQgPSBcIlwiOyAvLyBIYXNoIGxpc3RcblxuICBvdXRwdXQgKz0gT2JqZWN0LmtleXMoc3JpLmhhc2hlcykubWFwKGFsZ29yaXRobSA9PiBcIlwiLmNvbmNhdChhbGdvcml0aG0sIFwiLVwiKS5jb25jYXQoc3JpLmhhc2hlc1thbGdvcml0aG1dKSkuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBtYWluID0gKG9wdGlvbnMsIGRhdGEpID0+IHtcbiAgLy8gRGVmYXVsdHNcbiAgY29uc3QgZmluYWxPcHRpb25zID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGNvbnN0IHNyaSA9IHtcbiAgICBoYXNoZXM6IGhhc2hlcyhmaW5hbE9wdGlvbnMsIGRhdGEpLFxuICAgIGludGVncml0eTogdW5kZWZpbmVkXG4gIH07XG4gIHNyaS5pbnRlZ3JpdHkgPSBpbnRlZ3JpdHkoZmluYWxPcHRpb25zLCBzcmkpO1xuICByZXR1cm4gZmluYWxPcHRpb25zLmZ1bGwgPyBzcmkgOiBzcmkuaW50ZWdyaXR5O1xufTtcblxuY2xhc3MgUG9wdXBIYW5kbGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICB1cmwsXG4gICAgICB0YXJnZXQsXG4gICAgICBmZWF0dXJlc1xuICAgIH0gPSBfcmVmO1xuICAgIHN1cGVyKCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRhcmdldFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZmVhdHVyZXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpbmRvd1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2luZG93VGltZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlDbG9zZWRXaW5kb3dcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0IHx8IFwiX2JsYW5rXCI7XG4gICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVzIHx8IGdldFBvcHVwRmVhdHVyZXMoKTtcbiAgICB0aGlzLndpbmRvdyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLndpbmRvd1RpbWVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaUNsb3NlZFdpbmRvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5fc2V0dXBUaW1lcigpO1xuICB9XG5cbiAgX3NldHVwVGltZXIoKSB7XG4gICAgdGhpcy53aW5kb3dUaW1lciA9IE51bWJlcihzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5kb3cgJiYgdGhpcy53aW5kb3cuY2xvc2VkKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy53aW5kb3dUaW1lcik7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlDbG9zZWRXaW5kb3cpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJjbG9zZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaUNsb3NlZFdpbmRvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndpbmRvdyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMud2luZG93ID09PSB1bmRlZmluZWQpIGNsZWFySW50ZXJ2YWwodGhpcy53aW5kb3dUaW1lcik7XG4gICAgfSwgNTAwKSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHZhciBfdGhpcyR3aW5kb3c7XG5cbiAgICB0aGlzLndpbmRvdyA9IHdpbmRvdy5vcGVuKHRoaXMudXJsLmhyZWYsIHRoaXMudGFyZ2V0LCB0aGlzLmZlYXR1cmVzKTtcbiAgICBpZiAoKF90aGlzJHdpbmRvdyA9IHRoaXMud2luZG93KSAhPT0gbnVsbCAmJiBfdGhpcyR3aW5kb3cgIT09IHZvaWQgMCAmJiBfdGhpcyR3aW5kb3cuZm9jdXMpIHRoaXMud2luZG93LmZvY3VzKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pQ2xvc2VkV2luZG93ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy53aW5kb3cpIHRoaXMud2luZG93LmNsb3NlKCk7XG4gIH1cblxuICByZWRpcmVjdChsb2NhdGlvblJlcGxhY2VPblJlZGlyZWN0KSB7XG4gICAgaWYgKGxvY2F0aW9uUmVwbGFjZU9uUmVkaXJlY3QpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHRoaXMudXJsLmhyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMudXJsLmhyZWY7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGdpdmVuIGltYWdlIFVSTCBleGlzdHNcbiAqIEBwYXJhbSB1cmwgLSB0aGUgdXJsIG9mIHRoZSBpbWFnZVxuICogQHJldHVybnMgLSB3aGV0aGVyIHRoZSBpbWFnZSBleGlzdHNcbiAqL1xuXG5mdW5jdGlvbiBpbWdFeGlzdHModXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHRydWUpO1xuXG4gICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlc29sdmUoZmFsc2UpO1xuXG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBFeHRyYWN0cyBhIG5hbWUgZm9yIHRoZSBzaXRlIGZyb20gdGhlIERPTVxuICovXG5cblxuY29uc3QgZ2V0U2l0ZU5hbWUgPSB3aW5kb3cgPT4ge1xuICBjb25zdCB7XG4gICAgZG9jdW1lbnRcbiAgfSA9IHdpbmRvdztcbiAgY29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkID4gbWV0YVtwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiXScpO1xuXG4gIGlmIChzaXRlTmFtZSkge1xuICAgIHJldHVybiBzaXRlTmFtZS5jb250ZW50O1xuICB9XG5cbiAgY29uc3QgbWV0YVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCA+IG1ldGFbbmFtZT1cInRpdGxlXCJdJyk7XG5cbiAgaWYgKG1ldGFUaXRsZSkge1xuICAgIHJldHVybiBtZXRhVGl0bGUuY29udGVudDtcbiAgfVxuXG4gIGlmIChkb2N1bWVudC50aXRsZSAmJiBkb2N1bWVudC50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnRpdGxlO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbn07XG4vKipcbiAqIEV4dHJhY3RzIGFuIGljb24gZm9yIHRoZSBzaXRlIGZyb20gdGhlIERPTVxuICovXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2l0ZUljb24od2luZG93KSB7XG4gIGNvbnN0IHtcbiAgICBkb2N1bWVudFxuICB9ID0gd2luZG93OyAvLyBVc2UgdGhlIHNpdGUncyBmYXZpY29uIGlmIGl0IGV4aXN0c1xuXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCA+IGxpbmtbcmVsPVwic2hvcnRjdXQgaWNvblwiXScpO1xuXG4gIGlmIChpY29uICYmIChhd2FpdCBpbWdFeGlzdHMoaWNvbi5ocmVmKSkpIHtcbiAgICByZXR1cm4gaWNvbi5ocmVmO1xuICB9IC8vIFNlYXJjaCB0aHJvdWdoIGF2YWlsYWJsZSBpY29ucyBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyXG5cblxuICBpY29uID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoZWFkID4gbGlua1tyZWw9XCJpY29uXCJdJykpLmZpbmQoX2ljb24gPT4gQm9vbGVhbihfaWNvbi5ocmVmKSk7XG5cbiAgaWYgKGljb24gJiYgKGF3YWl0IGltZ0V4aXN0cyhpY29uLmhyZWYpKSkge1xuICAgIHJldHVybiBpY29uLmhyZWY7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogR2V0cyBzaXRlIG1ldGFkYXRhIGFuZCByZXR1cm5zIGl0XG4gKlxuICovXG5cblxuY29uc3QgZ2V0U2l0ZU1ldGFkYXRhID0gYXN5bmMgKCkgPT4gKHtcbiAgbmFtZTogZ2V0U2l0ZU5hbWUod2luZG93KSxcbiAgaWNvbjogYXdhaXQgZ2V0U2l0ZUljb24od2luZG93KVxufSk7XG4vKipcbiAqIFNlbmRzIHNpdGUgbWV0YWRhdGEgb3ZlciBhbiBSUEMgcmVxdWVzdC5cbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRTaXRlTWV0YWRhdGEoZW5naW5lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9tYWluTWV0YWRhdGEgPSBhd2FpdCBnZXRTaXRlTWV0YWRhdGEoKTsgLy8gY2FsbCBlbmdpbmUuaGFuZGxlIGRpcmVjdGx5IHRvIGF2b2lkIG5vcm1hbCBSUEMgcmVxdWVzdCBoYW5kbGluZ1xuXG4gICAgZW5naW5lLmhhbmRsZSh7XG4gICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgaWQ6IGdldFByZW9wZW5JbnN0YW5jZUlkKCksXG4gICAgICBtZXRob2Q6IFwid2FsbGV0X3NlbmREb21haW5NZXRhZGF0YVwiLFxuICAgICAgcGFyYW1zOiBkb21haW5NZXRhZGF0YVxuICAgIH0sIE5PT1ApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZy5lcnJvcih7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlcy5lcnJvcnMuc2VuZFNpdGVNZXRhZGF0YSgpLFxuICAgICAgb3JpZ2luYWxFcnJvcjogZXJyb3JcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJob3N0XCIsIFwiY2hhaW5JZFwiLCBcIm5ldHdvcmtOYW1lXCJdO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuY29uc3QgZGVmYXVsdFZlcmlmaWVycyA9IHtcbiAgW0xPR0lOX1BST1ZJREVSLkdPT0dMRV06IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5GQUNFQk9PS106IHRydWUsXG4gIFtMT0dJTl9QUk9WSURFUi5SRURESVRdOiB0cnVlLFxuICBbTE9HSU5fUFJPVklERVIuVFdJVENIXTogdHJ1ZSxcbiAgW0xPR0lOX1BST1ZJREVSLkRJU0NPUkRdOiB0cnVlXG59O1xuY29uc3QgaWZyYW1lSW50ZWdyaXR5ID0gXCJzaGEzODQtbzAyREp5WElSbFgvWmx6Yk82aTlQbTV3TC9tQSt1WmpUUWN4NDBIdzBVRVo4Slp3VGtXSUoxZ3BmKzRXVWdnOFwiO1xuY29uc3QgZXhwZWN0ZWRDYWNoZUNvbnRyb2xIZWFkZXIgPSBcIm1heC1hZ2U9MzYwMFwiO1xuY29uc3QgVU5TQUZFX01FVEhPRFMgPSBbXCJldGhfc2VuZFRyYW5zYWN0aW9uXCIsIFwiZXRoX3NpZ25UeXBlZERhdGFcIiwgXCJldGhfc2lnblR5cGVkRGF0YV92M1wiLCBcImV0aF9zaWduVHlwZWREYXRhX3Y0XCIsIFwicGVyc29uYWxfc2lnblwiLCBcImV0aF9nZXRFbmNyeXB0aW9uUHVibGljS2V5XCIsIFwiZXRoX2RlY3J5cHRcIl07XG5jb25zdCBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSA9IHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIik7IC8vIHByZWxvYWQgZm9yIGlmcmFtZSBkb2Vzbid0IHdvcmsgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTkzMjY3XG5cbihhc3luYyBmdW5jdGlvbiBwcmVMb2FkSWZyYW1lKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICBjb25zdCB0b3J1c0lmcmFtZUh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBjb25zdCB7XG4gICAgICB0b3J1c1VybFxuICAgIH0gPSBhd2FpdCBnZXRUb3J1c1VybChcInByb2R1Y3Rpb25cIiwge1xuICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgaGFzaDogaWZyYW1lSW50ZWdyaXR5LFxuICAgICAgdmVyc2lvbjogXCJcIlxuICAgIH0pO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5ocmVmID0gXCJcIi5jb25jYXQodG9ydXNVcmwsIFwiL3BvcHVwXCIpO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgdG9ydXNJZnJhbWVIdG1sLnR5cGUgPSBcInRleHQvaHRtbFwiO1xuICAgIHRvcnVzSWZyYW1lSHRtbC5yZWwgPSBcInByZWZldGNoXCI7XG5cbiAgICBpZiAodG9ydXNJZnJhbWVIdG1sLnJlbExpc3QgJiYgdG9ydXNJZnJhbWVIdG1sLnJlbExpc3Quc3VwcG9ydHMpIHtcbiAgICAgIGlmICh0b3J1c0lmcmFtZUh0bWwucmVsTGlzdC5zdXBwb3J0cyhcInByZWZldGNoXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodG9ydXNJZnJhbWVIdG1sKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nLndhcm4oZXJyb3IpO1xuICB9XG59KSgpO1xuXG5jbGFzcyBUb3J1cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCB7XG4gICAgICBidXR0b25Qb3NpdGlvbiA9IEJVVFRPTl9QT1NJVElPTi5CT1RUT01fTEVGVCxcbiAgICAgIG1vZGFsWkluZGV4ID0gOTk5OTksXG4gICAgICBhcGlLZXkgPSBcInRvcnVzLWRlZmF1bHRcIlxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYnV0dG9uUG9zaXRpb25cIiwgQlVUVE9OX1BPU0lUSU9OLkJPVFRPTV9MRUZUKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzVXJsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0lmcmFtZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3R5bGVMaW5rXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0xvZ2dlZEluXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0luaXRpYWxpemVkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c1dpZGdldFZpc2liaWxpdHlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcnVzQWxlcnRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5vZGVEZXRhaWxNYW5hZ2VyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b3J1c0pzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhcGlLZXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1vZGFsWkluZGV4XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGVydFpJbmRleFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9ydXNBbGVydENvbnRhaW5lclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNJZnJhbWVGdWxsU2NyZWVuXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3aGl0ZUxhYmVsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZXF1ZXN0ZWRWZXJpZmllclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY3VycmVudFZlcmlmaWVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbWJlZFRyYW5zbGF0aW9uc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXRoZXJldW1cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3ZpZGVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb21tdW5pY2F0aW9uTXV4XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0xvZ2luQ2FsbGJhY2tcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRhcHBTdG9yYWdlS2V5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXltZW50UHJvdmlkZXJzXCIsIGNvbmZpZ3VyYXRpb24ucGF5bWVudFByb3ZpZGVycyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJsb2dpbkhpbnRcIiwgXCJcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1c2VXYWxsZXRDb25uZWN0XCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLmJ1dHRvblBvc2l0aW9uID0gYnV0dG9uUG9zaXRpb247XG4gICAgdGhpcy50b3J1c1VybCA9IFwiXCI7XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7IC8vIGV0aGVyZXVtLmVuYWJsZSB3b3JraW5nXG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gaW5pdCBkb25lXG5cbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IHRydWU7XG4gICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50VmVyaWZpZXIgPSBcIlwiO1xuICAgIHRoaXMubm9kZURldGFpbE1hbmFnZXIgPSBuZXcgTm9kZURldGFpbE1hbmFnZXIoKTtcbiAgICB0aGlzLnRvcnVzSnMgPSBuZXcgVG9ydXNKcyh7XG4gICAgICBtZXRhZGF0YUhvc3Q6IFwiaHR0cHM6Ly9tZXRhZGF0YS50b3IudXNcIixcbiAgICAgIGFsbG93SG9zdDogXCJodHRwczovL3NpZ25lci50b3IudXMvYXBpL2FsbG93XCJcbiAgICB9KTtcbiAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcbiAgICBUb3J1c0pzLnNldEFQSUtleShhcGlLZXkpO1xuICAgIHNldEFQSUtleShhcGlLZXkpO1xuICAgIHRoaXMubW9kYWxaSW5kZXggPSBtb2RhbFpJbmRleDtcbiAgICB0aGlzLmFsZXJ0WkluZGV4ID0gbW9kYWxaSW5kZXggKyAxMDAwO1xuICAgIHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgdGhpcy5kYXBwU3RvcmFnZUtleSA9IFwiXCI7XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGxldCB7XG4gICAgICBidWlsZEVudiA9IFRPUlVTX0JVSUxEX0VOVi5QUk9EVUNUSU9OLFxuICAgICAgZW5hYmxlTG9nZ2luZyA9IGZhbHNlLFxuICAgICAgLy8gZGVwcmVjYXRlZDogdXNlIGxvZ2luQ29uZmlnIGluc3RlYWRcbiAgICAgIGVuYWJsZWRWZXJpZmllcnMgPSBkZWZhdWx0VmVyaWZpZXJzLFxuICAgICAgbmV0d29yayA9IHtcbiAgICAgICAgaG9zdDogXCJtYWlubmV0XCIsXG4gICAgICAgIGNoYWluSWQ6IG51bGwsXG4gICAgICAgIG5ldHdvcmtOYW1lOiBcIlwiLFxuICAgICAgICBibG9ja0V4cGxvcmVyOiBcIlwiLFxuICAgICAgICB0aWNrZXI6IFwiXCIsXG4gICAgICAgIHRpY2tlck5hbWU6IFwiXCJcbiAgICAgIH0sXG4gICAgICBsb2dpbkNvbmZpZyA9IHt9LFxuICAgICAgc2hvd1RvcnVzQnV0dG9uID0gdHJ1ZSxcbiAgICAgIGludGVncml0eSA9IHtcbiAgICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgICBoYXNoOiBpZnJhbWVJbnRlZ3JpdHksXG4gICAgICAgIHZlcnNpb246IFwiXCJcbiAgICAgIH0sXG4gICAgICB3aGl0ZUxhYmVsLFxuICAgICAgc2tpcFRLZXkgPSBmYWxzZSxcbiAgICAgIHVzZUxvY2FsU3RvcmFnZSA9IGZhbHNlLFxuICAgICAgdXNlV2FsbGV0Q29ubmVjdCA9IGZhbHNlXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkgdGhyb3cgbmV3IEVycm9yKFwiQWxyZWFkeSBpbml0aWFsaXplZFwiKTtcbiAgICBjb25zdCB7XG4gICAgICB0b3J1c1VybCxcbiAgICAgIGxvZ0xldmVsXG4gICAgfSA9IGF3YWl0IGdldFRvcnVzVXJsKGJ1aWxkRW52LCBpbnRlZ3JpdHkpO1xuICAgIGxvZy5pbmZvKHRvcnVzVXJsLCBcInVybCBsb2FkZWRcIik7XG4gICAgdGhpcy50b3J1c1VybCA9IHRvcnVzVXJsO1xuICAgIHRoaXMud2hpdGVMYWJlbCA9IHdoaXRlTGFiZWw7XG4gICAgdGhpcy51c2VXYWxsZXRDb25uZWN0ID0gdXNlV2FsbGV0Q29ubmVjdDtcbiAgICBsb2cuc2V0RGVmYXVsdExldmVsKGxvZ0xldmVsKTtcbiAgICBpZiAoZW5hYmxlTG9nZ2luZykgbG9nLmVuYWJsZUFsbCgpO2Vsc2UgbG9nLmRpc2FibGVBbGwoKTtcbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IHNob3dUb3J1c0J1dHRvbjtcbiAgICBsZXQgZGFwcFN0b3JhZ2VLZXkgPSBcIlwiO1xuXG4gICAgaWYgKGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlICYmIHVzZUxvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5ID0gXCJcIi5jb25jYXQoY29uZmlndXJhdGlvbi5sb2NhbFN0b3JhZ2VLZXlQcmVmaXgpLmNvbmNhdCh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgY29uc3Qgc3RvcmVkS2V5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUtleSk7XG4gICAgICBpZiAoc3RvcmVkS2V5KSBkYXBwU3RvcmFnZUtleSA9IHN0b3JlZEtleTtlbHNlIHtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkS2V5ID0gXCJ0b3J1cy1hcHAtXCIuY29uY2F0KGdldFByZW9wZW5JbnN0YW5jZUlkKCkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBnZW5lcmF0ZWRLZXkpO1xuICAgICAgICBkYXBwU3RvcmFnZUtleSA9IGdlbmVyYXRlZEtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRhcHBTdG9yYWdlS2V5ID0gZGFwcFN0b3JhZ2VLZXk7XG4gICAgY29uc3QgdG9ydXNJZnJhbWVVcmwgPSBuZXcgVVJMKHRvcnVzVXJsKTtcbiAgICBpZiAodG9ydXNJZnJhbWVVcmwucGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpKSB0b3J1c0lmcmFtZVVybC5wYXRobmFtZSArPSBcInBvcHVwXCI7ZWxzZSB0b3J1c0lmcmFtZVVybC5wYXRobmFtZSArPSBcIi9wb3B1cFwiO1xuXG4gICAgaWYgKGRhcHBTdG9yYWdlS2V5KSB7XG4gICAgICB0b3J1c0lmcmFtZVVybC5oYXNoID0gXCIjZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KGRhcHBTdG9yYWdlS2V5KTtcbiAgICB9IC8vIElmcmFtZSBjb2RlXG5cblxuICAgIHRoaXMudG9ydXNJZnJhbWUgPSBodG1sVG9FbGVtZW50KFwiPGlmcmFtZVxcbiAgICAgICAgaWQ9XFxcInRvcnVzSWZyYW1lXFxcIlxcbiAgICAgICAgYWxsb3c9XCIuY29uY2F0KHVzZVdhbGxldENvbm5lY3QgPyBcImNhbWVyYVwiIDogXCJcIiwgXCJcXG4gICAgICAgIGNsYXNzPVxcXCJ0b3J1c0lmcmFtZVxcXCJcXG4gICAgICAgIHNyYz1cXFwiXCIpLmNvbmNhdCh0b3J1c0lmcmFtZVVybC5ocmVmLCBcIlxcXCJcXG4gICAgICAgIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lOyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgcmlnaHQ6IDA7IHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDA7IHotaW5kZXg6IFwiKS5jb25jYXQodGhpcy5tb2RhbFpJbmRleCwgXCJcXFwiXFxuICAgICAgPjwvaWZyYW1lPlwiKSk7XG4gICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyID0gaHRtbFRvRWxlbWVudCgnPGRpdiBpZD1cInRvcnVzQWxlcnRDb250YWluZXJcIj48L2Rpdj4nKTtcbiAgICB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcInotaW5kZXhcIiwgdGhpcy5hbGVydFpJbmRleC50b1N0cmluZygpKTtcbiAgICBjb25zdCBsaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIi5jb25jYXQodG9ydXNVcmwsIFwiL2Nzcy93aWRnZXQuY3NzXCIpKTtcbiAgICB0aGlzLnN0eWxlTGluayA9IGxpbms7XG4gICAgY29uc3Qge1xuICAgICAgZGVmYXVsdExhbmd1YWdlID0gZ2V0VXNlckxhbmd1YWdlKCksXG4gICAgICBjdXN0b21UcmFuc2xhdGlvbnMgPSB7fVxuICAgIH0gPSB0aGlzLndoaXRlTGFiZWwgfHwge307XG4gICAgY29uc3QgbWVyZ2VkVHJhbnNsYXRpb25zID0gZGVlcG1lcmdlKGNvbmZpZ3VyYXRpb24udHJhbnNsYXRpb25zLCBjdXN0b21UcmFuc2xhdGlvbnMpO1xuICAgIGNvbnN0IGxhbmd1YWdlVHJhbnNsYXRpb25zID0gbWVyZ2VkVHJhbnNsYXRpb25zW2RlZmF1bHRMYW5ndWFnZV0gfHwgY29uZmlndXJhdGlvbi50cmFuc2xhdGlvbnNbZ2V0VXNlckxhbmd1YWdlKCldO1xuICAgIHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMgPSBsYW5ndWFnZVRyYW5zbGF0aW9ucy5lbWJlZDtcblxuICAgIGNvbnN0IGhhbmRsZVNldHVwID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZG9jdW1lbnRSZWFkeSgpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy50b3J1c0lmcmFtZS5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgLy8gb25seSBkbyB0aGlzIGlmIGlmcmFtZSBpcyBub3QgZnVsbCBzY3JlZW5cbiAgICAgICAgICB0aGlzLl9zZXR1cFdlYjMoKTtcblxuICAgICAgICAgIGNvbnN0IGluaXRTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwiaW5pdF9zdHJlYW1cIik7XG4gICAgICAgICAgaW5pdFN0cmVhbS5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgfSA9IGNodW5rO1xuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJpbml0X2NvbXBsZXRlXCIgJiYgZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIC8vIHJlc29sdmUgcHJvbWlzZVxuICAgICAgICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUodGhpcy5pc0lmcmFtZUZ1bGxTY3JlZW4pO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGluaXRTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgICAgbmFtZTogXCJpbml0X3N0cmVhbVwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlbmFibGVkVmVyaWZpZXJzLFxuICAgICAgICAgICAgICBsb2dpbkNvbmZpZyxcbiAgICAgICAgICAgICAgd2hpdGVMYWJlbDogdGhpcy53aGl0ZUxhYmVsLFxuICAgICAgICAgICAgICBidXR0b25Qb3NpdGlvbjogdGhpcy5idXR0b25Qb3NpdGlvbixcbiAgICAgICAgICAgICAgdG9ydXNXaWRnZXRWaXNpYmlsaXR5OiB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSxcbiAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgICAgICAgICAgc2tpcFRLZXksXG4gICAgICAgICAgICAgIG5ldHdvcmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlTGluayk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudG9ydXNJZnJhbWUpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmIChidWlsZEVudiA9PT0gXCJwcm9kdWN0aW9uXCIgJiYgaW50ZWdyaXR5LmNoZWNrKSB7XG4gICAgICAvLyBoYWNreSBzb2x1dGlvbiB0byBjaGVjayBmb3IgaWZyYW1lIGludGVncml0eVxuICAgICAgY29uc3QgZmV0Y2hVcmwgPSBcIlwiLmNvbmNhdCh0b3J1c1VybCwgXCIvcG9wdXBcIik7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goZmV0Y2hVcmwsIHtcbiAgICAgICAgY2FjaGU6IFwicmVsb2FkXCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcC5oZWFkZXJzLmdldChcIkNhY2hlLUNvbnRyb2xcIikgIT09IGV4cGVjdGVkQ2FjaGVDb250cm9sSGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgQ2FjaGUtQ29udHJvbCBoZWFkZXJzLCBnb3QgXCIuY29uY2F0KHJlc3AuaGVhZGVycy5nZXQoXCJDYWNoZS1Db250cm9sXCIpKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzcC50ZXh0KCk7XG4gICAgICBjb25zdCBjYWxjdWxhdGVkSW50ZWdyaXR5ID0gbWFpbih7XG4gICAgICAgIGFsZ29yaXRobXM6IFtcInNoYTM4NFwiXVxuICAgICAgfSwgcmVzcG9uc2UpO1xuICAgICAgbG9nLmluZm8oY2FsY3VsYXRlZEludGVncml0eSwgXCJpbnRlZ3JpdHlcIik7XG5cbiAgICAgIGlmIChjYWxjdWxhdGVkSW50ZWdyaXR5ID09PSBpbnRlZ3JpdHkuaGFzaCkge1xuICAgICAgICBhd2FpdCBoYW5kbGVTZXR1cCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckluaXQoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW50ZWdyaXR5IGNoZWNrIGZhaWxlZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgaGFuZGxlU2V0dXAoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgbGV0IHtcbiAgICAgIHZlcmlmaWVyID0gXCJcIixcbiAgICAgIGxvZ2luX2hpbnQ6IGxvZ2luSGludCA9IFwiXCJcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbCBpbml0KCkgZmlyc3RcIik7XG4gICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IHZlcmlmaWVyO1xuICAgIHRoaXMubG9naW5IaW50ID0gbG9naW5IaW50O1xuICAgIHJldHVybiB0aGlzLmV0aGVyZXVtLmVuYWJsZSgpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciBoYXMgbm90IGxvZ2dlZCBpbiB5ZXRcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvZ091dFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJsb2dvdXRcIik7XG4gICAgICBsb2dPdXRTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcImxvZ091dFwiXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHN0YXR1c1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJzdGF0dXNcIik7XG5cbiAgICAgIGNvbnN0IHN0YXR1c1N0cmVhbUhhbmRsZXIgPSBzdGF0dXMgPT4ge1xuICAgICAgICBpZiAoIXN0YXR1cy5sb2dnZWRJbikge1xuICAgICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY3VycmVudFZlcmlmaWVyID0gXCJcIjtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RlZFZlcmlmaWVyID0gXCJcIjtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiU29tZSBFcnJvciBPY2N1cmVkXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZVN0cmVhbShzdGF0dXNTdHJlYW0sIFwiZGF0YVwiLCBzdGF0dXNTdHJlYW1IYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNsZWFuVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgYXdhaXQgdGhpcy5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFySW5pdCgpO1xuICB9XG5cbiAgY2xlYXJJbml0KCkge1xuICAgIGZ1bmN0aW9uIGlzRWxlbWVudChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KHRoaXMuc3R5bGVMaW5rKSAmJiB3aW5kb3cuZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnN0eWxlTGluaykpIHtcbiAgICAgIHRoaXMuc3R5bGVMaW5rLnJlbW92ZSgpO1xuICAgICAgdGhpcy5zdHlsZUxpbmsgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudCh0aGlzLnRvcnVzSWZyYW1lKSAmJiB3aW5kb3cuZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnRvcnVzSWZyYW1lKSkge1xuICAgICAgdGhpcy50b3J1c0lmcmFtZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMudG9ydXNJZnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudCh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIpICYmIHdpbmRvdy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMudG9ydXNBbGVydENvbnRhaW5lcikpIHtcbiAgICAgIHRoaXMudG9ydXNBbGVydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGhpZGVUb3J1c0J1dHRvbigpIHtcbiAgICB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXMoZmFsc2UpO1xuXG4gICAgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuICB9XG5cbiAgc2hvd1RvcnVzQnV0dG9uKCkge1xuICAgIHRoaXMudG9ydXNXaWRnZXRWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NlbmRXaWRnZXRWaXNpYmlsaXR5U3RhdHVzKHRydWUpO1xuXG4gICAgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuICB9XG5cbiAgc2V0UHJvdmlkZXIoKSB7XG4gICAgbGV0IF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgbGV0IHtcbiAgICAgIGhvc3QgPSBcIm1haW5uZXRcIixcbiAgICAgIGNoYWluSWQgPSBudWxsLFxuICAgICAgbmV0d29ya05hbWUgPSBcIlwiXG4gICAgfSA9IF9yZWYsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckNoYW5nZVN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJwcm92aWRlcl9jaGFuZ2VcIik7XG5cbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgc3VjY2Vzc1xuICAgICAgICB9ID0gY2h1bmsuZGF0YTtcbiAgICAgICAgbG9nLmluZm8oY2h1bmspO1xuXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcInNvbWUgZXJyb3Igb2NjdXJlZFwiKSk7XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVTdHJlYW0ocHJvdmlkZXJDaGFuZ2VTdHJlYW0sIFwiZGF0YVwiLCBoYW5kbGVyKTtcbiAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkLCB7XG4gICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX1BST1ZJREVSX0NIQU5HRV9XSU5ET1dcbiAgICAgIH0pO1xuXG4gICAgICBwcm92aWRlckNoYW5nZVN0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwic2hvd19wcm92aWRlcl9jaGFuZ2VcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG5ldHdvcms6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgaG9zdCxcbiAgICAgICAgICAgIGNoYWluSWQsXG4gICAgICAgICAgICBuZXR3b3JrTmFtZVxuICAgICAgICAgIH0sIHJlc3QpLFxuICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkLFxuICAgICAgICAgIG92ZXJyaWRlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dXYWxsZXQocGF0aCkge1xuICAgIGxldCBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGNvbnN0IHNob3dXYWxsZXRTdHJlYW0gPSB0aGlzLmNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwic2hvd193YWxsZXRcIik7XG4gICAgY29uc3QgZmluYWxQYXRoID0gcGF0aCA/IFwiL1wiLmNvbmNhdChwYXRoKSA6IFwiXCI7XG4gICAgc2hvd1dhbGxldFN0cmVhbS53cml0ZSh7XG4gICAgICBuYW1lOiBcInNob3dfd2FsbGV0XCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBhdGg6IGZpbmFsUGF0aFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2hvd1dhbGxldEhhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJzaG93X3dhbGxldF9pbnN0YW5jZVwiKSB7XG4gICAgICAgIC8vIExldCB0aGUgZXJyb3IgcHJvcG9nYXRlIHVwIChoZW5jZSwgbm8gdHJ5IGNhdGNoKVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaW5zdGFuY2VJZFxuICAgICAgICB9ID0gY2h1bmsuZGF0YTtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKFwiXCIuY29uY2F0KHRoaXMudG9ydXNVcmwsIFwiL3dhbGxldFwiKS5jb25jYXQoZmluYWxQYXRoKSk7IC8vIFVzaW5nIFVSTCBjb25zdHJ1Y3RvciB0byBwcmV2ZW50IGpzIGluamVjdGlvbiBhbmQgYWxsb3cgcGFyYW1ldGVyIHZhbGlkYXRpb24uIVxuXG4gICAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJpbnRlZ3JpdHlcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiaW5zdGFuY2VJZFwiLCBpbnN0YW5jZUlkKTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoeCwgcGFyYW1zW3hdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGFwcFN0b3JhZ2VLZXkpIHtcbiAgICAgICAgICBmaW5hbFVybC5oYXNoID0gXCIjZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KHRoaXMuZGFwcFN0b3JhZ2VLZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FsbGV0V2luZG93ID0gbmV3IFBvcHVwSGFuZGxlcih7XG4gICAgICAgICAgdXJsOiBmaW5hbFVybCxcbiAgICAgICAgICBmZWF0dXJlczogRkVBVFVSRVNfREVGQVVMVF9XQUxMRVRfV0lORE9XXG4gICAgICAgIH0pO1xuICAgICAgICB3YWxsZXRXaW5kb3cub3BlbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBoYW5kbGVTdHJlYW0oc2hvd1dhbGxldFN0cmVhbSwgXCJkYXRhXCIsIHNob3dXYWxsZXRIYW5kbGVyKTtcbiAgfVxuXG4gIGFzeW5jIGdldFB1YmxpY0FkZHJlc3MoX3JlZjIpIHtcbiAgICBsZXQge1xuICAgICAgdmVyaWZpZXIsXG4gICAgICB2ZXJpZmllcklkLFxuICAgICAgaXNFeHRlbmRlZCA9IGZhbHNlXG4gICAgfSA9IF9yZWYyO1xuICAgIGlmICghY29uZmlndXJhdGlvbi5zdXBwb3J0ZWRWZXJpZmllckxpc3QuaW5jbHVkZXModmVyaWZpZXIpIHx8ICFXQUxMRVRfT1BFTkxPR0lOX1ZFUklGSUVSX01BUFt2ZXJpZmllcl0pIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcmlmaWVyXCIpO1xuICAgIGNvbnN0IG5vZGVEZXRhaWxzID0gYXdhaXQgdGhpcy5ub2RlRGV0YWlsTWFuYWdlci5nZXROb2RlRGV0YWlscyh7XG4gICAgICB2ZXJpZmllcixcbiAgICAgIHZlcmlmaWVySWRcbiAgICB9KTtcbiAgICBjb25zdCBlbmRwb2ludHMgPSBub2RlRGV0YWlscy50b3J1c05vZGVFbmRwb2ludHM7XG4gICAgY29uc3QgdG9ydXNOb2RlUHVicyA9IG5vZGVEZXRhaWxzLnRvcnVzTm9kZVB1YjtcbiAgICBjb25zdCB3YWxsZXRWZXJpZmllciA9IHZlcmlmaWVyO1xuICAgIGNvbnN0IG9wZW5sb2dpblZlcmlmaWVyID0gV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVBbdmVyaWZpZXJdO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nVjFVc2VyID0gYXdhaXQgdGhpcy50b3J1c0pzLmdldFVzZXJUeXBlQW5kQWRkcmVzcyhlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIHtcbiAgICAgICAgdmVyaWZpZXI6IHdhbGxldFZlcmlmaWVyLFxuICAgICAgICB2ZXJpZmllcklkXG4gICAgICB9KTtcblxuICAgICAgaWYgKGV4aXN0aW5nVjFVc2VyLnR5cGVPZlVzZXIgPT09IFwidjFcIikge1xuICAgICAgICBpZiAoIWlzRXh0ZW5kZWQpIHJldHVybiBleGlzdGluZ1YxVXNlci5hZGRyZXNzO1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdWMVVzZXI7XG4gICAgICB9IC8vIHdlIGRvbid0IHN1cHBvcnQgdjIgdXNlcnMgd2l0aCB2MSB2ZXJpZmllcnMgc28gZ2V0IG9yIGFzc2lnbiB0aGUga2V5IGZvciB2MiB1c2VyIG9uIHYyIGB2ZXJpZmllcmBcblxuXG4gICAgICBjb25zdCB2MlVzZXIgPSBhd2FpdCB0aGlzLnRvcnVzSnMuZ2V0VXNlclR5cGVBbmRBZGRyZXNzKGVuZHBvaW50cywgdG9ydXNOb2RlUHVicywge1xuICAgICAgICB2ZXJpZmllcjogb3BlbmxvZ2luVmVyaWZpZXIsXG4gICAgICAgIHZlcmlmaWVySWRcbiAgICAgIH0sIHRydWUpO1xuICAgICAgaWYgKCFpc0V4dGVuZGVkKSByZXR1cm4gdjJVc2VyLmFkZHJlc3M7XG4gICAgICByZXR1cm4gdjJVc2VyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgIT09IG51bGwgJiYgZXJyb3IgIT09IHZvaWQgMCAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiVmVyaWZpZXIgKyBWZXJpZmllcklEIGhhcyBub3QgeWV0IGJlZW4gYXNzaWduZWRcIikpIHtcbiAgICAgICAgLy8gaWYgdXNlciBkb2Vzbid0IGhhdmUga2V5IHRoZW4gYXNzaWduIGl0IHdpdGggdjIgdmVyaWZpZXJcbiAgICAgICAgY29uc3QgbmV3VjJVc2VyID0gYXdhaXQgdGhpcy50b3J1c0pzLmdldFVzZXJUeXBlQW5kQWRkcmVzcyhlbmRwb2ludHMsIHRvcnVzTm9kZVB1YnMsIHtcbiAgICAgICAgICB2ZXJpZmllcjogb3BlbmxvZ2luVmVyaWZpZXIsXG4gICAgICAgICAgdmVyaWZpZXJJZFxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgaWYgKCFpc0V4dGVuZGVkKSByZXR1cm4gbmV3VjJVc2VyLmFkZHJlc3M7XG4gICAgICAgIHJldHVybiBuZXdWMlVzZXI7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGdldFVzZXJJbmZvKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICBjb25zdCB1c2VySW5mb0FjY2Vzc1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ1c2VyX2luZm9fYWNjZXNzXCIpO1xuICAgICAgICB1c2VySW5mb0FjY2Vzc1N0cmVhbS53cml0ZSh7XG4gICAgICAgICAgbmFtZTogXCJ1c2VyX2luZm9fYWNjZXNzX3JlcXVlc3RcIlxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1c2VySW5mb0FjY2Vzc0hhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYXBwcm92ZWQsXG4gICAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICAgIHJlamVjdGVkLFxuICAgICAgICAgICAgICBuZXdSZXF1ZXN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSA9IGNodW5rO1xuXG4gICAgICAgICAgaWYgKG5hbWUgPT09IFwidXNlcl9pbmZvX2FjY2Vzc19yZXNwb25zZVwiKSB7XG4gICAgICAgICAgICBpZiAoYXBwcm92ZWQpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlVzZXIgcmVqZWN0ZWQgdGhlIHJlcXVlc3RcIikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInVzZXJfaW5mb1wiKTtcblxuICAgICAgICAgICAgICBjb25zdCB1c2VySW5mb0hhbmRsZXIgPSBoYW5kbGVyQ2h1bmsgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyQ2h1bmsubmFtZSA9PT0gXCJ1c2VyX2luZm9fcmVzcG9uc2VcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJDaHVuay5kYXRhLmFwcHJvdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaGFuZGxlckNodW5rLmRhdGEucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdFwiKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGhhbmRsZVN0cmVhbSh1c2VySW5mb1N0cmVhbSwgXCJkYXRhXCIsIHVzZXJJbmZvSGFuZGxlcik7XG4gICAgICAgICAgICAgIGNvbnN0IHByZW9wZW5JbnN0YW5jZUlkID0gZ2V0UHJlb3Blbkluc3RhbmNlSWQoKTtcblxuICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX1BST1ZJREVSX0NIQU5HRV9XSU5ET1dcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdXNlckluZm9TdHJlYW0ud3JpdGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwidXNlcl9pbmZvX3JlcXVlc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVTdHJlYW0odXNlckluZm9BY2Nlc3NTdHJlYW0sIFwiZGF0YVwiLCB1c2VySW5mb0FjY2Vzc0hhbmRsZXIpO1xuICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIGhhcyBub3QgbG9nZ2VkIGluIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWF0ZVRvcHVwKHByb3ZpZGVyLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgIGlzVmFsaWRcbiAgICAgICAgfSA9IHZhbGlkYXRlUGF5bWVudFByb3ZpZGVyKHByb3ZpZGVyLCBwYXJhbXMpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvcHVwU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInRvcHVwXCIpO1xuXG4gICAgICAgIGNvbnN0IHRvcHVwSGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJ0b3B1cF9yZXNwb25zZVwiKSB7XG4gICAgICAgICAgICBpZiAoY2h1bmsuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoY2h1bmsuZGF0YS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoY2h1bmsuZGF0YS5lcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVTdHJlYW0odG9wdXBTdHJlYW0sIFwiZGF0YVwiLCB0b3B1cEhhbmRsZXIpO1xuICAgICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkKTtcblxuICAgICAgICB0b3B1cFN0cmVhbS53cml0ZSh7XG4gICAgICAgICAgbmFtZTogXCJ0b3B1cF9yZXF1ZXN0XCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVqZWN0KG5ldyBFcnJvcihcIlRvcnVzIGlzIG5vdCBpbml0aWFsaXplZCB5ZXRcIikpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW5XaXRoUHJpdmF0ZUtleShsb2dpblBhcmFtcykge1xuICAgIGNvbnN0IHtcbiAgICAgIHByaXZhdGVLZXksXG4gICAgICB1c2VySW5mb1xuICAgIH0gPSBsb2dpblBhcmFtcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICBpZiAoQnVmZmVyLmZyb20ocHJpdmF0ZUtleSwgXCJoZXhcIikubGVuZ3RoICE9PSAzMikge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIHByaXZhdGUga2V5LCBQbGVhc2UgcHJvdmlkZSBhIDMyIGJ5dGUgdmFsaWQgc2VjcDI1azEgcHJpdmF0ZSBrZXlcIikpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvZ2luUHJpdktleVN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJsb2dpbl93aXRoX3ByaXZhdGVfa2V5XCIpO1xuXG4gICAgICAgIGNvbnN0IGxvZ2luSGFuZGxlciA9IGNodW5rID0+IHtcbiAgICAgICAgICBpZiAoY2h1bmsubmFtZSA9PT0gXCJsb2dpbl93aXRoX3ByaXZhdGVfa2V5X3Jlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmIChjaHVuay5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaHVuay5kYXRhLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihjaHVuay5kYXRhLmVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbShsb2dpblByaXZLZXlTdHJlYW0sIFwiZGF0YVwiLCBsb2dpbkhhbmRsZXIpO1xuICAgICAgICBsb2dpblByaXZLZXlTdHJlYW0ud3JpdGUoe1xuICAgICAgICAgIG5hbWU6IFwibG9naW5fd2l0aF9wcml2YXRlX2tleV9yZXF1ZXN0XCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcHJpdmF0ZUtleSxcbiAgICAgICAgICAgIHVzZXJJbmZvXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZWplY3QobmV3IEVycm9yKFwiVG9ydXMgaXMgbm90IGluaXRpYWxpemVkIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzaG93V2FsbGV0Q29ubmVjdFNjYW5uZXIoKSB7XG4gICAgaWYgKCF0aGlzLnVzZVdhbGxldENvbm5lY3QpIHRocm93IG5ldyBFcnJvcihcIlNldCBgdXNlV2FsbGV0Q29ubmVjdGAgYXMgdHJ1ZSBpbiBpbml0IGZ1bmN0aW9uIG9wdGlvbnMgdG8gdXNlIHdhbGxldCBjb25uZWN0IHNjYW5uZXJcIik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3YWxsZXRfY29ubmVjdF9zdHJlYW1cIik7XG5cbiAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEhhbmRsZXIgPSBjaHVuayA9PiB7XG4gICAgICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwid2FsbGV0X2Nvbm5lY3Rfc3RyZWFtX3Jlc1wiKSB7XG4gICAgICAgICAgICBpZiAoY2h1bmsuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoY2h1bmsuZGF0YS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoY2h1bmsuZGF0YS5lcnJvcikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZVN0cmVhbSh3YWxsZXRDb25uZWN0U3RyZWFtLCBcImRhdGFcIiwgd2FsbGV0Q29ubmVjdEhhbmRsZXIpO1xuICAgICAgICB3YWxsZXRDb25uZWN0U3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBuYW1lOiBcIndhbGxldF9jb25uZWN0X3N0cmVhbV9yZXFcIlxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9kaXNwbGF5SWZyYW1lKHRydWUpO1xuICAgICAgfSBlbHNlIHJlamVjdChuZXcgRXJyb3IoXCJVc2VyIGhhcyBub3QgbG9nZ2VkIGluIHlldFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkKSB7XG4gICAgbGV0IHtcbiAgICAgIHVybCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGZlYXR1cmVzXG4gICAgfSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBpZiAocHJlb3Blbkluc3RhbmNlSWQpIHtcbiAgICAgIGNvbnN0IHdpbmRvd1N0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJ3aW5kb3dcIik7XG4gICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsIHx8IFwiXCIuY29uY2F0KHRoaXMudG9ydXNVcmwsIFwiL3JlZGlyZWN0P3ByZW9wZW5JbnN0YW5jZUlkPVwiKS5jb25jYXQocHJlb3Blbkluc3RhbmNlSWQpKTtcblxuICAgICAgaWYgKHRoaXMuZGFwcFN0b3JhZ2VLZXkpIHtcbiAgICAgICAgLy8gSWYgbXVsdGlwbGUgaW5zdGFuY2VzLCBpdCByZXR1cm5zIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKGZpbmFsVXJsLmhhc2gpIGZpbmFsVXJsLmhhc2ggKz0gXCImZGFwcFN0b3JhZ2VLZXk9XCIuY29uY2F0KHRoaXMuZGFwcFN0b3JhZ2VLZXkpO2Vsc2UgZmluYWxVcmwuaGFzaCA9IFwiI2RhcHBTdG9yYWdlS2V5PVwiLmNvbmNhdCh0aGlzLmRhcHBTdG9yYWdlS2V5KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFuZGxlZFdpbmRvdyA9IG5ldyBQb3B1cEhhbmRsZXIoe1xuICAgICAgICB1cmw6IGZpbmFsVXJsLFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIGZlYXR1cmVzXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZWRXaW5kb3cub3BlbigpO1xuXG4gICAgICBpZiAoIWhhbmRsZWRXaW5kb3cud2luZG93KSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVBvcHVwQmxvY2tBbGVydChwcmVvcGVuSW5zdGFuY2VJZCwgZmluYWxVcmwuaHJlZik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3dTdHJlYW0ud3JpdGUoe1xuICAgICAgICBuYW1lOiBcIm9wZW5lZF93aW5kb3dcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHByZW9wZW5JbnN0YW5jZUlkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjbG9zZUhhbmRsZXIgPSBfcmVmMyA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgcHJlb3Blbkluc3RhbmNlSWQ6IHJlY2VpdmVkSWQsXG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgfSA9IF9yZWYzO1xuXG4gICAgICAgIGlmIChyZWNlaXZlZElkID09PSBwcmVvcGVuSW5zdGFuY2VJZCAmJiBjbG9zZSkge1xuICAgICAgICAgIGhhbmRsZWRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICB3aW5kb3dTdHJlYW0ucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsIGNsb3NlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHdpbmRvd1N0cmVhbS5vbihcImRhdGFcIiwgY2xvc2VIYW5kbGVyKTtcbiAgICAgIGhhbmRsZWRXaW5kb3cub25jZShcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgd2luZG93U3RyZWFtLndyaXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNsb3NlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvd1N0cmVhbS5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgY2xvc2VIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFbWJlZFdoaXRlTGFiZWwoZWxlbWVudCkge1xuICAgIC8vIFNldCB3aGl0ZWxhYmVsXG4gICAgY29uc3Qge1xuICAgICAgdGhlbWVcbiAgICB9ID0gdGhpcy53aGl0ZUxhYmVsIHx8IHt9O1xuXG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlzRGFyayA9IGZhbHNlLFxuICAgICAgICBjb2xvcnMgPSB7fVxuICAgICAgfSA9IHRoZW1lO1xuICAgICAgaWYgKGlzRGFyaykgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9ydXMtZGFya1wiKTtcbiAgICAgIGlmIChjb2xvcnMudG9ydXNCcmFuZDEpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRvcnVzLWJyYW5kLTFcIiwgY29sb3JzLnRvcnVzQnJhbmQxKTtcbiAgICAgIGlmIChjb2xvcnMudG9ydXNHcmF5MikgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdG9ydXMtZ3JheS0yXCIsIGNvbG9ycy50b3J1c0dyYXkyKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0TG9nb1VybCgpIHtcbiAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbCwgX3RoaXMkd2hpdGVMYWJlbCR0aGVtO1xuXG4gICAgbGV0IGxvZ29VcmwgPSBcIlwiLmNvbmNhdCh0aGlzLnRvcnVzVXJsLCBcIi9pbWFnZXMvdG9ydXNfaWNvbi1ibHVlLnN2Z1wiKTtcblxuICAgIGlmICgoX3RoaXMkd2hpdGVMYWJlbCA9IHRoaXMud2hpdGVMYWJlbCkgIT09IG51bGwgJiYgX3RoaXMkd2hpdGVMYWJlbCAhPT0gdm9pZCAwICYmIChfdGhpcyR3aGl0ZUxhYmVsJHRoZW0gPSBfdGhpcyR3aGl0ZUxhYmVsLnRoZW1lKSAhPT0gbnVsbCAmJiBfdGhpcyR3aGl0ZUxhYmVsJHRoZW0gIT09IHZvaWQgMCAmJiBfdGhpcyR3aGl0ZUxhYmVsJHRoZW0uaXNEYXJrKSB7XG4gICAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbDI7XG5cbiAgICAgIGxvZ29VcmwgPSAoKF90aGlzJHdoaXRlTGFiZWwyID0gdGhpcy53aGl0ZUxhYmVsKSA9PT0gbnVsbCB8fCBfdGhpcyR3aGl0ZUxhYmVsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkd2hpdGVMYWJlbDIubG9nb0xpZ2h0KSB8fCBsb2dvVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3RoaXMkd2hpdGVMYWJlbDM7XG5cbiAgICAgIGxvZ29VcmwgPSAoKF90aGlzJHdoaXRlTGFiZWwzID0gdGhpcy53aGl0ZUxhYmVsKSA9PT0gbnVsbCB8fCBfdGhpcyR3aGl0ZUxhYmVsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkd2hpdGVMYWJlbDMubG9nb0RhcmspIHx8IGxvZ29Vcmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvZ29Vcmw7XG4gIH1cblxuICBfc2VuZFdpZGdldFZpc2liaWxpdHlTdGF0dXMoc3RhdHVzKSB7XG4gICAgY29uc3QgdG9ydXNXaWRnZXRWaXNpYmlsaXR5U3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uTXV4LmdldFN0cmVhbShcInRvcnVzLXdpZGdldC12aXNpYmlsaXR5XCIpO1xuICAgIHRvcnVzV2lkZ2V0VmlzaWJpbGl0eVN0cmVhbS53cml0ZSh7XG4gICAgICBkYXRhOiBzdGF0dXNcbiAgICB9KTtcbiAgfVxuXG4gIF9kaXNwbGF5SWZyYW1lKCkge1xuICAgIGxldCBpc0Z1bGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgIGNvbnN0IHN0eWxlID0ge307IC8vIHNldCBwaGFzZVxuXG4gICAgaWYgKCFpc0Z1bGwpIHtcbiAgICAgIHN0eWxlLmRpc3BsYXkgPSB0aGlzLnRvcnVzV2lkZ2V0VmlzaWJpbGl0eSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCI3MHB4XCI7XG4gICAgICBzdHlsZS53aWR0aCA9IFwiNzBweFwiO1xuXG4gICAgICBzd2l0Y2ggKHRoaXMuYnV0dG9uUG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uVE9QX0xFRlQ6XG4gICAgICAgICAgc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQlVUVE9OX1BPU0lUSU9OLlRPUF9SSUdIVDpcbiAgICAgICAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgc3R5bGUuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBCVVRUT05fUE9TSVRJT04uQk9UVE9NX1JJR0hUOlxuICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICAgICAgc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEJVVFRPTl9QT1NJVElPTi5CT1RUT01fTEVGVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICAgIHN0eWxlLnRvcCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBzdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgICAgc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICBzdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odGhpcy50b3J1c0lmcmFtZS5zdHlsZSwgc3R5bGUpO1xuICAgIHRoaXMuaXNJZnJhbWVGdWxsU2NyZWVuID0gaXNGdWxsO1xuICB9XG5cbiAgX3NldHVwV2ViMygpIHtcbiAgICBsb2cuaW5mbyhcInNldHVwV2ViMyBydW5uaW5nXCIpOyAvLyBzZXR1cCBiYWNrZ3JvdW5kIGNvbm5lY3Rpb25cblxuICAgIGNvbnN0IG1ldGFtYXNrU3RyZWFtID0gbmV3IEJhc2VQb3N0TWVzc2FnZVN0cmVhbSh7XG4gICAgICBuYW1lOiBcImVtYmVkX21ldGFtYXNrXCIsXG4gICAgICB0YXJnZXQ6IFwiaWZyYW1lX21ldGFtYXNrXCIsXG4gICAgICB0YXJnZXRXaW5kb3c6IHRoaXMudG9ydXNJZnJhbWUuY29udGVudFdpbmRvdyxcbiAgICAgIHRhcmdldE9yaWdpbjogbmV3IFVSTCh0aGlzLnRvcnVzVXJsKS5vcmlnaW5cbiAgICB9KTsgLy8gRHVlIHRvIGNvbXBhdGliaWxpdHkgcmVhc29ucywgd2Ugc2hvdWxkIG5vdCBzZXQgdXAgbXVsdGlwbGV4aW5nIG9uIHdpbmRvdy5tZXRhbWFza3N0cmVhbVxuICAgIC8vIGJlY2F1c2UgdGhlIE1ldGFtYXNrSW5wYWdlUHJvdmlkZXIgYWxzbyBhdHRlbXB0cyB0byBkbyBzby5cbiAgICAvLyBXZSBjcmVhdGUgYW5vdGhlciBMb2NhbE1lc3NhZ2VEdXBsZXhTdHJlYW0gZm9yIGNvbW11bmljYXRpb24gYmV0d2VlbiBkYXBwIDw+IGlmcmFtZVxuXG4gICAgY29uc3QgY29tbXVuaWNhdGlvblN0cmVhbSA9IG5ldyBCYXNlUG9zdE1lc3NhZ2VTdHJlYW0oe1xuICAgICAgbmFtZTogXCJlbWJlZF9jb21tXCIsXG4gICAgICB0YXJnZXQ6IFwiaWZyYW1lX2NvbW1cIixcbiAgICAgIHRhcmdldFdpbmRvdzogdGhpcy50b3J1c0lmcmFtZS5jb250ZW50V2luZG93LFxuICAgICAgdGFyZ2V0T3JpZ2luOiBuZXcgVVJMKHRoaXMudG9ydXNVcmwpLm9yaWdpblxuICAgIH0pOyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggR290Y2hpIDopXG4gICAgLy8gd2luZG93Lm1ldGFtYXNrU3RyZWFtID0gdGhpcy5jb21tdW5pY2F0aW9uU3RyZWFtXG4gICAgLy8gY29tcG9zZSB0aGUgaW5wYWdlIHByb3ZpZGVyXG5cbiAgICBjb25zdCBpbnBhZ2VQcm92aWRlciA9IG5ldyBUb3J1c0lucGFnZVByb3ZpZGVyKG1ldGFtYXNrU3RyZWFtKTsgLy8gZGV0ZWN0IGV0aF9yZXF1ZXN0QWNjb3VudHMgYW5kIHBpcGUgdG8gZW5hYmxlIGZvciBub3dcblxuICAgIGNvbnN0IGRldGVjdEFjY291bnRSZXF1ZXN0UHJvdG90eXBlTW9kaWZpZXIgPSBtID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gaW5wYWdlUHJvdmlkZXJbbV07XG5cbiAgICAgIGlucGFnZVByb3ZpZGVyW21dID0gZnVuY3Rpb24gcHJvdmlkZXJGdW5jKG1ldGhvZCkge1xuICAgICAgICBpZiAobWV0aG9kICYmIG1ldGhvZCA9PT0gXCJldGhfcmVxdWVzdEFjY291bnRzXCIpIHtcbiAgICAgICAgICByZXR1cm4gaW5wYWdlUHJvdmlkZXIuZW5hYmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgW21ldGhvZCwgLi4uYXJnc10pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllcihcInNlbmRcIik7XG4gICAgZGV0ZWN0QWNjb3VudFJlcXVlc3RQcm90b3R5cGVNb2RpZmllcihcInNlbmRBc3luY1wiKTtcblxuICAgIGlucGFnZVByb3ZpZGVyLmVuYWJsZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIElmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4sIHdlIGFzc3VtZSB0aGV5IGhhdmUgZ2l2ZW4gYWNjZXNzIHRvIHRoZSB3ZWJzaXRlXG4gICAgICAgIGlucGFnZVByb3ZpZGVyLnNlbmRBc3luYyh7XG4gICAgICAgICAganNvbnJwYzogXCIyLjBcIixcbiAgICAgICAgICBpZDogZ2V0UHJlb3Blbkluc3RhbmNlSWQoKSxcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgICAgIHBhcmFtczogW11cbiAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc1xuICAgICAgICAgIH0gPSByZXNwb25zZSB8fCB7fTtcblxuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzKSAmJiByZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBhbHJlYWR5IHJlaHlkcmF0ZWQsIHJlc29sdmUgdGhpc1xuICAgICAgICAgICAgLy8gZWxzZSB3YWl0IGZvciBzb21ldGhpbmcgdG8gYmUgd3JpdHRlbiB0byBzdGF0dXMgc3RyZWFtXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVMb2dpbkNiID0gKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5yZXF1ZXN0ZWRWZXJpZmllciAhPT0gXCJcIiAmJiB0aGlzLmN1cnJlbnRWZXJpZmllciAhPT0gdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3RlZFZlcmlmaWVyXG4gICAgICAgICAgICAgICAgfSA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL25vLXByb21pc2UtaW4tY2FsbGJhY2tcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nb3V0KCkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2UvYWx3YXlzLXJldHVyblxuICAgICAgICAgICAgICAgIC50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ZWRWZXJpZmllciA9IHJlcXVlc3RlZFZlcmlmaWVyO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLl9zaG93TG9naW5Qb3B1cCh0cnVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgICAgICAgICBoYW5kbGVMb2dpbkNiKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmlzTG9naW5DYWxsYmFjayA9IGhhbmRsZUxvZ2luQ2I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldCB1cCBsaXN0ZW5lciBmb3IgbG9naW5cbiAgICAgICAgICAgIHRoaXMuX3Nob3dMb2dpblBvcHVwKHRydWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbnBhZ2VQcm92aWRlci50cnlQcmVvcGVuSGFuZGxlID0gKHBheWxvYWQsIGNiKSA9PiB7XG4gICAgICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQ7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShfcGF5bG9hZCkgJiYgVU5TQUZFX01FVEhPRFMuaW5jbHVkZXMoX3BheWxvYWQubWV0aG9kKSkge1xuICAgICAgICBjb25zdCBwcmVvcGVuSW5zdGFuY2VJZCA9IGdldFByZW9wZW5JbnN0YW5jZUlkKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93KHByZW9wZW5JbnN0YW5jZUlkLCB7XG4gICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgIGZlYXR1cmVzOiBGRUFUVVJFU19DT05GSVJNX1dJTkRPV1xuICAgICAgICB9KTtcblxuICAgICAgICBfcGF5bG9hZC5wcmVvcGVuSW5zdGFuY2VJZCA9IHByZW9wZW5JbnN0YW5jZUlkO1xuICAgICAgfVxuXG4gICAgICBpbnBhZ2VQcm92aWRlci5fcnBjRW5naW5lLmhhbmRsZShfcGF5bG9hZCwgY2IpO1xuICAgIH07IC8vIFdvcmsgYXJvdW5kIGZvciB3ZWIzQDEuMCBkZWxldGluZyB0aGUgYm91bmQgYHNlbmRBc3luY2AgYnV0IG5vdCB0aGUgdW5ib3VuZFxuICAgIC8vIGBzZW5kQXN5bmNgIG1ldGhvZCBvbiB0aGUgcHJvdG90eXBlLCBjYXVzaW5nIGB0aGlzYCByZWZlcmVuY2UgaXNzdWVzIHdpdGggZHJpenpsZVxuXG5cbiAgICBjb25zdCBwcm94aWVkSW5wYWdlUHJvdmlkZXIgPSBuZXcgUHJveHkoaW5wYWdlUHJvdmlkZXIsIHtcbiAgICAgIC8vIHN0cmFpZ2h0IHVwIGxpZSB0aGF0IHdlIGRlbGV0ZWQgdGhlIHByb3BlcnR5IHNvIHRoYXQgaXQgZG9lc250XG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBpbiBzdHJpY3QgbW9kZVxuICAgICAgZGVsZXRlUHJvcGVydHk6ICgpID0+IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmV0aGVyZXVtID0gcHJveGllZElucGFnZVByb3ZpZGVyO1xuICAgIGNvbnN0IGNvbW11bmljYXRpb25NdXggPSBzZXR1cE11bHRpcGxleChjb21tdW5pY2F0aW9uU3RyZWFtKTtcbiAgICB0aGlzLmNvbW11bmljYXRpb25NdXggPSBjb21tdW5pY2F0aW9uTXV4O1xuICAgIGNvbnN0IHdpbmRvd1N0cmVhbSA9IGNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwid2luZG93XCIpO1xuICAgIHdpbmRvd1N0cmVhbS5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgaWYgKGNodW5rLm5hbWUgPT09IFwiY3JlYXRlX3dpbmRvd1wiKSB7XG4gICAgICAgIC8vIHVybCBpcyB0aGUgdXJsIHdlIG5lZWQgdG8gb3BlblxuICAgICAgICAvLyB3ZSBjYW4gcGFzcyB0aGUgZmluYWwgdXJsIHVwZnJvbnQgc28gdGhhdCBpdCByZW1vdmVzIHRoZSBzdGVwIG9mIHJlZGlyZWN0aW5nIHRvIC9yZWRpcmVjdCBhbmQgd2FpdGluZyBmb3IgZmluYWxVcmxcbiAgICAgICAgdGhpcy5fY3JlYXRlUG9wdXBCbG9ja0FsZXJ0KGNodW5rLmRhdGEucHJlb3Blbkluc3RhbmNlSWQsIGNodW5rLmRhdGEudXJsKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gc2hvdyB0b3J1cyB3aWRnZXQgaWYgYnV0dG9uIGNsaWNrZWRcblxuICAgIGNvbnN0IHdpZGdldFN0cmVhbSA9IGNvbW11bmljYXRpb25NdXguZ2V0U3RyZWFtKFwid2lkZ2V0XCIpO1xuICAgIHdpZGdldFN0cmVhbS5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhXG4gICAgICB9ID0gY2h1bms7XG5cbiAgICAgIHRoaXMuX2Rpc3BsYXlJZnJhbWUoZGF0YSk7XG4gICAgfSk7IC8vIFNob3cgdG9ydXMgYnV0dG9uIGlmIHdhbGxldCBoYXMgYmVlbiBoeWRyYXRlZC9kZXRlY3RlZFxuXG4gICAgY29uc3Qgc3RhdHVzU3RyZWFtID0gY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJzdGF0dXNcIik7XG4gICAgc3RhdHVzU3RyZWFtLm9uKFwiZGF0YVwiLCBzdGF0dXMgPT4ge1xuICAgICAgLy8gbG9naW5cbiAgICAgIGlmIChzdGF0dXMubG9nZ2VkSW4pIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gc3RhdHVzLmxvZ2dlZEluO1xuICAgICAgICB0aGlzLmN1cnJlbnRWZXJpZmllciA9IHN0YXR1cy52ZXJpZmllcjtcbiAgICAgIH0gLy8gbG9nb3V0XG4gICAgICBlbHNlIHRoaXMuX2Rpc3BsYXlJZnJhbWUoKTtcblxuICAgICAgaWYgKHRoaXMuaXNMb2dpbkNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaXNMb2dpbkNhbGxiYWNrKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlzTG9naW5DYWxsYmFjaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnByb3ZpZGVyID0gcHJveGllZElucGFnZVByb3ZpZGVyO1xuICAgIGlmICh0aGlzLnByb3ZpZGVyLnNob3VsZFNlbmRNZXRhZGF0YSkgc2VuZFNpdGVNZXRhZGF0YSh0aGlzLnByb3ZpZGVyLl9ycGNFbmdpbmUpO1xuXG4gICAgaW5wYWdlUHJvdmlkZXIuX2luaXRpYWxpemVTdGF0ZSgpO1xuXG4gICAgbG9nLmRlYnVnKFwiVG9ydXMgLSBpbmplY3RlZCBwcm92aWRlclwiKTtcbiAgfVxuXG4gIF9zaG93TG9naW5Qb3B1cChjYWxsZWRGcm9tRW1iZWQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGxvZ2luSGFuZGxlciA9IGRhdGEgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlcnIsXG4gICAgICAgIHNlbGVjdGVkQWRkcmVzc1xuICAgICAgfSA9IGRhdGE7XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgbG9nLmVycm9yKGVycik7XG4gICAgICAgIGlmIChyZWplY3QpIHJlamVjdChlcnIpO1xuICAgICAgfSAvLyByZXR1cm5zIGFuIGFycmF5IChjYXVzZSBhY2NvdW50cyBleHBlY3RzIGl0KVxuICAgICAgZWxzZSBpZiAocmVzb2x2ZSkgcmVzb2x2ZShbc2VsZWN0ZWRBZGRyZXNzXSk7XG5cbiAgICAgIGlmICh0aGlzLmlzSWZyYW1lRnVsbFNjcmVlbikgdGhpcy5fZGlzcGxheUlmcmFtZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvYXV0aFN0cmVhbSA9IHRoaXMuY29tbXVuaWNhdGlvbk11eC5nZXRTdHJlYW0oXCJvYXV0aFwiKTtcblxuICAgIGlmICghdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcikge1xuICAgICAgdGhpcy5fZGlzcGxheUlmcmFtZSh0cnVlKTtcblxuICAgICAgaGFuZGxlU3RyZWFtKG9hdXRoU3RyZWFtLCBcImRhdGFcIiwgbG9naW5IYW5kbGVyKTtcbiAgICAgIG9hdXRoU3RyZWFtLndyaXRlKHtcbiAgICAgICAgbmFtZTogXCJvYXV0aF9tb2RhbFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2FsbGVkRnJvbUVtYmVkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVTdHJlYW0ob2F1dGhTdHJlYW0sIFwiZGF0YVwiLCBsb2dpbkhhbmRsZXIpO1xuICAgICAgY29uc3QgcHJlb3Blbkluc3RhbmNlSWQgPSBnZXRQcmVvcGVuSW5zdGFuY2VJZCgpO1xuXG4gICAgICB0aGlzLl9oYW5kbGVXaW5kb3cocHJlb3Blbkluc3RhbmNlSWQpO1xuXG4gICAgICBvYXV0aFN0cmVhbS53cml0ZSh7XG4gICAgICAgIG5hbWU6IFwib2F1dGhcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNhbGxlZEZyb21FbWJlZCxcbiAgICAgICAgICB2ZXJpZmllcjogdGhpcy5yZXF1ZXN0ZWRWZXJpZmllcixcbiAgICAgICAgICBwcmVvcGVuSW5zdGFuY2VJZCxcbiAgICAgICAgICBsb2dpbl9oaW50OiB0aGlzLmxvZ2luSGludFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlUG9wdXBCbG9ja0FsZXJ0KHByZW9wZW5JbnN0YW5jZUlkLCB1cmwpIHtcbiAgICBjb25zdCBsb2dvVXJsID0gdGhpcy5fZ2V0TG9nb1VybCgpO1xuXG4gICAgY29uc3QgdG9ydXNBbGVydCA9IGh0bWxUb0VsZW1lbnQoJzxkaXYgaWQ9XCJ0b3J1c0FsZXJ0XCIgY2xhc3M9XCJ0b3J1cy1hbGVydC0tdjJcIj4nICsgXCI8ZGl2IGlkPVxcXCJ0b3J1c0FsZXJ0X19sb2dvXFxcIj48aW1nIHNyYz1cXFwiXCIuY29uY2F0KGxvZ29VcmwsIFwiXFxcIiAvPjwvZGl2PlwiKSArIFwiPGRpdj5cIiArIFwiPGgxIGlkPVxcXCJ0b3J1c0FsZXJ0X190aXRsZVxcXCI+XCIuY29uY2F0KHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMuYWN0aW9uUmVxdWlyZWQsIFwiPC9oMT5cIikgKyBcIjxwIGlkPVxcXCJ0b3J1c0FsZXJ0X19kZXNjXFxcIj5cIi5jb25jYXQodGhpcy5lbWJlZFRyYW5zbGF0aW9ucy5wZW5kaW5nQWN0aW9uLCBcIjwvcD5cIikgKyBcIjwvZGl2PlwiICsgXCI8L2Rpdj5cIik7XG4gICAgY29uc3Qgc3VjY2Vzc0FsZXJ0ID0gaHRtbFRvRWxlbWVudChcIjxkaXY+PGEgaWQ9XFxcInRvcnVzQWxlcnRfX2J0blxcXCI+XCIuY29uY2F0KHRoaXMuZW1iZWRUcmFuc2xhdGlvbnMuY29udGludWUsIFwiPC9hPjwvZGl2PlwiKSk7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gaHRtbFRvRWxlbWVudCgnPGRpdiBpZD1cInRvcnVzQWxlcnRfX2J0bi1jb250YWluZXJcIj48L2Rpdj4nKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VjY2Vzc0FsZXJ0KTtcbiAgICB0b3J1c0FsZXJ0LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBiaW5kT25Mb2FkID0gKCkgPT4ge1xuICAgICAgc3VjY2Vzc0FsZXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvdyhwcmVvcGVuSW5zdGFuY2VJZCwge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgZmVhdHVyZXM6IEZFQVRVUkVTX0NPTkZJUk1fV0lORE9XXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvcnVzQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIGlmICh0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB0aGlzLnRvcnVzQWxlcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX3NldEVtYmVkV2hpdGVMYWJlbCh0b3J1c0FsZXJ0KTtcblxuICAgIGNvbnN0IGF0dGFjaE9uTG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMudG9ydXNBbGVydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy50b3J1c0FsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvcnVzQWxlcnQpO1xuICAgIH07XG5cbiAgICBydW5PbkxvYWQoYXR0YWNoT25Mb2FkKTtcbiAgICBydW5PbkxvYWQoYmluZE9uTG9hZCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBCVVRUT05fUE9TSVRJT04sIExPR0lOX1BST1ZJREVSLCBQQVlNRU5UX1BST1ZJREVSLCBUT1JVU19CVUlMRF9FTlYsIFRvcnVzSW5wYWdlUHJvdmlkZXIsIFdBTExFVF9PUEVOTE9HSU5fVkVSSUZJRVJfTUFQLCBXQUxMRVRfVkVSSUZJRVJTLCBUb3J1cyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b3J1cy5lc20uanMubWFwXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IFRvcnVzIGZyb20gXCJAdG9ydXNsYWJzL3RvcnVzLWVtYmVkXCI7XG5leHBvcnQgdmFyIGdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gWzIsIG5ldyBUb3J1cygpXTtcbiAgICB9KTtcbn0pOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VG9ydXNQcm92aWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEVDID0gcmVxdWlyZShcImVsbGlwdGljXCIpLmVjO1xuXG52YXIgZWMgPSBuZXcgRUMoXCJzZWNwMjU2azFcIik7XG52YXIgYnJvd3NlckNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvIHx8IHt9O1xudmFyIHN1YnRsZSA9IGJyb3dzZXJDcnlwdG8uc3VidGxlIHx8IGJyb3dzZXJDcnlwdG8ud2Via2l0U3VidGxlO1xuXG52YXIgbm9kZUNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBFQ19HUk9VUF9PUkRFUiA9IEJ1ZmZlci5mcm9tKCdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZWJhYWVkY2U2YWY0OGEwM2JiZmQyNWU4Y2QwMzY0MTQxJywgJ2hleCcpO1xuY29uc3QgWkVSTzMyID0gQnVmZmVyLmFsbG9jKDMyLCAwKTtcblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8IFwiQXNzZXJ0aW9uIGZhaWxlZFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NjYWxhciAoeCkge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHgpICYmIHgubGVuZ3RoID09PSAzMjtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSkge1xuICBpZiAoIWlzU2NhbGFyKHByaXZhdGVLZXkpKVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBwcml2YXRlS2V5LmNvbXBhcmUoWkVSTzMyKSA+IDAgJiYgLy8gPiAwXG4gIHByaXZhdGVLZXkuY29tcGFyZShFQ19HUk9VUF9PUkRFUikgPCAwOyAvLyA8IEdcbn1cblxuLy8gQ29tcGFyZSB0d28gYnVmZmVycyBpbiBjb25zdGFudCB0aW1lIHRvIHByZXZlbnQgdGltaW5nIGF0dGFja3MuXG5mdW5jdGlvbiBlcXVhbENvbnN0VGltZShiMSwgYjIpIHtcbiAgaWYgKGIxLmxlbmd0aCAhPT0gYjIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciByZXMgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGIxLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzIHw9IGIxW2ldIF4gYjJbaV07ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgfVxuICByZXR1cm4gcmVzID09PSAwO1xufVxuXG4vKiBUaGlzIG11c3QgY2hlY2sgaWYgd2UncmUgaW4gdGhlIGJyb3dzZXIgb3Jcbm5vdCwgc2luY2UgdGhlIGZ1bmN0aW9ucyBhcmUgZGlmZmVyZW50IGFuZCBkb2VzXG5ub3QgY29udmVydCB1c2luZyBicm93c2VyaWZ5ICovXG5mdW5jdGlvbiByYW5kb21CeXRlcyhzaXplKSB7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgaWYgKHR5cGVvZiBicm93c2VyQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20obm9kZUNyeXB0by5yYW5kb21CeXRlcyhzaXplKSk7XG4gIH0gZWxzZSB7XG4gICAgYnJvd3NlckNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyKTtcbiAgfVxuICByZXR1cm4gQnVmZmVyLmZyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gc2hhNTEyKG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBoYXNoID0gbm9kZUNyeXB0by5jcmVhdGVIYXNoKCdzaGE1MTInKTtcbiAgICB2YXIgcmVzdWx0ID0gaGFzaC51cGRhdGUobXNnKS5kaWdlc3QoKTtcbiAgICByZXNvbHZlKG5ldyBVaW50OEFycmF5KHJlc3VsdCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QWVzKG9wKSB7XG4gIHJldHVybiBmdW5jdGlvbihpdiwga2V5LCBkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgIGlmIChzdWJ0bGUpIHtcbiAgICAgICAgdmFyIGltcG9ydEFsZ29yaXRobSA9IHtuYW1lOiBcIkFFUy1DQkNcIn07XG4gICAgICAgIHZhciBrZXlwID0gc3VidGxlLmltcG9ydEtleShcInJhd1wiLCBrZXksIGltcG9ydEFsZ29yaXRobSwgZmFsc2UsIFtvcF0pO1xuICAgICAgICByZXR1cm4ga2V5cC50aGVuKGZ1bmN0aW9uKGNyeXB0b0tleSkge1xuICAgICAgICAgIHZhciBlbmNBbGdvcml0aG0gPSB7bmFtZTogXCJBRVMtQ0JDXCIsIGl2OiBpdn07XG4gICAgICAgICAgcmV0dXJuIHN1YnRsZVtvcF0oZW5jQWxnb3JpdGhtLCBjcnlwdG9LZXksIGRhdGEpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkocmVzdWx0KSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcCA9PT0gJ2VuY3J5cHQnKSB7XG4gICAgICAgICAgdmFyIGNpcGhlciA9IG5vZGVDcnlwdG8uY3JlYXRlQ2lwaGVyaXYoJ2Flcy0yNTYtY2JjJywga2V5LCBpdik7XG4gICAgICAgICAgbGV0IGZpcnN0Q2h1bmsgPSBjaXBoZXIudXBkYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCBzZWNvbmRDaHVuayA9IGNpcGhlci5maW5hbCgpO1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmNvbmNhdChbZmlyc3RDaHVuaywgc2Vjb25kQ2h1bmtdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3AgPT09ICdkZWNyeXB0Jykge1xuICAgICAgICAgIHZhciBkZWNpcGhlciA9IG5vZGVDcnlwdG8uY3JlYXRlRGVjaXBoZXJpdignYWVzLTI1Ni1jYmMnLCBrZXksIGl2KTtcbiAgICAgICAgICBsZXQgZmlyc3RDaHVuayA9IGRlY2lwaGVyLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgc2Vjb25kQ2h1bmsgPSBkZWNpcGhlci5maW5hbCgpO1xuICAgICAgICAgIHJlc29sdmUoQnVmZmVyLmNvbmNhdChbZmlyc3RDaHVuaywgc2Vjb25kQ2h1bmtdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxudmFyIGFlc0NiY0VuY3J5cHQgPSBnZXRBZXMoXCJlbmNyeXB0XCIpO1xudmFyIGFlc0NiY0RlY3J5cHQgPSBnZXRBZXMoXCJkZWNyeXB0XCIpO1xuXG5mdW5jdGlvbiBobWFjU2hhMjU2U2lnbihrZXksIG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBobWFjID0gbm9kZUNyeXB0by5jcmVhdGVIbWFjKCdzaGEyNTYnLCBCdWZmZXIuZnJvbShrZXkpKTtcbiAgICBobWFjLnVwZGF0ZShtc2cpO1xuICAgIHZhciByZXN1bHQgPSBobWFjLmRpZ2VzdCgpO1xuICAgIHJlc29sdmUocmVzdWx0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhtYWNTaGEyNTZWZXJpZnkoa2V5LCBtc2csIHNpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBobWFjID0gbm9kZUNyeXB0by5jcmVhdGVIbWFjKCdzaGEyNTYnLCBCdWZmZXIuZnJvbShrZXkpKTtcbiAgICBobWFjLnVwZGF0ZShtc2cpO1xuICAgIHZhciBleHBlY3RlZFNpZyA9IGhtYWMuZGlnZXN0KCk7XG4gICAgcmVzb2x2ZShlcXVhbENvbnN0VGltZShleHBlY3RlZFNpZywgc2lnKSk7XG4gIH0pO1xufVxuXG4vKipcbiAgKiBHZW5lcmF0ZSBhIG5ldyB2YWxpZCBwcml2YXRlIGtleS4gV2lsbCB1c2UgdGhlIHdpbmRvdy5jcnlwdG8gb3Igd2luZG93Lm1zQ3J5cHRvIGFzIHNvdXJjZVxuICAqIGRlcGVuZGluZyBvbiB5b3VyIGJyb3dzZXIuXG4gICogQHJldHVybiB7QnVmZmVyfSBBIDMyLWJ5dGUgcHJpdmF0ZSBrZXkuXG4gICogQGZ1bmN0aW9uXG4gICovXG5leHBvcnRzLmdlbmVyYXRlUHJpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByaXZhdGVLZXkgPSByYW5kb21CeXRlcygzMik7XG4gIHdoaWxlICghaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSkpIHtcbiAgICBwcml2YXRlS2V5ID0gcmFuZG9tQnl0ZXMoMzIpO1xuICB9XG4gIHJldHVybiBwcml2YXRlS2V5O1xufTtcblxudmFyIGdldFB1YmxpYyA9IGV4cG9ydHMuZ2V0UHVibGljID0gZnVuY3Rpb24ocHJpdmF0ZUtleSkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGhhcyBzeW5jIEFQSSBzbyB3ZSB0aHJvdyBhbiBlcnJvciBpbW1lZGlhdGVseS5cbiAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIC8vIFhYWChLYWdhbWkpOiBgZWxsaXB0aWMudXRpbHMuZW5jb2RlYCByZXR1cm5zIGFycmF5IGZvciBldmVyeVxuICAvLyBlbmNvZGluZyBleGNlcHQgYGhleGAuXG4gIHJldHVybiBCdWZmZXIuZnJvbShlYy5rZXlGcm9tUHJpdmF0ZShwcml2YXRlS2V5KS5nZXRQdWJsaWMoXCJhcnJcIikpO1xufTtcblxuLyoqXG4gKiBHZXQgY29tcHJlc3NlZCB2ZXJzaW9uIG9mIHB1YmxpYyBrZXkuXG4gKi9cbnZhciBnZXRQdWJsaWNDb21wcmVzc2VkID0gZXhwb3J0cy5nZXRQdWJsaWNDb21wcmVzc2VkID0gZnVuY3Rpb24ocHJpdmF0ZUtleSkgeyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgYXNzZXJ0KHByaXZhdGVLZXkubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2FuZGVyZXIvc2VjcDI1NmsxLW5vZGUvaXNzdWVzLzQ2XG4gIGxldCBjb21wcmVzc2VkID0gdHJ1ZTtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXkpLmdldFB1YmxpYyhjb21wcmVzc2VkLCBcImFyclwiKSk7XG59O1xuXG4vLyBOT1RFKEthZ2FtaSk6IFdlIGRvbid0IHVzZSBwcm9taXNlIHNoaW0gaW4gQnJvd3NlciBpbXBsZW1lbnRhdGlvblxuLy8gYmVjYXVzZSBpdCdzIHN1cHBvcnRlZCBuYXRpdmVseSBpbiBuZXcgYnJvd3NlcnMgKHNlZVxuLy8gPGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1wcm9taXNlcz4pIGFuZCB3ZSBjYW4gdXNlIG9ubHkgbmV3IGJyb3dzZXJzXG4vLyBiZWNhdXNlIG9mIHRoZSBXZWJDcnlwdG9BUEkgKHNlZVxuLy8gPGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jcnlwdG9ncmFwaHk+KS5cbmV4cG9ydHMuc2lnbiA9IGZ1bmN0aW9uKHByaXZhdGVLZXksIG1zZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIGFzc2VydChwcml2YXRlS2V5Lmxlbmd0aCA9PT0gMzIsIFwiQmFkIHByaXZhdGUga2V5XCIpO1xuICAgIGFzc2VydChpc1ZhbGlkUHJpdmF0ZUtleShwcml2YXRlS2V5KSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KG1zZy5sZW5ndGggPiAwLCBcIk1lc3NhZ2Ugc2hvdWxkIG5vdCBiZSBlbXB0eVwiKTtcbiAgICBhc3NlcnQobXNnLmxlbmd0aCA8PSAzMiwgXCJNZXNzYWdlIGlzIHRvbyBsb25nXCIpO1xuICAgIHJlc29sdmUoQnVmZmVyLmZyb20oZWMuc2lnbihtc2csIHByaXZhdGVLZXksIHtjYW5vbmljYWw6IHRydWV9KS50b0RFUigpKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy52ZXJpZnkgPSBmdW5jdGlvbihwdWJsaWNLZXksIG1zZywgc2lnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBhc3NlcnQocHVibGljS2V5Lmxlbmd0aCA9PT0gNjUgfHwgcHVibGljS2V5Lmxlbmd0aCA9PT0gMzMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgaWYgKHB1YmxpY0tleS5sZW5ndGggPT09IDY1KVxuICAgIHtcbiAgICAgIGFzc2VydChwdWJsaWNLZXlbMF0gPT09IDQsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIGlmIChwdWJsaWNLZXkubGVuZ3RoID09PSAzMylcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5WzBdID09PSAyIHx8IHB1YmxpY0tleVswXSA9PT0gMywgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgYXNzZXJ0KG1zZy5sZW5ndGggPiAwLCBcIk1lc3NhZ2Ugc2hvdWxkIG5vdCBiZSBlbXB0eVwiKTtcbiAgICBhc3NlcnQobXNnLmxlbmd0aCA8PSAzMiwgXCJNZXNzYWdlIGlzIHRvbyBsb25nXCIpO1xuICAgIGlmIChlYy52ZXJpZnkobXNnLCBzaWcsIHB1YmxpY0tleSkpIHtcbiAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJCYWQgc2lnbmF0dXJlXCIpKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGRlcml2ZSA9IGV4cG9ydHMuZGVyaXZlID0gZnVuY3Rpb24ocHJpdmF0ZUtleUEsIHB1YmxpY0tleUIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKHByaXZhdGVLZXlBKSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KEJ1ZmZlci5pc0J1ZmZlcihwdWJsaWNLZXlCKSwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICBhc3NlcnQocHJpdmF0ZUtleUEubGVuZ3RoID09PSAzMiwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KGlzVmFsaWRQcml2YXRlS2V5KHByaXZhdGVLZXlBKSwgXCJCYWQgcHJpdmF0ZSBrZXlcIik7XG4gICAgYXNzZXJ0KHB1YmxpY0tleUIubGVuZ3RoID09PSA2NSB8fCBwdWJsaWNLZXlCLmxlbmd0aCA9PT0gMzMsIFwiQmFkIHB1YmxpYyBrZXlcIik7XG4gICAgaWYgKHB1YmxpY0tleUIubGVuZ3RoID09PSA2NSlcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5QlswXSA9PT0gNCwgXCJCYWQgcHVibGljIGtleVwiKTtcbiAgICB9XG4gICAgaWYgKHB1YmxpY0tleUIubGVuZ3RoID09PSAzMylcbiAgICB7XG4gICAgICBhc3NlcnQocHVibGljS2V5QlswXSA9PT0gMiB8fCBwdWJsaWNLZXlCWzBdID09PSAzLCBcIkJhZCBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICB2YXIga2V5QSA9IGVjLmtleUZyb21Qcml2YXRlKHByaXZhdGVLZXlBKTtcbiAgICB2YXIga2V5QiA9IGVjLmtleUZyb21QdWJsaWMocHVibGljS2V5Qik7XG4gICAgdmFyIFB4ID0ga2V5QS5kZXJpdmUoa2V5Qi5nZXRQdWJsaWMoKSk7ICAvLyBCTiBpbnN0YW5jZVxuICAgIHJlc29sdmUoQnVmZmVyLmZyb20oUHgudG9BcnJheSgpKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5lbmNyeXB0ID0gZnVuY3Rpb24ocHVibGljS2V5VG8sIG1zZywgb3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgLy8gVG1wIHZhcmlhYmxlcyB0byBzYXZlIGNvbnRleHQgZnJvbSBmbGF0IHByb21pc2VzO1xuICB2YXIgaXYsIGVwaGVtUHVibGljS2V5LCBjaXBoZXJ0ZXh0LCBtYWNLZXk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGVwaGVtUHJpdmF0ZUtleSA9IG9wdHMuZXBoZW1Qcml2YXRlS2V5IHx8IHJhbmRvbUJ5dGVzKDMyKTtcbiAgICAvLyBUaGVyZSBpcyBhIHZlcnkgdW5saWtlbHkgcG9zc2liaWxpdHkgdGhhdCBpdCBpcyBub3QgYSB2YWxpZCBrZXlcbiAgICB3aGlsZSghaXNWYWxpZFByaXZhdGVLZXkoZXBoZW1Qcml2YXRlS2V5KSlcbiAgICB7XG4gICAgICBlcGhlbVByaXZhdGVLZXkgPSBvcHRzLmVwaGVtUHJpdmF0ZUtleSB8fCByYW5kb21CeXRlcygzMik7XG4gICAgfVxuICAgIGVwaGVtUHVibGljS2V5ID0gZ2V0UHVibGljKGVwaGVtUHJpdmF0ZUtleSk7XG4gICAgcmVzb2x2ZShkZXJpdmUoZXBoZW1Qcml2YXRlS2V5LCBwdWJsaWNLZXlUbykpO1xuICB9KS50aGVuKGZ1bmN0aW9uKFB4KSB7XG4gICAgcmV0dXJuIHNoYTUxMihQeCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oaGFzaCkge1xuICAgIGl2ID0gb3B0cy5pdiB8fCByYW5kb21CeXRlcygxNik7XG4gICAgdmFyIGVuY3J5cHRpb25LZXkgPSBoYXNoLnNsaWNlKDAsIDMyKTtcbiAgICBtYWNLZXkgPSBoYXNoLnNsaWNlKDMyKTtcbiAgICByZXR1cm4gYWVzQ2JjRW5jcnlwdChpdiwgZW5jcnlwdGlvbktleSwgbXNnKTtcbiAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgY2lwaGVydGV4dCA9IGRhdGE7XG4gICAgdmFyIGRhdGFUb01hYyA9IEJ1ZmZlci5jb25jYXQoW2l2LCBlcGhlbVB1YmxpY0tleSwgY2lwaGVydGV4dF0pO1xuICAgIHJldHVybiBobWFjU2hhMjU2U2lnbihtYWNLZXksIGRhdGFUb01hYyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24obWFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl2OiBpdixcbiAgICAgIGVwaGVtUHVibGljS2V5OiBlcGhlbVB1YmxpY0tleSxcbiAgICAgIGNpcGhlcnRleHQ6IGNpcGhlcnRleHQsXG4gICAgICBtYWM6IG1hYyxcbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVjcnlwdCA9IGZ1bmN0aW9uKHByaXZhdGVLZXksIG9wdHMpIHtcbiAgLy8gVG1wIHZhcmlhYmxlIHRvIHNhdmUgY29udGV4dCBmcm9tIGZsYXQgcHJvbWlzZXM7XG4gIHZhciBlbmNyeXB0aW9uS2V5O1xuICByZXR1cm4gZGVyaXZlKHByaXZhdGVLZXksIG9wdHMuZXBoZW1QdWJsaWNLZXkpLnRoZW4oZnVuY3Rpb24oUHgpIHtcbiAgICByZXR1cm4gc2hhNTEyKFB4KTtcbiAgfSkudGhlbihmdW5jdGlvbihoYXNoKSB7XG4gICAgZW5jcnlwdGlvbktleSA9IGhhc2guc2xpY2UoMCwgMzIpO1xuICAgIHZhciBtYWNLZXkgPSBoYXNoLnNsaWNlKDMyKTtcbiAgICB2YXIgZGF0YVRvTWFjID0gQnVmZmVyLmNvbmNhdChbXG4gICAgICBvcHRzLml2LFxuICAgICAgb3B0cy5lcGhlbVB1YmxpY0tleSxcbiAgICAgIG9wdHMuY2lwaGVydGV4dFxuICAgIF0pO1xuICAgIHJldHVybiBobWFjU2hhMjU2VmVyaWZ5KG1hY0tleSwgZGF0YVRvTWFjLCBvcHRzLm1hYyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24obWFjR29vZCkge1xuICAgIGFzc2VydChtYWNHb29kLCBcIkJhZCBNQUNcIik7XG4gICAgcmV0dXJuIGFlc0NiY0RlY3J5cHQob3B0cy5pdiwgZW5jcnlwdGlvbktleSwgb3B0cy5jaXBoZXJ0ZXh0KTtcbiAgfSkudGhlbihmdW5jdGlvbihtc2cpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkobXNnKSk7XG4gIH0pO1xufTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGFkX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcGFkLXN0cmluZ1wiKTtcbmZ1bmN0aW9uIGVuY29kZShpbnB1dCwgZW5jb2RpbmcpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09IHZvaWQgMCkgeyBlbmNvZGluZyA9IFwidXRmOFwiOyB9XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21CYXNlNjQoaW5wdXQudG9TdHJpbmcoXCJiYXNlNjRcIikpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUJhc2U2NChCdWZmZXIuZnJvbShpbnB1dCwgZW5jb2RpbmcpLnRvU3RyaW5nKFwiYmFzZTY0XCIpKTtcbn1cbjtcbmZ1bmN0aW9uIGRlY29kZShiYXNlNjR1cmwsIGVuY29kaW5nKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSB2b2lkIDApIHsgZW5jb2RpbmcgPSBcInV0ZjhcIjsgfVxuICAgIHJldHVybiBCdWZmZXIuZnJvbSh0b0Jhc2U2NChiYXNlNjR1cmwpLCBcImJhc2U2NFwiKS50b1N0cmluZyhlbmNvZGluZyk7XG59XG5mdW5jdGlvbiB0b0Jhc2U2NChiYXNlNjR1cmwpIHtcbiAgICBiYXNlNjR1cmwgPSBiYXNlNjR1cmwudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcGFkX3N0cmluZ18xLmRlZmF1bHQoYmFzZTY0dXJsKVxuICAgICAgICAucmVwbGFjZSgvXFwtL2csIFwiK1wiKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIik7XG59XG5mdW5jdGlvbiBmcm9tQmFzZTY0KGJhc2U2NCkge1xuICAgIHJldHVybiBiYXNlNjRcbiAgICAgICAgLnJlcGxhY2UoLz0vZywgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCBcIl9cIik7XG59XG5mdW5jdGlvbiB0b0J1ZmZlcihiYXNlNjR1cmwpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odG9CYXNlNjQoYmFzZTY0dXJsKSwgXCJiYXNlNjRcIik7XG59XG52YXIgYmFzZTY0dXJsID0gZW5jb2RlO1xuYmFzZTY0dXJsLmVuY29kZSA9IGVuY29kZTtcbmJhc2U2NHVybC5kZWNvZGUgPSBkZWNvZGU7XG5iYXNlNjR1cmwudG9CYXNlNjQgPSB0b0Jhc2U2NDtcbmJhc2U2NHVybC5mcm9tQmFzZTY0ID0gZnJvbUJhc2U2NDtcbmJhc2U2NHVybC50b0J1ZmZlciA9IHRvQnVmZmVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZTY0dXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBwYWRTdHJpbmcoaW5wdXQpIHtcbiAgICB2YXIgc2VnbWVudExlbmd0aCA9IDQ7XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB2YXIgZGlmZiA9IHN0cmluZ0xlbmd0aCAlIHNlZ21lbnRMZW5ndGg7XG4gICAgaWYgKCFkaWZmKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgdmFyIHBvc2l0aW9uID0gc3RyaW5nTGVuZ3RoO1xuICAgIHZhciBwYWRMZW5ndGggPSBzZWdtZW50TGVuZ3RoIC0gZGlmZjtcbiAgICB2YXIgcGFkZGVkU3RyaW5nTGVuZ3RoID0gc3RyaW5nTGVuZ3RoICsgcGFkTGVuZ3RoO1xuICAgIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2MocGFkZGVkU3RyaW5nTGVuZ3RoKTtcbiAgICBidWZmZXIud3JpdGUoaW5wdXQpO1xuICAgIHdoaWxlIChwYWRMZW5ndGgtLSkge1xuICAgICAgICBidWZmZXIud3JpdGUoXCI9XCIsIHBvc2l0aW9uKyspO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBwYWRTdHJpbmc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9iYXNlNjR1cmwnKS5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IEJ1ZmZlci5pc0J1ZmZlcjtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuIiwidmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxudmFyIGlzUmVxdWVzdCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRyZXR1cm4gc3RyZWFtLnNldEhlYWRlciAmJiB0eXBlb2Ygc3RyZWFtLmFib3J0ID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIGlzQ2hpbGRQcm9jZXNzID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdHJldHVybiBzdHJlYW0uc3RkaW8gJiYgQXJyYXkuaXNBcnJheShzdHJlYW0uc3RkaW8pICYmIHN0cmVhbS5zdGRpby5sZW5ndGggPT09IDNcbn07XG5cbnZhciBlb3MgPSBmdW5jdGlvbihzdHJlYW0sIG9wdHMsIGNhbGxiYWNrKSB7XG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGVvcyhzdHJlYW0sIG51bGwsIG9wdHMpO1xuXHRpZiAoIW9wdHMpIG9wdHMgPSB7fTtcblxuXHRjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG5cblx0dmFyIHdzID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuXHR2YXIgcnMgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG5cdHZhciByZWFkYWJsZSA9IG9wdHMucmVhZGFibGUgfHwgKG9wdHMucmVhZGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS5yZWFkYWJsZSk7XG5cdHZhciB3cml0YWJsZSA9IG9wdHMud3JpdGFibGUgfHwgKG9wdHMud3JpdGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS53cml0YWJsZSk7XG5cdHZhciBjYW5jZWxsZWQgPSBmYWxzZTtcblxuXHR2YXIgb25sZWdhY3lmaW5pc2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXN0cmVhbS53cml0YWJsZSkgb25maW5pc2goKTtcblx0fTtcblxuXHR2YXIgb25maW5pc2ggPSBmdW5jdGlvbigpIHtcblx0XHR3cml0YWJsZSA9IGZhbHNlO1xuXHRcdGlmICghcmVhZGFibGUpIGNhbGxiYWNrLmNhbGwoc3RyZWFtKTtcblx0fTtcblxuXHR2YXIgb25lbmQgPSBmdW5jdGlvbigpIHtcblx0XHRyZWFkYWJsZSA9IGZhbHNlO1xuXHRcdGlmICghd3JpdGFibGUpIGNhbGxiYWNrLmNhbGwoc3RyZWFtKTtcblx0fTtcblxuXHR2YXIgb25leGl0ID0gZnVuY3Rpb24oZXhpdENvZGUpIHtcblx0XHRjYWxsYmFjay5jYWxsKHN0cmVhbSwgZXhpdENvZGUgPyBuZXcgRXJyb3IoJ2V4aXRlZCB3aXRoIGVycm9yIGNvZGU6ICcgKyBleGl0Q29kZSkgOiBudWxsKTtcblx0fTtcblxuXHR2YXIgb25lcnJvciA9IGZ1bmN0aW9uKGVycikge1xuXHRcdGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBlcnIpO1xuXHR9O1xuXG5cdHZhciBvbmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0cHJvY2Vzcy5uZXh0VGljayhvbmNsb3NlbmV4dHRpY2spO1xuXHR9O1xuXG5cdHZhciBvbmNsb3NlbmV4dHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoY2FuY2VsbGVkKSByZXR1cm47XG5cdFx0aWYgKHJlYWRhYmxlICYmICEocnMgJiYgKHJzLmVuZGVkICYmICFycy5kZXN0cm95ZWQpKSkgcmV0dXJuIGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBuZXcgRXJyb3IoJ3ByZW1hdHVyZSBjbG9zZScpKTtcblx0XHRpZiAod3JpdGFibGUgJiYgISh3cyAmJiAod3MuZW5kZWQgJiYgIXdzLmRlc3Ryb3llZCkpKSByZXR1cm4gY2FsbGJhY2suY2FsbChzdHJlYW0sIG5ldyBFcnJvcigncHJlbWF0dXJlIGNsb3NlJykpO1xuXHR9O1xuXG5cdHZhciBvbnJlcXVlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRzdHJlYW0ucmVxLm9uKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdH07XG5cblx0aWYgKGlzUmVxdWVzdChzdHJlYW0pKSB7XG5cdFx0c3RyZWFtLm9uKCdjb21wbGV0ZScsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ub24oJ2Fib3J0Jywgb25jbG9zZSk7XG5cdFx0aWYgKHN0cmVhbS5yZXEpIG9ucmVxdWVzdCgpO1xuXHRcdGVsc2Ugc3RyZWFtLm9uKCdyZXF1ZXN0Jywgb25yZXF1ZXN0KTtcblx0fSBlbHNlIGlmICh3cml0YWJsZSAmJiAhd3MpIHsgLy8gbGVnYWN5IHN0cmVhbXNcblx0XHRzdHJlYW0ub24oJ2VuZCcsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ub24oJ2Nsb3NlJywgb25sZWdhY3lmaW5pc2gpO1xuXHR9XG5cblx0aWYgKGlzQ2hpbGRQcm9jZXNzKHN0cmVhbSkpIHN0cmVhbS5vbignZXhpdCcsIG9uZXhpdCk7XG5cblx0c3RyZWFtLm9uKCdlbmQnLCBvbmVuZCk7XG5cdHN0cmVhbS5vbignZmluaXNoJywgb25maW5pc2gpO1xuXHRpZiAob3B0cy5lcnJvciAhPT0gZmFsc2UpIHN0cmVhbS5vbignZXJyb3InLCBvbmVycm9yKTtcblx0c3RyZWFtLm9uKCdjbG9zZScsIG9uY2xvc2UpO1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRjYW5jZWxsZWQgPSB0cnVlO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY29tcGxldGUnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdhYm9ydCcsIG9uY2xvc2UpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcigncmVxdWVzdCcsIG9ucmVxdWVzdCk7XG5cdFx0aWYgKHN0cmVhbS5yZXEpIHN0cmVhbS5yZXEucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZXhpdCcsIG9uZXhpdCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcblx0fTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzU3RyZWFtID0gc3RyZWFtID0+XG5cdHN0cmVhbSAhPT0gbnVsbCAmJlxuXHR0eXBlb2Ygc3RyZWFtID09PSAnb2JqZWN0JyAmJlxuXHR0eXBlb2Ygc3RyZWFtLnBpcGUgPT09ICdmdW5jdGlvbic7XG5cbmlzU3RyZWFtLndyaXRhYmxlID0gc3RyZWFtID0+XG5cdGlzU3RyZWFtKHN0cmVhbSkgJiZcblx0c3RyZWFtLndyaXRhYmxlICE9PSBmYWxzZSAmJlxuXHR0eXBlb2Ygc3RyZWFtLl93cml0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHR0eXBlb2Ygc3RyZWFtLl93cml0YWJsZVN0YXRlID09PSAnb2JqZWN0JztcblxuaXNTdHJlYW0ucmVhZGFibGUgPSBzdHJlYW0gPT5cblx0aXNTdHJlYW0oc3RyZWFtKSAmJlxuXHRzdHJlYW0ucmVhZGFibGUgIT09IGZhbHNlICYmXG5cdHR5cGVvZiBzdHJlYW0uX3JlYWQgPT09ICdmdW5jdGlvbicgJiZcblx0dHlwZW9mIHN0cmVhbS5fcmVhZGFibGVTdGF0ZSA9PT0gJ29iamVjdCc7XG5cbmlzU3RyZWFtLmR1cGxleCA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbS53cml0YWJsZShzdHJlYW0pICYmXG5cdGlzU3RyZWFtLnJlYWRhYmxlKHN0cmVhbSk7XG5cbmlzU3RyZWFtLnRyYW5zZm9ybSA9IHN0cmVhbSA9PlxuXHRpc1N0cmVhbS5kdXBsZXgoc3RyZWFtKSAmJlxuXHR0eXBlb2Ygc3RyZWFtLl90cmFuc2Zvcm0gPT09ICdmdW5jdGlvbic7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJlYW07XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IE9wZW5KUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vb3BlbmpzZi5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkLFxuICAgIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpLFxuICAgIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZSxcbiAgICBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduXG4gKiBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFlcShvYmplY3Rba2V5XSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1lcmdlYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgbWVyZ2VkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAob2JqZWN0ID09PSBzb3VyY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYmFzZUZvcihzb3VyY2UsIGZ1bmN0aW9uKHNyY1ZhbHVlLCBrZXkpIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIGJhc2VNZXJnZSwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgICAgPyBjdXN0b21pemVyKHNhZmVHZXQob2JqZWN0LCBrZXkpLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sIGtleXNJbik7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlTWVyZ2VgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgbWVyZ2VzIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIG1lcmdlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gbWVyZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWVyZ2VGdW5jIFRoZSBmdW5jdGlvbiB0byBtZXJnZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgbWVyZ2VGdW5jLCBjdXN0b21pemVyLCBzdGFjaykge1xuICB2YXIgb2JqVmFsdWUgPSBzYWZlR2V0KG9iamVjdCwga2V5KSxcbiAgICAgIHNyY1ZhbHVlID0gc2FmZUdldChzb3VyY2UsIGtleSksXG4gICAgICBzdGFja2VkID0gc3RhY2suZ2V0KHNyY1ZhbHVlKTtcblxuICBpZiAoc3RhY2tlZCkge1xuICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHN0YWNrZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIHZhciBpc0NvbW1vbiA9IG5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheShzcmNWYWx1ZSksXG4gICAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiBpc0J1ZmZlcihzcmNWYWx1ZSksXG4gICAgICAgIGlzVHlwZWQgPSAhaXNBcnIgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkoc3JjVmFsdWUpO1xuXG4gICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICBpZiAoaXNBcnIgfHwgaXNCdWZmIHx8IGlzVHlwZWQpIHtcbiAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VPYmplY3Qob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY29weUFycmF5KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQnVmZikge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lQnVmZmVyKHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzVHlwZWQpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZVR5cGVkQXJyYXkoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc3JjVmFsdWUpIHx8IGlzQXJndW1lbnRzKHNyY1ZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIGlmIChpc0FyZ3VtZW50cyhvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0b1BsYWluT2JqZWN0KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFpc09iamVjdChvYmpWYWx1ZSkgfHwgaXNGdW5jdGlvbihvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpbml0Q2xvbmVPYmplY3Qoc3JjVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChpc0NvbW1vbikge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IG1lcmdlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHN0YWNrLnNldChzcmNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIG1lcmdlRnVuYyhuZXdWYWx1ZSwgc3JjVmFsdWUsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCwgdW5sZXNzIGBrZXlgIGlzIFwiX19wcm90b19fXCIgb3IgXCJjb25zdHJ1Y3RvclwiLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2FmZUdldChvYmplY3QsIGtleSkge1xuICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcGxhaW4gb2JqZWN0IGZsYXR0ZW5pbmcgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nXG4gKiBrZXllZCBwcm9wZXJ0aWVzIG9mIGB2YWx1ZWAgdG8gb3duIHByb3BlcnRpZXMgb2YgdGhlIHBsYWluIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBwbGFpbiBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIG5ldyBGb28pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgXy50b1BsYWluT2JqZWN0KG5ldyBGb28pKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMyB9XG4gKi9cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3QodmFsdWUsIGtleXNJbih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmFzc2lnbmAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgbWVyZ2VzIG93biBhbmRcbiAqIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RzIGludG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBwcm9wZXJ0aWVzIHRoYXQgcmVzb2x2ZSB0byBgdW5kZWZpbmVkYCBhcmVcbiAqIHNraXBwZWQgaWYgYSBkZXN0aW5hdGlvbiB2YWx1ZSBleGlzdHMuIEFycmF5IGFuZCBwbGFpbiBvYmplY3QgcHJvcGVydGllc1xuICogYXJlIG1lcmdlZCByZWN1cnNpdmVseS4gT3RoZXIgb2JqZWN0cyBhbmQgdmFsdWUgdHlwZXMgYXJlIG92ZXJyaWRkZW4gYnlcbiAqIGFzc2lnbm1lbnQuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC4gU3Vic2VxdWVudFxuICogc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuNS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7XG4gKiAgICdhJzogW3sgJ2InOiAyIH0sIHsgJ2QnOiA0IH1dXG4gKiB9O1xuICpcbiAqIHZhciBvdGhlciA9IHtcbiAqICAgJ2EnOiBbeyAnYyc6IDMgfSwgeyAnZSc6IDUgfV1cbiAqIH07XG4gKlxuICogXy5tZXJnZShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHsgJ2EnOiBbeyAnYic6IDIsICdjJzogMyB9LCB7ICdkJzogNCwgJ2UnOiA1IH1dIH1cbiAqL1xudmFyIG1lcmdlID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KSB7XG4gIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2U7XG4iLCIvKlxuKiBsb2dsZXZlbCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9waW10ZXJyeS9sb2dsZXZlbFxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTMgVGltIFBlcnJ5XG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKHJvb3QsIGRlZmluaXRpb24pIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShkZWZpbml0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QubG9nID0gZGVmaW5pdGlvbigpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gU2xpZ2h0bHkgZHViaW91cyB0cmlja3MgdG8gY3V0IGRvd24gbWluaW1pemVkIGZpbGUgc2l6ZVxuICAgIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcbiAgICB2YXIgdW5kZWZpbmVkVHlwZSA9IFwidW5kZWZpbmVkXCI7XG4gICAgdmFyIGlzSUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgJiYgKHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yICE9PSB1bmRlZmluZWRUeXBlKSAmJiAoXG4gICAgICAgIC9UcmlkZW50XFwvfE1TSUUgLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICk7XG5cbiAgICB2YXIgbG9nTWV0aG9kcyA9IFtcbiAgICAgICAgXCJ0cmFjZVwiLFxuICAgICAgICBcImRlYnVnXCIsXG4gICAgICAgIFwiaW5mb1wiLFxuICAgICAgICBcIndhcm5cIixcbiAgICAgICAgXCJlcnJvclwiXG4gICAgXTtcblxuICAgIC8vIENyb3NzLWJyb3dzZXIgYmluZCBlcXVpdmFsZW50IHRoYXQgd29ya3MgYXQgbGVhc3QgYmFjayB0byBJRTZcbiAgICBmdW5jdGlvbiBiaW5kTWV0aG9kKG9iaiwgbWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gb2JqW21ldGhvZE5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZC5iaW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kLmJpbmQob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwobWV0aG9kLCBvYmopO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIE1pc3NpbmcgYmluZCBzaGltIG9yIElFOCArIE1vZGVybml6ciwgZmFsbGJhY2sgdG8gd3JhcHBpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuYXBwbHkobWV0aG9kLCBbb2JqLCBhcmd1bWVudHNdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVHJhY2UoKSBkb2Vzbid0IHByaW50IHRoZSBtZXNzYWdlIGluIElFLCBzbyBmb3IgdGhhdCBjYXNlIHdlIG5lZWQgdG8gd3JhcCBpdFxuICAgIGZ1bmN0aW9uIHRyYWNlRm9ySUUoKSB7XG4gICAgICAgIGlmIChjb25zb2xlLmxvZykge1xuICAgICAgICAgICAgaWYgKGNvbnNvbGUubG9nLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gb2xkIElFLCBuYXRpdmUgY29uc29sZSBtZXRob2RzIHRoZW1zZWx2ZXMgZG9uJ3QgaGF2ZSBhcHBseSgpLlxuICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5hcHBseShjb25zb2xlLmxvZywgW2NvbnNvbGUsIGFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25zb2xlLnRyYWNlKSBjb25zb2xlLnRyYWNlKCk7XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgdGhlIGJlc3QgbG9nZ2luZyBtZXRob2QgcG9zc2libGUgZm9yIHRoaXMgZW52XG4gICAgLy8gV2hlcmV2ZXIgcG9zc2libGUgd2Ugd2FudCB0byBiaW5kLCBub3Qgd3JhcCwgdG8gcHJlc2VydmUgc3RhY2sgdHJhY2VzXG4gICAgZnVuY3Rpb24gcmVhbE1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnZGVidWcnKSB7XG4gICAgICAgICAgICBtZXRob2ROYW1lID0gJ2xvZyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09IHVuZGVmaW5lZFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gbWV0aG9kIHBvc3NpYmxlLCBmb3Igbm93IC0gZml4ZWQgbGF0ZXIgYnkgZW5hYmxlTG9nZ2luZ1doZW5Db25zb2xlQXJyaXZlc1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09ICd0cmFjZScgJiYgaXNJRSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYWNlRm9ySUU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc29sZVttZXRob2ROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCBtZXRob2ROYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlLmxvZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluZE1ldGhvZChjb25zb2xlLCAnbG9nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZXNlIHByaXZhdGUgZnVuY3Rpb25zIGFsd2F5cyBuZWVkIGB0aGlzYCB0byBiZSBzZXQgcHJvcGVybHlcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMb2dnaW5nTWV0aG9kcyhsZXZlbCwgbG9nZ2VyTmFtZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gbG9nTWV0aG9kc1tpXTtcbiAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0gPSAoaSA8IGxldmVsKSA/XG4gICAgICAgICAgICAgICAgbm9vcCA6XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSBsb2cubG9nIGFzIGFuIGFsaWFzIGZvciBsb2cuZGVidWdcbiAgICAgICAgdGhpcy5sb2cgPSB0aGlzLmRlYnVnO1xuICAgIH1cblxuICAgIC8vIEluIG9sZCBJRSB2ZXJzaW9ucywgdGhlIGNvbnNvbGUgaXNuJ3QgcHJlc2VudCB1bnRpbCB5b3UgZmlyc3Qgb3BlbiBpdC5cbiAgICAvLyBXZSBidWlsZCByZWFsTWV0aG9kKCkgcmVwbGFjZW1lbnRzIGhlcmUgdGhhdCByZWdlbmVyYXRlIGxvZ2dpbmcgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdXaGVuQ29uc29sZUFycml2ZXMobWV0aG9kTmFtZSwgbGV2ZWwsIGxvZ2dlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gdW5kZWZpbmVkVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHRoaXMsIGxldmVsLCBsb2dnZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgd2UgdXNlIGNsb3NlbHkgYm91bmQgcmVhbCBtZXRob2RzIHdoZXJldmVyIHBvc3NpYmxlLCBhbmRcbiAgICAvLyBvdGhlcndpc2Ugd2Ugd2FpdCBmb3IgYSBjb25zb2xlIHRvIGFwcGVhciwgYW5kIHRoZW4gdHJ5IGFnYWluLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRNZXRob2RGYWN0b3J5KG1ldGhvZE5hbWUsIGxldmVsLCBsb2dnZXJOYW1lKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIHJldHVybiByZWFsTWV0aG9kKG1ldGhvZE5hbWUpIHx8XG4gICAgICAgICAgICAgICBlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTG9nZ2VyKG5hbWUsIGRlZmF1bHRMZXZlbCwgZmFjdG9yeSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGN1cnJlbnRMZXZlbDtcbiAgICAgIGRlZmF1bHRMZXZlbCA9IGRlZmF1bHRMZXZlbCA9PSBudWxsID8gXCJXQVJOXCIgOiBkZWZhdWx0TGV2ZWw7XG5cbiAgICAgIHZhciBzdG9yYWdlS2V5ID0gXCJsb2dsZXZlbFwiO1xuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHN0b3JhZ2VLZXkgKz0gXCI6XCIgKyBuYW1lO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICBzdG9yYWdlS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwZXJzaXN0TGV2ZWxJZlBvc3NpYmxlKGxldmVsTnVtKSB7XG4gICAgICAgICAgdmFyIGxldmVsTmFtZSA9IChsb2dNZXRob2RzW2xldmVsTnVtXSB8fCAnc2lsZW50JykudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRUeXBlIHx8ICFzdG9yYWdlS2V5KSByZXR1cm47XG5cbiAgICAgICAgICAvLyBVc2UgbG9jYWxTdG9yYWdlIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Vbc3RvcmFnZUtleV0gPSBsZXZlbE5hbWU7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAvLyBVc2Ugc2Vzc2lvbiBjb29raWUgYXMgZmFsbGJhY2tcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RvcmFnZUtleSkgKyBcIj1cIiArIGxldmVsTmFtZSArIFwiO1wiO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0UGVyc2lzdGVkTGV2ZWwoKSB7XG4gICAgICAgICAgdmFyIHN0b3JlZExldmVsO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZFR5cGUgfHwgIXN0b3JhZ2VLZXkpIHJldHVybjtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHN0b3JlZExldmVsID0gd2luZG93LmxvY2FsU3RvcmFnZVtzdG9yYWdlS2V5XTtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG5cbiAgICAgICAgICAvLyBGYWxsYmFjayB0byBjb29raWVzIGlmIGxvY2FsIHN0b3JhZ2UgZ2l2ZXMgdXMgbm90aGluZ1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3RvcmVkTGV2ZWwgPT09IHVuZGVmaW5lZFR5cGUpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSB3aW5kb3cuZG9jdW1lbnQuY29va2llO1xuICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gY29va2llLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0b3JhZ2VLZXkpICsgXCI9XCIpO1xuICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlZExldmVsID0gL14oW147XSspLy5leGVjKGNvb2tpZS5zbGljZShsb2NhdGlvbikpWzFdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhlIHN0b3JlZCBsZXZlbCBpcyBub3QgdmFsaWQsIHRyZWF0IGl0IGFzIGlmIG5vdGhpbmcgd2FzIHN0b3JlZC5cbiAgICAgICAgICBpZiAoc2VsZi5sZXZlbHNbc3RvcmVkTGV2ZWxdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc3RvcmVkTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0b3JlZExldmVsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGVhclBlcnNpc3RlZExldmVsKCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRUeXBlIHx8ICFzdG9yYWdlS2V5KSByZXR1cm47XG5cbiAgICAgICAgICAvLyBVc2UgbG9jYWxTdG9yYWdlIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlS2V5KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cblxuICAgICAgICAgIC8vIFVzZSBzZXNzaW9uIGNvb2tpZSBhcyBmYWxsYmFja1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5jb29raWUgPVxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdG9yYWdlS2V5KSArIFwiPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQ1wiO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge31cbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAqXG4gICAgICAgKiBQdWJsaWMgbG9nZ2VyIEFQSSAtIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcGltdGVycnkvbG9nbGV2ZWwgZm9yIGRldGFpbHNcbiAgICAgICAqXG4gICAgICAgKi9cblxuICAgICAgc2VsZi5uYW1lID0gbmFtZTtcblxuICAgICAgc2VsZi5sZXZlbHMgPSB7IFwiVFJBQ0VcIjogMCwgXCJERUJVR1wiOiAxLCBcIklORk9cIjogMiwgXCJXQVJOXCI6IDMsXG4gICAgICAgICAgXCJFUlJPUlwiOiA0LCBcIlNJTEVOVFwiOiA1fTtcblxuICAgICAgc2VsZi5tZXRob2RGYWN0b3J5ID0gZmFjdG9yeSB8fCBkZWZhdWx0TWV0aG9kRmFjdG9yeTtcblxuICAgICAgc2VsZi5nZXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudExldmVsO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5zZXRMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCwgcGVyc2lzdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwic3RyaW5nXCIgJiYgc2VsZi5sZXZlbHNbbGV2ZWwudG9VcHBlckNhc2UoKV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBsZXZlbCA9IHNlbGYubGV2ZWxzW2xldmVsLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGxldmVsID09PSBcIm51bWJlclwiICYmIGxldmVsID49IDAgJiYgbGV2ZWwgPD0gc2VsZi5sZXZlbHMuU0lMRU5UKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRMZXZlbCA9IGxldmVsO1xuICAgICAgICAgICAgICBpZiAocGVyc2lzdCAhPT0gZmFsc2UpIHsgIC8vIGRlZmF1bHRzIHRvIHRydWVcbiAgICAgICAgICAgICAgICAgIHBlcnNpc3RMZXZlbElmUG9zc2libGUobGV2ZWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlcGxhY2VMb2dnaW5nTWV0aG9kcy5jYWxsKHNlbGYsIGxldmVsLCBuYW1lKTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSB1bmRlZmluZWRUeXBlICYmIGxldmVsIDwgc2VsZi5sZXZlbHMuU0lMRU5UKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBjb25zb2xlIGF2YWlsYWJsZSBmb3IgbG9nZ2luZ1wiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgXCJsb2cuc2V0TGV2ZWwoKSBjYWxsZWQgd2l0aCBpbnZhbGlkIGxldmVsOiBcIiArIGxldmVsO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNlbGYuc2V0RGVmYXVsdExldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICAgICAgZGVmYXVsdExldmVsID0gbGV2ZWw7XG4gICAgICAgICAgaWYgKCFnZXRQZXJzaXN0ZWRMZXZlbCgpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0TGV2ZWwobGV2ZWwsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzZWxmLnJlc2V0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5zZXRMZXZlbChkZWZhdWx0TGV2ZWwsIGZhbHNlKTtcbiAgICAgICAgICBjbGVhclBlcnNpc3RlZExldmVsKCk7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmVuYWJsZUFsbCA9IGZ1bmN0aW9uKHBlcnNpc3QpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKHNlbGYubGV2ZWxzLlRSQUNFLCBwZXJzaXN0KTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuZGlzYWJsZUFsbCA9IGZ1bmN0aW9uKHBlcnNpc3QpIHtcbiAgICAgICAgICBzZWxmLnNldExldmVsKHNlbGYubGV2ZWxzLlNJTEVOVCwgcGVyc2lzdCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBJbml0aWFsaXplIHdpdGggdGhlIHJpZ2h0IGxldmVsXG4gICAgICB2YXIgaW5pdGlhbExldmVsID0gZ2V0UGVyc2lzdGVkTGV2ZWwoKTtcbiAgICAgIGlmIChpbml0aWFsTGV2ZWwgPT0gbnVsbCkge1xuICAgICAgICAgIGluaXRpYWxMZXZlbCA9IGRlZmF1bHRMZXZlbDtcbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0TGV2ZWwoaW5pdGlhbExldmVsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKlxuICAgICAqIFRvcC1sZXZlbCBBUElcbiAgICAgKlxuICAgICAqL1xuXG4gICAgdmFyIGRlZmF1bHRMb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG5cbiAgICB2YXIgX2xvZ2dlcnNCeU5hbWUgPSB7fTtcbiAgICBkZWZhdWx0TG9nZ2VyLmdldExvZ2dlciA9IGZ1bmN0aW9uIGdldExvZ2dlcihuYW1lKSB7XG4gICAgICAgIGlmICgodHlwZW9mIG5hbWUgIT09IFwic3ltYm9sXCIgJiYgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHx8IG5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3Qgc3VwcGx5IGEgbmFtZSB3aGVuIGNyZWF0aW5nIGEgbG9nZ2VyLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXTtcbiAgICAgICAgaWYgKCFsb2dnZXIpIHtcbiAgICAgICAgICBsb2dnZXIgPSBfbG9nZ2Vyc0J5TmFtZVtuYW1lXSA9IG5ldyBMb2dnZXIoXG4gICAgICAgICAgICBuYW1lLCBkZWZhdWx0TG9nZ2VyLmdldExldmVsKCksIGRlZmF1bHRMb2dnZXIubWV0aG9kRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9O1xuXG4gICAgLy8gR3JhYiB0aGUgY3VycmVudCBnbG9iYWwgbG9nIHZhcmlhYmxlIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgdmFyIF9sb2cgPSAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSkgPyB3aW5kb3cubG9nIDogdW5kZWZpbmVkO1xuICAgIGRlZmF1bHRMb2dnZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkVHlwZSAmJlxuICAgICAgICAgICAgICAgd2luZG93LmxvZyA9PT0gZGVmYXVsdExvZ2dlcikge1xuICAgICAgICAgICAgd2luZG93LmxvZyA9IF9sb2c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdExvZ2dlcjtcbiAgICB9O1xuXG4gICAgZGVmYXVsdExvZ2dlci5nZXRMb2dnZXJzID0gZnVuY3Rpb24gZ2V0TG9nZ2VycygpIHtcbiAgICAgICAgcmV0dXJuIF9sb2dnZXJzQnlOYW1lO1xuICAgIH07XG5cbiAgICAvLyBFUzYgZGVmYXVsdCBleHBvcnQsIGZvciBjb21wYXRpYmlsaXR5XG4gICAgZGVmYXVsdExvZ2dlclsnZGVmYXVsdCddID0gZGVmYXVsdExvZ2dlcjtcblxuICAgIHJldHVybiBkZWZhdWx0TG9nZ2VyO1xufSkpO1xuIiwidmFyIHdyYXBweSA9IHJlcXVpcmUoJ3dyYXBweScpXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweShvbmNlKVxubW9kdWxlLmV4cG9ydHMuc3RyaWN0ID0gd3JhcHB5KG9uY2VTdHJpY3QpXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZVN0cmljdCcsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2VTdHJpY3QodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKSByZXR1cm4gZi52YWx1ZVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cblxuZnVuY3Rpb24gb25jZVN0cmljdCAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGYub25jZUVycm9yKVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIHZhciBuYW1lID0gZm4ubmFtZSB8fCAnRnVuY3Rpb24gd3JhcHBlZCB3aXRoIGBvbmNlYCdcbiAgZi5vbmNlRXJyb3IgPSBuYW1lICsgXCIgc2hvdWxkbid0IGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZVwiXG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fFxuICAgICFwcm9jZXNzLnZlcnNpb24gfHxcbiAgICBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjAuJykgPT09IDAgfHxcbiAgICBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjEuJykgPT09IDAgJiYgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YxLjguJykgIT09IDApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG5leHRUaWNrOiBuZXh0VGljayB9O1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzXG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGZuLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNhbGxiYWNrXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBhcmdzLCBpO1xuICBzd2l0Y2ggKGxlbikge1xuICBjYXNlIDA6XG4gIGNhc2UgMTpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gIGNhc2UgMjpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tPbmUoKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEpO1xuICAgIH0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrVHdvKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyKTtcbiAgICB9KTtcbiAgY2FzZSA0OlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja1RocmVlKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB9KTtcbiAgZGVmYXVsdDpcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYXJncy5sZW5ndGgpIHtcbiAgICAgIGFyZ3NbaSsrXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrKCkge1xuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwidmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJylcbnZhciBlb3MgPSByZXF1aXJlKCdlbmQtb2Ytc3RyZWFtJylcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJykgLy8gd2Ugb25seSBuZWVkIGZzIHRvIGdldCB0aGUgUmVhZFN0cmVhbSBhbmQgV3JpdGVTdHJlYW0gcHJvdG90eXBlc1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgYW5jaWVudCA9IC9edj9cXC4wLy50ZXN0KHByb2Nlc3MudmVyc2lvbilcblxudmFyIGlzRm4gPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG52YXIgaXNGUyA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgaWYgKCFhbmNpZW50KSByZXR1cm4gZmFsc2UgLy8gbmV3ZXIgbm9kZSB2ZXJzaW9uIGRvIG5vdCBuZWVkIHRvIGNhcmUgYWJvdXQgZnMgaXMgYSBzcGVjaWFsIHdheVxuICBpZiAoIWZzKSByZXR1cm4gZmFsc2UgLy8gYnJvd3NlclxuICByZXR1cm4gKHN0cmVhbSBpbnN0YW5jZW9mIChmcy5SZWFkU3RyZWFtIHx8IG5vb3ApIHx8IHN0cmVhbSBpbnN0YW5jZW9mIChmcy5Xcml0ZVN0cmVhbSB8fCBub29wKSkgJiYgaXNGbihzdHJlYW0uY2xvc2UpXG59XG5cbnZhciBpc1JlcXVlc3QgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHJldHVybiBzdHJlYW0uc2V0SGVhZGVyICYmIGlzRm4oc3RyZWFtLmFib3J0KVxufVxuXG52YXIgZGVzdHJveWVyID0gZnVuY3Rpb24gKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrKVxuXG4gIHZhciBjbG9zZWQgPSBmYWxzZVxuICBzdHJlYW0ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlZCA9IHRydWVcbiAgfSlcblxuICBlb3Moc3RyZWFtLCB7cmVhZGFibGU6IHJlYWRpbmcsIHdyaXRhYmxlOiB3cml0aW5nfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgY2xvc2VkID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgfSlcblxuICB2YXIgZGVzdHJveWVkID0gZmFsc2VcbiAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoY2xvc2VkKSByZXR1cm5cbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm5cbiAgICBkZXN0cm95ZWQgPSB0cnVlXG5cbiAgICBpZiAoaXNGUyhzdHJlYW0pKSByZXR1cm4gc3RyZWFtLmNsb3NlKG5vb3ApIC8vIHVzZSBjbG9zZSBmb3IgZnMgc3RyZWFtcyB0byBhdm9pZCBmZCBsZWFrc1xuICAgIGlmIChpc1JlcXVlc3Qoc3RyZWFtKSkgcmV0dXJuIHN0cmVhbS5hYm9ydCgpIC8vIHJlcXVlc3QuZGVzdHJveSBqdXN0IGRvIC5lbmQgLSAuYWJvcnQgaXMgd2hhdCB3ZSB3YW50XG5cbiAgICBpZiAoaXNGbihzdHJlYW0uZGVzdHJveSkpIHJldHVybiBzdHJlYW0uZGVzdHJveSgpXG5cbiAgICBjYWxsYmFjayhlcnIgfHwgbmV3IEVycm9yKCdzdHJlYW0gd2FzIGRlc3Ryb3llZCcpKVxuICB9XG59XG5cbnZhciBjYWxsID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuKClcbn1cblxudmFyIHBpcGUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgcmV0dXJuIGZyb20ucGlwZSh0bylcbn1cblxudmFyIHB1bXAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHJlYW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICB2YXIgY2FsbGJhY2sgPSBpc0ZuKHN0cmVhbXNbc3RyZWFtcy5sZW5ndGggLSAxXSB8fCBub29wKSAmJiBzdHJlYW1zLnBvcCgpIHx8IG5vb3BcblxuICBpZiAoQXJyYXkuaXNBcnJheShzdHJlYW1zWzBdKSkgc3RyZWFtcyA9IHN0cmVhbXNbMF1cbiAgaWYgKHN0cmVhbXMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKCdwdW1wIHJlcXVpcmVzIHR3byBzdHJlYW1zIHBlciBtaW5pbXVtJylcblxuICB2YXIgZXJyb3JcbiAgdmFyIGRlc3Ryb3lzID0gc3RyZWFtcy5tYXAoZnVuY3Rpb24gKHN0cmVhbSwgaSkge1xuICAgIHZhciByZWFkaW5nID0gaSA8IHN0cmVhbXMubGVuZ3RoIC0gMVxuICAgIHZhciB3cml0aW5nID0gaSA+IDBcbiAgICByZXR1cm4gZGVzdHJveWVyKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKCFlcnJvcikgZXJyb3IgPSBlcnJcbiAgICAgIGlmIChlcnIpIGRlc3Ryb3lzLmZvckVhY2goY2FsbClcbiAgICAgIGlmIChyZWFkaW5nKSByZXR1cm5cbiAgICAgIGRlc3Ryb3lzLmZvckVhY2goY2FsbClcbiAgICAgIGNhbGxiYWNrKGVycm9yKVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIHN0cmVhbXMucmVkdWNlKHBpcGUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHVtcFxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gYSBkdXBsZXggc3RyZWFtIGlzIGp1c3QgYSBzdHJlYW0gdGhhdCBpcyBib3RoIHJlYWRhYmxlIGFuZCB3cml0YWJsZS5cbi8vIFNpbmNlIEpTIGRvZXNuJ3QgaGF2ZSBtdWx0aXBsZSBwcm90b3R5cGFsIGluaGVyaXRhbmNlLCB0aGlzIGNsYXNzXG4vLyBwcm90b3R5cGFsbHkgaW5oZXJpdHMgZnJvbSBSZWFkYWJsZSwgYW5kIHRoZW4gcGFyYXNpdGljYWxseSBmcm9tXG4vLyBXcml0YWJsZS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgfXJldHVybiBrZXlzO1xufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1cGxleDtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgUmVhZGFibGUgPSByZXF1aXJlKCcuL19zdHJlYW1fcmVhZGFibGUnKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoJy4vX3N0cmVhbV93cml0YWJsZScpO1xuXG51dGlsLmluaGVyaXRzKER1cGxleCwgUmVhZGFibGUpO1xuXG57XG4gIC8vIGF2b2lkIHNjb3BlIGNyZWVwLCB0aGUga2V5cyBhcnJheSBjYW4gdGhlbiBiZSBjb2xsZWN0ZWRcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFdyaXRhYmxlLnByb3RvdHlwZSk7XG4gIGZvciAodmFyIHYgPSAwOyB2IDwga2V5cy5sZW5ndGg7IHYrKykge1xuICAgIHZhciBtZXRob2QgPSBrZXlzW3ZdO1xuICAgIGlmICghRHVwbGV4LnByb3RvdHlwZVttZXRob2RdKSBEdXBsZXgucHJvdG90eXBlW21ldGhvZF0gPSBXcml0YWJsZS5wcm90b3R5cGVbbWV0aG9kXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBEdXBsZXgob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRHVwbGV4KSkgcmV0dXJuIG5ldyBEdXBsZXgob3B0aW9ucyk7XG5cbiAgUmVhZGFibGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgV3JpdGFibGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlYWRhYmxlID09PSBmYWxzZSkgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMud3JpdGFibGUgPT09IGZhbHNlKSB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgdGhpcy5hbGxvd0hhbGZPcGVuID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hbGxvd0hhbGZPcGVuID09PSBmYWxzZSkgdGhpcy5hbGxvd0hhbGZPcGVuID0gZmFsc2U7XG5cbiAgdGhpcy5vbmNlKCdlbmQnLCBvbmVuZCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnd3JpdGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcblxuLy8gdGhlIG5vLWhhbGYtb3BlbiBlbmZvcmNlclxuZnVuY3Rpb24gb25lbmQoKSB7XG4gIC8vIGlmIHdlIGFsbG93IGhhbGYtb3BlbiBzdGF0ZSwgb3IgaWYgdGhlIHdyaXRhYmxlIHNpZGUgZW5kZWQsXG4gIC8vIHRoZW4gd2UncmUgb2suXG4gIGlmICh0aGlzLmFsbG93SGFsZk9wZW4gfHwgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRlZCkgcmV0dXJuO1xuXG4gIC8vIG5vIG1vcmUgZGF0YSBjYW4gYmUgd3JpdHRlbi5cbiAgLy8gQnV0IGFsbG93IG1vcmUgd3JpdGVzIHRvIGhhcHBlbiBpbiB0aGlzIHRpY2suXG4gIHBuYS5uZXh0VGljayhvbkVuZE5ULCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gb25FbmROVChzZWxmKSB7XG4gIHNlbGYuZW5kKCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnZGVzdHJveWVkJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX3dyaXRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgJiYgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gd2UgaWdub3JlIHRoZSB2YWx1ZSBpZiB0aGUgc3RyZWFtXG4gICAgLy8gaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5fd3JpdGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhlIHVzZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIG1hbmFnaW5nIGRlc3Ryb3llZFxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgfVxufSk7XG5cbkR1cGxleC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB0aGlzLnB1c2gobnVsbCk7XG4gIHRoaXMuZW5kKCk7XG5cbiAgcG5hLm5leHRUaWNrKGNiLCBlcnIpO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gYSBwYXNzdGhyb3VnaCBzdHJlYW0uXG4vLyBiYXNpY2FsbHkganVzdCB0aGUgbW9zdCBtaW5pbWFsIHNvcnQgb2YgVHJhbnNmb3JtIHN0cmVhbS5cbi8vIEV2ZXJ5IHdyaXR0ZW4gY2h1bmsgZ2V0cyBvdXRwdXQgYXMtaXMuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzVGhyb3VnaDtcblxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vX3N0cmVhbV90cmFuc2Zvcm0nKTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFBhc3NUaHJvdWdoLCBUcmFuc2Zvcm0pO1xuXG5mdW5jdGlvbiBQYXNzVGhyb3VnaChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQYXNzVGhyb3VnaCkpIHJldHVybiBuZXcgUGFzc1Rocm91Z2gob3B0aW9ucyk7XG5cbiAgVHJhbnNmb3JtLmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cblBhc3NUaHJvdWdoLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobnVsbCwgY2h1bmspO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWRhYmxlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBEdXBsZXg7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuUmVhZGFibGUuUmVhZGFibGVTdGF0ZSA9IFJlYWRhYmxlU3RhdGU7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRUUgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbnZhciBFRWxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiAoZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lcnModHlwZSkubGVuZ3RoO1xufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIFN0cmVhbSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9zdHJlYW0nKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgT3VyVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5IHx8IGZ1bmN0aW9uICgpIHt9O1xuZnVuY3Rpb24gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuaykge1xuICByZXR1cm4gQnVmZmVyLmZyb20oY2h1bmspO1xufVxuZnVuY3Rpb24gX2lzVWludDhBcnJheShvYmopIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihvYmopIHx8IG9iaiBpbnN0YW5jZW9mIE91clVpbnQ4QXJyYXk7XG59XG5cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSBPYmplY3QuY3JlYXRlKHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgZGVidWdVdGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGRlYnVnID0gdm9pZCAwO1xuaWYgKGRlYnVnVXRpbCAmJiBkZWJ1Z1V0aWwuZGVidWdsb2cpIHtcbiAgZGVidWcgPSBkZWJ1Z1V0aWwuZGVidWdsb2coJ3N0cmVhbScpO1xufSBlbHNlIHtcbiAgZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcbn1cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyTGlzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0Jyk7XG52YXIgZGVzdHJveUltcGwgPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvZGVzdHJveScpO1xudmFyIFN0cmluZ0RlY29kZXI7XG5cbnV0aWwuaW5oZXJpdHMoUmVhZGFibGUsIFN0cmVhbSk7XG5cbnZhciBrUHJveHlFdmVudHMgPSBbJ2Vycm9yJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knLCAncGF1c2UnLCAncmVzdW1lJ107XG5cbmZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4pIHtcbiAgLy8gU2FkbHkgdGhpcyBpcyBub3QgY2FjaGVhYmxlIGFzIHNvbWUgbGlicmFyaWVzIGJ1bmRsZSB0aGVpciBvd25cbiAgLy8gZXZlbnQgZW1pdHRlciBpbXBsZW1lbnRhdGlvbiB3aXRoIHRoZW0uXG4gIGlmICh0eXBlb2YgZW1pdHRlci5wcmVwZW5kTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHJldHVybiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lcihldmVudCwgZm4pO1xuXG4gIC8vIFRoaXMgaXMgYSBoYWNrIHRvIG1ha2Ugc3VyZSB0aGF0IG91ciBlcnJvciBoYW5kbGVyIGlzIGF0dGFjaGVkIGJlZm9yZSBhbnlcbiAgLy8gdXNlcmxhbmQgb25lcy4gIE5FVkVSIERPIFRISVMuIFRoaXMgaXMgaGVyZSBvbmx5IGJlY2F1c2UgdGhpcyBjb2RlIG5lZWRzXG4gIC8vIHRvIGNvbnRpbnVlIHRvIHdvcmsgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiBOb2RlLmpzIHRoYXQgZG8gbm90IGluY2x1ZGVcbiAgLy8gdGhlIHByZXBlbmRMaXN0ZW5lcigpIG1ldGhvZC4gVGhlIGdvYWwgaXMgdG8gZXZlbnR1YWxseSByZW1vdmUgdGhpcyBoYWNrLlxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW2V2ZW50XSkgZW1pdHRlci5vbihldmVudCwgZm4pO2Vsc2UgaWYgKGlzQXJyYXkoZW1pdHRlci5fZXZlbnRzW2V2ZW50XSkpIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0udW5zaGlmdChmbik7ZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZlbnRdID0gW2ZuLCBlbWl0dGVyLl9ldmVudHNbZXZlbnRdXTtcbn1cblxuZnVuY3Rpb24gUmVhZGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0pIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBEdXBsZXggc3RyZWFtcyBhcmUgYm90aCByZWFkYWJsZSBhbmQgd3JpdGFibGUsIGJ1dCBzaGFyZVxuICAvLyB0aGUgc2FtZSBvcHRpb25zIG9iamVjdC5cbiAgLy8gSG93ZXZlciwgc29tZSBjYXNlcyByZXF1aXJlIHNldHRpbmcgb3B0aW9ucyB0byBkaWZmZXJlbnRcbiAgLy8gdmFsdWVzIGZvciB0aGUgcmVhZGFibGUgYW5kIHRoZSB3cml0YWJsZSBzaWRlcyBvZiB0aGUgZHVwbGV4IHN0cmVhbS5cbiAgLy8gVGhlc2Ugb3B0aW9ucyBjYW4gYmUgcHJvdmlkZWQgc2VwYXJhdGVseSBhcyByZWFkYWJsZVhYWCBhbmQgd3JpdGFibGVYWFguXG4gIHZhciBpc0R1cGxleCA9IHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleDtcblxuICAvLyBvYmplY3Qgc3RyZWFtIGZsYWcuIFVzZWQgdG8gbWFrZSByZWFkKG4pIGlnbm9yZSBuIGFuZCB0b1xuICAvLyBtYWtlIGFsbCB0aGUgYnVmZmVyIG1lcmdpbmcgYW5kIGxlbmd0aCBjaGVja3MgZ28gYXdheVxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcblxuICBpZiAoaXNEdXBsZXgpIHRoaXMub2JqZWN0TW9kZSA9IHRoaXMub2JqZWN0TW9kZSB8fCAhIW9wdGlvbnMucmVhZGFibGVPYmplY3RNb2RlO1xuXG4gIC8vIHRoZSBwb2ludCBhdCB3aGljaCBpdCBzdG9wcyBjYWxsaW5nIF9yZWFkKCkgdG8gZmlsbCB0aGUgYnVmZmVyXG4gIC8vIE5vdGU6IDAgaXMgYSB2YWxpZCB2YWx1ZSwgbWVhbnMgXCJkb24ndCBjYWxsIF9yZWFkIHByZWVtcHRpdmVseSBldmVyXCJcbiAgdmFyIGh3bSA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgdmFyIHJlYWRhYmxlSHdtID0gb3B0aW9ucy5yZWFkYWJsZUhpZ2hXYXRlck1hcms7XG4gIHZhciBkZWZhdWx0SHdtID0gdGhpcy5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG5cbiAgaWYgKGh3bSB8fCBod20gPT09IDApIHRoaXMuaGlnaFdhdGVyTWFyayA9IGh3bTtlbHNlIGlmIChpc0R1cGxleCAmJiAocmVhZGFibGVId20gfHwgcmVhZGFibGVId20gPT09IDApKSB0aGlzLmhpZ2hXYXRlck1hcmsgPSByZWFkYWJsZUh3bTtlbHNlIHRoaXMuaGlnaFdhdGVyTWFyayA9IGRlZmF1bHRId207XG5cbiAgLy8gY2FzdCB0byBpbnRzLlxuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBNYXRoLmZsb29yKHRoaXMuaGlnaFdhdGVyTWFyayk7XG5cbiAgLy8gQSBsaW5rZWQgbGlzdCBpcyB1c2VkIHRvIHN0b3JlIGRhdGEgY2h1bmtzIGluc3RlYWQgb2YgYW4gYXJyYXkgYmVjYXVzZSB0aGVcbiAgLy8gbGlua2VkIGxpc3QgY2FuIHJlbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBiZWdpbm5pbmcgZmFzdGVyIHRoYW5cbiAgLy8gYXJyYXkuc2hpZnQoKVxuICB0aGlzLmJ1ZmZlciA9IG5ldyBCdWZmZXJMaXN0KCk7XG4gIHRoaXMubGVuZ3RoID0gMDtcbiAgdGhpcy5waXBlcyA9IG51bGw7XG4gIHRoaXMucGlwZXNDb3VudCA9IDA7XG4gIHRoaXMuZmxvd2luZyA9IG51bGw7XG4gIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgdGhpcy5lbmRFbWl0dGVkID0gZmFsc2U7XG4gIHRoaXMucmVhZGluZyA9IGZhbHNlO1xuXG4gIC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIGV2ZW50ICdyZWFkYWJsZScvJ2RhdGEnIGlzIGVtaXR0ZWRcbiAgLy8gaW1tZWRpYXRlbHksIG9yIG9uIGEgbGF0ZXIgdGljay4gIFdlIHNldCB0aGlzIHRvIHRydWUgYXQgZmlyc3QsIGJlY2F1c2VcbiAgLy8gYW55IGFjdGlvbnMgdGhhdCBzaG91bGRuJ3QgaGFwcGVuIHVudGlsIFwibGF0ZXJcIiBzaG91bGQgZ2VuZXJhbGx5IGFsc29cbiAgLy8gbm90IGhhcHBlbiBiZWZvcmUgdGhlIGZpcnN0IHJlYWQgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyB3aGVuZXZlciB3ZSByZXR1cm4gbnVsbCwgdGhlbiB3ZSBzZXQgYSBmbGFnIHRvIHNheVxuICAvLyB0aGF0IHdlJ3JlIGF3YWl0aW5nIGEgJ3JlYWRhYmxlJyBldmVudCBlbWlzc2lvbi5cbiAgdGhpcy5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZUxpc3RlbmluZyA9IGZhbHNlO1xuICB0aGlzLnJlc3VtZVNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gIC8vIGhhcyBpdCBiZWVuIGRlc3Ryb3llZFxuICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIHRoZSBudW1iZXIgb2Ygd3JpdGVycyB0aGF0IGFyZSBhd2FpdGluZyBhIGRyYWluIGV2ZW50IGluIC5waXBlKClzXG4gIHRoaXMuYXdhaXREcmFpbiA9IDA7XG5cbiAgLy8gaWYgdHJ1ZSwgYSBtYXliZVJlYWRNb3JlIGhhcyBiZWVuIHNjaGVkdWxlZFxuICB0aGlzLnJlYWRpbmdNb3JlID0gZmFsc2U7XG5cbiAgdGhpcy5kZWNvZGVyID0gbnVsbDtcbiAgdGhpcy5lbmNvZGluZyA9IG51bGw7XG4gIGlmIChvcHRpb25zLmVuY29kaW5nKSB7XG4gICAgaWYgKCFTdHJpbmdEZWNvZGVyKSBTdHJpbmdEZWNvZGVyID0gcmVxdWlyZSgnc3RyaW5nX2RlY29kZXIvJykuU3RyaW5nRGVjb2RlcjtcbiAgICB0aGlzLmRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihvcHRpb25zLmVuY29kaW5nKTtcbiAgICB0aGlzLmVuY29kaW5nID0gb3B0aW9ucy5lbmNvZGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBSZWFkYWJsZShvcHRpb25zKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlYWRhYmxlKSkgcmV0dXJuIG5ldyBSZWFkYWJsZShvcHRpb25zKTtcblxuICB0aGlzLl9yZWFkYWJsZVN0YXRlID0gbmV3IFJlYWRhYmxlU3RhdGUob3B0aW9ucywgdGhpcyk7XG5cbiAgLy8gbGVnYWN5XG4gIHRoaXMucmVhZGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnJlYWQgPT09ICdmdW5jdGlvbicpIHRoaXMuX3JlYWQgPSBvcHRpb25zLnJlYWQ7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZGVzdHJveSA9IG9wdGlvbnMuZGVzdHJveTtcbiAgfVxuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGUucHJvdG90eXBlLCAnZGVzdHJveWVkJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyB3ZSBpZ25vcmUgdGhlIHZhbHVlIGlmIHRoZSBzdHJlYW1cbiAgICAvLyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYgKCF0aGlzLl9yZWFkYWJsZVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhlIHVzZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIG1hbmFnaW5nIGRlc3Ryb3llZFxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gIH1cbn0pO1xuXG5SZWFkYWJsZS5wcm90b3R5cGUuZGVzdHJveSA9IGRlc3Ryb3lJbXBsLmRlc3Ryb3k7XG5SZWFkYWJsZS5wcm90b3R5cGUuX3VuZGVzdHJveSA9IGRlc3Ryb3lJbXBsLnVuZGVzdHJveTtcblJlYWRhYmxlLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIHRoaXMucHVzaChudWxsKTtcbiAgY2IoZXJyKTtcbn07XG5cbi8vIE1hbnVhbGx5IHNob3ZlIHNvbWV0aGluZyBpbnRvIHRoZSByZWFkKCkgYnVmZmVyLlxuLy8gVGhpcyByZXR1cm5zIHRydWUgaWYgdGhlIGhpZ2hXYXRlck1hcmsgaGFzIG5vdCBiZWVuIGhpdCB5ZXQsXG4vLyBzaW1pbGFyIHRvIGhvdyBXcml0YWJsZS53cml0ZSgpIHJldHVybnMgdHJ1ZSBpZiB5b3Ugc2hvdWxkXG4vLyB3cml0ZSgpIHNvbWUgbW9yZS5cblJlYWRhYmxlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZykge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgc2tpcENodW5rQ2hlY2s7XG5cbiAgaWYgKCFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5jb2RpbmcgfHwgc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuICAgICAgaWYgKGVuY29kaW5nICE9PSBzdGF0ZS5lbmNvZGluZykge1xuICAgICAgICBjaHVuayA9IEJ1ZmZlci5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gICAgICAgIGVuY29kaW5nID0gJyc7XG4gICAgICB9XG4gICAgICBza2lwQ2h1bmtDaGVjayA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNraXBDaHVua0NoZWNrID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIGNodW5rLCBlbmNvZGluZywgZmFsc2UsIHNraXBDaHVua0NoZWNrKTtcbn07XG5cbi8vIFVuc2hpZnQgc2hvdWxkICphbHdheXMqIGJlIHNvbWV0aGluZyBkaXJlY3RseSBvdXQgb2YgcmVhZCgpXG5SZWFkYWJsZS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICByZXR1cm4gcmVhZGFibGVBZGRDaHVuayh0aGlzLCBjaHVuaywgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xufTtcblxuZnVuY3Rpb24gcmVhZGFibGVBZGRDaHVuayhzdHJlYW0sIGNodW5rLCBlbmNvZGluZywgYWRkVG9Gcm9udCwgc2tpcENodW5rQ2hlY2spIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBpZiAoY2h1bmsgPT09IG51bGwpIHtcbiAgICBzdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgb25Fb2ZDaHVuayhzdHJlYW0sIHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKCFza2lwQ2h1bmtDaGVjaykgZXIgPSBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKTtcbiAgICBpZiAoZXIpIHtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLm9iamVjdE1vZGUgfHwgY2h1bmsgJiYgY2h1bmsubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgIXN0YXRlLm9iamVjdE1vZGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGNodW5rKSAhPT0gQnVmZmVyLnByb3RvdHlwZSkge1xuICAgICAgICBjaHVuayA9IF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWRkVG9Gcm9udCkge1xuICAgICAgICBpZiAoc3RhdGUuZW5kRW1pdHRlZCkgc3RyZWFtLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdzdHJlYW0udW5zaGlmdCgpIGFmdGVyIGVuZCBldmVudCcpKTtlbHNlIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZW5kZWQpIHtcbiAgICAgICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdzdHJlYW0ucHVzaCgpIGFmdGVyIEVPRicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIWVuY29kaW5nKSB7XG4gICAgICAgICAgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcbiAgICAgICAgICBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuay5sZW5ndGggIT09IDApIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBmYWxzZSk7ZWxzZSBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFhZGRUb0Zyb250KSB7XG4gICAgICBzdGF0ZS5yZWFkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5lZWRNb3JlRGF0YShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBhZGRUb0Zyb250KSB7XG4gIGlmIChzdGF0ZS5mbG93aW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiAhc3RhdGUuc3luYykge1xuICAgIHN0cmVhbS5lbWl0KCdkYXRhJywgY2h1bmspO1xuICAgIHN0cmVhbS5yZWFkKDApO1xuICB9IGVsc2Uge1xuICAgIC8vIHVwZGF0ZSB0aGUgYnVmZmVyIGluZm8uXG4gICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIGlmIChhZGRUb0Zyb250KSBzdGF0ZS5idWZmZXIudW5zaGlmdChjaHVuayk7ZWxzZSBzdGF0ZS5idWZmZXIucHVzaChjaHVuayk7XG5cbiAgICBpZiAoc3RhdGUubmVlZFJlYWRhYmxlKSBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbiAgfVxuICBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKSB7XG4gIHZhciBlcjtcbiAgaWYgKCFfaXNVaW50OEFycmF5KGNodW5rKSAmJiB0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmIGNodW5rICE9PSB1bmRlZmluZWQgJiYgIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbm9uLXN0cmluZy9idWZmZXIgY2h1bmsnKTtcbiAgfVxuICByZXR1cm4gZXI7XG59XG5cbi8vIGlmIGl0J3MgcGFzdCB0aGUgaGlnaCB3YXRlciBtYXJrLCB3ZSBjYW4gcHVzaCBpbiBzb21lIG1vcmUuXG4vLyBBbHNvLCBpZiB3ZSBoYXZlIG5vIGRhdGEgeWV0LCB3ZSBjYW4gc3RhbmQgc29tZVxuLy8gbW9yZSBieXRlcy4gIFRoaXMgaXMgdG8gd29yayBhcm91bmQgY2FzZXMgd2hlcmUgaHdtPTAsXG4vLyBzdWNoIGFzIHRoZSByZXBsLiAgQWxzbywgaWYgdGhlIHB1c2goKSB0cmlnZ2VyZWQgYVxuLy8gcmVhZGFibGUgZXZlbnQsIGFuZCB0aGUgdXNlciBjYWxsZWQgcmVhZChsYXJnZU51bWJlcikgc3VjaCB0aGF0XG4vLyBuZWVkUmVhZGFibGUgd2FzIHNldCwgdGhlbiB3ZSBvdWdodCB0byBwdXNoIG1vcmUsIHNvIHRoYXQgYW5vdGhlclxuLy8gJ3JlYWRhYmxlJyBldmVudCB3aWxsIGJlIHRyaWdnZXJlZC5cbmZ1bmN0aW9uIG5lZWRNb3JlRGF0YShzdGF0ZSkge1xuICByZXR1cm4gIXN0YXRlLmVuZGVkICYmIChzdGF0ZS5uZWVkUmVhZGFibGUgfHwgc3RhdGUubGVuZ3RoIDwgc3RhdGUuaGlnaFdhdGVyTWFyayB8fCBzdGF0ZS5sZW5ndGggPT09IDApO1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUuaXNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgPT09IGZhbHNlO1xufTtcblxuLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5SZWFkYWJsZS5wcm90b3R5cGUuc2V0RW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jKSB7XG4gIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKGVuYyk7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5jb2RpbmcgPSBlbmM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gRG9uJ3QgcmFpc2UgdGhlIGh3bSA+IDhNQlxudmFyIE1BWF9IV00gPSAweDgwMDAwMDtcbmZ1bmN0aW9uIGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pIHtcbiAgaWYgKG4gPj0gTUFYX0hXTSkge1xuICAgIG4gPSBNQVhfSFdNO1xuICB9IGVsc2Uge1xuICAgIC8vIEdldCB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyIG9mIDIgdG8gcHJldmVudCBpbmNyZWFzaW5nIGh3bSBleGNlc3NpdmVseSBpblxuICAgIC8vIHRpbnkgYW1vdW50c1xuICAgIG4tLTtcbiAgICBuIHw9IG4gPj4+IDE7XG4gICAgbiB8PSBuID4+PiAyO1xuICAgIG4gfD0gbiA+Pj4gNDtcbiAgICBuIHw9IG4gPj4+IDg7XG4gICAgbiB8PSBuID4+PiAxNjtcbiAgICBuKys7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gaG93TXVjaFRvUmVhZChuLCBzdGF0ZSkge1xuICBpZiAobiA8PSAwIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkgcmV0dXJuIDA7XG4gIGlmIChzdGF0ZS5vYmplY3RNb2RlKSByZXR1cm4gMTtcbiAgaWYgKG4gIT09IG4pIHtcbiAgICAvLyBPbmx5IGZsb3cgb25lIGJ1ZmZlciBhdCBhIHRpbWVcbiAgICBpZiAoc3RhdGUuZmxvd2luZyAmJiBzdGF0ZS5sZW5ndGgpIHJldHVybiBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhLmxlbmd0aDtlbHNlIHJldHVybiBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgLy8gSWYgd2UncmUgYXNraW5nIGZvciBtb3JlIHRoYW4gdGhlIGN1cnJlbnQgaHdtLCB0aGVuIHJhaXNlIHRoZSBod20uXG4gIGlmIChuID4gc3RhdGUuaGlnaFdhdGVyTWFyaykgc3RhdGUuaGlnaFdhdGVyTWFyayA9IGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pO1xuICBpZiAobiA8PSBzdGF0ZS5sZW5ndGgpIHJldHVybiBuO1xuICAvLyBEb24ndCBoYXZlIGVub3VnaFxuICBpZiAoIXN0YXRlLmVuZGVkKSB7XG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gc3RhdGUubGVuZ3RoO1xufVxuXG4vLyB5b3UgY2FuIG92ZXJyaWRlIGVpdGhlciB0aGlzIG1ldGhvZCwgb3IgdGhlIGFzeW5jIF9yZWFkKG4pIGJlbG93LlxuUmVhZGFibGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAobikge1xuICBkZWJ1ZygncmVhZCcsIG4pO1xuICBuID0gcGFyc2VJbnQobiwgMTApO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgbk9yaWcgPSBuO1xuXG4gIGlmIChuICE9PSAwKSBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcblxuICAvLyBpZiB3ZSdyZSBkb2luZyByZWFkKDApIHRvIHRyaWdnZXIgYSByZWFkYWJsZSBldmVudCwgYnV0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhIGJ1bmNoIG9mIGRhdGEgaW4gdGhlIGJ1ZmZlciwgdGhlbiBqdXN0IHRyaWdnZXJcbiAgLy8gdGhlICdyZWFkYWJsZScgZXZlbnQgYW5kIG1vdmUgb24uXG4gIGlmIChuID09PSAwICYmIHN0YXRlLm5lZWRSZWFkYWJsZSAmJiAoc3RhdGUubGVuZ3RoID49IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUuZW5kZWQpKSB7XG4gICAgZGVidWcoJ3JlYWQ6IGVtaXRSZWFkYWJsZScsIHN0YXRlLmxlbmd0aCwgc3RhdGUuZW5kZWQpO1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO2Vsc2UgZW1pdFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbiA9IGhvd011Y2hUb1JlYWQobiwgc3RhdGUpO1xuXG4gIC8vIGlmIHdlJ3ZlIGVuZGVkLCBhbmQgd2UncmUgbm93IGNsZWFyLCB0aGVuIGZpbmlzaCBpdCB1cC5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUuZW5kZWQpIHtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEFsbCB0aGUgYWN0dWFsIGNodW5rIGdlbmVyYXRpb24gbG9naWMgbmVlZHMgdG8gYmVcbiAgLy8gKmJlbG93KiB0aGUgY2FsbCB0byBfcmVhZC4gIFRoZSByZWFzb24gaXMgdGhhdCBpbiBjZXJ0YWluXG4gIC8vIHN5bnRoZXRpYyBzdHJlYW0gY2FzZXMsIHN1Y2ggYXMgcGFzc3Rocm91Z2ggc3RyZWFtcywgX3JlYWRcbiAgLy8gbWF5IGJlIGEgY29tcGxldGVseSBzeW5jaHJvbm91cyBvcGVyYXRpb24gd2hpY2ggbWF5IGNoYW5nZVxuICAvLyB0aGUgc3RhdGUgb2YgdGhlIHJlYWQgYnVmZmVyLCBwcm92aWRpbmcgZW5vdWdoIGRhdGEgd2hlblxuICAvLyBiZWZvcmUgdGhlcmUgd2FzICpub3QqIGVub3VnaC5cbiAgLy9cbiAgLy8gU28sIHRoZSBzdGVwcyBhcmU6XG4gIC8vIDEuIEZpZ3VyZSBvdXQgd2hhdCB0aGUgc3RhdGUgb2YgdGhpbmdzIHdpbGwgYmUgYWZ0ZXIgd2UgZG9cbiAgLy8gYSByZWFkIGZyb20gdGhlIGJ1ZmZlci5cbiAgLy9cbiAgLy8gMi4gSWYgdGhhdCByZXN1bHRpbmcgc3RhdGUgd2lsbCB0cmlnZ2VyIGEgX3JlYWQsIHRoZW4gY2FsbCBfcmVhZC5cbiAgLy8gTm90ZSB0aGF0IHRoaXMgbWF5IGJlIGFzeW5jaHJvbm91cywgb3Igc3luY2hyb25vdXMuICBZZXMsIGl0IGlzXG4gIC8vIGRlZXBseSB1Z2x5IHRvIHdyaXRlIEFQSXMgdGhpcyB3YXksIGJ1dCB0aGF0IHN0aWxsIGRvZXNuJ3QgbWVhblxuICAvLyB0aGF0IHRoZSBSZWFkYWJsZSBjbGFzcyBzaG91bGQgYmVoYXZlIGltcHJvcGVybHksIGFzIHN0cmVhbXMgYXJlXG4gIC8vIGRlc2lnbmVkIHRvIGJlIHN5bmMvYXN5bmMgYWdub3N0aWMuXG4gIC8vIFRha2Ugbm90ZSBpZiB0aGUgX3JlYWQgY2FsbCBpcyBzeW5jIG9yIGFzeW5jIChpZSwgaWYgdGhlIHJlYWQgY2FsbFxuICAvLyBoYXMgcmV0dXJuZWQgeWV0KSwgc28gdGhhdCB3ZSBrbm93IHdoZXRoZXIgb3Igbm90IGl0J3Mgc2FmZSB0byBlbWl0XG4gIC8vICdyZWFkYWJsZScgZXRjLlxuICAvL1xuICAvLyAzLiBBY3R1YWxseSBwdWxsIHRoZSByZXF1ZXN0ZWQgY2h1bmtzIG91dCBvZiB0aGUgYnVmZmVyIGFuZCByZXR1cm4uXG5cbiAgLy8gaWYgd2UgbmVlZCBhIHJlYWRhYmxlIGV2ZW50LCB0aGVuIHdlIG5lZWQgdG8gZG8gc29tZSByZWFkaW5nLlxuICB2YXIgZG9SZWFkID0gc3RhdGUubmVlZFJlYWRhYmxlO1xuICBkZWJ1ZygnbmVlZCByZWFkYWJsZScsIGRvUmVhZCk7XG5cbiAgLy8gaWYgd2UgY3VycmVudGx5IGhhdmUgbGVzcyB0aGFuIHRoZSBoaWdoV2F0ZXJNYXJrLCB0aGVuIGFsc28gcmVhZCBzb21lXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgfHwgc3RhdGUubGVuZ3RoIC0gbiA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkb1JlYWQgPSB0cnVlO1xuICAgIGRlYnVnKCdsZW5ndGggbGVzcyB0aGFuIHdhdGVybWFyaycsIGRvUmVhZCk7XG4gIH1cblxuICAvLyBob3dldmVyLCBpZiB3ZSd2ZSBlbmRlZCwgdGhlbiB0aGVyZSdzIG5vIHBvaW50LCBhbmQgaWYgd2UncmUgYWxyZWFkeVxuICAvLyByZWFkaW5nLCB0aGVuIGl0J3MgdW5uZWNlc3NhcnkuXG4gIGlmIChzdGF0ZS5lbmRlZCB8fCBzdGF0ZS5yZWFkaW5nKSB7XG4gICAgZG9SZWFkID0gZmFsc2U7XG4gICAgZGVidWcoJ3JlYWRpbmcgb3IgZW5kZWQnLCBkb1JlYWQpO1xuICB9IGVsc2UgaWYgKGRvUmVhZCkge1xuICAgIGRlYnVnKCdkbyByZWFkJyk7XG4gICAgc3RhdGUucmVhZGluZyA9IHRydWU7XG4gICAgc3RhdGUuc3luYyA9IHRydWU7XG4gICAgLy8gaWYgdGhlIGxlbmd0aCBpcyBjdXJyZW50bHkgemVybywgdGhlbiB3ZSAqbmVlZCogYSByZWFkYWJsZSBldmVudC5cbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIC8vIGNhbGwgaW50ZXJuYWwgcmVhZCBtZXRob2RcbiAgICB0aGlzLl9yZWFkKHN0YXRlLmhpZ2hXYXRlck1hcmspO1xuICAgIHN0YXRlLnN5bmMgPSBmYWxzZTtcbiAgICAvLyBJZiBfcmVhZCBwdXNoZWQgZGF0YSBzeW5jaHJvbm91c2x5LCB0aGVuIGByZWFkaW5nYCB3aWxsIGJlIGZhbHNlLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHJlLWV2YWx1YXRlIGhvdyBtdWNoIGRhdGEgd2UgY2FuIHJldHVybiB0byB0aGUgdXNlci5cbiAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIG4gPSBob3dNdWNoVG9SZWFkKG5PcmlnLCBzdGF0ZSk7XG4gIH1cblxuICB2YXIgcmV0O1xuICBpZiAobiA+IDApIHJldCA9IGZyb21MaXN0KG4sIHN0YXRlKTtlbHNlIHJldCA9IG51bGw7XG5cbiAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgbiA9IDA7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGVuZ3RoIC09IG47XG4gIH1cblxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3RoaW5nIGluIHRoZSBidWZmZXIsIHRoZW4gd2Ugd2FudCB0byBrbm93XG4gICAgLy8gYXMgc29vbiBhcyB3ZSAqZG8qIGdldCBzb21ldGhpbmcgaW50byB0aGUgYnVmZmVyLlxuICAgIGlmICghc3RhdGUuZW5kZWQpIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG5cbiAgICAvLyBJZiB3ZSB0cmllZCB0byByZWFkKCkgcGFzdCB0aGUgRU9GLCB0aGVuIGVtaXQgZW5kIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgaWYgKG5PcmlnICE9PSBuICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgfVxuXG4gIGlmIChyZXQgIT09IG51bGwpIHRoaXMuZW1pdCgnZGF0YScsIHJldCk7XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoc3RhdGUuZW5kZWQpIHJldHVybjtcbiAgaWYgKHN0YXRlLmRlY29kZXIpIHtcbiAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIHtcbiAgICAgIHN0YXRlLmJ1ZmZlci5wdXNoKGNodW5rKTtcbiAgICAgIHN0YXRlLmxlbmd0aCArPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuXG4gIC8vIGVtaXQgJ3JlYWRhYmxlJyBub3cgdG8gbWFrZSBzdXJlIGl0IGdldHMgcGlja2VkIHVwLlxuICBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbn1cblxuLy8gRG9uJ3QgZW1pdCByZWFkYWJsZSByaWdodCBhd2F5IGluIHN5bmMgbW9kZSwgYmVjYXVzZSB0aGlzIGNhbiB0cmlnZ2VyXG4vLyBhbm90aGVyIHJlYWQoKSBjYWxsID0+IHN0YWNrIG92ZXJmbG93LiAgVGhpcyB3YXksIGl0IG1pZ2h0IHRyaWdnZXJcbi8vIGEgbmV4dFRpY2sgcmVjdXJzaW9uIHdhcm5pbmcsIGJ1dCB0aGF0J3Mgbm90IHNvIGJhZC5cbmZ1bmN0aW9uIGVtaXRSZWFkYWJsZShzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBzdGF0ZS5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgaWYgKCFzdGF0ZS5lbWl0dGVkUmVhZGFibGUpIHtcbiAgICBkZWJ1ZygnZW1pdFJlYWRhYmxlJywgc3RhdGUuZmxvd2luZyk7XG4gICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICBpZiAoc3RhdGUuc3luYykgcG5hLm5leHRUaWNrKGVtaXRSZWFkYWJsZV8sIHN0cmVhbSk7ZWxzZSBlbWl0UmVhZGFibGVfKHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlXyhzdHJlYW0pIHtcbiAgZGVidWcoJ2VtaXQgcmVhZGFibGUnKTtcbiAgc3RyZWFtLmVtaXQoJ3JlYWRhYmxlJyk7XG4gIGZsb3coc3RyZWFtKTtcbn1cblxuLy8gYXQgdGhpcyBwb2ludCwgdGhlIHVzZXIgaGFzIHByZXN1bWFibHkgc2VlbiB0aGUgJ3JlYWRhYmxlJyBldmVudCxcbi8vIGFuZCBjYWxsZWQgcmVhZCgpIHRvIGNvbnN1bWUgc29tZSBkYXRhLiAgdGhhdCBtYXkgaGF2ZSB0cmlnZ2VyZWRcbi8vIGluIHR1cm4gYW5vdGhlciBfcmVhZChuKSBjYWxsLCBpbiB3aGljaCBjYXNlIHJlYWRpbmcgPSB0cnVlIGlmXG4vLyBpdCdzIGluIHByb2dyZXNzLlxuLy8gSG93ZXZlciwgaWYgd2UncmUgbm90IGVuZGVkLCBvciByZWFkaW5nLCBhbmQgdGhlIGxlbmd0aCA8IGh3bSxcbi8vIHRoZW4gZ28gYWhlYWQgYW5kIHRyeSB0byByZWFkIHNvbWUgbW9yZSBwcmVlbXB0aXZlbHkuXG5mdW5jdGlvbiBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5yZWFkaW5nTW9yZSkge1xuICAgIHN0YXRlLnJlYWRpbmdNb3JlID0gdHJ1ZTtcbiAgICBwbmEubmV4dFRpY2sobWF5YmVSZWFkTW9yZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmVfKHN0cmVhbSwgc3RhdGUpIHtcbiAgdmFyIGxlbiA9IHN0YXRlLmxlbmd0aDtcbiAgd2hpbGUgKCFzdGF0ZS5yZWFkaW5nICYmICFzdGF0ZS5mbG93aW5nICYmICFzdGF0ZS5lbmRlZCAmJiBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSB7XG4gICAgZGVidWcoJ21heWJlUmVhZE1vcmUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gICAgaWYgKGxlbiA9PT0gc3RhdGUubGVuZ3RoKVxuICAgICAgLy8gZGlkbid0IGdldCBhbnkgZGF0YSwgc3RvcCBzcGlubmluZy5cbiAgICAgIGJyZWFrO2Vsc2UgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB9XG4gIHN0YXRlLnJlYWRpbmdNb3JlID0gZmFsc2U7XG59XG5cbi8vIGFic3RyYWN0IG1ldGhvZC4gIHRvIGJlIG92ZXJyaWRkZW4gaW4gc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gY2xhc3Nlcy5cbi8vIGNhbGwgY2IoZXIsIGRhdGEpIHdoZXJlIGRhdGEgaXMgPD0gbiBpbiBsZW5ndGguXG4vLyBmb3IgdmlydHVhbCAobm9uLXN0cmluZywgbm9uLWJ1ZmZlcikgc3RyZWFtcywgXCJsZW5ndGhcIiBpcyBzb21ld2hhdFxuLy8gYXJiaXRyYXJ5LCBhbmQgcGVyaGFwcyBub3QgdmVyeSBtZWFuaW5nZnVsLlxuUmVhZGFibGUucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignX3JlYWQoKSBpcyBub3QgaW1wbGVtZW50ZWQnKSk7XG59O1xuXG5SZWFkYWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uIChkZXN0LCBwaXBlT3B0cykge1xuICB2YXIgc3JjID0gdGhpcztcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBzd2l0Y2ggKHN0YXRlLnBpcGVzQ291bnQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBzdGF0ZS5waXBlcyA9IGRlc3Q7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBzdGF0ZS5waXBlcyA9IFtzdGF0ZS5waXBlcywgZGVzdF07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RhdGUucGlwZXMucHVzaChkZXN0KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHN0YXRlLnBpcGVzQ291bnQgKz0gMTtcbiAgZGVidWcoJ3BpcGUgY291bnQ9JWQgb3B0cz0laicsIHN0YXRlLnBpcGVzQ291bnQsIHBpcGVPcHRzKTtcblxuICB2YXIgZG9FbmQgPSAoIXBpcGVPcHRzIHx8IHBpcGVPcHRzLmVuZCAhPT0gZmFsc2UpICYmIGRlc3QgIT09IHByb2Nlc3Muc3Rkb3V0ICYmIGRlc3QgIT09IHByb2Nlc3Muc3RkZXJyO1xuXG4gIHZhciBlbmRGbiA9IGRvRW5kID8gb25lbmQgOiB1bnBpcGU7XG4gIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBwbmEubmV4dFRpY2soZW5kRm4pO2Vsc2Ugc3JjLm9uY2UoJ2VuZCcsIGVuZEZuKTtcblxuICBkZXN0Lm9uKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gIGZ1bmN0aW9uIG9udW5waXBlKHJlYWRhYmxlLCB1bnBpcGVJbmZvKSB7XG4gICAgZGVidWcoJ29udW5waXBlJyk7XG4gICAgaWYgKHJlYWRhYmxlID09PSBzcmMpIHtcbiAgICAgIGlmICh1bnBpcGVJbmZvICYmIHVucGlwZUluZm8uaGFzVW5waXBlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdW5waXBlSW5mby5oYXNVbnBpcGVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZW5kKCkge1xuICAgIGRlYnVnKCdvbmVuZCcpO1xuICAgIGRlc3QuZW5kKCk7XG4gIH1cblxuICAvLyB3aGVuIHRoZSBkZXN0IGRyYWlucywgaXQgcmVkdWNlcyB0aGUgYXdhaXREcmFpbiBjb3VudGVyXG4gIC8vIG9uIHRoZSBzb3VyY2UuICBUaGlzIHdvdWxkIGJlIG1vcmUgZWxlZ2FudCB3aXRoIGEgLm9uY2UoKVxuICAvLyBoYW5kbGVyIGluIGZsb3coKSwgYnV0IGFkZGluZyBhbmQgcmVtb3ZpbmcgcmVwZWF0ZWRseSBpc1xuICAvLyB0b28gc2xvdy5cbiAgdmFyIG9uZHJhaW4gPSBwaXBlT25EcmFpbihzcmMpO1xuICBkZXN0Lm9uKCdkcmFpbicsIG9uZHJhaW4pO1xuXG4gIHZhciBjbGVhbmVkVXAgPSBmYWxzZTtcbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBkZWJ1ZygnY2xlYW51cCcpO1xuICAgIC8vIGNsZWFudXAgZXZlbnQgaGFuZGxlcnMgb25jZSB0aGUgcGlwZSBpcyBicm9rZW5cbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdkcmFpbicsIG9uZHJhaW4pO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcigndW5waXBlJywgb251bnBpcGUpO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZW5kJywgdW5waXBlKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBvbmRhdGEpO1xuXG4gICAgY2xlYW5lZFVwID0gdHJ1ZTtcblxuICAgIC8vIGlmIHRoZSByZWFkZXIgaXMgd2FpdGluZyBmb3IgYSBkcmFpbiBldmVudCBmcm9tIHRoaXNcbiAgICAvLyBzcGVjaWZpYyB3cml0ZXIsIHRoZW4gaXQgd291bGQgY2F1c2UgaXQgdG8gbmV2ZXIgc3RhcnRcbiAgICAvLyBmbG93aW5nIGFnYWluLlxuICAgIC8vIFNvLCBpZiB0aGlzIGlzIGF3YWl0aW5nIGEgZHJhaW4sIHRoZW4gd2UganVzdCBjYWxsIGl0IG5vdy5cbiAgICAvLyBJZiB3ZSBkb24ndCBrbm93LCB0aGVuIGFzc3VtZSB0aGF0IHdlIGFyZSB3YWl0aW5nIGZvciBvbmUuXG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gJiYgKCFkZXN0Ll93cml0YWJsZVN0YXRlIHx8IGRlc3QuX3dyaXRhYmxlU3RhdGUubmVlZERyYWluKSkgb25kcmFpbigpO1xuICB9XG5cbiAgLy8gSWYgdGhlIHVzZXIgcHVzaGVzIG1vcmUgZGF0YSB3aGlsZSB3ZSdyZSB3cml0aW5nIHRvIGRlc3QgdGhlbiB3ZSdsbCBlbmQgdXBcbiAgLy8gaW4gb25kYXRhIGFnYWluLiBIb3dldmVyLCB3ZSBvbmx5IHdhbnQgdG8gaW5jcmVhc2UgYXdhaXREcmFpbiBvbmNlIGJlY2F1c2VcbiAgLy8gZGVzdCB3aWxsIG9ubHkgZW1pdCBvbmUgJ2RyYWluJyBldmVudCBmb3IgdGhlIG11bHRpcGxlIHdyaXRlcy5cbiAgLy8gPT4gSW50cm9kdWNlIGEgZ3VhcmQgb24gaW5jcmVhc2luZyBhd2FpdERyYWluLlxuICB2YXIgaW5jcmVhc2VkQXdhaXREcmFpbiA9IGZhbHNlO1xuICBzcmMub24oJ2RhdGEnLCBvbmRhdGEpO1xuICBmdW5jdGlvbiBvbmRhdGEoY2h1bmspIHtcbiAgICBkZWJ1Zygnb25kYXRhJyk7XG4gICAgaW5jcmVhc2VkQXdhaXREcmFpbiA9IGZhbHNlO1xuICAgIHZhciByZXQgPSBkZXN0LndyaXRlKGNodW5rKTtcbiAgICBpZiAoZmFsc2UgPT09IHJldCAmJiAhaW5jcmVhc2VkQXdhaXREcmFpbikge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgdW5waXBlZCBkdXJpbmcgYGRlc3Qud3JpdGUoKWAsIGl0IGlzIHBvc3NpYmxlXG4gICAgICAvLyB0byBnZXQgc3R1Y2sgaW4gYSBwZXJtYW5lbnRseSBwYXVzZWQgc3RhdGUgaWYgdGhhdCB3cml0ZVxuICAgICAgLy8gYWxzbyByZXR1cm5lZCBmYWxzZS5cbiAgICAgIC8vID0+IENoZWNrIHdoZXRoZXIgYGRlc3RgIGlzIHN0aWxsIGEgcGlwaW5nIGRlc3RpbmF0aW9uLlxuICAgICAgaWYgKChzdGF0ZS5waXBlc0NvdW50ID09PSAxICYmIHN0YXRlLnBpcGVzID09PSBkZXN0IHx8IHN0YXRlLnBpcGVzQ291bnQgPiAxICYmIGluZGV4T2Yoc3RhdGUucGlwZXMsIGRlc3QpICE9PSAtMSkgJiYgIWNsZWFuZWRVcCkge1xuICAgICAgICBkZWJ1ZygnZmFsc2Ugd3JpdGUgcmVzcG9uc2UsIHBhdXNlJywgc3JjLl9yZWFkYWJsZVN0YXRlLmF3YWl0RHJhaW4pO1xuICAgICAgICBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbisrO1xuICAgICAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNyYy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBkZXN0IGhhcyBhbiBlcnJvciwgdGhlbiBzdG9wIHBpcGluZyBpbnRvIGl0LlxuICAvLyBob3dldmVyLCBkb24ndCBzdXBwcmVzcyB0aGUgdGhyb3dpbmcgYmVoYXZpb3IgZm9yIHRoaXMuXG4gIGZ1bmN0aW9uIG9uZXJyb3IoZXIpIHtcbiAgICBkZWJ1Zygnb25lcnJvcicsIGVyKTtcbiAgICB1bnBpcGUoKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGlmIChFRWxpc3RlbmVyQ291bnQoZGVzdCwgJ2Vycm9yJykgPT09IDApIGRlc3QuZW1pdCgnZXJyb3InLCBlcik7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgb3VyIGVycm9yIGhhbmRsZXIgaXMgYXR0YWNoZWQgYmVmb3JlIHVzZXJsYW5kIG9uZXMuXG4gIHByZXBlbmRMaXN0ZW5lcihkZXN0LCAnZXJyb3InLCBvbmVycm9yKTtcblxuICAvLyBCb3RoIGNsb3NlIGFuZCBmaW5pc2ggc2hvdWxkIHRyaWdnZXIgdW5waXBlLCBidXQgb25seSBvbmNlLlxuICBmdW5jdGlvbiBvbmNsb3NlKCkge1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2Nsb3NlJywgb25jbG9zZSk7XG4gIGZ1bmN0aW9uIG9uZmluaXNoKCkge1xuICAgIGRlYnVnKCdvbmZpbmlzaCcpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgdW5waXBlKCk7XG4gIH1cbiAgZGVzdC5vbmNlKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cbiAgZnVuY3Rpb24gdW5waXBlKCkge1xuICAgIGRlYnVnKCd1bnBpcGUnKTtcbiAgICBzcmMudW5waXBlKGRlc3QpO1xuICB9XG5cbiAgLy8gdGVsbCB0aGUgZGVzdCB0aGF0IGl0J3MgYmVpbmcgcGlwZWQgdG9cbiAgZGVzdC5lbWl0KCdwaXBlJywgc3JjKTtcblxuICAvLyBzdGFydCB0aGUgZmxvdyBpZiBpdCBoYXNuJ3QgYmVlbiBzdGFydGVkIGFscmVhZHkuXG4gIGlmICghc3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwaXBlIHJlc3VtZScpO1xuICAgIHNyYy5yZXN1bWUoKTtcbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZnVuY3Rpb24gcGlwZU9uRHJhaW4oc3JjKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gc3JjLl9yZWFkYWJsZVN0YXRlO1xuICAgIGRlYnVnKCdwaXBlT25EcmFpbicsIHN0YXRlLmF3YWl0RHJhaW4pO1xuICAgIGlmIChzdGF0ZS5hd2FpdERyYWluKSBzdGF0ZS5hd2FpdERyYWluLS07XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gPT09IDAgJiYgRUVsaXN0ZW5lckNvdW50KHNyYywgJ2RhdGEnKSkge1xuICAgICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgICBmbG93KHNyYyk7XG4gICAgfVxuICB9O1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUudW5waXBlID0gZnVuY3Rpb24gKGRlc3QpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHVucGlwZUluZm8gPSB7IGhhc1VucGlwZWQ6IGZhbHNlIH07XG5cbiAgLy8gaWYgd2UncmUgbm90IHBpcGluZyBhbnl3aGVyZSwgdGhlbiBkbyBub3RoaW5nLlxuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMCkgcmV0dXJuIHRoaXM7XG5cbiAgLy8ganVzdCBvbmUgZGVzdGluYXRpb24uICBtb3N0IGNvbW1vbiBjYXNlLlxuICBpZiAoc3RhdGUucGlwZXNDb3VudCA9PT0gMSkge1xuICAgIC8vIHBhc3NlZCBpbiBvbmUsIGJ1dCBpdCdzIG5vdCB0aGUgcmlnaHQgb25lLlxuICAgIGlmIChkZXN0ICYmIGRlc3QgIT09IHN0YXRlLnBpcGVzKSByZXR1cm4gdGhpcztcblxuICAgIGlmICghZGVzdCkgZGVzdCA9IHN0YXRlLnBpcGVzO1xuXG4gICAgLy8gZ290IGEgbWF0Y2guXG4gICAgc3RhdGUucGlwZXMgPSBudWxsO1xuICAgIHN0YXRlLnBpcGVzQ291bnQgPSAwO1xuICAgIHN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcbiAgICBpZiAoZGVzdCkgZGVzdC5lbWl0KCd1bnBpcGUnLCB0aGlzLCB1bnBpcGVJbmZvKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNsb3cgY2FzZS4gbXVsdGlwbGUgcGlwZSBkZXN0aW5hdGlvbnMuXG5cbiAgaWYgKCFkZXN0KSB7XG4gICAgLy8gcmVtb3ZlIGFsbC5cbiAgICB2YXIgZGVzdHMgPSBzdGF0ZS5waXBlcztcbiAgICB2YXIgbGVuID0gc3RhdGUucGlwZXNDb3VudDtcbiAgICBzdGF0ZS5waXBlcyA9IG51bGw7XG4gICAgc3RhdGUucGlwZXNDb3VudCA9IDA7XG4gICAgc3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZGVzdHNbaV0uZW1pdCgndW5waXBlJywgdGhpcywgdW5waXBlSW5mbyk7XG4gICAgfXJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdHJ5IHRvIGZpbmQgdGhlIHJpZ2h0IG9uZS5cbiAgdmFyIGluZGV4ID0gaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiB0aGlzO1xuXG4gIHN0YXRlLnBpcGVzLnNwbGljZShpbmRleCwgMSk7XG4gIHN0YXRlLnBpcGVzQ291bnQgLT0gMTtcbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDEpIHN0YXRlLnBpcGVzID0gc3RhdGUucGlwZXNbMF07XG5cbiAgZGVzdC5lbWl0KCd1bnBpcGUnLCB0aGlzLCB1bnBpcGVJbmZvKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHNldCB1cCBkYXRhIGV2ZW50cyBpZiB0aGV5IGFyZSBhc2tlZCBmb3Jcbi8vIEVuc3VyZSByZWFkYWJsZSBsaXN0ZW5lcnMgZXZlbnR1YWxseSBnZXQgc29tZXRoaW5nXG5SZWFkYWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXYsIGZuKSB7XG4gIHZhciByZXMgPSBTdHJlYW0ucHJvdG90eXBlLm9uLmNhbGwodGhpcywgZXYsIGZuKTtcblxuICBpZiAoZXYgPT09ICdkYXRhJykge1xuICAgIC8vIFN0YXJ0IGZsb3dpbmcgb24gbmV4dCB0aWNrIGlmIHN0cmVhbSBpc24ndCBleHBsaWNpdGx5IHBhdXNlZFxuICAgIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgIT09IGZhbHNlKSB0aGlzLnJlc3VtZSgpO1xuICB9IGVsc2UgaWYgKGV2ID09PSAncmVhZGFibGUnKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQgJiYgIXN0YXRlLnJlYWRhYmxlTGlzdGVuaW5nKSB7XG4gICAgICBzdGF0ZS5yZWFkYWJsZUxpc3RlbmluZyA9IHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgICAgIGlmICghc3RhdGUucmVhZGluZykge1xuICAgICAgICBwbmEubmV4dFRpY2soblJlYWRpbmdOZXh0VGljaywgdGhpcyk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxlbmd0aCkge1xuICAgICAgICBlbWl0UmVhZGFibGUodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5SZWFkYWJsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBSZWFkYWJsZS5wcm90b3R5cGUub247XG5cbmZ1bmN0aW9uIG5SZWFkaW5nTmV4dFRpY2soc2VsZikge1xuICBkZWJ1ZygncmVhZGFibGUgbmV4dHRpY2sgcmVhZCAwJyk7XG4gIHNlbGYucmVhZCgwKTtcbn1cblxuLy8gcGF1c2UoKSBhbmQgcmVzdW1lKCkgYXJlIHJlbW5hbnRzIG9mIHRoZSBsZWdhY3kgcmVhZGFibGUgc3RyZWFtIEFQSVxuLy8gSWYgdGhlIHVzZXIgdXNlcyB0aGVtLCB0aGVuIHN3aXRjaCBpbnRvIG9sZCBtb2RlLlxuUmVhZGFibGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3Jlc3VtZScpO1xuICAgIHN0YXRlLmZsb3dpbmcgPSB0cnVlO1xuICAgIHJlc3VtZSh0aGlzLCBzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiByZXN1bWUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlc3VtZVNjaGVkdWxlZCkge1xuICAgIHN0YXRlLnJlc3VtZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgcG5hLm5leHRUaWNrKHJlc3VtZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3VtZV8oc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lIHJlYWQgMCcpO1xuICAgIHN0cmVhbS5yZWFkKDApO1xuICB9XG5cbiAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gZmFsc2U7XG4gIHN0YXRlLmF3YWl0RHJhaW4gPSAwO1xuICBzdHJlYW0uZW1pdCgncmVzdW1lJyk7XG4gIGZsb3coc3RyZWFtKTtcbiAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLnJlYWRpbmcpIHN0cmVhbS5yZWFkKDApO1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdjYWxsIHBhdXNlIGZsb3dpbmc9JWonLCB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcpO1xuICBpZiAoZmFsc2UgIT09IHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwYXVzZScpO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncGF1c2UnKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIGZsb3coc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcbiAgZGVidWcoJ2Zsb3cnLCBzdGF0ZS5mbG93aW5nKTtcbiAgd2hpbGUgKHN0YXRlLmZsb3dpbmcgJiYgc3RyZWFtLnJlYWQoKSAhPT0gbnVsbCkge31cbn1cblxuLy8gd3JhcCBhbiBvbGQtc3R5bGUgc3RyZWFtIGFzIHRoZSBhc3luYyBkYXRhIHNvdXJjZS5cbi8vIFRoaXMgaXMgKm5vdCogcGFydCBvZiB0aGUgcmVhZGFibGUgc3RyZWFtIGludGVyZmFjZS5cbi8vIEl0IGlzIGFuIHVnbHkgdW5mb3J0dW5hdGUgbWVzcyBvZiBoaXN0b3J5LlxuUmVhZGFibGUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuXG4gIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIGRlYnVnKCd3cmFwcGVkIGVuZCcpO1xuICAgIGlmIChzdGF0ZS5kZWNvZGVyICYmICFzdGF0ZS5lbmRlZCkge1xuICAgICAgdmFyIGNodW5rID0gc3RhdGUuZGVjb2Rlci5lbmQoKTtcbiAgICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIF90aGlzLnB1c2goY2h1bmspO1xuICAgIH1cblxuICAgIF90aGlzLnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGRlYnVnKCd3cmFwcGVkIGRhdGEnKTtcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcblxuICAgIC8vIGRvbid0IHNraXAgb3ZlciBmYWxzeSB2YWx1ZXMgaW4gb2JqZWN0TW9kZVxuICAgIGlmIChzdGF0ZS5vYmplY3RNb2RlICYmIChjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuO2Vsc2UgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmICghY2h1bmsgfHwgIWNodW5rLmxlbmd0aCkpIHJldHVybjtcblxuICAgIHZhciByZXQgPSBfdGhpcy5wdXNoKGNodW5rKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5wYXVzZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcHJveHkgYWxsIHRoZSBvdGhlciBtZXRob2RzLlxuICAvLyBpbXBvcnRhbnQgd2hlbiB3cmFwcGluZyBmaWx0ZXJzIGFuZCBkdXBsZXhlcy5cbiAgZm9yICh2YXIgaSBpbiBzdHJlYW0pIHtcbiAgICBpZiAodGhpc1tpXSA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzdHJlYW1baV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbaV0gPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cmVhbVttZXRob2RdLmFwcGx5KHN0cmVhbSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0oaSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJveHkgY2VydGFpbiBpbXBvcnRhbnQgZXZlbnRzLlxuICBmb3IgKHZhciBuID0gMDsgbiA8IGtQcm94eUV2ZW50cy5sZW5ndGg7IG4rKykge1xuICAgIHN0cmVhbS5vbihrUHJveHlFdmVudHNbbl0sIHRoaXMuZW1pdC5iaW5kKHRoaXMsIGtQcm94eUV2ZW50c1tuXSkpO1xuICB9XG5cbiAgLy8gd2hlbiB3ZSB0cnkgdG8gY29uc3VtZSBzb21lIG1vcmUgYnl0ZXMsIHNpbXBseSB1bnBhdXNlIHRoZVxuICAvLyB1bmRlcmx5aW5nIHN0cmVhbS5cbiAgdGhpcy5fcmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgX3JlYWQnLCBuKTtcbiAgICBpZiAocGF1c2VkKSB7XG4gICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN0cmVhbS5yZXN1bWUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGUucHJvdG90eXBlLCAncmVhZGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcblxuLy8gZXhwb3NlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuUmVhZGFibGUuX2Zyb21MaXN0ID0gZnJvbUxpc3Q7XG5cbi8vIFBsdWNrIG9mZiBuIGJ5dGVzIGZyb20gYW4gYXJyYXkgb2YgYnVmZmVycy5cbi8vIExlbmd0aCBpcyB0aGUgY29tYmluZWQgbGVuZ3RocyBvZiBhbGwgdGhlIGJ1ZmZlcnMgaW4gdGhlIGxpc3QuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0KG4sIHN0YXRlKSB7XG4gIC8vIG5vdGhpbmcgYnVmZmVyZWRcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHJldDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldCA9IHN0YXRlLmJ1ZmZlci5zaGlmdCgpO2Vsc2UgaWYgKCFuIHx8IG4gPj0gc3RhdGUubGVuZ3RoKSB7XG4gICAgLy8gcmVhZCBpdCBhbGwsIHRydW5jYXRlIHRoZSBsaXN0XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIHJldCA9IHN0YXRlLmJ1ZmZlci5qb2luKCcnKTtlbHNlIGlmIChzdGF0ZS5idWZmZXIubGVuZ3RoID09PSAxKSByZXQgPSBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhO2Vsc2UgcmV0ID0gc3RhdGUuYnVmZmVyLmNvbmNhdChzdGF0ZS5sZW5ndGgpO1xuICAgIHN0YXRlLmJ1ZmZlci5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlYWQgcGFydCBvZiBsaXN0XG4gICAgcmV0ID0gZnJvbUxpc3RQYXJ0aWFsKG4sIHN0YXRlLmJ1ZmZlciwgc3RhdGUuZGVjb2Rlcik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBFeHRyYWN0cyBvbmx5IGVub3VnaCBidWZmZXJlZCBkYXRhIHRvIHNhdGlzZnkgdGhlIGFtb3VudCByZXF1ZXN0ZWQuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0UGFydGlhbChuLCBsaXN0LCBoYXNTdHJpbmdzKSB7XG4gIHZhciByZXQ7XG4gIGlmIChuIDwgbGlzdC5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gc2xpY2UgaXMgdGhlIHNhbWUgZm9yIGJ1ZmZlcnMgYW5kIHN0cmluZ3NcbiAgICByZXQgPSBsaXN0LmhlYWQuZGF0YS5zbGljZSgwLCBuKTtcbiAgICBsaXN0LmhlYWQuZGF0YSA9IGxpc3QuaGVhZC5kYXRhLnNsaWNlKG4pO1xuICB9IGVsc2UgaWYgKG4gPT09IGxpc3QuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgIC8vIGZpcnN0IGNodW5rIGlzIGEgcGVyZmVjdCBtYXRjaFxuICAgIHJldCA9IGxpc3Quc2hpZnQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZXN1bHQgc3BhbnMgbW9yZSB0aGFuIG9uZSBidWZmZXJcbiAgICByZXQgPSBoYXNTdHJpbmdzID8gY29weUZyb21CdWZmZXJTdHJpbmcobiwgbGlzdCkgOiBjb3B5RnJvbUJ1ZmZlcihuLCBsaXN0KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgbGlzdCBvZiBidWZmZXJlZCBkYXRhXG4vLyBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyU3RyaW5nKG4sIGxpc3QpIHtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgdmFyIHJldCA9IHAuZGF0YTtcbiAgbiAtPSByZXQubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBzdHIgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IHN0ci5sZW5ndGggPyBzdHIubGVuZ3RoIDogbjtcbiAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHJldCArPSBzdHI7ZWxzZSByZXQgKz0gc3RyLnNsaWNlKDAsIG4pO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBzdHIuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGJ5dGVzIGZyb20gdGhlIGxpc3Qgb2YgYnVmZmVyZWQgZGF0YSBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyKG4sIGxpc3QpIHtcbiAgdmFyIHJldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuKTtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgcC5kYXRhLmNvcHkocmV0KTtcbiAgbiAtPSBwLmRhdGEubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBidWYgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IGJ1Zi5sZW5ndGggPyBidWYubGVuZ3RoIDogbjtcbiAgICBidWYuY29weShyZXQsIHJldC5sZW5ndGggLSBuLCAwLCBuYik7XG4gICAgbiAtPSBuYjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgaWYgKG5iID09PSBidWYubGVuZ3RoKSB7XG4gICAgICAgICsrYztcbiAgICAgICAgaWYgKHAubmV4dCkgbGlzdC5oZWFkID0gcC5uZXh0O2Vsc2UgbGlzdC5oZWFkID0gbGlzdC50YWlsID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuaGVhZCA9IHA7XG4gICAgICAgIHAuZGF0YSA9IGJ1Zi5zbGljZShuYik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgKytjO1xuICB9XG4gIGxpc3QubGVuZ3RoIC09IGM7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGVuZFJlYWRhYmxlKHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG5cbiAgLy8gSWYgd2UgZ2V0IGhlcmUgYmVmb3JlIGNvbnN1bWluZyBhbGwgdGhlIGJ5dGVzLCB0aGVuIHRoYXQgaXMgYVxuICAvLyBidWcgaW4gbm9kZS4gIFNob3VsZCBuZXZlciBoYXBwZW4uXG4gIGlmIChzdGF0ZS5sZW5ndGggPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ1wiZW5kUmVhZGFibGUoKVwiIGNhbGxlZCBvbiBub24tZW1wdHkgc3RyZWFtJyk7XG5cbiAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICAgIHBuYS5uZXh0VGljayhlbmRSZWFkYWJsZU5ULCBzdGF0ZSwgc3RyZWFtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmRSZWFkYWJsZU5UKHN0YXRlLCBzdHJlYW0pIHtcbiAgLy8gQ2hlY2sgdGhhdCB3ZSBkaWRuJ3QgZ2V0IG9uZSBsYXN0IHVuc2hpZnQuXG4gIGlmICghc3RhdGUuZW5kRW1pdHRlZCAmJiBzdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICBzdGF0ZS5lbmRFbWl0dGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0ucmVhZGFibGUgPSBmYWxzZTtcbiAgICBzdHJlYW0uZW1pdCgnZW5kJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZXhPZih4cywgeCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh4c1tpXSA9PT0geCkgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBhIHRyYW5zZm9ybSBzdHJlYW0gaXMgYSByZWFkYWJsZS93cml0YWJsZSBzdHJlYW0gd2hlcmUgeW91IGRvXG4vLyBzb21ldGhpbmcgd2l0aCB0aGUgZGF0YS4gIFNvbWV0aW1lcyBpdCdzIGNhbGxlZCBhIFwiZmlsdGVyXCIsXG4vLyBidXQgdGhhdCdzIG5vdCBhIGdyZWF0IG5hbWUgZm9yIGl0LCBzaW5jZSB0aGF0IGltcGxpZXMgYSB0aGluZyB3aGVyZVxuLy8gc29tZSBiaXRzIHBhc3MgdGhyb3VnaCwgYW5kIG90aGVycyBhcmUgc2ltcGx5IGlnbm9yZWQuICAoVGhhdCB3b3VsZFxuLy8gYmUgYSB2YWxpZCBleGFtcGxlIG9mIGEgdHJhbnNmb3JtLCBvZiBjb3Vyc2UuKVxuLy9cbi8vIFdoaWxlIHRoZSBvdXRwdXQgaXMgY2F1c2FsbHkgcmVsYXRlZCB0byB0aGUgaW5wdXQsIGl0J3Mgbm90IGFcbi8vIG5lY2Vzc2FyaWx5IHN5bW1ldHJpYyBvciBzeW5jaHJvbm91cyB0cmFuc2Zvcm1hdGlvbi4gIEZvciBleGFtcGxlLFxuLy8gYSB6bGliIHN0cmVhbSBtaWdodCB0YWtlIG11bHRpcGxlIHBsYWluLXRleHQgd3JpdGVzKCksIGFuZCB0aGVuXG4vLyBlbWl0IGEgc2luZ2xlIGNvbXByZXNzZWQgY2h1bmsgc29tZSB0aW1lIGluIHRoZSBmdXR1cmUuXG4vL1xuLy8gSGVyZSdzIGhvdyB0aGlzIHdvcmtzOlxuLy9cbi8vIFRoZSBUcmFuc2Zvcm0gc3RyZWFtIGhhcyBhbGwgdGhlIGFzcGVjdHMgb2YgdGhlIHJlYWRhYmxlIGFuZCB3cml0YWJsZVxuLy8gc3RyZWFtIGNsYXNzZXMuICBXaGVuIHlvdSB3cml0ZShjaHVuayksIHRoYXQgY2FsbHMgX3dyaXRlKGNodW5rLGNiKVxuLy8gaW50ZXJuYWxseSwgYW5kIHJldHVybnMgZmFsc2UgaWYgdGhlcmUncyBhIGxvdCBvZiBwZW5kaW5nIHdyaXRlc1xuLy8gYnVmZmVyZWQgdXAuICBXaGVuIHlvdSBjYWxsIHJlYWQoKSwgdGhhdCBjYWxscyBfcmVhZChuKSB1bnRpbFxuLy8gdGhlcmUncyBlbm91Z2ggcGVuZGluZyByZWFkYWJsZSBkYXRhIGJ1ZmZlcmVkIHVwLlxuLy9cbi8vIEluIGEgdHJhbnNmb3JtIHN0cmVhbSwgdGhlIHdyaXR0ZW4gZGF0YSBpcyBwbGFjZWQgaW4gYSBidWZmZXIuICBXaGVuXG4vLyBfcmVhZChuKSBpcyBjYWxsZWQsIGl0IHRyYW5zZm9ybXMgdGhlIHF1ZXVlZCB1cCBkYXRhLCBjYWxsaW5nIHRoZVxuLy8gYnVmZmVyZWQgX3dyaXRlIGNiJ3MgYXMgaXQgY29uc3VtZXMgY2h1bmtzLiAgSWYgY29uc3VtaW5nIGEgc2luZ2xlXG4vLyB3cml0dGVuIGNodW5rIHdvdWxkIHJlc3VsdCBpbiBtdWx0aXBsZSBvdXRwdXQgY2h1bmtzLCB0aGVuIHRoZSBmaXJzdFxuLy8gb3V0cHV0dGVkIGJpdCBjYWxscyB0aGUgcmVhZGNiLCBhbmQgc3Vic2VxdWVudCBjaHVua3MganVzdCBnbyBpbnRvXG4vLyB0aGUgcmVhZCBidWZmZXIsIGFuZCB3aWxsIGNhdXNlIGl0IHRvIGVtaXQgJ3JlYWRhYmxlJyBpZiBuZWNlc3NhcnkuXG4vL1xuLy8gVGhpcyB3YXksIGJhY2stcHJlc3N1cmUgaXMgYWN0dWFsbHkgZGV0ZXJtaW5lZCBieSB0aGUgcmVhZGluZyBzaWRlLFxuLy8gc2luY2UgX3JlYWQgaGFzIHRvIGJlIGNhbGxlZCB0byBzdGFydCBwcm9jZXNzaW5nIGEgbmV3IGNodW5rLiAgSG93ZXZlcixcbi8vIGEgcGF0aG9sb2dpY2FsIGluZmxhdGUgdHlwZSBvZiB0cmFuc2Zvcm0gY2FuIGNhdXNlIGV4Y2Vzc2l2ZSBidWZmZXJpbmdcbi8vIGhlcmUuICBGb3IgZXhhbXBsZSwgaW1hZ2luZSBhIHN0cmVhbSB3aGVyZSBldmVyeSBieXRlIG9mIGlucHV0IGlzXG4vLyBpbnRlcnByZXRlZCBhcyBhbiBpbnRlZ2VyIGZyb20gMC0yNTUsIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhhdCBtYW55XG4vLyBieXRlcyBvZiBvdXRwdXQuICBXcml0aW5nIHRoZSA0IGJ5dGVzIHtmZixmZixmZixmZn0gd291bGQgcmVzdWx0IGluXG4vLyAxa2Igb2YgZGF0YSBiZWluZyBvdXRwdXQuICBJbiB0aGlzIGNhc2UsIHlvdSBjb3VsZCB3cml0ZSBhIHZlcnkgc21hbGxcbi8vIGFtb3VudCBvZiBpbnB1dCwgYW5kIGVuZCB1cCB3aXRoIGEgdmVyeSBsYXJnZSBhbW91bnQgb2Ygb3V0cHV0LiAgSW5cbi8vIHN1Y2ggYSBwYXRob2xvZ2ljYWwgaW5mbGF0aW5nIG1lY2hhbmlzbSwgdGhlcmUnZCBiZSBubyB3YXkgdG8gdGVsbFxuLy8gdGhlIHN5c3RlbSB0byBzdG9wIGRvaW5nIHRoZSB0cmFuc2Zvcm0uICBBIHNpbmdsZSA0TUIgd3JpdGUgY291bGRcbi8vIGNhdXNlIHRoZSBzeXN0ZW0gdG8gcnVuIG91dCBvZiBtZW1vcnkuXG4vL1xuLy8gSG93ZXZlciwgZXZlbiBpbiBzdWNoIGEgcGF0aG9sb2dpY2FsIGNhc2UsIG9ubHkgYSBzaW5nbGUgd3JpdHRlbiBjaHVua1xuLy8gd291bGQgYmUgY29uc3VtZWQsIGFuZCB0aGVuIHRoZSByZXN0IHdvdWxkIHdhaXQgKHVuLXRyYW5zZm9ybWVkKSB1bnRpbFxuLy8gdGhlIHJlc3VsdHMgb2YgdGhlIHByZXZpb3VzIHRyYW5zZm9ybWVkIGNodW5rIHdlcmUgY29uc3VtZWQuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2Zvcm07XG5cbnZhciBEdXBsZXggPSByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IE9iamVjdC5jcmVhdGUocmVxdWlyZSgnY29yZS11dGlsLWlzJykpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudXRpbC5pbmhlcml0cyhUcmFuc2Zvcm0sIER1cGxleCk7XG5cbmZ1bmN0aW9uIGFmdGVyVHJhbnNmb3JtKGVyLCBkYXRhKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuICB0cy50cmFuc2Zvcm1pbmcgPSBmYWxzZTtcblxuICB2YXIgY2IgPSB0cy53cml0ZWNiO1xuXG4gIGlmICghY2IpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignd3JpdGUgY2FsbGJhY2sgY2FsbGVkIG11bHRpcGxlIHRpbWVzJykpO1xuICB9XG5cbiAgdHMud3JpdGVjaHVuayA9IG51bGw7XG4gIHRzLndyaXRlY2IgPSBudWxsO1xuXG4gIGlmIChkYXRhICE9IG51bGwpIC8vIHNpbmdsZSBlcXVhbHMgY2hlY2sgZm9yIGJvdGggYG51bGxgIGFuZCBgdW5kZWZpbmVkYFxuICAgIHRoaXMucHVzaChkYXRhKTtcblxuICBjYihlcik7XG5cbiAgdmFyIHJzID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgcnMucmVhZGluZyA9IGZhbHNlO1xuICBpZiAocnMubmVlZFJlYWRhYmxlIHx8IHJzLmxlbmd0aCA8IHJzLmhpZ2hXYXRlck1hcmspIHtcbiAgICB0aGlzLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFuc2Zvcm0pKSByZXR1cm4gbmV3IFRyYW5zZm9ybShvcHRpb25zKTtcblxuICBEdXBsZXguY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICB0aGlzLl90cmFuc2Zvcm1TdGF0ZSA9IHtcbiAgICBhZnRlclRyYW5zZm9ybTogYWZ0ZXJUcmFuc2Zvcm0uYmluZCh0aGlzKSxcbiAgICBuZWVkVHJhbnNmb3JtOiBmYWxzZSxcbiAgICB0cmFuc2Zvcm1pbmc6IGZhbHNlLFxuICAgIHdyaXRlY2I6IG51bGwsXG4gICAgd3JpdGVjaHVuazogbnVsbCxcbiAgICB3cml0ZWVuY29kaW5nOiBudWxsXG4gIH07XG5cbiAgLy8gc3RhcnQgb3V0IGFza2luZyBmb3IgYSByZWFkYWJsZSBldmVudCBvbmNlIGRhdGEgaXMgdHJhbnNmb3JtZWQuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcblxuICAvLyB3ZSBoYXZlIGltcGxlbWVudGVkIHRoZSBfcmVhZCBtZXRob2QsIGFuZCBkb25lIHRoZSBvdGhlciB0aGluZ3NcbiAgLy8gdGhhdCBSZWFkYWJsZSB3YW50cyBiZWZvcmUgdGhlIGZpcnN0IF9yZWFkIGNhbGwsIHNvIHVuc2V0IHRoZVxuICAvLyBzeW5jIGd1YXJkIGZsYWcuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuc3luYyA9IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fdHJhbnNmb3JtID0gb3B0aW9ucy50cmFuc2Zvcm07XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmx1c2ggPT09ICdmdW5jdGlvbicpIHRoaXMuX2ZsdXNoID0gb3B0aW9ucy5mbHVzaDtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHdyaXRhYmxlIHNpZGUgZmluaXNoZXMsIHRoZW4gZmx1c2ggb3V0IGFueXRoaW5nIHJlbWFpbmluZy5cbiAgdGhpcy5vbigncHJlZmluaXNoJywgcHJlZmluaXNoKTtcbn1cblxuZnVuY3Rpb24gcHJlZmluaXNoKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdGhpcy5fZmx1c2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLl9mbHVzaChmdW5jdGlvbiAoZXIsIGRhdGEpIHtcbiAgICAgIGRvbmUoX3RoaXMsIGVyLCBkYXRhKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb25lKHRoaXMsIG51bGwsIG51bGwpO1xuICB9XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcpIHtcbiAgdGhpcy5fdHJhbnNmb3JtU3RhdGUubmVlZFRyYW5zZm9ybSA9IGZhbHNlO1xuICByZXR1cm4gRHVwbGV4LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgY2h1bmssIGVuY29kaW5nKTtcbn07XG5cbi8vIFRoaXMgaXMgdGhlIHBhcnQgd2hlcmUgeW91IGRvIHN0dWZmIVxuLy8gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiBpbiBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gJ2NodW5rJyBpcyBhbiBpbnB1dCBjaHVuay5cbi8vXG4vLyBDYWxsIGBwdXNoKG5ld0NodW5rKWAgdG8gcGFzcyBhbG9uZyB0cmFuc2Zvcm1lZCBvdXRwdXRcbi8vIHRvIHRoZSByZWFkYWJsZSBzaWRlLiAgWW91IG1heSBjYWxsICdwdXNoJyB6ZXJvIG9yIG1vcmUgdGltZXMuXG4vL1xuLy8gQ2FsbCBgY2IoZXJyKWAgd2hlbiB5b3UgYXJlIGRvbmUgd2l0aCB0aGlzIGNodW5rLiAgSWYgeW91IHBhc3Ncbi8vIGFuIGVycm9yLCB0aGVuIHRoYXQnbGwgcHV0IHRoZSBodXJ0IG9uIHRoZSB3aG9sZSBvcGVyYXRpb24uICBJZiB5b3Vcbi8vIG5ldmVyIGNhbGwgY2IoKSwgdGhlbiB5b3UnbGwgbmV2ZXIgZ2V0IGFub3RoZXIgY2h1bmsuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ190cmFuc2Zvcm0oKSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG4gIHRzLndyaXRlY2IgPSBjYjtcbiAgdHMud3JpdGVjaHVuayA9IGNodW5rO1xuICB0cy53cml0ZWVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIGlmICghdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdmFyIHJzID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgICBpZiAodHMubmVlZFRyYW5zZm9ybSB8fCBycy5uZWVkUmVhZGFibGUgfHwgcnMubGVuZ3RoIDwgcnMuaGlnaFdhdGVyTWFyaykgdGhpcy5fcmVhZChycy5oaWdoV2F0ZXJNYXJrKTtcbiAgfVxufTtcblxuLy8gRG9lc24ndCBtYXR0ZXIgd2hhdCB0aGUgYXJncyBhcmUgaGVyZS5cbi8vIF90cmFuc2Zvcm0gZG9lcyBhbGwgdGhlIHdvcmsuXG4vLyBUaGF0IHdlIGdvdCBoZXJlIG1lYW5zIHRoYXQgdGhlIHJlYWRhYmxlIHNpZGUgd2FudHMgbW9yZSBkYXRhLlxuVHJhbnNmb3JtLnByb3RvdHlwZS5fcmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuXG4gIGlmICh0cy53cml0ZWNodW5rICE9PSBudWxsICYmIHRzLndyaXRlY2IgJiYgIXRzLnRyYW5zZm9ybWluZykge1xuICAgIHRzLnRyYW5zZm9ybWluZyA9IHRydWU7XG4gICAgdGhpcy5fdHJhbnNmb3JtKHRzLndyaXRlY2h1bmssIHRzLndyaXRlZW5jb2RpbmcsIHRzLmFmdGVyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBtYXJrIHRoYXQgd2UgbmVlZCBhIHRyYW5zZm9ybSwgc28gdGhhdCBhbnkgZGF0YSB0aGF0IGNvbWVzIGluXG4gICAgLy8gd2lsbCBnZXQgcHJvY2Vzc2VkLCBub3cgdGhhdCB3ZSd2ZSBhc2tlZCBmb3IgaXQuXG4gICAgdHMubmVlZFRyYW5zZm9ybSA9IHRydWU7XG4gIH1cbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICBEdXBsZXgucHJvdG90eXBlLl9kZXN0cm95LmNhbGwodGhpcywgZXJyLCBmdW5jdGlvbiAoZXJyMikge1xuICAgIGNiKGVycjIpO1xuICAgIF90aGlzMi5lbWl0KCdjbG9zZScpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRvbmUoc3RyZWFtLCBlciwgZGF0YSkge1xuICBpZiAoZXIpIHJldHVybiBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG5cbiAgaWYgKGRhdGEgIT0gbnVsbCkgLy8gc2luZ2xlIGVxdWFscyBjaGVjayBmb3IgYm90aCBgbnVsbGAgYW5kIGB1bmRlZmluZWRgXG4gICAgc3RyZWFtLnB1c2goZGF0YSk7XG5cbiAgLy8gaWYgdGhlcmUncyBub3RoaW5nIGluIHRoZSB3cml0ZSBidWZmZXIsIHRoZW4gdGhhdCBtZWFuc1xuICAvLyB0aGF0IG5vdGhpbmcgbW9yZSB3aWxsIGV2ZXIgYmUgcHJvdmlkZWRcbiAgaWYgKHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignQ2FsbGluZyB0cmFuc2Zvcm0gZG9uZSB3aGVuIHdzLmxlbmd0aCAhPSAwJyk7XG5cbiAgaWYgKHN0cmVhbS5fdHJhbnNmb3JtU3RhdGUudHJhbnNmb3JtaW5nKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxpbmcgdHJhbnNmb3JtIGRvbmUgd2hlbiBzdGlsbCB0cmFuc2Zvcm1pbmcnKTtcblxuICByZXR1cm4gc3RyZWFtLnB1c2gobnVsbCk7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIEEgYml0IHNpbXBsZXIgdGhhbiByZWFkYWJsZSBzdHJlYW1zLlxuLy8gSW1wbGVtZW50IGFuIGFzeW5jIC5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYiksIGFuZCBpdCdsbCBoYW5kbGUgYWxsXG4vLyB0aGUgZHJhaW4gZXZlbnQgZW1pc3Npb24gYW5kIGJ1ZmZlcmluZy5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdyaXRhYmxlO1xuXG4vKiA8cmVwbGFjZW1lbnQ+ICovXG5mdW5jdGlvbiBXcml0ZVJlcShjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHRoaXMuY2h1bmsgPSBjaHVuaztcbiAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xuICB0aGlzLmNhbGxiYWNrID0gY2I7XG4gIHRoaXMubmV4dCA9IG51bGw7XG59XG5cbi8vIEl0IHNlZW1zIGEgbGlua2VkIGxpc3QgYnV0IGl0IGlzIG5vdFxuLy8gdGhlcmUgd2lsbCBiZSBvbmx5IDIgb2YgdGhlc2UgZm9yIGVhY2ggc3RyZWFtXG5mdW5jdGlvbiBDb3JrZWRSZXF1ZXN0KHN0YXRlKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgdGhpcy5lbnRyeSA9IG51bGw7XG4gIHRoaXMuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIG9uQ29ya2VkRmluaXNoKF90aGlzLCBzdGF0ZSk7XG4gIH07XG59XG4vKiA8L3JlcGxhY2VtZW50PiAqL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGFzeW5jV3JpdGUgPSAhcHJvY2Vzcy5icm93c2VyICYmIFsndjAuMTAnLCAndjAuOS4nXS5pbmRleE9mKHByb2Nlc3MudmVyc2lvbi5zbGljZSgwLCA1KSkgPiAtMSA/IHNldEltbWVkaWF0ZSA6IHBuYS5uZXh0VGljaztcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5Xcml0YWJsZS5Xcml0YWJsZVN0YXRlID0gV3JpdGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gT2JqZWN0LmNyZWF0ZShyZXF1aXJlKCdjb3JlLXV0aWwtaXMnKSk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGludGVybmFsVXRpbCA9IHtcbiAgZGVwcmVjYXRlOiByZXF1aXJlKCd1dGlsLWRlcHJlY2F0ZScpXG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL3N0cmVhbScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciBPdXJVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXkgfHwgZnVuY3Rpb24gKCkge307XG5mdW5jdGlvbiBfdWludDhBcnJheVRvQnVmZmVyKGNodW5rKSB7XG4gIHJldHVybiBCdWZmZXIuZnJvbShjaHVuayk7XG59XG5mdW5jdGlvbiBfaXNVaW50OEFycmF5KG9iaikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgb2JqIGluc3RhbmNlb2YgT3VyVWludDhBcnJheTtcbn1cblxuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBkZXN0cm95SW1wbCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9kZXN0cm95Jyk7XG5cbnV0aWwuaW5oZXJpdHMoV3JpdGFibGUsIFN0cmVhbSk7XG5cbmZ1bmN0aW9uIG5vcCgpIHt9XG5cbmZ1bmN0aW9uIFdyaXRhYmxlU3RhdGUob3B0aW9ucywgc3RyZWFtKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gRHVwbGV4IHN0cmVhbXMgYXJlIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLCBidXQgc2hhcmVcbiAgLy8gdGhlIHNhbWUgb3B0aW9ucyBvYmplY3QuXG4gIC8vIEhvd2V2ZXIsIHNvbWUgY2FzZXMgcmVxdWlyZSBzZXR0aW5nIG9wdGlvbnMgdG8gZGlmZmVyZW50XG4gIC8vIHZhbHVlcyBmb3IgdGhlIHJlYWRhYmxlIGFuZCB0aGUgd3JpdGFibGUgc2lkZXMgb2YgdGhlIGR1cGxleCBzdHJlYW0uXG4gIC8vIFRoZXNlIG9wdGlvbnMgY2FuIGJlIHByb3ZpZGVkIHNlcGFyYXRlbHkgYXMgcmVhZGFibGVYWFggYW5kIHdyaXRhYmxlWFhYLlxuICB2YXIgaXNEdXBsZXggPSBzdHJlYW0gaW5zdGFuY2VvZiBEdXBsZXg7XG5cbiAgLy8gb2JqZWN0IHN0cmVhbSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgb3Igbm90IHRoaXMgc3RyZWFtXG4gIC8vIGNvbnRhaW5zIGJ1ZmZlcnMgb3Igb2JqZWN0cy5cbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG5cbiAgaWYgKGlzRHVwbGV4KSB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLm9iamVjdE1vZGUgfHwgISFvcHRpb25zLndyaXRhYmxlT2JqZWN0TW9kZTtcblxuICAvLyB0aGUgcG9pbnQgYXQgd2hpY2ggd3JpdGUoKSBzdGFydHMgcmV0dXJuaW5nIGZhbHNlXG4gIC8vIE5vdGU6IDAgaXMgYSB2YWxpZCB2YWx1ZSwgbWVhbnMgdGhhdCB3ZSBhbHdheXMgcmV0dXJuIGZhbHNlIGlmXG4gIC8vIHRoZSBlbnRpcmUgYnVmZmVyIGlzIG5vdCBmbHVzaGVkIGltbWVkaWF0ZWx5IG9uIHdyaXRlKClcbiAgdmFyIGh3bSA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgdmFyIHdyaXRhYmxlSHdtID0gb3B0aW9ucy53cml0YWJsZUhpZ2hXYXRlck1hcms7XG4gIHZhciBkZWZhdWx0SHdtID0gdGhpcy5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG5cbiAgaWYgKGh3bSB8fCBod20gPT09IDApIHRoaXMuaGlnaFdhdGVyTWFyayA9IGh3bTtlbHNlIGlmIChpc0R1cGxleCAmJiAod3JpdGFibGVId20gfHwgd3JpdGFibGVId20gPT09IDApKSB0aGlzLmhpZ2hXYXRlck1hcmsgPSB3cml0YWJsZUh3bTtlbHNlIHRoaXMuaGlnaFdhdGVyTWFyayA9IGRlZmF1bHRId207XG5cbiAgLy8gY2FzdCB0byBpbnRzLlxuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBNYXRoLmZsb29yKHRoaXMuaGlnaFdhdGVyTWFyayk7XG5cbiAgLy8gaWYgX2ZpbmFsIGhhcyBiZWVuIGNhbGxlZFxuICB0aGlzLmZpbmFsQ2FsbGVkID0gZmFsc2U7XG5cbiAgLy8gZHJhaW4gZXZlbnQgZmxhZy5cbiAgdGhpcy5uZWVkRHJhaW4gPSBmYWxzZTtcbiAgLy8gYXQgdGhlIHN0YXJ0IG9mIGNhbGxpbmcgZW5kKClcbiAgdGhpcy5lbmRpbmcgPSBmYWxzZTtcbiAgLy8gd2hlbiBlbmQoKSBoYXMgYmVlbiBjYWxsZWQsIGFuZCByZXR1cm5lZFxuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIC8vIHdoZW4gJ2ZpbmlzaCcgaXMgZW1pdHRlZFxuICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG5cbiAgLy8gaGFzIGl0IGJlZW4gZGVzdHJveWVkXG4gIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgLy8gc2hvdWxkIHdlIGRlY29kZSBzdHJpbmdzIGludG8gYnVmZmVycyBiZWZvcmUgcGFzc2luZyB0byBfd3JpdGU/XG4gIC8vIHRoaXMgaXMgaGVyZSBzbyB0aGF0IHNvbWUgbm9kZS1jb3JlIHN0cmVhbXMgY2FuIG9wdGltaXplIHN0cmluZ1xuICAvLyBoYW5kbGluZyBhdCBhIGxvd2VyIGxldmVsLlxuICB2YXIgbm9EZWNvZGUgPSBvcHRpb25zLmRlY29kZVN0cmluZ3MgPT09IGZhbHNlO1xuICB0aGlzLmRlY29kZVN0cmluZ3MgPSAhbm9EZWNvZGU7XG5cbiAgLy8gQ3J5cHRvIGlzIGtpbmQgb2Ygb2xkIGFuZCBjcnVzdHkuICBIaXN0b3JpY2FsbHksIGl0cyBkZWZhdWx0IHN0cmluZ1xuICAvLyBlbmNvZGluZyBpcyAnYmluYXJ5JyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhpcyBjb25maWd1cmFibGUuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgdW5pdmVyc2UgdXNlcyAndXRmOCcsIHRob3VnaC5cbiAgdGhpcy5kZWZhdWx0RW5jb2RpbmcgPSBvcHRpb25zLmRlZmF1bHRFbmNvZGluZyB8fCAndXRmOCc7XG5cbiAgLy8gbm90IGFuIGFjdHVhbCBidWZmZXIgd2Uga2VlcCB0cmFjayBvZiwgYnV0IGEgbWVhc3VyZW1lbnRcbiAgLy8gb2YgaG93IG11Y2ggd2UncmUgd2FpdGluZyB0byBnZXQgcHVzaGVkIHRvIHNvbWUgdW5kZXJseWluZ1xuICAvLyBzb2NrZXQgb3IgZmlsZS5cbiAgdGhpcy5sZW5ndGggPSAwO1xuXG4gIC8vIGEgZmxhZyB0byBzZWUgd2hlbiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgd3JpdGUuXG4gIHRoaXMud3JpdGluZyA9IGZhbHNlO1xuXG4gIC8vIHdoZW4gdHJ1ZSBhbGwgd3JpdGVzIHdpbGwgYmUgYnVmZmVyZWQgdW50aWwgLnVuY29yaygpIGNhbGxcbiAgdGhpcy5jb3JrZWQgPSAwO1xuXG4gIC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIG9ud3JpdGUgY2IgaXMgY2FsbGVkIGltbWVkaWF0ZWx5LFxuICAvLyBvciBvbiBhIGxhdGVyIHRpY2suICBXZSBzZXQgdGhpcyB0byB0cnVlIGF0IGZpcnN0LCBiZWNhdXNlIGFueVxuICAvLyBhY3Rpb25zIHRoYXQgc2hvdWxkbid0IGhhcHBlbiB1bnRpbCBcImxhdGVyXCIgc2hvdWxkIGdlbmVyYWxseSBhbHNvXG4gIC8vIG5vdCBoYXBwZW4gYmVmb3JlIHRoZSBmaXJzdCB3cml0ZSBjYWxsLlxuICB0aGlzLnN5bmMgPSB0cnVlO1xuXG4gIC8vIGEgZmxhZyB0byBrbm93IGlmIHdlJ3JlIHByb2Nlc3NpbmcgcHJldmlvdXNseSBidWZmZXJlZCBpdGVtcywgd2hpY2hcbiAgLy8gbWF5IGNhbGwgdGhlIF93cml0ZSgpIGNhbGxiYWNrIGluIHRoZSBzYW1lIHRpY2ssIHNvIHRoYXQgd2UgZG9uJ3RcbiAgLy8gZW5kIHVwIGluIGFuIG92ZXJsYXBwZWQgb253cml0ZSBzaXR1YXRpb24uXG4gIHRoaXMuYnVmZmVyUHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gIC8vIHRoZSBjYWxsYmFjayB0aGF0J3MgcGFzc2VkIHRvIF93cml0ZShjaHVuayxjYilcbiAgdGhpcy5vbndyaXRlID0gZnVuY3Rpb24gKGVyKSB7XG4gICAgb253cml0ZShzdHJlYW0sIGVyKTtcbiAgfTtcblxuICAvLyB0aGUgY2FsbGJhY2sgdGhhdCB0aGUgdXNlciBzdXBwbGllcyB0byB3cml0ZShjaHVuayxlbmNvZGluZyxjYilcbiAgdGhpcy53cml0ZWNiID0gbnVsbDtcblxuICAvLyB0aGUgYW1vdW50IHRoYXQgaXMgYmVpbmcgd3JpdHRlbiB3aGVuIF93cml0ZSBpcyBjYWxsZWQuXG4gIHRoaXMud3JpdGVsZW4gPSAwO1xuXG4gIHRoaXMuYnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgdGhpcy5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcblxuICAvLyBudW1iZXIgb2YgcGVuZGluZyB1c2VyLXN1cHBsaWVkIHdyaXRlIGNhbGxiYWNrc1xuICAvLyB0aGlzIG11c3QgYmUgMCBiZWZvcmUgJ2ZpbmlzaCcgY2FuIGJlIGVtaXR0ZWRcbiAgdGhpcy5wZW5kaW5nY2IgPSAwO1xuXG4gIC8vIGVtaXQgcHJlZmluaXNoIGlmIHRoZSBvbmx5IHRoaW5nIHdlJ3JlIHdhaXRpbmcgZm9yIGlzIF93cml0ZSBjYnNcbiAgLy8gVGhpcyBpcyByZWxldmFudCBmb3Igc3luY2hyb25vdXMgVHJhbnNmb3JtIHN0cmVhbXNcbiAgdGhpcy5wcmVmaW5pc2hlZCA9IGZhbHNlO1xuXG4gIC8vIFRydWUgaWYgdGhlIGVycm9yIHdhcyBhbHJlYWR5IGVtaXR0ZWQgYW5kIHNob3VsZCBub3QgYmUgdGhyb3duIGFnYWluXG4gIHRoaXMuZXJyb3JFbWl0dGVkID0gZmFsc2U7XG5cbiAgLy8gY291bnQgYnVmZmVyZWQgcmVxdWVzdHNcbiAgdGhpcy5idWZmZXJlZFJlcXVlc3RDb3VudCA9IDA7XG5cbiAgLy8gYWxsb2NhdGUgdGhlIGZpcnN0IENvcmtlZFJlcXVlc3QsIHRoZXJlIGlzIGFsd2F5c1xuICAvLyBvbmUgYWxsb2NhdGVkIGFuZCBmcmVlIHRvIHVzZSwgYW5kIHdlIG1haW50YWluIGF0IG1vc3QgdHdvXG4gIHRoaXMuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3QodGhpcyk7XG59XG5cbldyaXRhYmxlU3RhdGUucHJvdG90eXBlLmdldEJ1ZmZlciA9IGZ1bmN0aW9uIGdldEJ1ZmZlcigpIHtcbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmJ1ZmZlcmVkUmVxdWVzdDtcbiAgdmFyIG91dCA9IFtdO1xuICB3aGlsZSAoY3VycmVudCkge1xuICAgIG91dC5wdXNoKGN1cnJlbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlU3RhdGUucHJvdG90eXBlLCAnYnVmZmVyJywge1xuICAgICAgZ2V0OiBpbnRlcm5hbFV0aWwuZGVwcmVjYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnVmZmVyKCk7XG4gICAgICB9LCAnX3dyaXRhYmxlU3RhdGUuYnVmZmVyIGlzIGRlcHJlY2F0ZWQuIFVzZSBfd3JpdGFibGVTdGF0ZS5nZXRCdWZmZXIgJyArICdpbnN0ZWFkLicsICdERVAwMDAzJylcbiAgICB9KTtcbiAgfSBjYXRjaCAoXykge31cbn0pKCk7XG5cbi8vIFRlc3QgX3dyaXRhYmxlU3RhdGUgZm9yIGluaGVyaXRhbmNlIHRvIGFjY291bnQgZm9yIER1cGxleCBzdHJlYW1zLFxuLy8gd2hvc2UgcHJvdG90eXBlIGNoYWluIG9ubHkgcG9pbnRzIHRvIFJlYWRhYmxlLlxudmFyIHJlYWxIYXNJbnN0YW5jZTtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5oYXNJbnN0YW5jZSAmJiB0eXBlb2YgRnVuY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5oYXNJbnN0YW5jZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgcmVhbEhhc0luc3RhbmNlID0gRnVuY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5oYXNJbnN0YW5jZV07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZSwgU3ltYm9sLmhhc0luc3RhbmNlLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChyZWFsSGFzSW5zdGFuY2UuY2FsbCh0aGlzLCBvYmplY3QpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICh0aGlzICE9PSBXcml0YWJsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gb2JqZWN0ICYmIG9iamVjdC5fd3JpdGFibGVTdGF0ZSBpbnN0YW5jZW9mIFdyaXRhYmxlU3RhdGU7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIHJlYWxIYXNJbnN0YW5jZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgdGhpcztcbiAgfTtcbn1cblxuZnVuY3Rpb24gV3JpdGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIC8vIFdyaXRhYmxlIGN0b3IgaXMgYXBwbGllZCB0byBEdXBsZXhlcywgdG9vLlxuICAvLyBgcmVhbEhhc0luc3RhbmNlYCBpcyBuZWNlc3NhcnkgYmVjYXVzZSB1c2luZyBwbGFpbiBgaW5zdGFuY2VvZmBcbiAgLy8gd291bGQgcmV0dXJuIGZhbHNlLCBhcyBubyBgX3dyaXRhYmxlU3RhdGVgIHByb3BlcnR5IGlzIGF0dGFjaGVkLlxuXG4gIC8vIFRyeWluZyB0byB1c2UgdGhlIGN1c3RvbSBgaW5zdGFuY2VvZmAgZm9yIFdyaXRhYmxlIGhlcmUgd2lsbCBhbHNvIGJyZWFrIHRoZVxuICAvLyBOb2RlLmpzIExhenlUcmFuc2Zvcm0gaW1wbGVtZW50YXRpb24sIHdoaWNoIGhhcyBhIG5vbi10cml2aWFsIGdldHRlciBmb3JcbiAgLy8gYF93cml0YWJsZVN0YXRlYCB0aGF0IHdvdWxkIGxlYWQgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICBpZiAoIXJlYWxIYXNJbnN0YW5jZS5jYWxsKFdyaXRhYmxlLCB0aGlzKSAmJiAhKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSB7XG4gICAgcmV0dXJuIG5ldyBXcml0YWJsZShvcHRpb25zKTtcbiAgfVxuXG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUgPSBuZXcgV3JpdGFibGVTdGF0ZShvcHRpb25zLCB0aGlzKTtcblxuICAvLyBsZWdhY3kuXG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRlID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZSA9IG9wdGlvbnMud3JpdGU7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JpdGV2ID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZXYgPSBvcHRpb25zLndyaXRldjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB0aGlzLl9kZXN0cm95ID0gb3B0aW9ucy5kZXN0cm95O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZpbmFsID09PSAnZnVuY3Rpb24nKSB0aGlzLl9maW5hbCA9IG9wdGlvbnMuZmluYWw7XG4gIH1cblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbn1cblxuLy8gT3RoZXJ3aXNlIHBlb3BsZSBjYW4gcGlwZSBXcml0YWJsZSBzdHJlYW1zLCB3aGljaCBpcyBqdXN0IHdyb25nLlxuV3JpdGFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0Nhbm5vdCBwaXBlLCBub3QgcmVhZGFibGUnKSk7XG59O1xuXG5mdW5jdGlvbiB3cml0ZUFmdGVyRW5kKHN0cmVhbSwgY2IpIHtcbiAgdmFyIGVyID0gbmV3IEVycm9yKCd3cml0ZSBhZnRlciBlbmQnKTtcbiAgLy8gVE9ETzogZGVmZXIgZXJyb3IgZXZlbnRzIGNvbnNpc3RlbnRseSBldmVyeXdoZXJlLCBub3QganVzdCB0aGUgY2JcbiAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICBwbmEubmV4dFRpY2soY2IsIGVyKTtcbn1cblxuLy8gQ2hlY2tzIHRoYXQgYSB1c2VyLXN1cHBsaWVkIGNodW5rIGlzIHZhbGlkLCBlc3BlY2lhbGx5IGZvciB0aGUgcGFydGljdWxhclxuLy8gbW9kZSB0aGUgc3RyZWFtIGlzIGluLiBDdXJyZW50bHkgdGhpcyBtZWFucyB0aGF0IGBudWxsYCBpcyBuZXZlciBhY2NlcHRlZFxuLy8gYW5kIHVuZGVmaW5lZC9ub24tc3RyaW5nIHZhbHVlcyBhcmUgb25seSBhbGxvd2VkIGluIG9iamVjdCBtb2RlLlxuZnVuY3Rpb24gdmFsaWRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgY2IpIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgdmFyIGVyID0gZmFsc2U7XG5cbiAgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdNYXkgbm90IHdyaXRlIG51bGwgdmFsdWVzIHRvIHN0cmVhbScpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIGlmIChlcikge1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICBwbmEubmV4dFRpY2soY2IsIGVyKTtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWxpZDtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHJldCA9IGZhbHNlO1xuICB2YXIgaXNCdWYgPSAhc3RhdGUub2JqZWN0TW9kZSAmJiBfaXNVaW50OEFycmF5KGNodW5rKTtcblxuICBpZiAoaXNCdWYgJiYgIUJ1ZmZlci5pc0J1ZmZlcihjaHVuaykpIHtcbiAgICBjaHVuayA9IF91aW50OEFycmF5VG9CdWZmZXIoY2h1bmspO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGlzQnVmKSBlbmNvZGluZyA9ICdidWZmZXInO2Vsc2UgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSBzdGF0ZS5kZWZhdWx0RW5jb2Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgY2IgPSBub3A7XG5cbiAgaWYgKHN0YXRlLmVuZGVkKSB3cml0ZUFmdGVyRW5kKHRoaXMsIGNiKTtlbHNlIGlmIChpc0J1ZiB8fCB2YWxpZENodW5rKHRoaXMsIHN0YXRlLCBjaHVuaywgY2IpKSB7XG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgcmV0ID0gd3JpdGVPckJ1ZmZlcih0aGlzLCBzdGF0ZSwgaXNCdWYsIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIHN0YXRlLmNvcmtlZCsrO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnVuY29yayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkLS07XG5cbiAgICBpZiAoIXN0YXRlLndyaXRpbmcgJiYgIXN0YXRlLmNvcmtlZCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSBjbGVhckJ1ZmZlcih0aGlzLCBzdGF0ZSk7XG4gIH1cbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5zZXREZWZhdWx0RW5jb2RpbmcgPSBmdW5jdGlvbiBzZXREZWZhdWx0RW5jb2RpbmcoZW5jb2RpbmcpIHtcbiAgLy8gbm9kZTo6UGFyc2VFbmNvZGluZygpIHJlcXVpcmVzIGxvd2VyIGNhc2UuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSBlbmNvZGluZyA9IGVuY29kaW5nLnRvTG93ZXJDYXNlKCk7XG4gIGlmICghKFsnaGV4JywgJ3V0ZjgnLCAndXRmLTgnLCAnYXNjaWknLCAnYmluYXJ5JywgJ2Jhc2U2NCcsICd1Y3MyJywgJ3Vjcy0yJywgJ3V0ZjE2bGUnLCAndXRmLTE2bGUnLCAncmF3J10uaW5kZXhPZigoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKSkgPiAtMSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZyk7XG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVmYXVsdEVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZykge1xuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgc3RhdGUuZGVjb2RlU3RyaW5ncyAhPT0gZmFsc2UgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGNodW5rID0gQnVmZmVyLmZyb20oY2h1bmssIGVuY29kaW5nKTtcbiAgfVxuICByZXR1cm4gY2h1bms7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZS5wcm90b3R5cGUsICd3cml0YWJsZUhpZ2hXYXRlck1hcmsnLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl93cml0YWJsZVN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIH1cbn0pO1xuXG4vLyBpZiB3ZSdyZSBhbHJlYWR5IHdyaXRpbmcgc29tZXRoaW5nLCB0aGVuIGp1c3QgcHV0IHRoaXNcbi8vIGluIHRoZSBxdWV1ZSwgYW5kIHdhaXQgb3VyIHR1cm4uICBPdGhlcndpc2UsIGNhbGwgX3dyaXRlXG4vLyBJZiB3ZSByZXR1cm4gZmFsc2UsIHRoZW4gd2UgbmVlZCBhIGRyYWluIGV2ZW50LCBzbyBzZXQgdGhhdCBmbGFnLlxuZnVuY3Rpb24gd3JpdGVPckJ1ZmZlcihzdHJlYW0sIHN0YXRlLCBpc0J1ZiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBpZiAoIWlzQnVmKSB7XG4gICAgdmFyIG5ld0NodW5rID0gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZyk7XG4gICAgaWYgKGNodW5rICE9PSBuZXdDaHVuaykge1xuICAgICAgaXNCdWYgPSB0cnVlO1xuICAgICAgZW5jb2RpbmcgPSAnYnVmZmVyJztcbiAgICAgIGNodW5rID0gbmV3Q2h1bms7XG4gICAgfVxuICB9XG4gIHZhciBsZW4gPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcblxuICBzdGF0ZS5sZW5ndGggKz0gbGVuO1xuXG4gIHZhciByZXQgPSBzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICAvLyB3ZSBtdXN0IGVuc3VyZSB0aGF0IHByZXZpb3VzIG5lZWREcmFpbiB3aWxsIG5vdCBiZSByZXNldCB0byBmYWxzZS5cbiAgaWYgKCFyZXQpIHN0YXRlLm5lZWREcmFpbiA9IHRydWU7XG5cbiAgaWYgKHN0YXRlLndyaXRpbmcgfHwgc3RhdGUuY29ya2VkKSB7XG4gICAgdmFyIGxhc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSB7XG4gICAgICBjaHVuazogY2h1bmssXG4gICAgICBlbmNvZGluZzogZW5jb2RpbmcsXG4gICAgICBpc0J1ZjogaXNCdWYsXG4gICAgICBjYWxsYmFjazogY2IsXG4gICAgICBuZXh0OiBudWxsXG4gICAgfTtcbiAgICBpZiAobGFzdCkge1xuICAgICAgbGFzdC5uZXh0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9XG4gICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB3cml0ZXYsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBzdGF0ZS53cml0ZWxlbiA9IGxlbjtcbiAgc3RhdGUud3JpdGVjYiA9IGNiO1xuICBzdGF0ZS53cml0aW5nID0gdHJ1ZTtcbiAgc3RhdGUuc3luYyA9IHRydWU7XG4gIGlmICh3cml0ZXYpIHN0cmVhbS5fd3JpdGV2KGNodW5rLCBzdGF0ZS5vbndyaXRlKTtlbHNlIHN0cmVhbS5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBzdGF0ZS5vbndyaXRlKTtcbiAgc3RhdGUuc3luYyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKSB7XG4gIC0tc3RhdGUucGVuZGluZ2NiO1xuXG4gIGlmIChzeW5jKSB7XG4gICAgLy8gZGVmZXIgdGhlIGNhbGxiYWNrIGlmIHdlIGFyZSBiZWluZyBjYWxsZWQgc3luY2hyb25vdXNseVxuICAgIC8vIHRvIGF2b2lkIHBpbGluZyB1cCB0aGluZ3Mgb24gdGhlIHN0YWNrXG4gICAgcG5hLm5leHRUaWNrKGNiLCBlcik7XG4gICAgLy8gdGhpcyBjYW4gZW1pdCBmaW5pc2gsIGFuZCBpdCB3aWxsIGFsd2F5cyBoYXBwZW5cbiAgICAvLyBhZnRlciBlcnJvclxuICAgIHBuYS5uZXh0VGljayhmaW5pc2hNYXliZSwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBjYWxsZXIgZXhwZWN0IHRoaXMgdG8gaGFwcGVuIGJlZm9yZSBpZlxuICAgIC8vIGl0IGlzIGFzeW5jXG4gICAgY2IoZXIpO1xuICAgIHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICAvLyB0aGlzIGNhbiBlbWl0IGZpbmlzaCwgYnV0IGZpbmlzaCBtdXN0XG4gICAgLy8gYWx3YXlzIGZvbGxvdyBlcnJvclxuICAgIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGVTdGF0ZVVwZGF0ZShzdGF0ZSkge1xuICBzdGF0ZS53cml0aW5nID0gZmFsc2U7XG4gIHN0YXRlLndyaXRlY2IgPSBudWxsO1xuICBzdGF0ZS5sZW5ndGggLT0gc3RhdGUud3JpdGVsZW47XG4gIHN0YXRlLndyaXRlbGVuID0gMDtcbn1cblxuZnVuY3Rpb24gb253cml0ZShzdHJlYW0sIGVyKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHN5bmMgPSBzdGF0ZS5zeW5jO1xuICB2YXIgY2IgPSBzdGF0ZS53cml0ZWNiO1xuXG4gIG9ud3JpdGVTdGF0ZVVwZGF0ZShzdGF0ZSk7XG5cbiAgaWYgKGVyKSBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKTtlbHNlIHtcbiAgICAvLyBDaGVjayBpZiB3ZSdyZSBhY3R1YWxseSByZWFkeSB0byBmaW5pc2gsIGJ1dCBkb24ndCBlbWl0IHlldFxuICAgIHZhciBmaW5pc2hlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuXG4gICAgaWYgKCFmaW5pc2hlZCAmJiAhc3RhdGUuY29ya2VkICYmICFzdGF0ZS5idWZmZXJQcm9jZXNzaW5nICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCkge1xuICAgICAgY2xlYXJCdWZmZXIoc3RyZWFtLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIC8qPHJlcGxhY2VtZW50PiovXG4gICAgICBhc3luY1dyaXRlKGFmdGVyV3JpdGUsIHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgICAvKjwvcmVwbGFjZW1lbnQ+Ki9cbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJXcml0ZShzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZnRlcldyaXRlKHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYikge1xuICBpZiAoIWZpbmlzaGVkKSBvbndyaXRlRHJhaW4oc3RyZWFtLCBzdGF0ZSk7XG4gIHN0YXRlLnBlbmRpbmdjYi0tO1xuICBjYigpO1xuICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbn1cblxuLy8gTXVzdCBmb3JjZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgb24gbmV4dFRpY2ssIHNvIHRoYXQgd2UgZG9uJ3Rcbi8vIGVtaXQgJ2RyYWluJyBiZWZvcmUgdGhlIHdyaXRlKCkgY29uc3VtZXIgZ2V0cyB0aGUgJ2ZhbHNlJyByZXR1cm5cbi8vIHZhbHVlLCBhbmQgaGFzIGEgY2hhbmNlIHRvIGF0dGFjaCBhICdkcmFpbicgbGlzdGVuZXIuXG5mdW5jdGlvbiBvbndyaXRlRHJhaW4oc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLm5lZWREcmFpbikge1xuICAgIHN0YXRlLm5lZWREcmFpbiA9IGZhbHNlO1xuICAgIHN0cmVhbS5lbWl0KCdkcmFpbicpO1xuICB9XG59XG5cbi8vIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHRoZSBidWZmZXIgd2FpdGluZywgdGhlbiBwcm9jZXNzIGl0XG5mdW5jdGlvbiBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKSB7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSB0cnVlO1xuICB2YXIgZW50cnkgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3Q7XG5cbiAgaWYgKHN0cmVhbS5fd3JpdGV2ICYmIGVudHJ5ICYmIGVudHJ5Lm5leHQpIHtcbiAgICAvLyBGYXN0IGNhc2UsIHdyaXRlIGV2ZXJ5dGhpbmcgdXNpbmcgX3dyaXRldigpXG4gICAgdmFyIGwgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudDtcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5KGwpO1xuICAgIHZhciBob2xkZXIgPSBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWU7XG4gICAgaG9sZGVyLmVudHJ5ID0gZW50cnk7XG5cbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBhbGxCdWZmZXJzID0gdHJ1ZTtcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIGJ1ZmZlcltjb3VudF0gPSBlbnRyeTtcbiAgICAgIGlmICghZW50cnkuaXNCdWYpIGFsbEJ1ZmZlcnMgPSBmYWxzZTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuICAgIGJ1ZmZlci5hbGxCdWZmZXJzID0gYWxsQnVmZmVycztcblxuICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgdHJ1ZSwgc3RhdGUubGVuZ3RoLCBidWZmZXIsICcnLCBob2xkZXIuZmluaXNoKTtcblxuICAgIC8vIGRvV3JpdGUgaXMgYWxtb3N0IGFsd2F5cyBhc3luYywgZGVmZXIgdGhlc2UgdG8gc2F2ZSBhIGJpdCBvZiB0aW1lXG4gICAgLy8gYXMgdGhlIGhvdCBwYXRoIGVuZHMgd2l0aCBkb1dyaXRlXG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gICAgaWYgKGhvbGRlci5uZXh0KSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBob2xkZXIubmV4dDtcbiAgICAgIGhvbGRlci5uZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3Qoc3RhdGUpO1xuICAgIH1cbiAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gU2xvdyBjYXNlLCB3cml0ZSBjaHVua3Mgb25lLWJ5LW9uZVxuICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgdmFyIGNodW5rID0gZW50cnkuY2h1bms7XG4gICAgICB2YXIgZW5jb2RpbmcgPSBlbnRyeS5lbmNvZGluZztcbiAgICAgIHZhciBjYiA9IGVudHJ5LmNhbGxiYWNrO1xuICAgICAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXG4gICAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQtLTtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBjYWxsIHRoZSBvbndyaXRlIGltbWVkaWF0ZWx5LCB0aGVuXG4gICAgICAvLyBpdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gd2FpdCB1bnRpbCBpdCBkb2VzLlxuICAgICAgLy8gYWxzbywgdGhhdCBtZWFucyB0aGF0IHRoZSBjaHVuayBhbmQgY2IgYXJlIGN1cnJlbnRseVxuICAgICAgLy8gYmVpbmcgcHJvY2Vzc2VkLCBzbyBtb3ZlIHRoZSBidWZmZXIgY291bnRlciBwYXN0IHRoZW0uXG4gICAgICBpZiAoc3RhdGUud3JpdGluZykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW50cnkgPT09IG51bGwpIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB9XG5cbiAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gZW50cnk7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSBmYWxzZTtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGNiKG5ldyBFcnJvcignX3dyaXRlKCkgaXMgbm90IGltcGxlbWVudGVkJykpO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZXYgPSBudWxsO1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAodHlwZW9mIGNodW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBjaHVuaztcbiAgICBjaHVuayA9IG51bGw7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGNodW5rICE9PSBudWxsICYmIGNodW5rICE9PSB1bmRlZmluZWQpIHRoaXMud3JpdGUoY2h1bmssIGVuY29kaW5nKTtcblxuICAvLyAuZW5kKCkgZnVsbHkgdW5jb3Jrc1xuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkID0gMTtcbiAgICB0aGlzLnVuY29yaygpO1xuICB9XG5cbiAgLy8gaWdub3JlIHVubmVjZXNzYXJ5IGVuZCgpIGNhbGxzLlxuICBpZiAoIXN0YXRlLmVuZGluZyAmJiAhc3RhdGUuZmluaXNoZWQpIGVuZFdyaXRhYmxlKHRoaXMsIHN0YXRlLCBjYik7XG59O1xuXG5mdW5jdGlvbiBuZWVkRmluaXNoKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5lbmRpbmcgJiYgc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9PT0gbnVsbCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLndyaXRpbmc7XG59XG5mdW5jdGlvbiBjYWxsRmluYWwoc3RyZWFtLCBzdGF0ZSkge1xuICBzdHJlYW0uX2ZpbmFsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgIH1cbiAgICBzdGF0ZS5wcmVmaW5pc2hlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ3ByZWZpbmlzaCcpO1xuICAgIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucHJlZmluaXNoZWQgJiYgIXN0YXRlLmZpbmFsQ2FsbGVkKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJlYW0uX2ZpbmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICAgIHN0YXRlLmZpbmFsQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHBuYS5uZXh0VGljayhjYWxsRmluYWwsIHN0cmVhbSwgc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wcmVmaW5pc2hlZCA9IHRydWU7XG4gICAgICBzdHJlYW0uZW1pdCgncHJlZmluaXNoJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpIHtcbiAgdmFyIG5lZWQgPSBuZWVkRmluaXNoKHN0YXRlKTtcbiAgaWYgKG5lZWQpIHtcbiAgICBwcmVmaW5pc2goc3RyZWFtLCBzdGF0ZSk7XG4gICAgaWYgKHN0YXRlLnBlbmRpbmdjYiA9PT0gMCkge1xuICAgICAgc3RhdGUuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLmVtaXQoJ2ZpbmlzaCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmVlZDtcbn1cblxuZnVuY3Rpb24gZW5kV3JpdGFibGUoc3RyZWFtLCBzdGF0ZSwgY2IpIHtcbiAgc3RhdGUuZW5kaW5nID0gdHJ1ZTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIGlmIChjYikge1xuICAgIGlmIChzdGF0ZS5maW5pc2hlZCkgcG5hLm5leHRUaWNrKGNiKTtlbHNlIHN0cmVhbS5vbmNlKCdmaW5pc2gnLCBjYik7XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICBzdHJlYW0ud3JpdGFibGUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb25Db3JrZWRGaW5pc2goY29ya1JlcSwgc3RhdGUsIGVycikge1xuICB2YXIgZW50cnkgPSBjb3JrUmVxLmVudHJ5O1xuICBjb3JrUmVxLmVudHJ5ID0gbnVsbDtcbiAgd2hpbGUgKGVudHJ5KSB7XG4gICAgdmFyIGNiID0gZW50cnkuY2FsbGJhY2s7XG4gICAgc3RhdGUucGVuZGluZ2NiLS07XG4gICAgY2IoZXJyKTtcbiAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gIH1cbiAgaWYgKHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSkge1xuICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZS5uZXh0ID0gY29ya1JlcTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBjb3JrUmVxO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZS5wcm90b3R5cGUsICdkZXN0cm95ZWQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl93cml0YWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHdlIGlnbm9yZSB0aGUgdmFsdWUgaWYgdGhlIHN0cmVhbVxuICAgIC8vIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCB5ZXRcbiAgICBpZiAoIXRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0aGUgdXNlciBpcyBleHBsaWNpdGx5XG4gICAgLy8gbWFuYWdpbmcgZGVzdHJveWVkXG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgfVxufSk7XG5cbldyaXRhYmxlLnByb3RvdHlwZS5kZXN0cm95ID0gZGVzdHJveUltcGwuZGVzdHJveTtcbldyaXRhYmxlLnByb3RvdHlwZS5fdW5kZXN0cm95ID0gZGVzdHJveUltcGwudW5kZXN0cm95O1xuV3JpdGFibGUucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgdGhpcy5lbmQoKTtcbiAgY2IoZXJyKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuZnVuY3Rpb24gY29weUJ1ZmZlcihzcmMsIHRhcmdldCwgb2Zmc2V0KSB7XG4gIHNyYy5jb3B5KHRhcmdldCwgb2Zmc2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJ1ZmZlckxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1ZmZlckxpc3QpO1xuXG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoKHYpIHtcbiAgICB2YXIgZW50cnkgPSB7IGRhdGE6IHYsIG5leHQ6IG51bGwgfTtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB0aGlzLnRhaWwubmV4dCA9IGVudHJ5O2Vsc2UgdGhpcy5oZWFkID0gZW50cnk7XG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgKyt0aGlzLmxlbmd0aDtcbiAgfTtcblxuICBCdWZmZXJMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gdW5zaGlmdCh2KSB7XG4gICAgdmFyIGVudHJ5ID0geyBkYXRhOiB2LCBuZXh0OiB0aGlzLmhlYWQgfTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHRoaXMudGFpbCA9IGVudHJ5O1xuICAgIHRoaXMuaGVhZCA9IGVudHJ5O1xuICAgICsrdGhpcy5sZW5ndGg7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICB2YXIgcmV0ID0gdGhpcy5oZWFkLmRhdGE7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO2Vsc2UgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgLS10aGlzLmxlbmd0aDtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIEJ1ZmZlckxpc3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uIGpvaW4ocykge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICAgIHZhciBwID0gdGhpcy5oZWFkO1xuICAgIHZhciByZXQgPSAnJyArIHAuZGF0YTtcbiAgICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgICAgcmV0ICs9IHMgKyBwLmRhdGE7XG4gICAgfXJldHVybiByZXQ7XG4gIH07XG5cbiAgQnVmZmVyTGlzdC5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KG4pIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiBCdWZmZXIuYWxsb2MoMCk7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XG4gICAgdmFyIHJldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuID4+PiAwKTtcbiAgICB2YXIgcCA9IHRoaXMuaGVhZDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKHApIHtcbiAgICAgIGNvcHlCdWZmZXIocC5kYXRhLCByZXQsIGkpO1xuICAgICAgaSArPSBwLmRhdGEubGVuZ3RoO1xuICAgICAgcCA9IHAubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICByZXR1cm4gQnVmZmVyTGlzdDtcbn0oKTtcblxuaWYgKHV0aWwgJiYgdXRpbC5pbnNwZWN0ICYmIHV0aWwuaW5zcGVjdC5jdXN0b20pIHtcbiAgbW9kdWxlLmV4cG9ydHMucHJvdG90eXBlW3V0aWwuaW5zcGVjdC5jdXN0b21dID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYmogPSB1dGlsLmluc3BlY3QoeyBsZW5ndGg6IHRoaXMubGVuZ3RoIH0pO1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyAnICcgKyBvYmo7XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgcG5hID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vLyB1bmRvY3VtZW50ZWQgY2IoKSBBUEksIG5lZWRlZCBmb3IgY29yZSwgbm90IGZvciBwdWJsaWMgQVBJXG5mdW5jdGlvbiBkZXN0cm95KGVyciwgY2IpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgcmVhZGFibGVEZXN0cm95ZWQgPSB0aGlzLl9yZWFkYWJsZVN0YXRlICYmIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkO1xuICB2YXIgd3JpdGFibGVEZXN0cm95ZWQgPSB0aGlzLl93cml0YWJsZVN0YXRlICYmIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkO1xuXG4gIGlmIChyZWFkYWJsZURlc3Ryb3llZCB8fCB3cml0YWJsZURlc3Ryb3llZCkge1xuICAgIGlmIChjYikge1xuICAgICAgY2IoZXJyKTtcbiAgICB9IGVsc2UgaWYgKGVyciAmJiAoIXRoaXMuX3dyaXRhYmxlU3RhdGUgfHwgIXRoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkKSkge1xuICAgICAgcG5hLm5leHRUaWNrKGVtaXRFcnJvck5ULCB0aGlzLCBlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHdlIHNldCBkZXN0cm95ZWQgdG8gdHJ1ZSBiZWZvcmUgZmlyaW5nIGVycm9yIGNhbGxiYWNrcyBpbiBvcmRlclxuICAvLyB0byBtYWtlIGl0IHJlLWVudHJhbmNlIHNhZmUgaW4gY2FzZSBkZXN0cm95KCkgaXMgY2FsbGVkIHdpdGhpbiBjYWxsYmFja3NcblxuICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIHRoaXMgaXMgYSBkdXBsZXggc3RyZWFtIG1hcmsgdGhlIHdyaXRhYmxlIHBhcnQgYXMgZGVzdHJveWVkIGFzIHdlbGxcbiAgaWYgKHRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICB0aGlzLl9kZXN0cm95KGVyciB8fCBudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKCFjYiAmJiBlcnIpIHtcbiAgICAgIHBuYS5uZXh0VGljayhlbWl0RXJyb3JOVCwgX3RoaXMsIGVycik7XG4gICAgICBpZiAoX3RoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICAgICAgX3RoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNiKSB7XG4gICAgICBjYihlcnIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHVuZGVzdHJveSgpIHtcbiAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUpIHtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLl93cml0YWJsZVN0YXRlKSB7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmVuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0RXJyb3JOVChzZWxmLCBlcnIpIHtcbiAgc2VsZi5lbWl0KCdlcnJvcicsIGVycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZXN0cm95OiBkZXN0cm95LFxuICB1bmRlc3Ryb3k6IHVuZGVzdHJveVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcmVhZGFibGUuanMnKTtcbmV4cG9ydHMuU3RyZWFtID0gZXhwb3J0cztcbmV4cG9ydHMuUmVhZGFibGUgPSBleHBvcnRzO1xuZXhwb3J0cy5Xcml0YWJsZSA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fd3JpdGFibGUuanMnKTtcbmV4cG9ydHMuRHVwbGV4ID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9kdXBsZXguanMnKTtcbmV4cG9ydHMuVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanMnKTtcbmV4cG9ydHMuUGFzc1Rocm91Z2ggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3Bhc3N0aHJvdWdoLmpzJyk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIGlzRW5jb2RpbmcgPSBCdWZmZXIuaXNFbmNvZGluZyB8fCBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgZW5jb2RpbmcgPSAnJyArIGVuY29kaW5nO1xuICBzd2l0Y2ggKGVuY29kaW5nICYmIGVuY29kaW5nLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOmNhc2UgJ3V0ZjgnOmNhc2UgJ3V0Zi04JzpjYXNlICdhc2NpaSc6Y2FzZSAnYmluYXJ5JzpjYXNlICdiYXNlNjQnOmNhc2UgJ3VjczInOmNhc2UgJ3Vjcy0yJzpjYXNlICd1dGYxNmxlJzpjYXNlICd1dGYtMTZsZSc6Y2FzZSAncmF3JzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9ub3JtYWxpemVFbmNvZGluZyhlbmMpIHtcbiAgaWYgKCFlbmMpIHJldHVybiAndXRmOCc7XG4gIHZhciByZXRyaWVkO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jKSB7XG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuICd1dGY4JztcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiAndXRmMTZsZSc7XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuICdsYXRpbjEnO1xuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBlbmM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAocmV0cmllZCkgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgICAgICAgZW5jID0gKCcnICsgZW5jKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXRyaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIERvIG5vdCBjYWNoZSBgQnVmZmVyLmlzRW5jb2RpbmdgIHdoZW4gY2hlY2tpbmcgZW5jb2RpbmcgbmFtZXMgYXMgc29tZVxuLy8gbW9kdWxlcyBtb25rZXktcGF0Y2ggaXQgdG8gc3VwcG9ydCBhZGRpdGlvbmFsIGVuY29kaW5nc1xuZnVuY3Rpb24gbm9ybWFsaXplRW5jb2RpbmcoZW5jKSB7XG4gIHZhciBuZW5jID0gX25vcm1hbGl6ZUVuY29kaW5nKGVuYyk7XG4gIGlmICh0eXBlb2YgbmVuYyAhPT0gJ3N0cmluZycgJiYgKEJ1ZmZlci5pc0VuY29kaW5nID09PSBpc0VuY29kaW5nIHx8ICFpc0VuY29kaW5nKGVuYykpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmMpO1xuICByZXR1cm4gbmVuYyB8fCBlbmM7XG59XG5cbi8vIFN0cmluZ0RlY29kZXIgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBlZmZpY2llbnRseSBzcGxpdHRpbmcgYSBzZXJpZXMgb2Zcbi8vIGJ1ZmZlcnMgaW50byBhIHNlcmllcyBvZiBKUyBzdHJpbmdzIHdpdGhvdXQgYnJlYWtpbmcgYXBhcnQgbXVsdGktYnl0ZVxuLy8gY2hhcmFjdGVycy5cbmV4cG9ydHMuU3RyaW5nRGVjb2RlciA9IFN0cmluZ0RlY29kZXI7XG5mdW5jdGlvbiBTdHJpbmdEZWNvZGVyKGVuY29kaW5nKSB7XG4gIHRoaXMuZW5jb2RpbmcgPSBub3JtYWxpemVFbmNvZGluZyhlbmNvZGluZyk7XG4gIHZhciBuYjtcbiAgc3dpdGNoICh0aGlzLmVuY29kaW5nKSB7XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICB0aGlzLnRleHQgPSB1dGYxNlRleHQ7XG4gICAgICB0aGlzLmVuZCA9IHV0ZjE2RW5kO1xuICAgICAgbmIgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndXRmOCc6XG4gICAgICB0aGlzLmZpbGxMYXN0ID0gdXRmOEZpbGxMYXN0O1xuICAgICAgbmIgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHRoaXMudGV4dCA9IGJhc2U2NFRleHQ7XG4gICAgICB0aGlzLmVuZCA9IGJhc2U2NEVuZDtcbiAgICAgIG5iID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzLndyaXRlID0gc2ltcGxlV3JpdGU7XG4gICAgICB0aGlzLmVuZCA9IHNpbXBsZUVuZDtcbiAgICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmxhc3ROZWVkID0gMDtcbiAgdGhpcy5sYXN0VG90YWwgPSAwO1xuICB0aGlzLmxhc3RDaGFyID0gQnVmZmVyLmFsbG9jVW5zYWZlKG5iKTtcbn1cblxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gIHZhciByO1xuICB2YXIgaTtcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHtcbiAgICByID0gdGhpcy5maWxsTGFzdChidWYpO1xuICAgIGlmIChyID09PSB1bmRlZmluZWQpIHJldHVybiAnJztcbiAgICBpID0gdGhpcy5sYXN0TmVlZDtcbiAgICB0aGlzLmxhc3ROZWVkID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgfVxuICBpZiAoaSA8IGJ1Zi5sZW5ndGgpIHJldHVybiByID8gciArIHRoaXMudGV4dChidWYsIGkpIDogdGhpcy50ZXh0KGJ1ZiwgaSk7XG4gIHJldHVybiByIHx8ICcnO1xufTtcblxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZW5kID0gdXRmOEVuZDtcblxuLy8gUmV0dXJucyBvbmx5IGNvbXBsZXRlIGNoYXJhY3RlcnMgaW4gYSBCdWZmZXJcblN0cmluZ0RlY29kZXIucHJvdG90eXBlLnRleHQgPSB1dGY4VGV4dDtcblxuLy8gQXR0ZW1wdHMgdG8gY29tcGxldGUgYSBwYXJ0aWFsIG5vbi1VVEYtOCBjaGFyYWN0ZXIgdXNpbmcgYnl0ZXMgZnJvbSBhIEJ1ZmZlclxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZmlsbExhc3QgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIGlmICh0aGlzLmxhc3ROZWVkIDw9IGJ1Zi5sZW5ndGgpIHtcbiAgICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQsIDAsIHRoaXMubGFzdE5lZWQpO1xuICAgIHJldHVybiB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIDAsIHRoaXMubGFzdFRvdGFsKTtcbiAgfVxuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQsIDAsIGJ1Zi5sZW5ndGgpO1xuICB0aGlzLmxhc3ROZWVkIC09IGJ1Zi5sZW5ndGg7XG59O1xuXG4vLyBDaGVja3MgdGhlIHR5cGUgb2YgYSBVVEYtOCBieXRlLCB3aGV0aGVyIGl0J3MgQVNDSUksIGEgbGVhZGluZyBieXRlLCBvciBhXG4vLyBjb250aW51YXRpb24gYnl0ZS4gSWYgYW4gaW52YWxpZCBieXRlIGlzIGRldGVjdGVkLCAtMiBpcyByZXR1cm5lZC5cbmZ1bmN0aW9uIHV0ZjhDaGVja0J5dGUoYnl0ZSkge1xuICBpZiAoYnl0ZSA8PSAweDdGKSByZXR1cm4gMDtlbHNlIGlmIChieXRlID4+IDUgPT09IDB4MDYpIHJldHVybiAyO2Vsc2UgaWYgKGJ5dGUgPj4gNCA9PT0gMHgwRSkgcmV0dXJuIDM7ZWxzZSBpZiAoYnl0ZSA+PiAzID09PSAweDFFKSByZXR1cm4gNDtcbiAgcmV0dXJuIGJ5dGUgPj4gNiA9PT0gMHgwMiA/IC0xIDogLTI7XG59XG5cbi8vIENoZWNrcyBhdCBtb3N0IDMgYnl0ZXMgYXQgdGhlIGVuZCBvZiBhIEJ1ZmZlciBpbiBvcmRlciB0byBkZXRlY3QgYW5cbi8vIGluY29tcGxldGUgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIuIFRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgKDIsIDMsIG9yIDQpXG4vLyBuZWVkZWQgdG8gY29tcGxldGUgdGhlIFVURi04IGNoYXJhY3RlciAoaWYgYXBwbGljYWJsZSkgYXJlIHJldHVybmVkLlxuZnVuY3Rpb24gdXRmOENoZWNrSW5jb21wbGV0ZShzZWxmLCBidWYsIGkpIHtcbiAgdmFyIGogPSBidWYubGVuZ3RoIC0gMTtcbiAgaWYgKGogPCBpKSByZXR1cm4gMDtcbiAgdmFyIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHNlbGYubGFzdE5lZWQgPSBuYiAtIDE7XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIGlmICgtLWogPCBpIHx8IG5iID09PSAtMikgcmV0dXJuIDA7XG4gIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHNlbGYubGFzdE5lZWQgPSBuYiAtIDI7XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIGlmICgtLWogPCBpIHx8IG5iID09PSAtMikgcmV0dXJuIDA7XG4gIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHtcbiAgICAgIGlmIChuYiA9PT0gMikgbmIgPSAwO2Vsc2Ugc2VsZi5sYXN0TmVlZCA9IG5iIC0gMztcbiAgICB9XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG4vLyBWYWxpZGF0ZXMgYXMgbWFueSBjb250aW51YXRpb24gYnl0ZXMgZm9yIGEgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIgYXNcbi8vIG5lZWRlZCBvciBhcmUgYXZhaWxhYmxlLiBJZiB3ZSBzZWUgYSBub24tY29udGludWF0aW9uIGJ5dGUgd2hlcmUgd2UgZXhwZWN0XG4vLyBvbmUsIHdlIFwicmVwbGFjZVwiIHRoZSB2YWxpZGF0ZWQgY29udGludWF0aW9uIGJ5dGVzIHdlJ3ZlIHNlZW4gc28gZmFyIHdpdGhcbi8vIGEgc2luZ2xlIFVURi04IHJlcGxhY2VtZW50IGNoYXJhY3RlciAoJ1xcdWZmZmQnKSwgdG8gbWF0Y2ggdjgncyBVVEYtOCBkZWNvZGluZ1xuLy8gYmVoYXZpb3IuIFRoZSBjb250aW51YXRpb24gYnl0ZSBjaGVjayBpcyBpbmNsdWRlZCB0aHJlZSB0aW1lcyBpbiB0aGUgY2FzZVxuLy8gd2hlcmUgYWxsIG9mIHRoZSBjb250aW51YXRpb24gYnl0ZXMgZm9yIGEgY2hhcmFjdGVyIGV4aXN0IGluIHRoZSBzYW1lIGJ1ZmZlci5cbi8vIEl0IGlzIGFsc28gZG9uZSB0aGlzIHdheSBhcyBhIHNsaWdodCBwZXJmb3JtYW5jZSBpbmNyZWFzZSBpbnN0ZWFkIG9mIHVzaW5nIGFcbi8vIGxvb3AuXG5mdW5jdGlvbiB1dGY4Q2hlY2tFeHRyYUJ5dGVzKHNlbGYsIGJ1ZiwgcCkge1xuICBpZiAoKGJ1ZlswXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgc2VsZi5sYXN0TmVlZCA9IDA7XG4gICAgcmV0dXJuICdcXHVmZmZkJztcbiAgfVxuICBpZiAoc2VsZi5sYXN0TmVlZCA+IDEgJiYgYnVmLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoKGJ1ZlsxXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgICBzZWxmLmxhc3ROZWVkID0gMTtcbiAgICAgIHJldHVybiAnXFx1ZmZmZCc7XG4gICAgfVxuICAgIGlmIChzZWxmLmxhc3ROZWVkID4gMiAmJiBidWYubGVuZ3RoID4gMikge1xuICAgICAgaWYgKChidWZbMl0gJiAweEMwKSAhPT0gMHg4MCkge1xuICAgICAgICBzZWxmLmxhc3ROZWVkID0gMjtcbiAgICAgICAgcmV0dXJuICdcXHVmZmZkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQXR0ZW1wdHMgdG8gY29tcGxldGUgYSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3RlciB1c2luZyBieXRlcyBmcm9tIGEgQnVmZmVyLlxuZnVuY3Rpb24gdXRmOEZpbGxMYXN0KGJ1Zikge1xuICB2YXIgcCA9IHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZDtcbiAgdmFyIHIgPSB1dGY4Q2hlY2tFeHRyYUJ5dGVzKHRoaXMsIGJ1ZiwgcCk7XG4gIGlmIChyICE9PSB1bmRlZmluZWQpIHJldHVybiByO1xuICBpZiAodGhpcy5sYXN0TmVlZCA8PSBidWYubGVuZ3RoKSB7XG4gICAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgcCwgMCwgdGhpcy5sYXN0TmVlZCk7XG4gICAgcmV0dXJuIHRoaXMubGFzdENoYXIudG9TdHJpbmcodGhpcy5lbmNvZGluZywgMCwgdGhpcy5sYXN0VG90YWwpO1xuICB9XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHAsIDAsIGJ1Zi5sZW5ndGgpO1xuICB0aGlzLmxhc3ROZWVkIC09IGJ1Zi5sZW5ndGg7XG59XG5cbi8vIFJldHVybnMgYWxsIGNvbXBsZXRlIFVURi04IGNoYXJhY3RlcnMgaW4gYSBCdWZmZXIuIElmIHRoZSBCdWZmZXIgZW5kZWQgb24gYVxuLy8gcGFydGlhbCBjaGFyYWN0ZXIsIHRoZSBjaGFyYWN0ZXIncyBieXRlcyBhcmUgYnVmZmVyZWQgdW50aWwgdGhlIHJlcXVpcmVkXG4vLyBudW1iZXIgb2YgYnl0ZXMgYXJlIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIHV0ZjhUZXh0KGJ1ZiwgaSkge1xuICB2YXIgdG90YWwgPSB1dGY4Q2hlY2tJbmNvbXBsZXRlKHRoaXMsIGJ1ZiwgaSk7XG4gIGlmICghdGhpcy5sYXN0TmVlZCkgcmV0dXJuIGJ1Zi50b1N0cmluZygndXRmOCcsIGkpO1xuICB0aGlzLmxhc3RUb3RhbCA9IHRvdGFsO1xuICB2YXIgZW5kID0gYnVmLmxlbmd0aCAtICh0b3RhbCAtIHRoaXMubGFzdE5lZWQpO1xuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCAwLCBlbmQpO1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGY4JywgaSwgZW5kKTtcbn1cblxuLy8gRm9yIFVURi04LCBhIHJlcGxhY2VtZW50IGNoYXJhY3RlciBpcyBhZGRlZCB3aGVuIGVuZGluZyBvbiBhIHBhcnRpYWxcbi8vIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHV0ZjhFbmQoYnVmKSB7XG4gIHZhciByID0gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHJldHVybiByICsgJ1xcdWZmZmQnO1xuICByZXR1cm4gcjtcbn1cblxuLy8gVVRGLTE2TEUgdHlwaWNhbGx5IG5lZWRzIHR3byBieXRlcyBwZXIgY2hhcmFjdGVyLCBidXQgZXZlbiBpZiB3ZSBoYXZlIGFuIGV2ZW5cbi8vIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgd2UgZW5kIG9uIGEgbGVhZGluZy9oaWdoXG4vLyBzdXJyb2dhdGUuIEluIHRoYXQgY2FzZSwgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgbmV4dCB0d28gYnl0ZXMgaW4gb3JkZXIgdG9cbi8vIGRlY29kZSB0aGUgbGFzdCBjaGFyYWN0ZXIgcHJvcGVybHkuXG5mdW5jdGlvbiB1dGYxNlRleHQoYnVmLCBpKSB7XG4gIGlmICgoYnVmLmxlbmd0aCAtIGkpICUgMiA9PT0gMCkge1xuICAgIHZhciByID0gYnVmLnRvU3RyaW5nKCd1dGYxNmxlJywgaSk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHZhciBjID0gci5jaGFyQ29kZUF0KHIubGVuZ3RoIC0gMSk7XG4gICAgICBpZiAoYyA+PSAweEQ4MDAgJiYgYyA8PSAweERCRkYpIHtcbiAgICAgICAgdGhpcy5sYXN0TmVlZCA9IDI7XG4gICAgICAgIHRoaXMubGFzdFRvdGFsID0gNDtcbiAgICAgICAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMl07XG4gICAgICAgIHRoaXMubGFzdENoYXJbMV0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gci5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIHRoaXMubGFzdE5lZWQgPSAxO1xuICB0aGlzLmxhc3RUb3RhbCA9IDI7XG4gIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGYxNmxlJywgaSwgYnVmLmxlbmd0aCAtIDEpO1xufVxuXG4vLyBGb3IgVVRGLTE2TEUgd2UgZG8gbm90IGV4cGxpY2l0bHkgYXBwZW5kIHNwZWNpYWwgcmVwbGFjZW1lbnQgY2hhcmFjdGVycyBpZiB3ZVxuLy8gZW5kIG9uIGEgcGFydGlhbCBjaGFyYWN0ZXIsIHdlIHNpbXBseSBsZXQgdjggaGFuZGxlIHRoYXQuXG5mdW5jdGlvbiB1dGYxNkVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkge1xuICAgIHZhciBlbmQgPSB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQ7XG4gICAgcmV0dXJuIHIgKyB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKCd1dGYxNmxlJywgMCwgZW5kKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gYmFzZTY0VGV4dChidWYsIGkpIHtcbiAgdmFyIG4gPSAoYnVmLmxlbmd0aCAtIGkpICUgMztcbiAgaWYgKG4gPT09IDApIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcsIGkpO1xuICB0aGlzLmxhc3ROZWVkID0gMyAtIG47XG4gIHRoaXMubGFzdFRvdGFsID0gMztcbiAgaWYgKG4gPT09IDEpIHtcbiAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAyXTtcbiAgICB0aGlzLmxhc3RDaGFyWzFdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgfVxuICByZXR1cm4gYnVmLnRvU3RyaW5nKCdiYXNlNjQnLCBpLCBidWYubGVuZ3RoIC0gbik7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NEVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkgcmV0dXJuIHIgKyB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKCdiYXNlNjQnLCAwLCAzIC0gdGhpcy5sYXN0TmVlZCk7XG4gIHJldHVybiByO1xufVxuXG4vLyBQYXNzIGJ5dGVzIG9uIHRocm91Z2ggZm9yIHNpbmdsZS1ieXRlIGVuY29kaW5ncyAoZS5nLiBhc2NpaSwgbGF0aW4xLCBoZXgpXG5mdW5jdGlvbiBzaW1wbGVXcml0ZShidWYpIHtcbiAgcmV0dXJuIGJ1Zi50b1N0cmluZyh0aGlzLmVuY29kaW5nKTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlRW5kKGJ1Zikge1xuICByZXR1cm4gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbn0iLCJ2YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtJykuVHJhbnNmb3JtXG4gICwgaW5oZXJpdHMgID0gcmVxdWlyZSgndXRpbCcpLmluaGVyaXRzXG4gICwgeHRlbmQgICAgID0gcmVxdWlyZSgneHRlbmQnKVxuXG5mdW5jdGlvbiBEZXN0cm95YWJsZVRyYW5zZm9ybShvcHRzKSB7XG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMsIG9wdHMpXG4gIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlXG59XG5cbmluaGVyaXRzKERlc3Ryb3lhYmxlVHJhbnNmb3JtLCBUcmFuc2Zvcm0pXG5cbkRlc3Ryb3lhYmxlVHJhbnNmb3JtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZXJyKSB7XG4gIGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVyblxuICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlXG4gIFxuICB2YXIgc2VsZiA9IHRoaXNcbiAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAoZXJyKVxuICAgICAgc2VsZi5lbWl0KCdlcnJvcicsIGVycilcbiAgICBzZWxmLmVtaXQoJ2Nsb3NlJylcbiAgfSlcbn1cblxuLy8gYSBub29wIF90cmFuc2Zvcm0gZnVuY3Rpb25cbmZ1bmN0aW9uIG5vb3AgKGNodW5rLCBlbmMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKG51bGwsIGNodW5rKVxufVxuXG5cbi8vIGNyZWF0ZSBhIG5ldyBleHBvcnQgZnVuY3Rpb24sIHVzZWQgYnkgYm90aCB0aGUgbWFpbiBleHBvcnQgYW5kXG4vLyB0aGUgLmN0b3IgZXhwb3J0LCBjb250YWlucyBjb21tb24gbG9naWMgZm9yIGRlYWxpbmcgd2l0aCBhcmd1bWVudHNcbmZ1bmN0aW9uIHRocm91Z2gyIChjb25zdHJ1Y3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zLCB0cmFuc2Zvcm0sIGZsdXNoKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZsdXNoICAgICA9IHRyYW5zZm9ybVxuICAgICAgdHJhbnNmb3JtID0gb3B0aW9uc1xuICAgICAgb3B0aW9ucyAgID0ge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRyYW5zZm9ybSAhPSAnZnVuY3Rpb24nKVxuICAgICAgdHJhbnNmb3JtID0gbm9vcFxuXG4gICAgaWYgKHR5cGVvZiBmbHVzaCAhPSAnZnVuY3Rpb24nKVxuICAgICAgZmx1c2ggPSBudWxsXG5cbiAgICByZXR1cm4gY29uc3RydWN0KG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpXG4gIH1cbn1cblxuXG4vLyBtYWluIGV4cG9ydCwganVzdCBtYWtlIG1lIGEgdHJhbnNmb3JtIHN0cmVhbSFcbm1vZHVsZS5leHBvcnRzID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgdmFyIHQyID0gbmV3IERlc3Ryb3lhYmxlVHJhbnNmb3JtKG9wdGlvbnMpXG5cbiAgdDIuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXG4gIGlmIChmbHVzaClcbiAgICB0Mi5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiB0MlxufSlcblxuXG4vLyBtYWtlIG1lIGEgcmV1c2FibGUgcHJvdG90eXBlIHRoYXQgSSBjYW4gYG5ld2AsIG9yIGltcGxpY2l0bHkgYG5ld2Bcbi8vIHdpdGggYSBjb25zdHJ1Y3RvciBjYWxsXG5tb2R1bGUuZXhwb3J0cy5jdG9yID0gdGhyb3VnaDIoZnVuY3Rpb24gKG9wdGlvbnMsIHRyYW5zZm9ybSwgZmx1c2gpIHtcbiAgZnVuY3Rpb24gVGhyb3VnaDIgKG92ZXJyaWRlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRocm91Z2gyKSlcbiAgICAgIHJldHVybiBuZXcgVGhyb3VnaDIob3ZlcnJpZGUpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSB4dGVuZChvcHRpb25zLCBvdmVycmlkZSlcblxuICAgIERlc3Ryb3lhYmxlVHJhbnNmb3JtLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgaW5oZXJpdHMoVGhyb3VnaDIsIERlc3Ryb3lhYmxlVHJhbnNmb3JtKVxuXG4gIFRocm91Z2gyLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIFRocm91Z2gyLnByb3RvdHlwZS5fZmx1c2ggPSBmbHVzaFxuXG4gIHJldHVybiBUaHJvdWdoMlxufSlcblxuXG5tb2R1bGUuZXhwb3J0cy5vYmogPSB0aHJvdWdoMihmdW5jdGlvbiAob3B0aW9ucywgdHJhbnNmb3JtLCBmbHVzaCkge1xuICB2YXIgdDIgPSBuZXcgRGVzdHJveWFibGVUcmFuc2Zvcm0oeHRlbmQoeyBvYmplY3RNb2RlOiB0cnVlLCBoaWdoV2F0ZXJNYXJrOiAxNiB9LCBvcHRpb25zKSlcblxuICB0Mi5fdHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cbiAgaWYgKGZsdXNoKVxuICAgIHQyLl9mbHVzaCA9IGZsdXNoXG5cbiAgcmV0dXJuIHQyXG59KVxuIiwiLy8gUmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgd3JhcHBlZCBjYWxsYmFja1xuLy8gVGhlIHdyYXBwZXIgZnVuY3Rpb24gc2hvdWxkIGRvIHNvbWUgc3R1ZmYsIGFuZCByZXR1cm4gYVxuLy8gcHJlc3VtYWJseSBkaWZmZXJlbnQgY2FsbGJhY2sgZnVuY3Rpb24uXG4vLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBvd24gcHJvcGVydGllcyBhcmUgcmV0YWluZWQsIHNvIHRoYXRcbi8vIGRlY29yYXRpb25zIGFuZCBzdWNoIGFyZSBub3QgbG9zdCBhbG9uZyB0aGUgd2F5LlxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcHlcbmZ1bmN0aW9uIHdyYXBweSAoZm4sIGNiKSB7XG4gIGlmIChmbiAmJiBjYikgcmV0dXJuIHdyYXBweShmbikoY2IpXG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduZWVkIHdyYXBwZXIgZnVuY3Rpb24nKVxuXG4gIE9iamVjdC5rZXlzKGZuKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgd3JhcHBlcltrXSA9IGZuW2tdXG4gIH0pXG5cbiAgcmV0dXJuIHdyYXBwZXJcblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIHZhciByZXQgPSBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICAgIHZhciBjYiA9IGFyZ3NbYXJncy5sZW5ndGgtMV1cbiAgICBpZiAodHlwZW9mIHJldCA9PT0gJ2Z1bmN0aW9uJyAmJiByZXQgIT09IGNiKSB7XG4gICAgICBPYmplY3Qua2V5cyhjYikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXRba10gPSBjYltrXVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG4iXSwibmFtZXMiOlsiX3R5cGVvZiIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsIm9iaiIsImtleSIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsInN0YXRlIiwibWV0aG9kIiwiYXJnIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJDb250aW51ZVNlbnRpbmVsIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZWNvcmQiLCJ0cnlDYXRjaCIsInR5cGUiLCJkb25lIiwiZm4iLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwidGhpcyIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJ1bnRpbWUiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsIkNvbXBvc2VkU3RvcmUiLCJPYnNlcnZhYmxlU3RvcmVfMSIsIk9ic2VydmFibGVTdG9yZSIsImNoaWxkcmVuIiwic3VwZXIiLCJfY2hpbGRyZW4iLCJjaGlsZEtleSIsImNoaWxkIiwiX2FkZENoaWxkIiwidXBkYXRlRnJvbUNoaWxkIiwiY2hpbGRWYWx1ZSIsImdldFN0YXRlIiwicHV0U3RhdGUiLCJzdWJzY3JpYmUiLCJNZXJnZWRTdG9yZSIsIl91cGRhdGVXaG9sZVN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJtYXAiLCJhc3NpZ24iLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJzYWZlX2V2ZW50X2VtaXR0ZXJfMSIsImRlZmF1bHQiLCJpbml0U3RhdGUiLCJfc3RhdGUiLCJfZ2V0U3RhdGUiLCJuZXdTdGF0ZSIsIl9wdXRTdGF0ZSIsImVtaXQiLCJ1cGRhdGVTdGF0ZSIsInBhcnRpYWxTdGF0ZSIsImhhbmRsZXIiLCJvbiIsInVuc3Vic2NyaWJlIiwicmVtb3ZlTGlzdGVuZXIiLCJzdG9yZUFzU3RyZWFtIiwic3RyZWFtXzEiLCJPYnNlcnZhYmxlU3RvcmVTdHJlYW0iLCJEdXBsZXgiLCJvYnNTdG9yZSIsIm9iamVjdE1vZGUiLCJyZXN1bWUiLCJwaXBlIiwiZGVzdCIsIm9wdGlvbnMiLCJ3cml0ZSIsIl93cml0ZSIsImNodW5rIiwiX2VuY29kaW5nIiwiY2FsbGJhY2siLCJfcmVhZCIsIl9zaXplIiwiX2Rlc3Ryb3kiLCJfX2NyZWF0ZUJpbmRpbmciLCJvIiwibSIsImsiLCJrMiIsImdldCIsIl9fZXhwb3J0U3RhciIsInAiLCJzdG9yZVRyYW5zZm9ybVN0cmVhbSIsInRocm91Z2gyXzEiLCJzeW5jVHJhbnNmb3JtRm4iLCJjYiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNvdXJjZSIsImV4Y2x1ZGVkIiwidGFyZ2V0Iiwic291cmNlS2V5cyIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJFVEhFUkVVTV9ORVRXT1JLIiwiUk9QU1RFTiIsIk1BSU5ORVQiLCJQT0xZR09OIiwiYWJpIiwiaW5wdXRzIiwiaW50ZXJuYWxUeXBlIiwib3V0cHV0cyIsInN0YXRlTXV0YWJpbGl0eSIsIk5vZGVEZXRhaWxNYW5hZ2VyIiwibmV0d29yayIsInByb3h5QWRkcmVzcyIsImFyZ3VtZW50cyIsInVybCIsIlgiLCJZIiwiVVJMIiwiaHJlZiIsIl8iLCJwcm9qZWN0SWQiLCJjb25jYXQiLCJub2RlTGlzdENvbnRyYWN0Iiwibm9kZUxpc3RBZGRyZXNzIiwidXBkYXRlZCIsIl9uZXR3b3JrIiwiX25vZGVEZXRhaWxzIiwiY3VycmVudEVwb2NoIiwiX2N1cnJlbnRFcG9jaCIsInRvcnVzTm9kZUVuZHBvaW50cyIsIl90b3J1c05vZGVFbmRwb2ludHMiLCJ0b3J1c05vZGVQdWIiLCJfdG9ydXNOb2RlUHViIiwidG9ydXNJbmRleGVzIiwiX3RvcnVzSW5kZXhlcyIsIl9yZWYiLCJza2lwIiwidmVyaWZpZXIiLCJ2ZXJpZmllcklkIiwiaGFzaGVkVmVyaWZpZXJJZCIsImtlY2NhazI1NiIsIm5vZGVEZXRhaWxzIiwibWV0aG9kcyIsImdldE5vZGVTZXQiLCJ0b3J1c05vZGVQdWJYIiwidG9ydXNOb2RlUHViWSIsIngiLCJOdW1iZXIiLCJ1cGRhdGVkRW5kcG9pbnRzIiwidXBkYXRlZE5vZGVQdWIiLCJpbmRleCIsImVuZFBvaW50RWxlbWVudCIsInB1Ykt4IiwicHViS3kiLCJlbmRwb2ludCIsInNwbGl0IiwidG9IZXgiLCJyZXBsYWNlIiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5Iiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwibG9nIiwic2V0TGV2ZWwiLCJsZXZlbHMiLCJhcGlLZXkiLCJlbWJlZEhvc3QiLCJzZXRFbWJlZEhvc3QiLCJlbWJlZEhvc3RfIiwic2V0QVBJS2V5IiwiYXBpS2V5XyIsImdldEFwaUtleUhlYWRlcnMiLCJoZWFkZXJzIiwiZGVidWdMb2dSZXNwb25zZSIsInJlc3BvbnNlIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInByb21pc2VUaW1lb3V0IiwibXMiLCJwcm9taXNlIiwidGltZW91dCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJhY2UiLCJvcHRpb25zXyIsImN1c3RvbU9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsIm1vZGUiLCJ1c2VBUElLZXkiLCJmZXRjaCIsIm9rIiwianNvbiIsInBvc3QiLCJkYXRhIiwiaXNVcmxFbmNvZGVkRGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2VuZXJhdGVKc29uUlBDT2JqZWN0IiwicGFyYW1ldGVycyIsImpzb25ycGMiLCJwYXJhbXMiLCJub29wIiwiQUNLIiwiQmFzZVBvc3RNZXNzYWdlU3RyZWFtIiwidGFyZ2V0V2luZG93Iiwid2luZG93IiwidGFyZ2V0T3JpZ2luIiwiX2luaXQiLCJfaGF2ZVN5biIsIl9uYW1lIiwiX3RhcmdldCIsIl90YXJnZXRXaW5kb3ciLCJfdGFyZ2V0T3JpZ2luIiwiX29uTWVzc2FnZSIsIm9uTWVzc2FnZSIsImJpbmQiLCJfc3luSW50ZXJ2YWxJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZFNoYWtlIiwiX2JyZWFrIiwiY29yayIsIl9vbkRhdGEiLCJ1bmNvcmsiLCJfcG9zdE1lc3NhZ2UiLCJvcmlnaW5Db25zdHJhaW50IiwicG9zdE1lc3NhZ2UiLCJldmVudCIsIm1lc3NhZ2UiLCJvcmlnaW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2FmZUFwcGx5IiwiYXJncyIsIlJlZmxlY3QiLCJTYWZlRXZlbnRFbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiZG9FcnJvciIsImV2ZW50cyIsIl9ldmVudHMiLCJfbGVuIiwiQXJyYXkiLCJfa2V5IiwiZXIiLCJsZW4iLCJsaXN0ZW5lcnMiLCJhcnIiLCJuIiwiY29weSIsImFycmF5Q2xvbmUiLCJTZXJpYWxpemFibGVFcnJvciIsImNvZGUiLCJpc0ludGVnZXIiLCJ0b1N0cmluZyIsInN0YWNrIiwiY3JlYXRlU3RyZWFtTWlkZGxld2FyZSIsImlkTWFwIiwic3RyZWFtIiwicmVhZCIsInJlcyIsInByb2Nlc3NOb3RpZmljYXRpb24iLCJlbmQiLCJwcm9jZXNzUmVzcG9uc2UiLCJfZXJyIiwibWlkZGxld2FyZSIsInJlcSIsImNyZWF0ZUlkUmVtYXBNaWRkbGV3YXJlIiwiX2VuZCIsIm9yaWdpbmFsSWQiLCJuZXdJZCIsInJhbmRvbUlkIiwib3duS2V5cyQxIiwiSlJQQ0VuZ2luZSIsIl9taWRkbGV3YXJlIiwic3RhdGljIiwibWlkZGxld2FyZVN0YWNrIiwicmV0dXJuSGFuZGxlcnMiLCJpc0NvbXBsZXRlIiwiX3J1bk1pZGRsZXdhcmUiLCJzZXJpYWxpemVFcnJvciIsInJldHVybkhhbmRsZXIiLCJoYW5kbGVycyIsImlzQXJyYXkiLCJfaGFuZGxlQmF0Y2giLCJfaGFuZGxlIiwiX3Byb21pc2VIYW5kbGUiLCJhc01pZGRsZXdhcmUiLCJtaWRkbGV3YXJlRXJyb3IiLCJfcnVuQWxsTWlkZGxld2FyZSIsIl9ydW5SZXR1cm5IYW5kbGVycyIsImhhbmRsZXJDYWxsYmFjayIsInJlcXMiLCJyZXNwb25zZXMiLCJhbGwiLCJjYWxsZXJSZXEiLCJfb2JqZWN0U3ByZWFkJDEiLCJfcHJvY2Vzc1JlcXVlc3QiLCJfZXJyb3IiLCJfY2hlY2tGb3JDb21wbGV0aW9uIiwiU3Vic3RyZWFtIiwicGFyZW50IiwiX3BhcmVudCIsIklHTk9SRV9TVUJTVFJFQU0iLCJPYmplY3RNdWx0aXBsZXgiLCJfc3Vic3RyZWFtcyIsImNyZWF0ZVN0cmVhbSIsInN1YnN0cmVhbSIsIl9jYiIsInJlYWRhYmxlIiwiYW55U3RyZWFtRW5kIiwiZGVzdHJveSIsImlnbm9yZVN0cmVhbSIsImNvbnNvbGUiLCJ3YXJuIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIl9zZXRQcm90b3R5cGVPZiIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2dldFByb3RvdHlwZU9mIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiZSIsIl9jb25zdHJ1Y3QiLCJQYXJlbnQiLCJDbGFzcyIsImEiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiX2NhY2hlIiwiTWFwIiwiaGFzIiwic2V0IiwiV3JhcHBlciIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyMiIsIl90b0NvbnN1bWFibGVBcnJheSIsImZyb20iLCJtaW5MZW4iLCJ0ZXN0IiwiX2NyZWF0ZVN1cGVyJDEiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSIsIlN1cGVyIiwiTmV3VGFyZ2V0IiwiZGlzYWJsZUFsbCIsIlNvbWVFcnJvciIsIl9FcnJvciIsIl9zdXBlciIsIl90aGlzIiwiZXJyb3JzIiwicHJlZGljYXRlIiwiU29tZSIsInByb21pc2VzIiwiZmluaXNoZWRDb3VudCIsInNoYXJlZFN0YXRlIiwicmVzb2x2ZWQiLCJlcnJvckFyciIsImZpbGwiLCJyZXN1bHRBcnIiLCJwcmVkaWNhdGVFcnJvciIsInJlc3AiLCJjYXRjaCIsImZpbmFsbHkiLCJyZWR1Y2UiLCJhY2MiLCJ6IiwiX2Vycm9yJGRhdGEiLCJzdGFydHNXaXRoIiwic3RyIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJtc2ciLCJpdCIsImpvaW4iLCJfcHJlZGljYXRlRXJyb3IiLCJfY3JlYXRlU3VwZXIiLCJHZXRPclNldE5vbmNlRXJyb3IiLCJrQ29tYmluYXRpb25zIiwicyIsImN1ciIsImNvbWJzIiwidGFpbENvbWJzIiwiaiIsInRocmVzaG9sZFNhbWUiLCJ0IiwiaGFzaE1hcCIsImtleUxvb2t1cCIsIl9jYWxsZWUiLCJlbmRwb2ludHMiLCJsb29rdXBQcm9taXNlcyIsIl9jb250ZXh0IiwidmVyaWZpZXJfaWQiLCJsb29rdXBSZXN1bHRzIiwibG9va3VwU2hhcmVzIiwieDEiLCJlcnJvclJlc3VsdCIsIngyIiwia2V5UmVzdWx0IiwieDMiLCJfeCIsIl94MiIsIl94MyIsIndhaXRLZXlMb29rdXAiLCJrZXlBc3NpZ24iLCJfcmVmMyIsIl9jYWxsZWUyIiwiX3JlZjIiLCJ0b3J1c05vZGVQdWJzIiwibGFzdFBvaW50IiwiZmlyc3RQb2ludCIsInNpZ25lckhvc3QiLCJub2RlTnVtIiwiaW5pdGlhbFBvaW50Iiwic2lnbmVkRGF0YSIsIl9jb250ZXh0MiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1YktleVgiLCJwdWJLZXlZIiwidDAiLCJpbmNsdWRlcyIsIl94NCIsImhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJUb3J1cyIsIl9yZWYkZW5hYmxlT25lS2V5IiwiZW5hYmxlT25lS2V5IiwiX3JlZiRtZXRhZGF0YUhvc3QiLCJtZXRhZGF0YUhvc3QiLCJfcmVmJGFsbG93SG9zdCIsImFsbG93SG9zdCIsIl9yZWYkc2lnbmVySG9zdCIsIl9yZWYkc2VydmVyVGltZU9mZnNldCIsInNlcnZlclRpbWVPZmZzZXQiLCJfcmVmJG5ldHdvcmsiLCJlYyIsIl9nZXRVc2VyVHlwZUFuZEFkZHJlc3MiLCJkb2VzS2V5QXNzaWduIiwiaXNOZXdLZXkiLCJmaW5hbEtleVJlc3VsdCIsImFzc2lnblJlc3VsdCIsIl9maW5hbEtleVJlc3VsdCRrZXlzJCIsIm5vbmNlUmVzdWx0Iiwibm9uY2UiLCJtb2RpZmllZFB1YktleSIsImZpbmFsWCIsImZpbmFsWSIsImFkZHJlc3MiLCJfYXJncyIsInB1Yl9rZXlfWCIsInB1Yl9rZXlfWSIsImdldE9yU2V0Tm9uY2UiLCJ0MSIsInR5cGVPZlVzZXIiLCJrZXlGcm9tUHVibGljIiwieSIsImdldFB1YmxpYyIsImFkZCIsImtleUZyb21Qcml2YXRlIiwicHViTm9uY2UiLCJnZXRYIiwiZ2V0WSIsImdlbmVyYXRlQWRkcmVzc0Zyb21QdWJLZXkiLCJ1cGdyYWRlZCIsIl9zZXRDdXN0b21LZXkiLCJfcmVmNCIsInByaXZLZXlIZXgiLCJtZXRhZGF0YU5vbmNlIiwidG9ydXNLZXlIZXgiLCJjdXN0b21LZXlIZXgiLCJ0b3J1c0tleSIsInByaXZLZXkiLCJjdXN0b21LZXkiLCJuZXdNZXRhZGF0YU5vbmNlIiwic3ViIiwidW1vZCIsImN1cnZlIiwiZ2VuZXJhdGVNZXRhZGF0YVBhcmFtcyIsInNldE1ldGFkYXRhIiwiX3JldHJpZXZlU2hhcmVzIiwiX2NhbGxlZTUiLCJpbmRleGVzIiwidmVyaWZpZXJQYXJhbXMiLCJpZFRva2VuIiwiZXh0cmFQYXJhbXMiLCJwcm9taXNlQXJyIiwidG1wS2V5IiwicHViS2V5IiwidG9rZW5Db21taXRtZW50IiwiX2FyZ3M1IiwiX2NvbnRleHQ1IiwibWVzc2FnZXByZWZpeCIsInRva2VuY29tbWl0bWVudCIsInRlbXBwdWJ4IiwidGVtcHB1YnkiLCJ2ZXJpZmllcmlkZW50aWZpZXIiLCJwcm9taXNlQXJyUmVxdWVzdCIsIm5vZGVTaWdzIiwiX2kiLCJfaTIiLCJfcCIsImVuY3J5cHRlZCIsIml0ZW0iLCJpZHRva2VuIiwibm9kZXNpZ25hdHVyZXMiLCJfcmVmNSIsIl9jYWxsZWUzIiwic2hhcmVSZXNwb25zZXMiLCJjb21wbGV0ZWRSZXF1ZXN0cyIsInRocmVzaG9sZFB1YmxpY0tleSIsInNoYXJlUHJvbWlzZXMiLCJub2RlSW5kZXhlcyIsIl9pMyIsIl9jdXJyZW50U2hhcmVSZXNwb25zZSIsIl9jdXJyZW50U2hhcmVSZXNwb25zZTIiLCJjdXJyZW50U2hhcmVSZXNwb25zZSIsImZpcnN0S2V5IiwibWV0YWRhdGEiLCJzaGFyZXNSZXNvbHZlZCIsImRlY3J5cHRlZFNoYXJlcyIsImFsbENvbWJpcyIsInByaXZhdGVLZXkiLCJfbG9vcCIsIl9yZXQiLCJfY29udGV4dDMiLCJQdWJsaWNLZXkiLCJzb3J0IiwiYiIsIkluZGV4IiwiY21wIiwiTWV0YWRhdGEiLCJlcGhlbVB1YmxpY0tleSIsIml2IiwibWFjIiwiY2lwaGVydGV4dCIsIlNoYXJlIiwicGFkU3RhcnQiLCJkZWJ1ZyIsImN1cnIiLCJjdXJyZW50Q29tYmkiLCJjdXJyZW50Q29tYmlTaGFyZXMiLCJ2Iiwic2hhcmVzIiwiaW5kaWNlcyIsImRlcml2ZWRQcml2YXRlS2V5IiwibGFncmFuZ2VJbnRlcnBvbGF0aW9uIiwiZGVjcnlwdGVkUHViS2V5IiwiZGVjcnlwdGVkUHViS2V5WCIsImRlY3J5cHRlZFB1YktleVkiLCJfeDEwIiwiX3gxMSIsIl9yZWY2IiwiX2NhbGxlZTQiLCJyZXR1cm5lZEtleSIsIl95aWVsZCRfdGhpcyRnZXROb25jZSIsImV0aEFkZHJlc3MiLCJfY29udGV4dDQiLCJnZXROb25jZSIsImdldE1ldGFkYXRhIiwiZ2VuZXJhdGVBZGRyZXNzRnJvbVByaXZLZXkiLCJfeDEyIiwiX3g1IiwiX3g2IiwiX3g3IiwiX3g4IiwiX3g5IiwiX2dldE1ldGFkYXRhIiwiX2NhbGxlZTYiLCJtZXRhZGF0YVJlc3BvbnNlIiwiX2FyZ3M2IiwiX2NvbnRleHQ2IiwiX3gxMyIsInNldERhdGEiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93Iiwic2lnIiwic2lnbiIsInNldF9kYXRhIiwic2lnbmF0dXJlIiwiciIsIl9zZXRNZXRhZGF0YSIsIl9jYWxsZWU3IiwiX2FyZ3M3IiwiX2NvbnRleHQ3IiwiX3gxNCIsIm5vZGVJbmRleCIsInNlY3JldCIsInVwcGVyIiwibG93ZXIiLCJtdWwiLCJuZWciLCJ0ZW1wIiwiZGVsdGEiLCJpbnZtIiwicHVibGljS2V5IiwiZW5jb2RlIiwiZXRoQWRkcmVzc0xvd2VyIiwidG9DaGVja3N1bUFkZHJlc3MiLCJwdWJsaWNLZXlYIiwicHVibGljS2V5WSIsIl9nZXRQdWJsaWNBZGRyZXNzIiwiX2NhbGxlZTgiLCJfcmVmNyIsImlzRXh0ZW5kZWQiLCJfcmVmOCIsIl9ub25jZSIsIl9maW5hbEtleVJlc3VsdCRrZXlzJDIiLCJfYXJnczgiLCJfY29udGV4dDgiLCJfeDE1IiwiX3gxNiIsIl94MTciLCJfZ2V0T3JTZXROb25jZSIsIl9jYWxsZWU5IiwiZ2V0T25seSIsIl9hcmdzOSIsIl9jb250ZXh0OSIsIl94MTgiLCJfeDE5IiwiX3gyMCIsIl9nZXROb25jZSIsIl9jYWxsZWUxMCIsIl9jb250ZXh0MTAiLCJfeDIxIiwiX3gyMiIsIl94MjMiLCJwcml2S2V5Qk4iLCJub25jZUJOIiwiZW5hYmxlQWxsIiwiTE9HSU5fUFJPVklERVIiLCJXQUxMRVRfVkVSSUZJRVJTIiwiR09PR0xFIiwiRkFDRUJPT0siLCJUV0lUQ0giLCJSRURESVQiLCJESVNDT1JEIiwiRU1BSUxfUEFTU1dPUkRMRVNTIiwiV0FMTEVUX09QRU5MT0dJTl9WRVJJRklFUl9NQVAiLCJUT1JVU19CVUlMRF9FTlYiLCJQUk9EVUNUSU9OIiwiREVWRUxPUE1FTlQiLCJCSU5BTkNFIiwiVEVTVElORyIsIkxSQyIsIkJFVEEiLCJCVVRUT05fUE9TSVRJT04iLCJCT1RUT01fTEVGVCIsIlRPUF9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX1JJR0hUIiwicGF5bWVudFByb3ZpZGVycyQxIiwibGluZTEiLCJsaW5lMiIsImxpbmUzIiwic3VwcG9ydFBhZ2UiLCJtaW5PcmRlclZhbHVlIiwibWF4T3JkZXJWYWx1ZSIsInZhbGlkQ3VycmVuY2llcyIsInZhbGlkQ3J5cHRvQ3VycmVuY2llcyIsImluY2x1ZGVGZWVzIiwiZW5mb3JjZU1heCIsInNlbGwiLCJjb25maWd1cmF0aW9uIiwic3VwcG9ydGVkVmVyaWZpZXJMaXN0IiwicGF5bWVudFByb3ZpZGVycyIsImFwaSIsInRyYW5zbGF0aW9ucyIsImVuIiwiZW1iZWQiLCJjb250aW51ZSIsImFjdGlvblJlcXVpcmVkIiwicGVuZGluZ0FjdGlvbiIsImNvb2tpZXNSZXF1aXJlZCIsImVuYWJsZUNvb2tpZXMiLCJjbGlja0hlcmUiLCJkZSIsImphIiwia28iLCJ6aCIsInByb2RUb3J1c1VybCIsImxvY2FsU3RvcmFnZUtleVByZWZpeCIsInJ1bk9uTG9hZCIsImRvY3VtZW50IiwiaHRtbFRvRWxlbWVudCIsImh0bWwiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0cmltbWVkSHRtbCIsInRyaW0iLCJpbm5lckhUTUwiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsImhhbmRsZVN0cmVhbSIsImV2ZW50TmFtZSIsImhhbmRsZXJXcmFwcGVyIiwiZG9jdW1lbnRSZWFkeSIsInJlYWR5U3RhdGUiLCJoYW5kbGVyQXJncyIsImhhbmRsZUV2ZW50IiwibWVzc2FnZXMiLCJkaXNjb25uZWN0ZWQiLCJwZXJtYW5lbnRseURpc2Nvbm5lY3RlZCIsInNlbmRTaXRlTWV0YWRhdGEiLCJ1bnN1cHBvcnRlZFN5bmMiLCJpbnZhbGlkRHVwbGV4U3RyZWFtIiwiaW52YWxpZE9wdGlvbnMiLCJtYXhFdmVudExpc3RlbmVycyIsInNob3VsZFNlbmRNZXRhZGF0YSIsImludmFsaWRSZXF1ZXN0QXJncyIsImludmFsaWRSZXF1ZXN0TWV0aG9kIiwiaW52YWxpZFJlcXVlc3RQYXJhbXMiLCJpbnZhbGlkTG9nZ2VyT2JqZWN0IiwiaW52YWxpZExvZ2dlck1ldGhvZCIsImNvbm5lY3RlZCIsImNoYWluSWQiLCJ3YXJuaW5ncyIsImVuYWJsZURlcHJlY2F0aW9uIiwic2VuZERlcHJlY2F0aW9uIiwiY2xvc2UiLCJuZXR3b3JrQ2hhbmdlZCIsIm5vdGlmaWNhdGlvbiIsInB1YmxpY0NvbmZpZ1N0b3JlIiwibG9nU3RyZWFtRGlzY29ubmVjdFdhcm5pbmciLCJyZW1vdGVMYWJlbCIsImVtaXR0ZXIiLCJ3YXJuaW5nTXNnIiwibGlzdGVuZXJDb3VudCIsImdldFByZW9wZW5JbnN0YW5jZUlkIiwiZ2V0VG9ydXNVcmwiLCJidWlsZEVudiIsImludGVncml0eSIsInRvcnVzVXJsIiwibG9nTGV2ZWwiLCJ2ZXJzaW9uIiwidmVyc2lvblVzZWQiLCJnZXRVc2VyTGFuZ3VhZ2UiLCJ1c2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInVzZXJMYW5ndWFnZXMiLCJFTUlUVEVEX05PVElGSUNBVElPTlMiLCJOT09QIiwiRkVBVFVSRVNfUFJPVklERVJfQ0hBTkdFX1dJTkRPVyIsIkZFQVRVUkVTX0NPTkZJUk1fV0lORE9XIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInVud3JhcFJlc3VsdCIsIlRvcnVzSW5wYWdlUHJvdmlkZXIiLCJjb25uZWN0aW9uU3RyZWFtIiwianNvblJwY1N0cmVhbU5hbWUiLCJlbmFibGUiLCJleHBlcmltZW50YWxNZXRob2RzIiwic2VuZCIsImR1cGxleCIsImlzVG9ydXMiLCJzZXRNYXhMaXN0ZW5lcnMiLCJfZGVmYXVsdFN0YXRlIiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJfaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiX2hhbmRsZUNoYWluQ2hhbmdlZCIsIl9oYW5kbGVVbmxvY2tTdGF0ZUNoYW5nZWQiLCJfaGFuZGxlQ29ubmVjdCIsIl9oYW5kbGVEaXNjb25uZWN0IiwiX2hhbmRsZVN0cmVhbURpc2Nvbm5lY3QiLCJfc2VuZFN5bmMiLCJfcnBjUmVxdWVzdCIsIl93YXJuT2ZEZXByZWNhdGlvbiIsIl9pbml0aWFsaXplU3RhdGUiLCJyZXF1ZXN0Iiwic2VuZEFzeW5jIiwibXV4IiwiX3B1YmxpY0NvbmZpZ1N0b3JlIiwic3RvcmFnZUtleSIsImlzQ29ubmVjdGVkIiwianNvblJwY0Nvbm5lY3Rpb24iLCJycGNFbmdpbmUiLCJldGhFcnJvcnMiLCJfcnBjRW5naW5lIiwicGF5bG9hZCIsIl9zZW50V2FybmluZ3MiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwib25jZSIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJhY2NvdW50cyIsImlzVW5sb2NrZWQiLCJpbml0aWFsaXplZCIsImlzSW50ZXJuYWwiLCJfcGF5bG9hZCIsInRyeVByZW9wZW5IYW5kbGUiLCJtZXRob2RPclBheWxvYWQiLCJjYWxsYmFja09yQXJncyIsImlzUmVjb3ZlcmFibGUiLCJlcnJvck1lc3NhZ2UiLCJpc1Blcm1hbmVudGx5RGlzY29ubmVjdGVkIiwiRXRoZXJldW1ScGNFcnJvciIsInN0cmVhbU5hbWUiLCJpc0V0aEFjY291bnRzIiwiZmluYWxBY2NvdW50cyIsImFjY291bnQiLCJoYXNFbWl0dGVkQ29ubmVjdGlvbiIsImhhc2hlcyIsImludGVybmFsSGFzaGVzIiwiYWxnb3JpdGhtcyIsImFsZ29yaXRobSIsIm1haW4iLCJmaW5hbE9wdGlvbnMiLCJkZWxpbWl0ZXIiLCJmdWxsIiwiZGVmYXVsdHMiLCJzcmkiLCJvdXRwdXQiLCJQb3B1cEhhbmRsZXIiLCJmZWF0dXJlcyIsImR1YWxTY3JlZW5MZWZ0Iiwic2NyZWVuTGVmdCIsInNjcmVlblgiLCJkdWFsU2NyZWVuVG9wIiwic2NyZWVuVG9wIiwic2NyZWVuWSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwic2NyZWVuIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJsZWZ0IiwiYWJzIiwidG9wIiwiaCIsInciLCJnZXRQb3B1cEZlYXR1cmVzIiwid2luZG93VGltZXIiLCJpQ2xvc2VkV2luZG93IiwiX3NldHVwVGltZXIiLCJzZXRJbnRlcnZhbCIsImNsb3NlZCIsImNsZWFySW50ZXJ2YWwiLCJvcGVuIiwiX3RoaXMkd2luZG93IiwiZm9jdXMiLCJyZWRpcmVjdCIsImxvY2F0aW9uUmVwbGFjZU9uUmVkaXJlY3QiLCJsb2NhdGlvbiIsImltZ0V4aXN0cyIsImltZyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJnZXRTaXRlTmFtZSIsInNpdGVOYW1lIiwicXVlcnlTZWxlY3RvciIsIm1ldGFUaXRsZSIsInRpdGxlIiwiaG9zdG5hbWUiLCJnZXRTaXRlSWNvbiIsImljb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmluZCIsIl9pY29uIiwiZW5naW5lIiwiZG9tYWluTWV0YWRhdGEiLCJnZXRTaXRlTWV0YWRhdGEiLCJvcmlnaW5hbEVycm9yIiwiX2V4Y2x1ZGVkIiwiZGVmYXVsdFZlcmlmaWVycyIsImlmcmFtZUludGVncml0eSIsIlVOU0FGRV9NRVRIT0RTIiwiaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUiLCJzdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJzdG9yYWdlQXZhaWxhYmxlIiwidG9ydXNJZnJhbWVIdG1sIiwiY2hlY2siLCJjcm9zc09yaWdpbiIsInJlbCIsInJlbExpc3QiLCJzdXBwb3J0cyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImJ1dHRvblBvc2l0aW9uIiwibW9kYWxaSW5kZXgiLCJpc0xvZ2dlZEluIiwiaXNJbml0aWFsaXplZCIsInRvcnVzV2lkZ2V0VmlzaWJpbGl0eSIsInJlcXVlc3RlZFZlcmlmaWVyIiwiY3VycmVudFZlcmlmaWVyIiwibm9kZURldGFpbE1hbmFnZXIiLCJ0b3J1c0pzIiwiYWxlcnRaSW5kZXgiLCJpc0lmcmFtZUZ1bGxTY3JlZW4iLCJkYXBwU3RvcmFnZUtleSIsImVuYWJsZUxvZ2dpbmciLCJlbmFibGVkVmVyaWZpZXJzIiwiaG9zdCIsIm5ldHdvcmtOYW1lIiwiYmxvY2tFeHBsb3JlciIsInRpY2tlciIsInRpY2tlck5hbWUiLCJsb2dpbkNvbmZpZyIsInNob3dUb3J1c0J1dHRvbiIsIndoaXRlTGFiZWwiLCJza2lwVEtleSIsInVzZUxvY2FsU3RvcmFnZSIsInVzZVdhbGxldENvbm5lY3QiLCJzZXREZWZhdWx0TGV2ZWwiLCJsb2NhbFN0b3JhZ2VLZXkiLCJzdG9yZWRLZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2VuZXJhdGVkS2V5IiwidG9ydXNJZnJhbWVVcmwiLCJwYXRobmFtZSIsImVuZHNXaXRoIiwidG9ydXNJZnJhbWUiLCJ0b3J1c0FsZXJ0Q29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0UHJvcGVydHkiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwic3R5bGVMaW5rIiwiZGVmYXVsdExhbmd1YWdlIiwiY3VzdG9tVHJhbnNsYXRpb25zIiwibGFuZ3VhZ2VUcmFuc2xhdGlvbnMiLCJlbWJlZFRyYW5zbGF0aW9ucyIsImhhbmRsZVNldHVwIiwiX3NldHVwV2ViMyIsImluaXRTdHJlYW0iLCJjb21tdW5pY2F0aW9uTXV4IiwiZ2V0U3RyZWFtIiwic3VjY2VzcyIsIl9kaXNwbGF5SWZyYW1lIiwiZmV0Y2hVcmwiLCJjYWNoZSIsInRleHQiLCJjYWxjdWxhdGVkSW50ZWdyaXR5IiwiY2xlYXJJbml0IiwibG9naW4iLCJsb2dpbl9oaW50IiwibG9naW5IaW50IiwiZXRoZXJldW0iLCJsb2dvdXQiLCJzdGF0dXNTdHJlYW0iLCJsb2dnZWRJbiIsImlzRWxlbWVudCIsImVsZW1lbnQiLCJFbGVtZW50IiwiSFRNTERvY3VtZW50IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0b3J1c0FsZXJ0IiwiaGlkZVRvcnVzQnV0dG9uIiwiX3NlbmRXaWRnZXRWaXNpYmlsaXR5U3RhdHVzIiwic2V0UHJvdmlkZXIiLCJyZXN0IiwicHJvdmlkZXJDaGFuZ2VTdHJlYW0iLCJwcmVvcGVuSW5zdGFuY2VJZCIsIl9oYW5kbGVXaW5kb3ciLCJvdmVycmlkZSIsInNob3dXYWxsZXQiLCJwYXRoIiwic2hvd1dhbGxldFN0cmVhbSIsImZpbmFsUGF0aCIsImluc3RhbmNlSWQiLCJmaW5hbFVybCIsInNlYXJjaFBhcmFtcyIsImFwcGVuZCIsImdldE5vZGVEZXRhaWxzIiwid2FsbGV0VmVyaWZpZXIiLCJvcGVubG9naW5WZXJpZmllciIsImV4aXN0aW5nVjFVc2VyIiwiZ2V0VXNlclR5cGVBbmRBZGRyZXNzIiwidjJVc2VyIiwibmV3VjJVc2VyIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mb0FjY2Vzc1N0cmVhbSIsInVzZXJJbmZvQWNjZXNzSGFuZGxlciIsImFwcHJvdmVkIiwicmVqZWN0ZWQiLCJuZXdSZXF1ZXN0IiwidXNlckluZm9TdHJlYW0iLCJoYW5kbGVyQ2h1bmsiLCJpbml0aWF0ZVRvcHVwIiwicHJvdmlkZXIiLCJpc1ZhbGlkIiwic2VsZWN0ZWRQcm92aWRlciIsInNlbGVjdGVkUGFyYW1zIiwiZmlhdFZhbHVlIiwicmVxdWVzdGVkT3JkZXJBbW91bnQiLCJwYXJzZUZsb2F0Iiwic2VsZWN0ZWRDdXJyZW5jeSIsInNlbGVjdGVkQ3J5cHRvQ3VycmVuY3kiLCJ2YWxpZGF0ZVBheW1lbnRQcm92aWRlciIsInRvcHVwU3RyZWFtIiwibG9naW5QYXJhbXMiLCJ1c2VySW5mbyIsImxvZ2luUHJpdktleVN0cmVhbSIsIndhbGxldENvbm5lY3RTdHJlYW0iLCJ3aW5kb3dTdHJlYW0iLCJoYW5kbGVkV2luZG93IiwiX2NyZWF0ZVBvcHVwQmxvY2tBbGVydCIsImNsb3NlSGFuZGxlciIsInJlY2VpdmVkSWQiLCJfc2V0RW1iZWRXaGl0ZUxhYmVsIiwidGhlbWUiLCJpc0RhcmsiLCJjb2xvcnMiLCJjbGFzc0xpc3QiLCJ0b3J1c0JyYW5kMSIsInRvcnVzR3JheTIiLCJfZ2V0TG9nb1VybCIsIl90aGlzJHdoaXRlTGFiZWwiLCJfdGhpcyR3aGl0ZUxhYmVsJHRoZW0iLCJsb2dvVXJsIiwiX3RoaXMkd2hpdGVMYWJlbDIiLCJfdGhpcyR3aGl0ZUxhYmVsMyIsImxvZ29MaWdodCIsImxvZ29EYXJrIiwiaXNGdWxsIiwicmlnaHQiLCJib3R0b20iLCJtZXRhbWFza1N0cmVhbSIsImNvbnRlbnRXaW5kb3ciLCJjb21tdW5pY2F0aW9uU3RyZWFtIiwiaW5wYWdlUHJvdmlkZXIiLCJkZXRlY3RBY2NvdW50UmVxdWVzdFByb3RvdHlwZU1vZGlmaWVyIiwib3JpZ2luYWxNZXRob2QiLCJoYW5kbGVMb2dpbkNiIiwiX3Nob3dMb2dpblBvcHVwIiwiaXNMb2dpbkNhbGxiYWNrIiwicHJveGllZElucGFnZVByb3ZpZGVyIiwiZGVsZXRlUHJvcGVydHkiLCJzZXR1cE11bHRpcGxleCIsImNhbGxlZEZyb21FbWJlZCIsImxvZ2luSGFuZGxlciIsIm9hdXRoU3RyZWFtIiwic3VjY2Vzc0FsZXJ0IiwiYnRuQ29udGFpbmVyIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZnVsZmlsbGVkIiwic3RlcCIsImFkb3B0IiwiX19nZW5lcmF0b3IiLCJmIiwiZyIsImxhYmVsIiwidHJ5cyIsIm9wcyIsInZlcmIiLCJvcCIsImdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSIsIl9hIiwiRUMiLCJicm93c2VyQ3J5cHRvIiwiY3J5cHRvIiwibXNDcnlwdG8iLCJzdWJ0bGUiLCJ3ZWJraXRTdWJ0bGUiLCJub2RlQ3J5cHRvIiwiRUNfR1JPVVBfT1JERVIiLCJCdWZmZXIiLCJaRVJPMzIiLCJhbGxvYyIsImFzc2VydCIsImNvbmRpdGlvbiIsImlzVmFsaWRQcml2YXRlS2V5IiwiaXNCdWZmZXIiLCJpc1NjYWxhciIsImNvbXBhcmUiLCJyYW5kb21CeXRlcyIsInNpemUiLCJVaW50OEFycmF5IiwiZ2V0UmFuZG9tVmFsdWVzIiwic2hhNTEyIiwiY3JlYXRlSGFzaCIsImdldEFlcyIsImltcG9ydEtleSIsImNyeXB0b0tleSIsImVuY0FsZ29yaXRobSIsImNpcGhlciIsImNyZWF0ZUNpcGhlcml2IiwiZmlyc3RDaHVuayIsInNlY29uZENodW5rIiwiZmluYWwiLCJkZWNpcGhlciIsImNyZWF0ZURlY2lwaGVyaXYiLCJhZXNDYmNFbmNyeXB0IiwiYWVzQ2JjRGVjcnlwdCIsImRlcml2ZSIsInByaXZhdGVLZXlBIiwicHVibGljS2V5QiIsImtleUEiLCJrZXlCIiwiUHgiLCJ0b0FycmF5Iiwib3B0cyIsImVuY3J5cHRpb25LZXkiLCJobWFjIiwiY3JlYXRlSG1hYyIsImIxIiwiYjIiLCJlcXVhbENvbnN0VGltZSIsImhtYWNTaGEyNTZWZXJpZnkiLCJtYWNHb29kIiwicGFkX3N0cmluZ18xIiwiaW5wdXQiLCJlbmNvZGluZyIsImZyb21CYXNlNjQiLCJ0b0Jhc2U2NCIsImJhc2U2NHVybCIsImJhc2U2NCIsImRlY29kZSIsInRvQnVmZmVyIiwic3RyaW5nTGVuZ3RoIiwiZGlmZiIsInBvc2l0aW9uIiwicGFkTGVuZ3RoIiwicGFkZGVkU3RyaW5nTGVuZ3RoIiwiYnVmZmVyIiwib2JqZWN0VG9TdHJpbmciLCJpc0Jvb2xlYW4iLCJpc051bGwiLCJpc051bGxPclVuZGVmaW5lZCIsImlzTnVtYmVyIiwiaXNTdHJpbmciLCJpc1N5bWJvbCIsImlzVW5kZWZpbmVkIiwiaXNSZWdFeHAiLCJyZSIsImlzT2JqZWN0IiwiaXNEYXRlIiwiZCIsImlzRXJyb3IiLCJpc0Z1bmN0aW9uIiwiaXNQcmltaXRpdmUiLCJlb3MiLCJ3cyIsIl93cml0YWJsZVN0YXRlIiwicnMiLCJfcmVhZGFibGVTdGF0ZSIsImNhbmNlbGxlZCIsIm9ubGVnYWN5ZmluaXNoIiwib25maW5pc2giLCJvbmVuZCIsIm9uZXhpdCIsImV4aXRDb2RlIiwib25jbG9zZSIsInByb2Nlc3MiLCJuZXh0VGljayIsIm9uY2xvc2VuZXh0dGljayIsImVuZGVkIiwiZGVzdHJveWVkIiwib25yZXF1ZXN0Iiwic2V0SGVhZGVyIiwiYWJvcnQiLCJpc1JlcXVlc3QiLCJzdGRpbyIsImlzQ2hpbGRQcm9jZXNzIiwiZXF1YWwiLCJSZWdFeHAiLCJmbGFncyIsImlzU3RyZWFtIiwidHJhbnNmb3JtIiwiX3RyYW5zZm9ybSIsIkhBU0hfVU5ERUZJTkVEIiwiTUFYX1NBRkVfSU5URUdFUiIsImFyZ3NUYWciLCJmdW5jVGFnIiwib2JqZWN0VGFnIiwicmVJc0hvc3RDdG9yIiwicmVJc1VpbnQiLCJ0eXBlZEFycmF5VGFncyIsImZyZWVHbG9iYWwiLCJmcmVlU2VsZiIsInJvb3QiLCJmcmVlRXhwb3J0cyIsIm5vZGVUeXBlIiwiZnJlZU1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJmcmVlUHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJyZXF1aXJlIiwiYmluZGluZyIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJmdW5jIiwiYXJyYXlQcm90byIsImZ1bmNQcm90byIsIm9iamVjdFByb3RvIiwiY29yZUpzRGF0YSIsImZ1bmNUb1N0cmluZyIsIm1hc2tTcmNLZXkiLCJ1aWQiLCJleGVjIiwiSUVfUFJPVE8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsIm9iamVjdEN0b3JTdHJpbmciLCJyZUlzTmF0aXZlIiwiYWxsb2NVbnNhZmUiLCJnZXRQcm90b3R5cGUiLCJvdmVyQXJnIiwib2JqZWN0Q3JlYXRlIiwic3BsaWNlIiwic3ltVG9TdHJpbmdUYWciLCJnZXROYXRpdmUiLCJuYXRpdmVJc0J1ZmZlciIsIm5hdGl2ZU1heCIsIm1heCIsIm5hdGl2ZU5vdyIsIm5hdGl2ZUNyZWF0ZSIsImJhc2VDcmVhdGUiLCJwcm90byIsIkhhc2giLCJlbnRyaWVzIiwiY2xlYXIiLCJMaXN0Q2FjaGUiLCJNYXBDYWNoZSIsIlN0YWNrIiwiX19kYXRhX18iLCJhcnJheUxpa2VLZXlzIiwiaW5oZXJpdGVkIiwiaXNBcnIiLCJpc0FyZyIsImlzQXJndW1lbnRzIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJpdGVyYXRlZSIsImJhc2VUaW1lcyIsIlN0cmluZyIsImlzSW5kZXgiLCJhc3NpZ25NZXJnZVZhbHVlIiwiZXEiLCJiYXNlQXNzaWduVmFsdWUiLCJhc3NpZ25WYWx1ZSIsIm9ialZhbHVlIiwiYXNzb2NJbmRleE9mIiwiYXJyYXkiLCJnZXRNYXBEYXRhIiwicGFpcnMiLCJMQVJHRV9BUlJBWV9TSVpFIiwiYmFzZUZvciIsImZyb21SaWdodCIsImtleXNGdW5jIiwiY3JlYXRlQmFzZUZvciIsImJhc2VHZXRUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwiZ2V0UmF3VGFnIiwiYmFzZUlzQXJndW1lbnRzIiwiaXNPYmplY3RMaWtlIiwiYmFzZUlzTmF0aXZlIiwiaXNNYXNrZWQiLCJ0b1NvdXJjZSIsImJhc2VLZXlzSW4iLCJuYXRpdmVLZXlzSW4iLCJpc1Byb3RvIiwiaXNQcm90b3R5cGUiLCJiYXNlTWVyZ2UiLCJzcmNJbmRleCIsImN1c3RvbWl6ZXIiLCJzcmNWYWx1ZSIsIm1lcmdlRnVuYyIsInNhZmVHZXQiLCJzdGFja2VkIiwibmV3VmFsdWUiLCJpc0NvbW1vbiIsImlzVHlwZWQiLCJpc0FycmF5TGlrZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiaXNEZWVwIiwiY2xvbmVCdWZmZXIiLCJ0eXBlZEFycmF5IiwiYXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiY2xvbmVBcnJheUJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJjbG9uZVR5cGVkQXJyYXkiLCJjb3B5QXJyYXkiLCJDdG9yIiwiaXNQbGFpbk9iamVjdCIsImlzTmV3IiwiY29weU9iamVjdCIsImtleXNJbiIsInRvUGxhaW5PYmplY3QiLCJpbml0Q2xvbmVPYmplY3QiLCJiYXNlTWVyZ2VEZWVwIiwiYmFzZVJlc3QiLCJzdGFydCIsInNldFRvU3RyaW5nIiwib3RoZXJBcmdzIiwib3ZlclJlc3QiLCJpZGVudGl0eSIsImlzS2V5YWJsZSIsImdldFZhbHVlIiwiY291bnQiLCJsYXN0Q2FsbGVkIiwic3RhbXAiLCJyZW1haW5pbmciLCJzaG9ydE91dCIsInN0cmluZyIsImNvbnN0YW50Iiwib3RoZXIiLCJpc0xlbmd0aCIsImJhc2VVbmFyeSIsIm1lcmdlIiwiYXNzaWduZXIiLCJzb3VyY2VzIiwiZ3VhcmQiLCJpc0l0ZXJhdGVlQ2FsbCIsImNyZWF0ZUFzc2lnbmVyIiwiZGVmaW5pdGlvbiIsInVuZGVmaW5lZFR5cGUiLCJpc0lFIiwidXNlckFnZW50IiwibG9nTWV0aG9kcyIsImJpbmRNZXRob2QiLCJtZXRob2ROYW1lIiwidHJhY2VGb3JJRSIsInRyYWNlIiwicmVhbE1ldGhvZCIsInJlcGxhY2VMb2dnaW5nTWV0aG9kcyIsImxldmVsIiwibG9nZ2VyTmFtZSIsIm1ldGhvZEZhY3RvcnkiLCJlbmFibGVMb2dnaW5nV2hlbkNvbnNvbGVBcnJpdmVzIiwiZGVmYXVsdE1ldGhvZEZhY3RvcnkiLCJMb2dnZXIiLCJkZWZhdWx0TGV2ZWwiLCJmYWN0b3J5IiwiY3VycmVudExldmVsIiwicGVyc2lzdExldmVsSWZQb3NzaWJsZSIsImxldmVsTnVtIiwibGV2ZWxOYW1lIiwiaWdub3JlIiwiY29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0UGVyc2lzdGVkTGV2ZWwiLCJzdG9yZWRMZXZlbCIsImNsZWFyUGVyc2lzdGVkTGV2ZWwiLCJnZXRMZXZlbCIsInBlcnNpc3QiLCJTSUxFTlQiLCJyZXNldExldmVsIiwiVFJBQ0UiLCJpbml0aWFsTGV2ZWwiLCJkZWZhdWx0TG9nZ2VyIiwiX2xvZ2dlcnNCeU5hbWUiLCJnZXRMb2dnZXIiLCJsb2dnZXIiLCJfbG9nIiwibm9Db25mbGljdCIsImdldExvZ2dlcnMiLCJ3cmFwcHkiLCJjYWxsZWQiLCJvbmNlU3RyaWN0Iiwib25jZUVycm9yIiwic3RyaWN0IiwiYXJnMSIsImFyZzIiLCJhcmczIiwiZnMiLCJhbmNpZW50IiwiaXNGbiIsImRlc3Ryb3llciIsInJlYWRpbmciLCJ3cml0aW5nIiwiUmVhZFN0cmVhbSIsIldyaXRlU3RyZWFtIiwiaXNGUyIsInRvIiwic3RyZWFtcyIsImRlc3Ryb3lzIiwicG5hIiwib2JqZWN0S2V5cyIsInV0aWwiLCJpbmhlcml0cyIsIlJlYWRhYmxlIiwiV3JpdGFibGUiLCJhbGxvd0hhbGZPcGVuIiwib25FbmROVCIsImhpZ2hXYXRlck1hcmsiLCJQYXNzVGhyb3VnaCIsIlRyYW5zZm9ybSIsIlJlYWRhYmxlU3RhdGUiLCJFRWxpc3RlbmVyQ291bnQiLCJTdHJlYW0iLCJPdXJVaW50OEFycmF5IiwiZGVidWdVdGlsIiwiZGVidWdsb2ciLCJCdWZmZXJMaXN0IiwiZGVzdHJveUltcGwiLCJTdHJpbmdEZWNvZGVyIiwia1Byb3h5RXZlbnRzIiwiaXNEdXBsZXgiLCJyZWFkYWJsZU9iamVjdE1vZGUiLCJod20iLCJyZWFkYWJsZUh3bSIsInJlYWRhYmxlSGlnaFdhdGVyTWFyayIsImRlZmF1bHRId20iLCJwaXBlcyIsInBpcGVzQ291bnQiLCJmbG93aW5nIiwiZW5kRW1pdHRlZCIsInN5bmMiLCJuZWVkUmVhZGFibGUiLCJlbWl0dGVkUmVhZGFibGUiLCJyZWFkYWJsZUxpc3RlbmluZyIsInJlc3VtZVNjaGVkdWxlZCIsImRlZmF1bHRFbmNvZGluZyIsImF3YWl0RHJhaW4iLCJyZWFkaW5nTW9yZSIsImRlY29kZXIiLCJyZWFkYWJsZUFkZENodW5rIiwiYWRkVG9Gcm9udCIsInNraXBDaHVua0NoZWNrIiwiZW1pdFJlYWRhYmxlIiwib25Fb2ZDaHVuayIsIl9pc1VpbnQ4QXJyYXkiLCJjaHVua0ludmFsaWQiLCJfdWludDhBcnJheVRvQnVmZmVyIiwiYWRkQ2h1bmsiLCJtYXliZVJlYWRNb3JlIiwibmVlZE1vcmVEYXRhIiwidW5zaGlmdCIsIl91bmRlc3Ryb3kiLCJ1bmRlc3Ryb3kiLCJpc1BhdXNlZCIsInNldEVuY29kaW5nIiwiZW5jIiwiTUFYX0hXTSIsImhvd011Y2hUb1JlYWQiLCJjb21wdXRlTmV3SGlnaFdhdGVyTWFyayIsImVtaXRSZWFkYWJsZV8iLCJmbG93IiwibWF5YmVSZWFkTW9yZV8iLCJuUmVhZGluZ05leHRUaWNrIiwicmVzdW1lXyIsImZyb21MaXN0IiwicmV0Iiwic2hpZnQiLCJsaXN0IiwiaGFzU3RyaW5ncyIsImMiLCJuYiIsInRhaWwiLCJjb3B5RnJvbUJ1ZmZlclN0cmluZyIsImJ1ZiIsImNvcHlGcm9tQnVmZmVyIiwiZnJvbUxpc3RQYXJ0aWFsIiwiZW5kUmVhZGFibGUiLCJlbmRSZWFkYWJsZU5UIiwieHMiLCJsIiwicGFyc2VJbnQiLCJuT3JpZyIsImRvUmVhZCIsInBpcGVPcHRzIiwiZW5kRm4iLCJzdGRvdXQiLCJzdGRlcnIiLCJ1bnBpcGUiLCJvbnVucGlwZSIsInVucGlwZUluZm8iLCJoYXNVbnBpcGVkIiwib25kcmFpbiIsIm9uZGF0YSIsImNsZWFuZWRVcCIsIm5lZWREcmFpbiIsImNsZWFudXAiLCJwaXBlT25EcmFpbiIsImluY3JlYXNlZEF3YWl0RHJhaW4iLCJwYXVzZSIsImRlc3RzIiwiZXYiLCJwYXVzZWQiLCJfZnJvbUxpc3QiLCJhZnRlclRyYW5zZm9ybSIsInRzIiwiX3RyYW5zZm9ybVN0YXRlIiwidHJhbnNmb3JtaW5nIiwid3JpdGVjYiIsIndyaXRlY2h1bmsiLCJuZWVkVHJhbnNmb3JtIiwid3JpdGVlbmNvZGluZyIsImZsdXNoIiwiX2ZsdXNoIiwicHJlZmluaXNoIiwiX3RoaXMyIiwiZXJyMiIsIkNvcmtlZFJlcXVlc3QiLCJjb3JrUmVxIiwicGVuZGluZ2NiIiwiY29ya2VkUmVxdWVzdHNGcmVlIiwib25Db3JrZWRGaW5pc2giLCJhc3luY1dyaXRlIiwiYnJvd3NlciIsInNldEltbWVkaWF0ZSIsIldyaXRhYmxlU3RhdGUiLCJpbnRlcm5hbFV0aWwiLCJkZXByZWNhdGUiLCJub3AiLCJ3cml0YWJsZU9iamVjdE1vZGUiLCJ3cml0YWJsZUh3bSIsIndyaXRhYmxlSGlnaFdhdGVyTWFyayIsImZpbmFsQ2FsbGVkIiwiZW5kaW5nIiwiZmluaXNoZWQiLCJub0RlY29kZSIsImRlY29kZVN0cmluZ3MiLCJjb3JrZWQiLCJidWZmZXJQcm9jZXNzaW5nIiwib253cml0ZSIsIndyaXRlbGVuIiwib253cml0ZVN0YXRlVXBkYXRlIiwiZmluaXNoTWF5YmUiLCJlcnJvckVtaXR0ZWQiLCJvbndyaXRlRXJyb3IiLCJuZWVkRmluaXNoIiwiYnVmZmVyZWRSZXF1ZXN0IiwiY2xlYXJCdWZmZXIiLCJhZnRlcldyaXRlIiwibGFzdEJ1ZmZlcmVkUmVxdWVzdCIsInByZWZpbmlzaGVkIiwiYnVmZmVyZWRSZXF1ZXN0Q291bnQiLCJyZWFsSGFzSW5zdGFuY2UiLCJ3cml0ZXYiLCJfd3JpdGV2IiwiX2ZpbmFsIiwiZG9Xcml0ZSIsIm9ud3JpdGVEcmFpbiIsImhvbGRlciIsImFsbEJ1ZmZlcnMiLCJpc0J1ZiIsImNhbGxGaW5hbCIsIm5lZWQiLCJnZXRCdWZmZXIiLCJjdXJyZW50Iiwib3V0IiwiaGFzSW5zdGFuY2UiLCJ3cml0ZUFmdGVyRW5kIiwidmFsaWQiLCJ2YWxpZENodW5rIiwibmV3Q2h1bmsiLCJkZWNvZGVDaHVuayIsImxhc3QiLCJ3cml0ZU9yQnVmZmVyIiwic2V0RGVmYXVsdEVuY29kaW5nIiwidG9Mb3dlckNhc2UiLCJlbmRXcml0YWJsZSIsImNvcHlCdWZmZXIiLCJvZmZzZXQiLCJpbnNwZWN0IiwiY3VzdG9tIiwiZW1pdEVycm9yTlQiLCJyZWFkYWJsZURlc3Ryb3llZCIsIndyaXRhYmxlRGVzdHJveWVkIiwiaXNFbmNvZGluZyIsIm5lbmMiLCJyZXRyaWVkIiwiX25vcm1hbGl6ZUVuY29kaW5nIiwibm9ybWFsaXplRW5jb2RpbmciLCJ1dGYxNlRleHQiLCJ1dGYxNkVuZCIsImZpbGxMYXN0IiwidXRmOEZpbGxMYXN0IiwiYmFzZTY0VGV4dCIsImJhc2U2NEVuZCIsInNpbXBsZVdyaXRlIiwic2ltcGxlRW5kIiwibGFzdE5lZWQiLCJsYXN0VG90YWwiLCJsYXN0Q2hhciIsInV0ZjhDaGVja0J5dGUiLCJieXRlIiwidXRmOENoZWNrRXh0cmFCeXRlcyIsImNoYXJDb2RlQXQiLCJ0b3RhbCIsInV0ZjhDaGVja0luY29tcGxldGUiLCJ4dGVuZCIsIkRlc3Ryb3lhYmxlVHJhbnNmb3JtIiwiX2Rlc3Ryb3llZCIsInRocm91Z2gyIiwidDIiLCJUaHJvdWdoMiIsIndyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9