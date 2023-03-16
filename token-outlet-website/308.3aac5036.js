"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 308 ], {
  8403: (e, t, n) => {
    n.r(t), n.d(t, {
      Web3WalletProvider: () => c,
      default: () => l
    });
    var o = n(1023);
    var i = n(241);
    var s = n(6677);
    var r = function(e, t, n, o) {
      return new (n || (n = Promise))((function(i, s) {
        function r(e) {
          try {
            l(o.next(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          try {
            l(o.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function l(e) {
          e.done ? i(e.value) : function(e) {
            return e instanceof n ? e : new n((function(t) {
              t(e);
            }));
          }(e.value).then(r, c);
        }
        l((o = o.apply(e, t || [])).next());
      }));
    };
    class c {
      constructor(e, t, n) {
        this.client = e, this.walletOptions = t, this.safeConnectOptions = n, this.connections = {};
      }
      saveConnections() {
        let e = {};
        for (let t in this.connections) {
          let n = this.connections[t];
          e[t] = {
            address: n.address,
            chainId: n.chainId,
            providerType: n.providerType,
            blockchain: n.blockchain
          };
        }
        localStorage.setItem(c.LOCAL_STORAGE_KEY, JSON.stringify(e));
      }
      emitSavedConnection(e) {
        return Object.keys(this.connections).length && e ? (this.client.eventSender('connected-wallet', this.connections[e.toLocaleLowerCase()]), 
        this.connections[e.toLocaleLowerCase()]) : null;
      }
      emitNetworkChange(e) {
        if (e) return this.client.eventSender('network-change', e), e;
      }
      deleteConnections() {
        this.connections = {}, localStorage.removeItem(c.LOCAL_STORAGE_KEY), localStorage.removeItem('walletconnect'), sessionStorage.removeItem('CURRENT_USER');
      }
      loadConnections() {
        return r(this, void 0, void 0, (function*() {
          let e = localStorage.getItem(c.LOCAL_STORAGE_KEY);
          if (!e) return;
          let t = JSON.parse(e);
          if (t) for (let o in t) {
            let e = t[o];
            try {
              yield this.connectWith(e.providerType, !0);
            } catch (n) {
              console.log("Wallet couldn't connect: " + n.message), delete t[o], this.saveConnections(), this.emitSavedConnection(o);
            }
          }
        }));
      }
      connectWith(e, t = !1) {
        return r(this, void 0, void 0, (function*() {
          if (!e) throw new Error('Please provide a Wallet type to connect with.');
          if (this[e]) {
            const n = yield this[e](t);
            return (0, s.kg)(2, 'address', n), this.saveConnections(), this.emitSavedConnection(n), n;
          }
          throw new Error('Wallet type not found');
        }));
      }
      signMessage(e, t) {
        return r(this, void 0, void 0, (function*() {
          let n = this.getWalletProvider(e).getSigner(e);
          return yield n.signMessage(t);
        }));
      }
      getWalletProvider(e) {
        var t;
        if (e = e.toLowerCase(), !(null === (t = this.connections[e]) || void 0 === t ? void 0 : t.provider)) throw new Error('Wallet provider not found for address');
        return this.connections[e].provider;
      }
      getConnectedWalletData() {
        return Object.values(this.connections);
      }
      registerNewWalletAddress(e, t, n, i, s = "evm") {
        return this.connections[e.toLowerCase()] = {
          address: e,
          chainId: t,
          providerType: n,
          provider: i,
          blockchain: s,
          ethers: o
        }, e;
      }
      registerProvider(e, t) {
        return r(this, void 0, void 0, (function*() {
          const n = yield e.listAccounts();
          const o = (yield e.detectNetwork()).chainId;
          if (0 === n.length) throw new Error('No accounts found via wallet-connect.');
          let i = n[0];
          return this.registerNewWalletAddress(i, o, t, e), e.provider.on('accountsChanged', (n => {
            n && 0 !== n.length ? i !== n[0] && (delete this.connections[i.toLowerCase()], i = n[0], this.registerNewWalletAddress(i, o, t, e), 
            this.saveConnections(), this.emitSavedConnection(i), this.client.getTokenStore().clearCachedTokens(), this.client.enrichTokenLookupDataOnChainTokens()) : this.client.disconnectWallet();
          })), e.provider.on('chainChanged', (o => {
            this.registerNewWalletAddress(n[0], o, t, e), this.saveConnections(), this.emitNetworkChange(o);
          })), e.provider.on('disconnect', (e => {
            (null == e ? void 0 : e.message) && e.message.indexOf('MetaMask: Disconnected from chain') > -1 || this.client.disconnectWallet();
          })), n[0];
        }));
      }
      MetaMask(e) {
        return r(this, void 0, void 0, (function*() {
          if ((0, s.kg)(2, 'connect MetaMask'), void 0 !== window.ethereum) {
            yield window.ethereum.enable();
            const e = new i.Q(window.ethereum, 'any');
            return this.registerProvider(e, 'MetaMask');
          }
          throw new Error('MetaMask is not available. Please check the extension is supported and active.');
        }));
      }
      WalletConnect(e) {
        return r(this, void 0, void 0, (function*() {
          (0, s.kg)(2, 'connect Wallet Connect');
          const t = yield Promise.all([ n.e(418), n.e(444), n.e(883) ]).then(n.bind(n, 5444));
          const o = yield t.getWalletConnectProviderInstance(e);
          return new Promise(((t, n) => {
            e && o.connector.on('display_uri', ((e, t) => {
              n(new Error('Connection expired'));
            })), o.enable().then((() => {
              const e = new i.Q(o, 'any');
              t(this.registerProvider(e, 'WalletConnect'));
            })).catch((e => n(e)));
          }));
        }));
      }
      WalletConnectV2(e) {
        var t, o, c, l, a, d;
        return r(this, void 0, void 0, (function*() {
          (0, s.kg)(2, 'connect Wallet Connect V2');
          const h = yield Promise.all([ n.e(418), n.e(403) ]).then(n.bind(n, 6418));
          const v = yield h.getWalletConnectV2ProviderInstance();
          let u;
          if (v.on('display_uri', (e => r(this, void 0, void 0, (function*() {
            console.log('EVENT', 'QR Code Modal open'), u = (yield n.e(337).then(n.t.bind(n, 4337, 23))).default, u.open(e, (() => {
              this.client.getUi().showError('User closed modal');
            }));
          })))), v.on('session_delete', (({id: e, topic: t}) => {
            console.log('WC V2 EVENT', 'session_deleted'), this.client.disconnectWallet();
          })), !e) {
            let e;
            yield v.connect({
              namespaces: {
                eip155: {
                  methods: [ 'eth_sendTransaction', 'eth_signTransaction', 'eth_sign', 'personal_sign', 'eth_signTypedData' ],
                  chains: null !== (c = null === (o = null === (t = this.walletOptions) || void 0 === t ? void 0 : t.walletConnectV2) || void 0 === o ? void 0 : o.chains) && void 0 !== c ? c : h.WC_V2_DEFAULT_CHAINS,
                  events: [ 'chainChanged', 'accountsChanged' ],
                  rpcMap: null !== (d = null === (a = null === (l = this.walletOptions) || void 0 === l ? void 0 : l.walletConnectV2) || void 0 === a ? void 0 : a.rpcMap) && void 0 !== d ? d : h.WC_DEFAULT_RPC_MAP
                }
              },
              pairingTopic: null == e ? void 0 : e.topic
            }), u.close();
          }
          return new Promise(((e, t) => {
            v.enable().then((() => {
              const t = new i.Q(v, 'any');
              e(this.registerProvider(t, 'WalletConnectV2'));
            })).catch((e => {
              t(e);
            }));
          }));
        }));
      }
      Torus(e) {
        return r(this, void 0, void 0, (function*() {
          const e = yield n.e(681).then(n.bind(n, 4681));
          const t = yield e.getTorusProviderInstance();
          yield t.init(), yield t.login();
          const o = new i.Q(t.provider, 'any');
          return this.registerProvider(o, 'Torus');
        }));
      }
      Phantom(e) {
        return r(this, void 0, void 0, (function*() {
          if ((0, s.kg)(2, 'connect Phantom'), void 0 !== window.solana) {
            const e = (yield window.solana.connect()).publicKey.toBase58();
            return this.registerNewWalletAddress(e, 'mainnet-beta', 'phantom', window.solana, 'solana');
          }
          throw new Error('Phantom is not available. Please check the extension is supported and active.');
        }));
      }
      SafeConnect(e) {
        return r(this, void 0, void 0, (function*() {
          (0, s.kg)(2, 'connect SafeConnect');
          const e = yield this.getSafeConnectProvider();
          const t = yield e.initSafeConnect();
          return this.registerNewWalletAddress(t, 1, 'SafeConnect', e), t;
        }));
      }
      Flow(e) {
        return r(this, void 0, void 0, (function*() {
          const e = (yield n.e(623).then(n.bind(n, 9623))).getFlowProvider();
          yield e.currentUser.authenticate();
          let t = yield e.currentUser.snapshot();
          if (!t.addr) throw new Error('Failed to connect Flow wallet');
          return this.registerNewWalletAddress(t.addr, 1, 'flow', e), t.addr;
        }));
      }
      safeConnectAvailable() {
        return void 0 !== this.safeConnectOptions;
      }
      getSafeConnectProvider() {
        return r(this, void 0, void 0, (function*() {
          const {SafeConnectProvider: e} = yield Promise.resolve().then(n.bind(n, 7393));
          return new e(this.client.getUi(), this.safeConnectOptions);
        }));
      }
    }
    c.LOCAL_STORAGE_KEY = 'tn-wallet-connections';
    const l = c;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7VUFDVixNQUFNMkMsVUFBaUIzQyxLQUFLbUg7VUFDNUIsTUFBTS9HLFVBQWdCdUMsRUFBU3lFO1VBRS9CLE9BREFwSCxLQUFLOEMseUJBQXlCMUMsR0FBUyxHQUFHLGVBQWV1QyxJQUNsRHZDO0FBQ1g7QUFDSjtNQUNBaUgsS0FBS2xGO1FBQ0QsT0FBTzNELEVBQVV3QixXQUFNLFFBQVEsSUFBUTtVQUVuQyxNQUFNc0gsV0FEcUIsZ0NBQ0ZDO2dCQUNuQkQsRUFBSUUsWUFBWUM7VUFDdEIsSUFBSUQsVUFBb0JGLEVBQUlFLFlBQVlFO1VBQ3hDLEtBQUtGLEVBQVlHLE1BQ2IsTUFBTSxJQUFJdkYsTUFBTTtVQUVwQixPQURBcEMsS0FBSzhDLHlCQUF5QjBFLEVBQVlHLE1BQU0sR0FBRyxRQUFRTCxJQUNwREUsRUFBWUc7QUFDdkI7QUFDSjtNQUNBQztRQUNJLFlBQW1DQyxNQUE1QjdILEtBQUtEO0FBQ2hCO01BQ0FvSDtRQUNJLE9BQU8zSSxFQUFVd0IsV0FBTSxRQUFRLElBQVE7VUFDbkMsT0FBTSxxQkFBRThILFdBQThCO1VBQ3RDLE9BQU8sSUFBSUEsRUFBb0I5SCxLQUFLSCxPQUFPeUYsU0FBU3RGLEtBQUtEO0FBQzdEO0FBQ0o7O0lBRUpKLEVBQW1CZ0Isb0JBQW9CO0lBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRva2Vuc2NyaXB0L3Rva2VuLW5lZ290aWF0b3IvZGlzdC93YWxsZXQvV2ViM1dhbGxldFByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCBjbGFzcyBXZWIzV2FsbGV0UHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudCwgd2FsbGV0T3B0aW9ucywgc2FmZUNvbm5lY3RPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLndhbGxldE9wdGlvbnMgPSB3YWxsZXRPcHRpb25zO1xuICAgICAgICB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyA9IHNhZmVDb25uZWN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBzYXZlQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIGxldCBzYXZlZENvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGZvciAobGV0IGFkZHJlc3MgaW4gdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgICAgICAgbGV0IGNvbiA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc107XG4gICAgICAgICAgICBzYXZlZENvbm5lY3Rpb25zW2FkZHJlc3NdID0ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGNvbi5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGNvbi5jaGFpbklkLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyVHlwZTogY29uLnByb3ZpZGVyVHlwZSxcbiAgICAgICAgICAgICAgICBibG9ja2NoYWluOiBjb24uYmxvY2tjaGFpbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oV2ViM1dhbGxldFByb3ZpZGVyLkxPQ0FMX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZENvbm5lY3Rpb25zKSk7XG4gICAgfVxuICAgIGVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jb25uZWN0aW9ucykubGVuZ3RoICYmIGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmV2ZW50U2VuZGVyKCdjb25uZWN0ZWQtd2FsbGV0JywgdGhpcy5jb25uZWN0aW9uc1thZGRyZXNzLnRvTG9jYWxlTG93ZXJDYXNlKCldKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zW2FkZHJlc3MudG9Mb2NhbGVMb3dlckNhc2UoKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0TmV0d29ya0NoYW5nZShjaGFpbklkKSB7XG4gICAgICAgIGlmIChjaGFpbklkKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5ldmVudFNlbmRlcignbmV0d29yay1jaGFuZ2UnLCBjaGFpbklkKTtcbiAgICAgICAgICAgIHJldHVybiBjaGFpbklkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZUNvbm5lY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0ge307XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd3YWxsZXRjb25uZWN0Jyk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ0NVUlJFTlRfVVNFUicpO1xuICAgIH1cbiAgICBsb2FkQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFdlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgICAgICBpZiAoIWRhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IHN0YXRlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZm9yIChsZXQgYWRkcmVzcyBpbiBzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBjb25uZWN0aW9uID0gc3RhdGVbYWRkcmVzc107XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jb25uZWN0V2l0aChjb25uZWN0aW9uLnByb3ZpZGVyVHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGNvdWxkbid0IGNvbm5lY3Q6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdFdpdGgod2FsbGV0VHlwZSwgY2hlY2tDb25uZWN0aW9uT25seSA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoIXdhbGxldFR5cGUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIFdhbGxldCB0eXBlIHRvIGNvbm5lY3Qgd2l0aC4nKTtcbiAgICAgICAgICAgIGlmICh0aGlzW3dhbGxldFR5cGVdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHlpZWxkIHRoaXNbd2FsbGV0VHlwZV0oY2hlY2tDb25uZWN0aW9uT25seSk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdhZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCB0eXBlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbk1lc3NhZ2UoYWRkcmVzcywgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHByb3ZpZGVyID0gdGhpcy5nZXRXYWxsZXRQcm92aWRlcihhZGRyZXNzKTtcbiAgICAgICAgICAgIGxldCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgc2lnbmVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0V2FsbGV0UHJvdmlkZXIoYWRkcmVzcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghKChfYSA9IHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm92aWRlcikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dhbGxldCBwcm92aWRlciBub3QgZm91bmQgZm9yIGFkZHJlc3MnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzc10ucHJvdmlkZXI7XG4gICAgfVxuICAgIGdldENvbm5lY3RlZFdhbGxldERhdGEoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY29ubmVjdGlvbnMpO1xuICAgIH1cbiAgICByZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWRkcmVzcywgY2hhaW5JZCwgcHJvdmlkZXJUeXBlLCBwcm92aWRlciwgYmxvY2tjaGFpbiA9ICdldm0nKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnNbYWRkcmVzcy50b0xvd2VyQ2FzZSgpXSA9IHsgYWRkcmVzcywgY2hhaW5JZCwgcHJvdmlkZXJUeXBlLCBwcm92aWRlciwgYmxvY2tjaGFpbiwgZXRoZXJzIH07XG4gICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH1cbiAgICByZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCBwcm92aWRlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0geWllbGQgcHJvdmlkZXIubGlzdEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zdCBjaGFpbklkID0gKHlpZWxkIHByb3ZpZGVyLmRldGVjdE5ldHdvcmsoKSkuY2hhaW5JZDtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJBY2NvdW50LCBjaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLm9uKCdhY2NvdW50c0NoYW5nZWQnLCAoYWNjb3VudHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRzIHx8IGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudC5kaXNjb25uZWN0V2FsbGV0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1ckFjY291bnQgPT09IGFjY291bnRzWzBdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29ubmVjdGlvbnNbY3VyQWNjb3VudC50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgICBjdXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoY3VyQWNjb3VudCwgY2hhaW5JZCwgcHJvdmlkZXJOYW1lLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTYXZlZENvbm5lY3Rpb24oY3VyQWNjb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZ2V0VG9rZW5TdG9yZSgpLmNsZWFyQ2FjaGVkVG9rZW5zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZW5yaWNoVG9rZW5Mb29rdXBEYXRhT25DaGFpblRva2VucygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignY2hhaW5DaGFuZ2VkJywgKF9jaGFpbklkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0sIF9jaGFpbklkLCBwcm92aWRlck5hbWUsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE5ldHdvcmtDaGFuZ2UoX2NoYWluSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm92aWRlci5wcm92aWRlci5vbignZGlzY29ubmVjdCcsIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKHJlYXNvbiA9PT0gbnVsbCB8fCByZWFzb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlYXNvbi5tZXNzYWdlKSAmJiByZWFzb24ubWVzc2FnZS5pbmRleE9mKCdNZXRhTWFzazogRGlzY29ubmVjdGVkIGZyb20gY2hhaW4nKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZGlzY29ubmVjdFdhbGxldCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudHNbMF07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBNZXRhTWFzayhjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgTWV0YU1hc2snKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHlpZWxkIHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0sICdhbnknKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnTWV0YU1hc2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0YU1hc2sgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHRoZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGFuZCBhY3RpdmUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBXYWxsZXRDb25uZWN0KGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdFByb3ZpZGVyID0geWllbGQgaW1wb3J0KCcuL1dhbGxldENvbm5lY3RQcm92aWRlcicpO1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdCA9IHlpZWxkIHdhbGxldENvbm5lY3RQcm92aWRlci5nZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZShjaGVja0Nvbm5lY3Rpb25Pbmx5KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdC5jb25uZWN0b3Iub24oJ2Rpc3BsYXlfdXJpJywgKGVyciwgcGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ29ubmVjdGlvbiBleHBpcmVkJykpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAuZW5hYmxlKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3YWxsZXRDb25uZWN0LCAnYW55Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZWdpc3RlclByb3ZpZGVyKHByb3ZpZGVyLCAnV2FsbGV0Q29ubmVjdCcpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHJlamVjdChlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFdhbGxldENvbm5lY3RWMihjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFdhbGxldCBDb25uZWN0IFYyJyk7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0UHJvdmlkZXIgPSB5aWVsZCBpbXBvcnQoJy4vV2FsbGV0Q29ubmVjdFYyUHJvdmlkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHVuaXZlcnNhbFdhbGxldENvbm5lY3QgPSB5aWVsZCB3YWxsZXRDb25uZWN0UHJvdmlkZXIuZ2V0V2FsbGV0Q29ubmVjdFYyUHJvdmlkZXJJbnN0YW5jZSgpO1xuICAgICAgICAgICAgbGV0IFFSQ29kZU1vZGFsO1xuICAgICAgICAgICAgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5vbignZGlzcGxheV91cmknLCAodXJpKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VWRU5UJywgJ1FSIENvZGUgTW9kYWwgb3BlbicpO1xuICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsID0gKHlpZWxkIGltcG9ydCgnQHdhbGxldGNvbm5lY3QvcXJjb2RlLW1vZGFsJykpLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwub3Blbih1cmksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZ2V0VWkoKS5zaG93RXJyb3IoJ1VzZXIgY2xvc2VkIG1vZGFsJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB1bml2ZXJzYWxXYWxsZXRDb25uZWN0Lm9uKCdzZXNzaW9uX2RlbGV0ZScsICh7IGlkLCB0b3BpYyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dDIFYyIEVWRU5UJywgJ3Nlc3Npb25fZGVsZXRlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LmRpc2Nvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhaXJpbmc7XG4gICAgICAgICAgICAgICAgeWllbGQgdW5pdmVyc2FsV2FsbGV0Q29ubmVjdC5jb25uZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWlwMTU1OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogWydldGhfc2VuZFRyYW5zYWN0aW9uJywgJ2V0aF9zaWduVHJhbnNhY3Rpb24nLCAnZXRoX3NpZ24nLCAncGVyc29uYWxfc2lnbicsICdldGhfc2lnblR5cGVkRGF0YSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluczogKF9jID0gKF9iID0gKF9hID0gdGhpcy53YWxsZXRPcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eud2FsbGV0Q29ubmVjdFYyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2hhaW5zKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiB3YWxsZXRDb25uZWN0UHJvdmlkZXIuV0NfVjJfREVGQVVMVF9DSEFJTlMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiBbJ2NoYWluQ2hhbmdlZCcsICdhY2NvdW50c0NoYW5nZWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNNYXA6IChfZiA9IChfZSA9IChfZCA9IHRoaXMud2FsbGV0T3B0aW9ucykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLndhbGxldENvbm5lY3RWMikgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnJwY01hcCkgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogd2FsbGV0Q29ubmVjdFByb3ZpZGVyLldDX0RFRkFVTFRfUlBDX01BUCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhaXJpbmdUb3BpYzogcGFpcmluZyA9PT0gbnVsbCB8fCBwYWlyaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWlyaW5nLnRvcGljLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHVuaXZlcnNhbFdhbGxldENvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgLmVuYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodW5pdmVyc2FsV2FsbGV0Q29ubmVjdCwgJ2FueScpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ1dhbGxldENvbm5lY3RWMicpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBUb3J1cyhjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBUb3J1c1Byb3ZpZGVyID0geWllbGQgaW1wb3J0KCcuL1RvcnVzUHJvdmlkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHRvcnVzID0geWllbGQgVG9ydXNQcm92aWRlci5nZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHlpZWxkIHRvcnVzLmluaXQoKTtcbiAgICAgICAgICAgIHlpZWxkIHRvcnVzLmxvZ2luKCk7XG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih0b3J1cy5wcm92aWRlciwgJ2FueScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJQcm92aWRlcihwcm92aWRlciwgJ1RvcnVzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBQaGFudG9tKGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBQaGFudG9tJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5zb2xhbmEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHlpZWxkIHdpbmRvdy5zb2xhbmEuY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRBZGRyZXNzID0gY29ubmVjdGlvbi5wdWJsaWNLZXkudG9CYXNlNTgoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudEFkZHJlc3MsICdtYWlubmV0LWJldGEnLCAncGhhbnRvbScsIHdpbmRvdy5zb2xhbmEsICdzb2xhbmEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGhhbnRvbSBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYW5kIGFjdGl2ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFNhZmVDb25uZWN0KGNoZWNrQ29ubmVjdGlvbk9ubHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBTYWZlQ29ubmVjdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB5aWVsZCB0aGlzLmdldFNhZmVDb25uZWN0UHJvdmlkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB5aWVsZCBwcm92aWRlci5pbml0U2FmZUNvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFkZHJlc3MsIDEsICdTYWZlQ29ubmVjdCcsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgRmxvdyhjaGVja0Nvbm5lY3Rpb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBmbG93UHJvdmlkZXIgPSB5aWVsZCBpbXBvcnQoJy4vRmxvd1Byb3ZpZGVyJyk7XG4gICAgICAgICAgICBjb25zdCBmY2wgPSBmbG93UHJvdmlkZXIuZ2V0Rmxvd1Byb3ZpZGVyKCk7XG4gICAgICAgICAgICB5aWVsZCBmY2wuY3VycmVudFVzZXIuYXV0aGVudGljYXRlKCk7XG4gICAgICAgICAgICBsZXQgY3VycmVudFVzZXIgPSB5aWVsZCBmY2wuY3VycmVudFVzZXIuc25hcHNob3QoKTtcbiAgICAgICAgICAgIGlmICghY3VycmVudFVzZXIuYWRkcilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjb25uZWN0IEZsb3cgd2FsbGV0Jyk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhjdXJyZW50VXNlci5hZGRyLCAxLCAnZmxvdycsIGZjbCk7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFVzZXIuYWRkcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNhZmVDb25uZWN0QXZhaWxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYWZlQ29ubmVjdE9wdGlvbnMgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZ2V0U2FmZUNvbm5lY3RQcm92aWRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU2FmZUNvbm5lY3RQcm92aWRlciB9ID0geWllbGQgaW1wb3J0KCcuL1NhZmVDb25uZWN0UHJvdmlkZXInKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2FmZUNvbm5lY3RQcm92aWRlcih0aGlzLmNsaWVudC5nZXRVaSgpLCB0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbldlYjNXYWxsZXRQcm92aWRlci5MT0NBTF9TVE9SQUdFX0tFWSA9ICd0bi13YWxsZXQtY29ubmVjdGlvbnMnO1xuZXhwb3J0IGRlZmF1bHQgV2ViM1dhbGxldFByb3ZpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViM1dhbGxldFByb3ZpZGVyLmpzLm1hcCJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwiYWRvcHQiLCJ0aGVuIiwiYXBwbHkiLCJXZWIzV2FsbGV0UHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsImNsaWVudCIsIndhbGxldE9wdGlvbnMiLCJzYWZlQ29ubmVjdE9wdGlvbnMiLCJ0aGlzIiwiY29ubmVjdGlvbnMiLCJzYXZlQ29ubmVjdGlvbnMiLCJzYXZlZENvbm5lY3Rpb25zIiwiYWRkcmVzcyIsImNvbiIsImNoYWluSWQiLCJwcm92aWRlclR5cGUiLCJibG9ja2NoYWluIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwiSlNPTiIsInN0cmluZ2lmeSIsImVtaXRTYXZlZENvbm5lY3Rpb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZXZlbnRTZW5kZXIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImVtaXROZXR3b3JrQ2hhbmdlIiwiZGVsZXRlQ29ubmVjdGlvbnMiLCJyZW1vdmVJdGVtIiwic2Vzc2lvblN0b3JhZ2UiLCJsb2FkQ29ubmVjdGlvbnMiLCJkYXRhIiwiZ2V0SXRlbSIsInN0YXRlIiwicGFyc2UiLCJjb25uZWN0aW9uIiwiY29ubmVjdFdpdGgiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIndhbGxldFR5cGUiLCJjaGVja0Nvbm5lY3Rpb25Pbmx5IiwiRXJyb3IiLCJzaWduTWVzc2FnZSIsInNpZ25lciIsImdldFdhbGxldFByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiX2EiLCJ0b0xvd2VyQ2FzZSIsInByb3ZpZGVyIiwiZ2V0Q29ubmVjdGVkV2FsbGV0RGF0YSIsInZhbHVlcyIsInJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyIsImV0aGVycyIsInJlZ2lzdGVyUHJvdmlkZXIiLCJwcm92aWRlck5hbWUiLCJhY2NvdW50cyIsImxpc3RBY2NvdW50cyIsImRldGVjdE5ldHdvcmsiLCJjdXJBY2NvdW50Iiwib24iLCJnZXRUb2tlblN0b3JlIiwiY2xlYXJDYWNoZWRUb2tlbnMiLCJlbnJpY2hUb2tlbkxvb2t1cERhdGFPbkNoYWluVG9rZW5zIiwiZGlzY29ubmVjdFdhbGxldCIsIl9jaGFpbklkIiwicmVhc29uIiwiaW5kZXhPZiIsIk1ldGFNYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwid2FsbGV0Q29ubmVjdCIsImdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlIiwiY29ubmVjdG9yIiwiZXJyIiwicGF5bG9hZCIsImNhdGNoIiwiV2FsbGV0Q29ubmVjdFYyIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsInVuaXZlcnNhbFdhbGxldENvbm5lY3QiLCJnZXRXYWxsZXRDb25uZWN0VjJQcm92aWRlckluc3RhbmNlIiwiUVJDb2RlTW9kYWwiLCJ1cmkiLCJkZWZhdWx0Iiwib3BlbiIsImdldFVpIiwic2hvd0Vycm9yIiwiaWQiLCJ0b3BpYyIsInBhaXJpbmciLCJjb25uZWN0IiwibmFtZXNwYWNlcyIsImVpcDE1NSIsIm1ldGhvZHMiLCJjaGFpbnMiLCJ3YWxsZXRDb25uZWN0VjIiLCJXQ19WMl9ERUZBVUxUX0NIQUlOUyIsImV2ZW50cyIsInJwY01hcCIsIldDX0RFRkFVTFRfUlBDX01BUCIsInBhaXJpbmdUb3BpYyIsImNsb3NlIiwiVG9ydXMiLCJUb3J1c1Byb3ZpZGVyIiwidG9ydXMiLCJnZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UiLCJpbml0IiwibG9naW4iLCJQaGFudG9tIiwic29sYW5hIiwiYWNjb3VudEFkZHJlc3MiLCJwdWJsaWNLZXkiLCJ0b0Jhc2U1OCIsIlNhZmVDb25uZWN0IiwiZ2V0U2FmZUNvbm5lY3RQcm92aWRlciIsImluaXRTYWZlQ29ubmVjdCIsIkZsb3ciLCJmY2wiLCJnZXRGbG93UHJvdmlkZXIiLCJjdXJyZW50VXNlciIsImF1dGhlbnRpY2F0ZSIsInNuYXBzaG90IiwiYWRkciIsInNhZmVDb25uZWN0QXZhaWxhYmxlIiwidW5kZWZpbmVkIiwiU2FmZUNvbm5lY3RQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=