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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmMsb0JBQW9CLHlCQUNoQ2Q7QUFDWCxLQS9SeUI7SUFpU3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRva2Vuc2NyaXB0L3Rva2VuLW5lZ290aWF0b3IvZGlzdC93YWxsZXQvV2ViM1dhbGxldFByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbnZhciBXZWIzV2FsbGV0UHJvdmlkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYjNXYWxsZXRQcm92aWRlcihjbGllbnQsIHNhZmVDb25uZWN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyA9IHNhZmVDb25uZWN0T3B0aW9ucztcbiAgICB9XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYXZlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzYXZlZENvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGZvciAodmFyIGFkZHJlc3MgaW4gdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgICAgICAgdmFyIGNvbiA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc107XG4gICAgICAgICAgICBzYXZlZENvbm5lY3Rpb25zW2FkZHJlc3NdID0ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGNvbi5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGNvbi5jaGFpbklkLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyVHlwZTogY29uLnByb3ZpZGVyVHlwZSxcbiAgICAgICAgICAgICAgICBibG9ja2NoYWluOiBjb24uYmxvY2tjaGFpblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHNhdmVkQ29ubmVjdGlvbnMpKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZW1pdFNhdmVkQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbm5lY3Rpb25zKS5sZW5ndGggJiZcbiAgICAgICAgICAgIGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyLmVtaXRDb25uZWN0ZWRXYWxsZXRJbnN0YW5jZSh0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb2NhbGVMb3dlckNhc2UoKV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvY2FsZUxvd2VyQ2FzZSgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmRlbGV0ZUNvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FsbGV0Y29ubmVjdFwiKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUubG9hZENvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSwgc3RhdGUsIF9hLCBfYiwgX2ksIGFkZHJlc3MsIGNvbm5lY3Rpb24sIGVfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfYiBpbiBzdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5wdXNoKF9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2kgPCBfYS5sZW5ndGgpKSByZXR1cm4gWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5jb25uZWN0V2l0aChjb25uZWN0aW9uLnByb3ZpZGVyVHlwZSwgdHJ1ZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhbGxldCBjb3VsZG4ndCBjb25uZWN0XCIgKyBlXzEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGVbYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0U2F2ZWRDb25uZWN0aW9uKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmNvbm5lY3RXaXRoID0gZnVuY3Rpb24gKHdhbGxldFR5cGUsIGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgaWYgKGNoZWNrQ29ubmVjdGlvbk9ubHkgPT09IHZvaWQgMCkgeyBjaGVja0Nvbm5lY3Rpb25Pbmx5ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhbGxldFR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIFdhbGxldCB0eXBlIHRvIGNvbm5lY3Qgd2l0aC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1t3YWxsZXRUeXBlXSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpc1t3YWxsZXRUeXBlXShjaGVja0Nvbm5lY3Rpb25Pbmx5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2FkZHJlc3MnLCBhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcignV2FsbGV0IHR5cGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zaWduTWVzc2FnZSA9IGZ1bmN0aW9uIChhZGRyZXNzLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlciwgc2lnbmVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSB0aGlzLmdldFdhbGxldFByb3ZpZGVyKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBzaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldFdhbGxldFByb3ZpZGVyID0gZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoISgoX2EgPSB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3NdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvdmlkZXIpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2FsbGV0IHByb3ZpZGVyIG5vdCBmb3VuZCBmb3IgYWRkcmVzc1wiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10ucHJvdmlkZXI7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldENvbm5lY3RlZFdhbGxldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY29ubmVjdGlvbnMpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MgPSBmdW5jdGlvbiAoYWRkcmVzcywgY2hhaW5JZCwgcHJvdmlkZXJUeXBlLCBwcm92aWRlciwgYmxvY2tjaGFpbikge1xuICAgICAgICBpZiAoYmxvY2tjaGFpbiA9PT0gdm9pZCAwKSB7IGJsb2NrY2hhaW4gPSAnZXZtJzsgfVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb3dlckNhc2UoKV0gPSB7IGFkZHJlc3M6IGFkZHJlc3MsIGNoYWluSWQ6IGNoYWluSWQsIHByb3ZpZGVyVHlwZTogcHJvdmlkZXJUeXBlLCBwcm92aWRlcjogcHJvdmlkZXIsIGJsb2NrY2hhaW46IGJsb2NrY2hhaW4gfTtcbiAgICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyUHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvdmlkZXIsIHByb3ZpZGVyTmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWNjb3VudHMsIGNoYWluSWQsIGN1ckFjY291bnQ7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIHByb3ZpZGVyLmxpc3RBY2NvdW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmRldGVjdE5ldHdvcmsoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQgPSAoX2Euc2VudCgpKS5jaGFpbklkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJBY2NvdW50LCBjaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGZ1bmN0aW9uIChhY2NvdW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJBY2NvdW50ID09PSBhY2NvdW50c1swXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBjaGFuZ2VkOiBcIiArIGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuY29ubmVjdGlvbnNbY3VyQWNjb3VudC50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGN1ckFjY291bnQsIGNoYWluSWQsIHByb3ZpZGVyTmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oY3VyQWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmdldFRva2VuU3RvcmUoKS5jbGVhckNhY2hlZFRva2VucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudC5lbnJpY2hUb2tlbkxvb2t1cERhdGFPbkNoYWluVG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWNjb3VudHNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuTWV0YU1hc2sgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgTWV0YU1hc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCBcIk1ldGFNYXNrXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoXCJNZXRhTWFzayBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5XYWxsZXRDb25uZWN0ID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdhbGxldENvbm5lY3RQcm92aWRlciwgd2FsbGV0Q29ubmVjdDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgV2FsbGV0IENvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgaW1wb3J0KFwiLi9XYWxsZXRDb25uZWN0UHJvdmlkZXJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZShjaGVja0Nvbm5lY3Rpb25Pbmx5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QuY29ubmVjdG9yLm9uKFwiZGlzcGxheV91cmlcIiwgZnVuY3Rpb24gKGVyciwgcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJDb25uZWN0aW9uIGV4cGlyZWRcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdC5lbmFibGUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3YWxsZXRDb25uZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgXCJXYWxsZXRDb25uZWN0XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHJlamVjdChlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuVG9ydXMgPSBmdW5jdGlvbiAoY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgVG9ydXNQcm92aWRlciwgdG9ydXMsIHByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydChcIi4vVG9ydXNQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvcnVzUHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFRvcnVzUHJvdmlkZXIuZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3J1cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5sb2dpbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodG9ydXMucHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsIFwiVG9ydXNcIildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuUGhhbnRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24sIGFjY291bnRBZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFBoYW50b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuc29sYW5hICE9PSAndW5kZWZpbmVkJykpIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdpbmRvdy5zb2xhbmEuY29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRBZGRyZXNzID0gY29ubmVjdGlvbi5wdWJsaWNLZXkudG9CYXNlNTgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudEFkZHJlc3MsIFwibWFpbm5ldC1iZXRhXCIsICdwaGFudG9tJywgd2luZG93LnNvbGFuYSwgJ3NvbGFuYScpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgRXJyb3IoXCJNZXRhTWFzayBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5TYWZlQ29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFNhZmVDb25uZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuZ2V0U2FmZUNvbm5lY3RQcm92aWRlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmluaXRTYWZlQ29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFkZHJlc3MsIDEsIFwiU2FmZUNvbm5lY3RcIiwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBhZGRyZXNzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNhZmVDb25uZWN0QXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0U2FmZUNvbm5lY3RQcm92aWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFNhZmVDb25uZWN0UHJvdmlkZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgaW1wb3J0KFwiLi9TYWZlQ29ubmVjdFByb3ZpZGVyXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgU2FmZUNvbm5lY3RQcm92aWRlciA9IChfYS5zZW50KCkpLlNhZmVDb25uZWN0UHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG5ldyBTYWZlQ29ubmVjdFByb3ZpZGVyKHRoaXMuY2xpZW50LmdldFVpKCksIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZID0gXCJ0bi13YWxsZXQtY29ubmVjdGlvbnNcIjtcbiAgICByZXR1cm4gV2ViM1dhbGxldFByb3ZpZGVyO1xufSgpKTtcbmV4cG9ydCB7IFdlYjNXYWxsZXRQcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgV2ViM1dhbGxldFByb3ZpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViM1dhbGxldFByb3ZpZGVyLmpzLm1hcCJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwiYWRvcHQiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJmIiwieSIsInQiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ0aGlzIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiV2ViM1dhbGxldFByb3ZpZGVyIiwiY2xpZW50Iiwic2FmZUNvbm5lY3RPcHRpb25zIiwiY29ubmVjdGlvbnMiLCJwcm90b3R5cGUiLCJzYXZlQ29ubmVjdGlvbnMiLCJzYXZlZENvbm5lY3Rpb25zIiwiYWRkcmVzcyIsImNvbiIsImNoYWluSWQiLCJwcm92aWRlclR5cGUiLCJibG9ja2NoYWluIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwiSlNPTiIsInN0cmluZ2lmeSIsImVtaXRTYXZlZENvbm5lY3Rpb24iLCJPYmplY3QiLCJrZXlzIiwiZXZlbnRTZW5kZXIiLCJlbWl0Q29ubmVjdGVkV2FsbGV0SW5zdGFuY2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImRlbGV0ZUNvbm5lY3Rpb25zIiwicmVtb3ZlSXRlbSIsImxvYWRDb25uZWN0aW9ucyIsImRhdGEiLCJzdGF0ZSIsIl9hIiwiX2IiLCJfaSIsImNvbm5lY3Rpb24iLCJlXzEiLCJfYyIsImdldEl0ZW0iLCJwYXJzZSIsImNvbm5lY3RXaXRoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ3YWxsZXRUeXBlIiwiY2hlY2tDb25uZWN0aW9uT25seSIsIkVycm9yIiwic2lnbk1lc3NhZ2UiLCJwcm92aWRlciIsImdldFdhbGxldFByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwidG9Mb3dlckNhc2UiLCJnZXRDb25uZWN0ZWRXYWxsZXREYXRhIiwidmFsdWVzIiwicmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzIiwicmVnaXN0ZXJQcm92aWRlciIsInByb3ZpZGVyTmFtZSIsImFjY291bnRzIiwiY3VyQWNjb3VudCIsIl90aGlzIiwibGlzdEFjY291bnRzIiwiZGV0ZWN0TmV0d29yayIsIm9uIiwiZ2V0VG9rZW5TdG9yZSIsImNsZWFyQ2FjaGVkVG9rZW5zIiwiZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucyIsIk1ldGFNYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Q29ubmVjdCIsImdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlIiwiY29ubmVjdG9yIiwiZXJyIiwicGF5bG9hZCIsImNhdGNoIiwiVG9ydXMiLCJ0b3J1cyIsImdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSIsImluaXQiLCJsb2dpbiIsIlBoYW50b20iLCJhY2NvdW50QWRkcmVzcyIsInNvbGFuYSIsImNvbm5lY3QiLCJwdWJsaWNLZXkiLCJ0b0Jhc2U1OCIsIlNhZmVDb25uZWN0IiwiZ2V0U2FmZUNvbm5lY3RQcm92aWRlciIsImluaXRTYWZlQ29ubmVjdCIsInNhZmVDb25uZWN0QXZhaWxhYmxlIiwidW5kZWZpbmVkIiwiU2FmZUNvbm5lY3RQcm92aWRlciIsImdldFVpIl0sInNvdXJjZVJvb3QiOiIifQ==