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
import { rawTokenCheck, readMagicUrl, storeMagicURL, decodeTokens, filterTokens } from "../core";
import { logger, requiredParams, uint8toBuffer } from "../utils";
import { OutletAction, OutletResponseAction } from "../client/messaging";
import { AuthHandler } from "./auth-handler";
import { SignedDevconTicket } from "@tokenscript/attestation/dist/asn1/shemas/SignedDevconTicket";
import { AsnParser } from "@peculiar/asn1-schema";
import { ResponseActionBase } from "../core/messaging";
export var defaultConfig = {
    tokenUrlName: "ticket",
    tokenSecretName: "secret",
    tokenIdName: "id",
    unsignedTokenDataName: "ticket",
    itemStorageKey: "dcTokens",
    signedTokenWhitelist: [],
    whitelistDialogWidth: "450px",
    whitelistDialogHeight: "350px"
};
var readSignedTicket = (function () {
    function readSignedTicket(source) {
        var signedDevconTicket = AsnParser.parse(uint8toBuffer(source), SignedDevconTicket);
        this.ticket = signedDevconTicket.ticket;
        logger(3, this.ticket);
    }
    return readSignedTicket;
}());
export { readSignedTicket };
var Outlet = (function () {
    function Outlet(config) {
        this.tokenConfig = Object.assign(defaultConfig, config);
        if (!this.tokenConfig.tokenParser) {
            this.tokenConfig.tokenParser = readSignedTicket;
        }
        this.tokenConfig.signedTokenWhitelist = this.tokenConfig.signedTokenWhitelist.map(function (origin) {
            try {
                return new URL(origin).origin;
            }
            catch (e) {
                logger(2, "Failed to validate whitelist origin: " + e.message);
            }
        });
        this.pageOnLoadEventHandler();
    }
    Outlet.prototype.getDataFromQuery = function (itemKey) {
        var val = this.urlParams ? this.urlParams.get(itemKey) : "";
        return val ? val : "";
    };
    Outlet.prototype.getFilter = function () {
        var filter = this.getDataFromQuery("filter");
        return filter ? JSON.parse(filter) : {};
    };
    Outlet.prototype.pageOnLoadEventHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, evtid, action, access, _a, requestorURL, issuer, tokenString, token, attestationBlob, attestationSecret, authHandler, _b, _c, useToken, params_1, urlToRedirect, e_1, token, wallet, address, _d, tokenUrlName, tokenSecretName, tokenIdName, itemStorageKey, tokens, event_1, e_2, e_3;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        params = window.location.hash.length > 1
                            ? "?" + window.location.hash.substring(1)
                            : window.location.search;
                        this.urlParams = new URLSearchParams(params);
                        evtid = this.getDataFromQuery("evtid");
                        action = this.getDataFromQuery("action");
                        access = this.getDataFromQuery("access");
                        logger(2, "Outlet received event ID " + evtid + " action " + action + " at " + document.location.href);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 17, , 18]);
                        _a = action;
                        switch (_a) {
                            case OutletAction.GET_ISSUER_TOKENS: return [3, 2];
                            case OutletAction.EMAIL_ATTEST_CALLBACK: return [3, 4];
                            case OutletAction.GET_PROOF: return [3, 10];
                        }
                        return [3, 11];
                    case 2: return [4, this.whitelistCheck(evtid, access === "write" ? "write" : "read")];
                    case 3:
                        _e.sent();
                        this.sendTokens(evtid);
                        return [3, 16];
                    case 4:
                        requestorURL = this.getDataFromQuery("requestor");
                        issuer = this.getDataFromQuery("issuer");
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 8, , 9]);
                        tokenString = this.getDataFromQuery("token");
                        token = JSON.parse(tokenString);
                        attestationBlob = this.getDataFromQuery("attestation");
                        attestationSecret = "0x" + this.getDataFromQuery("requestSecret");
                        _b = AuthHandler.bind;
                        _c = [void 0, this,
                            evtid,
                            this.tokenConfig];
                        return [4, rawTokenCheck(token, this.tokenConfig)];
                    case 6:
                        authHandler = new (_b.apply(AuthHandler, _c.concat([_e.sent(), null,
                            null,
                            false])))();
                        return [4, authHandler.getUseToken(attestationBlob, attestationSecret)];
                    case 7:
                        useToken = _e.sent();
                        if (requestorURL) {
                            params_1 = new URLSearchParams();
                            params_1.set("action", "proof-callback");
                            params_1.set("issuer", issuer);
                            params_1.set("attestation", useToken);
                            urlToRedirect = "".concat(requestorURL, "#").concat(params_1.toString());
                            console.log("urlToRedirect from OutletAction.EMAIL_ATTEST_CALLBACK: ", urlToRedirect);
                            document.location.href = urlToRedirect;
                            return [2];
                        }
                        this.dispatchAuthCallbackEvent(issuer, useToken, null);
                        return [3, 9];
                    case 8:
                        e_1 = _e.sent();
                        if (requestorURL)
                            return [2, this.proofRedirectError(issuer, e_1.message)];
                        this.dispatchAuthCallbackEvent(issuer, null, e_1.message);
                        return [3, 9];
                    case 9:
                        document.location.hash = "";
                        return [3, 16];
                    case 10:
                        {
                            token = this.getDataFromQuery("token");
                            wallet = this.getDataFromQuery("wallet");
                            address = this.getDataFromQuery("address");
                            requiredParams(token, "unsigned token is missing");
                            this.sendTokenProof(evtid, token, address, wallet);
                            return [3, 16];
                        }
                        _e.label = 11;
                    case 11:
                        _d = this.tokenConfig, tokenUrlName = _d.tokenUrlName, tokenSecretName = _d.tokenSecretName, tokenIdName = _d.tokenIdName, itemStorageKey = _d.itemStorageKey;
                        _e.label = 12;
                    case 12:
                        _e.trys.push([12, 14, , 15]);
                        tokens = readMagicUrl(tokenUrlName, tokenSecretName, tokenIdName, itemStorageKey, this.urlParams);
                        return [4, this.whitelistCheck(evtid, "write")];
                    case 13:
                        _e.sent();
                        storeMagicURL(tokens, itemStorageKey);
                        event_1 = new Event("tokensupdated");
                        document.body.dispatchEvent(event_1);
                        return [3, 15];
                    case 14:
                        e_2 = _e.sent();
                        return [3, 15];
                    case 15:
                        this.sendTokens(evtid);
                        return [3, 16];
                    case 16: return [3, 18];
                    case 17:
                        e_3 = _e.sent();
                        console.error(e_3);
                        this.sendErrorResponse(evtid, e_3.message);
                        return [3, 18];
                    case 18: return [2];
                }
            });
        });
    };
    Outlet.prototype.dispatchAuthCallbackEvent = function (issuer, proof, error) {
        var event = new CustomEvent("auth-callback", {
            detail: {
                proof: proof,
                issuer: issuer,
                error: error
            }
        });
        window.dispatchEvent(event);
    };
    Outlet.prototype.whitelistCheck = function (evtid, whiteListType) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var origin, accessWhitelist, storageAccessRequired, _b, needsPermission;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if ((!window.parent && !window.opener) || !document.referrer)
                            return [2];
                        origin = new URL(document.referrer).origin;
                        if (origin === document.location.origin)
                            return [2];
                        accessWhitelist = (_a = JSON.parse(localStorage.getItem("tn-whitelist"))) !== null && _a !== void 0 ? _a : {};
                        _b = document.hasStorageAccess;
                        if (!_b) return [3, 2];
                        return [4, document.hasStorageAccess()];
                    case 1:
                        _b = !(_c.sent());
                        _c.label = 2;
                    case 2:
                        storageAccessRequired = _b;
                        needsPermission = this.tokenConfig.signedTokenWhitelist.indexOf(origin) === -1 &&
                            (!accessWhitelist[origin] || (accessWhitelist[origin].type === "read" && whiteListType === "write"));
                        if (needsPermission || storageAccessRequired) {
                            return [2, new Promise(function (resolve, reject) {
                                    var typeTxt = whiteListType === "read" ? "read" : "read & write";
                                    var permissionTxt = "".concat(origin, " is requesting ").concat(typeTxt, " access to your ").concat(_this.tokenConfig.title, " tickets");
                                    var acceptBtn = '<button id="tn-access-accept">Accept</button>';
                                    var denyBtn = '<button id="tn-access-deny">Deny</button>';
                                    var content = _this.tokenConfig.whitelistDialogRenderer ?
                                        _this.tokenConfig.whitelistDialogRenderer(permissionTxt, acceptBtn, denyBtn) :
                                        "\n\t\t\t\t\t\t<div style=\"font-family: sans-serif; text-align: center; position: absolute; width: 100vw; min-height: 100vh;top: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\tbackground: #0C0A50;\n\t\t\t\t\t\tz-index: 99999;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\tpadding: 30px;\n\t\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\t\tline-height: 1.2;\">\n\t\t\t\t\t\t\t<p>".concat(permissionTxt, "</p>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t").concat(acceptBtn, "\n\t\t\t\t\t\t\t").concat(denyBtn, "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t");
                                    document.body.insertAdjacentHTML("beforeend", content);
                                    document.getElementById("tn-access-accept").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                                        var e_4;
                                        var _a;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!storageAccessRequired) return [3, 5];
                                                    _b.label = 1;
                                                case 1:
                                                    _b.trys.push([1, 3, , 4]);
                                                    return [4, document.requestStorageAccess()];
                                                case 2:
                                                    _b.sent();
                                                    return [3, 4];
                                                case 3:
                                                    e_4 = _b.sent();
                                                    console.error(e_4);
                                                    reject(new Error("IFRAME_STORAGE"));
                                                    return [2];
                                                case 4:
                                                    accessWhitelist = (_a = JSON.parse(localStorage.getItem("tn-whitelist"))) !== null && _a !== void 0 ? _a : {};
                                                    _b.label = 5;
                                                case 5:
                                                    if (!accessWhitelist[origin] || whiteListType !== accessWhitelist[origin].type) {
                                                        accessWhitelist[origin] = {
                                                            type: whiteListType
                                                        };
                                                        localStorage.setItem("tn-whitelist", JSON.stringify(accessWhitelist));
                                                    }
                                                    resolve();
                                                    return [2];
                                            }
                                        });
                                    }); });
                                    document.getElementById("tn-access-deny").addEventListener("click", function () {
                                        reject("USER_ABORT");
                                    });
                                    _this.sendMessageResponse({
                                        evtid: evtid,
                                        evt: ResponseActionBase.SHOW_FRAME,
                                        max_width: _this.tokenConfig.whitelistDialogWidth,
                                        min_height: _this.tokenConfig.whitelistDialogHeight
                                    });
                                })];
                        }
                        return [2];
                }
            });
        });
    };
    Outlet.prototype.prepareTokenOutput = function (filter) {
        var _a;
        var storageTokens = localStorage.getItem(this.tokenConfig.itemStorageKey);
        if (!storageTokens)
            return [];
        var includeSigned = false;
        if (((_a = this.tokenConfig.signedTokenWhitelist) === null || _a === void 0 ? void 0 : _a.length) &&
            this.tokenConfig.signedTokenWhitelist.indexOf(this.getRequestOrigin()) > -1) {
            includeSigned = true;
        }
        var decodedTokens = decodeTokens(storageTokens, this.tokenConfig.tokenParser, this.tokenConfig.unsignedTokenDataName, includeSigned);
        return filterTokens(decodedTokens, filter);
    };
    Outlet.prototype.sendTokenProof = function (evtid, token, address, wallet) {
        return __awaiter(this, void 0, void 0, function () {
            var unsignedToken, redirect, tokenObj, authHandler, tokenProof, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!token)
                            return [2, "error"];
                        unsignedToken = JSON.parse(token);
                        redirect = this.urlParams.get("redirect") === "true" ?
                            (document.location.origin + document.location.pathname + document.location.search) : false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4, rawTokenCheck(unsignedToken, this.tokenConfig)];
                    case 2:
                        tokenObj = _a.sent();
                        authHandler = new AuthHandler(this, evtid, this.tokenConfig, tokenObj, address, wallet, redirect, unsignedToken);
                        return [4, authHandler.authenticate()];
                    case 3:
                        tokenProof = _a.sent();
                        this.sendMessageResponse({
                            evtid: evtid,
                            evt: OutletResponseAction.PROOF,
                            data: {
                                issuer: this.tokenConfig.collectionID,
                                proof: tokenProof
                            }
                        });
                        return [3, 5];
                    case 4:
                        e_5 = _a.sent();
                        logger(2, e_5);
                        if (redirect)
                            return [2, this.proofRedirectError(this.getDataFromQuery("issuer"), e_5.message)];
                        this.sendErrorResponse(evtid, e_5.message);
                        return [3, 5];
                    case 5: return [2];
                }
            });
        });
    };
    Outlet.prototype.getRequestOrigin = function () {
        var requester = document.referrer;
        if (!requester)
            return null;
        try {
            return new URL(requester).origin;
        }
        catch (e) {
            return null;
        }
    };
    Outlet.prototype.sendTokens = function (evtid) {
        var issuerTokens = this.prepareTokenOutput(this.getFilter());
        this.sendMessageResponse({
            evtid: evtid,
            evt: OutletResponseAction.ISSUER_TOKENS,
            data: {
                issuer: this.tokenConfig.collectionID,
                tokens: issuerTokens
            }
        });
    };
    Outlet.prototype.sendErrorResponse = function (evtid, error) {
        this.sendMessageResponse({
            evtid: evtid,
            evt: ResponseActionBase.ERROR,
            errors: [error],
        });
    };
    Outlet.prototype.proofRedirectError = function (issuer, error) {
        var requestorURL = this.getDataFromQuery("requestor");
        var params = new URLSearchParams();
        params.set("action", "proof-callback");
        params.set("issuer", issuer);
        params.set("error", error);
        document.location.href = requestorURL + "#" + params.toString();
    };
    Outlet.prototype.sendMessageResponse = function (response) {
        if (!document.referrer) {
            return;
        }
        var target, origin;
        if (!window.opener) {
            target = window.parent;
        }
        else {
            target = window.opener;
        }
        if (target)
            target.postMessage(response, "*");
    };
    return Outlet;
}());
export { Outlet };
//# sourceMappingURL=index.js.map