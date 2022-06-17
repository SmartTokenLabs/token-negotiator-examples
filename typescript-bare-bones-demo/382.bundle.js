(self.webpackChunktoken_overlay_website = self.webpackChunktoken_overlay_website || []).push([ [ 382 ], {
  19394: (r, t, e) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = e(17187);
    function i(r, t, e) {
      try {
        Reflect.apply(r, t, e);
      } catch (n) {
        setTimeout((() => {
          throw n;
        }));
      }
    }
    class o extends n.EventEmitter {
      emit(r, ...t) {
        let e = 'error' === r;
        const n = this._events;
        if (void 0 !== n) e = e && void 0 === n.error; else if (!e) return !1;
        if (e) {
          let r;
          if (t.length > 0 && ([r] = t), r instanceof Error) throw r;
          const e = new Error("Unhandled error." + (r ? ` (${r.message})` : ''));
          throw e.context = r, e;
        }
        const o = n[r];
        if (void 0 === o) return !1;
        if ('function' == typeof o) i(o, this, t); else {
          const r = o.length;
          const e = function(r) {
            const t = r.length;
            const e = new Array(t);
            for (let n = 0; n < t; n += 1) e[n] = r[n];
            return e;
          }(o);
          for (let n = 0; n < r; n += 1) i(e[n], this, t);
        }
        return !0;
      }
    }
    t.default = o;
  },
  4445: r => {
    r.exports = f, f.default = f, f.stable = s, f.stableStringify = s;
    var t = '[...]';
    var e = '[Circular]';
    var n = [];
    var i = [];
    function o() {
      return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
      };
    }
    function f(r, t, e, f) {
      var u;
      void 0 === f && (f = o()), a(r, '', 0, [], void 0, 0, f);
      try {
        u = 0 === i.length ? JSON.stringify(r, t, e) : JSON.stringify(r, p(t), e);
      } catch (s) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
      } finally {
        for (;0 !== n.length; ) {
          var c = n.pop();
          4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2];
        }
      }
      return u;
    }
    function u(r, t, e, o) {
      var f = Object.getOwnPropertyDescriptor(o, e);
      void 0 !== f.get ? f.configurable ? (Object.defineProperty(o, e, {
        value: r
      }), n.push([ o, e, t, f ])) : i.push([ t, e, r ]) : (o[e] = r, n.push([ o, e, t ]));
    }
    function a(r, n, i, o, f, c, s) {
      var l;
      if (c += 1, 'object' == typeof r && null !== r) {
        for (l = 0; l < o.length; l++) if (o[l] === r) return void u(e, r, n, f);
        if (void 0 !== s.depthLimit && c > s.depthLimit) return void u(t, r, n, f);
        if (void 0 !== s.edgesLimit && i + 1 > s.edgesLimit) return void u(t, r, n, f);
        if (o.push(r), Array.isArray(r)) for (l = 0; l < r.length; l++) a(r[l], l, l, o, r, c, s); else {
          var p = Object.keys(r);
          for (l = 0; l < p.length; l++) {
            var y = p[l];
            a(r[y], y, l, o, r, c, s);
          }
        }
        o.pop();
      }
    }
    function c(r, t) {
      return r < t ? -1 : r > t ? 1 : 0;
    }
    function s(r, t, e, f) {
      void 0 === f && (f = o());
      var u = l(r, '', 0, [], void 0, 0, f) || r;
      var a;
      try {
        a = 0 === i.length ? JSON.stringify(u, t, e) : JSON.stringify(u, p(t), e);
      } catch (s) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
      } finally {
        for (;0 !== n.length; ) {
          var c = n.pop();
          4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2];
        }
      }
      return a;
    }
    function l(r, i, o, f, a, s, p) {
      var y;
      if (s += 1, 'object' == typeof r && null !== r) {
        for (y = 0; y < f.length; y++) if (f[y] === r) return void u(e, r, i, a);
        try {
          if ('function' == typeof r.toJSON) return;
        } catch (d) {
          return;
        }
        if (void 0 !== p.depthLimit && s > p.depthLimit) return void u(t, r, i, a);
        if (void 0 !== p.edgesLimit && o + 1 > p.edgesLimit) return void u(t, r, i, a);
        if (f.push(r), Array.isArray(r)) for (y = 0; y < r.length; y++) l(r[y], y, y, f, r, s, p); else {
          var v = {};
          var h = Object.keys(r).sort(c);
          for (y = 0; y < h.length; y++) {
            var g = h[y];
            l(r[g], g, y, f, r, s, p), v[g] = r[g];
          }
          if (void 0 === a) return v;
          n.push([ a, i, r ]), a[i] = v;
        }
        f.pop();
      }
    }
    function p(r) {
      return r = void 0 !== r ? r : function(r, t) {
        return t;
      }, function(t, e) {
        if (i.length > 0) for (var n = 0; n < i.length; n++) {
          var o = i[n];
          if (o[1] === t && o[0] === e) {
            e = o[2], i.splice(n, 1);
            break;
          }
        }
        return r.call(this, t, e);
      };
    }
  },
  67266: (r, t, e) => {
    var n = 'undefined' != typeof JSON ? JSON : e(58418);
    r.exports = function(r, t) {
      t || (t = {}), 'function' == typeof t && (t = {
        cmp: t
      });
      var e = t.space || '';
      'number' == typeof e && (e = Array(e + 1).join(' '));
      var f = 'boolean' == typeof t.cycles && t.cycles;
      var u = t.replacer || function(r, t) {
        return t;
      };
      var a = t.cmp && function(r) {
        return function(t) {
          return function(e, n) {
            var i = {
              key: e,
              value: t[e]
            };
            var o = {
              key: n,
              value: t[n]
            };
            return r(i, o);
          };
        };
      }(t.cmp);
      var c = [];
      return function r(t, s, l, p) {
        var y = e ? '\n' + new Array(p + 1).join(e) : '';
        var v = e ? ': ' : ':';
        if (l && l.toJSON && 'function' == typeof l.toJSON && (l = l.toJSON()), void 0 !== (l = u.call(t, s, l))) {
          if ('object' != typeof l || null === l) return n.stringify(l);
          if (i(l)) {
            var h = [];
            for (var g = 0; g < l.length; g++) {
              var d = r(l, g, l[g], p + 1) || n.stringify(null);
              h.push(y + e + d);
            }
            return '[' + h.join(',') + y + ']';
          }
          if (-1 !== c.indexOf(l)) {
            if (f) return n.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
          }
          c.push(l);
          var b = o(l).sort(a && a(l));
          h = [];
          for (g = 0; g < b.length; g++) {
            var O = r(l, s = b[g], l[s], p + 1);
            if (O) {
              var j = n.stringify(s) + v + O;
              h.push(y + e + j);
            }
          }
          return c.splice(c.indexOf(l), 1), '{' + h.join(',') + y + '}';
        }
      }({
        '': r
      }, '', r, 0);
    };
    var i = Array.isArray || function(r) {
      return '[object Array]' === {}.toString.call(r);
    };
    var o = Object.keys || function(r) {
      var t = Object.prototype.hasOwnProperty || function() {
        return !0;
      };
      var e = [];
      for (var n in r) t.call(r, n) && e.push(n);
      return e;
    };
  },
  58418: (r, t, e) => {
    t.parse = e(51396), t.stringify = e(66177);
  },
  51396: r => {
    var t, e, n, i, o = {
      '"': '"',
      '\\': '\\',
      '/': '/',
      b: '\b',
      f: '\f',
      n: '\n',
      r: '\r',
      t: '\t'
    }, f = function(r) {
      throw {
        name: 'SyntaxError',
        message: r,
        at: t,
        text: n
      };
    }, u = function(r) {
      return r && r !== e && f("Expected '" + r + "' instead of '" + e + "'"), e = n.charAt(t), t += 1, e;
    }, a = function() {
      var r, t = '';
      for ('-' === e && (t = '-', u('-')); e >= '0' && e <= '9'; ) t += e, u();
      if ('.' === e) for (t += '.'; u() && e >= '0' && e <= '9'; ) t += e;
      if ('e' === e || 'E' === e) for (t += e, u(), '-' !== e && '+' !== e || (t += e, u()); e >= '0' && e <= '9'; ) t += e, u();
      if (r = +t, isFinite(r)) return r;
      f("Bad number");
    }, c = function() {
      var r, t, n, i = '';
      if ('"' === e) for (;u(); ) {
        if ('"' === e) return u(), i;
        if ('\\' === e) if (u(), 'u' === e) {
          for (n = 0, t = 0; t < 4 && (r = parseInt(u(), 16), isFinite(r)); t += 1) n = 16 * n + r;
          i += String.fromCharCode(n);
        } else {
          if ('string' != typeof o[e]) break;
          i += o[e];
        } else i += e;
      }
      f("Bad string");
    }, s = function() {
      for (;e && e <= ' '; ) u();
    };
    i = function() {
      switch (s(), e) {
       case '{':
        return function() {
          var r, t = {};
          if ('{' === e) {
            if (u('{'), s(), '}' === e) return u('}'), t;
            for (;e; ) {
              if (r = c(), s(), u(':'), Object.hasOwnProperty.call(t, r) && f('Duplicate key "' + r + '"'), t[r] = i(), s(), '}' === e) return u('}'), 
              t;
              u(','), s();
            }
          }
          f("Bad object");
        }();

       case '[':
        return function() {
          var r = [];
          if ('[' === e) {
            if (u('['), s(), ']' === e) return u(']'), r;
            for (;e; ) {
              if (r.push(i()), s(), ']' === e) return u(']'), r;
              u(','), s();
            }
          }
          f("Bad array");
        }();

       case '"':
        return c();

       case '-':
        return a();

       default:
        return e >= '0' && e <= '9' ? a() : function() {
          switch (e) {
           case 't':
            return u('t'), u('r'), u('u'), u('e'), !0;

           case 'f':
            return u('f'), u('a'), u('l'), u('s'), u('e'), !1;

           case 'n':
            return u('n'), u('u'), u('l'), u('l'), null;
          }
          f("Unexpected '" + e + "'");
        }();
      }
    }, r.exports = function(r, o) {
      var u;
      return n = r, t = 0, e = ' ', u = i(), s(), e && f("Syntax error"), 'function' == typeof o ? function r(t, e) {
        var n, i, f = t[e];
        if (f && 'object' == typeof f) for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (void 0 !== (i = r(f, n)) ? f[n] = i : delete f[n]);
        return o.call(t, e, f);
      }({
        '': u
      }, '') : u;
    };
  },
  66177: r => {
    var t, e, n, i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o = {
      '\b': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    };
    function f(r) {
      return i.lastIndex = 0, i.test(r) ? '"' + r.replace(i, (function(r) {
        var t = o[r];
        return 'string' == typeof t ? t : '\\u' + ('0000' + r.charCodeAt(0).toString(16)).slice(-4);
      })) + '"' : '"' + r + '"';
    }
    function u(r, i) {
      var o, a, c, s, l, p = t, y = i[r];
      switch (y && 'object' == typeof y && 'function' == typeof y.toJSON && (y = y.toJSON(r)), 'function' == typeof n && (y = n.call(i, r, y)), 
      typeof y) {
       case 'string':
        return f(y);

       case 'number':
        return isFinite(y) ? String(y) : 'null';

       case 'boolean':
       case 'null':
        return String(y);

       case 'object':
        if (!y) return 'null';
        if (t += e, l = [], '[object Array]' === Object.prototype.toString.apply(y)) {
          for (s = y.length, o = 0; o < s; o += 1) l[o] = u(o, y) || 'null';
          return c = 0 === l.length ? '[]' : t ? '[\n' + t + l.join(',\n' + t) + '\n' + p + ']' : '[' + l.join(',') + ']', t = p, 
          c;
        }
        if (n && 'object' == typeof n) for (s = n.length, o = 0; o < s; o += 1) 'string' == typeof (a = n[o]) && (c = u(a, y)) && l.push(f(a) + (t ? ': ' : ':') + c); else for (a in y) Object.prototype.hasOwnProperty.call(y, a) && (c = u(a, y)) && l.push(f(a) + (t ? ': ' : ':') + c);
        return c = 0 === l.length ? '{}' : t ? '{\n' + t + l.join(',\n' + t) + '\n' + p + '}' : '{' + l.join(',') + '}', t = p, 
        c;
      }
    }
    r.exports = function(r, i, o) {
      var f;
      if (t = '', e = '', 'number' == typeof o) for (f = 0; f < o; f += 1) e += ' '; else 'string' == typeof o && (e = o);
      if (n = i, i && 'function' != typeof i && ('object' != typeof i || 'number' != typeof i.length)) throw new Error('JSON.stringify');
      return u('', {
        '': r
      });
    };
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQG1ldGFtYXNrL3NhZmUtZXZlbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZmFzdC1zYWZlLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvanNvbi1zdGFibGUtc3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9qc29uaWZ5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW92ZXJsYXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9qc29uaWZ5L2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdmVybGF5LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvanNvbmlmeS9saWIvc3RyaW5naWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuZnVuY3Rpb24gc2FmZUFwcGx5KGhhbmRsZXIsIGNvbnRleHQsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICBSZWZsZWN0LmFwcGx5KGhhbmRsZXIsIGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIFRocm93IGVycm9yIGFmdGVyIHRpbWVvdXQgc28gYXMgbm90IHRvIGludGVycnVwdCB0aGUgc3RhY2tcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyKSB7XG4gICAgY29uc3QgbiA9IGFyci5sZW5ndGg7XG4gICAgY29uc3QgY29weSA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgICAgICBjb3B5W2ldID0gYXJyW2ldO1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbn1cbmNsYXNzIFNhZmVFdmVudEVtaXR0ZXIgZXh0ZW5kcyBldmVudHNfMS5FdmVudEVtaXR0ZXIge1xuICAgIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgICAgICBsZXQgZG9FcnJvciA9IHR5cGUgPT09ICdlcnJvcic7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgICAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkb0Vycm9yID0gZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZG9FcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgICAgICAgaWYgKGRvRXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBlcjtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBbZXJdID0gYXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAgICAgICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgVW5oYW5kbGVkIGVycm9yLiR7ZXIgPyBgICgke2VyLm1lc3NhZ2V9KWAgOiAnJ31gKTtcbiAgICAgICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgICAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc2FmZUFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHNhZmVBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNhZmVFdmVudEVtaXR0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuc3RyaW5naWZ5LmRlZmF1bHQgPSBzdHJpbmdpZnlcbnN0cmluZ2lmeS5zdGFibGUgPSBkZXRlcm1pbmlzdGljU3RyaW5naWZ5XG5zdHJpbmdpZnkuc3RhYmxlU3RyaW5naWZ5ID0gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeVxuXG52YXIgTElNSVRfUkVQTEFDRV9OT0RFID0gJ1suLi5dJ1xudmFyIENJUkNVTEFSX1JFUExBQ0VfTk9ERSA9ICdbQ2lyY3VsYXJdJ1xuXG52YXIgYXJyID0gW11cbnZhciByZXBsYWNlclN0YWNrID0gW11cblxuZnVuY3Rpb24gZGVmYXVsdE9wdGlvbnMgKCkge1xuICByZXR1cm4ge1xuICAgIGRlcHRoTGltaXQ6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgIGVkZ2VzTGltaXQ6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIH1cbn1cblxuLy8gUmVndWxhciBzdHJpbmdpZnlcbmZ1bmN0aW9uIHN0cmluZ2lmeSAob2JqLCByZXBsYWNlciwgc3BhY2VyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnMoKVxuICB9XG5cbiAgZGVjaXJjKG9iaiwgJycsIDAsIFtdLCB1bmRlZmluZWQsIDAsIG9wdGlvbnMpXG4gIHZhciByZXNcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZXJTdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIHNwYWNlcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkob2JqLCByZXBsYWNlR2V0dGVyVmFsdWVzKHJlcGxhY2VyKSwgc3BhY2VyKVxuICAgIH1cbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSgnW3VuYWJsZSB0byBzZXJpYWxpemUsIGNpcmN1bGFyIHJlZmVyZW5jZSBpcyB0b28gY29tcGxleCB0byBhbmFseXplXScpXG4gIH0gZmluYWxseSB7XG4gICAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciBwYXJ0ID0gYXJyLnBvcCgpXG4gICAgICBpZiAocGFydC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRbMF0sIHBhcnRbMV0sIHBhcnRbM10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0WzBdW3BhcnRbMV1dID0gcGFydFsyXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHNldFJlcGxhY2UgKHJlcGxhY2UsIHZhbCwgaywgcGFyZW50KSB7XG4gIHZhciBwcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmVudCwgaylcbiAgaWYgKHByb3BlcnR5RGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9wZXJ0eURlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGFyZW50LCBrLCB7IHZhbHVlOiByZXBsYWNlIH0pXG4gICAgICBhcnIucHVzaChbcGFyZW50LCBrLCB2YWwsIHByb3BlcnR5RGVzY3JpcHRvcl0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcGxhY2VyU3RhY2sucHVzaChbdmFsLCBrLCByZXBsYWNlXSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50W2tdID0gcmVwbGFjZVxuICAgIGFyci5wdXNoKFtwYXJlbnQsIGssIHZhbF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjaXJjICh2YWwsIGssIGVkZ2VJbmRleCwgc3RhY2ssIHBhcmVudCwgZGVwdGgsIG9wdGlvbnMpIHtcbiAgZGVwdGggKz0gMVxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IHZhbCkge1xuICAgICAgICBzZXRSZXBsYWNlKENJUkNVTEFSX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBvcHRpb25zLmRlcHRoTGltaXQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBkZXB0aCA+IG9wdGlvbnMuZGVwdGhMaW1pdFxuICAgICkge1xuICAgICAgc2V0UmVwbGFjZShMSU1JVF9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9wdGlvbnMuZWRnZXNMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGVkZ2VJbmRleCArIDEgPiBvcHRpb25zLmVkZ2VzTGltaXRcbiAgICApIHtcbiAgICAgIHNldFJlcGxhY2UoTElNSVRfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsKVxuICAgIC8vIE9wdGltaXplIGZvciBBcnJheXMuIEJpZyBhcnJheXMgY291bGQga2lsbCB0aGUgcGVyZm9ybWFuY2Ugb3RoZXJ3aXNlIVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVjaXJjKHZhbFtpXSwgaSwgaSwgc3RhY2ssIHZhbCwgZGVwdGgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgZGVjaXJjKHZhbFtrZXldLCBrZXksIGksIHN0YWNrLCB2YWwsIGRlcHRoLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGFjay5wb3AoKVxuICB9XG59XG5cbi8vIFN0YWJsZS1zdHJpbmdpZnlcbmZ1bmN0aW9uIGNvbXBhcmVGdW5jdGlvbiAoYSwgYikge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMVxuICB9XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGRldGVybWluaXN0aWNTdHJpbmdpZnkgKG9iaiwgcmVwbGFjZXIsIHNwYWNlciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zKClcbiAgfVxuXG4gIHZhciB0bXAgPSBkZXRlcm1pbmlzdGljRGVjaXJjKG9iaiwgJycsIDAsIFtdLCB1bmRlZmluZWQsIDAsIG9wdGlvbnMpIHx8IG9ialxuICB2YXIgcmVzXG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2VyU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICByZXMgPSBKU09OLnN0cmluZ2lmeSh0bXAsIHJlcGxhY2VyLCBzcGFjZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KHRtcCwgcmVwbGFjZUdldHRlclZhbHVlcyhyZXBsYWNlciksIHNwYWNlcilcbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoJ1t1bmFibGUgdG8gc2VyaWFsaXplLCBjaXJjdWxhciByZWZlcmVuY2UgaXMgdG9vIGNvbXBsZXggdG8gYW5hbHl6ZV0nKVxuICB9IGZpbmFsbHkge1xuICAgIC8vIEVuc3VyZSB0aGF0IHdlIHJlc3RvcmUgdGhlIG9iamVjdCBhcyBpdCB3YXMuXG4gICAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciBwYXJ0ID0gYXJyLnBvcCgpXG4gICAgICBpZiAocGFydC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRbMF0sIHBhcnRbMV0sIHBhcnRbM10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0WzBdW3BhcnRbMV1dID0gcGFydFsyXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGRldGVybWluaXN0aWNEZWNpcmMgKHZhbCwgaywgZWRnZUluZGV4LCBzdGFjaywgcGFyZW50LCBkZXB0aCwgb3B0aW9ucykge1xuICBkZXB0aCArPSAxXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdGFja1tpXSA9PT0gdmFsKSB7XG4gICAgICAgIHNldFJlcGxhY2UoQ0lSQ1VMQVJfUkVQTEFDRV9OT0RFLCB2YWwsIGssIHBhcmVudClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9wdGlvbnMuZGVwdGhMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGRlcHRoID4gb3B0aW9ucy5kZXB0aExpbWl0XG4gICAgKSB7XG4gICAgICBzZXRSZXBsYWNlKExJTUlUX1JFUExBQ0VfTk9ERSwgdmFsLCBrLCBwYXJlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygb3B0aW9ucy5lZGdlc0xpbWl0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgZWRnZUluZGV4ICsgMSA+IG9wdGlvbnMuZWRnZXNMaW1pdFxuICAgICkge1xuICAgICAgc2V0UmVwbGFjZShMSU1JVF9SRVBMQUNFX05PREUsIHZhbCwgaywgcGFyZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWwpXG4gICAgLy8gT3B0aW1pemUgZm9yIEFycmF5cy4gQmlnIGFycmF5cyBjb3VsZCBraWxsIHRoZSBwZXJmb3JtYW5jZSBvdGhlcndpc2UhXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBkZXRlcm1pbmlzdGljRGVjaXJjKHZhbFtpXSwgaSwgaSwgc3RhY2ssIHZhbCwgZGVwdGgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSBvYmplY3QgaW4gdGhlIHJlcXVpcmVkIHdheVxuICAgICAgdmFyIHRtcCA9IHt9XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbCkuc29ydChjb21wYXJlRnVuY3Rpb24pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXVxuICAgICAgICBkZXRlcm1pbmlzdGljRGVjaXJjKHZhbFtrZXldLCBrZXksIGksIHN0YWNrLCB2YWwsIGRlcHRoLCBvcHRpb25zKVxuICAgICAgICB0bXBba2V5XSA9IHZhbFtrZXldXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXJyLnB1c2goW3BhcmVudCwgaywgdmFsXSlcbiAgICAgICAgcGFyZW50W2tdID0gdG1wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG1wXG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpXG4gIH1cbn1cblxuLy8gd3JhcHMgcmVwbGFjZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHZhbHVlcyB3ZSBjb3VsZG4ndCByZXBsYWNlXG4vLyBhbmQgbWFyayB0aGVtIGFzIHJlcGxhY2VkIHZhbHVlXG5mdW5jdGlvbiByZXBsYWNlR2V0dGVyVmFsdWVzIChyZXBsYWNlcikge1xuICByZXBsYWNlciA9XG4gICAgdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyByZXBsYWNlclxuICAgICAgOiBmdW5jdGlvbiAoaywgdikge1xuICAgICAgICByZXR1cm4gdlxuICAgICAgfVxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgaWYgKHJlcGxhY2VyU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXBsYWNlclN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcmVwbGFjZXJTdGFja1tpXVxuICAgICAgICBpZiAocGFydFsxXSA9PT0ga2V5ICYmIHBhcnRbMF0gPT09IHZhbCkge1xuICAgICAgICAgIHZhbCA9IHBhcnRbMl1cbiAgICAgICAgICByZXBsYWNlclN0YWNrLnNwbGljZShpLCAxKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWwpXG4gIH1cbn1cbiIsInZhciBqc29uID0gdHlwZW9mIEpTT04gIT09ICd1bmRlZmluZWQnID8gSlNPTiA6IHJlcXVpcmUoJ2pzb25pZnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSBvcHRzID0geyBjbXA6IG9wdHMgfTtcbiAgICB2YXIgc3BhY2UgPSBvcHRzLnNwYWNlIHx8ICcnO1xuICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSBzcGFjZSA9IEFycmF5KHNwYWNlKzEpLmpvaW4oJyAnKTtcbiAgICB2YXIgY3ljbGVzID0gKHR5cGVvZiBvcHRzLmN5Y2xlcyA9PT0gJ2Jvb2xlYW4nKSA/IG9wdHMuY3ljbGVzIDogZmFsc2U7XG4gICAgdmFyIHJlcGxhY2VyID0gb3B0cy5yZXBsYWNlciB8fCBmdW5jdGlvbihrZXksIHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuICAgIHZhciBjbXAgPSBvcHRzLmNtcCAmJiAoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYW9iaiA9IHsga2V5OiBhLCB2YWx1ZTogbm9kZVthXSB9O1xuICAgICAgICAgICAgICAgIHZhciBib2JqID0geyBrZXk6IGIsIHZhbHVlOiBub2RlW2JdIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGYoYW9iaiwgYm9iaik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH0pKG9wdHMuY21wKTtcblxuICAgIHZhciBzZWVuID0gW107XG4gICAgcmV0dXJuIChmdW5jdGlvbiBzdHJpbmdpZnkgKHBhcmVudCwga2V5LCBub2RlLCBsZXZlbCkge1xuICAgICAgICB2YXIgaW5kZW50ID0gc3BhY2UgPyAoJ1xcbicgKyBuZXcgQXJyYXkobGV2ZWwgKyAxKS5qb2luKHNwYWNlKSkgOiAnJztcbiAgICAgICAgdmFyIGNvbG9uU2VwYXJhdG9yID0gc3BhY2UgPyAnOiAnIDogJzonO1xuXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUudG9KU09OICYmIHR5cGVvZiBub2RlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUudG9KU09OKCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gcmVwbGFjZXIuY2FsbChwYXJlbnQsIGtleSwgbm9kZSk7XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcgfHwgbm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGpzb24uc3RyaW5naWZ5KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHN0cmluZ2lmeShub2RlLCBpLCBub2RlW2ldLCBsZXZlbCsxKSB8fCBqc29uLnN0cmluZ2lmeShudWxsKTtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChpbmRlbnQgKyBzcGFjZSArIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdbJyArIG91dC5qb2luKCcsJykgKyBpbmRlbnQgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2Vlbi5pbmRleE9mKG5vZGUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChjeWNsZXMpIHJldHVybiBqc29uLnN0cmluZ2lmeSgnX19jeWNsZV9fJyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBzZWVuLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhub2RlKS5zb3J0KGNtcCAmJiBjbXAobm9kZSkpO1xuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RyaW5naWZ5KG5vZGUsIGtleSwgbm9kZVtrZXldLCBsZXZlbCsxKTtcblxuICAgICAgICAgICAgICAgIGlmKCF2YWx1ZSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBqc29uLnN0cmluZ2lmeShrZXkpXG4gICAgICAgICAgICAgICAgICAgICsgY29sb25TZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2goaW5kZW50ICsgc3BhY2UgKyBrZXlWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWVuLnNwbGljZShzZWVuLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgcmV0dXJuICd7JyArIG91dC5qb2luKCcsJykgKyBpbmRlbnQgKyAnfSc7XG4gICAgICAgIH1cbiAgICB9KSh7ICcnOiBvYmogfSwgJycsIG9iaiwgMCk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5IHx8IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufTtcbiIsImV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2xpYi9wYXJzZScpO1xuZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2xpYi9zdHJpbmdpZnknKTtcbiIsInZhciBhdCwgLy8gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGNoYXJhY3RlclxuICAgIGNoLCAvLyBUaGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBlc2NhcGVlID0ge1xuICAgICAgICAnXCInOiAgJ1wiJyxcbiAgICAgICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgICAgICcvJzogICcvJyxcbiAgICAgICAgYjogICAgJ1xcYicsXG4gICAgICAgIGY6ICAgICdcXGYnLFxuICAgICAgICBuOiAgICAnXFxuJyxcbiAgICAgICAgcjogICAgJ1xccicsXG4gICAgICAgIHQ6ICAgICdcXHQnXG4gICAgfSxcbiAgICB0ZXh0LFxuXG4gICAgZXJyb3IgPSBmdW5jdGlvbiAobSkge1xuICAgICAgICAvLyBDYWxsIGVycm9yIHdoZW4gc29tZXRoaW5nIGlzIHdyb25nLlxuICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICBuYW1lOiAgICAnU3ludGF4RXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogbSxcbiAgICAgICAgICAgIGF0OiAgICAgIGF0LFxuICAgICAgICAgICAgdGV4dDogICAgdGV4dFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgbmV4dCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIC8vIElmIGEgYyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHZlcmlmeSB0aGF0IGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuICAgICAgICBpZiAoYyAmJiBjICE9PSBjaCkge1xuICAgICAgICAgICAgZXJyb3IoXCJFeHBlY3RlZCAnXCIgKyBjICsgXCInIGluc3RlYWQgb2YgJ1wiICsgY2ggKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBjaGFyYWN0ZXIuIFdoZW4gdGhlcmUgYXJlIG5vIG1vcmUgY2hhcmFjdGVycyxcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBlbXB0eSBzdHJpbmcuXG4gICAgICAgIFxuICAgICAgICBjaCA9IHRleHQuY2hhckF0KGF0KTtcbiAgICAgICAgYXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH0sXG4gICAgXG4gICAgbnVtYmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBQYXJzZSBhIG51bWJlciB2YWx1ZS5cbiAgICAgICAgdmFyIG51bWJlcixcbiAgICAgICAgICAgIHN0cmluZyA9ICcnO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNoID09PSAnLScpIHtcbiAgICAgICAgICAgIHN0cmluZyA9ICctJztcbiAgICAgICAgICAgIG5leHQoJy0nKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoY2ggPj0gJzAnICYmIGNoIDw9ICc5Jykge1xuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gJy4nO1xuICAgICAgICAgICAgd2hpbGUgKG5leHQoKSAmJiBjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA9PT0gJ2UnIHx8IGNoID09PSAnRScpIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGNoID49ICcwJyAmJiBjaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bWJlciA9ICtzdHJpbmc7XG4gICAgICAgIGlmICghaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICAgICAgZXJyb3IoXCJCYWQgbnVtYmVyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgc3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBQYXJzZSBhIHN0cmluZyB2YWx1ZS5cbiAgICAgICAgdmFyIGhleCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIHVmZmZmO1xuICAgICAgICBcbiAgICAgICAgLy8gV2hlbiBwYXJzaW5nIGZvciBzdHJpbmcgdmFsdWVzLCB3ZSBtdXN0IGxvb2sgZm9yIFwiIGFuZCBcXCBjaGFyYWN0ZXJzLlxuICAgICAgICBpZiAoY2ggPT09ICdcIicpIHtcbiAgICAgICAgICAgIHdoaWxlIChuZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1ZmZmZiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4ID0gcGFyc2VJbnQobmV4dCgpLCAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShoZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ZmZmZiA9IHVmZmZmICogMTYgKyBoZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1ZmZmZik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVzY2FwZWVbY2hdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IGVzY2FwZWVbY2hdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVycm9yKFwiQmFkIHN0cmluZ1wiKTtcbiAgICB9LFxuXG4gICAgd2hpdGUgPSBmdW5jdGlvbiAoKSB7XG5cbi8vIFNraXAgd2hpdGVzcGFjZS5cblxuICAgICAgICB3aGlsZSAoY2ggJiYgY2ggPD0gJyAnKSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd29yZCA9IGZ1bmN0aW9uICgpIHtcblxuLy8gdHJ1ZSwgZmFsc2UsIG9yIG51bGwuXG5cbiAgICAgICAgc3dpdGNoIChjaCkge1xuICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgIG5leHQoJ3QnKTtcbiAgICAgICAgICAgIG5leHQoJ3InKTtcbiAgICAgICAgICAgIG5leHQoJ3UnKTtcbiAgICAgICAgICAgIG5leHQoJ2UnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgIG5leHQoJ2YnKTtcbiAgICAgICAgICAgIG5leHQoJ2EnKTtcbiAgICAgICAgICAgIG5leHQoJ2wnKTtcbiAgICAgICAgICAgIG5leHQoJ3MnKTtcbiAgICAgICAgICAgIG5leHQoJ2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICBuZXh0KCduJyk7XG4gICAgICAgICAgICBuZXh0KCd1Jyk7XG4gICAgICAgICAgICBuZXh0KCdsJyk7XG4gICAgICAgICAgICBuZXh0KCdsJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgJ1wiICsgY2ggKyBcIidcIik7XG4gICAgfSxcblxuICAgIHZhbHVlLCAgLy8gUGxhY2UgaG9sZGVyIGZvciB0aGUgdmFsdWUgZnVuY3Rpb24uXG5cbiAgICBhcnJheSA9IGZ1bmN0aW9uICgpIHtcblxuLy8gUGFyc2UgYW4gYXJyYXkgdmFsdWUuXG5cbiAgICAgICAgdmFyIGFycmF5ID0gW107XG5cbiAgICAgICAgaWYgKGNoID09PSAnWycpIHtcbiAgICAgICAgICAgIG5leHQoJ1snKTtcbiAgICAgICAgICAgIHdoaXRlKCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICddJykge1xuICAgICAgICAgICAgICAgIG5leHQoJ10nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7ICAgLy8gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChjaCkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2godmFsdWUoKSk7XG4gICAgICAgICAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dCgnLCcpO1xuICAgICAgICAgICAgICAgIHdoaXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoXCJCYWQgYXJyYXlcIik7XG4gICAgfSxcblxuICAgIG9iamVjdCA9IGZ1bmN0aW9uICgpIHtcblxuLy8gUGFyc2UgYW4gb2JqZWN0IHZhbHVlLlxuXG4gICAgICAgIHZhciBrZXksXG4gICAgICAgICAgICBvYmplY3QgPSB7fTtcblxuICAgICAgICBpZiAoY2ggPT09ICd7Jykge1xuICAgICAgICAgICAgbmV4dCgneycpO1xuICAgICAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgbmV4dCgnfScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7ICAgLy8gZW1wdHkgb2JqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoY2gpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBzdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB3aGl0ZSgpO1xuICAgICAgICAgICAgICAgIG5leHQoJzonKTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCdEdXBsaWNhdGUga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlKCk7XG4gICAgICAgICAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCd9Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQoJywnKTtcbiAgICAgICAgICAgICAgICB3aGl0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVycm9yKFwiQmFkIG9iamVjdFwiKTtcbiAgICB9O1xuXG52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcblxuLy8gUGFyc2UgYSBKU09OIHZhbHVlLiBJdCBjb3VsZCBiZSBhbiBvYmplY3QsIGFuIGFycmF5LCBhIHN0cmluZywgYSBudW1iZXIsXG4vLyBvciBhIHdvcmQuXG5cbiAgICB3aGl0ZSgpO1xuICAgIHN3aXRjaCAoY2gpIHtcbiAgICBjYXNlICd7JzpcbiAgICAgICAgcmV0dXJuIG9iamVjdCgpO1xuICAgIGNhc2UgJ1snOlxuICAgICAgICByZXR1cm4gYXJyYXkoKTtcbiAgICBjYXNlICdcIic6XG4gICAgICAgIHJldHVybiBzdHJpbmcoKTtcbiAgICBjYXNlICctJzpcbiAgICAgICAgcmV0dXJuIG51bWJlcigpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjaCA+PSAnMCcgJiYgY2ggPD0gJzknID8gbnVtYmVyKCkgOiB3b3JkKCk7XG4gICAgfVxufTtcblxuLy8gUmV0dXJuIHRoZSBqc29uX3BhcnNlIGZ1bmN0aW9uLiBJdCB3aWxsIGhhdmUgYWNjZXNzIHRvIGFsbCBvZiB0aGUgYWJvdmVcbi8vIGZ1bmN0aW9ucyBhbmQgdmFyaWFibGVzLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzb3VyY2UsIHJldml2ZXIpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIFxuICAgIHRleHQgPSBzb3VyY2U7XG4gICAgYXQgPSAwO1xuICAgIGNoID0gJyAnO1xuICAgIHJlc3VsdCA9IHZhbHVlKCk7XG4gICAgd2hpdGUoKTtcbiAgICBpZiAoY2gpIHtcbiAgICAgICAgZXJyb3IoXCJTeW50YXggZXJyb3JcIik7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLFxuICAgIC8vIHBhc3NpbmcgZWFjaCBuYW1lL3ZhbHVlIHBhaXIgdG8gdGhlIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlXG4gICAgLy8gdHJhbnNmb3JtYXRpb24sIHN0YXJ0aW5nIHdpdGggYSB0ZW1wb3Jhcnkgcm9vdCBvYmplY3QgdGhhdCBob2xkcyB0aGUgcmVzdWx0XG4gICAgLy8gaW4gYW4gZW1wdHkga2V5LiBJZiB0aGVyZSBpcyBub3QgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSBzaW1wbHkgcmV0dXJuIHRoZVxuICAgIC8vIHJlc3VsdC5cblxuICAgIHJldHVybiB0eXBlb2YgcmV2aXZlciA9PT0gJ2Z1bmN0aW9uJyA/IChmdW5jdGlvbiB3YWxrKGhvbGRlciwga2V5KSB7XG4gICAgICAgIHZhciBrLCB2LCB2YWx1ZSA9IGhvbGRlcltrZXldO1xuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgIH0oeycnOiByZXN1bHR9LCAnJykpIDogcmVzdWx0O1xufTtcbiIsInZhciBjeCA9IC9bXFx1MDAwMFxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgIGVzY2FwYWJsZSA9IC9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2csXG4gICAgZ2FwLFxuICAgIGluZGVudCxcbiAgICBtZXRhID0geyAgICAvLyB0YWJsZSBvZiBjaGFyYWN0ZXIgc3Vic3RpdHV0aW9uc1xuICAgICAgICAnXFxiJzogJ1xcXFxiJyxcbiAgICAgICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICAgICAnXFxmJzogJ1xcXFxmJyxcbiAgICAgICAgJ1xccic6ICdcXFxccicsXG4gICAgICAgICdcIicgOiAnXFxcXFwiJyxcbiAgICAgICAgJ1xcXFwnOiAnXFxcXFxcXFwnXG4gICAgfSxcbiAgICByZXA7XG5cbmZ1bmN0aW9uIHF1b3RlKHN0cmluZykge1xuICAgIC8vIElmIHRoZSBzdHJpbmcgY29udGFpbnMgbm8gY29udHJvbCBjaGFyYWN0ZXJzLCBubyBxdW90ZSBjaGFyYWN0ZXJzLCBhbmQgbm9cbiAgICAvLyBiYWNrc2xhc2ggY2hhcmFjdGVycywgdGhlbiB3ZSBjYW4gc2FmZWx5IHNsYXAgc29tZSBxdW90ZXMgYXJvdW5kIGl0LlxuICAgIC8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuICAgIC8vIHNlcXVlbmNlcy5cbiAgICBcbiAgICBlc2NhcGFibGUubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gZXNjYXBhYmxlLnRlc3Qoc3RyaW5nKSA/ICdcIicgKyBzdHJpbmcucmVwbGFjZShlc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBjID0gbWV0YVthXTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/IGMgOlxuICAgICAgICAgICAgJ1xcXFx1JyArICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgfSkgKyAnXCInIDogJ1wiJyArIHN0cmluZyArICdcIic7XG59XG5cbmZ1bmN0aW9uIHN0cihrZXksIGhvbGRlcikge1xuICAgIC8vIFByb2R1Y2UgYSBzdHJpbmcgZnJvbSBob2xkZXJba2V5XS5cbiAgICB2YXIgaSwgICAgICAgICAgLy8gVGhlIGxvb3AgY291bnRlci5cbiAgICAgICAgaywgICAgICAgICAgLy8gVGhlIG1lbWJlciBrZXkuXG4gICAgICAgIHYsICAgICAgICAgIC8vIFRoZSBtZW1iZXIgdmFsdWUuXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbWluZCA9IGdhcCxcbiAgICAgICAgcGFydGlhbCxcbiAgICAgICAgdmFsdWUgPSBob2xkZXJba2V5XTtcbiAgICBcbiAgICAvLyBJZiB0aGUgdmFsdWUgaGFzIGEgdG9KU09OIG1ldGhvZCwgY2FsbCBpdCB0byBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTihrZXkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiB3ZSB3ZXJlIGNhbGxlZCB3aXRoIGEgcmVwbGFjZXIgZnVuY3Rpb24sIHRoZW4gY2FsbCB0aGUgcmVwbGFjZXIgdG9cbiAgICAvLyBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cbiAgICBpZiAodHlwZW9mIHJlcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9IHJlcC5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFdoYXQgaGFwcGVucyBuZXh0IGRlcGVuZHMgb24gdGhlIHZhbHVlJ3MgdHlwZS5cbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgcmV0dXJuIHF1b3RlKHZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAvLyBKU09OIG51bWJlcnMgbXVzdCBiZSBmaW5pdGUuIEVuY29kZSBub24tZmluaXRlIG51bWJlcnMgYXMgbnVsbC5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogJ251bGwnO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNhc2UgJ251bGwnOlxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLiBOb3RlOlxuICAgICAgICAgICAgLy8gdHlwZW9mIG51bGwgZG9lcyBub3QgcHJvZHVjZSAnbnVsbCcuIFRoZSBjYXNlIGlzIGluY2x1ZGVkIGhlcmUgaW5cbiAgICAgICAgICAgIC8vIHRoZSByZW1vdGUgY2hhbmNlIHRoYXQgdGhpcyBnZXRzIGZpeGVkIHNvbWVkYXkuXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICdudWxsJztcbiAgICAgICAgICAgIGdhcCArPSBpbmRlbnQ7XG4gICAgICAgICAgICBwYXJ0aWFsID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFycmF5LmlzQXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFtpXSA9IHN0cihpLCB2YWx1ZSkgfHwgJ251bGwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBKb2luIGFsbCBvZiB0aGUgZWxlbWVudHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcywgYW5kXG4gICAgICAgICAgICAgICAgLy8gd3JhcCB0aGVtIGluIGJyYWNrZXRzLlxuICAgICAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICdbXScgOiBnYXAgP1xuICAgICAgICAgICAgICAgICAgICAnW1xcbicgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oJyxcXG4nICsgZ2FwKSArICdcXG4nICsgbWluZCArICddJyA6XG4gICAgICAgICAgICAgICAgICAgICdbJyArIHBhcnRpYWwuam9pbignLCcpICsgJ10nO1xuICAgICAgICAgICAgICAgIGdhcCA9IG1pbmQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElmIHRoZSByZXBsYWNlciBpcyBhbiBhcnJheSwgdXNlIGl0IHRvIHNlbGVjdCB0aGUgbWVtYmVycyB0byBiZVxuICAgICAgICAgICAgLy8gc3RyaW5naWZpZWQuXG4gICAgICAgICAgICBpZiAocmVwICYmIHR5cGVvZiByZXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IHJlcFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBrZXlzIGluIHRoZSBvYmplY3QuXG4gICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gc3RyKGssIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbC5wdXNoKHF1b3RlKGspICsgKGdhcCA/ICc6ICcgOiAnOicpICsgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gSm9pbiBhbGwgb2YgdGhlIG1lbWJlciB0ZXh0cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLFxuICAgICAgICAvLyBhbmQgd3JhcCB0aGVtIGluIGJyYWNlcy5cblxuICAgICAgICB2ID0gcGFydGlhbC5sZW5ndGggPT09IDAgPyAne30nIDogZ2FwID9cbiAgICAgICAgICAgICd7XFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ30nIDpcbiAgICAgICAgICAgICd7JyArIHBhcnRpYWwuam9pbignLCcpICsgJ30nO1xuICAgICAgICBnYXAgPSBtaW5kO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICB2YXIgaTtcbiAgICBnYXAgPSAnJztcbiAgICBpbmRlbnQgPSAnJztcbiAgICBcbiAgICAvLyBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCBtYWtlIGFuIGluZGVudCBzdHJpbmcgY29udGFpbmluZyB0aGF0XG4gICAgLy8gbWFueSBzcGFjZXMuXG4gICAgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNwYWNlOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluZGVudCArPSAnICc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIHN0cmluZywgaXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBpbmRlbnQgc3RyaW5nLlxuICAgIGVsc2UgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaW5kZW50ID0gc3BhY2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSByZXBsYWNlciwgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LlxuICAgIC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3IuXG4gICAgcmVwID0gcmVwbGFjZXI7XG4gICAgaWYgKHJlcGxhY2VyICYmIHR5cGVvZiByZXBsYWNlciAhPT0gJ2Z1bmN0aW9uJ1xuICAgICYmICh0eXBlb2YgcmVwbGFjZXIgIT09ICdvYmplY3QnIHx8IHR5cGVvZiByZXBsYWNlci5sZW5ndGggIT09ICdudW1iZXInKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04uc3RyaW5naWZ5Jyk7XG4gICAgfVxuICAgIFxuICAgIC8vIE1ha2UgYSBmYWtlIHJvb3Qgb2JqZWN0IGNvbnRhaW5pbmcgb3VyIHZhbHVlIHVuZGVyIHRoZSBrZXkgb2YgJycuXG4gICAgLy8gUmV0dXJuIHRoZSByZXN1bHQgb2Ygc3RyaW5naWZ5aW5nIHRoZSB2YWx1ZS5cbiAgICByZXR1cm4gc3RyKCcnLCB7Jyc6IHZhbHVlfSk7XG59O1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXZlbnRzXzEiLCJzYWZlQXBwbHkiLCJoYW5kbGVyIiwiY29udGV4dCIsImFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJlcnIiLCJzZXRUaW1lb3V0IiwiU2FmZUV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImVtaXQiLCJ0eXBlIiwiZG9FcnJvciIsImV2ZW50cyIsInRoaXMiLCJfZXZlbnRzIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJlciIsImxlbmd0aCIsIkVycm9yIiwibWVzc2FnZSIsImxlbiIsImxpc3RlbmVycyIsImFyciIsIm4iLCJjb3B5IiwiQXJyYXkiLCJpIiwiYXJyYXlDbG9uZSIsIm1vZHVsZSIsInN0cmluZ2lmeSIsImRlZmF1bHQiLCJzdGFibGUiLCJkZXRlcm1pbmlzdGljU3RyaW5naWZ5Iiwic3RhYmxlU3RyaW5naWZ5IiwiTElNSVRfUkVQTEFDRV9OT0RFIiwiQ0lSQ1VMQVJfUkVQTEFDRV9OT0RFIiwicmVwbGFjZXJTdGFjayIsImRlZmF1bHRPcHRpb25zIiwiZGVwdGhMaW1pdCIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJlZGdlc0xpbWl0Iiwib2JqIiwicmVwbGFjZXIiLCJzcGFjZXIiLCJvcHRpb25zIiwicmVzIiwiZGVjaXJjIiwiSlNPTiIsInJlcGxhY2VHZXR0ZXJWYWx1ZXMiLCJfIiwicGFydCIsInBvcCIsInNldFJlcGxhY2UiLCJyZXBsYWNlIiwidmFsIiwiayIsInBhcmVudCIsInByb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsImNvbmZpZ3VyYWJsZSIsInB1c2giLCJlZGdlSW5kZXgiLCJzdGFjayIsImRlcHRoIiwiaXNBcnJheSIsImtleXMiLCJrZXkiLCJjb21wYXJlRnVuY3Rpb24iLCJhIiwiYiIsInRtcCIsImRldGVybWluaXN0aWNEZWNpcmMiLCJ0b0pTT04iLCJzb3J0IiwidiIsInNwbGljZSIsImNhbGwiLCJqc29uIiwib3B0cyIsImNtcCIsInNwYWNlIiwiam9pbiIsImN5Y2xlcyIsImYiLCJub2RlIiwiYW9iaiIsImJvYmoiLCJzZWVuIiwibGV2ZWwiLCJpbmRlbnQiLCJjb2xvblNlcGFyYXRvciIsIm91dCIsIml0ZW0iLCJpbmRleE9mIiwiVHlwZUVycm9yIiwib2JqZWN0S2V5cyIsImtleVZhbHVlIiwieCIsInRvU3RyaW5nIiwiaGFzIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwYXJzZSIsImF0IiwiY2giLCJ0ZXh0IiwiZXNjYXBlZSIsInIiLCJ0IiwibSIsIm5hbWUiLCJuZXh0IiwiYyIsImNoYXJBdCIsIm51bWJlciIsInN0cmluZyIsImlzRmluaXRlIiwiaGV4IiwidWZmZmYiLCJwYXJzZUludCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIndoaXRlIiwib2JqZWN0IiwiYXJyYXkiLCJ3b3JkIiwic291cmNlIiwicmV2aXZlciIsInJlc3VsdCIsIndhbGsiLCJob2xkZXIiLCJnYXAiLCJyZXAiLCJlc2NhcGFibGUiLCJtZXRhIiwicXVvdGUiLCJsYXN0SW5kZXgiLCJ0ZXN0IiwiY2hhckNvZGVBdCIsInNsaWNlIiwic3RyIiwicGFydGlhbCIsIm1pbmQiXSwic291cmNlUm9vdCI6IiJ9