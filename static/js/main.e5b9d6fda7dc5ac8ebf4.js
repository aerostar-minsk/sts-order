"use strict";
(self.webpackChunktransit_app = self.webpackChunktransit_app || []).push([
    [179],
    {
        1874: (e, r, n) => {
            var t = n(5893),
                i = n(745),
                s = n(6974);
            var a;
            !(function (e) {
                (e.home = "/"),
                    (e.signature = "/signature"),
                    (e.input = "/input"),
                    (e.print = "/print");
            })(a || (a = {}));
            var c = n(8573),
                l = n(9711);
            var o = n(5998),
                u = function () {
                    return (0, o.I0)();
                },
                d = o.v9,
                h = n(9639),
                f = n(1063),
                p = n(8523),
                v = n(3416),
                m = function () {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                },
                j = (0, h.oM)({
                    name: "order",
                    initialState: (function () {
                        try {
                            var e = localStorage.getItem("currentOrder");
                            if (e) return JSON.parse(e);
                        } catch (e) {}
                        return {
                            id: (0, v.x0)(),
                            title: {
                                "номер заявки:": "",
                                "номер автомобиля:": "",
                                "ФИО водителя:": "",
                                "аэропорт:": "Шереметьево",
                            },
                            isTrailer: !1,
                            date: (0, f.Z)(new Date(), "dd MMMM yyy", {
                                locale: p.Z,
                            }),
                            list: {},
                        };
                    })(),
                    reducers: {
                        createOrder: function (e) {
                            return {
                                id: (0, v.x0)(),
                                title: {
                                    "номер заявки:": "",
                                    "номер автомобиля:": "",
                                    "ФИО водителя:": "",
                                    "аэропорт:": "Шереметьево",
                                },
                                isTrailer: !1,
                                date: (0, f.Z)(new Date(), "dd MMMM yyy", {
                                    locale: p.Z,
                                }),
                                list: {},
                            };
                        },
                        openOrder: function (e, r) {
                            return r.payload;
                        },
                        changeTitleOrder: function (e, r) {
                            var n;
                            return m(m({}, e), {
                                title: m(
                                    m({}, e.title),
                                    ((n = {}),
                                    (n[r.payload.key] = r.payload.value),
                                    n)
                                ),
                            });
                        },
                        changeCheckBox: function (e, r) {
                            return m(m({}, e), { isTrailer: r.payload });
                        },
                        addedItemOrder: function (e, r) {
                            var n,
                                t = m(
                                    m({}, e.list),
                                    (((n = {})[(0, v.x0)()] = r.payload), n)
                                );
                            return m(m({}, e), { list: t });
                        },
                        deleteItemOrder: function (e, r) {
                            var n = m({}, e.list);
                            return (
                                delete n[r.payload], m(m({}, e), { list: n })
                            );
                        },
                    },
                }),
                x = j.reducer,
                y = j.actions,
                _ = function (e) {
                    return e.order;
                },
                g = n(248),
                b = {
                    apiKey: "AIzaSyDw4ayGEMU91arEYuI1fUuiR6mhGdeQEog",
                    authDomain: "transit-order-sts.firebaseapp.com",
                    projectId: "transit-order-sts",
                    storageBucket: "transit-order-sts.firebasestorage.app",
                    messagingSenderId: "443227230096",
                    appId: "1:443227230096:web:878514396f7ec397a22d15",
                    measurementId: "G-T8XLV43L1B",
                },
                w = (0, n(3977).ZF)(b),
                N = (0, g.ad)(w),
                O = Boolean(b && b.apiKey && b.apiKey.length > 0),
                k = n(2257),
                S = (0, k.v0)(w),
                C = function (e, r, n, t) {
                    return new (n || (n = Promise))(function (i, s) {
                        function a(e) {
                            try {
                                l(t.next(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function c(e) {
                            try {
                                l(t.throw(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function l(e) {
                            var r;
                            e.done
                                ? i(e.value)
                                : ((r = e.value),
                                  r instanceof n
                                      ? r
                                      : new n(function (e) {
                                            e(r);
                                        })).then(a, c);
                        }
                        l((t = t.apply(e, r || [])).next());
                    });
                },
                A = function (e, r) {
                    var n,
                        t,
                        i,
                        s,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (s = { next: c(0), throw: c(1), return: c(2) }),
                        "function" == typeof Symbol &&
                            (s[Symbol.iterator] = function () {
                                return this;
                            }),
                        s
                    );
                    function c(s) {
                        return function (c) {
                            return (function (s) {
                                if (n)
                                    throw new TypeError(
                                        "Generator is already executing."
                                    );
                                for (; a; )
                                    try {
                                        if (
                                            ((n = 1),
                                            t &&
                                                (i =
                                                    2 & s[0]
                                                        ? t.return
                                                        : s[0]
                                                        ? t.throw ||
                                                          ((i = t.return) &&
                                                              i.call(t),
                                                          0)
                                                        : t.next) &&
                                                !(i = i.call(t, s[1])).done)
                                        )
                                            return i;
                                        switch (
                                            ((t = 0),
                                            i && (s = [2 & s[0], i.value]),
                                            s[0])
                                        ) {
                                            case 0:
                                            case 1:
                                                i = s;
                                                break;
                                            case 4:
                                                return (
                                                    a.label++,
                                                    { value: s[1], done: !1 }
                                                );
                                            case 5:
                                                a.label++,
                                                    (t = s[1]),
                                                    (s = [0]);
                                                continue;
                                            case 7:
                                                (s = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(
                                                        (i =
                                                            (i = a.trys)
                                                                .length > 0 &&
                                                            i[i.length - 1]) ||
                                                        (6 !== s[0] &&
                                                            2 !== s[0])
                                                    )
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (
                                                    3 === s[0] &&
                                                    (!i ||
                                                        (s[1] > i[0] &&
                                                            s[1] < i[3]))
                                                ) {
                                                    a.label = s[1];
                                                    break;
                                                }
                                                if (
                                                    6 === s[0] &&
                                                    a.label < i[1]
                                                ) {
                                                    (a.label = i[1]), (i = s);
                                                    break;
                                                }
                                                if (i && a.label < i[2]) {
                                                    (a.label = i[2]),
                                                        a.ops.push(s);
                                                    break;
                                                }
                                                i[2] && a.ops.pop(),
                                                    a.trys.pop();
                                                continue;
                                        }
                                        s = r.call(e, a);
                                    } catch (e) {
                                        (s = [6, e]), (t = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0,
                                };
                            })([s, c]);
                        };
                    }
                },
                Z = function () {
                    var e = S.currentUser ? S.currentUser.uid : null;
                    if (!e) throw new Error("No auth user");
                    return { uid: e, base: "users/".concat(e) };
                },
                T = function (e) {
                    return C(void 0, void 0, void 0, function () {
                        var r;
                        return A(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return (
                                        (r = Z().base),
                                        [
                                            4,
                                            (0, g.pl)(
                                                (0, g.JU)(
                                                    N,
                                                    "".concat(r, "/orders"),
                                                    e.id
                                                ),
                                                e,
                                                { merge: !0 }
                                            ),
                                        ]
                                    );
                                case 1:
                                    return n.sent(), [2];
                            }
                        });
                    });
                },
                P = function (e) {
                    return C(void 0, void 0, void 0, function () {
                        var r;
                        return A(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return (
                                        (r = Z().base),
                                        [
                                            4,
                                            (0, g.oe)(
                                                (0, g.JU)(
                                                    N,
                                                    "".concat(r, "/orders"),
                                                    e
                                                )
                                            ),
                                        ]
                                    );
                                case 1:
                                    return n.sent(), [2];
                            }
                        });
                    });
                },
                z = "current",
                I = function (e) {
                    return C(void 0, void 0, void 0, function () {
                        var r;
                        return A(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return (
                                        (r = Z().base),
                                        [
                                            4,
                                            (0, g.pl)(
                                                (0, g.JU)(
                                                    N,
                                                    "".concat(r, "/signatures"),
                                                    z
                                                ),
                                                e,
                                                { merge: !0 }
                                            ),
                                        ]
                                    );
                                case 1:
                                    return n.sent(), [2];
                            }
                        });
                    });
                },
                B = function () {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                },
                M = function (e, r, n, t) {
                    return new (n || (n = Promise))(function (i, s) {
                        function a(e) {
                            try {
                                l(t.next(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function c(e) {
                            try {
                                l(t.throw(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function l(e) {
                            var r;
                            e.done
                                ? i(e.value)
                                : ((r = e.value),
                                  r instanceof n
                                      ? r
                                      : new n(function (e) {
                                            e(r);
                                        })).then(a, c);
                        }
                        l((t = t.apply(e, r || [])).next());
                    });
                },
                W = function (e, r) {
                    var n,
                        t,
                        i,
                        s,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (s = { next: c(0), throw: c(1), return: c(2) }),
                        "function" == typeof Symbol &&
                            (s[Symbol.iterator] = function () {
                                return this;
                            }),
                        s
                    );
                    function c(s) {
                        return function (c) {
                            return (function (s) {
                                if (n)
                                    throw new TypeError(
                                        "Generator is already executing."
                                    );
                                for (; a; )
                                    try {
                                        if (
                                            ((n = 1),
                                            t &&
                                                (i =
                                                    2 & s[0]
                                                        ? t.return
                                                        : s[0]
                                                        ? t.throw ||
                                                          ((i = t.return) &&
                                                              i.call(t),
                                                          0)
                                                        : t.next) &&
                                                !(i = i.call(t, s[1])).done)
                                        )
                                            return i;
                                        switch (
                                            ((t = 0),
                                            i && (s = [2 & s[0], i.value]),
                                            s[0])
                                        ) {
                                            case 0:
                                            case 1:
                                                i = s;
                                                break;
                                            case 4:
                                                return (
                                                    a.label++,
                                                    { value: s[1], done: !1 }
                                                );
                                            case 5:
                                                a.label++,
                                                    (t = s[1]),
                                                    (s = [0]);
                                                continue;
                                            case 7:
                                                (s = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(
                                                        (i =
                                                            (i = a.trys)
                                                                .length > 0 &&
                                                            i[i.length - 1]) ||
                                                        (6 !== s[0] &&
                                                            2 !== s[0])
                                                    )
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (
                                                    3 === s[0] &&
                                                    (!i ||
                                                        (s[1] > i[0] &&
                                                            s[1] < i[3]))
                                                ) {
                                                    a.label = s[1];
                                                    break;
                                                }
                                                if (
                                                    6 === s[0] &&
                                                    a.label < i[1]
                                                ) {
                                                    (a.label = i[1]), (i = s);
                                                    break;
                                                }
                                                if (i && a.label < i[2]) {
                                                    (a.label = i[2]),
                                                        a.ops.push(s);
                                                    break;
                                                }
                                                i[2] && a.ops.pop(),
                                                    a.trys.pop();
                                                continue;
                                        }
                                        s = r.call(e, a);
                                    } catch (e) {
                                        (s = [6, e]), (t = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0,
                                };
                            })([s, c]);
                        };
                    }
                },
                F = (0, h.oM)({
                    name: "ordersList",
                    initialState: (function () {
                        try {
                            var e = localStorage.getItem("ordersList");
                            if (e) return JSON.parse(e);
                        } catch (e) {}
                        return {};
                    })(),
                    reducers: {
                        addedOrderToList: function (e, r) {
                            var n;
                            return B(
                                B({}, e),
                                (((n = {})[r.payload.id] = r.payload), n)
                            );
                        },
                        deleteOrderFromList: function (e, r) {
                            var n = B({}, e);
                            return delete n[r.payload], n;
                        },
                        replaceOrders: function (e, r) {
                            return r.payload;
                        },
                    },
                }),
                L = F.reducer,
                E = F.actions,
                J = function (e) {
                    return e.ordersList;
                },
                U = function (e) {
                    return function () {
                        return M(void 0, void 0, void 0, function () {
                            return W(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, T(e)];
                                    case 1:
                                        return r.sent(), [2];
                                }
                            });
                        });
                    };
                },
                K = n(3218),
                G = function () {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                },
                V = function () {
                    var e = (0, s.s0)(),
                        r = u(),
                        n = d(J);
                    return (0, t.jsxs)(
                        "div",
                        G(
                            { className: "ordersList___Xvjly" },
                            {
                                children: [
                                    (0, t.jsx)(
                                        "div",
                                        G(
                                            { className: "title___MctaA" },
                                            { children: "список заявок:" }
                                        )
                                    ),
                                    Object.keys(n).length
                                        ? (0, t.jsx)(
                                              "div",
                                              G(
                                                  {
                                                      className:
                                                          "subOrdersList___w3Cih",
                                                  },
                                                  {
                                                      children: (0, t.jsx)(
                                                          "div",
                                                          G(
                                                              {
                                                                  className:
                                                                      "list___G_2i9",
                                                              },
                                                              {
                                                                  children:
                                                                      Object.keys(
                                                                          n
                                                                      ).map(
                                                                          function (
                                                                              i
                                                                          ) {
                                                                              return (0,
                                                                              t.jsxs)(
                                                                                  "div",
                                                                                  G(
                                                                                      {
                                                                                          className:
                                                                                              "orderContainer___wbusa",
                                                                                      },
                                                                                      {
                                                                                          children:
                                                                                              [
                                                                                                  (0,
                                                                                                  t.jsxs)(
                                                                                                      "div",
                                                                                                      G(
                                                                                                          {
                                                                                                              className:
                                                                                                                  "order___MFDi7",
                                                                                                              onClick:
                                                                                                                  function () {
                                                                                                                      return (
                                                                                                                          (t =
                                                                                                                              i),
                                                                                                                          r(
                                                                                                                              y.openOrder(
                                                                                                                                  n[
                                                                                                                                      t
                                                                                                                                  ]
                                                                                                                              )
                                                                                                                          ),
                                                                                                                          void e(
                                                                                                                              a.input
                                                                                                                          )
                                                                                                                      );
                                                                                                                      var t;
                                                                                                                  },
                                                                                                          },
                                                                                                          {
                                                                                                              children:
                                                                                                                  [
                                                                                                                      (0,
                                                                                                                      t.jsx)(
                                                                                                                          "span",
                                                                                                                          {
                                                                                                                              children:
                                                                                                                                  n[
                                                                                                                                      i
                                                                                                                                  ]
                                                                                                                                      .title[
                                                                                                                                      "номер заявки:"
                                                                                                                                  ],
                                                                                                                          }
                                                                                                                      ),
                                                                                                                      " ",
                                                                                                                      "от ",
                                                                                                                      (0,
                                                                                                                      t.jsx)(
                                                                                                                          "span",
                                                                                                                          {
                                                                                                                              children:
                                                                                                                                  n[
                                                                                                                                      i
                                                                                                                                  ]
                                                                                                                                      .date,
                                                                                                                          }
                                                                                                                      ),
                                                                                                                  ],
                                                                                                          }
                                                                                                      ),
                                                                                                      i
                                                                                                  ),
                                                                                                  (0,
                                                                                                  t.jsx)(
                                                                                                      "div",
                                                                                                      G(
                                                                                                          {
                                                                                                              className:
                                                                                                                  "deleteButton___hKrwB",
                                                                                                              onClick:
                                                                                                                  function () {
                                                                                                                      return (
                                                                                                                          (e =
                                                                                                                              i),
                                                                                                                          r(
                                                                                                                              E.deleteOrderFromList(
                                                                                                                                  e
                                                                                                                              )
                                                                                                                          ),
                                                                                                                          void r(
                                                                                                                              ((n =
                                                                                                                                  e),
                                                                                                                              function () {
                                                                                                                                  return M(
                                                                                                                                      void 0,
                                                                                                                                      void 0,
                                                                                                                                      void 0,
                                                                                                                                      function () {
                                                                                                                                          return W(
                                                                                                                                              this,
                                                                                                                                              function (
                                                                                                                                                  e
                                                                                                                                              ) {
                                                                                                                                                  switch (
                                                                                                                                                      e.label
                                                                                                                                                  ) {
                                                                                                                                                      case 0:
                                                                                                                                                          return [
                                                                                                                                                              4,
                                                                                                                                                              P(
                                                                                                                                                                  n
                                                                                                                                                              ),
                                                                                                                                                          ];
                                                                                                                                                      case 1:
                                                                                                                                                          return (
                                                                                                                                                              e.sent(),
                                                                                                                                                              [
                                                                                                                                                                  2,
                                                                                                                                                              ]
                                                                                                                                                          );
                                                                                                                                                  }
                                                                                                                                              }
                                                                                                                                          );
                                                                                                                                      }
                                                                                                                                  );
                                                                                                                              })
                                                                                                                          )
                                                                                                                      );
                                                                                                                      var e,
                                                                                                                          n;
                                                                                                                  },
                                                                                                          },
                                                                                                          {
                                                                                                              children:
                                                                                                                  (0,
                                                                                                                  t.jsx)(
                                                                                                                      K.Z,
                                                                                                                      {
                                                                                                                          style: {
                                                                                                                              fontSize:
                                                                                                                                  "25px",
                                                                                                                              color: "gray",
                                                                                                                          },
                                                                                                                      }
                                                                                                                  ),
                                                                                                          }
                                                                                                      )
                                                                                                  ),
                                                                                              ],
                                                                                      }
                                                                                  ),
                                                                                  i
                                                                              );
                                                                          }
                                                                      ),
                                                              }
                                                          )
                                                      ),
                                                  }
                                              )
                                          )
                                        : (0, t.jsx)("div", {
                                              children: "пока здесь пусто",
                                          }),
                                ],
                            }
                        )
                    );
                },
                D = function (e, r, n, t) {
                    return new (n || (n = Promise))(function (i, s) {
                        function a(e) {
                            try {
                                l(t.next(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function c(e) {
                            try {
                                l(t.throw(e));
                            } catch (e) {
                                s(e);
                            }
                        }
                        function l(e) {
                            var r;
                            e.done
                                ? i(e.value)
                                : ((r = e.value),
                                  r instanceof n
                                      ? r
                                      : new n(function (e) {
                                            e(r);
                                        })).then(a, c);
                        }
                        l((t = t.apply(e, r || [])).next());
                    });
                },
                X = function (e, r) {
                    var n,
                        t,
                        i,
                        s,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (s = { next: c(0), throw: c(1), return: c(2) }),
                        "function" == typeof Symbol &&
                            (s[Symbol.iterator] = function () {
                                return this;
                            }),
                        s
                    );
                    function c(s) {
                        return function (c) {
                            return (function (s) {
                                if (n)
                                    throw new TypeError(
                                        "Generator is already executing."
                                    );
                                for (; a; )
                                    try {
                                        if (
                                            ((n = 1),
                                            t &&
                                                (i =
                                                    2 & s[0]
                                                        ? t.return
                                                        : s[0]
                                                        ? t.throw ||
                                                          ((i = t.return) &&
                                                              i.call(t),
                                                          0)
                                                        : t.next) &&
                                                !(i = i.call(t, s[1])).done)
                                        )
                                            return i;
                                        switch (
                                            ((t = 0),
                                            i && (s = [2 & s[0], i.value]),
                                            s[0])
                                        ) {
                                            case 0:
                                            case 1:
                                                i = s;
                                                break;
                                            case 4:
                                                return (
                                                    a.label++,
                                                    { value: s[1], done: !1 }
                                                );
                                            case 5:
                                                a.label++,
                                                    (t = s[1]),
                                                    (s = [0]);
                                                continue;
                                            case 7:
                                                (s = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(
                                                        (i =
                                                            (i = a.trys)
                                                                .length > 0 &&
                                                            i[i.length - 1]) ||
                                                        (6 !== s[0] &&
                                                            2 !== s[0])
                                                    )
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (
                                                    3 === s[0] &&
                                                    (!i ||
                                                        (s[1] > i[0] &&
                                                            s[1] < i[3]))
                                                ) {
                                                    a.label = s[1];
                                                    break;
                                                }
                                                if (
                                                    6 === s[0] &&
                                                    a.label < i[1]
                                                ) {
                                                    (a.label = i[1]), (i = s);
                                                    break;
                                                }
                                                if (i && a.label < i[2]) {
                                                    (a.label = i[2]),
                                                        a.ops.push(s);
                                                    break;
                                                }
                                                i[2] && a.ops.pop(),
                                                    a.trys.pop();
                                                continue;
                                        }
                                        s = r.call(e, a);
                                    } catch (e) {
                                        (s = [6, e]), (t = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0,
                                };
                            })([s, c]);
                        };
                    }
                },
                R = (0, h.oM)({
                    name: "signature",
                    initialState: localStorage.getItem("signature")
                        ? JSON.parse(localStorage.getItem("signature"))
                        : { position: "менеджер", fullName: "Косенко Дмитрий" },
                    reducers: {
                        changeSignature: function (e, r) {
                            return r.payload;
                        },
                        replaceSignature: function (e, r) {
                            return r.payload;
                        },
                    },
                }),
                Q = R.reducer,
                Y = R.actions,
                q = function (e) {
                    return e.signature;
                },
                H = function () {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                },
                $ = function () {
                    var e = d(q),
                        r = u();
                    return (0, t.jsxs)(
                        "div",
                        H(
                            { className: "startPage___zYV_U" },
                            {
                                children: [
                                    (0, t.jsxs)(
                                        "div",
                                        H(
                                            { className: "newOrder___wynL7" },
                                            {
                                                children: [
                                                    (0, t.jsx)(
                                                        "div",
                                                        H(
                                                            {
                                                                className:
                                                                    "title___w4o8z",
                                                            },
                                                            {
                                                                children:
                                                                    "создать новую заявку",
                                                            }
                                                        )
                                                    ),
                                                    (0, t.jsx)(
                                                        l.rU,
                                                        H(
                                                            { to: a.input },
                                                            {
                                                                children: (0,
                                                                t.jsx)(
                                                                    c.Z,
                                                                    H(
                                                                        {
                                                                            size: "large",
                                                                            type: "dashed",
                                                                            className:
                                                                                "buttonNewOrder___p3t7s",
                                                                            onClick:
                                                                                function () {
                                                                                    r(
                                                                                        y.createOrder()
                                                                                    );
                                                                                },
                                                                        },
                                                                        {
                                                                            children:
                                                                                "новая заявка",
                                                                        }
                                                                    )
                                                                ),
                                                            }
                                                        )
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                    (0, t.jsx)(
                                        "div",
                                        H(
                                            { className: "ordersList___kiNWA" },
                                            { children: (0, t.jsx)(V, {}) }
                                        )
                                    ),
                                    (0, t.jsxs)(
                                        "div",
                                        H(
                                            { className: "signature___xawQR" },
                                            {
                                                children: [
                                                    (0, t.jsx)("div", {
                                                        children: e.position,
                                                    }),
                                                    (0, t.jsx)("div", {
                                                        children: e.fullName,
                                                    }),
                                                    (0, t.jsx)(
                                                        l.rU,
                                                        H(
                                                            { to: a.signature },
                                                            {
                                                                children: (0,
                                                                t.jsx)(
                                                                    c.Z,
                                                                    H(
                                                                        {
                                                                            size: "middle",
                                                                            type: "dashed",
                                                                        },
                                                                        {
                                                                            children:
                                                                                "изменить",
                                                                        }
                                                                    )
                                                                ),
                                                            }
                                                        )
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                ],
                            }
                        )
                    );
                };
            var ee = function () {
                    return (
                        (ee =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        ee.apply(this, arguments)
                    );
                },
                re = function () {
                    return (0, t.jsx)(
                        "div",
                        ee(
                            { className: "wrapper___tsSEo" },
                            {
                                children: (0, t.jsx)(
                                    "div",
                                    ee(
                                        {
                                            className:
                                                "wrapperChildren___zQ2yd",
                                        },
                                        { children: (0, t.jsx)(s.j3, {}) }
                                    )
                                ),
                            }
                        )
                    );
                },
                ne = n(7294);
            const te = {
                    toWhom: "toWhom___A8jE9",
                    order: "order___kipqm",
                    preamble: "preamble___CgzK0",
                    paragraph: "paragraph___k2oLC",
                    signature: "signature___TKe7G",
                    signaturePosition: "signaturePosition___kpVwb",
                },
                ie = "boxItemsForm___chWvZ";
            var se = function (e) {
                    switch (e) {
                        case "06536":
                            return "ПТО Аэропорт Минск";
                        case "06533":
                            return "ПТО Минск-СЭЗ";
                        case "06529":
                            return "ПТО Колядичи-авто";
                        case "06611":
                            return "ПТО Белкульторг";
                        case "06650":
                            return "ПТО Минск-ТЛЦ-2";
                        case "06649":
                            return "ПТО Минск-ТЛЦ-1";
                        case "06544":
                        case "06544":
                        case "06544":
                            return "ПТО Белювелирторг";
                        case "06641":
                            return "ПТО Солигорск";
                        case "06651":
                            return "ПТО Великий Камень";
                        case "06613":
                            return "ПТО Жодино-Логистик";
                        case "06608":
                            return "ПТО Борисов-авто";
                        case "07242":
                            return "ПТО Полоцк-стекловолокно";
                        case "07260":
                            return "ПТО Витебск-Белтаможсервис";
                        case "07270":
                            return "ПТО Орша-Белтаможсервис";
                        case "07271":
                            return "ПТО Орша-ТЛЦ";
                        case "09146":
                            return "ПТО Барановичи-Фестивальная";
                        case "09159":
                            return "ПТО Брест-Белтаможсервис";
                        case "09161":
                            return "ПТО Пинск-Белтаможсервис";
                        case "09162":
                            return "ПТО Брест-Белтаможсервис-2";
                        case "14325":
                            return "ПТО Гомель-Белтаможсервис";
                        case "14336":
                            return "ПТО Жлобин-металлургический";
                        case "14354":
                            return "ПТО Гомель-СЭЗ";
                        case "09157":
                            return "ПТО Мозырь-Белтаможсервис";
                        case "16443":
                            return "ПТО Лида-авто";
                        case "16457":
                            return "ПТО Гродно-ГАП-2";
                        case "16463":
                            return "ПТО Брузги-ТЛЦ";
                        case "16464":
                            return "ПТО Каменный Лог-Белтаможсервис";
                        case "16465":
                            return "ПТО Берестовица-ТЛЦ";
                        case "20733":
                            return "ПТО Могилев-Белтаможсервис";
                        case "20734":
                            return "ПТО Бобруйск-Белтаможсервис";
                        default:
                            return "введите правильный код";
                    }
                },
                ae = function () {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                },
                ce = function (e, r, n) {
                    if (n || 2 === arguments.length)
                        for (var t, i = 0, s = r.length; i < s; i++)
                            (!t && i in r) ||
                                (t || (t = Array.prototype.slice.call(r, 0, i)),
                                (t[i] = r[i]));
                    return e.concat(t || Array.prototype.slice.call(r));
                },
                le = function () {
                    var e = d(_),
                        r = Object.keys(e.list).map(function () {
                            return (0, ne.useRef)(null);
                        }),
                        n = (0, ne.useState)([]),
                        i = n[0],
                        s = n[1];
                    return (
                        (0, ne.useEffect)(function () {
                            r.map(function (e) {
                                s(function (r) {
                                    var n;
                                    return ce(
                                        ce([], r, !0),
                                        [
                                            null === (n = e.current) ||
                                            void 0 === n
                                                ? void 0
                                                : n.getBoundingClientRect()
                                                      .bottom,
                                        ],
                                        !1
                                    );
                                });
                            });
                        }, []),
                        (0, t.jsx)("ol", {
                            children: Object.keys(e.list).map(function (n, s) {
                                return (0,
                                t.jsxs)("li", ae({ className: "itemList___Dad8v", ref: r[s] }, { children: [i[s] > 900 && i[s] < 980 && (0, t.jsx)("div", { className: "emptyBox___BL1Gc" }), (0, t.jsxs)("span", ae({ className: "nameCompany___VUNcw" }, { children: [e.list[n]["название компании:"], " -", " "] })), (0, t.jsx)("span", ae({ className: ie }, { children: (0, t.jsxs)("span", { children: ["авианакладная №", e.list[n]["номер AWB:"], " ", "-", " "] }) })), (0, t.jsxs)("span", ae({ className: ie }, { children: [(0, t.jsxs)("span", { children: [e.list[n]["количество мест:"], " мест /", " "] }), (0, t.jsxs)("span", { children: [e.list[n]["вес брутто:"], " кг,"] })] })), (0, t.jsxs)("div", { children: ["Таможня назначения:", " ", se(e.list[n]["код таможни:"]), " ", "/ ", e.list[n]["код таможни:"]] }), (0, t.jsx)("div", { children: e.list[n]["доп.информация:"] })] }), n);
                            }),
                        })
                    );
                },
                oe = function () {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                },
                ue = function () {
                    var e = d(q),
                        r = d(_),
                        n = r.title["номер заявки:"];
                    return (0, t.jsxs)(
                        "div",
                        oe(
                            { className: te.content },
                            {
                                children: [
                                    (0, t.jsx)(
                                        "div",
                                        oe(
                                            { className: te.toWhom },
                                            {
                                                children: (0, t.jsxs)("div", {
                                                    children: [
                                                        (0, t.jsx)("p", {
                                                            children:
                                                                "Генеральному директору",
                                                        }),
                                                        (0, t.jsx)("p", {
                                                            children:
                                                                "ЗАО «Специальная Транспортная Служба»",
                                                        }),
                                                        (0, t.jsx)("p", {
                                                            children:
                                                                "Иванову В.Н. ",
                                                        }),
                                                    ],
                                                }),
                                            }
                                        )
                                    ),
                                    (0, t.jsxs)(
                                        "p",
                                        oe(
                                            { className: te.order },
                                            {
                                                children: [
                                                    "ЗАЯВКА №",
                                                    n,
                                                    " от ",
                                                    r.date,
                                                    "г.",
                                                ],
                                            }
                                        )
                                    ),
                                    (0, t.jsxs)(
                                        "div",
                                        oe(
                                            { className: te.preamble },
                                            {
                                                children: [
                                                    "На основании договора № 0046-02/04 от 29/04/2022г. просим Вас осуществить оформление транзитных деклараций для грузов, поступивших в аэропорт",
                                                    " ",
                                                    r.title["аэропорт:"] ||
                                                        "Шереметьево",
                                                    " в адрес:",
                                                ],
                                            }
                                        )
                                    ),
                                    (0, t.jsx)(
                                        "div",
                                        oe(
                                            { className: te.currentOrder },
                                            { children: (0, t.jsx)(le, {}) }
                                        )
                                    ),
                                    (0, t.jsxs)(
                                        "div",
                                        oe(
                                            { className: te.paragraph },
                                            {
                                                children: [
                                                    "Номер автомобиля: ",
                                                    r.title[
                                                        "номер автомобиля:"
                                                    ],
                                                    r.isTrailer &&
                                                        (0, t.jsx)("span", {
                                                            children:
                                                                "/ A 1482 E-5",
                                                        }),
                                                    ".",
                                                    " ",
                                                    r.title["ФИО водителя:"],
                                                ],
                                            }
                                        )
                                    ),
                                    (0, t.jsx)(
                                        "div",
                                        oe(
                                            { className: te.paragraph },
                                            {
                                                children:
                                                    "Оплату выполненных работ гарантируем.",
                                            }
                                        )
                                    ),
                                    (0, t.jsxs)(
                                        "div",
                                        oe(
                                            { className: te.signature },
                                            {
                                                children: [
                                                    (0, t.jsx)(
                                                        "div",
                                                        oe(
                                                            {
                                                                className:
                                                                    te.signaturePosition,
                                                            },
                                                            {
                                                                children:
                                                                    e.position,
                                                            }
                                                        )
                                                    ),
                                                    (0, t.jsx)("div", {
                                                        children: e.fullName,
                                                    }),
                                                ],
                                            }
                                        )
                                    ),
                                ],
                            }
                        )
                    );
                };
            var de = function () {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                },
                he = function () {
                    var e = (0, s.s0)(),
                        r = u(),
                        n = d(_);
                    return (
                        (0, ne.useEffect)(function () {
                            setTimeout(function () {
                                window.print(),
                                    r(E.addedOrderToList(n)),
                                    r(U(n)),
                                    e(a.home);
                            }, 600);
                        }, []),
                        (0, t.jsxs)(
                            "div",
                            de(
                                { className: "wrapperPrintPage___zV5TO" },
                                {
                                    children: [
                                        (0, t.jsxs)(
                                            "div",
                                            de(
                                                { className: "header___lkvNS" },
                                                {
                                                    children: [
                                                        (0, t.jsx)("div", {
                                                            className:
                                                                "ic_icon___tFNeH",
                                                        }),
                                                        (0, t.jsxs)(
                                                            "div",
                                                            de(
                                                                {
                                                                    className:
                                                                        "companyTitle___bfuQD",
                                                                },
                                                                {
                                                                    children: [
                                                                        (0,
                                                                        t.jsx)(
                                                                            "span",
                                                                            {
                                                                                children:
                                                                                    "ОБЩЕСТВО",
                                                                            }
                                                                        ),
                                                                        (0,
                                                                        t.jsx)(
                                                                            "span",
                                                                            {
                                                                                children:
                                                                                    "С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ",
                                                                            }
                                                                        ),
                                                                        (0,
                                                                        t.jsx)(
                                                                            "span",
                                                                            {
                                                                                children:
                                                                                    "“АЭРОСТАР”",
                                                                            }
                                                                        ),
                                                                    ],
                                                                }
                                                            )
                                                        ),
                                                    ],
                                                }
                                            )
                                        ),
                                        (0, t.jsx)(
                                            "div",
                                            de(
                                                {
                                                    className:
                                                        "printContent___ZDRmN",
                                                },
                                                { children: (0, t.jsx)(ue, {}) }
                                            )
                                        ),
                                        (0, t.jsxs)(
                                            "div",
                                            de(
                                                { className: "footer___V6MhP" },
                                                {
                                                    children: [
                                                        (0, t.jsx)("span", {
                                                            children:
                                                                "Республика Беларусь, 222201, Минская обл., г. Смолевичи, ул. Советская, 68-24",
                                                        }),
                                                        (0, t.jsx)("span", {
                                                            children:
                                                                "Грузовой отдел: тел.(017)279-14-19, 279-12-93, факс: 279-14-19",
                                                        }),
                                                        (0, t.jsx)("span", {
                                                            children:
                                                                "Таможенный отдел: тел.(017)279-21-56, 279-22-56, факс: 279-20-56",
                                                        }),
                                                        (0, t.jsx)("span", {
                                                            children:
                                                                "УНН 600299506, ОКПО 06084802",
                                                        }),
                                                        (0, t.jsx)("span", {
                                                            children:
                                                                "www.aerostar.by e-mail: aerostar@aerostar.by",
                                                        }),
                                                    ],
                                                }
                                            )
                                        ),
                                    ],
                                }
                            )
                        )
                    );
                };
            const fe = "subSectionForm___sBod3",
                pe = "form___HoBaC",
                ve = "itemForm___KZjg1",
                me = "errorMessage___W6i5u",
                je = "button___ehcrz",
                xe = "subFooterButtons___jwX1X",
                ye = "boxItemsForm___BYpYn",
                _e = "footerItemButton___pjnyJ";
            var ge = n(2358),
                be = n(4391),
                we = n(371),
                Ne = n(1209),
                Oe = n(5474),
                ke = n(4101),
                Se = function () {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                },
                Ce = function () {
                    var e = (0, s.s0)(),
                        r = u(),
                        n = ge.Z.Option,
                        i = [
                            "название компании:",
                            "номер AWB:",
                            "количество мест:",
                            "вес брутто:",
                            "код таможни:",
                            "доп.информация:",
                        ],
                        l = function () {
                            return i.reduce(function (e, r) {
                                var n;
                                return Se(Se({}, e), (((n = {})[r] = ""), n));
                            }, {});
                        },
                        o = (0, ne.useState)(l()),
                        h = o[0],
                        f = o[1],
                        p = (0, ne.useState)(l()),
                        v = p[0],
                        m = p[1],
                        j = (0, ne.useState)({
                            "номер заявки:": "",
                            "номер автомобиля:": "",
                            "ФИО водителя:": "",
                        }),
                        x = j[0],
                        g = j[1],
                        b = d(_);
                    (0, ne.useEffect)(
                        function () {
                            localStorage.setItem(
                                "currentOrder",
                                JSON.stringify(b)
                            );
                        },
                        [b]
                    );
                    var w = function (e) {
                            var r = e.target.name,
                                n = e.target.value;
                            f(function (e) {
                                var t;
                                return Se(Se({}, e), (((t = {})[r] = n), t));
                            }),
                                v[r] &&
                                    m(function (e) {
                                        var n;
                                        return Se(
                                            Se({}, e),
                                            (((n = {})[r] = ""), n)
                                        );
                                    });
                        },
                        N = function (e, n) {
                            r(y.changeTitleOrder({ key: n, value: e })),
                                x[n] &&
                                    g(function (e) {
                                        var r;
                                        return Se(
                                            Se({}, e),
                                            (((r = {})[n] = ""), r)
                                        );
                                    });
                        };
                    return (0, t.jsxs)(
                        "div",
                        Se(
                            { className: "main___wm9J2" },
                            {
                                children: [
                                    (0, t.jsxs)(
                                        "div",
                                        Se(
                                            { className: "title___ma4zg" },
                                            {
                                                children: [
                                                    (0, t.jsxs)("div", {
                                                        children: [
                                                            "Формирование новой заявки в аэропорту",
                                                            (0, t.jsxs)(
                                                                "span",
                                                                {
                                                                    children: [
                                                                        " ",
                                                                        (0,
                                                                        t.jsx)(
                                                                            ge.Z,
                                                                            Se(
                                                                                {
                                                                                    size: "large",
                                                                                    defaultValue:
                                                                                        b
                                                                                            .title[
                                                                                            "аэропорт:"
                                                                                        ] ||
                                                                                        "Шереметьево",
                                                                                    style: {
                                                                                        width: 200,
                                                                                        textAlign:
                                                                                            "left",
                                                                                    },
                                                                                    onChange:
                                                                                        function (
                                                                                            e
                                                                                        ) {
                                                                                            return N(
                                                                                                e,
                                                                                                "аэропорт:"
                                                                                            );
                                                                                        },
                                                                                },
                                                                                {
                                                                                    children:
                                                                                        [
                                                                                            "Шереметьево",
                                                                                            "Внуково",
                                                                                            "Домодедово",
                                                                                            "Жуковский",
                                                                                        ].map(
                                                                                            function (
                                                                                                e
                                                                                            ) {
                                                                                                return (0,
                                                                                                t.jsx)(
                                                                                                    n,
                                                                                                    Se(
                                                                                                        {
                                                                                                            value: e,
                                                                                                        },
                                                                                                        {
                                                                                                            children:
                                                                                                                e,
                                                                                                        }
                                                                                                    ),
                                                                                                    e
                                                                                                );
                                                                                            }
                                                                                        ),
                                                                                }
                                                                            )
                                                                        ),
                                                                    ],
                                                                }
                                                            ),
                                                        ],
                                                    }),
                                                    (0, t.jsxs)(
                                                        "div",
                                                        Se(
                                                            {
                                                                className:
                                                                    "titleForm___XezQ_",
                                                            },
                                                            {
                                                                children: [
                                                                    (0, t.jsxs)(
                                                                        "div",
                                                                        Se(
                                                                            {
                                                                                className:
                                                                                    ve,
                                                                            },
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                                children:
                                                                                                    "номер заявки:",
                                                                                            }
                                                                                        ),
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            be.Z,
                                                                                            {
                                                                                                size: "large",
                                                                                                style: {
                                                                                                    width: 300,
                                                                                                },
                                                                                                name: "номер заявки:",
                                                                                                value: b
                                                                                                    .title[
                                                                                                    "номер заявки:"
                                                                                                ],
                                                                                                onChange:
                                                                                                    function (
                                                                                                        e
                                                                                                    ) {
                                                                                                        var n =
                                                                                                                e
                                                                                                                    .target
                                                                                                                    .name,
                                                                                                            t =
                                                                                                                e
                                                                                                                    .target
                                                                                                                    .value;
                                                                                                        r(
                                                                                                            y.changeTitleOrder(
                                                                                                                {
                                                                                                                    key: n,
                                                                                                                    value: t,
                                                                                                                }
                                                                                                            )
                                                                                                        ),
                                                                                                            x[
                                                                                                                n
                                                                                                            ] &&
                                                                                                                g(
                                                                                                                    function (
                                                                                                                        e
                                                                                                                    ) {
                                                                                                                        var r;
                                                                                                                        return Se(
                                                                                                                            Se(
                                                                                                                                {},
                                                                                                                                e
                                                                                                                            ),
                                                                                                                            (((r =
                                                                                                                                {})[
                                                                                                                                n
                                                                                                                            ] =
                                                                                                                                ""),
                                                                                                                            r)
                                                                                                                        );
                                                                                                                    }
                                                                                                                );
                                                                                                    },
                                                                                            }
                                                                                        ),
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            "div",
                                                                                            Se(
                                                                                                {
                                                                                                    className:
                                                                                                        me,
                                                                                                },
                                                                                                {
                                                                                                    children:
                                                                                                        x[
                                                                                                            "номер заявки:"
                                                                                                        ],
                                                                                                }
                                                                                            )
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        )
                                                                    ),
                                                                    (0, t.jsxs)(
                                                                        "div",
                                                                        Se(
                                                                            {
                                                                                className:
                                                                                    ve,
                                                                            },
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                                children:
                                                                                                    "номер автомобиля:",
                                                                                            }
                                                                                        ),
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            ge.Z,
                                                                                            Se(
                                                                                                {
                                                                                                    size: "large",
                                                                                                    defaultValue:
                                                                                                        b
                                                                                                            .title[
                                                                                                            "номер автомобиля:"
                                                                                                        ],
                                                                                                    style: {
                                                                                                        width: 300,
                                                                                                        textAlign:
                                                                                                            "left",
                                                                                                    },
                                                                                                    onChange:
                                                                                                        function (
                                                                                                            e
                                                                                                        ) {
                                                                                                            return N(
                                                                                                                e,
                                                                                                                "номер автомобиля:"
                                                                                                            );
                                                                                                        },
                                                                                                },
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            "AC 7769-5",
                                                                                                            "AM 1019-5",
                                                                                                            "AT 9287-5",
                                                                                                            "AT 9288-5",
                                                                                                            "AM 2957-5",
                                                                                                            "AM 9118-5",
                                                                                                            "AT 2761-5",
                                                                                                            "AT 2762-5",
                                                                                                            "AP 7963-5",
                                                                                                            "AP 9736-5",
                                                                                                            "AT 0887-5",
                                                                                                        ].map(
                                                                                                            function (
                                                                                                                e
                                                                                                            ) {
                                                                                                                return (0,
                                                                                                                t.jsx)(
                                                                                                                    n,
                                                                                                                    Se(
                                                                                                                        {
                                                                                                                            value: e,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                e,
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e
                                                                                                                );
                                                                                                            }
                                                                                                        ),
                                                                                                }
                                                                                            )
                                                                                        ),
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            "div",
                                                                                            Se(
                                                                                                {
                                                                                                    className:
                                                                                                        me,
                                                                                                },
                                                                                                {
                                                                                                    children:
                                                                                                        x[
                                                                                                            "номер автомобиля:"
                                                                                                        ],
                                                                                                }
                                                                                            )
                                                                                        ),
                                                                                        (0,
                                                                                        t.jsxs)(
                                                                                            "div",
                                                                                            Se(
                                                                                                {
                                                                                                    className:
                                                                                                        "checkbox___FeSOR",
                                                                                                },
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            "прицеп",
                                                                                                            " ",
                                                                                                            (0,
                                                                                                            t.jsx)(
                                                                                                                we.Z,
                                                                                                                {
                                                                                                                    defaultChecked:
                                                                                                                        b.isTrailer,
                                                                                                                    onChange:
                                                                                                                        function (
                                                                                                                            e
                                                                                                                        ) {
                                                                                                                            r(
                                                                                                                                y.changeCheckBox(
                                                                                                                                    e
                                                                                                                                        .target
                                                                                                                                        .checked
                                                                                                                                )
                                                                                                                            );
                                                                                                                        },
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            )
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        )
                                                                    ),
                                                                    (0, t.jsxs)(
                                                                        "div",
                                                                        Se(
                                                                            {
                                                                                className:
                                                                                    ve,
                                                                            },
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                                children:
                                                                                                    "ФИО водителя:",
                                                                                            }
                                                                                        ),
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            ge.Z,
                                                                                            Se(
                                                                                                {
                                                                                                    size: "large",
                                                                                                    defaultValue:
                                                                                                        b
                                                                                                            .title[
                                                                                                            "ФИО водителя:"
                                                                                                        ],
                                                                                                    style: {
                                                                                                        width: 300,
                                                                                                        textAlign:
                                                                                                            "left",
                                                                                                    },
                                                                                                    onChange:
                                                                                                        function (
                                                                                                            e
                                                                                                        ) {
                                                                                                            return N(
                                                                                                                e,
                                                                                                                "ФИО водителя:"
                                                                                                            );
                                                                                                        },
                                                                                                },
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            "Бабрович Юрий",
                                                                                                            "Медведь Валерий",
                                                                                                            "Медведь Вадим",
                                                                                                            "Cержан Чеслав",
                                                                                                            "Латушко Олег",
                                                                                                            "Шамко Дмитрий",
                                                                                                            "Дорошенко Михаил",
                                                                                                        ].map(
                                                                                                            function (
                                                                                                                e
                                                                                                            ) {
                                                                                                                return (0,
                                                                                                                t.jsx)(
                                                                                                                    n,
                                                                                                                    Se(
                                                                                                                        {
                                                                                                                            value: e,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                e,
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e
                                                                                                                );
                                                                                                            }
                                                                                                        ),
                                                                                                }
                                                                                            )
                                                                                        ),
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                            "div",
                                                                                            Se(
                                                                                                {
                                                                                                    className:
                                                                                                        me,
                                                                                                },
                                                                                                {
                                                                                                    children:
                                                                                                        x[
                                                                                                            "ФИО водителя:"
                                                                                                        ],
                                                                                                }
                                                                                            )
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        )
                                                                    ),
                                                                ],
                                                            }
                                                        )
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                    (0, t.jsxs)(
                                        "div",
                                        Se(
                                            {
                                                className:
                                                    "sectionForm___afqxO",
                                            },
                                            {
                                                children: [
                                                    (0, t.jsx)(
                                                        "div",
                                                        Se(
                                                            { className: fe },
                                                            {
                                                                children: (0,
                                                                t.jsx)(
                                                                    "div",
                                                                    Se(
                                                                        {
                                                                            className:
                                                                                pe,
                                                                        },
                                                                        {
                                                                            children:
                                                                                Object.keys(
                                                                                    h
                                                                                ).map(
                                                                                    function (
                                                                                        e
                                                                                    ) {
                                                                                        return (0,
                                                                                        t.jsxs)(
                                                                                            "div",
                                                                                            Se(
                                                                                                {
                                                                                                    className:
                                                                                                        ve,
                                                                                                },
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            (0,
                                                                                                            t.jsx)(
                                                                                                                "div",
                                                                                                                {
                                                                                                                    children:
                                                                                                                        e,
                                                                                                                }
                                                                                                            ),
                                                                                                            (0,
                                                                                                            t.jsx)(
                                                                                                                be.Z,
                                                                                                                {
                                                                                                                    size: "large",
                                                                                                                    style: {
                                                                                                                        width: 400,
                                                                                                                    },
                                                                                                                    name: e,
                                                                                                                    value: h[
                                                                                                                        e
                                                                                                                    ],
                                                                                                                    onChange:
                                                                                                                        w,
                                                                                                                }
                                                                                                            ),
                                                                                                            (0,
                                                                                                            t.jsx)(
                                                                                                                "div",
                                                                                                                Se(
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            me,
                                                                                                                    },
                                                                                                                    {
                                                                                                                        children:
                                                                                                                            v[
                                                                                                                                e
                                                                                                                            ],
                                                                                                                    }
                                                                                                                )
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                            e
                                                                                        );
                                                                                    }
                                                                                ),
                                                                        }
                                                                    )
                                                                ),
                                                            }
                                                        )
                                                    ),
                                                    (0, t.jsx)(
                                                        "div",
                                                        Se(
                                                            { className: fe },
                                                            {
                                                                children: (0,
                                                                t.jsx)(
                                                                    "div",
                                                                    Se(
                                                                        {
                                                                            className:
                                                                                pe,
                                                                        },
                                                                        {
                                                                            children:
                                                                                (0,
                                                                                t.jsx)(
                                                                                    "ol",
                                                                                    {
                                                                                        children:
                                                                                            Object.keys(
                                                                                                b.list
                                                                                            ).map(
                                                                                                function (
                                                                                                    e
                                                                                                ) {
                                                                                                    return (0,
                                                                                                    t.jsxs)(
                                                                                                        "li",
                                                                                                        {
                                                                                                            children:
                                                                                                                [
                                                                                                                    (0,
                                                                                                                    t.jsxs)(
                                                                                                                        "span",
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    b
                                                                                                                                        .list[
                                                                                                                                        e
                                                                                                                                    ][
                                                                                                                                        "название компании:"
                                                                                                                                    ],
                                                                                                                                    " ",
                                                                                                                                    "-",
                                                                                                                                    " ",
                                                                                                                                ],
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    t.jsxs)(
                                                                                                                        "span",
                                                                                                                        Se(
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    ye,
                                                                                                                            },
                                                                                                                            {
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        "авианакладная №",
                                                                                                                                        b
                                                                                                                                            .list[
                                                                                                                                            e
                                                                                                                                        ][
                                                                                                                                            "номер AWB:"
                                                                                                                                        ],
                                                                                                                                        " -",
                                                                                                                                        " ",
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    t.jsxs)(
                                                                                                                        "div",
                                                                                                                        Se(
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    ye,
                                                                                                                            },
                                                                                                                            {
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        t.jsxs)(
                                                                                                                                            "span",
                                                                                                                                            {
                                                                                                                                                children:
                                                                                                                                                    [
                                                                                                                                                        b
                                                                                                                                                            .list[
                                                                                                                                                            e
                                                                                                                                                        ][
                                                                                                                                                            "количество мест:"
                                                                                                                                                        ],
                                                                                                                                                        " ",
                                                                                                                                                        "мест /",
                                                                                                                                                        " ",
                                                                                                                                                    ],
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                        (0,
                                                                                                                                        t.jsxs)(
                                                                                                                                            "span",
                                                                                                                                            {
                                                                                                                                                children:
                                                                                                                                                    [
                                                                                                                                                        b
                                                                                                                                                            .list[
                                                                                                                                                            e
                                                                                                                                                        ][
                                                                                                                                                            "вес брутто:"
                                                                                                                                                        ],
                                                                                                                                                        " ",
                                                                                                                                                        "кг,",
                                                                                                                                                    ],
                                                                                                                                            }
                                                                                                                                        ),
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    t.jsxs)(
                                                                                                                        "div",
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    "Таможня назначения:",
                                                                                                                                    " ",
                                                                                                                                    se(
                                                                                                                                        b
                                                                                                                                            .list[
                                                                                                                                            e
                                                                                                                                        ][
                                                                                                                                            "код таможни:"
                                                                                                                                        ]
                                                                                                                                    ),
                                                                                                                                    " ",
                                                                                                                                    "/",
                                                                                                                                    " ",
                                                                                                                                    b
                                                                                                                                        .list[
                                                                                                                                        e
                                                                                                                                    ][
                                                                                                                                        "код таможни:"
                                                                                                                                    ],
                                                                                                                                ],
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    t.jsx)(
                                                                                                                        "div",
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                b
                                                                                                                                    .list[
                                                                                                                                    e
                                                                                                                                ][
                                                                                                                                    "доп.информация:"
                                                                                                                                ],
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    t.jsxs)(
                                                                                                                        "div",
                                                                                                                        Se(
                                                                                                                            {
                                                                                                                                className:
                                                                                                                                    "itemButtons___B3_Jx",
                                                                                                                            },
                                                                                                                            {
                                                                                                                                children:
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        t.jsx)(
                                                                                                                                            "div",
                                                                                                                                            Se(
                                                                                                                                                {
                                                                                                                                                    className:
                                                                                                                                                        je,
                                                                                                                                                    onClick:
                                                                                                                                                        function () {
                                                                                                                                                            return (
                                                                                                                                                                (n =
                                                                                                                                                                    e),
                                                                                                                                                                f(
                                                                                                                                                                    b
                                                                                                                                                                        .list[
                                                                                                                                                                        n
                                                                                                                                                                    ]
                                                                                                                                                                ),
                                                                                                                                                                r(
                                                                                                                                                                    y.deleteItemOrder(
                                                                                                                                                                        n
                                                                                                                                                                    )
                                                                                                                                                                ),
                                                                                                                                                                void m(
                                                                                                                                                                    l()
                                                                                                                                                                )
                                                                                                                                                            );
                                                                                                                                                            var n;
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    children:
                                                                                                                                                        (0,
                                                                                                                                                        t.jsx)(
                                                                                                                                                            Ne.Z,
                                                                                                                                                            {}
                                                                                                                                                        ),
                                                                                                                                                }
                                                                                                                                            )
                                                                                                                                        ),
                                                                                                                                        (0,
                                                                                                                                        t.jsx)(
                                                                                                                                            "div",
                                                                                                                                            Se(
                                                                                                                                                {
                                                                                                                                                    className:
                                                                                                                                                        je,
                                                                                                                                                    onClick:
                                                                                                                                                        function () {
                                                                                                                                                            return (function (
                                                                                                                                                                e
                                                                                                                                                            ) {
                                                                                                                                                                f(
                                                                                                                                                                    b
                                                                                                                                                                        .list[
                                                                                                                                                                        e
                                                                                                                                                                    ]
                                                                                                                                                                ),
                                                                                                                                                                    m(
                                                                                                                                                                        l()
                                                                                                                                                                    );
                                                                                                                                                            })(
                                                                                                                                                                e
                                                                                                                                                            );
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    children:
                                                                                                                                                        (0,
                                                                                                                                                        t.jsx)(
                                                                                                                                                            Oe.Z,
                                                                                                                                                            {
                                                                                                                                                                twoToneColor:
                                                                                                                                                                    "#52c41a",
                                                                                                                                                            }
                                                                                                                                                        ),
                                                                                                                                                }
                                                                                                                                            )
                                                                                                                                        ),
                                                                                                                                        (0,
                                                                                                                                        t.jsx)(
                                                                                                                                            "div",
                                                                                                                                            Se(
                                                                                                                                                {
                                                                                                                                                    className:
                                                                                                                                                        je,
                                                                                                                                                    onClick:
                                                                                                                                                        function () {
                                                                                                                                                            return (
                                                                                                                                                                (n =
                                                                                                                                                                    e),
                                                                                                                                                                void r(
                                                                                                                                                                    y.deleteItemOrder(
                                                                                                                                                                        n
                                                                                                                                                                    )
                                                                                                                                                                )
                                                                                                                                                            );
                                                                                                                                                            var n;
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    children:
                                                                                                                                                        (0,
                                                                                                                                                        t.jsx)(
                                                                                                                                                            ke.Z,
                                                                                                                                                            {
                                                                                                                                                                twoToneColor:
                                                                                                                                                                    "#eb2f96",
                                                                                                                                                            }
                                                                                                                                                        ),
                                                                                                                                                }
                                                                                                                                            )
                                                                                                                                        ),
                                                                                                                                    ],
                                                                                                                            }
                                                                                                                        )
                                                                                                                    ),
                                                                                                                ],
                                                                                                        },
                                                                                                        e
                                                                                                    );
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                        }
                                                                    )
                                                                ),
                                                            }
                                                        )
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                    (0, t.jsxs)(
                                        "div",
                                        Se(
                                            {
                                                className:
                                                    "footerButtons___w_Kin",
                                            },
                                            {
                                                children: [
                                                    (0, t.jsx)(
                                                        "div",
                                                        Se(
                                                            { className: xe },
                                                            {
                                                                children: (0,
                                                                t.jsx)(
                                                                    c.Z,
                                                                    Se(
                                                                        {
                                                                            size: "large",
                                                                            style: {
                                                                                minWidth: 110,
                                                                            },
                                                                            onClick:
                                                                                function () {
                                                                                    var e;
                                                                                    (e =
                                                                                        !0),
                                                                                        Object.keys(
                                                                                            h
                                                                                        ).map(
                                                                                            function (
                                                                                                r
                                                                                            ) {
                                                                                                h[
                                                                                                    r
                                                                                                ].trim() ||
                                                                                                    "доп.информация:" ===
                                                                                                        r ||
                                                                                                    (m(
                                                                                                        function (
                                                                                                            e
                                                                                                        ) {
                                                                                                            var n;
                                                                                                            return Se(
                                                                                                                Se(
                                                                                                                    {},
                                                                                                                    e
                                                                                                                ),
                                                                                                                (((n =
                                                                                                                    {})[
                                                                                                                    r
                                                                                                                ] =
                                                                                                                    "обязательное поле"),
                                                                                                                n)
                                                                                                            );
                                                                                                        }
                                                                                                    ),
                                                                                                    (e =
                                                                                                        !1));
                                                                                            }
                                                                                        ),
                                                                                        h[
                                                                                            "код таможни:"
                                                                                        ] &&
                                                                                            "введите правильный код" ===
                                                                                                se(
                                                                                                    h[
                                                                                                        "код таможни:"
                                                                                                    ]
                                                                                                ) &&
                                                                                            (m(
                                                                                                function (
                                                                                                    e
                                                                                                ) {
                                                                                                    var r;
                                                                                                    return Se(
                                                                                                        Se(
                                                                                                            {},
                                                                                                            e
                                                                                                        ),
                                                                                                        (((r =
                                                                                                            {})[
                                                                                                            "код таможни:"
                                                                                                        ] =
                                                                                                            "введите правильный код"),
                                                                                                        r)
                                                                                                    );
                                                                                                }
                                                                                            ),
                                                                                            (e =
                                                                                                !1)),
                                                                                        e &&
                                                                                            (r(
                                                                                                y.addedItemOrder(
                                                                                                    h
                                                                                                )
                                                                                            ),
                                                                                            f(
                                                                                                l()
                                                                                            ));
                                                                                },
                                                                        },
                                                                        {
                                                                            children:
                                                                                "добавить",
                                                                        }
                                                                    )
                                                                ),
                                                            }
                                                        )
                                                    ),
                                                    (0, t.jsxs)(
                                                        "div",
                                                        Se(
                                                            { className: xe },
                                                            {
                                                                children: [
                                                                    (0, t.jsx)(
                                                                        c.Z,
                                                                        Se(
                                                                            {
                                                                                size: "large",
                                                                                style: {
                                                                                    minWidth: 110,
                                                                                },
                                                                                className:
                                                                                    _e,
                                                                                onClick:
                                                                                    function () {
                                                                                        return e(
                                                                                            a.home
                                                                                        );
                                                                                    },
                                                                            },
                                                                            {
                                                                                children:
                                                                                    "отмена",
                                                                            }
                                                                        )
                                                                    ),
                                                                    (0, t.jsx)(
                                                                        c.Z,
                                                                        Se(
                                                                            {
                                                                                size: "large",
                                                                                style: {
                                                                                    minWidth: 110,
                                                                                },
                                                                                className:
                                                                                    _e,
                                                                                onClick:
                                                                                    function () {
                                                                                        r(
                                                                                            E.addedOrderToList(
                                                                                                b
                                                                                            )
                                                                                        ),
                                                                                            r(
                                                                                                U(
                                                                                                    b
                                                                                                )
                                                                                            ),
                                                                                            e(
                                                                                                a.home
                                                                                            );
                                                                                    },
                                                                            },
                                                                            {
                                                                                children:
                                                                                    "сохранить",
                                                                            }
                                                                        )
                                                                    ),
                                                                    (0, t.jsx)(
                                                                        c.Z,
                                                                        Se(
                                                                            {
                                                                                size: "large",
                                                                                style: {
                                                                                    minWidth: 110,
                                                                                },
                                                                                onClick:
                                                                                    function () {
                                                                                        var r;
                                                                                        (r =
                                                                                            !0),
                                                                                            Object.keys(
                                                                                                b.title
                                                                                            ).map(
                                                                                                function (
                                                                                                    e
                                                                                                ) {
                                                                                                    b.title[
                                                                                                        e
                                                                                                    ].trim() ||
                                                                                                        (g(
                                                                                                            function (
                                                                                                                r
                                                                                                            ) {
                                                                                                                var n;
                                                                                                                return Se(
                                                                                                                    Se(
                                                                                                                        {},
                                                                                                                        r
                                                                                                                    ),
                                                                                                                    (((n =
                                                                                                                        {})[
                                                                                                                        e
                                                                                                                    ] =
                                                                                                                        "обязательное поле"),
                                                                                                                    n)
                                                                                                                );
                                                                                                            }
                                                                                                        ),
                                                                                                        (r =
                                                                                                            !1));
                                                                                                }
                                                                                            ),
                                                                                            r &&
                                                                                                e(
                                                                                                    a.print
                                                                                                );
                                                                                    },
                                                                            },
                                                                            {
                                                                                children:
                                                                                    "распечатать",
                                                                            }
                                                                        )
                                                                    ),
                                                                ],
                                                            }
                                                        )
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                ],
                            }
                        )
                    );
                };
            const Ae = "titleItemForm___M5g0B",
                Ze = "itemForm___Xyn7y",
                Te = "errorMessage___t6Kdu";
            var Pe = function () {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                },
                ze = function () {
                    var e = (0, s.s0)(),
                        r = u(),
                        n = d(q),
                        i = (0, ne.useState)(n),
                        l = i[0],
                        o = i[1],
                        h = (0, ne.useState)({ position: "", fullName: "" }),
                        f = h[0],
                        p = h[1],
                        v = function (e) {
                            var r = e.target.name,
                                n = e.target.value;
                            o(function (e) {
                                var t;
                                return Pe(Pe({}, e), (((t = {})[r] = n), t));
                            }),
                                f[r] &&
                                    p(function (e) {
                                        var n;
                                        return Pe(
                                            Pe({}, e),
                                            (((n = {})[r] = ""), n)
                                        );
                                    });
                        };
                    return (0, t.jsxs)(
                        "div",
                        Pe(
                            { className: "main___ZXuR5" },
                            {
                                children: [
                                    (0, t.jsx)(
                                        "div",
                                        Pe(
                                            { className: "title___FK6hs" },
                                            {
                                                children: (0, t.jsx)("p", {
                                                    children:
                                                        "Изменение подписи",
                                                }),
                                            }
                                        )
                                    ),
                                    (0, t.jsxs)(
                                        "div",
                                        Pe(
                                            { className: "form___lbhMe" },
                                            {
                                                children: [
                                                    (0, t.jsxs)(
                                                        "div",
                                                        Pe(
                                                            { className: Ze },
                                                            {
                                                                children: [
                                                                    (0, t.jsx)(
                                                                        "div",
                                                                        Pe(
                                                                            {
                                                                                className:
                                                                                    Ae,
                                                                            },
                                                                            {
                                                                                children:
                                                                                    "должность:",
                                                                            }
                                                                        )
                                                                    ),
                                                                    (0, t.jsx)(
                                                                        be.Z,
                                                                        {
                                                                            size: "large",
                                                                            style: {
                                                                                width: 300,
                                                                            },
                                                                            name: "position",
                                                                            value: l.position,
                                                                            onChange:
                                                                                v,
                                                                        }
                                                                    ),
                                                                    (0, t.jsx)(
                                                                        "div",
                                                                        Pe(
                                                                            {
                                                                                className:
                                                                                    Te,
                                                                            },
                                                                            {
                                                                                children:
                                                                                    f.position,
                                                                            }
                                                                        )
                                                                    ),
                                                                ],
                                                            }
                                                        )
                                                    ),
                                                    (0, t.jsxs)(
                                                        "div",
                                                        Pe(
                                                            { className: Ze },
                                                            {
                                                                children: [
                                                                    (0, t.jsx)(
                                                                        "div",
                                                                        Pe(
                                                                            {
                                                                                className:
                                                                                    Ae,
                                                                            },
                                                                            {
                                                                                children:
                                                                                    "ФИО:",
                                                                            }
                                                                        )
                                                                    ),
                                                                    (0, t.jsx)(
                                                                        be.Z,
                                                                        {
                                                                            size: "large",
                                                                            style: {
                                                                                width: 300,
                                                                            },
                                                                            name: "fullName",
                                                                            value: l.fullName,
                                                                            onChange:
                                                                                v,
                                                                        }
                                                                    ),
                                                                    (0, t.jsx)(
                                                                        "div",
                                                                        Pe(
                                                                            {
                                                                                className:
                                                                                    Te,
                                                                            },
                                                                            {
                                                                                children:
                                                                                    f.fullName,
                                                                            }
                                                                        )
                                                                    ),
                                                                ],
                                                            }
                                                        )
                                                    ),
                                                    (0, t.jsx)(
                                                        c.Z,
                                                        Pe(
                                                            {
                                                                size: "large",
                                                                style: {
                                                                    minWidth: 110,
                                                                },
                                                                onClick:
                                                                    function () {
                                                                        if (
                                                                            ((n =
                                                                                !0),
                                                                            Object.keys(
                                                                                l
                                                                            ).map(
                                                                                function (
                                                                                    e
                                                                                ) {
                                                                                    l[
                                                                                        e
                                                                                    ].trim() ||
                                                                                        (p(
                                                                                            function (
                                                                                                r
                                                                                            ) {
                                                                                                var n;
                                                                                                return Pe(
                                                                                                    Pe(
                                                                                                        {},
                                                                                                        r
                                                                                                    ),
                                                                                                    (((n =
                                                                                                        {})[
                                                                                                        e
                                                                                                    ] =
                                                                                                        "обязательное поле"),
                                                                                                    n)
                                                                                                );
                                                                                            }
                                                                                        ),
                                                                                        (n =
                                                                                            !1));
                                                                                }
                                                                            ),
                                                                            n)
                                                                        ) {
                                                                            r(
                                                                                (function (
                                                                                    e
                                                                                ) {
                                                                                    return function (
                                                                                        r
                                                                                    ) {
                                                                                        return D(
                                                                                            void 0,
                                                                                            void 0,
                                                                                            void 0,
                                                                                            function () {
                                                                                                return X(
                                                                                                    this,
                                                                                                    function (
                                                                                                        n
                                                                                                    ) {
                                                                                                        switch (
                                                                                                            n.label
                                                                                                        ) {
                                                                                                            case 0:
                                                                                                                return [
                                                                                                                    4,
                                                                                                                    I(
                                                                                                                        e
                                                                                                                    ),
                                                                                                                ];
                                                                                                            case 1:
                                                                                                                return (
                                                                                                                    n.sent(),
                                                                                                                    r(
                                                                                                                        Y.replaceSignature(
                                                                                                                            e
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    [
                                                                                                                        2,
                                                                                                                    ]
                                                                                                                );
                                                                                                        }
                                                                                                    }
                                                                                                );
                                                                                            }
                                                                                        );
                                                                                    };
                                                                                })(
                                                                                    l
                                                                                )
                                                                            );
                                                                            try {
                                                                                localStorage.setItem(
                                                                                    "signature",
                                                                                    JSON.stringify(
                                                                                        l
                                                                                    )
                                                                                );
                                                                            } catch (e) {}
                                                                            e(
                                                                                a.home
                                                                            );
                                                                        }
                                                                        var n;
                                                                    },
                                                            },
                                                            {
                                                                children:
                                                                    "coхранить",
                                                            }
                                                        )
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                ],
                            }
                        )
                    );
                },
                Ie = function () {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (
                                    var r, n = 1, t = arguments.length;
                                    n < t;
                                    n++
                                )
                                    for (var i in (r = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            i
                                        ) && (e[i] = r[i]);
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                },
                Be = function () {
                    return (0, t.jsx)(s.Z5, {
                        children: (0, t.jsxs)(
                            s.AW,
                            Ie(
                                { path: a.home, element: (0, t.jsx)(re, {}) },
                                {
                                    children: [
                                        (0, t.jsx)(s.AW, {
                                            index: !0,
                                            element: (0, t.jsx)($, {}),
                                        }),
                                        (0, t.jsx)(s.AW, {
                                            path: a.signature,
                                            element: (0, t.jsx)(ze, {}),
                                        }),
                                        (0, t.jsx)(s.AW, {
                                            path: a.input,
                                            element: (0, t.jsx)(Ce, {}),
                                        }),
                                        (0, t.jsx)(s.AW, {
                                            path: a.print,
                                            element: (0, t.jsx)(he, {}),
                                        }),
                                        (0, t.jsx)(s.AW, {
                                            path: "*",
                                            element: (0, t.jsx)(s.Fg, {
                                                to: a.home,
                                            }),
                                        }),
                                    ],
                                }
                            )
                        ),
                    });
                },
                Me = n(3894),
                We = (0, h.xC)({
                    reducer: { order: x, ordersList: L, signature: Q },
                    middleware: function (e) {
                        return e().concat(Me.Z);
                    },
                }),
                Fe =
                    (n(7345),
                    function () {
                        return (
                            (Fe =
                                Object.assign ||
                                function (e) {
                                    for (
                                        var r, n = 1, t = arguments.length;
                                        n < t;
                                        n++
                                    )
                                        for (var i in (r = arguments[n]))
                                            Object.prototype.hasOwnProperty.call(
                                                r,
                                                i
                                            ) && (e[i] = r[i]);
                                    return e;
                                }),
                            Fe.apply(this, arguments)
                        );
                    });
            (0, i.s)(document.getElementById("root")).render(
                (0, t.jsx)(function () {
                    return (
                        O &&
                            ((e = void 0),
                            (r = void 0),
                            (n = void 0),
                            (i = function () {
                                return (function (e, r) {
                                    var n,
                                        t,
                                        i,
                                        s,
                                        a = {
                                            label: 0,
                                            sent: function () {
                                                if (1 & i[0]) throw i[1];
                                                return i[1];
                                            },
                                            trys: [],
                                            ops: [],
                                        };
                                    return (
                                        (s = {
                                            next: c(0),
                                            throw: c(1),
                                            return: c(2),
                                        }),
                                        "function" == typeof Symbol &&
                                            (s[Symbol.iterator] = function () {
                                                return this;
                                            }),
                                        s
                                    );
                                    function c(s) {
                                        return function (c) {
                                            return (function (s) {
                                                if (n)
                                                    throw new TypeError(
                                                        "Generator is already executing."
                                                    );
                                                for (; a; )
                                                    try {
                                                        if (
                                                            ((n = 1),
                                                            t &&
                                                                (i =
                                                                    2 & s[0]
                                                                        ? t.return
                                                                        : s[0]
                                                                        ? t.throw ||
                                                                          ((i =
                                                                              t.return) &&
                                                                              i.call(
                                                                                  t
                                                                              ),
                                                                          0)
                                                                        : t.next) &&
                                                                !(i = i.call(
                                                                    t,
                                                                    s[1]
                                                                )).done)
                                                        )
                                                            return i;
                                                        switch (
                                                            ((t = 0),
                                                            i &&
                                                                (s = [
                                                                    2 & s[0],
                                                                    i.value,
                                                                ]),
                                                            s[0])
                                                        ) {
                                                            case 0:
                                                            case 1:
                                                                i = s;
                                                                break;
                                                            case 4:
                                                                return (
                                                                    a.label++,
                                                                    {
                                                                        value: s[1],
                                                                        done: !1,
                                                                    }
                                                                );
                                                            case 5:
                                                                a.label++,
                                                                    (t = s[1]),
                                                                    (s = [0]);
                                                                continue;
                                                            case 7:
                                                                (s =
                                                                    a.ops.pop()),
                                                                    a.trys.pop();
                                                                continue;
                                                            default:
                                                                if (
                                                                    !(
                                                                        (i =
                                                                            (i =
                                                                                a.trys)
                                                                                .length >
                                                                                0 &&
                                                                            i[
                                                                                i.length -
                                                                                    1
                                                                            ]) ||
                                                                        (6 !==
                                                                            s[0] &&
                                                                            2 !==
                                                                                s[0])
                                                                    )
                                                                ) {
                                                                    a = 0;
                                                                    continue;
                                                                }
                                                                if (
                                                                    3 ===
                                                                        s[0] &&
                                                                    (!i ||
                                                                        (s[1] >
                                                                            i[0] &&
                                                                            s[1] <
                                                                                i[3]))
                                                                ) {
                                                                    a.label =
                                                                        s[1];
                                                                    break;
                                                                }
                                                                if (
                                                                    6 ===
                                                                        s[0] &&
                                                                    a.label <
                                                                        i[1]
                                                                ) {
                                                                    (a.label =
                                                                        i[1]),
                                                                        (i = s);
                                                                    break;
                                                                }
                                                                if (
                                                                    i &&
                                                                    a.label <
                                                                        i[2]
                                                                ) {
                                                                    (a.label =
                                                                        i[2]),
                                                                        a.ops.push(
                                                                            s
                                                                        );
                                                                    break;
                                                                }
                                                                i[2] &&
                                                                    a.ops.pop(),
                                                                    a.trys.pop();
                                                                continue;
                                                        }
                                                        s = r.call(e, a);
                                                    } catch (e) {
                                                        (s = [6, e]), (t = 0);
                                                    } finally {
                                                        n = i = 0;
                                                    }
                                                if (5 & s[0]) throw s[1];
                                                return {
                                                    value: s[0] ? s[1] : void 0,
                                                    done: !0,
                                                };
                                            })([s, c]);
                                        };
                                    }
                                })(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!O) return [2, null];
                                            if (S.currentUser)
                                                return [2, S.currentUser];
                                            e.label = 1;
                                        case 1:
                                            return (
                                                e.trys.push([1, 3, , 4]),
                                                [4, (0, k.XB)(S)]
                                            );
                                        case 2:
                                        case 3:
                                            return e.sent(), [3, 4];
                                        case 4:
                                            return [
                                                2,
                                                new Promise(function (e) {
                                                    var r = (0, k.Aj)(
                                                        S,
                                                        function (n) {
                                                            r(), e(n);
                                                        }
                                                    );
                                                }),
                                            ];
                                    }
                                });
                            }),
                            new (n || (n = Promise))(function (t, s) {
                                function a(e) {
                                    try {
                                        l(i.next(e));
                                    } catch (e) {
                                        s(e);
                                    }
                                }
                                function c(e) {
                                    try {
                                        l(i.throw(e));
                                    } catch (e) {
                                        s(e);
                                    }
                                }
                                function l(e) {
                                    var r;
                                    e.done
                                        ? t(e.value)
                                        : ((r = e.value),
                                          r instanceof n
                                              ? r
                                              : new n(function (e) {
                                                    e(r);
                                                })).then(a, c);
                                }
                                l((i = i.apply(e, r || [])).next());
                            })).then(function () {
                                We.dispatch(function (e) {
                                    return D(
                                        void 0,
                                        void 0,
                                        void 0,
                                        function () {
                                            var r;
                                            return X(this, function (n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [
                                                            4,
                                                            C(
                                                                void 0,
                                                                void 0,
                                                                void 0,
                                                                function () {
                                                                    var e, r, n;
                                                                    return A(
                                                                        this,
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            switch (
                                                                                t.label
                                                                            ) {
                                                                                case 0:
                                                                                    return (
                                                                                        t.trys.push(
                                                                                            [
                                                                                                0,
                                                                                                2,
                                                                                                ,
                                                                                                3,
                                                                                            ]
                                                                                        ),
                                                                                        (e =
                                                                                            Z()
                                                                                                .base),
                                                                                        [
                                                                                            4,
                                                                                            (0,
                                                                                            g.QT)(
                                                                                                (0,
                                                                                                g.JU)(
                                                                                                    N,
                                                                                                    "".concat(
                                                                                                        e,
                                                                                                        "/signatures"
                                                                                                    ),
                                                                                                    z
                                                                                                )
                                                                                            ),
                                                                                        ]
                                                                                    );
                                                                                case 1:
                                                                                    return [
                                                                                        2,
                                                                                        (r =
                                                                                            t.sent()).exists()
                                                                                            ? r.data()
                                                                                            : null,
                                                                                    ];
                                                                                case 2:
                                                                                    return (
                                                                                        (n =
                                                                                            t.sent()),
                                                                                        console.error(
                                                                                            "Firestore getSignature error:",
                                                                                            n
                                                                                        ),
                                                                                        [
                                                                                            2,
                                                                                            null,
                                                                                        ]
                                                                                    );
                                                                                case 3:
                                                                                    return [
                                                                                        2,
                                                                                    ];
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            ),
                                                        ];
                                                    case 1:
                                                        return (
                                                            (r = n.sent()) &&
                                                                e(
                                                                    Y.replaceSignature(
                                                                        r
                                                                    )
                                                                ),
                                                            [2]
                                                        );
                                                }
                                            });
                                        }
                                    );
                                }),
                                    We.dispatch(function (e) {
                                        return (
                                            (r = function (r) {
                                                e(E.replaceOrders(r));
                                                try {
                                                    localStorage.setItem(
                                                        "ordersList",
                                                        JSON.stringify(r)
                                                    );
                                                } catch (e) {}
                                            }),
                                            (n = Z().base),
                                            (t = (0, g.IO)(
                                                (0, g.hJ)(
                                                    N,
                                                    "".concat(n, "/orders")
                                                )
                                            )),
                                            (0, g.cf)(
                                                t,
                                                function (e) {
                                                    var n = {};
                                                    e.forEach(function (e) {
                                                        var r = e.data();
                                                        n[r.id] = r;
                                                    }),
                                                        r(n);
                                                },
                                                function (e) {
                                                    console.error(
                                                        "Firestore subscribeOrders error:",
                                                        e
                                                    );
                                                }
                                            )
                                        );
                                        var r, n, t;
                                    });
                            }),
                        (0, t.jsx)(
                            o.zt,
                            Fe(
                                { store: We },
                                {
                                    children: (0, t.jsx)(l.VK, {
                                        children: (0, t.jsx)(Be, {}),
                                    }),
                                }
                            )
                        )
                    );
                    var e, r, n, i;
                }, {})
            );
        },
    },
    (e) => {
        e.O(0, [794], () => (1874, e((e.s = 1874)))), e.O();
    },
]);
//# sourceMappingURL=main.e5b9d6fda7dc5ac8ebf4.js.map
