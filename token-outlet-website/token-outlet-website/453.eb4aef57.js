/*! For license information please see 453.eb4aef57.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 453 ], {
  2034: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
      detectEnv: () => v,
      detectOS: () => m,
      formatIOSMobile: () => j,
      formatMobileRegistry: () => X,
      formatMobileRegistryEntry: () => Q,
      getClientMeta: () => I,
      getCrypto: () => P,
      getCryptoOrThrow: () => L,
      getDappRegistryUrl: () => J,
      getDocument: () => S,
      getDocumentOrThrow: () => k,
      getFromWindow: () => C,
      getFromWindowOrThrow: () => A,
      getLocal: () => W,
      getLocalStorage: () => O,
      getLocalStorageOrThrow: () => M,
      getLocation: () => N,
      getLocationOrThrow: () => R,
      getMobileLinkRegistry: () => V,
      getMobileRegistryEntry: () => Y,
      getNavigator: () => T,
      getNavigatorOrThrow: () => B,
      getWalletRegistryUrl: () => $,
      isAndroid: () => w,
      isBrowser: () => E,
      isIOS: () => y,
      isMobile: () => b,
      isNode: () => x,
      mobileLinkChoiceKey: () => q,
      removeLocal: () => F,
      safeJsonParse: () => U,
      safeJsonStringify: () => D,
      saveMobileLinkInfo: () => H,
      setLocal: () => z
    });
    var r = n(3212);
    var o = n(1958);
    var i = function() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
      var r = Array(e), o = 0;
      for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, l = i.length; a < l; a++, o++) r[o] = i[a];
      return r;
    };
    var a = function() {
      return function(e, t, n) {
        this.name = e, this.version = t, this.os = n, this.type = 'browser';
      };
    }();
    var l = function() {
      return function(e) {
        this.version = e, this.type = 'node', this.name = 'node', this.os = process.platform;
      };
    }();
    var c = function() {
      return function(e, t, n, r) {
        this.name = e, this.version = t, this.os = n, this.bot = r, this.type = 'bot-device';
      };
    }();
    var s = function() {
      return function() {
        this.type = 'bot', this.bot = !0, this.name = 'bot', this.version = null, this.os = null;
      };
    }();
    var u = function() {
      return function() {
        this.type = 'react-native', this.name = 'react-native', this.version = null, this.os = null;
      };
    }();
    var f = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
    var h = [ [ 'aol', /AOLShield\/([0-9\._]+)/ ], [ 'edge', /Edge\/([0-9\._]+)/ ], [ 'edge-ios', /EdgiOS\/([0-9\._]+)/ ], [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ], [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ], [ 'samsung', /SamsungBrowser\/([0-9\.]+)/ ], [ 'silk', /\bSilk\/([0-9._-]+)\b/ ], [ 'miui', /MiuiBrowser\/([0-9\.]+)$/ ], [ 'beaker', /BeakerBrowser\/([0-9\.]+)/ ], [ 'edge-chromium', /EdgA?\/([0-9\.]+)/ ], [ 'chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ], [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ], [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ], [ 'fxios', /FxiOS\/([0-9\.]+)/ ], [ 'opera-mini', /Opera Mini.*Version\/([0-9\.]+)/ ], [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ], [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)/ ], [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ], [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ], [ 'ie', /MSIE\s(7\.0)/ ], [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ], [ 'android', /Android\s([0-9\.]+)/ ], [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ], [ 'safari', /Version\/([0-9\._]+).*Safari/ ], [ 'facebook', /FBAV\/([0-9\.]+)/ ], [ 'instagram', /Instagram\s([0-9\.]+)/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/ ], [ 'searchbot', /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/ ] ];
    var p = [ [ 'iOS', /iP(hone|od|ad)/ ], [ 'Android OS', /Android/ ], [ 'BlackBerry OS', /BlackBerry|BB10/ ], [ 'Windows Mobile', /IEMobile/ ], [ 'Amazon OS', /Kindle/ ], [ 'Windows 3.11', /Win16/ ], [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ], [ 'Windows 98', /(Windows 98)|(Win98)/ ], [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ], [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ], [ 'Windows Server 2003', /(Windows NT 5.2)/ ], [ 'Windows Vista', /(Windows NT 6.0)/ ], [ 'Windows 7', /(Windows NT 6.1)/ ], [ 'Windows 8', /(Windows NT 6.2)/ ], [ 'Windows 8.1', /(Windows NT 6.3)/ ], [ 'Windows 10', /(Windows NT 10.0)/ ], [ 'Windows ME', /Windows ME/ ], [ 'Open BSD', /OpenBSD/ ], [ 'Sun OS', /SunOS/ ], [ 'Chrome OS', /CrOS/ ], [ 'Linux', /(Linux)|(X11)/ ], [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ], [ 'QNX', /QNX/ ], [ 'BeOS', /BeOS/ ], [ 'OS/2', /OS\/2/ ] ];
    function d(e) {
      return e ? _(e) : 'undefined' == typeof document && 'undefined' != typeof navigator && 'ReactNative' === navigator.product ? new u : 'undefined' != typeof navigator ? _(navigator.userAgent) : function() {
        return 'undefined' != typeof process && process.version ? new l(process.version.slice(1)) : null;
      }();
    }
    function g(e) {
      return '' !== e && h.reduce((function(t, n) {
        var r = n[0], o = n[1];
        if (t) return t;
        var i = o.exec(e);
        return !!i && [ r, i ];
      }), !1);
    }
    function _(e) {
      var t = g(e);
      if (!t) return null;
      var n = t[0], r = t[1];
      if ('searchbot' === n) return new s;
      var o = r[1] && r[1].split(/[._]/).slice(0, 3);
      o ? o.length < 3 && (o = i(o, function(e) {
        var t = [];
        for (var n = 0; n < e; n++) t.push('0');
        return t;
      }(3 - o.length))) : o = [];
      var l = o.join('.');
      var u = function(e) {
        for (var t = 0, n = p.length; t < n; t++) {
          var r = p[t], o = r[0];
          if (r[1].exec(e)) return o;
        }
        return null;
      }(e);
      var h = f.exec(e);
      return h && h[1] ? new c(n, l, u, h[1]) : new a(n, l, u);
    }
    function v(e) {
      return d(e);
    }
    function m() {
      const e = v();
      return e && e.os ? e.os : void 0;
    }
    function w() {
      const e = m();
      return !!e && e.toLowerCase().includes("android");
    }
    function y() {
      const e = m();
      return !!e && (e.toLowerCase().includes("ios") || e.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1);
    }
    function b() {
      return !!m() && (w() || y());
    }
    function x() {
      const e = v();
      return !(!e || !e.name) && "node" === e.name.toLowerCase();
    }
    function E() {
      return !x() && !!T();
    }
    const C = o.getFromWindow;
    const A = o.getFromWindowOrThrow;
    const k = o.getDocumentOrThrow;
    const S = o.getDocument;
    const B = o.getNavigatorOrThrow;
    const T = o.getNavigator;
    const R = o.getLocationOrThrow;
    const N = o.getLocation;
    const L = o.getCryptoOrThrow;
    const P = o.getCrypto;
    const M = o.getLocalStorageOrThrow;
    const O = o.getLocalStorage;
    function I() {
      return r.D();
    }
    const U = function(e) {
      if ("string" != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
      try {
        return JSON.parse(e);
      } catch (t) {
        return e;
      }
    };
    const D = function(e) {
      return "string" == typeof e ? e : JSON.stringify(e);
    };
    function z(e, t) {
      const n = D(t);
      const r = O();
      r && r.setItem(e, n);
    }
    function W(e) {
      let t = null;
      let n = null;
      const r = O();
      return r && (n = r.getItem(e)), t = n ? U(n) : n, t;
    }
    function F(e) {
      const t = O();
      t && t.removeItem(e);
    }
    const q = "WALLETCONNECT_DEEPLINK_CHOICE";
    function j(e, t) {
      const n = encodeURIComponent(e);
      return t.universalLink ? `${t.universalLink}/wc?uri=${n}` : t.deepLink ? `${t.deepLink}${t.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${n}` : "";
    }
    function H(e) {
      const t = e.href.split("?")[0];
      z(q, Object.assign(Object.assign({}, e), {
        href: t
      }));
    }
    function Y(e, t) {
      return e.filter((e => e.name.toLowerCase().includes(t.toLowerCase())))[0];
    }
    function V(e, t) {
      let n = e;
      return t && (n = t.map((t => Y(e, t))).filter(Boolean)), n;
    }
    const K = "https://registry.walletconnect.com";
    function $() {
      return K + "/api/v2/wallets";
    }
    function J() {
      return K + "/api/v2/dapps";
    }
    function Q(e, t = "mobile") {
      var n;
      return {
        name: e.name || "",
        shortName: e.metadata.shortName || "",
        color: e.metadata.colors.primary || "",
        logo: null !== (n = e.image_url.sm) && void 0 !== n ? n : "",
        universalLink: e[t].universal || "",
        deepLink: e[t].native || ""
      };
    }
    function X(e, t = "mobile") {
      return Object.values(e).filter((e => !!e[t].universal || !!e[t].native)).map((e => Q(e, t)));
    }
  },
  1453: (e, t, n) => {
    function r(e) {
      return e && 'object' == typeof e && 'default' in e ? e.default : e;
    }
    var o = n(2034);
    var i = r(n(2366));
    var a = r(n(7447));
    var l = n(5473);
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
    "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var c = "walletconnect-wrapper";
    var s = "walletconnect-style-sheet";
    var u = "walletconnect-qrcode-modal";
    var f = "walletconnect-qrcode-text";
    function h(e) {
      return l.createElement("div", {
        className: "walletconnect-modal__header"
      }, l.createElement("img", {
        src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
        className: "walletconnect-modal__headerLogo"
      }), l.createElement("p", null, "WalletConnect"), l.createElement("div", {
        className: "walletconnect-modal__close__wrapper",
        onClick: e.onClose
      }, l.createElement("div", {
        id: "walletconnect-qrcode-close",
        className: "walletconnect-modal__close__icon"
      }, l.createElement("div", {
        className: "walletconnect-modal__close__line1"
      }), l.createElement("div", {
        className: "walletconnect-modal__close__line2"
      }))));
    }
    function p(e) {
      return l.createElement("a", {
        className: "walletconnect-connect__button",
        href: e.href,
        id: "walletconnect-connect-button-" + e.name,
        onClick: e.onClick,
        rel: "noopener noreferrer",
        style: {
          backgroundColor: e.color
        },
        target: "_blank"
      }, e.name);
    }
    function d(e) {
      var t = e.color;
      var n = e.href;
      var r = e.name;
      var o = e.logo;
      var i = e.onClick;
      return l.createElement("a", {
        className: "walletconnect-modal__base__row",
        href: n,
        onClick: i,
        rel: "noopener noreferrer",
        target: "_blank"
      }, l.createElement("h3", {
        className: "walletconnect-modal__base__row__h3"
      }, r), l.createElement("div", {
        className: "walletconnect-modal__base__row__right"
      }, l.createElement("div", {
        className: "walletconnect-modal__base__row__right__app-icon",
        style: {
          background: "url('" + o + "') " + t,
          backgroundSize: "100%"
        }
      }), l.createElement("img", {
        src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
        className: "walletconnect-modal__base__row__right__caret"
      })));
    }
    function g(e) {
      var t = e.color;
      var n = e.href;
      var r = e.name;
      var o = e.logo;
      var i = e.onClick;
      var a = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
      return l.createElement("a", {
        className: "walletconnect-connect__button__icon_anchor",
        href: n,
        onClick: i,
        rel: "noopener noreferrer",
        target: "_blank"
      }, l.createElement("div", {
        className: "walletconnect-connect__button__icon",
        style: {
          background: "url('" + o + "') " + t,
          backgroundSize: "100%"
        }
      }), l.createElement("div", {
        style: {
          fontSize: a
        },
        className: "walletconnect-connect__button__text"
      }, r));
    }
    function _(e) {
      var t = o.isAndroid();
      var n = l.useState("");
      var r = n[0];
      var i = n[1];
      var a = l.useState("");
      var c = a[0];
      var s = a[1];
      var u = l.useState(1);
      var h = u[0];
      var _ = u[1];
      var v = c ? e.links.filter((function(e) {
        return e.name.toLowerCase().includes(c.toLowerCase());
      })) : e.links;
      var m = e.errorMessage;
      var w = c || v.length > 5;
      var y = Math.ceil(v.length / 12);
      var b = [ 12 * (h - 1) + 1, 12 * h ];
      var x = v.length ? v.filter((function(e, t) {
        return t + 1 >= b[0] && t + 1 <= b[1];
      })) : [];
      var E = !(t || !(y > 1));
      var C = void 0;
      return l.createElement("div", null, l.createElement("p", {
        id: f,
        className: "walletconnect-qrcode__text"
      }, t ? e.text.connect_mobile_wallet : e.text.choose_preferred_wallet), !t && l.createElement("input", {
        className: "walletconnect-search__input",
        placeholder: "Search",
        value: r,
        onChange: function(e) {
          i(e.target.value), clearTimeout(C), e.target.value ? C = setTimeout((function() {
            s(e.target.value), _(1);
          }), 1e3) : (i(""), s(""), _(1));
        }
      }), l.createElement("div", {
        className: "walletconnect-connect__buttons__wrapper" + (t ? "__android" : w && v.length ? "__wrap" : "")
      }, t ? l.createElement(p, {
        name: e.text.connect,
        color: "rgb(64, 153, 255)",
        href: e.uri,
        onClick: l.useCallback((function() {
          o.saveMobileLinkInfo({
            name: "Unknown",
            href: e.uri
          });
        }), [])
      }) : x.length ? x.map((function(t) {
        var n = t.color;
        var r = t.name;
        var i = t.shortName;
        var a = t.logo;
        var c = o.formatIOSMobile(e.uri, t);
        var s = l.useCallback((function() {
          o.saveMobileLinkInfo({
            name: r,
            href: c
          });
        }), [ x ]);
        return w ? l.createElement(g, {
          color: n,
          href: c,
          name: i || r,
          logo: a,
          onClick: s
        }) : l.createElement(d, {
          color: n,
          href: c,
          name: r,
          logo: a,
          onClick: s
        });
      })) : l.createElement(l.Fragment, null, l.createElement("p", null, m.length ? e.errorMessage : e.links.length && !v.length ? e.text.no_wallets_found : e.text.loading))), E && l.createElement("div", {
        className: "walletconnect-modal__footer"
      }, Array(y).fill(0).map((function(e, t) {
        var n = t + 1;
        var r = h === n;
        return l.createElement("a", {
          style: {
            margin: "auto 10px",
            fontWeight: r ? "bold" : "normal"
          },
          onClick: function() {
            return _(n);
          }
        }, n);
      }))));
    }
    function v(e) {
      var t = !!e.message.trim();
      return l.createElement("div", {
        className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "")
      }, e.message);
    }
    function m(e) {
      var t = l.useState("");
      var n = t[0];
      var r = t[1];
      var o = l.useState("");
      var c = o[0];
      var s = o[1];
      l.useEffect((function() {
        try {
          return Promise.resolve(function(e) {
            try {
              var t = "";
              return Promise.resolve(i.toString(e, {
                margin: 0,
                type: "svg"
              })).then((function(e) {
                return "string" == typeof e && (t = e.replace("<svg", "<svg class=\"walletconnect-qrcode__image\"")), t;
              }));
            } catch (n) {
              return Promise.reject(n);
            }
          }(e.uri)).then((function(e) {
            s(e);
          }));
        } catch (t) {
          Promise.reject(t);
        }
      }), []);
      return l.createElement("div", null, l.createElement("p", {
        id: f,
        className: "walletconnect-qrcode__text"
      }, e.text.scan_qrcode_with_wallet), l.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: c
        }
      }), l.createElement("div", {
        className: "walletconnect-modal__footer"
      }, l.createElement("a", {
        onClick: function() {
          a(e.uri) ? (r(e.text.copied_to_clipboard), setInterval((function() {
            return r("");
          }), 1200)) : (r("Error"), setInterval((function() {
            return r("");
          }), 1200));
        }
      }, e.text.copy_to_clipboard)), l.createElement(v, {
        message: n
      }));
    }
    function w(e) {
      var t = o.isAndroid();
      var n = o.isMobile();
      var r = n ? e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks ? e.qrcodeModalOptions.mobileLinks : void 0 : e.qrcodeModalOptions && e.qrcodeModalOptions.desktopLinks ? e.qrcodeModalOptions.desktopLinks : void 0;
      var i = l.useState(!1);
      var a = i[0];
      var c = i[1];
      var s = l.useState(!1);
      var f = s[0];
      var p = s[1];
      var d = l.useState(!n);
      var g = d[0];
      var v = d[1];
      var w = {
        mobile: n,
        text: e.text,
        uri: e.uri,
        qrcodeModalOptions: e.qrcodeModalOptions
      };
      var y = l.useState("");
      var b = y[0];
      var x = y[1];
      var E = l.useState(!1);
      var C = E[0];
      var A = E[1];
      var k = l.useState([]);
      var S = k[0];
      var B = k[1];
      var T = l.useState("");
      var R = T[0];
      var N = T[1];
      var L = function() {
        f || a || r && !r.length || S.length > 0 || l.useEffect((function() {
          !function() {
            try {
              if (t) return Promise.resolve();
              c(!0);
              var i = function(e, t) {
                try {
                  var n = e();
                } catch (r) {
                  return t(r);
                }
                return n && n.then ? n.then(void 0, t) : n;
              }((function() {
                var t = e.qrcodeModalOptions && e.qrcodeModalOptions.registryUrl ? e.qrcodeModalOptions.registryUrl : o.getWalletRegistryUrl();
                return Promise.resolve(fetch(t)).then((function(t) {
                  return Promise.resolve(t.json()).then((function(t) {
                    var i = t.listings;
                    var a = n ? "mobile" : "desktop";
                    var l = o.getMobileLinkRegistry(o.formatMobileRegistry(i, a), r);
                    c(!1), p(!0), N(l.length ? "" : e.text.no_supported_wallets), B(l);
                    var s = 1 === l.length;
                    s && (x(o.formatIOSMobile(e.uri, l[0])), v(!0)), A(s);
                  }));
                }));
              }), (function(t) {
                c(!1), p(!0), N(e.text.something_went_wrong), console.error(t);
              }));
              Promise.resolve(i && i.then ? i.then((function() {})) : void 0);
            } catch (a) {
              return Promise.reject(a);
            }
          }();
        }));
      };
      L();
      var P = n ? g : !g;
      return l.createElement("div", {
        id: u,
        className: "walletconnect-qrcode__base animated fadeIn"
      }, l.createElement("div", {
        className: "walletconnect-modal__base"
      }, l.createElement(h, {
        onClose: e.onClose
      }), C && g ? l.createElement("div", {
        className: "walletconnect-modal__single_wallet"
      }, l.createElement("a", {
        onClick: function() {
          return o.saveMobileLinkInfo({
            name: S[0].name,
            href: b
          });
        },
        href: b,
        rel: "noopener noreferrer",
        target: "_blank"
      }, e.text.connect_with + " " + (C ? S[0].name : "") + " ›")) : t || a || !a && S.length ? l.createElement("div", {
        className: "walletconnect-modal__mobile__toggle" + (P ? " right__selected" : "")
      }, l.createElement("div", {
        className: "walletconnect-modal__mobile__toggle_selector"
      }), n ? l.createElement(l.Fragment, null, l.createElement("a", {
        onClick: function() {
          return v(!1), L();
        }
      }, e.text.mobile), l.createElement("a", {
        onClick: function() {
          return v(!0);
        }
      }, e.text.qrcode)) : l.createElement(l.Fragment, null, l.createElement("a", {
        onClick: function() {
          return v(!0);
        }
      }, e.text.qrcode), l.createElement("a", {
        onClick: function() {
          return v(!1), L();
        }
      }, e.text.desktop))) : null, l.createElement("div", null, g || !t && !a && !S.length ? l.createElement(m, Object.assign({}, w)) : l.createElement(_, Object.assign({}, w, {
        links: S,
        errorMessage: R
      })))));
    }
    var y = {
      de: {
        choose_preferred_wallet: "Wähle bevorzugte Wallet",
        connect_mobile_wallet: "Verbinde mit Mobile Wallet",
        scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
        connect: "Verbinden",
        qrcode: "QR-Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "In die Zwischenablage kopieren",
        copied_to_clipboard: "In die Zwischenablage kopiert!",
        connect_with: "Verbinden mit Hilfe von",
        loading: "Laden...",
        something_went_wrong: "Etwas ist schief gelaufen",
        no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
        no_wallets_found: "keine Wallet gefunden"
      },
      en: {
        choose_preferred_wallet: "Choose your preferred wallet",
        connect_mobile_wallet: "Connect to Mobile Wallet",
        scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
        connect: "Connect",
        qrcode: "QR Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "Copy to clipboard",
        copied_to_clipboard: "Copied to clipboard!",
        connect_with: "Connect with",
        loading: "Loading...",
        something_went_wrong: "Something went wrong",
        no_supported_wallets: "There are no supported wallets yet",
        no_wallets_found: "No wallets found"
      },
      es: {
        choose_preferred_wallet: "Elige tu billetera preferida",
        connect_mobile_wallet: "Conectar a billetera móvil",
        scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
        connect: "Conectar",
        qrcode: "Código QR",
        mobile: "Móvil",
        desktop: "Desktop",
        copy_to_clipboard: "Copiar",
        copied_to_clipboard: "Copiado!",
        connect_with: "Conectar mediante",
        loading: "Cargando...",
        something_went_wrong: "Algo salió mal",
        no_supported_wallets: "Todavía no hay billeteras compatibles",
        no_wallets_found: "No se encontraron billeteras"
      },
      fr: {
        choose_preferred_wallet: "Choisissez votre portefeuille préféré",
        connect_mobile_wallet: "Se connecter au portefeuille mobile",
        scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
        connect: "Se connecter",
        qrcode: "QR Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "Copier",
        copied_to_clipboard: "Copié!",
        connect_with: "Connectez-vous à l'aide de",
        loading: "Chargement...",
        something_went_wrong: "Quelque chose a mal tourné",
        no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
        no_wallets_found: "Aucun portefeuille trouvé"
      },
      ko: {
        choose_preferred_wallet: "원하는 지갑을 선택하세요",
        connect_mobile_wallet: "모바일 지갑과 연결",
        scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
        connect: "연결",
        qrcode: "QR 코드",
        mobile: "모바일",
        desktop: "데스크탑",
        copy_to_clipboard: "클립보드에 복사",
        copied_to_clipboard: "클립보드에 복사되었습니다!",
        connect_with: "와 연결하다",
        loading: "로드 중...",
        something_went_wrong: "문제가 발생했습니다.",
        no_supported_wallets: "아직 지원되는 지갑이 없습니다",
        no_wallets_found: "지갑을 찾을 수 없습니다"
      },
      pt: {
        choose_preferred_wallet: "Escolha sua carteira preferida",
        connect_mobile_wallet: "Conectar-se à carteira móvel",
        scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
        connect: "Conectar",
        qrcode: "Código QR",
        mobile: "Móvel",
        desktop: "Desktop",
        copy_to_clipboard: "Copiar",
        copied_to_clipboard: "Copiado!",
        connect_with: "Ligar por meio de",
        loading: "Carregamento...",
        something_went_wrong: "Algo correu mal",
        no_supported_wallets: "Ainda não há carteiras suportadas",
        no_wallets_found: "Nenhuma carteira encontrada"
      },
      zh: {
        choose_preferred_wallet: "选择你的钱包",
        connect_mobile_wallet: "连接至移动端钱包",
        scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
        connect: "连接",
        qrcode: "二维码",
        mobile: "移动",
        desktop: "桌面",
        copy_to_clipboard: "复制到剪贴板",
        copied_to_clipboard: "复制到剪贴板成功！",
        connect_with: "通过以下方式连接",
        loading: "正在加载...",
        something_went_wrong: "出了问题",
        no_supported_wallets: "目前还没有支持的钱包",
        no_wallets_found: "没有找到钱包"
      },
      fa: {
        choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
        connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
        scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
        connect: "اتصال",
        qrcode: "کد QR",
        mobile: "سیار",
        desktop: "دسکتاپ",
        copy_to_clipboard: "کپی به کلیپ بورد",
        copied_to_clipboard: "در کلیپ بورد کپی شد!",
        connect_with: "ارتباط با",
        loading: "...بارگذاری",
        something_went_wrong: "مشکلی پیش آمد",
        no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
        no_wallets_found: "هیچ کیف پولی پیدا نشد"
      }
    };
    function b() {
      var e = o.getDocumentOrThrow();
      var t = e.getElementById(u);
      t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
        var t = e.getElementById(c);
        t && e.body.removeChild(t);
      }), 300));
    }
    function x(e) {
      return function() {
        b(), e && e();
      };
    }
    function E() {
      var e = o.getNavigatorOrThrow().language.split("-")[0] || "en";
      return y[e] || y.en;
    }
    function C(e, t, n) {
      !function() {
        var e = o.getDocumentOrThrow();
        var t = e.getElementById(s);
        t && e.head.removeChild(t);
        var n = e.createElement("style");
        n.setAttribute("id", s), n.innerText = ":root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, \"SF Pro Rounded\", \"SF Pro Text\", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url(\"images/wc-logo.svg\") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n", 
        e.head.appendChild(n);
      }();
      var r = function() {
        var e = o.getDocumentOrThrow();
        var t = e.createElement("div");
        return t.setAttribute("id", c), e.body.appendChild(t), t;
      }();
      l.render(l.createElement(w, {
        text: E(),
        uri: e,
        onClose: x(t),
        qrcodeModalOptions: n
      }), r);
    }
    var A = function() {
      return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
    };
    var k = {
      open: function(e, t, n) {
        console.log(e), A() ? function(e) {
          i.toString(e, {
            type: "terminal"
          }).then(console.log);
        }(e) : C(e, t, n);
      },
      close: function() {
        A() || function() {
          b();
        }();
      }
    };
    e.exports = k;
  },
  1958: (e, t) => {
    "use strict";
    function n(e) {
      let t;
      return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t;
    }
    function r(e) {
      const t = n(e);
      if (!t) throw new Error(`${e} is not defined in Window`);
      return t;
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, 
    t.getFromWindow = n, t.getFromWindowOrThrow = r, t.getDocumentOrThrow = function() {
      return r("document");
    }, t.getDocument = function() {
      return n("document");
    }, t.getNavigatorOrThrow = function() {
      return r("navigator");
    }, t.getNavigator = function() {
      return n("navigator");
    }, t.getLocationOrThrow = function() {
      return r("location");
    }, t.getLocation = function() {
      return n("location");
    }, t.getCryptoOrThrow = function() {
      return r("crypto");
    }, t.getCrypto = function() {
      return n("crypto");
    }, t.getLocalStorageOrThrow = function() {
      return r("localStorage");
    }, t.getLocalStorage = function() {
      return n("localStorage");
    };
  },
  3212: (e, t, n) => {
    "use strict";
    t.D = void 0;
    const r = n(1958);
    t.D = function() {
      let e;
      let t;
      try {
        e = r.getDocumentOrThrow(), t = r.getLocationOrThrow();
      } catch (i) {
        return null;
      }
      function n(...t) {
        const n = e.getElementsByTagName("meta");
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          const o = [ "itemprop", "property", "name" ].map((e => r.getAttribute(e))).filter((e => !!e && t.includes(e)));
          if (o.length && o) {
            const e = r.getAttribute("content");
            if (e) return e;
          }
        }
        return "";
      }
      const o = function() {
        let t = n("name", "og:site_name", "og:title", "twitter:title");
        return t || (t = e.title), t;
      }();
      return {
        description: function() {
          return n("description", "og:description", "twitter:description", "keywords");
        }(),
        url: t.origin,
        icons: function() {
          const n = e.getElementsByTagName("link");
          const r = [];
          for (let e = 0; e < n.length; e++) {
            const o = n[e];
            const i = o.getAttribute("rel");
            if (i && i.toLowerCase().indexOf("icon") > -1) {
              const e = o.getAttribute("href");
              if (e) if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                let n = t.protocol + "//" + t.host;
                if (0 === e.indexOf("/")) n += e; else {
                  const r = t.pathname.split("/");
                  r.pop();
                  n += r.join("/") + "/" + e;
                }
                r.push(n);
              } else if (0 === e.indexOf("//")) {
                const n = t.protocol + e;
                r.push(n);
              } else r.push(e);
            }
          }
          return r;
        }(),
        name: o
      };
    };
  },
  5155: (e, t) => {
    "use strict";
    t.byteLength = function(e) {
      var t = c(e);
      var n = t[0];
      var r = t[1];
      return 3 * (n + r) / 4 - r;
    }, t.toByteArray = function(e) {
      var t;
      var n = c(e);
      var i = n[0];
      var a = n[1];
      var l = new o(function(e, t, n) {
        return 3 * (t + n) / 4 - n;
      }(0, i, a));
      var s = 0;
      var u = a > 0 ? i - 4 : i;
      var f;
      for (f = 0; f < u; f += 4) t = r[e.charCodeAt(f)] << 18 | r[e.charCodeAt(f + 1)] << 12 | r[e.charCodeAt(f + 2)] << 6 | r[e.charCodeAt(f + 3)], 
      l[s++] = t >> 16 & 255, l[s++] = t >> 8 & 255, l[s++] = 255 & t;
      2 === a && (t = r[e.charCodeAt(f)] << 2 | r[e.charCodeAt(f + 1)] >> 4, l[s++] = 255 & t);
      1 === a && (t = r[e.charCodeAt(f)] << 10 | r[e.charCodeAt(f + 1)] << 4 | r[e.charCodeAt(f + 2)] >> 2, l[s++] = t >> 8 & 255, 
      l[s++] = 255 & t);
      return l;
    }, t.fromByteArray = function(e) {
      var t;
      var r = e.length;
      var o = r % 3;
      var i = [];
      var a = 16383;
      for (var l = 0, c = r - o; l < c; l += a) i.push(u(e, l, l + a > c ? c : l + a));
      1 === o ? (t = e[r - 1], i.push(n[t >> 2] + n[t << 4 & 63] + '==')) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + '='));
      return i.join('');
    };
    var n = [];
    var r = [];
    var o = 'undefined' != typeof Uint8Array ? Uint8Array : Array;
    var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var a = 0, l = i.length; a < l; ++a) n[a] = i[a], r[i.charCodeAt(a)] = a;
    function c(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
      var n = e.indexOf('=');
      return -1 === n && (n = t), [ n, n === t ? 0 : 4 - n % 4 ];
    }
    function s(e) {
      return n[e >> 18 & 63] + n[e >> 12 & 63] + n[e >> 6 & 63] + n[63 & e];
    }
    function u(e, t, n) {
      var r;
      var o = [];
      for (var i = t; i < n; i += 3) r = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]), o.push(s(r));
      return o.join('');
    }
    r['-'.charCodeAt(0)] = 62, r['_'.charCodeAt(0)] = 63;
  },
  7447: (e, t, n) => {
    "use strict";
    var r = n(2817);
    var o = {
      "text/plain": "Text",
      "text/html": "Url",
      default: "Text"
    };
    e.exports = function(e, t) {
      var n, i, a, l, c, s, u = !1;
      t || (t = {}), n = t.debug || !1;
      try {
        if (a = r(), l = document.createRange(), c = document.getSelection(), (s = document.createElement("span")).textContent = e, 
        s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", 
        s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", 
        s.addEventListener("copy", (function(r) {
          if (r.stopPropagation(), t.format) if (r.preventDefault(), void 0 === r.clipboardData) {
            n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var i = o[t.format] || o.default;
            window.clipboardData.setData(i, e);
          } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
          t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
        })), document.body.appendChild(s), l.selectNodeContents(s), c.addRange(l), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
        u = !0;
      } catch (f) {
        n && console.error("unable to copy using execCommand: ", f), n && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0;
        } catch (f) {
          n && console.error("unable to copy using clipboardData: ", f), n && console.error("falling back to prompt"), i = function(e) {
            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
            return e.replace(/#{\s*key\s*}/g, t);
          }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e);
        }
      } finally {
        c && ("function" == typeof c.removeRange ? c.removeRange(l) : c.removeAllRanges()), s && document.body.removeChild(s), a();
      }
      return u;
    };
  },
  9687: e => {
    "use strict";
    var t = {
      single_source_shortest_paths: function(e, n, r) {
        var o = {};
        var i = {};
        i[n] = 0;
        var a = t.PriorityQueue.make();
        var l, c, s, u, f, h, p;
        for (a.push(n, 0); !a.empty(); ) for (s in c = (l = a.pop()).value, u = l.cost, f = e[c] || {}) f.hasOwnProperty(s) && (h = u + f[s], 
        p = i[s], (void 0 === i[s] || p > h) && (i[s] = h, a.push(s, h), o[s] = c));
        if (void 0 !== r && void 0 === i[r]) {
          var d = [ 'Could not find a path from ', n, ' to ', r, '.' ].join('');
          throw new Error(d);
        }
        return o;
      },
      extract_shortest_path_from_predecessor_list: function(e, t) {
        var n = [];
        var r = t;
        for (;r; ) n.push(r), e[r], r = e[r];
        return n.reverse(), n;
      },
      find_path: function(e, n, r) {
        var o = t.single_source_shortest_paths(e, n, r);
        return t.extract_shortest_path_from_predecessor_list(o, r);
      },
      PriorityQueue: {
        make: function(e) {
          var n, r = t.PriorityQueue, o = {};
          for (n in e = e || {}, r) r.hasOwnProperty(n) && (o[n] = r[n]);
          return o.queue = [], o.sorter = e.sorter || r.default_sorter, o;
        },
        default_sorter: function(e, t) {
          return e.cost - t.cost;
        },
        push: function(e, t) {
          var n = {
            value: e,
            cost: t
          };
          this.queue.push(n), this.queue.sort(this.sorter);
        },
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return 0 === this.queue.length;
        }
      }
    };
    e.exports = t;
  },
  4525: (e, t) => {
    t.read = function(e, t, n, r, o) {
      var i, a;
      var l = 8 * o - r - 1;
      var c = (1 << l) - 1;
      var s = c >> 1;
      var u = -7;
      var f = n ? o - 1 : 0;
      var h = n ? -1 : 1;
      var p = e[t + f];
      for (f += h, i = p & (1 << -u) - 1, p >>= -u, u += l; u > 0; i = 256 * i + e[t + f], f += h, u -= 8) ;
      for (a = i & (1 << -u) - 1, i >>= -u, u += r; u > 0; a = 256 * a + e[t + f], f += h, u -= 8) ;
      if (0 === i) i = 1 - s; else {
        if (i === c) return a ? NaN : Infinity * (p ? -1 : 1);
        a += Math.pow(2, r), i -= s;
      }
      return (p ? -1 : 1) * a * Math.pow(2, i - r);
    }, t.write = function(e, t, n, r, o, i) {
      var a, l, c;
      var s = 8 * i - o - 1;
      var u = (1 << s) - 1;
      var f = u >> 1;
      var h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var p = r ? 0 : i - 1;
      var d = r ? 1 : -1;
      var g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || Infinity === t ? (l = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), 
      t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2 && (a++, c /= 2), 
      a + f >= u ? (l = 0, a = u) : a + f >= 1 ? (l = (t * c - 1) * Math.pow(2, o), a += f) : (l = t * Math.pow(2, f - 1) * Math.pow(2, o), 
      a = 0)); o >= 8; e[n + p] = 255 & l, p += d, l /= 256, o -= 8) ;
      for (a = a << o | l, s += o; s > 0; e[n + p] = 255 & a, p += d, a /= 256, s -= 8) ;
      e[n + p - d] |= 128 * g;
    };
  },
  7955: e => {
    var t = {}.toString;
    e.exports = Array.isArray || function(e) {
      return '[object Array]' == t.call(e);
    };
  },
  5473: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
      Children: () => me,
      Component: () => w,
      Fragment: () => m,
      PureComponent: () => pe,
      Suspense: () => be,
      SuspenseList: () => Ce,
      cloneElement: () => We,
      createContext: () => D,
      createElement: () => g,
      createFactory: () => De,
      createPortal: () => Be,
      createRef: () => v,
      default: () => He,
      findDOMNode: () => qe,
      forwardRef: () => _e,
      hydrate: () => Le,
      isValidElement: () => ze,
      lazy: () => Ee,
      memo: () => de,
      render: () => Ne,
      unmountComponentAtNode: () => Fe,
      unstable_batchedUpdates: () => je,
      useCallback: () => ne,
      useContext: () => re,
      useDebugValue: () => oe,
      useEffect: () => X,
      useErrorBoundary: () => ie,
      useImperativeHandle: () => ee,
      useLayoutEffect: () => Z,
      useMemo: () => te,
      useReducer: () => Q,
      useRef: () => G,
      useState: () => J,
      version: () => Ue
    });
    var r, o, i, a, l, c, s, u = {}, f = [], h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function p(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function d(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function g(e, t, n) {
      var r, o = arguments, i = {};
      for (r in t) "key" !== r && "ref" !== r && (i[r] = t[r]);
      if (arguments.length > 3) for (n = [ n ], r = 3; r < arguments.length; r++) n.push(o[r]);
      if (null != n && (i.children = n), "function" == typeof e && null != e.defaultProps) for (r in e.defaultProps) void 0 === i[r] && (i[r] = e.defaultProps[r]);
      return _(e, i, t && t.key, t && t.ref, null);
    }
    function _(e, t, n, o, i) {
      var a = {
        type: e,
        props: t,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i
      };
      return null == i && (a.__v = a), r.vnode && r.vnode(a), a;
    }
    function v() {
      return {};
    }
    function m(e) {
      return e.children;
    }
    function w(e, t) {
      this.props = e, this.context = t;
    }
    function y(e, t) {
      if (null == t) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return "function" == typeof e.type ? y(e) : null;
    }
    function b(e) {
      var t, n;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
        return b(e);
      }
    }
    function x(e) {
      (!e.__d && (e.__d = !0) && o.push(e) && !i++ || l !== r.debounceRendering) && ((l = r.debounceRendering) || a)(E);
    }
    function E() {
      for (var e; i = o.length; ) e = o.sort((function(e, t) {
        return e.__v.__b - t.__v.__b;
      })), o = [], e.some((function(e) {
        var t, n, r, o, i, a, l;
        e.__d && (a = (i = (t = e).__v).__e, (l = t.__P) && (n = [], (r = p({}, i)).__v = r, o = T(l, i, r, t.__n, void 0 !== l.ownerSVGElement, null, n, null == a ? y(i) : a), 
        R(n, i), o != a && b(i)));
      }));
    }
    function C(e, t, n, r, o, i, a, l, c) {
      var s, h, p, g, _, v, m, w = n && n.__k || f, b = w.length;
      if (l == u && (l = null != i ? i[0] : b ? y(n, 0) : null), s = 0, t.__k = A(t.__k, (function(n) {
        if (null != n) {
          if (n.__ = t, n.__b = t.__b + 1, null === (p = w[s]) || p && n.key == p.key && n.type === p.type) w[s] = void 0; else for (h = 0; h < b; h++) {
            if ((p = w[h]) && n.key == p.key && n.type === p.type) {
              w[h] = void 0;
              break;
            }
            p = null;
          }
          if (g = T(e, n, p = p || u, r, o, i, a, l, c), (h = n.ref) && p.ref != h && (m || (m = []), p.ref && m.push(p.ref, null, n), 
          m.push(h, n.__c || g, n)), null != g) {
            var f;
            if (null == v && (v = g), void 0 !== n.__d) f = n.__d, n.__d = void 0; else if (i == p || g != l || null == g.parentNode) {
              e: if (null == l || l.parentNode !== e) e.appendChild(g), f = null; else {
                for (_ = l, h = 0; (_ = _.nextSibling) && h < b; h += 2) if (_ == g) break e;
                e.insertBefore(g, l), f = l;
              }
              "option" == t.type && (e.value = "");
            }
            l = void 0 !== f ? f : g.nextSibling, "function" == typeof t.type && (t.__d = l);
          } else l && p.__e == l && l.parentNode != e && (l = y(p));
        }
        return s++, n;
      })), t.__e = v, null != i && "function" != typeof t.type) for (s = i.length; s--; ) null != i[s] && d(i[s]);
      for (s = b; s--; ) null != w[s] && P(w[s], w[s]);
      if (m) for (s = 0; s < m.length; s++) L(m[s], m[++s], m[++s]);
    }
    function A(e, t, n) {
      if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null)); else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) A(e[r], t, n); else n.push(t ? t("string" == typeof e || "number" == typeof e ? _(null, e, null, null, e) : null != e.__e || null != e.__c ? _(e.type, e.props, e.key, null, e.__v) : e) : e);
      return n;
    }
    function k(e, t, n) {
      "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === h.test(t) ? n + "px" : null == n ? "" : n;
    }
    function S(e, t, n, r, o) {
      var i, a, l, c, s;
      if (o ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t) if (i = e.style, "string" == typeof n) i.cssText = n; else {
        if ("string" == typeof r && (i.cssText = "", r = null), r) for (c in r) n && c in n || k(i, c, "");
        if (n) for (s in n) r && n[s] === r[s] || k(i, s, n[s]);
      } else "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")), l = t.toLowerCase(), t = (l in e ? l : t).slice(2), 
      n ? (r || e.addEventListener(t, B, a), (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, B, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
    function B(e) {
      this.l[e.type](r.event ? r.event(e) : e);
    }
    function T(e, t, n, o, i, a, l, c, s) {
      var u, f, h, d, g, _, v, y, b, x, E = t.type;
      if (void 0 !== t.constructor) return null;
      (u = r.__b) && u(t);
      try {
        e: if ("function" == typeof E) {
          if (y = t.props, b = (u = E.contextType) && o[u.__c], x = u ? b ? b.props.value : u.__ : o, n.__c ? v = (f = t.__c = n.__c).__ = f.__E : ("prototype" in E && E.prototype.render ? t.__c = f = new E(y, x) : (t.__c = f = new w(y, x), 
          f.constructor = E, f.render = M), b && b.sub(f), f.props = y, f.state || (f.state = {}), f.context = x, f.__n = o, h = f.__d = !0, 
          f.__h = []), null == f.__s && (f.__s = f.state), null != E.getDerivedStateFromProps && (f.__s == f.state && (f.__s = p({}, f.__s)), 
          p(f.__s, E.getDerivedStateFromProps(y, f.__s))), d = f.props, g = f.state, h) null == E.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), 
          null != f.componentDidMount && f.__h.push(f.componentDidMount); else {
            if (null == E.getDerivedStateFromProps && y !== d && null != f.componentWillReceiveProps && f.componentWillReceiveProps(y, x), 
            !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(y, f.__s, x) || t.__v === n.__v && !f.__) {
              for (f.props = y, f.state = f.__s, t.__v !== n.__v && (f.__d = !1), f.__v = t, t.__e = n.__e, t.__k = n.__k, f.__h.length && l.push(f), 
              u = 0; u < t.__k.length; u++) t.__k[u] && (t.__k[u].__ = t);
              break e;
            }
            null != f.componentWillUpdate && f.componentWillUpdate(y, f.__s, x), null != f.componentDidUpdate && f.__h.push((function() {
              f.componentDidUpdate(d, g, _);
            }));
          }
          f.context = x, f.props = y, f.state = f.__s, (u = r.__r) && u(t), f.__d = !1, f.__v = t, f.__P = e, u = f.render(f.props, f.state, f.context), 
          t.__k = null != u && u.type == m && null == u.key ? u.props.children : Array.isArray(u) ? u : [ u ], null != f.getChildContext && (o = p(p({}, o), f.getChildContext())), 
          h || null == f.getSnapshotBeforeUpdate || (_ = f.getSnapshotBeforeUpdate(d, g)), C(e, t, n, o, i, a, l, c, s), f.base = t.__e, 
          f.__h.length && l.push(f), v && (f.__E = f.__ = null), f.__e = !1;
        } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N(n.__e, t, n, o, i, a, l, s);
        (u = r.diffed) && u(t);
      } catch (e) {
        t.__v = null, r.__e(e, t, n);
      }
      return t.__e;
    }
    function R(e, t) {
      r.__c && r.__c(t, e), e.some((function(t) {
        try {
          e = t.__h, t.__h = [], e.some((function(e) {
            e.call(t);
          }));
        } catch (e) {
          r.__e(e, t.__v);
        }
      }));
    }
    function N(e, t, n, r, o, i, a, l) {
      var c, s, h, p, d, g = n.props, _ = t.props;
      if (o = "svg" === t.type || o, null != i) for (c = 0; c < i.length; c++) if (null != (s = i[c]) && ((null === t.type ? 3 === s.nodeType : s.localName === t.type) || e == s)) {
        e = s, i[c] = null;
        break;
      }
      if (null == e) {
        if (null === t.type) return document.createTextNode(_);
        e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, _.is && {
          is: _.is
        }), i = null, l = !1;
      }
      if (null === t.type) g !== _ && e.data != _ && (e.data = _); else {
        if (null != i && (i = f.slice.call(e.childNodes)), h = (g = n.props || u).dangerouslySetInnerHTML, p = _.dangerouslySetInnerHTML, 
        !l) {
          if (g === u) for (g = {}, d = 0; d < e.attributes.length; d++) g[e.attributes[d].name] = e.attributes[d].value;
          (p || h) && (p && h && p.__html == h.__html || (e.innerHTML = p && p.__html || ""));
        }
        (function(e, t, n, r, o) {
          var i;
          for (i in n) "children" === i || "key" === i || i in t || S(e, i, null, n[i], r);
          for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || S(e, i, t[i], n[i], r);
        })(e, _, g, o, l), p ? t.__k = [] : (t.__k = t.props.children, C(e, t, n, r, "foreignObject" !== t.type && o, i, a, u, l)), 
        l || ("value" in _ && void 0 !== (c = _.value) && c !== e.value && S(e, "value", c, g.value, !1), "checked" in _ && void 0 !== (c = _.checked) && c !== e.checked && S(e, "checked", c, g.checked, !1));
      }
      return e;
    }
    function L(e, t, n) {
      try {
        "function" == typeof e ? e(t) : e.current = t;
      } catch (e) {
        r.__e(e, n);
      }
    }
    function P(e, t, n) {
      var o, i, a;
      if (r.unmount && r.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || L(o, null, t)), n || "function" == typeof e.type || (n = null != (i = e.__e)), 
      e.__e = e.__d = void 0, null != (o = e.__c)) {
        if (o.componentWillUnmount) try {
          o.componentWillUnmount();
        } catch (e) {
          r.__e(e, t);
        }
        o.base = o.__P = null;
      }
      if (o = e.__k) for (a = 0; a < o.length; a++) o[a] && P(o[a], t, n);
      null != i && d(i);
    }
    function M(e, t, n) {
      return this.constructor(e, n);
    }
    function O(e, t, n) {
      var o, i, a;
      r.__ && r.__(e, t), i = (o = n === c) ? null : n && n.__k || t.__k, e = g(m, null, [ e ]), a = [], T(t, (o ? t : n || t).__k = e, i || u, u, void 0 !== t.ownerSVGElement, n && !o ? [ n ] : i ? null : f.slice.call(t.childNodes), a, n || u, o), 
      R(a, e);
    }
    function I(e, t) {
      O(e, t, c);
    }
    function U(e, t) {
      var n, r;
      for (r in t = p(p({}, e.props), t), arguments.length > 2 && (t.children = f.slice.call(arguments, 2)), n = {}, t) "key" !== r && "ref" !== r && (n[r] = t[r]);
      return _(e.type, n, t.key || e.key, t.ref || e.ref, null);
    }
    function D(e) {
      var t = {}, n = {
        __c: "__cC" + s++,
        __: e,
        Consumer: function(e, t) {
          return e.children(t);
        },
        Provider: function(e) {
          var r, o = this;
          return this.getChildContext || (r = [], this.getChildContext = function() {
            return t[n.__c] = o, t;
          }, this.shouldComponentUpdate = function(e) {
            o.props.value !== e.value && r.some((function(t) {
              t.context = e.value, x(t);
            }));
          }, this.sub = function(e) {
            r.push(e);
            var t = e.componentWillUnmount;
            e.componentWillUnmount = function() {
              r.splice(r.indexOf(e), 1), t && t.call(e);
            };
          }), e.children;
        }
      };
      return n.Consumer.contextType = n, n.Provider.__ = n, n;
    }
    r = {
      __e: function(e, t) {
        for (var n, r; t = t.__; ) if ((n = t.__c) && !n.__) try {
          if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(e))), 
          null != n.componentDidCatch && (r = !0, n.componentDidCatch(e)), r) return x(n.__E = n);
        } catch (t) {
          e = t;
        }
        throw e;
      }
    }, w.prototype.setState = function(e, t) {
      var n;
      n = this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(n, this.props)), 
      e && p(n, e), null != e && this.__v && (t && this.__h.push(t), x(this));
    }, w.prototype.forceUpdate = function(e) {
      this.__v && (this.__e = !0, e && this.__h.push(e), x(this));
    }, w.prototype.render = m, o = [], i = 0, a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, 
    c = u, s = 0;
    var z, W, F, q = 0, j = [], H = r.__r, Y = r.diffed, V = r.__c, K = r.unmount;
    function $(e, t) {
      r.__h && r.__h(W, e, q || t), q = 0;
      var n = W.__H || (W.__H = {
        __: [],
        __h: []
      });
      return e >= n.__.length && n.__.push({}), n.__[e];
    }
    function J(e) {
      return q = 1, Q(ue, e);
    }
    function Q(e, t, n) {
      var r = $(z++, 2);
      return r.__c || (r.__c = W, r.__ = [ n ? n(t) : ue(void 0, t), function(t) {
        var n = e(r.__[0], t);
        r.__[0] !== n && (r.__[0] = n, r.__c.setState({}));
      } ]), r.__;
    }
    function X(e, t) {
      var n = $(z++, 3);
      !r.__s && se(n.__H, t) && (n.__ = e, n.__H = t, W.__H.__h.push(n));
    }
    function Z(e, t) {
      var n = $(z++, 4);
      !r.__s && se(n.__H, t) && (n.__ = e, n.__H = t, W.__h.push(n));
    }
    function G(e) {
      return q = 5, te((function() {
        return {
          current: e
        };
      }), []);
    }
    function ee(e, t, n) {
      q = 6, Z((function() {
        "function" == typeof e ? e(t()) : e && (e.current = t());
      }), null == n ? n : n.concat(e));
    }
    function te(e, t) {
      var n = $(z++, 7);
      return se(n.__H, t) ? (n.__H = t, n.__h = e, n.__ = e()) : n.__;
    }
    function ne(e, t) {
      return q = 8, te((function() {
        return e;
      }), t);
    }
    function re(e) {
      var t = W.context[e.__c], n = $(z++, 9);
      return n.__c = e, t ? (null == n.__ && (n.__ = !0, t.sub(W)), t.props.value) : e.__;
    }
    function oe(e, t) {
      r.useDebugValue && r.useDebugValue(t ? t(e) : e);
    }
    function ie(e) {
      var t = $(z++, 10), n = J();
      return t.__ = e, W.componentDidCatch || (W.componentDidCatch = function(e) {
        t.__ && t.__(e), n[1](e);
      }), [ n[0], function() {
        n[1](void 0);
      } ];
    }
    function ae() {
      j.some((function(e) {
        if (e.__P) try {
          e.__H.__h.forEach(le), e.__H.__h.forEach(ce), e.__H.__h = [];
        } catch (o) {
          return e.__H.__h = [], r.__e(o, e.__v), !0;
        }
      })), j = [];
    }
    function le(e) {
      e.t && e.t();
    }
    function ce(e) {
      var t = e.__();
      "function" == typeof t && (e.t = t);
    }
    function se(e, t) {
      return !e || t.some((function(t, n) {
        return t !== e[n];
      }));
    }
    function ue(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function fe(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function he(e, t) {
      for (var n in e) if ("__source" !== n && !(n in t)) return !0;
      for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
      return !1;
    }
    r.__r = function(e) {
      H && H(e), z = 0, (W = e.__c).__H && (W.__H.__h.forEach(le), W.__H.__h.forEach(ce), W.__H.__h = []);
    }, r.diffed = function(e) {
      Y && Y(e);
      var t = e.__c;
      if (t) {
        var n = t.__H;
        n && n.__h.length && (1 !== j.push(t) && F === r.requestAnimationFrame || ((F = r.requestAnimationFrame) || function(e) {
          var t, n = function() {
            clearTimeout(r), cancelAnimationFrame(t), setTimeout(e);
          }, r = setTimeout(n, 100);
          "undefined" != typeof window && (t = requestAnimationFrame(n));
        })(ae));
      }
    }, r.__c = function(e, t) {
      t.some((function(e) {
        try {
          e.__h.forEach(le), e.__h = e.__h.filter((function(e) {
            return !e.__ || ce(e);
          }));
        } catch (l) {
          t.some((function(e) {
            e.__h && (e.__h = []);
          })), t = [], r.__e(l, e.__v);
        }
      })), V && V(e, t);
    }, r.unmount = function(e) {
      K && K(e);
      var t = e.__c;
      if (t) {
        var n = t.__H;
        if (n) try {
          n.__.forEach((function(e) {
            return e.t && e.t();
          }));
        } catch (e) {
          r.__e(e, t.__v);
        }
      }
    };
    var pe = function(e) {
      var t, n;
      function r(t) {
        var n;
        return (n = e.call(this, t) || this).isPureReactComponent = !0, n;
      }
      return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r.prototype.shouldComponentUpdate = function(e, t) {
        return he(this.props, e) || he(this.state, t);
      }, r;
    }(w);
    function de(e, t) {
      function n(e) {
        var n = this.props.ref, r = n == e.ref;
        return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : he(this.props, e);
      }
      function r(t) {
        return this.shouldComponentUpdate = n, g(e, fe({}, t));
      }
      return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.t = !0, r;
    }
    var ge = r.__b;
    function _e(e) {
      function t(t) {
        var n = fe({}, t);
        return delete n.ref, e(n, t.ref);
      }
      return t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
    }
    r.__b = function(e) {
      e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), ge && ge(e);
    };
    var ve = function(e, t) {
      return e ? A(e).reduce((function(e, n, r) {
        return e.concat(t(n, r));
      }), []) : null;
    }, me = {
      map: ve,
      forEach: ve,
      count: function(e) {
        return e ? A(e).length : 0;
      },
      only: function(e) {
        if (1 !== (e = A(e)).length) throw new Error("Children.only() expects only one child.");
        return e[0];
      },
      toArray: A
    }, we = r.__e;
    function ye(e) {
      return e && ((e = fe({}, e)).__c = null, e.__k = e.__k && e.__k.map(ye)), e;
    }
    function be() {
      this.__u = 0, this.o = null, this.__b = null;
    }
    function xe(e) {
      var t = e.__.__c;
      return t && t.u && t.u(e);
    }
    function Ee(e) {
      var t, n, r;
      function o(o) {
        if (t || (t = e()).then((function(e) {
          n = e.default || e;
        }), (function(e) {
          r = e;
        })), r) throw r;
        if (!n) throw t;
        return g(n, o);
      }
      return o.displayName = "Lazy", o.t = !0, o;
    }
    function Ce() {
      this.i = null, this.l = null;
    }
    r.__e = function(e, t, n) {
      if (e.then) for (var r, o = t; o = o.__; ) if ((r = o.__c) && r.__c) return r.__c(e, t.__c);
      we(e, t, n);
    }, (be.prototype = new w).__c = function(e, t) {
      var n = this;
      null == n.o && (n.o = []), n.o.push(t);
      var r = xe(n.__v), o = !1, i = function() {
        o || (o = !0, r ? r(a) : a());
      };
      t.__c = t.componentWillUnmount, t.componentWillUnmount = function() {
        i(), t.__c && t.__c();
      };
      var a = function() {
        var e;
        if (!--n.__u) for (n.__v.__k[0] = n.state.u, n.setState({
          u: n.__b = null
        }); e = n.o.pop(); ) e.forceUpdate();
      };
      n.__u++ || n.setState({
        u: n.__b = n.__v.__k[0]
      }), e.then(i, i);
    }, be.prototype.render = function(e, t) {
      return this.__b && (this.__v.__k[0] = ye(this.__b), this.__b = null), [ g(w, null, t.u ? null : e.children), t.u && e.fallback ];
    };
    var Ae = function(e, t, n) {
      if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size)) for (n = e.i; n; ) {
        for (;n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.i = n = n[2];
      }
    };
    (Ce.prototype = new w).u = function(e) {
      var t = this, n = xe(t.__v), r = t.l.get(e);
      return r[0]++, function(o) {
        var i = function() {
          t.props.revealOrder ? (r.push(o), Ae(t, e, r)) : o();
        };
        n ? n(i) : i();
      };
    }, Ce.prototype.render = function(e) {
      this.i = null, this.l = new Map;
      var t = A(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.l.set(t[n], this.i = [ 1, 0, this.i ]);
      return e.children;
    }, Ce.prototype.componentDidUpdate = Ce.prototype.componentDidMount = function() {
      var e = this;
      e.l.forEach((function(t, n) {
        Ae(e, n, t);
      }));
    };
    var ke = function() {
      function e() {}
      var t = e.prototype;
      return t.getChildContext = function() {
        return this.props.context;
      }, t.render = function(e) {
        return e.children;
      }, e;
    }();
    function Se(e) {
      var t = this, n = e.container, r = g(ke, {
        context: t.context
      }, e.vnode);
      return t.s && t.s !== n && (t.v.parentNode && t.s.removeChild(t.v), P(t.h), t.p = !1), e.vnode ? t.p ? (n.__k = t.__k, O(r, n), 
      t.__k = n.__k) : (t.v = document.createTextNode(""), I("", n), n.appendChild(t.v), t.p = !0, t.s = n, O(r, n, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), 
      P(t.h)), t.h = r, t.componentWillUnmount = function() {
        t.v.parentNode && t.s.removeChild(t.v), P(t.h);
      }, null;
    }
    function Be(e, t) {
      return g(Se, {
        vnode: e,
        container: t
      });
    }
    var Te = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    w.prototype.isReactComponent = {};
    var Re = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    function Ne(e, t, n) {
      if (null == t.__k) for (;t.firstChild; ) t.removeChild(t.firstChild);
      return O(e, t), "function" == typeof n && n(), e ? e.__c : null;
    }
    function Le(e, t, n) {
      return I(e, t), "function" == typeof n && n(), e ? e.__c : null;
    }
    var Pe = r.event;
    function Me(e, t) {
      e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
        configurable: !1,
        get: function() {
          return this["UNSAFE_" + t];
        },
        set: function(e) {
          this["UNSAFE_" + t] = e;
        }
      });
    }
    r.event = function(e) {
      Pe && (e = Pe(e)), e.persist = function() {};
      var t = !1, n = !1, r = e.stopPropagation;
      e.stopPropagation = function() {
        r.call(e), t = !0;
      };
      var o = e.preventDefault;
      return e.preventDefault = function() {
        o.call(e), n = !0;
      }, e.isPropagationStopped = function() {
        return t;
      }, e.isDefaultPrevented = function() {
        return n;
      }, e.nativeEvent = e;
    };
    var Oe = {
      configurable: !0,
      get: function() {
        return this.class;
      }
    }, Ie = r.vnode;
    r.vnode = function(e) {
      e.$$typeof = Re;
      var t = e.type, n = e.props;
      if (t) {
        if (n.class != n.className && (Oe.enumerable = "className" in n, null != n.className && (n.class = n.className), Object.defineProperty(n, "className", Oe)), 
        "function" != typeof t) {
          var r, o, i;
          for (i in n.defaultValue && void 0 !== n.value && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), 
          Array.isArray(n.value) && n.multiple && "select" === t && (A(n.children).forEach((function(e) {
            -1 != n.value.indexOf(e.props.value) && (e.props.selected = !0);
          })), delete n.value), n) if (r = Te.test(i)) break;
          if (r) for (i in o = e.props = {}, n) o[Te.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = n[i];
        }
        !function(t) {
          var n = e.type, r = e.props;
          if (r && "string" == typeof n) {
            var o = {};
            for (var i in r) /^on(Ani|Tra|Tou)/.test(i) && (r[i.toLowerCase()] = r[i], delete r[i]), o[i.toLowerCase()] = i;
            if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], 
            delete r[o.onbeforeinput]), o.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
              var a = o.oninput || "oninput";
              r[a] || (r[a] = r[o.onchange], delete r[o.onchange]);
            }
          }
        }(), "function" == typeof t && !t.m && t.prototype && (Me(t.prototype, "componentWillMount"), Me(t.prototype, "componentWillReceiveProps"), 
        Me(t.prototype, "componentWillUpdate"), t.m = !0);
      }
      Ie && Ie(e);
    };
    var Ue = "16.8.0";
    function De(e) {
      return g.bind(null, e);
    }
    function ze(e) {
      return !!e && e.$$typeof === Re;
    }
    function We(e) {
      return ze(e) ? U.apply(null, arguments) : e;
    }
    function Fe(e) {
      return !!e.__k && (O(null, e), !0);
    }
    function qe(e) {
      return e && (e.base || 1 === e.nodeType && e) || null;
    }
    var je = function(e, t) {
      return e(t);
    };
    const He = {
      useState: J,
      useReducer: Q,
      useEffect: X,
      useLayoutEffect: Z,
      useRef: G,
      useImperativeHandle: ee,
      useMemo: te,
      useCallback: ne,
      useContext: re,
      useDebugValue: oe,
      version: "16.8.0",
      Children: me,
      render: Ne,
      hydrate: Ne,
      unmountComponentAtNode: Fe,
      createPortal: Be,
      createElement: g,
      createContext: D,
      createFactory: De,
      cloneElement: We,
      createRef: v,
      Fragment: m,
      isValidElement: ze,
      findDOMNode: qe,
      Component: w,
      PureComponent: pe,
      memo: de,
      forwardRef: _e,
      unstable_batchedUpdates: je,
      Suspense: be,
      SuspenseList: Ce,
      lazy: Ee
    };
  },
  2366: (e, t, n) => {
    var r = n(953);
    var o = n(2681);
    var i = n(7497);
    var a = n(7322);
    function l(e, t, n, i, a) {
      var l = [].slice.call(arguments, 1);
      var c = l.length;
      var s = 'function' == typeof l[c - 1];
      if (!s && !r()) throw new Error('Callback required as last argument');
      if (!s) {
        if (c < 1) throw new Error('Too few arguments provided');
        return 1 === c ? (n = t, t = i = void 0) : 2 !== c || t.getContext || (i = n, n = t, t = void 0), new Promise((function(r, a) {
          try {
            var l = o.create(n, i);
            r(e(l, t, i));
          } catch (c) {
            a(c);
          }
        }));
      }
      if (c < 2) throw new Error('Too few arguments provided');
      2 === c ? (a = n, n = t, t = i = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = n, 
      n = t, t = void 0));
      try {
        var u = o.create(n, i);
        a(null, e(u, t, i));
      } catch (f) {
        a(f);
      }
    }
    t.create = o.create, t.toCanvas = l.bind(null, i.render), t.toDataURL = l.bind(null, i.renderToDataURL), t.toString = l.bind(null, (function(e, t, n) {
      return a.render(e, n);
    }));
  },
  953: e => {
    e.exports = function() {
      return 'function' == typeof Promise && Promise.prototype && Promise.prototype.then;
    };
  },
  9885: (e, t, n) => {
    var r = n(7738).getSymbolSize;
    t.getRowColCoords = function(e) {
      if (1 === e) return [];
      var t = Math.floor(e / 7) + 2;
      var n = r(e);
      var o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2));
      var i = [ n - 7 ];
      for (var a = 1; a < t - 1; a++) i[a] = i[a - 1] - o;
      return i.push(6), i.reverse();
    }, t.getPositions = function(e) {
      var n = [];
      var r = t.getRowColCoords(e);
      var o = r.length;
      for (var i = 0; i < o; i++) for (var a = 0; a < o; a++) 0 === i && 0 === a || 0 === i && a === o - 1 || i === o - 1 && 0 === a || n.push([ r[i], r[a] ]);
      return n;
    };
  },
  3376: (e, t, n) => {
    var r = n(7179);
    var o = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':' ];
    function i(e) {
      this.mode = r.ALPHANUMERIC, this.data = e;
    }
    i.getBitsLength = function(e) {
      return 11 * Math.floor(e / 2) + e % 2 * 6;
    }, i.prototype.getLength = function() {
      return this.data.length;
    }, i.prototype.getBitsLength = function() {
      return i.getBitsLength(this.data.length);
    }, i.prototype.write = function(e) {
      var t;
      for (t = 0; t + 2 <= this.data.length; t += 2) {
        var n = 45 * o.indexOf(this.data[t]);
        n += o.indexOf(this.data[t + 1]), e.put(n, 11);
      }
      this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6);
    }, e.exports = i;
  },
  7578: e => {
    function t() {
      this.buffer = [], this.length = 0;
    }
    t.prototype = {
      get: function(e) {
        var t = Math.floor(e / 8);
        return 1 == (this.buffer[t] >>> 7 - e % 8 & 1);
      },
      put: function(e, t) {
        for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1));
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(e) {
        var t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
      }
    }, e.exports = t;
  },
  9862: (e, t, n) => {
    var r = n(412);
    function o(e) {
      if (!e || e < 1) throw new Error('BitMatrix size must be defined and greater than 0');
      this.size = e, this.data = r.alloc(e * e), this.reservedBit = r.alloc(e * e);
    }
    o.prototype.set = function(e, t, n, r) {
      var o = e * this.size + t;
      this.data[o] = n, r && (this.reservedBit[o] = !0);
    }, o.prototype.get = function(e, t) {
      return this.data[e * this.size + t];
    }, o.prototype.xor = function(e, t, n) {
      this.data[e * this.size + t] ^= n;
    }, o.prototype.isReserved = function(e, t) {
      return this.reservedBit[e * this.size + t];
    }, e.exports = o;
  },
  1564: (e, t, n) => {
    var r = n(412);
    var o = n(7179);
    function i(e) {
      this.mode = o.BYTE, this.data = r.from(e);
    }
    i.getBitsLength = function(e) {
      return 8 * e;
    }, i.prototype.getLength = function() {
      return this.data.length;
    }, i.prototype.getBitsLength = function() {
      return i.getBitsLength(this.data.length);
    }, i.prototype.write = function(e) {
      for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8);
    }, e.exports = i;
  },
  6984: (e, t, n) => {
    var r = n(5599);
    var o = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81 ];
    var i = [ 7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430 ];
    t.getBlocksCount = function(e, t) {
      switch (t) {
       case r.L:
        return o[4 * (e - 1) + 0];

       case r.M:
        return o[4 * (e - 1) + 1];

       case r.Q:
        return o[4 * (e - 1) + 2];

       case r.H:
        return o[4 * (e - 1) + 3];

       default:
        return;
      }
    }, t.getTotalCodewordsCount = function(e, t) {
      switch (t) {
       case r.L:
        return i[4 * (e - 1) + 0];

       case r.M:
        return i[4 * (e - 1) + 1];

       case r.Q:
        return i[4 * (e - 1) + 2];

       case r.H:
        return i[4 * (e - 1) + 3];

       default:
        return;
      }
    };
  },
  5599: (e, t) => {
    t.L = {
      bit: 1
    }, t.M = {
      bit: 0
    }, t.Q = {
      bit: 3
    }, t.H = {
      bit: 2
    }, t.isValid = function(e) {
      return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
    }, t.from = function(e, n) {
      if (t.isValid(e)) return e;
      try {
        return function(e) {
          if ('string' != typeof e) throw new Error('Param is not a string');
          switch (e.toLowerCase()) {
           case 'l':
           case 'low':
            return t.L;

           case 'm':
           case 'medium':
            return t.M;

           case 'q':
           case 'quartile':
            return t.Q;

           case 'h':
           case 'high':
            return t.H;

           default:
            throw new Error('Unknown EC Level: ' + e);
          }
        }(e);
      } catch (r) {
        return n;
      }
    };
  },
  854: (e, t, n) => {
    var r = n(7738).getSymbolSize;
    t.getPositions = function(e) {
      var t = r(e);
      return [ [ 0, 0 ], [ t - 7, 0 ], [ 0, t - 7 ] ];
    };
  },
  2964: (e, t, n) => {
    var r = n(7738);
    var o = r.getBCHDigit(1335);
    t.getEncodedBits = function(e, t) {
      var n = e.bit << 3 | t;
      var i = n << 10;
      for (;r.getBCHDigit(i) - o >= 0; ) i ^= 1335 << r.getBCHDigit(i) - o;
      return 21522 ^ (n << 10 | i);
    };
  },
  9778: (e, t, n) => {
    var r = n(412);
    var o = r.alloc(512);
    var i = r.alloc(256);
    !function() {
      var e = 1;
      for (var t = 0; t < 255; t++) o[t] = e, i[e] = t, 256 & (e <<= 1) && (e ^= 285);
      for (t = 255; t < 512; t++) o[t] = o[t - 255];
    }(), t.log = function(e) {
      if (e < 1) throw new Error('log(' + e + ')');
      return i[e];
    }, t.exp = function(e) {
      return o[e];
    }, t.mul = function(e, t) {
      return 0 === e || 0 === t ? 0 : o[i[e] + i[t]];
    };
  },
  6882: (e, t, n) => {
    var r = n(7179);
    var o = n(7738);
    function i(e) {
      this.mode = r.KANJI, this.data = e;
    }
    i.getBitsLength = function(e) {
      return 13 * e;
    }, i.prototype.getLength = function() {
      return this.data.length;
    }, i.prototype.getBitsLength = function() {
      return i.getBitsLength(this.data.length);
    }, i.prototype.write = function(e) {
      var t;
      for (t = 0; t < this.data.length; t++) {
        var n = o.toSJIS(this.data[t]);
        if (n >= 33088 && n <= 40956) n -= 33088; else {
          if (!(n >= 57408 && n <= 60351)) throw new Error('Invalid SJIS character: ' + this.data[t] + "\nMake sure your charset is UTF-8");
          n -= 49472;
        }
        n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13);
      }
    }, e.exports = i;
  },
  5499: (e, t) => {
    t.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var n = 3, r = 3, o = 40, i = 10;
    function a(e, n, r) {
      switch (e) {
       case t.Patterns.PATTERN000:
        return (n + r) % 2 == 0;

       case t.Patterns.PATTERN001:
        return n % 2 == 0;

       case t.Patterns.PATTERN010:
        return r % 3 == 0;

       case t.Patterns.PATTERN011:
        return (n + r) % 3 == 0;

       case t.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;

       case t.Patterns.PATTERN101:
        return n * r % 2 + n * r % 3 == 0;

       case t.Patterns.PATTERN110:
        return (n * r % 2 + n * r % 3) % 2 == 0;

       case t.Patterns.PATTERN111:
        return (n * r % 3 + (n + r) % 2) % 2 == 0;

       default:
        throw new Error('bad maskPattern:' + e);
      }
    }
    t.isValid = function(e) {
      return null != e && '' !== e && !isNaN(e) && e >= 0 && e <= 7;
    }, t.from = function(e) {
      return t.isValid(e) ? parseInt(e, 10) : void 0;
    }, t.getPenaltyN1 = function(e) {
      var t = e.size;
      var r = 0;
      var o = 0;
      var i = 0;
      var a = null;
      var l = null;
      for (var c = 0; c < t; c++) {
        o = i = 0, a = l = null;
        for (var s = 0; s < t; s++) {
          var u = e.get(c, s);
          u === a ? o++ : (o >= 5 && (r += n + (o - 5)), a = u, o = 1), (u = e.get(s, c)) === l ? i++ : (i >= 5 && (r += n + (i - 5)), 
          l = u, i = 1);
        }
        o >= 5 && (r += n + (o - 5)), i >= 5 && (r += n + (i - 5));
      }
      return r;
    }, t.getPenaltyN2 = function(e) {
      var t = e.size;
      var n = 0;
      for (var o = 0; o < t - 1; o++) for (var i = 0; i < t - 1; i++) {
        var a = e.get(o, i) + e.get(o, i + 1) + e.get(o + 1, i) + e.get(o + 1, i + 1);
        4 !== a && 0 !== a || n++;
      }
      return n * r;
    }, t.getPenaltyN3 = function(e) {
      var t = e.size;
      var n = 0;
      var r = 0;
      var i = 0;
      for (var a = 0; a < t; a++) {
        r = i = 0;
        for (var l = 0; l < t; l++) r = r << 1 & 2047 | e.get(a, l), l >= 10 && (1488 === r || 93 === r) && n++, i = i << 1 & 2047 | e.get(l, a), 
        l >= 10 && (1488 === i || 93 === i) && n++;
      }
      return n * o;
    }, t.getPenaltyN4 = function(e) {
      var t = 0;
      var n = e.data.length;
      for (var r = 0; r < n; r++) t += e.data[r];
      return Math.abs(Math.ceil(100 * t / n / 5) - 10) * i;
    }, t.applyMask = function(e, t) {
      var n = t.size;
      for (var r = 0; r < n; r++) for (var o = 0; o < n; o++) t.isReserved(o, r) || t.xor(o, r, a(e, o, r));
    }, t.getBestMask = function(e, n) {
      var r = Object.keys(t.Patterns).length;
      var o = 0;
      var i = Infinity;
      for (var a = 0; a < r; a++) {
        n(a), t.applyMask(a, e);
        var l = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
        t.applyMask(a, e), l < i && (i = l, o = a);
      }
      return o;
    };
  },
  7179: (e, t, n) => {
    var r = n(501);
    var o = n(307);
    t.NUMERIC = {
      id: 'Numeric',
      bit: 1,
      ccBits: [ 10, 12, 14 ]
    }, t.ALPHANUMERIC = {
      id: 'Alphanumeric',
      bit: 2,
      ccBits: [ 9, 11, 13 ]
    }, t.BYTE = {
      id: 'Byte',
      bit: 4,
      ccBits: [ 8, 16, 16 ]
    }, t.KANJI = {
      id: 'Kanji',
      bit: 8,
      ccBits: [ 8, 10, 12 ]
    }, t.MIXED = {
      bit: -1
    }, t.getCharCountIndicator = function(e, t) {
      if (!e.ccBits) throw new Error('Invalid mode: ' + e);
      if (!r.isValid(t)) throw new Error('Invalid version: ' + t);
      return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2];
    }, t.getBestModeForData = function(e) {
      return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE;
    }, t.toString = function(e) {
      if (e && e.id) return e.id;
      throw new Error('Invalid mode');
    }, t.isValid = function(e) {
      return e && e.bit && e.ccBits;
    }, t.from = function(e, n) {
      if (t.isValid(e)) return e;
      try {
        return function(e) {
          if ('string' != typeof e) throw new Error('Param is not a string');
          switch (e.toLowerCase()) {
           case 'numeric':
            return t.NUMERIC;

           case 'alphanumeric':
            return t.ALPHANUMERIC;

           case 'kanji':
            return t.KANJI;

           case 'byte':
            return t.BYTE;

           default:
            throw new Error('Unknown mode: ' + e);
          }
        }(e);
      } catch (r) {
        return n;
      }
    };
  },
  4102: (e, t, n) => {
    var r = n(7179);
    function o(e) {
      this.mode = r.NUMERIC, this.data = e.toString();
    }
    o.getBitsLength = function(e) {
      return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
    }, o.prototype.getLength = function() {
      return this.data.length;
    }, o.prototype.getBitsLength = function() {
      return o.getBitsLength(this.data.length);
    }, o.prototype.write = function(e) {
      var t, n, r;
      for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
      var o = this.data.length - t;
      o > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, 3 * o + 1));
    }, e.exports = o;
  },
  5302: (e, t, n) => {
    var r = n(412);
    var o = n(9778);
    t.mul = function(e, t) {
      var n = r.alloc(e.length + t.length - 1);
      for (var i = 0; i < e.length; i++) for (var a = 0; a < t.length; a++) n[i + a] ^= o.mul(e[i], t[a]);
      return n;
    }, t.mod = function(e, t) {
      var n = r.from(e);
      for (;n.length - t.length >= 0; ) {
        var i = n[0];
        for (var a = 0; a < t.length; a++) n[a] ^= o.mul(t[a], i);
        var l = 0;
        for (;l < n.length && 0 === n[l]; ) l++;
        n = n.slice(l);
      }
      return n;
    }, t.generateECPolynomial = function(e) {
      var n = r.from([ 1 ]);
      for (var i = 0; i < e; i++) n = t.mul(n, [ 1, o.exp(i) ]);
      return n;
    };
  },
  2681: (e, t, n) => {
    var r = n(412);
    var o = n(7738);
    var i = n(5599);
    var a = n(7578);
    var l = n(9862);
    var c = n(9885);
    var s = n(854);
    var u = n(5499);
    var f = n(6984);
    var h = n(325);
    var p = n(9713);
    var d = n(2964);
    var g = n(7179);
    var _ = n(6667);
    var v = n(7955);
    function m(e, t, n) {
      var r = e.size;
      var o = d.getEncodedBits(t, n);
      var i, a;
      for (i = 0; i < 15; i++) a = 1 == (o >> i & 1), i < 6 ? e.set(i, 8, a, !0) : i < 8 ? e.set(i + 1, 8, a, !0) : e.set(r - 15 + i, 8, a, !0), 
      i < 8 ? e.set(8, r - i - 1, a, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, a, !0) : e.set(8, 15 - i - 1, a, !0);
      e.set(r - 8, 8, 1, !0);
    }
    function w(e, t, n) {
      var i = new a;
      n.forEach((function(t) {
        i.put(t.mode.bit, 4), i.put(t.getLength(), g.getCharCountIndicator(t.mode, e)), t.write(i);
      }));
      var l = 8 * (o.getSymbolTotalCodewords(e) - f.getTotalCodewordsCount(e, t));
      for (i.getLengthInBits() + 4 <= l && i.put(0, 4); i.getLengthInBits() % 8 != 0; ) i.putBit(0);
      var c = (l - i.getLengthInBits()) / 8;
      for (var s = 0; s < c; s++) i.put(s % 2 ? 17 : 236, 8);
      return function(e, t, n) {
        var i = o.getSymbolTotalCodewords(t);
        var a = f.getTotalCodewordsCount(t, n);
        var l = i - a;
        var c = f.getBlocksCount(t, n);
        var s = c - i % c;
        var u = Math.floor(i / c);
        var p = Math.floor(l / c);
        var d = p + 1;
        var g = u - p;
        var _ = new h(g);
        var v = 0;
        var m = new Array(c);
        var w = new Array(c);
        var y = 0;
        var b = r.from(e.buffer);
        for (var x = 0; x < c; x++) {
          var E = x < s ? p : d;
          m[x] = b.slice(v, v + E), w[x] = _.encode(m[x]), v += E, y = Math.max(y, E);
        }
        var C = r.alloc(i);
        var A = 0;
        var k, S;
        for (k = 0; k < y; k++) for (S = 0; S < c; S++) k < m[S].length && (C[A++] = m[S][k]);
        for (k = 0; k < g; k++) for (S = 0; S < c; S++) C[A++] = w[S][k];
        return C;
      }(i, e, t);
    }
    function y(e, t, n, r) {
      var i;
      if (v(e)) i = _.fromArray(e); else {
        if ('string' != typeof e) throw new Error('Invalid data');
        var a = t;
        if (!a) {
          var f = _.rawSplit(e);
          a = p.getBestVersionForData(f, n);
        }
        i = _.fromString(e, a || 40);
      }
      var h = p.getBestVersionForData(i, n);
      if (!h) throw new Error('The amount of data is too big to be stored in a QR Code');
      if (t) {
        if (t < h) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + h + '.\n');
      } else t = h;
      var d = w(t, n, i);
      var g = o.getSymbolSize(t);
      var y = new l(g);
      return function(e, t) {
        var n = e.size;
        var r = s.getPositions(t);
        for (var o = 0; o < r.length; o++) {
          var i = r[o][0];
          var a = r[o][1];
          for (var l = -1; l <= 7; l++) if (!(i + l <= -1 || n <= i + l)) for (var c = -1; c <= 7; c++) a + c <= -1 || n <= a + c || (l >= 0 && l <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === l || 6 === l) || l >= 2 && l <= 4 && c >= 2 && c <= 4 ? e.set(i + l, a + c, !0, !0) : e.set(i + l, a + c, !1, !0));
        }
      }(y, t), function(e) {
        var t = e.size;
        for (var n = 8; n < t - 8; n++) {
          var r = n % 2 == 0;
          e.set(n, 6, r, !0), e.set(6, n, r, !0);
        }
      }(y), function(e, t) {
        var n = c.getPositions(t);
        for (var r = 0; r < n.length; r++) {
          var o = n[r][0];
          var i = n[r][1];
          for (var a = -2; a <= 2; a++) for (var l = -2; l <= 2; l++) -2 === a || 2 === a || -2 === l || 2 === l || 0 === a && 0 === l ? e.set(o + a, i + l, !0, !0) : e.set(o + a, i + l, !1, !0);
        }
      }(y, t), m(y, n, 0), t >= 7 && function(e, t) {
        var n = e.size;
        var r = p.getEncodedBits(t);
        var o, i, a;
        for (var l = 0; l < 18; l++) o = Math.floor(l / 3), i = l % 3 + n - 8 - 3, a = 1 == (r >> l & 1), e.set(o, i, a, !0), e.set(i, o, a, !0);
      }(y, t), function(e, t) {
        var n = e.size;
        var r = -1;
        var o = n - 1;
        var i = 7;
        var a = 0;
        for (var l = n - 1; l > 0; l -= 2) for (6 === l && l--; ;) {
          for (var c = 0; c < 2; c++) if (!e.isReserved(o, l - c)) {
            var s = !1;
            a < t.length && (s = 1 == (t[a] >>> i & 1)), e.set(o, l - c, s), -1 == --i && (a++, i = 7);
          }
          if ((o += r) < 0 || n <= o) {
            o -= r, r = -r;
            break;
          }
        }
      }(y, d), isNaN(r) && (r = u.getBestMask(y, m.bind(null, y, n))), u.applyMask(r, y), m(y, n, r), {
        modules: y,
        version: t,
        errorCorrectionLevel: n,
        maskPattern: r,
        segments: i
      };
    }
    t.create = function(e, t) {
      if (void 0 === e || '' === e) throw new Error('No input text');
      var n = i.M;
      var r;
      var a;
      return void 0 !== t && (n = i.from(t.errorCorrectionLevel, i.M), r = p.from(t.version), a = u.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), 
      y(e, r, n, a);
    };
  },
  325: (e, t, n) => {
    var r = n(412);
    var o = n(5302);
    var i = n(973).lW;
    function a(e) {
      this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
    }
    a.prototype.initialize = function(e) {
      this.degree = e, this.genPoly = o.generateECPolynomial(this.degree);
    }, a.prototype.encode = function(e) {
      if (!this.genPoly) throw new Error('Encoder not initialized');
      var t = r.alloc(this.degree);
      var n = i.concat([ e, t ], e.length + this.degree);
      var a = o.mod(n, this.genPoly);
      var l = this.degree - a.length;
      if (l > 0) {
        var c = r.alloc(this.degree);
        return a.copy(c, l), c;
      }
      return a;
    }, e.exports = a;
  },
  307: (e, t) => {
    var n = '[0-9]+';
    var r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    var o = '(?:(?![A-Z0-9 $%*+\\-./:]|' + (r = r.replace(/u/g, '\\u')) + ')(?:.|[\r\n]))+';
    t.KANJI = new RegExp(r, 'g'), t.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g'), t.BYTE = new RegExp(o, 'g'), t.NUMERIC = new RegExp(n, 'g'), 
    t.ALPHANUMERIC = new RegExp('[A-Z $%*+\\-./:]+', 'g');
    var i = new RegExp('^' + r + '$');
    var a = new RegExp("^[0-9]+$");
    var l = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
    t.testKanji = function(e) {
      return i.test(e);
    }, t.testNumeric = function(e) {
      return a.test(e);
    }, t.testAlphanumeric = function(e) {
      return l.test(e);
    };
  },
  6667: (e, t, n) => {
    var r = n(7179);
    var o = n(4102);
    var i = n(3376);
    var a = n(1564);
    var l = n(6882);
    var c = n(307);
    var s = n(7738);
    var u = n(9687);
    function f(e) {
      return unescape(encodeURIComponent(e)).length;
    }
    function h(e, t, n) {
      var r = [];
      var o;
      for (;null !== (o = e.exec(n)); ) r.push({
        data: o[0],
        index: o.index,
        mode: t,
        length: o[0].length
      });
      return r;
    }
    function p(e) {
      var t = h(c.NUMERIC, r.NUMERIC, e);
      var n = h(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
      var o;
      var i;
      return s.isKanjiModeEnabled() ? (o = h(c.BYTE, r.BYTE, e), i = h(c.KANJI, r.KANJI, e)) : (o = h(c.BYTE_KANJI, r.BYTE, e), 
      i = []), t.concat(n, o, i).sort((function(e, t) {
        return e.index - t.index;
      })).map((function(e) {
        return {
          data: e.data,
          mode: e.mode,
          length: e.length
        };
      }));
    }
    function d(e, t) {
      switch (t) {
       case r.NUMERIC:
        return o.getBitsLength(e);

       case r.ALPHANUMERIC:
        return i.getBitsLength(e);

       case r.KANJI:
        return l.getBitsLength(e);

       case r.BYTE:
        return a.getBitsLength(e);
      }
    }
    function g(e, t) {
      var n;
      var c = r.getBestModeForData(e);
      if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) throw new Error('"' + e + "\" cannot be encoded with mode " + r.toString(n) + '.\n Suggested mode is: ' + r.toString(c));
      switch (n !== r.KANJI || s.isKanjiModeEnabled() || (n = r.BYTE), n) {
       case r.NUMERIC:
        return new o(e);

       case r.ALPHANUMERIC:
        return new i(e);

       case r.KANJI:
        return new l(e);

       case r.BYTE:
        return new a(e);
      }
    }
    t.fromArray = function(e) {
      return e.reduce((function(e, t) {
        return 'string' == typeof t ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e;
      }), []);
    }, t.fromString = function(e, n) {
      var o = function(e) {
        var t = [];
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          switch (o.mode) {
           case r.NUMERIC:
            t.push([ o, {
              data: o.data,
              mode: r.ALPHANUMERIC,
              length: o.length
            }, {
              data: o.data,
              mode: r.BYTE,
              length: o.length
            } ]);
            break;

           case r.ALPHANUMERIC:
            t.push([ o, {
              data: o.data,
              mode: r.BYTE,
              length: o.length
            } ]);
            break;

           case r.KANJI:
            t.push([ o, {
              data: o.data,
              mode: r.BYTE,
              length: f(o.data)
            } ]);
            break;

           case r.BYTE:
            t.push([ {
              data: o.data,
              mode: r.BYTE,
              length: f(o.data)
            } ]);
          }
        }
        return t;
      }(p(e, s.isKanjiModeEnabled()));
      var i = function(e, t) {
        var n = {};
        var o = {
          start: {}
        };
        var i = [ 'start' ];
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          var c = [];
          for (var s = 0; s < l.length; s++) {
            var u = l[s];
            var f = '' + a + s;
            c.push(f), n[f] = {
              node: u,
              lastCount: 0
            }, o[f] = {};
            for (var h = 0; h < i.length; h++) {
              var p = i[h];
              n[p] && n[p].node.mode === u.mode ? (o[p][f] = d(n[p].lastCount + u.length, u.mode) - d(n[p].lastCount, u.mode), n[p].lastCount += u.length) : (n[p] && (n[p].lastCount = u.length), 
              o[p][f] = d(u.length, u.mode) + 4 + r.getCharCountIndicator(u.mode, t));
            }
          }
          i = c;
        }
        for (h = 0; h < i.length; h++) o[i[h]].end = 0;
        return {
          map: o,
          table: n
        };
      }(o, n);
      var a = u.find_path(i.map, 'start', 'end');
      var l = [];
      for (var c = 1; c < a.length - 1; c++) l.push(i.table[a[c]].node);
      return t.fromArray(function(e) {
        return e.reduce((function(e, t) {
          var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
          return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e);
        }), []);
      }(l));
    }, t.rawSplit = function(e) {
      return t.fromArray(p(e, s.isKanjiModeEnabled()));
    };
  },
  7738: (e, t) => {
    var n;
    var r = [ 0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706 ];
    t.getSymbolSize = function(e) {
      if (!e) throw new Error('"version" cannot be null or undefined');
      if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
      return 4 * e + 17;
    }, t.getSymbolTotalCodewords = function(e) {
      return r[e];
    }, t.getBCHDigit = function(e) {
      var t = 0;
      for (;0 !== e; ) t++, e >>>= 1;
      return t;
    }, t.setToSJISFunction = function(e) {
      if ('function' != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
      n = e;
    }, t.isKanjiModeEnabled = function() {
      return void 0 !== n;
    }, t.toSJIS = function(e) {
      return n(e);
    };
  },
  501: (e, t) => {
    t.isValid = function(e) {
      return !isNaN(e) && e >= 1 && e <= 40;
    };
  },
  9713: (e, t, n) => {
    var r = n(7738);
    var o = n(6984);
    var i = n(5599);
    var a = n(7179);
    var l = n(501);
    var c = n(7955);
    var s = r.getBCHDigit(7973);
    function u(e, t) {
      return a.getCharCountIndicator(e, t) + 4;
    }
    function f(e, t) {
      var n = 0;
      return e.forEach((function(e) {
        var r = u(e.mode, t);
        n += r + e.getBitsLength();
      })), n;
    }
    t.from = function(e, t) {
      return l.isValid(e) ? parseInt(e, 10) : t;
    }, t.getCapacity = function(e, t, n) {
      if (!l.isValid(e)) throw new Error('Invalid QR Code version');
      void 0 === n && (n = a.BYTE);
      var i = 8 * (r.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
      if (n === a.MIXED) return i;
      var c = i - u(n, e);
      switch (n) {
       case a.NUMERIC:
        return Math.floor(c / 10 * 3);

       case a.ALPHANUMERIC:
        return Math.floor(c / 11 * 2);

       case a.KANJI:
        return Math.floor(c / 13);

       case a.BYTE:
       default:
        return Math.floor(c / 8);
      }
    }, t.getBestVersionForData = function(e, n) {
      var r;
      var o = i.from(n, i.M);
      if (c(e)) {
        if (e.length > 1) return function(e, n) {
          for (var r = 1; r <= 40; r++) if (f(e, r) <= t.getCapacity(r, n, a.MIXED)) return r;
        }(e, o);
        if (0 === e.length) return 1;
        r = e[0];
      } else r = e;
      return function(e, n, r) {
        for (var o = 1; o <= 40; o++) if (n <= t.getCapacity(o, r, e)) return o;
      }(r.mode, r.getLength(), o);
    }, t.getEncodedBits = function(e) {
      if (!l.isValid(e) || e < 7) throw new Error('Invalid QR Code version');
      var t = e << 12;
      for (;r.getBCHDigit(t) - s >= 0; ) t ^= 7973 << r.getBCHDigit(t) - s;
      return e << 12 | t;
    };
  },
  7497: (e, t, n) => {
    var r = n(5667);
    t.render = function(e, t, n) {
      var o = n;
      var i = t;
      void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (i = function() {
        try {
          return document.createElement('canvas');
        } catch (e) {
          throw new Error('You need to specify a canvas element');
        }
      }()), o = r.getOptions(o);
      var a = r.getImageWidth(e.modules.size, o);
      var l = i.getContext('2d');
      var c = l.createImageData(a, a);
      return r.qrToImageData(c.data, e, o), function(e, t, n) {
        e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + 'px', t.style.width = n + 'px';
      }(l, i, a), l.putImageData(c, 0, 0), i;
    }, t.renderToDataURL = function(e, n, r) {
      var o = r;
      void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
      var i = t.render(e, n, o);
      var a = o.type || 'image/png';
      var l = o.rendererOpts || {};
      return i.toDataURL(a, l.quality);
    };
  },
  7322: (e, t, n) => {
    var r = n(5667);
    function o(e, t) {
      var n = e.a / 255;
      var r = t + '="' + e.hex + '"';
      return n < 1 ? r + ' ' + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
    }
    function i(e, t, n) {
      var r = e + t;
      return void 0 !== n && (r += ' ' + n), r;
    }
    t.render = function(e, t, n) {
      var a = r.getOptions(t);
      var l = e.modules.size;
      var c = e.modules.data;
      var s = l + 2 * a.margin;
      var u = a.color.light.a ? '<path ' + o(a.color.light, 'fill') + ' d="M0 0h' + s + 'v' + s + 'H0z"/>' : '';
      var f = '<path ' + o(a.color.dark, 'stroke') + ' d="' + function(e, t, n) {
        var r = '';
        var o = 0;
        var a = !1;
        var l = 0;
        for (var c = 0; c < e.length; c++) {
          var s = Math.floor(c % t);
          var u = Math.floor(c / t);
          s || a || (a = !0), e[c] ? (l++, c > 0 && s > 0 && e[c - 1] || (r += a ? i('M', s + n, .5 + u + n) : i('m', o, 0), o = 0, 
          a = !1), s + 1 < t && e[c + 1] || (r += i('h', l), l = 0)) : o++;
        }
        return r;
      }(c, l, a.margin) + '"/>';
      var h = "viewBox=\"0 0 " + s + ' ' + s + '"';
      var p = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : '') + h + ' shape-rendering="crispEdges">' + u + f + '</svg>\n';
      return 'function' == typeof n && n(null, p), p;
    };
  },
  5667: (e, t) => {
    function n(e) {
      if ('number' == typeof e && (e = e.toString()), 'string' != typeof e) throw new Error('Color should be defined as hex string');
      var t = e.slice().replace('#', '').split('');
      if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error('Invalid hex color: ' + e);
      3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) {
        return [ e, e ];
      })))), 6 === t.length && t.push('F', 'F');
      var n = parseInt(t.join(''), 16);
      return {
        r: n >> 24 & 255,
        g: n >> 16 & 255,
        b: n >> 8 & 255,
        a: 255 & n,
        hex: '#' + t.slice(0, 6).join('')
      };
    }
    t.getOptions = function(e) {
      e || (e = {}), e.color || (e.color = {});
      var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin;
      var r = e.width && e.width >= 21 ? e.width : void 0;
      var o = e.scale || 4;
      return {
        width: r,
        scale: r ? 4 : o,
        margin: t,
        color: {
          dark: n(e.color.dark || '#000000ff'),
          light: n(e.color.light || '#ffffffff')
        },
        type: e.type,
        rendererOpts: e.rendererOpts || {}
      };
    }, t.getScale = function(e, t) {
      return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale;
    }, t.getImageWidth = function(e, n) {
      var r = t.getScale(e, n);
      return Math.floor((e + 2 * n.margin) * r);
    }, t.qrToImageData = function(e, n, r) {
      var o = n.modules.size;
      var i = n.modules.data;
      var a = t.getScale(o, r);
      var l = Math.floor((o + 2 * r.margin) * a);
      var c = r.margin * a;
      var s = [ r.color.light, r.color.dark ];
      for (var u = 0; u < l; u++) for (var f = 0; f < l; f++) {
        var h = 4 * (u * l + f);
        var p = r.color.light;
        if (u >= c && f >= c && u < l - c && f < l - c) p = s[i[Math.floor((u - c) / a) * o + Math.floor((f - c) / a)] ? 1 : 0];
        e[h++] = p.r, e[h++] = p.g, e[h++] = p.b, e[h] = p.a;
      }
    };
  },
  412: (e, t, n) => {
    "use strict";
    var r = n(7955);
    i.TYPED_ARRAY_SUPPORT = function() {
      try {
        var e = new Uint8Array(1);
        return e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function() {
            return 42;
          }
        }, 42 === e.foo();
      } catch (t) {
        return !1;
      }
    }();
    var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    function i(e, t, n) {
      return i.TYPED_ARRAY_SUPPORT || this instanceof i ? 'number' == typeof e ? c(this, e) : function(e, t, n, r) {
        if ('number' == typeof t) throw new TypeError('"value" argument must not be a number');
        if ('undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, r) {
          if (n < 0 || t.byteLength < n) throw new RangeError('\'offset\' is out of bounds');
          if (t.byteLength < n + (r || 0)) throw new RangeError('\'length\' is out of bounds');
          var o;
          o = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
          i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = s(e, o);
          return o;
        }(e, t, n, r);
        if ('string' == typeof t) return function(e, t) {
          var n = 0 | f(t);
          var r = l(e, n);
          var o = r.write(t);
          o !== n && (r = r.slice(0, o));
          return r;
        }(e, t);
        return function(e, t) {
          if (i.isBuffer(t)) {
            var n = 0 | a(t.length);
            var r = l(e, n);
            return 0 === r.length || t.copy(r, 0, 0, n), r;
          }
          if (t) {
            if ('undefined' != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || 'length' in t) return 'number' != typeof t.length || function(e) {
              return e != e;
            }(t.length) ? l(e, 0) : s(e, t);
            if ('Buffer' === t.type && Array.isArray(t.data)) return s(e, t.data);
          }
          throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
        }(e, t);
      }(this, e, t, n) : new i(e, t, n);
    }
    function a(e) {
      if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + ' bytes');
      return 0 | e;
    }
    function l(e, t) {
      var n;
      return i.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = i.prototype : (null === (n = e) && (n = new i(t)), n.length = t), 
      n;
    }
    function c(e, t) {
      var n = l(e, t < 0 ? 0 : 0 | a(t));
      if (!i.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) n[r] = 0;
      return n;
    }
    function s(e, t) {
      var n = t.length < 0 ? 0 : 0 | a(t.length);
      var r = l(e, n);
      for (var o = 0; o < n; o += 1) r[o] = 255 & t[o];
      return r;
    }
    function u(e, t) {
      var n;
      t = t || Infinity;
      var r = e.length;
      var o = null;
      var i = [];
      for (var a = 0; a < r; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
          if (!o) {
            if (n > 56319) {
              (t -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }
            if (a + 1 === r) {
              (t -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }
            o = n;
            continue;
          }
          if (n < 56320) {
            (t -= 3) > -1 && i.push(239, 191, 189), o = n;
            continue;
          }
          n = 65536 + (o - 55296 << 10 | n - 56320);
        } else o && (t -= 3) > -1 && i.push(239, 191, 189);
        if (o = null, n < 128) {
          if ((t -= 1) < 0) break;
          i.push(n);
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          i.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw new Error('Invalid code point');
          if ((t -= 4) < 0) break;
          i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }
      return i;
    }
    function f(e) {
      return i.isBuffer(e) ? e.length : 'undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ('string' != typeof e && (e = '' + e), 
      0 === e.length ? 0 : u(e).length);
    }
    i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, 'undefined' != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
      value: null,
      configurable: !0,
      enumerable: !1,
      writable: !1
    })), i.prototype.write = function(e, t, n) {
      void 0 === t || void 0 === n && 'string' == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
      var r = this.length - t;
      if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError('Attempt to write outside buffer bounds');
      return function(e, t, n, r) {
        return function(e, t, n, r) {
          for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
          return o;
        }(u(t, e.length - n), e, n, r);
      }(this, e, t, n);
    }, i.prototype.slice = function(e, t) {
      var n = this.length;
      var r;
      if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), 
      t < e && (t = e), i.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = i.prototype; else {
        var o = t - e;
        r = new i(o, void 0);
        for (var a = 0; a < o; ++a) r[a] = this[a + e];
      }
      return r;
    }, i.prototype.copy = function(e, t, n, r) {
      if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), 
      r === n) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError('targetStart out of bounds');
      if (n < 0 || n >= this.length) throw new RangeError('sourceStart out of bounds');
      if (r < 0) throw new RangeError('sourceEnd out of bounds');
      r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
      var o = r - n;
      var a;
      if (this === e && n < t && t < r) for (a = o - 1; a >= 0; --a) e[a + t] = this[a + n]; else if (o < 1e3 || !i.TYPED_ARRAY_SUPPORT) for (a = 0; a < o; ++a) e[a + t] = this[a + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
      return o;
    }, i.prototype.fill = function(e, t, n) {
      if ('string' == typeof e) {
        if ('string' == typeof t ? (t = 0, n = this.length) : 'string' == typeof n && (n = this.length), 1 === e.length) {
          var r = e.charCodeAt(0);
          r < 256 && (e = r);
        }
      } else 'number' == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
      if (n <= t) return this;
      var o;
      if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), 'number' == typeof e) for (o = t; o < n; ++o) this[o] = e; else {
        var a = i.isBuffer(e) ? e : new i(e);
        var l = a.length;
        for (o = 0; o < n - t; ++o) this[o + t] = a[o % l];
      }
      return this;
    }, i.concat = function(e, t) {
      if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return l(null, 0);
      var n;
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var o = c(null, t);
      var a = 0;
      for (n = 0; n < e.length; ++n) {
        var s = e[n];
        if (!i.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
        s.copy(o, a), a += s.length;
      }
      return o;
    }, i.byteLength = f, i.prototype._isBuffer = !0, i.isBuffer = function(e) {
      return !(null == e || !e._isBuffer);
    }, e.exports.alloc = function(e) {
      var t = new i(e);
      return t.fill(0), t;
    }, e.exports.from = function(e) {
      return new i(e);
    };
  },
  973: (e, t, n) => {
    "use strict";
    var r = n(5155);
    var o = n(4525);
    var i = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
    t.lW = c, t.h2 = 50;
    var a = 2147483647;
    function l(e) {
      if (e > a) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      var t = new Uint8Array(e);
      return Object.setPrototypeOf(t, c.prototype), t;
    }
    function c(e, t, n) {
      if ('number' == typeof e) {
        if ('string' == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
        return f(e);
      }
      return s(e, t, n);
    }
    function s(e, t, n) {
      if ('string' == typeof e) return function(e, t) {
        'string' == typeof t && '' !== t || (t = 'utf8');
        if (!c.isEncoding(t)) throw new TypeError('Unknown encoding: ' + t);
        var n = 0 | g(e, t);
        var r = l(n);
        var o = r.write(e, t);
        o !== n && (r = r.slice(0, o));
        return r;
      }(e, t);
      if (ArrayBuffer.isView(e)) return function(e) {
        if (F(e, Uint8Array)) {
          var t = new Uint8Array(e);
          return p(t.buffer, t.byteOffset, t.byteLength);
        }
        return h(e);
      }(e);
      if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (F(e, ArrayBuffer) || e && F(e.buffer, ArrayBuffer)) return p(e, t, n);
      if ('undefined' != typeof SharedArrayBuffer && (F(e, SharedArrayBuffer) || e && F(e.buffer, SharedArrayBuffer))) return p(e, t, n);
      if ('number' == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
      var r = e.valueOf && e.valueOf();
      if (null != r && r !== e) return c.from(r, t, n);
      var o = function(e) {
        if (c.isBuffer(e)) {
          var t = 0 | d(e.length);
          var n = l(t);
          return 0 === n.length || e.copy(n, 0, 0, t), n;
        }
        if (void 0 !== e.length) return 'number' != typeof e.length || q(e.length) ? l(0) : h(e);
        if ('Buffer' === e.type && Array.isArray(e.data)) return h(e.data);
      }(e);
      if (o) return o;
      if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]('string'), t, n);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    function u(e) {
      if ('number' != typeof e) throw new TypeError('"size" argument must be of type number');
      if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function f(e) {
      return u(e), l(e < 0 ? 0 : 0 | d(e));
    }
    function h(e) {
      var t = e.length < 0 ? 0 : 0 | d(e.length);
      var n = l(t);
      for (var r = 0; r < t; r += 1) n[r] = 255 & e[r];
      return n;
    }
    function p(e, t, n) {
      if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var r;
      return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), 
      Object.setPrototypeOf(r, c.prototype), r;
    }
    function d(e) {
      if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + ' bytes');
      return 0 | e;
    }
    function g(e, t) {
      if (c.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || F(e, ArrayBuffer)) return e.byteLength;
      if ('string' != typeof e) throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
      var n = e.length;
      var r = arguments.length > 2 && !0 === arguments[2];
      if (!r && 0 === n) return 0;
      var o = !1;
      for (;;) switch (t) {
       case 'ascii':
       case 'latin1':
       case 'binary':
        return n;

       case 'utf8':
       case 'utf-8':
        return D(e).length;

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return 2 * n;

       case 'hex':
        return n >>> 1;

       case 'base64':
        return z(e).length;

       default:
        if (o) return r ? -1 : D(e).length;
        t = ('' + t).toLowerCase(), o = !0;
      }
    }
    function _(e, t, n) {
      var r = !1;
      if ((void 0 === t || t < 0) && (t = 0), t > this.length) return '';
      if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return '';
      if ((n >>>= 0) <= (t >>>= 0)) return '';
      for (e || (e = 'utf8'); ;) switch (e) {
       case 'hex':
        return R(this, t, n);

       case 'utf8':
       case 'utf-8':
        return k(this, t, n);

       case 'ascii':
        return B(this, t, n);

       case 'latin1':
       case 'binary':
        return T(this, t, n);

       case 'base64':
        return A(this, t, n);

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return N(this, t, n);

       default:
        if (r) throw new TypeError('Unknown encoding: ' + e);
        e = (e + '').toLowerCase(), r = !0;
      }
    }
    function v(e, t, n) {
      var r = e[t];
      e[t] = e[n], e[n] = r;
    }
    function m(e, t, n, r, o) {
      if (0 === e.length) return -1;
      if ('string' == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), q(n = +n) && (n = o ? 0 : e.length - 1), 
      n < 0 && (n = e.length + n), n >= e.length) {
        if (o) return -1;
        n = e.length - 1;
      } else if (n < 0) {
        if (!o) return -1;
        n = 0;
      }
      if ('string' == typeof t && (t = c.from(t, r)), c.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, n, r, o);
      if ('number' == typeof t) return t &= 255, 'function' == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : w(e, [ t ], n, r, o);
      throw new TypeError('val must be string, number or Buffer');
    }
    function w(e, t, n, r, o) {
      var i = 1;
      var a = e.length;
      var l = t.length;
      if (void 0 !== r && ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        i = 2, a /= 2, l /= 2, n /= 2;
      }
      function c(e, t) {
        return 1 === i ? e[t] : e.readUInt16BE(t * i);
      }
      var s;
      if (o) {
        var u = -1;
        for (s = n; s < a; s++) if (c(e, s) === c(t, -1 === u ? 0 : s - u)) {
          if (-1 === u && (u = s), s - u + 1 === l) return u * i;
        } else -1 !== u && (s -= s - u), u = -1;
      } else for (n + l > a && (n = a - l), s = n; s >= 0; s--) {
        var f = !0;
        for (var h = 0; h < l; h++) if (c(e, s + h) !== c(t, h)) {
          f = !1;
          break;
        }
        if (f) return s;
      }
      return -1;
    }
    function y(e, t, n, r) {
      n = Number(n) || 0;
      var o = e.length - n;
      r ? (r = Number(r)) > o && (r = o) : r = o;
      var i = t.length;
      r > i / 2 && (r = i / 2);
      for (var a = 0; a < r; ++a) {
        var l = parseInt(t.substr(2 * a, 2), 16);
        if (q(l)) return a;
        e[n + a] = l;
      }
      return a;
    }
    function b(e, t, n, r) {
      return W(D(t, e.length - n), e, n, r);
    }
    function x(e, t, n, r) {
      return W(function(e) {
        var t = [];
        for (var n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
        return t;
      }(t), e, n, r);
    }
    function E(e, t, n, r) {
      return W(z(t), e, n, r);
    }
    function C(e, t, n, r) {
      return W(function(e, t) {
        var n, r, o;
        var i = [];
        for (var a = 0; a < e.length && !((t -= 2) < 0); ++a) r = (n = e.charCodeAt(a)) >> 8, o = n % 256, i.push(o), i.push(r);
        return i;
      }(t, e.length - n), e, n, r);
    }
    function A(e, t, n) {
      return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
    }
    function k(e, t, n) {
      n = Math.min(e.length, n);
      var r = [];
      var o = t;
      for (;o < n; ) {
        var i = e[o];
        var a = null;
        var l = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
        var c, s, u, f;
        if (o + l <= n) switch (l) {
         case 1:
          i < 128 && (a = i);
          break;

         case 2:
          128 == (192 & (c = e[o + 1])) && (f = (31 & i) << 6 | 63 & c) > 127 && (a = f);
          break;

         case 3:
          c = e[o + 1], s = e[o + 2], 128 == (192 & c) && 128 == (192 & s) && (f = (15 & i) << 12 | (63 & c) << 6 | 63 & s) > 2047 && (f < 55296 || f > 57343) && (a = f);
          break;

         case 4:
          c = e[o + 1], s = e[o + 2], u = e[o + 3], 128 == (192 & c) && 128 == (192 & s) && 128 == (192 & u) && (f = (15 & i) << 18 | (63 & c) << 12 | (63 & s) << 6 | 63 & u) > 65535 && f < 1114112 && (a = f);
        }
        null === a ? (a = 65533, l = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), 
        o += l;
      }
      return function(e) {
        var t = e.length;
        if (t <= S) return String.fromCharCode.apply(String, e);
        var n = '';
        var r = 0;
        for (;r < t; ) n += String.fromCharCode.apply(String, e.slice(r, r += S));
        return n;
      }(r);
    }
    c.TYPED_ARRAY_SUPPORT = function() {
      try {
        var e = new Uint8Array(1);
        var t = {
          foo: function() {
            return 42;
          }
        };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
      } catch (n) {
        return !1;
      }
    }(), c.TYPED_ARRAY_SUPPORT || 'undefined' == typeof console || 'function' != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
    Object.defineProperty(c.prototype, 'parent', {
      enumerable: !0,
      get: function() {
        if (c.isBuffer(this)) return this.buffer;
      }
    }), Object.defineProperty(c.prototype, 'offset', {
      enumerable: !0,
      get: function() {
        if (c.isBuffer(this)) return this.byteOffset;
      }
    }), c.poolSize = 8192, c.from = function(e, t, n) {
      return s(e, t, n);
    }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(e, t, n) {
      return function(e, t, n) {
        return u(e), e <= 0 ? l(e) : void 0 !== t ? 'string' == typeof n ? l(e).fill(t, n) : l(e).fill(t) : l(e);
      }(e, t, n);
    }, c.allocUnsafe = function(e) {
      return f(e);
    }, c.allocUnsafeSlow = function(e) {
      return f(e);
    }, c.isBuffer = function(e) {
      return null != e && !0 === e._isBuffer && e !== c.prototype;
    }, c.compare = function(e, t) {
      if (F(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), F(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), 
      !c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e === t) return 0;
      var n = e.length;
      var r = t.length;
      for (var o = 0, i = Math.min(n, r); o < i; ++o) if (e[o] !== t[o]) {
        n = e[o], r = t[o];
        break;
      }
      return n < r ? -1 : r < n ? 1 : 0;
    }, c.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
       case 'hex':
       case 'utf8':
       case 'utf-8':
       case 'ascii':
       case 'latin1':
       case 'binary':
       case 'base64':
       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return !0;

       default:
        return !1;
      }
    }, c.concat = function(e, t) {
      if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return c.alloc(0);
      var n;
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var r = c.allocUnsafe(t);
      var o = 0;
      for (n = 0; n < e.length; ++n) {
        var i = e[n];
        if (F(i, Uint8Array)) o + i.length > r.length ? c.from(i).copy(r, o) : Uint8Array.prototype.set.call(r, i, o); else {
          if (!c.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
          i.copy(r, o);
        }
        o += i.length;
      }
      return r;
    }, c.byteLength = g, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
      for (var t = 0; t < e; t += 2) v(this, t, t + 1);
      return this;
    }, c.prototype.swap32 = function() {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
      for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2);
      return this;
    }, c.prototype.swap64 = function() {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
      for (var t = 0; t < e; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4);
      return this;
    }, c.prototype.toString = function() {
      var e = this.length;
      return 0 === e ? '' : 0 === arguments.length ? k(this, 0, e) : _.apply(this, arguments);
    }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(e) {
      if (!c.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
      return this === e || 0 === c.compare(this, e);
    }, c.prototype.inspect = function() {
      var e = '';
      var n = t.h2;
      return e = this.toString('hex', 0, n).replace(/(.{2})/g, '$1 ').trim(), this.length > n && (e += ' ... '), '<Buffer ' + e + '>';
    }, i && (c.prototype[i] = c.prototype.inspect), c.prototype.compare = function(e, t, n, r, o) {
      if (F(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
      if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), 
      t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError('out of range index');
      if (r >= o && t >= n) return 0;
      if (r >= o) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;
      var i = (o >>>= 0) - (r >>>= 0);
      var a = (n >>>= 0) - (t >>>= 0);
      var l = Math.min(i, a);
      var s = this.slice(r, o);
      var u = e.slice(t, n);
      for (var f = 0; f < l; ++f) if (s[f] !== u[f]) {
        i = s[f], a = u[f];
        break;
      }
      return i < a ? -1 : a < i ? 1 : 0;
    }, c.prototype.includes = function(e, t, n) {
      return -1 !== this.indexOf(e, t, n);
    }, c.prototype.indexOf = function(e, t, n) {
      return m(this, e, t, n, !0);
    }, c.prototype.lastIndexOf = function(e, t, n) {
      return m(this, e, t, n, !1);
    }, c.prototype.write = function(e, t, n, r) {
      if (void 0 === t) r = 'utf8', n = this.length, t = 0; else if (void 0 === n && 'string' == typeof t) r = t, n = this.length, 
      t = 0; else {
        if (!isFinite(t)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = 'utf8')) : (r = n, n = void 0);
      }
      var o = this.length - t;
      if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError('Attempt to write outside buffer bounds');
      r || (r = 'utf8');
      var i = !1;
      for (;;) switch (r) {
       case 'hex':
        return y(this, e, t, n);

       case 'utf8':
       case 'utf-8':
        return b(this, e, t, n);

       case 'ascii':
       case 'latin1':
       case 'binary':
        return x(this, e, t, n);

       case 'base64':
        return E(this, e, t, n);

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return C(this, e, t, n);

       default:
        if (i) throw new TypeError('Unknown encoding: ' + r);
        r = ('' + r).toLowerCase(), i = !0;
      }
    }, c.prototype.toJSON = function() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    var S = 4096;
    function B(e, t, n) {
      var r = '';
      n = Math.min(e.length, n);
      for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
      return r;
    }
    function T(e, t, n) {
      var r = '';
      n = Math.min(e.length, n);
      for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
      return r;
    }
    function R(e, t, n) {
      var r = e.length;
      (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
      var o = '';
      for (var i = t; i < n; ++i) o += j[e[i]];
      return o;
    }
    function N(e, t, n) {
      var r = e.slice(t, n);
      var o = '';
      for (var i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
      return o;
    }
    function L(e, t, n) {
      if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
      if (e + t > n) throw new RangeError('Trying to access beyond buffer length');
    }
    function P(e, t, n, r, o, i) {
      if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
      if (n + r > e.length) throw new RangeError('Index out of range');
    }
    function M(e, t, n, r, o, i) {
      if (n + r > e.length) throw new RangeError('Index out of range');
      if (n < 0) throw new RangeError('Index out of range');
    }
    function O(e, t, n, r, i) {
      return t = +t, n >>>= 0, i || M(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4;
    }
    function I(e, t, n, r, i) {
      return t = +t, n >>>= 0, i || M(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8;
    }
    c.prototype.slice = function(e, t) {
      var n = this.length;
      (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), 
      t < e && (t = e);
      var r = this.subarray(e, t);
      return Object.setPrototypeOf(r, c.prototype), r;
    }, c.prototype.readUintLE = c.prototype.readUIntLE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || L(e, t, this.length);
      var r = this[e];
      var o = 1;
      var i = 0;
      for (;++i < t && (o *= 256); ) r += this[e + i] * o;
      return r;
    }, c.prototype.readUintBE = c.prototype.readUIntBE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || L(e, t, this.length);
      var r = this[e + --t];
      var o = 1;
      for (;t > 0 && (o *= 256); ) r += this[e + --t] * o;
      return r;
    }, c.prototype.readUint8 = c.prototype.readUInt8 = function(e, t) {
      return e >>>= 0, t || L(e, 1, this.length), this[e];
    }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(e, t) {
      return e >>>= 0, t || L(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(e, t) {
      return e >>>= 0, t || L(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(e, t) {
      return e >>>= 0, t || L(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
    }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(e, t) {
      return e >>>= 0, t || L(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, c.prototype.readIntLE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || L(e, t, this.length);
      var r = this[e];
      var o = 1;
      var i = 0;
      for (;++i < t && (o *= 256); ) r += this[e + i] * o;
      return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }, c.prototype.readIntBE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || L(e, t, this.length);
      var r = t;
      var o = 1;
      var i = this[e + --r];
      for (;r > 0 && (o *= 256); ) i += this[e + --r] * o;
      return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }, c.prototype.readInt8 = function(e, t) {
      return e >>>= 0, t || L(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
    }, c.prototype.readInt16LE = function(e, t) {
      e >>>= 0, t || L(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, c.prototype.readInt16BE = function(e, t) {
      e >>>= 0, t || L(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, c.prototype.readInt32LE = function(e, t) {
      return e >>>= 0, t || L(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, c.prototype.readInt32BE = function(e, t) {
      return e >>>= 0, t || L(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, c.prototype.readFloatLE = function(e, t) {
      return e >>>= 0, t || L(e, 4, this.length), o.read(this, e, !0, 23, 4);
    }, c.prototype.readFloatBE = function(e, t) {
      return e >>>= 0, t || L(e, 4, this.length), o.read(this, e, !1, 23, 4);
    }, c.prototype.readDoubleLE = function(e, t) {
      return e >>>= 0, t || L(e, 8, this.length), o.read(this, e, !0, 52, 8);
    }, c.prototype.readDoubleBE = function(e, t) {
      return e >>>= 0, t || L(e, 8, this.length), o.read(this, e, !1, 52, 8);
    }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(e, t, n, r) {
      (e = +e, t >>>= 0, n >>>= 0, r) || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var o = 1;
      var i = 0;
      for (this[t] = 255 & e; ++i < n && (o *= 256); ) this[t + i] = e / o & 255;
      return t + n;
    }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(e, t, n, r) {
      (e = +e, t >>>= 0, n >>>= 0, r) || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var o = n - 1;
      var i = 1;
      for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) this[t + o] = e / i & 255;
      return t + n;
    }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
    }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
    }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
    }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, 
      this[t] = 255 & e, t + 4;
    }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, 
      this[t + 3] = 255 & e, t + 4;
    }, c.prototype.writeIntLE = function(e, t, n, r) {
      if (e = +e, t >>>= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        P(this, e, t, n, o - 1, -o);
      }
      var i = 0;
      var a = 1;
      var l = 0;
      for (this[t] = 255 & e; ++i < n && (a *= 256); ) e < 0 && 0 === l && 0 !== this[t + i - 1] && (l = 1), this[t + i] = (e / a >> 0) - l & 255;
      return t + n;
    }, c.prototype.writeIntBE = function(e, t, n, r) {
      if (e = +e, t >>>= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        P(this, e, t, n, o - 1, -o);
      }
      var i = n - 1;
      var a = 1;
      var l = 0;
      for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); ) e < 0 && 0 === l && 0 !== this[t + i + 1] && (l = 1), this[t + i] = (e / a >> 0) - l & 255;
      return t + n;
    }, c.prototype.writeInt8 = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
    }, c.prototype.writeInt16LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
    }, c.prototype.writeInt16BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
    }, c.prototype.writeInt32LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, 
      this[t + 3] = e >>> 24, t + 4;
    }, c.prototype.writeInt32BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, 
      this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
    }, c.prototype.writeFloatLE = function(e, t, n) {
      return O(this, e, t, !0, n);
    }, c.prototype.writeFloatBE = function(e, t, n) {
      return O(this, e, t, !1, n);
    }, c.prototype.writeDoubleLE = function(e, t, n) {
      return I(this, e, t, !0, n);
    }, c.prototype.writeDoubleBE = function(e, t, n) {
      return I(this, e, t, !1, n);
    }, c.prototype.copy = function(e, t, n, r) {
      if (!c.isBuffer(e)) throw new TypeError('argument should be a Buffer');
      if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), 
      r === n) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError('targetStart out of bounds');
      if (n < 0 || n >= this.length) throw new RangeError('Index out of range');
      if (r < 0) throw new RangeError('sourceEnd out of bounds');
      r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
      var o = r - n;
      return this === e && 'function' == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), 
      o;
    }, c.prototype.fill = function(e, t, n, r) {
      if ('string' == typeof e) {
        if ('string' == typeof t ? (r = t, t = 0, n = this.length) : 'string' == typeof n && (r = n, n = this.length), void 0 !== r && 'string' != typeof r) throw new TypeError('encoding must be a string');
        if ('string' == typeof r && !c.isEncoding(r)) throw new TypeError('Unknown encoding: ' + r);
        if (1 === e.length) {
          var o = e.charCodeAt(0);
          ('utf8' === r && o < 128 || 'latin1' === r) && (e = o);
        }
      } else 'number' == typeof e ? e &= 255 : 'boolean' == typeof e && (e = Number(e));
      if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
      if (n <= t) return this;
      var i;
      if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), 'number' == typeof e) for (i = t; i < n; ++i) this[i] = e; else {
        var a = c.isBuffer(e) ? e : c.from(e, r);
        var l = a.length;
        if (0 === l) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
        for (i = 0; i < n - t; ++i) this[i + t] = a[i % l];
      }
      return this;
    };
    var U = /[^+/0-9A-Za-z-_]/g;
    function D(e, t) {
      var n;
      t = t || Infinity;
      var r = e.length;
      var o = null;
      var i = [];
      for (var a = 0; a < r; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
          if (!o) {
            if (n > 56319) {
              (t -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }
            if (a + 1 === r) {
              (t -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }
            o = n;
            continue;
          }
          if (n < 56320) {
            (t -= 3) > -1 && i.push(239, 191, 189), o = n;
            continue;
          }
          n = 65536 + (o - 55296 << 10 | n - 56320);
        } else o && (t -= 3) > -1 && i.push(239, 191, 189);
        if (o = null, n < 128) {
          if ((t -= 1) < 0) break;
          i.push(n);
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          i.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw new Error('Invalid code point');
          if ((t -= 4) < 0) break;
          i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }
      return i;
    }
    function z(e) {
      return r.toByteArray(function(e) {
        if ((e = (e = e.split('=')[0]).trim().replace(U, '')).length < 2) return '';
        for (;e.length % 4 != 0; ) e += '=';
        return e;
      }(e));
    }
    function W(e, t, n, r) {
      for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
      return o;
    }
    function F(e, t) {
      return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
    }
    function q(e) {
      return e != e;
    }
    var j = function() {
      var e = '0123456789abcdef';
      var t = new Array(256);
      for (var n = 0; n < 16; ++n) {
        var r = 16 * n;
        for (var o = 0; o < 16; ++o) t[r + o] = e[n] + e[o];
      }
      return t;
    }();
  },
  2817: e => {
    e.exports = function() {
      var e = document.getSelection();
      if (!e.rangeCount) return function() {};
      var t = document.activeElement;
      var n = [];
      for (var r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
      switch (t.tagName.toUpperCase()) {
       case 'INPUT':
       case 'TEXTAREA':
        t.blur();
        break;

       default:
        t = null;
      }
      return e.removeAllRanges(), function() {
        'Caret' === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
          e.addRange(t);
        })), t && t.focus();
      };
    };
  }
} ]);
//# sourceMappingURL=453.eb4aef57.js.map