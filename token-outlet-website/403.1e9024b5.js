"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  8403: (e, t, n) => {
    n.r(t), n.d(t, {
      Web3WalletProvider: () => u,
      default: () => l
    });
    var o = n(1023);
    var r = n(241);
    var i = n(6677);
    var s = n(5108);
    var c = function(e, t, n, o) {
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
    var a = function(e, t) {
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
      function c(c) {
        return function(a) {
          return function(c) {
            if (n) throw new TypeError("Generator is already executing.");
            for (;i && (i = 0, c[0] && (s = 0)), s; ) try {
              if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
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
              c = t.call(e, s);
            } catch (a) {
              c = [ 6, a ], o = 0;
            } finally {
              n = r = 0;
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
    var u = function() {
      function e(e, t) {
        this.connections = {}, this.client = e, this.safeConnectOptions = t;
      }
      return e.prototype.saveConnections = function() {
        var t = {};
        for (var n in this.connections) {
          var r = this.connections[n];
          t[n] = {
            address: r.address,
            chainId: r.chainId,
            providerType: r.providerType,
            blockchain: r.blockchain,
            ethers: o
          };
        }
        localStorage.setItem(e.LOCAL_STORAGE_KEY, JSON.stringify(t));
      }, e.prototype.emitSavedConnection = function(e) {
        return Object.keys(this.connections).length && e ? (this.client.eventSender('connected-wallet', {
          data: this.connections[e.toLocaleLowerCase()]
        }), this.connections[e.toLocaleLowerCase()]) : null;
      }, e.prototype.emitNetworkChange = function(e) {
        if (e) return this.client.eventSender('network-change', e), e;
      }, e.prototype.deleteConnections = function() {
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY), localStorage.removeItem('walletconnect');
      }, e.prototype.loadConnections = function() {
        return c(this, void 0, void 0, (function() {
          var t, n, o, r, i, c, u, l, h;
          return a(this, (function(a) {
            switch (a.label) {
             case 0:
              if (!(t = localStorage.getItem(e.LOCAL_STORAGE_KEY))) return [ 2 ];
              if (!(n = JSON.parse(t))) return [ 2 ];
              for (i in r = [], o = n) r.push(i);
              c = 0, a.label = 1;

             case 1:
              if (!(c < r.length)) return [ 3, 6 ];
              if (!((i = r[c]) in o)) return [ 3, 5 ];
              l = n[u = i], a.label = 2;

             case 2:
              return a.trys.push([ 2, 4, , 5 ]), [ 4, this.connectWith(l.providerType, !0) ];

             case 3:
              return a.sent(), [ 3, 5 ];

             case 4:
              return h = a.sent(), s.log("Wallet couldn't connect: " + h.message), delete n[u], this.saveConnections(), this.emitSavedConnection(u), 
              [ 3, 5 ];

             case 5:
              return c++, [ 3, 1 ];

             case 6:
              return [ 2 ];
            }
          }));
        }));
      }, e.prototype.connectWith = function(e, t) {
        return void 0 === t && (t = !1), c(this, void 0, void 0, (function() {
          var n;
          return a(this, (function(o) {
            switch (o.label) {
             case 0:
              if (!e) throw new Error('Please provide a Wallet type to connect with.');
              return this[e] ? [ 4, this[e](t) ] : [ 3, 2 ];

             case 1:
              return n = o.sent(), (0, i.kg)(2, 'address', n), this.saveConnections(), this.emitSavedConnection(n), [ 2, n ];

             case 2:
              throw new Error('Wallet type not found');
            }
          }));
        }));
      }, e.prototype.signMessage = function(e, t) {
        return c(this, void 0, void 0, (function() {
          var n;
          return a(this, (function(o) {
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
        if (e = e.toLowerCase(), !(null === (t = this.connections[e]) || void 0 === t ? void 0 : t.provider)) throw new Error('Wallet provider not found for address');
        return this.connections[e].provider;
      }, e.prototype.getConnectedWalletData = function() {
        return Object.values(this.connections);
      }, e.prototype.registerNewWalletAddress = function(e, t, n, r, i) {
        return void 0 === i && (i = 'evm'), this.connections[e.toLowerCase()] = {
          address: e,
          chainId: t,
          providerType: n,
          provider: r,
          blockchain: i,
          ethers: o
        }, e;
      }, e.prototype.registerProvider = function(e, t) {
        return c(this, void 0, void 0, (function() {
          var n, o, r;
          var i = this;
          return a(this, (function(s) {
            switch (s.label) {
             case 0:
              return [ 4, e.listAccounts() ];

             case 1:
              return n = s.sent(), [ 4, e.detectNetwork() ];

             case 2:
              if (o = s.sent().chainId, 0 === n.length) throw new Error('No accounts found via wallet-connect.');
              return r = n[0], this.registerNewWalletAddress(r, o, t, e), e.provider.on('accountsChanged', (function(n) {
                r !== n[0] && (delete i.connections[r.toLowerCase()], r = n[0], i.registerNewWalletAddress(r, o, t, e), i.saveConnections(), 
                i.emitSavedConnection(r), i.client.getTokenStore().clearCachedTokens(), i.client.enrichTokenLookupDataOnChainTokens());
              })), e.provider.on('chainChanged', (function(o) {
                i.registerNewWalletAddress(n[0], o, t, e), i.saveConnections(), i.emitNetworkChange(o);
              })), [ 2, n[0] ];
            }
          }));
        }));
      }, e.prototype.MetaMask = function(e) {
        return c(this, void 0, void 0, (function() {
          var e;
          return a(this, (function(t) {
            switch (t.label) {
             case 0:
              return (0, i.kg)(2, 'connect MetaMask'), void 0 === window.ethereum ? [ 3, 2 ] : [ 4, window.ethereum.enable() ];

             case 1:
              return t.sent(), e = new r.Q(window.ethereum, 'any'), [ 2, this.registerProvider(e, 'MetaMask') ];

             case 2:
              throw new Error('MetaMask is not available. Please check the extension is supported and active.');
            }
          }));
        }));
      }, e.prototype.WalletConnect = function(e) {
        return c(this, void 0, void 0, (function() {
          var t;
          var o = this;
          return a(this, (function(s) {
            switch (s.label) {
             case 0:
              return (0, i.kg)(2, 'connect Wallet Connect'), [ 4, n.e(444).then(n.bind(n, 5444)) ];

             case 1:
              return [ 4, s.sent().getWalletConnectProviderInstance(e) ];

             case 2:
              return t = s.sent(), [ 2, new Promise((function(n, i) {
                e && t.connector.on('display_uri', (function(e, t) {
                  i(new Error('Connection expired'));
                })), t.enable().then((function() {
                  var e = new r.Q(t, 'any');
                  n(o.registerProvider(e, 'WalletConnect'));
                })).catch((function(e) {
                  return i(e);
                }));
              })) ];
            }
          }));
        }));
      }, e.prototype.WalletConnectV2 = function(e) {
        return c(this, void 0, void 0, (function() {
          var t, o, u;
          var l = this;
          return a(this, (function(h) {
            switch (h.label) {
             case 0:
              return (0, i.kg)(2, 'connect Wallet Connect V2'), [ 4, n.e(387).then(n.bind(n, 9387)) ];

             case 1:
              return [ 4, (t = h.sent()).getWalletConnectV2ProviderInstance() ];

             case 2:
              return (o = h.sent()).on('display_uri', (function(e) {
                return c(l, void 0, void 0, (function() {
                  var t = this;
                  return a(this, (function(o) {
                    switch (o.label) {
                     case 0:
                      return s.log('EVENT', 'QR Code Modal open'), [ 4, n.e(337).then(n.t.bind(n, 4337, 23)) ];

                     case 1:
                      return (u = o.sent().default).open(e, (function() {
                        t.client.getUi().showError('User closed modal');
                      })), [ 2 ];
                    }
                  }));
                }));
              })), o.on('session_delete', (function(e) {
                e.id, e.topic;
                s.log('WC V2 EVENT', 'session_deleted'), l.client.disconnectWallet();
                var t = l.client.getUi();
                t && t.updateUI('wallet');
              })), e ? [ 3, 4 ] : (void 0, [ 4, o.connect({
                namespaces: {
                  eip155: {
                    methods: [ 'eth_sendTransaction', 'eth_signTransaction', 'eth_sign', 'personal_sign', 'eth_signTypedData' ],
                    chains: t.WC_V2_CHAINS,
                    events: [ 'chainChanged', 'accountsChanged' ],
                    rpcMap: t.CUSTOM_RPCS_FOR_WC_V2
                  }
                },
                pairingTopic: void 0
              }) ]);

             case 3:
              h.sent(), u.close(), h.label = 4;

             case 4:
              return [ 2, new Promise((function(e, t) {
                o.enable().then((function() {
                  var t = new r.Q(o);
                  e(l.registerProvider(t, 'WalletConnectV2'));
                })).catch((function(e) {
                  t(e);
                }));
              })) ];
            }
          }));
        }));
      }, e.prototype.Torus = function(e) {
        return c(this, void 0, void 0, (function() {
          var e, t;
          return a(this, (function(o) {
            switch (o.label) {
             case 0:
              return [ 4, n.e(681).then(n.bind(n, 4681)) ];

             case 1:
              return [ 4, o.sent().getTorusProviderInstance() ];

             case 2:
              return [ 4, (e = o.sent()).init() ];

             case 3:
              return o.sent(), [ 4, e.login() ];

             case 4:
              return o.sent(), t = new r.Q(e.provider, 'any'), [ 2, this.registerProvider(t, 'Torus') ];
            }
          }));
        }));
      }, e.prototype.Phantom = function() {
        return c(this, void 0, void 0, (function() {
          var e, t;
          return a(this, (function(n) {
            switch (n.label) {
             case 0:
              return (0, i.kg)(2, 'connect Phantom'), void 0 === window.solana ? [ 3, 2 ] : [ 4, window.solana.connect() ];

             case 1:
              return e = n.sent(), t = e.publicKey.toBase58(), [ 2, this.registerNewWalletAddress(t, 'mainnet-beta', 'phantom', window.solana, 'solana') ];

             case 2:
              throw new Error('MetaMask is not available. Please check the extension is supported and active.');
            }
          }));
        }));
      }, e.prototype.SafeConnect = function() {
        return c(this, void 0, void 0, (function() {
          var e, t;
          return a(this, (function(n) {
            switch (n.label) {
             case 0:
              return (0, i.kg)(2, 'connect SafeConnect'), [ 4, this.getSafeConnectProvider() ];

             case 1:
              return [ 4, (e = n.sent()).initSafeConnect() ];

             case 2:
              return t = n.sent(), this.registerNewWalletAddress(t, 1, 'SafeConnect', e), [ 2, t ];
            }
          }));
        }));
      }, e.prototype.safeConnectAvailable = function() {
        return void 0 !== this.safeConnectOptions;
      }, e.prototype.getSafeConnectProvider = function() {
        return c(this, void 0, void 0, (function() {
          return a(this, (function(e) {
            switch (e.label) {
             case 0:
              return [ 4, Promise.resolve().then(n.bind(n, 7393)) ];

             case 1:
              return [ 2, new (0, e.sent().SafeConnectProvider)(this.client.getUi(), this.safeConnectOptions) ];
            }
          }));
        }));
      }, e.LOCAL_STORAGE_KEY = 'tn-wallet-connections', e;
    }();
    const l = u;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO2NBQUcsTUFBTSxJQUFJakUsTUFBTTs7QUFFaEM7QUFDSjtBQUNKLFNBQ0E1QyxFQUFtQkksVUFBVTRHLGNBQWM7UUFDdkMsT0FBTzFKLEVBQVVpQyxXQUFNLFFBQVEsSUFBUTtVQUNuQyxJQUFJdUQsR0FBVXZDO1VBQ2QsT0FBTzlCLEVBQVljLE9BQU0sU0FBVXNDO1lBQy9CLFFBQVFBLEVBQUc3QzthQUNQLEtBQUs7Y0FFRCxRQURBLFNBQU8sR0FBRyx3QkFDSCxFQUFDLEdBQUdPLEtBQUswSDs7YUFDcEIsS0FBSztjQUVELE9BQU8sRUFBQyxJQURSbkUsSUFBV2pCLEVBQUc1QyxRQUNNaUk7O2FBQ3hCLEtBQUs7Y0FHRCxPQUZBM0csSUFBVXNCLEVBQUc1QyxRQUNiTSxLQUFLNkQseUJBQXlCN0MsR0FBUyxHQUFHLGVBQWV1QyxJQUNsRCxFQUFDLEdBQUd2Qzs7QUFFdkI7QUFDSjtBQUNKLFNBQ0FQLEVBQW1CSSxVQUFVK0csdUJBQXVCO1FBQ2hELFlBQW1DQyxNQUE1QjdILEtBQUtXO0FBQ2hCLFNBQ0FGLEVBQW1CSSxVQUFVNkcseUJBQXlCO1FBQ2xELE9BQU8zSixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFFbkMsT0FBT2QsRUFBWWMsT0FBTSxTQUFVc0M7WUFDL0IsUUFBUUEsRUFBRzdDO2FBQ1AsS0FBSztjQUFHLE9BQU8sRUFBQyxHQUFHOzthQUNuQixLQUFLO2NBRUQsT0FBTyxFQUFDLEdBQUcsS0FEWHFJLEdBQXVCeEYsRUFBRzVDLE9BQVFvSSxxQkFDQzlILEtBQUtVLE9BQU9tRixTQUFTN0YsS0FBS1c7O0FBRXpFO0FBQ0o7QUFDSixTQUNBRixFQUFtQmUsb0JBQW9CLHlCQUNoQ2Y7QUFDWCxLQXJYeUI7SUF1WHpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRva2Vuc2NyaXB0L3Rva2VuLW5lZ290aWF0b3IvZGlzdC93YWxsZXQvV2ViM1dhbGxldFByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi91dGlscyc7XG52YXIgV2ViM1dhbGxldFByb3ZpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWIzV2FsbGV0UHJvdmlkZXIoY2xpZW50LCBzYWZlQ29ubmVjdE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgPSBzYWZlQ29ubmVjdE9wdGlvbnM7XG4gICAgfVxuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2F2ZUNvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2F2ZWRDb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBhZGRyZXNzIGluIHRoaXMuY29ubmVjdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBjb24gPSB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdO1xuICAgICAgICAgICAgc2F2ZWRDb25uZWN0aW9uc1thZGRyZXNzXSA9IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBjb24uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBjaGFpbklkOiBjb24uY2hhaW5JZCxcbiAgICAgICAgICAgICAgICBwcm92aWRlclR5cGU6IGNvbi5wcm92aWRlclR5cGUsXG4gICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogY29uLmJsb2NrY2hhaW4sXG4gICAgICAgICAgICAgICAgZXRoZXJzOiBldGhlcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRDb25uZWN0aW9ucykpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5lbWl0U2F2ZWRDb25uZWN0aW9uID0gZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY29ubmVjdGlvbnMpLmxlbmd0aCAmJiBhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5ldmVudFNlbmRlcignY29ubmVjdGVkLXdhbGxldCcsIHsgZGF0YTogdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG9jYWxlTG93ZXJDYXNlKCldIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvY2FsZUxvd2VyQ2FzZSgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmVtaXROZXR3b3JrQ2hhbmdlID0gZnVuY3Rpb24gKGNoYWluSWQpIHtcbiAgICAgICAgaWYgKGNoYWluSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyKCduZXR3b3JrLWNoYW5nZScsIGNoYWluSWQpO1xuICAgICAgICAgICAgcmV0dXJuIGNoYWluSWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZGVsZXRlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3dhbGxldGNvbm5lY3QnKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUubG9hZENvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSwgc3RhdGUsIF9hLCBfYiwgX2MsIF9pLCBhZGRyZXNzLCBjb25uZWN0aW9uLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9jIGluIF9hKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnB1c2goX2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IF9iLmxlbmd0aCkpIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IF9iW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9jIGluIF9hKSkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2QudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5jb25uZWN0V2l0aChjb25uZWN0aW9uLnByb3ZpZGVyVHlwZSwgdHJ1ZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhbGxldCBjb3VsZG4ndCBjb25uZWN0OiBcIiArIGVfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuY29ubmVjdFdpdGggPSBmdW5jdGlvbiAod2FsbGV0VHlwZSwgY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICBpZiAoY2hlY2tDb25uZWN0aW9uT25seSA9PT0gdm9pZCAwKSB7IGNoZWNrQ29ubmVjdGlvbk9ubHkgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FsbGV0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgV2FsbGV0IHR5cGUgdG8gY29ubmVjdCB3aXRoLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW3dhbGxldFR5cGVdKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzW3dhbGxldFR5cGVdKGNoZWNrQ29ubmVjdGlvbk9ubHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnYWRkcmVzcycsIGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdXYWxsZXQgdHlwZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNpZ25NZXNzYWdlID0gZnVuY3Rpb24gKGFkZHJlc3MsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBzaWduZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IHRoaXMuZ2V0V2FsbGV0UHJvdmlkZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0V2FsbGV0UHJvdmlkZXIgPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghKChfYSA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm92aWRlcikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCBwcm92aWRlciBub3QgZm91bmQgZm9yIGFkZHJlc3MnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10ucHJvdmlkZXI7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldENvbm5lY3RlZFdhbGxldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY29ubmVjdGlvbnMpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MgPSBmdW5jdGlvbiAoYWRkcmVzcywgY2hhaW5JZCwgcHJvdmlkZXJUeXBlLCBwcm92aWRlciwgYmxvY2tjaGFpbikge1xuICAgICAgICBpZiAoYmxvY2tjaGFpbiA9PT0gdm9pZCAwKSB7IGJsb2NrY2hhaW4gPSAnZXZtJzsgfVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb3dlckNhc2UoKV0gPSB7IGFkZHJlc3M6IGFkZHJlc3MsIGNoYWluSWQ6IGNoYWluSWQsIHByb3ZpZGVyVHlwZTogcHJvdmlkZXJUeXBlLCBwcm92aWRlcjogcHJvdmlkZXIsIGJsb2NrY2hhaW46IGJsb2NrY2hhaW4sIGV0aGVyczogZXRoZXJzIH07XG4gICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3RlclByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyLCBwcm92aWRlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjY291bnRzLCBjaGFpbklkLCBjdXJBY2NvdW50O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBwcm92aWRlci5saXN0QWNjb3VudHMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5kZXRlY3ROZXR3b3JrKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkID0gKF9hLnNlbnQoKSkuY2hhaW5JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZ1bmN0aW9uIChhY2NvdW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJBY2NvdW50ID09PSBhY2NvdW50c1swXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5jb25uZWN0aW9uc1tjdXJBY2NvdW50LnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VyQWNjb3VudCwgY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihjdXJBY2NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZ2V0VG9rZW5TdG9yZSgpLmNsZWFyQ2FjaGVkVG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmVucmljaFRva2VuTG9va3VwRGF0YU9uQ2hhaW5Ub2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIub24oJ2NoYWluQ2hhbmdlZCcsIGZ1bmN0aW9uIChfY2hhaW5JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSwgX2NoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXROZXR3b3JrQ2hhbmdlKF9jaGFpbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhY2NvdW50c1swXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5NZXRhTWFzayA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBNZXRhTWFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0sICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnTWV0YU1hc2snKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdNZXRhTWFzayBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3QgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLCB3YWxsZXRDb25uZWN0O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoJy4vV2FsbGV0Q29ubmVjdFByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZShjaGVja0Nvbm5lY3Rpb25Pbmx5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QuY29ubmVjdG9yLm9uKCdkaXNwbGF5X3VyaScsIGZ1bmN0aW9uIChlcnIsIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDb25uZWN0aW9uIGV4cGlyZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5hYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3YWxsZXRDb25uZWN0LCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsICdXYWxsZXRDb25uZWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiByZWplY3QoZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3RWMiA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3YWxsZXRDb25uZWN0UHJvdmlkZXIsIHVuaXZlcnNhbFdhbGxldENvbm5lY3QsIFFSQ29kZU1vZGFsLCBwYWlyaW5nO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCBWMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoJy4vV2FsbGV0Q29ubmVjdFYyUHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLmdldFdhbGxldENvbm5lY3RWMlByb3ZpZGVySW5zdGFuY2UoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0Lm9uKCdkaXNwbGF5X3VyaScsIGZ1bmN0aW9uICh1cmkpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFVkVOVCcsICdRUiBDb2RlIE1vZGFsIG9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGltcG9ydCgnQHdhbGxldGNvbm5lY3QvcXJjb2RlLW1vZGFsJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsID0gKF9hLnNlbnQoKSkuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbC5vcGVuKHVyaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZ2V0VWkoKS5zaG93RXJyb3IoJ1VzZXIgY2xvc2VkIG1vZGFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5vbignc2Vzc2lvbl9kZWxldGUnLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBfYS5pZCwgdG9waWMgPSBfYS50b3BpYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0MgVjIgRVZFTlQnLCAnc2Vzc2lvbl9kZWxldGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmRpc2Nvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdWkgPSBfdGhpcy5jbGllbnQuZ2V0VWkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodWkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpLnVwZGF0ZVVJKCd3YWxsZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhY2hlY2tDb25uZWN0aW9uT25seSkgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhaXJpbmcgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHVuaXZlcnNhbFdhbGxldENvbm5lY3QuY29ubmVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVpcDE1NToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IFsnZXRoX3NlbmRUcmFuc2FjdGlvbicsICdldGhfc2lnblRyYW5zYWN0aW9uJywgJ2V0aF9zaWduJywgJ3BlcnNvbmFsX3NpZ24nLCAnZXRoX3NpZ25UeXBlZERhdGEnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbnM6IHdhbGxldENvbm5lY3RQcm92aWRlci5XQ19WMl9DSEFJTlMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiBbJ2NoYWluQ2hhbmdlZCcsICdhY2NvdW50c0NoYW5nZWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNNYXA6IHdhbGxldENvbm5lY3RQcm92aWRlci5DVVNUT01fUlBDU19GT1JfV0NfVjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlyaW5nVG9waWM6IHBhaXJpbmcgPT09IG51bGwgfHwgcGFpcmluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFpcmluZy50b3BpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5hYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodW5pdmVyc2FsV2FsbGV0Q29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ1dhbGxldENvbm5lY3RWMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuVG9ydXMgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgVG9ydXNQcm92aWRlciwgdG9ydXMsIHByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydCgnLi9Ub3J1c1Byb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3J1c1Byb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBUb3J1c1Byb3ZpZGVyLmdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9ydXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRvcnVzLmluaXQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMubG9naW4oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHRvcnVzLnByb3ZpZGVyLCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ1RvcnVzJyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuUGhhbnRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24sIGFjY291bnRBZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFBoYW50b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuc29sYW5hICE9PSAndW5kZWZpbmVkJykpIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdpbmRvdy5zb2xhbmEuY29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRBZGRyZXNzID0gY29ubmVjdGlvbi5wdWJsaWNLZXkudG9CYXNlNTgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudEFkZHJlc3MsICdtYWlubmV0LWJldGEnLCAncGhhbnRvbScsIHdpbmRvdy5zb2xhbmEsICdzb2xhbmEnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdNZXRhTWFzayBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlNhZmVDb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIGFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgU2FmZUNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5nZXRTYWZlQ29ubmVjdFByb3ZpZGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcHJvdmlkZXIuaW5pdFNhZmVDb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWRkcmVzcywgMSwgJ1NhZmVDb25uZWN0JywgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhZGRyZXNzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNhZmVDb25uZWN0QXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0U2FmZUNvbm5lY3RQcm92aWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFNhZmVDb25uZWN0UHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KCcuL1NhZmVDb25uZWN0UHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhZmVDb25uZWN0UHJvdmlkZXIgPSAoX2Euc2VudCgpKS5TYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgU2FmZUNvbm5lY3RQcm92aWRlcih0aGlzLmNsaWVudC5nZXRVaSgpLCB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSA9ICd0bi13YWxsZXQtY29ubmVjdGlvbnMnO1xuICAgIHJldHVybiBXZWIzV2FsbGV0UHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgV2ViM1dhbGxldFByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBXZWIzV2FsbGV0UHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWIzV2FsbGV0UHJvdmlkZXIuanMubWFwIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhZG9wdCIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImYiLCJ5IiwidCIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJXZWIzV2FsbGV0UHJvdmlkZXIiLCJjbGllbnQiLCJzYWZlQ29ubmVjdE9wdGlvbnMiLCJjb25uZWN0aW9ucyIsInByb3RvdHlwZSIsInNhdmVDb25uZWN0aW9ucyIsInNhdmVkQ29ubmVjdGlvbnMiLCJhZGRyZXNzIiwiY29uIiwiY2hhaW5JZCIsInByb3ZpZGVyVHlwZSIsImJsb2NrY2hhaW4iLCJldGhlcnMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9DQUxfU1RPUkFHRV9LRVkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1pdFNhdmVkQ29ubmVjdGlvbiIsIk9iamVjdCIsImtleXMiLCJldmVudFNlbmRlciIsImRhdGEiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImVtaXROZXR3b3JrQ2hhbmdlIiwiZGVsZXRlQ29ubmVjdGlvbnMiLCJyZW1vdmVJdGVtIiwibG9hZENvbm5lY3Rpb25zIiwic3RhdGUiLCJfYSIsIl9iIiwiX2MiLCJfaSIsImNvbm5lY3Rpb24iLCJlXzEiLCJfZCIsImdldEl0ZW0iLCJwYXJzZSIsImNvbm5lY3RXaXRoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ3YWxsZXRUeXBlIiwiY2hlY2tDb25uZWN0aW9uT25seSIsIkVycm9yIiwic2lnbk1lc3NhZ2UiLCJwcm92aWRlciIsImdldFdhbGxldFByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwidG9Mb3dlckNhc2UiLCJnZXRDb25uZWN0ZWRXYWxsZXREYXRhIiwidmFsdWVzIiwicmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzIiwicmVnaXN0ZXJQcm92aWRlciIsInByb3ZpZGVyTmFtZSIsImFjY291bnRzIiwiY3VyQWNjb3VudCIsIl90aGlzIiwibGlzdEFjY291bnRzIiwiZGV0ZWN0TmV0d29yayIsIm9uIiwiZ2V0VG9rZW5TdG9yZSIsImNsZWFyQ2FjaGVkVG9rZW5zIiwiZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucyIsIl9jaGFpbklkIiwiTWV0YU1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRDb25uZWN0IiwiZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UiLCJjb25uZWN0b3IiLCJlcnIiLCJwYXlsb2FkIiwiY2F0Y2giLCJXYWxsZXRDb25uZWN0VjIiLCJ3YWxsZXRDb25uZWN0UHJvdmlkZXIiLCJ1bml2ZXJzYWxXYWxsZXRDb25uZWN0IiwiUVJDb2RlTW9kYWwiLCJnZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlIiwidXJpIiwiZGVmYXVsdCIsIm9wZW4iLCJnZXRVaSIsInNob3dFcnJvciIsImlkIiwidG9waWMiLCJkaXNjb25uZWN0V2FsbGV0IiwidWkiLCJ1cGRhdGVVSSIsImNvbm5lY3QiLCJuYW1lc3BhY2VzIiwiZWlwMTU1IiwibWV0aG9kcyIsImNoYWlucyIsIldDX1YyX0NIQUlOUyIsImV2ZW50cyIsInJwY01hcCIsIkNVU1RPTV9SUENTX0ZPUl9XQ19WMiIsInBhaXJpbmdUb3BpYyIsImNsb3NlIiwiVG9ydXMiLCJ0b3J1cyIsImdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSIsImluaXQiLCJsb2dpbiIsIlBoYW50b20iLCJhY2NvdW50QWRkcmVzcyIsInNvbGFuYSIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiU2FmZUNvbm5lY3QiLCJnZXRTYWZlQ29ubmVjdFByb3ZpZGVyIiwiaW5pdFNhZmVDb25uZWN0Iiwic2FmZUNvbm5lY3RBdmFpbGFibGUiLCJ1bmRlZmluZWQiLCJTYWZlQ29ubmVjdFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==