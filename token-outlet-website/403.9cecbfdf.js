"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  8403: (e, t, n) => {
    n.r(t), n.d(t, {
      Web3WalletProvider: () => a,
      default: () => u
    });
    var r = n(1023);
    var o = n(241);
    var i = n(6677);
    var s = function(e, t, n, r) {
      return new (n || (n = Promise))((function(o, i) {
        function s(e) {
          try {
            a(r.next(e));
          } catch (t) {
            i(t);
          }
        }
        function c(e) {
          try {
            a(r.throw(e));
          } catch (t) {
            i(t);
          }
        }
        function a(e) {
          e.done ? o(e.value) : function(e) {
            return e instanceof n ? e : new n((function(t) {
              t(e);
            }));
          }(e.value).then(s, c);
        }
        a((r = r.apply(e, t || [])).next());
      }));
    };
    var c = function(e, t) {
      var n, r, o, i, s = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1];
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
              if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
              switch (r = 0, o && (c = [ 2 & c[0], o.value ]), c[0]) {
               case 0:
               case 1:
                o = c;
                break;

               case 4:
                return s.label++, {
                  value: c[1],
                  done: !1
                };

               case 5:
                s.label++, r = c[1], c = [ 0 ];
                continue;

               case 7:
                c = s.ops.pop(), s.trys.pop();
                continue;

               default:
                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                  s = 0;
                  continue;
                }
                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                  s.label = c[1];
                  break;
                }
                if (6 === c[0] && s.label < o[1]) {
                  s.label = o[1], o = c;
                  break;
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(c);
                  break;
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue;
              }
              c = t.call(e, s);
            } catch (a) {
              c = [ 6, a ], r = 0;
            } finally {
              n = o = 0;
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
            blockchain: o.blockchain,
            ethers: r
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
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY), localStorage.removeItem('walletconnect'), sessionStorage.removeItem('CURRENT_USER');
      }, e.prototype.loadConnections = function() {
        return s(this, void 0, void 0, (function() {
          var t, n, r, o, i, s, a, u, l;
          return c(this, (function(c) {
            switch (c.label) {
             case 0:
              if (!(t = localStorage.getItem(e.LOCAL_STORAGE_KEY))) return [ 2 ];
              if (!(n = JSON.parse(t))) return [ 2 ];
              for (i in o = [], r = n) o.push(i);
              s = 0, c.label = 1;

             case 1:
              if (!(s < o.length)) return [ 3, 6 ];
              if (!((i = o[s]) in r)) return [ 3, 5 ];
              u = n[a = i], c.label = 2;

             case 2:
              return c.trys.push([ 2, 4, , 5 ]), [ 4, this.connectWith(u.providerType, !0) ];

             case 3:
              return c.sent(), [ 3, 5 ];

             case 4:
              return l = c.sent(), console.log("Wallet couldn't connect: " + l.message), delete n[a], this.saveConnections(), this.emitSavedConnection(a), 
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
          return c(this, (function(r) {
            switch (r.label) {
             case 0:
              if (!e) throw new Error('Please provide a Wallet type to connect with.');
              return this[e] ? [ 4, this[e](t) ] : [ 3, 2 ];

             case 1:
              return n = r.sent(), (0, i.kg)(2, 'address', n), this.saveConnections(), this.emitSavedConnection(n), [ 2, n ];

             case 2:
              throw new Error('Wallet type not found');
            }
          }));
        }));
      }, e.prototype.signMessage = function(e, t) {
        return s(this, void 0, void 0, (function() {
          var n;
          return c(this, (function(r) {
            switch (r.label) {
             case 0:
              return n = this.getWalletProvider(e), [ 4, n.getSigner(e).signMessage(t) ];

             case 1:
              return [ 2, r.sent() ];
            }
          }));
        }));
      }, e.prototype.getWalletProvider = function(e) {
        var t;
        if (e = e.toLowerCase(), !(null === (t = this.connections[e]) || void 0 === t ? void 0 : t.provider)) throw new Error('Wallet provider not found for address');
        return this.connections[e].provider;
      }, e.prototype.getConnectedWalletData = function() {
        return Object.values(this.connections);
      }, e.prototype.registerNewWalletAddress = function(e, t, n, o, i) {
        return void 0 === i && (i = 'evm'), this.connections[e.toLowerCase()] = {
          address: e,
          chainId: t,
          providerType: n,
          provider: o,
          blockchain: i,
          ethers: r
        }, e;
      }, e.prototype.registerProvider = function(e, t) {
        return s(this, void 0, void 0, (function() {
          var n, r, o;
          var i = this;
          return c(this, (function(s) {
            switch (s.label) {
             case 0:
              return [ 4, e.listAccounts() ];

             case 1:
              return n = s.sent(), [ 4, e.detectNetwork() ];

             case 2:
              if (r = s.sent().chainId, 0 === n.length) throw new Error('No accounts found via wallet-connect.');
              return o = n[0], this.registerNewWalletAddress(o, r, t, e), e.provider.on('accountsChanged', (function(n) {
                o !== n[0] && (delete i.connections[o.toLowerCase()], o = n[0], i.registerNewWalletAddress(o, r, t, e), i.saveConnections(), 
                i.emitSavedConnection(o), i.client.getTokenStore().clearCachedTokens(), i.client.enrichTokenLookupDataOnChainTokens());
              })), e.provider.on('chainChanged', (function(r) {
                i.registerNewWalletAddress(n[0], r, t, e), i.saveConnections(), i.emitNetworkChange(r);
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
              return (0, i.kg)(2, 'connect MetaMask'), void 0 === window.ethereum ? [ 3, 2 ] : [ 4, window.ethereum.enable() ];

             case 1:
              return t.sent(), e = new o.Q(window.ethereum, 'any'), [ 2, this.registerProvider(e, 'MetaMask') ];

             case 2:
              throw new Error('MetaMask is not available. Please check the extension is supported and active.');
            }
          }));
        }));
      }, e.prototype.WalletConnect = function(e) {
        return s(this, void 0, void 0, (function() {
          var t;
          var r = this;
          return c(this, (function(s) {
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
                  var e = new o.Q(t, 'any');
                  n(r.registerProvider(e, 'WalletConnect'));
                })).catch((function(e) {
                  return i(e);
                }));
              })) ];
            }
          }));
        }));
      }, e.prototype.WalletConnectV2 = function(e) {
        return s(this, void 0, void 0, (function() {
          var t, r, a;
          var u = this;
          return c(this, (function(l) {
            switch (l.label) {
             case 0:
              return (0, i.kg)(2, 'connect Wallet Connect V2'), [ 4, n.e(387).then(n.bind(n, 9387)) ];

             case 1:
              return [ 4, (t = l.sent()).getWalletConnectV2ProviderInstance() ];

             case 2:
              return (r = l.sent()).on('display_uri', (function(e) {
                return s(u, void 0, void 0, (function() {
                  var t = this;
                  return c(this, (function(r) {
                    switch (r.label) {
                     case 0:
                      return console.log('EVENT', 'QR Code Modal open'), [ 4, n.e(337).then(n.t.bind(n, 4337, 23)) ];

                     case 1:
                      return (a = r.sent().default).open(e, (function() {
                        t.client.getUi().showError('User closed modal');
                      })), [ 2 ];
                    }
                  }));
                }));
              })), r.on('session_delete', (function(e) {
                e.id, e.topic;
                console.log('WC V2 EVENT', 'session_deleted'), u.client.disconnectWallet();
                var t = u.client.getUi();
                t && t.updateUI('wallet');
              })), e ? [ 3, 4 ] : (void 0, [ 4, r.connect({
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
              l.sent(), a.close(), l.label = 4;

             case 4:
              return [ 2, new Promise((function(e, t) {
                r.enable().then((function() {
                  var t = new o.Q(r, 'any');
                  e(u.registerProvider(t, 'WalletConnectV2'));
                })).catch((function(e) {
                  t(e);
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
              return [ 4, n.e(681).then(n.bind(n, 4681)) ];

             case 1:
              return [ 4, r.sent().getTorusProviderInstance() ];

             case 2:
              return [ 4, (e = r.sent()).init() ];

             case 3:
              return r.sent(), [ 4, e.login() ];

             case 4:
              return r.sent(), t = new o.Q(e.provider, 'any'), [ 2, this.registerProvider(t, 'Torus') ];
            }
          }));
        }));
      }, e.prototype.Phantom = function() {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return c(this, (function(n) {
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
        return s(this, void 0, void 0, (function() {
          var e, t;
          return c(this, (function(n) {
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
      }, e.prototype.flowSubscribe = function(e, t) {
        return s(this, void 0, void 0, (function() {
          var n;
          return c(this, (function(r) {
            try {
              t.addr && (this.registerNewWalletAddress(t.addr, 1, 'flow', e), (n = this.client.getUi()) && n.dismissLoader(), this.client.enrichTokenLookupDataOnChainTokens(), 
              n && n.updateUI('main'));
            } catch (o) {
              console.error('flow wallet connection error ==>', o), this.client.getUi().showError('Flow wallet connection error.');
            }
            return [ 2 ];
          }));
        }));
      }, e.prototype.Flow = function() {
        return s(this, void 0, void 0, (function() {
          var e, t, r;
          var o = this;
          return c(this, (function(i) {
            switch (i.label) {
             case 0:
              return i.trys.push([ 0, 2, , 3 ]), [ 4, n.e(652).then(n.bind(n, 3652)) ];

             case 1:
              return e = i.sent(), (t = e.getFlowProvider()).currentUser.subscribe((function(e) {
                return o.flowSubscribe(t, e);
              })), t.authenticate(), [ 3, 3 ];

             case 2:
              return r = i.sent(), console.error('error ==>', r), [ 3, 3 ];

             case 3:
              return [ 2, '' ];
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
              return [ 4, Promise.resolve().then(n.bind(n, 7393)) ];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAzLjljZWNiZmRmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEsSUFBSUEsSUFBd0MsU0FBVUMsR0FBU0MsR0FBWUMsR0FBR0M7TUFFMUUsT0FBTyxLQUFLRCxNQUFNQSxJQUFJRSxXQUFVLFNBQVVDLEdBQVNDO1FBQy9DLFNBQVNDLEVBQVVDO1VBQVM7WUFBTUMsRUFBS04sRUFBVU8sS0FBS0Y7QUFBa0MsWUFBdkIsT0FBT0c7WUFBS0wsRUFBT0s7QUFBSTtBQUFFO1FBQzFGLFNBQVNDLEVBQVNKO1VBQVM7WUFBTUMsRUFBS04sRUFBaUIsTUFBRUs7QUFBa0MsWUFBdkIsT0FBT0c7WUFBS0wsRUFBT0s7QUFBSTtBQUFFO1FBQzdGLFNBQVNGLEVBQUtJO1VBQVVBLEVBQU9DLE9BQU9ULEVBQVFRLEVBQU9MLFNBSnpELFNBQWVBO1lBQVMsT0FBT0EsYUFBaUJOLElBQUlNLElBQVEsSUFBSU4sR0FBRSxTQUFVRztjQUFXQSxFQUFRRztBQUFRO0FBQUksV0FJekNPLENBQU1GLEVBQU9MLE9BQU9RLEtBQUtULEdBQVdLO0FBQVc7UUFDN0dILEdBQU1OLElBQVlBLEVBQVVjLE1BQU1qQixHQUFTQyxLQUFjLEtBQUtTO0FBQ2xFO0FBQ0o7SUFDQSxJQUFJUSxJQUE0QyxTQUFVbEIsR0FBU21CO01BQy9ELElBQXNHQyxHQUFHQyxHQUFHQyxHQUFHQyxHQUEzR0MsSUFBSTtRQUFFQyxPQUFPO1FBQUdDLE1BQU07VUFBYSxJQUFXLElBQVBKLEVBQUUsSUFBUSxNQUFNQSxFQUFFO1VBQUksT0FBT0EsRUFBRTtBQUFJO1FBQUdLLE1BQU07UUFBSUMsS0FBSzs7TUFDaEcsT0FBT0wsSUFBSTtRQUFFYixNQUFNbUIsRUFBSztRQUFJLE9BQVNBLEVBQUs7UUFBSSxRQUFVQSxFQUFLO1NBQXdCLHFCQUFYQyxXQUEwQlAsRUFBRU8sT0FBT0MsWUFBWTtRQUFhLE9BQU9DO0FBQU0sVUFBSVQ7TUFDdkosU0FBU00sRUFBS0k7UUFBSyxPQUFPLFNBQVVDO1VBQUssT0FDekMsU0FBY0M7WUFDVixJQUFJZixHQUFHLE1BQU0sSUFBSWdCLFVBQVU7WUFDM0IsTUFBT2IsTUFBTUEsSUFBSSxHQUFHWSxFQUFHLE9BQU9YLElBQUksS0FBS0E7Y0FDbkMsSUFBSUosSUFBSSxHQUFHQyxNQUFNQyxJQUFZLElBQVJhLEVBQUcsS0FBU2QsRUFBVSxTQUFJYyxFQUFHLEtBQUtkLEVBQVMsV0FBT0MsSUFBSUQsRUFBVSxXQUFNQyxFQUFFZSxLQUFLaEIsSUFBSSxLQUFLQSxFQUFFWCxXQUFXWSxJQUFJQSxFQUFFZSxLQUFLaEIsR0FBR2MsRUFBRyxLQUFLckIsTUFBTSxPQUFPUTtjQUUzSixRQURJRCxJQUFJLEdBQUdDLE1BQUdhLElBQUssRUFBUyxJQUFSQSxFQUFHLElBQVFiLEVBQUVkLFVBQ3pCMkIsRUFBRztlQUNQLEtBQUs7ZUFBRyxLQUFLO2dCQUFHYixJQUFJYTtnQkFBSTs7ZUFDeEIsS0FBSztnQkFBYyxPQUFYWCxFQUFFQyxTQUFnQjtrQkFBRWpCLE9BQU8yQixFQUFHO2tCQUFJckIsT0FBTTs7O2VBQ2hELEtBQUs7Z0JBQUdVLEVBQUVDLFNBQVNKLElBQUljLEVBQUcsSUFBSUEsSUFBSyxFQUFDO2dCQUFJOztlQUN4QyxLQUFLO2dCQUFHQSxJQUFLWCxFQUFFSSxJQUFJVSxPQUFPZCxFQUFFRyxLQUFLVztnQkFBTzs7ZUFDeEM7Z0JBQ0ksTUFBTWhCLElBQUlFLEVBQUVHLE9BQU1MLElBQUlBLEVBQUVpQixTQUFTLEtBQUtqQixFQUFFQSxFQUFFaUIsU0FBUyxPQUFrQixNQUFWSixFQUFHLE1BQXNCLE1BQVZBLEVBQUcsS0FBVztrQkFBRVgsSUFBSTtrQkFBRztBQUFVO2dCQUMzRyxJQUFjLE1BQVZXLEVBQUcsUUFBY2IsS0FBTWEsRUFBRyxLQUFLYixFQUFFLE1BQU1hLEVBQUcsS0FBS2IsRUFBRSxLQUFNO2tCQUFFRSxFQUFFQyxRQUFRVSxFQUFHO2tCQUFJO0FBQU87Z0JBQ3JGLElBQWMsTUFBVkEsRUFBRyxNQUFZWCxFQUFFQyxRQUFRSCxFQUFFLElBQUk7a0JBQUVFLEVBQUVDLFFBQVFILEVBQUUsSUFBSUEsSUFBSWE7a0JBQUk7QUFBTztnQkFDcEUsSUFBSWIsS0FBS0UsRUFBRUMsUUFBUUgsRUFBRSxJQUFJO2tCQUFFRSxFQUFFQyxRQUFRSCxFQUFFLElBQUlFLEVBQUVJLElBQUlZLEtBQUtMO2tCQUFLO0FBQU87Z0JBQzlEYixFQUFFLE1BQUlFLEVBQUVJLElBQUlVLE9BQ2hCZCxFQUFFRyxLQUFLVztnQkFBTzs7Y0FFdEJILElBQUtoQixFQUFLa0IsS0FBS3JDLEdBQVN3QjtjQUMxQixPQUFPYjtjQUFLd0IsSUFBSyxFQUFDLEdBQUd4QixLQUFJVSxJQUFJO0FBQUcsY0FBRTtjQUFVRCxJQUFJRSxJQUFJO0FBQUc7WUFDekQsSUFBWSxJQUFSYSxFQUFHLElBQVEsTUFBTUEsRUFBRztZQUFJLE9BQU87Y0FBRTNCLE9BQU8yQixFQUFHLEtBQUtBLEVBQUcsVUFBSztjQUFRckIsT0FBTTs7QUFDOUUsV0F0QmdETCxDQUFLLEVBQUN3QixHQUFHQztBQUFLO0FBQUc7QUF1QnJFO0lBR0EsSUFBSU8sSUFBc0I7TUFDdEIsU0FBU0EsRUFBbUJDLEdBQVFDO1FBQ2hDWCxLQUFLWSxjQUFjLENBQUMsR0FDcEJaLEtBQUtVLFNBQVNBLEdBQ2RWLEtBQUtXLHFCQUFxQkE7QUFDOUI7TUErWkEsT0E5WkFGLEVBQW1CSSxVQUFVQyxrQkFBa0I7UUFDM0MsSUFBSUMsSUFBbUIsQ0FBQztRQUN4QixLQUFLLElBQUlDLEtBQVdoQixLQUFLWSxhQUFhO1VBQ2xDLElBQUlLLElBQU1qQixLQUFLWSxZQUFZSTtVQUMzQkQsRUFBaUJDLEtBQVc7WUFDeEJBLFNBQVNDLEVBQUlEO1lBQ2JFLFNBQVNELEVBQUlDO1lBQ2JDLGNBQWNGLEVBQUlFO1lBQ2xCQyxZQUFZSCxFQUFJRztZQUNoQkMsUUFBUTs7QUFFaEI7UUFDQUMsYUFBYUMsUUFBUWQsRUFBbUJlLG1CQUFtQkMsS0FBS0MsVUFBVVg7QUFDOUUsU0FDQU4sRUFBbUJJLFVBQVVjLHNCQUFzQixTQUFVWDtRQUN6RCxPQUFJWSxPQUFPQyxLQUFLN0IsS0FBS1ksYUFBYUwsVUFBVVMsS0FDeENoQixLQUFLVSxPQUFPb0IsWUFBWSxvQkFBb0I7VUFBRUMsTUFBTS9CLEtBQUtZLFlBQVlJLEVBQVFnQjtZQUN0RWhDLEtBQUtZLFlBQVlJLEVBQVFnQix3QkFHekI7QUFFZixTQUNBdkIsRUFBbUJJLFVBQVVvQixvQkFBb0IsU0FBVWY7UUFDdkQsSUFBSUEsR0FFQSxPQURBbEIsS0FBS1UsT0FBT29CLFlBQVksa0JBQWtCWixJQUNuQ0E7QUFFZixTQUNBVCxFQUFtQkksVUFBVXFCLG9CQUFvQjtRQUM3Q2xDLEtBQUtZLGNBQWMsQ0FBQyxHQUNwQlUsYUFBYWEsV0FBVzFCLEVBQW1CZSxvQkFDM0NGLGFBQWFhLFdBQVcsa0JBQ3hCQyxlQUFlRCxXQUFXO0FBQzlCLFNBQ0ExQixFQUFtQkksVUFBVXdCLGtCQUFrQjtRQUMzQyxPQUFPdEUsRUFBVWlDLFdBQU0sUUFBUSxJQUFRO1VBQ25DLElBQUkrQixHQUFNTyxHQUFPQyxHQUFJQyxHQUFJQyxHQUFJQyxHQUFJMUIsR0FBUzJCLEdBQVlDO1VBQ3RELE9BQU8xRCxFQUFZYyxPQUFNLFNBQVU2QztZQUMvQixRQUFRQSxFQUFHcEQ7YUFDUCxLQUFLO2NBRUQsTUFEQXNDLElBQU9ULGFBQWF3QixRQUFRckMsRUFBbUJlLHFCQUUzQyxPQUFPLEVBQUM7Y0FFWixNQURBYyxJQUFRYixLQUFLc0IsTUFBTWhCLEtBRWYsT0FBTyxFQUFDO2NBR1osS0FBS1UsS0FETEQsSUFBSyxJQURMRCxJQUFLRCxHQUdERSxFQUFHaEMsS0FBS2lDO2NBQ1pDLElBQUssR0FDTEcsRUFBR3BELFFBQVE7O2FBQ2YsS0FBSztjQUNELE1BQU1pRCxJQUFLRixFQUFHakMsU0FBUyxPQUFPLEVBQUMsR0FBRztjQUVsQyxPQURBa0MsSUFBS0QsRUFBR0UsT0FDSUgsSUFBSyxPQUFPLEVBQUMsR0FBRztjQUU1QkksSUFBYUwsRUFEYnRCLElBQVV5QixJQUVWSSxFQUFHcEQsUUFBUTs7YUFDZixLQUFLO2NBRUQsT0FEQW9ELEVBQUdsRCxLQUFLYSxLQUFLLEVBQUMsR0FBRyxHQUFHLEVBQUUsTUFDZixFQUFDLEdBQUdSLEtBQUtnRCxZQUFZTCxFQUFXeEIsZUFBYzs7YUFDekQsS0FBSztjQUVELE9BREEwQixFQUFHbkQsUUFDSSxFQUFDLEdBQUc7O2FBQ2YsS0FBSztjQU1ELE9BTEFrRCxJQUFNQyxFQUFHbkQsUUFDVHVELFFBQVFDLElBQUksOEJBQThCTixFQUFJTyxpQkFDdkNiLEVBQU10QixJQUNiaEIsS0FBS2MsbUJBQ0xkLEtBQUsyQixvQkFBb0JYO2NBQ2xCLEVBQUMsR0FBRzs7YUFDZixLQUFLO2NBRUQsT0FEQTBCLEtBQ08sRUFBQyxHQUFHOzthQUNmLEtBQUs7Y0FBRyxPQUFPLEVBQUM7O0FBRXhCO0FBQ0o7QUFDSixTQUNBakMsRUFBbUJJLFVBQVVtQyxjQUFjLFNBQVVJLEdBQVlDO1FBRTdELFlBRDRCLE1BQXhCQSxNQUFrQ0EsS0FBc0IsSUFDckR0RixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBSWdCO1VBQ0osT0FBTzlCLEVBQVljLE9BQU0sU0FBVXVDO1lBQy9CLFFBQVFBLEVBQUc5QzthQUNQLEtBQUs7Y0FDRCxLQUFLMkQsR0FDRCxNQUFNLElBQUlFLE1BQU07Y0FDcEIsT0FBS3RELEtBQUtvRCxLQUNILEVBQUMsR0FBR3BELEtBQUtvRCxHQUFZQyxPQURFLEVBQUMsR0FBRzs7YUFFdEMsS0FBSztjQUtELE9BSkFyQyxJQUFVdUIsRUFBRzdDLFNBQ2IsU0FBTyxHQUFHLFdBQVdzQixJQUNyQmhCLEtBQUtjLG1CQUNMZCxLQUFLMkIsb0JBQW9CWCxJQUNsQixFQUFDLEdBQUdBOzthQUNmLEtBQUs7Y0FBRyxNQUFNLElBQUlzQyxNQUFNOztBQUVoQztBQUNKO0FBQ0osU0FDQTdDLEVBQW1CSSxVQUFVMEMsY0FBYyxTQUFVdkMsR0FBU21DO1FBQzFELE9BQU9wRixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBSXdEO1VBQ0osT0FBT3RFLEVBQVljLE9BQU0sU0FBVXVDO1lBQy9CLFFBQVFBLEVBQUc5QzthQUNQLEtBQUs7Y0FHRCxPQUZBK0QsSUFBV3hELEtBQUt5RCxrQkFBa0J6QyxJQUUzQixFQUFDLEdBREN3QyxFQUFTRSxVQUFVMUMsR0FDVnVDLFlBQVlKOzthQUNsQyxLQUFLO2NBQUcsT0FBTyxFQUFDLEdBQUdaLEVBQUc3Qzs7QUFFOUI7QUFDSjtBQUNKLFNBQ0FlLEVBQW1CSSxVQUFVNEMsb0JBQW9CLFNBQVV6QztRQUN2RCxJQUFJdUI7UUFFSixJQURBdkIsSUFBVUEsRUFBUTJDLGlCQUN5QixVQUFwQ3BCLElBQUt2QyxLQUFLWSxZQUFZSSxZQUE2QixNQUFQdUIsU0FBZ0IsSUFBU0EsRUFBR2lCLFdBQzNFLE1BQU0sSUFBSUYsTUFBTTtRQUNwQixPQUFPdEQsS0FBS1ksWUFBWUksR0FBU3dDO0FBQ3JDLFNBQ0EvQyxFQUFtQkksVUFBVStDLHlCQUF5QjtRQUNsRCxPQUFPaEMsT0FBT2lDLE9BQU83RCxLQUFLWTtBQUM5QixTQUNBSCxFQUFtQkksVUFBVWlELDJCQUEyQixTQUFVOUMsR0FBU0UsR0FBU0MsR0FBY3FDLEdBQVVwQztRQUd4RyxZQUZtQixNQUFmQSxNQUF5QkEsSUFBYSxRQUMxQ3BCLEtBQUtZLFlBQVlJLEVBQVEyQyxpQkFBaUI7VUFBRTNDLFNBQVNBO1VBQVNFLFNBQVNBO1VBQVNDLGNBQWNBO1VBQWNxQyxVQUFVQTtVQUFVcEMsWUFBWUE7VUFBWUMsUUFBUTtXQUN6Skw7QUFDWCxTQUNBUCxFQUFtQkksVUFBVWtELG1CQUFtQixTQUFVUCxHQUFVUTtRQUNoRSxPQUFPakcsRUFBVWlDLFdBQU0sUUFBUSxJQUFRO1VBQ25DLElBQUlpRSxHQUFVL0MsR0FBU2dEO1VBQ3ZCLElBQUlDLElBQVFuRTtVQUNaLE9BQU9kLEVBQVljLE9BQU0sU0FBVXVDO1lBQy9CLFFBQVFBLEVBQUc5QzthQUNQLEtBQUs7Y0FBRyxPQUFPLEVBQUMsR0FBRytELEVBQVNZOzthQUM1QixLQUFLO2NBRUQsT0FEQUgsSUFBVzFCLEVBQUc3QyxRQUNQLEVBQUMsR0FBRzhELEVBQVNhOzthQUN4QixLQUFLO2NBRUQsSUFEQW5ELElBQVdxQixFQUFHN0MsT0FBUXdCLFNBQ0UsTUFBcEIrQyxFQUFTMUQsUUFDVCxNQUFNLElBQUkrQyxNQUFNO2NBb0JwQixPQWxCQVksSUFBYUQsRUFBUyxJQUN0QmpFLEtBQUs4RCx5QkFBeUJJLEdBQVloRCxHQUFTOEMsR0FBY1IsSUFDakVBLEVBQVNBLFNBQVNjLEdBQUcsb0JBQW1CLFNBQVVMO2dCQUMxQ0MsTUFBZUQsRUFBUyxjQUVyQkUsRUFBTXZELFlBQVlzRCxFQUFXUCxnQkFDcENPLElBQWFELEVBQVMsSUFDdEJFLEVBQU1MLHlCQUF5QkksR0FBWWhELEdBQVM4QyxHQUFjUixJQUNsRVcsRUFBTXJEO2dCQUNOcUQsRUFBTXhDLG9CQUFvQnVDLElBQzFCQyxFQUFNekQsT0FBTzZELGdCQUFnQkMscUJBQzdCTCxFQUFNekQsT0FBTytEO0FBQ2pCLG1CQUNBakIsRUFBU0EsU0FBU2MsR0FBRyxpQkFBZ0IsU0FBVUk7Z0JBQzNDUCxFQUFNTCx5QkFBeUJHLEVBQVMsSUFBSVMsR0FBVVYsR0FBY1IsSUFDcEVXLEVBQU1yRCxtQkFDTnFELEVBQU1sQyxrQkFBa0J5QztBQUM1QixtQkFDTyxFQUFDLEdBQUdULEVBQVM7O0FBRWhDO0FBQ0o7QUFDSixTQUNBeEQsRUFBbUJJLFVBQVU4RCxXQUFXLFNBQVV0QjtRQUM5QyxPQUFPdEYsRUFBVWlDLFdBQU0sUUFBUSxJQUFRO1VBQ25DLElBQUl3RDtVQUNKLE9BQU90RSxFQUFZYyxPQUFNLFNBQVV1QztZQUMvQixRQUFRQSxFQUFHOUM7YUFDUCxLQUFLO2NBRUQsUUFEQSxTQUFPLEdBQUcsMEJBQ3VCLE1BQXBCbUYsT0FBT0MsV0FBa0MsRUFBQyxHQUFHLE1BQ25ELEVBQUMsR0FBR0QsT0FBT0MsU0FBU0M7O2FBQy9CLEtBQUs7Y0FHRCxPQUZBdkMsRUFBRzdDLFFBQ0g4RCxJQUFXLElBQUksSUFBOEJvQixPQUFPQyxVQUFVLFFBQ3ZELEVBQUMsR0FBRzdFLEtBQUsrRCxpQkFBaUJQLEdBQVU7O2FBQy9DLEtBQUs7Y0FBRyxNQUFNLElBQUlGLE1BQU07O0FBRWhDO0FBQ0o7QUFDSixTQUNBN0MsRUFBbUJJLFVBQVVrRSxnQkFBZ0IsU0FBVTFCO1FBQ25ELE9BQU90RixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBMkJnRjtVQUMzQixJQUFJYixJQUFRbkU7VUFDWixPQUFPZCxFQUFZYyxPQUFNLFNBQVV1QztZQUMvQixRQUFRQSxFQUFHOUM7YUFDUCxLQUFLO2NBRUQsUUFEQSxTQUFPLEdBQUcsMkJBQ0gsRUFBQyxHQUFHOzthQUNmLEtBQUs7Y0FFRCxPQUFPLEVBQUMsR0FEZ0I4QyxFQUFHN0MsT0FDTXVGLGlDQUFpQzVCOzthQUN0RSxLQUFLO2NBRUQsT0FEQTJCLElBQWdCekMsRUFBRzdDLFFBQ1osRUFBQyxHQUFHLElBQUl0QixTQUFRLFNBQVVDLEdBQVNDO2dCQUM5QitFLEtBQ0EyQixFQUFjRSxVQUFVWixHQUFHLGdCQUFlLFNBQVVhLEdBQUtDO2tCQUNyRDlHLEVBQU8sSUFBSWdGLE1BQU07QUFDckIscUJBRUowQixFQUNLRixTQUNBOUYsTUFBSztrQkFDTixJQUFJd0UsSUFBVyxJQUFJLElBQThCd0IsR0FBZTtrQkFDaEUzRyxFQUFROEYsRUFBTUosaUJBQWlCUCxHQUFVO0FBQzdDLG9CQUNLNkIsT0FBTSxTQUFVMUc7a0JBQUssT0FBT0wsRUFBT0s7QUFBSTtBQUNoRDs7QUFFaEI7QUFDSjtBQUNKLFNBQ0E4QixFQUFtQkksVUFBVXlFLGtCQUFrQixTQUFVakM7UUFDckQsT0FBT3RGLEVBQVVpQyxXQUFNLFFBQVEsSUFBUTtVQUNuQyxJQUFJdUYsR0FBdUJDLEdBQXdCQztVQUNuRCxJQUFJdEIsSUFBUW5FO1VBQ1osT0FBT2QsRUFBWWMsT0FBTSxTQUFVdUM7WUFDL0IsUUFBUUEsRUFBRzlDO2FBQ1AsS0FBSztjQUVELFFBREEsU0FBTyxHQUFHLDhCQUNILEVBQUMsR0FBRzs7YUFDZixLQUFLO2NBRUQsT0FBTyxFQUFDLElBRFI4RixJQUF3QmhELEVBQUc3QyxRQUNNZ0c7O2FBQ3JDLEtBQUs7Y0EwQkQsUUF6QkFGLElBQXlCakQsRUFBRzdDLFFBQ0w0RSxHQUFHLGdCQUFlLFNBQVVxQjtnQkFBTyxPQUFPNUgsRUFBVW9HLFFBQU8sUUFBUSxJQUFRO2tCQUM5RixJQUFJQSxJQUFRbkU7a0JBQ1osT0FBT2QsRUFBWWMsT0FBTSxTQUFVdUM7b0JBQy9CLFFBQVFBLEVBQUc5QztxQkFDUCxLQUFLO3NCQUVELE9BREF3RCxRQUFRQyxJQUFJLFNBQVMsdUJBQ2QsRUFBQyxHQUFHOztxQkFDZixLQUFLO3NCQUtELFFBSkF1QyxJQUFlbEQsRUFBRzdDLE9BQVFrRyxTQUNkQyxLQUFLRixJQUFLO3dCQUNsQnhCLEVBQU16RCxPQUFPb0YsUUFBUUMsVUFBVTtBQUNuQywyQkFDTyxFQUFDOztBQUVwQjtBQUNKO0FBQUksbUJBQ0pQLEVBQXVCbEIsR0FBRyxtQkFBa0IsU0FBVS9CO2dCQUN6Q0EsRUFBR3lELElBQVl6RCxFQUFHMEQ7Z0JBQzNCaEQsUUFBUUMsSUFBSSxlQUFlLG9CQUMzQmlCLEVBQU16RCxPQUFPd0Y7Z0JBQ2IsSUFBSUMsSUFBS2hDLEVBQU16RCxPQUFPb0Y7Z0JBQ2xCSyxLQUNBQSxFQUFHQyxTQUFTO0FBQ3BCLG1CQUNNL0MsSUFBNEIsRUFBQyxHQUFHLFlBQzVCLEdBQ0gsRUFBQyxHQUFHbUMsRUFBdUJhLFFBQVE7Z0JBQ2xDQyxZQUFZO2tCQUNSQyxRQUFRO29CQUNKQyxTQUFTLEVBQUMsdUJBQXVCLHVCQUF1QixZQUFZLGlCQUFpQjtvQkFDckZDLFFBQVFsQixFQUFzQm1CO29CQUM5QkMsUUFBUSxFQUFDLGdCQUFnQjtvQkFDekJDLFFBQVFyQixFQUFzQnNCOzs7Z0JBR3RDQyxtQkFBdUQ7OzthQUVuRSxLQUFLO2NBQ0R2RSxFQUFHN0MsUUFDSCtGLEVBQVlzQixTQUNaeEUsRUFBRzlDLFFBQVE7O2FBQ2YsS0FBSztjQUFHLE9BQU8sRUFBQyxHQUFHLElBQUlyQixTQUFRLFNBQVVDLEdBQVNDO2dCQUMxQ2tILEVBQ0tWLFNBQ0E5RixNQUFLO2tCQUNOLElBQUl3RSxJQUFXLElBQUksSUFBOEJnQyxHQUF3QjtrQkFDekVuSCxFQUFROEYsRUFBTUosaUJBQWlCUCxHQUFVO0FBQzdDLG9CQUNLNkIsT0FBTSxTQUFVMUc7a0JBQ2pCTCxFQUFPSztBQUNYO0FBQ0o7O0FBRVo7QUFDSjtBQUNKLFNBQ0E4QixFQUFtQkksVUFBVW1HLFFBQVEsU0FBVTNEO1FBQzNDLE9BQU90RixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBbUJpSCxHQUFPekQ7VUFDMUIsT0FBT3RFLEVBQVljLE9BQU0sU0FBVXVDO1lBQy9CLFFBQVFBLEVBQUc5QzthQUNQLEtBQUs7Y0FBRyxPQUFPLEVBQUMsR0FBRzs7YUFDbkIsS0FBSztjQUVELE9BQU8sRUFBQyxHQURROEMsRUFBRzdDLE9BQ013SDs7YUFDN0IsS0FBSztjQUVELE9BQU8sRUFBQyxJQURSRCxJQUFRMUUsRUFBRzdDLFFBQ015SDs7YUFDckIsS0FBSztjQUVELE9BREE1RSxFQUFHN0MsUUFDSSxFQUFDLEdBQUd1SCxFQUFNRzs7YUFDckIsS0FBSztjQUdELE9BRkE3RSxFQUFHN0MsUUFDSDhELElBQVcsSUFBSSxJQUE4QnlELEVBQU16RCxVQUFVLFFBQ3RELEVBQUMsR0FBR3hELEtBQUsrRCxpQkFBaUJQLEdBQVU7O0FBRXZEO0FBQ0o7QUFDSixTQUNBL0MsRUFBbUJJLFVBQVV3RyxVQUFVO1FBQ25DLE9BQU90SixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBSTJDLEdBQVkyRTtVQUNoQixPQUFPcEksRUFBWWMsT0FBTSxTQUFVdUM7WUFDL0IsUUFBUUEsRUFBRzlDO2FBQ1AsS0FBSztjQUVELFFBREEsU0FBTyxHQUFHLHlCQUNxQixNQUFsQm1GLE9BQU8yQyxTQUFnQyxFQUFDLEdBQUcsTUFDakQsRUFBQyxHQUFHM0MsT0FBTzJDLE9BQU9sQjs7YUFDN0IsS0FBSztjQUdELE9BRkExRCxJQUFhSixFQUFHN0MsUUFDaEI0SCxJQUFpQjNFLEVBQVc2RSxVQUFVQyxZQUMvQixFQUFDLEdBQUd6SCxLQUFLOEQseUJBQXlCd0QsR0FBZ0IsZ0JBQWdCLFdBQVcxQyxPQUFPMkMsUUFBUTs7YUFDdkcsS0FBSztjQUFHLE1BQU0sSUFBSWpFLE1BQU07O0FBRWhDO0FBQ0o7QUFDSixTQUNBN0MsRUFBbUJJLFVBQVU2RyxjQUFjO1FBQ3ZDLE9BQU8zSixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBSXdELEdBQVV4QztVQUNkLE9BQU85QixFQUFZYyxPQUFNLFNBQVV1QztZQUMvQixRQUFRQSxFQUFHOUM7YUFDUCxLQUFLO2NBRUQsUUFEQSxTQUFPLEdBQUcsd0JBQ0gsRUFBQyxHQUFHTyxLQUFLMkg7O2FBQ3BCLEtBQUs7Y0FFRCxPQUFPLEVBQUMsSUFEUm5FLElBQVdqQixFQUFHN0MsUUFDTWtJOzthQUN4QixLQUFLO2NBR0QsT0FGQTVHLElBQVV1QixFQUFHN0MsUUFDYk0sS0FBSzhELHlCQUF5QjlDLEdBQVMsR0FBRyxlQUFld0MsSUFDbEQsRUFBQyxHQUFHeEM7O0FBRXZCO0FBQ0o7QUFDSixTQUNBUCxFQUFtQkksVUFBVWdILGdCQUFnQixTQUFVQyxHQUFLQztRQUN4RCxPQUFPaEssRUFBVWlDLFdBQU0sUUFBUSxJQUFRO1VBQ25DLElBQUltRztVQUNKLE9BQU9qSCxFQUFZYyxPQUFNLFNBQVV1QztZQUMvQjtjQUNRd0YsRUFBWUMsU0FDWmhJLEtBQUs4RCx5QkFBeUJpRSxFQUFZQyxNQUFNLEdBQUcsUUFBUUYsS0FDM0QzQixJQUFLbkcsS0FBS1UsT0FBT29GLFlBRWJLLEVBQUc4QixpQkFDUGpJLEtBQUtVLE9BQU8rRDtjQUNSMEIsS0FDQUEsRUFBR0MsU0FBUztBQU14QixjQUhBLE9BQU96SDtjQUNIc0UsUUFBUWlGLE1BQU0sb0NBQW9DdkosSUFDbERxQixLQUFLVSxPQUFPb0YsUUFBUUMsVUFBVTtBQUNsQztZQUNBLE9BQU8sRUFBQztBQUNaO0FBQ0o7QUFDSixTQUNBdEYsRUFBbUJJLFVBQVVzSCxPQUFPO1FBQ2hDLE9BQU9wSyxFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBSW9JLEdBQWNDLEdBQU9DO1VBQ3pCLElBQUluRSxJQUFRbkU7VUFDWixPQUFPZCxFQUFZYyxPQUFNLFNBQVV1QztZQUMvQixRQUFRQSxFQUFHOUM7YUFDUCxLQUFLO2NBRUQsT0FEQThDLEVBQUc1QyxLQUFLYSxLQUFLLEVBQUMsR0FBRyxHQUFHLEVBQUUsTUFDZixFQUFDLEdBQUc7O2FBQ2YsS0FBSztjQUtELE9BSkE0SCxJQUFlN0YsRUFBRzdDLFNBQ2xCMkksSUFBUUQsRUFBYUcsbUJBQ2ZSLFlBQVlTLFdBQVUsU0FBVVQ7Z0JBQWUsT0FBTzVELEVBQU0wRCxjQUFjUSxHQUFPTjtBQUFjLG1CQUNyR00sRUFBTUksZ0JBQ0MsRUFBQyxHQUFHOzthQUNmLEtBQUs7Y0FHRCxPQUZBSCxJQUFNL0YsRUFBRzdDLFFBQ1R1RCxRQUFRaUYsTUFBTSxhQUFhSSxJQUNwQixFQUFDLEdBQUc7O2FBQ2YsS0FBSztjQUFHLE9BQU8sRUFBQyxHQUFHOztBQUUzQjtBQUNKO0FBQ0osU0FDQTdILEVBQW1CSSxVQUFVNkgsdUJBQXVCO1FBQ2hELFlBQW1DQyxNQUE1QjNJLEtBQUtXO0FBQ2hCLFNBQ0FGLEVBQW1CSSxVQUFVOEcseUJBQXlCO1FBQ2xELE9BQU81SixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFFbkMsT0FBT2QsRUFBWWMsT0FBTSxTQUFVdUM7WUFDL0IsUUFBUUEsRUFBRzlDO2FBQ1AsS0FBSztjQUFHLE9BQU8sRUFBQyxHQUFHOzthQUNuQixLQUFLO2NBRUQsT0FBTyxFQUFDLEdBQUcsS0FEWG1KLEdBQXVCckcsRUFBRzdDLE9BQVFrSixxQkFDQzVJLEtBQUtVLE9BQU9vRixTQUFTOUYsS0FBS1c7O0FBRXpFO0FBQ0o7QUFDSixTQUNBRixFQUFtQmUsb0JBQW9CLHlCQUNoQ2Y7QUFDWCxLQXJheUI7SUF1YXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRva2Vuc2NyaXB0L3Rva2VuLW5lZ290aWF0b3IvZGlzdC93YWxsZXQvV2ViM1dhbGxldFByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi91dGlscyc7XG52YXIgV2ViM1dhbGxldFByb3ZpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWIzV2FsbGV0UHJvdmlkZXIoY2xpZW50LCBzYWZlQ29ubmVjdE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgPSBzYWZlQ29ubmVjdE9wdGlvbnM7XG4gICAgfVxuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2F2ZUNvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2F2ZWRDb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBhZGRyZXNzIGluIHRoaXMuY29ubmVjdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBjb24gPSB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdO1xuICAgICAgICAgICAgc2F2ZWRDb25uZWN0aW9uc1thZGRyZXNzXSA9IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBjb24uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBjaGFpbklkOiBjb24uY2hhaW5JZCxcbiAgICAgICAgICAgICAgICBwcm92aWRlclR5cGU6IGNvbi5wcm92aWRlclR5cGUsXG4gICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogY29uLmJsb2NrY2hhaW4sXG4gICAgICAgICAgICAgICAgZXRoZXJzOiBldGhlcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRDb25uZWN0aW9ucykpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5lbWl0U2F2ZWRDb25uZWN0aW9uID0gZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY29ubmVjdGlvbnMpLmxlbmd0aCAmJiBhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5ldmVudFNlbmRlcignY29ubmVjdGVkLXdhbGxldCcsIHsgZGF0YTogdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG9jYWxlTG93ZXJDYXNlKCldIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvY2FsZUxvd2VyQ2FzZSgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmVtaXROZXR3b3JrQ2hhbmdlID0gZnVuY3Rpb24gKGNoYWluSWQpIHtcbiAgICAgICAgaWYgKGNoYWluSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyKCduZXR3b3JrLWNoYW5nZScsIGNoYWluSWQpO1xuICAgICAgICAgICAgcmV0dXJuIGNoYWluSWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZGVsZXRlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3dhbGxldGNvbm5lY3QnKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnQ1VSUkVOVF9VU0VSJyk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmxvYWRDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEsIHN0YXRlLCBfYSwgX2IsIF9jLCBfaSwgYWRkcmVzcywgY29ubmVjdGlvbiwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfYyBpbiBfYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5wdXNoKF9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2kgPCBfYi5sZW5ndGgpKSByZXR1cm4gWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSBfYltfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfYyBpbiBfYSkpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gc3RhdGVbYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnRyeXMucHVzaChbMiwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuY29ubmVjdFdpdGgoY29ubmVjdGlvbi5wcm92aWRlclR5cGUsIHRydWUpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYWxsZXQgY291bGRuJ3QgY29ubmVjdDogXCIgKyBlXzEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGVbYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmNvbm5lY3RXaXRoID0gZnVuY3Rpb24gKHdhbGxldFR5cGUsIGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgaWYgKGNoZWNrQ29ubmVjdGlvbk9ubHkgPT09IHZvaWQgMCkgeyBjaGVja0Nvbm5lY3Rpb25Pbmx5ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhbGxldFR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIFdhbGxldCB0eXBlIHRvIGNvbm5lY3Qgd2l0aC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1t3YWxsZXRUeXBlXSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpc1t3YWxsZXRUeXBlXShjaGVja0Nvbm5lY3Rpb25Pbmx5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2FkZHJlc3MnLCBhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcignV2FsbGV0IHR5cGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zaWduTWVzc2FnZSA9IGZ1bmN0aW9uIChhZGRyZXNzLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlciwgc2lnbmVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSB0aGlzLmdldFdhbGxldFByb3ZpZGVyKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBzaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldFdhbGxldFByb3ZpZGVyID0gZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoISgoX2EgPSB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvdmlkZXIpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXYWxsZXQgcHJvdmlkZXIgbm90IGZvdW5kIGZvciBhZGRyZXNzJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdLnByb3ZpZGVyO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb25uZWN0ZWRXYWxsZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmNvbm5lY3Rpb25zKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzID0gZnVuY3Rpb24gKGFkZHJlc3MsIGNoYWluSWQsIHByb3ZpZGVyVHlwZSwgcHJvdmlkZXIsIGJsb2NrY2hhaW4pIHtcbiAgICAgICAgaWYgKGJsb2NrY2hhaW4gPT09IHZvaWQgMCkgeyBibG9ja2NoYWluID0gJ2V2bSc7IH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG93ZXJDYXNlKCldID0geyBhZGRyZXNzOiBhZGRyZXNzLCBjaGFpbklkOiBjaGFpbklkLCBwcm92aWRlclR5cGU6IHByb3ZpZGVyVHlwZSwgcHJvdmlkZXI6IHByb3ZpZGVyLCBibG9ja2NoYWluOiBibG9ja2NoYWluLCBldGhlcnM6IGV0aGVycyB9O1xuICAgICAgICByZXR1cm4gYWRkcmVzcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlciwgcHJvdmlkZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY2NvdW50cywgY2hhaW5JZCwgY3VyQWNjb3VudDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgcHJvdmlkZXIubGlzdEFjY291bnRzKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcHJvdmlkZXIuZGV0ZWN0TmV0d29yaygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZCA9IChfYS5zZW50KCkpLmNoYWluSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhY2NvdW50cyBmb3VuZCB2aWEgd2FsbGV0LWNvbm5lY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJBY2NvdW50LCBjaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBmdW5jdGlvbiAoYWNjb3VudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQWNjb3VudCA9PT0gYWNjb3VudHNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuY29ubmVjdGlvbnNbY3VyQWNjb3VudC50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oY3VyQWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmdldFRva2VuU3RvcmUoKS5jbGVhckNhY2hlZFRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5lbnJpY2hUb2tlbkxvb2t1cERhdGFPbkNoYWluVG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLm9uKCdjaGFpbkNoYW5nZWQnLCBmdW5jdGlvbiAoX2NoYWluSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0sIF9jaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0TmV0d29ya0NoYW5nZShfY2hhaW5JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWNjb3VudHNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuTWV0YU1hc2sgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgTWV0YU1hc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtLCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ01ldGFNYXNrJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcignTWV0YU1hc2sgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHRoZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGFuZCBhY3RpdmUuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5XYWxsZXRDb25uZWN0ID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdhbGxldENvbm5lY3RQcm92aWRlciwgd2FsbGV0Q29ubmVjdDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgV2FsbGV0IENvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KCcuL1dhbGxldENvbm5lY3RQcm92aWRlcicpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdFByb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3YWxsZXRDb25uZWN0UHJvdmlkZXIuZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UoY2hlY2tDb25uZWN0aW9uT25seSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0LmNvbm5lY3Rvci5vbignZGlzcGxheV91cmknLCBmdW5jdGlvbiAoZXJyLCBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ29ubmVjdGlvbiBleHBpcmVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2FsbGV0Q29ubmVjdCwgJ2FueScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnV2FsbGV0Q29ubmVjdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gcmVqZWN0KGUpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5XYWxsZXRDb25uZWN0VjIgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLCB1bml2ZXJzYWxXYWxsZXRDb25uZWN0LCBRUkNvZGVNb2RhbCwgcGFpcmluZztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgV2FsbGV0IENvbm5lY3QgVjInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KCcuL1dhbGxldENvbm5lY3RWMlByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5vbignZGlzcGxheV91cmknLCBmdW5jdGlvbiAodXJpKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVZFTlQnLCAnUVIgQ29kZSBNb2RhbCBvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoJ0B3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbCcpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbCA9IChfYS5zZW50KCkpLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwub3Blbih1cmksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmdldFVpKCkuc2hvd0Vycm9yKCdVc2VyIGNsb3NlZCBtb2RhbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3Qub24oJ3Nlc3Npb25fZGVsZXRlJywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gX2EuaWQsIHRvcGljID0gX2EudG9waWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dDIFYyIEVWRU5UJywgJ3Nlc3Npb25fZGVsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5kaXNjb25uZWN0V2FsbGV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVpID0gX3RoaXMuY2xpZW50LmdldFVpKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS51cGRhdGVVSSgnd2FsbGV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWNoZWNrQ29ubmVjdGlvbk9ubHkpIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlyaW5nID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB1bml2ZXJzYWxXYWxsZXRDb25uZWN0LmNvbm5lY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlaXAxNTU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiBbJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLCAnZXRoX3NpZ25UcmFuc2FjdGlvbicsICdldGhfc2lnbicsICdwZXJzb25hbF9zaWduJywgJ2V0aF9zaWduVHlwZWREYXRhJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5zOiB3YWxsZXRDb25uZWN0UHJvdmlkZXIuV0NfVjJfQ0hBSU5TLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogWydjaGFpbkNoYW5nZWQnLCAnYWNjb3VudHNDaGFuZ2VkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjTWFwOiB3YWxsZXRDb25uZWN0UHJvdmlkZXIuQ1VTVE9NX1JQQ1NfRk9SX1dDX1YyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpcmluZ1RvcGljOiBwYWlyaW5nID09PSBudWxsIHx8IHBhaXJpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaXJpbmcudG9waWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHVuaXZlcnNhbFdhbGxldENvbm5lY3QsICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnV2FsbGV0Q29ubmVjdFYyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5Ub3J1cyA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBUb3J1c1Byb3ZpZGVyLCB0b3J1cywgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KCcuL1RvcnVzUHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvcnVzUHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFRvcnVzUHJvdmlkZXIuZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3J1cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5sb2dpbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodG9ydXMucHJvdmlkZXIsICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnVG9ydXMnKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5QaGFudG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiwgYWNjb3VudEFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgUGhhbnRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5zb2xhbmEgIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LnNvbGFuYS5jb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEFkZHJlc3MgPSBjb25uZWN0aW9uLnB1YmxpY0tleS50b0Jhc2U1OCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50QWRkcmVzcywgJ21haW5uZXQtYmV0YScsICdwaGFudG9tJywgd2luZG93LnNvbGFuYSwgJ3NvbGFuYScpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoJ01ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuU2FmZUNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlciwgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBTYWZlQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmdldFNhZmVDb25uZWN0UHJvdmlkZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5pbml0U2FmZUNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhZGRyZXNzLCAxLCAnU2FmZUNvbm5lY3QnLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZmxvd1N1YnNjcmliZSA9IGZ1bmN0aW9uIChmY2wsIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1aTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFVzZXIuYWRkcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VycmVudFVzZXIuYWRkciwgMSwgJ2Zsb3cnLCBmY2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdWkgPSB0aGlzLmNsaWVudC5nZXRVaSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpLmRpc21pc3NMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LmVucmljaFRva2VuTG9va3VwRGF0YU9uQ2hhaW5Ub2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1aSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS51cGRhdGVVSSgnbWFpbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Zsb3cgd2FsbGV0IGNvbm5lY3Rpb24gZXJyb3IgPT0+JywgZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LmdldFVpKCkuc2hvd0Vycm9yKCdGbG93IHdhbGxldCBjb25uZWN0aW9uIGVycm9yLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5GbG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmxvd1Byb3ZpZGVyLCBmY2xfMSwgZV8yO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGltcG9ydCgnLi9GbG93UHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb3dQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZjbF8xID0gZmxvd1Byb3ZpZGVyLmdldEZsb3dQcm92aWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmNsXzEuY3VycmVudFVzZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChjdXJyZW50VXNlcikgeyByZXR1cm4gX3RoaXMuZmxvd1N1YnNjcmliZShmY2xfMSwgY3VycmVudFVzZXIpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZjbF8xLmF1dGhlbnRpY2F0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgPT0+JywgZV8yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyLCAnJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYWZlQ29ubmVjdEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldFNhZmVDb25uZWN0UHJvdmlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBTYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydCgnLi9TYWZlQ29ubmVjdFByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWZlQ29ubmVjdFByb3ZpZGVyID0gKF9hLnNlbnQoKSkuU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFNhZmVDb25uZWN0UHJvdmlkZXIodGhpcy5jbGllbnQuZ2V0VWkoKSwgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkgPSAndG4td2FsbGV0LWNvbm5lY3Rpb25zJztcbiAgICByZXR1cm4gV2ViM1dhbGxldFByb3ZpZGVyO1xufSgpKTtcbmV4cG9ydCB7IFdlYjNXYWxsZXRQcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgV2ViM1dhbGxldFByb3ZpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViM1dhbGxldFByb3ZpZGVyLmpzLm1hcCJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwiYWRvcHQiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJmIiwieSIsInQiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ0aGlzIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiV2ViM1dhbGxldFByb3ZpZGVyIiwiY2xpZW50Iiwic2FmZUNvbm5lY3RPcHRpb25zIiwiY29ubmVjdGlvbnMiLCJwcm90b3R5cGUiLCJzYXZlQ29ubmVjdGlvbnMiLCJzYXZlZENvbm5lY3Rpb25zIiwiYWRkcmVzcyIsImNvbiIsImNoYWluSWQiLCJwcm92aWRlclR5cGUiLCJibG9ja2NoYWluIiwiZXRoZXJzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwiSlNPTiIsInN0cmluZ2lmeSIsImVtaXRTYXZlZENvbm5lY3Rpb24iLCJPYmplY3QiLCJrZXlzIiwiZXZlbnRTZW5kZXIiLCJkYXRhIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlbWl0TmV0d29ya0NoYW5nZSIsImRlbGV0ZUNvbm5lY3Rpb25zIiwicmVtb3ZlSXRlbSIsInNlc3Npb25TdG9yYWdlIiwibG9hZENvbm5lY3Rpb25zIiwic3RhdGUiLCJfYSIsIl9iIiwiX2MiLCJfaSIsImNvbm5lY3Rpb24iLCJlXzEiLCJfZCIsImdldEl0ZW0iLCJwYXJzZSIsImNvbm5lY3RXaXRoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ3YWxsZXRUeXBlIiwiY2hlY2tDb25uZWN0aW9uT25seSIsIkVycm9yIiwic2lnbk1lc3NhZ2UiLCJwcm92aWRlciIsImdldFdhbGxldFByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwidG9Mb3dlckNhc2UiLCJnZXRDb25uZWN0ZWRXYWxsZXREYXRhIiwidmFsdWVzIiwicmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzIiwicmVnaXN0ZXJQcm92aWRlciIsInByb3ZpZGVyTmFtZSIsImFjY291bnRzIiwiY3VyQWNjb3VudCIsIl90aGlzIiwibGlzdEFjY291bnRzIiwiZGV0ZWN0TmV0d29yayIsIm9uIiwiZ2V0VG9rZW5TdG9yZSIsImNsZWFyQ2FjaGVkVG9rZW5zIiwiZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucyIsIl9jaGFpbklkIiwiTWV0YU1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRDb25uZWN0IiwiZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UiLCJjb25uZWN0b3IiLCJlcnIiLCJwYXlsb2FkIiwiY2F0Y2giLCJXYWxsZXRDb25uZWN0VjIiLCJ3YWxsZXRDb25uZWN0UHJvdmlkZXIiLCJ1bml2ZXJzYWxXYWxsZXRDb25uZWN0IiwiUVJDb2RlTW9kYWwiLCJnZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlIiwidXJpIiwiZGVmYXVsdCIsIm9wZW4iLCJnZXRVaSIsInNob3dFcnJvciIsImlkIiwidG9waWMiLCJkaXNjb25uZWN0V2FsbGV0IiwidWkiLCJ1cGRhdGVVSSIsImNvbm5lY3QiLCJuYW1lc3BhY2VzIiwiZWlwMTU1IiwibWV0aG9kcyIsImNoYWlucyIsIldDX1YyX0NIQUlOUyIsImV2ZW50cyIsInJwY01hcCIsIkNVU1RPTV9SUENTX0ZPUl9XQ19WMiIsInBhaXJpbmdUb3BpYyIsImNsb3NlIiwiVG9ydXMiLCJ0b3J1cyIsImdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSIsImluaXQiLCJsb2dpbiIsIlBoYW50b20iLCJhY2NvdW50QWRkcmVzcyIsInNvbGFuYSIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiU2FmZUNvbm5lY3QiLCJnZXRTYWZlQ29ubmVjdFByb3ZpZGVyIiwiaW5pdFNhZmVDb25uZWN0IiwiZmxvd1N1YnNjcmliZSIsImZjbCIsImN1cnJlbnRVc2VyIiwiYWRkciIsImRpc21pc3NMb2FkZXIiLCJlcnJvciIsIkZsb3ciLCJmbG93UHJvdmlkZXIiLCJmY2xfMSIsImVfMiIsImdldEZsb3dQcm92aWRlciIsInN1YnNjcmliZSIsImF1dGhlbnRpY2F0ZSIsInNhZmVDb25uZWN0QXZhaWxhYmxlIiwidW5kZWZpbmVkIiwiU2FmZUNvbm5lY3RQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=