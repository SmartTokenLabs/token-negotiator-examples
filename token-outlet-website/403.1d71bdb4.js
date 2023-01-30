"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  8403: (e, n, t) => {
    t.r(n), t.d(n, {
      Web3WalletProvider: () => a,
      default: () => u
    });
    var o = t(1023);
    var r = t(241);
    var i = t(6677);
    var s = function(e, n, t, o) {
      return new (t || (t = Promise))((function(r, i) {
        function s(e) {
          try {
            a(o.next(e));
          } catch (n) {
            i(n);
          }
        }
        function c(e) {
          try {
            a(o.throw(e));
          } catch (n) {
            i(n);
          }
        }
        function a(e) {
          e.done ? r(e.value) : function(e) {
            return e instanceof t ? e : new t((function(n) {
              n(e);
            }));
          }(e.value).then(s, c);
        }
        a((o = o.apply(e, n || [])).next());
      }));
    };
    var c = function(e, n) {
      var t, o, r, i, s = {
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
      function c(c) {
        return function(a) {
          return function(c) {
            if (t) throw new TypeError("Generator is already executing.");
            for (;i && (i = 0, c[0] && (s = 0)), s; ) try {
              if (t = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
              switch (o = 0, r && (c = [ 2 & c[0], r.value ]), c[0]) {
               case 0:
               case 1:
                r = c;
                break;

               case 4:
                return s.label++, {
                  value: c[1],
                  done: !1
                };

               case 5:
                s.label++, o = c[1], c = [ 0 ];
                continue;

               case 7:
                c = s.ops.pop(), s.trys.pop();
                continue;

               default:
                if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                  s = 0;
                  continue;
                }
                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                  s.label = c[1];
                  break;
                }
                if (6 === c[0] && s.label < r[1]) {
                  s.label = r[1], r = c;
                  break;
                }
                if (r && s.label < r[2]) {
                  s.label = r[2], s.ops.push(c);
                  break;
                }
                r[2] && s.ops.pop(), s.trys.pop();
                continue;
              }
              c = n.call(e, s);
            } catch (a) {
              c = [ 6, a ], o = 0;
            } finally {
              t = r = 0;
            }
            if (5 & c[0]) throw c[1];
            return {
              value: c[0] ? c[1] : void 0,
              done: !0
            };
          }([ c, a ]);
        };
      }
    };
    var a = function() {
      function e(e, n) {
        this.connections = {}, this.client = e, this.safeConnectOptions = n;
      }
      return e.prototype.saveConnections = function() {
        var n = {};
        for (var t in this.connections) {
          var r = this.connections[t];
          n[t] = {
            address: r.address,
            chainId: r.chainId,
            providerType: r.providerType,
            blockchain: r.blockchain,
            ethers: o
          };
        }
        localStorage.setItem(e.LOCAL_STORAGE_KEY, JSON.stringify(n));
      }, e.prototype.emitSavedConnection = function(e) {
        return Object.keys(this.connections).length && e ? (this.client.eventSender('connected-wallet', {
          data: this.connections[e.toLocaleLowerCase()]
        }), this.connections[e.toLocaleLowerCase()]) : null;
      }, e.prototype.emitNetworkChange = function(e) {
        if (e) return this.client.eventSender('network-change', e), e;
      }, e.prototype.deleteConnections = function() {
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY), localStorage.removeItem('walletconnect');
      }, e.prototype.loadConnections = function() {
        return s(this, void 0, void 0, (function() {
          var n, t, o, r, i, s, a, u, l;
          return c(this, (function(c) {
            switch (c.label) {
             case 0:
              if (!(n = localStorage.getItem(e.LOCAL_STORAGE_KEY))) return [ 2 ];
              if (!(t = JSON.parse(n))) return [ 2 ];
              for (i in r = [], o = t) r.push(i);
              s = 0, c.label = 1;

             case 1:
              if (!(s < r.length)) return [ 3, 6 ];
              if (!((i = r[s]) in o)) return [ 3, 5 ];
              u = t[a = i], c.label = 2;

             case 2:
              return c.trys.push([ 2, 4, , 5 ]), [ 4, this.connectWith(u.providerType, !0) ];

             case 3:
              return c.sent(), [ 3, 5 ];

             case 4:
              return l = c.sent(), console.log("Wallet couldn't connect: " + l.message), delete t[a], this.saveConnections(), this.emitSavedConnection(a), 
              [ 3, 5 ];

             case 5:
              return s++, [ 3, 1 ];

             case 6:
              return [ 2 ];
            }
          }));
        }));
      }, e.prototype.connectWith = function(e, n) {
        return void 0 === n && (n = !1), s(this, void 0, void 0, (function() {
          var t;
          return c(this, (function(o) {
            switch (o.label) {
             case 0:
              if (!e) throw new Error('Please provide a Wallet type to connect with.');
              return this[e] ? [ 4, this[e](n) ] : [ 3, 2 ];

             case 1:
              return t = o.sent(), (0, i.kg)(2, 'address', t), this.saveConnections(), this.emitSavedConnection(t), [ 2, t ];

             case 2:
              throw new Error('Wallet type not found');
            }
          }));
        }));
      }, e.prototype.signMessage = function(e, n) {
        return s(this, void 0, void 0, (function() {
          var t;
          return c(this, (function(o) {
            switch (o.label) {
             case 0:
              return t = this.getWalletProvider(e), [ 4, t.getSigner(e).signMessage(n) ];

             case 1:
              return [ 2, o.sent() ];
            }
          }));
        }));
      }, e.prototype.getWalletProvider = function(e) {
        var n;
        if (e = e.toLowerCase(), !(null === (n = this.connections[e]) || void 0 === n ? void 0 : n.provider)) throw new Error('Wallet provider not found for address');
        return this.connections[e].provider;
      }, e.prototype.getConnectedWalletData = function() {
        return Object.values(this.connections);
      }, e.prototype.registerNewWalletAddress = function(e, n, t, r, i) {
        return void 0 === i && (i = 'evm'), this.connections[e.toLowerCase()] = {
          address: e,
          chainId: n,
          providerType: t,
          provider: r,
          blockchain: i,
          ethers: o
        }, e;
      }, e.prototype.registerProvider = function(e, n) {
        return s(this, void 0, void 0, (function() {
          var t, o, r;
          var i = this;
          return c(this, (function(s) {
            switch (s.label) {
             case 0:
              return [ 4, e.listAccounts() ];

             case 1:
              return t = s.sent(), [ 4, e.detectNetwork() ];

             case 2:
              if (o = s.sent().chainId, 0 === t.length) throw new Error('No accounts found via wallet-connect.');
              return r = t[0], this.registerNewWalletAddress(r, o, n, e), e.provider.on('accountsChanged', (function(t) {
                r !== t[0] && (delete i.connections[r.toLowerCase()], r = t[0], i.registerNewWalletAddress(r, o, n, e), i.saveConnections(), 
                i.emitSavedConnection(r), i.client.getTokenStore().clearCachedTokens(), i.client.enrichTokenLookupDataOnChainTokens());
              })), e.provider.on('chainChanged', (function(o) {
                i.registerNewWalletAddress(t[0], o, n, e), i.saveConnections(), i.emitNetworkChange(o);
              })), [ 2, t[0] ];
            }
          }));
        }));
      }, e.prototype.MetaMask = function(e) {
        return s(this, void 0, void 0, (function() {
          var e;
          return c(this, (function(n) {
            switch (n.label) {
             case 0:
              return (0, i.kg)(2, 'connect MetaMask'), void 0 === window.ethereum ? [ 3, 2 ] : [ 4, window.ethereum.enable() ];

             case 1:
              return n.sent(), e = new r.Q(window.ethereum, 'any'), [ 2, this.registerProvider(e, 'MetaMask') ];

             case 2:
              throw new Error('MetaMask is not available. Please check the extension is supported and active.');
            }
          }));
        }));
      }, e.prototype.WalletConnect = function(e) {
        return s(this, void 0, void 0, (function() {
          var n;
          var o = this;
          return c(this, (function(s) {
            switch (s.label) {
             case 0:
              return (0, i.kg)(2, 'connect Wallet Connect'), [ 4, t.e(444).then(t.bind(t, 5444)) ];

             case 1:
              return [ 4, s.sent().getWalletConnectProviderInstance(e) ];

             case 2:
              return n = s.sent(), [ 2, new Promise((function(t, i) {
                e && n.connector.on('display_uri', (function(e, n) {
                  i(new Error('Connection expired'));
                })), n.enable().then((function() {
                  var e = new r.Q(n, 'any');
                  t(o.registerProvider(e, 'WalletConnect'));
                })).catch((function(e) {
                  return i(e);
                }));
              })) ];
            }
          }));
        }));
      }, e.prototype.WalletConnectV2 = function(e) {
        return s(this, void 0, void 0, (function() {
          var n, o, a;
          var u = this;
          return c(this, (function(l) {
            switch (l.label) {
             case 0:
              return (0, i.kg)(2, 'connect Wallet Connect V2'), [ 4, t.e(387).then(t.bind(t, 9387)) ];

             case 1:
              return [ 4, (n = l.sent()).getWalletConnectV2ProviderInstance() ];

             case 2:
              return (o = l.sent()).on('display_uri', (function(e) {
                return s(u, void 0, void 0, (function() {
                  var n = this;
                  return c(this, (function(o) {
                    switch (o.label) {
                     case 0:
                      return console.log('EVENT', 'QR Code Modal open'), [ 4, t.e(337).then(t.t.bind(t, 4337, 23)) ];

                     case 1:
                      return (a = o.sent().default).open(e, (function() {
                        n.client.getUi().showError('User closed modal');
                      })), [ 2 ];
                    }
                  }));
                }));
              })), o.on('session_delete', (function(e) {
                e.id, e.topic;
                console.log('WC V2 EVENT', 'session_deleted'), u.client.disconnectWallet();
                var n = u.client.getUi();
                n && n.updateUI('wallet');
              })), e ? [ 3, 4 ] : (void 0, [ 4, o.connect({
                namespaces: {
                  eip155: {
                    methods: [ 'eth_sendTransaction', 'eth_signTransaction', 'eth_sign', 'personal_sign', 'eth_signTypedData' ],
                    chains: n.WC_V2_CHAINS,
                    events: [ 'chainChanged', 'accountsChanged' ],
                    rpcMap: n.CUSTOM_RPCS_FOR_WC_V2
                  }
                },
                pairingTopic: void 0
              }) ]);

             case 3:
              l.sent(), a.close(), l.label = 4;

             case 4:
              return [ 2, new Promise((function(e, n) {
                o.enable().then((function() {
                  var n = new r.Q(o, 'any');
                  e(u.registerProvider(n, 'WalletConnectV2'));
                })).catch((function(e) {
                  n(e);
                }));
              })) ];
            }
          }));
        }));
      }, e.prototype.Torus = function(e) {
        return s(this, void 0, void 0, (function() {
          var e, n;
          return c(this, (function(o) {
            switch (o.label) {
             case 0:
              return [ 4, t.e(681).then(t.bind(t, 4681)) ];

             case 1:
              return [ 4, o.sent().getTorusProviderInstance() ];

             case 2:
              return [ 4, (e = o.sent()).init() ];

             case 3:
              return o.sent(), [ 4, e.login() ];

             case 4:
              return o.sent(), n = new r.Q(e.provider, 'any'), [ 2, this.registerProvider(n, 'Torus') ];
            }
          }));
        }));
      }, e.prototype.Phantom = function() {
        return s(this, void 0, void 0, (function() {
          var e, n;
          return c(this, (function(t) {
            switch (t.label) {
             case 0:
              return (0, i.kg)(2, 'connect Phantom'), void 0 === window.solana ? [ 3, 2 ] : [ 4, window.solana.connect() ];

             case 1:
              return e = t.sent(), n = e.publicKey.toBase58(), [ 2, this.registerNewWalletAddress(n, 'mainnet-beta', 'phantom', window.solana, 'solana') ];

             case 2:
              throw new Error('MetaMask is not available. Please check the extension is supported and active.');
            }
          }));
        }));
      }, e.prototype.SafeConnect = function() {
        return s(this, void 0, void 0, (function() {
          var e, n;
          return c(this, (function(t) {
            switch (t.label) {
             case 0:
              return (0, i.kg)(2, 'connect SafeConnect'), [ 4, this.getSafeConnectProvider() ];

             case 1:
              return [ 4, (e = t.sent()).initSafeConnect() ];

             case 2:
              return n = t.sent(), this.registerNewWalletAddress(n, 1, 'SafeConnect', e), [ 2, n ];
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
              return [ 4, Promise.resolve().then(t.bind(t, 7393)) ];

             case 1:
              return [ 2, new (0, e.sent().SafeConnectProvider)(this.client.getUi(), this.safeConnectOptions) ];
            }
          }));
        }));
      }, e.LOCAL_STORAGE_KEY = 'tn-wallet-connections', e;
    }();
    const u = a;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZHLEtBQUs7Y0FBRyxNQUFNLElBQUlqRSxNQUFNOztBQUVoQztBQUNKO0FBQ0osU0FDQTVDLEVBQW1CSSxVQUFVNEcsY0FBYztRQUN2QyxPQUFPMUosRUFBVWlDLFdBQU0sUUFBUSxJQUFRO1VBQ25DLElBQUl1RCxHQUFVdkM7VUFDZCxPQUFPOUIsRUFBWWMsT0FBTSxTQUFVc0M7WUFDL0IsUUFBUUEsRUFBRzdDO2FBQ1AsS0FBSztjQUVELFFBREEsU0FBTyxHQUFHLHdCQUNILEVBQUMsR0FBR08sS0FBSzBIOzthQUNwQixLQUFLO2NBRUQsT0FBTyxFQUFDLElBRFJuRSxJQUFXakIsRUFBRzVDLFFBQ01pSTs7YUFDeEIsS0FBSztjQUdELE9BRkEzRyxJQUFVc0IsRUFBRzVDLFFBQ2JNLEtBQUs2RCx5QkFBeUI3QyxHQUFTLEdBQUcsZUFBZXVDLElBQ2xELEVBQUMsR0FBR3ZDOztBQUV2QjtBQUNKO0FBQ0osU0FDQVAsRUFBbUJJLFVBQVUrRyx1QkFBdUI7UUFDaEQsWUFBbUNDLE1BQTVCN0gsS0FBS1c7QUFDaEIsU0FDQUYsRUFBbUJJLFVBQVU2Ryx5QkFBeUI7UUFDbEQsT0FBTzNKLEVBQVVpQyxXQUFNLFFBQVEsSUFBUTtVQUVuQyxPQUFPZCxFQUFZYyxPQUFNLFNBQVVzQztZQUMvQixRQUFRQSxFQUFHN0M7YUFDUCxLQUFLO2NBQUcsT0FBTyxFQUFDLEdBQUc7O2FBQ25CLEtBQUs7Y0FFRCxPQUFPLEVBQUMsR0FBRyxLQURYcUksR0FBdUJ4RixFQUFHNUMsT0FBUW9JLHFCQUNDOUgsS0FBS1UsT0FBT21GLFNBQVM3RixLQUFLVzs7QUFFekU7QUFDSjtBQUNKLFNBQ0FGLEVBQW1CZSxvQkFBb0IseUJBQ2hDZjtBQUNYLEtBclh5QjtJQXVYekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9rZW5zY3JpcHQvdG9rZW4tbmVnb3RpYXRvci9kaXN0L3dhbGxldC9XZWIzV2FsbGV0UHJvdmlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL3V0aWxzJztcbnZhciBXZWIzV2FsbGV0UHJvdmlkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYjNXYWxsZXRQcm92aWRlcihjbGllbnQsIHNhZmVDb25uZWN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyA9IHNhZmVDb25uZWN0T3B0aW9ucztcbiAgICB9XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYXZlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzYXZlZENvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGZvciAodmFyIGFkZHJlc3MgaW4gdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgICAgICAgdmFyIGNvbiA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc107XG4gICAgICAgICAgICBzYXZlZENvbm5lY3Rpb25zW2FkZHJlc3NdID0ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGNvbi5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGNvbi5jaGFpbklkLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyVHlwZTogY29uLnByb3ZpZGVyVHlwZSxcbiAgICAgICAgICAgICAgICBibG9ja2NoYWluOiBjb24uYmxvY2tjaGFpbixcbiAgICAgICAgICAgICAgICBldGhlcnM6IGV0aGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZENvbm5lY3Rpb25zKSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmVtaXRTYXZlZENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jb25uZWN0aW9ucykubGVuZ3RoICYmIGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyKCdjb25uZWN0ZWQtd2FsbGV0JywgeyBkYXRhOiB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb2NhbGVMb3dlckNhc2UoKV0gfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG9jYWxlTG93ZXJDYXNlKCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZW1pdE5ldHdvcmtDaGFuZ2UgPSBmdW5jdGlvbiAoY2hhaW5JZCkge1xuICAgICAgICBpZiAoY2hhaW5JZCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQuZXZlbnRTZW5kZXIoJ25ldHdvcmstY2hhbmdlJywgY2hhaW5JZCk7XG4gICAgICAgICAgICByZXR1cm4gY2hhaW5JZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5kZWxldGVDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnd2FsbGV0Y29ubmVjdCcpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5sb2FkQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBzdGF0ZSwgX2EsIF9iLCBfYywgX2ksIGFkZHJlc3MsIGNvbm5lY3Rpb24sIGVfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2MgaW4gX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IucHVzaChfYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9pIDwgX2IubGVuZ3RoKSkgcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gX2JbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2MgaW4gX2EpKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmNvbm5lY3RXaXRoKGNvbm5lY3Rpb24ucHJvdmlkZXJUeXBlLCB0cnVlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGNvdWxkbid0IGNvbm5lY3Q6IFwiICsgZV8xLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pKys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5jb25uZWN0V2l0aCA9IGZ1bmN0aW9uICh3YWxsZXRUeXBlLCBjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIGlmIChjaGVja0Nvbm5lY3Rpb25Pbmx5ID09PSB2b2lkIDApIHsgY2hlY2tDb25uZWN0aW9uT25seSA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3YWxsZXRUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBXYWxsZXQgdHlwZSB0byBjb25uZWN0IHdpdGguJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbd2FsbGV0VHlwZV0pIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXNbd2FsbGV0VHlwZV0oY2hlY2tDb25uZWN0aW9uT25seSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdhZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCB0eXBlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2lnbk1lc3NhZ2UgPSBmdW5jdGlvbiAoYWRkcmVzcywgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIHNpZ25lcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gdGhpcy5nZXRXYWxsZXRQcm92aWRlcihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgc2lnbmVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIsIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRXYWxsZXRQcm92aWRlciA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3MudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCEoKF9hID0gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb3ZpZGVyKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2FsbGV0IHByb3ZpZGVyIG5vdCBmb3VuZCBmb3IgYWRkcmVzcycpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXS5wcm92aWRlcjtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29ubmVjdGVkV2FsbGV0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jb25uZWN0aW9ucyk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyA9IGZ1bmN0aW9uIChhZGRyZXNzLCBjaGFpbklkLCBwcm92aWRlclR5cGUsIHByb3ZpZGVyLCBibG9ja2NoYWluKSB7XG4gICAgICAgIGlmIChibG9ja2NoYWluID09PSB2b2lkIDApIHsgYmxvY2tjaGFpbiA9ICdldm0nOyB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvd2VyQ2FzZSgpXSA9IHsgYWRkcmVzczogYWRkcmVzcywgY2hhaW5JZDogY2hhaW5JZCwgcHJvdmlkZXJUeXBlOiBwcm92aWRlclR5cGUsIHByb3ZpZGVyOiBwcm92aWRlciwgYmxvY2tjaGFpbjogYmxvY2tjaGFpbiwgZXRoZXJzOiBldGhlcnMgfTtcbiAgICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyUHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvdmlkZXIsIHByb3ZpZGVyTmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWNjb3VudHMsIGNoYWluSWQsIGN1ckFjY291bnQ7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIHByb3ZpZGVyLmxpc3RBY2NvdW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmRldGVjdE5ldHdvcmsoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQgPSAoX2Euc2VudCgpKS5jaGFpbklkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWNjb3VudHMgZm91bmQgdmlhIHdhbGxldC1jb25uZWN0LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VyQWNjb3VudCwgY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignYWNjb3VudHNDaGFuZ2VkJywgZnVuY3Rpb24gKGFjY291bnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckFjY291bnQgPT09IGFjY291bnRzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLmNvbm5lY3Rpb25zW2N1ckFjY291bnQudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJBY2NvdW50LCBjaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGN1ckFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5nZXRUb2tlblN0b3JlKCkuY2xlYXJDYWNoZWRUb2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignY2hhaW5DaGFuZ2VkJywgZnVuY3Rpb24gKF9jaGFpbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdLCBfY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdE5ldHdvcmtDaGFuZ2UoX2NoYWluSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFjY291bnRzWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLk1ldGFNYXNrID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IE1ldGFNYXNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykpIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSwgJ2FueScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsICdNZXRhTWFzaycpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoJ01ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuV2FsbGV0Q29ubmVjdCA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3YWxsZXRDb25uZWN0UHJvdmlkZXIsIHdhbGxldENvbm5lY3Q7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFdhbGxldCBDb25uZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGltcG9ydCgnLi9XYWxsZXRDb25uZWN0UHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLmdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlKGNoZWNrQ29ubmVjdGlvbk9ubHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdC5jb25uZWN0b3Iub24oJ2Rpc3BsYXlfdXJpJywgZnVuY3Rpb24gKGVyciwgcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0Nvbm5lY3Rpb24gZXhwaXJlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmFibGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdhbGxldENvbm5lY3QsICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ1dhbGxldENvbm5lY3QnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHJlamVjdChlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuV2FsbGV0Q29ubmVjdFYyID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdhbGxldENvbm5lY3RQcm92aWRlciwgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdCwgUVJDb2RlTW9kYWwsIHBhaXJpbmc7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFdhbGxldCBDb25uZWN0IFYyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGltcG9ydCgnLi9XYWxsZXRDb25uZWN0VjJQcm92aWRlcicpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdFByb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3YWxsZXRDb25uZWN0UHJvdmlkZXIuZ2V0V2FsbGV0Q29ubmVjdFYyUHJvdmlkZXJJbnN0YW5jZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3Qub24oJ2Rpc3BsYXlfdXJpJywgZnVuY3Rpb24gKHVyaSkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VWRU5UJywgJ1FSIENvZGUgTW9kYWwgb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KCdAd2FsbGV0Y29ubmVjdC9xcmNvZGUtbW9kYWwnKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwgPSAoX2Euc2VudCgpKS5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsLm9wZW4odXJpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5nZXRVaSgpLnNob3dFcnJvcignVXNlciBjbG9zZWQgbW9kYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0Lm9uKCdzZXNzaW9uX2RlbGV0ZScsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hLmlkLCB0b3BpYyA9IF9hLnRvcGljO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXQyBWMiBFVkVOVCcsICdzZXNzaW9uX2RlbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZGlzY29ubmVjdFdhbGxldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1aSA9IF90aGlzLmNsaWVudC5nZXRVaSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1aSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWkudXBkYXRlVUkoJ3dhbGxldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFjaGVja0Nvbm5lY3Rpb25Pbmx5KSByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFpcmluZyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5jb25uZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWlwMTU1OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogWydldGhfc2VuZFRyYW5zYWN0aW9uJywgJ2V0aF9zaWduVHJhbnNhY3Rpb24nLCAnZXRoX3NpZ24nLCAncGVyc29uYWxfc2lnbicsICdldGhfc2lnblR5cGVkRGF0YSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluczogd2FsbGV0Q29ubmVjdFByb3ZpZGVyLldDX1YyX0NIQUlOUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IFsnY2hhaW5DaGFuZ2VkJywgJ2FjY291bnRzQ2hhbmdlZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY01hcDogd2FsbGV0Q29ubmVjdFByb3ZpZGVyLkNVU1RPTV9SUENTX0ZPUl9XQ19WMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaXJpbmdUb3BpYzogcGFpcmluZyA9PT0gbnVsbCB8fCBwYWlyaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWlyaW5nLnRvcGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmFibGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih1bml2ZXJzYWxXYWxsZXRDb25uZWN0LCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ1dhbGxldENvbm5lY3RWMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuVG9ydXMgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgVG9ydXNQcm92aWRlciwgdG9ydXMsIHByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydCgnLi9Ub3J1c1Byb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3J1c1Byb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBUb3J1c1Byb3ZpZGVyLmdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9ydXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRvcnVzLmluaXQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMubG9naW4oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHRvcnVzLnByb3ZpZGVyLCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ1RvcnVzJyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuUGhhbnRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24sIGFjY291bnRBZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFBoYW50b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuc29sYW5hICE9PSAndW5kZWZpbmVkJykpIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdpbmRvdy5zb2xhbmEuY29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRBZGRyZXNzID0gY29ubmVjdGlvbi5wdWJsaWNLZXkudG9CYXNlNTgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudEFkZHJlc3MsICdtYWlubmV0LWJldGEnLCAncGhhbnRvbScsIHdpbmRvdy5zb2xhbmEsICdzb2xhbmEnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdNZXRhTWFzayBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlNhZmVDb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIGFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgU2FmZUNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5nZXRTYWZlQ29ubmVjdFByb3ZpZGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcHJvdmlkZXIuaW5pdFNhZmVDb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWRkcmVzcywgMSwgJ1NhZmVDb25uZWN0JywgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhZGRyZXNzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNhZmVDb25uZWN0QXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0U2FmZUNvbm5lY3RQcm92aWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFNhZmVDb25uZWN0UHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KCcuL1NhZmVDb25uZWN0UHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhZmVDb25uZWN0UHJvdmlkZXIgPSAoX2Euc2VudCgpKS5TYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgU2FmZUNvbm5lY3RQcm92aWRlcih0aGlzLmNsaWVudC5nZXRVaSgpLCB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSA9ICd0bi13YWxsZXQtY29ubmVjdGlvbnMnO1xuICAgIHJldHVybiBXZWIzV2FsbGV0UHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgV2ViM1dhbGxldFByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBXZWIzV2FsbGV0UHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWIzV2FsbGV0UHJvdmlkZXIuanMubWFwIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhZG9wdCIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImYiLCJ5IiwidCIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJXZWIzV2FsbGV0UHJvdmlkZXIiLCJjbGllbnQiLCJzYWZlQ29ubmVjdE9wdGlvbnMiLCJjb25uZWN0aW9ucyIsInByb3RvdHlwZSIsInNhdmVDb25uZWN0aW9ucyIsInNhdmVkQ29ubmVjdGlvbnMiLCJhZGRyZXNzIiwiY29uIiwiY2hhaW5JZCIsInByb3ZpZGVyVHlwZSIsImJsb2NrY2hhaW4iLCJldGhlcnMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9DQUxfU1RPUkFHRV9LRVkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1pdFNhdmVkQ29ubmVjdGlvbiIsIk9iamVjdCIsImtleXMiLCJldmVudFNlbmRlciIsImRhdGEiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImVtaXROZXR3b3JrQ2hhbmdlIiwiZGVsZXRlQ29ubmVjdGlvbnMiLCJyZW1vdmVJdGVtIiwibG9hZENvbm5lY3Rpb25zIiwic3RhdGUiLCJfYSIsIl9iIiwiX2MiLCJfaSIsImNvbm5lY3Rpb24iLCJlXzEiLCJfZCIsImdldEl0ZW0iLCJwYXJzZSIsImNvbm5lY3RXaXRoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ3YWxsZXRUeXBlIiwiY2hlY2tDb25uZWN0aW9uT25seSIsIkVycm9yIiwic2lnbk1lc3NhZ2UiLCJwcm92aWRlciIsImdldFdhbGxldFByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwidG9Mb3dlckNhc2UiLCJnZXRDb25uZWN0ZWRXYWxsZXREYXRhIiwidmFsdWVzIiwicmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzIiwicmVnaXN0ZXJQcm92aWRlciIsInByb3ZpZGVyTmFtZSIsImFjY291bnRzIiwiY3VyQWNjb3VudCIsIl90aGlzIiwibGlzdEFjY291bnRzIiwiZGV0ZWN0TmV0d29yayIsIm9uIiwiZ2V0VG9rZW5TdG9yZSIsImNsZWFyQ2FjaGVkVG9rZW5zIiwiZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucyIsIl9jaGFpbklkIiwiTWV0YU1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRDb25uZWN0IiwiZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UiLCJjb25uZWN0b3IiLCJlcnIiLCJwYXlsb2FkIiwiY2F0Y2giLCJXYWxsZXRDb25uZWN0VjIiLCJ3YWxsZXRDb25uZWN0UHJvdmlkZXIiLCJ1bml2ZXJzYWxXYWxsZXRDb25uZWN0IiwiUVJDb2RlTW9kYWwiLCJnZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlIiwidXJpIiwiZGVmYXVsdCIsIm9wZW4iLCJnZXRVaSIsInNob3dFcnJvciIsImlkIiwidG9waWMiLCJkaXNjb25uZWN0V2FsbGV0IiwidWkiLCJ1cGRhdGVVSSIsImNvbm5lY3QiLCJuYW1lc3BhY2VzIiwiZWlwMTU1IiwibWV0aG9kcyIsImNoYWlucyIsIldDX1YyX0NIQUlOUyIsImV2ZW50cyIsInJwY01hcCIsIkNVU1RPTV9SUENTX0ZPUl9XQ19WMiIsInBhaXJpbmdUb3BpYyIsImNsb3NlIiwiVG9ydXMiLCJ0b3J1cyIsImdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSIsImluaXQiLCJsb2dpbiIsIlBoYW50b20iLCJhY2NvdW50QWRkcmVzcyIsInNvbGFuYSIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiU2FmZUNvbm5lY3QiLCJnZXRTYWZlQ29ubmVjdFByb3ZpZGVyIiwiaW5pdFNhZmVDb25uZWN0Iiwic2FmZUNvbm5lY3RBdmFpbGFibGUiLCJ1bmRlZmluZWQiLCJTYWZlQ29ubmVjdFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==