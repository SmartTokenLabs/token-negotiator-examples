/*! For license information please see 133.3aad2929.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 133 ], {
  825: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(2358);
    function n(e, t, r) {
      return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
    }
    function s(e, t, r) {
      return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
    }
    function o(e, t) {
      return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
    }
    function a(e, t) {
      return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
    }
    function c(e, t) {
      return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
    }
    function h(e, t) {
      return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
    }
    function u(e, t, r) {
      return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, 
      t[r + 3] = e >>> 0, t;
    }
    function l(e, t, r) {
      return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, 
      t[r + 3] = e >>> 24, t;
    }
    function p(e, t, r) {
      return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), u(e / 4294967296 >>> 0, t, r), u(e >>> 0, t, r + 4), 
      t;
    }
    function f(e, t, r) {
      return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), l(e >>> 0, t, r), l(e / 4294967296 >>> 0, t, r + 4), 
      t;
    }
    t.readInt16BE = function(e, t) {
      return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
    }, t.readUint16BE = function(e, t) {
      return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
    }, t.readInt16LE = function(e, t) {
      return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
    }, t.readUint16LE = function(e, t) {
      return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
    }, t.writeUint16BE = n, t.writeInt16BE = n, t.writeUint16LE = s, t.writeInt16LE = s, t.readInt32BE = o, t.readUint32BE = a, 
    t.readInt32LE = c, t.readUint32LE = h, t.writeUint32BE = u, t.writeInt32BE = u, t.writeUint32LE = l, t.writeInt32LE = l, 
    t.readInt64BE = function(e, t) {
      void 0 === t && (t = 0);
      var r = o(e, t);
      var i = o(e, t + 4);
      return 4294967296 * r + i - 4294967296 * (i >> 31);
    }, t.readUint64BE = function(e, t) {
      return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4);
    }, t.readInt64LE = function(e, t) {
      void 0 === t && (t = 0);
      var r = c(e, t);
      return 4294967296 * c(e, t + 4) + r - 4294967296 * (r >> 31);
    }, t.readUint64LE = function(e, t) {
      void 0 === t && (t = 0);
      var r = h(e, t);
      return 4294967296 * h(e, t + 4) + r;
    }, t.writeUint64BE = p, t.writeInt64BE = p, t.writeUint64LE = f, t.writeInt64LE = f, t.readUintBE = function(e, t, r) {
      if (void 0 === r && (r = 0), e % 8 != 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
      if (e / 8 > t.length - r) throw new Error("readUintBE: array is too short for the given bitLength");
      var i = 0;
      var n = 1;
      for (var s = e / 8 + r - 1; s >= r; s--) i += t[s] * n, n *= 256;
      return i;
    }, t.readUintLE = function(e, t, r) {
      if (void 0 === r && (r = 0), e % 8 != 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
      if (e / 8 > t.length - r) throw new Error("readUintLE: array is too short for the given bitLength");
      var i = 0;
      var n = 1;
      for (var s = r; s < r + e / 8; s++) i += t[s] * n, n *= 256;
      return i;
    }, t.writeUintBE = function(e, t, r, n) {
      if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
      if (!i.isSafeInteger(t)) throw new Error("writeUintBE value must be an integer");
      var s = 1;
      for (var o = e / 8 + n - 1; o >= n; o--) r[o] = t / s & 255, s *= 256;
      return r;
    }, t.writeUintLE = function(e, t, r, n) {
      if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
      if (!i.isSafeInteger(t)) throw new Error("writeUintLE value must be an integer");
      var s = 1;
      for (var o = n; o < n + e / 8; o++) r[o] = t / s & 255, s *= 256;
      return r;
    }, t.readFloat32BE = function(e, t) {
      return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t);
    }, t.readFloat32LE = function(e, t) {
      return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0);
    }, t.readFloat64BE = function(e, t) {
      return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t);
    }, t.readFloat64LE = function(e, t) {
      return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0);
    }, t.writeFloat32BE = function(e, t, r) {
      return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), 
      t;
    }, t.writeFloat32LE = function(e, t, r) {
      return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), 
      t;
    }, t.writeFloat64BE = function(e, t, r) {
      return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), 
      t;
    }, t.writeFloat64LE = function(e, t, r) {
      return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), 
      t;
    };
  },
  9960: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(825);
    var n = r(2247);
    function s(e, t, r) {
      var n = 1634760805;
      var s = 857760878;
      var o = 2036477234;
      var a = 1797285236;
      var c = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0];
      var h = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4];
      var u = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8];
      var l = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12];
      var p = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16];
      var f = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20];
      var d = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24];
      var g = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28];
      var y = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
      var v = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4];
      var m = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8];
      var b = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12];
      var w = n;
      var _ = s;
      var E = o;
      var S = a;
      var O = c;
      var I = h;
      var R = u;
      var P = l;
      var N = p;
      var x = f;
      var T = d;
      var A = g;
      var U = y;
      var j = v;
      var L = m;
      var C = b;
      for (var M = 0; M < 20; M += 2) O = (O ^= N = N + (U = (U ^= w = w + O | 0) >>> 16 | U << 16) | 0) >>> 20 | O << 12, I = (I ^= x = x + (j = (j ^= _ = _ + I | 0) >>> 16 | j << 16) | 0) >>> 20 | I << 12, 
      R = (R ^= T = T + (L = (L ^= E = E + R | 0) >>> 16 | L << 16) | 0) >>> 20 | R << 12, P = (P ^= A = A + (C = (C ^= S = S + P | 0) >>> 16 | C << 16) | 0) >>> 20 | P << 12, 
      R = (R ^= T = T + (L = (L ^= E = E + R | 0) >>> 24 | L << 8) | 0) >>> 25 | R << 7, P = (P ^= A = A + (C = (C ^= S = S + P | 0) >>> 24 | C << 8) | 0) >>> 25 | P << 7, 
      I = (I ^= x = x + (j = (j ^= _ = _ + I | 0) >>> 24 | j << 8) | 0) >>> 25 | I << 7, O = (O ^= N = N + (U = (U ^= w = w + O | 0) >>> 24 | U << 8) | 0) >>> 25 | O << 7, 
      I = (I ^= T = T + (C = (C ^= w = w + I | 0) >>> 16 | C << 16) | 0) >>> 20 | I << 12, R = (R ^= A = A + (U = (U ^= _ = _ + R | 0) >>> 16 | U << 16) | 0) >>> 20 | R << 12, 
      P = (P ^= N = N + (j = (j ^= E = E + P | 0) >>> 16 | j << 16) | 0) >>> 20 | P << 12, O = (O ^= x = x + (L = (L ^= S = S + O | 0) >>> 16 | L << 16) | 0) >>> 20 | O << 12, 
      P = (P ^= N = N + (j = (j ^= E = E + P | 0) >>> 24 | j << 8) | 0) >>> 25 | P << 7, O = (O ^= x = x + (L = (L ^= S = S + O | 0) >>> 24 | L << 8) | 0) >>> 25 | O << 7, 
      R = (R ^= A = A + (U = (U ^= _ = _ + R | 0) >>> 24 | U << 8) | 0) >>> 25 | R << 7, I = (I ^= T = T + (C = (C ^= w = w + I | 0) >>> 24 | C << 8) | 0) >>> 25 | I << 7;
      i.writeUint32LE(w + n | 0, e, 0), i.writeUint32LE(_ + s | 0, e, 4), i.writeUint32LE(E + o | 0, e, 8), i.writeUint32LE(S + a | 0, e, 12), 
      i.writeUint32LE(O + c | 0, e, 16), i.writeUint32LE(I + h | 0, e, 20), i.writeUint32LE(R + u | 0, e, 24), i.writeUint32LE(P + l | 0, e, 28), 
      i.writeUint32LE(N + p | 0, e, 32), i.writeUint32LE(x + f | 0, e, 36), i.writeUint32LE(T + d | 0, e, 40), i.writeUint32LE(A + g | 0, e, 44), 
      i.writeUint32LE(U + y | 0, e, 48), i.writeUint32LE(j + v | 0, e, 52), i.writeUint32LE(L + m | 0, e, 56), i.writeUint32LE(C + b | 0, e, 60);
    }
    function o(e, t, r, i, o) {
      if (void 0 === o && (o = 0), 32 !== e.length) throw new Error("ChaCha: key size must be 32 bytes");
      if (i.length < r.length) throw new Error("ChaCha: destination is shorter than source");
      var c;
      var h;
      if (0 === o) {
        if (8 !== t.length && 12 !== t.length) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        h = (c = new Uint8Array(16)).length - t.length, c.set(t, h);
      } else {
        if (16 !== t.length) throw new Error("ChaCha nonce with counter must be 16 bytes");
        c = t, h = o;
      }
      var u = new Uint8Array(64);
      for (var l = 0; l < r.length; l += 64) {
        s(u, c, e);
        for (var p = l; p < l + 64 && p < r.length; p++) i[p] = r[p] ^ u[p - l];
        a(c, 0, h);
      }
      return n.wipe(u), 0 === o && n.wipe(c), i;
    }
    function a(e, t, r) {
      var i = 1;
      for (;r--; ) i = i + (255 & e[t]) | 0, e[t] = 255 & i, i >>>= 8, t++;
      if (i > 0) throw new Error("ChaCha: counter overflow");
    }
    t.streamXOR = o, t.stream = function(e, t, r, i) {
      return void 0 === i && (i = 0), n.wipe(r), o(e, t, r, r, i);
    };
  },
  8805: (e, t, r) => {
    "use strict";
    var i = r(9960);
    var n = r(4341);
    var s = r(2247);
    var o = r(825);
    var a = r(1267);
    t.Cv = 32, t.WH = 12, t.pg = 16;
    var c = new Uint8Array(16);
    var h = function() {
      function e(e) {
        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(e);
      }
      return e.prototype.seal = function(e, t, r, n) {
        if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var o = new Uint8Array(16);
        o.set(e, o.length - e.length);
        var a = new Uint8Array(32);
        i.stream(this._key, o, a, 4);
        var c = t.length + this.tagLength;
        var h;
        if (n) {
          if (n.length !== c) throw new Error("ChaCha20Poly1305: incorrect destination length");
          h = n;
        } else h = new Uint8Array(c);
        return i.streamXOR(this._key, o, t, h, 4), this._authenticate(h.subarray(h.length - this.tagLength, h.length), a, h.subarray(0, h.length - this.tagLength), r), 
        s.wipe(o), h;
      }, e.prototype.open = function(e, t, r, n) {
        if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (t.length < this.tagLength) return null;
        var o = new Uint8Array(16);
        o.set(e, o.length - e.length);
        var c = new Uint8Array(32);
        i.stream(this._key, o, c, 4);
        var h = new Uint8Array(this.tagLength);
        if (this._authenticate(h, c, t.subarray(0, t.length - this.tagLength), r), !a.equal(h, t.subarray(t.length - this.tagLength, t.length))) return null;
        var u = t.length - this.tagLength;
        var l;
        if (n) {
          if (n.length !== u) throw new Error("ChaCha20Poly1305: incorrect destination length");
          l = n;
        } else l = new Uint8Array(u);
        return i.streamXOR(this._key, o, t.subarray(0, t.length - this.tagLength), l, 4), s.wipe(o), l;
      }, e.prototype.clean = function() {
        return s.wipe(this._key), this;
      }, e.prototype._authenticate = function(e, t, r, i) {
        var a = new n.Poly1305(t);
        i && (a.update(i), i.length % 16 > 0 && a.update(c.subarray(i.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
        var h = new Uint8Array(8);
        i && o.writeUint64LE(i.length, h), a.update(h), o.writeUint64LE(r.length, h), a.update(h);
        var u = a.digest();
        for (var l = 0; l < u.length; l++) e[l] = u[l];
        a.clean(), s.wipe(u), s.wipe(h);
      }, e;
    }();
    t.OK = h;
  },
  1267: (e, t) => {
    "use strict";
    function r(e, t) {
      if (e.length !== t.length) return 0;
      var r = 0;
      for (var i = 0; i < e.length; i++) r |= e[i] ^ t[i];
      return 1 & r - 1 >>> 8;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.select = function(e, t, r) {
      return ~(e - 1) & t | e - 1 & r;
    }, t.lessOrEqual = function(e, t) {
      return (0 | e) - (0 | t) - 1 >>> 31 & 1;
    }, t.compare = r, t.equal = function(e, t) {
      return 0 !== e.length && 0 !== t.length && 0 !== r(e, t);
    };
  },
  5242: (e, t, r) => {
    "use strict";
    t.Xx = t._w = t.aP = t.KS = t.jQ = void 0;
    const i = r(3764);
    const n = r(4837);
    const s = r(2247);
    function o(e) {
      const t = new Float64Array(16);
      if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
      return t;
    }
    t.jQ = 64, t.KS = 64, t.aP = 32;
    new Uint8Array(32)[0] = 9;
    const a = o();
    const c = o([ 1 ]);
    const h = o([ 30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995 ]);
    const u = o([ 61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222 ]);
    const l = o([ 54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553 ]);
    const p = o([ 26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214 ]);
    const f = o([ 41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139 ]);
    function d(e, t) {
      for (let r = 0; r < 16; r++) e[r] = 0 | t[r];
    }
    function g(e) {
      let t = 1;
      for (let r = 0; r < 16; r++) {
        let i = e[r] + t + 65535;
        t = Math.floor(i / 65536), e[r] = i - 65536 * t;
      }
      e[0] += t - 1 + 37 * (t - 1);
    }
    function y(e, t, r) {
      const i = ~(r - 1);
      for (let n = 0; n < 16; n++) {
        const r = i & (e[n] ^ t[n]);
        e[n] ^= r, t[n] ^= r;
      }
    }
    function v(e, t) {
      const r = o();
      const i = o();
      for (let n = 0; n < 16; n++) i[n] = t[n];
      g(i), g(i), g(i);
      for (let n = 0; n < 2; n++) {
        r[0] = i[0] - 65517;
        for (let t = 1; t < 15; t++) r[t] = i[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
        r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
        const e = r[15] >> 16 & 1;
        r[14] &= 65535, y(i, r, 1 - e);
      }
      for (let n = 0; n < 16; n++) e[2 * n] = 255 & i[n], e[2 * n + 1] = i[n] >> 8;
    }
    function m(e, t) {
      let r = 0;
      for (let i = 0; i < 32; i++) r |= e[i] ^ t[i];
      return (1 & r - 1 >>> 8) - 1;
    }
    function b(e, t) {
      const r = new Uint8Array(32);
      const i = new Uint8Array(32);
      return v(r, e), v(i, t), m(r, i);
    }
    function w(e) {
      const t = new Uint8Array(32);
      return v(t, e), 1 & t[0];
    }
    function _(e, t, r) {
      for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
    }
    function E(e, t, r) {
      for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
    }
    function S(e, t, r) {
      let i, n, s = 0, o = 0, a = 0, c = 0, h = 0, u = 0, l = 0, p = 0, f = 0, d = 0, g = 0, y = 0, v = 0, m = 0, b = 0, w = 0, _ = 0, E = 0, S = 0, O = 0, I = 0, R = 0, P = 0, N = 0, x = 0, T = 0, A = 0, U = 0, j = 0, L = 0, C = 0, M = r[0], D = r[1], k = r[2], z = r[3], q = r[4], $ = r[5], H = r[6], V = r[7], J = r[8], K = r[9], F = r[10], B = r[11], W = r[12], G = r[13], Y = r[14], X = r[15];
      i = t[0], s += i * M, o += i * D, a += i * k, c += i * z, h += i * q, u += i * $, l += i * H, p += i * V, f += i * J, d += i * K, 
      g += i * F, y += i * B, v += i * W, m += i * G, b += i * Y, w += i * X, i = t[1], o += i * M, a += i * D, c += i * k, h += i * z, 
      u += i * q, l += i * $, p += i * H, f += i * V, d += i * J, g += i * K, y += i * F, v += i * B, m += i * W, b += i * G, 
      w += i * Y, _ += i * X, i = t[2], a += i * M, c += i * D, h += i * k, u += i * z, l += i * q, p += i * $, f += i * H, d += i * V, 
      g += i * J, y += i * K, v += i * F, m += i * B, b += i * W, w += i * G, _ += i * Y, E += i * X, i = t[3], c += i * M, h += i * D, 
      u += i * k, l += i * z, p += i * q, f += i * $, d += i * H, g += i * V, y += i * J, v += i * K, m += i * F, b += i * B, 
      w += i * W, _ += i * G, E += i * Y, S += i * X, i = t[4], h += i * M, u += i * D, l += i * k, p += i * z, f += i * q, d += i * $, 
      g += i * H, y += i * V, v += i * J, m += i * K, b += i * F, w += i * B, _ += i * W, E += i * G, S += i * Y, O += i * X, 
      i = t[5], u += i * M, l += i * D, p += i * k, f += i * z, d += i * q, g += i * $, y += i * H, v += i * V, m += i * J, b += i * K, 
      w += i * F, _ += i * B, E += i * W, S += i * G, O += i * Y, I += i * X, i = t[6], l += i * M, p += i * D, f += i * k, d += i * z, 
      g += i * q, y += i * $, v += i * H, m += i * V, b += i * J, w += i * K, _ += i * F, E += i * B, S += i * W, O += i * G, 
      I += i * Y, R += i * X, i = t[7], p += i * M, f += i * D, d += i * k, g += i * z, y += i * q, v += i * $, m += i * H, b += i * V, 
      w += i * J, _ += i * K, E += i * F, S += i * B, O += i * W, I += i * G, R += i * Y, P += i * X, i = t[8], f += i * M, d += i * D, 
      g += i * k, y += i * z, v += i * q, m += i * $, b += i * H, w += i * V, _ += i * J, E += i * K, S += i * F, O += i * B, 
      I += i * W, R += i * G, P += i * Y, N += i * X, i = t[9], d += i * M, g += i * D, y += i * k, v += i * z, m += i * q, b += i * $, 
      w += i * H, _ += i * V, E += i * J, S += i * K, O += i * F, I += i * B, R += i * W, P += i * G, N += i * Y, x += i * X, 
      i = t[10], g += i * M, y += i * D, v += i * k, m += i * z, b += i * q, w += i * $, _ += i * H, E += i * V, S += i * J, O += i * K, 
      I += i * F, R += i * B, P += i * W, N += i * G, x += i * Y, T += i * X, i = t[11], y += i * M, v += i * D, m += i * k, b += i * z, 
      w += i * q, _ += i * $, E += i * H, S += i * V, O += i * J, I += i * K, R += i * F, P += i * B, N += i * W, x += i * G, 
      T += i * Y, A += i * X, i = t[12], v += i * M, m += i * D, b += i * k, w += i * z, _ += i * q, E += i * $, S += i * H, O += i * V, 
      I += i * J, R += i * K, P += i * F, N += i * B, x += i * W, T += i * G, A += i * Y, U += i * X, i = t[13], m += i * M, b += i * D, 
      w += i * k, _ += i * z, E += i * q, S += i * $, O += i * H, I += i * V, R += i * J, P += i * K, N += i * F, x += i * B, 
      T += i * W, A += i * G, U += i * Y, j += i * X, i = t[14], b += i * M, w += i * D, _ += i * k, E += i * z, S += i * q, O += i * $, 
      I += i * H, R += i * V, P += i * J, N += i * K, x += i * F, T += i * B, A += i * W, U += i * G, j += i * Y, L += i * X, 
      i = t[15], w += i * M, _ += i * D, E += i * k, S += i * z, O += i * q, I += i * $, R += i * H, P += i * V, N += i * J, x += i * K, 
      T += i * F, A += i * B, U += i * W, j += i * G, L += i * Y, C += i * X, s += 38 * _, o += 38 * E, a += 38 * S, c += 38 * O, 
      h += 38 * I, u += 38 * R, l += 38 * P, p += 38 * N, f += 38 * x, d += 38 * T, g += 38 * A, y += 38 * U, v += 38 * j, m += 38 * L, 
      b += 38 * C, n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), 
      o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), 
      c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), 
      u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), 
      p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), 
      d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), 
      y = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), 
      m = i - 65536 * n, i = b + n + 65535, n = Math.floor(i / 65536), b = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), 
      w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, 
      n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, 
      n = Math.floor(i / 65536), c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, 
      n = Math.floor(i / 65536), u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, 
      n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, 
      n = Math.floor(i / 65536), d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = y + n + 65535, 
      n = Math.floor(i / 65536), y = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = m + n + 65535, 
      n = Math.floor(i / 65536), m = i - 65536 * n, i = b + n + 65535, n = Math.floor(i / 65536), b = i - 65536 * n, i = w + n + 65535, 
      n = Math.floor(i / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = h, 
      e[5] = u, e[6] = l, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = b, e[15] = w;
    }
    function O(e, t) {
      S(e, t, t);
    }
    function I(e, t) {
      const r = o();
      let i;
      for (i = 0; i < 16; i++) r[i] = t[i];
      for (i = 253; i >= 0; i--) O(r, r), 2 !== i && 4 !== i && S(r, r, t);
      for (i = 0; i < 16; i++) e[i] = r[i];
    }
    function R(e, t) {
      const r = o(), i = o(), n = o(), s = o(), a = o(), c = o(), h = o(), l = o(), p = o();
      E(r, e[1], e[0]), E(p, t[1], t[0]), S(r, r, p), _(i, e[0], e[1]), _(p, t[0], t[1]), S(i, i, p), S(n, e[3], t[3]), S(n, n, u), 
      S(s, e[2], t[2]), _(s, s, s), E(a, i, r), E(c, s, n), _(h, s, n), _(l, i, r), S(e[0], a, c), S(e[1], l, h), S(e[2], h, c), 
      S(e[3], a, l);
    }
    function P(e, t, r) {
      for (let i = 0; i < 4; i++) y(e[i], t[i], r);
    }
    function N(e, t) {
      const r = o(), i = o(), n = o();
      I(n, t[2]), S(r, t[0], n), S(i, t[1], n), v(e, i), e[31] ^= w(r) << 7;
    }
    function x(e, t, r) {
      d(e[0], a), d(e[1], c), d(e[2], c), d(e[3], a);
      for (let i = 255; i >= 0; --i) {
        const n = r[i / 8 | 0] >> (7 & i) & 1;
        P(e, t, n), R(t, e), R(e, e), P(e, t, n);
      }
    }
    function T(e, t) {
      const r = [ o(), o(), o(), o() ];
      d(r[0], l), d(r[1], p), d(r[2], c), S(r[3], l, p), x(e, r, t);
    }
    function A(e) {
      if (e.length !== t.aP) throw new Error(`ed25519: seed must be ${t.aP} bytes`);
      const r = (0, n.hash)(e);
      r[0] &= 248, r[31] &= 127, r[31] |= 64;
      const i = new Uint8Array(32);
      const s = [ o(), o(), o(), o() ];
      T(s, r), N(i, s);
      const a = new Uint8Array(64);
      return a.set(e), a.set(i, 32), {
        publicKey: i,
        secretKey: a
      };
    }
    t._w = A;
    const U = new Float64Array([ 237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16 ]);
    function j(e, t) {
      let r;
      let i;
      let n;
      let s;
      for (i = 63; i >= 32; --i) {
        for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * U[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), 
        t[n] -= 256 * r;
        t[n] += r, t[i] = 0;
      }
      for (r = 0, n = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * U[n], r = t[n] >> 8, t[n] &= 255;
      for (n = 0; n < 32; n++) t[n] -= r * U[n];
      for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i];
    }
    function L(e) {
      const t = new Float64Array(64);
      for (let r = 0; r < 64; r++) t[r] = e[r];
      for (let r = 0; r < 64; r++) e[r] = 0;
      j(e, t);
    }
    function C(e, t) {
      const r = o(), i = o(), n = o(), s = o(), u = o(), l = o(), p = o();
      return d(e[2], c), function(e, t) {
        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
        e[15] &= 32767;
      }(e[1], t), O(n, e[1]), S(s, n, h), E(n, n, e[2]), _(s, e[2], s), O(u, s), O(l, u), S(p, l, u), S(r, p, n), S(r, r, s), 
      function(e, t) {
        const r = o();
        let i;
        for (i = 0; i < 16; i++) r[i] = t[i];
        for (i = 250; i >= 0; i--) O(r, r), 1 !== i && S(r, r, t);
        for (i = 0; i < 16; i++) e[i] = r[i];
      }(r, r), S(r, r, n), S(r, r, s), S(r, r, s), S(e[0], r, s), O(i, e[0]), S(i, i, s), b(i, n) && S(e[0], e[0], f), O(i, e[0]), 
      S(i, i, s), b(i, n) ? -1 : (w(e[0]) === t[31] >> 7 && E(e[0], a, e[0]), S(e[3], e[0], e[1]), 0);
    }
    t.Xx = function(e, t) {
      const r = new Float64Array(64);
      const i = [ o(), o(), o(), o() ];
      const s = (0, n.hash)(e.subarray(0, 32));
      s[0] &= 248, s[31] &= 127, s[31] |= 64;
      const a = new Uint8Array(64);
      a.set(s.subarray(32), 32);
      const c = new n.SHA512;
      c.update(a.subarray(32)), c.update(t);
      const h = c.digest();
      c.clean(), L(h), T(i, h), N(a, i), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
      const u = c.digest();
      L(u);
      for (let n = 0; n < 32; n++) r[n] = h[n];
      for (let n = 0; n < 32; n++) for (let e = 0; e < 32; e++) r[n + e] += u[n] * s[e];
      return j(a.subarray(32), r), a;
    };
  },
  9723: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isSerializableHash = function(e) {
      return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState;
    };
  },
  8088: (e, t, r) => {
    "use strict";
    var i = r(2848);
    var n = r(2247);
    var s = function() {
      function e(e, t, r, n) {
        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
        var s = i.hmac(this._hash, r, t);
        this._hmac = new i.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
      }
      return e.prototype._fillBuffer = function() {
        this._counter[0]++;
        var e = this._counter[0];
        if (0 === e) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), 
        this._hmac.finish(this._buffer), this._bufpos = 0;
      }, e.prototype.expand = function(e) {
        var t = new Uint8Array(e);
        for (var r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
        return t;
      }, e.prototype.clean = function() {
        this._hmac.clean(), n.wipe(this._buffer), n.wipe(this._counter), this._bufpos = 0;
      }, e;
    }();
    t.t = s;
  },
  2848: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(9723);
    var n = r(1267);
    var s = r(2247);
    var o = function() {
      function e(e, t) {
        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
        var r = new Uint8Array(this.blockSize);
        t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
        for (var n = 0; n < r.length; n++) r[n] ^= 54;
        this._inner.update(r);
        for (n = 0; n < r.length; n++) r[n] ^= 106;
        this._outer.update(r), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), 
        this._outerKeyedState = this._outer.saveState()), s.wipe(r);
      }
      return e.prototype.reset = function() {
        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, 
        this;
      }, e.prototype.clean = function() {
        i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), 
        this._inner.clean(), this._outer.clean();
      }, e.prototype.update = function(e) {
        return this._inner.update(e), this;
      }, e.prototype.finish = function(e) {
        return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), 
        this._finished = !0, this);
      }, e.prototype.digest = function() {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }, e.prototype.saveState = function() {
        if (!i.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
        return this._inner.saveState();
      }, e.prototype.restoreState = function(e) {
        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
      }, e.prototype.cleanSavedState = function(e) {
        if (!i.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        this._inner.cleanSavedState(e);
      }, e;
    }();
    t.HMAC = o, t.hmac = function(e, t, r) {
      var i = new o(e, t);
      i.update(r);
      var n = i.digest();
      return i.clean(), n;
    }, t.equal = n.equal;
  },
  2358: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.mul = Math.imul || function(e, t) {
      var r = 65535 & e;
      var i = 65535 & t;
      return r * i + ((e >>> 16 & 65535) * i + r * (t >>> 16 & 65535) << 16 >>> 0) | 0;
    }, t.add = function(e, t) {
      return e + t | 0;
    }, t.sub = function(e, t) {
      return e - t | 0;
    }, t.rotl = function(e, t) {
      return e << t | e >>> 32 - t;
    }, t.rotr = function(e, t) {
      return e << 32 - t | e >>> t;
    }, t.isInteger = Number.isInteger || function(e) {
      return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
      return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER;
    };
  },
  4341: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(1267);
    var n = r(2247);
    t.DIGEST_LENGTH = 16;
    var s = function() {
      function e(e) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), 
        this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var r = e[0] | e[1] << 8;
        this._r[0] = 8191 & r;
        var i = e[2] | e[3] << 8;
        this._r[1] = 8191 & (r >>> 13 | i << 3);
        var n = e[4] | e[5] << 8;
        this._r[2] = 7939 & (i >>> 10 | n << 6);
        var s = e[6] | e[7] << 8;
        this._r[3] = 8191 & (n >>> 7 | s << 9);
        var o = e[8] | e[9] << 8;
        this._r[4] = 255 & (s >>> 4 | o << 12), this._r[5] = o >>> 1 & 8190;
        var a = e[10] | e[11] << 8;
        this._r[6] = 8191 & (o >>> 14 | a << 2);
        var c = e[12] | e[13] << 8;
        this._r[7] = 8065 & (a >>> 11 | c << 5);
        var h = e[14] | e[15] << 8;
        this._r[8] = 8191 & (c >>> 8 | h << 8), this._r[9] = h >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, 
        this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, 
        this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8;
      }
      return e.prototype._blocks = function(e, t, r) {
        var i = this._fin ? 0 : 2048;
        var n = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], h = this._h[5], u = this._h[6], l = this._h[7], p = this._h[8], f = this._h[9];
        var d = this._r[0], g = this._r[1], y = this._r[2], v = this._r[3], m = this._r[4], b = this._r[5], w = this._r[6], _ = this._r[7], E = this._r[8], S = this._r[9];
        for (;r >= 16; ) {
          var O = e[t + 0] | e[t + 1] << 8;
          n += 8191 & O;
          var I = e[t + 2] | e[t + 3] << 8;
          s += 8191 & (O >>> 13 | I << 3);
          var R = e[t + 4] | e[t + 5] << 8;
          o += 8191 & (I >>> 10 | R << 6);
          var P = e[t + 6] | e[t + 7] << 8;
          a += 8191 & (R >>> 7 | P << 9);
          var N = e[t + 8] | e[t + 9] << 8;
          c += 8191 & (P >>> 4 | N << 12), h += N >>> 1 & 8191;
          var x = e[t + 10] | e[t + 11] << 8;
          u += 8191 & (N >>> 14 | x << 2);
          var T = e[t + 12] | e[t + 13] << 8;
          l += 8191 & (x >>> 11 | T << 5);
          var A = e[t + 14] | e[t + 15] << 8;
          var U = 0;
          var j = U;
          j += n * d, j += s * (5 * S), j += o * (5 * E), j += a * (5 * _), U = (j += c * (5 * w)) >>> 13, j &= 8191, j += h * (5 * b), 
          j += u * (5 * m), j += l * (5 * v), j += (p += 8191 & (T >>> 8 | A << 8)) * (5 * y);
          var L = U += (j += (f += A >>> 5 | i) * (5 * g)) >>> 13;
          L += n * g, L += s * d, L += o * (5 * S), L += a * (5 * E), U = (L += c * (5 * _)) >>> 13, L &= 8191, L += h * (5 * w), 
          L += u * (5 * b), L += l * (5 * m), L += p * (5 * v), U += (L += f * (5 * y)) >>> 13, L &= 8191;
          var C = U;
          C += n * y, C += s * g, C += o * d, C += a * (5 * S), U = (C += c * (5 * E)) >>> 13, C &= 8191, C += h * (5 * _), C += u * (5 * w), 
          C += l * (5 * b), C += p * (5 * m);
          var M = U += (C += f * (5 * v)) >>> 13;
          M += n * v, M += s * y, M += o * g, M += a * d, U = (M += c * (5 * S)) >>> 13, M &= 8191, M += h * (5 * E), M += u * (5 * _), 
          M += l * (5 * w), M += p * (5 * b);
          var D = U += (M += f * (5 * m)) >>> 13;
          D += n * m, D += s * v, D += o * y, D += a * g, U = (D += c * d) >>> 13, D &= 8191, D += h * (5 * S), D += u * (5 * E), 
          D += l * (5 * _), D += p * (5 * w);
          var k = U += (D += f * (5 * b)) >>> 13;
          k += n * b, k += s * m, k += o * v, k += a * y, U = (k += c * g) >>> 13, k &= 8191, k += h * d, k += u * (5 * S), k += l * (5 * E), 
          k += p * (5 * _);
          var z = U += (k += f * (5 * w)) >>> 13;
          z += n * w, z += s * b, z += o * m, z += a * v, U = (z += c * y) >>> 13, z &= 8191, z += h * g, z += u * d, z += l * (5 * S), 
          z += p * (5 * E);
          var q = U += (z += f * (5 * _)) >>> 13;
          q += n * _, q += s * w, q += o * b, q += a * m, U = (q += c * v) >>> 13, q &= 8191, q += h * y, q += u * g, q += l * d, 
          q += p * (5 * S);
          var $ = U += (q += f * (5 * E)) >>> 13;
          $ += n * E, $ += s * _, $ += o * w, $ += a * b, U = ($ += c * m) >>> 13, $ &= 8191, $ += h * v, $ += u * y, $ += l * g, 
          $ += p * d;
          var H = U += ($ += f * (5 * S)) >>> 13;
          H += n * S, H += s * E, H += o * _, H += a * w, U = (H += c * b) >>> 13, H &= 8191, H += h * m, H += u * v, H += l * y, 
          H += p * g, n = j = 8191 & (U = (U = ((U += (H += f * d) >>> 13) << 2) + U | 0) + (j &= 8191) | 0), s = L += U >>>= 13, 
          o = C &= 8191, a = M &= 8191, c = D &= 8191, h = k &= 8191, u = z &= 8191, l = q &= 8191, p = $ &= 8191, f = H &= 8191, 
          t += 16, r -= 16;
        }
        this._h[0] = n, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = h, this._h[6] = u, this._h[7] = l, 
        this._h[8] = p, this._h[9] = f;
      }, e.prototype.finish = function(e, t) {
        void 0 === t && (t = 0);
        var r = new Uint16Array(10);
        var i;
        var n;
        var s;
        var o;
        if (this._leftover) {
          for (o = this._leftover, this._buffer[o++] = 1; o < 16; o++) this._buffer[o] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (i = this._h[1] >>> 13, this._h[1] &= 8191, o = 2; o < 10; o++) this._h[o] += i, i = this._h[o] >>> 13, this._h[o] &= 8191;
        for (this._h[0] += 5 * i, i = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += i, i = this._h[1] >>> 13, this._h[1] &= 8191, 
        this._h[2] += i, r[0] = this._h[0] + 5, i = r[0] >>> 13, r[0] &= 8191, o = 1; o < 10; o++) r[o] = this._h[o] + i, i = r[o] >>> 13, 
        r[o] &= 8191;
        for (r[9] -= 8192, n = (1 ^ i) - 1, o = 0; o < 10; o++) r[o] &= n;
        for (n = ~n, o = 0; o < 10; o++) this._h[o] = this._h[o] & n | r[o];
        for (this._h[0] = 65535 & (this._h[0] | this._h[1] << 13), this._h[1] = 65535 & (this._h[1] >>> 3 | this._h[2] << 10), this._h[2] = 65535 & (this._h[2] >>> 6 | this._h[3] << 7), 
        this._h[3] = 65535 & (this._h[3] >>> 9 | this._h[4] << 4), this._h[4] = 65535 & (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14), 
        this._h[5] = 65535 & (this._h[6] >>> 2 | this._h[7] << 11), this._h[6] = 65535 & (this._h[7] >>> 5 | this._h[8] << 8), this._h[7] = 65535 & (this._h[8] >>> 8 | this._h[9] << 5), 
        s = this._h[0] + this._pad[0], this._h[0] = 65535 & s, o = 1; o < 8; o++) s = (this._h[o] + this._pad[o] | 0) + (s >>> 16) | 0, 
        this._h[o] = 65535 & s;
        return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, 
        e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, 
        e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, 
        e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, e.prototype.update = function(e) {
        var t = 0;
        var r = e.length;
        var i;
        if (this._leftover) {
          (i = 16 - this._leftover) > r && (i = r);
          for (var n = 0; n < i; n++) this._buffer[this._leftover + n] = e[t + n];
          if (r -= i, t += i, this._leftover += i, this._leftover < 16) return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (r >= 16 && (i = r - r % 16, this._blocks(e, t, i), t += i, r -= i), r) {
          for (n = 0; n < r; n++) this._buffer[this._leftover + n] = e[t + n];
          this._leftover += r;
        }
        return this;
      }, e.prototype.digest = function() {
        if (this._finished) throw new Error("Poly1305 was finished");
        var e = new Uint8Array(16);
        return this.finish(e), e;
      }, e.prototype.clean = function() {
        return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, 
        this;
      }, e;
    }();
    t.Poly1305 = s, t.oneTimeAuth = function(e, t) {
      var r = new s(e);
      r.update(t);
      var i = r.digest();
      return r.clean(), i;
    }, t.equal = function(e, r) {
      return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && i.equal(e, r);
    };
  },
  3764: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
    const i = r(6841);
    const n = r(825);
    const s = r(2247);
    function o(e, r = t.defaultRandomSource) {
      return r.randomBytes(e);
    }
    t.defaultRandomSource = new i.SystemRandomSource, t.randomBytes = o, t.randomUint32 = function(e = t.defaultRandomSource) {
      const r = o(4, e);
      const i = (0, n.readUint32LE)(r);
      return (0, s.wipe)(r), i;
    };
    const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function c(e, r = a, i = t.defaultRandomSource) {
      if (r.length < 2) throw new Error("randomString charset is too short");
      if (r.length > 256) throw new Error("randomString charset is too long");
      let n = '';
      const c = r.length;
      const h = 256 - 256 % c;
      for (;e > 0; ) {
        const t = o(Math.ceil(256 * e / h), i);
        for (let i = 0; i < t.length && e > 0; i++) {
          const s = t[i];
          s < h && (n += r.charAt(s % c), e--);
        }
        (0, s.wipe)(t);
      }
      return n;
    }
    t.randomString = c, t.randomStringForEntropy = function(e, r = a, i = t.defaultRandomSource) {
      return c(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, i);
    };
  },
  1512: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.BrowserRandomSource = void 0;
    t.BrowserRandomSource = class {
      constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        const e = 'undefined' != typeof self ? self.crypto || self.msCrypto : null;
        e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
      }
      randomBytes(e) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const t = new Uint8Array(e);
        for (let r = 0; r < t.length; r += 65536) this._crypto.getRandomValues(t.subarray(r, r + Math.min(t.length - r, 65536)));
        return t;
      }
    };
  },
  7779: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.NodeRandomSource = void 0;
    const i = r(2247);
    t.NodeRandomSource = class {
      constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        {
          const e = r(5883);
          e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
        }
      }
      randomBytes(e) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        let t = this._crypto.randomBytes(e);
        if (t.length !== e) throw new Error("NodeRandomSource: got fewer bytes than requested");
        const r = new Uint8Array(e);
        for (let i = 0; i < r.length; i++) r[i] = t[i];
        return (0, i.wipe)(t), r;
      }
    };
  },
  6841: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SystemRandomSource = void 0;
    const i = r(1512);
    const n = r(7779);
    t.SystemRandomSource = class {
      constructor() {
        return this.isAvailable = !1, this.name = "", this._source = new i.BrowserRandomSource, this._source.isAvailable ? (this.isAvailable = !0, 
        void (this.name = "Browser")) : (this._source = new n.NodeRandomSource, this._source.isAvailable ? (this.isAvailable = !0, 
        void (this.name = "Node")) : void 0);
      }
      randomBytes(e) {
        if (!this.isAvailable) throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(e);
      }
    };
  },
  817: (e, t, r) => {
    "use strict";
    var i = r(825);
    var n = r(2247);
    t.k = 32, t.cn = 64;
    var s = function() {
      function e() {
        this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), 
        this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return e.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, 
        this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, e.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, e.prototype.clean = function() {
        n.wipe(this._buffer), n.wipe(this._temp), this.reset();
      }, e.prototype.update = function(e, t) {
        if (void 0 === t && (t = e.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
        var r = 0;
        if (this._bytesHashed += t, this._bufferLength > 0) {
          for (;this._bufferLength < this.blockSize && t > 0; ) this._buffer[this._bufferLength++] = e[r++], t--;
          this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (t >= this.blockSize && (r = a(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0; ) this._buffer[this._bufferLength++] = e[r++], 
        t--;
        return this;
      }, e.prototype.finish = function(e) {
        if (!this._finished) {
          var t = this._bytesHashed;
          var r = this._bufferLength;
          var n = t / 536870912 | 0;
          var s = t << 3;
          var o = t % 64 < 56 ? 64 : 128;
          this._buffer[r] = 128;
          for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
          i.writeUint32BE(n, this._buffer, o - 8), i.writeUint32BE(s, this._buffer, o - 4), a(this._temp, this._state, this._buffer, 0, o), 
          this._finished = !0;
        }
        for (c = 0; c < this.digestLength / 4; c++) i.writeUint32BE(this._state[c], e, 4 * c);
        return this;
      }, e.prototype.digest = function() {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }, e.prototype.saveState = function() {
        if (this._finished) throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, e.prototype.restoreState = function(e) {
        return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, 
        this._finished = !1, this;
      }, e.prototype.cleanSavedState = function(e) {
        n.wipe(e.state), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0;
      }, e;
    }();
    t.mE = s;
    var o = new Int32Array([ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ]);
    function a(e, t, r, n, s) {
      for (;s >= 64; ) {
        var a = t[0];
        var c = t[1];
        var h = t[2];
        var u = t[3];
        var l = t[4];
        var p = t[5];
        var f = t[6];
        var d = t[7];
        for (var g = 0; g < 16; g++) {
          var y = n + 4 * g;
          e[g] = i.readUint32BE(r, y);
        }
        for (g = 16; g < 64; g++) {
          var v = e[g - 2];
          var m = (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10;
          var b = ((v = e[g - 15]) >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
          e[g] = (m + e[g - 7] | 0) + (b + e[g - 16] | 0);
        }
        for (g = 0; g < 64; g++) {
          m = (((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & p ^ ~l & f) | 0) + (d + (o[g] + e[g] | 0) | 0) | 0;
          b = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & h ^ c & h) | 0;
          d = f, f = p, p = l, l = u + m | 0, u = h, h = c, c = a, a = m + b | 0;
        }
        t[0] += a, t[1] += c, t[2] += h, t[3] += u, t[4] += l, t[5] += p, t[6] += f, t[7] += d, n += 64, s -= 64;
      }
      return n;
    }
    t.vp = function(e) {
      var t = new s;
      t.update(e);
      var r = t.digest();
      return t.clean(), r;
    };
  },
  4837: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(825);
    var n = r(2247);
    t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
    var s = function() {
      function e() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), 
        this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, 
        this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return e.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, 
        this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, 
        this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, 
        this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, e.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, e.prototype.clean = function() {
        n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset();
      }, e.prototype.update = function(e, r) {
        if (void 0 === r && (r = e.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
        var i = 0;
        if (this._bytesHashed += r, this._bufferLength > 0) {
          for (;this._bufferLength < t.BLOCK_SIZE && r > 0; ) this._buffer[this._bufferLength++] = e[i++], r--;
          this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), 
          this._bufferLength = 0);
        }
        for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0; ) this._buffer[this._bufferLength++] = e[i++], 
        r--;
        return this;
      }, e.prototype.finish = function(e) {
        if (!this._finished) {
          var t = this._bytesHashed;
          var r = this._bufferLength;
          var n = t / 536870912 | 0;
          var s = t << 3;
          var o = t % 128 < 112 ? 128 : 256;
          this._buffer[r] = 128;
          for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
          i.writeUint32BE(n, this._buffer, o - 8), i.writeUint32BE(s, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), 
          this._finished = !0;
        }
        for (c = 0; c < this.digestLength / 8; c++) i.writeUint32BE(this._stateHi[c], e, 8 * c), i.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
        return this;
      }, e.prototype.digest = function() {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }, e.prototype.saveState = function() {
        if (this._finished) throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, e.prototype.restoreState = function(e) {
        return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), 
        this._bytesHashed = e.bytesHashed, this._finished = !1, this;
      }, e.prototype.cleanSavedState = function(e) {
        n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0;
      }, e;
    }();
    t.SHA512 = s;
    var o = new Int32Array([ 1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591 ]);
    function a(e, t, r, n, s, a, c) {
      var h = r[0], u = r[1], l = r[2], p = r[3], f = r[4], d = r[5], g = r[6], y = r[7], v = n[0], m = n[1], b = n[2], w = n[3], _ = n[4], E = n[5], S = n[6], O = n[7];
      var I, R;
      var P, N;
      var x, T, A, U;
      for (;c >= 128; ) {
        for (var j = 0; j < 16; j++) {
          var L = 8 * j + a;
          e[j] = i.readUint32BE(s, L), t[j] = i.readUint32BE(s, L + 4);
        }
        for (j = 0; j < 80; j++) {
          var C = h;
          var M = u;
          var D = l;
          var k = p;
          var z = f;
          var q = d;
          var $ = g;
          var H;
          var V = v;
          var J = m;
          var K = b;
          var F = w;
          var B = _;
          var W = E;
          var G = S;
          var Y;
          if (x = 65535 & (R = O), T = R >>> 16, A = 65535 & (I = y), U = I >>> 16, x += 65535 & (R = (_ >>> 14 | f << 18) ^ (_ >>> 18 | f << 14) ^ (f >>> 9 | _ << 23)), 
          T += R >>> 16, A += 65535 & (I = (f >>> 14 | _ << 18) ^ (f >>> 18 | _ << 14) ^ (_ >>> 9 | f << 23)), U += I >>> 16, x += 65535 & (R = _ & E ^ ~_ & S), 
          T += R >>> 16, A += 65535 & (I = f & d ^ ~f & g), U += I >>> 16, I = o[2 * j], x += 65535 & (R = o[2 * j + 1]), T += R >>> 16, 
          A += 65535 & I, U += I >>> 16, I = e[j % 16], T += (R = t[j % 16]) >>> 16, A += 65535 & I, U += I >>> 16, A += (T += (x += 65535 & R) >>> 16) >>> 16, 
          x = 65535 & (R = N = 65535 & x | T << 16), T = R >>> 16, A = 65535 & (I = P = 65535 & A | (U += A >>> 16) << 16), U = I >>> 16, 
          x += 65535 & (R = (v >>> 28 | h << 4) ^ (h >>> 2 | v << 30) ^ (h >>> 7 | v << 25)), T += R >>> 16, A += 65535 & (I = (h >>> 28 | v << 4) ^ (v >>> 2 | h << 30) ^ (v >>> 7 | h << 25)), 
          U += I >>> 16, T += (R = v & m ^ v & b ^ m & b) >>> 16, A += 65535 & (I = h & u ^ h & l ^ u & l), U += I >>> 16, H = 65535 & (A += (T += (x += 65535 & R) >>> 16) >>> 16) | (U += A >>> 16) << 16, 
          Y = 65535 & x | T << 16, x = 65535 & (R = F), T = R >>> 16, A = 65535 & (I = k), U = I >>> 16, T += (R = N) >>> 16, A += 65535 & (I = P), 
          U += I >>> 16, u = C, l = M, p = D, f = k = 65535 & (A += (T += (x += 65535 & R) >>> 16) >>> 16) | (U += A >>> 16) << 16, 
          d = z, g = q, y = $, h = H, m = V, b = J, w = K, _ = F = 65535 & x | T << 16, E = B, S = W, O = G, v = Y, j % 16 == 15) for (L = 0; L < 16; L++) I = e[L], 
          x = 65535 & (R = t[L]), T = R >>> 16, A = 65535 & I, U = I >>> 16, I = e[(L + 9) % 16], x += 65535 & (R = t[(L + 9) % 16]), 
          T += R >>> 16, A += 65535 & I, U += I >>> 16, P = e[(L + 1) % 16], x += 65535 & (R = ((N = t[(L + 1) % 16]) >>> 1 | P << 31) ^ (N >>> 8 | P << 24) ^ (N >>> 7 | P << 25)), 
          T += R >>> 16, A += 65535 & (I = (P >>> 1 | N << 31) ^ (P >>> 8 | N << 24) ^ P >>> 7), U += I >>> 16, P = e[(L + 14) % 16], 
          T += (R = ((N = t[(L + 14) % 16]) >>> 19 | P << 13) ^ (P >>> 29 | N << 3) ^ (N >>> 6 | P << 26)) >>> 16, A += 65535 & (I = (P >>> 19 | N << 13) ^ (N >>> 29 | P << 3) ^ P >>> 6), 
          U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, e[L] = 65535 & A | U << 16, t[L] = 65535 & x | T << 16;
        }
        x = 65535 & (R = v), T = R >>> 16, A = 65535 & (I = h), U = I >>> 16, I = r[0], T += (R = n[0]) >>> 16, A += 65535 & I, 
        U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, r[0] = h = 65535 & A | U << 16, n[0] = v = 65535 & x | T << 16, 
        x = 65535 & (R = m), T = R >>> 16, A = 65535 & (I = u), U = I >>> 16, I = r[1], T += (R = n[1]) >>> 16, A += 65535 & I, 
        U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, r[1] = u = 65535 & A | U << 16, n[1] = m = 65535 & x | T << 16, 
        x = 65535 & (R = b), T = R >>> 16, A = 65535 & (I = l), U = I >>> 16, I = r[2], T += (R = n[2]) >>> 16, A += 65535 & I, 
        U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, r[2] = l = 65535 & A | U << 16, n[2] = b = 65535 & x | T << 16, 
        x = 65535 & (R = w), T = R >>> 16, A = 65535 & (I = p), U = I >>> 16, I = r[3], T += (R = n[3]) >>> 16, A += 65535 & I, 
        U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, r[3] = p = 65535 & A | U << 16, n[3] = w = 65535 & x | T << 16, 
        x = 65535 & (R = _), T = R >>> 16, A = 65535 & (I = f), U = I >>> 16, I = r[4], T += (R = n[4]) >>> 16, A += 65535 & I, 
        U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, r[4] = f = 65535 & A | U << 16, n[4] = _ = 65535 & x | T << 16, 
        x = 65535 & (R = E), T = R >>> 16, A = 65535 & (I = d), U = I >>> 16, I = r[5], T += (R = n[5]) >>> 16, A += 65535 & I, 
        U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, r[5] = d = 65535 & A | U << 16, n[5] = E = 65535 & x | T << 16, 
        x = 65535 & (R = S), T = R >>> 16, A = 65535 & (I = g), U = I >>> 16, I = r[6], T += (R = n[6]) >>> 16, A += 65535 & I, 
        U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, r[6] = g = 65535 & A | U << 16, n[6] = S = 65535 & x | T << 16, 
        x = 65535 & (R = O), T = R >>> 16, A = 65535 & (I = y), U = I >>> 16, I = r[7], T += (R = n[7]) >>> 16, A += 65535 & I, 
        U += I >>> 16, U += (A += (T += (x += 65535 & R) >>> 16) >>> 16) >>> 16, r[7] = y = 65535 & A | U << 16, n[7] = O = 65535 & x | T << 16, 
        a += 128, c -= 128;
      }
      return a;
    }
    t.hash = function(e) {
      var t = new s;
      t.update(e);
      var r = t.digest();
      return t.clean(), r;
    };
  },
  2247: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.wipe = function(e) {
      for (var t = 0; t < e.length; t++) e[t] = 0;
      return e;
    };
  },
  7038: (e, t, r) => {
    "use strict";
    t.gi = t.Au = t.KS = t.kz = void 0;
    const i = r(3764);
    const n = r(2247);
    function s(e) {
      const t = new Float64Array(16);
      if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
      return t;
    }
    t.kz = 32, t.KS = 32;
    const o = new Uint8Array(32);
    o[0] = 9;
    const a = s([ 56129, 1 ]);
    function c(e) {
      let t = 1;
      for (let r = 0; r < 16; r++) {
        let i = e[r] + t + 65535;
        t = Math.floor(i / 65536), e[r] = i - 65536 * t;
      }
      e[0] += t - 1 + 37 * (t - 1);
    }
    function h(e, t, r) {
      const i = ~(r - 1);
      for (let n = 0; n < 16; n++) {
        const r = i & (e[n] ^ t[n]);
        e[n] ^= r, t[n] ^= r;
      }
    }
    function u(e, t, r) {
      for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
    }
    function l(e, t, r) {
      for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
    }
    function p(e, t, r) {
      let i, n, s = 0, o = 0, a = 0, c = 0, h = 0, u = 0, l = 0, p = 0, f = 0, d = 0, g = 0, y = 0, v = 0, m = 0, b = 0, w = 0, _ = 0, E = 0, S = 0, O = 0, I = 0, R = 0, P = 0, N = 0, x = 0, T = 0, A = 0, U = 0, j = 0, L = 0, C = 0, M = r[0], D = r[1], k = r[2], z = r[3], q = r[4], $ = r[5], H = r[6], V = r[7], J = r[8], K = r[9], F = r[10], B = r[11], W = r[12], G = r[13], Y = r[14], X = r[15];
      i = t[0], s += i * M, o += i * D, a += i * k, c += i * z, h += i * q, u += i * $, l += i * H, p += i * V, f += i * J, d += i * K, 
      g += i * F, y += i * B, v += i * W, m += i * G, b += i * Y, w += i * X, i = t[1], o += i * M, a += i * D, c += i * k, h += i * z, 
      u += i * q, l += i * $, p += i * H, f += i * V, d += i * J, g += i * K, y += i * F, v += i * B, m += i * W, b += i * G, 
      w += i * Y, _ += i * X, i = t[2], a += i * M, c += i * D, h += i * k, u += i * z, l += i * q, p += i * $, f += i * H, d += i * V, 
      g += i * J, y += i * K, v += i * F, m += i * B, b += i * W, w += i * G, _ += i * Y, E += i * X, i = t[3], c += i * M, h += i * D, 
      u += i * k, l += i * z, p += i * q, f += i * $, d += i * H, g += i * V, y += i * J, v += i * K, m += i * F, b += i * B, 
      w += i * W, _ += i * G, E += i * Y, S += i * X, i = t[4], h += i * M, u += i * D, l += i * k, p += i * z, f += i * q, d += i * $, 
      g += i * H, y += i * V, v += i * J, m += i * K, b += i * F, w += i * B, _ += i * W, E += i * G, S += i * Y, O += i * X, 
      i = t[5], u += i * M, l += i * D, p += i * k, f += i * z, d += i * q, g += i * $, y += i * H, v += i * V, m += i * J, b += i * K, 
      w += i * F, _ += i * B, E += i * W, S += i * G, O += i * Y, I += i * X, i = t[6], l += i * M, p += i * D, f += i * k, d += i * z, 
      g += i * q, y += i * $, v += i * H, m += i * V, b += i * J, w += i * K, _ += i * F, E += i * B, S += i * W, O += i * G, 
      I += i * Y, R += i * X, i = t[7], p += i * M, f += i * D, d += i * k, g += i * z, y += i * q, v += i * $, m += i * H, b += i * V, 
      w += i * J, _ += i * K, E += i * F, S += i * B, O += i * W, I += i * G, R += i * Y, P += i * X, i = t[8], f += i * M, d += i * D, 
      g += i * k, y += i * z, v += i * q, m += i * $, b += i * H, w += i * V, _ += i * J, E += i * K, S += i * F, O += i * B, 
      I += i * W, R += i * G, P += i * Y, N += i * X, i = t[9], d += i * M, g += i * D, y += i * k, v += i * z, m += i * q, b += i * $, 
      w += i * H, _ += i * V, E += i * J, S += i * K, O += i * F, I += i * B, R += i * W, P += i * G, N += i * Y, x += i * X, 
      i = t[10], g += i * M, y += i * D, v += i * k, m += i * z, b += i * q, w += i * $, _ += i * H, E += i * V, S += i * J, O += i * K, 
      I += i * F, R += i * B, P += i * W, N += i * G, x += i * Y, T += i * X, i = t[11], y += i * M, v += i * D, m += i * k, b += i * z, 
      w += i * q, _ += i * $, E += i * H, S += i * V, O += i * J, I += i * K, R += i * F, P += i * B, N += i * W, x += i * G, 
      T += i * Y, A += i * X, i = t[12], v += i * M, m += i * D, b += i * k, w += i * z, _ += i * q, E += i * $, S += i * H, O += i * V, 
      I += i * J, R += i * K, P += i * F, N += i * B, x += i * W, T += i * G, A += i * Y, U += i * X, i = t[13], m += i * M, b += i * D, 
      w += i * k, _ += i * z, E += i * q, S += i * $, O += i * H, I += i * V, R += i * J, P += i * K, N += i * F, x += i * B, 
      T += i * W, A += i * G, U += i * Y, j += i * X, i = t[14], b += i * M, w += i * D, _ += i * k, E += i * z, S += i * q, O += i * $, 
      I += i * H, R += i * V, P += i * J, N += i * K, x += i * F, T += i * B, A += i * W, U += i * G, j += i * Y, L += i * X, 
      i = t[15], w += i * M, _ += i * D, E += i * k, S += i * z, O += i * q, I += i * $, R += i * H, P += i * V, N += i * J, x += i * K, 
      T += i * F, A += i * B, U += i * W, j += i * G, L += i * Y, C += i * X, s += 38 * _, o += 38 * E, a += 38 * S, c += 38 * O, 
      h += 38 * I, u += 38 * R, l += 38 * P, p += 38 * N, f += 38 * x, d += 38 * T, g += 38 * A, y += 38 * U, v += 38 * j, m += 38 * L, 
      b += 38 * C, n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), 
      o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), 
      c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), 
      u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), 
      p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), 
      d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), 
      y = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), 
      m = i - 65536 * n, i = b + n + 65535, n = Math.floor(i / 65536), b = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), 
      w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, 
      n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, 
      n = Math.floor(i / 65536), c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, 
      n = Math.floor(i / 65536), u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, 
      n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, 
      n = Math.floor(i / 65536), d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = y + n + 65535, 
      n = Math.floor(i / 65536), y = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = m + n + 65535, 
      n = Math.floor(i / 65536), m = i - 65536 * n, i = b + n + 65535, n = Math.floor(i / 65536), b = i - 65536 * n, i = w + n + 65535, 
      n = Math.floor(i / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = h, 
      e[5] = u, e[6] = l, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = b, e[15] = w;
    }
    function f(e, t) {
      p(e, t, t);
    }
    function d(e, t) {
      const r = new Uint8Array(32);
      const i = new Float64Array(80);
      const n = s(), o = s(), d = s(), g = s(), y = s(), v = s();
      for (let s = 0; s < 31; s++) r[s] = e[s];
      r[31] = 127 & e[31] | 64, r[0] &= 248, function(e, t) {
        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
        e[15] &= 32767;
      }(i, t);
      for (let s = 0; s < 16; s++) o[s] = i[s];
      n[0] = g[0] = 1;
      for (let s = 254; s >= 0; --s) {
        const e = r[s >>> 3] >>> (7 & s) & 1;
        h(n, o, e), h(d, g, e), u(y, n, d), l(n, n, d), u(d, o, g), l(o, o, g), f(g, y), f(v, n), p(n, d, n), p(d, o, y), u(y, n, d), 
        l(n, n, d), f(o, n), l(d, g, v), p(n, d, a), u(n, n, g), p(d, d, n), p(n, g, v), p(g, o, i), f(o, y), h(n, o, e), h(d, g, e);
      }
      for (let s = 0; s < 16; s++) i[s + 16] = n[s], i[s + 32] = d[s], i[s + 48] = o[s], i[s + 64] = g[s];
      const m = i.subarray(32);
      const b = i.subarray(16);
      !function(e, t) {
        const r = s();
        for (let i = 0; i < 16; i++) r[i] = t[i];
        for (let i = 253; i >= 0; i--) f(r, r), 2 !== i && 4 !== i && p(r, r, t);
        for (let i = 0; i < 16; i++) e[i] = r[i];
      }(m, m), p(b, b, m);
      const w = new Uint8Array(32);
      return function(e, t) {
        const r = s();
        const i = s();
        for (let n = 0; n < 16; n++) i[n] = t[n];
        c(i), c(i), c(i);
        for (let n = 0; n < 2; n++) {
          r[0] = i[0] - 65517;
          for (let t = 1; t < 15; t++) r[t] = i[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
          r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
          const e = r[15] >> 16 & 1;
          r[14] &= 65535, h(i, r, 1 - e);
        }
        for (let n = 0; n < 16; n++) e[2 * n] = 255 & i[n], e[2 * n + 1] = i[n] >> 8;
      }(w, b), w;
    }
    function g(e) {
      return d(e, o);
    }
    function y(e) {
      if (e.length !== t.KS) throw new Error(`x25519: seed must be ${t.KS} bytes`);
      const r = new Uint8Array(e);
      return {
        publicKey: g(r),
        secretKey: r
      };
    }
    t.Au = function(e) {
      const t = (0, i.randomBytes)(32, e);
      const r = y(t);
      return (0, n.wipe)(t), r;
    }, t.gi = function(e, r, i = !1) {
      if (e.length !== t.kz) throw new Error("X25519: incorrect secret key length");
      if (r.length !== t.kz) throw new Error("X25519: incorrect public key length");
      const n = d(e, r);
      if (i) {
        let e = 0;
        for (let t = 0; t < n.length; t++) e |= n[t];
        if (0 === e) throw new Error("X25519: invalid shared key");
      }
      return n;
    };
  },
  8776: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      WC_DEFAULT_RPC_MAP: () => ao,
      WC_V2_DEFAULT_CHAINS: () => co,
      getWalletConnectV2ProviderInstance: () => ho
    });
    var i = {};
    r.r(i), r.d(i, {
      identity: () => q
    });
    var n = {};
    r.r(n), r.d(n, {
      base2: () => $
    });
    var s = {};
    r.r(s), r.d(s, {
      base8: () => H
    });
    var o = {};
    r.r(o), r.d(o, {
      base10: () => V
    });
    var a = {};
    r.r(a), r.d(a, {
      base16: () => J,
      base16upper: () => K
    });
    var c = {};
    r.r(c), r.d(c, {
      base36: () => B,
      base36upper: () => W
    });
    var h = {};
    r.r(h), r.d(h, {
      base64: () => Y,
      base64pad: () => X,
      base64url: () => Z,
      base64urlpad: () => Q
    });
    var u = {};
    r.r(u), r.d(u, {
      base256emoji: () => ie
    });
    var l = {};
    r.r(l), r.d(l, {
      sha256: () => oe,
      sha512: () => ae
    });
    var p = {};
    r.r(p), r.d(p, {
      identity: () => ue
    });
    var f = {};
    r.r(f), r.d(f, {
      code: () => pe,
      decode: () => de,
      encode: () => fe,
      name: () => le
    });
    var d = {};
    r.r(d), r.d(d, {
      code: () => me,
      decode: () => we,
      encode: () => be,
      name: () => ve
    });
    var g = r(7389);
    var y = r.n(g);
    var v = r(5939);
    var m = r.n(v);
    var b = r(5818);
    var w = r(1570);
    var _ = r(2844);
    var E = r(5656);
    class S extends E.q {
      constructor(e) {
        super(), this.opts = e, this.protocol = "wc", this.version = 2;
      }
    }
    class O extends E.q {
      constructor(e, t) {
        super(), this.core = e, this.logger = t, this.records = new Map;
      }
    }
    class I extends E.q {
      constructor(e, t) {
        super(), this.relayer = e, this.logger = t;
      }
    }
    class R extends E.q {
      constructor(e) {
        super();
      }
    }
    class P extends E.q {
      constructor(e, t) {
        super(), this.relayer = e, this.logger = t;
      }
    }
    class N extends E.q {
      constructor(e, t) {
        super(), this.core = e, this.logger = t;
      }
    }
    var x = r(5242);
    var T = r(3764);
    var A = r(1246);
    const U = "base64url";
    const j = "did";
    const L = "key";
    const C = "base58btc";
    function M(e = 0) {
      return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e);
    }
    function D(e, t) {
      t || (t = e.reduce(((e, t) => e + t.length), 0));
      const r = M(t);
      let i = 0;
      for (const n of e) r.set(n, i), i += n.length;
      return r;
    }
    var k = r(5221);
    var z = r(8286);
    const q = (0, k.Dp)({
      prefix: '\0',
      name: 'identity',
      encode: e => (0, z.toString)(e),
      decode: e => (0, z.fromString)(e)
    });
    const $ = (0, k.ET)({
      prefix: '0',
      name: 'base2',
      alphabet: '01',
      bitsPerChar: 1
    });
    const H = (0, k.ET)({
      prefix: '7',
      name: 'base8',
      alphabet: '01234567',
      bitsPerChar: 3
    });
    const V = (0, k.kU)({
      prefix: '9',
      name: 'base10',
      alphabet: '0123456789'
    });
    const J = (0, k.ET)({
      prefix: 'f',
      name: 'base16',
      alphabet: '0123456789abcdef',
      bitsPerChar: 4
    });
    const K = (0, k.ET)({
      prefix: 'F',
      name: 'base16upper',
      alphabet: '0123456789ABCDEF',
      bitsPerChar: 4
    });
    var F = r(3068);
    const B = (0, k.kU)({
      prefix: 'k',
      name: 'base36',
      alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
    });
    const W = (0, k.kU)({
      prefix: 'K',
      name: 'base36upper',
      alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    });
    var G = r(437);
    const Y = (0, k.ET)({
      prefix: 'm',
      name: 'base64',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      bitsPerChar: 6
    });
    const X = (0, k.ET)({
      prefix: 'M',
      name: 'base64pad',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      bitsPerChar: 6
    });
    const Z = (0, k.ET)({
      prefix: 'u',
      name: 'base64url',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
      bitsPerChar: 6
    });
    const Q = (0, k.ET)({
      prefix: 'U',
      name: 'base64urlpad',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
      bitsPerChar: 6
    });
    const ee = Array.from('🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂');
    const te = ee.reduce(((e, t, r) => (e[r] = t, e)), []);
    const re = ee.reduce(((e, t, r) => (e[t.codePointAt(0)] = r, e)), []);
    const ie = (0, k.Dp)({
      prefix: '🚀',
      name: 'base256emoji',
      encode: function(e) {
        return e.reduce(((e, t) => e += te[t]), '');
      },
      decode: function(e) {
        const t = [];
        for (const r of e) {
          const e = re[r.codePointAt(0)];
          if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
          t.push(e);
        }
        return new Uint8Array(t);
      }
    });
    var ne = r(7747);
    const se = e => async t => new Uint8Array(await crypto.subtle.digest(e, t));
    const oe = (0, ne.from)({
      name: 'sha2-256',
      code: 18,
      encode: se('SHA-256')
    });
    const ae = (0, ne.from)({
      name: 'sha2-512',
      code: 19,
      encode: se('SHA-512')
    });
    var ce = r(1923);
    const he = z.coerce;
    const ue = {
      code: 0,
      name: 'identity',
      encode: he,
      digest: e => ce.create(0, he(e))
    };
    const le = 'raw';
    const pe = 85;
    const fe = e => (0, z.coerce)(e);
    const de = e => (0, z.coerce)(e);
    const ge = new TextEncoder;
    const ye = new TextDecoder;
    const ve = 'json';
    const me = 512;
    const be = e => ge.encode(JSON.stringify(e));
    const we = e => JSON.parse(ye.decode(e));
    r(9527);
    const _e = {
      ...i,
      ...n,
      ...s,
      ...o,
      ...a,
      ...F,
      ...c,
      ...G,
      ...h,
      ...u
    };
    function Ee(e, t, r, i) {
      return {
        name: e,
        prefix: t,
        encoder: {
          name: e,
          prefix: t,
          encode: r
        },
        decoder: {
          decode: i
        }
      };
    }
    const Se = Ee('utf8', 'u', (e => 'u' + new TextDecoder('utf8').decode(e)), (e => (new TextEncoder).encode(e.substring(1))));
    const Oe = Ee('ascii', 'a', (e => {
      let t = 'a';
      for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
      return t;
    }), (e => {
      const t = M((e = e.substring(1)).length);
      for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
      return t;
    }));
    const Ie = {
      utf8: Se,
      'utf-8': Se,
      hex: _e.base16,
      latin1: Oe,
      ascii: Oe,
      binary: Oe,
      ..._e
    };
    function Re(e, t = "utf8") {
      const r = Ie[t];
      if (!r) throw new Error(`Unsupported encoding "${t}"`);
      return 'utf8' !== t && 'utf-8' !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.encoder.encode(e).substring(1) : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8');
    }
    function Pe(e, t = "utf8") {
      const r = Ie[t];
      if (!r) throw new Error(`Unsupported encoding "${t}"`);
      return 'utf8' !== t && 'utf-8' !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${e}`) : globalThis.Buffer.from(e, 'utf8');
    }
    function Ne(e) {
      return Re(Pe(function(e) {
        return "string" == typeof e ? e : JSON.stringify(e);
      }(e), "utf8"), U);
    }
    function xe(e) {
      const t = "z" + Re(D([ Pe("K36", C), e ]), C);
      return [ j, L, t ].join(":");
    }
    function Te(e) {
      return Re(e, U);
    }
    function Ae(e = (0, T.randomBytes)(32)) {
      return x._w(e);
    }
    async function Ue(e, t, r, i, n = (0, A.fromMiliseconds)(Date.now())) {
      const s = {
        alg: "EdDSA",
        typ: "JWT"
      };
      const o = {
        iss: xe(i.publicKey),
        sub: e,
        aud: t,
        iat: n,
        exp: n + r
      };
      const a = function(e) {
        return Pe([ Ne(e.header), Ne(e.payload) ].join("."), "utf8");
      }({
        header: s,
        payload: o
      });
      return function(e) {
        return [ Ne(e.header), Ne(e.payload), Te(e.signature) ].join(".");
      }({
        header: s,
        payload: o,
        signature: x.Xx(i.secretKey, a)
      });
    }
    r(2206);
    var je = r(8805);
    var Le = r(8088);
    var Ce = r(817);
    var Me = r(7038);
    var De = function(e, t, r) {
      if (r || 2 === arguments.length) for (var i, n = 0, s = t.length; n < s; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), 
      i[n] = t[n]);
      return e.concat(i || Array.prototype.slice.call(t));
    };
    var ke = function() {
      return function(e, t, r) {
        this.name = e, this.version = t, this.os = r, this.type = 'browser';
      };
    }();
    var ze = function() {
      return function(e) {
        this.version = e, this.type = 'node', this.name = 'node', this.os = process.platform;
      };
    }();
    var qe = function() {
      return function(e, t, r, i) {
        this.name = e, this.version = t, this.os = r, this.bot = i, this.type = 'bot-device';
      };
    }();
    var $e = function() {
      return function() {
        this.type = 'bot', this.bot = !0, this.name = 'bot', this.version = null, this.os = null;
      };
    }();
    var He = function() {
      return function() {
        this.type = 'react-native', this.name = 'react-native', this.version = null, this.os = null;
      };
    }();
    var Ve = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
    var Je = [ [ 'aol', /AOLShield\/([0-9\._]+)/ ], [ 'edge', /Edge\/([0-9\._]+)/ ], [ 'edge-ios', /EdgiOS\/([0-9\._]+)/ ], [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ], [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ], [ 'samsung', /SamsungBrowser\/([0-9\.]+)/ ], [ 'silk', /\bSilk\/([0-9._-]+)\b/ ], [ 'miui', /MiuiBrowser\/([0-9\.]+)$/ ], [ 'beaker', /BeakerBrowser\/([0-9\.]+)/ ], [ 'edge-chromium', /EdgA?\/([0-9\.]+)/ ], [ 'chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ], [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ], [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ], [ 'fxios', /FxiOS\/([0-9\.]+)/ ], [ 'opera-mini', /Opera Mini.*Version\/([0-9\.]+)/ ], [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ], [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)/ ], [ 'pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/ ], [ 'pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/ ], [ 'netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/ ], [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ], [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ], [ 'ie', /MSIE\s(7\.0)/ ], [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ], [ 'android', /Android\s([0-9\.]+)/ ], [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ], [ 'safari', /Version\/([0-9\._]+).*Safari/ ], [ 'facebook', /FB[AS]V\/([0-9\.]+)/ ], [ 'instagram', /Instagram\s([0-9\.]+)/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/ ], [ 'curl', /^curl\/([0-9\.]+)$/ ], [ 'searchbot', /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/ ] ];
    var Ke = [ [ 'iOS', /iP(hone|od|ad)/ ], [ 'Android OS', /Android/ ], [ 'BlackBerry OS', /BlackBerry|BB10/ ], [ 'Windows Mobile', /IEMobile/ ], [ 'Amazon OS', /Kindle/ ], [ 'Windows 3.11', /Win16/ ], [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ], [ 'Windows 98', /(Windows 98)|(Win98)/ ], [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ], [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ], [ 'Windows Server 2003', /(Windows NT 5.2)/ ], [ 'Windows Vista', /(Windows NT 6.0)/ ], [ 'Windows 7', /(Windows NT 6.1)/ ], [ 'Windows 8', /(Windows NT 6.2)/ ], [ 'Windows 8.1', /(Windows NT 6.3)/ ], [ 'Windows 10', /(Windows NT 10.0)/ ], [ 'Windows ME', /Windows ME/ ], [ 'Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/ ], [ 'Open BSD', /OpenBSD/ ], [ 'Sun OS', /SunOS/ ], [ 'Chrome OS', /CrOS/ ], [ 'Linux', /(Linux)|(X11)/ ], [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ], [ 'QNX', /QNX/ ], [ 'BeOS', /BeOS/ ], [ 'OS/2', /OS\/2/ ] ];
    function Fe(e) {
      return e ? We(e) : 'undefined' == typeof document && 'undefined' != typeof navigator && 'ReactNative' === navigator.product ? new He : 'undefined' != typeof navigator ? We(navigator.userAgent) : function() {
        return 'undefined' != typeof process && process.version ? new ze(process.version.slice(1)) : null;
      }();
    }
    function Be(e) {
      return '' !== e && Je.reduce((function(t, r) {
        var i = r[0], n = r[1];
        if (t) return t;
        var s = n.exec(e);
        return !!s && [ i, s ];
      }), !1);
    }
    function We(e) {
      var t = Be(e);
      if (!t) return null;
      var r = t[0], i = t[1];
      if ('searchbot' === r) return new $e;
      var n = i[1] && i[1].split('.').join('_').split('_').slice(0, 3);
      n ? n.length < 3 && (n = De(De([], n, !0), function(e) {
        var t = [];
        for (var r = 0; r < e; r++) t.push('0');
        return t;
      }(3 - n.length), !0)) : n = [];
      var s = n.join('.');
      var o = function(e) {
        for (var t = 0, r = Ke.length; t < r; t++) {
          var i = Ke[t], n = i[0];
          if (i[1].exec(e)) return n;
        }
        return null;
      }(e);
      var a = Ve.exec(e);
      return a && a[1] ? new qe(r, s, o, a[1]) : new ke(r, s, o);
    }
    var Ge = r(385);
    var Ye = r(6070);
    var Xe = r(20);
    r(7529);
    const Ze = {
      waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe"
      },
      irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe"
      },
      iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe"
      }
    };
    function Qe(e, t) {
      return e.includes(":") ? [ e ] : t.chains || [];
    }
    const et = "base10", tt = "base16", rt = "base64pad", it = "utf8";
    function nt() {
      return Re((0, T.randomBytes)(32), tt);
    }
    function st(e) {
      return Re((0, Ce.vp)(Pe(e, it)), tt);
    }
    function ot(e) {
      return Number(Re(e, et));
    }
    function at(e) {
      const t = function(e) {
        return Pe(`${e}`, et);
      }(typeof e.type < "u" ? e.type : 0);
      if (1 === ot(t) && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
      const r = typeof e.senderPublicKey < "u" ? Pe(e.senderPublicKey, tt) : void 0, i = typeof e.iv < "u" ? Pe(e.iv, tt) : (0, 
      T.randomBytes)(12);
      return function(e) {
        if (1 === ot(e.type)) {
          if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
          return Re(D([ e.type, e.senderPublicKey, e.iv, e.sealed ]), rt);
        }
        return Re(D([ e.type, e.iv, e.sealed ]), rt);
      }({
        type: t,
        sealed: new je.OK(Pe(e.symKey, tt)).seal(i, Pe(e.message, it)),
        iv: i,
        senderPublicKey: r
      });
    }
    function ct(e) {
      const t = Pe(e, rt), r = t.slice(0, 1);
      if (1 === ot(r)) {
        const e = 33, i = e + 12, n = t.slice(1, e), s = t.slice(e, i);
        return {
          type: r,
          sealed: t.slice(i),
          iv: s,
          senderPublicKey: n
        };
      }
      const i = t.slice(1, 13);
      return {
        type: r,
        sealed: t.slice(13),
        iv: i
      };
    }
    function ht(e) {
      const t = e?.type || 0;
      if (1 === t) {
        if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
      }
      return {
        type: t,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
      };
    }
    function ut(e) {
      return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey;
    }
    var lt = Object.defineProperty, pt = Object.getOwnPropertySymbols, ft = Object.prototype.hasOwnProperty, dt = Object.prototype.propertyIsEnumerable, gt = (e, t, r) => t in e ? lt(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : e[t] = r, yt = (e, t) => {
      for (var r in t || (t = {})) ft.call(t, r) && gt(e, r, t[r]);
      if (pt) for (var r of pt(t)) dt.call(t, r) && gt(e, r, t[r]);
      return e;
    };
    const vt = "react-native", mt = "node", bt = "browser", wt = "unknown", _t = "js";
    function Et() {
      return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
    }
    function St() {
      return function() {
        return !(0, Ge.getDocument)() && !!(0, Ge.getNavigator)() && "ReactNative" === navigator.product;
      }() ? vt : Et() ? mt : function() {
        return !Et() && !!(0, Ge.getNavigator)();
      }() ? bt : wt;
    }
    function Ot(e, t, r) {
      const i = function() {
        const e = Fe();
        if (null === e) return "unknown";
        const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
        return "browser" === e.type ? [ t, e.name, e.version ].join("-") : [ t, e.version ].join("-");
      }(), n = function() {
        var e;
        const t = St();
        return t === bt ? [ t, (null == (e = (0, Ge.getLocation)()) ? void 0 : e.host) || "unknown" ].join(":") : t;
      }();
      return [ [ e, t ].join("-"), [ _t, r ].join("-"), i, n ].join("/");
    }
    function It({protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: s}) {
      const o = r.split("?"), a = {
        auth: n,
        ua: Ot(e, t, i),
        projectId: s
      }, c = function(e, t) {
        let r = Xe.parse(e);
        return r = yt(yt({}, r), t), Xe.stringify(r);
      }(o[1] || "", a);
      return o[0] + "?" + c;
    }
    function Rt(e, t) {
      return e.filter((e => t.includes(e))).length === e.length;
    }
    function Pt(e) {
      return Object.fromEntries(e.entries());
    }
    function Nt(e) {
      return new Map(Object.entries(e));
    }
    function xt(e) {
      const t = (0, A.toMiliseconds)(e || A.FIVE_MINUTES);
      let r, i, n;
      return {
        resolve: e => {
          n && r && (clearTimeout(n), r(e));
        },
        reject: e => {
          n && i && (clearTimeout(n), i(e));
        },
        done: () => new Promise(((e, s) => {
          n = setTimeout(s, t), r = e, i = s;
        }))
      };
    }
    function Tt(e, t) {
      return new Promise((async (r, i) => {
        const n = setTimeout((() => i()), t), s = await e;
        clearTimeout(n), r(s);
      }));
    }
    function At(e, t) {
      if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
      if ("topic" === e.toLowerCase()) {
        if ("string" != typeof t) throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`;
      }
      if ("id" === e.toLowerCase()) {
        if ("number" != typeof t) throw new Error('Value must be "number" for expirer target type: id');
        return `id:${t}`;
      }
      throw new Error(`Unknown expirer target type: ${e}`);
    }
    function Ut(e) {
      const [t, r] = e.split(":"), i = {
        id: void 0,
        topic: void 0
      };
      if ("topic" === t && "string" == typeof r) i.topic = r; else {
        if ("id" !== t || !Number.isInteger(Number(r))) throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
        i.id = Number(r);
      }
      return i;
    }
    function jt(e, t) {
      return (0, A.fromMiliseconds)((t || Date.now()) + (0, A.toMiliseconds)(e));
    }
    function Lt(e) {
      return Date.now() >= (0, A.toMiliseconds)(e);
    }
    function Ct(e, t) {
      return `${e}${t ? `:${t}` : ""}`;
    }
    function Mt(e) {
      return e?.relay || {
        protocol: "irn"
      };
    }
    function Dt(e) {
      const t = Ze[e];
      if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
      return t;
    }
    var kt = Object.defineProperty, zt = Object.getOwnPropertySymbols, qt = Object.prototype.hasOwnProperty, $t = Object.prototype.propertyIsEnumerable, Ht = (e, t, r) => t in e ? kt(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : e[t] = r;
    function Vt(e, t = "-") {
      const r = {}, i = "relay" + t;
      return Object.keys(e).forEach((t => {
        if (t.startsWith(i)) {
          const n = t.replace(i, ""), s = e[t];
          r[n] = s;
        }
      })), r;
    }
    function Jt(e) {
      return `${e.protocol}:${e.topic}@${e.version}?` + Xe.stringify(((e, t) => {
        for (var r in t || (t = {})) qt.call(t, r) && Ht(e, r, t[r]);
        if (zt) for (var r of zt(t)) $t.call(t, r) && Ht(e, r, t[r]);
        return e;
      })({
        symKey: e.symKey
      }, function(e, t = "-") {
        const r = {};
        return Object.keys(e).forEach((i => {
          const n = "relay" + t + i;
          e[i] && (r[n] = e[i]);
        })), r;
      }(e.relay)));
    }
    function Kt(e) {
      const t = [];
      return e.forEach((e => {
        const [r, i] = e.split(":");
        t.push(`${r}:${i}`);
      })), t;
    }
    const Ft = {
      INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
      },
      INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
      },
      INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
      },
      INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
      },
      INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
      },
      UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
      },
      UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
      },
      UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
      },
      UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
      },
      USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
      },
      USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
      },
      USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
      },
      USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
      },
      UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
      },
      UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
      },
      UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
      },
      UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
      },
      UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
      },
      USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
      },
      SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
      },
      WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
      }
    }, Bt = {
      NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
      },
      NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
      },
      RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
      },
      RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
      },
      MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
      },
      EXPIRED: {
        message: "Expired.",
        code: 6
      },
      UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
      },
      MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
      },
      NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
      }
    };
    function Wt(e, t) {
      const {message: r, code: i} = Bt[e];
      return {
        message: t ? `${r} ${t}` : r,
        code: i
      };
    }
    function Gt(e, t) {
      const {message: r, code: i} = Ft[e];
      return {
        message: t ? `${r} ${t}` : r,
        code: i
      };
    }
    function Yt(e, t) {
      return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t));
    }
    function Xt(e) {
      return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
    }
    function Zt(e) {
      return typeof e > "u";
    }
    function Qt(e, t) {
      return !(!t || !Zt(e)) || "string" == typeof e && Boolean(e.trim().length);
    }
    function er(e, t) {
      return !(!t || !Zt(e)) || "number" == typeof e && !isNaN(e);
    }
    function tr(e) {
      return !(!Qt(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
    }
    function rr(e) {
      let t = !0;
      return Yt(e) ? e.length && (t = e.every((e => Qt(e, !1)))) : t = !1, t;
    }
    function ir(e, t) {
      let r = null;
      return Object.entries(e).forEach((([e, i]) => {
        if (r) return;
        const n = function(e, t, r) {
          let i = null;
          return Yt(t) ? t.forEach((t => {
            i || (!tr(t) || !t.includes(e)) && (i = Gt("UNSUPPORTED_CHAINS", `${r}, chain ${t} should be a string and conform to "namespace:chainId" format`));
          })) : i = Gt("UNSUPPORTED_CHAINS", `${r}, chains ${t} should be an array of strings conforming to "namespace:chainId" format`), 
          i;
        }(e, Qe(e, i), `${t} requiredNamespace`);
        n && (r = n);
      })), r;
    }
    function nr(e, t) {
      let r = null;
      return Yt(e) ? e.forEach((e => {
        r || function(e) {
          if (Qt(e, !1) && e.includes(":")) {
            const t = e.split(":");
            if (3 === t.length) {
              const e = t[0] + ":" + t[1];
              return !!t[2] && tr(e);
            }
          }
          return !1;
        }(e) || (r = Gt("UNSUPPORTED_ACCOUNTS", `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`));
      })) : r = Gt("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), 
      r;
    }
    function sr(e, t) {
      let r = null;
      return Object.values(e).forEach((e => {
        if (r) return;
        const i = function(e, t) {
          let r = null;
          return rr(e?.methods) ? rr(e?.events) || (r = Gt("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = Gt("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), 
          r;
        }(e, `${t}, namespace`);
        i && (r = i);
      })), r;
    }
    function or(e, t) {
      let r = null;
      if (e && Xt(e)) {
        const i = sr(e, t);
        i && (r = i);
        const n = function(e, t) {
          let r = null;
          return Object.values(e).forEach((e => {
            if (r) return;
            const i = nr(e?.accounts, `${t} namespace`);
            i && (r = i);
          })), r;
        }(e, t);
        n && (r = n);
      } else r = Wt("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
      return r;
    }
    function ar(e) {
      return Qt(e.protocol, !0);
    }
    function cr(e) {
      return typeof e < "u" && null !== typeof e;
    }
    function hr(e, t) {
      return !(!tr(t) || !function(e) {
        const t = [];
        return Object.values(e).forEach((e => {
          t.push(...Kt(e.accounts));
        })), t;
      }(e).includes(t));
    }
    function ur(e, t, r) {
      return !!Qt(r, !1) && function(e, t) {
        const r = [];
        return Object.values(e).forEach((e => {
          Kt(e.accounts).includes(t) && r.push(...e.methods);
        })), r;
      }(e, t).includes(r);
    }
    function lr(e, t, r) {
      return !!Qt(r, !1) && function(e, t) {
        const r = [];
        return Object.values(e).forEach((e => {
          Kt(e.accounts).includes(t) && r.push(...e.events);
        })), r;
      }(e, t).includes(r);
    }
    function pr(e, t, r, i) {
      let n = null;
      const s = Object.keys(e);
      return Rt(s, Object.keys(t)) ? s.forEach((i => {
        if (n) return;
        const s = Kt(t[i].accounts);
        Rt(Qe(i, e[i]), s) ? Rt(e[i].methods, t[i].methods) ? Rt(e[i].events, t[i].events) || (n = Wt("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${i}`)) : n = Wt("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${i}`) : n = Wt("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace chains for ${i}`);
      })) : n = Wt("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy ${i}`), n;
    }
    var fr = r(2512);
    class dr extends fr.IJsonRpcProvider {
      constructor(e) {
        super(e), this.events = new v.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), 
        this.connection.connected && this.registerEventListeners();
      }
      async connect(e = this.connection) {
        await this.open(e);
      }
      async disconnect() {
        await this.close();
      }
      on(e, t) {
        this.events.on(e, t);
      }
      once(e, t) {
        this.events.once(e, t);
      }
      off(e, t) {
        this.events.off(e, t);
      }
      removeListener(e, t) {
        this.events.removeListener(e, t);
      }
      async request(e, t) {
        return this.requestStrict((0, fr.formatJsonRpcRequest)(e.method, e.params || []), t);
      }
      async requestStrict(e, t) {
        return new Promise((async (r, i) => {
          if (!this.connection.connected) try {
            await this.open();
          } catch (n) {
            i(n);
          }
          this.events.on(`${e.id}`, (e => {
            (0, fr.isJsonRpcError)(e) ? i(e.error) : r(e.result);
          }));
          try {
            await this.connection.send(e, t);
          } catch (n) {
            i(n);
          }
        }));
      }
      setConnection(e = this.connection) {
        return e;
      }
      onPayload(e) {
        this.events.emit("payload", e), (0, fr.isJsonRpcResponse)(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
          type: e.method,
          data: e.params
        });
      }
      async open(e = this.connection) {
        this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), 
        e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), 
        this.events.emit("connect"));
      }
      async close() {
        await this.connection.close();
      }
      registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", (e => this.onPayload(e))), this.connection.on("close", (() => this.events.emit("disconnect"))), 
        this.connection.on("error", (e => this.events.emit("error", e))), this.hasRegisteredEventListeners = !0);
      }
    }
    const gr = (() => void 0 !== r.g && void 0 !== r.g.WebSocket ? r.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : r(286))();
    const yr = class {
      constructor(e) {
        if (this.url = e, this.events = new v.EventEmitter, this.registering = !1, !(0, fr.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        this.url = e;
      }
      get connected() {
        return void 0 !== this.socket;
      }
      get connecting() {
        return this.registering;
      }
      on(e, t) {
        this.events.on(e, t);
      }
      once(e, t) {
        this.events.once(e, t);
      }
      off(e, t) {
        this.events.off(e, t);
      }
      removeListener(e, t) {
        this.events.removeListener(e, t);
      }
      async open(e = this.url) {
        await this.register(e);
      }
      async close() {
        return new Promise(((e, t) => {
          void 0 !== this.socket ? (this.socket.onclose = () => {
            this.onClose(), e();
          }, this.socket.close()) : t(new Error("Connection already closed"));
        }));
      }
      async send(e, t) {
        void 0 === this.socket && (this.socket = await this.register());
        try {
          this.socket.send(function(e) {
            return "string" == typeof e ? e : JSON.stringify(e);
          }(e));
        } catch (r) {
          this.onError(e.id, r);
        }
      }
      register(e = this.url) {
        if (!(0, fr.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        if (this.registering) {
          const e = this.events.getMaxListeners();
          return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), 
          new Promise(((e, t) => {
            this.events.once("register_error", (e => {
              this.resetMaxListeners(), t(e);
            })), this.events.once("open", (() => {
              if (this.resetMaxListeners(), void 0 === this.socket) return t(new Error("WebSocket connection is missing or invalid"));
              e(this.socket);
            }));
          }));
        }
        return this.url = e, this.registering = !0, new Promise(((t, r) => {
          const i = (0, fr.isReactNative)() ? void 0 : {
            rejectUnauthorized: !(0, fr.isLocalhostUrl)(e)
          };
          const n = new gr(e, [], i);
          (() => "undefined" != typeof window)() ? n.onerror = e => {
            const t = e;
            r(this.emitError(t.error));
          } : n.on("error", (e => {
            r(this.emitError(e));
          })), n.onopen = () => {
            this.onOpen(n), t(n);
          };
        }));
      }
      onOpen(e) {
        e.onmessage = e => this.onPayload(e), e.onclose = () => this.onClose(), this.socket = e, this.registering = !1, this.events.emit("open");
      }
      onClose() {
        this.socket = void 0, this.registering = !1, this.events.emit("close");
      }
      onPayload(e) {
        if (void 0 === e.data) return;
        const t = "string" == typeof e.data ? function(e) {
          if ("string" != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
          try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
        }(e.data) : e.data;
        this.events.emit("payload", t);
      }
      onError(e, t) {
        const r = this.parseError(t);
        const i = r.message || r.toString();
        const n = (0, fr.formatJsonRpcError)(e, i);
        this.events.emit("payload", n);
      }
      parseError(e, t = this.url) {
        return (0, fr.parseConnectionError)(e, t, "WS");
      }
      resetMaxListeners() {
        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
      }
      emitError(e) {
        const t = this.parseError(new Error((null == e ? void 0 : e.message) || `WebSocket connection failed for URL: ${this.url}`));
        return this.events.emit("register_error", t), t;
      }
    };
    var vr = r(2722);
    var mr = r.n(vr);
    var br = function(e, t) {
      if (e.length >= 255) throw new TypeError("Alphabet too long");
      for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
      for (var n = 0; n < e.length; n++) {
        var s = e.charAt(n), o = s.charCodeAt(0);
        if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
        r[o] = n;
      }
      var a = e.length, c = e.charAt(0), h = Math.log(a) / Math.log(256), u = Math.log(256) / Math.log(a);
      function l(e) {
        if ("string" != typeof e) throw new TypeError("Expected String");
        if (0 === e.length) return new Uint8Array;
        var t = 0;
        if (" " !== e[t]) {
          for (var i = 0, n = 0; e[t] === c; ) i++, t++;
          for (var s = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(s); e[t]; ) {
            var u = r[e.charCodeAt(t)];
            if (255 === u) return;
            for (var l = 0, p = s - 1; (0 !== u || l < n) && -1 !== p; p--, l++) u += a * o[p] >>> 0, o[p] = u % 256 >>> 0, u = u / 256 >>> 0;
            if (0 !== u) throw new Error("Non-zero carry");
            n = l, t++;
          }
          if (" " !== e[t]) {
            for (var f = s - n; f !== s && 0 === o[f]; ) f++;
            for (var d = new Uint8Array(i + (s - f)), g = i; f !== s; ) d[g++] = o[f++];
            return d;
          }
        }
      }
      return {
        encode: function(t) {
          if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), 
          !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n]; ) n++, r++;
          for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s; ) {
            for (var l = t[n], p = 0, f = o - 1; (0 !== l || p < i) && -1 !== f; f--, p++) l += 256 * h[f] >>> 0, h[f] = l % a >>> 0, 
            l = l / a >>> 0;
            if (0 !== l) throw new Error("Non-zero carry");
            i = p, n++;
          }
          for (var d = o - i; d !== o && 0 === h[d]; ) d++;
          for (var g = c.repeat(r); d < o; ++d) g += e.charAt(h[d]);
          return g;
        },
        decodeUnsafe: l,
        decode: function(e) {
          var r = l(e);
          if (r) return r;
          throw new Error(`Non-${t} character`);
        }
      };
    }, wr = br;
    const _r = e => {
      if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
      if (e instanceof ArrayBuffer) return new Uint8Array(e);
      if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      throw new Error("Unknown type, must be binary type");
    };
    class Er {
      constructor(e, t, r) {
        this.name = e, this.prefix = t, this.baseEncode = r;
      }
      encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type");
      }
    }
    class Sr {
      constructor(e, t, r) {
        if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r;
      }
      decode(e) {
        if ("string" == typeof e) {
          if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
          return this.baseDecode(e.slice(this.prefix.length));
        }
        throw Error("Can only multibase decode strings");
      }
      or(e) {
        return Ir(this, e);
      }
    }
    class Or {
      constructor(e) {
        this.decoders = e;
      }
      or(e) {
        return Ir(this, e);
      }
      decode(e) {
        const t = e[0], r = this.decoders[t];
        if (r) return r.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
    const Ir = (e, t) => new Or({
      ...e.decoders || {
        [e.prefix]: e
      },
      ...t.decoders || {
        [t.prefix]: t
      }
    });
    class Rr {
      constructor(e, t, r, i) {
        this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new Er(e, t, r), this.decoder = new Sr(e, t, i);
      }
      encode(e) {
        return this.encoder.encode(e);
      }
      decode(e) {
        return this.decoder.decode(e);
      }
    }
    const Pr = ({name: e, prefix: t, encode: r, decode: i}) => new Rr(e, t, r, i), Nr = ({prefix: e, name: t, alphabet: r}) => {
      const {encode: i, decode: n} = wr(r, t);
      return Pr({
        prefix: e,
        name: t,
        encode: i,
        decode: e => _r(n(e))
      });
    }, xr = ({name: e, prefix: t, bitsPerChar: r, alphabet: i}) => Pr({
      prefix: t,
      name: e,
      encode(e) {
        return ((e, t, r) => {
          const i = "=" === t[t.length - 1], n = (1 << r) - 1;
          let s = "", o = 0, a = 0;
          for (let c = 0; c < e.length; ++c) for (a = a << 8 | e[c], o += 8; o > r; ) o -= r, s += t[n & a >> o];
          if (o && (s += t[n & a << r - o]), i) for (;s.length * r & 7; ) s += "=";
          return s;
        })(e, i, r);
      },
      decode(t) {
        return ((e, t, r, i) => {
          const n = {};
          for (let u = 0; u < t.length; ++u) n[t[u]] = u;
          let s = e.length;
          for (;"=" === e[s - 1]; ) --s;
          const o = new Uint8Array(s * r / 8 | 0);
          let a = 0, c = 0, h = 0;
          for (let u = 0; u < s; ++u) {
            const t = n[e[u]];
            if (void 0 === t) throw new SyntaxError(`Non-${i} character`);
            c = c << r | t, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
          }
          if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
          return o;
        })(t, i, r, e);
      }
    }), Tr = Pr({
      prefix: "\0",
      name: "identity",
      encode: e => (e => (new TextDecoder).decode(e))(e),
      decode: e => (e => (new TextEncoder).encode(e))(e)
    });
    var Ar = Object.freeze({
      __proto__: null,
      identity: Tr
    });
    const Ur = xr({
      prefix: "0",
      name: "base2",
      alphabet: "01",
      bitsPerChar: 1
    });
    var jr = Object.freeze({
      __proto__: null,
      base2: Ur
    });
    const Lr = xr({
      prefix: "7",
      name: "base8",
      alphabet: "01234567",
      bitsPerChar: 3
    });
    var Cr = Object.freeze({
      __proto__: null,
      base8: Lr
    });
    const Mr = Nr({
      prefix: "9",
      name: "base10",
      alphabet: "0123456789"
    });
    var Dr = Object.freeze({
      __proto__: null,
      base10: Mr
    });
    const kr = xr({
      prefix: "f",
      name: "base16",
      alphabet: "0123456789abcdef",
      bitsPerChar: 4
    }), zr = xr({
      prefix: "F",
      name: "base16upper",
      alphabet: "0123456789ABCDEF",
      bitsPerChar: 4
    });
    var qr = Object.freeze({
      __proto__: null,
      base16: kr,
      base16upper: zr
    });
    const $r = xr({
      prefix: "b",
      name: "base32",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567",
      bitsPerChar: 5
    }), Hr = xr({
      prefix: "B",
      name: "base32upper",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
      bitsPerChar: 5
    }), Vr = xr({
      prefix: "c",
      name: "base32pad",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
      bitsPerChar: 5
    }), Jr = xr({
      prefix: "C",
      name: "base32padupper",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
      bitsPerChar: 5
    }), Kr = xr({
      prefix: "v",
      name: "base32hex",
      alphabet: "0123456789abcdefghijklmnopqrstuv",
      bitsPerChar: 5
    }), Fr = xr({
      prefix: "V",
      name: "base32hexupper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
      bitsPerChar: 5
    }), Br = xr({
      prefix: "t",
      name: "base32hexpad",
      alphabet: "0123456789abcdefghijklmnopqrstuv=",
      bitsPerChar: 5
    }), Wr = xr({
      prefix: "T",
      name: "base32hexpadupper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
      bitsPerChar: 5
    }), Gr = xr({
      prefix: "h",
      name: "base32z",
      alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
      bitsPerChar: 5
    });
    var Yr = Object.freeze({
      __proto__: null,
      base32: $r,
      base32upper: Hr,
      base32pad: Vr,
      base32padupper: Jr,
      base32hex: Kr,
      base32hexupper: Fr,
      base32hexpad: Br,
      base32hexpadupper: Wr,
      base32z: Gr
    });
    const Xr = Nr({
      prefix: "k",
      name: "base36",
      alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }), Zr = Nr({
      prefix: "K",
      name: "base36upper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
    var Qr = Object.freeze({
      __proto__: null,
      base36: Xr,
      base36upper: Zr
    });
    const ei = Nr({
      name: "base58btc",
      prefix: "z",
      alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }), ti = Nr({
      name: "base58flickr",
      prefix: "Z",
      alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
    var ri = Object.freeze({
      __proto__: null,
      base58btc: ei,
      base58flickr: ti
    });
    const ii = xr({
      prefix: "m",
      name: "base64",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      bitsPerChar: 6
    }), ni = xr({
      prefix: "M",
      name: "base64pad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      bitsPerChar: 6
    }), si = xr({
      prefix: "u",
      name: "base64url",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      bitsPerChar: 6
    }), oi = xr({
      prefix: "U",
      name: "base64urlpad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
      bitsPerChar: 6
    });
    var ai = Object.freeze({
      __proto__: null,
      base64: ii,
      base64pad: ni,
      base64url: si,
      base64urlpad: oi
    });
    const ci = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), hi = ci.reduce(((e, t, r) => (e[r] = t, 
    e)), []), ui = ci.reduce(((e, t, r) => (e[t.codePointAt(0)] = r, e)), []);
    const li = Pr({
      prefix: "🚀",
      name: "base256emoji",
      encode: function(e) {
        return e.reduce(((e, t) => e += hi[t]), "");
      },
      decode: function(e) {
        const t = [];
        for (const r of e) {
          const e = ui[r.codePointAt(0)];
          if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
          t.push(e);
        }
        return new Uint8Array(t);
      }
    });
    var pi = Object.freeze({
      __proto__: null,
      base256emoji: li
    }), fi = function e(t, r, i) {
      r = r || [];
      for (var n = i = i || 0; t >= di; ) r[i++] = 255 & t | 128, t /= 128;
      for (;-128 & t; ) r[i++] = 255 & t | 128, t >>>= 7;
      return r[i] = 0 | t, e.bytes = i - n + 1, r;
    }, di = Math.pow(2, 31);
    var gi = function e(t, r) {
      var i, n = 0, s = 0, o = r = r || 0, a = t.length;
      do {
        if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
        i = t[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7;
      } while (i >= 128);
      return e.bytes = o - r, n;
    };
    var yi = Math.pow(2, 7), vi = Math.pow(2, 14), mi = Math.pow(2, 21), bi = Math.pow(2, 28), wi = Math.pow(2, 35), _i = Math.pow(2, 42), Ei = Math.pow(2, 49), Si = Math.pow(2, 56), Oi = Math.pow(2, 63), Ii = {
      encode: fi,
      decode: gi,
      encodingLength: function(e) {
        return e < yi ? 1 : e < vi ? 2 : e < mi ? 3 : e < bi ? 4 : e < wi ? 5 : e < _i ? 6 : e < Ei ? 7 : e < Si ? 8 : e < Oi ? 9 : 10;
      }
    }, Ri = Ii;
    const Pi = (e, t, r = 0) => (Ri.encode(e, t, r), t), Ni = e => Ri.encodingLength(e), xi = (e, t) => {
      const r = t.byteLength, i = Ni(e), n = i + Ni(r), s = new Uint8Array(n + r);
      return Pi(e, s, 0), Pi(r, s, i), s.set(t, n), new Ti(e, r, t, s);
    };
    class Ti {
      constructor(e, t, r, i) {
        this.code = e, this.size = t, this.digest = r, this.bytes = i;
      }
    }
    const Ai = ({name: e, code: t, encode: r}) => new Ui(e, t, r);
    class Ui {
      constructor(e, t, r) {
        this.name = e, this.code = t, this.encode = r;
      }
      digest(e) {
        if (e instanceof Uint8Array) {
          const t = this.encode(e);
          return t instanceof Uint8Array ? xi(this.code, t) : t.then((e => xi(this.code, e)));
        }
        throw Error("Unknown type, must be binary type");
      }
    }
    const ji = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)), Li = Ai({
      name: "sha2-256",
      code: 18,
      encode: ji("SHA-256")
    }), Ci = Ai({
      name: "sha2-512",
      code: 19,
      encode: ji("SHA-512")
    });
    Object.freeze({
      __proto__: null,
      sha256: Li,
      sha512: Ci
    });
    const Mi = _r, Di = {
      code: 0,
      name: "identity",
      encode: Mi,
      digest: e => xi(0, Mi(e))
    };
    Object.freeze({
      __proto__: null,
      identity: Di
    });
    new TextEncoder, new TextDecoder;
    const ki = {
      ...Ar,
      ...jr,
      ...Cr,
      ...Dr,
      ...qr,
      ...Yr,
      ...Qr,
      ...ri,
      ...ai,
      ...pi
    };
    function zi(e, t, r, i) {
      return {
        name: e,
        prefix: t,
        encoder: {
          name: e,
          prefix: t,
          encode: r
        },
        decoder: {
          decode: i
        }
      };
    }
    const qi = zi("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))), $i = zi("ascii", "a", (e => {
      let t = "a";
      for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
      return t;
    }), (e => {
      const t = function(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e);
      }((e = e.substring(1)).length);
      for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
      return t;
    })), Hi = {
      utf8: qi,
      "utf-8": qi,
      hex: ki.base16,
      latin1: $i,
      ascii: $i,
      binary: $i,
      ...ki
    };
    const Vi = "core", Ji = "wc@2:core:", Ki = "error", Fi = {
      database: ":memory:"
    }, Bi = "client_ed25519_seed", Wi = A.ONE_DAY, Gi = A.SIX_HOURS, Yi = "wss://relay.walletconnect.com", Xi = "relayer_message", Zi = "relayer_connect", Qi = "relayer_disconnect", en = "relayer_error", tn = "relayer_connection_stalled", rn = "relayer_transport_closed", nn = "relayer_publish", sn = "payload", on = "connect", an = "disconnect", cn = "error", hn = A.ONE_SECOND, un = "subscription_created", ln = "subscription_deleted", pn = "subscription_sync", fn = "subscription_resubscribed", dn = 1e3 * A.FIVE_SECONDS, gn = {
      wc_pairingDelete: {
        req: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 1e3
        },
        res: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 1001
        }
      },
      wc_pairingPing: {
        req: {
          ttl: A.THIRTY_SECONDS,
          prompt: !1,
          tag: 1002
        },
        res: {
          ttl: A.THIRTY_SECONDS,
          prompt: !1,
          tag: 1003
        }
      },
      unregistered_method: {
        req: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 0
        },
        res: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 0
        }
      }
    }, yn = "history_created", vn = "history_updated", mn = "history_deleted", bn = "history_sync", wn = "expirer_created", _n = "expirer_deleted", En = "expirer_expired", Sn = "expirer_sync";
    class On {
      constructor(e, t) {
        this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, 
        this.storagePrefix = Ji, this.init = async () => {
          if (!this.initialized) {
            const e = await this.getKeyChain();
            typeof e < "u" && (this.keychain = e), this.initialized = !0;
          }
        }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
          this.isInitialized(), this.keychain.set(e, t), await this.persist();
        }, this.get = e => {
          this.isInitialized();
          const t = this.keychain.get(e);
          if (typeof t > "u") {
            const {message: t} = Wt("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }, this.del = async e => {
          this.isInitialized(), this.keychain.delete(e), await this.persist();
        }, this.core = e, this.logger = (0, _.generateChildLogger)(t, this.name);
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
      }
      async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, Pt(e));
      }
      async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Nt(e) : void 0;
      }
      async persist() {
        await this.setKeyChain(this.keychain);
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
    }
    class In {
      constructor(e, t, r) {
        this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
          this.initialized || (await this.keychain.init(), this.initialized = !0);
        }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
          this.isInitialized();
          return xe(Ae(await this.getClientSeed()).publicKey);
        }, this.generateKeyPair = () => {
          this.isInitialized();
          const e = function() {
            const e = Me.Au();
            return {
              privateKey: Re(e.secretKey, tt),
              publicKey: Re(e.publicKey, tt)
            };
          }();
          return this.setPrivateKey(e.publicKey, e.privateKey);
        }, this.signJWT = async e => {
          this.isInitialized();
          const t = Ae(await this.getClientSeed()), r = nt(), i = Wi;
          return await Ue(r, e, i, t);
        }, this.generateSharedKey = (e, t, r) => {
          this.isInitialized();
          const i = function(e, t) {
            const r = Me.gi(Pe(e, tt), Pe(t, tt));
            return Re(new Le.t(Ce.mE, r).expand(32), tt);
          }(this.getPrivateKey(e), t);
          return this.setSymKey(i, r);
        }, this.setSymKey = async (e, t) => {
          this.isInitialized();
          const r = t || function(e) {
            return Re((0, Ce.vp)(Pe(e, tt)), tt);
          }(e);
          return await this.keychain.set(r, e), r;
        }, this.deleteKeyPair = async e => {
          this.isInitialized(), await this.keychain.del(e);
        }, this.deleteSymKey = async e => {
          this.isInitialized(), await this.keychain.del(e);
        }, this.encode = async (e, t, r) => {
          this.isInitialized();
          const i = ht(r), n = function(e) {
            return "string" == typeof e ? e : JSON.stringify(e);
          }(t);
          if (ut(i)) {
            const t = i.senderPublicKey, r = i.receiverPublicKey;
            e = await this.generateSharedKey(t, r);
          }
          const s = this.getSymKey(e), {type: o, senderPublicKey: a} = i;
          return at({
            type: o,
            symKey: s,
            message: n,
            senderPublicKey: a
          });
        }, this.decode = async (e, t, r) => {
          this.isInitialized();
          const i = function(e, t) {
            const r = ct(e);
            return ht({
              type: ot(r.type),
              senderPublicKey: typeof r.senderPublicKey < "u" ? Re(r.senderPublicKey, tt) : void 0,
              receiverPublicKey: t?.receiverPublicKey
            });
          }(t, r);
          if (ut(i)) {
            const t = i.receiverPublicKey, r = i.senderPublicKey;
            e = await this.generateSharedKey(t, r);
          }
          const n = function(e) {
            const t = new je.OK(Pe(e.symKey, tt)), {sealed: r, iv: i} = ct(e.encoded), n = t.open(i, r);
            if (null === n) throw new Error("Failed to decrypt");
            return Re(n, it);
          }({
            symKey: this.getSymKey(e),
            encoded: t
          });
          return function(e) {
            if ("string" != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
            try {
              return JSON.parse(e);
            } catch (t) {
              return e;
            }
          }(n);
        }, this.core = e, this.logger = (0, _.generateChildLogger)(t, this.name), this.keychain = r || new On(this.core, this.logger);
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      getPayloadType(e) {
        return ot(ct(e).type);
      }
      async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e;
      }
      getPrivateKey(e) {
        return this.keychain.get(e);
      }
      async getClientSeed() {
        let e = "";
        try {
          e = this.keychain.get(Bi);
        } catch {
          e = nt(), await this.keychain.set(Bi, e);
        }
        return function(e, t = "utf8") {
          const r = Hi[t];
          if (!r) throw new Error(`Unsupported encoding "${t}"`);
          return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${e}`) : globalThis.Buffer.from(e, "utf8");
        }(e, "base16");
      }
      getSymKey(e) {
        return this.keychain.get(e);
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
    }
    class Rn extends class {
      constructor(e, t) {
        this.logger = e, this.core = t;
      }
    } {
      constructor(e, t) {
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, 
        this.storagePrefix = Ji, this.init = async () => {
          if (!this.initialized) {
            this.logger.trace("Initialized");
            try {
              const e = await this.getRelayerMessages();
              typeof e < "u" && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size
              });
            } catch (e) {
              this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
            } finally {
              this.initialized = !0;
            }
          }
        }, this.set = async (e, t) => {
          this.isInitialized();
          const r = st(t);
          let i = this.messages.get(e);
          return typeof i > "u" && (i = {}), typeof i[r] < "u" || (i[r] = t, this.messages.set(e, i), await this.persist()), r;
        }, this.get = e => {
          this.isInitialized();
          let t = this.messages.get(e);
          return typeof t > "u" && (t = {}), t;
        }, this.has = (e, t) => {
          this.isInitialized();
          return typeof this.get(e)[st(t)] < "u";
        }, this.del = async e => {
          this.isInitialized(), this.messages.delete(e), await this.persist();
        }, this.logger = (0, _.generateChildLogger)(e, this.name), this.core = t;
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
      }
      async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, Pt(e));
      }
      async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Nt(e) : void 0;
      }
      async persist() {
        await this.setRelayerMessages(this.messages);
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
    }
    class Pn extends I {
      constructor(e, t) {
        super(e, t), this.relayer = e, this.logger = t, this.events = new v.EventEmitter, this.name = "publisher", this.queue = new Map, 
        this.publishTimeout = 1e4, this.publish = async (e, t, r) => {
          this.logger.debug("Publishing Payload"), this.logger.trace({
            type: "method",
            method: "publish",
            params: {
              topic: e,
              message: t,
              opts: r
            }
          });
          try {
            const i = r?.ttl || Gi, n = Mt(r), s = r?.prompt || !1, o = r?.tag || 0, a = {
              topic: e,
              message: t,
              opts: {
                ttl: i,
                relay: n,
                prompt: s,
                tag: o
              }
            }, c = st(t);
            this.queue.set(c, a);
            try {
              await await Tt(this.rpcPublish(e, t, i, n, s, o), this.publishTimeout), this.relayer.events.emit(nn, a);
            } catch {
              return this.logger.debug("Publishing Payload stalled"), void this.relayer.events.emit(tn);
            }
            this.onPublish(c, a), this.logger.debug("Successfully Published Payload"), this.logger.trace({
              type: "method",
              method: "publish",
              params: {
                topic: e,
                message: t,
                opts: r
              }
            });
          } catch (i) {
            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(i), i;
          }
        }, this.on = (e, t) => {
          this.events.on(e, t);
        }, this.once = (e, t) => {
          this.events.once(e, t);
        }, this.off = (e, t) => {
          this.events.off(e, t);
        }, this.removeListener = (e, t) => {
          this.events.removeListener(e, t);
        }, this.relayer = e, this.logger = (0, _.generateChildLogger)(t, this.name), this.registerEventListeners();
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      rpcPublish(e, t, r, i, n, s) {
        var o, a, c, h;
        const u = {
          method: Dt(i.protocol).publish,
          params: {
            topic: e,
            message: t,
            ttl: r,
            prompt: n,
            tag: s
          }
        };
        return Zt(null == (o = u.params) ? void 0 : o.prompt) && (null == (a = u.params) || delete a.prompt), Zt(null == (c = u.params) ? void 0 : c.tag) && (null == (h = u.params) || delete h.tag), 
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
          type: "message",
          direction: "outgoing",
          request: u
        }), this.relayer.provider.request(u);
      }
      onPublish(e, t) {
        this.queue.delete(e);
      }
      checkQueue() {
        this.queue.forEach((async e => {
          const {topic: t, message: r, opts: i} = e;
          await this.publish(t, r, i);
        }));
      }
      registerEventListeners() {
        this.relayer.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, (() => {
          this.checkQueue();
        }));
      }
    }
    class Nn {
      constructor() {
        this.map = new Map, this.set = (e, t) => {
          const r = this.get(e);
          this.exists(e, t) || this.map.set(e, [ ...r, t ]);
        }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
          if (typeof t > "u") return void this.map.delete(e);
          if (!this.map.has(e)) return;
          const r = this.get(e);
          if (!this.exists(e, t)) return;
          const i = r.filter((e => e !== t));
          i.length ? this.map.set(e, i) : this.map.delete(e);
        }, this.clear = () => {
          this.map.clear();
        };
      }
      get topics() {
        return Array.from(this.map.keys());
      }
    }
    var xn = Object.defineProperty, Tn = Object.defineProperties, An = Object.getOwnPropertyDescriptors, Un = Object.getOwnPropertySymbols, jn = Object.prototype.hasOwnProperty, Ln = Object.prototype.propertyIsEnumerable, Cn = (e, t, r) => t in e ? xn(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : e[t] = r, Mn = (e, t) => {
      for (var r in t || (t = {})) jn.call(t, r) && Cn(e, r, t[r]);
      if (Un) for (var r of Un(t)) Ln.call(t, r) && Cn(e, r, t[r]);
      return e;
    }, Dn = (e, t) => Tn(e, An(t));
    class kn extends P {
      constructor(e, t) {
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Nn, this.events = new v.EventEmitter, 
        this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", 
        this.pollingInterval = 20, this.storagePrefix = Ji, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.init = async () => {
          this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), 
          this.clientId = await this.relayer.core.crypto.getClientId());
        }, this.subscribe = async (e, t) => {
          await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
            type: "method",
            method: "subscribe",
            params: {
              topic: e,
              opts: t
            }
          });
          try {
            const r = Mt(t), i = {
              topic: e,
              relay: r
            };
            this.pending.set(e, i);
            const n = await this.rpcSubscribe(e, r);
            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
              type: "method",
              method: "subscribe",
              params: {
                topic: e,
                opts: t
              }
            }), n;
          } catch (S) {
            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(S), S;
          }
        }, this.unsubscribe = async (e, t) => {
          await this.restartToComplete(), this.isInitialized(), typeof t?.id < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t);
        }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise(((t, r) => {
          const i = new A.Watch;
          i.start(this.pendingSubscriptionWatchLabel);
          const n = setInterval((() => {
            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)), 
            i.elapsed(this.pendingSubscriptionWatchLabel) >= dn && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(!1));
          }), this.pollingInterval);
        })), this.on = (e, t) => {
          this.events.on(e, t);
        }, this.once = (e, t) => {
          this.events.once(e, t);
        }, this.off = (e, t) => {
          this.events.off(e, t);
        }, this.removeListener = (e, t) => {
          this.events.removeListener(e, t);
        }, this.restart = async () => {
          this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
        }, this.relayer = e, this.logger = (0, _.generateChildLogger)(t, this.name), this.clientId = "";
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
      }
      get length() {
        return this.subscriptions.size;
      }
      get ids() {
        return Array.from(this.subscriptions.keys());
      }
      get values() {
        return Array.from(this.subscriptions.values());
      }
      get topics() {
        return this.topicMap.topics;
      }
      hasSubscription(e, t) {
        let r = !1;
        try {
          r = this.getSubscription(e).topic === t;
        } catch {}
        return r;
      }
      onEnable() {
        this.cached = [], this.initialized = !0;
      }
      onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear(), this.initialized = !1;
      }
      async unsubscribeByTopic(e, t) {
        const r = this.topicMap.get(e);
        await Promise.all(r.map((async r => await this.unsubscribeById(e, r, t))));
      }
      async unsubscribeById(e, t, r) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: {
            topic: e,
            id: t,
            opts: r
          }
        });
        try {
          const i = Mt(r);
          await this.rpcUnsubscribe(e, t, i);
          const n = Gt("USER_DISCONNECTED", `${this.name}, ${e}`);
          await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
              topic: e,
              id: t,
              opts: r
            }
          });
        } catch (i) {
          throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
        }
      }
      async rpcSubscribe(e, t) {
        const r = {
          method: Dt(t.protocol).subscribe,
          params: {
            topic: e
          }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: r
        });
        try {
          await await Tt(this.relayer.provider.request(r), this.subscribeTimeout);
        } catch {
          this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(tn);
        }
        return st(e + this.clientId);
      }
      rpcUnsubscribe(e, t, r) {
        const i = {
          method: Dt(r.protocol).unsubscribe,
          params: {
            topic: e,
            id: t
          }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: i
        }), this.relayer.provider.request(i);
      }
      onSubscribe(e, t) {
        this.setSubscription(e, Dn(Mn({}, t), {
          id: e
        })), this.pending.delete(t.topic);
      }
      onResubscribe(e, t) {
        this.addSubscription(e, Dn(Mn({}, t), {
          id: e
        })), this.pending.delete(t.topic);
      }
      async onUnsubscribe(e, t, r) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e);
      }
      async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e);
      }
      async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
      }
      setSubscription(e, t) {
        this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
          type: "method",
          method: "setSubscription",
          id: e,
          subscription: t
        }), this.addSubscription(e, t));
      }
      addSubscription(e, t) {
        this.subscriptions.set(e, Mn({}, t)), this.topicMap.set(t.topic, e), this.events.emit(un, t);
      }
      getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
          type: "method",
          method: "getSubscription",
          id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
          const {message: t} = Wt("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw new Error(t);
        }
        return t;
      }
      deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
          type: "method",
          method: "deleteSubscription",
          id: e,
          reason: t
        });
        const r = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(ln, Dn(Mn({}, r), {
          reason: t
        }));
      }
      async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(pn);
      }
      async reset() {
        this.cached.length && await Promise.all(this.cached.map((async e => await this.resubscribe(e)))), this.events.emit(fn);
      }
      async restore() {
        try {
          const e = await this.getRelayerSubscriptions();
          if (typeof e > "u" || !e.length) return;
          if (this.subscriptions.size) {
            const {message: e} = Wt("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(e);
          }
          this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            subscriptions: this.values
          });
        } catch (e) {
          this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
        }
      }
      async resubscribe(e) {
        if (!this.ids.includes(e.id)) {
          const {topic: t, relay: r} = e, i = {
            topic: t,
            relay: r
          };
          this.pending.set(i.topic, i);
          const n = await this.rpcSubscribe(i.topic, i.relay);
          this.onResubscribe(n, i);
        }
      }
      async onConnect() {
        this.restartInProgress || (await this.restart(), this.onEnable());
      }
      onDisconnect() {
        this.onDisable();
      }
      checkPending() {
        this.relayer.transportExplicitlyClosed || this.pending.forEach((async e => {
          const t = await this.rpcSubscribe(e.topic, e.relay);
          this.onSubscribe(t, e);
        }));
      }
      registerEventListeners() {
        this.relayer.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, (() => {
          this.checkPending();
        })), this.relayer.on(Zi, (async () => {
          await this.onConnect();
        })), this.relayer.on(Qi, (() => {
          this.onDisconnect();
        })), this.events.on(un, (async e => {
          const t = un;
          this.logger.info(`Emitting ${t}`), this.logger.debug({
            type: "event",
            event: t,
            data: e
          }), await this.persist();
        })), this.events.on(ln, (async e => {
          const t = ln;
          this.logger.info(`Emitting ${t}`), this.logger.debug({
            type: "event",
            event: t,
            data: e
          }), await this.persist();
        }));
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
      async restartToComplete() {
        this.restartInProgress && await new Promise((e => {
          const t = setInterval((() => {
            this.restartInProgress || (clearInterval(t), e());
          }), this.pollingInterval);
        }));
      }
    }
    var zn = Object.defineProperty, qn = Object.getOwnPropertySymbols, $n = Object.prototype.hasOwnProperty, Hn = Object.prototype.propertyIsEnumerable, Vn = (e, t, r) => t in e ? zn(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : e[t] = r;
    class Jn extends R {
      constructor(e) {
        super(e), this.protocol = "wc", this.version = 2, this.events = new v.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, 
        this.initialized = !1, this.reconnecting = !1, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0, 
        _.generateChildLogger)(e.logger, this.name) : y()((0, _.getDefaultLoggerOptions)({
          level: e.logger || "error"
        })), this.messages = new Rn(this.logger, e.core), this.subscriber = new kn(this, this.logger), this.publisher = new Pn(this, this.logger), 
        this.relayUrl = e?.relayUrl || Yi, this.projectId = e.projectId, this.provider = {};
      }
      async init() {
        this.logger.trace("Initialized"), this.provider = await this.createProvider(), await Promise.all([ this.messages.init(), this.transportOpen(), this.subscriber.init() ]), 
        this.registerEventListeners(), this.initialized = !0;
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      get connected() {
        return this.provider.connection.connected;
      }
      get connecting() {
        return this.provider.connection.connecting;
      }
      async publish(e, t, r) {
        this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
          topic: e,
          message: t
        });
      }
      async subscribe(e, t) {
        this.isInitialized();
        let r = "";
        return await Promise.all([ new Promise((t => {
          this.subscriber.once(un, (r => {
            r.topic === e && t();
          }));
        })), new Promise((async i => {
          r = await this.subscriber.subscribe(e, t), i();
        })) ]), r;
      }
      async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t);
      }
      on(e, t) {
        this.events.on(e, t);
      }
      once(e, t) {
        this.events.once(e, t);
      }
      off(e, t) {
        this.events.off(e, t);
      }
      removeListener(e, t) {
        this.events.removeListener(e, t);
      }
      async transportClose() {
        this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(rn));
      }
      async transportOpen(e) {
        if (!this.reconnecting) {
          this.relayUrl = e || this.relayUrl, this.transportExplicitlyClosed = !1, this.reconnecting = !0;
          try {
            await Promise.all([ new Promise((e => {
              this.initialized || e(), this.subscriber.once(fn, (() => {
                e();
              }));
            })), await Promise.race([ new Promise((async e => {
              await this.provider.connect(), this.removeListener(rn, this.rejectTransportOpen), e();
            })), new Promise((e => this.once(rn, this.rejectTransportOpen))) ]) ]);
          } catch (t) {
            if (!/socket hang up/i.test(t.message)) throw t;
            this.logger.error(t), this.events.emit(rn);
          } finally {
            this.reconnecting = !1;
          }
        }
      }
      async restartTransport(e) {
        this.transportExplicitlyClosed || (await this.transportClose(), await new Promise((e => setTimeout(e, hn))), await this.transportOpen(e));
      }
      rejectTransportOpen() {
        throw new Error("closeTransport called before connection was established");
      }
      async createProvider() {
        const e = await this.core.crypto.signJWT(this.relayUrl);
        return new dr(new yr(It({
          sdkVersion: "2.4.5",
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: e
        })));
      }
      async recordMessageEvent(e) {
        const {topic: t, message: r} = e;
        await this.messages.set(t, r);
      }
      async shouldIgnoreMessageEvent(e) {
        const {topic: t, message: r} = e;
        return !await this.subscriber.isSubscribed(t) || this.messages.has(t, r);
      }
      async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
          type: "payload",
          direction: "incoming",
          payload: e
        }), (0, fr.isJsonRpcRequest)(e)) {
          if (!e.method.endsWith("_subscription")) return;
          const t = e.params, {topic: r, message: i} = t.data, n = {
            topic: r,
            message: i
          };
          this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((e, t) => {
            for (var r in t || (t = {})) $n.call(t, r) && Vn(e, r, t[r]);
            if (qn) for (var r of qn(t)) Hn.call(t, r) && Vn(e, r, t[r]);
            return e;
          })({
            type: "event",
            event: t.id
          }, n)), this.events.emit(t.id, n), await this.acknowledgePayload(e), await this.onMessageEvent(n);
        }
      }
      async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Xi, e), await this.recordMessageEvent(e));
      }
      async acknowledgePayload(e) {
        const t = (0, fr.formatJsonRpcResult)(e.id, !0);
        await this.provider.connection.send(t);
      }
      registerEventListeners() {
        this.provider.on(sn, (e => this.onProviderPayload(e))), this.provider.on(on, (() => {
          this.events.emit(Zi);
        })), this.provider.on(an, (() => {
          this.events.emit(Qi), this.attemptToReconnect();
        })), this.provider.on(cn, (e => this.events.emit(en, e))), this.events.on(tn, (async () => {
          await this.restartTransport();
        }));
      }
      attemptToReconnect() {
        this.transportExplicitlyClosed || setTimeout((async () => {
          await this.transportOpen();
        }), (0, A.toMiliseconds)(hn));
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
    }
    var Kn = Object.defineProperty, Fn = Object.getOwnPropertySymbols, Bn = Object.prototype.hasOwnProperty, Wn = Object.prototype.propertyIsEnumerable, Gn = (e, t, r) => t in e ? Kn(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : e[t] = r, Yn = (e, t) => {
      for (var r in t || (t = {})) Bn.call(t, r) && Gn(e, r, t[r]);
      if (Fn) for (var r of Fn(t)) Wn.call(t, r) && Gn(e, r, t[r]);
      return e;
    };
    class Xn extends class {
      constructor(e, t, r, i) {
        this.core = e, this.logger = t, this.name = r;
      }
    } {
      constructor(e, t, r, i = Ji, n) {
        super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], 
        this.initialized = !1, this.storagePrefix = Ji, this.init = async () => {
          this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => {
            !function(e) {
              var t;
              return null == (t = e?.proposer) ? void 0 : t.publicKey;
            }(e) ? function(e) {
              return e?.topic;
            }(e) ? this.map.set(e.topic, e) : this.getKey && null !== e && !Zt(e) && this.map.set(this.getKey(e), e) : this.map.set(e.id, e);
          })), this.cached = [], this.initialized = !0);
        }, this.set = async (e, t) => {
          this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
            type: "method",
            method: "set",
            key: e,
            value: t
          }), this.map.set(e, t), await this.persist());
        }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
          type: "method",
          method: "get",
          key: e
        }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter((t => Object.keys(e).every((r => mr()(t[r], e[r]))))) : this.values), 
        this.update = async (e, t) => {
          this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
            type: "method",
            method: "update",
            key: e,
            update: t
          });
          const r = Yn(Yn({}, this.getData(e)), t);
          this.map.set(e, r), await this.persist();
        }, this.delete = async (e, t) => {
          this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
            type: "method",
            method: "delete",
            key: e,
            reason: t
          }), this.map.delete(e), await this.persist());
        }, this.logger = (0, _.generateChildLogger)(t, this.name), this.storagePrefix = i, this.getKey = n;
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
      }
      get length() {
        return this.map.size;
      }
      get keys() {
        return Array.from(this.map.keys());
      }
      get values() {
        return Array.from(this.map.values());
      }
      async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e);
      }
      async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
      }
      getData(e) {
        const t = this.map.get(e);
        if (!t) {
          const {message: t} = Wt("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw this.logger.error(t), new Error(t);
        }
        return t;
      }
      async persist() {
        await this.setDataStore(this.values);
      }
      async restore() {
        try {
          const e = await this.getDataStore();
          if (typeof e > "u" || !e.length) return;
          if (this.map.size) {
            const {message: e} = Wt("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(e), new Error(e);
          }
          this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            value: this.values
          });
        } catch (e) {
          this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
        }
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
    }
    class Zn {
      constructor(e, t) {
        this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new (m()), this.initialized = !1, 
        this.storagePrefix = Ji, this.ignoredPayloadTypes = [ 1 ], this.registeredMethods = [], this.init = async () => {
          this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), 
          this.initialized = !0, this.logger.trace("Initialized"));
        }, this.register = ({methods: e}) => {
          this.isInitialized(), this.registeredMethods = [ ...new Set([ ...this.registeredMethods, ...e ]) ];
        }, this.create = async () => {
          this.isInitialized();
          const e = nt(), t = await this.core.crypto.setSymKey(e), r = jt(A.FIVE_MINUTES), i = {
            protocol: "irn"
          }, n = {
            topic: t,
            expiry: r,
            relay: i,
            active: !1
          }, s = Jt({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: t,
            symKey: e,
            relay: i
          });
          return await this.pairings.set(t, n), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
            topic: t,
            uri: s
          };
        }, this.pair = async e => {
          this.isInitialized(), this.isValidPair(e);
          const {topic: t, symKey: r, relay: i} = function(e) {
            const t = e.indexOf(":"), r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", o = Xe.parse(s);
            return {
              protocol: i,
              topic: n[0],
              version: parseInt(n[1], 10),
              symKey: o.symKey,
              relay: Vt(o)
            };
          }(e.uri), n = jt(A.FIVE_MINUTES), s = {
            topic: t,
            relay: i,
            expiry: n,
            active: !1
          };
          return await this.pairings.set(t, s), await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
            relay: i
          }), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
            topic: t
          }), s;
        }, this.activate = async ({topic: e}) => {
          this.isInitialized();
          const t = jt(A.THIRTY_DAYS);
          await this.pairings.update(e, {
            active: !0,
            expiry: t
          }), this.core.expirer.set(e, t);
        }, this.ping = async e => {
          this.isInitialized(), await this.isValidPing(e);
          const {topic: t} = e;
          if (this.pairings.keys.includes(t)) {
            const e = await this.sendRequest(t, "wc_pairingPing", {}), {done: r, resolve: i, reject: n} = xt();
            this.events.once(Ct("pairing_ping", e), (({error: e}) => {
              e ? n(e) : i();
            })), await r();
          }
        }, this.updateExpiry = async ({topic: e, expiry: t}) => {
          this.isInitialized(), await this.pairings.update(e, {
            expiry: t
          });
        }, this.updateMetadata = async ({topic: e, metadata: t}) => {
          this.isInitialized(), await this.pairings.update(e, {
            peerMetadata: t
          });
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
          this.isInitialized(), await this.isValidDisconnect(e);
          const {topic: t} = e;
          this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", Gt("USER_DISCONNECTED")), await this.deletePairing(t));
        }, this.sendRequest = async (e, t, r) => {
          const i = (0, fr.formatJsonRpcRequest)(t, r), n = await this.core.crypto.encode(e, i), s = gn[t].req;
          return this.core.history.set(e, i), await this.core.relayer.publish(e, n, s), i.id;
        }, this.sendResult = async (e, t, r) => {
          const i = (0, fr.formatJsonRpcResult)(e, r), n = await this.core.crypto.encode(t, i), s = await this.core.history.get(t, e), o = gn[s.request.method].res;
          await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
        }, this.sendError = async (e, t, r) => {
          const i = (0, fr.formatJsonRpcError)(e, r), n = await this.core.crypto.encode(t, i), s = await this.core.history.get(t, e), o = gn[s.request.method] ? gn[s.request.method].res : gn.unregistered_method.res;
          await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
        }, this.deletePairing = async (e, t) => {
          await this.core.relayer.unsubscribe(e), await Promise.all([ this.pairings.delete(e, Gt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e) ]);
        }, this.cleanup = async () => {
          const e = this.pairings.getAll().filter((e => Lt(e.expiry)));
          await Promise.all(e.map((e => this.deletePairing(e.topic))));
        }, this.onRelayEventRequest = e => {
          const {topic: t, payload: r} = e, i = r.method;
          if (this.pairings.keys.includes(t)) switch (i) {
           case "wc_pairingPing":
            return this.onPairingPingRequest(t, r);

           case "wc_pairingDelete":
            return this.onPairingDeleteRequest(t, r);

           default:
            return this.onUnknownRpcMethodRequest(t, r);
          }
        }, this.onRelayEventResponse = async e => {
          const {topic: t, payload: r} = e, i = (await this.core.history.get(t, r.id)).request.method;
          if (this.pairings.keys.includes(t)) {
            if ("wc_pairingPing" === i) return this.onPairingPingResponse(t, r);
            return this.onUnknownRpcMethodResponse(i);
          }
        }, this.onPairingPingRequest = async (e, t) => {
          const {id: r} = t;
          try {
            this.isValidPing({
              topic: e
            }), await this.sendResult(r, e, !0), this.events.emit("pairing_ping", {
              id: r,
              topic: e
            });
          } catch (i) {
            await this.sendError(r, e, i), this.logger.error(i);
          }
        }, this.onPairingPingResponse = (e, t) => {
          const {id: r} = t;
          setTimeout((() => {
            (0, fr.isJsonRpcResult)(t) ? this.events.emit(Ct("pairing_ping", r), {}) : (0, fr.isJsonRpcError)(t) && this.events.emit(Ct("pairing_ping", r), {
              error: t.error
            });
          }), 500);
        }, this.onPairingDeleteRequest = async (e, t) => {
          const {id: r} = t;
          try {
            this.isValidDisconnect({
              topic: e
            }), await this.deletePairing(e), this.events.emit("pairing_delete", {
              id: r,
              topic: e
            });
          } catch (i) {
            await this.sendError(r, e, i), this.logger.error(i);
          }
        }, this.onUnknownRpcMethodRequest = async (e, t) => {
          const {id: r, method: i} = t;
          try {
            if (this.registeredMethods.includes(i)) return;
            const t = Gt("WC_METHOD_UNSUPPORTED", i);
            await this.sendError(r, e, t), this.logger.error(t);
          } catch (n) {
            await this.sendError(r, e, n), this.logger.error(n);
          }
        }, this.onUnknownRpcMethodResponse = e => {
          this.registeredMethods.includes(e) || this.logger.error(Gt("WC_METHOD_UNSUPPORTED", e));
        }, this.isValidPair = e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `pair() params: ${e}`);
            throw new Error(t);
          }
          if (!function(e) {
            if (Qt(e, !1)) try {
              return typeof new URL(e) < "u";
            } catch {
              return !1;
            }
            return !1;
          }(e.uri)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
            throw new Error(t);
          }
        }, this.isValidPing = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `ping() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t} = e;
          await this.isValidPairingTopic(t);
        }, this.isValidDisconnect = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `disconnect() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t} = e;
          await this.isValidPairingTopic(t);
        }, this.isValidPairingTopic = async e => {
          if (!Qt(e, !1)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(t);
          }
          if (!this.pairings.keys.includes(e)) {
            const {message: t} = Wt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(t);
          }
          if (Lt(this.pairings.get(e).expiry)) {
            await this.deletePairing(e);
            const {message: t} = Wt("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t);
          }
        }, this.core = e, this.logger = (0, _.generateChildLogger)(t, this.name), this.pairings = new Xn(this.core, this.logger, this.name, this.storagePrefix);
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
      registerRelayerEvents() {
        this.core.relayer.on(Xi, (async e => {
          const {topic: t, message: r} = e;
          if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
          const i = await this.core.crypto.decode(t, r);
          (0, fr.isJsonRpcRequest)(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
            topic: t,
            payload: i
          })) : (0, fr.isJsonRpcResponse)(i) && (await this.core.history.resolve(i), this.onRelayEventResponse({
            topic: t,
            payload: i
          }));
        }));
      }
      registerExpirerEvents() {
        this.core.expirer.on(En, (async e => {
          const {topic: t} = Ut(e.target);
          t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
            topic: t
          }));
        }));
      }
    }
    class Qn extends O {
      constructor(e, t) {
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new v.EventEmitter, this.name = "history", 
        this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Ji, this.init = async () => {
          this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.records.set(e.id, e))), 
          this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.set = (e, t, r) => {
          if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
            type: "method",
            method: "set",
            topic: e,
            request: t,
            chainId: r
          }), this.records.has(t.id)) return;
          const i = {
            id: t.id,
            topic: e,
            request: {
              method: t.method,
              params: t.params || null
            },
            chainId: r
          };
          this.records.set(i.id, i), this.events.emit(yn, i);
        }, this.resolve = async e => {
          if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
            type: "method",
            method: "update",
            response: e
          }), !this.records.has(e.id)) return;
          const t = await this.getRecord(e.id);
          typeof t.response > "u" && (t.response = (0, fr.isJsonRpcError)(e) ? {
            error: e.error
          } : {
            result: e.result
          }, this.records.set(t.id, t), this.events.emit(vn, t));
        }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
          type: "method",
          method: "get",
          topic: e,
          id: t
        }), await this.getRecord(t)), this.delete = (e, t) => {
          this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
            type: "method",
            method: "delete",
            id: t
          }), this.values.forEach((r => {
            if (r.topic === e) {
              if (typeof t < "u" && r.id !== t) return;
              this.records.delete(r.id), this.events.emit(mn, r);
            }
          }));
        }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), 
        this.on = (e, t) => {
          this.events.on(e, t);
        }, this.once = (e, t) => {
          this.events.once(e, t);
        }, this.off = (e, t) => {
          this.events.off(e, t);
        }, this.removeListener = (e, t) => {
          this.events.removeListener(e, t);
        }, this.logger = (0, _.generateChildLogger)(t, this.name);
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
      }
      get size() {
        return this.records.size;
      }
      get keys() {
        return Array.from(this.records.keys());
      }
      get values() {
        return Array.from(this.records.values());
      }
      get pending() {
        const e = [];
        return this.values.forEach((t => {
          if (typeof t.response < "u") return;
          const r = {
            topic: t.topic,
            request: (0, fr.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
            chainId: t.chainId
          };
          return e.push(r);
        })), e;
      }
      async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e);
      }
      async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
      }
      getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
          const {message: t} = Wt("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw new Error(t);
        }
        return t;
      }
      async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(bn);
      }
      async restore() {
        try {
          const e = await this.getJsonRpcRecords();
          if (typeof e > "u" || !e.length) return;
          if (this.records.size) {
            const {message: e} = Wt("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(e), new Error(e);
          }
          this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            records: this.values
          });
        } catch (e) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
        }
      }
      registerEventListeners() {
        this.events.on(yn, (e => {
          const t = yn;
          this.logger.info(`Emitting ${t}`), this.logger.debug({
            type: "event",
            event: t,
            record: e
          }), this.persist();
        })), this.events.on(vn, (e => {
          const t = vn;
          this.logger.info(`Emitting ${t}`), this.logger.debug({
            type: "event",
            event: t,
            record: e
          }), this.persist();
        })), this.events.on(mn, (e => {
          const t = mn;
          this.logger.info(`Emitting ${t}`), this.logger.debug({
            type: "event",
            event: t,
            record: e
          }), this.persist();
        }));
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
    }
    class es extends N {
      constructor(e, t) {
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new v.EventEmitter, this.name = "expirer", 
        this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Ji, this.init = async () => {
          this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.expirations.set(e.target, e))), 
          this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.has = e => {
          try {
            const t = this.formatTarget(e);
            return typeof this.getExpiration(t) < "u";
          } catch {
            return !1;
          }
        }, this.set = (e, t) => {
          this.isInitialized();
          const r = this.formatTarget(e), i = {
            target: r,
            expiry: t
          };
          this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(wn, {
            target: r,
            expiration: i
          });
        }, this.get = e => {
          this.isInitialized();
          const t = this.formatTarget(e);
          return this.getExpiration(t);
        }, this.del = e => {
          if (this.isInitialized(), this.has(e)) {
            const t = this.formatTarget(e), r = this.getExpiration(t);
            this.expirations.delete(t), this.events.emit(_n, {
              target: t,
              expiration: r
            });
          }
        }, this.on = (e, t) => {
          this.events.on(e, t);
        }, this.once = (e, t) => {
          this.events.once(e, t);
        }, this.off = (e, t) => {
          this.events.off(e, t);
        }, this.removeListener = (e, t) => {
          this.events.removeListener(e, t);
        }, this.logger = (0, _.generateChildLogger)(t, this.name);
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
      }
      get length() {
        return this.expirations.size;
      }
      get keys() {
        return Array.from(this.expirations.keys());
      }
      get values() {
        return Array.from(this.expirations.values());
      }
      formatTarget(e) {
        if ("string" == typeof e) return function(e) {
          return At("topic", e);
        }(e);
        if ("number" == typeof e) return function(e) {
          return At("id", e);
        }(e);
        const {message: t} = Wt("UNKNOWN_TYPE", "Target type: " + typeof e);
        throw new Error(t);
      }
      async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e);
      }
      async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
      }
      async persist() {
        await this.setExpirations(this.values), this.events.emit(Sn);
      }
      async restore() {
        try {
          const e = await this.getExpirations();
          if (typeof e > "u" || !e.length) return;
          if (this.expirations.size) {
            const {message: e} = Wt("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(e), new Error(e);
          }
          this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            expirations: this.values
          });
        } catch (e) {
          this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
        }
      }
      getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
          const {message: t} = Wt("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw this.logger.error(t), new Error(t);
        }
        return t;
      }
      checkExpiry(e, t) {
        const {expiry: r} = t;
        (0, A.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
      }
      expire(e, t) {
        this.expirations.delete(e), this.events.emit(En, {
          target: e,
          expiration: t
        });
      }
      checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach(((e, t) => this.checkExpiry(t, e)));
      }
      registerEventListeners() {
        this.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(wn, (e => {
          const t = wn;
          this.logger.info(`Emitting ${t}`), this.logger.debug({
            type: "event",
            event: t,
            data: e
          }), this.persist();
        })), this.events.on(En, (e => {
          const t = En;
          this.logger.info(`Emitting ${t}`), this.logger.debug({
            type: "event",
            event: t,
            data: e
          }), this.persist();
        })), this.events.on(_n, (e => {
          const t = _n;
          this.logger.info(`Emitting ${t}`), this.logger.debug({
            type: "event",
            event: t,
            data: e
          }), this.persist();
        }));
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
    }
    var ts = Object.defineProperty, rs = Object.getOwnPropertySymbols, is = Object.prototype.hasOwnProperty, ns = Object.prototype.propertyIsEnumerable, ss = (e, t, r) => t in e ? ts(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : e[t] = r, os = (e, t) => {
      for (var r in t || (t = {})) is.call(t, r) && ss(e, r, t[r]);
      if (rs) for (var r of rs(t)) ns.call(t, r) && ss(e, r, t[r]);
      return e;
    };
    class as extends S {
      constructor(e) {
        super(e), this.protocol = "wc", this.version = 2, this.name = Vi, this.events = new v.EventEmitter, this.initialized = !1, 
        this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), 
        this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || Yi;
        const t = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : y()((0, _.getDefaultLoggerOptions)({
          level: e?.logger || Ki
        }));
        this.logger = (0, _.generateChildLogger)(t, this.name), this.heartbeat = new w.HeartBeat, this.crypto = new In(this, this.logger, e?.keychain), 
        this.history = new Qn(this, this.logger), this.expirer = new es(this, this.logger), this.storage = null != e && e.storage ? e.storage : new b.ZP(os(os({}, Fi), e?.storageOptions)), 
        this.relayer = new Jn({
          core: this,
          logger: this.logger,
          relayUrl: this.relayUrl,
          projectId: this.projectId
        }), this.pairing = new Zn(this, this.logger);
      }
      static async init(e) {
        const t = new as(e);
        return await t.initialize(), t;
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      async start() {
        this.initialized || await this.initialize();
      }
      async initialize() {
        this.logger.trace("Initialized");
        try {
          await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), 
          await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
        } catch (e) {
          throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
        }
      }
    }
    const cs = as;
    const hs = "client", us = "wc@2:client:", ls = hs, ps = "error", fs = A.SEVEN_DAYS, ds = {
      wc_sessionPropose: {
        req: {
          ttl: A.FIVE_MINUTES,
          prompt: !0,
          tag: 1100
        },
        res: {
          ttl: A.FIVE_MINUTES,
          prompt: !1,
          tag: 1101
        }
      },
      wc_sessionSettle: {
        req: {
          ttl: A.FIVE_MINUTES,
          prompt: !1,
          tag: 1102
        },
        res: {
          ttl: A.FIVE_MINUTES,
          prompt: !1,
          tag: 1103
        }
      },
      wc_sessionUpdate: {
        req: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 1104
        },
        res: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 1105
        }
      },
      wc_sessionExtend: {
        req: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 1106
        },
        res: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 1107
        }
      },
      wc_sessionRequest: {
        req: {
          ttl: A.FIVE_MINUTES,
          prompt: !0,
          tag: 1108
        },
        res: {
          ttl: A.FIVE_MINUTES,
          prompt: !1,
          tag: 1109
        }
      },
      wc_sessionEvent: {
        req: {
          ttl: A.FIVE_MINUTES,
          prompt: !0,
          tag: 1110
        },
        res: {
          ttl: A.FIVE_MINUTES,
          prompt: !1,
          tag: 1111
        }
      },
      wc_sessionDelete: {
        req: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 1112
        },
        res: {
          ttl: A.ONE_DAY,
          prompt: !1,
          tag: 1113
        }
      },
      wc_sessionPing: {
        req: {
          ttl: A.THIRTY_SECONDS,
          prompt: !1,
          tag: 1114
        },
        res: {
          ttl: A.THIRTY_SECONDS,
          prompt: !1,
          tag: 1115
        }
      }
    }, gs = {
      min: A.FIVE_MINUTES,
      max: A.SEVEN_DAYS
    };
    var ys = Object.defineProperty, vs = Object.defineProperties, ms = Object.getOwnPropertyDescriptors, bs = Object.getOwnPropertySymbols, ws = Object.prototype.hasOwnProperty, _s = Object.prototype.propertyIsEnumerable, Es = (e, t, r) => t in e ? ys(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : e[t] = r, Ss = (e, t) => {
      for (var r in t || (t = {})) ws.call(t, r) && Es(e, r, t[r]);
      if (bs) for (var r of bs(t)) _s.call(t, r) && Es(e, r, t[r]);
      return e;
    }, Os = (e, t) => vs(e, ms(t));
    class Is extends class {
      constructor(e) {
        this.client = e;
      }
    } {
      constructor(e) {
        super(e), this.name = "engine", this.events = new (m()), this.initialized = !1, this.ignoredPayloadTypes = [ 1 ], this.init = async () => {
          this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
            methods: Object.keys(ds)
          }), this.initialized = !0);
        }, this.connect = async e => {
          this.isInitialized();
          const t = Os(Ss({}, e), {
            requiredNamespaces: e.requiredNamespaces || {},
            optionalNamespaces: e.optionalNamespaces || {}
          });
          await this.isValidConnect(t);
          const {pairingTopic: r, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: s, relays: o} = t;
          let a, c = r, h = !1;
          if (c && (h = this.client.core.pairing.pairings.get(c).active), !c || !h) {
            const {topic: e, uri: t} = await this.client.core.pairing.create();
            c = e, a = t;
          }
          const u = await this.client.core.crypto.generateKeyPair(), l = Ss({
            requiredNamespaces: i,
            optionalNamespaces: n,
            relays: o ?? [ {
              protocol: "irn"
            } ],
            proposer: {
              publicKey: u,
              metadata: this.client.metadata
            }
          }, s && {
            sessionProperties: s
          }), {reject: p, resolve: f, done: d} = xt();
          if (this.events.once(Ct("session_connect"), (async ({error: e, session: t}) => {
            if (e) p(e); else if (t) {
              t.self.publicKey = u;
              const e = Os(Ss({}, t), {
                requiredNamespaces: t.requiredNamespaces,
                optionalNamespaces: t.optionalNamespaces
              });
              await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), c && await this.client.core.pairing.updateMetadata({
                topic: c,
                metadata: t.peer.metadata
              }), f(e);
            }
          })), !c) {
            const {message: e} = Wt("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
            throw new Error(e);
          }
          const g = await this.sendRequest(c, "wc_sessionPropose", l), y = jt(A.FIVE_MINUTES);
          return await this.setProposal(g, Ss({
            id: g,
            expiry: y
          }, l)), {
            uri: a,
            approval: d
          };
        }, this.pair = async e => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
          this.isInitialized(), await this.isValidApprove(e);
          const {id: t, relayProtocol: r, namespaces: i, sessionProperties: n} = e, s = this.client.proposal.get(t);
          let {pairingTopic: o, proposer: a, requiredNamespaces: c, optionalNamespaces: h} = s;
          Xt(c) || (c = function(e, t) {
            const r = or(e, t);
            if (r) throw new Error(r.message);
            const i = {};
            for (const [n, s] of Object.entries(e)) i[n] = {
              methods: s.methods,
              events: s.events,
              chains: s.accounts.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`))
            };
            return i;
          }(i, "approve()"));
          const u = await this.client.core.crypto.generateKeyPair(), l = a.publicKey, p = await this.client.core.crypto.generateSharedKey(u, l);
          o && t && (await this.client.core.pairing.updateMetadata({
            topic: o,
            metadata: a.metadata
          }), await this.sendResult(t, o, {
            relay: {
              protocol: r ?? "irn"
            },
            responderPublicKey: u
          }), await this.client.proposal.delete(t, Gt("USER_DISCONNECTED")), await this.client.core.pairing.activate({
            topic: o
          }));
          const f = Ss({
            relay: {
              protocol: r ?? "irn"
            },
            namespaces: i,
            requiredNamespaces: c,
            optionalNamespaces: h,
            controller: {
              publicKey: u,
              metadata: this.client.metadata
            },
            expiry: jt(fs)
          }, n && {
            sessionProperties: n
          });
          await this.client.core.relayer.subscribe(p);
          const d = await this.sendRequest(p, "wc_sessionSettle", f), {done: g, resolve: y, reject: v} = xt();
          this.events.once(Ct("session_approve", d), (({error: e}) => {
            e ? v(e) : y(this.client.session.get(p));
          }));
          const m = Os(Ss({}, f), {
            topic: p,
            acknowledged: !1,
            self: f.controller,
            peer: {
              publicKey: a.publicKey,
              metadata: a.metadata
            },
            controller: u
          });
          return await this.client.session.set(p, m), await this.setExpiry(p, jt(fs)), {
            topic: p,
            acknowledged: g
          };
        }, this.reject = async e => {
          this.isInitialized(), await this.isValidReject(e);
          const {id: t, reason: r} = e, {pairingTopic: i} = this.client.proposal.get(t);
          i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, Gt("USER_DISCONNECTED")));
        }, this.update = async e => {
          this.isInitialized(), await this.isValidUpdate(e);
          const {topic: t, namespaces: r} = e, i = await this.sendRequest(t, "wc_sessionUpdate", {
            namespaces: r
          }), {done: n, resolve: s, reject: o} = xt();
          return this.events.once(Ct("session_update", i), (({error: e}) => {
            e ? o(e) : s();
          })), await this.client.session.update(t, {
            namespaces: r
          }), {
            acknowledged: n
          };
        }, this.extend = async e => {
          this.isInitialized(), await this.isValidExtend(e);
          const {topic: t} = e, r = await this.sendRequest(t, "wc_sessionExtend", {}), {done: i, resolve: n, reject: s} = xt();
          return this.events.once(Ct("session_extend", r), (({error: e}) => {
            e ? s(e) : n();
          })), await this.setExpiry(t, jt(fs)), {
            acknowledged: i
          };
        }, this.request = async e => {
          this.isInitialized(), await this.isValidRequest(e);
          const {chainId: t, request: r, topic: i, expiry: n} = e, s = await this.sendRequest(i, "wc_sessionRequest", {
            request: r,
            chainId: t
          }, n), {done: o, resolve: a, reject: c} = xt(n);
          return this.events.once(Ct("session_request", s), (({error: e, result: t}) => {
            e ? c(e) : a(t);
          })), this.client.events.emit("session_request_sent", {
            topic: i,
            request: r,
            chainId: t
          }), await o();
        }, this.respond = async e => {
          this.isInitialized(), await this.isValidRespond(e);
          const {topic: t, response: r} = e, {id: i} = r;
          (0, fr.isJsonRpcResult)(r) ? await this.sendResult(i, t, r.result) : (0, fr.isJsonRpcError)(r) && await this.sendError(i, t, r.error), 
          this.deletePendingSessionRequest(e.response.id, {
            message: "fulfilled",
            code: 0
          });
        }, this.ping = async e => {
          this.isInitialized(), await this.isValidPing(e);
          const {topic: t} = e;
          if (this.client.session.keys.includes(t)) {
            const e = await this.sendRequest(t, "wc_sessionPing", {}), {done: r, resolve: i, reject: n} = xt();
            this.events.once(Ct("session_ping", e), (({error: e}) => {
              e ? n(e) : i();
            })), await r();
          } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
            topic: t
          });
        }, this.emit = async e => {
          this.isInitialized(), await this.isValidEmit(e);
          const {topic: t, event: r, chainId: i} = e;
          await this.sendRequest(t, "wc_sessionEvent", {
            event: r,
            chainId: i
          });
        }, this.disconnect = async e => {
          this.isInitialized(), await this.isValidDisconnect(e);
          const {topic: t} = e;
          this.client.session.keys.includes(t) ? (await this.sendRequest(t, "wc_sessionDelete", Gt("USER_DISCONNECTED")), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
            topic: t
          });
        }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter((t => function(e, t) {
          const {requiredNamespaces: r} = t, i = Object.keys(e.namespaces), n = Object.keys(r);
          let s = !0;
          return !!Rt(n, i) && (i.forEach((t => {
            const {accounts: i, methods: n, events: o} = e.namespaces[t], a = Kt(i), c = r[t];
            Rt(Qe(t, c), a) && Rt(c.methods, n) && Rt(c.events, o) || (s = !1);
          })), s);
        }(t, e)))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.deleteSession = async (e, t) => {
          const {self: r} = this.client.session.get(e);
          await this.client.core.relayer.unsubscribe(e), await Promise.all([ this.client.session.delete(e, Gt("USER_DISCONNECTED")), this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.client.core.expirer.del(e) ]);
        }, this.deleteProposal = async (e, t) => {
          await Promise.all([ this.client.proposal.delete(e, Gt("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e) ]);
        }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
          await Promise.all([ this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e) ]);
        }, this.setExpiry = async (e, t) => {
          this.client.session.keys.includes(e) && await this.client.session.update(e, {
            expiry: t
          }), this.client.core.expirer.set(e, t);
        }, this.setProposal = async (e, t) => {
          await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry);
        }, this.setPendingSessionRequest = async e => {
          const t = ds.wc_sessionRequest.req.ttl, {id: r, topic: i, params: n} = e;
          await this.client.pendingRequest.set(r, {
            id: r,
            topic: i,
            params: n
          }), t && this.client.core.expirer.set(r, jt(t));
        }, this.sendRequest = async (e, t, r, i) => {
          const n = (0, fr.formatJsonRpcRequest)(t, r), s = await this.client.core.crypto.encode(e, n), o = ds[t].req;
          return i && (o.ttl = i), this.client.core.history.set(e, n), this.client.core.relayer.publish(e, s, o), n.id;
        }, this.sendResult = async (e, t, r) => {
          const i = (0, fr.formatJsonRpcResult)(e, r), n = await this.client.core.crypto.encode(t, i), s = await this.client.core.history.get(t, e), o = ds[s.request.method].res;
          this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i);
        }, this.sendError = async (e, t, r) => {
          const i = (0, fr.formatJsonRpcError)(e, r), n = await this.client.core.crypto.encode(t, i), s = await this.client.core.history.get(t, e), o = ds[s.request.method].res;
          this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i);
        }, this.cleanup = async () => {
          const e = [], t = [];
          this.client.session.getAll().forEach((t => {
            Lt(t.expiry) && e.push(t.topic);
          })), this.client.proposal.getAll().forEach((e => {
            Lt(e.expiry) && t.push(e.id);
          })), await Promise.all([ ...e.map((e => this.deleteSession(e))), ...t.map((e => this.deleteProposal(e))) ]);
        }, this.onRelayEventRequest = e => {
          const {topic: t, payload: r} = e, i = r.method;
          switch (i) {
           case "wc_sessionPropose":
            return this.onSessionProposeRequest(t, r);

           case "wc_sessionSettle":
            return this.onSessionSettleRequest(t, r);

           case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(t, r);

           case "wc_sessionExtend":
            return this.onSessionExtendRequest(t, r);

           case "wc_sessionPing":
            return this.onSessionPingRequest(t, r);

           case "wc_sessionDelete":
            return this.onSessionDeleteRequest(t, r);

           case "wc_sessionRequest":
            return this.onSessionRequest(t, r);

           case "wc_sessionEvent":
            return this.onSessionEventRequest(t, r);

           default:
            return this.client.logger.info(`Unsupported request method ${i}`);
          }
        }, this.onRelayEventResponse = async e => {
          const {topic: t, payload: r} = e, i = (await this.client.core.history.get(t, r.id)).request.method;
          switch (i) {
           case "wc_sessionPropose":
            return this.onSessionProposeResponse(t, r);

           case "wc_sessionSettle":
            return this.onSessionSettleResponse(t, r);

           case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(t, r);

           case "wc_sessionExtend":
            return this.onSessionExtendResponse(t, r);

           case "wc_sessionPing":
            return this.onSessionPingResponse(t, r);

           case "wc_sessionRequest":
            return this.onSessionRequestResponse(t, r);

           default:
            return this.client.logger.info(`Unsupported response method ${i}`);
          }
        }, this.onSessionProposeRequest = async (e, t) => {
          const {params: r, id: i} = t;
          try {
            this.isValidConnect(Ss({}, t.params));
            const n = jt(A.FIVE_MINUTES), s = Ss({
              id: i,
              pairingTopic: e,
              expiry: n
            }, r);
            await this.setProposal(i, s), this.client.events.emit("session_proposal", {
              id: i,
              params: s
            });
          } catch (Hs) {
            await this.sendError(i, e, Hs), this.client.logger.error(Hs);
          }
        }, this.onSessionProposeResponse = async (e, t) => {
          const {id: r} = t;
          if ((0, fr.isJsonRpcResult)(t)) {
            const {result: i} = t;
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              result: i
            });
            const n = this.client.proposal.get(r);
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              proposal: n
            });
            const s = n.proposer.publicKey;
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              selfPublicKey: s
            });
            const o = i.responderPublicKey;
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              peerPublicKey: o
            });
            const a = await this.client.core.crypto.generateSharedKey(s, o);
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              sessionTopic: a
            });
            const c = await this.client.core.relayer.subscribe(a);
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              subscriptionId: c
            }), await this.client.core.pairing.activate({
              topic: e
            });
          } else (0, fr.isJsonRpcError)(t) && (await this.client.proposal.delete(r, Gt("USER_DISCONNECTED")), this.events.emit(Ct("session_connect"), {
            error: t.error
          }));
        }, this.onSessionSettleRequest = async (e, t) => {
          const {id: r, params: i} = t;
          try {
            this.isValidSessionSettleRequest(i);
            const {relay: r, controller: n, expiry: s, namespaces: o, requiredNamespaces: a, optionalNamespaces: c, sessionProperties: h} = t.params, u = Ss({
              topic: e,
              relay: r,
              expiry: s,
              namespaces: o,
              acknowledged: !0,
              requiredNamespaces: a,
              optionalNamespaces: c,
              controller: n.publicKey,
              self: {
                publicKey: "",
                metadata: this.client.metadata
              },
              peer: {
                publicKey: n.publicKey,
                metadata: n.metadata
              }
            }, h && {
              sessionProperties: h
            });
            await this.sendResult(t.id, e, !0), this.events.emit(Ct("session_connect"), {
              session: u
            });
          } catch (Hs) {
            await this.sendError(r, e, Hs), this.client.logger.error(Hs);
          }
        }, this.onSessionSettleResponse = async (e, t) => {
          const {id: r} = t;
          (0, fr.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
            acknowledged: !0
          }), this.events.emit(Ct("session_approve", r), {})) : (0, fr.isJsonRpcError)(t) && (await this.client.session.delete(e, Gt("USER_DISCONNECTED")), 
          this.events.emit(Ct("session_approve", r), {
            error: t.error
          }));
        }, this.onSessionUpdateRequest = async (e, t) => {
          const {params: r, id: i} = t;
          try {
            this.isValidUpdate(Ss({
              topic: e
            }, r)), await this.client.session.update(e, {
              namespaces: r.namespaces
            }), await this.sendResult(i, e, !0), this.client.events.emit("session_update", {
              id: i,
              topic: e,
              params: r
            });
          } catch (Hs) {
            await this.sendError(i, e, Hs), this.client.logger.error(Hs);
          }
        }, this.onSessionUpdateResponse = (e, t) => {
          const {id: r} = t;
          (0, fr.isJsonRpcResult)(t) ? this.events.emit(Ct("session_update", r), {}) : (0, fr.isJsonRpcError)(t) && this.events.emit(Ct("session_update", r), {
            error: t.error
          });
        }, this.onSessionExtendRequest = async (e, t) => {
          const {id: r} = t;
          try {
            this.isValidExtend({
              topic: e
            }), await this.setExpiry(e, jt(fs)), await this.sendResult(r, e, !0), this.client.events.emit("session_extend", {
              id: r,
              topic: e
            });
          } catch (i) {
            await this.sendError(r, e, i), this.client.logger.error(i);
          }
        }, this.onSessionExtendResponse = (e, t) => {
          const {id: r} = t;
          (0, fr.isJsonRpcResult)(t) ? this.events.emit(Ct("session_extend", r), {}) : (0, fr.isJsonRpcError)(t) && this.events.emit(Ct("session_extend", r), {
            error: t.error
          });
        }, this.onSessionPingRequest = async (e, t) => {
          const {id: r} = t;
          try {
            this.isValidPing({
              topic: e
            }), await this.sendResult(r, e, !0), this.client.events.emit("session_ping", {
              id: r,
              topic: e
            });
          } catch (i) {
            await this.sendError(r, e, i), this.client.logger.error(i);
          }
        }, this.onSessionPingResponse = (e, t) => {
          const {id: r} = t;
          setTimeout((() => {
            (0, fr.isJsonRpcResult)(t) ? this.events.emit(Ct("session_ping", r), {}) : (0, fr.isJsonRpcError)(t) && this.events.emit(Ct("session_ping", r), {
              error: t.error
            });
          }), 500);
        }, this.onSessionDeleteRequest = async (e, t) => {
          const {id: r} = t;
          try {
            this.isValidDisconnect({
              topic: e,
              reason: t.params
            }), this.client.core.relayer.once(nn, (async () => {
              await this.deleteSession(e);
            })), await this.sendResult(r, e, !0), this.client.events.emit("session_delete", {
              id: r,
              topic: e
            });
          } catch (i) {
            await this.sendError(r, e, i), this.client.logger.error(i);
          }
        }, this.onSessionRequest = async (e, t) => {
          const {id: r, params: i} = t;
          try {
            this.isValidRequest(Ss({
              topic: e
            }, i)), await this.setPendingSessionRequest({
              id: r,
              topic: e,
              params: i
            }), this.client.events.emit("session_request", {
              id: r,
              topic: e,
              params: i
            });
          } catch (Hs) {
            await this.sendError(r, e, Hs), this.client.logger.error(Hs);
          }
        }, this.onSessionRequestResponse = (e, t) => {
          const {id: r} = t;
          (0, fr.isJsonRpcResult)(t) ? this.events.emit(Ct("session_request", r), {
            result: t.result
          }) : (0, fr.isJsonRpcError)(t) && this.events.emit(Ct("session_request", r), {
            error: t.error
          });
        }, this.onSessionEventRequest = async (e, t) => {
          const {id: r, params: i} = t;
          try {
            this.isValidEmit(Ss({
              topic: e
            }, i)), this.client.events.emit("session_event", {
              id: r,
              topic: e,
              params: i
            });
          } catch (Hs) {
            await this.sendError(r, e, Hs), this.client.logger.error(Hs);
          }
        }, this.isValidConnect = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
            throw new Error(t);
          }
          const {pairingTopic: t, requiredNamespaces: r, optionalNamespaces: i, sessionProperties: n, relays: s} = e;
          if (Zt(t) || await this.isValidPairingTopic(t), !function(e, t) {
            let r = !1;
            return t && !e ? r = !0 : e && Yt(e) && e.length && e.forEach((e => {
              r = ar(e);
            })), r;
          }(s, !0)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `connect() relays: ${s}`);
            throw new Error(e);
          }
          !Zt(r) && 0 !== Xt(r) && this.validateNamespaces(r, "requiredNamespaces"), !Zt(i) && 0 !== Xt(i) && this.validateNamespaces(i, "optionalNamespaces"), 
          Zt(n) || this.validateSessionProps(n, "sessionProperties");
        }, this.validateNamespaces = (e, t) => {
          const r = function(e, t, r) {
            let i = null;
            if (e && Xt(e)) {
              const r = sr(e, t);
              r && (i = r);
              const n = ir(e, t);
              n && (i = n);
            } else i = Wt("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
            return i;
          }(e, "connect()", t);
          if (r) throw new Error(r.message);
        }, this.isValidApprove = async e => {
          if (!cr(e)) throw new Error(Wt("MISSING_OR_INVALID", `approve() params: ${e}`).message);
          const {id: t, namespaces: r, relayProtocol: i, sessionProperties: n} = e;
          await this.isValidProposalId(t);
          const s = this.client.proposal.get(t), o = or(r, "approve()");
          if (o) throw new Error(o.message);
          const a = pr(s.requiredNamespaces, r, "approve()", "requiredNamespaces");
          if (a) throw new Error(a.message);
          if (!Qt(i, !0)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
            throw new Error(e);
          }
          if (Object.keys(r).length > Object.keys(s.requiredNamespaces).length) {
            const e = Object.keys(s.optionalNamespaces).filter((e => r[e])), t = {};
            for (const r in s.optionalNamespaces) e.includes(r) && (t[r] = s.optionalNamespaces[r]);
            const i = pr(t, r, "approve()", "optionalNamespaces");
            if (i) throw new Error(i.message);
          }
          Zt(n) || this.validateSessionProps(n, "sessionProperties");
        }, this.isValidReject = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `reject() params: ${e}`);
            throw new Error(t);
          }
          const {id: t, reason: r} = e;
          if (await this.isValidProposalId(t), !function(e) {
            return !!(e && "object" == typeof e && e.code && er(e.code, !1) && e.message && Qt(e.message, !1));
          }(r)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
            throw new Error(e);
          }
        }, this.isValidSessionSettleRequest = e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
            throw new Error(t);
          }
          const {relay: t, controller: r, namespaces: i, expiry: n} = e;
          if (!ar(t)) {
            const {message: e} = Wt("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
            throw new Error(e);
          }
          const s = function(e, t) {
            let r = null;
            return Qt(e?.publicKey, !1) || (r = Wt("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
          }(r, "onSessionSettleRequest()");
          if (s) throw new Error(s.message);
          const o = or(i, "onSessionSettleRequest()");
          if (o) throw new Error(o.message);
          if (Lt(n)) {
            const {message: e} = Wt("EXPIRED", "onSessionSettleRequest()");
            throw new Error(e);
          }
        }, this.isValidUpdate = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `update() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t, namespaces: r} = e;
          await this.isValidSessionTopic(t);
          const i = this.client.session.get(t), n = or(r, "update()");
          if (n) throw new Error(n.message);
          const s = pr(i.requiredNamespaces, r, "update()", "requiredNamespaces");
          if (s) throw new Error(s.message);
        }, this.isValidExtend = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `extend() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t} = e;
          await this.isValidSessionTopic(t);
        }, this.isValidRequest = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `request() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t, request: r, chainId: i, expiry: n} = e;
          await this.isValidSessionTopic(t);
          const {namespaces: s} = this.client.session.get(t);
          if (!hr(s, i)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `request() chainId: ${i}`);
            throw new Error(e);
          }
          if (!function(e) {
            return !(Zt(e) || !Qt(e.method, !1));
          }(r)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
            throw new Error(e);
          }
          if (!ur(s, i, r.method)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `request() method: ${r.method}`);
            throw new Error(e);
          }
          if (n && !function(e, t) {
            return er(e, !1) && e <= t.max && e >= t.min;
          }(n, gs)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${gs.min} and ${gs.max}`);
            throw new Error(e);
          }
        }, this.isValidRespond = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `respond() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t, response: r} = e;
          if (await this.isValidSessionTopic(t), !function(e) {
            return !(Zt(e) || Zt(e.result) && Zt(e.error) || !er(e.id, !1) || !Qt(e.jsonrpc, !1));
          }(r)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
            throw new Error(e);
          }
        }, this.isValidPing = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `ping() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t} = e;
          await this.isValidSessionOrPairingTopic(t);
        }, this.isValidEmit = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `emit() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t, event: r, chainId: i} = e;
          await this.isValidSessionTopic(t);
          const {namespaces: n} = this.client.session.get(t);
          if (!hr(n, i)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `emit() chainId: ${i}`);
            throw new Error(e);
          }
          if (!function(e) {
            return !(Zt(e) || !Qt(e.name, !1));
          }(r)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
            throw new Error(e);
          }
          if (!lr(n, i, r.name)) {
            const {message: e} = Wt("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
            throw new Error(e);
          }
        }, this.isValidDisconnect = async e => {
          if (!cr(e)) {
            const {message: t} = Wt("MISSING_OR_INVALID", `disconnect() params: ${e}`);
            throw new Error(t);
          }
          const {topic: t} = e;
          await this.isValidSessionOrPairingTopic(t);
        }, this.validateSessionProps = (e, t) => {
          Object.values(e).forEach((e => {
            if (!Qt(e, !1)) {
              const {message: r} = Wt("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
              throw new Error(r);
            }
          }));
        };
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: e} = Wt("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
      }
      registerRelayerEvents() {
        this.client.core.relayer.on(Xi, (async e => {
          const {topic: t, message: r} = e;
          if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
          const i = await this.client.core.crypto.decode(t, r);
          (0, fr.isJsonRpcRequest)(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
            topic: t,
            payload: i
          })) : (0, fr.isJsonRpcResponse)(i) && (await this.client.core.history.resolve(i), this.onRelayEventResponse({
            topic: t,
            payload: i
          }));
        }));
      }
      registerExpirerEvents() {
        this.client.core.expirer.on(En, (async e => {
          const {topic: t, id: r} = Ut(e.target);
          if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, Wt("EXPIRED"), !0);
          t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
            topic: t
          })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
            id: r
          }));
        }));
      }
      isValidPairingTopic(e) {
        if (!Qt(e, !1)) {
          const {message: t} = Wt("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
          throw new Error(t);
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
          const {message: t} = Wt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
          throw new Error(t);
        }
        if (Lt(this.client.core.pairing.pairings.get(e).expiry)) {
          const {message: t} = Wt("EXPIRED", `pairing topic: ${e}`);
          throw new Error(t);
        }
      }
      async isValidSessionTopic(e) {
        if (!Qt(e, !1)) {
          const {message: t} = Wt("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
          throw new Error(t);
        }
        if (!this.client.session.keys.includes(e)) {
          const {message: t} = Wt("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
          throw new Error(t);
        }
        if (Lt(this.client.session.get(e).expiry)) {
          await this.deleteSession(e);
          const {message: t} = Wt("EXPIRED", `session topic: ${e}`);
          throw new Error(t);
        }
      }
      async isValidSessionOrPairingTopic(e) {
        if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e); else {
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            if (Qt(e, !1)) {
              const {message: t} = Wt("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
              throw new Error(t);
            }
            {
              const {message: t} = Wt("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
              throw new Error(t);
            }
          }
          this.isValidPairingTopic(e);
        }
      }
      async isValidProposalId(e) {
        if (!function(e) {
          return "number" == typeof e;
        }(e)) {
          const {message: t} = Wt("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
          throw new Error(t);
        }
        if (!this.client.proposal.keys.includes(e)) {
          const {message: t} = Wt("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
          throw new Error(t);
        }
        if (Lt(this.client.proposal.get(e).expiry)) {
          await this.deleteProposal(e);
          const {message: t} = Wt("EXPIRED", `proposal id: ${e}`);
          throw new Error(t);
        }
      }
    }
    class Rs extends Xn {
      constructor(e, t) {
        super(e, t, "proposal", us), this.core = e, this.logger = t;
      }
    }
    class Ps extends Xn {
      constructor(e, t) {
        super(e, t, "session", us), this.core = e, this.logger = t;
      }
    }
    class Ns extends Xn {
      constructor(e, t) {
        super(e, t, "request", us), this.core = e, this.logger = t;
      }
    }
    class xs extends class {
      constructor(e) {
        this.opts = e, this.protocol = "wc", this.version = 2;
      }
    } {
      constructor(e) {
        super(e), this.protocol = "wc", this.version = 2, this.name = ls, this.events = new v.EventEmitter, this.on = (e, t) => this.events.on(e, t), 
        this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), 
        this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
          try {
            return await this.engine.connect(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.pair = async e => {
          try {
            return await this.engine.pair(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.approve = async e => {
          try {
            return await this.engine.approve(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.reject = async e => {
          try {
            return await this.engine.reject(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.update = async e => {
          try {
            return await this.engine.update(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.extend = async e => {
          try {
            return await this.engine.extend(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.request = async e => {
          try {
            return await this.engine.request(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.respond = async e => {
          try {
            return await this.engine.respond(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.ping = async e => {
          try {
            return await this.engine.ping(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.emit = async e => {
          try {
            return await this.engine.emit(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.disconnect = async e => {
          try {
            return await this.engine.disconnect(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.find = e => {
          try {
            return this.engine.find(e);
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.getPendingSessionRequests = () => {
          try {
            return this.engine.getPendingSessionRequests();
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.name = e?.name || ls, this.metadata = e?.metadata || function() {
          return (0, Ye.D)() || {
            name: "",
            description: "",
            url: "",
            icons: [ "" ]
          };
        }();
        const t = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : y()((0, _.getDefaultLoggerOptions)({
          level: e?.logger || ps
        }));
        this.core = e?.core || new cs(e), this.logger = (0, _.generateChildLogger)(t, this.name), this.session = new Ps(this.core, this.logger), 
        this.proposal = new Rs(this.core, this.logger), this.pendingRequest = new Ns(this.core, this.logger), this.engine = new Is(this);
      }
      static async init(e) {
        const t = new xs(e);
        return await t.initialize(), t;
      }
      get context() {
        return (0, _.getLoggerContext)(this.logger);
      }
      get pairing() {
        return this.core.pairing.pairings;
      }
      async initialize() {
        this.logger.trace("Initialized");
        try {
          await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), 
          this.logger.info("SignClient Initialization Success");
        } catch (S) {
          throw this.logger.info("SignClient Initialization Failure"), this.logger.error(S.message), S;
        }
      }
    }
    r(2456);
    r(3971);
    r(111);
    Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    const Ts = {
      INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
      },
      INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
      },
      INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
      },
      INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
      },
      INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
      },
      UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
      },
      UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
      },
      UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
      },
      UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
      },
      USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
      },
      USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
      },
      USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
      },
      USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
      },
      UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
      },
      UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
      },
      UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
      },
      UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
      },
      UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
      },
      USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
      },
      SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
      },
      WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
      }
    };
    function As(e, t) {
      const {message: r, code: i} = Ts[e];
      return {
        message: t ? `${r} ${t}` : r,
        code: i
      };
    }
    function Us(e, t) {
      return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t));
    }
    var js = r(3421);
    var Ls = r.n(js);
    function Cs(e) {
      return "string" == typeof e ? e : JSON.stringify(e);
    }
    const Ms = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST"
    };
    class Ds {
      constructor(e) {
        if (this.url = e, this.events = new v.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, fr.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
        this.url = e;
      }
      get connected() {
        return this.isAvailable;
      }
      get connecting() {
        return this.registering;
      }
      on(e, t) {
        this.events.on(e, t);
      }
      once(e, t) {
        this.events.once(e, t);
      }
      off(e, t) {
        this.events.off(e, t);
      }
      removeListener(e, t) {
        this.events.removeListener(e, t);
      }
      async open(e = this.url) {
        await this.register(e);
      }
      async close() {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose();
      }
      async send(e, t) {
        this.isAvailable || await this.register();
        try {
          const t = Cs(e);
          const r = await Ls()(this.url, Object.assign(Object.assign({}, Ms), {
            body: t
          }));
          const i = await r.json();
          this.onPayload({
            data: i
          });
        } catch (r) {
          this.onError(e.id, r);
        }
      }
      async register(e = this.url) {
        if (!(0, fr.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
        if (this.registering) {
          const e = this.events.getMaxListeners();
          return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), 
          new Promise(((e, t) => {
            this.events.once("register_error", (e => {
              this.resetMaxListeners(), t(e);
            })), this.events.once("open", (() => {
              if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(new Error("HTTP connection is missing or invalid"));
              e();
            }));
          }));
        }
        this.url = e, this.registering = !0;
        try {
          const t = Cs({
            id: 1,
            jsonrpc: "2.0",
            method: "test",
            params: []
          });
          await Ls()(e, Object.assign(Object.assign({}, Ms), {
            body: t
          })), this.onOpen();
        } catch (t) {
          const e = this.parseError(t);
          throw this.events.emit("register_error", e), this.onClose(), e;
        }
      }
      onOpen() {
        this.isAvailable = !0, this.registering = !1, this.events.emit("open");
      }
      onClose() {
        this.isAvailable = !1, this.registering = !1, this.events.emit("close");
      }
      onPayload(e) {
        if (void 0 === e.data) return;
        const t = "string" == typeof e.data ? function(e) {
          if ("string" != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
          try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
        }(e.data) : e.data;
        this.events.emit("payload", t);
      }
      onError(e, t) {
        const r = this.parseError(t);
        const i = r.message || r.toString();
        const n = (0, fr.formatJsonRpcError)(e, i);
        this.events.emit("payload", n);
      }
      parseError(e, t = this.url) {
        return (0, fr.parseConnectionError)(e, t, "HTTP");
      }
      resetMaxListeners() {
        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
      }
    }
    const ks = Ds;
    const zs = "error", qs = "wc@2:universal_provider:", $s = "default_chain_changed";
    function Hs(e, t, r) {
      let i;
      const n = Vs(e);
      return t.rpcMap && (i = t.rpcMap[n]), i || (i = `https://rpc.walletconnect.com/v1?chainId=eip155:${n}&projectId=${r}`), 
      i;
    }
    function Vs(e) {
      return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e);
    }
    const Js = (e, t) => {
      const r = i => {
        i.request !== t.request || i.topic !== t.topic || (e.events.removeListener("session_request_sent", r), function() {
          if (typeof window < "u") try {
            const e = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
            if (e) {
              const t = JSON.parse(e);
              window.open(t.href, "_self", "noreferrer noopener");
            }
          } catch (e) {
            console.error(e);
          }
        }());
      };
      e.on("session_request_sent", r);
    };
    class Ks {
      constructor(e) {
        this.name = "eip155", this.namespace = e.namespace, this.client = e.client, this.events = e.events, this.httpProviders = this.createHttpProviders(), 
        this.chainId = parseInt(this.getDefaultChain());
      }
      async request(e) {
        var t;
        switch (e.request.method) {
         case "eth_requestAccounts":
         case "eth_accounts":
          return this.getAccounts();

         case "wallet_switchEthereumChain":
          return this.handleSwitchChain(e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0"), null;

         case "eth_chainId":
          return parseInt(this.getDefaultChain());
        }
        return this.namespace.methods.includes(e.request.method) ? (Js(this.client, e), await this.client.request(e)) : this.getHttpProvider().request(e.request);
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e);
      }
      setDefaultChain(e, t) {
        const r = Vs(e);
        if (!this.httpProviders[r]) {
          const e = t || Hs(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
          if (!e) throw new Error(`No RPC url provided for chainId: ${r}`);
          this.setHttpProvider(r, e);
        }
        this.chainId = r, this.events.emit($s, `${this.name}:${r}`);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1];
      }
      createHttpProvider(e, t) {
        const r = t || Hs(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new dr(new Ds(r));
      }
      setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r);
      }
      createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
          const r = Vs(t);
          e[r] = this.createHttpProvider(r);
        })), e;
      }
      getAccounts() {
        const e = this.namespace.accounts;
        return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || [];
      }
      getHttpProvider() {
        const e = this.chainId, t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t;
      }
      handleSwitchChain(e) {
        const t = parseInt(e, 16);
        (function(e, t) {
          if (!t.includes(e)) throw new Error(`Chain '${e}' not approved. Please use one of the following: ${t.toString()}`);
        })(`${this.name}:${t}`, this.namespace.chains), this.setDefaultChain(`${t}`);
      }
    }
    class Fs {
      constructor(e) {
        this.name = "solana", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? (Js(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
      }
      setDefaultChain(e, t) {
        if (!this.httpProviders[e]) {
          const r = t || Hs(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          this.setHttpProvider(e, r);
        }
        this.chainId = e, this.events.emit($s, `${this.name}:${this.chainId}`);
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1];
      }
      getAccounts() {
        const e = this.namespace.accounts;
        return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || [];
      }
      createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
          e[t] = this.createHttpProvider(t);
        })), e;
      }
      getHttpProvider() {
        const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t;
      }
      setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r);
      }
      createHttpProvider(e, t) {
        const r = t || Hs(e, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new dr(new ks(r));
      }
    }
    class Bs {
      constructor(e) {
        this.name = "cosmos", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1];
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? (Js(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
      }
      setDefaultChain(e, t) {
        if (this.chainId = e, !this.httpProviders[e]) {
          const r = t || Hs(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          this.setHttpProvider(e, r);
        }
        this.events.emit($s, `${this.name}:${this.chainId}`);
      }
      getAccounts() {
        const e = this.namespace.accounts;
        return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || [];
      }
      createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
          e[t] = this.createHttpProvider(t);
        })), e;
      }
      getHttpProvider() {
        const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t;
      }
      setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r);
      }
      createHttpProvider(e, t) {
        const r = t || Hs(e, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new dr(new ks(r));
      }
    }
    class Ws {
      constructor(e) {
        this.name = "cip34", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1];
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method) ? (Js(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
      }
      setDefaultChain(e, t) {
        if (this.chainId = e, !this.httpProviders[e]) {
          const r = t || Hs(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          this.setHttpProvider(e, r);
        }
        this.events.emit($s, `${this.name}:${this.chainId}`);
      }
      getAccounts() {
        const e = this.namespace.accounts;
        return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || [];
      }
      createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
          e[t] = this.createHttpProvider(t);
        })), e;
      }
      getHttpProvider() {
        const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t;
      }
      setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r);
      }
      createHttpProvider(e, t) {
        const r = t || Hs(e, this.namespace);
        return typeof r > "u" ? void 0 : new dr(new ks(r));
      }
    }
    var Gs = Object.defineProperty, Ys = Object.defineProperties, Xs = Object.getOwnPropertyDescriptors, Zs = Object.getOwnPropertySymbols, Qs = Object.prototype.hasOwnProperty, eo = Object.prototype.propertyIsEnumerable, to = (e, t, r) => t in e ? Gs(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : e[t] = r, ro = (e, t) => {
      for (var r in t || (t = {})) Qs.call(t, r) && to(e, r, t[r]);
      if (Zs) for (var r of Zs(t)) eo.call(t, r) && to(e, r, t[r]);
      return e;
    }, io = (e, t) => Ys(e, Xs(t));
    class no {
      constructor(e) {
        this.events = new (m()), this.rpcProviders = {}, this.providerOpts = e, this.logger = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : y()((0, 
        _.getDefaultLoggerOptions)({
          level: e?.logger || zs
        }));
      }
      static async init(e) {
        const t = new no(e);
        return await t.initialize(), t;
      }
      async request(e, t) {
        const [r, i] = this.validateChain(t);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(r).request({
          request: ro({}, e),
          chainId: `${r}:${i}`,
          topic: this.session.topic
        });
      }
      sendAsync(e, t, r) {
        this.request(e, r).then((e => t(null, e))).catch((e => t(e, void 0)));
      }
      async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties
        }), await this.requestAccounts();
      }
      async disconnect() {
        var e;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
          topic: null == (e = this.session) ? void 0 : e.topic,
          reason: As("USER_DISCONNECTED")
        }), await this.cleanup();
      }
      async connect(e) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
      }
      on(e, t) {
        this.events.on(e, t);
      }
      once(e, t) {
        this.events.once(e, t);
      }
      removeListener(e, t) {
        this.events.removeListener(e, t);
      }
      off(e, t) {
        this.events.off(e, t);
      }
      get isWalletConnect() {
        return !0;
      }
      async pair(e) {
        const {uri: t, approval: r} = await this.client.connect({
          pairingTopic: e,
          requiredNamespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties
        });
        return t && (this.uri = t, this.events.emit("display_uri", t)), this.session = await r(), this.createProviders(), this.onConnect(), 
        this.session;
      }
      setDefaultChain(e, t) {
        try {
          const [r, i] = this.validateChain(e);
          this.getProvider(r).setDefaultChain(i, t);
        } catch (r) {
          if (!/Please call connect/.test(r.message)) throw r;
        }
      }
      async cleanupPendingPairings(e = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const t = this.client.pairing.getAll();
        if (Us(t)) {
          for (const r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
          this.logger.info(`Inactive pairings cleared: ${t.length}`);
        }
      }
      async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, 
        this.client.session.length) {
          const e = this.client.session.keys.length - 1;
          this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders();
        }
      }
      async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
      }
      async createClient() {
        this.client = this.providerOpts.client || await xs.init({
          logger: this.providerOpts.logger || zs,
          relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
          projectId: this.providerOpts.projectId,
          metadata: this.providerOpts.metadata,
          storageOptions: this.providerOpts.storageOptions,
          name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized");
      }
      createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        Object.keys(this.namespaces).forEach((e => {
          var t, r, i;
          const n = (null == (t = this.session) ? void 0 : t.namespaces[e].accounts) || [], s = function(e) {
            return e.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`));
          }(n), o = io(ro({}, Object.assign(this.namespaces[e], null != (i = null == (r = this.optionalNamespaces) ? void 0 : r[e]) ? i : {})), {
            accounts: n,
            chains: s
          });
          switch (e) {
           case "eip155":
            this.rpcProviders[e] = new Ks({
              client: this.client,
              namespace: o,
              events: this.events
            });
            break;

           case "solana":
            this.rpcProviders[e] = new Fs({
              client: this.client,
              namespace: o,
              events: this.events
            });
            break;

           case "cosmos":
            this.rpcProviders[e] = new Bs({
              client: this.client,
              namespace: o,
              events: this.events
            });
            break;

           case "polkadot":
            break;

           case "cip34":
            this.rpcProviders[e] = new Ws({
              client: this.client,
              namespace: o,
              events: this.events
            });
          }
        }));
      }
      registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", (e => {
          this.events.emit("session_ping", e);
        })), this.client.on("session_event", (e => {
          const {params: t} = e, {event: r} = t;
          "accountsChanged" === r.name ? this.events.emit("accountsChanged", r.data) : "chainChanged" === r.name ? this.onChainChanged(t.chainId) : this.events.emit(r.name, r.data), 
          this.events.emit("session_event", e);
        })), this.client.on("session_update", (({topic: e, params: t}) => {
          var r;
          const {namespaces: i} = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
          this.session = io(ro({}, n), {
            namespaces: i
          }), this.onSessionUpdate(), this.events.emit("session_update", {
            topic: e,
            params: t
          });
        })), this.client.on("session_delete", (async e => {
          await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", io(ro({}, As("USER_DISCONNECTED")), {
            data: e.topic
          }));
        })), this.on($s, (e => {
          this.onChainChanged(e, !0);
        }));
      }
      getProvider(e) {
        if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
        return this.rpcProviders[e];
      }
      onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((e => {
          var t;
          this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e]);
        }));
      }
      setNamespaces(e) {
        const {namespaces: t, optionalNamespaces: r, sessionProperties: i} = e;
        if (!t || !Object.keys(t).length) throw new Error("Namespaces must be not empty");
        this.namespaces = t, this.optionalNamespaces = r, this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r);
      }
      validateChain(e) {
        const [t, r] = e?.split(":") || [ "", "" ];
        if (t && !Object.keys(this.namespaces).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && r) return [ t, r ];
        const i = Object.keys(this.namespaces)[0];
        return [ i, this.rpcProviders[i].getDefaultChain() ];
      }
      async requestAccounts() {
        const [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts();
      }
      onChainChanged(e, t = !1) {
        const [r, i] = this.validateChain(e);
        t || this.getProvider(r).setDefaultChain(i), this.namespaces[r].defaultChain = i, this.persist("namespaces", this.namespaces), 
        this.events.emit("chainChanged", i);
      }
      onConnect() {
        this.events.emit("connect", {
          session: this.session
        });
      }
      async cleanup() {
        this.session = void 0, await this.cleanupPendingPairings({
          deletePairings: !0
        });
      }
      persist(e, t) {
        this.client.core.storage.setItem(`${qs}/${e}`, t);
      }
      async getFromStore(e) {
        return await this.client.core.storage.getItem(`${qs}/${e}`);
      }
    }
    var so = function(e, t, r, i) {
      return new (r || (r = Promise))((function(n, s) {
        function o(e) {
          try {
            c(i.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(i.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? n(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(o, a);
        }
        c((i = i.apply(e, t || [])).next());
      }));
    };
    var oo = function(e, t) {
      var r, i, n, s, o = {
        label: 0,
        sent: function() {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
      }), s;
      function a(a) {
        return function(c) {
          return function(a) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;s && (s = 0, a[0] && (o = 0)), o; ) try {
              if (r = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, a[1])).done) return n;
              switch (i = 0, n && (a = [ 2 & a[0], n.value ]), a[0]) {
               case 0:
               case 1:
                n = a;
                break;

               case 4:
                return o.label++, {
                  value: a[1],
                  done: !1
                };

               case 5:
                o.label++, i = a[1], a = [ 0 ];
                continue;

               case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                  o = 0;
                  continue;
                }
                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                  o.label = a[1];
                  break;
                }
                if (6 === a[0] && o.label < n[1]) {
                  o.label = n[1], n = a;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(a);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              a = t.call(e, o);
            } catch (c) {
              a = [ 6, c ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([ a, c ]);
        };
      }
    };
    var ao = {
      1: 'https://ethereum.publicnode.com',
      5: 'https://eth-goerli.g.alchemy.com/v2/yVhq9zPJorAWsw-F87fEabSUl7cCU6z4',
      11155111: 'https://sepolia.infura.io/v3/9f79b2f9274344af90b8d4e244b580ef',
      137: 'https://polygon-rpc.com/',
      80001: 'https://polygon-mumbai.g.alchemy.com/v2/rVI6pOV4irVsrw20cJxc1fxK_1cSeiY0',
      56: 'https://bsc-dataseed.binance.org/',
      97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      43114: 'https://api.avax.network/ext/bc/C/rpc',
      43113: 'https://api.avax-test.network/ext/bc/C/rpc',
      250: 'https://rpc.fantom.network/',
      25: 'https://evm-cronos.crypto.org',
      338: 'https://evm-t3.cronos.org',
      42161: 'https://arb1.arbitrum.io/rpc',
      421613: 'https://arb-goerli.g.alchemy.com/v2/nFrflomLgsQQL5NWjGileAVqIGGxZWce',
      10: 'https://mainnet.optimism.io'
    };
    var co = [ 'eip155:1', 'eip155:137', 'eip155:250', 'eip155:25', 'eip155:42161', 'eip155:10' ];
    var ho = function() {
      return so(void 0, void 0, void 0, (function() {
        return oo(this, (function(e) {
          switch (e.label) {
           case 0:
            return [ 4, no.init({
              projectId: '2ec7ead81da1226703ad789c0b2f7b30',
              logger: 'debug',
              relayUrl: 'wss://relay.walletconnect.com'
            }) ];

           case 1:
            return [ 2, e.sent() ];
          }
        }));
      }));
    };
  },
  6313: (e, t, r) => {
    "use strict";
    function i() {
      return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {};
    }
    function n() {
      const e = i();
      return e.subtle || e.webkitSubtle;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = i, t.getSubtleCrypto = n, 
    t.isBrowserCryptoAvailable = function() {
      return !!i() && !!n();
    };
  },
  5084: (e, t) => {
    "use strict";
    function r() {
      return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product;
    }
    function i() {
      return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = r, t.isNode = i, t.isBrowser = function() {
      return !r() && !i();
    };
  },
  8798: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const i = r(8040);
    i.__exportStar(r(6313), t), i.__exportStar(r(5084), t);
  },
  8040: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      __assign: () => s,
      __asyncDelegator: () => w,
      __asyncGenerator: () => b,
      __asyncValues: () => _,
      __await: () => m,
      __awaiter: () => u,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => R,
      __createBinding: () => p,
      __decorate: () => a,
      __exportStar: () => f,
      __extends: () => n,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => h,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var i = function(e, t) {
      return i = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      }, i(e, t);
    };
    function n(e, t) {
      function r() {
        this.constructor = e;
      }
      i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(e) {
        for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }, s.apply(this, arguments);
    };
    function o(e, t) {
      var r = {};
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
      }
      return r;
    }
    function a(e, t, r, i) {
      var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
      return s > 3 && o && Object.defineProperty(t, r, o), o;
    }
    function c(e, t) {
      return function(r, i) {
        t(r, i, e);
      };
    }
    function h(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }
    function u(e, t, r, i) {
      return new (r || (r = Promise))((function(n, s) {
        function o(e) {
          try {
            c(i.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(i.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? n(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(o, a);
        }
        c((i = i.apply(e, t || [])).next());
      }));
    }
    function l(e, t) {
      var r, i, n, s, o = {
        label: 0,
        sent: function() {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
      }), s;
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function p(e, t, r, i) {
      void 0 === i && (i = r), e[i] = t[r];
    }
    function f(e, t) {
      for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
    }
    function d(e) {
      var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length) return {
        next: function() {
          return e && i >= e.length && (e = void 0), {
            value: e && e[i++],
            done: !e
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var i, n, s = r.call(e), o = [];
      try {
        for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
      } catch (a) {
        n = {
          error: a
        };
      } finally {
        try {
          i && !i.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    function y() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
      return e;
    }
    function v() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      var i = Array(e), n = 0;
      for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
      return i;
    }
    function m(e) {
      return this instanceof m ? (this.v = e, this) : new m(e);
    }
    function b(e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var i, n = r.apply(e, t || []), s = [];
      return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function o(e) {
        n[e] && (i[e] = function(t) {
          return new Promise((function(r, i) {
            s.push([ e, t, r, i ]) > 1 || a(e, t);
          }));
        });
      }
      function a(e, t) {
        try {
          !function(e) {
            e.value instanceof m ? Promise.resolve(e.value.v).then(c, h) : u(s[0][2], e);
          }(n[e](t));
        } catch (r) {
          u(s[0][3], r);
        }
      }
      function c(e) {
        a("next", e);
      }
      function h(e) {
        a("throw", e);
      }
      function u(e, t) {
        e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function w(e) {
      var t, r;
      return t = {}, i("next"), i("throw", (function(e) {
        throw e;
      })), i("return"), t[Symbol.iterator] = function() {
        return this;
      }, t;
      function i(i, n) {
        t[i] = e[i] ? function(t) {
          return (r = !r) ? {
            value: m(e[i](t)),
            done: "return" === i
          } : n ? n(t) : t;
        } : n;
      }
    }
    function _(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, r = e[Symbol.asyncIterator];
      return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
        return this;
      }, t);
      function i(r) {
        t[r] = e[r] && function(t) {
          return new Promise((function(i, n) {
            (function(e, t, r, i) {
              Promise.resolve(i).then((function(t) {
                e({
                  value: t,
                  done: r
                });
              }), t);
            })(i, n, (t = e[r](t)).done, t.value);
          }));
        };
      }
    }
    function E(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e;
    }
    function S(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t.default = e, t;
    }
    function O(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function I(e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    }
    function R(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, r), r;
    }
  },
  5656: (e, t, r) => {
    "use strict";
    r.d(t, {
      q: () => i
    });
    class i {}
  },
  8195: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      IEvents: () => i.q
    });
    var i = r(5656);
  },
  8753: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
    const i = r(1246);
    t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
      pulse: "heartbeat_pulse"
    };
  },
  6415: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    r(2621).__exportStar(r(8753), t);
  },
  9694: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.HeartBeat = void 0;
    const i = r(2621);
    const n = r(5939);
    const s = r(1246);
    const o = r(3566);
    const a = r(6415);
    class c extends o.IHeartBeat {
      constructor(e) {
        super(e), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL;
      }
      static init(e) {
        return i.__awaiter(this, void 0, void 0, (function*() {
          const t = new c(e);
          return yield t.init(), t;
        }));
      }
      init() {
        return i.__awaiter(this, void 0, void 0, (function*() {
          yield this.initialize();
        }));
      }
      stop() {
        clearInterval(this.intervalRef);
      }
      on(e, t) {
        this.events.on(e, t);
      }
      once(e, t) {
        this.events.once(e, t);
      }
      off(e, t) {
        this.events.off(e, t);
      }
      removeListener(e, t) {
        this.events.removeListener(e, t);
      }
      initialize() {
        return i.__awaiter(this, void 0, void 0, (function*() {
          this.intervalRef = setInterval((() => this.pulse()), s.toMiliseconds(this.interval));
        }));
      }
      pulse() {
        this.events.emit(a.HEARTBEAT_EVENTS.pulse);
      }
    }
    t.HeartBeat = c;
  },
  1570: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const i = r(2621);
    i.__exportStar(r(9694), t), i.__exportStar(r(3566), t), i.__exportStar(r(6415), t);
  },
  5172: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IHeartBeat = void 0;
    const i = r(8195);
    class n extends i.IEvents {
      constructor(e) {
        super();
      }
    }
    t.IHeartBeat = n;
  },
  3566: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    r(2621).__exportStar(r(5172), t);
  },
  2621: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      __assign: () => s,
      __asyncDelegator: () => w,
      __asyncGenerator: () => b,
      __asyncValues: () => _,
      __await: () => m,
      __awaiter: () => u,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => R,
      __createBinding: () => p,
      __decorate: () => a,
      __exportStar: () => f,
      __extends: () => n,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => h,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var i = function(e, t) {
      return i = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      }, i(e, t);
    };
    function n(e, t) {
      function r() {
        this.constructor = e;
      }
      i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(e) {
        for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }, s.apply(this, arguments);
    };
    function o(e, t) {
      var r = {};
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
      }
      return r;
    }
    function a(e, t, r, i) {
      var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
      return s > 3 && o && Object.defineProperty(t, r, o), o;
    }
    function c(e, t) {
      return function(r, i) {
        t(r, i, e);
      };
    }
    function h(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }
    function u(e, t, r, i) {
      return new (r || (r = Promise))((function(n, s) {
        function o(e) {
          try {
            c(i.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(i.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? n(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(o, a);
        }
        c((i = i.apply(e, t || [])).next());
      }));
    }
    function l(e, t) {
      var r, i, n, s, o = {
        label: 0,
        sent: function() {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
      }), s;
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function p(e, t, r, i) {
      void 0 === i && (i = r), e[i] = t[r];
    }
    function f(e, t) {
      for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
    }
    function d(e) {
      var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length) return {
        next: function() {
          return e && i >= e.length && (e = void 0), {
            value: e && e[i++],
            done: !e
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var i, n, s = r.call(e), o = [];
      try {
        for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
      } catch (a) {
        n = {
          error: a
        };
      } finally {
        try {
          i && !i.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    function y() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
      return e;
    }
    function v() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      var i = Array(e), n = 0;
      for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
      return i;
    }
    function m(e) {
      return this instanceof m ? (this.v = e, this) : new m(e);
    }
    function b(e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var i, n = r.apply(e, t || []), s = [];
      return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function o(e) {
        n[e] && (i[e] = function(t) {
          return new Promise((function(r, i) {
            s.push([ e, t, r, i ]) > 1 || a(e, t);
          }));
        });
      }
      function a(e, t) {
        try {
          !function(e) {
            e.value instanceof m ? Promise.resolve(e.value.v).then(c, h) : u(s[0][2], e);
          }(n[e](t));
        } catch (r) {
          u(s[0][3], r);
        }
      }
      function c(e) {
        a("next", e);
      }
      function h(e) {
        a("throw", e);
      }
      function u(e, t) {
        e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function w(e) {
      var t, r;
      return t = {}, i("next"), i("throw", (function(e) {
        throw e;
      })), i("return"), t[Symbol.iterator] = function() {
        return this;
      }, t;
      function i(i, n) {
        t[i] = e[i] ? function(t) {
          return (r = !r) ? {
            value: m(e[i](t)),
            done: "return" === i
          } : n ? n(t) : t;
        } : n;
      }
    }
    function _(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, r = e[Symbol.asyncIterator];
      return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
        return this;
      }, t);
      function i(r) {
        t[r] = e[r] && function(t) {
          return new Promise((function(i, n) {
            (function(e, t, r, i) {
              Promise.resolve(i).then((function(t) {
                e({
                  value: t,
                  done: r
                });
              }), t);
            })(i, n, (t = e[r](t)).done, t.value);
          }));
        };
      }
    }
    function E(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e;
    }
    function S(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t.default = e, t;
    }
    function O(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function I(e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    }
    function R(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, r), r;
    }
  },
  3421: function(e, t) {
    var r = 'undefined' != typeof self ? self : this;
    var i = function() {
      function e() {
        this.fetch = !1, this.DOMException = r.DOMException;
      }
      return e.prototype = r, new e;
    }();
    !function(e) {
      !function(t) {
        var r = 'URLSearchParams' in e, i = 'Symbol' in e && 'iterator' in Symbol, n = 'FileReader' in e && 'Blob' in e && function() {
          try {
            return new Blob, !0;
          } catch (e) {
            return !1;
          }
        }(), s = 'FormData' in e, o = 'ArrayBuffer' in e;
        if (o) {
          var a = [ '[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]' ];
          var c = ArrayBuffer.isView || function(e) {
            return e && a.indexOf(Object.prototype.toString.call(e)) > -1;
          };
        }
        function h(e) {
          if ('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError('Invalid character in header field name');
          return e.toLowerCase();
        }
        function u(e) {
          return 'string' != typeof e && (e = String(e)), e;
        }
        function l(e) {
          var t = {
            next: function() {
              var t = e.shift();
              return {
                done: void 0 === t,
                value: t
              };
            }
          };
          return i && (t[Symbol.iterator] = function() {
            return t;
          }), t;
        }
        function p(e) {
          this.map = {}, e instanceof p ? e.forEach((function(e, t) {
            this.append(t, e);
          }), this) : Array.isArray(e) ? e.forEach((function(e) {
            this.append(e[0], e[1]);
          }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
            this.append(t, e[t]);
          }), this);
        }
        function f(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
          e.bodyUsed = !0;
        }
        function d(e) {
          return new Promise((function(t, r) {
            e.onload = function() {
              t(e.result);
            }, e.onerror = function() {
              r(e.error);
            };
          }));
        }
        function g(e) {
          var t = new FileReader;
          var r = d(t);
          return t.readAsArrayBuffer(e), r;
        }
        function y(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function v() {
          return this.bodyUsed = !1, this._initBody = function(e) {
            this._bodyInit = e, e ? 'string' == typeof e ? this._bodyText = e : n && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : o && n && function(e) {
              return e && DataView.prototype.isPrototypeOf(e);
            }(e) ? (this._bodyArrayBuffer = y(e.buffer), this._bodyInit = new Blob([ this._bodyArrayBuffer ])) : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = y(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = '', 
            this.headers.get('content-type') || ('string' == typeof e ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
          }, n && (this.blob = function() {
            var e = f(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
            if (this._bodyFormData) throw new Error('could not read FormData body as blob');
            return Promise.resolve(new Blob([ this._bodyText ]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g);
          }), this.text = function() {
            var e = f(this);
            if (e) return e;
            if (this._bodyBlob) return function(e) {
              var t = new FileReader;
              var r = d(t);
              return t.readAsText(e), r;
            }(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
              var t = new Uint8Array(e);
              var r = new Array(t.length);
              for (var i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
              return r.join('');
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error('could not read FormData body as text');
            return Promise.resolve(this._bodyText);
          }, s && (this.formData = function() {
            return this.text().then(w);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        p.prototype.append = function(e, t) {
          e = h(e), t = u(t);
          var r = this.map[e];
          this.map[e] = r ? r + ', ' + t : t;
        }, p.prototype.delete = function(e) {
          delete this.map[h(e)];
        }, p.prototype.get = function(e) {
          return e = h(e), this.has(e) ? this.map[e] : null;
        }, p.prototype.has = function(e) {
          return this.map.hasOwnProperty(h(e));
        }, p.prototype.set = function(e, t) {
          this.map[h(e)] = u(t);
        }, p.prototype.forEach = function(e, t) {
          for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
        }, p.prototype.keys = function() {
          var e = [];
          return this.forEach((function(t, r) {
            e.push(r);
          })), l(e);
        }, p.prototype.values = function() {
          var e = [];
          return this.forEach((function(t) {
            e.push(t);
          })), l(e);
        }, p.prototype.entries = function() {
          var e = [];
          return this.forEach((function(t, r) {
            e.push([ r, t ]);
          })), l(e);
        }, i && (p.prototype[Symbol.iterator] = p.prototype.entries);
        var m = [ 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT' ];
        function b(e, t) {
          var r = (t = t || {}).body;
          if (e instanceof b) {
            if (e.bodyUsed) throw new TypeError('Already read');
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, 
            this.mode = e.mode, this.signal = e.signal, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0);
          } else this.url = String(e);
          if (this.credentials = t.credentials || this.credentials || 'same-origin', !t.headers && this.headers || (this.headers = new p(t.headers)), 
          this.method = function(e) {
            var t = e.toUpperCase();
            return m.indexOf(t) > -1 ? t : e;
          }(t.method || this.method || 'GET'), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, 
          ('GET' === this.method || 'HEAD' === this.method) && r) throw new TypeError('Body not allowed for GET or HEAD requests');
          this._initBody(r);
        }
        function w(e) {
          var t = new FormData;
          return e.trim().split('&').forEach((function(e) {
            if (e) {
              var r = e.split('=');
              var i = r.shift().replace(/\+/g, ' ');
              var n = r.join('=').replace(/\+/g, ' ');
              t.append(decodeURIComponent(i), decodeURIComponent(n));
            }
          })), t;
        }
        function _(e) {
          var t = new p;
          return e.replace(/\r?\n[\t ]+/g, ' ').split(/\r?\n/).forEach((function(e) {
            var r = e.split(':');
            var i = r.shift().trim();
            if (i) {
              var n = r.join(':').trim();
              t.append(i, n);
            }
          })), t;
        }
        function E(e, t) {
          t || (t = {}), this.type = 'default', this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, 
          this.statusText = 'statusText' in t ? t.statusText : 'OK', this.headers = new p(t.headers), this.url = t.url || '', this._initBody(e);
        }
        b.prototype.clone = function() {
          return new b(this, {
            body: this._bodyInit
          });
        }, v.call(b.prototype), v.call(E.prototype), E.prototype.clone = function() {
          return new E(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url
          });
        }, E.error = function() {
          var e = new E(null, {
            status: 0,
            statusText: ''
          });
          return e.type = 'error', e;
        };
        var S = [ 301, 302, 303, 307, 308 ];
        E.redirect = function(e, t) {
          if (-1 === S.indexOf(t)) throw new RangeError('Invalid status code');
          return new E(null, {
            status: t,
            headers: {
              location: e
            }
          });
        }, t.DOMException = e.DOMException;
        try {
          new t.DOMException;
        } catch (I) {
          t.DOMException = function(e, t) {
            this.message = e, this.name = t;
            var r = Error(e);
            this.stack = r.stack;
          }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException;
        }
        function O(e, r) {
          return new Promise((function(i, s) {
            var o = new b(e, r);
            if (o.signal && o.signal.aborted) return s(new t.DOMException('Aborted', 'AbortError'));
            var a = new XMLHttpRequest;
            function c() {
              a.abort();
            }
            a.onload = function() {
              var e = {
                status: a.status,
                statusText: a.statusText,
                headers: _(a.getAllResponseHeaders() || '')
              };
              e.url = 'responseURL' in a ? a.responseURL : e.headers.get('X-Request-URL');
              var t = 'response' in a ? a.response : a.responseText;
              i(new E(t, e));
            }, a.onerror = function() {
              s(new TypeError('Network request failed'));
            }, a.ontimeout = function() {
              s(new TypeError('Network request failed'));
            }, a.onabort = function() {
              s(new t.DOMException('Aborted', 'AbortError'));
            }, a.open(o.method, o.url, !0), 'include' === o.credentials ? a.withCredentials = !0 : 'omit' === o.credentials && (a.withCredentials = !1), 
            'responseType' in a && n && (a.responseType = 'blob'), o.headers.forEach((function(e, t) {
              a.setRequestHeader(t, e);
            })), o.signal && (o.signal.addEventListener('abort', c), a.onreadystatechange = function() {
              4 === a.readyState && o.signal.removeEventListener('abort', c);
            }), a.send(void 0 === o._bodyInit ? null : o._bodyInit);
          }));
        }
        O.polyfill = !0, e.fetch || (e.fetch = O, e.Headers = p, e.Request = b, e.Response = E), t.Headers = p, t.Request = b, t.Response = E, 
        t.fetch = O, Object.defineProperty(t, '__esModule', {
          value: !0
        });
      }({});
    }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var n = i;
    (t = n.fetch).default = n.fetch, t.fetch = n.fetch, t.Headers = n.Headers, t.Request = n.Request, t.Response = n.Response, 
    e.exports = t;
  },
  3246: (e, t, r) => {
    "use strict";
    r.d(t, {
      IJsonRpcProvider: () => n.x0
    });
    var i = r(9475);
    r.o(i, "IJsonRpcProvider") && r.d(t, {
      IJsonRpcProvider: function() {
        return i.IJsonRpcProvider;
      }
    }), r.o(i, "isHttpUrl") && r.d(t, {
      isHttpUrl: function() {
        return i.isHttpUrl;
      }
    }), r.o(i, "isJsonRpcError") && r.d(t, {
      isJsonRpcError: function() {
        return i.isJsonRpcError;
      }
    }), r.o(i, "isJsonRpcRequest") && r.d(t, {
      isJsonRpcRequest: function() {
        return i.isJsonRpcRequest;
      }
    }), r.o(i, "isJsonRpcResponse") && r.d(t, {
      isJsonRpcResponse: function() {
        return i.isJsonRpcResponse;
      }
    }), r.o(i, "isJsonRpcResult") && r.d(t, {
      isJsonRpcResult: function() {
        return i.isJsonRpcResult;
      }
    }), r.o(i, "isLocalhostUrl") && r.d(t, {
      isLocalhostUrl: function() {
        return i.isLocalhostUrl;
      }
    }), r.o(i, "isReactNative") && r.d(t, {
      isReactNative: function() {
        return i.isReactNative;
      }
    }), r.o(i, "isWsUrl") && r.d(t, {
      isWsUrl: function() {
        return i.isWsUrl;
      }
    });
    var n = r(151);
    var s = r(2184);
    r.o(s, "isHttpUrl") && r.d(t, {
      isHttpUrl: function() {
        return s.isHttpUrl;
      }
    }), r.o(s, "isJsonRpcError") && r.d(t, {
      isJsonRpcError: function() {
        return s.isJsonRpcError;
      }
    }), r.o(s, "isJsonRpcRequest") && r.d(t, {
      isJsonRpcRequest: function() {
        return s.isJsonRpcRequest;
      }
    }), r.o(s, "isJsonRpcResponse") && r.d(t, {
      isJsonRpcResponse: function() {
        return s.isJsonRpcResponse;
      }
    }), r.o(s, "isJsonRpcResult") && r.d(t, {
      isJsonRpcResult: function() {
        return s.isJsonRpcResult;
      }
    }), r.o(s, "isLocalhostUrl") && r.d(t, {
      isLocalhostUrl: function() {
        return s.isLocalhostUrl;
      }
    }), r.o(s, "isReactNative") && r.d(t, {
      isReactNative: function() {
        return s.isReactNative;
      }
    }), r.o(s, "isWsUrl") && r.d(t, {
      isWsUrl: function() {
        return s.isWsUrl;
      }
    });
  },
  9475: () => {},
  151: (e, t, r) => {
    "use strict";
    r.d(t, {
      x0: () => i
    });
    class i extends class extends class {} {
      constructor() {
        super();
      }
    } {
      constructor(e) {
        super();
      }
    }
  },
  2184: () => {},
  8375: (e, t, r) => {
    "use strict";
    r.d(t, {
      CA: () => n,
      JV: () => a,
      O4: () => i,
      dQ: () => s,
      xK: () => o
    });
    const i = "INTERNAL_ERROR";
    const n = "SERVER_ERROR";
    const s = [ -32700, -32600, -32601, -32602, -32603 ];
    const o = {
      PARSE_ERROR: {
        code: -32700,
        message: "Parse error"
      },
      INVALID_REQUEST: {
        code: -32600,
        message: "Invalid Request"
      },
      METHOD_NOT_FOUND: {
        code: -32601,
        message: "Method not found"
      },
      INVALID_PARAMS: {
        code: -32602,
        message: "Invalid params"
      },
      [i]: {
        code: -32603,
        message: "Internal error"
      },
      [n]: {
        code: -32e3,
        message: "Server error"
      }
    };
    const a = n;
  },
  8845: (e, t, r) => {
    "use strict";
    var i = r(8798);
    r.o(i, "IJsonRpcProvider") && r.d(t, {
      IJsonRpcProvider: function() {
        return i.IJsonRpcProvider;
      }
    }), r.o(i, "formatJsonRpcError") && r.d(t, {
      formatJsonRpcError: function() {
        return i.formatJsonRpcError;
      }
    }), r.o(i, "formatJsonRpcRequest") && r.d(t, {
      formatJsonRpcRequest: function() {
        return i.formatJsonRpcRequest;
      }
    }), r.o(i, "formatJsonRpcResult") && r.d(t, {
      formatJsonRpcResult: function() {
        return i.formatJsonRpcResult;
      }
    }), r.o(i, "isHttpUrl") && r.d(t, {
      isHttpUrl: function() {
        return i.isHttpUrl;
      }
    }), r.o(i, "isJsonRpcError") && r.d(t, {
      isJsonRpcError: function() {
        return i.isJsonRpcError;
      }
    }), r.o(i, "isJsonRpcRequest") && r.d(t, {
      isJsonRpcRequest: function() {
        return i.isJsonRpcRequest;
      }
    }), r.o(i, "isJsonRpcResponse") && r.d(t, {
      isJsonRpcResponse: function() {
        return i.isJsonRpcResponse;
      }
    }), r.o(i, "isJsonRpcResult") && r.d(t, {
      isJsonRpcResult: function() {
        return i.isJsonRpcResult;
      }
    }), r.o(i, "isLocalhostUrl") && r.d(t, {
      isLocalhostUrl: function() {
        return i.isLocalhostUrl;
      }
    }), r.o(i, "isReactNative") && r.d(t, {
      isReactNative: function() {
        return i.isReactNative;
      }
    }), r.o(i, "isWsUrl") && r.d(t, {
      isWsUrl: function() {
        return i.isWsUrl;
      }
    });
  },
  2706: (e, t, r) => {
    "use strict";
    r.d(t, {
      CX: () => a,
      L2: () => o,
      by: () => s,
      i5: () => n
    });
    var i = r(8375);
    function n(e) {
      return i.dQ.includes(e);
    }
    function s(e) {
      return Object.keys(i.xK).includes(e) ? i.xK[e] : i.xK[i.JV];
    }
    function o(e) {
      const t = Object.values(i.xK).find((t => t.code === e));
      return t || i.xK[i.JV];
    }
    function a(e, t, r) {
      return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
    }
  },
  6976: (e, t, r) => {
    "use strict";
    r.d(t, {
      RI: () => c,
      sT: () => o,
      tm: () => a
    });
    var i = r(2706);
    var n = r(8375);
    function s() {
      return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3));
    }
    function o(e, t, r) {
      return {
        id: r || s(),
        jsonrpc: "2.0",
        method: e,
        params: t
      };
    }
    function a(e, t) {
      return {
        id: e,
        jsonrpc: "2.0",
        result: t
      };
    }
    function c(e, t, r) {
      return {
        id: e,
        jsonrpc: "2.0",
        error: h(t, r)
      };
    }
    function h(e, t) {
      return void 0 === e ? (0, i.by)(n.O4) : ("string" == typeof e && (e = Object.assign(Object.assign({}, (0, i.by)(n.CA)), {
        message: e
      })), void 0 !== t && (e.data = t), (0, i.i5)(e.code) && (e = (0, i.L2)(e.code)), e);
    }
  },
  2512: (e, t, r) => {
    "use strict";
    r.d(t, {
      formatJsonRpcError: () => s.RI,
      formatJsonRpcRequest: () => s.sT,
      formatJsonRpcResult: () => s.tm,
      isHttpUrl: () => a.jK,
      isJsonRpcError: () => c.jg,
      isJsonRpcRequest: () => c.DW,
      isJsonRpcResponse: () => c.u,
      isJsonRpcResult: () => c.k4,
      isLocalhostUrl: () => a.JF,
      isWsUrl: () => a.UZ,
      parseConnectionError: () => i.CX
    });
    r(8375);
    var i = r(2706);
    var n = r(8845);
    r.o(n, "IJsonRpcProvider") && r.d(t, {
      IJsonRpcProvider: function() {
        return n.IJsonRpcProvider;
      }
    }), r.o(n, "formatJsonRpcError") && r.d(t, {
      formatJsonRpcError: function() {
        return n.formatJsonRpcError;
      }
    }), r.o(n, "formatJsonRpcRequest") && r.d(t, {
      formatJsonRpcRequest: function() {
        return n.formatJsonRpcRequest;
      }
    }), r.o(n, "formatJsonRpcResult") && r.d(t, {
      formatJsonRpcResult: function() {
        return n.formatJsonRpcResult;
      }
    }), r.o(n, "isHttpUrl") && r.d(t, {
      isHttpUrl: function() {
        return n.isHttpUrl;
      }
    }), r.o(n, "isJsonRpcError") && r.d(t, {
      isJsonRpcError: function() {
        return n.isJsonRpcError;
      }
    }), r.o(n, "isJsonRpcRequest") && r.d(t, {
      isJsonRpcRequest: function() {
        return n.isJsonRpcRequest;
      }
    }), r.o(n, "isJsonRpcResponse") && r.d(t, {
      isJsonRpcResponse: function() {
        return n.isJsonRpcResponse;
      }
    }), r.o(n, "isJsonRpcResult") && r.d(t, {
      isJsonRpcResult: function() {
        return n.isJsonRpcResult;
      }
    }), r.o(n, "isLocalhostUrl") && r.d(t, {
      isLocalhostUrl: function() {
        return n.isLocalhostUrl;
      }
    }), r.o(n, "isReactNative") && r.d(t, {
      isReactNative: function() {
        return n.isReactNative;
      }
    }), r.o(n, "isWsUrl") && r.d(t, {
      isWsUrl: function() {
        return n.isWsUrl;
      }
    });
    var s = r(6976);
    var o = r(9663);
    r.o(o, "IJsonRpcProvider") && r.d(t, {
      IJsonRpcProvider: function() {
        return o.IJsonRpcProvider;
      }
    }), r.o(o, "isHttpUrl") && r.d(t, {
      isHttpUrl: function() {
        return o.isHttpUrl;
      }
    }), r.o(o, "isJsonRpcError") && r.d(t, {
      isJsonRpcError: function() {
        return o.isJsonRpcError;
      }
    }), r.o(o, "isJsonRpcRequest") && r.d(t, {
      isJsonRpcRequest: function() {
        return o.isJsonRpcRequest;
      }
    }), r.o(o, "isJsonRpcResponse") && r.d(t, {
      isJsonRpcResponse: function() {
        return o.isJsonRpcResponse;
      }
    }), r.o(o, "isJsonRpcResult") && r.d(t, {
      isJsonRpcResult: function() {
        return o.isJsonRpcResult;
      }
    }), r.o(o, "isLocalhostUrl") && r.d(t, {
      isLocalhostUrl: function() {
        return o.isLocalhostUrl;
      }
    }), r.o(o, "isReactNative") && r.d(t, {
      isReactNative: function() {
        return o.isReactNative;
      }
    }), r.o(o, "isWsUrl") && r.d(t, {
      isWsUrl: function() {
        return o.isWsUrl;
      }
    });
    var a = r(3552);
    var c = r(8856);
  },
  9663: (e, t, r) => {
    "use strict";
    r.d(t, {
      IJsonRpcProvider: () => i.IJsonRpcProvider
    });
    var i = r(3246);
    r.o(i, "isHttpUrl") && r.d(t, {
      isHttpUrl: function() {
        return i.isHttpUrl;
      }
    }), r.o(i, "isJsonRpcError") && r.d(t, {
      isJsonRpcError: function() {
        return i.isJsonRpcError;
      }
    }), r.o(i, "isJsonRpcRequest") && r.d(t, {
      isJsonRpcRequest: function() {
        return i.isJsonRpcRequest;
      }
    }), r.o(i, "isJsonRpcResponse") && r.d(t, {
      isJsonRpcResponse: function() {
        return i.isJsonRpcResponse;
      }
    }), r.o(i, "isJsonRpcResult") && r.d(t, {
      isJsonRpcResult: function() {
        return i.isJsonRpcResult;
      }
    }), r.o(i, "isLocalhostUrl") && r.d(t, {
      isLocalhostUrl: function() {
        return i.isLocalhostUrl;
      }
    }), r.o(i, "isReactNative") && r.d(t, {
      isReactNative: function() {
        return i.isReactNative;
      }
    }), r.o(i, "isWsUrl") && r.d(t, {
      isWsUrl: function() {
        return i.isWsUrl;
      }
    });
  },
  3552: (e, t, r) => {
    "use strict";
    r.d(t, {
      JF: () => o,
      UZ: () => s,
      jK: () => n
    });
    function i(e, t) {
      const r = function(e) {
        const t = e.match(new RegExp(/^\w+:/, "gi"));
        if (t && t.length) return t[0];
      }(e);
      return void 0 !== r && new RegExp(t).test(r);
    }
    function n(e) {
      return i(e, "^https?:");
    }
    function s(e) {
      return i(e, "^wss?:");
    }
    function o(e) {
      return new RegExp("wss?://localhost(:d{2,5})?").test(e);
    }
  },
  8856: (e, t, r) => {
    "use strict";
    function i(e) {
      return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc;
    }
    function n(e) {
      return i(e) && "method" in e;
    }
    function s(e) {
      return i(e) && (o(e) || a(e));
    }
    function o(e) {
      return "result" in e;
    }
    function a(e) {
      return "error" in e;
    }
    r.d(t, {
      DW: () => n,
      jg: () => a,
      k4: () => o,
      u: () => s
    });
  },
  5818: (e, t, r) => {
    "use strict";
    const i = r(5132);
    const n = r(7182);
    const s = i.__importDefault(r(6035));
    const o = r(7585);
    class a {
      constructor() {
        this.localStorage = s.default;
      }
      getKeys() {
        return i.__awaiter(this, void 0, void 0, (function*() {
          return Object.keys(this.localStorage);
        }));
      }
      getEntries() {
        return i.__awaiter(this, void 0, void 0, (function*() {
          return Object.entries(this.localStorage).map(o.parseEntry);
        }));
      }
      getItem(e) {
        return i.__awaiter(this, void 0, void 0, (function*() {
          const t = this.localStorage.getItem(e);
          if (null !== t) return n.safeJsonParse(t);
        }));
      }
      setItem(e, t) {
        return i.__awaiter(this, void 0, void 0, (function*() {
          this.localStorage.setItem(e, n.safeJsonStringify(t));
        }));
      }
      removeItem(e) {
        return i.__awaiter(this, void 0, void 0, (function*() {
          this.localStorage.removeItem(e);
        }));
      }
    }
    t.ZP = a;
  },
  6035: (e, t, r) => {
    "use strict";
    !function() {
      let t;
      function i() {}
      t = i, t.prototype.getItem = function(e) {
        return this.hasOwnProperty(e) ? String(this[e]) : null;
      }, t.prototype.setItem = function(e, t) {
        this[e] = String(t);
      }, t.prototype.removeItem = function(e) {
        delete this[e];
      }, t.prototype.clear = function() {
        const e = this;
        Object.keys(e).forEach((function(t) {
          e[t] = void 0, delete e[t];
        }));
      }, t.prototype.key = function(e) {
        return e = e || 0, Object.keys(this)[e];
      }, t.prototype.__defineGetter__("length", (function() {
        return Object.keys(this).length;
      })), void 0 !== r.g && r.g.localStorage ? e.exports = r.g.localStorage : "undefined" != typeof window && window.localStorage ? e.exports = window.localStorage : e.exports = new i;
    }();
  },
  7585: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const i = r(5132);
    i.__exportStar(r(3473), t), i.__exportStar(r(6763), t);
  },
  3473: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IKeyValueStorage = void 0;
    t.IKeyValueStorage = class {};
  },
  6763: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.parseEntry = void 0;
    const i = r(7182);
    t.parseEntry = function(e) {
      var t;
      return [ e[0], i.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : "") ];
    };
  },
  5132: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      __assign: () => s,
      __asyncDelegator: () => w,
      __asyncGenerator: () => b,
      __asyncValues: () => _,
      __await: () => m,
      __awaiter: () => u,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => R,
      __createBinding: () => p,
      __decorate: () => a,
      __exportStar: () => f,
      __extends: () => n,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => h,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var i = function(e, t) {
      return i = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      }, i(e, t);
    };
    function n(e, t) {
      function r() {
        this.constructor = e;
      }
      i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(e) {
        for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }, s.apply(this, arguments);
    };
    function o(e, t) {
      var r = {};
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
      }
      return r;
    }
    function a(e, t, r, i) {
      var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
      return s > 3 && o && Object.defineProperty(t, r, o), o;
    }
    function c(e, t) {
      return function(r, i) {
        t(r, i, e);
      };
    }
    function h(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }
    function u(e, t, r, i) {
      return new (r || (r = Promise))((function(n, s) {
        function o(e) {
          try {
            c(i.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(i.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? n(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(o, a);
        }
        c((i = i.apply(e, t || [])).next());
      }));
    }
    function l(e, t) {
      var r, i, n, s, o = {
        label: 0,
        sent: function() {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
      }), s;
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function p(e, t, r, i) {
      void 0 === i && (i = r), e[i] = t[r];
    }
    function f(e, t) {
      for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
    }
    function d(e) {
      var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length) return {
        next: function() {
          return e && i >= e.length && (e = void 0), {
            value: e && e[i++],
            done: !e
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var i, n, s = r.call(e), o = [];
      try {
        for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
      } catch (a) {
        n = {
          error: a
        };
      } finally {
        try {
          i && !i.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    function y() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
      return e;
    }
    function v() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      var i = Array(e), n = 0;
      for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
      return i;
    }
    function m(e) {
      return this instanceof m ? (this.v = e, this) : new m(e);
    }
    function b(e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var i, n = r.apply(e, t || []), s = [];
      return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function o(e) {
        n[e] && (i[e] = function(t) {
          return new Promise((function(r, i) {
            s.push([ e, t, r, i ]) > 1 || a(e, t);
          }));
        });
      }
      function a(e, t) {
        try {
          !function(e) {
            e.value instanceof m ? Promise.resolve(e.value.v).then(c, h) : u(s[0][2], e);
          }(n[e](t));
        } catch (r) {
          u(s[0][3], r);
        }
      }
      function c(e) {
        a("next", e);
      }
      function h(e) {
        a("throw", e);
      }
      function u(e, t) {
        e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function w(e) {
      var t, r;
      return t = {}, i("next"), i("throw", (function(e) {
        throw e;
      })), i("return"), t[Symbol.iterator] = function() {
        return this;
      }, t;
      function i(i, n) {
        t[i] = e[i] ? function(t) {
          return (r = !r) ? {
            value: m(e[i](t)),
            done: "return" === i
          } : n ? n(t) : t;
        } : n;
      }
    }
    function _(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, r = e[Symbol.asyncIterator];
      return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
        return this;
      }, t);
      function i(r) {
        t[r] = e[r] && function(t) {
          return new Promise((function(i, n) {
            (function(e, t, r, i) {
              Promise.resolve(i).then((function(t) {
                e({
                  value: t,
                  done: r
                });
              }), t);
            })(i, n, (t = e[r](t)).done, t.value);
          }));
        };
      }
    }
    function E(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e;
    }
    function S(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t.default = e, t;
    }
    function O(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function I(e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    }
    function R(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, r), r;
    }
  },
  2531: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
      level: "info"
    }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context";
  },
  2844: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.pino = void 0;
    const i = r(8472);
    const n = i.__importDefault(r(7389));
    Object.defineProperty(t, "pino", {
      enumerable: !0,
      get: function() {
        return n.default;
      }
    }), i.__exportStar(r(2531), t), i.__exportStar(r(7123), t);
  },
  7123: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
    const i = r(2531);
    function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
      return e[t] || "";
    }
    function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
      return e[r] = t, e;
    }
    function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
      let r = "";
      return r = void 0 === e.bindings ? n(e, t) : e.bindings().context || "", r;
    }
    function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
      const n = o(e, r);
      return n.trim() ? `${n}/${t}` : t;
    }
    t.getDefaultLoggerOptions = function(e) {
      return Object.assign(Object.assign({}, e), {
        level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level
      });
    }, t.getBrowserLoggerContext = n, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, 
    t.generateChildLogger = function(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
      const n = a(e, t, r);
      return s(e.child({
        context: n
      }), n, r);
    };
  },
  8472: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      __assign: () => s,
      __asyncDelegator: () => w,
      __asyncGenerator: () => b,
      __asyncValues: () => _,
      __await: () => m,
      __awaiter: () => u,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => R,
      __createBinding: () => p,
      __decorate: () => a,
      __exportStar: () => f,
      __extends: () => n,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => h,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var i = function(e, t) {
      return i = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      }, i(e, t);
    };
    function n(e, t) {
      function r() {
        this.constructor = e;
      }
      i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(e) {
        for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }, s.apply(this, arguments);
    };
    function o(e, t) {
      var r = {};
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
      }
      return r;
    }
    function a(e, t, r, i) {
      var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
      return s > 3 && o && Object.defineProperty(t, r, o), o;
    }
    function c(e, t) {
      return function(r, i) {
        t(r, i, e);
      };
    }
    function h(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }
    function u(e, t, r, i) {
      return new (r || (r = Promise))((function(n, s) {
        function o(e) {
          try {
            c(i.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(i.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? n(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(o, a);
        }
        c((i = i.apply(e, t || [])).next());
      }));
    }
    function l(e, t) {
      var r, i, n, s, o = {
        label: 0,
        sent: function() {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
      }), s;
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function p(e, t, r, i) {
      void 0 === i && (i = r), e[i] = t[r];
    }
    function f(e, t) {
      for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
    }
    function d(e) {
      var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length) return {
        next: function() {
          return e && i >= e.length && (e = void 0), {
            value: e && e[i++],
            done: !e
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var i, n, s = r.call(e), o = [];
      try {
        for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
      } catch (a) {
        n = {
          error: a
        };
      } finally {
        try {
          i && !i.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    function y() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
      return e;
    }
    function v() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      var i = Array(e), n = 0;
      for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
      return i;
    }
    function m(e) {
      return this instanceof m ? (this.v = e, this) : new m(e);
    }
    function b(e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var i, n = r.apply(e, t || []), s = [];
      return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function o(e) {
        n[e] && (i[e] = function(t) {
          return new Promise((function(r, i) {
            s.push([ e, t, r, i ]) > 1 || a(e, t);
          }));
        });
      }
      function a(e, t) {
        try {
          !function(e) {
            e.value instanceof m ? Promise.resolve(e.value.v).then(c, h) : u(s[0][2], e);
          }(n[e](t));
        } catch (r) {
          u(s[0][3], r);
        }
      }
      function c(e) {
        a("next", e);
      }
      function h(e) {
        a("throw", e);
      }
      function u(e, t) {
        e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function w(e) {
      var t, r;
      return t = {}, i("next"), i("throw", (function(e) {
        throw e;
      })), i("return"), t[Symbol.iterator] = function() {
        return this;
      }, t;
      function i(i, n) {
        t[i] = e[i] ? function(t) {
          return (r = !r) ? {
            value: m(e[i](t)),
            done: "return" === i
          } : n ? n(t) : t;
        } : n;
      }
    }
    function _(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, r = e[Symbol.asyncIterator];
      return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
        return this;
      }, t);
      function i(r) {
        t[r] = e[r] && function(t) {
          return new Promise((function(i, n) {
            (function(e, t, r, i) {
              Promise.resolve(i).then((function(t) {
                e({
                  value: t,
                  done: r
                });
              }), t);
            })(i, n, (t = e[r](t)).done, t.value);
          }));
        };
      }
    }
    function E(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e;
    }
    function S(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t.default = e, t;
    }
    function O(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function I(e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    }
    function R(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, r), r;
    }
  },
  7529: () => {},
  2206: () => {},
  385: (e, t) => {
    "use strict";
    function r(e) {
      let t;
      return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t;
    }
    function i(e) {
      const t = r(e);
      if (!t) throw new Error(`${e} is not defined in Window`);
      return t;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, 
    t.getFromWindow = r, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
      return i("document");
    }, t.getDocument = function() {
      return r("document");
    }, t.getNavigatorOrThrow = function() {
      return i("navigator");
    }, t.getNavigator = function() {
      return r("navigator");
    }, t.getLocationOrThrow = function() {
      return i("location");
    }, t.getLocation = function() {
      return r("location");
    }, t.getCryptoOrThrow = function() {
      return i("crypto");
    }, t.getCrypto = function() {
      return r("crypto");
    }, t.getLocalStorageOrThrow = function() {
      return i("localStorage");
    }, t.getLocalStorage = function() {
      return r("localStorage");
    };
  },
  6070: (e, t, r) => {
    "use strict";
    t.D = void 0;
    const i = r(385);
    t.D = function() {
      let e;
      let t;
      try {
        e = i.getDocumentOrThrow(), t = i.getLocationOrThrow();
      } catch (s) {
        return null;
      }
      function r(...t) {
        const r = e.getElementsByTagName("meta");
        for (let e = 0; e < r.length; e++) {
          const i = r[e];
          const n = [ "itemprop", "property", "name" ].map((e => i.getAttribute(e))).filter((e => !!e && t.includes(e)));
          if (n.length && n) {
            const e = i.getAttribute("content");
            if (e) return e;
          }
        }
        return "";
      }
      const n = function() {
        let t = r("name", "og:site_name", "og:title", "twitter:title");
        return t || (t = e.title), t;
      }();
      return {
        description: function() {
          return r("description", "og:description", "twitter:description", "keywords");
        }(),
        url: t.origin,
        icons: function() {
          const r = e.getElementsByTagName("link");
          const i = [];
          for (let e = 0; e < r.length; e++) {
            const n = r[e];
            const s = n.getAttribute("rel");
            if (s && s.toLowerCase().indexOf("icon") > -1) {
              const e = n.getAttribute("href");
              if (e) if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                let r = t.protocol + "//" + t.host;
                if (0 === e.indexOf("/")) r += e; else {
                  const i = t.pathname.split("/");
                  i.pop();
                  r += i.join("/") + "/" + e;
                }
                i.push(r);
              } else if (0 === e.indexOf("//")) {
                const r = t.protocol + e;
                i.push(r);
              } else i.push(e);
            }
          }
          return i;
        }(),
        name: n
      };
    };
  },
  9085: e => {
    "use strict";
    e.exports = function(e, t) {
      var r = {};
      var i = Object.keys(e);
      var n = Array.isArray(t);
      for (var s = 0; s < i.length; s++) {
        var o = i[s];
        var a = e[o];
        (n ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a);
      }
      return r;
    };
  },
  20: (e, t, r) => {
    "use strict";
    const i = r(9449);
    const n = r(3947);
    const s = r(2704);
    const o = r(9085);
    const a = Symbol('encodeFragmentIdentifier');
    function c(e) {
      if ('string' != typeof e || 1 !== e.length) throw new TypeError('arrayFormatSeparator must be single character string');
    }
    function h(e, t) {
      return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e;
    }
    function u(e, t) {
      return t.decode ? n(e) : e;
    }
    function l(e) {
      return Array.isArray(e) ? e.sort() : 'object' == typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e;
    }
    function p(e) {
      const t = e.indexOf('#');
      return -1 !== t && (e = e.slice(0, t)), e;
    }
    function f(e) {
      const t = (e = p(e)).indexOf('?');
      return -1 === t ? '' : e.slice(t + 1);
    }
    function d(e, t) {
      return t.parseNumbers && !Number.isNaN(Number(e)) && 'string' == typeof e && '' !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || 'true' !== e.toLowerCase() && 'false' !== e.toLowerCase() || (e = 'true' === e.toLowerCase()), 
      e;
    }
    function g(e, t) {
      c((t = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: !1,
        parseBooleans: !1
      }, t)).arrayFormatSeparator);
      const r = function(e) {
        let t;
        switch (e.arrayFormat) {
         case 'index':
          return (e, r, i) => {
            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ''), t ? (void 0 === i[e] && (i[e] = {}), i[e][t[1]] = r) : i[e] = r;
          };

         case 'bracket':
          return (e, r, i) => {
            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ''), t ? void 0 !== i[e] ? i[e] = [].concat(i[e], r) : i[e] = [ r ] : i[e] = r;
          };

         case 'colon-list-separator':
          return (e, r, i) => {
            t = /(:list)$/.exec(e), e = e.replace(/:list$/, ''), t ? void 0 !== i[e] ? i[e] = [].concat(i[e], r) : i[e] = [ r ] : i[e] = r;
          };

         case 'comma':
         case 'separator':
          return (t, r, i) => {
            const n = 'string' == typeof r && r.includes(e.arrayFormatSeparator);
            const s = 'string' == typeof r && !n && u(r, e).includes(e.arrayFormatSeparator);
            r = s ? u(r, e) : r;
            const o = n || s ? r.split(e.arrayFormatSeparator).map((t => u(t, e))) : null === r ? r : u(r, e);
            i[t] = o;
          };

         case 'bracket-separator':
          return (t, r, i) => {
            const n = /(\[\])$/.test(t);
            if (t = t.replace(/\[\]$/, ''), !n) return void (i[t] = r ? u(r, e) : r);
            const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => u(t, e)));
            void 0 !== i[t] ? i[t] = [].concat(i[t], s) : i[t] = s;
          };

         default:
          return (e, t, r) => {
            void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t;
          };
        }
      }(t);
      const i = Object.create(null);
      if ('string' != typeof e) return i;
      if (!(e = e.trim().replace(/^[?#&]/, ''))) return i;
      for (const n of e.split('&')) {
        if ('' === n) continue;
        let [e, o] = s(t.decode ? n.replace(/\+/g, ' ') : n, '=');
        o = void 0 === o ? null : [ 'comma', 'separator', 'bracket-separator' ].includes(t.arrayFormat) ? o : u(o, t), r(u(e, t), o, i);
      }
      for (const n of Object.keys(i)) {
        const e = i[n];
        if ('object' == typeof e && null !== e) for (const r of Object.keys(e)) e[r] = d(e[r], t); else i[n] = d(e, t);
      }
      return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce(((e, t) => {
        const r = i[t];
        return Boolean(r) && 'object' == typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e;
      }), Object.create(null));
    }
    t.extract = f, t.parse = g, t.stringify = (e, t) => {
      if (!e) return '';
      c((t = Object.assign({
        encode: !0,
        strict: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ','
      }, t)).arrayFormatSeparator);
      const r = r => t.skipNull && (e => null == e)(e[r]) || t.skipEmptyString && '' === e[r];
      const i = function(e) {
        switch (e.arrayFormat) {
         case 'index':
          return t => (r, i) => {
            const n = r.length;
            return void 0 === i || e.skipNull && null === i || e.skipEmptyString && '' === i ? r : null === i ? [ ...r, [ h(t, e), '[', n, ']' ].join('') ] : [ ...r, [ h(t, e), '[', h(n, e), ']=', h(i, e) ].join('') ];
          };

         case 'bracket':
          return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && '' === i ? r : null === i ? [ ...r, [ h(t, e), '[]' ].join('') ] : [ ...r, [ h(t, e), '[]=', h(i, e) ].join('') ];

         case 'colon-list-separator':
          return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && '' === i ? r : null === i ? [ ...r, [ h(t, e), ':list=' ].join('') ] : [ ...r, [ h(t, e), ':list=', h(i, e) ].join('') ];

         case 'comma':
         case 'separator':
         case 'bracket-separator':
          {
            const t = 'bracket-separator' === e.arrayFormat ? '[]=' : '=';
            return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && '' === n ? i : (n = null === n ? '' : n, 
            0 === i.length ? [ [ h(r, e), t, h(n, e) ].join('') ] : [ [ i, h(n, e) ].join(e.arrayFormatSeparator) ]);
          }

         default:
          return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && '' === i ? r : null === i ? [ ...r, h(t, e) ] : [ ...r, [ h(t, e), '=', h(i, e) ].join('') ];
        }
      }(t);
      const n = {};
      for (const o of Object.keys(e)) r(o) || (n[o] = e[o]);
      const s = Object.keys(n);
      return !1 !== t.sort && s.sort(t.sort), s.map((r => {
        const n = e[r];
        return void 0 === n ? '' : null === n ? h(r, t) : Array.isArray(n) ? 0 === n.length && 'bracket-separator' === t.arrayFormat ? h(r, t) + '[]' : n.reduce(i(r), []).join('&') : h(r, t) + '=' + h(n, t);
      })).filter((e => e.length > 0)).join('&');
    }, t.parseUrl = (e, t) => {
      t = Object.assign({
        decode: !0
      }, t);
      const [r, i] = s(e, '#');
      return Object.assign({
        url: r.split('?')[0] || '',
        query: g(f(e), t)
      }, t && t.parseFragmentIdentifier && i ? {
        fragmentIdentifier: u(i, t)
      } : {});
    }, t.stringifyUrl = (e, r) => {
      r = Object.assign({
        encode: !0,
        strict: !0,
        [a]: !0
      }, r);
      const i = p(e.url).split('?')[0] || '';
      const n = t.extract(e.url);
      const s = t.parse(n, {
        sort: !1
      });
      const o = Object.assign(s, e.query);
      let c = t.stringify(o, r);
      c && (c = `?${c}`);
      let u = function(e) {
        let t = '';
        const r = e.indexOf('#');
        return -1 !== r && (t = e.slice(r)), t;
      }(e.url);
      return e.fragmentIdentifier && (u = `#${r[a] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier}`), `${i}${c}${u}`;
    }, t.pick = (e, r, i) => {
      i = Object.assign({
        parseFragmentIdentifier: !0,
        [a]: !1
      }, i);
      const {url: n, query: s, fragmentIdentifier: c} = t.parseUrl(e, i);
      return t.stringifyUrl({
        url: n,
        query: o(s, r),
        fragmentIdentifier: c
      }, i);
    }, t.exclude = (e, r, i) => {
      const n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
      return t.pick(e, n, i);
    };
  },
  3015: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const i = r(9997);
    i.__exportStar(r(1785), t), i.__exportStar(r(1750), t);
  },
  1785: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3;
  },
  1750: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, 
    t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, 
    t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, 
    t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, 
    t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, 
    t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, 
    t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY;
  },
  1246: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const i = r(9997);
    i.__exportStar(r(3685), t), i.__exportStar(r(8106), t), i.__exportStar(r(91), t), i.__exportStar(r(3015), t);
  },
  91: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    r(9997).__exportStar(r(986), t);
  },
  986: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IWatch = void 0;
    t.IWatch = class {};
  },
  4143: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.fromMiliseconds = t.toMiliseconds = void 0;
    const i = r(3015);
    t.toMiliseconds = function(e) {
      return e * i.ONE_THOUSAND;
    }, t.fromMiliseconds = function(e) {
      return Math.floor(e / i.ONE_THOUSAND);
    };
  },
  2836: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.delay = void 0, t.delay = function(e) {
      return new Promise((t => {
        setTimeout((() => {
          t(!0);
        }), e);
      }));
    };
  },
  3685: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const i = r(9997);
    i.__exportStar(r(2836), t), i.__exportStar(r(4143), t);
  },
  8106: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Watch = void 0;
    class r {
      constructor() {
        this.timestamps = new Map;
      }
      start(e) {
        if (this.timestamps.has(e)) throw new Error(`Watch already started for label: ${e}`);
        this.timestamps.set(e, {
          started: Date.now()
        });
      }
      stop(e) {
        const t = this.get(e);
        if (void 0 !== t.elapsed) throw new Error(`Watch already stopped for label: ${e}`);
        const r = Date.now() - t.started;
        this.timestamps.set(e, {
          started: t.started,
          elapsed: r
        });
      }
      get(e) {
        const t = this.timestamps.get(e);
        if (void 0 === t) throw new Error(`No timestamp found for label: ${e}`);
        return t;
      }
      elapsed(e) {
        const t = this.get(e);
        return t.elapsed || Date.now() - t.started;
      }
    }
    t.Watch = r, t.default = r;
  },
  9997: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      __assign: () => s,
      __asyncDelegator: () => w,
      __asyncGenerator: () => b,
      __asyncValues: () => _,
      __await: () => m,
      __awaiter: () => u,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => R,
      __createBinding: () => p,
      __decorate: () => a,
      __exportStar: () => f,
      __extends: () => n,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => h,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var i = function(e, t) {
      return i = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      }, i(e, t);
    };
    function n(e, t) {
      function r() {
        this.constructor = e;
      }
      i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(e) {
        for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }, s.apply(this, arguments);
    };
    function o(e, t) {
      var r = {};
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
      }
      return r;
    }
    function a(e, t, r, i) {
      var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
      return s > 3 && o && Object.defineProperty(t, r, o), o;
    }
    function c(e, t) {
      return function(r, i) {
        t(r, i, e);
      };
    }
    function h(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }
    function u(e, t, r, i) {
      return new (r || (r = Promise))((function(n, s) {
        function o(e) {
          try {
            c(i.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(i.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? n(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(o, a);
        }
        c((i = i.apply(e, t || [])).next());
      }));
    }
    function l(e, t) {
      var r, i, n, s, o = {
        label: 0,
        sent: function() {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
      }), s;
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function p(e, t, r, i) {
      void 0 === i && (i = r), e[i] = t[r];
    }
    function f(e, t) {
      for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
    }
    function d(e) {
      var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length) return {
        next: function() {
          return e && i >= e.length && (e = void 0), {
            value: e && e[i++],
            done: !e
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var i, n, s = r.call(e), o = [];
      try {
        for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
      } catch (a) {
        n = {
          error: a
        };
      } finally {
        try {
          i && !i.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    function y() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
      return e;
    }
    function v() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      var i = Array(e), n = 0;
      for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
      return i;
    }
    function m(e) {
      return this instanceof m ? (this.v = e, this) : new m(e);
    }
    function b(e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var i, n = r.apply(e, t || []), s = [];
      return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function o(e) {
        n[e] && (i[e] = function(t) {
          return new Promise((function(r, i) {
            s.push([ e, t, r, i ]) > 1 || a(e, t);
          }));
        });
      }
      function a(e, t) {
        try {
          !function(e) {
            e.value instanceof m ? Promise.resolve(e.value.v).then(c, h) : u(s[0][2], e);
          }(n[e](t));
        } catch (r) {
          u(s[0][3], r);
        }
      }
      function c(e) {
        a("next", e);
      }
      function h(e) {
        a("throw", e);
      }
      function u(e, t) {
        e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function w(e) {
      var t, r;
      return t = {}, i("next"), i("throw", (function(e) {
        throw e;
      })), i("return"), t[Symbol.iterator] = function() {
        return this;
      }, t;
      function i(i, n) {
        t[i] = e[i] ? function(t) {
          return (r = !r) ? {
            value: m(e[i](t)),
            done: "return" === i
          } : n ? n(t) : t;
        } : n;
      }
    }
    function _(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, r = e[Symbol.asyncIterator];
      return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
        return this;
      }, t);
      function i(r) {
        t[r] = e[r] && function(t) {
          return new Promise((function(i, n) {
            (function(e, t, r, i) {
              Promise.resolve(i).then((function(t) {
                e({
                  value: t,
                  done: r
                });
              }), t);
            })(i, n, (t = e[r](t)).done, t.value);
          }));
        };
      }
    }
    function E(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e;
    }
    function S(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t.default = e, t;
    }
    function O(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function I(e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    }
    function R(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, r), r;
    }
  },
  2456: (e, t) => {
    "use strict";
    function r(e) {
      let t;
      return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t;
    }
    function i(e) {
      const t = r(e);
      if (!t) throw new Error(`${e} is not defined in Window`);
      return t;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, 
    t.getFromWindow = r, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
      return i("document");
    }, t.getDocument = function() {
      return r("document");
    }, t.getNavigatorOrThrow = function() {
      return i("navigator");
    }, t.getNavigator = function() {
      return r("navigator");
    }, t.getLocationOrThrow = function() {
      return i("location");
    }, t.getLocation = function() {
      return r("location");
    }, t.getCryptoOrThrow = function() {
      return i("crypto");
    }, t.getCrypto = function() {
      return r("crypto");
    }, t.getLocalStorageOrThrow = function() {
      return i("localStorage");
    }, t.getLocalStorage = function() {
      return r("localStorage");
    };
  },
  3971: (e, t, r) => {
    "use strict";
    const i = r(2456);
  },
  2304: e => {
    "use strict";
    e.exports = function(e, t) {
      var r = {};
      var i = Object.keys(e);
      var n = Array.isArray(t);
      for (var s = 0; s < i.length; s++) {
        var o = i[s];
        var a = e[o];
        (n ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a);
      }
      return r;
    };
  },
  111: (e, t, r) => {
    "use strict";
    const i = r(9449);
    const n = r(3947);
    const s = r(2704);
    const o = r(2304);
    const a = Symbol('encodeFragmentIdentifier');
    function c(e) {
      if ('string' != typeof e || 1 !== e.length) throw new TypeError('arrayFormatSeparator must be single character string');
    }
    function h(e, t) {
      return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e;
    }
    function u(e, t) {
      return t.decode ? n(e) : e;
    }
    function l(e) {
      return Array.isArray(e) ? e.sort() : 'object' == typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e;
    }
    function p(e) {
      const t = e.indexOf('#');
      return -1 !== t && (e = e.slice(0, t)), e;
    }
    function f(e) {
      const t = (e = p(e)).indexOf('?');
      return -1 === t ? '' : e.slice(t + 1);
    }
    function d(e, t) {
      return t.parseNumbers && !Number.isNaN(Number(e)) && 'string' == typeof e && '' !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || 'true' !== e.toLowerCase() && 'false' !== e.toLowerCase() || (e = 'true' === e.toLowerCase()), 
      e;
    }
    function g(e, t) {
      c((t = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: !1,
        parseBooleans: !1
      }, t)).arrayFormatSeparator);
      const r = function(e) {
        let t;
        switch (e.arrayFormat) {
         case 'index':
          return (e, r, i) => {
            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ''), t ? (void 0 === i[e] && (i[e] = {}), i[e][t[1]] = r) : i[e] = r;
          };

         case 'bracket':
          return (e, r, i) => {
            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ''), t ? void 0 !== i[e] ? i[e] = [].concat(i[e], r) : i[e] = [ r ] : i[e] = r;
          };

         case 'colon-list-separator':
          return (e, r, i) => {
            t = /(:list)$/.exec(e), e = e.replace(/:list$/, ''), t ? void 0 !== i[e] ? i[e] = [].concat(i[e], r) : i[e] = [ r ] : i[e] = r;
          };

         case 'comma':
         case 'separator':
          return (t, r, i) => {
            const n = 'string' == typeof r && r.includes(e.arrayFormatSeparator);
            const s = 'string' == typeof r && !n && u(r, e).includes(e.arrayFormatSeparator);
            r = s ? u(r, e) : r;
            const o = n || s ? r.split(e.arrayFormatSeparator).map((t => u(t, e))) : null === r ? r : u(r, e);
            i[t] = o;
          };

         case 'bracket-separator':
          return (t, r, i) => {
            const n = /(\[\])$/.test(t);
            if (t = t.replace(/\[\]$/, ''), !n) return void (i[t] = r ? u(r, e) : r);
            const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => u(t, e)));
            void 0 !== i[t] ? i[t] = [].concat(i[t], s) : i[t] = s;
          };

         default:
          return (e, t, r) => {
            void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t;
          };
        }
      }(t);
      const i = Object.create(null);
      if ('string' != typeof e) return i;
      if (!(e = e.trim().replace(/^[?#&]/, ''))) return i;
      for (const n of e.split('&')) {
        if ('' === n) continue;
        let [e, o] = s(t.decode ? n.replace(/\+/g, ' ') : n, '=');
        o = void 0 === o ? null : [ 'comma', 'separator', 'bracket-separator' ].includes(t.arrayFormat) ? o : u(o, t), r(u(e, t), o, i);
      }
      for (const n of Object.keys(i)) {
        const e = i[n];
        if ('object' == typeof e && null !== e) for (const r of Object.keys(e)) e[r] = d(e[r], t); else i[n] = d(e, t);
      }
      return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce(((e, t) => {
        const r = i[t];
        return Boolean(r) && 'object' == typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e;
      }), Object.create(null));
    }
    t.extract = f, t.parse = g, t.stringify = (e, t) => {
      if (!e) return '';
      c((t = Object.assign({
        encode: !0,
        strict: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ','
      }, t)).arrayFormatSeparator);
      const r = r => t.skipNull && (e => null == e)(e[r]) || t.skipEmptyString && '' === e[r];
      const i = function(e) {
        switch (e.arrayFormat) {
         case 'index':
          return t => (r, i) => {
            const n = r.length;
            return void 0 === i || e.skipNull && null === i || e.skipEmptyString && '' === i ? r : null === i ? [ ...r, [ h(t, e), '[', n, ']' ].join('') ] : [ ...r, [ h(t, e), '[', h(n, e), ']=', h(i, e) ].join('') ];
          };

         case 'bracket':
          return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && '' === i ? r : null === i ? [ ...r, [ h(t, e), '[]' ].join('') ] : [ ...r, [ h(t, e), '[]=', h(i, e) ].join('') ];

         case 'colon-list-separator':
          return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && '' === i ? r : null === i ? [ ...r, [ h(t, e), ':list=' ].join('') ] : [ ...r, [ h(t, e), ':list=', h(i, e) ].join('') ];

         case 'comma':
         case 'separator':
         case 'bracket-separator':
          {
            const t = 'bracket-separator' === e.arrayFormat ? '[]=' : '=';
            return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && '' === n ? i : (n = null === n ? '' : n, 
            0 === i.length ? [ [ h(r, e), t, h(n, e) ].join('') ] : [ [ i, h(n, e) ].join(e.arrayFormatSeparator) ]);
          }

         default:
          return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && '' === i ? r : null === i ? [ ...r, h(t, e) ] : [ ...r, [ h(t, e), '=', h(i, e) ].join('') ];
        }
      }(t);
      const n = {};
      for (const o of Object.keys(e)) r(o) || (n[o] = e[o]);
      const s = Object.keys(n);
      return !1 !== t.sort && s.sort(t.sort), s.map((r => {
        const n = e[r];
        return void 0 === n ? '' : null === n ? h(r, t) : Array.isArray(n) ? 0 === n.length && 'bracket-separator' === t.arrayFormat ? h(r, t) + '[]' : n.reduce(i(r), []).join('&') : h(r, t) + '=' + h(n, t);
      })).filter((e => e.length > 0)).join('&');
    }, t.parseUrl = (e, t) => {
      t = Object.assign({
        decode: !0
      }, t);
      const [r, i] = s(e, '#');
      return Object.assign({
        url: r.split('?')[0] || '',
        query: g(f(e), t)
      }, t && t.parseFragmentIdentifier && i ? {
        fragmentIdentifier: u(i, t)
      } : {});
    }, t.stringifyUrl = (e, r) => {
      r = Object.assign({
        encode: !0,
        strict: !0,
        [a]: !0
      }, r);
      const i = p(e.url).split('?')[0] || '';
      const n = t.extract(e.url);
      const s = t.parse(n, {
        sort: !1
      });
      const o = Object.assign(s, e.query);
      let c = t.stringify(o, r);
      c && (c = `?${c}`);
      let u = function(e) {
        let t = '';
        const r = e.indexOf('#');
        return -1 !== r && (t = e.slice(r)), t;
      }(e.url);
      return e.fragmentIdentifier && (u = `#${r[a] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier}`), `${i}${c}${u}`;
    }, t.pick = (e, r, i) => {
      i = Object.assign({
        parseFragmentIdentifier: !0,
        [a]: !1
      }, i);
      const {url: n, query: s, fragmentIdentifier: c} = t.parseUrl(e, i);
      return t.stringifyUrl({
        url: n,
        query: o(s, r),
        fragmentIdentifier: c
      }, i);
    }, t.exclude = (e, r, i) => {
      const n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
      return t.pick(e, n, i);
    };
  },
  3947: e => {
    "use strict";
    var t = '%[a-f0-9]{2}';
    var r = new RegExp(t, 'gi');
    var i = new RegExp('(' + t + ')+', 'gi');
    function n(e, t) {
      try {
        return decodeURIComponent(e.join(''));
      } catch (s) {}
      if (1 === e.length) return e;
      t = t || 1;
      var r = e.slice(0, t);
      var i = e.slice(t);
      return Array.prototype.concat.call([], n(r), n(i));
    }
    function s(e) {
      try {
        return decodeURIComponent(e);
      } catch (s) {
        var t = e.match(r);
        for (var i = 1; i < t.length; i++) t = (e = n(t, i).join('')).match(r);
        return e;
      }
    }
    e.exports = function(e) {
      if ('string' != typeof e) throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof e + '`');
      try {
        return e = e.replace(/\+/g, ' '), decodeURIComponent(e);
      } catch (t) {
        return function(e) {
          var r = {
            '%FE%FF': '��',
            '%FF%FE': '��'
          };
          var n = i.exec(e);
          for (;n; ) {
            try {
              r[n[0]] = decodeURIComponent(n[0]);
            } catch (t) {
              var o = s(n[0]);
              o !== n[0] && (r[n[0]] = o);
            }
            n = i.exec(e);
          }
          r['%C2'] = '�';
          var a = Object.keys(r);
          for (var c = 0; c < a.length; c++) {
            var h = a[c];
            e = e.replace(new RegExp(h, 'g'), r[h]);
          }
          return e;
        }(e);
      }
    };
  },
  5939: e => {
    "use strict";
    var t = 'object' == typeof Reflect ? Reflect : null;
    var r = t && 'function' == typeof t.apply ? t.apply : function(e, t, r) {
      return Function.prototype.apply.call(e, t, r);
    };
    var i;
    i = t && 'function' == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function(e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : function(e) {
      return Object.getOwnPropertyNames(e);
    };
    var n = Number.isNaN || function(e) {
      return e != e;
    };
    function s() {
      s.init.call(this);
    }
    e.exports = s, e.exports.once = function(e, t) {
      return new Promise((function(r, i) {
        function n(r) {
          e.removeListener(t, s), i(r);
        }
        function s() {
          'function' == typeof e.removeListener && e.removeListener('error', n), r([].slice.call(arguments));
        }
        g(e, t, s, {
          once: !0
        }), 'error' !== t && function(e, t, r) {
          'function' == typeof e.on && g(e, 'error', t, r);
        }(e, n, {
          once: !0
        });
      }));
    }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
    var o = 10;
    function a(e) {
      if ('function' != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    function c(e) {
      return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
    }
    function h(e, t, r, i) {
      var n;
      var s;
      var o;
      if (a(r), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit('newListener', t, r.listener ? r.listener : r), 
      s = e._events), o = s[t]), void 0 === o) o = s[t] = r, ++e._eventsCount; else if ('function' == typeof o ? o = s[t] = i ? [ r, o ] : [ o, r ] : i ? o.unshift(r) : o.push(r), 
      (n = c(e)) > 0 && o.length > n && !o.warned) {
        o.warned = !0;
        var h = new Error('Possible EventEmitter memory leak detected. ' + o.length + ' ' + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        h.name = 'MaxListenersExceededWarning', h.emitter = e, h.type = t, h.count = o.length, function(e) {
          console && console.warn && console.warn(e);
        }(h);
      }
      return e;
    }
    function u() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function l(e, t, r) {
      var i = {
        fired: !1,
        wrapFn: void 0,
        target: e,
        type: t,
        listener: r
      };
      var n = u.bind(i);
      return n.listener = r, i.wrapFn = n, n;
    }
    function p(e, t, r) {
      var i = e._events;
      if (void 0 === i) return [];
      var n = i[t];
      return void 0 === n ? [] : 'function' == typeof n ? r ? [ n.listener || n ] : [ n ] : r ? function(e) {
        var t = new Array(e.length);
        for (var r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t;
      }(n) : d(n, n.length);
    }
    function f(e) {
      var t = this._events;
      if (void 0 !== t) {
        var r = t[e];
        if ('function' == typeof r) return 1;
        if (void 0 !== r) return r.length;
      }
      return 0;
    }
    function d(e, t) {
      var r = new Array(t);
      for (var i = 0; i < t; ++i) r[i] = e[i];
      return r;
    }
    function g(e, t, r, i) {
      if ('function' == typeof e.on) i.once ? e.once(t, r) : e.on(t, r); else {
        if ('function' != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
        e.addEventListener(t, (function n(s) {
          i.once && e.removeEventListener(t, n), r(s);
        }));
      }
    }
    Object.defineProperty(s, 'defaultMaxListeners', {
      enumerable: !0,
      get: function() {
        return o;
      },
      set: function(e) {
        if ('number' != typeof e || e < 0 || n(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + '.');
        o = e;
      }
    }), s.init = function() {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, s.prototype.setMaxListeners = function(e) {
      if ('number' != typeof e || e < 0 || n(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.');
      return this._maxListeners = e, this;
    }, s.prototype.getMaxListeners = function() {
      return c(this);
    }, s.prototype.emit = function(e) {
      var t = [];
      for (var i = 1; i < arguments.length; i++) t.push(arguments[i]);
      var n = 'error' === e;
      var s = this._events;
      if (void 0 !== s) n = n && void 0 === s.error; else if (!n) return !1;
      if (n) {
        var o;
        if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
        var a = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
        throw a.context = o, a;
      }
      var c = s[e];
      if (void 0 === c) return !1;
      if ('function' == typeof c) r(c, this, t); else {
        var h = c.length;
        var u = d(c, h);
        for (i = 0; i < h; ++i) r(u[i], this, t);
      }
      return !0;
    }, s.prototype.addListener = function(e, t) {
      return h(this, e, t, !1);
    }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
      return h(this, e, t, !0);
    }, s.prototype.once = function(e, t) {
      return a(t), this.on(e, l(this, e, t)), this;
    }, s.prototype.prependOnceListener = function(e, t) {
      return a(t), this.prependListener(e, l(this, e, t)), this;
    }, s.prototype.removeListener = function(e, t) {
      var r, i, n, s, o;
      if (a(t), void 0 === (i = this._events)) return this;
      if (void 0 === (r = i[e])) return this;
      if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit('removeListener', e, r.listener || t)); else if ('function' != typeof r) {
        for (n = -1, s = r.length - 1; s >= 0; s--) if (r[s] === t || r[s].listener === t) {
          o = r[s].listener, n = s;
          break;
        }
        if (n < 0) return this;
        0 === n ? r.shift() : function(e, t) {
          for (;t + 1 < e.length; t++) e[t] = e[t + 1];
          e.pop();
        }(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit('removeListener', e, o || t);
      }
      return this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
      var t, r, i;
      if (void 0 === (r = this._events)) return this;
      if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), 
      this;
      if (0 === arguments.length) {
        var n = Object.keys(r);
        var s;
        for (i = 0; i < n.length; ++i) 'removeListener' !== (s = n[i]) && this.removeAllListeners(s);
        return this.removeAllListeners('removeListener'), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if ('function' == typeof (t = r[e])) this.removeListener(e, t); else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
      return this;
    }, s.prototype.listeners = function(e) {
      return p(this, e, !0);
    }, s.prototype.rawListeners = function(e) {
      return p(this, e, !1);
    }, s.listenerCount = function(e, t) {
      return 'function' == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t);
    }, s.prototype.listenerCount = f, s.prototype.eventNames = function() {
      return this._eventsCount > 0 ? i(this._events) : [];
    };
  },
  2722: (e, t, r) => {
    e = r.nmd(e);
    var i = '__lodash_hash_undefined__';
    var n = 9007199254740991;
    var s = '[object Arguments]', o = '[object Array]', a = '[object Boolean]', c = '[object Date]', h = '[object Error]', u = '[object Function]', l = '[object Map]', p = '[object Number]', f = '[object Object]', d = '[object Promise]', g = '[object RegExp]', y = '[object Set]', v = '[object String]', m = '[object Symbol]', b = '[object WeakMap]';
    var w = '[object ArrayBuffer]', _ = '[object DataView]';
    var E = /^\[object .+?Constructor\]$/;
    var S = /^(?:0|[1-9]\d*)$/;
    var O = {};
    O['[object Float32Array]'] = O['[object Float64Array]'] = O['[object Int8Array]'] = O['[object Int16Array]'] = O['[object Int32Array]'] = O['[object Uint8Array]'] = O['[object Uint8ClampedArray]'] = O['[object Uint16Array]'] = O['[object Uint32Array]'] = !0, 
    O[s] = O[o] = O[w] = O[a] = O[_] = O[c] = O[h] = O[u] = O[l] = O[p] = O[f] = O[g] = O[y] = O[v] = O[b] = !1;
    var I = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g;
    var R = 'object' == typeof self && self && self.Object === Object && self;
    var P = I || R || Function('return this')();
    var N = t && !t.nodeType && t;
    var x = N && e && !e.nodeType && e;
    var T = x && x.exports === N;
    var A = T && I.process;
    var U = function() {
      try {
        return A && A.binding && A.binding('util');
      } catch (e) {}
    }();
    var j = U && U.isTypedArray;
    function L(e, t) {
      var r = -1, i = null == e ? 0 : e.length;
      for (;++r < i; ) if (t(e[r], r, e)) return !0;
      return !1;
    }
    function C(e, t) {
      return e.has(t);
    }
    function M(e) {
      var t = -1, r = Array(e.size);
      return e.forEach((function(e, i) {
        r[++t] = [ i, e ];
      })), r;
    }
    function D(e) {
      var t = -1, r = Array(e.size);
      return e.forEach((function(e) {
        r[++t] = e;
      })), r;
    }
    var k = Array.prototype, z = Function.prototype, q = Object.prototype;
    var $ = P['__core-js_shared__'];
    var H = z.toString;
    var V = q.hasOwnProperty;
    var J = function() {
      var e = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || '');
      return e ? 'Symbol(src)_1.' + e : '';
    }();
    var K = q.toString;
    var F = RegExp('^' + H.call(V).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    var B = T ? P.Buffer : void 0, W = P.Symbol, G = P.Uint8Array, Y = q.propertyIsEnumerable, X = k.splice, Z = W ? W.toStringTag : void 0;
    var Q = Object.getOwnPropertySymbols, ee = B ? B.isBuffer : void 0, te = function(e, t) {
      return function(r) {
        return e(t(r));
      };
    }(Object.keys, Object);
    var re = Te(P, 'DataView'), ie = Te(P, 'Map'), ne = Te(P, 'Promise'), se = Te(P, 'Set'), oe = Te(P, 'WeakMap'), ae = Te(Object, 'create');
    var ce = Le(re), he = Le(ie), ue = Le(ne), le = Le(se), pe = Le(oe);
    var fe = W ? W.prototype : void 0, de = fe ? fe.valueOf : void 0;
    function ge(e) {
      var t = -1, r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    function ye(e) {
      var t = -1, r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    function ve(e) {
      var t = -1, r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    function me(e) {
      var t = -1, r = null == e ? 0 : e.length;
      for (this.__data__ = new ve; ++t < r; ) this.add(e[t]);
    }
    function be(e) {
      var t = this.__data__ = new ye(e);
      this.size = t.size;
    }
    function we(e, t) {
      var r = De(e), i = !r && Me(e), n = !r && !i && ke(e), s = !r && !i && !n && Ve(e), o = r || i || n || s, a = o ? function(e, t) {
        var r = -1, i = Array(e);
        for (;++r < e; ) i[r] = t(r);
        return i;
      }(e.length, String) : [], c = a.length;
      for (var h in e) !t && !V.call(e, h) || o && ('length' == h || n && ('offset' == h || 'parent' == h) || s && ('buffer' == h || 'byteLength' == h || 'byteOffset' == h) || je(h, c)) || a.push(h);
      return a;
    }
    function _e(e, t) {
      var r = e.length;
      for (;r--; ) if (Ce(e[r][0], t)) return r;
      return -1;
    }
    function Ee(e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Z && Z in Object(e) ? function(e) {
        var t = V.call(e, Z), r = e[Z];
        try {
          e[Z] = void 0;
          var i = !0;
        } catch (s) {}
        var n = K.call(e);
        i && (t ? e[Z] = r : delete e[Z]);
        return n;
      }(e) : function(e) {
        return K.call(e);
      }(e);
    }
    function Se(e) {
      return He(e) && Ee(e) == s;
    }
    function Oe(e, t, r, i, n) {
      return e === t || (null == e || null == t || !He(e) && !He(t) ? e != e && t != t : function(e, t, r, i, n, u) {
        var d = De(e), b = De(t), E = d ? o : Ue(e), S = b ? o : Ue(t);
        var O = (E = E == s ? f : E) == f, I = (S = S == s ? f : S) == f, R = E == S;
        if (R && ke(e)) {
          if (!ke(t)) return !1;
          d = !0, O = !1;
        }
        if (R && !O) return u || (u = new be), d || Ve(e) ? Pe(e, t, r, i, n, u) : function(e, t, r, i, n, s, o) {
          switch (r) {
           case _:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;

           case w:
            return !(e.byteLength != t.byteLength || !s(new G(e), new G(t)));

           case a:
           case c:
           case p:
            return Ce(+e, +t);

           case h:
            return e.name == t.name && e.message == t.message;

           case g:
           case v:
            return e == t + '';

           case l:
            var u = M;

           case y:
            var f = 1 & i;
            if (u || (u = D), e.size != t.size && !f) return !1;
            var d = o.get(e);
            if (d) return d == t;
            i |= 2, o.set(e, t);
            var b = Pe(u(e), u(t), i, n, s, o);
            return o.delete(e), b;

           case m:
            if (de) return de.call(e) == de.call(t);
          }
          return !1;
        }(e, t, E, r, i, n, u);
        if (!(1 & r)) {
          var P = O && V.call(e, '__wrapped__'), N = I && V.call(t, '__wrapped__');
          if (P || N) {
            var x = P ? e.value() : e, T = N ? t.value() : t;
            return u || (u = new be), n(x, T, r, i, u);
          }
        }
        if (!R) return !1;
        return u || (u = new be), function(e, t, r, i, n, s) {
          var o = 1 & r, a = Ne(e), c = a.length, h = Ne(t).length;
          if (c != h && !o) return !1;
          var u = c;
          for (;u--; ) {
            var l = a[u];
            if (!(o ? l in t : V.call(t, l))) return !1;
          }
          var p = s.get(e);
          if (p && s.get(t)) return p == t;
          var f = !0;
          s.set(e, t), s.set(t, e);
          var d = o;
          for (;++u < c; ) {
            var g = e[l = a[u]], y = t[l];
            if (i) var v = o ? i(y, g, l, t, e, s) : i(g, y, l, e, t, s);
            if (!(void 0 === v ? g === y || n(g, y, r, i, s) : v)) {
              f = !1;
              break;
            }
            d || (d = 'constructor' == l);
          }
          if (f && !d) {
            var m = e.constructor, b = t.constructor;
            m == b || !('constructor' in e) || !('constructor' in t) || 'function' == typeof m && m instanceof m && 'function' == typeof b && b instanceof b || (f = !1);
          }
          return s.delete(e), s.delete(t), f;
        }(e, t, r, i, n, u);
      }(e, t, r, i, Oe, n));
    }
    function Ie(e) {
      return !(!$e(e) || function(e) {
        return !!J && J in e;
      }(e)) && (ze(e) ? F : E).test(Le(e));
    }
    function Re(e) {
      if (!function(e) {
        var t = e && e.constructor, r = 'function' == typeof t && t.prototype || q;
        return e === r;
      }(e)) return te(e);
      var t = [];
      for (var r in Object(e)) V.call(e, r) && 'constructor' != r && t.push(r);
      return t;
    }
    function Pe(e, t, r, i, n, s) {
      var o = 1 & r, a = e.length, c = t.length;
      if (a != c && !(o && c > a)) return !1;
      var h = s.get(e);
      if (h && s.get(t)) return h == t;
      var u = -1, l = !0, p = 2 & r ? new me : void 0;
      for (s.set(e, t), s.set(t, e); ++u < a; ) {
        var f = e[u], d = t[u];
        if (i) var g = o ? i(d, f, u, t, e, s) : i(f, d, u, e, t, s);
        if (void 0 !== g) {
          if (g) continue;
          l = !1;
          break;
        }
        if (p) {
          if (!L(t, (function(e, t) {
            if (!C(p, t) && (f === e || n(f, e, r, i, s))) return p.push(t);
          }))) {
            l = !1;
            break;
          }
        } else if (f !== d && !n(f, d, r, i, s)) {
          l = !1;
          break;
        }
      }
      return s.delete(e), s.delete(t), l;
    }
    function Ne(e) {
      return function(e, t, r) {
        var i = t(e);
        return De(e) ? i : function(e, t) {
          var r = -1, i = t.length, n = e.length;
          for (;++r < i; ) e[n + r] = t[r];
          return e;
        }(i, r(e));
      }(e, Je, Ae);
    }
    function xe(e, t) {
      var r = e.__data__;
      return function(e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e;
      }(t) ? r['string' == typeof t ? 'string' : 'hash'] : r.map;
    }
    function Te(e, t) {
      var r = function(e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return Ie(r) ? r : void 0;
    }
    ge.prototype.clear = function() {
      this.__data__ = ae ? ae(null) : {}, this.size = 0;
    }, ge.prototype.delete = function(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    }, ge.prototype.get = function(e) {
      var t = this.__data__;
      if (ae) {
        var r = t[e];
        return r === i ? void 0 : r;
      }
      return V.call(t, e) ? t[e] : void 0;
    }, ge.prototype.has = function(e) {
      var t = this.__data__;
      return ae ? void 0 !== t[e] : V.call(t, e);
    }, ge.prototype.set = function(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = ae && void 0 === t ? i : t, this;
    }, ye.prototype.clear = function() {
      this.__data__ = [], this.size = 0;
    }, ye.prototype.delete = function(e) {
      var t = this.__data__, r = _e(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : X.call(t, r, 1), --this.size, !0);
    }, ye.prototype.get = function(e) {
      var t = this.__data__, r = _e(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, ye.prototype.has = function(e) {
      return _e(this.__data__, e) > -1;
    }, ye.prototype.set = function(e, t) {
      var r = this.__data__, i = _e(r, e);
      return i < 0 ? (++this.size, r.push([ e, t ])) : r[i][1] = t, this;
    }, ve.prototype.clear = function() {
      this.size = 0, this.__data__ = {
        hash: new ge,
        map: new (ie || ye),
        string: new ge
      };
    }, ve.prototype.delete = function(e) {
      var t = xe(this, e).delete(e);
      return this.size -= t ? 1 : 0, t;
    }, ve.prototype.get = function(e) {
      return xe(this, e).get(e);
    }, ve.prototype.has = function(e) {
      return xe(this, e).has(e);
    }, ve.prototype.set = function(e, t) {
      var r = xe(this, e), i = r.size;
      return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
    }, me.prototype.add = me.prototype.push = function(e) {
      return this.__data__.set(e, i), this;
    }, me.prototype.has = function(e) {
      return this.__data__.has(e);
    }, be.prototype.clear = function() {
      this.__data__ = new ye, this.size = 0;
    }, be.prototype.delete = function(e) {
      var t = this.__data__, r = t.delete(e);
      return this.size = t.size, r;
    }, be.prototype.get = function(e) {
      return this.__data__.get(e);
    }, be.prototype.has = function(e) {
      return this.__data__.has(e);
    }, be.prototype.set = function(e, t) {
      var r = this.__data__;
      if (r instanceof ye) {
        var i = r.__data__;
        if (!ie || i.length < 199) return i.push([ e, t ]), this.size = ++r.size, this;
        r = this.__data__ = new ve(i);
      }
      return r.set(e, t), this.size = r.size, this;
    };
    var Ae = Q ? function(e) {
      return null == e ? [] : (e = Object(e), function(e, t) {
        var r = -1, i = null == e ? 0 : e.length, n = 0, s = [];
        for (;++r < i; ) {
          var o = e[r];
          t(o, r, e) && (s[n++] = o);
        }
        return s;
      }(Q(e), (function(t) {
        return Y.call(e, t);
      })));
    } : function() {
      return [];
    };
    var Ue = Ee;
    function je(e, t) {
      return !!(t = null == t ? n : t) && ('number' == typeof e || S.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function Le(e) {
      if (null != e) {
        try {
          return H.call(e);
        } catch (t) {}
        try {
          return e + '';
        } catch (t) {}
      }
      return '';
    }
    function Ce(e, t) {
      return e === t || e != e && t != t;
    }
    (re && Ue(new re(new ArrayBuffer(1))) != _ || ie && Ue(new ie) != l || ne && Ue(ne.resolve()) != d || se && Ue(new se) != y || oe && Ue(new oe) != b) && (Ue = function(e) {
      var t = Ee(e), r = t == f ? e.constructor : void 0, i = r ? Le(r) : '';
      if (i) switch (i) {
       case ce:
        return _;

       case he:
        return l;

       case ue:
        return d;

       case le:
        return y;

       case pe:
        return b;
      }
      return t;
    });
    var Me = Se(function() {
      return arguments;
    }()) ? Se : function(e) {
      return He(e) && V.call(e, 'callee') && !Y.call(e, 'callee');
    };
    var De = Array.isArray;
    var ke = ee || function() {
      return !1;
    };
    function ze(e) {
      if (!$e(e)) return !1;
      var t = Ee(e);
      return t == u || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    }
    function qe(e) {
      return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= n;
    }
    function $e(e) {
      var t = typeof e;
      return null != e && ('object' == t || 'function' == t);
    }
    function He(e) {
      return null != e && 'object' == typeof e;
    }
    var Ve = j ? function(e) {
      return function(t) {
        return e(t);
      };
    }(j) : function(e) {
      return He(e) && qe(e.length) && !!O[Ee(e)];
    };
    function Je(e) {
      return function(e) {
        return null != e && qe(e.length) && !ze(e);
      }(e) ? we(e) : Re(e);
    }
    e.exports = function(e, t) {
      return Oe(e, t);
    };
  },
  8103: e => {
    "use strict";
    function t(e) {
      try {
        return JSON.stringify(e);
      } catch (t) {
        return '"[Circular]"';
      }
    }
    e.exports = function(e, r, i) {
      var n = i && i.stringify || t;
      if ('object' == typeof e && null !== e) {
        var s = r.length + 1;
        if (1 === s) return e;
        var o = new Array(s);
        o[0] = n(e);
        for (var a = 1; a < s; a++) o[a] = n(r[a]);
        return o.join(' ');
      }
      if ('string' != typeof e) return e;
      var c = r.length;
      if (0 === c) return e;
      var h = '';
      var u = 0;
      var l = -1;
      var p = e && e.length || 0;
      for (var f = 0; f < p; ) {
        if (37 === e.charCodeAt(f) && f + 1 < p) {
          switch (l = l > -1 ? l : 0, e.charCodeAt(f + 1)) {
           case 100:
           case 102:
            if (u >= c) break;
            if (null == r[u]) break;
            l < f && (h += e.slice(l, f)), h += Number(r[u]), l = f + 2, f++;
            break;

           case 105:
            if (u >= c) break;
            if (null == r[u]) break;
            l < f && (h += e.slice(l, f)), h += Math.floor(Number(r[u])), l = f + 2, f++;
            break;

           case 79:
           case 111:
           case 106:
            if (u >= c) break;
            if (void 0 === r[u]) break;
            l < f && (h += e.slice(l, f));
            var d = typeof r[u];
            if ('string' === d) {
              h += '\'' + r[u] + '\'', l = f + 2, f++;
              break;
            }
            if ('function' === d) {
              h += r[u].name || '<anonymous>', l = f + 2, f++;
              break;
            }
            h += n(r[u]), l = f + 2, f++;
            break;

           case 115:
            if (u >= c) break;
            l < f && (h += e.slice(l, f)), h += String(r[u]), l = f + 2, f++;
            break;

           case 37:
            l < f && (h += e.slice(l, f)), h += '%', l = f + 2, f++, u--;
          }
          ++u;
        }
        ++f;
      }
      if (-1 === l) return e;
      l < p && (h += e.slice(l));
      return h;
    };
  },
  7182: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.safeJsonParse = function(e) {
      if ('string' != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
      try {
        return JSON.parse(e);
      } catch (t) {
        return e;
      }
    }, t.safeJsonStringify = function(e) {
      return 'string' == typeof e ? e : JSON.stringify(e, ((e, t) => void 0 === t ? null : t));
    };
  },
  2704: e => {
    "use strict";
    e.exports = (e, t) => {
      if ('string' != typeof e || 'string' != typeof t) throw new TypeError('Expected the arguments to be of type `string`');
      if ('' === t) return [ e ];
      const r = e.indexOf(t);
      return -1 === r ? [ e ] : [ e.slice(0, r), e.slice(r + t.length) ];
    };
  },
  9449: e => {
    "use strict";
    e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`));
  },
  286: e => {
    "use strict";
    e.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  },
  7389: (e, t, r) => {
    "use strict";
    const i = r(8103);
    e.exports = o;
    const n = function() {
      function e(e) {
        return void 0 !== e && e;
      }
      try {
        return 'undefined' != typeof globalThis || Object.defineProperty(Object.prototype, 'globalThis', {
          get: function() {
            return delete Object.prototype.globalThis, this.globalThis = this;
          },
          configurable: !0
        }), globalThis;
      } catch (t) {
        return e(self) || e(window) || e(this) || {};
      }
    }().console || {};
    const s = {
      mapHttpRequest: d,
      mapHttpResponse: d,
      wrapRequestSerializer: g,
      wrapResponseSerializer: g,
      wrapErrorSerializer: g,
      req: d,
      res: d,
      err: function(e) {
        const t = {
          type: e.constructor.name,
          msg: e.message,
          stack: e.stack
        };
        for (const r in e) void 0 === t[r] && (t[r] = e[r]);
        return t;
      }
    };
    function o(e) {
      (e = e || {}).browser = e.browser || {};
      const t = e.browser.transmit;
      if (t && 'function' != typeof t.send) throw Error('pino: transmit option must have a send function');
      const r = e.browser.write || n;
      e.browser.write && (e.browser.asObject = !0);
      const i = e.serializers || {};
      const s = function(e, t) {
        if (Array.isArray(e)) return e.filter((function(e) {
          return '!stdSerializers.err' !== e;
        }));
        return !0 === e && Object.keys(t);
      }(e.browser.serialize, i);
      let c = e.browser.serialize;
      Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf('!stdSerializers.err') > -1 && (c = !1);
      'function' == typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === e.enabled && (e.level = 'silent');
      const l = e.level || 'info';
      const d = Object.create(r);
      d.log || (d.log = y), Object.defineProperty(d, 'levelVal', {
        get: function() {
          return 'silent' === this.level ? Infinity : this.levels.values[this.level];
        }
      }), Object.defineProperty(d, 'level', {
        get: function() {
          return this._level;
        },
        set: function(e) {
          if ('silent' !== e && !this.levels.values[e]) throw Error('unknown level ' + e);
          this._level = e, a(g, d, 'error', 'log'), a(g, d, 'fatal', 'error'), a(g, d, 'warn', 'error'), a(g, d, 'info', 'log'), a(g, d, 'debug', 'log'), 
          a(g, d, 'trace', 'log');
        }
      });
      const g = {
        transmit: t,
        serialize: s,
        asObject: e.browser.asObject,
        levels: [ 'error', 'fatal', 'warn', 'info', 'debug', 'trace' ],
        timestamp: f(e)
      };
      return d.levels = o.levels, d.level = l, d.setMaxListeners = d.getMaxListeners = d.emit = d.addListener = d.on = d.prependListener = d.once = d.prependOnceListener = d.removeListener = d.removeAllListeners = d.listeners = d.listenerCount = d.eventNames = d.write = d.flush = y, 
      d.serializers = i, d._serialize = s, d._stdErrSerialize = c, d.child = function(r, n) {
        if (!r) throw new Error('missing bindings for child Pino');
        n = n || {}, s && r.serializers && (n.serializers = r.serializers);
        const o = n.serializers;
        if (s && o) {
          var a = Object.assign({}, i, o);
          var c = !0 === e.browser.serialize ? Object.keys(a) : s;
          delete r.serializers, h([ r ], c, a, this._stdErrSerialize);
        }
        function l(e) {
          this._childLevel = 1 + (0 | e._childLevel), this.error = u(e, r, 'error'), this.fatal = u(e, r, 'fatal'), this.warn = u(e, r, 'warn'), 
          this.info = u(e, r, 'info'), this.debug = u(e, r, 'debug'), this.trace = u(e, r, 'trace'), a && (this.serializers = a, this._serialize = c), 
          t && (this._logEvent = p([].concat(e._logEvent.bindings, r)));
        }
        return l.prototype = this, new l(this);
      }, t && (d._logEvent = p()), d;
    }
    function a(e, t, r, i) {
      const s = Object.getPrototypeOf(t);
      t[r] = t.levelVal > t.levels.values[r] ? y : s[r] ? s[r] : n[r] || n[i] || y, function(e, t, r) {
        if (!e.transmit && t[r] === y) return;
        t[r] = function(i) {
          return function() {
            const s = e.timestamp();
            const a = new Array(arguments.length);
            const u = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
            for (var p = 0; p < a.length; p++) a[p] = arguments[p];
            if (e.serialize && !e.asObject && h(a, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? i.call(u, c(this, r, a, s)) : i.apply(u, a), 
            e.transmit) {
              const i = e.transmit.level || t.level;
              const n = o.levels.values[i];
              const c = o.levels.values[r];
              if (c < n) return;
              l(this, {
                ts: s,
                methodLevel: r,
                methodValue: c,
                transmitLevel: i,
                transmitValue: o.levels.values[e.transmit.level || t.level],
                send: e.transmit.send,
                val: t.levelVal
              }, a);
            }
          };
        }(t[r]);
      }(e, t, r);
    }
    function c(e, t, r, n) {
      e._serialize && h(r, e._serialize, e.serializers, e._stdErrSerialize);
      const s = r.slice();
      let a = s[0];
      const c = {};
      n && (c.time = n), c.level = o.levels.values[t];
      let u = 1 + (0 | e._childLevel);
      if (u < 1 && (u = 1), null !== a && 'object' == typeof a) {
        for (;u-- && 'object' == typeof s[0]; ) Object.assign(c, s.shift());
        a = s.length ? i(s.shift(), s) : void 0;
      } else 'string' == typeof a && (a = i(s.shift(), s));
      return void 0 !== a && (c.msg = a), c;
    }
    function h(e, t, r, i) {
      for (const n in e) if (i && e[n] instanceof Error) e[n] = o.stdSerializers.err(e[n]); else if ('object' == typeof e[n] && !Array.isArray(e[n])) for (const i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]));
    }
    function u(e, t, r) {
      return function() {
        const i = new Array(1 + arguments.length);
        i[0] = t;
        for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
        return e[r].apply(this, i);
      };
    }
    function l(e, t, r) {
      const i = t.send;
      const n = t.ts;
      const s = t.methodLevel;
      const o = t.methodValue;
      const a = t.val;
      const c = e._logEvent.bindings;
      h(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, 
      e._logEvent.messages = r.filter((function(e) {
        return -1 === c.indexOf(e);
      })), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, a), e._logEvent = p(c);
    }
    function p(e) {
      return {
        ts: 0,
        messages: [],
        bindings: e || [],
        level: {
          label: '',
          value: 0
        }
      };
    }
    function f(e) {
      return 'function' == typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? v : m;
    }
    function d() {
      return {};
    }
    function g(e) {
      return e;
    }
    function y() {}
    function v() {
      return !1;
    }
    function m() {
      return Date.now();
    }
    o.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
      }
    }, o.stdSerializers = s, o.stdTimeFunctions = Object.assign({}, {
      nullTime: v,
      epochTime: m,
      unixTime: function() {
        return Math.round(Date.now() / 1e3);
      },
      isoTime: function() {
        return new Date(Date.now()).toISOString();
      }
    });
  }
} ]);
//# sourceMappingURL=133.3aad2929.js.map