"use strict";
window.KeyshapeJS = function () {
    function t(a) { return "undefined" !== typeof a; }
    function x(a, b) { return a && 0 == a.indexOf(b); }
    function R(a) { var b = {}, c; for (c in a)
        b[c] = a[c]; return b; }
    function H(a) { if (!isFinite(a))
        throw Error("Non-finite value"); }
    function S(a) { if (14 >= a)
        return 16; var b = T[a]; b || (b = t(da[a]) ? 0 | (a.toLowerCase().indexOf("color") == a.length - 5 ? 48 : 0) : 1); return b; }
    function K(a) { return 0 <= a ? Math.pow(a, 1 / 3) : -Math.pow(-a, 1 / 3); }
    function ea(a, b, c, d) {
        if (0 == a)
            return 0 == b ? b = -d / c : (a = Math.sqrt(c * c - 4 * b * d), d = (-c + a) / (2 *
                b), 0 <= d && 1 >= d ? b = d : (d = (-c - a) / (2 * b), b = 0 <= d && 1 >= d ? d : 0)), b;
        var e = c / a - b * b / (a * a) / 3;
        c = b * b * b / (a * a * a) / 13.5 - b * c / (a * a) / 3 + d / a;
        var n = c * c / 4 + e * e * e / 27;
        b = -b / (3 * a);
        if (0 >= n) {
            if (0 == e && 0 == c)
                return -K(d / a);
            a = Math.sqrt(c * c / 4 - n);
            d = Math.acos(-c / 2 / a);
            c = Math.cos(d / 3);
            d = Math.sqrt(3) * Math.sin(d / 3);
            a = K(a);
            e = 2 * a * c + b;
            if (0 <= e && 1 >= e)
                return e;
            e = -a * (c + d) + b;
            if (0 <= e && 1 >= e)
                return e;
            e = a * (d - c) + b;
            if (0 <= e && 1 >= e)
                return e;
        }
        else {
            a = K(-c / 2 + Math.sqrt(n));
            c = K(-c / 2 - Math.sqrt(n));
            d = a + c + b;
            if (0 <= d && 1 >= d)
                return d;
            d = -(a + c) / 2 + b;
            if (0 <= d && 1 >= d)
                return d;
        }
        return 0;
    }
    function fa(a, b) {
        if (48 == a && "number" === typeof b)
            return "rgba(" + (b >>> 24) + "," + (b >>> 16 & 255) + "," + (b >>> 8 & 255) + "," + (b & 255) / 255 + ")";
        if (64 == a)
            return b = b.map(function (a) { return a + "px"; }), b.join(",");
        if (96 == a) {
            a = "";
            for (var c = b.length, d = 0; d < c; d += 2)
                a += b[d], a += b[d + 1].join(",");
            return a;
        }
        if (80 == a) {
            if (0 == b[0])
                return "none";
            a = "";
            c = b.length;
            for (d = 0; d < c;)
                a += U[b[d]], 1 == b[d] ? a += "(" + b[d + 1] + ") " : 5 == b[d] ? (a += "(" + b[d + 1] + "px " + b[d + 2] + "px " + b[d + 3] + "px rgba(" + (b[d + 4] >>> 24) + "," + (b[d + 4] >> 16 & 255) + "," + (b[d + 4] >> 8 & 255) + "," + (b[d + 4] & 255) /
                    255 + ")) ", d += 3) : a = 2 == b[d] ? a + ("(" + b[d + 1] + "px) ") : 7 == b[d] ? a + ("(" + b[d + 1] + "deg) ") : a + ("(" + (0 > b[d + 1] ? 0 : b[d + 1]) + ") "), d += 2;
            return a;
        }
        return 32 == a ? b + "px" : b;
    }
    function y(a) { return 0 >= a ? 0 : 255 <= a ? 255 : a; }
    function ha(a, b, c, d) {
        if (16 == a || 32 == a)
            return (c - b) * d + b;
        if (0 == a)
            return .5 > d ? b : c;
        if (48 == a) {
            if ("number" === typeof b && "number" === typeof c) {
                var e = 1 - d;
                return (y(e * (b >>> 24) + d * (c >>> 24)) << 24 | y(e * (b >>> 16 & 255) + d * (c >>> 16 & 255)) << 16 | y(e * (b >>> 8 & 255) + d * (c >>> 8 & 255)) << 8 | y(e * (b & 255) + d * (c & 255))) >>> 0;
            }
            return .5 > d ? b : c;
        }
        if (64 == a) {
            0 == b.length &&
                (b = [0]);
            0 == c.length && (c = [0]);
            var n = b.length;
            b.length != c.length && (n = b.length * c.length);
            var q = [];
            for (a = 0; a < n; ++a) {
                var h = b[a % b.length];
                var g = (c[a % c.length] - h) * d + h;
                0 > g && (g = 0);
                q.push(g);
            }
            return q;
        }
        if (96 == a) {
            if (b.length != c.length)
                return .5 > d ? b : c;
            n = b.length;
            q = [];
            for (a = 0; a < n; a += 2) {
                if (b[a] !== c[a])
                    return .5 > d ? b : c;
                q[a] = b[a];
                q[a + 1] = [];
                for (h = 0; h < b[a + 1].length; ++h)
                    q[a + 1].push((c[a + 1][h] - b[a + 1][h]) * d + b[a + 1][h]);
            }
            return q;
        }
        if (80 == a) {
            n = b.length;
            if (n != c.length)
                return .5 > d ? b : c;
            q = [];
            for (a = 0; a < n;) {
                if (b[a] != c[a] || 1 == b[a])
                    return .5 >
                        d ? b : c;
                q[a] = b[a];
                q[a + 1] = (c[a + 1] - b[a + 1]) * d + b[a + 1];
                if (5 == b[a]) {
                    q[a + 2] = (c[a + 2] - b[a + 2]) * d + b[a + 2];
                    q[a + 3] = (c[a + 3] - b[a + 3]) * d + b[a + 3];
                    e = 1 - d;
                    var f = b[a + 4], l = c[a + 4];
                    g = e * (f >>> 24) + d * (l >>> 24);
                    var m = e * (f >> 16 & 255) + d * (l >> 16 & 255);
                    h = e * (f >> 8 & 255) + d * (l >> 8 & 255);
                    e = e * (f & 255) + d * (l & 255);
                    q[a + 4] = (y(m) << 16 | y(h) << 8 | y(e)) + 16777216 * (y(g) | 0);
                    a += 3;
                }
                a += 2;
            }
            return q;
        }
        return 0;
    }
    function V(a, b) {
        a: {
            var c = a + b[2];
            var d = b[4].length;
            for (var e = 0; e < d; ++e)
                if (c < b[4][e]) {
                    c = e;
                    break a;
                }
            c = d - 1;
        }
        d = b[2];
        e = b[4][c - 1] - d;
        a = (a - e) / (b[4][c] - d - e);
        if (b[6] && b[6].length >
            c - 1)
            if (d = b[6][c - 1], 1 == d[0])
                if (0 >= a)
                    a = 0;
                else if (1 <= a)
                    a = 1;
                else {
                    e = d[1];
                    var n = d[3];
                    a = ea(3 * e - 3 * n + 1, -6 * e + 3 * n, 3 * e, -a);
                    a = 3 * a * (1 - a) * (1 - a) * d[2] + 3 * a * a * (1 - a) * d[4] + a * a * a;
                }
            else
                2 == d[0] ? (d = d[1], a = Math.ceil(a * d) / d) : 3 == d[0] && (d = d[1], a = Math.floor(a * d) / d);
        return ha(b[1] & 240, b[5][c - 1], b[5][c], a);
    }
    function L() { u || (v = (new Date).getTime() + W); }
    function O(a) {
        if (a || !E) {
            for (var b = !1, c = 0; c < w.length; ++c)
                w[c].J(a) && (b = !0);
            if (a)
                for (; 0 < I.length;)
                    if (a = I.shift(), c = a[0], 1 == a[1])
                        c.onfinish && (c.onfinish(), b = !0), c.I();
                    else if (2 == a[1] && c.onloop)
                        c.onloop();
            return b;
        }
    }
    function X() { L(); O(!0) && !u ? (E = !0, M(X)) : E = !1; }
    function N() { E || (E = !0, M(X)); }
    function Y(a, b) { var c = []; a.split(b).forEach(function (a) { c.push(parseFloat(a)); }); return c; }
    function A(a) { -1 == a.indexOf(",") && (a = a.replace(" ", ",")); return Y(a, ","); }
    function Z(a) {
        a._ks || (a._ks = {});
        if (!a._ks.transform) {
            for (var b = a._ks.transform = [], c = 0; 14 >= c; ++c)
                b[c] = 0;
            b[10] = 1;
            b[11] = 1;
            if (a = a.getAttribute("transform")) {
                a = a.trim().split(") ");
                for (c = a.length - 2; 0 <= c; --c)
                    if (x(a[c], "translate(")) {
                        for (var d = 0; d < c; d++)
                            a.shift();
                        break;
                    }
                c = a.shift();
                x(c, "translate(") && (c = A(c.substring(10)), b[1] = c[0], b[2] = t(c[1]) ? c[1] : 0, c = a.shift());
                x(c, "rotate(") && (c = A(c.substring(7)), b[6] = c[0], c = a.shift());
                x(c, "skewX(") && (c = A(c.substring(6)), b[7] = c[0], c = a.shift());
                x(c, "skewY(") && (c = A(c.substring(6)), b[8] = c[0], c = a.shift());
                x(c, "scale(") && (c = A(c.substring(6)), b[10] = c[0], b[11] = t(c[1]) ? c[1] : c[0], c = a.shift());
                x(c, "translate(") && (c = A(c.substring(10)), b[13] = c[0], b[14] = t(c[1]) ? c[1] : 0);
            }
        }
    }
    function aa(a) {
        this.h = a;
        this.A = [];
        this.C = [];
        this.v = 0;
        this.s = this.a =
            this.c = null;
        this.i = this.f = this.g = 0;
        this.b = 1;
        this.j = this.F = this.o = !1;
    }
    function J(a, b, c) { b = a[b]; void 0 === b && (b = a[c]); return b; }
    function ia(a) { return Array.isArray(a) ? a : x(a, "cubic-bezier(") ? (a = a.substring(13, a.length - 1).split(","), [1, parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3])]) : x(a, "steps(") ? (a = a.substring(6, a.length - 1).split(","), [a[1] && "start" == a[1].trim() ? 2 : 3, parseFloat(a[0])]) : [0]; }
    function ja(a) {
        a = a.trim();
        return x(a, "#") ? (parseInt(a.substring(1), 16) << 8) + 255 : x(a, "rgba(") ? (a =
            a.substring(5, a.length - 1), a = a.split(","), (parseInt(a[0], 10) << 24) + (parseInt(a[1], 10) << 16) + (parseInt(a[2], 10) << 8) + 255 * parseFloat(a[3]) << 0) : a;
    }
    function ba(a) { !1 === a.j && (w.push(a), a.j = !0, !1 !== a.h.autoplay && a.play()); return this; }
    function P(a) { if (!0 === a.j) {
        a._cancel();
        var b = w.indexOf(a);
        -1 < b && w.splice(b, 1);
        b = I.indexOf(a);
        -1 < b && I.splice(b, 1);
        a.j = !1;
    } return this; }
    var Q = Error("Not in timeline list"), ca = "mpath posX posY    rotate skewX skewY  scaleX scaleY  anchorX anchorY".split(" "), ka = " translate translate    rotate skewX skewY  scale scale  translate translate".split(" "), U = "none url blur brightness contrast drop-shadow grayscale hue-rotate invert opacity saturate sepia".split(" "), M = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
    M || (M = function (a) { window.setTimeout(a, 16); });
    var la = navigator.vendor.match(/apple/i), T = { d: 97, fill: 48, fillOpacity: 16, filter: 80, height: 33, opacity: 16, offsetDistance: 33, stroke: 48, strokeDasharray: 64, strokeDashoffset: 32, strokeOpacity: 16,
        strokeWidth: 32, transform: 1, width: 33 }, da = window.getComputedStyle(document.documentElement), E = !1, v = (new Date).getTime(), u, W = 0, w = [], I = [];
    aa.prototype = { B: function (a) {
            var b = 0;
            if (null !== this.c) {
                var c = this.l();
                0 < this.b && null !== c && c >= this.f ? this.i ? (this.c = v - this.g / this.b, this.i--, b = 2) : (b = 1, a ? this.a = c : this.a = this.s ? Math.max(this.s, this.f) : this.f) : 0 > this.b && null !== c && c <= this.g ? this.i && Infinity != this.f ? (this.c = v - this.f / this.b, this.i--, b = 2) : (this.i = 0, b = 1, a ? this.a = c : this.a = this.s ? Math.min(this.s, this.g) : this.g) :
                    null !== c && 0 != this.b && (a && null !== this.a && (this.c = v - this.a / this.b), this.a = null);
            }
            this.s = this.l();
            return b;
        }, J: function (a) {
            a && (this.o && (this.o = !1, null === this.c && (0 != this.b && null !== this.a ? (this.c = v - this.a / this.b, this.a = null) : this.c = v)), null === this.a && null !== this.c && (a = this.B(!1), 0 != a && I.push([this, a])));
            a = this.l();
            if (null === a)
                return !1;
            for (var b = this.A, c = this.C, d = 0; d < b.length; ++d) {
                for (var e = b[d], n = !1, q = 0; q < c[d].length; ++q) {
                    var h = c[d][q], g = h[0];
                    if (null !== g) {
                        var f = h[2];
                        var l = h[4].length, m = h[4][l - 1] - f;
                        f = 0 ==
                            m ? h[5][l - 1] : a <= f ? h[5][0] : a >= f + h[3] ? 0 == h[3] % m ? h[5][l - 1] : V(h[3] % m, h) : V((a - f) % m, h);
                        0 == g ? (e._ks.mpath = h[8], e._ks.transform[g] = f, n = !0) : 14 >= g ? (e._ks.transform[g] = f, n = !0) : (f = fa(h[1] & 240, f), h[1] & 1 ? e.setAttribute(g, f) : e.style[g] = f);
                    }
                }
                if (n) {
                    n = e;
                    Z(n);
                    q = n._ks.transform;
                    h = "";
                    if (g = n._ks.mpath)
                        l = q[0], 0 > l && (l = 0), 100 < l && (l = 100), l = l * g[2] / 100, f = g[1].getPointAtLength(l), h = "translate(" + f.x + "," + f.y + ") ", g[0] && (.5 > l ? (l = f, f = g[1].getPointAtLength(.5)) : l = g[1].getPointAtLength(l - .5), h += "rotate(" + 180 * Math.atan2(f.y - l.y, f.x - l.x) /
                            Math.PI + ") ");
                    for (g = 1; g < q.length; ++g)
                        f = q[g], f != (10 == g || 11 == g ? 1 : 0) && (h += " " + ka[g] + "(", h = 2 >= g ? h + (1 == g ? f + ",0" : "0," + f) : 13 <= g ? h + (13 == g ? f + ",0" : "0," + f) : 10 <= g ? h + (10 == g ? f + ",1" : "1," + f) : h + f, h += ")");
                    n.setAttribute("transform", h);
                }
                la && e.setAttribute("opacity", e.getAttribute("opacity"));
            }
            return "running" == this.m();
        }, I: function () { !1 !== this.h.autoremove && "finished" == this.m() && P(this); }, D: function () {
            if (!this.F) {
                this.F = !0;
                for (var a = this.A, b = this.C, c = 0; c < a.length; ++c)
                    for (var d = a[c], e = 0; e < b[c].length; ++e)
                        14 >= b[c][e][0] &&
                            Z(d);
            }
        }, u: function (a) { if ("number" == typeof a)
            return a; if (!t(this.h.markers) || !t(this.h.markers[a]))
            throw Error("Invalid marker: " + a); return +this.h.markers[a]; }, play: function (a) {
            t(a) && null !== a && (a = this.u(a), H(a), 0 > this.b && a < this.g && (a = this.g), 0 < this.b && a > this.f && (a = this.f), this.w(a, !0));
            if (!this.j)
                throw Q;
            a = this.l();
            if (0 < this.b && (null === a || a >= this.f))
                this.a = this.g;
            else if (0 > this.b && (null === a || a <= this.g)) {
                if (Infinity == this.f)
                    throw Error("Cannot seek to Infinity");
                this.a = this.f;
            }
            else
                0 == this.b && null === a &&
                    (this.a = this.g);
            if (null === this.a)
                return this;
            this.c = null;
            this.o = !0;
            this.D();
            N();
            return this;
        }, pause: function (a) { if (!this.j)
            throw Q; t(a) && (a = this.u(a), H(a)); if ("paused" != this.m()) {
            L();
            var b = this.l();
            if (null === b)
                if (0 <= this.b)
                    this.a = this.g;
                else {
                    if (Infinity == this.f)
                        throw Error("Cannot seek to Infinity");
                    this.a = this.f;
                }
            null !== this.c && null === this.a && (this.a = b);
            this.c = null;
            this.o = !1;
            this.B(!1);
            this.D();
            N();
        } t(a) && this.w(a, !0); return this; }, range: function (a, b) {
            if (0 == arguments.length)
                return { "in": this.g, out: this.f };
            var c = this.u(a), d = this.v;
            t(b) && (d = this.u(b));
            H(c);
            if (0 > c || 0 > d || c >= d || isNaN(d))
                throw Error("Invalid range");
            var e = this.m();
            this.g = c;
            this.f = d;
            "finished" == e && "running" == this.m() && this.play();
            return this;
        }, loop: function (a) { if (!t(a))
            return { count: this.i }; this.i = !0 === a ? Infinity : Math.floor(a); if (0 > this.i || isNaN(this.i))
            this.i = 0; return this; }, l: function () { return null !== this.a ? this.a : null === this.c ? null : (v - this.c) * this.b; }, w: function (a, b) {
            b && L();
            null !== a && (this.D(), null !== this.a || null === this.c || 0 == this.b ? (this.a =
                a, O(!1)) : this.c = v - a / this.b, this.j || (this.c = null), this.s = null, this.B(!0), N());
        }, G: function () { return this.l(); }, time: function (a) { if (t(a)) {
            if (!this.j)
                throw Q;
            a = this.u(a);
            H(a);
            this.w(a, !0);
            return this;
        } return this.G(); }, m: function () { var a = this.l(); return this.o ? "running" : null === a ? "idle" : null === this.c ? "paused" : 0 < this.b && a >= this.f || 0 > this.b && a <= this.g ? "finished" : "running"; }, state: function () { return this.m(); }, duration: function () { return this.v; }, H: function (a) {
            H(a);
            L();
            var b = this.l();
            this.b = a;
            null !== b && this.w(b, !1);
        }, rate: function (a) { return t(a) ? (this.H(a), this) : this.b; }, markers: function (a) { return t(a) ? (this.h.markers = R(a), this) : t(this.h.markers) ? this.h.markers : {}; }, marker: function (a) { return t(this.h.markers) ? this.h.markers[a] : void 0; }, _cancel: function () { if (!this.j || "idle" == this.m())
            return this; this.c = this.a = null; this.o = !1; return this; } };
    return { version: "1.1.1", animate: function () {
            var a = {};
            1 == arguments.length % 2 && (a = R(arguments[arguments.length - 1]));
            a = new aa(a);
            for (var b = arguments, c = 0, d = 0; d < b.length - 1; d += 2) {
                var e = b[d];
                var n = e instanceof Element ? e : document.getElementById(e.substring(1));
                if (!n)
                    throw Error("Invalid target: " + e);
                e = n;
                n = b[d + 1];
                e._ks || (e._ks = {});
                for (var q = [], h = 0; h < n.length; ++h) {
                    var g = n[h], f = J(g, "p", "property");
                    if ("string" != typeof f || -1 != f.indexOf("-") || "" === f || !(0 < T[f] || 0 <= ca.indexOf(f)))
                        throw Error("Invalid property: " + f);
                    var l = ca.indexOf(f);
                    "" !== f && 0 <= l && (f = l);
                    l = S(f);
                    var m = J(g, "t", "times");
                    if (!m || 2 > m.length)
                        throw Error("Not enough times");
                    m = m.slice();
                    if (!isFinite(m[0]) || 0 > m[0])
                        throw Error("Invalid time: " +
                            m[0]);
                    for (var B = 1; B < m.length; ++B)
                        if (!isFinite(m[B]) || 0 > m[B] || m[B] < m[B - 1])
                            throw Error("Invalid time: " + m[B]);
                    B = m[0];
                    var v = m[m.length - 1] - B, y = g.iterations || 0;
                    1 > y && (y = 1);
                    v *= y;
                    c < v + B && (c = v + B);
                    var u = J(g, "v", "values");
                    if (!u || u.length != m.length)
                        throw Error("Values do not match times");
                    u = u.slice();
                    for (var C = f, k = u, w = S(C) & 240, p = 0; p < k.length; ++p)
                        if (96 == w) {
                            for (var G = k[p].substring(6, k[p].length - 2).match(/[A-DF-Za-df-z][-+0-9eE., ]*/ig), A = [], r = 0; r < G.length; ++r) {
                                A.push(G[r][0]);
                                for (var z = 1 < G[r].trim().length ? G[r].substring(1).split(",") :
                                    [], F = 0; F < z.length; ++F)
                                    z[F] = parseFloat(z[F]);
                                A.push(z);
                            }
                            k[p] = A;
                        }
                        else if (48 == w)
                            x(k[p], "#") ? (G = 9 == k[p].length, k[p] = parseInt(k[p].substring(1), 16), G || (k[p] = 256 * k[p] | 255)) : x(k[p], "url(") || "none" == k[p] || (console.warn("unsupported color: " + k[p]), k[p] = 0);
                        else if (80 == w) {
                            G = k;
                            A = p;
                            r = k[p];
                            if ("none" == r)
                                r = [0];
                            else {
                                z = [];
                                for (var D = r.indexOf("("); 0 < D;)
                                    if (F = U.indexOf(r.substring(0, D)), 0 <= F) {
                                        z.push(F);
                                        var E = r.indexOf(") ");
                                        0 > E && (E = r.length - 1);
                                        D = r.substring(D + 1, E).split(" ");
                                        5 == F ? (z.push(parseFloat(D[0])), z.push(parseFloat(D[1])),
                                            z.push(parseFloat(D[2])), z.push(ja(D[3]))) : 1 == F ? z.push(D[0]) : z.push(parseFloat(D[0]));
                                        r = r.substring(E + 1).trim();
                                        D = r.indexOf("(");
                                    }
                                    else
                                        break;
                                r = z;
                            }
                            G[A] = r;
                        }
                        else
                            64 == w ? "none" != k[p] ? /^[0-9 .]*$/.test(k[p]) ? k[p] = Y(k[p], " ") : (console.warn("unsupported value: " + k[p]), k[p] = [0]) : k[p] = [0] : 32 == w ? (H(k[p]), k[p] = parseFloat(k[p])) : 0 === C && (k[p] = parseFloat(k[p]));
                    C = J(g, "e", "easing");
                    k = m.length;
                    for (C || (C = []); C.length < k;)
                        C.push([1, 0, 0, .58, 1]);
                    for (k = 0; k < C.length; ++k)
                        C[k] = ia(C[k]);
                    l = [f, l, B, v, m, u, C, y];
                    m = J(g, "mp", "motionPath");
                    t(m) && 0 === f && (l[8] = [], l[8][0] = g.motionRotate, g = document.createElementNS("http://www.w3.org/2000/svg", "path"), m || (m = "M0,0"), g.setAttribute("d", m), l[8][1] = g, l[8][2] = g.getTotalLength());
                    q.push(l);
                }
                0 < q.length && (a.A.push(e), a.C.push(q));
            }
            a.v = c;
            a.g = 0;
            a.f = a.v;
            ba(a);
            return a;
        }, add: ba, remove: P, removeAll: function () { for (var a = w.length - 1; 0 <= a; --a)
            P(w[a]); return this; }, timelines: function () { return w.slice(); }, globalPlay: function () { u && (W = u - (new Date).getTime(), u = void 0, N()); return this; }, globalPause: function () {
            u || (u =
                v, O(!1));
            return this;
        }, globalState: function () { return u ? "paused" : "running"; } };
}();
//# sourceMappingURL=keyShape.js.map