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
      }, e.prototype.emitNetworkChange = function(e) {
        if (e) return this.client.eventSender.emitNetworkChange(e), e;
      }, e.prototype.deleteConnections = function() {
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY), localStorage.removeItem("walletconnect");
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
          var i = this;
          return c(this, (function(s) {
            switch (s.label) {
             case 0:
              return [ 4, e.listAccounts() ];

             case 1:
              return n = s.sent(), [ 4, e.detectNetwork() ];

             case 2:
              if (o = s.sent().chainId, 0 === n.length) throw new Error("No accounts found via wallet-connect.");
              return r = n[0], this.registerNewWalletAddress(r, o, t, e), e.provider.on("accountsChanged", (function(n) {
                r !== n[0] && (delete i.connections[r.toLowerCase()], r = n[0], i.registerNewWalletAddress(r, o, t, e), i.saveConnections(), 
                i.emitSavedConnection(r), i.client.getTokenStore().clearCachedTokens(), i.client.enrichTokenLookupDataOnChainTokens());
              })), e.provider.on("chainChanged", (function(o) {
                i.registerNewWalletAddress(n[0], o, t, e), i.saveConnections(), i.emitNetworkChange(o);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxFQUFZYyxPQUFNLFNBQVVzQztZQUMvQixRQUFRQSxFQUFHN0M7YUFDUCxLQUFLO2NBQUcsT0FBTyxFQUFDLEdBQUc7O2FBQ25CLEtBQUs7Y0FFRCxPQUFPLEVBQUMsR0FBRyxLQURYMkcsR0FBdUI5RCxFQUFHNUMsT0FBUTBHLHFCQUNDcEcsS0FBS1UsT0FBTzJGLFNBQVNyRyxLQUFLVzs7QUFFekU7QUFDSjtBQUNKLFNBQ0FGLEVBQW1CYyxvQkFBb0IseUJBQ2hDZDtBQUNYLEtBelN5QjtJQTJTekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9rZW5zY3JpcHQvdG9rZW4tbmVnb3RpYXRvci9kaXN0L3dhbGxldC9XZWIzV2FsbGV0UHJvdmlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gXCIuLi91dGlsc1wiO1xudmFyIFdlYjNXYWxsZXRQcm92aWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2ViM1dhbGxldFByb3ZpZGVyKGNsaWVudCwgc2FmZUNvbm5lY3RPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zID0gc2FmZUNvbm5lY3RPcHRpb25zO1xuICAgIH1cbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNhdmVDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNhdmVkQ29ubmVjdGlvbnMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgYWRkcmVzcyBpbiB0aGlzLmNvbm5lY3Rpb25zKSB7XG4gICAgICAgICAgICB2YXIgY29uID0gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXTtcbiAgICAgICAgICAgIHNhdmVkQ29ubmVjdGlvbnNbYWRkcmVzc10gPSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogY29uLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgY2hhaW5JZDogY29uLmNoYWluSWQsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJUeXBlOiBjb24ucHJvdmlkZXJUeXBlLFxuICAgICAgICAgICAgICAgIGJsb2NrY2hhaW46IGNvbi5ibG9ja2NoYWluXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRDb25uZWN0aW9ucykpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5lbWl0U2F2ZWRDb25uZWN0aW9uID0gZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY29ubmVjdGlvbnMpLmxlbmd0aCAmJlxuICAgICAgICAgICAgYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQuZXZlbnRTZW5kZXIuZW1pdENvbm5lY3RlZFdhbGxldEluc3RhbmNlKHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvY2FsZUxvd2VyQ2FzZSgpXSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG9jYWxlTG93ZXJDYXNlKCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZW1pdE5ldHdvcmtDaGFuZ2UgPSBmdW5jdGlvbiAoY2hhaW5JZCkge1xuICAgICAgICBpZiAoY2hhaW5JZCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQuZXZlbnRTZW5kZXIuZW1pdE5ldHdvcmtDaGFuZ2UoY2hhaW5JZCk7XG4gICAgICAgICAgICByZXR1cm4gY2hhaW5JZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5kZWxldGVDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIndhbGxldGNvbm5lY3RcIik7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmxvYWRDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEsIHN0YXRlLCBfYSwgX2IsIF9pLCBhZGRyZXNzLCBjb25uZWN0aW9uLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2IgaW4gc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EucHVzaChfYik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9pIDwgX2EubGVuZ3RoKSkgcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gc3RhdGVbYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMiwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuY29ubmVjdFdpdGgoY29ubmVjdGlvbi5wcm92aWRlclR5cGUsIHRydWUpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYWxsZXQgY291bGRuJ3QgY29ubmVjdFwiICsgZV8xLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pKys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5jb25uZWN0V2l0aCA9IGZ1bmN0aW9uICh3YWxsZXRUeXBlLCBjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIGlmIChjaGVja0Nvbm5lY3Rpb25Pbmx5ID09PSB2b2lkIDApIHsgY2hlY2tDb25uZWN0aW9uT25seSA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3YWxsZXRUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBXYWxsZXQgdHlwZSB0byBjb25uZWN0IHdpdGguJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbd2FsbGV0VHlwZV0pIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXNbd2FsbGV0VHlwZV0oY2hlY2tDb25uZWN0aW9uT25seSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdhZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCB0eXBlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2lnbk1lc3NhZ2UgPSBmdW5jdGlvbiAoYWRkcmVzcywgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIHNpZ25lcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gdGhpcy5nZXRXYWxsZXRQcm92aWRlcihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgc2lnbmVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIsIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRXYWxsZXRQcm92aWRlciA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3MudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCEoKF9hID0gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb3ZpZGVyKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldhbGxldCBwcm92aWRlciBub3QgZm91bmQgZm9yIGFkZHJlc3NcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdLnByb3ZpZGVyO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb25uZWN0ZWRXYWxsZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmNvbm5lY3Rpb25zKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzID0gZnVuY3Rpb24gKGFkZHJlc3MsIGNoYWluSWQsIHByb3ZpZGVyVHlwZSwgcHJvdmlkZXIsIGJsb2NrY2hhaW4pIHtcbiAgICAgICAgaWYgKGJsb2NrY2hhaW4gPT09IHZvaWQgMCkgeyBibG9ja2NoYWluID0gJ2V2bSc7IH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG93ZXJDYXNlKCldID0geyBhZGRyZXNzOiBhZGRyZXNzLCBjaGFpbklkOiBjaGFpbklkLCBwcm92aWRlclR5cGU6IHByb3ZpZGVyVHlwZSwgcHJvdmlkZXI6IHByb3ZpZGVyLCBibG9ja2NoYWluOiBibG9ja2NoYWluIH07XG4gICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3RlclByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyLCBwcm92aWRlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjY291bnRzLCBjaGFpbklkLCBjdXJBY2NvdW50O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBwcm92aWRlci5saXN0QWNjb3VudHMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5kZXRlY3ROZXR3b3JrKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkID0gKF9hLnNlbnQoKSkuY2hhaW5JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhY2NvdW50cyBmb3VuZCB2aWEgd2FsbGV0LWNvbm5lY3QuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VyQWNjb3VudCwgY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbihcImFjY291bnRzQ2hhbmdlZFwiLCBmdW5jdGlvbiAoYWNjb3VudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQWNjb3VudCA9PT0gYWNjb3VudHNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuY29ubmVjdGlvbnNbY3VyQWNjb3VudC50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oY3VyQWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmdldFRva2VuU3RvcmUoKS5jbGVhckNhY2hlZFRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5lbnJpY2hUb2tlbkxvb2t1cERhdGFPbkNoYWluVG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIGZ1bmN0aW9uIChfY2hhaW5JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSwgX2NoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXROZXR3b3JrQ2hhbmdlKF9jaGFpbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhY2NvdW50c1swXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5NZXRhTWFzayA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBNZXRhTWFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsIFwiTWV0YU1hc2tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3QgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLCB3YWxsZXRDb25uZWN0O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1dhbGxldENvbm5lY3RQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLmdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlKGNoZWNrQ29ubmVjdGlvbk9ubHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdC5jb25uZWN0b3Iub24oXCJkaXNwbGF5X3VyaVwiLCBmdW5jdGlvbiAoZXJyLCBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gZXhwaXJlZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0LmVuYWJsZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdhbGxldENvbm5lY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCBcIldhbGxldENvbm5lY3RcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gcmVqZWN0KGUpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5Ub3J1cyA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBUb3J1c1Byb3ZpZGVyLCB0b3J1cywgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KFwiLi9Ub3J1c1Byb3ZpZGVyXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9ydXNQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgVG9ydXNQcm92aWRlci5nZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcnVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5pbml0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRvcnVzLmxvZ2luKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih0b3J1cy5wcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgXCJUb3J1c1wiKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5QaGFudG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiwgYWNjb3VudEFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgUGhhbnRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5zb2xhbmEgIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LnNvbGFuYS5jb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEFkZHJlc3MgPSBjb25uZWN0aW9uLnB1YmxpY0tleS50b0Jhc2U1OCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50QWRkcmVzcywgXCJtYWlubmV0LWJldGFcIiwgJ3BoYW50b20nLCB3aW5kb3cuc29sYW5hLCAnc29sYW5hJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlNhZmVDb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIGFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgU2FmZUNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5nZXRTYWZlQ29ubmVjdFByb3ZpZGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcHJvdmlkZXIuaW5pdFNhZmVDb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWRkcmVzcywgMSwgXCJTYWZlQ29ubmVjdFwiLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2FmZUNvbm5lY3RBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyAhPT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRTYWZlQ29ubmVjdFByb3ZpZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1NhZmVDb25uZWN0UHJvdmlkZXJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWZlQ29ubmVjdFByb3ZpZGVyID0gKF9hLnNlbnQoKSkuU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFNhZmVDb25uZWN0UHJvdmlkZXIodGhpcy5jbGllbnQuZ2V0VWkoKSwgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkgPSBcInRuLXdhbGxldC1jb25uZWN0aW9uc1wiO1xuICAgIHJldHVybiBXZWIzV2FsbGV0UHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgV2ViM1dhbGxldFByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBXZWIzV2FsbGV0UHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWIzV2FsbGV0UHJvdmlkZXIuanMubWFwIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhZG9wdCIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImYiLCJ5IiwidCIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJXZWIzV2FsbGV0UHJvdmlkZXIiLCJjbGllbnQiLCJzYWZlQ29ubmVjdE9wdGlvbnMiLCJjb25uZWN0aW9ucyIsInByb3RvdHlwZSIsInNhdmVDb25uZWN0aW9ucyIsInNhdmVkQ29ubmVjdGlvbnMiLCJhZGRyZXNzIiwiY29uIiwiY2hhaW5JZCIsInByb3ZpZGVyVHlwZSIsImJsb2NrY2hhaW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9DQUxfU1RPUkFHRV9LRVkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1pdFNhdmVkQ29ubmVjdGlvbiIsIk9iamVjdCIsImtleXMiLCJldmVudFNlbmRlciIsImVtaXRDb25uZWN0ZWRXYWxsZXRJbnN0YW5jZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZW1pdE5ldHdvcmtDaGFuZ2UiLCJkZWxldGVDb25uZWN0aW9ucyIsInJlbW92ZUl0ZW0iLCJsb2FkQ29ubmVjdGlvbnMiLCJkYXRhIiwic3RhdGUiLCJfYSIsIl9iIiwiX2kiLCJjb25uZWN0aW9uIiwiZV8xIiwiX2MiLCJnZXRJdGVtIiwicGFyc2UiLCJjb25uZWN0V2l0aCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwid2FsbGV0VHlwZSIsImNoZWNrQ29ubmVjdGlvbk9ubHkiLCJFcnJvciIsInNpZ25NZXNzYWdlIiwicHJvdmlkZXIiLCJnZXRXYWxsZXRQcm92aWRlciIsImdldFNpZ25lciIsInRvTG93ZXJDYXNlIiwiZ2V0Q29ubmVjdGVkV2FsbGV0RGF0YSIsInZhbHVlcyIsInJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyIsInJlZ2lzdGVyUHJvdmlkZXIiLCJwcm92aWRlck5hbWUiLCJhY2NvdW50cyIsImN1ckFjY291bnQiLCJfdGhpcyIsImxpc3RBY2NvdW50cyIsImRldGVjdE5ldHdvcmsiLCJvbiIsImdldFRva2VuU3RvcmUiLCJjbGVhckNhY2hlZFRva2VucyIsImVucmljaFRva2VuTG9va3VwRGF0YU9uQ2hhaW5Ub2tlbnMiLCJfY2hhaW5JZCIsIk1ldGFNYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Q29ubmVjdCIsImdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlIiwiY29ubmVjdG9yIiwiZXJyIiwicGF5bG9hZCIsImNhdGNoIiwiVG9ydXMiLCJ0b3J1cyIsImdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSIsImluaXQiLCJsb2dpbiIsIlBoYW50b20iLCJhY2NvdW50QWRkcmVzcyIsInNvbGFuYSIsImNvbm5lY3QiLCJwdWJsaWNLZXkiLCJ0b0Jhc2U1OCIsIlNhZmVDb25uZWN0IiwiZ2V0U2FmZUNvbm5lY3RQcm92aWRlciIsImluaXRTYWZlQ29ubmVjdCIsInNhZmVDb25uZWN0QXZhaWxhYmxlIiwidW5kZWZpbmVkIiwiU2FmZUNvbm5lY3RQcm92aWRlciIsImdldFVpIl0sInNvdXJjZVJvb3QiOiIifQ==