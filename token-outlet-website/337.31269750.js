/*! For license information please see 337.31269750.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 337 ], {
  5522: (e, t, n) => {
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
    var r = n(5755);
    var o = n(2873);
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
  4337: (e, t, n) => {
    function r(e) {
      return e && 'object' == typeof e && 'default' in e ? e.default : e;
    }
    var o = n(5522);
    var i = r(n(2592));
    var a = r(n(640));
    var l = n(5776);
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
  2873: (e, t) => {
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
  5755: (e, t, n) => {
    "use strict";
    t.D = void 0;
    const r = n(2873);
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
  9742: (e, t) => {
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
  640: (e, t, n) => {
    "use strict";
    var r = n(1742);
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
  5987: e => {
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
  645: (e, t) => {
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
  5826: e => {
    var t = {}.toString;
    e.exports = Array.isArray || function(e) {
      return '[object Array]' == t.call(e);
    };
  },
  5776: (e, t, n) => {
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
  2592: (e, t, n) => {
    var r = n(7138);
    var o = n(5115);
    var i = n(6907);
    var a = n(3776);
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
  7138: e => {
    e.exports = function() {
      return 'function' == typeof Promise && Promise.prototype && Promise.prototype.then;
    };
  },
  1845: (e, t, n) => {
    var r = n(242).getSymbolSize;
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
  8260: (e, t, n) => {
    var r = n(6910);
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
  7245: e => {
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
  3280: (e, t, n) => {
    var r = n(9131);
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
  3424: (e, t, n) => {
    var r = n(9131);
    var o = n(6910);
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
  6245: (e, t, n) => {
    var r = n(4908);
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
  4908: (e, t) => {
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
  6526: (e, t, n) => {
    var r = n(242).getSymbolSize;
    t.getPositions = function(e) {
      var t = r(e);
      return [ [ 0, 0 ], [ t - 7, 0 ], [ 0, t - 7 ] ];
    };
  },
  1642: (e, t, n) => {
    var r = n(242);
    var o = r.getBCHDigit(1335);
    t.getEncodedBits = function(e, t) {
      var n = e.bit << 3 | t;
      var i = n << 10;
      for (;r.getBCHDigit(i) - o >= 0; ) i ^= 1335 << r.getBCHDigit(i) - o;
      return 21522 ^ (n << 10 | i);
    };
  },
  9729: (e, t, n) => {
    var r = n(9131);
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
  5442: (e, t, n) => {
    var r = n(6910);
    var o = n(242);
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
  7126: (e, t) => {
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
  6910: (e, t, n) => {
    var r = n(3114);
    var o = n(7007);
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
  1085: (e, t, n) => {
    var r = n(6910);
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
  6143: (e, t, n) => {
    var r = n(9131);
    var o = n(9729);
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
  5115: (e, t, n) => {
    var r = n(9131);
    var o = n(242);
    var i = n(4908);
    var a = n(7245);
    var l = n(3280);
    var c = n(1845);
    var s = n(6526);
    var u = n(7126);
    var f = n(6245);
    var h = n(6291);
    var p = n(3103);
    var d = n(1642);
    var g = n(6910);
    var _ = n(6130);
    var v = n(5826);
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
  6291: (e, t, n) => {
    var r = n(9131);
    var o = n(6143);
    var i = n(6772).lW;
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
  7007: (e, t) => {
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
  6130: (e, t, n) => {
    var r = n(6910);
    var o = n(1085);
    var i = n(8260);
    var a = n(3424);
    var l = n(5442);
    var c = n(7007);
    var s = n(242);
    var u = n(5987);
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
  242: (e, t) => {
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
  3114: (e, t) => {
    t.isValid = function(e) {
      return !isNaN(e) && e >= 1 && e <= 40;
    };
  },
  3103: (e, t, n) => {
    var r = n(242);
    var o = n(6245);
    var i = n(4908);
    var a = n(6910);
    var l = n(3114);
    var c = n(5826);
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
  6907: (e, t, n) => {
    var r = n(5169);
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
  3776: (e, t, n) => {
    var r = n(5169);
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
  5169: (e, t) => {
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
  9131: (e, t, n) => {
    "use strict";
    var r = n(5826);
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
  6772: (e, t, n) => {
    "use strict";
    var r = n(9742);
    var o = n(645);
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
  1742: e => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxJQUFJLElBQUksSUFDWixJQUFJLElBQUksSUFBSSxJQUNaLElBQUksSUFBSSxJQUFJLElBQ1osSUFBSSxJQUFJLElBQUksSUFDWixJQUFJLElBQUksSUFBSTtJQUdkLElBQUlDLElBQXFCLEVBRXZCLEdBQUcsSUFBSSxJQUFJLElBQ1gsSUFBSSxJQUFJLElBQUksSUFDWixJQUFJLElBQUksSUFBSSxJQUNaLElBQUksSUFBSSxJQUFJLElBQ1osSUFBSSxJQUFJLElBQUksSUFDWixJQUFJLElBQUksSUFBSSxLQUNaLElBQUksSUFBSSxLQUFLLEtBQ2IsSUFBSSxJQUFJLEtBQUssS0FDYixJQUFJLEtBQUssS0FBSyxLQUNkLElBQUksS0FBSyxLQUFLLEtBQ2QsSUFBSSxLQUFLLEtBQUssS0FDZCxJQUFJLEtBQUssS0FBSyxLQUNkLEtBQUssS0FBSyxLQUFLLEtBQ2YsS0FBSyxLQUFLLEtBQUssS0FDZixLQUFLLEtBQUssS0FBSyxLQUNmLEtBQUssS0FBSyxLQUFLLEtBQ2YsS0FBSyxLQUFLLEtBQUssS0FDZixLQUFLLEtBQUssS0FBSyxLQUNmLEtBQUssS0FBSyxLQUFLLEtBQ2YsS0FBSyxLQUFLLEtBQUssS0FDZixLQUFLLEtBQUssS0FBSyxLQUNmLEtBQUssS0FBSyxLQUFLLEtBQ2YsS0FBSyxLQUFLLEtBQUssS0FDZixLQUFLLEtBQUssS0FBSyxLQUNmLEtBQUssS0FBSyxLQUFLLE1BQ2YsS0FBSyxLQUFLLEtBQUssTUFDZixLQUFLLEtBQUssTUFBTSxNQUNoQixLQUFLLEtBQUssTUFBTSxNQUNoQixLQUFLLEtBQUssTUFBTSxNQUNoQixLQUFLLEtBQUssTUFBTSxNQUNoQixLQUFLLEtBQUssTUFBTSxNQUNoQixLQUFLLEtBQUssTUFBTSxNQUNoQixLQUFLLEtBQUssTUFBTSxNQUNoQixLQUFLLE1BQU0sTUFBTSxNQUNqQixLQUFLLE1BQU0sTUFBTSxNQUNqQixLQUFLLE1BQU0sTUFBTSxNQUNqQixLQUFLLE1BQU0sTUFBTSxNQUNqQixLQUFLLE1BQU0sTUFBTSxNQUNqQixLQUFLLE1BQU0s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QjtJQUlBLElBQUlzTSxJQUFzQjtNQUN4QixJQUFJOEQsSUFBVztNQUNmLElBQUkxUCxJQUFRLElBQUlqMUIsTUFBTTtNQUN0QixLQUFLLElBQUlMLElBQUksR0FBR0EsSUFBSSxNQUFNQSxHQUFHO1FBQzNCLElBQUlpbEMsSUFBVSxLQUFKamxDO1FBQ1YsS0FBSyxJQUFJUSxJQUFJLEdBQUdBLElBQUksTUFBTUEsR0FDeEI4MEIsRUFBTTJQLElBQU16a0MsS0FBS3drQyxFQUFTaGxDLEtBQUtnbEMsRUFBU3hrQztBQUU1QztNQUNBLE9BQU84MEI7QUFDUixLQVZ5Qjs7O0lDN3dEMUI5aEIsRUFBT0MsVUFBVTtNQUNmLElBQUkrRCxJQUFZM1YsU0FBUytWO01BQ3pCLEtBQUtKLEVBQVUwdEIsWUFDYixPQUFPLFlBQWE7TUFFdEIsSUFBSUMsSUFBU3RqQyxTQUFTdWpDO01BRXRCLElBQUlDLElBQVM7TUFDYixLQUFLLElBQUlybEMsSUFBSSxHQUFHQSxJQUFJd1gsRUFBVTB0QixZQUFZbGxDLEtBQ3hDcWxDLEVBQU9uaUMsS0FBS3NVLEVBQVU4dEIsV0FBV3RsQztNQUduQyxRQUFRbWxDLEVBQU9JLFFBQVFDO09BQ3JCLEtBQUs7T0FDTCxLQUFLO1FBQ0hMLEVBQU9NO1FBQ1A7O09BRUY7UUFDRU4sSUFBUzs7TUFLYixPQURBM3RCLEVBQVVnQyxtQkFDSDtRQUNjLFlBQW5CaEMsRUFBVXpXLFFBQ1Z5VyxFQUFVZ0MsbUJBRUxoQyxFQUFVMHRCLGNBQ2JHLEVBQU96aUIsU0FBUSxTQUFTclg7VUFDdEJpTSxFQUFVeUIsU0FBUzFOO0FBQ3JCLGFBR0Y0NUIsS0FDQUEsRUFBT087QUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LWJyb3dzZXIvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvYnJvd3Nlci11dGlscy9kaXN0L2VzbS9icm93c2VyLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Jyb3dzZXItdXRpbHMvZGlzdC9lc20vanNvbi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9zYWZlLWpzb24vZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvYnJvd3Nlci11dGlscy9kaXN0L2VzbS9sb2NhbC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9icm93c2VyLXV0aWxzL2Rpc3QvZXNtL21vYmlsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9icm93c2VyLXV0aWxzL2Rpc3QvZXNtL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbC9kaXN0L2Nqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC93aW5kb3ctZ2V0dGVycy9kaXN0L2Nqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC93aW5kb3ctbWV0YWRhdGEvZGlzdC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2NvcHktdG8tY2xpcGJvYXJkL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RpamtzdHJhanMvZGlqa3N0cmEuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvZGlzdC9jb21wYXQubW9kdWxlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2Nhbi1wcm9taXNlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9hbGlnbm1lbnQtcGF0dGVybi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvYWxwaGFudW1lcmljLWRhdGEuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2JpdC1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2JpdC1tYXRyaXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2J5dGUtZGF0YS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZXJyb3ItY29ycmVjdGlvbi1jb2RlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9lcnJvci1jb3JyZWN0aW9uLWxldmVsLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9maW5kZXItcGF0dGVybi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZm9ybWF0LWluZm8uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2dhbG9pcy1maWVsZC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUva2FuamktZGF0YS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvbWFzay1wYXR0ZXJuLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9tb2RlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9udW1lcmljLWRhdGEuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3BvbHlub21pYWwuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3FyY29kZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvcmVlZC1zb2xvbW9uLWVuY29kZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3JlZ2V4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9zZWdtZW50cy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3ZlcnNpb24tY2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9yZW5kZXJlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9yZW5kZXJlci9zdmctdGFnLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvcmVuZGVyZXIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi91dGlscy90eXBlZGFycmF5LWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90b2dnbGUtc2VsZWN0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xudmFyIEJyb3dzZXJJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJyb3dzZXJJbmZvKG5hbWUsIHZlcnNpb24sIG9zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMub3MgPSBvcztcbiAgICAgICAgdGhpcy50eXBlID0gJ2Jyb3dzZXInO1xuICAgIH1cbiAgICByZXR1cm4gQnJvd3NlckluZm87XG59KCkpO1xuZXhwb3J0IHsgQnJvd3NlckluZm8gfTtcbnZhciBOb2RlSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlSW5mbyh2ZXJzaW9uKSB7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMudHlwZSA9ICdub2RlJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ25vZGUnO1xuICAgICAgICB0aGlzLm9zID0gcHJvY2Vzcy5wbGF0Zm9ybTtcbiAgICB9XG4gICAgcmV0dXJuIE5vZGVJbmZvO1xufSgpKTtcbmV4cG9ydCB7IE5vZGVJbmZvIH07XG52YXIgU2VhcmNoQm90RGV2aWNlSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWFyY2hCb3REZXZpY2VJbmZvKG5hbWUsIHZlcnNpb24sIG9zLCBib3QpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5vcyA9IG9zO1xuICAgICAgICB0aGlzLmJvdCA9IGJvdDtcbiAgICAgICAgdGhpcy50eXBlID0gJ2JvdC1kZXZpY2UnO1xuICAgIH1cbiAgICByZXR1cm4gU2VhcmNoQm90RGV2aWNlSW5mbztcbn0oKSk7XG5leHBvcnQgeyBTZWFyY2hCb3REZXZpY2VJbmZvIH07XG52YXIgQm90SW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb3RJbmZvKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSAnYm90JztcbiAgICAgICAgdGhpcy5ib3QgPSB0cnVlOyAvLyBOT1RFOiBkZXByZWNhdGVkIHRlc3QgbmFtZSBpbnN0ZWFkXG4gICAgICAgIHRoaXMubmFtZSA9ICdib3QnO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9zID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIEJvdEluZm87XG59KCkpO1xuZXhwb3J0IHsgQm90SW5mbyB9O1xudmFyIFJlYWN0TmF0aXZlSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFjdE5hdGl2ZUluZm8oKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdyZWFjdC1uYXRpdmUnO1xuICAgICAgICB0aGlzLm5hbWUgPSAncmVhY3QtbmF0aXZlJztcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcyA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdE5hdGl2ZUluZm87XG59KCkpO1xuZXhwb3J0IHsgUmVhY3ROYXRpdmVJbmZvIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG52YXIgU0VBUkNIQk9YX1VBX1JFR0VYID0gL2FsZXhhfGJvdHxjcmF3bChlcnxpbmcpfGZhY2Vib29rZXh0ZXJuYWxoaXR8ZmVlZGJ1cm5lcnxnb29nbGUgd2ViIHByZXZpZXd8bmFnaW9zfHBvc3RyYW5rfHBpbmdkb218c2x1cnB8c3BpZGVyfHlhaG9vIXx5YW5kZXgvO1xudmFyIFNFQVJDSEJPVF9PU19SRUdFWCA9IC8obnVoa3xHb29nbGVib3R8WWFtbXlib3R8T3BlbmJvdHxTbHVycHxNU05Cb3R8QXNrXFwgSmVldmVzXFwvVGVvbWF8aWFfYXJjaGl2ZXIpLztcbnZhciBSRVFVSVJFRF9WRVJTSU9OX1BBUlRTID0gMztcbnZhciB1c2VyQWdlbnRSdWxlcyA9IFtcbiAgICBbJ2FvbCcsIC9BT0xTaGllbGRcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2VkZ2UnLCAvRWRnZVxcLyhbMC05XFwuX10rKS9dLFxuICAgIFsnZWRnZS1pb3MnLCAvRWRnaU9TXFwvKFswLTlcXC5fXSspL10sXG4gICAgWyd5YW5kZXhicm93c2VyJywgL1lhQnJvd3NlclxcLyhbMC05XFwuX10rKS9dLFxuICAgIFsna2FrYW90YWxrJywgL0tBS0FPVEFMS1xccyhbMC05XFwuXSspL10sXG4gICAgWydzYW1zdW5nJywgL1NhbXN1bmdCcm93c2VyXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ3NpbGsnLCAvXFxiU2lsa1xcLyhbMC05Ll8tXSspXFxiL10sXG4gICAgWydtaXVpJywgL01pdWlCcm93c2VyXFwvKFswLTlcXC5dKykkL10sXG4gICAgWydiZWFrZXInLCAvQmVha2VyQnJvd3NlclxcLyhbMC05XFwuXSspL10sXG4gICAgWydlZGdlLWNocm9taXVtJywgL0VkZ0E/XFwvKFswLTlcXC5dKykvXSxcbiAgICBbXG4gICAgICAgICdjaHJvbWl1bS13ZWJ2aWV3JyxcbiAgICAgICAgLyg/IUNocm9tLipPUFIpd3ZcXCkuKkNocm9tKD86ZXxpdW0pXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvLFxuICAgIF0sXG4gICAgWydjaHJvbWUnLCAvKD8hQ2hyb20uKk9QUilDaHJvbSg/OmV8aXVtKVxcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydwaGFudG9tanMnLCAvUGhhbnRvbUpTXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvXSxcbiAgICBbJ2NyaW9zJywgL0NyaU9TXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvXSxcbiAgICBbJ2ZpcmVmb3gnLCAvRmlyZWZveFxcLyhbMC05XFwuXSspKD86XFxzfCQpL10sXG4gICAgWydmeGlvcycsIC9GeGlPU1xcLyhbMC05XFwuXSspL10sXG4gICAgWydvcGVyYS1taW5pJywgL09wZXJhIE1pbmkuKlZlcnNpb25cXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnb3BlcmEnLCAvT3BlcmFcXC8oWzAtOVxcLl0rKSg/Olxcc3wkKS9dLFxuICAgIFsnb3BlcmEnLCAvT1BSXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvXSxcbiAgICBbJ2llJywgL1RyaWRlbnRcXC83XFwuMC4qcnZcXDooWzAtOVxcLl0rKS4qXFwpLipHZWNrbyQvXSxcbiAgICBbJ2llJywgL01TSUVcXHMoWzAtOVxcLl0rKTsuKlRyaWRlbnRcXC9bNC03XS4wL10sXG4gICAgWydpZScsIC9NU0lFXFxzKDdcXC4wKS9dLFxuICAgIFsnYmIxMCcsIC9CQjEwO1xcc1RvdWNoLipWZXJzaW9uXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ2FuZHJvaWQnLCAvQW5kcm9pZFxccyhbMC05XFwuXSspL10sXG4gICAgWydpb3MnLCAvVmVyc2lvblxcLyhbMC05XFwuX10rKS4qTW9iaWxlLipTYWZhcmkuKi9dLFxuICAgIFsnc2FmYXJpJywgL1ZlcnNpb25cXC8oWzAtOVxcLl9dKykuKlNhZmFyaS9dLFxuICAgIFsnZmFjZWJvb2snLCAvRkJBVlxcLyhbMC05XFwuXSspL10sXG4gICAgWydpbnN0YWdyYW0nLCAvSW5zdGFncmFtXFxzKFswLTlcXC5dKykvXSxcbiAgICBbJ2lvcy13ZWJ2aWV3JywgL0FwcGxlV2ViS2l0XFwvKFswLTlcXC5dKykuKk1vYmlsZS9dLFxuICAgIFsnaW9zLXdlYnZpZXcnLCAvQXBwbGVXZWJLaXRcXC8oWzAtOVxcLl0rKS4qR2Vja29cXCkkL10sXG4gICAgWydzZWFyY2hib3QnLCBTRUFSQ0hCT1hfVUFfUkVHRVhdLFxuXTtcbnZhciBvcGVyYXRpbmdTeXN0ZW1SdWxlcyA9IFtcbiAgICBbJ2lPUycsIC9pUChob25lfG9kfGFkKS9dLFxuICAgIFsnQW5kcm9pZCBPUycsIC9BbmRyb2lkL10sXG4gICAgWydCbGFja0JlcnJ5IE9TJywgL0JsYWNrQmVycnl8QkIxMC9dLFxuICAgIFsnV2luZG93cyBNb2JpbGUnLCAvSUVNb2JpbGUvXSxcbiAgICBbJ0FtYXpvbiBPUycsIC9LaW5kbGUvXSxcbiAgICBbJ1dpbmRvd3MgMy4xMScsIC9XaW4xNi9dLFxuICAgIFsnV2luZG93cyA5NScsIC8oV2luZG93cyA5NSl8KFdpbjk1KXwoV2luZG93c185NSkvXSxcbiAgICBbJ1dpbmRvd3MgOTgnLCAvKFdpbmRvd3MgOTgpfChXaW45OCkvXSxcbiAgICBbJ1dpbmRvd3MgMjAwMCcsIC8oV2luZG93cyBOVCA1LjApfChXaW5kb3dzIDIwMDApL10sXG4gICAgWydXaW5kb3dzIFhQJywgLyhXaW5kb3dzIE5UIDUuMSl8KFdpbmRvd3MgWFApL10sXG4gICAgWydXaW5kb3dzIFNlcnZlciAyMDAzJywgLyhXaW5kb3dzIE5UIDUuMikvXSxcbiAgICBbJ1dpbmRvd3MgVmlzdGEnLCAvKFdpbmRvd3MgTlQgNi4wKS9dLFxuICAgIFsnV2luZG93cyA3JywgLyhXaW5kb3dzIE5UIDYuMSkvXSxcbiAgICBbJ1dpbmRvd3MgOCcsIC8oV2luZG93cyBOVCA2LjIpL10sXG4gICAgWydXaW5kb3dzIDguMScsIC8oV2luZG93cyBOVCA2LjMpL10sXG4gICAgWydXaW5kb3dzIDEwJywgLyhXaW5kb3dzIE5UIDEwLjApL10sXG4gICAgWydXaW5kb3dzIE1FJywgL1dpbmRvd3MgTUUvXSxcbiAgICBbJ09wZW4gQlNEJywgL09wZW5CU0QvXSxcbiAgICBbJ1N1biBPUycsIC9TdW5PUy9dLFxuICAgIFsnQ2hyb21lIE9TJywgL0NyT1MvXSxcbiAgICBbJ0xpbnV4JywgLyhMaW51eCl8KFgxMSkvXSxcbiAgICBbJ01hYyBPUycsIC8oTWFjX1Bvd2VyUEMpfChNYWNpbnRvc2gpL10sXG4gICAgWydRTlgnLCAvUU5YL10sXG4gICAgWydCZU9TJywgL0JlT1MvXSxcbiAgICBbJ09TLzInLCAvT1NcXC8yL10sXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdCh1c2VyQWdlbnQpIHtcbiAgICBpZiAoISF1c2VyQWdlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlVXNlckFnZW50KHVzZXJBZ2VudCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVhY3ROYXRpdmVJbmZvKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gcGFyc2VVc2VyQWdlbnQobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuICAgIHJldHVybiBnZXROb2RlVmVyc2lvbigpO1xufVxuZnVuY3Rpb24gbWF0Y2hVc2VyQWdlbnQodWEpIHtcbiAgICAvLyBvcHRlZCBmb3IgdXNpbmcgcmVkdWNlIGhlcmUgcmF0aGVyIHRoYW4gQXJyYXkjZmlyc3Qgd2l0aCBhIHJlZ2V4LnRlc3QgY2FsbFxuICAgIC8vIHRoaXMgaXMgcHJpbWFyaWx5IGJlY2F1c2UgdXNpbmcgdGhlIHJlZHVjZSB3ZSBvbmx5IHBlcmZvcm0gdGhlIHJlZ2V4XG4gICAgLy8gZXhlY3V0aW9uIG9uY2UgcmF0aGVyIHRoYW4gb25jZSBmb3IgdGhlIHRlc3QgYW5kIGZvciB0aGUgZXhlYyBhZ2FpbiBiZWxvd1xuICAgIC8vIHByb2JhYmx5IHNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGJlbmNobWFya2VkIHRob3VnaFxuICAgIHJldHVybiAodWEgIT09ICcnICYmXG4gICAgICAgIHVzZXJBZ2VudFJ1bGVzLnJlZHVjZShmdW5jdGlvbiAobWF0Y2hlZCwgX2EpIHtcbiAgICAgICAgICAgIHZhciBicm93c2VyID0gX2FbMF0sIHJlZ2V4ID0gX2FbMV07XG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVhTWF0Y2ggPSByZWdleC5leGVjKHVhKTtcbiAgICAgICAgICAgIHJldHVybiAhIXVhTWF0Y2ggJiYgW2Jyb3dzZXIsIHVhTWF0Y2hdO1xuICAgICAgICB9LCBmYWxzZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJOYW1lKHVhKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaFVzZXJBZ2VudCh1YSk7XG4gICAgcmV0dXJuIGRhdGEgPyBkYXRhWzBdIDogbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVzZXJBZ2VudCh1YSkge1xuICAgIHZhciBtYXRjaGVkUnVsZSA9IG1hdGNoVXNlckFnZW50KHVhKTtcbiAgICBpZiAoIW1hdGNoZWRSdWxlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IG1hdGNoZWRSdWxlWzBdLCBtYXRjaCA9IG1hdGNoZWRSdWxlWzFdO1xuICAgIGlmIChuYW1lID09PSAnc2VhcmNoYm90Jykge1xuICAgICAgICByZXR1cm4gbmV3IEJvdEluZm8oKTtcbiAgICB9XG4gICAgdmFyIHZlcnNpb25QYXJ0cyA9IG1hdGNoWzFdICYmIG1hdGNoWzFdLnNwbGl0KC9bLl9dLykuc2xpY2UoMCwgMyk7XG4gICAgaWYgKHZlcnNpb25QYXJ0cykge1xuICAgICAgICBpZiAodmVyc2lvblBhcnRzLmxlbmd0aCA8IFJFUVVJUkVEX1ZFUlNJT05fUEFSVFMpIHtcbiAgICAgICAgICAgIHZlcnNpb25QYXJ0cyA9IF9fc3ByZWFkQXJyYXlzKHZlcnNpb25QYXJ0cywgY3JlYXRlVmVyc2lvblBhcnRzKFJFUVVJUkVEX1ZFUlNJT05fUEFSVFMgLSB2ZXJzaW9uUGFydHMubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZlcnNpb25QYXJ0cyA9IFtdO1xuICAgIH1cbiAgICB2YXIgdmVyc2lvbiA9IHZlcnNpb25QYXJ0cy5qb2luKCcuJyk7XG4gICAgdmFyIG9zID0gZGV0ZWN0T1ModWEpO1xuICAgIHZhciBzZWFyY2hCb3RNYXRjaCA9IFNFQVJDSEJPVF9PU19SRUdFWC5leGVjKHVhKTtcbiAgICBpZiAoc2VhcmNoQm90TWF0Y2ggJiYgc2VhcmNoQm90TWF0Y2hbMV0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWFyY2hCb3REZXZpY2VJbmZvKG5hbWUsIHZlcnNpb24sIG9zLCBzZWFyY2hCb3RNYXRjaFsxXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQnJvd3NlckluZm8obmFtZSwgdmVyc2lvbiwgb3MpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdE9TKHVhKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBjb3VudCA9IG9wZXJhdGluZ1N5c3RlbVJ1bGVzLmxlbmd0aDsgaWkgPCBjb3VudDsgaWkrKykge1xuICAgICAgICB2YXIgX2EgPSBvcGVyYXRpbmdTeXN0ZW1SdWxlc1tpaV0sIG9zID0gX2FbMF0sIHJlZ2V4ID0gX2FbMV07XG4gICAgICAgIHZhciBtYXRjaCA9IHJlZ2V4LmV4ZWModWEpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBvcztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlVmVyc2lvbigpIHtcbiAgICB2YXIgaXNOb2RlID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudmVyc2lvbjtcbiAgICByZXR1cm4gaXNOb2RlID8gbmV3IE5vZGVJbmZvKHByb2Nlc3MudmVyc2lvbi5zbGljZSgxKSkgOiBudWxsO1xufVxuZnVuY3Rpb24gY3JlYXRlVmVyc2lvblBhcnRzKGNvdW50KSB7XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBjb3VudDsgaWkrKykge1xuICAgICAgICBvdXRwdXQucHVzaCgnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuIiwiaW1wb3J0ICogYXMgd2luZG93TWV0YWRhdGEgZnJvbSBcIkB3YWxsZXRjb25uZWN0L3dpbmRvdy1tZXRhZGF0YVwiO1xuaW1wb3J0ICogYXMgd2luZG93R2V0dGVycyBmcm9tIFwiQHdhbGxldGNvbm5lY3Qvd2luZG93LWdldHRlcnNcIjtcbmltcG9ydCB7IGRldGVjdCwgfSBmcm9tIFwiZGV0ZWN0LWJyb3dzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RFbnYodXNlckFnZW50KSB7XG4gICAgcmV0dXJuIGRldGVjdCh1c2VyQWdlbnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdE9TKCkge1xuICAgIGNvbnN0IGVudiA9IGRldGVjdEVudigpO1xuICAgIHJldHVybiBlbnYgJiYgZW52Lm9zID8gZW52Lm9zIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQW5kcm9pZCgpIHtcbiAgICBjb25zdCBvcyA9IGRldGVjdE9TKCk7XG4gICAgcmV0dXJuIG9zID8gb3MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImFuZHJvaWRcIikgOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0lPUygpIHtcbiAgICBjb25zdCBvcyA9IGRldGVjdE9TKCk7XG4gICAgcmV0dXJuIG9zXG4gICAgICAgID8gb3MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImlvc1wiKSB8fFxuICAgICAgICAgICAgKG9zLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJtYWNcIikgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSlcbiAgICAgICAgOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpIHtcbiAgICBjb25zdCBvcyA9IGRldGVjdE9TKCk7XG4gICAgcmV0dXJuIG9zID8gaXNBbmRyb2lkKCkgfHwgaXNJT1MoKSA6IGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpIHtcbiAgICBjb25zdCBlbnYgPSBkZXRlY3RFbnYoKTtcbiAgICBjb25zdCByZXN1bHQgPSBlbnYgJiYgZW52Lm5hbWUgPyBlbnYubmFtZS50b0xvd2VyQ2FzZSgpID09PSBcIm5vZGVcIiA6IGZhbHNlO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9ICFpc05vZGUoKSAmJiAhIWdldE5hdmlnYXRvcigpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgY29uc3QgZ2V0RnJvbVdpbmRvdyA9IHdpbmRvd0dldHRlcnMuZ2V0RnJvbVdpbmRvdztcbmV4cG9ydCBjb25zdCBnZXRGcm9tV2luZG93T3JUaHJvdyA9IHdpbmRvd0dldHRlcnMuZ2V0RnJvbVdpbmRvd09yVGhyb3c7XG5leHBvcnQgY29uc3QgZ2V0RG9jdW1lbnRPclRocm93ID0gd2luZG93R2V0dGVycy5nZXREb2N1bWVudE9yVGhyb3c7XG5leHBvcnQgY29uc3QgZ2V0RG9jdW1lbnQgPSB3aW5kb3dHZXR0ZXJzLmdldERvY3VtZW50O1xuZXhwb3J0IGNvbnN0IGdldE5hdmlnYXRvck9yVGhyb3cgPSB3aW5kb3dHZXR0ZXJzLmdldE5hdmlnYXRvck9yVGhyb3c7XG5leHBvcnQgY29uc3QgZ2V0TmF2aWdhdG9yID0gd2luZG93R2V0dGVycy5nZXROYXZpZ2F0b3I7XG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25PclRocm93ID0gd2luZG93R2V0dGVycy5nZXRMb2NhdGlvbk9yVGhyb3c7XG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb24gPSB3aW5kb3dHZXR0ZXJzLmdldExvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IGdldENyeXB0b09yVGhyb3cgPSB3aW5kb3dHZXR0ZXJzLmdldENyeXB0b09yVGhyb3c7XG5leHBvcnQgY29uc3QgZ2V0Q3J5cHRvID0gd2luZG93R2V0dGVycy5nZXRDcnlwdG87XG5leHBvcnQgY29uc3QgZ2V0TG9jYWxTdG9yYWdlT3JUaHJvdyA9IHdpbmRvd0dldHRlcnMuZ2V0TG9jYWxTdG9yYWdlT3JUaHJvdztcbmV4cG9ydCBjb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSB3aW5kb3dHZXR0ZXJzLmdldExvY2FsU3RvcmFnZTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRNZXRhKCkge1xuICAgIHJldHVybiB3aW5kb3dNZXRhZGF0YS5nZXRXaW5kb3dNZXRhZGF0YSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci5qcy5tYXAiLCJpbXBvcnQgKiBhcyBzYWZlSnNvbiBmcm9tIFwiQHdhbGxldGNvbm5lY3Qvc2FmZS1qc29uXCI7XG5leHBvcnQgY29uc3Qgc2FmZUpzb25QYXJzZSA9IHNhZmVKc29uLnNhZmVKc29uUGFyc2U7XG5leHBvcnQgY29uc3Qgc2FmZUpzb25TdHJpbmdpZnkgPSBzYWZlSnNvbi5zYWZlSnNvblN0cmluZ2lmeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzb24uanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIHNhZmVKc29uUGFyc2UodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNhZmUganNvbiBwYXJzZSB2YWx1ZSBvZiB0eXBlICR7dHlwZW9mIHZhbHVlfWApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVKc29uU3RyaW5naWZ5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgc2FmZUpzb25QYXJzZSwgc2FmZUpzb25TdHJpbmdpZnkgfSBmcm9tIFwiLi9qc29uXCI7XG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9icm93c2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWwoa2V5LCBkYXRhKSB7XG4gICAgY29uc3QgcmF3ID0gc2FmZUpzb25TdHJpbmdpZnkoZGF0YSk7XG4gICAgY29uc3QgbG9jYWwgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAobG9jYWwpIHtcbiAgICAgICAgbG9jYWwuc2V0SXRlbShrZXksIHJhdyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsKGtleSkge1xuICAgIGxldCBkYXRhID0gbnVsbDtcbiAgICBsZXQgcmF3ID0gbnVsbDtcbiAgICBjb25zdCBsb2NhbCA9IGdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChsb2NhbCkge1xuICAgICAgICByYXcgPSBsb2NhbC5nZXRJdGVtKGtleSk7XG4gICAgfVxuICAgIGRhdGEgPSByYXcgPyBzYWZlSnNvblBhcnNlKHJhdykgOiByYXc7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTG9jYWwoa2V5KSB7XG4gICAgY29uc3QgbG9jYWwgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAobG9jYWwpIHtcbiAgICAgICAgbG9jYWwucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvY2FsLmpzLm1hcCIsImltcG9ydCB7IHNldExvY2FsIH0gZnJvbSBcIi4vbG9jYWxcIjtcbmV4cG9ydCBjb25zdCBtb2JpbGVMaW5rQ2hvaWNlS2V5ID0gXCJXQUxMRVRDT05ORUNUX0RFRVBMSU5LX0NIT0lDRVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdElPU01vYmlsZSh1cmksIGVudHJ5KSB7XG4gICAgY29uc3QgZW5jb2RlZFVyaSA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmkpO1xuICAgIHJldHVybiBlbnRyeS51bml2ZXJzYWxMaW5rXG4gICAgICAgID8gYCR7ZW50cnkudW5pdmVyc2FsTGlua30vd2M/dXJpPSR7ZW5jb2RlZFVyaX1gXG4gICAgICAgIDogZW50cnkuZGVlcExpbmtcbiAgICAgICAgICAgID8gYCR7ZW50cnkuZGVlcExpbmt9JHtlbnRyeS5kZWVwTGluay5lbmRzV2l0aChcIjpcIikgPyBcIi8vXCIgOiBcIi9cIn13Yz91cmk9JHtlbmNvZGVkVXJpfWBcbiAgICAgICAgICAgIDogXCJcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTW9iaWxlTGlua0luZm8oZGF0YSkge1xuICAgIGNvbnN0IGZvY3VzVXJpID0gZGF0YS5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgICBzZXRMb2NhbChtb2JpbGVMaW5rQ2hvaWNlS2V5LCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IGhyZWY6IGZvY3VzVXJpIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2JpbGVSZWdpc3RyeUVudHJ5KHJlZ2lzdHJ5LCBuYW1lKSB7XG4gICAgcmV0dXJuIHJlZ2lzdHJ5LmZpbHRlcigoZW50cnkpID0+IGVudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhuYW1lLnRvTG93ZXJDYXNlKCkpKVswXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2JpbGVMaW5rUmVnaXN0cnkocmVnaXN0cnksIHdoaXRlbGlzdCkge1xuICAgIGxldCBsaW5rcyA9IHJlZ2lzdHJ5O1xuICAgIGlmICh3aGl0ZWxpc3QpIHtcbiAgICAgICAgbGlua3MgPSB3aGl0ZWxpc3QubWFwKChuYW1lKSA9PiBnZXRNb2JpbGVSZWdpc3RyeUVudHJ5KHJlZ2lzdHJ5LCBuYW1lKSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICByZXR1cm4gbGlua3M7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2JpbGUuanMubWFwIiwiY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9yZWdpc3RyeS53YWxsZXRjb25uZWN0LmNvbVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdhbGxldFJlZ2lzdHJ5VXJsKCkge1xuICAgIHJldHVybiBBUElfVVJMICsgXCIvYXBpL3YyL3dhbGxldHNcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXBwUmVnaXN0cnlVcmwoKSB7XG4gICAgcmV0dXJuIEFQSV9VUkwgKyBcIi9hcGkvdjIvZGFwcHNcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb2JpbGVSZWdpc3RyeUVudHJ5KGVudHJ5LCBwbGF0Zm9ybSA9IFwibW9iaWxlXCIpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZW50cnkubmFtZSB8fCBcIlwiLFxuICAgICAgICBzaG9ydE5hbWU6IGVudHJ5Lm1ldGFkYXRhLnNob3J0TmFtZSB8fCBcIlwiLFxuICAgICAgICBjb2xvcjogZW50cnkubWV0YWRhdGEuY29sb3JzLnByaW1hcnkgfHwgXCJcIixcbiAgICAgICAgbG9nbzogKF9hID0gZW50cnkuaW1hZ2VfdXJsLnNtKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIlwiLFxuICAgICAgICB1bml2ZXJzYWxMaW5rOiBlbnRyeVtwbGF0Zm9ybV0udW5pdmVyc2FsIHx8IFwiXCIsXG4gICAgICAgIGRlZXBMaW5rOiBlbnRyeVtwbGF0Zm9ybV0ubmF0aXZlIHx8IFwiXCIsXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb2JpbGVSZWdpc3RyeShyZWdpc3RyeSwgcGxhdGZvcm0gPSBcIm1vYmlsZVwiKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVnaXN0cnkpXG4gICAgICAgIC5maWx0ZXIoZW50cnkgPT4gISFlbnRyeVtwbGF0Zm9ybV0udW5pdmVyc2FsIHx8ICEhZW50cnlbcGxhdGZvcm1dLm5hdGl2ZSlcbiAgICAgICAgLm1hcCgoZW50cnkpID0+IGZvcm1hdE1vYmlsZVJlZ2lzdHJ5RW50cnkoZW50cnksIHBsYXRmb3JtKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWdpc3RyeS5qcy5tYXAiLCJmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIGJyb3dzZXJVdGlscyA9IHJlcXVpcmUoJ0B3YWxsZXRjb25uZWN0L2Jyb3dzZXItdXRpbHMnKTtcbnZhciBRUkNvZGUgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgncXJjb2RlJykpO1xudmFyIGNvcHkgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnY29weS10by1jbGlwYm9hcmQnKSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdwcmVhY3QvY29tcGF0Jyk7XG5cbmZ1bmN0aW9uIG9wZW4odXJpKSB7XG4gIFFSQ29kZS50b1N0cmluZyh1cmksIHtcbiAgICB0eXBlOiBcInRlcm1pbmFsXCJcbiAgfSkudGhlbihjb25zb2xlLmxvZyk7XG59XG5cbnZhciBXQUxMRVRDT05ORUNUX1NUWUxFX1NIRUVUID0gXCI6cm9vdCB7XFxuICAtLWFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbik7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uZmFkZUluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxufVxcblxcbi5mYWRlT3V0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xcbn1cXG5cXG4jd2FsbGV0Y29ubmVjdC13cmFwcGVyIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyTG9nbyB7XFxuICBoZWlnaHQ6IDIxcHg7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19oZWFkZXIgcCB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW46IDA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX2ljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19jbG9zZV9fbGluZTEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDgsIDUyLCA1OSk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19jbG9zZV9fbGluZTIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDgsIDUyLCA1OSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LXFyY29kZV9fYmFzZSB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA0MSwgNDYsIDAuOTUpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LXFyY29kZV9fdGV4dCB7XFxuICBjb2xvcjogcmdiYSg2MCwgNjYsIDgyLCAwLjYpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTg3NWVtO1xcbiAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53YWxsZXRjb25uZWN0LXFyY29kZV9fdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1xcmNvZGVfX3RleHQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblxcbi53YWxsZXRjb25uZWN0LXFyY29kZV9faW1hZ2Uge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogbm9uZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1xcmNvZGVfX25vdGlmaWNhdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IC02MHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtcXJjb2RlX19ub3RpZmljYXRpb24ubm90aWZpY2F0aW9uX19zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53YWxsZXRjb25uZWN0LW1vZGFsX19oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgfVxcbiAgLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2Uge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgI2NvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiA0MTRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMzc1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2Uge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCA1MHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmb250LWZhbWlseTogdWktcm91bmRlZCwgXFxcIlNGIFBybyBSb3VuZGVkXFxcIiwgXFxcIlNGIFBybyBUZXh0XFxcIiwgbWVkaXVtLWNvbnRlbnQtc2Fucy1zZXJpZi1mb250LFxcbiAgICAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHVpLXNhbnMtc2VyaWYsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCxcXG4gICAgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tdG9wOiA0MXB4O1xcbiAgcGFkZGluZzogMjRweCAyNHB4IDIycHg7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSB7XFxuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2UgLmhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwJSk7XFxuICB0cmFuc2l0aW9uOiAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBsZWZ0OiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSAud2MtbG9nbyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMjZweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSAud2MtbG9nbyBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTlmZjtcXG4gIGhlaWdodDogMjFweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgbWFzay1pbWFnZTogdXJsKFxcXCJpbWFnZXMvd2MtbG9nby5zdmdcXFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDMycHg7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlIC53Yy1sb2dvIHAge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSBoMiB7XFxuICBjb2xvcjogcmdiYSg2MCwgNjYsIDgyLCAwLjYpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTg3NWVtO1xcbiAgbWFyZ2luOiAwIDAgMTlweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3cge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB0cmFuc2l0aW9uOiAwLjE1cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY2LCA4MiwgMC4wNik7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3c6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY2LCA4MiwgMC4wNik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTc1KTtcXG4gIHRyYW5zaXRpb246IDAuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19oMyB7XFxuICBjb2xvcjogIzI1MjkyZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodF9fYXBwLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgbWFyZ2luOiAwIDExcHggMnB4IDA7XFxuICB3aWR0aDogMzRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCByZ2JhKDM3LCA0MSwgNDYsIDAuMjUpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodF9fY2FyZXQge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICB3aWR0aDogOHB4O1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3c6aG92ZXIgLmNhcmV0LFxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3c6YWN0aXZlIC5jYXJldCB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19tb2JpbGVfX3RvZ2dsZSB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiAjZDRkNWQ5O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fc2luZ2xlX3dhbGxldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fc2luZ2xlX3dhbGxldCBhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoNjQsIDE1MywgMjU1KTtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fbW9iaWxlX190b2dnbGVfc2VsZWN0b3Ige1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cHgpO1xcbiAgdG9wOiA0cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX21vYmlsZV9fdG9nZ2xlLnJpZ2h0X19zZWxlY3RlZCAud2FsbGV0Y29ubmVjdC1tb2RhbF9fbW9iaWxlX190b2dnbGVfc2VsZWN0b3Ige1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDEwMCUgKyAxMnB4KSwgMCwgMCk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19tb2JpbGVfX3RvZ2dsZSBhIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1tb2RhbF9fZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNXZ3O1xcbiAgfVxcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fZm9vdGVyIGEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM4OThkOTc7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlciBhIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25zX193cmFwcGVyIHtcXG4gIG1heC1oZWlnaHQ6IDQ0dmg7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbnNfX3dyYXBwZXJfX2FuZHJvaWQge1xcbiAgbWFyZ2luOiA1MCUgMDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uc19fd3JhcHBlcl9fd3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25zX193cmFwcGVyX193cmFwIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NCwgMTUzLCAyNTUpO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25fX2ljb25fYW5jaG9yIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA4cHg7XFxuICB3aWR0aDogNDJweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25fX2ljb25fYW5jaG9yIHtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICB9XFxufVxcblxcbi53YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbl9faWNvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDQycHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgcmdiYSgzNywgNDEsIDQ2LCAwLjI1KTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX190ZXh0IHtcXG4gIGNvbG9yOiAjNDI0OTUyO1xcbiAgZm9udC1zaXplOiAyLjd2dztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDEuOHZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgfVxcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1zZWFyY2hfX2lucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNkNGQ1ZDk7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cIjtcblxuLy8gQSB0eXBlIG9mIHByb21pc2UtbGlrZSB0aGF0IHJlc29sdmVzIHN5bmNocm9ub3VzbHkgYW5kIHN1cHBvcnRzIG9ubHkgb25lIG9ic2VydmVyXG52YXIgX2l0ZXJhdG9yU3ltYm9sID0gLyojX19QVVJFX18qL3R5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wuaXRlcmF0b3IgfHwgKFN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkgOiBcIkBAaXRlcmF0b3JcIjsgLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIHZhbHVlc1xudmFyIF9hc3luY0l0ZXJhdG9yU3ltYm9sID0gLyojX19QVVJFX18qL3R5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuYXN5bmNJdGVyYXRvclwiKSkgOiBcIkBAYXN5bmNJdGVyYXRvclwiOyAvLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIG9uIGEgdmFsdWUgdXNpbmcgaXQncyBhc3luYyBpdGVyYXRvciBpZiBwcmVzZW50LCBvciBpdHMgc3luY2hyb25vdXMgaXRlcmF0b3IgaWYgbWlzc2luZ1xuXG5mdW5jdGlvbiBfY2F0Y2goYm9keSwgcmVjb3Zlcikge1xuICB0cnkge1xuICAgIHZhciByZXN1bHQgPSBib2R5KCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gcmVjb3ZlcihlKTtcbiAgfVxuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4odm9pZCAwLCByZWNvdmVyKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IC8vIEFzeW5jaHJvbm91c2x5IGF3YWl0IGEgcHJvbWlzZSBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGEgZmluYWxseSBjb250aW51YXRpb25cblxudmFyIFdBTExFVENPTk5FQ1RfTE9HT19TVkdfVVJMID0gXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGhlaWdodD0nMTg1JyB2aWV3Qm94PScwIDAgMzAwIDE4NScgd2lkdGg9JzMwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nbTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6JyBmaWxsPSclMjMzYjk5ZmMnLyUzRSUzQy9zdmclM0VcIjtcblxudmFyIFdBTExFVENPTk5FQ1RfSEVBREVSX1RFWFQgPSBcIldhbGxldENvbm5lY3RcIjtcbnZhciBBTklNQVRJT05fRFVSQVRJT04gPSAzMDA7XG52YXIgREVGQVVMVF9CVVRUT05fQ09MT1IgPSBcInJnYig2NCwgMTUzLCAyNTUpXCI7XG52YXIgV0FMTEVUQ09OTkVDVF9XUkFQUEVSX0lEID0gXCJ3YWxsZXRjb25uZWN0LXdyYXBwZXJcIjtcbnZhciBXQUxMRVRDT05ORUNUX1NUWUxFX0lEID0gXCJ3YWxsZXRjb25uZWN0LXN0eWxlLXNoZWV0XCI7XG52YXIgV0FMTEVUQ09OTkVDVF9NT0RBTF9JRCA9IFwid2FsbGV0Y29ubmVjdC1xcmNvZGUtbW9kYWxcIjtcbnZhciBXQUxMRVRDT05ORUNUX0NMT1NFX0JVVFRPTl9JRCA9IFwid2FsbGV0Y29ubmVjdC1xcmNvZGUtY2xvc2VcIjtcbnZhciBXQUxMRVRDT05ORUNUX0NUQV9URVhUX0lEID0gXCJ3YWxsZXRjb25uZWN0LXFyY29kZS10ZXh0XCI7XG52YXIgV0FMTEVUQ09OTkVDVF9DT05ORUNUX0JVVFRPTl9JRCA9IFwid2FsbGV0Y29ubmVjdC1jb25uZWN0LWJ1dHRvblwiO1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19oZWFkZXJcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICBzcmM6IFdBTExFVENPTk5FQ1RfTE9HT19TVkdfVVJMLFxuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19oZWFkZXJMb2dvXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFdBTExFVENPTk5FQ1RfSEVBREVSX1RFWFQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX3dyYXBwZXJcIixcbiAgICBvbkNsaWNrOiBwcm9wcy5vbkNsb3NlXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGlkOiBXQUxMRVRDT05ORUNUX0NMT1NFX0JVVFRPTl9JRCxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX2ljb25cIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX2xpbmUxXCJcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19jbG9zZV9fbGluZTJcIlxuICB9KSkpKTtcbn1cblxuZnVuY3Rpb24gQ29ubmVjdEJ1dHRvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvblwiLFxuICAgIGhyZWY6IHByb3BzLmhyZWYsXG4gICAgaWQ6IChXQUxMRVRDT05ORUNUX0NPTk5FQ1RfQlVUVE9OX0lEICsgXCItXCIgKyAocHJvcHMubmFtZSkpLFxuICAgIG9uQ2xpY2s6IHByb3BzLm9uQ2xpY2ssXG4gICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICBzdHlsZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5jb2xvclxuICAgIH0sXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gIH0sIHByb3BzLm5hbWUpO1xufVxuXG52YXIgQ0FSRVRfU1ZHX1VSTCA9IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzE4JyB2aWV3Qm94PScwIDAgOCAxOCcgd2lkdGg9JzgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nbS41ODYzMDEuMjEzODk4Yy0uNDM1OTQ3LjMzOTA3LS41MTQ0ODEzLjk2NzM0Mi0uMTc1NDExIDEuNDAzMjkybDQuODc4MzEgNi4yNzIxMmMuMjgwODcuMzYxMTEuMjgwODcuODY2NzcgMCAxLjIyNzg4bC00Ljg3ODMxMSA2LjI3MjExYy0uMzM5MDcuNDM2LS4yNjA1MzYgMS4wNjQyLjE3NTQxMiAxLjQwMzMuNDM1OTQ5LjMzOTEgMS4wNjQyMTkuMjYwNSAxLjQwMzI4OS0uMTc1NGw0Ljg3ODMyLTYuMjcyMWMuODQyNTktMS4wODMzNi44NDI1OS0yLjYwMDM0IDAtMy42ODM2N2wtNC44NzgzMi02LjI3MjEyYy0uMzM5MDctLjQzNTk0NzQtLjk2NzM0LS41MTQ0ODItMS40MDMyODktLjE3NTQxMnonIGZpbGw9JyUyMzNjNDI1MicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXCI7XG5cbmZ1bmN0aW9uIFdhbGxldEJ1dHRvbihwcm9wcykge1xuICB2YXIgY29sb3IgPSBwcm9wcy5jb2xvcjtcbiAgdmFyIGhyZWYgPSBwcm9wcy5ocmVmO1xuICB2YXIgbmFtZSA9IHByb3BzLm5hbWU7XG4gIHZhciBsb2dvID0gcHJvcHMubG9nbztcbiAgdmFyIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3dcIixcbiAgICBocmVmOiBocmVmLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19oM1wiXG4gIH0sIG5hbWUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodFwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3dfX3JpZ2h0X19hcHAtaWNvblwiLFxuICAgIHN0eWxlOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAoXCJ1cmwoJ1wiICsgbG9nbyArIFwiJykgXCIgKyBjb2xvciksXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlXCJcbiAgICB9XG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICBzcmM6IENBUkVUX1NWR19VUkwsXG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd19fcmlnaHRfX2NhcmV0XCJcbiAgfSkpKTtcbn1cblxuZnVuY3Rpb24gV2FsbGV0SWNvbihwcm9wcykge1xuICB2YXIgY29sb3IgPSBwcm9wcy5jb2xvcjtcbiAgdmFyIGhyZWYgPSBwcm9wcy5ocmVmO1xuICB2YXIgbmFtZSA9IHByb3BzLm5hbWU7XG4gIHZhciBsb2dvID0gcHJvcHMubG9nbztcbiAgdmFyIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrO1xuICB2YXIgZm9udFNpemUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/ICgobmFtZS5sZW5ndGggPiA4ID8gMi41IDogMi43KSArIFwidndcIikgOiBcImluaGVyaXRcIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25fX2ljb25fYW5jaG9yXCIsXG4gICAgaHJlZjogaHJlZixcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbl9faWNvblwiLFxuICAgIHN0eWxlOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAoXCJ1cmwoJ1wiICsgbG9nbyArIFwiJykgXCIgKyBjb2xvciksXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlXCJcbiAgICB9XG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZm9udFNpemU6IGZvbnRTaXplXG4gICAgfSxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25fX3RleHRcIlxuICB9LCBuYW1lKSk7XG59XG5cbnZhciBHUklEX01JTl9DT1VOVCA9IDU7XG52YXIgTElOS1NfUEVSX1BBR0UgPSAxMjtcblxuZnVuY3Rpb24gTGlua0Rpc3BsYXkocHJvcHMpIHtcbiAgdmFyIGFuZHJvaWQgPSBicm93c2VyVXRpbHMuaXNBbmRyb2lkKCk7XG4gIHZhciByZWYgPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgdmFyIGlucHV0ID0gcmVmWzBdO1xuICB2YXIgc2V0SW5wdXQgPSByZWZbMV07XG4gIHZhciByZWYkMSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICB2YXIgZmlsdGVyID0gcmVmJDFbMF07XG4gIHZhciBzZXRGaWx0ZXIgPSByZWYkMVsxXTtcbiAgdmFyIHJlZiQyID0gUmVhY3QudXNlU3RhdGUoMSk7XG4gIHZhciBwYWdlID0gcmVmJDJbMF07XG4gIHZhciBzZXRQYWdlID0gcmVmJDJbMV07XG4gIHZhciBsaW5rcyA9IGZpbHRlciA/IHByb3BzLmxpbmtzLmZpbHRlcihmdW5jdGlvbiAobGluaykgeyByZXR1cm4gbGluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpOyB9KSA6IHByb3BzLmxpbmtzO1xuICB2YXIgZXJyb3JNZXNzYWdlID0gcHJvcHMuZXJyb3JNZXNzYWdlO1xuICB2YXIgZ3JpZCA9IGZpbHRlciB8fCBsaW5rcy5sZW5ndGggPiBHUklEX01JTl9DT1VOVDtcbiAgdmFyIHBhZ2VzID0gTWF0aC5jZWlsKGxpbmtzLmxlbmd0aCAvIExJTktTX1BFUl9QQUdFKTtcbiAgdmFyIHJhbmdlID0gWyhwYWdlIC0gMSkgKiBMSU5LU19QRVJfUEFHRSArIDEsIHBhZ2UgKiBMSU5LU19QRVJfUEFHRV07XG4gIHZhciBwYWdlTGlua3MgPSBsaW5rcy5sZW5ndGggPyBsaW5rcy5maWx0ZXIoZnVuY3Rpb24gKF8sIGluZGV4KSB7IHJldHVybiBpbmRleCArIDEgPj0gcmFuZ2VbMF0gJiYgaW5kZXggKyAxIDw9IHJhbmdlWzFdOyB9KSA6IFtdO1xuICB2YXIgaGFzUGFnaW5nID0gISEoIWFuZHJvaWQgJiYgcGFnZXMgPiAxKTtcbiAgdmFyIGZpbHRlclRpbWVvdXQgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZSkge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjbGVhclRpbWVvdXQoZmlsdGVyVGltZW91dCk7XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIGZpbHRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0UGFnZSgxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJbnB1dChcIlwiKTtcbiAgICAgIHNldEZpbHRlcihcIlwiKTtcbiAgICAgIHNldFBhZ2UoMSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge1xuICAgIGlkOiBXQUxMRVRDT05ORUNUX0NUQV9URVhUX0lELFxuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LXFyY29kZV9fdGV4dFwiXG4gIH0sIGFuZHJvaWQgPyBwcm9wcy50ZXh0LmNvbm5lY3RfbW9iaWxlX3dhbGxldCA6IHByb3BzLnRleHQuY2hvb3NlX3ByZWZlcnJlZF93YWxsZXQpLCAhYW5kcm9pZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LXNlYXJjaF9faW5wdXRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2hcIixcbiAgICB2YWx1ZTogaW5wdXQsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUlucHV0XG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IChcIndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uc19fd3JhcHBlclwiICsgKGFuZHJvaWQgPyBcIl9fYW5kcm9pZFwiIDogZ3JpZCAmJiBsaW5rcy5sZW5ndGggPyBcIl9fd3JhcFwiIDogXCJcIikpXG4gIH0sICFhbmRyb2lkID8gcGFnZUxpbmtzLmxlbmd0aCA/IHBhZ2VMaW5rcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgdmFyIGNvbG9yID0gZW50cnkuY29sb3I7XG4gICAgdmFyIG5hbWUgPSBlbnRyeS5uYW1lO1xuICAgIHZhciBzaG9ydE5hbWUgPSBlbnRyeS5zaG9ydE5hbWU7XG4gICAgdmFyIGxvZ28gPSBlbnRyeS5sb2dvO1xuICAgIHZhciBocmVmID0gYnJvd3NlclV0aWxzLmZvcm1hdElPU01vYmlsZShwcm9wcy51cmksIGVudHJ5KTtcbiAgICB2YXIgaGFuZGxlQ2xpY2tJT1MgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICBicm93c2VyVXRpbHMuc2F2ZU1vYmlsZUxpbmtJbmZvKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgaHJlZjogaHJlZlxuICAgICAgfSk7XG4gICAgfSwgW3BhZ2VMaW5rc10pO1xuICAgIHJldHVybiAhZ3JpZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCB7XG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgICBocmVmOiBocmVmLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGxvZ286IGxvZ28sXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGlja0lPU1xuICAgIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7XG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgICBocmVmOiBocmVmLFxuICAgICAgbmFtZTogc2hvcnROYW1lIHx8IG5hbWUsXG4gICAgICBsb2dvOiBsb2dvLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2tJT1NcbiAgICB9KTtcbiAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvck1lc3NhZ2UubGVuZ3RoID8gcHJvcHMuZXJyb3JNZXNzYWdlIDogISFwcm9wcy5saW5rcy5sZW5ndGggJiYgIWxpbmtzLmxlbmd0aCA/IHByb3BzLnRleHQubm9fd2FsbGV0c19mb3VuZCA6IHByb3BzLnRleHQubG9hZGluZykpIDogUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0QnV0dG9uLCB7XG4gICAgbmFtZTogcHJvcHMudGV4dC5jb25uZWN0LFxuICAgIGNvbG9yOiBERUZBVUxUX0JVVFRPTl9DT0xPUixcbiAgICBocmVmOiBwcm9wcy51cmksXG4gICAgb25DbGljazogUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgYnJvd3NlclV0aWxzLnNhdmVNb2JpbGVMaW5rSW5mbyh7XG4gICAgICAgIG5hbWU6IFwiVW5rbm93blwiLFxuICAgICAgICBocmVmOiBwcm9wcy51cmlcbiAgICAgIH0pO1xuICAgIH0sIFtdKVxuICB9KSksIGhhc1BhZ2luZyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fZm9vdGVyXCJcbiAgfSwgQXJyYXkocGFnZXMpLmZpbGwoMCkubWFwKGZ1bmN0aW9uIChfLCBpbmRleCkge1xuICAgIHZhciBwYWdlTnVtYmVyID0gaW5kZXggKyAxO1xuICAgIHZhciBzZWxlY3RlZCA9IHBhZ2UgPT09IHBhZ2VOdW1iZXI7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG1hcmdpbjogXCJhdXRvIDEwcHhcIixcbiAgICAgICAgZm9udFdlaWdodDogc2VsZWN0ZWQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCJcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRQYWdlKHBhZ2VOdW1iZXIpOyB9XG4gICAgfSwgcGFnZU51bWJlcik7XG4gIH0pKSk7XG59XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbihwcm9wcykge1xuICB2YXIgc2hvdyA9ICEhcHJvcHMubWVzc2FnZS50cmltKCk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IChcIndhbGxldGNvbm5lY3QtcXJjb2RlX19ub3RpZmljYXRpb25cIiArIChzaG93ID8gXCIgbm90aWZpY2F0aW9uX19zaG93XCIgOiBcIlwiKSlcbiAgfSwgcHJvcHMubWVzc2FnZSk7XG59XG5cbnZhciBmb3JtYXRRUkNvZGVJbWFnZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRyeSB7XG4gICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShRUkNvZGUudG9TdHJpbmcoZGF0YSwge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgdHlwZTogXCJzdmdcIlxuICAgIH0pKS50aGVuKGZ1bmN0aW9uIChkYXRhU3RyaW5nKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFTdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVN0cmluZy5yZXBsYWNlKFwiPHN2Z1wiLCBcIjxzdmcgY2xhc3M9XFxcIndhbGxldGNvbm5lY3QtcXJjb2RlX19pbWFnZVxcXCJcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFFSQ29kZURpc3BsYXkocHJvcHMpIHtcbiAgdmFyIHJlZiA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICB2YXIgbm90aWZpY2F0aW9uID0gcmVmWzBdO1xuICB2YXIgc2V0Tm90aWZpY2F0aW9uID0gcmVmWzFdO1xuICB2YXIgcmVmJDEgPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgdmFyIHN2ZyA9IHJlZiQxWzBdO1xuICB2YXIgc2V0U3ZnID0gcmVmJDFbMV07XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm9ybWF0UVJDb2RlSW1hZ2UocHJvcHMudXJpKSkudGhlbihmdW5jdGlvbiAoX2Zvcm1hdFFSQ29kZUltYWdlKSB7XG4gICAgICAgIHNldFN2ZyhfZm9ybWF0UVJDb2RlSW1hZ2UpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdmFyIGNvcHlUb0NsaXBib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3VjY2VzcyA9IGNvcHkocHJvcHMudXJpKTtcblxuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBzZXROb3RpZmljYXRpb24ocHJvcHMudGV4dC5jb3BpZWRfdG9fY2xpcGJvYXJkKTtcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldE5vdGlmaWNhdGlvbihcIlwiKTsgfSwgMTIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE5vdGlmaWNhdGlvbihcIkVycm9yXCIpO1xuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Tm90aWZpY2F0aW9uKFwiXCIpOyB9LCAxMjAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge1xuICAgIGlkOiBXQUxMRVRDT05ORUNUX0NUQV9URVhUX0lELFxuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LXFyY29kZV9fdGV4dFwiXG4gIH0sIHByb3BzLnRleHQuc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgX19odG1sOiBzdmdcbiAgICB9XG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fZm9vdGVyXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIG9uQ2xpY2s6IGNvcHlUb0NsaXBib2FyZFxuICB9LCBwcm9wcy50ZXh0LmNvcHlfdG9fY2xpcGJvYXJkKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90aWZpY2F0aW9uLCB7XG4gICAgbWVzc2FnZTogbm90aWZpY2F0aW9uXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gTW9kYWwocHJvcHMpIHtcbiAgdmFyIGFuZHJvaWQgPSBicm93c2VyVXRpbHMuaXNBbmRyb2lkKCk7XG4gIHZhciBtb2JpbGUgPSBicm93c2VyVXRpbHMuaXNNb2JpbGUoKTtcbiAgdmFyIHdoaXRlbGlzdCA9IG1vYmlsZSA/IHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucyAmJiBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMubW9iaWxlTGlua3MgPyBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMubW9iaWxlTGlua3MgOiB1bmRlZmluZWQgOiBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMgJiYgcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zLmRlc2t0b3BMaW5rcyA/IHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucy5kZXNrdG9wTGlua3MgOiB1bmRlZmluZWQ7XG4gIHZhciByZWYgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHZhciBsb2FkaW5nID0gcmVmWzBdO1xuICB2YXIgc2V0TG9hZGluZyA9IHJlZlsxXTtcbiAgdmFyIHJlZiQxID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICB2YXIgZmV0Y2hlZCA9IHJlZiQxWzBdO1xuICB2YXIgc2V0RmV0Y2hlZCA9IHJlZiQxWzFdO1xuICB2YXIgcmVmJDIgPSBSZWFjdC51c2VTdGF0ZSghbW9iaWxlKTtcbiAgdmFyIGRpc3BsYXlRUkNvZGUgPSByZWYkMlswXTtcbiAgdmFyIHNldERpc3BsYXlRUkNvZGUgPSByZWYkMlsxXTtcbiAgdmFyIGRpc3BsYXlQcm9wcyA9IHtcbiAgICBtb2JpbGU6IG1vYmlsZSxcbiAgICB0ZXh0OiBwcm9wcy50ZXh0LFxuICAgIHVyaTogcHJvcHMudXJpLFxuICAgIHFyY29kZU1vZGFsT3B0aW9uczogcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zXG4gIH07XG4gIHZhciByZWYkMyA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICB2YXIgc2luZ2xlTGlua0hyZWYgPSByZWYkM1swXTtcbiAgdmFyIHNldFNpbmdsZUxpbmtIcmVmID0gcmVmJDNbMV07XG4gIHZhciByZWYkNCA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgdmFyIGhhc1NpbmdsZUxpbmsgPSByZWYkNFswXTtcbiAgdmFyIHNldEhhc1NpbmdsZUxpbmsgPSByZWYkNFsxXTtcbiAgdmFyIHJlZiQ1ID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICB2YXIgbGlua3MgPSByZWYkNVswXTtcbiAgdmFyIHNldExpbmtzID0gcmVmJDVbMV07XG4gIHZhciByZWYkNiA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICB2YXIgZXJyb3JNZXNzYWdlID0gcmVmJDZbMF07XG4gIHZhciBzZXRFcnJvck1lc3NhZ2UgPSByZWYkNlsxXTtcblxuICB2YXIgZ2V0TGlua3NJZk5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmV0Y2hlZCB8fCBsb2FkaW5nIHx8IHdoaXRlbGlzdCAmJiAhd2hpdGVsaXN0Lmxlbmd0aCB8fCBsaW5rcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbml0TGlua3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGFuZHJvaWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgICAgIHZhciBfdGVtcCA9IF9jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zICYmIHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucy5yZWdpc3RyeVVybCA/IHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucy5yZWdpc3RyeVVybCA6IGJyb3dzZXJVdGlscy5nZXRXYWxsZXRSZWdpc3RyeVVybCgpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmZXRjaCh1cmwpKS50aGVuKGZ1bmN0aW9uIChyZWdpc3RyeVJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVnaXN0cnlSZXNwb25zZS5qc29uKCkpLnRoZW4oZnVuY3Rpb24gKF9yZWdpc3RyeVJlc3BvbnNlJGpzbykge1xuICAgICAgICAgICAgICAgIHZhciByZWdpc3RyeSA9IF9yZWdpc3RyeVJlc3BvbnNlJGpzby5saXN0aW5ncztcbiAgICAgICAgICAgICAgICB2YXIgcGxhdGZvcm0gPSBtb2JpbGUgPyBcIm1vYmlsZVwiIDogXCJkZXNrdG9wXCI7XG5cbiAgICAgICAgICAgICAgICB2YXIgX2xpbmtzID0gYnJvd3NlclV0aWxzLmdldE1vYmlsZUxpbmtSZWdpc3RyeShicm93c2VyVXRpbHMuZm9ybWF0TW9iaWxlUmVnaXN0cnkocmVnaXN0cnksIHBsYXRmb3JtKSwgd2hpdGVsaXN0KTtcblxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEZldGNoZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCFfbGlua3MubGVuZ3RoID8gcHJvcHMudGV4dC5ub19zdXBwb3J0ZWRfd2FsbGV0cyA6IFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldExpbmtzKF9saW5rcyk7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1NpbmdsZUxpbmsgPSBfbGlua3MubGVuZ3RoID09PSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1NpbmdsZUxpbmspIHtcbiAgICAgICAgICAgICAgICAgIHNldFNpbmdsZUxpbmtIcmVmKGJyb3dzZXJVdGlscy5mb3JtYXRJT1NNb2JpbGUocHJvcHMudXJpLCBfbGlua3NbMF0pKTtcbiAgICAgICAgICAgICAgICAgIHNldERpc3BsYXlRUkNvZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0SGFzU2luZ2xlTGluayhoYXNTaW5nbGVMaW5rKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRGZXRjaGVkKHRydWUpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKHByb3BzLnRleHQuc29tZXRoaW5nX3dlbnRfd3JvbmcpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX3RlbXAgJiYgX3RlbXAudGhlbiA/IF90ZW1wLnRoZW4oZnVuY3Rpb24gKCkge30pIDogdm9pZCAwKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaW5pdExpbmtzKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0TGlua3NJZk5lZWRlZCgpO1xuICB2YXIgcmlnaHRTZWxlY3RlZCA9IG1vYmlsZSA/IGRpc3BsYXlRUkNvZGUgOiAhZGlzcGxheVFSQ29kZTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGlkOiBXQUxMRVRDT05ORUNUX01PREFMX0lELFxuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LXFyY29kZV9fYmFzZSBhbmltYXRlZCBmYWRlSW5cIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZVwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7XG4gICAgb25DbG9zZTogcHJvcHMub25DbG9zZVxuICB9KSwgaGFzU2luZ2xlTGluayAmJiBkaXNwbGF5UVJDb2RlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX3NpbmdsZV93YWxsZXRcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnJvd3NlclV0aWxzLnNhdmVNb2JpbGVMaW5rSW5mbyh7XG4gICAgICBuYW1lOiBsaW5rc1swXS5uYW1lLFxuICAgICAgaHJlZjogc2luZ2xlTGlua0hyZWZcbiAgICB9KTsgfSxcbiAgICBocmVmOiBzaW5nbGVMaW5rSHJlZixcbiAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICB9LCBwcm9wcy50ZXh0LmNvbm5lY3Rfd2l0aCArIFwiIFwiICsgKGhhc1NpbmdsZUxpbmsgPyBsaW5rc1swXS5uYW1lIDogXCJcIikgKyBcIiDigLpcIikpIDogYW5kcm9pZCB8fCBsb2FkaW5nIHx8ICFsb2FkaW5nICYmIGxpbmtzLmxlbmd0aCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogKFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fbW9iaWxlX190b2dnbGVcIiArIChyaWdodFNlbGVjdGVkID8gXCIgcmlnaHRfX3NlbGVjdGVkXCIgOiBcIlwiKSlcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX21vYmlsZV9fdG9nZ2xlX3NlbGVjdG9yXCJcbiAgfSksIG1vYmlsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoc2V0RGlzcGxheVFSQ29kZShmYWxzZSksIGdldExpbmtzSWZOZWVkZWQoKSk7IH1cbiAgfSwgcHJvcHMudGV4dC5tb2JpbGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0RGlzcGxheVFSQ29kZSh0cnVlKTsgfVxuICB9LCBwcm9wcy50ZXh0LnFyY29kZSkpIDogUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldERpc3BsYXlRUkNvZGUodHJ1ZSk7IH1cbiAgfSwgcHJvcHMudGV4dC5xcmNvZGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHNldERpc3BsYXlRUkNvZGUoZmFsc2UpLCBnZXRMaW5rc0lmTmVlZGVkKCkpOyB9XG4gIH0sIHByb3BzLnRleHQuZGVza3RvcCkpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgZGlzcGxheVFSQ29kZSB8fCAhYW5kcm9pZCAmJiAhbG9hZGluZyAmJiAhbGlua3MubGVuZ3RoID8gUmVhY3QuY3JlYXRlRWxlbWVudChRUkNvZGVEaXNwbGF5LCBPYmplY3QuYXNzaWduKHt9LCBkaXNwbGF5UHJvcHMpKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlua0Rpc3BsYXksIE9iamVjdC5hc3NpZ24oe30sIGRpc3BsYXlQcm9wcyxcbiAgICB7bGlua3M6IGxpbmtzLFxuICAgIGVycm9yTWVzc2FnZTogZXJyb3JNZXNzYWdlfSkpKSkpO1xufVxuXG52YXIgZGUgPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIlfDpGhsZSBiZXZvcnp1Z3RlIFdhbGxldFwiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwiVmVyYmluZGUgbWl0IE1vYmlsZSBXYWxsZXRcIixcbiAgc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQ6IFwiU2Nhbm5lIGRlbiBRUi1jb2RlIG1pdCBlaW5lciBXYWxsZXRDb25uZWN0IGtvbXBhdGlibGVuIFdhbGxldFwiLFxuICBjb25uZWN0OiBcIlZlcmJpbmRlblwiLFxuICBxcmNvZGU6IFwiUVItQ29kZVwiLFxuICBtb2JpbGU6IFwiTW9iaWxlXCIsXG4gIGRlc2t0b3A6IFwiRGVza3RvcFwiLFxuICBjb3B5X3RvX2NsaXBib2FyZDogXCJJbiBkaWUgWndpc2NoZW5hYmxhZ2Uga29waWVyZW5cIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCJJbiBkaWUgWndpc2NoZW5hYmxhZ2Uga29waWVydCFcIixcbiAgY29ubmVjdF93aXRoOiBcIlZlcmJpbmRlbiBtaXQgSGlsZmUgdm9uXCIsXG4gIGxvYWRpbmc6IFwiTGFkZW4uLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwiRXR3YXMgaXN0IHNjaGllZiBnZWxhdWZlblwiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJFcyBnaWJ0IG5vY2gga2VpbmUgdW50ZXJzdMO8dHp0ZW4gV2FsbGV0XCIsXG4gIG5vX3dhbGxldHNfZm91bmQ6IFwia2VpbmUgV2FsbGV0IGdlZnVuZGVuXCJcbn07XG5cbnZhciBlbiA9IHtcbiAgY2hvb3NlX3ByZWZlcnJlZF93YWxsZXQ6IFwiQ2hvb3NlIHlvdXIgcHJlZmVycmVkIHdhbGxldFwiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwiQ29ubmVjdCB0byBNb2JpbGUgV2FsbGV0XCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcIlNjYW4gUVIgY29kZSB3aXRoIGEgV2FsbGV0Q29ubmVjdC1jb21wYXRpYmxlIHdhbGxldFwiLFxuICBjb25uZWN0OiBcIkNvbm5lY3RcIixcbiAgcXJjb2RlOiBcIlFSIENvZGVcIixcbiAgbW9iaWxlOiBcIk1vYmlsZVwiLFxuICBkZXNrdG9wOiBcIkRlc2t0b3BcIixcbiAgY29weV90b19jbGlwYm9hcmQ6IFwiQ29weSB0byBjbGlwYm9hcmRcIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCJDb3BpZWQgdG8gY2xpcGJvYXJkIVwiLFxuICBjb25uZWN0X3dpdGg6IFwiQ29ubmVjdCB3aXRoXCIsXG4gIGxvYWRpbmc6IFwiTG9hZGluZy4uLlwiLFxuICBzb21ldGhpbmdfd2VudF93cm9uZzogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJUaGVyZSBhcmUgbm8gc3VwcG9ydGVkIHdhbGxldHMgeWV0XCIsXG4gIG5vX3dhbGxldHNfZm91bmQ6IFwiTm8gd2FsbGV0cyBmb3VuZFwiXG59O1xuXG52YXIgZXMgPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIkVsaWdlIHR1IGJpbGxldGVyYSBwcmVmZXJpZGFcIixcbiAgY29ubmVjdF9tb2JpbGVfd2FsbGV0OiBcIkNvbmVjdGFyIGEgYmlsbGV0ZXJhIG3Ds3ZpbFwiLFxuICBzY2FuX3FyY29kZV93aXRoX3dhbGxldDogXCJFc2NhbmVhIGVsIGPDs2RpZ28gUVIgY29uIHVuYSBiaWxsZXRlcmEgY29tcGF0aWJsZSBjb24gV2FsbGV0Q29ubmVjdFwiLFxuICBjb25uZWN0OiBcIkNvbmVjdGFyXCIsXG4gIHFyY29kZTogXCJDw7NkaWdvIFFSXCIsXG4gIG1vYmlsZTogXCJNw7N2aWxcIixcbiAgZGVza3RvcDogXCJEZXNrdG9wXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIkNvcGlhclwiLFxuICBjb3BpZWRfdG9fY2xpcGJvYXJkOiBcIkNvcGlhZG8hXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCJDb25lY3RhciBtZWRpYW50ZVwiLFxuICBsb2FkaW5nOiBcIkNhcmdhbmRvLi4uXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcIkFsZ28gc2FsacOzIG1hbFwiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJUb2RhdsOtYSBubyBoYXkgYmlsbGV0ZXJhcyBjb21wYXRpYmxlc1wiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIk5vIHNlIGVuY29udHJhcm9uIGJpbGxldGVyYXNcIlxufTtcblxudmFyIGZyID0ge1xuICBjaG9vc2VfcHJlZmVycmVkX3dhbGxldDogXCJDaG9pc2lzc2V6IHZvdHJlIHBvcnRlZmV1aWxsZSBwcsOpZsOpcsOpXCIsXG4gIGNvbm5lY3RfbW9iaWxlX3dhbGxldDogXCJTZSBjb25uZWN0ZXIgYXUgcG9ydGVmZXVpbGxlIG1vYmlsZVwiLFxuICBzY2FuX3FyY29kZV93aXRoX3dhbGxldDogXCJTY2FubmV6IGxlIFFSIGNvZGUgYXZlYyB1biBwb3J0ZWZldWlsbGUgY29tcGF0aWJsZSBXYWxsZXRDb25uZWN0XCIsXG4gIGNvbm5lY3Q6IFwiU2UgY29ubmVjdGVyXCIsXG4gIHFyY29kZTogXCJRUiBDb2RlXCIsXG4gIG1vYmlsZTogXCJNb2JpbGVcIixcbiAgZGVza3RvcDogXCJEZXNrdG9wXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIkNvcGllclwiLFxuICBjb3BpZWRfdG9fY2xpcGJvYXJkOiBcIkNvcGnDqSFcIixcbiAgY29ubmVjdF93aXRoOiBcIkNvbm5lY3Rlei12b3VzIMOgIGwnYWlkZSBkZVwiLFxuICBsb2FkaW5nOiBcIkNoYXJnZW1lbnQuLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwiUXVlbHF1ZSBjaG9zZSBhIG1hbCB0b3VybsOpXCIsXG4gIG5vX3N1cHBvcnRlZF93YWxsZXRzOiBcIklsIG4neSBhIHBhcyBlbmNvcmUgZGUgcG9ydGVmZXVpbGxlcyBwcmlzIGVuIGNoYXJnZVwiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIkF1Y3VuIHBvcnRlZmV1aWxsZSB0cm91dsOpXCJcbn07XG5cbnZhciBrbyA9IHtcbiAgY2hvb3NlX3ByZWZlcnJlZF93YWxsZXQ6IFwi7JuQ7ZWY64qUIOyngOqwkeydhCDshKDtg53tlZjshLjsmpRcIixcbiAgY29ubmVjdF9tb2JpbGVfd2FsbGV0OiBcIuuqqOuwlOydvCDsp4DqsJHqs7wg7Jew6rKwXCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcIldhbGxldENvbm5lY3Qg7KeA7JuQIOyngOqwkeyXkOyEnCBRUuy9lOuTnOulvCDsiqTsupTtlZjshLjsmpRcIixcbiAgY29ubmVjdDogXCLsl7DqsrBcIixcbiAgcXJjb2RlOiBcIlFSIOy9lOuTnFwiLFxuICBtb2JpbGU6IFwi66qo67CU7J28XCIsXG4gIGRlc2t0b3A6IFwi642w7Iqk7YGs7YORXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIu2BtOumveuztOuTnOyXkCDrs7XsgqxcIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCLtgbTrpr3rs7Trk5zsl5Ag67O17IKs65CY7JeI7Iq164uI64ukIVwiLFxuICBjb25uZWN0X3dpdGg6IFwi7JmAIOyXsOqysO2VmOuLpFwiLFxuICBsb2FkaW5nOiBcIuuhnOuTnCDspJEuLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwi66y47KCc6rCAIOuwnOyDne2WiOyKteuLiOuLpC5cIixcbiAgbm9fc3VwcG9ydGVkX3dhbGxldHM6IFwi7JWE7KeBIOyngOybkOuQmOuKlCDsp4DqsJHsnbQg7JeG7Iq164uI64ukXCIsXG4gIG5vX3dhbGxldHNfZm91bmQ6IFwi7KeA6rCR7J2EIOywvuydhCDsiJgg7JeG7Iq164uI64ukXCJcbn07XG5cbnZhciBwdCA9IHtcbiAgY2hvb3NlX3ByZWZlcnJlZF93YWxsZXQ6IFwiRXNjb2xoYSBzdWEgY2FydGVpcmEgcHJlZmVyaWRhXCIsXG4gIGNvbm5lY3RfbW9iaWxlX3dhbGxldDogXCJDb25lY3Rhci1zZSDDoCBjYXJ0ZWlyYSBtw7N2ZWxcIixcbiAgc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQ6IFwiTGVyIG8gY8OzZGlnbyBRUiBjb20gdW1hIGNhcnRlaXJhIGNvbXBhdMOtdmVsIGNvbSBXYWxsZXRDb25uZWN0XCIsXG4gIGNvbm5lY3Q6IFwiQ29uZWN0YXJcIixcbiAgcXJjb2RlOiBcIkPDs2RpZ28gUVJcIixcbiAgbW9iaWxlOiBcIk3Ds3ZlbFwiLFxuICBkZXNrdG9wOiBcIkRlc2t0b3BcIixcbiAgY29weV90b19jbGlwYm9hcmQ6IFwiQ29waWFyXCIsXG4gIGNvcGllZF90b19jbGlwYm9hcmQ6IFwiQ29waWFkbyFcIixcbiAgY29ubmVjdF93aXRoOiBcIkxpZ2FyIHBvciBtZWlvIGRlXCIsXG4gIGxvYWRpbmc6IFwiQ2FycmVnYW1lbnRvLi4uXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcIkFsZ28gY29ycmV1IG1hbFwiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJBaW5kYSBuw6NvIGjDoSBjYXJ0ZWlyYXMgc3Vwb3J0YWRhc1wiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIk5lbmh1bWEgY2FydGVpcmEgZW5jb250cmFkYVwiXG59O1xuXG52YXIgemggPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIumAieaLqeS9oOeahOmSseWMhVwiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwi6L+e5o6l6Iez56e75Yqo56uv6ZKx5YyFXCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcIuS9v+eUqOWFvOWuuSBXYWxsZXRDb25uZWN0IOeahOmSseWMheaJq+aPj+S6jOe7tOeggVwiLFxuICBjb25uZWN0OiBcIui/nuaOpVwiLFxuICBxcmNvZGU6IFwi5LqM57u056CBXCIsXG4gIG1vYmlsZTogXCLnp7vliqhcIixcbiAgZGVza3RvcDogXCLmoYzpnaJcIixcbiAgY29weV90b19jbGlwYm9hcmQ6IFwi5aSN5Yi25Yiw5Ymq6LS05p2/XCIsXG4gIGNvcGllZF90b19jbGlwYm9hcmQ6IFwi5aSN5Yi25Yiw5Ymq6LS05p2/5oiQ5Yqf77yBXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCLpgJrov4fku6XkuIvmlrnlvI/ov57mjqVcIixcbiAgbG9hZGluZzogXCLmraPlnKjliqDovb0uLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwi5Ye65LqG6Zeu6aKYXCIsXG4gIG5vX3N1cHBvcnRlZF93YWxsZXRzOiBcIuebruWJjei/mOayoeacieaUr+aMgeeahOmSseWMhVwiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIuayoeacieaJvuWIsOmSseWMhVwiXG59O1xuXG52YXIgZmEgPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcItqp24zZgSDZvtmI2YQg2YXZiNix2K8g2YbYuNixINiu2YjYryDYsdinINin2YbYqtiu2KfYqCDaqdmG24zYr1wiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwi2KjZhyDaqduM2YEg2b7ZiNmEINmF2YjYqNin24zZhCDZiNi12YQg2LTZiNuM2K9cIixcbiAgc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQ6IFwi2qnYryBRUiDYsdinINio2Kcg24zaqSDaqduM2YEg2b7ZiNmEINiz2KfYstqv2KfYsSDYqNinIFdhbGxldENvbm5lY3Qg2KfYs9qp2YYg2qnZhtuM2K9cIixcbiAgY29ubmVjdDogXCLYp9iq2LXYp9mEXCIsXG4gIHFyY29kZTogXCLaqdivIFFSXCIsXG4gIG1vYmlsZTogXCLYs9uM2KfYsVwiLFxuICBkZXNrdG9wOiBcItiv2LPaqdiq2KfZvlwiLFxuICBjb3B5X3RvX2NsaXBib2FyZDogXCLaqdm+24wg2KjZhyDaqdmE24zZviDYqNmI2LHYr1wiLFxuICBjb3BpZWRfdG9fY2xpcGJvYXJkOiBcItiv2LEg2qnZhNuM2b4g2KjZiNix2K8g2qnZvtuMINi02K8hXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCLYp9ix2KrYqNin2Lcg2KjYp1wiLFxuICBsb2FkaW5nOiBcIi4uLtio2KfYsdqv2LDYp9ix24xcIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwi2YXYtNqp2YTbjCDZvtuM2LQg2KLZhdivXCIsXG4gIG5vX3N1cHBvcnRlZF93YWxsZXRzOiBcItmH2YbZiNiyINmH24zahiDaqduM2YEg2b7ZiNmEINm+2LTYqtuM2KjYp9mG24wg2LTYr9mHINin24wg2YjYrNmI2K8g2YbYr9in2LHYr1wiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcItmH24zahiDaqduM2YEg2b7ZiNmE24wg2b7bjNiv2Kcg2YbYtNivXCJcbn07XG5cbnZhciBsYW5ndWFnZXMgPSB7XG4gIGRlOiBkZSxcbiAgZW46IGVuLFxuICBlczogZXMsXG4gIGZyOiBmcixcbiAga286IGtvLFxuICBwdDogcHQsXG4gIHpoOiB6aCxcbiAgZmE6IGZhXG59O1xuXG5mdW5jdGlvbiBpbmplY3RTdHlsZVNoZWV0KCkge1xuICB2YXIgZG9jID0gYnJvd3NlclV0aWxzLmdldERvY3VtZW50T3JUaHJvdygpO1xuICB2YXIgcHJldiA9IGRvYy5nZXRFbGVtZW50QnlJZChXQUxMRVRDT05ORUNUX1NUWUxFX0lEKTtcblxuICBpZiAocHJldikge1xuICAgIGRvYy5oZWFkLnJlbW92ZUNoaWxkKHByZXYpO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgV0FMTEVUQ09OTkVDVF9TVFlMRV9JRCk7XG4gIHN0eWxlLmlubmVyVGV4dCA9IFdBTExFVENPTk5FQ1RfU1RZTEVfU0hFRVQ7XG4gIGRvYy5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyV3JhcHBlcigpIHtcbiAgdmFyIGRvYyA9IGJyb3dzZXJVdGlscy5nZXREb2N1bWVudE9yVGhyb3coKTtcbiAgdmFyIHdyYXBwZXIgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBXQUxMRVRDT05ORUNUX1dSQVBQRVJfSUQpO1xuICBkb2MuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJDbG9zZUFuaW1hdGlvbigpIHtcbiAgdmFyIGRvYyA9IGJyb3dzZXJVdGlscy5nZXREb2N1bWVudE9yVGhyb3coKTtcbiAgdmFyIG1vZGFsID0gZG9jLmdldEVsZW1lbnRCeUlkKFdBTExFVENPTk5FQ1RfTU9EQUxfSUQpO1xuXG4gIGlmIChtb2RhbCkge1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IG1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiZmFkZUluXCIsIFwiZmFkZU91dFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB3cmFwcGVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFdBTExFVENPTk5FQ1RfV1JBUFBFUl9JRCk7XG5cbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIGRvYy5ib2R5LnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH0sIEFOSU1BVElPTl9EVVJBVElPTik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZENhbGxiYWNrKGNiKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdHJpZ2dlckNsb3NlQW5pbWF0aW9uKCk7XG5cbiAgICBpZiAoY2IpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUZXh0KCkge1xuICB2YXIgbGFuZyA9IGJyb3dzZXJVdGlscy5nZXROYXZpZ2F0b3JPclRocm93KCkubGFuZ3VhZ2Uuc3BsaXQoXCItXCIpWzBdIHx8IFwiZW5cIjtcbiAgcmV0dXJuIGxhbmd1YWdlc1tsYW5nXSB8fCBsYW5ndWFnZXNbXCJlblwiXTtcbn1cblxuZnVuY3Rpb24gb3BlbiQxKHVyaSwgY2IsIHFyY29kZU1vZGFsT3B0aW9ucykge1xuICBpbmplY3RTdHlsZVNoZWV0KCk7XG4gIHZhciB3cmFwcGVyID0gcmVuZGVyV3JhcHBlcigpO1xuICBSZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwge1xuICAgIHRleHQ6IGdldFRleHQoKSxcbiAgICB1cmk6IHVyaSxcbiAgICBvbkNsb3NlOiBnZXRXcmFwcGVkQ2FsbGJhY2soY2IpLFxuICAgIHFyY29kZU1vZGFsT3B0aW9uczogcXJjb2RlTW9kYWxPcHRpb25zXG4gIH0pLCB3cmFwcGVyKTtcbn1cbmZ1bmN0aW9uIGNsb3NlJDEoKSB7XG4gIHRyaWdnZXJDbG9zZUFuaW1hdGlvbigpO1xufVxuXG52YXIgaXNOb2RlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMubm9kZSAhPT0gXCJ1bmRlZmluZWRcIjsgfTtcblxuZnVuY3Rpb24gb3BlbiQyKHVyaSwgY2IsIHFyY29kZU1vZGFsT3B0aW9ucykge1xuICBjb25zb2xlLmxvZyh1cmkpO1xuXG4gIGlmIChpc05vZGUoKSkge1xuICAgIG9wZW4odXJpKTtcbiAgfSBlbHNlIHtcbiAgICBvcGVuJDEodXJpLCBjYiwgcXJjb2RlTW9kYWxPcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZSQyKCkge1xuICBpZiAoaXNOb2RlKCkpIDsgZWxzZSB7XG4gICAgY2xvc2UkMSgpO1xuICB9XG59XG5cbnZhciBpbmRleCA9IHtcbiAgb3Blbjogb3BlbiQyLFxuICBjbG9zZTogY2xvc2UkMlxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldExvY2FsU3RvcmFnZSA9IGV4cG9ydHMuZ2V0TG9jYWxTdG9yYWdlT3JUaHJvdyA9IGV4cG9ydHMuZ2V0Q3J5cHRvID0gZXhwb3J0cy5nZXRDcnlwdG9PclRocm93ID0gZXhwb3J0cy5nZXRMb2NhdGlvbiA9IGV4cG9ydHMuZ2V0TG9jYXRpb25PclRocm93ID0gZXhwb3J0cy5nZXROYXZpZ2F0b3IgPSBleHBvcnRzLmdldE5hdmlnYXRvck9yVGhyb3cgPSBleHBvcnRzLmdldERvY3VtZW50ID0gZXhwb3J0cy5nZXREb2N1bWVudE9yVGhyb3cgPSBleHBvcnRzLmdldEZyb21XaW5kb3dPclRocm93ID0gZXhwb3J0cy5nZXRGcm9tV2luZG93ID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0RnJvbVdpbmRvdyhuYW1lKSB7XG4gICAgbGV0IHJlcyA9IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93W25hbWVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJlcyA9IHdpbmRvd1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMuZ2V0RnJvbVdpbmRvdyA9IGdldEZyb21XaW5kb3c7XG5mdW5jdGlvbiBnZXRGcm9tV2luZG93T3JUaHJvdyhuYW1lKSB7XG4gICAgY29uc3QgcmVzID0gZ2V0RnJvbVdpbmRvdyhuYW1lKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bmFtZX0gaXMgbm90IGRlZmluZWQgaW4gV2luZG93YCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5leHBvcnRzLmdldEZyb21XaW5kb3dPclRocm93ID0gZ2V0RnJvbVdpbmRvd09yVGhyb3c7XG5mdW5jdGlvbiBnZXREb2N1bWVudE9yVGhyb3coKSB7XG4gICAgcmV0dXJuIGdldEZyb21XaW5kb3dPclRocm93KFwiZG9jdW1lbnRcIik7XG59XG5leHBvcnRzLmdldERvY3VtZW50T3JUaHJvdyA9IGdldERvY3VtZW50T3JUaHJvdztcbmZ1bmN0aW9uIGdldERvY3VtZW50KCkge1xuICAgIHJldHVybiBnZXRGcm9tV2luZG93KFwiZG9jdW1lbnRcIik7XG59XG5leHBvcnRzLmdldERvY3VtZW50ID0gZ2V0RG9jdW1lbnQ7XG5mdW5jdGlvbiBnZXROYXZpZ2F0b3JPclRocm93KCkge1xuICAgIHJldHVybiBnZXRGcm9tV2luZG93T3JUaHJvdyhcIm5hdmlnYXRvclwiKTtcbn1cbmV4cG9ydHMuZ2V0TmF2aWdhdG9yT3JUaHJvdyA9IGdldE5hdmlnYXRvck9yVGhyb3c7XG5mdW5jdGlvbiBnZXROYXZpZ2F0b3IoKSB7XG4gICAgcmV0dXJuIGdldEZyb21XaW5kb3coXCJuYXZpZ2F0b3JcIik7XG59XG5leHBvcnRzLmdldE5hdmlnYXRvciA9IGdldE5hdmlnYXRvcjtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JUaHJvdygpIHtcbiAgICByZXR1cm4gZ2V0RnJvbVdpbmRvd09yVGhyb3coXCJsb2NhdGlvblwiKTtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PclRocm93ID0gZ2V0TG9jYXRpb25PclRocm93O1xuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIGdldEZyb21XaW5kb3coXCJsb2NhdGlvblwiKTtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb24gPSBnZXRMb2NhdGlvbjtcbmZ1bmN0aW9uIGdldENyeXB0b09yVGhyb3coKSB7XG4gICAgcmV0dXJuIGdldEZyb21XaW5kb3dPclRocm93KFwiY3J5cHRvXCIpO1xufVxuZXhwb3J0cy5nZXRDcnlwdG9PclRocm93ID0gZ2V0Q3J5cHRvT3JUaHJvdztcbmZ1bmN0aW9uIGdldENyeXB0bygpIHtcbiAgICByZXR1cm4gZ2V0RnJvbVdpbmRvdyhcImNyeXB0b1wiKTtcbn1cbmV4cG9ydHMuZ2V0Q3J5cHRvID0gZ2V0Q3J5cHRvO1xuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlT3JUaHJvdygpIHtcbiAgICByZXR1cm4gZ2V0RnJvbVdpbmRvd09yVGhyb3coXCJsb2NhbFN0b3JhZ2VcIik7XG59XG5leHBvcnRzLmdldExvY2FsU3RvcmFnZU9yVGhyb3cgPSBnZXRMb2NhbFN0b3JhZ2VPclRocm93O1xuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIHJldHVybiBnZXRGcm9tV2luZG93KFwibG9jYWxTdG9yYWdlXCIpO1xufVxuZXhwb3J0cy5nZXRMb2NhbFN0b3JhZ2UgPSBnZXRMb2NhbFN0b3JhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0V2luZG93TWV0YWRhdGEgPSB2b2lkIDA7XG5jb25zdCB3aW5kb3dfZ2V0dGVyc18xID0gcmVxdWlyZShcIkB3YWxsZXRjb25uZWN0L3dpbmRvdy1nZXR0ZXJzXCIpO1xuZnVuY3Rpb24gZ2V0V2luZG93TWV0YWRhdGEoKSB7XG4gICAgbGV0IGRvYztcbiAgICBsZXQgbG9jO1xuICAgIHRyeSB7XG4gICAgICAgIGRvYyA9IHdpbmRvd19nZXR0ZXJzXzEuZ2V0RG9jdW1lbnRPclRocm93KCk7XG4gICAgICAgIGxvYyA9IHdpbmRvd19nZXR0ZXJzXzEuZ2V0TG9jYXRpb25PclRocm93KCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJY29ucygpIHtcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuICAgICAgICBjb25zdCBpY29ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgICAgICBjb25zdCByZWwgPSBsaW5rLmdldEF0dHJpYnV0ZShcInJlbFwiKTtcbiAgICAgICAgICAgIGlmIChyZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImljb25cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiaHR0cHM6XCIpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiaHR0cDpcIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZi5pbmRleE9mKFwiLy9cIikgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWJzb2x1dGVIcmVmID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgbG9jLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYuaW5kZXhPZihcIi9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzb2x1dGVIcmVmICs9IGhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gbG9jLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmluYWxQYXRoID0gcGF0aC5qb2luKFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzb2x1dGVIcmVmICs9IGZpbmFsUGF0aCArIFwiL1wiICsgaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnMucHVzaChhYnNvbHV0ZUhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaHJlZi5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhYnNvbHV0ZVVybCA9IGxvYy5wcm90b2NvbCArIGhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnMucHVzaChhYnNvbHV0ZVVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29ucy5wdXNoKGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpY29ucztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0V2luZG93TWV0YWRhdGFPZkFueSguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG1ldGFUYWdzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibWV0YVwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRhVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGFnID0gbWV0YVRhZ3NbaV07XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW1wiaXRlbXByb3BcIiwgXCJwcm9wZXJ0eVwiLCBcIm5hbWVcIl1cbiAgICAgICAgICAgICAgICAubWFwKCh0YXJnZXQpID0+IHRhZy5nZXRBdHRyaWJ1dGUodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3MuaW5jbHVkZXMoYXR0cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoICYmIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGFnLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICBsZXQgbmFtZSA9IGdldFdpbmRvd01ldGFkYXRhT2ZBbnkoXCJuYW1lXCIsIFwib2c6c2l0ZV9uYW1lXCIsIFwib2c6dGl0bGVcIiwgXCJ0d2l0dGVyOnRpdGxlXCIpO1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBkb2MudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldFdpbmRvd01ldGFkYXRhT2ZBbnkoXCJkZXNjcmlwdGlvblwiLCBcIm9nOmRlc2NyaXB0aW9uXCIsIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiLCBcImtleXdvcmRzXCIpO1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBnZXROYW1lKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBnZXREZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IHVybCA9IGxvYy5vcmlnaW47XG4gICAgY29uc3QgaWNvbnMgPSBnZXRJY29ucygpO1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB1cmwsXG4gICAgICAgIGljb25zLFxuICAgICAgICBuYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIG1ldGE7XG59XG5leHBvcnRzLmdldFdpbmRvd01ldGFkYXRhID0gZ2V0V2luZG93TWV0YWRhdGE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVzZWxlY3RDdXJyZW50ID0gcmVxdWlyZShcInRvZ2dsZS1zZWxlY3Rpb25cIik7XG5cbnZhciBjbGlwYm9hcmRUb0lFMTFGb3JtYXR0aW5nID0ge1xuICBcInRleHQvcGxhaW5cIjogXCJUZXh0XCIsXG4gIFwidGV4dC9odG1sXCI6IFwiVXJsXCIsXG4gIFwiZGVmYXVsdFwiOiBcIlRleHRcIlxufVxuXG52YXIgZGVmYXVsdE1lc3NhZ2UgPSBcIkNvcHkgdG8gY2xpcGJvYXJkOiAje2tleX0sIEVudGVyXCI7XG5cbmZ1bmN0aW9uIGZvcm1hdChtZXNzYWdlKSB7XG4gIHZhciBjb3B5S2V5ID0gKC9tYWMgb3MgeC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyBcIuKMmFwiIDogXCJDdHJsXCIpICsgXCIrQ1wiO1xuICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC8je1xccyprZXlcXHMqfS9nLCBjb3B5S2V5KTtcbn1cblxuZnVuY3Rpb24gY29weSh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBkZWJ1ZyxcbiAgICBtZXNzYWdlLFxuICAgIHJlc2VsZWN0UHJldmlvdXMsXG4gICAgcmFuZ2UsXG4gICAgc2VsZWN0aW9uLFxuICAgIG1hcmssXG4gICAgc3VjY2VzcyA9IGZhbHNlO1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgZGVidWcgPSBvcHRpb25zLmRlYnVnIHx8IGZhbHNlO1xuICB0cnkge1xuICAgIHJlc2VsZWN0UHJldmlvdXMgPSBkZXNlbGVjdEN1cnJlbnQoKTtcblxuICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblxuICAgIG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBtYXJrLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAvLyByZXNldCB1c2VyIHN0eWxlcyBmb3Igc3BhbiBlbGVtZW50XG4gICAgbWFyay5zdHlsZS5hbGwgPSBcInVuc2V0XCI7XG4gICAgLy8gcHJldmVudHMgc2Nyb2xsaW5nIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2VcbiAgICBtYXJrLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIG1hcmsuc3R5bGUudG9wID0gMDtcbiAgICBtYXJrLnN0eWxlLmNsaXAgPSBcInJlY3QoMCwgMCwgMCwgMClcIjtcbiAgICAvLyB1c2VkIHRvIHByZXNlcnZlIHNwYWNlcyBhbmQgbGluZSBicmVha3NcbiAgICBtYXJrLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZVwiO1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IHVzZXItc2VsZWN0IChpdCBtYXkgYmUgYG5vbmVgKVxuICAgIG1hcmsuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUuTW96VXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUubXNVc2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5zdHlsZS51c2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBlLmNsaXBib2FyZERhdGEgPT09IFwidW5kZWZpbmVkXCIpIHsgLy8gSUUgMTFcbiAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ1bmFibGUgdG8gdXNlIGUuY2xpcGJvYXJkRGF0YVwiKTtcbiAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ0cnlpbmcgSUUgc3BlY2lmaWMgc3R1ZmZcIik7XG4gICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgdmFyIGZvcm1hdCA9IGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmdbb3B0aW9ucy5mb3JtYXRdIHx8IGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmdbXCJkZWZhdWx0XCJdXG4gICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShmb3JtYXQsIHRleHQpO1xuICAgICAgICB9IGVsc2UgeyAvLyBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgICBlLmNsaXBib2FyZERhdGEuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEob3B0aW9ucy5mb3JtYXQsIHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5vbkNvcHkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvcHRpb25zLm9uQ29weShlLmNsaXBib2FyZERhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXJrKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhtYXJrKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgaWYgKCFzdWNjZXNzZnVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3B5IGNvbW1hbmQgd2FzIHVuc3VjY2Vzc2Z1bFwiKTtcbiAgICB9XG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoXCJ1bmFibGUgdG8gY29weSB1c2luZyBleGVjQ29tbWFuZDogXCIsIGVycik7XG4gICAgZGVidWcgJiYgY29uc29sZS53YXJuKFwidHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmXCIpO1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKG9wdGlvbnMuZm9ybWF0IHx8IFwidGV4dFwiLCB0ZXh0KTtcbiAgICAgIG9wdGlvbnMub25Db3B5ICYmIG9wdGlvbnMub25Db3B5KHdpbmRvdy5jbGlwYm9hcmREYXRhKTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBjb3B5IHVzaW5nIGNsaXBib2FyZERhdGE6IFwiLCBlcnIpO1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcImZhbGxpbmcgYmFjayB0byBwcm9tcHRcIik7XG4gICAgICBtZXNzYWdlID0gZm9ybWF0KFwibWVzc2FnZVwiIGluIG9wdGlvbnMgPyBvcHRpb25zLm1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZSk7XG4gICAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2UsIHRleHQpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdGlvbi5yZW1vdmVSYW5nZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWFyaykge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYXJrKTtcbiAgICB9XG4gICAgcmVzZWxlY3RQcmV2aW91cygpO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ3JlYXRlZCAyMDA4LTA4LTE5LlxuICpcbiAqIERpamtzdHJhIHBhdGgtZmluZGluZyBmdW5jdGlvbnMuIEFkYXB0ZWQgZnJvbSB0aGUgRGlqa3N0YXIgUHl0aG9uIHByb2plY3QuXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDA4XG4gKiAgIFd5YXR0IEJhbGR3aW4gPHNlbGZAd3lhdHRiYWxkd2luLmNvbT5cbiAqICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqXG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgZGlqa3N0cmEgPSB7XG4gIHNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHM6IGZ1bmN0aW9uKGdyYXBoLCBzLCBkKSB7XG4gICAgLy8gUHJlZGVjZXNzb3IgbWFwIGZvciBlYWNoIG5vZGUgdGhhdCBoYXMgYmVlbiBlbmNvdW50ZXJlZC5cbiAgICAvLyBub2RlIElEID0+IHByZWRlY2Vzc29yIG5vZGUgSURcbiAgICB2YXIgcHJlZGVjZXNzb3JzID0ge307XG5cbiAgICAvLyBDb3N0cyBvZiBzaG9ydGVzdCBwYXRocyBmcm9tIHMgdG8gYWxsIG5vZGVzIGVuY291bnRlcmVkLlxuICAgIC8vIG5vZGUgSUQgPT4gY29zdFxuICAgIHZhciBjb3N0cyA9IHt9O1xuICAgIGNvc3RzW3NdID0gMDtcblxuICAgIC8vIENvc3RzIG9mIHNob3J0ZXN0IHBhdGhzIGZyb20gcyB0byBhbGwgbm9kZXMgZW5jb3VudGVyZWQ7IGRpZmZlcnMgZnJvbVxuICAgIC8vIGBjb3N0c2AgaW4gdGhhdCBpdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byB0aGUgbm9kZSB0aGF0IGN1cnJlbnRseSBoYXNcbiAgICAvLyB0aGUga25vd24gc2hvcnRlc3QgcGF0aCBmcm9tIHMuXG4gICAgLy8gWFhYOiBEbyB3ZSBhY3R1YWxseSBuZWVkIGJvdGggYGNvc3RzYCBhbmQgYG9wZW5gP1xuICAgIHZhciBvcGVuID0gZGlqa3N0cmEuUHJpb3JpdHlRdWV1ZS5tYWtlKCk7XG4gICAgb3Blbi5wdXNoKHMsIDApO1xuXG4gICAgdmFyIGNsb3Nlc3QsXG4gICAgICAgIHUsIHYsXG4gICAgICAgIGNvc3Rfb2Zfc190b191LFxuICAgICAgICBhZGphY2VudF9ub2RlcyxcbiAgICAgICAgY29zdF9vZl9lLFxuICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSxcbiAgICAgICAgY29zdF9vZl9zX3RvX3YsXG4gICAgICAgIGZpcnN0X3Zpc2l0O1xuICAgIHdoaWxlICghb3Blbi5lbXB0eSgpKSB7XG4gICAgICAvLyBJbiB0aGUgbm9kZXMgcmVtYWluaW5nIGluIGdyYXBoIHRoYXQgaGF2ZSBhIGtub3duIGNvc3QgZnJvbSBzLFxuICAgICAgLy8gZmluZCB0aGUgbm9kZSwgdSwgdGhhdCBjdXJyZW50bHkgaGFzIHRoZSBzaG9ydGVzdCBwYXRoIGZyb20gcy5cbiAgICAgIGNsb3Nlc3QgPSBvcGVuLnBvcCgpO1xuICAgICAgdSA9IGNsb3Nlc3QudmFsdWU7XG4gICAgICBjb3N0X29mX3NfdG9fdSA9IGNsb3Nlc3QuY29zdDtcblxuICAgICAgLy8gR2V0IG5vZGVzIGFkamFjZW50IHRvIHUuLi5cbiAgICAgIGFkamFjZW50X25vZGVzID0gZ3JhcGhbdV0gfHwge307XG5cbiAgICAgIC8vIC4uLmFuZCBleHBsb3JlIHRoZSBlZGdlcyB0aGF0IGNvbm5lY3QgdSB0byB0aG9zZSBub2RlcywgdXBkYXRpbmdcbiAgICAgIC8vIHRoZSBjb3N0IG9mIHRoZSBzaG9ydGVzdCBwYXRocyB0byBhbnkgb3IgYWxsIG9mIHRob3NlIG5vZGVzIGFzXG4gICAgICAvLyBuZWNlc3NhcnkuIHYgaXMgdGhlIG5vZGUgYWNyb3NzIHRoZSBjdXJyZW50IGVkZ2UgZnJvbSB1LlxuICAgICAgZm9yICh2IGluIGFkamFjZW50X25vZGVzKSB7XG4gICAgICAgIGlmIChhZGphY2VudF9ub2Rlcy5oYXNPd25Qcm9wZXJ0eSh2KSkge1xuICAgICAgICAgIC8vIEdldCB0aGUgY29zdCBvZiB0aGUgZWRnZSBydW5uaW5nIGZyb20gdSB0byB2LlxuICAgICAgICAgIGNvc3Rfb2ZfZSA9IGFkamFjZW50X25vZGVzW3ZdO1xuXG4gICAgICAgICAgLy8gQ29zdCBvZiBzIHRvIHUgcGx1cyB0aGUgY29zdCBvZiB1IHRvIHYgYWNyb3NzIGUtLXRoaXMgaXMgKmEqXG4gICAgICAgICAgLy8gY29zdCBmcm9tIHMgdG8gdiB0aGF0IG1heSBvciBtYXkgbm90IGJlIGxlc3MgdGhhbiB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIGtub3duIGNvc3QgdG8gdi5cbiAgICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSA9IGNvc3Rfb2Zfc190b191ICsgY29zdF9vZl9lO1xuXG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCB2aXNpdGVkIHYgeWV0IE9SIGlmIHRoZSBjdXJyZW50IGtub3duIGNvc3QgZnJvbSBzIHRvXG4gICAgICAgICAgLy8gdiBpcyBncmVhdGVyIHRoYW4gdGhlIG5ldyBjb3N0IHdlIGp1c3QgZm91bmQgKGNvc3Qgb2YgcyB0byB1IHBsdXNcbiAgICAgICAgICAvLyBjb3N0IG9mIHUgdG8gdiBhY3Jvc3MgZSksIHVwZGF0ZSB2J3MgY29zdCBpbiB0aGUgY29zdCBsaXN0IGFuZFxuICAgICAgICAgIC8vIHVwZGF0ZSB2J3MgcHJlZGVjZXNzb3IgaW4gdGhlIHByZWRlY2Vzc29yIGxpc3QgKGl0J3Mgbm93IHUpLlxuICAgICAgICAgIGNvc3Rfb2Zfc190b192ID0gY29zdHNbdl07XG4gICAgICAgICAgZmlyc3RfdmlzaXQgPSAodHlwZW9mIGNvc3RzW3ZdID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgaWYgKGZpcnN0X3Zpc2l0IHx8IGNvc3Rfb2Zfc190b192ID4gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpIHtcbiAgICAgICAgICAgIGNvc3RzW3ZdID0gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2U7XG4gICAgICAgICAgICBvcGVuLnB1c2godiwgY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpO1xuICAgICAgICAgICAgcHJlZGVjZXNzb3JzW3ZdID0gdTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb3N0c1tkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBtc2cgPSBbJ0NvdWxkIG5vdCBmaW5kIGEgcGF0aCBmcm9tICcsIHMsICcgdG8gJywgZCwgJy4nXS5qb2luKCcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVkZWNlc3NvcnM7XG4gIH0sXG5cbiAgZXh0cmFjdF9zaG9ydGVzdF9wYXRoX2Zyb21fcHJlZGVjZXNzb3JfbGlzdDogZnVuY3Rpb24ocHJlZGVjZXNzb3JzLCBkKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIHUgPSBkO1xuICAgIHZhciBwcmVkZWNlc3NvcjtcbiAgICB3aGlsZSAodSkge1xuICAgICAgbm9kZXMucHVzaCh1KTtcbiAgICAgIHByZWRlY2Vzc29yID0gcHJlZGVjZXNzb3JzW3VdO1xuICAgICAgdSA9IHByZWRlY2Vzc29yc1t1XTtcbiAgICB9XG4gICAgbm9kZXMucmV2ZXJzZSgpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSxcblxuICBmaW5kX3BhdGg6IGZ1bmN0aW9uKGdyYXBoLCBzLCBkKSB7XG4gICAgdmFyIHByZWRlY2Vzc29ycyA9IGRpamtzdHJhLnNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHMoZ3JhcGgsIHMsIGQpO1xuICAgIHJldHVybiBkaWprc3RyYS5leHRyYWN0X3Nob3J0ZXN0X3BhdGhfZnJvbV9wcmVkZWNlc3Nvcl9saXN0KFxuICAgICAgcHJlZGVjZXNzb3JzLCBkKTtcbiAgfSxcblxuICAvKipcbiAgICogQSB2ZXJ5IG5haXZlIHByaW9yaXR5IHF1ZXVlIGltcGxlbWVudGF0aW9uLlxuICAgKi9cbiAgUHJpb3JpdHlRdWV1ZToge1xuICAgIG1ha2U6IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICB2YXIgVCA9IGRpamtzdHJhLlByaW9yaXR5UXVldWUsXG4gICAgICAgICAgdCA9IHt9LFxuICAgICAgICAgIGtleTtcbiAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgZm9yIChrZXkgaW4gVCkge1xuICAgICAgICBpZiAoVC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdFtrZXldID0gVFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0LnF1ZXVlID0gW107XG4gICAgICB0LnNvcnRlciA9IG9wdHMuc29ydGVyIHx8IFQuZGVmYXVsdF9zb3J0ZXI7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuXG4gICAgZGVmYXVsdF9zb3J0ZXI6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5jb3N0IC0gYi5jb3N0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgaXRlbSB0byB0aGUgcXVldWUgYW5kIGVuc3VyZSB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50XG4gICAgICogaXMgYXQgdGhlIGZyb250IG9mIHRoZSBxdWV1ZS5cbiAgICAgKi9cbiAgICBwdXNoOiBmdW5jdGlvbiAodmFsdWUsIGNvc3QpIHtcbiAgICAgIHZhciBpdGVtID0ge3ZhbHVlOiB2YWx1ZSwgY29zdDogY29zdH07XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goaXRlbSk7XG4gICAgICB0aGlzLnF1ZXVlLnNvcnQodGhpcy5zb3J0ZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudCBpbiB0aGUgcXVldWUuXG4gICAgICovXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgIH0sXG5cbiAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBub2RlLmpzIG1vZHVsZSBleHBvcnRzXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBkaWprc3RyYTtcbn1cbiIsIi8qISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsInZhciBuLGwsdSxpLHQscixvLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIHYobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gaChuLGwsdSl7dmFyIGksdD1hcmd1bWVudHMscj17fTtmb3IoaSBpbiBsKVwia2V5XCIhPT1pJiZcInJlZlwiIT09aSYmKHJbaV09bFtpXSk7aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxpPTM7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl1LnB1c2godFtpXSk7aWYobnVsbCE9dSYmKHIuY2hpbGRyZW49dSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpZm9yKGkgaW4gbi5kZWZhdWx0UHJvcHMpdm9pZCAwPT09cltpXSYmKHJbaV09bi5kZWZhdWx0UHJvcHNbaV0pO3JldHVybiBwKG4scixsJiZsLmtleSxsJiZsLnJlZixudWxsKX1mdW5jdGlvbiBwKGwsdSxpLHQscil7dmFyIG89e3R5cGU6bCxwcm9wczp1LGtleTppLHJlZjp0LF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192OnJ9O3JldHVybiBudWxsPT1yJiYoby5fX3Y9byksbi52bm9kZSYmbi52bm9kZShvKSxvfWZ1bmN0aW9uIHkoKXtyZXR1cm57fX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIG0obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gdyhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/dyhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT93KG4pOm51bGx9ZnVuY3Rpb24gayhuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGsobil9fWZ1bmN0aW9uIGcobCl7KCFsLl9fZCYmKGwuX19kPSEwKSYmdS5wdXNoKGwpJiYhaSsrfHxyIT09bi5kZWJvdW5jZVJlbmRlcmluZykmJigocj1uLmRlYm91bmNlUmVuZGVyaW5nKXx8dCkoXyl9ZnVuY3Rpb24gXygpe2Zvcih2YXIgbjtpPXUubGVuZ3RoOyluPXUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdT1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQscixvLGY7bi5fX2QmJihvPShyPShsPW4pLl9fdikuX19lLChmPWwuX19QKSYmKHU9W10sKGk9YSh7fSxyKSkuX192PWksdD1BKGYscixpLGwuX19uLHZvaWQgMCE9PWYub3duZXJTVkdFbGVtZW50LG51bGwsdSxudWxsPT1vP3cocik6byksVCh1LHIpLHQhPW8mJmsocikpKX0pfWZ1bmN0aW9uIGIobixsLHUsaSx0LHIsbyxmLHMpe3ZhciBhLGgscCx5LGQsbSxrLGc9dSYmdS5fX2t8fGMsXz1nLmxlbmd0aDtpZihmPT1lJiYoZj1udWxsIT1yP3JbMF06Xz93KHUsMCk6bnVsbCksYT0wLGwuX19rPXgobC5fX2ssZnVuY3Rpb24odSl7aWYobnVsbCE9dSl7aWYodS5fXz1sLHUuX19iPWwuX19iKzEsbnVsbD09PShwPWdbYV0pfHxwJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSlnW2FdPXZvaWQgMDtlbHNlIGZvcihoPTA7aDxfO2grKyl7aWYoKHA9Z1toXSkmJnUua2V5PT1wLmtleSYmdS50eXBlPT09cC50eXBlKXtnW2hdPXZvaWQgMDticmVha31wPW51bGx9aWYoeT1BKG4sdSxwPXB8fGUsaSx0LHIsbyxmLHMpLChoPXUucmVmKSYmcC5yZWYhPWgmJihrfHwoaz1bXSkscC5yZWYmJmsucHVzaChwLnJlZixudWxsLHUpLGsucHVzaChoLHUuX19jfHx5LHUpKSxudWxsIT15KXt2YXIgYztpZihudWxsPT1tJiYobT15KSx2b2lkIDAhPT11Ll9fZCljPXUuX19kLHUuX19kPXZvaWQgMDtlbHNlIGlmKHI9PXB8fHkhPWZ8fG51bGw9PXkucGFyZW50Tm9kZSl7bjppZihudWxsPT1mfHxmLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQoeSksYz1udWxsO2Vsc2V7Zm9yKGQ9ZixoPTA7KGQ9ZC5uZXh0U2libGluZykmJmg8XztoKz0yKWlmKGQ9PXkpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh5LGYpLGM9Zn1cIm9wdGlvblwiPT1sLnR5cGUmJihuLnZhbHVlPVwiXCIpfWY9dm9pZCAwIT09Yz9jOnkubmV4dFNpYmxpbmcsXCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlJiYobC5fX2Q9Zil9ZWxzZSBmJiZwLl9fZT09ZiYmZi5wYXJlbnROb2RlIT1uJiYoZj13KHApKX1yZXR1cm4gYSsrLHV9KSxsLl9fZT1tLG51bGwhPXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGwudHlwZSlmb3IoYT1yLmxlbmd0aDthLS07KW51bGwhPXJbYV0mJnYoclthXSk7Zm9yKGE9XzthLS07KW51bGwhPWdbYV0mJkQoZ1thXSxnW2FdKTtpZihrKWZvcihhPTA7YTxrLmxlbmd0aDthKyspaihrW2FdLGtbKythXSxrWysrYV0pfWZ1bmN0aW9uIHgobixsLHUpe2lmKG51bGw9PXUmJih1PVtdKSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG4pbCYmdS5wdXNoKGwobnVsbCkpO2Vsc2UgaWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl4KG5baV0sbCx1KTtlbHNlIHUucHVzaChsP2woXCJzdHJpbmdcIj09dHlwZW9mIG58fFwibnVtYmVyXCI9PXR5cGVvZiBuP3AobnVsbCxuLG51bGwsbnVsbCxuKTpudWxsIT1uLl9fZXx8bnVsbCE9bi5fX2M/cChuLnR5cGUsbi5wcm9wcyxuLmtleSxudWxsLG4uX192KTpuKTpuKTtyZXR1cm4gdX1mdW5jdGlvbiBQKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxOKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8TihuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uIEMobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1cIm51bWJlclwiPT10eXBlb2YgdSYmITE9PT1zLnRlc3QobCk/dStcInB4XCI6bnVsbD09dT9cIlwiOnV9ZnVuY3Rpb24gTihuLGwsdSxpLHQpe3ZhciByLG8sZixlLGM7aWYodD9cImNsYXNzTmFtZVwiPT09bCYmKGw9XCJjbGFzc1wiKTpcImNsYXNzXCI9PT1sJiYobD1cImNsYXNzTmFtZVwiKSxcInN0eWxlXCI9PT1sKWlmKHI9bi5zdHlsZSxcInN0cmluZ1wiPT10eXBlb2YgdSlyLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYoci5jc3NUZXh0PVwiXCIsaT1udWxsKSxpKWZvcihlIGluIGkpdSYmZSBpbiB1fHxDKHIsZSxcIlwiKTtpZih1KWZvcihjIGluIHUpaSYmdVtjXT09PWlbY118fEMocixjLHVbY10pfWVsc2VcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXT8obz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGY9bC50b0xvd2VyQ2FzZSgpLGw9KGYgaW4gbj9mOmwpLnNsaWNlKDIpLHU/KGl8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHosbyksKG4ubHx8KG4ubD17fSkpW2xdPXUpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHosbykpOlwibGlzdFwiIT09bCYmXCJ0YWdOYW1lXCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidHlwZVwiIT09bCYmXCJzaXplXCIhPT1sJiYhdCYmbCBpbiBuP25bbF09bnVsbD09dT9cIlwiOnU6XCJmdW5jdGlvblwiIT10eXBlb2YgdSYmXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmKGwhPT0obD1sLnJlcGxhY2UoL154bGluazo/LyxcIlwiKSk/bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsbC50b0xvd2VyQ2FzZSgpKTpuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSx1KTpudWxsPT11fHwhMT09PXUmJiEvXmFyLy50ZXN0KGwpP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfWZ1bmN0aW9uIHoobCl7dGhpcy5sW2wudHlwZV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIEEobCx1LGksdCxyLG8sZixlLGMpe3ZhciBzLHYsaCxwLHksdyxrLGcsXyx4LFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7KHM9bi5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKGc9dS5wcm9wcyxfPShzPVAuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/Xz9fLnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9rPSh2PXUuX19jPWkuX19jKS5fXz12Ll9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz12PW5ldyBQKGcseCk6KHUuX19jPXY9bmV3IG0oZyx4KSx2LmNvbnN0cnVjdG9yPVAsdi5yZW5kZXI9RSksXyYmXy5zdWIodiksdi5wcm9wcz1nLHYuc3RhdGV8fCh2LnN0YXRlPXt9KSx2LmNvbnRleHQ9eCx2Ll9fbj10LGg9di5fX2Q9ITAsdi5fX2g9W10pLG51bGw9PXYuX19zJiYodi5fX3M9di5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJih2Ll9fcz09di5zdGF0ZSYmKHYuX19zPWEoe30sdi5fX3MpKSxhKHYuX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGcsdi5fX3MpKSkscD12LnByb3BzLHk9di5zdGF0ZSxoKW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT12LmNvbXBvbmVudFdpbGxNb3VudCYmdi5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT12LmNvbXBvbmVudERpZE1vdW50JiZ2Ll9faC5wdXNoKHYuY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmchPT1wJiZudWxsIT12LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJnYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhnLHgpLCF2Ll9fZSYmbnVsbCE9di5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09di5zaG91bGRDb21wb25lbnRVcGRhdGUoZyx2Ll9fcyx4KXx8dS5fX3Y9PT1pLl9fdiYmIXYuX18pe2Zvcih2LnByb3BzPWcsdi5zdGF0ZT12Ll9fcyx1Ll9fdiE9PWkuX192JiYodi5fX2Q9ITEpLHYuX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdi5fX2gubGVuZ3RoJiZmLnB1c2godikscz0wO3M8dS5fX2subGVuZ3RoO3MrKyl1Ll9fa1tzXSYmKHUuX19rW3NdLl9fPXUpO2JyZWFrIG59bnVsbCE9di5jb21wb25lbnRXaWxsVXBkYXRlJiZ2LmNvbXBvbmVudFdpbGxVcGRhdGUoZyx2Ll9fcyx4KSxudWxsIT12LmNvbXBvbmVudERpZFVwZGF0ZSYmdi5fX2gucHVzaChmdW5jdGlvbigpe3YuY29tcG9uZW50RGlkVXBkYXRlKHAseSx3KX0pfXYuY29udGV4dD14LHYucHJvcHM9Zyx2LnN0YXRlPXYuX19zLChzPW4uX19yKSYmcyh1KSx2Ll9fZD0hMSx2Ll9fdj11LHYuX19QPWwscz12LnJlbmRlcih2LnByb3BzLHYuc3RhdGUsdi5jb250ZXh0KSx1Ll9faz1udWxsIT1zJiZzLnR5cGU9PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46QXJyYXkuaXNBcnJheShzKT9zOltzXSxudWxsIT12LmdldENoaWxkQ29udGV4dCYmKHQ9YShhKHt9LHQpLHYuZ2V0Q2hpbGRDb250ZXh0KCkpKSxofHxudWxsPT12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwodz12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHAseSkpLGIobCx1LGksdCxyLG8sZixlLGMpLHYuYmFzZT11Ll9fZSx2Ll9faC5sZW5ndGgmJmYucHVzaCh2KSxrJiYodi5fX0U9di5fXz1udWxsKSx2Ll9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT0kKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPW4uZGlmZmVkKSYmcyh1KX1jYXRjaChsKXt1Ll9fdj1udWxsLG4uX19lKGwsdSxpKX1yZXR1cm4gdS5fX2V9ZnVuY3Rpb24gVChsLHUpe24uX19jJiZuLl9fYyh1LGwpLGwuc29tZShmdW5jdGlvbih1KXt0cnl7bD11Ll9faCx1Ll9faD1bXSxsLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobCl7bi5fX2UobCx1Ll9fdil9fSl9ZnVuY3Rpb24gJChuLGwsdSxpLHQscixvLGYpe3ZhciBzLGEsdixoLHAseT11LnByb3BzLGQ9bC5wcm9wcztpZih0PVwic3ZnXCI9PT1sLnR5cGV8fHQsbnVsbCE9cilmb3Iocz0wO3M8ci5sZW5ndGg7cysrKWlmKG51bGwhPShhPXJbc10pJiYoKG51bGw9PT1sLnR5cGU/Mz09PWEubm9kZVR5cGU6YS5sb2NhbE5hbWU9PT1sLnR5cGUpfHxuPT1hKSl7bj1hLHJbc109bnVsbDticmVha31pZihudWxsPT1uKXtpZihudWxsPT09bC50eXBlKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkKTtuPXQ/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixsLnR5cGUpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobC50eXBlLGQuaXMmJntpczpkLmlzfSkscj1udWxsLGY9ITF9aWYobnVsbD09PWwudHlwZSl5IT09ZCYmbi5kYXRhIT1kJiYobi5kYXRhPWQpO2Vsc2V7aWYobnVsbCE9ciYmKHI9Yy5zbGljZS5jYWxsKG4uY2hpbGROb2RlcykpLHY9KHk9dS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsaD1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFmKXtpZih5PT09ZSlmb3IoeT17fSxwPTA7cDxuLmF0dHJpYnV0ZXMubGVuZ3RoO3ArKyl5W24uYXR0cmlidXRlc1twXS5uYW1lXT1uLmF0dHJpYnV0ZXNbcF0udmFsdWU7KGh8fHYpJiYoaCYmdiYmaC5fX2h0bWw9PXYuX19odG1sfHwobi5pbm5lckhUTUw9aCYmaC5fX2h0bWx8fFwiXCIpKX1QKG4sZCx5LHQsZiksaD9sLl9faz1bXToobC5fX2s9bC5wcm9wcy5jaGlsZHJlbixiKG4sbCx1LGksXCJmb3JlaWduT2JqZWN0XCIhPT1sLnR5cGUmJnQscixvLGUsZikpLGZ8fChcInZhbHVlXCJpbiBkJiZ2b2lkIDAhPT0ocz1kLnZhbHVlKSYmcyE9PW4udmFsdWUmJk4obixcInZhbHVlXCIscyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PShzPWQuY2hlY2tlZCkmJnMhPT1uLmNoZWNrZWQmJk4obixcImNoZWNrZWRcIixzLHkuY2hlY2tlZCwhMSkpfXJldHVybiBufWZ1bmN0aW9uIGoobCx1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCxpKX19ZnVuY3Rpb24gRChsLHUsaSl7dmFyIHQscixvO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLCh0PWwucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bC5fX2V8fGoodCxudWxsLHUpKSxpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fChpPW51bGwhPShyPWwuX19lKSksbC5fX2U9bC5fX2Q9dm9pZCAwLG51bGwhPSh0PWwuX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGwpe24uX19lKGwsdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1sLl9faylmb3Iobz0wO288dC5sZW5ndGg7bysrKXRbb10mJkQodFtvXSx1LGkpO251bGwhPXImJnYocil9ZnVuY3Rpb24gRShuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBIKGwsdSxpKXt2YXIgdCxyLGY7bi5fXyYmbi5fXyhsLHUpLHI9KHQ9aT09PW8pP251bGw6aSYmaS5fX2t8fHUuX19rLGw9aChkLG51bGwsW2xdKSxmPVtdLEEodSwodD91Oml8fHUpLl9faz1sLHJ8fGUsZSx2b2lkIDAhPT11Lm93bmVyU1ZHRWxlbWVudCxpJiYhdD9baV06cj9udWxsOmMuc2xpY2UuY2FsbCh1LmNoaWxkTm9kZXMpLGYsaXx8ZSx0KSxUKGYsbCl9ZnVuY3Rpb24gSShuLGwpe0gobixsLG8pfWZ1bmN0aW9uIEwobixsKXt2YXIgdSxpO2ZvcihpIGluIGw9YShhKHt9LG4ucHJvcHMpLGwpLGFyZ3VtZW50cy5sZW5ndGg+MiYmKGwuY2hpbGRyZW49Yy5zbGljZS5jYWxsKGFyZ3VtZW50cywyKSksdT17fSxsKVwia2V5XCIhPT1pJiZcInJlZlwiIT09aSYmKHVbaV09bFtpXSk7cmV0dXJuIHAobi50eXBlLHUsbC5rZXl8fG4ua2V5LGwucmVmfHxuLnJlZixudWxsKX1mdW5jdGlvbiBNKG4pe3ZhciBsPXt9LHU9e19fYzpcIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgaSx0PXRoaXM7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwoaT1bXSx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBsW3UuX19jXT10LGx9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3QucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZpLnNvbWUoZnVuY3Rpb24obCl7bC5jb250ZXh0PW4udmFsdWUsZyhsKX0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXtpLnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7aS5zcGxpY2UoaS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuQ29uc3VtZXIuY29udGV4dFR5cGU9dSx1LlByb3ZpZGVyLl9fPXUsdX1uPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaTtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKHUuY29uc3RydWN0b3ImJm51bGwhPXUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYoaT0hMCx1LnNldFN0YXRlKHUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKGk9ITAsdS5jb21wb25lbnREaWRDYXRjaChuKSksaSlyZXR1cm4gZyh1Ll9fRT11KX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LG0ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT10aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHUsdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksZyh0aGlzKSl9LG0ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxnKHRoaXMpKX0sbS5wcm90b3R5cGUucmVuZGVyPWQsdT1bXSxpPTAsdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxvPWUsZj0wO2V4cG9ydHtIIGFzIHJlbmRlcixJIGFzIGh5ZHJhdGUsaCBhcyBjcmVhdGVFbGVtZW50LGgsZCBhcyBGcmFnbWVudCx5IGFzIGNyZWF0ZVJlZixsIGFzIGlzVmFsaWRFbGVtZW50LG0gYXMgQ29tcG9uZW50LEwgYXMgY2xvbmVFbGVtZW50LE0gYXMgY3JlYXRlQ29udGV4dCx4IGFzIHRvQ2hpbGRBcnJheSxEIGFzIF91bm1vdW50LG4gYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsaT0wLG89W10sYz1uLl9fcixmPW4uZGlmZmVkLGU9bi5fX2MsYT1uLnVubW91bnQ7ZnVuY3Rpb24gdih0LHIpe24uX19oJiZuLl9faCh1LHQsaXx8ciksaT0wO3ZhciBvPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1vLl9fLmxlbmd0aCYmby5fXy5wdXNoKHt9KSxvLl9fW3RdfWZ1bmN0aW9uIG0obil7cmV0dXJuIGk9MSxwKEUsbil9ZnVuY3Rpb24gcChuLHIsaSl7dmFyIG89dih0KyssMik7cmV0dXJuIG8uX19jfHwoby5fX2M9dSxvLl9fPVtpP2kocik6RSh2b2lkIDAsciksZnVuY3Rpb24odCl7dmFyIHU9bihvLl9fWzBdLHQpO28uX19bMF0hPT11JiYoby5fX1swXT11LG8uX19jLnNldFN0YXRlKHt9KSl9XSksby5fX31mdW5jdGlvbiBsKHIsaSl7dmFyIG89dih0KyssMyk7IW4uX19zJiZ4KG8uX19ILGkpJiYoby5fXz1yLG8uX19IPWksdS5fX0guX19oLnB1c2gobykpfWZ1bmN0aW9uIHkocixpKXt2YXIgbz12KHQrKyw0KTshbi5fX3MmJngoby5fX0gsaSkmJihvLl9fPXIsby5fX0g9aSx1Ll9faC5wdXNoKG8pKX1mdW5jdGlvbiBkKG4pe3JldHVybiBpPTUsaChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gcyhuLHQsdSl7aT02LHkoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gaChuLHUpe3ZhciByPXYodCsrLDcpO3JldHVybiB4KHIuX19ILHUpPyhyLl9fSD11LHIuX19oPW4sci5fXz1uKCkpOnIuX199ZnVuY3Rpb24gVChuLHQpe3JldHVybiBpPTgsaChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiB3KG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10saT12KHQrKyw5KTtyZXR1cm4gaS5fX2M9bixyPyhudWxsPT1pLl9fJiYoaS5fXz0hMCxyLnN1Yih1KSksci5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBBKHQsdSl7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUodT91KHQpOnQpfWZ1bmN0aW9uIEYobil7dmFyIHI9dih0KyssMTApLGk9bSgpO3JldHVybiByLl9fPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5fXyYmci5fXyhuKSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBfKCl7by5zb21lKGZ1bmN0aW9uKHQpe2lmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChxKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7cmV0dXJuIHQuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KSwhMH19KSxvPVtdfWZ1bmN0aW9uIGcobil7bi50JiZuLnQoKX1mdW5jdGlvbiBxKG4pe3ZhciB0PW4uX18oKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYobi50PXQpfWZ1bmN0aW9uIHgobix0KXtyZXR1cm4hbnx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gRShuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fW4uX19yPWZ1bmN0aW9uKG4pe2MmJmMobiksdD0wLCh1PW4uX19jKS5fX0gmJih1Ll9fSC5fX2guZm9yRWFjaChnKSx1Ll9fSC5fX2guZm9yRWFjaChxKSx1Ll9fSC5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtmJiZmKHQpO3ZhciB1PXQuX19jO2lmKHUpe3ZhciBpPXUuX19IO2kmJmkuX19oLmxlbmd0aCYmKDEhPT1vLnB1c2godSkmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KShfKSl9fSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fHEobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGUmJmUodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe2EmJmEodCk7dmFyIHU9dC5fX2M7aWYodSl7dmFyIHI9dS5fX0g7aWYocil0cnl7ci5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe3JldHVybiBuLnQmJm4udCgpfSl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fX07ZXhwb3J0e20gYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLGwgYXMgdXNlRWZmZWN0LHkgYXMgdXNlTGF5b3V0RWZmZWN0LGQgYXMgdXNlUmVmLHMgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxoIGFzIHVzZU1lbW8sVCBhcyB1c2VDYWxsYmFjayx3IGFzIHVzZUNvbnRleHQsQSBhcyB1c2VEZWJ1Z1ZhbHVlLEYgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIG8sdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyB1LHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBmLHVzZUNvbnRleHQgYXMgYyx1c2VEZWJ1Z1ZhbHVlIGFzIGF9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgbCxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyB2LHRvQ2hpbGRBcnJheSBhcyBoLGh5ZHJhdGUgYXMgcCxyZW5kZXIgYXMgZCxfdW5tb3VudCBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgZyxGcmFnbWVudCBhcyB4fWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBFKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIHcobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9dmFyIEM9ZnVuY3Rpb24obil7dmFyIHQsZTtmdW5jdGlvbiByKHQpe3ZhciBlO3JldHVybihlPW4uY2FsbCh0aGlzLHQpfHx0aGlzKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxlfXJldHVybiBlPW4sKHQ9cikucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQsdC5fX3Byb3RvX189ZSxyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gdyh0aGlzLnByb3BzLG4pfHx3KHRoaXMuc3RhdGUsdCl9LHJ9KGwpO2Z1bmN0aW9uIF8obix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjp3KHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sRSh7fSx0KSl9cmV0dXJuIHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci50PSEwLHJ9dmFyIEE9di5fX2I7ZnVuY3Rpb24gUyhuKXtmdW5jdGlvbiB0KHQpe3ZhciBlPUUoe30sdCk7cmV0dXJuIGRlbGV0ZSBlLnJlZixuKGUsdC5yZWYpfXJldHVybiB0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQudD0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXYuX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLnQmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksQSYmQShuKX07dmFyIGs9ZnVuY3Rpb24obix0KXtyZXR1cm4gbj9oKG4pLnJlZHVjZShmdW5jdGlvbihuLGUscil7cmV0dXJuIG4uY29uY2F0KHQoZSxyKSl9LFtdKTpudWxsfSxSPXttYXA6ayxmb3JFYWNoOmssY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/aChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXtpZigxIT09KG49aChuKSkubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkNoaWxkcmVuLm9ubHkoKSBleHBlY3RzIG9ubHkgb25lIGNoaWxkLlwiKTtyZXR1cm4gblswXX0sdG9BcnJheTpofSxGPXYuX19lO2Z1bmN0aW9uIE4obil7cmV0dXJuIG4mJigobj1FKHt9LG4pKS5fX2M9bnVsbCxuLl9faz1uLl9fayYmbi5fX2subWFwKE4pKSxufWZ1bmN0aW9uIFUoKXt0aGlzLl9fdT0wLHRoaXMubz1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gTShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC51JiZ0LnUobil9ZnVuY3Rpb24gTChuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gbyhvKXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsbyl9cmV0dXJuIG8uZGlzcGxheU5hbWU9XCJMYXp5XCIsby50PSEwLG99ZnVuY3Rpb24gTygpe3RoaXMuaT1udWxsLHRoaXMubD1udWxsfXYuX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLG89dDtvPW8uX187KWlmKChyPW8uX19jKSYmci5fX2MpcmV0dXJuIHIuX19jKG4sdC5fX2MpO0Yobix0LGUpfSwoVS5wcm90b3R5cGU9bmV3IGwpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXRoaXM7bnVsbD09ZS5vJiYoZS5vPVtdKSxlLm8ucHVzaCh0KTt2YXIgcj1NKGUuX192KSxvPSExLHU9ZnVuY3Rpb24oKXtvfHwobz0hMCxyP3IoaSk6aSgpKX07dC5fX2M9dC5jb21wb25lbnRXaWxsVW5tb3VudCx0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dSgpLHQuX19jJiZ0Ll9fYygpfTt2YXIgaT1mdW5jdGlvbigpe3ZhciBuO2lmKCEtLWUuX191KWZvcihlLl9fdi5fX2tbMF09ZS5zdGF0ZS51LGUuc2V0U3RhdGUoe3U6ZS5fX2I9bnVsbH0pO249ZS5vLnBvcCgpOyluLmZvcmNlVXBkYXRlKCl9O2UuX191Kyt8fGUuc2V0U3RhdGUoe3U6ZS5fX2I9ZS5fX3YuX19rWzBdfSksbi50aGVuKHUsdSl9LFUucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe3JldHVybiB0aGlzLl9fYiYmKHRoaXMuX192Ll9fa1swXT1OKHRoaXMuX19iKSx0aGlzLl9fYj1udWxsKSxbcyhsLG51bGwsdC51P251bGw6bi5jaGlsZHJlbiksdC51JiZuLmZhbGxiYWNrXX07dmFyIFA9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4ubC5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4ubC5zaXplKSlmb3IoZT1uLmk7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLmk9ZT1lWzJdfX07KE8ucHJvdG90eXBlPW5ldyBsKS51PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1NKHQuX192KSxyPXQubC5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbihvKXt2YXIgdT1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaChvKSxQKHQsbixyKSk6bygpfTtlP2UodSk6dSgpfX0sTy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMuaT1udWxsLHRoaXMubD1uZXcgTWFwO3ZhciB0PWgobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLmwuc2V0KHRbZV0sdGhpcy5pPVsxLDAsdGhpcy5pXSk7cmV0dXJuIG4uY2hpbGRyZW59LE8ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1PLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7bi5sLmZvckVhY2goZnVuY3Rpb24odCxlKXtQKG4sZSx0KX0pfTt2YXIgVz1mdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXt9dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIHQuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJvcHMuY29udGV4dH0sdC5yZW5kZXI9ZnVuY3Rpb24obil7cmV0dXJuIG4uY2hpbGRyZW59LG59KCk7ZnVuY3Rpb24gaihuKXt2YXIgdD10aGlzLGU9bi5jb250YWluZXIscj1zKFcse2NvbnRleHQ6dC5jb250ZXh0fSxuLnZub2RlKTtyZXR1cm4gdC5zJiZ0LnMhPT1lJiYodC52LnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LnYpLG0odC5oKSx0LnA9ITEpLG4udm5vZGU/dC5wPyhlLl9faz10Ll9fayxkKHIsZSksdC5fX2s9ZS5fX2spOih0LnY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikscChcIlwiLGUpLGUuYXBwZW5kQ2hpbGQodC52KSx0LnA9ITAsdC5zPWUsZChyLGUsdC52KSx0Ll9faz10LnYuX19rKTp0LnAmJih0LnYucGFyZW50Tm9kZSYmdC5zLnJlbW92ZUNoaWxkKHQudiksbSh0LmgpKSx0Lmg9cix0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dC52LnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LnYpLG0odC5oKX0sbnVsbH1mdW5jdGlvbiB6KG4sdCl7cmV0dXJuIHMoaix7dm5vZGU6bixjb250YWluZXI6dH0pfXZhciBEPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS87bC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTt2YXIgSD1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDM7ZnVuY3Rpb24gVChuLHQsZSl7aWYobnVsbD09dC5fX2spZm9yKDt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKTtyZXR1cm4gZChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gVihuLHQsZSl7cmV0dXJuIHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfXZhciBaPXYuZXZlbnQ7ZnVuY3Rpb24gSShuLHQpe25bXCJVTlNBRkVfXCIrdF0mJiFuW3RdJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobix0LHtjb25maWd1cmFibGU6ITEsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrdF19LHNldDpmdW5jdGlvbihuKXt0aGlzW1wiVU5TQUZFX1wiK3RdPW59fSl9di5ldmVudD1mdW5jdGlvbihuKXtaJiYobj1aKG4pKSxuLnBlcnNpc3Q9ZnVuY3Rpb24oKXt9O3ZhciB0PSExLGU9ITEscj1uLnN0b3BQcm9wYWdhdGlvbjtuLnN0b3BQcm9wYWdhdGlvbj1mdW5jdGlvbigpe3IuY2FsbChuKSx0PSEwfTt2YXIgbz1uLnByZXZlbnREZWZhdWx0O3JldHVybiBuLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7by5jYWxsKG4pLGU9ITB9LG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdH0sbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sbi5uYXRpdmVFdmVudD1ufTt2YXIgJD17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0scT12LnZub2RlO3Yudm5vZGU9ZnVuY3Rpb24obil7bi4kJHR5cGVvZj1IO3ZhciB0PW4udHlwZSxlPW4ucHJvcHM7aWYodCl7aWYoZS5jbGFzcyE9ZS5jbGFzc05hbWUmJigkLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihlLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImNsYXNzTmFtZVwiLCQpKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXt2YXIgcixvLHU7Zm9yKHUgaW4gZS5kZWZhdWx0VmFsdWUmJnZvaWQgMCE9PWUudmFsdWUmJihlLnZhbHVlfHwwPT09ZS52YWx1ZXx8KGUudmFsdWU9ZS5kZWZhdWx0VmFsdWUpLGRlbGV0ZSBlLmRlZmF1bHRWYWx1ZSksQXJyYXkuaXNBcnJheShlLnZhbHVlKSYmZS5tdWx0aXBsZSYmXCJzZWxlY3RcIj09PXQmJihoKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7LTEhPWUudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKSYmKG4ucHJvcHMuc2VsZWN0ZWQ9ITApfSksZGVsZXRlIGUudmFsdWUpLGUpaWYocj1ELnRlc3QodSkpYnJlYWs7aWYocilmb3IodSBpbiBvPW4ucHJvcHM9e30sZSlvW0QudGVzdCh1KT91LnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOnVdPWVbdV19IWZ1bmN0aW9uKHQpe3ZhciBlPW4udHlwZSxyPW4ucHJvcHM7aWYociYmXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBvPXt9O2Zvcih2YXIgdSBpbiByKS9eb24oQW5pfFRyYXxUb3UpLy50ZXN0KHUpJiYoclt1LnRvTG93ZXJDYXNlKCldPXJbdV0sZGVsZXRlIHJbdV0pLG9bdS50b0xvd2VyQ2FzZSgpXT11O2lmKG8ub25kb3VibGVjbGljayYmKHIub25kYmxjbGljaz1yW28ub25kb3VibGVjbGlja10sZGVsZXRlIHJbby5vbmRvdWJsZWNsaWNrXSksby5vbmJlZm9yZWlucHV0JiYoci5vbmJlZm9yZWlucHV0PXJbby5vbmJlZm9yZWlucHV0XSxkZWxldGUgcltvLm9uYmVmb3JlaW5wdXRdKSxvLm9uY2hhbmdlJiYoXCJ0ZXh0YXJlYVwiPT09ZXx8XCJpbnB1dFwiPT09ZS50b0xvd2VyQ2FzZSgpJiYhL15maWx8Y2hlfHJhL2kudGVzdChyLnR5cGUpKSl7dmFyIGk9by5vbmlucHV0fHxcIm9uaW5wdXRcIjtyW2ldfHwocltpXT1yW28ub25jaGFuZ2VdLGRlbGV0ZSByW28ub25jaGFuZ2VdKX19fSgpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJiF0Lm0mJnQucHJvdG90eXBlJiYoSSh0LnByb3RvdHlwZSxcImNvbXBvbmVudFdpbGxNb3VudFwiKSxJKHQucHJvdG90eXBlLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiKSxJKHQucHJvdG90eXBlLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiKSx0Lm09ITApfXEmJnEobil9O3ZhciBCPVwiMTYuOC4wXCI7ZnVuY3Rpb24gRyhuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gSihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1IfWZ1bmN0aW9uIEsobil7cmV0dXJuIEoobik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBRKG4pe3JldHVybiEhbi5fX2smJihkKG51bGwsbiksITApfWZ1bmN0aW9uIFgobil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgWT1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfTtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6byx1c2VJbXBlcmF0aXZlSGFuZGxlOnUsdXNlTWVtbzppLHVzZUNhbGxiYWNrOmYsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6YSx2ZXJzaW9uOlwiMTYuOC4wXCIsQ2hpbGRyZW46UixyZW5kZXI6VCxoeWRyYXRlOlQsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpRLGNyZWF0ZVBvcnRhbDp6LGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0OmcsY3JlYXRlRmFjdG9yeTpHLGNsb25lRWxlbWVudDpLLGNyZWF0ZVJlZjpiLEZyYWdtZW50OngsaXNWYWxpZEVsZW1lbnQ6SixmaW5kRE9NTm9kZTpYLENvbXBvbmVudDpsLFB1cmVDb21wb25lbnQ6QyxtZW1vOl8sZm9yd2FyZFJlZjpTLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOlksU3VzcGVuc2U6VSxTdXNwZW5zZUxpc3Q6TyxsYXp5Okx9O2V4cG9ydHtCIGFzIHZlcnNpb24sUiBhcyBDaGlsZHJlbixUIGFzIHJlbmRlcixWIGFzIGh5ZHJhdGUsUSBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLHogYXMgY3JlYXRlUG9ydGFsLEcgYXMgY3JlYXRlRmFjdG9yeSxLIGFzIGNsb25lRWxlbWVudCxKIGFzIGlzVmFsaWRFbGVtZW50LFggYXMgZmluZERPTU5vZGUsQyBhcyBQdXJlQ29tcG9uZW50LF8gYXMgbWVtbyxTIGFzIGZvcndhcmRSZWYsWSBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxVIGFzIFN1c3BlbnNlLE8gYXMgU3VzcGVuc2VMaXN0LEwgYXMgbGF6eX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiXG52YXIgY2FuUHJvbWlzZSA9IHJlcXVpcmUoJy4vY2FuLXByb21pc2UnKVxuXG52YXIgUVJDb2RlID0gcmVxdWlyZSgnLi9jb3JlL3FyY29kZScpXG52YXIgQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL2NhbnZhcycpXG52YXIgU3ZnUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL3N2Zy10YWcuanMnKVxuXG5mdW5jdGlvbiByZW5kZXJDYW52YXMgKHJlbmRlckZ1bmMsIGNhbnZhcywgdGV4dCwgb3B0cywgY2IpIHtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgdmFyIGFyZ3NOdW0gPSBhcmdzLmxlbmd0aFxuICB2YXIgaXNMYXN0QXJnQ2IgPSB0eXBlb2YgYXJnc1thcmdzTnVtIC0gMV0gPT09ICdmdW5jdGlvbidcblxuICBpZiAoIWlzTGFzdEFyZ0NiICYmICFjYW5Qcm9taXNlKCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIHJlcXVpcmVkIGFzIGxhc3QgYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKGlzTGFzdEFyZ0NiKSB7XG4gICAgaWYgKGFyZ3NOdW0gPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBmZXcgYXJndW1lbnRzIHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoYXJnc051bSA9PT0gMikge1xuICAgICAgY2IgPSB0ZXh0XG4gICAgICB0ZXh0ID0gY2FudmFzXG4gICAgICBjYW52YXMgPSBvcHRzID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmIChhcmdzTnVtID09PSAzKSB7XG4gICAgICBpZiAoY2FudmFzLmdldENvbnRleHQgJiYgdHlwZW9mIGNiID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjYiA9IG9wdHNcbiAgICAgICAgb3B0cyA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IgPSBvcHRzXG4gICAgICAgIG9wdHMgPSB0ZXh0XG4gICAgICAgIHRleHQgPSBjYW52YXNcbiAgICAgICAgY2FudmFzID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChhcmdzTnVtIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb28gZmV3IGFyZ3VtZW50cyBwcm92aWRlZCcpXG4gICAgfVxuXG4gICAgaWYgKGFyZ3NOdW0gPT09IDEpIHtcbiAgICAgIHRleHQgPSBjYW52YXNcbiAgICAgIGNhbnZhcyA9IG9wdHMgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKGFyZ3NOdW0gPT09IDIgJiYgIWNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICBvcHRzID0gdGV4dFxuICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgY2FudmFzID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBkYXRhID0gUVJDb2RlLmNyZWF0ZSh0ZXh0LCBvcHRzKVxuICAgICAgICByZXNvbHZlKHJlbmRlckZ1bmMoZGF0YSwgY2FudmFzLCBvcHRzKSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIGRhdGEgPSBRUkNvZGUuY3JlYXRlKHRleHQsIG9wdHMpXG4gICAgY2IobnVsbCwgcmVuZGVyRnVuYyhkYXRhLCBjYW52YXMsIG9wdHMpKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2IoZSlcbiAgfVxufVxuXG5leHBvcnRzLmNyZWF0ZSA9IFFSQ29kZS5jcmVhdGVcbmV4cG9ydHMudG9DYW52YXMgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBDYW52YXNSZW5kZXJlci5yZW5kZXIpXG5leHBvcnRzLnRvRGF0YVVSTCA9IHJlbmRlckNhbnZhcy5iaW5kKG51bGwsIENhbnZhc1JlbmRlcmVyLnJlbmRlclRvRGF0YVVSTClcblxuLy8gb25seSBzdmcgZm9yIG5vdy5cbmV4cG9ydHMudG9TdHJpbmcgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBmdW5jdGlvbiAoZGF0YSwgXywgb3B0cykge1xuICByZXR1cm4gU3ZnUmVuZGVyZXIucmVuZGVyKGRhdGEsIG9wdHMpXG59KVxuIiwiLy8gY2FuLXByb21pc2UgaGFzIGEgY3Jhc2ggaW4gc29tZSB2ZXJzaW9ucyBvZiByZWFjdCBuYXRpdmUgdGhhdCBkb250IGhhdmVcbi8vIHN0YW5kYXJkIGdsb2JhbCBvYmplY3RzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29sZGFpci9ub2RlLXFyY29kZS9pc3N1ZXMvMTU3XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgUHJvbWlzZS5wcm90b3R5cGUgJiYgUHJvbWlzZS5wcm90b3R5cGUudGhlblxufVxuIiwiLyoqXG4gKiBBbGlnbm1lbnQgcGF0dGVybiBhcmUgZml4ZWQgcmVmZXJlbmNlIHBhdHRlcm4gaW4gZGVmaW5lZCBwb3NpdGlvbnNcbiAqIGluIGEgbWF0cml4IHN5bWJvbG9neSwgd2hpY2ggZW5hYmxlcyB0aGUgZGVjb2RlIHNvZnR3YXJlIHRvIHJlLXN5bmNocm9uaXNlXG4gKiB0aGUgY29vcmRpbmF0ZSBtYXBwaW5nIG9mIHRoZSBpbWFnZSBtb2R1bGVzIGluIHRoZSBldmVudCBvZiBtb2RlcmF0ZSBhbW91bnRzXG4gKiBvZiBkaXN0b3J0aW9uIG9mIHRoZSBpbWFnZS5cbiAqXG4gKiBBbGlnbm1lbnQgcGF0dGVybnMgYXJlIHByZXNlbnQgb25seSBpbiBRUiBDb2RlIHN5bWJvbHMgb2YgdmVyc2lvbiAyIG9yIGxhcmdlclxuICogYW5kIHRoZWlyIG51bWJlciBkZXBlbmRzIG9uIHRoZSBzeW1ib2wgdmVyc2lvbi5cbiAqL1xuXG52YXIgZ2V0U3ltYm9sU2l6ZSA9IHJlcXVpcmUoJy4vdXRpbHMnKS5nZXRTeW1ib2xTaXplXG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSByb3cvY29sdW1uIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXIgbW9kdWxlIG9mIGVhY2ggYWxpZ25tZW50IHBhdHRlcm5cbiAqIGZvciB0aGUgc3BlY2lmaWVkIFFSIENvZGUgdmVyc2lvbi5cbiAqXG4gKiBUaGUgYWxpZ25tZW50IHBhdHRlcm5zIGFyZSBwb3NpdGlvbmVkIHN5bW1ldHJpY2FsbHkgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGRpYWdvbmFsXG4gKiBydW5uaW5nIGZyb20gdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ltYm9sIHRvIHRoZSBib3R0b20gcmlnaHQgY29ybmVyLlxuICpcbiAqIFNpbmNlIHBvc2l0aW9ucyBhcmUgc2ltbWV0cmljYWwgb25seSBoYWxmIG9mIHRoZSBjb29yZGluYXRlcyBhcmUgcmV0dXJuZWQuXG4gKiBFYWNoIGl0ZW0gb2YgdGhlIGFycmF5IHdpbGwgcmVwcmVzZW50IGluIHR1cm4gdGhlIHggYW5kIHkgY29vcmRpbmF0ZS5cbiAqIEBzZWUge0BsaW5rIGdldFBvc2l0aW9uc31cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2YgY29vcmRpbmF0ZVxuICovXG5leHBvcnRzLmdldFJvd0NvbENvb3JkcyA9IGZ1bmN0aW9uIGdldFJvd0NvbENvb3JkcyAodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMSkgcmV0dXJuIFtdXG5cbiAgdmFyIHBvc0NvdW50ID0gTWF0aC5mbG9vcih2ZXJzaW9uIC8gNykgKyAyXG4gIHZhciBzaXplID0gZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uKVxuICB2YXIgaW50ZXJ2YWxzID0gc2l6ZSA9PT0gMTQ1ID8gMjYgOiBNYXRoLmNlaWwoKHNpemUgLSAxMykgLyAoMiAqIHBvc0NvdW50IC0gMikpICogMlxuICB2YXIgcG9zaXRpb25zID0gW3NpemUgLSA3XSAvLyBMYXN0IGNvb3JkIGlzIGFsd2F5cyAoc2l6ZSAtIDcpXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb3NDb3VudCAtIDE7IGkrKykge1xuICAgIHBvc2l0aW9uc1tpXSA9IHBvc2l0aW9uc1tpIC0gMV0gLSBpbnRlcnZhbHNcbiAgfVxuXG4gIHBvc2l0aW9ucy5wdXNoKDYpIC8vIEZpcnN0IGNvb3JkIGlzIGFsd2F5cyA2XG5cbiAgcmV0dXJuIHBvc2l0aW9ucy5yZXZlcnNlKClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHBvc2l0aW9ucyBvZiBlYWNoIGFsaWdubWVudCBwYXR0ZXJuLlxuICogRWFjaCBhcnJheSdzIGVsZW1lbnQgcmVwcmVzZW50IHRoZSBjZW50ZXIgcG9pbnQgb2YgdGhlIHBhdHRlcm4gYXMgKHgsIHkpIGNvb3JkaW5hdGVzXG4gKlxuICogQ29vcmRpbmF0ZXMgYXJlIGNhbGN1bGF0ZWQgZXhwYW5kaW5nIHRoZSByb3cvY29sdW1uIGNvb3JkaW5hdGVzIHJldHVybmVkIGJ5IHtAbGluayBnZXRSb3dDb2xDb29yZHN9XG4gKiBhbmQgZmlsdGVyaW5nIG91dCB0aGUgaXRlbXMgdGhhdCBvdmVybGFwcyB3aXRoIGZpbmRlciBwYXR0ZXJuXG4gKlxuICogQGV4YW1wbGVcbiAqIEZvciBhIFZlcnNpb24gNyBzeW1ib2wge0BsaW5rIGdldFJvd0NvbENvb3Jkc30gcmV0dXJucyB2YWx1ZXMgNiwgMjIgYW5kIDM4LlxuICogVGhlIGFsaWdubWVudCBwYXR0ZXJucywgdGhlcmVmb3JlLCBhcmUgdG8gYmUgY2VudGVyZWQgb24gKHJvdywgY29sdW1uKVxuICogcG9zaXRpb25zICg2LDIyKSwgKDIyLDYpLCAoMjIsMjIpLCAoMjIsMzgpLCAoMzgsMjIpLCAoMzgsMzgpLlxuICogTm90ZSB0aGF0IHRoZSBjb29yZGluYXRlcyAoNiw2KSwgKDYsMzgpLCAoMzgsNikgYXJlIG9jY3VwaWVkIGJ5IGZpbmRlciBwYXR0ZXJuc1xuICogYW5kIGFyZSBub3QgdGhlcmVmb3JlIHVzZWQgZm9yIGFsaWdubWVudCBwYXR0ZXJucy5cbiAqXG4gKiB2YXIgcG9zID0gZ2V0UG9zaXRpb25zKDcpXG4gKiAvLyBbWzYsMjJdLCBbMjIsNl0sIFsyMiwyMl0sIFsyMiwzOF0sIFszOCwyMl0sIFszOCwzOF1dXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIGNvb3JkaW5hdGVzXG4gKi9cbmV4cG9ydHMuZ2V0UG9zaXRpb25zID0gZnVuY3Rpb24gZ2V0UG9zaXRpb25zICh2ZXJzaW9uKSB7XG4gIHZhciBjb29yZHMgPSBbXVxuICB2YXIgcG9zID0gZXhwb3J0cy5nZXRSb3dDb2xDb29yZHModmVyc2lvbilcbiAgdmFyIHBvc0xlbmd0aCA9IHBvcy5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc0xlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb3NMZW5ndGg7IGorKykge1xuICAgICAgLy8gU2tpcCBpZiBwb3NpdGlvbiBpcyBvY2N1cGllZCBieSBmaW5kZXIgcGF0dGVybnNcbiAgICAgIGlmICgoaSA9PT0gMCAmJiBqID09PSAwKSB8fCAgICAgICAgICAgICAvLyB0b3AtbGVmdFxuICAgICAgICAgIChpID09PSAwICYmIGogPT09IHBvc0xlbmd0aCAtIDEpIHx8IC8vIGJvdHRvbS1sZWZ0XG4gICAgICAgICAgKGkgPT09IHBvc0xlbmd0aCAtIDEgJiYgaiA9PT0gMCkpIHsgLy8gdG9wLXJpZ2h0XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvb3Jkcy5wdXNoKFtwb3NbaV0sIHBvc1tqXV0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb3Jkc1xufVxuIiwidmFyIE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuXG4vKipcbiAqIEFycmF5IG9mIGNoYXJhY3RlcnMgYXZhaWxhYmxlIGluIGFscGhhbnVtZXJpYyBtb2RlXG4gKlxuICogQXMgcGVyIFFSIENvZGUgc3BlY2lmaWNhdGlvbiwgdG8gZWFjaCBjaGFyYWN0ZXJcbiAqIGlzIGFzc2lnbmVkIGEgdmFsdWUgZnJvbSAwIHRvIDQ0IHdoaWNoIGluIHRoaXMgY2FzZSBjb2luY2lkZXNcbiAqIHdpdGggdGhlIGFycmF5IGluZGV4XG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgQUxQSEFfTlVNX0NIQVJTID0gW1xuICAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsXG4gICdBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyxcbiAgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onLFxuICAnICcsICckJywgJyUnLCAnKicsICcrJywgJy0nLCAnLicsICcvJywgJzonXG5dXG5cbmZ1bmN0aW9uIEFscGhhbnVtZXJpY0RhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5BTFBIQU5VTUVSSUNcbiAgdGhpcy5kYXRhID0gZGF0YVxufVxuXG5BbHBoYW51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoIChsZW5ndGgpIHtcbiAgcmV0dXJuIDExICogTWF0aC5mbG9vcihsZW5ndGggLyAyKSArIDYgKiAobGVuZ3RoICUgMilcbn1cblxuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKCkge1xuICByZXR1cm4gQWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbkFscGhhbnVtZXJpY0RhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKGJpdEJ1ZmZlcikge1xuICB2YXIgaVxuXG4gIC8vIElucHV0IGRhdGEgY2hhcmFjdGVycyBhcmUgZGl2aWRlZCBpbnRvIGdyb3VwcyBvZiB0d28gY2hhcmFjdGVyc1xuICAvLyBhbmQgZW5jb2RlZCBhcyAxMS1iaXQgYmluYXJ5IGNvZGVzLlxuICBmb3IgKGkgPSAwOyBpICsgMiA8PSB0aGlzLmRhdGEubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAvLyBUaGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgbXVsdGlwbGllZCBieSA0NVxuICAgIHZhciB2YWx1ZSA9IEFMUEhBX05VTV9DSEFSUy5pbmRleE9mKHRoaXMuZGF0YVtpXSkgKiA0NVxuXG4gICAgLy8gVGhlIGNoYXJhY3RlciB2YWx1ZSBvZiB0aGUgc2Vjb25kIGRpZ2l0IGlzIGFkZGVkIHRvIHRoZSBwcm9kdWN0XG4gICAgdmFsdWUgKz0gQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2kgKyAxXSlcblxuICAgIC8vIFRoZSBzdW0gaXMgdGhlbiBzdG9yZWQgYXMgMTEtYml0IGJpbmFyeSBudW1iZXJcbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCAxMSlcbiAgfVxuXG4gIC8vIElmIHRoZSBudW1iZXIgb2YgaW5wdXQgZGF0YSBjaGFyYWN0ZXJzIGlzIG5vdCBhIG11bHRpcGxlIG9mIHR3byxcbiAgLy8gdGhlIGNoYXJhY3RlciB2YWx1ZSBvZiB0aGUgZmluYWwgY2hhcmFjdGVyIGlzIGVuY29kZWQgYXMgYSA2LWJpdCBiaW5hcnkgbnVtYmVyLlxuICBpZiAodGhpcy5kYXRhLmxlbmd0aCAlIDIpIHtcbiAgICBiaXRCdWZmZXIucHV0KEFMUEhBX05VTV9DSEFSUy5pbmRleE9mKHRoaXMuZGF0YVtpXSksIDYpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBbHBoYW51bWVyaWNEYXRhXG4iLCJmdW5jdGlvbiBCaXRCdWZmZXIgKCkge1xuICB0aGlzLmJ1ZmZlciA9IFtdXG4gIHRoaXMubGVuZ3RoID0gMFxufVxuXG5CaXRCdWZmZXIucHJvdG90eXBlID0ge1xuXG4gIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpXG4gICAgcmV0dXJuICgodGhpcy5idWZmZXJbYnVmSW5kZXhdID4+PiAoNyAtIGluZGV4ICUgOCkpICYgMSkgPT09IDFcbiAgfSxcblxuICBwdXQ6IGZ1bmN0aW9uIChudW0sIGxlbmd0aCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucHV0Qml0KCgobnVtID4+PiAobGVuZ3RoIC0gaSAtIDEpKSAmIDEpID09PSAxKVxuICAgIH1cbiAgfSxcblxuICBnZXRMZW5ndGhJbkJpdHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGhcbiAgfSxcblxuICBwdXRCaXQ6IGZ1bmN0aW9uIChiaXQpIHtcbiAgICB2YXIgYnVmSW5kZXggPSBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gOClcbiAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XG4gICAgICB0aGlzLmJ1ZmZlci5wdXNoKDApXG4gICAgfVxuXG4gICAgaWYgKGJpdCkge1xuICAgICAgdGhpcy5idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAodGhpcy5sZW5ndGggJSA4KSlcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCsrXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRCdWZmZXJcbiIsInZhciBCdWZmZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvYnVmZmVyJylcblxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gaGFuZGxlIFFSIENvZGUgc3ltYm9sIG1vZHVsZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTeW1ib2wgc2l6ZVxuICovXG5mdW5jdGlvbiBCaXRNYXRyaXggKHNpemUpIHtcbiAgaWYgKCFzaXplIHx8IHNpemUgPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCaXRNYXRyaXggc2l6ZSBtdXN0IGJlIGRlZmluZWQgYW5kIGdyZWF0ZXIgdGhhbiAwJylcbiAgfVxuXG4gIHRoaXMuc2l6ZSA9IHNpemVcbiAgdGhpcy5kYXRhID0gQnVmZmVyVXRpbC5hbGxvYyhzaXplICogc2l6ZSlcbiAgdGhpcy5yZXNlcnZlZEJpdCA9IEJ1ZmZlclV0aWwuYWxsb2Moc2l6ZSAqIHNpemUpXG59XG5cbi8qKlxuICogU2V0IGJpdCB2YWx1ZSBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqIElmIHJlc2VydmVkIGZsYWcgaXMgc2V0LCB0aGlzIGJpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIG1hc2tpbmcgcHJvY2Vzc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gIGNvbFxuICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtCb29sZWFufSByZXNlcnZlZFxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChyb3csIGNvbCwgdmFsdWUsIHJlc2VydmVkKSB7XG4gIHZhciBpbmRleCA9IHJvdyAqIHRoaXMuc2l6ZSArIGNvbFxuICB0aGlzLmRhdGFbaW5kZXhdID0gdmFsdWVcbiAgaWYgKHJlc2VydmVkKSB0aGlzLnJlc2VydmVkQml0W2luZGV4XSA9IHRydWVcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGJpdCB2YWx1ZSBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICByb3dcbiAqIEBwYXJhbSAge051bWJlcn0gIGNvbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YVtyb3cgKiB0aGlzLnNpemUgKyBjb2xdXG59XG5cbi8qKlxuICogQXBwbGllcyB4b3Igb3BlcmF0b3IgYXQgc3BlY2lmaWVkIGxvY2F0aW9uXG4gKiAodXNlZCBkdXJpbmcgbWFza2luZyBwcm9jZXNzKVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gIGNvbFxuICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLnhvciA9IGZ1bmN0aW9uIChyb3csIGNvbCwgdmFsdWUpIHtcbiAgdGhpcy5kYXRhW3JvdyAqIHRoaXMuc2l6ZSArIGNvbF0gXj0gdmFsdWVcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBiaXQgYXQgc3BlY2lmaWVkIGxvY2F0aW9uIGlzIHJlc2VydmVkXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gICBjb2xcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbkJpdE1hdHJpeC5wcm90b3R5cGUuaXNSZXNlcnZlZCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICByZXR1cm4gdGhpcy5yZXNlcnZlZEJpdFtyb3cgKiB0aGlzLnNpemUgKyBjb2xdXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQml0TWF0cml4XG4iLCJ2YXIgQnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxzL2J1ZmZlcicpXG52YXIgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpXG5cbmZ1bmN0aW9uIEJ5dGVEYXRhIChkYXRhKSB7XG4gIHRoaXMubW9kZSA9IE1vZGUuQllURVxuICB0aGlzLmRhdGEgPSBCdWZmZXJVdGlsLmZyb20oZGF0YSlcbn1cblxuQnl0ZURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gbGVuZ3RoICogOFxufVxuXG5CeXRlRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aClcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGJpdEJ1ZmZlcikge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBiaXRCdWZmZXIucHV0KHRoaXMuZGF0YVtpXSwgOClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ5dGVEYXRhXG4iLCJ2YXIgRUNMZXZlbCA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1sZXZlbCcpXHJcblxyXG52YXIgRUNfQkxPQ0tTX1RBQkxFID0gW1xyXG4vLyBMICBNICBRICBIXHJcbiAgMSwgMSwgMSwgMSxcclxuICAxLCAxLCAxLCAxLFxyXG4gIDEsIDEsIDIsIDIsXHJcbiAgMSwgMiwgMiwgNCxcclxuICAxLCAyLCA0LCA0LFxyXG4gIDIsIDQsIDQsIDQsXHJcbiAgMiwgNCwgNiwgNSxcclxuICAyLCA0LCA2LCA2LFxyXG4gIDIsIDUsIDgsIDgsXHJcbiAgNCwgNSwgOCwgOCxcclxuICA0LCA1LCA4LCAxMSxcclxuICA0LCA4LCAxMCwgMTEsXHJcbiAgNCwgOSwgMTIsIDE2LFxyXG4gIDQsIDksIDE2LCAxNixcclxuICA2LCAxMCwgMTIsIDE4LFxyXG4gIDYsIDEwLCAxNywgMTYsXHJcbiAgNiwgMTEsIDE2LCAxOSxcclxuICA2LCAxMywgMTgsIDIxLFxyXG4gIDcsIDE0LCAyMSwgMjUsXHJcbiAgOCwgMTYsIDIwLCAyNSxcclxuICA4LCAxNywgMjMsIDI1LFxyXG4gIDksIDE3LCAyMywgMzQsXHJcbiAgOSwgMTgsIDI1LCAzMCxcclxuICAxMCwgMjAsIDI3LCAzMixcclxuICAxMiwgMjEsIDI5LCAzNSxcclxuICAxMiwgMjMsIDM0LCAzNyxcclxuICAxMiwgMjUsIDM0LCA0MCxcclxuICAxMywgMjYsIDM1LCA0MixcclxuICAxNCwgMjgsIDM4LCA0NSxcclxuICAxNSwgMjksIDQwLCA0OCxcclxuICAxNiwgMzEsIDQzLCA1MSxcclxuICAxNywgMzMsIDQ1LCA1NCxcclxuICAxOCwgMzUsIDQ4LCA1NyxcclxuICAxOSwgMzcsIDUxLCA2MCxcclxuICAxOSwgMzgsIDUzLCA2MyxcclxuICAyMCwgNDAsIDU2LCA2NixcclxuICAyMSwgNDMsIDU5LCA3MCxcclxuICAyMiwgNDUsIDYyLCA3NCxcclxuICAyNCwgNDcsIDY1LCA3NyxcclxuICAyNSwgNDksIDY4LCA4MVxyXG5dXHJcblxyXG52YXIgRUNfQ09ERVdPUkRTX1RBQkxFID0gW1xyXG4vLyBMICBNICBRICBIXHJcbiAgNywgMTAsIDEzLCAxNyxcclxuICAxMCwgMTYsIDIyLCAyOCxcclxuICAxNSwgMjYsIDM2LCA0NCxcclxuICAyMCwgMzYsIDUyLCA2NCxcclxuICAyNiwgNDgsIDcyLCA4OCxcclxuICAzNiwgNjQsIDk2LCAxMTIsXHJcbiAgNDAsIDcyLCAxMDgsIDEzMCxcclxuICA0OCwgODgsIDEzMiwgMTU2LFxyXG4gIDYwLCAxMTAsIDE2MCwgMTkyLFxyXG4gIDcyLCAxMzAsIDE5MiwgMjI0LFxyXG4gIDgwLCAxNTAsIDIyNCwgMjY0LFxyXG4gIDk2LCAxNzYsIDI2MCwgMzA4LFxyXG4gIDEwNCwgMTk4LCAyODgsIDM1MixcclxuICAxMjAsIDIxNiwgMzIwLCAzODQsXHJcbiAgMTMyLCAyNDAsIDM2MCwgNDMyLFxyXG4gIDE0NCwgMjgwLCA0MDgsIDQ4MCxcclxuICAxNjgsIDMwOCwgNDQ4LCA1MzIsXHJcbiAgMTgwLCAzMzgsIDUwNCwgNTg4LFxyXG4gIDE5NiwgMzY0LCA1NDYsIDY1MCxcclxuICAyMjQsIDQxNiwgNjAwLCA3MDAsXHJcbiAgMjI0LCA0NDIsIDY0NCwgNzUwLFxyXG4gIDI1MiwgNDc2LCA2OTAsIDgxNixcclxuICAyNzAsIDUwNCwgNzUwLCA5MDAsXHJcbiAgMzAwLCA1NjAsIDgxMCwgOTYwLFxyXG4gIDMxMiwgNTg4LCA4NzAsIDEwNTAsXHJcbiAgMzM2LCA2NDQsIDk1MiwgMTExMCxcclxuICAzNjAsIDcwMCwgMTAyMCwgMTIwMCxcclxuICAzOTAsIDcyOCwgMTA1MCwgMTI2MCxcclxuICA0MjAsIDc4NCwgMTE0MCwgMTM1MCxcclxuICA0NTAsIDgxMiwgMTIwMCwgMTQ0MCxcclxuICA0ODAsIDg2OCwgMTI5MCwgMTUzMCxcclxuICA1MTAsIDkyNCwgMTM1MCwgMTYyMCxcclxuICA1NDAsIDk4MCwgMTQ0MCwgMTcxMCxcclxuICA1NzAsIDEwMzYsIDE1MzAsIDE4MDAsXHJcbiAgNTcwLCAxMDY0LCAxNTkwLCAxODkwLFxyXG4gIDYwMCwgMTEyMCwgMTY4MCwgMTk4MCxcclxuICA2MzAsIDEyMDQsIDE3NzAsIDIxMDAsXHJcbiAgNjYwLCAxMjYwLCAxODYwLCAyMjIwLFxyXG4gIDcyMCwgMTMxNiwgMTk1MCwgMjMxMCxcclxuICA3NTAsIDEzNzIsIDIwNDAsIDI0MzBcclxuXVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGJsb2NrIHRoYXQgdGhlIFFSIENvZGUgc2hvdWxkIGNvbnRhaW5cclxuICogZm9yIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cclxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gYmxvY2tzXHJcbiAqL1xyXG5leHBvcnRzLmdldEJsb2Nrc0NvdW50ID0gZnVuY3Rpb24gZ2V0QmxvY2tzQ291bnQgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XHJcbiAgc3dpdGNoIChlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gICAgY2FzZSBFQ0xldmVsLkw6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAwXVxyXG4gICAgY2FzZSBFQ0xldmVsLk06XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAxXVxyXG4gICAgY2FzZSBFQ0xldmVsLlE6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAyXVxyXG4gICAgY2FzZSBFQ0xldmVsLkg6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAzXVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyB0byB1c2UgZm9yIHRoZSBzcGVjaWZpZWRcclxuICogdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cclxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXHJcbiAqL1xyXG5leHBvcnRzLmdldFRvdGFsQ29kZXdvcmRzQ291bnQgPSBmdW5jdGlvbiBnZXRUb3RhbENvZGV3b3Jkc0NvdW50ICh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gIHN3aXRjaCAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcclxuICAgIGNhc2UgRUNMZXZlbC5MOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMF1cclxuICAgIGNhc2UgRUNMZXZlbC5NOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMV1cclxuICAgIGNhc2UgRUNMZXZlbC5ROlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMl1cclxuICAgIGNhc2UgRUNMZXZlbC5IOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgM11cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0cy5MID0geyBiaXQ6IDEgfVxuZXhwb3J0cy5NID0geyBiaXQ6IDAgfVxuZXhwb3J0cy5RID0geyBiaXQ6IDMgfVxuZXhwb3J0cy5IID0geyBiaXQ6IDIgfVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKVxuICB9XG5cbiAgdmFyIGxjU3RyID0gc3RyaW5nLnRvTG93ZXJDYXNlKClcblxuICBzd2l0Y2ggKGxjU3RyKSB7XG4gICAgY2FzZSAnbCc6XG4gICAgY2FzZSAnbG93JzpcbiAgICAgIHJldHVybiBleHBvcnRzLkxcblxuICAgIGNhc2UgJ20nOlxuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5NXG5cbiAgICBjYXNlICdxJzpcbiAgICBjYXNlICdxdWFydGlsZSc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5RXG5cbiAgICBjYXNlICdoJzpcbiAgICBjYXNlICdoaWdoJzpcbiAgICAgIHJldHVybiBleHBvcnRzLkhcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gRUMgTGV2ZWw6ICcgKyBzdHJpbmcpXG4gIH1cbn1cblxuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCAobGV2ZWwpIHtcbiAgcmV0dXJuIGxldmVsICYmIHR5cGVvZiBsZXZlbC5iaXQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGV2ZWwuYml0ID49IDAgJiYgbGV2ZWwuYml0IDwgNFxufVxuXG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChleHBvcnRzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICB9XG59XG4iLCJ2YXIgZ2V0U3ltYm9sU2l6ZSA9IHJlcXVpcmUoJy4vdXRpbHMnKS5nZXRTeW1ib2xTaXplXG52YXIgRklOREVSX1BBVFRFUk5fU0laRSA9IDdcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHBvc2l0aW9ucyBvZiBlYWNoIGZpbmRlciBwYXR0ZXJuLlxuICogRWFjaCBhcnJheSdzIGVsZW1lbnQgcmVwcmVzZW50IHRoZSB0b3AtbGVmdCBwb2ludCBvZiB0aGUgcGF0dGVybiBhcyAoeCwgeSkgY29vcmRpbmF0ZXNcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2YgY29vcmRpbmF0ZXNcbiAqL1xuZXhwb3J0cy5nZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbnMgKHZlcnNpb24pIHtcbiAgdmFyIHNpemUgPSBnZXRTeW1ib2xTaXplKHZlcnNpb24pXG5cbiAgcmV0dXJuIFtcbiAgICAvLyB0b3AtbGVmdFxuICAgIFswLCAwXSxcbiAgICAvLyB0b3AtcmlnaHRcbiAgICBbc2l6ZSAtIEZJTkRFUl9QQVRURVJOX1NJWkUsIDBdLFxuICAgIC8vIGJvdHRvbS1sZWZ0XG4gICAgWzAsIHNpemUgLSBGSU5ERVJfUEFUVEVSTl9TSVpFXVxuICBdXG59XG4iLCJ2YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxudmFyIEcxNSA9ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKVxudmFyIEcxNV9NQVNLID0gKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApIHwgKDEgPDwgNCkgfCAoMSA8PCAxKVxudmFyIEcxNV9CQ0ggPSBVdGlscy5nZXRCQ0hEaWdpdChHMTUpXG5cbi8qKlxuICogUmV0dXJucyBmb3JtYXQgaW5mb3JtYXRpb24gd2l0aCByZWxhdGl2ZSBlcnJvciBjb3JyZWN0aW9uIGJpdHNcbiAqXG4gKiBUaGUgZm9ybWF0IGluZm9ybWF0aW9uIGlzIGEgMTUtYml0IHNlcXVlbmNlIGNvbnRhaW5pbmcgNSBkYXRhIGJpdHMsXG4gKiB3aXRoIDEwIGVycm9yIGNvcnJlY3Rpb24gYml0cyBjYWxjdWxhdGVkIHVzaW5nIHRoZSAoMTUsIDUpIEJDSCBjb2RlLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7TnVtYmVyfSBtYXNrICAgICAgICAgICAgICAgICBNYXNrIHBhdHRlcm5cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgRW5jb2RlZCBmb3JtYXQgaW5mb3JtYXRpb24gYml0c1xuICovXG5leHBvcnRzLmdldEVuY29kZWRCaXRzID0gZnVuY3Rpb24gZ2V0RW5jb2RlZEJpdHMgKGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrKSB7XG4gIHZhciBkYXRhID0gKChlcnJvckNvcnJlY3Rpb25MZXZlbC5iaXQgPDwgMykgfCBtYXNrKVxuICB2YXIgZCA9IGRhdGEgPDwgMTBcblxuICB3aGlsZSAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMTVfQkNIID49IDApIHtcbiAgICBkIF49IChHMTUgPDwgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE1X0JDSCkpXG4gIH1cblxuICAvLyB4b3IgZmluYWwgZGF0YSB3aXRoIG1hc2sgcGF0dGVybiBpbiBvcmRlciB0byBlbnN1cmUgdGhhdFxuICAvLyBubyBjb21iaW5hdGlvbiBvZiBFcnJvciBDb3JyZWN0aW9uIExldmVsIGFuZCBkYXRhIG1hc2sgcGF0dGVyblxuICAvLyB3aWxsIHJlc3VsdCBpbiBhbiBhbGwtemVybyBkYXRhIHN0cmluZ1xuICByZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gRzE1X01BU0tcbn1cbiIsInZhciBCdWZmZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvYnVmZmVyJylcblxudmFyIEVYUF9UQUJMRSA9IEJ1ZmZlclV0aWwuYWxsb2MoNTEyKVxudmFyIExPR19UQUJMRSA9IEJ1ZmZlclV0aWwuYWxsb2MoMjU2KVxuLyoqXG4gKiBQcmVjb21wdXRlIHRoZSBsb2cgYW5kIGFudGktbG9nIHRhYmxlcyBmb3IgZmFzdGVyIGNvbXB1dGF0aW9uIGxhdGVyXG4gKlxuICogRm9yIGVhY2ggcG9zc2libGUgdmFsdWUgaW4gdGhlIGdhbG9pcyBmaWVsZCAyXjgsIHdlIHdpbGwgcHJlLWNvbXB1dGVcbiAqIHRoZSBsb2dhcml0aG0gYW5kIGFudGktbG9nYXJpdGhtIChleHBvbmVudGlhbCkgb2YgdGhpcyB2YWx1ZVxuICpcbiAqIHJlZiB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpdmVyc2l0eS5vcmcvd2lraS9SZWVkJUUyJTgwJTkzU29sb21vbl9jb2Rlc19mb3JfY29kZXJzI0ludHJvZHVjdGlvbl90b19tYXRoZW1hdGljYWxfZmllbGRzfVxuICovXG47KGZ1bmN0aW9uIGluaXRUYWJsZXMgKCkge1xuICB2YXIgeCA9IDFcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTU7IGkrKykge1xuICAgIEVYUF9UQUJMRVtpXSA9IHhcbiAgICBMT0dfVEFCTEVbeF0gPSBpXG5cbiAgICB4IDw8PSAxIC8vIG11bHRpcGx5IGJ5IDJcblxuICAgIC8vIFRoZSBRUiBjb2RlIHNwZWNpZmljYXRpb24gc2F5cyB0byB1c2UgYnl0ZS13aXNlIG1vZHVsbyAxMDAwMTExMDEgYXJpdGhtZXRpYy5cbiAgICAvLyBUaGlzIG1lYW5zIHRoYXQgd2hlbiBhIG51bWJlciBpcyAyNTYgb3IgbGFyZ2VyLCBpdCBzaG91bGQgYmUgWE9SZWQgd2l0aCAweDExRC5cbiAgICBpZiAoeCAmIDB4MTAwKSB7IC8vIHNpbWlsYXIgdG8geCA+PSAyNTYsIGJ1dCBhIGxvdCBmYXN0ZXIgKGJlY2F1c2UgMHgxMDAgPT0gMjU2KVxuICAgICAgeCBePSAweDExRFxuICAgIH1cbiAgfVxuXG4gIC8vIE9wdGltaXphdGlvbjogZG91YmxlIHRoZSBzaXplIG9mIHRoZSBhbnRpLWxvZyB0YWJsZSBzbyB0aGF0IHdlIGRvbid0IG5lZWQgdG8gbW9kIDI1NSB0b1xuICAvLyBzdGF5IGluc2lkZSB0aGUgYm91bmRzIChiZWNhdXNlIHdlIHdpbGwgbWFpbmx5IHVzZSB0aGlzIHRhYmxlIGZvciB0aGUgbXVsdGlwbGljYXRpb24gb2ZcbiAgLy8gdHdvIEdGIG51bWJlcnMsIG5vIG1vcmUpLlxuICAvLyBAc2VlIHtAbGluayBtdWx9XG4gIGZvciAoaSA9IDI1NTsgaSA8IDUxMjsgaSsrKSB7XG4gICAgRVhQX1RBQkxFW2ldID0gRVhQX1RBQkxFW2kgLSAyNTVdXG4gIH1cbn0oKSlcblxuLyoqXG4gKiBSZXR1cm5zIGxvZyB2YWx1ZSBvZiBuIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbiBsb2cgKG4pIHtcbiAgaWYgKG4gPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ2xvZygnICsgbiArICcpJylcbiAgcmV0dXJuIExPR19UQUJMRVtuXVxufVxuXG4vKipcbiAqIFJldHVybnMgYW50aS1sb2cgdmFsdWUgb2YgbiBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMuZXhwID0gZnVuY3Rpb24gZXhwIChuKSB7XG4gIHJldHVybiBFWFBfVEFCTEVbbl1cbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBudW1iZXIgaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0geFxuICogQHBhcmFtICB7TnVtYmVyfSB5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMubXVsID0gZnVuY3Rpb24gbXVsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHJldHVybiAwXG5cbiAgLy8gc2hvdWxkIGJlIEVYUF9UQUJMRVsoTE9HX1RBQkxFW3hdICsgTE9HX1RBQkxFW3ldKSAlIDI1NV0gaWYgRVhQX1RBQkxFIHdhc24ndCBvdmVyc2l6ZWRcbiAgLy8gQHNlZSB7QGxpbmsgaW5pdFRhYmxlc31cbiAgcmV0dXJuIEVYUF9UQUJMRVtMT0dfVEFCTEVbeF0gKyBMT0dfVEFCTEVbeV1dXG59XG4iLCJ2YXIgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gS2FuamlEYXRhIChkYXRhKSB7XG4gIHRoaXMubW9kZSA9IE1vZGUuS0FOSklcbiAgdGhpcy5kYXRhID0gZGF0YVxufVxuXG5LYW5qaURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gbGVuZ3RoICogMTNcbn1cblxuS2FuamlEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5LYW5qaURhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEthbmppRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbkthbmppRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYml0QnVmZmVyKSB7XG4gIHZhciBpXG5cbiAgLy8gSW4gdGhlIFNoaWZ0IEpJUyBzeXN0ZW0sIEthbmppIGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IGEgdHdvIGJ5dGUgY29tYmluYXRpb24uXG4gIC8vIFRoZXNlIGJ5dGUgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICAvLyBKSVMgWCAwMjA4IGdpdmVzIGRldGFpbHMgb2YgdGhlIHNoaWZ0IGNvZGVkIHJlcHJlc2VudGF0aW9uLlxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gVXRpbHMudG9TSklTKHRoaXMuZGF0YVtpXSlcblxuICAgIC8vIEZvciBjaGFyYWN0ZXJzIHdpdGggU2hpZnQgSklTIHZhbHVlcyBmcm9tIDB4ODE0MCB0byAweDlGRkM6XG4gICAgaWYgKHZhbHVlID49IDB4ODE0MCAmJiB2YWx1ZSA8PSAweDlGRkMpIHtcbiAgICAgIC8vIFN1YnRyYWN0IDB4ODE0MCBmcm9tIFNoaWZ0IEpJUyB2YWx1ZVxuICAgICAgdmFsdWUgLT0gMHg4MTQwXG5cbiAgICAvLyBGb3IgY2hhcmFjdGVycyB3aXRoIFNoaWZ0IEpJUyB2YWx1ZXMgZnJvbSAweEUwNDAgdG8gMHhFQkJGXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAweEUwNDAgJiYgdmFsdWUgPD0gMHhFQkJGKSB7XG4gICAgICAvLyBTdWJ0cmFjdCAweEMxNDAgZnJvbSBTaGlmdCBKSVMgdmFsdWVcbiAgICAgIHZhbHVlIC09IDB4QzE0MFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhbGlkIFNKSVMgY2hhcmFjdGVyOiAnICsgdGhpcy5kYXRhW2ldICsgJ1xcbicgK1xuICAgICAgICAnTWFrZSBzdXJlIHlvdXIgY2hhcnNldCBpcyBVVEYtOCcpXG4gICAgfVxuXG4gICAgLy8gTXVsdGlwbHkgbW9zdCBzaWduaWZpY2FudCBieXRlIG9mIHJlc3VsdCBieSAweEMwXG4gICAgLy8gYW5kIGFkZCBsZWFzdCBzaWduaWZpY2FudCBieXRlIHRvIHByb2R1Y3RcbiAgICB2YWx1ZSA9ICgoKHZhbHVlID4+PiA4KSAmIDB4ZmYpICogMHhDMCkgKyAodmFsdWUgJiAweGZmKVxuXG4gICAgLy8gQ29udmVydCByZXN1bHQgdG8gYSAxMy1iaXQgYmluYXJ5IHN0cmluZ1xuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2FuamlEYXRhXG4iLCIvKipcbiAqIERhdGEgbWFzayBwYXR0ZXJuIHJlZmVyZW5jZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5QYXR0ZXJucyA9IHtcbiAgUEFUVEVSTjAwMDogMCxcbiAgUEFUVEVSTjAwMTogMSxcbiAgUEFUVEVSTjAxMDogMixcbiAgUEFUVEVSTjAxMTogMyxcbiAgUEFUVEVSTjEwMDogNCxcbiAgUEFUVEVSTjEwMTogNSxcbiAgUEFUVEVSTjExMDogNixcbiAgUEFUVEVSTjExMTogN1xufVxuXG4vKipcbiAqIFdlaWdodGVkIHBlbmFsdHkgc2NvcmVzIGZvciB0aGUgdW5kZXNpcmFibGUgZmVhdHVyZXNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBQZW5hbHR5U2NvcmVzID0ge1xuICBOMTogMyxcbiAgTjI6IDMsXG4gIE4zOiA0MCxcbiAgTjQ6IDEwXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgbWFzayBwYXR0ZXJuIHZhbHVlIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgbWFzayAgICBNYXNrIHBhdHRlcm5cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgdHJ1ZSBpZiB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKG1hc2spIHtcbiAgcmV0dXJuIG1hc2sgIT0gbnVsbCAmJiBtYXNrICE9PSAnJyAmJiAhaXNOYU4obWFzaykgJiYgbWFzayA+PSAwICYmIG1hc2sgPD0gN1xufVxuXG4vKipcbiAqIFJldHVybnMgbWFzayBwYXR0ZXJuIGZyb20gYSB2YWx1ZS5cbiAqIElmIHZhbHVlIGlzIG5vdCB2YWxpZCwgcmV0dXJucyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSAgICAgICAgTWFzayBwYXR0ZXJuIHZhbHVlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgVmFsaWQgbWFzayBwYXR0ZXJuIG9yIHVuZGVmaW5lZFxuICovXG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tICh2YWx1ZSkge1xuICByZXR1cm4gZXhwb3J0cy5pc1ZhbGlkKHZhbHVlKSA/IHBhcnNlSW50KHZhbHVlLCAxMCkgOiB1bmRlZmluZWRcbn1cblxuLyoqXG4qIEZpbmQgYWRqYWNlbnQgbW9kdWxlcyBpbiByb3cvY29sdW1uIHdpdGggdGhlIHNhbWUgY29sb3JcbiogYW5kIGFzc2lnbiBhIHBlbmFsdHkgdmFsdWUuXG4qXG4qIFBvaW50czogTjEgKyBpXG4qIGkgaXMgdGhlIGFtb3VudCBieSB3aGljaCB0aGUgbnVtYmVyIG9mIGFkamFjZW50IG1vZHVsZXMgb2YgdGhlIHNhbWUgY29sb3IgZXhjZWVkcyA1XG4qL1xuZXhwb3J0cy5nZXRQZW5hbHR5TjEgPSBmdW5jdGlvbiBnZXRQZW5hbHR5TjEgKGRhdGEpIHtcbiAgdmFyIHNpemUgPSBkYXRhLnNpemVcbiAgdmFyIHBvaW50cyA9IDBcbiAgdmFyIHNhbWVDb3VudENvbCA9IDBcbiAgdmFyIHNhbWVDb3VudFJvdyA9IDBcbiAgdmFyIGxhc3RDb2wgPSBudWxsXG4gIHZhciBsYXN0Um93ID0gbnVsbFxuXG4gIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgc2FtZUNvdW50Q29sID0gc2FtZUNvdW50Um93ID0gMFxuICAgIGxhc3RDb2wgPSBsYXN0Um93ID0gbnVsbFxuXG4gICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgIHZhciBtb2R1bGUgPSBkYXRhLmdldChyb3csIGNvbClcbiAgICAgIGlmIChtb2R1bGUgPT09IGxhc3RDb2wpIHtcbiAgICAgICAgc2FtZUNvdW50Q29sKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzYW1lQ291bnRDb2wgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Q29sIC0gNSlcbiAgICAgICAgbGFzdENvbCA9IG1vZHVsZVxuICAgICAgICBzYW1lQ291bnRDb2wgPSAxXG4gICAgICB9XG5cbiAgICAgIG1vZHVsZSA9IGRhdGEuZ2V0KGNvbCwgcm93KVxuICAgICAgaWYgKG1vZHVsZSA9PT0gbGFzdFJvdykge1xuICAgICAgICBzYW1lQ291bnRSb3crK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNhbWVDb3VudFJvdyA+PSA1KSBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRSb3cgLSA1KVxuICAgICAgICBsYXN0Um93ID0gbW9kdWxlXG4gICAgICAgIHNhbWVDb3VudFJvdyA9IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2FtZUNvdW50Q29sID49IDUpIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudENvbCAtIDUpXG4gICAgaWYgKHNhbWVDb3VudFJvdyA+PSA1KSBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRSb3cgLSA1KVxuICB9XG5cbiAgcmV0dXJuIHBvaW50c1xufVxuXG4vKipcbiAqIEZpbmQgMngyIGJsb2NrcyB3aXRoIHRoZSBzYW1lIGNvbG9yIGFuZCBhc3NpZ24gYSBwZW5hbHR5IHZhbHVlXG4gKlxuICogUG9pbnRzOiBOMiAqIChtIC0gMSkgKiAobiAtIDEpXG4gKi9cbmV4cG9ydHMuZ2V0UGVuYWx0eU4yID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU4yIChkYXRhKSB7XG4gIHZhciBzaXplID0gZGF0YS5zaXplXG4gIHZhciBwb2ludHMgPSAwXG5cbiAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgc2l6ZSAtIDE7IHJvdysrKSB7XG4gICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgc2l6ZSAtIDE7IGNvbCsrKSB7XG4gICAgICB2YXIgbGFzdCA9IGRhdGEuZ2V0KHJvdywgY29sKSArXG4gICAgICAgIGRhdGEuZ2V0KHJvdywgY29sICsgMSkgK1xuICAgICAgICBkYXRhLmdldChyb3cgKyAxLCBjb2wpICtcbiAgICAgICAgZGF0YS5nZXQocm93ICsgMSwgY29sICsgMSlcblxuICAgICAgaWYgKGxhc3QgPT09IDQgfHwgbGFzdCA9PT0gMCkgcG9pbnRzKytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzICogUGVuYWx0eVNjb3Jlcy5OMlxufVxuXG4vKipcbiAqIEZpbmQgMToxOjM6MToxIHJhdGlvIChkYXJrOmxpZ2h0OmRhcms6bGlnaHQ6ZGFyaykgcGF0dGVybiBpbiByb3cvY29sdW1uLFxuICogcHJlY2VkZWQgb3IgZm9sbG93ZWQgYnkgbGlnaHQgYXJlYSA0IG1vZHVsZXMgd2lkZVxuICpcbiAqIFBvaW50czogTjMgKiBudW1iZXIgb2YgcGF0dGVybiBmb3VuZFxuICovXG5leHBvcnRzLmdldFBlbmFsdHlOMyA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMyAoZGF0YSkge1xuICB2YXIgc2l6ZSA9IGRhdGEuc2l6ZVxuICB2YXIgcG9pbnRzID0gMFxuICB2YXIgYml0c0NvbCA9IDBcbiAgdmFyIGJpdHNSb3cgPSAwXG5cbiAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICBiaXRzQ29sID0gYml0c1JvdyA9IDBcbiAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgYml0c0NvbCA9ICgoYml0c0NvbCA8PCAxKSAmIDB4N0ZGKSB8IGRhdGEuZ2V0KHJvdywgY29sKVxuICAgICAgaWYgKGNvbCA+PSAxMCAmJiAoYml0c0NvbCA9PT0gMHg1RDAgfHwgYml0c0NvbCA9PT0gMHgwNUQpKSBwb2ludHMrK1xuXG4gICAgICBiaXRzUm93ID0gKChiaXRzUm93IDw8IDEpICYgMHg3RkYpIHwgZGF0YS5nZXQoY29sLCByb3cpXG4gICAgICBpZiAoY29sID49IDEwICYmIChiaXRzUm93ID09PSAweDVEMCB8fCBiaXRzUm93ID09PSAweDA1RCkpIHBvaW50cysrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvaW50cyAqIFBlbmFsdHlTY29yZXMuTjNcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgcHJvcG9ydGlvbiBvZiBkYXJrIG1vZHVsZXMgaW4gZW50aXJlIHN5bWJvbFxuICpcbiAqIFBvaW50czogTjQgKiBrXG4gKlxuICogayBpcyB0aGUgcmF0aW5nIG9mIHRoZSBkZXZpYXRpb24gb2YgdGhlIHByb3BvcnRpb24gb2YgZGFyayBtb2R1bGVzXG4gKiBpbiB0aGUgc3ltYm9sIGZyb20gNTAlIGluIHN0ZXBzIG9mIDUlXG4gKi9cbmV4cG9ydHMuZ2V0UGVuYWx0eU40ID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU40IChkYXRhKSB7XG4gIHZhciBkYXJrQ291bnQgPSAwXG4gIHZhciBtb2R1bGVzQ291bnQgPSBkYXRhLmRhdGEubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzQ291bnQ7IGkrKykgZGFya0NvdW50ICs9IGRhdGEuZGF0YVtpXVxuXG4gIHZhciBrID0gTWF0aC5hYnMoTWF0aC5jZWlsKChkYXJrQ291bnQgKiAxMDAgLyBtb2R1bGVzQ291bnQpIC8gNSkgLSAxMClcblxuICByZXR1cm4gayAqIFBlbmFsdHlTY29yZXMuTjRcbn1cblxuLyoqXG4gKiBSZXR1cm4gbWFzayB2YWx1ZSBhdCBnaXZlbiBwb3NpdGlvblxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gbWFza1BhdHRlcm4gUGF0dGVybiByZWZlcmVuY2UgdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0gaSAgICAgICAgICAgUm93XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGogICAgICAgICAgIENvbHVtblxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICAgICBNYXNrIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGdldE1hc2tBdCAobWFza1BhdHRlcm4sIGksIGopIHtcbiAgc3dpdGNoIChtYXNrUGF0dGVybikge1xuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDAwOiByZXR1cm4gKGkgKyBqKSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAwMTogcmV0dXJuIGkgJSAyID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMTA6IHJldHVybiBqICUgMyA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDExOiByZXR1cm4gKGkgKyBqKSAlIDMgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjEwMDogcmV0dXJuIChNYXRoLmZsb29yKGkgLyAyKSArIE1hdGguZmxvb3IoaiAvIDMpKSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjEwMTogcmV0dXJuIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjExMDogcmV0dXJuICgoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjExMTogcmV0dXJuICgoaSAqIGopICUgMyArIChpICsgaikgJSAyKSAlIDIgPT09IDBcblxuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignYmFkIG1hc2tQYXR0ZXJuOicgKyBtYXNrUGF0dGVybilcbiAgfVxufVxuXG4vKipcbiAqIEFwcGx5IGEgbWFzayBwYXR0ZXJuIHRvIGEgQml0TWF0cml4XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgICBwYXR0ZXJuIFBhdHRlcm4gcmVmZXJlbmNlIG51bWJlclxuICogQHBhcmFtICB7Qml0TWF0cml4fSBkYXRhICAgIEJpdE1hdHJpeCBkYXRhXG4gKi9cbmV4cG9ydHMuYXBwbHlNYXNrID0gZnVuY3Rpb24gYXBwbHlNYXNrIChwYXR0ZXJuLCBkYXRhKSB7XG4gIHZhciBzaXplID0gZGF0YS5zaXplXG5cbiAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgaWYgKGRhdGEuaXNSZXNlcnZlZChyb3csIGNvbCkpIGNvbnRpbnVlXG4gICAgICBkYXRhLnhvcihyb3csIGNvbCwgZ2V0TWFza0F0KHBhdHRlcm4sIHJvdywgY29sKSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBiZXN0IG1hc2sgcGF0dGVybiBmb3IgZGF0YVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gZGF0YVxuICogQHJldHVybiB7TnVtYmVyfSBNYXNrIHBhdHRlcm4gcmVmZXJlbmNlIG51bWJlclxuICovXG5leHBvcnRzLmdldEJlc3RNYXNrID0gZnVuY3Rpb24gZ2V0QmVzdE1hc2sgKGRhdGEsIHNldHVwRm9ybWF0RnVuYykge1xuICB2YXIgbnVtUGF0dGVybnMgPSBPYmplY3Qua2V5cyhleHBvcnRzLlBhdHRlcm5zKS5sZW5ndGhcbiAgdmFyIGJlc3RQYXR0ZXJuID0gMFxuICB2YXIgbG93ZXJQZW5hbHR5ID0gSW5maW5pdHlcblxuICBmb3IgKHZhciBwID0gMDsgcCA8IG51bVBhdHRlcm5zOyBwKyspIHtcbiAgICBzZXR1cEZvcm1hdEZ1bmMocClcbiAgICBleHBvcnRzLmFwcGx5TWFzayhwLCBkYXRhKVxuXG4gICAgLy8gQ2FsY3VsYXRlIHBlbmFsdHlcbiAgICB2YXIgcGVuYWx0eSA9XG4gICAgICBleHBvcnRzLmdldFBlbmFsdHlOMShkYXRhKSArXG4gICAgICBleHBvcnRzLmdldFBlbmFsdHlOMihkYXRhKSArXG4gICAgICBleHBvcnRzLmdldFBlbmFsdHlOMyhkYXRhKSArXG4gICAgICBleHBvcnRzLmdldFBlbmFsdHlONChkYXRhKVxuXG4gICAgLy8gVW5kbyBwcmV2aW91c2x5IGFwcGxpZWQgbWFza1xuICAgIGV4cG9ydHMuYXBwbHlNYXNrKHAsIGRhdGEpXG5cbiAgICBpZiAocGVuYWx0eSA8IGxvd2VyUGVuYWx0eSkge1xuICAgICAgbG93ZXJQZW5hbHR5ID0gcGVuYWx0eVxuICAgICAgYmVzdFBhdHRlcm4gPSBwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RQYXR0ZXJuXG59XG4iLCJ2YXIgVmVyc2lvbkNoZWNrID0gcmVxdWlyZSgnLi92ZXJzaW9uLWNoZWNrJylcbnZhciBSZWdleCA9IHJlcXVpcmUoJy4vcmVnZXgnKVxuXG4vKipcbiAqIE51bWVyaWMgbW9kZSBlbmNvZGVzIGRhdGEgZnJvbSB0aGUgZGVjaW1hbCBkaWdpdCBzZXQgKDAgLSA5KVxuICogKGJ5dGUgdmFsdWVzIDMwSEVYIHRvIDM5SEVYKS5cbiAqIE5vcm1hbGx5LCAzIGRhdGEgY2hhcmFjdGVycyBhcmUgcmVwcmVzZW50ZWQgYnkgMTAgYml0cy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLk5VTUVSSUMgPSB7XG4gIGlkOiAnTnVtZXJpYycsXG4gIGJpdDogMSA8PCAwLFxuICBjY0JpdHM6IFsxMCwgMTIsIDE0XVxufVxuXG4vKipcbiAqIEFscGhhbnVtZXJpYyBtb2RlIGVuY29kZXMgZGF0YSBmcm9tIGEgc2V0IG9mIDQ1IGNoYXJhY3RlcnMsXG4gKiBpLmUuIDEwIG51bWVyaWMgZGlnaXRzICgwIC0gOSksXG4gKiAgICAgIDI2IGFscGhhYmV0aWMgY2hhcmFjdGVycyAoQSAtIFopLFxuICogICBhbmQgOSBzeW1ib2xzIChTUCwgJCwgJSwgKiwgKywgLSwgLiwgLywgOikuXG4gKiBOb3JtYWxseSwgdHdvIGlucHV0IGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IDExIGJpdHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5BTFBIQU5VTUVSSUMgPSB7XG4gIGlkOiAnQWxwaGFudW1lcmljJyxcbiAgYml0OiAxIDw8IDEsXG4gIGNjQml0czogWzksIDExLCAxM11cbn1cblxuLyoqXG4gKiBJbiBieXRlIG1vZGUsIGRhdGEgaXMgZW5jb2RlZCBhdCA4IGJpdHMgcGVyIGNoYXJhY3Rlci5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLkJZVEUgPSB7XG4gIGlkOiAnQnl0ZScsXG4gIGJpdDogMSA8PCAyLFxuICBjY0JpdHM6IFs4LCAxNiwgMTZdXG59XG5cbi8qKlxuICogVGhlIEthbmppIG1vZGUgZWZmaWNpZW50bHkgZW5jb2RlcyBLYW5qaSBjaGFyYWN0ZXJzIGluIGFjY29yZGFuY2Ugd2l0aFxuICogdGhlIFNoaWZ0IEpJUyBzeXN0ZW0gYmFzZWQgb24gSklTIFggMDIwOC5cbiAqIFRoZSBTaGlmdCBKSVMgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICogSklTIFggMDIwOCBnaXZlcyBkZXRhaWxzIG9mIHRoZSBzaGlmdCBjb2RlZCByZXByZXNlbnRhdGlvbi5cbiAqIEVhY2ggdHdvLWJ5dGUgY2hhcmFjdGVyIHZhbHVlIGlzIGNvbXBhY3RlZCB0byBhIDEzLWJpdCBiaW5hcnkgY29kZXdvcmQuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5LQU5KSSA9IHtcbiAgaWQ6ICdLYW5qaScsXG4gIGJpdDogMSA8PCAzLFxuICBjY0JpdHM6IFs4LCAxMCwgMTJdXG59XG5cbi8qKlxuICogTWl4ZWQgbW9kZSB3aWxsIGNvbnRhaW4gYSBzZXF1ZW5jZXMgb2YgZGF0YSBpbiBhIGNvbWJpbmF0aW9uIG9mIGFueSBvZlxuICogdGhlIG1vZGVzIGRlc2NyaWJlZCBhYm92ZVxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuTUlYRUQgPSB7XG4gIGJpdDogLTFcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYml0cyBuZWVkZWQgdG8gc3RvcmUgdGhlIGRhdGEgbGVuZ3RoXG4gKiBhY2NvcmRpbmcgdG8gUVIgQ29kZSBzcGVjaWZpY2F0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtNb2RlfSAgIG1vZGUgICAgRGF0YSBtb2RlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgTnVtYmVyIG9mIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRDaGFyQ291bnRJbmRpY2F0b3IgPSBmdW5jdGlvbiBnZXRDaGFyQ291bnRJbmRpY2F0b3IgKG1vZGUsIHZlcnNpb24pIHtcbiAgaWYgKCFtb2RlLmNjQml0cykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGU6ICcgKyBtb2RlKVxuXG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmVyc2lvbjogJyArIHZlcnNpb24pXG4gIH1cblxuICBpZiAodmVyc2lvbiA+PSAxICYmIHZlcnNpb24gPCAxMCkgcmV0dXJuIG1vZGUuY2NCaXRzWzBdXG4gIGVsc2UgaWYgKHZlcnNpb24gPCAyNykgcmV0dXJuIG1vZGUuY2NCaXRzWzFdXG4gIHJldHVybiBtb2RlLmNjQml0c1syXVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1vc3QgZWZmaWNpZW50IG1vZGUgdG8gc3RvcmUgdGhlIHNwZWNpZmllZCBkYXRhXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkYXRhU3RyIElucHV0IGRhdGEgc3RyaW5nXG4gKiBAcmV0dXJuIHtNb2RlfSAgICAgICAgICAgQmVzdCBtb2RlXG4gKi9cbmV4cG9ydHMuZ2V0QmVzdE1vZGVGb3JEYXRhID0gZnVuY3Rpb24gZ2V0QmVzdE1vZGVGb3JEYXRhIChkYXRhU3RyKSB7XG4gIGlmIChSZWdleC50ZXN0TnVtZXJpYyhkYXRhU3RyKSkgcmV0dXJuIGV4cG9ydHMuTlVNRVJJQ1xuICBlbHNlIGlmIChSZWdleC50ZXN0QWxwaGFudW1lcmljKGRhdGFTdHIpKSByZXR1cm4gZXhwb3J0cy5BTFBIQU5VTUVSSUNcbiAgZWxzZSBpZiAoUmVnZXgudGVzdEthbmppKGRhdGFTdHIpKSByZXR1cm4gZXhwb3J0cy5LQU5KSVxuICBlbHNlIHJldHVybiBleHBvcnRzLkJZVEVcbn1cblxuLyoqXG4gKiBSZXR1cm4gbW9kZSBuYW1lIGFzIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7TW9kZX0gbW9kZSBNb2RlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIE1vZGUgbmFtZVxuICovXG5leHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKG1vZGUpIHtcbiAgaWYgKG1vZGUgJiYgbW9kZS5pZCkgcmV0dXJuIG1vZGUuaWRcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGlucHV0IHBhcmFtIGlzIGEgdmFsaWQgbW9kZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0gICB7TW9kZX0gICAgbW9kZSBNb2RlIG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdmFsaWQgbW9kZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKG1vZGUpIHtcbiAgcmV0dXJuIG1vZGUgJiYgbW9kZS5iaXQgJiYgbW9kZS5jY0JpdHNcbn1cblxuLyoqXG4gKiBHZXQgbW9kZSBvYmplY3QgZnJvbSBpdHMgbmFtZVxuICpcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IHN0cmluZyBNb2RlIG5hbWVcbiAqIEByZXR1cm5zIHtNb2RlfSAgICAgICAgICBNb2RlIG9iamVjdFxuICovXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKVxuICB9XG5cbiAgdmFyIGxjU3RyID0gc3RyaW5nLnRvTG93ZXJDYXNlKClcblxuICBzd2l0Y2ggKGxjU3RyKSB7XG4gICAgY2FzZSAnbnVtZXJpYyc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5OVU1FUklDXG4gICAgY2FzZSAnYWxwaGFudW1lcmljJzpcbiAgICAgIHJldHVybiBleHBvcnRzLkFMUEhBTlVNRVJJQ1xuICAgIGNhc2UgJ2thbmppJzpcbiAgICAgIHJldHVybiBleHBvcnRzLktBTkpJXG4gICAgY2FzZSAnYnl0ZSc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5CWVRFXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlOiAnICsgc3RyaW5nKVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBtb2RlIGZyb20gYSB2YWx1ZS5cbiAqIElmIHZhbHVlIGlzIG5vdCBhIHZhbGlkIG1vZGUsIHJldHVybnMgZGVmYXVsdFZhbHVlXG4gKlxuICogQHBhcmFtICB7TW9kZXxTdHJpbmd9IHZhbHVlICAgICAgICBFbmNvZGluZyBtb2RlXG4gKiBAcGFyYW0gIHtNb2RlfSAgICAgICAgZGVmYXVsdFZhbHVlIEZhbGxiYWNrIHZhbHVlXG4gKiBAcmV0dXJuIHtNb2RlfSAgICAgICAgICAgICAgICAgICAgIEVuY29kaW5nIG1vZGVcbiAqL1xuZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoZXhwb3J0cy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgfVxufVxuIiwidmFyIE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuXG5mdW5jdGlvbiBOdW1lcmljRGF0YSAoZGF0YSkge1xuICB0aGlzLm1vZGUgPSBNb2RlLk5VTUVSSUNcbiAgdGhpcy5kYXRhID0gZGF0YS50b1N0cmluZygpXG59XG5cbk51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoIChsZW5ndGgpIHtcbiAgcmV0dXJuIDEwICogTWF0aC5mbG9vcihsZW5ndGggLyAzKSArICgobGVuZ3RoICUgMykgPyAoKGxlbmd0aCAlIDMpICogMyArIDEpIDogMClcbn1cblxuTnVtZXJpY0RhdGEucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCAoKSB7XG4gIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoXG59XG5cbk51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAoKSB7XG4gIHJldHVybiBOdW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbk51bWVyaWNEYXRhLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChiaXRCdWZmZXIpIHtcbiAgdmFyIGksIGdyb3VwLCB2YWx1ZVxuXG4gIC8vIFRoZSBpbnB1dCBkYXRhIHN0cmluZyBpcyBkaXZpZGVkIGludG8gZ3JvdXBzIG9mIHRocmVlIGRpZ2l0cyxcbiAgLy8gYW5kIGVhY2ggZ3JvdXAgaXMgY29udmVydGVkIHRvIGl0cyAxMC1iaXQgYmluYXJ5IGVxdWl2YWxlbnQuXG4gIGZvciAoaSA9IDA7IGkgKyAzIDw9IHRoaXMuZGF0YS5sZW5ndGg7IGkgKz0gMykge1xuICAgIGdyb3VwID0gdGhpcy5kYXRhLnN1YnN0cihpLCAzKVxuICAgIHZhbHVlID0gcGFyc2VJbnQoZ3JvdXAsIDEwKVxuXG4gICAgYml0QnVmZmVyLnB1dCh2YWx1ZSwgMTApXG4gIH1cblxuICAvLyBJZiB0aGUgbnVtYmVyIG9mIGlucHV0IGRpZ2l0cyBpcyBub3QgYW4gZXhhY3QgbXVsdGlwbGUgb2YgdGhyZWUsXG4gIC8vIHRoZSBmaW5hbCBvbmUgb3IgdHdvIGRpZ2l0cyBhcmUgY29udmVydGVkIHRvIDQgb3IgNyBiaXRzIHJlc3BlY3RpdmVseS5cbiAgdmFyIHJlbWFpbmluZ051bSA9IHRoaXMuZGF0YS5sZW5ndGggLSBpXG4gIGlmIChyZW1haW5pbmdOdW0gPiAwKSB7XG4gICAgZ3JvdXAgPSB0aGlzLmRhdGEuc3Vic3RyKGkpXG4gICAgdmFsdWUgPSBwYXJzZUludChncm91cCwgMTApXG5cbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCByZW1haW5pbmdOdW0gKiAzICsgMSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWVyaWNEYXRhXG4iLCJ2YXIgQnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxzL2J1ZmZlcicpXG52YXIgR0YgPSByZXF1aXJlKCcuL2dhbG9pcy1maWVsZCcpXG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gcG9seW5vbWlhbHMgaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge0J1ZmZlcn0gcDEgUG9seW5vbWlhbFxuICogQHBhcmFtICB7QnVmZmVyfSBwMiBQb2x5bm9taWFsXG4gKiBAcmV0dXJuIHtCdWZmZXJ9ICAgIFByb2R1Y3Qgb2YgcDEgYW5kIHAyXG4gKi9cbmV4cG9ydHMubXVsID0gZnVuY3Rpb24gbXVsIChwMSwgcDIpIHtcbiAgdmFyIGNvZWZmID0gQnVmZmVyVXRpbC5hbGxvYyhwMS5sZW5ndGggKyBwMi5sZW5ndGggLSAxKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHAyLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb2VmZltpICsgal0gXj0gR0YubXVsKHAxW2ldLCBwMltqXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29lZmZcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHJlbWFpbmRlciBvZiBwb2x5bm9taWFscyBkaXZpc2lvblxuICpcbiAqIEBwYXJhbSAge0J1ZmZlcn0gZGl2aWRlbnQgUG9seW5vbWlhbFxuICogQHBhcmFtICB7QnVmZmVyfSBkaXZpc29yICBQb2x5bm9taWFsXG4gKiBAcmV0dXJuIHtCdWZmZXJ9ICAgICAgICAgIFJlbWFpbmRlclxuICovXG5leHBvcnRzLm1vZCA9IGZ1bmN0aW9uIG1vZCAoZGl2aWRlbnQsIGRpdmlzb3IpIHtcbiAgdmFyIHJlc3VsdCA9IEJ1ZmZlclV0aWwuZnJvbShkaXZpZGVudClcblxuICB3aGlsZSAoKHJlc3VsdC5sZW5ndGggLSBkaXZpc29yLmxlbmd0aCkgPj0gMCkge1xuICAgIHZhciBjb2VmZiA9IHJlc3VsdFswXVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXZpc29yLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gXj0gR0YubXVsKGRpdmlzb3JbaV0sIGNvZWZmKVxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgemVyb3MgZnJvbSBidWZmZXIgaGVhZFxuICAgIHZhciBvZmZzZXQgPSAwXG4gICAgd2hpbGUgKG9mZnNldCA8IHJlc3VsdC5sZW5ndGggJiYgcmVzdWx0W29mZnNldF0gPT09IDApIG9mZnNldCsrXG4gICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKG9mZnNldClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbCBvZiBzcGVjaWZpZWQgZGVncmVlXG4gKiAodXNlZCBieSBSZWVkLVNvbG9tb24gZW5jb2RlcilcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlZ3JlZSBEZWdyZWUgb2YgdGhlIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gKiBAcmV0dXJuIHtCdWZmZXJ9ICAgICAgICBCdWZmZXIgY29udGFpbmluZyBwb2x5bm9taWFsIGNvZWZmaWNpZW50c1xuICovXG5leHBvcnRzLmdlbmVyYXRlRUNQb2x5bm9taWFsID0gZnVuY3Rpb24gZ2VuZXJhdGVFQ1BvbHlub21pYWwgKGRlZ3JlZSkge1xuICB2YXIgcG9seSA9IEJ1ZmZlclV0aWwuZnJvbShbMV0pXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGVncmVlOyBpKyspIHtcbiAgICBwb2x5ID0gZXhwb3J0cy5tdWwocG9seSwgWzEsIEdGLmV4cChpKV0pXG4gIH1cblxuICByZXR1cm4gcG9seVxufVxuIiwidmFyIEJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuLi91dGlscy9idWZmZXInKVxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG52YXIgRUNMZXZlbCA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1sZXZlbCcpXG52YXIgQml0QnVmZmVyID0gcmVxdWlyZSgnLi9iaXQtYnVmZmVyJylcbnZhciBCaXRNYXRyaXggPSByZXF1aXJlKCcuL2JpdC1tYXRyaXgnKVxudmFyIEFsaWdubWVudFBhdHRlcm4gPSByZXF1aXJlKCcuL2FsaWdubWVudC1wYXR0ZXJuJylcbnZhciBGaW5kZXJQYXR0ZXJuID0gcmVxdWlyZSgnLi9maW5kZXItcGF0dGVybicpXG52YXIgTWFza1BhdHRlcm4gPSByZXF1aXJlKCcuL21hc2stcGF0dGVybicpXG52YXIgRUNDb2RlID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWNvZGUnKVxudmFyIFJlZWRTb2xvbW9uRW5jb2RlciA9IHJlcXVpcmUoJy4vcmVlZC1zb2xvbW9uLWVuY29kZXInKVxudmFyIFZlcnNpb24gPSByZXF1aXJlKCcuL3ZlcnNpb24nKVxudmFyIEZvcm1hdEluZm8gPSByZXF1aXJlKCcuL2Zvcm1hdC1pbmZvJylcbnZhciBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbnZhciBTZWdtZW50cyA9IHJlcXVpcmUoJy4vc2VnbWVudHMnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuLyoqXG4gKiBRUkNvZGUgZm9yIEphdmFTY3JpcHRcbiAqXG4gKiBtb2RpZmllZCBieSBSeWFuIERheSBmb3Igbm9kZWpzIHN1cHBvcnRcbiAqIENvcHlyaWdodCAoYykgMjAxMSBSeWFuIERheVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUVJDb2RlIGZvciBKYXZhU2NyaXB0XG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDA5IEthenVoaWtvIEFyYXNlXG4vL1xuLy8gVVJMOiBodHRwOi8vd3d3LmQtcHJvamVjdC5jb20vXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuLy8gICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuLy9cbi8vIFRoZSB3b3JkIFwiUVIgQ29kZVwiIGlzIHJlZ2lzdGVyZWQgdHJhZGVtYXJrIG9mXG4vLyBERU5TTyBXQVZFIElOQ09SUE9SQVRFRFxuLy8gICBodHRwOi8vd3d3LmRlbnNvLXdhdmUuY29tL3FyY29kZS9mYXFwYXRlbnQtZS5odG1sXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbi8qKlxuICogQWRkIGZpbmRlciBwYXR0ZXJucyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cEZpbmRlclBhdHRlcm4gKG1hdHJpeCwgdmVyc2lvbikge1xuICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIHZhciBwb3MgPSBGaW5kZXJQYXR0ZXJuLmdldFBvc2l0aW9ucyh2ZXJzaW9uKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IHBvc1tpXVswXVxuICAgIHZhciBjb2wgPSBwb3NbaV1bMV1cblxuICAgIGZvciAodmFyIHIgPSAtMTsgciA8PSA3OyByKyspIHtcbiAgICAgIGlmIChyb3cgKyByIDw9IC0xIHx8IHNpemUgPD0gcm93ICsgcikgY29udGludWVcblxuICAgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xuICAgICAgICBpZiAoY29sICsgYyA8PSAtMSB8fCBzaXplIDw9IGNvbCArIGMpIGNvbnRpbnVlXG5cbiAgICAgICAgaWYgKChyID49IDAgJiYgciA8PSA2ICYmIChjID09PSAwIHx8IGMgPT09IDYpKSB8fFxuICAgICAgICAgIChjID49IDAgJiYgYyA8PSA2ICYmIChyID09PSAwIHx8IHIgPT09IDYpKSB8fFxuICAgICAgICAgIChyID49IDIgJiYgciA8PSA0ICYmIGMgPj0gMiAmJiBjIDw9IDQpKSB7XG4gICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCB0cnVlLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgZmFsc2UsIHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgdGltaW5nIHBhdHRlcm4gYml0cyB0byBtYXRyaXhcbiAqXG4gKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSB7QGxpbmsgc2V0dXBBbGlnbm1lbnRQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4IE1vZHVsZXMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIHNldHVwVGltaW5nUGF0dGVybiAobWF0cml4KSB7XG4gIHZhciBzaXplID0gbWF0cml4LnNpemVcblxuICBmb3IgKHZhciByID0gODsgciA8IHNpemUgLSA4OyByKyspIHtcbiAgICB2YXIgdmFsdWUgPSByICUgMiA9PT0gMFxuICAgIG1hdHJpeC5zZXQociwgNiwgdmFsdWUsIHRydWUpXG4gICAgbWF0cml4LnNldCg2LCByLCB2YWx1ZSwgdHJ1ZSlcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBhbGlnbm1lbnQgcGF0dGVybnMgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGFmdGVyIHtAbGluayBzZXR1cFRpbWluZ1BhdHRlcm59XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggIE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKi9cbmZ1bmN0aW9uIHNldHVwQWxpZ25tZW50UGF0dGVybiAobWF0cml4LCB2ZXJzaW9uKSB7XG4gIHZhciBwb3MgPSBBbGlnbm1lbnRQYXR0ZXJuLmdldFBvc2l0aW9ucyh2ZXJzaW9uKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IHBvc1tpXVswXVxuICAgIHZhciBjb2wgPSBwb3NbaV1bMV1cblxuICAgIGZvciAodmFyIHIgPSAtMjsgciA8PSAyOyByKyspIHtcbiAgICAgIGZvciAodmFyIGMgPSAtMjsgYyA8PSAyOyBjKyspIHtcbiAgICAgICAgaWYgKHIgPT09IC0yIHx8IHIgPT09IDIgfHwgYyA9PT0gLTIgfHwgYyA9PT0gMiB8fFxuICAgICAgICAgIChyID09PSAwICYmIGMgPT09IDApKSB7XG4gICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCB0cnVlLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgZmFsc2UsIHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgdmVyc2lvbiBpbmZvIGJpdHMgdG8gbWF0cml4XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggIE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKi9cbmZ1bmN0aW9uIHNldHVwVmVyc2lvbkluZm8gKG1hdHJpeCwgdmVyc2lvbikge1xuICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIHZhciBiaXRzID0gVmVyc2lvbi5nZXRFbmNvZGVkQml0cyh2ZXJzaW9uKVxuICB2YXIgcm93LCBjb2wsIG1vZFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkrKykge1xuICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIDMpXG4gICAgY29sID0gaSAlIDMgKyBzaXplIC0gOCAtIDNcbiAgICBtb2QgPSAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMVxuXG4gICAgbWF0cml4LnNldChyb3csIGNvbCwgbW9kLCB0cnVlKVxuICAgIG1hdHJpeC5zZXQoY29sLCByb3csIG1vZCwgdHJ1ZSlcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBmb3JtYXQgaW5mbyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICAgICAgICAgICAgICAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge0Vycm9yQ29ycmVjdGlvbkxldmVsfSAgICBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIG1hc2tQYXR0ZXJuICAgICAgICAgIE1hc2sgcGF0dGVybiByZWZlcmVuY2UgdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2V0dXBGb3JtYXRJbmZvIChtYXRyaXgsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybikge1xuICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIHZhciBiaXRzID0gRm9ybWF0SW5mby5nZXRFbmNvZGVkQml0cyhlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pXG4gIHZhciBpLCBtb2RcblxuICBmb3IgKGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxXG5cbiAgICAvLyB2ZXJ0aWNhbFxuICAgIGlmIChpIDwgNikge1xuICAgICAgbWF0cml4LnNldChpLCA4LCBtb2QsIHRydWUpXG4gICAgfSBlbHNlIGlmIChpIDwgOCkge1xuICAgICAgbWF0cml4LnNldChpICsgMSwgOCwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXRyaXguc2V0KHNpemUgLSAxNSArIGksIDgsIG1vZCwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvLyBob3Jpem9udGFsXG4gICAgaWYgKGkgPCA4KSB7XG4gICAgICBtYXRyaXguc2V0KDgsIHNpemUgLSBpIC0gMSwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSBpZiAoaSA8IDkpIHtcbiAgICAgIG1hdHJpeC5zZXQoOCwgMTUgLSBpIC0gMSArIDEsIG1vZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0cml4LnNldCg4LCAxNSAtIGkgLSAxLCBtb2QsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgLy8gZml4ZWQgbW9kdWxlXG4gIG1hdHJpeC5zZXQoc2l6ZSAtIDgsIDgsIDEsIHRydWUpXG59XG5cbi8qKlxuICogQWRkIGVuY29kZWQgZGF0YSBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4IE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtCdWZmZXJ9ICAgIGRhdGEgICBEYXRhIGNvZGV3b3Jkc1xuICovXG5mdW5jdGlvbiBzZXR1cERhdGEgKG1hdHJpeCwgZGF0YSkge1xuICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIHZhciBpbmMgPSAtMVxuICB2YXIgcm93ID0gc2l6ZSAtIDFcbiAgdmFyIGJpdEluZGV4ID0gN1xuICB2YXIgYnl0ZUluZGV4ID0gMFxuXG4gIGZvciAodmFyIGNvbCA9IHNpemUgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xuICAgIGlmIChjb2wgPT09IDYpIGNvbC0tXG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCAyOyBjKyspIHtcbiAgICAgICAgaWYgKCFtYXRyaXguaXNSZXNlcnZlZChyb3csIGNvbCAtIGMpKSB7XG4gICAgICAgICAgdmFyIGRhcmsgPSBmYWxzZVxuXG4gICAgICAgICAgaWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXJrID0gKCgoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PT0gMSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXRyaXguc2V0KHJvdywgY29sIC0gYywgZGFyaylcbiAgICAgICAgICBiaXRJbmRleC0tXG5cbiAgICAgICAgICBpZiAoYml0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBieXRlSW5kZXgrK1xuICAgICAgICAgICAgYml0SW5kZXggPSA3XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJvdyArPSBpbmNcblxuICAgICAgaWYgKHJvdyA8IDAgfHwgc2l6ZSA8PSByb3cpIHtcbiAgICAgICAgcm93IC09IGluY1xuICAgICAgICBpbmMgPSAtaW5jXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGVuY29kZWQgY29kZXdvcmRzIGZyb20gZGF0YSBpbnB1dFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSAge0Vycm9yQ29ycmVjdGlvbkxldmVsfSAgIGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge0J5dGVEYXRhfSBkYXRhICAgICAgICAgICAgICAgICBEYXRhIGlucHV0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgQnVmZmVyIGNvbnRhaW5pbmcgZW5jb2RlZCBjb2Rld29yZHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGF0YSAodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIHNlZ21lbnRzKSB7XG4gIC8vIFByZXBhcmUgZGF0YSBidWZmZXJcbiAgdmFyIGJ1ZmZlciA9IG5ldyBCaXRCdWZmZXIoKVxuXG4gIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyBwcmVmaXggZGF0YSB3aXRoIG1vZGUgaW5kaWNhdG9yICg0IGJpdHMpXG4gICAgYnVmZmVyLnB1dChkYXRhLm1vZGUuYml0LCA0KVxuXG4gICAgLy8gUHJlZml4IGRhdGEgd2l0aCBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yLlxuICAgIC8vIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yIGlzIGEgc3RyaW5nIG9mIGJpdHMgdGhhdCByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIGJlaW5nIGVuY29kZWQuXG4gICAgLy8gVGhlIGNoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IgbXVzdCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG1vZGUgaW5kaWNhdG9yXG4gICAgLy8gYW5kIG11c3QgYmUgYSBjZXJ0YWluIG51bWJlciBvZiBiaXRzIGxvbmcsIGRlcGVuZGluZyBvbiB0aGUgUVIgdmVyc2lvblxuICAgIC8vIGFuZCBkYXRhIG1vZGVcbiAgICAvLyBAc2VlIHtAbGluayBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcn0uXG4gICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihkYXRhLm1vZGUsIHZlcnNpb24pKVxuXG4gICAgLy8gYWRkIGJpbmFyeSBkYXRhIHNlcXVlbmNlIHRvIGJ1ZmZlclxuICAgIGRhdGEud3JpdGUoYnVmZmVyKVxuICB9KVxuXG4gIC8vIENhbGN1bGF0ZSByZXF1aXJlZCBudW1iZXIgb2YgYml0c1xuICB2YXIgdG90YWxDb2Rld29yZHMgPSBVdGlscy5nZXRTeW1ib2xUb3RhbENvZGV3b3Jkcyh2ZXJzaW9uKVxuICB2YXIgZWNUb3RhbENvZGV3b3JkcyA9IEVDQ29kZS5nZXRUb3RhbENvZGV3b3Jkc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuICB2YXIgZGF0YVRvdGFsQ29kZXdvcmRzQml0cyA9ICh0b3RhbENvZGV3b3JkcyAtIGVjVG90YWxDb2Rld29yZHMpICogOFxuXG4gIC8vIEFkZCBhIHRlcm1pbmF0b3IuXG4gIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIHNob3J0ZXIgdGhhbiB0aGUgdG90YWwgbnVtYmVyIG9mIHJlcXVpcmVkIGJpdHMsXG4gIC8vIGEgdGVybWluYXRvciBvZiB1cCB0byBmb3VyIDBzIG11c3QgYmUgYWRkZWQgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHN0cmluZy5cbiAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgbW9yZSB0aGFuIGZvdXIgYml0cyBzaG9ydGVyIHRoYW4gdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLFxuICAvLyBhZGQgZm91ciAwcyB0byB0aGUgZW5kLlxuICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSBkYXRhVG90YWxDb2Rld29yZHNCaXRzKSB7XG4gICAgYnVmZmVyLnB1dCgwLCA0KVxuICB9XG5cbiAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgZmV3ZXIgdGhhbiBmb3VyIGJpdHMgc2hvcnRlciwgYWRkIG9ubHkgdGhlIG51bWJlciBvZiAwcyB0aGF0XG4gIC8vIGFyZSBuZWVkZWQgdG8gcmVhY2ggdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLlxuXG4gIC8vIEFmdGVyIGFkZGluZyB0aGUgdGVybWluYXRvciwgaWYgdGhlIG51bWJlciBvZiBiaXRzIGluIHRoZSBzdHJpbmcgaXMgbm90IGEgbXVsdGlwbGUgb2YgOCxcbiAgLy8gcGFkIHRoZSBzdHJpbmcgb24gdGhlIHJpZ2h0IHdpdGggMHMgdG8gbWFrZSB0aGUgc3RyaW5nJ3MgbGVuZ3RoIGEgbXVsdGlwbGUgb2YgOC5cbiAgd2hpbGUgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSAlIDggIT09IDApIHtcbiAgICBidWZmZXIucHV0Qml0KDApXG4gIH1cblxuICAvLyBBZGQgcGFkIGJ5dGVzIGlmIHRoZSBzdHJpbmcgaXMgc3RpbGwgc2hvcnRlciB0aGFuIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVxdWlyZWQgYml0cy5cbiAgLy8gRXh0ZW5kIHRoZSBidWZmZXIgdG8gZmlsbCB0aGUgZGF0YSBjYXBhY2l0eSBvZiB0aGUgc3ltYm9sIGNvcnJlc3BvbmRpbmcgdG9cbiAgLy8gdGhlIFZlcnNpb24gYW5kIEVycm9yIENvcnJlY3Rpb24gTGV2ZWwgYnkgYWRkaW5nIHRoZSBQYWQgQ29kZXdvcmRzIDExMTAxMTAwICgweEVDKVxuICAvLyBhbmQgMDAwMTAwMDEgKDB4MTEpIGFsdGVybmF0ZWx5LlxuICB2YXIgcmVtYWluaW5nQnl0ZSA9IChkYXRhVG90YWxDb2Rld29yZHNCaXRzIC0gYnVmZmVyLmdldExlbmd0aEluQml0cygpKSAvIDhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1haW5pbmdCeXRlOyBpKyspIHtcbiAgICBidWZmZXIucHV0KGkgJSAyID8gMHgxMSA6IDB4RUMsIDgpXG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ29kZXdvcmRzKGJ1ZmZlciwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG59XG5cbi8qKlxuICogRW5jb2RlIGlucHV0IGRhdGEgd2l0aCBSZWVkLVNvbG9tb24gYW5kIHJldHVybiBjb2Rld29yZHMgd2l0aFxuICogcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gKlxuICogQHBhcmFtICB7Qml0QnVmZmVyfSBiaXRCdWZmZXIgICAgICAgICAgICBEYXRhIHRvIGVuY29kZVxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSAge0Vycm9yQ29ycmVjdGlvbkxldmVsfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcmV0dXJuIHtCdWZmZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvZGV3b3JkcyAoYml0QnVmZmVyLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICAvLyBUb3RhbCBjb2Rld29yZHMgZm9yIHRoaXMgUVIgY29kZSB2ZXJzaW9uIChEYXRhICsgRXJyb3IgY29ycmVjdGlvbilcbiAgdmFyIHRvdGFsQ29kZXdvcmRzID0gVXRpbHMuZ2V0U3ltYm9sVG90YWxDb2Rld29yZHModmVyc2lvbilcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHNcbiAgdmFyIGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHNcbiAgdmFyIGRhdGFUb3RhbENvZGV3b3JkcyA9IHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3Jkc1xuXG4gIC8vIFRvdGFsIG51bWJlciBvZiBibG9ja3NcbiAgdmFyIGVjVG90YWxCbG9ja3MgPSBFQ0NvZGUuZ2V0QmxvY2tzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG5cbiAgLy8gQ2FsY3VsYXRlIGhvdyBtYW55IGJsb2NrcyBlYWNoIGdyb3VwIHNob3VsZCBjb250YWluXG4gIHZhciBibG9ja3NJbkdyb3VwMiA9IHRvdGFsQ29kZXdvcmRzICUgZWNUb3RhbEJsb2Nrc1xuICB2YXIgYmxvY2tzSW5Hcm91cDEgPSBlY1RvdGFsQmxvY2tzIC0gYmxvY2tzSW5Hcm91cDJcblxuICB2YXIgdG90YWxDb2Rld29yZHNJbkdyb3VwMSA9IE1hdGguZmxvb3IodG90YWxDb2Rld29yZHMgLyBlY1RvdGFsQmxvY2tzKVxuXG4gIHZhciBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKGRhdGFUb3RhbENvZGV3b3JkcyAvIGVjVG90YWxCbG9ja3MpXG4gIHZhciBkYXRhQ29kZXdvcmRzSW5Hcm91cDIgPSBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgKyAxXG5cbiAgLy8gTnVtYmVyIG9mIEVDIGNvZGV3b3JkcyBpcyB0aGUgc2FtZSBmb3IgYm90aCBncm91cHNcbiAgdmFyIGVjQ291bnQgPSB0b3RhbENvZGV3b3Jkc0luR3JvdXAxIC0gZGF0YUNvZGV3b3Jkc0luR3JvdXAxXG5cbiAgLy8gSW5pdGlhbGl6ZSBhIFJlZWQtU29sb21vbiBlbmNvZGVyIHdpdGggYSBnZW5lcmF0b3IgcG9seW5vbWlhbCBvZiBkZWdyZWUgZWNDb3VudFxuICB2YXIgcnMgPSBuZXcgUmVlZFNvbG9tb25FbmNvZGVyKGVjQ291bnQpXG5cbiAgdmFyIG9mZnNldCA9IDBcbiAgdmFyIGRjRGF0YSA9IG5ldyBBcnJheShlY1RvdGFsQmxvY2tzKVxuICB2YXIgZWNEYXRhID0gbmV3IEFycmF5KGVjVG90YWxCbG9ja3MpXG4gIHZhciBtYXhEYXRhU2l6ZSA9IDBcbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlclV0aWwuZnJvbShiaXRCdWZmZXIuYnVmZmVyKVxuXG4gIC8vIERpdmlkZSB0aGUgYnVmZmVyIGludG8gdGhlIHJlcXVpcmVkIG51bWJlciBvZiBibG9ja3NcbiAgZm9yICh2YXIgYiA9IDA7IGIgPCBlY1RvdGFsQmxvY2tzOyBiKyspIHtcbiAgICB2YXIgZGF0YVNpemUgPSBiIDwgYmxvY2tzSW5Hcm91cDEgPyBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgOiBkYXRhQ29kZXdvcmRzSW5Hcm91cDJcblxuICAgIC8vIGV4dHJhY3QgYSBibG9jayBvZiBkYXRhIGZyb20gYnVmZmVyXG4gICAgZGNEYXRhW2JdID0gYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgZGF0YVNpemUpXG5cbiAgICAvLyBDYWxjdWxhdGUgRUMgY29kZXdvcmRzIGZvciB0aGlzIGRhdGEgYmxvY2tcbiAgICBlY0RhdGFbYl0gPSBycy5lbmNvZGUoZGNEYXRhW2JdKVxuXG4gICAgb2Zmc2V0ICs9IGRhdGFTaXplXG4gICAgbWF4RGF0YVNpemUgPSBNYXRoLm1heChtYXhEYXRhU2l6ZSwgZGF0YVNpemUpXG4gIH1cblxuICAvLyBDcmVhdGUgZmluYWwgZGF0YVxuICAvLyBJbnRlcmxlYXZlIHRoZSBkYXRhIGFuZCBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyBmcm9tIGVhY2ggYmxvY2tcbiAgdmFyIGRhdGEgPSBCdWZmZXJVdGlsLmFsbG9jKHRvdGFsQ29kZXdvcmRzKVxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBpLCByXG5cbiAgLy8gQWRkIGRhdGEgY29kZXdvcmRzXG4gIGZvciAoaSA9IDA7IGkgPCBtYXhEYXRhU2l6ZTsgaSsrKSB7XG4gICAgZm9yIChyID0gMDsgciA8IGVjVG90YWxCbG9ja3M7IHIrKykge1xuICAgICAgaWYgKGkgPCBkY0RhdGFbcl0ubGVuZ3RoKSB7XG4gICAgICAgIGRhdGFbaW5kZXgrK10gPSBkY0RhdGFbcl1baV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBcHBlZCBFQyBjb2Rld29yZHNcbiAgZm9yIChpID0gMDsgaSA8IGVjQ291bnQ7IGkrKykge1xuICAgIGZvciAociA9IDA7IHIgPCBlY1RvdGFsQmxvY2tzOyByKyspIHtcbiAgICAgIGRhdGFbaW5kZXgrK10gPSBlY0RhdGFbcl1baV1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIEJ1aWxkIFFSIENvZGUgc3ltYm9sXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkYXRhICAgICAgICAgICAgICAgICBJbnB1dCBzdHJpbmdcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtFcnJvckNvcnJldGlvbkxldmVsfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBsZXZlbFxuICogQHBhcmFtICB7TWFza1BhdHRlcm59IG1hc2tQYXR0ZXJuICAgICBNYXNrIHBhdHRlcm5cbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgc3ltYm9sIGRhdGFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3ltYm9sIChkYXRhLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pIHtcbiAgdmFyIHNlZ21lbnRzXG5cbiAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICBzZWdtZW50cyA9IFNlZ21lbnRzLmZyb21BcnJheShkYXRhKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHZhciBlc3RpbWF0ZWRWZXJzaW9uID0gdmVyc2lvblxuXG4gICAgaWYgKCFlc3RpbWF0ZWRWZXJzaW9uKSB7XG4gICAgICB2YXIgcmF3U2VnbWVudHMgPSBTZWdtZW50cy5yYXdTcGxpdChkYXRhKVxuXG4gICAgICAvLyBFc3RpbWF0ZSBiZXN0IHZlcnNpb24gdGhhdCBjYW4gY29udGFpbiByYXcgc3BsaXR0ZWQgc2VnbWVudHNcbiAgICAgIGVzdGltYXRlZFZlcnNpb24gPSBWZXJzaW9uLmdldEJlc3RWZXJzaW9uRm9yRGF0YShyYXdTZWdtZW50cyxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG4gICAgfVxuXG4gICAgLy8gQnVpbGQgb3B0aW1pemVkIHNlZ21lbnRzXG4gICAgLy8gSWYgZXN0aW1hdGVkIHZlcnNpb24gaXMgdW5kZWZpbmVkLCB0cnkgd2l0aCB0aGUgaGlnaGVzdCB2ZXJzaW9uXG4gICAgc2VnbWVudHMgPSBTZWdtZW50cy5mcm9tU3RyaW5nKGRhdGEsIGVzdGltYXRlZFZlcnNpb24gfHwgNDApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRhdGEnKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBtaW4gdmVyc2lvbiB0aGF0IGNhbiBjb250YWluIGRhdGFcbiAgdmFyIGJlc3RWZXJzaW9uID0gVmVyc2lvbi5nZXRCZXN0VmVyc2lvbkZvckRhdGEoc2VnbWVudHMsXG4gICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbClcblxuICAvLyBJZiBubyB2ZXJzaW9uIGlzIGZvdW5kLCBkYXRhIGNhbm5vdCBiZSBzdG9yZWRcbiAgaWYgKCFiZXN0VmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFtb3VudCBvZiBkYXRhIGlzIHRvbyBiaWcgdG8gYmUgc3RvcmVkIGluIGEgUVIgQ29kZScpXG4gIH1cblxuICAvLyBJZiBub3Qgc3BlY2lmaWVkLCB1c2UgbWluIHZlcnNpb24gYXMgZGVmYXVsdFxuICBpZiAoIXZlcnNpb24pIHtcbiAgICB2ZXJzaW9uID0gYmVzdFZlcnNpb25cblxuICAvLyBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIHZlcnNpb24gY2FuIGNvbnRhaW4gdGhlIGRhdGFcbiAgfSBlbHNlIGlmICh2ZXJzaW9uIDwgYmVzdFZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1xcbicgK1xuICAgICAgJ1RoZSBjaG9zZW4gUVIgQ29kZSB2ZXJzaW9uIGNhbm5vdCBjb250YWluIHRoaXMgYW1vdW50IG9mIGRhdGEuXFxuJyArXG4gICAgICAnTWluaW11bSB2ZXJzaW9uIHJlcXVpcmVkIHRvIHN0b3JlIGN1cnJlbnQgZGF0YSBpczogJyArIGJlc3RWZXJzaW9uICsgJy5cXG4nXG4gICAgKVxuICB9XG5cbiAgdmFyIGRhdGFCaXRzID0gY3JlYXRlRGF0YSh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgc2VnbWVudHMpXG5cbiAgLy8gQWxsb2NhdGUgbWF0cml4IGJ1ZmZlclxuICB2YXIgbW9kdWxlQ291bnQgPSBVdGlscy5nZXRTeW1ib2xTaXplKHZlcnNpb24pXG4gIHZhciBtb2R1bGVzID0gbmV3IEJpdE1hdHJpeChtb2R1bGVDb3VudClcblxuICAvLyBBZGQgZnVuY3Rpb24gbW9kdWxlc1xuICBzZXR1cEZpbmRlclBhdHRlcm4obW9kdWxlcywgdmVyc2lvbilcbiAgc2V0dXBUaW1pbmdQYXR0ZXJuKG1vZHVsZXMpXG4gIHNldHVwQWxpZ25tZW50UGF0dGVybihtb2R1bGVzLCB2ZXJzaW9uKVxuXG4gIC8vIEFkZCB0ZW1wb3JhcnkgZHVtbXkgYml0cyBmb3IgZm9ybWF0IGluZm8ganVzdCB0byBzZXQgdGhlbSBhcyByZXNlcnZlZC5cbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudCB0aGVzZSBiaXRzIGZyb20gYmVpbmcgbWFza2VkIGJ5IHtAbGluayBNYXNrUGF0dGVybi5hcHBseU1hc2t9XG4gIC8vIHNpbmNlIHRoZSBtYXNraW5nIG9wZXJhdGlvbiBtdXN0IGJlIHBlcmZvcm1lZCBvbmx5IG9uIHRoZSBlbmNvZGluZyByZWdpb24uXG4gIC8vIFRoZXNlIGJsb2NrcyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggY29ycmVjdCB2YWx1ZXMgbGF0ZXIgaW4gY29kZS5cbiAgc2V0dXBGb3JtYXRJbmZvKG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsLCAwKVxuXG4gIGlmICh2ZXJzaW9uID49IDcpIHtcbiAgICBzZXR1cFZlcnNpb25JbmZvKG1vZHVsZXMsIHZlcnNpb24pXG4gIH1cblxuICAvLyBBZGQgZGF0YSBjb2Rld29yZHNcbiAgc2V0dXBEYXRhKG1vZHVsZXMsIGRhdGFCaXRzKVxuXG4gIGlmIChpc05hTihtYXNrUGF0dGVybikpIHtcbiAgICAvLyBGaW5kIGJlc3QgbWFzayBwYXR0ZXJuXG4gICAgbWFza1BhdHRlcm4gPSBNYXNrUGF0dGVybi5nZXRCZXN0TWFzayhtb2R1bGVzLFxuICAgICAgc2V0dXBGb3JtYXRJbmZvLmJpbmQobnVsbCwgbW9kdWxlcywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpKVxuICB9XG5cbiAgLy8gQXBwbHkgbWFzayBwYXR0ZXJuXG4gIE1hc2tQYXR0ZXJuLmFwcGx5TWFzayhtYXNrUGF0dGVybiwgbW9kdWxlcylcblxuICAvLyBSZXBsYWNlIGZvcm1hdCBpbmZvIGJpdHMgd2l0aCBjb3JyZWN0IHZhbHVlc1xuICBzZXR1cEZvcm1hdEluZm8obW9kdWxlcywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKVxuXG4gIHJldHVybiB7XG4gICAgbW9kdWxlczogbW9kdWxlcyxcbiAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgIGVycm9yQ29ycmVjdGlvbkxldmVsOiBlcnJvckNvcnJlY3Rpb25MZXZlbCxcbiAgICBtYXNrUGF0dGVybjogbWFza1BhdHRlcm4sXG4gICAgc2VnbWVudHM6IHNlZ21lbnRzXG4gIH1cbn1cblxuLyoqXG4gKiBRUiBDb2RlXG4gKlxuICogQHBhcmFtIHtTdHJpbmcgfCBBcnJheX0gZGF0YSAgICAgICAgICAgICAgICAgSW5wdXQgZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgICAgICAgICAgICAgICAgICAgICAgT3B0aW9uYWwgY29uZmlndXJhdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLnZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy50b1NKSVNGdW5jICAgICAgICAgSGVscGVyIGZ1bmMgdG8gY29udmVydCB1dGY4IHRvIHNqaXNcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUgKGRhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyB8fCBkYXRhID09PSAnJykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gaW5wdXQgdGV4dCcpXG4gIH1cblxuICB2YXIgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFQ0xldmVsLk1cbiAgdmFyIHZlcnNpb25cbiAgdmFyIG1hc2tcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gVXNlIGhpZ2hlciBlcnJvciBjb3JyZWN0aW9uIGxldmVsIGFzIGRlZmF1bHRcbiAgICBlcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVDTGV2ZWwuZnJvbShvcHRpb25zLmVycm9yQ29ycmVjdGlvbkxldmVsLCBFQ0xldmVsLk0pXG4gICAgdmVyc2lvbiA9IFZlcnNpb24uZnJvbShvcHRpb25zLnZlcnNpb24pXG4gICAgbWFzayA9IE1hc2tQYXR0ZXJuLmZyb20ob3B0aW9ucy5tYXNrUGF0dGVybilcblxuICAgIGlmIChvcHRpb25zLnRvU0pJU0Z1bmMpIHtcbiAgICAgIFV0aWxzLnNldFRvU0pJU0Z1bmN0aW9uKG9wdGlvbnMudG9TSklTRnVuYylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlU3ltYm9sKGRhdGEsIHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrKVxufVxuIiwidmFyIEJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuLi91dGlscy9idWZmZXInKVxudmFyIFBvbHlub21pYWwgPSByZXF1aXJlKCcuL3BvbHlub21pYWwnKVxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlclxuXG5mdW5jdGlvbiBSZWVkU29sb21vbkVuY29kZXIgKGRlZ3JlZSkge1xuICB0aGlzLmdlblBvbHkgPSB1bmRlZmluZWRcbiAgdGhpcy5kZWdyZWUgPSBkZWdyZWVcblxuICBpZiAodGhpcy5kZWdyZWUpIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLmRlZ3JlZSlcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBlbmNvZGVyLlxuICogVGhlIGlucHV0IHBhcmFtIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWdyZWVcbiAqL1xuUmVlZFNvbG9tb25FbmNvZGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSAoZGVncmVlKSB7XG4gIC8vIGNyZWF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICB0aGlzLmRlZ3JlZSA9IGRlZ3JlZVxuICB0aGlzLmdlblBvbHkgPSBQb2x5bm9taWFsLmdlbmVyYXRlRUNQb2x5bm9taWFsKHRoaXMuZGVncmVlKVxufVxuXG4vKipcbiAqIEVuY29kZXMgYSBjaHVuayBvZiBkYXRhXG4gKlxuICogQHBhcmFtICB7QnVmZmVyfSBkYXRhIEJ1ZmZlciBjb250YWluaW5nIGlucHV0IGRhdGFcbiAqIEByZXR1cm4ge0J1ZmZlcn0gICAgICBCdWZmZXIgY29udGFpbmluZyBlbmNvZGVkIGRhdGFcbiAqL1xuUmVlZFNvbG9tb25FbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUgKGRhdGEpIHtcbiAgaWYgKCF0aGlzLmdlblBvbHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VuY29kZXIgbm90IGluaXRpYWxpemVkJylcbiAgfVxuXG4gIC8vIENhbGN1bGF0ZSBFQyBmb3IgdGhpcyBkYXRhIGJsb2NrXG4gIC8vIGV4dGVuZHMgZGF0YSBzaXplIHRvIGRhdGErZ2VuUG9seSBzaXplXG4gIHZhciBwYWQgPSBCdWZmZXJVdGlsLmFsbG9jKHRoaXMuZGVncmVlKVxuICB2YXIgcGFkZGVkRGF0YSA9IEJ1ZmZlci5jb25jYXQoW2RhdGEsIHBhZF0sIGRhdGEubGVuZ3RoICsgdGhpcy5kZWdyZWUpXG5cbiAgLy8gVGhlIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzIGFyZSB0aGUgcmVtYWluZGVyIGFmdGVyIGRpdmlkaW5nIHRoZSBkYXRhIGNvZGV3b3Jkc1xuICAvLyBieSBhIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gIHZhciByZW1haW5kZXIgPSBQb2x5bm9taWFsLm1vZChwYWRkZWREYXRhLCB0aGlzLmdlblBvbHkpXG5cbiAgLy8gcmV0dXJuIEVDIGRhdGEgYmxvY2tzIChsYXN0IG4gYnl0ZSwgd2hlcmUgbiBpcyB0aGUgZGVncmVlIG9mIGdlblBvbHkpXG4gIC8vIElmIGNvZWZmaWNpZW50cyBudW1iZXIgaW4gcmVtYWluZGVyIGFyZSBsZXNzIHRoYW4gZ2VuUG9seSBkZWdyZWUsXG4gIC8vIHBhZCB3aXRoIDBzIHRvIHRoZSBsZWZ0IHRvIHJlYWNoIHRoZSBuZWVkZWQgbnVtYmVyIG9mIGNvZWZmaWNpZW50c1xuICB2YXIgc3RhcnQgPSB0aGlzLmRlZ3JlZSAtIHJlbWFpbmRlci5sZW5ndGhcbiAgaWYgKHN0YXJ0ID4gMCkge1xuICAgIHZhciBidWZmID0gQnVmZmVyVXRpbC5hbGxvYyh0aGlzLmRlZ3JlZSlcbiAgICByZW1haW5kZXIuY29weShidWZmLCBzdGFydClcblxuICAgIHJldHVybiBidWZmXG4gIH1cblxuICByZXR1cm4gcmVtYWluZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVlZFNvbG9tb25FbmNvZGVyXG4iLCJ2YXIgbnVtZXJpYyA9ICdbMC05XSsnXG52YXIgYWxwaGFudW1lcmljID0gJ1tBLVogJCUqK1xcXFwtLi86XSsnXG52YXIga2FuamkgPSAnKD86W3UzMDAwLXUzMDNGXXxbdTMwNDAtdTMwOUZdfFt1MzBBMC11MzBGRl18JyArXG4gICdbdUZGMDAtdUZGRUZdfFt1NEUwMC11OUZBRl18W3UyNjA1LXUyNjA2XXxbdTIxOTAtdTIxOTVdfHUyMDNCfCcgK1xuICAnW3UyMDEwdTIwMTV1MjAxOHUyMDE5dTIwMjV1MjAyNnUyMDFDdTIwMUR1MjIyNXUyMjYwXXwnICtcbiAgJ1t1MDM5MS11MDQ1MV18W3UwMEE3dTAwQTh1MDBCMXUwMEI0dTAwRDd1MDBGN10pKydcbmthbmppID0ga2FuamkucmVwbGFjZSgvdS9nLCAnXFxcXHUnKVxuXG52YXIgYnl0ZSA9ICcoPzooPyFbQS1aMC05ICQlKitcXFxcLS4vOl18JyArIGthbmppICsgJykoPzoufFtcXHJcXG5dKSkrJ1xuXG5leHBvcnRzLktBTkpJID0gbmV3IFJlZ0V4cChrYW5qaSwgJ2cnKVxuZXhwb3J0cy5CWVRFX0tBTkpJID0gbmV3IFJlZ0V4cCgnW15BLVowLTkgJCUqK1xcXFwtLi86XSsnLCAnZycpXG5leHBvcnRzLkJZVEUgPSBuZXcgUmVnRXhwKGJ5dGUsICdnJylcbmV4cG9ydHMuTlVNRVJJQyA9IG5ldyBSZWdFeHAobnVtZXJpYywgJ2cnKVxuZXhwb3J0cy5BTFBIQU5VTUVSSUMgPSBuZXcgUmVnRXhwKGFscGhhbnVtZXJpYywgJ2cnKVxuXG52YXIgVEVTVF9LQU5KSSA9IG5ldyBSZWdFeHAoJ14nICsga2FuamkgKyAnJCcpXG52YXIgVEVTVF9OVU1FUklDID0gbmV3IFJlZ0V4cCgnXicgKyBudW1lcmljICsgJyQnKVxudmFyIFRFU1RfQUxQSEFOVU1FUklDID0gbmV3IFJlZ0V4cCgnXltBLVowLTkgJCUqK1xcXFwtLi86XSskJylcblxuZXhwb3J0cy50ZXN0S2FuamkgPSBmdW5jdGlvbiB0ZXN0S2FuamkgKHN0cikge1xuICByZXR1cm4gVEVTVF9LQU5KSS50ZXN0KHN0cilcbn1cblxuZXhwb3J0cy50ZXN0TnVtZXJpYyA9IGZ1bmN0aW9uIHRlc3ROdW1lcmljIChzdHIpIHtcbiAgcmV0dXJuIFRFU1RfTlVNRVJJQy50ZXN0KHN0cilcbn1cblxuZXhwb3J0cy50ZXN0QWxwaGFudW1lcmljID0gZnVuY3Rpb24gdGVzdEFscGhhbnVtZXJpYyAoc3RyKSB7XG4gIHJldHVybiBURVNUX0FMUEhBTlVNRVJJQy50ZXN0KHN0cilcbn1cbiIsInZhciBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbnZhciBOdW1lcmljRGF0YSA9IHJlcXVpcmUoJy4vbnVtZXJpYy1kYXRhJylcbnZhciBBbHBoYW51bWVyaWNEYXRhID0gcmVxdWlyZSgnLi9hbHBoYW51bWVyaWMtZGF0YScpXG52YXIgQnl0ZURhdGEgPSByZXF1aXJlKCcuL2J5dGUtZGF0YScpXG52YXIgS2FuamlEYXRhID0gcmVxdWlyZSgnLi9rYW5qaS1kYXRhJylcbnZhciBSZWdleCA9IHJlcXVpcmUoJy4vcmVnZXgnKVxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG52YXIgZGlqa3N0cmEgPSByZXF1aXJlKCdkaWprc3RyYWpzJylcblxuLyoqXG4gKiBSZXR1cm5zIFVURjggYnl0ZSBsZW5ndGhcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge051bWJlcn0gICAgIE51bWJlciBvZiBieXRlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cmluZ0J5dGVMZW5ndGggKHN0cikge1xuICByZXR1cm4gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpLmxlbmd0aFxufVxuXG4vKipcbiAqIEdldCBhIGxpc3Qgb2Ygc2VnbWVudHMgb2YgdGhlIHNwZWNpZmllZCBtb2RlXG4gKiBmcm9tIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtICB7TW9kZX0gICBtb2RlIFNlZ21lbnQgbW9kZVxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgIFN0cmluZyB0byBwcm9jZXNzXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICovXG5mdW5jdGlvbiBnZXRTZWdtZW50cyAocmVnZXgsIG1vZGUsIHN0cikge1xuICB2YXIgc2VnbWVudHMgPSBbXVxuICB2YXIgcmVzdWx0XG5cbiAgd2hpbGUgKChyZXN1bHQgPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgc2VnbWVudHMucHVzaCh7XG4gICAgICBkYXRhOiByZXN1bHRbMF0sXG4gICAgICBpbmRleDogcmVzdWx0LmluZGV4LFxuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIGxlbmd0aDogcmVzdWx0WzBdLmxlbmd0aFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc2VnbWVudHNcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBhIHNlcmllcyBvZiBzZWdtZW50cyB3aXRoIHRoZSBhcHByb3ByaWF0ZVxuICogbW9kZXMgZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVN0ciBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIGdldFNlZ21lbnRzRnJvbVN0cmluZyAoZGF0YVN0cikge1xuICB2YXIgbnVtU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4Lk5VTUVSSUMsIE1vZGUuTlVNRVJJQywgZGF0YVN0cilcbiAgdmFyIGFscGhhTnVtU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4LkFMUEhBTlVNRVJJQywgTW9kZS5BTFBIQU5VTUVSSUMsIGRhdGFTdHIpXG4gIHZhciBieXRlU2Vnc1xuICB2YXIga2FuamlTZWdzXG5cbiAgaWYgKFV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKSB7XG4gICAgYnl0ZVNlZ3MgPSBnZXRTZWdtZW50cyhSZWdleC5CWVRFLCBNb2RlLkJZVEUsIGRhdGFTdHIpXG4gICAga2FuamlTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguS0FOSkksIE1vZGUuS0FOSkksIGRhdGFTdHIpXG4gIH0gZWxzZSB7XG4gICAgYnl0ZVNlZ3MgPSBnZXRTZWdtZW50cyhSZWdleC5CWVRFX0tBTkpJLCBNb2RlLkJZVEUsIGRhdGFTdHIpXG4gICAga2FuamlTZWdzID0gW11cbiAgfVxuXG4gIHZhciBzZWdzID0gbnVtU2Vncy5jb25jYXQoYWxwaGFOdW1TZWdzLCBieXRlU2Vncywga2FuamlTZWdzKVxuXG4gIHJldHVybiBzZWdzXG4gICAgLnNvcnQoZnVuY3Rpb24gKHMxLCBzMikge1xuICAgICAgcmV0dXJuIHMxLmluZGV4IC0gczIuaW5kZXhcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogb2JqLmRhdGEsXG4gICAgICAgIG1vZGU6IG9iai5tb2RlLFxuICAgICAgICBsZW5ndGg6IG9iai5sZW5ndGhcbiAgICAgIH1cbiAgICB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgaG93IG1hbnkgYml0cyBhcmUgbmVlZGVkIHRvIGVuY29kZSBhIHN0cmluZyBvZlxuICogc3BlY2lmaWVkIGxlbmd0aCB3aXRoIHRoZSBzcGVjaWZpZWQgbW9kZVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gbGVuZ3RoIFN0cmluZyBsZW5ndGhcbiAqIEBwYXJhbSAge01vZGV9IG1vZGUgICAgIFNlZ21lbnQgbW9kZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgQml0IGxlbmd0aFxuICovXG5mdW5jdGlvbiBnZXRTZWdtZW50Qml0c0xlbmd0aCAobGVuZ3RoLCBtb2RlKSB7XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgcmV0dXJuIE51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gQWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gS2FuamlEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICAgIGNhc2UgTW9kZS5CWVRFOlxuICAgICAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2VzIGFkamFjZW50IHNlZ21lbnRzIHdoaWNoIGhhdmUgdGhlIHNhbWUgbW9kZVxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTZWdtZW50cyAoc2Vncykge1xuICByZXR1cm4gc2Vncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgIHZhciBwcmV2U2VnID0gYWNjLmxlbmd0aCAtIDEgPj0gMCA/IGFjY1thY2MubGVuZ3RoIC0gMV0gOiBudWxsXG4gICAgaWYgKHByZXZTZWcgJiYgcHJldlNlZy5tb2RlID09PSBjdXJyLm1vZGUpIHtcbiAgICAgIGFjY1thY2MubGVuZ3RoIC0gMV0uZGF0YSArPSBjdXJyLmRhdGFcbiAgICAgIHJldHVybiBhY2NcbiAgICB9XG5cbiAgICBhY2MucHVzaChjdXJyKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbGlzdCBvZiBhbGwgcG9zc2libGUgbm9kZXMgY29tYmluYXRpb24gd2hpY2hcbiAqIHdpbGwgYmUgdXNlZCB0byBidWlsZCBhIHNlZ21lbnRzIGdyYXBoLlxuICpcbiAqIE5vZGVzIGFyZSBkaXZpZGVkIGJ5IGdyb3Vwcy4gRWFjaCBncm91cCB3aWxsIGNvbnRhaW4gYSBsaXN0IG9mIGFsbCB0aGUgbW9kZXNcbiAqIGluIHdoaWNoIGlzIHBvc3NpYmxlIHRvIGVuY29kZSB0aGUgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBGb3IgZXhhbXBsZSB0aGUgdGV4dCAnMTIzNDUnIGNhbiBiZSBlbmNvZGVkIGFzIE51bWVyaWMsIEFscGhhbnVtZXJpYyBvciBCeXRlLlxuICogVGhlIGdyb3VwIGZvciAnMTIzNDUnIHdpbGwgY29udGFpbiB0aGVuIDMgb2JqZWN0cywgb25lIGZvciBlYWNoXG4gKiBwb3NzaWJsZSBlbmNvZGluZyBtb2RlLlxuICpcbiAqIEVhY2ggbm9kZSByZXByZXNlbnRzIGEgcG9zc2libGUgc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gc2VncyBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTm9kZXMgKHNlZ3MpIHtcbiAgdmFyIG5vZGVzID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNlZyA9IHNlZ3NbaV1cblxuICAgIHN3aXRjaCAoc2VnLm1vZGUpIHtcbiAgICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogTW9kZS5BTFBIQU5VTUVSSUMsIGxlbmd0aDogc2VnLmxlbmd0aCB9LFxuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQllURSwgbGVuZ3RoOiBzZWcubGVuZ3RoIH1cbiAgICAgICAgXSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogc2VnLmxlbmd0aCB9XG4gICAgICAgIF0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogZ2V0U3RyaW5nQnl0ZUxlbmd0aChzZWcuZGF0YSkgfVxuICAgICAgICBdKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgICAgIG5vZGVzLnB1c2goW1xuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQllURSwgbGVuZ3RoOiBnZXRTdHJpbmdCeXRlTGVuZ3RoKHNlZy5kYXRhKSB9XG4gICAgICAgIF0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVzXG59XG5cbi8qKlxuICogQnVpbGRzIGEgZ3JhcGggZnJvbSBhIGxpc3Qgb2Ygbm9kZXMuXG4gKiBBbGwgc2VnbWVudHMgaW4gZWFjaCBub2RlIGdyb3VwIHdpbGwgYmUgY29ubmVjdGVkIHdpdGggYWxsIHRoZSBzZWdtZW50cyBvZlxuICogdGhlIG5leHQgZ3JvdXAgYW5kIHNvIG9uLlxuICpcbiAqIEF0IGVhY2ggY29ubmVjdGlvbiB3aWxsIGJlIGFzc2lnbmVkIGEgd2VpZ2h0IGRlcGVuZGluZyBvbiB0aGVcbiAqIHNlZ21lbnQncyBieXRlIGxlbmd0aC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gbm9kZXMgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIEdyYXBoIG9mIGFsbCBwb3NzaWJsZSBzZWdtZW50c1xuICovXG5mdW5jdGlvbiBidWlsZEdyYXBoIChub2RlcywgdmVyc2lvbikge1xuICB2YXIgdGFibGUgPSB7fVxuICB2YXIgZ3JhcGggPSB7J3N0YXJ0Jzoge319XG4gIHZhciBwcmV2Tm9kZUlkcyA9IFsnc3RhcnQnXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZUdyb3VwID0gbm9kZXNbaV1cbiAgICB2YXIgY3VycmVudE5vZGVJZHMgPSBbXVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBub2RlR3JvdXAubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBub2RlID0gbm9kZUdyb3VwW2pdXG4gICAgICB2YXIga2V5ID0gJycgKyBpICsgalxuXG4gICAgICBjdXJyZW50Tm9kZUlkcy5wdXNoKGtleSlcbiAgICAgIHRhYmxlW2tleV0gPSB7IG5vZGU6IG5vZGUsIGxhc3RDb3VudDogMCB9XG4gICAgICBncmFwaFtrZXldID0ge31cblxuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBwcmV2Tm9kZUlkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgcHJldk5vZGVJZCA9IHByZXZOb2RlSWRzW25dXG5cbiAgICAgICAgaWYgKHRhYmxlW3ByZXZOb2RlSWRdICYmIHRhYmxlW3ByZXZOb2RlSWRdLm5vZGUubW9kZSA9PT0gbm9kZS5tb2RlKSB7XG4gICAgICAgICAgZ3JhcGhbcHJldk5vZGVJZF1ba2V5XSA9XG4gICAgICAgICAgICBnZXRTZWdtZW50Qml0c0xlbmd0aCh0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQgKyBub2RlLmxlbmd0aCwgbm9kZS5tb2RlKSAtXG4gICAgICAgICAgICBnZXRTZWdtZW50Qml0c0xlbmd0aCh0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQsIG5vZGUubW9kZSlcblxuICAgICAgICAgIHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCArPSBub2RlLmxlbmd0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0YWJsZVtwcmV2Tm9kZUlkXSkgdGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ID0gbm9kZS5sZW5ndGhcblxuICAgICAgICAgIGdyYXBoW3ByZXZOb2RlSWRdW2tleV0gPSBnZXRTZWdtZW50Qml0c0xlbmd0aChub2RlLmxlbmd0aCwgbm9kZS5tb2RlKSArXG4gICAgICAgICAgICA0ICsgTW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3Iobm9kZS5tb2RlLCB2ZXJzaW9uKSAvLyBzd2l0Y2ggY29zdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldk5vZGVJZHMgPSBjdXJyZW50Tm9kZUlkc1xuICB9XG5cbiAgZm9yIChuID0gMDsgbiA8IHByZXZOb2RlSWRzLmxlbmd0aDsgbisrKSB7XG4gICAgZ3JhcGhbcHJldk5vZGVJZHNbbl1dWydlbmQnXSA9IDBcbiAgfVxuXG4gIHJldHVybiB7IG1hcDogZ3JhcGgsIHRhYmxlOiB0YWJsZSB9XG59XG5cbi8qKlxuICogQnVpbGRzIGEgc2VnbWVudCBmcm9tIGEgc3BlY2lmaWVkIGRhdGEgYW5kIG1vZGUuXG4gKiBJZiBhIG1vZGUgaXMgbm90IHNwZWNpZmllZCwgdGhlIG1vcmUgc3VpdGFibGUgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICBJbnB1dCBkYXRhXG4gKiBAcGFyYW0gIHtNb2RlIHwgU3RyaW5nfSBtb2Rlc0hpbnQgRGF0YSBtb2RlXG4gKiBAcmV0dXJuIHtTZWdtZW50fSAgICAgICAgICAgICAgICAgU2VnbWVudFxuICovXG5mdW5jdGlvbiBidWlsZFNpbmdsZVNlZ21lbnQgKGRhdGEsIG1vZGVzSGludCkge1xuICB2YXIgbW9kZVxuICB2YXIgYmVzdE1vZGUgPSBNb2RlLmdldEJlc3RNb2RlRm9yRGF0YShkYXRhKVxuXG4gIG1vZGUgPSBNb2RlLmZyb20obW9kZXNIaW50LCBiZXN0TW9kZSlcblxuICAvLyBNYWtlIHN1cmUgZGF0YSBjYW4gYmUgZW5jb2RlZFxuICBpZiAobW9kZSAhPT0gTW9kZS5CWVRFICYmIG1vZGUuYml0IDwgYmVzdE1vZGUuYml0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBkYXRhICsgJ1wiJyArXG4gICAgICAnIGNhbm5vdCBiZSBlbmNvZGVkIHdpdGggbW9kZSAnICsgTW9kZS50b1N0cmluZyhtb2RlKSArXG4gICAgICAnLlxcbiBTdWdnZXN0ZWQgbW9kZSBpczogJyArIE1vZGUudG9TdHJpbmcoYmVzdE1vZGUpKVxuICB9XG5cbiAgLy8gVXNlIE1vZGUuQllURSBpZiBLYW5qaSBzdXBwb3J0IGlzIGRpc2FibGVkXG4gIGlmIChtb2RlID09PSBNb2RlLktBTkpJICYmICFVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSkge1xuICAgIG1vZGUgPSBNb2RlLkJZVEVcbiAgfVxuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgcmV0dXJuIG5ldyBOdW1lcmljRGF0YShkYXRhKVxuXG4gICAgY2FzZSBNb2RlLkFMUEhBTlVNRVJJQzpcbiAgICAgIHJldHVybiBuZXcgQWxwaGFudW1lcmljRGF0YShkYXRhKVxuXG4gICAgY2FzZSBNb2RlLktBTkpJOlxuICAgICAgcmV0dXJuIG5ldyBLYW5qaURhdGEoZGF0YSlcblxuICAgIGNhc2UgTW9kZS5CWVRFOlxuICAgICAgcmV0dXJuIG5ldyBCeXRlRGF0YShkYXRhKVxuICB9XG59XG5cbi8qKlxuICogQnVpbGRzIGEgbGlzdCBvZiBzZWdtZW50cyBmcm9tIGFuIGFycmF5LlxuICogQXJyYXkgY2FuIGNvbnRhaW4gU3RyaW5ncyBvciBPYmplY3RzIHdpdGggc2VnbWVudCdzIGluZm8uXG4gKlxuICogRm9yIGVhY2ggaXRlbSB3aGljaCBpcyBhIHN0cmluZywgd2lsbCBiZSBnZW5lcmF0ZWQgYSBzZWdtZW50IHdpdGggdGhlIGdpdmVuXG4gKiBzdHJpbmcgYW5kIHRoZSBtb3JlIGFwcHJvcHJpYXRlIGVuY29kaW5nIG1vZGUuXG4gKlxuICogRm9yIGVhY2ggaXRlbSB3aGljaCBpcyBhbiBvYmplY3QsIHdpbGwgYmUgZ2VuZXJhdGVkIGEgc2VnbWVudCB3aXRoIHRoZSBnaXZlblxuICogZGF0YSBhbmQgbW9kZS5cbiAqIE9iamVjdHMgbXVzdCBjb250YWluIGF0IGxlYXN0IHRoZSBwcm9wZXJ0eSBcImRhdGFcIi5cbiAqIElmIHByb3BlcnR5IFwibW9kZVwiIGlzIG5vdCBwcmVzZW50LCB0aGUgbW9yZSBzdWl0YWJsZSBtb2RlIHdpbGwgYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgQXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBTZWdtZW50c1xuICovXG5leHBvcnRzLmZyb21BcnJheSA9IGZ1bmN0aW9uIGZyb21BcnJheSAoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzZWcpIHtcbiAgICBpZiAodHlwZW9mIHNlZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFjYy5wdXNoKGJ1aWxkU2luZ2xlU2VnbWVudChzZWcsIG51bGwpKVxuICAgIH0gZWxzZSBpZiAoc2VnLmRhdGEpIHtcbiAgICAgIGFjYy5wdXNoKGJ1aWxkU2luZ2xlU2VnbWVudChzZWcuZGF0YSwgc2VnLm1vZGUpKVxuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbi8qKlxuICogQnVpbGRzIGFuIG9wdGltaXplZCBzZXF1ZW5jZSBvZiBzZWdtZW50cyBmcm9tIGEgc3RyaW5nLFxuICogd2hpY2ggd2lsbCBwcm9kdWNlIHRoZSBzaG9ydGVzdCBwb3NzaWJsZSBiaXRzdHJlYW0uXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkYXRhICAgIElucHV0IHN0cmluZ1xuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIHNlZ21lbnRzXG4gKi9cbmV4cG9ydHMuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZyb21TdHJpbmcgKGRhdGEsIHZlcnNpb24pIHtcbiAgdmFyIHNlZ3MgPSBnZXRTZWdtZW50c0Zyb21TdHJpbmcoZGF0YSwgVXRpbHMuaXNLYW5qaU1vZGVFbmFibGVkKCkpXG5cbiAgdmFyIG5vZGVzID0gYnVpbGROb2RlcyhzZWdzKVxuICB2YXIgZ3JhcGggPSBidWlsZEdyYXBoKG5vZGVzLCB2ZXJzaW9uKVxuICB2YXIgcGF0aCA9IGRpamtzdHJhLmZpbmRfcGF0aChncmFwaC5tYXAsICdzdGFydCcsICdlbmQnKVxuXG4gIHZhciBvcHRpbWl6ZWRTZWdzID0gW11cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIG9wdGltaXplZFNlZ3MucHVzaChncmFwaC50YWJsZVtwYXRoW2ldXS5ub2RlKVxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KG1lcmdlU2VnbWVudHMob3B0aW1pemVkU2VncykpXG59XG5cbi8qKlxuICogU3BsaXRzIGEgc3RyaW5nIGluIHZhcmlvdXMgc2VnbWVudHMgd2l0aCB0aGUgbW9kZXMgd2hpY2hcbiAqIGJlc3QgcmVwcmVzZW50IHRoZWlyIGNvbnRlbnQuXG4gKiBUaGUgcHJvZHVjZWQgc2VnbWVudHMgYXJlIGZhciBmcm9tIGJlaW5nIG9wdGltaXplZC5cbiAqIFRoZSBvdXRwdXQgb2YgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgdG8gZXN0aW1hdGUgYSBRUiBDb2RlIHZlcnNpb25cbiAqIHdoaWNoIG1heSBjb250YWluIHRoZSBkYXRhLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZGF0YSBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBzZWdtZW50c1xuICovXG5leHBvcnRzLnJhd1NwbGl0ID0gZnVuY3Rpb24gcmF3U3BsaXQgKGRhdGEpIHtcbiAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KFxuICAgIGdldFNlZ21lbnRzRnJvbVN0cmluZyhkYXRhLCBVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSlcbiAgKVxufVxuIiwidmFyIHRvU0pJU0Z1bmN0aW9uXG52YXIgQ09ERVdPUkRTX0NPVU5UID0gW1xuICAwLCAvLyBOb3QgdXNlZFxuICAyNiwgNDQsIDcwLCAxMDAsIDEzNCwgMTcyLCAxOTYsIDI0MiwgMjkyLCAzNDYsXG4gIDQwNCwgNDY2LCA1MzIsIDU4MSwgNjU1LCA3MzMsIDgxNSwgOTAxLCA5OTEsIDEwODUsXG4gIDExNTYsIDEyNTgsIDEzNjQsIDE0NzQsIDE1ODgsIDE3MDYsIDE4MjgsIDE5MjEsIDIwNTEsIDIxODUsXG4gIDIzMjMsIDI0NjUsIDI2MTEsIDI3NjEsIDI4NzYsIDMwMzQsIDMxOTYsIDMzNjIsIDM1MzIsIDM3MDZcbl1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBRUiBDb2RlIHNpemUgZm9yIHRoZSBzcGVjaWZpZWQgdmVyc2lvblxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICBzaXplIG9mIFFSIGNvZGVcbiAqL1xuZXhwb3J0cy5nZXRTeW1ib2xTaXplID0gZnVuY3Rpb24gZ2V0U3ltYm9sU2l6ZSAodmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pIHRocm93IG5ldyBFcnJvcignXCJ2ZXJzaW9uXCIgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJylcbiAgaWYgKHZlcnNpb24gPCAxIHx8IHZlcnNpb24gPiA0MCkgdGhyb3cgbmV3IEVycm9yKCdcInZlcnNpb25cIiBzaG91bGQgYmUgaW4gcmFuZ2UgZnJvbSAxIHRvIDQwJylcbiAgcmV0dXJuIHZlcnNpb24gKiA0ICsgMTdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgY29kZXdvcmRzIHVzZWQgdG8gc3RvcmUgZGF0YSBhbmQgRUMgaW5mb3JtYXRpb24uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIERhdGEgbGVuZ3RoIGluIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRTeW1ib2xUb3RhbENvZGV3b3JkcyA9IGZ1bmN0aW9uIGdldFN5bWJvbFRvdGFsQ29kZXdvcmRzICh2ZXJzaW9uKSB7XG4gIHJldHVybiBDT0RFV09SRFNfQ09VTlRbdmVyc2lvbl1cbn1cblxuLyoqXG4gKiBFbmNvZGUgZGF0YSB3aXRoIEJvc2UtQ2hhdWRodXJpLUhvY3F1ZW5naGVtXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBkYXRhIFZhbHVlIHRvIGVuY29kZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgIEVuY29kZWQgdmFsdWVcbiAqL1xuZXhwb3J0cy5nZXRCQ0hEaWdpdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBkaWdpdCA9IDBcblxuICB3aGlsZSAoZGF0YSAhPT0gMCkge1xuICAgIGRpZ2l0KytcbiAgICBkYXRhID4+Pj0gMVxuICB9XG5cbiAgcmV0dXJuIGRpZ2l0XG59XG5cbmV4cG9ydHMuc2V0VG9TSklTRnVuY3Rpb24gPSBmdW5jdGlvbiBzZXRUb1NKSVNGdW5jdGlvbiAoZikge1xuICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1widG9TSklTRnVuY1wiIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uLicpXG4gIH1cblxuICB0b1NKSVNGdW5jdGlvbiA9IGZcbn1cblxuZXhwb3J0cy5pc0thbmppTW9kZUVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgdG9TSklTRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydHMudG9TSklTID0gZnVuY3Rpb24gdG9TSklTIChrYW5qaSkge1xuICByZXR1cm4gdG9TSklTRnVuY3Rpb24oa2FuamkpXG59XG4iLCIvKipcbiAqIENoZWNrIGlmIFFSIENvZGUgdmVyc2lvbiBpcyB2YWxpZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgIHRydWUgaWYgdmFsaWQgdmVyc2lvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKHZlcnNpb24pIHtcbiAgcmV0dXJuICFpc05hTih2ZXJzaW9uKSAmJiB2ZXJzaW9uID49IDEgJiYgdmVyc2lvbiA8PSA0MFxufVxuIiwidmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG52YXIgRUNDb2RlID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWNvZGUnKVxudmFyIEVDTGV2ZWwgPSByZXF1aXJlKCcuL2Vycm9yLWNvcnJlY3Rpb24tbGV2ZWwnKVxudmFyIE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxudmFyIFZlcnNpb25DaGVjayA9IHJlcXVpcmUoJy4vdmVyc2lvbi1jaGVjaycpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG4vLyBHZW5lcmF0b3IgcG9seW5vbWlhbCB1c2VkIHRvIGVuY29kZSB2ZXJzaW9uIGluZm9ybWF0aW9uXG52YXIgRzE4ID0gKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKVxudmFyIEcxOF9CQ0ggPSBVdGlscy5nZXRCQ0hEaWdpdChHMTgpXG5cbmZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YUxlbmd0aCAobW9kZSwgbGVuZ3RoLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICBmb3IgKHZhciBjdXJyZW50VmVyc2lvbiA9IDE7IGN1cnJlbnRWZXJzaW9uIDw9IDQwOyBjdXJyZW50VmVyc2lvbisrKSB7XG4gICAgaWYgKGxlbmd0aCA8PSBleHBvcnRzLmdldENhcGFjaXR5KGN1cnJlbnRWZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbW9kZSkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQgKG1vZGUsIHZlcnNpb24pIHtcbiAgLy8gQ2hhcmFjdGVyIGNvdW50IGluZGljYXRvciArIG1vZGUgaW5kaWNhdG9yIGJpdHNcbiAgcmV0dXJuIE1vZGUuZ2V0Q2hhckNvdW50SW5kaWNhdG9yKG1vZGUsIHZlcnNpb24pICsgNFxufVxuXG5mdW5jdGlvbiBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5IChzZWdtZW50cywgdmVyc2lvbikge1xuICB2YXIgdG90YWxCaXRzID0gMFxuXG4gIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgcmVzZXJ2ZWRCaXRzID0gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQoZGF0YS5tb2RlLCB2ZXJzaW9uKVxuICAgIHRvdGFsQml0cyArPSByZXNlcnZlZEJpdHMgKyBkYXRhLmdldEJpdHNMZW5ndGgoKVxuICB9KVxuXG4gIHJldHVybiB0b3RhbEJpdHNcbn1cblxuZnVuY3Rpb24gZ2V0QmVzdFZlcnNpb25Gb3JNaXhlZERhdGEgKHNlZ21lbnRzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICBmb3IgKHZhciBjdXJyZW50VmVyc2lvbiA9IDE7IGN1cnJlbnRWZXJzaW9uIDw9IDQwOyBjdXJyZW50VmVyc2lvbisrKSB7XG4gICAgdmFyIGxlbmd0aCA9IGdldFRvdGFsQml0c0Zyb21EYXRhQXJyYXkoc2VnbWVudHMsIGN1cnJlbnRWZXJzaW9uKVxuICAgIGlmIChsZW5ndGggPD0gZXhwb3J0cy5nZXRDYXBhY2l0eShjdXJyZW50VmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIE1vZGUuTUlYRUQpKSB7XG4gICAgICByZXR1cm4gY3VycmVudFZlcnNpb25cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogUmV0dXJucyB2ZXJzaW9uIG51bWJlciBmcm9tIGEgdmFsdWUuXG4gKiBJZiB2YWx1ZSBpcyBub3QgYSB2YWxpZCB2ZXJzaW9uLCByZXR1cm5zIGRlZmF1bHRWYWx1ZVxuICpcbiAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IHZhbHVlICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSAge051bWJlcn0gICAgICAgIGRlZmF1bHRWYWx1ZSBGYWxsYmFjayB2YWx1ZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvbiBudW1iZXJcbiAqL1xuZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoVmVyc2lvbkNoZWNrLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMClcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0VmFsdWVcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGhvdyBtdWNoIGRhdGEgY2FuIGJlIHN0b3JlZCB3aXRoIHRoZSBzcGVjaWZpZWQgUVIgY29kZSB2ZXJzaW9uXG4gKiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uICgxLTQwKVxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtNb2RlfSAgIG1vZGUgICAgICAgICAgICAgICAgIERhdGEgbW9kZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICBRdWFudGl0eSBvZiBzdG9yYWJsZSBkYXRhXG4gKi9cbmV4cG9ydHMuZ2V0Q2FwYWNpdHkgPSBmdW5jdGlvbiBnZXRDYXBhY2l0eSAodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1vZGUpIHtcbiAgaWYgKCFWZXJzaW9uQ2hlY2suaXNWYWxpZCh2ZXJzaW9uKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBRUiBDb2RlIHZlcnNpb24nKVxuICB9XG5cbiAgLy8gVXNlIEJ5dGUgbW9kZSBhcyBkZWZhdWx0XG4gIGlmICh0eXBlb2YgbW9kZSA9PT0gJ3VuZGVmaW5lZCcpIG1vZGUgPSBNb2RlLkJZVEVcblxuICAvLyBUb3RhbCBjb2Rld29yZHMgZm9yIHRoaXMgUVIgY29kZSB2ZXJzaW9uIChEYXRhICsgRXJyb3IgY29ycmVjdGlvbilcbiAgdmFyIHRvdGFsQ29kZXdvcmRzID0gVXRpbHMuZ2V0U3ltYm9sVG90YWxDb2Rld29yZHModmVyc2lvbilcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHNcbiAgdmFyIGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHNcbiAgdmFyIGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgPSAodG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzKSAqIDhcblxuICBpZiAobW9kZSA9PT0gTW9kZS5NSVhFRCkgcmV0dXJuIGRhdGFUb3RhbENvZGV3b3Jkc0JpdHNcblxuICB2YXIgdXNhYmxlQml0cyA9IGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgLSBnZXRSZXNlcnZlZEJpdHNDb3VudChtb2RlLCB2ZXJzaW9uKVxuXG4gIC8vIFJldHVybiBtYXggbnVtYmVyIG9mIHN0b3JhYmxlIGNvZGV3b3Jkc1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh1c2FibGVCaXRzIC8gMTApICogMylcblxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigodXNhYmxlQml0cyAvIDExKSAqIDIpXG5cbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcih1c2FibGVCaXRzIC8gMTMpXG5cbiAgICBjYXNlIE1vZGUuQllURTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodXNhYmxlQml0cyAvIDgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZlcnNpb24gbmVlZGVkIHRvIGNvbnRhaW4gdGhlIGFtb3VudCBvZiBkYXRhXG4gKlxuICogQHBhcmFtICB7U2VnbWVudH0gZGF0YSAgICAgICAgICAgICAgICAgICAgU2VnbWVudCBvZiBkYXRhXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtlcnJvckNvcnJlY3Rpb25MZXZlbD1IXSBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtNb2RlfSBtb2RlICAgICAgICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICovXG5leHBvcnRzLmdldEJlc3RWZXJzaW9uRm9yRGF0YSA9IGZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YSAoZGF0YSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgdmFyIHNlZ1xuXG4gIHZhciBlY2wgPSBFQ0xldmVsLmZyb20oZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIEVDTGV2ZWwuTSlcblxuICBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBnZXRCZXN0VmVyc2lvbkZvck1peGVkRGF0YShkYXRhLCBlY2wpXG4gICAgfVxuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cblxuICAgIHNlZyA9IGRhdGFbMF1cbiAgfSBlbHNlIHtcbiAgICBzZWcgPSBkYXRhXG4gIH1cblxuICByZXR1cm4gZ2V0QmVzdFZlcnNpb25Gb3JEYXRhTGVuZ3RoKHNlZy5tb2RlLCBzZWcuZ2V0TGVuZ3RoKCksIGVjbClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHZlcnNpb24gaW5mb3JtYXRpb24gd2l0aCByZWxhdGl2ZSBlcnJvciBjb3JyZWN0aW9uIGJpdHNcbiAqXG4gKiBUaGUgdmVyc2lvbiBpbmZvcm1hdGlvbiBpcyBpbmNsdWRlZCBpbiBRUiBDb2RlIHN5bWJvbHMgb2YgdmVyc2lvbiA3IG9yIGxhcmdlci5cbiAqIEl0IGNvbnNpc3RzIG9mIGFuIDE4LWJpdCBzZXF1ZW5jZSBjb250YWluaW5nIDYgZGF0YSBiaXRzLFxuICogd2l0aCAxMiBlcnJvciBjb3JyZWN0aW9uIGJpdHMgY2FsY3VsYXRlZCB1c2luZyB0aGUgKDE4LCA2KSBHb2xheSBjb2RlLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICBFbmNvZGVkIHZlcnNpb24gaW5mbyBiaXRzXG4gKi9cbmV4cG9ydHMuZ2V0RW5jb2RlZEJpdHMgPSBmdW5jdGlvbiBnZXRFbmNvZGVkQml0cyAodmVyc2lvbikge1xuICBpZiAoIVZlcnNpb25DaGVjay5pc1ZhbGlkKHZlcnNpb24pIHx8IHZlcnNpb24gPCA3KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFFSIENvZGUgdmVyc2lvbicpXG4gIH1cblxuICB2YXIgZCA9IHZlcnNpb24gPDwgMTJcblxuICB3aGlsZSAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMThfQkNIID49IDApIHtcbiAgICBkIF49IChHMTggPDwgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE4X0JDSCkpXG4gIH1cblxuICByZXR1cm4gKHZlcnNpb24gPDwgMTIpIHwgZFxufVxuIiwidmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmZ1bmN0aW9uIGNsZWFyQ2FudmFzIChjdHgsIGNhbnZhcywgc2l6ZSkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICBpZiAoIWNhbnZhcy5zdHlsZSkgY2FudmFzLnN0eWxlID0ge31cbiAgY2FudmFzLmhlaWdodCA9IHNpemVcbiAgY2FudmFzLndpZHRoID0gc2l6ZVxuICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCdcbiAgY2FudmFzLnN0eWxlLndpZHRoID0gc2l6ZSArICdweCdcbn1cblxuZnVuY3Rpb24gZ2V0Q2FudmFzRWxlbWVudCAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHNwZWNpZnkgYSBjYW52YXMgZWxlbWVudCcpXG4gIH1cbn1cblxuZXhwb3J0cy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHFyRGF0YSwgY2FudmFzLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9uc1xuICB2YXIgY2FudmFzRWwgPSBjYW52YXNcblxuICBpZiAodHlwZW9mIG9wdHMgPT09ICd1bmRlZmluZWQnICYmICghY2FudmFzIHx8ICFjYW52YXMuZ2V0Q29udGV4dCkpIHtcbiAgICBvcHRzID0gY2FudmFzXG4gICAgY2FudmFzID0gdW5kZWZpbmVkXG4gIH1cblxuICBpZiAoIWNhbnZhcykge1xuICAgIGNhbnZhc0VsID0gZ2V0Q2FudmFzRWxlbWVudCgpXG4gIH1cblxuICBvcHRzID0gVXRpbHMuZ2V0T3B0aW9ucyhvcHRzKVxuICB2YXIgc2l6ZSA9IFV0aWxzLmdldEltYWdlV2lkdGgocXJEYXRhLm1vZHVsZXMuc2l6ZSwgb3B0cylcblxuICB2YXIgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dCgnMmQnKVxuICB2YXIgaW1hZ2UgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHNpemUsIHNpemUpXG4gIFV0aWxzLnFyVG9JbWFnZURhdGEoaW1hZ2UuZGF0YSwgcXJEYXRhLCBvcHRzKVxuXG4gIGNsZWFyQ2FudmFzKGN0eCwgY2FudmFzRWwsIHNpemUpXG4gIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2UsIDAsIDApXG5cbiAgcmV0dXJuIGNhbnZhc0VsXG59XG5cbmV4cG9ydHMucmVuZGVyVG9EYXRhVVJMID0gZnVuY3Rpb24gcmVuZGVyVG9EYXRhVVJMIChxckRhdGEsIGNhbnZhcywgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnNcblxuICBpZiAodHlwZW9mIG9wdHMgPT09ICd1bmRlZmluZWQnICYmICghY2FudmFzIHx8ICFjYW52YXMuZ2V0Q29udGV4dCkpIHtcbiAgICBvcHRzID0gY2FudmFzXG4gICAgY2FudmFzID0gdW5kZWZpbmVkXG4gIH1cblxuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuXG4gIHZhciBjYW52YXNFbCA9IGV4cG9ydHMucmVuZGVyKHFyRGF0YSwgY2FudmFzLCBvcHRzKVxuXG4gIHZhciB0eXBlID0gb3B0cy50eXBlIHx8ICdpbWFnZS9wbmcnXG4gIHZhciByZW5kZXJlck9wdHMgPSBvcHRzLnJlbmRlcmVyT3B0cyB8fCB7fVxuXG4gIHJldHVybiBjYW52YXNFbC50b0RhdGFVUkwodHlwZSwgcmVuZGVyZXJPcHRzLnF1YWxpdHkpXG59XG4iLCJ2YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gZ2V0Q29sb3JBdHRyaWIgKGNvbG9yLCBhdHRyaWIpIHtcbiAgdmFyIGFscGhhID0gY29sb3IuYSAvIDI1NVxuICB2YXIgc3RyID0gYXR0cmliICsgJz1cIicgKyBjb2xvci5oZXggKyAnXCInXG5cbiAgcmV0dXJuIGFscGhhIDwgMVxuICAgID8gc3RyICsgJyAnICsgYXR0cmliICsgJy1vcGFjaXR5PVwiJyArIGFscGhhLnRvRml4ZWQoMikuc2xpY2UoMSkgKyAnXCInXG4gICAgOiBzdHJcbn1cblxuZnVuY3Rpb24gc3ZnQ21kIChjbWQsIHgsIHkpIHtcbiAgdmFyIHN0ciA9IGNtZCArIHhcbiAgaWYgKHR5cGVvZiB5ICE9PSAndW5kZWZpbmVkJykgc3RyICs9ICcgJyArIHlcblxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHFyVG9QYXRoIChkYXRhLCBzaXplLCBtYXJnaW4pIHtcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgbW92ZUJ5ID0gMFxuICB2YXIgbmV3Um93ID0gZmFsc2VcbiAgdmFyIGxpbmVMZW5ndGggPSAwXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNvbCA9IE1hdGguZmxvb3IoaSAlIHNpemUpXG4gICAgdmFyIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNpemUpXG5cbiAgICBpZiAoIWNvbCAmJiAhbmV3Um93KSBuZXdSb3cgPSB0cnVlXG5cbiAgICBpZiAoZGF0YVtpXSkge1xuICAgICAgbGluZUxlbmd0aCsrXG5cbiAgICAgIGlmICghKGkgPiAwICYmIGNvbCA+IDAgJiYgZGF0YVtpIC0gMV0pKSB7XG4gICAgICAgIHBhdGggKz0gbmV3Um93XG4gICAgICAgICAgPyBzdmdDbWQoJ00nLCBjb2wgKyBtYXJnaW4sIDAuNSArIHJvdyArIG1hcmdpbilcbiAgICAgICAgICA6IHN2Z0NtZCgnbScsIG1vdmVCeSwgMClcblxuICAgICAgICBtb3ZlQnkgPSAwXG4gICAgICAgIG5ld1JvdyA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICghKGNvbCArIDEgPCBzaXplICYmIGRhdGFbaSArIDFdKSkge1xuICAgICAgICBwYXRoICs9IHN2Z0NtZCgnaCcsIGxpbmVMZW5ndGgpXG4gICAgICAgIGxpbmVMZW5ndGggPSAwXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVCeSsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0cy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHFyRGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgdmFyIG9wdHMgPSBVdGlscy5nZXRPcHRpb25zKG9wdGlvbnMpXG4gIHZhciBzaXplID0gcXJEYXRhLm1vZHVsZXMuc2l6ZVxuICB2YXIgZGF0YSA9IHFyRGF0YS5tb2R1bGVzLmRhdGFcbiAgdmFyIHFyY29kZXNpemUgPSBzaXplICsgb3B0cy5tYXJnaW4gKiAyXG5cbiAgdmFyIGJnID0gIW9wdHMuY29sb3IubGlnaHQuYVxuICAgID8gJydcbiAgICA6ICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5saWdodCwgJ2ZpbGwnKSArXG4gICAgICAnIGQ9XCJNMCAwaCcgKyBxcmNvZGVzaXplICsgJ3YnICsgcXJjb2Rlc2l6ZSArICdIMHpcIi8+J1xuXG4gIHZhciBwYXRoID1cbiAgICAnPHBhdGggJyArIGdldENvbG9yQXR0cmliKG9wdHMuY29sb3IuZGFyaywgJ3N0cm9rZScpICtcbiAgICAnIGQ9XCInICsgcXJUb1BhdGgoZGF0YSwgc2l6ZSwgb3B0cy5tYXJnaW4pICsgJ1wiLz4nXG5cbiAgdmFyIHZpZXdCb3ggPSAndmlld0JveD1cIicgKyAnMCAwICcgKyBxcmNvZGVzaXplICsgJyAnICsgcXJjb2Rlc2l6ZSArICdcIidcblxuICB2YXIgd2lkdGggPSAhb3B0cy53aWR0aCA/ICcnIDogJ3dpZHRoPVwiJyArIG9wdHMud2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIG9wdHMud2lkdGggKyAnXCIgJ1xuXG4gIHZhciBzdmdUYWcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgJyArIHdpZHRoICsgdmlld0JveCArICcgc2hhcGUtcmVuZGVyaW5nPVwiY3Jpc3BFZGdlc1wiPicgKyBiZyArIHBhdGggKyAnPC9zdmc+XFxuJ1xuXG4gIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYihudWxsLCBzdmdUYWcpXG4gIH1cblxuICByZXR1cm4gc3ZnVGFnXG59XG4iLCJmdW5jdGlvbiBoZXgycmdiYSAoaGV4KSB7XG4gIGlmICh0eXBlb2YgaGV4ID09PSAnbnVtYmVyJykge1xuICAgIGhleCA9IGhleC50b1N0cmluZygpXG4gIH1cblxuICBpZiAodHlwZW9mIGhleCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbG9yIHNob3VsZCBiZSBkZWZpbmVkIGFzIGhleCBzdHJpbmcnKVxuICB9XG5cbiAgdmFyIGhleENvZGUgPSBoZXguc2xpY2UoKS5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcnKVxuICBpZiAoaGV4Q29kZS5sZW5ndGggPCAzIHx8IGhleENvZGUubGVuZ3RoID09PSA1IHx8IGhleENvZGUubGVuZ3RoID4gOCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggY29sb3I6ICcgKyBoZXgpXG4gIH1cblxuICAvLyBDb252ZXJ0IGZyb20gc2hvcnQgdG8gbG9uZyBmb3JtIChmZmYgLT4gZmZmZmZmKVxuICBpZiAoaGV4Q29kZS5sZW5ndGggPT09IDMgfHwgaGV4Q29kZS5sZW5ndGggPT09IDQpIHtcbiAgICBoZXhDb2RlID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgaGV4Q29kZS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBbYywgY11cbiAgICB9KSlcbiAgfVxuXG4gIC8vIEFkZCBkZWZhdWx0IGFscGhhIHZhbHVlXG4gIGlmIChoZXhDb2RlLmxlbmd0aCA9PT0gNikgaGV4Q29kZS5wdXNoKCdGJywgJ0YnKVxuXG4gIHZhciBoZXhWYWx1ZSA9IHBhcnNlSW50KGhleENvZGUuam9pbignJyksIDE2KVxuXG4gIHJldHVybiB7XG4gICAgcjogKGhleFZhbHVlID4+IDI0KSAmIDI1NSxcbiAgICBnOiAoaGV4VmFsdWUgPj4gMTYpICYgMjU1LFxuICAgIGI6IChoZXhWYWx1ZSA+PiA4KSAmIDI1NSxcbiAgICBhOiBoZXhWYWx1ZSAmIDI1NSxcbiAgICBoZXg6ICcjJyArIGhleENvZGUuc2xpY2UoMCwgNikuam9pbignJylcbiAgfVxufVxuXG5leHBvcnRzLmdldE9wdGlvbnMgPSBmdW5jdGlvbiBnZXRPcHRpb25zIChvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9XG4gIGlmICghb3B0aW9ucy5jb2xvcikgb3B0aW9ucy5jb2xvciA9IHt9XG5cbiAgdmFyIG1hcmdpbiA9IHR5cGVvZiBvcHRpb25zLm1hcmdpbiA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICBvcHRpb25zLm1hcmdpbiA9PT0gbnVsbCB8fFxuICAgIG9wdGlvbnMubWFyZ2luIDwgMCA/IDQgOiBvcHRpb25zLm1hcmdpblxuXG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggJiYgb3B0aW9ucy53aWR0aCA+PSAyMSA/IG9wdGlvbnMud2lkdGggOiB1bmRlZmluZWRcbiAgdmFyIHNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCA0XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgc2NhbGU6IHdpZHRoID8gNCA6IHNjYWxlLFxuICAgIG1hcmdpbjogbWFyZ2luLFxuICAgIGNvbG9yOiB7XG4gICAgICBkYXJrOiBoZXgycmdiYShvcHRpb25zLmNvbG9yLmRhcmsgfHwgJyMwMDAwMDBmZicpLFxuICAgICAgbGlnaHQ6IGhleDJyZ2JhKG9wdGlvbnMuY29sb3IubGlnaHQgfHwgJyNmZmZmZmZmZicpXG4gICAgfSxcbiAgICB0eXBlOiBvcHRpb25zLnR5cGUsXG4gICAgcmVuZGVyZXJPcHRzOiBvcHRpb25zLnJlbmRlcmVyT3B0cyB8fCB7fVxuICB9XG59XG5cbmV4cG9ydHMuZ2V0U2NhbGUgPSBmdW5jdGlvbiBnZXRTY2FsZSAocXJTaXplLCBvcHRzKSB7XG4gIHJldHVybiBvcHRzLndpZHRoICYmIG9wdHMud2lkdGggPj0gcXJTaXplICsgb3B0cy5tYXJnaW4gKiAyXG4gICAgPyBvcHRzLndpZHRoIC8gKHFyU2l6ZSArIG9wdHMubWFyZ2luICogMilcbiAgICA6IG9wdHMuc2NhbGVcbn1cblxuZXhwb3J0cy5nZXRJbWFnZVdpZHRoID0gZnVuY3Rpb24gZ2V0SW1hZ2VXaWR0aCAocXJTaXplLCBvcHRzKSB7XG4gIHZhciBzY2FsZSA9IGV4cG9ydHMuZ2V0U2NhbGUocXJTaXplLCBvcHRzKVxuICByZXR1cm4gTWF0aC5mbG9vcigocXJTaXplICsgb3B0cy5tYXJnaW4gKiAyKSAqIHNjYWxlKVxufVxuXG5leHBvcnRzLnFyVG9JbWFnZURhdGEgPSBmdW5jdGlvbiBxclRvSW1hZ2VEYXRhIChpbWdEYXRhLCBxciwgb3B0cykge1xuICB2YXIgc2l6ZSA9IHFyLm1vZHVsZXMuc2l6ZVxuICB2YXIgZGF0YSA9IHFyLm1vZHVsZXMuZGF0YVxuICB2YXIgc2NhbGUgPSBleHBvcnRzLmdldFNjYWxlKHNpemUsIG9wdHMpXG4gIHZhciBzeW1ib2xTaXplID0gTWF0aC5mbG9vcigoc2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSlcbiAgdmFyIHNjYWxlZE1hcmdpbiA9IG9wdHMubWFyZ2luICogc2NhbGVcbiAgdmFyIHBhbGV0dGUgPSBbb3B0cy5jb2xvci5saWdodCwgb3B0cy5jb2xvci5kYXJrXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9sU2l6ZTsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBzeW1ib2xTaXplOyBqKyspIHtcbiAgICAgIHZhciBwb3NEc3QgPSAoaSAqIHN5bWJvbFNpemUgKyBqKSAqIDRcbiAgICAgIHZhciBweENvbG9yID0gb3B0cy5jb2xvci5saWdodFxuXG4gICAgICBpZiAoaSA+PSBzY2FsZWRNYXJnaW4gJiYgaiA+PSBzY2FsZWRNYXJnaW4gJiZcbiAgICAgICAgaSA8IHN5bWJvbFNpemUgLSBzY2FsZWRNYXJnaW4gJiYgaiA8IHN5bWJvbFNpemUgLSBzY2FsZWRNYXJnaW4pIHtcbiAgICAgICAgdmFyIGlTcmMgPSBNYXRoLmZsb29yKChpIC0gc2NhbGVkTWFyZ2luKSAvIHNjYWxlKVxuICAgICAgICB2YXIgalNyYyA9IE1hdGguZmxvb3IoKGogLSBzY2FsZWRNYXJnaW4pIC8gc2NhbGUpXG4gICAgICAgIHB4Q29sb3IgPSBwYWxldHRlW2RhdGFbaVNyYyAqIHNpemUgKyBqU3JjXSA/IDEgOiAwXVxuICAgICAgfVxuXG4gICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IuclxuICAgICAgaW1nRGF0YVtwb3NEc3QrK10gPSBweENvbG9yLmdcbiAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5iXG4gICAgICBpbWdEYXRhW3Bvc0RzdF0gPSBweENvbG9yLmFcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgYSBzdWJzZXQgb2Ygbm9kZS5qcyBCdWZmZXIgbWV0aG9kcyBmb3IgdGhlIGJyb3dzZXIuXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlclxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIC8vIENhbiB0eXBlZCBhcnJheSBpbnN0YW5jZXMgYmUgYXVnbWVudGVkP1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IHR5cGVkQXJyYXlTdXBwb3J0KClcblxudmFyIEtfTUFYX0xFTkdUSCA9IEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBvZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIG9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuXG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG5cbiAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIGJ1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGJ1ZiA9IHRoYXRcbiAgICBpZiAoYnVmID09PSBudWxsKSB7XG4gICAgICBidWYgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nKSB7XG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZykgfCAwXG4gIHZhciBidWYgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSBidWYud3JpdGUoc3RyaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgYnVmID0gYnVmLnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZltpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgdmFyIGJ1ZlxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgYnVmID0gZnJvbUFycmF5TGlrZSh0aGF0LCBidWYpXG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmIChidWYubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmXG4gICAgfVxuXG4gICAgb2JqLmNvcHkoYnVmLCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIGJ1ZlxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIG9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgb2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IG5ldyBCdWZmZXIodmFsKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIobnVsbCwgMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IGFsbG9jVW5zYWZlKG51bGwsIGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5hbGxvYyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHZhciBidWZmZXIgPSBuZXcgQnVmZmVyKHNpemUpXG4gIGJ1ZmZlci5maWxsKDApXG4gIHJldHVybiBidWZmZXJcbn1cblxubW9kdWxlLmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHJldHVybiBuZXcgQnVmZmVyKGRhdGEpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgY3VzdG9tSW5zcGVjdFN5bWJvbCA9XG4gICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2xbJ2ZvciddID09PSAnZnVuY3Rpb24nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgID8gU3ltYm9sWydmb3InXSgnbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIDogbnVsbFxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbnZhciBLX01BWF9MRU5HVEggPSAweDdmZmZmZmZmXG5leHBvcnRzLmtNYXhMZW5ndGggPSBLX01BWF9MRU5HVEhcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgUHJpbnQgd2FybmluZyBhbmQgcmVjb21tZW5kIHVzaW5nIGBidWZmZXJgIHY0Lnggd2hpY2ggaGFzIGFuIE9iamVjdFxuICogICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogV2UgcmVwb3J0IHRoYXQgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0eXBlZCBhcnJheXMgaWYgdGhlIGFyZSBub3Qgc3ViY2xhc3NhYmxlXG4gKiB1c2luZyBfX3Byb3RvX18uIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgXG4gKiAoU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzgpLiBJRSAxMCBsYWNrcyBzdXBwb3J0XG4gKiBmb3IgX19wcm90b19fIGFuZCBoYXMgYSBidWdneSB0eXBlZCBhcnJheSBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbmlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICAnVGhpcyBicm93c2VyIGxhY2tzIHR5cGVkIGFycmF5IChVaW50OEFycmF5KSBzdXBwb3J0IHdoaWNoIGlzIHJlcXVpcmVkIGJ5ICcgK1xuICAgICdgYnVmZmVyYCB2NS54LiBVc2UgYGJ1ZmZlcmAgdjQueCBpZiB5b3UgcmVxdWlyZSBvbGQgYnJvd3NlciBzdXBwb3J0LidcbiAgKVxufVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIC8vIENhbiB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZD9cbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICB2YXIgcHJvdG8gPSB7IGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfSB9XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3RvLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYXJyLCBwcm90bylcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MlxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdwYXJlbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyXG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAnb2Zmc2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ5dGVPZmZzZXRcbiAgfVxufSlcblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA+IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgbGVuZ3RoICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcbiAgcmV0dXJuIGJ1ZlxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKGFyZylcbiAgfVxuICByZXR1cm4gZnJvbShhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbmZ1bmN0aW9uIGZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheVZpZXcodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gICAgKVxuICB9XG5cbiAgaWYgKGlzSW5zdGFuY2UodmFsdWUsIEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBBcnJheUJ1ZmZlcikpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIChpc0luc3RhbmNlKHZhbHVlLCBTaGFyZWRBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgU2hhcmVkQXJyYXlCdWZmZXIpKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgKVxuICB9XG5cbiAgdmFyIHZhbHVlT2YgPSB2YWx1ZS52YWx1ZU9mICYmIHZhbHVlLnZhbHVlT2YoKVxuICBpZiAodmFsdWVPZiAhPSBudWxsICYmIHZhbHVlT2YgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlT2YsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIHZhciBiID0gZnJvbU9iamVjdCh2YWx1ZSlcbiAgaWYgKGIpIHJldHVybiBiXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1ByaW1pdGl2ZSAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShcbiAgICAgIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0oJ3N0cmluZycpLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGhcbiAgICApXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gIClcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG4vLyBOb3RlOiBDaGFuZ2UgcHJvdG90eXBlICphZnRlciogQnVmZmVyLmZyb20gaXMgZGVmaW5lZCB0byB3b3JrYXJvdW5kIENocm9tZSBidWc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzE0OFxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlci5wcm90b3R5cGUsIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlciwgVWludDhBcnJheSlcblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIHNpemUgKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHZhciBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSBidWYud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIGJ1ZiA9IGJ1Zi5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdmFyIGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidWZbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5VmlldyAoYXJyYXlWaWV3KSB7XG4gIGlmIChpc0luc3RhbmNlKGFycmF5VmlldywgVWludDhBcnJheSkpIHtcbiAgICB2YXIgY29weSA9IG5ldyBVaW50OEFycmF5KGFycmF5VmlldylcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKGNvcHkuYnVmZmVyLCBjb3B5LmJ5dGVPZmZzZXQsIGNvcHkuYnl0ZUxlbmd0aClcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5TGlrZShhcnJheVZpZXcpXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJvZmZzZXRcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcImxlbmd0aFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICB2YXIgYnVmXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAob2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHZhciBidWYgPSBjcmVhdGVCdWZmZXIobGVuKVxuXG4gICAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBidWZcbiAgICB9XG5cbiAgICBvYmouY29weShidWYsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gYnVmXG4gIH1cblxuICBpZiAob2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBudW1iZXJJc05hTihvYmoubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcigwKVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmopXG4gIH1cblxuICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIEFycmF5LmlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqLmRhdGEpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyID09PSB0cnVlICYmXG4gICAgYiAhPT0gQnVmZmVyLnByb3RvdHlwZSAvLyBzbyBCdWZmZXIuaXNCdWZmZXIoQnVmZmVyLnByb3RvdHlwZSkgd2lsbCBiZSBmYWxzZVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYSwgVWludDhBcnJheSkpIGEgPSBCdWZmZXIuZnJvbShhLCBhLm9mZnNldCwgYS5ieXRlTGVuZ3RoKVxuICBpZiAoaXNJbnN0YW5jZShiLCBVaW50OEFycmF5KSkgYiA9IEJ1ZmZlci5mcm9tKGIsIGIub2Zmc2V0LCBiLmJ5dGVMZW5ndGgpXG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcImJ1ZjFcIiwgXCJidWYyXCIgYXJndW1lbnRzIG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXknXG4gICAgKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKGlzSW5zdGFuY2UoYnVmLCBVaW50OEFycmF5KSkge1xuICAgICAgaWYgKHBvcyArIGJ1Zi5sZW5ndGggPiBidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIEJ1ZmZlci5mcm9tKGJ1ZikuY29weShidWZmZXIsIHBvcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICBidWYsXG4gICAgICAgICAgcG9zXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgfVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IGlzSW5zdGFuY2Uoc3RyaW5nLCBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIG9yIEFycmF5QnVmZmVyLiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2Ygc3RyaW5nXG4gICAgKVxuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIG11c3RNYXRjaCA9IChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gPT09IHRydWUpXG4gIGlmICghbXVzdE1hdGNoICYmIGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkge1xuICAgICAgICAgIHJldHVybiBtdXN0TWF0Y2ggPyAtMSA6IHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2VyY2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgKGFuZCB0aGUgYGlzLWJ1ZmZlcmAgbnBtIHBhY2thZ2UpXG4vLyB0byBkZXRlY3QgYSBCdWZmZXIgaW5zdGFuY2UuIEl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBgaW5zdGFuY2VvZiBCdWZmZXJgXG4vLyByZWxpYWJseSBpbiBhIGJyb3dzZXJpZnkgY29udGV4dCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlIGRpZmZlcmVudFxuLy8gY29waWVzIG9mIHRoZSAnYnVmZmVyJyBwYWNrYWdlIGluIHVzZS4gVGhpcyBtZXRob2Qgd29ya3MgZXZlbiBmb3IgQnVmZmVyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgZnJvbSBhbm90aGVyIGNvcHkgb2YgdGhlIGBidWZmZXJgIHBhY2thZ2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8xNTRcbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcgPSBCdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nXG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkucmVwbGFjZSgvKC57Mn0pL2csICckMSAnKS50cmltKClcbiAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuaWYgKGN1c3RvbUluc3BlY3RTeW1ib2wpIHtcbiAgQnVmZmVyLnByb3RvdHlwZVtjdXN0b21JbnNwZWN0U3ltYm9sXSA9IEJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoaXNJbnN0YW5jZSh0YXJnZXQsIFVpbnQ4QXJyYXkpKSB7XG4gICAgdGFyZ2V0ID0gQnVmZmVyLmZyb20odGFyZ2V0LCB0YXJnZXQub2Zmc2V0LCB0YXJnZXQuYnl0ZUxlbmd0aClcbiAgfVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ0YXJnZXRcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5LiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHRhcmdldClcbiAgICApXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0IC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChudW1iZXJJc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFt2YWxdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAobnVtYmVySXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCA+Pj4gMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpXG4gICAgICA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpXG4gICAgICAgICAgPyAzXG4gICAgICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRilcbiAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSBoZXhTbGljZUxvb2t1cFRhYmxlW2J1ZltpXV1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgLy8gSWYgYnl0ZXMubGVuZ3RoIGlzIG9kZCwgdGhlIGxhc3QgOCBiaXRzIG11c3QgYmUgaWdub3JlZCAoc2FtZSBhcyBub2RlLmpzKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aCAtIDE7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgKGJ5dGVzW2kgKyAxXSAqIDI1NikpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5ld0J1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzaG91bGQgYmUgYSBCdWZmZXInKVxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVzZSBidWlsdC1pbiB3aGVuIGF2YWlsYWJsZSwgbWlzc2luZyBmcm9tIElFMTFcbiAgICB0aGlzLmNvcHlXaXRoaW4odGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKChlbmNvZGluZyA9PT0gJ3V0ZjgnICYmIGNvZGUgPCAxMjgpIHx8XG4gICAgICAgICAgZW5jb2RpbmcgPT09ICdsYXRpbjEnKSB7XG4gICAgICAgIC8vIEZhc3QgcGF0aDogSWYgYHZhbGAgZml0cyBpbnRvIGEgc2luZ2xlIGJ5dGUsIHVzZSB0aGF0IG51bWVyaWMgdmFsdWUuXG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyB2YWwgK1xuICAgICAgICAnXCIgaXMgaW52YWxpZCBmb3IgYXJndW1lbnQgXCJ2YWx1ZVwiJylcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSB0YWtlcyBlcXVhbCBzaWducyBhcyBlbmQgb2YgdGhlIEJhc2U2NCBlbmNvZGluZ1xuICBzdHIgPSBzdHIuc3BsaXQoJz0nKVswXVxuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG4vLyBBcnJheUJ1ZmZlciBvciBVaW50OEFycmF5IG9iamVjdHMgZnJvbSBvdGhlciBjb250ZXh0cyAoaS5lLiBpZnJhbWVzKSBkbyBub3QgcGFzc1xuLy8gdGhlIGBpbnN0YW5jZW9mYCBjaGVjayBidXQgdGhleSBzaG91bGQgYmUgdHJlYXRlZCBhcyBvZiB0aGF0IHR5cGUuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8xNjZcbmZ1bmN0aW9uIGlzSW5zdGFuY2UgKG9iaiwgdHlwZSkge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgdHlwZSB8fFxuICAgIChvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPSBudWxsICYmXG4gICAgICBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gdHlwZS5uYW1lKVxufVxuZnVuY3Rpb24gbnVtYmVySXNOYU4gKG9iaikge1xuICAvLyBGb3IgSUUxMSBzdXBwb3J0XG4gIHJldHVybiBvYmogIT09IG9iaiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG4vLyBDcmVhdGUgbG9va3VwIHRhYmxlIGZvciBgdG9TdHJpbmcoJ2hleCcpYFxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMjE5XG52YXIgaGV4U2xpY2VMb29rdXBUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5YWJjZGVmJ1xuICB2YXIgdGFibGUgPSBuZXcgQXJyYXkoMjU2KVxuICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICB2YXIgaTE2ID0gaSAqIDE2XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICB0YWJsZVtpMTYgKyBqXSA9IGFscGhhYmV0W2ldICsgYWxwaGFiZXRbal1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhYmxlXG59KSgpXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge307XG4gIH1cbiAgdmFyIGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgdmFyIHJhbmdlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGlvbi5yYW5nZUNvdW50OyBpKyspIHtcbiAgICByYW5nZXMucHVzaChzZWxlY3Rpb24uZ2V0UmFuZ2VBdChpKSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGl2ZS50YWdOYW1lLnRvVXBwZXJDYXNlKCkpIHsgLy8gLnRvVXBwZXJDYXNlIGhhbmRsZXMgWEhUTUxcbiAgICBjYXNlICdJTlBVVCc6XG4gICAgY2FzZSAnVEVYVEFSRUEnOlxuICAgICAgYWN0aXZlLmJsdXIoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGFjdGl2ZSA9IG51bGw7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxlY3Rpb24udHlwZSA9PT0gJ0NhcmV0JyAmJlxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHtcbiAgICAgIHJhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhY3RpdmUgJiZcbiAgICBhY3RpdmUuZm9jdXMoKTtcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiX19zcHJlYWRBcnJheXMiLCJzIiwiaSIsImlsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIkFycmF5IiwiayIsImEiLCJqIiwiamwiLCJCcm93c2VySW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIiwib3MiLCJ0aGlzIiwidHlwZSIsIk5vZGVJbmZvIiwicHJvY2VzcyIsInBsYXRmb3JtIiwiU2VhcmNoQm90RGV2aWNlSW5mbyIsImJvdCIsIkJvdEluZm8iLCJSZWFjdE5hdGl2ZUluZm8iLCJTRUFSQ0hCT1RfT1NfUkVHRVgiLCJ1c2VyQWdlbnRSdWxlcyIsIm9wZXJhdGluZ1N5c3RlbVJ1bGVzIiwiZGV0ZWN0IiwidXNlckFnZW50IiwicGFyc2VVc2VyQWdlbnQiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJzbGljZSIsImdldE5vZGVWZXJzaW9uIiwibWF0Y2hVc2VyQWdlbnQiLCJ1YSIsInJlZHVjZSIsIm1hdGNoZWQiLCJfYSIsImJyb3dzZXIiLCJyZWdleCIsInVhTWF0Y2giLCJleGVjIiwibWF0Y2hlZFJ1bGUiLCJtYXRjaCIsInZlcnNpb25QYXJ0cyIsInNwbGl0IiwiY291bnQiLCJvdXRwdXQiLCJpaSIsInB1c2giLCJjcmVhdGVWZXJzaW9uUGFydHMiLCJqb2luIiwiZGV0ZWN0T1MiLCJzZWFyY2hCb3RNYXRjaCIsImRldGVjdEVudiIsImVudiIsInVuZGVmaW5lZCIsImlzQW5kcm9pZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJpc0lPUyIsIm1heFRvdWNoUG9pbnRzIiwiaXNNb2JpbGUiLCJpc05vZGUiLCJpc0Jyb3dzZXIiLCJnZXROYXZpZ2F0b3IiLCJnZXRGcm9tV2luZG93IiwiZ2V0RnJvbVdpbmRvd09yVGhyb3ciLCJnZXREb2N1bWVudE9yVGhyb3ciLCJnZXREb2N1bWVudCIsImdldE5hdmlnYXRvck9yVGhyb3ciLCJnZXRMb2NhdGlvbk9yVGhyb3ciLCJnZXRMb2NhdGlvbiIsImdldENyeXB0b09yVGhyb3ciLCJnZXRDcnlwdG8iLCJnZXRMb2NhbFN0b3JhZ2VPclRocm93IiwiZ2V0TG9jYWxTdG9yYWdlIiwiZ2V0Q2xpZW50TWV0YSIsInZhbHVlIiwiRXJyb3IiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRMb2NhbCIsImtleSIsImRhdGEiLCJyYXciLCJsb2NhbCIsInNldEl0ZW0iLCJnZXRMb2NhbCIsImdldEl0ZW0iLCJyZW1vdmVMb2NhbCIsInJlbW92ZUl0ZW0iLCJtb2JpbGVMaW5rQ2hvaWNlS2V5IiwiZm9ybWF0SU9TTW9iaWxlIiwidXJpIiwiZW50cnkiLCJlbmNvZGVkVXJpIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidW5pdmVyc2FsTGluayIsImRlZXBMaW5rIiwiZW5kc1dpdGgiLCJzYXZlTW9iaWxlTGlua0luZm8iLCJmb2N1c1VyaSIsImhyZWYiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRNb2JpbGVSZWdpc3RyeUVudHJ5IiwicmVnaXN0cnkiLCJmaWx0ZXIiLCJnZXRNb2JpbGVMaW5rUmVnaXN0cnkiLCJ3aGl0ZWxpc3QiLCJsaW5rcyIsIm1hcCIsIkJvb2xlYW4iLCJBUElfVVJMIiwiZ2V0V2FsbGV0UmVnaXN0cnlVcmwiLCJnZXREYXBwUmVnaXN0cnlVcmwiLCJmb3JtYXRNb2JpbGVSZWdpc3RyeUVudHJ5Iiwic2hvcnROYW1lIiwibWV0YWRhdGEiLCJjb2xvciIsImNvbG9ycyIsInByaW1hcnkiLCJsb2dvIiwiaW1hZ2VfdXJsIiwic20iLCJ1bml2ZXJzYWwiLCJuYXRpdmUiLCJmb3JtYXRNb2JpbGVSZWdpc3RyeSIsInZhbHVlcyIsIl9pbnRlcm9wRGVmYXVsdCIsImV4IiwiYnJvd3NlclV0aWxzIiwiUVJDb2RlIiwiY29weSIsIlJlYWN0IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yIiwiV0FMTEVUQ09OTkVDVF9XUkFQUEVSX0lEIiwiV0FMTEVUQ09OTkVDVF9TVFlMRV9JRCIsIldBTExFVENPTk5FQ1RfTU9EQUxfSUQiLCJXQUxMRVRDT05ORUNUX0NUQV9URVhUX0lEIiwiSGVhZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwib25DbGljayIsIm9uQ2xvc2UiLCJpZCIsIkNvbm5lY3RCdXR0b24iLCJXQUxMRVRDT05ORUNUX0NPTk5FQ1RfQlVUVE9OX0lEIiwicmVsIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0YXJnZXQiLCJXYWxsZXRCdXR0b24iLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJXYWxsZXRJY29uIiwiZm9udFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiTGlua0Rpc3BsYXkiLCJhbmRyb2lkIiwicmVmIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwicmVmJDEiLCJzZXRGaWx0ZXIiLCJyZWYkMiIsInBhZ2UiLCJzZXRQYWdlIiwibGluayIsImVycm9yTWVzc2FnZSIsImdyaWQiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwicmFuZ2UiLCJwYWdlTGlua3MiLCJfIiwiaW5kZXgiLCJoYXNQYWdpbmciLCJmaWx0ZXJUaW1lb3V0IiwidGV4dCIsImNvbm5lY3RfbW9iaWxlX3dhbGxldCIsImNob29zZV9wcmVmZXJyZWRfd2FsbGV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY29ubmVjdCIsInVzZUNhbGxiYWNrIiwiaGFuZGxlQ2xpY2tJT1MiLCJGcmFnbWVudCIsIm5vX3dhbGxldHNfZm91bmQiLCJsb2FkaW5nIiwiZmlsbCIsInBhZ2VOdW1iZXIiLCJzZWxlY3RlZCIsIm1hcmdpbiIsImZvbnRXZWlnaHQiLCJOb3RpZmljYXRpb24iLCJzaG93IiwibWVzc2FnZSIsInRyaW0iLCJRUkNvZGVEaXNwbGF5Iiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwic3ZnIiwic2V0U3ZnIiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXN1bHQiLCJ0b1N0cmluZyIsInRoZW4iLCJkYXRhU3RyaW5nIiwicmVwbGFjZSIsInJlamVjdCIsImZvcm1hdFFSQ29kZUltYWdlIiwiX2Zvcm1hdFFSQ29kZUltYWdlIiwic2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvcGllZF90b19jbGlwYm9hcmQiLCJzZXRJbnRlcnZhbCIsImNvcHlfdG9fY2xpcGJvYXJkIiwiTW9kYWwiLCJtb2JpbGUiLCJxcmNvZGVNb2RhbE9wdGlvbnMiLCJtb2JpbGVMaW5rcyIsImRlc2t0b3BMaW5rcyIsInNldExvYWRpbmciLCJmZXRjaGVkIiwic2V0RmV0Y2hlZCIsImRpc3BsYXlRUkNvZGUiLCJzZXREaXNwbGF5UVJDb2RlIiwiZGlzcGxheVByb3BzIiwicmVmJDMiLCJzaW5nbGVMaW5rSHJlZiIsInNldFNpbmdsZUxpbmtIcmVmIiwicmVmJDQiLCJoYXNTaW5nbGVMaW5rIiwic2V0SGFzU2luZ2xlTGluayIsInJlZiQ1Iiwic2V0TGlua3MiLCJyZWYkNiIsInNldEVycm9yTWVzc2FnZSIsImdldExpbmtzSWZOZWVkZWQiLCJfdGVtcCIsImJvZHkiLCJyZWNvdmVyIiwiX2NhdGNoIiwidXJsIiwicmVnaXN0cnlVcmwiLCJmZXRjaCIsInJlZ2lzdHJ5UmVzcG9uc2UiLCJqc29uIiwiX3JlZ2lzdHJ5UmVzcG9uc2UkanNvIiwibGlzdGluZ3MiLCJfbGlua3MiLCJub19zdXBwb3J0ZWRfd2FsbGV0cyIsInNvbWV0aGluZ193ZW50X3dyb25nIiwiY29uc29sZSIsImVycm9yIiwiaW5pdExpbmtzIiwicmlnaHRTZWxlY3RlZCIsImNvbm5lY3Rfd2l0aCIsInFyY29kZSIsImRlc2t0b3AiLCJsYW5ndWFnZXMiLCJkZSIsImVuIiwiZXMiLCJmciIsImtvIiwicHQiLCJ6aCIsImZhIiwidHJpZ2dlckNsb3NlQW5pbWF0aW9uIiwiZG9jIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsIndyYXBwZXIiLCJyZW1vdmVDaGlsZCIsImdldFdyYXBwZWRDYWxsYmFjayIsImNiIiwiZ2V0VGV4dCIsImxhbmciLCJsYW5ndWFnZSIsIm9wZW4kMSIsInByZXYiLCJoZWFkIiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJpbmplY3RTdHlsZVNoZWV0IiwicmVuZGVyV3JhcHBlciIsInJlbmRlciIsInZlcnNpb25zIiwibm9kZSIsIm9wZW4iLCJsb2ciLCJjbG9zZSIsImNsb3NlJDEiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVzIiwiZGVmaW5lUHJvcGVydHkiLCJ3aW5kb3dfZ2V0dGVyc18xIiwibG9jIiwiZ2V0V2luZG93TWV0YWRhdGFPZkFueSIsImFyZ3MiLCJtZXRhVGFncyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidGFnIiwiYXR0cmlidXRlcyIsImdldEF0dHJpYnV0ZSIsImF0dHIiLCJjb250ZW50IiwidGl0bGUiLCJnZXROYW1lIiwiZGVzY3JpcHRpb24iLCJnZXREZXNjcmlwdGlvbiIsIm9yaWdpbiIsImljb25zIiwiaW5kZXhPZiIsImFic29sdXRlSHJlZiIsInByb3RvY29sIiwiaG9zdCIsInBhdGgiLCJwYXRobmFtZSIsInBvcCIsImFic29sdXRlVXJsIiwiZ2V0SWNvbnMiLCJieXRlTGVuZ3RoIiwiYjY0IiwibGVucyIsImdldExlbnMiLCJ2YWxpZExlbiIsInBsYWNlSG9sZGVyc0xlbiIsInRvQnl0ZUFycmF5IiwidG1wIiwiYXJyIiwiQXJyIiwiX2J5dGVMZW5ndGgiLCJjdXJCeXRlIiwibGVuIiwicmV2TG9va3VwIiwiY2hhckNvZGVBdCIsImZyb21CeXRlQXJyYXkiLCJ1aW50OCIsImV4dHJhQnl0ZXMiLCJwYXJ0cyIsIm1heENodW5rTGVuZ3RoIiwibGVuMiIsImVuY29kZUNodW5rIiwibG9va3VwIiwiVWludDhBcnJheSIsImNvZGUiLCJ0cmlwbGV0VG9CYXNlNjQiLCJudW0iLCJzdGFydCIsImVuZCIsImRlc2VsZWN0Q3VycmVudCIsImNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmciLCJvcHRpb25zIiwiZGVidWciLCJyZXNlbGVjdFByZXZpb3VzIiwic2VsZWN0aW9uIiwibWFyayIsInN1Y2Nlc3MiLCJjcmVhdGVSYW5nZSIsImdldFNlbGVjdGlvbiIsInRleHRDb250ZW50IiwiYWxsIiwicG9zaXRpb24iLCJ0b3AiLCJjbGlwIiwid2hpdGVTcGFjZSIsIndlYmtpdFVzZXJTZWxlY3QiLCJNb3pVc2VyU2VsZWN0IiwibXNVc2VyU2VsZWN0IiwidXNlclNlbGVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtYXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaXBib2FyZERhdGEiLCJ3YXJuIiwiY2xlYXJEYXRhIiwic2V0RGF0YSIsIm9uQ29weSIsInNlbGVjdE5vZGVDb250ZW50cyIsImFkZFJhbmdlIiwiZXhlY0NvbW1hbmQiLCJlcnIiLCJjb3B5S2V5IiwidGVzdCIsInByb21wdCIsInJlbW92ZVJhbmdlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZGlqa3N0cmEiLCJzaW5nbGVfc291cmNlX3Nob3J0ZXN0X3BhdGhzIiwiZ3JhcGgiLCJkIiwicHJlZGVjZXNzb3JzIiwiY29zdHMiLCJQcmlvcml0eVF1ZXVlIiwibWFrZSIsImNsb3Nlc3QiLCJ1IiwidiIsImNvc3Rfb2Zfc190b191IiwiYWRqYWNlbnRfbm9kZXMiLCJjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSIsImNvc3Rfb2Zfc190b192IiwiZW1wdHkiLCJjb3N0IiwiaGFzT3duUHJvcGVydHkiLCJtc2ciLCJleHRyYWN0X3Nob3J0ZXN0X3BhdGhfZnJvbV9wcmVkZWNlc3Nvcl9saXN0Iiwibm9kZXMiLCJyZXZlcnNlIiwiZmluZF9wYXRoIiwib3B0cyIsIlQiLCJ0IiwicXVldWUiLCJzb3J0ZXIiLCJkZWZhdWx0X3NvcnRlciIsImIiLCJpdGVtIiwic29ydCIsInNoaWZ0IiwicmVhZCIsImJ1ZmZlciIsIm9mZnNldCIsImlzTEUiLCJtTGVuIiwibkJ5dGVzIiwibSIsImVMZW4iLCJlTWF4IiwiZUJpYXMiLCJuQml0cyIsIk5hTiIsIkluZmluaXR5IiwicG93Iiwid3JpdGUiLCJjIiwicnQiLCJhYnMiLCJpc05hTiIsImZsb29yIiwiTE4yIiwiaXNBcnJheSIsImNhbGwiLCJuIiwibyIsImYiLCJsIiwicGFyZW50Tm9kZSIsImgiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsInAiLCJfX2siLCJfXyIsIl9fYiIsIl9fZSIsIl9fZCIsIl9fYyIsImNvbnN0cnVjdG9yIiwiX192Iiwidm5vZGUiLCJ5IiwiY29udGV4dCIsInciLCJiYXNlIiwiZyIsImRlYm91bmNlUmVuZGVyaW5nIiwic29tZSIsIl9fUCIsIkEiLCJfX24iLCJvd25lclNWR0VsZW1lbnQiLCJ4IiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJEIiwiQyIsInNldFByb3BlcnR5IiwiTiIsImNzc1RleHQiLCJ6IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJldmVudCIsIlAiLCJjb250ZXh0VHlwZSIsIl9fRSIsInByb3RvdHlwZSIsIkUiLCJzdWIiLCJzdGF0ZSIsIl9faCIsIl9fcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfX3IiLCJnZXRDaGlsZENvbnRleHQiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsIiQiLCJkaWZmZWQiLCJub2RlVHlwZSIsImxvY2FsTmFtZSIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudE5TIiwiaXMiLCJjaGlsZE5vZGVzIiwiaW5uZXJIVE1MIiwiY2hlY2tlZCIsImN1cnJlbnQiLCJ1bm1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJIIiwiSSIsIkwiLCJNIiwiQ29uc3VtZXIiLCJQcm92aWRlciIsInNwbGljZSIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJmb3JjZVVwZGF0ZSIsImJpbmQiLCJfX0giLCJjb25jYXQiLCJ1c2VEZWJ1Z1ZhbHVlIiwiRiIsImZvckVhY2giLCJxIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsImNyZWF0ZSIsIl9fcHJvdG9fXyIsImlzUmVhY3RDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsIlMiLCJSIiwib25seSIsInRvQXJyYXkiLCJVIiwiX191IiwiZGVmYXVsdCIsIk8iLCJmYWxsYmFjayIsImRlbGV0ZSIsInJldmVhbE9yZGVyIiwic2l6ZSIsImdldCIsIk1hcCIsInNldCIsIlciLCJjb250YWluZXIiLCJmb3IiLCJmaXJzdENoaWxkIiwiViIsIloiLCJjb25maWd1cmFibGUiLCJwZXJzaXN0IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJuYXRpdmVFdmVudCIsImNsYXNzIiwiJCR0eXBlb2YiLCJlbnVtZXJhYmxlIiwiZGVmYXVsdFZhbHVlIiwibXVsdGlwbGUiLCJvbmRvdWJsZWNsaWNrIiwib25kYmxjbGljayIsIm9uYmVmb3JlaW5wdXQiLCJvbmNoYW5nZSIsIm9uaW5wdXQiLCJCIiwiRyIsIkoiLCJLIiwiUSIsIlgiLCJZIiwidXNlUmVkdWNlciIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VNZW1vIiwidXNlQ29udGV4dCIsIkNoaWxkcmVuIiwiaHlkcmF0ZSIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJjcmVhdGVQb3J0YWwiLCJjcmVhdGVDb250ZXh0IiwiY3JlYXRlRmFjdG9yeSIsImNsb25lRWxlbWVudCIsImNyZWF0ZVJlZiIsImlzVmFsaWRFbGVtZW50IiwiZmluZERPTU5vZGUiLCJDb21wb25lbnQiLCJQdXJlQ29tcG9uZW50IiwibWVtbyIsImZvcndhcmRSZWYiLCJ1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyIsIlN1c3BlbnNlIiwiU3VzcGVuc2VMaXN0IiwibGF6eSIsImNhblByb21pc2UiLCJDYW52YXNSZW5kZXJlciIsIlN2Z1JlbmRlcmVyIiwicmVuZGVyQ2FudmFzIiwicmVuZGVyRnVuYyIsImNhbnZhcyIsImFyZ3NOdW0iLCJpc0xhc3RBcmdDYiIsImdldENvbnRleHQiLCJ0b0NhbnZhcyIsInRvRGF0YVVSTCIsInJlbmRlclRvRGF0YVVSTCIsImdldFN5bWJvbFNpemUiLCJnZXRSb3dDb2xDb29yZHMiLCJwb3NDb3VudCIsImludGVydmFscyIsInBvc2l0aW9ucyIsImdldFBvc2l0aW9ucyIsImNvb3JkcyIsInBvcyIsInBvc0xlbmd0aCIsIk1vZGUiLCJBTFBIQV9OVU1fQ0hBUlMiLCJBbHBoYW51bWVyaWNEYXRhIiwibW9kZSIsIkFMUEhBTlVNRVJJQyIsImdldEJpdHNMZW5ndGgiLCJnZXRMZW5ndGgiLCJiaXRCdWZmZXIiLCJwdXQiLCJCaXRCdWZmZXIiLCJidWZJbmRleCIsInB1dEJpdCIsImdldExlbmd0aEluQml0cyIsImJpdCIsIkJ1ZmZlclV0aWwiLCJCaXRNYXRyaXgiLCJhbGxvYyIsInJlc2VydmVkQml0Iiwicm93IiwiY29sIiwicmVzZXJ2ZWQiLCJ4b3IiLCJpc1Jlc2VydmVkIiwiQnl0ZURhdGEiLCJCWVRFIiwiZnJvbSIsIkVDTGV2ZWwiLCJFQ19CTE9DS1NfVEFCTEUiLCJFQ19DT0RFV09SRFNfVEFCTEUiLCJnZXRCbG9ja3NDb3VudCIsImVycm9yQ29ycmVjdGlvbkxldmVsIiwiZ2V0VG90YWxDb2Rld29yZHNDb3VudCIsImlzVmFsaWQiLCJsZXZlbCIsInN0cmluZyIsImZyb21TdHJpbmciLCJVdGlscyIsIkcxNV9CQ0giLCJnZXRCQ0hEaWdpdCIsImdldEVuY29kZWRCaXRzIiwibWFzayIsIkVYUF9UQUJMRSIsIkxPR19UQUJMRSIsImV4cCIsIm11bCIsIkthbmppRGF0YSIsIktBTkpJIiwidG9TSklTIiwiUGF0dGVybnMiLCJQQVRURVJOMDAwIiwiUEFUVEVSTjAwMSIsIlBBVFRFUk4wMTAiLCJQQVRURVJOMDExIiwiUEFUVEVSTjEwMCIsIlBBVFRFUk4xMDEiLCJQQVRURVJOMTEwIiwiUEFUVEVSTjExMSIsIlBlbmFsdHlTY29yZXMiLCJnZXRNYXNrQXQiLCJtYXNrUGF0dGVybiIsInBhcnNlSW50IiwiZ2V0UGVuYWx0eU4xIiwicG9pbnRzIiwic2FtZUNvdW50Q29sIiwic2FtZUNvdW50Um93IiwibGFzdENvbCIsImxhc3RSb3ciLCJnZXRQZW5hbHR5TjIiLCJsYXN0IiwiZ2V0UGVuYWx0eU4zIiwiYml0c0NvbCIsImJpdHNSb3ciLCJnZXRQZW5hbHR5TjQiLCJkYXJrQ291bnQiLCJtb2R1bGVzQ291bnQiLCJhcHBseU1hc2siLCJwYXR0ZXJuIiwiZ2V0QmVzdE1hc2siLCJzZXR1cEZvcm1hdEZ1bmMiLCJudW1QYXR0ZXJucyIsImtleXMiLCJiZXN0UGF0dGVybiIsImxvd2VyUGVuYWx0eSIsInBlbmFsdHkiLCJWZXJzaW9uQ2hlY2siLCJSZWdleCIsIk5VTUVSSUMiLCJjY0JpdHMiLCJNSVhFRCIsImdldENoYXJDb3VudEluZGljYXRvciIsImdldEJlc3RNb2RlRm9yRGF0YSIsImRhdGFTdHIiLCJ0ZXN0TnVtZXJpYyIsInRlc3RBbHBoYW51bWVyaWMiLCJ0ZXN0S2FuamkiLCJOdW1lcmljRGF0YSIsImdyb3VwIiwic3Vic3RyIiwicmVtYWluaW5nTnVtIiwiR0YiLCJwMSIsInAyIiwiY29lZmYiLCJtb2QiLCJkaXZpZGVudCIsImRpdmlzb3IiLCJnZW5lcmF0ZUVDUG9seW5vbWlhbCIsImRlZ3JlZSIsInBvbHkiLCJBbGlnbm1lbnRQYXR0ZXJuIiwiRmluZGVyUGF0dGVybiIsIk1hc2tQYXR0ZXJuIiwiRUNDb2RlIiwiUmVlZFNvbG9tb25FbmNvZGVyIiwiVmVyc2lvbiIsIkZvcm1hdEluZm8iLCJTZWdtZW50cyIsInNldHVwRm9ybWF0SW5mbyIsIm1hdHJpeCIsImJpdHMiLCJjcmVhdGVEYXRhIiwic2VnbWVudHMiLCJkYXRhVG90YWxDb2Rld29yZHNCaXRzIiwiZ2V0U3ltYm9sVG90YWxDb2Rld29yZHMiLCJyZW1haW5pbmdCeXRlIiwidG90YWxDb2Rld29yZHMiLCJlY1RvdGFsQ29kZXdvcmRzIiwiZGF0YVRvdGFsQ29kZXdvcmRzIiwiZWNUb3RhbEJsb2NrcyIsImJsb2Nrc0luR3JvdXAxIiwidG90YWxDb2Rld29yZHNJbkdyb3VwMSIsImRhdGFDb2Rld29yZHNJbkdyb3VwMSIsImRhdGFDb2Rld29yZHNJbkdyb3VwMiIsImVjQ291bnQiLCJycyIsImRjRGF0YSIsImVjRGF0YSIsIm1heERhdGFTaXplIiwiZGF0YVNpemUiLCJlbmNvZGUiLCJtYXgiLCJjcmVhdGVDb2Rld29yZHMiLCJjcmVhdGVTeW1ib2wiLCJmcm9tQXJyYXkiLCJlc3RpbWF0ZWRWZXJzaW9uIiwicmF3U2VnbWVudHMiLCJyYXdTcGxpdCIsImdldEJlc3RWZXJzaW9uRm9yRGF0YSIsImJlc3RWZXJzaW9uIiwiZGF0YUJpdHMiLCJtb2R1bGVDb3VudCIsIm1vZHVsZXMiLCJzZXR1cEZpbmRlclBhdHRlcm4iLCJzZXR1cFRpbWluZ1BhdHRlcm4iLCJzZXR1cEFsaWdubWVudFBhdHRlcm4iLCJzZXR1cFZlcnNpb25JbmZvIiwiaW5jIiwiYml0SW5kZXgiLCJieXRlSW5kZXgiLCJkYXJrIiwic2V0dXBEYXRhIiwidG9TSklTRnVuYyIsInNldFRvU0pJU0Z1bmN0aW9uIiwiUG9seW5vbWlhbCIsIkJ1ZmZlciIsImdlblBvbHkiLCJpbml0aWFsaXplIiwicGFkIiwicGFkZGVkRGF0YSIsInJlbWFpbmRlciIsImJ1ZmYiLCJudW1lcmljIiwia2FuamkiLCJieXRlIiwiUmVnRXhwIiwiQllURV9LQU5KSSIsIlRFU1RfS0FOSkkiLCJURVNUX05VTUVSSUMiLCJURVNUX0FMUEhBTlVNRVJJQyIsInN0ciIsImdldFN0cmluZ0J5dGVMZW5ndGgiLCJ1bmVzY2FwZSIsImdldFNlZ21lbnRzIiwiZ2V0U2VnbWVudHNGcm9tU3RyaW5nIiwibnVtU2VncyIsImFscGhhTnVtU2VncyIsImJ5dGVTZWdzIiwia2FuamlTZWdzIiwiaXNLYW5qaU1vZGVFbmFibGVkIiwiczEiLCJzMiIsIm9iaiIsImdldFNlZ21lbnRCaXRzTGVuZ3RoIiwiYnVpbGRTaW5nbGVTZWdtZW50IiwibW9kZXNIaW50IiwiYmVzdE1vZGUiLCJhcnJheSIsImFjYyIsInNlZyIsInNlZ3MiLCJidWlsZE5vZGVzIiwidGFibGUiLCJwcmV2Tm9kZUlkcyIsIm5vZGVHcm91cCIsImN1cnJlbnROb2RlSWRzIiwibGFzdENvdW50IiwicHJldk5vZGVJZCIsImJ1aWxkR3JhcGgiLCJvcHRpbWl6ZWRTZWdzIiwiY3VyciIsInByZXZTZWciLCJtZXJnZVNlZ21lbnRzIiwidG9TSklTRnVuY3Rpb24iLCJDT0RFV09SRFNfQ09VTlQiLCJkaWdpdCIsIkcxOF9CQ0giLCJnZXRSZXNlcnZlZEJpdHNDb3VudCIsImdldFRvdGFsQml0c0Zyb21EYXRhQXJyYXkiLCJ0b3RhbEJpdHMiLCJyZXNlcnZlZEJpdHMiLCJnZXRDYXBhY2l0eSIsInVzYWJsZUJpdHMiLCJlY2wiLCJjdXJyZW50VmVyc2lvbiIsImdldEJlc3RWZXJzaW9uRm9yTWl4ZWREYXRhIiwiZ2V0QmVzdFZlcnNpb25Gb3JEYXRhTGVuZ3RoIiwicXJEYXRhIiwiY2FudmFzRWwiLCJnZXRDYW52YXNFbGVtZW50IiwiZ2V0T3B0aW9ucyIsImdldEltYWdlV2lkdGgiLCJjdHgiLCJpbWFnZSIsImNyZWF0ZUltYWdlRGF0YSIsInFyVG9JbWFnZURhdGEiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyQ2FudmFzIiwicHV0SW1hZ2VEYXRhIiwicmVuZGVyZXJPcHRzIiwicXVhbGl0eSIsImdldENvbG9yQXR0cmliIiwiYXR0cmliIiwiYWxwaGEiLCJoZXgiLCJ0b0ZpeGVkIiwic3ZnQ21kIiwiY21kIiwicXJjb2Rlc2l6ZSIsImJnIiwibGlnaHQiLCJtb3ZlQnkiLCJuZXdSb3ciLCJsaW5lTGVuZ3RoIiwicXJUb1BhdGgiLCJ2aWV3Qm94Iiwic3ZnVGFnIiwiaGV4MnJnYmEiLCJoZXhDb2RlIiwiYXBwbHkiLCJoZXhWYWx1ZSIsInNjYWxlIiwiZ2V0U2NhbGUiLCJxclNpemUiLCJpbWdEYXRhIiwicXIiLCJzeW1ib2xTaXplIiwic2NhbGVkTWFyZ2luIiwicGFsZXR0ZSIsInBvc0RzdCIsInB4Q29sb3IiLCJUWVBFRF9BUlJBWV9TVVBQT1JUIiwiZm9vIiwidHlwZWRBcnJheVN1cHBvcnQiLCJLX01BWF9MRU5HVEgiLCJhcmciLCJhbGxvY1Vuc2FmZSIsInRoYXQiLCJUeXBlRXJyb3IiLCJBcnJheUJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJSYW5nZUVycm9yIiwiYnVmIiwiZnJvbUFycmF5TGlrZSIsImZyb21BcnJheUJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImFjdHVhbCIsImlzQnVmZmVyIiwidmFsIiwiaXNuYW4iLCJmcm9tT2JqZWN0IiwidXRmOFRvQnl0ZXMiLCJ1bml0cyIsImNvZGVQb2ludCIsImxlYWRTdXJyb2dhdGUiLCJieXRlcyIsImlzVmlldyIsInNwZWNpZXMiLCJ3cml0YWJsZSIsImlzRmluaXRlIiwicmVtYWluaW5nIiwiZHN0IiwiYmxpdEJ1ZmZlciIsInV0ZjhXcml0ZSIsIm5ld0J1ZiIsInN1YmFycmF5Iiwic2xpY2VMZW4iLCJ0YXJnZXRTdGFydCIsImxpc3QiLCJfaXNCdWZmZXIiLCJiYXNlNjQiLCJpZWVlNzU0IiwiY3VzdG9tSW5zcGVjdFN5bWJvbCIsInNldFByb3RvdHlwZU9mIiwiZW5jb2RpbmdPck9mZnNldCIsImVuY29kaW5nIiwiaXNFbmNvZGluZyIsImFycmF5VmlldyIsImlzSW5zdGFuY2UiLCJmcm9tQXJyYXlWaWV3IiwiU2hhcmVkQXJyYXlCdWZmZXIiLCJ2YWx1ZU9mIiwibnVtYmVySXNOYU4iLCJ0b1ByaW1pdGl2ZSIsImFzc2VydFNpemUiLCJtdXN0TWF0Y2giLCJsb3dlcmVkQ2FzZSIsImJhc2U2NFRvQnl0ZXMiLCJzbG93VG9TdHJpbmciLCJoZXhTbGljZSIsInV0ZjhTbGljZSIsImFzY2lpU2xpY2UiLCJsYXRpbjFTbGljZSIsImJhc2U2NFNsaWNlIiwidXRmMTZsZVNsaWNlIiwic3dhcCIsImJpZGlyZWN0aW9uYWxJbmRleE9mIiwiZGlyIiwiYXJyYXlJbmRleE9mIiwibGFzdEluZGV4T2YiLCJpbmRleFNpemUiLCJhcnJMZW5ndGgiLCJ2YWxMZW5ndGgiLCJTdHJpbmciLCJyZWFkVUludDE2QkUiLCJmb3VuZEluZGV4IiwiZm91bmQiLCJoZXhXcml0ZSIsIk51bWJlciIsInN0ckxlbiIsInBhcnNlZCIsImFzY2lpV3JpdGUiLCJieXRlQXJyYXkiLCJhc2NpaVRvQnl0ZXMiLCJiYXNlNjRXcml0ZSIsInVjczJXcml0ZSIsImhpIiwibG8iLCJ1dGYxNmxlVG9CeXRlcyIsIm1pbiIsImZpcnN0Qnl0ZSIsImJ5dGVzUGVyU2VxdWVuY2UiLCJzZWNvbmRCeXRlIiwidGhpcmRCeXRlIiwiZm91cnRoQnl0ZSIsInRlbXBDb2RlUG9pbnQiLCJjb2RlUG9pbnRzIiwiTUFYX0FSR1VNRU5UU19MRU5HVEgiLCJmcm9tQ2hhckNvZGUiLCJkZWNvZGVDb2RlUG9pbnRzQXJyYXkiLCJwcm90byIsInBvb2xTaXplIiwiYWxsb2NVbnNhZmVTbG93IiwiY29tcGFyZSIsInN3YXAxNiIsInN3YXAzMiIsInN3YXA2NCIsInRvTG9jYWxlU3RyaW5nIiwiZXF1YWxzIiwiaW5zcGVjdCIsInRoaXNTdGFydCIsInRoaXNFbmQiLCJ0aGlzQ29weSIsInRhcmdldENvcHkiLCJ0b0pTT04iLCJfYXJyIiwicmV0Iiwib3V0IiwiaGV4U2xpY2VMb29rdXBUYWJsZSIsImNoZWNrT2Zmc2V0IiwiZXh0IiwiY2hlY2tJbnQiLCJjaGVja0lFRUU3NTQiLCJ3cml0ZUZsb2F0IiwibGl0dGxlRW5kaWFuIiwibm9Bc3NlcnQiLCJ3cml0ZURvdWJsZSIsInJlYWRVaW50TEUiLCJyZWFkVUludExFIiwicmVhZFVpbnRCRSIsInJlYWRVSW50QkUiLCJyZWFkVWludDgiLCJyZWFkVUludDgiLCJyZWFkVWludDE2TEUiLCJyZWFkVUludDE2TEUiLCJyZWFkVWludDE2QkUiLCJyZWFkVWludDMyTEUiLCJyZWFkVUludDMyTEUiLCJyZWFkVWludDMyQkUiLCJyZWFkVUludDMyQkUiLCJyZWFkSW50TEUiLCJyZWFkSW50QkUiLCJyZWFkSW50OCIsInJlYWRJbnQxNkxFIiwicmVhZEludDE2QkUiLCJyZWFkSW50MzJMRSIsInJlYWRJbnQzMkJFIiwicmVhZEZsb2F0TEUiLCJyZWFkRmxvYXRCRSIsInJlYWREb3VibGVMRSIsInJlYWREb3VibGVCRSIsIndyaXRlVWludExFIiwid3JpdGVVSW50TEUiLCJ3cml0ZVVpbnRCRSIsIndyaXRlVUludEJFIiwid3JpdGVVaW50OCIsIndyaXRlVUludDgiLCJ3cml0ZVVpbnQxNkxFIiwid3JpdGVVSW50MTZMRSIsIndyaXRlVWludDE2QkUiLCJ3cml0ZVVJbnQxNkJFIiwid3JpdGVVaW50MzJMRSIsIndyaXRlVUludDMyTEUiLCJ3cml0ZVVpbnQzMkJFIiwid3JpdGVVSW50MzJCRSIsIndyaXRlSW50TEUiLCJsaW1pdCIsIndyaXRlSW50QkUiLCJ3cml0ZUludDgiLCJ3cml0ZUludDE2TEUiLCJ3cml0ZUludDE2QkUiLCJ3cml0ZUludDMyTEUiLCJ3cml0ZUludDMyQkUiLCJ3cml0ZUZsb2F0TEUiLCJ3cml0ZUZsb2F0QkUiLCJ3cml0ZURvdWJsZUxFIiwid3JpdGVEb3VibGVCRSIsImNvcHlXaXRoaW4iLCJJTlZBTElEX0JBU0U2NF9SRSIsImJhc2U2NGNsZWFuIiwiYWxwaGFiZXQiLCJpMTYiLCJyYW5nZUNvdW50IiwiYWN0aXZlIiwiYWN0aXZlRWxlbWVudCIsInJhbmdlcyIsImdldFJhbmdlQXQiLCJ0YWdOYW1lIiwidG9VcHBlckNhc2UiLCJibHVyIiwiZm9jdXMiXSwic291cmNlUm9vdCI6IiJ9