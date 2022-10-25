export var getBrowserData = function () {
    var inBrowser = typeof window !== "undefined";
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isIE = UA && /msie|trident/.test(UA);
    var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
    var isEdge = UA && UA.indexOf("edg/") > 0;
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    var isPhantomJS = UA && /phantomjs/.test(UA);
    var isFireFox = UA && /firefox\/\d+/.test(UA);
    var isSafari = window.safari ? true : false;
    var isBrave = !!window.navigator["brave"];
    var isAndroid = UA && UA.indexOf("android") > 0;
    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
    var isMac = UA && /\smac\s/.test(UA);
    var isWindows = UA && /windows/.test(UA);
    var isTouchDevice = false;
    var isMobile = window.matchMedia;
    if (isMobile) {
        var match_mobile = isMobile("(pointer:coarse)");
        isTouchDevice = match_mobile.matches;
    }
    var windowEthereum = window.ethereum;
    if (typeof window.ethereum === "undefined") {
        windowEthereum = {
            isMetaMask: false,
            isAlphaWallet: false,
            isTrust: false,
            isStatusWallet: false,
            isGoWallet: false,
        };
    }
    var isAlphaWallet = isTouchDevice && !!windowEthereum.isAlphaWallet;
    var isTrust = isTouchDevice && !!windowEthereum.isTrust;
    var isStatusWallet = isTouchDevice && !!windowEthereum.isStatusWallet;
    var isGoWallet = isTouchDevice && !!windowEthereum.isGoWallet;
    var isMyEthereumWallet = isTouchDevice && !!windowEthereum.isTrust && !!windowEthereum.isMetaMask;
    var isImToken = !!navigator.userAgent.match(/\simToken\//);
    var isMetaMask = isTouchDevice && !!windowEthereum.isMetaMask && !isTrust && !isBrave;
    return {
        iE: isIE,
        iE9: isIE9,
        edge: isEdge,
        chrome: isChrome,
        phantomJS: isPhantomJS,
        fireFox: isFireFox,
        safari: isSafari,
        android: isAndroid,
        iOS: isIOS,
        mac: isMac,
        windows: isWindows,
        touchDevice: isTouchDevice,
        metaMask: isMetaMask,
        alphaWallet: isAlphaWallet,
        mew: isMyEthereumWallet,
        trust: isTrust,
        goWallet: isGoWallet,
        status: isStatusWallet,
        imToken: isImToken,
        brave: isBrave,
        braveAndroid: isBrave && isAndroid,
        braveIOS: isBrave && isIOS,
        metaMaskAndroid: isAndroid && isMetaMask,
        alphaWalletAndroid: isAndroid && isAlphaWallet,
        mewAndroid: isAndroid && isMyEthereumWallet,
        imTokenAndroid: isAndroid && isImToken,
    };
};
export function isMacOrIOS() {
    return !!window.safari ||
        /iphone|ipad|ipod|ios/.test(window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : "");
}
export function isBrave() {
    return !!window.navigator["brave"];
}
//# sourceMappingURL=getBrowserData.js.map