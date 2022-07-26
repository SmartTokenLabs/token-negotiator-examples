"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  88403: (e, t, n) => {
    n.r(t), n.d(t, {
      Web3WalletProvider: () => a,
      default: () => c
    });
    var r = n(241);
    var o = n(76677);
    var s = function(e, t, n, r) {
      return new (n || (n = Promise))((function(o, s) {
        function i(e) {
          try {
            c(r.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(r.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? o(e.value) : function(e) {
            return e instanceof n ? e : new n((function(t) {
              t(e);
            }));
          }(e.value).then(i, a);
        }
        c((r = r.apply(e, t || [])).next());
      }));
    };
    var i = function(e, t) {
      var n, r, o, s, i = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1];
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
            if (n) throw new TypeError("Generator is already executing.");
            for (;i; ) try {
              if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;
              switch (r = 0, o && (s = [ 2 & s[0], o.value ]), s[0]) {
               case 0:
               case 1:
                o = s;
                break;

               case 4:
                return i.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                i.label++, r = s[1], s = [ 0 ];
                continue;

               case 7:
                s = i.ops.pop(), i.trys.pop();
                continue;

               default:
                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  i = 0;
                  continue;
                }
                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                  i.label = s[1];
                  break;
                }
                if (6 === s[0] && i.label < o[1]) {
                  i.label = o[1], o = s;
                  break;
                }
                if (o && i.label < o[2]) {
                  i.label = o[2], i.ops.push(s);
                  break;
                }
                o[2] && i.ops.pop(), i.trys.pop();
                continue;
              }
              s = t.call(e, i);
            } catch (a) {
              s = [ 6, a ], r = 0;
            } finally {
              n = o = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    };
    var a = function() {
      function e(e, t) {
        this.state = {
          addresses: []
        }, this.client = e, this.safeConnectOptions = t;
      }
      return e.prototype.connectWith = function(e) {
        return s(this, void 0, void 0, (function() {
          var t;
          return i(this, (function(n) {
            switch (n.label) {
             case 0:
              if (!e) throw new Error('Please provide a Wallet type to connect with.');
              return this[e] ? [ 4, this[e]() ] : [ 3, 2 ];

             case 1:
              return t = n.sent(), (0, o.kg)(2, 'address', t), [ 2, t ];

             case 2:
              throw new Error('Wallet type not found');
            }
          }));
        }));
      }, e.prototype.signWith = function(e, t) {
        return s(this, void 0, void 0, (function() {
          var n;
          return i(this, (function(o) {
            switch (o.label) {
             case 0:
              return n = new r.Q(t), [ 4, n.getSigner().signMessage(e) ];

             case 1:
              return [ 2, o.sent() ];
            }
          }));
        }));
      }, e.prototype.getConnectedWalletData = function() {
        return this.state.addresses;
      }, e.prototype.registerNewWalletAddress = function(e, t, n) {
        return this.state.addresses.push({
          address: e,
          chainId: t,
          provider: n
        }), this.state.addresses;
      }, e.prototype.MetaMask = function() {
        return s(this, void 0, void 0, (function() {
          var e, t, n;
          return i(this, (function(r) {
            switch (r.label) {
             case 0:
              return (0, o.kg)(2, 'connect MetaMask'), void 0 === window.ethereum ? [ 3, 3 ] : [ 4, window.ethereum.request({
                method: 'eth_requestAccounts'
              }) ];

             case 1:
              return e = r.sent(), [ 4, window.ethereum.request({
                method: 'eth_chainId'
              }) ];

             case 2:
              return t = r.sent(), n = e[0], [ 2, this.registerNewWalletAddress(n, parseInt(t, 16), ethereum) ];

             case 3:
              throw new Error("MetaMask is not available. Please check the extension is supported and active.");
            }
          }));
        }));
      }, e.prototype.WalletConnect = function() {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return i(this, (function(s) {
            switch (s.label) {
             case 0:
              return (0, o.kg)(2, 'connect Wallet Connect'), [ 4, Promise.all([ n.e(220), n.e(578), n.e(717) ]).then(n.bind(n, 26578)) ];

             case 1:
              return [ 4, s.sent().getWalletConnectProviderInstance() ];

             case 2:
              return [ 4, (e = s.sent()).enable() ];

             case 3:
              return s.sent(), [ 4, new r.Q(e).listAccounts() ];

             case 4:
              if (0 === (t = s.sent()).length) throw new Error("No accounts found via wallet-connect.");
              return [ 2, this.registerNewWalletAddress(t[0], '1', e) ];
            }
          }));
        }));
      }, e.prototype.Torus = function() {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return i(this, (function(o) {
            switch (o.label) {
             case 0:
              return [ 4, Promise.all([ n.e(220), n.e(65), n.e(88) ]).then(n.bind(n, 42065)) ];

             case 1:
              return [ 4, o.sent().getTorusProviderInstance() ];

             case 2:
              return [ 4, (e = o.sent()).init() ];

             case 3:
              return o.sent(), [ 4, e.login() ];

             case 4:
              return o.sent(), [ 4, new r.Q(e.provider).listAccounts() ];

             case 5:
              if (0 === (t = o.sent()).length) throw new Error("No accounts found via wallet-connect.");
              return [ 2, this.registerNewWalletAddress(t[0], '1', e.provider) ];
            }
          }));
        }));
      }, e.prototype.SafeConnect = function() {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return i(this, (function(n) {
            switch (n.label) {
             case 0:
              return (0, o.kg)(2, 'connect SafeConnect'), [ 4, this.getSafeConnectProvider() ];

             case 1:
              return [ 4, (e = n.sent()).initSafeConnect() ];

             case 2:
              return t = n.sent(), this.registerNewWalletAddress(t, "1", e), [ 2, t ];
            }
          }));
        }));
      }, e.prototype.safeConnectAvailable = function() {
        return void 0 !== this.safeConnectOptions;
      }, e.prototype.getSafeConnectProvider = function() {
        return s(this, void 0, void 0, (function() {
          return i(this, (function(e) {
            switch (e.label) {
             case 0:
              return [ 4, Promise.resolve().then(n.bind(n, 83603)) ];

             case 1:
              return [ 2, new (0, e.sent().SafeConnectProvider)(this.client.getUi(), this.safeConnectOptions) ];
            }
          }));
        }));
      }, e;
    }();
    const c = a;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZV9tb2R1bGVzL0B0b2tlbnNjcmlwdC90b2tlbi1uZWdvdGlhdG9yL2Rpc3Qvd2FsbGV0L1dlYjNXYWxsZXRQcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG52YXIgV2ViM1dhbGxldFByb3ZpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWIzV2FsbGV0UHJvdmlkZXIoY2xpZW50LCBzYWZlQ29ubmVjdE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgYWRkcmVzc2VzOiBbXSB9O1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgPSBzYWZlQ29ubmVjdE9wdGlvbnM7XG4gICAgfVxuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuY29ubmVjdFdpdGggPSBmdW5jdGlvbiAod2FsbGV0VHlwZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FsbGV0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgV2FsbGV0IHR5cGUgdG8gY29ubmVjdCB3aXRoLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW3dhbGxldFR5cGVdKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzW3dhbGxldFR5cGVdKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdhZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcignV2FsbGV0IHR5cGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zaWduV2l0aCA9IGZ1bmN0aW9uIChtZXNzYWdlLCB3YWxsZXRQcm92aWRlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIHNpZ25lcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdhbGxldFByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBzaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldENvbm5lY3RlZFdhbGxldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFkZHJlc3NlcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzID0gZnVuY3Rpb24gKGFkZHJlc3MsIGNoYWluSWQsIHByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYWRkcmVzc2VzLnB1c2goeyBhZGRyZXNzOiBhZGRyZXNzLCBjaGFpbklkOiBjaGFpbklkLCBwcm92aWRlcjogcHJvdmlkZXIgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFkZHJlc3NlcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuTWV0YU1hc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY2NvdW50cywgaGV4Q2hhaW5JZCwgYWNjb3VudEFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgTWV0YU1hc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9jaGFpbklkJyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhleENoYWluSWQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50QWRkcmVzcyA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50QWRkcmVzcywgcGFyc2VJbnQoaGV4Q2hhaW5JZCwgMTYpLCBldGhlcmV1bSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3YWxsZXRDb25uZWN0UHJvdmlkZXIsIHdhbGxldENvbm5lY3QsIHByb3ZpZGVyLCBhY2NvdW50cztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1dhbGxldENvbm5lY3RQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLmdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3YWxsZXRDb25uZWN0LmVuYWJsZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2FsbGV0Q29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmxpc3RBY2NvdW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWNjb3VudHMgZm91bmQgdmlhIHdhbGxldC1jb25uZWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0sICcxJywgd2FsbGV0Q29ubmVjdCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuVG9ydXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBUb3J1c1Byb3ZpZGVyLCB0b3J1cywgcHJvdmlkZXIsIGFjY291bnRzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydChcIi4vVG9ydXNQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvcnVzUHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFRvcnVzUHJvdmlkZXIuZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3J1cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5sb2dpbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodG9ydXMucHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5saXN0QWNjb3VudHMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdLCAnMScsIHRvcnVzLnByb3ZpZGVyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5TYWZlQ29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFNhZmVDb25uZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuZ2V0U2FmZUNvbm5lY3RQcm92aWRlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmluaXRTYWZlQ29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFkZHJlc3MsIFwiMVwiLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2FmZUNvbm5lY3RBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyAhPT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRTYWZlQ29ubmVjdFByb3ZpZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1NhZmVDb25uZWN0UHJvdmlkZXJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWZlQ29ubmVjdFByb3ZpZGVyID0gKF9hLnNlbnQoKSkuU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFNhZmVDb25uZWN0UHJvdmlkZXIodGhpcy5jbGllbnQuZ2V0VWkoKSwgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gV2ViM1dhbGxldFByb3ZpZGVyO1xufSgpKTtcbmV4cG9ydCB7IFdlYjNXYWxsZXRQcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgV2ViM1dhbGxldFByb3ZpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViM1dhbGxldFByb3ZpZGVyLmpzLm1hcCJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwiYWRvcHQiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJmIiwieSIsInQiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ0aGlzIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiV2ViM1dhbGxldFByb3ZpZGVyIiwiY2xpZW50Iiwic2FmZUNvbm5lY3RPcHRpb25zIiwic3RhdGUiLCJhZGRyZXNzZXMiLCJwcm90b3R5cGUiLCJjb25uZWN0V2l0aCIsIndhbGxldFR5cGUiLCJhZGRyZXNzIiwiX2EiLCJFcnJvciIsInNpZ25XaXRoIiwibWVzc2FnZSIsIndhbGxldFByb3ZpZGVyIiwicHJvdmlkZXIiLCJnZXRTaWduZXIiLCJzaWduTWVzc2FnZSIsImdldENvbm5lY3RlZFdhbGxldERhdGEiLCJyZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MiLCJjaGFpbklkIiwiTWV0YU1hc2siLCJhY2NvdW50cyIsImhleENoYWluSWQiLCJhY2NvdW50QWRkcmVzcyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcnNlSW50IiwiV2FsbGV0Q29ubmVjdCIsIndhbGxldENvbm5lY3QiLCJnZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZSIsImVuYWJsZSIsImxpc3RBY2NvdW50cyIsIlRvcnVzIiwidG9ydXMiLCJnZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UiLCJpbml0IiwibG9naW4iLCJTYWZlQ29ubmVjdCIsImdldFNhZmVDb25uZWN0UHJvdmlkZXIiLCJpbml0U2FmZUNvbm5lY3QiLCJzYWZlQ29ubmVjdEF2YWlsYWJsZSIsInVuZGVmaW5lZCIsIlNhZmVDb25uZWN0UHJvdmlkZXIiLCJnZXRVaSJdLCJzb3VyY2VSb290IjoiIn0=