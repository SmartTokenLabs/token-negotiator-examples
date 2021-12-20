"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
(function () { var e = { 3900: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { AbiCoder: function () { return ee; }, ConstructorFragment: function () { return w; }, EventFragment: function () { return y; }, FormatTypes: function () { return d; }, Fragment: function () { return b; }, FunctionFragment: function () { return E; }, Indexed: function () { return se; }, Interface: function () { return le; }, LogDescription: function () { return oe; }, ParamType: function () { return g; }, TransactionDescription: function () { return ae; }, checkResultErrors: function () { return P; }, defaultAbiCoder: function () { return te; } });
        var n = r(2593), i = r(3587), o = r(711);
        var a = "abi/5.0.12", s = new o.Logger(a), c = {};
        var l = { calldata: !0, memory: !0, storage: !0 }, u = { calldata: !0, memory: !0 };
        function f(e, t) { if ("bytes" === e || "string" === e) {
            if (l[t])
                return !0;
        }
        else if ("address" === e) {
            if ("payable" === t)
                return !0;
        }
        else if ((e.indexOf("[") >= 0 || "tuple" === e) && u[t])
            return !0; return (l[t] || "payable" === t) && s.throwArgumentError("invalid modifier", "name", t), !1; }
        function h(e, t) { for (var r_1 in t)
            (0, i.defineReadOnly)(e, r_1, t[r_1]); }
        var d = Object.freeze({ sighash: "sighash", minimal: "minimal", full: "full", json: "json" }), p = new RegExp(/^(.*)\[([0-9]*)\]$/);
        var g = (function () {
            function g(e, t) {
                e !== c && s.throwError("use fromString", o.Logger.errors.UNSUPPORTED_OPERATION, { operation: "new ParamType()" }), h(this, t);
                var r = this.type.match(p);
                h(this, r ? { arrayLength: parseInt(r[2] || "-1"), arrayChildren: g.fromObject({ type: r[1], components: this.components }), baseType: "array" } : { arrayLength: null, arrayChildren: null, baseType: null != this.components ? "tuple" : this.type }), this._isParamType = !0, Object.freeze(this);
            }
            g.prototype.format = function (e) { if (e || (e = d.sighash), d[e] || s.throwArgumentError("invalid format type", "format", e), e === d.json) {
                var t_1 = { type: "tuple" === this.baseType ? "tuple" : this.type, name: this.name || void 0 };
                return "boolean" == typeof this.indexed && (t_1.indexed = this.indexed), this.components && (t_1.components = this.components.map((function (t) { return JSON.parse(t.format(e)); }))), JSON.stringify(t_1);
            } var t = ""; return "array" === this.baseType ? (t += this.arrayChildren.format(e), t += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (e !== d.sighash && (t += this.type), t += "(" + this.components.map((function (t) { return t.format(e); })).join(e === d.full ? ", " : ",") + ")") : t += this.type, e !== d.sighash && (!0 === this.indexed && (t += " indexed"), e === d.full && this.name && (t += " " + this.name)), t; };
            g.from = function (e, t) { return "string" == typeof e ? g.fromString(e, t) : g.fromObject(e); };
            g.fromObject = function (e) { return g.isParamType(e) ? e : new g(c, { name: e.name || null, type: T(e.type), indexed: null == e.indexed ? null : !!e.indexed, components: e.components ? e.components.map(g.fromObject) : null }); };
            g.fromString = function (e, t) { return r = function (e, t) { var r = e; function n(t) { s.throwArgumentError("unexpected character at position " + t, "param", e); } function i(e) { var r = { type: "", name: "", parent: e, state: { allowType: !0 } }; return t && (r.indexed = !1), r; } e = e.replace(/\s/g, " "); var o = { type: "", name: "", state: { allowType: !0 } }, a = o; for (var r_2 = 0; r_2 < e.length; r_2++) {
                var o_1 = e[r_2];
                switch (o_1) {
                    case "(":
                        a.state.allowType && "" === a.type ? a.type = "tuple" : a.state.allowParams || n(r_2), a.state.allowType = !1, a.type = T(a.type), a.components = [i(a)], a = a.components[0];
                        break;
                    case ")":
                        delete a.state, "indexed" === a.name && (t || n(r_2), a.indexed = !0, a.name = ""), f(a.type, a.name) && (a.name = ""), a.type = T(a.type);
                        var e_1 = a;
                        a = a.parent, a || n(r_2), delete e_1.parent, a.state.allowParams = !1, a.state.allowName = !0, a.state.allowArray = !0;
                        break;
                    case ",":
                        delete a.state, "indexed" === a.name && (t || n(r_2), a.indexed = !0, a.name = ""), f(a.type, a.name) && (a.name = ""), a.type = T(a.type);
                        var s_1 = i(a.parent);
                        a.parent.components.push(s_1), delete a.parent, a = s_1;
                        break;
                    case " ":
                        a.state.allowType && "" !== a.type && (a.type = T(a.type), delete a.state.allowType, a.state.allowName = !0, a.state.allowParams = !0), a.state.allowName && "" !== a.name && ("indexed" === a.name ? (t || n(r_2), a.indexed && n(r_2), a.indexed = !0, a.name = "") : f(a.type, a.name) ? a.name = "" : a.state.allowName = !1);
                        break;
                    case "[":
                        a.state.allowArray || n(r_2), a.type += o_1, a.state.allowArray = !1, a.state.allowName = !1, a.state.readArray = !0;
                        break;
                    case "]":
                        a.state.readArray || n(r_2), a.type += o_1, a.state.readArray = !1, a.state.allowArray = !0, a.state.allowName = !0;
                        break;
                    default: a.state.allowType ? (a.type += o_1, a.state.allowParams = !0, a.state.allowArray = !0) : a.state.allowName ? (a.name += o_1, delete a.state.allowArray) : a.state.readArray ? a.type += o_1 : n(r_2);
                }
            } return a.parent && s.throwArgumentError("unexpected eof", "param", e), delete o.state, "indexed" === a.name ? (t || n(r.length - 7), a.indexed && n(r.length - 7), a.indexed = !0, a.name = "") : f(a.type, a.name) && (a.name = ""), o.type = T(o.type), o; }(e, !!t), g.fromObject({ name: r.name, type: r.type, indexed: r.indexed, components: r.components }); var r; };
            g.isParamType = function (e) { return !(null == e || !e._isParamType); };
            return g;
        }());
        function m(e, t) { return function (e) { e = e.trim(); var t = [], r = "", n = 0; for (var i_1 = 0; i_1 < e.length; i_1++) {
            var o_2 = e[i_1];
            "," === o_2 && 0 === n ? (t.push(r), r = "") : (r += o_2, "(" === o_2 ? n++ : ")" === o_2 && (n--, -1 === n && s.throwArgumentError("unbalanced parenthesis", "value", e)));
        } return r && t.push(r), t; }(e).map((function (e) { return g.fromString(e, t); })); }
        var b = (function () {
            function b(e, t) {
                e !== c && s.throwError("use a static from method", o.Logger.errors.UNSUPPORTED_OPERATION, { operation: "new Fragment()" }), h(this, t), this._isFragment = !0, Object.freeze(this);
            }
            b.from = function (e) { return b.isFragment(e) ? e : "string" == typeof e ? b.fromString(e) : b.fromObject(e); };
            b.fromObject = function (e) { if (b.isFragment(e))
                return e; switch (e.type) {
                case "function": return E.fromObject(e);
                case "event": return y.fromObject(e);
                case "constructor": return w.fromObject(e);
                case "fallback":
                case "receive": return null;
            } return s.throwArgumentError("invalid fragment object", "value", e); };
            b.fromString = function (e) { return "event" === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? y.fromString(e.substring(5).trim()) : "function" === e.split(" ")[0] ? E.fromString(e.substring(8).trim()) : "constructor" === e.split("(")[0].trim() ? w.fromString(e.trim()) : s.throwArgumentError("unsupported fragment", "value", e); };
            b.isFragment = function (e) { return !(!e || !e._isFragment); };
            return b;
        }());
        var y = (function (_super) {
            __extends(y, _super);
            function y() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            y.prototype.format = function (e) { if (e || (e = d.sighash), d[e] || s.throwArgumentError("invalid format type", "format", e), e === d.json)
                return JSON.stringify({ type: "event", anonymous: this.anonymous, name: this.name, inputs: this.inputs.map((function (t) { return JSON.parse(t.format(e)); })) }); var t = ""; return e !== d.sighash && (t += "event "), t += this.name + "(" + this.inputs.map((function (t) { return t.format(e); })).join(e === d.full ? ", " : ",") + ") ", e !== d.sighash && this.anonymous && (t += "anonymous "), t.trim(); };
            y.from = function (e) { return "string" == typeof e ? y.fromString(e) : y.fromObject(e); };
            y.fromObject = function (e) { if (y.isEventFragment(e))
                return e; "event" !== e.type && s.throwArgumentError("invalid event object", "value", e); var t = { name: B(e.name), anonymous: e.anonymous, inputs: e.inputs ? e.inputs.map(g.fromObject) : [], type: "event" }; return new y(c, t); };
            y.fromString = function (e) { var t = e.match(M); t || s.throwArgumentError("invalid event string", "value", e); var r = !1; return t[3].split(" ").forEach((function (e) { switch (e.trim()) {
                case "anonymous":
                    r = !0;
                    break;
                case "": break;
                default: s.warn("unknown modifier: " + e);
            } })), y.fromObject({ name: t[1].trim(), anonymous: r, inputs: m(t[2], !0), type: "event" }); };
            y.isEventFragment = function (e) { return e && e._isFragment && "event" === e.type; };
            return y;
        }(b));
        function v(e, t) { t.gas = null; var r = e.split("@"); return 1 !== r.length ? (r.length > 2 && s.throwArgumentError("invalid human-readable ABI signature", "value", e), r[1].match(/^[0-9]+$/) || s.throwArgumentError("invalid human-readable ABI signature gas", "value", e), t.gas = n.O$.from(r[1]), r[0]) : e; }
        function A(e, t) { t.constant = !1, t.payable = !1, t.stateMutability = "nonpayable", e.split(" ").forEach((function (e) { switch (e.trim()) {
            case "constant":
                t.constant = !0;
                break;
            case "payable":
                t.payable = !0, t.stateMutability = "payable";
                break;
            case "nonpayable":
                t.payable = !1, t.stateMutability = "nonpayable";
                break;
            case "pure":
                t.constant = !0, t.stateMutability = "pure";
                break;
            case "view":
                t.constant = !0, t.stateMutability = "view";
                break;
            case "external":
            case "public":
            case "": break;
            default: console.log("unknown modifier: " + e);
        } })); }
        function S(e) { var t = { constant: !1, payable: !0, stateMutability: "payable" }; return null != e.stateMutability ? (t.stateMutability = e.stateMutability, t.constant = "view" === t.stateMutability || "pure" === t.stateMutability, null != e.constant && !!e.constant !== t.constant && s.throwArgumentError("cannot have constant function with mutability " + t.stateMutability, "value", e), t.payable = "payable" === t.stateMutability, null != e.payable && !!e.payable !== t.payable && s.throwArgumentError("cannot have payable function with mutability " + t.stateMutability, "value", e)) : null != e.payable ? (t.payable = !!e.payable, null != e.constant || t.payable || "constructor" === e.type || s.throwArgumentError("unable to determine stateMutability", "value", e), t.constant = !!e.constant, t.constant ? t.stateMutability = "view" : t.stateMutability = t.payable ? "payable" : "nonpayable", t.payable && t.constant && s.throwArgumentError("cannot have constant payable function", "value", e)) : null != e.constant ? (t.constant = !!e.constant, t.payable = !t.constant, t.stateMutability = t.constant ? "view" : "payable") : "constructor" !== e.type && s.throwArgumentError("unable to determine stateMutability", "value", e), t; }
        var w = (function (_super) {
            __extends(w, _super);
            function w() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            w.prototype.format = function (e) { if (e || (e = d.sighash), d[e] || s.throwArgumentError("invalid format type", "format", e), e === d.json)
                return JSON.stringify({ type: "constructor", stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0, payable: this.payable, gas: this.gas ? this.gas.toNumber() : void 0, inputs: this.inputs.map((function (t) { return JSON.parse(t.format(e)); })) }); e === d.sighash && s.throwError("cannot format a constructor for sighash", o.Logger.errors.UNSUPPORTED_OPERATION, { operation: "format(sighash)" }); var t = "constructor(" + this.inputs.map((function (t) { return t.format(e); })).join(e === d.full ? ", " : ",") + ") "; return this.stateMutability && "nonpayable" !== this.stateMutability && (t += this.stateMutability + " "), t.trim(); };
            w.from = function (e) { return "string" == typeof e ? w.fromString(e) : w.fromObject(e); };
            w.fromObject = function (e) { if (w.isConstructorFragment(e))
                return e; "constructor" !== e.type && s.throwArgumentError("invalid constructor object", "value", e); var t = S(e); t.constant && s.throwArgumentError("constructor cannot be constant", "value", e); var r = { name: null, type: e.type, inputs: e.inputs ? e.inputs.map(g.fromObject) : [], payable: t.payable, stateMutability: t.stateMutability, gas: e.gas ? n.O$.from(e.gas) : null }; return new w(c, r); };
            w.fromString = function (e) { var t = { type: "constructor" }, r = (e = v(e, t)).match(M); return r && "constructor" === r[1].trim() || s.throwArgumentError("invalid constructor string", "value", e), t.inputs = m(r[2].trim(), !1), A(r[3].trim(), t), w.fromObject(t); };
            w.isConstructorFragment = function (e) { return e && e._isFragment && "constructor" === e.type; };
            return w;
        }(b));
        var E = (function (_super) {
            __extends(E, _super);
            function E() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            E.prototype.format = function (e) { if (e || (e = d.sighash), d[e] || s.throwArgumentError("invalid format type", "format", e), e === d.json)
                return JSON.stringify({ type: "function", name: this.name, constant: this.constant, stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0, payable: this.payable, gas: this.gas ? this.gas.toNumber() : void 0, inputs: this.inputs.map((function (t) { return JSON.parse(t.format(e)); })), outputs: this.outputs.map((function (t) { return JSON.parse(t.format(e)); })) }); var t = ""; return e !== d.sighash && (t += "function "), t += this.name + "(" + this.inputs.map((function (t) { return t.format(e); })).join(e === d.full ? ", " : ",") + ") ", e !== d.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (t += this.stateMutability + " ") : this.constant && (t += "view "), this.outputs && this.outputs.length && (t += "returns (" + this.outputs.map((function (t) { return t.format(e); })).join(", ") + ") "), null != this.gas && (t += "@" + this.gas.toString() + " ")), t.trim(); };
            E.from = function (e) { return "string" == typeof e ? E.fromString(e) : E.fromObject(e); };
            E.fromObject = function (e) { if (E.isFunctionFragment(e))
                return e; "function" !== e.type && s.throwArgumentError("invalid function object", "value", e); var t = S(e); var r = { type: e.type, name: B(e.name), constant: t.constant, inputs: e.inputs ? e.inputs.map(g.fromObject) : [], outputs: e.outputs ? e.outputs.map(g.fromObject) : [], payable: t.payable, stateMutability: t.stateMutability, gas: e.gas ? n.O$.from(e.gas) : null }; return new E(c, r); };
            E.fromString = function (e) { var t = { type: "function" }, r = (e = v(e, t)).split(" returns "); r.length > 2 && s.throwArgumentError("invalid function string", "value", e); var n = r[0].match(M); if (n || s.throwArgumentError("invalid function signature", "value", e), t.name = n[1].trim(), t.name && B(t.name), t.inputs = m(n[2], !1), A(n[3].trim(), t), r.length > 1) {
                var n_1 = r[1].match(M);
                "" == n_1[1].trim() && "" == n_1[3].trim() || s.throwArgumentError("unexpected tokens", "value", e), t.outputs = m(n_1[2], !1);
            }
            else
                t.outputs = []; return E.fromObject(t); };
            E.isFunctionFragment = function (e) { return e && e._isFragment && "function" === e.type; };
            return E;
        }(w));
        function T(e) { return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e; }
        var k = new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");
        function B(e) { return e && e.match(k) || s.throwArgumentError("invalid identifier \"" + e + "\"", "value", e), e; }
        var M = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
        var C = r(3286);
        var L = new o.Logger(a);
        function P(e) { var t = [], r = function (e, n) { if (Array.isArray(n))
            for (var i_2 in n) {
                var o_3 = e.slice();
                o_3.push(i_2);
                try {
                    r(o_3, n[i_2]);
                }
                catch (e) {
                    t.push({ path: o_3, error: e });
                }
            } }; return r([], e), t; }
        var F = (function () {
            function F(e, t, r, n) {
                this.name = e, this.type = t, this.localName = r, this.dynamic = n;
            }
            F.prototype._throwError = function (e, t) { L.throwArgumentError(e, this.localName, t); };
            return F;
        }());
        var N = (function () {
            function N(e) {
                (0, i.defineReadOnly)(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e);
            }
            Object.defineProperty(N.prototype, "data", {
                get: function () { return (0, C.hexConcat)(this._data); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(N.prototype, "length", {
                get: function () { return this._dataLength; },
                enumerable: false,
                configurable: true
            });
            N.prototype._writeData = function (e) { return this._data.push(e), this._dataLength += e.length, e.length; };
            N.prototype.appendWriter = function (e) { return this._writeData((0, C.concat)(e._data)); };
            N.prototype.writeBytes = function (e) { var t = (0, C.arrayify)(e); var r = t.length % this.wordSize; return r && (t = (0, C.concat)([t, this._padding.slice(r)])), this._writeData(t); };
            N.prototype._getValue = function (e) { var t = (0, C.arrayify)(n.O$.from(e)); return t.length > this.wordSize && L.throwError("value out-of-bounds", o.Logger.errors.BUFFER_OVERRUN, { length: this.wordSize, offset: t.length }), t.length % this.wordSize && (t = (0, C.concat)([this._padding.slice(t.length % this.wordSize), t])), t; };
            N.prototype.writeValue = function (e) { return this._writeData(this._getValue(e)); };
            N.prototype.writeUpdatableValue = function () {
                var _this = this;
                var e = this._data.length;
                return this._data.push(this._padding), this._dataLength += this.wordSize, function (t) { _this._data[e] = _this._getValue(t); };
            };
            return N;
        }());
        var x = (function () {
            function x(e, t, r, n) {
                (0, i.defineReadOnly)(this, "_data", (0, C.arrayify)(e)), (0, i.defineReadOnly)(this, "wordSize", t || 32), (0, i.defineReadOnly)(this, "_coerceFunc", r), (0, i.defineReadOnly)(this, "allowLoose", n), this._offset = 0;
            }
            Object.defineProperty(x.prototype, "data", {
                get: function () { return (0, C.hexlify)(this._data); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(x.prototype, "consumed", {
                get: function () { return this._offset; },
                enumerable: false,
                configurable: true
            });
            x.coerce = function (e, t) { var r = e.match("^u?int([0-9]+)$"); return r && parseInt(r[1]) <= 48 && (t = t.toNumber()), t; };
            x.prototype.coerce = function (e, t) { return this._coerceFunc ? this._coerceFunc(e, t) : x.coerce(e, t); };
            x.prototype._peekBytes = function (e, t, r) { var n = Math.ceil(t / this.wordSize) * this.wordSize; return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + t <= this._data.length ? n = t : L.throwError("data out-of-bounds", o.Logger.errors.BUFFER_OVERRUN, { length: this._data.length, offset: this._offset + n })), this._data.slice(this._offset, this._offset + n); };
            x.prototype.subReader = function (e) { return new x(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose); };
            x.prototype.readBytes = function (e, t) { var r = this._peekBytes(0, e, !!t); return this._offset += r.length, r.slice(0, e); };
            x.prototype.readValue = function () { return n.O$.from(this.readBytes(this.wordSize)); };
            return x;
        }());
        var R = r(4594);
        var O = (function (_super) {
            __extends(O, _super);
            function O(e) {
                return _super.call(this, "address", "address", e, !1) || this;
            }
            O.prototype.defaultValue = function () { return "0x0000000000000000000000000000000000000000"; };
            O.prototype.encode = function (e, t) { try {
                (0, R.getAddress)(t);
            }
            catch (e) {
                this._throwError(e.message, t);
            } return e.writeValue(t); };
            O.prototype.decode = function (e) { return (0, R.getAddress)((0, C.hexZeroPad)(e.readValue().toHexString(), 20)); };
            return O;
        }(F));
        var I = (function (_super) {
            __extends(I, _super);
            function I(e) {
                var _this = this;
                _this = _super.call(this, e.name, e.type, void 0, e.dynamic) || this, _this.coder = e;
                return _this;
            }
            I.prototype.defaultValue = function () { return this.coder.defaultValue(); };
            I.prototype.encode = function (e, t) { return this.coder.encode(e, t); };
            I.prototype.decode = function (e) { return this.coder.decode(e); };
            return I;
        }(F));
        var D = new o.Logger(a);
        function J(e, t, r) { var n = null; if (Array.isArray(r))
            n = r;
        else if (r && "object" == typeof r) {
            var e_2 = {};
            n = t.map((function (t) { var n = t.localName; return n || D.throwError("cannot encode object for signature with missing names", o.Logger.errors.INVALID_ARGUMENT, { argument: "values", coder: t, value: r }), e_2[n] && D.throwError("cannot encode object for signature with duplicate names", o.Logger.errors.INVALID_ARGUMENT, { argument: "values", coder: t, value: r }), e_2[n] = !0, r[n]; }));
        }
        else
            D.throwArgumentError("invalid tuple value", "tuple", r); t.length !== n.length && D.throwArgumentError("types/value length mismatch", "tuple", r); var i = new N(e.wordSize), a = new N(e.wordSize), s = []; t.forEach((function (e, t) { var r = n[t]; if (e.dynamic) {
            var t_2 = a.length;
            e.encode(a, r);
            var n_2 = i.writeUpdatableValue();
            s.push((function (e) { n_2(e + t_2); }));
        }
        else
            e.encode(i, r); })), s.forEach((function (e) { e(i.length); })); var c = e.appendWriter(i); return c += e.appendWriter(a), c; }
        function _(e, t) { var r = [], n = e.subReader(0); t.forEach((function (t) { var i = null; if (t.dynamic) {
            var r_3 = e.readValue(), a_1 = n.subReader(r_3.toNumber());
            try {
                i = t.decode(a_1);
            }
            catch (e) {
                if (e.code === o.Logger.errors.BUFFER_OVERRUN)
                    throw e;
                i = e, i.baseType = t.name, i.name = t.localName, i.type = t.type;
            }
        }
        else
            try {
                i = t.decode(e);
            }
            catch (e) {
                if (e.code === o.Logger.errors.BUFFER_OVERRUN)
                    throw e;
                i = e, i.baseType = t.name, i.name = t.localName, i.type = t.type;
            } null != i && r.push(i); })); var i = t.reduce((function (e, t) { var r = t.localName; return r && (e[r] || (e[r] = 0), e[r]++), e; }), {}); t.forEach((function (e, t) { var n = e.localName; if (!n || 1 !== i[n])
            return; if ("length" === n && (n = "_length"), null != r[n])
            return; var o = r[t]; o instanceof Error ? Object.defineProperty(r, n, { get: function () { throw o; } }) : r[n] = o; })); var _loop_1 = function (e_3) {
            var t_3 = r[e_3];
            t_3 instanceof Error && Object.defineProperty(r, e_3, { get: function () { throw t_3; } });
        }; for (var e_3 = 0; e_3 < r.length; e_3++) {
            _loop_1(e_3);
        } return Object.freeze(r); }
        var U = (function (_super) {
            __extends(U, _super);
            function U(e, t, r) {
                var _this = this;
                _this = _super.call(this, "array", e.type + "[" + (t >= 0 ? t : "") + "]", r, -1 === t || e.dynamic) || this, _this.coder = e, _this.length = t;
                return _this;
            }
            U.prototype.defaultValue = function () { var e = this.coder.defaultValue(), t = []; for (var r_4 = 0; r_4 < this.length; r_4++)
                t.push(e); return t; };
            U.prototype.encode = function (e, t) { Array.isArray(t) || this._throwError("expected array value", t); var r = this.length; -1 === r && (r = t.length, e.writeValue(t.length)), D.checkArgumentCount(t.length, r, "coder array" + (this.localName ? " " + this.localName : "")); var n = []; for (var e_4 = 0; e_4 < t.length; e_4++)
                n.push(this.coder); return J(e, n, t); };
            U.prototype.decode = function (e) { var t = this.length; -1 === t && (t = e.readValue().toNumber()); var r = []; for (var e_5 = 0; e_5 < t; e_5++)
                r.push(new I(this.coder)); return e.coerce(this.name, _(e, r)); };
            return U;
        }(F));
        var H = (function (_super) {
            __extends(H, _super);
            function H(e) {
                return _super.call(this, "bool", "bool", e, !1) || this;
            }
            H.prototype.defaultValue = function () { return !1; };
            H.prototype.encode = function (e, t) { return e.writeValue(t ? 1 : 0); };
            H.prototype.decode = function (e) { return e.coerce(this.type, !e.readValue().isZero()); };
            return H;
        }(F));
        var X = (function (_super) {
            __extends(X, _super);
            function X(e, t) {
                return _super.call(this, e, e, t, !0) || this;
            }
            X.prototype.defaultValue = function () { return "0x"; };
            X.prototype.encode = function (e, t) { t = (0, C.arrayify)(t); var r = e.writeValue(t.length); return r += e.writeBytes(t), r; };
            X.prototype.decode = function (e) { return e.readBytes(e.readValue().toNumber(), !0); };
            return X;
        }(F));
        var V = (function (_super) {
            __extends(V, _super);
            function V(e) {
                return _super.call(this, "bytes", e) || this;
            }
            V.prototype.decode = function (e) { return e.coerce(this.name, (0, C.hexlify)(_super.prototype.decode.call(this, e))); };
            return V;
        }(X));
        var G = (function (_super) {
            __extends(G, _super);
            function G(e, t) {
                var _this = this;
                var r = "bytes" + String(e);
                _this = _super.call(this, r, r, t, !1) || this, _this.size = e;
                return _this;
            }
            G.prototype.defaultValue = function () { return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size); };
            G.prototype.encode = function (e, t) { var r = (0, C.arrayify)(t); return r.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(r); };
            G.prototype.decode = function (e) { return e.coerce(this.name, (0, C.hexlify)(e.readBytes(this.size))); };
            return G;
        }(F));
        var z = (function (_super) {
            __extends(z, _super);
            function z(e) {
                return _super.call(this, "null", "", e, !1) || this;
            }
            z.prototype.defaultValue = function () { return null; };
            z.prototype.encode = function (e, t) { return null != t && this._throwError("not null", t), e.writeBytes([]); };
            z.prototype.decode = function (e) { return e.readBytes(0), e.coerce(this.name, null); };
            return z;
        }(F));
        var j = r(1046);
        var K = (function (_super) {
            __extends(K, _super);
            function K(e, t, r) {
                var _this = this;
                var n = (t ? "int" : "uint") + 8 * e;
                _this = _super.call(this, n, n, r, !1) || this, _this.size = e, _this.signed = t;
                return _this;
            }
            K.prototype.defaultValue = function () { return 0; };
            K.prototype.encode = function (e, t) { var r = n.O$.from(t), i = j.Bz.mask(8 * e.wordSize); if (this.signed) {
                var e_6 = i.mask(8 * this.size - 1);
                (r.gt(e_6) || r.lt(e_6.add(j.fh).mul(j.tL))) && this._throwError("value out-of-bounds", t);
            }
            else
                (r.lt(j._Y) || r.gt(i.mask(8 * this.size))) && this._throwError("value out-of-bounds", t); return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)), e.writeValue(r); };
            K.prototype.decode = function (e) { var t = e.readValue().mask(8 * this.size); return this.signed && (t = t.fromTwos(8 * this.size)), e.coerce(this.name, t); };
            return K;
        }(F));
        var Z = r(4242);
        var q = (function (_super) {
            __extends(q, _super);
            function q(e) {
                return _super.call(this, "string", e) || this;
            }
            q.prototype.defaultValue = function () { return ""; };
            q.prototype.encode = function (e, t) { return _super.prototype.encode.call(this, e, (0, Z.Y0)(t)); };
            q.prototype.decode = function (e) { return (0, Z.ZN)(_super.prototype.decode.call(this, e)); };
            return q;
        }(X));
        var Q = (function (_super) {
            __extends(Q, _super);
            function Q(e, t) {
                var _this = this;
                var r = !1;
                var n = [];
                e.forEach((function (e) { e.dynamic && (r = !0), n.push(e.type); })), _this = _super.call(this, "tuple", "tuple(" + n.join(",") + ")", t, r) || this, _this.coders = e;
                return _this;
            }
            Q.prototype.defaultValue = function () { var e = []; this.coders.forEach((function (t) { e.push(t.defaultValue()); })); var t = this.coders.reduce((function (e, t) { var r = t.localName; return r && (e[r] || (e[r] = 0), e[r]++), e; }), {}); return this.coders.forEach((function (r, n) { var i = r.localName; i && 1 === t[i] && ("length" === i && (i = "_length"), null == e[i] && (e[i] = e[n])); })), Object.freeze(e); };
            Q.prototype.encode = function (e, t) { return J(e, this.coders, t); };
            Q.prototype.decode = function (e) { return e.coerce(this.name, _(e, this.coders)); };
            return Q;
        }(F));
        var W = new o.Logger(a), Y = new RegExp(/^bytes([0-9]*)$/), $ = new RegExp(/^(u?int)([0-9]*)$/);
        var ee = (function () {
            function ee(e) {
                var _newTarget = this.constructor;
                W.checkNew(_newTarget, ee), (0, i.defineReadOnly)(this, "coerceFunc", e || null);
            }
            ee.prototype._getCoder = function (e) {
                var _this = this;
                switch (e.baseType) {
                    case "address": return new O(e.name);
                    case "bool": return new H(e.name);
                    case "string": return new q(e.name);
                    case "bytes": return new V(e.name);
                    case "array": return new U(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
                    case "tuple": return new Q((e.components || []).map((function (e) { return _this._getCoder(e); })), e.name);
                    case "": return new z(e.name);
                }
                var t = e.type.match($);
                if (t) {
                    var r_5 = parseInt(t[2] || "256");
                    return (0 === r_5 || r_5 > 256 || r_5 % 8 != 0) && W.throwArgumentError("invalid " + t[1] + " bit length", "param", e), new K(r_5 / 8, "int" === t[1], e.name);
                }
                if (t = e.type.match(Y), t) {
                    var r_6 = parseInt(t[1]);
                    return (0 === r_6 || r_6 > 32) && W.throwArgumentError("invalid bytes length", "param", e), new G(r_6, e.name);
                }
                return W.throwArgumentError("invalid type", "type", e.type);
            };
            ee.prototype._getWordSize = function () { return 32; };
            ee.prototype._getReader = function (e, t) { return new x(e, this._getWordSize(), this.coerceFunc, t); };
            ee.prototype._getWriter = function () { return new N(this._getWordSize()); };
            ee.prototype.getDefaultValue = function (e) {
                var _this = this;
                var t = e.map((function (e) { return _this._getCoder(g.from(e)); }));
                return new Q(t, "_").defaultValue();
            };
            ee.prototype.encode = function (e, t) {
                var _this = this;
                e.length !== t.length && W.throwError("types/values length mismatch", o.Logger.errors.INVALID_ARGUMENT, { count: { types: e.length, values: t.length }, value: { types: e, values: t } });
                var r = e.map((function (e) { return _this._getCoder(g.from(e)); })), n = new Q(r, "_"), i = this._getWriter();
                return n.encode(i, t), i.data;
            };
            ee.prototype.decode = function (e, t, r) {
                var _this = this;
                var n = e.map((function (e) { return _this._getCoder(g.from(e)); }));
                return new Q(n, "_").decode(this._getReader((0, C.arrayify)(t), r));
            };
            return ee;
        }());
        var te = new ee;
        var re = r(2046), ne = r(8197);
        var ie = new o.Logger(a);
        var oe = (function (_super) {
            __extends(oe, _super);
            function oe() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return oe;
        }(i.Description));
        var ae = (function (_super) {
            __extends(ae, _super);
            function ae() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ae;
        }(i.Description));
        var se = (function (_super) {
            __extends(se, _super);
            function se() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            se.isIndexed = function (e) { return !(!e || !e._isIndexed); };
            return se;
        }(i.Description));
        function ce(e, t) { var r = new Error("deferred error during ABI decoding triggered accessing " + e); return r.error = t, r; }
        var le = (function () {
            function le(e) {
                var _newTarget = this.constructor;
                var _this = this;
                ie.checkNew(_newTarget, le);
                var t = [];
                t = "string" == typeof e ? JSON.parse(e) : e, (0, i.defineReadOnly)(this, "fragments", t.map((function (e) { return b.from(e); })).filter((function (e) { return null != e; }))), (0, i.defineReadOnly)(this, "_abiCoder", (0, i.getStatic)(_newTarget, "getAbiCoder")()), (0, i.defineReadOnly)(this, "functions", {}), (0, i.defineReadOnly)(this, "errors", {}), (0, i.defineReadOnly)(this, "events", {}), (0, i.defineReadOnly)(this, "structs", {}), this.fragments.forEach((function (e) { var t = null; switch (e.type) {
                    case "constructor": return _this.deploy ? void ie.warn("duplicate definition - constructor") : void (0, i.defineReadOnly)(_this, "deploy", e);
                    case "function":
                        t = _this.functions;
                        break;
                    case "event":
                        t = _this.events;
                        break;
                    default: return;
                } var r = e.format(); t[r] ? ie.warn("duplicate definition - " + r) : t[r] = e; })), this.deploy || (0, i.defineReadOnly)(this, "deploy", w.from({ payable: !1, type: "constructor" })), (0, i.defineReadOnly)(this, "_isInterface", !0);
            }
            le.prototype.format = function (e) { e || (e = d.full), e === d.sighash && ie.throwArgumentError("interface does not support formatting sighash", "format", e); var t = this.fragments.map((function (t) { return t.format(e); })); return e === d.json ? JSON.stringify(t.map((function (e) { return JSON.parse(e); }))) : t; };
            le.getAbiCoder = function () { return te; };
            le.getAddress = function (e) { return (0, R.getAddress)(e); };
            le.getSighash = function (e) { return (0, C.hexDataSlice)((0, re.id)(e.format()), 0, 4); };
            le.getEventTopic = function (e) { return (0, re.id)(e.format()); };
            le.prototype.getFunction = function (e) { if ((0, C.isHexString)(e)) {
                for (var t_4 in this.functions)
                    if (e === this.getSighash(t_4))
                        return this.functions[t_4];
                ie.throwArgumentError("no matching function", "sighash", e);
            } if (-1 === e.indexOf("(")) {
                var t_5 = e.trim(), r_7 = Object.keys(this.functions).filter((function (e) { return e.split("(")[0] === t_5; }));
                return 0 === r_7.length ? ie.throwArgumentError("no matching function", "name", t_5) : r_7.length > 1 && ie.throwArgumentError("multiple matching functions", "name", t_5), this.functions[r_7[0]];
            } var t = this.functions[E.fromString(e).format()]; return t || ie.throwArgumentError("no matching function", "signature", e), t; };
            le.prototype.getEvent = function (e) { if ((0, C.isHexString)(e)) {
                var t_6 = e.toLowerCase();
                for (var e_7 in this.events)
                    if (t_6 === this.getEventTopic(e_7))
                        return this.events[e_7];
                ie.throwArgumentError("no matching event", "topichash", t_6);
            } if (-1 === e.indexOf("(")) {
                var t_7 = e.trim(), r_8 = Object.keys(this.events).filter((function (e) { return e.split("(")[0] === t_7; }));
                return 0 === r_8.length ? ie.throwArgumentError("no matching event", "name", t_7) : r_8.length > 1 && ie.throwArgumentError("multiple matching events", "name", t_7), this.events[r_8[0]];
            } var t = this.events[y.fromString(e).format()]; return t || ie.throwArgumentError("no matching event", "signature", e), t; };
            le.prototype.getSighash = function (e) { return "string" == typeof e && (e = this.getFunction(e)), (0, i.getStatic)(this.constructor, "getSighash")(e); };
            le.prototype.getEventTopic = function (e) { return "string" == typeof e && (e = this.getEvent(e)), (0, i.getStatic)(this.constructor, "getEventTopic")(e); };
            le.prototype._decodeParams = function (e, t) { return this._abiCoder.decode(e, t); };
            le.prototype._encodeParams = function (e, t) { return this._abiCoder.encode(e, t); };
            le.prototype.encodeDeploy = function (e) { return this._encodeParams(this.deploy.inputs, e || []); };
            le.prototype.decodeFunctionData = function (e, t) { "string" == typeof e && (e = this.getFunction(e)); var r = (0, C.arrayify)(t); return (0, C.hexlify)(r.slice(0, 4)) !== this.getSighash(e) && ie.throwArgumentError("data signature does not match function " + e.name + ".", "data", (0, C.hexlify)(r)), this._decodeParams(e.inputs, r.slice(4)); };
            le.prototype.encodeFunctionData = function (e, t) { return "string" == typeof e && (e = this.getFunction(e)), (0, C.hexlify)((0, C.concat)([this.getSighash(e), this._encodeParams(e.inputs, t || [])])); };
            le.prototype.decodeFunctionResult = function (e, t) { "string" == typeof e && (e = this.getFunction(e)); var r = (0, C.arrayify)(t), n = null, i = null; switch (r.length % this._abiCoder._getWordSize()) {
                case 0:
                    try {
                        return this._abiCoder.decode(e.outputs, r);
                    }
                    catch (e) { }
                    break;
                case 4: "0x08c379a0" === (0, C.hexlify)(r.slice(0, 4)) && (i = "Error(string)", n = this._abiCoder.decode(["string"], r.slice(4))[0]);
            } return ie.throwError("call revert exception", o.Logger.errors.CALL_EXCEPTION, { method: e.format(), errorSignature: i, errorArgs: [n], reason: n }); };
            le.prototype.encodeFunctionResult = function (e, t) { return "string" == typeof e && (e = this.getFunction(e)), (0, C.hexlify)(this._abiCoder.encode(e.outputs, t || [])); };
            le.prototype.encodeFilterTopics = function (e, t) {
                var _this = this;
                "string" == typeof e && (e = this.getEvent(e)), t.length > e.inputs.length && ie.throwError("too many arguments for " + e.format(), o.Logger.errors.UNEXPECTED_ARGUMENT, { argument: "values", value: t });
                var r = [];
                e.anonymous || r.push(this.getEventTopic(e));
                var n = function (e, t) { return "string" === e.type ? (0, re.id)(t) : "bytes" === e.type ? (0, ne.keccak256)((0, C.hexlify)(t)) : ("address" === e.type && _this._abiCoder.encode(["address"], [t]), (0, C.hexZeroPad)((0, C.hexlify)(t), 32)); };
                for (t.forEach((function (t, i) { var o = e.inputs[i]; o.indexed ? null == t ? r.push(null) : "array" === o.baseType || "tuple" === o.baseType ? ie.throwArgumentError("filtering with tuples or arrays not supported", "contract." + o.name, t) : Array.isArray(t) ? r.push(t.map((function (e) { return n(o, e); }))) : r.push(n(o, t)) : null != t && ie.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + o.name, t); })); r.length && null === r[r.length - 1];)
                    r.pop();
                return r;
            };
            le.prototype.encodeEventLog = function (e, t) {
                var _this = this;
                "string" == typeof e && (e = this.getEvent(e));
                var r = [], n = [], i = [];
                return e.anonymous || r.push(this.getEventTopic(e)), t.length !== e.inputs.length && ie.throwArgumentError("event arguments/values mismatch", "values", t), e.inputs.forEach((function (e, o) { var a = t[o]; if (e.indexed)
                    if ("string" === e.type)
                        r.push((0, re.id)(a));
                    else if ("bytes" === e.type)
                        r.push((0, ne.keccak256)(a));
                    else {
                        if ("tuple" === e.baseType || "array" === e.baseType)
                            throw new Error("not implemented");
                        r.push(_this._abiCoder.encode([e.type], [a]));
                    }
                else
                    n.push(e), i.push(a); })), { data: this._abiCoder.encode(n, i), topics: r };
            };
            le.prototype.decodeEventLog = function (e, t, r) { if ("string" == typeof e && (e = this.getEvent(e)), null != r && !e.anonymous) {
                var t_8 = this.getEventTopic(e);
                (0, C.isHexString)(r[0], 32) && r[0].toLowerCase() === t_8 || ie.throwError("fragment/topic mismatch", o.Logger.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: t_8, value: r[0] }), r = r.slice(1);
            } var n = [], i = [], a = []; e.inputs.forEach((function (e, t) { e.indexed ? "string" === e.type || "bytes" === e.type || "tuple" === e.baseType || "array" === e.baseType ? (n.push(g.fromObject({ type: "bytes32", name: e.name })), a.push(!0)) : (n.push(e), a.push(!1)) : (i.push(e), a.push(!1)); })); var s = null != r ? this._abiCoder.decode(n, (0, C.concat)(r)) : null, c = this._abiCoder.decode(i, t, !0), l = [], u = 0, f = 0; e.inputs.forEach((function (e, t) { if (e.indexed)
                if (null == s)
                    l[t] = new se({ _isIndexed: !0, hash: null });
                else if (a[t])
                    l[t] = new se({ _isIndexed: !0, hash: s[f++] });
                else
                    try {
                        l[t] = s[f++];
                    }
                    catch (e) {
                        l[t] = e;
                    }
            else
                try {
                    l[t] = c[u++];
                }
                catch (e) {
                    l[t] = e;
                } if (e.name && null == l[e.name]) {
                var r_9 = l[t];
                r_9 instanceof Error ? Object.defineProperty(l, e.name, { get: function () { throw ce("property " + JSON.stringify(e.name), r_9); } }) : l[e.name] = r_9;
            } })); var _loop_2 = function (e_8) {
                var t_9 = l[e_8];
                t_9 instanceof Error && Object.defineProperty(l, e_8, { get: function () { throw ce("index " + e_8, t_9); } });
            }; for (var e_8 = 0; e_8 < l.length; e_8++) {
                _loop_2(e_8);
            } return Object.freeze(l); };
            le.prototype.parseTransaction = function (e) { var t = this.getFunction(e.data.substring(0, 10).toLowerCase()); return t ? new ae({ args: this._abiCoder.decode(t.inputs, "0x" + e.data.substring(10)), functionFragment: t, name: t.name, signature: t.format(), sighash: this.getSighash(t), value: n.O$.from(e.value || "0") }) : null; };
            le.prototype.parseLog = function (e) { var t = this.getEvent(e.topics[0]); return !t || t.anonymous ? null : new oe({ eventFragment: t, name: t.name, signature: t.format(), topic: this.getEventTopic(t), args: this.decodeEventLog(t, e.data, e.topics) }); };
            le.isInterface = function (e) { return !(!e || !e._isInterface); };
            return le;
        }());
    }, 4353: function (e, t, r) {
        "use strict";
        r.d(t, { Sg: function () { return o; }, zt: function () { return a; } });
        var n = r(3587);
        var i = new (r(711).Logger)("abstract-provider/5.0.9");
        var o = (function (_super) {
            __extends(o, _super);
            function o() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            o.isForkEvent = function (e) { return !(!e || !e._isForkEvent); };
            return o;
        }(n.Description));
        var a = (function () {
            function a() {
                var _newTarget = this.constructor;
                i.checkAbstract(_newTarget, a), (0, n.defineReadOnly)(this, "_isProvider", !0);
            }
            a.prototype.addListener = function (e, t) { return this.on(e, t); };
            a.prototype.removeListener = function (e, t) { return this.off(e, t); };
            a.isProvider = function (e) { return !(!e || !e._isProvider); };
            return a;
        }());
    }, 8171: function (e, t, r) {
        "use strict";
        r.d(t, { E: function () { return l; } });
        var n = r(3587), i = r(711), o = function (e, t, r, n) { return new (r || (r = Promise))((function (i, o) { function a(e) { try {
            c(n.next(e));
        }
        catch (e) {
            o(e);
        } } function s(e) { try {
            c(n.throw(e));
        }
        catch (e) {
            o(e);
        } } function c(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) { e(t); }))).then(a, s); } c((n = n.apply(e, t || [])).next()); })); };
        var a = new i.Logger("abstract-signer/5.0.13"), s = ["chainId", "data", "from", "gasLimit", "gasPrice", "nonce", "to", "value"], c = [i.Logger.errors.INSUFFICIENT_FUNDS, i.Logger.errors.NONCE_EXPIRED, i.Logger.errors.REPLACEMENT_UNDERPRICED];
        var l = (function () {
            function l() {
                var _newTarget = this.constructor;
                a.checkAbstract(_newTarget, l), (0, n.defineReadOnly)(this, "_isSigner", !0);
            }
            l.prototype.getBalance = function (e) { return o(this, void 0, void 0, (function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkProvider("getBalance");
                        return [4, this.provider.getBalance(this.getAddress(), e)];
                    case 1: return [2, _a.sent()];
                }
            }); })); };
            l.prototype.getTransactionCount = function (e) { return o(this, void 0, void 0, (function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkProvider("getTransactionCount");
                        return [4, this.provider.getTransactionCount(this.getAddress(), e)];
                    case 1: return [2, _a.sent()];
                }
            }); })); };
            l.prototype.estimateGas = function (e) { return o(this, void 0, void 0, (function () { var t; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkProvider("estimateGas");
                        return [4, (0, n.resolveProperties)(this.checkTransaction(e))];
                    case 1:
                        t = _a.sent();
                        return [4, this.provider.estimateGas(t)];
                    case 2: return [2, _a.sent()];
                }
            }); })); };
            l.prototype.call = function (e, t) { return o(this, void 0, void 0, (function () { var r; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkProvider("call");
                        return [4, (0, n.resolveProperties)(this.checkTransaction(e))];
                    case 1:
                        r = _a.sent();
                        return [4, this.provider.call(r, t)];
                    case 2: return [2, _a.sent()];
                }
            }); })); };
            l.prototype.sendTransaction = function (e) {
                var _this = this;
                return this._checkProvider("sendTransaction"), this.populateTransaction(e).then((function (e) { return _this.signTransaction(e).then((function (e) { return _this.provider.sendTransaction(e); })); }));
            };
            l.prototype.getChainId = function () { return o(this, void 0, void 0, (function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkProvider("getChainId");
                        return [4, this.provider.getNetwork()];
                    case 1: return [2, (_a.sent()).chainId];
                }
            }); })); };
            l.prototype.getGasPrice = function () { return o(this, void 0, void 0, (function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkProvider("getGasPrice");
                        return [4, this.provider.getGasPrice()];
                    case 1: return [2, _a.sent()];
                }
            }); })); };
            l.prototype.resolveName = function (e) { return o(this, void 0, void 0, (function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkProvider("resolveName");
                        return [4, this.provider.resolveName(e)];
                    case 1: return [2, _a.sent()];
                }
            }); })); };
            l.prototype.checkTransaction = function (e) { for (var t_10 in e)
                -1 === s.indexOf(t_10) && a.throwArgumentError("invalid transaction key: " + t_10, "transaction", e); var t = (0, n.shallowCopy)(e); return null == t.from ? t.from = this.getAddress() : t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then((function (t) { return (t[0].toLowerCase() !== t[1].toLowerCase() && a.throwArgumentError("from address mismatch", "transaction", e), t[0]); })), t; };
            l.prototype.populateTransaction = function (e) { return o(this, void 0, void 0, (function () {
                var t;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, (0, n.resolveProperties)(this.checkTransaction(e))];
                        case 1:
                            t = _a.sent();
                            null != t.to && (t.to = Promise.resolve(t.to).then((function (e) { return o(_this, void 0, void 0, (function () { var t; return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (null == e)
                                            return [2, null];
                                        return [4, this.resolveName(e)];
                                    case 1:
                                        t = _a.sent();
                                        return [2, (null == t && a.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t)];
                                }
                            }); })); }))), null == t.gasPrice && (t.gasPrice = this.getGasPrice()), null == t.nonce && (t.nonce = this.getTransactionCount("pending")), null == t.gasLimit && (t.gasLimit = this.estimateGas(t).catch((function (e) { if (c.indexOf(e.code) >= 0)
                                throw e; return a.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i.Logger.errors.UNPREDICTABLE_GAS_LIMIT, { error: e, tx: t }); }))), null == t.chainId ? t.chainId = this.getChainId() : t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then((function (t) { return (0 !== t[1] && t[0] !== t[1] && a.throwArgumentError("chainId address mismatch", "transaction", e), t[0]); }));
                            return [4, (0, n.resolveProperties)(t)];
                        case 2: return [2, _a.sent()];
                    }
                });
            })); };
            l.prototype._checkProvider = function (e) { this.provider || a.throwError("missing provider", i.Logger.errors.UNSUPPORTED_OPERATION, { operation: e || "_checkProvider" }); };
            l.isSigner = function (e) { return !(!e || !e._isSigner); };
            return l;
        }());
    }, 4594: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { getAddress: function () { return d; }, getContractAddress: function () { return m; }, getCreate2Address: function () { return b; }, getIcapAddress: function () { return g; }, isAddress: function () { return p; } });
        var n = r(3286), i = r(2593), o = r(8197), a = r(1843);
        var s = new (r(711).Logger)("address/5.0.10");
        function c(e) { (0, n.isHexString)(e, 20) || s.throwArgumentError("invalid address", "address", e); var t = (e = e.toLowerCase()).substring(2).split(""), r = new Uint8Array(40); for (var e_9 = 0; e_9 < 40; e_9++)
            r[e_9] = t[e_9].charCodeAt(0); var i = (0, n.arrayify)((0, o.keccak256)(r)); for (var e_10 = 0; e_10 < 40; e_10 += 2)
            i[e_10 >> 1] >> 4 >= 8 && (t[e_10] = t[e_10].toUpperCase()), (15 & i[e_10 >> 1]) >= 8 && (t[e_10 + 1] = t[e_10 + 1].toUpperCase()); return "0x" + t.join(""); }
        var l = {};
        for (var e_11 = 0; e_11 < 10; e_11++)
            l[String(e_11)] = String(e_11);
        for (var e_12 = 0; e_12 < 26; e_12++)
            l[String.fromCharCode(65 + e_12)] = String(10 + e_12);
        var u = Math.floor((f = 9007199254740991, Math.log10 ? Math.log10(f) : Math.log(f) / Math.LN10));
        var f;
        function h(e) { var t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map((function (e) { return l[e]; })).join(""); for (; t.length >= u;) {
            var e_13 = t.substring(0, u);
            t = parseInt(e_13, 10) % 97 + t.substring(e_13.length);
        } var r = String(98 - parseInt(t, 10) % 97); for (; r.length < 2;)
            r = "0" + r; return r; }
        function d(e) { var t = null; if ("string" != typeof e && s.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/))
            "0x" !== e.substring(0, 2) && (e = "0x" + e), t = c(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && s.throwArgumentError("bad address checksum", "address", e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
            for (e.substring(2, 4) !== h(e) && s.throwArgumentError("bad icap checksum", "address", e), t = (0, i.g$)(e.substring(4)); t.length < 40;)
                t = "0" + t;
            t = c("0x" + t);
        }
        else
            s.throwArgumentError("invalid address", "address", e); return t; }
        function p(e) { try {
            return d(e), !0;
        }
        catch (e) { } return !1; }
        function g(e) { var t = (0, i.t2)(d(e).substring(2)).toUpperCase(); for (; t.length < 30;)
            t = "0" + t; return "XE" + h("XE00" + t) + t; }
        function m(e) { var t = null; try {
            t = d(e.from);
        }
        catch (t) {
            s.throwArgumentError("missing from address", "transaction", e);
        } var r = (0, n.stripZeros)((0, n.arrayify)(i.O$.from(e.nonce).toHexString())); return d((0, n.hexDataSlice)((0, o.keccak256)((0, a.encode)([t, r])), 12)); }
        function b(e, t, r) { return 32 !== (0, n.hexDataLength)(t) && s.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== (0, n.hexDataLength)(r) && s.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), d((0, n.hexDataSlice)((0, o.keccak256)((0, n.concat)(["0xff", d(e), t, r])), 12)); }
    }, 9567: function (e, t, r) {
        "use strict";
        r.d(t, { J: function () { return i; }, c: function () { return o; } });
        var n = r(3286);
        function i(e) { e = atob(e); var t = []; for (var r_10 = 0; r_10 < e.length; r_10++)
            t.push(e.charCodeAt(r_10)); return (0, n.arrayify)(t); }
        function o(e) { e = (0, n.arrayify)(e); var t = ""; for (var r_11 = 0; r_11 < e.length; r_11++)
            t += String.fromCharCode(e[r_11]); return btoa(t); }
    }, 4089: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { decode: function () { return n.J; }, encode: function () { return n.c; } });
        var n = r(9567);
    }, 7727: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { BaseX: function () { return o; }, Base32: function () { return a; }, Base58: function () { return s; } });
        var n = r(3286), i = r(3587);
        var o = (function () {
            function o(e) {
                (0, i.defineReadOnly)(this, "alphabet", e), (0, i.defineReadOnly)(this, "base", e.length), (0, i.defineReadOnly)(this, "_alphabetMap", {}), (0, i.defineReadOnly)(this, "_leader", e.charAt(0));
                for (var t_11 = 0; t_11 < e.length; t_11++)
                    this._alphabetMap[e.charAt(t_11)] = t_11;
            }
            o.prototype.encode = function (e) { var t = (0, n.arrayify)(e); if (0 === t.length)
                return ""; var r = [0]; for (var e_14 = 0; e_14 < t.length; ++e_14) {
                var n_3 = t[e_14];
                for (var e_15 = 0; e_15 < r.length; ++e_15)
                    n_3 += r[e_15] << 8, r[e_15] = n_3 % this.base, n_3 = n_3 / this.base | 0;
                for (; n_3 > 0;)
                    r.push(n_3 % this.base), n_3 = n_3 / this.base | 0;
            } var i = ""; for (var e_16 = 0; 0 === t[e_16] && e_16 < t.length - 1; ++e_16)
                i += this._leader; for (var e_17 = r.length - 1; e_17 >= 0; --e_17)
                i += this.alphabet[r[e_17]]; return i; };
            o.prototype.decode = function (e) { if ("string" != typeof e)
                throw new TypeError("Expected String"); var t = []; if (0 === e.length)
                return new Uint8Array(t); t.push(0); for (var r_12 = 0; r_12 < e.length; r_12++) {
                var n_4 = this._alphabetMap[e[r_12]];
                if (void 0 === n_4)
                    throw new Error("Non-base" + this.base + " character");
                var i_3 = n_4;
                for (var e_18 = 0; e_18 < t.length; ++e_18)
                    i_3 += t[e_18] * this.base, t[e_18] = 255 & i_3, i_3 >>= 8;
                for (; i_3 > 0;)
                    t.push(255 & i_3), i_3 >>= 8;
            } for (var r_13 = 0; e[r_13] === this._leader && r_13 < e.length - 1; ++r_13)
                t.push(0); return (0, n.arrayify)(new Uint8Array(t.reverse())); };
            return o;
        }());
        var a = new o("abcdefghijklmnopqrstuvwxyz234567"), s = new o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    }, 8794: function (e, t, r) {
        "use strict";
        r.d(t, { i: function () { return n; } });
        var n = "bignumber/5.0.14";
    }, 2593: function (e, t, r) {
        "use strict";
        r.d(t, { Zm: function () { return h; }, O$: function () { return p; }, g$: function () { return v; }, t2: function () { return A; } });
        var n = r(3550), i = r.n(n), o = r(3286), a = r(711), s = r(8794), c = i().BN;
        var l = new a.Logger(s.i), u = {}, f = 9007199254740991;
        function h(e) { return null != e && (p.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || (0, o.isHexString)(e) || "bigint" == typeof e || (0, o.isBytes)(e)); }
        var d = !1;
        var p = (function () {
            function p(e, t) {
                var _newTarget = this.constructor;
                l.checkNew(_newTarget, p), e !== u && l.throwError("cannot call constructor directly; use BigNumber.from", a.Logger.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = t, this._isBigNumber = !0, Object.freeze(this);
            }
            p.prototype.fromTwos = function (e) { return m(b(this).fromTwos(e)); };
            p.prototype.toTwos = function (e) { return m(b(this).toTwos(e)); };
            p.prototype.abs = function () { return "-" === this._hex[0] ? p.from(this._hex.substring(1)) : this; };
            p.prototype.add = function (e) { return m(b(this).add(b(e))); };
            p.prototype.sub = function (e) { return m(b(this).sub(b(e))); };
            p.prototype.div = function (e) { return p.from(e).isZero() && y("division by zero", "div"), m(b(this).div(b(e))); };
            p.prototype.mul = function (e) { return m(b(this).mul(b(e))); };
            p.prototype.mod = function (e) { var t = b(e); return t.isNeg() && y("cannot modulo negative values", "mod"), m(b(this).umod(t)); };
            p.prototype.pow = function (e) { var t = b(e); return t.isNeg() && y("cannot raise to negative values", "pow"), m(b(this).pow(t)); };
            p.prototype.and = function (e) { var t = b(e); return (this.isNegative() || t.isNeg()) && y("cannot 'and' negative values", "and"), m(b(this).and(t)); };
            p.prototype.or = function (e) { var t = b(e); return (this.isNegative() || t.isNeg()) && y("cannot 'or' negative values", "or"), m(b(this).or(t)); };
            p.prototype.xor = function (e) { var t = b(e); return (this.isNegative() || t.isNeg()) && y("cannot 'xor' negative values", "xor"), m(b(this).xor(t)); };
            p.prototype.mask = function (e) { return (this.isNegative() || e < 0) && y("cannot mask negative values", "mask"), m(b(this).maskn(e)); };
            p.prototype.shl = function (e) { return (this.isNegative() || e < 0) && y("cannot shift negative values", "shl"), m(b(this).shln(e)); };
            p.prototype.shr = function (e) { return (this.isNegative() || e < 0) && y("cannot shift negative values", "shr"), m(b(this).shrn(e)); };
            p.prototype.eq = function (e) { return b(this).eq(b(e)); };
            p.prototype.lt = function (e) { return b(this).lt(b(e)); };
            p.prototype.lte = function (e) { return b(this).lte(b(e)); };
            p.prototype.gt = function (e) { return b(this).gt(b(e)); };
            p.prototype.gte = function (e) { return b(this).gte(b(e)); };
            p.prototype.isNegative = function () { return "-" === this._hex[0]; };
            p.prototype.isZero = function () { return b(this).isZero(); };
            p.prototype.toNumber = function () { try {
                return b(this).toNumber();
            }
            catch (e) {
                y("overflow", "toNumber", this.toString());
            } return null; };
            p.prototype.toString = function () { return arguments.length > 0 && (10 === arguments[0] ? d || (d = !0, l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", a.Logger.errors.UNEXPECTED_ARGUMENT, {}) : l.throwError("BigNumber.toString does not accept parameters", a.Logger.errors.UNEXPECTED_ARGUMENT, {})), b(this).toString(10); };
            p.prototype.toHexString = function () { return this._hex; };
            p.prototype.toJSON = function (e) { return { type: "BigNumber", hex: this.toHexString() }; };
            p.from = function (e) { if (e instanceof p)
                return e; if ("string" == typeof e)
                return e.match(/^-?0x[0-9a-f]+$/i) ? new p(u, g(e)) : e.match(/^-?[0-9]+$/) ? new p(u, g(new c(e))) : l.throwArgumentError("invalid BigNumber string", "value", e); if ("number" == typeof e)
                return e % 1 && y("underflow", "BigNumber.from", e), (e >= f || e <= -f) && y("overflow", "BigNumber.from", e), p.from(String(e)); var t = e; if ("bigint" == typeof t)
                return p.from(t.toString()); if ((0, o.isBytes)(t))
                return p.from((0, o.hexlify)(t)); if (t)
                if (t.toHexString) {
                    var e_19 = t.toHexString();
                    if ("string" == typeof e_19)
                        return p.from(e_19);
                }
                else {
                    var e_20 = t._hex;
                    if (null == e_20 && "BigNumber" === t.type && (e_20 = t.hex), "string" == typeof e_20 && ((0, o.isHexString)(e_20) || "-" === e_20[0] && (0, o.isHexString)(e_20.substring(1))))
                        return p.from(e_20);
                } return l.throwArgumentError("invalid BigNumber value", "value", e); };
            p.isBigNumber = function (e) { return !(!e || !e._isBigNumber); };
            return p;
        }());
        function g(e) { if ("string" != typeof e)
            return g(e.toString(16)); if ("-" === e[0])
            return "-" === (e = e.substring(1))[0] && l.throwArgumentError("invalid hex", "value", e), "0x00" === (e = g(e)) ? e : "-" + e; if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e)
            return "0x00"; for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);)
            e = "0x" + e.substring(4); return e; }
        function m(e) { return p.from(g(e)); }
        function b(e) { var t = p.from(e).toHexString(); return "-" === t[0] ? new c("-" + t.substring(3), 16) : new c(t.substring(2), 16); }
        function y(e, t, r) { var n = { fault: e, operation: t }; return null != r && (n.value = r), l.throwError(e, a.Logger.errors.NUMERIC_FAULT, n); }
        function v(e) { return new c(e, 36).toString(16); }
        function A(e) { return new c(e, 16).toString(36); }
    }, 3286: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { arrayify: function () { return c; }, concat: function () { return l; }, hexConcat: function () { return b; }, hexDataLength: function () { return g; }, hexDataSlice: function () { return m; }, hexStripZeros: function () { return v; }, hexValue: function () { return y; }, hexZeroPad: function () { return A; }, hexlify: function () { return p; }, isBytes: function () { return s; }, isBytesLike: function () { return a; }, isHexString: function () { return h; }, joinSignature: function () { return w; }, splitSignature: function () { return S; }, stripZeros: function () { return u; }, zeroPad: function () { return f; } });
        var n = new (r(711).Logger)("bytes/5.0.10");
        function i(e) { return !!e.toHexString; }
        function o(e) { return e.slice || (e.slice = function () { var t = Array.prototype.slice.call(arguments); return o(new Uint8Array(Array.prototype.slice.apply(e, t))); }), e; }
        function a(e) { return h(e) && !(e.length % 2) || s(e); }
        function s(e) { if (null == e)
            return !1; if (e.constructor === Uint8Array)
            return !0; if ("string" == typeof e)
            return !1; if (null == e.length)
            return !1; for (var t_12 = 0; t_12 < e.length; t_12++) {
            var r_14 = e[t_12];
            if ("number" != typeof r_14 || r_14 < 0 || r_14 >= 256 || r_14 % 1)
                return !1;
        } return !0; }
        function c(e, t) { if (t || (t = {}), "number" == typeof e) {
            n.checkSafeUint53(e, "invalid arrayify value");
            var t_13 = [];
            for (; e;)
                t_13.unshift(255 & e), e = parseInt(String(e / 256));
            return 0 === t_13.length && t_13.push(0), o(new Uint8Array(t_13));
        } if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), i(e) && (e = e.toHexString()), h(e)) {
            var r_15 = e.substring(2);
            r_15.length % 2 && ("left" === t.hexPad ? r_15 = "0x0" + r_15.substring(2) : "right" === t.hexPad ? r_15 += "0" : n.throwArgumentError("hex data is odd-length", "value", e));
            var i_4 = [];
            for (var e_21 = 0; e_21 < r_15.length; e_21 += 2)
                i_4.push(parseInt(r_15.substring(e_21, e_21 + 2), 16));
            return o(new Uint8Array(i_4));
        } return s(e) ? o(new Uint8Array(e)) : n.throwArgumentError("invalid arrayify value", "value", e); }
        function l(e) { var t = e.map((function (e) { return c(e); })), r = t.reduce((function (e, t) { return e + t.length; }), 0), n = new Uint8Array(r); return t.reduce((function (e, t) { return (n.set(t, e), e + t.length); }), 0), o(n); }
        function u(e) { var t = c(e); if (0 === t.length)
            return t; var r = 0; for (; r < t.length && 0 === t[r];)
            r++; return r && (t = t.slice(r)), t; }
        function f(e, t) { (e = c(e)).length > t && n.throwArgumentError("value out of range", "value", arguments[0]); var r = new Uint8Array(t); return r.set(e, t - e.length), o(r); }
        function h(e, t) { return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t); }
        var d = "0123456789abcdef";
        function p(e, t) { if (t || (t = {}), "number" == typeof e) {
            n.checkSafeUint53(e, "invalid hexlify value");
            var t_14 = "";
            for (; e;)
                t_14 = d[15 & e] + t_14, e = Math.floor(e / 16);
            return t_14.length ? (t_14.length % 2 && (t_14 = "0" + t_14), "0x" + t_14) : "0x00";
        } if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), i(e))
            return e.toHexString(); if (h(e))
            return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase(); if (s(e)) {
            var t_15 = "0x";
            for (var r_16 = 0; r_16 < e.length; r_16++) {
                var n_5 = e[r_16];
                t_15 += d[(240 & n_5) >> 4] + d[15 & n_5];
            }
            return t_15;
        } return n.throwArgumentError("invalid hexlify value", "value", e); }
        function g(e) { if ("string" != typeof e)
            e = p(e);
        else if (!h(e) || e.length % 2)
            return null; return (e.length - 2) / 2; }
        function m(e, t, r) { return "string" != typeof e ? e = p(e) : (!h(e) || e.length % 2) && n.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t); }
        function b(e) { var t = "0x"; return e.forEach((function (e) { t += p(e).substring(2); })), t; }
        function y(e) { var t = v(p(e, { hexPad: "left" })); return "0x" === t ? "0x0" : t; }
        function v(e) { "string" != typeof e && (e = p(e)), h(e) || n.throwArgumentError("invalid hex string", "value", e), e = e.substring(2); var t = 0; for (; t < e.length && "0" === e[t];)
            t++; return "0x" + e.substring(t); }
        function A(e, t) { for ("string" != typeof e ? e = p(e) : h(e) || n.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;)
            e = "0x0" + e.substring(2); return e; }
        function S(e) { var t = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0 }; if (a(e)) {
            var r_17 = c(e);
            65 !== r_17.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), t.r = p(r_17.slice(0, 32)), t.s = p(r_17.slice(32, 64)), t.v = r_17[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r_17[32] |= 128), t._vs = p(r_17.slice(32, 64));
        }
        else {
            if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
                var r_18 = f(c(t._vs), 32);
                t._vs = p(r_18);
                var i_5 = r_18[0] >= 128 ? 1 : 0;
                null == t.recoveryParam ? t.recoveryParam = i_5 : t.recoveryParam !== i_5 && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), r_18[0] &= 127;
                var o_4 = p(r_18);
                null == t.s ? t.s = o_4 : t.s !== o_4 && n.throwArgumentError("signature v mismatch _vs", "signature", e);
            }
            null == t.recoveryParam ? null == t.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", e) : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != t.r && h(t.r) ? t.r = A(t.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && h(t.s) ? t.s = A(t.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", e);
            var r_19 = c(t.s);
            r_19[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r_19[0] |= 128);
            var i_6 = p(r_19);
            t._vs && (h(t._vs) || n.throwArgumentError("signature invalid _vs", "signature", e), t._vs = A(t._vs, 32)), null == t._vs ? t._vs = i_6 : t._vs !== i_6 && n.throwArgumentError("signature _vs mismatch v and s", "signature", e);
        } return t; }
        function w(e) { return p(l([(e = S(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"])); }
    }, 1046: function (e, t, r) {
        "use strict";
        r.d(t, { tL: function () { return i; }, _Y: function () { return o; }, fh: function () { return a; }, Bz: function () { return s; } });
        var n = r(2593);
        var i = n.O$.from(-1), o = n.O$.from(0), a = n.O$.from(1), s = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
    }, 7218: function (e, t, r) {
        "use strict";
        r.d(t, { R: function () { return n; } });
        var n = "0x0000000000000000000000000000000000000000000000000000000000000000";
    }, 5644: function (e, t, r) {
        "use strict";
        r.d(t, { i: function () { return n; } });
        var n = "hash/5.0.11";
    }, 2046: function (e, t, r) {
        "use strict";
        r.d(t, { id: function () { return o; } });
        var n = r(8197), i = r(4242);
        function o(e) { return (0, n.keccak256)((0, i.Y0)(e)); }
    }, 5931: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { id: function () { return n.id; }, namehash: function () { return i.V; }, isValidName: function () { return i.r; }, messagePrefix: function () { return o.B; }, hashMessage: function () { return o.r; }, _TypedDataEncoder: function () { return a.E; } });
        var n = r(2046), i = r(4706), o = r(3684), a = r(7827);
    }, 3684: function (e, t, r) {
        "use strict";
        r.d(t, { B: function () { return a; }, r: function () { return s; } });
        var n = r(3286), i = r(8197), o = r(4242);
        var a = "Ethereum Signed Message:\n";
        function s(e) { return "string" == typeof e && (e = (0, o.Y0)(e)), (0, i.keccak256)((0, n.concat)([(0, o.Y0)(a), (0, o.Y0)(String(e.length)), e])); }
    }, 4706: function (e, t, r) {
        "use strict";
        r.d(t, { r: function () { return h; }, V: function () { return d; } });
        var n = r(3286), i = r(5637), o = r(4242), a = r(8197), s = r(711), c = r(5644);
        var l = new s.Logger(c.i), u = new Uint8Array(32);
        u.fill(0);
        var f = new RegExp("^((.*)\\.)?([^.]+)$");
        function h(e) { try {
            var t_16 = e.split(".");
            for (var e_22 = 0; e_22 < t_16.length; e_22++)
                if (0 === (0, i.Ll)(t_16[e_22]).length)
                    throw new Error("empty");
            return !0;
        }
        catch (e) { } return !1; }
        function d(e) { "string" != typeof e && l.throwArgumentError("invalid address - " + String(e), "name", e); var t = u; for (; e.length;) {
            var r_20 = e.match(f), s_2 = (0, o.Y0)((0, i.Ll)(r_20[3]));
            t = (0, a.keccak256)((0, n.concat)([t, (0, a.keccak256)(s_2)])), e = r_20[2] || "";
        } return (0, n.hexlify)(t); }
    }, 7827: function (e, t, r) {
        "use strict";
        r.d(t, { E: function () { return k; } });
        var n = r(4594), i = r(2593), o = r(3286), a = r(8197), s = r(3587), c = r(711), l = r(5644), u = r(2046);
        var f = new c.Logger(l.i), h = new Uint8Array(32);
        h.fill(0);
        var d = i.O$.from(-1), p = i.O$.from(0), g = i.O$.from(1), m = i.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), b = (0, o.hexZeroPad)(g.toHexString(), 32), y = (0, o.hexZeroPad)(p.toHexString(), 32), v = { name: "string", version: "string", chainId: "uint256", verifyingContract: "address", salt: "bytes32" }, A = ["name", "version", "chainId", "verifyingContract", "salt"];
        function S(e) { return function (t) { return "string" != typeof t && f.throwArgumentError("invalid domain value for " + JSON.stringify(e), "domain." + e, t), t; }; }
        var w = { name: S("name"), version: S("version"), chainId: function (e) { try {
                return i.O$.from(e).toString();
            }
            catch (e) { } return f.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e); }, verifyingContract: function (e) { try {
                return (0, n.getAddress)(e).toLowerCase();
            }
            catch (e) { } return f.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e); }, salt: function (e) { try {
                var t_17 = (0, o.arrayify)(e);
                if (32 !== t_17.length)
                    throw new Error("bad length");
                return (0, o.hexlify)(t_17);
            }
            catch (e) { } return f.throwArgumentError('invalid domain value "salt"', "domain.salt", e); } };
        function E(e) { {
            var t_18 = e.match(/^(u?)int(\d*)$/);
            if (t_18) {
                var r_21 = "" === t_18[1], n_6 = parseInt(t_18[2] || "256");
                (n_6 % 8 != 0 || n_6 > 256 || t_18[2] && t_18[2] !== String(n_6)) && f.throwArgumentError("invalid numeric width", "type", e);
                var a_2 = m.mask(r_21 ? n_6 - 1 : n_6), s_3 = r_21 ? a_2.add(g).mul(d) : p;
                return function (t) { var r = i.O$.from(t); return (r.lt(s_3) || r.gt(a_2)) && f.throwArgumentError("value out-of-bounds for " + e, "value", t), (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32); };
            }
        } {
            var t_19 = e.match(/^bytes(\d+)$/);
            if (t_19) {
                var r_22 = parseInt(t_19[1]);
                return (0 === r_22 || r_22 > 32 || t_19[1] !== String(r_22)) && f.throwArgumentError("invalid bytes width", "type", e), function (t) { return (0, o.arrayify)(t).length !== r_22 && f.throwArgumentError("invalid length for " + e, "value", t), function (e) { var t = (0, o.arrayify)(e), r = t.length % 32; return r ? (0, o.hexConcat)([t, h.slice(r)]) : (0, o.hexlify)(t); }(t); };
            }
        } switch (e) {
            case "address": return function (e) { return (0, o.hexZeroPad)((0, n.getAddress)(e), 32); };
            case "bool": return function (e) { return e ? b : y; };
            case "bytes": return function (e) { return (0, a.keccak256)(e); };
            case "string": return function (e) { return (0, u.id)(e); };
        } return null; }
        function T(e, t) { return e + "(" + t.map((function (_a) {
            var e = _a.name, t = _a.type;
            return t + " " + e;
        })).join(",") + ")"; }
        var k = (function () {
            function k(e) {
                (0, s.defineReadOnly)(this, "types", Object.freeze((0, s.deepCopy)(e))), (0, s.defineReadOnly)(this, "_encoderCache", {}), (0, s.defineReadOnly)(this, "_types", {});
                var t = {}, r = {}, n = {};
                Object.keys(e).forEach((function (e) { t[e] = {}, r[e] = [], n[e] = {}; }));
                var _loop_3 = function (n_7) {
                    var i_7 = {};
                    e[n_7].forEach((function (o) { i_7[o.name] && f.throwArgumentError("duplicate variable name " + JSON.stringify(o.name) + " in " + JSON.stringify(n_7), "types", e), i_7[o.name] = !0; var a = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1]; a === n_7 && f.throwArgumentError("circular type reference to " + JSON.stringify(a), "types", e), E(a) || (r[a] || f.throwArgumentError("unknown type " + JSON.stringify(a), "types", e), r[a].push(n_7), t[n_7][a] = !0); }));
                };
                for (var n_7 in e) {
                    _loop_3(n_7);
                }
                var i = Object.keys(r).filter((function (e) { return 0 === r[e].length; }));
                0 === i.length ? f.throwArgumentError("missing primary type", "types", e) : i.length > 1 && f.throwArgumentError("ambiguous primary types or unused types: " + i.map((function (e) { return JSON.stringify(e); })).join(", "), "types", e), (0, s.defineReadOnly)(this, "primaryType", i[0]), function i(o, a) { a[o] && f.throwArgumentError("circular type reference to " + JSON.stringify(o), "types", e), a[o] = !0, Object.keys(t[o]).forEach((function (e) { r[e] && (i(e, a), Object.keys(a).forEach((function (t) { n[t][e] = !0; }))); })), delete a[o]; }(this.primaryType, {});
                for (var t_20 in n) {
                    var r_23 = Object.keys(n[t_20]);
                    r_23.sort(), this._types[t_20] = T(t_20, e[t_20]) + r_23.map((function (t) { return T(t, e[t]); })).join("");
                }
            }
            k.prototype.getEncoder = function (e) { var t = this._encoderCache[e]; return t || (t = this._encoderCache[e] = this._getEncoder(e)), t; };
            k.prototype._getEncoder = function (e) {
                var _this = this;
                {
                    var t_21 = E(e);
                    if (t_21)
                        return t_21;
                }
                var t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                if (t) {
                    var e_23 = t[1], r_24 = this.getEncoder(e_23), n_8 = parseInt(t[3]);
                    return function (t) { n_8 >= 0 && t.length !== n_8 && f.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t); var i = t.map(r_24); return _this._types[e_23] && (i = i.map(a.keccak256)), (0, a.keccak256)((0, o.hexConcat)(i)); };
                }
                var r = this.types[e];
                if (r) {
                    var t_22 = (0, u.id)(this._types[e]);
                    return function (e) { var n = r.map((function (_a) {
                        var t = _a.name, r = _a.type;
                        var n = _this.getEncoder(r)(e[t]);
                        return _this._types[r] ? (0, a.keccak256)(n) : n;
                    })); return n.unshift(t_22), (0, o.hexConcat)(n); };
                }
                return f.throwArgumentError("unknown type: " + e, "type", e);
            };
            k.prototype.encodeType = function (e) { var t = this._types[e]; return t || f.throwArgumentError("unknown type: " + JSON.stringify(e), "name", e), t; };
            k.prototype.encodeData = function (e, t) { return this.getEncoder(e)(t); };
            k.prototype.hashStruct = function (e, t) { return (0, a.keccak256)(this.encodeData(e, t)); };
            k.prototype.encode = function (e) { return this.encodeData(this.primaryType, e); };
            k.prototype.hash = function (e) { return this.hashStruct(this.primaryType, e); };
            k.prototype._visit = function (e, t, r) {
                var _this = this;
                if (E(e))
                    return r(e, t);
                var n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                if (n) {
                    var e_24 = n[1], i_8 = parseInt(n[3]);
                    return i_8 >= 0 && t.length !== i_8 && f.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map((function (t) { return _this._visit(e_24, t, r); }));
                }
                var i = this.types[e];
                return i ? i.reduce((function (e, _a) {
                    var n = _a.name, i = _a.type;
                    return (e[n] = _this._visit(i, t[n], r), e);
                }), {}) : f.throwArgumentError("unknown type: " + e, "type", e);
            };
            k.prototype.visit = function (e, t) { return this._visit(this.primaryType, e, t); };
            k.from = function (e) { return new k(e); };
            k.getPrimaryType = function (e) { return k.from(e).primaryType; };
            k.hashStruct = function (e, t, r) { return k.from(t).hashStruct(e, r); };
            k.hashDomain = function (e) { var t = []; for (var r_25 in e) {
                var n_9 = v[r_25];
                n_9 || f.throwArgumentError("invalid typed-data domain key: " + JSON.stringify(r_25), "domain", e), t.push({ name: r_25, type: n_9 });
            } return t.sort((function (e, t) { return A.indexOf(e.name) - A.indexOf(t.name); })), k.hashStruct("EIP712Domain", { EIP712Domain: t }, e); };
            k.encode = function (e, t, r) { return (0, o.hexConcat)(["0x1901", k.hashDomain(e), k.from(t).hash(r)]); };
            k.hash = function (e, t, r) { return (0, a.keccak256)(k.encode(e, t, r)); };
            k.resolveNames = function (e, t, r, n) { return i = this, a = void 0, l = function () { var i, a, _a, _b, _i, e_25, _c, _d; return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        e = (0, s.shallowCopy)(e);
                        i = {};
                        e.verifyingContract && !(0, o.isHexString)(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
                        a = k.from(t);
                        a.visit(r, (function (e, t) { return ("address" !== e || (0, o.isHexString)(t, 20) || (i[t] = "0x"), t); }));
                        _a = [];
                        for (_b in i)
                            _a.push(_b);
                        _i = 0;
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        e_25 = _a[_i];
                        _c = i;
                        _d = e_25;
                        return [4, n(e_25)];
                    case 2:
                        _c[_d] = _f.sent();
                        _f.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, (e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), r = a.visit(r, (function (e, t) { return "address" === e && i[t] ? i[t] : t; })), { domain: e, value: r })];
                }
            }); }, new ((c = void 0) || (c = Promise))((function (e, t) { function r(e) { try {
                o(l.next(e));
            }
            catch (e) {
                t(e);
            } } function n(e) { try {
                o(l.throw(e));
            }
            catch (e) {
                t(e);
            } } function o(t) { var i; t.done ? e(t.value) : (i = t.value, i instanceof c ? i : new c((function (e) { e(i); }))).then(r, n); } o((l = l.apply(i, a || [])).next()); })); var i, a, c, l; };
            k.getPayload = function (e, t, r) { k.hashDomain(e); var n = {}, a = []; A.forEach((function (t) { var r = e[t]; null != r && (n[t] = w[t](r), a.push({ name: t, type: v[t] })); })); var c = k.from(t), l = (0, s.shallowCopy)(t); return l.EIP712Domain ? f.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : l.EIP712Domain = a, c.encode(r), { types: l, domain: n, primaryType: c.primaryType, message: c.visit(r, (function (e, t) { if (e.match(/^bytes(\d*)/))
                    return (0, o.hexlify)((0, o.arrayify)(t)); if (e.match(/^u?int/)) {
                    var e_26 = "", r_26 = i.O$.from(t);
                    return r_26.isNegative() && (e_26 = "-", r_26 = r_26.mul(-1)), e_26 + (0, o.hexValue)(r_26.toHexString());
                } switch (e) {
                    case "address": return t.toLowerCase();
                    case "bool": return !!t;
                    case "string": return "string" != typeof t && f.throwArgumentError("invalid string", "value", t), t;
                } return f.throwArgumentError("unsupported type", "type", e); })) }; };
            return k;
        }());
    }, 1681: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { HDNode: function () { return ue; }, defaultPath: function () { return le; }, entropyToMnemonic: function () { return de; }, isValidMnemonic: function () { return pe; }, mnemonicToEntropy: function () { return he; }, mnemonicToSeed: function () { return fe; } });
        var n = r(7727), i = r(3286), o = r(2593), a = r(4242), s = r(5306), c = r(3587), l = r(2768), u = r(3951), f = r(1261), h = r(4377), d = r(2046), p = r(711);
        var g = new p.Logger("wordlists/5.0.9");
        var m = (function () {
            function m(e) {
                var _newTarget = this.constructor;
                g.checkAbstract(_newTarget, m), (0, c.defineReadOnly)(this, "locale", e);
            }
            m.prototype.split = function (e) { return e.toLowerCase().split(/ +/g); };
            m.prototype.join = function (e) { return e.join(" "); };
            m.check = function (e) { var t = []; for (var r_27 = 0; r_27 < 2048; r_27++) {
                var n_10 = e.getWord(r_27);
                if (r_27 !== e.getWordIndex(n_10))
                    return "0x";
                t.push(n_10);
            } return (0, d.id)(t.join("\n") + "\n"); };
            m.register = function (e, t) { t || (t = e.locale); };
            return m;
        }());
        var b = null;
        function y(e) { if (null == b && (b = "AbdikaceAbecedaAdresaAgreseAkceAktovkaAlejAlkoholAmputaceAnanasAndulkaAnekdotaAnketaAntikaAnulovatArchaAroganceAsfaltAsistentAspiraceAstmaAstronomAtlasAtletikaAtolAutobusAzylBabkaBachorBacilBaculkaBadatelBagetaBagrBahnoBakterieBaladaBaletkaBalkonBalonekBalvanBalzaBambusBankomatBarbarBaretBarmanBarokoBarvaBaterkaBatohBavlnaBazalkaBazilikaBazukaBednaBeranBesedaBestieBetonBezinkaBezmocBeztakBicyklBidloBiftekBikinyBilanceBiografBiologBitvaBizonBlahobytBlatouchBlechaBleduleBleskBlikatBliznaBlokovatBlouditBludBobekBobrBodlinaBodnoutBohatostBojkotBojovatBokorysBolestBorecBoroviceBotaBoubelBouchatBoudaBouleBouratBoxerBradavkaBramboraBrankaBratrBreptaBriketaBrkoBrlohBronzBroskevBrunetkaBrusinkaBrzdaBrzyBublinaBubnovatBuchtaBuditelBudkaBudovaBufetBujarostBukviceBuldokBulvaBundaBunkrBurzaButikBuvolBuzolaBydletBylinaBytovkaBzukotCapartCarevnaCedrCeduleCejchCejnCelaCelerCelkemCelniceCeninaCennostCenovkaCentrumCenzorCestopisCetkaChalupaChapadloCharitaChataChechtatChemieChichotChirurgChladChlebaChlubitChmelChmuraChobotChocholChodbaCholeraChomoutChopitChorobaChovChrapotChrlitChrtChrupChtivostChudinaChutnatChvatChvilkaChvostChybaChystatChytitCibuleCigaretaCihelnaCihlaCinkotCirkusCisternaCitaceCitrusCizinecCizostClonaCokolivCouvatCtitelCtnostCudnostCuketaCukrCupotCvaknoutCvalCvikCvrkotCyklistaDalekoDarebaDatelDatumDceraDebataDechovkaDecibelDeficitDeflaceDeklDekretDemokratDepreseDerbyDeskaDetektivDikobrazDiktovatDiodaDiplomDiskDisplejDivadloDivochDlahaDlouhoDluhopisDnesDobroDobytekDocentDochutitDodnesDohledDohodaDohraDojemDojniceDokladDokolaDoktorDokumentDolarDolevaDolinaDomaDominantDomluvitDomovDonutitDopadDopisDoplnitDoposudDoprovodDopustitDorazitDorostDortDosahDoslovDostatekDosudDosytaDotazDotekDotknoutDoufatDoutnatDovozceDozaduDoznatDozorceDrahotaDrakDramatikDravecDrazeDrdolDrobnostDrogerieDrozdDrsnostDrtitDrzostDubenDuchovnoDudekDuhaDuhovkaDusitDusnoDutostDvojiceDvorecDynamitEkologEkonomieElektronElipsaEmailEmiseEmoceEmpatieEpizodaEpochaEpopejEposEsejEsenceEskortaEskymoEtiketaEuforieEvoluceExekuceExkurzeExpediceExplozeExportExtraktFackaFajfkaFakultaFanatikFantazieFarmacieFavoritFazoleFederaceFejetonFenkaFialkaFigurantFilozofFiltrFinanceFintaFixaceFjordFlanelFlirtFlotilaFondFosforFotbalFotkaFotonFrakceFreskaFrontaFukarFunkceFyzikaGalejeGarantGenetikaGeologGilotinaGlazuraGlejtGolemGolfistaGotikaGrafGramofonGranuleGrepGrilGrogGroteskaGumaHadiceHadrHalaHalenkaHanbaHanopisHarfaHarpunaHavranHebkostHejkalHejnoHejtmanHektarHelmaHematomHerecHernaHesloHezkyHistorikHladovkaHlasivkyHlavaHledatHlenHlodavecHlohHloupostHltatHlubinaHluchotaHmatHmotaHmyzHnisHnojivoHnoutHoblinaHobojHochHodinyHodlatHodnotaHodovatHojnostHokejHolinkaHolkaHolubHomoleHonitbaHonoraceHoralHordaHorizontHorkoHorlivecHormonHorninaHoroskopHorstvoHospodaHostinaHotovostHoubaHoufHoupatHouskaHovorHradbaHraniceHravostHrazdaHrbolekHrdinaHrdloHrdostHrnekHrobkaHromadaHrotHroudaHrozenHrstkaHrubostHryzatHubenostHubnoutHudbaHukotHumrHusitaHustotaHvozdHybnostHydrantHygienaHymnaHysterikIdylkaIhnedIkonaIluzeImunitaInfekceInflaceInkasoInovaceInspekceInternetInvalidaInvestorInzerceIronieJablkoJachtaJahodaJakmileJakostJalovecJantarJarmarkJaroJasanJasnoJatkaJavorJazykJedinecJedleJednatelJehlanJekotJelenJelitoJemnostJenomJepiceJeseterJevitJezdecJezeroJinakJindyJinochJiskraJistotaJitrniceJizvaJmenovatJogurtJurtaKabaretKabelKabinetKachnaKadetKadidloKahanKajakKajutaKakaoKaktusKalamitaKalhotyKalibrKalnostKameraKamkolivKamnaKanibalKanoeKantorKapalinaKapelaKapitolaKapkaKapleKapotaKaprKapustaKapybaraKaramelKarotkaKartonKasaKatalogKatedraKauceKauzaKavalecKazajkaKazetaKazivostKdekolivKdesiKedlubenKempKeramikaKinoKlacekKladivoKlamKlapotKlasikaKlaunKlecKlenbaKlepatKlesnoutKlidKlimaKlisnaKloboukKlokanKlopaKloubKlubovnaKlusatKluzkostKmenKmitatKmotrKnihaKnotKoaliceKoberecKobkaKoblihaKobylaKocourKohoutKojenecKokosKoktejlKolapsKoledaKolizeKoloKomandoKometaKomikKomnataKomoraKompasKomunitaKonatKonceptKondiceKonecKonfeseKongresKoninaKonkursKontaktKonzervaKopanecKopieKopnoutKoprovkaKorbelKorektorKormidloKoroptevKorpusKorunaKorytoKorzetKosatecKostkaKotelKotletaKotoulKoukatKoupelnaKousekKouzloKovbojKozaKozorohKrabiceKrachKrajinaKralovatKrasopisKravataKreditKrejcarKresbaKrevetaKriketKritikKrizeKrkavecKrmelecKrmivoKrocanKrokKronikaKropitKroupaKrovkaKrtekKruhadloKrupiceKrutostKrvinkaKrychleKryptaKrystalKrytKudlankaKufrKujnostKuklaKulajdaKulichKulkaKulometKulturaKunaKupodivuKurtKurzorKutilKvalitaKvasinkaKvestorKynologKyselinaKytaraKyticeKytkaKytovecKyvadloLabradorLachtanLadnostLaikLakomecLamelaLampaLanovkaLasiceLasoLasturaLatinkaLavinaLebkaLeckdyLedenLedniceLedovkaLedvinaLegendaLegieLegraceLehceLehkostLehnoutLektvarLenochodLentilkaLepenkaLepidloLetadloLetecLetmoLetokruhLevhartLevitaceLevobokLibraLichotkaLidojedLidskostLihovinaLijavecLilekLimetkaLinieLinkaLinoleumListopadLitinaLitovatLobistaLodivodLogikaLogopedLokalitaLoketLomcovatLopataLopuchLordLososLotrLoudalLouhLoukaLouskatLovecLstivostLucernaLuciferLumpLuskLustraceLviceLyraLyrikaLysinaMadamMadloMagistrMahagonMajetekMajitelMajoritaMakakMakoviceMakrelaMalbaMalinaMalovatMalviceMaminkaMandleMankoMarnostMasakrMaskotMasopustMaticeMatrikaMaturitaMazanecMazivoMazlitMazurkaMdlobaMechanikMeditaceMedovinaMelasaMelounMentolkaMetlaMetodaMetrMezeraMigraceMihnoutMihuleMikinaMikrofonMilenecMilimetrMilostMimikaMincovnaMinibarMinometMinulostMiskaMistrMixovatMladostMlhaMlhovinaMlokMlsatMluvitMnichMnohemMobilMocnostModelkaModlitbaMohylaMokroMolekulaMomentkaMonarchaMonoklMonstrumMontovatMonzunMosazMoskytMostMotivaceMotorkaMotykaMouchaMoudrostMozaikaMozekMozolMramorMravenecMrkevMrtvolaMrzetMrzutostMstitelMudrcMuflonMulatMumieMuniceMusetMutaceMuzeumMuzikantMyslivecMzdaNabouratNachytatNadaceNadbytekNadhozNadobroNadpisNahlasNahnatNahodileNahraditNaivitaNajednouNajistoNajmoutNaklonitNakonecNakrmitNalevoNamazatNamluvitNanometrNaokoNaopakNaostroNapadatNapevnoNaplnitNapnoutNaposledNaprostoNaroditNarubyNarychloNasaditNasekatNaslepoNastatNatolikNavenekNavrchNavzdoryNazvatNebeNechatNeckyNedalekoNedbatNeduhNegaceNehetNehodaNejenNejprveNeklidNelibostNemilostNemocNeochotaNeonkaNepokojNerostNervNesmyslNesouladNetvorNeuronNevinaNezvykleNicotaNijakNikamNikdyNiklNikterakNitroNoclehNohaviceNominaceNoraNorekNositelNosnostNouzeNovinyNovotaNozdraNudaNudleNugetNutitNutnostNutrieNymfaObalObarvitObavaObdivObecObehnatObejmoutObezitaObhajobaObilniceObjasnitObjektObklopitOblastOblekOblibaOblohaObludaObnosObohatitObojekOboutObrazecObrnaObrubaObrysObsahObsluhaObstaratObuvObvazObvinitObvodObvykleObyvatelObzorOcasOcelOcenitOchladitOchotaOchranaOcitnoutOdbojOdbytOdchodOdcizitOdebratOdeslatOdevzdatOdezvaOdhadceOdhoditOdjetOdjinudOdkazOdkoupitOdlivOdlukaOdmlkaOdolnostOdpadOdpisOdploutOdporOdpustitOdpykatOdrazkaOdsouditOdstupOdsunOdtokOdtudOdvahaOdvetaOdvolatOdvracetOdznakOfinaOfsajdOhlasOhniskoOhradaOhrozitOhryzekOkapOkeniceOklikaOknoOkouzlitOkovyOkrasaOkresOkrsekOkruhOkupantOkurkaOkusitOlejninaOlizovatOmakOmeletaOmezitOmladinaOmlouvatOmluvaOmylOnehdyOpakovatOpasekOperaceOpiceOpilostOpisovatOporaOpoziceOpravduOprotiOrbitalOrchestrOrgieOrliceOrlojOrtelOsadaOschnoutOsikaOsivoOslavaOslepitOslnitOslovitOsnovaOsobaOsolitOspalecOstenOstrahaOstudaOstychOsvojitOteplitOtiskOtopOtrhatOtrlostOtrokOtrubyOtvorOvanoutOvarOvesOvlivnitOvoceOxidOzdobaPachatelPacientPadouchPahorekPaktPalandaPalecPalivoPalubaPamfletPamlsekPanenkaPanikaPannaPanovatPanstvoPantoflePaprikaParketaParodiePartaParukaParybaPasekaPasivitaPastelkaPatentPatronaPavoukPaznehtPazourekPeckaPedagogPejsekPekloPelotonPenaltaPendrekPenzePeriskopPeroPestrostPetardaPeticePetrolejPevninaPexesoPianistaPihaPijavicePiklePiknikPilinaPilnostPilulkaPinzetaPipetaPisatelPistolePitevnaPivnicePivovarPlacentaPlakatPlamenPlanetaPlastikaPlatitPlavidloPlazPlechPlemenoPlentaPlesPletivoPlevelPlivatPlnitPlnoPlochaPlodinaPlombaPloutPlukPlynPobavitPobytPochodPocitPoctivecPodatPodcenitPodepsatPodhledPodivitPodkladPodmanitPodnikPodobaPodporaPodrazPodstataPodvodPodzimPoeziePohankaPohnutkaPohovorPohromaPohybPointaPojistkaPojmoutPokazitPoklesPokojPokrokPokutaPokynPolednePolibekPolknoutPolohaPolynomPomaluPominoutPomlkaPomocPomstaPomysletPonechatPonorkaPonurostPopadatPopelPopisekPoplachPoprositPopsatPopudPoradcePorcePorodPoruchaPoryvPosaditPosedPosilaPoskokPoslanecPosouditPospoluPostavaPosudekPosypPotahPotkanPotleskPotomekPotravaPotupaPotvoraPoukazPoutoPouzdroPovahaPovidlaPovlakPovozPovrchPovstatPovykPovzdechPozdravPozemekPoznatekPozorPozvatPracovatPrahoryPraktikaPralesPraotecPraporekPrasePravdaPrincipPrknoProbuditProcentoProdejProfeseProhraProjektProlomitPromilePronikatPropadProrokProsbaProtonProutekProvazPrskavkaPrstenPrudkostPrutPrvekPrvohoryPsanecPsovodPstruhPtactvoPubertaPuchPudlPukavecPuklinaPukrlePultPumpaPuncPupenPusaPusinkaPustinaPutovatPutykaPyramidaPyskPytelRacekRachotRadiaceRadniceRadonRaftRagbyRaketaRakovinaRamenoRampouchRandeRarachRaritaRasovnaRastrRatolestRazanceRazidloReagovatReakceReceptRedaktorReferentReflexRejnokReklamaRekordRekrutRektorReputaceRevizeRevmaRevolverRezervaRiskovatRizikoRobotikaRodokmenRohovkaRokleRokokoRomanetoRopovodRopuchaRorejsRosolRostlinaRotmistrRotopedRotundaRoubenkaRouchoRoupRouraRovinaRovniceRozborRozchodRozdatRozeznatRozhodceRozinkaRozjezdRozkazRozlohaRozmarRozpadRozruchRozsahRoztokRozumRozvodRubrikaRuchadloRukaviceRukopisRybaRybolovRychlostRydloRypadloRytinaRyzostSadistaSahatSakoSamecSamizdatSamotaSanitkaSardinkaSasankaSatelitSazbaSazeniceSborSchovatSebrankaSeceseSedadloSedimentSedloSehnatSejmoutSekeraSektaSekundaSekvojeSemenoSenoServisSesaditSeshoraSeskokSeslatSestraSesuvSesypatSetbaSetinaSetkatSetnoutSetrvatSeverSeznamShodaShrnoutSifonSilniceSirkaSirotekSirupSituaceSkafandrSkaliskoSkanzenSkautSkeptikSkicaSkladbaSkleniceSkloSkluzSkobaSkokanSkoroSkriptaSkrzSkupinaSkvostSkvrnaSlabikaSladidloSlaninaSlastSlavnostSledovatSlepecSlevaSlezinaSlibSlinaSlizniceSlonSloupekSlovoSluchSluhaSlunceSlupkaSlzaSmaragdSmetanaSmilstvoSmlouvaSmogSmradSmrkSmrtkaSmutekSmyslSnadSnahaSnobSobotaSochaSodovkaSokolSopkaSotvaSoubojSoucitSoudceSouhlasSouladSoumrakSoupravaSousedSoutokSouvisetSpalovnaSpasitelSpisSplavSpodekSpojenecSpoluSponzorSpornostSpoustaSprchaSpustitSrandaSrazSrdceSrnaSrnecSrovnatSrpenSrstSrubStaniceStarostaStatikaStavbaStehnoStezkaStodolaStolekStopaStornoStoupatStrachStresStrhnoutStromStrunaStudnaStupniceStvolStykSubjektSubtropySucharSudostSuknoSundatSunoutSurikataSurovinaSvahSvalstvoSvetrSvatbaSvazekSvisleSvitekSvobodaSvodidloSvorkaSvrabSykavkaSykotSynekSynovecSypatSypkostSyrovostSyselSytostTabletkaTabuleTahounTajemnoTajfunTajgaTajitTajnostTaktikaTamhleTamponTancovatTanecTankerTapetaTaveninaTazatelTechnikaTehdyTekutinaTelefonTemnotaTendenceTenistaTenorTeplotaTepnaTeprveTerapieTermoskaTextilTichoTiskopisTitulekTkadlecTkaninaTlapkaTleskatTlukotTlupaTmelToaletaTopinkaTopolTorzoTouhaToulecTradiceTraktorTrampTrasaTraverzaTrefitTrestTrezorTrhavinaTrhlinaTrochuTrojiceTroskaTroubaTrpceTrpitelTrpkostTrubecTruchlitTruhliceTrusTrvatTudyTuhnoutTuhostTundraTuristaTurnajTuzemskoTvarohTvorbaTvrdostTvrzTygrTykevUbohostUbozeUbratUbrousekUbrusUbytovnaUchoUctivostUdivitUhraditUjednatUjistitUjmoutUkazatelUklidnitUklonitUkotvitUkrojitUliceUlitaUlovitUmyvadloUnavitUniformaUniknoutUpadnoutUplatnitUplynoutUpoutatUpravitUranUrazitUsednoutUsilovatUsmrtitUsnadnitUsnoutUsouditUstlatUstrnoutUtahovatUtkatUtlumitUtonoutUtopenecUtrousitUvalitUvolnitUvozovkaUzdravitUzelUzeninaUzlinaUznatVagonValchaValounVanaVandalVanilkaVaranVarhanyVarovatVcelkuVchodVdovaVedroVegetaceVejceVelbloudVeletrhVelitelVelmocVelrybaVenkovVerandaVerzeVeselkaVeskrzeVesniceVespoduVestaVeterinaVeverkaVibraceVichrVideohraVidinaVidleVilaViniceVisetVitalitaVizeVizitkaVjezdVkladVkusVlajkaVlakVlasecVlevoVlhkostVlivVlnovkaVloupatVnucovatVnukVodaVodivostVodoznakVodstvoVojenskyVojnaVojskoVolantVolbaVolitVolnoVoskovkaVozidloVozovnaVpravoVrabecVracetVrahVrataVrbaVrcholekVrhatVrstvaVrtuleVsaditVstoupitVstupVtipVybavitVybratVychovatVydatVydraVyfotitVyhledatVyhnoutVyhoditVyhraditVyhubitVyjasnitVyjetVyjmoutVyklopitVykonatVylekatVymazatVymezitVymizetVymysletVynechatVynikatVynutitVypadatVyplatitVypravitVypustitVyrazitVyrovnatVyrvatVyslovitVysokoVystavitVysunoutVysypatVytasitVytesatVytratitVyvinoutVyvolatVyvrhelVyzdobitVyznatVzaduVzbuditVzchopitVzdorVzduchVzdychatVzestupVzhledemVzkazVzlykatVznikVzorekVzpouraVztahVztekXylofonZabratZabydletZachovatZadarmoZadusitZafoukatZahltitZahoditZahradaZahynoutZajatecZajetZajistitZaklepatZakoupitZalepitZamezitZamotatZamysletZanechatZanikatZaplatitZapojitZapsatZarazitZastavitZasunoutZatajitZatemnitZatknoutZaujmoutZavalitZaveletZavinitZavolatZavrtatZazvonitZbavitZbrusuZbudovatZbytekZdalekaZdarmaZdatnostZdivoZdobitZdrojZdvihZdymadloZeleninaZemanZeminaZeptatZezaduZezdolaZhatitZhltnoutZhlubokaZhotovitZhrubaZimaZimniceZjemnitZklamatZkoumatZkratkaZkumavkaZlatoZlehkaZlobaZlomZlostZlozvykZmapovatZmarZmatekZmijeZmizetZmocnitZmodratZmrzlinaZmutovatZnakZnalostZnamenatZnovuZobrazitZotavitZoubekZoufaleZploditZpomalitZpravaZprostitZprudkaZprvuZradaZranitZrcadloZrnitostZrnoZrovnaZrychlitZrzavostZtichaZtratitZubovinaZubrZvednoutZvenkuZveselaZvonZvratZvukovodZvyk".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x25f44555f4af25b51a711136e1c7d6e50ce9f8917d39d6b1f076b2bb4d2fac1a" !== m.check(e)))
            throw b = null, new Error("BIP39 Wordlist for en (English) FAILED"); }
        var v = new (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super.call(this, "cz") || this;
            }
            class_1.prototype.getWord = function (e) { return y(this), b[e]; };
            class_1.prototype.getWordIndex = function (e) { return y(this), b.indexOf(e); };
            return class_1;
        }(m));
        m.register(v);
        var A = null;
        function S(e) { if (null == A && (A = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== m.check(e)))
            throw A = null, new Error("BIP39 Wordlist for en (English) FAILED"); }
        var w = new (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                return _super.call(this, "en") || this;
            }
            class_2.prototype.getWord = function (e) { return S(this), A[e]; };
            class_2.prototype.getWordIndex = function (e) { return S(this), A.indexOf(e); };
            return class_2;
        }(m));
        m.register(w);
        var E = {};
        var T = null;
        function k(e) { return g.checkNormalize(), (0, a.ZN)(Array.prototype.filter.call((0, a.Y0)(e.normalize("NFD").toLowerCase()), (function (e) { return e >= 65 && e <= 90 || e >= 97 && e <= 123; }))); }
        function B(e) { if (null == T && (T = "A/bacoAbdomenAbejaAbiertoAbogadoAbonoAbortoAbrazoAbrirAbueloAbusoAcabarAcademiaAccesoAccio/nAceiteAcelgaAcentoAceptarA/cidoAclararAcne/AcogerAcosoActivoActoActrizActuarAcudirAcuerdoAcusarAdictoAdmitirAdoptarAdornoAduanaAdultoAe/reoAfectarAficio/nAfinarAfirmarA/gilAgitarAgoni/aAgostoAgotarAgregarAgrioAguaAgudoA/guilaAgujaAhogoAhorroAireAislarAjedrezAjenoAjusteAlacra/nAlambreAlarmaAlbaA/lbumAlcaldeAldeaAlegreAlejarAlertaAletaAlfilerAlgaAlgodo/nAliadoAlientoAlivioAlmaAlmejaAlmi/barAltarAltezaAltivoAltoAlturaAlumnoAlzarAmableAmanteAmapolaAmargoAmasarA/mbarA/mbitoAmenoAmigoAmistadAmorAmparoAmplioAnchoAncianoAnclaAndarAnde/nAnemiaA/nguloAnilloA/nimoAni/sAnotarAntenaAntiguoAntojoAnualAnularAnuncioA~adirA~ejoA~oApagarAparatoApetitoApioAplicarApodoAporteApoyoAprenderAprobarApuestaApuroAradoAra~aArarA/rbitroA/rbolArbustoArchivoArcoArderArdillaArduoA/reaA/ridoAriesArmoni/aArne/sAromaArpaArpo/nArregloArrozArrugaArteArtistaAsaAsadoAsaltoAscensoAsegurarAseoAsesorAsientoAsiloAsistirAsnoAsombroA/speroAstillaAstroAstutoAsumirAsuntoAtajoAtaqueAtarAtentoAteoA/ticoAtletaA/tomoAtraerAtrozAtu/nAudazAudioAugeAulaAumentoAusenteAutorAvalAvanceAvaroAveAvellanaAvenaAvestruzAvio/nAvisoAyerAyudaAyunoAzafra/nAzarAzoteAzu/carAzufreAzulBabaBaborBacheBahi/aBaileBajarBalanzaBalco/nBaldeBambu/BancoBandaBa~oBarbaBarcoBarnizBarroBa/sculaBasto/nBasuraBatallaBateri/aBatirBatutaBau/lBazarBebe/BebidaBelloBesarBesoBestiaBichoBienBingoBlancoBloqueBlusaBoaBobinaBoboBocaBocinaBodaBodegaBoinaBolaBoleroBolsaBombaBondadBonitoBonoBonsa/iBordeBorrarBosqueBoteBoti/nBo/vedaBozalBravoBrazoBrechaBreveBrilloBrincoBrisaBrocaBromaBronceBroteBrujaBruscoBrutoBuceoBucleBuenoBueyBufandaBufo/nBu/hoBuitreBultoBurbujaBurlaBurroBuscarButacaBuzo/nCaballoCabezaCabinaCabraCacaoCada/verCadenaCaerCafe/Cai/daCaima/nCajaCajo/nCalCalamarCalcioCaldoCalidadCalleCalmaCalorCalvoCamaCambioCamelloCaminoCampoCa/ncerCandilCanelaCanguroCanicaCantoCa~aCa~o/nCaobaCaosCapazCapita/nCapoteCaptarCapuchaCaraCarbo/nCa/rcelCaretaCargaCari~oCarneCarpetaCarroCartaCasaCascoCaseroCaspaCastorCatorceCatreCaudalCausaCazoCebollaCederCedroCeldaCe/lebreCelosoCe/lulaCementoCenizaCentroCercaCerdoCerezaCeroCerrarCertezaCe/spedCetroChacalChalecoChampu/ChanclaChapaCharlaChicoChisteChivoChoqueChozaChuletaChuparCiclo/nCiegoCieloCienCiertoCifraCigarroCimaCincoCineCintaCipre/sCircoCiruelaCisneCitaCiudadClamorClanClaroClaseClaveClienteClimaCli/nicaCobreCoccio/nCochinoCocinaCocoCo/digoCodoCofreCogerCoheteCoji/nCojoColaColchaColegioColgarColinaCollarColmoColumnaCombateComerComidaCo/modoCompraCondeConejoCongaConocerConsejoContarCopaCopiaCorazo/nCorbataCorchoCordo/nCoronaCorrerCoserCosmosCostaCra/neoCra/terCrearCrecerCrei/doCremaCri/aCrimenCriptaCrisisCromoCro/nicaCroquetaCrudoCruzCuadroCuartoCuatroCuboCubrirCucharaCuelloCuentoCuerdaCuestaCuevaCuidarCulebraCulpaCultoCumbreCumplirCunaCunetaCuotaCupo/nCu/pulaCurarCuriosoCursoCurvaCutisDamaDanzaDarDardoDa/tilDeberDe/bilDe/cadaDecirDedoDefensaDefinirDejarDelfi/nDelgadoDelitoDemoraDensoDentalDeporteDerechoDerrotaDesayunoDeseoDesfileDesnudoDestinoDesvi/oDetalleDetenerDeudaDi/aDiabloDiademaDiamanteDianaDiarioDibujoDictarDienteDietaDiezDifi/cilDignoDilemaDiluirDineroDirectoDirigirDiscoDise~oDisfrazDivaDivinoDobleDoceDolorDomingoDonDonarDoradoDormirDorsoDosDosisDrago/nDrogaDuchaDudaDueloDue~oDulceDu/oDuqueDurarDurezaDuroE/banoEbrioEcharEcoEcuadorEdadEdicio/nEdificioEditorEducarEfectoEficazEjeEjemploElefanteElegirElementoElevarElipseE/liteElixirElogioEludirEmbudoEmitirEmocio/nEmpateEmpe~oEmpleoEmpresaEnanoEncargoEnchufeEnci/aEnemigoEneroEnfadoEnfermoEnga~oEnigmaEnlaceEnormeEnredoEnsayoEnse~arEnteroEntrarEnvaseEnvi/oE/pocaEquipoErizoEscalaEscenaEscolarEscribirEscudoEsenciaEsferaEsfuerzoEspadaEspejoEspi/aEsposaEspumaEsqui/EstarEsteEstiloEstufaEtapaEternoE/ticaEtniaEvadirEvaluarEventoEvitarExactoExamenExcesoExcusaExentoExigirExilioExistirE/xitoExpertoExplicarExponerExtremoFa/bricaFa/bulaFachadaFa/cilFactorFaenaFajaFaldaFalloFalsoFaltarFamaFamiliaFamosoFarao/nFarmaciaFarolFarsaFaseFatigaFaunaFavorFaxFebreroFechaFelizFeoFeriaFerozFe/rtilFervorFesti/nFiableFianzaFiarFibraFiccio/nFichaFideoFiebreFielFieraFiestaFiguraFijarFijoFilaFileteFilialFiltroFinFincaFingirFinitoFirmaFlacoFlautaFlechaFlorFlotaFluirFlujoFlu/orFobiaFocaFogataFogo/nFolioFolletoFondoFormaForroFortunaForzarFosaFotoFracasoFra/gilFranjaFraseFraudeFrei/rFrenoFresaFri/oFritoFrutaFuegoFuenteFuerzaFugaFumarFuncio/nFundaFurgo/nFuriaFusilFu/tbolFuturoGacelaGafasGaitaGajoGalaGaleri/aGalloGambaGanarGanchoGangaGansoGarajeGarzaGasolinaGastarGatoGavila/nGemeloGemirGenGe/neroGenioGenteGeranioGerenteGermenGestoGiganteGimnasioGirarGiroGlaciarGloboGloriaGolGolfoGolosoGolpeGomaGordoGorilaGorraGotaGoteoGozarGradaGra/ficoGranoGrasaGratisGraveGrietaGrilloGripeGrisGritoGrosorGru/aGruesoGrumoGrupoGuanteGuapoGuardiaGuerraGui/aGui~oGuionGuisoGuitarraGusanoGustarHaberHa/bilHablarHacerHachaHadaHallarHamacaHarinaHazHaza~aHebillaHebraHechoHeladoHelioHembraHerirHermanoHe/roeHervirHieloHierroHi/gadoHigieneHijoHimnoHistoriaHocicoHogarHogueraHojaHombreHongoHonorHonraHoraHormigaHornoHostilHoyoHuecoHuelgaHuertaHuesoHuevoHuidaHuirHumanoHu/medoHumildeHumoHundirHuraca/nHurtoIconoIdealIdiomaI/doloIglesiaIglu/IgualIlegalIlusio/nImagenIma/nImitarImparImperioImponerImpulsoIncapazI/ndiceInerteInfielInformeIngenioInicioInmensoInmuneInnatoInsectoInstanteIntere/sI/ntimoIntuirInu/tilInviernoIraIrisIroni/aIslaIsloteJabali/Jabo/nJamo/nJarabeJardi/nJarraJaulaJazmi/nJefeJeringaJineteJornadaJorobaJovenJoyaJuergaJuevesJuezJugadorJugoJugueteJuicioJuncoJunglaJunioJuntarJu/piterJurarJustoJuvenilJuzgarKiloKoalaLabioLacioLacraLadoLadro/nLagartoLa/grimaLagunaLaicoLamerLa/minaLa/mparaLanaLanchaLangostaLanzaLa/pizLargoLarvaLa/stimaLataLa/texLatirLaurelLavarLazoLealLeccio/nLecheLectorLeerLegio/nLegumbreLejanoLenguaLentoLe~aLeo/nLeopardoLesio/nLetalLetraLeveLeyendaLibertadLibroLicorLi/derLidiarLienzoLigaLigeroLimaLi/miteLimo/nLimpioLinceLindoLi/neaLingoteLinoLinternaLi/quidoLisoListaLiteraLitioLitroLlagaLlamaLlantoLlaveLlegarLlenarLlevarLlorarLloverLluviaLoboLocio/nLocoLocuraLo/gicaLogroLombrizLomoLonjaLoteLuchaLucirLugarLujoLunaLunesLupaLustroLutoLuzMacetaMachoMaderaMadreMaduroMaestroMafiaMagiaMagoMai/zMaldadMaletaMallaMaloMama/MamboMamutMancoMandoManejarMangaManiqui/ManjarManoMansoMantaMa~anaMapaMa/quinaMarMarcoMareaMarfilMargenMaridoMa/rmolMarro/nMartesMarzoMasaMa/scaraMasivoMatarMateriaMatizMatrizMa/ximoMayorMazorcaMechaMedallaMedioMe/dulaMejillaMejorMelenaMelo/nMemoriaMenorMensajeMenteMenu/MercadoMerengueMe/ritoMesMeso/nMetaMeterMe/todoMetroMezclaMiedoMielMiembroMigaMilMilagroMilitarMillo/nMimoMinaMineroMi/nimoMinutoMiopeMirarMisaMiseriaMisilMismoMitadMitoMochilaMocio/nModaModeloMohoMojarMoldeMolerMolinoMomentoMomiaMonarcaMonedaMonjaMontoMo~oMoradaMorderMorenoMorirMorroMorsaMortalMoscaMostrarMotivoMoverMo/vilMozoMuchoMudarMuebleMuelaMuerteMuestraMugreMujerMulaMuletaMultaMundoMu~ecaMuralMuroMu/sculoMuseoMusgoMu/sicaMusloNa/carNacio/nNadarNaipeNaranjaNarizNarrarNasalNatalNativoNaturalNa/useaNavalNaveNavidadNecioNe/ctarNegarNegocioNegroNeo/nNervioNetoNeutroNevarNeveraNichoNidoNieblaNietoNi~ezNi~oNi/tidoNivelNoblezaNocheNo/minaNoriaNormaNorteNotaNoticiaNovatoNovelaNovioNubeNucaNu/cleoNudilloNudoNueraNueveNuezNuloNu/meroNutriaOasisObesoObispoObjetoObraObreroObservarObtenerObvioOcaOcasoOce/anoOchentaOchoOcioOcreOctavoOctubreOcultoOcuparOcurrirOdiarOdioOdiseaOesteOfensaOfertaOficioOfrecerOgroOi/doOi/rOjoOlaOleadaOlfatoOlivoOllaOlmoOlorOlvidoOmbligoOndaOnzaOpacoOpcio/nO/peraOpinarOponerOptarO/pticaOpuestoOracio/nOradorOralO/rbitaOrcaOrdenOrejaO/rganoOrgi/aOrgulloOrienteOrigenOrillaOroOrquestaOrugaOsadi/aOscuroOseznoOsoOstraOto~oOtroOvejaO/vuloO/xidoOxi/genoOyenteOzonoPactoPadrePaellaPa/ginaPagoPai/sPa/jaroPalabraPalcoPaletaPa/lidoPalmaPalomaPalparPanPanalPa/nicoPanteraPa~ueloPapa/PapelPapillaPaquetePararParcelaParedParirParoPa/rpadoParquePa/rrafoPartePasarPaseoPasio/nPasoPastaPataPatioPatriaPausaPautaPavoPayasoPeato/nPecadoPeceraPechoPedalPedirPegarPeinePelarPelda~oPeleaPeligroPellejoPeloPelucaPenaPensarPe~o/nPeo/nPeorPepinoPeque~oPeraPerchaPerderPerezaPerfilPericoPerlaPermisoPerroPersonaPesaPescaPe/simoPesta~aPe/taloPetro/leoPezPezu~aPicarPicho/nPiePiedraPiernaPiezaPijamaPilarPilotoPimientaPinoPintorPinzaPi~aPiojoPipaPirataPisarPiscinaPisoPistaPito/nPizcaPlacaPlanPlataPlayaPlazaPleitoPlenoPlomoPlumaPluralPobrePocoPoderPodioPoemaPoesi/aPoetaPolenPolici/aPolloPolvoPomadaPomeloPomoPompaPonerPorcio/nPortalPosadaPoseerPosiblePostePotenciaPotroPozoPradoPrecozPreguntaPremioPrensaPresoPrevioPrimoPri/ncipePrisio/nPrivarProaProbarProcesoProductoProezaProfesorProgramaProlePromesaProntoPropioPro/ximoPruebaPu/blicoPucheroPudorPuebloPuertaPuestoPulgaPulirPulmo/nPulpoPulsoPumaPuntoPu~alPu~oPupaPupilaPure/QuedarQuejaQuemarQuererQuesoQuietoQui/micaQuinceQuitarRa/banoRabiaRaboRacio/nRadicalRai/zRamaRampaRanchoRangoRapazRa/pidoRaptoRasgoRaspaRatoRayoRazaRazo/nReaccio/nRealidadReba~oReboteRecaerRecetaRechazoRecogerRecreoRectoRecursoRedRedondoReducirReflejoReformaRefra/nRefugioRegaloRegirReglaRegresoRehe/nReinoRei/rRejaRelatoRelevoRelieveRellenoRelojRemarRemedioRemoRencorRendirRentaRepartoRepetirReposoReptilResRescateResinaRespetoRestoResumenRetiroRetornoRetratoReunirReve/sRevistaReyRezarRicoRiegoRiendaRiesgoRifaRi/gidoRigorRinco/nRi~o/nRi/oRiquezaRisaRitmoRitoRizoRobleRoceRociarRodarRodeoRodillaRoerRojizoRojoRomeroRomperRonRoncoRondaRopaRoperoRosaRoscaRostroRotarRubi/RuborRudoRuedaRugirRuidoRuinaRuletaRuloRumboRumorRupturaRutaRutinaSa/badoSaberSabioSableSacarSagazSagradoSalaSaldoSaleroSalirSalmo/nSalo/nSalsaSaltoSaludSalvarSambaSancio/nSandi/aSanearSangreSanidadSanoSantoSapoSaqueSardinaSarte/nSastreSata/nSaunaSaxofo/nSeccio/nSecoSecretoSectaSedSeguirSeisSelloSelvaSemanaSemillaSendaSensorSe~alSe~orSepararSepiaSequi/aSerSerieSermo/nServirSesentaSesio/nSetaSetentaSeveroSexoSextoSidraSiestaSieteSigloSignoSi/labaSilbarSilencioSillaSi/mboloSimioSirenaSistemaSitioSituarSobreSocioSodioSolSolapaSoldadoSoledadSo/lidoSoltarSolucio/nSombraSondeoSonidoSonoroSonrisaSopaSoplarSoporteSordoSorpresaSorteoSoste/nSo/tanoSuaveSubirSucesoSudorSuegraSueloSue~oSuerteSufrirSujetoSulta/nSumarSuperarSuplirSuponerSupremoSurSurcoSure~oSurgirSustoSutilTabacoTabiqueTablaTabu/TacoTactoTajoTalarTalcoTalentoTallaTalo/nTama~oTamborTangoTanqueTapaTapeteTapiaTapo/nTaquillaTardeTareaTarifaTarjetaTarotTarroTartaTatuajeTauroTazaTazo/nTeatroTechoTeclaTe/cnicaTejadoTejerTejidoTelaTele/fonoTemaTemorTemploTenazTenderTenerTenisTensoTeori/aTerapiaTercoTe/rminoTernuraTerrorTesisTesoroTestigoTeteraTextoTezTibioTiburo/nTiempoTiendaTierraTiesoTigreTijeraTildeTimbreTi/midoTimoTintaTi/oTi/picoTipoTiraTiro/nTita/nTi/tereTi/tuloTizaToallaTobilloTocarTocinoTodoTogaToldoTomarTonoTontoToparTopeToqueTo/raxToreroTormentaTorneoToroTorpedoTorreTorsoTortugaTosToscoToserTo/xicoTrabajoTractorTraerTra/ficoTragoTrajeTramoTranceTratoTraumaTrazarTre/bolTreguaTreintaTrenTreparTresTribuTrigoTripaTristeTriunfoTrofeoTrompaTroncoTropaTroteTrozoTrucoTruenoTrufaTuberi/aTuboTuertoTumbaTumorTu/nelTu/nicaTurbinaTurismoTurnoTutorUbicarU/lceraUmbralUnidadUnirUniversoUnoUntarU~aUrbanoUrbeUrgenteUrnaUsarUsuarioU/tilUtopi/aUvaVacaVaci/oVacunaVagarVagoVainaVajillaValeVa/lidoValleValorVa/lvulaVampiroVaraVariarVaro/nVasoVecinoVectorVehi/culoVeinteVejezVelaVeleroVelozVenaVencerVendaVenenoVengarVenirVentaVenusVerVeranoVerboVerdeVeredaVerjaVersoVerterVi/aViajeVibrarVicioVi/ctimaVidaVi/deoVidrioViejoViernesVigorVilVillaVinagreVinoVi~edoVioli/nViralVirgoVirtudVisorVi/speraVistaVitaminaViudoVivazViveroVivirVivoVolca/nVolumenVolverVorazVotarVotoVozVueloVulgarYacerYateYeguaYemaYernoYesoYodoYogaYogurZafiroZanjaZapatoZarzaZonaZorroZumoZurdo".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" ").map((function (e) { return function (e) { var t = []; return Array.prototype.forEach.call((0, a.Y0)(e), (function (e) { 47 === e ? (t.push(204), t.push(129)) : 126 === e ? (t.push(110), t.push(204), t.push(131)) : t.push(e); })), (0, a.ZN)(t); }(e); })), T.forEach((function (e, t) { E[k(e)] = t; })), "0xf74fb7092aeacdfbf8959557de22098da512207fb9f109cb526994938cf40300" !== m.check(e)))
            throw T = null, new Error("BIP39 Wordlist for es (Spanish) FAILED"); }
        var M = new (function (_super) {
            __extends(class_3, _super);
            function class_3() {
                return _super.call(this, "es") || this;
            }
            class_3.prototype.getWord = function (e) { return B(this), T[e]; };
            class_3.prototype.getWordIndex = function (e) { return B(this), E[k(e)]; };
            return class_3;
        }(m));
        m.register(M);
        var C = null;
        var L = {};
        function P(e) { return g.checkNormalize(), (0, a.ZN)(Array.prototype.filter.call((0, a.Y0)(e.normalize("NFD").toLowerCase()), (function (e) { return e >= 65 && e <= 90 || e >= 97 && e <= 123; }))); }
        function F(e) { if (null == C && (C = "AbaisserAbandonAbdiquerAbeilleAbolirAborderAboutirAboyerAbrasifAbreuverAbriterAbrogerAbruptAbsenceAbsoluAbsurdeAbusifAbyssalAcade/mieAcajouAcarienAccablerAccepterAcclamerAccoladeAccrocheAccuserAcerbeAchatAcheterAcidulerAcierAcompteAcque/rirAcronymeActeurActifActuelAdepteAde/quatAdhe/sifAdjectifAdjugerAdmettreAdmirerAdopterAdorerAdoucirAdresseAdroitAdulteAdverbeAe/rerAe/ronefAffaireAffecterAfficheAffreuxAffublerAgacerAgencerAgileAgiterAgraferAgre/ableAgrumeAiderAiguilleAilierAimableAisanceAjouterAjusterAlarmerAlchimieAlerteAlge-breAlgueAlie/nerAlimentAlle/gerAlliageAllouerAllumerAlourdirAlpagaAltesseAlve/oleAmateurAmbiguAmbreAme/nagerAmertumeAmidonAmiralAmorcerAmourAmovibleAmphibieAmpleurAmusantAnalyseAnaphoreAnarchieAnatomieAncienAne/antirAngleAngoisseAnguleuxAnimalAnnexerAnnonceAnnuelAnodinAnomalieAnonymeAnormalAntenneAntidoteAnxieuxApaiserApe/ritifAplanirApologieAppareilAppelerApporterAppuyerAquariumAqueducArbitreArbusteArdeurArdoiseArgentArlequinArmatureArmementArmoireArmureArpenterArracherArriverArroserArsenicArte/rielArticleAspectAsphalteAspirerAssautAsservirAssietteAssocierAssurerAsticotAstreAstuceAtelierAtomeAtriumAtroceAttaqueAttentifAttirerAttraperAubaineAubergeAudaceAudibleAugurerAuroreAutomneAutrucheAvalerAvancerAvariceAvenirAverseAveugleAviateurAvideAvionAviserAvoineAvouerAvrilAxialAxiomeBadgeBafouerBagageBaguetteBaignadeBalancerBalconBaleineBalisageBambinBancaireBandageBanlieueBannie-reBanquierBarbierBarilBaronBarqueBarrageBassinBastionBatailleBateauBatterieBaudrierBavarderBeletteBe/lierBeloteBe/ne/ficeBerceauBergerBerlineBermudaBesaceBesogneBe/tailBeurreBiberonBicycleBiduleBijouBilanBilingueBillardBinaireBiologieBiopsieBiotypeBiscuitBisonBistouriBitumeBizarreBlafardBlagueBlanchirBlessantBlinderBlondBloquerBlousonBobardBobineBoireBoiserBolideBonbonBondirBonheurBonifierBonusBordureBorneBotteBoucleBoueuxBougieBoulonBouquinBourseBoussoleBoutiqueBoxeurBrancheBrasierBraveBrebisBre-cheBreuvageBricolerBrigadeBrillantBriocheBriqueBrochureBroderBronzerBrousseBroyeurBrumeBrusqueBrutalBruyantBuffleBuissonBulletinBureauBurinBustierButinerButoirBuvableBuvetteCabanonCabineCachetteCadeauCadreCafe/ineCaillouCaissonCalculerCalepinCalibreCalmerCalomnieCalvaireCamaradeCame/raCamionCampagneCanalCanetonCanonCantineCanularCapableCaporalCapriceCapsuleCapterCapucheCarabineCarboneCaresserCaribouCarnageCarotteCarreauCartonCascadeCasierCasqueCassureCauserCautionCavalierCaverneCaviarCe/dilleCeintureCe/lesteCelluleCendrierCensurerCentralCercleCe/re/bralCeriseCernerCerveauCesserChagrinChaiseChaleurChambreChanceChapitreCharbonChasseurChatonChaussonChavirerChemiseChenilleChe/quierChercherChevalChienChiffreChignonChime-reChiotChlorureChocolatChoisirChoseChouetteChromeChuteCigareCigogneCimenterCine/maCintrerCirculerCirerCirqueCiterneCitoyenCitronCivilClaironClameurClaquerClasseClavierClientClignerClimatClivageClocheClonageCloporteCobaltCobraCocasseCocotierCoderCodifierCoffreCognerCohe/sionCoifferCoincerCole-reColibriCollineColmaterColonelCombatCome/dieCommandeCompactConcertConduireConfierCongelerConnoterConsonneContactConvexeCopainCopieCorailCorbeauCordageCornicheCorpusCorrectCorte-geCosmiqueCostumeCotonCoudeCoupureCourageCouteauCouvrirCoyoteCrabeCrainteCravateCrayonCre/atureCre/diterCre/meuxCreuserCrevetteCriblerCrierCristalCrite-reCroireCroquerCrotaleCrucialCruelCrypterCubiqueCueillirCuille-reCuisineCuivreCulminerCultiverCumulerCupideCuratifCurseurCyanureCycleCylindreCyniqueDaignerDamierDangerDanseurDauphinDe/battreDe/biterDe/borderDe/briderDe/butantDe/calerDe/cembreDe/chirerDe/ciderDe/clarerDe/corerDe/crireDe/cuplerDe/daleDe/ductifDe/esseDe/fensifDe/filerDe/frayerDe/gagerDe/givrerDe/glutirDe/graferDe/jeunerDe/liceDe/logerDemanderDemeurerDe/molirDe/nicherDe/nouerDentelleDe/nuderDe/partDe/penserDe/phaserDe/placerDe/poserDe/rangerDe/roberDe/sastreDescenteDe/sertDe/signerDe/sobe/irDessinerDestrierDe/tacherDe/testerDe/tourerDe/tresseDevancerDevenirDevinerDevoirDiableDialogueDiamantDicterDiffe/rerDige/rerDigitalDigneDiluerDimancheDiminuerDioxydeDirectifDirigerDiscuterDisposerDissiperDistanceDivertirDiviserDocileDocteurDogmeDoigtDomaineDomicileDompterDonateurDonjonDonnerDopamineDortoirDorureDosageDoseurDossierDotationDouanierDoubleDouceurDouterDoyenDragonDraperDresserDribblerDroitureDuperieDuplexeDurableDurcirDynastieE/blouirE/carterE/charpeE/chelleE/clairerE/clipseE/cloreE/cluseE/coleE/conomieE/corceE/couterE/craserE/cre/merE/crivainE/crouE/cumeE/cureuilE/difierE/duquerEffacerEffectifEffigieEffortEffrayerEffusionE/galiserE/garerE/jecterE/laborerE/largirE/lectronE/le/gantE/le/phantE/le-veE/ligibleE/litismeE/logeE/luciderE/luderEmballerEmbellirEmbryonE/meraudeE/missionEmmenerE/motionE/mouvoirEmpereurEmployerEmporterEmpriseE/mulsionEncadrerEnche-reEnclaveEncocheEndiguerEndosserEndroitEnduireE/nergieEnfanceEnfermerEnfouirEngagerEnginEngloberE/nigmeEnjamberEnjeuEnleverEnnemiEnnuyeuxEnrichirEnrobageEnseigneEntasserEntendreEntierEntourerEntraverE/nume/rerEnvahirEnviableEnvoyerEnzymeE/olienE/paissirE/pargneE/patantE/pauleE/picerieE/pide/mieE/pierE/pilogueE/pineE/pisodeE/pitapheE/poqueE/preuveE/prouverE/puisantE/querreE/quipeE/rigerE/rosionErreurE/ruptionEscalierEspadonEspe-ceEspie-gleEspoirEspritEsquiverEssayerEssenceEssieuEssorerEstimeEstomacEstradeE/tage-reE/talerE/tancheE/tatiqueE/teindreE/tendoirE/ternelE/thanolE/thiqueEthnieE/tirerE/tofferE/toileE/tonnantE/tourdirE/trangeE/troitE/tudeEuphorieE/valuerE/vasionE/ventailE/videnceE/viterE/volutifE/voquerExactExage/rerExaucerExcellerExcitantExclusifExcuseExe/cuterExempleExercerExhalerExhorterExigenceExilerExisterExotiqueExpe/dierExplorerExposerExprimerExquisExtensifExtraireExulterFableFabuleuxFacetteFacileFactureFaiblirFalaiseFameuxFamilleFarceurFarfeluFarineFaroucheFascinerFatalFatigueFauconFautifFaveurFavoriFe/brileFe/conderFe/de/rerFe/linFemmeFe/murFendoirFe/odalFermerFe/roceFerveurFestivalFeuilleFeutreFe/vrierFiascoFicelerFictifFide-leFigureFilatureFiletageFilie-reFilleulFilmerFilouFiltrerFinancerFinirFioleFirmeFissureFixerFlairerFlammeFlasqueFlatteurFle/auFle-cheFleurFlexionFloconFloreFluctuerFluideFluvialFolieFonderieFongibleFontaineForcerForgeronFormulerFortuneFossileFoudreFouge-reFouillerFoulureFourmiFragileFraiseFranchirFrapperFrayeurFre/gateFreinerFrelonFre/mirFre/ne/sieFre-reFriableFrictionFrissonFrivoleFroidFromageFrontalFrotterFruitFugitifFuiteFureurFurieuxFurtifFusionFuturGagnerGalaxieGalerieGambaderGarantirGardienGarnirGarrigueGazelleGazonGe/antGe/latineGe/luleGendarmeGe/ne/ralGe/nieGenouGentilGe/ologieGe/ome-treGe/raniumGermeGestuelGeyserGibierGiclerGirafeGivreGlaceGlaiveGlisserGlobeGloireGlorieuxGolfeurGommeGonflerGorgeGorilleGoudronGouffreGoulotGoupilleGourmandGoutteGraduelGraffitiGraineGrandGrappinGratuitGravirGrenatGriffureGrillerGrimperGrognerGronderGrotteGroupeGrugerGrutierGruye-reGue/pardGuerrierGuideGuimauveGuitareGustatifGymnasteGyrostatHabitudeHachoirHalteHameauHangarHannetonHaricotHarmonieHarponHasardHe/liumHe/matomeHerbeHe/rissonHermineHe/ronHe/siterHeureuxHibernerHibouHilarantHistoireHiverHomardHommageHomoge-neHonneurHonorerHonteuxHordeHorizonHorlogeHormoneHorribleHouleuxHousseHublotHuileuxHumainHumbleHumideHumourHurlerHydromelHygie-neHymneHypnoseIdylleIgnorerIguaneIlliciteIllusionImageImbiberImiterImmenseImmobileImmuableImpactImpe/rialImplorerImposerImprimerImputerIncarnerIncendieIncidentInclinerIncoloreIndexerIndiceInductifIne/ditIneptieInexactInfiniInfligerInformerInfusionInge/rerInhalerInhiberInjecterInjureInnocentInoculerInonderInscrireInsecteInsigneInsoliteInspirerInstinctInsulterIntactIntenseIntimeIntrigueIntuitifInutileInvasionInventerInviterInvoquerIroniqueIrradierIrre/elIrriterIsolerIvoireIvresseJaguarJaillirJambeJanvierJardinJaugerJauneJavelotJetableJetonJeudiJeunesseJoindreJoncherJonglerJoueurJouissifJournalJovialJoyauJoyeuxJubilerJugementJuniorJuponJuristeJusticeJuteuxJuve/nileKayakKimonoKiosqueLabelLabialLabourerLace/rerLactoseLaguneLaineLaisserLaitierLambeauLamelleLampeLanceurLangageLanterneLapinLargeurLarmeLaurierLavaboLavoirLectureLe/galLe/gerLe/gumeLessiveLettreLevierLexiqueLe/zardLiasseLibe/rerLibreLicenceLicorneLie-geLie-vreLigatureLigoterLigueLimerLimiteLimonadeLimpideLine/aireLingotLionceauLiquideLisie-reListerLithiumLitigeLittoralLivreurLogiqueLointainLoisirLombricLoterieLouerLourdLoutreLouveLoyalLubieLucideLucratifLueurLugubreLuisantLumie-reLunaireLundiLuronLutterLuxueuxMachineMagasinMagentaMagiqueMaigreMaillonMaintienMairieMaisonMajorerMalaxerMale/ficeMalheurMaliceMalletteMammouthMandaterManiableManquantManteauManuelMarathonMarbreMarchandMardiMaritimeMarqueurMarronMartelerMascotteMassifMate/rielMatie-reMatraqueMaudireMaussadeMauveMaximalMe/chantMe/connuMe/dailleMe/decinMe/diterMe/duseMeilleurMe/langeMe/lodieMembreMe/moireMenacerMenerMenhirMensongeMentorMercrediMe/riteMerleMessagerMesureMe/talMe/te/oreMe/thodeMe/tierMeubleMiaulerMicrobeMietteMignonMigrerMilieuMillionMimiqueMinceMine/ralMinimalMinorerMinuteMiracleMiroiterMissileMixteMobileModerneMoelleuxMondialMoniteurMonnaieMonotoneMonstreMontagneMonumentMoqueurMorceauMorsureMortierMoteurMotifMoucheMoufleMoulinMoussonMoutonMouvantMultipleMunitionMurailleMure-neMurmureMuscleMuse/umMusicienMutationMuterMutuelMyriadeMyrtilleMyste-reMythiqueNageurNappeNarquoisNarrerNatationNationNatureNaufrageNautiqueNavireNe/buleuxNectarNe/fasteNe/gationNe/gligerNe/gocierNeigeNerveuxNettoyerNeuroneNeutronNeveuNicheNickelNitrateNiveauNobleNocifNocturneNoirceurNoisetteNomadeNombreuxNommerNormatifNotableNotifierNotoireNourrirNouveauNovateurNovembreNoviceNuageNuancerNuireNuisibleNume/roNuptialNuqueNutritifObe/irObjectifObligerObscurObserverObstacleObtenirObturerOccasionOccuperOce/anOctobreOctroyerOctuplerOculaireOdeurOdorantOffenserOfficierOffrirOgiveOiseauOisillonOlfactifOlivierOmbrageOmettreOnctueuxOndulerOne/reuxOniriqueOpaleOpaqueOpe/rerOpinionOpportunOpprimerOpterOptiqueOrageuxOrangeOrbiteOrdonnerOreilleOrganeOrgueilOrificeOrnementOrqueOrtieOscillerOsmoseOssatureOtarieOuraganOursonOutilOutragerOuvrageOvationOxydeOxyge-neOzonePaisiblePalacePalmare-sPalourdePalperPanachePandaPangolinPaniquerPanneauPanoramaPantalonPapayePapierPapoterPapyrusParadoxeParcelleParesseParfumerParlerParoleParrainParsemerPartagerParureParvenirPassionPaste-quePaternelPatiencePatronPavillonPavoiserPayerPaysagePeignePeintrePelagePe/licanPellePelousePeluchePendulePe/ne/trerPe/niblePensifPe/nuriePe/pitePe/plumPerdrixPerforerPe/riodePermuterPerplexePersilPertePeserPe/talePetitPe/trirPeuplePharaonPhobiePhoquePhotonPhrasePhysiquePianoPicturalPie-cePierrePieuvrePilotePinceauPipettePiquerPiroguePiscinePistonPivoterPixelPizzaPlacardPlafondPlaisirPlanerPlaquePlastronPlateauPleurerPlexusPliagePlombPlongerPluiePlumagePochettePoe/siePoe-tePointePoirierPoissonPoivrePolairePolicierPollenPolygonePommadePompierPonctuelPonde/rerPoneyPortiquePositionPosse/derPosturePotagerPoteauPotionPoucePoulainPoumonPourprePoussinPouvoirPrairiePratiquePre/cieuxPre/direPre/fixePre/ludePre/nomPre/sencePre/textePre/voirPrimitifPrincePrisonPriverProble-meProce/derProdigeProfondProgre-sProieProjeterProloguePromenerPropreProspe-reProte/gerProuesseProverbePrudencePruneauPsychosePublicPuceronPuiserPulpePulsarPunaisePunitifPupitrePurifierPuzzlePyramideQuasarQuerelleQuestionQuie/tudeQuitterQuotientRacineRaconterRadieuxRagondinRaideurRaisinRalentirRallongeRamasserRapideRasageRatisserRavagerRavinRayonnerRe/actifRe/agirRe/aliserRe/animerRecevoirRe/citerRe/clamerRe/colterRecruterReculerRecyclerRe/digerRedouterRefaireRe/flexeRe/formerRefrainRefugeRe/galienRe/gionRe/glageRe/gulierRe/ite/rerRejeterRejouerRelatifReleverReliefRemarqueReme-deRemiseRemonterRemplirRemuerRenardRenfortReniflerRenoncerRentrerRenvoiReplierReporterRepriseReptileRequinRe/serveRe/sineuxRe/soudreRespectResterRe/sultatRe/tablirRetenirRe/ticuleRetomberRetracerRe/unionRe/ussirRevancheRevivreRe/volteRe/vulsifRichesseRideauRieurRigideRigolerRincerRiposterRisibleRisqueRituelRivalRivie-reRocheuxRomanceRompreRonceRondinRoseauRosierRotatifRotorRotuleRougeRouilleRouleauRoutineRoyaumeRubanRubisRucheRuelleRugueuxRuinerRuisseauRuserRustiqueRythmeSablerSaboterSabreSacocheSafariSagesseSaisirSaladeSaliveSalonSaluerSamediSanctionSanglierSarcasmeSardineSaturerSaugrenuSaumonSauterSauvageSavantSavonnerScalpelScandaleSce/le/ratSce/narioSceptreSche/maScienceScinderScoreScrutinSculpterSe/anceSe/cableSe/cherSecouerSe/cre/terSe/datifSe/duireSeigneurSe/jourSe/lectifSemaineSemblerSemenceSe/minalSe/nateurSensibleSentenceSe/parerSe/quenceSereinSergentSe/rieuxSerrureSe/rumServiceSe/sameSe/virSevrageSextupleSide/ralSie-cleSie/gerSifflerSigleSignalSilenceSiliciumSimpleSince-reSinistreSiphonSiropSismiqueSituerSkierSocialSocleSodiumSoigneuxSoldatSoleilSolitudeSolubleSombreSommeilSomnolerSondeSongeurSonnetteSonoreSorcierSortirSosieSottiseSoucieuxSoudureSouffleSouleverSoupapeSourceSoutirerSouvenirSpacieuxSpatialSpe/cialSphe-reSpiralStableStationSternumStimulusStipulerStrictStudieuxStupeurStylisteSublimeSubstratSubtilSubvenirSucce-sSucreSuffixeSugge/rerSuiveurSulfateSuperbeSupplierSurfaceSuricateSurmenerSurpriseSursautSurvieSuspectSyllabeSymboleSyme/trieSynapseSyntaxeSyste-meTabacTablierTactileTaillerTalentTalismanTalonnerTambourTamiserTangibleTapisTaquinerTarderTarifTartineTasseTatamiTatouageTaupeTaureauTaxerTe/moinTemporelTenailleTendreTeneurTenirTensionTerminerTerneTerribleTe/tineTexteThe-meThe/orieThe/rapieThoraxTibiaTie-deTimideTirelireTiroirTissuTitaneTitreTituberTobogganTole/rantTomateToniqueTonneauToponymeTorcheTordreTornadeTorpilleTorrentTorseTortueTotemToucherTournageTousserToxineTractionTraficTragiqueTrahirTrainTrancherTravailTre-fleTremperTre/sorTreuilTriageTribunalTricoterTrilogieTriompheTriplerTriturerTrivialTromboneTroncTropicalTroupeauTuileTulipeTumulteTunnelTurbineTuteurTutoyerTuyauTympanTyphonTypiqueTyranUbuesqueUltimeUltrasonUnanimeUnifierUnionUniqueUnitaireUniversUraniumUrbainUrticantUsageUsineUsuelUsureUtileUtopieVacarmeVaccinVagabondVagueVaillantVaincreVaisseauValableValiseVallonValveVampireVanilleVapeurVarierVaseuxVassalVasteVecteurVedetteVe/ge/talVe/hiculeVeinardVe/loceVendrediVe/ne/rerVengerVenimeuxVentouseVerdureVe/rinVernirVerrouVerserVertuVestonVe/te/ranVe/tusteVexantVexerViaducViandeVictoireVidangeVide/oVignetteVigueurVilainVillageVinaigreViolonVipe-reVirementVirtuoseVirusVisageViseurVisionVisqueuxVisuelVitalVitesseViticoleVitrineVivaceVivipareVocationVoguerVoileVoisinVoitureVolailleVolcanVoltigerVolumeVoraceVortexVoterVouloirVoyageVoyelleWagonXe/nonYachtZe-breZe/nithZesteZoologie".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" ").map((function (e) { return function (e) { var t = []; return Array.prototype.forEach.call((0, a.Y0)(e), (function (e) { 47 === e ? (t.push(204), t.push(129)) : 45 === e ? (t.push(204), t.push(128)) : t.push(e); })), (0, a.ZN)(t); }(e); })), C.forEach((function (e, t) { L[P(e)] = t; })), "0x51deb7ae009149dc61a6bd18a918eb7ac78d2775726c68e598b92d002519b045" !== m.check(e)))
            throw C = null, new Error("BIP39 Wordlist for fr (French) FAILED"); }
        var N = new (function (_super) {
            __extends(class_4, _super);
            function class_4() {
                return _super.call(this, "fr") || this;
            }
            class_4.prototype.getWord = function (e) { return F(this), C[e]; };
            class_4.prototype.getWordIndex = function (e) { return F(this), L[P(e)]; };
            return class_4;
        }(m));
        m.register(N);
        var x = ["AQRASRAGBAGUAIRAHBAghAURAdBAdcAnoAMEAFBAFCBKFBQRBSFBCXBCDBCHBGFBEQBpBBpQBIkBHNBeOBgFBVCBhBBhNBmOBmRBiHBiFBUFBZDBvFBsXBkFBlcBjYBwDBMBBTBBTRBWBBWXXaQXaRXQWXSRXCFXYBXpHXOQXHRXhRXuRXmXXbRXlXXwDXTRXrCXWQXWGaBWaKcaYgasFadQalmaMBacAKaRKKBKKXKKjKQRKDRKCYKCRKIDKeVKHcKlXKjHKrYNAHNBWNaRNKcNIBNIONmXNsXNdXNnBNMBNRBNrXNWDNWMNFOQABQAHQBrQXBQXFQaRQKXQKDQKOQKFQNBQNDQQgQCXQCDQGBQGDQGdQYXQpBQpQQpHQLXQHuQgBQhBQhCQuFQmXQiDQUFQZDQsFQdRQkHQbRQlOQlmQPDQjDQwXQMBQMDQcFQTBQTHQrDDXQDNFDGBDGQDGRDpFDhFDmXDZXDbRDMYDRdDTRDrXSAhSBCSBrSGQSEQSHBSVRShYShkSyQSuFSiBSdcSoESocSlmSMBSFBSFKSFNSFdSFcCByCaRCKcCSBCSRCCrCGbCEHCYXCpBCpQCIBCIHCeNCgBCgFCVECVcCmkCmwCZXCZFCdRClOClmClFCjDCjdCnXCwBCwXCcRCFQCFjGXhGNhGDEGDMGCDGCHGIFGgBGVXGVEGVRGmXGsXGdYGoSGbRGnXGwXGwDGWRGFNGFLGFOGFdGFkEABEBDEBFEXOEaBEKSENBENDEYXEIgEIkEgBEgQEgHEhFEudEuFEiBEiHEiFEZDEvBEsXEsFEdXEdREkFEbBEbRElFEPCEfkEFNYAEYAhYBNYQdYDXYSRYCEYYoYgQYgRYuRYmCYZTYdBYbEYlXYjQYRbYWRpKXpQopQnpSFpCXpIBpISphNpdBpdRpbRpcZpFBpFNpFDpFopFrLADLBuLXQLXcLaFLCXLEhLpBLpFLHXLeVLhILdHLdRLoDLbRLrXIABIBQIBCIBsIBoIBMIBRIXaIaRIKYIKRINBINuICDIGBIIDIIkIgRIxFIyQIiHIdRIbYIbRIlHIwRIMYIcRIRVITRIFBIFNIFQOABOAFOBQOaFONBONMOQFOSFOCDOGBOEQOpBOLXOIBOIFOgQOgFOyQOycOmXOsXOdIOkHOMEOMkOWWHBNHXNHXWHNXHDuHDRHSuHSRHHoHhkHmRHdRHkQHlcHlRHwBHWcgAEgAggAkgBNgBQgBEgXOgYcgLXgHjgyQgiBgsFgdagMYgWSgFQgFEVBTVXEVKBVKNVKDVKYVKRVNBVNYVDBVDxVSBVSRVCjVGNVLXVIFVhBVhcVsXVdRVbRVlRhBYhKYhDYhGShxWhmNhdahdkhbRhjohMXhTRxAXxXSxKBxNBxEQxeNxeQxhXxsFxdbxlHxjcxFBxFNxFQxFOxFoyNYyYoybcyMYuBQuBRuBruDMuCouHBudQukkuoBulVuMXuFEmCYmCRmpRmeDmiMmjdmTFmFQiADiBOiaRiKRiNBiNRiSFiGkiGFiERipRiLFiIFihYibHijBijEiMXiWBiFBiFCUBQUXFUaRUNDUNcUNRUNFUDBUSHUCDUGBUGFUEqULNULoUIRUeEUeYUgBUhFUuRUiFUsXUdFUkHUbBUjSUjYUwXUMDUcHURdUTBUrBUrXUrQZAFZXZZaRZKFZNBZQFZCXZGBZYdZpBZLDZIFZHXZHNZeQZVRZVFZmXZiBZvFZdFZkFZbHZbFZwXZcCZcRZRBvBQvBGvBLvBWvCovMYsAFsBDsaRsKFsNFsDrsSHsSFsCXsCRsEBsEHsEfspBsLBsLDsIgsIRseGsbRsFBsFQsFSdNBdSRdCVdGHdYDdHcdVbdySduDdsXdlRdwXdWYdWcdWRkBMkXOkaRkNIkNFkSFkCFkYBkpRkeNkgBkhVkmXksFklVkMBkWDkFNoBNoaQoaFoNBoNXoNaoNEoSRoEroYXoYCoYbopRopFomXojkowXorFbBEbEIbdBbjYlaRlDElMXlFDjKjjSRjGBjYBjYkjpRjLXjIBjOFjeVjbRjwBnXQnSHnpFnLXnINnMBnTRwXBwXNwXYwNFwQFwSBwGFwLXwLDweNwgBwuHwjDwnXMBXMpFMIBMeNMTHcaQcNBcDHcSFcCXcpBcLXcLDcgFcuFcnXcwXccDcTQcrFTQErXNrCHrpFrgFrbFrTHrFcWNYWNbWEHWMXWTR", "ABGHABIJAEAVAYJQALZJAIaRAHNXAHdcAHbRAZJMAZJRAZTRAdVJAklmAbcNAjdRAMnRAMWYAWpRAWgRAFgBAFhBAFdcBNJBBNJDBQKBBQhcBQlmBDEJBYJkBYJTBpNBBpJFBIJBBIJDBIcABOKXBOEJBOVJBOiJBOZJBepBBeLXBeIFBegBBgGJBVJXBuocBiJRBUJQBlXVBlITBwNFBMYVBcqXBTlmBWNFBWiJBWnRBFGHBFwXXKGJXNJBXNZJXDTTXSHSXSVRXSlHXCJDXGQJXEhXXYQJXYbRXOfXXeNcXVJFXhQJXhEJXdTRXjdXXMhBXcQTXRGBXTEBXTnQXFCXXFOFXFgFaBaFaBNJaBCJaBpBaBwXaNJKaNJDaQIBaDpRaEPDaHMFamDJalEJaMZJaFaFaFNBaFQJaFLDaFVHKBCYKBEBKBHDKXaFKXGdKXEJKXpHKXIBKXZDKXwXKKwLKNacKNYJKNJoKNWcKDGdKDTRKChXKGaRKGhBKGbRKEBTKEaRKEPTKLMDKLWRKOHDKVJcKdBcKlIBKlOPKFSBKFEPKFpFNBNJNJBQNBGHNBEPNBHXNBgFNBVXNBZDNBsXNBwXNNaRNNJDNNJENNJkNDCJNDVDNGJRNJiDNZJNNsCJNJFNNFSBNFCXNFEPNFLXNFIFQJBFQCaRQJEQQLJDQLJFQIaRQOqXQHaFQHHQQVJXQVJDQhNJQmEIQZJFQsJXQJrFQWbRDJABDBYJDXNFDXCXDXLXDXZDDXsJDQqXDSJFDJCXDEPkDEqXDYmQDpSJDOCkDOGQDHEIDVJDDuDuDWEBDJFgSBNDSBSFSBGHSBIBSBTQSKVYSJQNSJQiSJCXSEqXSJYVSIiJSOMYSHAHSHaQSeCFSepQSegBSHdHSHrFShSJSJuHSJUFSkNRSrSrSWEBSFaHSJFQSFCXSFGDSFYXSFODSFgBSFVXSFhBSFxFSFkFSFbBSFMFCADdCJXBCXaFCXKFCXNFCXCXCXGBCXEJCXYBCXLDCXIBCXOPCXHXCXgBCXhBCXiBCXlDCXcHCJNBCJNFCDCJCDGBCDVXCDhBCDiDCDJdCCmNCpJFCIaRCOqXCHCHCHZJCViJCuCuCmddCJiFCdNBCdHhClEJCnUJCreSCWlgCWTRCFBFCFNBCFYBCFVFCFhFCFdSCFTBCFWDGBNBGBQFGJBCGBEqGBpBGBgQGNBEGNJYGNkOGNJRGDUFGJpQGHaBGJeNGJeEGVBlGVKjGiJDGvJHGsVJGkEBGMIJGWjNGFBFGFCXGFGBGFYXGFpBGFMFEASJEAWpEJNFECJVEIXSEIQJEOqXEOcFEeNcEHEJEHlFEJgFEhlmEmDJEmZJEiMBEUqXEoSREPBFEPXFEPKFEPSFEPEFEPpFEPLXEPIBEJPdEPcFEPTBEJnXEqlHEMpREFCXEFODEFcFYASJYJAFYBaBYBVXYXpFYDhBYCJBYJGFYYbRYeNcYJeVYiIJYZJcYvJgYvJRYJsXYsJFYMYMYreVpBNHpBEJpBwXpQxFpYEJpeNDpJeDpeSFpeCHpHUJpHbBpHcHpmUJpiiJpUJrpsJuplITpFaBpFQqpFGBpFEfpFYBpFpBpFLJpFIDpFgBpFVXpFyQpFuFpFlFpFjDpFnXpFwXpJFMpFTBLXCJLXEFLXhFLXUJLXbFLalmLNJBLSJQLCLCLGJBLLDJLHaFLeNFLeSHLeCXLepFLhaRLZsJLsJDLsJrLocaLlLlLMdbLFNBLFSBLFEHLFkFIBBFIBXFIBaQIBKXIBSFIBpHIBLXIBgBIBhBIBuHIBmXIBiFIBZXIBvFIBbFIBjQIBwXIBWFIKTRIQUJIDGFICjQIYSRIINXIJeCIVaRImEkIZJFIvJRIsJXIdCJIJoRIbBQIjYBIcqXITFVIreVIFKFIFSFIFCJIFGFIFLDIFIBIJFOIFgBIFVXIJFhIFxFIFmXIFdHIFbBIJFrIJFWOBGBOQfXOOKjOUqXOfXBOqXEOcqXORVJOFIBOFlDHBIOHXiFHNTRHCJXHIaRHHJDHHEJHVbRHZJYHbIBHRsJHRkDHWlmgBKFgBSBgBCDgBGHgBpBgBIBgBVJgBuBgBvFgKDTgQVXgDUJgGSJgOqXgmUMgZIJgTUJgWIEgFBFgFNBgFDJgFSFgFGBgFYXgJFOgFgQgFVXgFhBgFbHgJFWVJABVQKcVDgFVOfXVeDFVhaRVmGdViJYVMaRVFNHhBNDhBCXhBEqhBpFhBLXhNJBhSJRheVXhhKEhxlmhZIJhdBQhkIJhbMNhMUJhMZJxNJgxQUJxDEkxDdFxSJRxplmxeSBxeCXxeGFxeYXxepQxegBxWVcxFEQxFLXxFIBxFgBxFxDxFZtxFdcxFbBxFwXyDJXyDlcuASJuDJpuDIBuCpJuGSJuIJFueEFuZIJusJXudWEuoIBuWGJuFBcuFKEuFNFuFQFuFDJuFGJuFVJuFUtuFdHuFTBmBYJmNJYmQhkmLJDmLJomIdXmiJYmvJRmsJRmklmmMBymMuCmclmmcnQiJABiJBNiJBDiBSFiBCJiBEFiBYBiBpFiBLXiBTHiJNciDEfiCZJiECJiJEqiOkHiHKFieNDiHJQieQcieDHieSFieCXieGFieEFieIHiegFihUJixNoioNXiFaBiFKFiFNDiFEPiFYXitFOitFHiFgBiFVEiFmXiFitiFbBiFMFiFrFUCXQUIoQUIJcUHQJUeCEUHwXUUJDUUqXUdWcUcqXUrnQUFNDUFSHUFCFUFEfUFLXUtFOZBXOZXSBZXpFZXVXZEQJZEJkZpDJZOqXZeNHZeCDZUqXZFBQZFEHZFLXvBAFvBKFvBCXvBEPvBpHvBIDvBgFvBuHvQNJvFNFvFGBvFIBvJFcsXCDsXLXsXsXsXlFsXcHsQqXsJQFsEqXseIFsFEHsFjDdBxOdNpRdNJRdEJbdpJRdhZJdnSJdrjNdFNJdFQHdFhNkNJDkYaRkHNRkHSRkVbRkuMRkjSJkcqDoSJFoEiJoYZJoOfXohEBoMGQocqXbBAFbBXFbBaFbBNDbBGBbBLXbBTBbBWDbGJYbIJHbFQqbFpQlDgQlOrFlVJRjGEBjZJRnXvJnXbBnEfHnOPDngJRnxfXnUJWwXEJwNpJwDpBwEfXwrEBMDCJMDGHMDIJMLJDcQGDcQpHcqXccqNFcqCXcFCJRBSBRBGBRBEJRBpQTBNFTBQJTBpBTBVXTFABTFSBTFCFTFGBTFMDrXCJrXLDrDNJrEfHrFQJrFitWNjdWNTR", "AKLJMANOPFASNJIAEJWXAYJNRAIIbRAIcdaAeEfDAgidRAdjNYAMYEJAMIbRAFNJBAFpJFBBIJYBDZJFBSiJhBGdEBBEJfXBEJqXBEJWRBpaUJBLXrXBIYJMBOcfXBeEfFBestXBjNJRBcDJOBFEqXXNvJRXDMBhXCJNYXOAWpXONJWXHDEBXeIaRXhYJDXZJSJXMDJOXcASJXFVJXaBQqXaBZJFasXdQaFSJQaFEfXaFpJHaFOqXKBNSRKXvJBKQJhXKEJQJKEJGFKINJBKIJjNKgJNSKVElmKVhEBKiJGFKlBgJKjnUJKwsJYKMFIJKFNJDKFIJFKFOfXNJBSFNJBCXNBpJFNJBvQNJBMBNJLJXNJOqXNJeCXNJeGFNdsJCNbTKFNwXUJQNFEPQDiJcQDMSJQSFpBQGMQJQJeOcQyCJEQUJEBQJFBrQFEJqDXDJFDJXpBDJXIMDGiJhDIJGRDJeYcDHrDJDVXgFDkAWpDkIgRDjDEqDMvJRDJFNFDJFIBSKclmSJQOFSJQVHSJQjDSJGJBSJGJFSECJoSHEJqSJHTBSJVJDSViJYSZJNBSJsJDSFSJFSFEfXSJFLXCBUJVCJXSBCJXpBCXVJXCJXsXCJXdFCJNJHCLIJgCHiJFCVNJMChCJhCUHEJCsJTRCJdYcCoQJCCFEfXCFIJgCFUJxCFstFGJBaQGJBIDGQJqXGYJNRGJHKFGeQqDGHEJFGJeLXGHIiJGHdBlGUJEBGkIJTGFQPDGJFEqEAGegEJIJBEJVJXEhQJTEiJNcEJZJFEJoEqEjDEqEPDsXEPGJBEPOqXEPeQFEfDiDEJfEFEfepQEfMiJEqXNBEqDIDEqeSFEqVJXEMvJRYXNJDYXEJHYKVJcYYJEBYJeEcYJUqXYFpJFYFstXpAZJMpBSJFpNBNFpeQPDpHLJDpHIJFpHgJFpeitFpHZJFpJFADpFSJFpJFCJpFOqXpFitBpJFZJLXIJFLIJgRLVNJWLVHJMLwNpJLFGJBLFLJDLFOqXLJFUJIBDJXIBGJBIJBYQIJBIBIBOqXIBcqDIEGJFILNJTIIJEBIOiJhIJeNBIJeIBIhiJIIWoTRIJFAHIJFpBIJFuHIFUtFIJFTHOSBYJOEcqXOHEJqOvBpFOkVJrObBVJOncqDOcNJkHhNJRHuHJuHdMhBgBUqXgBsJXgONJBgHNJDgHHJQgJeitgHsJXgJyNagyDJBgZJDrgsVJQgkEJNgkjSJgJFAHgFCJDgFZtMVJXNFVXQfXVJXDJVXoQJVQVJQVDEfXVDvJHVEqNFVeQfXVHpJFVHxfXVVJSRVVmaRVlIJOhCXVJhHjYkhxCJVhWVUJhWiJcxBNJIxeEqDxfXBFxcFEPxFSJFxFYJXyBDQJydaUJyFOPDuYCJYuLvJRuHLJXuZJLDuFOPDuFZJHuFcqXmKHJdmCQJcmOsVJiJAGFitLCFieOfXiestXiZJMEikNJQirXzFiFQqXiFIJFiFZJFiFvtFUHpJFUteIcUteOcUVCJkUhdHcUbEJEUJqXQUMNJhURjYkUFitFZDGJHZJIxDZJVJXZJFDJZJFpQvBNJBvBSJFvJxBrseQqDsVFVJdFLJDkEJNBkmNJYkFLJDoQJOPoGsJRoEAHBoEJfFbBQqDbBZJHbFVJXlFIJBjYIrXjeitcjjCEBjWMNBwXQfXwXOaFwDsJXwCJTRwrCZJMDNJQcDDJFcqDOPRYiJFTBsJXTQIJBTFEfXTFLJDrXEJFrEJXMrFZJFWEJdEWYTlm", "ABCDEFACNJTRAMBDJdAcNJVXBLNJEBXSIdWRXErNJkXYDJMBXZJCJaXMNJaYKKVJKcKDEJqXKDcNJhKVJrNYKbgJVXKFVJSBNBYBwDNJeQfXNJeEqXNhGJWENJFiJRQlIJbEQJfXxDQqXcfXQFNDEJQFwXUJDYcnUJDJIBgQDIUJTRDJFEqDSJQSJFSJQIJFSOPeZtSJFZJHCJXQfXCTDEqFGJBSJFGJBOfXGJBcqXGJHNJDGJRLiJEJfXEqEJFEJPEFpBEJYJBZJFYBwXUJYiJMEBYJZJyTYTONJXpQMFXFpeGIDdpJFstXpJFcPDLBVSJRLHQJqXLJFZJFIJBNJDIJBUqXIBkFDJIJEJPTIYJGWRIJeQPDIJeEfHIJFsJXOqGDSFHXEJqXgJCsJCgGQJqXgdQYJEgFMFNBgJFcqDVJwXUJVJFZJchIgJCCxOEJqXxOwXUJyDJBVRuscisciJBiJBieUtqXiJFDJkiFsJXQUGEZJcUJFsJXZtXIrXZDZJDrZJFNJDZJFstXvJFQqXvJFCJEsJXQJqkhkNGBbDJdTRbYJMEBlDwXUJMEFiJFcfXNJDRcNJWMTBLJXC", "BraFUtHBFSJFdbNBLJXVJQoYJNEBSJBEJfHSJHwXUJCJdAZJMGjaFVJXEJPNJBlEJfFiJFpFbFEJqIJBVJCrIBdHiJhOPFChvJVJZJNJWxGFNIFLueIBQJqUHEJfUFstOZJDrlXEASJRlXVJXSFwVJNJWD", "QJEJNNJDQJEJIBSFQJEJxegBQJEJfHEPSJBmXEJFSJCDEJqXLXNJFQqXIcQsFNJFIFEJqXUJgFsJXIJBUJEJfHNFvJxEqXNJnXUJFQqD", "IJBEJqXZJ"];
        var R = null;
        function O(e) { return (0, i.hexlify)((0, a.Y0)(e)); }
        function I(e) { if (null !== R)
            return; R = []; var t = {}; function r(e) { var r = ""; for (var n_11 = 0; n_11 < e.length; n_11++) {
            var i_9 = e[n_11];
            var o_5 = t[i_9];
            !1 !== o_5 && (o_5 && (i_9 = o_5), r += i_9);
        } return r; } t[(0, a.ZN)([227, 130, 154])] = !1, t[(0, a.ZN)([227, 130, 153])] = !1, t[(0, a.ZN)([227, 130, 133])] = (0, a.ZN)([227, 130, 134]), t[(0, a.ZN)([227, 129, 163])] = (0, a.ZN)([227, 129, 164]), t[(0, a.ZN)([227, 130, 131])] = (0, a.ZN)([227, 130, 132]), t[(0, a.ZN)([227, 130, 135])] = (0, a.ZN)([227, 130, 136]); for (var e_27 = 3; e_27 <= 9; e_27++) {
            var t_23 = x[e_27 - 3];
            for (var r_28 = 0; r_28 < t_23.length; r_28 += e_27) {
                var n_12 = [];
                for (var i_10 = 0; i_10 < e_27; i_10++) {
                    var e_28 = "~~AzB~X~a~KN~Q~D~S~C~G~E~Y~p~L~I~O~eH~g~V~hxyumi~~U~~Z~~v~~s~~dkoblPjfnqwMcRTr~W~~~F~~~~~Jt".indexOf(t_23[r_28 + i_10]);
                    n_12.push(227), n_12.push(64 & e_28 ? 130 : 129), n_12.push(128 + (63 & e_28));
                }
                R.push((0, a.ZN)(n_12));
            }
        } if (R.sort((function (e, t) { return (e = r(e)) < (t = r(t)) ? -1 : e > t ? 1 : 0; })), "0xe3818de38284e3818f" === O(R[442]) && "0xe3818de38283e3818f" === O(R[443])) {
            var e_29 = R[442];
            R[442] = R[443], R[443] = e_29;
        } if ("0xcb36b09e6baa935787fd762ce65e80b0c6a8dabdfbc3a7f86ac0e2c4fd111600" !== m.check(e))
            throw R = null, new Error("BIP39 Wordlist for ja (Japanese) FAILED"); }
        var D = new (function (_super) {
            __extends(class_5, _super);
            function class_5() {
                return _super.call(this, "ja") || this;
            }
            class_5.prototype.getWord = function (e) { return I(this), R[e]; };
            class_5.prototype.getWordIndex = function (e) { return I(this), R.indexOf(e); };
            class_5.prototype.split = function (e) { return g.checkNormalize(), e.split(/(?:\u3000| )+/g); };
            class_5.prototype.join = function (e) { return e.join("ã€€"); };
            return class_5;
        }(m));
        m.register(D);
        var J = ["OYAa", "ATAZoATBl3ATCTrATCl8ATDloATGg3ATHT8ATJT8ATJl3ATLlvATLn4ATMT8ATMX8ATMboATMgoAToLbAToMTATrHgATvHnAT3AnAT3JbAT3MTAT8DbAT8JTAT8LmAT8MYAT8MbAT#LnAUHT8AUHZvAUJXrAUJX8AULnrAXJnvAXLUoAXLgvAXMn6AXRg3AXrMbAX3JTAX3QbAYLn3AZLgvAZrSUAZvAcAZ8AaAZ8AbAZ8AnAZ8HnAZ8LgAZ8MYAZ8MgAZ8OnAaAboAaDTrAaFTrAaJTrAaJboAaLVoAaMXvAaOl8AaSeoAbAUoAbAg8AbAl4AbGnrAbMT8AbMXrAbMn4AbQb8AbSV8AbvRlAb8AUAb8AnAb8HgAb8JTAb8NTAb8RbAcGboAcLnvAcMT8AcMX8AcSToAcrAaAcrFnAc8AbAc8MgAfGgrAfHboAfJnvAfLV8AfLkoAfMT8AfMnoAfQb8AfScrAfSgrAgAZ8AgFl3AgGX8AgHZvAgHgrAgJXoAgJX8AgJboAgLZoAgLn4AgOX8AgoATAgoAnAgoCUAgoJgAgoLXAgoMYAgoSeAgrDUAgrJTAhrFnAhrLjAhrQgAjAgoAjJnrAkMX8AkOnoAlCTvAlCV8AlClvAlFg4AlFl6AlFn3AloSnAlrAXAlrAfAlrFUAlrFbAlrGgAlrOXAlvKnAlvMTAl3AbAl3MnAnATrAnAcrAnCZ3AnCl8AnDg8AnFboAnFl3AnHX4AnHbrAnHgrAnIl3AnJgvAnLXoAnLX4AnLbrAnLgrAnLhrAnMXoAnMgrAnOn3AnSbrAnSeoAnvLnAn3OnCTGgvCTSlvCTvAUCTvKnCTvNTCT3CZCT3GUCT3MTCT8HnCUCZrCULf8CULnvCU3HnCU3JUCY6NUCbDb8CbFZoCbLnrCboOTCboScCbrFnCbvLnCb8AgCb8HgCb$LnCkLfoClBn3CloDUDTHT8DTLl3DTSU8DTrAaDTrLXDTrLjDTrOYDTrOgDTvFXDTvFnDT3HUDT3LfDUCT9DUDT4DUFVoDUFV8DUFkoDUGgrDUJnrDULl8DUMT8DUMXrDUMX4DUMg8DUOUoDUOgvDUOg8DUSToDUSZ8DbDXoDbDgoDbGT8DbJn3DbLg3DbLn4DbMXrDbMg8DbOToDboJXGTClvGTDT8GTFZrGTLVoGTLlvGTLl3GTMg8GTOTvGTSlrGToCUGTrDgGTrJYGTrScGTtLnGTvAnGTvQgGUCZrGUDTvGUFZoGUHXrGULnvGUMT8GUoMgGXoLnGXrMXGXrMnGXvFnGYLnvGZOnvGZvOnGZ8LaGZ8LmGbAl3GbDYvGbDlrGbHX3GbJl4GbLV8GbLn3GbMn4GboJTGboRfGbvFUGb3GUGb4JnGgDX3GgFl$GgJlrGgLX6GgLZoGgLf8GgOXoGgrAgGgrJXGgrMYGgrScGgvATGgvOYGnAgoGnJgvGnLZoGnLg3GnLnrGnQn8GnSbrGnrMgHTClvHTDToHTFT3HTQT8HToJTHToJgHTrDUHTrMnHTvFYHTvRfHT8MnHT8SUHUAZ8HUBb4HUDTvHUoMYHXFl6HXJX6HXQlrHXrAUHXrMnHXrSbHXvFYHXvKXHX3LjHX3MeHYvQlHZrScHZvDbHbAcrHbFT3HbFl3HbJT8HbLTrHbMT8HbMXrHbMbrHbQb8HbSX3HboDbHboJTHbrFUHbrHgHbrJTHb8JTHb8MnHb8QgHgAlrHgDT3HgGgrHgHgrHgJTrHgJT8HgLX@HgLnrHgMT8HgMX8HgMboHgOnrHgQToHgRg3HgoHgHgrCbHgrFnHgrLVHgvAcHgvAfHnAloHnCTrHnCnvHnGTrHnGZ8HnGnvHnJT8HnLf8HnLkvHnMg8HnRTrITvFUITvFnJTAXrJTCV8JTFT3JTFT8JTFn4JTGgvJTHT8JTJT8JTJXvJTJl3JTJnvJTLX4JTLf8JTLhvJTMT8JTMXrJTMnrJTObrJTQT8JTSlvJT8DUJT8FkJT8MTJT8OXJT8OgJT8QUJT8RfJUHZoJXFT4JXFlrJXGZ8JXGnrJXLV8JXLgvJXMXoJXMX3JXNboJXPlvJXoJTJXoLkJXrAXJXrHUJXrJgJXvJTJXvOnJX4KnJYAl3JYJT8JYLhvJYQToJYrQXJY6NUJbAl3JbCZrJbDloJbGT8JbGgrJbJXvJbJboJbLf8JbLhrJbLl3JbMnvJbRg8JbSZ8JboDbJbrCZJbrSUJb3KnJb8LnJfRn8JgAXrJgCZrJgDTrJgGZrJgGZ8JgHToJgJT8JgJXoJgJgvJgLX4JgLZ3JgLZ8JgLn4JgMgrJgMn4JgOgvJgPX6JgRnvJgSToJgoCZJgoJbJgoMYJgrJXJgrJgJgrLjJg6MTJlCn3JlGgvJlJl8Jl4AnJl8FnJl8HgJnAToJnATrJnAbvJnDUoJnGnrJnJXrJnJXvJnLhvJnLnrJnLnvJnMToJnMT8JnMXvJnMX3JnMg8JnMlrJnMn4JnOX8JnST4JnSX3JnoAgJnoAnJnoJTJnoObJnrAbJnrAkJnrHnJnrJTJnrJYJnrOYJnrScJnvCUJnvFaJnvJgJnvJnJnvOYJnvQUJnvRUJn3FnJn3JTKnFl3KnLT6LTDlvLTMnoLTOn3LTRl3LTSb4LTSlrLToAnLToJgLTrAULTrAcLTrCULTrHgLTrMgLT3JnLULnrLUMX8LUoJgLVATrLVDTrLVLb8LVoJgLV8MgLV8RTLXDg3LXFlrLXrCnLXrLXLX3GTLX4GgLX4OYLZAXrLZAcrLZAgrLZAhrLZDXyLZDlrLZFbrLZFl3LZJX6LZJX8LZLc8LZLnrLZSU8LZoJTLZoJnLZrAgLZrAnLZrJYLZrLULZrMgLZrSkLZvAnLZvGULZvJeLZvOTLZ3FZLZ4JXLZ8STLZ8ScLaAT3LaAl3LaHT8LaJTrLaJT8LaJXrLaJgvLaJl4LaLVoLaMXrLaMXvLaMX8LbClvLbFToLbHlrLbJn4LbLZ3LbLhvLbMXrLbMnoLbvSULcLnrLc8HnLc8MTLdrMnLeAgoLeOgvLeOn3LfAl3LfLnvLfMl3LfOX8Lf8AnLf8JXLf8LXLgJTrLgJXrLgJl8LgMX8LgRZrLhCToLhrAbLhrFULhrJXLhvJYLjHTrLjHX4LjJX8LjLhrLjSX3LjSZ4LkFX4LkGZ8LkGgvLkJTrLkMXoLkSToLkSU8LkSZ8LkoOYLl3FfLl3MgLmAZrLmCbrLmGgrLmHboLmJnoLmJn3LmLfoLmLhrLmSToLnAX6LnAb6LnCZ3LnCb3LnDTvLnDb8LnFl3LnGnrLnHZvLnHgvLnITvLnJT8LnJX8LnJlvLnLf8LnLg6LnLhvLnLnoLnMXrLnMg8LnQlvLnSbrLnrAgLnrAnLnrDbLnrFkLnrJdLnrMULnrOYLnrSTLnvAnLnvDULnvHgLnvOYLnvOnLn3GgLn4DULn4JTLn4JnMTAZoMTAloMTDb8MTFT8MTJnoMTJnrMTLZrMTLhrMTLkvMTMX8MTRTrMToATMTrDnMTrOnMT3JnMT4MnMT8FUMT8FaMT8FlMT8GTMT8GbMT8GnMT8HnMT8JTMT8JbMT8OTMUCl8MUJTrMUJU8MUMX8MURTrMUSToMXAX6MXAb6MXCZoMXFXrMXHXrMXLgvMXOgoMXrAUMXrAnMXrHgMXrJYMXrJnMXrMTMXrMgMXrOYMXrSZMXrSgMXvDUMXvOTMX3JgMX3OTMX4JnMX8DbMX8FnMX8HbMX8HgMX8HnMX8LbMX8MnMX8OnMYAb8MYGboMYHTvMYHX4MYLTrMYLnvMYMToMYOgvMYRg3MYSTrMbAToMbAXrMbAl3MbAn8MbGZ8MbJT8MbJXrMbMXvMbMX8MbMnoMbrMUMb8AfMb8FbMb8FkMcJXoMeLnrMgFl3MgGTvMgGXoMgGgrMgGnrMgHT8MgHZrMgJnoMgLnrMgLnvMgMT8MgQUoMgrHnMgvAnMg8HgMg8JYMg8LfMloJnMl8ATMl8AXMl8JYMnAToMnAT4MnAZ8MnAl3MnAl4MnCl8MnHT8MnHg8MnJnoMnLZoMnLhrMnMXoMnMX3MnMnrMnOgvMnrFbMnrFfMnrFnMnrNTMnvJXNTMl8OTCT3OTFV8OTFn3OTHZvOTJXrOTOl3OT3ATOT3JUOT3LZOT3LeOT3MbOT8ATOT8AbOT8AgOT8MbOUCXvOUMX3OXHXvOXLl3OXrMUOXvDbOX6NUOX8JbOYFZoOYLbrOYLkoOYMg8OYSX3ObHTrObHT4ObJgrObLhrObMX3ObOX8Ob8FnOeAlrOeJT8OeJXrOeJnrOeLToOeMb8OgJXoOgLXoOgMnrOgOXrOgOloOgoAgOgoJbOgoMYOgoSTOg8AbOjLX4OjMnoOjSV8OnLVoOnrAgOn3DUPXQlrPXvFXPbvFTPdAT3PlFn3PnvFbQTLn4QToAgQToMTQULV8QURg8QUoJnQXCXvQbFbrQb8AaQb8AcQb8FbQb8MYQb8ScQeAlrQeLhrQjAn3QlFXoQloJgQloSnRTLnvRTrGURTrJTRUJZrRUoJlRUrQnRZrLmRZrMnRZrSnRZ8ATRZ8JbRZ8ScRbMT8RbST3RfGZrRfMX8RfMgrRfSZrRnAbrRnGT8RnvJgRnvLfRnvMTRn8AaSTClvSTJgrSTOXrSTRg3STRnvSToAcSToAfSToAnSToHnSToLjSToMTSTrAaSTrEUST3BYST8AgST8LmSUAZvSUAgrSUDT4SUDT8SUGgvSUJXoSUJXvSULTrSU8JTSU8LjSV8AnSV8JgSXFToSXLf8SYvAnSZrDUSZrMUSZrMnSZ8HgSZ8JTSZ8JgSZ8MYSZ8QUSaQUoSbCT3SbHToSbQYvSbSl4SboJnSbvFbSb8HbSb8JgSb8OTScGZrScHgrScJTvScMT8ScSToScoHbScrMTScvAnSeAZrSeAcrSeHboSeJUoSeLhrSeMT8SeMXrSe6JgSgHTrSkJnoSkLnvSk8CUSlFl3SlrSnSl8GnSmAboSmGT8SmJU8", "ATLnDlATrAZoATrJX4ATrMT8ATrMX4ATrRTrATvDl8ATvJUoATvMl8AT3AToAT3MX8AT8CT3AT8DT8AT8HZrAT8HgoAUAgFnAUCTFnAXoMX8AXrAT8AXrGgvAXrJXvAXrOgoAXvLl3AZvAgoAZvFbrAZvJXoAZvJl8AZvJn3AZvMX8AZvSbrAZ8FZoAZ8LZ8AZ8MU8AZ8OTvAZ8SV8AZ8SX3AbAgFZAboJnoAbvGboAb8ATrAb8AZoAb8AgrAb8Al4Ab8Db8Ab8JnoAb8LX4Ab8LZrAb8LhrAb8MT8Ab8OUoAb8Qb8Ab8ST8AcrAUoAcrAc8AcrCZ3AcrFT3AcrFZrAcrJl4AcrJn3AcrMX3AcrOTvAc8AZ8Ac8MT8AfAcJXAgoFn4AgoGgvAgoGnrAgoLc8AgoMXoAgrLnrAkrSZ8AlFXCTAloHboAlrHbrAlrLhrAlrLkoAl3CZrAl3LUoAl3LZrAnrAl4AnrMT8An3HT4BT3IToBX4MnvBb!Ln$CTGXMnCToLZ4CTrHT8CT3JTrCT3RZrCT#GTvCU6GgvCU8Db8CU8GZrCU8HT8CboLl3CbrGgrCbrMU8Cb8DT3Cb8GnrCb8LX4Cb8MT8Cb8ObrCgrGgvCgrKX4Cl8FZoDTrAbvDTrDboDTrGT6DTrJgrDTrMX3DTrRZrDTrRg8DTvAVvDTvFZoDT3DT8DT3Ln3DT4HZrDT4MT8DT8AlrDT8MT8DUAkGbDUDbJnDYLnQlDbDUOYDbMTAnDbMXSnDboAT3DboFn4DboLnvDj6JTrGTCgFTGTGgFnGTJTMnGTLnPlGToJT8GTrCT3GTrLVoGTrLnvGTrMX3GTrMboGTvKl3GZClFnGZrDT3GZ8DTrGZ8FZ8GZ8MXvGZ8On8GZ8ST3GbCnQXGbMbFnGboFboGboJg3GboMXoGb3JTvGb3JboGb3Mn6Gb3Qb8GgDXLjGgMnAUGgrDloGgrHX4GgrSToGgvAXrGgvAZvGgvFbrGgvLl3GgvMnvGnDnLXGnrATrGnrMboGnuLl3HTATMnHTAgCnHTCTCTHTrGTvHTrHTvHTrJX8HTrLl8HTrMT8HTrMgoHTrOTrHTuOn3HTvAZrHTvDTvHTvGboHTvJU8HTvLl3HTvMXrHTvQb4HT4GT6HT4JT8HT4Jb#HT8Al3HT8GZrHT8GgrHT8HX4HT8Jb8HT8JnoHT8LTrHT8LgvHT8SToHT8SV8HUoJUoHUoJX8HUoLnrHXrLZoHXvAl3HX3LnrHX4FkvHX4LhrHX4MXoHX4OnoHZrAZ8HZrDb8HZrGZ8HZrJnrHZvGZ8HZvLnvHZ8JnvHZ8LhrHbCXJlHbMTAnHboJl4HbpLl3HbrJX8HbrLnrHbrMnvHbvRYrHgoSTrHgrFV8HgrGZ8HgrJXoHgrRnvHgvBb!HgvGTrHgvHX4HgvHn!HgvLTrHgvSU8HnDnLbHnFbJbHnvDn8Hn6GgvHn!BTvJTCTLnJTQgFnJTrAnvJTrLX4JTrOUoJTvFn3JTvLnrJTvNToJT3AgoJT3Jn4JT3LhvJT3ObrJT8AcrJT8Al3JT8JT8JT8JnoJT8LX4JT8LnrJT8MX3JT8Rg3JT8Sc8JUoBTvJU8AToJU8GZ8JU8GgvJU8JTrJU8JXrJU8JnrJU8LnvJU8ScvJXHnJlJXrGgvJXrJU8JXrLhrJXrMT8JXrMXrJXrQUoJXvCTvJXvGZ8JXvGgrJXvQT8JX8Ab8JX8DT8JX8GZ8JX8HZvJX8LnrJX8MT8JX8MXoJX8MnvJX8ST3JYGnCTJbAkGbJbCTAnJbLTAcJboDT3JboLb6JbrAnvJbrCn3JbrDl8JbrGboJbrIZoJbrJnvJbrMnvJbrQb4Jb8RZrJeAbAnJgJnFbJgScAnJgrATrJgvHZ8JgvMn4JlJlFbJlLiQXJlLjOnJlRbOlJlvNXoJlvRl3Jl4AcrJl8AUoJl8MnrJnFnMlJnHgGbJnoDT8JnoFV8JnoGgvJnoIT8JnoQToJnoRg3JnrCZ3JnrGgrJnrHTvJnrLf8JnrOX8JnvAT3JnvFZoJnvGT8JnvJl4JnvMT8JnvMX8JnvOXrJnvPX6JnvSX3JnvSZrJn3MT8Jn3MX8Jn3RTrLTATKnLTJnLTLTMXKnLTRTQlLToGb8LTrAZ8LTrCZ8LTrDb8LTrHT8LT3PX6LT4FZoLT$CTvLT$GgrLUvHX3LVoATrLVoAgoLVoJboLVoMX3LVoRg3LV8CZ3LV8FZoLV8GTvLXrDXoLXrFbrLXvAgvLXvFlrLXvLl3LXvRn6LX4Mb8LX8GT8LYCXMnLYrMnrLZoSTvLZrAZvLZrAloLZrFToLZrJXvLZrJboLZrJl4LZrLnrLZrMT8LZrOgvLZrRnvLZrST4LZvMX8LZvSlvLZ8AgoLZ8CT3LZ8JT8LZ8LV8LZ8LZoLZ8Lg8LZ8SV8LZ8SbrLZ$HT8LZ$Mn4La6CTvLbFbMnLbRYFTLbSnFZLboJT8LbrAT9LbrGb3LbrQb8LcrJX8LcrMXrLerHTvLerJbrLerNboLgrDb8LgrGZ8LgrHTrLgrMXrLgrSU8LgvJTrLgvLl3Lg6Ll3LhrLnrLhrMT8LhvAl4LiLnQXLkoAgrLkoJT8LkoJn4LlrSU8Ll3FZoLl3HTrLl3JX8Ll3JnoLl3LToLmLeFbLnDUFbLnLVAnLnrATrLnrAZoLnrAb8LnrAlrLnrGgvLnrJU8LnrLZrLnrLhrLnrMb8LnrOXrLnrSZ8LnvAb4LnvDTrLnvDl8LnvHTrLnvHbrLnvJT8LnvJU8LnvJbrLnvLhvLnvMX8LnvMb8LnvNnoLnvSU8Ln3Al3Ln4FZoLn4GT6Ln4JgvLn4LhrLn4MT8Ln4SToMToCZrMToJX8MToLX4MToLf8MToRg3MTrEloMTvGb6MT3BTrMT3Lb6MT8AcrMT8AgrMT8GZrMT8JnoMT8LnrMT8MX3MUOUAnMXAbFnMXoAloMXoJX8MXoLf8MXoLl8MXrAb8MXrDTvMXrGT8MXrGgrMXrHTrMXrLf8MXrMU8MXrOXvMXrQb8MXvGT8MXvHTrMXvLVoMX3AX3MX3Jn3MX3LhrMX3MX3MX4AlrMX4OboMX8GTvMX8GZrMX8GgrMX8JT8MX8JX8MX8LhrMX8MT8MYDUFbMYMgDbMbGnFfMbvLX4MbvLl3Mb8Mb8Mb8ST4MgGXCnMg8ATrMg8AgoMg8CZrMg8DTrMg8DboMg8HTrMg8JgrMg8LT8MloJXoMl8AhrMl8JT8MnLgAUMnoJXrMnoLX4MnoLhrMnoMT8MnrAl4MnrDb8MnrOTvMnrOgvMnrQb8MnrSU8MnvGgrMnvHZ8Mn3MToMn4DTrMn4LTrMn4Mg8NnBXAnOTFTFnOToAToOTrGgvOTrJX8OT3JXoOT6MTrOT8GgrOT8HTpOT8MToOUoHT8OUoJT8OUoLn3OXrAgoOXrDg8OXrMT8OXvSToOX6CTvOX8CZrOX8OgrOb6HgvOb8AToOb8MT8OcvLZ8OgvAlrOgvHTvOgvJTrOgvJnrOgvLZrOgvLn4OgvMT8OgvRTrOg8AZoOg8DbvOnrOXoOnvJn4OnvLhvOnvRTrOn3GgoOn3JnvOn6JbvOn8OTrPTGYFTPbBnFnPbGnDnPgDYQTPlrAnvPlrETvPlrLnvPlrMXvPlvFX4QTMTAnQTrJU8QYCnJlQYJlQlQbGTQbQb8JnrQb8LZoQb8LnvQb8MT8Qb8Ml8Qb8ST4QloAl4QloHZvQloJX8QloMn8QnJZOlRTrAZvRTrDTrRTvJn4RTvLhvRT4Jb8RZrAZrRZ8AkrRZ8JU8RZ8LV8RZ8LnvRbJlQXRg3GboRg3MnvRg8AZ8Rg8JboRg8Jl4RnLTCbRnvFl3RnvQb8SToAl4SToCZrSToFZoSToHXrSToJU8SToJgvSToJl4SToLhrSToMX3STrAlvSTrCT9STrCgrSTrGgrSTrHXrSTrHboSTrJnoSTrNboSTvLnrST4AZoST8Ab8ST8JT8SUoJn3SU6HZ#SU6JTvSU8Db8SU8HboSU8LgrSV8JT8SZrAcrSZrAl3SZrJT8SZrJnvSZrMT8SZvLUoSZ4FZoSZ8JnoSZ8RZrScoLnrScoMT8ScoMX8ScrAT4ScrAZ8ScrLZ8ScrLkvScvDb8ScvLf8ScvNToSgrFZrShvKnrSloHUoSloLnrSlrMXoSl8HgrSmrJUoSn3BX6", "ATFlOn3ATLgrDYAT4MTAnAT8LTMnAYJnRTrAbGgJnrAbLV8LnAbvNTAnAeFbLg3AgOYMXoAlQbFboAnDboAfAnJgoJTBToDgAnBUJbAl3BboDUAnCTDlvLnCTFTrSnCYoQTLnDTwAbAnDUDTrSnDUHgHgrDX8LXFnDbJXAcrETvLTLnGTFTQbrGTMnGToGT3DUFbGUJlPX3GbQg8LnGboJbFnGb3GgAYGgAg8ScGgMbAXrGgvAbAnGnJTLnvGnvATFgHTDT6ATHTrDlJnHYLnMn8HZrSbJTHZ8LTFnHbFTJUoHgSeMT8HgrLjAnHgvAbAnHlFUrDlHnDgvAnHnHTFT3HnQTGnrJTAaMXvJTGbCn3JTOgrAnJXvAXMnJbMg8SnJbMnRg3Jb8LTMnJnAl3OnJnGYrQlJnJlQY3LTDlCn3LTJjLg3LTLgvFXLTMg3GTLV8HUOgLXFZLg3LXNXrMnLX8QXFnLX9AlMYLYLXPXrLZAbJU8LZDUJU8LZMXrSnLZ$AgFnLaPXrDULbFYrMnLbMn8LXLboJgJgLeFbLg3LgLZrSnLgOYAgoLhrRnJlLkCTrSnLkOnLhrLnFX%AYLnFZoJXLnHTvJbLnLloAbMTATLf8MTHgJn3MTMXrAXMT3MTFnMUITvFnMXFX%AYMXMXvFbMXrFTDbMYAcMX3MbLf8SnMb8JbFnMgMXrMTMgvAXFnMgvGgCmMnAloSnMnFnJTrOXvMXSnOX8HTMnObJT8ScObLZFl3ObMXCZoPTLgrQXPUFnoQXPU3RXJlPX3RkQXPbrJXQlPlrJbFnQUAhrDbQXGnCXvQYLnHlvQbLfLnvRTOgvJbRXJYrQlRYLnrQlRbLnrQlRlFT8JlRlFnrQXSTClCn3STHTrAnSTLZQlrSTMnGTrSToHgGbSTrGTDnSTvGXCnST3HgFbSU3HXAXSbAnJn3SbFT8LnScLfLnv", "AT3JgJX8AT8FZoSnAT8JgFV8AT8LhrDbAZ8JT8DbAb8GgLhrAb8SkLnvAe8MT8SnAlMYJXLVAl3GYDTvAl3LfLnvBUDTvLl3CTOn3HTrCT3DUGgrCU8MT8AbCbFTrJUoCgrDb8MTDTLV8JX8DTLnLXQlDT8LZrSnDUQb8FZ8DUST4JnvDb8ScOUoDj6GbJl4GTLfCYMlGToAXvFnGboAXvLnGgAcrJn3GgvFnSToGnLf8JnvGn#HTDToHTLnFXJlHTvATFToHTvHTDToHTvMTAgoHT3STClvHT4AlFl6HT8HTDToHUoDgJTrHUoScMX3HbRZrMXoHboJg8LTHgDb8JTrHgMToLf8HgvLnLnoHnHn3HT4Hn6MgvAnJTJU8ScvJT3AaQT8JT8HTrAnJXrRg8AnJbAloMXoJbrATFToJbvMnoSnJgDb6GgvJgDb8MXoJgSX3JU8JguATFToJlPYLnQlJlQkDnLbJlQlFYJlJl8Lf8OTJnCTFnLbJnLTHXMnJnLXGXCnJnoFfRg3JnrMYRg3Jn3HgFl3KT8Dg8LnLTRlFnPTLTvPbLbvLVoSbrCZLXMY6HT3LXNU7DlrLXNXDTATLX8DX8LnLZDb8JU8LZMnoLhrLZSToJU8LZrLaLnrLZvJn3SnLZ8LhrSnLaJnoMT8LbFlrHTvLbrFTLnrLbvATLlvLb6OTFn3LcLnJZOlLeAT6Mn4LeJT3ObrLg6LXFlrLhrJg8LnLhvDlPX4LhvLfLnvLj6JTFT3LnFbrMXoLnQluCTvLnrQXCY6LnvLfLnvLnvMgLnvLnvSeLf8MTMbrJn3MT3JgST3MT8AnATrMT8LULnrMUMToCZrMUScvLf8MXoDT8SnMX6ATFToMX8AXMT8MX8FkMT8MX8HTrDUMX8ScoSnMYJT6CTvMgAcrMXoMg8SToAfMlvAXLg3MnFl3AnvOT3AnFl3OUoATHT8OU3RnLXrOXrOXrSnObPbvFn6Og8HgrSnOg8OX8DbPTvAgoJgPU3RYLnrPXrDnJZrPb8CTGgvPlrLTDlvPlvFUJnoQUvFXrQlQeMnoAl3QlrQlrSnRTFTrJUoSTDlLiLXSTFg6HT3STJgoMn4STrFTJTrSTrLZFl3ST4FnMXoSUrDlHUoScvHTvSnSfLkvMXo", "AUoAcrMXoAZ8HboAg8AbOg6ATFgAg8AloMXoAl3AT8JTrAl8MX8MXoCT3SToJU8Cl8Db8MXoDT8HgrATrDboOT8MXoGTOTrATMnGT8LhrAZ8GnvFnGnQXHToGgvAcrHTvAXvLl3HbrAZoMXoHgBlFXLg3HgMnFXrSnHgrSb8JUoHn6HT8LgvITvATrJUoJUoLZrRnvJU8HT8Jb8JXvFX8QT8JXvLToJTrJYrQnGnQXJgrJnoATrJnoJU8ScvJnvMnvMXoLTCTLgrJXLTJlRTvQlLbRnJlQYvLbrMb8LnvLbvFn3RnoLdCVSTGZrLeSTvGXCnLg3MnoLn3MToLlrETvMT8SToAl3MbrDU6GTvMb8LX4LhrPlrLXGXCnSToLf8Rg3STrDb8LTrSTvLTHXMnSb3RYLnMnSgOg6ATFg", "HUDlGnrQXrJTrHgLnrAcJYMb8DULc8LTvFgGnCk3Mg8JbAnLX4QYvFYHnMXrRUoJnGnvFnRlvFTJlQnoSTrBXHXrLYSUJgLfoMT8Se8DTrHbDb", "AbDl8SToJU8An3RbAb8ST8DUSTrGnrAgoLbFU6Db8LTrMg8AaHT8Jb8ObDl8SToJU8Pb3RlvFYoJl"];
        var _ = null;
        function U(e) { if (null == _ && (_ = [], J.forEach((function (e, t) { t += 4; for (var n_13 = 0; n_13 < e.length; n_13 += t) {
            var i_11 = "";
            for (var o_6 = 0; o_6 < t; o_6++)
                i_11 += ((r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*".indexOf(e[n_13 + o_6])) >= 40 ? r = r + 168 - 40 : r >= 19 && (r = r + 97 - 19), (0, a.ZN)([225, 132 + (r >> 6), 128 + (63 & r)]));
            _.push(i_11);
        } var r; })), _.sort(), "0xf9eddeace9c5d3da9c93cf7d3cd38f6a13ed3affb933259ae865714e8a3ae71a" !== m.check(e)))
            throw _ = null, new Error("BIP39 Wordlist for ko (Korean) FAILED"); }
        var H = new (function (_super) {
            __extends(class_6, _super);
            function class_6() {
                return _super.call(this, "ko") || this;
            }
            class_6.prototype.getWord = function (e) { return U(this), _[e]; };
            class_6.prototype.getWordIndex = function (e) { return U(this), _.indexOf(e); };
            return class_6;
        }(m));
        m.register(H);
        var X = null;
        function V(e) { if (null == X && (X = "AbacoAbbaglioAbbinatoAbeteAbissoAbolireAbrasivoAbrogatoAccadereAccennoAccusatoAcetoneAchilleAcidoAcquaAcreAcrilicoAcrobataAcutoAdagioAddebitoAddomeAdeguatoAderireAdipeAdottareAdulareAffabileAffettoAffissoAffrantoAforismaAfosoAfricanoAgaveAgenteAgevoleAggancioAgireAgitareAgonismoAgricoloAgrumetoAguzzoAlabardaAlatoAlbatroAlberatoAlboAlbumeAlceAlcolicoAlettoneAlfaAlgebraAlianteAlibiAlimentoAllagatoAllegroAllievoAllodolaAllusivoAlmenoAlogenoAlpacaAlpestreAltalenaAlternoAlticcioAltroveAlunnoAlveoloAlzareAmalgamaAmanitaAmarenaAmbitoAmbratoAmebaAmericaAmetistaAmicoAmmassoAmmendaAmmirareAmmonitoAmoreAmpioAmpliareAmuletoAnacardoAnagrafeAnalistaAnarchiaAnatraAncaAncellaAncoraAndareAndreaAnelloAngeloAngolareAngustoAnimaAnnegareAnnidatoAnnoAnnuncioAnonimoAnticipoAnziApaticoAperturaApodeApparireAppetitoAppoggioApprodoAppuntoAprileArabicaArachideAragostaAraldicaArancioAraturaArazzoArbitroArchivioArditoArenileArgentoArgineArgutoAriaArmoniaArneseArredatoArringaArrostoArsenicoArsoArteficeArzilloAsciuttoAscoltoAsepsiAsetticoAsfaltoAsinoAsolaAspiratoAsproAssaggioAsseAssolutoAssurdoAstaAstenutoAsticeAstrattoAtavicoAteismoAtomicoAtonoAttesaAttivareAttornoAttritoAttualeAusilioAustriaAutistaAutonomoAutunnoAvanzatoAvereAvvenireAvvisoAvvolgereAzioneAzotoAzzimoAzzurroBabeleBaccanoBacinoBacoBadessaBadilataBagnatoBaitaBalconeBaldoBalenaBallataBalzanoBambinoBandireBaraondaBarbaroBarcaBaritonoBarlumeBaroccoBasilicoBassoBatostaBattutoBauleBavaBavosaBeccoBeffaBelgioBelvaBendaBenevoleBenignoBenzinaBereBerlinaBetaBibitaBiciBidoneBifidoBigaBilanciaBimboBinocoloBiologoBipedeBipolareBirbanteBirraBiscottoBisestoBisnonnoBisonteBisturiBizzarroBlandoBlattaBollitoBonificoBordoBoscoBotanicoBottinoBozzoloBraccioBradipoBramaBrancaBravuraBretellaBrevettoBrezzaBrigliaBrillanteBrindareBroccoloBrodoBronzinaBrulloBrunoBubboneBucaBudinoBuffoneBuioBulboBuonoBurloneBurrascaBussolaBustaCadettoCaducoCalamaroCalcoloCalesseCalibroCalmoCaloriaCambusaCamerataCamiciaCamminoCamolaCampaleCanapaCandelaCaneCaninoCanottoCantinaCapaceCapelloCapitoloCapogiroCapperoCapraCapsulaCarapaceCarcassaCardoCarismaCarovanaCarrettoCartolinaCasaccioCascataCasermaCasoCassoneCastelloCasualeCatastaCatenaCatrameCautoCavilloCedibileCedrataCefaloCelebreCellulareCenaCenoneCentesimoCeramicaCercareCertoCerumeCervelloCesoiaCespoCetoChelaChiaroChiccaChiedereChimeraChinaChirurgoChitarraCiaoCiclismoCifrareCignoCilindroCiottoloCircaCirrosiCitricoCittadinoCiuffoCivettaCivileClassicoClinicaCloroCoccoCodardoCodiceCoerenteCognomeCollareColmatoColoreColposoColtivatoColzaComaCometaCommandoComodoComputerComuneConcisoCondurreConfermaCongelareConiugeConnessoConoscereConsumoContinuoConvegnoCopertoCopioneCoppiaCopricapoCorazzaCordataCoricatoCorniceCorollaCorpoCorredoCorsiaCorteseCosmicoCostanteCotturaCovatoCratereCravattaCreatoCredereCremosoCrescitaCretaCricetoCrinaleCrisiCriticoCroceCronacaCrostataCrucialeCruscaCucireCuculoCuginoCullatoCupolaCuratoreCursoreCurvoCuscinoCustodeDadoDainoDalmataDamerinoDanielaDannosoDanzareDatatoDavantiDavveroDebuttoDecennioDecisoDeclinoDecolloDecretoDedicatoDefinitoDeformeDegnoDelegareDelfinoDelirioDeltaDemenzaDenotatoDentroDepositoDerapataDerivareDerogaDescrittoDesertoDesiderioDesumereDetersivoDevotoDiametroDicembreDiedroDifesoDiffusoDigerireDigitaleDiluvioDinamicoDinnanziDipintoDiplomaDipoloDiradareDireDirottoDirupoDisagioDiscretoDisfareDisgeloDispostoDistanzaDisumanoDitoDivanoDiveltoDividereDivoratoDobloneDocenteDoganaleDogmaDolceDomatoDomenicaDominareDondoloDonoDormireDoteDottoreDovutoDozzinaDragoDruidoDubbioDubitareDucaleDunaDuomoDupliceDuraturoEbanoEccessoEccoEclissiEconomiaEderaEdicolaEdileEditoriaEducareEgemoniaEgliEgoismoEgregioElaboratoElargireEleganteElencatoElettoElevareElficoElicaElmoElsaElusoEmanatoEmblemaEmessoEmiroEmotivoEmozioneEmpiricoEmuloEndemicoEnduroEnergiaEnfasiEnotecaEntrareEnzimaEpatiteEpilogoEpisodioEpocaleEppureEquatoreErarioErbaErbosoEredeEremitaErigereErmeticoEroeErosivoErranteEsagonoEsameEsanimeEsaudireEscaEsempioEsercitoEsibitoEsigenteEsistereEsitoEsofagoEsortatoEsosoEspansoEspressoEssenzaEssoEstesoEstimareEstoniaEstrosoEsultareEtilicoEtnicoEtruscoEttoEuclideoEuropaEvasoEvidenzaEvitatoEvolutoEvvivaFabbricaFaccendaFachiroFalcoFamigliaFanaleFanfaraFangoFantasmaFareFarfallaFarinosoFarmacoFasciaFastosoFasulloFaticareFatoFavolosoFebbreFecolaFedeFegatoFelpaFeltroFemminaFendereFenomenoFermentoFerroFertileFessuraFestivoFettaFeudoFiabaFiduciaFifaFiguratoFiloFinanzaFinestraFinireFioreFiscaleFisicoFiumeFlaconeFlamencoFleboFlemmaFloridoFluenteFluoroFobicoFocacciaFocosoFoderatoFoglioFolataFolcloreFolgoreFondenteFoneticoFoniaFontanaForbitoForchettaForestaFormicaFornaioForoFortezzaForzareFosfatoFossoFracassoFranaFrassinoFratelloFreccettaFrenataFrescoFrigoFrollinoFrondeFrugaleFruttaFucilataFucsiaFuggenteFulmineFulvoFumanteFumettoFumosoFuneFunzioneFuocoFurboFurgoneFuroreFusoFutileGabbianoGaffeGalateoGallinaGaloppoGamberoGammaGaranziaGarboGarofanoGarzoneGasdottoGasolioGastricoGattoGaudioGazeboGazzellaGecoGelatinaGelsoGemelloGemmatoGeneGenitoreGennaioGenotipoGergoGhepardoGhiaccioGhisaGialloGildaGineproGiocareGioielloGiornoGioveGiratoGironeGittataGiudizioGiuratoGiustoGlobuloGlutineGnomoGobbaGolfGomitoGommoneGonfioGonnaGovernoGracileGradoGraficoGrammoGrandeGrattareGravosoGraziaGrecaGreggeGrifoneGrigioGrinzaGrottaGruppoGuadagnoGuaioGuantoGuardareGufoGuidareIbernatoIconaIdenticoIdillioIdoloIdraIdricoIdrogenoIgieneIgnaroIgnoratoIlareIllesoIllogicoIlludereImballoImbevutoImboccoImbutoImmaneImmersoImmolatoImpaccoImpetoImpiegoImportoImprontaInalareInarcareInattivoIncantoIncendioInchinoIncisivoInclusoIncontroIncrocioIncuboIndagineIndiaIndoleIneditoInfattiInfilareInflittoIngaggioIngegnoIngleseIngordoIngrossoInnescoInodoreInoltrareInondatoInsanoInsettoInsiemeInsonniaInsulinaIntasatoInteroIntonacoIntuitoInumidireInvalidoInveceInvitoIperboleIpnoticoIpotesiIppicaIrideIrlandaIronicoIrrigatoIrrorareIsolatoIsotopoIstericoIstitutoIstriceItaliaIterareLabbroLabirintoLaccaLaceratoLacrimaLacunaLaddoveLagoLampoLancettaLanternaLardosoLargaLaringeLastraLatenzaLatinoLattugaLavagnaLavoroLegaleLeggeroLemboLentezzaLenzaLeoneLepreLesivoLessatoLestoLetteraleLevaLevigatoLiberoLidoLievitoLillaLimaturaLimitareLimpidoLineareLinguaLiquidoLiraLiricaLiscaLiteLitigioLivreaLocandaLodeLogicaLombareLondraLongevoLoquaceLorenzoLotoLotteriaLuceLucidatoLumacaLuminosoLungoLupoLuppoloLusingaLussoLuttoMacabroMacchinaMaceroMacinatoMadamaMagicoMagliaMagneteMagroMaiolicaMalafedeMalgradoMalintesoMalsanoMaltoMalumoreManaManciaMandorlaMangiareManifestoMannaroManovraMansardaMantideManubrioMappaMaratonaMarcireMarettaMarmoMarsupioMascheraMassaiaMastinoMaterassoMatricolaMattoneMaturoMazurcaMeandroMeccanicoMecenateMedesimoMeditareMegaMelassaMelisMelodiaMeningeMenoMensolaMercurioMerendaMerloMeschinoMeseMessereMestoloMetalloMetodoMettereMiagolareMicaMicelioMicheleMicroboMidolloMieleMiglioreMilanoMiliteMimosaMineraleMiniMinoreMirinoMirtilloMiscelaMissivaMistoMisurareMitezzaMitigareMitraMittenteMnemonicoModelloModificaModuloMoganoMogioMoleMolossoMonasteroMoncoMondinaMonetarioMonileMonotonoMonsoneMontatoMonvisoMoraMordereMorsicatoMostroMotivatoMotosegaMottoMovenzaMovimentoMozzoMuccaMucosaMuffaMughettoMugnaioMulattoMulinelloMultiploMummiaMuntoMuovereMuraleMusaMuscoloMusicaMutevoleMutoNababboNaftaNanometroNarcisoNariceNarratoNascereNastrareNaturaleNauticaNaviglioNebulosaNecrosiNegativoNegozioNemmenoNeofitaNerettoNervoNessunoNettunoNeutraleNeveNevroticoNicchiaNinfaNitidoNobileNocivoNodoNomeNominaNordicoNormaleNorvegeseNostranoNotareNotiziaNotturnoNovellaNucleoNullaNumeroNuovoNutrireNuvolaNuzialeOasiObbedireObbligoObeliscoOblioOboloObsoletoOccasioneOcchioOccidenteOccorrereOccultareOcraOculatoOdiernoOdorareOffertaOffrireOffuscatoOggettoOggiOgnunoOlandeseOlfattoOliatoOlivaOlogrammaOltreOmaggioOmbelicoOmbraOmegaOmissioneOndosoOnereOniceOnnivoroOnorevoleOntaOperatoOpinioneOppostoOracoloOrafoOrdineOrecchinoOreficeOrfanoOrganicoOrigineOrizzonteOrmaOrmeggioOrnativoOrologioOrrendoOrribileOrtensiaOrticaOrzataOrzoOsareOscurareOsmosiOspedaleOspiteOssaOssidareOstacoloOsteOtiteOtreOttagonoOttimoOttobreOvaleOvestOvinoOviparoOvocitoOvunqueOvviareOzioPacchettoPacePacificoPadellaPadronePaesePagaPaginaPalazzinaPalesarePallidoPaloPaludePandoroPannelloPaoloPaonazzoPapricaParabolaParcellaParerePargoloPariParlatoParolaPartireParvenzaParzialePassivoPasticcaPataccaPatologiaPattumePavonePeccatoPedalarePedonalePeggioPelosoPenarePendicePenisolaPennutoPenombraPensarePentolaPepePepitaPerbenePercorsoPerdonatoPerforarePergamenaPeriodoPermessoPernoPerplessoPersuasoPertugioPervasoPesatorePesistaPesoPestiferoPetaloPettinePetulantePezzoPiacerePiantaPiattinoPiccinoPicozzaPiegaPietraPifferoPigiamaPigolioPigroPilaPiliferoPillolaPilotaPimpantePinetaPinnaPinoloPioggiaPiomboPiramidePireticoPiritePirolisiPitonePizzicoPlaceboPlanarePlasmaPlatanoPlenarioPochezzaPoderosoPodismoPoesiaPoggiarePolentaPoligonoPollicePolmonitePolpettaPolsoPoltronaPolverePomicePomodoroPontePopolosoPorfidoPorosoPorporaPorrePortataPosaPositivoPossessoPostulatoPotassioPoterePranzoPrassiPraticaPreclusoPredicaPrefissoPregiatoPrelievoPremerePrenotarePreparatoPresenzaPretestoPrevalsoPrimaPrincipePrivatoProblemaProcuraProdurreProfumoProgettoProlungaPromessaPronomePropostaProrogaProtesoProvaPrudentePrugnaPruritoPsichePubblicoPudicaPugilatoPugnoPulcePulitoPulsantePuntarePupazzoPupillaPuroQuadroQualcosaQuasiQuerelaQuotaRaccoltoRaddoppioRadicaleRadunatoRafficaRagazzoRagioneRagnoRamarroRamingoRamoRandagioRantolareRapatoRapinaRappresoRasaturaRaschiatoRasenteRassegnaRastrelloRataRavvedutoRealeRecepireRecintoReclutaReconditoRecuperoRedditoRedimereRegalatoRegistroRegolaRegressoRelazioneRemareRemotoRennaReplicaReprimereReputareResaResidenteResponsoRestauroReteRetinaRetoricaRettificaRevocatoRiassuntoRibadireRibelleRibrezzoRicaricaRiccoRicevereRiciclatoRicordoRicredutoRidicoloRidurreRifasareRiflessoRiformaRifugioRigareRigettatoRighelloRilassatoRilevatoRimanereRimbalzoRimedioRimorchioRinascitaRincaroRinforzoRinnovoRinomatoRinsavitoRintoccoRinunciaRinvenireRiparatoRipetutoRipienoRiportareRipresaRipulireRisataRischioRiservaRisibileRisoRispettoRistoroRisultatoRisvoltoRitardoRitegnoRitmicoRitrovoRiunioneRivaRiversoRivincitaRivoltoRizomaRobaRoboticoRobustoRocciaRocoRodaggioRodereRoditoreRogitoRollioRomanticoRompereRonzioRosolareRospoRotanteRotondoRotulaRovescioRubizzoRubricaRugaRullinoRumineRumorosoRuoloRupeRussareRusticoSabatoSabbiareSabotatoSagomaSalassoSaldaturaSalgemmaSalivareSalmoneSaloneSaltareSalutoSalvoSapereSapidoSaporitoSaracenoSarcasmoSartoSassosoSatelliteSatiraSatolloSaturnoSavanaSavioSaziatoSbadiglioSbalzoSbancatoSbarraSbattereSbavareSbendareSbirciareSbloccatoSbocciatoSbrinareSbruffoneSbuffareScabrosoScadenzaScalaScambiareScandaloScapolaScarsoScatenareScavatoSceltoScenicoScettroSchedaSchienaSciarpaScienzaScindereScippoSciroppoScivoloSclerareScodellaScolpitoScompartoSconfortoScoprireScortaScossoneScozzeseScribaScrollareScrutinioScuderiaScultoreScuolaScuroScusareSdebitareSdoganareSeccaturaSecondoSedanoSeggiolaSegnalatoSegregatoSeguitoSelciatoSelettivoSellaSelvaggioSemaforoSembrareSemeSeminatoSempreSensoSentireSepoltoSequenzaSerataSerbatoSerenoSerioSerpenteSerraglioServireSestinaSetolaSettimanaSfaceloSfaldareSfamatoSfarzosoSfaticatoSferaSfidaSfilatoSfingeSfocatoSfoderareSfogoSfoltireSforzatoSfrattoSfruttatoSfuggitoSfumareSfusoSgabelloSgarbatoSgonfiareSgorbioSgrassatoSguardoSibiloSiccomeSierraSiglaSignoreSilenzioSillabaSimboloSimpaticoSimulatoSinfoniaSingoloSinistroSinoSintesiSinusoideSiparioSismaSistoleSituatoSlittaSlogaturaSlovenoSmarritoSmemoratoSmentitoSmeraldoSmilzoSmontareSmottatoSmussatoSnellireSnervatoSnodoSobbalzoSobrioSoccorsoSocialeSodaleSoffittoSognoSoldatoSolenneSolidoSollazzoSoloSolubileSolventeSomaticoSommaSondaSonettoSonniferoSopireSoppesoSopraSorgereSorpassoSorrisoSorsoSorteggioSorvolatoSospiroSostaSottileSpadaSpallaSpargereSpatolaSpaventoSpazzolaSpecieSpedireSpegnereSpelaturaSperanzaSpessoreSpettraleSpezzatoSpiaSpigolosoSpillatoSpinosoSpiraleSplendidoSportivoSposoSprangaSprecareSpronatoSpruzzoSpuntinoSquilloSradicareSrotolatoStabileStaccoStaffaStagnareStampatoStantioStarnutoStaseraStatutoSteloSteppaSterzoStilettoStimaStirpeStivaleStizzosoStonatoStoricoStrappoStregatoStriduloStrozzareStruttoStuccareStufoStupendoSubentroSuccosoSudoreSuggeritoSugoSultanoSuonareSuperboSupportoSurgelatoSurrogatoSussurroSuturaSvagareSvedeseSveglioSvelareSvenutoSveziaSviluppoSvistaSvizzeraSvoltaSvuotareTabaccoTabulatoTacciareTaciturnoTaleTalismanoTamponeTanninoTaraTardivoTargatoTariffaTarpareTartarugaTastoTatticoTavernaTavolataTazzaTecaTecnicoTelefonoTemerarioTempoTemutoTendoneTeneroTensioneTentacoloTeoremaTermeTerrazzoTerzettoTesiTesseratoTestatoTetroTettoiaTifareTigellaTimbroTintoTipicoTipografoTiraggioTiroTitanioTitoloTitubanteTizioTizzoneToccareTollerareToltoTombolaTomoTonfoTonsillaTopazioTopologiaToppaTorbaTornareTorroneTortoraToscanoTossireTostaturaTotanoTraboccoTracheaTrafilaTragediaTralcioTramontoTransitoTrapanoTrarreTraslocoTrattatoTraveTrecciaTremolioTrespoloTributoTrichecoTrifoglioTrilloTrinceaTrioTristezzaTrituratoTrivellaTrombaTronoTroppoTrottolaTrovareTruccatoTubaturaTuffatoTulipanoTumultoTunisiaTurbareTurchinoTutaTutelaUbicatoUccelloUccisoreUdireUditivoUffaUfficioUgualeUlisseUltimatoUmanoUmileUmorismoUncinettoUngereUnghereseUnicornoUnificatoUnisonoUnitarioUnteUovoUpupaUraganoUrgenzaUrloUsanzaUsatoUscitoUsignoloUsuraioUtensileUtilizzoUtopiaVacanteVaccinatoVagabondoVagliatoValangaValgoValicoVallettaValorosoValutareValvolaVampataVangareVanitosoVanoVantaggioVanveraVaporeVaranoVarcatoVarianteVascaVedettaVedovaVedutoVegetaleVeicoloVelcroVelinaVellutoVeloceVenatoVendemmiaVentoVeraceVerbaleVergognaVerificaVeroVerrucaVerticaleVescicaVessilloVestaleVeteranoVetrinaVetustoViandanteVibranteVicendaVichingoVicinanzaVidimareVigiliaVignetoVigoreVileVillanoViminiVincitoreViolaViperaVirgolaVirologoVirulentoViscosoVisioneVispoVissutoVisuraVitaVitelloVittimaVivandaVividoViziareVoceVogaVolatileVolereVolpeVoragineVulcanoZampognaZannaZappatoZatteraZavorraZefiroZelanteZeloZenzeroZerbinoZibettoZincoZirconeZittoZollaZoticoZuccheroZufoloZuluZuppa".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x5c1362d88fd4cf614a96f3234941d29f7d37c08c5292fde03bf62c2db6ff7620" !== m.check(e)))
            throw X = null, new Error("BIP39 Wordlist for it (Italian) FAILED"); }
        var G = new (function (_super) {
            __extends(class_7, _super);
            function class_7() {
                return _super.call(this, "it") || this;
            }
            class_7.prototype.getWord = function (e) { return V(this), X[e]; };
            class_7.prototype.getWordIndex = function (e) { return V(this), X.indexOf(e); };
            return class_7;
        }(m));
        m.register(G);
        var z = "}aE#4A=Yv&co#4N#6G=cJ&SM#66|/Z#4t&kn~46#4K~4q%b9=IR#7l,mB#7W_X2*dl}Uo~7s}Uf&Iw#9c&cw~6O&H6&wx&IG%v5=IQ~8a&Pv#47$PR&50%Ko&QM&3l#5f,D9#4L|/H&tQ;v0~6n]nN<di,AM=W5%QO&ka&ua,hM^tm=zV=JA=wR&+X]7P&NB#4J#5L|/b[dA}tJ<Do&6m&u2[U1&Kb.HM&mC=w0&MW<rY,Hq#6M}QG,13&wP}Jp]Ow%ue&Kg<HP<D9~4k~9T&I2_c6$9T#9/[C5~7O~4a=cs&O7=KK=An&l9$6U$8A&uD&QI|/Y&bg}Ux&F2#6b}E2&JN&kW&kp=U/&bb=Xl<Cj}k+~5J#6L&5z&9i}b4&Fo,ho(X0_g3~4O$Fz&QE<HN=Ww]6/%GF-Vw=tj&/D&PN#9g=YO}cL&Of&PI~5I&Ip=vU=IW#9G;0o-wU}ss&QR<BT&R9=tk$PY_dh&Pq-yh]7T,nj.Xu=EP&76=cI&Fs*Xg}z7$Gb&+I=DF,AF=cA}rL#7j=Dz&3y<Aa$52=PQ}b0(iY$Fa}oL&xV#6U=ec=WZ,xh%RY<dp#9N&Fl&44=WH*A7=sh&TB&8P=07;u+&PK}uh}J5#72)V/=xC,AB$k0&f6;1E|+5=1B,3v]6n&wR%b+&xx]7f=Ol}fl;+D^wG]7E;nB;uh^Ir&l5=JL,nS=cf=g5;u6|/Q$Gc=MH%Hg#5d%M6^86=U+$Gz,l/,ir^5y&Ba&/F-IY&FI&be%IZ#77&PW_Nu$kE(Yf&NX]7Z,Jy&FJ(Xo&Nz#/d=y7&MX<Ag}Z+;nE]Dt(iG#4D=13&Pj~4c%v8&Zo%OL&/X#4W<HR&ie~6J_1O(Y2=y5=Ad*cv_eB#6k&PX:BU#7A;uk&Ft&Fx_dD=U2;vB=U5=4F}+O&GN.HH:9s=b0%NV(jO&IH=JT}Z9=VZ<Af,Kx^4m&uJ%c6,6r;9m#+L}cf%Kh&F3~4H=vP}bu,Hz|++,1w]nv}k6;uu$jw*Kl*WX&uM[x7&Fr[m7$NO&QN]hu=JN}nR^8g#/h(ps|KC;vd}xz=V0}p6&FD$G1#7K<bG_4p~8g&cf;u4=tl}+k%5/}fz;uw<cA=u1}gU}VM=LJ=eX&+L&Pr#4U}p2:nC,2K]7H:jF&9x}uX#9O=MB<fz~8X~5m&4D&kN&u5%E/(h7(ZF&VG<de(qM|/e-Wt=3x(a+,/R]f/&ND$Ro&nU}0g=KA%kH&NK$Ke<dS}cB&IX~5g$TN]6m=Uv,Is&Py=Ef%Kz#+/%bi&+A<F4$OG&4C&FL#9V<Zk=2I_eE&6c]nw&kq$HG}y+&A8$P3}OH=XP]70%IS(AJ_gH%GZ&tY&AZ=vb~6y&/r=VI=Wv<Zi=fl=xf&eL}c8}OL=MJ=g8$F7=YT}9u=0+^xC}JH&nL^N0~4T]K2,Cy%OC#6s;vG(AC^xe^cG&MF}Br#9P;wD-7h$O/&xA}Fn^PC]6i]7G&8V$Qs;vl(TB~73~4l<mW&6V=2y&uY&+3)aP}XF;LP&kx$wU=t7;uy<FN&lz)7E=Oo*Y+;wI}9q}le;J6&Ri&4t&Qr#8B=cb&vG=J5|Ql(h5<Yy~4+}QD,Lx=wn%K/&RK=dO&Pw,Q9=co%4u;9u}g0@6a^4I%b0=zo|/c&tX=dQ=OS#+b=yz_AB&wB&Pm=W9$HP_gR=62=AO=ti=hI,oA&jr&dH=tm&b6$P2(x8=zi;nG~7F;05]0n[Ix&3m}rg=Xp=cd&uz]7t;97=cN;vV<jf&FF&F1=6Q&Ik*Kk&P4,2z=fQ]7D&3u,H0=d/}Uw<ZN<7R}Kv;0f$H7,MD]7n$F0#88~9Z%da=by;+T#/u=VF&fO&kr^kf<AB]sU,I5$Ng&Pz;0i&QD&vM=Yl:BM;nJ_xJ]U7&Kf&30,3f|Z9*dC)je_jA&Q4&Kp$NH(Yz#6S&Id%Ib=KX,AD=KV%dP}tW&Pk^+E_Ni=cq,3R}VZ(Si=b+}rv;0j}rZ]uA,/w(Sx&Jv$w9&4d&wE,NJ$Gy=J/]Ls#7k<ZQ<Y/&uj]Ov$PM;v3,2F&+u:up=On&3e,Jv;90=J+&Qm]6q}bK#+d~8Y(h2]hA;99&AS=I/}qB&dQ}yJ-VM}Vl&ui,iB&G3|Dc]7d=eQ%dX%JC_1L~4d^NP;vJ&/1)ZI#7N]9X[bQ&PL=0L(UZ,Lm&kc&IR}n7(iR<AQ<dg=33=vN}ft}au]7I,Ba=x9=dR~6R&Tq=Xi,3d$Nr&Bc}DI&ku&vf]Dn,/F&iD,Ll&Nw=0y&I7=Ls=/A&tU=Qe}Ua&uk&+F=g4=gh=Vj#+1&Qn}Uy*44#5F,Pc&Rz*Xn=oh=5W;0n_Nf(iE<Y7=vr=Zu]oz#5Z%mI=kN=Bv_Jp(T2;vt_Ml<FS&uI=L/&6P]64$M7}86<bo%QX(SI%IY&VK=Al&Ux;vv;ut*E/%uh<ZE|O3,M2(yc]yu=Wk&tp:Ex}hr,Cl&WE)+Z=8U}I2_4Q,hA_si=iw=OM=tM=yZ%Ia=U7;wT}b+;uo=Za}yS!5x}HD}fb#5O_dA;Nv%uB(yB;01(Sf}Fk;v7}Pt#8v<mZ#7L,/r&Pl~4w&f5=Ph$Fw_LF&8m,bL=yJ&BH}p/*Jn}tU~5Q;wB(h6]Df]8p^+B;E4&Wc=d+;Ea&bw$8C&FN,DM=Yf}mP~5w=fT#6V=mC=Fi=AV}jB&AN}lW}aH#/D)dZ;hl;vE}/7,CJ;31&w8,hj%u9_Js=jJ&4M~8k=TN&eC}nL&uc-wi&lX}dj=Mv=e2#6u=cr$uq$6G]8W}Jb:nm=Yg<b3(UA;vX&6n&xF=KT,jC,De&R8&oY=Zv&oB]7/=Z2&Oa}bf,hh(4h^tZ&72&Nx;D2&xL~5h~40)ZG)h+=OJ&RA]Bv$yB=Oq=df,AQ%Jn}OJ;11,3z&Tl&tj;v+^Hv,Dh(id=s+]7N&N3)9Q~8f,S4=uW=w4&uX,LX&3d]CJ&yp&8x<b2_do&lP=y/<cy_dG=Oi=7R(VH(lt_1T,Iq_AA;12^6T%k6#8K[B1{oO<AU[Bt;1b$9S&Ps<8T=St{bY,jB(Zp&63&Uv$9V,PM]6v&Af}zW[bW_oq}sm}nB&Kq&gC&ff_eq_2m&5F&TI}rf}Gf;Zr_z9;ER&jk}iz_sn<BN~+n&vo=Vi%97|ZR=Wc,WE&6t]6z%85(ly#84=KY)6m_5/=aX,N3}Tm&he&6K]tR_B2-I3;u/&hU&lH<AP=iB&IA=XL;/5&Nh=wv<BH#79=vS=zl<AA=0X_RG}Bw&9p$NW,AX&kP_Lp&/Z(Tc]Mu}hs#6I}5B&cI<bq&H9#6m=K9}vH(Y1(Y0#4B&w6,/9&gG<bE,/O=zb}I4_l8<B/;wL%Qo<HO[Mq=XX}0v&BP&F4(mG}0i}nm,EC=9u{I3,xG&/9=JY*DK&hR)BX=EI=cx=b/{6k}yX%A+&wa}Xb=la;wi^lL;0t}jo&Qb=xg=XB}iO<qo{bR=NV&8f=a0&Jy;0v=uK)HK;vN#6h&jB(h/%ud&NI%wY.X7=Pt}Cu-uL&Gs_hl%mH,tm]78=Lb^Q0#7Y=1u<Bt&+Q=Co_RH,w3;1e}ux<aU;ui}U3&Q5%bt]63&UQ|0l&uL}O7&3o,AV&dm|Nj(Xt*5+(Uu&Hh(p7(UF=VR=Bp^Jl&Hd[ix)9/=Iq]C8<67]66}mB%6f}bb}JI]8T$HA}db=YM&pa=2J}tS&Y0=PS&y4=cX$6E,hX,XP&nR;04,FQ&l0&Vm_Dv#5Y~8Z=Bi%MA]6x=JO:+p,Az&9q,Hj~6/}SD=K1:EJ}nA;Qo#/E]9R,Ie&6X%W3]61&v4=xX_MC=0q;06(Xq=fs}IG}Dv=0l}o7$iZ;9v&LH&DP-7a&OY,SZ,Kz,Cv&dh=fx|Nh,F/~7q=XF&w+;9n&Gw;0h}Z7<7O&JK(S7&LS<AD<ac=wo<Dt&zw%4B=4v#8P;9o~6p*vV=Tm,Or&I6=1q}nY=P0=gq&Bl&Uu,Ch%yb}UY=zh}dh}rl(T4_xk(YA#8R*xH,IN}Jn]7V}C4&Ty}j3]7p=cL=3h&wW%Qv<Z3=f0&RI&+S(ic_zq}oN&/Y=z1;Td=LW=0e=OI(Vc,+b^ju(UL;0r:Za%8v=Rp=zw&58&73&wK}qX]6y&8E)a2}WR=wP^ur&nQ<cH}Re=Aq&wk}Q0&+q=PP,Gc|/d^k5,Fw]8Y}Pg]p3=ju=ed}r5_yf&Cs]7z$/G<Cm&Jp&54_1G_gP_Ll}JZ;0u]k8_7k(Sg]65{9i=LN&Sx&WK,iW&fD&Lk{9a}Em-9c#8N&io=sy]8d&nT&IK(lx#7/$lW(Td<s8~49,3o<7Y=MW(T+_Jr&Wd,iL}Ct=xh&5V;v4&8n%Kx=iF&l2_0B{B+,If(J0,Lv;u8=Kx-vB=HC&vS=Z6&fU&vE^xK;3D=4h=MR#45:Jw;0d}iw=LU}I5=I0]gB*im,K9}GU,1k_4U&Tt=Vs(iX&lU(TF#7y,ZO}oA&m5#5P}PN}Uz=hM<B1&FB<aG,e6~7T<tP(UQ_ZT=wu&F8)aQ]iN,1r_Lo&/g:CD}84{J1_Ki&Na&3n$jz&FE=dc;uv;va}in}ll=fv(h1&3h}fp=Cy}BM(+E~8m}lo%v7=hC(T6$cj=BQ=Bw(DR,2j=Ks,NS|F+;00=fU=70}Mb(YU;+G&m7&hr=Sk%Co]t+(X5_Jw}0r}gC(AS-IP&QK<Z2#8Q$WC]WX}T2&pG_Ka,HC=R4&/N;Z+;ch(C7,D4$3p_Mk&B2$8D=n9%Ky#5z(CT&QJ#7B]DC]gW}nf~5M;Iw#80}Tc_1F#4Z-aC}Hl=ph=fz,/3=aW}JM}nn;DG;vm}wn,4P}T3;wx&RG$u+}zK=0b;+J_Ek{re<aZ=AS}yY#5D]7q,Cp}xN=VP*2C}GZ}aG~+m_Cs=OY#6r]6g<GS}LC(UB=3A=Bo}Jy<c4}Is;1P<AG}Op<Z1}ld}nS=1Z,yM&95&98=CJ(4t:2L$Hk=Zo}Vc;+I}np&N1}9y=iv}CO*7p=jL)px]tb^zh&GS&Vl%v/;vR=14=zJ&49|/f]hF}WG;03=8P}o/&Gg&rp;DB,Kv}Ji&Pb;aA^ll(4j%yt}+K$Ht#4y&hY]7Y<F1,eN}bG(Uh%6Z]t5%G7;+F_RE;it}tL=LS&Da=Xx(S+(4f=8G=yI}cJ}WP=37=jS}pX}hd)fp<A8=Jt~+o$HJ=M6}iX=g9}CS=dv=Cj(mP%Kd,xq|+9&LD(4/=Xm&QP=Lc}LX&fL;+K=Op(lu=Qs.qC:+e&L+=Jj#8w;SL]7S(b+#4I=c1&nG_Lf&uH;+R)ZV<bV%B/,TE&0H&Jq&Ah%OF&Ss(p2,Wv&I3=Wl}Vq;1L&lJ#9b_1H=8r=b8=JH(SZ=hD=J2#7U,/U#/X~6P,FU<eL=jx,mG=hG=CE&PU=Se(qX&LY=X6=y4&tk&QQ&tf=4g&xI}W+&mZ=Dc#7w}Lg;DA;wQ_Kb(cJ=hR%yX&Yb,hw{bX_4X;EP;1W_2M}Uc=b5(YF,CM&Tp^OJ{DD]6s=vF=Yo~8q}XH}Fu%P5(SJ=Qt;MO]s8<F3&B3&8T(Ul-BS*dw&dR<87}/8]62$PZ]Lx<Au}9Q]7c=ja=KR,Go,Us&v6(qk}pG&G2=ev^GM%w4&H4]7F&dv]J6}Ew:9w=sj-ZL}Ym$+h(Ut(Um~4n=Xs(U7%eE=Qc_JR<CA#6t<Fv|/I,IS,EG<F2(Xy$/n<Fa(h9}+9_2o&N4#7X<Zq|+f_Dp=dt&na,Ca=NJ)jY=8C=YG=s6&Q+<DO}D3=xB&R1(lw;Qn<bF(Cu|/B}HV=SS&n7,10&u0]Dm%A6^4Q=WR(TD=Xo<GH,Rj(l8)bP&n/=LM&CF,F5&ml=PJ;0k=LG=tq,Rh,D6@4i=1p&+9=YC%er_Mh;nI;0q=Fw]80=xq=FM$Gv;v6&nc;wK%H2&Kj;vs,AA=YP,66}bI(qR~5U=6q~4b$Ni=K5.X3$So&Iu(p+]8G=Cf=RY(TS_O3(iH&57=fE=Dg_Do#9z#7H;FK{qd_2k%JR}en&gh_z8;Rx}9p<cN_Ne,DO;LN_7o~/p=NF=5Y}gN<ce<C1,QE]Wv=3u<BC}GK]yq}DY&u/_hj=II(pz&rC,jV&+Z}ut=NQ;Cg-SR_ZS,+o=u/;Oy_RK_QF(Fx&xP}Wr&TA,Uh&g1=yr{ax[VF$Pg(YB;Ox=Vy;+W(Sp}XV%dd&33(l/]l4#4Y}OE=6c=bw(A7&9t%wd&N/&mo,JH&Qe)fm=Ao}fu=tH", j = { zh_cn: null, zh_tw: null }, K = { zh_cn: "0x17bcc4d8547e5a7135e365d1ab443aaae95e76d8230c2782c67305d4f21497a1", zh_tw: "0x51e720e90c7b87bec1d70eb6e74a21a449bd3ec9c020b01d3a40ed991b60ce5d" }, Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        function q(e) { if (null !== j[e.locale])
            return; j[e.locale] = []; var t = 0; for (var r_29 = 0; r_29 < 2048; r_29++) {
            var n_14 = "~!@#$%^&*_-=[]{}|;:,.()<>?".indexOf(z[3 * r_29]), i_12 = [228 + (n_14 >> 2), 128 + Z.indexOf(z[3 * r_29 + 1]), 128 + Z.indexOf(z[3 * r_29 + 2])];
            if ("zh_tw" === e.locale)
                for (var e_30 = n_14 % 4; e_30 < 3; e_30++)
                    i_12[e_30] = Z.indexOf("FAZDC6BALcLZCA+GBARCW8wNCcDDZ8LVFBOqqDUiou+M42TFAyERXFb7EjhP+vmBFpFrUpfDV2F7eB+eCltCHJFWLFCED+pWTojEIHFXc3aFn4F68zqjEuKidS1QBVPDEhE7NA4mhMF7oThD49ot3FgtzHFCK0acW1x8DH1EmLoIlrWFBLE+y5+NA3Cx65wJHTaEZVaK1mWAmPGxgYCdxwOjTDIt/faOEhTl1vqNsKtJCOhJWuio2g07KLZEQsFBUpNtwEByBgxFslFheFbiEPvi61msDvApxCzB6rBCzox7joYA5UdDc+Cb4FSgIabpXFAj3bjkmFAxCZE+mD/SFf/0ELecYCt3nLoxC6WEZf2tKDB4oZvrEmqFkKk7BwILA7gtYBpsTq//D4jD0F0wEB9pyQ1BD5Ba0oYHDI+sbDFhvrHXdDHfgFEIJLi5r8qercNFBgFLC4bo5ERJtamWBDFy73KCEb6M8VpmEt330ygCTK58EIIFkYgF84gtGA9Uyh3m68iVrFbWFbcbqiCYHZ9J1jeRPbL8yswhMiDbhEhdNoSwFbZrLT740ABEqgCkO8J1BLd1VhKKR4sD1yUo0z+FF59Mvg71CFbyEhbHSFBKEIKyoQNgQppq9T0KAqePu0ZFGrXOHdKJqkoTFhYvpDNyuuznrN84thJbsCoO6Cu6Xlvntvy0QYuAExQEYtTUBf3CoCqwgGFZ4u1HJFzDVwEy3cjcpV4QvsPaBC3rCGyCF23o4K3pp2gberGgFEJEHo4nHICtyKH2ZqyxhN05KBBJIQlKh/Oujv/DH32VrlqFdIFC7Fz9Ct4kaqFME0UETLprnN9kfy+kFmtQBB0+5CFu0N9Ij8l/VvJDh2oq3hT6EzjTHKFN7ZjZwoTsAZ4Exsko6Fpa6WC+sduz8jyrLpegTv2h1EBeYpLpm2czQW0KoCcS0bCVXCmuWJDBjN1nQNLdF58SFJ0h7i3pC3oEOKy/FjBklL70XvBEEIWp2yZ04xObzAWDDJG7f+DbqBEA7LyiR95j7MDVdDViz2RE5vWlBMv5e4+VfhP3aXNPhvLSynb9O2x4uFBV+3jqu6d5pCG28/sETByvmu/+IJ0L3wb4rj9DNOLBF6XPIODr4L19U9RRofAG6Nxydi8Bki8BhGJbBAJKzbJxkZSlF9Q2Cu8oKqggB9hBArwLLqEBWEtFowy8XK8bEyw9snT+BeyFk1ZCSrdmgfEwFePTgCjELBEnIbjaDDPJm36rG9pztcEzT8dGk23SBhXBB1H4z+OWze0ooFzz8pDBYFvp9j9tvFByf9y4EFdVnz026CGR5qMr7fxMHN8UUdlyJAzlTBDRC28k+L4FB8078ljyD91tUj1ocnTs8vdEf7znbzm+GIjEZnoZE5rnLL700Xc7yHfz05nWxy03vBB9YGHYOWxgMQGBCR24CVYNE1hpfKxN0zKnfJDmmMgMmBWqNbjfSyFCBWSCGCgR8yFXiHyEj+VtD1FB3FpC1zI0kFbzifiKTLm9yq5zFmur+q8FHqjoOBWsBPiDbnCC2ErunV6cJ6TygXFYHYp7MKN9RUlSIS8/xBAGYLzeqUnBF4QbsTuUkUqGs6CaiDWKWjQK9EJkjpkTmNCPYXL"[t++]) + (0 == e_30 ? 228 : 128);
            j[e.locale].push((0, a.ZN)(i_12));
        } if (m.check(e) !== K[e.locale])
            throw j[e.locale] = null, new Error("BIP39 Wordlist for " + e.locale + " (Chinese) FAILED"); }
        var Q = (function (_super) {
            __extends(Q, _super);
            function Q(e) {
                return _super.call(this, "zh_" + e) || this;
            }
            Q.prototype.getWord = function (e) { return q(this), j[this.locale][e]; };
            Q.prototype.getWordIndex = function (e) { return q(this), j[this.locale].indexOf(e); };
            Q.prototype.split = function (e) { return (e = e.replace(/(?:\u3000| )+/g, "")).split(""); };
            return Q;
        }(m));
        var W = new Q("cn");
        m.register(W), m.register(W, "zh");
        var Y = new Q("tw");
        m.register(Y);
        var $ = { cz: v, en: w, es: M, fr: N, it: G, ja: D, ko: H, zh: W, zh_cn: W, zh_tw: Y }, ee = new p.Logger("hdnode/5.0.9"), te = o.O$.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), re = (0, a.Y0)("Bitcoin seed"), ne = 2147483648;
        function ie(e) { return (1 << e) - 1 << 8 - e; }
        function oe(e) { return (0, i.hexZeroPad)((0, i.hexlify)(e), 32); }
        function ae(e) { return n.Base58.encode((0, i.concat)([e, (0, i.hexDataSlice)((0, u.JQ)((0, u.JQ)(e)), 0, 4)])); }
        function se(e) { if (null == e)
            return $.en; if ("string" == typeof e) {
            var t_24 = $[e];
            return null == t_24 && ee.throwArgumentError("unknown locale", "wordlist", e), t_24;
        } return e; }
        var ce = {}, le = "m/44'/60'/0'/0/0";
        var ue = (function () {
            function ue(e, t, r, n, o, a, s, f) {
                var _newTarget = this.constructor;
                if (ee.checkNew(_newTarget, ue), e !== ce)
                    throw new Error("HDNode constructor cannot be called directly");
                if (t) {
                    var e_31 = new l.SigningKey(t);
                    (0, c.defineReadOnly)(this, "privateKey", e_31.privateKey), (0, c.defineReadOnly)(this, "publicKey", e_31.compressedPublicKey);
                }
                else
                    (0, c.defineReadOnly)(this, "privateKey", null), (0, c.defineReadOnly)(this, "publicKey", (0, i.hexlify)(r));
                (0, c.defineReadOnly)(this, "parentFingerprint", n), (0, c.defineReadOnly)(this, "fingerprint", (0, i.hexDataSlice)((0, u.bP)((0, u.JQ)(this.publicKey)), 0, 4)), (0, c.defineReadOnly)(this, "address", (0, h.computeAddress)(this.publicKey)), (0, c.defineReadOnly)(this, "chainCode", o), (0, c.defineReadOnly)(this, "index", a), (0, c.defineReadOnly)(this, "depth", s), null == f ? ((0, c.defineReadOnly)(this, "mnemonic", null), (0, c.defineReadOnly)(this, "path", null)) : "string" == typeof f ? ((0, c.defineReadOnly)(this, "mnemonic", null), (0, c.defineReadOnly)(this, "path", f)) : ((0, c.defineReadOnly)(this, "mnemonic", f), (0, c.defineReadOnly)(this, "path", f.path));
            }
            Object.defineProperty(ue.prototype, "extendedKey", {
                get: function () { if (this.depth >= 256)
                    throw new Error("Depth too large!"); return ae((0, i.concat)([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", (0, i.hexlify)(this.depth), this.parentFingerprint, (0, i.hexZeroPad)((0, i.hexlify)(this.index), 4), this.chainCode, null != this.privateKey ? (0, i.concat)(["0x00", this.privateKey]) : this.publicKey])); },
                enumerable: false,
                configurable: true
            });
            ue.prototype.neuter = function () { return new ue(ce, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path); };
            ue.prototype._derive = function (e) { if (e > 4294967295)
                throw new Error("invalid index - " + String(e)); var t = this.path; t && (t += "/" + (2147483647 & e)); var r = new Uint8Array(37); if (e & ne) {
                if (!this.privateKey)
                    throw new Error("cannot derive child of neutered node");
                r.set((0, i.arrayify)(this.privateKey), 1), t && (t += "'");
            }
            else
                r.set((0, i.arrayify)(this.publicKey)); for (var t_25 = 24; t_25 >= 0; t_25 -= 8)
                r[33 + (t_25 >> 3)] = e >> 24 - t_25 & 255; var n = (0, i.arrayify)((0, u.Gy)(f.p.sha512, this.chainCode, r)), a = n.slice(0, 32), s = n.slice(32); var c = null, h = null; this.privateKey ? c = oe(o.O$.from(a).add(this.privateKey).mod(te)) : h = new l.SigningKey((0, i.hexlify)(a))._addPoint(this.publicKey); var d = t; var p = this.mnemonic; return p && (d = Object.freeze({ phrase: p.phrase, path: t, locale: p.locale || "en" })), new ue(ce, c, h, this.fingerprint, oe(s), e, this.depth + 1, d); };
            ue.prototype.derivePath = function (e) { var t = e.split("/"); if (0 === t.length || "m" === t[0] && 0 !== this.depth)
                throw new Error("invalid path - " + e); "m" === t[0] && t.shift(); var r = this; for (var e_32 = 0; e_32 < t.length; e_32++) {
                var n_15 = t[e_32];
                if (n_15.match(/^[0-9]+'$/)) {
                    var e_33 = parseInt(n_15.substring(0, n_15.length - 1));
                    if (e_33 >= ne)
                        throw new Error("invalid path index - " + n_15);
                    r = r._derive(ne + e_33);
                }
                else {
                    if (!n_15.match(/^[0-9]+$/))
                        throw new Error("invalid path component - " + n_15);
                    {
                        var e_34 = parseInt(n_15);
                        if (e_34 >= ne)
                            throw new Error("invalid path index - " + n_15);
                        r = r._derive(e_34);
                    }
                }
            } return r; };
            ue._fromSeed = function (e, t) { var r = (0, i.arrayify)(e); if (r.length < 16 || r.length > 64)
                throw new Error("invalid seed"); var n = (0, i.arrayify)((0, u.Gy)(f.p.sha512, re, r)); return new ue(ce, oe(n.slice(0, 32)), null, "0x00000000", oe(n.slice(32)), 0, 0, t); };
            ue.fromMnemonic = function (e, t, r) { return e = de(he(e, r = se(r)), r), ue._fromSeed(fe(e, t), { phrase: e, path: "m", locale: r.locale }); };
            ue.fromSeed = function (e) { return ue._fromSeed(e, null); };
            ue.fromExtendedKey = function (e) { var t = n.Base58.decode(e); 82 === t.length && ae(t.slice(0, 78)) === e || ee.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]"); var r = t[4], o = (0, i.hexlify)(t.slice(5, 9)), a = parseInt((0, i.hexlify)(t.slice(9, 13)).substring(2), 16), s = (0, i.hexlify)(t.slice(13, 45)), c = t.slice(45, 78); switch ((0, i.hexlify)(t.slice(0, 4))) {
                case "0x0488b21e":
                case "0x043587cf": return new ue(ce, null, (0, i.hexlify)(c), o, s, a, r, null);
                case "0x0488ade4":
                case "0x04358394 ":
                    if (0 !== c[0])
                        break;
                    return new ue(ce, (0, i.hexlify)(c.slice(1)), null, o, s, a, r, null);
            } return ee.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]"); };
            return ue;
        }());
        function fe(e, t) { t || (t = ""); var r = (0, a.Y0)("mnemonic" + t, a.Uj.NFKD); return (0, s.n)((0, a.Y0)(e, a.Uj.NFKD), r, 2048, 64, "sha512"); }
        function he(e, t) { t = se(t), ee.checkNormalize(); var r = t.split(e); if (r.length % 3 != 0)
            throw new Error("invalid mnemonic"); var n = (0, i.arrayify)(new Uint8Array(Math.ceil(11 * r.length / 8))); var o = 0; for (var e_35 = 0; e_35 < r.length; e_35++) {
            var i_13 = t.getWordIndex(r[e_35].normalize("NFKD"));
            if (-1 === i_13)
                throw new Error("invalid mnemonic");
            for (var e_36 = 0; e_36 < 11; e_36++)
                i_13 & 1 << 10 - e_36 && (n[o >> 3] |= 1 << 7 - o % 8), o++;
        } var a = 32 * r.length / 3, s = ie(r.length / 3); if (((0, i.arrayify)((0, u.JQ)(n.slice(0, a / 8)))[0] & s) != (n[n.length - 1] & s))
            throw new Error("invalid checksum"); return (0, i.hexlify)(n.slice(0, a / 8)); }
        function de(e, t) { if (t = se(t), (e = (0, i.arrayify)(e)).length % 4 != 0 || e.length < 16 || e.length > 32)
            throw new Error("invalid entropy"); var r = [0]; var n = 11; for (var t_26 = 0; t_26 < e.length; t_26++)
            n > 8 ? (r[r.length - 1] <<= 8, r[r.length - 1] |= e[t_26], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= e[t_26] >> 8 - n, r.push(e[t_26] & (1 << 8 - n) - 1), n += 3); var o = e.length / 4, a = (0, i.arrayify)((0, u.JQ)(e))[0] & ie(o); return r[r.length - 1] <<= o, r[r.length - 1] |= a >> 8 - o, t.join(r.map((function (e) { return t.getWord(e); }))); }
        function pe(e, t) { try {
            return he(e, t), !0;
        }
        catch (e) { } return !1; }
    }, 9816: function (e, t, r) {
        "use strict";
        r.d(t, { i: function () { return n; } });
        var n = "json-wallets/5.0.11";
    }, 6883: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { decryptCrowdsale: function () { return m; }, decryptJsonWallet: function () { return S; }, decryptJsonWalletSync: function () { return w; }, decryptKeystore: function () { return A.pe; }, decryptKeystoreSync: function () { return A.hb; }, encryptKeystore: function () { return A.HI; }, getJsonWalletAddress: function () { return v; }, isCrowdsaleWallet: function () { return b; }, isKeystoreWallet: function () { return y; } });
        var n = r(8826), i = r.n(n), o = r(4594), a = r(3286), s = r(8197), c = r(5306), l = r(4242), u = r(3587), f = r(711), h = r(9816), d = r(7013);
        var p = new f.Logger(h.i);
        var g = (function (_super) {
            __extends(g, _super);
            function g() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            g.prototype.isCrowdsaleAccount = function (e) { return !(!e || !e._isCrowdsaleAccount); };
            return g;
        }(u.Description));
        function m(e, t) { var r = JSON.parse(e); t = (0, d.Ij)(t); var n = (0, o.getAddress)((0, d.gx)(r, "ethaddr")), u = (0, d.p3)((0, d.gx)(r, "encseed")); u && u.length % 16 == 0 || p.throwArgumentError("invalid encseed", "json", e); var f = (0, a.arrayify)((0, c.n)(t, t, 2e3, 32, "sha256")).slice(0, 16), h = u.slice(0, 16), m = u.slice(16), b = new (i().ModeOfOperation.cbc)(f, h), y = i().padding.pkcs7.strip((0, a.arrayify)(b.decrypt(m))); var v = ""; for (var e_37 = 0; e_37 < y.length; e_37++)
            v += String.fromCharCode(y[e_37]); var A = (0, l.Y0)(v), S = (0, s.keccak256)(A); return new g({ _isCrowdsaleAccount: !0, address: n, privateKey: S }); }
        function b(e) { var t = null; try {
            t = JSON.parse(e);
        }
        catch (e) {
            return !1;
        } return t.encseed && t.ethaddr; }
        function y(e) { var t = null; try {
            t = JSON.parse(e);
        }
        catch (e) {
            return !1;
        } return !(!t.version || parseInt(t.version) !== t.version || 3 !== parseInt(t.version)); }
        function v(e) { if (b(e))
            try {
                return (0, o.getAddress)(JSON.parse(e).ethaddr);
            }
            catch (e) {
                return null;
            } if (y(e))
            try {
                return (0, o.getAddress)(JSON.parse(e).address);
            }
            catch (e) {
                return null;
            } return null; }
        var A = r(1964);
        function S(e, t, r) { if (b(e)) {
            r && r(0);
            var n_16 = m(e, t);
            return r && r(1), Promise.resolve(n_16);
        } return y(e) ? (0, A.pe)(e, t, r) : Promise.reject(new Error("invalid JSON wallet")); }
        function w(e, t) { if (b(e))
            return m(e, t); if (y(e))
            return (0, A.hb)(e, t); throw new Error("invalid JSON wallet"); }
    }, 1964: function (e, t, r) {
        "use strict";
        r.d(t, { hb: function () { return k; }, pe: function () { return B; }, HI: function () { return M; } });
        var n = r(8826), i = r.n(n), o = r(7635), a = r.n(o), s = r(4594), c = r(3286), l = r(1681), u = r(8197), f = r(5306), h = r(4478), d = r(3587), p = r(4377), g = r(7013), m = r(711), b = r(9816);
        var y = new m.Logger(b.i);
        function v(e) { return null != e && e.mnemonic && e.mnemonic.phrase; }
        var A = (function (_super) {
            __extends(A, _super);
            function A() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            A.prototype.isKeystoreAccount = function (e) { return !(!e || !e._isKeystoreAccount); };
            return A;
        }(d.Description));
        function S(e, t) { var r = (0, g.p3)((0, g.gx)(e, "crypto/ciphertext")); if ((0, c.hexlify)((0, u.keccak256)((0, c.concat)([t.slice(16, 32), r]))).substring(2) !== (0, g.gx)(e, "crypto/mac").toLowerCase())
            throw new Error("invalid password"); var n = function (e, t, r) { if ("aes-128-ctr" === (0, g.gx)(e, "crypto/cipher")) {
            var n_17 = (0, g.p3)((0, g.gx)(e, "crypto/cipherparams/iv")), o_7 = new (i().Counter)(n_17), a_3 = new (i().ModeOfOperation.ctr)(t, o_7);
            return (0, c.arrayify)(a_3.decrypt(r));
        } return null; }(e, t.slice(0, 16), r); n || y.throwError("unsupported cipher", m.Logger.errors.UNSUPPORTED_OPERATION, { operation: "decrypt" }); var o = t.slice(32, 64), a = (0, p.computeAddress)(n); if (e.address) {
            var t_27 = e.address.toLowerCase();
            if ("0x" !== t_27.substring(0, 2) && (t_27 = "0x" + t_27), (0, s.getAddress)(t_27) !== a)
                throw new Error("address mismatch");
        } var f = { _isKeystoreAccount: !0, address: a, privateKey: (0, c.hexlify)(n) }; if ("0.1" === (0, g.gx)(e, "x-ethers/version")) {
            var t_28 = (0, g.p3)((0, g.gx)(e, "x-ethers/mnemonicCiphertext")), r_30 = (0, g.p3)((0, g.gx)(e, "x-ethers/mnemonicCounter")), n_18 = new (i().Counter)(r_30), a_4 = new (i().ModeOfOperation.ctr)(o, n_18), s_4 = (0, g.gx)(e, "x-ethers/path") || l.defaultPath, u_1 = (0, g.gx)(e, "x-ethers/locale") || "en", h_1 = (0, c.arrayify)(a_4.decrypt(t_28));
            try {
                var e_38 = (0, l.entropyToMnemonic)(h_1, u_1), t_29 = l.HDNode.fromMnemonic(e_38, null, u_1).derivePath(s_4);
                if (t_29.privateKey != f.privateKey)
                    throw new Error("mnemonic mismatch");
                f.mnemonic = t_29.mnemonic;
            }
            catch (e) {
                if (e.code !== m.Logger.errors.INVALID_ARGUMENT || "wordlist" !== e.argument)
                    throw e;
            }
        } return new A(f); }
        function w(e, t, r, n, i) { return (0, c.arrayify)((0, f.n)(e, t, r, n, i)); }
        function E(e, t, r, n, i) { return Promise.resolve(w(e, t, r, n, i)); }
        function T(e, t, r, n, i) { var o = (0, g.Ij)(t), a = (0, g.gx)(e, "crypto/kdf"); if (a && "string" == typeof a) {
            var t_30 = function (e, t) { return y.throwArgumentError("invalid key-derivation function parameters", e, t); };
            if ("scrypt" === a.toLowerCase()) {
                var r_31 = (0, g.p3)((0, g.gx)(e, "crypto/kdfparams/salt")), s_5 = parseInt((0, g.gx)(e, "crypto/kdfparams/n")), c_1 = parseInt((0, g.gx)(e, "crypto/kdfparams/r")), l_1 = parseInt((0, g.gx)(e, "crypto/kdfparams/p"));
                s_5 && c_1 && l_1 || t_30("kdf", a), 0 != (s_5 & s_5 - 1) && t_30("N", s_5);
                var u_2 = parseInt((0, g.gx)(e, "crypto/kdfparams/dklen"));
                return 32 !== u_2 && t_30("dklen", u_2), n(o, r_31, s_5, c_1, l_1, 64, i);
            }
            if ("pbkdf2" === a.toLowerCase()) {
                var n_19 = (0, g.p3)((0, g.gx)(e, "crypto/kdfparams/salt"));
                var i_14 = null;
                var a_5 = (0, g.gx)(e, "crypto/kdfparams/prf");
                "hmac-sha256" === a_5 ? i_14 = "sha256" : "hmac-sha512" === a_5 ? i_14 = "sha512" : t_30("prf", a_5);
                var s_6 = parseInt((0, g.gx)(e, "crypto/kdfparams/c")), c_2 = parseInt((0, g.gx)(e, "crypto/kdfparams/dklen"));
                return 32 !== c_2 && t_30("dklen", c_2), r(o, n_19, s_6, c_2, i_14);
            }
        } return y.throwArgumentError("unsupported key-derivation function", "kdf", a); }
        function k(e, t) { var r = JSON.parse(e); return S(r, T(r, t, w, a().syncScrypt)); }
        function B(e, t, r) { return n = this, i = void 0, s = function () { var n, _a, _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    n = JSON.parse(e);
                    _a = S;
                    _b = [n];
                    return [4, T(n, t, E, a().scrypt, r)];
                case 1: return [2, _a.apply(void 0, _b.concat([_c.sent()]))];
            }
        }); }, new ((o = void 0) || (o = Promise))((function (e, t) { function r(e) { try {
            c(s.next(e));
        }
        catch (e) {
            t(e);
        } } function a(e) { try {
            c(s.throw(e));
        }
        catch (e) {
            t(e);
        } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof o ? n : new o((function (e) { e(n); }))).then(r, a); } c((s = s.apply(n, i || [])).next()); })); var n, i, o, s; }
        function M(e, t, r, n) { try {
            if ((0, s.getAddress)(e.address) !== (0, p.computeAddress)(e.privateKey))
                throw new Error("address/privateKey mismatch");
            if (v(e)) {
                var t_31 = e.mnemonic;
                if (l.HDNode.fromMnemonic(t_31.phrase, null, t_31.locale).derivePath(t_31.path || l.defaultPath).privateKey != e.privateKey)
                    throw new Error("mnemonic mismatch");
            }
        }
        catch (e) {
            return Promise.reject(e);
        } "function" != typeof r || n || (n = r, r = {}), r || (r = {}); var o = (0, c.arrayify)(e.privateKey), f = (0, g.Ij)(t); var d = null, m = null, b = null; if (v(e)) {
            var t_32 = e.mnemonic;
            d = (0, c.arrayify)((0, l.mnemonicToEntropy)(t_32.phrase, t_32.locale || "en")), m = t_32.path || l.defaultPath, b = t_32.locale || "en";
        } var y = r.client; y || (y = "ethers.js"); var A = null; A = r.salt ? (0, c.arrayify)(r.salt) : (0, h.O)(32); var S = null; if (r.iv) {
            if (S = (0, c.arrayify)(r.iv), 16 !== S.length)
                throw new Error("invalid iv");
        }
        else
            S = (0, h.O)(16); var w = null; if (r.uuid) {
            if (w = (0, c.arrayify)(r.uuid), 16 !== w.length)
                throw new Error("invalid uuid");
        }
        else
            w = (0, h.O)(16); var E = 1 << 17, T = 8, k = 1; return r.scrypt && (r.scrypt.N && (E = r.scrypt.N), r.scrypt.r && (T = r.scrypt.r), r.scrypt.p && (k = r.scrypt.p)), a().scrypt(f, A, E, T, k, 64, n).then((function (t) { var r = (t = (0, c.arrayify)(t)).slice(0, 16), n = t.slice(16, 32), a = t.slice(32, 64), s = new (i().Counter)(S), l = new (i().ModeOfOperation.ctr)(r, s), f = (0, c.arrayify)(l.encrypt(o)), p = (0, u.keccak256)((0, c.concat)([n, f])), v = { address: e.address.substring(2).toLowerCase(), id: (0, g.EH)(w), version: 3, Crypto: { cipher: "aes-128-ctr", cipherparams: { iv: (0, c.hexlify)(S).substring(2) }, ciphertext: (0, c.hexlify)(f).substring(2), kdf: "scrypt", kdfparams: { salt: (0, c.hexlify)(A).substring(2), n: E, dklen: 32, p: k, r: T }, mac: p.substring(2) } }; if (d) {
            var e_39 = (0, h.O)(16), t_33 = new (i().Counter)(e_39), r_32 = new (i().ModeOfOperation.ctr)(a, t_33), n_20 = (0, c.arrayify)(r_32.encrypt(d)), o_8 = new Date, s_7 = o_8.getUTCFullYear() + "-" + (0, g.VP)(o_8.getUTCMonth() + 1, 2) + "-" + (0, g.VP)(o_8.getUTCDate(), 2) + "T" + (0, g.VP)(o_8.getUTCHours(), 2) + "-" + (0, g.VP)(o_8.getUTCMinutes(), 2) + "-" + (0, g.VP)(o_8.getUTCSeconds(), 2) + ".0Z";
            v["x-ethers"] = { client: y, gethFilename: "UTC--" + s_7 + "--" + v.address, mnemonicCounter: (0, c.hexlify)(e_39).substring(2), mnemonicCiphertext: (0, c.hexlify)(n_20).substring(2), path: m, locale: b, version: "0.1" };
        } return JSON.stringify(v); })); }
    }, 7013: function (e, t, r) {
        "use strict";
        r.d(t, { p3: function () { return o; }, VP: function () { return a; }, Ij: function () { return s; }, gx: function () { return c; }, EH: function () { return l; } });
        var n = r(3286), i = r(4242);
        function o(e) { return "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), (0, n.arrayify)(e); }
        function a(e, t) { for (e = String(e); e.length < t;)
            e = "0" + e; return e; }
        function s(e) { return "string" == typeof e ? (0, i.Y0)(e, i.Uj.NFKC) : (0, n.arrayify)(e); }
        function c(e, t) { var r = e; var n = t.toLowerCase().split("/"); for (var e_40 = 0; e_40 < n.length; e_40++) {
            var t_34 = null;
            for (var i_15 in r)
                if (i_15.toLowerCase() === n[e_40]) {
                    t_34 = r[i_15];
                    break;
                }
            if (null === t_34)
                return null;
            r = t_34;
        } return r; }
        function l(e) { var t = (0, n.arrayify)(e); t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128; var r = (0, n.hexlify)(t); return [r.substring(2, 10), r.substring(10, 14), r.substring(14, 18), r.substring(18, 22), r.substring(22, 34)].join("-"); }
    }, 8197: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { keccak256: function () { return a; } });
        var n = r(4867), i = r.n(n), o = r(3286);
        function a(e) { return "0x" + i().keccak_256((0, o.arrayify)(e)); }
    }, 4867: function (e, t, r) { !function () {
        "use strict";
        var t = "object" == typeof window ? window : {};
        !t.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node && (t = r.g);
        for (var n = !t.JS_SHA3_NO_COMMON_JS && e.exports, i = "0123456789abcdef".split(""), o = [0, 8, 16, 24], a = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], s = [224, 256, 384, 512], c = ["hex", "buffer", "arrayBuffer", "array"], l = function (e, t, r) { return function (n) { return new A(e, t, e).update(n)[r](); }; }, u = function (e, t, r) { return function (n, i) { return new A(e, t, i).update(n)[r](); }; }, f = function (e, t) { var r = l(e, t, "hex"); r.create = function () { return new A(e, t, e); }, r.update = function (e) { return r.create().update(e); }; for (var n = 0; n < c.length; ++n) {
            var i = c[n];
            r[i] = l(e, t, i);
        } return r; }, h = [{ name: "keccak", padding: [1, 256, 65536, 16777216], bits: s, createMethod: f }, { name: "sha3", padding: [6, 1536, 393216, 100663296], bits: s, createMethod: f }, { name: "shake", padding: [31, 7936, 2031616, 520093696], bits: [128, 256], createMethod: function (e, t) { var r = u(e, t, "hex"); r.create = function (r) { return new A(e, t, r); }, r.update = function (e, t) { return r.create(t).update(e); }; for (var n = 0; n < c.length; ++n) {
                    var i = c[n];
                    r[i] = u(e, t, i);
                } return r; } }], d = {}, p = [], g = 0; g < h.length; ++g)
            for (var m = h[g], b = m.bits, y = 0; y < b.length; ++y) {
                var v = m.name + "_" + b[y];
                p.push(v), d[v] = m.createMethod(b[y], m.padding);
            }
        function A(e, t, r) { this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3; for (var n = 0; n < 50; ++n)
            this.s[n] = 0; }
        A.prototype.update = function (e) { var t = "string" != typeof e; t && e.constructor === ArrayBuffer && (e = new Uint8Array(e)); for (var r, n, i = e.length, a = this.blocks, s = this.byteCount, c = this.blockCount, l = 0, u = this.s; l < i;) {
            if (this.reset)
                for (this.reset = !1, a[0] = this.block, r = 1; r < c + 1; ++r)
                    a[r] = 0;
            if (t)
                for (r = this.start; l < i && r < s; ++l)
                    a[r >> 2] |= e[l] << o[3 & r++];
            else
                for (r = this.start; l < i && r < s; ++l)
                    (n = e.charCodeAt(l)) < 128 ? a[r >> 2] |= n << o[3 & r++] : n < 2048 ? (a[r >> 2] |= (192 | n >> 6) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : n < 55296 || n >= 57344 ? (a[r >> 2] |= (224 | n >> 12) << o[3 & r++], a[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++l)), a[r >> 2] |= (240 | n >> 18) << o[3 & r++], a[r >> 2] |= (128 | n >> 12 & 63) << o[3 & r++], a[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]);
            if (this.lastByteIndex = r, r >= s) {
                for (this.start = r - s, this.block = a[c], r = 0; r < c; ++r)
                    u[r] ^= a[r];
                S(u), this.reset = !0;
            }
            else
                this.start = r;
        } return this; }, A.prototype.finalize = function () { var e = this.blocks, t = this.lastByteIndex, r = this.blockCount, n = this.s; if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
            for (e[0] = e[r], t = 1; t < r + 1; ++t)
                e[t] = 0; for (e[r - 1] |= 2147483648, t = 0; t < r; ++t)
            n[t] ^= e[t]; S(n); }, A.prototype.toString = A.prototype.hex = function () { this.finalize(); for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, c = ""; s < n;) {
            for (a = 0; a < t && s < n; ++a, ++s)
                e = r[a], c += i[e >> 4 & 15] + i[15 & e] + i[e >> 12 & 15] + i[e >> 8 & 15] + i[e >> 20 & 15] + i[e >> 16 & 15] + i[e >> 28 & 15] + i[e >> 24 & 15];
            s % t == 0 && (S(r), a = 0);
        } return o && (e = r[a], o > 0 && (c += i[e >> 4 & 15] + i[15 & e]), o > 1 && (c += i[e >> 12 & 15] + i[e >> 8 & 15]), o > 2 && (c += i[e >> 20 & 15] + i[e >> 16 & 15])), c; }, A.prototype.arrayBuffer = function () { this.finalize(); var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, a = 0, s = this.outputBits >> 3; e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(s); for (var c = new Uint32Array(e); a < n;) {
            for (o = 0; o < t && a < n; ++o, ++a)
                c[a] = r[o];
            a % t == 0 && S(r);
        } return i && (c[o] = r[o], e = e.slice(0, s)), e; }, A.prototype.buffer = A.prototype.arrayBuffer, A.prototype.digest = A.prototype.array = function () { this.finalize(); for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, c = []; s < i;) {
            for (a = 0; a < r && s < i; ++a, ++s)
                e = s << 2, t = n[a], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
            s % r == 0 && S(n);
        } return o && (e = s << 2, t = n[a], o > 0 && (c[e] = 255 & t), o > 1 && (c[e + 1] = t >> 8 & 255), o > 2 && (c[e + 2] = t >> 16 & 255)), c; };
        var S = function (e) { var t, r, n, i, o, s, c, l, u, f, h, d, p, g, m, b, y, v, A, S, w, E, T, k, B, M, C, L, P, F, N, x, R, O, I, D, J, _, U, H, X, V, G, z, j, K, Z, q, Q, W, Y, $, ee, te, re, ne, ie, oe, ae, se, ce, le, ue; for (n = 0; n < 48; n += 2)
            i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | c >>> 31), r = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | s >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (l << 1 | u >>> 31), r = o ^ (u << 1 | l >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = s ^ (f << 1 | h >>> 31), r = c ^ (h << 1 | f >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = l ^ (d << 1 | p >>> 31), r = u ^ (p << 1 | d >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = f ^ (i << 1 | o >>> 31), r = h ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, g = e[0], m = e[1], K = e[11] << 4 | e[10] >>> 28, Z = e[10] << 4 | e[11] >>> 28, L = e[20] << 3 | e[21] >>> 29, P = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, V = e[40] << 18 | e[41] >>> 14, G = e[41] << 18 | e[40] >>> 14, O = e[2] << 1 | e[3] >>> 31, I = e[3] << 1 | e[2] >>> 31, b = e[13] << 12 | e[12] >>> 20, y = e[12] << 12 | e[13] >>> 20, q = e[22] << 10 | e[23] >>> 22, Q = e[23] << 10 | e[22] >>> 22, F = e[33] << 13 | e[32] >>> 19, N = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, ue = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, D = e[14] << 6 | e[15] >>> 26, J = e[15] << 6 | e[14] >>> 26, v = e[25] << 11 | e[24] >>> 21, A = e[24] << 11 | e[25] >>> 21, W = e[34] << 15 | e[35] >>> 17, Y = e[35] << 15 | e[34] >>> 17, x = e[45] << 29 | e[44] >>> 3, R = e[44] << 29 | e[45] >>> 3, k = e[6] << 28 | e[7] >>> 4, B = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, _ = e[26] << 25 | e[27] >>> 7, U = e[27] << 25 | e[26] >>> 7, S = e[36] << 21 | e[37] >>> 11, w = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, j = e[9] << 27 | e[8] >>> 5, M = e[18] << 20 | e[19] >>> 12, C = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, H = e[38] << 8 | e[39] >>> 24, X = e[39] << 8 | e[38] >>> 24, E = e[48] << 14 | e[49] >>> 18, T = e[49] << 14 | e[48] >>> 18, e[0] = g ^ ~b & v, e[1] = m ^ ~y & A, e[10] = k ^ ~M & L, e[11] = B ^ ~C & P, e[20] = O ^ ~D & _, e[21] = I ^ ~J & U, e[30] = z ^ ~K & q, e[31] = j ^ ~Z & Q, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ie & ae, e[2] = b ^ ~v & S, e[3] = y ^ ~A & w, e[12] = M ^ ~L & F, e[13] = C ^ ~P & N, e[22] = D ^ ~_ & H, e[23] = J ^ ~U & X, e[32] = K ^ ~q & W, e[33] = Z ^ ~Q & Y, e[42] = ne ^ ~oe & se, e[43] = ie ^ ~ae & ce, e[4] = v ^ ~S & E, e[5] = A ^ ~w & T, e[14] = L ^ ~F & x, e[15] = P ^ ~N & R, e[24] = _ ^ ~H & V, e[25] = U ^ ~X & G, e[34] = q ^ ~W & $, e[35] = Q ^ ~Y & ee, e[44] = oe ^ ~se & le, e[45] = ae ^ ~ce & ue, e[6] = S ^ ~E & g, e[7] = w ^ ~T & m, e[16] = F ^ ~x & k, e[17] = N ^ ~R & B, e[26] = H ^ ~V & O, e[27] = X ^ ~G & I, e[36] = W ^ ~$ & z, e[37] = Y ^ ~ee & j, e[46] = se ^ ~le & te, e[47] = ce ^ ~ue & re, e[8] = E ^ ~g & b, e[9] = T ^ ~m & y, e[18] = x ^ ~k & M, e[19] = R ^ ~B & C, e[28] = V ^ ~O & D, e[29] = G ^ ~I & J, e[38] = $ ^ ~z & K, e[39] = ee ^ ~j & Z, e[48] = le ^ ~te & ne, e[49] = ue ^ ~re & ie, e[0] ^= a[n], e[1] ^= a[n + 1]; };
        if (n)
            e.exports = d;
        else
            for (g = 0; g < p.length; ++g)
                t[p[g]] = d[p[g]];
    }(); }, 711: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { ErrorCode: function () { return u; }, LogLevel: function () { return l; }, Logger: function () { return f; } });
        var n = !1, i = !1;
        var o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
        var a = o.default, s = null;
        var c = function () { try {
            var e_41 = [];
            if (["NFD", "NFC", "NFKD", "NFKC"].forEach((function (t) { try {
                if ("test" !== "test".normalize(t))
                    throw new Error("bad normalize");
            }
            catch (r) {
                e_41.push(t);
            } })), e_41.length)
                throw new Error("missing " + e_41.join(", "));
            if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
                throw new Error("broken implementation");
        }
        catch (e) {
            return e.message;
        } return null; }();
        var l, u;
        !function (e) { e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"; }(l || (l = {})), function (e) { e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"; }(u || (u = {}));
        var f = (function () {
            function f(e) {
                Object.defineProperty(this, "version", { enumerable: !0, value: e, writable: !1 });
            }
            f.prototype._log = function (e, t) { var r = e.toLowerCase(); null == o[r] && this.throwArgumentError("invalid log level name", "logLevel", e), a > o[r] || console.log.apply(console, t); };
            f.prototype.debug = function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                this._log(f.levels.DEBUG, e);
            };
            f.prototype.info = function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                this._log(f.levels.INFO, e);
            };
            f.prototype.warn = function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                this._log(f.levels.WARNING, e);
            };
            f.prototype.makeError = function (e, t, r) { if (i)
                return this.makeError("censored error", t, {}); t || (t = f.errors.UNKNOWN_ERROR), r || (r = {}); var n = []; Object.keys(r).forEach((function (e) { try {
                n.push(e + "=" + JSON.stringify(r[e]));
            }
            catch (t) {
                n.push(e + "=" + JSON.stringify(r[e].toString()));
            } })), n.push("code=" + t), n.push("version=" + this.version); var o = e; n.length && (e += " (" + n.join(", ") + ")"); var a = new Error(e); return a.reason = o, a.code = t, Object.keys(r).forEach((function (e) { a[e] = r[e]; })), a; };
            f.prototype.throwError = function (e, t, r) { throw this.makeError(e, t, r); };
            f.prototype.throwArgumentError = function (e, t, r) { return this.throwError(e, f.errors.INVALID_ARGUMENT, { argument: t, value: r }); };
            f.prototype.assert = function (e, t, r, n) { e || this.throwError(t, r, n); };
            f.prototype.assertArgument = function (e, t, r, n) { e || this.throwArgumentError(t, r, n); };
            f.prototype.checkNormalize = function (e) { null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: c }); };
            f.prototype.checkSafeUint53 = function (e, t) { "number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, f.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: e }), e % 1 && this.throwError(t, f.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: e })); };
            f.prototype.checkArgumentCount = function (e, t, r) { r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, f.errors.MISSING_ARGUMENT, { count: e, expectedCount: t }), e > t && this.throwError("too many arguments" + r, f.errors.UNEXPECTED_ARGUMENT, { count: e, expectedCount: t }); };
            f.prototype.checkNew = function (e, t) { e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, { name: t.name }); };
            f.prototype.checkAbstract = function (e, t) { e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, { name: t.name }); };
            f.globalLogger = function () { return s || (s = new f("logger/5.0.9")), s; };
            f.setCensorship = function (e, t) { if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), n) {
                if (!e)
                    return;
                this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
            } i = !!e, n = !!t; };
            f.setLogLevel = function (e) { var t = o[e.toLowerCase()]; null != t ? a = t : f.globalLogger().warn("invalid log level - " + e); };
            f.from = function (e) { return new f(e); };
            return f;
        }());
        f.errors = u, f.levels = l;
    }, 5306: function (e, t, r) {
        "use strict";
        r.d(t, { n: function () { return o; } });
        var n = r(3286), i = r(3951);
        function o(e, t, r, o, a) { var s; e = (0, n.arrayify)(e), t = (0, n.arrayify)(t); var c = 1; var l = new Uint8Array(o), u = new Uint8Array(t.length + 4); var f, h; u.set(t); for (var d = 1; d <= c; d++) {
            u[t.length] = d >> 24 & 255, u[t.length + 1] = d >> 16 & 255, u[t.length + 2] = d >> 8 & 255, u[t.length + 3] = 255 & d;
            var p = (0, n.arrayify)((0, i.Gy)(a, e, u));
            s || (s = p.length, h = new Uint8Array(s), c = Math.ceil(o / s), f = o - (c - 1) * s), h.set(p);
            for (var t_35 = 1; t_35 < r; t_35++) {
                p = (0, n.arrayify)((0, i.Gy)(a, e, p));
                for (var e_42 = 0; e_42 < s; e_42++)
                    h[e_42] ^= p[e_42];
            }
            var g = (d - 1) * s, m = d === c ? f : s;
            l.set((0, n.arrayify)(h).slice(0, m), g);
        } return (0, n.hexlify)(l); }
    }, 3587: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { Description: function () { return p; }, checkProperties: function () { return c; }, deepCopy: function () { return d; }, defineReadOnly: function () { return o; }, getStatic: function () { return a; }, resolveProperties: function () { return s; }, shallowCopy: function () { return l; } });
        var n = r(711);
        var i = new n.Logger("properties/5.0.8");
        function o(e, t, r) { Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 }); }
        function a(e, t) { for (var r_33 = 0; r_33 < 32; r_33++) {
            if (e[t])
                return e[t];
            if (!e.prototype || "object" != typeof e.prototype)
                break;
            e = Object.getPrototypeOf(e.prototype).constructor;
        } return null; }
        function s(e) { return t = this, r = void 0, i = function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = Object.keys(e).map((function (t) { var r = e[t]; return Promise.resolve(r).then((function (e) { return ({ key: t, value: e }); })); }));
                    return [4, Promise.all(t)];
                case 1: return [2, (_a.sent()).reduce((function (e, t) { return (e[t.key] = t.value, e); }), {})];
            }
        }); }, new ((n = void 0) || (n = Promise))((function (e, o) { function a(e) { try {
            c(i.next(e));
        }
        catch (e) {
            o(e);
        } } function s(e) { try {
            c(i.throw(e));
        }
        catch (e) {
            o(e);
        } } function c(t) { var r; t.done ? e(t.value) : (r = t.value, r instanceof n ? r : new n((function (e) { e(r); }))).then(a, s); } c((i = i.apply(t, r || [])).next()); })); var t, r, n, i; }
        function c(e, t) { e && "object" == typeof e || i.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach((function (r) { t[r] || i.throwArgumentError("invalid object key - " + r, "transaction:" + r, e); })); }
        function l(e) { var t = {}; for (var r_34 in e)
            t[r_34] = e[r_34]; return t; }
        var u = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
        function f(e) { if (null == e || u[typeof e])
            return !0; if (Array.isArray(e) || "object" == typeof e) {
            if (!Object.isFrozen(e))
                return !1;
            var t_36 = Object.keys(e);
            for (var r_35 = 0; r_35 < t_36.length; r_35++)
                if (!f(e[t_36[r_35]]))
                    return !1;
            return !0;
        } return i.throwArgumentError("Cannot deepCopy " + typeof e, "object", e); }
        function h(e) { if (f(e))
            return e; if (Array.isArray(e))
            return Object.freeze(e.map((function (e) { return d(e); }))); if ("object" == typeof e) {
            var t_37 = {};
            for (var r_36 in e) {
                var n_21 = e[r_36];
                void 0 !== n_21 && o(t_37, r_36, d(n_21));
            }
            return t_37;
        } return i.throwArgumentError("Cannot deepCopy " + typeof e, "object", e); }
        function d(e) { return h(e); }
        var p = (function () {
            function p(e) {
                for (var t_38 in e)
                    this[t_38] = d(e[t_38]);
            }
            return p;
        }());
    }, 7986: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { randomBytes: function () { return n.O; }, shuffled: function () { return i; } });
        var n = r(4478);
        function i(e) { for (var t_39 = (e = e.slice()).length - 1; t_39 > 0; t_39--) {
            var r_37 = Math.floor(Math.random() * (t_39 + 1)), n_22 = e[t_39];
            e[t_39] = e[r_37], e[r_37] = n_22;
        } return e; }
    }, 4478: function (e, t, r) {
        "use strict";
        r.d(t, { O: function () { return c; } });
        var n = r(3286), i = r(711);
        var o = new i.Logger("random/5.0.8");
        var a = null;
        try {
            if (a = window, null == a)
                throw new Error("try next");
        }
        catch (e) {
            try {
                if (a = r.g, null == a)
                    throw new Error("try next");
            }
            catch (e) {
                a = {};
            }
        }
        var s = a.crypto || a.msCrypto;
        function c(e) { (e <= 0 || e > 1024 || e % 1) && o.throwArgumentError("invalid length", "length", e); var t = new Uint8Array(e); return s.getRandomValues(t), (0, n.arrayify)(t); }
        s && s.getRandomValues || (o.warn("WARNING: Missing strong random number source"), s = { getRandomValues: function (e) { return o.throwError("no secure random source avaialble", i.Logger.errors.UNSUPPORTED_OPERATION, { operation: "crypto.getRandomValues" }); } });
    }, 1843: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { decode: function () { return h; }, encode: function () { return l; } });
        var n = r(3286), i = r(711);
        var o = new i.Logger("rlp/5.0.8");
        function a(e) { var t = []; for (; e;)
            t.unshift(255 & e), e >>= 8; return t; }
        function s(e, t, r) { var n = 0; for (var i_16 = 0; i_16 < r; i_16++)
            n = 256 * n + e[t + i_16]; return n; }
        function c(e) { if (Array.isArray(e)) {
            var t_40 = [];
            if (e.forEach((function (e) { t_40 = t_40.concat(c(e)); })), t_40.length <= 55)
                return t_40.unshift(192 + t_40.length), t_40;
            var r_38 = a(t_40.length);
            return r_38.unshift(247 + r_38.length), r_38.concat(t_40);
        } (0, n.isBytesLike)(e) || o.throwArgumentError("RLP object must be BytesLike", "object", e); var t = Array.prototype.slice.call((0, n.arrayify)(e)); if (1 === t.length && t[0] <= 127)
            return t; if (t.length <= 55)
            return t.unshift(128 + t.length), t; var r = a(t.length); return r.unshift(183 + r.length), r.concat(t); }
        function l(e) { return (0, n.hexlify)(c(e)); }
        function u(e, t, r, n) { var a = []; for (; r < t + 1 + n;) {
            var s_8 = f(e, r);
            a.push(s_8.result), (r += s_8.consumed) > t + 1 + n && o.throwError("child data too short", i.Logger.errors.BUFFER_OVERRUN, {});
        } return { consumed: 1 + n, result: a }; }
        function f(e, t) { if (0 === e.length && o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
            var r_39 = e[t] - 247;
            t + 1 + r_39 > e.length && o.throwError("data short segment too short", i.Logger.errors.BUFFER_OVERRUN, {});
            var n_23 = s(e, t + 1, r_39);
            return t + 1 + r_39 + n_23 > e.length && o.throwError("data long segment too short", i.Logger.errors.BUFFER_OVERRUN, {}), u(e, t, t + 1 + r_39, r_39 + n_23);
        } if (e[t] >= 192) {
            var r_40 = e[t] - 192;
            return t + 1 + r_40 > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {}), u(e, t, t + 1, r_40);
        } if (e[t] >= 184) {
            var r_41 = e[t] - 183;
            t + 1 + r_41 > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
            var a_6 = s(e, t + 1, r_41);
            return t + 1 + r_41 + a_6 > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {}), { consumed: 1 + r_41 + a_6, result: (0, n.hexlify)(e.slice(t + 1 + r_41, t + 1 + r_41 + a_6)) };
        } if (e[t] >= 128) {
            var r_42 = e[t] - 128;
            return t + 1 + r_42 > e.length && o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}), { consumed: 1 + r_42, result: (0, n.hexlify)(e.slice(t + 1, t + 1 + r_42)) };
        } return { consumed: 1, result: (0, n.hexlify)(e[t]) }; }
        function h(e) { var t = (0, n.arrayify)(e), r = f(t, 0); return r.consumed !== t.length && o.throwArgumentError("invalid rlp data", "data", e), r.result; }
    }, 1278: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { computeHmac: function () { return n.Gy; }, ripemd160: function () { return n.bP; }, sha256: function () { return n.JQ; }, sha512: function () { return n.o; }, SupportedAlgorithm: function () { return i.p; } });
        var n = r(3951), i = r(1261);
    }, 3951: function (e, t, r) {
        "use strict";
        r.d(t, { Gy: function () { return h; }, bP: function () { return l; }, JQ: function () { return u; }, o: function () { return f; } });
        var n = r(6831), i = r.n(n), o = r(3286), a = r(1261), s = r(711);
        var c = new s.Logger("sha2/5.0.8");
        function l(e) { return "0x" + i().ripemd160().update((0, o.arrayify)(e)).digest("hex"); }
        function u(e) { return "0x" + i().sha256().update((0, o.arrayify)(e)).digest("hex"); }
        function f(e) { return "0x" + i().sha512().update((0, o.arrayify)(e)).digest("hex"); }
        function h(e, t, r) { return a.p[e] || c.throwError("unsupported algorithm " + e, s.Logger.errors.UNSUPPORTED_OPERATION, { operation: "hmac", algorithm: e }), "0x" + i().hmac(i()[e], (0, o.arrayify)(t)).update((0, o.arrayify)(r)).digest("hex"); }
    }, 1261: function (e, t, r) {
        "use strict";
        var n;
        r.d(t, { p: function () { return n; } }), function (e) { e.sha256 = "sha256", e.sha512 = "sha512"; }(n || (n = {}));
    }, 6831: function (e, t, r) { var n = t; n.utils = r(7946), n.common = r(8585), n.sha = r(5915), n.ripemd = r(562), n.hmac = r(1531), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160; }, 8585: function (e, t, r) {
        "use strict";
        var n = r(7946), i = r(9746);
        function o() { this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32; }
        t.BlockHash = o, o.prototype.update = function (e, t) { if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
            var r = (e = this.pending).length % this._delta8;
            this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
            for (var i = 0; i < e.length; i += this._delta32)
                this._update(e, i, i + this._delta32);
        } return this; }, o.prototype.digest = function (e) { return this.update(this._pad()), i(null === this.pending), this._digest(e); }, o.prototype._pad = function () { var e = this.pendingTotal, t = this._delta8, r = t - (e + this.padLength) % t, n = new Array(r + this.padLength); n[0] = 128; for (var i = 1; i < r; i++)
            n[i] = 0; if (e <<= 3, "big" === this.endian) {
            for (var o = 8; o < this.padLength; o++)
                n[i++] = 0;
            n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e;
        }
        else
            for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++)
                n[i++] = 0; return n; };
    }, 1531: function (e, t, r) {
        "use strict";
        var n = r(7946), i = r(9746);
        function o(e, t, r) { if (!(this instanceof o))
            return new o(e, t, r); this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r)); }
        e.exports = o, o.prototype._init = function (e) { e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize); for (var t = e.length; t < this.blockSize; t++)
            e.push(0); for (t = 0; t < e.length; t++)
            e[t] ^= 54; for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++)
            e[t] ^= 106; this.outer = (new this.Hash).update(e); }, o.prototype.update = function (e, t) { return this.inner.update(e, t), this; }, o.prototype.digest = function (e) { return this.outer.update(this.inner.digest()), this.outer.digest(e); };
    }, 562: function (e, t, r) {
        "use strict";
        var n = r(7946), i = r(8585), o = n.rotl32, a = n.sum32, s = n.sum32_3, c = n.sum32_4, l = i.BlockHash;
        function u() { if (!(this instanceof u))
            return new u; l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"; }
        function f(e, t, r, n) { return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n); }
        function h(e) { return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838; }
        function d(e) { return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0; }
        n.inherits(u, l), t.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function (e, t) { for (var r = this.h[0], n = this.h[1], i = this.h[2], l = this.h[3], u = this.h[4], y = r, v = n, A = i, S = l, w = u, E = 0; E < 80; E++) {
            var T = a(o(c(r, f(E, n, i, l), e[p[E] + t], h(E)), m[E]), u);
            r = u, u = l, l = o(i, 10), i = n, n = T, T = a(o(c(y, f(79 - E, v, A, S), e[g[E] + t], d(E)), b[E]), w), y = w, w = S, S = o(A, 10), A = v, v = T;
        } T = s(this.h[1], i, S), this.h[1] = s(this.h[2], l, w), this.h[2] = s(this.h[3], u, y), this.h[3] = s(this.h[4], r, v), this.h[4] = s(this.h[0], n, A), this.h[0] = T; }, u.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little"); };
        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], g = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], b = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
    }, 5915: function (e, t, r) {
        "use strict";
        t.sha1 = r(9214), t.sha224 = r(5673), t.sha256 = r(3619), t.sha384 = r(8274), t.sha512 = r(7429);
    }, 9214: function (e, t, r) {
        "use strict";
        var n = r(7946), i = r(8585), o = r(5986), a = n.rotl32, s = n.sum32, c = n.sum32_5, l = o.ft_1, u = i.BlockHash, f = [1518500249, 1859775393, 2400959708, 3395469782];
        function h() { if (!(this instanceof h))
            return new h; u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80); }
        n.inherits(h, u), e.exports = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 80, h.padLength = 64, h.prototype._update = function (e, t) { for (var r = this.W, n = 0; n < 16; n++)
            r[n] = e[t + n]; for (; n < r.length; n++)
            r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1); var i = this.h[0], o = this.h[1], u = this.h[2], h = this.h[3], d = this.h[4]; for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20), g = c(a(i, 5), l(p, o, u, h), d, r[n], f[p]);
            d = h, h = u, u = a(o, 30), o = i, i = g;
        } this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], u), this.h[3] = s(this.h[3], h), this.h[4] = s(this.h[4], d); }, h.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
    }, 5673: function (e, t, r) {
        "use strict";
        var n = r(7946), i = r(3619);
        function o() { if (!(this instanceof o))
            return new o; i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]; }
        n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big"); };
    }, 3619: function (e, t, r) {
        "use strict";
        var n = r(7946), i = r(8585), o = r(5986), a = r(9746), s = n.sum32, c = n.sum32_4, l = n.sum32_5, u = o.ch32, f = o.maj32, h = o.s0_256, d = o.s1_256, p = o.g0_256, g = o.g1_256, m = i.BlockHash, b = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        function y() { if (!(this instanceof y))
            return new y; m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = b, this.W = new Array(64); }
        n.inherits(y, m), e.exports = y, y.blockSize = 512, y.outSize = 256, y.hmacStrength = 192, y.padLength = 64, y.prototype._update = function (e, t) { for (var r = this.W, n = 0; n < 16; n++)
            r[n] = e[t + n]; for (; n < r.length; n++)
            r[n] = c(g(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]); var i = this.h[0], o = this.h[1], m = this.h[2], b = this.h[3], y = this.h[4], v = this.h[5], A = this.h[6], S = this.h[7]; for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
            var w = l(S, d(y), u(y, v, A), this.k[n], r[n]), E = s(h(i), f(i, o, m));
            S = A, A = v, v = y, y = s(b, w), b = m, m = o, o = i, i = s(w, E);
        } this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], m), this.h[3] = s(this.h[3], b), this.h[4] = s(this.h[4], y), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], A), this.h[7] = s(this.h[7], S); }, y.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
    }, 8274: function (e, t, r) {
        "use strict";
        var n = r(7946), i = r(7429);
        function o() { if (!(this instanceof o))
            return new o; i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]; }
        n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big"); };
    }, 7429: function (e, t, r) {
        "use strict";
        var n = r(7946), i = r(8585), o = r(9746), a = n.rotr64_hi, s = n.rotr64_lo, c = n.shr64_hi, l = n.shr64_lo, u = n.sum64, f = n.sum64_hi, h = n.sum64_lo, d = n.sum64_4_hi, p = n.sum64_4_lo, g = n.sum64_5_hi, m = n.sum64_5_lo, b = i.BlockHash, y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function v() { if (!(this instanceof v))
            return new v; b.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = y, this.W = new Array(160); }
        function A(e, t, r, n, i) { var o = e & r ^ ~e & i; return o < 0 && (o += 4294967296), o; }
        function S(e, t, r, n, i, o) { var a = t & n ^ ~t & o; return a < 0 && (a += 4294967296), a; }
        function w(e, t, r, n, i) { var o = e & r ^ e & i ^ r & i; return o < 0 && (o += 4294967296), o; }
        function E(e, t, r, n, i, o) { var a = t & n ^ t & o ^ n & o; return a < 0 && (a += 4294967296), a; }
        function T(e, t) { var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7); return r < 0 && (r += 4294967296), r; }
        function k(e, t) { var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7); return r < 0 && (r += 4294967296), r; }
        function B(e, t) { var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9); return r < 0 && (r += 4294967296), r; }
        function M(e, t) { var r = a(e, t, 1) ^ a(e, t, 8) ^ c(e, t, 7); return r < 0 && (r += 4294967296), r; }
        function C(e, t) { var r = s(e, t, 1) ^ s(e, t, 8) ^ l(e, t, 7); return r < 0 && (r += 4294967296), r; }
        function L(e, t) { var r = s(e, t, 19) ^ s(t, e, 29) ^ l(e, t, 6); return r < 0 && (r += 4294967296), r; }
        n.inherits(v, b), e.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function (e, t) { for (var r = this.W, n = 0; n < 32; n++)
            r[n] = e[t + n]; for (; n < r.length; n += 2) {
            var i = (m = r[n - 4], b = r[n - 3], y = void 0, (y = a(m, b, 19) ^ a(b, m, 29) ^ c(m, b, 6)) < 0 && (y += 4294967296), y), o = L(r[n - 4], r[n - 3]), s = r[n - 14], l = r[n - 13], u = M(r[n - 30], r[n - 29]), f = C(r[n - 30], r[n - 29]), h = r[n - 32], g = r[n - 31];
            r[n] = d(i, o, s, l, u, f, h, g), r[n + 1] = p(i, o, s, l, u, f, h, g);
        } var m, b, y; }, v.prototype._update = function (e, t) { this._prepareBlock(e, t); var r, n, i, s = this.W, c = this.h[0], l = this.h[1], d = this.h[2], p = this.h[3], b = this.h[4], y = this.h[5], v = this.h[6], M = this.h[7], C = this.h[8], L = this.h[9], P = this.h[10], F = this.h[11], N = this.h[12], x = this.h[13], R = this.h[14], O = this.h[15]; o(this.k.length === s.length); for (var I = 0; I < s.length; I += 2) {
            var D = R, J = O, _ = (i = void 0, (i = a(r = C, n = L, 14) ^ a(r, n, 18) ^ a(n, r, 9)) < 0 && (i += 4294967296), i), U = B(C, L), H = A(C, 0, P, 0, N), X = S(0, L, 0, F, 0, x), V = this.k[I], G = this.k[I + 1], z = s[I], j = s[I + 1], K = g(D, J, _, U, H, X, V, G, z, j), Z = m(D, J, _, U, H, X, V, G, z, j);
            D = T(c, l), J = k(c, l), _ = w(c, 0, d, 0, b), U = E(0, l, 0, p, 0, y);
            var q = f(D, J, _, U), Q = h(D, J, _, U);
            R = N, O = x, N = P, x = F, P = C, F = L, C = f(v, M, K, Z), L = h(M, M, K, Z), v = b, M = y, b = d, y = p, d = c, p = l, c = f(K, Z, q, Q), l = h(K, Z, q, Q);
        } u(this.h, 0, c, l), u(this.h, 2, d, p), u(this.h, 4, b, y), u(this.h, 6, v, M), u(this.h, 8, C, L), u(this.h, 10, P, F), u(this.h, 12, N, x), u(this.h, 14, R, O); }, v.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
    }, 5986: function (e, t, r) {
        "use strict";
        var n = r(7946).rotr32;
        function i(e, t, r) { return e & t ^ ~e & r; }
        function o(e, t, r) { return e & t ^ e & r ^ t & r; }
        function a(e, t, r) { return e ^ t ^ r; }
        t.ft_1 = function (e, t, r, n) { return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? a(t, r, n) : 2 === e ? o(t, r, n) : void 0; }, t.ch32 = i, t.maj32 = o, t.p32 = a, t.s0_256 = function (e) { return n(e, 2) ^ n(e, 13) ^ n(e, 22); }, t.s1_256 = function (e) { return n(e, 6) ^ n(e, 11) ^ n(e, 25); }, t.g0_256 = function (e) { return n(e, 7) ^ n(e, 18) ^ e >>> 3; }, t.g1_256 = function (e) { return n(e, 17) ^ n(e, 19) ^ e >>> 10; };
    }, 7946: function (e, t, r) {
        "use strict";
        var n = r(9746), i = r(5717);
        function o(e) { return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0; }
        function a(e) { return 1 === e.length ? "0" + e : e; }
        function s(e) { return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e; }
        t.inherits = i, t.toArray = function (e, t) { if (Array.isArray(e))
            return e.slice(); if (!e)
            return []; var r = []; if ("string" == typeof e)
            if (t) {
                if ("hex" === t)
                    for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2)
                        r.push(parseInt(e[n] + e[n + 1], 16));
            }
            else
                for (var n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n), o = i >> 8, a = 255 & i;
                    o ? r.push(o, a) : r.push(a);
                }
        else
            for (n = 0; n < e.length; n++)
                r[n] = 0 | e[n]; return r; }, t.toHex = function (e) { for (var t = "", r = 0; r < e.length; r++)
            t += a(e[r].toString(16)); return t; }, t.htonl = o, t.toHex32 = function (e, t) { for (var r = "", n = 0; n < e.length; n++) {
            var i = e[n];
            "little" === t && (i = o(i)), r += s(i.toString(16));
        } return r; }, t.zero2 = a, t.zero8 = s, t.join32 = function (e, t, r, i) { var o = r - t; n(o % 4 == 0); for (var a = new Array(o / 4), s = 0, c = t; s < a.length; s++, c += 4) {
            var l;
            l = "big" === i ? e[c] << 24 | e[c + 1] << 16 | e[c + 2] << 8 | e[c + 3] : e[c + 3] << 24 | e[c + 2] << 16 | e[c + 1] << 8 | e[c], a[s] = l >>> 0;
        } return a; }, t.split32 = function (e, t) { for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
            var o = e[n];
            "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o);
        } return r; }, t.rotr32 = function (e, t) { return e >>> t | e << 32 - t; }, t.rotl32 = function (e, t) { return e << t | e >>> 32 - t; }, t.sum32 = function (e, t) { return e + t >>> 0; }, t.sum32_3 = function (e, t, r) { return e + t + r >>> 0; }, t.sum32_4 = function (e, t, r, n) { return e + t + r + n >>> 0; }, t.sum32_5 = function (e, t, r, n, i) { return e + t + r + n + i >>> 0; }, t.sum64 = function (e, t, r, n) { var i = e[t], o = n + e[t + 1] >>> 0, a = (o < n ? 1 : 0) + r + i; e[t] = a >>> 0, e[t + 1] = o; }, t.sum64_hi = function (e, t, r, n) { return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0; }, t.sum64_lo = function (e, t, r, n) { return t + n >>> 0; }, t.sum64_4_hi = function (e, t, r, n, i, o, a, s) { var c = 0, l = t; return c += (l = l + n >>> 0) < t ? 1 : 0, c += (l = l + o >>> 0) < o ? 1 : 0, e + r + i + a + (c += (l = l + s >>> 0) < s ? 1 : 0) >>> 0; }, t.sum64_4_lo = function (e, t, r, n, i, o, a, s) { return t + n + o + s >>> 0; }, t.sum64_5_hi = function (e, t, r, n, i, o, a, s, c, l) { var u = 0, f = t; return u += (f = f + n >>> 0) < t ? 1 : 0, u += (f = f + o >>> 0) < o ? 1 : 0, u += (f = f + s >>> 0) < s ? 1 : 0, e + r + i + a + c + (u += (f = f + l >>> 0) < l ? 1 : 0) >>> 0; }, t.sum64_5_lo = function (e, t, r, n, i, o, a, s, c, l) { return t + n + o + s + l >>> 0; }, t.rotr64_hi = function (e, t, r) { return (t << 32 - r | e >>> r) >>> 0; }, t.rotr64_lo = function (e, t, r) { return (e << 32 - r | t >>> r) >>> 0; }, t.shr64_hi = function (e, t, r) { return e >>> r; }, t.shr64_lo = function (e, t, r) { return (e << 32 - r | t >>> r) >>> 0; };
    }, 2768: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { SigningKey: function () { return Z; }, computePublicKey: function () { return Q; }, recoverPublicKey: function () { return q; } });
        var n = r(3550), i = r.n(n), o = r(3715), a = r.n(o);
        function s(e, t, r) { return e(r = { path: t, exports: {}, require: function (e, t) { return function () { throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs"); }(null == t && r.path); } }, r.exports), r.exports; }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
        var c = l;
        function l(e, t) { if (!e)
            throw new Error(t || "Assertion failed"); }
        l.equal = function (e, t, r) { if (e != t)
            throw new Error(r || "Assertion failed: " + e + " != " + t); };
        var u = s((function (e, t) { var r = t; function n(e) { return 1 === e.length ? "0" + e : e; } function i(e) { for (var t = "", r = 0; r < e.length; r++)
            t += n(e[r].toString(16)); return t; } r.toArray = function (e, t) { if (Array.isArray(e))
            return e.slice(); if (!e)
            return []; var r = []; if ("string" != typeof e) {
            for (var n = 0; n < e.length; n++)
                r[n] = 0 | e[n];
            return r;
        } if ("hex" === t)
            for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2)
                r.push(parseInt(e[n] + e[n + 1], 16));
        else
            for (n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n), o = i >> 8, a = 255 & i;
                o ? r.push(o, a) : r.push(a);
            } return r; }, r.zero2 = n, r.toHex = i, r.encode = function (e, t) { return "hex" === t ? i(e) : e; }; })), f = s((function (e, t) { var r = t; r.assert = c, r.toArray = u.toArray, r.zero2 = u.zero2, r.toHex = u.toHex, r.encode = u.encode, r.getNAF = function (e, t, r) { var n = new Array(Math.max(e.bitLength(), r) + 1); n.fill(0); for (var i = 1 << t + 1, o = e.clone(), a = 0; a < n.length; a++) {
            var s, c = o.andln(i - 1);
            o.isOdd() ? (s = c > (i >> 1) - 1 ? (i >> 1) - c : c, o.isubn(s)) : s = 0, n[a] = s, o.iushrn(1);
        } return n; }, r.getJSF = function (e, t) { var r = [[], []]; e = e.clone(), t = t.clone(); for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0;) {
            var a, s, c = e.andln(3) + i & 3, l = t.andln(3) + o & 3;
            3 === c && (c = -1), 3 === l && (l = -1), a = 0 == (1 & c) ? 0 : 3 != (n = e.andln(7) + i & 7) && 5 !== n || 2 !== l ? c : -c, r[0].push(a), s = 0 == (1 & l) ? 0 : 3 != (n = t.andln(7) + o & 7) && 5 !== n || 2 !== c ? l : -l, r[1].push(s), 2 * i === a + 1 && (i = 1 - i), 2 * o === s + 1 && (o = 1 - o), e.iushrn(1), t.iushrn(1);
        } return r; }, r.cachedProperty = function (e, t, r) { var n = "_" + t; e.prototype[t] = function () { return void 0 !== this[n] ? this[n] : this[n] = r.call(this); }; }, r.parseBytes = function (e) { return "string" == typeof e ? r.toArray(e, "hex") : e; }, r.intFromLE = function (e) { return new (i())(e, "hex", "le"); }; })), h = f.getNAF, d = f.getJSF, p = f.assert;
        function g(e, t) { this.type = e, this.p = new (i())(t.p, 16), this.red = t.prime ? i().red(t.prime) : i().mont(this.p), this.zero = new (i())(0).toRed(this.red), this.one = new (i())(1).toRed(this.red), this.two = new (i())(2).toRed(this.red), this.n = t.n && new (i())(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0; var r = this.n && this.p.div(this.n); !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red)); }
        var m = g;
        function b(e, t) { this.curve = e, this.type = t, this.precomputed = null; }
        g.prototype.point = function () { throw new Error("Not implemented"); }, g.prototype.validate = function () { throw new Error("Not implemented"); }, g.prototype._fixedNafMul = function (e, t) { p(e.precomputed); var r = e._getDoubles(), n = h(t, 1, this._bitLength), i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1); i /= 3; var o, a, s = []; for (o = 0; o < n.length; o += r.step) {
            a = 0;
            for (var c = o + r.step - 1; c >= o; c--)
                a = (a << 1) + n[c];
            s.push(a);
        } for (var l = this.jpoint(null, null, null), u = this.jpoint(null, null, null), f = i; f > 0; f--) {
            for (o = 0; o < s.length; o++)
                (a = s[o]) === f ? u = u.mixedAdd(r.points[o]) : a === -f && (u = u.mixedAdd(r.points[o].neg()));
            l = l.add(u);
        } return l.toP(); }, g.prototype._wnafMul = function (e, t) { var r = 4, n = e._getNAFPoints(r); r = n.wnd; for (var i = n.points, o = h(t, r, this._bitLength), a = this.jpoint(null, null, null), s = o.length - 1; s >= 0; s--) {
            for (var c = 0; s >= 0 && 0 === o[s]; s--)
                c++;
            if (s >= 0 && c++, a = a.dblp(c), s < 0)
                break;
            var l = o[s];
            p(0 !== l), a = "affine" === e.type ? l > 0 ? a.mixedAdd(i[l - 1 >> 1]) : a.mixedAdd(i[-l - 1 >> 1].neg()) : l > 0 ? a.add(i[l - 1 >> 1]) : a.add(i[-l - 1 >> 1].neg());
        } return "affine" === e.type ? a.toP() : a; }, g.prototype._wnafMulAdd = function (e, t, r, n, i) { var o, a, s, c = this._wnafT1, l = this._wnafT2, u = this._wnafT3, f = 0; for (o = 0; o < n; o++) {
            var p = (s = t[o])._getNAFPoints(e);
            c[o] = p.wnd, l[o] = p.points;
        } for (o = n - 1; o >= 1; o -= 2) {
            var g = o - 1, m = o;
            if (1 === c[g] && 1 === c[m]) {
                var b = [t[g], null, null, t[m]];
                0 === t[g].y.cmp(t[m].y) ? (b[1] = t[g].add(t[m]), b[2] = t[g].toJ().mixedAdd(t[m].neg())) : 0 === t[g].y.cmp(t[m].y.redNeg()) ? (b[1] = t[g].toJ().mixedAdd(t[m]), b[2] = t[g].add(t[m].neg())) : (b[1] = t[g].toJ().mixedAdd(t[m]), b[2] = t[g].toJ().mixedAdd(t[m].neg()));
                var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3], v = d(r[g], r[m]);
                for (f = Math.max(v[0].length, f), u[g] = new Array(f), u[m] = new Array(f), a = 0; a < f; a++) {
                    var A = 0 | v[0][a], S = 0 | v[1][a];
                    u[g][a] = y[3 * (A + 1) + (S + 1)], u[m][a] = 0, l[g] = b;
                }
            }
            else
                u[g] = h(r[g], c[g], this._bitLength), u[m] = h(r[m], c[m], this._bitLength), f = Math.max(u[g].length, f), f = Math.max(u[m].length, f);
        } var w = this.jpoint(null, null, null), E = this._wnafT4; for (o = f; o >= 0; o--) {
            for (var T = 0; o >= 0;) {
                var k = !0;
                for (a = 0; a < n; a++)
                    E[a] = 0 | u[a][o], 0 !== E[a] && (k = !1);
                if (!k)
                    break;
                T++, o--;
            }
            if (o >= 0 && T++, w = w.dblp(T), o < 0)
                break;
            for (a = 0; a < n; a++) {
                var B = E[a];
                0 !== B && (B > 0 ? s = l[a][B - 1 >> 1] : B < 0 && (s = l[a][-B - 1 >> 1].neg()), w = "affine" === s.type ? w.mixedAdd(s) : w.add(s));
            }
        } for (o = 0; o < n; o++)
            l[o] = null; return i ? w : w.toP(); }, g.BasePoint = b, b.prototype.eq = function () { throw new Error("Not implemented"); }, b.prototype.validate = function () { return this.curve.validate(this); }, g.prototype.decodePoint = function (e, t) { e = f.toArray(e, t); var r = this.p.byteLength(); if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return 6 === e[0] ? p(e[e.length - 1] % 2 == 0) : 7 === e[0] && p(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r)); if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]); throw new Error("Unknown point format"); }, b.prototype.encodeCompressed = function (e) { return this.encode(e, !0); }, b.prototype._encode = function (e) { var t = this.curve.p.byteLength(), r = this.getX().toArray("be", t); return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t)); }, b.prototype.encode = function (e, t) { return f.encode(this._encode(t), e); }, b.prototype.precompute = function (e) { if (this.precomputed)
            return this; var t = { doubles: null, naf: null, beta: null }; return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this; }, b.prototype._hasDoubles = function (e) { if (!this.precomputed)
            return !1; var t = this.precomputed.doubles; return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step); }, b.prototype._getDoubles = function (e, t) { if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles; for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++)
                n = n.dbl();
            r.push(n);
        } return { step: e, points: r }; }, b.prototype._getNAFPoints = function (e) { if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf; for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
            t[i] = t[i - 1].add(n); return { wnd: e, points: t }; }, b.prototype._getBeta = function () { return null; }, b.prototype.dblp = function (e) { for (var t = this, r = 0; r < e; r++)
            t = t.dbl(); return t; };
        var y = s((function (e) { "function" == typeof Object.create ? e.exports = function (e, t) { t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })); } : e.exports = function (e, t) { if (t) {
            e.super_ = t;
            var r = function () { };
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e;
        } }; })), v = f.assert;
        function A(e) { m.call(this, "short", e), this.a = new (i())(e.a, 16).toRed(this.red), this.b = new (i())(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4); }
        y(A, m);
        var S = A;
        function w(e, t, r, n) { m.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new (i())(t, 16), this.y = new (i())(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1); }
        function E(e, t, r, n) { m.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new (i())(0)) : (this.x = new (i())(t, 16), this.y = new (i())(r, 16), this.z = new (i())(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one; }
        A.prototype._getEndomorphism = function (e) { if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta)
                t = new (i())(e.beta, 16).toRed(this.red);
            else {
                var n = this._getEndoRoots(this.p);
                t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
            }
            if (e.lambda)
                r = new (i())(e.lambda, 16);
            else {
                var o = this._getEndoRoots(this.n);
                0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], v(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return { beta: t, lambda: r, basis: e.basis ? e.basis.map((function (e) { return { a: new (i())(e.a, 16), b: new (i())(e.b, 16) }; })) : this._getEndoBasis(r) };
        } }, A.prototype._getEndoRoots = function (e) { var t = e === this.p ? this.red : i().mont(e), r = new (i())(2).toRed(t).redInvm(), n = r.redNeg(), o = new (i())(3).toRed(t).redNeg().redSqrt().redMul(r); return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]; }, A.prototype._getEndoBasis = function (e) { for (var t, r, n, o, a, s, c, l, u, f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, d = this.n.clone(), p = new (i())(1), g = new (i())(0), m = new (i())(0), b = new (i())(1), y = 0; 0 !== h.cmpn(0);) {
            var v = d.div(h);
            l = d.sub(v.mul(h)), u = m.sub(v.mul(p));
            var A = b.sub(v.mul(g));
            if (!n && l.cmp(f) < 0)
                t = c.neg(), r = p, n = l.neg(), o = u;
            else if (n && 2 == ++y)
                break;
            c = l, d = h, h = l, m = p, p = u, b = g, g = A;
        } a = l.neg(), s = u; var S = n.sqr().add(o.sqr()); return a.sqr().add(s.sqr()).cmp(S) >= 0 && (a = t, s = r), n.negative && (n = n.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{ a: n, b: o }, { a: a, b: s }]; }, A.prototype._endoSplit = function (e) { var t = this.endo.basis, r = t[0], n = t[1], i = n.b.mul(e).divRound(this.n), o = r.b.neg().mul(e).divRound(this.n), a = i.mul(r.a), s = o.mul(n.a), c = i.mul(r.b), l = o.mul(n.b); return { k1: e.sub(a).sub(s), k2: c.add(l).neg() }; }, A.prototype.pointFromX = function (e, t) { (e = new (i())(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), n = r.redSqrt(); if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point"); var o = n.fromRed().isOdd(); return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n); }, A.prototype.validate = function (e) { if (e.inf)
            return !0; var t = e.x, r = e.y, n = this.a.redMul(t), i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b); return 0 === r.redSqr().redISub(i).cmpn(0); }, A.prototype._endoWnafMulAdd = function (e, t, r) { for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
            var a = this._endoSplit(t[o]), s = e[o], c = s._getBeta();
            a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), c = c.neg(!0)), n[2 * o] = s, n[2 * o + 1] = c, i[2 * o] = a.k1, i[2 * o + 1] = a.k2;
        } for (var l = this._wnafMulAdd(1, n, i, 2 * o, r), u = 0; u < 2 * o; u++)
            n[u] = null, i[u] = null; return l; }, y(w, m.BasePoint), A.prototype.point = function (e, t, r) { return new w(this, e, t, r); }, A.prototype.pointFromJSON = function (e, t) { return w.fromJSON(this, e, t); }, w.prototype._getBeta = function () { if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta)
                return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var r = this.curve, n = function (e) { return r.point(e.x.redMul(r.endo.beta), e.y); };
                e.beta = t, t.precomputed = { beta: null, naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(n) } };
            }
            return t;
        } }, w.prototype.toJSON = function () { return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y]; }, w.fromJSON = function (e, t, r) { "string" == typeof t && (t = JSON.parse(t)); var n = e.point(t[0], t[1], r); if (!t[2])
            return n; function i(t) { return e.point(t[0], t[1], r); } var o = t[2]; return n.precomputed = { beta: null, doubles: o.doubles && { step: o.doubles.step, points: [n].concat(o.doubles.points.map(i)) }, naf: o.naf && { wnd: o.naf.wnd, points: [n].concat(o.naf.points.map(i)) } }, n; }, w.prototype.inspect = function () { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"; }, w.prototype.isInfinity = function () { return this.inf; }, w.prototype.add = function (e) { if (this.inf)
            return e; if (e.inf)
            return this; if (this.eq(e))
            return this.dbl(); if (this.neg().eq(e))
            return this.curve.point(null, null); if (0 === this.x.cmp(e.x))
            return this.curve.point(null, null); var t = this.y.redSub(e.y); 0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm())); var r = t.redSqr().redISub(this.x).redISub(e.x), n = t.redMul(this.x.redSub(r)).redISub(this.y); return this.curve.point(r, n); }, w.prototype.dbl = function () { if (this.inf)
            return this; var e = this.y.redAdd(this.y); if (0 === e.cmpn(0))
            return this.curve.point(null, null); var t = this.curve.a, r = this.x.redSqr(), n = e.redInvm(), i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n), o = i.redSqr().redISub(this.x.redAdd(this.x)), a = i.redMul(this.x.redSub(o)).redISub(this.y); return this.curve.point(o, a); }, w.prototype.getX = function () { return this.x.fromRed(); }, w.prototype.getY = function () { return this.y.fromRed(); }, w.prototype.mul = function (e) { return e = new (i())(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e); }, w.prototype.mulAdd = function (e, t, r) { var n = [this, t], i = [e, r]; return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2); }, w.prototype.jmulAdd = function (e, t, r) { var n = [this, t], i = [e, r]; return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0); }, w.prototype.eq = function (e) { return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y)); }, w.prototype.neg = function (e) { if (this.inf)
            return this; var t = this.curve.point(this.x, this.y.redNeg()); if (e && this.precomputed) {
            var r = this.precomputed, n = function (e) { return e.neg(); };
            t.precomputed = { naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) }, doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(n) } };
        } return t; }, w.prototype.toJ = function () { return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one); }, y(E, m.BasePoint), A.prototype.jpoint = function (e, t, r) { return new E(this, e, t, r); }, E.prototype.toP = function () { if (this.isInfinity())
            return this.curve.point(null, null); var e = this.z.redInvm(), t = e.redSqr(), r = this.x.redMul(t), n = this.y.redMul(t).redMul(e); return this.curve.point(r, n); }, E.prototype.neg = function () { return this.curve.jpoint(this.x, this.y.redNeg(), this.z); }, E.prototype.add = function (e) { if (this.isInfinity())
            return e; if (e.isInfinity())
            return this; var t = e.z.redSqr(), r = this.z.redSqr(), n = this.x.redMul(t), i = e.x.redMul(r), o = this.y.redMul(t.redMul(e.z)), a = e.y.redMul(r.redMul(this.z)), s = n.redSub(i), c = o.redSub(a); if (0 === s.cmpn(0))
            return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var l = s.redSqr(), u = l.redMul(s), f = n.redMul(l), h = c.redSqr().redIAdd(u).redISub(f).redISub(f), d = c.redMul(f.redISub(h)).redISub(o.redMul(u)), p = this.z.redMul(e.z).redMul(s); return this.curve.jpoint(h, d, p); }, E.prototype.mixedAdd = function (e) { if (this.isInfinity())
            return e.toJ(); if (e.isInfinity())
            return this; var t = this.z.redSqr(), r = this.x, n = e.x.redMul(t), i = this.y, o = e.y.redMul(t).redMul(this.z), a = r.redSub(n), s = i.redSub(o); if (0 === a.cmpn(0))
            return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var c = a.redSqr(), l = c.redMul(a), u = r.redMul(c), f = s.redSqr().redIAdd(l).redISub(u).redISub(u), h = s.redMul(u.redISub(f)).redISub(i.redMul(l)), d = this.z.redMul(a); return this.curve.jpoint(f, h, d); }, E.prototype.dblp = function (e) { if (0 === e)
            return this; if (this.isInfinity())
            return this; if (!e)
            return this.dbl(); var t; if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (t = 0; t < e; t++)
                r = r.dbl();
            return r;
        } var n = this.curve.a, i = this.curve.tinv, o = this.x, a = this.y, s = this.z, c = s.redSqr().redSqr(), l = a.redAdd(a); for (t = 0; t < e; t++) {
            var u = o.redSqr(), f = l.redSqr(), h = f.redSqr(), d = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(c)), p = o.redMul(f), g = d.redSqr().redISub(p.redAdd(p)), m = p.redISub(g), b = d.redMul(m);
            b = b.redIAdd(b).redISub(h);
            var y = l.redMul(s);
            t + 1 < e && (c = c.redMul(h)), o = g, s = y, l = b;
        } return this.curve.jpoint(o, l.redMul(i), s); }, E.prototype.dbl = function () { return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl(); }, E.prototype._zeroDbl = function () { var e, t, r; if (this.zOne) {
            var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n), c = s.redSqr().redISub(a).redISub(a), l = o.redIAdd(o);
            l = (l = l.redIAdd(l)).redIAdd(l), e = c, t = s.redMul(a.redISub(c)).redISub(l), r = this.y.redAdd(this.y);
        }
        else {
            var u = this.x.redSqr(), f = this.y.redSqr(), h = f.redSqr(), d = this.x.redAdd(f).redSqr().redISub(u).redISub(h);
            d = d.redIAdd(d);
            var p = u.redAdd(u).redIAdd(u), g = p.redSqr(), m = h.redIAdd(h);
            m = (m = m.redIAdd(m)).redIAdd(m), e = g.redISub(d).redISub(d), t = p.redMul(d.redISub(e)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r);
        } return this.curve.jpoint(e, t, r); }, E.prototype._threeDbl = function () { var e, t, r; if (this.zOne) {
            var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a), c = s.redSqr().redISub(a).redISub(a);
            e = c;
            var l = o.redIAdd(o);
            l = (l = l.redIAdd(l)).redIAdd(l), t = s.redMul(a.redISub(c)).redISub(l), r = this.y.redAdd(this.y);
        }
        else {
            var u = this.z.redSqr(), f = this.y.redSqr(), h = this.x.redMul(f), d = this.x.redSub(u).redMul(this.x.redAdd(u));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h), g = (p = p.redIAdd(p)).redAdd(p);
            e = d.redSqr().redISub(g), r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(u);
            var m = f.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), t = d.redMul(p.redISub(e)).redISub(m);
        } return this.curve.jpoint(e, t, r); }, E.prototype._dbl = function () { var e = this.curve.a, t = this.x, r = this.y, n = this.z, i = n.redSqr().redSqr(), o = t.redSqr(), a = r.redSqr(), s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)), c = t.redAdd(t), l = (c = c.redIAdd(c)).redMul(a), u = s.redSqr().redISub(l.redAdd(l)), f = l.redISub(u), h = a.redSqr(); h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h); var d = s.redMul(f).redISub(h), p = r.redAdd(r).redMul(n); return this.curve.jpoint(u, d, p); }, E.prototype.trpl = function () { if (!this.curve.zeroA)
            return this.dbl().add(this); var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr(), n = t.redSqr(), i = e.redAdd(e).redIAdd(e), o = i.redSqr(), a = this.x.redAdd(t).redSqr().redISub(e).redISub(n), s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(), c = n.redIAdd(n); c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c); var l = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(c), u = t.redMul(l); u = (u = u.redIAdd(u)).redIAdd(u); var f = this.x.redMul(s).redISub(u); f = (f = f.redIAdd(f)).redIAdd(f); var h = this.y.redMul(l.redMul(c.redISub(l)).redISub(a.redMul(s))); h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h); var d = this.z.redAdd(a).redSqr().redISub(r).redISub(s); return this.curve.jpoint(f, h, d); }, E.prototype.mul = function (e, t) { return e = new (i())(e, t), this.curve._wnafMul(this, e); }, E.prototype.eq = function (e) { if ("affine" === e.type)
            return this.eq(e.toJ()); if (this === e)
            return !0; var t = this.z.redSqr(), r = e.z.redSqr(); if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
            return !1; var n = t.redMul(this.z), i = r.redMul(e.z); return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0); }, E.prototype.eqXToP = function (e) { var t = this.z.redSqr(), r = e.toRed(this.curve.red).redMul(t); if (0 === this.x.cmp(r))
            return !0; for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)
                return !1;
            if (r.redIAdd(i), 0 === this.x.cmp(r))
                return !0;
        } }, E.prototype.inspect = function () { return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"; }, E.prototype.isInfinity = function () { return 0 === this.z.cmpn(0); };
        var T = s((function (e, t) { var r = t; r.base = m, r.short = S, r.mont = null, r.edwards = null; })), k = s((function (e, t) { var r, n = t, i = f.assert; function o(e) { "short" === e.type ? this.curve = new T.short(e) : "edwards" === e.type ? this.curve = new T.edwards(e) : this.curve = new T.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"); } function s(e, t) { Object.defineProperty(n, e, { configurable: !0, enumerable: !0, get: function () { var r = new o(t); return Object.defineProperty(n, e, { configurable: !0, enumerable: !0, value: r }), r; } }); } n.PresetCurve = o, s("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: a().sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), s("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: a().sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), s("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: a().sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), s("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: a().sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), s("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: a().sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), s("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: a().sha256, gRed: !1, g: ["9"] }), s("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: a().sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] }); try {
            r = null.crash();
        }
        catch (e) {
            r = void 0;
        } s("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: a().sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r] }); }));
        function B(e) { if (!(this instanceof B))
            return new B(e); this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null; var t = u.toArray(e.entropy, e.entropyEnc || "hex"), r = u.toArray(e.nonce, e.nonceEnc || "hex"), n = u.toArray(e.pers, e.persEnc || "hex"); c(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n); }
        var M = B;
        B.prototype._init = function (e, t, r) { var n = e.concat(t).concat(r); this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8); for (var i = 0; i < this.V.length; i++)
            this.K[i] = 0, this.V[i] = 1; this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656; }, B.prototype._hmac = function () { return new (a().hmac)(this.hash, this.K); }, B.prototype._update = function (e) { var t = this._hmac().update(this.V).update([0]); e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest()); }, B.prototype.reseed = function (e, t, r, n) { "string" != typeof t && (n = r, r = t, t = null), e = u.toArray(e, t), r = u.toArray(r, n), c(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1; }, B.prototype.generate = function (e, t, r, n) { if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required"); "string" != typeof t && (n = r, r = t, t = null), r && (r = u.toArray(r, n || "hex"), this._update(r)); for (var i = []; i.length < e;)
            this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V); var o = i.slice(0, e); return this._update(r), this._reseed++, u.encode(o, t); };
        var C = f.assert;
        function L(e, t) { this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc); }
        var P = L;
        L.fromPublic = function (e, t, r) { return t instanceof L ? t : new L(e, { pub: t, pubEnc: r }); }, L.fromPrivate = function (e, t, r) { return t instanceof L ? t : new L(e, { priv: t, privEnc: r }); }, L.prototype.validate = function () { var e = this.getPublic(); return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" }; }, L.prototype.getPublic = function (e, t) { return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub; }, L.prototype.getPrivate = function (e) { return "hex" === e ? this.priv.toString(16, 2) : this.priv; }, L.prototype._importPrivate = function (e, t) { this.priv = new (i())(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n); }, L.prototype._importPublic = function (e, t) { if (e.x || e.y)
            return "mont" === this.ec.curve.type ? C(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || C(e.x && e.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(e.x, e.y)); this.pub = this.ec.curve.decodePoint(e, t); }, L.prototype.derive = function (e) { return e.validate() || C(e.validate(), "public point not validated"), e.mul(this.priv).getX(); }, L.prototype.sign = function (e, t, r) { return this.ec.sign(e, this, t, r); }, L.prototype.verify = function (e, t) { return this.ec.verify(e, t, this); }, L.prototype.inspect = function () { return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"; };
        var F = f.assert;
        function N(e, t) { if (e instanceof N)
            return e; this._importDER(e, t) || (F(e.r && e.s, "Signature without r or s"), this.r = new (i())(e.r, 16), this.s = new (i())(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam); }
        var x = N;
        function R() { this.place = 0; }
        function O(e, t) { var r = e[t.place++]; if (!(128 & r))
            return r; var n = 15 & r; if (0 === n || n > 4)
            return !1; for (var i = 0, o = 0, a = t.place; o < n; o++, a++)
            i <<= 8, i |= e[a], i >>>= 0; return !(i <= 127) && (t.place = a, i); }
        function I(e) { for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;)
            t++; return 0 === t ? e : e.slice(t); }
        function D(e, t) { if (t < 128)
            e.push(t);
        else {
            var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
            for (e.push(128 | r); --r;)
                e.push(t >>> (r << 3) & 255);
            e.push(t);
        } }
        N.prototype._importDER = function (e, t) { e = f.toArray(e, t); var r = new R; if (48 !== e[r.place++])
            return !1; var n = O(e, r); if (!1 === n)
            return !1; if (n + r.place !== e.length)
            return !1; if (2 !== e[r.place++])
            return !1; var o = O(e, r); if (!1 === o)
            return !1; var a = e.slice(r.place, o + r.place); if (r.place += o, 2 !== e[r.place++])
            return !1; var s = O(e, r); if (!1 === s)
            return !1; if (e.length !== s + r.place)
            return !1; var c = e.slice(r.place, s + r.place); if (0 === a[0]) {
            if (!(128 & a[1]))
                return !1;
            a = a.slice(1);
        } if (0 === c[0]) {
            if (!(128 & c[1]))
                return !1;
            c = c.slice(1);
        } return this.r = new (i())(a), this.s = new (i())(c), this.recoveryParam = null, !0; }, N.prototype.toDER = function (e) { var t = this.r.toArray(), r = this.s.toArray(); for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = I(t), r = I(r); !(r[0] || 128 & r[1]);)
            r = r.slice(1); var n = [2]; D(n, t.length), (n = n.concat(t)).push(2), D(n, r.length); var i = n.concat(r), o = [48]; return D(o, i.length), o = o.concat(i), f.encode(o, e); };
        var J = function () { throw new Error("unsupported"); }, _ = f.assert;
        function U(e) { if (!(this instanceof U))
            return new U(e); "string" == typeof e && (_(Object.prototype.hasOwnProperty.call(k, e), "Unknown curve " + e), e = k[e]), e instanceof k.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash; }
        var H = U;
        U.prototype.keyPair = function (e) { return new P(this, e); }, U.prototype.keyFromPrivate = function (e, t) { return P.fromPrivate(this, e, t); }, U.prototype.keyFromPublic = function (e, t) { return P.fromPublic(this, e, t); }, U.prototype.genKeyPair = function (e) { e || (e = {}); for (var t = new M({ hash: this.hash, pers: e.pers, persEnc: e.persEnc || "utf8", entropy: e.entropy || J(this.hash.hmacStrength), entropyEnc: e.entropy && e.entropyEnc || "utf8", nonce: this.n.toArray() }), r = this.n.byteLength(), n = this.n.sub(new (i())(2));;) {
            var o = new (i())(t.generate(r));
            if (!(o.cmp(n) > 0))
                return o.iaddn(1), this.keyFromPrivate(o);
        } }, U.prototype._truncateToN = function (e, t) { var r = 8 * e.byteLength() - this.n.bitLength(); return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e; }, U.prototype.sign = function (e, t, r, n) { "object" == typeof r && (n = r, r = null), n || (n = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new (i())(e, 16)); for (var o = this.n.byteLength(), a = t.getPrivate().toArray("be", o), s = e.toArray("be", o), c = new M({ hash: this.hash, entropy: a, nonce: s, pers: n.pers, persEnc: n.persEnc || "utf8" }), l = this.n.sub(new (i())(1)), u = 0;; u++) {
            var f = n.k ? n.k(u) : new (i())(c.generate(this.n.byteLength()));
            if (!((f = this._truncateToN(f, !0)).cmpn(1) <= 0 || f.cmp(l) >= 0)) {
                var h = this.g.mul(f);
                if (!h.isInfinity()) {
                    var d = h.getX(), p = d.umod(this.n);
                    if (0 !== p.cmpn(0)) {
                        var g = f.invm(this.n).mul(p.mul(t.getPrivate()).iadd(e));
                        if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                            var m = (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                            return n.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), m ^= 1), new x({ r: p, s: g, recoveryParam: m });
                        }
                    }
                }
            }
        } }, U.prototype.verify = function (e, t, r, n) { e = this._truncateToN(new (i())(e, 16)), r = this.keyFromPublic(r, n); var o = (t = new x(t, "hex")).r, a = t.s; if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
            return !1; if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
            return !1; var s, c = a.invm(this.n), l = c.mul(e).umod(this.n), u = c.mul(o).umod(this.n); return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(l, r.getPublic(), u)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(l, r.getPublic(), u)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o); }, U.prototype.recoverPubKey = function (e, t, r, n) { _((3 & r) === r, "The recovery param is more than two bits"), t = new x(t, n); var o = this.n, a = new (i())(e), s = t.r, c = t.s, l = 1 & r, u = r >> 1; if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw new Error("Unable to find sencond key candinate"); s = u ? this.curve.pointFromX(s.add(this.curve.n), l) : this.curve.pointFromX(s, l); var f = t.r.invm(o), h = o.sub(a).mul(f).umod(o), d = c.mul(f).umod(o); return this.g.mulAdd(h, s, d); }, U.prototype.getKeyRecoveryParam = function (e, t, r, n) { if (null !== (t = new x(t, n)).recoveryParam)
            return t.recoveryParam; for (var i = 0; i < 4; i++) {
            var o;
            try {
                o = this.recoverPubKey(e, t, i);
            }
            catch (e) {
                continue;
            }
            if (o.eq(r))
                return i;
        } throw new Error("Unable to find valid recovery factor"); };
        var X = s((function (e, t) { var r = t; r.version = "6.5.4", r.utils = f, r.rand = function () { throw new Error("unsupported"); }, r.curve = T, r.curves = k, r.ec = H, r.eddsa = null; })).ec, V = r(3286), G = r(3587);
        var z = new (r(711).Logger)("signing-key/5.0.10");
        var j = null;
        function K() { return j || (j = new X("secp256k1")), j; }
        var Z = (function () {
            function Z(e) {
                (0, G.defineReadOnly)(this, "curve", "secp256k1"), (0, G.defineReadOnly)(this, "privateKey", (0, V.hexlify)(e));
                var t = K().keyFromPrivate((0, V.arrayify)(this.privateKey));
                (0, G.defineReadOnly)(this, "publicKey", "0x" + t.getPublic(!1, "hex")), (0, G.defineReadOnly)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), (0, G.defineReadOnly)(this, "_isSigningKey", !0);
            }
            Z.prototype._addPoint = function (e) { var t = K().keyFromPublic((0, V.arrayify)(this.publicKey)), r = K().keyFromPublic((0, V.arrayify)(e)); return "0x" + t.pub.add(r.pub).encodeCompressed("hex"); };
            Z.prototype.signDigest = function (e) { var t = K().keyFromPrivate((0, V.arrayify)(this.privateKey)), r = (0, V.arrayify)(e); 32 !== r.length && z.throwArgumentError("bad digest length", "digest", e); var n = t.sign(r, { canonical: !0 }); return (0, V.splitSignature)({ recoveryParam: n.recoveryParam, r: (0, V.hexZeroPad)("0x" + n.r.toString(16), 32), s: (0, V.hexZeroPad)("0x" + n.s.toString(16), 32) }); };
            Z.prototype.computeSharedSecret = function (e) { var t = K().keyFromPrivate((0, V.arrayify)(this.privateKey)), r = K().keyFromPublic((0, V.arrayify)(Q(e))); return (0, V.hexZeroPad)("0x" + t.derive(r.getPublic()).toString(16), 32); };
            Z.isSigningKey = function (e) { return !(!e || !e._isSigningKey); };
            return Z;
        }());
        function q(e, t) { var r = (0, V.splitSignature)(t), n = { r: (0, V.arrayify)(r.r), s: (0, V.arrayify)(r.s) }; return "0x" + K().recoverPubKey((0, V.arrayify)(e), n, r.recoveryParam).encode("hex", !1); }
        function Q(e, t) { var r = (0, V.arrayify)(e); if (32 === r.length) {
            var e_43 = new Z(r);
            return t ? "0x" + K().keyFromPrivate(r).getPublic(!0, "hex") : e_43.publicKey;
        } return 33 === r.length ? t ? (0, V.hexlify)(r) : "0x" + K().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? t ? "0x" + K().keyFromPublic(r).getPublic(!0, "hex") : (0, V.hexlify)(r) : z.throwArgumentError("invalid public or private key", "key", "[REDACTED]"); }
    }, 9155: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { pack: function () { return h; }, keccak256: function () { return d; }, sha256: function () { return p; } });
        var n = r(2593), i = r(3286), o = r(8197), a = r(3951), s = r(4242);
        var c = new RegExp("^bytes([0-9]+)$"), l = new RegExp("^(u?int)([0-9]*)$"), u = new RegExp("^(.*)\\[([0-9]*)\\]$");
        function f(e, t, r) { switch (e) {
            case "address": return r ? (0, i.zeroPad)(t, 32) : (0, i.arrayify)(t);
            case "string": return (0, s.Y0)(t);
            case "bytes": return (0, i.arrayify)(t);
            case "bool": return t = t ? "0x01" : "0x00", r ? (0, i.zeroPad)(t, 32) : (0, i.arrayify)(t);
        } var o = e.match(l); if (o) {
            var a_7 = parseInt(o[2] || "256");
            if (o[2] && String(a_7) !== o[2] || a_7 % 8 != 0 || 0 === a_7 || a_7 > 256)
                throw new Error("invalid number type - " + e);
            return r && (a_7 = 256), t = n.O$.from(t).toTwos(a_7), (0, i.zeroPad)(t, a_7 / 8);
        } if (o = e.match(c), o) {
            var n_24 = parseInt(o[1]);
            if (String(n_24) !== o[1] || 0 === n_24 || n_24 > 32)
                throw new Error("invalid bytes type - " + e);
            if ((0, i.arrayify)(t).byteLength !== n_24)
                throw new Error("invalid value for " + e);
            return r ? (0, i.arrayify)((t + "0000000000000000000000000000000000000000000000000000000000000000").substring(0, 66)) : t;
        } if (o = e.match(u), o && Array.isArray(t)) {
            var r_43 = o[1];
            if (parseInt(o[2] || String(t.length)) != t.length)
                throw new Error("invalid value for " + e);
            var n_25 = [];
            return t.forEach((function (e) { n_25.push(f(r_43, e, !0)); })), (0, i.concat)(n_25);
        } throw new Error("invalid type - " + e); }
        function h(e, t) { if (e.length != t.length)
            throw new Error("type/value count mismatch"); var r = []; return e.forEach((function (e, n) { r.push(f(e, t[n])); })), (0, i.hexlify)((0, i.concat)(r)); }
        function d(e, t) { return (0, o.keccak256)(h(e, t)); }
        function p(e, t) { return (0, a.JQ)(h(e, t)); }
    }, 5637: function (e, t, r) {
        "use strict";
        r.d(t, { Ll: function () { return p; } });
        var n = r(4242);
        function i(e, t) { t || (t = function (e) { return [parseInt(e, 16)]; }); var r = 0, n = {}; return e.split(",").forEach((function (e) { var i = e.split(":"); r += parseInt(i[0], 16), n[r] = t(i[1]); })), n; }
        function o(e) { var t = 0; return e.split(",").map((function (e) { var r = e.split("-"); 1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1"); var n = t + parseInt(r[0], 16); return t = parseInt(r[1], 16), { l: n, h: t }; })); }
        function a(e, t) { var r = 0; for (var n_26 = 0; n_26 < t.length; n_26++) {
            var i_17 = t[n_26];
            if (r += i_17.l, e >= r && e <= r + i_17.h && (e - r) % (i_17.d || 1) == 0) {
                if (i_17.e && -1 !== i_17.e.indexOf(e - r))
                    continue;
                return i_17;
            }
        } return null; }
        var s = o("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), c = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((function (e) { return parseInt(e, 16); })), l = [{ h: 25, s: 32, l: 65 }, { h: 30, s: 32, e: [23], l: 127 }, { h: 54, s: 1, e: [48], l: 64, d: 2 }, { h: 14, s: 1, l: 57, d: 2 }, { h: 44, s: 1, l: 17, d: 2 }, { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 }, { h: 16, s: 1, l: 68, d: 2 }, { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 }, { h: 26, s: 32, e: [17], l: 435 }, { h: 22, s: 1, l: 71, d: 2 }, { h: 15, s: 80, l: 40 }, { h: 31, s: 32, l: 16 }, { h: 32, s: 1, l: 80, d: 2 }, { h: 52, s: 1, l: 42, d: 2 }, { h: 12, s: 1, l: 55, d: 2 }, { h: 40, s: 1, e: [38], l: 15, d: 2 }, { h: 14, s: 1, l: 48, d: 2 }, { h: 37, s: 48, l: 49 }, { h: 148, s: 1, l: 6351, d: 2 }, { h: 88, s: 1, l: 160, d: 2 }, { h: 15, s: 16, l: 704 }, { h: 25, s: 26, l: 854 }, { h: 25, s: 32, l: 55915 }, { h: 37, s: 40, l: 1247 }, { h: 25, s: -119711, l: 53248 }, { h: 25, s: -119763, l: 52 }, { h: 25, s: -119815, l: 52 }, { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 }, { h: 25, s: -119919, l: 52 }, { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 }, { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 }, { h: 25, s: -120075, l: 52 }, { h: 25, s: -120127, l: 52 }, { h: 25, s: -120179, l: 52 }, { h: 25, s: -120231, l: 52 }, { h: 25, s: -120283, l: 52 }, { h: 25, s: -120335, l: 52 }, { h: 24, s: -119543, e: [17], l: 56 }, { h: 24, s: -119601, e: [17], l: 58 }, { h: 24, s: -119659, e: [17], l: 58 }, { h: 24, s: -119717, e: [17], l: 58 }, { h: 24, s: -119775, e: [17], l: 58 }], u = i("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), f = i("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), h = i("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function (e) { if (e.length % 4 != 0)
            throw new Error("bad data"); var t = []; for (var r_44 = 0; r_44 < e.length; r_44 += 4)
            t.push(parseInt(e.substring(r_44, r_44 + 4), 16)); return t; })), d = o("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
        function p(e) { if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59)
            return e.toLowerCase(); var t = (0, n.XL)(e); var r; r = t.map((function (e) { if (c.indexOf(e) >= 0)
            return []; if (e >= 65024 && e <= 65039)
            return []; return function (e) { var t = a(e, l); if (t)
            return [e + t.s]; var r = u[e]; if (r)
            return r; var n = f[e]; return n ? [e + n[0]] : h[e] || null; }(e) || [e]; })), t = r.reduce((function (e, t) { return (t.forEach((function (t) { e.push(t); })), e); }), []), t = (0, n.XL)((0, n.uu)(t), n.Uj.NFKC), t.forEach((function (e) { if (a(e, d))
            throw new Error("STRINGPREP_CONTAINS_PROHIBITED"); })), t.forEach((function (e) { if (a(e, s))
            throw new Error("STRINGPREP_CONTAINS_UNASSIGNED"); })); var i = (0, n.uu)(t); if ("-" === i.substring(0, 1) || "--" === i.substring(2, 4) || "-" === i.substring(i.length - 1))
            throw new Error("invalid hyphen"); if (i.length > 63)
            throw new Error("too long"); return i; }
    }, 937: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { UnicodeNormalizationForm: function () { return o.Uj; }, Utf8ErrorFuncs: function () { return o.te; }, Utf8ErrorReason: function () { return o.Uw; }, _toEscapedUtf8String: function () { return o.U$; }, formatBytes32String: function () { return a; }, nameprep: function () { return c.Ll; }, parseBytes32String: function () { return s; }, toUtf8Bytes: function () { return o.Y0; }, toUtf8CodePoints: function () { return o.XL; }, toUtf8String: function () { return o.ZN; } });
        var n = r(7218), i = r(3286), o = r(4242);
        function a(e) { var t = (0, o.Y0)(e); if (t.length > 31)
            throw new Error("bytes32 string must be less than 32 bytes"); return (0, i.hexlify)((0, i.concat)([t, n.R]).slice(0, 32)); }
        function s(e) { var t = (0, i.arrayify)(e); if (32 !== t.length)
            throw new Error("invalid bytes32 - not 32 bytes long"); if (0 !== t[31])
            throw new Error("invalid bytes32 string - no null terminator"); var r = 31; for (; 0 === t[r - 1];)
            r--; return (0, o.ZN)(t.slice(0, r)); }
        var c = r(5637);
    }, 4242: function (e, t, r) {
        "use strict";
        r.d(t, { Uj: function () { return o; }, te: function () { return c; }, Uw: function () { return a; }, U$: function () { return h; }, uu: function () { return d; }, Y0: function () { return u; }, XL: function () { return g; }, ZN: function () { return p; } });
        var n = r(3286);
        var i = new (r(711).Logger)("strings/5.0.9");
        var o, a;
        function s(e, t, r, n, i) { if (e === a.BAD_PREFIX || e === a.UNEXPECTED_CONTINUE) {
            var e_44 = 0;
            for (var n_27 = t + 1; n_27 < r.length && r[n_27] >> 6 == 2; n_27++)
                e_44++;
            return e_44;
        } return e === a.OVERRUN ? r.length - t - 1 : 0; }
        !function (e) { e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD"; }(o || (o = {})), function (e) { e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation"; }(a || (a = {}));
        var c = Object.freeze({ error: function (e, t, r, n, o) { return i.throwArgumentError("invalid codepoint at offset " + t + "; " + e, "bytes", r); }, ignore: s, replace: function (e, t, r, n, i) { return e === a.OVERLONG ? (n.push(i), 0) : (n.push(65533), s(e, t, r)); } });
        function l(e, t) { null == t && (t = c.error), e = (0, n.arrayify)(e); var r = []; var i = 0; for (; i < e.length;) {
            var n_28 = e[i++];
            if (n_28 >> 7 == 0) {
                r.push(n_28);
                continue;
            }
            var o_9 = null, s_9 = null;
            if (192 == (224 & n_28))
                o_9 = 1, s_9 = 127;
            else if (224 == (240 & n_28))
                o_9 = 2, s_9 = 2047;
            else {
                if (240 != (248 & n_28)) {
                    i += t(128 == (192 & n_28) ? a.UNEXPECTED_CONTINUE : a.BAD_PREFIX, i - 1, e, r);
                    continue;
                }
                o_9 = 3, s_9 = 65535;
            }
            if (i - 1 + o_9 >= e.length) {
                i += t(a.OVERRUN, i - 1, e, r);
                continue;
            }
            var c_3 = n_28 & (1 << 8 - o_9 - 1) - 1;
            for (var n_29 = 0; n_29 < o_9; n_29++) {
                var n_30 = e[i];
                if (128 != (192 & n_30)) {
                    i += t(a.MISSING_CONTINUE, i, e, r), c_3 = null;
                    break;
                }
                c_3 = c_3 << 6 | 63 & n_30, i++;
            }
            null !== c_3 && (c_3 > 1114111 ? i += t(a.OUT_OF_RANGE, i - 1 - o_9, e, r, c_3) : c_3 >= 55296 && c_3 <= 57343 ? i += t(a.UTF16_SURROGATE, i - 1 - o_9, e, r, c_3) : c_3 <= s_9 ? i += t(a.OVERLONG, i - 1 - o_9, e, r, c_3) : r.push(c_3));
        } return r; }
        function u(e, t) {
            if (t === void 0) { t = o.current; }
            t != o.current && (i.checkNormalize(), e = e.normalize(t));
            var r = [];
            for (var t_41 = 0; t_41 < e.length; t_41++) {
                var n_31 = e.charCodeAt(t_41);
                if (n_31 < 128)
                    r.push(n_31);
                else if (n_31 < 2048)
                    r.push(n_31 >> 6 | 192), r.push(63 & n_31 | 128);
                else if (55296 == (64512 & n_31)) {
                    t_41++;
                    var i_18 = e.charCodeAt(t_41);
                    if (t_41 >= e.length || 56320 != (64512 & i_18))
                        throw new Error("invalid utf-8 string");
                    var o_10 = 65536 + ((1023 & n_31) << 10) + (1023 & i_18);
                    r.push(o_10 >> 18 | 240), r.push(o_10 >> 12 & 63 | 128), r.push(o_10 >> 6 & 63 | 128), r.push(63 & o_10 | 128);
                }
                else
                    r.push(n_31 >> 12 | 224), r.push(n_31 >> 6 & 63 | 128), r.push(63 & n_31 | 128);
            }
            return (0, n.arrayify)(r);
        }
        function f(e) { var t = "0000" + e.toString(16); return "\\u" + t.substring(t.length - 4); }
        function h(e, t) { return '"' + l(e, t).map((function (e) { if (e < 256) {
            switch (e) {
                case 8: return "\\b";
                case 9: return "\\t";
                case 10: return "\\n";
                case 13: return "\\r";
                case 34: return '\\"';
                case 92: return "\\\\";
            }
            if (e >= 32 && e < 127)
                return String.fromCharCode(e);
        } return e <= 65535 ? f(e) : f(55296 + ((e -= 65536) >> 10 & 1023)) + f(56320 + (1023 & e)); })).join("") + '"'; }
        function d(e) { return e.map((function (e) { return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10 & 1023), 56320 + (1023 & e))); })).join(""); }
        function p(e, t) { return d(l(e, t)); }
        function g(e, t) {
            if (t === void 0) { t = o.current; }
            return l(u(e, t));
        }
    }, 4377: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { computeAddress: function () { return g; }, parse: function () { return y; }, recoverAddress: function () { return m; }, serialize: function () { return b; } });
        var n = r(4594), i = r(2593), o = r(3286), a = r(1046), s = r(8197), c = r(3587), l = r(1843), u = r(2768);
        var f = new (r(711).Logger)("transactions/5.0.10");
        function h(e) { return "0x" === e ? a._Y : i.O$.from(e); }
        var d = [{ name: "nonce", maxLength: 32, numeric: !0 }, { name: "gasPrice", maxLength: 32, numeric: !0 }, { name: "gasLimit", maxLength: 32, numeric: !0 }, { name: "to", length: 20 }, { name: "value", maxLength: 32, numeric: !0 }, { name: "data" }], p = { chainId: !0, data: !0, gasLimit: !0, gasPrice: !0, nonce: !0, to: !0, value: !0 };
        function g(e) { var t = (0, u.computePublicKey)(e); return (0, n.getAddress)((0, o.hexDataSlice)((0, s.keccak256)((0, o.hexDataSlice)(t, 1)), 12)); }
        function m(e, t) { return g((0, u.recoverPublicKey)((0, o.arrayify)(e), t)); }
        function b(e, t) { (0, c.checkProperties)(e, p); var r = []; d.forEach((function (t) { var n = e[t.name] || []; var i = {}; t.numeric && (i.hexPad = "left"), n = (0, o.arrayify)((0, o.hexlify)(n, i)), t.length && n.length !== t.length && n.length > 0 && f.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n), t.maxLength && (n = (0, o.stripZeros)(n), n.length > t.maxLength && f.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n)), r.push((0, o.hexlify)(n)); })); var n = 0; if (null != e.chainId ? (n = e.chainId, "number" != typeof n && f.throwArgumentError("invalid transaction.chainId", "transaction", e)) : t && !(0, o.isBytesLike)(t) && t.v > 28 && (n = Math.floor((t.v - 35) / 2)), 0 !== n && (r.push((0, o.hexlify)(n)), r.push("0x"), r.push("0x")), !t)
            return l.encode(r); var i = (0, o.splitSignature)(t); var a = 27 + i.recoveryParam; return 0 !== n ? (r.pop(), r.pop(), r.pop(), a += 2 * n + 8, i.v > 28 && i.v !== a && f.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t)) : i.v !== a && f.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t), r.push((0, o.hexlify)(a)), r.push((0, o.stripZeros)((0, o.arrayify)(i.r))), r.push((0, o.stripZeros)((0, o.arrayify)(i.s))), l.encode(r); }
        function y(e) { var t = l.decode(e); 9 !== t.length && 6 !== t.length && f.throwArgumentError("invalid raw transaction", "rawTransaction", e); var r = { nonce: h(t[0]).toNumber(), gasPrice: h(t[1]), gasLimit: h(t[2]), to: (a = t[3], "0x" === a ? null : (0, n.getAddress)(a)), value: h(t[4]), data: t[5], chainId: 0 }; var a; if (6 === t.length)
            return r; try {
            r.v = i.O$.from(t[6]).toNumber();
        }
        catch (e) {
            return console.log(e), r;
        } if (r.r = (0, o.hexZeroPad)(t[7], 32), r.s = (0, o.hexZeroPad)(t[8], 32), i.O$.from(r.r).isZero() && i.O$.from(r.s).isZero())
            r.chainId = r.v, r.v = 0;
        else {
            r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
            var n_32 = r.v - 27;
            var i_19 = t.slice(0, 6);
            0 !== r.chainId && (i_19.push((0, o.hexlify)(r.chainId)), i_19.push("0x"), i_19.push("0x"), n_32 -= 2 * r.chainId + 8);
            var a_8 = (0, s.keccak256)(l.encode(i_19));
            try {
                r.from = m(a_8, { r: (0, o.hexlify)(r.r), s: (0, o.hexlify)(r.s), recoveryParam: n_32 });
            }
            catch (e) {
                console.log(e);
            }
            r.hash = (0, s.keccak256)(e);
        } return r; }
    }, 7616: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { commify: function () { return w; }, formatEther: function () { return k; }, formatUnits: function () { return E; }, parseEther: function () { return B; }, parseUnits: function () { return T; } });
        var n = r(3286), i = r(711), o = r(8794), a = r(2593);
        var s = new i.Logger(o.i), c = {}, l = a.O$.from(0), u = a.O$.from(-1);
        function f(e, t, r, n) { var o = { fault: t, operation: r }; return void 0 !== n && (o.value = n), s.throwError(e, i.Logger.errors.NUMERIC_FAULT, o); }
        var h = "0";
        for (; h.length < 256;)
            h += h;
        function d(e) { if ("number" != typeof e)
            try {
                e = a.O$.from(e).toNumber();
            }
            catch (e) { } return "number" == typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + h.substring(0, e) : s.throwArgumentError("invalid decimal size", "decimals", e); }
        function p(e, t) { null == t && (t = 0); var r = d(t), n = (e = a.O$.from(e)).lt(l); n && (e = e.mul(u)); var i = e.mod(r).toString(); for (; i.length < r.length - 1;)
            i = "0" + i; i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1]; var o = e.div(r).toString(); return e = o + "." + i, n && (e = "-" + e), e; }
        function g(e, t) { null == t && (t = 0); var r = d(t); if ("string" == typeof e && e.match(/^-?[0-9.,]+$/) || s.throwArgumentError("invalid decimal value", "value", e), r.length - 1 == 0)
            return a.O$.from(e); var n = "-" === e.substring(0, 1); n && (e = e.substring(1)), "." === e && s.throwArgumentError("missing value", "value", e); var i = e.split("."); i.length > 2 && s.throwArgumentError("too many decimal points", "value", e); var o = i[0], c = i[1]; for (o || (o = "0"), c || (c = "0"), c.length > r.length - 1 && f("fractional component exceeds decimals", "underflow", "parseFixed"); c.length < r.length - 1;)
            c += "0"; var l = a.O$.from(o), h = a.O$.from(c); var p = l.mul(r).add(h); return n && (p = p.mul(u)), p; }
        var m = (function () {
            function m(e, t, r, n) {
                e !== c && s.throwError("cannot use FixedFormat constructor; use FixedFormat.from", i.Logger.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = t, this.width = r, this.decimals = n, this.name = (t ? "" : "u") + "fixed" + String(r) + "x" + String(n), this._multiplier = d(n), Object.freeze(this);
            }
            m.from = function (e) { if (e instanceof m)
                return e; var t = !0, r = 128, n = 18; if ("string" == typeof e) {
                if ("fixed" === e)
                    ;
                else if ("ufixed" === e)
                    t = !1;
                else if (null != e) {
                    var i_20 = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                    i_20 || s.throwArgumentError("invalid fixed format", "format", e), t = "u" !== i_20[1], r = parseInt(i_20[2]), n = parseInt(i_20[3]);
                }
            }
            else if (e) {
                var i_21 = function (t, r, n) { return null == e[t] ? n : (typeof e[t] !== r && s.throwArgumentError("invalid fixed format (" + t + " not " + r + ")", "format." + t, e[t]), e[t]); };
                t = i_21("signed", "boolean", t), r = i_21("width", "number", r), n = i_21("decimals", "number", n);
            } return r % 8 && s.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), n > 80 && s.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new m(c, t, r, n); };
            return m;
        }());
        var b = (function () {
            function b(e, t, r, n) {
                var _newTarget = this.constructor;
                s.checkNew(_newTarget, b), e !== c && s.throwError("cannot use FixedNumber constructor; use FixedNumber.from", i.Logger.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n, this._hex = t, this._value = r, this._isFixedNumber = !0, Object.freeze(this);
            }
            b.prototype._checkFormat = function (e) { this.format.name !== e.format.name && s.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e); };
            b.prototype.addUnsafe = function (e) { this._checkFormat(e); var t = g(this._value, this.format.decimals), r = g(e._value, e.format.decimals); return b.fromValue(t.add(r), this.format.decimals, this.format); };
            b.prototype.subUnsafe = function (e) { this._checkFormat(e); var t = g(this._value, this.format.decimals), r = g(e._value, e.format.decimals); return b.fromValue(t.sub(r), this.format.decimals, this.format); };
            b.prototype.mulUnsafe = function (e) { this._checkFormat(e); var t = g(this._value, this.format.decimals), r = g(e._value, e.format.decimals); return b.fromValue(t.mul(r).div(this.format._multiplier), this.format.decimals, this.format); };
            b.prototype.divUnsafe = function (e) { this._checkFormat(e); var t = g(this._value, this.format.decimals), r = g(e._value, e.format.decimals); return b.fromValue(t.mul(this.format._multiplier).div(r), this.format.decimals, this.format); };
            b.prototype.floor = function () { var e = this.toString().split("."), t = b.from(e[0], this.format); var r = !e[1].match(/^(0*)$/); return this.isNegative() && r && (t = t.subUnsafe(y)), t; };
            b.prototype.ceiling = function () { var e = this.toString().split("."), t = b.from(e[0], this.format); var r = !e[1].match(/^(0*)$/); return !this.isNegative() && r && (t = t.addUnsafe(y)), t; };
            b.prototype.round = function (e) { null == e && (e = 0); var t = this.toString().split("."); if ((e < 0 || e > 80 || e % 1) && s.throwArgumentError("invalid decimal count", "decimals", e), t[1].length <= e)
                return this; var r = b.from("1" + h.substring(0, e)); return this.mulUnsafe(r).addUnsafe(v).floor().divUnsafe(r); };
            b.prototype.isZero = function () { return "0.0" === this._value; };
            b.prototype.isNegative = function () { return "-" === this._value[0]; };
            b.prototype.toString = function () { return this._value; };
            b.prototype.toHexString = function (e) { if (null == e)
                return this._hex; e % 8 && s.throwArgumentError("invalid byte width", "width", e); var t = a.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString(); return (0, n.hexZeroPad)(t, e / 8); };
            b.prototype.toUnsafeFloat = function () { return parseFloat(this.toString()); };
            b.prototype.toFormat = function (e) { return b.fromString(this._value, e); };
            b.fromValue = function (e, t, r) { return null != r || null == t || (0, a.Zm)(t) || (r = t, t = null), null == t && (t = 0), null == r && (r = "fixed"), b.fromString(p(e, t), m.from(r)); };
            b.fromString = function (e, t) { null == t && (t = "fixed"); var r = m.from(t), i = g(e, r.decimals); !r.signed && i.lt(l) && f("unsigned value cannot be negative", "overflow", "value", e); var o = null; r.signed ? o = i.toTwos(r.width).toHexString() : (o = i.toHexString(), o = (0, n.hexZeroPad)(o, r.width / 8)); var a = p(i, r.decimals); return new b(c, o, a, r); };
            b.fromBytes = function (e, t) { null == t && (t = "fixed"); var r = m.from(t); if ((0, n.arrayify)(e).length > r.width / 8)
                throw new Error("overflow"); var i = a.O$.from(e); r.signed && (i = i.fromTwos(r.width)); var o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(), s = p(i, r.decimals); return new b(c, o, s, r); };
            b.from = function (e, t) { if ("string" == typeof e)
                return b.fromString(e, t); if ((0, n.isBytes)(e))
                return b.fromBytes(e, t); try {
                return b.fromValue(e, 0, t);
            }
            catch (e) {
                if (e.code !== i.Logger.errors.INVALID_ARGUMENT)
                    throw e;
            } return s.throwArgumentError("invalid FixedNumber value", "value", e); };
            b.isFixedNumber = function (e) { return !(!e || !e._isFixedNumber); };
            return b;
        }());
        var y = b.from(1), v = b.from("0.5"), A = new i.Logger("units/5.0.10"), S = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
        function w(e) { var t = String(e).split("."); (t.length > 2 || !t[0].match(/^-?[0-9]*$/) || t[1] && !t[1].match(/^[0-9]*$/) || "." === e || "-." === e) && A.throwArgumentError("invalid value", "value", e); var r = t[0], n = ""; for ("-" === r.substring(0, 1) && (n = "-", r = r.substring(1)); "0" === r.substring(0, 1);)
            r = r.substring(1); "" === r && (r = "0"); var i = ""; for (2 === t.length && (i = "." + (t[1] || "0")); i.length > 2 && "0" === i[i.length - 1];)
            i = i.substring(0, i.length - 1); var o = []; for (; r.length;) {
            if (r.length <= 3) {
                o.unshift(r);
                break;
            }
            {
                var e_45 = r.length - 3;
                o.unshift(r.substring(e_45)), r = r.substring(0, e_45);
            }
        } return n + o.join(",") + i; }
        function E(e, t) { if ("string" == typeof t) {
            var e_46 = S.indexOf(t);
            -1 !== e_46 && (t = 3 * e_46);
        } return p(e, null != t ? t : 18); }
        function T(e, t) { if ("string" != typeof e && A.throwArgumentError("value must be a string", "value", e), "string" == typeof t) {
            var e_47 = S.indexOf(t);
            -1 !== e_47 && (t = 3 * e_47);
        } return g(e, null != t ? t : 18); }
        function k(e) { return E(e, 18); }
        function B(e) { return T(e, 18); }
    }, 4958: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { Wallet: function () { return A; }, verifyMessage: function () { return S; }, verifyTypedData: function () { return w; } });
        var n = r(4594), i = r(4353), o = r(8171), a = r(3286), s = r(3684), c = r(7827), l = r(1681), u = r(8197), f = r(3587), h = r(4478), d = r(2768), p = r(6883), g = r(1964), m = r(4377), b = r(711), y = function (e, t, r, n) { return new (r || (r = Promise))((function (i, o) { function a(e) { try {
            c(n.next(e));
        }
        catch (e) {
            o(e);
        } } function s(e) { try {
            c(n.throw(e));
        }
        catch (e) {
            o(e);
        } } function c(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) { e(t); }))).then(a, s); } c((n = n.apply(e, t || [])).next()); })); };
        var v = new b.Logger("wallet/5.0.11");
        var A = (function (_super) {
            __extends(A, _super);
            function A(e, t) {
                var _newTarget = this.constructor;
                var _this = this;
                if (v.checkNew(_newTarget, A), _this = _super.call(this) || this, null != (r = e) && (0, a.isHexString)(r.privateKey, 32) && null != r.address) {
                    var t_42 = new d.SigningKey(e.privateKey);
                    if ((0, f.defineReadOnly)(_this, "_signingKey", (function () { return t_42; })), (0, f.defineReadOnly)(_this, "address", (0, m.computeAddress)(_this.publicKey)), _this.address !== (0, n.getAddress)(e.address) && v.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), function (e) { var t = e.mnemonic; return t && t.phrase; }(e)) {
                        var t_43 = e.mnemonic;
                        (0, f.defineReadOnly)(_this, "_mnemonic", (function () { return ({ phrase: t_43.phrase, path: t_43.path || l.defaultPath, locale: t_43.locale || "en" }); }));
                        var r_45 = _this.mnemonic, n_33 = l.HDNode.fromMnemonic(r_45.phrase, null, r_45.locale).derivePath(r_45.path);
                        (0, m.computeAddress)(n_33.privateKey) !== _this.address && v.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]");
                    }
                    else
                        (0, f.defineReadOnly)(_this, "_mnemonic", (function () { return null; }));
                }
                else {
                    if (d.SigningKey.isSigningKey(e))
                        "secp256k1" !== e.curve && v.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), (0, f.defineReadOnly)(_this, "_signingKey", (function () { return e; }));
                    else {
                        "string" == typeof e && e.match(/^[0-9a-f]*$/i) && 64 === e.length && (e = "0x" + e);
                        var t_44 = new d.SigningKey(e);
                        (0, f.defineReadOnly)(_this, "_signingKey", (function () { return t_44; }));
                    }
                    (0, f.defineReadOnly)(_this, "_mnemonic", (function () { return null; })), (0, f.defineReadOnly)(_this, "address", (0, m.computeAddress)(_this.publicKey));
                }
                var r;
                t && !i.zt.isProvider(t) && v.throwArgumentError("invalid provider", "provider", t), (0, f.defineReadOnly)(_this, "provider", t || null);
                return _this;
            }
            Object.defineProperty(A.prototype, "mnemonic", {
                get: function () { return this._mnemonic(); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(A.prototype, "privateKey", {
                get: function () { return this._signingKey().privateKey; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(A.prototype, "publicKey", {
                get: function () { return this._signingKey().publicKey; },
                enumerable: false,
                configurable: true
            });
            A.prototype.getAddress = function () { return Promise.resolve(this.address); };
            A.prototype.connect = function (e) { return new A(this, e); };
            A.prototype.signTransaction = function (e) {
                var _this = this;
                return (0, f.resolveProperties)(e).then((function (t) { null != t.from && ((0, n.getAddress)(t.from) !== _this.address && v.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete t.from); var r = _this._signingKey().signDigest((0, u.keccak256)((0, m.serialize)(t))); return (0, m.serialize)(t, r); }));
            };
            A.prototype.signMessage = function (e) { return y(this, void 0, void 0, (function () { return __generator(this, function (_a) {
                return [2, (0, a.joinSignature)(this._signingKey().signDigest((0, s.r)(e)))];
            }); })); };
            A.prototype._signTypedData = function (e, t, r) { return y(this, void 0, void 0, (function () {
                var n;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, c.E.resolveNames(e, t, r, (function (e) { return (null == _this.provider && v.throwError("cannot resolve ENS names without a provider", b.Logger.errors.UNSUPPORTED_OPERATION, { operation: "resolveName", value: e }), _this.provider.resolveName(e)); }))];
                        case 1:
                            n = _a.sent();
                            return [2, (0, a.joinSignature)(this._signingKey().signDigest(c.E.hash(n.domain, t, n.value)))];
                    }
                });
            })); };
            A.prototype.encrypt = function (e, t, r) { if ("function" != typeof t || r || (r = t, t = {}), r && "function" != typeof r)
                throw new Error("invalid callback"); return t || (t = {}), (0, g.HI)(this, e, t, r); };
            A.createRandom = function (e) { var t = (0, h.O)(16); e || (e = {}), e.extraEntropy && (t = (0, a.arrayify)((0, a.hexDataSlice)((0, u.keccak256)((0, a.concat)([t, e.extraEntropy])), 0, 16))); var r = (0, l.entropyToMnemonic)(t, e.locale); return A.fromMnemonic(r, e.path, e.locale); };
            A.fromEncryptedJson = function (e, t, r) { return (0, p.decryptJsonWallet)(e, t, r).then((function (e) { return new A(e); })); };
            A.fromEncryptedJsonSync = function (e, t) { return new A((0, p.decryptJsonWalletSync)(e, t)); };
            A.fromMnemonic = function (e, t, r) { return t || (t = l.defaultPath), new A(l.HDNode.fromMnemonic(e, null, r).derivePath(t)); };
            return A;
        }(o.E));
        function S(e, t) { return (0, m.recoverAddress)((0, s.r)(e), t); }
        function w(e, t, r, n) { return (0, m.recoverAddress)(c.E.hash(e, t, r), n); }
    }, 8341: function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, { _fetchData: function () { return h; }, fetchJson: function () { return d; }, poll: function () { return p; } });
        var n = r(9567), i = r(3286), o = r(3587), a = r(4242), s = r(711);
        function c(e, t) { return r = this, n = void 0, a = function () { var r, n, o, a; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    null == t && (t = {});
                    r = { method: t.method || "GET", headers: t.headers || {}, body: t.body || void 0, mode: "cors", cache: "no-cache", credentials: "same-origin", redirect: "follow", referrer: "client" };
                    return [4, fetch(e, r)];
                case 1:
                    n = _a.sent();
                    return [4, n.arrayBuffer()];
                case 2:
                    o = _a.sent(), a = {};
                    return [2, (n.headers.forEach ? n.headers.forEach((function (e, t) { a[t.toLowerCase()] = e; })) : n.headers.keys().forEach((function (e) { a[e.toLowerCase()] = n.headers.get(e); })), { headers: a, statusCode: n.status, statusMessage: n.statusText, body: (0, i.arrayify)(new Uint8Array(o)) })];
            }
        }); }, new ((o = void 0) || (o = Promise))((function (e, t) { function i(e) { try {
            c(a.next(e));
        }
        catch (e) {
            t(e);
        } } function s(e) { try {
            c(a.throw(e));
        }
        catch (e) {
            t(e);
        } } function c(t) { var r; t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function (e) { e(r); }))).then(i, s); } c((a = a.apply(r, n || [])).next()); })); var r, n, o, a; }
        var l = new s.Logger("web/5.0.13");
        function u(e) { return new Promise((function (t) { setTimeout(t, e); })); }
        function f(e, t) { if (null == e)
            return null; if ("string" == typeof e)
            return e; if ((0, i.isBytesLike)(e)) {
            if (t && ("text" === t.split("/")[0] || "application/json" === t.split(";")[0].trim()))
                try {
                    return (0, a.ZN)(e);
                }
                catch (e) { }
            return (0, i.hexlify)(e);
        } return e; }
        function h(e, t, r) { var i = "object" == typeof e && null != e.throttleLimit ? e.throttleLimit : 12; l.assertArgument(i > 0 && i % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", i); var o = "object" == typeof e ? e.throttleCallback : null, h = "object" == typeof e && "number" == typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100; l.assertArgument(h > 0 && h % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", h); var d = {}; var p = null; var g = { method: "GET" }; var m = !1, b = 12e4; if ("string" == typeof e)
            p = e;
        else if ("object" == typeof e) {
            if (null != e && null != e.url || l.throwArgumentError("missing URL", "connection.url", e), p = e.url, "number" == typeof e.timeout && e.timeout > 0 && (b = e.timeout), e.headers)
                for (var t_45 in e.headers)
                    d[t_45.toLowerCase()] = { key: t_45, value: String(e.headers[t_45]) }, ["if-none-match", "if-modified-since"].indexOf(t_45.toLowerCase()) >= 0 && (m = !0);
            if (g.allowGzip = !!e.allowGzip, null != e.user && null != e.password) {
                "https:" !== p.substring(0, 6) && !0 !== e.allowInsecureAuthentication && l.throwError("basic authentication requires a secure https url", s.Logger.errors.INVALID_ARGUMENT, { argument: "url", url: p, user: e.user, password: "[REDACTED]" });
                var t_46 = e.user + ":" + e.password;
                d.authorization = { key: "Authorization", value: "Basic " + (0, n.c)((0, a.Y0)(t_46)) };
            }
        } t && (g.method = "POST", g.body = t, null == d["content-type"] && (d["content-type"] = { key: "Content-Type", value: "application/octet-stream" }), null == d["content-length"] && (d["content-length"] = { key: "Content-Length", value: String(t.length) })); var y = {}; Object.keys(d).forEach((function (e) { var t = d[e]; y[t.key] = t.value; })), g.headers = y; var v = function () { var e = null; return { promise: new Promise((function (t, r) { b && (e = setTimeout((function () { null != e && (e = null, r(l.makeError("timeout", s.Logger.errors.TIMEOUT, { requestBody: f(g.body, y["content-type"]), requestMethod: g.method, timeout: b, url: p }))); }), b)); })), cancel: function () { null != e && (clearTimeout(e), e = null); } }; }(), A = function () { return e = this, t = void 0, a = function () { var e_49, t_47, r_47, _a, r_48, n_34, e_48, n_35, e_50, r_46, t_48, _b, t_49; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    e_49 = 0;
                    _c.label = 1;
                case 1:
                    if (!(e_49 < i)) return [3, 19];
                    t_47 = null;
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 8, , 9]);
                    return [4, c(p, g)];
                case 3:
                    if (!(t_47 = _c.sent(), 429 === t_47.statusCode && e_49 < i)) return [3, 7];
                    r_47 = !0;
                    _a = o;
                    if (!_a) return [3, 5];
                    return [4, o(e_49, p)];
                case 4:
                    _a = (r_47 = _c.sent());
                    _c.label = 5;
                case 5:
                    if (!(_a, r_47)) return [3, 7];
                    r_48 = 0;
                    n_34 = t_47.headers["retry-after"];
                    r_48 = "string" == typeof n_34 && n_34.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(n_34) : h * parseInt(String(Math.random() * Math.pow(2, e_49)));
                    return [4, u(r_48)];
                case 6:
                    _c.sent();
                    return [3, 18];
                case 7: return [3, 9];
                case 8:
                    e_48 = _c.sent();
                    t_47 = e_48.response, null == t_47 && (v.cancel(), l.throwError("missing response", s.Logger.errors.SERVER_ERROR, { requestBody: f(g.body, y["content-type"]), requestMethod: g.method, serverError: e_48, url: p }));
                    return [3, 9];
                case 9:
                    n_35 = t_47.body;
                    if (!(m && 304 === t_47.statusCode ? n_35 = null : (t_47.statusCode < 200 || t_47.statusCode >= 300) && (v.cancel(), l.throwError("bad response", s.Logger.errors.SERVER_ERROR, { status: t_47.statusCode, headers: t_47.headers, body: f(n_35, t_47.headers ? t_47.headers["content-type"] : null), requestBody: f(g.body, y["content-type"]), requestMethod: g.method, url: p })), r)) return [3, 17];
                    _c.label = 10;
                case 10:
                    _c.trys.push([10, 12, , 17]);
                    return [4, r(n_35, t_47)];
                case 11:
                    e_50 = _c.sent();
                    return [2, (v.cancel(), e_50)];
                case 12:
                    r_46 = _c.sent();
                    if (!(r_46.throttleRetry && e_49 < i)) return [3, 16];
                    t_48 = !0;
                    _b = o;
                    if (!_b) return [3, 14];
                    return [4, o(e_49, p)];
                case 13:
                    _b = (t_48 = _c.sent());
                    _c.label = 14;
                case 14:
                    if (!(_b, t_48)) return [3, 16];
                    t_49 = h * parseInt(String(Math.random() * Math.pow(2, e_49)));
                    return [4, u(t_49)];
                case 15:
                    _c.sent();
                    return [3, 18];
                case 16:
                    v.cancel(), l.throwError("processing response error", s.Logger.errors.SERVER_ERROR, { body: f(n_35, t_47.headers ? t_47.headers["content-type"] : null), error: r_46, requestBody: f(g.body, y["content-type"]), requestMethod: g.method, url: p });
                    return [3, 17];
                case 17: return [2, (v.cancel(), n_35)];
                case 18:
                    e_49++;
                    return [3, 1];
                case 19: return [2, l.throwError("failed response", s.Logger.errors.SERVER_ERROR, { requestBody: f(g.body, y["content-type"]), requestMethod: g.method, url: p })];
            }
        }); }, new ((n = void 0) || (n = Promise))((function (r, i) { function o(e) { try {
            c(a.next(e));
        }
        catch (e) {
            i(e);
        } } function s(e) { try {
            c(a.throw(e));
        }
        catch (e) {
            i(e);
        } } function c(e) { var t; e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(o, s); } c((a = a.apply(e, t || [])).next()); })); var e, t, n, a; }(); return Promise.race([v.promise, A]); }
        function d(e, t, r) { var n = null; if (null != t) {
            n = (0, a.Y0)(t);
            var r_49 = "string" == typeof e ? { url: e } : (0, o.shallowCopy)(e);
            r_49.headers ? 0 !== Object.keys(r_49.headers).filter((function (e) { return "content-type" === e.toLowerCase(); })).length || (r_49.headers = (0, o.shallowCopy)(r_49.headers), r_49.headers["content-type"] = "application/json") : r_49.headers = { "content-type": "application/json" }, e = r_49;
        } return h(e, n, (function (e, t) { var n = null; if (null != e)
            try {
                n = JSON.parse((0, a.ZN)(e));
            }
            catch (t) {
                l.throwError("invalid JSON", s.Logger.errors.SERVER_ERROR, { body: e, error: t });
            } return r && (n = r(n, t)), n; })); }
        function p(e, t) { return t || (t = {}), null == (t = (0, o.shallowCopy)(t)).floor && (t.floor = 0), null == t.ceiling && (t.ceiling = 1e4), null == t.interval && (t.interval = 250), new Promise((function (r, n) { var i = null, o = !1; var a = function () { return !o && (o = !0, i && clearTimeout(i), !0); }; t.timeout && (i = setTimeout((function () { a() && n(new Error("timeout")); }), t.timeout)); var s = t.retryLimit; var c = 0; !function i() { return e().then((function (e) { if (void 0 !== e)
            a() && r(e);
        else if (t.oncePoll)
            t.oncePoll.once("poll", i);
        else if (t.onceBlock)
            t.onceBlock.once("block", i);
        else if (!o) {
            if (c++, c > s)
                return void (a() && n(new Error("retry limit reached")));
            var e_51 = t.interval * parseInt(String(Math.random() * Math.pow(2, c)));
            e_51 < t.floor && (e_51 = t.floor), e_51 > t.ceiling && (e_51 = t.ceiling), setTimeout(i, e_51);
        } return null; }), (function (e) { a() && n(e); })); }(); })); }
    }, 4085: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.fromBER = ue, t.compareSchema = fe, t.verifySchema = function (e, t) { if (t instanceof Object == 0)
            return { verified: !1, result: { error: "Wrong ASN.1 schema type" } }; var r = ue(e); return -1 === r.offset ? { verified: !1, result: r.result } : fe(r.result, r.result, t); }, t.fromJSON = function (e) { }, t.RawData = t.Repeated = t.Any = t.Choice = t.TIME = t.Duration = t.DateTime = t.TimeOfDay = t.DATE = t.GeneralizedTime = t.UTCTime = t.CharacterString = t.GeneralString = t.VisibleString = t.GraphicString = t.IA5String = t.VideotexString = t.TeletexString = t.PrintableString = t.NumericString = t.UniversalString = t.BmpString = t.RelativeObjectIdentifier = t.Utf8String = t.ObjectIdentifier = t.Enumerated = t.Integer = t.BitString = t.OctetString = t.Null = t.Set = t.Sequence = t.Boolean = t.EndOfContent = t.Constructed = t.Primitive = t.BaseBlock = t.ValueBlock = t.HexBlock = void 0;
        var n = r(9595);
        var i = [new Uint8Array([1])], o = "0123456789";
        var a = (function () {
            function a(e) {
                if (e === void 0) { e = {}; }
                this.blockLength = (0, n.getParametersValue)(e, "blockLength", 0), this.error = (0, n.getParametersValue)(e, "error", ""), this.warnings = (0, n.getParametersValue)(e, "warnings", []), this.valueBeforeDecode = "valueBeforeDecode" in e ? e.valueBeforeDecode.slice(0) : new ArrayBuffer(0);
            }
            a.blockName = function () { return "baseBlock"; };
            a.prototype.toJSON = function () { return { blockName: this.constructor.blockName(), blockLength: this.blockLength, error: this.error, warnings: this.warnings, valueBeforeDecode: (0, n.bufferToHexCodes)(this.valueBeforeDecode, 0, this.valueBeforeDecode.byteLength) }; };
            return a;
        }());
        var s = function (e) { return (function (_super) {
            __extends(class_8, _super);
            function class_8(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.isHexOnly = (0, n.getParametersValue)(e, "isHexOnly", !1), _this.valueHex = "valueHex" in e ? e.valueHex.slice(0) : new ArrayBuffer(0);
                return _this;
            }
            class_8.blockName = function () { return "hexBlock"; };
            class_8.prototype.fromBER = function (e, t, r) { return !1 === (0, n.checkBufferParams)(this, e, t, r) ? -1 : 0 === new Uint8Array(e, t, r).length ? (this.warnings.push("Zero buffer length"), t) : (this.valueHex = e.slice(t, t + r), this.blockLength = r, t + r); };
            class_8.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                return !0 !== this.isHexOnly ? (this.error = 'Flag "isHexOnly" is not set, abort', new ArrayBuffer(0)) : !0 === e ? new ArrayBuffer(this.valueHex.byteLength) : this.valueHex.slice(0);
            };
            class_8.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.blockName = this.constructor.blockName(), e.isHexOnly = this.isHexOnly, e.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e; };
            return class_8;
        }(e)); };
        t.HexBlock = s;
        var c = (function (_super) {
            __extends(c, _super);
            function c(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this) || this, "idBlock" in e ? (_this.isHexOnly = (0, n.getParametersValue)(e.idBlock, "isHexOnly", !1), _this.valueHex = (0, n.getParametersValue)(e.idBlock, "valueHex", new ArrayBuffer(0)), _this.tagClass = (0, n.getParametersValue)(e.idBlock, "tagClass", -1), _this.tagNumber = (0, n.getParametersValue)(e.idBlock, "tagNumber", -1), _this.isConstructed = (0, n.getParametersValue)(e.idBlock, "isConstructed", !1)) : (_this.tagClass = -1, _this.tagNumber = -1, _this.isConstructed = !1);
                return _this;
            }
            c.blockName = function () { return "identificationBlock"; };
            c.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t, r, i = 0;
                switch (this.tagClass) {
                    case 1:
                        i |= 0;
                        break;
                    case 2:
                        i |= 64;
                        break;
                    case 3:
                        i |= 128;
                        break;
                    case 4:
                        i |= 192;
                        break;
                    default: return this.error = "Unknown tag class", new ArrayBuffer(0);
                }
                if (this.isConstructed && (i |= 32), this.tagNumber < 31 && !this.isHexOnly) {
                    if (t = new ArrayBuffer(1), r = new Uint8Array(t), !e) {
                        var e_52 = this.tagNumber;
                        e_52 &= 31, i |= e_52, r[0] = i;
                    }
                    return t;
                }
                if (!1 === this.isHexOnly) {
                    var o_11 = (0, n.utilToBase)(this.tagNumber, 7), a_9 = new Uint8Array(o_11), s_10 = o_11.byteLength;
                    if (t = new ArrayBuffer(s_10 + 1), r = new Uint8Array(t), r[0] = 31 | i, !e) {
                        for (var e_53 = 0; e_53 < s_10 - 1; e_53++)
                            r[e_53 + 1] = 128 | a_9[e_53];
                        r[s_10] = a_9[s_10 - 1];
                    }
                    return t;
                }
                if (t = new ArrayBuffer(this.valueHex.byteLength + 1), r = new Uint8Array(t), r[0] = 31 | i, !1 === e) {
                    var e_54 = new Uint8Array(this.valueHex);
                    for (var t_50 = 0; t_50 < e_54.length - 1; t_50++)
                        r[t_50 + 1] = 128 | e_54[t_50];
                    r[this.valueHex.byteLength] = e_54[e_54.length - 1];
                }
                return t;
            };
            c.prototype.fromBER = function (e, t, r) { if (!1 === (0, n.checkBufferParams)(this, e, t, r))
                return -1; var i = new Uint8Array(e, t, r); if (0 === i.length)
                return this.error = "Zero buffer length", -1; switch (192 & i[0]) {
                case 0:
                    this.tagClass = 1;
                    break;
                case 64:
                    this.tagClass = 2;
                    break;
                case 128:
                    this.tagClass = 3;
                    break;
                case 192:
                    this.tagClass = 4;
                    break;
                default: return this.error = "Unknown tag class", -1;
            } this.isConstructed = 32 == (32 & i[0]), this.isHexOnly = !1; var o = 31 & i[0]; if (31 !== o)
                this.tagNumber = o, this.blockLength = 1;
            else {
                var e_55 = 1;
                this.valueHex = new ArrayBuffer(255);
                var t_51 = 255, r_50 = new Uint8Array(this.valueHex);
                for (; 128 & i[e_55];) {
                    if (r_50[e_55 - 1] = 127 & i[e_55], e_55++, e_55 >= i.length)
                        return this.error = "End of input reached before message was fully decoded", -1;
                    if (e_55 === t_51) {
                        t_51 += 255;
                        var e_56 = new ArrayBuffer(t_51), n_36 = new Uint8Array(e_56);
                        for (var e_57 = 0; e_57 < r_50.length; e_57++)
                            n_36[e_57] = r_50[e_57];
                        this.valueHex = new ArrayBuffer(t_51), r_50 = new Uint8Array(this.valueHex);
                    }
                }
                this.blockLength = e_55 + 1, r_50[e_55 - 1] = 127 & i[e_55];
                var o_12 = new ArrayBuffer(e_55), a_10 = new Uint8Array(o_12);
                for (var t_52 = 0; t_52 < e_55; t_52++)
                    a_10[t_52] = r_50[t_52];
                this.valueHex = new ArrayBuffer(e_55), r_50 = new Uint8Array(this.valueHex), r_50.set(a_10), this.blockLength <= 9 ? this.tagNumber = (0, n.utilFromBase)(r_50, 7) : (this.isHexOnly = !0, this.warnings.push("Tag too long, represented as hex-coded"));
            } if (1 === this.tagClass && this.isConstructed)
                switch (this.tagNumber) {
                    case 1:
                    case 2:
                    case 5:
                    case 6:
                    case 9:
                    case 13:
                    case 14:
                    case 23:
                    case 24:
                    case 31:
                    case 32:
                    case 33:
                    case 34: return this.error = "Constructed encoding used for primitive type", -1;
                } return t + this.blockLength; };
            c.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.blockName = this.constructor.blockName(), e.tagClass = this.tagClass, e.tagNumber = this.tagNumber, e.isConstructed = this.isConstructed, e; };
            return c;
        }((s(a))));
        var l = (function (_super) {
            __extends(l, _super);
            function l(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this) || this, "lenBlock" in e ? (_this.isIndefiniteForm = (0, n.getParametersValue)(e.lenBlock, "isIndefiniteForm", !1), _this.longFormUsed = (0, n.getParametersValue)(e.lenBlock, "longFormUsed", !1), _this.length = (0, n.getParametersValue)(e.lenBlock, "length", 0)) : (_this.isIndefiniteForm = !1, _this.longFormUsed = !1, _this.length = 0);
                return _this;
            }
            l.blockName = function () { return "lengthBlock"; };
            l.prototype.fromBER = function (e, t, r) { if (!1 === (0, n.checkBufferParams)(this, e, t, r))
                return -1; var i = new Uint8Array(e, t, r); if (0 === i.length)
                return this.error = "Zero buffer length", -1; if (255 === i[0])
                return this.error = "Length block 0xFF is reserved by standard", -1; if (this.isIndefiniteForm = 128 === i[0], !0 === this.isIndefiniteForm)
                return this.blockLength = 1, t + this.blockLength; if (this.longFormUsed = !!(128 & i[0]), !1 === this.longFormUsed)
                return this.length = i[0], this.blockLength = 1, t + this.blockLength; var o = 127 & i[0]; if (o > 8)
                return this.error = "Too big integer", -1; if (o + 1 > i.length)
                return this.error = "End of input reached before message was fully decoded", -1; var a = new Uint8Array(o); for (var e_58 = 0; e_58 < o; e_58++)
                a[e_58] = i[e_58 + 1]; return 0 === a[o - 1] && this.warnings.push("Needlessly long encoded length"), this.length = (0, n.utilFromBase)(a, 8), this.longFormUsed && this.length <= 127 && this.warnings.push("Unneccesary usage of long length form"), this.blockLength = o + 1, t + this.blockLength; };
            l.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t, r;
                if (this.length > 127 && (this.longFormUsed = !0), this.isIndefiniteForm)
                    return t = new ArrayBuffer(1), !1 === e && (r = new Uint8Array(t), r[0] = 128), t;
                if (!0 === this.longFormUsed) {
                    var i_22 = (0, n.utilToBase)(this.length, 8);
                    if (i_22.byteLength > 127)
                        return this.error = "Too big length", new ArrayBuffer(0);
                    if (t = new ArrayBuffer(i_22.byteLength + 1), !0 === e)
                        return t;
                    var o_13 = new Uint8Array(i_22);
                    r = new Uint8Array(t), r[0] = 128 | i_22.byteLength;
                    for (var e_59 = 0; e_59 < i_22.byteLength; e_59++)
                        r[e_59 + 1] = o_13[e_59];
                    return t;
                }
                return t = new ArrayBuffer(1), !1 === e && (r = new Uint8Array(t), r[0] = this.length), t;
            };
            l.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.blockName = this.constructor.blockName(), e.isIndefiniteForm = this.isIndefiniteForm, e.longFormUsed = this.longFormUsed, e.length = this.length, e; };
            return l;
        }(a));
        var u = (function (_super) {
            __extends(u, _super);
            function u(e) {
                if (e === void 0) { e = {}; }
                return _super.call(this, e) || this;
            }
            u.blockName = function () { return "valueBlock"; };
            u.prototype.fromBER = function (e, t, r) { throw TypeError('User need to make a specific function in a class which extends "ValueBlock"'); };
            u.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                throw TypeError('User need to make a specific function in a class which extends "ValueBlock"');
            };
            return u;
        }(a));
        t.ValueBlock = u;
        var f = (function (_super) {
            __extends(f, _super);
            function f(e, t) {
                if (e === void 0) { e = {}; }
                if (t === void 0) { t = u; }
                var _this = this;
                _this = _super.call(this, e) || this, "name" in e && (_this.name = e.name), "optional" in e && (_this.optional = e.optional), "primitiveSchema" in e && (_this.primitiveSchema = e.primitiveSchema), _this.idBlock = new c(e), _this.lenBlock = new l(e), _this.valueBlock = new t(e);
                return _this;
            }
            f.blockName = function () { return "BaseBlock"; };
            f.prototype.fromBER = function (e, t, r) { var n = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length); return -1 === n ? (this.error = this.valueBlock.error, n) : (0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), n); };
            f.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t;
                var r = this.idBlock.toBER(e), i = this.valueBlock.toBER(!0);
                this.lenBlock.length = i.byteLength;
                var o = this.lenBlock.toBER(e);
                var a;
                if (t = (0, n.utilConcatBuf)(r, o), a = !1 === e ? this.valueBlock.toBER(e) : new ArrayBuffer(this.lenBlock.length), t = (0, n.utilConcatBuf)(t, a), !0 === this.lenBlock.isIndefiniteForm) {
                    var r_51 = new ArrayBuffer(2);
                    if (!1 === e) {
                        var e_60 = new Uint8Array(r_51);
                        e_60[0] = 0, e_60[1] = 0;
                    }
                    t = (0, n.utilConcatBuf)(t, r_51);
                }
                return t;
            };
            f.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.idBlock = this.idBlock.toJSON(), e.lenBlock = this.lenBlock.toJSON(), e.valueBlock = this.valueBlock.toJSON(), "name" in this && (e.name = this.name), "optional" in this && (e.optional = this.optional), "primitiveSchema" in this && (e.primitiveSchema = this.primitiveSchema.toJSON()), e; };
            return f;
        }(a));
        t.BaseBlock = f;
        var h = (function (_super) {
            __extends(h, _super);
            function h(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.valueHex = "valueHex" in e ? e.valueHex.slice(0) : new ArrayBuffer(0), _this.isHexOnly = (0, n.getParametersValue)(e, "isHexOnly", !0);
                return _this;
            }
            h.prototype.fromBER = function (e, t, r) { if (!1 === (0, n.checkBufferParams)(this, e, t, r))
                return -1; var i = new Uint8Array(e, t, r); if (0 === i.length)
                return this.warnings.push("Zero buffer length"), t; this.valueHex = new ArrayBuffer(i.length); var o = new Uint8Array(this.valueHex); for (var e_61 = 0; e_61 < i.length; e_61++)
                o[e_61] = i[e_61]; return this.blockLength = r, t + r; };
            h.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                return this.valueHex.slice(0);
            };
            h.blockName = function () { return "PrimitiveValueBlock"; };
            h.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e.isHexOnly = this.isHexOnly, e; };
            return h;
        }(u));
        var d = (function (_super) {
            __extends(d, _super);
            function d(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, h) || this, _this.idBlock.isConstructed = !1;
                return _this;
            }
            d.blockName = function () { return "PRIMITIVE"; };
            return d;
        }(f));
        t.Primitive = d;
        var p = (function (_super) {
            __extends(p, _super);
            function p(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.value = (0, n.getParametersValue)(e, "value", []), _this.isIndefiniteForm = (0, n.getParametersValue)(e, "isIndefiniteForm", !1);
                return _this;
            }
            p.prototype.fromBER = function (e, t, r) { var i = t, o = r; if (!1 === (0, n.checkBufferParams)(this, e, t, r))
                return -1; if (0 === new Uint8Array(e, t, r).length)
                return this.warnings.push("Zero buffer length"), t; var a = t; for (; (!0 === this.isIndefiniteForm ? 1 : r) > 0;) {
                var t_53 = le(e, a, r);
                if (-1 === t_53.offset)
                    return this.error = t_53.result.error, this.warnings.concat(t_53.result.warnings), -1;
                if (a = t_53.offset, this.blockLength += t_53.result.blockLength, r -= t_53.result.blockLength, this.value.push(t_53.result), !0 === this.isIndefiniteForm && t_53.result.constructor.blockName() === b.blockName())
                    break;
            } return !0 === this.isIndefiniteForm && (this.value[this.value.length - 1].constructor.blockName() === b.blockName() ? this.value.pop() : this.warnings.push("No EndOfContent block encoded")), this.valueBeforeDecode = e.slice(i, i + o), a; };
            p.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t = new ArrayBuffer(0);
                for (var r_52 = 0; r_52 < this.value.length; r_52++) {
                    var i_23 = this.value[r_52].toBER(e);
                    t = (0, n.utilConcatBuf)(t, i_23);
                }
                return t;
            };
            p.blockName = function () { return "ConstructedValueBlock"; };
            p.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } e.isIndefiniteForm = this.isIndefiniteForm, e.value = []; for (var t_54 = 0; t_54 < this.value.length; t_54++)
                e.value.push(this.value[t_54].toJSON()); return e; };
            return p;
        }(u));
        var g = (function (_super) {
            __extends(g, _super);
            function g(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, p) || this, _this.idBlock.isConstructed = !0;
                return _this;
            }
            g.blockName = function () { return "CONSTRUCTED"; };
            g.prototype.fromBER = function (e, t, r) { this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm; var n = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length); return -1 === n ? (this.error = this.valueBlock.error, n) : (0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), n); };
            return g;
        }(f));
        t.Constructed = g;
        var m = (function (_super) {
            __extends(m, _super);
            function m(e) {
                if (e === void 0) { e = {}; }
                return _super.call(this, e) || this;
            }
            m.prototype.fromBER = function (e, t, r) { return t; };
            m.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                return new ArrayBuffer(0);
            };
            m.blockName = function () { return "EndOfContentValueBlock"; };
            return m;
        }(u));
        var b = (function (_super) {
            __extends(b, _super);
            function b(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, m) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 0;
                return _this;
            }
            b.blockName = function () { return "EndOfContent"; };
            return b;
        }(f));
        t.EndOfContent = b;
        var y = (function (_super) {
            __extends(y, _super);
            function y(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.value = (0, n.getParametersValue)(e, "value", !1), _this.isHexOnly = (0, n.getParametersValue)(e, "isHexOnly", !1), "valueHex" in e ? _this.valueHex = e.valueHex.slice(0) : (_this.valueHex = new ArrayBuffer(1), !0 === _this.value && (new Uint8Array(_this.valueHex)[0] = 255));
                return _this;
            }
            y.prototype.fromBER = function (e, t, r) { if (!1 === (0, n.checkBufferParams)(this, e, t, r))
                return -1; var i = new Uint8Array(e, t, r); r > 1 && this.warnings.push("Boolean value encoded in more then 1 octet"), this.isHexOnly = !0, this.valueHex = new ArrayBuffer(i.length); var o = new Uint8Array(this.valueHex); for (var e_62 = 0; e_62 < i.length; e_62++)
                o[e_62] = i[e_62]; return 0 !== n.utilDecodeTC.call(this) ? this.value = !0 : this.value = !1, this.blockLength = r, t + r; };
            y.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                return this.valueHex;
            };
            y.blockName = function () { return "BooleanValueBlock"; };
            y.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.value = this.value, e.isHexOnly = this.isHexOnly, e.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e; };
            return y;
        }(u));
        var v = (function (_super) {
            __extends(v, _super);
            function v(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, y) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 1;
                return _this;
            }
            v.blockName = function () { return "Boolean"; };
            return v;
        }(f));
        t.Boolean = v;
        var A = (function (_super) {
            __extends(A, _super);
            function A(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 16;
                return _this;
            }
            A.blockName = function () { return "Sequence"; };
            return A;
        }(g));
        t.Sequence = A;
        var S = (function (_super) {
            __extends(S, _super);
            function S(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 17;
                return _this;
            }
            S.blockName = function () { return "Set"; };
            return S;
        }(g));
        t.Set = S;
        var w = (function (_super) {
            __extends(w, _super);
            function w(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, a) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 5;
                return _this;
            }
            w.blockName = function () { return "Null"; };
            w.prototype.fromBER = function (e, t, r) { return this.lenBlock.length > 0 && this.warnings.push("Non-zero length of value block for Null type"), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), this.blockLength += r, t + r > e.byteLength ? (this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", -1) : t + r; };
            w.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t = new ArrayBuffer(2);
                if (!0 === e)
                    return t;
                var r = new Uint8Array(t);
                return r[0] = 5, r[1] = 0, t;
            };
            return w;
        }(f));
        t.Null = w;
        var E = (function (_super) {
            __extends(E, _super);
            function E(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.isConstructed = (0, n.getParametersValue)(e, "isConstructed", !1);
                return _this;
            }
            E.prototype.fromBER = function (e, t, r) { var n = 0; if (!0 === this.isConstructed) {
                if (this.isHexOnly = !1, n = p.prototype.fromBER.call(this, e, t, r), -1 === n)
                    return n;
                for (var e_63 = 0; e_63 < this.value.length; e_63++) {
                    var t_55 = this.value[e_63].constructor.blockName();
                    if (t_55 === b.blockName()) {
                        if (!0 === this.isIndefiniteForm)
                            break;
                        return this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only", -1;
                    }
                    if (t_55 !== T.blockName())
                        return this.error = "OCTET STRING may consists of OCTET STRINGs only", -1;
                }
            }
            else
                this.isHexOnly = !0, n = _super.prototype.fromBER.call(this, e, t, r), this.blockLength = r; return n; };
            E.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                if (!0 === this.isConstructed)
                    return p.prototype.toBER.call(this, e);
                var t = new ArrayBuffer(this.valueHex.byteLength);
                return !0 === e || 0 === this.valueHex.byteLength || (t = this.valueHex.slice(0)), t;
            };
            E.blockName = function () { return "OctetStringValueBlock"; };
            E.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.isConstructed = this.isConstructed, e.isHexOnly = this.isHexOnly, e.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e; };
            return E;
        }((s(p))));
        var T = (function (_super) {
            __extends(T, _super);
            function T(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, E) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 4;
                return _this;
            }
            T.prototype.fromBER = function (e, t, r) { return this.valueBlock.isConstructed = this.idBlock.isConstructed, this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm, 0 === r ? (0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), t) : _super.prototype.fromBER.call(this, e, t, r); };
            T.blockName = function () { return "OctetString"; };
            T.prototype.isEqual = function (e) { return e instanceof T != 0 && JSON.stringify(this) === JSON.stringify(e); };
            return T;
        }(f));
        t.OctetString = T;
        var k = (function (_super) {
            __extends(k, _super);
            function k(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.unusedBits = (0, n.getParametersValue)(e, "unusedBits", 0), _this.isConstructed = (0, n.getParametersValue)(e, "isConstructed", !1), _this.blockLength = _this.valueHex.byteLength;
                return _this;
            }
            k.prototype.fromBER = function (e, t, r) { if (0 === r)
                return t; var i = -1; if (!0 === this.isConstructed) {
                if (i = p.prototype.fromBER.call(this, e, t, r), -1 === i)
                    return i;
                for (var e_64 = 0; e_64 < this.value.length; e_64++) {
                    var t_56 = this.value[e_64].constructor.blockName();
                    if (t_56 === b.blockName()) {
                        if (!0 === this.isIndefiniteForm)
                            break;
                        return this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only", -1;
                    }
                    if (t_56 !== B.blockName())
                        return this.error = "BIT STRING may consists of BIT STRINGs only", -1;
                    if (this.unusedBits > 0 && this.value[e_64].valueBlock.unusedBits > 0)
                        return this.error = 'Usign of "unused bits" inside constructive BIT STRING allowed for least one only', -1;
                    if (this.unusedBits = this.value[e_64].valueBlock.unusedBits, this.unusedBits > 7)
                        return this.error = "Unused bits for BitString must be in range 0-7", -1;
                }
                return i;
            } if (!1 === (0, n.checkBufferParams)(this, e, t, r))
                return -1; var o = new Uint8Array(e, t, r); if (this.unusedBits = o[0], this.unusedBits > 7)
                return this.error = "Unused bits for BitString must be in range 0-7", -1; this.valueHex = new ArrayBuffer(o.length - 1); var a = new Uint8Array(this.valueHex); for (var e_65 = 0; e_65 < r - 1; e_65++)
                a[e_65] = o[e_65 + 1]; return this.blockLength = o.length, t + r; };
            k.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                if (!0 === this.isConstructed)
                    return p.prototype.toBER.call(this, e);
                if (!0 === e)
                    return new ArrayBuffer(this.valueHex.byteLength + 1);
                if (0 === this.valueHex.byteLength)
                    return new ArrayBuffer(0);
                var t = new Uint8Array(this.valueHex), r = new ArrayBuffer(this.valueHex.byteLength + 1), n = new Uint8Array(r);
                n[0] = this.unusedBits;
                for (var e_66 = 0; e_66 < this.valueHex.byteLength; e_66++)
                    n[e_66 + 1] = t[e_66];
                return r;
            };
            k.blockName = function () { return "BitStringValueBlock"; };
            k.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.unusedBits = this.unusedBits, e.isConstructed = this.isConstructed, e.isHexOnly = this.isHexOnly, e.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e; };
            return k;
        }((s(p))));
        var B = (function (_super) {
            __extends(B, _super);
            function B(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, k) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 3;
                return _this;
            }
            B.blockName = function () { return "BitString"; };
            B.prototype.fromBER = function (e, t, r) { return 0 === r ? t : (this.valueBlock.isConstructed = this.idBlock.isConstructed, this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm, _super.prototype.fromBER.call(this, e, t, r)); };
            B.prototype.isEqual = function (e) { return e instanceof B != 0 && JSON.stringify(this) === JSON.stringify(e); };
            return B;
        }(f));
        t.BitString = B;
        var M = (function (_super) {
            __extends(M, _super);
            function M(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, "value" in e && (_this.valueDec = e.value);
                return _this;
            }
            Object.defineProperty(M.prototype, "valueHex", {
                get: function () { return this._valueHex; },
                set: function (e) { this._valueHex = e.slice(0), e.byteLength >= 4 ? (this.warnings.push("Too big Integer for decoding, hex only"), this.isHexOnly = !0, this._valueDec = 0) : (this.isHexOnly = !1, e.byteLength > 0 && (this._valueDec = n.utilDecodeTC.call(this))); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(M.prototype, "valueDec", {
                get: function () { return this._valueDec; },
                set: function (e) { this._valueDec = e, this.isHexOnly = !1, this._valueHex = (0, n.utilEncodeTC)(e); },
                enumerable: false,
                configurable: true
            });
            M.prototype.fromDER = function (e, t, r, n) {
                if (n === void 0) { n = 0; }
                var i = this.fromBER(e, t, r);
                if (-1 === i)
                    return i;
                var o = new Uint8Array(this._valueHex);
                if (0 === o[0] && 0 != (128 & o[1])) {
                    var e_67 = new ArrayBuffer(this._valueHex.byteLength - 1);
                    new Uint8Array(e_67).set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1)), this._valueHex = e_67.slice(0);
                }
                else if (0 !== n && this._valueHex.byteLength < n) {
                    n - this._valueHex.byteLength > 1 && (n = this._valueHex.byteLength + 1);
                    var e_68 = new ArrayBuffer(n);
                    new Uint8Array(e_68).set(o, n - this._valueHex.byteLength), this._valueHex = e_68.slice(0);
                }
                return i;
            };
            M.prototype.toDER = function (e) {
                if (e === void 0) { e = !1; }
                var t = new Uint8Array(this._valueHex);
                switch (!0) {
                    case 0 != (128 & t[0]):
                        {
                            var e_69 = new ArrayBuffer(this._valueHex.byteLength + 1), r_53 = new Uint8Array(e_69);
                            r_53[0] = 0, r_53.set(t, 1), this._valueHex = e_69.slice(0);
                        }
                        break;
                    case 0 === t[0] && 0 == (128 & t[1]): {
                        var e_70 = new ArrayBuffer(this._valueHex.byteLength - 1);
                        new Uint8Array(e_70).set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1)), this._valueHex = e_70.slice(0);
                    }
                }
                return this.toBER(e);
            };
            M.prototype.fromBER = function (e, t, r) { var n = _super.prototype.fromBER.call(this, e, t, r); return -1 === n ? n : (this.blockLength = r, t + r); };
            M.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                return this.valueHex.slice(0);
            };
            M.blockName = function () { return "IntegerValueBlock"; };
            M.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.valueDec = this.valueDec, e; };
            M.prototype.toString = function () { function e(e, t) { var r = new Uint8Array([0]); var i = new Uint8Array(e), o = new Uint8Array(t), a = i.slice(0); var s = a.length - 1; var c = o.slice(0); var l = c.length - 1; var u = 0, f = 0; for (var e_71 = l < s ? s : l; e_71 >= 0; e_71--, f++) {
                switch (!0) {
                    case f < c.length:
                        u = a[s - f] + c[l - f] + r[0];
                        break;
                    default: u = a[s - f] + r[0];
                }
                switch (r[0] = u / 10, !0) {
                    case f >= a.length:
                        a = (0, n.utilConcatView)(new Uint8Array([u % 10]), a);
                        break;
                    default: a[s - f] = u % 10;
                }
            } return r[0] > 0 && (a = (0, n.utilConcatView)(r, a)), a.slice(0); } function t(e) { if (e >= i.length)
                for (var t_57 = i.length; t_57 <= e; t_57++) {
                    var e_72 = new Uint8Array([0]);
                    var r_54 = i[t_57 - 1].slice(0);
                    for (var t_58 = r_54.length - 1; t_58 >= 0; t_58--) {
                        var n_37 = new Uint8Array([(r_54[t_58] << 1) + e_72[0]]);
                        e_72[0] = n_37[0] / 10, r_54[t_58] = n_37[0] % 10;
                    }
                    e_72[0] > 0 && (r_54 = (0, n.utilConcatView)(e_72, r_54)), i.push(r_54);
                } return i[e]; } function r(e, t) { var r = 0, n = new Uint8Array(e), i = new Uint8Array(t), o = n.slice(0); var a = o.length - 1; var s = i.slice(0); var c = s.length - 1; var l, u = 0; for (var e_73 = c; e_73 >= 0; e_73--, u++)
                switch (l = o[a - u] - s[c - u] - r, !0) {
                    case l < 0:
                        r = 1, o[a - u] = l + 10;
                        break;
                    default: r = 0, o[a - u] = l;
                } if (r > 0)
                for (var e_74 = a - c + 1; e_74 >= 0; e_74--, u++) {
                    if (l = o[a - u] - r, !(l < 0)) {
                        r = 0, o[a - u] = l;
                        break;
                    }
                    r = 1, o[a - u] = l + 10;
                } return o.slice(); } var a = 8 * this._valueHex.byteLength - 1; var s, c = new Uint8Array(8 * this._valueHex.byteLength / 3), l = 0; var u = new Uint8Array(this._valueHex); var f = "", h = !1; for (var n_38 = this._valueHex.byteLength - 1; n_38 >= 0; n_38--) {
                s = u[n_38];
                for (var n_39 = 0; n_39 < 8; n_39++) {
                    if (1 == (1 & s))
                        switch (l) {
                            case a:
                                c = r(t(l), c), f = "-";
                                break;
                            default: c = e(c, t(l));
                        }
                    l++, s >>= 1;
                }
            } for (var e_75 = 0; e_75 < c.length; e_75++)
                c[e_75] && (h = !0), h && (f += o.charAt(c[e_75])); return !1 === h && (f += o.charAt(0)), f; };
            return M;
        }((s(u))));
        var C = (function (_super) {
            __extends(C, _super);
            function C(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, M) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 2;
                return _this;
            }
            C.blockName = function () { return "Integer"; };
            C.prototype.isEqual = function (e) { return e instanceof C ? this.valueBlock.isHexOnly && e.valueBlock.isHexOnly ? (0, n.isEqualBuffer)(this.valueBlock.valueHex, e.valueBlock.valueHex) : this.valueBlock.isHexOnly === e.valueBlock.isHexOnly && this.valueBlock.valueDec === e.valueBlock.valueDec : e instanceof ArrayBuffer && (0, n.isEqualBuffer)(this.valueBlock.valueHex, e); };
            C.prototype.convertToDER = function () { var e = new C({ valueHex: this.valueBlock.valueHex }); return e.valueBlock.toDER(), e; };
            C.prototype.convertFromDER = function () { var e = this.valueBlock.valueHex.byteLength % 2 ? this.valueBlock.valueHex.byteLength + 1 : this.valueBlock.valueHex.byteLength, t = new C({ valueHex: this.valueBlock.valueHex }); return t.valueBlock.fromDER(t.valueBlock.valueHex, 0, t.valueBlock.valueHex.byteLength, e), t; };
            return C;
        }(f));
        t.Integer = C;
        var L = (function (_super) {
            __extends(L, _super);
            function L(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 10;
                return _this;
            }
            L.blockName = function () { return "Enumerated"; };
            return L;
        }(C));
        t.Enumerated = L;
        var P = (function (_super) {
            __extends(P, _super);
            function P(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.valueDec = (0, n.getParametersValue)(e, "valueDec", -1), _this.isFirstSid = (0, n.getParametersValue)(e, "isFirstSid", !1);
                return _this;
            }
            P.blockName = function () { return "sidBlock"; };
            P.prototype.fromBER = function (e, t, r) { if (0 === r)
                return t; if (!1 === (0, n.checkBufferParams)(this, e, t, r))
                return -1; var i = new Uint8Array(e, t, r); this.valueHex = new ArrayBuffer(r); var o = new Uint8Array(this.valueHex); for (var e_76 = 0; e_76 < r && (o[e_76] = 127 & i[e_76], this.blockLength++, 0 != (128 & i[e_76])); e_76++)
                ; var a = new ArrayBuffer(this.blockLength), s = new Uint8Array(a); for (var e_77 = 0; e_77 < this.blockLength; e_77++)
                s[e_77] = o[e_77]; return this.valueHex = a.slice(0), o = new Uint8Array(this.valueHex), 0 != (128 & i[this.blockLength - 1]) ? (this.error = "End of input reached before message was fully decoded", -1) : (0 === o[0] && this.warnings.push("Needlessly long format of SID encoding"), this.blockLength <= 8 ? this.valueDec = (0, n.utilFromBase)(o, 7) : (this.isHexOnly = !0, this.warnings.push("Too big SID for decoding, hex only")), t + this.blockLength); };
            P.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t, r;
                if (this.isHexOnly) {
                    if (!0 === e)
                        return new ArrayBuffer(this.valueHex.byteLength);
                    var n_40 = new Uint8Array(this.valueHex);
                    t = new ArrayBuffer(this.blockLength), r = new Uint8Array(t);
                    for (var e_78 = 0; e_78 < this.blockLength - 1; e_78++)
                        r[e_78] = 128 | n_40[e_78];
                    return r[this.blockLength - 1] = n_40[this.blockLength - 1], t;
                }
                var i = (0, n.utilToBase)(this.valueDec, 7);
                if (0 === i.byteLength)
                    return this.error = "Error during encoding SID value", new ArrayBuffer(0);
                if (t = new ArrayBuffer(i.byteLength), !1 === e) {
                    var e_79 = new Uint8Array(i);
                    r = new Uint8Array(t);
                    for (var t_59 = 0; t_59 < i.byteLength - 1; t_59++)
                        r[t_59] = 128 | e_79[t_59];
                    r[i.byteLength - 1] = e_79[i.byteLength - 1];
                }
                return t;
            };
            P.prototype.toString = function () { var e = ""; if (!0 === this.isHexOnly)
                e = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
            else if (this.isFirstSid) {
                var t_60 = this.valueDec;
                this.valueDec <= 39 ? e = "0." : this.valueDec <= 79 ? (e = "1.", t_60 -= 40) : (e = "2.", t_60 -= 80), e += t_60.toString();
            }
            else
                e = this.valueDec.toString(); return e; };
            P.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.valueDec = this.valueDec, e.isFirstSid = this.isFirstSid, e; };
            return P;
        }((s(a))));
        var F = (function (_super) {
            __extends(F, _super);
            function F(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.fromString((0, n.getParametersValue)(e, "value", ""));
                return _this;
            }
            F.prototype.fromBER = function (e, t, r) { var n = t; for (; r > 0;) {
                var t_61 = new P;
                if (n = t_61.fromBER(e, n, r), -1 === n)
                    return this.blockLength = 0, this.error = t_61.error, n;
                0 === this.value.length && (t_61.isFirstSid = !0), this.blockLength += t_61.blockLength, r -= t_61.blockLength, this.value.push(t_61);
            } return n; };
            F.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t = new ArrayBuffer(0);
                for (var r_55 = 0; r_55 < this.value.length; r_55++) {
                    var i_24 = this.value[r_55].toBER(e);
                    if (0 === i_24.byteLength)
                        return this.error = this.value[r_55].error, new ArrayBuffer(0);
                    t = (0, n.utilConcatBuf)(t, i_24);
                }
                return t;
            };
            F.prototype.fromString = function (e) { this.value = []; var t = 0, r = 0, n = "", i = !1; do {
                if (r = e.indexOf(".", t), n = -1 === r ? e.substr(t) : e.substr(t, r - t), t = r + 1, i) {
                    var e_80 = this.value[0];
                    var t_62 = 0;
                    switch (e_80.valueDec) {
                        case 0: break;
                        case 1:
                            t_62 = 40;
                            break;
                        case 2:
                            t_62 = 80;
                            break;
                        default: return this.value = [], !1;
                    }
                    var r_56 = parseInt(n, 10);
                    if (isNaN(r_56))
                        return !0;
                    e_80.valueDec = r_56 + t_62, i = !1;
                }
                else {
                    var e_81 = new P;
                    if (e_81.valueDec = parseInt(n, 10), isNaN(e_81.valueDec))
                        return !0;
                    0 === this.value.length && (e_81.isFirstSid = !0, i = !0), this.value.push(e_81);
                }
            } while (-1 !== r); return !0; };
            F.prototype.toString = function () { var e = "", t = !1; for (var r_57 = 0; r_57 < this.value.length; r_57++) {
                t = this.value[r_57].isHexOnly;
                var n_41 = this.value[r_57].toString();
                0 !== r_57 && (e = e + "."), t ? (n_41 = "{" + n_41 + "}", this.value[r_57].isFirstSid ? e = "2.{" + n_41 + " - 80}" : e += n_41) : e += n_41;
            } return e; };
            F.blockName = function () { return "ObjectIdentifierValueBlock"; };
            F.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } e.value = this.toString(), e.sidArray = []; for (var t_63 = 0; t_63 < this.value.length; t_63++)
                e.sidArray.push(this.value[t_63].toJSON()); return e; };
            return F;
        }(u));
        var N = (function (_super) {
            __extends(N, _super);
            function N(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, F) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 6;
                return _this;
            }
            N.blockName = function () { return "ObjectIdentifier"; };
            return N;
        }(f));
        t.ObjectIdentifier = N;
        var x = (function (_super) {
            __extends(x, _super);
            function x(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.isHexOnly = !0, _this.value = "";
                return _this;
            }
            x.blockName = function () { return "Utf8StringValueBlock"; };
            x.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.value = this.value, e; };
            return x;
        }((s(a))));
        var R = (function (_super) {
            __extends(R, _super);
            function R(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, x) || this, "value" in e && _this.fromString(e.value), _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 12;
                return _this;
            }
            R.blockName = function () { return "Utf8String"; };
            R.prototype.fromBER = function (e, t, r) { var n = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length); return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), n); };
            R.prototype.fromBuffer = function (e) { this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(e)); try {
                this.valueBlock.value = decodeURIComponent(escape(this.valueBlock.value));
            }
            catch (e) {
                this.warnings.push("Error during \"decodeURIComponent\": " + e + ", using raw string");
            } };
            R.prototype.fromString = function (e) { var t = unescape(encodeURIComponent(e)), r = t.length; this.valueBlock.valueHex = new ArrayBuffer(r); var n = new Uint8Array(this.valueBlock.valueHex); for (var e_82 = 0; e_82 < r; e_82++)
                n[e_82] = t.charCodeAt(e_82); this.valueBlock.value = e; };
            return R;
        }(f));
        t.Utf8String = R;
        var O = (function (_super) {
            __extends(O, _super);
            function O(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.valueDec = (0, n.getParametersValue)(e, "valueDec", -1);
                return _this;
            }
            O.blockName = function () { return "relativeSidBlock"; };
            O.prototype.fromBER = function (e, t, r) { if (0 === r)
                return t; if (!1 === (0, n.checkBufferParams)(this, e, t, r))
                return -1; var i = new Uint8Array(e, t, r); this.valueHex = new ArrayBuffer(r); var o = new Uint8Array(this.valueHex); for (var e_83 = 0; e_83 < r && (o[e_83] = 127 & i[e_83], this.blockLength++, 0 != (128 & i[e_83])); e_83++)
                ; var a = new ArrayBuffer(this.blockLength), s = new Uint8Array(a); for (var e_84 = 0; e_84 < this.blockLength; e_84++)
                s[e_84] = o[e_84]; return this.valueHex = a.slice(0), o = new Uint8Array(this.valueHex), 0 != (128 & i[this.blockLength - 1]) ? (this.error = "End of input reached before message was fully decoded", -1) : (0 === o[0] && this.warnings.push("Needlessly long format of SID encoding"), this.blockLength <= 8 ? this.valueDec = (0, n.utilFromBase)(o, 7) : (this.isHexOnly = !0, this.warnings.push("Too big SID for decoding, hex only")), t + this.blockLength); };
            O.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t, r;
                if (this.isHexOnly) {
                    if (!0 === e)
                        return new ArrayBuffer(this.valueHex.byteLength);
                    var n_42 = new Uint8Array(this.valueHex);
                    t = new ArrayBuffer(this.blockLength), r = new Uint8Array(t);
                    for (var e_85 = 0; e_85 < this.blockLength - 1; e_85++)
                        r[e_85] = 128 | n_42[e_85];
                    return r[this.blockLength - 1] = n_42[this.blockLength - 1], t;
                }
                var i = (0, n.utilToBase)(this.valueDec, 7);
                if (0 === i.byteLength)
                    return this.error = "Error during encoding SID value", new ArrayBuffer(0);
                if (t = new ArrayBuffer(i.byteLength), !1 === e) {
                    var e_86 = new Uint8Array(i);
                    r = new Uint8Array(t);
                    for (var t_64 = 0; t_64 < i.byteLength - 1; t_64++)
                        r[t_64] = 128 | e_86[t_64];
                    r[i.byteLength - 1] = e_86[i.byteLength - 1];
                }
                return t;
            };
            O.prototype.toString = function () { var e = ""; return e = !0 === this.isHexOnly ? (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength) : this.valueDec.toString(), e; };
            O.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.valueDec = this.valueDec, e; };
            return O;
        }((s(a))));
        var I = (function (_super) {
            __extends(I, _super);
            function I(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.fromString((0, n.getParametersValue)(e, "value", ""));
                return _this;
            }
            I.prototype.fromBER = function (e, t, r) { var n = t; for (; r > 0;) {
                var t_65 = new O;
                if (n = t_65.fromBER(e, n, r), -1 === n)
                    return this.blockLength = 0, this.error = t_65.error, n;
                this.blockLength += t_65.blockLength, r -= t_65.blockLength, this.value.push(t_65);
            } return n; };
            I.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                var t = new ArrayBuffer(0);
                for (var r_58 = 0; r_58 < this.value.length; r_58++) {
                    var i_25 = this.value[r_58].toBER(e);
                    if (0 === i_25.byteLength)
                        return this.error = this.value[r_58].error, new ArrayBuffer(0);
                    t = (0, n.utilConcatBuf)(t, i_25);
                }
                return t;
            };
            I.prototype.fromString = function (e) { this.value = []; var t = 0, r = 0, n = ""; do {
                r = e.indexOf(".", t), n = -1 === r ? e.substr(t) : e.substr(t, r - t), t = r + 1;
                var i_26 = new O;
                if (i_26.valueDec = parseInt(n, 10), isNaN(i_26.valueDec))
                    return !0;
                this.value.push(i_26);
            } while (-1 !== r); return !0; };
            I.prototype.toString = function () { var e = "", t = !1; for (var r_59 = 0; r_59 < this.value.length; r_59++) {
                t = this.value[r_59].isHexOnly;
                var n_43 = this.value[r_59].toString();
                0 !== r_59 && (e = e + "."), t ? (n_43 = "{" + n_43 + "}", e += n_43) : e += n_43;
            } return e; };
            I.blockName = function () { return "RelativeObjectIdentifierValueBlock"; };
            I.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } e.value = this.toString(), e.sidArray = []; for (var t_66 = 0; t_66 < this.value.length; t_66++)
                e.sidArray.push(this.value[t_66].toJSON()); return e; };
            return I;
        }(u));
        var D = (function (_super) {
            __extends(D, _super);
            function D(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, I) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 13;
                return _this;
            }
            D.blockName = function () { return "RelativeObjectIdentifier"; };
            return D;
        }(f));
        t.RelativeObjectIdentifier = D;
        var J = (function (_super) {
            __extends(J, _super);
            function J(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.isHexOnly = !0, _this.value = "";
                return _this;
            }
            J.blockName = function () { return "BmpStringValueBlock"; };
            J.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.value = this.value, e; };
            return J;
        }((s(a))));
        var _ = (function (_super) {
            __extends(_, _super);
            function _(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, J) || this, "value" in e && _this.fromString(e.value), _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 30;
                return _this;
            }
            _.blockName = function () { return "BmpString"; };
            _.prototype.fromBER = function (e, t, r) { var n = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length); return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), n); };
            _.prototype.fromBuffer = function (e) { var t = e.slice(0), r = new Uint8Array(t); for (var e_87 = 0; e_87 < r.length; e_87 += 2) {
                var t_67 = r[e_87];
                r[e_87] = r[e_87 + 1], r[e_87 + 1] = t_67;
            } this.valueBlock.value = String.fromCharCode.apply(null, new Uint16Array(t)); };
            _.prototype.fromString = function (e) { var t = e.length; this.valueBlock.valueHex = new ArrayBuffer(2 * t); var r = new Uint8Array(this.valueBlock.valueHex); for (var i_27 = 0; i_27 < t; i_27++) {
                var t_68 = (0, n.utilToBase)(e.charCodeAt(i_27), 8), o_14 = new Uint8Array(t_68);
                if (o_14.length > 2)
                    continue;
                var a_11 = 2 - o_14.length;
                for (var e_88 = o_14.length - 1; e_88 >= 0; e_88--)
                    r[2 * i_27 + e_88 + a_11] = o_14[e_88];
            } this.valueBlock.value = e; };
            return _;
        }(f));
        t.BmpString = _;
        var U = (function (_super) {
            __extends(U, _super);
            function U(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.isHexOnly = !0, _this.value = "";
                return _this;
            }
            U.blockName = function () { return "UniversalStringValueBlock"; };
            U.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.value = this.value, e; };
            return U;
        }((s(a))));
        var H = (function (_super) {
            __extends(H, _super);
            function H(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, U) || this, "value" in e && _this.fromString(e.value), _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 28;
                return _this;
            }
            H.blockName = function () { return "UniversalString"; };
            H.prototype.fromBER = function (e, t, r) { var n = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length); return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), n); };
            H.prototype.fromBuffer = function (e) { var t = e.slice(0), r = new Uint8Array(t); for (var e_89 = 0; e_89 < r.length; e_89 += 4)
                r[e_89] = r[e_89 + 3], r[e_89 + 1] = r[e_89 + 2], r[e_89 + 2] = 0, r[e_89 + 3] = 0; this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(t)); };
            H.prototype.fromString = function (e) { var t = e.length; this.valueBlock.valueHex = new ArrayBuffer(4 * t); var r = new Uint8Array(this.valueBlock.valueHex); for (var i_28 = 0; i_28 < t; i_28++) {
                var t_69 = (0, n.utilToBase)(e.charCodeAt(i_28), 8), o_15 = new Uint8Array(t_69);
                if (o_15.length > 4)
                    continue;
                var a_12 = 4 - o_15.length;
                for (var e_90 = o_15.length - 1; e_90 >= 0; e_90--)
                    r[4 * i_28 + e_90 + a_12] = o_15[e_90];
            } this.valueBlock.value = e; };
            return H;
        }(f));
        t.UniversalString = H;
        var X = (function (_super) {
            __extends(X, _super);
            function X(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.value = "", _this.isHexOnly = !0;
                return _this;
            }
            X.blockName = function () { return "SimpleStringValueBlock"; };
            X.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.value = this.value, e; };
            return X;
        }((s(a))));
        var V = (function (_super) {
            __extends(V, _super);
            function V(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e, X) || this, "value" in e && _this.fromString(e.value);
                return _this;
            }
            V.blockName = function () { return "SIMPLESTRING"; };
            V.prototype.fromBER = function (e, t, r) { var n = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length); return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), n); };
            V.prototype.fromBuffer = function (e) { this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(e)); };
            V.prototype.fromString = function (e) { var t = e.length; this.valueBlock.valueHex = new ArrayBuffer(t); var r = new Uint8Array(this.valueBlock.valueHex); for (var n_44 = 0; n_44 < t; n_44++)
                r[n_44] = e.charCodeAt(n_44); this.valueBlock.value = e; };
            return V;
        }(f));
        var G = (function (_super) {
            __extends(G, _super);
            function G(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 18;
                return _this;
            }
            G.blockName = function () { return "NumericString"; };
            return G;
        }(V));
        t.NumericString = G;
        var z = (function (_super) {
            __extends(z, _super);
            function z(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 19;
                return _this;
            }
            z.blockName = function () { return "PrintableString"; };
            return z;
        }(V));
        t.PrintableString = z;
        var j = (function (_super) {
            __extends(j, _super);
            function j(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 20;
                return _this;
            }
            j.blockName = function () { return "TeletexString"; };
            return j;
        }(V));
        t.TeletexString = j;
        var K = (function (_super) {
            __extends(K, _super);
            function K(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 21;
                return _this;
            }
            K.blockName = function () { return "VideotexString"; };
            return K;
        }(V));
        t.VideotexString = K;
        var Z = (function (_super) {
            __extends(Z, _super);
            function Z(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 22;
                return _this;
            }
            Z.blockName = function () { return "IA5String"; };
            return Z;
        }(V));
        t.IA5String = Z;
        var q = (function (_super) {
            __extends(q, _super);
            function q(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 25;
                return _this;
            }
            q.blockName = function () { return "GraphicString"; };
            return q;
        }(V));
        t.GraphicString = q;
        var Q = (function (_super) {
            __extends(Q, _super);
            function Q(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 26;
                return _this;
            }
            Q.blockName = function () { return "VisibleString"; };
            return Q;
        }(V));
        t.VisibleString = Q;
        var W = (function (_super) {
            __extends(W, _super);
            function W(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 27;
                return _this;
            }
            W.blockName = function () { return "GeneralString"; };
            return W;
        }(V));
        t.GeneralString = W;
        var Y = (function (_super) {
            __extends(Y, _super);
            function Y(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 29;
                return _this;
            }
            Y.blockName = function () { return "CharacterString"; };
            return Y;
        }(V));
        t.CharacterString = Y;
        var $ = (function (_super) {
            __extends($, _super);
            function $(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                if (_this = _super.call(this, e) || this, _this.year = 0, _this.month = 0, _this.day = 0, _this.hour = 0, _this.minute = 0, _this.second = 0, "value" in e) {
                    _this.fromString(e.value), _this.valueBlock.valueHex = new ArrayBuffer(e.value.length);
                    var t_70 = new Uint8Array(_this.valueBlock.valueHex);
                    for (var r_60 = 0; r_60 < e.value.length; r_60++)
                        t_70[r_60] = e.value.charCodeAt(r_60);
                }
                "valueDate" in e && (_this.fromDate(e.valueDate), _this.valueBlock.valueHex = _this.toBuffer()), _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 23;
                return _this;
            }
            $.prototype.fromBER = function (e, t, r) { var n = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length); return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), n); };
            $.prototype.fromBuffer = function (e) { this.fromString(String.fromCharCode.apply(null, new Uint8Array(e))); };
            $.prototype.toBuffer = function () { var e = this.toString(), t = new ArrayBuffer(e.length), r = new Uint8Array(t); for (var t_71 = 0; t_71 < e.length; t_71++)
                r[t_71] = e.charCodeAt(t_71); return t; };
            $.prototype.fromDate = function (e) { this.year = e.getUTCFullYear(), this.month = e.getUTCMonth() + 1, this.day = e.getUTCDate(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds(); };
            $.prototype.toDate = function () { return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second)); };
            $.prototype.fromString = function (e) { var t = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/gi.exec(e); if (null === t)
                return void (this.error = "Wrong input string for convertion"); var r = parseInt(t[1], 10); this.year = r >= 50 ? 1900 + r : 2e3 + r, this.month = parseInt(t[2], 10), this.day = parseInt(t[3], 10), this.hour = parseInt(t[4], 10), this.minute = parseInt(t[5], 10), this.second = parseInt(t[6], 10); };
            $.prototype.toString = function () { var e = new Array(7); return e[0] = (0, n.padNumber)(this.year < 2e3 ? this.year - 1900 : this.year - 2e3, 2), e[1] = (0, n.padNumber)(this.month, 2), e[2] = (0, n.padNumber)(this.day, 2), e[3] = (0, n.padNumber)(this.hour, 2), e[4] = (0, n.padNumber)(this.minute, 2), e[5] = (0, n.padNumber)(this.second, 2), e[6] = "Z", e.join(""); };
            $.blockName = function () { return "UTCTime"; };
            $.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.year = this.year, e.month = this.month, e.day = this.day, e.hour = this.hour, e.minute = this.minute, e.second = this.second, e; };
            return $;
        }(Q));
        t.UTCTime = $;
        var ee = (function (_super) {
            __extends(ee, _super);
            function ee(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                if (_this = _super.call(this, e) || this, _this.year = 0, _this.month = 0, _this.day = 0, _this.hour = 0, _this.minute = 0, _this.second = 0, _this.millisecond = 0, "value" in e) {
                    _this.fromString(e.value), _this.valueBlock.valueHex = new ArrayBuffer(e.value.length);
                    var t_72 = new Uint8Array(_this.valueBlock.valueHex);
                    for (var r_61 = 0; r_61 < e.value.length; r_61++)
                        t_72[r_61] = e.value.charCodeAt(r_61);
                }
                "valueDate" in e && (_this.fromDate(e.valueDate), _this.valueBlock.valueHex = _this.toBuffer()), _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 24;
                return _this;
            }
            ee.prototype.fromBER = function (e, t, r) { var n = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length); return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), n); };
            ee.prototype.fromBuffer = function (e) { this.fromString(String.fromCharCode.apply(null, new Uint8Array(e))); };
            ee.prototype.toBuffer = function () { var e = this.toString(), t = new ArrayBuffer(e.length), r = new Uint8Array(t); for (var t_73 = 0; t_73 < e.length; t_73++)
                r[t_73] = e.charCodeAt(t_73); return t; };
            ee.prototype.fromDate = function (e) { this.year = e.getUTCFullYear(), this.month = e.getUTCMonth() + 1, this.day = e.getUTCDate(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds(), this.millisecond = e.getUTCMilliseconds(); };
            ee.prototype.toDate = function () { return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)); };
            ee.prototype.fromString = function (e) { var t, r = !1, n = "", i = "", o = 0, a = 0, s = 0; if ("Z" === e[e.length - 1])
                n = e.substr(0, e.length - 1), r = !0;
            else {
                var t_74 = new Number(e[e.length - 1]);
                if (isNaN(t_74.valueOf()))
                    throw new Error("Wrong input string for convertion");
                n = e;
            } if (r) {
                if (-1 !== n.indexOf("+"))
                    throw new Error("Wrong input string for convertion");
                if (-1 !== n.indexOf("-"))
                    throw new Error("Wrong input string for convertion");
            }
            else {
                var e_91 = 1, t_75 = n.indexOf("+"), r_62 = "";
                if (-1 === t_75 && (t_75 = n.indexOf("-"), e_91 = -1), -1 !== t_75) {
                    if (r_62 = n.substr(t_75 + 1), n = n.substr(0, t_75), 2 !== r_62.length && 4 !== r_62.length)
                        throw new Error("Wrong input string for convertion");
                    var i_29 = new Number(r_62.substr(0, 2));
                    if (isNaN(i_29.valueOf()))
                        throw new Error("Wrong input string for convertion");
                    if (a = e_91 * i_29, 4 === r_62.length) {
                        if (i_29 = new Number(r_62.substr(2, 2)), isNaN(i_29.valueOf()))
                            throw new Error("Wrong input string for convertion");
                        s = e_91 * i_29;
                    }
                }
            } var c = n.indexOf("."); if (-1 === c && (c = n.indexOf(",")), -1 !== c) {
                var e_92 = new Number("0" + n.substr(c));
                if (isNaN(e_92.valueOf()))
                    throw new Error("Wrong input string for convertion");
                o = e_92.valueOf(), i = n.substr(0, c);
            }
            else
                i = n; switch (!0) {
                case 8 === i.length:
                    if (t = /(\d{4})(\d{2})(\d{2})/gi, -1 !== c)
                        throw new Error("Wrong input string for convertion");
                    break;
                case 10 === i.length:
                    if (t = /(\d{4})(\d{2})(\d{2})(\d{2})/gi, -1 !== c) {
                        var e_93 = 60 * o;
                        this.minute = Math.floor(e_93), e_93 = 60 * (e_93 - this.minute), this.second = Math.floor(e_93), e_93 = 1e3 * (e_93 - this.second), this.millisecond = Math.floor(e_93);
                    }
                    break;
                case 12 === i.length:
                    if (t = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/gi, -1 !== c) {
                        var e_94 = 60 * o;
                        this.second = Math.floor(e_94), e_94 = 1e3 * (e_94 - this.second), this.millisecond = Math.floor(e_94);
                    }
                    break;
                case 14 === i.length:
                    if (t = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gi, -1 !== c) {
                        var e_95 = 1e3 * o;
                        this.millisecond = Math.floor(e_95);
                    }
                    break;
                default: throw new Error("Wrong input string for convertion");
            } var l = t.exec(i); if (null === l)
                throw new Error("Wrong input string for convertion"); for (var e_96 = 1; e_96 < l.length; e_96++)
                switch (e_96) {
                    case 1:
                        this.year = parseInt(l[e_96], 10);
                        break;
                    case 2:
                        this.month = parseInt(l[e_96], 10);
                        break;
                    case 3:
                        this.day = parseInt(l[e_96], 10);
                        break;
                    case 4:
                        this.hour = parseInt(l[e_96], 10) + a;
                        break;
                    case 5:
                        this.minute = parseInt(l[e_96], 10) + s;
                        break;
                    case 6:
                        this.second = parseInt(l[e_96], 10);
                        break;
                    default: throw new Error("Wrong input string for convertion");
                } if (!1 === r) {
                var e_97 = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
                this.year = e_97.getUTCFullYear(), this.month = e_97.getUTCMonth(), this.day = e_97.getUTCDay(), this.hour = e_97.getUTCHours(), this.minute = e_97.getUTCMinutes(), this.second = e_97.getUTCSeconds(), this.millisecond = e_97.getUTCMilliseconds();
            } };
            ee.prototype.toString = function () { var e = []; return e.push((0, n.padNumber)(this.year, 4)), e.push((0, n.padNumber)(this.month, 2)), e.push((0, n.padNumber)(this.day, 2)), e.push((0, n.padNumber)(this.hour, 2)), e.push((0, n.padNumber)(this.minute, 2)), e.push((0, n.padNumber)(this.second, 2)), 0 !== this.millisecond && (e.push("."), e.push((0, n.padNumber)(this.millisecond, 3))), e.push("Z"), e.join(""); };
            ee.blockName = function () { return "GeneralizedTime"; };
            ee.prototype.toJSON = function () { var e = {}; try {
                e = _super.prototype.toJSON.call(this);
            }
            catch (e) { } return e.year = this.year, e.month = this.month, e.day = this.day, e.hour = this.hour, e.minute = this.minute, e.second = this.second, e.millisecond = this.millisecond, e; };
            return ee;
        }(Q));
        t.GeneralizedTime = ee;
        var te = (function (_super) {
            __extends(te, _super);
            function te(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 31;
                return _this;
            }
            te.blockName = function () { return "DATE"; };
            return te;
        }(R));
        t.DATE = te;
        var re = (function (_super) {
            __extends(re, _super);
            function re(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 32;
                return _this;
            }
            re.blockName = function () { return "TimeOfDay"; };
            return re;
        }(R));
        t.TimeOfDay = re;
        var ne = (function (_super) {
            __extends(ne, _super);
            function ne(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 33;
                return _this;
            }
            ne.blockName = function () { return "DateTime"; };
            return ne;
        }(R));
        t.DateTime = ne;
        var ie = (function (_super) {
            __extends(ie, _super);
            function ie(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 34;
                return _this;
            }
            ie.blockName = function () { return "Duration"; };
            return ie;
        }(R));
        t.Duration = ie;
        var oe = (function (_super) {
            __extends(oe, _super);
            function oe(e) {
                if (e === void 0) { e = {}; }
                var _this = this;
                _this = _super.call(this, e) || this, _this.idBlock.tagClass = 1, _this.idBlock.tagNumber = 14;
                return _this;
            }
            oe.blockName = function () { return "TIME"; };
            return oe;
        }(R));
        t.TIME = oe;
        var ae = (function () {
            function ae(e) {
                if (e === void 0) { e = {}; }
                this.value = (0, n.getParametersValue)(e, "value", []), this.optional = (0, n.getParametersValue)(e, "optional", !1);
            }
            return ae;
        }());
        t.Choice = ae;
        var se = (function () {
            function se(e) {
                if (e === void 0) { e = {}; }
                this.name = (0, n.getParametersValue)(e, "name", ""), this.optional = (0, n.getParametersValue)(e, "optional", !1);
            }
            return se;
        }());
        t.Any = se;
        var ce = (function () {
            function ce(e) {
                if (e === void 0) { e = {}; }
                this.name = (0, n.getParametersValue)(e, "name", ""), this.optional = (0, n.getParametersValue)(e, "optional", !1), this.value = (0, n.getParametersValue)(e, "value", new se), this.local = (0, n.getParametersValue)(e, "local", !1);
            }
            return ce;
        }());
        function le(e, t, r) { var i = t; var o = new f({}, Object); var s = new a; if (!1 === (0, n.checkBufferParams)(s, e, t, r))
            return o.error = s.error, { offset: -1, result: o }; if (0 === new Uint8Array(e, t, r).length)
            return this.error = "Zero buffer length", { offset: -1, result: o }; var c = o.idBlock.fromBER(e, t, r); if (o.warnings.concat(o.idBlock.warnings), -1 === c)
            return o.error = o.idBlock.error, { offset: -1, result: o }; if (t = c, r -= o.idBlock.blockLength, c = o.lenBlock.fromBER(e, t, r), o.warnings.concat(o.lenBlock.warnings), -1 === c)
            return o.error = o.lenBlock.error, { offset: -1, result: o }; if (t = c, r -= o.lenBlock.blockLength, !1 === o.idBlock.isConstructed && !0 === o.lenBlock.isIndefiniteForm)
            return o.error = "Indefinite length form used for primitive encoding form", { offset: -1, result: o }; var l = f; switch (o.idBlock.tagClass) {
            case 1:
                if (o.idBlock.tagNumber >= 37 && !1 === o.idBlock.isHexOnly)
                    return o.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard", { offset: -1, result: o };
                switch (o.idBlock.tagNumber) {
                    case 0:
                        if (!0 === o.idBlock.isConstructed && o.lenBlock.length > 0)
                            return o.error = "Type [UNIVERSAL 0] is reserved", { offset: -1, result: o };
                        l = b;
                        break;
                    case 1:
                        l = v;
                        break;
                    case 2:
                        l = C;
                        break;
                    case 3:
                        l = B;
                        break;
                    case 4:
                        l = T;
                        break;
                    case 5:
                        l = w;
                        break;
                    case 6:
                        l = N;
                        break;
                    case 10:
                        l = L;
                        break;
                    case 12:
                        l = R;
                        break;
                    case 13:
                        l = D;
                        break;
                    case 14:
                        l = oe;
                        break;
                    case 15: return o.error = "[UNIVERSAL 15] is reserved by ASN.1 standard", { offset: -1, result: o };
                    case 16:
                        l = A;
                        break;
                    case 17:
                        l = S;
                        break;
                    case 18:
                        l = G;
                        break;
                    case 19:
                        l = z;
                        break;
                    case 20:
                        l = j;
                        break;
                    case 21:
                        l = K;
                        break;
                    case 22:
                        l = Z;
                        break;
                    case 23:
                        l = $;
                        break;
                    case 24:
                        l = ee;
                        break;
                    case 25:
                        l = q;
                        break;
                    case 26:
                        l = Q;
                        break;
                    case 27:
                        l = W;
                        break;
                    case 28:
                        l = H;
                        break;
                    case 29:
                        l = Y;
                        break;
                    case 30:
                        l = _;
                        break;
                    case 31:
                        l = te;
                        break;
                    case 32:
                        l = re;
                        break;
                    case 33:
                        l = ne;
                        break;
                    case 34:
                        l = ie;
                        break;
                    default: {
                        var n_45;
                        n_45 = !0 === o.idBlock.isConstructed ? new g : new d, n_45.idBlock = o.idBlock, n_45.lenBlock = o.lenBlock, n_45.warnings = o.warnings, o = n_45, c = o.fromBER(e, t, r);
                    }
                }
                break;
            case 2:
            case 3:
            case 4:
            default: l = !0 === o.idBlock.isConstructed ? g : d;
        } return o = function (e, t) { if (e instanceof t)
            return e; var r = new t; return r.idBlock = e.idBlock, r.lenBlock = e.lenBlock, r.warnings = e.warnings, r.valueBeforeDecode = e.valueBeforeDecode.slice(0), r; }(o, l), c = o.fromBER(e, t, !0 === o.lenBlock.isIndefiniteForm ? r : o.lenBlock.length), o.valueBeforeDecode = e.slice(i, i + o.blockLength), { offset: c, result: o }; }
        function ue(e) { if (0 === e.byteLength) {
            var e_98 = new f({}, Object);
            return e_98.error = "Input buffer has zero length", { offset: -1, result: e_98 };
        } return le(e, 0, e.byteLength); }
        function fe(e, t, r) { if (r instanceof ae) {
            var n_46 = !1;
            for (var n_47 = 0; n_47 < r.value.length; n_47++)
                if (!0 === fe(e, t, r.value[n_47]).verified)
                    return { verified: !0, result: e };
            if (!1 === n_46) {
                var e_99 = { verified: !1, result: { error: "Wrong values for Choice type" } };
                return r.hasOwnProperty("name") && (e_99.name = r.name), e_99;
            }
        } if (r instanceof se)
            return r.hasOwnProperty("name") && (e[r.name] = t), { verified: !0, result: e }; if (e instanceof Object == 0)
            return { verified: !1, result: { error: "Wrong root object" } }; if (t instanceof Object == 0)
            return { verified: !1, result: { error: "Wrong ASN.1 data" } }; if (r instanceof Object == 0)
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } }; if ("idBlock" in r == 0)
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } }; if ("fromBER" in r.idBlock == 0)
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } }; if ("toBER" in r.idBlock == 0)
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } }; var n = r.idBlock.toBER(!1); if (0 === n.byteLength)
            return { verified: !1, result: { error: "Error encoding idBlock for ASN.1 schema" } }; if (-1 === r.idBlock.fromBER(n, 0, n.byteLength))
            return { verified: !1, result: { error: "Error decoding idBlock for ASN.1 schema" } }; if (!1 === r.idBlock.hasOwnProperty("tagClass"))
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } }; if (r.idBlock.tagClass !== t.idBlock.tagClass)
            return { verified: !1, result: e }; if (!1 === r.idBlock.hasOwnProperty("tagNumber"))
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } }; if (r.idBlock.tagNumber !== t.idBlock.tagNumber)
            return { verified: !1, result: e }; if (!1 === r.idBlock.hasOwnProperty("isConstructed"))
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } }; if (r.idBlock.isConstructed !== t.idBlock.isConstructed)
            return { verified: !1, result: e }; if ("isHexOnly" in r.idBlock == 0)
            return { verified: !1, result: { error: "Wrong ASN.1 schema" } }; if (r.idBlock.isHexOnly !== t.idBlock.isHexOnly)
            return { verified: !1, result: e }; if (!0 === r.idBlock.isHexOnly) {
            if ("valueHex" in r.idBlock == 0)
                return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
            var n_48 = new Uint8Array(r.idBlock.valueHex), i_30 = new Uint8Array(t.idBlock.valueHex);
            if (n_48.length !== i_30.length)
                return { verified: !1, result: e };
            for (var t_76 = 0; t_76 < n_48.length; t_76++)
                if (n_48[t_76] !== i_30[1])
                    return { verified: !1, result: e };
        } if (r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (e[r.name] = t)), !0 === r.idBlock.isConstructed) {
            var n_49 = 0, i_31 = { verified: !1 }, o_16 = r.valueBlock.value.length;
            if (o_16 > 0 && r.valueBlock.value[0] instanceof ce && (o_16 = t.valueBlock.value.length), 0 === o_16)
                return { verified: !0, result: e };
            if (0 === t.valueBlock.value.length && 0 !== r.valueBlock.value.length) {
                var t_77 = !0;
                for (var e_100 = 0; e_100 < r.valueBlock.value.length; e_100++)
                    t_77 = t_77 && (r.valueBlock.value[e_100].optional || !1);
                return !0 === t_77 ? { verified: !0, result: e } : (r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && delete e[r.name]), e.error = "Inconsistent object length", { verified: !1, result: e });
            }
            for (var a_13 = 0; a_13 < o_16; a_13++)
                if (a_13 - n_49 >= t.valueBlock.value.length) {
                    if (!1 === r.valueBlock.value[a_13].optional) {
                        var t_78 = { verified: !1, result: e };
                        return e.error = "Inconsistent length between ASN.1 data and schema", r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (delete e[r.name], t_78.name = r.name)), t_78;
                    }
                }
                else if (r.valueBlock.value[0] instanceof ce) {
                    if (i_31 = fe(e, t.valueBlock.value[a_13], r.valueBlock.value[0].value), !1 === i_31.verified) {
                        if (!0 !== r.valueBlock.value[0].optional)
                            return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && delete e[r.name]), i_31;
                        n_49++;
                    }
                    if ("name" in r.valueBlock.value[0] && r.valueBlock.value[0].name.length > 0) {
                        var n_50 = {};
                        n_50 = "local" in r.valueBlock.value[0] && !0 === r.valueBlock.value[0].local ? t : e, void 0 === n_50[r.valueBlock.value[0].name] && (n_50[r.valueBlock.value[0].name] = []), n_50[r.valueBlock.value[0].name].push(t.valueBlock.value[a_13]);
                    }
                }
                else if (i_31 = fe(e, t.valueBlock.value[a_13 - n_49], r.valueBlock.value[a_13]), !1 === i_31.verified) {
                    if (!0 !== r.valueBlock.value[a_13].optional)
                        return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && delete e[r.name]), i_31;
                    n_49++;
                }
            if (!1 === i_31.verified) {
                var t_79 = { verified: !1, result: e };
                return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (delete e[r.name], t_79.name = r.name)), t_79;
            }
            return { verified: !0, result: e };
        } if ("primitiveSchema" in r && "valueHex" in t.valueBlock) {
            var n_51 = ue(t.valueBlock.valueHex);
            if (-1 === n_51.offset) {
                var t_80 = { verified: !1, result: n_51.result };
                return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (delete e[r.name], t_80.name = r.name)), t_80;
            }
            return fe(e, n_51.result, r.primitiveSchema);
        } return { verified: !0, result: e }; }
        t.Repeated = ce, t.RawData = (function () {
            function RawData(e) {
                if (e === void 0) { e = {}; }
                this.data = (0, n.getParametersValue)(e, "data", new ArrayBuffer(0));
            }
            RawData.prototype.fromBER = function (e, t, r) { return this.data = e.slice(t, r), t + r; };
            RawData.prototype.toBER = function (e) {
                if (e === void 0) { e = !1; }
                return this.data;
            };
            return RawData;
        }());
    }, 8826: function (e) {
        "use strict";
        !function (t) { function r(e) { return parseInt(e) === e; } function n(e) { if (!r(e.length))
            return !1; for (var t = 0; t < e.length; t++)
            if (!r(e[t]) || e[t] < 0 || e[t] > 255)
                return !1; return !0; } function i(e, t) { if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name)
            return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e; if (Array.isArray(e)) {
            if (!n(e))
                throw new Error("Array contains invalid value: " + e);
            return new Uint8Array(e);
        } if (r(e.length) && n(e))
            return new Uint8Array(e); throw new Error("unsupported array-like object"); } function o(e) { return new Uint8Array(e); } function a(e, t, r, n, i) { null == n && null == i || (e = e.slice ? e.slice(n, i) : Array.prototype.slice.call(e, n, i)), t.set(e, r); } var s, c = { toBytes: function (e) { var t = [], r = 0; for (e = encodeURI(e); r < e.length;) {
                var n = e.charCodeAt(r++);
                37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), r += 2) : t.push(n);
            } return i(t); }, fromBytes: function (e) { for (var t = [], r = 0; r < e.length;) {
                var n = e[r];
                n < 128 ? (t.push(String.fromCharCode(n)), r++) : n > 191 && n < 224 ? (t.push(String.fromCharCode((31 & n) << 6 | 63 & e[r + 1])), r += 2) : (t.push(String.fromCharCode((15 & n) << 12 | (63 & e[r + 1]) << 6 | 63 & e[r + 2])), r += 3);
            } return t.join(""); } }, l = (s = "0123456789abcdef", { toBytes: function (e) { for (var t = [], r = 0; r < e.length; r += 2)
                t.push(parseInt(e.substr(r, 2), 16)); return t; }, fromBytes: function (e) { for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                t.push(s[(240 & n) >> 4] + s[15 & n]);
            } return t.join(""); } }), u = { 16: 10, 24: 12, 32: 14 }, f = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], h = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], d = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], p = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], g = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], m = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], b = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], y = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], v = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], A = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], S = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], w = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], E = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], T = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], k = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925]; function B(e) { for (var t = [], r = 0; r < e.length; r += 4)
            t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]); return t; } var M = function (e) { if (!(this instanceof M))
            throw Error("AES must be instanitated with `new`"); Object.defineProperty(this, "key", { value: i(e, !0) }), this._prepare(); }; M.prototype._prepare = function () { var e = u[this.key.length]; if (null == e)
            throw new Error("invalid key size (must be 16, 24 or 32 bytes)"); this._Ke = [], this._Kd = []; for (var t = 0; t <= e; t++)
            this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]); var r, n = 4 * (e + 1), i = this.key.length / 4, o = B(this.key); for (t = 0; t < i; t++)
            r = t >> 2, this._Ke[r][t % 4] = o[t], this._Kd[e - r][t % 4] = o[t]; for (var a, s = 0, c = i; c < n;) {
            if (a = o[i - 1], o[0] ^= h[a >> 16 & 255] << 24 ^ h[a >> 8 & 255] << 16 ^ h[255 & a] << 8 ^ h[a >> 24 & 255] ^ f[s] << 24, s += 1, 8 != i)
                for (t = 1; t < i; t++)
                    o[t] ^= o[t - 1];
            else {
                for (t = 1; t < i / 2; t++)
                    o[t] ^= o[t - 1];
                for (a = o[i / 2 - 1], o[i / 2] ^= h[255 & a] ^ h[a >> 8 & 255] << 8 ^ h[a >> 16 & 255] << 16 ^ h[a >> 24 & 255] << 24, t = i / 2 + 1; t < i; t++)
                    o[t] ^= o[t - 1];
            }
            for (t = 0; t < i && c < n;)
                l = c >> 2, d = c % 4, this._Ke[l][d] = o[t], this._Kd[e - l][d] = o[t++], c++;
        } for (var l = 1; l < e; l++)
            for (var d = 0; d < 4; d++)
                a = this._Kd[l][d], this._Kd[l][d] = w[a >> 24 & 255] ^ E[a >> 16 & 255] ^ T[a >> 8 & 255] ^ k[255 & a]; }, M.prototype.encrypt = function (e) { if (16 != e.length)
            throw new Error("invalid plaintext size (must be 16 bytes)"); for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = B(e), i = 0; i < 4; i++)
            n[i] ^= this._Ke[0][i]; for (var a = 1; a < t; a++) {
            for (i = 0; i < 4; i++)
                r[i] = p[n[i] >> 24 & 255] ^ g[n[(i + 1) % 4] >> 16 & 255] ^ m[n[(i + 2) % 4] >> 8 & 255] ^ b[255 & n[(i + 3) % 4]] ^ this._Ke[a][i];
            n = r.slice();
        } var s, c = o(16); for (i = 0; i < 4; i++)
            s = this._Ke[t][i], c[4 * i] = 255 & (h[n[i] >> 24 & 255] ^ s >> 24), c[4 * i + 1] = 255 & (h[n[(i + 1) % 4] >> 16 & 255] ^ s >> 16), c[4 * i + 2] = 255 & (h[n[(i + 2) % 4] >> 8 & 255] ^ s >> 8), c[4 * i + 3] = 255 & (h[255 & n[(i + 3) % 4]] ^ s); return c; }, M.prototype.decrypt = function (e) { if (16 != e.length)
            throw new Error("invalid ciphertext size (must be 16 bytes)"); for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = B(e), i = 0; i < 4; i++)
            n[i] ^= this._Kd[0][i]; for (var a = 1; a < t; a++) {
            for (i = 0; i < 4; i++)
                r[i] = y[n[i] >> 24 & 255] ^ v[n[(i + 3) % 4] >> 16 & 255] ^ A[n[(i + 2) % 4] >> 8 & 255] ^ S[255 & n[(i + 1) % 4]] ^ this._Kd[a][i];
            n = r.slice();
        } var s, c = o(16); for (i = 0; i < 4; i++)
            s = this._Kd[t][i], c[4 * i] = 255 & (d[n[i] >> 24 & 255] ^ s >> 24), c[4 * i + 1] = 255 & (d[n[(i + 3) % 4] >> 16 & 255] ^ s >> 16), c[4 * i + 2] = 255 & (d[n[(i + 2) % 4] >> 8 & 255] ^ s >> 8), c[4 * i + 3] = 255 & (d[255 & n[(i + 1) % 4]] ^ s); return c; }; var C = function (e) { if (!(this instanceof C))
            throw Error("AES must be instanitated with `new`"); this.description = "Electronic Code Block", this.name = "ecb", this._aes = new M(e); }; C.prototype.encrypt = function (e) { if ((e = i(e)).length % 16 != 0)
            throw new Error("invalid plaintext size (must be multiple of 16 bytes)"); for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16)
            a(e, r, 0, n, n + 16), a(r = this._aes.encrypt(r), t, n); return t; }, C.prototype.decrypt = function (e) { if ((e = i(e)).length % 16 != 0)
            throw new Error("invalid ciphertext size (must be multiple of 16 bytes)"); for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16)
            a(e, r, 0, n, n + 16), a(r = this._aes.decrypt(r), t, n); return t; }; var L = function (e, t) { if (!(this instanceof L))
            throw Error("AES must be instanitated with `new`"); if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
            if (16 != t.length)
                throw new Error("invalid initialation vector size (must be 16 bytes)");
        }
        else
            t = o(16); this._lastCipherblock = i(t, !0), this._aes = new M(e); }; L.prototype.encrypt = function (e) { if ((e = i(e)).length % 16 != 0)
            throw new Error("invalid plaintext size (must be multiple of 16 bytes)"); for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
            a(e, r, 0, n, n + 16);
            for (var s = 0; s < 16; s++)
                r[s] ^= this._lastCipherblock[s];
            this._lastCipherblock = this._aes.encrypt(r), a(this._lastCipherblock, t, n);
        } return t; }, L.prototype.decrypt = function (e) { if ((e = i(e)).length % 16 != 0)
            throw new Error("invalid ciphertext size (must be multiple of 16 bytes)"); for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
            a(e, r, 0, n, n + 16), r = this._aes.decrypt(r);
            for (var s = 0; s < 16; s++)
                t[n + s] = r[s] ^ this._lastCipherblock[s];
            a(e, this._lastCipherblock, 0, n, n + 16);
        } return t; }; var P = function (e, t, r) { if (!(this instanceof P))
            throw Error("AES must be instanitated with `new`"); if (this.description = "Cipher Feedback", this.name = "cfb", t) {
            if (16 != t.length)
                throw new Error("invalid initialation vector size (must be 16 size)");
        }
        else
            t = o(16); r || (r = 1), this.segmentSize = r, this._shiftRegister = i(t, !0), this._aes = new M(e); }; P.prototype.encrypt = function (e) { if (e.length % this.segmentSize != 0)
            throw new Error("invalid plaintext size (must be segmentSize bytes)"); for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var o = 0; o < this.segmentSize; o++)
                r[n + o] ^= t[o];
            a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize);
        } return r; }, P.prototype.decrypt = function (e) { if (e.length % this.segmentSize != 0)
            throw new Error("invalid ciphertext size (must be segmentSize bytes)"); for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var o = 0; o < this.segmentSize; o++)
                r[n + o] ^= t[o];
            a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize);
        } return r; }; var F = function (e, t) { if (!(this instanceof F))
            throw Error("AES must be instanitated with `new`"); if (this.description = "Output Feedback", this.name = "ofb", t) {
            if (16 != t.length)
                throw new Error("invalid initialation vector size (must be 16 bytes)");
        }
        else
            t = o(16); this._lastPrecipher = i(t, !0), this._lastPrecipherIndex = 16, this._aes = new M(e); }; F.prototype.encrypt = function (e) { for (var t = i(e, !0), r = 0; r < t.length; r++)
            16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++]; return t; }, F.prototype.decrypt = F.prototype.encrypt; var N = function (e) { if (!(this instanceof N))
            throw Error("Counter must be instanitated with `new`"); 0 === e || e || (e = 1), "number" == typeof e ? (this._counter = o(16), this.setValue(e)) : this.setBytes(e); }; N.prototype.setValue = function (e) { if ("number" != typeof e || parseInt(e) != e)
            throw new Error("invalid counter value (must be an integer)"); for (var t = 15; t >= 0; --t)
            this._counter[t] = e % 256, e >>= 8; }, N.prototype.setBytes = function (e) { if (16 != (e = i(e, !0)).length)
            throw new Error("invalid counter bytes size (must be 16 bytes)"); this._counter = e; }, N.prototype.increment = function () { for (var e = 15; e >= 0; e--) {
            if (255 !== this._counter[e]) {
                this._counter[e]++;
                break;
            }
            this._counter[e] = 0;
        } }; var x = function (e, t) { if (!(this instanceof x))
            throw Error("AES must be instanitated with `new`"); this.description = "Counter", this.name = "ctr", t instanceof N || (t = new N(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new M(e); }; x.prototype.encrypt = function (e) { for (var t = i(e, !0), r = 0; r < t.length; r++)
            16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++]; return t; }, x.prototype.decrypt = x.prototype.encrypt; var R = { AES: M, Counter: N, ModeOfOperation: { ecb: C, cbc: L, cfb: P, ofb: F, ctr: x }, utils: { hex: l, utf8: c }, padding: { pkcs7: { pad: function (e) { var t = 16 - (e = i(e, !0)).length % 16, r = o(e.length + t); a(e, r); for (var n = e.length; n < r.length; n++)
                        r[n] = t; return r; }, strip: function (e) { if ((e = i(e, !0)).length < 16)
                        throw new Error("PKCS#7 invalid length"); var t = e[e.length - 1]; if (t > 16)
                        throw new Error("PKCS#7 padding byte out of range"); for (var r = e.length - t, n = 0; n < t; n++)
                        if (e[r + n] !== t)
                            throw new Error("PKCS#7 invalid padding byte"); var s = o(r); return a(e, s, 0, 0, r), s; } } }, _arrayTest: { coerceArray: i, createArray: o, copyArray: a } }; e.exports = R; }();
    }, 2882: function (e) {
        "use strict";
        for (var t = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0; n < t.length; n++) {
            var i = t.charAt(n);
            if (void 0 !== r[i])
                throw new TypeError(i + " is ambiguous");
            r[i] = n;
        }
        function o(e) { var t = e >> 25; return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1); }
        function a(e) { for (var t = 1, r = 0; r < e.length; ++r) {
            var n = e.charCodeAt(r);
            if (n < 33 || n > 126)
                return "Invalid prefix (" + e + ")";
            t = o(t) ^ n >> 5;
        } for (t = o(t), r = 0; r < e.length; ++r) {
            var i = e.charCodeAt(r);
            t = o(t) ^ 31 & i;
        } return t; }
        function s(e, t) { if (t = t || 90, e.length < 8)
            return e + " too short"; if (e.length > t)
            return "Exceeds length limit"; var n = e.toLowerCase(), i = e.toUpperCase(); if (e !== n && e !== i)
            return "Mixed-case string " + e; var s = (e = n).lastIndexOf("1"); if (-1 === s)
            return "No separator character for " + e; if (0 === s)
            return "Missing prefix for " + e; var c = e.slice(0, s), l = e.slice(s + 1); if (l.length < 6)
            return "Data too short"; var u = a(c); if ("string" == typeof u)
            return u; for (var f = [], h = 0; h < l.length; ++h) {
            var d = l.charAt(h), p = r[d];
            if (void 0 === p)
                return "Unknown character " + d;
            u = o(u) ^ p, h + 6 >= l.length || f.push(p);
        } return 1 !== u ? "Invalid checksum for " + e : { prefix: c, words: f }; }
        function c(e, t, r, n) { for (var i = 0, o = 0, a = (1 << r) - 1, s = [], c = 0; c < e.length; ++c)
            for (i = i << t | e[c], o += t; o >= r;)
                o -= r, s.push(i >> o & a); if (n)
            o > 0 && s.push(i << r - o & a);
        else {
            if (o >= t)
                return "Excess padding";
            if (i << r - o & a)
                return "Non-zero padding";
        } return s; }
        e.exports = { decodeUnsafe: function () { var e = s.apply(null, arguments); if ("object" == typeof e)
                return e; }, decode: function (e) { var t = s.apply(null, arguments); if ("object" == typeof t)
                return t; throw new Error(t); }, encode: function (e, r, n) { if (n = n || 90, e.length + 7 + r.length > n)
                throw new TypeError("Exceeds length limit"); var i = a(e = e.toLowerCase()); if ("string" == typeof i)
                throw new Error(i); for (var s = e + "1", c = 0; c < r.length; ++c) {
                var l = r[c];
                if (l >> 5 != 0)
                    throw new Error("Non 5-bit word");
                i = o(i) ^ l, s += t.charAt(l);
            } for (c = 0; c < 6; ++c)
                i = o(i); for (i ^= 1, c = 0; c < 6; ++c)
                s += t.charAt(i >> 5 * (5 - c) & 31); return s; }, toWordsUnsafe: function (e) { var t = c(e, 8, 5, !0); if (Array.isArray(t))
                return t; }, toWords: function (e) { var t = c(e, 8, 5, !0); if (Array.isArray(t))
                return t; throw new Error(t); }, fromWordsUnsafe: function (e) { var t = c(e, 5, 8, !1); if (Array.isArray(t))
                return t; }, fromWords: function (e) { var t = c(e, 5, 8, !1); if (Array.isArray(t))
                return t; throw new Error(t); } };
    }, 3550: function (e, t, r) { !function (e, t) {
        "use strict";
        function n(e, t) { if (!e)
            throw new Error(t || "Assertion failed"); }
        function i(e, t) { e.super_ = t; var r = function () { }; r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e; }
        function o(e, t, r) { if (o.isBN(e))
            return e; this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be")); }
        var a;
        "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
        try {
            a = r(2574).Buffer;
        }
        catch (e) { }
        function s(e, t, r) { for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
            var a = e.charCodeAt(o) - 48;
            n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a;
        } return n; }
        function c(e, t, r, n) { for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
            var s = e.charCodeAt(a) - 48;
            i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
        } return i; }
        o.isBN = function (e) { return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words); }, o.max = function (e, t) { return e.cmp(t) > 0 ? e : t; }, o.min = function (e, t) { return e.cmp(t) < 0 ? e : t; }, o.prototype._init = function (e, t, r) { if ("number" == typeof e)
            return this._initNumber(e, t, r); if ("object" == typeof e)
            return this._initArray(e, t, r); "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36); var i = 0; "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r); }, o.prototype._initNumber = function (e, t, r) { e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r); }, o.prototype._initArray = function (e, t, r) { if (n("number" == typeof e.length), e.length <= 0)
            return this.words = [0], this.length = 1, this; this.length = Math.ceil(e.length / 3), this.words = new Array(this.length); for (var i = 0; i < this.length; i++)
            this.words[i] = 0; var o, a, s = 0; if ("be" === r)
            for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
        else if ("le" === r)
            for (i = 0, o = 0; i < e.length; i += 3)
                a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); return this.strip(); }, o.prototype._parseHex = function (e, t) { this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length); for (var r = 0; r < this.length; r++)
            this.words[r] = 0; var n, i, o = 0; for (r = e.length - 6, n = 0; r >= t; r -= 6)
            i = s(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++); r + 6 !== t && (i = s(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip(); }, o.prototype._parseBase = function (e, t, r) { this.words = [0], this.length = 1; for (var n = 0, i = 1; i <= 67108863; i *= t)
            n++; n--, i = i / t | 0; for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, l = 0, u = r; u < s; u += n)
            l = c(e, u, u + n, t), this.imuln(i), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l); if (0 !== a) {
            var f = 1;
            for (l = c(e, u, e.length, t), u = 0; u < a; u++)
                f *= t;
            this.imuln(f), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
        } }, o.prototype.copy = function (e) { e.words = new Array(this.length); for (var t = 0; t < this.length; t++)
            e.words[t] = this.words[t]; e.length = this.length, e.negative = this.negative, e.red = this.red; }, o.prototype.clone = function () { var e = new o(null); return this.copy(e), e; }, o.prototype._expand = function (e) { for (; this.length < e;)
            this.words[this.length++] = 0; return this; }, o.prototype.strip = function () { for (; this.length > 1 && 0 === this.words[this.length - 1];)
            this.length--; return this._normSign(); }, o.prototype._normSign = function () { return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this; }, o.prototype.inspect = function () { return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"; };
        var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        function h(e, t, r) { r.negative = t.negative ^ e.negative; var n = e.length + t.length | 0; r.length = n, n = n - 1 | 0; var i = 0 | e.words[0], o = 0 | t.words[0], a = i * o, s = 67108863 & a, c = a / 67108864 | 0; r.words[0] = s; for (var l = 1; l < n; l++) {
            for (var u = c >>> 26, f = 67108863 & c, h = Math.min(l, t.length - 1), d = Math.max(0, l - e.length + 1); d <= h; d++) {
                var p = l - d | 0;
                u += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[d]) + f) / 67108864 | 0, f = 67108863 & a;
            }
            r.words[l] = 0 | f, c = 0 | u;
        } return 0 !== c ? r.words[l] = 0 | c : r.length--, r.strip(); }
        o.prototype.toString = function (e, t) { var r; if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
            r = "";
            for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                var s = this.words[a], c = (16777215 & (s << i | o)).toString(16);
                r = 0 != (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? l[6 - c.length] + c + r : c + r, (i += 2) >= 26 && (i -= 26, a--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;)
                r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
        } if (e === (0 | e) && e >= 2 && e <= 36) {
            var h = u[e], d = f[e];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero();) {
                var g = p.modn(d).toString(e);
                r = (p = p.idivn(d)).isZero() ? g + r : l[h - g.length] + g + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % t != 0;)
                r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
        } n(!1, "Base should be between 2 and 36"); }, o.prototype.toNumber = function () { var e = this.words[0]; return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e; }, o.prototype.toJSON = function () { return this.toString(16); }, o.prototype.toBuffer = function (e, t) { return n(void 0 !== a), this.toArrayLike(a, e, t); }, o.prototype.toArray = function (e, t) { return this.toArrayLike(Array, e, t); }, o.prototype.toArrayLike = function (e, t, r) { var i = this.byteLength(), o = r || Math.max(1, i); n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip(); var a, s, c = "le" === t, l = new e(o), u = this.clone(); if (c) {
            for (s = 0; !u.isZero(); s++)
                a = u.andln(255), u.iushrn(8), l[s] = a;
            for (; s < o; s++)
                l[s] = 0;
        }
        else {
            for (s = 0; s < o - i; s++)
                l[s] = 0;
            for (s = 0; !u.isZero(); s++)
                a = u.andln(255), u.iushrn(8), l[o - s - 1] = a;
        } return l; }, Math.clz32 ? o.prototype._countBits = function (e) { return 32 - Math.clz32(e); } : o.prototype._countBits = function (e) { var t = e, r = 0; return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t; }, o.prototype._zeroBits = function (e) { if (0 === e)
            return 26; var t = e, r = 0; return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r; }, o.prototype.bitLength = function () { var e = this.words[this.length - 1], t = this._countBits(e); return 26 * (this.length - 1) + t; }, o.prototype.zeroBits = function () { if (this.isZero())
            return 0; for (var e = 0, t = 0; t < this.length; t++) {
            var r = this._zeroBits(this.words[t]);
            if (e += r, 26 !== r)
                break;
        } return e; }, o.prototype.byteLength = function () { return Math.ceil(this.bitLength() / 8); }, o.prototype.toTwos = function (e) { return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone(); }, o.prototype.fromTwos = function (e) { return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone(); }, o.prototype.isNeg = function () { return 0 !== this.negative; }, o.prototype.neg = function () { return this.clone().ineg(); }, o.prototype.ineg = function () { return this.isZero() || (this.negative ^= 1), this; }, o.prototype.iuor = function (e) { for (; this.length < e.length;)
            this.words[this.length++] = 0; for (var t = 0; t < e.length; t++)
            this.words[t] = this.words[t] | e.words[t]; return this.strip(); }, o.prototype.ior = function (e) { return n(0 == (this.negative | e.negative)), this.iuor(e); }, o.prototype.or = function (e) { return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this); }, o.prototype.uor = function (e) { return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this); }, o.prototype.iuand = function (e) { var t; t = this.length > e.length ? e : this; for (var r = 0; r < t.length; r++)
            this.words[r] = this.words[r] & e.words[r]; return this.length = t.length, this.strip(); }, o.prototype.iand = function (e) { return n(0 == (this.negative | e.negative)), this.iuand(e); }, o.prototype.and = function (e) { return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this); }, o.prototype.uand = function (e) { return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this); }, o.prototype.iuxor = function (e) { var t, r; this.length > e.length ? (t = this, r = e) : (t = e, r = this); for (var n = 0; n < r.length; n++)
            this.words[n] = t.words[n] ^ r.words[n]; if (this !== t)
            for (; n < t.length; n++)
                this.words[n] = t.words[n]; return this.length = t.length, this.strip(); }, o.prototype.ixor = function (e) { return n(0 == (this.negative | e.negative)), this.iuxor(e); }, o.prototype.xor = function (e) { return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this); }, o.prototype.uxor = function (e) { return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this); }, o.prototype.inotn = function (e) { n("number" == typeof e && e >= 0); var t = 0 | Math.ceil(e / 26), r = e % 26; this._expand(t), r > 0 && t--; for (var i = 0; i < t; i++)
            this.words[i] = 67108863 & ~this.words[i]; return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip(); }, o.prototype.notn = function (e) { return this.clone().inotn(e); }, o.prototype.setn = function (e, t) { n("number" == typeof e && e >= 0); var r = e / 26 | 0, i = e % 26; return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip(); }, o.prototype.iadd = function (e) { var t, r, n; if (0 !== this.negative && 0 === e.negative)
            return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign(); if (0 === this.negative && 0 !== e.negative)
            return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign(); this.length > e.length ? (r = this, n = e) : (r = e, n = this); for (var i = 0, o = 0; o < n.length; o++)
            t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26; for (; 0 !== i && o < r.length; o++)
            t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26; if (this.length = r.length, 0 !== i)
            this.words[this.length] = i, this.length++;
        else if (r !== this)
            for (; o < r.length; o++)
                this.words[o] = r.words[o]; return this; }, o.prototype.add = function (e) { var t; return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this); }, o.prototype.isub = function (e) { if (0 !== e.negative) {
            e.negative = 0;
            var t = this.iadd(e);
            return e.negative = 1, t._normSign();
        } if (0 !== this.negative)
            return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign(); var r, n, i = this.cmp(e); if (0 === i)
            return this.negative = 0, this.length = 1, this.words[0] = 0, this; i > 0 ? (r = this, n = e) : (r = e, n = this); for (var o = 0, a = 0; a < n.length; a++)
            o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t; for (; 0 !== o && a < r.length; a++)
            o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t; if (0 === o && a < r.length && r !== this)
            for (; a < r.length; a++)
                this.words[a] = r.words[a]; return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip(); }, o.prototype.sub = function (e) { return this.clone().isub(e); };
        var d = function (e, t, r) { var n, i, o, a = e.words, s = t.words, c = r.words, l = 0, u = 0 | a[0], f = 8191 & u, h = u >>> 13, d = 0 | a[1], p = 8191 & d, g = d >>> 13, m = 0 | a[2], b = 8191 & m, y = m >>> 13, v = 0 | a[3], A = 8191 & v, S = v >>> 13, w = 0 | a[4], E = 8191 & w, T = w >>> 13, k = 0 | a[5], B = 8191 & k, M = k >>> 13, C = 0 | a[6], L = 8191 & C, P = C >>> 13, F = 0 | a[7], N = 8191 & F, x = F >>> 13, R = 0 | a[8], O = 8191 & R, I = R >>> 13, D = 0 | a[9], J = 8191 & D, _ = D >>> 13, U = 0 | s[0], H = 8191 & U, X = U >>> 13, V = 0 | s[1], G = 8191 & V, z = V >>> 13, j = 0 | s[2], K = 8191 & j, Z = j >>> 13, q = 0 | s[3], Q = 8191 & q, W = q >>> 13, Y = 0 | s[4], $ = 8191 & Y, ee = Y >>> 13, te = 0 | s[5], re = 8191 & te, ne = te >>> 13, ie = 0 | s[6], oe = 8191 & ie, ae = ie >>> 13, se = 0 | s[7], ce = 8191 & se, le = se >>> 13, ue = 0 | s[8], fe = 8191 & ue, he = ue >>> 13, de = 0 | s[9], pe = 8191 & de, ge = de >>> 13; r.negative = e.negative ^ t.negative, r.length = 19; var me = (l + (n = Math.imul(f, H)) | 0) + ((8191 & (i = (i = Math.imul(f, X)) + Math.imul(h, H) | 0)) << 13) | 0; l = ((o = Math.imul(h, X)) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, X)) + Math.imul(g, H) | 0, o = Math.imul(g, X); var be = (l + (n = n + Math.imul(f, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, z) | 0) + Math.imul(h, G) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, z) | 0) + (i >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n = Math.imul(b, H), i = (i = Math.imul(b, X)) + Math.imul(y, H) | 0, o = Math.imul(y, X), n = n + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, z) | 0) + Math.imul(g, G) | 0, o = o + Math.imul(g, z) | 0; var ye = (l + (n = n + Math.imul(f, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, Z) | 0) + Math.imul(h, K) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, Z) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(A, H), i = (i = Math.imul(A, X)) + Math.imul(S, H) | 0, o = Math.imul(S, X), n = n + Math.imul(b, G) | 0, i = (i = i + Math.imul(b, z) | 0) + Math.imul(y, G) | 0, o = o + Math.imul(y, z) | 0, n = n + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, Z) | 0) + Math.imul(g, K) | 0, o = o + Math.imul(g, Z) | 0; var ve = (l + (n = n + Math.imul(f, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, W) | 0) + Math.imul(h, Q) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, W) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(E, H), i = (i = Math.imul(E, X)) + Math.imul(T, H) | 0, o = Math.imul(T, X), n = n + Math.imul(A, G) | 0, i = (i = i + Math.imul(A, z) | 0) + Math.imul(S, G) | 0, o = o + Math.imul(S, z) | 0, n = n + Math.imul(b, K) | 0, i = (i = i + Math.imul(b, Z) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, Z) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(g, Q) | 0, o = o + Math.imul(g, W) | 0; var Ae = (l + (n = n + Math.imul(f, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ee) | 0) + Math.imul(h, $) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, ee) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(B, H), i = (i = Math.imul(B, X)) + Math.imul(M, H) | 0, o = Math.imul(M, X), n = n + Math.imul(E, G) | 0, i = (i = i + Math.imul(E, z) | 0) + Math.imul(T, G) | 0, o = o + Math.imul(T, z) | 0, n = n + Math.imul(A, K) | 0, i = (i = i + Math.imul(A, Z) | 0) + Math.imul(S, K) | 0, o = o + Math.imul(S, Z) | 0, n = n + Math.imul(b, Q) | 0, i = (i = i + Math.imul(b, W) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, W) | 0, n = n + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(g, $) | 0, o = o + Math.imul(g, ee) | 0; var Se = (l + (n = n + Math.imul(f, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ne) | 0) + Math.imul(h, re) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, ne) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(L, H), i = (i = Math.imul(L, X)) + Math.imul(P, H) | 0, o = Math.imul(P, X), n = n + Math.imul(B, G) | 0, i = (i = i + Math.imul(B, z) | 0) + Math.imul(M, G) | 0, o = o + Math.imul(M, z) | 0, n = n + Math.imul(E, K) | 0, i = (i = i + Math.imul(E, Z) | 0) + Math.imul(T, K) | 0, o = o + Math.imul(T, Z) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, W) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, W) | 0, n = n + Math.imul(b, $) | 0, i = (i = i + Math.imul(b, ee) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(g, re) | 0, o = o + Math.imul(g, ne) | 0; var we = (l + (n = n + Math.imul(f, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ae) | 0) + Math.imul(h, oe) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, ae) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(N, H), i = (i = Math.imul(N, X)) + Math.imul(x, H) | 0, o = Math.imul(x, X), n = n + Math.imul(L, G) | 0, i = (i = i + Math.imul(L, z) | 0) + Math.imul(P, G) | 0, o = o + Math.imul(P, z) | 0, n = n + Math.imul(B, K) | 0, i = (i = i + Math.imul(B, Z) | 0) + Math.imul(M, K) | 0, o = o + Math.imul(M, Z) | 0, n = n + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, W) | 0) + Math.imul(T, Q) | 0, o = o + Math.imul(T, W) | 0, n = n + Math.imul(A, $) | 0, i = (i = i + Math.imul(A, ee) | 0) + Math.imul(S, $) | 0, o = o + Math.imul(S, ee) | 0, n = n + Math.imul(b, re) | 0, i = (i = i + Math.imul(b, ne) | 0) + Math.imul(y, re) | 0, o = o + Math.imul(y, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(g, oe) | 0, o = o + Math.imul(g, ae) | 0; var Ee = (l + (n = n + Math.imul(f, ce) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, le) | 0) + Math.imul(h, ce) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, le) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(O, H), i = (i = Math.imul(O, X)) + Math.imul(I, H) | 0, o = Math.imul(I, X), n = n + Math.imul(N, G) | 0, i = (i = i + Math.imul(N, z) | 0) + Math.imul(x, G) | 0, o = o + Math.imul(x, z) | 0, n = n + Math.imul(L, K) | 0, i = (i = i + Math.imul(L, Z) | 0) + Math.imul(P, K) | 0, o = o + Math.imul(P, Z) | 0, n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, W) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, W) | 0, n = n + Math.imul(E, $) | 0, i = (i = i + Math.imul(E, ee) | 0) + Math.imul(T, $) | 0, o = o + Math.imul(T, ee) | 0, n = n + Math.imul(A, re) | 0, i = (i = i + Math.imul(A, ne) | 0) + Math.imul(S, re) | 0, o = o + Math.imul(S, ne) | 0, n = n + Math.imul(b, oe) | 0, i = (i = i + Math.imul(b, ae) | 0) + Math.imul(y, oe) | 0, o = o + Math.imul(y, ae) | 0, n = n + Math.imul(p, ce) | 0, i = (i = i + Math.imul(p, le) | 0) + Math.imul(g, ce) | 0, o = o + Math.imul(g, le) | 0; var Te = (l + (n = n + Math.imul(f, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, he) | 0) + Math.imul(h, fe) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, he) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(J, H), i = (i = Math.imul(J, X)) + Math.imul(_, H) | 0, o = Math.imul(_, X), n = n + Math.imul(O, G) | 0, i = (i = i + Math.imul(O, z) | 0) + Math.imul(I, G) | 0, o = o + Math.imul(I, z) | 0, n = n + Math.imul(N, K) | 0, i = (i = i + Math.imul(N, Z) | 0) + Math.imul(x, K) | 0, o = o + Math.imul(x, Z) | 0, n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, W) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, W) | 0, n = n + Math.imul(B, $) | 0, i = (i = i + Math.imul(B, ee) | 0) + Math.imul(M, $) | 0, o = o + Math.imul(M, ee) | 0, n = n + Math.imul(E, re) | 0, i = (i = i + Math.imul(E, ne) | 0) + Math.imul(T, re) | 0, o = o + Math.imul(T, ne) | 0, n = n + Math.imul(A, oe) | 0, i = (i = i + Math.imul(A, ae) | 0) + Math.imul(S, oe) | 0, o = o + Math.imul(S, ae) | 0, n = n + Math.imul(b, ce) | 0, i = (i = i + Math.imul(b, le) | 0) + Math.imul(y, ce) | 0, o = o + Math.imul(y, le) | 0, n = n + Math.imul(p, fe) | 0, i = (i = i + Math.imul(p, he) | 0) + Math.imul(g, fe) | 0, o = o + Math.imul(g, he) | 0; var ke = (l + (n = n + Math.imul(f, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ge) | 0) + Math.imul(h, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(h, ge) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(J, G), i = (i = Math.imul(J, z)) + Math.imul(_, G) | 0, o = Math.imul(_, z), n = n + Math.imul(O, K) | 0, i = (i = i + Math.imul(O, Z) | 0) + Math.imul(I, K) | 0, o = o + Math.imul(I, Z) | 0, n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, W) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, W) | 0, n = n + Math.imul(L, $) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, ee) | 0, n = n + Math.imul(B, re) | 0, i = (i = i + Math.imul(B, ne) | 0) + Math.imul(M, re) | 0, o = o + Math.imul(M, ne) | 0, n = n + Math.imul(E, oe) | 0, i = (i = i + Math.imul(E, ae) | 0) + Math.imul(T, oe) | 0, o = o + Math.imul(T, ae) | 0, n = n + Math.imul(A, ce) | 0, i = (i = i + Math.imul(A, le) | 0) + Math.imul(S, ce) | 0, o = o + Math.imul(S, le) | 0, n = n + Math.imul(b, fe) | 0, i = (i = i + Math.imul(b, he) | 0) + Math.imul(y, fe) | 0, o = o + Math.imul(y, he) | 0; var Be = (l + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, ge) | 0) + Math.imul(g, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(g, ge) | 0) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, n = Math.imul(J, K), i = (i = Math.imul(J, Z)) + Math.imul(_, K) | 0, o = Math.imul(_, Z), n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, W) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, W) | 0, n = n + Math.imul(N, $) | 0, i = (i = i + Math.imul(N, ee) | 0) + Math.imul(x, $) | 0, o = o + Math.imul(x, ee) | 0, n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(P, re) | 0, o = o + Math.imul(P, ne) | 0, n = n + Math.imul(B, oe) | 0, i = (i = i + Math.imul(B, ae) | 0) + Math.imul(M, oe) | 0, o = o + Math.imul(M, ae) | 0, n = n + Math.imul(E, ce) | 0, i = (i = i + Math.imul(E, le) | 0) + Math.imul(T, ce) | 0, o = o + Math.imul(T, le) | 0, n = n + Math.imul(A, fe) | 0, i = (i = i + Math.imul(A, he) | 0) + Math.imul(S, fe) | 0, o = o + Math.imul(S, he) | 0; var Me = (l + (n = n + Math.imul(b, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, ge) | 0) + Math.imul(y, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(y, ge) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(J, Q), i = (i = Math.imul(J, W)) + Math.imul(_, Q) | 0, o = Math.imul(_, W), n = n + Math.imul(O, $) | 0, i = (i = i + Math.imul(O, ee) | 0) + Math.imul(I, $) | 0, o = o + Math.imul(I, ee) | 0, n = n + Math.imul(N, re) | 0, i = (i = i + Math.imul(N, ne) | 0) + Math.imul(x, re) | 0, o = o + Math.imul(x, ne) | 0, n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, ae) | 0) + Math.imul(P, oe) | 0, o = o + Math.imul(P, ae) | 0, n = n + Math.imul(B, ce) | 0, i = (i = i + Math.imul(B, le) | 0) + Math.imul(M, ce) | 0, o = o + Math.imul(M, le) | 0, n = n + Math.imul(E, fe) | 0, i = (i = i + Math.imul(E, he) | 0) + Math.imul(T, fe) | 0, o = o + Math.imul(T, he) | 0; var Ce = (l + (n = n + Math.imul(A, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, ge) | 0) + Math.imul(S, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(S, ge) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(J, $), i = (i = Math.imul(J, ee)) + Math.imul(_, $) | 0, o = Math.imul(_, ee), n = n + Math.imul(O, re) | 0, i = (i = i + Math.imul(O, ne) | 0) + Math.imul(I, re) | 0, o = o + Math.imul(I, ne) | 0, n = n + Math.imul(N, oe) | 0, i = (i = i + Math.imul(N, ae) | 0) + Math.imul(x, oe) | 0, o = o + Math.imul(x, ae) | 0, n = n + Math.imul(L, ce) | 0, i = (i = i + Math.imul(L, le) | 0) + Math.imul(P, ce) | 0, o = o + Math.imul(P, le) | 0, n = n + Math.imul(B, fe) | 0, i = (i = i + Math.imul(B, he) | 0) + Math.imul(M, fe) | 0, o = o + Math.imul(M, he) | 0; var Le = (l + (n = n + Math.imul(E, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, ge) | 0) + Math.imul(T, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(T, ge) | 0) + (i >>> 13) | 0) + (Le >>> 26) | 0, Le &= 67108863, n = Math.imul(J, re), i = (i = Math.imul(J, ne)) + Math.imul(_, re) | 0, o = Math.imul(_, ne), n = n + Math.imul(O, oe) | 0, i = (i = i + Math.imul(O, ae) | 0) + Math.imul(I, oe) | 0, o = o + Math.imul(I, ae) | 0, n = n + Math.imul(N, ce) | 0, i = (i = i + Math.imul(N, le) | 0) + Math.imul(x, ce) | 0, o = o + Math.imul(x, le) | 0, n = n + Math.imul(L, fe) | 0, i = (i = i + Math.imul(L, he) | 0) + Math.imul(P, fe) | 0, o = o + Math.imul(P, he) | 0; var Pe = (l + (n = n + Math.imul(B, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, ge) | 0) + Math.imul(M, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(M, ge) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(J, oe), i = (i = Math.imul(J, ae)) + Math.imul(_, oe) | 0, o = Math.imul(_, ae), n = n + Math.imul(O, ce) | 0, i = (i = i + Math.imul(O, le) | 0) + Math.imul(I, ce) | 0, o = o + Math.imul(I, le) | 0, n = n + Math.imul(N, fe) | 0, i = (i = i + Math.imul(N, he) | 0) + Math.imul(x, fe) | 0, o = o + Math.imul(x, he) | 0; var Fe = (l + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, ge) | 0) + Math.imul(P, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(P, ge) | 0) + (i >>> 13) | 0) + (Fe >>> 26) | 0, Fe &= 67108863, n = Math.imul(J, ce), i = (i = Math.imul(J, le)) + Math.imul(_, ce) | 0, o = Math.imul(_, le), n = n + Math.imul(O, fe) | 0, i = (i = i + Math.imul(O, he) | 0) + Math.imul(I, fe) | 0, o = o + Math.imul(I, he) | 0; var Ne = (l + (n = n + Math.imul(N, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, ge) | 0) + Math.imul(x, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(x, ge) | 0) + (i >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, n = Math.imul(J, fe), i = (i = Math.imul(J, he)) + Math.imul(_, fe) | 0, o = Math.imul(_, he); var xe = (l + (n = n + Math.imul(O, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, ge) | 0) + Math.imul(I, pe) | 0)) << 13) | 0; l = ((o = o + Math.imul(I, ge) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863; var Re = (l + (n = Math.imul(J, pe)) | 0) + ((8191 & (i = (i = Math.imul(J, ge)) + Math.imul(_, pe) | 0)) << 13) | 0; return l = ((o = Math.imul(_, ge)) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, c[0] = me, c[1] = be, c[2] = ye, c[3] = ve, c[4] = Ae, c[5] = Se, c[6] = we, c[7] = Ee, c[8] = Te, c[9] = ke, c[10] = Be, c[11] = Me, c[12] = Ce, c[13] = Le, c[14] = Pe, c[15] = Fe, c[16] = Ne, c[17] = xe, c[18] = Re, 0 !== l && (c[19] = l, r.length++), r; };
        function p(e, t, r) { return (new g).mulp(e, t, r); }
        function g(e, t) { this.x = e, this.y = t; }
        Math.imul || (d = h), o.prototype.mulTo = function (e, t) { var r = this.length + e.length; return 10 === this.length && 10 === e.length ? d(this, e, t) : r < 63 ? h(this, e, t) : r < 1024 ? function (e, t, r) { r.negative = t.negative ^ e.negative, r.length = e.length + t.length; for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var a = i;
            i = 0;
            for (var s = 67108863 & n, c = Math.min(o, t.length - 1), l = Math.max(0, o - e.length + 1); l <= c; l++) {
                var u = o - l, f = (0 | e.words[u]) * (0 | t.words[l]), h = 67108863 & f;
                s = 67108863 & (h = h + s | 0), i += (a = (a = a + (f / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26, a &= 67108863;
            }
            r.words[o] = s, n = a, a = i;
        } return 0 !== n ? r.words[o] = n : r.length--, r.strip(); }(this, e, t) : p(this, e, t); }, g.prototype.makeRBT = function (e) { for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++)
            t[n] = this.revBin(n, r, e); return t; }, g.prototype.revBin = function (e, t, r) { if (0 === e || e === r - 1)
            return e; for (var n = 0, i = 0; i < t; i++)
            n |= (1 & e) << t - i - 1, e >>= 1; return n; }, g.prototype.permute = function (e, t, r, n, i, o) { for (var a = 0; a < o; a++)
            n[a] = t[e[a]], i[a] = r[e[a]]; }, g.prototype.transform = function (e, t, r, n, i, o) { this.permute(o, e, t, r, n, i); for (var a = 1; a < i; a <<= 1)
            for (var s = a << 1, c = Math.cos(2 * Math.PI / s), l = Math.sin(2 * Math.PI / s), u = 0; u < i; u += s)
                for (var f = c, h = l, d = 0; d < a; d++) {
                    var p = r[u + d], g = n[u + d], m = r[u + d + a], b = n[u + d + a], y = f * m - h * b;
                    b = f * b + h * m, m = y, r[u + d] = p + m, n[u + d] = g + b, r[u + d + a] = p - m, n[u + d + a] = g - b, d !== s && (y = c * f - l * h, h = c * h + l * f, f = y);
                } }, g.prototype.guessLen13b = function (e, t) { var r = 1 | Math.max(t, e), n = 1 & r, i = 0; for (r = r / 2 | 0; r; r >>>= 1)
            i++; return 1 << i + 1 + n; }, g.prototype.conjugate = function (e, t, r) { if (!(r <= 1))
            for (var n = 0; n < r / 2; n++) {
                var i = e[n];
                e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i;
            } }, g.prototype.normalize13b = function (e, t) { for (var r = 0, n = 0; n < t / 2; n++) {
            var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
            e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
        } return e; }, g.prototype.convert13b = function (e, t, r, i) { for (var o = 0, a = 0; a < t; a++)
            o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13; for (a = 2 * t; a < i; ++a)
            r[a] = 0; n(0 === o), n(0 == (-8192 & o)); }, g.prototype.stub = function (e) { for (var t = new Array(e), r = 0; r < e; r++)
            t[r] = 0; return t; }, g.prototype.mulp = function (e, t, r) { var n = 2 * this.guessLen13b(e.length, t.length), i = this.makeRBT(n), o = this.stub(n), a = new Array(n), s = new Array(n), c = new Array(n), l = new Array(n), u = new Array(n), f = new Array(n), h = r.words; h.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, l, n), this.transform(a, o, s, c, n, i), this.transform(l, o, u, f, n, i); for (var d = 0; d < n; d++) {
            var p = s[d] * u[d] - c[d] * f[d];
            c[d] = s[d] * f[d] + c[d] * u[d], s[d] = p;
        } return this.conjugate(s, c, n), this.transform(s, c, h, o, n, i), this.conjugate(h, o, n), this.normalize13b(h, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip(); }, o.prototype.mul = function (e) { var t = new o(null); return t.words = new Array(this.length + e.length), this.mulTo(e, t); }, o.prototype.mulf = function (e) { var t = new o(null); return t.words = new Array(this.length + e.length), p(this, e, t); }, o.prototype.imul = function (e) { return this.clone().mulTo(e, this); }, o.prototype.imuln = function (e) { n("number" == typeof e), n(e < 67108864); for (var t = 0, r = 0; r < this.length; r++) {
            var i = (0 | this.words[r]) * e, o = (67108863 & i) + (67108863 & t);
            t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o;
        } return 0 !== t && (this.words[r] = t, this.length++), this; }, o.prototype.muln = function (e) { return this.clone().imuln(e); }, o.prototype.sqr = function () { return this.mul(this); }, o.prototype.isqr = function () { return this.imul(this.clone()); }, o.prototype.pow = function (e) { var t = function (e) { for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
            var n = r / 26 | 0, i = r % 26;
            t[r] = (e.words[n] & 1 << i) >>> i;
        } return t; }(e); if (0 === t.length)
            return new o(1); for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr())
            ; if (++n < t.length)
            for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                0 !== t[n] && (r = r.mul(i)); return r; }, o.prototype.iushln = function (e) { n("number" == typeof e && e >= 0); var t, r = e % 26, i = (e - r) / 26, o = 67108863 >>> 26 - r << 26 - r; if (0 !== r) {
            var a = 0;
            for (t = 0; t < this.length; t++) {
                var s = this.words[t] & o, c = (0 | this.words[t]) - s << r;
                this.words[t] = c | a, a = s >>> 26 - r;
            }
            a && (this.words[t] = a, this.length++);
        } if (0 !== i) {
            for (t = this.length - 1; t >= 0; t--)
                this.words[t + i] = this.words[t];
            for (t = 0; t < i; t++)
                this.words[t] = 0;
            this.length += i;
        } return this.strip(); }, o.prototype.ishln = function (e) { return n(0 === this.negative), this.iushln(e); }, o.prototype.iushrn = function (e, t, r) { var i; n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0; var o = e % 26, a = Math.min((e - o) / 26, this.length), s = 67108863 ^ 67108863 >>> o << o, c = r; if (i -= a, i = Math.max(0, i), c) {
            for (var l = 0; l < a; l++)
                c.words[l] = this.words[l];
            c.length = a;
        } if (0 === a)
            ;
        else if (this.length > a)
            for (this.length -= a, l = 0; l < this.length; l++)
                this.words[l] = this.words[l + a];
        else
            this.words[0] = 0, this.length = 1; var u = 0; for (l = this.length - 1; l >= 0 && (0 !== u || l >= i); l--) {
            var f = 0 | this.words[l];
            this.words[l] = u << 26 - o | f >>> o, u = f & s;
        } return c && 0 !== u && (c.words[c.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip(); }, o.prototype.ishrn = function (e, t, r) { return n(0 === this.negative), this.iushrn(e, t, r); }, o.prototype.shln = function (e) { return this.clone().ishln(e); }, o.prototype.ushln = function (e) { return this.clone().iushln(e); }, o.prototype.shrn = function (e) { return this.clone().ishrn(e); }, o.prototype.ushrn = function (e) { return this.clone().iushrn(e); }, o.prototype.testn = function (e) { n("number" == typeof e && e >= 0); var t = e % 26, r = (e - t) / 26, i = 1 << t; return !(this.length <= r || !(this.words[r] & i)); }, o.prototype.imaskn = function (e) { n("number" == typeof e && e >= 0); var t = e % 26, r = (e - t) / 26; if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r)
            return this; if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
            var i = 67108863 ^ 67108863 >>> t << t;
            this.words[this.length - 1] &= i;
        } return this.strip(); }, o.prototype.maskn = function (e) { return this.clone().imaskn(e); }, o.prototype.iaddn = function (e) { return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e); }, o.prototype._iaddn = function (e) { this.words[0] += e; for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
            this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++; return this.length = Math.max(this.length, t + 1), this; }, o.prototype.isubn = function (e) { if (n("number" == typeof e), n(e < 67108864), e < 0)
            return this.iaddn(-e); if (0 !== this.negative)
            return this.negative = 0, this.iaddn(e), this.negative = 1, this; if (this.words[0] -= e, 1 === this.length && this.words[0] < 0)
            this.words[0] = -this.words[0], this.negative = 1;
        else
            for (var t = 0; t < this.length && this.words[t] < 0; t++)
                this.words[t] += 67108864, this.words[t + 1] -= 1; return this.strip(); }, o.prototype.addn = function (e) { return this.clone().iaddn(e); }, o.prototype.subn = function (e) { return this.clone().isubn(e); }, o.prototype.iabs = function () { return this.negative = 0, this; }, o.prototype.abs = function () { return this.clone().iabs(); }, o.prototype._ishlnsubmul = function (e, t, r) { var i, o, a = e.length + r; this._expand(a); var s = 0; for (i = 0; i < e.length; i++) {
            o = (0 | this.words[i + r]) + s;
            var c = (0 | e.words[i]) * t;
            s = ((o -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[i + r] = 67108863 & o;
        } for (; i < this.length - r; i++)
            s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o; if (0 === s)
            return this.strip(); for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
            s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o; return this.negative = 1, this.strip(); }, o.prototype._wordDiv = function (e, t) { var r = (this.length, e.length), n = this.clone(), i = e, a = 0 | i.words[i.length - 1]; 0 != (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]); var s, c = n.length - i.length; if ("mod" !== t) {
            (s = new o(null)).length = c + 1, s.words = new Array(s.length);
            for (var l = 0; l < s.length; l++)
                s.words[l] = 0;
        } var u = n.clone()._ishlnsubmul(i, 1, c); 0 === u.negative && (n = u, s && (s.words[c] = 1)); for (var f = c - 1; f >= 0; f--) {
            var h = 67108864 * (0 | n.words[i.length + f]) + (0 | n.words[i.length + f - 1]);
            for (h = Math.min(h / a | 0, 67108863), n._ishlnsubmul(i, h, f); 0 !== n.negative;)
                h--, n.negative = 0, n._ishlnsubmul(i, 1, f), n.isZero() || (n.negative ^= 1);
            s && (s.words[f] = h);
        } return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), { div: s || null, mod: n }; }, o.prototype.divmod = function (e, t, r) { return n(!e.isZero()), this.isZero() ? { div: new o(0), mod: new o(0) } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), { div: i, mod: a }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), { div: i, mod: s.mod }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), { div: s.div, mod: a }) : e.length > this.length || this.cmp(e) < 0 ? { div: new o(0), mod: this } : 1 === e.length ? "div" === t ? { div: this.divn(e.words[0]), mod: null } : "mod" === t ? { div: null, mod: new o(this.modn(e.words[0])) } : { div: this.divn(e.words[0]), mod: new o(this.modn(e.words[0])) } : this._wordDiv(e, t); var i, a, s; }, o.prototype.div = function (e) { return this.divmod(e, "div", !1).div; }, o.prototype.mod = function (e) { return this.divmod(e, "mod", !1).mod; }, o.prototype.umod = function (e) { return this.divmod(e, "mod", !0).mod; }, o.prototype.divRound = function (e) { var t = this.divmod(e); if (t.mod.isZero())
            return t.div; var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod, n = e.ushrn(1), i = e.andln(1), o = r.cmp(n); return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1); }, o.prototype.modn = function (e) { n(e <= 67108863); for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--)
            r = (t * r + (0 | this.words[i])) % e; return r; }, o.prototype.idivn = function (e) { n(e <= 67108863); for (var t = 0, r = this.length - 1; r >= 0; r--) {
            var i = (0 | this.words[r]) + 67108864 * t;
            this.words[r] = i / e | 0, t = i % e;
        } return this.strip(); }, o.prototype.divn = function (e) { return this.clone().idivn(e); }, o.prototype.egcd = function (e) { n(0 === e.negative), n(!e.isZero()); var t = this, r = e.clone(); t = 0 !== t.negative ? t.umod(e) : t.clone(); for (var i = new o(1), a = new o(0), s = new o(0), c = new o(1), l = 0; t.isEven() && r.isEven();)
            t.iushrn(1), r.iushrn(1), ++l; for (var u = r.clone(), f = t.clone(); !t.isZero();) {
            for (var h = 0, d = 1; 0 == (t.words[0] & d) && h < 26; ++h, d <<= 1)
                ;
            if (h > 0)
                for (t.iushrn(h); h-- > 0;)
                    (i.isOdd() || a.isOdd()) && (i.iadd(u), a.isub(f)), i.iushrn(1), a.iushrn(1);
            for (var p = 0, g = 1; 0 == (r.words[0] & g) && p < 26; ++p, g <<= 1)
                ;
            if (p > 0)
                for (r.iushrn(p); p-- > 0;)
                    (s.isOdd() || c.isOdd()) && (s.iadd(u), c.isub(f)), s.iushrn(1), c.iushrn(1);
            t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(c)) : (r.isub(t), s.isub(i), c.isub(a));
        } return { a: s, b: c, gcd: r.iushln(l) }; }, o.prototype._invmp = function (e) { n(0 === e.negative), n(!e.isZero()); var t = this, r = e.clone(); t = 0 !== t.negative ? t.umod(e) : t.clone(); for (var i, a = new o(1), s = new o(0), c = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
            for (var l = 0, u = 1; 0 == (t.words[0] & u) && l < 26; ++l, u <<= 1)
                ;
            if (l > 0)
                for (t.iushrn(l); l-- > 0;)
                    a.isOdd() && a.iadd(c), a.iushrn(1);
            for (var f = 0, h = 1; 0 == (r.words[0] & h) && f < 26; ++f, h <<= 1)
                ;
            if (f > 0)
                for (r.iushrn(f); f-- > 0;)
                    s.isOdd() && s.iadd(c), s.iushrn(1);
            t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a));
        } return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i; }, o.prototype.gcd = function (e) { if (this.isZero())
            return e.abs(); if (e.isZero())
            return this.abs(); var t = this.clone(), r = e.clone(); t.negative = 0, r.negative = 0; for (var n = 0; t.isEven() && r.isEven(); n++)
            t.iushrn(1), r.iushrn(1); for (;;) {
            for (; t.isEven();)
                t.iushrn(1);
            for (; r.isEven();)
                r.iushrn(1);
            var i = t.cmp(r);
            if (i < 0) {
                var o = t;
                t = r, r = o;
            }
            else if (0 === i || 0 === r.cmpn(1))
                break;
            t.isub(r);
        } return r.iushln(n); }, o.prototype.invm = function (e) { return this.egcd(e).a.umod(e); }, o.prototype.isEven = function () { return 0 == (1 & this.words[0]); }, o.prototype.isOdd = function () { return 1 == (1 & this.words[0]); }, o.prototype.andln = function (e) { return this.words[0] & e; }, o.prototype.bincn = function (e) { n("number" == typeof e); var t = e % 26, r = (e - t) / 26, i = 1 << t; if (this.length <= r)
            return this._expand(r + 1), this.words[r] |= i, this; for (var o = i, a = r; 0 !== o && a < this.length; a++) {
            var s = 0 | this.words[a];
            o = (s += o) >>> 26, s &= 67108863, this.words[a] = s;
        } return 0 !== o && (this.words[a] = o, this.length++), this; }, o.prototype.isZero = function () { return 1 === this.length && 0 === this.words[0]; }, o.prototype.cmpn = function (e) { var t, r = e < 0; if (0 !== this.negative && !r)
            return -1; if (0 === this.negative && r)
            return 1; if (this.strip(), this.length > 1)
            t = 1;
        else {
            r && (e = -e), n(e <= 67108863, "Number is too big");
            var i = 0 | this.words[0];
            t = i === e ? 0 : i < e ? -1 : 1;
        } return 0 !== this.negative ? 0 | -t : t; }, o.prototype.cmp = function (e) { if (0 !== this.negative && 0 === e.negative)
            return -1; if (0 === this.negative && 0 !== e.negative)
            return 1; var t = this.ucmp(e); return 0 !== this.negative ? 0 | -t : t; }, o.prototype.ucmp = function (e) { if (this.length > e.length)
            return 1; if (this.length < e.length)
            return -1; for (var t = 0, r = this.length - 1; r >= 0; r--) {
            var n = 0 | this.words[r], i = 0 | e.words[r];
            if (n !== i) {
                n < i ? t = -1 : n > i && (t = 1);
                break;
            }
        } return t; }, o.prototype.gtn = function (e) { return 1 === this.cmpn(e); }, o.prototype.gt = function (e) { return 1 === this.cmp(e); }, o.prototype.gten = function (e) { return this.cmpn(e) >= 0; }, o.prototype.gte = function (e) { return this.cmp(e) >= 0; }, o.prototype.ltn = function (e) { return -1 === this.cmpn(e); }, o.prototype.lt = function (e) { return -1 === this.cmp(e); }, o.prototype.lten = function (e) { return this.cmpn(e) <= 0; }, o.prototype.lte = function (e) { return this.cmp(e) <= 0; }, o.prototype.eqn = function (e) { return 0 === this.cmpn(e); }, o.prototype.eq = function (e) { return 0 === this.cmp(e); }, o.red = function (e) { return new w(e); }, o.prototype.toRed = function (e) { return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e); }, o.prototype.fromRed = function () { return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this); }, o.prototype._forceRed = function (e) { return this.red = e, this; }, o.prototype.forceRed = function (e) { return n(!this.red, "Already a number in reduction context"), this._forceRed(e); }, o.prototype.redAdd = function (e) { return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e); }, o.prototype.redIAdd = function (e) { return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e); }, o.prototype.redSub = function (e) { return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e); }, o.prototype.redISub = function (e) { return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e); }, o.prototype.redShl = function (e) { return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e); }, o.prototype.redMul = function (e) { return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e); }, o.prototype.redIMul = function (e) { return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e); }, o.prototype.redSqr = function () { return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this); }, o.prototype.redISqr = function () { return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this); }, o.prototype.redSqrt = function () { return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this); }, o.prototype.redInvm = function () { return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this); }, o.prototype.redNeg = function () { return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this); }, o.prototype.redPow = function (e) { return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e); };
        var m = { k256: null, p224: null, p192: null, p25519: null };
        function b(e, t) { this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp(); }
        function y() { b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"); }
        function v() { b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"); }
        function A() { b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"); }
        function S() { b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"); }
        function w(e) { if ("string" == typeof e) {
            var t = o._prime(e);
            this.m = t.p, this.prime = t;
        }
        else
            n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null; }
        function E(e) { w.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv); }
        b.prototype._tmp = function () { var e = new o(null); return e.words = new Array(Math.ceil(this.n / 13)), e; }, b.prototype.ireduce = function (e) { var t, r = e; do {
            this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
        } while (t > this.n); var n = t < this.n ? -1 : r.ucmp(this.p); return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r; }, b.prototype.split = function (e, t) { e.iushrn(this.n, 0, t); }, b.prototype.imulK = function (e) { return e.imul(this.k); }, i(y, b), y.prototype.split = function (e, t) { for (var r = 4194303, n = Math.min(e.length, 9), i = 0; i < n; i++)
            t.words[i] = e.words[i]; if (t.length = n, e.length <= 9)
            return e.words[0] = 0, void (e.length = 1); var o = e.words[9]; for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) {
            var a = 0 | e.words[i];
            e.words[i - 10] = (a & r) << 4 | o >>> 22, o = a;
        } o >>>= 22, e.words[i - 10] = o, 0 === o && e.length > 10 ? e.length -= 10 : e.length -= 9; }, y.prototype.imulK = function (e) { e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2; for (var t = 0, r = 0; r < e.length; r++) {
            var n = 0 | e.words[r];
            t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0);
        } return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e; }, i(v, b), i(A, b), i(S, b), S.prototype.imulK = function (e) { for (var t = 0, r = 0; r < e.length; r++) {
            var n = 19 * (0 | e.words[r]) + t, i = 67108863 & n;
            n >>>= 26, e.words[r] = i, t = n;
        } return 0 !== t && (e.words[e.length++] = t), e; }, o._prime = function (e) { if (m[e])
            return m[e]; var t; if ("k256" === e)
            t = new y;
        else if ("p224" === e)
            t = new v;
        else if ("p192" === e)
            t = new A;
        else {
            if ("p25519" !== e)
                throw new Error("Unknown prime " + e);
            t = new S;
        } return m[e] = t, t; }, w.prototype._verify1 = function (e) { n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers"); }, w.prototype._verify2 = function (e, t) { n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers"); }, w.prototype.imod = function (e) { return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this); }, w.prototype.neg = function (e) { return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this); }, w.prototype.add = function (e, t) { this._verify2(e, t); var r = e.add(t); return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this); }, w.prototype.iadd = function (e, t) { this._verify2(e, t); var r = e.iadd(t); return r.cmp(this.m) >= 0 && r.isub(this.m), r; }, w.prototype.sub = function (e, t) { this._verify2(e, t); var r = e.sub(t); return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this); }, w.prototype.isub = function (e, t) { this._verify2(e, t); var r = e.isub(t); return r.cmpn(0) < 0 && r.iadd(this.m), r; }, w.prototype.shl = function (e, t) { return this._verify1(e), this.imod(e.ushln(t)); }, w.prototype.imul = function (e, t) { return this._verify2(e, t), this.imod(e.imul(t)); }, w.prototype.mul = function (e, t) { return this._verify2(e, t), this.imod(e.mul(t)); }, w.prototype.isqr = function (e) { return this.imul(e, e.clone()); }, w.prototype.sqr = function (e) { return this.mul(e, e); }, w.prototype.sqrt = function (e) { if (e.isZero())
            return e.clone(); var t = this.m.andln(3); if (n(t % 2 == 1), 3 === t) {
            var r = this.m.add(new o(1)).iushrn(2);
            return this.pow(e, r);
        } for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);)
            a++, i.iushrn(1); n(!i.isZero()); var s = new o(1).toRed(this), c = s.redNeg(), l = this.m.subn(1).iushrn(1), u = this.m.bitLength(); for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, l).cmp(c);)
            u.redIAdd(c); for (var f = this.pow(u, i), h = this.pow(e, i.addn(1).iushrn(1)), d = this.pow(e, i), p = a; 0 !== d.cmp(s);) {
            for (var g = d, m = 0; 0 !== g.cmp(s); m++)
                g = g.redSqr();
            n(m < p);
            var b = this.pow(f, new o(1).iushln(p - m - 1));
            h = h.redMul(b), f = b.redSqr(), d = d.redMul(f), p = m;
        } return h; }, w.prototype.invm = function (e) { var t = e._invmp(this.m); return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t); }, w.prototype.pow = function (e, t) { if (t.isZero())
            return new o(1).toRed(this); if (0 === t.cmpn(1))
            return e.clone(); var r = new Array(16); r[0] = new o(1).toRed(this), r[1] = e; for (var n = 2; n < r.length; n++)
            r[n] = this.mul(r[n - 1], e); var i = r[0], a = 0, s = 0, c = t.bitLength() % 26; for (0 === c && (c = 26), n = t.length - 1; n >= 0; n--) {
            for (var l = t.words[n], u = c - 1; u >= 0; u--) {
                var f = l >> u & 1;
                i !== r[0] && (i = this.sqr(i)), 0 !== f || 0 !== a ? (a <<= 1, a |= f, (4 == ++s || 0 === n && 0 === u) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0;
            }
            c = 26;
        } return i; }, w.prototype.convertTo = function (e) { var t = e.umod(this.m); return t === e ? t.clone() : t; }, w.prototype.convertFrom = function (e) { var t = e.clone(); return t.red = null, t; }, o.mont = function (e) { return new E(e); }, i(E, w), E.prototype.convertTo = function (e) { return this.imod(e.ushln(this.shift)); }, E.prototype.convertFrom = function (e) { var t = this.imod(e.mul(this.rinv)); return t.red = null, t; }, E.prototype.imul = function (e, t) { if (e.isZero() || t.isZero())
            return e.words[0] = 0, e.length = 1, e; var r = e.imul(t), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = r.isub(n).iushrn(this.shift), o = i; return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this); }, E.prototype.mul = function (e, t) { if (e.isZero() || t.isZero())
            return new o(0)._forceRed(this); var r = e.mul(t), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = r.isub(n).iushrn(this.shift), a = i; return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this); }, E.prototype.invm = function (e) { return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this); };
    }(e = r.nmd(e), this); }, 9931: function (e, t, r) { var n; function i(e) { this.rand = e; } if (e.exports = function (e) { return n || (n = new i(null)), n.generate(e); }, e.exports.Rand = i, i.prototype.generate = function (e) { return this._rand(e); }, i.prototype._rand = function (e) { if (this.rand.getBytes)
        return this.rand.getBytes(e); for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
        t[r] = this.rand.getByte(); return t; }, "object" == typeof self)
        self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function (e) { var t = new Uint8Array(e); return self.crypto.getRandomValues(t), t; } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function (e) { var t = new Uint8Array(e); return self.msCrypto.getRandomValues(t), t; } : "object" == typeof window && (i.prototype._rand = function () { throw new Error("Not implemented yet"); });
    else
        try {
            var o = r(3906);
            if ("function" != typeof o.randomBytes)
                throw new Error("Not supported");
            i.prototype._rand = function (e) { return o.randomBytes(e); };
        }
        catch (e) { } }, 1924: function (e, t, r) {
        "use strict";
        var n = r(210), i = r(5559), o = i(n("String.prototype.indexOf"));
        e.exports = function (e, t) { var r = n(e, !!t); return "function" == typeof r && o(e, ".prototype.") > -1 ? i(r) : r; };
    }, 5559: function (e, t, r) {
        "use strict";
        var n = r(8612), i = r(210), o = i("%Function.prototype.apply%"), a = i("%Function.prototype.call%"), s = i("%Reflect.apply%", !0) || n.call(a, o), c = i("%Object.getOwnPropertyDescriptor%", !0), l = i("%Object.defineProperty%", !0), u = i("%Math.max%");
        if (l)
            try {
                l({}, "a", { value: 1 });
            }
            catch (e) {
                l = null;
            }
        e.exports = function (e) { var t = s(n, a, arguments); if (c && l) {
            var r = c(t, "length");
            r.configurable && l(t, "length", { value: 1 + u(0, e.length - (arguments.length - 1)) });
        } return t; };
        var f = function () { return s(n, o, arguments); };
        l ? l(e.exports, "apply", { value: f }) : e.exports.apply = f;
    }, 4289: function (e, t, r) {
        "use strict";
        var n = r(2215), i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"), o = Object.prototype.toString, a = Array.prototype.concat, s = Object.defineProperty, c = s && function () { var e = {}; try {
            for (var t in s(e, "x", { enumerable: !1, value: e }), e)
                return !1;
            return e.x === e;
        }
        catch (e) {
            return !1;
        } }(), l = function (e, t, r, n) { var i; (!(t in e) || "function" == typeof (i = n) && "[object Function]" === o.call(i) && n()) && (c ? s(e, t, { configurable: !0, enumerable: !1, value: r, writable: !0 }) : e[t] = r); }, u = function (e, t) { var r = arguments.length > 2 ? arguments[2] : {}, o = n(t); i && (o = a.call(o, Object.getOwnPropertySymbols(t))); for (var s = 0; s < o.length; s += 1)
            l(e, o[s], t[o[s]], r[o[s]]); };
        u.supportsDescriptors = !!c, e.exports = u;
    }, 6266: function (e, t, r) {
        "use strict";
        var n = t;
        n.version = r(7519).i8, n.utils = r(953), n.rand = r(9931), n.curve = r(8254), n.curves = r(5427), n.ec = r(7954), n.eddsa = r(5980);
    }, 4918: function (e, t, r) {
        "use strict";
        var n = r(3550), i = r(953), o = i.getNAF, a = i.getJSF, s = i.assert;
        function c(e, t) { this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0; var r = this.n && this.p.div(this.n); !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red)); }
        function l(e, t) { this.curve = e, this.type = t, this.precomputed = null; }
        e.exports = c, c.prototype.point = function () { throw new Error("Not implemented"); }, c.prototype.validate = function () { throw new Error("Not implemented"); }, c.prototype._fixedNafMul = function (e, t) { s(e.precomputed); var r = e._getDoubles(), n = o(t, 1, this._bitLength), i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1); i /= 3; for (var a = [], c = 0; c < n.length; c += r.step) {
            var l = 0;
            for (t = c + r.step - 1; t >= c; t--)
                l = (l << 1) + n[t];
            a.push(l);
        } for (var u = this.jpoint(null, null, null), f = this.jpoint(null, null, null), h = i; h > 0; h--) {
            for (c = 0; c < a.length; c++)
                (l = a[c]) === h ? f = f.mixedAdd(r.points[c]) : l === -h && (f = f.mixedAdd(r.points[c].neg()));
            u = u.add(f);
        } return u.toP(); }, c.prototype._wnafMul = function (e, t) { var r = 4, n = e._getNAFPoints(r); r = n.wnd; for (var i = n.points, a = o(t, r, this._bitLength), c = this.jpoint(null, null, null), l = a.length - 1; l >= 0; l--) {
            for (t = 0; l >= 0 && 0 === a[l]; l--)
                t++;
            if (l >= 0 && t++, c = c.dblp(t), l < 0)
                break;
            var u = a[l];
            s(0 !== u), c = "affine" === e.type ? u > 0 ? c.mixedAdd(i[u - 1 >> 1]) : c.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? c.add(i[u - 1 >> 1]) : c.add(i[-u - 1 >> 1].neg());
        } return "affine" === e.type ? c.toP() : c; }, c.prototype._wnafMulAdd = function (e, t, r, n, i) { for (var s = this._wnafT1, c = this._wnafT2, l = this._wnafT3, u = 0, f = 0; f < n; f++) {
            var h = (k = t[f])._getNAFPoints(e);
            s[f] = h.wnd, c[f] = h.points;
        } for (f = n - 1; f >= 1; f -= 2) {
            var d = f - 1, p = f;
            if (1 === s[d] && 1 === s[p]) {
                var g = [t[d], null, null, t[p]];
                0 === t[d].y.cmp(t[p].y) ? (g[1] = t[d].add(t[p]), g[2] = t[d].toJ().mixedAdd(t[p].neg())) : 0 === t[d].y.cmp(t[p].y.redNeg()) ? (g[1] = t[d].toJ().mixedAdd(t[p]), g[2] = t[d].add(t[p].neg())) : (g[1] = t[d].toJ().mixedAdd(t[p]), g[2] = t[d].toJ().mixedAdd(t[p].neg()));
                var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3], b = a(r[d], r[p]);
                u = Math.max(b[0].length, u), l[d] = new Array(u), l[p] = new Array(u);
                for (var y = 0; y < u; y++) {
                    var v = 0 | b[0][y], A = 0 | b[1][y];
                    l[d][y] = m[3 * (v + 1) + (A + 1)], l[p][y] = 0, c[d] = g;
                }
            }
            else
                l[d] = o(r[d], s[d], this._bitLength), l[p] = o(r[p], s[p], this._bitLength), u = Math.max(l[d].length, u), u = Math.max(l[p].length, u);
        } var S = this.jpoint(null, null, null), w = this._wnafT4; for (f = u; f >= 0; f--) {
            for (var E = 0; f >= 0;) {
                var T = !0;
                for (y = 0; y < n; y++)
                    w[y] = 0 | l[y][f], 0 !== w[y] && (T = !1);
                if (!T)
                    break;
                E++, f--;
            }
            if (f >= 0 && E++, S = S.dblp(E), f < 0)
                break;
            for (y = 0; y < n; y++) {
                var k, B = w[y];
                0 !== B && (B > 0 ? k = c[y][B - 1 >> 1] : B < 0 && (k = c[y][-B - 1 >> 1].neg()), S = "affine" === k.type ? S.mixedAdd(k) : S.add(k));
            }
        } for (f = 0; f < n; f++)
            c[f] = null; return i ? S : S.toP(); }, c.BasePoint = l, l.prototype.eq = function () { throw new Error("Not implemented"); }, l.prototype.validate = function () { return this.curve.validate(this); }, c.prototype.decodePoint = function (e, t) { e = i.toArray(e, t); var r = this.p.byteLength(); if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r)); if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]); throw new Error("Unknown point format"); }, l.prototype.encodeCompressed = function (e) { return this.encode(e, !0); }, l.prototype._encode = function (e) { var t = this.curve.p.byteLength(), r = this.getX().toArray("be", t); return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t)); }, l.prototype.encode = function (e, t) { return i.encode(this._encode(t), e); }, l.prototype.precompute = function (e) { if (this.precomputed)
            return this; var t = { doubles: null, naf: null, beta: null }; return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this; }, l.prototype._hasDoubles = function (e) { if (!this.precomputed)
            return !1; var t = this.precomputed.doubles; return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step); }, l.prototype._getDoubles = function (e, t) { if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles; for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++)
                n = n.dbl();
            r.push(n);
        } return { step: e, points: r }; }, l.prototype._getNAFPoints = function (e) { if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf; for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
            t[i] = t[i - 1].add(n); return { wnd: e, points: t }; }, l.prototype._getBeta = function () { return null; }, l.prototype.dblp = function (e) { for (var t = this, r = 0; r < e; r++)
            t = t.dbl(); return t; };
    }, 1138: function (e, t, r) {
        "use strict";
        var n = r(953), i = r(3550), o = r(5717), a = r(4918), s = n.assert;
        function c(e) { this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, a.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c); }
        function l(e, t, r, n, o) { a.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = o && new i(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm())))); }
        o(c, a), e.exports = c, c.prototype._mulA = function (e) { return this.mOneA ? e.redNeg() : this.a.redMul(e); }, c.prototype._mulC = function (e) { return this.oneC ? e : this.c.redMul(e); }, c.prototype.jpoint = function (e, t, r, n) { return this.point(e, t, r, n); }, c.prototype.pointFromX = function (e, t) { (e = new i(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr(), n = this.c2.redSub(this.a.redMul(r)), o = this.one.redSub(this.c2.redMul(this.d).redMul(r)), a = n.redMul(o.redInvm()), s = a.redSqrt(); if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point"); var c = s.fromRed().isOdd(); return (t && !c || !t && c) && (s = s.redNeg()), this.point(e, s); }, c.prototype.pointFromY = function (e, t) { (e = new i(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr(), n = r.redSub(this.c2), o = r.redMul(this.d).redMul(this.c2).redSub(this.a), a = n.redMul(o.redInvm()); if (0 === a.cmp(this.zero)) {
            if (t)
                throw new Error("invalid point");
            return this.point(this.zero, e);
        } var s = a.redSqrt(); if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point"); return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e); }, c.prototype.validate = function (e) { if (e.isInfinity())
            return !0; e.normalize(); var t = e.x.redSqr(), r = e.y.redSqr(), n = t.redMul(this.a).redAdd(r), i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r))); return 0 === n.cmp(i); }, o(l, a.BasePoint), c.prototype.pointFromJSON = function (e) { return l.fromJSON(this, e); }, c.prototype.point = function (e, t, r, n) { return new l(this, e, t, r, n); }, l.fromJSON = function (e, t) { return new l(e, t[0], t[1], t[2]); }, l.prototype.inspect = function () { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"; }, l.prototype.isInfinity = function () { return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c)); }, l.prototype._extDbl = function () { var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr(); r = r.redIAdd(r); var n = this.curve._mulA(e), i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t), o = n.redAdd(t), a = o.redSub(r), s = n.redSub(t), c = i.redMul(a), l = o.redMul(s), u = i.redMul(s), f = a.redMul(o); return this.curve.point(c, l, f, u); }, l.prototype._projDbl = function () { var e, t, r, n = this.x.redAdd(this.y).redSqr(), i = this.x.redSqr(), o = this.y.redSqr(); if (this.curve.twisted) {
            var a = (l = this.curve._mulA(i)).redAdd(o);
            if (this.zOne)
                e = n.redSub(i).redSub(o).redMul(a.redSub(this.curve.two)), t = a.redMul(l.redSub(o)), r = a.redSqr().redSub(a).redSub(a);
            else {
                var s = this.z.redSqr(), c = a.redSub(s).redISub(s);
                e = n.redSub(i).redISub(o).redMul(c), t = a.redMul(l.redSub(o)), r = a.redMul(c);
            }
        }
        else {
            var l = i.redAdd(o);
            s = this.curve._mulC(this.z).redSqr(), c = l.redSub(s).redSub(s), e = this.curve._mulC(n.redISub(l)).redMul(c), t = this.curve._mulC(l).redMul(i.redISub(o)), r = l.redMul(c);
        } return this.curve.point(e, t, r); }, l.prototype.dbl = function () { return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl(); }, l.prototype._extAdd = function (e) { var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)), r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)), n = this.t.redMul(this.curve.dd).redMul(e.t), i = this.z.redMul(e.z.redAdd(e.z)), o = r.redSub(t), a = i.redSub(n), s = i.redAdd(n), c = r.redAdd(t), l = o.redMul(a), u = s.redMul(c), f = o.redMul(c), h = a.redMul(s); return this.curve.point(l, u, h, f); }, l.prototype._projAdd = function (e) { var t, r, n = this.z.redMul(e.z), i = n.redSqr(), o = this.x.redMul(e.x), a = this.y.redMul(e.y), s = this.curve.d.redMul(o).redMul(a), c = i.redSub(s), l = i.redAdd(s), u = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a), f = n.redMul(c).redMul(u); return this.curve.twisted ? (t = n.redMul(l).redMul(a.redSub(this.curve._mulA(o))), r = c.redMul(l)) : (t = n.redMul(l).redMul(a.redSub(o)), r = this.curve._mulC(c).redMul(l)), this.curve.point(f, t, r); }, l.prototype.add = function (e) { return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e); }, l.prototype.mul = function (e) { return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e); }, l.prototype.mulAdd = function (e, t, r) { return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1); }, l.prototype.jmulAdd = function (e, t, r) { return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0); }, l.prototype.normalize = function () { if (this.zOne)
            return this; var e = this.z.redInvm(); return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this; }, l.prototype.neg = function () { return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg()); }, l.prototype.getX = function () { return this.normalize(), this.x.fromRed(); }, l.prototype.getY = function () { return this.normalize(), this.y.fromRed(); }, l.prototype.eq = function (e) { return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()); }, l.prototype.eqXToP = function (e) { var t = e.toRed(this.curve.red).redMul(this.z); if (0 === this.x.cmp(t))
            return !0; for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) {
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)
                return !1;
            if (t.redIAdd(n), 0 === this.x.cmp(t))
                return !0;
        } }, l.prototype.toP = l.prototype.normalize, l.prototype.mixedAdd = l.prototype.add;
    }, 8254: function (e, t, r) {
        "use strict";
        var n = t;
        n.base = r(4918), n.short = r(6673), n.mont = r(2881), n.edwards = r(1138);
    }, 2881: function (e, t, r) {
        "use strict";
        var n = r(3550), i = r(5717), o = r(4918), a = r(953);
        function s(e) { o.call(this, "mont", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two)); }
        function c(e, t, r) { o.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(t, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red))); }
        i(s, o), e.exports = s, s.prototype.validate = function (e) { var t = e.normalize().x, r = t.redSqr(), n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t); return 0 === n.redSqrt().redSqr().cmp(n); }, i(c, o.BasePoint), s.prototype.decodePoint = function (e, t) { return this.point(a.toArray(e, t), 1); }, s.prototype.point = function (e, t) { return new c(this, e, t); }, s.prototype.pointFromJSON = function (e) { return c.fromJSON(this, e); }, c.prototype.precompute = function () { }, c.prototype._encode = function () { return this.getX().toArray("be", this.curve.p.byteLength()); }, c.fromJSON = function (e, t) { return new c(e, t[0], t[1] || e.one); }, c.prototype.inspect = function () { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"; }, c.prototype.isInfinity = function () { return 0 === this.z.cmpn(0); }, c.prototype.dbl = function () { var e = this.x.redAdd(this.z).redSqr(), t = this.x.redSub(this.z).redSqr(), r = e.redSub(t), n = e.redMul(t), i = r.redMul(t.redAdd(this.curve.a24.redMul(r))); return this.curve.point(n, i); }, c.prototype.add = function () { throw new Error("Not supported on Montgomery curve"); }, c.prototype.diffAdd = function (e, t) { var r = this.x.redAdd(this.z), n = this.x.redSub(this.z), i = e.x.redAdd(e.z), o = e.x.redSub(e.z).redMul(r), a = i.redMul(n), s = t.z.redMul(o.redAdd(a).redSqr()), c = t.x.redMul(o.redISub(a).redSqr()); return this.curve.point(s, c); }, c.prototype.mul = function (e) { for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1))
            i.push(t.andln(1)); for (var o = i.length - 1; o >= 0; o--)
            0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl()); return n; }, c.prototype.mulAdd = function () { throw new Error("Not supported on Montgomery curve"); }, c.prototype.jumlAdd = function () { throw new Error("Not supported on Montgomery curve"); }, c.prototype.eq = function (e) { return 0 === this.getX().cmp(e.getX()); }, c.prototype.normalize = function () { return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this; }, c.prototype.getX = function () { return this.normalize(), this.x.fromRed(); };
    }, 6673: function (e, t, r) {
        "use strict";
        var n = r(953), i = r(3550), o = r(5717), a = r(4918), s = n.assert;
        function c(e) { a.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4); }
        function l(e, t, r, n) { a.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1); }
        function u(e, t, r, n) { a.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one; }
        o(c, a), e.exports = c, c.prototype._getEndomorphism = function (e) { if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta)
                t = new i(e.beta, 16).toRed(this.red);
            else {
                var n = this._getEndoRoots(this.p);
                t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
            }
            if (e.lambda)
                r = new i(e.lambda, 16);
            else {
                var o = this._getEndoRoots(this.n);
                0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return { beta: t, lambda: r, basis: e.basis ? e.basis.map((function (e) { return { a: new i(e.a, 16), b: new i(e.b, 16) }; })) : this._getEndoBasis(r) };
        } }, c.prototype._getEndoRoots = function (e) { var t = e === this.p ? this.red : i.mont(e), r = new i(2).toRed(t).redInvm(), n = r.redNeg(), o = new i(3).toRed(t).redNeg().redSqrt().redMul(r); return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]; }, c.prototype._getEndoBasis = function (e) { for (var t, r, n, o, a, s, c, l, u, f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, d = this.n.clone(), p = new i(1), g = new i(0), m = new i(0), b = new i(1), y = 0; 0 !== h.cmpn(0);) {
            var v = d.div(h);
            l = d.sub(v.mul(h)), u = m.sub(v.mul(p));
            var A = b.sub(v.mul(g));
            if (!n && l.cmp(f) < 0)
                t = c.neg(), r = p, n = l.neg(), o = u;
            else if (n && 2 == ++y)
                break;
            c = l, d = h, h = l, m = p, p = u, b = g, g = A;
        } a = l.neg(), s = u; var S = n.sqr().add(o.sqr()); return a.sqr().add(s.sqr()).cmp(S) >= 0 && (a = t, s = r), n.negative && (n = n.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{ a: n, b: o }, { a: a, b: s }]; }, c.prototype._endoSplit = function (e) { var t = this.endo.basis, r = t[0], n = t[1], i = n.b.mul(e).divRound(this.n), o = r.b.neg().mul(e).divRound(this.n), a = i.mul(r.a), s = o.mul(n.a), c = i.mul(r.b), l = o.mul(n.b); return { k1: e.sub(a).sub(s), k2: c.add(l).neg() }; }, c.prototype.pointFromX = function (e, t) { (e = new i(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), n = r.redSqrt(); if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point"); var o = n.fromRed().isOdd(); return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n); }, c.prototype.validate = function (e) { if (e.inf)
            return !0; var t = e.x, r = e.y, n = this.a.redMul(t), i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b); return 0 === r.redSqr().redISub(i).cmpn(0); }, c.prototype._endoWnafMulAdd = function (e, t, r) { for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
            var a = this._endoSplit(t[o]), s = e[o], c = s._getBeta();
            a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), c = c.neg(!0)), n[2 * o] = s, n[2 * o + 1] = c, i[2 * o] = a.k1, i[2 * o + 1] = a.k2;
        } for (var l = this._wnafMulAdd(1, n, i, 2 * o, r), u = 0; u < 2 * o; u++)
            n[u] = null, i[u] = null; return l; }, o(l, a.BasePoint), c.prototype.point = function (e, t, r) { return new l(this, e, t, r); }, c.prototype.pointFromJSON = function (e, t) { return l.fromJSON(this, e, t); }, l.prototype._getBeta = function () { if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta)
                return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var r = this.curve, n = function (e) { return r.point(e.x.redMul(r.endo.beta), e.y); };
                e.beta = t, t.precomputed = { beta: null, naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(n) } };
            }
            return t;
        } }, l.prototype.toJSON = function () { return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y]; }, l.fromJSON = function (e, t, r) { "string" == typeof t && (t = JSON.parse(t)); var n = e.point(t[0], t[1], r); if (!t[2])
            return n; function i(t) { return e.point(t[0], t[1], r); } var o = t[2]; return n.precomputed = { beta: null, doubles: o.doubles && { step: o.doubles.step, points: [n].concat(o.doubles.points.map(i)) }, naf: o.naf && { wnd: o.naf.wnd, points: [n].concat(o.naf.points.map(i)) } }, n; }, l.prototype.inspect = function () { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"; }, l.prototype.isInfinity = function () { return this.inf; }, l.prototype.add = function (e) { if (this.inf)
            return e; if (e.inf)
            return this; if (this.eq(e))
            return this.dbl(); if (this.neg().eq(e))
            return this.curve.point(null, null); if (0 === this.x.cmp(e.x))
            return this.curve.point(null, null); var t = this.y.redSub(e.y); 0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm())); var r = t.redSqr().redISub(this.x).redISub(e.x), n = t.redMul(this.x.redSub(r)).redISub(this.y); return this.curve.point(r, n); }, l.prototype.dbl = function () { if (this.inf)
            return this; var e = this.y.redAdd(this.y); if (0 === e.cmpn(0))
            return this.curve.point(null, null); var t = this.curve.a, r = this.x.redSqr(), n = e.redInvm(), i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n), o = i.redSqr().redISub(this.x.redAdd(this.x)), a = i.redMul(this.x.redSub(o)).redISub(this.y); return this.curve.point(o, a); }, l.prototype.getX = function () { return this.x.fromRed(); }, l.prototype.getY = function () { return this.y.fromRed(); }, l.prototype.mul = function (e) { return e = new i(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e); }, l.prototype.mulAdd = function (e, t, r) { var n = [this, t], i = [e, r]; return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2); }, l.prototype.jmulAdd = function (e, t, r) { var n = [this, t], i = [e, r]; return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0); }, l.prototype.eq = function (e) { return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y)); }, l.prototype.neg = function (e) { if (this.inf)
            return this; var t = this.curve.point(this.x, this.y.redNeg()); if (e && this.precomputed) {
            var r = this.precomputed, n = function (e) { return e.neg(); };
            t.precomputed = { naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) }, doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(n) } };
        } return t; }, l.prototype.toJ = function () { return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one); }, o(u, a.BasePoint), c.prototype.jpoint = function (e, t, r) { return new u(this, e, t, r); }, u.prototype.toP = function () { if (this.isInfinity())
            return this.curve.point(null, null); var e = this.z.redInvm(), t = e.redSqr(), r = this.x.redMul(t), n = this.y.redMul(t).redMul(e); return this.curve.point(r, n); }, u.prototype.neg = function () { return this.curve.jpoint(this.x, this.y.redNeg(), this.z); }, u.prototype.add = function (e) { if (this.isInfinity())
            return e; if (e.isInfinity())
            return this; var t = e.z.redSqr(), r = this.z.redSqr(), n = this.x.redMul(t), i = e.x.redMul(r), o = this.y.redMul(t.redMul(e.z)), a = e.y.redMul(r.redMul(this.z)), s = n.redSub(i), c = o.redSub(a); if (0 === s.cmpn(0))
            return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var l = s.redSqr(), u = l.redMul(s), f = n.redMul(l), h = c.redSqr().redIAdd(u).redISub(f).redISub(f), d = c.redMul(f.redISub(h)).redISub(o.redMul(u)), p = this.z.redMul(e.z).redMul(s); return this.curve.jpoint(h, d, p); }, u.prototype.mixedAdd = function (e) { if (this.isInfinity())
            return e.toJ(); if (e.isInfinity())
            return this; var t = this.z.redSqr(), r = this.x, n = e.x.redMul(t), i = this.y, o = e.y.redMul(t).redMul(this.z), a = r.redSub(n), s = i.redSub(o); if (0 === a.cmpn(0))
            return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var c = a.redSqr(), l = c.redMul(a), u = r.redMul(c), f = s.redSqr().redIAdd(l).redISub(u).redISub(u), h = s.redMul(u.redISub(f)).redISub(i.redMul(l)), d = this.z.redMul(a); return this.curve.jpoint(f, h, d); }, u.prototype.dblp = function (e) { if (0 === e)
            return this; if (this.isInfinity())
            return this; if (!e)
            return this.dbl(); if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, r = 0; r < e; r++)
                t = t.dbl();
            return t;
        } var n = this.curve.a, i = this.curve.tinv, o = this.x, a = this.y, s = this.z, c = s.redSqr().redSqr(), l = a.redAdd(a); for (r = 0; r < e; r++) {
            var u = o.redSqr(), f = l.redSqr(), h = f.redSqr(), d = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(c)), p = o.redMul(f), g = d.redSqr().redISub(p.redAdd(p)), m = p.redISub(g), b = d.redMul(m);
            b = b.redIAdd(b).redISub(h);
            var y = l.redMul(s);
            r + 1 < e && (c = c.redMul(h)), o = g, s = y, l = b;
        } return this.curve.jpoint(o, l.redMul(i), s); }, u.prototype.dbl = function () { return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl(); }, u.prototype._zeroDbl = function () { var e, t, r; if (this.zOne) {
            var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n), c = s.redSqr().redISub(a).redISub(a), l = o.redIAdd(o);
            l = (l = l.redIAdd(l)).redIAdd(l), e = c, t = s.redMul(a.redISub(c)).redISub(l), r = this.y.redAdd(this.y);
        }
        else {
            var u = this.x.redSqr(), f = this.y.redSqr(), h = f.redSqr(), d = this.x.redAdd(f).redSqr().redISub(u).redISub(h);
            d = d.redIAdd(d);
            var p = u.redAdd(u).redIAdd(u), g = p.redSqr(), m = h.redIAdd(h);
            m = (m = m.redIAdd(m)).redIAdd(m), e = g.redISub(d).redISub(d), t = p.redMul(d.redISub(e)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r);
        } return this.curve.jpoint(e, t, r); }, u.prototype._threeDbl = function () { var e, t, r; if (this.zOne) {
            var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a), c = s.redSqr().redISub(a).redISub(a);
            e = c;
            var l = o.redIAdd(o);
            l = (l = l.redIAdd(l)).redIAdd(l), t = s.redMul(a.redISub(c)).redISub(l), r = this.y.redAdd(this.y);
        }
        else {
            var u = this.z.redSqr(), f = this.y.redSqr(), h = this.x.redMul(f), d = this.x.redSub(u).redMul(this.x.redAdd(u));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h), g = (p = p.redIAdd(p)).redAdd(p);
            e = d.redSqr().redISub(g), r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(u);
            var m = f.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), t = d.redMul(p.redISub(e)).redISub(m);
        } return this.curve.jpoint(e, t, r); }, u.prototype._dbl = function () { var e = this.curve.a, t = this.x, r = this.y, n = this.z, i = n.redSqr().redSqr(), o = t.redSqr(), a = r.redSqr(), s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)), c = t.redAdd(t), l = (c = c.redIAdd(c)).redMul(a), u = s.redSqr().redISub(l.redAdd(l)), f = l.redISub(u), h = a.redSqr(); h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h); var d = s.redMul(f).redISub(h), p = r.redAdd(r).redMul(n); return this.curve.jpoint(u, d, p); }, u.prototype.trpl = function () { if (!this.curve.zeroA)
            return this.dbl().add(this); var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr(), n = t.redSqr(), i = e.redAdd(e).redIAdd(e), o = i.redSqr(), a = this.x.redAdd(t).redSqr().redISub(e).redISub(n), s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(), c = n.redIAdd(n); c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c); var l = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(c), u = t.redMul(l); u = (u = u.redIAdd(u)).redIAdd(u); var f = this.x.redMul(s).redISub(u); f = (f = f.redIAdd(f)).redIAdd(f); var h = this.y.redMul(l.redMul(c.redISub(l)).redISub(a.redMul(s))); h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h); var d = this.z.redAdd(a).redSqr().redISub(r).redISub(s); return this.curve.jpoint(f, h, d); }, u.prototype.mul = function (e, t) { return e = new i(e, t), this.curve._wnafMul(this, e); }, u.prototype.eq = function (e) { if ("affine" === e.type)
            return this.eq(e.toJ()); if (this === e)
            return !0; var t = this.z.redSqr(), r = e.z.redSqr(); if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
            return !1; var n = t.redMul(this.z), i = r.redMul(e.z); return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0); }, u.prototype.eqXToP = function (e) { var t = this.z.redSqr(), r = e.toRed(this.curve.red).redMul(t); if (0 === this.x.cmp(r))
            return !0; for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)
                return !1;
            if (r.redIAdd(i), 0 === this.x.cmp(r))
                return !0;
        } }, u.prototype.inspect = function () { return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"; }, u.prototype.isInfinity = function () { return 0 === this.z.cmpn(0); };
    }, 5427: function (e, t, r) {
        "use strict";
        var n, i = t, o = r(3715), a = r(8254), s = r(953).assert;
        function c(e) { "short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"); }
        function l(e, t) { Object.defineProperty(i, e, { configurable: !0, enumerable: !0, get: function () { var r = new c(t); return Object.defineProperty(i, e, { configurable: !0, enumerable: !0, value: r }), r; } }); }
        i.PresetCurve = c, l("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: o.sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), l("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: o.sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), l("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: o.sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), l("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: o.sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), l("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: o.sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), l("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: o.sha256, gRed: !1, g: ["9"] }), l("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: o.sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
        try {
            n = r(1037);
        }
        catch (e) {
            n = void 0;
        }
        l("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: o.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n] });
    }, 7954: function (e, t, r) {
        "use strict";
        var n = r(3550), i = r(2156), o = r(953), a = r(5427), s = r(9931), c = o.assert, l = r(1251), u = r(611);
        function f(e) { if (!(this instanceof f))
            return new f(e); "string" == typeof e && (c(a.hasOwnProperty(e), "Unknown curve " + e), e = a[e]), e instanceof a.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash; }
        e.exports = f, f.prototype.keyPair = function (e) { return new l(this, e); }, f.prototype.keyFromPrivate = function (e, t) { return l.fromPrivate(this, e, t); }, f.prototype.keyFromPublic = function (e, t) { return l.fromPublic(this, e, t); }, f.prototype.genKeyPair = function (e) { e || (e = {}); for (var t = new i({ hash: this.hash, pers: e.pers, persEnc: e.persEnc || "utf8", entropy: e.entropy || s(this.hash.hmacStrength), entropyEnc: e.entropy && e.entropyEnc || "utf8", nonce: this.n.toArray() }), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
            var a = new n(t.generate(r));
            if (!(a.cmp(o) > 0))
                return a.iaddn(1), this.keyFromPrivate(a);
        } }, f.prototype._truncateToN = function (e, t) { var r = 8 * e.byteLength() - this.n.bitLength(); return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e; }, f.prototype.sign = function (e, t, r, o) { "object" == typeof r && (o = r, r = null), o || (o = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16)); for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), c = e.toArray("be", a), l = new i({ hash: this.hash, entropy: s, nonce: c, pers: o.pers, persEnc: o.persEnc || "utf8" }), f = this.n.sub(new n(1)), h = 0;; h++) {
            var d = o.k ? o.k(h) : new n(l.generate(this.n.byteLength()));
            if (!((d = this._truncateToN(d, !0)).cmpn(1) <= 0 || d.cmp(f) >= 0)) {
                var p = this.g.mul(d);
                if (!p.isInfinity()) {
                    var g = p.getX(), m = g.umod(this.n);
                    if (0 !== m.cmpn(0)) {
                        var b = d.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                        if (0 !== (b = b.umod(this.n)).cmpn(0)) {
                            var y = (p.getY().isOdd() ? 1 : 0) | (0 !== g.cmp(m) ? 2 : 0);
                            return o.canonical && b.cmp(this.nh) > 0 && (b = this.n.sub(b), y ^= 1), new u({ r: m, s: b, recoveryParam: y });
                        }
                    }
                }
            }
        } }, f.prototype.verify = function (e, t, r, i) { e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i); var o = (t = new u(t, "hex")).r, a = t.s; if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
            return !1; if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
            return !1; var s, c = a.invm(this.n), l = c.mul(e).umod(this.n), f = c.mul(o).umod(this.n); return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(l, r.getPublic(), f)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(l, r.getPublic(), f)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o); }, f.prototype.recoverPubKey = function (e, t, r, i) { c((3 & r) === r, "The recovery param is more than two bits"), t = new u(t, i); var o = this.n, a = new n(e), s = t.r, l = t.s, f = 1 & r, h = r >> 1; if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
            throw new Error("Unable to find sencond key candinate"); s = h ? this.curve.pointFromX(s.add(this.curve.n), f) : this.curve.pointFromX(s, f); var d = t.r.invm(o), p = o.sub(a).mul(d).umod(o), g = l.mul(d).umod(o); return this.g.mulAdd(p, s, g); }, f.prototype.getKeyRecoveryParam = function (e, t, r, n) { if (null !== (t = new u(t, n)).recoveryParam)
            return t.recoveryParam; for (var i = 0; i < 4; i++) {
            var o;
            try {
                o = this.recoverPubKey(e, t, i);
            }
            catch (e) {
                continue;
            }
            if (o.eq(r))
                return i;
        } throw new Error("Unable to find valid recovery factor"); };
    }, 1251: function (e, t, r) {
        "use strict";
        var n = r(3550), i = r(953).assert;
        function o(e, t) { this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc); }
        e.exports = o, o.fromPublic = function (e, t, r) { return t instanceof o ? t : new o(e, { pub: t, pubEnc: r }); }, o.fromPrivate = function (e, t, r) { return t instanceof o ? t : new o(e, { priv: t, privEnc: r }); }, o.prototype.validate = function () { var e = this.getPublic(); return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" }; }, o.prototype.getPublic = function (e, t) { return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub; }, o.prototype.getPrivate = function (e) { return "hex" === e ? this.priv.toString(16, 2) : this.priv; }, o.prototype._importPrivate = function (e, t) { this.priv = new n(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n); }, o.prototype._importPublic = function (e, t) { if (e.x || e.y)
            return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(e.x, e.y)); this.pub = this.ec.curve.decodePoint(e, t); }, o.prototype.derive = function (e) { return e.mul(this.priv).getX(); }, o.prototype.sign = function (e, t, r) { return this.ec.sign(e, this, t, r); }, o.prototype.verify = function (e, t) { return this.ec.verify(e, t, this); }, o.prototype.inspect = function () { return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"; };
    }, 611: function (e, t, r) {
        "use strict";
        var n = r(3550), i = r(953), o = i.assert;
        function a(e, t) { if (e instanceof a)
            return e; this._importDER(e, t) || (o(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam); }
        function s() { this.place = 0; }
        function c(e, t) { var r = e[t.place++]; if (!(128 & r))
            return r; var n = 15 & r; if (0 === n || n > 4)
            return !1; for (var i = 0, o = 0, a = t.place; o < n; o++, a++)
            i <<= 8, i |= e[a], i >>>= 0; return !(i <= 127) && (t.place = a, i); }
        function l(e) { for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;)
            t++; return 0 === t ? e : e.slice(t); }
        function u(e, t) { if (t < 128)
            e.push(t);
        else {
            var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
            for (e.push(128 | r); --r;)
                e.push(t >>> (r << 3) & 255);
            e.push(t);
        } }
        e.exports = a, a.prototype._importDER = function (e, t) { e = i.toArray(e, t); var r = new s; if (48 !== e[r.place++])
            return !1; var o = c(e, r); if (!1 === o)
            return !1; if (o + r.place !== e.length)
            return !1; if (2 !== e[r.place++])
            return !1; var a = c(e, r); if (!1 === a)
            return !1; var l = e.slice(r.place, a + r.place); if (r.place += a, 2 !== e[r.place++])
            return !1; var u = c(e, r); if (!1 === u)
            return !1; if (e.length !== u + r.place)
            return !1; var f = e.slice(r.place, u + r.place); if (0 === l[0]) {
            if (!(128 & l[1]))
                return !1;
            l = l.slice(1);
        } if (0 === f[0]) {
            if (!(128 & f[1]))
                return !1;
            f = f.slice(1);
        } return this.r = new n(l), this.s = new n(f), this.recoveryParam = null, !0; }, a.prototype.toDER = function (e) { var t = this.r.toArray(), r = this.s.toArray(); for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = l(t), r = l(r); !(r[0] || 128 & r[1]);)
            r = r.slice(1); var n = [2]; u(n, t.length), (n = n.concat(t)).push(2), u(n, r.length); var o = n.concat(r), a = [48]; return u(a, o.length), a = a.concat(o), i.encode(a, e); };
    }, 5980: function (e, t, r) {
        "use strict";
        var n = r(3715), i = r(5427), o = r(953), a = o.assert, s = o.parseBytes, c = r(9087), l = r(3622);
        function u(e) { if (a("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof u))
            return new u(e); e = i[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = n.sha512; }
        e.exports = u, u.prototype.sign = function (e, t) { e = s(e); var r = this.keyFromSecret(t), n = this.hashInt(r.messagePrefix(), e), i = this.g.mul(n), o = this.encodePoint(i), a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()), c = n.add(a).umod(this.curve.n); return this.makeSignature({ R: i, S: c, Rencoded: o }); }, u.prototype.verify = function (e, t, r) { e = s(e), t = this.makeSignature(t); var n = this.keyFromPublic(r), i = this.hashInt(t.Rencoded(), n.pubBytes(), e), o = this.g.mul(t.S()); return t.R().add(n.pub().mul(i)).eq(o); }, u.prototype.hashInt = function () { for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]); return o.intFromLE(e.digest()).umod(this.curve.n); }, u.prototype.keyFromPublic = function (e) { return c.fromPublic(this, e); }, u.prototype.keyFromSecret = function (e) { return c.fromSecret(this, e); }, u.prototype.makeSignature = function (e) { return e instanceof l ? e : new l(this, e); }, u.prototype.encodePoint = function (e) { var t = e.getY().toArray("le", this.encodingLength); return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t; }, u.prototype.decodePoint = function (e) { var t = (e = o.parseBytes(e)).length - 1, r = e.slice(0, t).concat(-129 & e[t]), n = 0 != (128 & e[t]), i = o.intFromLE(r); return this.curve.pointFromY(i, n); }, u.prototype.encodeInt = function (e) { return e.toArray("le", this.encodingLength); }, u.prototype.decodeInt = function (e) { return o.intFromLE(e); }, u.prototype.isPoint = function (e) { return e instanceof this.pointClass; };
    }, 9087: function (e, t, r) {
        "use strict";
        var n = r(953), i = n.assert, o = n.parseBytes, a = n.cachedProperty;
        function s(e, t) { this.eddsa = e, this._secret = o(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = o(t.pub); }
        s.fromPublic = function (e, t) { return t instanceof s ? t : new s(e, { pub: t }); }, s.fromSecret = function (e, t) { return t instanceof s ? t : new s(e, { secret: t }); }, s.prototype.secret = function () { return this._secret; }, a(s, "pubBytes", (function () { return this.eddsa.encodePoint(this.pub()); })), a(s, "pub", (function () { return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv()); })), a(s, "privBytes", (function () { var e = this.eddsa, t = this.hash(), r = e.encodingLength - 1, n = t.slice(0, e.encodingLength); return n[0] &= 248, n[r] &= 127, n[r] |= 64, n; })), a(s, "priv", (function () { return this.eddsa.decodeInt(this.privBytes()); })), a(s, "hash", (function () { return this.eddsa.hash().update(this.secret()).digest(); })), a(s, "messagePrefix", (function () { return this.hash().slice(this.eddsa.encodingLength); })), s.prototype.sign = function (e) { return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this); }, s.prototype.verify = function (e, t) { return this.eddsa.verify(e, t, this); }, s.prototype.getSecret = function (e) { return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), e); }, s.prototype.getPublic = function (e) { return n.encode(this.pubBytes(), e); }, e.exports = s;
    }, 3622: function (e, t, r) {
        "use strict";
        var n = r(3550), i = r(953), o = i.assert, a = i.cachedProperty, s = i.parseBytes;
        function c(e, t) { this.eddsa = e, "object" != typeof t && (t = s(t)), Array.isArray(t) && (t = { R: t.slice(0, e.encodingLength), S: t.slice(e.encodingLength) }), o(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof n && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded; }
        a(c, "S", (function () { return this.eddsa.decodeInt(this.Sencoded()); })), a(c, "R", (function () { return this.eddsa.decodePoint(this.Rencoded()); })), a(c, "Rencoded", (function () { return this.eddsa.encodePoint(this.R()); })), a(c, "Sencoded", (function () { return this.eddsa.encodeInt(this.S()); })), c.prototype.toBytes = function () { return this.Rencoded().concat(this.Sencoded()); }, c.prototype.toHex = function () { return i.encode(this.toBytes(), "hex").toUpperCase(); }, e.exports = c;
    }, 1037: function (e) { e.exports = { doubles: { step: 4, points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]] }, naf: { wnd: 7, points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]] } }; }, 953: function (e, t, r) {
        "use strict";
        var n = t, i = r(3550), o = r(9746), a = r(4504);
        n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function (e, t, r) { var n = new Array(Math.max(e.bitLength(), r) + 1); n.fill(0); for (var i = 1 << t + 1, o = e.clone(), a = 0; a < n.length; a++) {
            var s, c = o.andln(i - 1);
            o.isOdd() ? (s = c > (i >> 1) - 1 ? (i >> 1) - c : c, o.isubn(s)) : s = 0, n[a] = s, o.iushrn(1);
        } return n; }, n.getJSF = function (e, t) { var r = [[], []]; e = e.clone(), t = t.clone(); for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0;) {
            var o, a, s, c = e.andln(3) + n & 3, l = t.andln(3) + i & 3;
            3 === c && (c = -1), 3 === l && (l = -1), o = 0 == (1 & c) ? 0 : 3 != (s = e.andln(7) + n & 7) && 5 !== s || 2 !== l ? c : -c, r[0].push(o), a = 0 == (1 & l) ? 0 : 3 != (s = t.andln(7) + i & 7) && 5 !== s || 2 !== c ? l : -l, r[1].push(a), 2 * n === o + 1 && (n = 1 - n), 2 * i === a + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1);
        } return r; }, n.cachedProperty = function (e, t, r) { var n = "_" + t; e.prototype[t] = function () { return void 0 !== this[n] ? this[n] : this[n] = r.call(this); }; }, n.parseBytes = function (e) { return "string" == typeof e ? n.toArray(e, "hex") : e; }, n.intFromLE = function (e) { return new i(e, "hex", "le"); };
    }, 7519: function (e) {
        "use strict";
        e.exports = { i8: "6.5.3" };
    }, 2672: function (e, t, r) {
        "use strict";
        var n = r(210), i = r(9044), o = r(7868), a = r(1915), s = r(5376), c = n("%TypeError%");
        e.exports = function (e, t, r) { if ("String" !== a(e))
            throw new c("Assertion failed: `S` must be a String"); if (!o(t) || t < 0 || t > s)
            throw new c("Assertion failed: `length` must be an integer >= 0 and <= 2**53"); if ("Boolean" !== a(r))
            throw new c("Assertion failed: `unicode` must be a Boolean"); return r ? t + 1 >= e.length ? t + 1 : t + i(e, t)["[[CodeUnitCount]]"] : t + 1; };
    }, 7800: function (e, t, r) {
        "use strict";
        var n = r(210), i = r(1924), o = n("%TypeError%"), a = r(4400), s = n("%Reflect.apply%", !0) || i("%Function.prototype.apply%");
        e.exports = function (e, t) { var r = arguments.length > 2 ? arguments[2] : []; if (!a(r))
            throw new o("Assertion failed: optional `argumentsList`, if provided, must be a List"); return s(e, t, r); };
    }, 9044: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%"), i = r(1924), o = r(1996), a = r(6935), s = r(1915), c = r(4969), l = i("String.prototype.charAt"), u = i("String.prototype.charCodeAt");
        e.exports = function (e, t) { if ("String" !== s(e))
            throw new n("Assertion failed: `string` must be a String"); var r = e.length; if (t < 0 || t >= r)
            throw new n("Assertion failed: `position` must be >= 0, and < the length of `string`"); var i = u(e, t), f = l(e, t), h = o(i), d = a(i); if (!h && !d)
            return { "[[CodePoint]]": f, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": !1 }; if (d || t + 1 === r)
            return { "[[CodePoint]]": f, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": !0 }; var p = u(e, t + 1); return a(p) ? { "[[CodePoint]]": c(i, p), "[[CodeUnitCount]]": 2, "[[IsUnpairedSurrogate]]": !1 } : { "[[CodePoint]]": f, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": !0 }; };
    }, 3674: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%"), i = r(1915);
        e.exports = function (e, t) { if ("Boolean" !== i(t))
            throw new n("Assertion failed: Type(done) is not Boolean"); return { value: e, done: t }; };
    }, 7942: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%"), i = r(9146), o = r(509), a = r(1922), s = r(1876), c = r(4307), l = r(1388), u = r(1221), f = r(2449), h = r(1915);
        e.exports = function (e, t, r) { if ("Object" !== h(e))
            throw new n("Assertion failed: Type(O) is not Object"); if (!l(t))
            throw new n("Assertion failed: IsPropertyKey(P) is not true"); var d = i({ Type: h, IsDataDescriptor: c, IsAccessorDescriptor: s }, r) ? r : f(r); if (!i({ Type: h, IsDataDescriptor: c, IsAccessorDescriptor: s }, d))
            throw new n("Assertion failed: Desc is not a valid Property Descriptor"); return o(c, u, a, e, t, d); };
    }, 1922: function (e, t, r) {
        "use strict";
        var n = r(4179), i = r(1915);
        e.exports = function (e) { if (void 0 === e)
            return e; n(i, "Property Descriptor", "Desc", e); var t = {}; return "[[Value]]" in e && (t.value = e["[[Value]]"]), "[[Writable]]" in e && (t.writable = e["[[Writable]]"]), "[[Get]]" in e && (t.get = e["[[Get]]"]), "[[Set]]" in e && (t.set = e["[[Set]]"]), "[[Enumerable]]" in e && (t.enumerable = e["[[Enumerable]]"]), "[[Configurable]]" in e && (t.configurable = e["[[Configurable]]"]), t; };
    }, 5588: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%"), i = r(631), o = r(1388), a = r(1915);
        e.exports = function (e, t) { if ("Object" !== a(e))
            throw new n("Assertion failed: Type(O) is not Object"); if (!o(t))
            throw new n("Assertion failed: IsPropertyKey(P) is not true, got " + i(t)); return e[t]; };
    }, 3081: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%"), i = r(5423), o = r(590), a = r(1388);
        e.exports = function (e, t) { if (!a(t))
            throw new n("Assertion failed: IsPropertyKey(P) is not true"); var r = i(e, t); if (null != r) {
            if (!o(r))
                throw new n(t + "is not a function");
            return r;
        } };
    }, 5423: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%"), i = r(1388), o = r(2093);
        e.exports = function (e, t) { if (!i(t))
            throw new n("Assertion failed: IsPropertyKey(P) is not true"); return o(e)[t]; };
    }, 1876: function (e, t, r) {
        "use strict";
        var n = r(7642), i = r(4179), o = r(1915);
        e.exports = function (e) { return void 0 !== e && (i(o, "Property Descriptor", "Desc", e), !(!n(e, "[[Get]]") && !n(e, "[[Set]]"))); };
    }, 4400: function (e, t, r) {
        "use strict";
        var n = r(210)("%Array%"), i = !n.isArray && r(1924)("Object.prototype.toString");
        e.exports = n.isArray || function (e) { return "[object Array]" === i(e); };
    }, 590: function (e, t, r) {
        "use strict";
        e.exports = r(5320);
    }, 970: function (e, t, r) {
        "use strict";
        var n = r(8769)("%Reflect.construct%", !0), i = r(7942);
        try {
            i({}, "", { "[[Get]]": function () { } });
        }
        catch (e) {
            i = null;
        }
        if (i && n) {
            var o = {}, a = {};
            i(a, "length", { "[[Get]]": function () { throw o; }, "[[Enumerable]]": !0 }), e.exports = function (e) { try {
                n(e, a);
            }
            catch (e) {
                return e === o;
            } };
        }
        else
            e.exports = function (e) { return "function" == typeof e && !!e.prototype; };
    }, 4307: function (e, t, r) {
        "use strict";
        var n = r(7642), i = r(4179), o = r(1915);
        e.exports = function (e) { return void 0 !== e && (i(o, "Property Descriptor", "Desc", e), !(!n(e, "[[Value]]") && !n(e, "[[Writable]]"))); };
    }, 7868: function (e, t, r) {
        "use strict";
        var n = r(1717), i = r(9202), o = r(1214), a = r(3060);
        e.exports = function (e) { if ("number" != typeof e || o(e) || !a(e))
            return !1; var t = n(e); return i(t) === t; };
    }, 1388: function (e) {
        "use strict";
        e.exports = function (e) { return "string" == typeof e || "symbol" == typeof e; };
    }, 1137: function (e, t, r) {
        "use strict";
        var n = r(210)("%Symbol.match%", !0), i = r(8420), o = r(3683);
        e.exports = function (e) { if (!e || "object" != typeof e)
            return !1; if (n) {
            var t = e[n];
            if (void 0 !== t)
                return o(t);
        } return i(e); };
    }, 4091: function (e, t, r) {
        "use strict";
        var n = r(210), i = n("%Object.create%", !0), o = n("%TypeError%"), a = n("%SyntaxError%"), s = r(4400), c = r(1915), l = !({ __proto__: null } instanceof Object);
        e.exports = function (e) { if (null !== e && "Object" !== c(e))
            throw new o("Assertion failed: `proto` must be null or an object"); var t = arguments.length < 2 ? [] : arguments[1]; if (!s(t))
            throw new o("Assertion failed: `additionalInternalSlotsList` must be an Array"); if (t.length > 0)
            throw new a("es-abstract does not yet support internal slots"); if (i)
            return i(e); if (l)
            return { __proto__: e }; if (null === e)
            throw new a("native Object.create support is required to create null objects"); var r = function () { }; return r.prototype = e, new r; };
    }, 356: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%"), i = r(1924)("RegExp.prototype.exec"), o = r(7800), a = r(5588), s = r(590), c = r(1915);
        e.exports = function (e, t) { if ("Object" !== c(e))
            throw new n("Assertion failed: `R` must be an Object"); if ("String" !== c(t))
            throw new n("Assertion failed: `S` must be a String"); var r = a(e, "exec"); if (s(r)) {
            var l = o(r, e, [t]);
            if (null === l || "Object" === c(l))
                return l;
            throw new n('"exec" method must return `null` or an Object');
        } return i(e, t); };
    }, 3733: function (e, t, r) {
        "use strict";
        e.exports = r(8631);
    }, 1221: function (e, t, r) {
        "use strict";
        var n = r(1214);
        e.exports = function (e, t) { return e === t ? 0 !== e || 1 / e == 1 / t : n(e) && n(t); };
    }, 2946: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%"), i = r(1388), o = r(1221), a = r(1915), s = function () { try {
            return delete [].length, !0;
        }
        catch (e) {
            return !1;
        } }();
        e.exports = function (e, t, r, c) { if ("Object" !== a(e))
            throw new n("Assertion failed: `O` must be an Object"); if (!i(t))
            throw new n("Assertion failed: `P` must be a Property Key"); if ("Boolean" !== a(c))
            throw new n("Assertion failed: `Throw` must be a Boolean"); if (c) {
            if (e[t] = r, s && !o(e[t], r))
                throw new n("Attempted to assign to readonly property.");
            return !0;
        } try {
            return e[t] = r, !s || o(e[t], r);
        }
        catch (e) {
            return !1;
        } };
    }, 303: function (e, t, r) {
        "use strict";
        var n = r(210), i = n("%Symbol.species%", !0), o = n("%TypeError%"), a = r(970), s = r(1915);
        e.exports = function (e, t) { if ("Object" !== s(e))
            throw new o("Assertion failed: Type(O) is not Object"); var r = e.constructor; if (void 0 === r)
            return t; if ("Object" !== s(r))
            throw new o("O.constructor is not an Object"); var n = i ? r[i] : void 0; if (null == n)
            return t; if (a(n))
            return n; throw new o("no constructor found"); };
    }, 3683: function (e) {
        "use strict";
        e.exports = function (e) { return !!e; };
    }, 5912: function (e, t, r) {
        "use strict";
        var n = r(7195), i = r(7622);
        e.exports = function (e) { var t = i(e); return 0 !== t && (t = n(t)), 0 === t ? 0 : t; };
    }, 8502: function (e, t, r) {
        "use strict";
        var n = r(5376), i = r(5912);
        e.exports = function (e) { var t = i(e); return t <= 0 ? 0 : t > n ? n : t; };
    }, 7622: function (e, t, r) {
        "use strict";
        var n = r(210), i = n("%TypeError%"), o = n("%Number%"), a = n("%RegExp%"), s = n("%parseInt%"), c = r(1924), l = r(1652), u = r(3126), f = c("String.prototype.slice"), h = l(/^0b[01]+$/i), d = l(/^0o[0-7]+$/i), p = l(/^[-+]0x[0-9a-f]+$/i), g = l(new a("[" + ["Â…", "â€‹", "ï¿¾"].join("") + "]", "g")), m = ["\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒ", "â€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028", "\u2029\ufeff"].join(""), b = new RegExp("(^[" + m + "]+)|([" + m + "]+$)", "g"), y = c("String.prototype.replace"), v = r(8842);
        e.exports = function e(t) { var r = u(t) ? t : v(t, o); if ("symbol" == typeof r)
            throw new i("Cannot convert a Symbol value to a number"); if ("string" == typeof r) {
            if (h(r))
                return e(s(f(r, 2), 2));
            if (d(r))
                return e(s(f(r, 2), 8));
            if (g(r) || p(r))
                return NaN;
            var n = function (e) { return y(e, b, ""); }(r);
            if (n !== r)
                return e(n);
        } return o(r); };
    }, 2093: function (e, t, r) {
        "use strict";
        var n = r(210)("%Object%"), i = r(3733);
        e.exports = function (e) { return i(e), n(e); };
    }, 8842: function (e, t, r) {
        "use strict";
        var n = r(1503);
        e.exports = function (e) { return arguments.length > 1 ? n(e, arguments[1]) : n(e); };
    }, 2449: function (e, t, r) {
        "use strict";
        var n = r(7642), i = r(210)("%TypeError%"), o = r(1915), a = r(3683), s = r(590);
        e.exports = function (e) { if ("Object" !== o(e))
            throw new i("ToPropertyDescriptor requires an object"); var t = {}; if (n(e, "enumerable") && (t["[[Enumerable]]"] = a(e.enumerable)), n(e, "configurable") && (t["[[Configurable]]"] = a(e.configurable)), n(e, "value") && (t["[[Value]]"] = e.value), n(e, "writable") && (t["[[Writable]]"] = a(e.writable)), n(e, "get")) {
            var r = e.get;
            if (void 0 !== r && !s(r))
                throw new i("getter must be a function");
            t["[[Get]]"] = r;
        } if (n(e, "set")) {
            var c = e.set;
            if (void 0 !== c && !s(c))
                throw new i("setter must be a function");
            t["[[Set]]"] = c;
        } if ((n(t, "[[Get]]") || n(t, "[[Set]]")) && (n(t, "[[Value]]") || n(t, "[[Writable]]")))
            throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute"); return t; };
    }, 7308: function (e, t, r) {
        "use strict";
        var n = r(210), i = n("%String%"), o = n("%TypeError%");
        e.exports = function (e) { if ("symbol" == typeof e)
            throw new o("Cannot convert a Symbol value to a string"); return i(e); };
    }, 1915: function (e, t, r) {
        "use strict";
        var n = r(1276);
        e.exports = function (e) { return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : n(e); };
    }, 4969: function (e, t, r) {
        "use strict";
        var n = r(210), i = n("%TypeError%"), o = n("%String.fromCharCode%"), a = r(1996), s = r(6935);
        e.exports = function (e, t) { if (!a(e) || !s(t))
            throw new i("Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code"); return o(e) + o(t); };
    }, 1717: function (e, t, r) {
        "use strict";
        var n = r(210)("%Math.abs%");
        e.exports = function (e) { return n(e); };
    }, 9202: function (e) {
        "use strict";
        var t = Math.floor;
        e.exports = function (e) { return t(e); };
    }, 8631: function (e, t, r) {
        "use strict";
        var n = r(210)("%TypeError%");
        e.exports = function (e, t) { if (null == e)
            throw new n(t || "Cannot call method on " + e); return e; };
    }, 7195: function (e, t, r) {
        "use strict";
        var n = r(2683), i = r(9711), o = r(7196), a = r(1214), s = r(3060), c = r(4099);
        e.exports = function (e) { var t = o(e); return a(t) ? 0 : 0 !== t && s(t) ? c(t) * i(n(t)) : t; };
    }, 7196: function (e, t, r) {
        "use strict";
        var n = r(1318);
        e.exports = function (e) { var t = n(e, Number); if ("string" != typeof t)
            return +t; var r = t.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, ""); return /^0[ob]|^[+-]0x/.test(r) ? NaN : +r; };
    }, 1318: function (e, t, r) {
        "use strict";
        e.exports = r(2116);
    }, 1276: function (e) {
        "use strict";
        e.exports = function (e) { return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0; };
    }, 2683: function (e, t, r) {
        "use strict";
        var n = r(210)("%Math.abs%");
        e.exports = function (e) { return n(e); };
    }, 9711: function (e) {
        "use strict";
        var t = Math.floor;
        e.exports = function (e) { return t(e); };
    }, 8769: function (e, t, r) {
        "use strict";
        e.exports = r(210);
    }, 509: function (e, t, r) {
        "use strict";
        var n = r(210)("%Object.defineProperty%", !0);
        if (n)
            try {
                n({}, "a", { value: 1 });
            }
            catch (e) {
                n = null;
            }
        var i = r(1924)("Object.prototype.propertyIsEnumerable");
        e.exports = function (e, t, r, o, a, s) { if (!n) {
            if (!e(s))
                return !1;
            if (!s["[[Configurable]]"] || !s["[[Writable]]"])
                return !1;
            if (a in o && i(o, a) !== !!s["[[Enumerable]]"])
                return !1;
            var c = s["[[Value]]"];
            return o[a] = c, t(o[a], c);
        } return n(o, a, r(s)), !0; };
    }, 4179: function (e, t, r) {
        "use strict";
        var n = r(210), i = n("%TypeError%"), o = n("%SyntaxError%"), a = r(7642), s = { "Property Descriptor": function (e, t) { if ("Object" !== e(t))
                return !1; var r = { "[[Configurable]]": !0, "[[Enumerable]]": !0, "[[Get]]": !0, "[[Set]]": !0, "[[Value]]": !0, "[[Writable]]": !0 }; for (var n in t)
                if (a(t, n) && !r[n])
                    return !1; var o = a(t, "[[Value]]"), s = a(t, "[[Get]]") || a(t, "[[Set]]"); if (o && s)
                throw new i("Property Descriptors may not be both accessor and data descriptors"); return !0; } };
        e.exports = function (e, t, r, n) { var a = s[t]; if ("function" != typeof a)
            throw new o("unknown record type: " + t); if (!a(e, n))
            throw new i(r + " must be a " + t); };
    }, 3060: function (e) {
        "use strict";
        var t = Number.isNaN || function (e) { return e != e; };
        e.exports = Number.isFinite || function (e) { return "number" == typeof e && !t(e) && e !== 1 / 0 && e !== -1 / 0; };
    }, 1996: function (e) {
        "use strict";
        e.exports = function (e) { return "number" == typeof e && e >= 55296 && e <= 56319; };
    }, 1214: function (e) {
        "use strict";
        e.exports = Number.isNaN || function (e) { return e != e; };
    }, 3126: function (e) {
        "use strict";
        e.exports = function (e) { return null === e || "function" != typeof e && "object" != typeof e; };
    }, 9146: function (e, t, r) {
        "use strict";
        var n = r(210), i = r(7642), o = n("%TypeError%");
        e.exports = function (e, t) { if ("Object" !== e.Type(t))
            return !1; var r = { "[[Configurable]]": !0, "[[Enumerable]]": !0, "[[Get]]": !0, "[[Set]]": !0, "[[Value]]": !0, "[[Writable]]": !0 }; for (var n in t)
            if (i(t, n) && !r[n])
                return !1; if (e.IsDataDescriptor(t) && e.IsAccessorDescriptor(t))
            throw new o("Property Descriptors may not be both accessor and data descriptors"); return !0; };
    }, 6935: function (e) {
        "use strict";
        e.exports = function (e) { return "number" == typeof e && e >= 56320 && e <= 57343; };
    }, 5376: function (e, t, r) {
        "use strict";
        var n = r(210), i = n("%Math%"), o = n("%Number%");
        e.exports = o.MAX_SAFE_INTEGER || i.pow(2, 53) - 1;
    }, 1652: function (e, t, r) {
        "use strict";
        var n = r(210)("RegExp.prototype.test"), i = r(5559);
        e.exports = function (e) { return i(n, e); };
    }, 4099: function (e) {
        "use strict";
        e.exports = function (e) { return e >= 0 ? 1 : -1; };
    }, 1503: function (e, t, r) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator, i = r(4149), o = r(5320), a = r(8923), s = r(2636), c = function (e, t) { if (null == e)
            throw new TypeError("Cannot call method on " + e); if ("string" != typeof t || "number" !== t && "string" !== t)
            throw new TypeError('hint must be "string" or "number"'); var r, n, a, s = "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"]; for (a = 0; a < s.length; ++a)
            if (r = e[s[a]], o(r) && (n = r.call(e), i(n)))
                return n; throw new TypeError("No default value"); }, l = function (e, t) { var r = e[t]; if (null != r) {
            if (!o(r))
                throw new TypeError(r + " returned for property " + t + " of object " + e + " is not a function");
            return r;
        } };
        e.exports = function (e) { if (i(e))
            return e; var t, r = "default"; if (arguments.length > 1 && (arguments[1] === String ? r = "string" : arguments[1] === Number && (r = "number")), n && (Symbol.toPrimitive ? t = l(e, Symbol.toPrimitive) : s(e) && (t = Symbol.prototype.valueOf)), void 0 !== t) {
            var o = t.call(e, r);
            if (i(o))
                return o;
            throw new TypeError("unable to convert exotic object to primitive");
        } return "default" === r && (a(e) || s(e)) && (r = "string"), c(e, "default" === r ? "number" : r); };
    }, 2116: function (e, t, r) {
        "use strict";
        var n = Object.prototype.toString, i = r(4149), o = r(5320), a = function (e) { var t; if ((t = arguments.length > 1 ? arguments[1] : "[object Date]" === n.call(e) ? String : Number) === String || t === Number) {
            var r, a, s = t === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (a = 0; a < s.length; ++a)
                if (o(e[s[a]]) && (r = e[s[a]](), i(r)))
                    return r;
            throw new TypeError("No default value");
        } throw new TypeError("invalid [[DefaultValue]] hint supplied"); };
        e.exports = function (e) { return i(e) ? e : arguments.length > 1 ? a(e, arguments[1]) : a(e); };
    }, 4149: function (e) {
        "use strict";
        e.exports = function (e) { return null === e || "function" != typeof e && "object" != typeof e; };
    }, 6371: function (e, t, r) {
        "use strict";
        var n = this && this.__importStar || function (e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]); return t.default = e, t; };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(3900);
        t.AbiCoder = i.AbiCoder, t.checkResultErrors = i.checkResultErrors, t.defaultAbiCoder = i.defaultAbiCoder, t.EventFragment = i.EventFragment, t.FormatTypes = i.FormatTypes, t.Fragment = i.Fragment, t.FunctionFragment = i.FunctionFragment, t.Indexed = i.Indexed, t.Interface = i.Interface, t.LogDescription = i.LogDescription, t.ParamType = i.ParamType, t.TransactionDescription = i.TransactionDescription;
        var o = r(4594);
        t.getAddress = o.getAddress, t.getCreate2Address = o.getCreate2Address, t.getContractAddress = o.getContractAddress, t.getIcapAddress = o.getIcapAddress, t.isAddress = o.isAddress;
        var a = n(r(4089));
        t.base64 = a;
        var s = r(7727);
        t.base58 = s.Base58;
        var c = r(3286);
        t.arrayify = c.arrayify, t.concat = c.concat, t.hexConcat = c.hexConcat, t.hexDataSlice = c.hexDataSlice, t.hexDataLength = c.hexDataLength, t.hexlify = c.hexlify, t.hexStripZeros = c.hexStripZeros, t.hexValue = c.hexValue, t.hexZeroPad = c.hexZeroPad, t.isBytes = c.isBytes, t.isBytesLike = c.isBytesLike, t.isHexString = c.isHexString, t.joinSignature = c.joinSignature, t.zeroPad = c.zeroPad, t.splitSignature = c.splitSignature, t.stripZeros = c.stripZeros;
        var l = r(5931);
        t._TypedDataEncoder = l._TypedDataEncoder, t.hashMessage = l.hashMessage, t.id = l.id, t.isValidName = l.isValidName, t.namehash = l.namehash;
        var u = r(1681);
        t.defaultPath = u.defaultPath, t.entropyToMnemonic = u.entropyToMnemonic, t.HDNode = u.HDNode, t.isValidMnemonic = u.isValidMnemonic, t.mnemonicToEntropy = u.mnemonicToEntropy, t.mnemonicToSeed = u.mnemonicToSeed;
        var f = r(6883);
        t.getJsonWalletAddress = f.getJsonWalletAddress;
        var h = r(8197);
        t.keccak256 = h.keccak256;
        var d = r(711);
        t.Logger = d.Logger;
        var p = r(1278);
        t.computeHmac = p.computeHmac, t.ripemd160 = p.ripemd160, t.sha256 = p.sha256, t.sha512 = p.sha512;
        var g = r(9155);
        t.solidityKeccak256 = g.keccak256, t.solidityPack = g.pack, t.soliditySha256 = g.sha256;
        var m = r(7986);
        t.randomBytes = m.randomBytes, t.shuffled = m.shuffled;
        var b = r(3587);
        t.checkProperties = b.checkProperties, t.deepCopy = b.deepCopy, t.defineReadOnly = b.defineReadOnly, t.getStatic = b.getStatic, t.resolveProperties = b.resolveProperties, t.shallowCopy = b.shallowCopy;
        var y = n(r(1843));
        t.RLP = y;
        var v = r(2768);
        t.computePublicKey = v.computePublicKey, t.recoverPublicKey = v.recoverPublicKey, t.SigningKey = v.SigningKey;
        var A = r(937);
        t.formatBytes32String = A.formatBytes32String, t.nameprep = A.nameprep, t.parseBytes32String = A.parseBytes32String, t._toEscapedUtf8String = A._toEscapedUtf8String, t.toUtf8Bytes = A.toUtf8Bytes, t.toUtf8CodePoints = A.toUtf8CodePoints, t.toUtf8String = A.toUtf8String, t.Utf8ErrorFuncs = A.Utf8ErrorFuncs;
        var S = r(4377);
        t.computeAddress = S.computeAddress, t.parseTransaction = S.parse, t.recoverAddress = S.recoverAddress, t.serializeTransaction = S.serialize;
        var w = r(7616);
        t.commify = w.commify, t.formatEther = w.formatEther, t.parseEther = w.parseEther, t.formatUnits = w.formatUnits, t.parseUnits = w.parseUnits;
        var E = r(4958);
        t.verifyMessage = E.verifyMessage, t.verifyTypedData = E.verifyTypedData;
        var T = r(8341);
        t._fetchData = T._fetchData, t.fetchJson = T.fetchJson, t.poll = T.poll;
        var k = r(1278);
        t.SupportedAlgorithm = k.SupportedAlgorithm;
        var B = r(937);
        t.UnicodeNormalizationForm = B.UnicodeNormalizationForm, t.Utf8ErrorReason = B.Utf8ErrorReason;
    }, 7648: function (e) {
        "use strict";
        var t = "Function.prototype.bind called on incompatible ", r = Array.prototype.slice, n = Object.prototype.toString, i = "[object Function]";
        e.exports = function (e) { var o = this; if ("function" != typeof o || n.call(o) !== i)
            throw new TypeError(t + o); for (var a, s = r.call(arguments, 1), c = function () { if (this instanceof a) {
            var t = o.apply(this, s.concat(r.call(arguments)));
            return Object(t) === t ? t : this;
        } return o.apply(e, s.concat(r.call(arguments))); }, l = Math.max(0, o.length - s.length), u = [], f = 0; f < l; f++)
            u.push("$" + f); if (a = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(c), o.prototype) {
            var h = function () { };
            h.prototype = o.prototype, a.prototype = new h, h.prototype = null;
        } return a; };
    }, 8612: function (e, t, r) {
        "use strict";
        var n = r(7648);
        e.exports = Function.prototype.bind || n;
    }, 210: function (e, t, r) {
        "use strict";
        var n, i = SyntaxError, o = Function, a = TypeError, s = function (e) { try {
            return o('"use strict"; return (' + e + ").constructor;")();
        }
        catch (e) { } }, c = Object.getOwnPropertyDescriptor;
        if (c)
            try {
                c({}, "");
            }
            catch (e) {
                c = null;
            }
        var l = function () { throw new a; }, u = c ? function () { try {
            return l;
        }
        catch (e) {
            try {
                return c(arguments, "callee").get;
            }
            catch (e) {
                return l;
            }
        } }() : l, f = r(1405)(), h = Object.getPrototypeOf || function (e) { return e.__proto__; }, d = {}, p = "undefined" == typeof Uint8Array ? n : h(Uint8Array), g = { "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer, "%ArrayIteratorPrototype%": f ? h([][Symbol.iterator]()) : n, "%AsyncFromSyncIteratorPrototype%": n, "%AsyncFunction%": d, "%AsyncGenerator%": d, "%AsyncGeneratorFunction%": d, "%AsyncIteratorPrototype%": d, "%Atomics%": "undefined" == typeof Atomics ? n : Atomics, "%BigInt%": "undefined" == typeof BigInt ? n : BigInt, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? n : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry, "%Function%": o, "%GeneratorFunction%": d, "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": f ? h(h([][Symbol.iterator]())) : n, "%JSON%": "object" == typeof JSON ? JSON : n, "%Map%": "undefined" == typeof Map ? n : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && f ? h((new Map)[Symbol.iterator]()) : n, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? n : Promise, "%Proxy%": "undefined" == typeof Proxy ? n : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": "undefined" == typeof Reflect ? n : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? n : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && f ? h((new Set)[Symbol.iterator]()) : n, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": f ? h(""[Symbol.iterator]()) : n, "%Symbol%": f ? Symbol : n, "%SyntaxError%": i, "%ThrowTypeError%": u, "%TypedArray%": p, "%TypeError%": a, "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array, "%URIError%": URIError, "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet }, m = function e(t) { var r; if ("%AsyncFunction%" === t)
            r = s("async function () {}");
        else if ("%GeneratorFunction%" === t)
            r = s("function* () {}");
        else if ("%AsyncGeneratorFunction%" === t)
            r = s("async function* () {}");
        else if ("%AsyncGenerator%" === t) {
            var n = e("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
        }
        else if ("%AsyncIteratorPrototype%" === t) {
            var i = e("%AsyncGenerator%");
            i && (r = h(i.prototype));
        } return g[t] = r, r; }, b = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, y = r(8612), v = r(7642), A = y.call(Function.call, Array.prototype.concat), S = y.call(Function.apply, Array.prototype.splice), w = y.call(Function.call, String.prototype.replace), E = y.call(Function.call, String.prototype.slice), T = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, k = /\\(\\)?/g, B = function (e) { var t = E(e, 0, 1), r = E(e, -1); if ("%" === t && "%" !== r)
            throw new i("invalid intrinsic syntax, expected closing `%`"); if ("%" === r && "%" !== t)
            throw new i("invalid intrinsic syntax, expected opening `%`"); var n = []; return w(e, T, (function (e, t, r, i) { n[n.length] = r ? w(i, k, "$1") : t || e; })), n; }, M = function (e, t) { var r, n = e; if (v(b, n) && (n = "%" + (r = b[n])[0] + "%"), v(g, n)) {
            var o = g[n];
            if (o === d && (o = m(n)), void 0 === o && !t)
                throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return { alias: r, name: n, value: o };
        } throw new i("intrinsic " + e + " does not exist!"); };
        e.exports = function (e, t) { if ("string" != typeof e || 0 === e.length)
            throw new a("intrinsic name must be a non-empty string"); if (arguments.length > 1 && "boolean" != typeof t)
            throw new a('"allowMissing" argument must be a boolean'); var r = B(e), n = r.length > 0 ? r[0] : "", o = M("%" + n + "%", t), s = o.name, l = o.value, u = !1, f = o.alias; f && (n = f[0], S(r, A([0, 1], f))); for (var h = 1, d = !0; h < r.length; h += 1) {
            var p = r[h], m = E(p, 0, 1), b = E(p, -1);
            if (('"' === m || "'" === m || "`" === m || '"' === b || "'" === b || "`" === b) && m !== b)
                throw new i("property names with quotes must have matching quotes");
            if ("constructor" !== p && d || (u = !0), v(g, s = "%" + (n += "." + p) + "%"))
                l = g[s];
            else if (null != l) {
                if (!(p in l)) {
                    if (!t)
                        throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                    return;
                }
                if (c && h + 1 >= r.length) {
                    var y = c(l, p);
                    l = (d = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : l[p];
                }
                else
                    d = v(l, p), l = l[p];
                d && !u && (g[s] = l);
            }
        } return l; };
    }, 1405: function (e, t, r) {
        "use strict";
        var n = "undefined" != typeof Symbol && Symbol, i = r(5419);
        e.exports = function () { return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && i(); };
    }, 5419: function (e) {
        "use strict";
        e.exports = function () { if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
            return !1; if ("symbol" == typeof Symbol.iterator)
            return !0; var e = {}, t = Symbol("test"), r = Object(t); if ("string" == typeof t)
            return !1; if ("[object Symbol]" !== Object.prototype.toString.call(t))
            return !1; if ("[object Symbol]" !== Object.prototype.toString.call(r))
            return !1; for (t in e[t] = 42, e)
            return !1; if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
            return !1; if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length)
            return !1; var n = Object.getOwnPropertySymbols(e); if (1 !== n.length || n[0] !== t)
            return !1; if (!Object.prototype.propertyIsEnumerable.call(e, t))
            return !1; if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var i = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== i.value || !0 !== i.enumerable)
                return !1;
        } return !0; };
    }, 7642: function (e, t, r) {
        "use strict";
        var n = r(8612);
        e.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
    }, 3715: function (e, t, r) { var n = t; n.utils = r(6436), n.common = r(5772), n.sha = r(9041), n.ripemd = r(2949), n.hmac = r(2344), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160; }, 5772: function (e, t, r) {
        "use strict";
        var n = r(6436), i = r(9746);
        function o() { this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32; }
        t.BlockHash = o, o.prototype.update = function (e, t) { if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
            var r = (e = this.pending).length % this._delta8;
            this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
            for (var i = 0; i < e.length; i += this._delta32)
                this._update(e, i, i + this._delta32);
        } return this; }, o.prototype.digest = function (e) { return this.update(this._pad()), i(null === this.pending), this._digest(e); }, o.prototype._pad = function () { var e = this.pendingTotal, t = this._delta8, r = t - (e + this.padLength) % t, n = new Array(r + this.padLength); n[0] = 128; for (var i = 1; i < r; i++)
            n[i] = 0; if (e <<= 3, "big" === this.endian) {
            for (var o = 8; o < this.padLength; o++)
                n[i++] = 0;
            n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e;
        }
        else
            for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++)
                n[i++] = 0; return n; };
    }, 2344: function (e, t, r) {
        "use strict";
        var n = r(6436), i = r(9746);
        function o(e, t, r) { if (!(this instanceof o))
            return new o(e, t, r); this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r)); }
        e.exports = o, o.prototype._init = function (e) { e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize); for (var t = e.length; t < this.blockSize; t++)
            e.push(0); for (t = 0; t < e.length; t++)
            e[t] ^= 54; for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++)
            e[t] ^= 106; this.outer = (new this.Hash).update(e); }, o.prototype.update = function (e, t) { return this.inner.update(e, t), this; }, o.prototype.digest = function (e) { return this.outer.update(this.inner.digest()), this.outer.digest(e); };
    }, 2949: function (e, t, r) {
        "use strict";
        var n = r(6436), i = r(5772), o = n.rotl32, a = n.sum32, s = n.sum32_3, c = n.sum32_4, l = i.BlockHash;
        function u() { if (!(this instanceof u))
            return new u; l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"; }
        function f(e, t, r, n) { return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n); }
        function h(e) { return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838; }
        function d(e) { return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0; }
        n.inherits(u, l), t.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function (e, t) { for (var r = this.h[0], n = this.h[1], i = this.h[2], l = this.h[3], u = this.h[4], y = r, v = n, A = i, S = l, w = u, E = 0; E < 80; E++) {
            var T = a(o(c(r, f(E, n, i, l), e[p[E] + t], h(E)), m[E]), u);
            r = u, u = l, l = o(i, 10), i = n, n = T, T = a(o(c(y, f(79 - E, v, A, S), e[g[E] + t], d(E)), b[E]), w), y = w, w = S, S = o(A, 10), A = v, v = T;
        } T = s(this.h[1], i, S), this.h[1] = s(this.h[2], l, w), this.h[2] = s(this.h[3], u, y), this.h[3] = s(this.h[4], r, v), this.h[4] = s(this.h[0], n, A), this.h[0] = T; }, u.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little"); };
        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], g = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], b = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
    }, 9041: function (e, t, r) {
        "use strict";
        t.sha1 = r(4761), t.sha224 = r(799), t.sha256 = r(9344), t.sha384 = r(772), t.sha512 = r(5900);
    }, 4761: function (e, t, r) {
        "use strict";
        var n = r(6436), i = r(5772), o = r(7038), a = n.rotl32, s = n.sum32, c = n.sum32_5, l = o.ft_1, u = i.BlockHash, f = [1518500249, 1859775393, 2400959708, 3395469782];
        function h() { if (!(this instanceof h))
            return new h; u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80); }
        n.inherits(h, u), e.exports = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 80, h.padLength = 64, h.prototype._update = function (e, t) { for (var r = this.W, n = 0; n < 16; n++)
            r[n] = e[t + n]; for (; n < r.length; n++)
            r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1); var i = this.h[0], o = this.h[1], u = this.h[2], h = this.h[3], d = this.h[4]; for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20), g = c(a(i, 5), l(p, o, u, h), d, r[n], f[p]);
            d = h, h = u, u = a(o, 30), o = i, i = g;
        } this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], u), this.h[3] = s(this.h[3], h), this.h[4] = s(this.h[4], d); }, h.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
    }, 799: function (e, t, r) {
        "use strict";
        var n = r(6436), i = r(9344);
        function o() { if (!(this instanceof o))
            return new o; i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]; }
        n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big"); };
    }, 9344: function (e, t, r) {
        "use strict";
        var n = r(6436), i = r(5772), o = r(7038), a = r(9746), s = n.sum32, c = n.sum32_4, l = n.sum32_5, u = o.ch32, f = o.maj32, h = o.s0_256, d = o.s1_256, p = o.g0_256, g = o.g1_256, m = i.BlockHash, b = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        function y() { if (!(this instanceof y))
            return new y; m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = b, this.W = new Array(64); }
        n.inherits(y, m), e.exports = y, y.blockSize = 512, y.outSize = 256, y.hmacStrength = 192, y.padLength = 64, y.prototype._update = function (e, t) { for (var r = this.W, n = 0; n < 16; n++)
            r[n] = e[t + n]; for (; n < r.length; n++)
            r[n] = c(g(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]); var i = this.h[0], o = this.h[1], m = this.h[2], b = this.h[3], y = this.h[4], v = this.h[5], A = this.h[6], S = this.h[7]; for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
            var w = l(S, d(y), u(y, v, A), this.k[n], r[n]), E = s(h(i), f(i, o, m));
            S = A, A = v, v = y, y = s(b, w), b = m, m = o, o = i, i = s(w, E);
        } this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], m), this.h[3] = s(this.h[3], b), this.h[4] = s(this.h[4], y), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], A), this.h[7] = s(this.h[7], S); }, y.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
    }, 772: function (e, t, r) {
        "use strict";
        var n = r(6436), i = r(5900);
        function o() { if (!(this instanceof o))
            return new o; i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]; }
        n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big"); };
    }, 5900: function (e, t, r) {
        "use strict";
        var n = r(6436), i = r(5772), o = r(9746), a = n.rotr64_hi, s = n.rotr64_lo, c = n.shr64_hi, l = n.shr64_lo, u = n.sum64, f = n.sum64_hi, h = n.sum64_lo, d = n.sum64_4_hi, p = n.sum64_4_lo, g = n.sum64_5_hi, m = n.sum64_5_lo, b = i.BlockHash, y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function v() { if (!(this instanceof v))
            return new v; b.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = y, this.W = new Array(160); }
        function A(e, t, r, n, i) { var o = e & r ^ ~e & i; return o < 0 && (o += 4294967296), o; }
        function S(e, t, r, n, i, o) { var a = t & n ^ ~t & o; return a < 0 && (a += 4294967296), a; }
        function w(e, t, r, n, i) { var o = e & r ^ e & i ^ r & i; return o < 0 && (o += 4294967296), o; }
        function E(e, t, r, n, i, o) { var a = t & n ^ t & o ^ n & o; return a < 0 && (a += 4294967296), a; }
        function T(e, t) { var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7); return r < 0 && (r += 4294967296), r; }
        function k(e, t) { var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7); return r < 0 && (r += 4294967296), r; }
        function B(e, t) { var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9); return r < 0 && (r += 4294967296), r; }
        function M(e, t) { var r = a(e, t, 1) ^ a(e, t, 8) ^ c(e, t, 7); return r < 0 && (r += 4294967296), r; }
        function C(e, t) { var r = s(e, t, 1) ^ s(e, t, 8) ^ l(e, t, 7); return r < 0 && (r += 4294967296), r; }
        function L(e, t) { var r = s(e, t, 19) ^ s(t, e, 29) ^ l(e, t, 6); return r < 0 && (r += 4294967296), r; }
        n.inherits(v, b), e.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function (e, t) { for (var r = this.W, n = 0; n < 32; n++)
            r[n] = e[t + n]; for (; n < r.length; n += 2) {
            var i = (m = r[n - 4], b = r[n - 3], y = void 0, (y = a(m, b, 19) ^ a(b, m, 29) ^ c(m, b, 6)) < 0 && (y += 4294967296), y), o = L(r[n - 4], r[n - 3]), s = r[n - 14], l = r[n - 13], u = M(r[n - 30], r[n - 29]), f = C(r[n - 30], r[n - 29]), h = r[n - 32], g = r[n - 31];
            r[n] = d(i, o, s, l, u, f, h, g), r[n + 1] = p(i, o, s, l, u, f, h, g);
        } var m, b, y; }, v.prototype._update = function (e, t) { this._prepareBlock(e, t); var r, n, i, s = this.W, c = this.h[0], l = this.h[1], d = this.h[2], p = this.h[3], b = this.h[4], y = this.h[5], v = this.h[6], M = this.h[7], C = this.h[8], L = this.h[9], P = this.h[10], F = this.h[11], N = this.h[12], x = this.h[13], R = this.h[14], O = this.h[15]; o(this.k.length === s.length); for (var I = 0; I < s.length; I += 2) {
            var D = R, J = O, _ = (i = void 0, (i = a(r = C, n = L, 14) ^ a(r, n, 18) ^ a(n, r, 9)) < 0 && (i += 4294967296), i), U = B(C, L), H = A(C, 0, P, 0, N), X = S(0, L, 0, F, 0, x), V = this.k[I], G = this.k[I + 1], z = s[I], j = s[I + 1], K = g(D, J, _, U, H, X, V, G, z, j), Z = m(D, J, _, U, H, X, V, G, z, j);
            D = T(c, l), J = k(c, l), _ = w(c, 0, d, 0, b), U = E(0, l, 0, p, 0, y);
            var q = f(D, J, _, U), Q = h(D, J, _, U);
            R = N, O = x, N = P, x = F, P = C, F = L, C = f(v, M, K, Z), L = h(M, M, K, Z), v = b, M = y, b = d, y = p, d = c, p = l, c = f(K, Z, q, Q), l = h(K, Z, q, Q);
        } u(this.h, 0, c, l), u(this.h, 2, d, p), u(this.h, 4, b, y), u(this.h, 6, v, M), u(this.h, 8, C, L), u(this.h, 10, P, F), u(this.h, 12, N, x), u(this.h, 14, R, O); }, v.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
    }, 7038: function (e, t, r) {
        "use strict";
        var n = r(6436).rotr32;
        function i(e, t, r) { return e & t ^ ~e & r; }
        function o(e, t, r) { return e & t ^ e & r ^ t & r; }
        function a(e, t, r) { return e ^ t ^ r; }
        t.ft_1 = function (e, t, r, n) { return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? a(t, r, n) : 2 === e ? o(t, r, n) : void 0; }, t.ch32 = i, t.maj32 = o, t.p32 = a, t.s0_256 = function (e) { return n(e, 2) ^ n(e, 13) ^ n(e, 22); }, t.s1_256 = function (e) { return n(e, 6) ^ n(e, 11) ^ n(e, 25); }, t.g0_256 = function (e) { return n(e, 7) ^ n(e, 18) ^ e >>> 3; }, t.g1_256 = function (e) { return n(e, 17) ^ n(e, 19) ^ e >>> 10; };
    }, 6436: function (e, t, r) {
        "use strict";
        var n = r(9746), i = r(5717);
        function o(e, t) { return 55296 == (64512 & e.charCodeAt(t)) && !(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1)); }
        function a(e) { return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0; }
        function s(e) { return 1 === e.length ? "0" + e : e; }
        function c(e) { return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e; }
        t.inherits = i, t.toArray = function (e, t) { if (Array.isArray(e))
            return e.slice(); if (!e)
            return []; var r = []; if ("string" == typeof e)
            if (t) {
                if ("hex" === t)
                    for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2)
                        r.push(parseInt(e[i] + e[i + 1], 16));
            }
            else
                for (var n = 0, i = 0; i < e.length; i++) {
                    var a = e.charCodeAt(i);
                    a < 128 ? r[n++] = a : a < 2048 ? (r[n++] = a >> 6 | 192, r[n++] = 63 & a | 128) : o(e, i) ? (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = a >> 18 | 240, r[n++] = a >> 12 & 63 | 128, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128) : (r[n++] = a >> 12 | 224, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128);
                }
        else
            for (i = 0; i < e.length; i++)
                r[i] = 0 | e[i]; return r; }, t.toHex = function (e) { for (var t = "", r = 0; r < e.length; r++)
            t += s(e[r].toString(16)); return t; }, t.htonl = a, t.toHex32 = function (e, t) { for (var r = "", n = 0; n < e.length; n++) {
            var i = e[n];
            "little" === t && (i = a(i)), r += c(i.toString(16));
        } return r; }, t.zero2 = s, t.zero8 = c, t.join32 = function (e, t, r, i) { var o = r - t; n(o % 4 == 0); for (var a = new Array(o / 4), s = 0, c = t; s < a.length; s++, c += 4) {
            var l;
            l = "big" === i ? e[c] << 24 | e[c + 1] << 16 | e[c + 2] << 8 | e[c + 3] : e[c + 3] << 24 | e[c + 2] << 16 | e[c + 1] << 8 | e[c], a[s] = l >>> 0;
        } return a; }, t.split32 = function (e, t) { for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
            var o = e[n];
            "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o);
        } return r; }, t.rotr32 = function (e, t) { return e >>> t | e << 32 - t; }, t.rotl32 = function (e, t) { return e << t | e >>> 32 - t; }, t.sum32 = function (e, t) { return e + t >>> 0; }, t.sum32_3 = function (e, t, r) { return e + t + r >>> 0; }, t.sum32_4 = function (e, t, r, n) { return e + t + r + n >>> 0; }, t.sum32_5 = function (e, t, r, n, i) { return e + t + r + n + i >>> 0; }, t.sum64 = function (e, t, r, n) { var i = e[t], o = n + e[t + 1] >>> 0, a = (o < n ? 1 : 0) + r + i; e[t] = a >>> 0, e[t + 1] = o; }, t.sum64_hi = function (e, t, r, n) { return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0; }, t.sum64_lo = function (e, t, r, n) { return t + n >>> 0; }, t.sum64_4_hi = function (e, t, r, n, i, o, a, s) { var c = 0, l = t; return c += (l = l + n >>> 0) < t ? 1 : 0, c += (l = l + o >>> 0) < o ? 1 : 0, e + r + i + a + (c += (l = l + s >>> 0) < s ? 1 : 0) >>> 0; }, t.sum64_4_lo = function (e, t, r, n, i, o, a, s) { return t + n + o + s >>> 0; }, t.sum64_5_hi = function (e, t, r, n, i, o, a, s, c, l) { var u = 0, f = t; return u += (f = f + n >>> 0) < t ? 1 : 0, u += (f = f + o >>> 0) < o ? 1 : 0, u += (f = f + s >>> 0) < s ? 1 : 0, e + r + i + a + c + (u += (f = f + l >>> 0) < l ? 1 : 0) >>> 0; }, t.sum64_5_lo = function (e, t, r, n, i, o, a, s, c, l) { return t + n + o + s + l >>> 0; }, t.rotr64_hi = function (e, t, r) { return (t << 32 - r | e >>> r) >>> 0; }, t.rotr64_lo = function (e, t, r) { return (e << 32 - r | t >>> r) >>> 0; }, t.shr64_hi = function (e, t, r) { return e >>> r; }, t.shr64_lo = function (e, t, r) { return (e << 32 - r | t >>> r) >>> 0; };
    }, 2156: function (e, t, r) {
        "use strict";
        var n = r(3715), i = r(4504), o = r(9746);
        function a(e) { if (!(this instanceof a))
            return new a(e); this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null; var t = i.toArray(e.entropy, e.entropyEnc || "hex"), r = i.toArray(e.nonce, e.nonceEnc || "hex"), n = i.toArray(e.pers, e.persEnc || "hex"); o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n); }
        e.exports = a, a.prototype._init = function (e, t, r) { var n = e.concat(t).concat(r); this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8); for (var i = 0; i < this.V.length; i++)
            this.K[i] = 0, this.V[i] = 1; this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656; }, a.prototype._hmac = function () { return new n.hmac(this.hash, this.K); }, a.prototype._update = function (e) { var t = this._hmac().update(this.V).update([0]); e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest()); }, a.prototype.reseed = function (e, t, r, n) { "string" != typeof t && (n = r, r = t, t = null), e = i.toArray(e, t), r = i.toArray(r, n), o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1; }, a.prototype.generate = function (e, t, r, n) { if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required"); "string" != typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n || "hex"), this._update(r)); for (var o = []; o.length < e;)
            this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V); var a = o.slice(0, e); return this._update(r), this._reseed++, i.encode(a, t); };
    }, 5717: function (e) { "function" == typeof Object.create ? e.exports = function (e, t) { t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })); } : e.exports = function (e, t) { if (t) {
        e.super_ = t;
        var r = function () { };
        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e;
    } }; }, 9496: function (e, t, r) {
        "use strict";
        var n = r(210), i = r(7642), o = r(7478)(), a = n("%TypeError%"), s = { assert: function (e, t) { if (!e || "object" != typeof e && "function" != typeof e)
                throw new a("`O` is not an object"); if ("string" != typeof t)
                throw new a("`slot` must be a string"); o.assert(e); }, get: function (e, t) { if (!e || "object" != typeof e && "function" != typeof e)
                throw new a("`O` is not an object"); if ("string" != typeof t)
                throw new a("`slot` must be a string"); var r = o.get(e); return r && r["$" + t]; }, has: function (e, t) { if (!e || "object" != typeof e && "function" != typeof e)
                throw new a("`O` is not an object"); if ("string" != typeof t)
                throw new a("`slot` must be a string"); var r = o.get(e); return !!r && i(r, "$" + t); }, set: function (e, t, r) { if (!e || "object" != typeof e && "function" != typeof e)
                throw new a("`O` is not an object"); if ("string" != typeof t)
                throw new a("`slot` must be a string"); var n = o.get(e); n || (n = {}, o.set(e, n)), n["$" + t] = r; } };
        Object.freeze && Object.freeze(s), e.exports = s;
    }, 5320: function (e) {
        "use strict";
        var t, r, n = Function.prototype.toString, i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if ("function" == typeof i && "function" == typeof Object.defineProperty)
            try {
                t = Object.defineProperty({}, "length", { get: function () { throw r; } }), r = {}, i((function () { throw 42; }), null, t);
            }
            catch (e) {
                e !== r && (i = null);
            }
        else
            i = null;
        var o = /^\s*class\b/, a = function (e) { try {
            var t = n.call(e);
            return o.test(t);
        }
        catch (e) {
            return !1;
        } }, s = Object.prototype.toString, c = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, l = "object" == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
        e.exports = i ? function (e) { if (e === l)
            return !0; if (!e)
            return !1; if ("function" != typeof e && "object" != typeof e)
            return !1; if ("function" == typeof e && !e.prototype)
            return !0; try {
            i(e, null, t);
        }
        catch (e) {
            if (e !== r)
                return !1;
        } return !a(e); } : function (e) { if (e === l)
            return !0; if (!e)
            return !1; if ("function" != typeof e && "object" != typeof e)
            return !1; if ("function" == typeof e && !e.prototype)
            return !0; if (c)
            return function (e) { try {
                return !a(e) && (n.call(e), !0);
            }
            catch (e) {
                return !1;
            } }(e); if (a(e))
            return !1; var t = s.call(e); return "[object Function]" === t || "[object GeneratorFunction]" === t; };
    }, 8923: function (e) {
        "use strict";
        var t = Date.prototype.getDay, r = Object.prototype.toString, n = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        e.exports = function (e) { return "object" == typeof e && null !== e && (n ? function (e) { try {
            return t.call(e), !0;
        }
        catch (e) {
            return !1;
        } }(e) : "[object Date]" === r.call(e)); };
    }, 8420: function (e, t, r) {
        "use strict";
        var n, i, o, a, s = r(1924), c = r(1405)() && "symbol" == typeof Symbol.toStringTag;
        if (c) {
            n = s("Object.prototype.hasOwnProperty"), i = s("RegExp.prototype.exec"), o = {};
            var l = function () { throw o; };
            a = { toString: l, valueOf: l }, "symbol" == typeof Symbol.toPrimitive && (a[Symbol.toPrimitive] = l);
        }
        var u = s("Object.prototype.toString"), f = Object.getOwnPropertyDescriptor;
        e.exports = c ? function (e) { if (!e || "object" != typeof e)
            return !1; var t = f(e, "lastIndex"); if (!t || !n(t, "value"))
            return !1; try {
            i(e, a);
        }
        catch (e) {
            return e === o;
        } } : function (e) { return !(!e || "object" != typeof e && "function" != typeof e) && "[object RegExp]" === u(e); };
    }, 2636: function (e, t, r) {
        "use strict";
        var n = Object.prototype.toString;
        if (r(1405)()) {
            var i = Symbol.prototype.toString, o = /^Symbol\(.*\)$/;
            e.exports = function (e) { if ("symbol" == typeof e)
                return !0; if ("[object Symbol]" !== n.call(e))
                return !1; try {
                return function (e) { return "symbol" == typeof e.valueOf() && o.test(i.call(e)); }(e);
            }
            catch (e) {
                return !1;
            } };
        }
        else
            e.exports = function (e) { return !1; };
    }, 1094: function (e, t, r) { var n; !function () {
        "use strict";
        var i = "input is invalid type", o = "object" == typeof window, a = o ? window : {};
        a.JS_SHA3_NO_WINDOW && (o = !1);
        var s = !o && "object" == typeof self;
        !a.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? a = r.g : s && (a = self);
        var c = !a.JS_SHA3_NO_COMMON_JS && e.exports, l = r.amdO, u = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, f = "0123456789abcdef".split(""), h = [4, 1024, 262144, 67108864], d = [0, 8, 16, 24], p = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], g = [224, 256, 384, 512], m = [128, 256], b = ["hex", "buffer", "arrayBuffer", "array", "digest"], y = { 128: 168, 256: 136 };
        !a.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) { return "[object Array]" === Object.prototype.toString.call(e); }), !u || !a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) { return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer; });
        for (var v = function (e, t, r) { return function (n) { return new R(e, t, e).update(n)[r](); }; }, A = function (e, t, r) { return function (n, i) { return new R(e, t, i).update(n)[r](); }; }, S = function (e, t, r) { return function (t, n, i, o) { return B["cshake" + e].update(t, n, i, o)[r](); }; }, w = function (e, t, r) { return function (t, n, i, o) { return B["kmac" + e].update(t, n, i, o)[r](); }; }, E = function (e, t, r, n) { for (var i = 0; i < b.length; ++i) {
            var o = b[i];
            e[o] = t(r, n, o);
        } return e; }, T = function (e, t) { var r = v(e, t, "hex"); return r.create = function () { return new R(e, t, e); }, r.update = function (e) { return r.create().update(e); }, E(r, v, e, t); }, k = [{ name: "keccak", padding: [1, 256, 65536, 16777216], bits: g, createMethod: T }, { name: "sha3", padding: [6, 1536, 393216, 100663296], bits: g, createMethod: T }, { name: "shake", padding: [31, 7936, 2031616, 520093696], bits: m, createMethod: function (e, t) { var r = A(e, t, "hex"); return r.create = function (r) { return new R(e, t, r); }, r.update = function (e, t) { return r.create(t).update(e); }, E(r, A, e, t); } }, { name: "cshake", padding: h, bits: m, createMethod: function (e, t) { var r = y[e], n = S(e, 0, "hex"); return n.create = function (n, i, o) { return i || o ? new R(e, t, n).bytepad([i, o], r) : B["shake" + e].create(n); }, n.update = function (e, t, r, i) { return n.create(t, r, i).update(e); }, E(n, S, e, t); } }, { name: "kmac", padding: h, bits: m, createMethod: function (e, t) { var r = y[e], n = w(e, 0, "hex"); return n.create = function (n, i, o) { return new O(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r); }, n.update = function (e, t, r, i) { return n.create(e, r, i).update(t); }, E(n, w, e, t); } }], B = {}, M = [], C = 0; C < k.length; ++C)
            for (var L = k[C], P = L.bits, F = 0; F < P.length; ++F) {
                var N = L.name + "_" + P[F];
                if (M.push(N), B[N] = L.createMethod(P[F], L.padding), "sha3" !== L.name) {
                    var x = L.name + P[F];
                    M.push(x), B[x] = B[N];
                }
            }
        function R(e, t, r) { this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3; for (var n = 0; n < 50; ++n)
            this.s[n] = 0; }
        function O(e, t, r) { R.call(this, e, t, r); }
        R.prototype.update = function (e) { if (this.finalized)
            throw new Error("finalize already called"); var t, r = typeof e; if ("string" !== r) {
            if ("object" !== r)
                throw new Error(i);
            if (null === e)
                throw new Error(i);
            if (u && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!(Array.isArray(e) || u && ArrayBuffer.isView(e)))
                throw new Error(i);
            t = !0;
        } for (var n, o, a = this.blocks, s = this.byteCount, c = e.length, l = this.blockCount, f = 0, h = this.s; f < c;) {
            if (this.reset)
                for (this.reset = !1, a[0] = this.block, n = 1; n < l + 1; ++n)
                    a[n] = 0;
            if (t)
                for (n = this.start; f < c && n < s; ++f)
                    a[n >> 2] |= e[f] << d[3 & n++];
            else
                for (n = this.start; f < c && n < s; ++f)
                    (o = e.charCodeAt(f)) < 128 ? a[n >> 2] |= o << d[3 & n++] : o < 2048 ? (a[n >> 2] |= (192 | o >> 6) << d[3 & n++], a[n >> 2] |= (128 | 63 & o) << d[3 & n++]) : o < 55296 || o >= 57344 ? (a[n >> 2] |= (224 | o >> 12) << d[3 & n++], a[n >> 2] |= (128 | o >> 6 & 63) << d[3 & n++], a[n >> 2] |= (128 | 63 & o) << d[3 & n++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++f)), a[n >> 2] |= (240 | o >> 18) << d[3 & n++], a[n >> 2] |= (128 | o >> 12 & 63) << d[3 & n++], a[n >> 2] |= (128 | o >> 6 & 63) << d[3 & n++], a[n >> 2] |= (128 | 63 & o) << d[3 & n++]);
            if (this.lastByteIndex = n, n >= s) {
                for (this.start = n - s, this.block = a[l], n = 0; n < l; ++n)
                    h[n] ^= a[n];
                I(h), this.reset = !0;
            }
            else
                this.start = n;
        } return this; }, R.prototype.encode = function (e, t) { var r = 255 & e, n = 1, i = [r]; for (r = 255 & (e >>= 8); r > 0;)
            i.unshift(r), r = 255 & (e >>= 8), ++n; return t ? i.push(n) : i.unshift(n), this.update(i), i.length; }, R.prototype.encodeString = function (e) { var t, r = typeof e; if ("string" !== r) {
            if ("object" !== r)
                throw new Error(i);
            if (null === e)
                throw new Error(i);
            if (u && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!(Array.isArray(e) || u && ArrayBuffer.isView(e)))
                throw new Error(i);
            t = !0;
        } var n = 0, o = e.length; if (t)
            n = o;
        else
            for (var a = 0; a < e.length; ++a) {
                var s = e.charCodeAt(a);
                s < 128 ? n += 1 : s < 2048 ? n += 2 : s < 55296 || s >= 57344 ? n += 3 : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++a)), n += 4);
            } return n += this.encode(8 * n), this.update(e), n; }, R.prototype.bytepad = function (e, t) { for (var r = this.encode(t), n = 0; n < e.length; ++n)
            r += this.encodeString(e[n]); var i = t - r % t, o = []; return o.length = i, this.update(o), this; }, R.prototype.finalize = function () { if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks, t = this.lastByteIndex, r = this.blockCount, n = this.s;
            if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                for (e[0] = e[r], t = 1; t < r + 1; ++t)
                    e[t] = 0;
            for (e[r - 1] |= 2147483648, t = 0; t < r; ++t)
                n[t] ^= e[t];
            I(n);
        } }, R.prototype.toString = R.prototype.hex = function () { this.finalize(); for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, a = 0, s = ""; a < n;) {
            for (o = 0; o < t && a < n; ++o, ++a)
                e = r[o], s += f[e >> 4 & 15] + f[15 & e] + f[e >> 12 & 15] + f[e >> 8 & 15] + f[e >> 20 & 15] + f[e >> 16 & 15] + f[e >> 28 & 15] + f[e >> 24 & 15];
            a % t == 0 && (I(r), o = 0);
        } return i && (e = r[o], s += f[e >> 4 & 15] + f[15 & e], i > 1 && (s += f[e >> 12 & 15] + f[e >> 8 & 15]), i > 2 && (s += f[e >> 20 & 15] + f[e >> 16 & 15])), s; }, R.prototype.arrayBuffer = function () { this.finalize(); var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, a = 0, s = this.outputBits >> 3; e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(s); for (var c = new Uint32Array(e); a < n;) {
            for (o = 0; o < t && a < n; ++o, ++a)
                c[a] = r[o];
            a % t == 0 && I(r);
        } return i && (c[o] = r[o], e = e.slice(0, s)), e; }, R.prototype.buffer = R.prototype.arrayBuffer, R.prototype.digest = R.prototype.array = function () { this.finalize(); for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, c = []; s < i;) {
            for (a = 0; a < r && s < i; ++a, ++s)
                e = s << 2, t = n[a], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
            s % r == 0 && I(n);
        } return o && (e = s << 2, t = n[a], c[e] = 255 & t, o > 1 && (c[e + 1] = t >> 8 & 255), o > 2 && (c[e + 2] = t >> 16 & 255)), c; }, O.prototype = new R, O.prototype.finalize = function () { return this.encode(this.outputBits, !0), R.prototype.finalize.call(this); };
        var I = function (e) { var t, r, n, i, o, a, s, c, l, u, f, h, d, g, m, b, y, v, A, S, w, E, T, k, B, M, C, L, P, F, N, x, R, O, I, D, J, _, U, H, X, V, G, z, j, K, Z, q, Q, W, Y, $, ee, te, re, ne, ie, oe, ae, se, ce, le, ue; for (n = 0; n < 48; n += 2)
            i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | s >>> 31), r = (d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (s << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (c << 1 | l >>> 31), r = o ^ (l << 1 | c >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (u << 1 | f >>> 31), r = s ^ (f << 1 | u >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = c ^ (h << 1 | d >>> 31), r = l ^ (d << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = u ^ (i << 1 | o >>> 31), r = f ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, g = e[0], m = e[1], K = e[11] << 4 | e[10] >>> 28, Z = e[10] << 4 | e[11] >>> 28, L = e[20] << 3 | e[21] >>> 29, P = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, V = e[40] << 18 | e[41] >>> 14, G = e[41] << 18 | e[40] >>> 14, O = e[2] << 1 | e[3] >>> 31, I = e[3] << 1 | e[2] >>> 31, b = e[13] << 12 | e[12] >>> 20, y = e[12] << 12 | e[13] >>> 20, q = e[22] << 10 | e[23] >>> 22, Q = e[23] << 10 | e[22] >>> 22, F = e[33] << 13 | e[32] >>> 19, N = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, ue = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, D = e[14] << 6 | e[15] >>> 26, J = e[15] << 6 | e[14] >>> 26, v = e[25] << 11 | e[24] >>> 21, A = e[24] << 11 | e[25] >>> 21, W = e[34] << 15 | e[35] >>> 17, Y = e[35] << 15 | e[34] >>> 17, x = e[45] << 29 | e[44] >>> 3, R = e[44] << 29 | e[45] >>> 3, k = e[6] << 28 | e[7] >>> 4, B = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, _ = e[26] << 25 | e[27] >>> 7, U = e[27] << 25 | e[26] >>> 7, S = e[36] << 21 | e[37] >>> 11, w = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, j = e[9] << 27 | e[8] >>> 5, M = e[18] << 20 | e[19] >>> 12, C = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, H = e[38] << 8 | e[39] >>> 24, X = e[39] << 8 | e[38] >>> 24, E = e[48] << 14 | e[49] >>> 18, T = e[49] << 14 | e[48] >>> 18, e[0] = g ^ ~b & v, e[1] = m ^ ~y & A, e[10] = k ^ ~M & L, e[11] = B ^ ~C & P, e[20] = O ^ ~D & _, e[21] = I ^ ~J & U, e[30] = z ^ ~K & q, e[31] = j ^ ~Z & Q, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ie & ae, e[2] = b ^ ~v & S, e[3] = y ^ ~A & w, e[12] = M ^ ~L & F, e[13] = C ^ ~P & N, e[22] = D ^ ~_ & H, e[23] = J ^ ~U & X, e[32] = K ^ ~q & W, e[33] = Z ^ ~Q & Y, e[42] = ne ^ ~oe & se, e[43] = ie ^ ~ae & ce, e[4] = v ^ ~S & E, e[5] = A ^ ~w & T, e[14] = L ^ ~F & x, e[15] = P ^ ~N & R, e[24] = _ ^ ~H & V, e[25] = U ^ ~X & G, e[34] = q ^ ~W & $, e[35] = Q ^ ~Y & ee, e[44] = oe ^ ~se & le, e[45] = ae ^ ~ce & ue, e[6] = S ^ ~E & g, e[7] = w ^ ~T & m, e[16] = F ^ ~x & k, e[17] = N ^ ~R & B, e[26] = H ^ ~V & O, e[27] = X ^ ~G & I, e[36] = W ^ ~$ & z, e[37] = Y ^ ~ee & j, e[46] = se ^ ~le & te, e[47] = ce ^ ~ue & re, e[8] = E ^ ~g & b, e[9] = T ^ ~m & y, e[18] = x ^ ~k & M, e[19] = R ^ ~B & C, e[28] = V ^ ~O & D, e[29] = G ^ ~I & J, e[38] = $ ^ ~z & K, e[39] = ee ^ ~j & Z, e[48] = le ^ ~te & ne, e[49] = ue ^ ~re & ie, e[0] ^= p[n], e[1] ^= p[n + 1]; };
        if (c)
            e.exports = B;
        else {
            for (C = 0; C < M.length; ++C)
                a[M[C]] = B[M[C]];
            l && (void 0 === (n = function () { return B; }.call(t, r, t, e)) || (e.exports = n));
        }
    }(); }, 9746: function (e) { function t(e, t) { if (!e)
        throw new Error(t || "Assertion failed"); } e.exports = t, t.equal = function (e, t, r) { if (e != t)
        throw new Error(r || "Assertion failed: " + e + " != " + t); }; }, 4504: function (e, t) {
        "use strict";
        var r = t;
        function n(e) { return 1 === e.length ? "0" + e : e; }
        function i(e) { for (var t = "", r = 0; r < e.length; r++)
            t += n(e[r].toString(16)); return t; }
        r.toArray = function (e, t) { if (Array.isArray(e))
            return e.slice(); if (!e)
            return []; var r = []; if ("string" != typeof e) {
            for (var n = 0; n < e.length; n++)
                r[n] = 0 | e[n];
            return r;
        } if ("hex" === t)
            for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2)
                r.push(parseInt(e[n] + e[n + 1], 16));
        else
            for (n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n), o = i >> 8, a = 255 & i;
                o ? r.push(o, a) : r.push(a);
            } return r; }, r.zero2 = n, r.toHex = i, r.encode = function (e, t) { return "hex" === t ? i(e) : e; };
    }, 631: function (e, t, r) { var n = "function" == typeof Map && Map.prototype, i = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, o = n && i && "function" == typeof i.get ? i.get : null, a = n && Map.prototype.forEach, s = "function" == typeof Set && Set.prototype, c = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, l = s && c && "function" == typeof c.get ? c.get : null, u = s && Set.prototype.forEach, f = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null, h = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null, d = Boolean.prototype.valueOf, p = Object.prototype.toString, g = Function.prototype.toString, m = String.prototype.match, b = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, y = Object.getOwnPropertySymbols, v = "function" == typeof Symbol ? Symbol.prototype.toString : null, A = Object.prototype.propertyIsEnumerable, S = r(6631).custom, w = S && B(S) ? S : null; function E(e, t, r) { var n = "double" === (r.quoteStyle || t) ? '"' : "'"; return n + e + n; } function T(e) { return String(e).replace(/"/g, "&quot;"); } function k(e) { return "[object Array]" === L(e); } function B(e) { return "[object Symbol]" === L(e); } e.exports = function e(t, r, n, i) { var s = r || {}; if (C(s, "quoteStyle") && "single" !== s.quoteStyle && "double" !== s.quoteStyle)
        throw new TypeError('option "quoteStyle" must be "single" or "double"'); if (C(s, "maxStringLength") && ("number" == typeof s.maxStringLength ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : null !== s.maxStringLength))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'); var c = !C(s, "customInspect") || s.customInspect; if ("boolean" != typeof c)
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`'); if (C(s, "indent") && null !== s.indent && "\t" !== s.indent && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`'); if (void 0 === t)
        return "undefined"; if (null === t)
        return "null"; if ("boolean" == typeof t)
        return t ? "true" : "false"; if ("string" == typeof t)
        return F(t, s); if ("number" == typeof t)
        return 0 === t ? 1 / 0 / t > 0 ? "0" : "-0" : String(t); if ("bigint" == typeof t)
        return String(t) + "n"; var p = void 0 === s.depth ? 5 : s.depth; if (void 0 === n && (n = 0), n >= p && p > 0 && "object" == typeof t)
        return k(t) ? "[Array]" : "[Object]"; var y, A = function (e, t) { var r; if ("\t" === e.indent)
        r = "\t";
    else {
        if (!("number" == typeof e.indent && e.indent > 0))
            return null;
        r = Array(e.indent + 1).join(" ");
    } return { base: r, prev: Array(t + 1).join(r) }; }(s, n); if (void 0 === i)
        i = [];
    else if (P(i, t) >= 0)
        return "[Circular]"; function S(t, r, o) { if (r && (i = i.slice()).push(r), o) {
        var a = { depth: s.depth };
        return C(s, "quoteStyle") && (a.quoteStyle = s.quoteStyle), e(t, a, n + 1, i);
    } return e(t, s, n + 1, i); } if ("function" == typeof t) {
        var M = function (e) { if (e.name)
            return e.name; var t = m.call(g.call(e), /^function\s*([\w$]+)/); return t ? t[1] : null; }(t), N = D(t, S);
        return "[Function" + (M ? ": " + M : " (anonymous)") + "]" + (N.length > 0 ? " { " + N.join(", ") + " }" : "");
    } if (B(t)) {
        var J = v.call(t);
        return "object" == typeof t ? x(J) : J;
    } if ((y = t) && "object" == typeof y && ("undefined" != typeof HTMLElement && y instanceof HTMLElement || "string" == typeof y.nodeName && "function" == typeof y.getAttribute)) {
        for (var _ = "<" + String(t.nodeName).toLowerCase(), U = t.attributes || [], H = 0; H < U.length; H++)
            _ += " " + U[H].name + "=" + E(T(U[H].value), "double", s);
        return _ += ">", t.childNodes && t.childNodes.length && (_ += "..."), _ + "</" + String(t.nodeName).toLowerCase() + ">";
    } if (k(t)) {
        if (0 === t.length)
            return "[]";
        var X = D(t, S);
        return A && !function (e) { for (var t = 0; t < e.length; t++)
            if (P(e[t], "\n") >= 0)
                return !1; return !0; }(X) ? "[" + I(X, A) + "]" : "[ " + X.join(", ") + " ]";
    } if (function (e) { return "[object Error]" === L(e); }(t)) {
        var V = D(t, S);
        return 0 === V.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + V.join(", ") + " }";
    } if ("object" == typeof t && c) {
        if (w && "function" == typeof t[w])
            return t[w]();
        if ("function" == typeof t.inspect)
            return t.inspect();
    } if (function (e) { if (!o || !e || "object" != typeof e)
        return !1; try {
        o.call(e);
        try {
            l.call(e);
        }
        catch (e) {
            return !0;
        }
        return e instanceof Map;
    }
    catch (e) { } return !1; }(t)) {
        var G = [];
        return a.call(t, (function (e, r) { G.push(S(r, t, !0) + " => " + S(e, t)); })), O("Map", o.call(t), G, A);
    } if (function (e) { if (!l || !e || "object" != typeof e)
        return !1; try {
        l.call(e);
        try {
            o.call(e);
        }
        catch (e) {
            return !0;
        }
        return e instanceof Set;
    }
    catch (e) { } return !1; }(t)) {
        var z = [];
        return u.call(t, (function (e) { z.push(S(e, t)); })), O("Set", l.call(t), z, A);
    } if (function (e) { if (!f || !e || "object" != typeof e)
        return !1; try {
        f.call(e, f);
        try {
            h.call(e, h);
        }
        catch (e) {
            return !0;
        }
        return e instanceof WeakMap;
    }
    catch (e) { } return !1; }(t))
        return R("WeakMap"); if (function (e) { if (!h || !e || "object" != typeof e)
        return !1; try {
        h.call(e, h);
        try {
            f.call(e, f);
        }
        catch (e) {
            return !0;
        }
        return e instanceof WeakSet;
    }
    catch (e) { } return !1; }(t))
        return R("WeakSet"); if (function (e) { return "[object Number]" === L(e); }(t))
        return x(S(Number(t))); if (function (e) { return "[object BigInt]" === L(e); }(t))
        return x(S(b.call(t))); if (function (e) { return "[object Boolean]" === L(e); }(t))
        return x(d.call(t)); if (function (e) { return "[object String]" === L(e); }(t))
        return x(S(String(t))); if (!function (e) { return "[object Date]" === L(e); }(t) && !function (e) { return "[object RegExp]" === L(e); }(t)) {
        var j = D(t, S);
        return 0 === j.length ? "{}" : A ? "{" + I(j, A) + "}" : "{ " + j.join(", ") + " }";
    } return String(t); }; var M = Object.prototype.hasOwnProperty || function (e) { return e in this; }; function C(e, t) { return M.call(e, t); } function L(e) { return p.call(e); } function P(e, t) { if (e.indexOf)
        return e.indexOf(t); for (var r = 0, n = e.length; r < n; r++)
        if (e[r] === t)
            return r; return -1; } function F(e, t) { if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return F(e.slice(0, t.maxStringLength), t) + n;
    } return E(e.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, N), "single", t); } function N(e) { var t = e.charCodeAt(0), r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t]; return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + t.toString(16).toUpperCase(); } function x(e) { return "Object(" + e + ")"; } function R(e) { return e + " { ? }"; } function O(e, t, r, n) { return e + " (" + t + ") {" + (n ? I(r, n) : r.join(", ")) + "}"; } function I(e, t) { if (0 === e.length)
        return ""; var r = "\n" + t.prev + t.base; return r + e.join("," + r) + "\n" + t.prev; } function D(e, t) { var r = k(e), n = []; if (r) {
        n.length = e.length;
        for (var i = 0; i < e.length; i++)
            n[i] = C(e, i) ? t(e[i], e) : "";
    } for (var o in e)
        C(e, o) && (r && String(Number(o)) === o && o < e.length || (/[^\w$]/.test(o) ? n.push(t(o, e) + ": " + t(e[o], e)) : n.push(o + ": " + t(e[o], e)))); if ("function" == typeof y)
        for (var a = y(e), s = 0; s < a.length; s++)
            A.call(e, a[s]) && n.push("[" + t(a[s]) + "]: " + t(e[a[s]], e)); return n; } }, 8987: function (e, t, r) {
        "use strict";
        var n;
        if (!Object.keys) {
            var i = Object.prototype.hasOwnProperty, o = Object.prototype.toString, a = r(1414), s = Object.prototype.propertyIsEnumerable, c = !s.call({ toString: null }, "toString"), l = s.call((function () { }), "prototype"), u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], f = function (e) { var t = e.constructor; return t && t.prototype === e; }, h = { $applicationCache: !0, $console: !0, $external: !0, $frame: !0, $frameElement: !0, $frames: !0, $innerHeight: !0, $innerWidth: !0, $onmozfullscreenchange: !0, $onmozfullscreenerror: !0, $outerHeight: !0, $outerWidth: !0, $pageXOffset: !0, $pageYOffset: !0, $parent: !0, $scrollLeft: !0, $scrollTop: !0, $scrollX: !0, $scrollY: !0, $self: !0, $webkitIndexedDB: !0, $webkitStorageInfo: !0, $window: !0 }, d = function () { if ("undefined" == typeof window)
                return !1; for (var e in window)
                try {
                    if (!h["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e])
                        try {
                            f(window[e]);
                        }
                        catch (e) {
                            return !0;
                        }
                }
                catch (e) {
                    return !0;
                } return !1; }();
            n = function (e) { var t = null !== e && "object" == typeof e, r = "[object Function]" === o.call(e), n = a(e), s = t && "[object String]" === o.call(e), h = []; if (!t && !r && !n)
                throw new TypeError("Object.keys called on a non-object"); var p = l && r; if (s && e.length > 0 && !i.call(e, 0))
                for (var g = 0; g < e.length; ++g)
                    h.push(String(g)); if (n && e.length > 0)
                for (var m = 0; m < e.length; ++m)
                    h.push(String(m));
            else
                for (var b in e)
                    p && "prototype" === b || !i.call(e, b) || h.push(String(b)); if (c)
                for (var y = function (e) { if ("undefined" == typeof window || !d)
                    return f(e); try {
                    return f(e);
                }
                catch (e) {
                    return !1;
                } }(e), v = 0; v < u.length; ++v)
                    y && "constructor" === u[v] || !i.call(e, u[v]) || h.push(u[v]); return h; };
        }
        e.exports = n;
    }, 2215: function (e, t, r) {
        "use strict";
        var n = Array.prototype.slice, i = r(1414), o = Object.keys, a = o ? function (e) { return o(e); } : r(8987), s = Object.keys;
        a.shim = function () { return Object.keys ? function () { var e = Object.keys(arguments); return e && e.length === arguments.length; }(1, 2) || (Object.keys = function (e) { return i(e) ? s(n.call(e)) : s(e); }) : Object.keys = a, Object.keys || a; }, e.exports = a;
    }, 1414: function (e) {
        "use strict";
        var t = Object.prototype.toString;
        e.exports = function (e) { var r = t.call(e), n = "[object Arguments]" === r; return n || (n = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n; };
    }, 2043: function (e, t) { !function (e) {
        "use strict";
        var t = (function () {
            function t() {
            }
            t.toArrayBuffer = function (e) { var t = this.toUint8Array(e); return t.byteOffset || t.length ? t.buffer.slice(t.byteOffset, t.byteOffset + t.length) : t.buffer; };
            t.toUint8Array = function (e) { if ("undefined" != typeof Buffer && Buffer.isBuffer(e))
                return new Uint8Array(e); if (ArrayBuffer.isView(e))
                return new Uint8Array(e.buffer, e.byteOffset, e.byteLength); if (e instanceof ArrayBuffer)
                return new Uint8Array(e); throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"); };
            t.isBufferSource = function (e) { return this.isArrayBufferView(e) || e instanceof ArrayBuffer; };
            t.isArrayBufferView = function (e) { return ArrayBuffer.isView(e) || e && e.buffer instanceof ArrayBuffer; };
            return t;
        }());
        function r(e) { return "undefined" != typeof Buffer && Buffer.isBuffer(e) ? new Uint8Array(e) : t.isArrayBufferView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e); }
        var n = (function () {
            function n() {
            }
            n.isHex = function (e) { return "string" == typeof e && /^[a-z0-9]+$/i.test(e); };
            n.isBase64 = function (e) { return "string" == typeof e && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e); };
            n.isBase64Url = function (e) { return "string" == typeof e && /^[a-zA-Z0-9-_]+$/i.test(e); };
            n.ToString = function (e, t) {
                if (t === void 0) { t = "utf8"; }
                var n = r(e);
                switch (t.toLowerCase()) {
                    case "utf8": return this.ToUtf8String(n);
                    case "binary": return this.ToBinary(n);
                    case "hex": return this.ToHex(n);
                    case "base64": return this.ToBase64(n);
                    case "base64url": return this.ToBase64Url(n);
                    default: throw new Error("Unknown type of encoding '" + t + "'");
                }
            };
            n.FromString = function (e, t) {
                if (t === void 0) { t = "utf8"; }
                if (!e)
                    return new ArrayBuffer(0);
                switch (t.toLowerCase()) {
                    case "utf8": return this.FromUtf8String(e);
                    case "binary": return this.FromBinary(e);
                    case "hex": return this.FromHex(e);
                    case "base64": return this.FromBase64(e);
                    case "base64url": return this.FromBase64Url(e);
                    default: throw new Error("Unknown type of encoding '" + t + "'");
                }
            };
            n.ToBase64 = function (e) { var t = r(e); if ("undefined" != typeof btoa) {
                var e_101 = this.ToString(t, "binary");
                return btoa(e_101);
            } return Buffer.from(t).toString("base64"); };
            n.FromBase64 = function (e) { var t = this.formatString(e); if (!t)
                return new ArrayBuffer(0); if (!n.isBase64(t))
                throw new TypeError("Argument 'base64Text' is not Base64 encoded"); return "undefined" != typeof atob ? this.FromBinary(atob(t)) : new Uint8Array(Buffer.from(t, "base64")).buffer; };
            n.FromBase64Url = function (e) { var t = this.formatString(e); if (!t)
                return new ArrayBuffer(0); if (!n.isBase64Url(t))
                throw new TypeError("Argument 'base64url' is not Base64Url encoded"); return this.FromBase64(this.Base64Padding(t.replace(/\-/g, "+").replace(/\_/g, "/"))); };
            n.ToBase64Url = function (e) { return this.ToBase64(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ""); };
            n.FromUtf8String = function (e) { var t = unescape(encodeURIComponent(e)), r = new Uint8Array(t.length); for (var e_102 = 0; e_102 < t.length; e_102++)
                r[e_102] = t.charCodeAt(e_102); return r.buffer; };
            n.ToUtf8String = function (e) { var t = r(e), n = String.fromCharCode.apply(null, t); return decodeURIComponent(escape(n)); };
            n.FromBinary = function (e) { var t = e.length, r = new Uint8Array(t); for (var n_52 = 0; n_52 < t; n_52++)
                r[n_52] = e.charCodeAt(n_52); return r.buffer; };
            n.ToBinary = function (e) { var t = r(e); var n = ""; var i = t.length; for (var e_103 = 0; e_103 < i; e_103++)
                n += String.fromCharCode(t[e_103]); return n; };
            n.ToHex = function (e) { var t = r(e), n = [], i = t.length; for (var e_104 = 0; e_104 < i; e_104++) {
                var r_63 = t[e_104].toString(16);
                n.push(1 === r_63.length ? "0" + r_63 : r_63);
            } return n.join(""); };
            n.FromHex = function (e) { var t = this.formatString(e); if (!t)
                return new ArrayBuffer(0); if (!n.isHex(t))
                throw new TypeError("Argument 'hexString' is not HEX encoded"); t.length % 2 && (t = "0" + t); var r = new Uint8Array(t.length / 2); for (var e_105 = 0; e_105 < t.length; e_105 += 2) {
                var n_53 = t.slice(e_105, e_105 + 2);
                r[e_105 / 2] = parseInt(n_53, 16);
            } return r.buffer; };
            n.Base64Padding = function (e) { var t = 4 - e.length % 4; if (t < 4)
                for (var r_64 = 0; r_64 < t; r_64++)
                    e += "="; return e; };
            n.formatString = function (e) { return (null == e ? void 0 : e.replace(/[\n\r\t ]/g, "")) || ""; };
            return n;
        }());
        e.BufferSourceConverter = t, e.Convert = n, e.assign = function (e) {
            var t = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                t[_i - 1] = arguments[_i];
            }
            var r = arguments[0];
            for (var e_106 = 1; e_106 < arguments.length; e_106++) {
                var t_81 = arguments[e_106];
                for (var e_107 in t_81)
                    r[e_107] = t_81[e_107];
            }
            return r;
        }, e.combine = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            var t = e.map((function (e) { return e.byteLength; })).reduce((function (e, t) { return e + t; })), r = new Uint8Array(t);
            var n = 0;
            return e.map((function (e) { return new Uint8Array(e); })).forEach((function (e) { for (var _i = 0, e_108 = e; _i < e_108.length; _i++) {
                var t_82 = e_108[_i];
                r[n++] = t_82;
            } })), r.buffer;
        }, e.isEqual = function (e, t) { if (!e || !t)
            return !1; if (e.byteLength !== t.byteLength)
            return !1; var r = new Uint8Array(e), n = new Uint8Array(t); for (var t_83 = 0; t_83 < e.byteLength; t_83++)
            if (r[t_83] !== n[t_83])
                return !1; return !0; }, Object.defineProperty(e, "__esModule", { value: !0 });
    }(t); }, 9595: function (e, t, r) {
        "use strict";
        function n(e) { return new Date(e.getTime() + 6e4 * e.getTimezoneOffset()); }
        function i(e, t, r) { return e instanceof Object == 0 ? r : t in e ? e[t] : r; }
        function o(e, t, r, n) {
            if (t === void 0) { t = 0; }
            if (r === void 0) { r = e.byteLength - t; }
            if (n === void 0) { n = !1; }
            var i = "";
            for (var _i = 0, _a = new Uint8Array(e, t, r); _i < _a.length; _i++) {
                var o_17 = _a[_i];
                var e_109 = o_17.toString(16).toUpperCase();
                1 === e_109.length && (i += "0"), i += e_109, n && (i += " ");
            }
            return i.trim();
        }
        function a(e, t, r, n) { return t instanceof ArrayBuffer == 0 ? (e.error = 'Wrong parameter: inputBuffer must be "ArrayBuffer"', !1) : 0 === t.byteLength ? (e.error = "Wrong parameter: inputBuffer has zero length", !1) : r < 0 ? (e.error = "Wrong parameter: inputOffset less than zero", !1) : n < 0 ? (e.error = "Wrong parameter: inputLength less than zero", !1) : !(t.byteLength - r - n < 0 && (e.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", 1)); }
        function s(e, t) { var r = 0; if (1 === e.length)
            return e[0]; for (var n_54 = e.length - 1; n_54 >= 0; n_54--)
            r += e[e.length - 1 - n_54] * Math.pow(2, t * n_54); return r; }
        function c(e, t, r) {
            if (r === void 0) { r = -1; }
            var n = r;
            var i = e, o = 0, a = Math.pow(2, t);
            for (var r_65 = 1; r_65 < 8; r_65++) {
                if (e < a) {
                    var e_110 = void 0;
                    if (n < 0)
                        e_110 = new ArrayBuffer(r_65), o = r_65;
                    else {
                        if (n < r_65)
                            return new ArrayBuffer(0);
                        e_110 = new ArrayBuffer(n), o = n;
                    }
                    var a_14 = new Uint8Array(e_110);
                    for (var e_111 = r_65 - 1; e_111 >= 0; e_111--) {
                        var r_66 = Math.pow(2, e_111 * t);
                        a_14[o - e_111 - 1] = Math.floor(i / r_66), i -= a_14[o - e_111 - 1] * r_66;
                    }
                    return e_110;
                }
                a *= Math.pow(2, t);
            }
            return new ArrayBuffer(0);
        }
        function l() {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            var t = 0, r = 0;
            for (var _a = 0, e_112 = e; _a < e_112.length; _a++) {
                var r_67 = e_112[_a];
                t += r_67.byteLength;
            }
            var n = new ArrayBuffer(t), i = new Uint8Array(n);
            for (var _b = 0, e_113 = e; _b < e_113.length; _b++) {
                var t_84 = e_113[_b];
                i.set(new Uint8Array(t_84), r), r += t_84.byteLength;
            }
            return n;
        }
        function u() {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            var t = 0, r = 0;
            for (var _a = 0, e_114 = e; _a < e_114.length; _a++) {
                var r_68 = e_114[_a];
                t += r_68.length;
            }
            var n = new ArrayBuffer(t), i = new Uint8Array(n);
            for (var _b = 0, e_115 = e; _b < e_115.length; _b++) {
                var t_85 = e_115[_b];
                i.set(t_85, r), r += t_85.length;
            }
            return i;
        }
        function f() { var e = new Uint8Array(this.valueHex); if (this.valueHex.byteLength >= 2) {
            var t_86 = 255 === e[0] && 128 & e[1], r_69 = 0 === e[0] && 0 == (128 & e[1]);
            (t_86 || r_69) && this.warnings.push("Needlessly long format");
        } var t = new ArrayBuffer(this.valueHex.byteLength), r = new Uint8Array(t); for (var e_116 = 0; e_116 < this.valueHex.byteLength; e_116++)
            r[e_116] = 0; r[0] = 128 & e[0]; var n = s(r, 8), i = new ArrayBuffer(this.valueHex.byteLength), o = new Uint8Array(i); for (var t_87 = 0; t_87 < this.valueHex.byteLength; t_87++)
            o[t_87] = e[t_87]; return o[0] &= 127, s(o, 8) - n; }
        function h(e) { var t = e < 0 ? -1 * e : e; var r = 128; for (var n_55 = 1; n_55 < 8; n_55++) {
            if (t <= r) {
                if (e < 0) {
                    var e_117 = c(r - t, 8, n_55);
                    return new Uint8Array(e_117)[0] |= 128, e_117;
                }
                var i_32 = c(t, 8, n_55), o_18 = new Uint8Array(i_32);
                if (128 & o_18[0]) {
                    var e_118 = i_32.slice(0), t_88 = new Uint8Array(e_118);
                    i_32 = new ArrayBuffer(i_32.byteLength + 1), o_18 = new Uint8Array(i_32);
                    for (var r_70 = 0; r_70 < e_118.byteLength; r_70++)
                        o_18[r_70 + 1] = t_88[r_70];
                    o_18[0] = 0;
                }
                return i_32;
            }
            r *= Math.pow(2, 8);
        } return new ArrayBuffer(0); }
        function d(e, t) { if (e.byteLength !== t.byteLength)
            return !1; var r = new Uint8Array(e), n = new Uint8Array(t); for (var e_119 = 0; e_119 < r.length; e_119++)
            if (r[e_119] !== n[e_119])
                return !1; return !0; }
        function p(e, t) { var r = e.toString(10); if (t < r.length)
            return ""; var n = t - r.length, i = new Array(n); for (var e_120 = 0; e_120 < n; e_120++)
            i[e_120] = "0"; return i.join("").concat(r); }
        r.r(t), r.d(t, { getUTCDate: function () { return n; }, getParametersValue: function () { return i; }, bufferToHexCodes: function () { return o; }, checkBufferParams: function () { return a; }, utilFromBase: function () { return s; }, utilToBase: function () { return c; }, utilConcatBuf: function () { return l; }, utilConcatView: function () { return u; }, utilDecodeTC: function () { return f; }, utilEncodeTC: function () { return h; }, isEqualBuffer: function () { return d; }, padNumber: function () { return p; }, toBase64: function () { return b; }, fromBase64: function () { return y; }, arrayBufferToString: function () { return v; }, stringToArrayBuffer: function () { return A; }, nearestPowerOf2: function () { return w; }, clearProps: function () { return E; } });
        var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
        function b(e, t, r, n) {
            if (t === void 0) { t = !1; }
            if (r === void 0) { r = !1; }
            if (n === void 0) { n = !1; }
            var i = 0, o = 0, a = 0, s = "";
            var c = t ? m : g;
            if (n) {
                var t_89 = 0;
                for (var r_71 = 0; r_71 < e.length; r_71++)
                    if (0 !== e.charCodeAt(r_71)) {
                        t_89 = r_71;
                        break;
                    }
                e = e.slice(t_89);
            }
            for (; i < e.length;) {
                var t_90 = e.charCodeAt(i++);
                i >= e.length && (o = 1);
                var n_56 = e.charCodeAt(i++);
                i >= e.length && (a = 1);
                var l_2 = e.charCodeAt(i++), u_3 = t_90 >> 2, f_1 = (3 & t_90) << 4 | n_56 >> 4;
                var h_2 = (15 & n_56) << 2 | l_2 >> 6, d_1 = 63 & l_2;
                1 === o ? h_2 = d_1 = 64 : 1 === a && (d_1 = 64), s += r ? 64 === h_2 ? "" + c.charAt(u_3) + c.charAt(f_1) : 64 === d_1 ? "" + c.charAt(u_3) + c.charAt(f_1) + c.charAt(h_2) : "" + c.charAt(u_3) + c.charAt(f_1) + c.charAt(h_2) + c.charAt(d_1) : "" + c.charAt(u_3) + c.charAt(f_1) + c.charAt(h_2) + c.charAt(d_1);
            }
            return s;
        }
        function y(e, t, r) {
            if (t === void 0) { t = !1; }
            if (r === void 0) { r = !1; }
            var n = t ? m : g;
            function i(e) { for (var t_91 = 0; t_91 < 64; t_91++)
                if (n.charAt(t_91) === e)
                    return t_91; return 64; }
            function o(e) { return 64 === e ? 0 : e; }
            var a = 0, s = "";
            for (; a < e.length;) {
                var t_92 = i(e.charAt(a++)), r_72 = a >= e.length ? 0 : i(e.charAt(a++)), n_57 = a >= e.length ? 0 : i(e.charAt(a++)), c_4 = a >= e.length ? 0 : i(e.charAt(a++)), l_3 = o(t_92) << 2 | o(r_72) >> 4, u_4 = (15 & o(r_72)) << 4 | o(n_57) >> 2, f_2 = (3 & o(n_57)) << 6 | o(c_4);
                s += String.fromCharCode(l_3), 64 !== n_57 && (s += String.fromCharCode(u_4)), 64 !== c_4 && (s += String.fromCharCode(f_2));
            }
            if (r) {
                var e_121 = -1;
                for (var t_93 = s.length - 1; t_93 >= 0; t_93--)
                    if (0 !== s.charCodeAt(t_93)) {
                        e_121 = t_93;
                        break;
                    }
                s = -1 !== e_121 ? s.slice(0, e_121 + 1) : "";
            }
            return s;
        }
        function v(e) { var t = ""; var r = new Uint8Array(e); for (var _i = 0, r_73 = r; _i < r_73.length; _i++) {
            var e_122 = r_73[_i];
            t += String.fromCharCode(e_122);
        } return t; }
        function A(e) { var t = e.length, r = new ArrayBuffer(t), n = new Uint8Array(r); for (var r_74 = 0; r_74 < t; r_74++)
            n[r_74] = e.charCodeAt(r_74); return r; }
        var S = Math.log(2);
        function w(e) { var t = Math.log(e) / S, r = Math.floor(t), n = Math.round(t); return r === n ? r : n; }
        function E(e, t) { for (var _i = 0, t_94 = t; _i < t_94.length; _i++) {
            var r_75 = t_94[_i];
            delete e[r_75];
        } }
    }, 3697: function (e) {
        "use strict";
        var t = Object, r = TypeError;
        e.exports = function () { if (null != this && this !== t(this))
            throw new r("RegExp.prototype.flags getter called on non-object"); var e = ""; return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.sticky && (e += "y"), e; };
    }, 2847: function (e, t, r) {
        "use strict";
        var n = r(4289), i = r(5559), o = r(3697), a = r(1721), s = r(2753), c = i(o);
        n(c, { getPolyfill: a, implementation: o, shim: s }), e.exports = c;
    }, 1721: function (e, t, r) {
        "use strict";
        var n = r(3697), i = r(4289).supportsDescriptors, o = Object.getOwnPropertyDescriptor, a = TypeError;
        e.exports = function () { if (!i)
            throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"); if ("gim" === /a/gim.flags) {
            var e = o(RegExp.prototype, "flags");
            if (e && "function" == typeof e.get && "boolean" == typeof /a/.dotAll)
                return e.get;
        } return n; };
    }, 2753: function (e, t, r) {
        "use strict";
        var n = r(4289).supportsDescriptors, i = r(1721), o = Object.getOwnPropertyDescriptor, a = Object.defineProperty, s = TypeError, c = Object.getPrototypeOf, l = /a/;
        e.exports = function () { if (!n || !c)
            throw new s("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"); var e = i(), t = c(l), r = o(t, "flags"); return r && r.get === e || a(t, "flags", { configurable: !0, enumerable: !1, get: e }), e; };
    }, 7635: function (e) {
        "use strict";
        !function (t) { var r = 2147483647; function n(e) { var t = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]); var r = 1779033703, n = 3144134277, i = 1013904242, o = 2773480762, a = 1359893119, s = 2600822924, c = 528734635, l = 1541459225; var u = new Uint32Array(64); function f(e) { var f = 0, h = e.length; for (; h >= 64;) {
            var d_2 = void 0, p_1 = void 0, g_1 = void 0, m_1 = void 0, b_1 = void 0, y = r, v = n, A = i, S = o, w = a, E = s, T = c, k = l;
            for (p_1 = 0; p_1 < 16; p_1++)
                g_1 = f + 4 * p_1, u[p_1] = (255 & e[g_1]) << 24 | (255 & e[g_1 + 1]) << 16 | (255 & e[g_1 + 2]) << 8 | 255 & e[g_1 + 3];
            for (p_1 = 16; p_1 < 64; p_1++)
                d_2 = u[p_1 - 2], m_1 = (d_2 >>> 17 | d_2 << 15) ^ (d_2 >>> 19 | d_2 << 13) ^ d_2 >>> 10, d_2 = u[p_1 - 15], b_1 = (d_2 >>> 7 | d_2 << 25) ^ (d_2 >>> 18 | d_2 << 14) ^ d_2 >>> 3, u[p_1] = (m_1 + u[p_1 - 7] | 0) + (b_1 + u[p_1 - 16] | 0) | 0;
            for (p_1 = 0; p_1 < 64; p_1++)
                m_1 = (((w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7)) + (w & E ^ ~w & T) | 0) + (k + (t[p_1] + u[p_1] | 0) | 0) | 0, b_1 = ((y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + (y & v ^ y & A ^ v & A) | 0, k = T, T = E, E = w, w = S + m_1 | 0, S = A, A = v, v = y, y = m_1 + b_1 | 0;
            r = r + y | 0, n = n + v | 0, i = i + A | 0, o = o + S | 0, a = a + w | 0, s = s + E | 0, c = c + T | 0, l = l + k | 0, f += 64, h -= 64;
        } } f(e); var h, d = e.length % 64, p = e.length / 536870912 | 0, g = e.length << 3, m = d < 56 ? 56 : 120, b = e.slice(e.length - d, e.length); for (b.push(128), h = d + 1; h < m; h++)
            b.push(0); return b.push(p >>> 24 & 255), b.push(p >>> 16 & 255), b.push(p >>> 8 & 255), b.push(p >>> 0 & 255), b.push(g >>> 24 & 255), b.push(g >>> 16 & 255), b.push(g >>> 8 & 255), b.push(g >>> 0 & 255), f(b), [r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c >>> 0 & 255, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, l >>> 0 & 255]; } function i(e, t, r) { e = e.length <= 64 ? e : n(e); var i = 64 + t.length + 4, o = new Array(i), a = new Array(64); var s, c = []; for (s = 0; s < 64; s++)
            o[s] = 54; for (s = 0; s < e.length; s++)
            o[s] ^= e[s]; for (s = 0; s < t.length; s++)
            o[64 + s] = t[s]; for (s = i - 4; s < i; s++)
            o[s] = 0; for (s = 0; s < 64; s++)
            a[s] = 92; for (s = 0; s < e.length; s++)
            a[s] ^= e[s]; function l() { for (var e_123 = i - 1; e_123 >= i - 4; e_123--) {
            if (o[e_123]++, o[e_123] <= 255)
                return;
            o[e_123] = 0;
        } } for (; r >= 32;)
            l(), c = c.concat(n(a.concat(n(o)))), r -= 32; return r > 0 && (l(), c = c.concat(n(a.concat(n(o))).slice(0, r))), c; } function o(e, t, r, n, i) { var o; for (l(e, 16 * (2 * r - 1), i, 0, 16), o = 0; o < 2 * r; o++)
            c(e, 16 * o, i, 16), s(i, n), l(i, 0, e, t + 16 * o, 16); for (o = 0; o < r; o++)
            l(e, t + 2 * o * 16, e, 16 * o, 16); for (o = 0; o < r; o++)
            l(e, t + 16 * (2 * o + 1), e, 16 * (o + r), 16); } function a(e, t) { return e << t | e >>> 32 - t; } function s(e, t) { l(e, 0, t, 0, 16); for (var e_124 = 8; e_124 > 0; e_124 -= 2)
            t[4] ^= a(t[0] + t[12], 7), t[8] ^= a(t[4] + t[0], 9), t[12] ^= a(t[8] + t[4], 13), t[0] ^= a(t[12] + t[8], 18), t[9] ^= a(t[5] + t[1], 7), t[13] ^= a(t[9] + t[5], 9), t[1] ^= a(t[13] + t[9], 13), t[5] ^= a(t[1] + t[13], 18), t[14] ^= a(t[10] + t[6], 7), t[2] ^= a(t[14] + t[10], 9), t[6] ^= a(t[2] + t[14], 13), t[10] ^= a(t[6] + t[2], 18), t[3] ^= a(t[15] + t[11], 7), t[7] ^= a(t[3] + t[15], 9), t[11] ^= a(t[7] + t[3], 13), t[15] ^= a(t[11] + t[7], 18), t[1] ^= a(t[0] + t[3], 7), t[2] ^= a(t[1] + t[0], 9), t[3] ^= a(t[2] + t[1], 13), t[0] ^= a(t[3] + t[2], 18), t[6] ^= a(t[5] + t[4], 7), t[7] ^= a(t[6] + t[5], 9), t[4] ^= a(t[7] + t[6], 13), t[5] ^= a(t[4] + t[7], 18), t[11] ^= a(t[10] + t[9], 7), t[8] ^= a(t[11] + t[10], 9), t[9] ^= a(t[8] + t[11], 13), t[10] ^= a(t[9] + t[8], 18), t[12] ^= a(t[15] + t[14], 7), t[13] ^= a(t[12] + t[15], 9), t[14] ^= a(t[13] + t[12], 13), t[15] ^= a(t[14] + t[13], 18); for (var r_76 = 0; r_76 < 16; ++r_76)
            e[r_76] += t[r_76]; } function c(e, t, r, n) { for (var i_33 = 0; i_33 < n; i_33++)
            r[i_33] ^= e[t + i_33]; } function l(e, t, r, n, i) { for (; i--;)
            r[n++] = e[t++]; } function u(e) { if (!e || "number" != typeof e.length)
            return !1; for (var t_95 = 0; t_95 < e.length; t_95++) {
            var r_77 = e[t_95];
            if ("number" != typeof r_77 || r_77 % 1 || r_77 < 0 || r_77 >= 256)
                return !1;
        } return !0; } function f(e, t) { if ("number" != typeof e || e % 1)
            throw new Error("invalid " + t); return e; } function h(e, t, n, a, s, h, d) { if (n = f(n, "N"), a = f(a, "r"), s = f(s, "p"), h = f(h, "dkLen"), 0 === n || 0 != (n & n - 1))
            throw new Error("N must be power of 2"); if (n > r / 128 / a)
            throw new Error("N too large"); if (a > r / 128 / s)
            throw new Error("r too large"); if (!u(e))
            throw new Error("password must be an array or buffer"); if (e = Array.prototype.slice.call(e), !u(t))
            throw new Error("salt must be an array or buffer"); t = Array.prototype.slice.call(t); var p = i(e, t, 128 * s * a); var g = new Uint32Array(32 * s * a); for (var e_125 = 0; e_125 < g.length; e_125++) {
            var t_96 = 4 * e_125;
            g[e_125] = (255 & p[t_96 + 3]) << 24 | (255 & p[t_96 + 2]) << 16 | (255 & p[t_96 + 1]) << 8 | (255 & p[t_96 + 0]) << 0;
        } var m = new Uint32Array(64 * a), b = new Uint32Array(32 * a * n), y = 32 * a, v = new Uint32Array(16), A = new Uint32Array(16), S = s * n * 2; var w, E, T = 0, k = null, B = !1, M = 0, C = 0; var L = d ? parseInt(1e3 / a) : 4294967295, P = "undefined" != typeof setImmediate ? setImmediate : setTimeout, F = function () { if (B)
            return d(new Error("cancelled"), T / S); var t; switch (M) {
            case 0: E = 32 * C * a, l(g, E, m, 0, y), M = 1, w = 0;
            case 1:
                t = n - w, t > L && (t = L);
                for (var e_126 = 0; e_126 < t; e_126++)
                    l(m, 0, b, (w + e_126) * y, y), o(m, y, a, v, A);
                if (w += t, T += t, d) {
                    var e_127 = parseInt(1e3 * T / S);
                    if (e_127 !== k) {
                        if (B = d(null, T / S), B)
                            break;
                        k = e_127;
                    }
                }
                if (w < n)
                    break;
                w = 0, M = 2;
            case 2:
                t = n - w, t > L && (t = L);
                for (var e_128 = 0; e_128 < t; e_128++) {
                    var e_129 = m[16 * (2 * a - 1)] & n - 1;
                    c(b, e_129 * y, m, y), o(m, y, a, v, A);
                }
                if (w += t, T += t, d) {
                    var e_130 = parseInt(1e3 * T / S);
                    if (e_130 !== k) {
                        if (B = d(null, T / S), B)
                            break;
                        k = e_130;
                    }
                }
                if (w < n)
                    break;
                if (l(m, 0, g, E, y), C++, C < s) {
                    M = 0;
                    break;
                }
                p = [];
                for (var e_131 = 0; e_131 < g.length; e_131++)
                    p.push(g[e_131] >> 0 & 255), p.push(g[e_131] >> 8 & 255), p.push(g[e_131] >> 16 & 255), p.push(g[e_131] >> 24 & 255);
                var r_78 = i(e, p, h);
                return d && d(null, 1, r_78), r_78;
        } d && P(F); }; if (!d)
            for (;;) {
                var e_132 = F();
                if (null != e_132)
                    return e_132;
            } F(); } var d = { scrypt: function (e, t, r, n, i, o, a) { return new Promise((function (s, c) { var l = 0; a && a(0), h(e, t, r, n, i, o, (function (e, t, r) { if (e)
                c(e);
            else if (r)
                a && 1 !== l && a(1), s(new Uint8Array(r));
            else if (a && t !== l)
                return l = t, a(t); })); })); }, syncScrypt: function (e, t, r, n, i, o) { return new Uint8Array(h(e, t, r, n, i, o)); } }; e.exports = d; }();
    }, 7478: function (e, t, r) {
        "use strict";
        var n = r(210), i = r(1924), o = r(631), a = n("%TypeError%"), s = n("%WeakMap%", !0), c = n("%Map%", !0), l = i("WeakMap.prototype.get", !0), u = i("WeakMap.prototype.set", !0), f = i("WeakMap.prototype.has", !0), h = i("Map.prototype.get", !0), d = i("Map.prototype.set", !0), p = i("Map.prototype.has", !0), g = function (e, t) { for (var r, n = e; null !== (r = n.next); n = r)
            if (r.key === t)
                return n.next = r.next, r.next = e.next, e.next = r, r; };
        e.exports = function () { var e, t, r, n = { assert: function (e) { if (!n.has(e))
                throw new a("Side channel does not contain " + o(e)); }, get: function (n) { if (s && n && ("object" == typeof n || "function" == typeof n)) {
                if (e)
                    return l(e, n);
            }
            else if (c) {
                if (t)
                    return h(t, n);
            }
            else if (r)
                return function (e, t) { var r = g(e, t); return r && r.value; }(r, n); }, has: function (n) { if (s && n && ("object" == typeof n || "function" == typeof n)) {
                if (e)
                    return f(e, n);
            }
            else if (c) {
                if (t)
                    return p(t, n);
            }
            else if (r)
                return function (e, t) { return !!g(e, t); }(r, n); return !1; }, set: function (n, i) { s && n && ("object" == typeof n || "function" == typeof n) ? (e || (e = new s), u(e, n, i)) : c ? (t || (t = new c), d(t, n, i)) : (r || (r = { key: {}, next: null }), function (e, t, r) { var n = g(e, t); n ? n.value = r : e.next = { key: t, next: e.next, value: r }; }(r, n, i)); } }; return n; };
    }, 1066: function (e, t, r) {
        "use strict";
        var n, i = r(4289), o = r(2672), a = r(3674), s = r(5588), c = r(8769), l = r(4091), u = r(356), f = r(2946), h = r(8502), d = r(7308), p = r(1915), g = r(1405)(), m = r(9496), b = function (e, t, r, n) { if ("String" !== p(t))
            throw new TypeError("S must be a string"); if ("Boolean" !== p(r))
            throw new TypeError("global must be a boolean"); if ("Boolean" !== p(n))
            throw new TypeError("fullUnicode must be a boolean"); m.set(this, "[[IteratingRegExp]]", e), m.set(this, "[[IteratedString]]", t), m.set(this, "[[Global]]", r), m.set(this, "[[Unicode]]", n), m.set(this, "[[Done]]", !1); }, y = c("%IteratorPrototype%", !0);
        if (y && (b.prototype = l(y)), i(b.prototype, { next: function () { var e = this; if ("Object" !== p(e))
                throw new TypeError("receiver must be an object"); if (!(e instanceof b && m.has(e, "[[IteratingRegExp]]") && m.has(e, "[[IteratedString]]") && m.has(e, "[[Global]]") && m.has(e, "[[Unicode]]") && m.has(e, "[[Done]]")))
                throw new TypeError('"this" value must be a RegExpStringIterator instance'); if (m.get(e, "[[Done]]"))
                return a(n, !0); var t = m.get(e, "[[IteratingRegExp]]"), r = m.get(e, "[[IteratedString]]"), i = m.get(e, "[[Global]]"), c = m.get(e, "[[Unicode]]"), l = u(t, r); if (null === l)
                return m.set(e, "[[Done]]", !0), a(n, !0); if (i) {
                if ("" === d(s(l, "0"))) {
                    var g = h(s(t, "lastIndex")), y = o(r, g, c);
                    f(t, "lastIndex", y, !0);
                }
                return a(l, !1);
            } return m.set(e, "[[Done]]", !0), a(l, !1); } }), g) {
            var v = Object.defineProperty;
            if (Symbol.toStringTag && (v ? v(b.prototype, Symbol.toStringTag, { configurable: !0, enumerable: !1, value: "RegExp String Iterator", writable: !1 }) : b.prototype[Symbol.toStringTag] = "RegExp String Iterator"), !y && Symbol.iterator) {
                var A = {};
                A[Symbol.iterator] = b.prototype[Symbol.iterator] || function () { return this; };
                var S = {};
                S[Symbol.iterator] = function () { return b.prototype[Symbol.iterator] !== A[Symbol.iterator]; }, i(b.prototype, A, S);
            }
        }
        e.exports = b;
    }, 9505: function (e, t, r) {
        "use strict";
        var n = r(7800), i = r(5588), o = r(3081), a = r(1137), s = r(7308), c = r(3733), l = r(1924), u = r(1405)(), f = r(2847), h = l("String.prototype.indexOf"), d = r(6966), p = function (e) { var t = d(); if (u && "symbol" == typeof Symbol.matchAll) {
            var r = o(e, Symbol.matchAll);
            return r === RegExp.prototype[Symbol.matchAll] && r !== t ? t : r;
        } if (a(e))
            return t; };
        e.exports = function (e) { var t = c(this); if (null != e) {
            if (a(e)) {
                var r = "flags" in e ? i(e, "flags") : f(e);
                if (c(r), h(s(r), "g") < 0)
                    throw new TypeError("matchAll requires a global regular expression");
            }
            var o = p(e);
            if (void 0 !== o)
                return n(o, e, [t]);
        } var l = s(t), u = new RegExp(e, "g"); return n(p(u), u, [l]); };
    }, 4956: function (e, t, r) {
        "use strict";
        var n = r(5559), i = r(4289), o = r(9505), a = r(3447), s = r(2376), c = n(o);
        i(c, { getPolyfill: a, implementation: o, shim: s }), e.exports = c;
    }, 6966: function (e, t, r) {
        "use strict";
        var n = r(1405)(), i = r(7201);
        e.exports = function () { return n && "symbol" == typeof Symbol.matchAll && "function" == typeof RegExp.prototype[Symbol.matchAll] ? RegExp.prototype[Symbol.matchAll] : i; };
    }, 3447: function (e, t, r) {
        "use strict";
        var n = r(9505);
        e.exports = function () { if (String.prototype.matchAll)
            try {
                "".matchAll(RegExp.prototype);
            }
            catch (e) {
                return String.prototype.matchAll;
            } return n; };
    }, 7201: function (e, t, r) {
        "use strict";
        var n = r(5588), i = r(2946), o = r(303), a = r(8502), s = r(7308), c = r(1915), l = r(2847), u = r(1066), f = RegExp, h = "flags" in RegExp.prototype, d = function (e) { var t = this; if ("Object" !== c(t))
            throw new TypeError('"this" value must be an Object'); var r = s(e), d = function (e, t) { var r = "flags" in t ? n(t, "flags") : s(l(t)); return { flags: r, matcher: new e(h && "string" == typeof r ? t : e === f ? t.source : t, r) }; }(o(t, f), t), p = d.flags, g = d.matcher, m = a(n(t, "lastIndex")); return i(g, "lastIndex", m, !0), function (e, t, r, n) { if ("String" !== c(t))
            throw new TypeError('"S" value must be a String'); if ("Boolean" !== c(r))
            throw new TypeError('"global" value must be a Boolean'); if ("Boolean" !== c(n))
            throw new TypeError('"fullUnicode" value must be a Boolean'); return new u(e, t, r, n); }(g, r, p.indexOf("g") > -1, p.indexOf("u") > -1); }, p = Object.defineProperty, g = Object.getOwnPropertyDescriptor;
        if (p && g) {
            var m = g(d, "name");
            m && m.configurable && p(d, "name", { value: "[Symbol.matchAll]" });
        }
        e.exports = d;
    }, 2376: function (e, t, r) {
        "use strict";
        var n = r(4289), i = r(1405)(), o = r(3447), a = r(6966), s = Object.defineProperty, c = Object.getOwnPropertyDescriptor;
        e.exports = function () { var e = o(); if (n(String.prototype, { matchAll: e }, { matchAll: function () { return String.prototype.matchAll !== e; } }), i) {
            var t = Symbol.matchAll || (Symbol.for ? Symbol.for("Symbol.matchAll") : Symbol("Symbol.matchAll"));
            if (n(Symbol, { matchAll: t }, { matchAll: function () { return Symbol.matchAll !== t; } }), s && c) {
                var r = c(Symbol, t);
                r && !r.configurable || s(Symbol, t, { configurable: !1, enumerable: !1, value: t, writable: !1 });
            }
            var l = a(), u = {};
            u[t] = l;
            var f = {};
            f[t] = function () { return RegExp.prototype[t] !== l; }, n(RegExp.prototype, u, f);
        } return e; };
    }, 6631: function () { }, 2574: function () { }, 3906: function () { } }, t = {}; function r(n) { if (t[n])
    return t[n].exports; var i = t[n] = { id: n, loaded: !1, exports: {} }; return e[n].call(i.exports, i, i.exports, r), i.loaded = !0, i.exports; } r.amdO = {}, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, { a: t }), t; }, r.d = function (e, t) { for (var n in t)
    r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, r.g = function () { if ("object" == typeof globalThis)
    return globalThis; try {
    return this || new Function("return this")();
}
catch (e) {
    if ("object" == typeof window)
        return window;
} }(), r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.nmd = function (e) { return (e.paths = [], e.children || (e.children = []), e); }, (function () {
    "use strict";
    var e = r(1094);
    function t(e) { for (var t = "", r = 0; r < e.length; r++)
        t += "" + e.charCodeAt(r).toString(16); return t; }
    function n(e) {
        if (e === void 0) { e = ""; }
        "0x" === e.substr(0, 2).toLowerCase() && (e = e.substr(2));
        var t = [], r = __spreadArray([], e, true);
        r.length % 2 && r.unshift("0");
        var n = "";
        if (!r.length)
            return [];
        if (void 0 !== r && r)
            for (; r.length;)
                n = "", n += r.shift() + r.shift(), t.push(parseInt(n, 16));
        return t;
    }
    function i(e) {
        if (e === void 0) { e = ""; }
        return Uint8Array.from(n(e));
    }
    function o(e) {
        if (e === void 0) { e = ""; }
        return d(i(e)).split("/").join("_").split("+").join("-");
    }
    function a(e, t) {
        if (t === void 0) { t = T.P; }
        var r = e % t;
        return r >= 0n ? r : t + r;
    }
    function s(e, t) {
        if (t === void 0) { t = T.P; }
        if (0n === e || t <= 0n)
            throw new Error("invert: expected positive integers");
        var _a = function (e, t) {
            var _a, _b, _c;
            var _d = [0n, 1n, 1n, 0n], r = _d[0], n = _d[1], i = _d[2], o = _d[3];
            for (; 0n !== e;) {
                var _f = [t / e, t % e], a_15 = _f[0], s_11 = _f[1], _g = [r - i * a_15, n - o * a_15], c_5 = _g[0], l_4 = _g[1];
                _a = [e, s_11], t = _a[0], e = _a[1], (_b = [i, o], r = _b[0], n = _b[1]), (_c = [c_5, l_4], i = _c[0], o = _c[1]);
            }
            return [t, r, n];
        }(a(e, t), t), r = _a[0], n = _a[1];
        if (1n !== r)
            throw new Error("invert: does not exist");
        return a(n, t);
    }
    function c(e) { return function (e) { var t = []; return Uint8Array.from(e).forEach((function (e) { var r = e.toString(16); r.length % 2 && (r = "0" + r), t.push(r); })), BigInt("0x" + t.join("")); }(e); }
    function l(e) { return u(e); }
    function u(e, t) {
        if (t === void 0) { t = 0; }
        var r = BigInt(e).toString(16).padStart(2 * t, "0");
        r.length % 2 && (r = "0" + r);
        for (var n = r.length / 2, i = new Uint8Array(n), o = 0, a = 0; o < n;)
            i[o] = parseInt(r.slice(a, a + 2), 16), o += 1, a += 2;
        return i;
    }
    function f(e) { if (1 === e.length)
        return e[0]; var t = Uint8Array.from([]); if (0 === e.length)
        return t; for (var r_79 = 0; r_79 < e.length; r_79++) {
        if ("object" != typeof e[r_79] || "number" != typeof e[r_79].length)
            throw new Error("wrong input values");
        var n_58 = Uint8Array.from(e[r_79]);
        if (!n_58 || !n_58.length)
            continue;
        var i_34 = new Uint8Array(t.length + n_58.length);
        i_34.set(t), i_34.set(n_58, t.length), t = i_34;
    } return t; }
    function h(e) { if (!e)
        return ""; var t = "", r = e.byteLength; for (var n_59 = 0; n_59 < r; n_59++)
        t += String.fromCharCode(e[n_59]); return t; }
    function d(e) { var t = h(e); return "undefined" != typeof window && window.btoa ? window.btoa(t) : new Buffer(t).toString("base64"); }
    function p(e) { var t; return e = function (e) { var t = e.split(/\r?\n/); for (; "" === t[t.length - 1].trim();)
        t.pop(); return "---" === e.slice(0, 3) && (t.shift(), t.pop()), (e = t.join("")).split("_").join("/").split("-").join("+").split(".").join("="); }(e), t = "undefined" != typeof window && window.atob ? Uint8Array.from(atob(e), (function (e) { return e.charCodeAt(0); })) : Uint8Array.from(Buffer.from(e, "base64")), t; }
    function g(e) { for (var t = [], r = 0; r < e.length; r++)
        t.push(e.charCodeAt(r)); return t; }
    function m(e, t, r) { var n = 1n, i = e; for (; t > 0n;)
        1n & t && (n = n * i % r), i = i * i % r, t >>= 1n; return n; }
    function b(e) { return e && e.length ? Array.from(e).map((function (e) { return ("0" + e.toString(16)).slice(-2); })).join("") : ""; }
    function y(e) { return "undefined" != typeof Buffer ? Buffer.from(e) : e; }
    function v(e) { var t = Math.floor(e / Math.pow(2, 32)); return new Uint8Array([t, t << 8, t << 16, t << 24, e, e << 8, e << 16, e << 24].map((function (e) { return e >>> 24; }))); }
    function A(t) { return function (t) { var r = Array.from(t); return f([new Uint8Array(32), new Uint8Array(n(e.keccak256(r)))]).slice(-32); }(Uint8Array.from(g(t))); }
    function S(e) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        e > 1 || console.log.apply(console, t);
    }
    var w = { P: Math.pow(2n, 256n) - Math.pow(2n, 32n) - 977n, n: Math.pow(2n, 256n) - 432420386565659656852420866394968145599n, magicExp: (Math.pow(2n, 256n) - Math.pow(2n, 32n) - 977n + 1n) / 4n, A: 0n, B: 7n }, E = { p256: { P: BigInt("0xFFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"), A: BigInt("0xFFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"), B: BigInt("0x5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"), n: BigInt("0xFFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"), GX: BigInt("0x6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296"), GY: BigInt("0x4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5"), h: 1n }, secp256k1: { P: Math.pow(2n, 256n) - Math.pow(2n, 32n) - 977n, A: 0n, B: 7n, n: Math.pow(2n, 256n) - 432420386565659656852420866394968145599n, GX: 55066263022277343669578718895168534326250603453777594175500187360389116729240n, GY: 32670510020758816978083085130507043184471273380659243275938904335757337482424n }, BN256: { P: 115792089237314936872688561244471742058375878355761205198700409522629664518163n, n: 115792089237314936872688561244471742058035595988840268584488757999429535617037n, magicExp: 115792089237314936872688561244471742058375878355761205198700409522629664518164n >> 2n, A: 0n, B: 3n, h: 1n } }, T = { P: 21888242871839275222246405745257275088696311157297823662689037894645226208583n, n: 21888242871839275222246405745257275088548364400416034343698204186575808495617n, A: 0n, B: 3n, h: 1n };
    var k = (function () {
        function k(e, t, r) {
            if (r === void 0) { r = E.secp256r1; }
            this.x = e, this.y = t, this.useCurve = r;
        }
        k.prototype.double = function () { var e = this.x, t = this.y, r = a(3n * Math.pow(e, 2n) * s(2n * t, this.useCurve.P), this.useCurve.P), n = a(r * r - 2n * e, this.useCurve.P), i = a(r * (e - n) - t, this.useCurve.P); return new k(n, i, this.useCurve); };
        k.prototype.newZero = function () { return new k(0n, 0n, this.useCurve); };
        k.prototype.add = function (e) { var _a = [this, e], t = _a[0], r = _a[1], _b = [t.x, t.y, r.x, r.y], n = _b[0], i = _b[1], o = _b[2], c = _b[3]; if (0n === n || 0n === i)
            return r; if (0n === o || 0n === c)
            return t; if (n === o && i === c)
            return this.double(); if (n === o && i === -c)
            return this.newZero(); var l = a((c - i) * s(o - n, this.useCurve.P), this.useCurve.P), u = a(l * l - n - o, this.useCurve.P), f = a(l * (n - u) - i, this.useCurve.P); return new k(u, f, this.useCurve); };
        k.prototype.multiplyDA = function (e) { var t = this.newZero(), r = this; for (; e > 0n;)
            1n & e && (t = t.add(r)), r = r.double(), e >>= 1n; return t; };
        k.prototype.isInfinity = function () { return null == this.x || null == this.y; };
        k.prototype.getEncoded = function (e) {
            if (e === void 0) { e = !1; }
            if (this.isInfinity())
                return new Uint8Array(0);
            var t = u(this.x, 32);
            return f(e ? [Uint8Array.from([2]), t] : [Uint8Array.from([4]), t, u(this.y, 32)]);
        };
        k.prototype.equals = function (e) { if (null == e)
            return !1; var t = this.isInfinity(), r = e.isInfinity(); if (t || r)
            return t && r; var n = e; return this.x === n.x && this.y === n.y; };
        k.decodeFromHex = function (e, t) {
            if (t === void 0) { t = w; }
            if (130 != e.length)
                throw new Error("only decompressed points allowed. 65 bytes.");
            return k.decodeFromUint8(i(e), t);
        };
        k.decodeFromUint8 = function (e, t) {
            if (t === void 0) { t = w; }
            if (65 != e.length)
                throw new Error("only decompressed points allowed. 65 bytes.");
            var r;
            switch (e[0]) {
                case 4:
                    var n_60 = c(e.slice(1, 33)), i_35 = c(e.slice(33));
                    r = new k(n_60, i_35, t);
                    break;
                default: throw new Error("only decompressed points allowed");
            }
            if (!r.validate()) {
                var e_133 = "Point is not valid (" + r.x.toString(16) + "," + r.y.toString(16) + ")";
                throw console.log(e_133), new Error(e_133);
            }
            return r;
        };
        k.prototype.validate = function () { return 0n == a(a(this.y * this.y, this.useCurve.P) - a(m(this.x, 3n, this.useCurve.P) + a(this.x * this.useCurve.A, this.useCurve.P) + this.useCurve.B, this.useCurve.P), this.useCurve.P); };
        k.prototype.negate = function () { return new k(this.x, this.useCurve.P - this.y, this.useCurve); };
        k.prototype.subtract = function (e) { return this.add(e.negate()); };
        return k;
    }());
    var B, M, C, L, P = r(4085);
    (L = B || (B = {}))[L.Sequence = 0] = "Sequence", L[L.Set = 1] = "Set", L[L.Choice = 2] = "Choice", (C = M || (M = {}))[C.Any = 1] = "Any", C[C.Boolean = 2] = "Boolean", C[C.OctetString = 3] = "OctetString", C[C.BitString = 4] = "BitString", C[C.Integer = 5] = "Integer", C[C.Enumerated = 6] = "Enumerated", C[C.ObjectIdentifier = 7] = "ObjectIdentifier", C[C.Utf8String = 8] = "Utf8String", C[C.BmpString = 9] = "BmpString", C[C.UniversalString = 10] = "UniversalString", C[C.NumericString = 11] = "NumericString", C[C.PrintableString = 12] = "PrintableString", C[C.TeletexString = 13] = "TeletexString", C[C.VideotexString = 14] = "VideotexString", C[C.IA5String = 15] = "IA5String", C[C.GraphicString = 16] = "GraphicString", C[C.VisibleString = 17] = "VisibleString", C[C.GeneralString = 18] = "GeneralString", C[C.CharacterString = 19] = "CharacterString", C[C.UTCTime = 20] = "UTCTime", C[C.GeneralizedTime = 21] = "GeneralizedTime", C[C.DATE = 22] = "DATE", C[C.TimeOfDay = 23] = "TimeOfDay", C[C.DateTime = 24] = "DateTime", C[C.Duration = 25] = "Duration", C[C.TIME = 26] = "TIME", C[C.Null = 27] = "Null";
    var F = { fromASN: function (e) { return e instanceof P.Null ? null : e.valueBeforeDecode; }, toASN: function (e) { if (null === e)
            return new P.Null; var t = P.fromBER(e); if (t.result.error)
            throw new Error(t.result.error); return t.result; } }, N = { fromASN: function (e) { return e.valueBlock.valueHex.byteLength > 4 ? e.valueBlock.toString() : e.valueBlock.valueDec; }, toASN: function (e) { return new P.Integer({ value: e }); } }, x = { fromASN: function (e) { return e.valueBlock.valueDec; }, toASN: function (e) { return new P.Enumerated({ value: e }); } }, R = { fromASN: function (e) { return e.valueBlock.valueHex; }, toASN: function (e) { return new P.BitString({ valueHex: e }); } }, O = { fromASN: function (e) { return e.valueBlock.toString(); }, toASN: function (e) { return new P.ObjectIdentifier({ value: e }); } }, I = { fromASN: function (e) { return e.valueBlock.value; }, toASN: function (e) { return new P.Boolean({ value: e }); } }, D = { fromASN: function (e) { return e.valueBlock.valueHex; }, toASN: function (e) { return new P.OctetString({ valueHex: e }); } };
    function J(e) { return { fromASN: function (e) { return e.valueBlock.value; }, toASN: function (t) { return new e({ value: t }); } }; }
    var _ = J(P.Utf8String), U = J(P.BmpString), H = J(P.UniversalString), X = J(P.NumericString), V = J(P.PrintableString), G = J(P.TeletexString), z = J(P.VideotexString), j = J(P.IA5String), K = J(P.GraphicString), Z = J(P.VisibleString), q = J(P.GeneralString), Q = J(P.CharacterString), W = { fromASN: function (e) { return e.toDate(); }, toASN: function (e) { return new P.UTCTime({ valueDate: e }); } }, Y = { fromASN: function (e) { return e.toDate(); }, toASN: function (e) { return new P.GeneralizedTime({ valueDate: e }); } }, $ = { fromASN: function (e) { return null; }, toASN: function (e) { return new P.Null; } };
    function ee(e) { switch (e) {
        case M.Any: return F;
        case M.BitString: return R;
        case M.BmpString: return U;
        case M.Boolean: return I;
        case M.CharacterString: return Q;
        case M.Enumerated: return x;
        case M.GeneralString: return q;
        case M.GeneralizedTime: return Y;
        case M.GraphicString: return K;
        case M.IA5String: return j;
        case M.Integer: return N;
        case M.Null: return $;
        case M.NumericString: return X;
        case M.ObjectIdentifier: return O;
        case M.OctetString: return D;
        case M.PrintableString: return V;
        case M.TeletexString: return G;
        case M.UTCTime: return W;
        case M.UniversalString: return H;
        case M.Utf8String: return _;
        case M.VideotexString: return z;
        case M.VisibleString: return Z;
        default: return null;
    } }
    function te(e) { return e && e.prototype ? !(!e.prototype.toASN || !e.prototype.fromASN) || te(e.prototype) : !!(e && e.toASN && e.fromASN); }
    function re(e) { var t; if (e) {
        var r_80 = Object.getPrototypeOf(e);
        return (null === (t = null == r_80 ? void 0 : r_80.prototype) || void 0 === t ? void 0 : t.constructor) === Array || re(r_80);
    } return !1; }
    r(2043);
    var ne = new (function () {
        function class_9() {
            this.items = new WeakMap;
        }
        class_9.prototype.has = function (e) { return this.items.has(e); };
        class_9.prototype.get = function (e) { var t, r, n, i; var o = this.items.get(e); if (!o)
            throw new Error("Cannot get schema for '" + (null !== (i = null === (n = null === (r = null === (t = e) || void 0 === t ? void 0 : t.prototype) || void 0 === r ? void 0 : r.constructor) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : e) + "' target"); return o; };
        class_9.prototype.cache = function (e) { var t = this.get(e); t.schema || (t.schema = this.create(e, !0)); };
        class_9.prototype.createDefault = function (e) { var t = { type: B.Sequence, items: {} }, r = this.findParentSchema(e); return r && (Object.assign(t, r), t.items = Object.assign({}, t.items, r.items)), t; };
        class_9.prototype.create = function (e, t) { var r = this.items.get(e) || this.createDefault(e), n = []; for (var e_134 in r.items) {
            var i_36 = r.items[e_134], o_19 = t ? e_134 : "";
            var a_16 = void 0;
            if ("number" == typeof i_36.type) {
                var e_135 = M[i_36.type], t_97 = P[e_135];
                if (!t_97)
                    throw new Error("Cannot get ASN1 class by name '" + e_135 + "'");
                a_16 = new t_97({ name: o_19 });
            }
            else
                te(i_36.type) ? a_16 = (new i_36.type).toSchema(o_19) : i_36.optional ? this.get(i_36.type).type === B.Choice ? a_16 = new P.Any({ name: o_19 }) : (a_16 = this.create(i_36.type, !1), a_16.name = o_19) : a_16 = new P.Any({ name: o_19 });
            var s_12 = !!i_36.optional || void 0 !== i_36.defaultValue;
            if (i_36.repeated && (a_16.name = "", a_16 = new ("set" === i_36.repeated ? P.Set : P.Sequence)({ name: "", value: [new P.Repeated({ name: o_19, value: a_16 })] })), null !== i_36.context && void 0 !== i_36.context)
                if (i_36.implicit)
                    if ("number" == typeof i_36.type || te(i_36.type)) {
                        var e_136 = i_36.repeated ? P.Constructed : P.Primitive;
                        n.push(new e_136({ name: o_19, optional: s_12, idBlock: { tagClass: 3, tagNumber: i_36.context } }));
                    }
                    else {
                        this.cache(i_36.type);
                        var e_137 = !!i_36.repeated;
                        var t_98 = e_137 ? a_16 : this.get(i_36.type).schema;
                        t_98 = t_98.valueBlock ? t_98.valueBlock.value : t_98.value, n.push(new P.Constructed({ name: e_137 ? "" : o_19, optional: s_12, idBlock: { tagClass: 3, tagNumber: i_36.context }, value: t_98 }));
                    }
                else
                    n.push(new P.Constructed({ optional: s_12, idBlock: { tagClass: 3, tagNumber: i_36.context }, value: [a_16] }));
            else
                a_16.optional = s_12, n.push(a_16);
        } switch (r.type) {
            case B.Sequence: return new P.Sequence({ value: n, name: "" });
            case B.Set: return new P.Set({ value: n, name: "" });
            case B.Choice: return new P.Choice({ value: n, name: "" });
            default: throw new Error("Unsupported ASN1 type in use");
        } };
        class_9.prototype.set = function (e, t) { return this.items.set(e, t), this; };
        class_9.prototype.findParentSchema = function (e) { var t = e.__proto__; return t ? this.items.get(t) || this.findParentSchema(t) : null; };
        return class_9;
    }()), ie = function (e) { return function (t) { var r; ne.has(t) ? r = ne.get(t) : (r = ne.createDefault(t), ne.set(t, r)), Object.assign(r, e); }; }, oe = function (e) { return function (t, r) { var n; ne.has(t.constructor) ? n = ne.get(t.constructor) : (n = ne.createDefault(t.constructor), ne.set(t.constructor, n)); var i = Object.assign({}, e); if ("number" == typeof i.type && !i.converter) {
        var n_61 = ee(e.type);
        if (!n_61)
            throw new Error("Cannot get default converter for property '" + r + "' of " + t.constructor.name);
        i.converter = n_61;
    } n.items[r] = i; }; };
    var ae = (function (_super) {
        __extends(ae, _super);
        function ae() {
            var _this = this;
            _this = _super.apply(this, arguments) || this, _this.schemas = [];
            return _this;
        }
        return ae;
    }(Error));
    var se = (function () {
        function se() {
        }
        se.parse = function (e, t) { var r; if (e instanceof ArrayBuffer)
            r = e;
        else if ("undefined" != typeof Buffer && Buffer.isBuffer(e))
            r = new Uint8Array(e).buffer;
        else {
            if (!(ArrayBuffer.isView(e) || e.buffer instanceof ArrayBuffer))
                throw new TypeError("Wrong type of 'data' argument");
            r = e.buffer;
        } var n = P.fromBER(r); if (n.result.error)
            throw new Error(n.result.error); return this.fromASN(n.result, t); };
        se.fromASN = function (e, t) {
            var _this = this;
            var r;
            try {
                if (te(t))
                    return (new t).fromASN(e);
                var n_62 = ne.get(t);
                ne.cache(t);
                var i_37 = n_62.schema;
                if (e.constructor === P.Constructed && n_62.type !== B.Choice) {
                    i_37 = new P.Constructed({ idBlock: { tagClass: 3, tagNumber: e.idBlock.tagNumber }, value: n_62.schema.valueBlock.value });
                    for (var t_99 in n_62.items)
                        delete e[t_99];
                }
                var o_20 = P.compareSchema(e, e, i_37);
                if (!o_20.verified)
                    throw new ae("Data does not match to " + t.name + " ASN1 schema. " + o_20.result.error);
                var a_17 = new t;
                if (re(t)) {
                    if ("number" == typeof n_62.itemType) {
                        var r_81 = ee(n_62.itemType);
                        if (!r_81)
                            throw new Error("Cannot get default converter for array item of " + t.name + " ASN1 schema");
                        return t.from(e.valueBlock.value, (function (e) { return r_81.fromASN(e); }));
                    }
                    return t.from(e.valueBlock.value, (function (e) { return _this.fromASN(e, n_62.itemType); }));
                }
                var _loop_4 = function (t_100) {
                    if (!e[t_100])
                        return "continue";
                    var i_38 = n_62.items[t_100];
                    if ("number" == typeof i_38.type || te(i_38.type)) {
                        var n_63 = null !== (r = i_38.converter) && void 0 !== r ? r : te(i_38.type) ? new i_38.type : null;
                        if (!n_63)
                            throw new Error("Converter is empty");
                        if (i_38.repeated)
                            if (i_38.implicit) {
                                var r_82 = new ("sequence" === i_38.repeated ? P.Sequence : P.Set);
                                r_82.valueBlock = e[t_100].valueBlock;
                                var o_21 = P.fromBER(r_82.toBER(!1)).result.valueBlock.value;
                                a_17[t_100] = Array.from(o_21, (function (e) { return n_63.fromASN(e); }));
                            }
                            else
                                a_17[t_100] = Array.from(e[t_100], (function (e) { return n_63.fromASN(e); }));
                        else {
                            var r_83 = e[t_100];
                            if (i_38.implicit) {
                                var e_138 = void 0;
                                if (te(i_38.type))
                                    e_138 = (new i_38.type).toSchema("");
                                else {
                                    var t_101 = M[i_38.type], r_84 = P[t_101];
                                    if (!r_84)
                                        throw new Error("Cannot get '" + t_101 + "' class from asn1js module");
                                    e_138 = new r_84;
                                }
                                e_138.valueBlock = r_83.valueBlock, r_83 = P.fromBER(e_138.toBER(!1)).result;
                            }
                            a_17[t_100] = n_63.fromASN(r_83);
                        }
                    }
                    else
                        i_38.repeated ? a_17[t_100] = Array.from(e[t_100], (function (e) { return _this.fromASN(e, i_38.type); })) : a_17[t_100] = this_1.fromASN(e[t_100], i_38.type);
                };
                var this_1 = this;
                for (var t_100 in n_62.items) {
                    _loop_4(t_100);
                }
                return a_17;
            }
            catch (e) {
                throw e instanceof ae && e.schemas.push(t.name), e;
            }
        };
        return se;
    }());
    var ce = (function (_super) {
        __extends(ce, _super);
        function ce(e) {
            if (e === void 0) { e = []; }
            var _this = this;
            if ("number" == typeof e)
                _this = _super.call(this, e) || this;
            else {
                _this = _super.call(this) || this;
                for (var _i = 0, e_139 = e; _i < e_139.length; _i++) {
                    var t_102 = e_139[_i];
                    _this.push(t_102);
                }
            }
            return _this;
        }
        return ce;
    }(Array));
    var le = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var ue = (function () {
        function ue() {
        }
        return ue;
    }());
    le([oe({ type: M.OctetString })], ue.prototype, "riddle", void 0), le([oe({ type: M.OctetString })], ue.prototype, "challengePoint", void 0), le([oe({ type: M.OctetString })], ue.prototype, "responseValue", void 0), le([oe({ type: M.OctetString })], ue.prototype, "nonce", void 0);
    var fe = (function () {
        function fe() {
        }
        return fe;
    }());
    le([oe({ type: M.OctetString })], fe.prototype, "challengePoint", void 0), le([oe({ type: M.OctetString })], fe.prototype, "responseValue", void 0), le([oe({ type: M.OctetString })], fe.prototype, "nonce", void 0), r(4956);
    var he = { END_OF_CONTENT: 0, BOOLEAN: 1, INTEGER: 2, BIT_STRING: 3, OCTET_STRING: 4, NULL_VALUE: 5, OBJECT_ID: 6, OBJECT_DESCRIPTOR: 7, EXTERNAL: 8, REAL: 9, ENUMERATED: 10, EMBEDDED_PDV: 11, UTF8STRING: 12, RELATIVE_OID: 13, SEQUENCE_10: 16, SET_OF: 17, NUMERABLE_STRING: 18, PRINTABLE_STRING: 19, T61STRING: 20, VIDEO_TEX_STRING: 21, IA5STRING: 22, UTC_TIME: 23, GENERALIZED_TIME: 24, GRAPHIC_STRING: 25, VISIBLE_STRING: 26, GENERAL_STRING: 27, UNIVERSAL_STRING: 28, CHARACTER_STRING: 29, BMP_STRING: 30, SEQUENCE_30: 48, SET: 49 }, de = { 0: "END_OF_CONTENT", 1: "BOOLEAN", 2: "INTEGER", 3: "BIT_STRING", 4: "OCTET_STRING", 5: "NULL_VALUE", 6: "OBJECT_ID", 7: "OBJECT_DESCRIPTOR", 8: "EXTERNAL", 9: "REAL", 10: "ENUMERATED", 11: "EMBEDDED_PDV", 12: "UTF8STRING", 13: "RELATIVE_OID", 16: "SEQUENCE_10", 19: "PRINTABLE_STRING", 22: "IA5STRING", 24: "GENERALIZED_TIME", 26: "VISIBLE_STRING", 48: "SEQUENCE_30", 49: "SET" };
    var pe = (function () {
        function pe() {
        }
        pe.encodeAsInteger = function (e) { return this.encode("INTEGER", e); };
        pe.encodeObjectId = function (e) { return pe.encode("SEQUENCE_30", pe.encode("OBJECT_ID", e)); };
        pe.encodeName = function (e) { var t = e.matchAll(/(\w+)=("[\w\s]+"|\w+)/g), r = "", n = "", i = ""; if (!t)
            throw new Error("wrong Name format"); for (var _i = 0, t_103 = t; _i < t_103.length; _i++) {
            var e_140 = t_103[_i];
            var t_104 = e_140[1], o_22 = e_140[2];
            switch ('"' == o_22.substr(0, 1) && '"' == o_22.substr(-1) && (o_22 = o_22.slice(1, o_22.length - 1)), t_104.toUpperCase()) {
                case "CN":
                    n = "2.5.4.3";
                    break;
                case "C":
                    n = "2.5.4.6";
                    break;
                case "O":
                    n = "2.5.4.10";
                    break;
                case "OU":
                    n = "2.5.4.11";
                    break;
                case "L":
                    n = "2.5.4.7";
                    break;
                default: throw new Error('Type "' + t_104 + '" not implemented yet');
            }
            i = pe.encode("OBJECT_ID", n) + pe.encode("UTF8STRING", o_22), r += pe.encode("SEQUENCE_30", i);
        } return pe.encode("SEQUENCE_30", pe.encode("SET", r)); };
        pe.encode = function (e, r, n) {
            if (n === void 0) { n = 0; }
            if (void 0 === r)
                throw new Error("Missing value for Der encoding");
            var i = he[e], o = "";
            switch (e) {
                case "OBJECT_ID":
                    if ("string" != typeof r)
                        throw new Error("OBJECT_ID value must be a string");
                    var a_18 = r.split("."), s_13 = a_18.shift(), c_6 = a_18.shift();
                    a_18.unshift((40 * parseInt(s_13) + parseInt(c_6)).toString()), a_18.forEach((function (e) { var t = parseInt(e), r = "", n = !0; do {
                        var e_141 = 127 & t;
                        t >>= 7, e_141 += n ? 0 : 128, r = e_141.toString(16).padStart(2, "0") + r, n = !1;
                    } while (t); o += r; }));
                    break;
                case "NULL_VALUE":
                    o = "";
                    break;
                case "GENERALIZED_TIME":
                    o = t(function (e) { var t = new Date(e), r = "" + (t.getUTCMonth() + 1), n = "" + t.getUTCDate(), i = t.getUTCFullYear(); var o = "" + t.getUTCHours(), a = "" + t.getUTCMinutes(), s = "" + t.getUTCSeconds(); return r.length < 2 && (r = "0" + r), n.length < 2 && (n = "0" + n), o.length < 2 && (o = "0" + o), a.length < 2 && (a = "0" + a), s.length < 2 && (s = "0" + s), [i, r, n, o, a, s].join("") + "Z"; }(r));
                    break;
                case "VISIBLE_STRING":
                case "UTF8STRING":
                    o = t(r);
                    break;
                case "INTEGER":
                    o = BigInt(r).toString(16), o = (o.length % 2 ? "0" : "") + o, parseInt("0x" + o.slice(0, 1), 16) > 7 && (o = "00" + o);
                    break;
                case "TAG":
                    if (n > 15)
                        throw new Error("DER TAG more than 15 is not implemented");
                    i = parseInt("0xA" + n);
                case "SEQUENCE_30":
                case "SET":
                case "OCTET_STRING":
                    if ("string" == typeof r)
                        o = r;
                    else {
                        if (r.constructor !== Uint8Array)
                            throw new Error("Wrong data type for OCTET_STRING");
                        o = b(r);
                    }
                    break;
                case "BIT_STRING":
                    o = "00" + r;
                    break;
                case "BOOLEAN":
                    o = parseInt(r).toString().padStart(2, "0");
                    break;
                default: throw new Error("Sorry, " + e + " not implemented.");
            }
            var a = "", s = Math.ceil(o.length / 2), c = s.toString(16);
            return s || (c = "00"), c = (c.length % 2 ? "0" : "") + c, a = s < 128 ? c : (128 + Math.round(c.length / 2)).toString(16) + c, o = (o.length % 2 ? "0" : "") + o, i.toString(16).padStart(2, "0") + a + o;
        };
        pe.prototype.decode = function (e) { var t = Array.from(e); return this.read(t); };
        pe.prototype.lenEncoded = function (e) { var t = e.shift(); if (t < 128)
            return t; if (t > 128) {
            var r_85 = 0;
            for (var n_64 = 0; n_64 < t - 128; n_64++)
                r_85 = (r_85 << 8) + e.shift();
            return r_85;
        } if (128 == t)
            throw new Error("have to code variable length"); };
        pe.prototype.readFromHexString = function (e) { return this.read(n(e)); };
        pe.prototype.readFromUint8Array = function (e) { return this.read(Array.from(e)); };
        pe.prototype.readFromBase64String = function (e) { return this.readFromUint8Array(p(e)); };
        pe.prototype.readFromUrlBase64String = function (e) { var t = e.split("_").join("/").split("-").join("+").split(".").join("="); return this.readFromBase64String(t); };
        pe.prototype.read = function (e) { var t = e.shift(), r = this.lenEncoded(e), n = de[t], i = []; for (var t_105 = 0; t_105 < r; t_105++)
            i.push(e.shift()); var o = ""; switch (n) {
            case "SEQUENCE_30": return this.BodySequence(i);
            case "INTEGER":
            case "BIT_STRING":
                var e_142 = 0n;
                for (; i.length;)
                    e_142 <<= 8n, e_142 += BigInt(i.shift());
                return e_142;
            case "OCTET_STRING":
                for (; i.length;)
                    o += i.shift().toString(16).padStart(2, "0");
                return o;
            case "GENERALIZED_TIME":
            case "VISIBLE_STRING":
                for (; i.length;)
                    o += String.fromCharCode(i.shift());
                return o;
        } };
        pe.prototype.BodySequence = function (e) { var t = []; for (; e.length;)
            t.push(this.read(e)); return t; };
        return pe;
    }());
    var ge = (function () {
        function ge() {
        }
        ge.fromData = function (e, t, r) {
            if (r === void 0) { r = new Uint8Array([]); }
            var n = new this;
            return n.tPoint = e, n.challenge = t, n.nonce = r, n.encoding = n.makeEncoding(e, t), n;
        };
        ge.prototype.fromBase64 = function (e) { this.encoding = e, this.fromBytes(p(e)); };
        ge.prototype.fromBytes = function (e) { this.encodingBytes = e; var t = se.parse(y(e), fe); this.challenge = c(new Uint8Array(t.challengePoint)); var r = new Uint8Array(t.responseValue); this.nonce = new Uint8Array(t.nonce), this.tPoint = k.decodeFromHex(b(r), T); };
        ge.prototype.makeEncoding = function (e, t) { var r = pe.encode("OCTET_STRING", b(l(this.challenge))) + pe.encode("OCTET_STRING", b(this.tPoint.getEncoded(!1))) + pe.encode("OCTET_STRING", b(this.nonce)); return pe.encode("SEQUENCE_30", r); };
        ge.prototype.getPoint = function () { return this.tPoint; };
        ge.prototype.getChallenge = function () { return this.challenge; };
        ge.prototype.getDerEncoding = function () { return this.encoding; };
        ge.prototype.getNonce = function () { return this.nonce; };
        return ge;
    }());
    var me = (function () {
        function me() {
        }
        me.fromData = function (e, t, r, n) {
            if (n === void 0) { n = new Uint8Array([]); }
            var i = new this;
            return i.riddle = e, i.tPoint = t, i.challenge = r, i.nonce = n, i.encoding = i.makeEncoding(e, t, r, n), i;
        };
        me.fromBytes = function (e) { var t = se.parse(e, ue); return this.fromASNType(t); };
        me.fromASNType = function (e) { var t = new Uint8Array(e.riddle), r = k.decodeFromUint8(t, T), n = c(new Uint8Array(e.challengePoint)), i = new Uint8Array(e.responseValue), o = k.decodeFromUint8(i, T), a = new Uint8Array(e.nonce); return this.fromData(r, o, n, a); };
        me.fromBase64 = function (e) { return me.fromBytes(p(e)); };
        me.prototype.makeEncoding = function (e, t, r, n) {
            if (n === void 0) { n = new Uint8Array([]); }
            var i = pe.encode("OCTET_STRING", b(e.getEncoded())) + pe.encode("OCTET_STRING", r.toString(16)) + pe.encode("OCTET_STRING", b(t.getEncoded())) + pe.encode("OCTET_STRING", b(n));
            return pe.encode("SEQUENCE_30", i);
        };
        me.prototype.getRiddle = function () { return this.riddle; };
        me.prototype.getPoint = function () { return this.tPoint; };
        me.prototype.getChallenge = function () { return this.challenge; };
        me.prototype.getNonce = function () { return this.nonce; };
        me.prototype.getUsageProofOfExponent = function () { return ge.fromData(this.tPoint, this.challenge, this.nonce); };
        me.prototype.getDerEncoding = function () { return this.encoding; };
        return me;
    }());
    var be = r(3906);
    var ye = r(1094);
    var ve = new k(21282764439311451829394129092047993080259557426320933158672611067687630484067n, 3813889942691430704369624600187664845713336792511424430006907067499686345744n, T), Ae = new k(10844896013696871595893151490650636250667003995871483372134187278207473369077n, 9393217696329481319187854592386054938412168121447413803797200472841959383227n, T);
    var Se = (function () {
        function Se() {
            if (this.curveOrderBitLength = 254n, this.rand = this.makeSecret(), !this.verifyCurveOrder(T.n))
                throw new Error("Static values do not work with current implementation");
        }
        Se.prototype.verifyCurveOrder = function (e) { var t = BigInt(e.toString(2).length); return !(e < 1n << t - 1n || e >> t > 0n) || (console.log("Curve order is not 253 bits which is required by the current implementation"), !1); };
        Se.prototype.getType = function (e) { switch (e.toLowerCase()) {
            case "mail": return 1;
            case "phone": return 0;
            default: throw new Error("Wrong type of identifier");
        } };
        Se.prototype.makeCommitment = function (e, t, r) { var n = this.mapToCurveMultiplier(t, e); return ve.multiplyDA(n).add(Ae.multiplyDA(r)).getEncoded(!1); };
        Se.prototype.makeCommitmentFromHiding = function (e, t, r) { var n = this.mapToCurveMultiplier(t, e); return ve.multiplyDA(n).add(r).getEncoded(!1); };
        Se.prototype.injectIdentifierType = function (e, t) { return f([Uint8Array.from([0, 0, 0, e]), t]); };
        Se.prototype.mapToInteger = function (e) { return BigInt("0x" + ye.keccak256(e)) >> 256n - this.curveOrderBitLength; };
        Se.prototype.mapToCurveMultiplier = function (e, t) { var r = Uint8Array.from(g(t.trim().toLowerCase())), n = c(this.injectIdentifierType(e, r)); do {
            n = this.mapToInteger(l(n));
        } while (n >= T.n); return n; };
        Se.prototype.computePoint_bn256 = function (e) { var t = T.P; e = a(e, t); var r, n, i, o = 0n, s = 0n, c = t + 1n >> 2n, l = t - 1n >> 1n; do {
            do {
                e = a(e + 1n), s = a(m(e, 3n, t) + T.A * e + T.B), i = m(s, l, t);
            } while (1n !== i);
            o = m(s, c, t), r = new k(e, o, T), r.x > t >> 1n && (r = new k(e, t - o, T)), n = r.multiplyDA(T.n - 1n), n.y > t >> 1n && (n = new k(n.x, t - n.y, T));
        } while (!r.equals(n) || r.isInfinity()); return r; };
        Se.prototype.makeSecret = function (e) {
            if (e === void 0) { e = 48; }
            return a(BigInt(Se.generateRandomHexString(e)), T.n);
        };
        Se.generateRandomHexString = function (e) { var t = new Uint8Array(e); window && window.crypto ? window.crypto.getRandomValues(t) : t = new Uint8Array(be.randomBytes(e)); var r = "0x"; for (var n = 0; n < t.length; n++)
            r += t[n].toString(16).padStart(2, "0"); return r; };
        Se.prototype.computeAttestationProof = function (e, t) {
            if (t === void 0) { t = new Uint8Array([]); }
            var r = Ae.multiplyDA(e), n = [Ae, r];
            return this.constructSchnorrPOK(r, e, n, t);
        };
        Se.prototype.computeEqualityProof = function (e, t, r, n, i) {
            if (i === void 0) { i = new Uint8Array([]); }
            var o = k.decodeFromHex(e, T), s = k.decodeFromHex(t, T), c = o.subtract(s), l = a(r - n, T.n), u = [Ae, o, s];
            return this.constructSchnorrPOK(c, l, u, i).getUsageProofOfExponent();
        };
        Se.prototype.constructSchnorrPOK = function (e, t, r, n) { var i, o, s, c; do {
            o = this.makeSecret(), i = Ae.multiplyDA(o), s = this.computeChallenge(i, r, n);
        } while (s >= T.n); return c = a(o + s * t, T.n), me.fromData(e, i, c, n); };
        Se.prototype.computeChallenge = function (e, t, r) { var n = t.concat(e), i = f([this.makeArray(n), r]); return this.mapToInteger(i); };
        Se.prototype.verifyFullProof = function (e) { var t = this.computeChallenge(e.getPoint(), [Ae, e.getRiddle()], e.getNonce()); return this.verifyPok(e, t); };
        Se.prototype.verifyEqualityProof = function (e, t, r) { var n = k.decodeFromUint8(e, T), i = k.decodeFromUint8(t, T), o = n.subtract(i), a = this.computeChallenge(r.getPoint(), [Ae, n, i], r.getNonce()); return this.verifyPok(me.fromData(o, r.getPoint(), r.getChallenge(), r.getNonce()), a); };
        Se.prototype.verifyPok = function (e, t) { if (t >= T.n)
            return !1; var r = Ae.multiplyDA(e.getChallenge()), n = e.getRiddle().multiplyDA(t).add(e.getPoint()); return r.equals(n); };
        Se.prototype.makeArray = function (e) { var t = new Uint8Array(0); return e.forEach((function (e) { t = new Uint8Array(__spreadArray(__spreadArray([], t, true), e.getEncoded(!1), true)); })), t; };
        Se.hashWithKeccak = function (e) { return ye.keccak256(e); };
        return Se;
    }());
    Se.OID_SIGNATURE_ALG = "1.2.840.10045.2.1", Se.BYTES_IN_DIGEST = 32;
    var we = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var Ee = (function () {
        function Ee() {
        }
        return Ee;
    }());
    we([oe({ type: M.ObjectIdentifier })], Ee.prototype, "algorithm", void 0), we([oe({ type: M.Any, optional: !0 })], Ee.prototype, "parameters", void 0);
    var Te = (function () {
        function Te() {
            this.version = 0;
        }
        return Te;
    }());
    we([oe({ type: M.Integer })], Te.prototype, "version", void 0);
    var ke = (function () {
        function ke() {
        }
        return ke;
    }());
    we([oe({ type: M.UTCTime })], ke.prototype, "utcTime", void 0), we([oe({ type: M.GeneralizedTime })], ke.prototype, "generalizedTime", void 0), ke = we([ie({ type: B.Choice })], ke);
    var Be = (function () {
        function Be() {
        }
        return Be;
    }());
    we([oe({ type: ke })], Be.prototype, "notBefore", void 0), we([oe({ type: ke })], Be.prototype, "notAfter", void 0);
    var Me = (function () {
        function Me() {
        }
        return Me;
    }());
    we([oe({ type: Be, context: 0 })], Me.prototype, "value", void 0), we([oe({ type: M.Integer, context: 1 })], Me.prototype, "null", void 0), Me = we([ie({ type: B.Choice })], Me);
    var Ce = (function () {
        function Ce() {
        }
        return Ce;
    }());
    we([oe({ type: M.ObjectIdentifier })], Ce.prototype, "extnId", void 0), we([oe({ type: M.Boolean })], Ce.prototype, "critical", void 0), we([oe({ type: M.OctetString })], Ce.prototype, "extnValue", void 0);
    var Le = (function () {
        function Le() {
        }
        return Le;
    }());
    we([oe({ type: Ce })], Le.prototype, "extension", void 0);
    var Pe = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var Fe = (function () {
        function Fe() {
        }
        return Fe;
    }());
    Pe([oe({ type: M.Utf8String })], Fe.prototype, "devconId", void 0), Pe([oe({ type: M.Integer })], Fe.prototype, "ticketId", void 0), Pe([oe({ type: M.Integer })], Fe.prototype, "ticketClass", void 0);
    var Ne = (function () {
        function Ne() {
        }
        return Ne;
    }());
    Pe([oe({ type: Ee })], Ne.prototype, "algorithm", void 0), Pe([oe({ type: M.BitString })], Ne.prototype, "publicKey", void 0);
    var xe = (function () {
        function xe() {
        }
        return xe;
    }());
    Pe([oe({ type: Fe })], xe.prototype, "ticket", void 0), Pe([oe({ type: M.OctetString })], xe.prototype, "commitment", void 0), Pe([oe({ type: Ne, optional: !0 })], xe.prototype, "publicKeyInfo", void 0), Pe([oe({ type: M.BitString })], xe.prototype, "signatureValue", void 0);
    var Re = (function (_super) {
        __extends(Re, _super);
        function Re() {
            var _this = this;
            _this = _super.call(this) || this, _this.magicLinkURLPrefix = "https://ticket.devcon.org/";
            return _this;
        }
        Re.prototype.fromData = function (e, t, r, n) { this.ticketId = t, this.ticketClass = r, this.devconId = e, this.keys = n; };
        Re.prototype.createWithCommitment = function (e, t, r, n, i, o) { if (this.fromData(e, t, r, o), this.commitment = n, this.signature = i, this.encoded = this.encodeSignedTicket(this.makeTicket()), !this.verify())
            throw new Error("Signature is invalid"); };
        Re.createWithMail = function (e, t, r, i, o, a) { var s = new this; s.fromData(t, r, i, o); var c, l, u = new Se, f = s.makeTicket(); try {
            c = u.makeCommitment(e, u.getType("mail"), a), l = o.signBytesWithEthereum(n(f));
        }
        catch (e) {
            throw new Error(e);
        } return s.createWithCommitment(t, r, i, c, l, o), s; };
        Re.prototype.makeTicket = function () { var e = pe.encode("UTF8STRING", this.devconId) + pe.encode("INTEGER", this.ticketId) + pe.encode("INTEGER", this.ticketClass); return pe.encode("SEQUENCE_30", e); };
        Re.prototype.encodeSignedTicket = function (e) { var t = e + pe.encode("OCTET_STRING", b(this.commitment)) + pe.encode("BIT_STRING", this.signature); return pe.encode("SEQUENCE_30", t); };
        Re.prototype.getDerEncodingWithPK = function () { var e = this.makeTicket() + pe.encode("OCTET_STRING", b(this.commitment)) + this.keys.getAsnDerPublic() + pe.encode("BIT_STRING", this.signature); return pe.encode("SEQUENCE_30", e); };
        Re.prototype.getDerEncoding = function () { return this.encoded; };
        Re.prototype.verify = function () { return this.keys.verifyBytesWithEthereum(n(this.makeTicket()), this.signature); };
        Re.prototype.checkValidity = function () { return !0; };
        Re.prototype.getTicketId = function () { return this.ticketId; };
        Re.prototype.getTicketClass = function () { return this.ticketClass; };
        Re.prototype.getSignature = function () { return this.signature; };
        Re.fromBase64 = function (e, t) { var r = new this; return r.fromBytes(p(e), t), r; };
        Re.prototype.fromBytes = function (e, t) { var r = se.parse(y(e), xe); var n = r.ticket.devconId, i = BigInt(r.ticket.ticketId), o = r.ticket.ticketClass, a = r.commitment, s = r.signatureValue; this.createWithCommitment(n, i, o, new Uint8Array(a), b(new Uint8Array(s)), t); };
        Re.prototype.getCommitment = function () { return this.commitment; };
        Re.prototype.getUrlEncoding = function () { };
        return Re;
    }((function () {
        function class_10() {
        }
        class_10.prototype.getDerEncoding = function () { return this.encoded; };
        class_10.prototype.getCommitment = function () { return this.commitment; };
        return class_10;
    }())));
    var Oe, Ie, De = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var Je = (function () {
        function Je() {
        }
        return Je;
    }());
    De([oe({ type: M.ObjectIdentifier })], Je.prototype, "type", void 0), De([oe({ type: M.Utf8String })], Je.prototype, "value", void 0);
    var _e = Oe = (function (_super) {
        __extends(Oe, _super);
        function Oe(e) {
            var _this = this;
            _this = _super.call(this, e) || this, Object.setPrototypeOf(_this, Oe.prototype);
            return _this;
        }
        return Oe;
    }(ce));
    _e = Oe = De([ie({ type: B.Set, itemType: Je })], _e);
    var Ue = Ie = (function (_super) {
        __extends(Ie, _super);
        function Ie(e) {
            var _this = this;
            _this = _super.call(this, e) || this, Object.setPrototypeOf(_this, Ie.prototype);
            return _this;
        }
        return Ie;
    }(ce));
    Ue = Ie = De([ie({ type: B.Sequence, itemType: _e })], Ue);
    var He = (function () {
        function He() {
        }
        return He;
    }());
    De([oe({ type: Ue })], He.prototype, "rdnSequence", void 0), De([oe({ type: M.Null })], He.prototype, "null", void 0), He = De([ie({ type: B.Choice })], He);
    var Xe = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var Ve = (function () {
        function Ve() {
        }
        return Ve;
    }());
    Xe([oe({ type: M.Any })], Ve.prototype, "algorithm", void 0), Xe([oe({ type: M.BitString })], Ve.prototype, "publicKey", void 0);
    var Ge = (function () {
        function Ge() {
            this.null = !1;
        }
        return Ge;
    }());
    Xe([oe({ type: Ve })], Ge.prototype, "value", void 0), Xe([oe({ type: M.Any })], Ge.prototype, "null", void 0), Ge = Xe([ie({ type: B.Choice })], Ge);
    var ze = (function () {
        function ze() {
        }
        return ze;
    }());
    Xe([oe({ type: M.Integer })], ze.prototype, "one", void 0), Xe([oe({ type: M.OctetString })], ze.prototype, "privateKey", void 0), Xe([oe({ type: M.Any, context: 0 })], ze.prototype, "algDescr", void 0), Xe([oe({ type: M.BitString, context: 1 })], ze.prototype, "publicKey", void 0);
    var je = (function () {
        function je() {
        }
        return je;
    }());
    Xe([oe({ type: M.Integer })], je.prototype, "one", void 0), Xe([oe({ type: M.Any })], je.prototype, "algIdent", void 0), Xe([oe({ type: M.OctetString })], je.prototype, "keysData", void 0);
    var Ke = (function () {
        function Ke() {
        }
        return Ke;
    }());
    Xe([oe({ type: Le, context: 3 })], Ke.prototype, "extensions", void 0), Xe([oe({ type: M.Any, context: 4 })], Ke.prototype, "dataObject", void 0), Ke = Xe([ie({ type: B.Choice })], Ke);
    var Ze = (function () {
        function Ze() {
        }
        return Ze;
    }());
    Xe([oe({ type: M.Integer })], Ze.prototype, "value", void 0);
    var qe = (function () {
        function qe() {
        }
        return qe;
    }());
    Xe([oe({ type: Te })], qe.prototype, "version", void 0), Xe([oe({ type: M.Integer })], qe.prototype, "serialNumber", void 0), Xe([oe({ type: Ee })], qe.prototype, "signature", void 0), Xe([oe({ type: He })], qe.prototype, "issuer", void 0), Xe([oe({ type: Be, optional: !0 })], qe.prototype, "validity", void 0), Xe([oe({ type: He })], qe.prototype, "subject", void 0), Xe([oe({ type: Ge })], qe.prototype, "subjectPublicKeyInfo", void 0), Xe([oe({ type: Ze, optional: !0 })], qe.prototype, "contract", void 0), Xe([oe({ type: Ke, optional: !0 })], qe.prototype, "attestsTo", void 0);
    var Qe = (function () {
        function Qe() {
            this.signedInfo = new Uint8Array;
        }
        return Qe;
    }());
    Xe([oe({ type: M.Any })], Qe.prototype, "signedInfo", void 0), Xe([oe({ type: Ee })], Qe.prototype, "signatureAlgorithm", void 0), Xe([oe({ type: M.BitString })], Qe.prototype, "signatureValue", void 0);
    var We = r(3286), Ye = r(3951), $e = r(8197), et = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var tt = (function () {
        function tt() {
        }
        return tt;
    }());
    et([oe({ type: M.Integer })], tt.prototype, "r", void 0), et([oe({ type: M.Integer })], tt.prototype, "s", void 0);
    var rt, nt = r(6266);
    rt = "object" == typeof crypto && crypto.subtle ? crypto.subtle : r(3906).webcrypto.subtle;
    var it = new nt.ec("secp256k1"), ot = r(1094);
    var at = { p192: null, p224: null, p256: "P-256", p384: "P-384", p521: "P-521", curve25519: null, ed25519: null, secp256k1: null };
    new k(55066263022277343669578718895168534326250603453777594175500187360389116729240n, 32670510020758816978083085130507043184471273380659243275938904335757337482424n);
    var st = (function () {
        function st() {
            this.ethereumPrefix = "Ethereum Signed Message:\n", this.algorithmASNList = { secp256k1: "3081ec06072a8648ce3d02013081e0020101302c06072a8648ce3d0101022100fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f3044042000000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000000000704410479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8022100fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141020101", sect283k1: "3081f806072a8648ce3d02013081ec020101302506072a8648ce3d0102301a0202011b06092a8648ce3d01020303300902010502010702010c304c042400000000000000000000000000000000000000000000000000000000000000000000000004240000000000000000000000000000000000000000000000000000000000000000000000010449040503213f78ca44883f1a3b8162f188e553cd265f23c1567a16876913b0c2ac245849283601ccda380f1c9e318d90f95d07e5426fe87e45c0e8184698e45962364e34116177dd2259022401ffffffffffffffffffffffffffffffffffe9ae2ed07577265dff7f94451e061e163c61020104", p256: "3081ec06072a8648ce3d02013081e0020101302c06072a8648ce3d0101022100ffffffff00000001000000000000000000000000ffffffffffffffffffffffff30440420ffffffff00000001000000000000000000000000fffffffffffffffffffffffc04205ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b0441046b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2964fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5022100ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551020101" };
        }
        st.prototype.getPrivateAsUint8 = function () { return this.privKey; };
        st.prototype.getPrivateAsHexString = function () { return b(this.privKey); };
        st.prototype.getPrivateAsBigInt = function () { return c(this.privKey); };
        st.privateFromBigInt = function (e) { var t = new this; return t.privKey = new Uint8Array(n(e.toString(16).padStart(64, "0"))), t; };
        st.fromPublicHex = function (e) { if (null === e.toLowerCase().match(/^[a-f0-9]+$/i))
            throw new Error("Wrong Hex string input"); if (e.length < 129 || e.length > 130)
            throw new Error("Wrong public hex length"); var t = new this; return t.pubKey = new Uint8Array(n(e)), t; };
        st.fromPrivateUint8 = function (e, t) {
            if (t === void 0) { t = ""; }
            if (!e || 32 != e.length)
                throw new Error("Wrong private key. Should be 32 bytes Uint8");
            var r = new this;
            if (r.privKey = e, !t || !E.hasOwnProperty(t))
                throw new Error("Algorithm " + t + " not implemented.");
            return r.algorithm = t, r;
        };
        st.publicFromBase64 = function (e) { var t = new this, r = p(e), n = se.parse(y(r), Ve); return t.pubKey = new Uint8Array(n.publicKey), t; };
        st.publicFromSubjectPublicKeyInfo = function (e) { var t = new this; return t.pubKey = new Uint8Array(e.value.publicKey), t; };
        st.publicFromSubjectPublicKeyValue = function (e) { var t = new this; return t.pubKey = new Uint8Array(e.publicKey), t.algorithm = t.getAlgorithNameFromASN1(b(new Uint8Array(e.algorithm))), t; };
        st.publicFromUint = function (e) { var t = new this; if (65 != e.byteLength)
            throw console.error("Wrong public key length"), new Error("Wrong public key length"); return t.pubKey = new Uint8Array(e), t; };
        st.privateFromKeyInfo = function (e) { var t = new this, r = se.parse(e.keysData, ze); return t.algorithm = t.getAlgorithNameFromASN1(b(new Uint8Array(e.algIdent))), t.privKey = new Uint8Array(r.privateKey), t; };
        st.prototype.getAlgorithNameFromASN1 = function (e) { var t = {}; for (var e_143 in this.algorithmASNList)
            t[this.algorithmASNList[e_143]] = e_143; if (t.hasOwnProperty(e))
            return t[e]; {
            var e_144 = "Unknown algorithm.";
            throw console.error(e_144), new Error(e_144);
        } };
        st.privateFromPEM = function (e) { var t = p(e); var r = se.parse(y(t), je); return st.privateFromKeyInfo(r); };
        st.publicFromPEM = function (e) { var t = p(e); var r = se.parse(y(t), Ve); return st.publicFromUint(new Uint8Array(r.publicKey)); };
        st.generateKeyAsync = function () {
            return __awaiter(this, void 0, void 0, function () { var e, t, r; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt"])];
                    case 1:
                        e = _a.sent();
                        t = ["0x"];
                        return [4, crypto.subtle.exportKey("raw", e)];
                    case 2:
                        r = _a.sent();
                        return [2, (new Uint8Array(r).forEach((function (e) { var r = e.toString(16); r.length % 2 && (r = "0" + r), t.push(r); })), this.privateFromBigInt(BigInt(t.join("")) % w.n))];
                }
            }); });
        };
        st.createKeys = function () { return this.privateFromBigInt(BigInt("0x" + b(crypto.getRandomValues(new Uint8Array(32)))) % w.n); };
        st.prototype.getPublicKeyAsHexStr = function () { if (this.pubKey)
            return b(this.pubKey); if (E.hasOwnProperty(this.algorithm) && at.hasOwnProperty(this.algorithm))
            return new nt.ec(this.algorithm).keyFromPrivate(this.getPrivateAsHexString(), "hex").getPublic("hex").toString(); {
            var e_145 = 'Private -> Public key not implemented for that aglorighm - "' + this.algorithm + '"';
            throw console.log(e_145), new Error(e_145);
        } };
        st.prototype.getAsnDerPublic = function () { var e = this.getPublicKeyAsHexStr(); var t = ""; if (this.algorithm) {
            if (!this.algorithmASNList.hasOwnProperty(this.algorithm)) {
                var e_146 = "Fatal Error. Algorithm not implemented yet - " + this.algorithm;
                throw console.log(e_146), new Error(e_146);
            }
            t = this.algorithmASNList[this.algorithm];
        }
        else
            t = this.algorithmASNList.secp256k1; return pe.encode("SEQUENCE_30", t + pe.encode("BIT_STRING", e)); };
        st.prototype.getAddress = function () { var e = this.getPublicKeyAsHexStr(); return e = e.substr(2), "0x" + ot.keccak256(n(e)).substr(-40).toUpperCase(); };
        st.prototype.signBytes = function (e) { var t = it.keyFromPrivate(this.getPrivateAsHexString(), "hex"), r = ot.keccak256(e); return t.sign(r).toDER("hex"); };
        st.prototype.signStringWithEthereum = function (e) { var t = it.keyFromPrivate(this.getPrivateAsHexString(), "hex"), r = this.ethereumPrefix + e.length + e, n = ot.keccak256(g(r)); return t.sign(n).toDER("hex"); };
        st.prototype.signHexStringWithEthereum = function (e) { return this.signStringWithEthereum("0x" + e); };
        st.prototype.signBytesWithEthereum = function (e) { var t = "0x" + b(new Uint8Array(e)); return this.signStringWithEthereum(t); };
        st.prototype.signDeterministicSHA256 = function (e) { var t = Array.from(We.arrayify(Ye.JQ(e))); return this.signBytes(t); };
        st.prototype.verifyDeterministicSHA256 = function (e, t) { var r, n, o = Ye.JQ(e).substr(2); if (!E.hasOwnProperty(this.algorithm) || !at.hasOwnProperty(this.algorithm)) {
            var e_147 = 'Elliptic.js curve not implemented for that aglorighm - "' + this.algorithm + '"';
            throw console.log(e_147), new Error(e_147);
        } if (r = new nt.ec(this.algorithm).keyFromPublic(this.getPublicKeyAsHexStr(), "hex"), 128 == t.length || 130 == t.length) {
            var a = t.match(/([a-f\d]{64})/gi);
            n = { r: a[0], s: a[1] };
        }
        else {
            var e_148 = se.parse(y(i(t)), tt);
            n = { r: BigInt(e_148.r).toString(16).padStart(64, "0"), s: BigInt(e_148.s).toString(16).padStart(64, "0") };
        } return r.verify(o, n); };
        st.prototype.verifyHexStringWithEthereum = function (e, t) { var r = "0x" + e, n = ot.keccak256(g(this.ethereumPrefix + r.length + r)), i = it.keyFromPublic(this.getPublicKeyAsHexStr(), "hex"); var o = t.match(/([a-f\d]{64})/gi); var a = { r: o[0], s: o[1] }; return i.verify(n, a); };
        st.prototype.signRawBytesWithEthereum = function (e) { var t = ot.keccak256(e), r = it.keyFromPrivate(this.getPrivateAsHexString(), "hex"); return b(Uint8Array.from(r.sign(t).toDER())); };
        st.prototype.verifyBytesWithEthereum = function (e, t) { if (!t || !e || !e.length)
            throw new Error("Missing data to verify"); var r = n($e.keccak256(e)), i = it.keyFromPublic(this.getPublicKeyAsHexStr(), "hex"); var o = (t = b(st.anySignatureToRawUint8(t))).match(/([a-f\d]{64})/gi); var a = { r: o[0], s: o[1] }; return i.verify(r, a); };
        st.prototype.getJWTParams = function () { var e = at[this.algorithm]; if (!e) {
            var e_149 = "Cant create subtleCrypto key for curve '" + this.algorithm + "'";
            throw console.error(e_149), new Error(e_149);
        } var t = this.getPublicKeyAsHexStr(); return { crv: e, d: d(this.getPrivateAsUint8()), key_ops: ["sign"], kty: "EC", x: d(i(t.substr(2, 64))), y: d(i(t.substr(66, 64))) }; };
        st.prototype.getSubtlePrivateKey = function () { var e = at[this.algorithm]; return rt.importKey("jwk", this.getJWTParams(), { name: "ECDSA", namedCurve: e }, !0, ["sign"]); };
        st.prototype.getSubtlePublicKey = function () { var e = at[this.algorithm], t = this.getJWTParams(); return delete t.d, t.key_ops = ["verify"], rt.importKey("jwk", t, { name: "ECDSA", namedCurve: e }, !0, ["verify"]); };
        st.prototype.signStringWithSubtle = function (e) {
            return __awaiter(this, void 0, void 0, function () { var _a, _b, _c; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = rt).sign;
                        _c = [{ name: "ECDSA", hash: { name: "SHA-256" } }];
                        return [4, this.getSubtlePrivateKey()];
                    case 1: return [4, _b.apply(_a, _c.concat([_d.sent(), Uint8Array.from(g(e))]))];
                    case 2: return [2, _d.sent()];
                }
            }); });
        };
        st.prototype.verifyStringWithSubtle = function (e, t) {
            return __awaiter(this, void 0, void 0, function () { var _a, _b, _c; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = rt).verify;
                        _c = [{ name: "ECDSA", hash: { name: "SHA-256" } }];
                        return [4, this.getSubtlePublicKey()];
                    case 1: return [4, _b.apply(_a, _c.concat([_d.sent(), e, Uint8Array.from(g(t))]))];
                    case 2: return [2, _d.sent()];
                }
            }); });
        };
        st.prototype.verifyStringWithSubtleDerSignature = function (e, t) {
            return __awaiter(this, void 0, void 0, function () { var r, n; return __generator(this, function (_a) {
                r = se.parse(y(e), tt);
                n = BigInt(r.r).toString(16).padStart(64, "0") + BigInt(r.s).toString(16).padStart(64, "0");
                return [2, this.verifyStringWithSubtle(i(n), t)];
            }); });
        };
        st.anySignatureToRawUint8 = function (e) { var t, r; if (t = "string" == typeof e ? i(e) : e, !t || !t.length)
            throw new Error("Empty signature received"); switch (t.length) {
            case 64:
                r = t;
                break;
            case 65:
                r = t.slice(0, 64);
                break;
            case 70:
            case 71:
            case 72:
                var e_150 = se.parse(y(t), tt);
                r = i(BigInt(e_150.r).toString(16).padStart(64, "0") + BigInt(e_150.s).toString(16).padStart(64, "0"));
                break;
            default:
                var n_65 = "wrong Signature: " + b(t);
                throw new Error(n_65);
        } return r; };
        return st;
    }());
    var ct = (function () {
        function ct(e) {
            if (e === void 0) { e = null; }
            this.ALLOWED_ROUNDING = 1e3, this.validity = 0, e || (this.time = Date.now()), "number" == typeof e && (this.time = e), "string" == typeof e && (this.time = ct.stringTimestampToLong(e)), this.time = this.time - this.time % 1e3;
        }
        ct.prototype.fromString = function (e) { this.time = ct.stringTimestampToLong(e); };
        ct.prototype.getValidity = function () { return this.validity; };
        ct.prototype.setValidity = function (e) { this.validity = e; };
        ct.prototype.getTime = function () { return this.time; };
        ct.prototype.getTimeAsString = function () { var e = new Date(this.time).toString(); return e.substr(0, e.indexOf("(") - 1); };
        ct.prototype.validateTimestamp = function () { var e = this.getCurrentTime(); return !(this.time > e + this.ALLOWED_ROUNDING || this.time < e - this.ALLOWED_ROUNDING - this.validity); };
        ct.prototype.validateAgainstExpiration = function (e) { var t = this.getCurrentTime(); return !(this.time > t + this.ALLOWED_ROUNDING || e < t - this.ALLOWED_ROUNDING || e - this.time > this.validity + 3 * this.ALLOWED_ROUNDING && (console.log(e + "\n" + this.time + "\n" + this.validity + "\n" + this.ALLOWED_ROUNDING + "\n" + (e - this.time) + "\n" + (this.validity + this.ALLOWED_ROUNDING) + "\n"), 1)); };
        ct.stringTimestampToLong = function (e) { return Date.parse(e); };
        ct.prototype.getCurrentTime = function () { return Date.now(); };
        return ct;
    }());
    ct.TIMESTAMP_FORMAT = "EEE MMM d yyyy HH:mm:ss 'GMT'Z", ct.ALLOWED_ROUNDING = 1e3, ct.UNLIMITED = 0xe677d1e8e998, ct.DEFAULT_TOKEN_TIME_LIMIT = 31536e6, ct.DEFAULT_TIME_LIMIT_MS = 12e5;
    var lt = (function () {
        function lt() {
            this.version = 18;
        }
        lt.prototype.fromBytes = function (e) { var t = this; var r = se.parse(y(e), qe); t.signedInfo = e, t.version = r.version.version, t.serialNumber = r.serialNumber, t.signingAlgorithm = r.signature.algorithm.toString(), r.validity && (t.notValidBefore = r.validity.notBefore.generalizedTime.getTime(), t.notValidAfter = r.validity.notAfter.generalizedTime.getTime()); var n = r.subject.rdnSequence; if (n && n[0] && n[0][0]) {
            var e_151 = n[0][0];
            t.subject = ("2.5.4.3" == e_151.type.toString() ? "CN=" : "") + e_151.value;
        } t.subjectKey = st.publicFromSubjectPublicKeyInfo(r.subjectPublicKeyInfo); var i = r.issuer.rdnSequence, o = []; i.length && i.forEach((function (e) { var t = e[0].value, r = e[0].type, n = ""; switch (r) {
            case "2.5.4.3":
                n = "CN";
                break;
            case "2.5.4.6":
                n = "C";
                break;
            case "2.5.4.10":
                n = "O";
                break;
            case "2.5.4.11":
                n = "OU";
                break;
            case "2.5.4.7":
                n = "L";
                break;
            default: throw new Error('Alg "' + r + '" Not implemented yet');
        } r && t && o.push(r + "=" + t); })), t.issuer = o.join(","), r.contract && (t.smartcontracts = r.contract), r.attestsTo.extensions ? (t.extensions = r.attestsTo.extensions, t.commitment = new Uint8Array(t.extensions.extension.extnValue)) : r.attestsTo.dataObject; };
        lt.prototype.isValidX509 = function () { return 0 != this.version && 1 != this.version && 2 != this.version ? (console.error("Incorrect version number"), !1) : this.issuer ? null == this.notValidBefore || null == this.notValidAfter ? (console.error("Validity period not set"), !1) : null == this.subject ? (console.error("Subject info not set"), !1) : this.subjectKey ? null != this.smartcontracts ? (console.error("Smart contract info set"), !1) : null != this.dataObject ? (console.error("Data object set"), !1) : null != this.version && null != this.serialNumber && null != this.signingAlgorithm || (console.error("Version, serial number, subject or algorithm missing"), !1) : (console.error("No subject public key info set"), !1) : (console.error("Issuer info not set"), !1); };
        lt.prototype.getDerEncoding = function () { if (this.signedInfo || (this.signedInfo = this.getPrehash()), !this.signedInfo)
            throw new Error("Empty Attestaion Der Encoding"); return b(new Uint8Array(this.signedInfo)); };
        lt.prototype.getCommitment = function () { return this.commitment; };
        lt.prototype.getNotValidBefore = function () { return this.notValidBefore; };
        lt.prototype.setNotValidBefore = function (e) { this.notValidBefore = e; };
        lt.prototype.getNotValidAfter = function () { return this.notValidAfter; };
        lt.prototype.setNotValidAfter = function (e) { this.notValidAfter = e; };
        lt.prototype.getSubjectPublicKeyInfo = function () { return this.subjectKey; };
        lt.prototype.checkValidity = function () { if (null == this.version || null == this.serialNumber || null == this.subject || null == this.signingAlgorithm || !this.extensions && !this.dataObject && !this.commitment)
            return console.log("Some attest data missed"), !1; var e = Date.now(), t = this.getNotValidBefore(), r = this.getNotValidAfter(); return !r || e < r ? !t || e >= t - ct.ALLOWED_ROUNDING ? null == this.extensions || null == this.dataObject || (console.log("Extensions or dataObject required"), !1) : (console.log("Attestation still not valid. Details: attNotBefore = " + t + ", currentTime = " + e), !1) : (console.log("Attestation is not longer valid. Details: attNotAfter = " + r + ", currentTime = " + e), !1); };
        lt.prototype.getExtensions = function () { return this.extensions; };
        lt.prototype.setVersion = function (e) { this.version = e; };
        lt.prototype.getVersion = function () { return this.version; };
        lt.prototype.setSubject = function (e) { this.subject = e; };
        lt.prototype.getSubject = function () { return this.subject; };
        lt.prototype.setSigningAlgorithm = function (e) { this.signingAlgorithm = e; };
        lt.prototype.getPrehash = function () { if (!this.checkValidity())
            return null; var e = pe.encode("TAG", pe.encode("INTEGER", this.version), 0) + pe.encode("INTEGER", this.serialNumber) + pe.encodeObjectId(this.signingAlgorithm); if (e += this.issuer ? pe.encodeName(this.issuer) : pe.encode("NULL_VALUE", ""), null != this.notValidAfter && null != this.notValidBefore) {
            var t_106 = pe.encode("GENERALIZED_TIME", this.notValidBefore) + pe.encode("GENERALIZED_TIME", this.notValidAfter);
            e += pe.encode("SEQUENCE_30", t_106);
        }
        else
            e += pe.encode("NULL_VALUE", ""); if (e += this.subject ? pe.encodeName(this.subject) : pe.encode("NULL_VALUE", ""), e += this.subjectKey ? this.subjectKey.getAsnDerPublic() : pe.encode("NULL_VALUE", ""), !this.commitment || !this.commitment.length)
            throw new Error("dataObject not implemented. We didn't use it before."); {
            var t_107 = pe.encode("OBJECT_ID", lt.OID_OCTETSTRING) + pe.encode("BOOLEAN", 1) + pe.encode("OCTET_STRING", b(this.commitment));
            e += pe.encode("TAG", pe.encode("SEQUENCE_30", pe.encode("SEQUENCE_30", t_107)), 3);
        } return i(pe.encode("SEQUENCE_30", e)); };
        lt.prototype.getSigningAlgorithm = function () { return this.signingAlgorithm; };
        return lt;
    }());
    lt.OID_OCTETSTRING = "1.3.6.1.4.1.1466.115.121.1.40";
    var ut = (function (_super) {
        __extends(ut, _super);
        function ut() {
            return _super.call(this) || this;
        }
        ut.prototype.fromCommitment = function (e, t) { this.subjectKey = t, this.setVersion(ut.HIDDEN_IDENTIFIER_VERSION), this.setSubject("CN="), this.setSigningAlgorithm(ut.DEFAULT_SIGNING_ALGORITHM), this.setSubjectPublicKeyInfo(t), this.setCommitment(e), this.type = ut.HIDDEN_TYPE, this.identifier = ut.HIDDEN_IDENTIFIER, this.setUnlimitedValidity(); };
        ut.prototype.setUnlimitedValidity = function () { _super.prototype.setNotValidBefore.call(this, Date.now()), _super.prototype.setNotValidAfter.call(this, Date.parse("31 Dec 9999 23:59:59")); };
        ut.fromData = function (e, t, r, n) { var i = (new Se).makeCommitment(e, t, n), o = new this; return o.fromCommitment(i, r), o.type = t.toString(), o.identifier = e, o; };
        ut.fromLabelAndUrl = function (e, t, r) { var n = new this; return n.subjectKey = r, n.setVersion(ut.NFT_VERSION), n.setSubject(n.makeLabeledURI(e, t)), n.setSigningAlgorithm(ut.DEFAULT_SIGNING_ALGORITHM), n.setSubjectPublicKeyInfo(r), n.setUnlimitedValidity(), n.type = e, n.identifier = t, n; };
        ut.prototype.makeLabeledURI = function (e, t) { return ""; };
        ut.fromBytes = function (e) { var t = new this; if (t.fromBytes(e), !t.checkValidity())
            throw new Error("Could not validate object"); return t.getVersion() == ut.NFT_VERSION || (t.type = ut.HIDDEN_TYPE, t.identifier = ut.HIDDEN_IDENTIFIER), t; };
        ut.prototype.setSubjectPublicKeyInfo = function (e) { this.subjectKey = e; };
        ut.prototype.setCommitment = function (e) { this.commitment = e; };
        ut.prototype.checkValidity = function () { return !(!_super.prototype.checkValidity.call(this) || (this.getVersion() != ut.HIDDEN_IDENTIFIER_VERSION && this.getVersion() != ut.NFT_VERSION ? (console.error("The version number is " + this.getVersion() + ", it must be either " + ut.HIDDEN_IDENTIFIER_VERSION + " or " + ut.NFT_VERSION), 1) : this.getSigningAlgorithm() !== ut.DEFAULT_SIGNING_ALGORITHM ? (console.error("The subject is supposed to only be an Ethereum address as the Common Name"), 1) : this.getVersion() != ut.NFT_VERSION || this.getSubject().includes(ut.LABELED_URI) ? this.getVersion() == ut.HIDDEN_IDENTIFIER_VERSION && this.getCommitment().length < Se.BYTES_IN_DIGEST && (console.error("The attestation does not contain a valid commitment"), 1) : (console.error("A NFT Identifier attestation must have a labeled uri as subject"), 1))); };
        ut.prototype.setIssuer = function (e) { this.issuer = e; };
        ut.prototype.getSerialNumber = function () { return this.serialNumber; };
        ut.prototype.setSerialNumber = function (e) { this.serialNumber = e; };
        ut.prototype.getAddress = function () { return this.subjectKey.getAddress(); };
        return ut;
    }(lt));
    ut.OID_OCTETSTRING = "1.3.6.1.4.1.1466.115.121.1.40", ut.DEFAULT_SIGNING_ALGORITHM = "1.2.840.10045.4.2", ut.HIDDEN_IDENTIFIER_VERSION = 18, ut.NFT_VERSION = 19, ut.HIDDEN_TYPE = "HiddenType", ut.HIDDEN_IDENTIFIER = "HiddenIdentifier", ut.LABELED_URI = "1.3.6.1.4.1.250.1.57";
    var ft = (function () {
        function ft() {
        }
        ft.fromBytes = function (e, t) { var r = se.parse(y(e), Qe); return this.fromASNType(r, t, e); };
        ft.fromASNType = function (e, t, r) {
            if (r === void 0) { r = new Uint8Array(0); }
            var n = new this;
            n.uint8data = r, n.attestorKeys = t;
            var i = e.signatureAlgorithm.algorithm;
            if (n.att = ut.fromBytes(e.signedInfo), n.signature = b(new Uint8Array(e.signatureValue)), i !== n.att.getSigningAlgorithm())
                throw new Error("Algorithm specified is not consistent");
            return n.constructorCheck(), n;
        };
        ft.fromData = function (e, t) { var r = new this; return r.attestorKeys = t, r.att = e, r.signature = r.attestorKeys.signRawBytesWithEthereum(Array.from(r.att.getPrehash())), r.constructorCheck(), r; };
        ft.prototype.verify = function () { try {
            return this.attestorKeys.verifyBytesWithEthereum(n(this.att.getDerEncoding()), this.signature);
        }
        catch (e) {
            return console.error(e), !1;
        } };
        ft.prototype.checkValidity = function () { return this.getUnsignedAttestation().checkValidity(); };
        ft.prototype.getUnsignedAttestation = function () { return this.att; };
        ft.prototype.getDerEncoding = function () { return this.uint8data && this.uint8data.length ? b(new Uint8Array(this.uint8data)) : this.constructSignedAttestation(this.getUnsignedAttestation(), this.signature); };
        ft.prototype.constructSignedAttestation = function (e, t) { var r = e.getPrehash(), n = pe.encode("OBJECT_ID", e.getSigningAlgorithm()), i = b(r) + pe.encode("SEQUENCE_30", n) + pe.encode("BIT_STRING", "04" + b(st.anySignatureToRawUint8(t))); return pe.encode("SEQUENCE_30", i); };
        ft.prototype.constructorCheck = function () { if (!this.verify())
            throw new Error("The signature is not valid"); };
        return ft;
    }());
    ft.ECDSA_WITH_SHA256 = "1.2.840.10045.4.3.2";
    var ht = (function () {
        function ht() {
        }
        ht.prototype.create = function (e, t, r, n) { this.attestableObject = e, this.att = t, this.attestationSecret = r, this.objectSecret = n, this.crypto = new Se, this.pok = this.makeProof(r, n, this.crypto), this.derEncodedProof = this.pok.getDerEncoding(), this.fillPresignData(); };
        ht.prototype.setWebDomain = function (e) { this.webDomain = e; };
        ht.prototype.fillPresignData = function () { this.preSignEncoded = this.attestableObject.getDerEncoding() + this.att.getDerEncoding() + this.pok.getDerEncoding(), this.encoding = pe.encode("SEQUENCE_30", this.preSignEncoded); };
        ht.prototype.fromDecodedData = function (e, t, r) { this.attestableObject = e, this.att = t, this.pok = r, this.fillPresignData(), this.userKeyPair = this.att.getUnsignedAttestation().getSubjectPublicKeyInfo(), this.constructorCheck(); };
        ht.prototype.verify = function () { return this.attestableObject.verify() ? this.att.verify() ? !!this.crypto.verifyEqualityProof(this.att.getUnsignedAttestation().getCommitment(), this.attestableObject.getCommitment(), this.pok) || (console.error("Could not verify the consistency between the commitment in the attestation and the attested object"), !1) : (console.error("Could not verify attestation"), !1) : (console.error("Could not verify attestable object"), !1); };
        ht.fromBytes = function (e, t, r, n, i) { var o = se.parse(y(e), t), a = new this; a.attestableObject = new n, a.attestableObject.fromBytes(o.signedToken, i), a.att = ft.fromBytes(new Uint8Array(o.attestation), r); var s = new ge; s.fromBytes(new Uint8Array(o.proof)), a.pok = s; var c = a.att.getUnsignedAttestation().getCommitment(), l = a.attestableObject.getCommitment(); if (!(new Se).verifyEqualityProof(c, l, s))
            throw new Error("The redeem proof did not verify"); return a; };
        ht.prototype.makeProof = function (e, t, r) { var n = this.att.getUnsignedAttestation().getCommitment(), i = this.attestableObject.getCommitment(), o = r.computeEqualityProof(b(n), b(i), e, t); if (!r.verifyEqualityProof(n, i, o))
            throw new Error("The redeem proof did not verify"); return o; };
        ht.prototype.getAttestableObject = function () { return this.attestableObject; };
        ht.prototype.getAtt = function () { return this.att; };
        ht.prototype.getDerEncodeProof = function () { return this.derEncodedProof; };
        ht.prototype.getDerEncoding = function () { return this.encoding; };
        ht.prototype.getUserPublicKey = function () { return this.userPublicKey; };
        ht.prototype.constructorCheck = function () { if (!this.verify())
            throw new Error("The redeem request is not valid"); };
        ht.prototype.checkValidity = function () { try {
            var e_152 = this.att.getUnsignedAttestation().getDerEncoding();
            if (!ut.fromBytes(new Uint8Array(n(e_152))).checkValidity())
                return console.error("The attestation is not a valid standard attestation"), !1;
        }
        catch (e) {
            return console.error("The attestation is invalid"), !1;
        } try {
            if (!this.getAttestableObject().checkValidity())
                return console.error("Cheque is not valid"), !1;
        }
        catch (e) {
            return console.error("Cheque validation failed"), !1;
        } try {
            var e_153 = this.getAtt().getUnsignedAttestation().getAddress();
            if (console.log("attestationEthereumAddress: " + e_153), console.log(this.getUserPublicKey()), console.log("this.getUserPublicKey()).getAddress(): " + st.publicFromUint(this.getUserPublicKey()).getAddress()), e_153.toLowerCase() !== st.publicFromUint(this.getUserPublicKey()).getAddress().toLowerCase())
                return console.error("The attestation is not to the same Ethereum user who is sending this request"), !1;
        }
        catch (e) {
            return console.error("Address validation failed"), console.error(e), !1;
        } return !0; };
        return ht;
    }());
    ht.Eip712UserData = { payload: "", description: "", timestamp: 0 }, ht.Eip712UserDataTypes = [{ name: "payload", type: "string" }, { name: "description", type: "string" }, { name: "timestamp", type: "uint256" }], ht.Eip712UserDataPrimaryName = "Authentication", ht.Eip712UserDataDescription = "Single-use authentication";
    var dt = { attestationOrigin: "http://stage.attestation.id", tokensOrigin: "https://devcontickets.herokuapp.com/outlet/", tokenUrlName: "ticket", tokenSecretName: "secret", unsignedTokenDataName: "ticket", tokenParser: xe, localStorageItemName: "dcTokens", base64senderPublicKey: "-----BEGIN PUBLIC KEY-----\nMIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA////////////////\n/////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5m\nfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0\nSKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFB\nAgEBA0IABJUMfAvtI8PKxcwxu7mq2btVMjh4gmcKwrHN8HmasOvHZMJn9wTo/doH\nlquDl6TSEBAk0kxO//aVs6QX8u0OSM0=\n-----END PUBLIC KEY-----", base64attestorPubKey: "MIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA/////////////////////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5mfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0SKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFBAgEBA0IABL+y43T1OJFScEep69/yTqpqnV/jzONz9Sp4TEHyAJ7IPN9+GHweCX1hT4OFxt152sBN3jJc1s0Ymzd8pNGZNoQ=", webDomain: "devcon.org" };
    var pt = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var gt = (function () {
        function gt() {
        }
        return gt;
    }());
    pt([oe({ type: M.Integer })], gt.prototype, "type", void 0), pt([oe({ type: ue })], gt.prototype, "proof", void 0);
    var mt = (function () {
        function mt() {
        }
        mt.fromData = function (e, t) { var r = new this; if (r.type = e, r.pok = t, !r.verify())
            throw new Error("The proof is not valid"); return r; };
        mt.prototype.getDerEncoding = function () { var e = pe.encode("INTEGER", this.type) + this.pok.getDerEncoding(); return pe.encode("SEQUENCE_30", e); };
        mt.fromBytes = function (e) { var t, r = new this; try {
            t = se.parse(y(e), gt), r.type = t.type;
        }
        catch (e) {
            throw new Error("Cant parse AttestationRequest Identifier");
        } try {
            var e_154 = new Uint8Array(t.proof.riddle), n_66 = new Uint8Array(t.proof.challengePoint), i_39 = new Uint8Array(t.proof.responseValue), o_23 = new Uint8Array(t.proof.nonce), a_19 = k.decodeFromHex(b(e_154), T), s_14 = c(n_66), l_5 = k.decodeFromHex(b(i_39), T);
            r.pok = me.fromData(a_19, l_5, s_14, o_23);
        }
        catch (e) {
            throw new Error("Cant create FullProofOfExponent");
        } if (!r.verify())
            throw new Error("Could not verify the proof"); return r; };
        mt.prototype.verify = function () { return !!(new Se).verifyFullProof(this.pok); };
        mt.prototype.getPok = function () { return this.pok; };
        mt.prototype.getType = function () { return this.type; };
        return mt;
    }());
    var bt = r(4958), yt = r(3684), vt = r(2768), At = r(2046), St = r(3587), wt = r(711);
    var Et = "providers/5.0.23";
    var Tt = r(8171), kt = r(2593), Bt = r(7827), Mt = r(4242), Ct = r(8341), Lt = r(4353), Pt = r(7727), Ft = r(7218), Nt = r(4706);
    var xt = new wt.Logger("networks/5.0.8");
    function Rt(e) { var t = function (t, r) { null == r && (r = {}); var n = []; if (t.InfuraProvider)
        try {
            n.push(new t.InfuraProvider(e, r.infura));
        }
        catch (e) { } if (t.EtherscanProvider)
        try {
            n.push(new t.EtherscanProvider(e, r.etherscan));
        }
        catch (e) { } if (t.AlchemyProvider)
        try {
            n.push(new t.AlchemyProvider(e, r.alchemy));
        }
        catch (e) { } if (t.PocketProvider)
        try {
            n.push(new t.PocketProvider(e));
        }
        catch (e) { } if (t.CloudflareProvider)
        try {
            n.push(new t.CloudflareProvider(e));
        }
        catch (e) { } if (0 === n.length)
        return null; if (t.FallbackProvider) {
        var i_40 = 1;
        return null != r.quorum ? i_40 = r.quorum : "homestead" === e && (i_40 = 2), new t.FallbackProvider(n, i_40);
    } return n[0]; }; return t.renetwork = function (e) { return Rt(e); }, t; }
    function Ot(e, t) { var r = function (r, n) { return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null; }; return r.renetwork = function (t) { return Ot(e, t); }, r; }
    var It = { chainId: 1, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "homestead", _defaultProvider: Rt("homestead") }, Dt = { chainId: 3, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "ropsten", _defaultProvider: Rt("ropsten") }, Jt = { chainId: 63, name: "classicMordor", _defaultProvider: Ot("https://www.ethercluster.com/mordor", "classicMordor") }, _t = { unspecified: { chainId: 0, name: "unspecified" }, homestead: It, mainnet: It, morden: { chainId: 2, name: "morden" }, ropsten: Dt, testnet: Dt, rinkeby: { chainId: 4, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "rinkeby", _defaultProvider: Rt("rinkeby") }, kovan: { chainId: 42, name: "kovan", _defaultProvider: Rt("kovan") }, goerli: { chainId: 5, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "goerli", _defaultProvider: Rt("goerli") }, classic: { chainId: 61, name: "classic", _defaultProvider: Ot("https://www.ethercluster.com/etc", "classic") }, classicMorden: { chainId: 62, name: "classicMorden" }, classicMordor: Jt, classicTestnet: Jt, classicKotti: { chainId: 6, name: "classicKotti", _defaultProvider: Ot("https://www.ethercluster.com/kotti", "classicKotti") } };
    var Ut = r(2882), Ht = r.n(Ut), Xt = r(4594), Vt = r(4377);
    var Gt = new wt.Logger(Et);
    var zt = (function () {
        function zt() {
            var _newTarget = this.constructor;
            Gt.checkNew(_newTarget, zt), this.formats = this.getDefaultFormats();
        }
        zt.prototype.getDefaultFormats = function () {
            var _this = this;
            var e = {}, t = this.address.bind(this), r = this.bigNumber.bind(this), n = this.blockTag.bind(this), i = this.data.bind(this), o = this.hash.bind(this), a = this.hex.bind(this), s = this.number.bind(this);
            return e.transaction = { hash: o, blockHash: zt.allowNull(o, null), blockNumber: zt.allowNull(s, null), transactionIndex: zt.allowNull(s, null), confirmations: zt.allowNull(s, null), from: t, gasPrice: r, gasLimit: r, to: zt.allowNull(t, null), value: r, nonce: s, data: i, r: zt.allowNull(this.uint256), s: zt.allowNull(this.uint256), v: zt.allowNull(s), creates: zt.allowNull(t, null), raw: zt.allowNull(i) }, e.transactionRequest = { from: zt.allowNull(t), nonce: zt.allowNull(s), gasLimit: zt.allowNull(r), gasPrice: zt.allowNull(r), to: zt.allowNull(t), value: zt.allowNull(r), data: zt.allowNull((function (e) { return _this.data(e, !0); })) }, e.receiptLog = { transactionIndex: s, blockNumber: s, transactionHash: o, address: t, topics: zt.arrayOf(o), data: i, logIndex: s, blockHash: o }, e.receipt = { to: zt.allowNull(this.address, null), from: zt.allowNull(this.address, null), contractAddress: zt.allowNull(t, null), transactionIndex: s, root: zt.allowNull(a), gasUsed: r, logsBloom: zt.allowNull(i), blockHash: o, transactionHash: o, logs: zt.arrayOf(this.receiptLog.bind(this)), blockNumber: s, confirmations: zt.allowNull(s, null), cumulativeGasUsed: r, status: zt.allowNull(s) }, e.block = { hash: o, parentHash: o, number: s, timestamp: s, nonce: zt.allowNull(a), difficulty: this.difficulty.bind(this), gasLimit: r, gasUsed: r, miner: t, extraData: i, transactions: zt.allowNull(zt.arrayOf(o)) }, e.blockWithTransactions = (0, St.shallowCopy)(e.block), e.blockWithTransactions.transactions = zt.allowNull(zt.arrayOf(this.transactionResponse.bind(this))), e.filter = { fromBlock: zt.allowNull(n, void 0), toBlock: zt.allowNull(n, void 0), blockHash: zt.allowNull(o, void 0), address: zt.allowNull(t, void 0), topics: zt.allowNull(this.topics.bind(this), void 0) }, e.filterLog = { blockNumber: zt.allowNull(s), blockHash: zt.allowNull(o), transactionIndex: s, removed: zt.allowNull(this.boolean.bind(this)), address: t, data: zt.allowFalsish(i, "0x"), topics: zt.arrayOf(o), transactionHash: o, logIndex: s }, e;
        };
        zt.prototype.number = function (e) { return "0x" === e ? 0 : kt.O$.from(e).toNumber(); };
        zt.prototype.bigNumber = function (e) { return kt.O$.from(e); };
        zt.prototype.boolean = function (e) { if ("boolean" == typeof e)
            return e; if ("string" == typeof e) {
            if ("true" === (e = e.toLowerCase()))
                return !0;
            if ("false" === e)
                return !1;
        } throw new Error("invalid boolean - " + e); };
        zt.prototype.hex = function (e, t) { return "string" == typeof e && (t || "0x" === e.substring(0, 2) || (e = "0x" + e), (0, We.isHexString)(e)) ? e.toLowerCase() : Gt.throwArgumentError("invalid hash", "value", e); };
        zt.prototype.data = function (e, t) { var r = this.hex(e, t); if (r.length % 2 != 0)
            throw new Error("invalid data; odd-length - " + e); return r; };
        zt.prototype.address = function (e) { return (0, Xt.getAddress)(e); };
        zt.prototype.callAddress = function (e) { if (!(0, We.isHexString)(e, 32))
            return null; var t = (0, Xt.getAddress)((0, We.hexDataSlice)(e, 12)); return "0x0000000000000000000000000000000000000000" === t ? null : t; };
        zt.prototype.contractAddress = function (e) { return (0, Xt.getContractAddress)(e); };
        zt.prototype.blockTag = function (e) { if (null == e)
            return "latest"; if ("earliest" === e)
            return "0x0"; if ("latest" === e || "pending" === e)
            return e; if ("number" == typeof e || (0, We.isHexString)(e))
            return (0, We.hexValue)(e); throw new Error("invalid blockTag"); };
        zt.prototype.hash = function (e, t) { var r = this.hex(e, t); return 32 !== (0, We.hexDataLength)(r) ? Gt.throwArgumentError("invalid hash", "value", e) : r; };
        zt.prototype.difficulty = function (e) { if (null == e)
            return null; var t = kt.O$.from(e); try {
            return t.toNumber();
        }
        catch (e) { } return null; };
        zt.prototype.uint256 = function (e) { if (!(0, We.isHexString)(e))
            throw new Error("invalid uint256"); return (0, We.hexZeroPad)(e, 32); };
        zt.prototype._block = function (e, t) { return null != e.author && null == e.miner && (e.miner = e.author), zt.check(t, e); };
        zt.prototype.block = function (e) { return this._block(e, this.formats.block); };
        zt.prototype.blockWithTransactions = function (e) { return this._block(e, this.formats.blockWithTransactions); };
        zt.prototype.transactionRequest = function (e) { return zt.check(this.formats.transactionRequest, e); };
        zt.prototype.transactionResponse = function (e) { null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas), e.to && kt.O$.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), null != e.input && null == e.data && (e.data = e.input), null == e.to && null == e.creates && (e.creates = this.contractAddress(e)); var t = zt.check(this.formats.transaction, e); if (null != e.chainId) {
            var r_86 = e.chainId;
            (0, We.isHexString)(r_86) && (r_86 = kt.O$.from(r_86).toNumber()), t.chainId = r_86;
        }
        else {
            var r_87 = e.networkId;
            null == r_87 && null == t.v && (r_87 = e.chainId), (0, We.isHexString)(r_87) && (r_87 = kt.O$.from(r_87).toNumber()), "number" != typeof r_87 && null != t.v && (r_87 = (t.v - 35) / 2, r_87 < 0 && (r_87 = 0), r_87 = parseInt(r_87)), "number" != typeof r_87 && (r_87 = 0), t.chainId = r_87;
        } return t.blockHash && "x" === t.blockHash.replace(/0/g, "") && (t.blockHash = null), t; };
        zt.prototype.transaction = function (e) { return (0, Vt.parse)(e); };
        zt.prototype.receiptLog = function (e) { return zt.check(this.formats.receiptLog, e); };
        zt.prototype.receipt = function (e) { var t = zt.check(this.formats.receipt, e); if (null != t.root)
            if (t.root.length <= 4) {
                var e_155 = kt.O$.from(t.root).toNumber();
                0 === e_155 || 1 === e_155 ? (null != t.status && t.status !== e_155 && Gt.throwArgumentError("alt-root-status/status mismatch", "value", { root: t.root, status: t.status }), t.status = e_155, delete t.root) : Gt.throwArgumentError("invalid alt-root-status", "value.root", t.root);
            }
            else
                66 !== t.root.length && Gt.throwArgumentError("invalid root hash", "value.root", t.root); return null != t.status && (t.byzantium = !0), t; };
        zt.prototype.topics = function (e) {
            var _this = this;
            return Array.isArray(e) ? e.map((function (e) { return _this.topics(e); })) : null != e ? this.hash(e, !0) : null;
        };
        zt.prototype.filter = function (e) { return zt.check(this.formats.filter, e); };
        zt.prototype.filterLog = function (e) { return zt.check(this.formats.filterLog, e); };
        zt.check = function (e, t) { var r = {}; for (var n_67 in e)
            try {
                var i_41 = e[n_67](t[n_67]);
                void 0 !== i_41 && (r[n_67] = i_41);
            }
            catch (e) {
                throw e.checkKey = n_67, e.checkValue = t[n_67], e;
            } return r; };
        zt.allowNull = function (e, t) { return function (r) { return null == r ? t : e(r); }; };
        zt.allowFalsish = function (e, t) { return function (r) { return r ? e(r) : t; }; };
        zt.arrayOf = function (e) { return function (t) { if (!Array.isArray(t))
            throw new Error("not an array"); var r = []; return t.forEach((function (t) { r.push(e(t)); })), r; }; };
        return zt;
    }());
    var jt = function (e, t, r, n) { return new (r || (r = Promise))((function (i, o) { function a(e) { try {
        c(n.next(e));
    }
    catch (e) {
        o(e);
    } } function s(e) { try {
        c(n.throw(e));
    }
    catch (e) {
        o(e);
    } } function c(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) { e(t); }))).then(a, s); } c((n = n.apply(e, t || [])).next()); })); };
    var Kt = new wt.Logger(Et);
    function Zt(e) { return null == e ? "null" : (32 !== (0, We.hexDataLength)(e) && Kt.throwArgumentError("invalid topic", "topic", e), e.toLowerCase()); }
    function qt(e) { for (e = e.slice(); e.length > 0 && null == e[e.length - 1];)
        e.pop(); return e.map((function (e) { if (Array.isArray(e)) {
        var t_108 = {};
        e.forEach((function (e) { t_108[Zt(e)] = !0; }));
        var r_88 = Object.keys(t_108);
        return r_88.sort(), r_88.join("|");
    } return Zt(e); })).join("&"); }
    function Qt(e) { if ("string" == typeof e) {
        if (e = e.toLowerCase(), 32 === (0, We.hexDataLength)(e))
            return "tx:" + e;
        if (-1 === e.indexOf(":"))
            return e;
    }
    else {
        if (Array.isArray(e))
            return "filter:*:" + qt(e);
        if (Lt.Sg.isForkEvent(e))
            throw Kt.warn("not implemented"), new Error("not implemented");
        if (e && "object" == typeof e)
            return "filter:" + (e.address || "*") + ":" + qt(e.topics || []);
    } throw new Error("invalid event - " + e); }
    function Wt() { return (new Date).getTime(); }
    var Yt = ["block", "network", "pending", "poll"];
    var $t = (function () {
        function $t(e, t, r) {
            (0, St.defineReadOnly)(this, "tag", e), (0, St.defineReadOnly)(this, "listener", t), (0, St.defineReadOnly)(this, "once", r);
        }
        Object.defineProperty($t.prototype, "event", {
            get: function () { switch (this.type) {
                case "tx": return this.hash;
                case "filter": return this.filter;
            } return this.tag; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty($t.prototype, "type", {
            get: function () { return this.tag.split(":")[0]; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty($t.prototype, "hash", {
            get: function () { var e = this.tag.split(":"); return "tx" !== e[0] ? null : e[1]; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty($t.prototype, "filter", {
            get: function () { var e = this.tag.split(":"); if ("filter" !== e[0])
                return null; var t = e[1], r = "" === (n = e[2]) ? [] : n.split(/&/g).map((function (e) { if ("" === e)
                return []; var t = e.split("|").map((function (e) { return "null" === e ? null : e; })); return 1 === t.length ? t[0] : t; })); var n; var i = {}; return r.length > 0 && (i.topics = r), t && "*" !== t && (i.address = t), i; },
            enumerable: false,
            configurable: true
        });
        $t.prototype.pollable = function () { return this.tag.indexOf(":") >= 0 || Yt.indexOf(this.tag) >= 0; };
        return $t;
    }());
    var er = { 0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" }, 2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" }, 3: { symbol: "doge", p2pkh: 30, p2sh: 22 }, 60: { symbol: "eth", ilk: "eth" }, 61: { symbol: "etc", ilk: "eth" }, 700: { symbol: "xdai", ilk: "eth" } };
    function tr(e) { return (0, We.hexZeroPad)(kt.O$.from(e).toHexString(), 32); }
    function rr(e) { return Pt.Base58.encode((0, We.concat)([e, (0, We.hexDataSlice)((0, Ye.JQ)((0, Ye.JQ)(e)), 0, 4)])); }
    var nr = (function () {
        function nr(e, t, r) {
            (0, St.defineReadOnly)(this, "provider", e), (0, St.defineReadOnly)(this, "name", r), (0, St.defineReadOnly)(this, "address", e.formatter.address(t));
        }
        nr.prototype._fetchBytes = function (e, t) { return jt(this, void 0, void 0, (function () { var r, n, i, o; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = { to: this.address, data: (0, We.hexConcat)([e, (0, Nt.V)(this.name), t || "0x"]) };
                    return [4, this.provider.call(r)];
                case 1:
                    n = _a.sent();
                    if ("0x" === n)
                        return [2, null];
                    i = kt.O$.from((0, We.hexDataSlice)(n, 0, 32)).toNumber(), o = kt.O$.from((0, We.hexDataSlice)(n, i, i + 32)).toNumber();
                    return [2, (0, We.hexDataSlice)(n, i + 32, i + 32 + o)];
            }
        }); })); };
        nr.prototype._getAddress = function (e, t) { var r = er[String(e)]; if (null == r && Kt.throwError("unsupported coin type: " + e, wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "getAddress(" + e + ")" }), "eth" === r.ilk)
            return this.provider.formatter.address(t); var n = (0, We.arrayify)(t); if (null != r.p2pkh) {
            var e_156 = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (e_156) {
                var t_109 = parseInt(e_156[1], 16);
                if (e_156[2].length === 2 * t_109 && t_109 >= 1 && t_109 <= 75)
                    return rr((0, We.concat)([[r.p2pkh], "0x" + e_156[2]]));
            }
        } if (null != r.p2sh) {
            var e_157 = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (e_157) {
                var t_110 = parseInt(e_157[1], 16);
                if (e_157[2].length === 2 * t_110 && t_110 >= 1 && t_110 <= 75)
                    return rr((0, We.concat)([[r.p2sh], "0x" + e_157[2]]));
            }
        } if (null != r.prefix) {
            var e_158 = n[1];
            var t_111 = n[0];
            if (0 === t_111 ? 20 !== e_158 && 32 !== e_158 && (t_111 = -1) : t_111 = -1, t_111 >= 0 && n.length === 2 + e_158 && e_158 >= 1 && e_158 <= 75) {
                var e_159 = Ht().toWords(n.slice(2));
                return e_159.unshift(t_111), Ht().encode(r.prefix, e_159);
            }
        } return null; };
        nr.prototype.getAddress = function (e) { return jt(this, void 0, void 0, (function () { var e_160, t_112, t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(null == e && (e = 60), 60 === e)) return [3, 2];
                    e_160 = { to: this.address, data: "0x3b3b57de" + (0, Nt.V)(this.name).substring(2) };
                    return [4, this.provider.call(e_160)];
                case 1:
                    t_112 = _a.sent();
                    return [2, "0x" === t_112 || t_112 === Ft.R ? null : this.provider.formatter.callAddress(t_112)];
                case 2: return [4, this._fetchBytes("0xf1cb7e06", tr(e))];
                case 3:
                    t = _a.sent();
                    if (null == t || "0x" === t)
                        return [2, null];
                    r = this._getAddress(e, t);
                    return [2, (null == r && Kt.throwError("invalid or unsupported coin data", wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "getAddress(" + e + ")", coinType: e, data: t }), r)];
            }
        }); })); };
        nr.prototype.getContentHash = function () { return jt(this, void 0, void 0, (function () { var e, t, e_161, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this._fetchBytes("0xbc1c58d1")];
                case 1:
                    e = _a.sent();
                    if (null == e || "0x" === e)
                        return [2, null];
                    t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                    if (t) {
                        e_161 = parseInt(t[3], 16);
                        if (t[4].length === 2 * e_161)
                            return [2, "ipfs://" + Pt.Base58.encode("0x" + t[1])];
                    }
                    r = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                    return [2, r && 64 === r[1].length ? "bzz://" + r[1] : Kt.throwError("invalid or unsupported content hash data", wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "getContentHash()", data: e })];
            }
        }); })); };
        nr.prototype.getText = function (e) { return jt(this, void 0, void 0, (function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = (0, Mt.Y0)(e);
                    t = (0, We.concat)([tr(64), tr(t.length), t]), t.length % 32 != 0 && (t = (0, We.concat)([t, (0, We.hexZeroPad)("0x", 32 - e.length % 32)]));
                    return [4, this._fetchBytes("0x59d1d43c", (0, We.hexlify)(t))];
                case 1:
                    r = _a.sent();
                    return [2, null == r || "0x" === r ? null : (0, Mt.ZN)(r)];
            }
        }); })); };
        return nr;
    }());
    var ir = null, or = 1;
    var ar = (function (_super) {
        __extends(ar, _super);
        function ar(e) {
            var _newTarget = this.constructor;
            var _this = this;
            if (Kt.checkNew(_newTarget, Lt.zt), _this = _super.call(this) || this, _this._events = [], _this._emitted = { block: -2 }, _this.formatter = _newTarget.getFormatter(), (0, St.defineReadOnly)(_this, "anyNetwork", "any" === e), _this.anyNetwork && (e = _this.detectNetwork()), e instanceof Promise)
                _this._networkPromise = e, e.catch((function (e) { })), _this._ready().catch((function (e) { }));
            else {
                var t_113 = (0, St.getStatic)(_newTarget, "getNetwork")(e);
                t_113 ? ((0, St.defineReadOnly)(_this, "_network", t_113), _this.emit("network", t_113, null)) : Kt.throwArgumentError("invalid network", "network", e);
            }
            _this._maxInternalBlockNumber = -1024, _this._lastBlockNumber = -2, _this._pollingInterval = 4e3, _this._fastQueryDate = 0;
            return _this;
        }
        ar.prototype._ready = function () { return jt(this, void 0, void 0, (function () { var e_163, e_162, _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(null == this._network)) return [3, 7];
                    e_163 = null;
                    if (!this._networkPromise) return [3, 4];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4, this._networkPromise];
                case 2:
                    e_163 = _b.sent();
                    return [3, 4];
                case 3:
                    e_162 = _b.sent();
                    return [3, 4];
                case 4:
                    _a = null == e_163;
                    if (!_a) return [3, 6];
                    return [4, this.detectNetwork()];
                case 5:
                    _a = (e_163 = _b.sent());
                    _b.label = 6;
                case 6:
                    _a, e_163 || Kt.throwError("no network detected", wt.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = e_163 : (0, St.defineReadOnly)(this, "_network", e_163), this.emit("network", e_163, null));
                    _b.label = 7;
                case 7: return [2, this._network];
            }
        }); })); };
        Object.defineProperty(ar.prototype, "ready", {
            get: function () {
                var _this = this;
                return (0, Ct.poll)((function () { return _this._ready().then((function (e) { return e; }), (function (e) { if (e.code !== wt.Logger.errors.NETWORK_ERROR || "noNetwork" !== e.event)
                    throw e; })); }));
            },
            enumerable: false,
            configurable: true
        });
        ar.getFormatter = function () { return null == ir && (ir = new zt), ir; };
        ar.getNetwork = function (e) { return function (e) { if (null == e)
            return null; if ("number" == typeof e) {
            for (var t_114 in _t) {
                var r_89 = _t[t_114];
                if (r_89.chainId === e)
                    return { name: r_89.name, chainId: r_89.chainId, ensAddress: r_89.ensAddress || null, _defaultProvider: r_89._defaultProvider || null };
            }
            return { chainId: e, name: "unknown" };
        } if ("string" == typeof e) {
            var t_115 = _t[e];
            return null == t_115 ? null : { name: t_115.name, chainId: t_115.chainId, ensAddress: t_115.ensAddress, _defaultProvider: t_115._defaultProvider || null };
        } var t = _t[e.name]; if (!t)
            return "number" != typeof e.chainId && xt.throwArgumentError("invalid network chainId", "network", e), e; 0 !== e.chainId && e.chainId !== t.chainId && xt.throwArgumentError("network chainId mismatch", "network", e); var r = e._defaultProvider || null; var n; return null == r && t._defaultProvider && (r = (n = t._defaultProvider) && "function" == typeof n.renetwork ? t._defaultProvider.renetwork(e) : t._defaultProvider), { name: e.name, chainId: t.chainId, ensAddress: e.ensAddress || t.ensAddress || null, _defaultProvider: r }; }(null == e ? "homestead" : e); };
        ar.prototype._getInternalBlockNumber = function (e) { return jt(this, void 0, void 0, (function () {
            var t_116, r_90, e_164, t, r;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._ready()];
                    case 1:
                        if (!(_a.sent(), e > 0)) return [3, 7];
                        _a.label = 2;
                    case 2:
                        if (!this._internalBlockNumber) return [3, 7];
                        t_116 = this._internalBlockNumber;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4, t_116];
                    case 4:
                        r_90 = _a.sent();
                        if (Wt() - r_90.respTime <= e)
                            return [2, r_90.blockNumber];
                        return [3, 7];
                    case 5:
                        e_164 = _a.sent();
                        if (this._internalBlockNumber === t_116)
                            return [3, 7];
                        return [3, 6];
                    case 6: return [3, 2];
                    case 7:
                        t = Wt(), r = (0, St.resolveProperties)({ blockNumber: this.perform("getBlockNumber", {}), networkError: this.getNetwork().then((function (e) { return null; }), (function (e) { return e; })) }).then((function (_a) {
                            var e = _a.blockNumber, n = _a.networkError;
                            if (n)
                                throw _this._internalBlockNumber === r && (_this._internalBlockNumber = null), n;
                            var i = Wt();
                            return (e = kt.O$.from(e).toNumber()) < _this._maxInternalBlockNumber && (e = _this._maxInternalBlockNumber), _this._maxInternalBlockNumber = e, _this._setFastBlockNumber(e), { blockNumber: e, reqTime: t, respTime: i };
                        }));
                        this._internalBlockNumber = r, r.catch((function (e) { _this._internalBlockNumber === r && (_this._internalBlockNumber = null); }));
                        return [4, r];
                    case 8: return [2, (_a.sent()).blockNumber];
                }
            });
        })); };
        ar.prototype.poll = function () { return jt(this, void 0, void 0, (function () {
            var e, t, r, e_165, e_166;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e = or++, t = [];
                        r = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this._getInternalBlockNumber(100 + this.pollingInterval / 2)];
                    case 2:
                        r = _a.sent();
                        return [3, 4];
                    case 3:
                        e_165 = _a.sent();
                        return [2, void this.emit("error", e_165)];
                    case 4:
                        if (this._setFastBlockNumber(r), this.emit("poll", e, r), r !== this._lastBlockNumber) {
                            if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3)
                                Kt.warn("network block skew detected; skipping block events"), this.emit("error", Kt.makeError("network block skew detected", wt.Logger.errors.NETWORK_ERROR, { blockNumber: r, event: "blockSkew", previousBlockNumber: this._emitted.block })), this.emit("block", r);
                            else
                                for (e_166 = this._emitted.block + 1; e_166 <= r; e_166++)
                                    this.emit("block", e_166);
                            this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach((function (e) { if ("block" === e)
                                return; var t = _this._emitted[e]; "pending" !== t && r - t > 12 && delete _this._emitted[e]; }))), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach((function (e) { switch (e.type) {
                                case "tx": {
                                    var r_91 = e.hash;
                                    var n_68 = _this.getTransactionReceipt(r_91).then((function (e) { return e && null != e.blockNumber ? (_this._emitted["t:" + r_91] = e.blockNumber, _this.emit(r_91, e), null) : null; })).catch((function (e) { _this.emit("error", e); }));
                                    t.push(n_68);
                                    break;
                                }
                                case "filter": {
                                    var n_69 = e.filter;
                                    n_69.fromBlock = _this._lastBlockNumber + 1, n_69.toBlock = r;
                                    var i_42 = _this.getLogs(n_69).then((function (e) { 0 !== e.length && e.forEach((function (e) { _this._emitted["b:" + e.blockHash] = e.blockNumber, _this._emitted["t:" + e.transactionHash] = e.blockNumber, _this.emit(n_69, e); })); })).catch((function (e) { _this.emit("error", e); }));
                                    t.push(i_42);
                                    break;
                                }
                            } })), this._lastBlockNumber = r, Promise.all(t).then((function () { _this.emit("didPoll", e); })).catch((function (e) { _this.emit("error", e); }));
                        }
                        else
                            this.emit("didPoll", e);
                        return [2];
                }
            });
        })); };
        ar.prototype.resetEventsBlock = function (e) { this._lastBlockNumber = e - 1, this.polling && this.poll(); };
        Object.defineProperty(ar.prototype, "network", {
            get: function () { return this._network; },
            enumerable: false,
            configurable: true
        });
        ar.prototype.detectNetwork = function () { return jt(this, void 0, void 0, (function () { return __generator(this, function (_a) {
            return [2, Kt.throwError("provider does not support network detection", wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "provider.detectNetwork" })];
        }); })); };
        ar.prototype.getNetwork = function () { return jt(this, void 0, void 0, (function () { var e, t, r_92; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this._ready()];
                case 1:
                    e = _a.sent();
                    return [4, this.detectNetwork()];
                case 2:
                    t = _a.sent();
                    if (!(e.chainId !== t.chainId)) return [3, 5];
                    if (!this.anyNetwork) return [3, 4];
                    this._network = t, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", t, e);
                    return [4, (0, new Promise((function (e) { setTimeout(e, 0); })))];
                case 3: return [2, (_a.sent(), this._network)];
                case 4:
                    r_92 = Kt.makeError("underlying network changed", wt.Logger.errors.NETWORK_ERROR, { event: "changed", network: e, detectedNetwork: t });
                    throw this.emit("error", r_92), r_92;
                case 5: return [2, e];
            }
        }); })); };
        Object.defineProperty(ar.prototype, "blockNumber", {
            get: function () {
                var _this = this;
                return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((function (e) { _this._setFastBlockNumber(e); }), (function (e) { })), null != this._fastBlockNumber ? this._fastBlockNumber : -1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ar.prototype, "polling", {
            get: function () { return null != this._poller; },
            set: function (e) {
                var _this = this;
                e && !this._poller ? (this._poller = setInterval((function () { _this.poll(); }), this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout((function () { _this.poll(), _this._bootstrapPoll = setTimeout((function () { _this._poller || _this.poll(), _this._bootstrapPoll = null; }), _this.pollingInterval); }), 0))) : !e && this._poller && (clearInterval(this._poller), this._poller = null);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ar.prototype, "pollingInterval", {
            get: function () { return this._pollingInterval; },
            set: function (e) {
                var _this = this;
                if ("number" != typeof e || e <= 0 || parseInt(String(e)) != e)
                    throw new Error("invalid polling interval");
                this._pollingInterval = e, this._poller && (clearInterval(this._poller), this._poller = setInterval((function () { _this.poll(); }), this._pollingInterval));
            },
            enumerable: false,
            configurable: true
        });
        ar.prototype._getFastBlockNumber = function () {
            var _this = this;
            var e = Wt();
            return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then((function (e) { return ((null == _this._fastBlockNumber || e > _this._fastBlockNumber) && (_this._fastBlockNumber = e), _this._fastBlockNumber); }))), this._fastBlockNumberPromise;
        };
        ar.prototype._setFastBlockNumber = function (e) { null != this._fastBlockNumber && e < this._fastBlockNumber || (this._fastQueryDate = Wt(), (null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e))); };
        ar.prototype.waitForTransaction = function (e, t, r) { return jt(this, void 0, void 0, (function () {
            var n;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        null == t && (t = 1);
                        return [4, this.getTransactionReceipt(e)];
                    case 1:
                        n = _a.sent();
                        return [2, (n ? n.confirmations : 0) >= t ? n : new Promise((function (n, i) { var o = null, a = !1; var s = function (r) { r.confirmations < t || (o && clearTimeout(o), a || (a = !0, _this.removeListener(e, s), n(r))); }; _this.on(e, s), "number" == typeof r && r > 0 && (o = setTimeout((function () { a || (o = null, a = !0, _this.removeListener(e, s), i(Kt.makeError("timeout exceeded", wt.Logger.errors.TIMEOUT, { timeout: r }))); }), r), o.unref && o.unref()); }))];
                }
            });
        })); };
        ar.prototype.getBlockNumber = function () { return jt(this, void 0, void 0, (function () { return __generator(this, function (_a) {
            return [2, this._getInternalBlockNumber(0)];
        }); })); };
        ar.prototype.getGasPrice = function () { return jt(this, void 0, void 0, (function () { var e; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, this.perform("getGasPrice", {})];
                case 2:
                    e = _a.sent();
                    try {
                        return [2, kt.O$.from(e)];
                    }
                    catch (t) {
                        return [2, Kt.throwError("bad result from backend", wt.Logger.errors.SERVER_ERROR, { method: "getGasPrice", result: e, error: t })];
                    }
                    return [2];
            }
        }); })); };
        ar.prototype.getBalance = function (e, t) { return jt(this, void 0, void 0, (function () { var r, n; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, (0, St.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) })];
                case 2:
                    r = _a.sent();
                    return [4, this.perform("getBalance", r)];
                case 3:
                    n = _a.sent();
                    try {
                        return [2, kt.O$.from(n)];
                    }
                    catch (e) {
                        return [2, Kt.throwError("bad result from backend", wt.Logger.errors.SERVER_ERROR, { method: "getBalance", params: r, result: n, error: e })];
                    }
                    return [2];
            }
        }); })); };
        ar.prototype.getTransactionCount = function (e, t) { return jt(this, void 0, void 0, (function () { var r, n; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, (0, St.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) })];
                case 2:
                    r = _a.sent();
                    return [4, this.perform("getTransactionCount", r)];
                case 3:
                    n = _a.sent();
                    try {
                        return [2, kt.O$.from(n).toNumber()];
                    }
                    catch (e) {
                        return [2, Kt.throwError("bad result from backend", wt.Logger.errors.SERVER_ERROR, { method: "getTransactionCount", params: r, result: n, error: e })];
                    }
                    return [2];
            }
        }); })); };
        ar.prototype.getCode = function (e, t) { return jt(this, void 0, void 0, (function () { var r, n; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, (0, St.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) })];
                case 2:
                    r = _a.sent();
                    return [4, this.perform("getCode", r)];
                case 3:
                    n = _a.sent();
                    try {
                        return [2, (0, We.hexlify)(n)];
                    }
                    catch (e) {
                        return [2, Kt.throwError("bad result from backend", wt.Logger.errors.SERVER_ERROR, { method: "getCode", params: r, result: n, error: e })];
                    }
                    return [2];
            }
        }); })); };
        ar.prototype.getStorageAt = function (e, t, r) { return jt(this, void 0, void 0, (function () { var n, i; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, (0, St.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(r), position: Promise.resolve(t).then((function (e) { return (0, We.hexValue)(e); })) })];
                case 2:
                    n = _a.sent();
                    return [4, this.perform("getStorageAt", n)];
                case 3:
                    i = _a.sent();
                    try {
                        return [2, (0, We.hexlify)(i)];
                    }
                    catch (e) {
                        return [2, Kt.throwError("bad result from backend", wt.Logger.errors.SERVER_ERROR, { method: "getStorageAt", params: n, result: i, error: e })];
                    }
                    return [2];
            }
        }); })); };
        ar.prototype._wrapTransaction = function (e, t) {
            var _this = this;
            if (null != t && 32 !== (0, We.hexDataLength)(t))
                throw new Error("invalid response - sendTransaction");
            var r = e;
            return null != t && e.hash !== t && Kt.throwError("Transaction hash mismatch from Provider.sendTransaction.", wt.Logger.errors.UNKNOWN_ERROR, { expectedHash: e.hash, returnedHash: t }), r.wait = function (t) { return jt(_this, void 0, void 0, (function () { var r; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        0 !== t && (this._emitted["t:" + e.hash] = "pending");
                        return [4, this.waitForTransaction(e.hash, t)];
                    case 1:
                        r = _a.sent();
                        return [2, null == r && 0 === t ? null : (this._emitted["t:" + e.hash] = r.blockNumber, 0 === r.status && Kt.throwError("transaction failed", wt.Logger.errors.CALL_EXCEPTION, { transactionHash: e.hash, transaction: e, receipt: r }), r)];
                }
            }); })); }, r;
        };
        ar.prototype.sendTransaction = function (e) { return jt(this, void 0, void 0, (function () { var t, r, e_168, e_167; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, Promise.resolve(e).then((function (e) { return (0, We.hexlify)(e); }))];
                case 2:
                    t = _a.sent(), r = this.formatter.transaction(e);
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4, this.perform("sendTransaction", { signedTransaction: t })];
                case 4:
                    e_168 = _a.sent();
                    return [2, this._wrapTransaction(r, e_168)];
                case 5:
                    e_167 = _a.sent();
                    throw e_167.transaction = r, e_167.transactionHash = r.hash, e_167;
                case 6: return [2];
            }
        }); })); };
        ar.prototype._getTransactionRequest = function (e) { return jt(this, void 0, void 0, (function () {
            var t, r, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, e];
                    case 1:
                        t = _c.sent(), r = {};
                        ["from", "to"].forEach((function (e) { null != t[e] && (r[e] = Promise.resolve(t[e]).then((function (e) { return e ? _this._getAddress(e) : null; }))); })), ["gasLimit", "gasPrice", "value"].forEach((function (e) { null != t[e] && (r[e] = Promise.resolve(t[e]).then((function (e) { return e ? kt.O$.from(e) : null; }))); })), ["data"].forEach((function (e) { null != t[e] && (r[e] = Promise.resolve(t[e]).then((function (e) { return e ? (0, We.hexlify)(e) : null; }))); }));
                        _b = (_a = this.formatter).transactionRequest;
                        return [4, (0, St.resolveProperties)(r)];
                    case 2: return [2, _b.apply(_a, [_c.sent()])];
                }
            });
        })); };
        ar.prototype._getFilter = function (e) { return jt(this, void 0, void 0, (function () {
            var t, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, e];
                    case 1:
                        e = _c.sent();
                        t = {};
                        null != e.address && (t.address = this._getAddress(e.address)), ["blockHash", "topics"].forEach((function (r) { null != e[r] && (t[r] = e[r]); })), ["fromBlock", "toBlock"].forEach((function (r) { null != e[r] && (t[r] = _this._getBlockTag(e[r])); }));
                        _b = (_a = this.formatter).filter;
                        return [4, (0, St.resolveProperties)(t)];
                    case 2: return [2, _b.apply(_a, [_c.sent()])];
                }
            });
        })); };
        ar.prototype.call = function (e, t) { return jt(this, void 0, void 0, (function () { var r, n; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, (0, St.resolveProperties)({ transaction: this._getTransactionRequest(e), blockTag: this._getBlockTag(t) })];
                case 2:
                    r = _a.sent();
                    return [4, this.perform("call", r)];
                case 3:
                    n = _a.sent();
                    try {
                        return [2, (0, We.hexlify)(n)];
                    }
                    catch (e) {
                        return [2, Kt.throwError("bad result from backend", wt.Logger.errors.SERVER_ERROR, { method: "call", params: r, result: n, error: e })];
                    }
                    return [2];
            }
        }); })); };
        ar.prototype.estimateGas = function (e) { return jt(this, void 0, void 0, (function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, (0, St.resolveProperties)({ transaction: this._getTransactionRequest(e) })];
                case 2:
                    t = _a.sent();
                    return [4, this.perform("estimateGas", t)];
                case 3:
                    r = _a.sent();
                    try {
                        return [2, kt.O$.from(r)];
                    }
                    catch (e) {
                        return [2, Kt.throwError("bad result from backend", wt.Logger.errors.SERVER_ERROR, { method: "estimateGas", params: t, result: r, error: e })];
                    }
                    return [2];
            }
        }); })); };
        ar.prototype._getAddress = function (e) { return jt(this, void 0, void 0, (function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.resolveName(e)];
                case 1:
                    t = _a.sent();
                    return [2, (null == t && Kt.throwError("ENS name not configured", wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "resolveName(" + JSON.stringify(e) + ")" }), t)];
            }
        }); })); };
        ar.prototype._getBlock = function (e, t) { return jt(this, void 0, void 0, (function () {
            var r, n, _a, _b, _c, t_117;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, this.getNetwork()];
                    case 1:
                        _d.sent();
                        return [4, e];
                    case 2:
                        e = _d.sent();
                        r = -128;
                        n = { includeTransactions: !!t };
                        if (!(0, We.isHexString)(e, 32)) return [3, 3];
                        n.blockHash = e;
                        return [3, 6];
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        _a = n;
                        _c = (_b = this.formatter).blockTag;
                        return [4, this._getBlockTag(e)];
                    case 4:
                        _a.blockTag = _c.apply(_b, [_d.sent()]), (0, We.isHexString)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16));
                        return [3, 6];
                    case 5:
                        t_117 = _d.sent();
                        Kt.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e);
                        return [3, 6];
                    case 6: return [2, (0, Ct.poll)((function () { return jt(_this, void 0, void 0, (function () { var e, t_118, r_93, n_70, _a, e_169; return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4, this.perform("getBlock", n)];
                                case 1:
                                    e = _b.sent();
                                    if (null == e)
                                        return [2, null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0];
                                    if (!t) return [3, 8];
                                    t_118 = null;
                                    r_93 = 0;
                                    _b.label = 2;
                                case 2:
                                    if (!(r_93 < e.transactions.length)) return [3, 7];
                                    n_70 = e.transactions[r_93];
                                    if (!(null == n_70.blockNumber)) return [3, 3];
                                    n_70.confirmations = 0;
                                    return [3, 6];
                                case 3:
                                    if (!(null == n_70.confirmations)) return [3, 6];
                                    _a = null == t_118;
                                    if (!_a) return [3, 5];
                                    return [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)];
                                case 4:
                                    _a = (t_118 = _b.sent());
                                    _b.label = 5;
                                case 5:
                                    _a;
                                    e_169 = t_118 - n_70.blockNumber + 1;
                                    e_169 <= 0 && (e_169 = 1), n_70.confirmations = e_169;
                                    _b.label = 6;
                                case 6:
                                    r_93++;
                                    return [3, 2];
                                case 7: return [2, this.formatter.blockWithTransactions(e)];
                                case 8: return [2, this.formatter.block(e)];
                            }
                        }); })); }), { oncePoll: this })];
                }
            });
        })); };
        ar.prototype.getBlock = function (e) { return this._getBlock(e, !1); };
        ar.prototype.getBlockWithTransactions = function (e) { return this._getBlock(e, !0); };
        ar.prototype.getTransaction = function (e) { return jt(this, void 0, void 0, (function () {
            var t;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getNetwork()];
                    case 1:
                        _a.sent();
                        return [4, e];
                    case 2:
                        e = _a.sent();
                        t = { transactionHash: this.formatter.hash(e, !0) };
                        return [2, (0, Ct.poll)((function () { return jt(_this, void 0, void 0, (function () { var r, n, e_170; return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.perform("getTransaction", t)];
                                    case 1:
                                        r = _a.sent();
                                        if (null == r)
                                            return [2, null == this._emitted["t:" + e] ? null : void 0];
                                        n = this.formatter.transactionResponse(r);
                                        if (!(null == n.blockNumber)) return [3, 2];
                                        n.confirmations = 0;
                                        return [3, 4];
                                    case 2:
                                        if (!(null == n.confirmations)) return [3, 4];
                                        return [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)];
                                    case 3:
                                        e_170 = (_a.sent()) - n.blockNumber + 1;
                                        e_170 <= 0 && (e_170 = 1), n.confirmations = e_170;
                                        _a.label = 4;
                                    case 4: return [2, this._wrapTransaction(n)];
                                }
                            }); })); }), { oncePoll: this })];
                }
            });
        })); };
        ar.prototype.getTransactionReceipt = function (e) { return jt(this, void 0, void 0, (function () {
            var t;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getNetwork()];
                    case 1:
                        _a.sent();
                        return [4, e];
                    case 2:
                        e = _a.sent();
                        t = { transactionHash: this.formatter.hash(e, !0) };
                        return [2, (0, Ct.poll)((function () { return jt(_this, void 0, void 0, (function () { var r, n, e_171; return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.perform("getTransactionReceipt", t)];
                                    case 1:
                                        r = _a.sent();
                                        if (null == r)
                                            return [2, null == this._emitted["t:" + e] ? null : void 0];
                                        if (null == r.blockHash)
                                            return [2];
                                        n = this.formatter.receipt(r);
                                        if (!(null == n.blockNumber)) return [3, 2];
                                        n.confirmations = 0;
                                        return [3, 4];
                                    case 2:
                                        if (!(null == n.confirmations)) return [3, 4];
                                        return [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)];
                                    case 3:
                                        e_171 = (_a.sent()) - n.blockNumber + 1;
                                        e_171 <= 0 && (e_171 = 1), n.confirmations = e_171;
                                        _a.label = 4;
                                    case 4: return [2, n];
                                }
                            }); })); }), { oncePoll: this })];
                }
            });
        })); };
        ar.prototype.getLogs = function (e) { return jt(this, void 0, void 0, (function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    _a.sent();
                    return [4, (0, St.resolveProperties)({ filter: this._getFilter(e) })];
                case 2:
                    t = _a.sent();
                    return [4, this.perform("getLogs", t)];
                case 3:
                    r = _a.sent();
                    return [2, (r.forEach((function (e) { null == e.removed && (e.removed = !1); })), zt.arrayOf(this.formatter.filterLog.bind(this.formatter))(r))];
            }
        }); })); };
        ar.prototype.getEtherPrice = function () { return jt(this, void 0, void 0, (function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.getNetwork()];
                case 1: return [2, (_a.sent(), this.perform("getEtherPrice", {}))];
            }
        }); })); };
        ar.prototype._getBlockTag = function (e) { return jt(this, void 0, void 0, (function () { var _a, t_119; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = "number";
                    return [4, e];
                case 1:
                    if (!(_a == typeof (e = _b.sent()) && e < 0)) return [3, 3];
                    e % 1 && Kt.throwArgumentError("invalid BlockTag", "blockTag", e);
                    return [4, this._getInternalBlockNumber(100 + 2 * this.pollingInterval)];
                case 2:
                    t_119 = _b.sent();
                    return [2, (t_119 += e, t_119 < 0 && (t_119 = 0), this.formatter.blockTag(t_119))];
                case 3: return [2, this.formatter.blockTag(e)];
            }
        }); })); };
        ar.prototype.getResolver = function (e) { return jt(this, void 0, void 0, (function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this._getResolver(e)];
                case 1:
                    t = _a.sent();
                    return [2, null == t ? null : new nr(this, t, e)];
            }
        }); })); };
        ar.prototype._getResolver = function (e) { return jt(this, void 0, void 0, (function () { var t, r, _a, _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4, this.getNetwork()];
                case 1:
                    t = _c.sent();
                    t.ensAddress || Kt.throwError("network does not support ENS", wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "ENS", network: t.name });
                    r = { to: t.ensAddress, data: "0x0178b8bf" + (0, Nt.V)(e).substring(2) };
                    _b = (_a = this.formatter).callAddress;
                    return [4, this.call(r)];
                case 2: return [2, _b.apply(_a, [_c.sent()])];
            }
        }); })); };
        ar.prototype.resolveName = function (e) { return jt(this, void 0, void 0, (function () { var t, _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e];
                case 1:
                    e = _b.sent();
                    try {
                        return [2, Promise.resolve(this.formatter.address(e))];
                    }
                    catch (t) {
                        if ((0, We.isHexString)(e))
                            throw t;
                    }
                    "string" != typeof e && Kt.throwArgumentError("invalid ENS name", "name", e);
                    return [4, this.getResolver(e)];
                case 2:
                    t = _b.sent();
                    if (!t) return [3, 4];
                    return [4, t.getAddress()];
                case 3:
                    _a = _b.sent();
                    return [3, 5];
                case 4:
                    _a = null;
                    _b.label = 5;
                case 5: return [2, _a];
            }
        }); })); };
        ar.prototype.lookupAddress = function (e) { return jt(this, void 0, void 0, (function () { var t, r, n, _a, i, o; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e];
                case 1:
                    e = _b.sent();
                    t = (e = this.formatter.address(e)).substring(2).toLowerCase() + ".addr.reverse";
                    return [4, this._getResolver(t)];
                case 2:
                    r = _b.sent();
                    if (!r)
                        return [2, null];
                    _a = (0, We.arrayify);
                    return [4, this.call({ to: r, data: "0x691f3431" + (0, Nt.V)(t).substring(2) })];
                case 3:
                    n = _a.apply(void 0, [_b.sent()]);
                    if (n.length < 32 || !kt.O$.from(n.slice(0, 32)).eq(32))
                        return [2, null];
                    if (n = n.slice(32), n.length < 32)
                        return [2, null];
                    i = kt.O$.from(n.slice(0, 32)).toNumber();
                    if (n = n.slice(32), i > n.length)
                        return [2, null];
                    o = (0, Mt.ZN)(n.slice(0, i));
                    return [4, this.resolveName(o)];
                case 4: return [2, (_b.sent()) != e ? null : o];
            }
        }); })); };
        ar.prototype.perform = function (e, t) { return Kt.throwError(e + " not implemented", wt.Logger.errors.NOT_IMPLEMENTED, { operation: e }); };
        ar.prototype._startEvent = function (e) { this.polling = this._events.filter((function (e) { return e.pollable(); })).length > 0; };
        ar.prototype._stopEvent = function (e) { this.polling = this._events.filter((function (e) { return e.pollable(); })).length > 0; };
        ar.prototype._addEventListener = function (e, t, r) { var n = new $t(Qt(e), t, r); return this._events.push(n), this._startEvent(n), this; };
        ar.prototype.on = function (e, t) { return this._addEventListener(e, t, !1); };
        ar.prototype.once = function (e, t) { return this._addEventListener(e, t, !0); };
        ar.prototype.emit = function (e) {
            var _this = this;
            var t = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                t[_i - 1] = arguments[_i];
            }
            var r = !1, n = [], i = Qt(e);
            return this._events = this._events.filter((function (e) { return e.tag !== i || (setTimeout((function () { e.listener.apply(_this, t); }), 0), r = !0, !e.once || (n.push(e), !1)); })), n.forEach((function (e) { _this._stopEvent(e); })), r;
        };
        ar.prototype.listenerCount = function (e) { if (!e)
            return this._events.length; var t = Qt(e); return this._events.filter((function (e) { return e.tag === t; })).length; };
        ar.prototype.listeners = function (e) { if (null == e)
            return this._events.map((function (e) { return e.listener; })); var t = Qt(e); return this._events.filter((function (e) { return e.tag === t; })).map((function (e) { return e.listener; })); };
        ar.prototype.off = function (e, t) {
            var _this = this;
            if (null == t)
                return this.removeAllListeners(e);
            var r = [];
            var n = !1, i = Qt(e);
            return this._events = this._events.filter((function (e) { return e.tag !== i || e.listener != t || !!n || (n = !0, r.push(e), !1); })), r.forEach((function (e) { _this._stopEvent(e); })), this;
        };
        ar.prototype.removeAllListeners = function (e) {
            var _this = this;
            var t = [];
            if (null == e)
                t = this._events, this._events = [];
            else {
                var r_94 = Qt(e);
                this._events = this._events.filter((function (e) { return e.tag !== r_94 || (t.push(e), !1); }));
            }
            return t.forEach((function (e) { _this._stopEvent(e); })), this;
        };
        return ar;
    }(Lt.zt));
    var sr = function (e, t, r, n) { return new (r || (r = Promise))((function (i, o) { function a(e) { try {
        c(n.next(e));
    }
    catch (e) {
        o(e);
    } } function s(e) { try {
        c(n.throw(e));
    }
    catch (e) {
        o(e);
    } } function c(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) { e(t); }))).then(a, s); } c((n = n.apply(e, t || [])).next()); })); };
    var cr = new wt.Logger(Et), lr = ["call", "estimateGas"];
    function ur(e, t, r) { if ("call" === e && t.code === wt.Logger.errors.SERVER_ERROR) {
        var e_172 = t.error;
        if (e_172 && e_172.message.match("reverted") && (0, We.isHexString)(e_172.data))
            return e_172.data;
    } var n = t.message; t.code === wt.Logger.errors.SERVER_ERROR && t.error && "string" == typeof t.error.message ? n = t.error.message : "string" == typeof t.body ? n = t.body : "string" == typeof t.responseText && (n = t.responseText), n = (n || "").toLowerCase(); var i = r.transaction || r.signedTransaction; throw n.match(/insufficient funds/) && cr.throwError("insufficient funds for intrinsic transaction cost", wt.Logger.errors.INSUFFICIENT_FUNDS, { error: t, method: e, transaction: i }), n.match(/nonce too low/) && cr.throwError("nonce has already been used", wt.Logger.errors.NONCE_EXPIRED, { error: t, method: e, transaction: i }), n.match(/replacement transaction underpriced/) && cr.throwError("replacement fee too low", wt.Logger.errors.REPLACEMENT_UNDERPRICED, { error: t, method: e, transaction: i }), lr.indexOf(e) >= 0 && n.match(/gas required exceeds allowance|always failing transaction|execution reverted/) && cr.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", wt.Logger.errors.UNPREDICTABLE_GAS_LIMIT, { error: t, method: e, transaction: i }), t; }
    function fr(e) { return new Promise((function (t) { setTimeout(t, e); })); }
    function hr(e) { if (e.error) {
        var t_120 = new Error(e.error.message);
        throw t_120.code = e.error.code, t_120.data = e.error.data, t_120;
    } return e.result; }
    function dr(e) { return e ? e.toLowerCase() : e; }
    var pr = {};
    var gr = (function (_super) {
        __extends(gr, _super);
        function gr(e, t, r) {
            var _newTarget = this.constructor;
            var _this = this;
            if (cr.checkNew(_newTarget, gr), _this = _super.call(this) || this, e !== pr)
                throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
            (0, St.defineReadOnly)(_this, "provider", t), null == r && (r = 0), "string" == typeof r ? ((0, St.defineReadOnly)(_this, "_address", _this.provider.formatter.address(r)), (0, St.defineReadOnly)(_this, "_index", null)) : "number" == typeof r ? ((0, St.defineReadOnly)(_this, "_index", r), (0, St.defineReadOnly)(_this, "_address", null)) : cr.throwArgumentError("invalid address or index", "addressOrIndex", r);
            return _this;
        }
        gr.prototype.connect = function (e) { return cr.throwError("cannot alter JSON-RPC Signer connection", wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "connect" }); };
        gr.prototype.connectUnchecked = function () { return new mr(pr, this.provider, this._address || this._index); };
        gr.prototype.getAddress = function () {
            var _this = this;
            return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((function (e) { return (e.length <= _this._index && cr.throwError("unknown account #" + _this._index, wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "getAddress" }), _this.provider.formatter.address(e[_this._index])); }));
        };
        gr.prototype.sendUncheckedTransaction = function (e) {
            var _this = this;
            e = (0, St.shallowCopy)(e);
            var t = this.getAddress().then((function (e) { return (e && (e = e.toLowerCase()), e); }));
            if (null == e.gasLimit) {
                var r_95 = (0, St.shallowCopy)(e);
                r_95.from = t, e.gasLimit = this.provider.estimateGas(r_95);
            }
            return (0, St.resolveProperties)({ tx: (0, St.resolveProperties)(e), sender: t }).then((function (_a) {
                var t = _a.tx, r = _a.sender;
                null != t.from ? t.from.toLowerCase() !== r && cr.throwArgumentError("from address mismatch", "transaction", e) : t.from = r;
                var n = _this.provider.constructor.hexlifyTransaction(t, { from: !0 });
                return _this.provider.send("eth_sendTransaction", [n]).then((function (e) { return e; }), (function (e) { return ur("sendTransaction", e, n); }));
            }));
        };
        gr.prototype.signTransaction = function (e) { return cr.throwError("signing transactions is unsupported", wt.Logger.errors.UNSUPPORTED_OPERATION, { operation: "signTransaction" }); };
        gr.prototype.sendTransaction = function (e) {
            var _this = this;
            return this.sendUncheckedTransaction(e).then((function (e) { return (0, Ct.poll)((function () { return _this.provider.getTransaction(e).then((function (t) { if (null !== t)
                return _this.provider._wrapTransaction(t, e); })); }), { onceBlock: _this.provider }).catch((function (t) { throw t.transactionHash = e, t; })); }));
        };
        gr.prototype.signMessage = function (e) { return sr(this, void 0, void 0, (function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = "string" == typeof e ? (0, Mt.Y0)(e) : e;
                    return [4, this.getAddress()];
                case 1:
                    r = _a.sent();
                    return [4, this.provider.send("eth_sign", [r.toLowerCase(), (0, We.hexlify)(t)])];
                case 2: return [2, _a.sent()];
            }
        }); })); };
        gr.prototype._signTypedData = function (e, t, r) { return sr(this, void 0, void 0, (function () {
            var n, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Bt.E.resolveNames(e, t, r, (function (e) { return _this.provider.resolveName(e); }))];
                    case 1:
                        n = _a.sent();
                        return [4, this.getAddress()];
                    case 2:
                        i = _a.sent();
                        return [4, this.provider.send("eth_signTypedData_v4", [i.toLowerCase(), JSON.stringify(Bt.E.getPayload(n.domain, t, n.value))])];
                    case 3: return [2, _a.sent()];
                }
            });
        })); };
        gr.prototype.unlock = function (e) { return sr(this, void 0, void 0, (function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = this.provider;
                    return [4, this.getAddress()];
                case 1:
                    r = _a.sent();
                    return [2, t.send("personal_unlockAccount", [r.toLowerCase(), e, null])];
            }
        }); })); };
        return gr;
    }(Tt.E));
    var mr = (function (_super) {
        __extends(mr, _super);
        function mr() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        mr.prototype.sendTransaction = function (e) {
            var _this = this;
            return this.sendUncheckedTransaction(e).then((function (e) { return ({ hash: e, nonce: null, gasLimit: null, gasPrice: null, data: null, value: null, chainId: null, confirmations: 0, from: null, wait: function (t) { return _this.provider.waitForTransaction(e, t); } }); }));
        };
        return mr;
    }(gr));
    var br = { chainId: !0, data: !0, gasLimit: !0, gasPrice: !0, nonce: !0, to: !0, value: !0 };
    var yr = (function (_super) {
        __extends(yr, _super);
        function yr(e, t) {
            var _newTarget = this.constructor;
            var _this = this;
            cr.checkNew(_newTarget, yr);
            var r = t;
            null == r && (r = new Promise((function (e, t) { setTimeout((function () { _this.detectNetwork().then((function (t) { e(t); }), (function (e) { t(e); })); }), 0); }))), _this = _super.call(this, r) || this, e || (e = (0, St.getStatic)(_this.constructor, "defaultUrl")()), "string" == typeof e ? (0, St.defineReadOnly)(_this, "connection", Object.freeze({ url: e })) : (0, St.defineReadOnly)(_this, "connection", Object.freeze((0, St.shallowCopy)(e))), _this._nextId = 42;
            return _this;
        }
        yr.defaultUrl = function () { return "http://localhost:8545"; };
        yr.prototype.detectNetwork = function () { return sr(this, void 0, void 0, (function () { var e, t_121, e_173, t_122; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fr(0)];
                case 1:
                    _a.sent();
                    e = null;
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 9]);
                    return [4, this.send("eth_chainId", [])];
                case 3:
                    e = _a.sent();
                    return [3, 9];
                case 4:
                    t_121 = _a.sent();
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4, this.send("net_version", [])];
                case 6:
                    e = _a.sent();
                    return [3, 8];
                case 7:
                    e_173 = _a.sent();
                    return [3, 8];
                case 8: return [3, 9];
                case 9:
                    if (null != e) {
                        t_122 = (0, St.getStatic)(this.constructor, "getNetwork");
                        try {
                            return [2, t_122(kt.O$.from(e).toNumber())];
                        }
                        catch (t) {
                            return [2, cr.throwError("could not detect network", wt.Logger.errors.NETWORK_ERROR, { chainId: e, event: "invalidNetwork", serverError: t })];
                        }
                    }
                    return [2, cr.throwError("could not detect network", wt.Logger.errors.NETWORK_ERROR, { event: "noNetwork" })];
            }
        }); })); };
        yr.prototype.getSigner = function (e) { return new gr(pr, this, e); };
        yr.prototype.getUncheckedSigner = function (e) { return this.getSigner(e).connectUnchecked(); };
        yr.prototype.listAccounts = function () {
            var _this = this;
            return this.send("eth_accounts", []).then((function (e) { return e.map((function (e) { return _this.formatter.address(e); })); }));
        };
        yr.prototype.send = function (e, t) {
            var _this = this;
            var r = { method: e, params: t, id: this._nextId++, jsonrpc: "2.0" };
            return this.emit("debug", { action: "request", request: (0, St.deepCopy)(r), provider: this }), (0, Ct.fetchJson)(this.connection, JSON.stringify(r), hr).then((function (e) { return (_this.emit("debug", { action: "response", request: r, response: e, provider: _this }), e); }), (function (e) { throw _this.emit("debug", { action: "response", error: e, request: r, provider: _this }), e; }));
        };
        yr.prototype.prepareRequest = function (e, t) { switch (e) {
            case "getBlockNumber": return ["eth_blockNumber", []];
            case "getGasPrice": return ["eth_gasPrice", []];
            case "getBalance": return ["eth_getBalance", [dr(t.address), t.blockTag]];
            case "getTransactionCount": return ["eth_getTransactionCount", [dr(t.address), t.blockTag]];
            case "getCode": return ["eth_getCode", [dr(t.address), t.blockTag]];
            case "getStorageAt": return ["eth_getStorageAt", [dr(t.address), t.position, t.blockTag]];
            case "sendTransaction": return ["eth_sendRawTransaction", [t.signedTransaction]];
            case "getBlock": return t.blockTag ? ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]] : t.blockHash ? ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]] : null;
            case "getTransaction": return ["eth_getTransactionByHash", [t.transactionHash]];
            case "getTransactionReceipt": return ["eth_getTransactionReceipt", [t.transactionHash]];
            case "call": return ["eth_call", [(0, St.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, { from: !0 }), t.blockTag]];
            case "estimateGas": return ["eth_estimateGas", [(0, St.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, { from: !0 })]];
            case "getLogs": return t.filter && null != t.filter.address && (t.filter.address = dr(t.filter.address)), ["eth_getLogs", [t.filter]];
        } return null; };
        yr.prototype.perform = function (e, t) { return sr(this, void 0, void 0, (function () { var r, r_96; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = this.prepareRequest(e, t);
                    null == r && cr.throwError(e + " not implemented", wt.Logger.errors.NOT_IMPLEMENTED, { operation: e });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, this.send(r[0], r[1])];
                case 2: return [2, _a.sent()];
                case 3:
                    r_96 = _a.sent();
                    return [2, ur(e, r_96, t)];
                case 4: return [2];
            }
        }); })); };
        yr.prototype._startEvent = function (e) { "pending" === e.tag && this._startPending(), _super.prototype._startEvent.call(this, e); };
        yr.prototype._startPending = function () { if (null != this._pendingFilter)
            return; var e = this, t = this.send("eth_newPendingTransactionFilter", []); this._pendingFilter = t, t.then((function (r) { return function n() { e.send("eth_getFilterChanges", [r]).then((function (r) { if (e._pendingFilter != t)
            return null; var n = Promise.resolve(); return r.forEach((function (t) { e._emitted["t:" + t.toLowerCase()] = "pending", n = n.then((function () { return e.getTransaction(t).then((function (t) { return e.emit("pending", t), null; })); })); })), n.then((function () { return fr(1e3); })); })).then((function () { if (e._pendingFilter == t)
            return setTimeout((function () { n(); }), 0), null; e.send("eth_uninstallFilter", [r]); })).catch((function (e) { })); }(), r; })).catch((function (e) { })); };
        yr.prototype._stopEvent = function (e) { "pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), _super.prototype._stopEvent.call(this, e); };
        yr.hexlifyTransaction = function (e, t) { var r = (0, St.shallowCopy)(br); if (t)
            for (var e_174 in t)
                t[e_174] && (r[e_174] = !0); (0, St.checkProperties)(e, r); var n = {}; return ["gasLimit", "gasPrice", "nonce", "value"].forEach((function (t) { if (null == e[t])
            return; var r = (0, We.hexValue)(e[t]); "gasLimit" === t && (t = "gas"), n[t] = r; })), ["from", "to", "data"].forEach((function (t) { null != e[t] && (n[t] = (0, We.hexlify)(e[t])); })), n; };
        return yr;
    }(ar));
    var vr = new wt.Logger(Et);
    var Ar = 1;
    function Sr(e, t) { return function (r, n) { "eth_sign" == r && (e.isMetaMask || e.isStatus) && (r = "personal_sign", n = [n[1], n[0]]); var i = { method: r, params: n, id: Ar++, jsonrpc: "2.0" }; return new Promise((function (e, r) { t(i, (function (t, n) { if (t)
        return r(t); if (n.error) {
        var e_175 = new Error(n.error.message);
        return e_175.code = n.error.code, e_175.data = n.error.data, r(e_175);
    } e(n.result); })); })); }; }
    var wr = (function (_super) {
        __extends(wr, _super);
        function wr(e, t) {
            var _newTarget = this.constructor;
            var _this = this;
            vr.checkNew(_newTarget, wr), null == e && vr.throwArgumentError("missing provider", "provider", e);
            var r = null, n = null, i = null;
            "function" == typeof e ? (r = "unknown:", n = e) : (r = e.host || e.path || "", !r && e.isMetaMask && (r = "metamask"), i = e, e.request ? ("" === r && (r = "eip-1193:"), n = function (e) { return function (t, r) { return null == r && (r = []), "eth_sign" == t && (e.isMetaMask || e.isStatus) && (t = "personal_sign", r = [r[1], r[0]]), e.request({ method: t, params: r }); }; }(e)) : e.sendAsync ? n = Sr(e, e.sendAsync.bind(e)) : e.send ? n = Sr(e, e.send.bind(e)) : vr.throwArgumentError("unsupported provider", "provider", e), r || (r = "unknown:")), _this = _super.call(this, r, t) || this, (0, St.defineReadOnly)(_this, "jsonRpcFetchFunc", n), (0, St.defineReadOnly)(_this, "provider", i);
            return _this;
        }
        wr.prototype.send = function (e, t) { return this.jsonRpcFetchFunc(e, t); };
        return wr;
    }(yr));
    var Er = r(6371);
    var Tr = new (r(6266).ec)("secp256k1"), kr = r(1094);
    var Br = (function () {
        function Br() {
        }
        Br.sign = function (e, t) { var r = Tr.keyFromPrivate(t.getPrivateAsHexString(), "hex"), i = kr.keccak256(n(e)); return r.sign(i).toDER("hex"); };
        Br.verify = function (e, t, r) { return Br.verifyArrayBuf(n(e), t, r); };
        Br.verifyArrayBuf = function (e, t, r) { var n = Tr.keyFromPublic(r.getPublicKeyAsHexStr(), "hex"), i = kr.keccak256(e); return n.verify(i, t); };
        Br.signMessageWithBrowserWallet = function (e) {
            return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Br.connectMetamaskAndGetAddress()];
                    case 1:
                        _a.sent();
                        t = new wr(window.ethereum).getSigner();
                        return [4, t.signMessage(e)];
                    case 2: return [2, _a.sent()];
                }
            }); });
        };
        Br.recoverPublicKeyFromMessageSignature = function (e, t) {
            return __awaiter(this, void 0, void 0, function () { var r, n; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = yt.r(e), n = We.arrayify(r);
                        return [4, vt.recoverPublicKey(n, t)];
                    case 1: return [2, _a.sent()];
                }
            }); });
        };
        Br.recoverPublicKeyFromTypedMessageSignature = function (e, t) { var r, n; try {
            var t_123 = e.message.payload;
            e.message.payload = At.id(t_123).substr(2);
            var n_71 = e.types;
            delete n_71.EIP712Domain, r = Er._TypedDataEncoder.hash(e.domain, n_71, e.message), e.message.payload = t_123;
        }
        catch (e) {
            throw new Error("Cant sign data, possibly wrong format. " + e);
        } try {
            n = (0, Er.recoverPublicKey)(i(r.substr(2)), t);
        }
        catch (e) {
            throw new Error("Cant recoverPublicKey. " + e);
        } return n; };
        Br.signEIP712WithBrowserWallet = function (e, t, r, n, i) {
            if (i === void 0) { i = null; }
            return __awaiter(this, void 0, void 0, function () { var o_24, a_20, s_15, c_7, l_6, u_5, f_3, e_176; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (o_24 = i ? new bt.Wallet("0x" + i.getPrivateAsHexString()) : new wr(window.ethereum).getSigner(), !o_24)
                            throw new Error("Active Wallet required");
                        a_20 = { name: e, version: Br.Eip712Data.PROTOCOL_VERSION }, s_15 = {};
                        s_15[n] = r;
                        c_7 = Object.assign({}, t);
                        c_7.payload = kr.keccak256(c_7.payload);
                        return [4, o_24._signTypedData(a_20, s_15, c_7)];
                    case 1:
                        l_6 = _a.sent(), u_5 = { types: { EIP712Domain: Br.Eip712domainTypes }, primaryType: n, message: t, domain: a_20 };
                        u_5.types[n] = s_15[n];
                        f_3 = { signatureInHex: l_6, jsonSigned: JSON.stringify(u_5) };
                        return [2, JSON.stringify(f_3)];
                    case 2:
                        e_176 = _a.sent();
                        return [2, (console.error("Cant sign eip712 data. Error: " + e_176), "")];
                    case 3: return [2];
                }
            }); });
        };
        Br.connectMetamaskAndGetAddress = function () {
            return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window.ethereum)
                            throw new Error("Please install metamask before.");
                        return [4, window.ethereum.request({ method: "eth_requestAccounts" })];
                    case 1:
                        e = _a.sent();
                        if (!e || !e.length)
                            throw new Error("Active Wallet required");
                        return [2, e[0]];
                }
            }); });
        };
        Br.getChainIdFromSignature = function (e) { var t = Number("0x" + e.substr(-2)); return 27 == t || 28 == t ? 0 : t - 35 >> 1; };
        return Br;
    }());
    Br.OID_ECDSA_PUBLICKEY = "1.2.840.10045.2.1", Br.Eip712Data = { PROTOCOL_VERSION: "0.1" }, Br.Eip712domainTypes = [{ name: "name", type: "string" }, { name: "version", type: "string" }];
    var Mr = (function () {
        function Mr() {
        }
        Mr.validateTimestamp = function (e, t, r) { return !(e > t + r || e < t - r); };
        Mr.isAddress = function (e) { return null !== e.toLowerCase().match(/^0x[a-f0-9]{40}$/i) || (console.log("Wrong Ethereum Address"), !1); };
        Mr.isNullOrAddress = function (e) { return null == e || this.isAddress(e); };
        return Mr;
    }());
    Mr.ADDRESS_LENGTH_IN_BYTES = 42;
    var Cr = (function () {
        function Cr() {
            this.DEFAULT_NONCE_TIME_LIMIT_MS = 12e5;
        }
        Cr.makeNonce = function (e, t, r, n) {
            if (e === void 0) { e = ""; }
            if (r === void 0) { r = new Uint8Array(0); }
            if (n === void 0) { n = 0; }
            return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = e;
                        if (_a) return [3, 2];
                        return [4, Br.connectMetamaskAndGetAddress()];
                    case 1:
                        _a = (e = _b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a, !Mr.isAddress(e))
                            throw new Error("Address is not valid");
                        return [2, (e = e.toUpperCase(), n || (n = Date.now()), f([Uint8Array.from(g(e)), A(t), v(n), r]))];
                }
            }); });
        };
        Cr.prototype.validateNonce = function (e, t, r, n, i, o) {
            if (o === void 0) { o = new Uint8Array(0); }
            return Cr.validateAddress(e, t) ? this.validateReceiverIdentifier(e, r) ? this.validateTimestamp(e, n, i) ? this.validateOtherData(e, o) ? this.validateOtherData(e, o) : (console.log("otherData check failed"), !1) : (console.log("timestamp check failed"), !1) : (console.log("validateReceiverIdentifier check failed"), !1) : (console.log("validateAddress check failed for " + t), !1);
        };
        Cr.prototype.validateTimestamp = function (e, t, r) { var n = Cr.getTimestamp(e), i = new ct(n); return i.setValidity(r - t), i.validateAgainstExpiration(r); };
        Cr.validateAddress = function (e, t) { var r = h(e.slice(Cr.senderAddressIndexStart, Cr.senderAddressIndexStop)); return t.toUpperCase() === r.toUpperCase() || (console.log("nonceAddress = " + r), !1); };
        Cr.prototype.validateReceiverIdentifier = function (e, t) { return b(A(t)).toLowerCase() === b(e.slice(Cr.receiverIdentifierIndexStart, Cr.receiverIdentifierIndexStop)).toLowerCase(); };
        Cr.prototype.validateOtherData = function (e, t) { return b(t).toLowerCase() === b(e.slice(Cr.otherDataIndexStart, Cr.otherDataIndexStart + t.length)).toLowerCase(); };
        Cr.getTimestamp = function (e) { var t = c(e.slice(Cr.timestampIndexStart, Cr.timestampIndexStop)); if (t > BigInt(Number.MAX_SAFE_INTEGER))
            throw new Error("timestamp value bigger than MAX_SAFE_INTEGER"); return Number(t); };
        return Cr;
    }());
    Cr.LONG_BYTES = 8, Cr.senderAddressIndexStart = 0, Cr.senderAddressIndexStop = Mr.ADDRESS_LENGTH_IN_BYTES, Cr.receiverIdentifierIndexStart = Cr.senderAddressIndexStop, Cr.receiverIdentifierIndexStop = Cr.receiverIdentifierIndexStart + 32, Cr.timestampIndexStart = Cr.receiverIdentifierIndexStop, Cr.timestampIndexStop = Cr.timestampIndexStart + Cr.LONG_BYTES, Cr.otherDataIndexStart = Cr.timestampIndexStop;
    var Lr = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var Pr = (function () {
        function Pr() {
        }
        return Pr;
    }());
    Lr([oe({ type: M.Any })], Pr.prototype, "signedToken", void 0), Lr([oe({ type: M.Any })], Pr.prototype, "attestation", void 0), Lr([oe({ type: M.Any })], Pr.prototype, "proof", void 0);
    var Fr = (function () {
        function Fr() {
            this.XMLConfig = dt;
        }
        Fr.stringIsAValidUrl = function (e) { var t; try {
            t = new URL(e);
        }
        catch (e) {
            return console.log("cant construct url. Error:" + e), !1;
        } return "http:" === t.protocol || "https:" === t.protocol; };
        Fr.prototype.setDomainAndTimout = function (e) { if (!Fr.stringIsAValidUrl(e))
            throw new Error("wrong domain"); this.domain = e; };
        Fr.prototype.setDomain = function (e) { if (!Fr.stringIsAValidUrl(e))
            throw new Error("wrong domain"); this.domain = e; };
        Fr.prototype.getDomain = function () { return this.domain; };
        Fr.prototype.validateRequest = function (e) { try {
            var t_124 = JSON.parse(e), r_97 = JSON.parse(t_124.jsonSigned), n_72 = r_97.domain, i_43 = r_97.message;
            return this.retrieveAttestedObject(i_43), this.validateDomain(n_72);
        }
        catch (e) {
            return console.error("Validate error!"), console.error(e), !1;
        } };
        Fr.prototype.validateDomain = function (e) { return e.name.toLowerCase() !== this.domain.toLowerCase() ? (console.error("Domain name is not valid"), !1) : e.version === Br.Eip712Data.PROTOCOL_VERSION || (console.error("Protocol version is wrong"), !1); };
        Fr.prototype.retrieveAttestedObject = function (e) { var t = e.payload, r = st.publicFromBase64(dt.base64attestorPubKey), n = st.publicFromBase64(dt.base64senderPublicKey); return ht.fromBytes(i(t), Pr, r, Re, n); };
        Fr.prototype.verifySignature = function (e, t) { var r = JSON.parse(e), n = r.signatureInHex, i = JSON.parse(r.jsonSigned), o = Br.recoverPublicKeyFromTypedMessageSignature(i, n), a = st.fromPublicHex(o.substr(2)); return t.toLowerCase() !== i.message.address.toLowerCase() ? (console.log("message.address is not equal pkAddress"), !1) : t.toLowerCase() === a.getAddress().toLowerCase() || (console.log("Recovered address is not equal pkAddress"), !1); };
        return Fr;
    }());
    var Nr = (function (_super) {
        __extends(Nr, _super);
        function Nr() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Nr;
    }(Fr));
    var xr = (function (_super) {
        __extends(xr, _super);
        function xr(e, t) {
            if (e === void 0) { e = null; }
            if (t === void 0) { t = ct.DEFAULT_TIME_LIMIT_MS; }
            var _this = this;
            _this = _super.call(this) || this, _this.Eip712UserDataTypes = [{ name: "payload", type: "string" }, { name: "description", type: "string" }, { name: "timestamp", type: "string" }, { name: "identifier", type: "string" }], _this.Eip712UserDataPrimaryName = "AttestationRequest", _this.Eip712UserDataDescription = "Linking Ethereum address to phone or email", _this.userKey = e, _this.acceptableTimeLimit = t;
            return _this;
        }
        xr.prototype.addData = function (e, t, r, n) {
            if (t === void 0) { t = ct.DEFAULT_TIME_LIMIT_MS; }
            return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setDomain(e), this.attestationRequest = n, this.acceptableTimeLimit = t;
                        _a = this;
                        return [4, this.makeToken(r)];
                    case 1:
                        _a.jsonEncoding = _b.sent();
                        try {
                            this.fillJsonData(this.jsonEncoding);
                        }
                        catch (e) {
                            return [2, (console.log(e), !1)];
                        }
                        return [2];
                }
            }); });
        };
        xr.prototype.fillJsonData = function (e) { if (!e)
            throw new Error("Empty json"); this.jsonEncoding = e; var t = JSON.parse(e), r = t.signatureInHex, n = JSON.parse(t.jsonSigned); this.eip712DomainData = n.domain, this.data = n.message; try {
            var e_177 = Br.recoverPublicKeyFromTypedMessageSignature(n, r);
            this.requestorKeys = st.fromPublicHex(e_177.substr(2));
        }
        catch (e) {
            var t_125 = "Recover Address failed with error:" + e;
            throw console.log(t_125), new Error(t_125);
        } this.attestationRequest || (this.attestationRequest = mt.fromBytes(p(this.data.payload))), this.constructorCheck(); };
        xr.prototype.constructorCheck = function () { if (!this.verify())
            throw new Error("Could not verify Eip712 AttestationRequest"); };
        xr.prototype.makeToken = function (e) {
            return __awaiter(this, void 0, void 0, function () { var t, _a, r, n, i; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.userKey) return [3, 1];
                        _a = this.userKey.getAddress();
                        return [3, 3];
                    case 1: return [4, Br.connectMetamaskAndGetAddress()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        t = _a;
                        r = Cr.getTimestamp(this.attestationRequest.getPok().getNonce()), n = new ct(r).getTimeAsString(), i = { payload: o(this.attestationRequest.getDerEncoding()), description: this.Eip712UserDataDescription, timestamp: n, identifier: e };
                        return [4, Br.signEIP712WithBrowserWallet(this.domain, i, this.Eip712UserDataTypes, this.Eip712UserDataPrimaryName, this.userKey)];
                    case 4: return [2, _b.sent()];
                }
            }); });
        };
        xr.prototype.setAcceptableTimeLimit = function (e) { this.acceptableTimeLimit = e; };
        xr.prototype.getJsonEncoding = function () { return this.jsonEncoding; };
        xr.prototype.verify = function () { return !!this.attestationRequest.verify() && this.verifyDomainData(); };
        xr.prototype.verifyDomainData = function () { return this.eip712DomainData.name.toLowerCase() === this.getDomain().toLowerCase() && this.eip712DomainData.version === Br.Eip712Data.PROTOCOL_VERSION; };
        xr.prototype.checkValidity = function () { if (this.data.description !== this.Eip712UserDataDescription)
            return !1; var e = new ct(this.data.timestamp); return e.setValidity(this.acceptableTimeLimit), e.validateTimestamp() ? !!(new Cr).validateNonce(this.getPok().getNonce(), this.requestorKeys.getAddress(), this.domain, ct.stringTimestampToLong(this.data.timestamp) - this.acceptableTimeLimit, ct.stringTimestampToLong(this.data.timestamp) + this.acceptableTimeLimit) || (console.log("nonce is not correct"), !1) : (console.log("timestamp is not correct. timestamp = " + this.data.timestamp + ", acceptableTimeLimit = " + this.acceptableTimeLimit), !1); };
        xr.prototype.getIdentifier = function () { return this.data.identifier; };
        xr.prototype.getType = function () { return this.attestationRequest.getType(); };
        xr.prototype.getPok = function () { return this.attestationRequest.getPok(); };
        xr.prototype.getUserPublicKey = function () { return this.requestorKeys; };
        return xr;
    }(Nr));
    var Rr = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var Or = (function () {
        function Or() {
        }
        return Or;
    }());
    Rr([oe({ type: Qe })], Or.prototype, "attestation", void 0), Rr([oe({ type: M.Integer })], Or.prototype, "type", void 0), Rr([oe({ type: ue })], Or.prototype, "proof", void 0), Rr([oe({ type: Ve })], Or.prototype, "sessionKey", void 0);
    var Ir = (function () {
        function Ir() {
        }
        Ir.fromData = function (e, t, r, n) { var i = new this; return i.attestation = e, i.type = t, i.pok = r, i.sessionPublicKey = n, i.encoding = i.makeEncoding(e, t, r, n), i.constructorCheck(), i; };
        Ir.fromBytes = function (e, t) { var r, n = new this; try {
            r = se.parse(y(e), Or);
        }
        catch (e) {
            throw new Error("Cant parse UseAttestationASN. " + e);
        } try {
            n.attestation = ft.fromASNType(r.attestation, t), n.type = r.type, n.pok = me.fromASNType(r.proof), n.sessionPublicKey = st.publicFromSubjectPublicKeyValue(r.sessionKey);
        }
        catch (e) {
            throw new Error("Cant decode internal data. " + e);
        } return n.constructorCheck(), n; };
        Ir.prototype.constructorCheck = function () { if (!this.verify())
            throw new Error("The use attestation object is not valid"); };
        Ir.prototype.makeEncoding = function (e, t, r, n) { var i = e.getDerEncoding() + pe.encode("INTEGER", t) + r.getDerEncoding() + n.getAsnDerPublic(); return pe.encode("SEQUENCE_30", i); };
        Ir.prototype.getAttestation = function () { return this.attestation; };
        Ir.prototype.getType = function () { return this.type; };
        Ir.prototype.getPok = function () { return this.pok; };
        Ir.prototype.getSessionPublicKey = function () { return this.sessionPublicKey; };
        Ir.prototype.getDerEncoding = function () { return this.encoding; };
        Ir.prototype.verify = function () { return this.attestation.verify() && (new Se).verifyFullProof(this.pok); };
        Ir.prototype.checkValidity = function () { return this.attestation.checkValidity(); };
        return Ir;
    }());
    var Dr = (function (_super) {
        __extends(Dr, _super);
        function Dr(e, t) {
            if (e === void 0) { e = null; }
            if (t === void 0) { t = ct.DEFAULT_TOKEN_TIME_LIMIT; }
            var _this = this;
            _this = _super.call(this) || this, _this.PLACEHOLDER_CHAIN_ID = 0, _this.Eip712PrimaryName = "AttestationUsage", _this.Eip712Description = 'Prove that the "identifier" is the identifier hidden in attestation contained in"payload".', _this.Eip712UserTypes = [{ name: "description", type: "string" }, { name: "identifier", type: "string" }, { name: "payload", type: "string" }, { name: "timestamp", type: "string" }, { name: "expirationTime", type: "string" }], _this.maxTokenValidityInMs = t, _this.userKey = e;
            return _this;
        }
        Dr.prototype.addData = function (e, t, r) {
            return __awaiter(this, void 0, void 0, function () { var _a, e_178; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setDomain(e), this.useAttestation = r;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4, this.makeToken(t, r)];
                    case 2:
                        _a.jsonEncoding = _b.sent();
                        return [3, 4];
                    case 3:
                        e_178 = _b.sent();
                        throw console.error(e_178), new Error("Could not encode object. " + e_178);
                    case 4:
                        try {
                            this.fillJsonData(this.jsonEncoding);
                        }
                        catch (e) {
                            return [2, (console.log(e), !1)];
                        }
                        this.constructorCheck();
                        return [2];
                }
            }); });
        };
        Dr.prototype.fillJsonData = function (e, t) {
            if (t === void 0) { t = null; }
            if (!e)
                throw new Error("Empty json");
            null !== t && (this.attestorKey = t), this.jsonEncoding = e;
            var r = JSON.parse(e), n = r.signatureInHex, i = JSON.parse(r.jsonSigned);
            this.eip712DomainData = i.domain, this.data = i.message;
            try {
                var e_179 = Br.recoverPublicKeyFromTypedMessageSignature(i, n);
                this.requestorKeys = st.fromPublicHex(e_179.substr(2));
            }
            catch (e) {
                var t_126 = "Recover Address failed with error:" + e;
                throw console.log(t_126), new Error(t_126);
            }
            if (!this.useAttestation)
                try {
                    this.useAttestation = Ir.fromBytes(p(this.data.payload), this.attestorKey);
                }
                catch (e) {
                    throw new Error("Failed to read UseAttestation. " + e);
                }
            this.constructorCheck();
        };
        Dr.prototype.constructorCheck = function () { if (!this.verify())
            throw new Error("Could not verify Eip712 use attestation"); };
        Dr.prototype.makeToken = function (e, t) {
            return __awaiter(this, void 0, void 0, function () { var _a, r; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.userKey;
                        if (_a) return [3, 2];
                        return [4, Br.connectMetamaskAndGetAddress()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        _a;
                        r = { payload: o(t.getDerEncoding()), description: this.Eip712Description, timestamp: (new ct).getTimeAsString(), identifier: e, expirationTime: new ct(Date.now() + this.maxTokenValidityInMs).getTimeAsString() };
                        return [4, Br.signEIP712WithBrowserWallet(this.domain, r, this.Eip712UserTypes, this.Eip712PrimaryName, this.userKey)];
                    case 3: return [2, _b.sent()];
                }
            }); });
        };
        Dr.prototype.proofLinking = function () { var e = (new Se).mapToCurveMultiplier(this.getType(), this.getIdentifier()); return !!k.decodeFromUint8(this.getAttestation().getUnsignedAttestation().getCommitment(), T).subtract(ve.multiplyDA(e)).equals(this.getPok().getRiddle()) || (console.log("candidateRiddle.equals(this.getPok().getRiddle()) error"), !1); };
        Dr.prototype.getPok = function () { return this.useAttestation.getPok(); };
        Dr.prototype.getType = function () { return this.useAttestation.type; };
        Dr.prototype.getIdentifier = function () { return this.data.identifier; };
        Dr.prototype.getAttestation = function () { return this.useAttestation.getAttestation(); };
        Dr.prototype.getJsonEncoding = function () { return this.jsonEncoding; };
        Dr.prototype.checkTokenValidity = function () { var e = ct.stringTimestampToLong(this.data.expirationTime) - this.maxTokenValidityInMs - 2 * ct.ALLOWED_ROUNDING, t = ct.stringTimestampToLong(this.data.expirationTime); if (!this.useAttestation.checkValidity())
            return console.log("useAttestation.checkValidity failed"), !1; if (this.data.description != this.Eip712Description)
            return console.log("wrong description: \"" + this.data.description + "\", must be \"" + this.Eip712Description + "\""), !1; var r = new ct(this.data.timestamp); return r.setValidity(this.maxTokenValidityInMs), r.validateAgainstExpiration(ct.stringTimestampToLong(this.data.expirationTime)) ? this.requestorKeys.getAddress().toLowerCase() !== this.useAttestation.getAttestation().getUnsignedAttestation().getAddress().toLowerCase() ? (console.log("wrong address"), !1) : (new Cr).validateNonce(this.useAttestation.getPok().getNonce(), this.useAttestation.getAttestation().getUnsignedAttestation().getAddress(), this.domain, e, t) ? !!this.proofLinking() || (console.log("wrong proofLinking"), !1) : (console.log("wrong Nonce"), !1) : (console.log("verify timestamp failed.\n" + this.data.timestamp + "\n" + this.maxTokenValidityInMs + "\n" + this.data.expirationTime + "\n" + ct.stringTimestampToLong(this.data.expirationTime) + "\n"), !1); };
        Dr.prototype.verify = function () { return !!this.useAttestation.verify(); };
        Dr.prototype.getSessionPublicKey = function () { return this.useAttestation.getSessionPublicKey(); };
        return Dr;
    }(Nr));
    var Jr = function (e, t, r, n) { var i, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a); return o > 3 && a && Object.defineProperty(t, r, a), a; };
    var _r = (function () {
        function _r() {
        }
        return _r;
    }());
    Jr([oe({ type: M.Integer })], _r.prototype, "type", void 0), Jr([oe({ type: ue })], _r.prototype, "proof", void 0), Jr([oe({ type: Ve })], _r.prototype, "sessionKey", void 0);
    var Ur = (function () {
        function Ur() {
        }
        Ur.fromData = function (e, t, r) { var n = new this; if (n.type = e, n.pok = t, n.sessionPublicKey = r, !n.verify())
            throw new Error("Could not verify the proof"); return n; };
        Ur.fromBytes = function (e) { var t, r = new this; try {
            t = se.parse(y(e), _r), r.type = t.type, r.sessionPublicKey = st.publicFromSubjectPublicKeyValue(t.sessionKey);
        }
        catch (e) {
            throw new Error("Cant parse AttestationRequest Identifier");
        } try {
            var e_180 = new Uint8Array(t.proof.riddle), n_73 = new Uint8Array(t.proof.challengePoint), i_44 = new Uint8Array(t.proof.responseValue), o_25 = new Uint8Array(t.proof.nonce), a_21 = k.decodeFromHex(b(e_180), T), s_16 = c(n_73), l_7 = k.decodeFromHex(b(i_44), T);
            r.pok = me.fromData(a_21, l_7, s_16, o_25);
        }
        catch (e) {
            throw new Error("Cant create FullProofOfExponent");
        } if (!r.verify())
            throw new Error("Could not verify the proof"); return r; };
        Ur.prototype.verify = function () { return !!(new Se).verifyFullProof(this.pok); };
        Ur.prototype.getDerEncoding = function () { var e = pe.encode("INTEGER", this.type) + this.pok.getDerEncoding() + this.sessionPublicKey.getAsnDerPublic(); return pe.encode("SEQUENCE_30", e); };
        Ur.prototype.getPok = function () { return this.pok; };
        Ur.prototype.getType = function () { return this.type; };
        Ur.prototype.getSessionPublicKey = function () { return this.sessionPublicKey; };
        return Ur;
    }());
    var Hr = (function (_super) {
        __extends(Hr, _super);
        function Hr(e, t, r) {
            if (e === void 0) { e = null; }
            if (t === void 0) { t = ct.DEFAULT_TIME_LIMIT_MS; }
            if (r === void 0) { r = ct.DEFAULT_TOKEN_TIME_LIMIT; }
            var _this = this;
            _this = _super.call(this) || this, _this.Eip712UserDataTypes = [{ name: "payload", type: "string" }, { name: "description", type: "string" }, { name: "identifier", type: "string" }, { name: "timestamp", type: "string" }, { name: "expirationTime", type: "string" }], _this.Eip712UserDataPrimaryName = "AttestationRequestWUsage", _this.Eip712UserDataDescription = 'Prove that the "identifier" is the identifier hidden in attestation contained in"payload" and use this to authorize usage of local, temporary keys.', _this.userKey = e, _this.acceptableTimeLimit = t, _this.maxTokenValidityInMs = r;
            return _this;
        }
        Hr.prototype.fromData = function (e, t, r, n, i, o) {
            if (t === void 0) { t = ct.DEFAULT_TIME_LIMIT_MS; }
            if (r === void 0) { r = ct.DEFAULT_TOKEN_TIME_LIMIT; }
            if (o === void 0) { o = null; }
            return __awaiter(this, void 0, void 0, function () { var _a, e_181; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setDomain(e), o && (this.userKey = o);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.acceptableTimeLimit = t, this.maxTokenValidityInMs = r, this.attestationRequestWithUsage = i;
                        _a = this;
                        return [4, this.makeToken(n, i)];
                    case 2:
                        _a.jsonEncoding = _b.sent();
                        return [3, 4];
                    case 3:
                        e_181 = _b.sent();
                        throw console.log(e_181), new Error("Could not encode object");
                    case 4:
                        try {
                            this.fillJsonData(this.jsonEncoding);
                        }
                        catch (e) {
                            throw new Error("Could not decode object");
                        }
                        return [2];
                }
            }); });
        };
        Hr.prototype.Eip712AttestationRequestWithUsage = function (e, t, r, n) { try {
            this.acceptableTimeLimit = t, this.maxTokenValidityInMs = r, this.jsonEncoding = n, this.fillJsonData(this.jsonEncoding);
        }
        catch (e) {
            throw console.log(e), new Error("Could not decode object");
        } };
        Hr.prototype.fillJsonData = function (e) { if (!e)
            throw new Error("Empty json"); this.jsonEncoding = e; var t = JSON.parse(e), r = t.signatureInHex, n = JSON.parse(t.jsonSigned); this.eip712DomainData = n.domain, this.data = n.message; try {
            var e_182 = Br.recoverPublicKeyFromTypedMessageSignature(n, r);
            this.userPublicKey = st.fromPublicHex(e_182.substr(2));
        }
        catch (e) {
            var t_127 = "Recover Address failed with error:" + e;
            throw console.log(t_127), new Error(t_127);
        } this.attestationRequestWithUsage || (this.attestationRequestWithUsage = Ur.fromBytes(p(this.data.payload))), this.constructorCheck(); };
        Hr.prototype.constructorCheck = function () { if (!this.verify())
            throw new Error("Could not verify Eip712 use attestation"); };
        Hr.prototype.makeToken = function (e, t) {
            return __awaiter(this, void 0, void 0, function () { var _a, r, n, i; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.userKey;
                        if (_a) return [3, 2];
                        return [4, Br.connectMetamaskAndGetAddress()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        _a;
                        r = (new ct).getTimeAsString(), n = new ct(Date.now() + this.maxTokenValidityInMs).getTimeAsString(), i = { payload: o(t.getDerEncoding()), description: this.Eip712UserDataDescription, timestamp: r, identifier: e, expirationTime: n };
                        return [4, Br.signEIP712WithBrowserWallet(this.domain, i, this.Eip712UserDataTypes, this.Eip712UserDataPrimaryName, this.userKey)];
                    case 3: return [2, _b.sent()];
                }
            }); });
        };
        Hr.prototype.getIdentifier = function () { return this.data.identifier; };
        Hr.prototype.getUserPublicKey = function () { return this.userPublicKey; };
        Hr.prototype.getPok = function () { return this.attestationRequestWithUsage.getPok(); };
        Hr.prototype.getType = function () { return this.attestationRequestWithUsage.getType(); };
        Hr.prototype.getSessionPublicKey = function () { return this.attestationRequestWithUsage.getSessionPublicKey(); };
        Hr.prototype.getJsonEncoding = function () { return this.jsonEncoding; };
        Hr.prototype.checkValidity = function () { return !!this.testNonceAndDescription(this.acceptableTimeLimit); };
        Hr.prototype.checkTokenValidity = function () { var e = new ct(this.data.timestamp); return e.setValidity(this.maxTokenValidityInMs), e.validateAgainstExpiration(ct.stringTimestampToLong(this.data.expirationTime)) ? !!this.testNonceAndDescription(this.maxTokenValidityInMs) : (console.log("time.validateAgainstExpiration filed"), !1); };
        Hr.prototype.testNonceAndDescription = function (e) { if (!e)
            throw new Error("timeLimit required"); var t = ct.stringTimestampToLong(this.data.timestamp) - e, r = ct.stringTimestampToLong(this.data.timestamp) + e; return !!(new Cr).validateNonce(this.attestationRequestWithUsage.getPok().getNonce(), this.userPublicKey.getAddress(), this.domain, t, r) && this.data.description === this.Eip712UserDataDescription; };
        Hr.prototype.verify = function () { return !!this.attestationRequestWithUsage.verify(); };
        return Hr;
    }(Nr));
    var Xr;
    Xr = "object" == typeof crypto && crypto.subtle ? crypto.subtle : r(3906).webcrypto.subtle;
    var Vr = (function () {
        function Vr(e) {
            if (e === void 0) { e = !1; }
            this.negotiator = e;
            var t = dt;
            this.base64senderPublicKey = t.base64senderPublicKey, this.base64attestorPubKey = t.base64attestorPubKey, this.webDomain = t.webDomain;
        }
        Vr.prototype.getAuthenticationBlob = function (e, t) { this.signedTokenBlob = e.ticketBlob, this.magicLink = e.magicLink, this.email = e.email, this.signedTokenSecret = e.ticketSecret, this.attestationOrigin = e.attestationOrigin, this.authResultCallback = t, this.getIdentifierAttestation(); };
        Vr.prototype.getIdentifierAttestation = function () { S(3, "getIdentifierAttestation. create iframe with " + this.attestationOrigin), this.attachPostMessageListener(this.postMessageAttestationListener.bind(this)); var e = document.createElement("iframe"); this.iframe = e, e.src = this.attestationOrigin, e.style.width = "800px", e.style.height = "700px", e.style.maxWidth = "100%", e.style.background = "#fff"; var t = document.createElement("div"); this.iframeWrap = t, t.setAttribute("style", "width:100%;min-height: 100vh; position: fixed; align-items: center; justify-content: center;display: none;top: 0; left: 0; background: #fffa"), t.appendChild(e), document.body.appendChild(t); };
        Vr.prototype.getUseTicket = function (e, t, r, n, i, o) {
            return __awaiter(this, void 0, void 0, function () { var a, s, e_183, r_98, n_74; return __generator(this, function (_a) {
                try {
                    if (a = Re.fromBase64(r, st.publicFromBase64(o)), !a.checkValidity())
                        throw S(1, "Could not validate ticket"), new Error("Validation failed");
                    if (!a.verify())
                        throw S(1, "Could not verify ticket"), new Error("Verification failed");
                    S(2, "ticked valid (signature OK)");
                }
                catch (e) {
                    throw S(2, "getUseTicket: ticket validation failed", e), new Error("getUseTicket: ticked validation failed");
                }
                try {
                    e_183 = st.publicFromBase64(i);
                    if (s = ft.fromBytes(p(n), e_183), !s.checkValidity())
                        throw S(1, "Could not validate attestation"), new Error("Validation failed");
                    if (!s.verify())
                        throw S(1, "Could not verify attestation"), new Error("Verification failed");
                    S(3, "attestaion valid");
                }
                catch (e) {
                    throw S(1, "getUseTicket: attestation validation failed"), S(2, e), new Error("getUseTicket: attestation validation failed");
                }
                try {
                    r_98 = new ht;
                    r_98.create(a, s, BigInt(t), BigInt(e));
                    n_74 = r_98.getDerEncoding();
                    return [2, (S(3, n_74), n_74)];
                }
                catch (e) {
                    throw S(1, "getUseTicket: redeem failed"), S(2, e), new Error("getUseTicket: redeem failed");
                }
                return [2];
            }); });
        };
        Vr.prototype.postMessageAttestationListener = function (e) {
            var _this = this;
            var t = new URL(this.attestationOrigin);
            if (e.origin === t.origin) {
                if (S(3, "postMessageAttestationListener event (Authenticator)", e), void 0 !== e.data.ready && !0 === e.data.ready) {
                    var e_184 = { force: !1 };
                    return this.magicLink && (e_184.magicLink = this.magicLink), this.email && (e_184.email = this.email), void this.iframe.contentWindow.postMessage(e_184, this.attestationOrigin);
                }
                if (void 0 !== e.data.display && (!0 === e.data.display ? (this.iframeWrap.style.display = "flex", this.negotiator && this.negotiator.commandDisplayIframe()) : (e.data.error && (S(1, "Error received from the iframe: " + e.data.error), this.authResultCallback(null, e.data.error)), this.iframeWrap.style.display = "none", this.negotiator && this.negotiator.commandHideIframe())), e.data.hasOwnProperty("attestation") && e.data.hasOwnProperty("requestSecret")) {
                    this.iframeWrap.remove(), this.attestationBlob = e.data.attestation, this.attestationSecret = e.data.requestSecret, S(3, "attestation data received."), S(3, this.attestationBlob), S(3, this.attestationSecret), S(3, this.base64attestorPubKey);
                    try {
                        this.getUseTicket(this.signedTokenSecret, this.attestationSecret, this.signedTokenBlob, this.attestationBlob, this.base64attestorPubKey, this.base64senderPublicKey).then((function (e) { e ? (S(3, "this.authResultCallback( useToken ): "), _this.authResultCallback(e)) : (S(3, "this.authResultCallback( empty ): "), _this.authResultCallback(e)); }));
                    }
                    catch (e) {
                        S(1, "UseDevconTicket. Something went wrong. " + e), this.authResultCallback(!1);
                    }
                }
            }
        };
        Vr.prototype.attachPostMessageListener = function (e) { window.addEventListener ? window.addEventListener("message", (function (t) { e(t); }), !1) : window.attachEvent("onmessage", (function (t) { e(t); })); };
        Vr.requestAttest = function (e, t, r, n, i) {
            if (i === void 0) { i = null; }
            return __awaiter(this, void 0, void 0, function () { var o, a, e_185, s, c, l, u; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        a = new Se;
                        if (!i) return [3, 1];
                        o = i.getAddress();
                        return [3, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, Br.connectMetamaskAndGetAddress()];
                    case 2:
                        o = _a.sent();
                        return [3, 4];
                    case 3:
                        e_185 = _a.sent();
                        return [2, (S(1, "Cant find user Ethereum Address. Please check Metamask. " + e_185), void S(2, e_185))];
                    case 4: return [4, Cr.makeNonce(o, r)];
                    case 5:
                        s = _a.sent();
                        S(3, "nonce = " + b(s));
                        c = a.computeAttestationProof(n, s), l = mt.fromData(a.getType(t), c), u = new xr(i);
                        return [4, u.addData(r, 2e4, e, l)];
                    case 6: return [2, (_a.sent(), u.getJsonEncoding())];
                }
            }); });
        };
        Vr.constructAttest = function (e, t, r, n, i) { var o, a, s, c = new Se; try {
            a = new xr, a.setDomain(i), a.fillJsonData(n), Vr.checkAttestRequestVerifiability(a), Vr.checkAttestRequestValidity(a);
        }
        catch (e) {
            S(2, "Failed to fill attestation data from json. " + e + "\nRestores as an Eip712AttestationRequestWithUsage object instead");
            try {
                a = new Hr, a.setDomain(i), a.fillJsonData(n), Vr.checkAttestRequestVerifiability(a), Vr.checkAttestRequestValidity(a);
            }
            catch (e) {
                var t_128 = "Failed to parse Eip712AttestationRequestWithUsage. " + e;
                throw S(1, t_128), S(2, e), new Error(t_128);
            }
        } s = c.makeCommitmentFromHiding(a.getIdentifier(), a.getType(), a.getPok().getRiddle()), o = new ut, o.fromCommitment(s, a.getUserPublicKey()), o.setIssuer("CN=" + t), o.setSerialNumber(Math.round(Math.random() * Number.MAX_SAFE_INTEGER)); var l = Date.now(); return o.setNotValidBefore(l), o.setNotValidAfter(l + r), ft.fromData(o, e).getDerEncoding(); };
        Vr.useAttest = function (e, t, r, n, i, o, a, s) {
            if (a === void 0) { a = null; }
            if (s === void 0) { s = null; }
            return __awaiter(this, void 0, void 0, function () { var l, u, f, h, d, _a, g, m, e_187, t_129, e_186; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        l = p(e);
                        f = ft.fromBytes(l, r), h = c(p(t).slice(4)), d = new Se;
                        if (!s) return [3, 1];
                        _a = s.getAddress();
                        return [3, 3];
                    case 1: return [4, Br.connectMetamaskAndGetAddress()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        u = _a;
                        return [4, Cr.makeNonce(u, o)];
                    case 4:
                        g = _b.sent(), m = d.computeAttestationProof(h, g);
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        e_187 = Ir.fromData(f, d.getType(i), m, a), t_129 = new Dr(s);
                        return [4, t_129.addData(o, n, e_187)];
                    case 6: return [2, (_b.sent(), t_129.getJsonEncoding())];
                    case 7:
                        e_186 = _b.sent();
                        S(1, e_186);
                        return [3, 8];
                    case 8: return [2];
                }
            }); });
        };
        Vr.checkAttestRequestVerifiability = function (e) { if (!e.verify())
            throw S(2, "Could not verify attestation signing request"), new Error("Verification failed"); };
        Vr.checkAttestRequestValidity = function (e) { if (!e.checkValidity())
            throw S(3, "Could not validate attestation signing request"), new Error("Validation failed"); };
        Vr.checkUsageVerifiability = function (e) { if (!e.verify())
            throw S(1, "Could not verify usage request"), new Error("Verification failed"); };
        Vr.checkUsageValidity = function (e) { if (!e.checkTokenValidity())
            throw S(1, "Could not validate usage request"), new Error("Validation failed"); };
        Vr.verifyUsage = function (e, t, r, n, i) {
            return __awaiter(this, void 0, void 0, function () { var o, r_99, r_100, e_188; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        try {
                            r_99 = new Dr;
                            r_99.setDomain(n), r_99.fillJsonData(e, t), Vr.checkUsageVerifiability(r_99), Vr.checkUsageValidity(r_99), o = r_99.getSessionPublicKey();
                        }
                        catch (t) {
                            S(2, "Eip712AttestationUsage failed. " + t + ". Lets try to verify Eip712AttestationRequestWithUsage");
                            r_100 = new Hr;
                            r_100.setDomain(n), r_100.fillJsonData(e), Vr.checkUsageVerifiability(r_100), Vr.checkUsageValidity(r_100), o = r_100.getSessionPublicKey();
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, o.verifyStringWithSubtle(st.anySignatureToRawUint8(i), r)];
                    case 2:
                        if (!(_a.sent()))
                            throw S(2, "Could not verify message signature"), new Error("Signature verification failed");
                        return [2, "SUCCESSFULLY validated usage request!"];
                    case 3:
                        e_188 = _a.sent();
                        S(1, "Cant verify session with subtle. " + e_188), S(2, e_188);
                        return [3, 4];
                    case 4: return [2];
                }
            }); });
        };
        Vr.requestAttestAndUsage = function (e, t, r, n, i, o) {
            return __awaiter(this, void 0, void 0, function () { var a_22, s_17, _a, l_8, u_6, f_4, h_3, d_3, e_189; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        s_17 = c(p(i));
                        if (!e) return [3, 1];
                        _a = e.getAddress();
                        return [3, 3];
                    case 1: return [4, Br.connectMetamaskAndGetAddress()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        a_22 = _a;
                        return [4, Cr.makeNonce(a_22, n, new Uint8Array(0), Date.now())];
                    case 4:
                        l_8 = _b.sent(), u_6 = new Se, f_4 = u_6.computeAttestationProof(s_17, l_8), h_3 = Ur.fromData(u_6.getType(r), f_4, o), d_3 = new Hr(e);
                        return [4, d_3.fromData(n, void 0, void 0, t, h_3)];
                    case 5: return [2, (_b.sent(), d_3.getJsonEncoding())];
                    case 6:
                        e_189 = _b.sent();
                        S(1, "requestAttestAndUsage error. " + e_189), S(2, e_189);
                        return [3, 7];
                    case 7: return [2];
                }
            }); });
        };
        return Vr;
    }());
    window.Authenticator = Vr, window.Attest = xr, window.AttestationCrypto = Se;
})(); })();
//# sourceMappingURL=authenticator.js.map