"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  8403: (e, n, t) => {
    t.r(n), t.d(n, {
      Web3WalletProvider: () => a,
      default: () => l
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
      function e(e, n, t) {
        this.client = e, this.walletOptions = n, this.safeConnectOptions = t, this.connections = {};
      }
      return e.prototype.saveConnections = function() {
        var n = {};
        for (var t in this.connections) {
          var o = this.connections[t];
          n[t] = {
            address: o.address,
            chainId: o.chainId,
            providerType: o.providerType,
            blockchain: o.blockchain
          };
        }
        localStorage.setItem(e.LOCAL_STORAGE_KEY, JSON.stringify(n));
      }, e.prototype.emitSavedConnection = function(e) {
        return Object.keys(this.connections).length && e ? (this.client.eventSender('connected-wallet', this.connections[e.toLocaleLowerCase()]), 
        this.connections[e.toLocaleLowerCase()]) : null;
      }, e.prototype.emitNetworkChange = function(e) {
        if (e) return this.client.eventSender('network-change', e), e;
      }, e.prototype.deleteConnections = function() {
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY), localStorage.removeItem('walletconnect'), sessionStorage.removeItem('CURRENT_USER');
      }, e.prototype.loadConnections = function() {
        return s(this, void 0, void 0, (function() {
          var n, t, o, r, i, s, a, l, u;
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
              l = t[a = i], c.label = 2;

             case 2:
              return c.trys.push([ 2, 4, , 5 ]), [ 4, this.connectWith(l.providerType, !0) ];

             case 3:
              return c.sent(), [ 3, 5 ];

             case 4:
              return u = c.sent(), console.log("Wallet couldn't connect: " + u.message), delete t[a], this.saveConnections(), this.emitSavedConnection(a), 
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
                t && 0 !== t.length ? r !== t[0] && (delete i.connections[r.toLowerCase()], r = t[0], i.registerNewWalletAddress(r, o, n, e), 
                i.saveConnections(), i.emitSavedConnection(r), i.client.getTokenStore().clearCachedTokens(), i.client.enrichTokenLookupDataOnChainTokens()) : i.client.disconnectWallet();
              })), e.provider.on('chainChanged', (function(o) {
                i.registerNewWalletAddress(t[0], o, n, e), i.saveConnections(), i.emitNetworkChange(o);
              })), e.provider.on('disconnect', (function(e) {
                (null == e ? void 0 : e.message) && e.message.indexOf('MetaMask: Disconnected from chain') > -1 || i.client.disconnectWallet();
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
              return (0, i.kg)(2, 'connect Wallet Connect'), [ 4, Promise.all([ t.e(387), t.e(444) ]).then(t.bind(t, 5444)) ];

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
        var n, o, a, l, u, d;
        return s(this, void 0, void 0, (function() {
          var h, v, f;
          var p = this;
          return c(this, (function(w) {
            switch (w.label) {
             case 0:
              return (0, i.kg)(2, 'connect Wallet Connect V2'), [ 4, t.e(387).then(t.bind(t, 9387)) ];

             case 1:
              return [ 4, (h = w.sent()).getWalletConnectV2ProviderInstance() ];

             case 2:
              return (v = w.sent()).on('display_uri', (function(e) {
                return s(p, void 0, void 0, (function() {
                  var n = this;
                  return c(this, (function(o) {
                    switch (o.label) {
                     case 0:
                      return console.log('EVENT', 'QR Code Modal open'), [ 4, t.e(337).then(t.t.bind(t, 4337, 23)) ];

                     case 1:
                      return (f = o.sent().default).open(e, (function() {
                        n.client.getUi().showError('User closed modal');
                      })), [ 2 ];
                    }
                  }));
                }));
              })), v.on('session_delete', (function(e) {
                e.id, e.topic;
                console.log('WC V2 EVENT', 'session_deleted'), p.client.disconnectWallet();
              })), e ? [ 3, 4 ] : (void 0, [ 4, v.connect({
                namespaces: {
                  eip155: {
                    methods: [ 'eth_sendTransaction', 'eth_signTransaction', 'eth_sign', 'personal_sign', 'eth_signTypedData' ],
                    chains: null !== (a = null === (o = null === (n = this.walletOptions) || void 0 === n ? void 0 : n.walletConnectV2) || void 0 === o ? void 0 : o.chains) && void 0 !== a ? a : h.WC_V2_DEFAULT_CHAINS,
                    events: [ 'chainChanged', 'accountsChanged' ],
                    rpcMap: null !== (d = null === (u = null === (l = this.walletOptions) || void 0 === l ? void 0 : l.walletConnectV2) || void 0 === u ? void 0 : u.rpcMap) && void 0 !== d ? d : h.WC_DEFAULT_RPC_MAP
                  }
                },
                pairingTopic: void 0
              }) ]);

             case 3:
              w.sent(), f.close(), w.label = 4;

             case 4:
              return [ 2, new Promise((function(e, n) {
                v.enable().then((function() {
                  var n = new r.Q(v, 'any');
                  e(p.registerProvider(n, 'WalletConnectV2'));
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
      }, e.prototype.Phantom = function(e) {
        return s(this, void 0, void 0, (function() {
          var e, n;
          return c(this, (function(t) {
            switch (t.label) {
             case 0:
              return (0, i.kg)(2, 'connect Phantom'), void 0 === window.solana ? [ 3, 2 ] : [ 4, window.solana.connect() ];

             case 1:
              return e = t.sent(), n = e.publicKey.toBase58(), [ 2, this.registerNewWalletAddress(n, 'mainnet-beta', 'phantom', window.solana, 'solana') ];

             case 2:
              throw new Error('Phantom is not available. Please check the extension is supported and active.');
            }
          }));
        }));
      }, e.prototype.SafeConnect = function(e) {
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
      }, e.prototype.Flow = function(e) {
        return s(this, void 0, void 0, (function() {
          var e, n, o;
          return c(this, (function(r) {
            switch (r.label) {
             case 0:
              return [ 4, t.e(623).then(t.bind(t, 9623)) ];

             case 1:
              return e = r.sent(), [ 4, (n = e.getFlowProvider()).currentUser.authenticate() ];

             case 2:
              return r.sent(), [ 4, n.currentUser.snapshot() ];

             case 3:
              if (!(o = r.sent()).addr) throw new Error('Failed to connect Flow wallet');
              return this.registerNewWalletAddress(o.addr, 1, 'flow', n), [ 2, o.addr ];
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
    const l = a;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBVTdFO1FBQzFDLE9BQU90RixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBSW1JLEdBQWNDLEdBQUtDO1VBQ3ZCLE9BQU9uSixFQUFZYyxPQUFNLFNBQVV1QztZQUMvQixRQUFRQSxFQUFHOUM7YUFDUCxLQUFLO2NBQUcsT0FBTyxFQUFDLEdBQUc7O2FBQ25CLEtBQUs7Y0FHRCxPQUZBMEksSUFBZTVGLEVBQUc3QyxRQUVYLEVBQUMsSUFEUjBJLElBQU1ELEVBQWFHLG1CQUNKRCxZQUFZRTs7YUFDL0IsS0FBSztjQUVELE9BREFoRyxFQUFHN0MsUUFDSSxFQUFDLEdBQUcwSSxFQUFJQyxZQUFZRzs7YUFDL0IsS0FBSztjQUVELE1BREFILElBQWM5RixFQUFHN0MsUUFDQStJLE1BQ2IsTUFBTSxJQUFJbkYsTUFBTTtjQUVwQixPQURBdEQsS0FBSzhELHlCQUF5QnVFLEVBQVlJLE1BQU0sR0FBRyxRQUFRTCxJQUNwRCxFQUFDLEdBQUdDLEVBQVlJOztBQUVuQztBQUNKO0FBQ0osU0FDQWhJLEVBQW1CSyxVQUFVNEgsdUJBQXVCO1FBQ2hELFlBQW1DQyxNQUE1QjNJLEtBQUtZO0FBQ2hCLFNBQ0FILEVBQW1CSyxVQUFVa0gseUJBQXlCO1FBQ2xELE9BQU9qSyxFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFFbkMsT0FBT2QsRUFBWWMsT0FBTSxTQUFVdUM7WUFDL0IsUUFBUUEsRUFBRzlDO2FBQ1AsS0FBSztjQUFHLE9BQU8sRUFBQyxHQUFHOzthQUNuQixLQUFLO2NBRUQsT0FBTyxFQUFDLEdBQUcsS0FEWG1KLEdBQXVCckcsRUFBRzdDLE9BQVFrSixxQkFDQzVJLEtBQUtVLE9BQU8yRixTQUFTckcsS0FBS1k7O0FBRXpFO0FBQ0o7QUFDSixTQUNBSCxFQUFtQmUsb0JBQW9CLHlCQUNoQ2Y7QUFDWCxLQXBaeUI7SUFzWnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRva2Vuc2NyaXB0L3Rva2VuLW5lZ290aWF0b3IvZGlzdC93YWxsZXQvV2ViM1dhbGxldFByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi91dGlscyc7XG52YXIgV2ViM1dhbGxldFByb3ZpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWIzV2FsbGV0UHJvdmlkZXIoY2xpZW50LCB3YWxsZXRPcHRpb25zLCBzYWZlQ29ubmVjdE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMud2FsbGV0T3B0aW9ucyA9IHdhbGxldE9wdGlvbnM7XG4gICAgICAgIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zID0gc2FmZUNvbm5lY3RPcHRpb25zO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgfVxuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2F2ZUNvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2F2ZWRDb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBhZGRyZXNzIGluIHRoaXMuY29ubmVjdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBjb24gPSB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdO1xuICAgICAgICAgICAgc2F2ZWRDb25uZWN0aW9uc1thZGRyZXNzXSA9IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBjb24uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBjaGFpbklkOiBjb24uY2hhaW5JZCxcbiAgICAgICAgICAgICAgICBwcm92aWRlclR5cGU6IGNvbi5wcm92aWRlclR5cGUsXG4gICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogY29uLmJsb2NrY2hhaW4sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRDb25uZWN0aW9ucykpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5lbWl0U2F2ZWRDb25uZWN0aW9uID0gZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY29ubmVjdGlvbnMpLmxlbmd0aCAmJiBhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5ldmVudFNlbmRlcignY29ubmVjdGVkLXdhbGxldCcsIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvY2FsZUxvd2VyQ2FzZSgpXSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG9jYWxlTG93ZXJDYXNlKCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZW1pdE5ldHdvcmtDaGFuZ2UgPSBmdW5jdGlvbiAoY2hhaW5JZCkge1xuICAgICAgICBpZiAoY2hhaW5JZCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQuZXZlbnRTZW5kZXIoJ25ldHdvcmstY2hhbmdlJywgY2hhaW5JZCk7XG4gICAgICAgICAgICByZXR1cm4gY2hhaW5JZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5kZWxldGVDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnd2FsbGV0Y29ubmVjdCcpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdDVVJSRU5UX1VTRVInKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUubG9hZENvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSwgc3RhdGUsIF9hLCBfYiwgX2MsIF9pLCBhZGRyZXNzLCBjb25uZWN0aW9uLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9jIGluIF9hKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnB1c2goX2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IF9iLmxlbmd0aCkpIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IF9iW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9jIGluIF9hKSkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2QudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5jb25uZWN0V2l0aChjb25uZWN0aW9uLnByb3ZpZGVyVHlwZSwgdHJ1ZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhbGxldCBjb3VsZG4ndCBjb25uZWN0OiBcIiArIGVfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuY29ubmVjdFdpdGggPSBmdW5jdGlvbiAod2FsbGV0VHlwZSwgY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICBpZiAoY2hlY2tDb25uZWN0aW9uT25seSA9PT0gdm9pZCAwKSB7IGNoZWNrQ29ubmVjdGlvbk9ubHkgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FsbGV0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgV2FsbGV0IHR5cGUgdG8gY29ubmVjdCB3aXRoLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW3dhbGxldFR5cGVdKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzW3dhbGxldFR5cGVdKGNoZWNrQ29ubmVjdGlvbk9ubHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnYWRkcmVzcycsIGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdXYWxsZXQgdHlwZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNpZ25NZXNzYWdlID0gZnVuY3Rpb24gKGFkZHJlc3MsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBzaWduZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IHRoaXMuZ2V0V2FsbGV0UHJvdmlkZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0V2FsbGV0UHJvdmlkZXIgPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghKChfYSA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm92aWRlcikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCBwcm92aWRlciBub3QgZm91bmQgZm9yIGFkZHJlc3MnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10ucHJvdmlkZXI7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldENvbm5lY3RlZFdhbGxldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY29ubmVjdGlvbnMpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MgPSBmdW5jdGlvbiAoYWRkcmVzcywgY2hhaW5JZCwgcHJvdmlkZXJUeXBlLCBwcm92aWRlciwgYmxvY2tjaGFpbikge1xuICAgICAgICBpZiAoYmxvY2tjaGFpbiA9PT0gdm9pZCAwKSB7IGJsb2NrY2hhaW4gPSAnZXZtJzsgfVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb3dlckNhc2UoKV0gPSB7IGFkZHJlc3M6IGFkZHJlc3MsIGNoYWluSWQ6IGNoYWluSWQsIHByb3ZpZGVyVHlwZTogcHJvdmlkZXJUeXBlLCBwcm92aWRlcjogcHJvdmlkZXIsIGJsb2NrY2hhaW46IGJsb2NrY2hhaW4sIGV0aGVyczogZXRoZXJzIH07XG4gICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3RlclByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyLCBwcm92aWRlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjY291bnRzLCBjaGFpbklkLCBjdXJBY2NvdW50O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBwcm92aWRlci5saXN0QWNjb3VudHMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5kZXRlY3ROZXR3b3JrKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkID0gKF9hLnNlbnQoKSkuY2hhaW5JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZ1bmN0aW9uIChhY2NvdW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudHMgfHwgYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5kaXNjb25uZWN0V2FsbGV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckFjY291bnQgPT09IGFjY291bnRzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLmNvbm5lY3Rpb25zW2N1ckFjY291bnQudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJBY2NvdW50LCBjaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGN1ckFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5nZXRUb2tlblN0b3JlKCkuY2xlYXJDYWNoZWRUb2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignY2hhaW5DaGFuZ2VkJywgZnVuY3Rpb24gKF9jaGFpbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdLCBfY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdE5ldHdvcmtDaGFuZ2UoX2NoYWluSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlYXNvbiA9PT0gbnVsbCB8fCByZWFzb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlYXNvbi5tZXNzYWdlKSAmJiByZWFzb24ubWVzc2FnZS5pbmRleE9mKCdNZXRhTWFzazogRGlzY29ubmVjdGVkIGZyb20gY2hhaW4nKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmRpc2Nvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhY2NvdW50c1swXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5NZXRhTWFzayA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBNZXRhTWFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0sICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnTWV0YU1hc2snKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdNZXRhTWFzayBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3QgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLCB3YWxsZXRDb25uZWN0O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoJy4vV2FsbGV0Q29ubmVjdFByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZShjaGVja0Nvbm5lY3Rpb25Pbmx5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QuY29ubmVjdG9yLm9uKCdkaXNwbGF5X3VyaScsIGZ1bmN0aW9uIChlcnIsIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDb25uZWN0aW9uIGV4cGlyZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5hYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3YWxsZXRDb25uZWN0LCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsICdXYWxsZXRDb25uZWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiByZWplY3QoZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3RWMiA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLCB1bml2ZXJzYWxXYWxsZXRDb25uZWN0LCBRUkNvZGVNb2RhbCwgcGFpcmluZztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9nKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgV2FsbGV0IENvbm5lY3QgVjInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KCcuL1dhbGxldENvbm5lY3RWMlByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfZy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0ID0gX2cuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5vbignZGlzcGxheV91cmknLCBmdW5jdGlvbiAodXJpKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVZFTlQnLCAnUVIgQ29kZSBNb2RhbCBvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoJ0B3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbCcpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbCA9IChfYS5zZW50KCkpLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwub3Blbih1cmksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmdldFVpKCkuc2hvd0Vycm9yKCdVc2VyIGNsb3NlZCBtb2RhbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3Qub24oJ3Nlc3Npb25fZGVsZXRlJywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gX2EuaWQsIHRvcGljID0gX2EudG9waWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dDIFYyIEVWRU5UJywgJ3Nlc3Npb25fZGVsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5kaXNjb25uZWN0V2FsbGV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWNoZWNrQ29ubmVjdGlvbk9ubHkpIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlyaW5nID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB1bml2ZXJzYWxXYWxsZXRDb25uZWN0LmNvbm5lY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlaXAxNTU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiBbJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLCAnZXRoX3NpZ25UcmFuc2FjdGlvbicsICdldGhfc2lnbicsICdwZXJzb25hbF9zaWduJywgJ2V0aF9zaWduVHlwZWREYXRhJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5zOiAoX2MgPSAoX2IgPSAoX2EgPSB0aGlzLndhbGxldE9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS53YWxsZXRDb25uZWN0VjIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jaGFpbnMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IHdhbGxldENvbm5lY3RQcm92aWRlci5XQ19WMl9ERUZBVUxUX0NIQUlOUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IFsnY2hhaW5DaGFuZ2VkJywgJ2FjY291bnRzQ2hhbmdlZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY01hcDogKF9mID0gKF9lID0gKF9kID0gdGhpcy53YWxsZXRPcHRpb25zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Qud2FsbGV0Q29ubmVjdFYyKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UucnBjTWFwKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiB3YWxsZXRDb25uZWN0UHJvdmlkZXIuV0NfREVGQVVMVF9SUENfTUFQLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpcmluZ1RvcGljOiBwYWlyaW5nID09PSBudWxsIHx8IHBhaXJpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaXJpbmcudG9waWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHVuaXZlcnNhbFdhbGxldENvbm5lY3QsICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnV2FsbGV0Q29ubmVjdFYyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5Ub3J1cyA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBUb3J1c1Byb3ZpZGVyLCB0b3J1cywgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KCcuL1RvcnVzUHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvcnVzUHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFRvcnVzUHJvdmlkZXIuZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3J1cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5sb2dpbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodG9ydXMucHJvdmlkZXIsICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnVG9ydXMnKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5QaGFudG9tID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24sIGFjY291bnRBZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFBoYW50b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuc29sYW5hICE9PSAndW5kZWZpbmVkJykpIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdpbmRvdy5zb2xhbmEuY29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRBZGRyZXNzID0gY29ubmVjdGlvbi5wdWJsaWNLZXkudG9CYXNlNTgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudEFkZHJlc3MsICdtYWlubmV0LWJldGEnLCAncGhhbnRvbScsIHdpbmRvdy5zb2xhbmEsICdzb2xhbmEnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdQaGFudG9tIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuU2FmZUNvbm5lY3QgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIGFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgU2FmZUNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5nZXRTYWZlQ29ubmVjdFByb3ZpZGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcHJvdmlkZXIuaW5pdFNhZmVDb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWRkcmVzcywgMSwgJ1NhZmVDb25uZWN0JywgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhZGRyZXNzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLkZsb3cgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmxvd1Byb3ZpZGVyLCBmY2wsIGN1cnJlbnRVc2VyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydCgnLi9GbG93UHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb3dQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZjbCA9IGZsb3dQcm92aWRlci5nZXRGbG93UHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZmNsLmN1cnJlbnRVc2VyLmF1dGhlbnRpY2F0ZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBmY2wuY3VycmVudFVzZXIuc25hcHNob3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50VXNlci5hZGRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNvbm5lY3QgRmxvdyB3YWxsZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1cnJlbnRVc2VyLmFkZHIsIDEsICdmbG93JywgZmNsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgY3VycmVudFVzZXIuYWRkcl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYWZlQ29ubmVjdEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldFNhZmVDb25uZWN0UHJvdmlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBTYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydCgnLi9TYWZlQ29ubmVjdFByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWZlQ29ubmVjdFByb3ZpZGVyID0gKF9hLnNlbnQoKSkuU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFNhZmVDb25uZWN0UHJvdmlkZXIodGhpcy5jbGllbnQuZ2V0VWkoKSwgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkgPSAndG4td2FsbGV0LWNvbm5lY3Rpb25zJztcbiAgICByZXR1cm4gV2ViM1dhbGxldFByb3ZpZGVyO1xufSgpKTtcbmV4cG9ydCB7IFdlYjNXYWxsZXRQcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgV2ViM1dhbGxldFByb3ZpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViM1dhbGxldFByb3ZpZGVyLmpzLm1hcCJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwiYWRvcHQiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJmIiwieSIsInQiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ0aGlzIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiV2ViM1dhbGxldFByb3ZpZGVyIiwiY2xpZW50Iiwid2FsbGV0T3B0aW9ucyIsInNhZmVDb25uZWN0T3B0aW9ucyIsImNvbm5lY3Rpb25zIiwicHJvdG90eXBlIiwic2F2ZUNvbm5lY3Rpb25zIiwic2F2ZWRDb25uZWN0aW9ucyIsImFkZHJlc3MiLCJjb24iLCJjaGFpbklkIiwicHJvdmlkZXJUeXBlIiwiYmxvY2tjaGFpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJMT0NBTF9TVE9SQUdFX0tFWSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWl0U2F2ZWRDb25uZWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImV2ZW50U2VuZGVyIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlbWl0TmV0d29ya0NoYW5nZSIsImRlbGV0ZUNvbm5lY3Rpb25zIiwicmVtb3ZlSXRlbSIsInNlc3Npb25TdG9yYWdlIiwibG9hZENvbm5lY3Rpb25zIiwiZGF0YSIsInN0YXRlIiwiX2EiLCJfYiIsIl9jIiwiX2kiLCJjb25uZWN0aW9uIiwiZV8xIiwiX2QiLCJnZXRJdGVtIiwicGFyc2UiLCJjb25uZWN0V2l0aCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwid2FsbGV0VHlwZSIsImNoZWNrQ29ubmVjdGlvbk9ubHkiLCJFcnJvciIsInNpZ25NZXNzYWdlIiwicHJvdmlkZXIiLCJnZXRXYWxsZXRQcm92aWRlciIsImdldFNpZ25lciIsInRvTG93ZXJDYXNlIiwiZ2V0Q29ubmVjdGVkV2FsbGV0RGF0YSIsInZhbHVlcyIsInJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyIsImV0aGVycyIsInJlZ2lzdGVyUHJvdmlkZXIiLCJwcm92aWRlck5hbWUiLCJhY2NvdW50cyIsImN1ckFjY291bnQiLCJfdGhpcyIsImxpc3RBY2NvdW50cyIsImRldGVjdE5ldHdvcmsiLCJvbiIsImdldFRva2VuU3RvcmUiLCJjbGVhckNhY2hlZFRva2VucyIsImVucmljaFRva2VuTG9va3VwRGF0YU9uQ2hhaW5Ub2tlbnMiLCJkaXNjb25uZWN0V2FsbGV0IiwiX2NoYWluSWQiLCJyZWFzb24iLCJpbmRleE9mIiwiTWV0YU1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRDb25uZWN0IiwiZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UiLCJjb25uZWN0b3IiLCJlcnIiLCJwYXlsb2FkIiwiY2F0Y2giLCJXYWxsZXRDb25uZWN0VjIiLCJfZSIsIl9mIiwid2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwidW5pdmVyc2FsV2FsbGV0Q29ubmVjdCIsIlFSQ29kZU1vZGFsIiwiX2ciLCJnZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlIiwidXJpIiwiZGVmYXVsdCIsIm9wZW4iLCJnZXRVaSIsInNob3dFcnJvciIsImlkIiwidG9waWMiLCJjb25uZWN0IiwibmFtZXNwYWNlcyIsImVpcDE1NSIsIm1ldGhvZHMiLCJjaGFpbnMiLCJ3YWxsZXRDb25uZWN0VjIiLCJXQ19WMl9ERUZBVUxUX0NIQUlOUyIsImV2ZW50cyIsInJwY01hcCIsIldDX0RFRkFVTFRfUlBDX01BUCIsInBhaXJpbmdUb3BpYyIsImNsb3NlIiwiVG9ydXMiLCJ0b3J1cyIsImdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSIsImluaXQiLCJsb2dpbiIsIlBoYW50b20iLCJhY2NvdW50QWRkcmVzcyIsInNvbGFuYSIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiU2FmZUNvbm5lY3QiLCJnZXRTYWZlQ29ubmVjdFByb3ZpZGVyIiwiaW5pdFNhZmVDb25uZWN0IiwiRmxvdyIsImZsb3dQcm92aWRlciIsImZjbCIsImN1cnJlbnRVc2VyIiwiZ2V0Rmxvd1Byb3ZpZGVyIiwiYXV0aGVudGljYXRlIiwic25hcHNob3QiLCJhZGRyIiwic2FmZUNvbm5lY3RBdmFpbGFibGUiLCJ1bmRlZmluZWQiLCJTYWZlQ29ubmVjdFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==