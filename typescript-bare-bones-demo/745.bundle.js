(self.webpackChunktoken_overlay_website = self.webpackChunktoken_overlay_website || []).push([ [ 745 ], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlCOEMsSUFBTVc7UUFDQzlEOztBQUVmO0lBRUF4QyxFQUFPN0csVUFBVSxTQUFVQyxHQUFPd0gsR0FBVWdDO01BQ3hDLElBQUkxSDtNQU1KLElBTEF5SyxJQUFNLElBQ050QyxJQUFTLElBSVksbUJBQVZULEdBQ1AsS0FBSzFILElBQUksR0FBR0EsSUFBSTBILEdBQU8xSCxLQUFLLEdBQ3hCbUksS0FBVSxVQUlRLG1CQUFWVCxNQUNaUyxJQUFTVDtNQU1iLElBREFnRCxJQUFNaEYsR0FDRkEsS0FBZ0MscUJBQWJBLE1BQ0MsbUJBQWJBLEtBQW9ELG1CQUFwQkEsRUFBU25HLFNBQ2hELE1BQU0sSUFBSUMsTUFBTTtNQUtwQixPQUFPMEwsRUFBSSxJQUFJO1FBQUMsSUFBSWhOOztBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWV0YW1hc2svc2FmZS1ldmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9ldGgtcnBjLWVycm9ycy9kaXN0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3ZlcmxheS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2V0aC1ycGMtZXJyb3JzL2Rpc3QvZXJyb3ItY29uc3RhbnRzLmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9ldGgtcnBjLWVycm9ycy9kaXN0L2Vycm9ycy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZXRoLXJwYy1lcnJvcnMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZXRoLXJwYy1lcnJvcnMvZGlzdC91dGlscy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZmFzdC1zYWZlLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvanNvbi1zdGFibGUtc3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9qc29uaWZ5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9qc29uaWZ5L2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvanNvbmlmeS9saWIvc3RyaW5naWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuZnVuY3Rpb24gc2FmZUFwcGx5KGhhbmRsZXIsIGNvbnRleHQsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICBSZWZsZWN0LmFwcGx5KGhhbmRsZXIsIGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIFRocm93IGVycm9yIGFmdGVyIHRpbWVvdXQgc28gYXMgbm90IHRvIGludGVycnVwdCB0aGUgc3RhY2tcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyKSB7XG4gICAgY29uc3QgbiA9IGFyci5sZW5ndGg7XG4gICAgY29uc3QgY29weSA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgICAgICBjb3B5W2ldID0gYXJyW2ldO1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbn1cbmNsYXNzIFNhZmVFdmVudEVtaXR0ZXIgZXh0ZW5kcyBldmVudHNfMS5FdmVudEVtaXR0ZXIge1xuICAgIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgICAgICBsZXQgZG9FcnJvciA9IHR5cGUgPT09ICdlcnJvcic7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgICAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkb0Vycm9yID0gZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZG9FcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgICAgICAgaWYgKGRvRXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBlcjtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBbZXJdID0gYXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAgICAgICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgVW5oYW5kbGVkIGVycm9yLiR7ZXIgPyBgICgke2VyLm1lc3NhZ2V9KWAgOiAnJ31gKTtcbiAgICAgICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgICAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc2FmZUFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHNhZmVBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNhZmVFdmVudEVtaXR0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXRoZXJldW1Qcm92aWRlckVycm9yID0gZXhwb3J0cy5FdGhlcmV1bVJwY0Vycm9yID0gdm9pZCAwO1xuY29uc3QgZmFzdF9zYWZlX3N0cmluZ2lmeV8xID0gcmVxdWlyZShcImZhc3Qtc2FmZS1zdHJpbmdpZnlcIik7XG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBKU09OIFJQQyAyLjAgZXJyb3JzIGFuZCBFdGhlcmV1bSBSUEMgZXJyb3JzXG4gKiBwZXIgRUlQLTE0NzQuXG4gKiBQZXJtaXRzIGFueSBpbnRlZ2VyIGVycm9yIGNvZGUuXG4gKi9cbmNsYXNzIEV0aGVyZXVtUnBjRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoY29kZSwgbWVzc2FnZSwgZGF0YSkge1xuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoY29kZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCJjb2RlXCIgbXVzdCBiZSBhbiBpbnRlZ2VyLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCJtZXNzYWdlXCIgbXVzdCBiZSBhIG5vbmVtcHR5IHN0cmluZy4nKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcGxhaW4gb2JqZWN0IHdpdGggYWxsIHB1YmxpYyBjbGFzcyBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IHtcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkLmRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhY2spIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQuc3RhY2sgPSB0aGlzLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHNlcmlhbGl6ZWQgZXJyb3IsIG9taXR0aW5nXG4gICAgICogYW55IGNpcmN1bGFyIHJlZmVyZW5jZXMuXG4gICAgICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBmYXN0X3NhZmVfc3RyaW5naWZ5XzEuZGVmYXVsdCh0aGlzLnNlcmlhbGl6ZSgpLCBzdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxufVxuZXhwb3J0cy5FdGhlcmV1bVJwY0Vycm9yID0gRXRoZXJldW1ScGNFcnJvcjtcbi8qKlxuICogRXJyb3Igc3ViY2xhc3MgaW1wbGVtZW50aW5nIEV0aGVyZXVtIFByb3ZpZGVyIGVycm9ycyBwZXIgRUlQLTExOTMuXG4gKiBQZXJtaXRzIGludGVnZXIgZXJyb3IgY29kZXMgaW4gdGhlIFsgMTAwMCA8PSA0OTk5IF0gcmFuZ2UuXG4gKi9cbmNsYXNzIEV0aGVyZXVtUHJvdmlkZXJFcnJvciBleHRlbmRzIEV0aGVyZXVtUnBjRXJyb3Ige1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBFdGhlcmV1bSBQcm92aWRlciBKU09OLVJQQyBlcnJvci5cbiAgICAgKiBgY29kZWAgbXVzdCBiZSBhbiBpbnRlZ2VyIGluIHRoZSAxMDAwIDw9IDQ5OTkgcmFuZ2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29kZSwgbWVzc2FnZSwgZGF0YSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRFdGhQcm92aWRlckNvZGUoY29kZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCJjb2RlXCIgbXVzdCBiZSBhbiBpbnRlZ2VyIHN1Y2ggdGhhdDogMTAwMCA8PSBjb2RlIDw9IDQ5OTknKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihjb2RlLCBtZXNzYWdlLCBkYXRhKTtcbiAgICB9XG59XG5leHBvcnRzLkV0aGVyZXVtUHJvdmlkZXJFcnJvciA9IEV0aGVyZXVtUHJvdmlkZXJFcnJvcjtcbi8vIEludGVybmFsXG5mdW5jdGlvbiBpc1ZhbGlkRXRoUHJvdmlkZXJDb2RlKGNvZGUpIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihjb2RlKSAmJiBjb2RlID49IDEwMDAgJiYgY29kZSA8PSA0OTk5O1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5UmVwbGFjZXIoXywgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICdbQ2lyY3VsYXJdJykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMnhoYzNObGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqYkdGemMyVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRFpFUVVGblJEdEJRVk5vUkRzN096dEhRVWxITzBGQlEwZ3NUVUZCWVN4blFrRkJiMElzVTBGQlVTeExRVUZMTzBsQlRUVkRMRmxCUVZrc1NVRkJXU3hGUVVGRkxFOUJRV1VzUlVGQlJTeEpRVUZSTzFGQlJXcEVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpOQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlEySXNORUpCUVRSQ0xFTkJRemRDTEVOQlFVTTdVMEZEU0R0UlFVTkVMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpORExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlEySXNjME5CUVhORExFTkJRM1pETEVOQlFVTTdVMEZEU0R0UlFVVkVMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOMFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRUUVVOc1FqdEpRVU5JTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSUxGTkJRVk03VVVGRFVDeE5RVUZOTEZWQlFWVXNSMEZCSzBJN1dVRkROME1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpPMWxCUTJZc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTzFOQlEzUkNMRU5CUVVNN1VVRkRSaXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUXpOQ0xGVkJRVlVzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRUUVVNM1FqdFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRaUVVOa0xGVkJRVlVzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVNdlFqdFJRVU5FTEU5QlFVOHNWVUZCVlN4RFFVRkRPMGxCUTNCQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hSUVVGUk8xRkJRMDRzVDBGQlR5dzJRa0ZCWVN4RFFVTnNRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlEyaENMR2xDUVVGcFFpeEZRVU5xUWl4RFFVRkRMRU5CUTBZc1EwRkJRenRKUVVOS0xFTkJRVU03UTBGRFJqdEJRWFJFUkN3MFEwRnpSRU03UVVGRlJEczdPMGRCUjBjN1FVRkRTQ3hOUVVGaExIRkNRVUY1UWl4VFFVRlJMR2RDUVVGdFFqdEpRVVV2UkRzN08wOUJSMGM3U1VGRFNDeFpRVUZaTEVsQlFWa3NSVUZCUlN4UFFVRmxMRVZCUVVVc1NVRkJVVHRSUVVWcVJDeEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEYWtNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGRFlpd3lSRUZCTWtRc1EwRkROVVFzUTBGQlF6dFRRVU5JTzFGQlJVUXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETjBJc1EwRkJRenREUVVOR08wRkJhRUpFTEhORVFXZENRenRCUVVWRUxGZEJRVmM3UVVGRldDeFRRVUZUTEhOQ1FVRnpRaXhEUVVGRExFbEJRVms3U1VGRE1VTXNUMEZCVHl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF6dEJRVU5vUlN4RFFVRkRPMEZCUlVRc1UwRkJVeXhwUWtGQmFVSXNRMEZCUXl4RFFVRlZMRVZCUVVVc1MwRkJZenRKUVVOdVJDeEpRVUZKTEV0QlFVc3NTMEZCU3l4WlFVRlpMRVZCUVVVN1VVRkRNVUlzVDBGQlR5eFRRVUZUTEVOQlFVTTdTMEZEYkVJN1NVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEJRVU5tTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVycm9yVmFsdWVzID0gZXhwb3J0cy5lcnJvckNvZGVzID0gdm9pZCAwO1xuZXhwb3J0cy5lcnJvckNvZGVzID0ge1xuICAgIHJwYzoge1xuICAgICAgICBpbnZhbGlkSW5wdXQ6IC0zMjAwMCxcbiAgICAgICAgcmVzb3VyY2VOb3RGb3VuZDogLTMyMDAxLFxuICAgICAgICByZXNvdXJjZVVuYXZhaWxhYmxlOiAtMzIwMDIsXG4gICAgICAgIHRyYW5zYWN0aW9uUmVqZWN0ZWQ6IC0zMjAwMyxcbiAgICAgICAgbWV0aG9kTm90U3VwcG9ydGVkOiAtMzIwMDQsXG4gICAgICAgIGxpbWl0RXhjZWVkZWQ6IC0zMjAwNSxcbiAgICAgICAgcGFyc2U6IC0zMjcwMCxcbiAgICAgICAgaW52YWxpZFJlcXVlc3Q6IC0zMjYwMCxcbiAgICAgICAgbWV0aG9kTm90Rm91bmQ6IC0zMjYwMSxcbiAgICAgICAgaW52YWxpZFBhcmFtczogLTMyNjAyLFxuICAgICAgICBpbnRlcm5hbDogLTMyNjAzLFxuICAgIH0sXG4gICAgcHJvdmlkZXI6IHtcbiAgICAgICAgdXNlclJlamVjdGVkUmVxdWVzdDogNDAwMSxcbiAgICAgICAgdW5hdXRob3JpemVkOiA0MTAwLFxuICAgICAgICB1bnN1cHBvcnRlZE1ldGhvZDogNDIwMCxcbiAgICAgICAgZGlzY29ubmVjdGVkOiA0OTAwLFxuICAgICAgICBjaGFpbkRpc2Nvbm5lY3RlZDogNDkwMSxcbiAgICB9LFxufTtcbmV4cG9ydHMuZXJyb3JWYWx1ZXMgPSB7XG4gICAgJy0zMjcwMCc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdKU09OIFJQQyAyLjAnLFxuICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBKU09OIHdhcyByZWNlaXZlZCBieSB0aGUgc2VydmVyLiBBbiBlcnJvciBvY2N1cnJlZCBvbiB0aGUgc2VydmVyIHdoaWxlIHBhcnNpbmcgdGhlIEpTT04gdGV4dC4nLFxuICAgIH0sXG4gICAgJy0zMjYwMCc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdKU09OIFJQQyAyLjAnLFxuICAgICAgICBtZXNzYWdlOiAnVGhlIEpTT04gc2VudCBpcyBub3QgYSB2YWxpZCBSZXF1ZXN0IG9iamVjdC4nLFxuICAgIH0sXG4gICAgJy0zMjYwMSc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdKU09OIFJQQyAyLjAnLFxuICAgICAgICBtZXNzYWdlOiAnVGhlIG1ldGhvZCBkb2VzIG5vdCBleGlzdCAvIGlzIG5vdCBhdmFpbGFibGUuJyxcbiAgICB9LFxuICAgICctMzI2MDInOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnSlNPTiBSUEMgMi4wJyxcbiAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgbWV0aG9kIHBhcmFtZXRlcihzKS4nLFxuICAgIH0sXG4gICAgJy0zMjYwMyc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdKU09OIFJQQyAyLjAnLFxuICAgICAgICBtZXNzYWdlOiAnSW50ZXJuYWwgSlNPTi1SUEMgZXJyb3IuJyxcbiAgICB9LFxuICAgICctMzIwMDAnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTE0NzQnLFxuICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBpbnB1dC4nLFxuICAgIH0sXG4gICAgJy0zMjAwMSc6IHtcbiAgICAgICAgc3RhbmRhcmQ6ICdFSVAtMTQ3NCcsXG4gICAgICAgIG1lc3NhZ2U6ICdSZXNvdXJjZSBub3QgZm91bmQuJyxcbiAgICB9LFxuICAgICctMzIwMDInOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTE0NzQnLFxuICAgICAgICBtZXNzYWdlOiAnUmVzb3VyY2UgdW5hdmFpbGFibGUuJyxcbiAgICB9LFxuICAgICctMzIwMDMnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTE0NzQnLFxuICAgICAgICBtZXNzYWdlOiAnVHJhbnNhY3Rpb24gcmVqZWN0ZWQuJyxcbiAgICB9LFxuICAgICctMzIwMDQnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTE0NzQnLFxuICAgICAgICBtZXNzYWdlOiAnTWV0aG9kIG5vdCBzdXBwb3J0ZWQuJyxcbiAgICB9LFxuICAgICctMzIwMDUnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTE0NzQnLFxuICAgICAgICBtZXNzYWdlOiAnUmVxdWVzdCBsaW1pdCBleGNlZWRlZC4nLFxuICAgIH0sXG4gICAgJzQwMDEnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTExOTMnLFxuICAgICAgICBtZXNzYWdlOiAnVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdC4nLFxuICAgIH0sXG4gICAgJzQxMDAnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTExOTMnLFxuICAgICAgICBtZXNzYWdlOiAnVGhlIHJlcXVlc3RlZCBhY2NvdW50IGFuZC9vciBtZXRob2QgaGFzIG5vdCBiZWVuIGF1dGhvcml6ZWQgYnkgdGhlIHVzZXIuJyxcbiAgICB9LFxuICAgICc0MjAwJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xMTkzJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSByZXF1ZXN0ZWQgbWV0aG9kIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBFdGhlcmV1bSBwcm92aWRlci4nLFxuICAgIH0sXG4gICAgJzQ5MDAnOiB7XG4gICAgICAgIHN0YW5kYXJkOiAnRUlQLTExOTMnLFxuICAgICAgICBtZXNzYWdlOiAnVGhlIHByb3ZpZGVyIGlzIGRpc2Nvbm5lY3RlZCBmcm9tIGFsbCBjaGFpbnMuJyxcbiAgICB9LFxuICAgICc0OTAxJzoge1xuICAgICAgICBzdGFuZGFyZDogJ0VJUC0xMTkzJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZSBwcm92aWRlciBpcyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgc3BlY2lmaWVkIGNoYWluLicsXG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laWEp5YjNJdFkyOXVjM1JoYm5SekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMlZ5Y205eUxXTnZibk4wWVc1MGN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGMVFtRXNVVUZCUVN4VlFVRlZMRWRCUVdVN1NVRkRjRU1zUjBGQlJ5eEZRVUZGTzFGQlEwZ3NXVUZCV1N4RlFVRkZMRU5CUVVNc1MwRkJTenRSUVVOd1FpeG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRExFdEJRVXM3VVVGRGVFSXNiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5eExRVUZMTzFGQlF6TkNMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNTMEZCU3p0UlFVTXpRaXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRXRCUVVzN1VVRkRNVUlzWVVGQllTeEZRVUZGTEVOQlFVTXNTMEZCU3p0UlFVTnlRaXhMUVVGTExFVkJRVVVzUTBGQlF5eExRVUZMTzFGQlEySXNZMEZCWXl4RlFVRkZMRU5CUVVNc1MwRkJTenRSUVVOMFFpeGpRVUZqTEVWQlFVVXNRMEZCUXl4TFFVRkxPMUZCUTNSQ0xHRkJRV0VzUlVGQlJTeERRVUZETEV0QlFVczdVVUZEY2tJc1VVRkJVU3hGUVVGRkxFTkJRVU1zUzBGQlN6dExRVU5xUWp0SlFVTkVMRkZCUVZFc1JVRkJSVHRSUVVOU0xHMUNRVUZ0UWl4RlFVRkZMRWxCUVVrN1VVRkRla0lzV1VGQldTeEZRVUZGTEVsQlFVazdVVUZEYkVJc2FVSkJRV2xDTEVWQlFVVXNTVUZCU1R0UlFVTjJRaXhaUVVGWkxFVkJRVVVzU1VGQlNUdFJRVU5zUWl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTzB0QlEzaENPME5CUTBZc1EwRkJRenRCUVVWWExGRkJRVUVzVjBGQlZ5eEhRVUZITzBsQlEzcENMRkZCUVZFc1JVRkJSVHRSUVVOU0xGRkJRVkVzUlVGQlJTeGpRVUZqTzFGQlEzaENMRTlCUVU4c1JVRkJSU3gxUjBGQmRVYzdTMEZEYWtnN1NVRkRSQ3hSUVVGUkxFVkJRVVU3VVVGRFVpeFJRVUZSTEVWQlFVVXNZMEZCWXp0UlFVTjRRaXhQUVVGUExFVkJRVVVzT0VOQlFUaERPMHRCUTNoRU8wbEJRMFFzVVVGQlVTeEZRVUZGTzFGQlExSXNVVUZCVVN4RlFVRkZMR05CUVdNN1VVRkRlRUlzVDBGQlR5eEZRVUZGTEN0RFFVRXJRenRMUVVONlJEdEpRVU5FTEZGQlFWRXNSVUZCUlR0UlFVTlNMRkZCUVZFc1JVRkJSU3hqUVVGak8xRkJRM2hDTEU5QlFVOHNSVUZCUlN3NFFrRkJPRUk3UzBGRGVFTTdTVUZEUkN4UlFVRlJMRVZCUVVVN1VVRkRVaXhSUVVGUkxFVkJRVVVzWTBGQll6dFJRVU40UWl4UFFVRlBMRVZCUVVVc01FSkJRVEJDTzB0QlEzQkRPMGxCUTBRc1VVRkJVU3hGUVVGRk8xRkJRMUlzVVVGQlVTeEZRVUZGTEZWQlFWVTdVVUZEY0VJc1QwRkJUeXhGUVVGRkxHZENRVUZuUWp0TFFVTXhRanRKUVVORUxGRkJRVkVzUlVGQlJUdFJRVU5TTEZGQlFWRXNSVUZCUlN4VlFVRlZPMUZCUTNCQ0xFOUJRVThzUlVGQlJTeHhRa0ZCY1VJN1MwRkRMMEk3U1VGRFJDeFJRVUZSTEVWQlFVVTdVVUZEVWl4UlFVRlJMRVZCUVVVc1ZVRkJWVHRSUVVOd1FpeFBRVUZQTEVWQlFVVXNkVUpCUVhWQ08wdEJRMnBETzBsQlEwUXNVVUZCVVN4RlFVRkZPMUZCUTFJc1VVRkJVU3hGUVVGRkxGVkJRVlU3VVVGRGNFSXNUMEZCVHl4RlFVRkZMSFZDUVVGMVFqdExRVU5xUXp0SlFVTkVMRkZCUVZFc1JVRkJSVHRSUVVOU0xGRkJRVkVzUlVGQlJTeFZRVUZWTzFGQlEzQkNMRTlCUVU4c1JVRkJSU3gxUWtGQmRVSTdTMEZEYWtNN1NVRkRSQ3hSUVVGUkxFVkJRVVU3VVVGRFVpeFJRVUZSTEVWQlFVVXNWVUZCVlR0UlFVTndRaXhQUVVGUExFVkJRVVVzZVVKQlFYbENPMHRCUTI1RE8wbEJRMFFzVFVGQlRTeEZRVUZGTzFGQlEwNHNVVUZCVVN4RlFVRkZMRlZCUVZVN1VVRkRjRUlzVDBGQlR5eEZRVUZGTERSQ1FVRTBRanRMUVVOMFF6dEpRVU5FTEUxQlFVMHNSVUZCUlR0UlFVTk9MRkZCUVZFc1JVRkJSU3hWUVVGVk8xRkJRM0JDTEU5QlFVOHNSVUZCUlN3d1JVRkJNRVU3UzBGRGNFWTdTVUZEUkN4TlFVRk5MRVZCUVVVN1VVRkRUaXhSUVVGUkxFVkJRVVVzVlVGQlZUdFJRVU53UWl4UFFVRlBMRVZCUVVVc2EwVkJRV3RGTzB0QlF6VkZPMGxCUTBRc1RVRkJUU3hGUVVGRk8xRkJRMDRzVVVGQlVTeEZRVUZGTEZWQlFWVTdVVUZEY0VJc1QwRkJUeXhGUVVGRkxDdERRVUVyUXp0TFFVTjZSRHRKUVVORUxFMUJRVTBzUlVGQlJUdFJRVU5PTEZGQlFWRXNSVUZCUlN4VlFVRlZPMUZCUTNCQ0xFOUJRVThzUlVGQlJTeDNSRUZCZDBRN1MwRkRiRVU3UTBGRFJpeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ldGhFcnJvcnMgPSB2b2lkIDA7XG5jb25zdCBjbGFzc2VzXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuY29uc3QgZXJyb3JfY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9lcnJvci1jb25zdGFudHNcIik7XG5leHBvcnRzLmV0aEVycm9ycyA9IHtcbiAgICBycGM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIEpTT04gUlBDIDIuMCBQYXJzZSAoLTMyNzAwKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHBhcnNlOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMucGFyc2UsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBKU09OIFJQQyAyLjAgSW52YWxpZCBSZXF1ZXN0ICgtMzI2MDApIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgaW52YWxpZFJlcXVlc3Q6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5pbnZhbGlkUmVxdWVzdCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIEpTT04gUlBDIDIuMCBJbnZhbGlkIFBhcmFtcyAoLTMyNjAyKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGludmFsaWRQYXJhbXM6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5pbnZhbGlkUGFyYW1zLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgSlNPTiBSUEMgMi4wIE1ldGhvZCBOb3QgRm91bmQgKC0zMjYwMSkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBtZXRob2ROb3RGb3VuZDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLm1ldGhvZE5vdEZvdW5kLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgSlNPTiBSUEMgMi4wIEludGVybmFsICgtMzI2MDMpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgaW50ZXJuYWw6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5pbnRlcm5hbCwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIEpTT04gUlBDIDIuMCBTZXJ2ZXIgZXJyb3IuXG4gICAgICAgICAqIFBlcm1pdHMgaW50ZWdlciBlcnJvciBjb2RlcyBpbiB0aGUgWyAtMzIwOTkgPD0gLTMyMDA1IF0gcmFuZ2UuXG4gICAgICAgICAqIENvZGVzIC0zMjAwMCB0aHJvdWdoIC0zMjAwNCBhcmUgcmVzZXJ2ZWQgYnkgRUlQLTE0NzQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXJ2ZXI6IChvcHRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdHMgfHwgdHlwZW9mIG9wdHMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob3B0cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V0aGVyZXVtIFJQQyBTZXJ2ZXIgZXJyb3JzIG11c3QgcHJvdmlkZSBzaW5nbGUgb2JqZWN0IGFyZ3VtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBvcHRzO1xuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpIHx8IGNvZGUgPiAtMzIwMDUgfHwgY29kZSA8IC0zMjA5OSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCJjb2RlXCIgbXVzdCBiZSBhbiBpbnRlZ2VyIHN1Y2ggdGhhdDogLTMyMDk5IDw9IGNvZGUgPD0gLTMyMDA1Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RXRoSnNvblJwY0Vycm9yKGNvZGUsIG9wdHMpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIEpTT04gUlBDIEludmFsaWQgSW5wdXQgKC0zMjAwMCkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBpbnZhbGlkSW5wdXQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5pbnZhbGlkSW5wdXQsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gSlNPTiBSUEMgUmVzb3VyY2UgTm90IEZvdW5kICgtMzIwMDEpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVzb3VyY2VOb3RGb3VuZDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLnJlc291cmNlTm90Rm91bmQsIGFyZyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gSlNPTiBSUEMgUmVzb3VyY2UgVW5hdmFpbGFibGUgKC0zMjAwMikgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZVVuYXZhaWxhYmxlOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMucmVzb3VyY2VVbmF2YWlsYWJsZSwgYXJnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBKU09OIFJQQyBUcmFuc2FjdGlvbiBSZWplY3RlZCAoLTMyMDAzKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zYWN0aW9uUmVqZWN0ZWQ6IChhcmcpID0+IGdldEV0aEpzb25ScGNFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy50cmFuc2FjdGlvblJlamVjdGVkLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIEpTT04gUlBDIE1ldGhvZCBOb3QgU3VwcG9ydGVkICgtMzIwMDQpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgbWV0aG9kTm90U3VwcG9ydGVkOiAoYXJnKSA9PiBnZXRFdGhKc29uUnBjRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5ycGMubWV0aG9kTm90U3VwcG9ydGVkLCBhcmcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIEpTT04gUlBDIExpbWl0IEV4Y2VlZGVkICgtMzIwMDUpIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgbGltaXRFeGNlZWRlZDogKGFyZykgPT4gZ2V0RXRoSnNvblJwY0Vycm9yKGVycm9yX2NvbnN0YW50c18xLmVycm9yQ29kZXMucnBjLmxpbWl0RXhjZWVkZWQsIGFyZyksXG4gICAgfSxcbiAgICBwcm92aWRlcjoge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIFByb3ZpZGVyIFVzZXIgUmVqZWN0ZWQgUmVxdWVzdCAoNDAwMSkgZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyUmVqZWN0ZWRSZXF1ZXN0OiAoYXJnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RXRoUHJvdmlkZXJFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnByb3ZpZGVyLnVzZXJSZWplY3RlZFJlcXVlc3QsIGFyZyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gUHJvdmlkZXIgVW5hdXRob3JpemVkICg0MTAwKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHVuYXV0aG9yaXplZDogKGFyZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV0aFByb3ZpZGVyRXJyb3IoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2Rlcy5wcm92aWRlci51bmF1dGhvcml6ZWQsIGFyZyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYW4gRXRoZXJldW0gUHJvdmlkZXIgVW5zdXBwb3J0ZWQgTWV0aG9kICg0MjAwKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIHVuc3VwcG9ydGVkTWV0aG9kOiAoYXJnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RXRoUHJvdmlkZXJFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnByb3ZpZGVyLnVuc3VwcG9ydGVkTWV0aG9kLCBhcmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGFuIEV0aGVyZXVtIFByb3ZpZGVyIE5vdCBDb25uZWN0ZWQgKDQ5MDApIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzY29ubmVjdGVkOiAoYXJnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RXRoUHJvdmlkZXJFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnByb3ZpZGVyLmRpc2Nvbm5lY3RlZCwgYXJnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBFdGhlcmV1bSBQcm92aWRlciBDaGFpbiBOb3QgQ29ubmVjdGVkICg0OTAxKSBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGNoYWluRGlzY29ubmVjdGVkOiAoYXJnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RXRoUHJvdmlkZXJFcnJvcihlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnByb3ZpZGVyLmNoYWluRGlzY29ubmVjdGVkLCBhcmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgY3VzdG9tIEV0aGVyZXVtIFByb3ZpZGVyIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgY3VzdG9tOiAob3B0cykgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRzIHx8IHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9wdHMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdGhlcmV1bSBQcm92aWRlciBjdXN0b20gZXJyb3JzIG11c3QgcHJvdmlkZSBzaW5nbGUgb2JqZWN0IGFyZ3VtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBjb2RlLCBtZXNzYWdlLCBkYXRhIH0gPSBvcHRzO1xuICAgICAgICAgICAgaWYgKCFtZXNzYWdlIHx8IHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCJtZXNzYWdlXCIgbXVzdCBiZSBhIG5vbmVtcHR5IHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjbGFzc2VzXzEuRXRoZXJldW1Qcm92aWRlckVycm9yKGNvZGUsIG1lc3NhZ2UsIGRhdGEpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuLy8gSW50ZXJuYWxcbmZ1bmN0aW9uIGdldEV0aEpzb25ScGNFcnJvcihjb2RlLCBhcmcpIHtcbiAgICBjb25zdCBbbWVzc2FnZSwgZGF0YV0gPSBwYXJzZU9wdHMoYXJnKTtcbiAgICByZXR1cm4gbmV3IGNsYXNzZXNfMS5FdGhlcmV1bVJwY0Vycm9yKGNvZGUsIG1lc3NhZ2UgfHwgdXRpbHNfMS5nZXRNZXNzYWdlRnJvbUNvZGUoY29kZSksIGRhdGEpO1xufVxuZnVuY3Rpb24gZ2V0RXRoUHJvdmlkZXJFcnJvcihjb2RlLCBhcmcpIHtcbiAgICBjb25zdCBbbWVzc2FnZSwgZGF0YV0gPSBwYXJzZU9wdHMoYXJnKTtcbiAgICByZXR1cm4gbmV3IGNsYXNzZXNfMS5FdGhlcmV1bVByb3ZpZGVyRXJyb3IoY29kZSwgbWVzc2FnZSB8fCB1dGlsc18xLmdldE1lc3NhZ2VGcm9tQ29kZShjb2RlKSwgZGF0YSk7XG59XG5mdW5jdGlvbiBwYXJzZU9wdHMoYXJnKSB7XG4gICAgaWYgKGFyZykge1xuICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBbYXJnXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIGRhdGEgfSA9IGFyZztcbiAgICAgICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBzcGVjaWZ5IHN0cmluZyBtZXNzYWdlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFttZXNzYWdlIHx8IHVuZGVmaW5lZCwgZGF0YV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhKeWIzSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJWeWNtOXljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3gxUTBGQmIwVTdRVUZEY0VVc2JVTkJRVFpETzBGQlF6ZERMSFZFUVVFclF6dEJRV1ZzUXl4UlFVRkJMRk5CUVZNc1IwRkJSenRKUVVOMlFpeEhRVUZITEVWQlFVVTdVVUZGU0RzN1YwRkZSenRSUVVOSUxFdEJRVXNzUlVGQlJTeERRVUZKTEVkQlFYRkNMRVZCUVVVc1JVRkJSU3hEUVVGRExHdENRVUZyUWl4RFFVTnlSQ3cwUWtGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhEUVVNeFFqdFJRVVZFT3p0WFFVVkhPMUZCUTBnc1kwRkJZeXhGUVVGRkxFTkJRVWtzUjBGQmNVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc2EwSkJRV3RDTEVOQlF6bEVMRFJDUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlN4SFFVRkhMRU5CUTI1RE8xRkJSVVE3TzFkQlJVYzdVVUZEU0N4aFFVRmhMRVZCUVVVc1EwRkJTU3hIUVVGeFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4clFrRkJhMElzUTBGRE4wUXNORUpCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeEZRVUZGTEVkQlFVY3NRMEZEYkVNN1VVRkZSRHM3VjBGRlJ6dFJRVU5JTEdOQlFXTXNSVUZCUlN4RFFVRkpMRWRCUVhGQ0xFVkJRVVVzUlVGQlJTeERRVUZETEd0Q1FVRnJRaXhEUVVNNVJDdzBRa0ZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhqUVVGakxFVkJRVVVzUjBGQlJ5eERRVU51UXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzVVVGQlVTeEZRVUZGTEVOQlFVa3NSMEZCY1VJc1JVRkJSU3hGUVVGRkxFTkJRVU1zYTBKQlFXdENMRU5CUTNoRUxEUkNRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFTkJRemRDTzFGQlJVUTdPenM3VjBGSlJ6dFJRVU5JTEUxQlFVMHNSVUZCUlN4RFFVRkpMRWxCUVRKQ0xFVkJRVVVzUlVGQlJUdFpRVU42UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTTFSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEdsRlFVRnBSU3hEUVVGRExFTkJRVU03WVVGRGNFWTdXVUZEUkN4TlFVRk5MRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEzUkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRemRFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUTJJc0swUkJRU3RFTEVOQlEyaEZMRU5CUVVNN1lVRkRTRHRaUVVORUxFOUJRVThzYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaERMRU5CUVVNN1VVRkZSRHM3VjBGRlJ6dFJRVU5JTEZsQlFWa3NSVUZCUlN4RFFVRkpMRWRCUVhGQ0xFVkJRVVVzUlVGQlJTeERRVUZETEd0Q1FVRnJRaXhEUVVNMVJDdzBRa0ZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVU5xUXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzWjBKQlFXZENMRVZCUVVVc1EwRkJTU3hIUVVGeFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4clFrRkJhMElzUTBGRGFFVXNORUpCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1IwRkJSeXhEUVVOeVF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc2JVSkJRVzFDTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eHJRa0ZCYTBJc1EwRkRia1VzTkVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNSMEZCUnl4RFFVTjRRenRSUVVWRU96dFhRVVZITzFGQlEwZ3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlNTeEhRVUZ4UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhyUWtGQmEwSXNRMEZEYmtVc05FSkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUjBGQlJ5eERRVU40UXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzYTBKQlFXdENMRVZCUVVVc1EwRkJTU3hIUVVGeFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4clFrRkJhMElzUTBGRGJFVXNORUpCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1IwRkJSeXhEUVVOMlF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc1lVRkJZU3hGUVVGRkxFTkJRVWtzUjBGQmNVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc2EwSkJRV3RDTEVOQlF6ZEVMRFJDUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEdGQlFXRXNSVUZCUlN4SFFVRkhMRU5CUTJ4RE8wdEJRMFk3U1VGRlJDeFJRVUZSTEVWQlFVVTdVVUZGVWpzN1YwRkZSenRSUVVOSUxHMUNRVUZ0UWl4RlFVRkZMRU5CUVVrc1IwRkJjVUlzUlVGQlJTeEZRVUZGTzFsQlEyaEVMRTlCUVU4c2JVSkJRVzFDTEVOQlEzaENMRFJDUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFZEJRVWNzUTBGRE4wTXNRMEZCUXp0UlFVTktMRU5CUVVNN1VVRkZSRHM3VjBGRlJ6dFJRVU5JTEZsQlFWa3NSVUZCUlN4RFFVRkpMRWRCUVhGQ0xFVkJRVVVzUlVGQlJUdFpRVU42UXl4UFFVRlBMRzFDUVVGdFFpeERRVU40UWl3MFFrRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVWQlFVVXNSMEZCUnl4RFFVTjBReXhEUVVGRE8xRkJRMG9zUTBGQlF6dFJRVVZFT3p0WFFVVkhPMUZCUTBnc2FVSkJRV2xDTEVWQlFVVXNRMEZCU1N4SFFVRnhRaXhGUVVGRkxFVkJRVVU3V1VGRE9VTXNUMEZCVHl4dFFrRkJiVUlzUTBGRGVFSXNORUpCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1IwRkJSeXhEUVVNelF5eERRVUZETzFGQlEwb3NRMEZCUXp0UlFVVkVPenRYUVVWSE8xRkJRMGdzV1VGQldTeEZRVUZGTEVOQlFVa3NSMEZCY1VJc1JVRkJSU3hGUVVGRk8xbEJRM3BETEU5QlFVOHNiVUpCUVcxQ0xFTkJRM2hDTERSQ1FVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUlVGQlJTeEhRVUZITEVOQlEzUkRMRU5CUVVNN1VVRkRTaXhEUVVGRE8xRkJSVVE3TzFkQlJVYzdVVUZEU0N4cFFrRkJhVUlzUlVGQlJTeERRVUZKTEVkQlFYRkNMRVZCUVVVc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEcxQ1FVRnRRaXhEUVVONFFpdzBRa0ZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4SFFVRkhMRU5CUXpORExFTkJRVU03VVVGRFNpeERRVUZETzFGQlJVUTdPMWRCUlVjN1VVRkRTQ3hOUVVGTkxFVkJRVVVzUTBGQlNTeEpRVUYxUWl4RlFVRkZMRVZCUVVVN1dVRkRja01zU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRE5VUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UlVGQmMwVXNRMEZCUXl4RFFVRkRPMkZCUTNwR08xbEJSVVFzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzFsQlJYSkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NVVUZCVVN4RlFVRkZPMmRDUVVNelF5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVTmlMSEZEUVVGeFF5eERRVU4wUXl4RFFVRkRPMkZCUTBnN1dVRkRSQ3hQUVVGUExFbEJRVWtzSzBKQlFYRkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hEUVVGRE8wdEJRMFk3UTBGRFJpeERRVUZETzBGQlJVWXNWMEZCVnp0QlFVVllMRk5CUVZNc2EwSkJRV3RDTEVOQlFVa3NTVUZCV1N4RlFVRkZMRWRCUVhGQ08wbEJRMmhGTEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFOUJRVThzU1VGQlNTd3dRa0ZCWjBJc1EwRkRla0lzU1VGQlNTeEZRVU5LTEU5QlFVOHNTVUZCU1N3d1FrRkJhMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZEYmtNc1NVRkJTU3hEUVVOTUxFTkJRVU03UVVGRFNpeERRVUZETzBGQlJVUXNVMEZCVXl4dFFrRkJiVUlzUTBGQlNTeEpRVUZaTEVWQlFVVXNSMEZCY1VJN1NVRkRha1VzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZGtNc1QwRkJUeXhKUVVGSkxDdENRVUZ4UWl4RFFVTTVRaXhKUVVGSkxFVkJRMG9zVDBGQlR5eEpRVUZKTERCQ1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVU51UXl4SlFVRkpMRU5CUTB3c1EwRkJRenRCUVVOS0xFTkJRVU03UVVGRlJDeFRRVUZUTEZOQlFWTXNRMEZCU1N4SFFVRnhRanRKUVVONlF5eEpRVUZKTEVkQlFVY3NSVUZCUlR0UlFVTlFMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlF6TkNMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5rTzJGQlFVMHNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRM3BFTEUxQlFVMHNSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETzFsQlJUbENMRWxCUVVrc1QwRkJUeXhKUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZCUlR0blFrRkRNVU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzJGQlEycEVPMWxCUTBRc1QwRkJUeXhEUVVGRExFOUJRVThzU1VGQlNTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRja003UzBGRFJqdEpRVU5FTEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTFvc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldE1lc3NhZ2VGcm9tQ29kZSA9IGV4cG9ydHMuc2VyaWFsaXplRXJyb3IgPSBleHBvcnRzLkV0aGVyZXVtUHJvdmlkZXJFcnJvciA9IGV4cG9ydHMuRXRoZXJldW1ScGNFcnJvciA9IGV4cG9ydHMuZXRoRXJyb3JzID0gZXhwb3J0cy5lcnJvckNvZGVzID0gdm9pZCAwO1xuY29uc3QgY2xhc3Nlc18xID0gcmVxdWlyZShcIi4vY2xhc3Nlc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkV0aGVyZXVtUnBjRXJyb3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsYXNzZXNfMS5FdGhlcmV1bVJwY0Vycm9yOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRXRoZXJldW1Qcm92aWRlckVycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGFzc2VzXzEuRXRoZXJldW1Qcm92aWRlckVycm9yOyB9IH0pO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2VyaWFsaXplRXJyb3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWxzXzEuc2VyaWFsaXplRXJyb3I7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRNZXNzYWdlRnJvbUNvZGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWxzXzEuZ2V0TWVzc2FnZUZyb21Db2RlOyB9IH0pO1xuY29uc3QgZXJyb3JzXzEgPSByZXF1aXJlKFwiLi9lcnJvcnNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJldGhFcnJvcnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVycm9yc18xLmV0aEVycm9yczsgfSB9KTtcbmNvbnN0IGVycm9yX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4vZXJyb3ItY29uc3RhbnRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXJyb3JDb2Rlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JDb2RlczsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzZFVOQlFXOUZPMEZCVld4RkxHbEhRVlpQTERCQ1FVRm5RaXhQUVZWUU8wRkJRMmhDTEhOSFFWaDVRaXdyUWtGQmNVSXNUMEZYZWtJN1FVRldka0lzYlVOQlJXbENPMEZCVTJZc0swWkJWa0VzYzBKQlFXTXNUMEZWUVR0QlFVTmtMRzFIUVZoblFpd3dRa0ZCYTBJc1QwRlhhRUk3UVVGVWNFSXNjVU5CUVhGRE8wRkJTMjVETERCR1FVeFBMR3RDUVVGVExFOUJTMUE3UVVGS1dDeDFSRUZCSzBNN1FVRkhOME1zTWtaQlNFOHNORUpCUVZVc1QwRkhVQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNlcmlhbGl6ZUVycm9yID0gZXhwb3J0cy5pc1ZhbGlkQ29kZSA9IGV4cG9ydHMuZ2V0TWVzc2FnZUZyb21Db2RlID0gZXhwb3J0cy5KU09OX1JQQ19TRVJWRVJfRVJST1JfTUVTU0FHRSA9IHZvaWQgMDtcbmNvbnN0IGVycm9yX2NvbnN0YW50c18xID0gcmVxdWlyZShcIi4vZXJyb3ItY29uc3RhbnRzXCIpO1xuY29uc3QgY2xhc3Nlc18xID0gcmVxdWlyZShcIi4vY2xhc3Nlc1wiKTtcbmNvbnN0IEZBTExCQUNLX0VSUk9SX0NPREUgPSBlcnJvcl9jb25zdGFudHNfMS5lcnJvckNvZGVzLnJwYy5pbnRlcm5hbDtcbmNvbnN0IEZBTExCQUNLX01FU1NBR0UgPSAnVW5zcGVjaWZpZWQgZXJyb3IgbWVzc2FnZS4gVGhpcyBpcyBhIGJ1ZywgcGxlYXNlIHJlcG9ydCBpdC4nO1xuY29uc3QgRkFMTEJBQ0tfRVJST1IgPSB7XG4gICAgY29kZTogRkFMTEJBQ0tfRVJST1JfQ09ERSxcbiAgICBtZXNzYWdlOiBnZXRNZXNzYWdlRnJvbUNvZGUoRkFMTEJBQ0tfRVJST1JfQ09ERSksXG59O1xuZXhwb3J0cy5KU09OX1JQQ19TRVJWRVJfRVJST1JfTUVTU0FHRSA9ICdVbnNwZWNpZmllZCBzZXJ2ZXIgZXJyb3IuJztcbi8qKlxuICogR2V0cyB0aGUgbWVzc2FnZSBmb3IgYSBnaXZlbiBjb2RlLCBvciBhIGZhbGxiYWNrIG1lc3NhZ2UgaWYgdGhlIGNvZGUgaGFzXG4gKiBubyBjb3JyZXNwb25kaW5nIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGdldE1lc3NhZ2VGcm9tQ29kZShjb2RlLCBmYWxsYmFja01lc3NhZ2UgPSBGQUxMQkFDS19NRVNTQUdFKSB7XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY29kZSkpIHtcbiAgICAgICAgY29uc3QgY29kZVN0cmluZyA9IGNvZGUudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKGhhc0tleShlcnJvcl9jb25zdGFudHNfMS5lcnJvclZhbHVlcywgY29kZVN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcl9jb25zdGFudHNfMS5lcnJvclZhbHVlc1tjb2RlU3RyaW5nXS5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0pzb25ScGNTZXJ2ZXJFcnJvcihjb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuSlNPTl9SUENfU0VSVkVSX0VSUk9SX01FU1NBR0U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbGxiYWNrTWVzc2FnZTtcbn1cbmV4cG9ydHMuZ2V0TWVzc2FnZUZyb21Db2RlID0gZ2V0TWVzc2FnZUZyb21Db2RlO1xuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGdpdmVuIGNvZGUgaXMgdmFsaWQuXG4gKiBBIGNvZGUgaXMgb25seSB2YWxpZCBpZiBpdCBoYXMgYSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQ29kZShjb2RlKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY29kZVN0cmluZyA9IGNvZGUudG9TdHJpbmcoKTtcbiAgICBpZiAoZXJyb3JfY29uc3RhbnRzXzEuZXJyb3JWYWx1ZXNbY29kZVN0cmluZ10pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpc0pzb25ScGNTZXJ2ZXJFcnJvcihjb2RlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc1ZhbGlkQ29kZSA9IGlzVmFsaWRDb2RlO1xuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBlcnJvciB0byBhbiBFdGhlcmV1bSBKU09OIFJQQy1jb21wYXRpYmxlIGVycm9yIG9iamVjdC5cbiAqIE1lcmVseSBjb3BpZXMgdGhlIGdpdmVuIGVycm9yJ3MgdmFsdWVzIGlmIGl0IGlzIGFscmVhZHkgY29tcGF0aWJsZS5cbiAqIElmIHRoZSBnaXZlbiBlcnJvciBpcyBub3QgZnVsbHkgY29tcGF0aWJsZSwgaXQgd2lsbCBiZSBwcmVzZXJ2ZWQgb24gdGhlXG4gKiByZXR1cm5lZCBvYmplY3QncyBkYXRhLm9yaWdpbmFsRXJyb3IgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIHNlcmlhbGl6ZUVycm9yKGVycm9yLCB7IGZhbGxiYWNrRXJyb3IgPSBGQUxMQkFDS19FUlJPUiwgc2hvdWxkSW5jbHVkZVN0YWNrID0gZmFsc2UsIH0gPSB7fSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKCFmYWxsYmFja0Vycm9yIHx8XG4gICAgICAgICFOdW1iZXIuaXNJbnRlZ2VyKGZhbGxiYWNrRXJyb3IuY29kZSkgfHxcbiAgICAgICAgdHlwZW9mIGZhbGxiYWNrRXJyb3IubWVzc2FnZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgZmFsbGJhY2sgZXJyb3Igd2l0aCBpbnRlZ2VyIG51bWJlciBjb2RlIGFuZCBzdHJpbmcgbWVzc2FnZS4nKTtcbiAgICB9XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgY2xhc3Nlc18xLkV0aGVyZXVtUnBjRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yLnNlcmlhbGl6ZSgpO1xuICAgIH1cbiAgICBjb25zdCBzZXJpYWxpemVkID0ge307XG4gICAgaWYgKGVycm9yICYmXG4gICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoZXJyb3IpICYmXG4gICAgICAgIGhhc0tleShlcnJvciwgJ2NvZGUnKSAmJlxuICAgICAgICBpc1ZhbGlkQ29kZShlcnJvci5jb2RlKSkge1xuICAgICAgICBjb25zdCBfZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgc2VyaWFsaXplZC5jb2RlID0gX2Vycm9yLmNvZGU7XG4gICAgICAgIGlmIChfZXJyb3IubWVzc2FnZSAmJiB0eXBlb2YgX2Vycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkLm1lc3NhZ2UgPSBfZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChoYXNLZXkoX2Vycm9yLCAnZGF0YScpKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZC5kYXRhID0gX2Vycm9yLmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkLm1lc3NhZ2UgPSBnZXRNZXNzYWdlRnJvbUNvZGUoc2VyaWFsaXplZC5jb2RlKTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQuZGF0YSA9IHsgb3JpZ2luYWxFcnJvcjogYXNzaWduT3JpZ2luYWxFcnJvcihlcnJvcikgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZC5jb2RlID0gZmFsbGJhY2tFcnJvci5jb2RlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gKF9hID0gZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlO1xuICAgICAgICBzZXJpYWxpemVkLm1lc3NhZ2UgPSAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gbWVzc2FnZVxuICAgICAgICAgICAgOiBmYWxsYmFja0Vycm9yLm1lc3NhZ2UpO1xuICAgICAgICBzZXJpYWxpemVkLmRhdGEgPSB7IG9yaWdpbmFsRXJyb3I6IGFzc2lnbk9yaWdpbmFsRXJyb3IoZXJyb3IpIH07XG4gICAgfVxuICAgIGNvbnN0IHN0YWNrID0gKF9iID0gZXJyb3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdGFjaztcbiAgICBpZiAoc2hvdWxkSW5jbHVkZVN0YWNrICYmIGVycm9yICYmIHN0YWNrICYmIHR5cGVvZiBzdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2VyaWFsaXplZC5zdGFjayA9IHN0YWNrO1xuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbn1cbmV4cG9ydHMuc2VyaWFsaXplRXJyb3IgPSBzZXJpYWxpemVFcnJvcjtcbi8vIEludGVybmFsXG5mdW5jdGlvbiBpc0pzb25ScGNTZXJ2ZXJFcnJvcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPj0gLTMyMDk5ICYmIGNvZGUgPD0gLTMyMDAwO1xufVxuZnVuY3Rpb24gYXNzaWduT3JpZ2luYWxFcnJvcihlcnJvcikge1xuICAgIGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGVycm9yKSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG59XG5mdW5jdGlvbiBoYXNLZXkob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmRYUnBiSE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzZFVSQlFUUkVPMEZCUXpWRUxIVkRRVUY1UlR0QlFVVjZSU3hOUVVGTkxHMUNRVUZ0UWl4SFFVRkhMRFJDUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXp0QlFVTndSQ3hOUVVGTkxHZENRVUZuUWl4SFFVRkhMRFpFUVVFMlJDeERRVUZETzBGQlEzWkdMRTFCUVUwc1kwRkJZeXhIUVVFclFqdEpRVU5xUkN4SlFVRkpMRVZCUVVVc2JVSkJRVzFDTzBsQlEzcENMRTlCUVU4c1JVRkJSU3hyUWtGQmEwSXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dERRVU5xUkN4RFFVRkRPMEZCUlZjc1VVRkJRU3cyUWtGQk5rSXNSMEZCUnl3eVFrRkJNa0lzUTBGQlF6dEJRVWw2UlRzN08wZEJSMGM3UVVGRFNDeFRRVUZuUWl4clFrRkJhMElzUTBGRGFFTXNTVUZCV1N4RlFVTmFMR3RDUVVFd1FpeG5Ra0ZCWjBJN1NVRkZNVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xRkJRekZDTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVZ1UXl4SlFVRkpMRTFCUVUwc1EwRkJReXcyUWtGQlZ5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkZPMWxCUTI1RExFOUJRVThzTmtKQlFWY3NRMEZCUXl4VlFVRXlRaXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3h2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNNVFpeFBRVUZQTEhGRFFVRTJRaXhEUVVGRE8xTkJRM1JETzB0QlEwWTdTVUZEUkN4UFFVRlBMR1ZCUVdVc1EwRkJRenRCUVVONlFpeERRVUZETzBGQlprUXNaMFJCWlVNN1FVRkZSRHM3TzBkQlIwYzdRVUZEU0N4VFFVRm5RaXhYUVVGWExFTkJRVU1zU1VGQldUdEpRVU4wUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0UlFVTXpRaXhQUVVGUExFdEJRVXNzUTBGQlF6dExRVU5rTzBsQlJVUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEyNURMRWxCUVVrc05rSkJRVmNzUTBGQlF5eFZRVUV5UWl4RFFVRkRMRVZCUVVVN1VVRkROVU1zVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWp0SlFVVkVMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1VVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWp0SlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wRkJRMllzUTBGQlF6dEJRV1JFTEd0RFFXTkRPMEZCUlVRN096czdPMGRCUzBjN1FVRkRTQ3hUUVVGblFpeGpRVUZqTEVOQlF6VkNMRXRCUVdNc1JVRkRaQ3hGUVVORkxHRkJRV0VzUjBGQlJ5eGpRVUZqTEVWQlF6bENMR3RDUVVGclFpeEhRVUZITEV0QlFVc3NSMEZETTBJc1IwRkJSeXhGUVVGRk96dEpRVWRPTEVsQlEwVXNRMEZCUXl4aFFVRmhPMUZCUTJRc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRja01zVDBGQlR5eGhRVUZoTEVOQlFVTXNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkRla003VVVGRFFTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVTmlMREJGUVVFd1JTeERRVU16UlN4RFFVRkRPMHRCUTBnN1NVRkZSQ3hKUVVGSkxFdEJRVXNzV1VGQldTd3dRa0ZCWjBJc1JVRkJSVHRSUVVOeVF5eFBRVUZQTEV0QlFVc3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRMUVVNeFFqdEpRVVZFTEUxQlFVMHNWVUZCVlN4SFFVRjNReXhGUVVGRkxFTkJRVU03U1VGRk0wUXNTVUZEUlN4TFFVRkxPMUZCUTB3c1QwRkJUeXhMUVVGTExFdEJRVXNzVVVGQlVUdFJRVU42UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEzSkNMRTFCUVUwc1EwRkJReXhMUVVGblF5eEZRVUZGTEUxQlFVMHNRMEZCUXp0UlFVTm9SQ3hYUVVGWExFTkJRVVVzUzBGQmIwTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRka1E3VVVGRFFTeE5RVUZOTEUxQlFVMHNSMEZCUnl4TFFVRTBReXhEUVVGRE8xRkJRelZFTEZWQlFWVXNRMEZCUXl4SlFVRkpMRWRCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dFJRVVU1UWl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFbEJRVWtzVDBGQlR5eE5RVUZOTEVOQlFVTXNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVONFJDeFZRVUZWTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU03V1VGRmNFTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTXhRaXhWUVVGVkxFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNN1lVRkRMMEk3VTBGRFJqdGhRVUZOTzFsQlEwd3NWVUZCVlN4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNRMEZEY0VNc1ZVRkJlVU1zUTBGQlF5eEpRVUZKTEVOQlEyaEVMRU5CUVVNN1dVRkZSaXhWUVVGVkxFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVXNZVUZCWVN4RlFVRkZMRzFDUVVGdFFpeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNN1UwRkRha1U3UzBGRFJqdFRRVUZOTzFGQlEwd3NWVUZCVlN4RFFVRkRMRWxCUVVrc1IwRkJSeXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETzFGQlJYSkRMRTFCUVUwc1QwRkJUeXhUUVVGSkxFdEJRV0VzTUVOQlFVVXNUMEZCVHl4RFFVRkRPMUZCUlhoRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZEYmtJc1QwRkJUeXhKUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZGQlFWRTdXVUZEY0VNc1EwRkJReXhEUVVGRExFOUJRVTg3V1VGRFZDeERRVUZETEVOQlFVTXNZVUZCWVN4RFFVRkRMRTlCUVU4c1EwRkRNVUlzUTBGQlF6dFJRVU5HTEZWQlFWVXNRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSU3hoUVVGaExFVkJRVVVzYlVKQlFXMUNMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF6dExRVU5xUlR0SlFVVkVMRTFCUVUwc1MwRkJTeXhUUVVGSkxFdEJRV0VzTUVOQlFVVXNTMEZCU3l4RFFVRkRPMGxCUlhCRExFbEJRVWtzYTBKQlFXdENMRWxCUVVrc1MwRkJTeXhKUVVGSkxFdEJRVXNzU1VGQlNTeFBRVUZQTEV0QlFVc3NTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRja1VzVlVGQlZTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRNVUk3U1VGRFJDeFBRVUZQTEZWQlFYZERMRU5CUVVNN1FVRkRiRVFzUTBGQlF6dEJRV3hGUkN4M1EwRnJSVU03UVVGRlJDeFhRVUZYTzBGQlJWZ3NVMEZCVXl4dlFrRkJiMElzUTBGQlF5eEpRVUZaTzBsQlEzaERMRTlCUVU4c1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRCUVVNeFF5eERRVUZETzBGQlJVUXNVMEZCVXl4dFFrRkJiVUlzUTBGQlF5eExRVUZqTzBsQlEzcERMRWxCUVVrc1MwRkJTeXhKUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdVVUZETDBRc1QwRkJUeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVOcVF6dEpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMEZCUTJZc1EwRkJRenRCUVVWRUxGTkJRVk1zVFVGQlRTeERRVUZETEVkQlFUUkNMRVZCUVVVc1IwRkJWenRKUVVOMlJDeFBRVUZQTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRlRVFzUTBGQlF5SjkiLCJtb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuc3RyaW5naWZ5LmRlZmF1bHQgPSBzdHJpbmdpZnlcbnN0cmluZ2lmeS5zdGFibGUgPSBkZXRlcm1pbmlzdGljU3RyaW5naWZ5XG5zdHJpbmdpZnkuc3RhYmxlU3RyaW5naWZ5ID0gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeVxuXG52YXIgTElNSVRfUkVQTEFDRV9OT0RFID0gJ1suLi5dJ1xudmFyIENJUkNVTEFSX1JFUExBQ0VfTk9ERSA9ICdbQ2lyY3VsYXJdJ1xuXG52YXIgYXJyID0gW11cbnZhciByZXBsYWNlclN0YWNrID0gW11cblxuZnVuY3Rpb24gZGVmYXVsdE9wdGlvbnMgKCkge1xuICByZXR1cm4ge1xuICAgIGRlcHRoTGltaXQ6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgIGVkZ2VzTGltaXQ6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIH1cbn1cblxuLy8gUmVndWxhciBzdHJpbmdpZnlcbmZ1bmN0aW9uIHN0cmluZ2lmeSAob2JqLCByZXBsYWNlciwgc3BhY2VyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnMoKVxuICB9XG5cbiAgZGVjaXJjKG9iaiwgJycsIDAsIFtdLCB1bmRlZmluZWQsIDAsIG9wdGlvbnMpXG4gIHZhciByZXNcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZXJTdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIHNwYWNlcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkob2JqLCByZXBsYWNlR2V0dGVyVmFsdWVzKHJlcGxhY2VyKSwgc3BhY2VyKVxuICAgIH1cbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSgnW3VuYWJsZSB0byBzZXJpYWxpemUsIGNpcmN1bGFyIHJlZmVyZW5jZSBpcyB0b28gY29tcGxleCB0byBhbmFseXplXScpXG4gIH0gZmluYWxseSB7XG4gICAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciBwYXJ0ID0gYXJyLnBvcCgpXG4gICAgICBpZiAocGFydC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRbMF0sIHBhcnRbMV0sIHBhcnRbM10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0WzBdW3BhcnRbMV1dID0gcGFydFsyXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHNldFJlcGxhY2UgKHJlcGxhY2UsIHZhbCwgaywgcGFyZW50KSB7XG4gIHZhciBwcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmVudCwgaylcbiAgaWYgKHByb3BlcnR5RGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9wZXJ0eURlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGFyZW50LCBrLCB7IHZhbHVlOiByZXBsYWNlIH0pXG4gICAgICBhcnIucHVzaChbcGFyZW50LCBrLCB2YWwsIHByb3BlcnR5RGVzY3JpcHRvcl0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcGxhY2VyU3RhY2sucHVzaChbdmFsLCBrLCByZXBsYWNlXSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50W2tdID0gcmVwbGFjZVxuICAgIGFyci5wdXNoKFtwYXJlbnQsIGssIHZhbF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjaXJjICh2YWwsIGssIGVkZ2VJbmRleCwgc3RhY2ssIHBhcmVudCwgZGVwdGgsIG9wdGlvbnMpIHtcbiAgZGVwdGggKz0gMVxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IHZhbCkge1xuICAgICAgICBzZXRSZXBsYWNlKENJUkNVTEFSX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBvcHRpb25zLmRlcHRoTGltaXQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBkZXB0aCA+IG9wdGlvbnMuZGVwdGhMaW1pdFxuICAgICkge1xuICAgICAgc2V0UmVwbGFjZShMSU1JVF9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9wdGlvbnMuZWRnZXNMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGVkZ2VJbmRleCArIDEgPiBvcHRpb25zLmVkZ2VzTGltaXRcbiAgICApIHtcbiAgICAgIHNldFJlcGxhY2UoTElNSVRfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsKVxuICAgIC8vIE9wdGltaXplIGZvciBBcnJheXMuIEJpZyBhcnJheXMgY291bGQga2lsbCB0aGUgcGVyZm9ybWFuY2Ugb3RoZXJ3aXNlIVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVjaXJjKHZhbFtpXSwgaSwgaSwgc3RhY2ssIHZhbCwgZGVwdGgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgZGVjaXJjKHZhbFtrZXldLCBrZXksIGksIHN0YWNrLCB2YWwsIGRlcHRoLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGFjay5wb3AoKVxuICB9XG59XG5cbi8vIFN0YWJsZS1zdHJpbmdpZnlcbmZ1bmN0aW9uIGNvbXBhcmVGdW5jdGlvbiAoYSwgYikge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMVxuICB9XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGRldGVybWluaXN0aWNTdHJpbmdpZnkgKG9iaiwgcmVwbGFjZXIsIHNwYWNlciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zKClcbiAgfVxuXG4gIHZhciB0bXAgPSBkZXRlcm1pbmlzdGljRGVjaXJjKG9iaiwgJycsIDAsIFtdLCB1bmRlZmluZWQsIDAsIG9wdGlvbnMpIHx8IG9ialxuICB2YXIgcmVzXG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2VyU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICByZXMgPSBKU09OLnN0cmluZ2lmeSh0bXAsIHJlcGxhY2VyLCBzcGFjZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KHRtcCwgcmVwbGFjZUdldHRlclZhbHVlcyhyZXBsYWNlciksIHNwYWNlcilcbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoJ1t1bmFibGUgdG8gc2VyaWFsaXplLCBjaXJjdWxhciByZWZlcmVuY2UgaXMgdG9vIGNvbXBsZXggdG8gYW5hbHl6ZV0nKVxuICB9IGZpbmFsbHkge1xuICAgIC8vIEVuc3VyZSB0aGF0IHdlIHJlc3RvcmUgdGhlIG9iamVjdCBhcyBpdCB3YXMuXG4gICAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciBwYXJ0ID0gYXJyLnBvcCgpXG4gICAgICBpZiAocGFydC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRbMF0sIHBhcnRbMV0sIHBhcnRbM10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0WzBdW3BhcnRbMV1dID0gcGFydFsyXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGRldGVybWluaXN0aWNEZWNpcmMgKHZhbCwgaywgZWRnZUluZGV4LCBzdGFjaywgcGFyZW50LCBkZXB0aCwgb3B0aW9ucykge1xuICBkZXB0aCArPSAxXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdGFja1tpXSA9PT0gdmFsKSB7XG4gICAgICAgIHNldFJlcGxhY2UoQ0lSQ1VMQVJfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9wdGlvbnMuZGVwdGhMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGRlcHRoID4gb3B0aW9ucy5kZXB0aExpbWl0XG4gICAgKSB7XG4gICAgICBzZXRSZXBsYWNlKExJTUlUX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygb3B0aW9ucy5lZGdlc0xpbWl0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgZWRnZUluZGV4ICsgMSA+IG9wdGlvbnMuZWRnZXNMaW1pdFxuICAgICkge1xuICAgICAgc2V0UmVwbGFjZShMSU1JVF9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWwpXG4gICAgLy8gT3B0aW1pemUgZm9yIEFycmF5cy4gQmlnIGFycmF5cyBjb3VsZCBraWxsIHRoZSBwZXJmb3JtYW5jZSBvdGhlcndpc2UhXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBkZXRlcm1pbmlzdGljRGVjaXJjKHZhbFtpXSwgaSwgaSwgc3RhY2ssIHZhbCwgZGVwdGgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSBvYmplY3QgaW4gdGhlIHJlcXVpcmVkIHdheVxuICAgICAgdmFyIHRtcCA9IHt9XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbCkuc29ydChjb21wYXJlRnVuY3Rpb24pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXVxuICAgICAgICBkZXRlcm1pbmlzdGljRGVjaXJjKHZhbFtrZXldLCBrZXksIGksIHN0YWNrLCB2YWwsIGRlcHRoLCBvcHRpb25zKVxuICAgICAgICB0bXBba2V5XSA9IHZhbFtrZXldXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXJyLnB1c2goW3BhcmVudCwgaywgdmFsXSlcbiAgICAgICAgcGFyZW50W2tdID0gdG1wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG1wXG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpXG4gIH1cbn1cblxuLy8gd3JhcHMgcmVwbGFjZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHZhbHVlcyB3ZSBjb3VsZG4ndCByZXBsYWNlXG4vLyBhbmQgbWFyayB0aGVtIGFzIHJlcGxhY2VkIHZhbHVlXG5mdW5jdGlvbiByZXBsYWNlR2V0dGVyVmFsdWVzIChyZXBsYWNlcikge1xuICByZXBsYWNlciA9XG4gICAgdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyByZXBsYWNlclxuICAgICAgOiBmdW5jdGlvbiAoaywgdikge1xuICAgICAgICByZXR1cm4gdlxuICAgICAgfVxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgaWYgKHJlcGxhY2VyU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXBsYWNlclN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcmVwbGFjZXJTdGFja1tpXVxuICAgICAgICBpZiAocGFydFsxXSA9PT0ga2V5ICYmIHBhcnRbMF0gPT09IHZhbCkge1xuICAgICAgICAgIHZhbCA9IHBhcnRbMl1cbiAgICAgICAgICByZXBsYWNlclN0YWNrLnNwbGljZShpLCAxKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWwpXG4gIH1cbn1cbiIsInZhciBqc29uID0gdHlwZW9mIEpTT04gIT09ICd1bmRlZmluZWQnID8gSlNPTiA6IHJlcXVpcmUoJ2pzb25pZnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSBvcHRzID0geyBjbXA6IG9wdHMgfTtcbiAgICB2YXIgc3BhY2UgPSBvcHRzLnNwYWNlIHx8ICcnO1xuICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSBzcGFjZSA9IEFycmF5KHNwYWNlKzEpLmpvaW4oJyAnKTtcbiAgICB2YXIgY3ljbGVzID0gKHR5cGVvZiBvcHRzLmN5Y2xlcyA9PT0gJ2Jvb2xlYW4nKSA/IG9wdHMuY3ljbGVzIDogZmFsc2U7XG4gICAgdmFyIHJlcGxhY2VyID0gb3B0cy5yZXBsYWNlciB8fCBmdW5jdGlvbihrZXksIHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuICAgIHZhciBjbXAgPSBvcHRzLmNtcCAmJiAoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYW9iaiA9IHsga2V5OiBhLCB2YWx1ZTogbm9kZVthXSB9O1xuICAgICAgICAgICAgICAgIHZhciBib2JqID0geyBrZXk6IGIsIHZhbHVlOiBub2RlW2JdIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGYoYW9iaiwgYm9iaik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH0pKG9wdHMuY21wKTtcblxuICAgIHZhciBzZWVuID0gW107XG4gICAgcmV0dXJuIChmdW5jdGlvbiBzdHJpbmdpZnkgKHBhcmVudCwga2V5LCBub2RlLCBsZXZlbCkge1xuICAgICAgICB2YXIgaW5kZW50ID0gc3BhY2UgPyAoJ1xcbicgKyBuZXcgQXJyYXkobGV2ZWwgKyAxKS5qb2luKHNwYWNlKSkgOiAnJztcbiAgICAgICAgdmFyIGNvbG9uU2VwYXJhdG9yID0gc3BhY2UgPyAnOiAnIDogJzonO1xuXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUudG9KU09OICYmIHR5cGVvZiBub2RlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUudG9KU09OKCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gcmVwbGFjZXIuY2FsbChwYXJlbnQsIGtleSwgbm9kZSk7XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcgfHwgbm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGpzb24uc3RyaW5naWZ5KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHN0cmluZ2lmeShub2RlLCBpLCBub2RlW2ldLCBsZXZlbCsxKSB8fCBqc29uLnN0cmluZ2lmeShudWxsKTtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChpbmRlbnQgKyBzcGFjZSArIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdbJyArIG91dC5qb2luKCcsJykgKyBpbmRlbnQgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2Vlbi5pbmRleE9mKG5vZGUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChjeWNsZXMpIHJldHVybiBqc29uLnN0cmluZ2lmeSgnX19jeWNsZV9fJyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBzZWVuLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhub2RlKS5zb3J0KGNtcCAmJiBjbXAobm9kZSkpO1xuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RyaW5naWZ5KG5vZGUsIGtleSwgbm9kZVtrZXldLCBsZXZlbCsxKTtcblxuICAgICAgICAgICAgICAgIGlmKCF2YWx1ZSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBqc29uLnN0cmluZ2lmeShrZXkpXG4gICAgICAgICAgICAgICAgICAgICsgY29sb25TZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2goaW5kZW50ICsgc3BhY2UgKyBrZXlWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWVuLnNwbGljZShzZWVuLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgcmV0dXJuICd7JyArIG91dC5qb2luKCcsJykgKyBpbmRlbnQgKyAnfSc7XG4gICAgICAgIH1cbiAgICB9KSh7ICcnOiBvYmogfSwgJycsIG9iaiwgMCk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5IHx8IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufTtcbiIsImV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2xpYi9wYXJzZScpO1xuZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2xpYi9zdHJpbmdpZnknKTtcbiIsInZhciBhdCwgLy8gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGNoYXJhY3RlclxuICAgIGNoLCAvLyBUaGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBlc2NhcGVlID0ge1xuICAgICAgICAnXCInOiAgJ1wiJyxcbiAgICAgICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgICAgICcvJzogICcvJyxcbiAgICAgICAgYjogICAgJ1xcYicsXG4gICAgICAgIGY6ICAgICdcXGYnLFxuICAgICAgICBuOiAgICAnXFxuJyxcbiAgICAgICAgcjogICAgJ1xccicsXG4gICAgICAgIHQ6ICAgICdcXHQnXG4gICAgfSxcbiAgICB0ZXh0LFxuXG4gICAgZXJyb3IgPSBmdW5jdGlvbiAobSkge1xuICAgICAgICAvLyBDYWxsIGVycm9yIHdoZW4gc29tZXRoaW5nIGlzIHdyb25nLlxuICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICBuYW1lOiAgICAnU3ludGF4RXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogbSxcbiAgICAgICAgICAgIGF0OiAgICAgIGF0LFxuICAgICAgICAgICAgdGV4dDogICAgdGV4dFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgbmV4dCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIC8vIElmIGEgYyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHZlcmlmeSB0aGF0IGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuICAgICAgICBpZiAoYyAmJiBjICE9PSBjaCkge1xuICAgICAgICAgICAgZXJyb3IoXCJFeHBlY3RlZCAnXCIgKyBjICsgXCInIGluc3RlYWQgb2YgJ1wiICsgY2ggKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBjaGFyYWN0ZXIuIFdoZW4gdGhlcmUgYXJlIG5vIG1vcmUgY2hhcmFjdGVycyxcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBlbXB0eSBzdHJpbmcuXG4gICAgICAgIFxuICAgICAgICBjaCA9IHRleHQuY2hhckF0KGF0KTtcbiAgICAgICAgYXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH0sXG4gICAgXG4gICAgbnVtYmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBQYXJzZSBhIG51bWJlciB2YWx1ZS5cbiAgICAgICAgdmFyIG51bWJlcixcbiAgICAgICAgICAgIHN0cmluZyA9ICcnO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNoID09PSAnLScpIHtcbiAgICAgICAgICAgIHN0cmluZyA9ICctJztcbiAgICAgICAgICAgIG5leHQoJy0nKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoY2ggPj0gJzAnICYmIGNoIDw9ICc5Jykge1xuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gJy4nO1xuICAgICAgICAgICAgd2hpbGUgKG5leHQoKSAmJiBjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA9PT0gJ2UnIHx8IGNoID09PSAnRScpIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGNoID49ICcwJyAmJiBjaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bWJlciA9ICtzdHJpbmc7XG4gICAgICAgIGlmICghaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICAgICAgZXJyb3IoXCJCYWQgbnVtYmVyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgc3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBQYXJzZSBhIHN0cmluZyB2YWx1ZS5cbiAgICAgICAgdmFyIGhleCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIHVmZmZmO1xuICAgICAgICBcbiAgICAgICAgLy8gV2hlbiBwYXJzaW5nIGZvciBzdHJpbmcgdmFsdWVzLCB3ZSBtdXN0IGxvb2sgZm9yIFwiIGFuZCBcXCBjaGFyYWN0ZXJzLlxuICAgICAgICBpZiAoY2ggPT09ICdcIicpIHtcbiAgICAgICAgICAgIHdoaWxlIChuZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1ZmZmZiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4ID0gcGFyc2VJbnQobmV4dCgpLCAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShoZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ZmZmZiA9IHVmZmZmICogMTYgKyBoZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1ZmZmZik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVzY2FwZWVbY2hdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IGVzY2FwZWVbY2hdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVycm9yKFwiQmFkIHN0cmluZ1wiKTtcbiAgICB9LFxuXG4gICAgd2hpdGUgPSBmdW5jdGlvbiAoKSB7XG5cbi8vIFNraXAgd2hpdGVzcGFjZS5cblxuICAgICAgICB3aGlsZSAoY2ggJiYgY2ggPD0gJyAnKSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd29yZCA9IGZ1bmN0aW9uICgpIHtcblxuLy8gdHJ1ZSwgZmFsc2UsIG9yIG51bGwuXG5cbiAgICAgICAgc3dpdGNoIChjaCkge1xuICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgIG5leHQoJ3QnKTtcbiAgICAgICAgICAgIG5leHQoJ3InKTtcbiAgICAgICAgICAgIG5leHQoJ3UnKTtcbiAgICAgICAgICAgIG5leHQoJ2UnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgIG5leHQoJ2YnKTtcbiAgICAgICAgICAgIG5leHQoJ2EnKTtcbiAgICAgICAgICAgIG5leHQoJ2wnKTtcbiAgICAgICAgICAgIG5leHQoJ3MnKTtcbiAgICAgICAgICAgIG5leHQoJ2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICBuZXh0KCduJyk7XG4gICAgICAgICAgICBuZXh0KCd1Jyk7XG4gICAgICAgICAgICBuZXh0KCdsJyk7XG4gICAgICAgICAgICBuZXh0KCdsJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgJ1wiICsgY2ggKyBcIidcIik7XG4gICAgfSxcblxuICAgIHZhbHVlLCAgLy8gUGxhY2UgaG9sZGVyIGZvciB0aGUgdmFsdWUgZnVuY3Rpb24uXG5cbiAgICBhcnJheSA9IGZ1bmN0aW9uICgpIHtcblxuLy8gUGFyc2UgYW4gYXJyYXkgdmFsdWUuXG5cbiAgICAgICAgdmFyIGFycmF5ID0gW107XG5cbiAgICAgICAgaWYgKGNoID09PSAnWycpIHtcbiAgICAgICAgICAgIG5leHQoJ1snKTtcbiAgICAgICAgICAgIHdoaXRlKCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICddJykge1xuICAgICAgICAgICAgICAgIG5leHQoJ10nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7ICAgLy8gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChjaCkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2godmFsdWUoKSk7XG4gICAgICAgICAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dCgnLCcpO1xuICAgICAgICAgICAgICAgIHdoaXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoXCJCYWQgYXJyYXlcIik7XG4gICAgfSxcblxuICAgIG9iamVjdCA9IGZ1bmN0aW9uICgpIHtcblxuLy8gUGFyc2UgYW4gb2JqZWN0IHZhbHVlLlxuXG4gICAgICAgIHZhciBrZXksXG4gICAgICAgICAgICBvYmplY3QgPSB7fTtcblxuICAgICAgICBpZiAoY2ggPT09ICd7Jykge1xuICAgICAgICAgICAgbmV4dCgneycpO1xuICAgICAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgbmV4dCgnfScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7ICAgLy8gZW1wdHkgb2JqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoY2gpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBzdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB3aGl0ZSgpO1xuICAgICAgICAgICAgICAgIG5leHQoJzonKTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdEdXBsaWNhdGUga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlKCk7XG4gICAgICAgICAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCd9Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQoJywnKTtcbiAgICAgICAgICAgICAgICB3aGl0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVycm9yKFwiQmFkIG9iamVjdFwiKTtcbiAgICB9O1xuXG52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcblxuLy8gUGFyc2UgYSBKU09OIHZhbHVlLiBJdCBjb3VsZCBiZSBhbiBvYmplY3QsIGFuIGFycmF5LCBhIHN0cmluZywgYSBudW1iZXIsXG4vLyBvciBhIHdvcmQuXG5cbiAgICB3aGl0ZSgpO1xuICAgIHN3aXRjaCAoY2gpIHtcbiAgICBjYXNlICd7JzpcbiAgICAgICAgcmV0dXJuIG9iamVjdCgpO1xuICAgIGNhc2UgJ1snOlxuICAgICAgICByZXR1cm4gYXJyYXkoKTtcbiAgICBjYXNlICdcIic6XG4gICAgICAgIHJldHVybiBzdHJpbmcoKTtcbiAgICBjYXNlICctJzpcbiAgICAgICAgcmV0dXJuIG51bWJlcigpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjaCA+PSAnMCcgJiYgY2ggPD0gJzknID8gbnVtYmVyKCkgOiB3b3JkKCk7XG4gICAgfVxufTtcblxuLy8gUmV0dXJuIHRoZSBqc29uX3BhcnNlIGZ1bmN0aW9uLiBJdCB3aWxsIGhhdmUgYWNjZXNzIHRvIGFsbCBvZiB0aGUgYWJvdmVcbi8vIGZ1bmN0aW9ucyBhbmQgdmFyaWFibGVzLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzb3VyY2UsIHJldml2ZXIpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIFxuICAgIHRleHQgPSBzb3VyY2U7XG4gICAgYXQgPSAwO1xuICAgIGNoID0gJyAnO1xuICAgIHJlc3VsdCA9IHZhbHVlKCk7XG4gICAgd2hpdGUoKTtcbiAgICBpZiAoY2gpIHtcbiAgICAgICAgZXJyb3IoXCJTeW50YXggZXJyb3JcIik7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLFxuICAgIC8vIHBhc3NpbmcgZWFjaCBuYW1lL3ZhbHVlIHBhaXIgdG8gdGhlIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlXG4gICAgLy8gdHJhbnNmb3JtYXRpb24sIHN0YXJ0aW5nIHdpdGggYSB0ZW1wb3Jhcnkgcm9vdCBvYmplY3QgdGhhdCBob2xkcyB0aGUgcmVzdWx0XG4gICAgLy8gaW4gYW4gZW1wdHkga2V5LiBJZiB0aGVyZSBpcyBub3QgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSBzaW1wbHkgcmV0dXJuIHRoZVxuICAgIC8vIHJlc3VsdC5cblxuICAgIHJldHVybiB0eXBlb2YgcmV2aXZlciA9PT0gJ2Z1bmN0aW9uJyA/IChmdW5jdGlvbiB3YWxrKGhvbGRlciwga2V5KSB7XG4gICAgICAgIHZhciBrLCB2LCB2YWx1ZSA9IGhvbGRlcltrZXldO1xuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgIH0oeycnOiByZXN1bHR9LCAnJykpIDogcmVzdWx0O1xufTtcbiIsInZhciBjeCA9IC9bXFx1MDAwMFxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgIGVzY2FwYWJsZSA9IC9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2csXG4gICAgZ2FwLFxuICAgIGluZGVudCxcbiAgICBtZXRhID0geyAgICAvLyB0YWJsZSBvZiBjaGFyYWN0ZXIgc3Vic3RpdHV0aW9uc1xuICAgICAgICAnXFxiJzogJ1xcXFxiJyxcbiAgICAgICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICAgICAnXFxmJzogJ1xcXFxmJyxcbiAgICAgICAgJ1xccic6ICdcXFxccicsXG4gICAgICAgICdcIicgOiAnXFxcXFwiJyxcbiAgICAgICAgJ1xcXFwnOiAnXFxcXFxcXFwnXG4gICAgfSxcbiAgICByZXA7XG5cbmZ1bmN0aW9uIHF1b3RlKHN0cmluZykge1xuICAgIC8vIElmIHRoZSBzdHJpbmcgY29udGFpbnMgbm8gY29udHJvbCBjaGFyYWN0ZXJzLCBubyBxdW90ZSBjaGFyYWN0ZXJzLCBhbmQgbm9cbiAgICAvLyBiYWNrc2xhc2ggY2hhcmFjdGVycywgdGhlbiB3ZSBjYW4gc2FmZWx5IHNsYXAgc29tZSBxdW90ZXMgYXJvdW5kIGl0LlxuICAgIC8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuICAgIC8vIHNlcXVlbmNlcy5cbiAgICBcbiAgICBlc2NhcGFibGUubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gZXNjYXBhYmxlLnRlc3Qoc3RyaW5nKSA/ICdcIicgKyBzdHJpbmcucmVwbGFjZShlc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBjID0gbWV0YVthXTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/IGMgOlxuICAgICAgICAgICAgJ1xcXFx1JyArICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgfSkgKyAnXCInIDogJ1wiJyArIHN0cmluZyArICdcIic7XG59XG5cbmZ1bmN0aW9uIHN0cihrZXksIGhvbGRlcikge1xuICAgIC8vIFByb2R1Y2UgYSBzdHJpbmcgZnJvbSBob2xkZXJba2V5XS5cbiAgICB2YXIgaSwgICAgICAgICAgLy8gVGhlIGxvb3AgY291bnRlci5cbiAgICAgICAgaywgICAgICAgICAgLy8gVGhlIG1lbWJlciBrZXkuXG4gICAgICAgIHYsICAgICAgICAgIC8vIFRoZSBtZW1iZXIgdmFsdWUuXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbWluZCA9IGdhcCxcbiAgICAgICAgcGFydGlhbCxcbiAgICAgICAgdmFsdWUgPSBob2xkZXJba2V5XTtcbiAgICBcbiAgICAvLyBJZiB0aGUgdmFsdWUgaGFzIGEgdG9KU09OIG1ldGhvZCwgY2FsbCBpdCB0byBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTihrZXkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiB3ZSB3ZXJlIGNhbGxlZCB3aXRoIGEgcmVwbGFjZXIgZnVuY3Rpb24sIHRoZW4gY2FsbCB0aGUgcmVwbGFjZXIgdG9cbiAgICAvLyBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cbiAgICBpZiAodHlwZW9mIHJlcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9IHJlcC5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFdoYXQgaGFwcGVucyBuZXh0IGRlcGVuZHMgb24gdGhlIHZhbHVlJ3MgdHlwZS5cbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgcmV0dXJuIHF1b3RlKHZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAvLyBKU09OIG51bWJlcnMgbXVzdCBiZSBmaW5pdGUuIEVuY29kZSBub24tZmluaXRlIG51bWJlcnMgYXMgbnVsbC5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogJ251bGwnO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNhc2UgJ251bGwnOlxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLiBOb3RlOlxuICAgICAgICAgICAgLy8gdHlwZW9mIG51bGwgZG9lcyBub3QgcHJvZHVjZSAnbnVsbCcuIFRoZSBjYXNlIGlzIGluY2x1ZGVkIGhlcmUgaW5cbiAgICAgICAgICAgIC8vIHRoZSByZW1vdGUgY2hhbmNlIHRoYXQgdGhpcyBnZXRzIGZpeGVkIHNvbWVkYXkuXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICdudWxsJztcbiAgICAgICAgICAgIGdhcCArPSBpbmRlbnQ7XG4gICAgICAgICAgICBwYXJ0aWFsID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFycmF5LmlzQXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFtpXSA9IHN0cihpLCB2YWx1ZSkgfHwgJ251bGwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBKb2luIGFsbCBvZiB0aGUgZWxlbWVudHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcywgYW5kXG4gICAgICAgICAgICAgICAgLy8gd3JhcCB0aGVtIGluIGJyYWNrZXRzLlxuICAgICAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICdbXScgOiBnYXAgP1xuICAgICAgICAgICAgICAgICAgICAnW1xcbicgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oJyxcXG4nICsgZ2FwKSArICdcXG4nICsgbWluZCArICddJyA6XG4gICAgICAgICAgICAgICAgICAgICdbJyArIHBhcnRpYWwuam9pbignLCcpICsgJ10nO1xuICAgICAgICAgICAgICAgIGdhcCA9IG1pbmQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElmIHRoZSByZXBsYWNlciBpcyBhbiBhcnJheSwgdXNlIGl0IHRvIHNlbGVjdCB0aGUgbWVtYmVycyB0byBiZVxuICAgICAgICAgICAgLy8gc3RyaW5naWZpZWQuXG4gICAgICAgICAgICBpZiAocmVwICYmIHR5cGVvZiByZXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IHJlcFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBrZXlzIGluIHRoZSBvYmplY3QuXG4gICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gc3RyKGssIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbC5wdXNoKHF1b3RlKGspICsgKGdhcCA/ICc6ICcgOiAnOicpICsgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gSm9pbiBhbGwgb2YgdGhlIG1lbWJlciB0ZXh0cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLFxuICAgICAgICAvLyBhbmQgd3JhcCB0aGVtIGluIGJyYWNlcy5cblxuICAgICAgICB2ID0gcGFydGlhbC5sZW5ndGggPT09IDAgPyAne30nIDogZ2FwID9cbiAgICAgICAgICAgICd7XFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ30nIDpcbiAgICAgICAgICAgICd7JyArIHBhcnRpYWwuam9pbignLCcpICsgJ30nO1xuICAgICAgICBnYXAgPSBtaW5kO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICB2YXIgaTtcbiAgICBnYXAgPSAnJztcbiAgICBpbmRlbnQgPSAnJztcbiAgICBcbiAgICAvLyBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCBtYWtlIGFuIGluZGVudCBzdHJpbmcgY29udGFpbmluZyB0aGF0XG4gICAgLy8gbWFueSBzcGFjZXMuXG4gICAgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNwYWNlOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluZGVudCArPSAnICc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIHN0cmluZywgaXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBpbmRlbnQgc3RyaW5nLlxuICAgIGVsc2UgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaW5kZW50ID0gc3BhY2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSByZXBsYWNlciwgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LlxuICAgIC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3IuXG4gICAgcmVwID0gcmVwbGFjZXI7XG4gICAgaWYgKHJlcGxhY2VyICYmIHR5cGVvZiByZXBsYWNlciAhPT0gJ2Z1bmN0aW9uJ1xuICAgICYmICh0eXBlb2YgcmVwbGFjZXIgIT09ICdvYmplY3QnIHx8IHR5cGVvZiByZXBsYWNlci5sZW5ndGggIT09ICdudW1iZXInKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04uc3RyaW5naWZ5Jyk7XG4gICAgfVxuICAgIFxuICAgIC8vIE1ha2UgYSBmYWtlIHJvb3Qgb2JqZWN0IGNvbnRhaW5pbmcgb3VyIHZhbHVlIHVuZGVyIHRoZSBrZXkgb2YgJycuXG4gICAgLy8gUmV0dXJuIHRoZSByZXN1bHQgb2Ygc3RyaW5naWZ5aW5nIHRoZSB2YWx1ZS5cbiAgICByZXR1cm4gc3RyKCcnLCB7Jyc6IHZhbHVlfSk7XG59O1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXZlbnRzXzEiLCJzYWZlQXBwbHkiLCJoYW5kbGVyIiwiY29udGV4dCIsImFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJlcnIiLCJzZXRUaW1lb3V0IiwiU2FmZUV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImVtaXQiLCJ0eXBlIiwiZG9FcnJvciIsImV2ZW50cyIsInRoaXMiLCJfZXZlbnRzIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJlciIsImxlbmd0aCIsIkVycm9yIiwibWVzc2FnZSIsImxlbiIsImxpc3RlbmVycyIsImFyciIsIm4iLCJjb3B5IiwiQXJyYXkiLCJpIiwiYXJyYXlDbG9uZSIsIkV0aGVyZXVtUHJvdmlkZXJFcnJvciIsIkV0aGVyZXVtUnBjRXJyb3IiLCJmYXN0X3NhZmVfc3RyaW5naWZ5XzEiLCJjb25zdHJ1Y3RvciIsImNvZGUiLCJkYXRhIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwic3VwZXIiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVkIiwic3RhY2siLCJ0b1N0cmluZyIsImRlZmF1bHQiLCJzdHJpbmdpZnlSZXBsYWNlciIsIl8iLCJpc1ZhbGlkRXRoUHJvdmlkZXJDb2RlIiwiZXJyb3JWYWx1ZXMiLCJlcnJvckNvZGVzIiwicnBjIiwiaW52YWxpZElucHV0IiwicmVzb3VyY2VOb3RGb3VuZCIsInJlc291cmNlVW5hdmFpbGFibGUiLCJ0cmFuc2FjdGlvblJlamVjdGVkIiwibWV0aG9kTm90U3VwcG9ydGVkIiwibGltaXRFeGNlZWRlZCIsInBhcnNlIiwiaW52YWxpZFJlcXVlc3QiLCJtZXRob2ROb3RGb3VuZCIsImludmFsaWRQYXJhbXMiLCJpbnRlcm5hbCIsInByb3ZpZGVyIiwidXNlclJlamVjdGVkUmVxdWVzdCIsInVuYXV0aG9yaXplZCIsInVuc3VwcG9ydGVkTWV0aG9kIiwiZGlzY29ubmVjdGVkIiwiY2hhaW5EaXNjb25uZWN0ZWQiLCJzdGFuZGFyZCIsImV0aEVycm9ycyIsImNsYXNzZXNfMSIsInV0aWxzXzEiLCJlcnJvcl9jb25zdGFudHNfMSIsImdldEV0aEpzb25ScGNFcnJvciIsImFyZyIsInBhcnNlT3B0cyIsImdldE1lc3NhZ2VGcm9tQ29kZSIsImdldEV0aFByb3ZpZGVyRXJyb3IiLCJpc0FycmF5Iiwic2VydmVyIiwib3B0cyIsImN1c3RvbSIsInNlcmlhbGl6ZUVycm9yIiwiZW51bWVyYWJsZSIsImdldCIsImVycm9yc18xIiwiaXNWYWxpZENvZGUiLCJKU09OX1JQQ19TRVJWRVJfRVJST1JfTUVTU0FHRSIsIkZBTExCQUNLX0VSUk9SX0NPREUiLCJGQUxMQkFDS19FUlJPUiIsImZhbGxiYWNrTWVzc2FnZSIsImNvZGVTdHJpbmciLCJoYXNLZXkiLCJpc0pzb25ScGNTZXJ2ZXJFcnJvciIsImFzc2lnbk9yaWdpbmFsRXJyb3IiLCJhc3NpZ24iLCJvYmoiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJmYWxsYmFja0Vycm9yIiwic2hvdWxkSW5jbHVkZVN0YWNrIiwiX2EiLCJfYiIsIl9lcnJvciIsIm9yaWdpbmFsRXJyb3IiLCJtb2R1bGUiLCJzdHJpbmdpZnkiLCJzdGFibGUiLCJkZXRlcm1pbmlzdGljU3RyaW5naWZ5Iiwic3RhYmxlU3RyaW5naWZ5IiwiTElNSVRfUkVQTEFDRV9OT0RFIiwiQ0lSQ1VMQVJfUkVQTEFDRV9OT0RFIiwicmVwbGFjZXJTdGFjayIsImRlZmF1bHRPcHRpb25zIiwiZGVwdGhMaW1pdCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJlZGdlc0xpbWl0IiwicmVwbGFjZXIiLCJzcGFjZXIiLCJvcHRpb25zIiwicmVzIiwiZGVjaXJjIiwiSlNPTiIsInJlcGxhY2VHZXR0ZXJWYWx1ZXMiLCJwYXJ0IiwicG9wIiwic2V0UmVwbGFjZSIsInJlcGxhY2UiLCJ2YWwiLCJrIiwicGFyZW50IiwicHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwicHVzaCIsImVkZ2VJbmRleCIsImRlcHRoIiwia2V5cyIsImNvbXBhcmVGdW5jdGlvbiIsImEiLCJiIiwidG1wIiwiZGV0ZXJtaW5pc3RpY0RlY2lyYyIsInRvSlNPTiIsInNvcnQiLCJ2Iiwic3BsaWNlIiwianNvbiIsImNtcCIsInNwYWNlIiwiam9pbiIsImN5Y2xlcyIsImYiLCJub2RlIiwiYW9iaiIsImJvYmoiLCJzZWVuIiwibGV2ZWwiLCJpbmRlbnQiLCJjb2xvblNlcGFyYXRvciIsIm91dCIsIml0ZW0iLCJpbmRleE9mIiwiVHlwZUVycm9yIiwib2JqZWN0S2V5cyIsImtleVZhbHVlIiwieCIsImhhcyIsImF0IiwiY2giLCJ0ZXh0IiwiZXNjYXBlZSIsInIiLCJ0IiwibSIsIm5hbWUiLCJuZXh0IiwiYyIsImNoYXJBdCIsIm51bWJlciIsInN0cmluZyIsImlzRmluaXRlIiwiaGV4IiwidWZmZmYiLCJwYXJzZUludCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIndoaXRlIiwib2JqZWN0IiwiYXJyYXkiLCJ3b3JkIiwic291cmNlIiwicmV2aXZlciIsInJlc3VsdCIsIndhbGsiLCJob2xkZXIiLCJnYXAiLCJyZXAiLCJlc2NhcGFibGUiLCJtZXRhIiwicXVvdGUiLCJsYXN0SW5kZXgiLCJ0ZXN0IiwiY2hhckNvZGVBdCIsInNsaWNlIiwic3RyIiwicGFydGlhbCIsIm1pbmQiXSwic291cmNlUm9vdCI6IiJ9