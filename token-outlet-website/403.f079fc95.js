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
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY), localStorage.removeItem('walletconnect'), sessionStorage.removeItem('CURRENT_USER');
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
                t && 0 !== t.length ? r !== t[0] && (delete i.connections[r.toLowerCase()], r = t[0], i.registerNewWalletAddress(r, o, n, e), 
                i.saveConnections(), i.emitSavedConnection(r), i.client.getTokenStore().clearCachedTokens(), i.client.enrichTokenLookupDataOnChainTokens()) : i.client.disconnectWallet();
              })), e.provider.on('chainChanged', (function(o) {
                console.log('chainChanged ==>', o), i.registerNewWalletAddress(t[0], o, n, e), i.saveConnections(), i.emitNetworkChange(o);
              })), e.provider.on('disconnect', (function(e) {
                i.client.disconnectWallet();
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
      }, e.prototype.flowSubscribe = function(e, n) {
        return s(this, void 0, void 0, (function() {
          var t;
          return c(this, (function(o) {
            try {
              n.addr && (this.registerNewWalletAddress(n.addr, 1, 'flow', e), (t = this.client.getUi()) && t.dismissLoader(), this.client.enrichTokenLookupDataOnChainTokens(), 
              t && t.updateUI('main'));
            } catch (r) {
              console.error('flow wallet connection error ==>', r), this.client.getUi().showError('Flow wallet connection error.');
            }
            return [ 2 ];
          }));
        }));
      }, e.prototype.Flow = function() {
        return s(this, void 0, void 0, (function() {
          var e, n, o;
          var r = this;
          return c(this, (function(i) {
            switch (i.label) {
             case 0:
              return i.trys.push([ 0, 2, , 3 ]), [ 4, t.e(652).then(t.bind(t, 3652)) ];

             case 1:
              return e = i.sent(), (n = e.getFlowProvider()).currentUser.subscribe((function(e) {
                return r.flowSubscribe(n, e);
              })), n.authenticate(), [ 3, 3 ];

             case 2:
              return o = i.sent(), console.error('error ==>', o), [ 3, 3 ];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGVzL0B0b2tlbnNjcmlwdC90b2tlbi1uZWdvdGlhdG9yL2Rpc3Qvd2FsbGV0L1dlYjNXYWxsZXRQcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMnO1xudmFyIFdlYjNXYWxsZXRQcm92aWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2ViM1dhbGxldFByb3ZpZGVyKGNsaWVudCwgc2FmZUNvbm5lY3RPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zID0gc2FmZUNvbm5lY3RPcHRpb25zO1xuICAgIH1cbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNhdmVDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNhdmVkQ29ubmVjdGlvbnMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgYWRkcmVzcyBpbiB0aGlzLmNvbm5lY3Rpb25zKSB7XG4gICAgICAgICAgICB2YXIgY29uID0gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXTtcbiAgICAgICAgICAgIHNhdmVkQ29ubmVjdGlvbnNbYWRkcmVzc10gPSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogY29uLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgY2hhaW5JZDogY29uLmNoYWluSWQsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJUeXBlOiBjb24ucHJvdmlkZXJUeXBlLFxuICAgICAgICAgICAgICAgIGJsb2NrY2hhaW46IGNvbi5ibG9ja2NoYWluLFxuICAgICAgICAgICAgICAgIGV0aGVyczogZXRoZXJzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHNhdmVkQ29ubmVjdGlvbnMpKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZW1pdFNhdmVkQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbm5lY3Rpb25zKS5sZW5ndGggJiYgYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQuZXZlbnRTZW5kZXIoJ2Nvbm5lY3RlZC13YWxsZXQnLCB7IGRhdGE6IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvY2FsZUxvd2VyQ2FzZSgpXSB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb2NhbGVMb3dlckNhc2UoKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5lbWl0TmV0d29ya0NoYW5nZSA9IGZ1bmN0aW9uIChjaGFpbklkKSB7XG4gICAgICAgIGlmIChjaGFpbklkKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5ldmVudFNlbmRlcignbmV0d29yay1jaGFuZ2UnLCBjaGFpbklkKTtcbiAgICAgICAgICAgIHJldHVybiBjaGFpbklkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmRlbGV0ZUNvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd3YWxsZXRjb25uZWN0Jyk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ0NVUlJFTlRfVVNFUicpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5sb2FkQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBzdGF0ZSwgX2EsIF9iLCBfYywgX2ksIGFkZHJlc3MsIGNvbm5lY3Rpb24sIGVfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2MgaW4gX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IucHVzaChfYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9pIDwgX2IubGVuZ3RoKSkgcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gX2JbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2MgaW4gX2EpKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmNvbm5lY3RXaXRoKGNvbm5lY3Rpb24ucHJvdmlkZXJUeXBlLCB0cnVlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGNvdWxkbid0IGNvbm5lY3Q6IFwiICsgZV8xLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pKys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5jb25uZWN0V2l0aCA9IGZ1bmN0aW9uICh3YWxsZXRUeXBlLCBjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIGlmIChjaGVja0Nvbm5lY3Rpb25Pbmx5ID09PSB2b2lkIDApIHsgY2hlY2tDb25uZWN0aW9uT25seSA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3YWxsZXRUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBXYWxsZXQgdHlwZSB0byBjb25uZWN0IHdpdGguJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbd2FsbGV0VHlwZV0pIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXNbd2FsbGV0VHlwZV0oY2hlY2tDb25uZWN0aW9uT25seSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdhZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCB0eXBlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2lnbk1lc3NhZ2UgPSBmdW5jdGlvbiAoYWRkcmVzcywgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIHNpZ25lcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gdGhpcy5nZXRXYWxsZXRQcm92aWRlcihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgc2lnbmVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIsIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRXYWxsZXRQcm92aWRlciA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3MudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCEoKF9hID0gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb3ZpZGVyKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2FsbGV0IHByb3ZpZGVyIG5vdCBmb3VuZCBmb3IgYWRkcmVzcycpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXS5wcm92aWRlcjtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29ubmVjdGVkV2FsbGV0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jb25uZWN0aW9ucyk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyA9IGZ1bmN0aW9uIChhZGRyZXNzLCBjaGFpbklkLCBwcm92aWRlclR5cGUsIHByb3ZpZGVyLCBibG9ja2NoYWluKSB7XG4gICAgICAgIGlmIChibG9ja2NoYWluID09PSB2b2lkIDApIHsgYmxvY2tjaGFpbiA9ICdldm0nOyB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvd2VyQ2FzZSgpXSA9IHsgYWRkcmVzczogYWRkcmVzcywgY2hhaW5JZDogY2hhaW5JZCwgcHJvdmlkZXJUeXBlOiBwcm92aWRlclR5cGUsIHByb3ZpZGVyOiBwcm92aWRlciwgYmxvY2tjaGFpbjogYmxvY2tjaGFpbiwgZXRoZXJzOiBldGhlcnMgfTtcbiAgICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyUHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvdmlkZXIsIHByb3ZpZGVyTmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWNjb3VudHMsIGNoYWluSWQsIGN1ckFjY291bnQ7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIHByb3ZpZGVyLmxpc3RBY2NvdW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmRldGVjdE5ldHdvcmsoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQgPSAoX2Euc2VudCgpKS5jaGFpbklkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWNjb3VudHMgZm91bmQgdmlhIHdhbGxldC1jb25uZWN0LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VyQWNjb3VudCwgY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignYWNjb3VudHNDaGFuZ2VkJywgZnVuY3Rpb24gKGFjY291bnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50cyB8fCBhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmRpc2Nvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQWNjb3VudCA9PT0gYWNjb3VudHNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuY29ubmVjdGlvbnNbY3VyQWNjb3VudC50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oY3VyQWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmdldFRva2VuU3RvcmUoKS5jbGVhckNhY2hlZFRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5lbnJpY2hUb2tlbkxvb2t1cERhdGFPbkNoYWluVG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLm9uKCdjaGFpbkNoYW5nZWQnLCBmdW5jdGlvbiAoX2NoYWluSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hhaW5DaGFuZ2VkID09PicsIF9jaGFpbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0sIF9jaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0TmV0d29ya0NoYW5nZShfY2hhaW5JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5kaXNjb25uZWN0V2FsbGV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWNjb3VudHNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuTWV0YU1hc2sgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgTWV0YU1hc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtLCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ01ldGFNYXNrJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcignTWV0YU1hc2sgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHRoZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGFuZCBhY3RpdmUuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5XYWxsZXRDb25uZWN0ID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdhbGxldENvbm5lY3RQcm92aWRlciwgd2FsbGV0Q29ubmVjdDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgV2FsbGV0IENvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KCcuL1dhbGxldENvbm5lY3RQcm92aWRlcicpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdFByb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3YWxsZXRDb25uZWN0UHJvdmlkZXIuZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UoY2hlY2tDb25uZWN0aW9uT25seSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0LmNvbm5lY3Rvci5vbignZGlzcGxheV91cmknLCBmdW5jdGlvbiAoZXJyLCBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ29ubmVjdGlvbiBleHBpcmVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2FsbGV0Q29ubmVjdCwgJ2FueScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnV2FsbGV0Q29ubmVjdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gcmVqZWN0KGUpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5XYWxsZXRDb25uZWN0VjIgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLCB1bml2ZXJzYWxXYWxsZXRDb25uZWN0LCBRUkNvZGVNb2RhbCwgcGFpcmluZztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgV2FsbGV0IENvbm5lY3QgVjInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KCcuL1dhbGxldENvbm5lY3RWMlByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5vbignZGlzcGxheV91cmknLCBmdW5jdGlvbiAodXJpKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVZFTlQnLCAnUVIgQ29kZSBNb2RhbCBvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoJ0B3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbCcpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbCA9IChfYS5zZW50KCkpLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwub3Blbih1cmksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmdldFVpKCkuc2hvd0Vycm9yKCdVc2VyIGNsb3NlZCBtb2RhbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3Qub24oJ3Nlc3Npb25fZGVsZXRlJywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gX2EuaWQsIHRvcGljID0gX2EudG9waWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dDIFYyIEVWRU5UJywgJ3Nlc3Npb25fZGVsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5kaXNjb25uZWN0V2FsbGV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWNoZWNrQ29ubmVjdGlvbk9ubHkpIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlyaW5nID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB1bml2ZXJzYWxXYWxsZXRDb25uZWN0LmNvbm5lY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlaXAxNTU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiBbJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLCAnZXRoX3NpZ25UcmFuc2FjdGlvbicsICdldGhfc2lnbicsICdwZXJzb25hbF9zaWduJywgJ2V0aF9zaWduVHlwZWREYXRhJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5zOiB3YWxsZXRDb25uZWN0UHJvdmlkZXIuV0NfVjJfQ0hBSU5TLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogWydjaGFpbkNoYW5nZWQnLCAnYWNjb3VudHNDaGFuZ2VkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjTWFwOiB3YWxsZXRDb25uZWN0UHJvdmlkZXIuQ1VTVE9NX1JQQ1NfRk9SX1dDX1YyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpcmluZ1RvcGljOiBwYWlyaW5nID09PSBudWxsIHx8IHBhaXJpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaXJpbmcudG9waWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHVuaXZlcnNhbFdhbGxldENvbm5lY3QsICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnV2FsbGV0Q29ubmVjdFYyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5Ub3J1cyA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBUb3J1c1Byb3ZpZGVyLCB0b3J1cywgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KCcuL1RvcnVzUHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvcnVzUHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFRvcnVzUHJvdmlkZXIuZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3J1cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5sb2dpbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodG9ydXMucHJvdmlkZXIsICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnVG9ydXMnKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5QaGFudG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiwgYWNjb3VudEFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgUGhhbnRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5zb2xhbmEgIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LnNvbGFuYS5jb25uZWN0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEFkZHJlc3MgPSBjb25uZWN0aW9uLnB1YmxpY0tleS50b0Jhc2U1OCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50QWRkcmVzcywgJ21haW5uZXQtYmV0YScsICdwaGFudG9tJywgd2luZG93LnNvbGFuYSwgJ3NvbGFuYScpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoJ01ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuU2FmZUNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlciwgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBTYWZlQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmdldFNhZmVDb25uZWN0UHJvdmlkZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5pbml0U2FmZUNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhZGRyZXNzLCAxLCAnU2FmZUNvbm5lY3QnLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZmxvd1N1YnNjcmliZSA9IGZ1bmN0aW9uIChmY2wsIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1aTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFVzZXIuYWRkcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VycmVudFVzZXIuYWRkciwgMSwgJ2Zsb3cnLCBmY2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdWkgPSB0aGlzLmNsaWVudC5nZXRVaSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpLmRpc21pc3NMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LmVucmljaFRva2VuTG9va3VwRGF0YU9uQ2hhaW5Ub2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1aSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS51cGRhdGVVSSgnbWFpbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Zsb3cgd2FsbGV0IGNvbm5lY3Rpb24gZXJyb3IgPT0+JywgZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LmdldFVpKCkuc2hvd0Vycm9yKCdGbG93IHdhbGxldCBjb25uZWN0aW9uIGVycm9yLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5GbG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmxvd1Byb3ZpZGVyLCBmY2xfMSwgZV8yO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGltcG9ydCgnLi9GbG93UHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb3dQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZjbF8xID0gZmxvd1Byb3ZpZGVyLmdldEZsb3dQcm92aWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmNsXzEuY3VycmVudFVzZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChjdXJyZW50VXNlcikgeyByZXR1cm4gX3RoaXMuZmxvd1N1YnNjcmliZShmY2xfMSwgY3VycmVudFVzZXIpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZjbF8xLmF1dGhlbnRpY2F0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgPT0+JywgZV8yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyLCAnJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYWZlQ29ubmVjdEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldFNhZmVDb25uZWN0UHJvdmlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBTYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydCgnLi9TYWZlQ29ubmVjdFByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWZlQ29ubmVjdFByb3ZpZGVyID0gKF9hLnNlbnQoKSkuU2FmZUNvbm5lY3RQcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFNhZmVDb25uZWN0UHJvdmlkZXIodGhpcy5jbGllbnQuZ2V0VWkoKSwgdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkgPSAndG4td2FsbGV0LWNvbm5lY3Rpb25zJztcbiAgICByZXR1cm4gV2ViM1dhbGxldFByb3ZpZGVyO1xufSgpKTtcbmV4cG9ydCB7IFdlYjNXYWxsZXRQcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgV2ViM1dhbGxldFByb3ZpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViM1dhbGxldFByb3ZpZGVyLmpzLm1hcCJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwiYWRvcHQiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJmIiwieSIsInQiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ0aGlzIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiV2ViM1dhbGxldFByb3ZpZGVyIiwiY2xpZW50Iiwic2FmZUNvbm5lY3RPcHRpb25zIiwiY29ubmVjdGlvbnMiLCJwcm90b3R5cGUiLCJzYXZlQ29ubmVjdGlvbnMiLCJzYXZlZENvbm5lY3Rpb25zIiwiYWRkcmVzcyIsImNvbiIsImNoYWluSWQiLCJwcm92aWRlclR5cGUiLCJibG9ja2NoYWluIiwiZXRoZXJzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwiSlNPTiIsInN0cmluZ2lmeSIsImVtaXRTYXZlZENvbm5lY3Rpb24iLCJPYmplY3QiLCJrZXlzIiwiZXZlbnRTZW5kZXIiLCJkYXRhIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlbWl0TmV0d29ya0NoYW5nZSIsImRlbGV0ZUNvbm5lY3Rpb25zIiwicmVtb3ZlSXRlbSIsInNlc3Npb25TdG9yYWdlIiwibG9hZENvbm5lY3Rpb25zIiwic3RhdGUiLCJfYSIsIl9iIiwiX2MiLCJfaSIsImNvbm5lY3Rpb24iLCJlXzEiLCJfZCIsImdldEl0ZW0iLCJwYXJzZSIsImNvbm5lY3RXaXRoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ3YWxsZXRUeXBlIiwiY2hlY2tDb25uZWN0aW9uT25seSIsIkVycm9yIiwic2lnbk1lc3NhZ2UiLCJwcm92aWRlciIsImdldFdhbGxldFByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwidG9Mb3dlckNhc2UiLCJnZXRDb25uZWN0ZWRXYWxsZXREYXRhIiwidmFsdWVzIiwicmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzIiwicmVnaXN0ZXJQcm92aWRlciIsInByb3ZpZGVyTmFtZSIsImFjY291bnRzIiwiY3VyQWNjb3VudCIsIl90aGlzIiwibGlzdEFjY291bnRzIiwiZGV0ZWN0TmV0d29yayIsIm9uIiwiZ2V0VG9rZW5TdG9yZSIsImNsZWFyQ2FjaGVkVG9rZW5zIiwiZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucyIsImRpc2Nvbm5lY3RXYWxsZXQiLCJfY2hhaW5JZCIsInJlYXNvbiIsIk1ldGFNYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Q29ubmVjdCIsImdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlIiwiY29ubmVjdG9yIiwiZXJyIiwicGF5bG9hZCIsImNhdGNoIiwiV2FsbGV0Q29ubmVjdFYyIiwid2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwidW5pdmVyc2FsV2FsbGV0Q29ubmVjdCIsIlFSQ29kZU1vZGFsIiwiZ2V0V2FsbGV0Q29ubmVjdFYyUHJvdmlkZXJJbnN0YW5jZSIsInVyaSIsImRlZmF1bHQiLCJvcGVuIiwiZ2V0VWkiLCJzaG93RXJyb3IiLCJpZCIsInRvcGljIiwiY29ubmVjdCIsIm5hbWVzcGFjZXMiLCJlaXAxNTUiLCJtZXRob2RzIiwiY2hhaW5zIiwiV0NfVjJfQ0hBSU5TIiwiZXZlbnRzIiwicnBjTWFwIiwiQ1VTVE9NX1JQQ1NfRk9SX1dDX1YyIiwicGFpcmluZ1RvcGljIiwiY2xvc2UiLCJUb3J1cyIsInRvcnVzIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiaW5pdCIsImxvZ2luIiwiUGhhbnRvbSIsImFjY291bnRBZGRyZXNzIiwic29sYW5hIiwicHVibGljS2V5IiwidG9CYXNlNTgiLCJTYWZlQ29ubmVjdCIsImdldFNhZmVDb25uZWN0UHJvdmlkZXIiLCJpbml0U2FmZUNvbm5lY3QiLCJmbG93U3Vic2NyaWJlIiwiZmNsIiwiY3VycmVudFVzZXIiLCJ1aSIsImFkZHIiLCJkaXNtaXNzTG9hZGVyIiwidXBkYXRlVUkiLCJlcnJvciIsIkZsb3ciLCJmbG93UHJvdmlkZXIiLCJmY2xfMSIsImVfMiIsImdldEZsb3dQcm92aWRlciIsInN1YnNjcmliZSIsImF1dGhlbnRpY2F0ZSIsInNhZmVDb25uZWN0QXZhaWxhYmxlIiwidW5kZWZpbmVkIiwiU2FmZUNvbm5lY3RQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=