(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 745 ], {
  19394: (e, r, t) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    const o = t(17187);
    function n(e, r, t) {
      try {
        Reflect.apply(e, r, t);
      } catch (o) {
        setTimeout((() => {
          throw o;
        }));
      }
    }
    class i extends o.EventEmitter {
      emit(e, ...r) {
        let t = 'error' === e;
        const o = this._events;
        if (void 0 !== o) t = t && void 0 === o.error; else if (!t) return !1;
        if (t) {
          let e;
          if (r.length > 0 && ([e] = r), e instanceof Error) throw e;
          const t = new Error("Unhandled error." + (e ? ` (${e.message})` : ''));
          throw t.context = e, t;
        }
        const i = o[e];
        if (void 0 === i) return !1;
        if ('function' == typeof i) n(i, this, r); else {
          const e = i.length;
          const t = function(e) {
            const r = e.length;
            const t = new Array(r);
            for (let o = 0; o < r; o += 1) t[o] = e[o];
            return t;
          }(i);
          for (let o = 0; o < e; o += 1) n(t[o], this, r);
        }
        return !0;
      }
    }
    r.default = i;
  },
  12294: (e, r, t) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.EthereumProviderError = r.EthereumRpcError = void 0;
    const o = t(4445);
    class n extends Error {
      constructor(e, r, t) {
        if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
        if (!r || 'string' != typeof r) throw new Error('"message" must be a nonempty string.');
        super(r), this.code = e, void 0 !== t && (this.data = t);
      }
      serialize() {
        const e = {
          code: this.code,
          message: this.message
        };
        return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e;
      }
      toString() {
        return o.default(this.serialize(), i, 2);
      }
    }
    r.EthereumRpcError = n;
    function i(e, r) {
      if ('[Circular]' !== r) return r;
    }
    r.EthereumProviderError = class extends n {
      constructor(e, r, t) {
        if (!function(e) {
          return Number.isInteger(e) && e >= 1e3 && e <= 4999;
        }(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(e, r, t);
      }
    };
  },
  92662: (e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.errorValues = r.errorCodes = void 0, r.errorCodes = {
      rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
      },
      provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
      }
    }, r.errorValues = {
      '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
      },
      '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.'
      },
      '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.'
      },
      '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).'
      },
      '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.'
      },
      '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.'
      },
      '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.'
      },
      '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.'
      },
      '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.'
      },
      '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.'
      },
      '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.'
      },
      4001: {
        standard: 'EIP-1193',
        message: 'User rejected the request.'
      },
      4100: {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.'
      },
      4200: {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.'
      },
      4900: {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.'
      },
      4901: {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.'
      }
    };
  },
  68797: (e, r, t) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.ethErrors = void 0;
    const o = t(12294);
    const n = t(68753);
    const i = t(92662);
    function s(e, r) {
      const [t, i] = u(r);
      return new o.EthereumRpcError(e, t || n.getMessageFromCode(e), i);
    }
    function a(e, r) {
      const [t, i] = u(r);
      return new o.EthereumProviderError(e, t || n.getMessageFromCode(e), i);
    }
    function u(e) {
      if (e) {
        if ('string' == typeof e) return [ e ];
        if ('object' == typeof e && !Array.isArray(e)) {
          const {message: r, data: t} = e;
          if (r && 'string' != typeof r) throw new Error('Must specify string message.');
          return [ r || void 0, t ];
        }
      }
      return [];
    }
    r.ethErrors = {
      rpc: {
        parse: e => s(i.errorCodes.rpc.parse, e),
        invalidRequest: e => s(i.errorCodes.rpc.invalidRequest, e),
        invalidParams: e => s(i.errorCodes.rpc.invalidParams, e),
        methodNotFound: e => s(i.errorCodes.rpc.methodNotFound, e),
        internal: e => s(i.errorCodes.rpc.internal, e),
        server: e => {
          if (!e || 'object' != typeof e || Array.isArray(e)) throw new Error('Ethereum RPC Server errors must provide single object argument.');
          const {code: r} = e;
          if (!Number.isInteger(r) || r > -32005 || r < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
          return s(r, e);
        },
        invalidInput: e => s(i.errorCodes.rpc.invalidInput, e),
        resourceNotFound: e => s(i.errorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: e => s(i.errorCodes.rpc.resourceUnavailable, e),
        transactionRejected: e => s(i.errorCodes.rpc.transactionRejected, e),
        methodNotSupported: e => s(i.errorCodes.rpc.methodNotSupported, e),
        limitExceeded: e => s(i.errorCodes.rpc.limitExceeded, e)
      },
      provider: {
        userRejectedRequest: e => a(i.errorCodes.provider.userRejectedRequest, e),
        unauthorized: e => a(i.errorCodes.provider.unauthorized, e),
        unsupportedMethod: e => a(i.errorCodes.provider.unsupportedMethod, e),
        disconnected: e => a(i.errorCodes.provider.disconnected, e),
        chainDisconnected: e => a(i.errorCodes.provider.chainDisconnected, e),
        custom: e => {
          if (!e || 'object' != typeof e || Array.isArray(e)) throw new Error('Ethereum Provider custom errors must provide single object argument.');
          const {code: r, message: t, data: n} = e;
          if (!t || 'string' != typeof t) throw new Error('"message" must be a nonempty string');
          return new o.EthereumProviderError(r, t, n);
        }
      }
    };
  },
  79826: (e, r, t) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.getMessageFromCode = r.serializeError = r.EthereumProviderError = r.EthereumRpcError = r.ethErrors = r.errorCodes = void 0;
    const o = t(12294);
    Object.defineProperty(r, "EthereumRpcError", {
      enumerable: !0,
      get: function() {
        return o.EthereumRpcError;
      }
    }), Object.defineProperty(r, "EthereumProviderError", {
      enumerable: !0,
      get: function() {
        return o.EthereumProviderError;
      }
    });
    const n = t(68753);
    Object.defineProperty(r, "serializeError", {
      enumerable: !0,
      get: function() {
        return n.serializeError;
      }
    }), Object.defineProperty(r, "getMessageFromCode", {
      enumerable: !0,
      get: function() {
        return n.getMessageFromCode;
      }
    });
    const i = t(68797);
    Object.defineProperty(r, "ethErrors", {
      enumerable: !0,
      get: function() {
        return i.ethErrors;
      }
    });
    const s = t(92662);
    Object.defineProperty(r, "errorCodes", {
      enumerable: !0,
      get: function() {
        return s.errorCodes;
      }
    });
  },
  68753: (e, r, t) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.serializeError = r.isValidCode = r.getMessageFromCode = r.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const o = t(92662);
    const n = t(12294);
    const i = o.errorCodes.rpc.internal;
    const s = {
      code: i,
      message: a(i)
    };
    function a(e, t = "Unspecified error message. This is a bug, please report it.") {
      if (Number.isInteger(e)) {
        const t = e.toString();
        if (f(o.errorValues, t)) return o.errorValues[t].message;
        if (c(e)) return r.JSON_RPC_SERVER_ERROR_MESSAGE;
      }
      return t;
    }
    function u(e) {
      if (!Number.isInteger(e)) return !1;
      const r = e.toString();
      return !!o.errorValues[r] || !!c(e);
    }
    function c(e) {
      return e >= -32099 && e <= -32e3;
    }
    function d(e) {
      return e && 'object' == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e;
    }
    function f(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }
    r.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.', r.getMessageFromCode = a, r.isValidCode = u, r.serializeError = function(e, {fallbackError: r = s, shouldIncludeStack: t = !1} = {}) {
      var o, i;
      if (!r || !Number.isInteger(r.code) || 'string' != typeof r.message) throw new Error('Must provide fallback error with integer number code and string message.');
      if (e instanceof n.EthereumRpcError) return e.serialize();
      const c = {};
      if (e && 'object' == typeof e && !Array.isArray(e) && f(e, 'code') && u(e.code)) {
        const r = e;
        c.code = r.code, r.message && 'string' == typeof r.message ? (c.message = r.message, f(r, 'data') && (c.data = r.data)) : (c.message = a(c.code), 
        c.data = {
          originalError: d(e)
        });
      } else {
        c.code = r.code;
        const t = null === (o = e) || void 0 === o ? void 0 : o.message;
        c.message = t && 'string' == typeof t ? t : r.message, c.data = {
          originalError: d(e)
        };
      }
      const l = null === (i = e) || void 0 === i ? void 0 : i.stack;
      return t && e && l && 'string' == typeof l && (c.stack = l), c;
    };
  },
  4445: e => {
    e.exports = s, s.default = s, s.stable = d, s.stableStringify = d;
    var r = '[...]';
    var t = '[Circular]';
    var o = [];
    var n = [];
    function i() {
      return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
      };
    }
    function s(e, r, t, s) {
      var a;
      void 0 === s && (s = i()), u(e, '', 0, [], void 0, 0, s);
      try {
        a = 0 === n.length ? JSON.stringify(e, r, t) : JSON.stringify(e, l(r), t);
      } catch (d) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
      } finally {
        for (;0 !== o.length; ) {
          var c = o.pop();
          4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2];
        }
      }
      return a;
    }
    function a(e, r, t, i) {
      var s = Object.getOwnPropertyDescriptor(i, t);
      void 0 !== s.get ? s.configurable ? (Object.defineProperty(i, t, {
        value: e
      }), o.push([ i, t, r, s ])) : n.push([ r, t, e ]) : (i[t] = e, o.push([ i, t, r ]));
    }
    function u(e, o, n, i, s, c, d) {
      var f;
      if (c += 1, 'object' == typeof e && null !== e) {
        for (f = 0; f < i.length; f++) if (i[f] === e) return void a(t, e, o, s);
        if (void 0 !== d.depthLimit && c > d.depthLimit) return void a(r, e, o, s);
        if (void 0 !== d.edgesLimit && n + 1 > d.edgesLimit) return void a(r, e, o, s);
        if (i.push(e), Array.isArray(e)) for (f = 0; f < e.length; f++) u(e[f], f, f, i, e, c, d); else {
          var l = Object.keys(e);
          for (f = 0; f < l.length; f++) {
            var p = l[f];
            u(e[p], p, f, i, e, c, d);
          }
        }
        i.pop();
      }
    }
    function c(e, r) {
      return e < r ? -1 : e > r ? 1 : 0;
    }
    function d(e, r, t, s) {
      void 0 === s && (s = i());
      var a = f(e, '', 0, [], void 0, 0, s) || e;
      var u;
      try {
        u = 0 === n.length ? JSON.stringify(a, r, t) : JSON.stringify(a, l(r), t);
      } catch (d) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
      } finally {
        for (;0 !== o.length; ) {
          var c = o.pop();
          4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2];
        }
      }
      return u;
    }
    function f(e, n, i, s, u, d, l) {
      var p;
      if (d += 1, 'object' == typeof e && null !== e) {
        for (p = 0; p < s.length; p++) if (s[p] === e) return void a(t, e, n, u);
        try {
          if ('function' == typeof e.toJSON) return;
        } catch (m) {
          return;
        }
        if (void 0 !== l.depthLimit && d > l.depthLimit) return void a(r, e, n, u);
        if (void 0 !== l.edgesLimit && i + 1 > l.edgesLimit) return void a(r, e, n, u);
        if (s.push(e), Array.isArray(e)) for (p = 0; p < e.length; p++) f(e[p], p, p, s, e, d, l); else {
          var h = {};
          var g = Object.keys(e).sort(c);
          for (p = 0; p < g.length; p++) {
            var v = g[p];
            f(e[v], v, p, s, e, d, l), h[v] = e[v];
          }
          if (void 0 === u) return h;
          o.push([ u, n, e ]), u[n] = h;
        }
        s.pop();
      }
    }
    function l(e) {
      return e = void 0 !== e ? e : function(e, r) {
        return r;
      }, function(r, t) {
        if (n.length > 0) for (var o = 0; o < n.length; o++) {
          var i = n[o];
          if (i[1] === r && i[0] === t) {
            t = i[2], n.splice(o, 1);
            break;
          }
        }
        return e.call(this, r, t);
      };
    }
  },
  67266: (e, r, t) => {
    var o = 'undefined' != typeof JSON ? JSON : t(58418);
    e.exports = function(e, r) {
      r || (r = {}), 'function' == typeof r && (r = {
        cmp: r
      });
      var t = r.space || '';
      'number' == typeof t && (t = Array(t + 1).join(' '));
      var s = 'boolean' == typeof r.cycles && r.cycles;
      var a = r.replacer || function(e, r) {
        return r;
      };
      var u = r.cmp && function(e) {
        return function(r) {
          return function(t, o) {
            var n = {
              key: t,
              value: r[t]
            };
            var i = {
              key: o,
              value: r[o]
            };
            return e(n, i);
          };
        };
      }(r.cmp);
      var c = [];
      return function e(r, d, f, l) {
        var p = t ? '\n' + new Array(l + 1).join(t) : '';
        var h = t ? ': ' : ':';
        if (f && f.toJSON && 'function' == typeof f.toJSON && (f = f.toJSON()), void 0 !== (f = a.call(r, d, f))) {
          if ('object' != typeof f || null === f) return o.stringify(f);
          if (n(f)) {
            var g = [];
            for (var v = 0; v < f.length; v++) {
              var m = e(f, v, f[v], l + 1) || o.stringify(null);
              g.push(p + t + m);
            }
            return '[' + g.join(',') + p + ']';
          }
          if (-1 !== c.indexOf(f)) {
            if (s) return o.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
          }
          c.push(f);
          var y = i(f).sort(u && u(f));
          g = [];
          for (v = 0; v < y.length; v++) {
            var b = e(f, d = y[v], f[d], l + 1);
            if (b) {
              var E = o.stringify(d) + h + b;
              g.push(p + t + E);
            }
          }
          return c.splice(c.indexOf(f), 1), '{' + g.join(',') + p + '}';
        }
      }({
        '': e
      }, '', e, 0);
    };
    var n = Array.isArray || function(e) {
      return '[object Array]' === {}.toString.call(e);
    };
    var i = Object.keys || function(e) {
      var r = Object.prototype.hasOwnProperty || function() {
        return !0;
      };
      var t = [];
      for (var o in e) r.call(e, o) && t.push(o);
      return t;
    };
  },
  58418: (e, r, t) => {
    r.parse = t(51396), r.stringify = t(66177);
  },
  51396: e => {
    var r, t, o, n, i = {
      '"': '"',
      '\\': '\\',
      '/': '/',
      b: '\b',
      f: '\f',
      n: '\n',
      r: '\r',
      t: '\t'
    }, s = function(e) {
      throw {
        name: 'SyntaxError',
        message: e,
        at: r,
        text: o
      };
    }, a = function(e) {
      return e && e !== t && s("Expected '" + e + "' instead of '" + t + "'"), t = o.charAt(r), r += 1, t;
    }, u = function() {
      var e, r = '';
      for ('-' === t && (r = '-', a('-')); t >= '0' && t <= '9'; ) r += t, a();
      if ('.' === t) for (r += '.'; a() && t >= '0' && t <= '9'; ) r += t;
      if ('e' === t || 'E' === t) for (r += t, a(), '-' !== t && '+' !== t || (r += t, a()); t >= '0' && t <= '9'; ) r += t, a();
      if (e = +r, isFinite(e)) return e;
      s("Bad number");
    }, c = function() {
      var e, r, o, n = '';
      if ('"' === t) for (;a(); ) {
        if ('"' === t) return a(), n;
        if ('\\' === t) if (a(), 'u' === t) {
          for (o = 0, r = 0; r < 4 && (e = parseInt(a(), 16), isFinite(e)); r += 1) o = 16 * o + e;
          n += String.fromCharCode(o);
        } else {
          if ('string' != typeof i[t]) break;
          n += i[t];
        } else n += t;
      }
      s("Bad string");
    }, d = function() {
      for (;t && t <= ' '; ) a();
    };
    n = function() {
      switch (d(), t) {
       case '{':
        return function() {
          var e, r = {};
          if ('{' === t) {
            if (a('{'), d(), '}' === t) return a('}'), r;
            for (;t; ) {
              if (e = c(), d(), a(':'), Object.hasOwnProperty.call(r, e) && s('Duplicate key "' + e + '"'), r[e] = n(), d(), '}' === t) return a('}'), 
              r;
              a(','), d();
            }
          }
          s("Bad object");
        }();

       case '[':
        return function() {
          var e = [];
          if ('[' === t) {
            if (a('['), d(), ']' === t) return a(']'), e;
            for (;t; ) {
              if (e.push(n()), d(), ']' === t) return a(']'), e;
              a(','), d();
            }
          }
          s("Bad array");
        }();

       case '"':
        return c();

       case '-':
        return u();

       default:
        return t >= '0' && t <= '9' ? u() : function() {
          switch (t) {
           case 't':
            return a('t'), a('r'), a('u'), a('e'), !0;

           case 'f':
            return a('f'), a('a'), a('l'), a('s'), a('e'), !1;

           case 'n':
            return a('n'), a('u'), a('l'), a('l'), null;
          }
          s("Unexpected '" + t + "'");
        }();
      }
    }, e.exports = function(e, i) {
      var a;
      return o = e, r = 0, t = ' ', a = n(), d(), t && s("Syntax error"), 'function' == typeof i ? function e(r, t) {
        var o, n, s = r[t];
        if (s && 'object' == typeof s) for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (void 0 !== (n = e(s, o)) ? s[o] = n : delete s[o]);
        return i.call(r, t, s);
      }({
        '': a
      }, '') : a;
    };
  },
  66177: e => {
    var r, t, o, n = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, i = {
      '\b': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    };
    function s(e) {
      return n.lastIndex = 0, n.test(e) ? '"' + e.replace(n, (function(e) {
        var r = i[e];
        return 'string' == typeof r ? r : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
      })) + '"' : '"' + e + '"';
    }
    function a(e, n) {
      var i, u, c, d, f, l = r, p = n[e];
      switch (p && 'object' == typeof p && 'function' == typeof p.toJSON && (p = p.toJSON(e)), 'function' == typeof o && (p = o.call(n, e, p)), 
      typeof p) {
       case 'string':
        return s(p);

       case 'number':
        return isFinite(p) ? String(p) : 'null';

       case 'boolean':
       case 'null':
        return String(p);

       case 'object':
        if (!p) return 'null';
        if (r += t, f = [], '[object Array]' === Object.prototype.toString.apply(p)) {
          for (d = p.length, i = 0; i < d; i += 1) f[i] = a(i, p) || 'null';
          return c = 0 === f.length ? '[]' : r ? '[\n' + r + f.join(',\n' + r) + '\n' + l + ']' : '[' + f.join(',') + ']', r = l, 
          c;
        }
        if (o && 'object' == typeof o) for (d = o.length, i = 0; i < d; i += 1) 'string' == typeof (u = o[i]) && (c = a(u, p)) && f.push(s(u) + (r ? ': ' : ':') + c); else for (u in p) Object.prototype.hasOwnProperty.call(p, u) && (c = a(u, p)) && f.push(s(u) + (r ? ': ' : ':') + c);
        return c = 0 === f.length ? '{}' : r ? '{\n' + r + f.join(',\n' + r) + '\n' + l + '}' : '{' + f.join(',') + '}', r = l, 
        c;
      }
    }
    e.exports = function(e, n, i) {
      var s;
      if (r = '', t = '', 'number' == typeof i) for (s = 0; s < i; s += 1) t += ' '; else 'string' == typeof i && (t = i);
      if (o = n, n && 'function' != typeof n && ('object' != typeof n || 'number' != typeof n.length)) throw new Error('JSON.stringify');
      return a('', {
        '': e
      });
    };
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ1LmJmYzkyOTkwLmpzIiwibWFwcGluZ3MiOiI7OztJQUNBQSxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7TUFBRUMsUUFBTzs7SUFDdEQsTUFBTUMsSUFBVyxFQUFRO0lBQ3pCLFNBQVNDLEVBQVVDLEdBQVNDLEdBQVNDO01BQ2pDO1FBQ0lDLFFBQVFDLE1BQU1KLEdBQVNDLEdBQVNDO1FBRXBDLE9BQU9HO1FBRUhDLFlBQVc7VUFDUCxNQUFNRDs7OztJQVlsQixNQUFNRSxVQUF5QlQsRUFBU1U7TUFDcENDLEtBQUtDLE1BQVNSO1FBQ1YsSUFBSVMsSUFBbUIsWUFBVEQ7UUFDZCxNQUFNRSxJQUFTQyxLQUFLQztRQUNwQixTQUFlQyxNQUFYSCxHQUNBRCxJQUFVQSxVQUE0QkksTUFBakJILEVBQU9JLFlBRTNCLEtBQUtMLEdBQ04sUUFBTztRQUdYLElBQUlBLEdBQVM7VUFDVCxJQUFJTTtVQUlKLElBSElmLEVBQUtnQixTQUFTLE9BQ2JELEtBQU1mLElBRVBlLGFBQWNFLE9BR2QsTUFBTUY7VUFHVixNQUFNWixJQUFNLElBQUljLE1BQU0sc0JBQW1CRixJQUFLLEtBQUtBLEVBQUdHLGFBQWE7VUFFbkUsTUFEQWYsRUFBSUosVUFBVWdCLEdBQ1JaOztRQUVWLE1BQU1MLElBQVVZLEVBQU9GO1FBQ3ZCLFNBQWdCSyxNQUFaZixHQUNBLFFBQU87UUFFWCxJQUF1QixxQkFBWkEsR0FDUEQsRUFBVUMsR0FBU2EsTUFBTVgsU0FFeEI7VUFDRCxNQUFNbUIsSUFBTXJCLEVBQVFrQjtVQUNwQixNQUFNSSxJQTNDbEIsU0FBb0JDO1lBQ2hCLE1BQU1DLElBQUlELEVBQUlMO1lBQ2QsTUFBTU8sSUFBTyxJQUFJQyxNQUFNRjtZQUN2QixLQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUgsR0FBR0csS0FBSyxHQUN4QkYsRUFBS0UsS0FBS0osRUFBSUk7WUFFbEIsT0FBT0Y7V0FxQ21CRyxDQUFXNUI7VUFDN0IsS0FBSyxJQUFJMkIsSUFBSSxHQUFHQSxJQUFJTixHQUFLTSxLQUFLLEdBQzFCNUIsRUFBVXVCLEVBQVVLLElBQUlkLE1BQU1YOztRQUd0QyxRQUFPOzs7SUFHZk4sRUFBQSxVQUFrQlc7Ozs7SUNoRWxCYixPQUFPQyxlQUFlQyxHQUFTLGNBQWM7TUFBRUMsUUFBTztRQUN0REQsRUFBUWlDLHdCQUF3QmpDLEVBQVFrQyx3QkFBbUI7SUFDM0QsTUFBTUMsSUFBd0IsRUFBUTtJQU10QyxNQUFNRCxVQUF5Qlg7TUFDM0JhLFlBQVlDLEdBQU1iLEdBQVNjO1FBQ3ZCLEtBQUtDLE9BQU9DLFVBQVVILElBQ2xCLE1BQU0sSUFBSWQsTUFBTTtRQUVwQixLQUFLQyxLQUE4QixtQkFBWkEsR0FDbkIsTUFBTSxJQUFJRCxNQUFNO1FBRXBCa0IsTUFBTWpCLElBQ05QLEtBQUtvQixPQUFPQSxRQUNDbEIsTUFBVG1CLE1BQ0FyQixLQUFLcUIsT0FBT0E7O01BTXBCSTtRQUNJLE1BQU1DLElBQWE7VUFDZk4sTUFBTXBCLEtBQUtvQjtVQUNYYixTQUFTUCxLQUFLTzs7UUFRbEIsWUFOa0JMLE1BQWRGLEtBQUtxQixTQUNMSyxFQUFXTCxPQUFPckIsS0FBS3FCLE9BRXZCckIsS0FBSzJCLFVBQ0xELEVBQVdDLFFBQVEzQixLQUFLMkIsUUFFckJEOztNQU1YRTtRQUNJLE9BQU9WLEVBQXNCVyxRQUFRN0IsS0FBS3lCLGFBQWFLLEdBQW1COzs7SUFHbEYvQyxFQUFRa0MsbUJBQW1CQTtJQXNCM0IsU0FBU2EsRUFBa0JDLEdBQUcvQztNQUMxQixJQUFjLGlCQUFWQSxHQUdKLE9BQU9BOztJQVRYRCxFQUFRaUMsd0JBWlIsY0FBb0NDO01BS2hDRSxZQUFZQyxHQUFNYixHQUFTYztRQUN2QixLQVFSLFNBQWdDRDtVQUM1QixPQUFPRSxPQUFPQyxVQUFVSCxNQUFTQSxLQUFRLE9BQVFBLEtBQVE7U0FUaERZLENBQXVCWixJQUN4QixNQUFNLElBQUlkLE1BQU07UUFFcEJrQixNQUFNSixHQUFNYixHQUFTYzs7Ozs7O0lDNUQ3QnhDLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztNQUFFQyxRQUFPO1FBQ3RERCxFQUFRa0QsY0FBY2xELEVBQVFtRCxrQkFBYSxHQUMzQ25ELEVBQVFtRCxhQUFhO01BQ2pCQyxLQUFLO1FBQ0RDLGVBQWU7UUFDZkMsbUJBQW1CO1FBQ25CQyxzQkFBc0I7UUFDdEJDLHNCQUFzQjtRQUN0QkMscUJBQXFCO1FBQ3JCQyxnQkFBZ0I7UUFDaEJDLFFBQVE7UUFDUkMsaUJBQWlCO1FBQ2pCQyxpQkFBaUI7UUFDakJDLGdCQUFnQjtRQUNoQkMsV0FBVzs7TUFFZkMsVUFBVTtRQUNOQyxxQkFBcUI7UUFDckJDLGNBQWM7UUFDZEMsbUJBQW1CO1FBQ25CQyxjQUFjO1FBQ2RDLG1CQUFtQjs7T0FHM0JyRSxFQUFRa0QsY0FBYztNQUNsQixVQUFVO1FBQ05vQixVQUFVO1FBQ1Y5QyxTQUFTOztNQUViLFVBQVU7UUFDTjhDLFVBQVU7UUFDVjlDLFNBQVM7O01BRWIsVUFBVTtRQUNOOEMsVUFBVTtRQUNWOUMsU0FBUzs7TUFFYixVQUFVO1FBQ044QyxVQUFVO1FBQ1Y5QyxTQUFTOztNQUViLFVBQVU7UUFDTjhDLFVBQVU7UUFDVjlDLFNBQVM7O01BRWIsVUFBVTtRQUNOOEMsVUFBVTtRQUNWOUMsU0FBUzs7TUFFYixVQUFVO1FBQ044QyxVQUFVO1FBQ1Y5QyxTQUFTOztNQUViLFVBQVU7UUFDTjhDLFVBQVU7UUFDVjlDLFNBQVM7O01BRWIsVUFBVTtRQUNOOEMsVUFBVTtRQUNWOUMsU0FBUzs7TUFFYixVQUFVO1FBQ044QyxVQUFVO1FBQ1Y5QyxTQUFTOztNQUViLFVBQVU7UUFDTjhDLFVBQVU7UUFDVjlDLFNBQVM7O01BRWIsTUFBUTtRQUNKOEMsVUFBVTtRQUNWOUMsU0FBUzs7TUFFYixNQUFRO1FBQ0o4QyxVQUFVO1FBQ1Y5QyxTQUFTOztNQUViLE1BQVE7UUFDSjhDLFVBQVU7UUFDVjlDLFNBQVM7O01BRWIsTUFBUTtRQUNKOEMsVUFBVTtRQUNWOUMsU0FBUzs7TUFFYixNQUFRO1FBQ0o4QyxVQUFVO1FBQ1Y5QyxTQUFTOzs7Ozs7SUN2RmpCMUIsT0FBT0MsZUFBZUMsR0FBUyxjQUFjO01BQUVDLFFBQU87UUFDdERELEVBQVF1RSxpQkFBWTtJQUNwQixNQUFNQyxJQUFZLEVBQVE7SUFDMUIsTUFBTUMsSUFBVSxFQUFRO0lBQ3hCLE1BQU1DLElBQW9CLEVBQVE7SUE4R2xDLFNBQVNDLEVBQW1CdEMsR0FBTXVDO01BQzlCLE9BQU9wRCxHQUFTYyxLQUFRdUMsRUFBVUQ7TUFDbEMsT0FBTyxJQUFJSixFQUFVdEMsaUJBQWlCRyxHQUFNYixLQUFXaUQsRUFBUUssbUJBQW1CekMsSUFBT0M7O0lBRTdGLFNBQVN5QyxFQUFvQjFDLEdBQU11QztNQUMvQixPQUFPcEQsR0FBU2MsS0FBUXVDLEVBQVVEO01BQ2xDLE9BQU8sSUFBSUosRUFBVXZDLHNCQUFzQkksR0FBTWIsS0FBV2lELEVBQVFLLG1CQUFtQnpDLElBQU9DOztJQUVsRyxTQUFTdUMsRUFBVUQ7TUFDZixJQUFJQSxHQUFLO1FBQ0wsSUFBbUIsbUJBQVJBLEdBQ1AsT0FBTyxFQUFDQTtRQUVQLElBQW1CLG1CQUFSQSxNQUFxQjlDLE1BQU1rRCxRQUFRSixJQUFNO1VBQ3JELE9BQU0sU0FBRXBELEdBQU8sTUFBRWMsS0FBU3NDO1VBQzFCLElBQUlwRCxLQUE4QixtQkFBWkEsR0FDbEIsTUFBTSxJQUFJRCxNQUFNO1VBRXBCLE9BQU8sRUFBQ0MsVUFBV0wsR0FBV21COzs7TUFHdEMsT0FBTzs7SUFsSVh0QyxFQUFRdUUsWUFBWTtNQUNoQm5CLEtBQUs7UUFJRE8sT0FBUWlCLEtBQVFELEVBQW1CRCxFQUFrQnZCLFdBQVdDLElBQUlPLE9BQU9pQjtRQUkzRWhCLGdCQUFpQmdCLEtBQVFELEVBQW1CRCxFQUFrQnZCLFdBQVdDLElBQUlRLGdCQUFnQmdCO1FBSTdGZCxlQUFnQmMsS0FBUUQsRUFBbUJELEVBQWtCdkIsV0FBV0MsSUFBSVUsZUFBZWM7UUFJM0ZmLGdCQUFpQmUsS0FBUUQsRUFBbUJELEVBQWtCdkIsV0FBV0MsSUFBSVMsZ0JBQWdCZTtRQUk3RmIsVUFBV2EsS0FBUUQsRUFBbUJELEVBQWtCdkIsV0FBV0MsSUFBSVcsVUFBVWE7UUFNakZLLFFBQVNDO1VBQ0wsS0FBS0EsS0FBd0IsbUJBQVRBLEtBQXFCcEQsTUFBTWtELFFBQVFFLElBQ25ELE1BQU0sSUFBSTNELE1BQU07VUFFcEIsT0FBTSxNQUFFYyxLQUFTNkM7VUFDakIsS0FBSzNDLE9BQU9DLFVBQVVILE1BQVNBLEtBQVEsU0FBU0EsS0FBUSxPQUNwRCxNQUFNLElBQUlkLE1BQU07VUFFcEIsT0FBT29ELEVBQW1CdEMsR0FBTTZDOztRQUtwQzdCLGNBQWV1QixLQUFRRCxFQUFtQkQsRUFBa0J2QixXQUFXQyxJQUFJQyxjQUFjdUI7UUFJekZ0QixrQkFBbUJzQixLQUFRRCxFQUFtQkQsRUFBa0J2QixXQUFXQyxJQUFJRSxrQkFBa0JzQjtRQUlqR3JCLHFCQUFzQnFCLEtBQVFELEVBQW1CRCxFQUFrQnZCLFdBQVdDLElBQUlHLHFCQUFxQnFCO1FBSXZHcEIscUJBQXNCb0IsS0FBUUQsRUFBbUJELEVBQWtCdkIsV0FBV0MsSUFBSUkscUJBQXFCb0I7UUFJdkduQixvQkFBcUJtQixLQUFRRCxFQUFtQkQsRUFBa0J2QixXQUFXQyxJQUFJSyxvQkFBb0JtQjtRQUlyR2xCLGVBQWdCa0IsS0FBUUQsRUFBbUJELEVBQWtCdkIsV0FBV0MsSUFBSU0sZUFBZWtCOztNQUUvRlosVUFBVTtRQUlOQyxxQkFBc0JXLEtBQ1hHLEVBQW9CTCxFQUFrQnZCLFdBQVdhLFNBQVNDLHFCQUFxQlc7UUFLMUZWLGNBQWVVLEtBQ0pHLEVBQW9CTCxFQUFrQnZCLFdBQVdhLFNBQVNFLGNBQWNVO1FBS25GVCxtQkFBb0JTLEtBQ1RHLEVBQW9CTCxFQUFrQnZCLFdBQVdhLFNBQVNHLG1CQUFtQlM7UUFLeEZSLGNBQWVRLEtBQ0pHLEVBQW9CTCxFQUFrQnZCLFdBQVdhLFNBQVNJLGNBQWNRO1FBS25GUCxtQkFBb0JPLEtBQ1RHLEVBQW9CTCxFQUFrQnZCLFdBQVdhLFNBQVNLLG1CQUFtQk87UUFLeEZPLFFBQVNEO1VBQ0wsS0FBS0EsS0FBd0IsbUJBQVRBLEtBQXFCcEQsTUFBTWtELFFBQVFFLElBQ25ELE1BQU0sSUFBSTNELE1BQU07VUFFcEIsT0FBTSxNQUFFYyxHQUFJLFNBQUViLEdBQU8sTUFBRWMsS0FBUzRDO1VBQ2hDLEtBQUsxRCxLQUE4QixtQkFBWkEsR0FDbkIsTUFBTSxJQUFJRCxNQUFNO1VBRXBCLE9BQU8sSUFBSWlELEVBQVV2QyxzQkFBc0JJLEdBQU1iLEdBQVNjOzs7Ozs7O0lDN0d0RXhDLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztNQUFFQyxRQUFPO1FBQ3RERCxFQUFROEUscUJBQXFCOUUsRUFBUW9GLGlCQUFpQnBGLEVBQVFpQyx3QkFBd0JqQyxFQUFRa0MsbUJBQW1CbEMsRUFBUXVFLFlBQVl2RSxFQUFRbUQsa0JBQWE7SUFDMUosTUFBTXFCLElBQVksRUFBUTtJQUMxQjFFLE9BQU9DLGVBQWVDLEdBQVMsb0JBQW9CO01BQUVxRixhQUFZO01BQU1DLEtBQUs7UUFBYyxPQUFPZCxFQUFVdEM7O1FBQzNHcEMsT0FBT0MsZUFBZUMsR0FBUyx5QkFBeUI7TUFBRXFGLGFBQVk7TUFBTUMsS0FBSztRQUFjLE9BQU9kLEVBQVV2Qzs7O0lBQ2hILE1BQU13QyxJQUFVLEVBQVE7SUFDeEIzRSxPQUFPQyxlQUFlQyxHQUFTLGtCQUFrQjtNQUFFcUYsYUFBWTtNQUFNQyxLQUFLO1FBQWMsT0FBT2IsRUFBUVc7O1FBQ3ZHdEYsT0FBT0MsZUFBZUMsR0FBUyxzQkFBc0I7TUFBRXFGLGFBQVk7TUFBTUMsS0FBSztRQUFjLE9BQU9iLEVBQVFLOzs7SUFDM0csTUFBTVMsSUFBVyxFQUFRO0lBQ3pCekYsT0FBT0MsZUFBZUMsR0FBUyxhQUFhO01BQUVxRixhQUFZO01BQU1DLEtBQUs7UUFBYyxPQUFPQyxFQUFTaEI7OztJQUNuRyxNQUFNRyxJQUFvQixFQUFRO0lBQ2xDNUUsT0FBT0MsZUFBZUMsR0FBUyxjQUFjO01BQUVxRixhQUFZO01BQU1DLEtBQUs7UUFBYyxPQUFPWixFQUFrQnZCOzs7Ozs7SUNYN0dyRCxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7TUFBRUMsUUFBTztRQUN0REQsRUFBUW9GLGlCQUFpQnBGLEVBQVF3RixjQUFjeEYsRUFBUThFLHFCQUFxQjlFLEVBQVF5RixxQ0FBZ0M7SUFDcEgsTUFBTWYsSUFBb0IsRUFBUTtJQUNsQyxNQUFNRixJQUFZLEVBQVE7SUFDMUIsTUFBTWtCLElBQXNCaEIsRUFBa0J2QixXQUFXQyxJQUFJVztJQUU3RCxNQUFNNEIsSUFBaUI7TUFDbkJ0RCxNQUFNcUQ7TUFDTmxFLFNBQVNzRCxFQUFtQlk7O0lBT2hDLFNBQVNaLEVBQW1CekMsR0FBTXVELElBVlQ7TUFXckIsSUFBSXJELE9BQU9DLFVBQVVILElBQU87UUFDeEIsTUFBTXdELElBQWF4RCxFQUFLUTtRQUN4QixJQUFJaUQsRUFBT3BCLEVBQWtCeEIsYUFBYTJDLElBQ3RDLE9BQU9uQixFQUFrQnhCLFlBQVkyQyxHQUFZckU7UUFFckQsSUFBSXVFLEVBQXFCMUQsSUFDckIsT0FBT3JDLEVBQVF5Rjs7TUFHdkIsT0FBT0c7O0lBT1gsU0FBU0osRUFBWW5EO01BQ2pCLEtBQUtFLE9BQU9DLFVBQVVILElBQ2xCLFFBQU87TUFFWCxNQUFNd0QsSUFBYXhELEVBQUtRO01BQ3hCLFNBQUk2QixFQUFrQnhCLFlBQVkyQyxRQUc5QkUsRUFBcUIxRDs7SUF5RDdCLFNBQVMwRCxFQUFxQjFEO01BQzFCLE9BQU9BLE1BQVMsU0FBU0EsTUFBUzs7SUFFdEMsU0FBUzJELEVBQW9CNUU7TUFDekIsT0FBSUEsS0FBMEIsbUJBQVZBLE1BQXVCVSxNQUFNa0QsUUFBUTVELEtBQzlDdEIsT0FBT21HLE9BQU8sSUFBSTdFLEtBRXRCQTs7SUFFWCxTQUFTMEUsRUFBT0ksR0FBS0M7TUFDakIsT0FBT3JHLE9BQU9zRyxVQUFVQyxlQUFlQyxLQUFLSixHQUFLQzs7SUFqR3JEbkcsRUFBUXlGLGdDQUFnQyw2QkFpQnhDekYsRUFBUThFLHFCQUFxQkEsR0FrQjdCOUUsRUFBUXdGLGNBQWNBLEdBa0R0QnhGLEVBQVFvRixpQkEzQ1IsU0FBd0JoRSxJQUFPLGVBQUVtRixJQUFnQlosR0FBYyxvQkFBRWEsS0FBcUIsS0FBVztNQUM3RixJQUFJQyxHQUFJQztNQUNSLEtBQUtILE1BQ0FoRSxPQUFPQyxVQUFVK0QsRUFBY2xFLFNBQ0MsbUJBQTFCa0UsRUFBYy9FLFNBQ3JCLE1BQU0sSUFBSUQsTUFBTTtNQUVwQixJQUFJSCxhQUFpQm9ELEVBQVV0QyxrQkFDM0IsT0FBT2QsRUFBTXNCO01BRWpCLE1BQU1DLElBQWE7TUFDbkIsSUFBSXZCLEtBQ2lCLG1CQUFWQSxNQUNOVSxNQUFNa0QsUUFBUTVELE1BQ2YwRSxFQUFPMUUsR0FBTyxXQUNkb0UsRUFBWXBFLEVBQU1pQixPQUFPO1FBQ3pCLE1BQU1zRSxJQUFTdkY7UUFDZnVCLEVBQVdOLE9BQU9zRSxFQUFPdEUsTUFDckJzRSxFQUFPbkYsV0FBcUMsbUJBQW5CbUYsRUFBT25GLFdBQ2hDbUIsRUFBV25CLFVBQVVtRixFQUFPbkYsU0FDeEJzRSxFQUFPYSxHQUFRLFlBQ2ZoRSxFQUFXTCxPQUFPcUUsRUFBT3JFLFVBSTdCSyxFQUFXbkIsVUFBVXNELEVBQW1CbkMsRUFBV047UUFDbkRNLEVBQVdMLE9BQU87VUFBRXNFLGVBQWVaLEVBQW9CNUU7O2FBRzFEO1FBQ0R1QixFQUFXTixPQUFPa0UsRUFBY2xFO1FBQ2hDLE1BQU1iLElBQTJCLFVBQWhCaUYsSUFBS3JGLFdBQTBCLE1BQVBxRixTQUFnQixJQUFTQSxFQUFHakY7UUFDckVtQixFQUFXbkIsVUFBV0EsS0FBOEIsbUJBQVpBLElBQ2xDQSxJQUNBK0UsRUFBYy9FLFNBQ3BCbUIsRUFBV0wsT0FBTztVQUFFc0UsZUFBZVosRUFBb0I1RTs7O01BRTNELE1BQU13QixJQUF5QixVQUFoQjhELElBQUt0RixXQUEwQixNQUFQc0YsU0FBZ0IsSUFBU0EsRUFBRzlEO01BSW5FLE9BSEk0RCxLQUFzQnBGLEtBQVN3QixLQUEwQixtQkFBVkEsTUFDL0NELEVBQVdDLFFBQVFBLElBRWhCRDs7OztJQzlGWGtFLEVBQU83RyxVQUFVOEcsR0FDakJBLEVBQVVoRSxVQUFVZ0UsR0FDcEJBLEVBQVVDLFNBQVNDLEdBQ25CRixFQUFVRyxrQkFBa0JEO0lBRTVCLElBQUlFLElBQXFCO0lBQ3pCLElBQUlDLElBQXdCO0lBRTVCLElBQUl4RixJQUFNO0lBQ1YsSUFBSXlGLElBQWdCO0lBRXBCLFNBQVNDO01BQ1AsT0FBTztRQUNMQyxZQUFZL0UsT0FBT2dGO1FBQ25CQyxZQUFZakYsT0FBT2dGOzs7SUFLdkIsU0FBU1QsRUFBV1osR0FBS3VCLEdBQVVDLEdBQVFDO01BTXpDLElBQUlDO1dBTG1CLE1BQVpELE1BQ1RBLElBQVVOLE1BR1pRLEVBQU8zQixHQUFLLElBQUksR0FBRyxTQUFJL0UsR0FBVyxHQUFHd0c7TUFFckM7UUFFSUMsSUFEMkIsTUFBekJSLEVBQWM5RixTQUNWd0csS0FBS2hCLFVBQVVaLEdBQUt1QixHQUFVQyxLQUU5QkksS0FBS2hCLFVBQVVaLEdBQUs2QixFQUFvQk4sSUFBV0M7UUFFM0QsT0FBTzFFO1FBQ1AsT0FBTzhFLEtBQUtoQixVQUFVO1FBQ3RCO1FBQ0EsTUFBc0IsTUFBZm5GLEVBQUlMLFVBQWM7VUFDdkIsSUFBSTBHLElBQU9yRyxFQUFJc0c7VUFDSyxNQUFoQkQsRUFBSzFHLFNBQ1B4QixPQUFPQyxlQUFlaUksRUFBSyxJQUFJQSxFQUFLLElBQUlBLEVBQUssTUFFN0NBLEVBQUssR0FBR0EsRUFBSyxNQUFNQSxFQUFLOzs7TUFJOUIsT0FBT0o7O0lBR1QsU0FBU00sRUFBWUMsR0FBU0MsR0FBS0MsR0FBR0M7TUFDcEMsSUFBSUMsSUFBcUJ6SSxPQUFPMEkseUJBQXlCRixHQUFRRDtXQUNsQ2xILE1BQTNCb0gsRUFBbUJqRCxNQUNqQmlELEVBQW1CRSxnQkFDckIzSSxPQUFPQyxlQUFldUksR0FBUUQsR0FBRztRQUFFcEksT0FBT2tJO1VBQzFDeEcsRUFBSStHLEtBQUssRUFBQ0osR0FBUUQsR0FBR0QsR0FBS0csUUFFMUJuQixFQUFjc0IsS0FBSyxFQUFDTixHQUFLQyxHQUFHRixRQUc5QkcsRUFBT0QsS0FBS0YsR0FDWnhHLEVBQUkrRyxLQUFLLEVBQUNKLEdBQVFELEdBQUdEOztJQUl6QixTQUFTUCxFQUFRTyxHQUFLQyxHQUFHTSxHQUFXL0YsR0FBTzBGLEdBQVFNLEdBQU9qQjtNQUV4RCxJQUFJNUY7TUFDSixJQUZBNkcsS0FBUyxHQUVVLG1CQUFSUixLQUE0QixTQUFSQSxHQUFjO1FBQzNDLEtBQUtyRyxJQUFJLEdBQUdBLElBQUlhLEVBQU10QixRQUFRUyxLQUM1QixJQUFJYSxFQUFNYixPQUFPcUcsR0FFZixZQURBRixFQUFXZixHQUF1QmlCLEdBQUtDLEdBQUdDO1FBSzlDLFNBQ2dDLE1BQXZCWCxFQUFRTCxjQUNmc0IsSUFBUWpCLEVBQVFMLFlBR2hCLFlBREFZLEVBQVdoQixHQUFvQmtCLEdBQUtDLEdBQUdDO1FBSXpDLFNBQ2dDLE1BQXZCWCxFQUFRSCxjQUNmbUIsSUFBWSxJQUFJaEIsRUFBUUgsWUFHeEIsWUFEQVUsRUFBV2hCLEdBQW9Ca0IsR0FBS0MsR0FBR0M7UUFNekMsSUFGQTFGLEVBQU04RixLQUFLTixJQUVQdEcsTUFBTWtELFFBQVFvRCxJQUNoQixLQUFLckcsSUFBSSxHQUFHQSxJQUFJcUcsRUFBSTlHLFFBQVFTLEtBQzFCOEYsRUFBT08sRUFBSXJHLElBQUlBLEdBQUdBLEdBQUdhLEdBQU93RixHQUFLUSxHQUFPakIsU0FFckM7VUFDTCxJQUFJa0IsSUFBTy9JLE9BQU8rSSxLQUFLVDtVQUN2QixLQUFLckcsSUFBSSxHQUFHQSxJQUFJOEcsRUFBS3ZILFFBQVFTLEtBQUs7WUFDaEMsSUFBSW9FLElBQU0wQyxFQUFLOUc7WUFDZjhGLEVBQU9PLEVBQUlqQyxJQUFNQSxHQUFLcEUsR0FBR2EsR0FBT3dGLEdBQUtRLEdBQU9qQjs7O1FBR2hEL0UsRUFBTXFGOzs7SUFLVixTQUFTYSxFQUFpQkMsR0FBR0M7TUFDM0IsT0FBSUQsSUFBSUMsS0FDRSxJQUVORCxJQUFJQyxJQUNDLElBRUY7O0lBR1QsU0FBU2hDLEVBQXdCZCxHQUFLdUIsR0FBVUMsR0FBUUM7V0FDL0IsTUFBWkEsTUFDVEEsSUFBVU47TUFHWixJQUFJNEIsSUFBTUMsRUFBb0JoRCxHQUFLLElBQUksR0FBRyxTQUFJL0UsR0FBVyxHQUFHd0csTUFBWXpCO01BQ3hFLElBQUkwQjtNQUNKO1FBRUlBLElBRDJCLE1BQXpCUixFQUFjOUYsU0FDVndHLEtBQUtoQixVQUFVbUMsR0FBS3hCLEdBQVVDLEtBRTlCSSxLQUFLaEIsVUFBVW1DLEdBQUtsQixFQUFvQk4sSUFBV0M7UUFFM0QsT0FBTzFFO1FBQ1AsT0FBTzhFLEtBQUtoQixVQUFVO1FBQ3RCO1FBRUEsTUFBc0IsTUFBZm5GLEVBQUlMLFVBQWM7VUFDdkIsSUFBSTBHLElBQU9yRyxFQUFJc0c7VUFDSyxNQUFoQkQsRUFBSzFHLFNBQ1B4QixPQUFPQyxlQUFlaUksRUFBSyxJQUFJQSxFQUFLLElBQUlBLEVBQUssTUFFN0NBLEVBQUssR0FBR0EsRUFBSyxNQUFNQSxFQUFLOzs7TUFJOUIsT0FBT0o7O0lBR1QsU0FBU3NCLEVBQXFCZCxHQUFLQyxHQUFHTSxHQUFXL0YsR0FBTzBGLEdBQVFNLEdBQU9qQjtNQUVyRSxJQUFJNUY7TUFDSixJQUZBNkcsS0FBUyxHQUVVLG1CQUFSUixLQUE0QixTQUFSQSxHQUFjO1FBQzNDLEtBQUtyRyxJQUFJLEdBQUdBLElBQUlhLEVBQU10QixRQUFRUyxLQUM1QixJQUFJYSxFQUFNYixPQUFPcUcsR0FFZixZQURBRixFQUFXZixHQUF1QmlCLEdBQUtDLEdBQUdDO1FBSTlDO1VBQ0UsSUFBMEIscUJBQWZGLEVBQUllLFFBQ2I7VUFFRixPQUFPbkc7VUFDUDs7UUFHRixTQUNnQyxNQUF2QjJFLEVBQVFMLGNBQ2ZzQixJQUFRakIsRUFBUUwsWUFHaEIsWUFEQVksRUFBV2hCLEdBQW9Ca0IsR0FBS0MsR0FBR0M7UUFJekMsU0FDZ0MsTUFBdkJYLEVBQVFILGNBQ2ZtQixJQUFZLElBQUloQixFQUFRSCxZQUd4QixZQURBVSxFQUFXaEIsR0FBb0JrQixHQUFLQyxHQUFHQztRQU16QyxJQUZBMUYsRUFBTThGLEtBQUtOLElBRVB0RyxNQUFNa0QsUUFBUW9ELElBQ2hCLEtBQUtyRyxJQUFJLEdBQUdBLElBQUlxRyxFQUFJOUcsUUFBUVMsS0FDMUJtSCxFQUFvQmQsRUFBSXJHLElBQUlBLEdBQUdBLEdBQUdhLEdBQU93RixHQUFLUSxHQUFPakIsU0FFbEQ7VUFFTCxJQUFJc0IsSUFBTTtVQUNWLElBQUlKLElBQU8vSSxPQUFPK0ksS0FBS1QsR0FBS2dCLEtBQUtOO1VBQ2pDLEtBQUsvRyxJQUFJLEdBQUdBLElBQUk4RyxFQUFLdkgsUUFBUVMsS0FBSztZQUNoQyxJQUFJb0UsSUFBTTBDLEVBQUs5RztZQUNmbUgsRUFBb0JkLEVBQUlqQyxJQUFNQSxHQUFLcEUsR0FBR2EsR0FBT3dGLEdBQUtRLEdBQU9qQixJQUN6RHNCLEVBQUk5QyxLQUFPaUMsRUFBSWpDOztVQUVqQixTQUFzQixNQUFYbUMsR0FJVCxPQUFPVztVQUhQdEgsRUFBSStHLEtBQUssRUFBQ0osR0FBUUQsR0FBR0QsTUFDckJFLEVBQU9ELEtBQUtZOztRQUtoQnJHLEVBQU1xRjs7O0lBTVYsU0FBU0YsRUFBcUJOO01BTzVCLE9BTkFBLFNBQ3NCLE1BQWJBLElBQ0hBLElBQ0EsU0FBVVksR0FBR2dCO1FBQ2IsT0FBT0E7U0FFTixTQUFVbEQsR0FBS2lDO1FBQ3BCLElBQUloQixFQUFjOUYsU0FBUyxHQUN6QixLQUFLLElBQUlTLElBQUksR0FBR0EsSUFBSXFGLEVBQWM5RixRQUFRUyxLQUFLO1VBQzdDLElBQUlpRyxJQUFPWixFQUFjckY7VUFDekIsSUFBSWlHLEVBQUssT0FBTzdCLEtBQU82QixFQUFLLE9BQU9JLEdBQUs7WUFDdENBLElBQU1KLEVBQUssSUFDWFosRUFBY2tDLE9BQU92SCxHQUFHO1lBQ3hCOzs7UUFJTixPQUFPMEYsRUFBU25CLEtBQUtyRixNQUFNa0YsR0FBS2lDOzs7OztJQ2xPcEMsSUFBSW1CLElBQXVCLHNCQUFUekIsT0FBdUJBLE9BQU8sRUFBUTtJQUV4RGpCLEVBQU83RyxVQUFVLFNBQVVrRyxHQUFLaEI7TUFDdkJBLE1BQU1BLElBQU8sS0FDRSxxQkFBVEEsTUFBcUJBLElBQU87UUFBRXNFLEtBQUt0RTs7TUFDOUMsSUFBSXVFLElBQVF2RSxFQUFLdUUsU0FBUztNQUNMLG1CQUFWQSxNQUFvQkEsSUFBUTNILE1BQU0ySCxJQUFNLEdBQUdDLEtBQUs7TUFDM0QsSUFBSUMsSUFBaUMsb0JBQWhCekUsRUFBS3lFLFVBQXdCekUsRUFBS3lFO01BQ3ZELElBQUlsQyxJQUFXdkMsRUFBS3VDLFlBQVksU0FBU3RCLEdBQUtsRztRQUFTLE9BQU9BOztNQUU5RCxJQUFJdUosSUFBTXRFLEVBQUtzRSxPQUFPLFNBQVdJO1FBQzdCLE9BQU8sU0FBVUM7VUFDYixPQUFPLFNBQVVkLEdBQUdDO1lBQ2hCLElBQUljLElBQU87Y0FBRTNELEtBQUs0QztjQUFHOUksT0FBTzRKLEVBQUtkOztZQUNqQyxJQUFJZ0IsSUFBTztjQUFFNUQsS0FBSzZDO2NBQUcvSSxPQUFPNEosRUFBS2I7O1lBQ2pDLE9BQU9ZLEVBQUVFLEdBQU1DOzs7T0FMTCxDQVFuQjdFLEVBQUtzRTtNQUVSLElBQUlRLElBQU87TUFDWCxPQUFPLFNBQVVsRCxFQUFXd0IsR0FBUW5DLEdBQUswRCxHQUFNSTtRQUMzQyxJQUFJQyxJQUFTVCxJQUFTLE9BQU8sSUFBSTNILE1BQU1tSSxJQUFRLEdBQUdQLEtBQUtELEtBQVU7UUFDakUsSUFBSVUsSUFBaUJWLElBQVEsT0FBTztRQVFwQyxJQU5JSSxLQUFRQSxFQUFLVixVQUFpQyxxQkFBaEJVLEVBQUtWLFdBQ25DVSxJQUFPQSxFQUFLVixnQkFLSGhJLE9BRmIwSSxJQUFPcEMsRUFBU25CLEtBQUtnQyxHQUFRbkMsR0FBSzBELEtBRWxDO1VBR0EsSUFBb0IsbUJBQVRBLEtBQThCLFNBQVRBLEdBQzVCLE9BQU9OLEVBQUt6QyxVQUFVK0M7VUFFMUIsSUFBSTdFLEVBQVE2RSxJQUFPO1lBQ2YsSUFBSU8sSUFBTTtZQUNWLEtBQUssSUFBSXJJLElBQUksR0FBR0EsSUFBSThILEVBQUt2SSxRQUFRUyxLQUFLO2NBQ2xDLElBQUlzSSxJQUFPdkQsRUFBVStDLEdBQU05SCxHQUFHOEgsRUFBSzlILElBQUlrSSxJQUFNLE1BQU1WLEVBQUt6QyxVQUFVO2NBQ2xFc0QsRUFBSTFCLEtBQUt3QixJQUFTVCxJQUFRWTs7WUFFOUIsT0FBTyxNQUFNRCxFQUFJVixLQUFLLE9BQU9RLElBQVM7O1VBR3RDLEtBQTRCLE1BQXhCRixFQUFLTSxRQUFRVCxJQUFjO1lBQzNCLElBQUlGLEdBQVEsT0FBT0osRUFBS3pDLFVBQVU7WUFDbEMsTUFBTSxJQUFJeUQsVUFBVTs7VUFFbkJQLEVBQUt0QixLQUFLbUI7VUFFZixJQUFJaEIsSUFBTzJCLEVBQVdYLEdBQU1ULEtBQUtJLEtBQU9BLEVBQUlLO1VBQ3hDTyxJQUFNO1VBQ1YsS0FBU3JJLElBQUksR0FBR0EsSUFBSThHLEVBQUt2SCxRQUFRUyxLQUFLO1lBRWxDLElBQUk5QixJQUFRNkcsRUFBVStDLEdBRGxCMUQsSUFBTTBDLEVBQUs5RyxJQUNrQjhILEVBQUsxRCxJQUFNOEQsSUFBTTtZQUVsRCxJQUFJaEssR0FBSjtjQUVBLElBQUl3SyxJQUFXbEIsRUFBS3pDLFVBQVVYLEtBQ3hCZ0UsSUFDQWxLO2NBRU5tSyxFQUFJMUIsS0FBS3dCLElBQVNULElBQVFnQjs7O1VBRzlCLE9BREFULEVBQUtWLE9BQU9VLEVBQUtNLFFBQVFULElBQU8sSUFDekIsTUFBTU8sRUFBSVYsS0FBSyxPQUFPUSxJQUFTOztPQTlDdkMsQ0FnREo7UUFBRSxJQUFJaEU7U0FBTyxJQUFJQSxHQUFLOztJQUc3QixJQUFJbEIsSUFBVWxELE1BQU1rRCxXQUFXLFNBQVUwRjtNQUNyQyxPQUErQixxQkFBeEIsR0FBRzdILFNBQVN5RCxLQUFLb0U7O0lBRzVCLElBQUlGLElBQWExSyxPQUFPK0ksUUFBUSxTQUFVM0M7TUFDdEMsSUFBSXlFLElBQU03SyxPQUFPc0csVUFBVUMsa0JBQWtCO1FBQWMsUUFBTzs7TUFDbEUsSUFBSXdDLElBQU87TUFDWCxLQUFLLElBQUkxQyxLQUFPRCxHQUNSeUUsRUFBSXJFLEtBQUtKLEdBQUtDLE1BQU0wQyxFQUFLSCxLQUFLdkM7TUFFdEMsT0FBTzBDOzs7O0lDbEZYN0ksRUFBUTJELFFBQVEsRUFBaEIsUUFDQTNELEVBQVE4RyxZQUFZLEVBQXBCOzs7SUNEQSxJQUFJOEQsR0FDQUMsR0FXQUMsR0E0SUE3SyxHQXRKQThLLElBQVU7TUFDTixLQUFNO01BQ04sTUFBTTtNQUNOLEtBQU07TUFDTi9CLEdBQU07TUFDTlksR0FBTTtNQUNOaEksR0FBTTtNQUNOb0osR0FBTTtNQUNOQyxHQUFNO09BSVY3SixJQUFRLFNBQVU4SjtNQUVkLE1BQU07UUFDRkMsTUFBUztRQUNUM0osU0FBUzBKO1FBQ1ROLElBQVNBO1FBQ1RFLE1BQVNBOztPQUlqQk0sSUFBTyxTQUFVQztNQVdiLE9BVElBLEtBQUtBLE1BQU1SLEtBQ1h6SixFQUFNLGVBQWVpSyxJQUFJLG1CQUFtQlIsSUFBSyxNQU1yREEsSUFBS0MsRUFBS1EsT0FBT1YsSUFDakJBLEtBQU0sR0FDQ0M7T0FHWFUsSUFBUztNQUVMLElBQUlBLEdBQ0FDLElBQVM7TUFNYixLQUpXLFFBQVBYLE1BQ0FXLElBQVMsS0FDVEosRUFBSyxPQUVGUCxLQUFNLE9BQU9BLEtBQU0sT0FDdEJXLEtBQVVYLEdBQ1ZPO01BRUosSUFBVyxRQUFQUCxHQUVBLEtBREFXLEtBQVUsS0FDSEosT0FBVVAsS0FBTSxPQUFPQSxLQUFNLE9BQ2hDVyxLQUFVWDtNQUdsQixJQUFXLFFBQVBBLEtBQXFCLFFBQVBBLEdBT2QsS0FOQVcsS0FBVVgsR0FDVk8sS0FDVyxRQUFQUCxLQUFxQixRQUFQQSxNQUNkVyxLQUFVWCxHQUNWTyxNQUVHUCxLQUFNLE9BQU9BLEtBQU0sT0FDdEJXLEtBQVVYLEdBQ1ZPO01BSVIsSUFEQUcsS0FBVUMsR0FDTEMsU0FBU0YsSUFHVixPQUFPQTtNQUZQbkssRUFBTTtPQU1kb0ssSUFBUztNQUVMLElBQUlFLEdBQ0EzSixHQUVBNEosR0FEQUgsSUFBUztNQUliLElBQVcsUUFBUFgsR0FDQSxNQUFPTyxPQUFRO1FBQ1gsSUFBVyxRQUFQUCxHQUVBLE9BREFPLEtBQ09JO1FBQ0osSUFBVyxTQUFQWCxHQUVQLElBREFPLEtBQ1csUUFBUFAsR0FBWTtVQUVaLEtBREFjLElBQVEsR0FDSDVKLElBQUksR0FBR0EsSUFBSSxNQUNaMkosSUFBTUUsU0FBU1IsS0FBUSxLQUNsQkssU0FBU0MsS0FGQzNKLEtBQUssR0FLcEI0SixJQUFnQixLQUFSQSxJQUFhRDtVQUV6QkYsS0FBVUssT0FBT0MsYUFBYUg7ZUFDM0I7VUFBQSxJQUEyQixtQkFBaEJaLEVBQVFGLElBR3RCO1VBRkFXLEtBQVVULEVBQVFGO2VBS3RCVyxLQUFVWDs7TUFJdEJ6SixFQUFNO09BR1YySyxJQUFRO01BSUosTUFBT2xCLEtBQU1BLEtBQU0sT0FDZk87O0lBK0ZabkwsSUFBUTtNQU1KLFFBREE4TCxLQUNRbEI7T0FDUixLQUFLO1FBQ0QsT0ExQ0s7VUFJTCxJQUFJMUUsR0FDQTZGLElBQVM7VUFFYixJQUFXLFFBQVBuQixHQUFZO1lBR1osSUFGQU8sRUFBSyxNQUNMVyxLQUNXLFFBQVBsQixHQUVBLE9BREFPLEVBQUssTUFDRVk7WUFFWCxNQUFPbkIsS0FBSTtjQVNQLElBUkExRSxJQUFNcUYsS0FDTk8sS0FDQVgsRUFBSyxNQUNEdEwsT0FBT3VHLGVBQWVDLEtBQUswRixHQUFRN0YsTUFDbkMvRSxFQUFNLG9CQUFvQitFLElBQU0sTUFFcEM2RixFQUFPN0YsS0FBT2xHLEtBQ2Q4TCxLQUNXLFFBQVBsQixHQUVBLE9BREFPLEVBQUs7Y0FDRVk7Y0FFWFosRUFBSyxNQUNMVzs7O1VBR1IzSyxFQUFNO1NBV0M0Szs7T0FDWCxLQUFLO1FBQ0QsT0F2RUk7VUFJSixJQUFJQyxJQUFRO1VBRVosSUFBVyxRQUFQcEIsR0FBWTtZQUdaLElBRkFPLEVBQUssTUFDTFcsS0FDVyxRQUFQbEIsR0FFQSxPQURBTyxFQUFLLE1BQ0VhO1lBRVgsTUFBT3BCLEtBQUk7Y0FHUCxJQUZBb0IsRUFBTXZELEtBQUt6SSxNQUNYOEwsS0FDVyxRQUFQbEIsR0FFQSxPQURBTyxFQUFLLE1BQ0VhO2NBRVhiLEVBQUssTUFDTFc7OztVQUdSM0ssRUFBTTtTQStDQzZLOztPQUNYLEtBQUs7UUFDRCxPQUFPVDs7T0FDWCxLQUFLO1FBQ0QsT0FBT0Q7O09BQ1g7UUFDSSxPQUFPVixLQUFNLE9BQU9BLEtBQU0sTUFBTVUsTUEzRzdCO1VBSUgsUUFBUVY7V0FDUixLQUFLO1lBS0QsT0FKQU8sRUFBSyxNQUNMQSxFQUFLLE1BQ0xBLEVBQUssTUFDTEEsRUFBSyxPQUNFOztXQUNYLEtBQUs7WUFNRCxPQUxBQSxFQUFLLE1BQ0xBLEVBQUssTUFDTEEsRUFBSyxNQUNMQSxFQUFLLE1BQ0xBLEVBQUssT0FDRTs7V0FDWCxLQUFLO1lBS0QsT0FKQUEsRUFBSyxNQUNMQSxFQUFLLE1BQ0xBLEVBQUssTUFDTEEsRUFBSyxNQUNFOztVQUVYaEssRUFBTSxpQkFBaUJ5SixJQUFLO1NBa0ZlcUI7O09BT25EckYsRUFBTzdHLFVBQVUsU0FBVW1NLEdBQVFDO01BQy9CLElBQUlDO01BaUJKLE9BZkF2QixJQUFPcUIsR0FDUHZCLElBQUssR0FDTEMsSUFBSyxLQUNMd0IsSUFBU3BNLEtBQ1Q4TCxLQUNJbEIsS0FDQXpKLEVBQU0saUJBU2dCLHFCQUFaZ0wsSUFBMEIsU0FBU0UsRUFBS0MsR0FBUXBHO1FBQzFELElBQUlrQyxHQUFHZ0IsR0FBR3BKLElBQVFzTSxFQUFPcEc7UUFDekIsSUFBSWxHLEtBQTBCLG1CQUFWQSxHQUNoQixLQUFLb0ksS0FBS3BJLEdBQ0ZILE9BQU9zRyxVQUFVQyxlQUFlQyxLQUFLckcsR0FBT29JLFlBRWxDbEgsT0FEVmtJLElBQUlpRCxFQUFLck0sR0FBT29JLE1BRVpwSSxFQUFNb0ksS0FBS2dCLFdBRUpwSixFQUFNb0k7UUFLN0IsT0FBTytELEVBQVE5RixLQUFLaUcsR0FBUXBHLEdBQUtsRztPQWRFLENBZXJDO1FBQUMsSUFBSW9NO1NBQVMsTUFBT0E7Ozs7SUMvUTNCLElBRUlHLEdBQ0F0QyxHQVVBdUMsR0FaQUMsSUFBWSw0SEFHWkMsSUFBTztNQUNILE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sS0FBTTtNQUNOLE1BQU07O0lBSWQsU0FBU0MsRUFBTXBCO01BT1gsT0FEQWtCLEVBQVVHLFlBQVksR0FDZkgsRUFBVUksS0FBS3RCLEtBQVUsTUFBTUEsRUFBT3JELFFBQVF1RSxJQUFXLFNBQVUzRDtRQUN0RSxJQUFJc0MsSUFBSXNCLEVBQUs1RDtRQUNiLE9BQW9CLG1CQUFOc0MsSUFBaUJBLElBQzNCLFNBQVMsU0FBU3RDLEVBQUVnRSxXQUFXLEdBQUdsSyxTQUFTLEtBQUttSyxPQUFPO1lBQzFELE1BQU0sTUFBTXhCLElBQVM7O0lBRzlCLFNBQVN5QixFQUFJOUcsR0FBS29HO01BRWQsSUFBSXhLLEdBQ0FzRyxHQUNBZ0IsR0FDQS9ILEdBRUE0TCxHQURBQyxJQUFPWCxHQUVQdk0sSUFBUXNNLEVBQU9wRztNQWVuQixRQVpJbEcsS0FBMEIsbUJBQVZBLEtBQ1kscUJBQWpCQSxFQUFNa0osV0FDakJsSixJQUFRQSxFQUFNa0osT0FBT2hELEtBS04scUJBQVJzRyxNQUNQeE0sSUFBUXdNLEVBQUluRyxLQUFLaUcsR0FBUXBHLEdBQUtsRzthQUluQkE7T0FDWCxLQUFLO1FBQ0QsT0FBTzJNLEVBQU0zTTs7T0FFakIsS0FBSztRQUVELE9BQU93TCxTQUFTeEwsS0FBUzRMLE9BQU81TCxLQUFTOztPQUU3QyxLQUFLO09BQ0wsS0FBSztRQUlELE9BQU80TCxPQUFPNUw7O09BRWxCLEtBQUs7UUFDRCxLQUFLQSxHQUFPLE9BQU87UUFLbkIsSUFKQXVNLEtBQU90QyxHQUNQZ0QsSUFBVSxJQUdxQyxxQkFBM0NwTixPQUFPc0csVUFBVXZELFNBQVNyQyxNQUFNUCxJQUE2QjtVQUU3RCxLQURBcUIsSUFBU3JCLEVBQU1xQixRQUNWUyxJQUFJLEdBQUdBLElBQUlULEdBQVFTLEtBQUssR0FDekJtTCxFQUFRbkwsS0FBS2tMLEVBQUlsTCxHQUFHOUIsTUFBVTtVQVNsQyxPQUpBb0osSUFBdUIsTUFBbkI2RCxFQUFRNUwsU0FBZSxPQUFPa0wsSUFDOUIsUUFBUUEsSUFBTVUsRUFBUXhELEtBQUssUUFBUThDLEtBQU8sT0FBT1csSUFBTyxNQUN4RCxNQUFNRCxFQUFReEQsS0FBSyxPQUFPLEtBQzlCOEMsSUFBTVc7VUFDQzlEOztRQUtYLElBQUlvRCxLQUFzQixtQkFBUkEsR0FFZCxLQURBbkwsSUFBU21MLEVBQUluTCxRQUNSUyxJQUFJLEdBQUdBLElBQUlULEdBQVFTLEtBQUssR0FFUixvQkFEakJzRyxJQUFJb0UsRUFBSTFLLFFBRUpzSCxJQUFJNEQsRUFBSTVFLEdBQUdwSSxPQUVQaU4sRUFBUXhFLEtBQUtrRSxFQUFNdkUsTUFBTW1FLElBQU0sT0FBTyxPQUFPbkQsU0FPekQsS0FBS2hCLEtBQUtwSSxHQUNGSCxPQUFPc0csVUFBVUMsZUFBZUMsS0FBS3JHLEdBQU9vSSxPQUM1Q2dCLElBQUk0RCxFQUFJNUUsR0FBR3BJLE9BRVBpTixFQUFReEUsS0FBS2tFLEVBQU12RSxNQUFNbUUsSUFBTSxPQUFPLE9BQU9uRDtRQWFqRSxPQUpBQSxJQUF1QixNQUFuQjZELEVBQVE1TCxTQUFlLE9BQU9rTCxJQUM5QixRQUFRQSxJQUFNVSxFQUFReEQsS0FBSyxRQUFROEMsS0FBTyxPQUFPVyxJQUFPLE1BQ3hELE1BQU1ELEVBQVF4RCxLQUFLLE9BQU8sS0FDOUI4QyxJQUFNVztRQUNDOUQ7OztJQUlmeEMsRUFBTzdHLFVBQVUsU0FBVUMsR0FBT3dILEdBQVVnQztNQUN4QyxJQUFJMUg7TUFNSixJQUxBeUssSUFBTSxJQUNOdEMsSUFBUyxJQUlZLG1CQUFWVCxHQUNQLEtBQUsxSCxJQUFJLEdBQUdBLElBQUkwSCxHQUFPMUgsS0FBSyxHQUN4Qm1JLEtBQVUsVUFJUSxtQkFBVlQsTUFDWlMsSUFBU1Q7TUFNYixJQURBZ0QsSUFBTWhGLEdBQ0ZBLEtBQWdDLHFCQUFiQSxNQUNDLG1CQUFiQSxLQUFvRCxtQkFBcEJBLEVBQVNuRyxTQUNoRCxNQUFNLElBQUlDLE1BQU07TUFLcEIsT0FBTzBMLEVBQUksSUFBSTtRQUFDLElBQUloTiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9zYWZlLWV2ZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZXRoLXJwYy1lcnJvcnMvZGlzdC9jbGFzc2VzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2V0aC1ycGMtZXJyb3JzL2Rpc3QvZXJyb3ItY29uc3RhbnRzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2V0aC1ycGMtZXJyb3JzL2Rpc3QvZXJyb3JzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2V0aC1ycGMtZXJyb3JzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZXRoLXJwYy1lcnJvcnMvZGlzdC91dGlscy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9mYXN0LXNhZmUtc3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2pzb24tc3RhYmxlLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9qc29uaWZ5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2pzb25pZnkvbGliL3BhcnNlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2pzb25pZnkvbGliL3N0cmluZ2lmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbmZ1bmN0aW9uIHNhZmVBcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgUmVmbGVjdC5hcHBseShoYW5kbGVyLCBjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBUaHJvdyBlcnJvciBhZnRlciB0aW1lb3V0IHNvIGFzIG5vdCB0byBpbnRlcnJ1cHQgdGhlIHN0YWNrXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcnJheUNsb25lKGFycikge1xuICAgIGNvbnN0IG4gPSBhcnIubGVuZ3RoO1xuICAgIGNvbnN0IGNvcHkgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICAgICAgY29weVtpXSA9IGFycltpXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG59XG5jbGFzcyBTYWZlRXZlbnRFbWl0dGVyIGV4dGVuZHMgZXZlbnRzXzEuRXZlbnRFbWl0dGVyIHtcbiAgICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IGRvRXJyb3IgPSB0eXBlID09PSAnZXJyb3InO1xuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICAgIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZG9FcnJvciA9IGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWRvRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gICAgICAgIGlmIChkb0Vycm9yKSB7XG4gICAgICAgICAgICBsZXQgZXI7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgW2VyXSA9IGFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgICAgICAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICAgICAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYFVuaGFuZGxlZCBlcnJvci4ke2VyID8gYCAoJHtlci5tZXNzYWdlfSlgIDogJyd9YCk7XG4gICAgICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICAgICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNhZmVBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBzYWZlQXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTYWZlRXZlbnRFbWl0dGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV0aGVyZXVtUHJvdmlkZXJFcnJvciA9IGV4cG9ydHMuRXRoZXJldW1ScGNFcnJvciA9IHZvaWQgMDtcbmNvbnN0IGZhc3Rfc2FmZV9zdHJpbmdpZnlfMSA9IHJlcXVpcmUoXCJmYXN0LXNhZmUtc3RyaW5naWZ5XCIpO1xuLyoqXG4gKiBFcnJvciBzdWJjbGFzcyBpbXBsZW1lbnRpbmcgSlNPTiBSUEMgMi4wIGVycm9ycyBhbmQgRXRoZXJldW0gUlBDIGVycm9yc1xuICogcGVyIEVJUC0xNDc0LlxuICogUGVybWl0cyBhbnkgaW50ZWdlciBlcnJvciBjb2RlLlxuICovXG5jbGFzcyBFdGhlcmV1bVJwY0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lc3NhZ2UgfHwgdHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wibWVzc2FnZVwiIG11c3QgYmUgYSBub25lbXB0eSBzdHJpbmcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHBsYWluIG9iamVjdCB3aXRoIGFsbCBwdWJsaWMgY2xhc3MgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB7XG4gICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VyaWFsaXplZC5kYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YWNrKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkLnN0YWNrID0gdGhpcy5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZXJpYWxpemVkIGVycm9yLCBvbWl0dGluZ1xuICAgICAqIGFueSBjaXJjdWxhciByZWZlcmVuY2VzLlxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gZmFzdF9zYWZlX3N0cmluZ2lmeV8xLmRlZmF1bHQodGhpcy5zZXJpYWxpemUoKSwgc3RyaW5naWZ5UmVwbGFjZXIsIDIpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXRoZXJldW1ScGNFcnJvciA9IEV0aGVyZXVtUnBjRXJyb3I7XG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBFdGhlcmV1bSBQcm92aWRlciBlcnJvcnMgcGVyIEVJUC0xMTkzLlxuICogUGVybWl0cyBpbnRlZ2VyIGVycm9yIGNvZGVzIGluIHRoZSBbIDEwMDAgPD0gNDk5OSBdIHJhbmdlLlxuICovXG5jbGFzcyBFdGhlcmV1bVByb3ZpZGVyRXJyb3IgZXh0ZW5kcyBFdGhlcmV1bVJwY0Vycm9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gRXRoZXJldW0gUHJvdmlkZXIgSlNPTi1SUEMgZXJyb3IuXG4gICAgICogYGNvZGVgIG11c3QgYmUgYW4gaW50ZWdlciBpbiB0aGUgMTAwMCA8PSA0OTk5IHJhbmdlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRXRoUHJvdmlkZXJDb2RlKGNvZGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlciBzdWNoIHRoYXQ6IDEwMDAgPD0gY29kZSA8PSA0OTk5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoY29kZSwgbWVzc2FnZSwgZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0cy5FdGhlcmV1bVByb3ZpZGVyRXJyb3IgPSBFdGhlcmV1bVByb3ZpZGVyRXJyb3I7XG4vLyBJbnRlcm5hbFxuZnVuY3Rpb24gaXNWYWxpZEV0aFByb3ZpZGVyQ29kZShjb2RlKSB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoY29kZSkgJiYgY29kZSA+PSAxMDAwICYmIGNvZGUgPD0gNDk5OTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVJlcGxhY2VyKF8sIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAnW0NpcmN1bGFyXScpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJ4aGMzTmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5amJHRnpjMlZ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTERaRVFVRm5SRHRCUVZOb1JEczdPenRIUVVsSE8wRkJRMGdzVFVGQllTeG5Ra0ZCYjBJc1UwRkJVU3hMUVVGTE8wbEJUVFZETEZsQlFWa3NTVUZCV1N4RlFVRkZMRTlCUVdVc1JVRkJSU3hKUVVGUk8xRkJSV3BFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6TkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRMklzTkVKQlFUUkNMRU5CUXpkQ0xFTkJRVU03VTBGRFNEdFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlF6TkRMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRMklzYzBOQlFYTkRMRU5CUTNaRExFTkJRVU03VTBGRFNEdFJRVVZFTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVObUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjBRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTnNRanRKUVVOSUxFTkJRVU03U1VGRlJEczdUMEZGUnp0SlFVTklMRk5CUVZNN1VVRkRVQ3hOUVVGTkxGVkJRVlVzUjBGQkswSTdXVUZETjBNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTzFsQlEyWXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUE8xTkJRM1JDTEVOQlFVTTdVVUZEUml4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlF6TkNMRlZCUVZVc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTTNRanRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTmtMRlZCUVZVc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTXZRanRSUVVORUxFOUJRVThzVlVGQlZTeERRVUZETzBsQlEzQkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4UlFVRlJPMUZCUTA0c1QwRkJUeXcyUWtGQllTeERRVU5zUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRMmhDTEdsQ1FVRnBRaXhGUVVOcVFpeERRVUZETEVOQlEwWXNRMEZCUXp0SlFVTktMRU5CUVVNN1EwRkRSanRCUVhSRVJDdzBRMEZ6UkVNN1FVRkZSRHM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMSEZDUVVGNVFpeFRRVUZSTEdkQ1FVRnRRanRKUVVVdlJEczdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFbEJRVmtzUlVGQlJTeFBRVUZsTEVWQlFVVXNTVUZCVVR0UlFVVnFSQ3hKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGFrTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkRZaXd5UkVGQk1rUXNRMEZETlVRc1EwRkJRenRUUVVOSU8xRkJSVVFzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE4wSXNRMEZCUXp0RFFVTkdPMEZCYUVKRUxITkVRV2RDUXp0QlFVVkVMRmRCUVZjN1FVRkZXQ3hUUVVGVExITkNRVUZ6UWl4RFFVRkRMRWxCUVZrN1NVRkRNVU1zVDBGQlR5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJRenRCUVVOb1JTeERRVUZETzBGQlJVUXNVMEZCVXl4cFFrRkJhVUlzUTBGQlF5eERRVUZWTEVWQlFVVXNTMEZCWXp0SlFVTnVSQ3hKUVVGSkxFdEJRVXNzUzBGQlN5eFpRVUZaTEVWQlFVVTdVVUZETVVJc1QwRkJUeXhUUVVGVExFTkJRVU03UzBGRGJFSTdTVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVObUxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lcnJvclZhbHVlcyA9IGV4cG9ydHMuZXJyb3JDb2RlcyA9IHZvaWQgMDtcbmV4cG9ydHMuZXJyb3JDb2RlcyA9IHtcbiAgICBycGM6IHtcbiAgICAgICAgaW52YWxpZElucHV0OiAtMzIwMDAsXG4gICAgICAgIHJlc291cmNlTm90Rm91bmQ6IC0zMjAwMSxcbiAgICAgICAgcmVzb3VyY2VVbmF2YWlsYWJsZTogLTMyMDAyLFxuICAgICAgICB0cmFuc2FjdGlvblJlamVjdGVkOiAtMzIwMDMsXG4gICAgICAgIG1ldGhvZE5vdFN1cHBvcnRlZDogLTMyMDA0LFxuICAgICAgICBsaW1pdEV4Y2VlZGVkOiAtMzIwMDUsXG4gICAgICAgIHBhcnNlOiAtMzI3MDAsXG4gICAgICAgIGludmFsaWRSZXF1ZXN0OiAtMzI2MDAsXG4gICAgICAgIG1ldGhvZE5vdEZvdW5kOiAtMzI2MDEsXG4gICAgICAgIGludmFsaWRQYXJhbXM6IC0zMjYwMixcbiAgICAgICAgaW50ZXJuYWw6IC0zMjYwMyxcbiAgICB9LFxuICAgIHByb3ZpZGVyOiB7XG4gICAgICAgIHVzZXJSZWplY3RlZFJlcXVlc3Q6IDQwMDEsXG4gICAgICAgIHVuYXV0aG9yaXplZDogNDEwMCxcbiAgICAgICAgdW5zdXBwb3J0ZWRNZXRob2Q6IDQyMDAsXG4gICAgICAgIGRpc2Nvbm5lY3RlZDogNDkwMCxcbiAgICAgICAgY2hhaW5EaXNjb25uZWN0ZWQ6IDQ5MDEsXG4gICAgfSxcbn07XG5leHBvcnRzLmVycm9yVmFsdWVzID0ge1xuICAgICctMzI3MDAnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgSlNPTiB3YXMgcmVjZWl2ZWQgYnkgdGhlIHNlcnZlci4gQW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIHNlcnZlciB3aGlsZSBwYXJzaW5nIHRoZSBKU09OIHRleHQuJyxcbiAgICB9LFxuICAgICctMzI2MDAnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSBKU09OIHNlbnQgaXMgbm90IGEgdmFsaWQgUmVxdWVzdCBvYmplY3QuJyxcbiAgICB9LFxuICAgICctMzI2MDEnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSBtZXRob2QgZG9lcyBub3QgZXhpc3QgLyBpcyBub3QgYXZhaWxhYmxlLicsXG4gICAgfSxcbiAgICAnLTMyNjAyJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0pTT04gUlBDIDIuMCcsXG4gICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIG1ldGhvZCBwYXJhbWV0ZXIocykuJyxcbiAgICB9LFxuICAgICctMzI2MDMnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ0ludGVybmFsIEpTT04tUlBDIGVycm9yLicsXG4gICAgfSxcbiAgICAnLTMyMDAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgaW5wdXQuJyxcbiAgICB9LFxuICAgICctMzIwMDEnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTE0NzQnLFxuICAgICAgICBtZXNzYWdlOiAnUmVzb3VyY2Ugbm90IGZvdW5kLicsXG4gICAgfSxcbiAgICAnLTMyMDAyJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ1Jlc291cmNlIHVuYXZhaWxhYmxlLicsXG4gICAgfSxcbiAgICAnLTMyMDAzJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ1RyYW5zYWN0aW9uIHJlamVjdGVkLicsXG4gICAgfSxcbiAgICAnLTMyMDA0Jzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ01ldGhvZCBub3Qgc3VwcG9ydGVkLicsXG4gICAgfSxcbiAgICAnLTMyMDA1Jzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xNDc0JyxcbiAgICAgICAgbWVzc2FnZTogJ1JlcXVlc3QgbGltaXQgZXhjZWVkZWQuJyxcbiAgICB9LFxuICAgICc0MDAxJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xMTkzJyxcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgcmVqZWN0ZWQgdGhlIHJlcXVlc3QuJyxcbiAgICB9LFxuICAgICc0MTAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xMTkzJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSByZXF1ZXN0ZWQgYWNjb3VudCBhbmQvb3IgbWV0aG9kIGhhcyBub3QgYmVlbiBhdXRob3JpemVkIGJ5IHRoZSB1c2VyLicsXG4gICAgfSxcbiAgICAnNDIwMCc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTE5MycsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGUgcmVxdWVzdGVkIG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgRXRoZXJldW0gcHJvdmlkZXIuJyxcbiAgICB9LFxuICAgICc0OTAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xMTkzJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSBwcm92aWRlciBpcyBkaXNjb25uZWN0ZWQgZnJvbSBhbGwgY2hhaW5zLicsXG4gICAgfSxcbiAgICAnNDkwMSc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTE5MycsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGUgcHJvdmlkZXIgaXMgZGlzY29ubmVjdGVkIGZyb20gdGhlIHNwZWNpZmllZCBjaGFpbi4nLFxuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhKeWIzSXRZMjl1YzNSaGJuUnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJWeWNtOXlMV052Ym5OMFlXNTBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRjFRbUVzVVVGQlFTeFZRVUZWTEVkQlFXVTdTVUZEY0VNc1IwRkJSeXhGUVVGRk8xRkJRMGdzV1VGQldTeEZRVUZGTEVOQlFVTXNTMEZCU3p0UlFVTndRaXhuUWtGQlowSXNSVUZCUlN4RFFVRkRMRXRCUVVzN1VVRkRlRUlzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXhMUVVGTE8xRkJRek5DTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zUzBGQlN6dFJRVU16UWl4clFrRkJhMElzUlVGQlJTeERRVUZETEV0QlFVczdVVUZETVVJc1lVRkJZU3hGUVVGRkxFTkJRVU1zUzBGQlN6dFJRVU55UWl4TFFVRkxMRVZCUVVVc1EwRkJReXhMUVVGTE8xRkJRMklzWTBGQll5eEZRVUZGTEVOQlFVTXNTMEZCU3p0UlFVTjBRaXhqUVVGakxFVkJRVVVzUTBGQlF5eExRVUZMTzFGQlEzUkNMR0ZCUVdFc1JVRkJSU3hEUVVGRExFdEJRVXM3VVVGRGNrSXNVVUZCVVN4RlFVRkZMRU5CUVVNc1MwRkJTenRMUVVOcVFqdEpRVU5FTEZGQlFWRXNSVUZCUlR0UlFVTlNMRzFDUVVGdFFpeEZRVUZGTEVsQlFVazdVVUZEZWtJc1dVRkJXU3hGUVVGRkxFbEJRVWs3VVVGRGJFSXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNUdFJRVU4yUWl4WlFVRlpMRVZCUVVVc1NVRkJTVHRSUVVOc1FpeHBRa0ZCYVVJc1JVRkJSU3hKUVVGSk8wdEJRM2hDTzBOQlEwWXNRMEZCUXp0QlFVVlhMRkZCUVVFc1YwRkJWeXhIUVVGSE8wbEJRM3BDTEZGQlFWRXNSVUZCUlR0UlFVTlNMRkZCUVZFc1JVRkJSU3hqUVVGak8xRkJRM2hDTEU5QlFVOHNSVUZCUlN4MVIwRkJkVWM3UzBGRGFrZzdTVUZEUkN4UlFVRlJMRVZCUVVVN1VVRkRVaXhSUVVGUkxFVkJRVVVzWTBGQll6dFJRVU40UWl4UFFVRlBMRVZCUVVVc09FTkJRVGhETzB0QlEzaEVPMGxCUTBRc1VVRkJVU3hGUVVGRk8xRkJRMUlzVVVGQlVTeEZRVUZGTEdOQlFXTTdVVUZEZUVJc1QwRkJUeXhGUVVGRkxDdERRVUVyUXp0TFFVTjZSRHRKUVVORUxGRkJRVkVzUlVGQlJUdFJRVU5TTEZGQlFWRXNSVUZCUlN4alFVRmpPMUZCUTNoQ0xFOUJRVThzUlVGQlJTdzRRa0ZCT0VJN1MwRkRlRU03U1VGRFJDeFJRVUZSTEVWQlFVVTdVVUZEVWl4UlFVRlJMRVZCUVVVc1kwRkJZenRSUVVONFFpeFBRVUZQTEVWQlFVVXNNRUpCUVRCQ08wdEJRM0JETzBsQlEwUXNVVUZCVVN4RlFVRkZPMUZCUTFJc1VVRkJVU3hGUVVGRkxGVkJRVlU3VVVGRGNFSXNUMEZCVHl4RlFVRkZMR2RDUVVGblFqdExRVU14UWp0SlFVTkVMRkZCUVZFc1JVRkJSVHRSUVVOU0xGRkJRVkVzUlVGQlJTeFZRVUZWTzFGQlEzQkNMRTlCUVU4c1JVRkJSU3h4UWtGQmNVSTdTMEZETDBJN1NVRkRSQ3hSUVVGUkxFVkJRVVU3VVVGRFVpeFJRVUZSTEVWQlFVVXNWVUZCVlR0UlFVTndRaXhQUVVGUExFVkJRVVVzZFVKQlFYVkNPMHRCUTJwRE8wbEJRMFFzVVVGQlVTeEZRVUZGTzFGQlExSXNVVUZCVVN4RlFVRkZMRlZCUVZVN1VVRkRjRUlzVDBGQlR5eEZRVUZGTEhWQ1FVRjFRanRMUVVOcVF6dEpRVU5FTEZGQlFWRXNSVUZCUlR0UlFVTlNMRkZCUVZFc1JVRkJSU3hWUVVGVk8xRkJRM0JDTEU5QlFVOHNSVUZCUlN4MVFrRkJkVUk3UzBGRGFrTTdTVUZEUkN4UlFVRlJMRVZCUVVVN1VVRkRVaXhSUVVGUkxFVkJRVVVzVlVGQlZUdFJRVU53UWl4UFFVRlBMRVZCUVVVc2VVSkJRWGxDTzB0QlEyNURPMGxCUTBRc1RVRkJUU3hGUVVGRk8xRkJRMDRzVVVGQlVTeEZRVUZGTEZWQlFWVTdVVUZEY0VJc1QwRkJUeXhGUVVGRkxEUkNRVUUwUWp0TFFVTjBRenRKUVVORUxFMUJRVTBzUlVGQlJUdFJRVU5PTEZGQlFWRXNSVUZCUlN4VlFVRlZPMUZCUTNCQ0xFOUJRVThzUlVGQlJTd3dSVUZCTUVVN1MwRkRjRVk3U1VGRFJDeE5RVUZOTEVWQlFVVTdVVUZEVGl4UlFVRlJMRVZCUVVVc1ZVRkJWVHRSUVVOd1FpeFBRVUZQTEVWQlFVVXNhMFZCUVd0Rk8wdEJRelZGTzBsQlEwUXNUVUZCVFN4RlFVRkZPMUZCUTA0c1VVRkJVU3hGUVVGRkxGVkJRVlU3VVVGRGNFSXNUMEZCVHl4RlFVRkZMQ3REUVVFclF6dExRVU42UkR0SlFVTkVMRTFCUVUwc1JVRkJSVHRSUVVOT0xGRkJRVkVzUlVGQlJTeFZRVUZWTzFGQlEzQkNMRTlCUVU4c1JVRkJSU3gzUkVGQmQwUTdTMEZEYkVVN1EwRkRSaXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXRoRXJyb3JzID0gdm9pZCAwO1xuY29uc3QgY2xhc3Nlc18xID0gcmVxdWlyZShcIi4vY2xhc3Nlc1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmNvbnN0IGVycm9yX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4vZXJyb3ItY29uc3RhbnRzXCIpO1xuZXhwb3J0cy5ldGhFcnJvcnMgPSB7XG4gICAgcnBjOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgUGFyc2UgKC0zMjcwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZTogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLnBhcnNlLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgSlNPTiBSUEMgMi4wIEludmFsaWQgUmVxdWVzdCAoLTMyNjAwKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGludmFsaWRSZXF1ZXN0OiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW52YWxpZFJlcXVlc3QsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgSW52YWxpZCBQYXJhbXMgKC0zMjYwMikgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBpbnZhbGlkUGFyYW1zOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW52YWxpZFBhcmFtcywgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIEpTT04gUlBDIDIuMCBNZXRob2QgTm90IEZvdW5kICgtMzI2MDEpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgbWV0aG9kTm90Rm91bmQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5tZXRob2ROb3RGb3VuZCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIEpTT04gUlBDIDIuMCBJbnRlcm5hbCAoLTMyNjAzKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGludGVybmFsOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW50ZXJuYWwsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgU2VydmVyIGVycm9yLlxuICAgICAgICAgKiBQZXJtaXRzIGludGVnZXIgZXJyb3IgY29kZXMgaW4gdGhlIFsgLTMyMDk5IDw9IC0zMjAwNSBdIHJhbmdlLlxuICAgICAgICAgKiBDb2RlcyAtMzIwMDAgdGhyb3VnaCAtMzIwMDQgYXJlIHJlc2VydmVkIGJ5IEVJUC0xNDc0LlxuICAgICAgICAgKi9cbiAgICAgICAgc2VydmVyOiAob3B0cykgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRzIHx8IHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9wdHMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdGhlcmV1bSBSUEMgU2VydmVyIGVycm9ycyBtdXN0IHByb3ZpZGUgc2luZ2xlIG9iamVjdCBhcmd1bWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSB9ID0gb3B0cztcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSB8fCBjb2RlID4gLTMyMDA1IHx8IGNvZGUgPCAtMzIwOTkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlciBzdWNoIHRoYXQ6IC0zMjA5OSA8PSBjb2RlIDw9IC0zMjAwNScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEV0aEpzb25ScGNFcnJvcihjb2RlLCBvcHRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBJbnZhbGlkIElucHV0ICgtMzIwMDApIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgaW52YWxpZElucHV0OiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW52YWxpZElucHV0LCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIEpTT04gUlBDIFJlc291cmNlIE5vdCBGb3VuZCAoLTMyMDAxKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlTm90Rm91bmQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5yZXNvdXJjZU5vdEZvdW5kLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIEpTT04gUlBDIFJlc291cmNlIFVuYXZhaWxhYmxlICgtMzIwMDIpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVzb3VyY2VVbmF2YWlsYWJsZTogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLnJlc291cmNlVW5hdmFpbGFibGUsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gSlNPTiBSUEMgVHJhbnNhY3Rpb24gUmVqZWN0ZWQgKC0zMjAwMykgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2FjdGlvblJlamVjdGVkOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMudHJhbnNhY3Rpb25SZWplY3RlZCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBNZXRob2QgTm90IFN1cHBvcnRlZCAoLTMyMDA0KSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIG1ldGhvZE5vdFN1cHBvcnRlZDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLm1ldGhvZE5vdFN1cHBvcnRlZCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBMaW1pdCBFeGNlZWRlZCAoLTMyMDA1KSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGxpbWl0RXhjZWVkZWQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5saW1pdEV4Y2VlZGVkLCBhcmcpLFxuICAgIH0sXG4gICAgcHJvdmlkZXI6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBQcm92aWRlciBVc2VyIFJlamVjdGVkIFJlcXVlc3QgKDQwMDEpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdXNlclJlamVjdGVkUmVxdWVzdDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci51c2VyUmVqZWN0ZWRSZXF1ZXN0LCBhcmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIFByb3ZpZGVyIFVuYXV0aG9yaXplZCAoNDEwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICB1bmF1dGhvcml6ZWQ6IChhcmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRFdGhQcm92aWRlckVycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucHJvdmlkZXIudW5hdXRob3JpemVkLCBhcmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIFByb3ZpZGVyIFVuc3VwcG9ydGVkIE1ldGhvZCAoNDIwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICB1bnN1cHBvcnRlZE1ldGhvZDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci51bnN1cHBvcnRlZE1ldGhvZCwgYXJnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBQcm92aWRlciBOb3QgQ29ubmVjdGVkICg0OTAwKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGRpc2Nvbm5lY3RlZDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci5kaXNjb25uZWN0ZWQsIGFyZyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gUHJvdmlkZXIgQ2hhaW4gTm90IENvbm5lY3RlZCAoNDkwMSkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBjaGFpbkRpc2Nvbm5lY3RlZDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci5jaGFpbkRpc2Nvbm5lY3RlZCwgYXJnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIGN1c3RvbSBFdGhlcmV1bSBQcm92aWRlciBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGN1c3RvbTogKG9wdHMpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0cyB8fCB0eXBlb2Ygb3B0cyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvcHRzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXRoZXJldW0gUHJvdmlkZXIgY3VzdG9tIGVycm9ycyBtdXN0IHByb3ZpZGUgc2luZ2xlIG9iamVjdCBhcmd1bWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSwgbWVzc2FnZSwgZGF0YSB9ID0gb3B0cztcbiAgICAgICAgICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wibWVzc2FnZVwiIG11c3QgYmUgYSBub25lbXB0eSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgY2xhc3Nlc18xLkV0aGVyZXVtUHJvdmlkZXJFcnJvcihjb2RlLCBtZXNzYWdlLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbi8vIEludGVybmFsXG5mdW5jdGlvbiBnZXRFdGhKc29uUnBjRXJyb3IoY29kZSwgYXJnKSB7XG4gICAgY29uc3QgW21lc3NhZ2UsIGRhdGFdID0gcGFyc2VPcHRzKGFyZyk7XG4gICAgcmV0dXJuIG5ldyBjbGFzc2VzXzEuRXRoZXJldW1ScGNFcnJvcihjb2RlLCBtZXNzYWdlIHx8IHV0aWxzXzEuZ2V0TWVzc2FnZUZyb21Db2RlKGNvZGUpLCBkYXRhKTtcbn1cbmZ1bmN0aW9uIGdldEV0aFByb3ZpZGVyRXJyb3IoY29kZSwgYXJnKSB7XG4gICAgY29uc3QgW21lc3NhZ2UsIGRhdGFdID0gcGFyc2VPcHRzKGFyZyk7XG4gICAgcmV0dXJuIG5ldyBjbGFzc2VzXzEuRXRoZXJldW1Qcm92aWRlckVycm9yKGNvZGUsIG1lc3NhZ2UgfHwgdXRpbHNfMS5nZXRNZXNzYWdlRnJvbUNvZGUoY29kZSksIGRhdGEpO1xufVxuZnVuY3Rpb24gcGFyc2VPcHRzKGFyZykge1xuICAgIGlmIChhcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gW2FyZ107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlLCBkYXRhIH0gPSBhcmc7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3BlY2lmeSBzdHJpbmcgbWVzc2FnZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbbWVzc2FnZSB8fCB1bmRlZmluZWQsIGRhdGFdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYSnliM0p6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyVnljbTl5Y3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4MVEwRkJiMFU3UVVGRGNFVXNiVU5CUVRaRE8wRkJRemRETEhWRVFVRXJRenRCUVdWc1F5eFJRVUZCTEZOQlFWTXNSMEZCUnp0SlFVTjJRaXhIUVVGSExFVkJRVVU3VVVGRlNEczdWMEZGUnp0UlFVTklMRXRCUVVzc1JVRkJSU3hEUVVGSkxFZEJRWEZDTEVWQlFVVXNSVUZCUlN4RFFVRkRMR3RDUVVGclFpeERRVU55UkN3MFFrRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVTXhRanRSUVVWRU96dFhRVVZITzFGQlEwZ3NZMEZCWXl4RlFVRkZMRU5CUVVrc1IwRkJjVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNhMEpCUVd0Q0xFTkJRemxFTERSQ1FVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExHTkJRV01zUlVGQlJTeEhRVUZITEVOQlEyNURPMUZCUlVRN08xZEJSVWM3VVVGRFNDeGhRVUZoTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eHJRa0ZCYTBJc1EwRkROMFFzTkVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hGUVVGRkxFZEJRVWNzUTBGRGJFTTdVVUZGUkRzN1YwRkZSenRSUVVOSUxHTkJRV01zUlVGQlJTeERRVUZKTEVkQlFYRkNMRVZCUVVVc1JVRkJSU3hEUVVGRExHdENRVUZyUWl4RFFVTTVSQ3cwUWtGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4alFVRmpMRVZCUVVVc1IwRkJSeXhEUVVOdVF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc1VVRkJVU3hGUVVGRkxFTkJRVWtzUjBGQmNVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc2EwSkJRV3RDTEVOQlEzaEVMRFJDUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkhMRU5CUXpkQ08xRkJSVVE3T3pzN1YwRkpSenRSUVVOSUxFMUJRVTBzUlVGQlJTeERRVUZKTEVsQlFUSkNMRVZCUVVVc1JVRkJSVHRaUVVONlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU0xUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHbEZRVUZwUlN4RFFVRkRMRU5CUVVNN1lVRkRjRVk3V1VGRFJDeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRM1JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NSMEZCUnl4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVTdaMEpCUXpkRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlEySXNLMFJCUVN0RUxFTkJRMmhGTEVOQlFVTTdZVUZEU0R0WlFVTkVMRTlCUVU4c2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM2hETEVOQlFVTTdVVUZGUkRzN1YwRkZSenRSUVVOSUxGbEJRVmtzUlVGQlJTeERRVUZKTEVkQlFYRkNMRVZCUVVVc1JVRkJSU3hEUVVGRExHdENRVUZyUWl4RFFVTTFSQ3cwUWtGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhEUVVOcVF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc1owSkJRV2RDTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eHJRa0ZCYTBJc1EwRkRhRVVzTkVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNSMEZCUnl4RFFVTnlRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlNTeEhRVUZ4UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhyUWtGQmEwSXNRMEZEYmtVc05FSkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUjBGQlJ5eERRVU40UXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzYlVKQlFXMUNMRVZCUVVVc1EwRkJTU3hIUVVGeFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4clFrRkJhMElzUTBGRGJrVXNORUpCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1IwRkJSeXhEUVVONFF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc2EwSkJRV3RDTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eHJRa0ZCYTBJc1EwRkRiRVVzTkVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNSMEZCUnl4RFFVTjJRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NZVUZCWVN4RlFVRkZMRU5CUVVrc1IwRkJjVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNhMEpCUVd0Q0xFTkJRemRFTERSQ1FVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUlVGQlJTeEhRVUZITEVOQlEyeERPMHRCUTBZN1NVRkZSQ3hSUVVGUkxFVkJRVVU3VVVGRlVqczdWMEZGUnp0UlFVTklMRzFDUVVGdFFpeEZRVUZGTEVOQlFVa3NSMEZCY1VJc1JVRkJSU3hGUVVGRk8xbEJRMmhFTEU5QlFVOHNiVUpCUVcxQ0xFTkJRM2hDTERSQ1FVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRWRCUVVjc1EwRkROME1zUTBGQlF6dFJRVU5LTEVOQlFVTTdVVUZGUkRzN1YwRkZSenRSUVVOSUxGbEJRVmtzUlVGQlJTeERRVUZKTEVkQlFYRkNMRVZCUVVVc1JVRkJSVHRaUVVONlF5eFBRVUZQTEcxQ1FVRnRRaXhEUVVONFFpdzBRa0ZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVU4wUXl4RFFVRkRPMUZCUTBvc1EwRkJRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NhVUpCUVdsQ0xFVkJRVVVzUTBGQlNTeEhRVUZ4UWl4RlFVRkZMRVZCUVVVN1dVRkRPVU1zVDBGQlR5eHRRa0ZCYlVJc1EwRkRlRUlzTkVKQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNSMEZCUnl4RFFVTXpReXhEUVVGRE8xRkJRMG9zUTBGQlF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc1dVRkJXU3hGUVVGRkxFTkJRVWtzUjBGQmNVSXNSVUZCUlN4RlFVRkZPMWxCUTNwRExFOUJRVThzYlVKQlFXMUNMRU5CUTNoQ0xEUkNRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFTkJRM1JETEVOQlFVTTdVVUZEU2l4RFFVRkRPMUZCUlVRN08xZEJSVWM3VVVGRFNDeHBRa0ZCYVVJc1JVRkJSU3hEUVVGSkxFZEJRWEZDTEVWQlFVVXNSVUZCUlR0WlFVTTVReXhQUVVGUExHMUNRVUZ0UWl4RFFVTjRRaXcwUWtGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEhRVUZITEVOQlF6TkRMRU5CUVVNN1VVRkRTaXhEUVVGRE8xRkJSVVE3TzFkQlJVYzdVVUZEU0N4TlFVRk5MRVZCUVVVc1EwRkJTU3hKUVVGMVFpeEZRVUZGTEVWQlFVVTdXVUZEY2tNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkROVVFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elJVRkJjMFVzUTBGQlF5eERRVUZETzJGQlEzcEdPMWxCUlVRc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJSWEpETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVVVGQlVTeEZRVUZGTzJkQ1FVTXpReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVU5pTEhGRFFVRnhReXhEUVVOMFF5eERRVUZETzJGQlEwZzdXVUZEUkN4UFFVRlBMRWxCUVVrc0swSkJRWEZDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU40UkN4RFFVRkRPMHRCUTBZN1EwRkRSaXhEUVVGRE8wRkJSVVlzVjBGQlZ6dEJRVVZZTEZOQlFWTXNhMEpCUVd0Q0xFTkJRVWtzU1VGQldTeEZRVUZGTEVkQlFYRkNPMGxCUTJoRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzWkRMRTlCUVU4c1NVRkJTU3d3UWtGQlowSXNRMEZEZWtJc1NVRkJTU3hGUVVOS0xFOUJRVThzU1VGQlNTd3dRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRGJrTXNTVUZCU1N4RFFVTk1MRU5CUVVNN1FVRkRTaXhEUVVGRE8wRkJSVVFzVTBGQlV5eHRRa0ZCYlVJc1EwRkJTU3hKUVVGWkxFVkJRVVVzUjBGQmNVSTdTVUZEYWtVc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGRrTXNUMEZCVHl4SlFVRkpMQ3RDUVVGeFFpeERRVU01UWl4SlFVRkpMRVZCUTBvc1QwRkJUeXhKUVVGSkxEQkNRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVOdVF5eEpRVUZKTEVOQlEwd3NRMEZCUXp0QlFVTktMRU5CUVVNN1FVRkZSQ3hUUVVGVExGTkJRVk1zUTBGQlNTeEhRVUZ4UWp0SlFVTjZReXhKUVVGSkxFZEJRVWNzUlVGQlJUdFJRVU5RTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRek5DTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOa08yRkJRVTBzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNwRUxFMUJRVTBzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRE8xbEJSVGxDTEVsQlFVa3NUMEZCVHl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZETVVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8yRkJRMnBFTzFsQlEwUXNUMEZCVHl4RFFVRkRMRTlCUVU4c1NVRkJTU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEY2tNN1MwRkRSanRKUVVORUxFOUJRVThzUlVGQlJTeERRVUZETzBGQlExb3NRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRNZXNzYWdlRnJvbUNvZGUgPSBleHBvcnRzLnNlcmlhbGl6ZUVycm9yID0gZXhwb3J0cy5FdGhlcmV1bVByb3ZpZGVyRXJyb3IgPSBleHBvcnRzLkV0aGVyZXVtUnBjRXJyb3IgPSBleHBvcnRzLmV0aEVycm9ycyA9IGV4cG9ydHMuZXJyb3JDb2RlcyA9IHZvaWQgMDtcbmNvbnN0IGNsYXNzZXNfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFdGhlcmV1bVJwY0Vycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGFzc2VzXzEuRXRoZXJldW1ScGNFcnJvcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkV0aGVyZXVtUHJvdmlkZXJFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xhc3Nlc18xLkV0aGVyZXVtUHJvdmlkZXJFcnJvcjsgfSB9KTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNlcmlhbGl6ZUVycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsc18xLnNlcmlhbGl6ZUVycm9yOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0TWVzc2FnZUZyb21Db2RlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsc18xLmdldE1lc3NhZ2VGcm9tQ29kZTsgfSB9KTtcbmNvbnN0IGVycm9yc18xID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXRoRXJyb3JzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcnNfMS5ldGhFcnJvcnM7IH0gfSk7XG5jb25zdCBlcnJvcl9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2Vycm9yLWNvbnN0YW50c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVycm9yQ29kZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXM7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2RVTkJRVzlGTzBGQlZXeEZMR2xIUVZaUExEQkNRVUZuUWl4UFFWVlFPMEZCUTJoQ0xITkhRVmg1UWl3clFrRkJjVUlzVDBGWGVrSTdRVUZXZGtJc2JVTkJSV2xDTzBGQlUyWXNLMFpCVmtFc2MwSkJRV01zVDBGVlFUdEJRVU5rTEcxSFFWaG5RaXd3UWtGQmEwSXNUMEZYYUVJN1FVRlVjRUlzY1VOQlFYRkRPMEZCUzI1RExEQkdRVXhQTEd0Q1FVRlRMRTlCUzFBN1FVRktXQ3gxUkVGQkswTTdRVUZITjBNc01rWkJTRThzTkVKQlFWVXNUMEZIVUNKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXJpYWxpemVFcnJvciA9IGV4cG9ydHMuaXNWYWxpZENvZGUgPSBleHBvcnRzLmdldE1lc3NhZ2VGcm9tQ29kZSA9IGV4cG9ydHMuSlNPTl9SUENfU0VSVkVSX0VSUk9SX01FU1NBR0UgPSB2b2lkIDA7XG5jb25zdCBlcnJvcl9jb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2Vycm9yLWNvbnN0YW50c1wiKTtcbmNvbnN0IGNsYXNzZXNfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXNcIik7XG5jb25zdCBGQUxMQkFDS19FUlJPUl9DT0RFID0gZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMuaW50ZXJuYWw7XG5jb25zdCBGQUxMQkFDS19NRVNTQUdFID0gJ1Vuc3BlY2lmaWVkIGVycm9yIG1lc3NhZ2UuIFRoaXMgaXMgYSBidWcsIHBsZWFzZSByZXBvcnQgaXQuJztcbmNvbnN0IEZBTExCQUNLX0VSUk9SID0ge1xuICAgIGNvZGU6IEZBTExCQUNLX0VSUk9SX0NPREUsXG4gICAgbWVzc2FnZTogZ2V0TWVzc2FnZUZyb21Db2RlKEZBTExCQUNLX0VSUk9SX0NPREUpLFxufTtcbmV4cG9ydHMuSlNPTl9SUENfU0VSVkVSX0VSUk9SX01FU1NBR0UgPSAnVW5zcGVjaWZpZWQgc2VydmVyIGVycm9yLic7XG4vKipcbiAqIEdldHMgdGhlIG1lc3NhZ2UgZm9yIGEgZ2l2ZW4gY29kZSwgb3IgYSBmYWxsYmFjayBtZXNzYWdlIGlmIHRoZSBjb2RlIGhhc1xuICogbm8gY29ycmVzcG9uZGluZyBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBnZXRNZXNzYWdlRnJvbUNvZGUoY29kZSwgZmFsbGJhY2tNZXNzYWdlID0gRkFMTEJBQ0tfTUVTU0FHRSkge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpKSB7XG4gICAgICAgIGNvbnN0IGNvZGVTdHJpbmcgPSBjb2RlLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChoYXNLZXkoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JWYWx1ZXMsIGNvZGVTdHJpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JWYWx1ZXNbY29kZVN0cmluZ10ubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNKc29uUnBjU2VydmVyRXJyb3IoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkpTT05fUlBDX1NFUlZFUl9FUlJPUl9NRVNTQUdFO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxsYmFja01lc3NhZ2U7XG59XG5leHBvcnRzLmdldE1lc3NhZ2VGcm9tQ29kZSA9IGdldE1lc3NhZ2VGcm9tQ29kZTtcbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBjb2RlIGlzIHZhbGlkLlxuICogQSBjb2RlIGlzIG9ubHkgdmFsaWQgaWYgaXQgaGFzIGEgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZENvZGUoY29kZSkge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGNvZGVTdHJpbmcgPSBjb2RlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGVycm9yX2NvbnN0YW50c18xLmVycm9yVmFsdWVzW2NvZGVTdHJpbmddKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNKc29uUnBjU2VydmVyRXJyb3IoY29kZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNWYWxpZENvZGUgPSBpc1ZhbGlkQ29kZTtcbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gZXJyb3IgdG8gYW4gRXRoZXJldW0gSlNPTiBSUEMtY29tcGF0aWJsZSBlcnJvciBvYmplY3QuXG4gKiBNZXJlbHkgY29waWVzIHRoZSBnaXZlbiBlcnJvcidzIHZhbHVlcyBpZiBpdCBpcyBhbHJlYWR5IGNvbXBhdGlibGUuXG4gKiBJZiB0aGUgZ2l2ZW4gZXJyb3IgaXMgbm90IGZ1bGx5IGNvbXBhdGlibGUsIGl0IHdpbGwgYmUgcHJlc2VydmVkIG9uIHRoZVxuICogcmV0dXJuZWQgb2JqZWN0J3MgZGF0YS5vcmlnaW5hbEVycm9yIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBzZXJpYWxpemVFcnJvcihlcnJvciwgeyBmYWxsYmFja0Vycm9yID0gRkFMTEJBQ0tfRVJST1IsIHNob3VsZEluY2x1ZGVTdGFjayA9IGZhbHNlLCB9ID0ge30pIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmICghZmFsbGJhY2tFcnJvciB8fFxuICAgICAgICAhTnVtYmVyLmlzSW50ZWdlcihmYWxsYmFja0Vycm9yLmNvZGUpIHx8XG4gICAgICAgIHR5cGVvZiBmYWxsYmFja0Vycm9yLm1lc3NhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGZhbGxiYWNrIGVycm9yIHdpdGggaW50ZWdlciBudW1iZXIgY29kZSBhbmQgc3RyaW5nIG1lc3NhZ2UuJyk7XG4gICAgfVxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGNsYXNzZXNfMS5FdGhlcmV1bVJwY0Vycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvci5zZXJpYWxpemUoKTtcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHt9O1xuICAgIGlmIChlcnJvciAmJlxuICAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KGVycm9yKSAmJlxuICAgICAgICBoYXNLZXkoZXJyb3IsICdjb2RlJykgJiZcbiAgICAgICAgaXNWYWxpZENvZGUoZXJyb3IuY29kZSkpIHtcbiAgICAgICAgY29uc3QgX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIHNlcmlhbGl6ZWQuY29kZSA9IF9lcnJvci5jb2RlO1xuICAgICAgICBpZiAoX2Vycm9yLm1lc3NhZ2UgJiYgdHlwZW9mIF9lcnJvci5tZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VyaWFsaXplZC5tZXNzYWdlID0gX2Vycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoaGFzS2V5KF9lcnJvciwgJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWQuZGF0YSA9IF9lcnJvci5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VyaWFsaXplZC5tZXNzYWdlID0gZ2V0TWVzc2FnZUZyb21Db2RlKHNlcmlhbGl6ZWQuY29kZSk7XG4gICAgICAgICAgICBzZXJpYWxpemVkLmRhdGEgPSB7IG9yaWdpbmFsRXJyb3I6IGFzc2lnbk9yaWdpbmFsRXJyb3IoZXJyb3IpIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWQuY29kZSA9IGZhbGxiYWNrRXJyb3IuY29kZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IChfYSA9IGVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVzc2FnZTtcbiAgICAgICAgc2VyaWFsaXplZC5tZXNzYWdlID0gKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IG1lc3NhZ2VcbiAgICAgICAgICAgIDogZmFsbGJhY2tFcnJvci5tZXNzYWdlKTtcbiAgICAgICAgc2VyaWFsaXplZC5kYXRhID0geyBvcmlnaW5hbEVycm9yOiBhc3NpZ25PcmlnaW5hbEVycm9yKGVycm9yKSB9O1xuICAgIH1cbiAgICBjb25zdCBzdGFjayA9IChfYiA9IGVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc3RhY2s7XG4gICAgaWYgKHNob3VsZEluY2x1ZGVTdGFjayAmJiBlcnJvciAmJiBzdGFjayAmJiB0eXBlb2Ygc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNlcmlhbGl6ZWQuc3RhY2sgPSBzdGFjaztcbiAgICB9XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG59XG5leHBvcnRzLnNlcmlhbGl6ZUVycm9yID0gc2VyaWFsaXplRXJyb3I7XG4vLyBJbnRlcm5hbFxuZnVuY3Rpb24gaXNKc29uUnBjU2VydmVyRXJyb3IoY29kZSkge1xuICAgIHJldHVybiBjb2RlID49IC0zMjA5OSAmJiBjb2RlIDw9IC0zMjAwMDtcbn1cbmZ1bmN0aW9uIGFzc2lnbk9yaWdpbmFsRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShlcnJvcikpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xufVxuZnVuY3Rpb24gaGFzS2V5KG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZkWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc2RVUkJRVFJFTzBGQlF6VkVMSFZEUVVGNVJUdEJRVVY2UlN4TlFVRk5MRzFDUVVGdFFpeEhRVUZITERSQ1FVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF6dEJRVU53UkN4TlFVRk5MR2RDUVVGblFpeEhRVUZITERaRVFVRTJSQ3hEUVVGRE8wRkJRM1pHTEUxQlFVMHNZMEZCWXl4SFFVRXJRanRKUVVOcVJDeEpRVUZKTEVWQlFVVXNiVUpCUVcxQ08wbEJRM3BDTEU5QlFVOHNSVUZCUlN4clFrRkJhMElzUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenREUVVOcVJDeERRVUZETzBGQlJWY3NVVUZCUVN3MlFrRkJOa0lzUjBGQlJ5d3lRa0ZCTWtJc1EwRkJRenRCUVVsNlJUczdPMGRCUjBjN1FVRkRTQ3hUUVVGblFpeHJRa0ZCYTBJc1EwRkRhRU1zU1VGQldTeEZRVU5hTEd0Q1FVRXdRaXhuUWtGQlowSTdTVUZGTVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMUZCUXpGQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWdVF5eEpRVUZKTEUxQlFVMHNRMEZCUXl3MlFrRkJWeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZGTzFsQlEyNURMRTlCUVU4c05rSkJRVmNzUTBGQlF5eFZRVUV5UWl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4dlFrRkJiMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTVRaXhQUVVGUExIRkRRVUUyUWl4RFFVRkRPMU5CUTNSRE8wdEJRMFk3U1VGRFJDeFBRVUZQTEdWQlFXVXNRMEZCUXp0QlFVTjZRaXhEUVVGRE8wRkJaa1FzWjBSQlpVTTdRVUZGUkRzN08wZEJSMGM3UVVGRFNDeFRRVUZuUWl4WFFVRlhMRU5CUVVNc1NVRkJXVHRKUVVOMFF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFJRVU16UWl4UFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOa08wbEJSVVFzVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRMjVETEVsQlFVa3NOa0pCUVZjc1EwRkJReXhWUVVFeVFpeERRVUZETEVWQlFVVTdVVUZETlVNc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqdEpRVVZFTEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdVVUZET1VJc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqdEpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMEZCUTJZc1EwRkJRenRCUVdSRUxHdERRV05ETzBGQlJVUTdPenM3TzBkQlMwYzdRVUZEU0N4VFFVRm5RaXhqUVVGakxFTkJRelZDTEV0QlFXTXNSVUZEWkN4RlFVTkZMR0ZCUVdFc1IwRkJSeXhqUVVGakxFVkJRemxDTEd0Q1FVRnJRaXhIUVVGSExFdEJRVXNzUjBGRE0wSXNSMEZCUnl4RlFVRkZPenRKUVVkT0xFbEJRMFVzUTBGQlF5eGhRVUZoTzFGQlEyUXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEY2tNc1QwRkJUeXhoUVVGaExFTkJRVU1zVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZEZWtNN1VVRkRRU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVU5pTERCRlFVRXdSU3hEUVVNelJTeERRVUZETzB0QlEwZzdTVUZGUkN4SlFVRkpMRXRCUVVzc1dVRkJXU3d3UWtGQlowSXNSVUZCUlR0UlFVTnlReXhQUVVGUExFdEJRVXNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0TFFVTXhRanRKUVVWRUxFMUJRVTBzVlVGQlZTeEhRVUYzUXl4RlFVRkZMRU5CUVVNN1NVRkZNMFFzU1VGRFJTeExRVUZMTzFGQlEwd3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVVHRSUVVONlFpeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRM0pDTEUxQlFVMHNRMEZCUXl4TFFVRm5ReXhGUVVGRkxFMUJRVTBzUTBGQlF6dFJRVU5vUkN4WFFVRlhMRU5CUVVVc1MwRkJiME1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZEZGtRN1VVRkRRU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eExRVUUwUXl4RFFVRkRPMUZCUXpWRUxGVkJRVlVzUTBGQlF5eEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVVNVFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhOUVVGTkxFTkJRVU1zVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZCUlR0WlFVTjRSQ3hWUVVGVkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNN1dVRkZjRU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRk8yZENRVU14UWl4VlFVRlZMRU5CUVVNc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdZVUZETDBJN1UwRkRSanRoUVVGTk8xbEJRMHdzVlVGQlZTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGRGNFTXNWVUZCZVVNc1EwRkJReXhKUVVGSkxFTkJRMmhFTEVOQlFVTTdXVUZGUml4VlFVRlZMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzWVVGQllTeEZRVUZGTEcxQ1FVRnRRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdVMEZEYWtVN1MwRkRSanRUUVVGTk8xRkJRMHdzVlVGQlZTeERRVUZETEVsQlFVa3NSMEZCUnl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJSWEpETEUxQlFVMHNUMEZCVHl4VFFVRkpMRXRCUVdFc01FTkJRVVVzVDBGQlR5eERRVUZETzFGQlJYaERMRlZCUVZVc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGRGJrSXNUMEZCVHl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkU3V1VGRGNFTXNRMEZCUXl4RFFVRkRMRTlCUVU4N1dVRkRWQ3hEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZETVVJc1EwRkJRenRSUVVOR0xGVkJRVlVzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4aFFVRmhMRVZCUVVVc2JVSkJRVzFDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOcVJUdEpRVVZFTEUxQlFVMHNTMEZCU3l4VFFVRkpMRXRCUVdFc01FTkJRVVVzUzBGQlN5eERRVUZETzBsQlJYQkRMRWxCUVVrc2EwSkJRV3RDTEVsQlFVa3NTMEZCU3l4SlFVRkpMRXRCUVVzc1NVRkJTU3hQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZEY2tVc1ZVRkJWU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZETVVJN1NVRkRSQ3hQUVVGUExGVkJRWGRETEVOQlFVTTdRVUZEYkVRc1EwRkJRenRCUVd4RlJDeDNRMEZyUlVNN1FVRkZSQ3hYUVVGWE8wRkJSVmdzVTBGQlV5eHZRa0ZCYjBJc1EwRkJReXhKUVVGWk8wbEJRM2hETEU5QlFVOHNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0QlFVTXhReXhEUVVGRE8wRkJSVVFzVTBGQlV5eHRRa0ZCYlVJc1EwRkJReXhMUVVGak8wbEJRM3BETEVsQlFVa3NTMEZCU3l4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGREwwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0TFFVTnFRenRKUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBGQlEyWXNRMEZCUXp0QlFVVkVMRk5CUVZNc1RVRkJUU3hEUVVGRExFZEJRVFJDTEVWQlFVVXNSMEZCVnp0SlFVTjJSQ3hQUVVGUExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZUVRc1EwRkJReUo5IiwibW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcbnN0cmluZ2lmeS5kZWZhdWx0ID0gc3RyaW5naWZ5XG5zdHJpbmdpZnkuc3RhYmxlID0gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeVxuc3RyaW5naWZ5LnN0YWJsZVN0cmluZ2lmeSA9IGRldGVybWluaXN0aWNTdHJpbmdpZnlcblxudmFyIExJTUlUX1JFUExBQ0VfTk9ERSA9ICdbLi4uXSdcbnZhciBDSVJDVUxBUl9SRVBMQUNFX05PREUgPSAnW0NpcmN1bGFyXSdcblxudmFyIGFyciA9IFtdXG52YXIgcmVwbGFjZXJTdGFjayA9IFtdXG5cbmZ1bmN0aW9uIGRlZmF1bHRPcHRpb25zICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXB0aExpbWl0OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICBlZGdlc0xpbWl0OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICB9XG59XG5cbi8vIFJlZ3VsYXIgc3RyaW5naWZ5XG5mdW5jdGlvbiBzdHJpbmdpZnkgKG9iaiwgcmVwbGFjZXIsIHNwYWNlciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zKClcbiAgfVxuXG4gIGRlY2lyYyhvYmosICcnLCAwLCBbXSwgdW5kZWZpbmVkLCAwLCBvcHRpb25zKVxuICB2YXIgcmVzXG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2VyU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICByZXMgPSBKU09OLnN0cmluZ2lmeShvYmosIHJlcGxhY2VyLCBzcGFjZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KG9iaiwgcmVwbGFjZUdldHRlclZhbHVlcyhyZXBsYWNlciksIHNwYWNlcilcbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoJ1t1bmFibGUgdG8gc2VyaWFsaXplLCBjaXJjdWxhciByZWZlcmVuY2UgaXMgdG9vIGNvbXBsZXggdG8gYW5hbHl6ZV0nKVxuICB9IGZpbmFsbHkge1xuICAgIHdoaWxlIChhcnIubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2YXIgcGFydCA9IGFyci5wb3AoKVxuICAgICAgaWYgKHBhcnQubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwYXJ0WzBdLCBwYXJ0WzFdLCBwYXJ0WzNdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydFswXVtwYXJ0WzFdXSA9IHBhcnRbMl1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzZXRSZXBsYWNlIChyZXBsYWNlLCB2YWwsIGssIHBhcmVudCkge1xuICB2YXIgcHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwYXJlbnQsIGspXG4gIGlmIChwcm9wZXJ0eURlc2NyaXB0b3IuZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvcGVydHlEZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcmVudCwgaywgeyB2YWx1ZTogcmVwbGFjZSB9KVxuICAgICAgYXJyLnB1c2goW3BhcmVudCwgaywgdmFsLCBwcm9wZXJ0eURlc2NyaXB0b3JdKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXBsYWNlclN0YWNrLnB1c2goW3ZhbCwgaywgcmVwbGFjZV0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcmVudFtrXSA9IHJlcGxhY2VcbiAgICBhcnIucHVzaChbcGFyZW50LCBrLCB2YWxdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY2lyYyAodmFsLCBrLCBlZGdlSW5kZXgsIHN0YWNrLCBwYXJlbnQsIGRlcHRoLCBvcHRpb25zKSB7XG4gIGRlcHRoICs9IDFcbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0YWNrW2ldID09PSB2YWwpIHtcbiAgICAgICAgc2V0UmVwbGFjZShDSVJDVUxBUl9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygb3B0aW9ucy5kZXB0aExpbWl0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgZGVwdGggPiBvcHRpb25zLmRlcHRoTGltaXRcbiAgICApIHtcbiAgICAgIHNldFJlcGxhY2UoTElNSVRfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBvcHRpb25zLmVkZ2VzTGltaXQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBlZGdlSW5kZXggKyAxID4gb3B0aW9ucy5lZGdlc0xpbWl0XG4gICAgKSB7XG4gICAgICBzZXRSZXBsYWNlKExJTUlUX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzdGFjay5wdXNoKHZhbClcbiAgICAvLyBPcHRpbWl6ZSBmb3IgQXJyYXlzLiBCaWcgYXJyYXlzIGNvdWxkIGtpbGwgdGhlIHBlcmZvcm1hbmNlIG90aGVyd2lzZSFcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRlY2lyYyh2YWxbaV0sIGksIGksIHN0YWNrLCB2YWwsIGRlcHRoLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICAgIGRlY2lyYyh2YWxba2V5XSwga2V5LCBpLCBzdGFjaywgdmFsLCBkZXB0aCwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhY2sucG9wKClcbiAgfVxufVxuXG4vLyBTdGFibGUtc3RyaW5naWZ5XG5mdW5jdGlvbiBjb21wYXJlRnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmlzdGljU3RyaW5naWZ5IChvYmosIHJlcGxhY2VyLCBzcGFjZXIsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucygpXG4gIH1cblxuICB2YXIgdG1wID0gZGV0ZXJtaW5pc3RpY0RlY2lyYyhvYmosICcnLCAwLCBbXSwgdW5kZWZpbmVkLCAwLCBvcHRpb25zKSB8fCBvYmpcbiAgdmFyIHJlc1xuICB0cnkge1xuICAgIGlmIChyZXBsYWNlclN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkodG1wLCByZXBsYWNlciwgc3BhY2VyKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBKU09OLnN0cmluZ2lmeSh0bXAsIHJlcGxhY2VHZXR0ZXJWYWx1ZXMocmVwbGFjZXIpLCBzcGFjZXIpXG4gICAgfVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KCdbdW5hYmxlIHRvIHNlcmlhbGl6ZSwgY2lyY3VsYXIgcmVmZXJlbmNlIGlzIHRvbyBjb21wbGV4IHRvIGFuYWx5emVdJylcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBFbnN1cmUgdGhhdCB3ZSByZXN0b3JlIHRoZSBvYmplY3QgYXMgaXQgd2FzLlxuICAgIHdoaWxlIChhcnIubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2YXIgcGFydCA9IGFyci5wb3AoKVxuICAgICAgaWYgKHBhcnQubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwYXJ0WzBdLCBwYXJ0WzFdLCBwYXJ0WzNdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydFswXVtwYXJ0WzFdXSA9IHBhcnRbMl1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmlzdGljRGVjaXJjICh2YWwsIGssIGVkZ2VJbmRleCwgc3RhY2ssIHBhcmVudCwgZGVwdGgsIG9wdGlvbnMpIHtcbiAgZGVwdGggKz0gMVxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IHZhbCkge1xuICAgICAgICBzZXRSZXBsYWNlKENJUkNVTEFSX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBvcHRpb25zLmRlcHRoTGltaXQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBkZXB0aCA+IG9wdGlvbnMuZGVwdGhMaW1pdFxuICAgICkge1xuICAgICAgc2V0UmVwbGFjZShMSU1JVF9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9wdGlvbnMuZWRnZXNMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGVkZ2VJbmRleCArIDEgPiBvcHRpb25zLmVkZ2VzTGltaXRcbiAgICApIHtcbiAgICAgIHNldFJlcGxhY2UoTElNSVRfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsKVxuICAgIC8vIE9wdGltaXplIGZvciBBcnJheXMuIEJpZyBhcnJheXMgY291bGQga2lsbCB0aGUgcGVyZm9ybWFuY2Ugb3RoZXJ3aXNlIVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGV0ZXJtaW5pc3RpY0RlY2lyYyh2YWxbaV0sIGksIGksIHN0YWNrLCB2YWwsIGRlcHRoLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDcmVhdGUgYSB0ZW1wb3Jhcnkgb2JqZWN0IGluIHRoZSByZXF1aXJlZCB3YXlcbiAgICAgIHZhciB0bXAgPSB7fVxuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgZGV0ZXJtaW5pc3RpY0RlY2lyYyh2YWxba2V5XSwga2V5LCBpLCBzdGFjaywgdmFsLCBkZXB0aCwgb3B0aW9ucylcbiAgICAgICAgdG1wW2tleV0gPSB2YWxba2V5XVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFyci5wdXNoKFtwYXJlbnQsIGssIHZhbF0pXG4gICAgICAgIHBhcmVudFtrXSA9IHRtcFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRtcFxuICAgICAgfVxuICAgIH1cbiAgICBzdGFjay5wb3AoKVxuICB9XG59XG5cbi8vIHdyYXBzIHJlcGxhY2VyIGZ1bmN0aW9uIHRvIGhhbmRsZSB2YWx1ZXMgd2UgY291bGRuJ3QgcmVwbGFjZVxuLy8gYW5kIG1hcmsgdGhlbSBhcyByZXBsYWNlZCB2YWx1ZVxuZnVuY3Rpb24gcmVwbGFjZUdldHRlclZhbHVlcyAocmVwbGFjZXIpIHtcbiAgcmVwbGFjZXIgPVxuICAgIHR5cGVvZiByZXBsYWNlciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gcmVwbGFjZXJcbiAgICAgIDogZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgcmV0dXJuIHZcbiAgICAgIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICAgIGlmIChyZXBsYWNlclN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVwbGFjZXJTdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IHJlcGxhY2VyU3RhY2tbaV1cbiAgICAgICAgaWYgKHBhcnRbMV0gPT09IGtleSAmJiBwYXJ0WzBdID09PSB2YWwpIHtcbiAgICAgICAgICB2YWwgPSBwYXJ0WzJdXG4gICAgICAgICAgcmVwbGFjZXJTdGFjay5zcGxpY2UoaSwgMSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsKVxuICB9XG59XG4iLCJ2YXIganNvbiA9IHR5cGVvZiBKU09OICE9PSAndW5kZWZpbmVkJyA/IEpTT04gOiByZXF1aXJlKCdqc29uaWZ5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykgb3B0cyA9IHsgY21wOiBvcHRzIH07XG4gICAgdmFyIHNwYWNlID0gb3B0cy5zcGFjZSB8fCAnJztcbiAgICBpZiAodHlwZW9mIHNwYWNlID09PSAnbnVtYmVyJykgc3BhY2UgPSBBcnJheShzcGFjZSsxKS5qb2luKCcgJyk7XG4gICAgdmFyIGN5Y2xlcyA9ICh0eXBlb2Ygb3B0cy5jeWNsZXMgPT09ICdib29sZWFuJykgPyBvcHRzLmN5Y2xlcyA6IGZhbHNlO1xuICAgIHZhciByZXBsYWNlciA9IG9wdHMucmVwbGFjZXIgfHwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiAgICB2YXIgY21wID0gb3B0cy5jbXAgJiYgKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFvYmogPSB7IGtleTogYSwgdmFsdWU6IG5vZGVbYV0gfTtcbiAgICAgICAgICAgICAgICB2YXIgYm9iaiA9IHsga2V5OiBiLCB2YWx1ZTogbm9kZVtiXSB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBmKGFvYmosIGJvYmopO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9KShvcHRzLmNtcCk7XG5cbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIHJldHVybiAoZnVuY3Rpb24gc3RyaW5naWZ5IChwYXJlbnQsIGtleSwgbm9kZSwgbGV2ZWwpIHtcbiAgICAgICAgdmFyIGluZGVudCA9IHNwYWNlID8gKCdcXG4nICsgbmV3IEFycmF5KGxldmVsICsgMSkuam9pbihzcGFjZSkpIDogJyc7XG4gICAgICAgIHZhciBjb2xvblNlcGFyYXRvciA9IHNwYWNlID8gJzogJyA6ICc6JztcblxuICAgICAgICBpZiAobm9kZSAmJiBub2RlLnRvSlNPTiAmJiB0eXBlb2Ygbm9kZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnRvSlNPTigpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZSA9IHJlcGxhY2VyLmNhbGwocGFyZW50LCBrZXksIG5vZGUpO1xuXG4gICAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBqc29uLnN0cmluZ2lmeShub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBzdHJpbmdpZnkobm9kZSwgaSwgbm9kZVtpXSwgbGV2ZWwrMSkgfHwganNvbi5zdHJpbmdpZnkobnVsbCk7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2goaW5kZW50ICsgc3BhY2UgKyBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnWycgKyBvdXQuam9pbignLCcpICsgaW5kZW50ICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNlZW4uaW5kZXhPZihub2RlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3ljbGVzKSByZXR1cm4ganNvbi5zdHJpbmdpZnkoJ19fY3ljbGVfXycpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbnZlcnRpbmcgY2lyY3VsYXIgc3RydWN0dXJlIHRvIEpTT04nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Ugc2Vlbi5wdXNoKG5vZGUpO1xuXG4gICAgICAgICAgICB2YXIga2V5cyA9IG9iamVjdEtleXMobm9kZSkuc29ydChjbXAgJiYgY21wKG5vZGUpKTtcbiAgICAgICAgICAgIHZhciBvdXQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0cmluZ2lmeShub2RlLCBrZXksIG5vZGVba2V5XSwgbGV2ZWwrMSk7XG5cbiAgICAgICAgICAgICAgICBpZighdmFsdWUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGtleVZhbHVlID0ganNvbi5zdHJpbmdpZnkoa2V5KVxuICAgICAgICAgICAgICAgICAgICArIGNvbG9uU2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIG91dC5wdXNoKGluZGVudCArIHNwYWNlICsga2V5VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2Vlbi5zcGxpY2Uoc2Vlbi5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgIHJldHVybiAneycgKyBvdXQuam9pbignLCcpICsgaW5kZW50ICsgJ30nO1xuICAgICAgICB9XG4gICAgfSkoeyAnJzogb2JqIH0sICcnLCBvYmosIDApO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlIH07XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn07XG4iLCJleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9saWIvcGFyc2UnKTtcbmV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9saWIvc3RyaW5naWZ5Jyk7XG4iLCJ2YXIgYXQsIC8vIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBjaCwgLy8gVGhlIGN1cnJlbnQgY2hhcmFjdGVyXG4gICAgZXNjYXBlZSA9IHtcbiAgICAgICAgJ1wiJzogICdcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFwnLFxuICAgICAgICAnLyc6ICAnLycsXG4gICAgICAgIGI6ICAgICdcXGInLFxuICAgICAgICBmOiAgICAnXFxmJyxcbiAgICAgICAgbjogICAgJ1xcbicsXG4gICAgICAgIHI6ICAgICdcXHInLFxuICAgICAgICB0OiAgICAnXFx0J1xuICAgIH0sXG4gICAgdGV4dCxcblxuICAgIGVycm9yID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgLy8gQ2FsbCBlcnJvciB3aGVuIHNvbWV0aGluZyBpcyB3cm9uZy5cbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgbmFtZTogICAgJ1N5bnRheEVycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG0sXG4gICAgICAgICAgICBhdDogICAgICBhdCxcbiAgICAgICAgICAgIHRleHQ6ICAgIHRleHRcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIG5leHQgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAvLyBJZiBhIGMgcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB2ZXJpZnkgdGhhdCBpdCBtYXRjaGVzIHRoZSBjdXJyZW50IGNoYXJhY3Rlci5cbiAgICAgICAgaWYgKGMgJiYgYyAhPT0gY2gpIHtcbiAgICAgICAgICAgIGVycm9yKFwiRXhwZWN0ZWQgJ1wiICsgYyArIFwiJyBpbnN0ZWFkIG9mICdcIiArIGNoICsgXCInXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgdGhlIG5leHQgY2hhcmFjdGVyLiBXaGVuIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMsXG4gICAgICAgIC8vIHJldHVybiB0aGUgZW1wdHkgc3RyaW5nLlxuICAgICAgICBcbiAgICAgICAgY2ggPSB0ZXh0LmNoYXJBdChhdCk7XG4gICAgICAgIGF0ICs9IDE7XG4gICAgICAgIHJldHVybiBjaDtcbiAgICB9LFxuICAgIFxuICAgIG51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUGFyc2UgYSBudW1iZXIgdmFsdWUuXG4gICAgICAgIHZhciBudW1iZXIsXG4gICAgICAgICAgICBzdHJpbmcgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGlmIChjaCA9PT0gJy0nKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSAnLSc7XG4gICAgICAgICAgICBuZXh0KCctJyk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNoID49ICcwJyAmJiBjaCA8PSAnOScpIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ggPT09ICcuJykge1xuICAgICAgICAgICAgc3RyaW5nICs9ICcuJztcbiAgICAgICAgICAgIHdoaWxlIChuZXh0KCkgJiYgY2ggPj0gJzAnICYmIGNoIDw9ICc5Jykge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ggPT09ICdlJyB8fCBjaCA9PT0gJ0UnKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnKSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBudW1iZXIgPSArc3RyaW5nO1xuICAgICAgICBpZiAoIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgICAgIGVycm9yKFwiQmFkIG51bWJlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUGFyc2UgYSBzdHJpbmcgdmFsdWUuXG4gICAgICAgIHZhciBoZXgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgc3RyaW5nID0gJycsXG4gICAgICAgICAgICB1ZmZmZjtcbiAgICAgICAgXG4gICAgICAgIC8vIFdoZW4gcGFyc2luZyBmb3Igc3RyaW5nIHZhbHVlcywgd2UgbXVzdCBsb29rIGZvciBcIiBhbmQgXFwgY2hhcmFjdGVycy5cbiAgICAgICAgaWYgKGNoID09PSAnXCInKSB7XG4gICAgICAgICAgICB3aGlsZSAobmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWZmZmYgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleCA9IHBhcnNlSW50KG5leHQoKSwgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNGaW5pdGUoaGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWZmZmYgPSB1ZmZmZiAqIDE2ICsgaGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodWZmZmYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlc2NhcGVlW2NoXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBlc2NhcGVlW2NoXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlcnJvcihcIkJhZCBzdHJpbmdcIik7XG4gICAgfSxcblxuICAgIHdoaXRlID0gZnVuY3Rpb24gKCkge1xuXG4vLyBTa2lwIHdoaXRlc3BhY2UuXG5cbiAgICAgICAgd2hpbGUgKGNoICYmIGNoIDw9ICcgJykge1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHdvcmQgPSBmdW5jdGlvbiAoKSB7XG5cbi8vIHRydWUsIGZhbHNlLCBvciBudWxsLlxuXG4gICAgICAgIHN3aXRjaCAoY2gpIHtcbiAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICBuZXh0KCd0Jyk7XG4gICAgICAgICAgICBuZXh0KCdyJyk7XG4gICAgICAgICAgICBuZXh0KCd1Jyk7XG4gICAgICAgICAgICBuZXh0KCdlJyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSAnZic6XG4gICAgICAgICAgICBuZXh0KCdmJyk7XG4gICAgICAgICAgICBuZXh0KCdhJyk7XG4gICAgICAgICAgICBuZXh0KCdsJyk7XG4gICAgICAgICAgICBuZXh0KCdzJyk7XG4gICAgICAgICAgICBuZXh0KCdlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgbmV4dCgnbicpO1xuICAgICAgICAgICAgbmV4dCgndScpO1xuICAgICAgICAgICAgbmV4dCgnbCcpO1xuICAgICAgICAgICAgbmV4dCgnbCcpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkICdcIiArIGNoICsgXCInXCIpO1xuICAgIH0sXG5cbiAgICB2YWx1ZSwgIC8vIFBsYWNlIGhvbGRlciBmb3IgdGhlIHZhbHVlIGZ1bmN0aW9uLlxuXG4gICAgYXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cbi8vIFBhcnNlIGFuIGFycmF5IHZhbHVlLlxuXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICAgIGlmIChjaCA9PT0gJ1snKSB7XG4gICAgICAgICAgICBuZXh0KCdbJyk7XG4gICAgICAgICAgICB3aGl0ZSgpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnXScpIHtcbiAgICAgICAgICAgICAgICBuZXh0KCddJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5OyAgIC8vIGVtcHR5IGFycmF5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoY2gpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHZhbHVlKCkpO1xuICAgICAgICAgICAgICAgIHdoaXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnXScpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgnXScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQoJywnKTtcbiAgICAgICAgICAgICAgICB3aGl0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVycm9yKFwiQmFkIGFycmF5XCIpO1xuICAgIH0sXG5cbiAgICBvYmplY3QgPSBmdW5jdGlvbiAoKSB7XG5cbi8vIFBhcnNlIGFuIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgb2JqZWN0ID0ge307XG5cbiAgICAgICAgaWYgKGNoID09PSAneycpIHtcbiAgICAgICAgICAgIG5leHQoJ3snKTtcbiAgICAgICAgICAgIHdoaXRlKCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICd9Jykge1xuICAgICAgICAgICAgICAgIG5leHQoJ30nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0OyAgIC8vIGVtcHR5IG9iamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGNoKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgICAgICAgICBuZXh0KCc6Jyk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcignRHVwbGljYXRlIGtleSBcIicgKyBrZXkgKyAnXCInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZSgpO1xuICAgICAgICAgICAgICAgIHdoaXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgnfScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KCcsJyk7XG4gICAgICAgICAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlcnJvcihcIkJhZCBvYmplY3RcIik7XG4gICAgfTtcblxudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cbi8vIFBhcnNlIGEgSlNPTiB2YWx1ZS4gSXQgY291bGQgYmUgYW4gb2JqZWN0LCBhbiBhcnJheSwgYSBzdHJpbmcsIGEgbnVtYmVyLFxuLy8gb3IgYSB3b3JkLlxuXG4gICAgd2hpdGUoKTtcbiAgICBzd2l0Y2ggKGNoKSB7XG4gICAgY2FzZSAneyc6XG4gICAgICAgIHJldHVybiBvYmplY3QoKTtcbiAgICBjYXNlICdbJzpcbiAgICAgICAgcmV0dXJuIGFycmF5KCk7XG4gICAgY2FzZSAnXCInOlxuICAgICAgICByZXR1cm4gc3RyaW5nKCk7XG4gICAgY2FzZSAnLSc6XG4gICAgICAgIHJldHVybiBudW1iZXIoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY2ggPj0gJzAnICYmIGNoIDw9ICc5JyA/IG51bWJlcigpIDogd29yZCgpO1xuICAgIH1cbn07XG5cbi8vIFJldHVybiB0aGUganNvbl9wYXJzZSBmdW5jdGlvbi4gSXQgd2lsbCBoYXZlIGFjY2VzcyB0byBhbGwgb2YgdGhlIGFib3ZlXG4vLyBmdW5jdGlvbnMgYW5kIHZhcmlhYmxlcy5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc291cmNlLCByZXZpdmVyKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBcbiAgICB0ZXh0ID0gc291cmNlO1xuICAgIGF0ID0gMDtcbiAgICBjaCA9ICcgJztcbiAgICByZXN1bHQgPSB2YWx1ZSgpO1xuICAgIHdoaXRlKCk7XG4gICAgaWYgKGNoKSB7XG4gICAgICAgIGVycm9yKFwiU3ludGF4IGVycm9yXCIpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgcmV2aXZlciBmdW5jdGlvbiwgd2UgcmVjdXJzaXZlbHkgd2FsayB0aGUgbmV3IHN0cnVjdHVyZSxcbiAgICAvLyBwYXNzaW5nIGVhY2ggbmFtZS92YWx1ZSBwYWlyIHRvIHRoZSByZXZpdmVyIGZ1bmN0aW9uIGZvciBwb3NzaWJsZVxuICAgIC8vIHRyYW5zZm9ybWF0aW9uLCBzdGFydGluZyB3aXRoIGEgdGVtcG9yYXJ5IHJvb3Qgb2JqZWN0IHRoYXQgaG9sZHMgdGhlIHJlc3VsdFxuICAgIC8vIGluIGFuIGVtcHR5IGtleS4gSWYgdGhlcmUgaXMgbm90IGEgcmV2aXZlciBmdW5jdGlvbiwgd2Ugc2ltcGx5IHJldHVybiB0aGVcbiAgICAvLyByZXN1bHQuXG5cbiAgICByZXR1cm4gdHlwZW9mIHJldml2ZXIgPT09ICdmdW5jdGlvbicgPyAoZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuICAgICAgICB2YXIgaywgdiwgdmFsdWUgPSBob2xkZXJba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB3YWxrKHZhbHVlLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVba10gPSB2O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXZpdmVyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICB9KHsnJzogcmVzdWx0fSwgJycpKSA6IHJlc3VsdDtcbn07XG4iLCJ2YXIgY3ggPSAvW1xcdTAwMDBcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZyxcbiAgICBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgIGdhcCxcbiAgICBpbmRlbnQsXG4gICAgbWV0YSA9IHsgICAgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgJ1xcYic6ICdcXFxcYicsXG4gICAgICAgICdcXHQnOiAnXFxcXHQnLFxuICAgICAgICAnXFxuJzogJ1xcXFxuJyxcbiAgICAgICAgJ1xcZic6ICdcXFxcZicsXG4gICAgICAgICdcXHInOiAnXFxcXHInLFxuICAgICAgICAnXCInIDogJ1xcXFxcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFxcXFxcJ1xuICAgIH0sXG4gICAgcmVwO1xuXG5mdW5jdGlvbiBxdW90ZShzdHJpbmcpIHtcbiAgICAvLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXG4gICAgLy8gYmFja3NsYXNoIGNoYXJhY3RlcnMsIHRoZW4gd2UgY2FuIHNhZmVseSBzbGFwIHNvbWUgcXVvdGVzIGFyb3VuZCBpdC5cbiAgICAvLyBPdGhlcndpc2Ugd2UgbXVzdCBhbHNvIHJlcGxhY2UgdGhlIG9mZmVuZGluZyBjaGFyYWN0ZXJzIHdpdGggc2FmZSBlc2NhcGVcbiAgICAvLyBzZXF1ZW5jZXMuXG4gICAgXG4gICAgZXNjYXBhYmxlLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIGVzY2FwYWJsZS50ZXN0KHN0cmluZykgPyAnXCInICsgc3RyaW5nLnJlcGxhY2UoZXNjYXBhYmxlLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgYyA9IG1ldGFbYV07XG4gICAgICAgIHJldHVybiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgPyBjIDpcbiAgICAgICAgICAgICdcXFxcdScgKyAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgIH0pICsgJ1wiJyA6ICdcIicgKyBzdHJpbmcgKyAnXCInO1xufVxuXG5mdW5jdGlvbiBzdHIoa2V5LCBob2xkZXIpIHtcbiAgICAvLyBQcm9kdWNlIGEgc3RyaW5nIGZyb20gaG9sZGVyW2tleV0uXG4gICAgdmFyIGksICAgICAgICAgIC8vIFRoZSBsb29wIGNvdW50ZXIuXG4gICAgICAgIGssICAgICAgICAgIC8vIFRoZSBtZW1iZXIga2V5LlxuICAgICAgICB2LCAgICAgICAgICAvLyBUaGUgbWVtYmVyIHZhbHVlLlxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIG1pbmQgPSBnYXAsXG4gICAgICAgIHBhcnRpYWwsXG4gICAgICAgIHZhbHVlID0gaG9sZGVyW2tleV07XG4gICAgXG4gICAgLy8gSWYgdGhlIHZhbHVlIGhhcyBhIHRvSlNPTiBtZXRob2QsIGNhbGwgaXQgdG8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0pTT04oa2V5KTtcbiAgICB9XG4gICAgXG4gICAgLy8gSWYgd2Ugd2VyZSBjYWxsZWQgd2l0aCBhIHJlcGxhY2VyIGZ1bmN0aW9uLCB0aGVuIGNhbGwgdGhlIHJlcGxhY2VyIHRvXG4gICAgLy8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG4gICAgaWYgKHR5cGVvZiByZXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSByZXAuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBXaGF0IGhhcHBlbnMgbmV4dCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSdzIHR5cGUuXG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJldHVybiBxdW90ZSh2YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgLy8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBFbmNvZGUgbm9uLWZpbml0ZSBudW1iZXJzIGFzIG51bGwuXG4gICAgICAgICAgICByZXR1cm4gaXNGaW5pdGUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICdudWxsJztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBjYXNlICdudWxsJzpcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhIGJvb2xlYW4gb3IgbnVsbCwgY29udmVydCBpdCB0byBhIHN0cmluZy4gTm90ZTpcbiAgICAgICAgICAgIC8vIHR5cGVvZiBudWxsIGRvZXMgbm90IHByb2R1Y2UgJ251bGwnLiBUaGUgY2FzZSBpcyBpbmNsdWRlZCBoZXJlIGluXG4gICAgICAgICAgICAvLyB0aGUgcmVtb3RlIGNoYW5jZSB0aGF0IHRoaXMgZ2V0cyBmaXhlZCBzb21lZGF5LlxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICBnYXAgKz0gaW5kZW50O1xuICAgICAgICAgICAgcGFydGlhbCA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBcnJheS5pc0FycmF5XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpYWxbaV0gPSBzdHIoaSwgdmFsdWUpIHx8ICdudWxsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSm9pbiBhbGwgb2YgdGhlIGVsZW1lbnRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBjb21tYXMsIGFuZFxuICAgICAgICAgICAgICAgIC8vIHdyYXAgdGhlbSBpbiBicmFja2V0cy5cbiAgICAgICAgICAgICAgICB2ID0gcGFydGlhbC5sZW5ndGggPT09IDAgPyAnW10nIDogZ2FwID9cbiAgICAgICAgICAgICAgICAgICAgJ1tcXG4nICsgZ2FwICsgcGFydGlhbC5qb2luKCcsXFxuJyArIGdhcCkgKyAnXFxuJyArIG1pbmQgKyAnXScgOlxuICAgICAgICAgICAgICAgICAgICAnWycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICddJztcbiAgICAgICAgICAgICAgICBnYXAgPSBtaW5kO1xuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBJZiB0aGUgcmVwbGFjZXIgaXMgYW4gYXJyYXksIHVzZSBpdCB0byBzZWxlY3QgdGhlIG1lbWJlcnMgdG8gYmVcbiAgICAgICAgICAgIC8vIHN0cmluZ2lmaWVkLlxuICAgICAgICAgICAgaWYgKHJlcCAmJiB0eXBlb2YgcmVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJlcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGsgPSByZXBbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBzdHIoaywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gocXVvdGUoaykgKyAoZ2FwID8gJzogJyA6ICc6JykgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgaXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUga2V5cyBpbiB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIC8vIEpvaW4gYWxsIG9mIHRoZSBtZW1iZXIgdGV4dHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcyxcbiAgICAgICAgLy8gYW5kIHdyYXAgdGhlbSBpbiBicmFjZXMuXG5cbiAgICAgICAgdiA9IHBhcnRpYWwubGVuZ3RoID09PSAwID8gJ3t9JyA6IGdhcCA/XG4gICAgICAgICAgICAne1xcbicgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oJyxcXG4nICsgZ2FwKSArICdcXG4nICsgbWluZCArICd9JyA6XG4gICAgICAgICAgICAneycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICd9JztcbiAgICAgICAgZ2FwID0gbWluZDtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgdmFyIGk7XG4gICAgZ2FwID0gJyc7XG4gICAgaW5kZW50ID0gJyc7XG4gICAgXG4gICAgLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG51bWJlciwgbWFrZSBhbiBpbmRlbnQgc3RyaW5nIGNvbnRhaW5pbmcgdGhhdFxuICAgIC8vIG1hbnkgc3BhY2VzLlxuICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzcGFjZTsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbmRlbnQgKz0gJyAnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgaW5kZW50IHN0cmluZy5cbiAgICBlbHNlIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGluZGVudCA9IHNwYWNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgcmVwbGFjZXIsIGl0IG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBhcnJheS5cbiAgICAvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yLlxuICAgIHJlcCA9IHJlcGxhY2VyO1xuICAgIGlmIChyZXBsYWNlciAmJiB0eXBlb2YgcmVwbGFjZXIgIT09ICdmdW5jdGlvbidcbiAgICAmJiAodHlwZW9mIHJlcGxhY2VyICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmVwbGFjZXIubGVuZ3RoICE9PSAnbnVtYmVyJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKU09OLnN0cmluZ2lmeScpO1xuICAgIH1cbiAgICBcbiAgICAvLyBNYWtlIGEgZmFrZSByb290IG9iamVjdCBjb250YWluaW5nIG91ciB2YWx1ZSB1bmRlciB0aGUga2V5IG9mICcnLlxuICAgIC8vIFJldHVybiB0aGUgcmVzdWx0IG9mIHN0cmluZ2lmeWluZyB0aGUgdmFsdWUuXG4gICAgcmV0dXJuIHN0cignJywgeycnOiB2YWx1ZX0pO1xufTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV2ZW50c18xIiwic2FmZUFwcGx5IiwiaGFuZGxlciIsImNvbnRleHQiLCJhcmdzIiwiUmVmbGVjdCIsImFwcGx5IiwiZXJyIiwic2V0VGltZW91dCIsIlNhZmVFdmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJlbWl0IiwidHlwZSIsImRvRXJyb3IiLCJldmVudHMiLCJ0aGlzIiwiX2V2ZW50cyIsInVuZGVmaW5lZCIsImVycm9yIiwiZXIiLCJsZW5ndGgiLCJFcnJvciIsIm1lc3NhZ2UiLCJsZW4iLCJsaXN0ZW5lcnMiLCJhcnIiLCJuIiwiY29weSIsIkFycmF5IiwiaSIsImFycmF5Q2xvbmUiLCJFdGhlcmV1bVByb3ZpZGVyRXJyb3IiLCJFdGhlcmV1bVJwY0Vycm9yIiwiZmFzdF9zYWZlX3N0cmluZ2lmeV8xIiwiY29uc3RydWN0b3IiLCJjb2RlIiwiZGF0YSIsIk51bWJlciIsImlzSW50ZWdlciIsInN1cGVyIiwic2VyaWFsaXplIiwic2VyaWFsaXplZCIsInN0YWNrIiwidG9TdHJpbmciLCJkZWZhdWx0Iiwic3RyaW5naWZ5UmVwbGFjZXIiLCJfIiwiaXNWYWxpZEV0aFByb3ZpZGVyQ29kZSIsImVycm9yVmFsdWVzIiwiZXJyb3JDb2RlcyIsInJwYyIsImludmFsaWRJbnB1dCIsInJlc291cmNlTm90Rm91bmQiLCJyZXNvdXJjZVVuYXZhaWxhYmxlIiwidHJhbnNhY3Rpb25SZWplY3RlZCIsIm1ldGhvZE5vdFN1cHBvcnRlZCIsImxpbWl0RXhjZWVkZWQiLCJwYXJzZSIsImludmFsaWRSZXF1ZXN0IiwibWV0aG9kTm90Rm91bmQiLCJpbnZhbGlkUGFyYW1zIiwiaW50ZXJuYWwiLCJwcm92aWRlciIsInVzZXJSZWplY3RlZFJlcXVlc3QiLCJ1bmF1dGhvcml6ZWQiLCJ1bnN1cHBvcnRlZE1ldGhvZCIsImRpc2Nvbm5lY3RlZCIsImNoYWluRGlzY29ubmVjdGVkIiwic3RhbmRhcmQiLCJldGhFcnJvcnMiLCJjbGFzc2VzXzEiLCJ1dGlsc18xIiwiZXJyb3JfY29uc3RhbnRzXzEiLCJnZXRFdGhKc29uUnBjRXJyb3IiLCJhcmciLCJwYXJzZU9wdHMiLCJnZXRNZXNzYWdlRnJvbUNvZGUiLCJnZXRFdGhQcm92aWRlckVycm9yIiwiaXNBcnJheSIsInNlcnZlciIsIm9wdHMiLCJjdXN0b20iLCJzZXJpYWxpemVFcnJvciIsImVudW1lcmFibGUiLCJnZXQiLCJlcnJvcnNfMSIsImlzVmFsaWRDb2RlIiwiSlNPTl9SUENfU0VSVkVSX0VSUk9SX01FU1NBR0UiLCJGQUxMQkFDS19FUlJPUl9DT0RFIiwiRkFMTEJBQ0tfRVJST1IiLCJmYWxsYmFja01lc3NhZ2UiLCJjb2RlU3RyaW5nIiwiaGFzS2V5IiwiaXNKc29uUnBjU2VydmVyRXJyb3IiLCJhc3NpZ25PcmlnaW5hbEVycm9yIiwiYXNzaWduIiwib2JqIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZmFsbGJhY2tFcnJvciIsInNob3VsZEluY2x1ZGVTdGFjayIsIl9hIiwiX2IiLCJfZXJyb3IiLCJvcmlnaW5hbEVycm9yIiwibW9kdWxlIiwic3RyaW5naWZ5Iiwic3RhYmxlIiwiZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeSIsInN0YWJsZVN0cmluZ2lmeSIsIkxJTUlUX1JFUExBQ0VfTk9ERSIsIkNJUkNVTEFSX1JFUExBQ0VfTk9ERSIsInJlcGxhY2VyU3RhY2siLCJkZWZhdWx0T3B0aW9ucyIsImRlcHRoTGltaXQiLCJNQVhfU0FGRV9JTlRFR0VSIiwiZWRnZXNMaW1pdCIsInJlcGxhY2VyIiwic3BhY2VyIiwib3B0aW9ucyIsInJlcyIsImRlY2lyYyIsIkpTT04iLCJyZXBsYWNlR2V0dGVyVmFsdWVzIiwicGFydCIsInBvcCIsInNldFJlcGxhY2UiLCJyZXBsYWNlIiwidmFsIiwiayIsInBhcmVudCIsInByb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsInB1c2giLCJlZGdlSW5kZXgiLCJkZXB0aCIsImtleXMiLCJjb21wYXJlRnVuY3Rpb24iLCJhIiwiYiIsInRtcCIsImRldGVybWluaXN0aWNEZWNpcmMiLCJ0b0pTT04iLCJzb3J0IiwidiIsInNwbGljZSIsImpzb24iLCJjbXAiLCJzcGFjZSIsImpvaW4iLCJjeWNsZXMiLCJmIiwibm9kZSIsImFvYmoiLCJib2JqIiwic2VlbiIsImxldmVsIiwiaW5kZW50IiwiY29sb25TZXBhcmF0b3IiLCJvdXQiLCJpdGVtIiwiaW5kZXhPZiIsIlR5cGVFcnJvciIsIm9iamVjdEtleXMiLCJrZXlWYWx1ZSIsIngiLCJoYXMiLCJhdCIsImNoIiwidGV4dCIsImVzY2FwZWUiLCJyIiwidCIsIm0iLCJuYW1lIiwibmV4dCIsImMiLCJjaGFyQXQiLCJudW1iZXIiLCJzdHJpbmciLCJpc0Zpbml0ZSIsImhleCIsInVmZmZmIiwicGFyc2VJbnQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ3aGl0ZSIsIm9iamVjdCIsImFycmF5Iiwid29yZCIsInNvdXJjZSIsInJldml2ZXIiLCJyZXN1bHQiLCJ3YWxrIiwiaG9sZGVyIiwiZ2FwIiwicmVwIiwiZXNjYXBhYmxlIiwibWV0YSIsInF1b3RlIiwibGFzdEluZGV4IiwidGVzdCIsImNoYXJDb2RlQXQiLCJzbGljZSIsInN0ciIsInBhcnRpYWwiLCJtaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==