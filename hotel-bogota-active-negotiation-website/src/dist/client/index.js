var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { Messaging, MessageAction, MessageResponseAction } from "./messaging";
import { Popup } from "./popup";
import { asyncHandle, logger, requiredParams } from "../utils";
import { connectMetamaskAndGetAddress, getChallengeSigned, validateUseEthKey } from "../core";
import { tokenLookup } from "../tokenLookup";
import Web3WalletProvider from "./../utils/Web3WalletProvider";
import "./../vendor/keyShape";
import { Authenticator } from "@tokenscript/attestation";
var Client = (function () {
    function Client(config) {
        var _this = this;
        this.prePopulateTokenLookupStore = function (issuers) {
            issuers.forEach(function (issuer) {
                if (!issuer.collectionID)
                    return;
                issuer.collectionID = _this.formatCollectionID(issuer.collectionID);
                var isOnChainToken = issuer.contract && issuer.chain;
                if (isOnChainToken) {
                    issuer.chain = _this.formatCollectionChain(issuer.chain);
                    if (_this.onChainTokens[issuer.collectionID]) {
                        console.warn("duplicate collectionID key ".concat(issuer.collectionID, ", use unique keys per collection."));
                        return;
                    }
                    _this.onChainTokens.tokenKeys.push(issuer.collectionID);
                    _this.onChainTokens[issuer.collectionID] = { tokens: [] };
                }
                else {
                    _this.offChainTokens.tokenKeys.push(issuer.collectionID);
                    _this.offChainTokens[issuer.collectionID] = { tokens: [] };
                }
                _this.updateTokenLookupStore(issuer.collectionID, issuer);
            });
            return issuers;
        };
        this.eventSender = {
            emitAllTokensToClient: function (tokens) {
                _this.on("tokens", null, tokens);
            },
            emitSelectedTokensToClient: function () {
                _this.on("tokens-selected", null, { selectedTokens: _this.selectedTokens });
            },
            emitProofToClient: function (proof, issuer, error) {
                if (error === void 0) { error = ""; }
                _this.on("token-proof", null, { proof: proof, issuer: issuer, error: error });
            },
        };
        var type = config.type, issuers = config.issuers, options = config.options, filter = config.filter;
        requiredParams(type, "type is required.");
        requiredParams(issuers, "issuers are missing.");
        this.tokenLookup = tokenLookup;
        this.type = type;
        this.options = options;
        this.issuers = issuers;
        this.filter = filter ? filter : {};
        this.offChainTokens = { tokenKeys: [] };
        this.onChainTokens = { tokenKeys: [] };
        this.selectedTokens = {};
        this.clientCallBackEvents = {};
        this.negotiateAlreadyFired = false;
        this.prePopulateTokenLookupStore(issuers);
        this.web3WalletProvider = new Web3WalletProvider();
        this.messaging = new Messaging();
    }
    Client.getKey = function (file) {
        return Authenticator.decodePublicKey(file);
    };
    Client.prototype.formatCollectionID = function (collectionID) {
        var formatedCollectionID = collectionID;
        if (/[A-Z]+/g.test(collectionID) || /\s+/g.test(collectionID)) {
            formatedCollectionID = collectionID.replace(/\s+/g, "-").toLowerCase();
            console.warn("Token Negotiator: Spaces or capital letters found in collectionID definition ".concat(collectionID, ", this has been re-formatted to ").concat(formatedCollectionID));
            collectionID = formatedCollectionID;
        }
        return collectionID;
    };
    Client.prototype.formatCollectionChain = function (chain) {
        return chain.toLowerCase();
    };
    Client.prototype.getTokenData = function () {
        return {
            offChainTokens: this.offChainTokens,
            onChainTokens: this.onChainTokens,
            tokenLookup: this.tokenLookup,
            selectedTokens: this.selectedTokens,
        };
    };
    Client.prototype.updateTokenLookupStore = function (tokenKey, data) {
        if (!this.tokenLookup[tokenKey])
            this.tokenLookup[tokenKey] = {};
        this.tokenLookup[tokenKey] = __assign(__assign({}, this.tokenLookup[tokenKey]), data);
    };
    Client.prototype.negotiatorConnectToWallet = function (walletType) {
        return __awaiter(this, void 0, void 0, function () {
            var walletAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.web3WalletProvider.connectWith(walletType)];
                    case 1:
                        walletAddress = _a.sent();
                        logger(2, "wallet address found: " + walletAddress);
                        return [2, walletAddress];
                }
            });
        });
    };
    Client.prototype.setPassiveNegotiationWebTokens = function (offChainTokens) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Promise.all(offChainTokens.tokenKeys.map(function (issuer) { return __awaiter(_this, void 0, void 0, function () {
                            var data, tokensOrigin, err_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        tokensOrigin = this.tokenLookup[issuer].tokenOrigin;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4, this.messaging.sendMessage({
                                                issuer: issuer,
                                                action: MessageAction.GET_ISSUER_TOKENS,
                                                filter: this.filter,
                                                origin: tokensOrigin,
                                            })];
                                    case 2:
                                        data = _a.sent();
                                        return [3, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        logger(2, err_1);
                                        return [2];
                                    case 4:
                                        logger(2, "tokens:");
                                        logger(2, data.tokens);
                                        this.offChainTokens[issuer].tokens = data.tokens;
                                        return [2];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Client.prototype.httpRequest = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(request)];
                    case 1:
                        response = _a.sent();
                        if (response.status > 299 || response.status < 200) {
                            throw new Error("HTTP Request error: " + response.statusText);
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4, response.json()];
                    case 3: return [2, _a.sent()];
                    case 4:
                        err_2 = _a.sent();
                        throw new Error(err_2.message);
                    case 5: return [2];
                }
            });
        });
    };
    Client.prototype.enrichTokenLookupDataOnChainTokens = function (onChainTokens) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Promise.all(onChainTokens.tokenKeys.map(function (issuerKey) { return __awaiter(_this, void 0, void 0, function () {
                            var lookupData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.httpRequest("https://api.token-discovery.tokenscript.org/get-token-collection?smartContract=".concat(this.tokenLookup[issuerKey].contract, "&chain=").concat(this.tokenLookup[issuerKey].chain))];
                                    case 1:
                                        lookupData = _a.sent();
                                        if (lookupData) {
                                            lookupData.onChain = true;
                                            this.updateTokenLookupStore(issuerKey, lookupData);
                                        }
                                        return [2];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Client.prototype.negotiate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.enrichTokenLookupDataOnChainTokens(this.onChainTokens)];
                    case 1:
                        _a.sent();
                        if (this.type === "active") {
                            this.activeNegotiationStrategy();
                        }
                        else {
                            this.passiveNegotiationStrategy();
                        }
                        return [2];
                }
            });
        });
    };
    Client.prototype.activeNegotiationStrategy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    var _a;
                    _this.popup = new Popup((_a = _this.options) === null || _a === void 0 ? void 0 : _a.overlay, _this);
                    _this.popup.initialize();
                }, 0);
                return [2];
            });
        });
    };
    Client.prototype.setPassiveNegotiationOnChainTokens = function (onChainTokens) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Promise.all(onChainTokens.tokenKeys.map(function (issuerKey) { return __awaiter(_this, void 0, void 0, function () {
                            var issuer, tokens;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        issuer = this.tokenLookup[issuerKey];
                                        return [4, this.httpRequest("https://api.token-discovery.tokenscript.org/get-owner-tokens?smartContract=".concat(issuer.smartContract, "&chain=").concat(issuer.chain, "&owner=").concat(this.web3WalletProvider.getConnectedWalletData()[0].address))];
                                    case 1:
                                        tokens = _a.sent();
                                        this.onChainTokens[issuerKey].tokens = tokens;
                                        return [2];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Client.prototype.passiveNegotiationStrategy = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var canUsePassive, outputOnChain, outputOffChain;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        canUsePassive = false;
                        if (!this.offChainTokens.tokenKeys.length) return [3, 2];
                        return [4, this.messaging.getCookieSupport((_a = this.tokenLookup[this.offChainTokens.tokenKeys[0]]) === null || _a === void 0 ? void 0 : _a.tokenOrigin)];
                    case 1:
                        canUsePassive = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!canUsePassive) return [3, 5];
                        return [4, asyncHandle(this.setPassiveNegotiationWebTokens(this.offChainTokens))];
                    case 3:
                        _b.sent();
                        return [4, asyncHandle(this.setPassiveNegotiationOnChainTokens(this.onChainTokens))];
                    case 4:
                        _b.sent();
                        outputOnChain = JSON.parse(JSON.stringify(this.onChainTokens));
                        delete outputOnChain.tokenKeys;
                        outputOffChain = JSON.parse(JSON.stringify(this.offChainTokens));
                        delete outputOffChain.tokenKeys;
                        logger(2, "Emit tokens");
                        logger(2, outputOffChain);
                        this.eventSender.emitAllTokensToClient(__assign(__assign({}, outputOffChain), outputOnChain));
                        return [3, 6];
                    case 5:
                        logger(2, "Enable 3rd party cookies via your browser settings to use this negotiation type.");
                        _b.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    Client.prototype.connectTokenIssuer = function (issuer) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, tokensOrigin, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = this.filter ? this.filter : {};
                        tokensOrigin = this.tokenLookup[issuer].tokenOrigin;
                        if (this.tokenLookup[issuer].onChain) {
                            return [2, this.connectOnChainTokenIssuer(this.tokenLookup[issuer])];
                        }
                        return [4, this.messaging.sendMessage({
                                issuer: issuer,
                                action: MessageAction.GET_ISSUER_TOKENS,
                                origin: tokensOrigin,
                                filter: filter,
                            })];
                    case 1:
                        data = _a.sent();
                        this.offChainTokens[issuer].tokens = data.tokens;
                        return [2, data.tokens];
                }
            });
        });
    };
    Client.prototype.connectOnChainTokenIssuer = function (issuer) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var walletAddress, tokens;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        walletAddress = (_a = this.web3WalletProvider.getConnectedWalletData()[0]) === null || _a === void 0 ? void 0 : _a.address;
                        requiredParams(issuer, "issuer is required.");
                        requiredParams(walletAddress, "wallet address is missing.");
                        return [4, this.onChainTokenModule.connectOnChainToken(issuer, this.web3WalletProvider.getConnectedWalletData()[0].address)];
                    case 1:
                        tokens = _b.sent();
                        this.onChainTokens[issuer.collectionID].tokens = tokens;
                        return [2, tokens];
                }
            });
        });
    };
    Client.prototype.updateSelectedTokens = function (selectedTokens) {
        this.selectedTokens = selectedTokens;
        this.eventSender.emitSelectedTokensToClient();
    };
    Client.prototype.createSignature = function () {
    };
    Client.prototype.authenticateOnChain = function (authRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var issuer, unsignedToken, useEthKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        issuer = authRequest.issuer, unsignedToken = authRequest.unsignedToken;
                        return [4, this.checkPublicAddressMatch(issuer, unsignedToken)];
                    case 1:
                        useEthKey = _a.sent();
                        if (!useEthKey) {
                            throw new Error("Address does not match");
                        }
                        return [2, { issuer: issuer, proof: useEthKey }];
                }
            });
        });
    };
    Client.prototype.authenticateOffChain = function (authRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var issuer, unsignedToken, tokenConfig, useEthKey, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        issuer = authRequest.issuer, unsignedToken = authRequest.unsignedToken;
                        tokenConfig = this.tokenLookup[issuer];
                        useEthKey = null;
                        if (!tokenConfig.unEndPoint) return [3, 2];
                        return [4, this.checkPublicAddressMatch(issuer, unsignedToken)];
                    case 1:
                        useEthKey = _a.sent();
                        if (!useEthKey) {
                            throw new Error("Address does not match");
                        }
                        _a.label = 2;
                    case 2: return [4, this.messaging.sendMessage({
                            issuer: issuer,
                            action: MessageAction.GET_PROOF,
                            origin: tokenConfig.tokenOrigin,
                            token: unsignedToken,
                            timeout: 0,
                        })];
                    case 3:
                        data = _a.sent();
                        if (useEthKey)
                            Authenticator.validateUseTicket(data.proof, this.tokenLookup[issuer].base64attestorPubKey, this.tokenLookup[issuer].base64senderPublicKeys, useEthKey.address);
                        return [2, data];
                }
            });
        });
    };
    Client.prototype.authenticate = function (authRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var issuer, unsignedToken, timer, data, err_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        issuer = authRequest.issuer, unsignedToken = authRequest.unsignedToken;
                        requiredParams(issuer && unsignedToken, "Issuer and signed token required.");
                        if (!this.tokenLookup[issuer])
                            throw new Error("Provided issuer was not found.");
                        if (this.popup) {
                            timer = setTimeout(function () {
                                _this.popup.showLoader("<h4>Authenticating...</h4>", "<small>You may need to sign a new challenge in your wallet</small>");
                                _this.popup.openOverlay();
                            }, 1000);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        data = void 0;
                        if (!this.tokenLookup[issuer].onChain) return [3, 3];
                        return [4, this.authenticateOnChain(authRequest)];
                    case 2:
                        data = _a.sent();
                        return [3, 5];
                    case 3: return [4, this.authenticateOffChain(authRequest)];
                    case 4:
                        data = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!data.proof)
                            return [2, this.handleProofError("Failed to get proof from the outlet.")];
                        logger(2, "Ticket proof successfully validated.");
                        this.eventSender.emitProofToClient(data.proof, data.issuer);
                        return [3, 7];
                    case 6:
                        err_3 = _a.sent();
                        logger(2, err_3);
                        this.handleProofError(err_3, issuer);
                        return [3, 7];
                    case 7:
                        if (this.popup) {
                            if (timer)
                                clearTimeout(timer);
                            this.popup.dismissLoader();
                            this.popup.closeOverlay();
                        }
                        return [2];
                }
            });
        });
    };
    Client.prototype.handleProofError = function (err, issuer) {
        if (this.popup)
            this.popup.showError(err);
        this.eventSender.emitProofToClient(null, issuer, err);
    };
    Client.prototype.checkPublicAddressMatch = function (issuer, unsignedToken) {
        return __awaiter(this, void 0, void 0, function () {
            var config, useEthKey, attestedAddress, walletAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = tokenLookup[issuer];
                        if (!config.unEndPoint) {
                            config = {
                                unEndPoint: "https://crypto-verify.herokuapp.com/use-devcon-ticket",
                                ethKeyitemStorageKey: "dcEthKeys",
                            };
                        }
                        if (!unsignedToken)
                            return [2, { status: false, useEthKey: null, proof: null }];
                        if (!!this.web3WalletProvider.getConnectedWalletData().length) return [3, 2];
                        return [4, this.web3WalletProvider.connectWith("MetaMask")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, getChallengeSigned(config, this.web3WalletProvider)];
                    case 3:
                        useEthKey = _a.sent();
                        return [4, validateUseEthKey(config.unEndPoint, useEthKey)];
                    case 4:
                        attestedAddress = _a.sent();
                        return [4, connectMetamaskAndGetAddress()];
                    case 5:
                        walletAddress = _a.sent();
                        if (walletAddress.toLowerCase() !== attestedAddress.toLowerCase())
                            throw new Error("useEthKey validation failed.");
                        return [2, useEthKey];
                }
            });
        });
    };
    Client.prototype.addTokenViaMagicLink = function (magicLink) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = new URL(magicLink);
                        params = url.hash.length > 1 ? url.hash.substring(1) : url.search.substring(1);
                        return [4, this.messaging.sendMessage({
                                action: MessageAction.MAGIC_URL,
                                urlParams: params,
                                origin: url.origin + url.pathname,
                            })];
                    case 1:
                        data = _a.sent();
                        if (data.evt === MessageResponseAction.ISSUER_TOKENS)
                            return [2, data.tokens];
                        throw new Error(data.errors.join("\n"));
                }
            });
        });
    };
    Client.prototype.on = function (type, callback, data) {
        requiredParams(type, "Event type is not defined");
        if (callback) {
            this.clientCallBackEvents[type] = callback;
        }
        else {
            if (this.clientCallBackEvents[type]) {
                return this.clientCallBackEvents[type].call(type, data);
            }
        }
    };
    return Client;
}());
export { Client };
//# sourceMappingURL=index.js.map