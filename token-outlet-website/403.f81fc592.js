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
        return Object.keys(this.connections).length && e ? (this.client.eventSender.emitConnectedWalletInstance(this.connections[e.toLocaleLowerCase()]), 
        this.connections[e.toLocaleLowerCase()]) : null;
      }, e.prototype.emitNetworkChange = function(e) {
        if (e) return this.client.eventSender.emitNetworkChange(e), e;
      }, e.prototype.deleteConnections = function() {
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY), localStorage.removeItem("walletconnect");
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
        if (e = e.toLowerCase(), !(null === (t = this.connections[e]) || void 0 === t ? void 0 : t.provider)) throw new Error("Wallet provider not found for address");
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
        return c(this, void 0, void 0, (function() {
          var e;
          return a(this, (function(t) {
            switch (t.label) {
             case 0:
              return (0, i.kg)(2, 'connect MetaMask'), void 0 === window.ethereum ? [ 3, 2 ] : [ 4, window.ethereum.enable() ];

             case 1:
              return t.sent(), e = new r.Q(window.ethereum, "any"), [ 2, this.registerProvider(e, "MetaMask") ];

             case 2:
              throw new Error("MetaMask is not available. Please check the extension is supported and active.");
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
                e && t.connector.on("display_uri", (function(e, t) {
                  i(new Error("Connection expired"));
                })), t.enable().then((function() {
                  var e = new r.Q(t, "any");
                  n(o.registerProvider(e, "WalletConnect"));
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
              return (o = h.sent()).on("display_uri", (function(e) {
                return c(l, void 0, void 0, (function() {
                  var t = this;
                  return a(this, (function(o) {
                    switch (o.label) {
                     case 0:
                      return s.log("EVENT", "QR Code Modal open"), [ 4, n.e(337).then(n.t.bind(n, 4337, 23)) ];

                     case 1:
                      return (u = o.sent().default).open(e, (function() {
                        t.client.getUi().showError('User closed modal');
                      })), [ 2 ];
                    }
                  }));
                }));
              })), o.on("session_delete", (function(e) {
                e.id, e.topic;
                s.log("WC V2 EVENT", "session_deleted"), l.client.disconnectWallet();
                var t = l.client.getUi();
                t && t.updateUI("wallet");
              })), e ? [ 3, 4 ] : (void 0, [ 4, o.connect({
                namespaces: {
                  eip155: {
                    methods: [ "eth_sendTransaction", "eth_signTransaction", "eth_sign", "personal_sign", "eth_signTypedData" ],
                    chains: t.WC_V2_CHAINS,
                    events: [ "chainChanged", "accountsChanged" ],
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
                  e(l.registerProvider(t, "WalletConnectV2"));
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
              return o.sent(), t = new r.Q(e.provider, "any"), [ 2, this.registerProvider(t, "Torus") ];
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
              return e = n.sent(), t = e.publicKey.toBase58(), [ 2, this.registerNewWalletAddress(t, "mainnet-beta", 'phantom', window.solana, 'solana') ];

             case 2:
              throw new Error("MetaMask is not available. Please check the extension is supported and active.");
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
              return t = n.sent(), this.registerNewWalletAddress(t, 1, "SafeConnect", e), [ 2, t ];
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
      }, e.LOCAL_STORAGE_KEY = "tn-wallet-connections", e;
    }();
    const l = u;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sSUFBSWpFLE1BQU07O0FBRWhDO0FBQ0o7QUFDSixTQUNBN0MsRUFBbUJJLFVBQVU2RyxjQUFjO1FBQ3ZDLE9BQU8zSixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFDbkMsSUFBSXdELEdBQVV4QztVQUNkLE9BQU85QixFQUFZYyxPQUFNLFNBQVV1QztZQUMvQixRQUFRQSxFQUFHOUM7YUFDUCxLQUFLO2NBRUQsUUFEQSxTQUFPLEdBQUcsd0JBQ0gsRUFBQyxHQUFHTyxLQUFLMkg7O2FBQ3BCLEtBQUs7Y0FFRCxPQUFPLEVBQUMsSUFEUm5FLElBQVdqQixFQUFHN0MsUUFDTWtJOzthQUN4QixLQUFLO2NBR0QsT0FGQTVHLElBQVV1QixFQUFHN0MsUUFDYk0sS0FBSzhELHlCQUF5QjlDLEdBQVMsR0FBRyxlQUFld0MsSUFDbEQsRUFBQyxHQUFHeEM7O0FBRXZCO0FBQ0o7QUFDSixTQUNBUCxFQUFtQkksVUFBVWdILHVCQUF1QjtRQUNoRCxZQUFtQ0MsTUFBNUI5SCxLQUFLVztBQUNoQixTQUNBRixFQUFtQkksVUFBVThHLHlCQUF5QjtRQUNsRCxPQUFPNUosRUFBVWlDLFdBQU0sUUFBUSxJQUFRO1VBRW5DLE9BQU9kLEVBQVljLE9BQU0sU0FBVXVDO1lBQy9CLFFBQVFBLEVBQUc5QzthQUNQLEtBQUs7Y0FBRyxPQUFPLEVBQUMsR0FBRzs7YUFDbkIsS0FBSztjQUVELE9BQU8sRUFBQyxHQUFHLEtBRFhzSSxHQUF1QnhGLEVBQUc3QyxPQUFRcUkscUJBQ0MvSCxLQUFLVSxPQUFPb0YsU0FBUzlGLEtBQUtXOztBQUV6RTtBQUNKO0FBQ0osU0FDQUYsRUFBbUJlLG9CQUFvQix5QkFDaENmO0FBQ1gsS0F0WHlCO0lBd1h6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b2tlbnNjcmlwdC90b2tlbi1uZWdvdGlhdG9yL2Rpc3Qvd2FsbGV0L1dlYjNXYWxsZXRQcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbnZhciBXZWIzV2FsbGV0UHJvdmlkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYjNXYWxsZXRQcm92aWRlcihjbGllbnQsIHNhZmVDb25uZWN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyA9IHNhZmVDb25uZWN0T3B0aW9ucztcbiAgICB9XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYXZlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzYXZlZENvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGZvciAodmFyIGFkZHJlc3MgaW4gdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgICAgICAgdmFyIGNvbiA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc107XG4gICAgICAgICAgICBzYXZlZENvbm5lY3Rpb25zW2FkZHJlc3NdID0ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGNvbi5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGNvbi5jaGFpbklkLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyVHlwZTogY29uLnByb3ZpZGVyVHlwZSxcbiAgICAgICAgICAgICAgICBibG9ja2NoYWluOiBjb24uYmxvY2tjaGFpbixcbiAgICAgICAgICAgICAgICBldGhlcnM6IGV0aGVyc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHNhdmVkQ29ubmVjdGlvbnMpKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZW1pdFNhdmVkQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbm5lY3Rpb25zKS5sZW5ndGggJiZcbiAgICAgICAgICAgIGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyLmVtaXRDb25uZWN0ZWRXYWxsZXRJbnN0YW5jZSh0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb2NhbGVMb3dlckNhc2UoKV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvY2FsZUxvd2VyQ2FzZSgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmVtaXROZXR3b3JrQ2hhbmdlID0gZnVuY3Rpb24gKGNoYWluSWQpIHtcbiAgICAgICAgaWYgKGNoYWluSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyLmVtaXROZXR3b3JrQ2hhbmdlKGNoYWluSWQpO1xuICAgICAgICAgICAgcmV0dXJuIGNoYWluSWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZGVsZXRlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ3YWxsZXRjb25uZWN0XCIpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5sb2FkQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBzdGF0ZSwgX2EsIF9iLCBfYywgX2ksIGFkZHJlc3MsIGNvbm5lY3Rpb24sIGVfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2MgaW4gX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IucHVzaChfYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9pIDwgX2IubGVuZ3RoKSkgcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gX2JbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2MgaW4gX2EpKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmNvbm5lY3RXaXRoKGNvbm5lY3Rpb24ucHJvdmlkZXJUeXBlLCB0cnVlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGNvdWxkbid0IGNvbm5lY3Q6IFwiICsgZV8xLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pKys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5jb25uZWN0V2l0aCA9IGZ1bmN0aW9uICh3YWxsZXRUeXBlLCBjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIGlmIChjaGVja0Nvbm5lY3Rpb25Pbmx5ID09PSB2b2lkIDApIHsgY2hlY2tDb25uZWN0aW9uT25seSA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3YWxsZXRUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBXYWxsZXQgdHlwZSB0byBjb25uZWN0IHdpdGguJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbd2FsbGV0VHlwZV0pIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXNbd2FsbGV0VHlwZV0oY2hlY2tDb25uZWN0aW9uT25seSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdhZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCB0eXBlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuc2lnbk1lc3NhZ2UgPSBmdW5jdGlvbiAoYWRkcmVzcywgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIHNpZ25lcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gdGhpcy5nZXRXYWxsZXRQcm92aWRlcihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgc2lnbmVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIsIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRXYWxsZXRQcm92aWRlciA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3MudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCEoKF9hID0gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb3ZpZGVyKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldhbGxldCBwcm92aWRlciBub3QgZm91bmQgZm9yIGFkZHJlc3NcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdLnByb3ZpZGVyO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb25uZWN0ZWRXYWxsZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmNvbm5lY3Rpb25zKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzID0gZnVuY3Rpb24gKGFkZHJlc3MsIGNoYWluSWQsIHByb3ZpZGVyVHlwZSwgcHJvdmlkZXIsIGJsb2NrY2hhaW4pIHtcbiAgICAgICAgaWYgKGJsb2NrY2hhaW4gPT09IHZvaWQgMCkgeyBibG9ja2NoYWluID0gJ2V2bSc7IH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG93ZXJDYXNlKCldID0geyBhZGRyZXNzOiBhZGRyZXNzLCBjaGFpbklkOiBjaGFpbklkLCBwcm92aWRlclR5cGU6IHByb3ZpZGVyVHlwZSwgcHJvdmlkZXI6IHByb3ZpZGVyLCBibG9ja2NoYWluOiBibG9ja2NoYWluLCBldGhlcnM6IGV0aGVycyB9O1xuICAgICAgICByZXR1cm4gYWRkcmVzcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlciwgcHJvdmlkZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY2NvdW50cywgY2hhaW5JZCwgY3VyQWNjb3VudDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgcHJvdmlkZXIubGlzdEFjY291bnRzKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcHJvdmlkZXIuZGV0ZWN0TmV0d29yaygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZCA9IChfYS5zZW50KCkpLmNoYWluSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWNjb3VudHMgZm91bmQgdmlhIHdhbGxldC1jb25uZWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgZnVuY3Rpb24gKGFjY291bnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckFjY291bnQgPT09IGFjY291bnRzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLmNvbm5lY3Rpb25zW2N1ckFjY291bnQudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJBY2NvdW50LCBjaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGN1ckFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5nZXRUb2tlblN0b3JlKCkuY2xlYXJDYWNoZWRUb2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbihcImNoYWluQ2hhbmdlZFwiLCBmdW5jdGlvbiAoX2NoYWluSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0sIF9jaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0TmV0d29ya0NoYW5nZShfY2hhaW5JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWNjb3VudHNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuTWV0YU1hc2sgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgTWV0YU1hc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtLCBcImFueVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCBcIk1ldGFNYXNrXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoXCJNZXRhTWFzayBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5XYWxsZXRDb25uZWN0ID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdhbGxldENvbm5lY3RQcm92aWRlciwgd2FsbGV0Q29ubmVjdDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgV2FsbGV0IENvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KFwiLi9XYWxsZXRDb25uZWN0UHJvdmlkZXJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZShjaGVja0Nvbm5lY3Rpb25Pbmx5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QuY29ubmVjdG9yLm9uKFwiZGlzcGxheV91cmlcIiwgZnVuY3Rpb24gKGVyciwgcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJDb25uZWN0aW9uIGV4cGlyZWRcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdC5lbmFibGUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3YWxsZXRDb25uZWN0LCBcImFueVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgXCJXYWxsZXRDb25uZWN0XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHJlamVjdChlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuV2FsbGV0Q29ubmVjdFYyID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdhbGxldENvbm5lY3RQcm92aWRlciwgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdCwgUVJDb2RlTW9kYWwsIHBhaXJpbmc7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFdhbGxldCBDb25uZWN0IFYyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGltcG9ydChcIi4vV2FsbGV0Q29ubmVjdFYyUHJvdmlkZXJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5vbihcImRpc3BsYXlfdXJpXCIsIGZ1bmN0aW9uICh1cmkpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVZFTlRcIiwgXCJRUiBDb2RlIE1vZGFsIG9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoXCJAd2FsbGV0Y29ubmVjdC9xcmNvZGUtbW9kYWxcIildO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsID0gKF9hLnNlbnQoKSkuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbC5vcGVuKHVyaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZ2V0VWkoKS5zaG93RXJyb3IoJ1VzZXIgY2xvc2VkIG1vZGFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5vbihcInNlc3Npb25fZGVsZXRlXCIsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hLmlkLCB0b3BpYyA9IF9hLnRvcGljO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0MgVjIgRVZFTlRcIiwgXCJzZXNzaW9uX2RlbGV0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmRpc2Nvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdWkgPSBfdGhpcy5jbGllbnQuZ2V0VWkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodWkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpLnVwZGF0ZVVJKFwid2FsbGV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFjaGVja0Nvbm5lY3Rpb25Pbmx5KSByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFpcmluZyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5jb25uZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWlwMTU1OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV0aF9zZW5kVHJhbnNhY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldGhfc2lnblRyYW5zYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXRoX3NpZ25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzb25hbF9zaWduXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXRoX3NpZ25UeXBlZERhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluczogd2FsbGV0Q29ubmVjdFByb3ZpZGVyLldDX1YyX0NIQUlOUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IFtcImNoYWluQ2hhbmdlZFwiLCBcImFjY291bnRzQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNNYXA6IHdhbGxldENvbm5lY3RQcm92aWRlci5DVVNUT01fUlBDU19GT1JfV0NfVjJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaXJpbmdUb3BpYzogcGFpcmluZyA9PT0gbnVsbCB8fCBwYWlyaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWlyaW5nLnRvcGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0LmVuYWJsZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodW5pdmVyc2FsV2FsbGV0Q29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgXCJXYWxsZXRDb25uZWN0VjJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlRvcnVzID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFRvcnVzUHJvdmlkZXIsIHRvcnVzLCBwcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1RvcnVzUHJvdmlkZXJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3J1c1Byb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBUb3J1c1Byb3ZpZGVyLmdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9ydXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRvcnVzLmluaXQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMubG9naW4oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHRvcnVzLnByb3ZpZGVyLCBcImFueVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCBcIlRvcnVzXCIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlBoYW50b20gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uLCBhY2NvdW50QWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBQaGFudG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2Ygd2luZG93LnNvbGFuYSAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuc29sYW5hLmNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50QWRkcmVzcyA9IGNvbm5lY3Rpb24ucHVibGljS2V5LnRvQmFzZTU4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRBZGRyZXNzLCBcIm1haW5uZXQtYmV0YVwiLCAncGhhbnRvbScsIHdpbmRvdy5zb2xhbmEsICdzb2xhbmEnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKFwiTWV0YU1hc2sgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHRoZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGFuZCBhY3RpdmUuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuU2FmZUNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlciwgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBTYWZlQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmdldFNhZmVDb25uZWN0UHJvdmlkZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5pbml0U2FmZUNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhZGRyZXNzLCAxLCBcIlNhZmVDb25uZWN0XCIsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYWZlQ29ubmVjdEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldFNhZmVDb25uZWN0UHJvdmlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBTYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydChcIi4vU2FmZUNvbm5lY3RQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhZmVDb25uZWN0UHJvdmlkZXIgPSAoX2Euc2VudCgpKS5TYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgU2FmZUNvbm5lY3RQcm92aWRlcih0aGlzLmNsaWVudC5nZXRVaSgpLCB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSA9IFwidG4td2FsbGV0LWNvbm5lY3Rpb25zXCI7XG4gICAgcmV0dXJuIFdlYjNXYWxsZXRQcm92aWRlcjtcbn0oKSk7XG5leHBvcnQgeyBXZWIzV2FsbGV0UHJvdmlkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFdlYjNXYWxsZXRQcm92aWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdlYjNXYWxsZXRQcm92aWRlci5qcy5tYXAiXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsImFkb3B0IiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiZiIsInkiLCJ0IiwiZyIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidGhpcyIsIm4iLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJjYWxsIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsIldlYjNXYWxsZXRQcm92aWRlciIsImNsaWVudCIsInNhZmVDb25uZWN0T3B0aW9ucyIsImNvbm5lY3Rpb25zIiwicHJvdG90eXBlIiwic2F2ZUNvbm5lY3Rpb25zIiwic2F2ZWRDb25uZWN0aW9ucyIsImFkZHJlc3MiLCJjb24iLCJjaGFpbklkIiwicHJvdmlkZXJUeXBlIiwiYmxvY2tjaGFpbiIsImV0aGVycyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJMT0NBTF9TVE9SQUdFX0tFWSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWl0U2F2ZWRDb25uZWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImV2ZW50U2VuZGVyIiwiZW1pdENvbm5lY3RlZFdhbGxldEluc3RhbmNlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlbWl0TmV0d29ya0NoYW5nZSIsImRlbGV0ZUNvbm5lY3Rpb25zIiwicmVtb3ZlSXRlbSIsImxvYWRDb25uZWN0aW9ucyIsImRhdGEiLCJzdGF0ZSIsIl9hIiwiX2IiLCJfYyIsIl9pIiwiY29ubmVjdGlvbiIsImVfMSIsIl9kIiwiZ2V0SXRlbSIsInBhcnNlIiwiY29ubmVjdFdpdGgiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIndhbGxldFR5cGUiLCJjaGVja0Nvbm5lY3Rpb25Pbmx5IiwiRXJyb3IiLCJzaWduTWVzc2FnZSIsInByb3ZpZGVyIiwiZ2V0V2FsbGV0UHJvdmlkZXIiLCJnZXRTaWduZXIiLCJ0b0xvd2VyQ2FzZSIsImdldENvbm5lY3RlZFdhbGxldERhdGEiLCJ2YWx1ZXMiLCJyZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MiLCJyZWdpc3RlclByb3ZpZGVyIiwicHJvdmlkZXJOYW1lIiwiYWNjb3VudHMiLCJjdXJBY2NvdW50IiwiX3RoaXMiLCJsaXN0QWNjb3VudHMiLCJkZXRlY3ROZXR3b3JrIiwib24iLCJnZXRUb2tlblN0b3JlIiwiY2xlYXJDYWNoZWRUb2tlbnMiLCJlbnJpY2hUb2tlbkxvb2t1cERhdGFPbkNoYWluVG9rZW5zIiwiX2NoYWluSWQiLCJNZXRhTWFzayIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwiV2FsbGV0Q29ubmVjdCIsIndhbGxldENvbm5lY3QiLCJnZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZSIsImNvbm5lY3RvciIsImVyciIsInBheWxvYWQiLCJjYXRjaCIsIldhbGxldENvbm5lY3RWMiIsIndhbGxldENvbm5lY3RQcm92aWRlciIsInVuaXZlcnNhbFdhbGxldENvbm5lY3QiLCJRUkNvZGVNb2RhbCIsImdldFdhbGxldENvbm5lY3RWMlByb3ZpZGVySW5zdGFuY2UiLCJ1cmkiLCJkZWZhdWx0Iiwib3BlbiIsImdldFVpIiwic2hvd0Vycm9yIiwiaWQiLCJ0b3BpYyIsImRpc2Nvbm5lY3RXYWxsZXQiLCJ1aSIsInVwZGF0ZVVJIiwiY29ubmVjdCIsIm5hbWVzcGFjZXMiLCJlaXAxNTUiLCJtZXRob2RzIiwiY2hhaW5zIiwiV0NfVjJfQ0hBSU5TIiwiZXZlbnRzIiwicnBjTWFwIiwiQ1VTVE9NX1JQQ1NfRk9SX1dDX1YyIiwicGFpcmluZ1RvcGljIiwiY2xvc2UiLCJUb3J1cyIsInRvcnVzIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiaW5pdCIsImxvZ2luIiwiUGhhbnRvbSIsImFjY291bnRBZGRyZXNzIiwic29sYW5hIiwicHVibGljS2V5IiwidG9CYXNlNTgiLCJTYWZlQ29ubmVjdCIsImdldFNhZmVDb25uZWN0UHJvdmlkZXIiLCJpbml0U2FmZUNvbm5lY3QiLCJzYWZlQ29ubmVjdEF2YWlsYWJsZSIsInVuZGVmaW5lZCIsIlNhZmVDb25uZWN0UHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9