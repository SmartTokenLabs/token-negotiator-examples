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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly90b2tlbi1vdXRsZXQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AdG9rZW5zY3JpcHQvdG9rZW4tbmVnb3RpYXRvci9kaXN0L3dhbGxldC9XZWIzV2FsbGV0UHJvdmlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL3V0aWxzJztcbnZhciBXZWIzV2FsbGV0UHJvdmlkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYjNXYWxsZXRQcm92aWRlcihjbGllbnQsIHNhZmVDb25uZWN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyA9IHNhZmVDb25uZWN0T3B0aW9ucztcbiAgICB9XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYXZlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzYXZlZENvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGZvciAodmFyIGFkZHJlc3MgaW4gdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgICAgICAgdmFyIGNvbiA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc107XG4gICAgICAgICAgICBzYXZlZENvbm5lY3Rpb25zW2FkZHJlc3NdID0ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGNvbi5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGNvbi5jaGFpbklkLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyVHlwZTogY29uLnByb3ZpZGVyVHlwZSxcbiAgICAgICAgICAgICAgICBibG9ja2NoYWluOiBjb24uYmxvY2tjaGFpbixcbiAgICAgICAgICAgICAgICBldGhlcnM6IGV0aGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZENvbm5lY3Rpb25zKSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmVtaXRTYXZlZENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jb25uZWN0aW9ucykubGVuZ3RoICYmIGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyKCdjb25uZWN0ZWQtd2FsbGV0JywgeyBkYXRhOiB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb2NhbGVMb3dlckNhc2UoKV0gfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG9jYWxlTG93ZXJDYXNlKCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZW1pdE5ldHdvcmtDaGFuZ2UgPSBmdW5jdGlvbiAoY2hhaW5JZCkge1xuICAgICAgICBpZiAoY2hhaW5JZCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQuZXZlbnRTZW5kZXIoJ25ldHdvcmstY2hhbmdlJywgY2hhaW5JZCk7XG4gICAgICAgICAgICByZXR1cm4gY2hhaW5JZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5kZWxldGVDb25uZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnd2FsbGV0Y29ubmVjdCcpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdDVVJSRU5UX1VTRVInKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUubG9hZENvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSwgc3RhdGUsIF9hLCBfYiwgX2MsIF9pLCBhZGRyZXNzLCBjb25uZWN0aW9uLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9jIGluIF9hKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnB1c2goX2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IF9iLmxlbmd0aCkpIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IF9iW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKF9jIGluIF9hKSkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2QudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5jb25uZWN0V2l0aChjb25uZWN0aW9uLnByb3ZpZGVyVHlwZSwgdHJ1ZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhbGxldCBjb3VsZG4ndCBjb25uZWN0OiBcIiArIGVfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuY29ubmVjdFdpdGggPSBmdW5jdGlvbiAod2FsbGV0VHlwZSwgY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICBpZiAoY2hlY2tDb25uZWN0aW9uT25seSA9PT0gdm9pZCAwKSB7IGNoZWNrQ29ubmVjdGlvbk9ubHkgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FsbGV0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgV2FsbGV0IHR5cGUgdG8gY29ubmVjdCB3aXRoLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW3dhbGxldFR5cGVdKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzW3dhbGxldFR5cGVdKGNoZWNrQ29ubmVjdGlvbk9ubHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnYWRkcmVzcycsIGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdXYWxsZXQgdHlwZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNpZ25NZXNzYWdlID0gZnVuY3Rpb24gKGFkZHJlc3MsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBzaWduZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IHRoaXMuZ2V0V2FsbGV0UHJvdmlkZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0V2FsbGV0UHJvdmlkZXIgPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghKChfYSA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm92aWRlcikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCBwcm92aWRlciBub3QgZm91bmQgZm9yIGFkZHJlc3MnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10ucHJvdmlkZXI7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldENvbm5lY3RlZFdhbGxldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY29ubmVjdGlvbnMpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MgPSBmdW5jdGlvbiAoYWRkcmVzcywgY2hhaW5JZCwgcHJvdmlkZXJUeXBlLCBwcm92aWRlciwgYmxvY2tjaGFpbikge1xuICAgICAgICBpZiAoYmxvY2tjaGFpbiA9PT0gdm9pZCAwKSB7IGJsb2NrY2hhaW4gPSAnZXZtJzsgfVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb3dlckNhc2UoKV0gPSB7IGFkZHJlc3M6IGFkZHJlc3MsIGNoYWluSWQ6IGNoYWluSWQsIHByb3ZpZGVyVHlwZTogcHJvdmlkZXJUeXBlLCBwcm92aWRlcjogcHJvdmlkZXIsIGJsb2NrY2hhaW46IGJsb2NrY2hhaW4sIGV0aGVyczogZXRoZXJzIH07XG4gICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3RlclByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyLCBwcm92aWRlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjY291bnRzLCBjaGFpbklkLCBjdXJBY2NvdW50O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBwcm92aWRlci5saXN0QWNjb3VudHMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5kZXRlY3ROZXR3b3JrKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkID0gKF9hLnNlbnQoKSkuY2hhaW5JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZ1bmN0aW9uIChhY2NvdW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudHMgfHwgYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5kaXNjb25uZWN0V2FsbGV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckFjY291bnQgPT09IGFjY291bnRzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLmNvbm5lY3Rpb25zW2N1ckFjY291bnQudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJBY2NvdW50LCBjaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGN1ckFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5nZXRUb2tlblN0b3JlKCkuY2xlYXJDYWNoZWRUb2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignY2hhaW5DaGFuZ2VkJywgZnVuY3Rpb24gKF9jaGFpbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdLCBfY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdE5ldHdvcmtDaGFuZ2UoX2NoYWluSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlYXNvbiA9PT0gbnVsbCB8fCByZWFzb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlYXNvbi5tZXNzYWdlKSAmJiByZWFzb24ubWVzc2FnZS5pbmRleE9mKCdNZXRhTWFzazogRGlzY29ubmVjdGVkIGZyb20gY2hhaW4nKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmRpc2Nvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhY2NvdW50c1swXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5NZXRhTWFzayA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBNZXRhTWFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0sICdhbnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnTWV0YU1hc2snKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdNZXRhTWFzayBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3QgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLCB3YWxsZXRDb25uZWN0O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoJy4vV2FsbGV0Q29ubmVjdFByb3ZpZGVyJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZShjaGVja0Nvbm5lY3Rpb25Pbmx5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QuY29ubmVjdG9yLm9uKCdkaXNwbGF5X3VyaScsIGZ1bmN0aW9uIChlcnIsIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDb25uZWN0aW9uIGV4cGlyZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5hYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3YWxsZXRDb25uZWN0LCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsICdXYWxsZXRDb25uZWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiByZWplY3QoZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3RWMiA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3YWxsZXRDb25uZWN0UHJvdmlkZXIsIHVuaXZlcnNhbFdhbGxldENvbm5lY3QsIFFSQ29kZU1vZGFsLCBwYWlyaW5nO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCBWMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoJy4vV2FsbGV0Q29ubmVjdFYyUHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLmdldFdhbGxldENvbm5lY3RWMlByb3ZpZGVySW5zdGFuY2UoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0Lm9uKCdkaXNwbGF5X3VyaScsIGZ1bmN0aW9uICh1cmkpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFVkVOVCcsICdRUiBDb2RlIE1vZGFsIG9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGltcG9ydCgnQHdhbGxldGNvbm5lY3QvcXJjb2RlLW1vZGFsJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsID0gKF9hLnNlbnQoKSkuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRUkNvZGVNb2RhbC5vcGVuKHVyaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZ2V0VWkoKS5zaG93RXJyb3IoJ1VzZXIgY2xvc2VkIG1vZGFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5vbignc2Vzc2lvbl9kZWxldGUnLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBfYS5pZCwgdG9waWMgPSBfYS50b3BpYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0MgVjIgRVZFTlQnLCAnc2Vzc2lvbl9kZWxldGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmRpc2Nvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhY2hlY2tDb25uZWN0aW9uT25seSkgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhaXJpbmcgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHVuaXZlcnNhbFdhbGxldENvbm5lY3QuY29ubmVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVpcDE1NToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IFsnZXRoX3NlbmRUcmFuc2FjdGlvbicsICdldGhfc2lnblRyYW5zYWN0aW9uJywgJ2V0aF9zaWduJywgJ3BlcnNvbmFsX3NpZ24nLCAnZXRoX3NpZ25UeXBlZERhdGEnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbnM6IHdhbGxldENvbm5lY3RQcm92aWRlci5XQ19WMl9DSEFJTlMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiBbJ2NoYWluQ2hhbmdlZCcsICdhY2NvdW50c0NoYW5nZWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNNYXA6IHdhbGxldENvbm5lY3RQcm92aWRlci5DVVNUT01fUlBDU19GT1JfV0NfVjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlyaW5nVG9waWM6IHBhaXJpbmcgPT09IG51bGwgfHwgcGFpcmluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFpcmluZy50b3BpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5hYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodW5pdmVyc2FsV2FsbGV0Q29ubmVjdCwgJ2FueScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsICdXYWxsZXRDb25uZWN0VjInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlRvcnVzID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFRvcnVzUHJvdmlkZXIsIHRvcnVzLCBwcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBpbXBvcnQoJy4vVG9ydXNQcm92aWRlcicpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9ydXNQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgVG9ydXNQcm92aWRlci5nZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcnVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5pbml0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRvcnVzLmxvZ2luKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih0b3J1cy5wcm92aWRlciwgJ2FueScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsICdUb3J1cycpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlBoYW50b20gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uLCBhY2NvdW50QWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBQaGFudG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2Ygd2luZG93LnNvbGFuYSAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuc29sYW5hLmNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50QWRkcmVzcyA9IGNvbm5lY3Rpb24ucHVibGljS2V5LnRvQmFzZTU4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRBZGRyZXNzLCAnbWFpbm5ldC1iZXRhJywgJ3BoYW50b20nLCB3aW5kb3cuc29sYW5hLCAnc29sYW5hJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcignTWV0YU1hc2sgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHRoZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGFuZCBhY3RpdmUuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5TYWZlQ29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFNhZmVDb25uZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuZ2V0U2FmZUNvbm5lY3RQcm92aWRlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmluaXRTYWZlQ29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFkZHJlc3MsIDEsICdTYWZlQ29ubmVjdCcsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5mbG93U3Vic2NyaWJlID0gZnVuY3Rpb24gKGZjbCwgY3VycmVudFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVpO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VXNlci5hZGRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJyZW50VXNlci5hZGRyLCAxLCAnZmxvdycsIGZjbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aSA9IHRoaXMuY2xpZW50LmdldFVpKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodWkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWkuZGlzbWlzc0xvYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpLnVwZGF0ZVVJKCdtYWluJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmxvdyB3YWxsZXQgY29ubmVjdGlvbiBlcnJvciA9PT4nLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZ2V0VWkoKS5zaG93RXJyb3IoJ0Zsb3cgd2FsbGV0IGNvbm5lY3Rpb24gZXJyb3IuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLkZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmbG93UHJvdmlkZXIsIGZjbF8xLCBlXzI7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KCcuL0Zsb3dQcm92aWRlcicpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvd1Byb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmNsXzEgPSBmbG93UHJvdmlkZXIuZ2V0Rmxvd1Byb3ZpZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmY2xfMS5jdXJyZW50VXNlci5zdWJzY3JpYmUoZnVuY3Rpb24gKGN1cnJlbnRVc2VyKSB7IHJldHVybiBfdGhpcy5mbG93U3Vic2NyaWJlKGZjbF8xLCBjdXJyZW50VXNlcik7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmNsXzEuYXV0aGVudGljYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciA9PT4nLCBlXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIsICcnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNhZmVDb25uZWN0QXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0U2FmZUNvbm5lY3RQcm92aWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFNhZmVDb25uZWN0UHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KCcuL1NhZmVDb25uZWN0UHJvdmlkZXInKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhZmVDb25uZWN0UHJvdmlkZXIgPSAoX2Euc2VudCgpKS5TYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgU2FmZUNvbm5lY3RQcm92aWRlcih0aGlzLmNsaWVudC5nZXRVaSgpLCB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSA9ICd0bi13YWxsZXQtY29ubmVjdGlvbnMnO1xuICAgIHJldHVybiBXZWIzV2FsbGV0UHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgV2ViM1dhbGxldFByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBXZWIzV2FsbGV0UHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWIzV2FsbGV0UHJvdmlkZXIuanMubWFwIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhZG9wdCIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImYiLCJ5IiwidCIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJXZWIzV2FsbGV0UHJvdmlkZXIiLCJjbGllbnQiLCJzYWZlQ29ubmVjdE9wdGlvbnMiLCJjb25uZWN0aW9ucyIsInByb3RvdHlwZSIsInNhdmVDb25uZWN0aW9ucyIsInNhdmVkQ29ubmVjdGlvbnMiLCJhZGRyZXNzIiwiY29uIiwiY2hhaW5JZCIsInByb3ZpZGVyVHlwZSIsImJsb2NrY2hhaW4iLCJldGhlcnMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9DQUxfU1RPUkFHRV9LRVkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1pdFNhdmVkQ29ubmVjdGlvbiIsIk9iamVjdCIsImtleXMiLCJldmVudFNlbmRlciIsImRhdGEiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImVtaXROZXR3b3JrQ2hhbmdlIiwiZGVsZXRlQ29ubmVjdGlvbnMiLCJyZW1vdmVJdGVtIiwic2Vzc2lvblN0b3JhZ2UiLCJsb2FkQ29ubmVjdGlvbnMiLCJzdGF0ZSIsIl9hIiwiX2IiLCJfYyIsIl9pIiwiY29ubmVjdGlvbiIsImVfMSIsIl9kIiwiZ2V0SXRlbSIsInBhcnNlIiwiY29ubmVjdFdpdGgiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIndhbGxldFR5cGUiLCJjaGVja0Nvbm5lY3Rpb25Pbmx5IiwiRXJyb3IiLCJzaWduTWVzc2FnZSIsInByb3ZpZGVyIiwiZ2V0V2FsbGV0UHJvdmlkZXIiLCJnZXRTaWduZXIiLCJ0b0xvd2VyQ2FzZSIsImdldENvbm5lY3RlZFdhbGxldERhdGEiLCJ2YWx1ZXMiLCJyZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MiLCJyZWdpc3RlclByb3ZpZGVyIiwicHJvdmlkZXJOYW1lIiwiYWNjb3VudHMiLCJjdXJBY2NvdW50IiwiX3RoaXMiLCJsaXN0QWNjb3VudHMiLCJkZXRlY3ROZXR3b3JrIiwib24iLCJnZXRUb2tlblN0b3JlIiwiY2xlYXJDYWNoZWRUb2tlbnMiLCJlbnJpY2hUb2tlbkxvb2t1cERhdGFPbkNoYWluVG9rZW5zIiwiZGlzY29ubmVjdFdhbGxldCIsIl9jaGFpbklkIiwicmVhc29uIiwiaW5kZXhPZiIsIk1ldGFNYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Q29ubmVjdCIsImdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlIiwiY29ubmVjdG9yIiwiZXJyIiwicGF5bG9hZCIsImNhdGNoIiwiV2FsbGV0Q29ubmVjdFYyIiwid2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwidW5pdmVyc2FsV2FsbGV0Q29ubmVjdCIsIlFSQ29kZU1vZGFsIiwiZ2V0V2FsbGV0Q29ubmVjdFYyUHJvdmlkZXJJbnN0YW5jZSIsInVyaSIsImRlZmF1bHQiLCJvcGVuIiwiZ2V0VWkiLCJzaG93RXJyb3IiLCJpZCIsInRvcGljIiwiY29ubmVjdCIsIm5hbWVzcGFjZXMiLCJlaXAxNTUiLCJtZXRob2RzIiwiY2hhaW5zIiwiV0NfVjJfQ0hBSU5TIiwiZXZlbnRzIiwicnBjTWFwIiwiQ1VTVE9NX1JQQ1NfRk9SX1dDX1YyIiwicGFpcmluZ1RvcGljIiwiY2xvc2UiLCJUb3J1cyIsInRvcnVzIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiaW5pdCIsImxvZ2luIiwiUGhhbnRvbSIsImFjY291bnRBZGRyZXNzIiwic29sYW5hIiwicHVibGljS2V5IiwidG9CYXNlNTgiLCJTYWZlQ29ubmVjdCIsImdldFNhZmVDb25uZWN0UHJvdmlkZXIiLCJpbml0U2FmZUNvbm5lY3QiLCJmbG93U3Vic2NyaWJlIiwiZmNsIiwiY3VycmVudFVzZXIiLCJ1aSIsImFkZHIiLCJkaXNtaXNzTG9hZGVyIiwidXBkYXRlVUkiLCJlcnJvciIsIkZsb3ciLCJmbG93UHJvdmlkZXIiLCJmY2xfMSIsImVfMiIsImdldEZsb3dQcm92aWRlciIsInN1YnNjcmliZSIsImF1dGhlbnRpY2F0ZSIsInNhZmVDb25uZWN0QXZhaWxhYmxlIiwidW5kZWZpbmVkIiwiU2FmZUNvbm5lY3RQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=