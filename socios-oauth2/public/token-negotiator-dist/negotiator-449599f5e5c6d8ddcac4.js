/*! For license information please see negotiator-449599f5e5c6d8ddcac4.js.LICENSE.txt */
(self.webpackChunknegotiator=self.webpackChunknegotiator||[]).push([["src_wallet_WalletConnectV2Provider_ts"],{"./src/wallet/WalletConnectV2Provider.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WC_V2_DEFAULT_CHAINS: () => (/* binding */ WC_V2_DEFAULT_CHAINS),\n/* harmony export */   getWalletConnectV2ProviderInstance: () => (/* binding */ getWalletConnectV2ProviderInstance)\n/* harmony export */ });\n/* harmony import */ var _walletconnect_universal_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/universal-provider */ "./node_modules/@walletconnect/universal-provider/dist/index.es.js");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError("Generator is already executing.");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nvar WC_V2_DEFAULT_CHAINS = [\n    \'eip155:1\',\n];\nvar getWalletConnectV2ProviderInstance = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4, _walletconnect_universal_provider__WEBPACK_IMPORTED_MODULE_0__["default"].init({\n                    projectId: \'2ec7ead81da1226703ad789c0b2f7b30\',\n                    logger: \'debug\',\n                    relayUrl: \'wss://relay.walletconnect.com\',\n                })];\n            case 1: return [2, _a.sent()];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://negotiator/./src/wallet/WalletConnectV2Provider.ts?')},"?25ed":()=>{eval("/* (ignored) */\n\n//# sourceURL=webpack://negotiator/crypto_(ignored)?")}}]);