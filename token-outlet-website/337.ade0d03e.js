/*! For license information please see 337.ade0d03e.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 337 ], {
  5522: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
      detectEnv: () => m,
      detectOS: () => w,
      formatIOSMobile: () => H,
      formatMobileRegistry: () => Z,
      formatMobileRegistryEntry: () => X,
      getClientMeta: () => U,
      getCrypto: () => O,
      getCryptoOrThrow: () => P,
      getDappRegistryUrl: () => Q,
      getDocument: () => B,
      getDocumentOrThrow: () => S,
      getFromWindow: () => k,
      getFromWindowOrThrow: () => A,
      getLocal: () => F,
      getLocalStorage: () => M,
      getLocalStorageOrThrow: () => I,
      getLocation: () => L,
      getLocationOrThrow: () => N,
      getMobileLinkRegistry: () => $,
      getMobileRegistryEntry: () => V,
      getNavigator: () => R,
      getNavigatorOrThrow: () => T,
      getWalletRegistryUrl: () => J,
      isAndroid: () => y,
      isBrowser: () => C,
      isIOS: () => b,
      isMobile: () => x,
      isNode: () => E,
      mobileLinkChoiceKey: () => j,
      removeLocal: () => q,
      safeJsonParse: () => D,
      safeJsonStringify: () => z,
      saveMobileLinkInfo: () => Y,
      setLocal: () => W
    });
    var r = n(5755);
    var o = n(2873);
    var i = n(4155);
    var a = function() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
      var r = Array(e), o = 0;
      for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, l = i.length; a < l; a++, o++) r[o] = i[a];
      return r;
    };
    var l = function() {
      return function(e, t, n) {
        this.name = e, this.version = t, this.os = n, this.type = 'browser';
      };
    }();
    var u = function() {
      return function(e) {
        this.version = e, this.type = 'node', this.name = 'node', this.os = i.platform;
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
    var f = function() {
      return function() {
        this.type = 'react-native', this.name = 'react-native', this.version = null, this.os = null;
      };
    }();
    var h = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
    var p = [ [ 'aol', /AOLShield\/([0-9\._]+)/ ], [ 'edge', /Edge\/([0-9\._]+)/ ], [ 'edge-ios', /EdgiOS\/([0-9\._]+)/ ], [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ], [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ], [ 'samsung', /SamsungBrowser\/([0-9\.]+)/ ], [ 'silk', /\bSilk\/([0-9._-]+)\b/ ], [ 'miui', /MiuiBrowser\/([0-9\.]+)$/ ], [ 'beaker', /BeakerBrowser\/([0-9\.]+)/ ], [ 'edge-chromium', /EdgA?\/([0-9\.]+)/ ], [ 'chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ], [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ], [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ], [ 'fxios', /FxiOS\/([0-9\.]+)/ ], [ 'opera-mini', /Opera Mini.*Version\/([0-9\.]+)/ ], [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ], [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)/ ], [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ], [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ], [ 'ie', /MSIE\s(7\.0)/ ], [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ], [ 'android', /Android\s([0-9\.]+)/ ], [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ], [ 'safari', /Version\/([0-9\._]+).*Safari/ ], [ 'facebook', /FBAV\/([0-9\.]+)/ ], [ 'instagram', /Instagram\s([0-9\.]+)/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/ ], [ 'searchbot', /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/ ] ];
    var d = [ [ 'iOS', /iP(hone|od|ad)/ ], [ 'Android OS', /Android/ ], [ 'BlackBerry OS', /BlackBerry|BB10/ ], [ 'Windows Mobile', /IEMobile/ ], [ 'Amazon OS', /Kindle/ ], [ 'Windows 3.11', /Win16/ ], [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ], [ 'Windows 98', /(Windows 98)|(Win98)/ ], [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ], [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ], [ 'Windows Server 2003', /(Windows NT 5.2)/ ], [ 'Windows Vista', /(Windows NT 6.0)/ ], [ 'Windows 7', /(Windows NT 6.1)/ ], [ 'Windows 8', /(Windows NT 6.2)/ ], [ 'Windows 8.1', /(Windows NT 6.3)/ ], [ 'Windows 10', /(Windows NT 10.0)/ ], [ 'Windows ME', /Windows ME/ ], [ 'Open BSD', /OpenBSD/ ], [ 'Sun OS', /SunOS/ ], [ 'Chrome OS', /CrOS/ ], [ 'Linux', /(Linux)|(X11)/ ], [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ], [ 'QNX', /QNX/ ], [ 'BeOS', /BeOS/ ], [ 'OS/2', /OS\/2/ ] ];
    function _(e) {
      return e ? v(e) : 'undefined' == typeof document && 'undefined' != typeof navigator && 'ReactNative' === navigator.product ? new f : 'undefined' != typeof navigator ? v(navigator.userAgent) : function() {
        return void 0 !== i && i.version ? new u(i.version.slice(1)) : null;
      }();
    }
    function g(e) {
      return '' !== e && p.reduce((function(t, n) {
        var r = n[0], o = n[1];
        if (t) return t;
        var i = o.exec(e);
        return !!i && [ r, i ];
      }), !1);
    }
    function v(e) {
      var t = g(e);
      if (!t) return null;
      var n = t[0], r = t[1];
      if ('searchbot' === n) return new s;
      var o = r[1] && r[1].split(/[._]/).slice(0, 3);
      o ? o.length < 3 && (o = a(o, function(e) {
        var t = [];
        for (var n = 0; n < e; n++) t.push('0');
        return t;
      }(3 - o.length))) : o = [];
      var i = o.join('.');
      var u = function(e) {
        for (var t = 0, n = d.length; t < n; t++) {
          var r = d[t], o = r[0];
          if (r[1].exec(e)) return o;
        }
        return null;
      }(e);
      var f = h.exec(e);
      return f && f[1] ? new c(n, i, u, f[1]) : new l(n, i, u);
    }
    function m(e) {
      return _(e);
    }
    function w() {
      const e = m();
      return e && e.os ? e.os : void 0;
    }
    function y() {
      const e = w();
      return !!e && e.toLowerCase().includes("android");
    }
    function b() {
      const e = w();
      return !!e && (e.toLowerCase().includes("ios") || e.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1);
    }
    function x() {
      return !!w() && (y() || b());
    }
    function E() {
      const e = m();
      return !(!e || !e.name) && "node" === e.name.toLowerCase();
    }
    function C() {
      return !E() && !!R();
    }
    const k = o.getFromWindow;
    const A = o.getFromWindowOrThrow;
    const S = o.getDocumentOrThrow;
    const B = o.getDocument;
    const T = o.getNavigatorOrThrow;
    const R = o.getNavigator;
    const N = o.getLocationOrThrow;
    const L = o.getLocation;
    const P = o.getCryptoOrThrow;
    const O = o.getCrypto;
    const I = o.getLocalStorageOrThrow;
    const M = o.getLocalStorage;
    function U() {
      return r.D();
    }
    const D = function(e) {
      if ("string" != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
      try {
        return JSON.parse(e);
      } catch (t) {
        return e;
      }
    };
    const z = function(e) {
      return "string" == typeof e ? e : JSON.stringify(e);
    };
    function W(e, t) {
      const n = z(t);
      const r = M();
      r && r.setItem(e, n);
    }
    function F(e) {
      let t = null;
      let n = null;
      const r = M();
      return r && (n = r.getItem(e)), t = n ? D(n) : n, t;
    }
    function q(e) {
      const t = M();
      t && t.removeItem(e);
    }
    const j = "WALLETCONNECT_DEEPLINK_CHOICE";
    function H(e, t) {
      const n = encodeURIComponent(e);
      return t.universalLink ? `${t.universalLink}/wc?uri=${n}` : t.deepLink ? `${t.deepLink}${t.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${n}` : "";
    }
    function Y(e) {
      const t = e.href.split("?")[0];
      W(j, Object.assign(Object.assign({}, e), {
        href: t
      }));
    }
    function V(e, t) {
      return e.filter((e => e.name.toLowerCase().includes(t.toLowerCase())))[0];
    }
    function $(e, t) {
      let n = e;
      return t && (n = t.map((t => V(e, t))).filter(Boolean)), n;
    }
    const K = "https://registry.walletconnect.com";
    function J() {
      return K + "/api/v2/wallets";
    }
    function Q() {
      return K + "/api/v2/dapps";
    }
    function X(e, t = "mobile") {
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
    function Z(e, t = "mobile") {
      return Object.values(e).filter((e => !!e[t].universal || !!e[t].native)).map((e => X(e, t)));
    }
  },
  4337: (e, t, n) => {
    var r = n(5108);
    var o = n(4155);
    function i(e) {
      return e && 'object' == typeof e && 'default' in e ? e.default : e;
    }
    var a = n(5522);
    var l = i(n(2592));
    var u = i(n(640));
    var c = n(5776);
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
    "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var s = "walletconnect-wrapper";
    var f = "walletconnect-style-sheet";
    var h = "walletconnect-qrcode-modal";
    var p = "walletconnect-qrcode-text";
    function d(e) {
      return c.createElement("div", {
        className: "walletconnect-modal__header"
      }, c.createElement("img", {
        src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
        className: "walletconnect-modal__headerLogo"
      }), c.createElement("p", null, "WalletConnect"), c.createElement("div", {
        className: "walletconnect-modal__close__wrapper",
        onClick: e.onClose
      }, c.createElement("div", {
        id: "walletconnect-qrcode-close",
        className: "walletconnect-modal__close__icon"
      }, c.createElement("div", {
        className: "walletconnect-modal__close__line1"
      }), c.createElement("div", {
        className: "walletconnect-modal__close__line2"
      }))));
    }
    function _(e) {
      return c.createElement("a", {
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
    function g(e) {
      var t = e.color;
      var n = e.href;
      var r = e.name;
      var o = e.logo;
      var i = e.onClick;
      return c.createElement("a", {
        className: "walletconnect-modal__base__row",
        href: n,
        onClick: i,
        rel: "noopener noreferrer",
        target: "_blank"
      }, c.createElement("h3", {
        className: "walletconnect-modal__base__row__h3"
      }, r), c.createElement("div", {
        className: "walletconnect-modal__base__row__right"
      }, c.createElement("div", {
        className: "walletconnect-modal__base__row__right__app-icon",
        style: {
          background: "url('" + o + "') " + t,
          backgroundSize: "100%"
        }
      }), c.createElement("img", {
        src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
        className: "walletconnect-modal__base__row__right__caret"
      })));
    }
    function v(e) {
      var t = e.color;
      var n = e.href;
      var r = e.name;
      var o = e.logo;
      var i = e.onClick;
      var a = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
      return c.createElement("a", {
        className: "walletconnect-connect__button__icon_anchor",
        href: n,
        onClick: i,
        rel: "noopener noreferrer",
        target: "_blank"
      }, c.createElement("div", {
        className: "walletconnect-connect__button__icon",
        style: {
          background: "url('" + o + "') " + t,
          backgroundSize: "100%"
        }
      }), c.createElement("div", {
        style: {
          fontSize: a
        },
        className: "walletconnect-connect__button__text"
      }, r));
    }
    function m(e) {
      var t = a.isAndroid();
      var n = c.useState("");
      var r = n[0];
      var o = n[1];
      var i = c.useState("");
      var l = i[0];
      var u = i[1];
      var s = c.useState(1);
      var f = s[0];
      var h = s[1];
      var d = l ? e.links.filter((function(e) {
        return e.name.toLowerCase().includes(l.toLowerCase());
      })) : e.links;
      var m = e.errorMessage;
      var w = l || d.length > 5;
      var y = Math.ceil(d.length / 12);
      var b = [ 12 * (f - 1) + 1, 12 * f ];
      var x = d.length ? d.filter((function(e, t) {
        return t + 1 >= b[0] && t + 1 <= b[1];
      })) : [];
      var E = !(t || !(y > 1));
      var C = void 0;
      return c.createElement("div", null, c.createElement("p", {
        id: p,
        className: "walletconnect-qrcode__text"
      }, t ? e.text.connect_mobile_wallet : e.text.choose_preferred_wallet), !t && c.createElement("input", {
        className: "walletconnect-search__input",
        placeholder: "Search",
        value: r,
        onChange: function(e) {
          o(e.target.value), clearTimeout(C), e.target.value ? C = setTimeout((function() {
            u(e.target.value), h(1);
          }), 1e3) : (o(""), u(""), h(1));
        }
      }), c.createElement("div", {
        className: "walletconnect-connect__buttons__wrapper" + (t ? "__android" : w && d.length ? "__wrap" : "")
      }, t ? c.createElement(_, {
        name: e.text.connect,
        color: "rgb(64, 153, 255)",
        href: e.uri,
        onClick: c.useCallback((function() {
          a.saveMobileLinkInfo({
            name: "Unknown",
            href: e.uri
          });
        }), [])
      }) : x.length ? x.map((function(t) {
        var n = t.color;
        var r = t.name;
        var o = t.shortName;
        var i = t.logo;
        var l = a.formatIOSMobile(e.uri, t);
        var u = c.useCallback((function() {
          a.saveMobileLinkInfo({
            name: r,
            href: l
          });
        }), [ x ]);
        return w ? c.createElement(v, {
          color: n,
          href: l,
          name: o || r,
          logo: i,
          onClick: u
        }) : c.createElement(g, {
          color: n,
          href: l,
          name: r,
          logo: i,
          onClick: u
        });
      })) : c.createElement(c.Fragment, null, c.createElement("p", null, m.length ? e.errorMessage : e.links.length && !d.length ? e.text.no_wallets_found : e.text.loading))), E && c.createElement("div", {
        className: "walletconnect-modal__footer"
      }, Array(y).fill(0).map((function(e, t) {
        var n = t + 1;
        var r = f === n;
        return c.createElement("a", {
          style: {
            margin: "auto 10px",
            fontWeight: r ? "bold" : "normal"
          },
          onClick: function() {
            return h(n);
          }
        }, n);
      }))));
    }
    function w(e) {
      var t = !!e.message.trim();
      return c.createElement("div", {
        className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "")
      }, e.message);
    }
    function y(e) {
      var t = c.useState("");
      var n = t[0];
      var r = t[1];
      var o = c.useState("");
      var i = o[0];
      var a = o[1];
      c.useEffect((function() {
        try {
          return Promise.resolve(function(e) {
            try {
              var t = "";
              return Promise.resolve(l.toString(e, {
                margin: 0,
                type: "svg"
              })).then((function(e) {
                return "string" == typeof e && (t = e.replace("<svg", "<svg class=\"walletconnect-qrcode__image\"")), t;
              }));
            } catch (n) {
              return Promise.reject(n);
            }
          }(e.uri)).then((function(e) {
            a(e);
          }));
        } catch (t) {
          Promise.reject(t);
        }
      }), []);
      return c.createElement("div", null, c.createElement("p", {
        id: p,
        className: "walletconnect-qrcode__text"
      }, e.text.scan_qrcode_with_wallet), c.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: i
        }
      }), c.createElement("div", {
        className: "walletconnect-modal__footer"
      }, c.createElement("a", {
        onClick: function() {
          u(e.uri) ? (r(e.text.copied_to_clipboard), setInterval((function() {
            return r("");
          }), 1200)) : (r("Error"), setInterval((function() {
            return r("");
          }), 1200));
        }
      }, e.text.copy_to_clipboard)), c.createElement(w, {
        message: n
      }));
    }
    function b(e) {
      var t = a.isAndroid();
      var n = a.isMobile();
      var o = n ? e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks ? e.qrcodeModalOptions.mobileLinks : void 0 : e.qrcodeModalOptions && e.qrcodeModalOptions.desktopLinks ? e.qrcodeModalOptions.desktopLinks : void 0;
      var i = c.useState(!1);
      var l = i[0];
      var u = i[1];
      var s = c.useState(!1);
      var f = s[0];
      var p = s[1];
      var _ = c.useState(!n);
      var g = _[0];
      var v = _[1];
      var w = {
        mobile: n,
        text: e.text,
        uri: e.uri,
        qrcodeModalOptions: e.qrcodeModalOptions
      };
      var b = c.useState("");
      var x = b[0];
      var E = b[1];
      var C = c.useState(!1);
      var k = C[0];
      var A = C[1];
      var S = c.useState([]);
      var B = S[0];
      var T = S[1];
      var R = c.useState("");
      var N = R[0];
      var L = R[1];
      var P = function() {
        f || l || o && !o.length || B.length > 0 || c.useEffect((function() {
          !function() {
            try {
              if (t) return Promise.resolve();
              u(!0);
              var i = function(e, t) {
                try {
                  var n = e();
                } catch (r) {
                  return t(r);
                }
                return n && n.then ? n.then(void 0, t) : n;
              }((function() {
                var t = e.qrcodeModalOptions && e.qrcodeModalOptions.registryUrl ? e.qrcodeModalOptions.registryUrl : a.getWalletRegistryUrl();
                return Promise.resolve(fetch(t)).then((function(t) {
                  return Promise.resolve(t.json()).then((function(t) {
                    var r = t.listings;
                    var i = n ? "mobile" : "desktop";
                    var l = a.getMobileLinkRegistry(a.formatMobileRegistry(r, i), o);
                    u(!1), p(!0), L(l.length ? "" : e.text.no_supported_wallets), T(l);
                    var c = 1 === l.length;
                    c && (E(a.formatIOSMobile(e.uri, l[0])), v(!0)), A(c);
                  }));
                }));
              }), (function(t) {
                u(!1), p(!0), L(e.text.something_went_wrong), r.error(t);
              }));
              Promise.resolve(i && i.then ? i.then((function() {})) : void 0);
            } catch (l) {
              return Promise.reject(l);
            }
          }();
        }));
      };
      P();
      var O = n ? g : !g;
      return c.createElement("div", {
        id: h,
        className: "walletconnect-qrcode__base animated fadeIn"
      }, c.createElement("div", {
        className: "walletconnect-modal__base"
      }, c.createElement(d, {
        onClose: e.onClose
      }), k && g ? c.createElement("div", {
        className: "walletconnect-modal__single_wallet"
      }, c.createElement("a", {
        onClick: function() {
          return a.saveMobileLinkInfo({
            name: B[0].name,
            href: x
          });
        },
        href: x,
        rel: "noopener noreferrer",
        target: "_blank"
      }, e.text.connect_with + " " + (k ? B[0].name : "") + " ›")) : t || l || !l && B.length ? c.createElement("div", {
        className: "walletconnect-modal__mobile__toggle" + (O ? " right__selected" : "")
      }, c.createElement("div", {
        className: "walletconnect-modal__mobile__toggle_selector"
      }), n ? c.createElement(c.Fragment, null, c.createElement("a", {
        onClick: function() {
          return v(!1), P();
        }
      }, e.text.mobile), c.createElement("a", {
        onClick: function() {
          return v(!0);
        }
      }, e.text.qrcode)) : c.createElement(c.Fragment, null, c.createElement("a", {
        onClick: function() {
          return v(!0);
        }
      }, e.text.qrcode), c.createElement("a", {
        onClick: function() {
          return v(!1), P();
        }
      }, e.text.desktop))) : null, c.createElement("div", null, g || !t && !l && !B.length ? c.createElement(y, Object.assign({}, w)) : c.createElement(m, Object.assign({}, w, {
        links: B,
        errorMessage: N
      })))));
    }
    var x = {
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
    function E() {
      var e = a.getDocumentOrThrow();
      var t = e.getElementById(h);
      t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
        var t = e.getElementById(s);
        t && e.body.removeChild(t);
      }), 300));
    }
    function C(e) {
      return function() {
        E(), e && e();
      };
    }
    function k() {
      var e = a.getNavigatorOrThrow().language.split("-")[0] || "en";
      return x[e] || x.en;
    }
    function A(e, t, n) {
      !function() {
        var e = a.getDocumentOrThrow();
        var t = e.getElementById(f);
        t && e.head.removeChild(t);
        var n = e.createElement("style");
        n.setAttribute("id", f), n.innerText = ":root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, \"SF Pro Rounded\", \"SF Pro Text\", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url(\"images/wc-logo.svg\") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n", 
        e.head.appendChild(n);
      }();
      var r = function() {
        var e = a.getDocumentOrThrow();
        var t = e.createElement("div");
        return t.setAttribute("id", s), e.body.appendChild(t), t;
      }();
      c.render(c.createElement(b, {
        text: k(),
        uri: e,
        onClose: C(t),
        qrcodeModalOptions: n
      }), r);
    }
    var S = function() {
      return void 0 !== o && void 0 !== o.versions && void 0 !== o.versions.node;
    };
    var B = {
      open: function(e, t, n) {
        r.log(e), S() ? function(e) {
          l.toString(e, {
            type: "terminal"
          }).then(r.log);
        }(e) : A(e, t, n);
      },
      close: function() {
        S() || function() {
          E();
        }();
      }
    };
    e.exports = B;
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
  640: (e, t, n) => {
    "use strict";
    var r = n(5108);
    var o = n(1742);
    var i = {
      "text/plain": "Text",
      "text/html": "Url",
      default: "Text"
    };
    e.exports = function(e, t) {
      var n, a, l, u, c, s, f = !1;
      t || (t = {}), n = t.debug || !1;
      try {
        if (l = o(), u = document.createRange(), c = document.getSelection(), (s = document.createElement("span")).textContent = e, 
        s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", 
        s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", 
        s.addEventListener("copy", (function(o) {
          if (o.stopPropagation(), t.format) if (o.preventDefault(), void 0 === o.clipboardData) {
            n && r.warn("unable to use e.clipboardData"), n && r.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var a = i[t.format] || i.default;
            window.clipboardData.setData(a, e);
          } else o.clipboardData.clearData(), o.clipboardData.setData(t.format, e);
          t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
        })), document.body.appendChild(s), u.selectNodeContents(s), c.addRange(u), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
        f = !0;
      } catch (h) {
        n && r.error("unable to copy using execCommand: ", h), n && r.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), f = !0;
        } catch (h) {
          n && r.error("unable to copy using clipboardData: ", h), n && r.error("falling back to prompt"), a = function(e) {
            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
            return e.replace(/#{\s*key\s*}/g, t);
          }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e);
        }
      } finally {
        c && ("function" == typeof c.removeRange ? c.removeRange(u) : c.removeAllRanges()), s && document.body.removeChild(s), l();
      }
      return f;
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
        var l, u, c, s, f, h, p;
        for (a.push(n, 0); !a.empty(); ) for (c in u = (l = a.pop()).value, s = l.cost, f = e[u] || {}) f.hasOwnProperty(c) && (h = s + f[c], 
        p = i[c], (void 0 === i[c] || p > h) && (i[c] = h, a.push(c, h), o[c] = u));
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
      createElement: () => _,
      createFactory: () => De,
      createPortal: () => Be,
      createRef: () => v,
      default: () => He,
      findDOMNode: () => qe,
      forwardRef: () => ge,
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
    var r, o, i, a, l, u, c, s = {}, f = [], h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function p(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function d(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function _(e, t, n) {
      var r, o = arguments, i = {};
      for (r in t) "key" !== r && "ref" !== r && (i[r] = t[r]);
      if (arguments.length > 3) for (n = [ n ], r = 3; r < arguments.length; r++) n.push(o[r]);
      if (null != n && (i.children = n), "function" == typeof e && null != e.defaultProps) for (r in e.defaultProps) void 0 === i[r] && (i[r] = e.defaultProps[r]);
      return g(e, i, t && t.key, t && t.ref, null);
    }
    function g(e, t, n, o, i) {
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
    function C(e, t, n, r, o, i, a, l, u) {
      var c, h, p, _, g, v, m, w = n && n.__k || f, b = w.length;
      if (l == s && (l = null != i ? i[0] : b ? y(n, 0) : null), c = 0, t.__k = k(t.__k, (function(n) {
        if (null != n) {
          if (n.__ = t, n.__b = t.__b + 1, null === (p = w[c]) || p && n.key == p.key && n.type === p.type) w[c] = void 0; else for (h = 0; h < b; h++) {
            if ((p = w[h]) && n.key == p.key && n.type === p.type) {
              w[h] = void 0;
              break;
            }
            p = null;
          }
          if (_ = T(e, n, p = p || s, r, o, i, a, l, u), (h = n.ref) && p.ref != h && (m || (m = []), p.ref && m.push(p.ref, null, n), 
          m.push(h, n.__c || _, n)), null != _) {
            var f;
            if (null == v && (v = _), void 0 !== n.__d) f = n.__d, n.__d = void 0; else if (i == p || _ != l || null == _.parentNode) {
              e: if (null == l || l.parentNode !== e) e.appendChild(_), f = null; else {
                for (g = l, h = 0; (g = g.nextSibling) && h < b; h += 2) if (g == _) break e;
                e.insertBefore(_, l), f = l;
              }
              "option" == t.type && (e.value = "");
            }
            l = void 0 !== f ? f : _.nextSibling, "function" == typeof t.type && (t.__d = l);
          } else l && p.__e == l && l.parentNode != e && (l = y(p));
        }
        return c++, n;
      })), t.__e = v, null != i && "function" != typeof t.type) for (c = i.length; c--; ) null != i[c] && d(i[c]);
      for (c = b; c--; ) null != w[c] && P(w[c], w[c]);
      if (m) for (c = 0; c < m.length; c++) L(m[c], m[++c], m[++c]);
    }
    function k(e, t, n) {
      if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null)); else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) k(e[r], t, n); else n.push(t ? t("string" == typeof e || "number" == typeof e ? g(null, e, null, null, e) : null != e.__e || null != e.__c ? g(e.type, e.props, e.key, null, e.__v) : e) : e);
      return n;
    }
    function A(e, t, n) {
      "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === h.test(t) ? n + "px" : null == n ? "" : n;
    }
    function S(e, t, n, r, o) {
      var i, a, l, u, c;
      if (o ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t) if (i = e.style, "string" == typeof n) i.cssText = n; else {
        if ("string" == typeof r && (i.cssText = "", r = null), r) for (u in r) n && u in n || A(i, u, "");
        if (n) for (c in n) r && n[c] === r[c] || A(i, c, n[c]);
      } else "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")), l = t.toLowerCase(), t = (l in e ? l : t).slice(2), 
      n ? (r || e.addEventListener(t, B, a), (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, B, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
    function B(e) {
      this.l[e.type](r.event ? r.event(e) : e);
    }
    function T(e, t, n, o, i, a, l, u, c) {
      var s, f, h, d, _, g, v, y, b, x, E = t.type;
      if (void 0 !== t.constructor) return null;
      (s = r.__b) && s(t);
      try {
        e: if ("function" == typeof E) {
          if (y = t.props, b = (s = E.contextType) && o[s.__c], x = s ? b ? b.props.value : s.__ : o, n.__c ? v = (f = t.__c = n.__c).__ = f.__E : ("prototype" in E && E.prototype.render ? t.__c = f = new E(y, x) : (t.__c = f = new w(y, x), 
          f.constructor = E, f.render = O), b && b.sub(f), f.props = y, f.state || (f.state = {}), f.context = x, f.__n = o, h = f.__d = !0, 
          f.__h = []), null == f.__s && (f.__s = f.state), null != E.getDerivedStateFromProps && (f.__s == f.state && (f.__s = p({}, f.__s)), 
          p(f.__s, E.getDerivedStateFromProps(y, f.__s))), d = f.props, _ = f.state, h) null == E.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), 
          null != f.componentDidMount && f.__h.push(f.componentDidMount); else {
            if (null == E.getDerivedStateFromProps && y !== d && null != f.componentWillReceiveProps && f.componentWillReceiveProps(y, x), 
            !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(y, f.__s, x) || t.__v === n.__v && !f.__) {
              for (f.props = y, f.state = f.__s, t.__v !== n.__v && (f.__d = !1), f.__v = t, t.__e = n.__e, t.__k = n.__k, f.__h.length && l.push(f), 
              s = 0; s < t.__k.length; s++) t.__k[s] && (t.__k[s].__ = t);
              break e;
            }
            null != f.componentWillUpdate && f.componentWillUpdate(y, f.__s, x), null != f.componentDidUpdate && f.__h.push((function() {
              f.componentDidUpdate(d, _, g);
            }));
          }
          f.context = x, f.props = y, f.state = f.__s, (s = r.__r) && s(t), f.__d = !1, f.__v = t, f.__P = e, s = f.render(f.props, f.state, f.context), 
          t.__k = null != s && s.type == m && null == s.key ? s.props.children : Array.isArray(s) ? s : [ s ], null != f.getChildContext && (o = p(p({}, o), f.getChildContext())), 
          h || null == f.getSnapshotBeforeUpdate || (g = f.getSnapshotBeforeUpdate(d, _)), C(e, t, n, o, i, a, l, u, c), f.base = t.__e, 
          f.__h.length && l.push(f), v && (f.__E = f.__ = null), f.__e = !1;
        } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N(n.__e, t, n, o, i, a, l, c);
        (s = r.diffed) && s(t);
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
      var u, c, h, p, d, _ = n.props, g = t.props;
      if (o = "svg" === t.type || o, null != i) for (u = 0; u < i.length; u++) if (null != (c = i[u]) && ((null === t.type ? 3 === c.nodeType : c.localName === t.type) || e == c)) {
        e = c, i[u] = null;
        break;
      }
      if (null == e) {
        if (null === t.type) return document.createTextNode(g);
        e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, g.is && {
          is: g.is
        }), i = null, l = !1;
      }
      if (null === t.type) _ !== g && e.data != g && (e.data = g); else {
        if (null != i && (i = f.slice.call(e.childNodes)), h = (_ = n.props || s).dangerouslySetInnerHTML, p = g.dangerouslySetInnerHTML, 
        !l) {
          if (_ === s) for (_ = {}, d = 0; d < e.attributes.length; d++) _[e.attributes[d].name] = e.attributes[d].value;
          (p || h) && (p && h && p.__html == h.__html || (e.innerHTML = p && p.__html || ""));
        }
        (function(e, t, n, r, o) {
          var i;
          for (i in n) "children" === i || "key" === i || i in t || S(e, i, null, n[i], r);
          for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || S(e, i, t[i], n[i], r);
        })(e, g, _, o, l), p ? t.__k = [] : (t.__k = t.props.children, C(e, t, n, r, "foreignObject" !== t.type && o, i, a, s, l)), 
        l || ("value" in g && void 0 !== (u = g.value) && u !== e.value && S(e, "value", u, _.value, !1), "checked" in g && void 0 !== (u = g.checked) && u !== e.checked && S(e, "checked", u, _.checked, !1));
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
    function O(e, t, n) {
      return this.constructor(e, n);
    }
    function I(e, t, n) {
      var o, i, a;
      r.__ && r.__(e, t), i = (o = n === u) ? null : n && n.__k || t.__k, e = _(m, null, [ e ]), a = [], T(t, (o ? t : n || t).__k = e, i || s, s, void 0 !== t.ownerSVGElement, n && !o ? [ n ] : i ? null : f.slice.call(t.childNodes), a, n || s, o), 
      R(a, e);
    }
    function M(e, t) {
      I(e, t, u);
    }
    function U(e, t) {
      var n, r;
      for (r in t = p(p({}, e.props), t), arguments.length > 2 && (t.children = f.slice.call(arguments, 2)), n = {}, t) "key" !== r && "ref" !== r && (n[r] = t[r]);
      return g(e.type, n, t.key || e.key, t.ref || e.ref, null);
    }
    function D(e) {
      var t = {}, n = {
        __c: "__cC" + c++,
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
    u = s, c = 0;
    var z, W, F, q = 0, j = [], H = r.__r, Y = r.diffed, V = r.__c, $ = r.unmount;
    function K(e, t) {
      r.__h && r.__h(W, e, q || t), q = 0;
      var n = W.__H || (W.__H = {
        __: [],
        __h: []
      });
      return e >= n.__.length && n.__.push({}), n.__[e];
    }
    function J(e) {
      return q = 1, Q(se, e);
    }
    function Q(e, t, n) {
      var r = K(z++, 2);
      return r.__c || (r.__c = W, r.__ = [ n ? n(t) : se(void 0, t), function(t) {
        var n = e(r.__[0], t);
        r.__[0] !== n && (r.__[0] = n, r.__c.setState({}));
      } ]), r.__;
    }
    function X(e, t) {
      var n = K(z++, 3);
      !r.__s && ce(n.__H, t) && (n.__ = e, n.__H = t, W.__H.__h.push(n));
    }
    function Z(e, t) {
      var n = K(z++, 4);
      !r.__s && ce(n.__H, t) && (n.__ = e, n.__H = t, W.__h.push(n));
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
      var n = K(z++, 7);
      return ce(n.__H, t) ? (n.__H = t, n.__h = e, n.__ = e()) : n.__;
    }
    function ne(e, t) {
      return q = 8, te((function() {
        return e;
      }), t);
    }
    function re(e) {
      var t = W.context[e.__c], n = K(z++, 9);
      return n.__c = e, t ? (null == n.__ && (n.__ = !0, t.sub(W)), t.props.value) : e.__;
    }
    function oe(e, t) {
      r.useDebugValue && r.useDebugValue(t ? t(e) : e);
    }
    function ie(e) {
      var t = K(z++, 10), n = J();
      return t.__ = e, W.componentDidCatch || (W.componentDidCatch = function(e) {
        t.__ && t.__(e), n[1](e);
      }), [ n[0], function() {
        n[1](void 0);
      } ];
    }
    function ae() {
      j.some((function(e) {
        if (e.__P) try {
          e.__H.__h.forEach(le), e.__H.__h.forEach(ue), e.__H.__h = [];
        } catch (o) {
          return e.__H.__h = [], r.__e(o, e.__v), !0;
        }
      })), j = [];
    }
    function le(e) {
      e.t && e.t();
    }
    function ue(e) {
      var t = e.__();
      "function" == typeof t && (e.t = t);
    }
    function ce(e, t) {
      return !e || t.some((function(t, n) {
        return t !== e[n];
      }));
    }
    function se(e, t) {
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
      H && H(e), z = 0, (W = e.__c).__H && (W.__H.__h.forEach(le), W.__H.__h.forEach(ue), W.__H.__h = []);
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
            return !e.__ || ue(e);
          }));
        } catch (l) {
          t.some((function(e) {
            e.__h && (e.__h = []);
          })), t = [], r.__e(l, e.__v);
        }
      })), V && V(e, t);
    }, r.unmount = function(e) {
      $ && $(e);
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
        return this.shouldComponentUpdate = n, _(e, fe({}, t));
      }
      return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.t = !0, r;
    }
    var _e = r.__b;
    function ge(e) {
      function t(t) {
        var n = fe({}, t);
        return delete n.ref, e(n, t.ref);
      }
      return t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
    }
    r.__b = function(e) {
      e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), _e && _e(e);
    };
    var ve = function(e, t) {
      return e ? k(e).reduce((function(e, n, r) {
        return e.concat(t(n, r));
      }), []) : null;
    }, me = {
      map: ve,
      forEach: ve,
      count: function(e) {
        return e ? k(e).length : 0;
      },
      only: function(e) {
        if (1 !== (e = k(e)).length) throw new Error("Children.only() expects only one child.");
        return e[0];
      },
      toArray: k
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
        return _(n, o);
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
      return this.__b && (this.__v.__k[0] = ye(this.__b), this.__b = null), [ _(w, null, t.u ? null : e.children), t.u && e.fallback ];
    };
    var ke = function(e, t, n) {
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
          t.props.revealOrder ? (r.push(o), ke(t, e, r)) : o();
        };
        n ? n(i) : i();
      };
    }, Ce.prototype.render = function(e) {
      this.i = null, this.l = new Map;
      var t = k(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.l.set(t[n], this.i = [ 1, 0, this.i ]);
      return e.children;
    }, Ce.prototype.componentDidUpdate = Ce.prototype.componentDidMount = function() {
      var e = this;
      e.l.forEach((function(t, n) {
        ke(e, n, t);
      }));
    };
    var Ae = function() {
      function e() {}
      var t = e.prototype;
      return t.getChildContext = function() {
        return this.props.context;
      }, t.render = function(e) {
        return e.children;
      }, e;
    }();
    function Se(e) {
      var t = this, n = e.container, r = _(Ae, {
        context: t.context
      }, e.vnode);
      return t.s && t.s !== n && (t.v.parentNode && t.s.removeChild(t.v), P(t.h), t.p = !1), e.vnode ? t.p ? (n.__k = t.__k, I(r, n), 
      t.__k = n.__k) : (t.v = document.createTextNode(""), M("", n), n.appendChild(t.v), t.p = !0, t.s = n, I(r, n, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), 
      P(t.h)), t.h = r, t.componentWillUnmount = function() {
        t.v.parentNode && t.s.removeChild(t.v), P(t.h);
      }, null;
    }
    function Be(e, t) {
      return _(Se, {
        vnode: e,
        container: t
      });
    }
    var Te = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    w.prototype.isReactComponent = {};
    var Re = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    function Ne(e, t, n) {
      if (null == t.__k) for (;t.firstChild; ) t.removeChild(t.firstChild);
      return I(e, t), "function" == typeof n && n(), e ? e.__c : null;
    }
    function Le(e, t, n) {
      return M(e, t), "function" == typeof n && n(), e ? e.__c : null;
    }
    var Pe = r.event;
    function Oe(e, t) {
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
    var Ie = {
      configurable: !0,
      get: function() {
        return this.class;
      }
    }, Me = r.vnode;
    r.vnode = function(e) {
      e.$$typeof = Re;
      var t = e.type, n = e.props;
      if (t) {
        if (n.class != n.className && (Ie.enumerable = "className" in n, null != n.className && (n.class = n.className), Object.defineProperty(n, "className", Ie)), 
        "function" != typeof t) {
          var r, o, i;
          for (i in n.defaultValue && void 0 !== n.value && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), 
          Array.isArray(n.value) && n.multiple && "select" === t && (k(n.children).forEach((function(e) {
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
        }(), "function" == typeof t && !t.m && t.prototype && (Oe(t.prototype, "componentWillMount"), Oe(t.prototype, "componentWillReceiveProps"), 
        Oe(t.prototype, "componentWillUpdate"), t.m = !0);
      }
      Me && Me(e);
    };
    var Ue = "16.8.0";
    function De(e) {
      return _.bind(null, e);
    }
    function ze(e) {
      return !!e && e.$$typeof === Re;
    }
    function We(e) {
      return ze(e) ? U.apply(null, arguments) : e;
    }
    function Fe(e) {
      return !!e.__k && (I(null, e), !0);
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
      createElement: _,
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
      forwardRef: ge,
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
      var u = l.length;
      var c = 'function' == typeof l[u - 1];
      if (!c && !r()) throw new Error('Callback required as last argument');
      if (!c) {
        if (u < 1) throw new Error('Too few arguments provided');
        return 1 === u ? (n = t, t = i = void 0) : 2 !== u || t.getContext || (i = n, n = t, t = void 0), new Promise((function(r, a) {
          try {
            var l = o.create(n, i);
            r(e(l, t, i));
          } catch (u) {
            a(u);
          }
        }));
      }
      if (u < 2) throw new Error('Too few arguments provided');
      2 === u ? (a = n, n = t, t = i = void 0) : 3 === u && (t.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = n, 
      n = t, t = void 0));
      try {
        var s = o.create(n, i);
        a(null, e(s, t, i));
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
      for (var u = 0; u < t; u++) {
        o = i = 0, a = l = null;
        for (var c = 0; c < t; c++) {
          var s = e.get(u, c);
          s === a ? o++ : (o >= 5 && (r += n + (o - 5)), a = s, o = 1), (s = e.get(c, u)) === l ? i++ : (i >= 5 && (r += n + (i - 5)), 
          l = s, i = 1);
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
    var u = n(1845);
    var c = n(6526);
    var s = n(7126);
    var f = n(6245);
    var h = n(6291);
    var p = n(3103);
    var d = n(1642);
    var _ = n(6910);
    var g = n(6130);
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
        i.put(t.mode.bit, 4), i.put(t.getLength(), _.getCharCountIndicator(t.mode, e)), t.write(i);
      }));
      var l = 8 * (o.getSymbolTotalCodewords(e) - f.getTotalCodewordsCount(e, t));
      for (i.getLengthInBits() + 4 <= l && i.put(0, 4); i.getLengthInBits() % 8 != 0; ) i.putBit(0);
      var u = (l - i.getLengthInBits()) / 8;
      for (var c = 0; c < u; c++) i.put(c % 2 ? 17 : 236, 8);
      return function(e, t, n) {
        var i = o.getSymbolTotalCodewords(t);
        var a = f.getTotalCodewordsCount(t, n);
        var l = i - a;
        var u = f.getBlocksCount(t, n);
        var c = u - i % u;
        var s = Math.floor(i / u);
        var p = Math.floor(l / u);
        var d = p + 1;
        var _ = s - p;
        var g = new h(_);
        var v = 0;
        var m = new Array(u);
        var w = new Array(u);
        var y = 0;
        var b = r.from(e.buffer);
        for (var x = 0; x < u; x++) {
          var E = x < c ? p : d;
          m[x] = b.slice(v, v + E), w[x] = g.encode(m[x]), v += E, y = Math.max(y, E);
        }
        var C = r.alloc(i);
        var k = 0;
        var A, S;
        for (A = 0; A < y; A++) for (S = 0; S < u; S++) A < m[S].length && (C[k++] = m[S][A]);
        for (A = 0; A < _; A++) for (S = 0; S < u; S++) C[k++] = w[S][A];
        return C;
      }(i, e, t);
    }
    function y(e, t, n, r) {
      var i;
      if (v(e)) i = g.fromArray(e); else {
        if ('string' != typeof e) throw new Error('Invalid data');
        var a = t;
        if (!a) {
          var f = g.rawSplit(e);
          a = p.getBestVersionForData(f, n);
        }
        i = g.fromString(e, a || 40);
      }
      var h = p.getBestVersionForData(i, n);
      if (!h) throw new Error('The amount of data is too big to be stored in a QR Code');
      if (t) {
        if (t < h) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + h + '.\n');
      } else t = h;
      var d = w(t, n, i);
      var _ = o.getSymbolSize(t);
      var y = new l(_);
      return function(e, t) {
        var n = e.size;
        var r = c.getPositions(t);
        for (var o = 0; o < r.length; o++) {
          var i = r[o][0];
          var a = r[o][1];
          for (var l = -1; l <= 7; l++) if (!(i + l <= -1 || n <= i + l)) for (var u = -1; u <= 7; u++) a + u <= -1 || n <= a + u || (l >= 0 && l <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === l || 6 === l) || l >= 2 && l <= 4 && u >= 2 && u <= 4 ? e.set(i + l, a + u, !0, !0) : e.set(i + l, a + u, !1, !0));
        }
      }(y, t), function(e) {
        var t = e.size;
        for (var n = 8; n < t - 8; n++) {
          var r = n % 2 == 0;
          e.set(n, 6, r, !0), e.set(6, n, r, !0);
        }
      }(y), function(e, t) {
        var n = u.getPositions(t);
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
          for (var u = 0; u < 2; u++) if (!e.isReserved(o, l - u)) {
            var c = !1;
            a < t.length && (c = 1 == (t[a] >>> i & 1)), e.set(o, l - u, c), -1 == --i && (a++, i = 7);
          }
          if ((o += r) < 0 || n <= o) {
            o -= r, r = -r;
            break;
          }
        }
      }(y, d), isNaN(r) && (r = s.getBestMask(y, m.bind(null, y, n))), s.applyMask(r, y), m(y, n, r), {
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
      return void 0 !== t && (n = i.from(t.errorCorrectionLevel, i.M), r = p.from(t.version), a = s.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), 
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
        var u = r.alloc(this.degree);
        return a.copy(u, l), u;
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
    var u = n(7007);
    var c = n(242);
    var s = n(5987);
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
      var t = h(u.NUMERIC, r.NUMERIC, e);
      var n = h(u.ALPHANUMERIC, r.ALPHANUMERIC, e);
      var o;
      var i;
      return c.isKanjiModeEnabled() ? (o = h(u.BYTE, r.BYTE, e), i = h(u.KANJI, r.KANJI, e)) : (o = h(u.BYTE_KANJI, r.BYTE, e), 
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
    function _(e, t) {
      var n;
      var u = r.getBestModeForData(e);
      if ((n = r.from(t, u)) !== r.BYTE && n.bit < u.bit) throw new Error('"' + e + "\" cannot be encoded with mode " + r.toString(n) + '.\n Suggested mode is: ' + r.toString(u));
      switch (n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n) {
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
        return 'string' == typeof t ? e.push(_(t, null)) : t.data && e.push(_(t.data, t.mode)), e;
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
      }(p(e, c.isKanjiModeEnabled()));
      var i = function(e, t) {
        var n = {};
        var o = {
          start: {}
        };
        var i = [ 'start' ];
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          var u = [];
          for (var c = 0; c < l.length; c++) {
            var s = l[c];
            var f = '' + a + c;
            u.push(f), n[f] = {
              node: s,
              lastCount: 0
            }, o[f] = {};
            for (var h = 0; h < i.length; h++) {
              var p = i[h];
              n[p] && n[p].node.mode === s.mode ? (o[p][f] = d(n[p].lastCount + s.length, s.mode) - d(n[p].lastCount, s.mode), n[p].lastCount += s.length) : (n[p] && (n[p].lastCount = s.length), 
              o[p][f] = d(s.length, s.mode) + 4 + r.getCharCountIndicator(s.mode, t));
            }
          }
          i = u;
        }
        for (h = 0; h < i.length; h++) o[i[h]].end = 0;
        return {
          map: o,
          table: n
        };
      }(o, n);
      var a = s.find_path(i.map, 'start', 'end');
      var l = [];
      for (var u = 1; u < a.length - 1; u++) l.push(i.table[a[u]].node);
      return t.fromArray(function(e) {
        return e.reduce((function(e, t) {
          var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
          return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e);
        }), []);
      }(l));
    }, t.rawSplit = function(e) {
      return t.fromArray(p(e, c.isKanjiModeEnabled()));
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
    var u = n(5826);
    var c = r.getBCHDigit(7973);
    function s(e, t) {
      return a.getCharCountIndicator(e, t) + 4;
    }
    function f(e, t) {
      var n = 0;
      return e.forEach((function(e) {
        var r = s(e.mode, t);
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
      var u = i - s(n, e);
      switch (n) {
       case a.NUMERIC:
        return Math.floor(u / 10 * 3);

       case a.ALPHANUMERIC:
        return Math.floor(u / 11 * 2);

       case a.KANJI:
        return Math.floor(u / 13);

       case a.BYTE:
       default:
        return Math.floor(u / 8);
      }
    }, t.getBestVersionForData = function(e, n) {
      var r;
      var o = i.from(n, i.M);
      if (u(e)) {
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
      for (;r.getBCHDigit(t) - c >= 0; ) t ^= 7973 << r.getBCHDigit(t) - c;
      return e << 12 | t;
    };
  },
  6907: (e, t, n) => {
    var r = n(9653);
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
      var u = l.createImageData(a, a);
      return r.qrToImageData(u.data, e, o), function(e, t, n) {
        e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + 'px', t.style.width = n + 'px';
      }(l, i, a), l.putImageData(u, 0, 0), i;
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
    var r = n(9653);
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
      var u = e.modules.data;
      var c = l + 2 * a.margin;
      var s = a.color.light.a ? '<path ' + o(a.color.light, 'fill') + ' d="M0 0h' + c + 'v' + c + 'H0z"/>' : '';
      var f = '<path ' + o(a.color.dark, 'stroke') + ' d="' + function(e, t, n) {
        var r = '';
        var o = 0;
        var a = !1;
        var l = 0;
        for (var u = 0; u < e.length; u++) {
          var c = Math.floor(u % t);
          var s = Math.floor(u / t);
          c || a || (a = !0), e[u] ? (l++, u > 0 && c > 0 && e[u - 1] || (r += a ? i('M', c + n, .5 + s + n) : i('m', o, 0), o = 0, 
          a = !1), c + 1 < t && e[u + 1] || (r += i('h', l), l = 0)) : o++;
        }
        return r;
      }(u, l, a.margin) + '"/>';
      var h = "viewBox=\"0 0 " + c + ' ' + c + '"';
      var p = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : '') + h + ' shape-rendering="crispEdges">' + s + f + '</svg>\n';
      return 'function' == typeof n && n(null, p), p;
    };
  },
  9653: (e, t) => {
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
      var u = r.margin * a;
      var c = [ r.color.light, r.color.dark ];
      for (var s = 0; s < l; s++) for (var f = 0; f < l; f++) {
        var h = 4 * (s * l + f);
        var p = r.color.light;
        if (s >= u && f >= u && s < l - u && f < l - u) p = c[i[Math.floor((s - u) / a) * o + Math.floor((f - u) / a)] ? 1 : 0];
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
      return i.TYPED_ARRAY_SUPPORT || this instanceof i ? 'number' == typeof e ? u(this, e) : function(e, t, n, r) {
        if ('number' == typeof t) throw new TypeError('"value" argument must not be a number');
        if ('undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, r) {
          if (n < 0 || t.byteLength < n) throw new RangeError('\'offset\' is out of bounds');
          if (t.byteLength < n + (r || 0)) throw new RangeError('\'length\' is out of bounds');
          var o;
          o = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
          i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = c(e, o);
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
            }(t.length) ? l(e, 0) : c(e, t);
            if ('Buffer' === t.type && Array.isArray(t.data)) return c(e, t.data);
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
    function u(e, t) {
      var n = l(e, t < 0 ? 0 : 0 | a(t));
      if (!i.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) n[r] = 0;
      return n;
    }
    function c(e, t) {
      var n = t.length < 0 ? 0 : 0 | a(t.length);
      var r = l(e, n);
      for (var o = 0; o < n; o += 1) r[o] = 255 & t[o];
      return r;
    }
    function s(e, t) {
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
      0 === e.length ? 0 : s(e).length);
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
        }(s(t, e.length - n), e, n, r);
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
      var o = u(null, t);
      var a = 0;
      for (n = 0; n < e.length; ++n) {
        var c = e[n];
        if (!i.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
        c.copy(o, a), a += c.length;
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
    var r = n(5108);
    var o = n(9742);
    var i = n(645);
    var a = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
    t.lW = c, t.h2 = 50;
    var l = 2147483647;
    function u(e) {
      if (e > l) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      var t = new Uint8Array(e);
      return Object.setPrototypeOf(t, c.prototype), t;
    }
    function c(e, t, n) {
      if ('number' == typeof e) {
        if ('string' == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
        return h(e);
      }
      return s(e, t, n);
    }
    function s(e, t, n) {
      if ('string' == typeof e) return function(e, t) {
        'string' == typeof t && '' !== t || (t = 'utf8');
        if (!c.isEncoding(t)) throw new TypeError('Unknown encoding: ' + t);
        var n = 0 | g(e, t);
        var r = u(n);
        var o = r.write(e, t);
        o !== n && (r = r.slice(0, o));
        return r;
      }(e, t);
      if (ArrayBuffer.isView(e)) return function(e) {
        if (q(e, Uint8Array)) {
          var t = new Uint8Array(e);
          return d(t.buffer, t.byteOffset, t.byteLength);
        }
        return p(e);
      }(e);
      if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (q(e, ArrayBuffer) || e && q(e.buffer, ArrayBuffer)) return d(e, t, n);
      if ('undefined' != typeof SharedArrayBuffer && (q(e, SharedArrayBuffer) || e && q(e.buffer, SharedArrayBuffer))) return d(e, t, n);
      if ('number' == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
      var r = e.valueOf && e.valueOf();
      if (null != r && r !== e) return c.from(r, t, n);
      var o = function(e) {
        if (c.isBuffer(e)) {
          var t = 0 | _(e.length);
          var n = u(t);
          return 0 === n.length || e.copy(n, 0, 0, t), n;
        }
        if (void 0 !== e.length) return 'number' != typeof e.length || j(e.length) ? u(0) : p(e);
        if ('Buffer' === e.type && Array.isArray(e.data)) return p(e.data);
      }(e);
      if (o) return o;
      if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]('string'), t, n);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    function f(e) {
      if ('number' != typeof e) throw new TypeError('"size" argument must be of type number');
      if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function h(e) {
      return f(e), u(e < 0 ? 0 : 0 | _(e));
    }
    function p(e) {
      var t = e.length < 0 ? 0 : 0 | _(e.length);
      var n = u(t);
      for (var r = 0; r < t; r += 1) n[r] = 255 & e[r];
      return n;
    }
    function d(e, t, n) {
      if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var r;
      return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), 
      Object.setPrototypeOf(r, c.prototype), r;
    }
    function _(e) {
      if (e >= l) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l.toString(16) + ' bytes');
      return 0 | e;
    }
    function g(e, t) {
      if (c.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || q(e, ArrayBuffer)) return e.byteLength;
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
        return z(e).length;

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return 2 * n;

       case 'hex':
        return n >>> 1;

       case 'base64':
        return W(e).length;

       default:
        if (o) return r ? -1 : z(e).length;
        t = ('' + t).toLowerCase(), o = !0;
      }
    }
    function v(e, t, n) {
      var r = !1;
      if ((void 0 === t || t < 0) && (t = 0), t > this.length) return '';
      if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return '';
      if ((n >>>= 0) <= (t >>>= 0)) return '';
      for (e || (e = 'utf8'); ;) switch (e) {
       case 'hex':
        return N(this, t, n);

       case 'utf8':
       case 'utf-8':
        return S(this, t, n);

       case 'ascii':
        return T(this, t, n);

       case 'latin1':
       case 'binary':
        return R(this, t, n);

       case 'base64':
        return A(this, t, n);

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return L(this, t, n);

       default:
        if (r) throw new TypeError('Unknown encoding: ' + e);
        e = (e + '').toLowerCase(), r = !0;
      }
    }
    function m(e, t, n) {
      var r = e[t];
      e[t] = e[n], e[n] = r;
    }
    function w(e, t, n, r, o) {
      if (0 === e.length) return -1;
      if ('string' == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), j(n = +n) && (n = o ? 0 : e.length - 1), 
      n < 0 && (n = e.length + n), n >= e.length) {
        if (o) return -1;
        n = e.length - 1;
      } else if (n < 0) {
        if (!o) return -1;
        n = 0;
      }
      if ('string' == typeof t && (t = c.from(t, r)), c.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, o);
      if ('number' == typeof t) return t &= 255, 'function' == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [ t ], n, r, o);
      throw new TypeError('val must be string, number or Buffer');
    }
    function y(e, t, n, r, o) {
      var i = 1;
      var a = e.length;
      var l = t.length;
      if (void 0 !== r && ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        i = 2, a /= 2, l /= 2, n /= 2;
      }
      function u(e, t) {
        return 1 === i ? e[t] : e.readUInt16BE(t * i);
      }
      var c;
      if (o) {
        var s = -1;
        for (c = n; c < a; c++) if (u(e, c) === u(t, -1 === s ? 0 : c - s)) {
          if (-1 === s && (s = c), c - s + 1 === l) return s * i;
        } else -1 !== s && (c -= c - s), s = -1;
      } else for (n + l > a && (n = a - l), c = n; c >= 0; c--) {
        var f = !0;
        for (var h = 0; h < l; h++) if (u(e, c + h) !== u(t, h)) {
          f = !1;
          break;
        }
        if (f) return c;
      }
      return -1;
    }
    function b(e, t, n, r) {
      n = Number(n) || 0;
      var o = e.length - n;
      r ? (r = Number(r)) > o && (r = o) : r = o;
      var i = t.length;
      r > i / 2 && (r = i / 2);
      for (var a = 0; a < r; ++a) {
        var l = parseInt(t.substr(2 * a, 2), 16);
        if (j(l)) return a;
        e[n + a] = l;
      }
      return a;
    }
    function x(e, t, n, r) {
      return F(z(t, e.length - n), e, n, r);
    }
    function E(e, t, n, r) {
      return F(function(e) {
        var t = [];
        for (var n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
        return t;
      }(t), e, n, r);
    }
    function C(e, t, n, r) {
      return F(W(t), e, n, r);
    }
    function k(e, t, n, r) {
      return F(function(e, t) {
        var n, r, o;
        var i = [];
        for (var a = 0; a < e.length && !((t -= 2) < 0); ++a) r = (n = e.charCodeAt(a)) >> 8, o = n % 256, i.push(o), i.push(r);
        return i;
      }(t, e.length - n), e, n, r);
    }
    function A(e, t, n) {
      return 0 === t && n === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, n));
    }
    function S(e, t, n) {
      n = Math.min(e.length, n);
      var r = [];
      var o = t;
      for (;o < n; ) {
        var i = e[o];
        var a = null;
        var l = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
        var u, c, s, f;
        if (o + l <= n) switch (l) {
         case 1:
          i < 128 && (a = i);
          break;

         case 2:
          128 == (192 & (u = e[o + 1])) && (f = (31 & i) << 6 | 63 & u) > 127 && (a = f);
          break;

         case 3:
          u = e[o + 1], c = e[o + 2], 128 == (192 & u) && 128 == (192 & c) && (f = (15 & i) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (f < 55296 || f > 57343) && (a = f);
          break;

         case 4:
          u = e[o + 1], c = e[o + 2], s = e[o + 3], 128 == (192 & u) && 128 == (192 & c) && 128 == (192 & s) && (f = (15 & i) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & s) > 65535 && f < 1114112 && (a = f);
        }
        null === a ? (a = 65533, l = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), 
        o += l;
      }
      return function(e) {
        var t = e.length;
        if (t <= B) return String.fromCharCode.apply(String, e);
        var n = '';
        var r = 0;
        for (;r < t; ) n += String.fromCharCode.apply(String, e.slice(r, r += B));
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
    }(), c.TYPED_ARRAY_SUPPORT || void 0 === r || 'function' != typeof r.error || r.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
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
        return f(e), e <= 0 ? u(e) : void 0 !== t ? 'string' == typeof n ? u(e).fill(t, n) : u(e).fill(t) : u(e);
      }(e, t, n);
    }, c.allocUnsafe = function(e) {
      return h(e);
    }, c.allocUnsafeSlow = function(e) {
      return h(e);
    }, c.isBuffer = function(e) {
      return null != e && !0 === e._isBuffer && e !== c.prototype;
    }, c.compare = function(e, t) {
      if (q(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), q(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), 
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
        if (q(i, Uint8Array)) o + i.length > r.length ? c.from(i).copy(r, o) : Uint8Array.prototype.set.call(r, i, o); else {
          if (!c.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
          i.copy(r, o);
        }
        o += i.length;
      }
      return r;
    }, c.byteLength = g, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
      for (var t = 0; t < e; t += 2) m(this, t, t + 1);
      return this;
    }, c.prototype.swap32 = function() {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
      for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
      return this;
    }, c.prototype.swap64 = function() {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
      for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
      return this;
    }, c.prototype.toString = function() {
      var e = this.length;
      return 0 === e ? '' : 0 === arguments.length ? S(this, 0, e) : v.apply(this, arguments);
    }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(e) {
      if (!c.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
      return this === e || 0 === c.compare(this, e);
    }, c.prototype.inspect = function() {
      var e = '';
      var n = t.h2;
      return e = this.toString('hex', 0, n).replace(/(.{2})/g, '$1 ').trim(), this.length > n && (e += ' ... '), '<Buffer ' + e + '>';
    }, a && (c.prototype[a] = c.prototype.inspect), c.prototype.compare = function(e, t, n, r, o) {
      if (q(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
      if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), 
      t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError('out of range index');
      if (r >= o && t >= n) return 0;
      if (r >= o) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;
      var i = (o >>>= 0) - (r >>>= 0);
      var a = (n >>>= 0) - (t >>>= 0);
      var l = Math.min(i, a);
      var u = this.slice(r, o);
      var s = e.slice(t, n);
      for (var f = 0; f < l; ++f) if (u[f] !== s[f]) {
        i = u[f], a = s[f];
        break;
      }
      return i < a ? -1 : a < i ? 1 : 0;
    }, c.prototype.includes = function(e, t, n) {
      return -1 !== this.indexOf(e, t, n);
    }, c.prototype.indexOf = function(e, t, n) {
      return w(this, e, t, n, !0);
    }, c.prototype.lastIndexOf = function(e, t, n) {
      return w(this, e, t, n, !1);
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
        return b(this, e, t, n);

       case 'utf8':
       case 'utf-8':
        return x(this, e, t, n);

       case 'ascii':
       case 'latin1':
       case 'binary':
        return E(this, e, t, n);

       case 'base64':
        return C(this, e, t, n);

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return k(this, e, t, n);

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
    var B = 4096;
    function T(e, t, n) {
      var r = '';
      n = Math.min(e.length, n);
      for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
      return r;
    }
    function R(e, t, n) {
      var r = '';
      n = Math.min(e.length, n);
      for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
      return r;
    }
    function N(e, t, n) {
      var r = e.length;
      (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
      var o = '';
      for (var i = t; i < n; ++i) o += H[e[i]];
      return o;
    }
    function L(e, t, n) {
      var r = e.slice(t, n);
      var o = '';
      for (var i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
      return o;
    }
    function P(e, t, n) {
      if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
      if (e + t > n) throw new RangeError('Trying to access beyond buffer length');
    }
    function O(e, t, n, r, o, i) {
      if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
      if (n + r > e.length) throw new RangeError('Index out of range');
    }
    function I(e, t, n, r, o, i) {
      if (n + r > e.length) throw new RangeError('Index out of range');
      if (n < 0) throw new RangeError('Index out of range');
    }
    function M(e, t, n, r, o) {
      return t = +t, n >>>= 0, o || I(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
    }
    function U(e, t, n, r, o) {
      return t = +t, n >>>= 0, o || I(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
    }
    c.prototype.slice = function(e, t) {
      var n = this.length;
      (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), 
      t < e && (t = e);
      var r = this.subarray(e, t);
      return Object.setPrototypeOf(r, c.prototype), r;
    }, c.prototype.readUintLE = c.prototype.readUIntLE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || P(e, t, this.length);
      var r = this[e];
      var o = 1;
      var i = 0;
      for (;++i < t && (o *= 256); ) r += this[e + i] * o;
      return r;
    }, c.prototype.readUintBE = c.prototype.readUIntBE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || P(e, t, this.length);
      var r = this[e + --t];
      var o = 1;
      for (;t > 0 && (o *= 256); ) r += this[e + --t] * o;
      return r;
    }, c.prototype.readUint8 = c.prototype.readUInt8 = function(e, t) {
      return e >>>= 0, t || P(e, 1, this.length), this[e];
    }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(e, t) {
      return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(e, t) {
      return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(e, t) {
      return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
    }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(e, t) {
      return e >>>= 0, t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, c.prototype.readIntLE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || P(e, t, this.length);
      var r = this[e];
      var o = 1;
      var i = 0;
      for (;++i < t && (o *= 256); ) r += this[e + i] * o;
      return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }, c.prototype.readIntBE = function(e, t, n) {
      e >>>= 0, t >>>= 0, n || P(e, t, this.length);
      var r = t;
      var o = 1;
      var i = this[e + --r];
      for (;r > 0 && (o *= 256); ) i += this[e + --r] * o;
      return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }, c.prototype.readInt8 = function(e, t) {
      return e >>>= 0, t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
    }, c.prototype.readInt16LE = function(e, t) {
      e >>>= 0, t || P(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, c.prototype.readInt16BE = function(e, t) {
      e >>>= 0, t || P(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, c.prototype.readInt32LE = function(e, t) {
      return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, c.prototype.readInt32BE = function(e, t) {
      return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, c.prototype.readFloatLE = function(e, t) {
      return e >>>= 0, t || P(e, 4, this.length), i.read(this, e, !0, 23, 4);
    }, c.prototype.readFloatBE = function(e, t) {
      return e >>>= 0, t || P(e, 4, this.length), i.read(this, e, !1, 23, 4);
    }, c.prototype.readDoubleLE = function(e, t) {
      return e >>>= 0, t || P(e, 8, this.length), i.read(this, e, !0, 52, 8);
    }, c.prototype.readDoubleBE = function(e, t) {
      return e >>>= 0, t || P(e, 8, this.length), i.read(this, e, !1, 52, 8);
    }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(e, t, n, r) {
      (e = +e, t >>>= 0, n >>>= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var o = 1;
      var i = 0;
      for (this[t] = 255 & e; ++i < n && (o *= 256); ) this[t + i] = e / o & 255;
      return t + n;
    }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(e, t, n, r) {
      (e = +e, t >>>= 0, n >>>= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var o = n - 1;
      var i = 1;
      for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) this[t + o] = e / i & 255;
      return t + n;
    }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
    }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
    }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
    }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, 
      this[t] = 255 & e, t + 4;
    }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, 
      this[t + 3] = 255 & e, t + 4;
    }, c.prototype.writeIntLE = function(e, t, n, r) {
      if (e = +e, t >>>= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        O(this, e, t, n, o - 1, -o);
      }
      var i = 0;
      var a = 1;
      var l = 0;
      for (this[t] = 255 & e; ++i < n && (a *= 256); ) e < 0 && 0 === l && 0 !== this[t + i - 1] && (l = 1), this[t + i] = (e / a >> 0) - l & 255;
      return t + n;
    }, c.prototype.writeIntBE = function(e, t, n, r) {
      if (e = +e, t >>>= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        O(this, e, t, n, o - 1, -o);
      }
      var i = n - 1;
      var a = 1;
      var l = 0;
      for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); ) e < 0 && 0 === l && 0 !== this[t + i + 1] && (l = 1), this[t + i] = (e / a >> 0) - l & 255;
      return t + n;
    }, c.prototype.writeInt8 = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
    }, c.prototype.writeInt16LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
    }, c.prototype.writeInt16BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
    }, c.prototype.writeInt32LE = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, 
      this[t + 3] = e >>> 24, t + 4;
    }, c.prototype.writeInt32BE = function(e, t, n) {
      return e = +e, t >>>= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, 
      this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
    }, c.prototype.writeFloatLE = function(e, t, n) {
      return M(this, e, t, !0, n);
    }, c.prototype.writeFloatBE = function(e, t, n) {
      return M(this, e, t, !1, n);
    }, c.prototype.writeDoubleLE = function(e, t, n) {
      return U(this, e, t, !0, n);
    }, c.prototype.writeDoubleBE = function(e, t, n) {
      return U(this, e, t, !1, n);
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
    var D = /[^+/0-9A-Za-z-_]/g;
    function z(e, t) {
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
    function W(e) {
      return o.toByteArray(function(e) {
        if ((e = (e = e.split('=')[0]).trim().replace(D, '')).length < 2) return '';
        for (;e.length % 4 != 0; ) e += '=';
        return e;
      }(e));
    }
    function F(e, t, n, r) {
      for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
      return o;
    }
    function q(e, t) {
      return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
    }
    function j(e) {
      return e != e;
    }
    var H = function() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksSUFBSSxJQUNaLElBQUksSUFBSSxJQUFJLElBQ1osSUFBSSxJQUFJLElBQUksSUFDWixJQUFJLElBQUksSUFBSSxJQUNaLElBQUksSUFBSSxJQUFJLElBQ1osSUFBSSxJQUFJLElBQUk7SUFHZCxJQUFJQyxJQUFxQixFQUV2QixHQUFHLElBQUksSUFBSSxJQUNYLElBQUksSUFBSSxJQUFJLElBQ1osSUFBSSxJQUFJLElBQUksSUFDWixJQUFJLElBQUksSUFBSSxJQUNaLElBQUksSUFBSSxJQUFJLElBQ1osSUFBSSxJQUFJLElBQUksS0FDWixJQUFJLElBQUksS0FBSyxLQUNiLElBQUksSUFBSSxLQUFLLEtBQ2IsSUFBSSxLQUFLLEtBQUssS0FDZCxJQUFJLEtBQUssS0FBSyxLQUNkLElBQUksS0FBSyxLQUFLLEtBQ2QsSUFBSSxLQUFLLEtBQUssS0FDZCxLQUFLLEtBQUssS0FBSyxLQUNmLEtBQUssS0FBSyxLQUFLLEtBQ2YsS0FBSyxLQUFLLEtBQUssS0FDZixLQUFLLEtBQUssS0FBSyxLQUNmLEtBQUssS0FBSyxLQUFLLEtBQ2YsS0FBSyxLQUFLLEtBQUssS0FDZixLQUFLLEtBQUssS0FBSyxLQUNmLEtBQUssS0FBSyxLQUFLLEtBQ2YsS0FBSyxLQUFLLEtBQUssS0FDZixLQUFLLEtBQUssS0FBSyxLQUNmLEtBQUssS0FBSyxLQUFLLEtBQ2YsS0FBSyxLQUFLLEtBQUssS0FDZixLQUFLLEtBQUssS0FBSyxNQUNmLEtBQUssS0FBSyxLQUFLLE1BQ2YsS0FBSyxLQUFLLE1BQU0sTUFDaEIsS0FBSyxLQUFLLE1BQU0sTUFDaEIsS0FBSyxLQUFLLE1BQU0sTUFDaEIsS0FBSyxLQUFLLE1BQU0sTUFDaEIsS0FBSyxLQUFLLE1BQU0sTUFDaEIsS0FBSyxLQUFLLE1BQU0sTUFDaEIsS0FBSyxLQUFLLE1BQU0sTUFDaEIsS0FBSyxNQUFNLE1BQU0sTUFDakIsS0FBSyxNQUFNLE1BQU0sTUFDakIsS0FBSyxNQUFNLE1BQU0sTUFDakIsS0FBSyxNQUFNLE1BQU0sTUFDakIsS0FBSyxNQUFNLE1BQU0sTUFD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QUNyQixhQUdGZzRCLEtBQ0FBLEVBQU9PO0FBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RldGVjdC1icm93c2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Jyb3dzZXItdXRpbHMvZGlzdC9lc20vYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9icm93c2VyLXV0aWxzL2Rpc3QvZXNtL2pzb24uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3Qvc2FmZS1qc29uL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2Jyb3dzZXItdXRpbHMvZGlzdC9lc20vbG9jYWwuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvYnJvd3Nlci11dGlscy9kaXN0L2VzbS9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvYnJvd3Nlci11dGlscy9kaXN0L2VzbS9yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9xcmNvZGUtbW9kYWwvZGlzdC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3Qvd2luZG93LWdldHRlcnMvZGlzdC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3Qvd2luZG93LW1ldGFkYXRhL2Rpc3QvY2pzL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2NvcHktdG8tY2xpcGJvYXJkL2luZGV4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RpamtzdHJhanMvZGlqa3N0cmEuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jYW4tcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvYWxpZ25tZW50LXBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2FscGhhbnVtZXJpYy1kYXRhLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9iaXQtYnVmZmVyLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9iaXQtbWF0cml4LmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9ieXRlLWRhdGEuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2Vycm9yLWNvcnJlY3Rpb24tY29kZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZXJyb3ItY29ycmVjdGlvbi1sZXZlbC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZmluZGVyLXBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2Zvcm1hdC1pbmZvLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9nYWxvaXMtZmllbGQuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2thbmppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL21hc2stcGF0dGVybi5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvbW9kZS5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvbnVtZXJpYy1kYXRhLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9wb2x5bm9taWFsLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9xcmNvZGUuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3JlZWQtc29sb21vbi1lbmNvZGVyLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvc2VnbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3V0aWxzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS92ZXJzaW9uLWNoZWNrLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS92ZXJzaW9uLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvcmVuZGVyZXIvY2FudmFzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvcmVuZGVyZXIvc3ZnLXRhZy5qcyIsIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL3JlbmRlcmVyL3V0aWxzLmpzIiwid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvdXRpbHMvdHlwZWRhcnJheS1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcXJjb2RlL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdG9nZ2xlLXNlbGVjdGlvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbnZhciBCcm93c2VySW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCcm93c2VySW5mbyhuYW1lLCB2ZXJzaW9uLCBvcykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLm9zID0gb3M7XG4gICAgICAgIHRoaXMudHlwZSA9ICdicm93c2VyJztcbiAgICB9XG4gICAgcmV0dXJuIEJyb3dzZXJJbmZvO1xufSgpKTtcbmV4cG9ydCB7IEJyb3dzZXJJbmZvIH07XG52YXIgTm9kZUluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZUluZm8odmVyc2lvbikge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbm9kZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdub2RlJztcbiAgICAgICAgdGhpcy5vcyA9IHByb2Nlc3MucGxhdGZvcm07XG4gICAgfVxuICAgIHJldHVybiBOb2RlSW5mbztcbn0oKSk7XG5leHBvcnQgeyBOb2RlSW5mbyB9O1xudmFyIFNlYXJjaEJvdERldmljZUluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VhcmNoQm90RGV2aWNlSW5mbyhuYW1lLCB2ZXJzaW9uLCBvcywgYm90KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMub3MgPSBvcztcbiAgICAgICAgdGhpcy5ib3QgPSBib3Q7XG4gICAgICAgIHRoaXMudHlwZSA9ICdib3QtZGV2aWNlJztcbiAgICB9XG4gICAgcmV0dXJuIFNlYXJjaEJvdERldmljZUluZm87XG59KCkpO1xuZXhwb3J0IHsgU2VhcmNoQm90RGV2aWNlSW5mbyB9O1xudmFyIEJvdEluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm90SW5mbygpIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ2JvdCc7XG4gICAgICAgIHRoaXMuYm90ID0gdHJ1ZTsgLy8gTk9URTogZGVwcmVjYXRlZCB0ZXN0IG5hbWUgaW5zdGVhZFxuICAgICAgICB0aGlzLm5hbWUgPSAnYm90JztcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcyA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBCb3RJbmZvO1xufSgpKTtcbmV4cG9ydCB7IEJvdEluZm8gfTtcbnZhciBSZWFjdE5hdGl2ZUluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVhY3ROYXRpdmVJbmZvKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSAncmVhY3QtbmF0aXZlJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ3JlYWN0LW5hdGl2ZSc7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IG51bGw7XG4gICAgICAgIHRoaXMub3MgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3ROYXRpdmVJbmZvO1xufSgpKTtcbmV4cG9ydCB7IFJlYWN0TmF0aXZlSW5mbyB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxudmFyIFNFQVJDSEJPWF9VQV9SRUdFWCA9IC9hbGV4YXxib3R8Y3Jhd2woZXJ8aW5nKXxmYWNlYm9va2V4dGVybmFsaGl0fGZlZWRidXJuZXJ8Z29vZ2xlIHdlYiBwcmV2aWV3fG5hZ2lvc3xwb3N0cmFua3xwaW5nZG9tfHNsdXJwfHNwaWRlcnx5YWhvbyF8eWFuZGV4LztcbnZhciBTRUFSQ0hCT1RfT1NfUkVHRVggPSAvKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFza1xcIEplZXZlc1xcL1Rlb21hfGlhX2FyY2hpdmVyKS87XG52YXIgUkVRVUlSRURfVkVSU0lPTl9QQVJUUyA9IDM7XG52YXIgdXNlckFnZW50UnVsZXMgPSBbXG4gICAgWydhb2wnLCAvQU9MU2hpZWxkXFwvKFswLTlcXC5fXSspL10sXG4gICAgWydlZGdlJywgL0VkZ2VcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2VkZ2UtaW9zJywgL0VkZ2lPU1xcLyhbMC05XFwuX10rKS9dLFxuICAgIFsneWFuZGV4YnJvd3NlcicsIC9ZYUJyb3dzZXJcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ2tha2FvdGFsaycsIC9LQUtBT1RBTEtcXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnc2Ftc3VuZycsIC9TYW1zdW5nQnJvd3NlclxcLyhbMC05XFwuXSspL10sXG4gICAgWydzaWxrJywgL1xcYlNpbGtcXC8oWzAtOS5fLV0rKVxcYi9dLFxuICAgIFsnbWl1aScsIC9NaXVpQnJvd3NlclxcLyhbMC05XFwuXSspJC9dLFxuICAgIFsnYmVha2VyJywgL0JlYWtlckJyb3dzZXJcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnZWRnZS1jaHJvbWl1bScsIC9FZGdBP1xcLyhbMC05XFwuXSspL10sXG4gICAgW1xuICAgICAgICAnY2hyb21pdW0td2VidmlldycsXG4gICAgICAgIC8oPyFDaHJvbS4qT1BSKXd2XFwpLipDaHJvbSg/OmV8aXVtKVxcLyhbMC05XFwuXSspKDo/XFxzfCQpLyxcbiAgICBdLFxuICAgIFsnY2hyb21lJywgLyg/IUNocm9tLipPUFIpQ2hyb20oPzplfGl1bSlcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsncGhhbnRvbWpzJywgL1BoYW50b21KU1xcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydjcmlvcycsIC9DcmlPU1xcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydmaXJlZm94JywgL0ZpcmVmb3hcXC8oWzAtOVxcLl0rKSg/Olxcc3wkKS9dLFxuICAgIFsnZnhpb3MnLCAvRnhpT1NcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnb3BlcmEtbWluaScsIC9PcGVyYSBNaW5pLipWZXJzaW9uXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ29wZXJhJywgL09wZXJhXFwvKFswLTlcXC5dKykoPzpcXHN8JCkvXSxcbiAgICBbJ29wZXJhJywgL09QUlxcLyhbMC05XFwuXSspKDo/XFxzfCQpL10sXG4gICAgWydpZScsIC9UcmlkZW50XFwvN1xcLjAuKnJ2XFw6KFswLTlcXC5dKykuKlxcKS4qR2Vja28kL10sXG4gICAgWydpZScsIC9NU0lFXFxzKFswLTlcXC5dKyk7LipUcmlkZW50XFwvWzQtN10uMC9dLFxuICAgIFsnaWUnLCAvTVNJRVxccyg3XFwuMCkvXSxcbiAgICBbJ2JiMTAnLCAvQkIxMDtcXHNUb3VjaC4qVmVyc2lvblxcLyhbMC05XFwuXSspL10sXG4gICAgWydhbmRyb2lkJywgL0FuZHJvaWRcXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnaW9zJywgL1ZlcnNpb25cXC8oWzAtOVxcLl9dKykuKk1vYmlsZS4qU2FmYXJpLiovXSxcbiAgICBbJ3NhZmFyaScsIC9WZXJzaW9uXFwvKFswLTlcXC5fXSspLipTYWZhcmkvXSxcbiAgICBbJ2ZhY2Vib29rJywgL0ZCQVZcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnaW5zdGFncmFtJywgL0luc3RhZ3JhbVxccyhbMC05XFwuXSspL10sXG4gICAgWydpb3Mtd2VidmlldycsIC9BcHBsZVdlYktpdFxcLyhbMC05XFwuXSspLipNb2JpbGUvXSxcbiAgICBbJ2lvcy13ZWJ2aWV3JywgL0FwcGxlV2ViS2l0XFwvKFswLTlcXC5dKykuKkdlY2tvXFwpJC9dLFxuICAgIFsnc2VhcmNoYm90JywgU0VBUkNIQk9YX1VBX1JFR0VYXSxcbl07XG52YXIgb3BlcmF0aW5nU3lzdGVtUnVsZXMgPSBbXG4gICAgWydpT1MnLCAvaVAoaG9uZXxvZHxhZCkvXSxcbiAgICBbJ0FuZHJvaWQgT1MnLCAvQW5kcm9pZC9dLFxuICAgIFsnQmxhY2tCZXJyeSBPUycsIC9CbGFja0JlcnJ5fEJCMTAvXSxcbiAgICBbJ1dpbmRvd3MgTW9iaWxlJywgL0lFTW9iaWxlL10sXG4gICAgWydBbWF6b24gT1MnLCAvS2luZGxlL10sXG4gICAgWydXaW5kb3dzIDMuMTEnLCAvV2luMTYvXSxcbiAgICBbJ1dpbmRvd3MgOTUnLCAvKFdpbmRvd3MgOTUpfChXaW45NSl8KFdpbmRvd3NfOTUpL10sXG4gICAgWydXaW5kb3dzIDk4JywgLyhXaW5kb3dzIDk4KXwoV2luOTgpL10sXG4gICAgWydXaW5kb3dzIDIwMDAnLCAvKFdpbmRvd3MgTlQgNS4wKXwoV2luZG93cyAyMDAwKS9dLFxuICAgIFsnV2luZG93cyBYUCcsIC8oV2luZG93cyBOVCA1LjEpfChXaW5kb3dzIFhQKS9dLFxuICAgIFsnV2luZG93cyBTZXJ2ZXIgMjAwMycsIC8oV2luZG93cyBOVCA1LjIpL10sXG4gICAgWydXaW5kb3dzIFZpc3RhJywgLyhXaW5kb3dzIE5UIDYuMCkvXSxcbiAgICBbJ1dpbmRvd3MgNycsIC8oV2luZG93cyBOVCA2LjEpL10sXG4gICAgWydXaW5kb3dzIDgnLCAvKFdpbmRvd3MgTlQgNi4yKS9dLFxuICAgIFsnV2luZG93cyA4LjEnLCAvKFdpbmRvd3MgTlQgNi4zKS9dLFxuICAgIFsnV2luZG93cyAxMCcsIC8oV2luZG93cyBOVCAxMC4wKS9dLFxuICAgIFsnV2luZG93cyBNRScsIC9XaW5kb3dzIE1FL10sXG4gICAgWydPcGVuIEJTRCcsIC9PcGVuQlNEL10sXG4gICAgWydTdW4gT1MnLCAvU3VuT1MvXSxcbiAgICBbJ0Nocm9tZSBPUycsIC9Dck9TL10sXG4gICAgWydMaW51eCcsIC8oTGludXgpfChYMTEpL10sXG4gICAgWydNYWMgT1MnLCAvKE1hY19Qb3dlclBDKXwoTWFjaW50b3NoKS9dLFxuICAgIFsnUU5YJywgL1FOWC9dLFxuICAgIFsnQmVPUycsIC9CZU9TL10sXG4gICAgWydPUy8yJywgL09TXFwvMi9dLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3QodXNlckFnZW50KSB7XG4gICAgaWYgKCEhdXNlckFnZW50KSB7XG4gICAgICAgIHJldHVybiBwYXJzZVVzZXJBZ2VudCh1c2VyQWdlbnQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgICAgICByZXR1cm4gbmV3IFJlYWN0TmF0aXZlSW5mbygpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlVXNlckFnZW50KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Tm9kZVZlcnNpb24oKTtcbn1cbmZ1bmN0aW9uIG1hdGNoVXNlckFnZW50KHVhKSB7XG4gICAgLy8gb3B0ZWQgZm9yIHVzaW5nIHJlZHVjZSBoZXJlIHJhdGhlciB0aGFuIEFycmF5I2ZpcnN0IHdpdGggYSByZWdleC50ZXN0IGNhbGxcbiAgICAvLyB0aGlzIGlzIHByaW1hcmlseSBiZWNhdXNlIHVzaW5nIHRoZSByZWR1Y2Ugd2Ugb25seSBwZXJmb3JtIHRoZSByZWdleFxuICAgIC8vIGV4ZWN1dGlvbiBvbmNlIHJhdGhlciB0aGFuIG9uY2UgZm9yIHRoZSB0ZXN0IGFuZCBmb3IgdGhlIGV4ZWMgYWdhaW4gYmVsb3dcbiAgICAvLyBwcm9iYWJseSBzb21ldGhpbmcgdGhhdCBuZWVkcyB0byBiZSBiZW5jaG1hcmtlZCB0aG91Z2hcbiAgICByZXR1cm4gKHVhICE9PSAnJyAmJlxuICAgICAgICB1c2VyQWdlbnRSdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZWQsIF9hKSB7XG4gICAgICAgICAgICB2YXIgYnJvd3NlciA9IF9hWzBdLCByZWdleCA9IF9hWzFdO1xuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1YU1hdGNoID0gcmVnZXguZXhlYyh1YSk7XG4gICAgICAgICAgICByZXR1cm4gISF1YU1hdGNoICYmIFticm93c2VyLCB1YU1hdGNoXTtcbiAgICAgICAgfSwgZmFsc2UpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyTmFtZSh1YSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hVc2VyQWdlbnQodWEpO1xuICAgIHJldHVybiBkYXRhID8gZGF0YVswXSA6IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVc2VyQWdlbnQodWEpIHtcbiAgICB2YXIgbWF0Y2hlZFJ1bGUgPSBtYXRjaFVzZXJBZ2VudCh1YSk7XG4gICAgaWYgKCFtYXRjaGVkUnVsZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG5hbWUgPSBtYXRjaGVkUnVsZVswXSwgbWF0Y2ggPSBtYXRjaGVkUnVsZVsxXTtcbiAgICBpZiAobmFtZSA9PT0gJ3NlYXJjaGJvdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCb3RJbmZvKCk7XG4gICAgfVxuICAgIHZhciB2ZXJzaW9uUGFydHMgPSBtYXRjaFsxXSAmJiBtYXRjaFsxXS5zcGxpdCgvWy5fXS8pLnNsaWNlKDAsIDMpO1xuICAgIGlmICh2ZXJzaW9uUGFydHMpIHtcbiAgICAgICAgaWYgKHZlcnNpb25QYXJ0cy5sZW5ndGggPCBSRVFVSVJFRF9WRVJTSU9OX1BBUlRTKSB7XG4gICAgICAgICAgICB2ZXJzaW9uUGFydHMgPSBfX3NwcmVhZEFycmF5cyh2ZXJzaW9uUGFydHMsIGNyZWF0ZVZlcnNpb25QYXJ0cyhSRVFVSVJFRF9WRVJTSU9OX1BBUlRTIC0gdmVyc2lvblBhcnRzLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2ZXJzaW9uUGFydHMgPSBbXTtcbiAgICB9XG4gICAgdmFyIHZlcnNpb24gPSB2ZXJzaW9uUGFydHMuam9pbignLicpO1xuICAgIHZhciBvcyA9IGRldGVjdE9TKHVhKTtcbiAgICB2YXIgc2VhcmNoQm90TWF0Y2ggPSBTRUFSQ0hCT1RfT1NfUkVHRVguZXhlYyh1YSk7XG4gICAgaWYgKHNlYXJjaEJvdE1hdGNoICYmIHNlYXJjaEJvdE1hdGNoWzFdKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2VhcmNoQm90RGV2aWNlSW5mbyhuYW1lLCB2ZXJzaW9uLCBvcywgc2VhcmNoQm90TWF0Y2hbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJyb3dzZXJJbmZvKG5hbWUsIHZlcnNpb24sIG9zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RPUyh1YSkge1xuICAgIGZvciAodmFyIGlpID0gMCwgY291bnQgPSBvcGVyYXRpbmdTeXN0ZW1SdWxlcy5sZW5ndGg7IGlpIDwgY291bnQ7IGlpKyspIHtcbiAgICAgICAgdmFyIF9hID0gb3BlcmF0aW5nU3lzdGVtUnVsZXNbaWldLCBvcyA9IF9hWzBdLCByZWdleCA9IF9hWzFdO1xuICAgICAgICB2YXIgbWF0Y2ggPSByZWdleC5leGVjKHVhKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZVZlcnNpb24oKSB7XG4gICAgdmFyIGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnZlcnNpb247XG4gICAgcmV0dXJuIGlzTm9kZSA/IG5ldyBOb2RlSW5mbyhwcm9jZXNzLnZlcnNpb24uc2xpY2UoMSkpIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVZlcnNpb25QYXJ0cyhjb3VudCkge1xuICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgY291bnQ7IGlpKyspIHtcbiAgICAgICAgb3V0cHV0LnB1c2goJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbiIsImltcG9ydCAqIGFzIHdpbmRvd01ldGFkYXRhIGZyb20gXCJAd2FsbGV0Y29ubmVjdC93aW5kb3ctbWV0YWRhdGFcIjtcbmltcG9ydCAqIGFzIHdpbmRvd0dldHRlcnMgZnJvbSBcIkB3YWxsZXRjb25uZWN0L3dpbmRvdy1nZXR0ZXJzXCI7XG5pbXBvcnQgeyBkZXRlY3QsIH0gZnJvbSBcImRldGVjdC1icm93c2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0RW52KHVzZXJBZ2VudCkge1xuICAgIHJldHVybiBkZXRlY3QodXNlckFnZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RPUygpIHtcbiAgICBjb25zdCBlbnYgPSBkZXRlY3RFbnYoKTtcbiAgICByZXR1cm4gZW52ICYmIGVudi5vcyA/IGVudi5vcyA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FuZHJvaWQoKSB7XG4gICAgY29uc3Qgb3MgPSBkZXRlY3RPUygpO1xuICAgIHJldHVybiBvcyA/IG9zLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJhbmRyb2lkXCIpIDogZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJT1MoKSB7XG4gICAgY29uc3Qgb3MgPSBkZXRlY3RPUygpO1xuICAgIHJldHVybiBvc1xuICAgICAgICA/IG9zLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJpb3NcIikgfHxcbiAgICAgICAgICAgIChvcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFjXCIpICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpXG4gICAgICAgIDogZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG4gICAgY29uc3Qgb3MgPSBkZXRlY3RPUygpO1xuICAgIHJldHVybiBvcyA/IGlzQW5kcm9pZCgpIHx8IGlzSU9TKCkgOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUoKSB7XG4gICAgY29uc3QgZW52ID0gZGV0ZWN0RW52KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gZW52ICYmIGVudi5uYW1lID8gZW52Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJub2RlXCIgOiBmYWxzZTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgICBjb25zdCByZXN1bHQgPSAhaXNOb2RlKCkgJiYgISFnZXROYXZpZ2F0b3IoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGNvbnN0IGdldEZyb21XaW5kb3cgPSB3aW5kb3dHZXR0ZXJzLmdldEZyb21XaW5kb3c7XG5leHBvcnQgY29uc3QgZ2V0RnJvbVdpbmRvd09yVGhyb3cgPSB3aW5kb3dHZXR0ZXJzLmdldEZyb21XaW5kb3dPclRocm93O1xuZXhwb3J0IGNvbnN0IGdldERvY3VtZW50T3JUaHJvdyA9IHdpbmRvd0dldHRlcnMuZ2V0RG9jdW1lbnRPclRocm93O1xuZXhwb3J0IGNvbnN0IGdldERvY3VtZW50ID0gd2luZG93R2V0dGVycy5nZXREb2N1bWVudDtcbmV4cG9ydCBjb25zdCBnZXROYXZpZ2F0b3JPclRocm93ID0gd2luZG93R2V0dGVycy5nZXROYXZpZ2F0b3JPclRocm93O1xuZXhwb3J0IGNvbnN0IGdldE5hdmlnYXRvciA9IHdpbmRvd0dldHRlcnMuZ2V0TmF2aWdhdG9yO1xuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uT3JUaHJvdyA9IHdpbmRvd0dldHRlcnMuZ2V0TG9jYXRpb25PclRocm93O1xuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uID0gd2luZG93R2V0dGVycy5nZXRMb2NhdGlvbjtcbmV4cG9ydCBjb25zdCBnZXRDcnlwdG9PclRocm93ID0gd2luZG93R2V0dGVycy5nZXRDcnlwdG9PclRocm93O1xuZXhwb3J0IGNvbnN0IGdldENyeXB0byA9IHdpbmRvd0dldHRlcnMuZ2V0Q3J5cHRvO1xuZXhwb3J0IGNvbnN0IGdldExvY2FsU3RvcmFnZU9yVGhyb3cgPSB3aW5kb3dHZXR0ZXJzLmdldExvY2FsU3RvcmFnZU9yVGhyb3c7XG5leHBvcnQgY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gd2luZG93R2V0dGVycy5nZXRMb2NhbFN0b3JhZ2U7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50TWV0YSgpIHtcbiAgICByZXR1cm4gd2luZG93TWV0YWRhdGEuZ2V0V2luZG93TWV0YWRhdGEoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXIuanMubWFwIiwiaW1wb3J0ICogYXMgc2FmZUpzb24gZnJvbSBcIkB3YWxsZXRjb25uZWN0L3NhZmUtanNvblwiO1xuZXhwb3J0IGNvbnN0IHNhZmVKc29uUGFyc2UgPSBzYWZlSnNvbi5zYWZlSnNvblBhcnNlO1xuZXhwb3J0IGNvbnN0IHNhZmVKc29uU3RyaW5naWZ5ID0gc2FmZUpzb24uc2FmZUpzb25TdHJpbmdpZnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc29uLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBzYWZlSnNvblBhcnNlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzYWZlIGpzb24gcGFyc2UgdmFsdWUgb2YgdHlwZSAke3R5cGVvZiB2YWx1ZX1gKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzYWZlSnNvblN0cmluZ2lmeSh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IHNhZmVKc29uUGFyc2UsIHNhZmVKc29uU3RyaW5naWZ5IH0gZnJvbSBcIi4vanNvblwiO1xuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vYnJvd3NlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsKGtleSwgZGF0YSkge1xuICAgIGNvbnN0IHJhdyA9IHNhZmVKc29uU3RyaW5naWZ5KGRhdGEpO1xuICAgIGNvbnN0IGxvY2FsID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKGxvY2FsKSB7XG4gICAgICAgIGxvY2FsLnNldEl0ZW0oa2V5LCByYXcpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbChrZXkpIHtcbiAgICBsZXQgZGF0YSA9IG51bGw7XG4gICAgbGV0IHJhdyA9IG51bGw7XG4gICAgY29uc3QgbG9jYWwgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAobG9jYWwpIHtcbiAgICAgICAgcmF3ID0gbG9jYWwuZ2V0SXRlbShrZXkpO1xuICAgIH1cbiAgICBkYXRhID0gcmF3ID8gc2FmZUpzb25QYXJzZShyYXcpIDogcmF3O1xuICAgIHJldHVybiBkYXRhO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxvY2FsKGtleSkge1xuICAgIGNvbnN0IGxvY2FsID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKGxvY2FsKSB7XG4gICAgICAgIGxvY2FsLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC5qcy5tYXAiLCJpbXBvcnQgeyBzZXRMb2NhbCB9IGZyb20gXCIuL2xvY2FsXCI7XG5leHBvcnQgY29uc3QgbW9iaWxlTGlua0Nob2ljZUtleSA9IFwiV0FMTEVUQ09OTkVDVF9ERUVQTElOS19DSE9JQ0VcIjtcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRJT1NNb2JpbGUodXJpLCBlbnRyeSkge1xuICAgIGNvbnN0IGVuY29kZWRVcmkgPSBlbmNvZGVVUklDb21wb25lbnQodXJpKTtcbiAgICByZXR1cm4gZW50cnkudW5pdmVyc2FsTGlua1xuICAgICAgICA/IGAke2VudHJ5LnVuaXZlcnNhbExpbmt9L3djP3VyaT0ke2VuY29kZWRVcml9YFxuICAgICAgICA6IGVudHJ5LmRlZXBMaW5rXG4gICAgICAgICAgICA/IGAke2VudHJ5LmRlZXBMaW5rfSR7ZW50cnkuZGVlcExpbmsuZW5kc1dpdGgoXCI6XCIpID8gXCIvL1wiIDogXCIvXCJ9d2M/dXJpPSR7ZW5jb2RlZFVyaX1gXG4gICAgICAgICAgICA6IFwiXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1vYmlsZUxpbmtJbmZvKGRhdGEpIHtcbiAgICBjb25zdCBmb2N1c1VyaSA9IGRhdGEuaHJlZi5zcGxpdChcIj9cIilbMF07XG4gICAgc2V0TG9jYWwobW9iaWxlTGlua0Nob2ljZUtleSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBocmVmOiBmb2N1c1VyaSB9KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9iaWxlUmVnaXN0cnlFbnRyeShyZWdpc3RyeSwgbmFtZSkge1xuICAgIHJldHVybiByZWdpc3RyeS5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmFtZS50b0xvd2VyQ2FzZSgpKSlbMF07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9iaWxlTGlua1JlZ2lzdHJ5KHJlZ2lzdHJ5LCB3aGl0ZWxpc3QpIHtcbiAgICBsZXQgbGlua3MgPSByZWdpc3RyeTtcbiAgICBpZiAod2hpdGVsaXN0KSB7XG4gICAgICAgIGxpbmtzID0gd2hpdGVsaXN0Lm1hcCgobmFtZSkgPT4gZ2V0TW9iaWxlUmVnaXN0cnlFbnRyeShyZWdpc3RyeSwgbmFtZSkpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmtzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9iaWxlLmpzLm1hcCIsImNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vcmVnaXN0cnkud2FsbGV0Y29ubmVjdC5jb21cIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRXYWxsZXRSZWdpc3RyeVVybCgpIHtcbiAgICByZXR1cm4gQVBJX1VSTCArIFwiL2FwaS92Mi93YWxsZXRzXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGFwcFJlZ2lzdHJ5VXJsKCkge1xuICAgIHJldHVybiBBUElfVVJMICsgXCIvYXBpL3YyL2RhcHBzXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9iaWxlUmVnaXN0cnlFbnRyeShlbnRyeSwgcGxhdGZvcm0gPSBcIm1vYmlsZVwiKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGVudHJ5Lm5hbWUgfHwgXCJcIixcbiAgICAgICAgc2hvcnROYW1lOiBlbnRyeS5tZXRhZGF0YS5zaG9ydE5hbWUgfHwgXCJcIixcbiAgICAgICAgY29sb3I6IGVudHJ5Lm1ldGFkYXRhLmNvbG9ycy5wcmltYXJ5IHx8IFwiXCIsXG4gICAgICAgIGxvZ286IChfYSA9IGVudHJ5LmltYWdlX3VybC5zbSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJcIixcbiAgICAgICAgdW5pdmVyc2FsTGluazogZW50cnlbcGxhdGZvcm1dLnVuaXZlcnNhbCB8fCBcIlwiLFxuICAgICAgICBkZWVwTGluazogZW50cnlbcGxhdGZvcm1dLm5hdGl2ZSB8fCBcIlwiLFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9iaWxlUmVnaXN0cnkocmVnaXN0cnksIHBsYXRmb3JtID0gXCJtb2JpbGVcIikge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlZ2lzdHJ5KVxuICAgICAgICAuZmlsdGVyKGVudHJ5ID0+ICEhZW50cnlbcGxhdGZvcm1dLnVuaXZlcnNhbCB8fCAhIWVudHJ5W3BsYXRmb3JtXS5uYXRpdmUpXG4gICAgICAgIC5tYXAoKGVudHJ5KSA9PiBmb3JtYXRNb2JpbGVSZWdpc3RyeUVudHJ5KGVudHJ5LCBwbGF0Zm9ybSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVnaXN0cnkuanMubWFwIiwiZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciBicm93c2VyVXRpbHMgPSByZXF1aXJlKCdAd2FsbGV0Y29ubmVjdC9icm93c2VyLXV0aWxzJyk7XG52YXIgUVJDb2RlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3FyY29kZScpKTtcbnZhciBjb3B5ID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2NvcHktdG8tY2xpcGJvYXJkJykpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncHJlYWN0L2NvbXBhdCcpO1xuXG5mdW5jdGlvbiBvcGVuKHVyaSkge1xuICBRUkNvZGUudG9TdHJpbmcodXJpLCB7XG4gICAgdHlwZTogXCJ0ZXJtaW5hbFwiXG4gIH0pLnRoZW4oY29uc29sZS5sb2cpO1xufVxuXG52YXIgV0FMTEVUQ09OTkVDVF9TVFlMRV9TSEVFVCA9IFwiOnJvb3Qge1xcbiAgLS1hbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmZhZGVJbiB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbn1cXG5cXG4uZmFkZU91dCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcXG59XFxuXFxuI3dhbGxldGNvbm5lY3Qtd3JhcHBlciB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2hlYWRlckxvZ28ge1xcbiAgaGVpZ2h0OiAyMXB4O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyIHAge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19jbG9zZV9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX19pY29uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX2xpbmUxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQ4LCA1MiwgNTkpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX2xpbmUyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQ4LCA1MiwgNTkpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1xcmNvZGVfX2Jhc2Uge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZDogcmdiYSgzNywgNDEsIDQ2LCAwLjk1KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1xcmNvZGVfX3RleHQge1xcbiAgY29sb3I6IHJnYmEoNjAsIDY2LCA4MiwgMC42KTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE4NzVlbTtcXG4gIG1hcmdpbjogMTBweCAwIDIwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1xcmNvZGVfX3RleHQge1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLndhbGxldGNvbm5lY3QtcXJjb2RlX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1xcmNvZGVfX2ltYWdlIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjdXJzb3I6IG5vbmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtcXJjb2RlX19ub3RpZmljYXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAtNjBweDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LXFyY29kZV9fbm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbl9fc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gIH1cXG4gIC53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIG1heC13aWR0aDogNDE0cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xcbiAgI2NvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDM3NXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMzIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBib3gtc2hhZG93OiAwIDEwcHggNTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZm9udC1mYW1pbHk6IHVpLXJvdW5kZWQsIFxcXCJTRiBQcm8gUm91bmRlZFxcXCIsIFxcXCJTRiBQcm8gVGV4dFxcXCIsIG1lZGl1bS1jb250ZW50LXNhbnMtc2VyaWYtZm9udCxcXG4gICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCB1aS1zYW5zLXNlcmlmLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsXFxuICAgIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLXRvcDogNDFweDtcXG4gIHBhZGRpbmc6IDI0cHggMjRweCAyMnB4O1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2Uge1xcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XFxuICB9XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlIC5oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1MCUpO1xcbiAgdHJhbnNpdGlvbjogMC4xMjVzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgbGVmdDogMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTQycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2UgLndjLWxvZ28ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2UgLndjLWxvZ28gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk5ZmY7XFxuICBoZWlnaHQ6IDIxcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIG1hc2staW1hZ2U6IHVybChcXFwiaW1hZ2VzL3djLWxvZ28uc3ZnXFxcIikgY2VudGVyIG5vLXJlcGVhdDtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSAud2MtbG9nbyBwIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2UgaDIge1xcbiAgY29sb3I6IHJnYmEoNjAsIDY2LCA4MiwgMC42KTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE4NzVlbTtcXG4gIG1hcmdpbjogMCAwIDE5cHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93IHtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdHJhbnNpdGlvbjogMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvdzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2NiwgODIsIDAuMDYpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2NiwgODIsIDAuMDYpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3NSk7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd19faDMge1xcbiAgY29sb3I6ICMyNTI5MmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd19fcmlnaHQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd19fcmlnaHRfX2FwcC1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIG1hcmdpbjogMCAxMXB4IDJweCAwO1xcbiAgd2lkdGg6IDM0cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgcmdiYSgzNywgNDEsIDQ2LCAwLjI1KTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd19fcmlnaHRfX2NhcmV0IHtcXG4gIGhlaWdodDogMThweDtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIHRyYW5zaXRpb246IDAuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbiAgd2lkdGg6IDhweDtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93OmhvdmVyIC5jYXJldCxcXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93OmFjdGl2ZSAuY2FyZXQge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fbW9iaWxlX190b2dnbGUge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbiAgYmFja2dyb3VuZDogI2Q0ZDVkOTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX3NpbmdsZV93YWxsZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX3NpbmdsZV93YWxsZXQgYSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDY0LCAxNTMsIDI1NSk7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX21vYmlsZV9fdG9nZ2xlX3NlbGVjdG9yIHtcXG4gIHdpZHRoOiBjYWxjKDUwJSAtIDhweCk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHB4KTtcXG4gIHRvcDogNHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19tb2JpbGVfX3RvZ2dsZS5yaWdodF9fc2VsZWN0ZWQgLndhbGxldGNvbm5lY3QtbW9kYWxfX21vYmlsZV9fdG9nZ2xlX3NlbGVjdG9yIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygxMDAlICsgMTJweCksIDAsIDApO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fbW9iaWxlX190b2dnbGUgYSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IDV2dztcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlciBhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjODk4ZDk3O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gIC53YWxsZXRjb25uZWN0LW1vZGFsX19mb290ZXIgYSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uc19fd3JhcHBlciB7XFxuICBtYXgtaGVpZ2h0OiA0NHZoO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25zX193cmFwcGVyX19hbmRyb2lkIHtcXG4gIG1hcmdpbjogNTAlIDA7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbnNfX3dyYXBwZXJfX3dyYXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uc19fd3JhcHBlcl9fd3JhcCB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICB9XFxufVxcblxcbi53YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjQsIDE1MywgMjU1KTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX19pY29uX2FuY2hvciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogOHB4O1xcbiAgd2lkdGg6IDQycHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX19pY29uX2FuY2hvciB7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgfVxcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25fX2ljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCAwIHJnYmEoMzcsIDQxLCA0NiwgMC4yNSk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbl9fdGV4dCB7XFxuICBjb2xvcjogIzQyNDk1MjtcXG4gIGZvbnQtc2l6ZTogMi43dnc7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAxLjh2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC53YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbl9fdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3Qtc2VhcmNoX19pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZDRkNWQ5O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXCI7XG5cbi8vIEEgdHlwZSBvZiBwcm9taXNlLWxpa2UgdGhhdCByZXNvbHZlcyBzeW5jaHJvbm91c2x5IGFuZCBzdXBwb3J0cyBvbmx5IG9uZSBvYnNlcnZlclxudmFyIF9pdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi90eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLml0ZXJhdG9yIHx8IChTeW1ib2wuaXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpIDogXCJAQGl0ZXJhdG9yXCI7IC8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyB2YWx1ZXNcbnZhciBfYXN5bmNJdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi90eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgKFN5bWJvbC5hc3luY0l0ZXJhdG9yID0gU3ltYm9sKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3JcIikpIDogXCJAQGFzeW5jSXRlcmF0b3JcIjsgLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSBvbiBhIHZhbHVlIHVzaW5nIGl0J3MgYXN5bmMgaXRlcmF0b3IgaWYgcHJlc2VudCwgb3IgaXRzIHN5bmNocm9ub3VzIGl0ZXJhdG9yIGlmIG1pc3NpbmdcblxuZnVuY3Rpb24gX2NhdGNoKGJvZHksIHJlY292ZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcmVzdWx0ID0gYm9keSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHJlY292ZXIoZSk7XG4gIH1cblxuICBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG4gICAgcmV0dXJuIHJlc3VsdC50aGVuKHZvaWQgMCwgcmVjb3Zlcik7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSAvLyBBc3luY2hyb25vdXNseSBhd2FpdCBhIHByb21pc2UgYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBhIGZpbmFsbHkgY29udGludWF0aW9uXG5cbnZhciBXQUxMRVRDT05ORUNUX0xPR09fU1ZHX1VSTCA9IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBoZWlnaHQ9JzE4NScgdmlld0JveD0nMCAwIDMwMCAxODUnIHdpZHRoPSczMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J202MS40Mzg1NDI5IDM2LjI1NjI2MTJjNDguOTExMjI0MS00Ny44ODgxNjYzIDEyOC4yMTE5ODcxLTQ3Ljg4ODE2NjMgMTc3LjEyMzIwOTEgMGw1Ljg4NjU0NSA1Ljc2MzQxNzRjMi40NDU1NjEgMi4zOTQ0MDgxIDIuNDQ1NTYxIDYuMjc2NTExMiAwIDguNjcwOTIwNGwtMjAuMTM2Njk1IDE5LjcxNTUwM2MtMS4yMjI3ODEgMS4xOTcyMDUxLTMuMjA1MyAxLjE5NzIwNTEtNC40MjgwODEgMGwtOC4xMDA1ODQtNy45MzExNDc5Yy0zNC4xMjE2OTItMzMuNDA3OTgxNy04OS40NDM4ODYtMzMuNDA3OTgxNy0xMjMuNTY1NTc4OCAwbC04LjY3NTA1NjIgOC40OTM2MDUxYy0xLjIyMjc4MTYgMS4xOTcyMDQxLTMuMjA1MzAxIDEuMTk3MjA0MS00LjQyODA4MDYgMGwtMjAuMTM2Njk0OS0xOS43MTU1MDMxYy0yLjQ0NTU2MTItMi4zOTQ0MDkyLTIuNDQ1NTYxMi02LjI3NjUxMjIgMC04LjY3MDkyMDR6bTIxOC43Njc3OTYxIDQwLjc3Mzc0NDkgMTcuOTIxNjk3IDE3LjU0Njg5N2MyLjQ0NTU0OSAyLjM5NDM5NjkgMi40NDU1NjMgNi4yNzY0NzY5LjAwMDAzMSA4LjY3MDg4OTlsLTgwLjgxMDE3MSA3OS4xMjExMzRjLTIuNDQ1NTQ0IDIuMzk0NDI2LTYuNDEwNTgyIDIuMzk0NDUzLTguODU2MTYuMDAwMDYyLS4wMDAwMS0uMDAwMDEtLjAwMDAyMi0uMDAwMDIyLS4wMDAwMzItLjAwMDAzMmwtNTcuMzU0MTQzLTU2LjE1NDU3MmMtLjYxMTM5LS41OTg2MDItMS42MDI2NS0uNTk4NjAyLTIuMjE0MDQgMC0uMDAwMDA0LjAwMDAwNC0uMDAwMDA3LjAwMDAwOC0uMDAwMDExLjAwMDAxMWwtNTcuMzUyOTIxMiA1Ni4xNTQ1MzFjLTIuNDQ1NTM2OCAyLjM5NDQzMi02LjQxMDU3NTUgMi4zOTQ0NzItOC44NTYxNjEyLjAwMDA4Ny0uMDAwMDE0My0uMDAwMDE0LS4wMDAwMjk2LS4wMDAwMjgtLjAwMDA0NDktLjAwMDA0NGwtODAuODEyNDE5NDMtNzkuMTIyMTg1Yy0yLjQ0NTU2MDIxLTIuMzk0NDA4LTIuNDQ1NTYwMjEtNi4yNzY1MTE1IDAtOC42NzA5MTk3bDE3LjkyMTcyOTYzLTE3LjU0Njg2NzNjMi40NDU1NjAyLTIuMzk0NDA4MiA2LjQxMDU5ODktMi4zOTQ0MDgyIDguODU2MTYwMiAwbDU3LjM1NDk3NzUgNTYuMTU1MzU3Yy42MTEzOTA4LjU5ODYwMiAxLjYwMjY0OS41OTg2MDIgMi4yMTQwMzk4IDAgLjAwMDAwOTItLjAwMDAwOS4wMDAwMTc0LS4wMDAwMTcuMDAwMDI2NS0uMDAwMDI0bDU3LjM1MjEwMzEtNTYuMTU1MzMzYzIuNDQ1NTA1LTIuMzk0NDYzMyA2LjQxMDU0NC0yLjM5NDU1MzEgOC44NTYxNjEtLjAwMDIuMDAwMDM0LjAwMDAzMzYuMDAwMDY4LjAwMDA2NzMuMDAwMTAxLjAwMDEwMWw1Ny4zNTQ5MDIgNTYuMTU1NDMyYy42MTEzOS41OTg2MDEgMS42MDI2NS41OTg2MDEgMi4yMTQwNCAwbDU3LjM1Mzk3NS01Ni4xNTQzMjQ5YzIuNDQ1NTYxLTIuMzk0NDA5MiA2LjQxMDU5OS0yLjM5NDQwOTIgOC44NTYxNiAweicgZmlsbD0nJTIzM2I5OWZjJy8lM0UlM0Mvc3ZnJTNFXCI7XG5cbnZhciBXQUxMRVRDT05ORUNUX0hFQURFUl9URVhUID0gXCJXYWxsZXRDb25uZWN0XCI7XG52YXIgQU5JTUFUSU9OX0RVUkFUSU9OID0gMzAwO1xudmFyIERFRkFVTFRfQlVUVE9OX0NPTE9SID0gXCJyZ2IoNjQsIDE1MywgMjU1KVwiO1xudmFyIFdBTExFVENPTk5FQ1RfV1JBUFBFUl9JRCA9IFwid2FsbGV0Y29ubmVjdC13cmFwcGVyXCI7XG52YXIgV0FMTEVUQ09OTkVDVF9TVFlMRV9JRCA9IFwid2FsbGV0Y29ubmVjdC1zdHlsZS1zaGVldFwiO1xudmFyIFdBTExFVENPTk5FQ1RfTU9EQUxfSUQgPSBcIndhbGxldGNvbm5lY3QtcXJjb2RlLW1vZGFsXCI7XG52YXIgV0FMTEVUQ09OTkVDVF9DTE9TRV9CVVRUT05fSUQgPSBcIndhbGxldGNvbm5lY3QtcXJjb2RlLWNsb3NlXCI7XG52YXIgV0FMTEVUQ09OTkVDVF9DVEFfVEVYVF9JRCA9IFwid2FsbGV0Y29ubmVjdC1xcmNvZGUtdGV4dFwiO1xudmFyIFdBTExFVENPTk5FQ1RfQ09OTkVDVF9CVVRUT05fSUQgPSBcIndhbGxldGNvbm5lY3QtY29ubmVjdC1idXR0b25cIjtcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgc3JjOiBXQUxMRVRDT05ORUNUX0xPR09fU1ZHX1VSTCxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyTG9nb1wiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBXQUxMRVRDT05ORUNUX0hFQURFUl9URVhUKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX193cmFwcGVyXCIsXG4gICAgb25DbGljazogcHJvcHMub25DbG9zZVxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogV0FMTEVUQ09OTkVDVF9DTE9TRV9CVVRUT05fSUQsXG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX19pY29uXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX19saW5lMVwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX2xpbmUyXCJcbiAgfSkpKSk7XG59XG5cbmZ1bmN0aW9uIENvbm5lY3RCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25cIixcbiAgICBocmVmOiBwcm9wcy5ocmVmLFxuICAgIGlkOiAoV0FMTEVUQ09OTkVDVF9DT05ORUNUX0JVVFRPTl9JRCArIFwiLVwiICsgKHByb3BzLm5hbWUpKSxcbiAgICBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrLFxuICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuY29sb3JcbiAgICB9LFxuICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICB9LCBwcm9wcy5uYW1lKTtcbn1cblxudmFyIENBUkVUX1NWR19VUkwgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PScxOCcgdmlld0JveD0nMCAwIDggMTgnIHdpZHRoPSc4JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J20uNTg2MzAxLjIxMzg5OGMtLjQzNTk0Ny4zMzkwNy0uNTE0NDgxMy45NjczNDItLjE3NTQxMSAxLjQwMzI5Mmw0Ljg3ODMxIDYuMjcyMTJjLjI4MDg3LjM2MTExLjI4MDg3Ljg2Njc3IDAgMS4yMjc4OGwtNC44NzgzMTEgNi4yNzIxMWMtLjMzOTA3LjQzNi0uMjYwNTM2IDEuMDY0Mi4xNzU0MTIgMS40MDMzLjQzNTk0OS4zMzkxIDEuMDY0MjE5LjI2MDUgMS40MDMyODktLjE3NTRsNC44NzgzMi02LjI3MjFjLjg0MjU5LTEuMDgzMzYuODQyNTktMi42MDAzNCAwLTMuNjgzNjdsLTQuODc4MzItNi4yNzIxMmMtLjMzOTA3LS40MzU5NDc0LS45NjczNC0uNTE0NDgyLTEuNDAzMjg5LS4xNzU0MTJ6JyBmaWxsPSclMjMzYzQyNTInIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiO1xuXG5mdW5jdGlvbiBXYWxsZXRCdXR0b24ocHJvcHMpIHtcbiAgdmFyIGNvbG9yID0gcHJvcHMuY29sb3I7XG4gIHZhciBocmVmID0gcHJvcHMuaHJlZjtcbiAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lO1xuICB2YXIgbG9nbyA9IHByb3BzLmxvZ287XG4gIHZhciBvbkNsaWNrID0gcHJvcHMub25DbGljaztcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93XCIsXG4gICAgaHJlZjogaHJlZixcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd19faDNcIlxuICB9LCBuYW1lKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd19fcmlnaHRcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodF9fYXBwLWljb25cIixcbiAgICBzdHlsZToge1xuICAgICAgYmFja2dyb3VuZDogKFwidXJsKCdcIiArIGxvZ28gKyBcIicpIFwiICsgY29sb3IpLFxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJVwiXG4gICAgfVxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgc3JjOiBDQVJFVF9TVkdfVVJMLFxuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3dfX3JpZ2h0X19jYXJldFwiXG4gIH0pKSk7XG59XG5cbmZ1bmN0aW9uIFdhbGxldEljb24ocHJvcHMpIHtcbiAgdmFyIGNvbG9yID0gcHJvcHMuY29sb3I7XG4gIHZhciBocmVmID0gcHJvcHMuaHJlZjtcbiAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lO1xuICB2YXIgbG9nbyA9IHByb3BzLmxvZ287XG4gIHZhciBvbkNsaWNrID0gcHJvcHMub25DbGljaztcbiAgdmFyIGZvbnRTaXplID0gd2luZG93LmlubmVyV2lkdGggPCA3NjggPyAoKG5hbWUubGVuZ3RoID4gOCA/IDIuNSA6IDIuNykgKyBcInZ3XCIpIDogXCJpbmhlcml0XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX19pY29uX2FuY2hvclwiLFxuICAgIGhyZWY6IGhyZWYsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25fX2ljb25cIixcbiAgICBzdHlsZToge1xuICAgICAgYmFja2dyb3VuZDogKFwidXJsKCdcIiArIGxvZ28gKyBcIicpIFwiICsgY29sb3IpLFxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJVwiXG4gICAgfVxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGZvbnRTaXplOiBmb250U2l6ZVxuICAgIH0sXG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX190ZXh0XCJcbiAgfSwgbmFtZSkpO1xufVxuXG52YXIgR1JJRF9NSU5fQ09VTlQgPSA1O1xudmFyIExJTktTX1BFUl9QQUdFID0gMTI7XG5cbmZ1bmN0aW9uIExpbmtEaXNwbGF5KHByb3BzKSB7XG4gIHZhciBhbmRyb2lkID0gYnJvd3NlclV0aWxzLmlzQW5kcm9pZCgpO1xuICB2YXIgcmVmID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIHZhciBpbnB1dCA9IHJlZlswXTtcbiAgdmFyIHNldElucHV0ID0gcmVmWzFdO1xuICB2YXIgcmVmJDEgPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgdmFyIGZpbHRlciA9IHJlZiQxWzBdO1xuICB2YXIgc2V0RmlsdGVyID0gcmVmJDFbMV07XG4gIHZhciByZWYkMiA9IFJlYWN0LnVzZVN0YXRlKDEpO1xuICB2YXIgcGFnZSA9IHJlZiQyWzBdO1xuICB2YXIgc2V0UGFnZSA9IHJlZiQyWzFdO1xuICB2YXIgbGlua3MgPSBmaWx0ZXIgPyBwcm9wcy5saW5rcy5maWx0ZXIoZnVuY3Rpb24gKGxpbmspIHsgcmV0dXJuIGxpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKTsgfSkgOiBwcm9wcy5saW5rcztcbiAgdmFyIGVycm9yTWVzc2FnZSA9IHByb3BzLmVycm9yTWVzc2FnZTtcbiAgdmFyIGdyaWQgPSBmaWx0ZXIgfHwgbGlua3MubGVuZ3RoID4gR1JJRF9NSU5fQ09VTlQ7XG4gIHZhciBwYWdlcyA9IE1hdGguY2VpbChsaW5rcy5sZW5ndGggLyBMSU5LU19QRVJfUEFHRSk7XG4gIHZhciByYW5nZSA9IFsocGFnZSAtIDEpICogTElOS1NfUEVSX1BBR0UgKyAxLCBwYWdlICogTElOS1NfUEVSX1BBR0VdO1xuICB2YXIgcGFnZUxpbmtzID0gbGlua3MubGVuZ3RoID8gbGlua3MuZmlsdGVyKGZ1bmN0aW9uIChfLCBpbmRleCkgeyByZXR1cm4gaW5kZXggKyAxID49IHJhbmdlWzBdICYmIGluZGV4ICsgMSA8PSByYW5nZVsxXTsgfSkgOiBbXTtcbiAgdmFyIGhhc1BhZ2luZyA9ICEhKCFhbmRyb2lkICYmIHBhZ2VzID4gMSk7XG4gIHZhciBmaWx0ZXJUaW1lb3V0ID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0KGUpIHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgY2xlYXJUaW1lb3V0KGZpbHRlclRpbWVvdXQpO1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBmaWx0ZXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHNldFBhZ2UoMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SW5wdXQoXCJcIik7XG4gICAgICBzZXRGaWx0ZXIoXCJcIik7XG4gICAgICBzZXRQYWdlKDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICBpZDogV0FMTEVUQ09OTkVDVF9DVEFfVEVYVF9JRCxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1xcmNvZGVfX3RleHRcIlxuICB9LCBhbmRyb2lkID8gcHJvcHMudGV4dC5jb25uZWN0X21vYmlsZV93YWxsZXQgOiBwcm9wcy50ZXh0LmNob29zZV9wcmVmZXJyZWRfd2FsbGV0KSwgIWFuZHJvaWQgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1zZWFyY2hfX2lucHV0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIsXG4gICAgdmFsdWU6IGlucHV0LFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVJbnB1dFxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiAoXCJ3YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbnNfX3dyYXBwZXJcIiArIChhbmRyb2lkID8gXCJfX2FuZHJvaWRcIiA6IGdyaWQgJiYgbGlua3MubGVuZ3RoID8gXCJfX3dyYXBcIiA6IFwiXCIpKVxuICB9LCAhYW5kcm9pZCA/IHBhZ2VMaW5rcy5sZW5ndGggPyBwYWdlTGlua3MubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHZhciBjb2xvciA9IGVudHJ5LmNvbG9yO1xuICAgIHZhciBuYW1lID0gZW50cnkubmFtZTtcbiAgICB2YXIgc2hvcnROYW1lID0gZW50cnkuc2hvcnROYW1lO1xuICAgIHZhciBsb2dvID0gZW50cnkubG9nbztcbiAgICB2YXIgaHJlZiA9IGJyb3dzZXJVdGlscy5mb3JtYXRJT1NNb2JpbGUocHJvcHMudXJpLCBlbnRyeSk7XG4gICAgdmFyIGhhbmRsZUNsaWNrSU9TID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgYnJvd3NlclV0aWxzLnNhdmVNb2JpbGVMaW5rSW5mbyh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGhyZWY6IGhyZWZcbiAgICAgIH0pO1xuICAgIH0sIFtwYWdlTGlua3NdKTtcbiAgICByZXR1cm4gIWdyaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwge1xuICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgaHJlZjogaHJlZixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBsb2dvOiBsb2dvLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2tJT1NcbiAgICB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwge1xuICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgaHJlZjogaHJlZixcbiAgICAgIG5hbWU6IHNob3J0TmFtZSB8fCBuYW1lLFxuICAgICAgbG9nbzogbG9nbyxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrSU9TXG4gICAgfSk7XG4gIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3JNZXNzYWdlLmxlbmd0aCA/IHByb3BzLmVycm9yTWVzc2FnZSA6ICEhcHJvcHMubGlua3MubGVuZ3RoICYmICFsaW5rcy5sZW5ndGggPyBwcm9wcy50ZXh0Lm5vX3dhbGxldHNfZm91bmQgOiBwcm9wcy50ZXh0LmxvYWRpbmcpKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdEJ1dHRvbiwge1xuICAgIG5hbWU6IHByb3BzLnRleHQuY29ubmVjdCxcbiAgICBjb2xvcjogREVGQVVMVF9CVVRUT05fQ09MT1IsXG4gICAgaHJlZjogcHJvcHMudXJpLFxuICAgIG9uQ2xpY2s6IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGJyb3dzZXJVdGlscy5zYXZlTW9iaWxlTGlua0luZm8oe1xuICAgICAgICBuYW1lOiBcIlVua25vd25cIixcbiAgICAgICAgaHJlZjogcHJvcHMudXJpXG4gICAgICB9KTtcbiAgICB9LCBbXSlcbiAgfSkpLCBoYXNQYWdpbmcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlclwiXG4gIH0sIEFycmF5KHBhZ2VzKS5maWxsKDApLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICB2YXIgcGFnZU51bWJlciA9IGluZGV4ICsgMTtcbiAgICB2YXIgc2VsZWN0ZWQgPSBwYWdlID09PSBwYWdlTnVtYmVyO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBtYXJnaW46IFwiYXV0byAxMHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IHNlbGVjdGVkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiXG4gICAgICB9LFxuICAgICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0UGFnZShwYWdlTnVtYmVyKTsgfVxuICAgIH0sIHBhZ2VOdW1iZXIpO1xuICB9KSkpO1xufVxuXG5mdW5jdGlvbiBOb3RpZmljYXRpb24ocHJvcHMpIHtcbiAgdmFyIHNob3cgPSAhIXByb3BzLm1lc3NhZ2UudHJpbSgpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiAoXCJ3YWxsZXRjb25uZWN0LXFyY29kZV9fbm90aWZpY2F0aW9uXCIgKyAoc2hvdyA/IFwiIG5vdGlmaWNhdGlvbl9fc2hvd1wiIDogXCJcIikpXG4gIH0sIHByb3BzLm1lc3NhZ2UpO1xufVxuXG52YXIgZm9ybWF0UVJDb2RlSW1hZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0cnkge1xuICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoUVJDb2RlLnRvU3RyaW5nKGRhdGEsIHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHR5cGU6IFwic3ZnXCJcbiAgICB9KSkudGhlbihmdW5jdGlvbiAoZGF0YVN0cmluZykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhU3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFTdHJpbmcucmVwbGFjZShcIjxzdmdcIiwgXCI8c3ZnIGNsYXNzPVxcXCJ3YWxsZXRjb25uZWN0LXFyY29kZV9faW1hZ2VcXFwiXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBRUkNvZGVEaXNwbGF5KHByb3BzKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgdmFyIG5vdGlmaWNhdGlvbiA9IHJlZlswXTtcbiAgdmFyIHNldE5vdGlmaWNhdGlvbiA9IHJlZlsxXTtcbiAgdmFyIHJlZiQxID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIHZhciBzdmcgPSByZWYkMVswXTtcbiAgdmFyIHNldFN2ZyA9IHJlZiQxWzFdO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZvcm1hdFFSQ29kZUltYWdlKHByb3BzLnVyaSkpLnRoZW4oZnVuY3Rpb24gKF9mb3JtYXRRUkNvZGVJbWFnZSkge1xuICAgICAgICBzZXRTdmcoX2Zvcm1hdFFSQ29kZUltYWdlKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHZhciBjb3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1Y2Nlc3MgPSBjb3B5KHByb3BzLnVyaSk7XG5cbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgc2V0Tm90aWZpY2F0aW9uKHByb3BzLnRleHQuY29waWVkX3RvX2NsaXBib2FyZCk7XG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBzZXROb3RpZmljYXRpb24oXCJcIik7IH0sIDEyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXROb3RpZmljYXRpb24oXCJFcnJvclwiKTtcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldE5vdGlmaWNhdGlvbihcIlwiKTsgfSwgMTIwMCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICBpZDogV0FMTEVUQ09OTkVDVF9DVEFfVEVYVF9JRCxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1xcmNvZGVfX3RleHRcIlxuICB9LCBwcm9wcy50ZXh0LnNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogc3ZnXG4gICAgfVxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlclwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBvbkNsaWNrOiBjb3B5VG9DbGlwYm9hcmRcbiAgfSwgcHJvcHMudGV4dC5jb3B5X3RvX2NsaXBib2FyZCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGlmaWNhdGlvbiwge1xuICAgIG1lc3NhZ2U6IG5vdGlmaWNhdGlvblxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIE1vZGFsKHByb3BzKSB7XG4gIHZhciBhbmRyb2lkID0gYnJvd3NlclV0aWxzLmlzQW5kcm9pZCgpO1xuICB2YXIgbW9iaWxlID0gYnJvd3NlclV0aWxzLmlzTW9iaWxlKCk7XG4gIHZhciB3aGl0ZWxpc3QgPSBtb2JpbGUgPyBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMgJiYgcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zLm1vYmlsZUxpbmtzID8gcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zLm1vYmlsZUxpbmtzIDogdW5kZWZpbmVkIDogcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zICYmIHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucy5kZXNrdG9wTGlua3MgPyBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMuZGVza3RvcExpbmtzIDogdW5kZWZpbmVkO1xuICB2YXIgcmVmID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICB2YXIgbG9hZGluZyA9IHJlZlswXTtcbiAgdmFyIHNldExvYWRpbmcgPSByZWZbMV07XG4gIHZhciByZWYkMSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgdmFyIGZldGNoZWQgPSByZWYkMVswXTtcbiAgdmFyIHNldEZldGNoZWQgPSByZWYkMVsxXTtcbiAgdmFyIHJlZiQyID0gUmVhY3QudXNlU3RhdGUoIW1vYmlsZSk7XG4gIHZhciBkaXNwbGF5UVJDb2RlID0gcmVmJDJbMF07XG4gIHZhciBzZXREaXNwbGF5UVJDb2RlID0gcmVmJDJbMV07XG4gIHZhciBkaXNwbGF5UHJvcHMgPSB7XG4gICAgbW9iaWxlOiBtb2JpbGUsXG4gICAgdGV4dDogcHJvcHMudGV4dCxcbiAgICB1cmk6IHByb3BzLnVyaSxcbiAgICBxcmNvZGVNb2RhbE9wdGlvbnM6IHByb3BzLnFyY29kZU1vZGFsT3B0aW9uc1xuICB9O1xuICB2YXIgcmVmJDMgPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgdmFyIHNpbmdsZUxpbmtIcmVmID0gcmVmJDNbMF07XG4gIHZhciBzZXRTaW5nbGVMaW5rSHJlZiA9IHJlZiQzWzFdO1xuICB2YXIgcmVmJDQgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHZhciBoYXNTaW5nbGVMaW5rID0gcmVmJDRbMF07XG4gIHZhciBzZXRIYXNTaW5nbGVMaW5rID0gcmVmJDRbMV07XG4gIHZhciByZWYkNSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgdmFyIGxpbmtzID0gcmVmJDVbMF07XG4gIHZhciBzZXRMaW5rcyA9IHJlZiQ1WzFdO1xuICB2YXIgcmVmJDYgPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgdmFyIGVycm9yTWVzc2FnZSA9IHJlZiQ2WzBdO1xuICB2YXIgc2V0RXJyb3JNZXNzYWdlID0gcmVmJDZbMV07XG5cbiAgdmFyIGdldExpbmtzSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZldGNoZWQgfHwgbG9hZGluZyB8fCB3aGl0ZWxpc3QgJiYgIXdoaXRlbGlzdC5sZW5ndGggfHwgbGlua3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5pdExpbmtzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChhbmRyb2lkKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICB2YXIgX3RlbXAgPSBfY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVybCA9IHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucyAmJiBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMucmVnaXN0cnlVcmwgPyBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMucmVnaXN0cnlVcmwgOiBicm93c2VyVXRpbHMuZ2V0V2FsbGV0UmVnaXN0cnlVcmwoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmV0Y2godXJsKSkudGhlbihmdW5jdGlvbiAocmVnaXN0cnlSZXNwb25zZSkge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlZ2lzdHJ5UmVzcG9uc2UuanNvbigpKS50aGVuKGZ1bmN0aW9uIChfcmVnaXN0cnlSZXNwb25zZSRqc28pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVnaXN0cnkgPSBfcmVnaXN0cnlSZXNwb25zZSRqc28ubGlzdGluZ3M7XG4gICAgICAgICAgICAgICAgdmFyIHBsYXRmb3JtID0gbW9iaWxlID8gXCJtb2JpbGVcIiA6IFwiZGVza3RvcFwiO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9saW5rcyA9IGJyb3dzZXJVdGlscy5nZXRNb2JpbGVMaW5rUmVnaXN0cnkoYnJvd3NlclV0aWxzLmZvcm1hdE1vYmlsZVJlZ2lzdHJ5KHJlZ2lzdHJ5LCBwbGF0Zm9ybSksIHdoaXRlbGlzdCk7XG5cbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRGZXRjaGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSghX2xpbmtzLmxlbmd0aCA/IHByb3BzLnRleHQubm9fc3VwcG9ydGVkX3dhbGxldHMgOiBcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXRMaW5rcyhfbGlua3MpO1xuICAgICAgICAgICAgICAgIHZhciBoYXNTaW5nbGVMaW5rID0gX2xpbmtzLmxlbmd0aCA9PT0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNTaW5nbGVMaW5rKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTaW5nbGVMaW5rSHJlZihicm93c2VyVXRpbHMuZm9ybWF0SU9TTW9iaWxlKHByb3BzLnVyaSwgX2xpbmtzWzBdKSk7XG4gICAgICAgICAgICAgICAgICBzZXREaXNwbGF5UVJDb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldEhhc1NpbmdsZUxpbmsoaGFzU2luZ2xlTGluayk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0RmV0Y2hlZCh0cnVlKTtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShwcm9wcy50ZXh0LnNvbWV0aGluZ193ZW50X3dyb25nKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90ZW1wICYmIF90ZW1wLnRoZW4gPyBfdGVtcC50aGVuKGZ1bmN0aW9uICgpIHt9KSA6IHZvaWQgMCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGluaXRMaW5rcygpO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldExpbmtzSWZOZWVkZWQoKTtcbiAgdmFyIHJpZ2h0U2VsZWN0ZWQgPSBtb2JpbGUgPyBkaXNwbGF5UVJDb2RlIDogIWRpc3BsYXlRUkNvZGU7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogV0FMTEVUQ09OTkVDVF9NT0RBTF9JRCxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1xcmNvZGVfX2Jhc2UgYW5pbWF0ZWQgZmFkZUluXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwge1xuICAgIG9uQ2xvc2U6IHByb3BzLm9uQ2xvc2VcbiAgfSksIGhhc1NpbmdsZUxpbmsgJiYgZGlzcGxheVFSQ29kZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19zaW5nbGVfd2FsbGV0XCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJyb3dzZXJVdGlscy5zYXZlTW9iaWxlTGlua0luZm8oe1xuICAgICAgbmFtZTogbGlua3NbMF0ubmFtZSxcbiAgICAgIGhyZWY6IHNpbmdsZUxpbmtIcmVmXG4gICAgfSk7IH0sXG4gICAgaHJlZjogc2luZ2xlTGlua0hyZWYsXG4gICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgfSwgcHJvcHMudGV4dC5jb25uZWN0X3dpdGggKyBcIiBcIiArIChoYXNTaW5nbGVMaW5rID8gbGlua3NbMF0ubmFtZSA6IFwiXCIpICsgXCIg4oC6XCIpKSA6IGFuZHJvaWQgfHwgbG9hZGluZyB8fCAhbG9hZGluZyAmJiBsaW5rcy5sZW5ndGggPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IChcIndhbGxldGNvbm5lY3QtbW9kYWxfX21vYmlsZV9fdG9nZ2xlXCIgKyAocmlnaHRTZWxlY3RlZCA/IFwiIHJpZ2h0X19zZWxlY3RlZFwiIDogXCJcIikpXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19tb2JpbGVfX3RvZ2dsZV9zZWxlY3RvclwiXG4gIH0pLCBtb2JpbGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHNldERpc3BsYXlRUkNvZGUoZmFsc2UpLCBnZXRMaW5rc0lmTmVlZGVkKCkpOyB9XG4gIH0sIHByb3BzLnRleHQubW9iaWxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldERpc3BsYXlRUkNvZGUodHJ1ZSk7IH1cbiAgfSwgcHJvcHMudGV4dC5xcmNvZGUpKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXREaXNwbGF5UVJDb2RlKHRydWUpOyB9XG4gIH0sIHByb3BzLnRleHQucXJjb2RlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChzZXREaXNwbGF5UVJDb2RlKGZhbHNlKSwgZ2V0TGlua3NJZk5lZWRlZCgpKTsgfVxuICB9LCBwcm9wcy50ZXh0LmRlc2t0b3ApKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGRpc3BsYXlRUkNvZGUgfHwgIWFuZHJvaWQgJiYgIWxvYWRpbmcgJiYgIWxpbmtzLmxlbmd0aCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUVJDb2RlRGlzcGxheSwgT2JqZWN0LmFzc2lnbih7fSwgZGlzcGxheVByb3BzKSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmtEaXNwbGF5LCBPYmplY3QuYXNzaWduKHt9LCBkaXNwbGF5UHJvcHMsXG4gICAge2xpbmtzOiBsaW5rcyxcbiAgICBlcnJvck1lc3NhZ2U6IGVycm9yTWVzc2FnZX0pKSkpKTtcbn1cblxudmFyIGRlID0ge1xuICBjaG9vc2VfcHJlZmVycmVkX3dhbGxldDogXCJXw6RobGUgYmV2b3J6dWd0ZSBXYWxsZXRcIixcbiAgY29ubmVjdF9tb2JpbGVfd2FsbGV0OiBcIlZlcmJpbmRlIG1pdCBNb2JpbGUgV2FsbGV0XCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcIlNjYW5uZSBkZW4gUVItY29kZSBtaXQgZWluZXIgV2FsbGV0Q29ubmVjdCBrb21wYXRpYmxlbiBXYWxsZXRcIixcbiAgY29ubmVjdDogXCJWZXJiaW5kZW5cIixcbiAgcXJjb2RlOiBcIlFSLUNvZGVcIixcbiAgbW9iaWxlOiBcIk1vYmlsZVwiLFxuICBkZXNrdG9wOiBcIkRlc2t0b3BcIixcbiAgY29weV90b19jbGlwYm9hcmQ6IFwiSW4gZGllIFp3aXNjaGVuYWJsYWdlIGtvcGllcmVuXCIsXG4gIGNvcGllZF90b19jbGlwYm9hcmQ6IFwiSW4gZGllIFp3aXNjaGVuYWJsYWdlIGtvcGllcnQhXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCJWZXJiaW5kZW4gbWl0IEhpbGZlIHZvblwiLFxuICBsb2FkaW5nOiBcIkxhZGVuLi4uXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcIkV0d2FzIGlzdCBzY2hpZWYgZ2VsYXVmZW5cIixcbiAgbm9fc3VwcG9ydGVkX3dhbGxldHM6IFwiRXMgZ2lidCBub2NoIGtlaW5lIHVudGVyc3TDvHR6dGVuIFdhbGxldFwiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcImtlaW5lIFdhbGxldCBnZWZ1bmRlblwiXG59O1xuXG52YXIgZW4gPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIkNob29zZSB5b3VyIHByZWZlcnJlZCB3YWxsZXRcIixcbiAgY29ubmVjdF9tb2JpbGVfd2FsbGV0OiBcIkNvbm5lY3QgdG8gTW9iaWxlIFdhbGxldFwiLFxuICBzY2FuX3FyY29kZV93aXRoX3dhbGxldDogXCJTY2FuIFFSIGNvZGUgd2l0aCBhIFdhbGxldENvbm5lY3QtY29tcGF0aWJsZSB3YWxsZXRcIixcbiAgY29ubmVjdDogXCJDb25uZWN0XCIsXG4gIHFyY29kZTogXCJRUiBDb2RlXCIsXG4gIG1vYmlsZTogXCJNb2JpbGVcIixcbiAgZGVza3RvcDogXCJEZXNrdG9wXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIkNvcHkgdG8gY2xpcGJvYXJkXCIsXG4gIGNvcGllZF90b19jbGlwYm9hcmQ6IFwiQ29waWVkIHRvIGNsaXBib2FyZCFcIixcbiAgY29ubmVjdF93aXRoOiBcIkNvbm5lY3Qgd2l0aFwiLFxuICBsb2FkaW5nOiBcIkxvYWRpbmcuLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIixcbiAgbm9fc3VwcG9ydGVkX3dhbGxldHM6IFwiVGhlcmUgYXJlIG5vIHN1cHBvcnRlZCB3YWxsZXRzIHlldFwiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIk5vIHdhbGxldHMgZm91bmRcIlxufTtcblxudmFyIGVzID0ge1xuICBjaG9vc2VfcHJlZmVycmVkX3dhbGxldDogXCJFbGlnZSB0dSBiaWxsZXRlcmEgcHJlZmVyaWRhXCIsXG4gIGNvbm5lY3RfbW9iaWxlX3dhbGxldDogXCJDb25lY3RhciBhIGJpbGxldGVyYSBtw7N2aWxcIixcbiAgc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQ6IFwiRXNjYW5lYSBlbCBjw7NkaWdvIFFSIGNvbiB1bmEgYmlsbGV0ZXJhIGNvbXBhdGlibGUgY29uIFdhbGxldENvbm5lY3RcIixcbiAgY29ubmVjdDogXCJDb25lY3RhclwiLFxuICBxcmNvZGU6IFwiQ8OzZGlnbyBRUlwiLFxuICBtb2JpbGU6IFwiTcOzdmlsXCIsXG4gIGRlc2t0b3A6IFwiRGVza3RvcFwiLFxuICBjb3B5X3RvX2NsaXBib2FyZDogXCJDb3BpYXJcIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCJDb3BpYWRvIVwiLFxuICBjb25uZWN0X3dpdGg6IFwiQ29uZWN0YXIgbWVkaWFudGVcIixcbiAgbG9hZGluZzogXCJDYXJnYW5kby4uLlwiLFxuICBzb21ldGhpbmdfd2VudF93cm9uZzogXCJBbGdvIHNhbGnDsyBtYWxcIixcbiAgbm9fc3VwcG9ydGVkX3dhbGxldHM6IFwiVG9kYXbDrWEgbm8gaGF5IGJpbGxldGVyYXMgY29tcGF0aWJsZXNcIixcbiAgbm9fd2FsbGV0c19mb3VuZDogXCJObyBzZSBlbmNvbnRyYXJvbiBiaWxsZXRlcmFzXCJcbn07XG5cbnZhciBmciA9IHtcbiAgY2hvb3NlX3ByZWZlcnJlZF93YWxsZXQ6IFwiQ2hvaXNpc3NleiB2b3RyZSBwb3J0ZWZldWlsbGUgcHLDqWbDqXLDqVwiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwiU2UgY29ubmVjdGVyIGF1IHBvcnRlZmV1aWxsZSBtb2JpbGVcIixcbiAgc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQ6IFwiU2Nhbm5leiBsZSBRUiBjb2RlIGF2ZWMgdW4gcG9ydGVmZXVpbGxlIGNvbXBhdGlibGUgV2FsbGV0Q29ubmVjdFwiLFxuICBjb25uZWN0OiBcIlNlIGNvbm5lY3RlclwiLFxuICBxcmNvZGU6IFwiUVIgQ29kZVwiLFxuICBtb2JpbGU6IFwiTW9iaWxlXCIsXG4gIGRlc2t0b3A6IFwiRGVza3RvcFwiLFxuICBjb3B5X3RvX2NsaXBib2FyZDogXCJDb3BpZXJcIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCJDb3Bpw6khXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCJDb25uZWN0ZXotdm91cyDDoCBsJ2FpZGUgZGVcIixcbiAgbG9hZGluZzogXCJDaGFyZ2VtZW50Li4uXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcIlF1ZWxxdWUgY2hvc2UgYSBtYWwgdG91cm7DqVwiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJJbCBuJ3kgYSBwYXMgZW5jb3JlIGRlIHBvcnRlZmV1aWxsZXMgcHJpcyBlbiBjaGFyZ2VcIixcbiAgbm9fd2FsbGV0c19mb3VuZDogXCJBdWN1biBwb3J0ZWZldWlsbGUgdHJvdXbDqVwiXG59O1xuXG52YXIga28gPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIuybkO2VmOuKlCDsp4DqsJHsnYQg7ISg7YOd7ZWY7IS47JqUXCIsXG4gIGNvbm5lY3RfbW9iaWxlX3dhbGxldDogXCLrqqjrsJTsnbwg7KeA6rCR6rO8IOyXsOqysFwiLFxuICBzY2FuX3FyY29kZV93aXRoX3dhbGxldDogXCJXYWxsZXRDb25uZWN0IOyngOybkCDsp4DqsJHsl5DshJwgUVLsvZTrk5zrpbwg7Iqk7LqU7ZWY7IS47JqUXCIsXG4gIGNvbm5lY3Q6IFwi7Jew6rKwXCIsXG4gIHFyY29kZTogXCJRUiDsvZTrk5xcIixcbiAgbW9iaWxlOiBcIuuqqOuwlOydvFwiLFxuICBkZXNrdG9wOiBcIuuNsOyKpO2BrO2DkVwiLFxuICBjb3B5X3RvX2NsaXBib2FyZDogXCLtgbTrpr3rs7Trk5zsl5Ag67O17IKsXCIsXG4gIGNvcGllZF90b19jbGlwYm9hcmQ6IFwi7YG066a967O065Oc7JeQIOuzteyCrOuQmOyXiOyKteuLiOuLpCFcIixcbiAgY29ubmVjdF93aXRoOiBcIuyZgCDsl7DqsrDtlZjri6RcIixcbiAgbG9hZGluZzogXCLroZzrk5wg7KSRLi4uXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcIuusuOygnOqwgCDrsJzsg53tlojsirXri4jri6QuXCIsXG4gIG5vX3N1cHBvcnRlZF93YWxsZXRzOiBcIuyVhOyngSDsp4Dsm5DrkJjripQg7KeA6rCR7J20IOyXhuyKteuLiOuLpFwiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIuyngOqwkeydhCDssL7snYQg7IiYIOyXhuyKteuLiOuLpFwiXG59O1xuXG52YXIgcHQgPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIkVzY29saGEgc3VhIGNhcnRlaXJhIHByZWZlcmlkYVwiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwiQ29uZWN0YXItc2Ugw6AgY2FydGVpcmEgbcOzdmVsXCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcIkxlciBvIGPDs2RpZ28gUVIgY29tIHVtYSBjYXJ0ZWlyYSBjb21wYXTDrXZlbCBjb20gV2FsbGV0Q29ubmVjdFwiLFxuICBjb25uZWN0OiBcIkNvbmVjdGFyXCIsXG4gIHFyY29kZTogXCJDw7NkaWdvIFFSXCIsXG4gIG1vYmlsZTogXCJNw7N2ZWxcIixcbiAgZGVza3RvcDogXCJEZXNrdG9wXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIkNvcGlhclwiLFxuICBjb3BpZWRfdG9fY2xpcGJvYXJkOiBcIkNvcGlhZG8hXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCJMaWdhciBwb3IgbWVpbyBkZVwiLFxuICBsb2FkaW5nOiBcIkNhcnJlZ2FtZW50by4uLlwiLFxuICBzb21ldGhpbmdfd2VudF93cm9uZzogXCJBbGdvIGNvcnJldSBtYWxcIixcbiAgbm9fc3VwcG9ydGVkX3dhbGxldHM6IFwiQWluZGEgbsOjbyBow6EgY2FydGVpcmFzIHN1cG9ydGFkYXNcIixcbiAgbm9fd2FsbGV0c19mb3VuZDogXCJOZW5odW1hIGNhcnRlaXJhIGVuY29udHJhZGFcIlxufTtcblxudmFyIHpoID0ge1xuICBjaG9vc2VfcHJlZmVycmVkX3dhbGxldDogXCLpgInmi6nkvaDnmoTpkrHljIVcIixcbiAgY29ubmVjdF9tb2JpbGVfd2FsbGV0OiBcIui/nuaOpeiHs+enu+WKqOerr+mSseWMhVwiLFxuICBzY2FuX3FyY29kZV93aXRoX3dhbGxldDogXCLkvb/nlKjlhbzlrrkgV2FsbGV0Q29ubmVjdCDnmoTpkrHljIXmiavmj4/kuoznu7TnoIFcIixcbiAgY29ubmVjdDogXCLov57mjqVcIixcbiAgcXJjb2RlOiBcIuS6jOe7tOeggVwiLFxuICBtb2JpbGU6IFwi56e75YqoXCIsXG4gIGRlc2t0b3A6IFwi5qGM6Z2iXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIuWkjeWItuWIsOWJqui0tOadv1wiLFxuICBjb3BpZWRfdG9fY2xpcGJvYXJkOiBcIuWkjeWItuWIsOWJqui0tOadv+aIkOWKn++8gVwiLFxuICBjb25uZWN0X3dpdGg6IFwi6YCa6L+H5Lul5LiL5pa55byP6L+e5o6lXCIsXG4gIGxvYWRpbmc6IFwi5q2j5Zyo5Yqg6L29Li4uXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcIuWHuuS6humXrumimFwiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCLnm67liY3ov5jmsqHmnInmlK/mjIHnmoTpkrHljIVcIixcbiAgbm9fd2FsbGV0c19mb3VuZDogXCLmsqHmnInmib7liLDpkrHljIVcIlxufTtcblxudmFyIGZhID0ge1xuICBjaG9vc2VfcHJlZmVycmVkX3dhbGxldDogXCLaqduM2YEg2b7ZiNmEINmF2YjYsdivINmG2LjYsSDYrtmI2K8g2LHYpyDYp9mG2KrYrtin2Kgg2qnZhtuM2K9cIixcbiAgY29ubmVjdF9tb2JpbGVfd2FsbGV0OiBcItio2Ycg2qnbjNmBINm+2YjZhCDZhdmI2KjYp9uM2YQg2YjYtdmEINi02YjbjNivXCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcItqp2K8gUVIg2LHYpyDYqNinINuM2qkg2qnbjNmBINm+2YjZhCDYs9in2LLar9in2LEg2KjYpyBXYWxsZXRDb25uZWN0INin2LPaqdmGINqp2YbbjNivXCIsXG4gIGNvbm5lY3Q6IFwi2KfYqti12KfZhFwiLFxuICBxcmNvZGU6IFwi2qnYryBRUlwiLFxuICBtb2JpbGU6IFwi2LPbjNin2LFcIixcbiAgZGVza3RvcDogXCLYr9iz2qnYqtin2b5cIixcbiAgY29weV90b19jbGlwYm9hcmQ6IFwi2qnZvtuMINio2Ycg2qnZhNuM2b4g2KjZiNix2K9cIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCLYr9ixINqp2YTbjNm+INio2YjYsdivINqp2b7bjCDYtNivIVwiLFxuICBjb25uZWN0X3dpdGg6IFwi2KfYsdiq2KjYp9i3INio2KdcIixcbiAgbG9hZGluZzogXCIuLi7YqNin2LHar9iw2KfYsduMXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcItmF2LTaqdmE24wg2b7bjNi0INii2YXYr1wiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCLZh9mG2YjYsiDZh9uM2oYg2qnbjNmBINm+2YjZhCDZvti02KrbjNio2KfZhtuMINi02K/ZhyDYp9uMINmI2KzZiNivINmG2K/Yp9ix2K9cIixcbiAgbm9fd2FsbGV0c19mb3VuZDogXCLZh9uM2oYg2qnbjNmBINm+2YjZhNuMINm+24zYr9inINmG2LTYr1wiXG59O1xuXG52YXIgbGFuZ3VhZ2VzID0ge1xuICBkZTogZGUsXG4gIGVuOiBlbixcbiAgZXM6IGVzLFxuICBmcjogZnIsXG4gIGtvOiBrbyxcbiAgcHQ6IHB0LFxuICB6aDogemgsXG4gIGZhOiBmYVxufTtcblxuZnVuY3Rpb24gaW5qZWN0U3R5bGVTaGVldCgpIHtcbiAgdmFyIGRvYyA9IGJyb3dzZXJVdGlscy5nZXREb2N1bWVudE9yVGhyb3coKTtcbiAgdmFyIHByZXYgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoV0FMTEVUQ09OTkVDVF9TVFlMRV9JRCk7XG5cbiAgaWYgKHByZXYpIHtcbiAgICBkb2MuaGVhZC5yZW1vdmVDaGlsZChwcmV2KTtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFdBTExFVENPTk5FQ1RfU1RZTEVfSUQpO1xuICBzdHlsZS5pbm5lclRleHQgPSBXQUxMRVRDT05ORUNUX1NUWUxFX1NIRUVUO1xuICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcldyYXBwZXIoKSB7XG4gIHZhciBkb2MgPSBicm93c2VyVXRpbHMuZ2V0RG9jdW1lbnRPclRocm93KCk7XG4gIHZhciB3cmFwcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgV0FMTEVUQ09OTkVDVF9XUkFQUEVSX0lEKTtcbiAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyQ2xvc2VBbmltYXRpb24oKSB7XG4gIHZhciBkb2MgPSBicm93c2VyVXRpbHMuZ2V0RG9jdW1lbnRPclRocm93KCk7XG4gIHZhciBtb2RhbCA9IGRvYy5nZXRFbGVtZW50QnlJZChXQUxMRVRDT05ORUNUX01PREFMX0lEKTtcblxuICBpZiAobW9kYWwpIHtcbiAgICBtb2RhbC5jbGFzc05hbWUgPSBtb2RhbC5jbGFzc05hbWUucmVwbGFjZShcImZhZGVJblwiLCBcImZhZGVPdXRcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgd3JhcHBlciA9IGRvYy5nZXRFbGVtZW50QnlJZChXQUxMRVRDT05ORUNUX1dSQVBQRVJfSUQpO1xuXG4gICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICBkb2MuYm9keS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9LCBBTklNQVRJT05fRFVSQVRJT04pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWRDYWxsYmFjayhjYikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRyaWdnZXJDbG9zZUFuaW1hdGlvbigpO1xuXG4gICAgaWYgKGNiKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VGV4dCgpIHtcbiAgdmFyIGxhbmcgPSBicm93c2VyVXRpbHMuZ2V0TmF2aWdhdG9yT3JUaHJvdygpLmxhbmd1YWdlLnNwbGl0KFwiLVwiKVswXSB8fCBcImVuXCI7XG4gIHJldHVybiBsYW5ndWFnZXNbbGFuZ10gfHwgbGFuZ3VhZ2VzW1wiZW5cIl07XG59XG5cbmZ1bmN0aW9uIG9wZW4kMSh1cmksIGNiLCBxcmNvZGVNb2RhbE9wdGlvbnMpIHtcbiAgaW5qZWN0U3R5bGVTaGVldCgpO1xuICB2YXIgd3JhcHBlciA9IHJlbmRlcldyYXBwZXIoKTtcbiAgUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIHtcbiAgICB0ZXh0OiBnZXRUZXh0KCksXG4gICAgdXJpOiB1cmksXG4gICAgb25DbG9zZTogZ2V0V3JhcHBlZENhbGxiYWNrKGNiKSxcbiAgICBxcmNvZGVNb2RhbE9wdGlvbnM6IHFyY29kZU1vZGFsT3B0aW9uc1xuICB9KSwgd3JhcHBlcik7XG59XG5mdW5jdGlvbiBjbG9zZSQxKCkge1xuICB0cmlnZ2VyQ2xvc2VBbmltYXRpb24oKTtcbn1cblxudmFyIGlzTm9kZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zLm5vZGUgIT09IFwidW5kZWZpbmVkXCI7IH07XG5cbmZ1bmN0aW9uIG9wZW4kMih1cmksIGNiLCBxcmNvZGVNb2RhbE9wdGlvbnMpIHtcbiAgY29uc29sZS5sb2codXJpKTtcblxuICBpZiAoaXNOb2RlKCkpIHtcbiAgICBvcGVuKHVyaSk7XG4gIH0gZWxzZSB7XG4gICAgb3BlbiQxKHVyaSwgY2IsIHFyY29kZU1vZGFsT3B0aW9ucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2UkMigpIHtcbiAgaWYgKGlzTm9kZSgpKSA7IGVsc2Uge1xuICAgIGNsb3NlJDEoKTtcbiAgfVxufVxuXG52YXIgaW5kZXggPSB7XG4gIG9wZW46IG9wZW4kMixcbiAgY2xvc2U6IGNsb3NlJDJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRMb2NhbFN0b3JhZ2UgPSBleHBvcnRzLmdldExvY2FsU3RvcmFnZU9yVGhyb3cgPSBleHBvcnRzLmdldENyeXB0byA9IGV4cG9ydHMuZ2V0Q3J5cHRvT3JUaHJvdyA9IGV4cG9ydHMuZ2V0TG9jYXRpb24gPSBleHBvcnRzLmdldExvY2F0aW9uT3JUaHJvdyA9IGV4cG9ydHMuZ2V0TmF2aWdhdG9yID0gZXhwb3J0cy5nZXROYXZpZ2F0b3JPclRocm93ID0gZXhwb3J0cy5nZXREb2N1bWVudCA9IGV4cG9ydHMuZ2V0RG9jdW1lbnRPclRocm93ID0gZXhwb3J0cy5nZXRGcm9tV2luZG93T3JUaHJvdyA9IGV4cG9ydHMuZ2V0RnJvbVdpbmRvdyA9IHZvaWQgMDtcbmZ1bmN0aW9uIGdldEZyb21XaW5kb3cobmFtZSkge1xuICAgIGxldCByZXMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvd1tuYW1lXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXMgPSB3aW5kb3dbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5leHBvcnRzLmdldEZyb21XaW5kb3cgPSBnZXRGcm9tV2luZG93O1xuZnVuY3Rpb24gZ2V0RnJvbVdpbmRvd09yVGhyb3cobmFtZSkge1xuICAgIGNvbnN0IHJlcyA9IGdldEZyb21XaW5kb3cobmFtZSk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGlzIG5vdCBkZWZpbmVkIGluIFdpbmRvd2ApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0cy5nZXRGcm9tV2luZG93T3JUaHJvdyA9IGdldEZyb21XaW5kb3dPclRocm93O1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnRPclRocm93KCkge1xuICAgIHJldHVybiBnZXRGcm9tV2luZG93T3JUaHJvdyhcImRvY3VtZW50XCIpO1xufVxuZXhwb3J0cy5nZXREb2N1bWVudE9yVGhyb3cgPSBnZXREb2N1bWVudE9yVGhyb3c7XG5mdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgICByZXR1cm4gZ2V0RnJvbVdpbmRvdyhcImRvY3VtZW50XCIpO1xufVxuZXhwb3J0cy5nZXREb2N1bWVudCA9IGdldERvY3VtZW50O1xuZnVuY3Rpb24gZ2V0TmF2aWdhdG9yT3JUaHJvdygpIHtcbiAgICByZXR1cm4gZ2V0RnJvbVdpbmRvd09yVGhyb3coXCJuYXZpZ2F0b3JcIik7XG59XG5leHBvcnRzLmdldE5hdmlnYXRvck9yVGhyb3cgPSBnZXROYXZpZ2F0b3JPclRocm93O1xuZnVuY3Rpb24gZ2V0TmF2aWdhdG9yKCkge1xuICAgIHJldHVybiBnZXRGcm9tV2luZG93KFwibmF2aWdhdG9yXCIpO1xufVxuZXhwb3J0cy5nZXROYXZpZ2F0b3IgPSBnZXROYXZpZ2F0b3I7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yVGhyb3coKSB7XG4gICAgcmV0dXJuIGdldEZyb21XaW5kb3dPclRocm93KFwibG9jYXRpb25cIik7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JUaHJvdyA9IGdldExvY2F0aW9uT3JUaHJvdztcbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIHJldHVybiBnZXRGcm9tV2luZG93KFwibG9jYXRpb25cIik7XG59XG5leHBvcnRzLmdldExvY2F0aW9uID0gZ2V0TG9jYXRpb247XG5mdW5jdGlvbiBnZXRDcnlwdG9PclRocm93KCkge1xuICAgIHJldHVybiBnZXRGcm9tV2luZG93T3JUaHJvdyhcImNyeXB0b1wiKTtcbn1cbmV4cG9ydHMuZ2V0Q3J5cHRvT3JUaHJvdyA9IGdldENyeXB0b09yVGhyb3c7XG5mdW5jdGlvbiBnZXRDcnlwdG8oKSB7XG4gICAgcmV0dXJuIGdldEZyb21XaW5kb3coXCJjcnlwdG9cIik7XG59XG5leHBvcnRzLmdldENyeXB0byA9IGdldENyeXB0bztcbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZU9yVGhyb3coKSB7XG4gICAgcmV0dXJuIGdldEZyb21XaW5kb3dPclRocm93KFwibG9jYWxTdG9yYWdlXCIpO1xufVxuZXhwb3J0cy5nZXRMb2NhbFN0b3JhZ2VPclRocm93ID0gZ2V0TG9jYWxTdG9yYWdlT3JUaHJvdztcbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gZ2V0RnJvbVdpbmRvdyhcImxvY2FsU3RvcmFnZVwiKTtcbn1cbmV4cG9ydHMuZ2V0TG9jYWxTdG9yYWdlID0gZ2V0TG9jYWxTdG9yYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFdpbmRvd01ldGFkYXRhID0gdm9pZCAwO1xuY29uc3Qgd2luZG93X2dldHRlcnNfMSA9IHJlcXVpcmUoXCJAd2FsbGV0Y29ubmVjdC93aW5kb3ctZ2V0dGVyc1wiKTtcbmZ1bmN0aW9uIGdldFdpbmRvd01ldGFkYXRhKCkge1xuICAgIGxldCBkb2M7XG4gICAgbGV0IGxvYztcbiAgICB0cnkge1xuICAgICAgICBkb2MgPSB3aW5kb3dfZ2V0dGVyc18xLmdldERvY3VtZW50T3JUaHJvdygpO1xuICAgICAgICBsb2MgPSB3aW5kb3dfZ2V0dGVyc18xLmdldExvY2F0aW9uT3JUaHJvdygpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SWNvbnMoKSB7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcbiAgICAgICAgY29uc3QgaWNvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVsID0gbGluay5nZXRBdHRyaWJ1dGUoXCJyZWxcIik7XG4gICAgICAgICAgICBpZiAocmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJpY29uXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChocmVmLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImh0dHBzOlwiKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImh0dHA6XCIpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYuaW5kZXhPZihcIi8vXCIpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFic29sdXRlSHJlZiA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChocmVmLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic29sdXRlSHJlZiArPSBocmVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IGxvYy5wYXRobmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbmFsUGF0aCA9IHBhdGguam9pbihcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic29sdXRlSHJlZiArPSBmaW5hbFBhdGggKyBcIi9cIiArIGhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25zLnB1c2goYWJzb2x1dGVIcmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhyZWYuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVVcmwgPSBsb2MucHJvdG9jb2wgKyBocmVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25zLnB1c2goYWJzb2x1dGVVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnMucHVzaChocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWNvbnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFdpbmRvd01ldGFkYXRhT2ZBbnkoLi4uYXJncykge1xuICAgICAgICBjb25zdCBtZXRhVGFncyA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm1ldGFcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWV0YVRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IG1ldGFUYWdzW2ldO1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtcIml0ZW1wcm9wXCIsIFwicHJvcGVydHlcIiwgXCJuYW1lXCJdXG4gICAgICAgICAgICAgICAgLm1hcCgodGFyZ2V0KSA9PiB0YWcuZ2V0QXR0cmlidXRlKHRhcmdldCkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdzLmluY2x1ZGVzKGF0dHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCAmJiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBnZXRXaW5kb3dNZXRhZGF0YU9mQW55KFwibmFtZVwiLCBcIm9nOnNpdGVfbmFtZVwiLCBcIm9nOnRpdGxlXCIsIFwidHdpdHRlcjp0aXRsZVwiKTtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gZG9jLnRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBnZXRXaW5kb3dNZXRhZGF0YU9mQW55KFwiZGVzY3JpcHRpb25cIiwgXCJvZzpkZXNjcmlwdGlvblwiLCBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiwgXCJrZXl3b3Jkc1wiKTtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gZ2V0TmFtZSgpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBjb25zdCB1cmwgPSBsb2Mub3JpZ2luO1xuICAgIGNvbnN0IGljb25zID0gZ2V0SWNvbnMoKTtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgdXJsLFxuICAgICAgICBpY29ucyxcbiAgICAgICAgbmFtZSxcbiAgICB9O1xuICAgIHJldHVybiBtZXRhO1xufVxuZXhwb3J0cy5nZXRXaW5kb3dNZXRhZGF0YSA9IGdldFdpbmRvd01ldGFkYXRhO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZXNlbGVjdEN1cnJlbnQgPSByZXF1aXJlKFwidG9nZ2xlLXNlbGVjdGlvblwiKTtcblxudmFyIGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmcgPSB7XG4gIFwidGV4dC9wbGFpblwiOiBcIlRleHRcIixcbiAgXCJ0ZXh0L2h0bWxcIjogXCJVcmxcIixcbiAgXCJkZWZhdWx0XCI6IFwiVGV4dFwiXG59XG5cbnZhciBkZWZhdWx0TWVzc2FnZSA9IFwiQ29weSB0byBjbGlwYm9hcmQ6ICN7a2V5fSwgRW50ZXJcIjtcblxuZnVuY3Rpb24gZm9ybWF0KG1lc3NhZ2UpIHtcbiAgdmFyIGNvcHlLZXkgPSAoL21hYyBvcyB4L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IFwi4oyYXCIgOiBcIkN0cmxcIikgKyBcIitDXCI7XG4gIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoLyN7XFxzKmtleVxccyp9L2csIGNvcHlLZXkpO1xufVxuXG5mdW5jdGlvbiBjb3B5KHRleHQsIG9wdGlvbnMpIHtcbiAgdmFyIGRlYnVnLFxuICAgIG1lc3NhZ2UsXG4gICAgcmVzZWxlY3RQcmV2aW91cyxcbiAgICByYW5nZSxcbiAgICBzZWxlY3Rpb24sXG4gICAgbWFyayxcbiAgICBzdWNjZXNzID0gZmFsc2U7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBkZWJ1ZyA9IG9wdGlvbnMuZGVidWcgfHwgZmFsc2U7XG4gIHRyeSB7XG4gICAgcmVzZWxlY3RQcmV2aW91cyA9IGRlc2VsZWN0Q3VycmVudCgpO1xuXG4gICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXG4gICAgbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG1hcmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIC8vIHJlc2V0IHVzZXIgc3R5bGVzIGZvciBzcGFuIGVsZW1lbnRcbiAgICBtYXJrLnN0eWxlLmFsbCA9IFwidW5zZXRcIjtcbiAgICAvLyBwcmV2ZW50cyBzY3JvbGxpbmcgdG8gdGhlIGVuZCBvZiB0aGUgcGFnZVxuICAgIG1hcmsuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgbWFyay5zdHlsZS50b3AgPSAwO1xuICAgIG1hcmsuc3R5bGUuY2xpcCA9IFwicmVjdCgwLCAwLCAwLCAwKVwiO1xuICAgIC8vIHVzZWQgdG8gcHJlc2VydmUgc3BhY2VzIGFuZCBsaW5lIGJyZWFrc1xuICAgIG1hcmsuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlXCI7XG4gICAgLy8gZG8gbm90IGluaGVyaXQgdXNlci1zZWxlY3QgKGl0IG1heSBiZSBgbm9uZWApXG4gICAgbWFyay5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5zdHlsZS5tc1VzZXJTZWxlY3QgPSBcInRleHRcIjtcbiAgICBtYXJrLnN0eWxlLnVzZXJTZWxlY3QgPSBcInRleHRcIjtcbiAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAob3B0aW9ucy5mb3JtYXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodHlwZW9mIGUuY2xpcGJvYXJkRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgeyAvLyBJRSAxMVxuICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUud2FybihcInVuYWJsZSB0byB1c2UgZS5jbGlwYm9hcmREYXRhXCIpO1xuICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUud2FybihcInRyeWluZyBJRSBzcGVjaWZpYyBzdHVmZlwiKTtcbiAgICAgICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5jbGVhckRhdGEoKTtcbiAgICAgICAgICB2YXIgZm9ybWF0ID0gY2xpcGJvYXJkVG9JRTExRm9ybWF0dGluZ1tvcHRpb25zLmZvcm1hdF0gfHwgY2xpcGJvYXJkVG9JRTExRm9ybWF0dGluZ1tcImRlZmF1bHRcIl1cbiAgICAgICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKGZvcm1hdCwgdGV4dCk7XG4gICAgICAgIH0gZWxzZSB7IC8vIGFsbCBvdGhlciBicm93c2Vyc1xuICAgICAgICAgIGUuY2xpcGJvYXJkRGF0YS5jbGVhckRhdGEoKTtcbiAgICAgICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YShvcHRpb25zLmZvcm1hdCwgdGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLm9uQ29weSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9wdGlvbnMub25Db3B5KGUuY2xpcGJvYXJkRGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hcmspO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG1hcmspO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNvcHkgY29tbWFuZCB3YXMgdW5zdWNjZXNzZnVsXCIpO1xuICAgIH1cbiAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBjb3B5IHVzaW5nIGV4ZWNDb21tYW5kOiBcIiwgZXJyKTtcbiAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ0cnlpbmcgSUUgc3BlY2lmaWMgc3R1ZmZcIik7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEob3B0aW9ucy5mb3JtYXQgfHwgXCJ0ZXh0XCIsIHRleHQpO1xuICAgICAgb3B0aW9ucy5vbkNvcHkgJiYgb3B0aW9ucy5vbkNvcHkod2luZG93LmNsaXBib2FyZERhdGEpO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkZWJ1ZyAmJiBjb25zb2xlLmVycm9yKFwidW5hYmxlIHRvIGNvcHkgdXNpbmcgY2xpcGJvYXJkRGF0YTogXCIsIGVycik7XG4gICAgICBkZWJ1ZyAmJiBjb25zb2xlLmVycm9yKFwiZmFsbGluZyBiYWNrIHRvIHByb21wdFwiKTtcbiAgICAgIG1lc3NhZ2UgPSBmb3JtYXQoXCJtZXNzYWdlXCIgaW4gb3B0aW9ucyA/IG9wdGlvbnMubWVzc2FnZSA6IGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgIHdpbmRvdy5wcm9tcHQobWVzc2FnZSwgdGV4dCk7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0aW9uLnJlbW92ZVJhbmdlID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UocmFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXJrKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1hcmspO1xuICAgIH1cbiAgICByZXNlbGVjdFByZXZpb3VzKCk7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDcmVhdGVkIDIwMDgtMDgtMTkuXG4gKlxuICogRGlqa3N0cmEgcGF0aC1maW5kaW5nIGZ1bmN0aW9ucy4gQWRhcHRlZCBmcm9tIHRoZSBEaWprc3RhciBQeXRob24gcHJvamVjdC5cbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMDhcbiAqICAgV3lhdHQgQmFsZHdpbiA8c2VsZkB3eWF0dGJhbGR3aW4uY29tPlxuICogICBBbGwgcmlnaHRzIHJlc2VydmVkXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICpcbiAqICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnZhciBkaWprc3RyYSA9IHtcbiAgc2luZ2xlX3NvdXJjZV9zaG9ydGVzdF9wYXRoczogZnVuY3Rpb24oZ3JhcGgsIHMsIGQpIHtcbiAgICAvLyBQcmVkZWNlc3NvciBtYXAgZm9yIGVhY2ggbm9kZSB0aGF0IGhhcyBiZWVuIGVuY291bnRlcmVkLlxuICAgIC8vIG5vZGUgSUQgPT4gcHJlZGVjZXNzb3Igbm9kZSBJRFxuICAgIHZhciBwcmVkZWNlc3NvcnMgPSB7fTtcblxuICAgIC8vIENvc3RzIG9mIHNob3J0ZXN0IHBhdGhzIGZyb20gcyB0byBhbGwgbm9kZXMgZW5jb3VudGVyZWQuXG4gICAgLy8gbm9kZSBJRCA9PiBjb3N0XG4gICAgdmFyIGNvc3RzID0ge307XG4gICAgY29zdHNbc10gPSAwO1xuXG4gICAgLy8gQ29zdHMgb2Ygc2hvcnRlc3QgcGF0aHMgZnJvbSBzIHRvIGFsbCBub2RlcyBlbmNvdW50ZXJlZDsgZGlmZmVycyBmcm9tXG4gICAgLy8gYGNvc3RzYCBpbiB0aGF0IGl0IHByb3ZpZGVzIGVhc3kgYWNjZXNzIHRvIHRoZSBub2RlIHRoYXQgY3VycmVudGx5IGhhc1xuICAgIC8vIHRoZSBrbm93biBzaG9ydGVzdCBwYXRoIGZyb20gcy5cbiAgICAvLyBYWFg6IERvIHdlIGFjdHVhbGx5IG5lZWQgYm90aCBgY29zdHNgIGFuZCBgb3BlbmA/XG4gICAgdmFyIG9wZW4gPSBkaWprc3RyYS5Qcmlvcml0eVF1ZXVlLm1ha2UoKTtcbiAgICBvcGVuLnB1c2gocywgMCk7XG5cbiAgICB2YXIgY2xvc2VzdCxcbiAgICAgICAgdSwgdixcbiAgICAgICAgY29zdF9vZl9zX3RvX3UsXG4gICAgICAgIGFkamFjZW50X25vZGVzLFxuICAgICAgICBjb3N0X29mX2UsXG4gICAgICAgIGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lLFxuICAgICAgICBjb3N0X29mX3NfdG9fdixcbiAgICAgICAgZmlyc3RfdmlzaXQ7XG4gICAgd2hpbGUgKCFvcGVuLmVtcHR5KCkpIHtcbiAgICAgIC8vIEluIHRoZSBub2RlcyByZW1haW5pbmcgaW4gZ3JhcGggdGhhdCBoYXZlIGEga25vd24gY29zdCBmcm9tIHMsXG4gICAgICAvLyBmaW5kIHRoZSBub2RlLCB1LCB0aGF0IGN1cnJlbnRseSBoYXMgdGhlIHNob3J0ZXN0IHBhdGggZnJvbSBzLlxuICAgICAgY2xvc2VzdCA9IG9wZW4ucG9wKCk7XG4gICAgICB1ID0gY2xvc2VzdC52YWx1ZTtcbiAgICAgIGNvc3Rfb2Zfc190b191ID0gY2xvc2VzdC5jb3N0O1xuXG4gICAgICAvLyBHZXQgbm9kZXMgYWRqYWNlbnQgdG8gdS4uLlxuICAgICAgYWRqYWNlbnRfbm9kZXMgPSBncmFwaFt1XSB8fCB7fTtcblxuICAgICAgLy8gLi4uYW5kIGV4cGxvcmUgdGhlIGVkZ2VzIHRoYXQgY29ubmVjdCB1IHRvIHRob3NlIG5vZGVzLCB1cGRhdGluZ1xuICAgICAgLy8gdGhlIGNvc3Qgb2YgdGhlIHNob3J0ZXN0IHBhdGhzIHRvIGFueSBvciBhbGwgb2YgdGhvc2Ugbm9kZXMgYXNcbiAgICAgIC8vIG5lY2Vzc2FyeS4gdiBpcyB0aGUgbm9kZSBhY3Jvc3MgdGhlIGN1cnJlbnQgZWRnZSBmcm9tIHUuXG4gICAgICBmb3IgKHYgaW4gYWRqYWNlbnRfbm9kZXMpIHtcbiAgICAgICAgaWYgKGFkamFjZW50X25vZGVzLmhhc093blByb3BlcnR5KHYpKSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBjb3N0IG9mIHRoZSBlZGdlIHJ1bm5pbmcgZnJvbSB1IHRvIHYuXG4gICAgICAgICAgY29zdF9vZl9lID0gYWRqYWNlbnRfbm9kZXNbdl07XG5cbiAgICAgICAgICAvLyBDb3N0IG9mIHMgdG8gdSBwbHVzIHRoZSBjb3N0IG9mIHUgdG8gdiBhY3Jvc3MgZS0tdGhpcyBpcyAqYSpcbiAgICAgICAgICAvLyBjb3N0IGZyb20gcyB0byB2IHRoYXQgbWF5IG9yIG1heSBub3QgYmUgbGVzcyB0aGFuIHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8ga25vd24gY29zdCB0byB2LlxuICAgICAgICAgIGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lID0gY29zdF9vZl9zX3RvX3UgKyBjb3N0X29mX2U7XG5cbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlbid0IHZpc2l0ZWQgdiB5ZXQgT1IgaWYgdGhlIGN1cnJlbnQga25vd24gY29zdCBmcm9tIHMgdG9cbiAgICAgICAgICAvLyB2IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbmV3IGNvc3Qgd2UganVzdCBmb3VuZCAoY29zdCBvZiBzIHRvIHUgcGx1c1xuICAgICAgICAgIC8vIGNvc3Qgb2YgdSB0byB2IGFjcm9zcyBlKSwgdXBkYXRlIHYncyBjb3N0IGluIHRoZSBjb3N0IGxpc3QgYW5kXG4gICAgICAgICAgLy8gdXBkYXRlIHYncyBwcmVkZWNlc3NvciBpbiB0aGUgcHJlZGVjZXNzb3IgbGlzdCAoaXQncyBub3cgdSkuXG4gICAgICAgICAgY29zdF9vZl9zX3RvX3YgPSBjb3N0c1t2XTtcbiAgICAgICAgICBmaXJzdF92aXNpdCA9ICh0eXBlb2YgY29zdHNbdl0gPT09ICd1bmRlZmluZWQnKTtcbiAgICAgICAgICBpZiAoZmlyc3RfdmlzaXQgfHwgY29zdF9vZl9zX3RvX3YgPiBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSkge1xuICAgICAgICAgICAgY29zdHNbdl0gPSBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZTtcbiAgICAgICAgICAgIG9wZW4ucHVzaCh2LCBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSk7XG4gICAgICAgICAgICBwcmVkZWNlc3NvcnNbdl0gPSB1O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvc3RzW2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIG1zZyA9IFsnQ291bGQgbm90IGZpbmQgYSBwYXRoIGZyb20gJywgcywgJyB0byAnLCBkLCAnLiddLmpvaW4oJycpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29ycztcbiAgfSxcblxuICBleHRyYWN0X3Nob3J0ZXN0X3BhdGhfZnJvbV9wcmVkZWNlc3Nvcl9saXN0OiBmdW5jdGlvbihwcmVkZWNlc3NvcnMsIGQpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICB2YXIgdSA9IGQ7XG4gICAgdmFyIHByZWRlY2Vzc29yO1xuICAgIHdoaWxlICh1KSB7XG4gICAgICBub2Rlcy5wdXNoKHUpO1xuICAgICAgcHJlZGVjZXNzb3IgPSBwcmVkZWNlc3NvcnNbdV07XG4gICAgICB1ID0gcHJlZGVjZXNzb3JzW3VdO1xuICAgIH1cbiAgICBub2Rlcy5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9LFxuXG4gIGZpbmRfcGF0aDogZnVuY3Rpb24oZ3JhcGgsIHMsIGQpIHtcbiAgICB2YXIgcHJlZGVjZXNzb3JzID0gZGlqa3N0cmEuc2luZ2xlX3NvdXJjZV9zaG9ydGVzdF9wYXRocyhncmFwaCwgcywgZCk7XG4gICAgcmV0dXJuIGRpamtzdHJhLmV4dHJhY3Rfc2hvcnRlc3RfcGF0aF9mcm9tX3ByZWRlY2Vzc29yX2xpc3QoXG4gICAgICBwcmVkZWNlc3NvcnMsIGQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIHZlcnkgbmFpdmUgcHJpb3JpdHkgcXVldWUgaW1wbGVtZW50YXRpb24uXG4gICAqL1xuICBQcmlvcml0eVF1ZXVlOiB7XG4gICAgbWFrZTogZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgIHZhciBUID0gZGlqa3N0cmEuUHJpb3JpdHlRdWV1ZSxcbiAgICAgICAgICB0ID0ge30sXG4gICAgICAgICAga2V5O1xuICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICBmb3IgKGtleSBpbiBUKSB7XG4gICAgICAgIGlmIChULmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0W2tleV0gPSBUW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHQucXVldWUgPSBbXTtcbiAgICAgIHQuc29ydGVyID0gb3B0cy5zb3J0ZXIgfHwgVC5kZWZhdWx0X3NvcnRlcjtcbiAgICAgIHJldHVybiB0O1xuICAgIH0sXG5cbiAgICBkZWZhdWx0X3NvcnRlcjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLmNvc3QgLSBiLmNvc3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBpdGVtIHRvIHRoZSBxdWV1ZSBhbmQgZW5zdXJlIHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnRcbiAgICAgKiBpcyBhdCB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlLlxuICAgICAqL1xuICAgIHB1c2g6IGZ1bmN0aW9uICh2YWx1ZSwgY29zdCkge1xuICAgICAgdmFyIGl0ZW0gPSB7dmFsdWU6IHZhbHVlLCBjb3N0OiBjb3N0fTtcbiAgICAgIHRoaXMucXVldWUucHVzaChpdGVtKTtcbiAgICAgIHRoaXMucXVldWUuc29ydCh0aGlzLnNvcnRlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50IGluIHRoZSBxdWV1ZS5cbiAgICAgKi9cbiAgICBwb3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgfSxcblxuICAgIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG59O1xuXG5cbi8vIG5vZGUuanMgbW9kdWxlIGV4cG9ydHNcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGRpamtzdHJhO1xufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiB2KG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIGgobixsLHUpe3ZhciBpLHQ9YXJndW1lbnRzLHI9e307Zm9yKGkgaW4gbClcImtleVwiIT09aSYmXCJyZWZcIiE9PWkmJihyW2ldPWxbaV0pO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mylmb3IodT1bdV0saT0zO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspdS5wdXNoKHRbaV0pO2lmKG51bGwhPXUmJihyLmNoaWxkcmVuPXUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm51bGwhPW4uZGVmYXVsdFByb3BzKWZvcihpIGluIG4uZGVmYXVsdFByb3BzKXZvaWQgMD09PXJbaV0mJihyW2ldPW4uZGVmYXVsdFByb3BzW2ldKTtyZXR1cm4gcChuLHIsbCYmbC5rZXksbCYmbC5yZWYsbnVsbCl9ZnVuY3Rpb24gcChsLHUsaSx0LHIpe3ZhciBvPXt0eXBlOmwscHJvcHM6dSxrZXk6aSxyZWY6dCxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpyfTtyZXR1cm4gbnVsbD09ciYmKG8uX192PW8pLG4udm5vZGUmJm4udm5vZGUobyksb31mdW5jdGlvbiB5KCl7cmV0dXJue319ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBtKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIHcobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP3cobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/dyhuKTpudWxsfWZ1bmN0aW9uIGsobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBrKG4pfX1mdW5jdGlvbiBnKGwpeyghbC5fX2QmJihsLl9fZD0hMCkmJnUucHVzaChsKSYmIWkrK3x8ciE9PW4uZGVib3VuY2VSZW5kZXJpbmcpJiYoKHI9bi5kZWJvdW5jZVJlbmRlcmluZyl8fHQpKF8pfWZ1bmN0aW9uIF8oKXtmb3IodmFyIG47aT11Lmxlbmd0aDspbj11LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHU9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LHIsbyxmO24uX19kJiYobz0ocj0obD1uKS5fX3YpLl9fZSwoZj1sLl9fUCkmJih1PVtdLChpPWEoe30scikpLl9fdj1pLHQ9QShmLHIsaSxsLl9fbix2b2lkIDAhPT1mLm93bmVyU1ZHRWxlbWVudCxudWxsLHUsbnVsbD09bz93KHIpOm8pLFQodSxyKSx0IT1vJiZrKHIpKSl9KX1mdW5jdGlvbiBiKG4sbCx1LGksdCxyLG8sZixzKXt2YXIgYSxoLHAseSxkLG0sayxnPXUmJnUuX19rfHxjLF89Zy5sZW5ndGg7aWYoZj09ZSYmKGY9bnVsbCE9cj9yWzBdOl8/dyh1LDApOm51bGwpLGE9MCxsLl9faz14KGwuX19rLGZ1bmN0aW9uKHUpe2lmKG51bGwhPXUpe2lmKHUuX189bCx1Ll9fYj1sLl9fYisxLG51bGw9PT0ocD1nW2FdKXx8cCYmdS5rZXk9PXAua2V5JiZ1LnR5cGU9PT1wLnR5cGUpZ1thXT12b2lkIDA7ZWxzZSBmb3IoaD0wO2g8XztoKyspe2lmKChwPWdbaF0pJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSl7Z1toXT12b2lkIDA7YnJlYWt9cD1udWxsfWlmKHk9QShuLHUscD1wfHxlLGksdCxyLG8sZixzKSwoaD11LnJlZikmJnAucmVmIT1oJiYoa3x8KGs9W10pLHAucmVmJiZrLnB1c2gocC5yZWYsbnVsbCx1KSxrLnB1c2goaCx1Ll9fY3x8eSx1KSksbnVsbCE9eSl7dmFyIGM7aWYobnVsbD09bSYmKG09eSksdm9pZCAwIT09dS5fX2QpYz11Ll9fZCx1Ll9fZD12b2lkIDA7ZWxzZSBpZihyPT1wfHx5IT1mfHxudWxsPT15LnBhcmVudE5vZGUpe246aWYobnVsbD09Znx8Zi5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHkpLGM9bnVsbDtlbHNle2ZvcihkPWYsaD0wOyhkPWQubmV4dFNpYmxpbmcpJiZoPF87aCs9MilpZihkPT15KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUoeSxmKSxjPWZ9XCJvcHRpb25cIj09bC50eXBlJiYobi52YWx1ZT1cIlwiKX1mPXZvaWQgMCE9PWM/Yzp5Lm5leHRTaWJsaW5nLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZSYmKGwuX19kPWYpfWVsc2UgZiYmcC5fX2U9PWYmJmYucGFyZW50Tm9kZSE9biYmKGY9dyhwKSl9cmV0dXJuIGErKyx1fSksbC5fX2U9bSxudWxsIT1yJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsLnR5cGUpZm9yKGE9ci5sZW5ndGg7YS0tOyludWxsIT1yW2FdJiZ2KHJbYV0pO2ZvcihhPV87YS0tOyludWxsIT1nW2FdJiZEKGdbYV0sZ1thXSk7aWYoaylmb3IoYT0wO2E8ay5sZW5ndGg7YSsrKWooa1thXSxrWysrYV0sa1srK2FdKX1mdW5jdGlvbiB4KG4sbCx1KXtpZihudWxsPT11JiYodT1bXSksbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBuKWwmJnUucHVzaChsKG51bGwpKTtlbHNlIGlmKEFycmF5LmlzQXJyYXkobikpZm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspeChuW2ldLGwsdSk7ZWxzZSB1LnB1c2gobD9sKFwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj9wKG51bGwsbixudWxsLG51bGwsbik6bnVsbCE9bi5fX2V8fG51bGwhPW4uX19jP3Aobi50eXBlLG4ucHJvcHMsbi5rZXksbnVsbCxuLl9fdik6bik6bik7cmV0dXJuIHV9ZnVuY3Rpb24gUChuLGwsdSxpLHQpe3ZhciByO2ZvcihyIGluIHUpXCJjaGlsZHJlblwiPT09cnx8XCJrZXlcIj09PXJ8fHIgaW4gbHx8TihuLHIsbnVsbCx1W3JdLGkpO2ZvcihyIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtyXXx8XCJjaGlsZHJlblwiPT09cnx8XCJrZXlcIj09PXJ8fFwidmFsdWVcIj09PXJ8fFwiY2hlY2tlZFwiPT09cnx8dVtyXT09PWxbcl18fE4obixyLGxbcl0sdVtyXSxpKX1mdW5jdGlvbiBDKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09XCJudW1iZXJcIj09dHlwZW9mIHUmJiExPT09cy50ZXN0KGwpP3UrXCJweFwiOm51bGw9PXU/XCJcIjp1fWZ1bmN0aW9uIE4obixsLHUsaSx0KXt2YXIgcixvLGYsZSxjO2lmKHQ/XCJjbGFzc05hbWVcIj09PWwmJihsPVwiY2xhc3NcIik6XCJjbGFzc1wiPT09bCYmKGw9XCJjbGFzc05hbWVcIiksXCJzdHlsZVwiPT09bClpZihyPW4uc3R5bGUsXCJzdHJpbmdcIj09dHlwZW9mIHUpci5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKHIuY3NzVGV4dD1cIlwiLGk9bnVsbCksaSlmb3IoZSBpbiBpKXUmJmUgaW4gdXx8QyhyLGUsXCJcIik7aWYodSlmb3IoYyBpbiB1KWkmJnVbY109PT1pW2NdfHxDKHIsYyx1W2NdKX1lbHNlXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0/KG89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxmPWwudG9Mb3dlckNhc2UoKSxsPShmIGluIG4/ZjpsKS5zbGljZSgyKSx1PyhpfHxuLmFkZEV2ZW50TGlzdGVuZXIobCx6LG8pLChuLmx8fChuLmw9e30pKVtsXT11KTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCx6LG8pKTpcImxpc3RcIiE9PWwmJlwidGFnTmFtZVwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInR5cGVcIiE9PWwmJlwic2l6ZVwiIT09bCYmIXQmJmwgaW4gbj9uW2xdPW51bGw9PXU/XCJcIjp1OlwiZnVuY3Rpb25cIiE9dHlwZW9mIHUmJlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJihsIT09KGw9bC5yZXBsYWNlKC9eeGxpbms6Py8sXCJcIikpP251bGw9PXV8fCExPT09dT9uLnJlbW92ZUF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSk6bi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCksdSk6bnVsbD09dXx8ITE9PT11JiYhL15hci8udGVzdChsKT9uLnJlbW92ZUF0dHJpYnV0ZShsKTpuLnNldEF0dHJpYnV0ZShsLHUpKX1mdW5jdGlvbiB6KGwpe3RoaXMubFtsLnR5cGVdKG4uZXZlbnQ/bi5ldmVudChsKTpsKX1mdW5jdGlvbiBBKGwsdSxpLHQscixvLGYsZSxjKXt2YXIgcyx2LGgscCx5LHcsayxnLF8seCxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsOyhzPW4uX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihnPXUucHJvcHMsXz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP18/Xy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/az0odj11Ll9fYz1pLl9fYykuX189di5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9dj1uZXcgUChnLHgpOih1Ll9fYz12PW5ldyBtKGcseCksdi5jb25zdHJ1Y3Rvcj1QLHYucmVuZGVyPUUpLF8mJl8uc3ViKHYpLHYucHJvcHM9Zyx2LnN0YXRlfHwodi5zdGF0ZT17fSksdi5jb250ZXh0PXgsdi5fX249dCxoPXYuX19kPSEwLHYuX19oPVtdKSxudWxsPT12Ll9fcyYmKHYuX19zPXYuc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYodi5fX3M9PXYuc3RhdGUmJih2Ll9fcz1hKHt9LHYuX19zKSksYSh2Ll9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhnLHYuX19zKSkpLHA9di5wcm9wcyx5PXYuc3RhdGUsaCludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9di5jb21wb25lbnRXaWxsTW91bnQmJnYuY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9di5jb21wb25lbnREaWRNb3VudCYmdi5fX2gucHVzaCh2LmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZnIT09cCYmbnVsbCE9di5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZ2LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoZyx4KSwhdi5fX2UmJm51bGwhPXYuc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PXYuc2hvdWxkQ29tcG9uZW50VXBkYXRlKGcsdi5fX3MseCl8fHUuX192PT09aS5fX3YmJiF2Ll9fKXtmb3Iodi5wcm9wcz1nLHYuc3RhdGU9di5fX3MsdS5fX3YhPT1pLl9fdiYmKHYuX19kPSExKSx2Ll9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHYuX19oLmxlbmd0aCYmZi5wdXNoKHYpLHM9MDtzPHUuX19rLmxlbmd0aDtzKyspdS5fX2tbc10mJih1Ll9fa1tzXS5fXz11KTticmVhayBufW51bGwhPXYuY29tcG9uZW50V2lsbFVwZGF0ZSYmdi5jb21wb25lbnRXaWxsVXBkYXRlKGcsdi5fX3MseCksbnVsbCE9di5jb21wb25lbnREaWRVcGRhdGUmJnYuX19oLnB1c2goZnVuY3Rpb24oKXt2LmNvbXBvbmVudERpZFVwZGF0ZShwLHksdyl9KX12LmNvbnRleHQ9eCx2LnByb3BzPWcsdi5zdGF0ZT12Ll9fcywocz1uLl9fcikmJnModSksdi5fX2Q9ITEsdi5fX3Y9dSx2Ll9fUD1sLHM9di5yZW5kZXIodi5wcm9wcyx2LnN0YXRlLHYuY29udGV4dCksdS5fX2s9bnVsbCE9cyYmcy50eXBlPT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOkFycmF5LmlzQXJyYXkocyk/czpbc10sbnVsbCE9di5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSx2LmdldENoaWxkQ29udGV4dCgpKSksaHx8bnVsbD09di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KHc9di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwLHkpKSxiKGwsdSxpLHQscixvLGYsZSxjKSx2LmJhc2U9dS5fX2Usdi5fX2gubGVuZ3RoJiZmLnB1c2godiksayYmKHYuX19FPXYuX189bnVsbCksdi5fX2U9ITF9ZWxzZSBudWxsPT1vJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9JChpLl9fZSx1LGksdCxyLG8sZixjKTsocz1uLmRpZmZlZCkmJnModSl9Y2F0Y2gobCl7dS5fX3Y9bnVsbCxuLl9fZShsLHUsaSl9cmV0dXJuIHUuX19lfWZ1bmN0aW9uIFQobCx1KXtuLl9fYyYmbi5fX2ModSxsKSxsLnNvbWUoZnVuY3Rpb24odSl7dHJ5e2w9dS5fX2gsdS5fX2g9W10sbC5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKGwpe24uX19lKGwsdS5fX3YpfX0pfWZ1bmN0aW9uICQobixsLHUsaSx0LHIsbyxmKXt2YXIgcyxhLHYsaCxwLHk9dS5wcm9wcyxkPWwucHJvcHM7aWYodD1cInN2Z1wiPT09bC50eXBlfHx0LG51bGwhPXIpZm9yKHM9MDtzPHIubGVuZ3RoO3MrKylpZihudWxsIT0oYT1yW3NdKSYmKChudWxsPT09bC50eXBlPzM9PT1hLm5vZGVUeXBlOmEubG9jYWxOYW1lPT09bC50eXBlKXx8bj09YSkpe249YSxyW3NdPW51bGw7YnJlYWt9aWYobnVsbD09bil7aWYobnVsbD09PWwudHlwZSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZCk7bj10P2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsbC50eXBlKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGwudHlwZSxkLmlzJiZ7aXM6ZC5pc30pLHI9bnVsbCxmPSExfWlmKG51bGw9PT1sLnR5cGUpeSE9PWQmJm4uZGF0YSE9ZCYmKG4uZGF0YT1kKTtlbHNle2lmKG51bGwhPXImJihyPWMuc2xpY2UuY2FsbChuLmNoaWxkTm9kZXMpKSx2PSh5PXUucHJvcHN8fGUpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGg9ZC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhZil7aWYoeT09PWUpZm9yKHk9e30scD0wO3A8bi5hdHRyaWJ1dGVzLmxlbmd0aDtwKyspeVtuLmF0dHJpYnV0ZXNbcF0ubmFtZV09bi5hdHRyaWJ1dGVzW3BdLnZhbHVlOyhofHx2KSYmKGgmJnYmJmguX19odG1sPT12Ll9faHRtbHx8KG4uaW5uZXJIVE1MPWgmJmguX19odG1sfHxcIlwiKSl9UChuLGQseSx0LGYpLGg/bC5fX2s9W106KGwuX19rPWwucHJvcHMuY2hpbGRyZW4sYihuLGwsdSxpLFwiZm9yZWlnbk9iamVjdFwiIT09bC50eXBlJiZ0LHIsbyxlLGYpKSxmfHwoXCJ2YWx1ZVwiaW4gZCYmdm9pZCAwIT09KHM9ZC52YWx1ZSkmJnMhPT1uLnZhbHVlJiZOKG4sXCJ2YWx1ZVwiLHMseS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBkJiZ2b2lkIDAhPT0ocz1kLmNoZWNrZWQpJiZzIT09bi5jaGVja2VkJiZOKG4sXCJjaGVja2VkXCIscyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbn1mdW5jdGlvbiBqKGwsdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgbD9sKHUpOmwuY3VycmVudD11fWNhdGNoKGwpe24uX19lKGwsaSl9fWZ1bmN0aW9uIEQobCx1LGkpe3ZhciB0LHIsbztpZihuLnVubW91bnQmJm4udW5tb3VudChsKSwodD1sLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PWwuX19lfHxqKHQsbnVsbCx1KSksaXx8XCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlfHwoaT1udWxsIT0ocj1sLl9fZSkpLGwuX19lPWwuX19kPXZvaWQgMCxudWxsIT0odD1sLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChsKXtuLl9fZShsLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bC5fX2spZm9yKG89MDtvPHQubGVuZ3RoO28rKyl0W29dJiZEKHRbb10sdSxpKTtudWxsIT1yJiZ2KHIpfWZ1bmN0aW9uIEUobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gSChsLHUsaSl7dmFyIHQscixmO24uX18mJm4uX18obCx1KSxyPSh0PWk9PT1vKT9udWxsOmkmJmkuX19rfHx1Ll9fayxsPWgoZCxudWxsLFtsXSksZj1bXSxBKHUsKHQ/dTppfHx1KS5fX2s9bCxyfHxlLGUsdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsaSYmIXQ/W2ldOnI/bnVsbDpjLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKSxmLGl8fGUsdCksVChmLGwpfWZ1bmN0aW9uIEkobixsKXtIKG4sbCxvKX1mdW5jdGlvbiBMKG4sbCl7dmFyIHUsaTtmb3IoaSBpbiBsPWEoYSh7fSxuLnByb3BzKSxsKSxhcmd1bWVudHMubGVuZ3RoPjImJihsLmNoaWxkcmVuPWMuc2xpY2UuY2FsbChhcmd1bWVudHMsMikpLHU9e30sbClcImtleVwiIT09aSYmXCJyZWZcIiE9PWkmJih1W2ldPWxbaV0pO3JldHVybiBwKG4udHlwZSx1LGwua2V5fHxuLmtleSxsLnJlZnx8bi5yZWYsbnVsbCl9ZnVuY3Rpb24gTShuKXt2YXIgbD17fSx1PXtfX2M6XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIGksdD10aGlzO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KGk9W10sdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbFt1Ll9fY109dCxsfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0LnByb3BzLnZhbHVlIT09bi52YWx1ZSYmaS5zb21lKGZ1bmN0aW9uKGwpe2wuY29udGV4dD1uLnZhbHVlLGcobCl9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7aS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe2kuc3BsaWNlKGkuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LkNvbnN1bWVyLmNvbnRleHRUeXBlPXUsdS5Qcm92aWRlci5fXz11LHV9bj17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGk7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZih1LmNvbnN0cnVjdG9yJiZudWxsIT11LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKGk9ITAsdS5zZXRTdGF0ZSh1LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJihpPSEwLHUuY29tcG9uZW50RGlkQ2F0Y2gobikpLGkpcmV0dXJuIGcodS5fX0U9dSl9Y2F0Y2gobCl7bj1sfXRocm93IG59fSxsPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxtLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9dGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bih1LHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLGcodGhpcykpfSxtLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksZyh0aGlzKSl9LG0ucHJvdG90eXBlLnJlbmRlcj1kLHU9W10saT0wLHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsbz1lLGY9MDtleHBvcnR7SCBhcyByZW5kZXIsSSBhcyBoeWRyYXRlLGggYXMgY3JlYXRlRWxlbWVudCxoLGQgYXMgRnJhZ21lbnQseSBhcyBjcmVhdGVSZWYsbCBhcyBpc1ZhbGlkRWxlbWVudCxtIGFzIENvbXBvbmVudCxMIGFzIGNsb25lRWxlbWVudCxNIGFzIGNyZWF0ZUNvbnRleHQseCBhcyB0b0NoaWxkQXJyYXksRCBhcyBfdW5tb3VudCxuIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLGk9MCxvPVtdLGM9bi5fX3IsZj1uLmRpZmZlZCxlPW4uX19jLGE9bi51bm1vdW50O2Z1bmN0aW9uIHYodCxyKXtuLl9faCYmbi5fX2godSx0LGl8fHIpLGk9MDt2YXIgbz11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49by5fXy5sZW5ndGgmJm8uX18ucHVzaCh7fSksby5fX1t0XX1mdW5jdGlvbiBtKG4pe3JldHVybiBpPTEscChFLG4pfWZ1bmN0aW9uIHAobixyLGkpe3ZhciBvPXYodCsrLDIpO3JldHVybiBvLl9fY3x8KG8uX19jPXUsby5fXz1baT9pKHIpOkUodm9pZCAwLHIpLGZ1bmN0aW9uKHQpe3ZhciB1PW4oby5fX1swXSx0KTtvLl9fWzBdIT09dSYmKG8uX19bMF09dSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0pLG8uX199ZnVuY3Rpb24gbChyLGkpe3ZhciBvPXYodCsrLDMpOyFuLl9fcyYmeChvLl9fSCxpKSYmKG8uX189cixvLl9fSD1pLHUuX19ILl9faC5wdXNoKG8pKX1mdW5jdGlvbiB5KHIsaSl7dmFyIG89dih0KyssNCk7IW4uX19zJiZ4KG8uX19ILGkpJiYoby5fXz1yLG8uX19IPWksdS5fX2gucHVzaChvKSl9ZnVuY3Rpb24gZChuKXtyZXR1cm4gaT01LGgoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIHMobix0LHUpe2k9Nix5KGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQoKSk6biYmKG4uY3VycmVudD10KCkpfSxudWxsPT11P3U6dS5jb25jYXQobikpfWZ1bmN0aW9uIGgobix1KXt2YXIgcj12KHQrKyw3KTtyZXR1cm4geChyLl9fSCx1KT8oci5fX0g9dSxyLl9faD1uLHIuX189bigpKTpyLl9ffWZ1bmN0aW9uIFQobix0KXtyZXR1cm4gaT04LGgoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gdyhuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLGk9dih0KyssOSk7cmV0dXJuIGkuX19jPW4scj8obnVsbD09aS5fXyYmKGkuX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gQSh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXYodCsrLDEwKSxpPW0oKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksaVsxXShuKX0pLFtpWzBdLGZ1bmN0aW9uKCl7aVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gXygpe28uc29tZShmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2gocSksdC5fX0guX19oPVtdfWNhdGNoKHUpe3JldHVybiB0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdiksITB9fSksbz1bXX1mdW5jdGlvbiBnKG4pe24udCYmbi50KCl9ZnVuY3Rpb24gcShuKXt2YXIgdD1uLl9fKCk7XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmKG4udD10KX1mdW5jdGlvbiB4KG4sdCl7cmV0dXJuIW58fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIEUobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1uLl9fcj1mdW5jdGlvbihuKXtjJiZjKG4pLHQ9MCwodT1uLl9fYykuX19IJiYodS5fX0guX19oLmZvckVhY2goZyksdS5fX0guX19oLmZvckVhY2gocSksdS5fX0guX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZiYmZih0KTt2YXIgdT10Ll9fYztpZih1KXt2YXIgaT11Ll9fSDtpJiZpLl9faC5sZW5ndGgmJigxIT09by5wdXNoKHUpJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoXykpfX0sbi5fX2M9ZnVuY3Rpb24odCx1KXt1LnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goZyksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxxKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSxlJiZlKHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXthJiZhKHQpO3ZhciB1PXQuX19jO2lmKHUpe3ZhciByPXUuX19IO2lmKHIpdHJ5e3IuX18uZm9yRWFjaChmdW5jdGlvbihuKXtyZXR1cm4gbi50JiZuLnQoKX0pfWNhdGNoKHQpe24uX19lKHQsdS5fX3YpfX19O2V4cG9ydHttIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcixsIGFzIHVzZUVmZmVjdCx5IGFzIHVzZUxheW91dEVmZmVjdCxkIGFzIHVzZVJlZixzIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsaCBhcyB1c2VNZW1vLFQgYXMgdXNlQ2FsbGJhY2ssdyBhcyB1c2VDb250ZXh0LEEgYXMgdXNlRGVidWdWYWx1ZSxGIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyBvLHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgdSx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgZix1c2VDb250ZXh0IGFzIGMsdXNlRGVidWdWYWx1ZSBhcyBhfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGwsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgdix0b0NoaWxkQXJyYXkgYXMgaCxoeWRyYXRlIGFzIHAscmVuZGVyIGFzIGQsX3VubW91bnQgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIGcsRnJhZ21lbnQgYXMgeH1mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gRShuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiB3KG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfXZhciBDPWZ1bmN0aW9uKG4pe3ZhciB0LGU7ZnVuY3Rpb24gcih0KXt2YXIgZTtyZXR1cm4oZT1uLmNhbGwodGhpcyx0KXx8dGhpcykuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsZX1yZXR1cm4gZT1uLCh0PXIpLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUucHJvdG90eXBlKSx0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj10LHQuX19wcm90b19fPWUsci5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIHcodGhpcy5wcm9wcyxuKXx8dyh0aGlzLnN0YXRlLHQpfSxyfShsKTtmdW5jdGlvbiBfKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6dyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLEUoe30sdCkpfXJldHVybiByLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIudD0hMCxyfXZhciBBPXYuX19iO2Z1bmN0aW9uIFMobil7ZnVuY3Rpb24gdCh0KXt2YXIgZT1FKHt9LHQpO3JldHVybiBkZWxldGUgZS5yZWYsbihlLHQucmVmKX1yZXR1cm4gdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10LnQ9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12Ll9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS50JiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLEEmJkEobil9O3ZhciBrPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4/aChuKS5yZWR1Y2UoZnVuY3Rpb24obixlLHIpe3JldHVybiBuLmNvbmNhdCh0KGUscikpfSxbXSk6bnVsbH0sUj17bWFwOmssZm9yRWFjaDprLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2gobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7aWYoMSE9PShuPWgobikpLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZHJlbi5vbmx5KCkgZXhwZWN0cyBvbmx5IG9uZSBjaGlsZC5cIik7cmV0dXJuIG5bMF19LHRvQXJyYXk6aH0sRj12Ll9fZTtmdW5jdGlvbiBOKG4pe3JldHVybiBuJiYoKG49RSh7fSxuKSkuX19jPW51bGwsbi5fX2s9bi5fX2smJm4uX19rLm1hcChOKSksbn1mdW5jdGlvbiBVKCl7dGhpcy5fX3U9MCx0aGlzLm89bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIE0obil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQudSYmdC51KG4pfWZ1bmN0aW9uIEwobil7dmFyIHQsZSxyO2Z1bmN0aW9uIG8obyl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLG8pfXJldHVybiBvLmRpc3BsYXlOYW1lPVwiTGF6eVwiLG8udD0hMCxvfWZ1bmN0aW9uIE8oKXt0aGlzLmk9bnVsbCx0aGlzLmw9bnVsbH12Ll9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcixvPXQ7bz1vLl9fOylpZigocj1vLl9fYykmJnIuX19jKXJldHVybiByLl9fYyhuLHQuX19jKTtGKG4sdCxlKX0sKFUucHJvdG90eXBlPW5ldyBsKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10aGlzO251bGw9PWUubyYmKGUubz1bXSksZS5vLnB1c2godCk7dmFyIHI9TShlLl9fdiksbz0hMSx1PWZ1bmN0aW9uKCl7b3x8KG89ITAscj9yKGkpOmkoKSl9O3QuX19jPXQuY29tcG9uZW50V2lsbFVubW91bnQsdC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3UoKSx0Ll9fYyYmdC5fX2MoKX07dmFyIGk9ZnVuY3Rpb24oKXt2YXIgbjtpZighLS1lLl9fdSlmb3IoZS5fX3YuX19rWzBdPWUuc3RhdGUudSxlLnNldFN0YXRlKHt1OmUuX19iPW51bGx9KTtuPWUuby5wb3AoKTspbi5mb3JjZVVwZGF0ZSgpfTtlLl9fdSsrfHxlLnNldFN0YXRlKHt1OmUuX19iPWUuX192Ll9fa1swXX0pLG4udGhlbih1LHUpfSxVLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtyZXR1cm4gdGhpcy5fX2ImJih0aGlzLl9fdi5fX2tbMF09Tih0aGlzLl9fYiksdGhpcy5fX2I9bnVsbCksW3MobCxudWxsLHQudT9udWxsOm4uY2hpbGRyZW4pLHQudSYmbi5mYWxsYmFja119O3ZhciBQPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLmwuZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLmwuc2l6ZSkpZm9yKGU9bi5pO2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi5pPWU9ZVsyXX19OyhPLnByb3RvdHlwZT1uZXcgbCkudT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9TSh0Ll9fdikscj10LmwuZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24obyl7dmFyIHU9ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2gobyksUCh0LG4scikpOm8oKX07ZT9lKHUpOnUoKX19LE8ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLmk9bnVsbCx0aGlzLmw9bmV3IE1hcDt2YXIgdD1oKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5sLnNldCh0W2VdLHRoaXMuaT1bMSwwLHRoaXMuaV0pO3JldHVybiBuLmNoaWxkcmVufSxPLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9Ty5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO24ubC5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7UChuLGUsdCl9KX07dmFyIFc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7fXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnByb3BzLmNvbnRleHR9LHQucmVuZGVyPWZ1bmN0aW9uKG4pe3JldHVybiBuLmNoaWxkcmVufSxufSgpO2Z1bmN0aW9uIGoobil7dmFyIHQ9dGhpcyxlPW4uY29udGFpbmVyLHI9cyhXLHtjb250ZXh0OnQuY29udGV4dH0sbi52bm9kZSk7cmV0dXJuIHQucyYmdC5zIT09ZSYmKHQudi5wYXJlbnROb2RlJiZ0LnMucmVtb3ZlQ2hpbGQodC52KSxtKHQuaCksdC5wPSExKSxuLnZub2RlP3QucD8oZS5fX2s9dC5fX2ssZChyLGUpLHQuX19rPWUuX19rKToodC52PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLHAoXCJcIixlKSxlLmFwcGVuZENoaWxkKHQudiksdC5wPSEwLHQucz1lLGQocixlLHQudiksdC5fX2s9dC52Ll9fayk6dC5wJiYodC52LnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LnYpLG0odC5oKSksdC5oPXIsdC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Qudi5wYXJlbnROb2RlJiZ0LnMucmVtb3ZlQ2hpbGQodC52KSxtKHQuaCl9LG51bGx9ZnVuY3Rpb24geihuLHQpe3JldHVybiBzKGose3Zub2RlOm4sY29udGFpbmVyOnR9KX12YXIgRD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vO2wucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307dmFyIEg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzO2Z1bmN0aW9uIFQobix0LGUpe2lmKG51bGw9PXQuX19rKWZvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7cmV0dXJuIGQobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIFYobix0LGUpe3JldHVybiBwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH12YXIgWj12LmV2ZW50O2Z1bmN0aW9uIEkobix0KXtuW1wiVU5TQUZFX1wiK3RdJiYhblt0XSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sdCx7Y29uZmlndXJhYmxlOiExLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK3RdfSxzZXQ6ZnVuY3Rpb24obil7dGhpc1tcIlVOU0FGRV9cIit0XT1ufX0pfXYuZXZlbnQ9ZnVuY3Rpb24obil7WiYmKG49WihuKSksbi5wZXJzaXN0PWZ1bmN0aW9uKCl7fTt2YXIgdD0hMSxlPSExLHI9bi5zdG9wUHJvcGFnYXRpb247bi5zdG9wUHJvcGFnYXRpb249ZnVuY3Rpb24oKXtyLmNhbGwobiksdD0hMH07dmFyIG89bi5wcmV2ZW50RGVmYXVsdDtyZXR1cm4gbi5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe28uY2FsbChuKSxlPSEwfSxuLmlzUHJvcGFnYXRpb25TdG9wcGVkPWZ1bmN0aW9uKCl7cmV0dXJuIHR9LG4uaXNEZWZhdWx0UHJldmVudGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGV9LG4ubmF0aXZlRXZlbnQ9bn07dmFyICQ9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LHE9di52bm9kZTt2LnZub2RlPWZ1bmN0aW9uKG4pe24uJCR0eXBlb2Y9SDt2YXIgdD1uLnR5cGUsZT1uLnByb3BzO2lmKHQpe2lmKGUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoJC5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoZS5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJjbGFzc05hbWVcIiwkKSksXCJmdW5jdGlvblwiIT10eXBlb2YgdCl7dmFyIHIsbyx1O2Zvcih1IGluIGUuZGVmYXVsdFZhbHVlJiZ2b2lkIDAhPT1lLnZhbHVlJiYoZS52YWx1ZXx8MD09PWUudmFsdWV8fChlLnZhbHVlPWUuZGVmYXVsdFZhbHVlKSxkZWxldGUgZS5kZWZhdWx0VmFsdWUpLEFycmF5LmlzQXJyYXkoZS52YWx1ZSkmJmUubXVsdGlwbGUmJlwic2VsZWN0XCI9PT10JiYoaChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pey0xIT1lLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSkmJihuLnByb3BzLnNlbGVjdGVkPSEwKX0pLGRlbGV0ZSBlLnZhbHVlKSxlKWlmKHI9RC50ZXN0KHUpKWJyZWFrO2lmKHIpZm9yKHUgaW4gbz1uLnByb3BzPXt9LGUpb1tELnRlc3QodSk/dS5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTp1XT1lW3VdfSFmdW5jdGlvbih0KXt2YXIgZT1uLnR5cGUscj1uLnByb3BzO2lmKHImJlwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgbz17fTtmb3IodmFyIHUgaW4gcikvXm9uKEFuaXxUcmF8VG91KS8udGVzdCh1KSYmKHJbdS50b0xvd2VyQ2FzZSgpXT1yW3VdLGRlbGV0ZSByW3VdKSxvW3UudG9Mb3dlckNhc2UoKV09dTtpZihvLm9uZG91YmxlY2xpY2smJihyLm9uZGJsY2xpY2s9cltvLm9uZG91YmxlY2xpY2tdLGRlbGV0ZSByW28ub25kb3VibGVjbGlja10pLG8ub25iZWZvcmVpbnB1dCYmKHIub25iZWZvcmVpbnB1dD1yW28ub25iZWZvcmVpbnB1dF0sZGVsZXRlIHJbby5vbmJlZm9yZWlucHV0XSksby5vbmNoYW5nZSYmKFwidGV4dGFyZWFcIj09PWV8fFwiaW5wdXRcIj09PWUudG9Mb3dlckNhc2UoKSYmIS9eZmlsfGNoZXxyYS9pLnRlc3Qoci50eXBlKSkpe3ZhciBpPW8ub25pbnB1dHx8XCJvbmlucHV0XCI7cltpXXx8KHJbaV09cltvLm9uY2hhbmdlXSxkZWxldGUgcltvLm9uY2hhbmdlXSl9fX0oKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYhdC5tJiZ0LnByb3RvdHlwZSYmKEkodC5wcm90b3R5cGUsXCJjb21wb25lbnRXaWxsTW91bnRcIiksSSh0LnByb3RvdHlwZSxcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIiksSSh0LnByb3RvdHlwZSxcImNvbXBvbmVudFdpbGxVcGRhdGVcIiksdC5tPSEwKX1xJiZxKG4pfTt2YXIgQj1cIjE2LjguMFwiO2Z1bmN0aW9uIEcobil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIEoobil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09SH1mdW5jdGlvbiBLKG4pe3JldHVybiBKKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gUShuKXtyZXR1cm4hIW4uX19rJiYoZChudWxsLG4pLCEwKX1mdW5jdGlvbiBYKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIFk9ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX07ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOm8sdXNlSW1wZXJhdGl2ZUhhbmRsZTp1LHVzZU1lbW86aSx1c2VDYWxsYmFjazpmLHVzZUNvbnRleHQ6Yyx1c2VEZWJ1Z1ZhbHVlOmEsdmVyc2lvbjpcIjE2LjguMFwiLENoaWxkcmVuOlIscmVuZGVyOlQsaHlkcmF0ZTpULHVubW91bnRDb21wb25lbnRBdE5vZGU6USxjcmVhdGVQb3J0YWw6eixjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpnLGNyZWF0ZUZhY3Rvcnk6RyxjbG9uZUVsZW1lbnQ6SyxjcmVhdGVSZWY6YixGcmFnbWVudDp4LGlzVmFsaWRFbGVtZW50OkosZmluZERPTU5vZGU6WCxDb21wb25lbnQ6bCxQdXJlQ29tcG9uZW50OkMsbWVtbzpfLGZvcndhcmRSZWY6Uyx1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpZLFN1c3BlbnNlOlUsU3VzcGVuc2VMaXN0Ok8sbGF6eTpMfTtleHBvcnR7QiBhcyB2ZXJzaW9uLFIgYXMgQ2hpbGRyZW4sVCBhcyByZW5kZXIsViBhcyBoeWRyYXRlLFEgYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSx6IGFzIGNyZWF0ZVBvcnRhbCxHIGFzIGNyZWF0ZUZhY3RvcnksSyBhcyBjbG9uZUVsZW1lbnQsSiBhcyBpc1ZhbGlkRWxlbWVudCxYIGFzIGZpbmRET01Ob2RlLEMgYXMgUHVyZUNvbXBvbmVudCxfIGFzIG1lbW8sUyBhcyBmb3J3YXJkUmVmLFkgYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsVSBhcyBTdXNwZW5zZSxPIGFzIFN1c3BlbnNlTGlzdCxMIGFzIGxhenl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsIlxudmFyIGNhblByb21pc2UgPSByZXF1aXJlKCcuL2Nhbi1wcm9taXNlJylcblxudmFyIFFSQ29kZSA9IHJlcXVpcmUoJy4vY29yZS9xcmNvZGUnKVxudmFyIENhbnZhc1JlbmRlcmVyID0gcmVxdWlyZSgnLi9yZW5kZXJlci9jYW52YXMnKVxudmFyIFN2Z1JlbmRlcmVyID0gcmVxdWlyZSgnLi9yZW5kZXJlci9zdmctdGFnLmpzJylcblxuZnVuY3Rpb24gcmVuZGVyQ2FudmFzIChyZW5kZXJGdW5jLCBjYW52YXMsIHRleHQsIG9wdHMsIGNiKSB7XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gIHZhciBhcmdzTnVtID0gYXJncy5sZW5ndGhcbiAgdmFyIGlzTGFzdEFyZ0NiID0gdHlwZW9mIGFyZ3NbYXJnc051bSAtIDFdID09PSAnZnVuY3Rpb24nXG5cbiAgaWYgKCFpc0xhc3RBcmdDYiAmJiAhY2FuUHJvbWlzZSgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayByZXF1aXJlZCBhcyBsYXN0IGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmIChpc0xhc3RBcmdDYikge1xuICAgIGlmIChhcmdzTnVtIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb28gZmV3IGFyZ3VtZW50cyBwcm92aWRlZCcpXG4gICAgfVxuXG4gICAgaWYgKGFyZ3NOdW0gPT09IDIpIHtcbiAgICAgIGNiID0gdGV4dFxuICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgY2FudmFzID0gb3B0cyA9IHVuZGVmaW5lZFxuICAgIH0gZWxzZSBpZiAoYXJnc051bSA9PT0gMykge1xuICAgICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0ICYmIHR5cGVvZiBjYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY2IgPSBvcHRzXG4gICAgICAgIG9wdHMgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiID0gb3B0c1xuICAgICAgICBvcHRzID0gdGV4dFxuICAgICAgICB0ZXh0ID0gY2FudmFzXG4gICAgICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYXJnc051bSA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVG9vIGZldyBhcmd1bWVudHMgcHJvdmlkZWQnKVxuICAgIH1cblxuICAgIGlmIChhcmdzTnVtID09PSAxKSB7XG4gICAgICB0ZXh0ID0gY2FudmFzXG4gICAgICBjYW52YXMgPSBvcHRzID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmIChhcmdzTnVtID09PSAyICYmICFjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgb3B0cyA9IHRleHRcbiAgICAgIHRleHQgPSBjYW52YXNcbiAgICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgZGF0YSA9IFFSQ29kZS5jcmVhdGUodGV4dCwgb3B0cylcbiAgICAgICAgcmVzb2x2ZShyZW5kZXJGdW5jKGRhdGEsIGNhbnZhcywgb3B0cykpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB0cnkge1xuICAgIHZhciBkYXRhID0gUVJDb2RlLmNyZWF0ZSh0ZXh0LCBvcHRzKVxuICAgIGNiKG51bGwsIHJlbmRlckZ1bmMoZGF0YSwgY2FudmFzLCBvcHRzKSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNiKGUpXG4gIH1cbn1cblxuZXhwb3J0cy5jcmVhdGUgPSBRUkNvZGUuY3JlYXRlXG5leHBvcnRzLnRvQ2FudmFzID0gcmVuZGVyQ2FudmFzLmJpbmQobnVsbCwgQ2FudmFzUmVuZGVyZXIucmVuZGVyKVxuZXhwb3J0cy50b0RhdGFVUkwgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBDYW52YXNSZW5kZXJlci5yZW5kZXJUb0RhdGFVUkwpXG5cbi8vIG9ubHkgc3ZnIGZvciBub3cuXG5leHBvcnRzLnRvU3RyaW5nID0gcmVuZGVyQ2FudmFzLmJpbmQobnVsbCwgZnVuY3Rpb24gKGRhdGEsIF8sIG9wdHMpIHtcbiAgcmV0dXJuIFN2Z1JlbmRlcmVyLnJlbmRlcihkYXRhLCBvcHRzKVxufSlcbiIsIi8vIGNhbi1wcm9taXNlIGhhcyBhIGNyYXNoIGluIHNvbWUgdmVyc2lvbnMgb2YgcmVhY3QgbmF0aXZlIHRoYXQgZG9udCBoYXZlXG4vLyBzdGFuZGFyZCBnbG9iYWwgb2JqZWN0c1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbGRhaXIvbm9kZS1xcmNvZGUvaXNzdWVzLzE1N1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nICYmIFByb21pc2UucHJvdG90eXBlICYmIFByb21pc2UucHJvdG90eXBlLnRoZW5cbn1cbiIsIi8qKlxuICogQWxpZ25tZW50IHBhdHRlcm4gYXJlIGZpeGVkIHJlZmVyZW5jZSBwYXR0ZXJuIGluIGRlZmluZWQgcG9zaXRpb25zXG4gKiBpbiBhIG1hdHJpeCBzeW1ib2xvZ3ksIHdoaWNoIGVuYWJsZXMgdGhlIGRlY29kZSBzb2Z0d2FyZSB0byByZS1zeW5jaHJvbmlzZVxuICogdGhlIGNvb3JkaW5hdGUgbWFwcGluZyBvZiB0aGUgaW1hZ2UgbW9kdWxlcyBpbiB0aGUgZXZlbnQgb2YgbW9kZXJhdGUgYW1vdW50c1xuICogb2YgZGlzdG9ydGlvbiBvZiB0aGUgaW1hZ2UuXG4gKlxuICogQWxpZ25tZW50IHBhdHRlcm5zIGFyZSBwcmVzZW50IG9ubHkgaW4gUVIgQ29kZSBzeW1ib2xzIG9mIHZlcnNpb24gMiBvciBsYXJnZXJcbiAqIGFuZCB0aGVpciBudW1iZXIgZGVwZW5kcyBvbiB0aGUgc3ltYm9sIHZlcnNpb24uXG4gKi9cblxudmFyIGdldFN5bWJvbFNpemUgPSByZXF1aXJlKCcuL3V0aWxzJykuZ2V0U3ltYm9sU2l6ZVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcm93L2NvbHVtbiBjb29yZGluYXRlcyBvZiB0aGUgY2VudGVyIG1vZHVsZSBvZiBlYWNoIGFsaWdubWVudCBwYXR0ZXJuXG4gKiBmb3IgdGhlIHNwZWNpZmllZCBRUiBDb2RlIHZlcnNpb24uXG4gKlxuICogVGhlIGFsaWdubWVudCBwYXR0ZXJucyBhcmUgcG9zaXRpb25lZCBzeW1tZXRyaWNhbGx5IG9uIGVpdGhlciBzaWRlIG9mIHRoZSBkaWFnb25hbFxuICogcnVubmluZyBmcm9tIHRoZSB0b3AgbGVmdCBjb3JuZXIgb2YgdGhlIHN5bWJvbCB0byB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lci5cbiAqXG4gKiBTaW5jZSBwb3NpdGlvbnMgYXJlIHNpbW1ldHJpY2FsIG9ubHkgaGFsZiBvZiB0aGUgY29vcmRpbmF0ZXMgYXJlIHJldHVybmVkLlxuICogRWFjaCBpdGVtIG9mIHRoZSBhcnJheSB3aWxsIHJlcHJlc2VudCBpbiB0dXJuIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGUuXG4gKiBAc2VlIHtAbGluayBnZXRQb3NpdGlvbnN9XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIGNvb3JkaW5hdGVcbiAqL1xuZXhwb3J0cy5nZXRSb3dDb2xDb29yZHMgPSBmdW5jdGlvbiBnZXRSb3dDb2xDb29yZHMgKHZlcnNpb24pIHtcbiAgaWYgKHZlcnNpb24gPT09IDEpIHJldHVybiBbXVxuXG4gIHZhciBwb3NDb3VudCA9IE1hdGguZmxvb3IodmVyc2lvbiAvIDcpICsgMlxuICB2YXIgc2l6ZSA9IGdldFN5bWJvbFNpemUodmVyc2lvbilcbiAgdmFyIGludGVydmFscyA9IHNpemUgPT09IDE0NSA/IDI2IDogTWF0aC5jZWlsKChzaXplIC0gMTMpIC8gKDIgKiBwb3NDb3VudCAtIDIpKSAqIDJcbiAgdmFyIHBvc2l0aW9ucyA9IFtzaXplIC0gN10gLy8gTGFzdCBjb29yZCBpcyBhbHdheXMgKHNpemUgLSA3KVxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgcG9zQ291bnQgLSAxOyBpKyspIHtcbiAgICBwb3NpdGlvbnNbaV0gPSBwb3NpdGlvbnNbaSAtIDFdIC0gaW50ZXJ2YWxzXG4gIH1cblxuICBwb3NpdGlvbnMucHVzaCg2KSAvLyBGaXJzdCBjb29yZCBpcyBhbHdheXMgNlxuXG4gIHJldHVybiBwb3NpdGlvbnMucmV2ZXJzZSgpXG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBwb3NpdGlvbnMgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVybi5cbiAqIEVhY2ggYXJyYXkncyBlbGVtZW50IHJlcHJlc2VudCB0aGUgY2VudGVyIHBvaW50IG9mIHRoZSBwYXR0ZXJuIGFzICh4LCB5KSBjb29yZGluYXRlc1xuICpcbiAqIENvb3JkaW5hdGVzIGFyZSBjYWxjdWxhdGVkIGV4cGFuZGluZyB0aGUgcm93L2NvbHVtbiBjb29yZGluYXRlcyByZXR1cm5lZCBieSB7QGxpbmsgZ2V0Um93Q29sQ29vcmRzfVxuICogYW5kIGZpbHRlcmluZyBvdXQgdGhlIGl0ZW1zIHRoYXQgb3ZlcmxhcHMgd2l0aCBmaW5kZXIgcGF0dGVyblxuICpcbiAqIEBleGFtcGxlXG4gKiBGb3IgYSBWZXJzaW9uIDcgc3ltYm9sIHtAbGluayBnZXRSb3dDb2xDb29yZHN9IHJldHVybnMgdmFsdWVzIDYsIDIyIGFuZCAzOC5cbiAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMsIHRoZXJlZm9yZSwgYXJlIHRvIGJlIGNlbnRlcmVkIG9uIChyb3csIGNvbHVtbilcbiAqIHBvc2l0aW9ucyAoNiwyMiksICgyMiw2KSwgKDIyLDIyKSwgKDIyLDM4KSwgKDM4LDIyKSwgKDM4LDM4KS5cbiAqIE5vdGUgdGhhdCB0aGUgY29vcmRpbmF0ZXMgKDYsNiksICg2LDM4KSwgKDM4LDYpIGFyZSBvY2N1cGllZCBieSBmaW5kZXIgcGF0dGVybnNcbiAqIGFuZCBhcmUgbm90IHRoZXJlZm9yZSB1c2VkIGZvciBhbGlnbm1lbnQgcGF0dGVybnMuXG4gKlxuICogdmFyIHBvcyA9IGdldFBvc2l0aW9ucyg3KVxuICogLy8gW1s2LDIyXSwgWzIyLDZdLCBbMjIsMjJdLCBbMjIsMzhdLCBbMzgsMjJdLCBbMzgsMzhdXVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlc1xuICovXG5leHBvcnRzLmdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uIGdldFBvc2l0aW9ucyAodmVyc2lvbikge1xuICB2YXIgY29vcmRzID0gW11cbiAgdmFyIHBvcyA9IGV4cG9ydHMuZ2V0Um93Q29sQ29vcmRzKHZlcnNpb24pXG4gIHZhciBwb3NMZW5ndGggPSBwb3MubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NMZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9zTGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFNraXAgaWYgcG9zaXRpb24gaXMgb2NjdXBpZWQgYnkgZmluZGVyIHBhdHRlcm5zXG4gICAgICBpZiAoKGkgPT09IDAgJiYgaiA9PT0gMCkgfHwgICAgICAgICAgICAgLy8gdG9wLWxlZnRcbiAgICAgICAgICAoaSA9PT0gMCAmJiBqID09PSBwb3NMZW5ndGggLSAxKSB8fCAvLyBib3R0b20tbGVmdFxuICAgICAgICAgIChpID09PSBwb3NMZW5ndGggLSAxICYmIGogPT09IDApKSB7IC8vIHRvcC1yaWdodFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb29yZHMucHVzaChbcG9zW2ldLCBwb3Nbal1dKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZHNcbn1cbiIsInZhciBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuLyoqXG4gKiBBcnJheSBvZiBjaGFyYWN0ZXJzIGF2YWlsYWJsZSBpbiBhbHBoYW51bWVyaWMgbW9kZVxuICpcbiAqIEFzIHBlciBRUiBDb2RlIHNwZWNpZmljYXRpb24sIHRvIGVhY2ggY2hhcmFjdGVyXG4gKiBpcyBhc3NpZ25lZCBhIHZhbHVlIGZyb20gMCB0byA0NCB3aGljaCBpbiB0aGlzIGNhc2UgY29pbmNpZGVzXG4gKiB3aXRoIHRoZSBhcnJheSBpbmRleFxuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIEFMUEhBX05VTV9DSEFSUyA9IFtcbiAgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLFxuICAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsXG4gICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLCAnWScsICdaJyxcbiAgJyAnLCAnJCcsICclJywgJyonLCAnKycsICctJywgJy4nLCAnLycsICc6J1xuXVxuXG5mdW5jdGlvbiBBbHBoYW51bWVyaWNEYXRhIChkYXRhKSB7XG4gIHRoaXMubW9kZSA9IE1vZGUuQUxQSEFOVU1FUklDXG4gIHRoaXMuZGF0YSA9IGRhdGFcbn1cblxuQWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAobGVuZ3RoKSB7XG4gIHJldHVybiAxMSAqIE1hdGguZmxvb3IobGVuZ3RoIC8gMikgKyA2ICogKGxlbmd0aCAlIDIpXG59XG5cbkFscGhhbnVtZXJpY0RhdGEucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCAoKSB7XG4gIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoXG59XG5cbkFscGhhbnVtZXJpY0RhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKVxufVxuXG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChiaXRCdWZmZXIpIHtcbiAgdmFyIGlcblxuICAvLyBJbnB1dCBkYXRhIGNoYXJhY3RlcnMgYXJlIGRpdmlkZWQgaW50byBncm91cHMgb2YgdHdvIGNoYXJhY3RlcnNcbiAgLy8gYW5kIGVuY29kZWQgYXMgMTEtYml0IGJpbmFyeSBjb2Rlcy5cbiAgZm9yIChpID0gMDsgaSArIDIgPD0gdGhpcy5kYXRhLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgLy8gVGhlIGNoYXJhY3RlciB2YWx1ZSBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIG11bHRpcGxpZWQgYnkgNDVcbiAgICB2YXIgdmFsdWUgPSBBTFBIQV9OVU1fQ0hBUlMuaW5kZXhPZih0aGlzLmRhdGFbaV0pICogNDVcblxuICAgIC8vIFRoZSBjaGFyYWN0ZXIgdmFsdWUgb2YgdGhlIHNlY29uZCBkaWdpdCBpcyBhZGRlZCB0byB0aGUgcHJvZHVjdFxuICAgIHZhbHVlICs9IEFMUEhBX05VTV9DSEFSUy5pbmRleE9mKHRoaXMuZGF0YVtpICsgMV0pXG5cbiAgICAvLyBUaGUgc3VtIGlzIHRoZW4gc3RvcmVkIGFzIDExLWJpdCBiaW5hcnkgbnVtYmVyXG4gICAgYml0QnVmZmVyLnB1dCh2YWx1ZSwgMTEpXG4gIH1cblxuICAvLyBJZiB0aGUgbnVtYmVyIG9mIGlucHV0IGRhdGEgY2hhcmFjdGVycyBpcyBub3QgYSBtdWx0aXBsZSBvZiB0d28sXG4gIC8vIHRoZSBjaGFyYWN0ZXIgdmFsdWUgb2YgdGhlIGZpbmFsIGNoYXJhY3RlciBpcyBlbmNvZGVkIGFzIGEgNi1iaXQgYmluYXJ5IG51bWJlci5cbiAgaWYgKHRoaXMuZGF0YS5sZW5ndGggJSAyKSB7XG4gICAgYml0QnVmZmVyLnB1dChBTFBIQV9OVU1fQ0hBUlMuaW5kZXhPZih0aGlzLmRhdGFbaV0pLCA2KVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWxwaGFudW1lcmljRGF0YVxuIiwiZnVuY3Rpb24gQml0QnVmZmVyICgpIHtcbiAgdGhpcy5idWZmZXIgPSBbXVxuICB0aGlzLmxlbmd0aCA9IDBcbn1cblxuQml0QnVmZmVyLnByb3RvdHlwZSA9IHtcblxuICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KVxuICAgIHJldHVybiAoKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpID09PSAxXG4gIH0sXG5cbiAgcHV0OiBmdW5jdGlvbiAobnVtLCBsZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnB1dEJpdCgoKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSkgJiAxKSA9PT0gMSlcbiAgICB9XG4gIH0sXG5cbiAgZ2V0TGVuZ3RoSW5CaXRzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gIH0sXG5cbiAgcHV0Qml0OiBmdW5jdGlvbiAoYml0KSB7XG4gICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIDgpXG4gICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8PSBidWZJbmRleCkge1xuICAgICAgdGhpcy5idWZmZXIucHVzaCgwKVxuICAgIH1cblxuICAgIGlmIChiaXQpIHtcbiAgICAgIHRoaXMuYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKHRoaXMubGVuZ3RoICUgOCkpXG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGgrK1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQml0QnVmZmVyXG4iLCJ2YXIgQnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxzL2J1ZmZlcicpXG5cbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGhhbmRsZSBRUiBDb2RlIHN5bWJvbCBtb2R1bGVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgU3ltYm9sIHNpemVcbiAqL1xuZnVuY3Rpb24gQml0TWF0cml4IChzaXplKSB7XG4gIGlmICghc2l6ZSB8fCBzaXplIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQml0TWF0cml4IHNpemUgbXVzdCBiZSBkZWZpbmVkIGFuZCBncmVhdGVyIHRoYW4gMCcpXG4gIH1cblxuICB0aGlzLnNpemUgPSBzaXplXG4gIHRoaXMuZGF0YSA9IEJ1ZmZlclV0aWwuYWxsb2Moc2l6ZSAqIHNpemUpXG4gIHRoaXMucmVzZXJ2ZWRCaXQgPSBCdWZmZXJVdGlsLmFsbG9jKHNpemUgKiBzaXplKVxufVxuXG4vKipcbiAqIFNldCBiaXQgdmFsdWUgYXQgc3BlY2lmaWVkIGxvY2F0aW9uXG4gKiBJZiByZXNlcnZlZCBmbGFnIGlzIHNldCwgdGhpcyBiaXQgd2lsbCBiZSBpZ25vcmVkIGR1cmluZyBtYXNraW5nIHByb2Nlc3NcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gIHJvd1xuICogQHBhcmFtIHtOdW1iZXJ9ICBjb2xcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVzZXJ2ZWRcbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocm93LCBjb2wsIHZhbHVlLCByZXNlcnZlZCkge1xuICB2YXIgaW5kZXggPSByb3cgKiB0aGlzLnNpemUgKyBjb2xcbiAgdGhpcy5kYXRhW2luZGV4XSA9IHZhbHVlXG4gIGlmIChyZXNlcnZlZCkgdGhpcy5yZXNlcnZlZEJpdFtpbmRleF0gPSB0cnVlXG59XG5cbi8qKlxuICogUmV0dXJucyBiaXQgdmFsdWUgYXQgc3BlY2lmaWVkIGxvY2F0aW9uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgcm93XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICBjb2xcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbkJpdE1hdHJpeC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gIHJldHVybiB0aGlzLmRhdGFbcm93ICogdGhpcy5zaXplICsgY29sXVxufVxuXG4vKipcbiAqIEFwcGxpZXMgeG9yIG9wZXJhdG9yIGF0IHNwZWNpZmllZCBsb2NhdGlvblxuICogKHVzZWQgZHVyaW5nIG1hc2tpbmcgcHJvY2VzcylcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gIHJvd1xuICogQHBhcmFtIHtOdW1iZXJ9ICBjb2xcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiAocm93LCBjb2wsIHZhbHVlKSB7XG4gIHRoaXMuZGF0YVtyb3cgKiB0aGlzLnNpemUgKyBjb2xdIF49IHZhbHVlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYml0IGF0IHNwZWNpZmllZCBsb2NhdGlvbiBpcyByZXNlcnZlZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgIHJvd1xuICogQHBhcmFtIHtOdW1iZXJ9ICAgY29sXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLmlzUmVzZXJ2ZWQgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgcmV0dXJuIHRoaXMucmVzZXJ2ZWRCaXRbcm93ICogdGhpcy5zaXplICsgY29sXVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJpdE1hdHJpeFxuIiwidmFyIEJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuLi91dGlscy9idWZmZXInKVxudmFyIE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuXG5mdW5jdGlvbiBCeXRlRGF0YSAoZGF0YSkge1xuICB0aGlzLm1vZGUgPSBNb2RlLkJZVEVcbiAgdGhpcy5kYXRhID0gQnVmZmVyVXRpbC5mcm9tKGRhdGEpXG59XG5cbkJ5dGVEYXRhLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoIChsZW5ndGgpIHtcbiAgcmV0dXJuIGxlbmd0aCAqIDhcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCAoKSB7XG4gIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoXG59XG5cbkJ5dGVEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAoKSB7XG4gIHJldHVybiBCeXRlRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbkJ5dGVEYXRhLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChiaXRCdWZmZXIpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgYml0QnVmZmVyLnB1dCh0aGlzLmRhdGFbaV0sIDgpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCeXRlRGF0YVxuIiwidmFyIEVDTGV2ZWwgPSByZXF1aXJlKCcuL2Vycm9yLWNvcnJlY3Rpb24tbGV2ZWwnKVxyXG5cclxudmFyIEVDX0JMT0NLU19UQUJMRSA9IFtcclxuLy8gTCAgTSAgUSAgSFxyXG4gIDEsIDEsIDEsIDEsXHJcbiAgMSwgMSwgMSwgMSxcclxuICAxLCAxLCAyLCAyLFxyXG4gIDEsIDIsIDIsIDQsXHJcbiAgMSwgMiwgNCwgNCxcclxuICAyLCA0LCA0LCA0LFxyXG4gIDIsIDQsIDYsIDUsXHJcbiAgMiwgNCwgNiwgNixcclxuICAyLCA1LCA4LCA4LFxyXG4gIDQsIDUsIDgsIDgsXHJcbiAgNCwgNSwgOCwgMTEsXHJcbiAgNCwgOCwgMTAsIDExLFxyXG4gIDQsIDksIDEyLCAxNixcclxuICA0LCA5LCAxNiwgMTYsXHJcbiAgNiwgMTAsIDEyLCAxOCxcclxuICA2LCAxMCwgMTcsIDE2LFxyXG4gIDYsIDExLCAxNiwgMTksXHJcbiAgNiwgMTMsIDE4LCAyMSxcclxuICA3LCAxNCwgMjEsIDI1LFxyXG4gIDgsIDE2LCAyMCwgMjUsXHJcbiAgOCwgMTcsIDIzLCAyNSxcclxuICA5LCAxNywgMjMsIDM0LFxyXG4gIDksIDE4LCAyNSwgMzAsXHJcbiAgMTAsIDIwLCAyNywgMzIsXHJcbiAgMTIsIDIxLCAyOSwgMzUsXHJcbiAgMTIsIDIzLCAzNCwgMzcsXHJcbiAgMTIsIDI1LCAzNCwgNDAsXHJcbiAgMTMsIDI2LCAzNSwgNDIsXHJcbiAgMTQsIDI4LCAzOCwgNDUsXHJcbiAgMTUsIDI5LCA0MCwgNDgsXHJcbiAgMTYsIDMxLCA0MywgNTEsXHJcbiAgMTcsIDMzLCA0NSwgNTQsXHJcbiAgMTgsIDM1LCA0OCwgNTcsXHJcbiAgMTksIDM3LCA1MSwgNjAsXHJcbiAgMTksIDM4LCA1MywgNjMsXHJcbiAgMjAsIDQwLCA1NiwgNjYsXHJcbiAgMjEsIDQzLCA1OSwgNzAsXHJcbiAgMjIsIDQ1LCA2MiwgNzQsXHJcbiAgMjQsIDQ3LCA2NSwgNzcsXHJcbiAgMjUsIDQ5LCA2OCwgODFcclxuXVxyXG5cclxudmFyIEVDX0NPREVXT1JEU19UQUJMRSA9IFtcclxuLy8gTCAgTSAgUSAgSFxyXG4gIDcsIDEwLCAxMywgMTcsXHJcbiAgMTAsIDE2LCAyMiwgMjgsXHJcbiAgMTUsIDI2LCAzNiwgNDQsXHJcbiAgMjAsIDM2LCA1MiwgNjQsXHJcbiAgMjYsIDQ4LCA3MiwgODgsXHJcbiAgMzYsIDY0LCA5NiwgMTEyLFxyXG4gIDQwLCA3MiwgMTA4LCAxMzAsXHJcbiAgNDgsIDg4LCAxMzIsIDE1NixcclxuICA2MCwgMTEwLCAxNjAsIDE5MixcclxuICA3MiwgMTMwLCAxOTIsIDIyNCxcclxuICA4MCwgMTUwLCAyMjQsIDI2NCxcclxuICA5NiwgMTc2LCAyNjAsIDMwOCxcclxuICAxMDQsIDE5OCwgMjg4LCAzNTIsXHJcbiAgMTIwLCAyMTYsIDMyMCwgMzg0LFxyXG4gIDEzMiwgMjQwLCAzNjAsIDQzMixcclxuICAxNDQsIDI4MCwgNDA4LCA0ODAsXHJcbiAgMTY4LCAzMDgsIDQ0OCwgNTMyLFxyXG4gIDE4MCwgMzM4LCA1MDQsIDU4OCxcclxuICAxOTYsIDM2NCwgNTQ2LCA2NTAsXHJcbiAgMjI0LCA0MTYsIDYwMCwgNzAwLFxyXG4gIDIyNCwgNDQyLCA2NDQsIDc1MCxcclxuICAyNTIsIDQ3NiwgNjkwLCA4MTYsXHJcbiAgMjcwLCA1MDQsIDc1MCwgOTAwLFxyXG4gIDMwMCwgNTYwLCA4MTAsIDk2MCxcclxuICAzMTIsIDU4OCwgODcwLCAxMDUwLFxyXG4gIDMzNiwgNjQ0LCA5NTIsIDExMTAsXHJcbiAgMzYwLCA3MDAsIDEwMjAsIDEyMDAsXHJcbiAgMzkwLCA3MjgsIDEwNTAsIDEyNjAsXHJcbiAgNDIwLCA3ODQsIDExNDAsIDEzNTAsXHJcbiAgNDUwLCA4MTIsIDEyMDAsIDE0NDAsXHJcbiAgNDgwLCA4NjgsIDEyOTAsIDE1MzAsXHJcbiAgNTEwLCA5MjQsIDEzNTAsIDE2MjAsXHJcbiAgNTQwLCA5ODAsIDE0NDAsIDE3MTAsXHJcbiAgNTcwLCAxMDM2LCAxNTMwLCAxODAwLFxyXG4gIDU3MCwgMTA2NCwgMTU5MCwgMTg5MCxcclxuICA2MDAsIDExMjAsIDE2ODAsIDE5ODAsXHJcbiAgNjMwLCAxMjA0LCAxNzcwLCAyMTAwLFxyXG4gIDY2MCwgMTI2MCwgMTg2MCwgMjIyMCxcclxuICA3MjAsIDEzMTYsIDE5NTAsIDIzMTAsXHJcbiAgNzUwLCAxMzcyLCAyMDQwLCAyNDMwXHJcbl1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBibG9jayB0aGF0IHRoZSBRUiBDb2RlIHNob3VsZCBjb250YWluXHJcbiAqIGZvciB0aGUgc3BlY2lmaWVkIHZlcnNpb24gYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXHJcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIE51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGJsb2Nrc1xyXG4gKi9cclxuZXhwb3J0cy5nZXRCbG9ja3NDb3VudCA9IGZ1bmN0aW9uIGdldEJsb2Nrc0NvdW50ICh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gIHN3aXRjaCAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcclxuICAgIGNhc2UgRUNMZXZlbC5MOlxyXG4gICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMF1cclxuICAgIGNhc2UgRUNMZXZlbC5NOlxyXG4gICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMV1cclxuICAgIGNhc2UgRUNMZXZlbC5ROlxyXG4gICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMl1cclxuICAgIGNhc2UgRUNMZXZlbC5IOlxyXG4gICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgM11cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMgdG8gdXNlIGZvciB0aGUgc3BlY2lmaWVkXHJcbiAqIHZlcnNpb24gYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXHJcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIE51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3Jkc1xyXG4gKi9cclxuZXhwb3J0cy5nZXRUb3RhbENvZGV3b3Jkc0NvdW50ID0gZnVuY3Rpb24gZ2V0VG90YWxDb2Rld29yZHNDb3VudCAodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcclxuICBzd2l0Y2ggKGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XHJcbiAgICBjYXNlIEVDTGV2ZWwuTDpcclxuICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDBdXHJcbiAgICBjYXNlIEVDTGV2ZWwuTTpcclxuICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDFdXHJcbiAgICBjYXNlIEVDTGV2ZWwuUTpcclxuICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDJdXHJcbiAgICBjYXNlIEVDTGV2ZWwuSDpcclxuICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDNdXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydHMuTCA9IHsgYml0OiAxIH1cbmV4cG9ydHMuTSA9IHsgYml0OiAwIH1cbmV4cG9ydHMuUSA9IHsgYml0OiAzIH1cbmV4cG9ydHMuSCA9IHsgYml0OiAyIH1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyYW0gaXMgbm90IGEgc3RyaW5nJylcbiAgfVxuXG4gIHZhciBsY1N0ciA9IHN0cmluZy50b0xvd2VyQ2FzZSgpXG5cbiAgc3dpdGNoIChsY1N0cikge1xuICAgIGNhc2UgJ2wnOlxuICAgIGNhc2UgJ2xvdyc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5MXG5cbiAgICBjYXNlICdtJzpcbiAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuTVxuXG4gICAgY2FzZSAncSc6XG4gICAgY2FzZSAncXVhcnRpbGUnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuUVxuXG4gICAgY2FzZSAnaCc6XG4gICAgY2FzZSAnaGlnaCc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5IXG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIEVDIExldmVsOiAnICsgc3RyaW5nKVxuICB9XG59XG5cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKGxldmVsKSB7XG4gIHJldHVybiBsZXZlbCAmJiB0eXBlb2YgbGV2ZWwuYml0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxldmVsLmJpdCA+PSAwICYmIGxldmVsLmJpdCA8IDRcbn1cblxuZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoZXhwb3J0cy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgfVxufVxuIiwidmFyIGdldFN5bWJvbFNpemUgPSByZXF1aXJlKCcuL3V0aWxzJykuZ2V0U3ltYm9sU2l6ZVxudmFyIEZJTkRFUl9QQVRURVJOX1NJWkUgPSA3XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBwb3NpdGlvbnMgb2YgZWFjaCBmaW5kZXIgcGF0dGVybi5cbiAqIEVhY2ggYXJyYXkncyBlbGVtZW50IHJlcHJlc2VudCB0aGUgdG9wLWxlZnQgcG9pbnQgb2YgdGhlIHBhdHRlcm4gYXMgKHgsIHkpIGNvb3JkaW5hdGVzXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIGNvb3JkaW5hdGVzXG4gKi9cbmV4cG9ydHMuZ2V0UG9zaXRpb25zID0gZnVuY3Rpb24gZ2V0UG9zaXRpb25zICh2ZXJzaW9uKSB7XG4gIHZhciBzaXplID0gZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uKVxuXG4gIHJldHVybiBbXG4gICAgLy8gdG9wLWxlZnRcbiAgICBbMCwgMF0sXG4gICAgLy8gdG9wLXJpZ2h0XG4gICAgW3NpemUgLSBGSU5ERVJfUEFUVEVSTl9TSVpFLCAwXSxcbiAgICAvLyBib3R0b20tbGVmdFxuICAgIFswLCBzaXplIC0gRklOREVSX1BBVFRFUk5fU0laRV1cbiAgXVxufVxuIiwidmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbnZhciBHMTUgPSAoMSA8PCAxMCkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgNCkgfCAoMSA8PCAyKSB8ICgxIDw8IDEpIHwgKDEgPDwgMClcbnZhciBHMTVfTUFTSyA9ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDQpIHwgKDEgPDwgMSlcbnZhciBHMTVfQkNIID0gVXRpbHMuZ2V0QkNIRGlnaXQoRzE1KVxuXG4vKipcbiAqIFJldHVybnMgZm9ybWF0IGluZm9ybWF0aW9uIHdpdGggcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gKlxuICogVGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBpcyBhIDE1LWJpdCBzZXF1ZW5jZSBjb250YWluaW5nIDUgZGF0YSBiaXRzLFxuICogd2l0aCAxMCBlcnJvciBjb3JyZWN0aW9uIGJpdHMgY2FsY3VsYXRlZCB1c2luZyB0aGUgKDE1LCA1KSBCQ0ggY29kZS5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWFzayAgICAgICAgICAgICAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIEVuY29kZWQgZm9ybWF0IGluZm9ybWF0aW9uIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzIChlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFzaykge1xuICB2YXIgZGF0YSA9ICgoZXJyb3JDb3JyZWN0aW9uTGV2ZWwuYml0IDw8IDMpIHwgbWFzaylcbiAgdmFyIGQgPSBkYXRhIDw8IDEwXG5cbiAgd2hpbGUgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE1X0JDSCA+PSAwKSB7XG4gICAgZCBePSAoRzE1IDw8IChVdGlscy5nZXRCQ0hEaWdpdChkKSAtIEcxNV9CQ0gpKVxuICB9XG5cbiAgLy8geG9yIGZpbmFsIGRhdGEgd2l0aCBtYXNrIHBhdHRlcm4gaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXRcbiAgLy8gbm8gY29tYmluYXRpb24gb2YgRXJyb3IgQ29ycmVjdGlvbiBMZXZlbCBhbmQgZGF0YSBtYXNrIHBhdHRlcm5cbiAgLy8gd2lsbCByZXN1bHQgaW4gYW4gYWxsLXplcm8gZGF0YSBzdHJpbmdcbiAgcmV0dXJuICgoZGF0YSA8PCAxMCkgfCBkKSBeIEcxNV9NQVNLXG59XG4iLCJ2YXIgQnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxzL2J1ZmZlcicpXG5cbnZhciBFWFBfVEFCTEUgPSBCdWZmZXJVdGlsLmFsbG9jKDUxMilcbnZhciBMT0dfVEFCTEUgPSBCdWZmZXJVdGlsLmFsbG9jKDI1Nilcbi8qKlxuICogUHJlY29tcHV0ZSB0aGUgbG9nIGFuZCBhbnRpLWxvZyB0YWJsZXMgZm9yIGZhc3RlciBjb21wdXRhdGlvbiBsYXRlclxuICpcbiAqIEZvciBlYWNoIHBvc3NpYmxlIHZhbHVlIGluIHRoZSBnYWxvaXMgZmllbGQgMl44LCB3ZSB3aWxsIHByZS1jb21wdXRlXG4gKiB0aGUgbG9nYXJpdGhtIGFuZCBhbnRpLWxvZ2FyaXRobSAoZXhwb25lbnRpYWwpIG9mIHRoaXMgdmFsdWVcbiAqXG4gKiByZWYge0BsaW5rIGh0dHBzOi8vZW4ud2lraXZlcnNpdHkub3JnL3dpa2kvUmVlZCVFMiU4MCU5M1NvbG9tb25fY29kZXNfZm9yX2NvZGVycyNJbnRyb2R1Y3Rpb25fdG9fbWF0aGVtYXRpY2FsX2ZpZWxkc31cbiAqL1xuOyhmdW5jdGlvbiBpbml0VGFibGVzICgpIHtcbiAgdmFyIHggPSAxXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcbiAgICBFWFBfVEFCTEVbaV0gPSB4XG4gICAgTE9HX1RBQkxFW3hdID0gaVxuXG4gICAgeCA8PD0gMSAvLyBtdWx0aXBseSBieSAyXG5cbiAgICAvLyBUaGUgUVIgY29kZSBzcGVjaWZpY2F0aW9uIHNheXMgdG8gdXNlIGJ5dGUtd2lzZSBtb2R1bG8gMTAwMDExMTAxIGFyaXRobWV0aWMuXG4gICAgLy8gVGhpcyBtZWFucyB0aGF0IHdoZW4gYSBudW1iZXIgaXMgMjU2IG9yIGxhcmdlciwgaXQgc2hvdWxkIGJlIFhPUmVkIHdpdGggMHgxMUQuXG4gICAgaWYgKHggJiAweDEwMCkgeyAvLyBzaW1pbGFyIHRvIHggPj0gMjU2LCBidXQgYSBsb3QgZmFzdGVyIChiZWNhdXNlIDB4MTAwID09IDI1NilcbiAgICAgIHggXj0gMHgxMURcbiAgICB9XG4gIH1cblxuICAvLyBPcHRpbWl6YXRpb246IGRvdWJsZSB0aGUgc2l6ZSBvZiB0aGUgYW50aS1sb2cgdGFibGUgc28gdGhhdCB3ZSBkb24ndCBuZWVkIHRvIG1vZCAyNTUgdG9cbiAgLy8gc3RheSBpbnNpZGUgdGhlIGJvdW5kcyAoYmVjYXVzZSB3ZSB3aWxsIG1haW5seSB1c2UgdGhpcyB0YWJsZSBmb3IgdGhlIG11bHRpcGxpY2F0aW9uIG9mXG4gIC8vIHR3byBHRiBudW1iZXJzLCBubyBtb3JlKS5cbiAgLy8gQHNlZSB7QGxpbmsgbXVsfVxuICBmb3IgKGkgPSAyNTU7IGkgPCA1MTI7IGkrKykge1xuICAgIEVYUF9UQUJMRVtpXSA9IEVYUF9UQUJMRVtpIC0gMjU1XVxuICB9XG59KCkpXG5cbi8qKlxuICogUmV0dXJucyBsb2cgdmFsdWUgb2YgbiBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMubG9nID0gZnVuY3Rpb24gbG9nIChuKSB7XG4gIGlmIChuIDwgMSkgdGhyb3cgbmV3IEVycm9yKCdsb2coJyArIG4gKyAnKScpXG4gIHJldHVybiBMT0dfVEFCTEVbbl1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFudGktbG9nIHZhbHVlIG9mIG4gaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5leHBvcnRzLmV4cCA9IGZ1bmN0aW9uIGV4cCAobikge1xuICByZXR1cm4gRVhQX1RBQkxFW25dXG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbnVtYmVyIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSAge051bWJlcn0geVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5leHBvcnRzLm11bCA9IGZ1bmN0aW9uIG11bCAoeCwgeSkge1xuICBpZiAoeCA9PT0gMCB8fCB5ID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIHNob3VsZCBiZSBFWFBfVEFCTEVbKExPR19UQUJMRVt4XSArIExPR19UQUJMRVt5XSkgJSAyNTVdIGlmIEVYUF9UQUJMRSB3YXNuJ3Qgb3ZlcnNpemVkXG4gIC8vIEBzZWUge0BsaW5rIGluaXRUYWJsZXN9XG4gIHJldHVybiBFWFBfVEFCTEVbTE9HX1RBQkxFW3hdICsgTE9HX1RBQkxFW3ldXVxufVxuIiwidmFyIE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmZ1bmN0aW9uIEthbmppRGF0YSAoZGF0YSkge1xuICB0aGlzLm1vZGUgPSBNb2RlLktBTkpJXG4gIHRoaXMuZGF0YSA9IGRhdGFcbn1cblxuS2FuamlEYXRhLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoIChsZW5ndGgpIHtcbiAgcmV0dXJuIGxlbmd0aCAqIDEzXG59XG5cbkthbmppRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuS2FuamlEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAoKSB7XG4gIHJldHVybiBLYW5qaURhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKVxufVxuXG5LYW5qaURhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGJpdEJ1ZmZlcikge1xuICB2YXIgaVxuXG4gIC8vIEluIHRoZSBTaGlmdCBKSVMgc3lzdGVtLCBLYW5qaSBjaGFyYWN0ZXJzIGFyZSByZXByZXNlbnRlZCBieSBhIHR3byBieXRlIGNvbWJpbmF0aW9uLlxuICAvLyBUaGVzZSBieXRlIHZhbHVlcyBhcmUgc2hpZnRlZCBmcm9tIHRoZSBKSVMgWCAwMjA4IHZhbHVlcy5cbiAgLy8gSklTIFggMDIwOCBnaXZlcyBkZXRhaWxzIG9mIHRoZSBzaGlmdCBjb2RlZCByZXByZXNlbnRhdGlvbi5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IFV0aWxzLnRvU0pJUyh0aGlzLmRhdGFbaV0pXG5cbiAgICAvLyBGb3IgY2hhcmFjdGVycyB3aXRoIFNoaWZ0IEpJUyB2YWx1ZXMgZnJvbSAweDgxNDAgdG8gMHg5RkZDOlxuICAgIGlmICh2YWx1ZSA+PSAweDgxNDAgJiYgdmFsdWUgPD0gMHg5RkZDKSB7XG4gICAgICAvLyBTdWJ0cmFjdCAweDgxNDAgZnJvbSBTaGlmdCBKSVMgdmFsdWVcbiAgICAgIHZhbHVlIC09IDB4ODE0MFxuXG4gICAgLy8gRm9yIGNoYXJhY3RlcnMgd2l0aCBTaGlmdCBKSVMgdmFsdWVzIGZyb20gMHhFMDQwIHRvIDB4RUJCRlxuICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gMHhFMDQwICYmIHZhbHVlIDw9IDB4RUJCRikge1xuICAgICAgLy8gU3VidHJhY3QgMHhDMTQwIGZyb20gU2hpZnQgSklTIHZhbHVlXG4gICAgICB2YWx1ZSAtPSAweEMxNDBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCBTSklTIGNoYXJhY3RlcjogJyArIHRoaXMuZGF0YVtpXSArICdcXG4nICtcbiAgICAgICAgJ01ha2Ugc3VyZSB5b3VyIGNoYXJzZXQgaXMgVVRGLTgnKVxuICAgIH1cblxuICAgIC8vIE11bHRpcGx5IG1vc3Qgc2lnbmlmaWNhbnQgYnl0ZSBvZiByZXN1bHQgYnkgMHhDMFxuICAgIC8vIGFuZCBhZGQgbGVhc3Qgc2lnbmlmaWNhbnQgYnl0ZSB0byBwcm9kdWN0XG4gICAgdmFsdWUgPSAoKCh2YWx1ZSA+Pj4gOCkgJiAweGZmKSAqIDB4QzApICsgKHZhbHVlICYgMHhmZilcblxuICAgIC8vIENvbnZlcnQgcmVzdWx0IHRvIGEgMTMtYml0IGJpbmFyeSBzdHJpbmdcbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCAxMylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEthbmppRGF0YVxuIiwiLyoqXG4gKiBEYXRhIG1hc2sgcGF0dGVybiByZWZlcmVuY2VcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuUGF0dGVybnMgPSB7XG4gIFBBVFRFUk4wMDA6IDAsXG4gIFBBVFRFUk4wMDE6IDEsXG4gIFBBVFRFUk4wMTA6IDIsXG4gIFBBVFRFUk4wMTE6IDMsXG4gIFBBVFRFUk4xMDA6IDQsXG4gIFBBVFRFUk4xMDE6IDUsXG4gIFBBVFRFUk4xMTA6IDYsXG4gIFBBVFRFUk4xMTE6IDdcbn1cblxuLyoqXG4gKiBXZWlnaHRlZCBwZW5hbHR5IHNjb3JlcyBmb3IgdGhlIHVuZGVzaXJhYmxlIGZlYXR1cmVzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgUGVuYWx0eVNjb3JlcyA9IHtcbiAgTjE6IDMsXG4gIE4yOiAzLFxuICBOMzogNDAsXG4gIE40OiAxMFxufVxuXG4vKipcbiAqIENoZWNrIGlmIG1hc2sgcGF0dGVybiB2YWx1ZSBpcyB2YWxpZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gIG1hc2sgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgIHRydWUgaWYgdmFsaWQsIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkIChtYXNrKSB7XG4gIHJldHVybiBtYXNrICE9IG51bGwgJiYgbWFzayAhPT0gJycgJiYgIWlzTmFOKG1hc2spICYmIG1hc2sgPj0gMCAmJiBtYXNrIDw9IDdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIG1hc2sgcGF0dGVybiBmcm9tIGEgdmFsdWUuXG4gKiBJZiB2YWx1ZSBpcyBub3QgdmFsaWQsIHJldHVybnMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30gdmFsdWUgICAgICAgIE1hc2sgcGF0dGVybiB2YWx1ZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgIFZhbGlkIG1hc2sgcGF0dGVybiBvciB1bmRlZmluZWRcbiAqL1xuZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSAodmFsdWUpIHtcbiAgcmV0dXJuIGV4cG9ydHMuaXNWYWxpZCh2YWx1ZSkgPyBwYXJzZUludCh2YWx1ZSwgMTApIDogdW5kZWZpbmVkXG59XG5cbi8qKlxuKiBGaW5kIGFkamFjZW50IG1vZHVsZXMgaW4gcm93L2NvbHVtbiB3aXRoIHRoZSBzYW1lIGNvbG9yXG4qIGFuZCBhc3NpZ24gYSBwZW5hbHR5IHZhbHVlLlxuKlxuKiBQb2ludHM6IE4xICsgaVxuKiBpIGlzIHRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIG51bWJlciBvZiBhZGphY2VudCBtb2R1bGVzIG9mIHRoZSBzYW1lIGNvbG9yIGV4Y2VlZHMgNVxuKi9cbmV4cG9ydHMuZ2V0UGVuYWx0eU4xID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU4xIChkYXRhKSB7XG4gIHZhciBzaXplID0gZGF0YS5zaXplXG4gIHZhciBwb2ludHMgPSAwXG4gIHZhciBzYW1lQ291bnRDb2wgPSAwXG4gIHZhciBzYW1lQ291bnRSb3cgPSAwXG4gIHZhciBsYXN0Q29sID0gbnVsbFxuICB2YXIgbGFzdFJvdyA9IG51bGxcblxuICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgIHNhbWVDb3VudENvbCA9IHNhbWVDb3VudFJvdyA9IDBcbiAgICBsYXN0Q29sID0gbGFzdFJvdyA9IG51bGxcblxuICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICB2YXIgbW9kdWxlID0gZGF0YS5nZXQocm93LCBjb2wpXG4gICAgICBpZiAobW9kdWxlID09PSBsYXN0Q29sKSB7XG4gICAgICAgIHNhbWVDb3VudENvbCsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2FtZUNvdW50Q29sID49IDUpIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudENvbCAtIDUpXG4gICAgICAgIGxhc3RDb2wgPSBtb2R1bGVcbiAgICAgICAgc2FtZUNvdW50Q29sID0gMVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUgPSBkYXRhLmdldChjb2wsIHJvdylcbiAgICAgIGlmIChtb2R1bGUgPT09IGxhc3RSb3cpIHtcbiAgICAgICAgc2FtZUNvdW50Um93KytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSlcbiAgICAgICAgbGFzdFJvdyA9IG1vZHVsZVxuICAgICAgICBzYW1lQ291bnRSb3cgPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNhbWVDb3VudENvbCA+PSA1KSBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRDb2wgLSA1KVxuICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSlcbiAgfVxuXG4gIHJldHVybiBwb2ludHNcbn1cblxuLyoqXG4gKiBGaW5kIDJ4MiBibG9ja3Mgd2l0aCB0aGUgc2FtZSBjb2xvciBhbmQgYXNzaWduIGEgcGVuYWx0eSB2YWx1ZVxuICpcbiAqIFBvaW50czogTjIgKiAobSAtIDEpICogKG4gLSAxKVxuICovXG5leHBvcnRzLmdldFBlbmFsdHlOMiA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMiAoZGF0YSkge1xuICB2YXIgc2l6ZSA9IGRhdGEuc2l6ZVxuICB2YXIgcG9pbnRzID0gMFxuXG4gIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHNpemUgLSAxOyByb3crKykge1xuICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHNpemUgLSAxOyBjb2wrKykge1xuICAgICAgdmFyIGxhc3QgPSBkYXRhLmdldChyb3csIGNvbCkgK1xuICAgICAgICBkYXRhLmdldChyb3csIGNvbCArIDEpICtcbiAgICAgICAgZGF0YS5nZXQocm93ICsgMSwgY29sKSArXG4gICAgICAgIGRhdGEuZ2V0KHJvdyArIDEsIGNvbCArIDEpXG5cbiAgICAgIGlmIChsYXN0ID09PSA0IHx8IGxhc3QgPT09IDApIHBvaW50cysrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvaW50cyAqIFBlbmFsdHlTY29yZXMuTjJcbn1cblxuLyoqXG4gKiBGaW5kIDE6MTozOjE6MSByYXRpbyAoZGFyazpsaWdodDpkYXJrOmxpZ2h0OmRhcmspIHBhdHRlcm4gaW4gcm93L2NvbHVtbixcbiAqIHByZWNlZGVkIG9yIGZvbGxvd2VkIGJ5IGxpZ2h0IGFyZWEgNCBtb2R1bGVzIHdpZGVcbiAqXG4gKiBQb2ludHM6IE4zICogbnVtYmVyIG9mIHBhdHRlcm4gZm91bmRcbiAqL1xuZXhwb3J0cy5nZXRQZW5hbHR5TjMgPSBmdW5jdGlvbiBnZXRQZW5hbHR5TjMgKGRhdGEpIHtcbiAgdmFyIHNpemUgPSBkYXRhLnNpemVcbiAgdmFyIHBvaW50cyA9IDBcbiAgdmFyIGJpdHNDb2wgPSAwXG4gIHZhciBiaXRzUm93ID0gMFxuXG4gIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgYml0c0NvbCA9IGJpdHNSb3cgPSAwXG4gICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgIGJpdHNDb2wgPSAoKGJpdHNDb2wgPDwgMSkgJiAweDdGRikgfCBkYXRhLmdldChyb3csIGNvbClcbiAgICAgIGlmIChjb2wgPj0gMTAgJiYgKGJpdHNDb2wgPT09IDB4NUQwIHx8IGJpdHNDb2wgPT09IDB4MDVEKSkgcG9pbnRzKytcblxuICAgICAgYml0c1JvdyA9ICgoYml0c1JvdyA8PCAxKSAmIDB4N0ZGKSB8IGRhdGEuZ2V0KGNvbCwgcm93KVxuICAgICAgaWYgKGNvbCA+PSAxMCAmJiAoYml0c1JvdyA9PT0gMHg1RDAgfHwgYml0c1JvdyA9PT0gMHgwNUQpKSBwb2ludHMrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHMgKiBQZW5hbHR5U2NvcmVzLk4zXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHByb3BvcnRpb24gb2YgZGFyayBtb2R1bGVzIGluIGVudGlyZSBzeW1ib2xcbiAqXG4gKiBQb2ludHM6IE40ICoga1xuICpcbiAqIGsgaXMgdGhlIHJhdGluZyBvZiB0aGUgZGV2aWF0aW9uIG9mIHRoZSBwcm9wb3J0aW9uIG9mIGRhcmsgbW9kdWxlc1xuICogaW4gdGhlIHN5bWJvbCBmcm9tIDUwJSBpbiBzdGVwcyBvZiA1JVxuICovXG5leHBvcnRzLmdldFBlbmFsdHlONCA9IGZ1bmN0aW9uIGdldFBlbmFsdHlONCAoZGF0YSkge1xuICB2YXIgZGFya0NvdW50ID0gMFxuICB2YXIgbW9kdWxlc0NvdW50ID0gZGF0YS5kYXRhLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlc0NvdW50OyBpKyspIGRhcmtDb3VudCArPSBkYXRhLmRhdGFbaV1cblxuICB2YXIgayA9IE1hdGguYWJzKE1hdGguY2VpbCgoZGFya0NvdW50ICogMTAwIC8gbW9kdWxlc0NvdW50KSAvIDUpIC0gMTApXG5cbiAgcmV0dXJuIGsgKiBQZW5hbHR5U2NvcmVzLk40XG59XG5cbi8qKlxuICogUmV0dXJuIG1hc2sgdmFsdWUgYXQgZ2l2ZW4gcG9zaXRpb25cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1hc2tQYXR0ZXJuIFBhdHRlcm4gcmVmZXJlbmNlIHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGkgICAgICAgICAgIFJvd1xuICogQHBhcmFtICB7TnVtYmVyfSBqICAgICAgICAgICBDb2x1bW5cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgICAgTWFzayB2YWx1ZVxuICovXG5mdW5jdGlvbiBnZXRNYXNrQXQgKG1hc2tQYXR0ZXJuLCBpLCBqKSB7XG4gIHN3aXRjaCAobWFza1BhdHRlcm4pIHtcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAwMDogcmV0dXJuIChpICsgaikgJSAyID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMDE6IHJldHVybiBpICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDEwOiByZXR1cm4gaiAlIDMgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAxMTogcmV0dXJuIChpICsgaikgJSAzID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4xMDA6IHJldHVybiAoTWF0aC5mbG9vcihpIC8gMikgKyBNYXRoLmZsb29yKGogLyAzKSkgJSAyID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4xMDE6IHJldHVybiAoaSAqIGopICUgMiArIChpICogaikgJSAzID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4xMTA6IHJldHVybiAoKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4xMTE6IHJldHVybiAoKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09PSAwXG5cbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBtYXNrUGF0dGVybjonICsgbWFza1BhdHRlcm4pXG4gIH1cbn1cblxuLyoqXG4gKiBBcHBseSBhIG1hc2sgcGF0dGVybiB0byBhIEJpdE1hdHJpeFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICAgcGF0dGVybiBQYXR0ZXJuIHJlZmVyZW5jZSBudW1iZXJcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gZGF0YSAgICBCaXRNYXRyaXggZGF0YVxuICovXG5leHBvcnRzLmFwcGx5TWFzayA9IGZ1bmN0aW9uIGFwcGx5TWFzayAocGF0dGVybiwgZGF0YSkge1xuICB2YXIgc2l6ZSA9IGRhdGEuc2l6ZVxuXG4gIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgIGlmIChkYXRhLmlzUmVzZXJ2ZWQocm93LCBjb2wpKSBjb250aW51ZVxuICAgICAgZGF0YS54b3Iocm93LCBjb2wsIGdldE1hc2tBdChwYXR0ZXJuLCByb3csIGNvbCkpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmVzdCBtYXNrIHBhdHRlcm4gZm9yIGRhdGFcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IGRhdGFcbiAqIEByZXR1cm4ge051bWJlcn0gTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSBudW1iZXJcbiAqL1xuZXhwb3J0cy5nZXRCZXN0TWFzayA9IGZ1bmN0aW9uIGdldEJlc3RNYXNrIChkYXRhLCBzZXR1cEZvcm1hdEZ1bmMpIHtcbiAgdmFyIG51bVBhdHRlcm5zID0gT2JqZWN0LmtleXMoZXhwb3J0cy5QYXR0ZXJucykubGVuZ3RoXG4gIHZhciBiZXN0UGF0dGVybiA9IDBcbiAgdmFyIGxvd2VyUGVuYWx0eSA9IEluZmluaXR5XG5cbiAgZm9yICh2YXIgcCA9IDA7IHAgPCBudW1QYXR0ZXJuczsgcCsrKSB7XG4gICAgc2V0dXBGb3JtYXRGdW5jKHApXG4gICAgZXhwb3J0cy5hcHBseU1hc2socCwgZGF0YSlcblxuICAgIC8vIENhbGN1bGF0ZSBwZW5hbHR5XG4gICAgdmFyIHBlbmFsdHkgPVxuICAgICAgZXhwb3J0cy5nZXRQZW5hbHR5TjEoZGF0YSkgK1xuICAgICAgZXhwb3J0cy5nZXRQZW5hbHR5TjIoZGF0YSkgK1xuICAgICAgZXhwb3J0cy5nZXRQZW5hbHR5TjMoZGF0YSkgK1xuICAgICAgZXhwb3J0cy5nZXRQZW5hbHR5TjQoZGF0YSlcblxuICAgIC8vIFVuZG8gcHJldmlvdXNseSBhcHBsaWVkIG1hc2tcbiAgICBleHBvcnRzLmFwcGx5TWFzayhwLCBkYXRhKVxuXG4gICAgaWYgKHBlbmFsdHkgPCBsb3dlclBlbmFsdHkpIHtcbiAgICAgIGxvd2VyUGVuYWx0eSA9IHBlbmFsdHlcbiAgICAgIGJlc3RQYXR0ZXJuID0gcFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBiZXN0UGF0dGVyblxufVxuIiwidmFyIFZlcnNpb25DaGVjayA9IHJlcXVpcmUoJy4vdmVyc2lvbi1jaGVjaycpXG52YXIgUmVnZXggPSByZXF1aXJlKCcuL3JlZ2V4JylcblxuLyoqXG4gKiBOdW1lcmljIG1vZGUgZW5jb2RlcyBkYXRhIGZyb20gdGhlIGRlY2ltYWwgZGlnaXQgc2V0ICgwIC0gOSlcbiAqIChieXRlIHZhbHVlcyAzMEhFWCB0byAzOUhFWCkuXG4gKiBOb3JtYWxseSwgMyBkYXRhIGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IDEwIGJpdHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5OVU1FUklDID0ge1xuICBpZDogJ051bWVyaWMnLFxuICBiaXQ6IDEgPDwgMCxcbiAgY2NCaXRzOiBbMTAsIDEyLCAxNF1cbn1cblxuLyoqXG4gKiBBbHBoYW51bWVyaWMgbW9kZSBlbmNvZGVzIGRhdGEgZnJvbSBhIHNldCBvZiA0NSBjaGFyYWN0ZXJzLFxuICogaS5lLiAxMCBudW1lcmljIGRpZ2l0cyAoMCAtIDkpLFxuICogICAgICAyNiBhbHBoYWJldGljIGNoYXJhY3RlcnMgKEEgLSBaKSxcbiAqICAgYW5kIDkgc3ltYm9scyAoU1AsICQsICUsICosICssIC0sIC4sIC8sIDopLlxuICogTm9ybWFsbHksIHR3byBpbnB1dCBjaGFyYWN0ZXJzIGFyZSByZXByZXNlbnRlZCBieSAxMSBiaXRzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuQUxQSEFOVU1FUklDID0ge1xuICBpZDogJ0FscGhhbnVtZXJpYycsXG4gIGJpdDogMSA8PCAxLFxuICBjY0JpdHM6IFs5LCAxMSwgMTNdXG59XG5cbi8qKlxuICogSW4gYnl0ZSBtb2RlLCBkYXRhIGlzIGVuY29kZWQgYXQgOCBiaXRzIHBlciBjaGFyYWN0ZXIuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5CWVRFID0ge1xuICBpZDogJ0J5dGUnLFxuICBiaXQ6IDEgPDwgMixcbiAgY2NCaXRzOiBbOCwgMTYsIDE2XVxufVxuXG4vKipcbiAqIFRoZSBLYW5qaSBtb2RlIGVmZmljaWVudGx5IGVuY29kZXMgS2FuamkgY2hhcmFjdGVycyBpbiBhY2NvcmRhbmNlIHdpdGhcbiAqIHRoZSBTaGlmdCBKSVMgc3lzdGVtIGJhc2VkIG9uIEpJUyBYIDAyMDguXG4gKiBUaGUgU2hpZnQgSklTIHZhbHVlcyBhcmUgc2hpZnRlZCBmcm9tIHRoZSBKSVMgWCAwMjA4IHZhbHVlcy5cbiAqIEpJUyBYIDAyMDggZ2l2ZXMgZGV0YWlscyBvZiB0aGUgc2hpZnQgY29kZWQgcmVwcmVzZW50YXRpb24uXG4gKiBFYWNoIHR3by1ieXRlIGNoYXJhY3RlciB2YWx1ZSBpcyBjb21wYWN0ZWQgdG8gYSAxMy1iaXQgYmluYXJ5IGNvZGV3b3JkLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuS0FOSkkgPSB7XG4gIGlkOiAnS2FuamknLFxuICBiaXQ6IDEgPDwgMyxcbiAgY2NCaXRzOiBbOCwgMTAsIDEyXVxufVxuXG4vKipcbiAqIE1peGVkIG1vZGUgd2lsbCBjb250YWluIGEgc2VxdWVuY2VzIG9mIGRhdGEgaW4gYSBjb21iaW5hdGlvbiBvZiBhbnkgb2ZcbiAqIHRoZSBtb2RlcyBkZXNjcmliZWQgYWJvdmVcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLk1JWEVEID0ge1xuICBiaXQ6IC0xXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGJpdHMgbmVlZGVkIHRvIHN0b3JlIHRoZSBkYXRhIGxlbmd0aFxuICogYWNjb3JkaW5nIHRvIFFSIENvZGUgc3BlY2lmaWNhdGlvbnMuXG4gKlxuICogQHBhcmFtICB7TW9kZX0gICBtb2RlICAgIERhdGEgbW9kZVxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIE51bWJlciBvZiBiaXRzXG4gKi9cbmV4cG9ydHMuZ2V0Q2hhckNvdW50SW5kaWNhdG9yID0gZnVuY3Rpb24gZ2V0Q2hhckNvdW50SW5kaWNhdG9yIChtb2RlLCB2ZXJzaW9uKSB7XG4gIGlmICghbW9kZS5jY0JpdHMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtb2RlOiAnICsgbW9kZSlcblxuICBpZiAoIVZlcnNpb25DaGVjay5pc1ZhbGlkKHZlcnNpb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZlcnNpb246ICcgKyB2ZXJzaW9uKVxuICB9XG5cbiAgaWYgKHZlcnNpb24gPj0gMSAmJiB2ZXJzaW9uIDwgMTApIHJldHVybiBtb2RlLmNjQml0c1swXVxuICBlbHNlIGlmICh2ZXJzaW9uIDwgMjcpIHJldHVybiBtb2RlLmNjQml0c1sxXVxuICByZXR1cm4gbW9kZS5jY0JpdHNbMl1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtb3N0IGVmZmljaWVudCBtb2RlIHRvIHN0b3JlIHRoZSBzcGVjaWZpZWQgZGF0YVxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVN0ciBJbnB1dCBkYXRhIHN0cmluZ1xuICogQHJldHVybiB7TW9kZX0gICAgICAgICAgIEJlc3QgbW9kZVxuICovXG5leHBvcnRzLmdldEJlc3RNb2RlRm9yRGF0YSA9IGZ1bmN0aW9uIGdldEJlc3RNb2RlRm9yRGF0YSAoZGF0YVN0cikge1xuICBpZiAoUmVnZXgudGVzdE51bWVyaWMoZGF0YVN0cikpIHJldHVybiBleHBvcnRzLk5VTUVSSUNcbiAgZWxzZSBpZiAoUmVnZXgudGVzdEFscGhhbnVtZXJpYyhkYXRhU3RyKSkgcmV0dXJuIGV4cG9ydHMuQUxQSEFOVU1FUklDXG4gIGVsc2UgaWYgKFJlZ2V4LnRlc3RLYW5qaShkYXRhU3RyKSkgcmV0dXJuIGV4cG9ydHMuS0FOSklcbiAgZWxzZSByZXR1cm4gZXhwb3J0cy5CWVRFXG59XG5cbi8qKlxuICogUmV0dXJuIG1vZGUgbmFtZSBhcyBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge01vZGV9IG1vZGUgTW9kZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9ICBNb2RlIG5hbWVcbiAqL1xuZXhwb3J0cy50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nIChtb2RlKSB7XG4gIGlmIChtb2RlICYmIG1vZGUuaWQpIHJldHVybiBtb2RlLmlkXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtb2RlJylcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBpbnB1dCBwYXJhbSBpcyBhIHZhbGlkIG1vZGUgb2JqZWN0XG4gKlxuICogQHBhcmFtICAge01vZGV9ICAgIG1vZGUgTW9kZSBvYmplY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHZhbGlkIG1vZGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkIChtb2RlKSB7XG4gIHJldHVybiBtb2RlICYmIG1vZGUuYml0ICYmIG1vZGUuY2NCaXRzXG59XG5cbi8qKlxuICogR2V0IG1vZGUgb2JqZWN0IGZyb20gaXRzIG5hbWVcbiAqXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBzdHJpbmcgTW9kZSBuYW1lXG4gKiBAcmV0dXJucyB7TW9kZX0gICAgICAgICAgTW9kZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyYW0gaXMgbm90IGEgc3RyaW5nJylcbiAgfVxuXG4gIHZhciBsY1N0ciA9IHN0cmluZy50b0xvd2VyQ2FzZSgpXG5cbiAgc3dpdGNoIChsY1N0cikge1xuICAgIGNhc2UgJ251bWVyaWMnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuTlVNRVJJQ1xuICAgIGNhc2UgJ2FscGhhbnVtZXJpYyc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5BTFBIQU5VTUVSSUNcbiAgICBjYXNlICdrYW5qaSc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5LQU5KSVxuICAgIGNhc2UgJ2J5dGUnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuQllURVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZTogJyArIHN0cmluZylcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgbW9kZSBmcm9tIGEgdmFsdWUuXG4gKiBJZiB2YWx1ZSBpcyBub3QgYSB2YWxpZCBtb2RlLCByZXR1cm5zIGRlZmF1bHRWYWx1ZVxuICpcbiAqIEBwYXJhbSAge01vZGV8U3RyaW5nfSB2YWx1ZSAgICAgICAgRW5jb2RpbmcgbW9kZVxuICogQHBhcmFtICB7TW9kZX0gICAgICAgIGRlZmF1bHRWYWx1ZSBGYWxsYmFjayB2YWx1ZVxuICogQHJldHVybiB7TW9kZX0gICAgICAgICAgICAgICAgICAgICBFbmNvZGluZyBtb2RlXG4gKi9cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKGV4cG9ydHMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIH1cbn1cbiIsInZhciBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuZnVuY3Rpb24gTnVtZXJpY0RhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5OVU1FUklDXG4gIHRoaXMuZGF0YSA9IGRhdGEudG9TdHJpbmcoKVxufVxuXG5OdW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAobGVuZ3RoKSB7XG4gIHJldHVybiAxMCAqIE1hdGguZmxvb3IobGVuZ3RoIC8gMykgKyAoKGxlbmd0aCAlIDMpID8gKChsZW5ndGggJSAzKSAqIDMgKyAxKSA6IDApXG59XG5cbk51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKCkge1xuICByZXR1cm4gTnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKVxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoYml0QnVmZmVyKSB7XG4gIHZhciBpLCBncm91cCwgdmFsdWVcblxuICAvLyBUaGUgaW5wdXQgZGF0YSBzdHJpbmcgaXMgZGl2aWRlZCBpbnRvIGdyb3VwcyBvZiB0aHJlZSBkaWdpdHMsXG4gIC8vIGFuZCBlYWNoIGdyb3VwIGlzIGNvbnZlcnRlZCB0byBpdHMgMTAtYml0IGJpbmFyeSBlcXVpdmFsZW50LlxuICBmb3IgKGkgPSAwOyBpICsgMyA8PSB0aGlzLmRhdGEubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBncm91cCA9IHRoaXMuZGF0YS5zdWJzdHIoaSwgMylcbiAgICB2YWx1ZSA9IHBhcnNlSW50KGdyb3VwLCAxMClcblxuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEwKVxuICB9XG5cbiAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkaWdpdHMgaXMgbm90IGFuIGV4YWN0IG11bHRpcGxlIG9mIHRocmVlLFxuICAvLyB0aGUgZmluYWwgb25lIG9yIHR3byBkaWdpdHMgYXJlIGNvbnZlcnRlZCB0byA0IG9yIDcgYml0cyByZXNwZWN0aXZlbHkuXG4gIHZhciByZW1haW5pbmdOdW0gPSB0aGlzLmRhdGEubGVuZ3RoIC0gaVxuICBpZiAocmVtYWluaW5nTnVtID4gMCkge1xuICAgIGdyb3VwID0gdGhpcy5kYXRhLnN1YnN0cihpKVxuICAgIHZhbHVlID0gcGFyc2VJbnQoZ3JvdXAsIDEwKVxuXG4gICAgYml0QnVmZmVyLnB1dCh2YWx1ZSwgcmVtYWluaW5nTnVtICogMyArIDEpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOdW1lcmljRGF0YVxuIiwidmFyIEJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuLi91dGlscy9idWZmZXInKVxudmFyIEdGID0gcmVxdWlyZSgnLi9nYWxvaXMtZmllbGQnKVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHBvbHlub21pYWxzIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtCdWZmZXJ9IHAxIFBvbHlub21pYWxcbiAqIEBwYXJhbSAge0J1ZmZlcn0gcDIgUG9seW5vbWlhbFxuICogQHJldHVybiB7QnVmZmVyfSAgICBQcm9kdWN0IG9mIHAxIGFuZCBwMlxuICovXG5leHBvcnRzLm11bCA9IGZ1bmN0aW9uIG11bCAocDEsIHAyKSB7XG4gIHZhciBjb2VmZiA9IEJ1ZmZlclV0aWwuYWxsb2MocDEubGVuZ3RoICsgcDIubGVuZ3RoIC0gMSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwMi5sZW5ndGg7IGorKykge1xuICAgICAgY29lZmZbaSArIGpdIF49IEdGLm11bChwMVtpXSwgcDJbal0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvZWZmXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSByZW1haW5kZXIgb2YgcG9seW5vbWlhbHMgZGl2aXNpb25cbiAqXG4gKiBAcGFyYW0gIHtCdWZmZXJ9IGRpdmlkZW50IFBvbHlub21pYWxcbiAqIEBwYXJhbSAge0J1ZmZlcn0gZGl2aXNvciAgUG9seW5vbWlhbFxuICogQHJldHVybiB7QnVmZmVyfSAgICAgICAgICBSZW1haW5kZXJcbiAqL1xuZXhwb3J0cy5tb2QgPSBmdW5jdGlvbiBtb2QgKGRpdmlkZW50LCBkaXZpc29yKSB7XG4gIHZhciByZXN1bHQgPSBCdWZmZXJVdGlsLmZyb20oZGl2aWRlbnQpXG5cbiAgd2hpbGUgKChyZXN1bHQubGVuZ3RoIC0gZGl2aXNvci5sZW5ndGgpID49IDApIHtcbiAgICB2YXIgY29lZmYgPSByZXN1bHRbMF1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGl2aXNvci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W2ldIF49IEdGLm11bChkaXZpc29yW2ldLCBjb2VmZilcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIHplcm9zIGZyb20gYnVmZmVyIGhlYWRcbiAgICB2YXIgb2Zmc2V0ID0gMFxuICAgIHdoaWxlIChvZmZzZXQgPCByZXN1bHQubGVuZ3RoICYmIHJlc3VsdFtvZmZzZXRdID09PSAwKSBvZmZzZXQrK1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShvZmZzZXQpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gaXJyZWR1Y2libGUgZ2VuZXJhdG9yIHBvbHlub21pYWwgb2Ygc3BlY2lmaWVkIGRlZ3JlZVxuICogKHVzZWQgYnkgUmVlZC1Tb2xvbW9uIGVuY29kZXIpXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWdyZWUgRGVncmVlIG9mIHRoZSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICogQHJldHVybiB7QnVmZmVyfSAgICAgICAgQnVmZmVyIGNvbnRhaW5pbmcgcG9seW5vbWlhbCBjb2VmZmljaWVudHNcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZUVDUG9seW5vbWlhbCA9IGZ1bmN0aW9uIGdlbmVyYXRlRUNQb2x5bm9taWFsIChkZWdyZWUpIHtcbiAgdmFyIHBvbHkgPSBCdWZmZXJVdGlsLmZyb20oWzFdKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRlZ3JlZTsgaSsrKSB7XG4gICAgcG9seSA9IGV4cG9ydHMubXVsKHBvbHksIFsxLCBHRi5leHAoaSldKVxuICB9XG5cbiAgcmV0dXJuIHBvbHlcbn1cbiIsInZhciBCdWZmZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvYnVmZmVyJylcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxudmFyIEVDTGV2ZWwgPSByZXF1aXJlKCcuL2Vycm9yLWNvcnJlY3Rpb24tbGV2ZWwnKVxudmFyIEJpdEJ1ZmZlciA9IHJlcXVpcmUoJy4vYml0LWJ1ZmZlcicpXG52YXIgQml0TWF0cml4ID0gcmVxdWlyZSgnLi9iaXQtbWF0cml4JylcbnZhciBBbGlnbm1lbnRQYXR0ZXJuID0gcmVxdWlyZSgnLi9hbGlnbm1lbnQtcGF0dGVybicpXG52YXIgRmluZGVyUGF0dGVybiA9IHJlcXVpcmUoJy4vZmluZGVyLXBhdHRlcm4nKVxudmFyIE1hc2tQYXR0ZXJuID0gcmVxdWlyZSgnLi9tYXNrLXBhdHRlcm4nKVxudmFyIEVDQ29kZSA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1jb2RlJylcbnZhciBSZWVkU29sb21vbkVuY29kZXIgPSByZXF1aXJlKCcuL3JlZWQtc29sb21vbi1lbmNvZGVyJylcbnZhciBWZXJzaW9uID0gcmVxdWlyZSgnLi92ZXJzaW9uJylcbnZhciBGb3JtYXRJbmZvID0gcmVxdWlyZSgnLi9mb3JtYXQtaW5mbycpXG52YXIgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpXG52YXIgU2VnbWVudHMgPSByZXF1aXJlKCcuL3NlZ21lbnRzJylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbi8qKlxuICogUVJDb2RlIGZvciBKYXZhU2NyaXB0XG4gKlxuICogbW9kaWZpZWQgYnkgUnlhbiBEYXkgZm9yIG5vZGVqcyBzdXBwb3J0XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEgUnlhbiBEYXlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAwOSBLYXp1aGlrbyBBcmFzZVxuLy9cbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbi8vXG4vLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuLy8gREVOU08gV0FWRSBJTkNPUlBPUkFURURcbi8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4vKipcbiAqIEFkZCBmaW5kZXIgcGF0dGVybnMgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZnVuY3Rpb24gc2V0dXBGaW5kZXJQYXR0ZXJuIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZVxuICB2YXIgcG9zID0gRmluZGVyUGF0dGVybi5nZXRQb3NpdGlvbnModmVyc2lvbilcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBwb3NbaV1bMF1cbiAgICB2YXIgY29sID0gcG9zW2ldWzFdXG5cbiAgICBmb3IgKHZhciByID0gLTE7IHIgPD0gNzsgcisrKSB7XG4gICAgICBpZiAocm93ICsgciA8PSAtMSB8fCBzaXplIDw9IHJvdyArIHIpIGNvbnRpbnVlXG5cbiAgICAgIGZvciAodmFyIGMgPSAtMTsgYyA8PSA3OyBjKyspIHtcbiAgICAgICAgaWYgKGNvbCArIGMgPD0gLTEgfHwgc2l6ZSA8PSBjb2wgKyBjKSBjb250aW51ZVxuXG4gICAgICAgIGlmICgociA+PSAwICYmIHIgPD0gNiAmJiAoYyA9PT0gMCB8fCBjID09PSA2KSkgfHxcbiAgICAgICAgICAoYyA+PSAwICYmIGMgPD0gNiAmJiAociA9PT0gMCB8fCByID09PSA2KSkgfHxcbiAgICAgICAgICAociA+PSAyICYmIHIgPD0gNCAmJiBjID49IDIgJiYgYyA8PSA0KSkge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIGZhbHNlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIHRpbWluZyBwYXR0ZXJuIGJpdHMgdG8gbWF0cml4XG4gKlxuICogTm90ZTogdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBiZWZvcmUge0BsaW5rIHNldHVwQWxpZ25tZW50UGF0dGVybn1cbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCBNb2R1bGVzIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzZXR1cFRpbWluZ1BhdHRlcm4gKG1hdHJpeCkge1xuICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplXG5cbiAgZm9yICh2YXIgciA9IDg7IHIgPCBzaXplIC0gODsgcisrKSB7XG4gICAgdmFyIHZhbHVlID0gciAlIDIgPT09IDBcbiAgICBtYXRyaXguc2V0KHIsIDYsIHZhbHVlLCB0cnVlKVxuICAgIG1hdHJpeC5zZXQoNiwgciwgdmFsdWUsIHRydWUpXG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgYWxpZ25tZW50IHBhdHRlcm5zIGJpdHMgdG8gbWF0cml4XG4gKlxuICogTm90ZTogdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBhZnRlciB7QGxpbmsgc2V0dXBUaW1pbmdQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cEFsaWdubWVudFBhdHRlcm4gKG1hdHJpeCwgdmVyc2lvbikge1xuICB2YXIgcG9zID0gQWxpZ25tZW50UGF0dGVybi5nZXRQb3NpdGlvbnModmVyc2lvbilcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBwb3NbaV1bMF1cbiAgICB2YXIgY29sID0gcG9zW2ldWzFdXG5cbiAgICBmb3IgKHZhciByID0gLTI7IHIgPD0gMjsgcisrKSB7XG4gICAgICBmb3IgKHZhciBjID0gLTI7IGMgPD0gMjsgYysrKSB7XG4gICAgICAgIGlmIChyID09PSAtMiB8fCByID09PSAyIHx8IGMgPT09IC0yIHx8IGMgPT09IDIgfHxcbiAgICAgICAgICAociA9PT0gMCAmJiBjID09PSAwKSkge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIGZhbHNlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIHZlcnNpb24gaW5mbyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cFZlcnNpb25JbmZvIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZVxuICB2YXIgYml0cyA9IFZlcnNpb24uZ2V0RW5jb2RlZEJpdHModmVyc2lvbilcbiAgdmFyIHJvdywgY29sLCBtb2RcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpKyspIHtcbiAgICByb3cgPSBNYXRoLmZsb29yKGkgLyAzKVxuICAgIGNvbCA9IGkgJSAzICsgc2l6ZSAtIDggLSAzXG4gICAgbW9kID0gKChiaXRzID4+IGkpICYgMSkgPT09IDFcblxuICAgIG1hdHJpeC5zZXQocm93LCBjb2wsIG1vZCwgdHJ1ZSlcbiAgICBtYXRyaXguc2V0KGNvbCwgcm93LCBtb2QsIHRydWUpXG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgZm9ybWF0IGluZm8gYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCAgICAgICAgICAgICAgIE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtFcnJvckNvcnJlY3Rpb25MZXZlbH0gICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7TnVtYmVyfSAgICBtYXNrUGF0dGVybiAgICAgICAgICBNYXNrIHBhdHRlcm4gcmVmZXJlbmNlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHNldHVwRm9ybWF0SW5mbyAobWF0cml4LCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pIHtcbiAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZVxuICB2YXIgYml0cyA9IEZvcm1hdEluZm8uZ2V0RW5jb2RlZEJpdHMoZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKVxuICB2YXIgaSwgbW9kXG5cbiAgZm9yIChpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICBtb2QgPSAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMVxuXG4gICAgLy8gdmVydGljYWxcbiAgICBpZiAoaSA8IDYpIHtcbiAgICAgIG1hdHJpeC5zZXQoaSwgOCwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSBpZiAoaSA8IDgpIHtcbiAgICAgIG1hdHJpeC5zZXQoaSArIDEsIDgsIG1vZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0cml4LnNldChzaXplIC0gMTUgKyBpLCA4LCBtb2QsIHRydWUpXG4gICAgfVxuXG4gICAgLy8gaG9yaXpvbnRhbFxuICAgIGlmIChpIDwgOCkge1xuICAgICAgbWF0cml4LnNldCg4LCBzaXplIC0gaSAtIDEsIG1vZCwgdHJ1ZSlcbiAgICB9IGVsc2UgaWYgKGkgPCA5KSB7XG4gICAgICBtYXRyaXguc2V0KDgsIDE1IC0gaSAtIDEgKyAxLCBtb2QsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdHJpeC5zZXQoOCwgMTUgLSBpIC0gMSwgbW9kLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIC8vIGZpeGVkIG1vZHVsZVxuICBtYXRyaXguc2V0KHNpemUgLSA4LCA4LCAxLCB0cnVlKVxufVxuXG4vKipcbiAqIEFkZCBlbmNvZGVkIGRhdGEgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7QnVmZmVyfSAgICBkYXRhICAgRGF0YSBjb2Rld29yZHNcbiAqL1xuZnVuY3Rpb24gc2V0dXBEYXRhIChtYXRyaXgsIGRhdGEpIHtcbiAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZVxuICB2YXIgaW5jID0gLTFcbiAgdmFyIHJvdyA9IHNpemUgLSAxXG4gIHZhciBiaXRJbmRleCA9IDdcbiAgdmFyIGJ5dGVJbmRleCA9IDBcblxuICBmb3IgKHZhciBjb2wgPSBzaXplIC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcbiAgICBpZiAoY29sID09PSA2KSBjb2wtLVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgMjsgYysrKSB7XG4gICAgICAgIGlmICghbWF0cml4LmlzUmVzZXJ2ZWQocm93LCBjb2wgLSBjKSkge1xuICAgICAgICAgIHZhciBkYXJrID0gZmFsc2VcblxuICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgZGFyayA9ICgoKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT09IDEpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0cml4LnNldChyb3csIGNvbCAtIGMsIGRhcmspXG4gICAgICAgICAgYml0SW5kZXgtLVxuXG4gICAgICAgICAgaWYgKGJpdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgYnl0ZUluZGV4KytcbiAgICAgICAgICAgIGJpdEluZGV4ID0gN1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3cgKz0gaW5jXG5cbiAgICAgIGlmIChyb3cgPCAwIHx8IHNpemUgPD0gcm93KSB7XG4gICAgICAgIHJvdyAtPSBpbmNcbiAgICAgICAgaW5jID0gLWluY1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBlbmNvZGVkIGNvZGV3b3JkcyBmcm9tIGRhdGEgaW5wdXRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtFcnJvckNvcnJlY3Rpb25MZXZlbH0gICBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtCeXRlRGF0YX0gZGF0YSAgICAgICAgICAgICAgICAgRGF0YSBpbnB1dFxuICogQHJldHVybiB7QnVmZmVyfSAgICAgICAgICAgICAgICAgICAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGEgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBzZWdtZW50cykge1xuICAvLyBQcmVwYXJlIGRhdGEgYnVmZmVyXG4gIHZhciBidWZmZXIgPSBuZXcgQml0QnVmZmVyKClcblxuICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gcHJlZml4IGRhdGEgd2l0aCBtb2RlIGluZGljYXRvciAoNCBiaXRzKVxuICAgIGJ1ZmZlci5wdXQoZGF0YS5tb2RlLmJpdCwgNClcblxuICAgIC8vIFByZWZpeCBkYXRhIHdpdGggY2hhcmFjdGVyIGNvdW50IGluZGljYXRvci5cbiAgICAvLyBUaGUgY2hhcmFjdGVyIGNvdW50IGluZGljYXRvciBpcyBhIHN0cmluZyBvZiBiaXRzIHRoYXQgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBiZWluZyBlbmNvZGVkLlxuICAgIC8vIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yIG11c3QgYmUgcGxhY2VkIGFmdGVyIHRoZSBtb2RlIGluZGljYXRvclxuICAgIC8vIGFuZCBtdXN0IGJlIGEgY2VydGFpbiBudW1iZXIgb2YgYml0cyBsb25nLCBkZXBlbmRpbmcgb24gdGhlIFFSIHZlcnNpb25cbiAgICAvLyBhbmQgZGF0YSBtb2RlXG4gICAgLy8gQHNlZSB7QGxpbmsgTW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3J9LlxuICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgTW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3IoZGF0YS5tb2RlLCB2ZXJzaW9uKSlcblxuICAgIC8vIGFkZCBiaW5hcnkgZGF0YSBzZXF1ZW5jZSB0byBidWZmZXJcbiAgICBkYXRhLndyaXRlKGJ1ZmZlcilcbiAgfSlcblxuICAvLyBDYWxjdWxhdGUgcmVxdWlyZWQgbnVtYmVyIG9mIGJpdHNcbiAgdmFyIHRvdGFsQ29kZXdvcmRzID0gVXRpbHMuZ2V0U3ltYm9sVG90YWxDb2Rld29yZHModmVyc2lvbilcbiAgdmFyIGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcbiAgdmFyIGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgPSAodG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzKSAqIDhcblxuICAvLyBBZGQgYSB0ZXJtaW5hdG9yLlxuICAvLyBJZiB0aGUgYml0IHN0cmluZyBpcyBzaG9ydGVyIHRoYW4gdGhlIHRvdGFsIG51bWJlciBvZiByZXF1aXJlZCBiaXRzLFxuICAvLyBhIHRlcm1pbmF0b3Igb2YgdXAgdG8gZm91ciAwcyBtdXN0IGJlIGFkZGVkIHRvIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzdHJpbmcuXG4gIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIG1vcmUgdGhhbiBmb3VyIGJpdHMgc2hvcnRlciB0aGFuIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgYml0cyxcbiAgLy8gYWRkIGZvdXIgMHMgdG8gdGhlIGVuZC5cbiAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gZGF0YVRvdGFsQ29kZXdvcmRzQml0cykge1xuICAgIGJ1ZmZlci5wdXQoMCwgNClcbiAgfVxuXG4gIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIGZld2VyIHRoYW4gZm91ciBiaXRzIHNob3J0ZXIsIGFkZCBvbmx5IHRoZSBudW1iZXIgb2YgMHMgdGhhdFxuICAvLyBhcmUgbmVlZGVkIHRvIHJlYWNoIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgYml0cy5cblxuICAvLyBBZnRlciBhZGRpbmcgdGhlIHRlcm1pbmF0b3IsIGlmIHRoZSBudW1iZXIgb2YgYml0cyBpbiB0aGUgc3RyaW5nIGlzIG5vdCBhIG11bHRpcGxlIG9mIDgsXG4gIC8vIHBhZCB0aGUgc3RyaW5nIG9uIHRoZSByaWdodCB3aXRoIDBzIHRvIG1ha2UgdGhlIHN0cmluZydzIGxlbmd0aCBhIG11bHRpcGxlIG9mIDguXG4gIHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9PSAwKSB7XG4gICAgYnVmZmVyLnB1dEJpdCgwKVxuICB9XG5cbiAgLy8gQWRkIHBhZCBieXRlcyBpZiB0aGUgc3RyaW5nIGlzIHN0aWxsIHNob3J0ZXIgdGhhbiB0aGUgdG90YWwgbnVtYmVyIG9mIHJlcXVpcmVkIGJpdHMuXG4gIC8vIEV4dGVuZCB0aGUgYnVmZmVyIHRvIGZpbGwgdGhlIGRhdGEgY2FwYWNpdHkgb2YgdGhlIHN5bWJvbCBjb3JyZXNwb25kaW5nIHRvXG4gIC8vIHRoZSBWZXJzaW9uIGFuZCBFcnJvciBDb3JyZWN0aW9uIExldmVsIGJ5IGFkZGluZyB0aGUgUGFkIENvZGV3b3JkcyAxMTEwMTEwMCAoMHhFQylcbiAgLy8gYW5kIDAwMDEwMDAxICgweDExKSBhbHRlcm5hdGVseS5cbiAgdmFyIHJlbWFpbmluZ0J5dGUgPSAoZGF0YVRvdGFsQ29kZXdvcmRzQml0cyAtIGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSkgLyA4XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtYWluaW5nQnl0ZTsgaSsrKSB7XG4gICAgYnVmZmVyLnB1dChpICUgMiA/IDB4MTEgOiAweEVDLCA4KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNvZGV3b3JkcyhidWZmZXIsIHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxufVxuXG4vKipcbiAqIEVuY29kZSBpbnB1dCBkYXRhIHdpdGggUmVlZC1Tb2xvbW9uIGFuZCByZXR1cm4gY29kZXdvcmRzIHdpdGhcbiAqIHJlbGF0aXZlIGVycm9yIGNvcnJlY3Rpb24gYml0c1xuICpcbiAqIEBwYXJhbSAge0JpdEJ1ZmZlcn0gYml0QnVmZmVyICAgICAgICAgICAgRGF0YSB0byBlbmNvZGVcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtFcnJvckNvcnJlY3Rpb25MZXZlbH0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHJldHVybiB7QnVmZmVyfSAgICAgICAgICAgICAgICAgICAgICAgICBCdWZmZXIgY29udGFpbmluZyBlbmNvZGVkIGNvZGV3b3Jkc1xuICovXG5mdW5jdGlvbiBjcmVhdGVDb2Rld29yZHMgKGJpdEJ1ZmZlciwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgLy8gVG90YWwgY29kZXdvcmRzIGZvciB0aGlzIFFSIGNvZGUgdmVyc2lvbiAoRGF0YSArIEVycm9yIGNvcnJlY3Rpb24pXG4gIHZhciB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXG4gIHZhciBlY1RvdGFsQ29kZXdvcmRzID0gRUNDb2RlLmdldFRvdGFsQ29kZXdvcmRzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGRhdGEgY29kZXdvcmRzXG4gIHZhciBkYXRhVG90YWxDb2Rld29yZHMgPSB0b3RhbENvZGV3b3JkcyAtIGVjVG90YWxDb2Rld29yZHNcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgYmxvY2tzXG4gIHZhciBlY1RvdGFsQmxvY2tzID0gRUNDb2RlLmdldEJsb2Nrc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuXG4gIC8vIENhbGN1bGF0ZSBob3cgbWFueSBibG9ja3MgZWFjaCBncm91cCBzaG91bGQgY29udGFpblxuICB2YXIgYmxvY2tzSW5Hcm91cDIgPSB0b3RhbENvZGV3b3JkcyAlIGVjVG90YWxCbG9ja3NcbiAgdmFyIGJsb2Nrc0luR3JvdXAxID0gZWNUb3RhbEJsb2NrcyAtIGJsb2Nrc0luR3JvdXAyXG5cbiAgdmFyIHRvdGFsQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKHRvdGFsQ29kZXdvcmRzIC8gZWNUb3RhbEJsb2NrcylcblxuICB2YXIgZGF0YUNvZGV3b3Jkc0luR3JvdXAxID0gTWF0aC5mbG9vcihkYXRhVG90YWxDb2Rld29yZHMgLyBlY1RvdGFsQmxvY2tzKVxuICB2YXIgZGF0YUNvZGV3b3Jkc0luR3JvdXAyID0gZGF0YUNvZGV3b3Jkc0luR3JvdXAxICsgMVxuXG4gIC8vIE51bWJlciBvZiBFQyBjb2Rld29yZHMgaXMgdGhlIHNhbWUgZm9yIGJvdGggZ3JvdXBzXG4gIHZhciBlY0NvdW50ID0gdG90YWxDb2Rld29yZHNJbkdyb3VwMSAtIGRhdGFDb2Rld29yZHNJbkdyb3VwMVxuXG4gIC8vIEluaXRpYWxpemUgYSBSZWVkLVNvbG9tb24gZW5jb2RlciB3aXRoIGEgZ2VuZXJhdG9yIHBvbHlub21pYWwgb2YgZGVncmVlIGVjQ291bnRcbiAgdmFyIHJzID0gbmV3IFJlZWRTb2xvbW9uRW5jb2RlcihlY0NvdW50KVxuXG4gIHZhciBvZmZzZXQgPSAwXG4gIHZhciBkY0RhdGEgPSBuZXcgQXJyYXkoZWNUb3RhbEJsb2NrcylcbiAgdmFyIGVjRGF0YSA9IG5ldyBBcnJheShlY1RvdGFsQmxvY2tzKVxuICB2YXIgbWF4RGF0YVNpemUgPSAwXG4gIHZhciBidWZmZXIgPSBCdWZmZXJVdGlsLmZyb20oYml0QnVmZmVyLmJ1ZmZlcilcblxuICAvLyBEaXZpZGUgdGhlIGJ1ZmZlciBpbnRvIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgYmxvY2tzXG4gIGZvciAodmFyIGIgPSAwOyBiIDwgZWNUb3RhbEJsb2NrczsgYisrKSB7XG4gICAgdmFyIGRhdGFTaXplID0gYiA8IGJsb2Nrc0luR3JvdXAxID8gZGF0YUNvZGV3b3Jkc0luR3JvdXAxIDogZGF0YUNvZGV3b3Jkc0luR3JvdXAyXG5cbiAgICAvLyBleHRyYWN0IGEgYmxvY2sgb2YgZGF0YSBmcm9tIGJ1ZmZlclxuICAgIGRjRGF0YVtiXSA9IGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGRhdGFTaXplKVxuXG4gICAgLy8gQ2FsY3VsYXRlIEVDIGNvZGV3b3JkcyBmb3IgdGhpcyBkYXRhIGJsb2NrXG4gICAgZWNEYXRhW2JdID0gcnMuZW5jb2RlKGRjRGF0YVtiXSlcblxuICAgIG9mZnNldCArPSBkYXRhU2l6ZVxuICAgIG1heERhdGFTaXplID0gTWF0aC5tYXgobWF4RGF0YVNpemUsIGRhdGFTaXplKVxuICB9XG5cbiAgLy8gQ3JlYXRlIGZpbmFsIGRhdGFcbiAgLy8gSW50ZXJsZWF2ZSB0aGUgZGF0YSBhbmQgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMgZnJvbSBlYWNoIGJsb2NrXG4gIHZhciBkYXRhID0gQnVmZmVyVXRpbC5hbGxvYyh0b3RhbENvZGV3b3JkcylcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgaSwgclxuXG4gIC8vIEFkZCBkYXRhIGNvZGV3b3Jkc1xuICBmb3IgKGkgPSAwOyBpIDwgbWF4RGF0YVNpemU7IGkrKykge1xuICAgIGZvciAociA9IDA7IHIgPCBlY1RvdGFsQmxvY2tzOyByKyspIHtcbiAgICAgIGlmIChpIDwgZGNEYXRhW3JdLmxlbmd0aCkge1xuICAgICAgICBkYXRhW2luZGV4KytdID0gZGNEYXRhW3JdW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwZWQgRUMgY29kZXdvcmRzXG4gIGZvciAoaSA9IDA7IGkgPCBlY0NvdW50OyBpKyspIHtcbiAgICBmb3IgKHIgPSAwOyByIDwgZWNUb3RhbEJsb2NrczsgcisrKSB7XG4gICAgICBkYXRhW2luZGV4KytdID0gZWNEYXRhW3JdW2ldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBCdWlsZCBRUiBDb2RlIHN5bWJvbFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICAgICAgSW5wdXQgc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZXRpb25MZXZlbH0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgbGV2ZWxcbiAqIEBwYXJhbSAge01hc2tQYXR0ZXJufSBtYXNrUGF0dGVybiAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCBjb250YWluaW5nIHN5bWJvbCBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN5bWJvbCAoZGF0YSwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKSB7XG4gIHZhciBzZWdtZW50c1xuXG4gIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgc2VnbWVudHMgPSBTZWdtZW50cy5mcm9tQXJyYXkoZGF0YSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZXN0aW1hdGVkVmVyc2lvbiA9IHZlcnNpb25cblxuICAgIGlmICghZXN0aW1hdGVkVmVyc2lvbikge1xuICAgICAgdmFyIHJhd1NlZ21lbnRzID0gU2VnbWVudHMucmF3U3BsaXQoZGF0YSlcblxuICAgICAgLy8gRXN0aW1hdGUgYmVzdCB2ZXJzaW9uIHRoYXQgY2FuIGNvbnRhaW4gcmF3IHNwbGl0dGVkIHNlZ21lbnRzXG4gICAgICBlc3RpbWF0ZWRWZXJzaW9uID0gVmVyc2lvbi5nZXRCZXN0VmVyc2lvbkZvckRhdGEocmF3U2VnbWVudHMsXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuICAgIH1cblxuICAgIC8vIEJ1aWxkIG9wdGltaXplZCBzZWdtZW50c1xuICAgIC8vIElmIGVzdGltYXRlZCB2ZXJzaW9uIGlzIHVuZGVmaW5lZCwgdHJ5IHdpdGggdGhlIGhpZ2hlc3QgdmVyc2lvblxuICAgIHNlZ21lbnRzID0gU2VnbWVudHMuZnJvbVN0cmluZyhkYXRhLCBlc3RpbWF0ZWRWZXJzaW9uIHx8IDQwKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkYXRhJylcbiAgfVxuXG4gIC8vIEdldCB0aGUgbWluIHZlcnNpb24gdGhhdCBjYW4gY29udGFpbiBkYXRhXG4gIHZhciBiZXN0VmVyc2lvbiA9IFZlcnNpb24uZ2V0QmVzdFZlcnNpb25Gb3JEYXRhKHNlZ21lbnRzLFxuICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG5cbiAgLy8gSWYgbm8gdmVyc2lvbiBpcyBmb3VuZCwgZGF0YSBjYW5ub3QgYmUgc3RvcmVkXG4gIGlmICghYmVzdFZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhbW91bnQgb2YgZGF0YSBpcyB0b28gYmlnIHRvIGJlIHN0b3JlZCBpbiBhIFFSIENvZGUnKVxuICB9XG5cbiAgLy8gSWYgbm90IHNwZWNpZmllZCwgdXNlIG1pbiB2ZXJzaW9uIGFzIGRlZmF1bHRcbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgdmVyc2lvbiA9IGJlc3RWZXJzaW9uXG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCB2ZXJzaW9uIGNhbiBjb250YWluIHRoZSBkYXRhXG4gIH0gZWxzZSBpZiAodmVyc2lvbiA8IGJlc3RWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcXG4nICtcbiAgICAgICdUaGUgY2hvc2VuIFFSIENvZGUgdmVyc2lvbiBjYW5ub3QgY29udGFpbiB0aGlzIGFtb3VudCBvZiBkYXRhLlxcbicgK1xuICAgICAgJ01pbmltdW0gdmVyc2lvbiByZXF1aXJlZCB0byBzdG9yZSBjdXJyZW50IGRhdGEgaXM6ICcgKyBiZXN0VmVyc2lvbiArICcuXFxuJ1xuICAgIClcbiAgfVxuXG4gIHZhciBkYXRhQml0cyA9IGNyZWF0ZURhdGEodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIHNlZ21lbnRzKVxuXG4gIC8vIEFsbG9jYXRlIG1hdHJpeCBidWZmZXJcbiAgdmFyIG1vZHVsZUNvdW50ID0gVXRpbHMuZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uKVxuICB2YXIgbW9kdWxlcyA9IG5ldyBCaXRNYXRyaXgobW9kdWxlQ291bnQpXG5cbiAgLy8gQWRkIGZ1bmN0aW9uIG1vZHVsZXNcbiAgc2V0dXBGaW5kZXJQYXR0ZXJuKG1vZHVsZXMsIHZlcnNpb24pXG4gIHNldHVwVGltaW5nUGF0dGVybihtb2R1bGVzKVxuICBzZXR1cEFsaWdubWVudFBhdHRlcm4obW9kdWxlcywgdmVyc2lvbilcblxuICAvLyBBZGQgdGVtcG9yYXJ5IGR1bW15IGJpdHMgZm9yIGZvcm1hdCBpbmZvIGp1c3QgdG8gc2V0IHRoZW0gYXMgcmVzZXJ2ZWQuXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnQgdGhlc2UgYml0cyBmcm9tIGJlaW5nIG1hc2tlZCBieSB7QGxpbmsgTWFza1BhdHRlcm4uYXBwbHlNYXNrfVxuICAvLyBzaW5jZSB0aGUgbWFza2luZyBvcGVyYXRpb24gbXVzdCBiZSBwZXJmb3JtZWQgb25seSBvbiB0aGUgZW5jb2RpbmcgcmVnaW9uLlxuICAvLyBUaGVzZSBibG9ja3Mgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGNvcnJlY3QgdmFsdWVzIGxhdGVyIGluIGNvZGUuXG4gIHNldHVwRm9ybWF0SW5mbyhtb2R1bGVzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgMClcblxuICBpZiAodmVyc2lvbiA+PSA3KSB7XG4gICAgc2V0dXBWZXJzaW9uSW5mbyhtb2R1bGVzLCB2ZXJzaW9uKVxuICB9XG5cbiAgLy8gQWRkIGRhdGEgY29kZXdvcmRzXG4gIHNldHVwRGF0YShtb2R1bGVzLCBkYXRhQml0cylcblxuICBpZiAoaXNOYU4obWFza1BhdHRlcm4pKSB7XG4gICAgLy8gRmluZCBiZXN0IG1hc2sgcGF0dGVyblxuICAgIG1hc2tQYXR0ZXJuID0gTWFza1BhdHRlcm4uZ2V0QmVzdE1hc2sobW9kdWxlcyxcbiAgICAgIHNldHVwRm9ybWF0SW5mby5iaW5kKG51bGwsIG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsKSlcbiAgfVxuXG4gIC8vIEFwcGx5IG1hc2sgcGF0dGVyblxuICBNYXNrUGF0dGVybi5hcHBseU1hc2sobWFza1BhdHRlcm4sIG1vZHVsZXMpXG5cbiAgLy8gUmVwbGFjZSBmb3JtYXQgaW5mbyBiaXRzIHdpdGggY29ycmVjdCB2YWx1ZXNcbiAgc2V0dXBGb3JtYXRJbmZvKG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybilcblxuICByZXR1cm4ge1xuICAgIG1vZHVsZXM6IG1vZHVsZXMsXG4gICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICBlcnJvckNvcnJlY3Rpb25MZXZlbDogZXJyb3JDb3JyZWN0aW9uTGV2ZWwsXG4gICAgbWFza1BhdHRlcm46IG1hc2tQYXR0ZXJuLFxuICAgIHNlZ21lbnRzOiBzZWdtZW50c1xuICB9XG59XG5cbi8qKlxuICogUVIgQ29kZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IGRhdGEgICAgICAgICAgICAgICAgIElucHV0IGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy52ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMudG9TSklTRnVuYyAgICAgICAgIEhlbHBlciBmdW5jIHRvIGNvbnZlcnQgdXRmOCB0byBzamlzXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlIChkYXRhLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGF0YSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGlucHV0IHRleHQnKVxuICB9XG5cbiAgdmFyIGVycm9yQ29ycmVjdGlvbkxldmVsID0gRUNMZXZlbC5NXG4gIHZhciB2ZXJzaW9uXG4gIHZhciBtYXNrXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFVzZSBoaWdoZXIgZXJyb3IgY29ycmVjdGlvbiBsZXZlbCBhcyBkZWZhdWx0XG4gICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFQ0xldmVsLmZyb20ob3B0aW9ucy5lcnJvckNvcnJlY3Rpb25MZXZlbCwgRUNMZXZlbC5NKVxuICAgIHZlcnNpb24gPSBWZXJzaW9uLmZyb20ob3B0aW9ucy52ZXJzaW9uKVxuICAgIG1hc2sgPSBNYXNrUGF0dGVybi5mcm9tKG9wdGlvbnMubWFza1BhdHRlcm4pXG5cbiAgICBpZiAob3B0aW9ucy50b1NKSVNGdW5jKSB7XG4gICAgICBVdGlscy5zZXRUb1NKSVNGdW5jdGlvbihvcHRpb25zLnRvU0pJU0Z1bmMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN5bWJvbChkYXRhLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFzaylcbn1cbiIsInZhciBCdWZmZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvYnVmZmVyJylcbnZhciBQb2x5bm9taWFsID0gcmVxdWlyZSgnLi9wb2x5bm9taWFsJylcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXJcblxuZnVuY3Rpb24gUmVlZFNvbG9tb25FbmNvZGVyIChkZWdyZWUpIHtcbiAgdGhpcy5nZW5Qb2x5ID0gdW5kZWZpbmVkXG4gIHRoaXMuZGVncmVlID0gZGVncmVlXG5cbiAgaWYgKHRoaXMuZGVncmVlKSB0aGlzLmluaXRpYWxpemUodGhpcy5kZWdyZWUpXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZW5jb2Rlci5cbiAqIFRoZSBpbnB1dCBwYXJhbSBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gZGVncmVlXG4gKi9cblJlZWRTb2xvbW9uRW5jb2Rlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUgKGRlZ3JlZSkge1xuICAvLyBjcmVhdGUgYW4gaXJyZWR1Y2libGUgZ2VuZXJhdG9yIHBvbHlub21pYWxcbiAgdGhpcy5kZWdyZWUgPSBkZWdyZWVcbiAgdGhpcy5nZW5Qb2x5ID0gUG9seW5vbWlhbC5nZW5lcmF0ZUVDUG9seW5vbWlhbCh0aGlzLmRlZ3JlZSlcbn1cblxuLyoqXG4gKiBFbmNvZGVzIGEgY2h1bmsgb2YgZGF0YVxuICpcbiAqIEBwYXJhbSAge0J1ZmZlcn0gZGF0YSBCdWZmZXIgY29udGFpbmluZyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtCdWZmZXJ9ICAgICAgQnVmZmVyIGNvbnRhaW5pbmcgZW5jb2RlZCBkYXRhXG4gKi9cblJlZWRTb2xvbW9uRW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlIChkYXRhKSB7XG4gIGlmICghdGhpcy5nZW5Qb2x5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbmNvZGVyIG5vdCBpbml0aWFsaXplZCcpXG4gIH1cblxuICAvLyBDYWxjdWxhdGUgRUMgZm9yIHRoaXMgZGF0YSBibG9ja1xuICAvLyBleHRlbmRzIGRhdGEgc2l6ZSB0byBkYXRhK2dlblBvbHkgc2l6ZVxuICB2YXIgcGFkID0gQnVmZmVyVXRpbC5hbGxvYyh0aGlzLmRlZ3JlZSlcbiAgdmFyIHBhZGRlZERhdGEgPSBCdWZmZXIuY29uY2F0KFtkYXRhLCBwYWRdLCBkYXRhLmxlbmd0aCArIHRoaXMuZGVncmVlKVxuXG4gIC8vIFRoZSBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyBhcmUgdGhlIHJlbWFpbmRlciBhZnRlciBkaXZpZGluZyB0aGUgZGF0YSBjb2Rld29yZHNcbiAgLy8gYnkgYSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICB2YXIgcmVtYWluZGVyID0gUG9seW5vbWlhbC5tb2QocGFkZGVkRGF0YSwgdGhpcy5nZW5Qb2x5KVxuXG4gIC8vIHJldHVybiBFQyBkYXRhIGJsb2NrcyAobGFzdCBuIGJ5dGUsIHdoZXJlIG4gaXMgdGhlIGRlZ3JlZSBvZiBnZW5Qb2x5KVxuICAvLyBJZiBjb2VmZmljaWVudHMgbnVtYmVyIGluIHJlbWFpbmRlciBhcmUgbGVzcyB0aGFuIGdlblBvbHkgZGVncmVlLFxuICAvLyBwYWQgd2l0aCAwcyB0byB0aGUgbGVmdCB0byByZWFjaCB0aGUgbmVlZGVkIG51bWJlciBvZiBjb2VmZmljaWVudHNcbiAgdmFyIHN0YXJ0ID0gdGhpcy5kZWdyZWUgLSByZW1haW5kZXIubGVuZ3RoXG4gIGlmIChzdGFydCA+IDApIHtcbiAgICB2YXIgYnVmZiA9IEJ1ZmZlclV0aWwuYWxsb2ModGhpcy5kZWdyZWUpXG4gICAgcmVtYWluZGVyLmNvcHkoYnVmZiwgc3RhcnQpXG5cbiAgICByZXR1cm4gYnVmZlxuICB9XG5cbiAgcmV0dXJuIHJlbWFpbmRlclxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZWRTb2xvbW9uRW5jb2RlclxuIiwidmFyIG51bWVyaWMgPSAnWzAtOV0rJ1xudmFyIGFscGhhbnVtZXJpYyA9ICdbQS1aICQlKitcXFxcLS4vOl0rJ1xudmFyIGthbmppID0gJyg/Olt1MzAwMC11MzAzRl18W3UzMDQwLXUzMDlGXXxbdTMwQTAtdTMwRkZdfCcgK1xuICAnW3VGRjAwLXVGRkVGXXxbdTRFMDAtdTlGQUZdfFt1MjYwNS11MjYwNl18W3UyMTkwLXUyMTk1XXx1MjAzQnwnICtcbiAgJ1t1MjAxMHUyMDE1dTIwMTh1MjAxOXUyMDI1dTIwMjZ1MjAxQ3UyMDFEdTIyMjV1MjI2MF18JyArXG4gICdbdTAzOTEtdTA0NTFdfFt1MDBBN3UwMEE4dTAwQjF1MDBCNHUwMEQ3dTAwRjddKSsnXG5rYW5qaSA9IGthbmppLnJlcGxhY2UoL3UvZywgJ1xcXFx1JylcblxudmFyIGJ5dGUgPSAnKD86KD8hW0EtWjAtOSAkJSorXFxcXC0uLzpdfCcgKyBrYW5qaSArICcpKD86LnxbXFxyXFxuXSkpKydcblxuZXhwb3J0cy5LQU5KSSA9IG5ldyBSZWdFeHAoa2FuamksICdnJylcbmV4cG9ydHMuQllURV9LQU5KSSA9IG5ldyBSZWdFeHAoJ1teQS1aMC05ICQlKitcXFxcLS4vOl0rJywgJ2cnKVxuZXhwb3J0cy5CWVRFID0gbmV3IFJlZ0V4cChieXRlLCAnZycpXG5leHBvcnRzLk5VTUVSSUMgPSBuZXcgUmVnRXhwKG51bWVyaWMsICdnJylcbmV4cG9ydHMuQUxQSEFOVU1FUklDID0gbmV3IFJlZ0V4cChhbHBoYW51bWVyaWMsICdnJylcblxudmFyIFRFU1RfS0FOSkkgPSBuZXcgUmVnRXhwKCdeJyArIGthbmppICsgJyQnKVxudmFyIFRFU1RfTlVNRVJJQyA9IG5ldyBSZWdFeHAoJ14nICsgbnVtZXJpYyArICckJylcbnZhciBURVNUX0FMUEhBTlVNRVJJQyA9IG5ldyBSZWdFeHAoJ15bQS1aMC05ICQlKitcXFxcLS4vOl0rJCcpXG5cbmV4cG9ydHMudGVzdEthbmppID0gZnVuY3Rpb24gdGVzdEthbmppIChzdHIpIHtcbiAgcmV0dXJuIFRFU1RfS0FOSkkudGVzdChzdHIpXG59XG5cbmV4cG9ydHMudGVzdE51bWVyaWMgPSBmdW5jdGlvbiB0ZXN0TnVtZXJpYyAoc3RyKSB7XG4gIHJldHVybiBURVNUX05VTUVSSUMudGVzdChzdHIpXG59XG5cbmV4cG9ydHMudGVzdEFscGhhbnVtZXJpYyA9IGZ1bmN0aW9uIHRlc3RBbHBoYW51bWVyaWMgKHN0cikge1xuICByZXR1cm4gVEVTVF9BTFBIQU5VTUVSSUMudGVzdChzdHIpXG59XG4iLCJ2YXIgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpXG52YXIgTnVtZXJpY0RhdGEgPSByZXF1aXJlKCcuL251bWVyaWMtZGF0YScpXG52YXIgQWxwaGFudW1lcmljRGF0YSA9IHJlcXVpcmUoJy4vYWxwaGFudW1lcmljLWRhdGEnKVxudmFyIEJ5dGVEYXRhID0gcmVxdWlyZSgnLi9ieXRlLWRhdGEnKVxudmFyIEthbmppRGF0YSA9IHJlcXVpcmUoJy4va2FuamktZGF0YScpXG52YXIgUmVnZXggPSByZXF1aXJlKCcuL3JlZ2V4JylcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxudmFyIGRpamtzdHJhID0gcmVxdWlyZSgnZGlqa3N0cmFqcycpXG5cbi8qKlxuICogUmV0dXJucyBVVEY4IGJ5dGUgbGVuZ3RoXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBOdW1iZXIgb2YgYnl0ZVxuICovXG5mdW5jdGlvbiBnZXRTdHJpbmdCeXRlTGVuZ3RoIChzdHIpIHtcbiAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKS5sZW5ndGhcbn1cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIHNlZ21lbnRzIG9mIHRoZSBzcGVjaWZpZWQgbW9kZVxuICogZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge01vZGV9ICAgbW9kZSBTZWdtZW50IG1vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyICBTdHJpbmcgdG8gcHJvY2Vzc1xuICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gZ2V0U2VnbWVudHMgKHJlZ2V4LCBtb2RlLCBzdHIpIHtcbiAgdmFyIHNlZ21lbnRzID0gW11cbiAgdmFyIHJlc3VsdFxuXG4gIHdoaWxlICgocmVzdWx0ID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAgZGF0YTogcmVzdWx0WzBdLFxuICAgICAgaW5kZXg6IHJlc3VsdC5pbmRleCxcbiAgICAgIG1vZGU6IG1vZGUsXG4gICAgICBsZW5ndGg6IHJlc3VsdFswXS5sZW5ndGhcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzXG59XG5cbi8qKlxuICogRXh0cmFjdHMgYSBzZXJpZXMgb2Ygc2VnbWVudHMgd2l0aCB0aGUgYXBwcm9wcmlhdGVcbiAqIG1vZGVzIGZyb20gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGFTdHIgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICovXG5mdW5jdGlvbiBnZXRTZWdtZW50c0Zyb21TdHJpbmcgKGRhdGFTdHIpIHtcbiAgdmFyIG51bVNlZ3MgPSBnZXRTZWdtZW50cyhSZWdleC5OVU1FUklDLCBNb2RlLk5VTUVSSUMsIGRhdGFTdHIpXG4gIHZhciBhbHBoYU51bVNlZ3MgPSBnZXRTZWdtZW50cyhSZWdleC5BTFBIQU5VTUVSSUMsIE1vZGUuQUxQSEFOVU1FUklDLCBkYXRhU3RyKVxuICB2YXIgYnl0ZVNlZ3NcbiAgdmFyIGthbmppU2Vnc1xuXG4gIGlmIChVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSkge1xuICAgIGJ5dGVTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQllURSwgTW9kZS5CWVRFLCBkYXRhU3RyKVxuICAgIGthbmppU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4LktBTkpJLCBNb2RlLktBTkpJLCBkYXRhU3RyKVxuICB9IGVsc2Uge1xuICAgIGJ5dGVTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQllURV9LQU5KSSwgTW9kZS5CWVRFLCBkYXRhU3RyKVxuICAgIGthbmppU2VncyA9IFtdXG4gIH1cblxuICB2YXIgc2VncyA9IG51bVNlZ3MuY29uY2F0KGFscGhhTnVtU2VncywgYnl0ZVNlZ3MsIGthbmppU2VncylcblxuICByZXR1cm4gc2Vnc1xuICAgIC5zb3J0KGZ1bmN0aW9uIChzMSwgczIpIHtcbiAgICAgIHJldHVybiBzMS5pbmRleCAtIHMyLmluZGV4XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IG9iai5kYXRhLFxuICAgICAgICBtb2RlOiBvYmoubW9kZSxcbiAgICAgICAgbGVuZ3RoOiBvYmoubGVuZ3RoXG4gICAgICB9XG4gICAgfSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGhvdyBtYW55IGJpdHMgYXJlIG5lZWRlZCB0byBlbmNvZGUgYSBzdHJpbmcgb2ZcbiAqIHNwZWNpZmllZCBsZW5ndGggd2l0aCB0aGUgc3BlY2lmaWVkIG1vZGVcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGxlbmd0aCBTdHJpbmcgbGVuZ3RoXG4gKiBAcGFyYW0gIHtNb2RlfSBtb2RlICAgICBTZWdtZW50IG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgIEJpdCBsZW5ndGhcbiAqL1xuZnVuY3Rpb24gZ2V0U2VnbWVudEJpdHNMZW5ndGggKGxlbmd0aCwgbW9kZSkge1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgIHJldHVybiBOdW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgcmV0dXJuIEFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aChsZW5ndGgpXG4gICAgY2FzZSBNb2RlLktBTkpJOlxuICAgICAgcmV0dXJuIEthbmppRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgICBjYXNlIE1vZGUuQllURTpcbiAgICAgIHJldHVybiBCeXRlRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlcyBhZGphY2VudCBzZWdtZW50cyB3aGljaCBoYXZlIHRoZSBzYW1lIG1vZGVcbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gc2VncyBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIG1lcmdlU2VnbWVudHMgKHNlZ3MpIHtcbiAgcmV0dXJuIHNlZ3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICB2YXIgcHJldlNlZyA9IGFjYy5sZW5ndGggLSAxID49IDAgPyBhY2NbYWNjLmxlbmd0aCAtIDFdIDogbnVsbFxuICAgIGlmIChwcmV2U2VnICYmIHByZXZTZWcubW9kZSA9PT0gY3Vyci5tb2RlKSB7XG4gICAgICBhY2NbYWNjLmxlbmd0aCAtIDFdLmRhdGEgKz0gY3Vyci5kYXRhXG4gICAgICByZXR1cm4gYWNjXG4gICAgfVxuXG4gICAgYWNjLnB1c2goY3VycilcbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIG5vZGVzIGNvbWJpbmF0aW9uIHdoaWNoXG4gKiB3aWxsIGJlIHVzZWQgdG8gYnVpbGQgYSBzZWdtZW50cyBncmFwaC5cbiAqXG4gKiBOb2RlcyBhcmUgZGl2aWRlZCBieSBncm91cHMuIEVhY2ggZ3JvdXAgd2lsbCBjb250YWluIGEgbGlzdCBvZiBhbGwgdGhlIG1vZGVzXG4gKiBpbiB3aGljaCBpcyBwb3NzaWJsZSB0byBlbmNvZGUgdGhlIGdpdmVuIHRleHQuXG4gKlxuICogRm9yIGV4YW1wbGUgdGhlIHRleHQgJzEyMzQ1JyBjYW4gYmUgZW5jb2RlZCBhcyBOdW1lcmljLCBBbHBoYW51bWVyaWMgb3IgQnl0ZS5cbiAqIFRoZSBncm91cCBmb3IgJzEyMzQ1JyB3aWxsIGNvbnRhaW4gdGhlbiAzIG9iamVjdHMsIG9uZSBmb3IgZWFjaFxuICogcG9zc2libGUgZW5jb2RpbmcgbW9kZS5cbiAqXG4gKiBFYWNoIG5vZGUgcmVwcmVzZW50cyBhIHBvc3NpYmxlIHNlZ21lbnQuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IHNlZ3MgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICogQHJldHVybiB7QXJyYXl9ICAgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICovXG5mdW5jdGlvbiBidWlsZE5vZGVzIChzZWdzKSB7XG4gIHZhciBub2RlcyA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2Vncy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzZWcgPSBzZWdzW2ldXG5cbiAgICBzd2l0Y2ggKHNlZy5tb2RlKSB7XG4gICAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgICAgbm9kZXMucHVzaChbc2VnLFxuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQUxQSEFOVU1FUklDLCBsZW5ndGg6IHNlZy5sZW5ndGggfSxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogc2VnLmxlbmd0aCB9XG4gICAgICAgIF0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogTW9kZS5CWVRFLCBsZW5ndGg6IHNlZy5sZW5ndGggfVxuICAgICAgICBdKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBNb2RlLktBTkpJOlxuICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogTW9kZS5CWVRFLCBsZW5ndGg6IGdldFN0cmluZ0J5dGVMZW5ndGgoc2VnLmRhdGEpIH1cbiAgICAgICAgXSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTW9kZS5CWVRFOlxuICAgICAgICBub2Rlcy5wdXNoKFtcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogZ2V0U3RyaW5nQnl0ZUxlbmd0aChzZWcuZGF0YSkgfVxuICAgICAgICBdKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2Rlc1xufVxuXG4vKipcbiAqIEJ1aWxkcyBhIGdyYXBoIGZyb20gYSBsaXN0IG9mIG5vZGVzLlxuICogQWxsIHNlZ21lbnRzIGluIGVhY2ggbm9kZSBncm91cCB3aWxsIGJlIGNvbm5lY3RlZCB3aXRoIGFsbCB0aGUgc2VnbWVudHMgb2ZcbiAqIHRoZSBuZXh0IGdyb3VwIGFuZCBzbyBvbi5cbiAqXG4gKiBBdCBlYWNoIGNvbm5lY3Rpb24gd2lsbCBiZSBhc3NpZ25lZCBhIHdlaWdodCBkZXBlbmRpbmcgb24gdGhlXG4gKiBzZWdtZW50J3MgYnl0ZSBsZW5ndGguXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IG5vZGVzICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBHcmFwaCBvZiBhbGwgcG9zc2libGUgc2VnbWVudHNcbiAqL1xuZnVuY3Rpb24gYnVpbGRHcmFwaCAobm9kZXMsIHZlcnNpb24pIHtcbiAgdmFyIHRhYmxlID0ge31cbiAgdmFyIGdyYXBoID0geydzdGFydCc6IHt9fVxuICB2YXIgcHJldk5vZGVJZHMgPSBbJ3N0YXJ0J11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGVHcm91cCA9IG5vZGVzW2ldXG4gICAgdmFyIGN1cnJlbnROb2RlSWRzID0gW11cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbm9kZUdyb3VwLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVHcm91cFtqXVxuICAgICAgdmFyIGtleSA9ICcnICsgaSArIGpcblxuICAgICAgY3VycmVudE5vZGVJZHMucHVzaChrZXkpXG4gICAgICB0YWJsZVtrZXldID0geyBub2RlOiBub2RlLCBsYXN0Q291bnQ6IDAgfVxuICAgICAgZ3JhcGhba2V5XSA9IHt9XG5cbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgcHJldk5vZGVJZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIHByZXZOb2RlSWQgPSBwcmV2Tm9kZUlkc1tuXVxuXG4gICAgICAgIGlmICh0YWJsZVtwcmV2Tm9kZUlkXSAmJiB0YWJsZVtwcmV2Tm9kZUlkXS5ub2RlLm1vZGUgPT09IG5vZGUubW9kZSkge1xuICAgICAgICAgIGdyYXBoW3ByZXZOb2RlSWRdW2tleV0gPVxuICAgICAgICAgICAgZ2V0U2VnbWVudEJpdHNMZW5ndGgodGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ICsgbm9kZS5sZW5ndGgsIG5vZGUubW9kZSkgLVxuICAgICAgICAgICAgZ2V0U2VnbWVudEJpdHNMZW5ndGgodGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50LCBub2RlLm1vZGUpXG5cbiAgICAgICAgICB0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQgKz0gbm9kZS5sZW5ndGhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGFibGVbcHJldk5vZGVJZF0pIHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCA9IG5vZGUubGVuZ3RoXG5cbiAgICAgICAgICBncmFwaFtwcmV2Tm9kZUlkXVtrZXldID0gZ2V0U2VnbWVudEJpdHNMZW5ndGgobm9kZS5sZW5ndGgsIG5vZGUubW9kZSkgK1xuICAgICAgICAgICAgNCArIE1vZGUuZ2V0Q2hhckNvdW50SW5kaWNhdG9yKG5vZGUubW9kZSwgdmVyc2lvbikgLy8gc3dpdGNoIGNvc3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHByZXZOb2RlSWRzID0gY3VycmVudE5vZGVJZHNcbiAgfVxuXG4gIGZvciAobiA9IDA7IG4gPCBwcmV2Tm9kZUlkcy5sZW5ndGg7IG4rKykge1xuICAgIGdyYXBoW3ByZXZOb2RlSWRzW25dXVsnZW5kJ10gPSAwXG4gIH1cblxuICByZXR1cm4geyBtYXA6IGdyYXBoLCB0YWJsZTogdGFibGUgfVxufVxuXG4vKipcbiAqIEJ1aWxkcyBhIHNlZ21lbnQgZnJvbSBhIHNwZWNpZmllZCBkYXRhIGFuZCBtb2RlLlxuICogSWYgYSBtb2RlIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBtb3JlIHN1aXRhYmxlIHdpbGwgYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGEgICAgICAgICAgICAgSW5wdXQgZGF0YVxuICogQHBhcmFtICB7TW9kZSB8IFN0cmluZ30gbW9kZXNIaW50IERhdGEgbW9kZVxuICogQHJldHVybiB7U2VnbWVudH0gICAgICAgICAgICAgICAgIFNlZ21lbnRcbiAqL1xuZnVuY3Rpb24gYnVpbGRTaW5nbGVTZWdtZW50IChkYXRhLCBtb2Rlc0hpbnQpIHtcbiAgdmFyIG1vZGVcbiAgdmFyIGJlc3RNb2RlID0gTW9kZS5nZXRCZXN0TW9kZUZvckRhdGEoZGF0YSlcblxuICBtb2RlID0gTW9kZS5mcm9tKG1vZGVzSGludCwgYmVzdE1vZGUpXG5cbiAgLy8gTWFrZSBzdXJlIGRhdGEgY2FuIGJlIGVuY29kZWRcbiAgaWYgKG1vZGUgIT09IE1vZGUuQllURSAmJiBtb2RlLmJpdCA8IGJlc3RNb2RlLmJpdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignXCInICsgZGF0YSArICdcIicgK1xuICAgICAgJyBjYW5ub3QgYmUgZW5jb2RlZCB3aXRoIG1vZGUgJyArIE1vZGUudG9TdHJpbmcobW9kZSkgK1xuICAgICAgJy5cXG4gU3VnZ2VzdGVkIG1vZGUgaXM6ICcgKyBNb2RlLnRvU3RyaW5nKGJlc3RNb2RlKSlcbiAgfVxuXG4gIC8vIFVzZSBNb2RlLkJZVEUgaWYgS2Fuamkgc3VwcG9ydCBpcyBkaXNhYmxlZFxuICBpZiAobW9kZSA9PT0gTW9kZS5LQU5KSSAmJiAhVXRpbHMuaXNLYW5qaU1vZGVFbmFibGVkKCkpIHtcbiAgICBtb2RlID0gTW9kZS5CWVRFXG4gIH1cblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgIHJldHVybiBuZXcgTnVtZXJpY0RhdGEoZGF0YSlcblxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gbmV3IEFscGhhbnVtZXJpY0RhdGEoZGF0YSlcblxuICAgIGNhc2UgTW9kZS5LQU5KSTpcbiAgICAgIHJldHVybiBuZXcgS2FuamlEYXRhKGRhdGEpXG5cbiAgICBjYXNlIE1vZGUuQllURTpcbiAgICAgIHJldHVybiBuZXcgQnl0ZURhdGEoZGF0YSlcbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkcyBhIGxpc3Qgb2Ygc2VnbWVudHMgZnJvbSBhbiBhcnJheS5cbiAqIEFycmF5IGNhbiBjb250YWluIFN0cmluZ3Mgb3IgT2JqZWN0cyB3aXRoIHNlZ21lbnQncyBpbmZvLlxuICpcbiAqIEZvciBlYWNoIGl0ZW0gd2hpY2ggaXMgYSBzdHJpbmcsIHdpbGwgYmUgZ2VuZXJhdGVkIGEgc2VnbWVudCB3aXRoIHRoZSBnaXZlblxuICogc3RyaW5nIGFuZCB0aGUgbW9yZSBhcHByb3ByaWF0ZSBlbmNvZGluZyBtb2RlLlxuICpcbiAqIEZvciBlYWNoIGl0ZW0gd2hpY2ggaXMgYW4gb2JqZWN0LCB3aWxsIGJlIGdlbmVyYXRlZCBhIHNlZ21lbnQgd2l0aCB0aGUgZ2l2ZW5cbiAqIGRhdGEgYW5kIG1vZGUuXG4gKiBPYmplY3RzIG11c3QgY29udGFpbiBhdCBsZWFzdCB0aGUgcHJvcGVydHkgXCJkYXRhXCIuXG4gKiBJZiBwcm9wZXJ0eSBcIm1vZGVcIiBpcyBub3QgcHJlc2VudCwgdGhlIG1vcmUgc3VpdGFibGUgbW9kZSB3aWxsIGJlIHVzZWQuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGFycmF5IEFycmF5IG9mIG9iamVjdHMgd2l0aCBzZWdtZW50cyBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgQXJyYXkgb2YgU2VnbWVudHNcbiAqL1xuZXhwb3J0cy5mcm9tQXJyYXkgPSBmdW5jdGlvbiBmcm9tQXJyYXkgKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc2VnKSB7XG4gICAgaWYgKHR5cGVvZiBzZWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhY2MucHVzaChidWlsZFNpbmdsZVNlZ21lbnQoc2VnLCBudWxsKSlcbiAgICB9IGVsc2UgaWYgKHNlZy5kYXRhKSB7XG4gICAgICBhY2MucHVzaChidWlsZFNpbmdsZVNlZ21lbnQoc2VnLmRhdGEsIHNlZy5tb2RlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxufVxuXG4vKipcbiAqIEJ1aWxkcyBhbiBvcHRpbWl6ZWQgc2VxdWVuY2Ugb2Ygc2VnbWVudHMgZnJvbSBhIHN0cmluZyxcbiAqIHdoaWNoIHdpbGwgcHJvZHVjZSB0aGUgc2hvcnRlc3QgcG9zc2libGUgYml0c3RyZWFtLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICBJbnB1dCBzdHJpbmdcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBzZWdtZW50c1xuICovXG5leHBvcnRzLmZyb21TdHJpbmcgPSBmdW5jdGlvbiBmcm9tU3RyaW5nIChkYXRhLCB2ZXJzaW9uKSB7XG4gIHZhciBzZWdzID0gZ2V0U2VnbWVudHNGcm9tU3RyaW5nKGRhdGEsIFV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKVxuXG4gIHZhciBub2RlcyA9IGJ1aWxkTm9kZXMoc2VncylcbiAgdmFyIGdyYXBoID0gYnVpbGRHcmFwaChub2RlcywgdmVyc2lvbilcbiAgdmFyIHBhdGggPSBkaWprc3RyYS5maW5kX3BhdGgoZ3JhcGgubWFwLCAnc3RhcnQnLCAnZW5kJylcblxuICB2YXIgb3B0aW1pemVkU2VncyA9IFtdXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBvcHRpbWl6ZWRTZWdzLnB1c2goZ3JhcGgudGFibGVbcGF0aFtpXV0ubm9kZSlcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmZyb21BcnJheShtZXJnZVNlZ21lbnRzKG9wdGltaXplZFNlZ3MpKVxufVxuXG4vKipcbiAqIFNwbGl0cyBhIHN0cmluZyBpbiB2YXJpb3VzIHNlZ21lbnRzIHdpdGggdGhlIG1vZGVzIHdoaWNoXG4gKiBiZXN0IHJlcHJlc2VudCB0aGVpciBjb250ZW50LlxuICogVGhlIHByb2R1Y2VkIHNlZ21lbnRzIGFyZSBmYXIgZnJvbSBiZWluZyBvcHRpbWl6ZWQuXG4gKiBUaGUgb3V0cHV0IG9mIHRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHRvIGVzdGltYXRlIGEgUVIgQ29kZSB2ZXJzaW9uXG4gKiB3aGljaCBtYXkgY29udGFpbiB0aGUgZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGRhdGEgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgQXJyYXkgb2Ygc2VnbWVudHNcbiAqL1xuZXhwb3J0cy5yYXdTcGxpdCA9IGZ1bmN0aW9uIHJhd1NwbGl0IChkYXRhKSB7XG4gIHJldHVybiBleHBvcnRzLmZyb21BcnJheShcbiAgICBnZXRTZWdtZW50c0Zyb21TdHJpbmcoZGF0YSwgVXRpbHMuaXNLYW5qaU1vZGVFbmFibGVkKCkpXG4gIClcbn1cbiIsInZhciB0b1NKSVNGdW5jdGlvblxudmFyIENPREVXT1JEU19DT1VOVCA9IFtcbiAgMCwgLy8gTm90IHVzZWRcbiAgMjYsIDQ0LCA3MCwgMTAwLCAxMzQsIDE3MiwgMTk2LCAyNDIsIDI5MiwgMzQ2LFxuICA0MDQsIDQ2NiwgNTMyLCA1ODEsIDY1NSwgNzMzLCA4MTUsIDkwMSwgOTkxLCAxMDg1LFxuICAxMTU2LCAxMjU4LCAxMzY0LCAxNDc0LCAxNTg4LCAxNzA2LCAxODI4LCAxOTIxLCAyMDUxLCAyMTg1LFxuICAyMzIzLCAyNDY1LCAyNjExLCAyNzYxLCAyODc2LCAzMDM0LCAzMTk2LCAzMzYyLCAzNTMyLCAzNzA2XG5dXG5cbi8qKlxuICogUmV0dXJucyB0aGUgUVIgQ29kZSBzaXplIGZvciB0aGUgc3BlY2lmaWVkIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgc2l6ZSBvZiBRUiBjb2RlXG4gKi9cbmV4cG9ydHMuZ2V0U3ltYm9sU2l6ZSA9IGZ1bmN0aW9uIGdldFN5bWJvbFNpemUgKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKSB0aHJvdyBuZXcgRXJyb3IoJ1widmVyc2lvblwiIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpXG4gIGlmICh2ZXJzaW9uIDwgMSB8fCB2ZXJzaW9uID4gNDApIHRocm93IG5ldyBFcnJvcignXCJ2ZXJzaW9uXCIgc2hvdWxkIGJlIGluIHJhbmdlIGZyb20gMSB0byA0MCcpXG4gIHJldHVybiB2ZXJzaW9uICogNCArIDE3XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGNvZGV3b3JkcyB1c2VkIHRvIHN0b3JlIGRhdGEgYW5kIEVDIGluZm9ybWF0aW9uLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICBEYXRhIGxlbmd0aCBpbiBiaXRzXG4gKi9cbmV4cG9ydHMuZ2V0U3ltYm9sVG90YWxDb2Rld29yZHMgPSBmdW5jdGlvbiBnZXRTeW1ib2xUb3RhbENvZGV3b3JkcyAodmVyc2lvbikge1xuICByZXR1cm4gQ09ERVdPUkRTX0NPVU5UW3ZlcnNpb25dXG59XG5cbi8qKlxuICogRW5jb2RlIGRhdGEgd2l0aCBCb3NlLUNoYXVkaHVyaS1Ib2NxdWVuZ2hlbVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gZGF0YSBWYWx1ZSB0byBlbmNvZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICBFbmNvZGVkIHZhbHVlXG4gKi9cbmV4cG9ydHMuZ2V0QkNIRGlnaXQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgZGlnaXQgPSAwXG5cbiAgd2hpbGUgKGRhdGEgIT09IDApIHtcbiAgICBkaWdpdCsrXG4gICAgZGF0YSA+Pj49IDFcbiAgfVxuXG4gIHJldHVybiBkaWdpdFxufVxuXG5leHBvcnRzLnNldFRvU0pJU0Z1bmN0aW9uID0gZnVuY3Rpb24gc2V0VG9TSklTRnVuY3Rpb24gKGYpIHtcbiAgaWYgKHR5cGVvZiBmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcInRvU0pJU0Z1bmNcIiBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbi4nKVxuICB9XG5cbiAgdG9TSklTRnVuY3Rpb24gPSBmXG59XG5cbmV4cG9ydHMuaXNLYW5qaU1vZGVFbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIHRvU0pJU0Z1bmN0aW9uICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnRzLnRvU0pJUyA9IGZ1bmN0aW9uIHRvU0pJUyAoa2FuamkpIHtcbiAgcmV0dXJuIHRvU0pJU0Z1bmN0aW9uKGthbmppKVxufVxuIiwiLyoqXG4gKiBDaGVjayBpZiBRUiBDb2RlIHZlcnNpb24gaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICB0cnVlIGlmIHZhbGlkIHZlcnNpb24sIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkICh2ZXJzaW9uKSB7XG4gIHJldHVybiAhaXNOYU4odmVyc2lvbikgJiYgdmVyc2lvbiA+PSAxICYmIHZlcnNpb24gPD0gNDBcbn1cbiIsInZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxudmFyIEVDQ29kZSA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1jb2RlJylcbnZhciBFQ0xldmVsID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWxldmVsJylcbnZhciBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbnZhciBWZXJzaW9uQ2hlY2sgPSByZXF1aXJlKCcuL3ZlcnNpb24tY2hlY2snKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuLy8gR2VuZXJhdG9yIHBvbHlub21pYWwgdXNlZCB0byBlbmNvZGUgdmVyc2lvbiBpbmZvcm1hdGlvblxudmFyIEcxOCA9ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMClcbnZhciBHMThfQkNIID0gVXRpbHMuZ2V0QkNIRGlnaXQoRzE4KVxuXG5mdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvckRhdGFMZW5ndGggKG1vZGUsIGxlbmd0aCwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgZm9yICh2YXIgY3VycmVudFZlcnNpb24gPSAxOyBjdXJyZW50VmVyc2lvbiA8PSA0MDsgY3VycmVudFZlcnNpb24rKykge1xuICAgIGlmIChsZW5ndGggPD0gZXhwb3J0cy5nZXRDYXBhY2l0eShjdXJyZW50VmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1vZGUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudFZlcnNpb25cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdldFJlc2VydmVkQml0c0NvdW50IChtb2RlLCB2ZXJzaW9uKSB7XG4gIC8vIENoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IgKyBtb2RlIGluZGljYXRvciBiaXRzXG4gIHJldHVybiBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihtb2RlLCB2ZXJzaW9uKSArIDRcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxCaXRzRnJvbURhdGFBcnJheSAoc2VnbWVudHMsIHZlcnNpb24pIHtcbiAgdmFyIHRvdGFsQml0cyA9IDBcblxuICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHJlc2VydmVkQml0cyA9IGdldFJlc2VydmVkQml0c0NvdW50KGRhdGEubW9kZSwgdmVyc2lvbilcbiAgICB0b3RhbEJpdHMgKz0gcmVzZXJ2ZWRCaXRzICsgZGF0YS5nZXRCaXRzTGVuZ3RoKClcbiAgfSlcblxuICByZXR1cm4gdG90YWxCaXRzXG59XG5cbmZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yTWl4ZWREYXRhIChzZWdtZW50cywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgZm9yICh2YXIgY3VycmVudFZlcnNpb24gPSAxOyBjdXJyZW50VmVyc2lvbiA8PSA0MDsgY3VycmVudFZlcnNpb24rKykge1xuICAgIHZhciBsZW5ndGggPSBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5KHNlZ21lbnRzLCBjdXJyZW50VmVyc2lvbilcbiAgICBpZiAobGVuZ3RoIDw9IGV4cG9ydHMuZ2V0Q2FwYWNpdHkoY3VycmVudFZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBNb2RlLk1JWEVEKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRWZXJzaW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIFJldHVybnMgdmVyc2lvbiBudW1iZXIgZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IGEgdmFsaWQgdmVyc2lvbiwgcmV0dXJucyBkZWZhdWx0VmFsdWVcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICAgICBkZWZhdWx0VmFsdWUgRmFsbGJhY2sgdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb24gbnVtYmVyXG4gKi9cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKFZlcnNpb25DaGVjay5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApXG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG5cbi8qKlxuICogUmV0dXJucyBob3cgbXVjaCBkYXRhIGNhbiBiZSBzdG9yZWQgd2l0aCB0aGUgc3BlY2lmaWVkIFFSIGNvZGUgdmVyc2lvblxuICogYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvbiAoMS00MClcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7TW9kZX0gICBtb2RlICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHkgb2Ygc3RvcmFibGUgZGF0YVxuICovXG5leHBvcnRzLmdldENhcGFjaXR5ID0gZnVuY3Rpb24gZ2V0Q2FwYWNpdHkgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtb2RlKSB7XG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJylcbiAgfVxuXG4gIC8vIFVzZSBCeXRlIG1vZGUgYXMgZGVmYXVsdFxuICBpZiAodHlwZW9mIG1vZGUgPT09ICd1bmRlZmluZWQnKSBtb2RlID0gTW9kZS5CWVRFXG5cbiAgLy8gVG90YWwgY29kZXdvcmRzIGZvciB0aGlzIFFSIGNvZGUgdmVyc2lvbiAoRGF0YSArIEVycm9yIGNvcnJlY3Rpb24pXG4gIHZhciB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXG4gIHZhciBlY1RvdGFsQ29kZXdvcmRzID0gRUNDb2RlLmdldFRvdGFsQ29kZXdvcmRzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGRhdGEgY29kZXdvcmRzXG4gIHZhciBkYXRhVG90YWxDb2Rld29yZHNCaXRzID0gKHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3JkcykgKiA4XG5cbiAgaWYgKG1vZGUgPT09IE1vZGUuTUlYRUQpIHJldHVybiBkYXRhVG90YWxDb2Rld29yZHNCaXRzXG5cbiAgdmFyIHVzYWJsZUJpdHMgPSBkYXRhVG90YWxDb2Rld29yZHNCaXRzIC0gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQobW9kZSwgdmVyc2lvbilcblxuICAvLyBSZXR1cm4gbWF4IG51bWJlciBvZiBzdG9yYWJsZSBjb2Rld29yZHNcbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBNb2RlLk5VTUVSSUM6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigodXNhYmxlQml0cyAvIDEwKSAqIDMpXG5cbiAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHVzYWJsZUJpdHMgLyAxMSkgKiAyKVxuXG4gICAgY2FzZSBNb2RlLktBTkpJOlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodXNhYmxlQml0cyAvIDEzKVxuXG4gICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHVzYWJsZUJpdHMgLyA4KVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSB2ZXJzaW9uIG5lZWRlZCB0byBjb250YWluIHRoZSBhbW91bnQgb2YgZGF0YVxuICpcbiAqIEBwYXJhbSAge1NlZ21lbnR9IGRhdGEgICAgICAgICAgICAgICAgICAgIFNlZ21lbnQgb2YgZGF0YVxuICogQHBhcmFtICB7TnVtYmVyfSBbZXJyb3JDb3JyZWN0aW9uTGV2ZWw9SF0gRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7TW9kZX0gbW9kZSAgICAgICAgICAgICAgICAgICAgICAgRGF0YSBtb2RlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZXhwb3J0cy5nZXRCZXN0VmVyc2lvbkZvckRhdGEgPSBmdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvckRhdGEgKGRhdGEsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gIHZhciBzZWdcblxuICB2YXIgZWNsID0gRUNMZXZlbC5mcm9tKGVycm9yQ29ycmVjdGlvbkxldmVsLCBFQ0xldmVsLk0pXG5cbiAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gZ2V0QmVzdFZlcnNpb25Gb3JNaXhlZERhdGEoZGF0YSwgZWNsKVxuICAgIH1cblxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG5cbiAgICBzZWcgPSBkYXRhWzBdXG4gIH0gZWxzZSB7XG4gICAgc2VnID0gZGF0YVxuICB9XG5cbiAgcmV0dXJuIGdldEJlc3RWZXJzaW9uRm9yRGF0YUxlbmd0aChzZWcubW9kZSwgc2VnLmdldExlbmd0aCgpLCBlY2wpXG59XG5cbi8qKlxuICogUmV0dXJucyB2ZXJzaW9uIGluZm9ybWF0aW9uIHdpdGggcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gKlxuICogVGhlIHZlcnNpb24gaW5mb3JtYXRpb24gaXMgaW5jbHVkZWQgaW4gUVIgQ29kZSBzeW1ib2xzIG9mIHZlcnNpb24gNyBvciBsYXJnZXIuXG4gKiBJdCBjb25zaXN0cyBvZiBhbiAxOC1iaXQgc2VxdWVuY2UgY29udGFpbmluZyA2IGRhdGEgYml0cyxcbiAqIHdpdGggMTIgZXJyb3IgY29ycmVjdGlvbiBiaXRzIGNhbGN1bGF0ZWQgdXNpbmcgdGhlICgxOCwgNikgR29sYXkgY29kZS5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgRW5jb2RlZCB2ZXJzaW9uIGluZm8gYml0c1xuICovXG5leHBvcnRzLmdldEVuY29kZWRCaXRzID0gZnVuY3Rpb24gZ2V0RW5jb2RlZEJpdHMgKHZlcnNpb24pIHtcbiAgaWYgKCFWZXJzaW9uQ2hlY2suaXNWYWxpZCh2ZXJzaW9uKSB8fCB2ZXJzaW9uIDwgNykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBRUiBDb2RlIHZlcnNpb24nKVxuICB9XG5cbiAgdmFyIGQgPSB2ZXJzaW9uIDw8IDEyXG5cbiAgd2hpbGUgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE4X0JDSCA+PSAwKSB7XG4gICAgZCBePSAoRzE4IDw8IChVdGlscy5nZXRCQ0hEaWdpdChkKSAtIEcxOF9CQ0gpKVxuICB9XG5cbiAgcmV0dXJuICh2ZXJzaW9uIDw8IDEyKSB8IGRcbn1cbiIsInZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuXG5mdW5jdGlvbiBjbGVhckNhbnZhcyAoY3R4LCBjYW52YXMsIHNpemUpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgaWYgKCFjYW52YXMuc3R5bGUpIGNhbnZhcy5zdHlsZSA9IHt9XG4gIGNhbnZhcy5oZWlnaHQgPSBzaXplXG4gIGNhbnZhcy53aWR0aCA9IHNpemVcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnXG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnXG59XG5cbmZ1bmN0aW9uIGdldENhbnZhc0VsZW1lbnQgKCkge1xuICB0cnkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgY2FudmFzIGVsZW1lbnQnKVxuICB9XG59XG5cbmV4cG9ydHMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyIChxckRhdGEsIGNhbnZhcywgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnNcbiAgdmFyIGNhbnZhc0VsID0gY2FudmFzXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgb3B0cyA9IGNhbnZhc1xuICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKCFjYW52YXMpIHtcbiAgICBjYW52YXNFbCA9IGdldENhbnZhc0VsZW1lbnQoKVxuICB9XG5cbiAgb3B0cyA9IFV0aWxzLmdldE9wdGlvbnMob3B0cylcbiAgdmFyIHNpemUgPSBVdGlscy5nZXRJbWFnZVdpZHRoKHFyRGF0YS5tb2R1bGVzLnNpemUsIG9wdHMpXG5cbiAgdmFyIGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoJzJkJylcbiAgdmFyIGltYWdlID0gY3R4LmNyZWF0ZUltYWdlRGF0YShzaXplLCBzaXplKVxuICBVdGlscy5xclRvSW1hZ2VEYXRhKGltYWdlLmRhdGEsIHFyRGF0YSwgb3B0cylcblxuICBjbGVhckNhbnZhcyhjdHgsIGNhbnZhc0VsLCBzaXplKVxuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlLCAwLCAwKVxuXG4gIHJldHVybiBjYW52YXNFbFxufVxuXG5leHBvcnRzLnJlbmRlclRvRGF0YVVSTCA9IGZ1bmN0aW9uIHJlbmRlclRvRGF0YVVSTCAocXJEYXRhLCBjYW52YXMsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgb3B0cyA9IGNhbnZhc1xuICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cblxuICB2YXIgY2FudmFzRWwgPSBleHBvcnRzLnJlbmRlcihxckRhdGEsIGNhbnZhcywgb3B0cylcblxuICB2YXIgdHlwZSA9IG9wdHMudHlwZSB8fCAnaW1hZ2UvcG5nJ1xuICB2YXIgcmVuZGVyZXJPcHRzID0gb3B0cy5yZW5kZXJlck9wdHMgfHwge31cblxuICByZXR1cm4gY2FudmFzRWwudG9EYXRhVVJMKHR5cGUsIHJlbmRlcmVyT3B0cy5xdWFsaXR5KVxufVxuIiwidmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmZ1bmN0aW9uIGdldENvbG9yQXR0cmliIChjb2xvciwgYXR0cmliKSB7XG4gIHZhciBhbHBoYSA9IGNvbG9yLmEgLyAyNTVcbiAgdmFyIHN0ciA9IGF0dHJpYiArICc9XCInICsgY29sb3IuaGV4ICsgJ1wiJ1xuXG4gIHJldHVybiBhbHBoYSA8IDFcbiAgICA/IHN0ciArICcgJyArIGF0dHJpYiArICctb3BhY2l0eT1cIicgKyBhbHBoYS50b0ZpeGVkKDIpLnNsaWNlKDEpICsgJ1wiJ1xuICAgIDogc3RyXG59XG5cbmZ1bmN0aW9uIHN2Z0NtZCAoY21kLCB4LCB5KSB7XG4gIHZhciBzdHIgPSBjbWQgKyB4XG4gIGlmICh0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHN0ciArPSAnICcgKyB5XG5cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBxclRvUGF0aCAoZGF0YSwgc2l6ZSwgbWFyZ2luKSB7XG4gIHZhciBwYXRoID0gJydcbiAgdmFyIG1vdmVCeSA9IDBcbiAgdmFyIG5ld1JvdyA9IGZhbHNlXG4gIHZhciBsaW5lTGVuZ3RoID0gMFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjb2wgPSBNYXRoLmZsb29yKGkgJSBzaXplKVxuICAgIHZhciByb3cgPSBNYXRoLmZsb29yKGkgLyBzaXplKVxuXG4gICAgaWYgKCFjb2wgJiYgIW5ld1JvdykgbmV3Um93ID0gdHJ1ZVxuXG4gICAgaWYgKGRhdGFbaV0pIHtcbiAgICAgIGxpbmVMZW5ndGgrK1xuXG4gICAgICBpZiAoIShpID4gMCAmJiBjb2wgPiAwICYmIGRhdGFbaSAtIDFdKSkge1xuICAgICAgICBwYXRoICs9IG5ld1Jvd1xuICAgICAgICAgID8gc3ZnQ21kKCdNJywgY29sICsgbWFyZ2luLCAwLjUgKyByb3cgKyBtYXJnaW4pXG4gICAgICAgICAgOiBzdmdDbWQoJ20nLCBtb3ZlQnksIDApXG5cbiAgICAgICAgbW92ZUJ5ID0gMFxuICAgICAgICBuZXdSb3cgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoIShjb2wgKyAxIDwgc2l6ZSAmJiBkYXRhW2kgKyAxXSkpIHtcbiAgICAgICAgcGF0aCArPSBzdmdDbWQoJ2gnLCBsaW5lTGVuZ3RoKVxuICAgICAgICBsaW5lTGVuZ3RoID0gMFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZlQnkrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydHMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyIChxckRhdGEsIG9wdGlvbnMsIGNiKSB7XG4gIHZhciBvcHRzID0gVXRpbHMuZ2V0T3B0aW9ucyhvcHRpb25zKVxuICB2YXIgc2l6ZSA9IHFyRGF0YS5tb2R1bGVzLnNpemVcbiAgdmFyIGRhdGEgPSBxckRhdGEubW9kdWxlcy5kYXRhXG4gIHZhciBxcmNvZGVzaXplID0gc2l6ZSArIG9wdHMubWFyZ2luICogMlxuXG4gIHZhciBiZyA9ICFvcHRzLmNvbG9yLmxpZ2h0LmFcbiAgICA/ICcnXG4gICAgOiAnPHBhdGggJyArIGdldENvbG9yQXR0cmliKG9wdHMuY29sb3IubGlnaHQsICdmaWxsJykgK1xuICAgICAgJyBkPVwiTTAgMGgnICsgcXJjb2Rlc2l6ZSArICd2JyArIHFyY29kZXNpemUgKyAnSDB6XCIvPidcblxuICB2YXIgcGF0aCA9XG4gICAgJzxwYXRoICcgKyBnZXRDb2xvckF0dHJpYihvcHRzLmNvbG9yLmRhcmssICdzdHJva2UnKSArXG4gICAgJyBkPVwiJyArIHFyVG9QYXRoKGRhdGEsIHNpemUsIG9wdHMubWFyZ2luKSArICdcIi8+J1xuXG4gIHZhciB2aWV3Qm94ID0gJ3ZpZXdCb3g9XCInICsgJzAgMCAnICsgcXJjb2Rlc2l6ZSArICcgJyArIHFyY29kZXNpemUgKyAnXCInXG5cbiAgdmFyIHdpZHRoID0gIW9wdHMud2lkdGggPyAnJyA6ICd3aWR0aD1cIicgKyBvcHRzLndpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBvcHRzLndpZHRoICsgJ1wiICdcblxuICB2YXIgc3ZnVGFnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICcgKyB3aWR0aCArIHZpZXdCb3ggKyAnIHNoYXBlLXJlbmRlcmluZz1cImNyaXNwRWRnZXNcIj4nICsgYmcgKyBwYXRoICsgJzwvc3ZnPlxcbidcblxuICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IobnVsbCwgc3ZnVGFnKVxuICB9XG5cbiAgcmV0dXJuIHN2Z1RhZ1xufVxuIiwiZnVuY3Rpb24gaGV4MnJnYmEgKGhleCkge1xuICBpZiAodHlwZW9mIGhleCA9PT0gJ251bWJlcicpIHtcbiAgICBoZXggPSBoZXgudG9TdHJpbmcoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBoZXggIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb2xvciBzaG91bGQgYmUgZGVmaW5lZCBhcyBoZXggc3RyaW5nJylcbiAgfVxuXG4gIHZhciBoZXhDb2RlID0gaGV4LnNsaWNlKCkucmVwbGFjZSgnIycsICcnKS5zcGxpdCgnJylcbiAgaWYgKGhleENvZGUubGVuZ3RoIDwgMyB8fCBoZXhDb2RlLmxlbmd0aCA9PT0gNSB8fCBoZXhDb2RlLmxlbmd0aCA+IDgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IGNvbG9yOiAnICsgaGV4KVxuICB9XG5cbiAgLy8gQ29udmVydCBmcm9tIHNob3J0IHRvIGxvbmcgZm9ybSAoZmZmIC0+IGZmZmZmZilcbiAgaWYgKGhleENvZGUubGVuZ3RoID09PSAzIHx8IGhleENvZGUubGVuZ3RoID09PSA0KSB7XG4gICAgaGV4Q29kZSA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGhleENvZGUubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gW2MsIGNdXG4gICAgfSkpXG4gIH1cblxuICAvLyBBZGQgZGVmYXVsdCBhbHBoYSB2YWx1ZVxuICBpZiAoaGV4Q29kZS5sZW5ndGggPT09IDYpIGhleENvZGUucHVzaCgnRicsICdGJylcblxuICB2YXIgaGV4VmFsdWUgPSBwYXJzZUludChoZXhDb2RlLmpvaW4oJycpLCAxNilcblxuICByZXR1cm4ge1xuICAgIHI6IChoZXhWYWx1ZSA+PiAyNCkgJiAyNTUsXG4gICAgZzogKGhleFZhbHVlID4+IDE2KSAmIDI1NSxcbiAgICBiOiAoaGV4VmFsdWUgPj4gOCkgJiAyNTUsXG4gICAgYTogaGV4VmFsdWUgJiAyNTUsXG4gICAgaGV4OiAnIycgKyBoZXhDb2RlLnNsaWNlKDAsIDYpLmpvaW4oJycpXG4gIH1cbn1cblxuZXhwb3J0cy5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fVxuICBpZiAoIW9wdGlvbnMuY29sb3IpIG9wdGlvbnMuY29sb3IgPSB7fVxuXG4gIHZhciBtYXJnaW4gPSB0eXBlb2Ygb3B0aW9ucy5tYXJnaW4gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgb3B0aW9ucy5tYXJnaW4gPT09IG51bGwgfHxcbiAgICBvcHRpb25zLm1hcmdpbiA8IDAgPyA0IDogb3B0aW9ucy5tYXJnaW5cblxuICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoICYmIG9wdGlvbnMud2lkdGggPj0gMjEgPyBvcHRpb25zLndpZHRoIDogdW5kZWZpbmVkXG4gIHZhciBzY2FsZSA9IG9wdGlvbnMuc2NhbGUgfHwgNFxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIHNjYWxlOiB3aWR0aCA/IDQgOiBzY2FsZSxcbiAgICBtYXJnaW46IG1hcmdpbixcbiAgICBjb2xvcjoge1xuICAgICAgZGFyazogaGV4MnJnYmEob3B0aW9ucy5jb2xvci5kYXJrIHx8ICcjMDAwMDAwZmYnKSxcbiAgICAgIGxpZ2h0OiBoZXgycmdiYShvcHRpb25zLmNvbG9yLmxpZ2h0IHx8ICcjZmZmZmZmZmYnKVxuICAgIH0sXG4gICAgdHlwZTogb3B0aW9ucy50eXBlLFxuICAgIHJlbmRlcmVyT3B0czogb3B0aW9ucy5yZW5kZXJlck9wdHMgfHwge31cbiAgfVxufVxuXG5leHBvcnRzLmdldFNjYWxlID0gZnVuY3Rpb24gZ2V0U2NhbGUgKHFyU2l6ZSwgb3B0cykge1xuICByZXR1cm4gb3B0cy53aWR0aCAmJiBvcHRzLndpZHRoID49IHFyU2l6ZSArIG9wdHMubWFyZ2luICogMlxuICAgID8gb3B0cy53aWR0aCAvIChxclNpemUgKyBvcHRzLm1hcmdpbiAqIDIpXG4gICAgOiBvcHRzLnNjYWxlXG59XG5cbmV4cG9ydHMuZ2V0SW1hZ2VXaWR0aCA9IGZ1bmN0aW9uIGdldEltYWdlV2lkdGggKHFyU2l6ZSwgb3B0cykge1xuICB2YXIgc2NhbGUgPSBleHBvcnRzLmdldFNjYWxlKHFyU2l6ZSwgb3B0cylcbiAgcmV0dXJuIE1hdGguZmxvb3IoKHFyU2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSlcbn1cblxuZXhwb3J0cy5xclRvSW1hZ2VEYXRhID0gZnVuY3Rpb24gcXJUb0ltYWdlRGF0YSAoaW1nRGF0YSwgcXIsIG9wdHMpIHtcbiAgdmFyIHNpemUgPSBxci5tb2R1bGVzLnNpemVcbiAgdmFyIGRhdGEgPSBxci5tb2R1bGVzLmRhdGFcbiAgdmFyIHNjYWxlID0gZXhwb3J0cy5nZXRTY2FsZShzaXplLCBvcHRzKVxuICB2YXIgc3ltYm9sU2l6ZSA9IE1hdGguZmxvb3IoKHNpemUgKyBvcHRzLm1hcmdpbiAqIDIpICogc2NhbGUpXG4gIHZhciBzY2FsZWRNYXJnaW4gPSBvcHRzLm1hcmdpbiAqIHNjYWxlXG4gIHZhciBwYWxldHRlID0gW29wdHMuY29sb3IubGlnaHQsIG9wdHMuY29sb3IuZGFya11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbFNpemU7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3ltYm9sU2l6ZTsgaisrKSB7XG4gICAgICB2YXIgcG9zRHN0ID0gKGkgKiBzeW1ib2xTaXplICsgaikgKiA0XG4gICAgICB2YXIgcHhDb2xvciA9IG9wdHMuY29sb3IubGlnaHRcblxuICAgICAgaWYgKGkgPj0gc2NhbGVkTWFyZ2luICYmIGogPj0gc2NhbGVkTWFyZ2luICYmXG4gICAgICAgIGkgPCBzeW1ib2xTaXplIC0gc2NhbGVkTWFyZ2luICYmIGogPCBzeW1ib2xTaXplIC0gc2NhbGVkTWFyZ2luKSB7XG4gICAgICAgIHZhciBpU3JjID0gTWF0aC5mbG9vcigoaSAtIHNjYWxlZE1hcmdpbikgLyBzY2FsZSlcbiAgICAgICAgdmFyIGpTcmMgPSBNYXRoLmZsb29yKChqIC0gc2NhbGVkTWFyZ2luKSAvIHNjYWxlKVxuICAgICAgICBweENvbG9yID0gcGFsZXR0ZVtkYXRhW2lTcmMgKiBzaXplICsgalNyY10gPyAxIDogMF1cbiAgICAgIH1cblxuICAgICAgaW1nRGF0YVtwb3NEc3QrK10gPSBweENvbG9yLnJcbiAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5nXG4gICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IuYlxuICAgICAgaW1nRGF0YVtwb3NEc3RdID0gcHhDb2xvci5hXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIGEgc3Vic2V0IG9mIG5vZGUuanMgQnVmZmVyIG1ldGhvZHMgZm9yIHRoZSBicm93c2VyLlxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXJcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICAvLyBDYW4gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGJlIGF1Z21lbnRlZD9cbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MlxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbnZhciBLX01BWF9MRU5HVEggPSBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBvZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cblxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuXG4gIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBLX01BWF9MRU5HVEhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIEtfTUFYX0xFTkdUSC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICBidWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBidWYgPSB0aGF0XG4gICAgaWYgKGJ1ZiA9PT0gbnVsbCkge1xuICAgICAgYnVmID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgdmFyIGJ1ZiA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcblxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZykge1xuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcpIHwgMFxuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIGJ1ZiA9IGJ1Zi5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdmFyIGJ1ZiA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidWZbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIHZhciBidWZcbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGJ1ZiA9IGZyb21BcnJheUxpa2UodGhhdCwgYnVmKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdmFyIGJ1ZiA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAoYnVmLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJ1ZlxuICAgIH1cblxuICAgIG9iai5jb3B5KGJ1ZiwgMCwgMCwgbGVuKVxuICAgIHJldHVybiBidWZcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgQXJyYXkuaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBvZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIG9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF0pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBuZXcgQnVmZmVyKHZhbClcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKG51bGwsIDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBhbGxvY1Vuc2FmZShudWxsLCBsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxubW9kdWxlLmV4cG9ydHMuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICB2YXIgYnVmZmVyID0gbmV3IEJ1ZmZlcihzaXplKVxuICBidWZmZXIuZmlsbCgwKVxuICByZXR1cm4gYnVmZmVyXG59XG5cbm1vZHVsZS5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiAoZGF0YSkge1xuICByZXR1cm4gbmV3IEJ1ZmZlcihkYXRhKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGN1c3RvbUluc3BlY3RTeW1ib2wgPVxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA/IFN5bWJvbFsnZm9yJ10oJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA6IG51bGxcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG52YXIgS19NQVhfTEVOR1RIID0gMHg3ZmZmZmZmZlxuZXhwb3J0cy5rTWF4TGVuZ3RoID0gS19NQVhfTEVOR1RIXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFByaW50IHdhcm5pbmcgYW5kIHJlY29tbWVuZCB1c2luZyBgYnVmZmVyYCB2NC54IHdoaWNoIGhhcyBhbiBPYmplY3RcbiAqICAgICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIFdlIHJlcG9ydCB0aGF0IHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGlmIHRoZSBhcmUgbm90IHN1YmNsYXNzYWJsZVxuICogdXNpbmcgX19wcm90b19fLiBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YFxuICogKFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4KS4gSUUgMTAgbGFja3Mgc3VwcG9ydFxuICogZm9yIF9fcHJvdG9fXyBhbmQgaGFzIGEgYnVnZ3kgdHlwZWQgYXJyYXkgaW1wbGVtZW50YXRpb24uXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gdHlwZWRBcnJheVN1cHBvcnQoKVxuXG5pZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgJ1RoaXMgYnJvd3NlciBsYWNrcyB0eXBlZCBhcnJheSAoVWludDhBcnJheSkgc3VwcG9ydCB3aGljaCBpcyByZXF1aXJlZCBieSAnICtcbiAgICAnYGJ1ZmZlcmAgdjUueC4gVXNlIGBidWZmZXJgIHY0LnggaWYgeW91IHJlcXVpcmUgb2xkIGJyb3dzZXIgc3VwcG9ydC4nXG4gIClcbn1cblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICAvLyBDYW4gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWQ/XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgdmFyIHByb3RvID0geyBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH0gfVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm90bywgVWludDhBcnJheS5wcm90b3R5cGUpXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGFyciwgcHJvdG8pXG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDJcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAncGFyZW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ1ZmZlclxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ29mZnNldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5ieXRlT2Zmc2V0XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPiBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIGxlbmd0aCArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIHZhciBidWYgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG4gIHJldHVybiBidWZcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZShhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20oYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG5mdW5jdGlvbiBmcm9tICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlWaWV3KHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICAgIClcbiAgfVxuXG4gIGlmIChpc0luc3RhbmNlKHZhbHVlLCBBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgQXJyYXlCdWZmZXIpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAoaXNJbnN0YW5jZSh2YWx1ZSwgU2hhcmVkQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIFNoYXJlZEFycmF5QnVmZmVyKSkpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgIClcbiAgfVxuXG4gIHZhciB2YWx1ZU9mID0gdmFsdWUudmFsdWVPZiAmJiB2YWx1ZS52YWx1ZU9mKClcbiAgaWYgKHZhbHVlT2YgIT0gbnVsbCAmJiB2YWx1ZU9mICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZU9mLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICB2YXIgYiA9IGZyb21PYmplY3QodmFsdWUpXG4gIGlmIChiKSByZXR1cm4gYlxuXG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9QcmltaXRpdmUgIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oXG4gICAgICB2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdKCdzdHJpbmcnKSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoXG4gICAgKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICApXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20odmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gTm90ZTogQ2hhbmdlIHByb3RvdHlwZSAqYWZ0ZXIqIEJ1ZmZlci5mcm9tIGlzIGRlZmluZWQgdG8gd29ya2Fyb3VuZCBDaHJvbWUgYnVnOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC8xNDhcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIucHJvdG90eXBlLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIsIFVpbnQ4QXJyYXkpXG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBzaXplICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICBidWYgPSBidWYuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlIChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHZhciBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmW2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVZpZXcgKGFycmF5Vmlldykge1xuICBpZiAoaXNJbnN0YW5jZShhcnJheVZpZXcsIFVpbnQ4QXJyYXkpKSB7XG4gICAgdmFyIGNvcHkgPSBuZXcgVWludDhBcnJheShhcnJheVZpZXcpXG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcihjb3B5LmJ1ZmZlciwgY29weS5ieXRlT2Zmc2V0LCBjb3B5LmJ5dGVMZW5ndGgpXG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheUxpa2UoYXJyYXlWaWV3KVxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wib2Zmc2V0XCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJsZW5ndGhcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgdmFyIGJ1ZlxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbilcblxuICAgIGlmIChidWYubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmXG4gICAgfVxuXG4gICAgb2JqLmNvcHkoYnVmLCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIGJ1ZlxuICB9XG5cbiAgaWYgKG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgbnVtYmVySXNOYU4ob2JqLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIoMClcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqKVxuICB9XG5cbiAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KG9iai5kYXRhKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iai5kYXRhKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBLX01BWF9MRU5HVEhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIEtfTUFYX0xFTkdUSC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuIGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlciA9PT0gdHJ1ZSAmJlxuICAgIGIgIT09IEJ1ZmZlci5wcm90b3R5cGUgLy8gc28gQnVmZmVyLmlzQnVmZmVyKEJ1ZmZlci5wcm90b3R5cGUpIHdpbGwgYmUgZmFsc2Vcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmIChpc0luc3RhbmNlKGEsIFVpbnQ4QXJyYXkpKSBhID0gQnVmZmVyLmZyb20oYSwgYS5vZmZzZXQsIGEuYnl0ZUxlbmd0aClcbiAgaWYgKGlzSW5zdGFuY2UoYiwgVWludDhBcnJheSkpIGIgPSBCdWZmZXIuZnJvbShiLCBiLm9mZnNldCwgYi5ieXRlTGVuZ3RoKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJidWYxXCIsIFwiYnVmMlwiIGFyZ3VtZW50cyBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5J1xuICAgIClcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmIChpc0luc3RhbmNlKGJ1ZiwgVWludDhBcnJheSkpIHtcbiAgICAgIGlmIChwb3MgKyBidWYubGVuZ3RoID4gYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICBCdWZmZXIuZnJvbShidWYpLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgYnVmLFxuICAgICAgICAgIHBvc1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIH1cbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBpc0luc3RhbmNlKHN0cmluZywgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBvciBBcnJheUJ1ZmZlci4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHN0cmluZ1xuICAgIClcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBtdXN0TWF0Y2ggPSAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdID09PSB0cnVlKVxuICBpZiAoIW11c3RNYXRjaCAmJiBsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHtcbiAgICAgICAgICByZXR1cm4gbXVzdE1hdGNoID8gLTEgOiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICB9XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcmNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIChhbmQgdGhlIGBpcy1idWZmZXJgIG5wbSBwYWNrYWdlKVxuLy8gdG8gZGV0ZWN0IGEgQnVmZmVyIGluc3RhbmNlLiBJdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgYGluc3RhbmNlb2YgQnVmZmVyYFxuLy8gcmVsaWFibHkgaW4gYSBicm93c2VyaWZ5IGNvbnRleHQgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBkaWZmZXJlbnRcbi8vIGNvcGllcyBvZiB0aGUgJ2J1ZmZlcicgcGFja2FnZSBpbiB1c2UuIFRoaXMgbWV0aG9kIHdvcmtzIGV2ZW4gZm9yIEJ1ZmZlclxuLy8gaW5zdGFuY2VzIHRoYXQgd2VyZSBjcmVhdGVkIGZyb20gYW5vdGhlciBjb3B5IG9mIHRoZSBgYnVmZmVyYCBwYWNrYWdlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTU0XG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nID0gQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZ1xuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLnJlcGxhY2UoLyguezJ9KS9nLCAnJDEgJykudHJpbSgpXG4gIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cbmlmIChjdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBCdWZmZXIucHJvdG90eXBlLmluc3BlY3Rcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKGlzSW5zdGFuY2UodGFyZ2V0LCBVaW50OEFycmF5KSkge1xuICAgIHRhcmdldCA9IEJ1ZmZlci5mcm9tKHRhcmdldCwgdGFyZ2V0Lm9mZnNldCwgdGFyZ2V0LmJ5dGVMZW5ndGgpXG4gIH1cbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheS4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB0YXJnZXQpXG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAobnVtYmVySXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbdmFsXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKG51bWJlcklzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggPj4+IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKVxuICAgICAgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKVxuICAgICAgICAgID8gM1xuICAgICAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpXG4gICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gaGV4U2xpY2VMb29rdXBUYWJsZVtidWZbaV1dXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIC8vIElmIGJ5dGVzLmxlbmd0aCBpcyBvZGQsIHRoZSBsYXN0IDggYml0cyBtdXN0IGJlIGlnbm9yZWQgKHNhbWUgYXMgbm9kZS5qcylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIChieXRlc1tpICsgMV0gKiAyNTYpKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihuZXdCdWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc2hvdWxkIGJlIGEgQnVmZmVyJylcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBVc2UgYnVpbHQtaW4gd2hlbiBhdmFpbGFibGUsIG1pc3NpbmcgZnJvbSBJRTExXG4gICAgdGhpcy5jb3B5V2l0aGluKHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyAmJiBjb2RlIDwgMTI4KSB8fFxuICAgICAgICAgIGVuY29kaW5nID09PSAnbGF0aW4xJykge1xuICAgICAgICAvLyBGYXN0IHBhdGg6IElmIGB2YWxgIGZpdHMgaW50byBhIHNpbmdsZSBieXRlLCB1c2UgdGhhdCBudW1lcmljIHZhbHVlLlxuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbClcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmFsdWUgXCInICsgdmFsICtcbiAgICAgICAgJ1wiIGlzIGludmFsaWQgZm9yIGFyZ3VtZW50IFwidmFsdWVcIicpXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teKy8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgdGFrZXMgZXF1YWwgc2lnbnMgYXMgZW5kIG9mIHRoZSBCYXNlNjQgZW5jb2RpbmdcbiAgc3RyID0gc3RyLnNwbGl0KCc9JylbMF1cbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuLy8gQXJyYXlCdWZmZXIgb3IgVWludDhBcnJheSBvYmplY3RzIGZyb20gb3RoZXIgY29udGV4dHMgKGkuZS4gaWZyYW1lcykgZG8gbm90IHBhc3Ncbi8vIHRoZSBgaW5zdGFuY2VvZmAgY2hlY2sgYnV0IHRoZXkgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgb2YgdGhhdCB0eXBlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTY2XG5mdW5jdGlvbiBpc0luc3RhbmNlIChvYmosIHR5cGUpIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHR5cGUgfHxcbiAgICAob2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT0gbnVsbCAmJlxuICAgICAgb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09IHR5cGUubmFtZSlcbn1cbmZ1bmN0aW9uIG51bWJlcklzTmFOIChvYmopIHtcbiAgLy8gRm9yIElFMTEgc3VwcG9ydFxuICByZXR1cm4gb2JqICE9PSBvYmogLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuLy8gQ3JlYXRlIGxvb2t1cCB0YWJsZSBmb3IgYHRvU3RyaW5nKCdoZXgnKWBcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzIxOVxudmFyIGhleFNsaWNlTG9va3VwVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OWFiY2RlZidcbiAgdmFyIHRhYmxlID0gbmV3IEFycmF5KDI1NilcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgdmFyIGkxNiA9IGkgKiAxNlxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgdGFibGVbaTE2ICsgal0gPSBhbHBoYWJldFtpXSArIGFscGhhYmV0W2pdXG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZVxufSkoKVxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9O1xuICB9XG4gIHZhciBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gIHZhciByYW5nZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Rpb24ucmFuZ2VDb3VudDsgaSsrKSB7XG4gICAgcmFuZ2VzLnB1c2goc2VsZWN0aW9uLmdldFJhbmdlQXQoaSkpO1xuICB9XG5cbiAgc3dpdGNoIChhY3RpdmUudGFnTmFtZS50b1VwcGVyQ2FzZSgpKSB7IC8vIC50b1VwcGVyQ2FzZSBoYW5kbGVzIFhIVE1MXG4gICAgY2FzZSAnSU5QVVQnOlxuICAgIGNhc2UgJ1RFWFRBUkVBJzpcbiAgICAgIGFjdGl2ZS5ibHVyKCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBhY3RpdmUgPSBudWxsO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZWN0aW9uLnR5cGUgPT09ICdDYXJldCcgJiZcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XG4gICAgICByYW5nZXMuZm9yRWFjaChmdW5jdGlvbihyYW5nZSkge1xuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWN0aXZlICYmXG4gICAgYWN0aXZlLmZvY3VzKCk7XG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIl9fc3ByZWFkQXJyYXlzIiwicyIsImkiLCJpbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJBcnJheSIsImsiLCJhIiwiaiIsImpsIiwiQnJvd3NlckluZm8iLCJuYW1lIiwidmVyc2lvbiIsIm9zIiwidGhpcyIsInR5cGUiLCJOb2RlSW5mbyIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIlNlYXJjaEJvdERldmljZUluZm8iLCJib3QiLCJCb3RJbmZvIiwiUmVhY3ROYXRpdmVJbmZvIiwiU0VBUkNIQk9UX09TX1JFR0VYIiwidXNlckFnZW50UnVsZXMiLCJvcGVyYXRpbmdTeXN0ZW1SdWxlcyIsImRldGVjdCIsInVzZXJBZ2VudCIsInBhcnNlVXNlckFnZW50IiwiZG9jdW1lbnQiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0Iiwic2xpY2UiLCJnZXROb2RlVmVyc2lvbiIsIm1hdGNoVXNlckFnZW50IiwidWEiLCJyZWR1Y2UiLCJtYXRjaGVkIiwiX2EiLCJicm93c2VyIiwicmVnZXgiLCJ1YU1hdGNoIiwiZXhlYyIsIm1hdGNoZWRSdWxlIiwibWF0Y2giLCJ2ZXJzaW9uUGFydHMiLCJzcGxpdCIsImNvdW50Iiwib3V0cHV0IiwiaWkiLCJwdXNoIiwiY3JlYXRlVmVyc2lvblBhcnRzIiwiam9pbiIsImRldGVjdE9TIiwic2VhcmNoQm90TWF0Y2giLCJkZXRlY3RFbnYiLCJlbnYiLCJ1bmRlZmluZWQiLCJpc0FuZHJvaWQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaXNJT1MiLCJtYXhUb3VjaFBvaW50cyIsImlzTW9iaWxlIiwiaXNOb2RlIiwiaXNCcm93c2VyIiwiZ2V0TmF2aWdhdG9yIiwiZ2V0RnJvbVdpbmRvdyIsImdldEZyb21XaW5kb3dPclRocm93IiwiZ2V0RG9jdW1lbnRPclRocm93IiwiZ2V0RG9jdW1lbnQiLCJnZXROYXZpZ2F0b3JPclRocm93IiwiZ2V0TG9jYXRpb25PclRocm93IiwiZ2V0TG9jYXRpb24iLCJnZXRDcnlwdG9PclRocm93IiwiZ2V0Q3J5cHRvIiwiZ2V0TG9jYWxTdG9yYWdlT3JUaHJvdyIsImdldExvY2FsU3RvcmFnZSIsImdldENsaWVudE1ldGEiLCJ2YWx1ZSIsIkVycm9yIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0TG9jYWwiLCJrZXkiLCJkYXRhIiwicmF3IiwibG9jYWwiLCJzZXRJdGVtIiwiZ2V0TG9jYWwiLCJnZXRJdGVtIiwicmVtb3ZlTG9jYWwiLCJyZW1vdmVJdGVtIiwibW9iaWxlTGlua0Nob2ljZUtleSIsImZvcm1hdElPU01vYmlsZSIsInVyaSIsImVudHJ5IiwiZW5jb2RlZFVyaSIsImVuY29kZVVSSUNvbXBvbmVudCIsInVuaXZlcnNhbExpbmsiLCJkZWVwTGluayIsImVuZHNXaXRoIiwic2F2ZU1vYmlsZUxpbmtJbmZvIiwiZm9jdXNVcmkiLCJocmVmIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TW9iaWxlUmVnaXN0cnlFbnRyeSIsInJlZ2lzdHJ5IiwiZmlsdGVyIiwiZ2V0TW9iaWxlTGlua1JlZ2lzdHJ5Iiwid2hpdGVsaXN0IiwibGlua3MiLCJtYXAiLCJCb29sZWFuIiwiQVBJX1VSTCIsImdldFdhbGxldFJlZ2lzdHJ5VXJsIiwiZ2V0RGFwcFJlZ2lzdHJ5VXJsIiwiZm9ybWF0TW9iaWxlUmVnaXN0cnlFbnRyeSIsInNob3J0TmFtZSIsIm1ldGFkYXRhIiwiY29sb3IiLCJjb2xvcnMiLCJwcmltYXJ5IiwibG9nbyIsImltYWdlX3VybCIsInNtIiwidW5pdmVyc2FsIiwibmF0aXZlIiwiZm9ybWF0TW9iaWxlUmVnaXN0cnkiLCJ2YWx1ZXMiLCJfaW50ZXJvcERlZmF1bHQiLCJleCIsImJyb3dzZXJVdGlscyIsIlFSQ29kZSIsImNvcHkiLCJSZWFjdCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsIldBTExFVENPTk5FQ1RfV1JBUFBFUl9JRCIsIldBTExFVENPTk5FQ1RfU1RZTEVfSUQiLCJXQUxMRVRDT05ORUNUX01PREFMX0lEIiwiV0FMTEVUQ09OTkVDVF9DVEFfVEVYVF9JRCIsIkhlYWRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiaWQiLCJDb25uZWN0QnV0dG9uIiwiV0FMTEVUQ09OTkVDVF9DT05ORUNUX0JVVFRPTl9JRCIsInJlbCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGFyZ2V0IiwiV2FsbGV0QnV0dG9uIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiV2FsbGV0SWNvbiIsImZvbnRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIkxpbmtEaXNwbGF5IiwiYW5kcm9pZCIsInJlZiIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInJlZiQxIiwic2V0RmlsdGVyIiwicmVmJDIiLCJwYWdlIiwic2V0UGFnZSIsImxpbmsiLCJlcnJvck1lc3NhZ2UiLCJncmlkIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsInJhbmdlIiwicGFnZUxpbmtzIiwiXyIsImluZGV4IiwiaGFzUGFnaW5nIiwiZmlsdGVyVGltZW91dCIsInRleHQiLCJjb25uZWN0X21vYmlsZV93YWxsZXQiLCJjaG9vc2VfcHJlZmVycmVkX3dhbGxldCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbm5lY3QiLCJ1c2VDYWxsYmFjayIsImhhbmRsZUNsaWNrSU9TIiwiRnJhZ21lbnQiLCJub193YWxsZXRzX2ZvdW5kIiwibG9hZGluZyIsImZpbGwiLCJwYWdlTnVtYmVyIiwic2VsZWN0ZWQiLCJtYXJnaW4iLCJmb250V2VpZ2h0IiwiTm90aWZpY2F0aW9uIiwic2hvdyIsIm1lc3NhZ2UiLCJ0cmltIiwiUVJDb2RlRGlzcGxheSIsIm5vdGlmaWNhdGlvbiIsInNldE5vdGlmaWNhdGlvbiIsInN2ZyIsInNldFN2ZyIsInVzZUVmZmVjdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzdWx0IiwidG9TdHJpbmciLCJ0aGVuIiwiZGF0YVN0cmluZyIsInJlcGxhY2UiLCJyZWplY3QiLCJmb3JtYXRRUkNvZGVJbWFnZSIsIl9mb3JtYXRRUkNvZGVJbWFnZSIsInNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb3BpZWRfdG9fY2xpcGJvYXJkIiwic2V0SW50ZXJ2YWwiLCJjb3B5X3RvX2NsaXBib2FyZCIsIk1vZGFsIiwibW9iaWxlIiwicXJjb2RlTW9kYWxPcHRpb25zIiwibW9iaWxlTGlua3MiLCJkZXNrdG9wTGlua3MiLCJzZXRMb2FkaW5nIiwiZmV0Y2hlZCIsInNldEZldGNoZWQiLCJkaXNwbGF5UVJDb2RlIiwic2V0RGlzcGxheVFSQ29kZSIsImRpc3BsYXlQcm9wcyIsInJlZiQzIiwic2luZ2xlTGlua0hyZWYiLCJzZXRTaW5nbGVMaW5rSHJlZiIsInJlZiQ0IiwiaGFzU2luZ2xlTGluayIsInNldEhhc1NpbmdsZUxpbmsiLCJyZWYkNSIsInNldExpbmtzIiwicmVmJDYiLCJzZXRFcnJvck1lc3NhZ2UiLCJnZXRMaW5rc0lmTmVlZGVkIiwiX3RlbXAiLCJib2R5IiwicmVjb3ZlciIsIl9jYXRjaCIsInVybCIsInJlZ2lzdHJ5VXJsIiwiZmV0Y2giLCJyZWdpc3RyeVJlc3BvbnNlIiwianNvbiIsIl9yZWdpc3RyeVJlc3BvbnNlJGpzbyIsImxpc3RpbmdzIiwiX2xpbmtzIiwibm9fc3VwcG9ydGVkX3dhbGxldHMiLCJzb21ldGhpbmdfd2VudF93cm9uZyIsImNvbnNvbGUiLCJlcnJvciIsImluaXRMaW5rcyIsInJpZ2h0U2VsZWN0ZWQiLCJjb25uZWN0X3dpdGgiLCJxcmNvZGUiLCJkZXNrdG9wIiwibGFuZ3VhZ2VzIiwiZGUiLCJlbiIsImVzIiwiZnIiLCJrbyIsInB0IiwiemgiLCJmYSIsInRyaWdnZXJDbG9zZUFuaW1hdGlvbiIsImRvYyIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3cmFwcGVyIiwicmVtb3ZlQ2hpbGQiLCJnZXRXcmFwcGVkQ2FsbGJhY2siLCJjYiIsImdldFRleHQiLCJsYW5nIiwibGFuZ3VhZ2UiLCJvcGVuJDEiLCJwcmV2IiwiaGVhZCIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiaW5qZWN0U3R5bGVTaGVldCIsInJlbmRlcldyYXBwZXIiLCJyZW5kZXIiLCJ2ZXJzaW9ucyIsIm5vZGUiLCJvcGVuIiwibG9nIiwiY2xvc2UiLCJjbG9zZSQxIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcyIsImRlZmluZVByb3BlcnR5Iiwid2luZG93X2dldHRlcnNfMSIsImxvYyIsImdldFdpbmRvd01ldGFkYXRhT2ZBbnkiLCJhcmdzIiwibWV0YVRhZ3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRhZyIsImF0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyIiwiY29udGVudCIsInRpdGxlIiwiZ2V0TmFtZSIsImRlc2NyaXB0aW9uIiwiZ2V0RGVzY3JpcHRpb24iLCJvcmlnaW4iLCJpY29ucyIsImluZGV4T2YiLCJhYnNvbHV0ZUhyZWYiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRoIiwicGF0aG5hbWUiLCJwb3AiLCJhYnNvbHV0ZVVybCIsImdldEljb25zIiwiZGVzZWxlY3RDdXJyZW50IiwiY2xpcGJvYXJkVG9JRTExRm9ybWF0dGluZyIsIm9wdGlvbnMiLCJkZWJ1ZyIsInJlc2VsZWN0UHJldmlvdXMiLCJzZWxlY3Rpb24iLCJtYXJrIiwic3VjY2VzcyIsImNyZWF0ZVJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwidGV4dENvbnRlbnQiLCJhbGwiLCJwb3NpdGlvbiIsInRvcCIsImNsaXAiLCJ3aGl0ZVNwYWNlIiwid2Via2l0VXNlclNlbGVjdCIsIk1velVzZXJTZWxlY3QiLCJtc1VzZXJTZWxlY3QiLCJ1c2VyU2VsZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImZvcm1hdCIsInByZXZlbnREZWZhdWx0IiwiY2xpcGJvYXJkRGF0YSIsIndhcm4iLCJjbGVhckRhdGEiLCJzZXREYXRhIiwib25Db3B5Iiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiYWRkUmFuZ2UiLCJleGVjQ29tbWFuZCIsImVyciIsImNvcHlLZXkiLCJ0ZXN0IiwicHJvbXB0IiwicmVtb3ZlUmFuZ2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJkaWprc3RyYSIsInNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHMiLCJncmFwaCIsImQiLCJwcmVkZWNlc3NvcnMiLCJjb3N0cyIsIlByaW9yaXR5UXVldWUiLCJtYWtlIiwiY2xvc2VzdCIsInUiLCJ2IiwiY29zdF9vZl9zX3RvX3UiLCJhZGphY2VudF9ub2RlcyIsImNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lIiwiY29zdF9vZl9zX3RvX3YiLCJlbXB0eSIsImNvc3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm1zZyIsImV4dHJhY3Rfc2hvcnRlc3RfcGF0aF9mcm9tX3ByZWRlY2Vzc29yX2xpc3QiLCJub2RlcyIsInJldmVyc2UiLCJmaW5kX3BhdGgiLCJvcHRzIiwiVCIsInQiLCJxdWV1ZSIsInNvcnRlciIsImRlZmF1bHRfc29ydGVyIiwiYiIsIml0ZW0iLCJzb3J0Iiwic2hpZnQiLCJpc0FycmF5IiwiYXJyIiwiY2FsbCIsIm4iLCJvIiwiZiIsImMiLCJsIiwicGFyZW50Tm9kZSIsImgiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsInAiLCJfX2siLCJfXyIsIl9fYiIsIl9fZSIsIl9fZCIsIl9fYyIsImNvbnN0cnVjdG9yIiwiX192Iiwidm5vZGUiLCJ5IiwibSIsImNvbnRleHQiLCJ3IiwiYmFzZSIsImciLCJkZWJvdW5jZVJlbmRlcmluZyIsInNvbWUiLCJfX1AiLCJBIiwiX19uIiwib3duZXJTVkdFbGVtZW50IiwieCIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiRCIsIkMiLCJzZXRQcm9wZXJ0eSIsIk4iLCJjc3NUZXh0IiwieiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlIiwiZXZlbnQiLCJQIiwiY29udGV4dFR5cGUiLCJfX0UiLCJwcm90b3R5cGUiLCJFIiwic3ViIiwic3RhdGUiLCJfX2giLCJfX3MiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiX19yIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCIkIiwiZGlmZmVkIiwibm9kZVR5cGUiLCJsb2NhbE5hbWUiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZUVsZW1lbnROUyIsImlzIiwiY2hpbGROb2RlcyIsImlubmVySFRNTCIsImNoZWNrZWQiLCJjdXJyZW50IiwidW5tb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiSCIsIkkiLCJMIiwiTSIsIkNvbnN1bWVyIiwiUHJvdmlkZXIiLCJzcGxpY2UiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZENhdGNoIiwiZm9yY2VVcGRhdGUiLCJiaW5kIiwiX19IIiwiY29uY2F0IiwidXNlRGVidWdWYWx1ZSIsIkYiLCJmb3JFYWNoIiwicSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJjcmVhdGUiLCJfX3Byb3RvX18iLCJpc1JlYWN0Q29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJTIiwiUiIsIm9ubHkiLCJ0b0FycmF5IiwiVSIsIl9fdSIsImRlZmF1bHQiLCJPIiwiZmFsbGJhY2siLCJkZWxldGUiLCJyZXZlYWxPcmRlciIsInNpemUiLCJnZXQiLCJNYXAiLCJzZXQiLCJXIiwiY29udGFpbmVyIiwiZm9yIiwiZmlyc3RDaGlsZCIsIlYiLCJaIiwiY29uZmlndXJhYmxlIiwicGVyc2lzdCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwibmF0aXZlRXZlbnQiLCJjbGFzcyIsIiQkdHlwZW9mIiwiZW51bWVyYWJsZSIsImRlZmF1bHRWYWx1ZSIsIm11bHRpcGxlIiwib25kb3VibGVjbGljayIsIm9uZGJsY2xpY2siLCJvbmJlZm9yZWlucHV0Iiwib25jaGFuZ2UiLCJvbmlucHV0IiwiQiIsIkciLCJKIiwiSyIsIlEiLCJYIiwiWSIsInVzZVJlZHVjZXIiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlTWVtbyIsInVzZUNvbnRleHQiLCJDaGlsZHJlbiIsImh5ZHJhdGUiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwiY3JlYXRlUG9ydGFsIiwiY3JlYXRlQ29udGV4dCIsImNyZWF0ZUZhY3RvcnkiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVSZWYiLCJpc1ZhbGlkRWxlbWVudCIsImZpbmRET01Ob2RlIiwiQ29tcG9uZW50IiwiUHVyZUNvbXBvbmVudCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwidW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMiLCJTdXNwZW5zZSIsIlN1c3BlbnNlTGlzdCIsImxhenkiLCJjYW5Qcm9taXNlIiwiQ2FudmFzUmVuZGVyZXIiLCJTdmdSZW5kZXJlciIsInJlbmRlckNhbnZhcyIsInJlbmRlckZ1bmMiLCJjYW52YXMiLCJhcmdzTnVtIiwiaXNMYXN0QXJnQ2IiLCJnZXRDb250ZXh0IiwidG9DYW52YXMiLCJ0b0RhdGFVUkwiLCJyZW5kZXJUb0RhdGFVUkwiLCJnZXRTeW1ib2xTaXplIiwiZ2V0Um93Q29sQ29vcmRzIiwicG9zQ291bnQiLCJmbG9vciIsImludGVydmFscyIsInBvc2l0aW9ucyIsImdldFBvc2l0aW9ucyIsImNvb3JkcyIsInBvcyIsInBvc0xlbmd0aCIsIk1vZGUiLCJBTFBIQV9OVU1fQ0hBUlMiLCJBbHBoYW51bWVyaWNEYXRhIiwibW9kZSIsIkFMUEhBTlVNRVJJQyIsImdldEJpdHNMZW5ndGgiLCJnZXRMZW5ndGgiLCJ3cml0ZSIsImJpdEJ1ZmZlciIsInB1dCIsIkJpdEJ1ZmZlciIsImJ1ZmZlciIsImJ1ZkluZGV4IiwibnVtIiwicHV0Qml0IiwiZ2V0TGVuZ3RoSW5CaXRzIiwiYml0IiwiQnVmZmVyVXRpbCIsIkJpdE1hdHJpeCIsImFsbG9jIiwicmVzZXJ2ZWRCaXQiLCJyb3ciLCJjb2wiLCJyZXNlcnZlZCIsInhvciIsImlzUmVzZXJ2ZWQiLCJCeXRlRGF0YSIsIkJZVEUiLCJmcm9tIiwiRUNMZXZlbCIsIkVDX0JMT0NLU19UQUJMRSIsIkVDX0NPREVXT1JEU19UQUJMRSIsImdldEJsb2Nrc0NvdW50IiwiZXJyb3JDb3JyZWN0aW9uTGV2ZWwiLCJnZXRUb3RhbENvZGV3b3Jkc0NvdW50IiwiaXNWYWxpZCIsImxldmVsIiwic3RyaW5nIiwiZnJvbVN0cmluZyIsIlV0aWxzIiwiRzE1X0JDSCIsImdldEJDSERpZ2l0IiwiZ2V0RW5jb2RlZEJpdHMiLCJtYXNrIiwiRVhQX1RBQkxFIiwiTE9HX1RBQkxFIiwiZXhwIiwibXVsIiwiS2FuamlEYXRhIiwiS0FOSkkiLCJ0b1NKSVMiLCJQYXR0ZXJucyIsIlBBVFRFUk4wMDAiLCJQQVRURVJOMDAxIiwiUEFUVEVSTjAxMCIsIlBBVFRFUk4wMTEiLCJQQVRURVJOMTAwIiwiUEFUVEVSTjEwMSIsIlBBVFRFUk4xMTAiLCJQQVRURVJOMTExIiwiUGVuYWx0eVNjb3JlcyIsImdldE1hc2tBdCIsIm1hc2tQYXR0ZXJuIiwiaXNOYU4iLCJwYXJzZUludCIsImdldFBlbmFsdHlOMSIsInBvaW50cyIsInNhbWVDb3VudENvbCIsInNhbWVDb3VudFJvdyIsImxhc3RDb2wiLCJsYXN0Um93IiwiZ2V0UGVuYWx0eU4yIiwibGFzdCIsImdldFBlbmFsdHlOMyIsImJpdHNDb2wiLCJiaXRzUm93IiwiZ2V0UGVuYWx0eU40IiwiZGFya0NvdW50IiwibW9kdWxlc0NvdW50IiwiYWJzIiwiYXBwbHlNYXNrIiwicGF0dGVybiIsImdldEJlc3RNYXNrIiwic2V0dXBGb3JtYXRGdW5jIiwibnVtUGF0dGVybnMiLCJrZXlzIiwiYmVzdFBhdHRlcm4iLCJsb3dlclBlbmFsdHkiLCJJbmZpbml0eSIsInBlbmFsdHkiLCJWZXJzaW9uQ2hlY2siLCJSZWdleCIsIk5VTUVSSUMiLCJjY0JpdHMiLCJNSVhFRCIsImdldENoYXJDb3VudEluZGljYXRvciIsImdldEJlc3RNb2RlRm9yRGF0YSIsImRhdGFTdHIiLCJ0ZXN0TnVtZXJpYyIsInRlc3RBbHBoYW51bWVyaWMiLCJ0ZXN0S2FuamkiLCJOdW1lcmljRGF0YSIsImdyb3VwIiwic3Vic3RyIiwicmVtYWluaW5nTnVtIiwiR0YiLCJwMSIsInAyIiwiY29lZmYiLCJtb2QiLCJkaXZpZGVudCIsImRpdmlzb3IiLCJvZmZzZXQiLCJnZW5lcmF0ZUVDUG9seW5vbWlhbCIsImRlZ3JlZSIsInBvbHkiLCJBbGlnbm1lbnRQYXR0ZXJuIiwiRmluZGVyUGF0dGVybiIsIk1hc2tQYXR0ZXJuIiwiRUNDb2RlIiwiUmVlZFNvbG9tb25FbmNvZGVyIiwiVmVyc2lvbiIsIkZvcm1hdEluZm8iLCJTZWdtZW50cyIsInNldHVwRm9ybWF0SW5mbyIsIm1hdHJpeCIsImJpdHMiLCJjcmVhdGVEYXRhIiwic2VnbWVudHMiLCJkYXRhVG90YWxDb2Rld29yZHNCaXRzIiwiZ2V0U3ltYm9sVG90YWxDb2Rld29yZHMiLCJyZW1haW5pbmdCeXRlIiwidG90YWxDb2Rld29yZHMiLCJlY1RvdGFsQ29kZXdvcmRzIiwiZGF0YVRvdGFsQ29kZXdvcmRzIiwiZWNUb3RhbEJsb2NrcyIsImJsb2Nrc0luR3JvdXAxIiwidG90YWxDb2Rld29yZHNJbkdyb3VwMSIsImRhdGFDb2Rld29yZHNJbkdyb3VwMSIsImRhdGFDb2Rld29yZHNJbkdyb3VwMiIsImVjQ291bnQiLCJycyIsImRjRGF0YSIsImVjRGF0YSIsIm1heERhdGFTaXplIiwiZGF0YVNpemUiLCJlbmNvZGUiLCJtYXgiLCJjcmVhdGVDb2Rld29yZHMiLCJjcmVhdGVTeW1ib2wiLCJmcm9tQXJyYXkiLCJlc3RpbWF0ZWRWZXJzaW9uIiwicmF3U2VnbWVudHMiLCJyYXdTcGxpdCIsImdldEJlc3RWZXJzaW9uRm9yRGF0YSIsImJlc3RWZXJzaW9uIiwiZGF0YUJpdHMiLCJtb2R1bGVDb3VudCIsIm1vZHVsZXMiLCJzZXR1cEZpbmRlclBhdHRlcm4iLCJzZXR1cFRpbWluZ1BhdHRlcm4iLCJzZXR1cEFsaWdubWVudFBhdHRlcm4iLCJzZXR1cFZlcnNpb25JbmZvIiwiaW5jIiwiYml0SW5kZXgiLCJieXRlSW5kZXgiLCJkYXJrIiwic2V0dXBEYXRhIiwidG9TSklTRnVuYyIsInNldFRvU0pJU0Z1bmN0aW9uIiwiUG9seW5vbWlhbCIsIkJ1ZmZlciIsImdlblBvbHkiLCJpbml0aWFsaXplIiwicGFkIiwicGFkZGVkRGF0YSIsInJlbWFpbmRlciIsInN0YXJ0IiwiYnVmZiIsIm51bWVyaWMiLCJrYW5qaSIsImJ5dGUiLCJSZWdFeHAiLCJCWVRFX0tBTkpJIiwiVEVTVF9LQU5KSSIsIlRFU1RfTlVNRVJJQyIsIlRFU1RfQUxQSEFOVU1FUklDIiwic3RyIiwiZ2V0U3RyaW5nQnl0ZUxlbmd0aCIsInVuZXNjYXBlIiwiZ2V0U2VnbWVudHMiLCJnZXRTZWdtZW50c0Zyb21TdHJpbmciLCJudW1TZWdzIiwiYWxwaGFOdW1TZWdzIiwiYnl0ZVNlZ3MiLCJrYW5qaVNlZ3MiLCJpc0thbmppTW9kZUVuYWJsZWQiLCJzMSIsInMyIiwib2JqIiwiZ2V0U2VnbWVudEJpdHNMZW5ndGgiLCJidWlsZFNpbmdsZVNlZ21lbnQiLCJtb2Rlc0hpbnQiLCJiZXN0TW9kZSIsImFycmF5IiwiYWNjIiwic2VnIiwic2VncyIsImJ1aWxkTm9kZXMiLCJ0YWJsZSIsInByZXZOb2RlSWRzIiwibm9kZUdyb3VwIiwiY3VycmVudE5vZGVJZHMiLCJsYXN0Q291bnQiLCJwcmV2Tm9kZUlkIiwiYnVpbGRHcmFwaCIsIm9wdGltaXplZFNlZ3MiLCJjdXJyIiwicHJldlNlZyIsIm1lcmdlU2VnbWVudHMiLCJ0b1NKSVNGdW5jdGlvbiIsIkNPREVXT1JEU19DT1VOVCIsImRpZ2l0IiwiRzE4X0JDSCIsImdldFJlc2VydmVkQml0c0NvdW50IiwiZ2V0VG90YWxCaXRzRnJvbURhdGFBcnJheSIsInRvdGFsQml0cyIsInJlc2VydmVkQml0cyIsImdldENhcGFjaXR5IiwidXNhYmxlQml0cyIsImVjbCIsImN1cnJlbnRWZXJzaW9uIiwiZ2V0QmVzdFZlcnNpb25Gb3JNaXhlZERhdGEiLCJnZXRCZXN0VmVyc2lvbkZvckRhdGFMZW5ndGgiLCJxckRhdGEiLCJjYW52YXNFbCIsImdldENhbnZhc0VsZW1lbnQiLCJnZXRPcHRpb25zIiwiZ2V0SW1hZ2VXaWR0aCIsImN0eCIsImltYWdlIiwiY3JlYXRlSW1hZ2VEYXRhIiwicXJUb0ltYWdlRGF0YSIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xlYXJDYW52YXMiLCJwdXRJbWFnZURhdGEiLCJyZW5kZXJlck9wdHMiLCJxdWFsaXR5IiwiZ2V0Q29sb3JBdHRyaWIiLCJhdHRyaWIiLCJhbHBoYSIsImhleCIsInRvRml4ZWQiLCJzdmdDbWQiLCJjbWQiLCJxcmNvZGVzaXplIiwiYmciLCJsaWdodCIsIm1vdmVCeSIsIm5ld1JvdyIsImxpbmVMZW5ndGgiLCJxclRvUGF0aCIsInZpZXdCb3giLCJzdmdUYWciLCJoZXgycmdiYSIsImhleENvZGUiLCJhcHBseSIsImhleFZhbHVlIiwic2NhbGUiLCJnZXRTY2FsZSIsInFyU2l6ZSIsImltZ0RhdGEiLCJxciIsInN5bWJvbFNpemUiLCJzY2FsZWRNYXJnaW4iLCJwYWxldHRlIiwicG9zRHN0IiwicHhDb2xvciIsIlRZUEVEX0FSUkFZX1NVUFBPUlQiLCJVaW50OEFycmF5IiwiZm9vIiwidHlwZWRBcnJheVN1cHBvcnQiLCJLX01BWF9MRU5HVEgiLCJhcmciLCJhbGxvY1Vuc2FmZSIsInRoYXQiLCJUeXBlRXJyb3IiLCJBcnJheUJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJieXRlTGVuZ3RoIiwiUmFuZ2VFcnJvciIsImJ1ZiIsImZyb21BcnJheUxpa2UiLCJmcm9tQXJyYXlCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJhY3R1YWwiLCJpc0J1ZmZlciIsImxlbiIsInZhbCIsImlzbmFuIiwiZnJvbU9iamVjdCIsInV0ZjhUb0J5dGVzIiwidW5pdHMiLCJjb2RlUG9pbnQiLCJsZWFkU3Vycm9nYXRlIiwiYnl0ZXMiLCJjaGFyQ29kZUF0IiwiaXNWaWV3Iiwic3BlY2llcyIsIndyaXRhYmxlIiwiaXNGaW5pdGUiLCJyZW1haW5pbmciLCJkc3QiLCJibGl0QnVmZmVyIiwidXRmOFdyaXRlIiwiZW5kIiwibmV3QnVmIiwic3ViYXJyYXkiLCJzbGljZUxlbiIsInRhcmdldFN0YXJ0IiwiY29kZSIsImxpc3QiLCJfaXNCdWZmZXIiLCJiYXNlNjQiLCJpZWVlNzU0IiwiY3VzdG9tSW5zcGVjdFN5bWJvbCIsInNldFByb3RvdHlwZU9mIiwiZW5jb2RpbmdPck9mZnNldCIsImVuY29kaW5nIiwiaXNFbmNvZGluZyIsImFycmF5VmlldyIsImlzSW5zdGFuY2UiLCJmcm9tQXJyYXlWaWV3IiwiU2hhcmVkQXJyYXlCdWZmZXIiLCJ2YWx1ZU9mIiwibnVtYmVySXNOYU4iLCJ0b1ByaW1pdGl2ZSIsImFzc2VydFNpemUiLCJtdXN0TWF0Y2giLCJsb3dlcmVkQ2FzZSIsImJhc2U2NFRvQnl0ZXMiLCJzbG93VG9TdHJpbmciLCJoZXhTbGljZSIsInV0ZjhTbGljZSIsImFzY2lpU2xpY2UiLCJsYXRpbjFTbGljZSIsImJhc2U2NFNsaWNlIiwidXRmMTZsZVNsaWNlIiwic3dhcCIsImJpZGlyZWN0aW9uYWxJbmRleE9mIiwiZGlyIiwiYXJyYXlJbmRleE9mIiwibGFzdEluZGV4T2YiLCJpbmRleFNpemUiLCJhcnJMZW5ndGgiLCJ2YWxMZW5ndGgiLCJTdHJpbmciLCJyZWFkIiwicmVhZFVJbnQxNkJFIiwiZm91bmRJbmRleCIsImZvdW5kIiwiaGV4V3JpdGUiLCJOdW1iZXIiLCJzdHJMZW4iLCJwYXJzZWQiLCJhc2NpaVdyaXRlIiwiYnl0ZUFycmF5IiwiYXNjaWlUb0J5dGVzIiwiYmFzZTY0V3JpdGUiLCJ1Y3MyV3JpdGUiLCJoaSIsImxvIiwidXRmMTZsZVRvQnl0ZXMiLCJmcm9tQnl0ZUFycmF5IiwibWluIiwiZmlyc3RCeXRlIiwiYnl0ZXNQZXJTZXF1ZW5jZSIsInNlY29uZEJ5dGUiLCJ0aGlyZEJ5dGUiLCJmb3VydGhCeXRlIiwidGVtcENvZGVQb2ludCIsImNvZGVQb2ludHMiLCJNQVhfQVJHVU1FTlRTX0xFTkdUSCIsImZyb21DaGFyQ29kZSIsImRlY29kZUNvZGVQb2ludHNBcnJheSIsInByb3RvIiwicG9vbFNpemUiLCJhbGxvY1Vuc2FmZVNsb3ciLCJjb21wYXJlIiwic3dhcDE2Iiwic3dhcDMyIiwic3dhcDY0IiwidG9Mb2NhbGVTdHJpbmciLCJlcXVhbHMiLCJpbnNwZWN0IiwidGhpc1N0YXJ0IiwidGhpc0VuZCIsInRoaXNDb3B5IiwidGFyZ2V0Q29weSIsInRvSlNPTiIsIl9hcnIiLCJyZXQiLCJvdXQiLCJoZXhTbGljZUxvb2t1cFRhYmxlIiwiY2hlY2tPZmZzZXQiLCJleHQiLCJjaGVja0ludCIsImNoZWNrSUVFRTc1NCIsIndyaXRlRmxvYXQiLCJsaXR0bGVFbmRpYW4iLCJub0Fzc2VydCIsIndyaXRlRG91YmxlIiwicmVhZFVpbnRMRSIsInJlYWRVSW50TEUiLCJyZWFkVWludEJFIiwicmVhZFVJbnRCRSIsInJlYWRVaW50OCIsInJlYWRVSW50OCIsInJlYWRVaW50MTZMRSIsInJlYWRVSW50MTZMRSIsInJlYWRVaW50MTZCRSIsInJlYWRVaW50MzJMRSIsInJlYWRVSW50MzJMRSIsInJlYWRVaW50MzJCRSIsInJlYWRVSW50MzJCRSIsInJlYWRJbnRMRSIsInBvdyIsInJlYWRJbnRCRSIsInJlYWRJbnQ4IiwicmVhZEludDE2TEUiLCJyZWFkSW50MTZCRSIsInJlYWRJbnQzMkxFIiwicmVhZEludDMyQkUiLCJyZWFkRmxvYXRMRSIsInJlYWRGbG9hdEJFIiwicmVhZERvdWJsZUxFIiwicmVhZERvdWJsZUJFIiwid3JpdGVVaW50TEUiLCJ3cml0ZVVJbnRMRSIsIndyaXRlVWludEJFIiwid3JpdGVVSW50QkUiLCJ3cml0ZVVpbnQ4Iiwid3JpdGVVSW50OCIsIndyaXRlVWludDE2TEUiLCJ3cml0ZVVJbnQxNkxFIiwid3JpdGVVaW50MTZCRSIsIndyaXRlVUludDE2QkUiLCJ3cml0ZVVpbnQzMkxFIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVWludDMyQkUiLCJ3cml0ZVVJbnQzMkJFIiwid3JpdGVJbnRMRSIsImxpbWl0Iiwid3JpdGVJbnRCRSIsIndyaXRlSW50OCIsIndyaXRlSW50MTZMRSIsIndyaXRlSW50MTZCRSIsIndyaXRlSW50MzJMRSIsIndyaXRlSW50MzJCRSIsIndyaXRlRmxvYXRMRSIsIndyaXRlRmxvYXRCRSIsIndyaXRlRG91YmxlTEUiLCJ3cml0ZURvdWJsZUJFIiwiY29weVdpdGhpbiIsIklOVkFMSURfQkFTRTY0X1JFIiwidG9CeXRlQXJyYXkiLCJiYXNlNjRjbGVhbiIsImFscGhhYmV0IiwiaTE2IiwicmFuZ2VDb3VudCIsImFjdGl2ZSIsImFjdGl2ZUVsZW1lbnQiLCJyYW5nZXMiLCJnZXRSYW5nZUF0IiwidGFnTmFtZSIsInRvVXBwZXJDYXNlIiwiYmx1ciIsImZvY3VzIl0sInNvdXJjZVJvb3QiOiIifQ==