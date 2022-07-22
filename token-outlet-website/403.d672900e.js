"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  88403: (e, t, n) => {
    n.r(t), n.d(t, {
      Web3WalletProvider: () => a,
      default: () => c
    });
    var r = n(241);
    var o = n(76677);
    var s = function(e, t, n, r) {
      return new (n || (n = Promise))((function(o, s) {
        function i(e) {
          try {
            c(r.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(r.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? o(e.value) : function(e) {
            return e instanceof n ? e : new n((function(t) {
              t(e);
            }));
          }(e.value).then(i, a);
        }
        c((r = r.apply(e, t || [])).next());
      }));
    };
    var i = function(e, t) {
      var n, r, o, s, i = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
      }), s;
      function a(s) {
        return function(a) {
          return function(s) {
            if (n) throw new TypeError("Generator is already executing.");
            for (;i; ) try {
              if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;
              switch (r = 0, o && (s = [ 2 & s[0], o.value ]), s[0]) {
               case 0:
               case 1:
                o = s;
                break;

               case 4:
                return i.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                i.label++, r = s[1], s = [ 0 ];
                continue;

               case 7:
                s = i.ops.pop(), i.trys.pop();
                continue;

               default:
                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  i = 0;
                  continue;
                }
                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                  i.label = s[1];
                  break;
                }
                if (6 === s[0] && i.label < o[1]) {
                  i.label = o[1], o = s;
                  break;
                }
                if (o && i.label < o[2]) {
                  i.label = o[2], i.ops.push(s);
                  break;
                }
                o[2] && i.ops.pop(), i.trys.pop();
                continue;
              }
              s = t.call(e, i);
            } catch (a) {
              s = [ 6, a ], r = 0;
            } finally {
              n = o = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    };
    var a = function() {
      function e() {
        this.state = {
          addresses: []
        };
      }
      return e.prototype.connectWith = function(e) {
        return s(this, void 0, void 0, (function() {
          var t;
          return i(this, (function(n) {
            switch (n.label) {
             case 0:
              if (!e) throw new Error('Please provide a Wallet type to connect with.');
              return this[e] ? [ 4, this[e]() ] : [ 3, 2 ];

             case 1:
              return t = n.sent(), (0, o.kg)(2, 'address', t), [ 2, t ];

             case 2:
              throw new Error('Wallet type not found');
            }
          }));
        }));
      }, e.prototype.signWith = function(e, t) {
        return s(this, void 0, void 0, (function() {
          var n;
          return i(this, (function(o) {
            switch (o.label) {
             case 0:
              return n = new r.Q(t.provider), [ 4, n.getSigner().signMessage(e) ];

             case 1:
              return [ 2, o.sent() ];
            }
          }));
        }));
      }, e.prototype.getConnectedWalletData = function() {
        return this.state.addresses;
      }, e.prototype.registerNewWalletAddress = function(e, t, n) {
        return this.state.addresses.push({
          address: e,
          chainId: t,
          provider: n
        }), this.state.addresses;
      }, e.prototype.MetaMask = function() {
        return s(this, void 0, void 0, (function() {
          var e, t, n;
          return i(this, (function(r) {
            switch (r.label) {
             case 0:
              return (0, o.kg)(2, 'connect MetaMask'), void 0 === window.ethereum ? [ 3, 3 ] : [ 4, window.ethereum.request({
                method: 'eth_requestAccounts'
              }) ];

             case 1:
              return e = r.sent(), [ 4, window.ethereum.request({
                method: 'eth_chainId'
              }) ];

             case 2:
              return t = r.sent(), n = e[0], [ 2, this.registerNewWalletAddress(n, parseInt(t, 16), ethereum) ];

             case 3:
              throw new Error("MetaMask is not available. Please check the extension is supported and active.");
            }
          }));
        }));
      }, e.prototype.WalletConnect = function() {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return i(this, (function(s) {
            switch (s.label) {
             case 0:
              return (0, o.kg)(2, 'connect Wallet Connect'), [ 4, Promise.all([ n.e(220), n.e(578), n.e(950) ]).then(n.bind(n, 26578)) ];

             case 1:
              return [ 4, s.sent().getWalletConnectProviderInstance() ];

             case 2:
              return [ 4, (e = s.sent()).enable() ];

             case 3:
              return s.sent(), [ 4, new r.Q(e).listAccounts() ];

             case 4:
              if (0 === (t = s.sent()).length) throw new Error("No accounts found via wallet-connect.");
              return [ 2, this.registerNewWalletAddress(t[0], '1', e) ];
            }
          }));
        }));
      }, e.prototype.Torus = function() {
        return s(this, void 0, void 0, (function() {
          var e, t;
          return i(this, (function(o) {
            switch (o.label) {
             case 0:
              return [ 4, Promise.all([ n.e(220), n.e(65), n.e(88) ]).then(n.bind(n, 42065)) ];

             case 1:
              return [ 4, o.sent().getTorusProviderInstance() ];

             case 2:
              return [ 4, (e = o.sent()).init() ];

             case 3:
              return o.sent(), [ 4, e.login() ];

             case 4:
              return o.sent(), [ 4, new r.Q(e.provider).listAccounts() ];

             case 5:
              if (0 === (t = o.sent()).length) throw new Error("No accounts found via wallet-connect.");
              return [ 2, this.registerNewWalletAddress(t[0], '1', e.provider) ];
            }
          }));
        }));
      }, e;
    }();
    const c = a;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUR4QlosSUFBV1osRUFBR3RCLFFBQ0RhLFFBQ1QsTUFBTSxJQUFJVSxNQUFNO2NBRXBCLE9BQU8sRUFBQyxHQUFHakIsS0FBS3lCLHlCQUF5QkcsRUFBUyxJQUFJLEtBQUtjLEVBQU1yQjs7QUFFN0U7QUFDSjtBQUNKLFNBQ09aO0FBQ1gsS0EzSHlCO0lBNkh6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2VuLW91dGxldC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0B0b2tlbnNjcmlwdC90b2tlbi1uZWdvdGlhdG9yL2Rpc3Qvd2FsbGV0L1dlYjNXYWxsZXRQcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG52YXIgV2ViM1dhbGxldFByb3ZpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWIzV2FsbGV0UHJvdmlkZXIoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGFkZHJlc3NlczogW10gfTtcbiAgICB9XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5jb25uZWN0V2l0aCA9IGZ1bmN0aW9uICh3YWxsZXRUeXBlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3YWxsZXRUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBXYWxsZXQgdHlwZSB0byBjb25uZWN0IHdpdGguJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbd2FsbGV0VHlwZV0pIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXNbd2FsbGV0VHlwZV0oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2FkZHJlc3MnLCBhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IEVycm9yKCdXYWxsZXQgdHlwZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLnNpZ25XaXRoID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHdhbGxldERhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBzaWduZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3YWxsZXREYXRhLnByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBzaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldENvbm5lY3RlZFdhbGxldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFkZHJlc3NlcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzID0gZnVuY3Rpb24gKGFkZHJlc3MsIGNoYWluSWQsIHByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYWRkcmVzc2VzLnB1c2goeyBhZGRyZXNzOiBhZGRyZXNzLCBjaGFpbklkOiBjaGFpbklkLCBwcm92aWRlcjogcHJvdmlkZXIgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFkZHJlc3NlcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuTWV0YU1hc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY2NvdW50cywgaGV4Q2hhaW5JZCwgYWNjb3VudEFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgTWV0YU1hc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9jaGFpbklkJyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhleENoYWluSWQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50QWRkcmVzcyA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50QWRkcmVzcywgcGFyc2VJbnQoaGV4Q2hhaW5JZCwgMTYpLCBldGhlcmV1bSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3YWxsZXRDb25uZWN0UHJvdmlkZXIsIHdhbGxldENvbm5lY3QsIHByb3ZpZGVyLCBhY2NvdW50cztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1dhbGxldENvbm5lY3RQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLmdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3YWxsZXRDb25uZWN0LmVuYWJsZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2FsbGV0Q29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmxpc3RBY2NvdW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWNjb3VudHMgZm91bmQgdmlhIHdhbGxldC1jb25uZWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0sICcxJywgd2FsbGV0Q29ubmVjdCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuVG9ydXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBUb3J1c1Byb3ZpZGVyLCB0b3J1cywgcHJvdmlkZXIsIGFjY291bnRzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydChcIi4vVG9ydXNQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvcnVzUHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFRvcnVzUHJvdmlkZXIuZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3J1cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5sb2dpbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodG9ydXMucHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5saXN0QWNjb3VudHMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdLCAnMScsIHRvcnVzLnByb3ZpZGVyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFdlYjNXYWxsZXRQcm92aWRlcjtcbn0oKSk7XG5leHBvcnQgeyBXZWIzV2FsbGV0UHJvdmlkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFdlYjNXYWxsZXRQcm92aWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdlYjNXYWxsZXRQcm92aWRlci5qcy5tYXAiXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsImFkb3B0IiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiZiIsInkiLCJ0IiwiZyIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidGhpcyIsIm4iLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJjYWxsIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsIldlYjNXYWxsZXRQcm92aWRlciIsInN0YXRlIiwiYWRkcmVzc2VzIiwicHJvdG90eXBlIiwiY29ubmVjdFdpdGgiLCJ3YWxsZXRUeXBlIiwiYWRkcmVzcyIsIl9hIiwiRXJyb3IiLCJzaWduV2l0aCIsIm1lc3NhZ2UiLCJ3YWxsZXREYXRhIiwicHJvdmlkZXIiLCJnZXRTaWduZXIiLCJzaWduTWVzc2FnZSIsImdldENvbm5lY3RlZFdhbGxldERhdGEiLCJyZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MiLCJjaGFpbklkIiwiTWV0YU1hc2siLCJhY2NvdW50cyIsImhleENoYWluSWQiLCJhY2NvdW50QWRkcmVzcyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcnNlSW50IiwiV2FsbGV0Q29ubmVjdCIsIndhbGxldENvbm5lY3QiLCJnZXRXYWxsZXRDb25uZWN0UHJvdmlkZXJJbnN0YW5jZSIsImVuYWJsZSIsImxpc3RBY2NvdW50cyIsIlRvcnVzIiwidG9ydXMiLCJnZXRUb3J1c1Byb3ZpZGVySW5zdGFuY2UiLCJpbml0IiwibG9naW4iXSwic291cmNlUm9vdCI6IiJ9