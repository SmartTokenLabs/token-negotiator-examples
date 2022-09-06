"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  88403: (e, t, n) => {
    n.r(t), n.d(t, {
      Web3WalletProvider: () => a,
      default: () => u
    });
    var o = n(241);
    var r = n(76677);
    var i = n(25108);
    var s = function(e, t, n, o) {
      return new (n || (n = Promise))((function(r, i) {
        function s(e) {
          try {
            a(o.next(e));
          } catch (t) {
            i(t);
          }
        }
        function c(e) {
          try {
            a(o.throw(e));
          } catch (t) {
            i(t);
          }
        }
        function a(e) {
          e.done ? r(e.value) : function(e) {
            return e instanceof n ? e : new n((function(t) {
              t(e);
            }));
          }(e.value).then(s, c);
        }
        a((o = o.apply(e, t || [])).next());
      }));
    };
    var c = function(e, t) {
      var n, o, r, i, s = {
        label: 0,
        sent: function() {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
      }), i;
      function c(i) {
        return function(c) {
          return function(i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (;s; ) try {
              if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
              switch (o = 0, r && (i = [ 2 & i[0], r.value ]), i[0]) {
               case 0:
               case 1:
                r = i;
                break;

               case 4:
                return s.label++, {
                  value: i[1],
                  done: !1
                };

               case 5:
                s.label++, o = i[1], i = [ 0 ];
                continue;

               case 7:
                i = s.ops.pop(), s.trys.pop();
                continue;

               default:
                if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                  s = 0;
                  continue;
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                  s.label = i[1];
                  break;
                }
                if (6 === i[0] && s.label < r[1]) {
                  s.label = r[1], r = i;
                  break;
                }
                if (r && s.label < r[2]) {
                  s.label = r[2], s.ops.push(i);
                  break;
                }
                r[2] && s.ops.pop(), s.trys.pop();
                continue;
              }
              i = t.call(e, s);
            } catch (c) {
              i = [ 6, c ], o = 0;
            } finally {
              n = r = 0;
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([ i, c ]);
        };
      }
    };
    var a = function() {
      function e(e, t) {
        this.connections = {}, this.client = e, this.safeConnectOptions = t;
      }
      return e.prototype.saveConnections = function() {
        var t = {};
        for (var n in this.connections) {
          var o = this.connections[n];
          t[n] = {
            address: o.address,
            chainId: o.chainId,
            providerType: o.providerType,
            blockchain: o.blockchain
          };
        }
        localStorage.setItem(e.LOCAL_STORAGE_KEY, JSON.stringify(t));
      }, e.prototype.emitSavedConnection = function(e) {
        return Object.keys(this.connections).length && e ? (this.client.eventSender.emitConnectedWalletInstance(this.connections[e.toLocaleLowerCase()]), 
        this.connections[e.toLocaleLowerCase()]) : null;
      }, e.prototype.deleteConnections = function() {
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY);
      }, e.prototype.loadConnections = function() {
        return s(this, void 0, void 0, (function() {
          var t, n, o, r, s, a, u, l;
          return c(this, (function(c) {
            switch (c.label) {
             case 0:
              if (!(t = localStorage.getItem(e.LOCAL_STORAGE_KEY))) return [ 2 ];
              if (!(n = JSON.parse(t))) return [ 2 ];
              for (r in o = [], n) o.push(r);
              s = 0, c.label = 1;

             case 1:
              if (!(s < o.length)) return [ 3, 6 ];
              a = o[s], u = n[a], c.label = 2;

             case 2:
              return c.trys.push([ 2, 4, , 5 ]), [ 4, this.connectWith(u.providerType, !0) ];

             case 3:
              return c.sent(), [ 3, 5 ];

             case 4:
              return l = c.sent(), i.log("Wallet couldn't connect" + l.message), delete n[a], this.saveConnections(), this.emitSavedConnection(a), 
              [ 3, 5 ];

             case 5:
              return s++, [ 3, 1 ];

             case 6:
              return [ 2 ];
            }
          }));
        }));
      }, e.prototype.connectWith = function(e, t) {
        return void 0 === t && (t = !1), s(this, void 0, void 0, (function() {
          var n;
          return c(this, (function(o) {
            switch (o.label) {
             case 0:
              if (!e) throw new Error('Please provide a Wallet type to connect with.');
              return this[e] ? [ 4, this[e](t) ] : [ 3, 2 ];

             case 1:
              return n = o.sent(), (0, r.kg)(2, 'address', n), this.saveConnections(), this.emitSavedConnection(n), [ 2, n ];

             case 2:
              throw new Error('Wallet type not found');
            }
          }));
        }));
      }, e.prototype.signMessage = function(e, t) {
        return s(this, void 0, void 0, (function() {
          var n;
          return c(this, (function(o) {
            switch (o.label) {
             case 0:
              return n = this.getWalletProvider(e), [ 4, n.getSigner(e).signMessage(t) ];

             case 1:
              return [ 2, o.sent() ];
            }
          }));
        }));
      }, e.prototype.getWalletProvider = function(e) {
        var t;
        if (e = e.toLowerCase(), !(null === (t = this.connections[e]) || void 0 === t ? void 0 : t.provider)) throw new Error("Wallet provider not found for address");
        return this.connections[e].provider;
      }, e.prototype.getConnectedWalletData = function() {
        return Object.values(this.connections);
      }, e.prototype.registerNewWalletAddress = function(e, t, n, o, r) {
        return void 0 === r && (r = 'evm'), this.connections[e.toLowerCase()] = {
          address: e,
          chainId: t,
          providerType: n,
          provider: o,
          blockchain: r
        }, e;
      }, e.prototype.registerProvider = function(e, t) {
        return s(this, void 0, void 0, (function() {
          var n, o, r;
          var s = this;
          return c(this, (function(c) {
            switch (c.label) {
             case 0:
              return [ 4, e.listAccounts() ];

             case 1:
              return n = c.sent(), [ 4, e.detectNetwork() ];

             case 2:
              if (o = c.sent().chainId, 0 === n.length) throw new Error("No accounts found via wallet-connect.");
              return r = n[0], this.registerNewWalletAddress(r, o, t, e), e.provider.on("accountsChanged", (function(n) {
                r !== n[0] && (i.log("Account changed: " + n[0]), delete s.connections[r.toLowerCase()], r = n[0], s.registerNewWalletAddress(r, o, t, e), 
                s.saveConnections(), s.emitSavedConnection(r), s.client.getTokenStore().clearCachedTokens(), s.client.enrichTokenLookupDataOnChainTokens());
              })), [ 2, n[0] ];
            }
          }));
        }));
      }, e.prototype.MetaMask = function(e) {
        return s(this, void 0, void 0, (function() {
          var e;
          return c(this, (function(t) {
            switch (t.label) {
             case 0:
              return (0, r.kg)(2, 'connect MetaMask'), void 0 === window.ethereum ? [ 3, 2 ] : [ 4, window.ethereum.enable() ];

             case 1:
              return t.sent(), e = new o.Q(window.ethereum), [ 2, this.registerProvider(e, "MetaMask") ];

             case 2:
              throw new Error("MetaMask is not available. Please check the extension is supported and active.");
            }
          }));
        }));
      }, e.prototype.WalletConnect = function(e) {
        return s(this, void 0, void 0, (function() {
          var t;
          var i = this;
          return c(this, (function(s) {
            switch (s.label) {
             case 0:
              return (0, r.kg)(2, 'connect Wallet Connect'), [ 4, Promise.all([ n.e(220), n.e(578), n.e(717) ]).then(n.bind(n, 26578)) ];

             case 1:
              return [ 4, s.sent().getWalletConnectProviderInstance(e) ];

             case 2:
              return t = s.sent(), [ 2, new Promise((function(n, r) {
                e && t.connector.on("display_uri", (function(e, t) {
                  r(new Error("Connection expired"));
                })), t.enable().then((function() {
                  var e = new o.Q(t);
                  n(i.registerProvider(e, "WalletConnect"));
                })).catch((function(e) {
                  return r(e);
                }));
              })) ];
            }
          }));
        }));
      }, e.prototype.Torus = function(e) {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return c(this, (function(r) {
            switch (r.label) {
             case 0:
              return [ 4, Promise.all([ n.e(220), n.e(65), n.e(88) ]).then(n.bind(n, 42065)) ];

             case 1:
              return [ 4, r.sent().getTorusProviderInstance() ];

             case 2:
              return [ 4, (e = r.sent()).init() ];

             case 3:
              return r.sent(), [ 4, e.login() ];

             case 4:
              return r.sent(), t = new o.Q(e.provider), [ 2, this.registerProvider(t, "Torus") ];
            }
          }));
        }));
      }, e.prototype.Phantom = function() {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return c(this, (function(n) {
            switch (n.label) {
             case 0:
              return (0, r.kg)(2, 'connect Phantom'), void 0 === window.solana ? [ 3, 2 ] : [ 4, window.solana.connect() ];

             case 1:
              return e = n.sent(), t = e.publicKey.toBase58(), [ 2, this.registerNewWalletAddress(t, "mainnet-beta", 'phantom', window.solana, 'solana') ];

             case 2:
              throw new Error("MetaMask is not available. Please check the extension is supported and active.");
            }
          }));
        }));
      }, e.prototype.SafeConnect = function() {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return c(this, (function(n) {
            switch (n.label) {
             case 0:
              return (0, r.kg)(2, 'connect SafeConnect'), [ 4, this.getSafeConnectProvider() ];

             case 1:
              return [ 4, (e = n.sent()).initSafeConnect() ];

             case 2:
              return t = n.sent(), this.registerNewWalletAddress(t, 1, "SafeConnect", e), [ 2, t ];
            }
          }));
        }));
      }, e.prototype.safeConnectAvailable = function() {
        return void 0 !== this.safeConnectOptions;
      }, e.prototype.getSafeConnectProvider = function() {
        return s(this, void 0, void 0, (function() {
          return c(this, (function(e) {
            switch (e.label) {
             case 0:
              return [ 4, Promise.resolve().then(n.bind(n, 67393)) ];

             case 1:
              return [ 2, new (0, e.sent().SafeConnectProvider)(this.client.getUi(), this.safeConnectOptions) ];
            }
          }));
        }));
      }, e.LOCAL_STORAGE_KEY = "tn-wallet-connections", e;
    }();
    const u = a;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1gsS0E5UnlCO0lBZ1N6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b2tlbnNjcmlwdC90b2tlbi1uZWdvdGlhdG9yL2Rpc3Qvd2FsbGV0L1dlYjNXYWxsZXRQcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG52YXIgV2ViM1dhbGxldFByb3ZpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWIzV2FsbGV0UHJvdmlkZXIoY2xpZW50LCBzYWZlQ29ubmVjdE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgPSBzYWZlQ29ubmVjdE9wdGlvbnM7XG4gICAgfVxuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2F2ZUNvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2F2ZWRDb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBhZGRyZXNzIGluIHRoaXMuY29ubmVjdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBjb24gPSB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdO1xuICAgICAgICAgICAgc2F2ZWRDb25uZWN0aW9uc1thZGRyZXNzXSA9IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBjb24uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBjaGFpbklkOiBjb24uY2hhaW5JZCxcbiAgICAgICAgICAgICAgICBwcm92aWRlclR5cGU6IGNvbi5wcm92aWRlclR5cGUsXG4gICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogY29uLmJsb2NrY2hhaW5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZENvbm5lY3Rpb25zKSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmVtaXRTYXZlZENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jb25uZWN0aW9ucykubGVuZ3RoICYmXG4gICAgICAgICAgICBhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5ldmVudFNlbmRlci5lbWl0Q29ubmVjdGVkV2FsbGV0SW5zdGFuY2UodGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG9jYWxlTG93ZXJDYXNlKCldKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb2NhbGVMb3dlckNhc2UoKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5kZWxldGVDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5sb2FkQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBzdGF0ZSwgX2EsIF9iLCBfaSwgYWRkcmVzcywgY29ubmVjdGlvbiwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9iIGluIHN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnB1c2goX2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IF9hLmxlbmd0aCkpIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmNvbm5lY3RXaXRoKGNvbm5lY3Rpb24ucHJvdmlkZXJUeXBlLCB0cnVlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGNvdWxkbid0IGNvbm5lY3RcIiArIGVfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuY29ubmVjdFdpdGggPSBmdW5jdGlvbiAod2FsbGV0VHlwZSwgY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICBpZiAoY2hlY2tDb25uZWN0aW9uT25seSA9PT0gdm9pZCAwKSB7IGNoZWNrQ29ubmVjdGlvbk9ubHkgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FsbGV0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgV2FsbGV0IHR5cGUgdG8gY29ubmVjdCB3aXRoLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW3dhbGxldFR5cGVdKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzW3dhbGxldFR5cGVdKGNoZWNrQ29ubmVjdGlvbk9ubHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnYWRkcmVzcycsIGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdXYWxsZXQgdHlwZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNpZ25NZXNzYWdlID0gZnVuY3Rpb24gKGFkZHJlc3MsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBzaWduZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IHRoaXMuZ2V0V2FsbGV0UHJvdmlkZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0V2FsbGV0UHJvdmlkZXIgPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghKChfYSA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm92aWRlcikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXYWxsZXQgcHJvdmlkZXIgbm90IGZvdW5kIGZvciBhZGRyZXNzXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXS5wcm92aWRlcjtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29ubmVjdGVkV2FsbGV0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jb25uZWN0aW9ucyk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyA9IGZ1bmN0aW9uIChhZGRyZXNzLCBjaGFpbklkLCBwcm92aWRlclR5cGUsIHByb3ZpZGVyLCBibG9ja2NoYWluKSB7XG4gICAgICAgIGlmIChibG9ja2NoYWluID09PSB2b2lkIDApIHsgYmxvY2tjaGFpbiA9ICdldm0nOyB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvd2VyQ2FzZSgpXSA9IHsgYWRkcmVzczogYWRkcmVzcywgY2hhaW5JZDogY2hhaW5JZCwgcHJvdmlkZXJUeXBlOiBwcm92aWRlclR5cGUsIHByb3ZpZGVyOiBwcm92aWRlciwgYmxvY2tjaGFpbjogYmxvY2tjaGFpbiB9O1xuICAgICAgICByZXR1cm4gYWRkcmVzcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlciwgcHJvdmlkZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY2NvdW50cywgY2hhaW5JZCwgY3VyQWNjb3VudDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgcHJvdmlkZXIubGlzdEFjY291bnRzKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcHJvdmlkZXIuZGV0ZWN0TmV0d29yaygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZCA9IChfYS5zZW50KCkpLmNoYWluSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWNjb3VudHMgZm91bmQgdmlhIHdhbGxldC1jb25uZWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgZnVuY3Rpb24gKGFjY291bnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckFjY291bnQgPT09IGFjY291bnRzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGNoYW5nZWQ6IFwiICsgYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5jb25uZWN0aW9uc1tjdXJBY2NvdW50LnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VyQWNjb3VudCwgY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihjdXJBY2NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZ2V0VG9rZW5TdG9yZSgpLmNsZWFyQ2FjaGVkVG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmVucmljaFRva2VuTG9va3VwRGF0YU9uQ2hhaW5Ub2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhY2NvdW50c1swXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5NZXRhTWFzayA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBNZXRhTWFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsIFwiTWV0YU1hc2tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3QgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLCB3YWxsZXRDb25uZWN0O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1dhbGxldENvbm5lY3RQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLmdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlKGNoZWNrQ29ubmVjdGlvbk9ubHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdC5jb25uZWN0b3Iub24oXCJkaXNwbGF5X3VyaVwiLCBmdW5jdGlvbiAoZXJyLCBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gZXhwaXJlZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0LmVuYWJsZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdhbGxldENvbm5lY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCBcIldhbGxldENvbm5lY3RcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gcmVqZWN0KGUpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5Ub3J1cyA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBUb3J1c1Byb3ZpZGVyLCB0b3J1cywgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KFwiLi9Ub3J1c1Byb3ZpZGVyXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9ydXNQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgVG9ydXNQcm92aWRlci5nZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcnVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5pbml0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRvcnVzLmxvZ2luKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih0b3J1cy5wcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgXCJUb3J1c1wiKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5QaGFudG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiwgYWNjb3VudEFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgUGhhbnRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5zb2xhbmEgIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LnNvbGFuYS5jb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEFkZHJlc3MgPSBjb25uZWN0aW9uLnB1YmxpY0tleS50b0Jhc2U1OCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50QWRkcmVzcywgXCJtYWlubmV0LWJldGFcIiwgJ3BoYW50b20nLCB3aW5kb3cuc29sYW5hLCAnc29sYW5hJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlNhZmVDb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIGFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgU2FmZUNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5nZXRTYWZlQ29ubmVjdFByb3ZpZGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcHJvdmlkZXIuaW5pdFNhZmVDb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWRkcmVzcywgMSwgXCJTYWZlQ29ubmVjdFwiLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2FmZUNvbm5lY3RBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyAhPT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRTYWZlQ29ubmVjdFByb3ZpZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1NhZmVDb25uZWN0UHJvdmlkZXJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWZlQ29ubmVjdFByb3ZpZGVyID0gKF9hLnNlbnQoKSkuU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFNhZmVDb25uZWN0UHJvdmlkZXIodGhpcy5jbGllbnQuZ2V0VWkoKSwgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkgPSBcInRuLXdhbGxldC1jb25uZWN0aW9uc1wiO1xuICAgIHJldHVybiBXZWIzV2FsbGV0UHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgV2ViM1dhbGxldFByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBXZWIzV2FsbGV0UHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWIzV2FsbGV0UHJvdmlkZXIuanMubWFwIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhZG9wdCIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImYiLCJ5IiwidCIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJXZWIzV2FsbGV0UHJvdmlkZXIiLCJjbGllbnQiLCJzYWZlQ29ubmVjdE9wdGlvbnMiLCJjb25uZWN0aW9ucyIsInByb3RvdHlwZSIsInNhdmVDb25uZWN0aW9ucyIsInNhdmVkQ29ubmVjdGlvbnMiLCJhZGRyZXNzIiwiY29uIiwiY2hhaW5JZCIsInByb3ZpZGVyVHlwZSIsImJsb2NrY2hhaW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9DQUxfU1RPUkFHRV9LRVkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1pdFNhdmVkQ29ubmVjdGlvbiIsIk9iamVjdCIsImtleXMiLCJldmVudFNlbmRlciIsImVtaXRDb25uZWN0ZWRXYWxsZXRJbnN0YW5jZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZGVsZXRlQ29ubmVjdGlvbnMiLCJyZW1vdmVJdGVtIiwibG9hZENvbm5lY3Rpb25zIiwiZGF0YSIsInN0YXRlIiwiX2EiLCJfYiIsIl9pIiwiY29ubmVjdGlvbiIsImVfMSIsIl9jIiwiZ2V0SXRlbSIsInBhcnNlIiwiY29ubmVjdFdpdGgiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIndhbGxldFR5cGUiLCJjaGVja0Nvbm5lY3Rpb25Pbmx5IiwiRXJyb3IiLCJzaWduTWVzc2FnZSIsInByb3ZpZGVyIiwiZ2V0V2FsbGV0UHJvdmlkZXIiLCJnZXRTaWduZXIiLCJ0b0xvd2VyQ2FzZSIsImdldENvbm5lY3RlZFdhbGxldERhdGEiLCJ2YWx1ZXMiLCJyZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MiLCJyZWdpc3RlclByb3ZpZGVyIiwicHJvdmlkZXJOYW1lIiwiYWNjb3VudHMiLCJjdXJBY2NvdW50IiwiX3RoaXMiLCJsaXN0QWNjb3VudHMiLCJkZXRlY3ROZXR3b3JrIiwib24iLCJnZXRUb2tlblN0b3JlIiwiY2xlYXJDYWNoZWRUb2tlbnMiLCJlbnJpY2hUb2tlbkxvb2t1cERhdGFPbkNoYWluVG9rZW5zIiwiTWV0YU1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRDb25uZWN0IiwiZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UiLCJjb25uZWN0b3IiLCJlcnIiLCJwYXlsb2FkIiwiY2F0Y2giLCJUb3J1cyIsInRvcnVzIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiaW5pdCIsImxvZ2luIiwiUGhhbnRvbSIsImFjY291bnRBZGRyZXNzIiwic29sYW5hIiwiY29ubmVjdCIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiU2FmZUNvbm5lY3QiLCJnZXRTYWZlQ29ubmVjdFByb3ZpZGVyIiwiaW5pdFNhZmVDb25uZWN0Iiwic2FmZUNvbm5lY3RBdmFpbGFibGUiLCJ1bmRlZmluZWQiLCJTYWZlQ29ubmVjdFByb3ZpZGVyIiwiZ2V0VWkiXSwic291cmNlUm9vdCI6IiJ9