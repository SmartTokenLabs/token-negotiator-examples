"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 403 ], {
  88403: (e, t, n) => {
    n.r(t), n.d(t, {
      Web3WalletProvider: () => c,
      default: () => u
    });
    var r = n(241);
    var o = n(76677);
    var s = n(25108);
    var i = function(e, t, n, r) {
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
    var a = function(e, t) {
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
    var c = function() {
      function e(e) {
        this.state = {
          addresses: []
        }, this.safeConnectOptions = e;
      }
      return e.prototype.connectWith = function(e) {
        return i(this, void 0, void 0, (function() {
          var t;
          return a(this, (function(n) {
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
        return i(this, void 0, void 0, (function() {
          var n;
          return a(this, (function(o) {
            switch (o.label) {
             case 0:
              return n = new r.Q(t), [ 4, n.getSigner().signMessage(e) ];

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
        return i(this, void 0, void 0, (function() {
          var e, t, n;
          return a(this, (function(r) {
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
        return i(this, void 0, void 0, (function() {
          var e, t;
          return a(this, (function(s) {
            switch (s.label) {
             case 0:
              return (0, o.kg)(2, 'connect Wallet Connect'), [ 4, Promise.all([ n.e(220), n.e(578), n.e(717) ]).then(n.bind(n, 26578)) ];

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
        return i(this, void 0, void 0, (function() {
          var e, t;
          return a(this, (function(o) {
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
      }, e.prototype.SafeConnect = function() {
        return i(this, void 0, void 0, (function() {
          var e, t;
          return a(this, (function(n) {
            switch (n.label) {
             case 0:
              return (0, o.kg)(2, 'connect SafeConnect'), [ 4, this.getSafeConnectProvider() ];

             case 1:
              return [ 4, (e = n.sent()).initSafeConnect() ];

             case 2:
              return t = n.sent(), s.log(t), this.registerNewWalletAddress(t, "1", e), [ 2, t ];
            }
          }));
        }));
      }, e.prototype.safeConnectAvailable = function() {
        return void 0 !== this.safeConnectOptions;
      }, e.prototype.getSafeConnectProvider = function() {
        return i(this, void 0, void 0, (function() {
          return a(this, (function(e) {
            switch (e.label) {
             case 0:
              return [ 4, Promise.resolve().then(n.bind(n, 83603)) ];

             case 1:
              return [ 2, new (0, e.sent().SafeConnectProvider)(this.safeConnectOptions) ];
            }
          }));
        }));
      }, e;
    }();
    const u = c;
  }
} ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUI7O2FBQ3hCLEtBQUs7Y0FFRCxJQUF3QixPQUR4QlosSUFBV1osRUFBR3hCLFFBQ0RhLFFBQ1QsTUFBTSxJQUFJWSxNQUFNO2NBRXBCLE9BQU8sRUFBQyxHQUFHbkIsS0FBSzJCLHlCQUF5QkcsRUFBUyxJQUFJLEtBQUtjLEVBQU1yQjs7QUFFN0U7QUFDSjtBQUNKLFNBQ0FkLEVBQW1CSyxVQUFVa0MsY0FBYztRQUN2QyxPQUFPakYsRUFBVWlDLFdBQU0sUUFBUSxJQUFRO1VBQ25DLElBQUl1QixHQUFVTjtVQUNkLE9BQU8vQixFQUFZYyxPQUFNLFNBQVVrQjtZQUMvQixRQUFRQSxFQUFHekI7YUFDUCxLQUFLO2NBRUQsUUFEQSxTQUFPLEdBQUcsd0JBQ0gsRUFBQyxHQUFHTyxLQUFLaUQ7O2FBQ3BCLEtBQUs7Y0FFRCxPQUFPLEVBQUMsSUFEUjFCLElBQVdMLEVBQUd4QixRQUNNd0Q7O2FBQ3hCLEtBQUs7Y0FJRCxPQUhBakMsSUFBVUMsRUFBR3hCLFFBQ2J5RCxFQUFRQyxJQUFJbkMsSUFDWmpCLEtBQUsyQix5QkFBeUJWLEdBQVMsS0FBS00sSUFDckMsRUFBQyxHQUFHTjs7QUFFdkI7QUFDSjtBQUNKLFNBQ0FSLEVBQW1CSyxVQUFVdUMsdUJBQXVCO1FBQ2hELFlBQW1DQyxNQUE1QnRELEtBQUthO0FBQ2hCLFNBQ0FKLEVBQW1CSyxVQUFVbUMseUJBQXlCO1FBQ2xELE9BQU9sRixFQUFVaUMsV0FBTSxRQUFRLElBQVE7VUFFbkMsT0FBT2QsRUFBWWMsT0FBTSxTQUFVa0I7WUFDL0IsUUFBUUEsRUFBR3pCO2FBQ1AsS0FBSztjQUFHLE9BQU8sRUFBQyxHQUFHOzthQUNuQixLQUFLO2NBRUQsT0FBTyxFQUFDLEdBQUcsS0FEWDhELEdBQXVCckMsRUFBR3hCLE9BQVE2RCxxQkFDQ3ZELEtBQUthOztBQUVwRDtBQUNKO0FBQ0osU0FDT0o7QUFDWCxLQWhLeUI7SUFrS3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW4tb3V0bGV0LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHRva2Vuc2NyaXB0L3Rva2VuLW5lZ290aWF0b3IvZGlzdC93YWxsZXQvV2ViM1dhbGxldFByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbnZhciBXZWIzV2FsbGV0UHJvdmlkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYjNXYWxsZXRQcm92aWRlcihzYWZlQ29ubmVjdFVybCkge1xuICAgICAgICB0aGlzLnN0YXRlID0geyBhZGRyZXNzZXM6IFtdIH07XG4gICAgICAgIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zID0gc2FmZUNvbm5lY3RVcmw7XG4gICAgfVxuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuY29ubmVjdFdpdGggPSBmdW5jdGlvbiAod2FsbGV0VHlwZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FsbGV0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgV2FsbGV0IHR5cGUgdG8gY29ubmVjdCB3aXRoLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW3dhbGxldFR5cGVdKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzW3dhbGxldFR5cGVdKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdhZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGFkZHJlc3NdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyBFcnJvcignV2FsbGV0IHR5cGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zaWduV2l0aCA9IGZ1bmN0aW9uIChtZXNzYWdlLCB3YWxsZXRQcm92aWRlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIsIHNpZ25lcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdhbGxldFByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBzaWduZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiwgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldENvbm5lY3RlZFdhbGxldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFkZHJlc3NlcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzID0gZnVuY3Rpb24gKGFkZHJlc3MsIGNoYWluSWQsIHByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYWRkcmVzc2VzLnB1c2goeyBhZGRyZXNzOiBhZGRyZXNzLCBjaGFpbklkOiBjaGFpbklkLCBwcm92aWRlcjogcHJvdmlkZXIgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFkZHJlc3NlcztcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuTWV0YU1hc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY2NvdW50cywgaGV4Q2hhaW5JZCwgYWNjb3VudEFkZHJlc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoMiwgJ2Nvbm5lY3QgTWV0YU1hc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSkgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9jaGFpbklkJyB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhleENoYWluSWQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50QWRkcmVzcyA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlZ2lzdGVyTmV3V2FsbGV0QWRkcmVzcyhhY2NvdW50QWRkcmVzcywgcGFyc2VJbnQoaGV4Q2hhaW5JZCwgMTYpLCBldGhlcmV1bSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBjaGVjayB0aGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBhbmQgYWN0aXZlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLldhbGxldENvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3YWxsZXRDb25uZWN0UHJvdmlkZXIsIHdhbGxldENvbm5lY3QsIHByb3ZpZGVyLCBhY2NvdW50cztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigyLCAnY29ubmVjdCBXYWxsZXQgQ29ubmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBpbXBvcnQoXCIuL1dhbGxldENvbm5lY3RQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RQcm92aWRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgd2FsbGV0Q29ubmVjdFByb3ZpZGVyLmdldFdhbGxldENvbm5lY3RQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3YWxsZXRDb25uZWN0LmVuYWJsZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2FsbGV0Q29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmxpc3RBY2NvdW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWNjb3VudHMgZm91bmQgdmlhIHdhbGxldC1jb25uZWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0sICcxJywgd2FsbGV0Q29ubmVjdCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlYjNXYWxsZXRQcm92aWRlci5wcm90b3R5cGUuVG9ydXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBUb3J1c1Byb3ZpZGVyLCB0b3J1cywgcHJvdmlkZXIsIGFjY291bnRzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydChcIi4vVG9ydXNQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvcnVzUHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFRvcnVzUHJvdmlkZXIuZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3J1cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdG9ydXMuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0b3J1cy5sb2dpbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIodG9ydXMucHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBwcm92aWRlci5saXN0QWNjb3VudHMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY291bnRzIGZvdW5kIHZpYSB3YWxsZXQtY29ubmVjdC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdLCAnMScsIHRvcnVzLnByb3ZpZGVyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5TYWZlQ29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyLCBhZGRyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKDIsICdjb25uZWN0IFNhZmVDb25uZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuZ2V0U2FmZUNvbm5lY3RQcm92aWRlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHByb3ZpZGVyLmluaXRTYWZlQ29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1dhbGxldEFkZHJlc3MoYWRkcmVzcywgXCIxXCIsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgYWRkcmVzc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2ViM1dhbGxldFByb3ZpZGVyLnByb3RvdHlwZS5zYWZlQ29ubmVjdEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZUNvbm5lY3RPcHRpb25zICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBXZWIzV2FsbGV0UHJvdmlkZXIucHJvdG90eXBlLmdldFNhZmVDb25uZWN0UHJvdmlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBTYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIGltcG9ydChcIi4vU2FmZUNvbm5lY3RQcm92aWRlclwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhZmVDb25uZWN0UHJvdmlkZXIgPSAoX2Euc2VudCgpKS5TYWZlQ29ubmVjdFByb3ZpZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgU2FmZUNvbm5lY3RQcm92aWRlcih0aGlzLnNhZmVDb25uZWN0T3B0aW9ucyldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBXZWIzV2FsbGV0UHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgV2ViM1dhbGxldFByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBXZWIzV2FsbGV0UHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWIzV2FsbGV0UHJvdmlkZXIuanMubWFwIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhZG9wdCIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImYiLCJ5IiwidCIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJXZWIzV2FsbGV0UHJvdmlkZXIiLCJzYWZlQ29ubmVjdFVybCIsInN0YXRlIiwiYWRkcmVzc2VzIiwic2FmZUNvbm5lY3RPcHRpb25zIiwicHJvdG90eXBlIiwiY29ubmVjdFdpdGgiLCJ3YWxsZXRUeXBlIiwiYWRkcmVzcyIsIl9hIiwiRXJyb3IiLCJzaWduV2l0aCIsIm1lc3NhZ2UiLCJ3YWxsZXRQcm92aWRlciIsInByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwic2lnbk1lc3NhZ2UiLCJnZXRDb25uZWN0ZWRXYWxsZXREYXRhIiwicmVnaXN0ZXJOZXdXYWxsZXRBZGRyZXNzIiwiY2hhaW5JZCIsIk1ldGFNYXNrIiwiYWNjb3VudHMiLCJoZXhDaGFpbklkIiwiYWNjb3VudEFkZHJlc3MiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJzZUludCIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRDb25uZWN0IiwiZ2V0V2FsbGV0Q29ubmVjdFByb3ZpZGVySW5zdGFuY2UiLCJlbmFibGUiLCJsaXN0QWNjb3VudHMiLCJUb3J1cyIsInRvcnVzIiwiZ2V0VG9ydXNQcm92aWRlckluc3RhbmNlIiwiaW5pdCIsImxvZ2luIiwiU2FmZUNvbm5lY3QiLCJnZXRTYWZlQ29ubmVjdFByb3ZpZGVyIiwiaW5pdFNhZmVDb25uZWN0IiwiY29uc29sZSIsImxvZyIsInNhZmVDb25uZWN0QXZhaWxhYmxlIiwidW5kZWZpbmVkIiwiU2FmZUNvbm5lY3RQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=