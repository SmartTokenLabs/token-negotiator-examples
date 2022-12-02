"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  88403: (e, t, n) => {
    n.r(t), n.d(t, {
      Web3WalletProvider: () => u,
      default: () => l
    });
    var r = n(91023);
    var o = n(241);
    var i = n(76677);
    var s = n(25108);
    var c = function(e, t, n, r) {
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
    var a = function(e, t) {
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
      function c(i) {
        return function(c) {
          return function(i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (;s; ) try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
              switch (r = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
               case 0:
               case 1:
                o = i;
                break;

               case 4:
                return s.label++, {
                  value: i[1],
                  done: !1
                };

               case 5:
                s.label++, r = i[1], i = [ 0 ];
                continue;

               case 7:
                i = s.ops.pop(), s.trys.pop();
                continue;

               default:
                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                  s = 0;
                  continue;
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                  s.label = i[1];
                  break;
                }
                if (6 === i[0] && s.label < o[1]) {
                  s.label = o[1], o = i;
                  break;
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(i);
                  break;
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue;
              }
              i = t.call(e, s);
            } catch (c) {
              i = [ 6, c ], r = 0;
            } finally {
              n = o = 0;
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
    var u = function() {
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
        return Object.keys(this.connections).length && e ? (this.client.eventSender.emitConnectedWalletInstance(this.connections[e.toLocaleLowerCase()]), 
        this.connections[e.toLocaleLowerCase()]) : null;
      }, e.prototype.emitNetworkChange = function(e) {
        if (e) return this.client.eventSender.emitNetworkChange(e), e;
      }, e.prototype.deleteConnections = function() {
        this.connections = {}, localStorage.removeItem(e.LOCAL_STORAGE_KEY), localStorage.removeItem("walletconnect");
      }, e.prototype.loadConnections = function() {
        return c(this, void 0, void 0, (function() {
          var t, n, r, o, i, c, u, l;
          return a(this, (function(a) {
            switch (a.label) {
             case 0:
              if (!(t = localStorage.getItem(e.LOCAL_STORAGE_KEY))) return [ 2 ];
              if (!(n = JSON.parse(t))) return [ 2 ];
              for (o in r = [], n) r.push(o);
              i = 0, a.label = 1;

             case 1:
              if (!(i < r.length)) return [ 3, 6 ];
              c = r[i], u = n[c], a.label = 2;

             case 2:
              return a.trys.push([ 2, 4, , 5 ]), [ 4, this.connectWith(u.providerType, !0) ];

             case 3:
              return a.sent(), [ 3, 5 ];

             case 4:
              return l = a.sent(), s.log("Wallet couldn't connect" + l.message), delete n[c], this.saveConnections(), this.emitSavedConnection(c), 
              [ 3, 5 ];

             case 5:
              return i++, [ 3, 1 ];

             case 6:
              return [ 2 ];
            }
          }));
        }));
      }, e.prototype.connectWith = function(e, t) {
        return void 0 === t && (t = !1), c(this, void 0, void 0, (function() {
          var n;
          return a(this, (function(r) {
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
        return c(this, void 0, void 0, (function() {
          var n;
          return a(this, (function(r) {
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
        if (e = e.toLowerCase(), !(null === (t = this.connections[e]) || void 0 === t ? void 0 : t.provider)) throw new Error("Wallet provider not found for address");
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
        return c(this, void 0, void 0, (function() {
          var n, r, o;
          var i = this;
          return a(this, (function(s) {
            switch (s.label) {
             case 0:
              return [ 4, e.listAccounts() ];

             case 1:
              return n = s.sent(), [ 4, e.detectNetwork() ];

             case 2:
              if (r = s.sent().chainId, 0 === n.length) throw new Error("No accounts found via wallet-connect.");
              return o = n[0], this.registerNewWalletAddress(o, r, t, e), e.provider.on("accountsChanged", (function(n) {
                o !== n[0] && (delete i.connections[o.toLowerCase()], o = n[0], i.registerNewWalletAddress(o, r, t, e), i.saveConnections(), 
                i.emitSavedConnection(o), i.client.getTokenStore().clearCachedTokens(), i.client.enrichTokenLookupDataOnChainTokens());
              })), e.provider.on("chainChanged", (function(r) {
                i.registerNewWalletAddress(n[0], r, t, e), i.saveConnections(), i.emitNetworkChange(r);
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
              return t.sent(), e = new o.Q(window.ethereum, "any"), [ 2, this.registerProvider(e, "MetaMask") ];

             case 2:
              throw new Error("MetaMask is not available. Please check the extension is supported and active.");
            }
          }));
        }));
      }, e.prototype.WalletConnect = function(e) {
        return c(this, void 0, void 0, (function() {
          var t;
          var r = this;
          return a(this, (function(s) {
            switch (s.label) {
             case 0:
              return (0, i.kg)(2, 'connect Wallet Connect'), [ 4, Promise.all([ n.e(220), n.e(578), n.e(717) ]).then(n.bind(n, 26578)) ];

             case 1:
              return [ 4, s.sent().getWalletConnectProviderInstance(e) ];

             case 2:
              return t = s.sent(), [ 2, new Promise((function(n, i) {
                e && t.connector.on("display_uri", (function(e, t) {
                  i(new Error("Connection expired"));
                })), t.enable().then((function() {
                  var e = new o.Q(t);
                  n(r.registerProvider(e, "WalletConnect"));
                })).catch((function(e) {
                  return i(e);
                }));
              })) ];
            }
          }));
        }));
      }, e.prototype.Torus = function(e) {
        return c(this, void 0, void 0, (function() {
          var e, t;
          return a(this, (function(r) {
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
              return [ 4, Promise.resolve().then(n.bind(n, 67393)) ];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVaUMsV0FBTSxRQUFRLElBQVE7VUFFbkMsT0FBT2QsRUFBWWMsT0FBTSxTQUFVdUM7WUFDL0IsUUFBUUEsRUFBRzlDO2FBQ1AsS0FBSztjQUFHLE9BQU8sRUFBQyxHQUFHOzthQUNuQixLQUFLO2NBRUQsT0FBTyxFQUFDLEdBQUcsS0FEWDRHLEdBQXVCOUQsRUFBRzdDLE9BQVEyRyxxQkFDQ3JHLEtBQUtVLE9BQU80RixTQUFTdEcsS0FBS1c7O0FBRXpFO0FBQ0o7QUFDSixTQUNBRixFQUFtQmUsb0JBQW9CLHlCQUNoQ2Y7QUFDWCxLQTFTeUI7SUE0U3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRva2Vuc2NyaXB0L3Rva2VuLW5lZ290aWF0b3IvZGlzdC93YWxsZXQvV2ViM1dhbGxldFByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbnZhciBXZWIzV2FsbGV0UHJvdmlkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYjNXYWxsZXRQcm92aWRlcihjbGllbnQsIHNhZmVDb25uZWN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyA9IHNhZmVDb25uZWN0T3B0aW9ucztcbiAgICB9XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYXZlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzYXZlZENvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGZvciAodmFyIGFkZHJlc3MgaW4gdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgICAgICAgdmFyIGNvbiA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc107XG4gICAgICAgICAgICBzYXZlZENvbm5lY3Rpb25zW2FkZHJlc3NdID0ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGNvbi5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGNvbi5jaGFpbklkLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyVHlwZTogY29uLnByb3ZpZGVyVHlwZSxcbiAgICAgICAgICAgICAgICBibG9ja2NoYWluOiBjb24uYmxvY2tjaGFpbixcbiAgICAgICAgICAgICAgICBldGhlcnM6IGV0aGVyc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXZWIzV2FsbGV0UHJvdmlkZXIuTE9DQUxfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHNhdmVkQ29ubmVjdGlvbnMpKTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZW1pdFNhdmVkQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbm5lY3Rpb25zKS5sZW5ndGggJiZcbiAgICAgICAgICAgIGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyLmVtaXRDb25uZWN0ZWRXYWxsZXRJbnN0YW5jZSh0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb2NhbGVMb3dlckNhc2UoKV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvY2FsZUxvd2VyQ2FzZSgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmVtaXROZXR3b3JrQ2hhbmdlID0gZnVuY3Rpb24gKGNoYWluSWQpIHtcbiAgICAgICAgaWYgKGNoYWluSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyLmVtaXROZXR3b3JrQ2hhbmdlKGNoYWluSWQpO1xuICAgICAgICAgICAgcmV0dXJuIGNoYWluSWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZGVsZXRlQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ3YWxsZXRjb25uZWN0XCIpO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5sb2FkQ29ubmVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBzdGF0ZSwgX2EsIF9iLCBfaSwgYWRkcmVzcywgY29ubmVjdGlvbiwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9iIGluIHN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnB1c2goX2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IF9hLmxlbmd0aCkpIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmNvbm5lY3RXaXRoKGNvbm5lY3Rpb24ucHJvdmlkZXJUeXBlLCB0cnVlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGNvdWxkbid0IGNvbm5lY3RcIiArIGVfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZVthZGRyZXNzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuY29ubmVjdFdpdGggPSBmdW5jdGlvbiAod2FsbGV0VHlwZSwgY2hlY2tDb25uZWN0aW9uT25seSkge1xuICAgICAgICBpZiAoY2hlY2tDb25uZWN0aW9uT25seSA9PT0gdm9pZCAwKSB7IGNoZWNrQ29ubmVjdGlvbk9ubHkgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FsbGV0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgV2FsbGV0IHR5cGUgdG8gY29ubmVjdCB3aXRoLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW3dhbGxldFR5cGVdKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzW3dhbGxldFR5cGVdKGNoZWNrQ29ubmVjdGlvbk9ubHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnYWRkcmVzcycsIGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdXYWxsZXQgdHlwZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNpZ25NZXNzYWdlID0gZnVuY3Rpb24gKGFkZHJlc3MsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBzaWduZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IHRoaXMuZ2V0V2FsbGV0UHJvdmlkZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0V2FsbGV0UHJvdmlkZXIgPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghKChfYSA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm92aWRlcikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXYWxsZXQgcHJvdmlkZXIgbm90IGZvdW5kIGZvciBhZGRyZXNzXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzXS5wcm92aWRlcjtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29ubmVjdGVkV2FsbGV0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jb25uZWN0aW9ucyk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyA9IGZ1bmN0aW9uIChhZGRyZXNzLCBjaGFpbklkLCBwcm92aWRlclR5cGUsIHByb3ZpZGVyLCBibG9ja2NoYWluKSB7XG4gICAgICAgIGlmIChibG9ja2NoYWluID09PSB2b2lkIDApIHsgYmxvY2tjaGFpbiA9ICdldm0nOyB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvd2VyQ2FzZSgpXSA9IHsgYWRkcmVzczogYWRkcmVzcywgY2hhaW5JZDogY2hhaW5JZCwgcHJvdmlkZXJUeXBlOiBwcm92aWRlclR5cGUsIHByb3ZpZGVyOiBwcm92aWRlciwgYmxvY2tjaGFpbjogYmxvY2tjaGFpbiwgZXRoZXJzOiBldGhlcnMgfTtcbiAgICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnJlZ2lzdGVyUHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvdmlkZXIsIHByb3ZpZGVyTmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWNjb3VudHMsIGNoYWluSWQsIGN1ckFjY291bnQ7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIHByb3ZpZGVyLmxpc3RBY2NvdW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmRldGVjdE5ldHdvcmsoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQgPSAoX2Euc2VudCgpKS5jaGFpbklkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJBY2NvdW50LCBjaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGZ1bmN0aW9uIChhY2NvdW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJBY2NvdW50ID09PSBhY2NvdW50c1swXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5jb25uZWN0aW9uc1tjdXJBY2NvdW50LnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VyQWNjb3VudCwgY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdFNhdmVkQ29ubmVjdGlvbihjdXJBY2NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQuZ2V0VG9rZW5TdG9yZSgpLmNsZWFyQ2FjaGVkVG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50LmVucmljaFRva2VuTG9va3VwRGF0YU9uQ2hhaW5Ub2tlbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIub24oXCJjaGFpbkNoYW5nZWRcIiwgZnVuY3Rpb24gKF9jaGFpbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdLCBfY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdE5ldHdvcmtDaGFuZ2UoX2NoYWluSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFjY291bnRzWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLk1ldGFNYXNrID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IE1ldGFNYXNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykpIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSwgXCJhbnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgXCJNZXRhTWFza1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKFwiTWV0YU1hc2sgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHRoZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGFuZCBhY3RpdmUuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuV2FsbGV0Q29ubmVjdCA9IGZ1bmN0aW9uIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3YWxsZXRDb25uZWN0UHJvdmlkZXIsIHdhbGxldENvbm5lY3Q7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFdhbGxldCBDb25uZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGltcG9ydChcIi4vV2FsbGV0Q29ubmVjdFByb3ZpZGVyXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdFByb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3YWxsZXRDb25uZWN0UHJvdmlkZXIuZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UoY2hlY2tDb25uZWN0aW9uT25seSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0LmNvbm5lY3Rvci5vbihcImRpc3BsYXlfdXJpXCIsIGZ1bmN0aW9uIChlcnIsIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiQ29ubmVjdGlvbiBleHBpcmVkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3QuZW5hYmxlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2FsbGV0Q29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzLnJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXIsIFwiV2FsbGV0Q29ubmVjdFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiByZWplY3QoZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlRvcnVzID0gZnVuY3Rpb24gKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFRvcnVzUHJvdmlkZXIsIHRvcnVzLCBwcm92aWRlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1RvcnVzUHJvdmlkZXJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3J1c1Byb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBUb3J1c1Byb3ZpZGVyLmdldFRvcnVzUHJvdmlkZXJJbnN0YW5jZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9ydXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRvcnVzLmluaXQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMubG9naW4oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHRvcnVzLnByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCBcIlRvcnVzXCIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLlBoYW50b20gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uLCBhY2NvdW50QWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBQaGFudG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2Ygd2luZG93LnNvbGFuYSAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuc29sYW5hLmNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50QWRkcmVzcyA9IGNvbm5lY3Rpb24ucHVibGljS2V5LnRvQmFzZTU4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRBZGRyZXNzLCBcIm1haW5uZXQtYmV0YVwiLCAncGhhbnRvbScsIHdpbmRvdy5zb2xhbmEsICdzb2xhbmEnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKFwiTWV0YU1hc2sgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHRoZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGFuZCBhY3RpdmUuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuU2FmZUNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlciwgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBTYWZlQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmdldFNhZmVDb25uZWN0UHJvdmlkZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5pbml0U2FmZUNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhZGRyZXNzLCAxLCBcIlNhZmVDb25uZWN0XCIsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYWZlQ29ubmVjdEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldFNhZmVDb25uZWN0UHJvdmlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBTYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydChcIi4vU2FmZUNvbm5lY3RQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhZmVDb25uZWN0UHJvdmlkZXIgPSAoX2Euc2VudCgpKS5TYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgU2FmZUNvbm5lY3RQcm92aWRlcih0aGlzLmNsaWVudC5nZXRVaSgpLCB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSA9IFwidG4td2FsbGV0LWNvbm5lY3Rpb25zXCI7XG4gICAgcmV0dXJuIFdlYjNXYWxsZXRQcm92aWRlcjtcbn0oKSk7XG5leHBvcnQgeyBXZWIzV2FsbGV0UHJvdmlkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFdlYjNXYWxsZXRQcm92aWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdlYjNXYWxsZXRQcm92aWRlci5qcy5tYXAiXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsImFkb3B0IiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiZiIsInkiLCJ0IiwiZyIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidGhpcyIsIm4iLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJjYWxsIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsIldlYjNXYWxsZXRQcm92aWRlciIsImNsaWVudCIsInNhZmVDb25uZWN0T3B0aW9ucyIsImNvbm5lY3Rpb25zIiwicHJvdG90eXBlIiwic2F2ZUNvbm5lY3Rpb25zIiwic2F2ZWRDb25uZWN0aW9ucyIsImFkZHJlc3MiLCJjb24iLCJjaGFpbklkIiwicHJvdmlkZXJUeXBlIiwiYmxvY2tjaGFpbiIsImV0aGVycyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJMT0NBTF9TVE9SQUdFX0tFWSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWl0U2F2ZWRDb25uZWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImV2ZW50U2VuZGVyIiwiZW1pdENvbm5lY3RlZFdhbGxldEluc3RhbmNlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlbWl0TmV0d29ya0NoYW5nZSIsImRlbGV0ZUNvbm5lY3Rpb25zIiwicmVtb3ZlSXRlbSIsImxvYWRDb25uZWN0aW9ucyIsImRhdGEiLCJzdGF0ZSIsIl9hIiwiX2IiLCJfaSIsImNvbm5lY3Rpb24iLCJlXzEiLCJfYyIsImdldEl0ZW0iLCJwYXJzZSIsImNvbm5lY3RXaXRoIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ3YWxsZXRUeXBlIiwiY2hlY2tDb25uZWN0aW9uT25seSIsIkVycm9yIiwic2lnbk1lc3NhZ2UiLCJwcm92aWRlciIsImdldFdhbGxldFByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwidG9Mb3dlckNhc2UiLCJnZXRDb25uZWN0ZWRXYWxsZXREYXRhIiwidmFsdWVzIiwicmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzIiwicmVnaXN0ZXJQcm92aWRlciIsInByb3ZpZGVyTmFtZSIsImFjY291bnRzIiwiY3VyQWNjb3VudCIsIl90aGlzIiwibGlzdEFjY291bnRzIiwiZGV0ZWN0TmV0d29yayIsIm9uIiwiZ2V0VG9rZW5TdG9yZSIsImNsZWFyQ2FjaGVkVG9rZW5zIiwiZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucyIsIl9jaGFpbklkIiwiTWV0YU1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRDb25uZWN0IiwiZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UiLCJjb25uZWN0b3IiLCJlcnIiLCJwYXlsb2FkIiwiY2F0Y2giLCJUb3J1cyIsInRvcnVzIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiaW5pdCIsImxvZ2luIiwiUGhhbnRvbSIsImFjY291bnRBZGRyZXNzIiwic29sYW5hIiwiY29ubmVjdCIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwiU2FmZUNvbm5lY3QiLCJnZXRTYWZlQ29ubmVjdFByb3ZpZGVyIiwiaW5pdFNhZmVDb25uZWN0Iiwic2FmZUNvbm5lY3RBdmFpbGFibGUiLCJ1bmRlZmluZWQiLCJTYWZlQ29ubmVjdFByb3ZpZGVyIiwiZ2V0VWkiXSwic291cmNlUm9vdCI6IiJ9