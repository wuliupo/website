/*! HPE-Prod build: Tue Oct 27 2015 22:43:32 GMT-0400 (EDT) */
!
function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, t),
        o.loaded = !0,
        o.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(a, r) {
        for (var s, l, c = 0,
        u = []; c < a.length; c++) l = a[c],
        o[l] && u.push.apply(u, o[l]),
        o[l] = 0;
        for (s in r) e[s] = r[s];
        for (n && n(a, r); u.length;) u.shift().call(null, t);
        return r[0] ? (i[0] = 0, t(0)) : void 0
    };
    var i = {},
    o = {
        2 : 0
    };
    return t.e = function(e, n) {
        if (0 === o[e]) return n.call(null, t);
        if (void 0 !== o[e]) o[e].push(n);
        else {
            o[e] = [n];
            var i = document.getElementsByTagName("head")[0],
            a = document.createElement("script");
            a.type = "text/javascript",
            a.charset = "utf-8",
            a.async = !0,
            a.src = t.p + "hpe-" + e + "-chunk.js",
            i.appendChild(a)
        }
    },
    t.m = e,
    t.c = i,
    t.p = "",
    t(0)
} ({
    0 : function(e, t, n) {
        n(77),
        n(5),
        n(10),
        n(78),
        n(79),
        n(21),
        n(80),
        n(81),
        n(82),
        n(83),
        n(84),
        n(85),
        e.exports = n(86)
    },
    5 : function(e, t) { (function() {
            /*!
	 * Amplify 1.1.2
	 *
	 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
	 * Dual licensed under the MIT or GPL licenses.
	 * http://appendto.com/open-source-licenses
	 *
	 * http://amplifyjs.com
	 */
            !
            function(e, t) {
                var n = [].slice,
                i = {};
                e.amplify = {
                    publish: function(e) {
                        if ("string" != typeof e) throw new Error("You must provide a valid topic to publish.");
                        var t, o, a, r, s = n.call(arguments, 1),
                        l = 0;
                        if (!i[e]) return ! 0;
                        for (t = i[e].slice(), a = t.length; a > l && (o = t[l], r = o.callback.apply(o.context, s), r !== !1); l++);
                        return r !== !1
                    },
                    subscribe: function(e, t, n, o) {
                        if ("string" != typeof e) throw new Error("You must provide a valid topic to create a subscription.");
                        3 === arguments.length && "number" == typeof n && (o = n, n = t, t = null),
                        2 === arguments.length && (n = t, t = null),
                        o = o || 10;
                        for (var a, r = 0,
                        s = e.split(/\s/), l = s.length; l > r; r++) {
                            e = s[r],
                            a = !1,
                            i[e] || (i[e] = []);
                            for (var c = i[e].length - 1, u = {
                                callback: n,
                                context: t,
                                priority: o
                            }; c >= 0; c--) if (i[e][c].priority <= o) {
                                i[e].splice(c + 1, 0, u),
                                a = !0;
                                break
                            }
                            a || i[e].unshift(u)
                        }
                        return n
                    },
                    unsubscribe: function(e, t, n) {
                        if ("string" != typeof e) throw new Error("You must provide a valid topic to remove a subscription.");
                        if (2 === arguments.length && (n = t, t = null), i[e]) for (var o = i[e].length, a = 0; o > a; a++) i[e][a].callback === n && (!t || i[e][a].context === t) && (i[e].splice(a, 1), a--, o--)
                    }
                }
            } (this),
            function(e, t) {
                function n(e, n) {
                    i.addType(e,
                    function(a, r, s) {
                        var l, c, u, d, h = r,
                        f = (new Date).getTime();
                        if (!a) {
                            h = {},
                            d = [],
                            u = 0;
                            try {
                                for (a = n.length; a = n.key(u++);) o.test(a) && (c = JSON.parse(n.getItem(a)), c.expires && c.expires <= f ? d.push(a) : h[a.replace(o, "")] = c.data);
                                for (; a = d.pop();) n.removeItem(a)
                            } catch(p) {}
                            return h
                        }
                        if (a = "__amplify__" + a, r === t) {
                            if (l = n.getItem(a), c = l ? JSON.parse(l) : {
                                expires: -1
                            },
                            !(c.expires && c.expires <= f)) return c.data;
                            n.removeItem(a)
                        } else if (null === r) n.removeItem(a);
                        else {
                            c = JSON.stringify({
                                data: r,
                                expires: s.expires ? f + s.expires: null
                            });
                            try {
                                n.setItem(a, c)
                            } catch(p) {
                                i[e]();
                                try {
                                    n.setItem(a, c)
                                } catch(p) {
                                    throw i.error()
                                }
                            }
                        }
                        return h
                    })
                }
                var i = e.store = function(e, t, n) {
                    var o = i.type;
                    return n && n.type && n.type in i.types && (o = n.type),
                    i.types[o](e, t, n || {})
                };
                i.types = {},
                i.type = null,
                i.addType = function(e, t) {
                    i.type || (i.type = e),
                    i.types[e] = t,
                    i[e] = function(t, n, o) {
                        return o = o || {},
                        o.type = e,
                        i(t, n, o)
                    }
                },
                i.error = function() {
                    return "amplify.store quota exceeded"
                };
                var o = /^__amplify__/;
                for (var a in {
                    localStorage: 1,
                    sessionStorage: 1
                }) try {
                    window[a].setItem("__amplify__", "x"),
                    window[a].removeItem("__amplify__"),
                    n(a, window[a])
                } catch(r) {}
                if (!i.types.localStorage && window.globalStorage) try {
                    n("globalStorage", window.globalStorage[window.location.hostname]),
                    "sessionStorage" === i.type && (i.type = "globalStorage")
                } catch(r) {} !
                function() {
                    if (!i.types.localStorage) {
                        var e = document.createElement("div"),
                        n = "amplify";
                        e.style.display = "none",
                        document.getElementsByTagName("head")[0].appendChild(e);
                        try {
                            e.addBehavior("#default#userdata"),
                            e.load(n)
                        } catch(o) {
                            return void e.parentNode.removeChild(e)
                        }
                        i.addType("userData",
                        function(o, a, r) {
                            e.load(n);
                            var s, l, c, u, d, h = a,
                            f = (new Date).getTime();
                            if (!o) {
                                for (h = {},
                                d = [], u = 0; s = e.XMLDocument.documentElement.attributes[u++];) l = JSON.parse(s.value),
                                l.expires && l.expires <= f ? d.push(s.name) : h[s.name] = l.data;
                                for (; o = d.pop();) e.removeAttribute(o);
                                return e.save(n),
                                h
                            }
                            if (o = o.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-"), o = o.replace(/^-/, "_-"), a === t) {
                                if (s = e.getAttribute(o), l = s ? JSON.parse(s) : {
                                    expires: -1
                                },
                                !(l.expires && l.expires <= f)) return l.data;
                                e.removeAttribute(o)
                            } else null === a ? e.removeAttribute(o) : (c = e.getAttribute(o), l = JSON.stringify({
                                data: a,
                                expires: r.expires ? f + r.expires: null
                            }), e.setAttribute(o, l));
                            try {
                                e.save(n)
                            } catch(p) {
                                null === c ? e.removeAttribute(o) : e.setAttribute(o, c),
                                i.userData();
                                try {
                                    e.setAttribute(o, l),
                                    e.save(n)
                                } catch(p) {
                                    throw null === c ? e.removeAttribute(o) : e.setAttribute(o, c),
                                    i.error()
                                }
                            }
                            return h
                        })
                    }
                } (),
                function() {
                    function e(e) {
                        return e === t ? t: JSON.parse(JSON.stringify(e))
                    }
                    var n = {},
                    o = {};
                    i.addType("memory",
                    function(i, a, r) {
                        return i ? a === t ? e(n[i]) : (o[i] && (clearTimeout(o[i]), delete o[i]), null === a ? (delete n[i], null) : (n[i] = a, r.expires && (o[i] = setTimeout(function() {
                            delete n[i],
                            delete o[i]
                        },
                        r.expires)), a)) : e(n)
                    })
                } ()
            } (this.amplify = this.amplify || {}),
            function(e, t) {
                "use strict";
                function n() {}
                function i(e) {
                    return "[object Function]" === {}.toString.call(e)
                }
                function o(e) {
                    var t = !1;
                    return setTimeout(function() {
                        t = !0
                    },
                    1),
                    function() {
                        var n = this,
                        i = arguments;
                        t ? e.apply(n, i) : setTimeout(function() {
                            e.apply(n, i)
                        },
                        1)
                    }
                }
                e.request = function(t, a, r) {
                    var s = t || {};
                    "string" == typeof s && (i(a) && (r = a, a = {}), s = {
                        resourceId: t,
                        data: a || {},
                        success: r
                    });
                    var l = {
                        abort: n
                    },
                    c = e.request.resources[s.resourceId],
                    u = s.success || n,
                    d = s.error || n;
                    if (s.success = o(function(t, n) {
                        n = n || "success",
                        e.publish("request.success", s, t, n),
                        e.publish("request.complete", s, t, n),
                        u(t, n)
                    }), s.error = o(function(t, n) {
                        n = n || "error",
                        e.publish("request.error", s, t, n),
                        e.publish("request.complete", s, t, n),
                        d(t, n)
                    }), !c) throw s.resourceId ? "amplify.request: unknown resourceId: " + s.resourceId: "amplify.request: no resourceId provided";
                    return e.publish("request.before", s) ? (e.request.resources[s.resourceId](s, l), l) : void s.error(null, "abort")
                },
                e.request.types = {},
                e.request.resources = {},
                e.request.define = function(t, n, i) {
                    if ("string" == typeof n) {
                        if (! (n in e.request.types)) throw "amplify.request.define: unknown type: " + n;
                        i.resourceId = t,
                        e.request.resources[t] = e.request.types[n](i)
                    } else e.request.resources[t] = n
                }
            } (amplify),
            function(e, t, n) {
                "use strict";
                var i = ["status", "statusText", "responseText", "responseXML", "readyState"],
                o = /\{([^\}]+)\}/g;
                e.request.types.ajax = function(o) {
                    return o = t.extend({
                        type: "GET"
                    },
                    o),
                    function(a, r) {
                        var s, l, c = (o.url, r.abort),
                        u = t.extend(!0, {},
                        o, {
                            data: a.data
                        }),
                        d = !1,
                        h = {
                            readyState: 0,
                            setRequestHeader: function(e, t) {
                                return s.setRequestHeader(e, t)
                            },
                            getAllResponseHeaders: function() {
                                return s.getAllResponseHeaders()
                            },
                            getResponseHeader: function(e) {
                                return s.getResponseHeader(e)
                            },
                            overrideMimeType: function(e) {
                                return s.overrideMimeType(e)
                            },
                            abort: function() {
                                d = !0;
                                try {
                                    s.abort()
                                } catch(e) {}
                                l(null, "abort")
                            },
                            success: function(e, t) {
                                a.success(e, t)
                            },
                            error: function(e, t) {
                                a.error(e, t)
                            }
                        };
                        l = function(e, o) {
                            t.each(i,
                            function(e, t) {
                                try {
                                    h[t] = s[t]
                                } catch(n) {}
                            }),
                            /OK$/.test(h.statusText) && (h.statusText = "success"),
                            e === n && (e = null),
                            d && (o = "abort"),
                            /timeout|error|abort/.test(o) ? h.error(e, o) : h.success(e, o),
                            l = t.noop
                        },
                        e.publish("request.ajax.preprocess", o, a, u, h),
                        t.extend(u, {
                            isJSONP: function() {
                                return /jsonp/gi.test(this.dataType)
                            },
                            cacheURL: function() {
                                if (!this.isJSONP()) return this.url;
                                var e = "callback";
                                this.hasOwnProperty("jsonp") && (this.jsonp !== !1 ? e = this.jsonp: this.hasOwnProperty("jsonpCallback") && (e = this.jsonpCallback));
                                var t = new RegExp("&?" + e + "=[^&]*&?", "gi");
                                return this.url.replace(t, "")
                            },
                            success: function(e, t) {
                                l(e, t)
                            },
                            error: function(e, t) {
                                l(null, t)
                            },
                            beforeSend: function(t, n) {
                                s = t,
                                u = n;
                                var i = o.beforeSend ? o.beforeSend.call(this, h, u) : !0;
                                return i && e.publish("request.before.ajax", o, a, u, h)
                            }
                        }),
                        u.cache && u.isJSONP() && t.extend(u, {
                            cache: !0
                        }),
                        t.ajax(u),
                        r.abort = function() {
                            h.abort(),
                            c.call(this)
                        }
                    }
                },
                e.subscribe("request.ajax.preprocess",
                function(e, n, i) {
                    var a = [],
                    r = i.data;
                    "string" != typeof r && (r = t.extend(!0, {},
                    e.data, r), i.url = i.url.replace(o,
                    function(e, t) {
                        return t in r ? (a.push(t), r[t]) : void 0
                    }), t.each(a,
                    function(e, t) {
                        delete r[t]
                    }), i.data = r)
                }),
                e.subscribe("request.ajax.preprocess",
                function(e, n, i) {
                    var o = i.data,
                    a = e.dataMap;
                    a && "string" != typeof o && (t.isFunction(a) ? i.data = a(o) : (t.each(e.dataMap,
                    function(e, t) {
                        e in o && (o[t] = o[e], delete o[e])
                    }), i.data = o))
                });
                var a = e.request.cache = {
                    _key: function(e, t, n) {
                        function i() {
                            return n.charCodeAt(a++) << 24 | n.charCodeAt(a++) << 16 | n.charCodeAt(a++) << 8 | n.charCodeAt(a++) << 0
                        }
                        n = t + n;
                        for (var o = n.length,
                        a = 0,
                        r = i(); o > a;) r ^= i();
                        return "request-" + e + "-" + r
                    },
                    _default: function() {
                        var e = {};
                        return function(t, n, i, o) {
                            var r = a._key(n.resourceId, i.cacheURL(), i.data),
                            s = t.cache;
                            if (r in e) return o.success(e[r]),
                            !1;
                            var l = o.success;
                            o.success = function(t) {
                                e[r] = t,
                                "number" == typeof s && setTimeout(function() {
                                    delete e[r]
                                },
                                s),
                                l.apply(this, arguments)
                            }
                        }
                    } ()
                };
                e.store && (t.each(e.store.types,
                function(t) {
                    a[t] = function(n, i, o, r) {
                        var s = a._key(i.resourceId, o.cacheURL(), o.data),
                        l = e.store[t](s);
                        if (l) return o.success(l),
                        !1;
                        var c = r.success;
                        r.success = function(i) {
                            e.store[t](s, i, {
                                expires: n.cache.expires
                            }),
                            c.apply(this, arguments)
                        }
                    }
                }), a.persist = a[e.store.type]),
                e.subscribe("request.before.ajax",
                function(e) {
                    var t = e.cache;
                    return t ? (t = t.type || t, a[t in a ? t: "_default"].apply(this, arguments)) : void 0
                }),
                e.request.decoders = {
                    jsend: function(e, t, n, i, o) {
                        "success" === e.status ? i(e.data) : "fail" === e.status ? o(e.data, "fail") : "error" === e.status ? (delete e.status, o(e, "error")) : o(null, "error")
                    }
                },
                e.subscribe("request.before.ajax",
                function(n, i, o, a) {
                    function r(e, t) {
                        l(e, t)
                    }
                    function s(e, t) {
                        c(e, t)
                    }
                    var l = a.success,
                    c = a.error,
                    u = t.isFunction(n.decoder) ? n.decoder: n.decoder in e.request.decoders ? e.request.decoders[n.decoder] : e.request.decoders._default;
                    u && (a.success = function(e, t) {
                        u(e, t, a, r, s)
                    },
                    a.error = function(e, t) {
                        u(e, t, a, r, s)
                    })
                })
            } (amplify, jQuery),
            e.exports = window.amplify
        }).call(window)
    },
    10 : function(e, t) { (function() {
            var n = this,
            i = n._,
            o = Array.prototype,
            a = Object.prototype,
            r = Function.prototype,
            s = o.push,
            l = o.slice,
            c = o.concat,
            u = a.toString,
            d = a.hasOwnProperty,
            h = Array.isArray,
            f = Object.keys,
            p = r.bind,
            m = function(e) {
                return e instanceof m ? e: this instanceof m ? void(this._wrapped = e) : new m(e)
            };
            "undefined" != typeof t ? ("undefined" != typeof e && e.exports && (t = e.exports = m), t._ = m) : n._ = m,
            m.VERSION = "1.7.0";
            var g = function(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function(n, i, o) {
                        return e.call(t, n, i, o)
                    };
                case 4:
                    return function(n, i, o, a) {
                        return e.call(t, n, i, o, a)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            };
            m.iteratee = function(e, t, n) {
                return null == e ? m.identity: m.isFunction(e) ? g(e, t, n) : m.isObject(e) ? m.matches(e) : m.property(e)
            },
            m.each = m.forEach = function(e, t, n) {
                if (null == e) return e;
                t = g(t, n);
                var i, o = e.length;
                if (o === +o) for (i = 0; o > i; i++) t(e[i], i, e);
                else {
                    var a = m.keys(e);
                    for (i = 0, o = a.length; o > i; i++) t(e[a[i]], a[i], e)
                }
                return e
            },
            m.map = m.collect = function(e, t, n) {
                if (null == e) return [];
                t = m.iteratee(t, n);
                for (var i, o = e.length !== +e.length && m.keys(e), a = (o || e).length, r = Array(a), s = 0; a > s; s++) i = o ? o[s] : s,
                r[s] = t(e[i], i, e);
                return r
            };
            var v = "Reduce of empty array with no initial value";
            m.reduce = m.foldl = m.inject = function(e, t, n, i) {
                null == e && (e = []),
                t = g(t, i, 4);
                var o, a = e.length !== +e.length && m.keys(e),
                r = (a || e).length,
                s = 0;
                if (arguments.length < 3) {
                    if (!r) throw new TypeError(v);
                    n = e[a ? a[s++] : s++]
                }
                for (; r > s; s++) o = a ? a[s] : s,
                n = t(n, e[o], o, e);
                return n
            },
            m.reduceRight = m.foldr = function(e, t, n, i) {
                null == e && (e = []),
                t = g(t, i, 4);
                var o, a = e.length !== +e.length && m.keys(e),
                r = (a || e).length;
                if (arguments.length < 3) {
                    if (!r) throw new TypeError(v);
                    n = e[a ? a[--r] : --r]
                }
                for (; r--;) o = a ? a[r] : r,
                n = t(n, e[o], o, e);
                return n
            },
            m.find = m.detect = function(e, t, n) {
                var i;
                return t = m.iteratee(t, n),
                m.some(e,
                function(e, n, o) {
                    return t(e, n, o) ? (i = e, !0) : void 0
                }),
                i
            },
            m.filter = m.select = function(e, t, n) {
                var i = [];
                return null == e ? i: (t = m.iteratee(t, n), m.each(e,
                function(e, n, o) {
                    t(e, n, o) && i.push(e)
                }), i)
            },
            m.reject = function(e, t, n) {
                return m.filter(e, m.negate(m.iteratee(t)), n)
            },
            m.every = m.all = function(e, t, n) {
                if (null == e) return ! 0;
                t = m.iteratee(t, n);
                var i, o, a = e.length !== +e.length && m.keys(e),
                r = (a || e).length;
                for (i = 0; r > i; i++) if (o = a ? a[i] : i, !t(e[o], o, e)) return ! 1;
                return ! 0
            },
            m.some = m.any = function(e, t, n) {
                if (null == e) return ! 1;
                t = m.iteratee(t, n);
                var i, o, a = e.length !== +e.length && m.keys(e),
                r = (a || e).length;
                for (i = 0; r > i; i++) if (o = a ? a[i] : i, t(e[o], o, e)) return ! 0;
                return ! 1
            },
            m.contains = m.include = function(e, t) {
                return null == e ? !1 : (e.length !== +e.length && (e = m.values(e)), m.indexOf(e, t) >= 0)
            },
            m.invoke = function(e, t) {
                var n = l.call(arguments, 2),
                i = m.isFunction(t);
                return m.map(e,
                function(e) {
                    return (i ? t: e[t]).apply(e, n)
                })
            },
            m.pluck = function(e, t) {
                return m.map(e, m.property(t))
            },
            m.where = function(e, t) {
                return m.filter(e, m.matches(t))
            },
            m.findWhere = function(e, t) {
                return m.find(e, m.matches(t))
            },
            m.max = function(e, t, n) {
                var i, o, a = -1 / 0,
                r = -1 / 0;
                if (null == t && null != e) {
                    e = e.length === +e.length ? e: m.values(e);
                    for (var s = 0,
                    l = e.length; l > s; s++) i = e[s],
                    i > a && (a = i)
                } else t = m.iteratee(t, n),
                m.each(e,
                function(e, n, i) {
                    o = t(e, n, i),
                    (o > r || o === -1 / 0 && a === -1 / 0) && (a = e, r = o)
                });
                return a
            },
            m.min = function(e, t, n) {
                var i, o, a = 1 / 0,
                r = 1 / 0;
                if (null == t && null != e) {
                    e = e.length === +e.length ? e: m.values(e);
                    for (var s = 0,
                    l = e.length; l > s; s++) i = e[s],
                    a > i && (a = i)
                } else t = m.iteratee(t, n),
                m.each(e,
                function(e, n, i) {
                    o = t(e, n, i),
                    (r > o || 1 / 0 === o && 1 / 0 === a) && (a = e, r = o)
                });
                return a
            },
            m.shuffle = function(e) {
                for (var t, n = e && e.length === +e.length ? e: m.values(e), i = n.length, o = Array(i), a = 0; i > a; a++) t = m.random(0, a),
                t !== a && (o[a] = o[t]),
                o[t] = n[a];
                return o
            },
            m.sample = function(e, t, n) {
                return null == t || n ? (e.length !== +e.length && (e = m.values(e)), e[m.random(e.length - 1)]) : m.shuffle(e).slice(0, Math.max(0, t))
            },
            m.sortBy = function(e, t, n) {
                return t = m.iteratee(t, n),
                m.pluck(m.map(e,
                function(e, n, i) {
                    return {
                        value: e,
                        index: n,
                        criteria: t(e, n, i)
                    }
                }).sort(function(e, t) {
                    var n = e.criteria,
                    i = t.criteria;
                    if (n !== i) {
                        if (n > i || void 0 === n) return 1;
                        if (i > n || void 0 === i) return - 1
                    }
                    return e.index - t.index
                }), "value")
            };
            var b = function(e) {
                return function(t, n, i) {
                    var o = {};
                    return n = m.iteratee(n, i),
                    m.each(t,
                    function(i, a) {
                        var r = n(i, a, t);
                        e(o, i, r)
                    }),
                    o
                }
            };
            m.groupBy = b(function(e, t, n) {
                m.has(e, n) ? e[n].push(t) : e[n] = [t]
            }),
            m.indexBy = b(function(e, t, n) {
                e[n] = t
            }),
            m.countBy = b(function(e, t, n) {
                m.has(e, n) ? e[n]++:e[n] = 1
            }),
            m.sortedIndex = function(e, t, n, i) {
                n = m.iteratee(n, i, 1);
                for (var o = n(t), a = 0, r = e.length; r > a;) {
                    var s = a + r >>> 1;
                    n(e[s]) < o ? a = s + 1 : r = s
                }
                return a
            },
            m.toArray = function(e) {
                return e ? m.isArray(e) ? l.call(e) : e.length === +e.length ? m.map(e, m.identity) : m.values(e) : []
            },
            m.size = function(e) {
                return null == e ? 0 : e.length === +e.length ? e.length: m.keys(e).length
            },
            m.partition = function(e, t, n) {
                t = m.iteratee(t, n);
                var i = [],
                o = [];
                return m.each(e,
                function(e, n, a) { (t(e, n, a) ? i: o).push(e)
                }),
                [i, o]
            },
            m.first = m.head = m.take = function(e, t, n) {
                return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : l.call(e, 0, t)
            },
            m.initial = function(e, t, n) {
                return l.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
            },
            m.last = function(e, t, n) {
                return null == e ? void 0 : null == t || n ? e[e.length - 1] : l.call(e, Math.max(e.length - t, 0))
            },
            m.rest = m.tail = m.drop = function(e, t, n) {
                return l.call(e, null == t || n ? 1 : t)
            },
            m.compact = function(e) {
                return m.filter(e, m.identity)
            };
            var y = function(e, t, n, i) {
                if (t && m.every(e, m.isArray)) return c.apply(i, e);
                for (var o = 0,
                a = e.length; a > o; o++) {
                    var r = e[o];
                    m.isArray(r) || m.isArguments(r) ? t ? s.apply(i, r) : y(r, t, n, i) : n || i.push(r)
                }
                return i
            };
            m.flatten = function(e, t) {
                return y(e, t, !1, [])
            },
            m.without = function(e) {
                return m.difference(e, l.call(arguments, 1))
            },
            m.uniq = m.unique = function(e, t, n, i) {
                if (null == e) return [];
                m.isBoolean(t) || (i = n, n = t, t = !1),
                null != n && (n = m.iteratee(n, i));
                for (var o = [], a = [], r = 0, s = e.length; s > r; r++) {
                    var l = e[r];
                    if (t) r && a === l || o.push(l),
                    a = l;
                    else if (n) {
                        var c = n(l, r, e);
                        m.indexOf(a, c) < 0 && (a.push(c), o.push(l))
                    } else m.indexOf(o, l) < 0 && o.push(l)
                }
                return o
            },
            m.union = function() {
                return m.uniq(y(arguments, !0, !0, []))
            },
            m.intersection = function(e) {
                if (null == e) return [];
                for (var t = [], n = arguments.length, i = 0, o = e.length; o > i; i++) {
                    var a = e[i];
                    if (!m.contains(t, a)) {
                        for (var r = 1; n > r && m.contains(arguments[r], a); r++);
                        r === n && t.push(a)
                    }
                }
                return t
            },
            m.difference = function(e) {
                var t = y(l.call(arguments, 1), !0, !0, []);
                return m.filter(e,
                function(e) {
                    return ! m.contains(t, e)
                })
            },
            m.zip = function(e) {
                if (null == e) return [];
                for (var t = m.max(arguments, "length").length, n = Array(t), i = 0; t > i; i++) n[i] = m.pluck(arguments, i);
                return n
            },
            m.object = function(e, t) {
                if (null == e) return {};
                for (var n = {},
                i = 0,
                o = e.length; o > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
                return n
            },
            m.indexOf = function(e, t, n) {
                if (null == e) return - 1;
                var i = 0,
                o = e.length;
                if (n) {
                    if ("number" != typeof n) return i = m.sortedIndex(e, t),
                    e[i] === t ? i: -1;
                    i = 0 > n ? Math.max(0, o + n) : n
                }
                for (; o > i; i++) if (e[i] === t) return i;
                return - 1
            },
            m.lastIndexOf = function(e, t, n) {
                if (null == e) return - 1;
                var i = e.length;
                for ("number" == typeof n && (i = 0 > n ? i + n + 1 : Math.min(i, n + 1)); --i >= 0;) if (e[i] === t) return i;
                return - 1
            },
            m.range = function(e, t, n) {
                arguments.length <= 1 && (t = e || 0, e = 0),
                n = n || 1;
                for (var i = Math.max(Math.ceil((t - e) / n), 0), o = Array(i), a = 0; i > a; a++, e += n) o[a] = e;
                return o
            };
            var w = function() {};
            m.bind = function(e, t) {
                var n, i;
                if (p && e.bind === p) return p.apply(e, l.call(arguments, 1));
                if (!m.isFunction(e)) throw new TypeError("Bind must be called on a function");
                return n = l.call(arguments, 2),
                i = function() {
                    if (! (this instanceof i)) return e.apply(t, n.concat(l.call(arguments)));
                    w.prototype = e.prototype;
                    var o = new w;
                    w.prototype = null;
                    var a = e.apply(o, n.concat(l.call(arguments)));
                    return m.isObject(a) ? a: o
                }
            },
            m.partial = function(e) {
                var t = l.call(arguments, 1);
                return function() {
                    for (var n = 0,
                    i = t.slice(), o = 0, a = i.length; a > o; o++) i[o] === m && (i[o] = arguments[n++]);
                    for (; n < arguments.length;) i.push(arguments[n++]);
                    return e.apply(this, i)
                }
            },
            m.bindAll = function(e) {
                var t, n, i = arguments.length;
                if (1 >= i) throw new Error("bindAll must be passed function names");
                for (t = 1; i > t; t++) n = arguments[t],
                e[n] = m.bind(e[n], e);
                return e
            },
            m.memoize = function(e, t) {
                var n = function(i) {
                    var o = n.cache,
                    a = t ? t.apply(this, arguments) : i;
                    return m.has(o, a) || (o[a] = e.apply(this, arguments)),
                    o[a]
                };
                return n.cache = {},
                n
            },
            m.delay = function(e, t) {
                var n = l.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                },
                t)
            },
            m.defer = function(e) {
                return m.delay.apply(m, [e, 1].concat(l.call(arguments, 1)))
            },
            m.throttle = function(e, t, n) {
                var i, o, a, r = null,
                s = 0;
                n || (n = {});
                var l = function() {
                    s = n.leading === !1 ? 0 : m.now(),
                    r = null,
                    a = e.apply(i, o),
                    r || (i = o = null)
                };
                return function() {
                    var c = m.now();
                    s || n.leading !== !1 || (s = c);
                    var u = t - (c - s);
                    return i = this,
                    o = arguments,
                    0 >= u || u > t ? (clearTimeout(r), r = null, s = c, a = e.apply(i, o), r || (i = o = null)) : r || n.trailing === !1 || (r = setTimeout(l, u)),
                    a
                }
            },
            m.debounce = function(e, t, n) {
                var i, o, a, r, s, l = function() {
                    var c = m.now() - r;
                    t > c && c > 0 ? i = setTimeout(l, t - c) : (i = null, n || (s = e.apply(a, o), i || (a = o = null)))
                };
                return function() {
                    a = this,
                    o = arguments,
                    r = m.now();
                    var c = n && !i;
                    return i || (i = setTimeout(l, t)),
                    c && (s = e.apply(a, o), a = o = null),
                    s
                }
            },
            m.wrap = function(e, t) {
                return m.partial(t, e)
            },
            m.negate = function(e) {
                return function() {
                    return ! e.apply(this, arguments)
                }
            },
            m.compose = function() {
                var e = arguments,
                t = e.length - 1;
                return function() {
                    for (var n = t,
                    i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                    return i
                }
            },
            m.after = function(e, t) {
                return function() {
                    return--e < 1 ? t.apply(this, arguments) : void 0
                }
            },
            m.before = function(e, t) {
                var n;
                return function() {
                    return--e > 0 ? n = t.apply(this, arguments) : t = null,
                    n
                }
            },
            m.once = m.partial(m.before, 2),
            m.keys = function(e) {
                if (!m.isObject(e)) return [];
                if (f) return f(e);
                var t = [];
                for (var n in e) m.has(e, n) && t.push(n);
                return t
            },
            m.values = function(e) {
                for (var t = m.keys(e), n = t.length, i = Array(n), o = 0; n > o; o++) i[o] = e[t[o]];
                return i
            },
            m.pairs = function(e) {
                for (var t = m.keys(e), n = t.length, i = Array(n), o = 0; n > o; o++) i[o] = [t[o], e[t[o]]];
                return i
            },
            m.invert = function(e) {
                for (var t = {},
                n = m.keys(e), i = 0, o = n.length; o > i; i++) t[e[n[i]]] = n[i];
                return t
            },
            m.functions = m.methods = function(e) {
                var t = [];
                for (var n in e) m.isFunction(e[n]) && t.push(n);
                return t.sort()
            },
            m.extend = function(e) {
                if (!m.isObject(e)) return e;
                for (var t, n, i = 1,
                o = arguments.length; o > i; i++) {
                    t = arguments[i];
                    for (n in t) d.call(t, n) && (e[n] = t[n])
                }
                return e
            },
            m.pick = function(e, t, n) {
                var i, o = {};
                if (null == e) return o;
                if (m.isFunction(t)) {
                    t = g(t, n);
                    for (i in e) {
                        var a = e[i];
                        t(a, i, e) && (o[i] = a)
                    }
                } else {
                    var r = c.apply([], l.call(arguments, 1));
                    e = new Object(e);
                    for (var s = 0,
                    u = r.length; u > s; s++) i = r[s],
                    i in e && (o[i] = e[i])
                }
                return o
            },
            m.omit = function(e, t, n) {
                if (m.isFunction(t)) t = m.negate(t);
                else {
                    var i = m.map(c.apply([], l.call(arguments, 1)), String);
                    t = function(e, t) {
                        return ! m.contains(i, t)
                    }
                }
                return m.pick(e, t, n)
            },
            m.defaults = function(e) {
                if (!m.isObject(e)) return e;
                for (var t = 1,
                n = arguments.length; n > t; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o])
                }
                return e
            },
            m.clone = function(e) {
                return m.isObject(e) ? m.isArray(e) ? e.slice() : m.extend({},
                e) : e
            },
            m.tap = function(e, t) {
                return t(e),
                e
            };
            var x = function(e, t, n, i) {
                if (e === t) return 0 !== e || 1 / e === 1 / t;
                if (null == e || null == t) return e === t;
                e instanceof m && (e = e._wrapped),
                t instanceof m && (t = t._wrapped);
                var o = u.call(e);
                if (o !== u.call(t)) return ! 1;
                switch (o) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return + e !== +e ? +t !== +t: 0 === +e ? 1 / +e === 1 / t: +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return + e === +t
                }
                if ("object" != typeof e || "object" != typeof t) return ! 1;
                for (var a = n.length; a--;) if (n[a] === e) return i[a] === t;
                var r = e.constructor,
                s = t.constructor;
                if (r !== s && "constructor" in e && "constructor" in t && !(m.isFunction(r) && r instanceof r && m.isFunction(s) && s instanceof s)) return ! 1;
                n.push(e),
                i.push(t);
                var l, c;
                if ("[object Array]" === o) {
                    if (l = e.length, c = l === t.length) for (; l--&&(c = x(e[l], t[l], n, i)););
                } else {
                    var d, h = m.keys(e);
                    if (l = h.length, c = m.keys(t).length === l) for (; l--&&(d = h[l], c = m.has(t, d) && x(e[d], t[d], n, i)););
                }
                return n.pop(),
                i.pop(),
                c
            };
            m.isEqual = function(e, t) {
                return x(e, t, [], [])
            },
            m.isEmpty = function(e) {
                if (null == e) return ! 0;
                if (m.isArray(e) || m.isString(e) || m.isArguments(e)) return 0 === e.length;
                for (var t in e) if (m.has(e, t)) return ! 1;
                return ! 0
            },
            m.isElement = function(e) {
                return ! (!e || 1 !== e.nodeType)
            },
            m.isArray = h ||
            function(e) {
                return "[object Array]" === u.call(e)
            },
            m.isObject = function(e) {
                var t = typeof e;
                return "function" === t || "object" === t && !!e
            },
            m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
            function(e) {
                m["is" + e] = function(t) {
                    return u.call(t) === "[object " + e + "]"
                }
            }),
            m.isArguments(arguments) || (m.isArguments = function(e) {
                return m.has(e, "callee")
            }),
            "function" != typeof / . / &&(m.isFunction = function(e) {
                return "function" == typeof e || !1
            }),
            m.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            },
            m.isNaN = function(e) {
                return m.isNumber(e) && e !== +e
            },
            m.isBoolean = function(e) {
                return e === !0 || e === !1 || "[object Boolean]" === u.call(e)
            },
            m.isNull = function(e) {
                return null === e
            },
            m.isUndefined = function(e) {
                return void 0 === e
            },
            m.has = function(e, t) {
                return null != e && d.call(e, t)
            },
            m.noConflict = function() {
                return n._ = i,
                this
            },
            m.identity = function(e) {
                return e
            },
            m.constant = function(e) {
                return function() {
                    return e
                }
            },
            m.noop = function() {},
            m.property = function(e) {
                return function(t) {
                    return t[e]
                }
            },
            m.matches = function(e) {
                var t = m.pairs(e),
                n = t.length;
                return function(e) {
                    if (null == e) return ! n;
                    e = new Object(e);
                    for (var i = 0; n > i; i++) {
                        var o = t[i],
                        a = o[0];
                        if (o[1] !== e[a] || !(a in e)) return ! 1
                    }
                    return ! 0
                }
            },
            m.times = function(e, t, n) {
                var i = Array(Math.max(0, e));
                t = g(t, n, 1);
                for (var o = 0; e > o; o++) i[o] = t(o);
                return i
            },
            m.random = function(e, t) {
                return null == t && (t = e, e = 0),
                e + Math.floor(Math.random() * (t - e + 1))
            },
            m.now = Date.now ||
            function() {
                return (new Date).getTime()
            };
            var C = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            _ = m.invert(C),
            S = function(e) {
                var t = function(t) {
                    return e[t]
                },
                n = "(?:" + m.keys(e).join("|") + ")",
                i = RegExp(n),
                o = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "": "" + e,
                    i.test(e) ? e.replace(o, t) : e
                }
            };
            m.escape = S(C),
            m.unescape = S(_),
            m.result = function(e, t) {
                if (null == e) return void 0;
                var n = e[t];
                return m.isFunction(n) ? e[t]() : n
            };
            var $ = 0;
            m.uniqueId = function(e) {
                var t = ++$ + "";
                return e ? e + t: t
            },
            m.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var E = /(.)^/,
            T = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            k = /\\|'|\r|\n|\u2028|\u2029/g,
            I = function(e) {
                return "\\" + T[e]
            };
            m.template = function(e, t, n) { ! t && n && (t = n),
                t = m.defaults({},
                t, m.templateSettings);
                var i = RegExp([(t.escape || E).source, (t.interpolate || E).source, (t.evaluate || E).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
                e.replace(i,
                function(t, n, i, r, s) {
                    return a += e.slice(o, s).replace(k, I),
                    o = s + t.length,
                    n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'": r && (a += "';\n" + r + "\n__p+='"),
                    t
                }),
                a += "';\n",
                t.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                try {
                    var r = new Function(t.variable || "obj", "_", a)
                } catch(s) {
                    throw s.source = a,
                    s
                }
                var l = function(e) {
                    return r.call(this, e, m)
                },
                c = t.variable || "obj";
                return l.source = "function(" + c + "){\n" + a + "}",
                l
            },
            m.chain = function(e) {
                var t = m(e);
                return t._chain = !0,
                t
            };
            var P = function(e) {
                return this._chain ? m(e).chain() : e
            };
            m.mixin = function(e) {
                m.each(m.functions(e),
                function(t) {
                    var n = m[t] = e[t];
                    m.prototype[t] = function() {
                        var e = [this._wrapped];
                        return s.apply(e, arguments),
                        P.call(this, n.apply(m, e))
                    }
                })
            },
            m.mixin(m),
            m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
            function(e) {
                var t = o[e];
                m.prototype[e] = function() {
                    var n = this._wrapped;
                    return t.apply(n, arguments),
                    "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0],
                    P.call(this, n)
                }
            }),
            m.each(["concat", "join", "slice"],
            function(e) {
                var t = o[e];
                m.prototype[e] = function() {
                    return P.call(this, t.apply(this._wrapped, arguments))
                }
            }),
            m.prototype.value = function() {
                return this._wrapped
            },
            "function" == typeof define && define.amd && define("underscore", [],
            function() {
                return m
            })
        }).call(this)
    },
    21 : function(e, t) { (function() {
            window.Modernizr = function(e, t, n) {
                function i(e) {
                    y.cssText = e
                }
                function o(e, t) {
                    return i(_.join(e + ";") + (t || ""))
                }
                function a(e, t) {
                    return typeof e === t
                }
                function r(e, t) {
                    return !! ~ ("" + e).indexOf(t)
                }
                function s(e, t) {
                    for (var i in e) {
                        var o = e[i];
                        if (!r(o, "-") && y[o] !== n) return "pfx" == t ? o: !0
                    }
                    return ! 1
                }
                function l(e, t, i) {
                    for (var o in e) {
                        var r = t[e[o]];
                        if (r !== n) return i === !1 ? e[o] : a(r, "function") ? r.bind(i || t) : r
                    }
                    return ! 1
                }
                function c(e, t, n) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1),
                    o = (e + " " + $.join(i + " ") + i).split(" ");
                    return a(t, "string") || a(t, "undefined") ? s(o, t) : (o = (e + " " + E.join(i + " ") + i).split(" "), l(o, t, n))
                }
                function u() {
                    p.input = function(n) {
                        for (var i = 0,
                        o = n.length; o > i; i++) P[n[i]] = n[i] in w;
                        return P.list && (P.list = !!t.createElement("datalist") && !!e.HTMLDataListElement),
                        P
                    } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
                    p.inputtypes = function(e) {
                        for (var i, o, a, r = 0,
                        s = e.length; s > r; r++) w.setAttribute("type", o = e[r]),
                        i = "text" !== w.type,
                        i && (w.value = x, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (g.appendChild(w), a = t.defaultView, i = a.getComputedStyle && "textfield" !== a.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != x)),
                        I[e[r]] = !!i;
                        return I
                    } ("search tel url email datetime date month week time datetime-local number range color".split(" "))
                }
                var d, h, f = "2.8.3",
                p = {},
                m = !0,
                g = t.documentElement,
                v = "modernizr",
                b = t.createElement(v),
                y = b.style,
                w = t.createElement("input"),
                x = ":)",
                C = {}.toString,
                _ = " -webkit- -moz- -o- -ms- ".split(" "),
                S = "Webkit Moz O ms",
                $ = S.split(" "),
                E = S.toLowerCase().split(" "),
                T = {
                    svg: "http://www.w3.org/2000/svg"
                },
                k = {},
                I = {},
                P = {},
                A = [],
                N = A.slice,
                O = function(e, n, i, o) {
                    var a, r, s, l, c = t.createElement("div"),
                    u = t.body,
                    d = u || t.createElement("body");
                    if (parseInt(i, 10)) for (; i--;) s = t.createElement("div"),
                    s.id = o ? o[i] : v + (i + 1),
                    c.appendChild(s);
                    return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""),
                    c.id = v,
                    (u ? c: d).innerHTML += a,
                    d.appendChild(c),
                    u || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)),
                    r = n(c, e),
                    u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), g.style.overflow = l),
                    !!r
                },
                D = function() {
                    function e(e, o) {
                        o = o || t.createElement(i[e] || "div"),
                        e = "on" + e;
                        var r = e in o;
                        return r || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), r = a(o[e], "function"), a(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))),
                        o = null,
                        r
                    }
                    var i = {
                        select: "input",
                        change: "input",
                        submit: "form",
                        reset: "form",
                        error: "img",
                        load: "img",
                        abort: "img"
                    };
                    return e
                } (),
                R = {}.hasOwnProperty;
                h = a(R, "undefined") || a(R.call, "undefined") ?
                function(e, t) {
                    return t in e && a(e.constructor.prototype[t], "undefined")
                }: function(e, t) {
                    return R.call(e, t)
                },
                Function.prototype.bind || (Function.prototype.bind = function(e) {
                    var t = this;
                    if ("function" != typeof t) throw new TypeError;
                    var n = N.call(arguments, 1),
                    i = function() {
                        if (this instanceof i) {
                            var o = function() {};
                            o.prototype = t.prototype;
                            var a = new o,
                            r = t.apply(a, n.concat(N.call(arguments)));
                            return Object(r) === r ? r: a
                        }
                        return t.apply(e, n.concat(N.call(arguments)))
                    };
                    return i
                }),
                k.flexbox = function() {
                    return c("flexWrap")
                },
                k.flexboxlegacy = function() {
                    return c("boxDirection")
                },
                k.canvas = function() {
                    var e = t.createElement("canvas");
                    return !! e.getContext && !!e.getContext("2d")
                },
                k.canvastext = function() {
                    return !! p.canvas && !!a(t.createElement("canvas").getContext("2d").fillText, "function")
                },
                k.webgl = function() {
                    return !! e.WebGLRenderingContext
                },
                k.touch = function() {
                    var n;
                    return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : O(["@media (", _.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
                    function(e) {
                        n = 9 === e.offsetTop
                    }),
                    n
                },
                k.geolocation = function() {
                    return "geolocation" in navigator
                },
                k.postmessage = function() {
                    return !! e.postMessage
                },
                k.websqldatabase = function() {
                    return !! e.openDatabase
                },
                k.indexedDB = function() {
                    return !! c("indexedDB", e)
                },
                k.hashchange = function() {
                    return D("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
                },
                k.history = function() {
                    return !! e.history && !!history.pushState
                },
                k.draganddrop = function() {
                    var e = t.createElement("div");
                    return "draggable" in e || "ondragstart" in e && "ondrop" in e
                },
                k.websockets = function() {
                    return "WebSocket" in e || "MozWebSocket" in e
                },
                k.rgba = function() {
                    return i("background-color:rgba(150,255,150,.5)"),
                    r(y.backgroundColor, "rgba")
                },
                k.hsla = function() {
                    return i("background-color:hsla(120,40%,100%,.5)"),
                    r(y.backgroundColor, "rgba") || r(y.backgroundColor, "hsla")
                },
                k.multiplebgs = function() {
                    return i("background:url(https://),url(https://),red url(https://)"),
                    /(url\s*\(.*?){3}/.test(y.background)
                },
                k.backgroundsize = function() {
                    return c("backgroundSize")
                },
                k.borderimage = function() {
                    return c("borderImage")
                },
                k.borderradius = function() {
                    return c("borderRadius")
                },
                k.boxshadow = function() {
                    return c("boxShadow")
                },
                k.textshadow = function() {
                    return "" === t.createElement("div").style.textShadow
                },
                k.opacity = function() {
                    return o("opacity:.55"),
                    /^0.55$/.test(y.opacity)
                },
                k.cssanimations = function() {
                    return c("animationName")
                },
                k.csscolumns = function() {
                    return c("columnCount")
                },
                k.cssgradients = function() {
                    var e = "background-image:",
                    t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                    n = "linear-gradient(left top,#9f9, white);";
                    return i((e + "-webkit- ".split(" ").join(t + e) + _.join(n + e)).slice(0, -e.length)),
                    r(y.backgroundImage, "gradient")
                },
                k.cssreflections = function() {
                    return c("boxReflect")
                },
                k.csstransforms = function() {
                    return !! c("transform")
                },
                k.csstransforms3d = function() {
                    var e = !!c("perspective");
                    return e && "webkitPerspective" in g.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
                    function(t, n) {
                        e = 9 === t.offsetLeft && 3 === t.offsetHeight
                    }),
                    e
                },
                k.csstransitions = function() {
                    return c("transition")
                },
                k.fontface = function() {
                    var e;
                    return O('@font-face {font-family:"font";src:url("https://")}',
                    function(n, i) {
                        var o = t.getElementById("smodernizr"),
                        a = o.sheet || o.styleSheet,
                        r = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText: a.cssText || "": "";
                        e = /src/i.test(r) && 0 === r.indexOf(i.split(" ")[0])
                    }),
                    e
                },
                k.generatedcontent = function() {
                    var e;
                    return O(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""),
                    function(t) {
                        e = t.offsetHeight >= 3
                    }),
                    e
                },
                k.video = function() {
                    var e = t.createElement("video"),
                    n = !1;
                    try { (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                    } catch(i) {}
                    return n
                },
                k.audio = function() {
                    var e = t.createElement("audio"),
                    n = !1;
                    try { (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
                    } catch(i) {}
                    return n
                },
                k.localstorage = function() {
                    try {
                        return localStorage.setItem(v, v),
                        localStorage.removeItem(v),
                        !0
                    } catch(e) {
                        return ! 1
                    }
                },
                k.sessionstorage = function() {
                    try {
                        return sessionStorage.setItem(v, v),
                        sessionStorage.removeItem(v),
                        !0
                    } catch(e) {
                        return ! 1
                    }
                },
                k.webworkers = function() {
                    return !! e.Worker
                },
                k.applicationcache = function() {
                    return !! e.applicationCache
                },
                k.svg = function() {
                    return !! t.createElementNS && !!t.createElementNS(T.svg, "svg").createSVGRect
                },
                k.inlinesvg = function() {
                    var e = t.createElement("div");
                    return e.innerHTML = "<svg/>",
                    (e.firstChild && e.firstChild.namespaceURI) == T.svg
                },
                k.smil = function() {
                    return !! t.createElementNS && /SVGAnimate/.test(C.call(t.createElementNS(T.svg, "animate")))
                },
                k.svgclippaths = function() {
                    return !! t.createElementNS && /SVGClipPath/.test(C.call(t.createElementNS(T.svg, "clipPath")))
                };
                for (var z in k) h(k, z) && (d = z.toLowerCase(), p[d] = k[z](), A.push((p[d] ? "": "no-") + d));
                return p.input || u(),
                p.addTest = function(e, t) {
                    if ("object" == typeof e) for (var i in e) h(e, i) && p.addTest(i, e[i]);
                    else {
                        if (e = e.toLowerCase(), p[e] !== n) return p;
                        t = "function" == typeof t ? t() : t,
                        "undefined" != typeof m && m && (g.className += " " + (t ? "": "no-") + e),
                        p[e] = t
                    }
                    return p
                },
                i(""),
                b = w = null,
                function(e, t) {
                    function n(e, t) {
                        var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                        return n.innerHTML = "x<style>" + t + "</style>",
                        i.insertBefore(n.lastChild, i.firstChild)
                    }
                    function i() {
                        var e = b.elements;
                        return "string" == typeof e ? e.split(" ") : e
                    }
                    function o(e) {
                        var t = v[e[m]];
                        return t || (t = {},
                        g++, e[m] = g, v[g] = t),
                        t
                    }
                    function a(e, n, i) {
                        if (n || (n = t), u) return n.createElement(e);
                        i || (i = o(n));
                        var a;
                        return a = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e),
                        !a.canHaveChildren || f.test(e) || a.tagUrn ? a: i.frag.appendChild(a)
                    }
                    function r(e, n) {
                        if (e || (e = t), u) return e.createDocumentFragment();
                        n = n || o(e);
                        for (var a = n.frag.cloneNode(), r = 0, s = i(), l = s.length; l > r; r++) a.createElement(s[r]);
                        return a
                    }
                    function s(e, t) {
                        t.cache || (t.cache = {},
                        t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
                        e.createElement = function(n) {
                            return b.shivMethods ? a(n, e, t) : t.createElem(n)
                        },
                        e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g,
                        function(e) {
                            return t.createElem(e),
                            t.frag.createElement(e),
                            'c("' + e + '")'
                        }) + ");return n}")(b, t.frag)
                    }
                    function l(e) {
                        e || (e = t);
                        var i = o(e);
                        return b.shivCSS && !c && !i.hasCSS && (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
                        u || s(e, i),
                        e
                    }
                    var c, u, d = "3.7.0",
                    h = e.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {}; !
                    function() {
                        try {
                            var e = t.createElement("a");
                            e.innerHTML = "<xyz></xyz>",
                            c = "hidden" in e,
                            u = 1 == e.childNodes.length ||
                            function() {
                                t.createElement("a");
                                var e = t.createDocumentFragment();
                                return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                            } ()
                        } catch(n) {
                            c = !0,
                            u = !0
                        }
                    } ();
                    var b = {
                        elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                        version: d,
                        shivCSS: h.shivCSS !== !1,
                        supportsUnknownElements: u,
                        shivMethods: h.shivMethods !== !1,
                        type: "default",
                        shivDocument: l,
                        createElement: a,
                        createDocumentFragment: r
                    };
                    e.html5 = b,
                    l(t)
                } (this, t),
                p._version = f,
                p._prefixes = _,
                p._domPrefixes = E,
                p._cssomPrefixes = $,
                p.hasEvent = D,
                p.testProp = function(e) {
                    return s([e])
                },
                p.testAllProps = c,
                p.testStyles = O,
                g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + A.join(" ") : ""),
                p
            } (this, this.document),
            function(e, t, n) {
                function i(e) {
                    return "[object Function]" == g.call(e)
                }
                function o(e) {
                    return "string" == typeof e
                }
                function a() {}
                function r(e) {
                    return ! e || "loaded" == e || "complete" == e || "uninitialized" == e
                }
                function s() {
                    var e = v.shift();
                    b = 1,
                    e ? e.t ? p(function() { ("c" == e.t ? h.injectCss: h.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
                    },
                    0) : (e(), s()) : b = 0
                }
                function l(e, n, i, o, a, l, c) {
                    function u(t) {
                        if (!f && r(d.readyState) && (y.r = f = 1, !b && s(), d.onload = d.onreadystatechange = null, t)) {
                            "img" != e && p(function() {
                                x.removeChild(d)
                            },
                            50);
                            for (var i in E[n]) E[n].hasOwnProperty(i) && E[n][i].onload()
                        }
                    }
                    var c = c || h.errorTimeout,
                    d = t.createElement(e),
                    f = 0,
                    g = 0,
                    y = {
                        t: i,
                        s: n,
                        e: a,
                        a: l,
                        x: c
                    };
                    1 === E[n] && (g = 1, E[n] = []),
                    "object" == e ? d.data = n: (d.src = n, d.type = e),
                    d.width = d.height = "0",
                    d.onerror = d.onload = d.onreadystatechange = function() {
                        u.call(this, g)
                    },
                    v.splice(o, 0, y),
                    "img" != e && (g || 2 === E[n] ? (x.insertBefore(d, w ? null: m), p(u, c)) : E[n].push(d))
                }
                function c(e, t, n, i, a) {
                    return b = 0,
                    t = t || "j",
                    o(e) ? l("c" == t ? _: C, e, t, this.i++, n, i, a) : (v.splice(this.i++, 0, e), 1 == v.length && s()),
                    this
                }
                function u() {
                    var e = h;
                    return e.loader = {
                        load: c,
                        i: 0
                    },
                    e
                }
                var d, h, f = t.documentElement,
                p = e.setTimeout,
                m = t.getElementsByTagName("script")[0],
                g = {}.toString,
                v = [],
                b = 0,
                y = "MozAppearance" in f.style,
                w = y && !!t.createRange().compareNode,
                x = w ? f: m.parentNode,
                f = e.opera && "[object Opera]" == g.call(e.opera),
                f = !!t.attachEvent && !f,
                C = y ? "object": f ? "script": "img",
                _ = f ? "script": C,
                S = Array.isArray ||
                function(e) {
                    return "[object Array]" == g.call(e)
                },
                $ = [],
                E = {},
                T = {
                    timeout: function(e, t) {
                        return t.length && (e.timeout = t[0]),
                        e
                    }
                };
                h = function(e) {
                    function t(e) {
                        var t, n, i, e = e.split("!"),
                        o = $.length,
                        a = e.pop(),
                        r = e.length,
                        a = {
                            url: a,
                            origUrl: a,
                            prefixes: e
                        };
                        for (n = 0; r > n; n++) i = e[n].split("="),
                        (t = T[i.shift()]) && (a = t(a, i));
                        for (n = 0; o > n; n++) a = $[n](a);
                        return a
                    }
                    function r(e, o, a, r, s) {
                        var l = t(e),
                        c = l.autoCallback;
                        l.url.split(".").pop().split("?").shift(),
                        l.bypass || (o && (o = i(o) ? o: o[e] || o[r] || o[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, o, a, r, s) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, a.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c": n, l.noexec, l.attrs, l.timeout), (i(o) || i(c)) && a.load(function() {
                            u(),
                            o && o(l.origUrl, s, r),
                            c && c(l.origUrl, s, r),
                            E[l.url] = 2
                        })))
                    }
                    function s(e, t) {
                        function n(e, n) {
                            if (e) {
                                if (o(e)) n || (d = function() {
                                    var e = [].slice.call(arguments);
                                    h.apply(this, e),
                                    f()
                                }),
                                r(e, d, t, 0, c);
                                else if (Object(e) === e) for (l in s = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                } (), e) e.hasOwnProperty(l) && (!n && !--s && (i(d) ? d = function() {
                                    var e = [].slice.call(arguments);
                                    h.apply(this, e),
                                    f()
                                }: d[l] = function(e) {
                                    return function() {
                                        var t = [].slice.call(arguments);
                                        e && e.apply(this, t),
                                        f()
                                    }
                                } (h[l])), r(e[l], d, t, l, c))
                            } else ! n && f()
                        }
                        var s, l, c = !!e.test,
                        u = e.load || e.both,
                        d = e.callback || a,
                        h = d,
                        f = e.complete || a;
                        n(c ? e.yep: e.nope, !!u),
                        u && n(u)
                    }
                    var l, c, d = this.yepnope.loader;
                    if (o(e)) r(e, 0, d, 0);
                    else if (S(e)) for (l = 0; l < e.length; l++) c = e[l],
                    o(c) ? r(c, 0, d, 0) : S(c) ? h(c) : Object(c) === c && s(c, d);
                    else Object(e) === e && s(e, d)
                },
                h.addPrefix = function(e, t) {
                    T[e] = t
                },
                h.addFilter = function(e) {
                    $.push(e)
                },
                h.errorTimeout = 1e4,
                null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
                    t.removeEventListener("DOMContentLoaded", d, 0),
                    t.readyState = "complete"
                },
                0)),
                e.yepnope = u(),
                e.yepnope.executeStack = s,
                e.yepnope.injectJs = function(e, n, i, o, l, c) {
                    var u, d, f = t.createElement("script"),
                    o = o || h.errorTimeout;
                    f.src = e;
                    for (d in i) f.setAttribute(d, i[d]);
                    n = c ? s: n || a,
                    f.onreadystatechange = f.onload = function() { ! u && r(f.readyState) && (u = 1, n(), f.onload = f.onreadystatechange = null)
                    },
                    p(function() {
                        u || (u = 1, n(1))
                    },
                    o),
                    l ? f.onload() : m.parentNode.insertBefore(f, m)
                },
                e.yepnope.injectCss = function(e, n, i, o, r, l) {
                    var c, o = t.createElement("link"),
                    n = l ? s: n || a;
                    o.href = e,
                    o.rel = "stylesheet",
                    o.type = "text/css";
                    for (c in i) o.setAttribute(c, i[c]);
                    r || (m.parentNode.insertBefore(o, m), p(n, 0))
                }
            } (this, document),
            Modernizr.load = function() {
                yepnope.apply(window, [].slice.call(arguments, 0))
            },
            e.exports = window.Modernizr
        }).call(window)
    },
    77 : function(e, t) {
        /*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
	//@ sourceMappingURL=jquery.min.map
	*/
        !
        function(e, t) {
            function n(e) {
                var t = e.length,
                n = le.type(e);
                return le.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            function i(e) {
                var t = _e[e] = {};
                return le.each(e.match(ue) || [],
                function(e, n) {
                    t[n] = !0
                }),
                t
            }
            function o(e, n, i, o) {
                if (le.acceptData(e)) {
                    var a, r, s = le.expando,
                    l = "string" == typeof n,
                    c = e.nodeType,
                    u = c ? le.cache: e,
                    d = c ? e[s] : e[s] && s;
                    if (d && u[d] && (o || u[d].data) || !l || i !== t) return d || (c ? e[s] = d = Z.pop() || le.guid++:d = s),
                    u[d] || (u[d] = {},
                    c || (u[d].toJSON = le.noop)),
                    ("object" == typeof n || "function" == typeof n) && (o ? u[d] = le.extend(u[d], n) : u[d].data = le.extend(u[d].data, n)),
                    a = u[d],
                    o || (a.data || (a.data = {}), a = a.data),
                    i !== t && (a[le.camelCase(n)] = i),
                    l ? (r = a[n], null == r && (r = a[le.camelCase(n)])) : r = a,
                    r
                }
            }
            function a(e, t, n) {
                if (le.acceptData(e)) {
                    var i, o, a, r = e.nodeType,
                    l = r ? le.cache: e,
                    c = r ? e[le.expando] : le.expando;
                    if (l[c]) {
                        if (t && (a = n ? l[c] : l[c].data)) {
                            le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in a ? t = [t] : (t = le.camelCase(t), t = t in a ? [t] : t.split(" "));
                            for (i = 0, o = t.length; o > i; i++) delete a[t[i]];
                            if (! (n ? s: le.isEmptyObject)(a)) return
                        } (n || (delete l[c].data, s(l[c]))) && (r ? le.cleanData([e], !0) : le.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
                    }
                }
            }
            function r(e, n, i) {
                if (i === t && 1 === e.nodeType) {
                    var o = "data-" + n.replace($e, "-$1").toLowerCase();
                    if (i = e.getAttribute(o), "string" == typeof i) {
                        try {
                            i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null: +i + "" === i ? +i: Se.test(i) ? le.parseJSON(i) : i
                        } catch(a) {}
                        le.data(e, n, i)
                    } else i = t
                }
                return i
            }
            function s(e) {
                var t;
                for (t in e) if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
                return ! 0
            }
            function l() {
                return ! 0
            }
            function c() {
                return ! 1
            }
            function u(e, t) {
                do e = e[t];
                while (e && 1 !== e.nodeType);
                return e
            }
            function d(e, t, n) {
                if (t = t || 0, le.isFunction(t)) return le.grep(e,
                function(e, i) {
                    var o = !!t.call(e, i, e);
                    return o === n
                });
                if (t.nodeType) return le.grep(e,
                function(e) {
                    return e === t === n
                });
                if ("string" == typeof t) {
                    var i = le.grep(e,
                    function(e) {
                        return 1 === e.nodeType
                    });
                    if (Fe.test(t)) return le.filter(t, i, !n);
                    t = le.filter(t, i)
                }
                return le.grep(e,
                function(e) {
                    return le.inArray(e, t) >= 0 === n
                })
            }
            function h(e) {
                var t = Ye.split("|"),
                n = e.createDocumentFragment();
                if (n.createElement) for (; t.length;) n.createElement(t.pop());
                return n
            }
            function f(e, t) {
                return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
            }
            function p(e) {
                var t = e.getAttributeNode("type");
                return e.type = (t && t.specified) + "/" + e.type,
                e
            }
            function m(e) {
                var t = ot.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function g(e, t) {
                for (var n, i = 0; null != (n = e[i]); i++) le._data(n, "globalEval", !t || le._data(t[i], "globalEval"))
            }
            function v(e, t) {
                if (1 === t.nodeType && le.hasData(e)) {
                    var n, i, o, a = le._data(e),
                    r = le._data(t, a),
                    s = a.events;
                    if (s) {
                        delete r.handle,
                        r.events = {};
                        for (n in s) for (i = 0, o = s[n].length; o > i; i++) le.event.add(t, n, s[n][i])
                    }
                    r.data && (r.data = le.extend({},
                    r.data))
                }
            }
            function b(e, t) {
                var n, i, o;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                        o = le._data(t);
                        for (i in o.events) le.removeEvent(t, i, o.handle);
                        t.removeAttribute(le.expando)
                    }
                    "script" === n && t.text !== e.text ? (p(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }
            }
            function y(e, n) {
                var i, o, a = 0,
                r = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
                if (!r) for (r = [], i = e.childNodes || e; null != (o = i[a]); a++) ! n || le.nodeName(o, n) ? r.push(o) : le.merge(r, y(o, n));
                return n === t || n && le.nodeName(e, n) ? le.merge([e], r) : r
            }
            function w(e) {
                tt.test(e.type) && (e.defaultChecked = e.checked)
            }
            function x(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = St.length; o--;) if (t = St[o] + n, t in e) return t;
                return i
            }
            function C(e, t) {
                return e = t || e,
                "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
            }
            function _(e, t) {
                for (var n, i, o, a = [], r = 0, s = e.length; s > r; r++) i = e[r],
                i.style && (a[r] = le._data(i, "olddisplay"), n = i.style.display, t ? (a[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (a[r] = le._data(i, "olddisplay", T(i.nodeName)))) : a[r] || (o = C(i), (n && "none" !== n || !o) && le._data(i, "olddisplay", o ? n: le.css(i, "display"))));
                for (r = 0; s > r; r++) i = e[r],
                i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[r] || "": "none"));
                return e
            }
            function S(e, t, n) {
                var i = vt.exec(t);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
            }
            function $(e, t, n, i, o) {
                for (var a = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > a; a += 2)"margin" === n && (r += le.css(e, n + _t[a], !0, o)),
                i ? ("content" === n && (r -= le.css(e, "padding" + _t[a], !0, o)), "margin" !== n && (r -= le.css(e, "border" + _t[a] + "Width", !0, o))) : (r += le.css(e, "padding" + _t[a], !0, o), "padding" !== n && (r += le.css(e, "border" + _t[a] + "Width", !0, o)));
                return r
            }
            function E(e, t, n) {
                var i = !0,
                o = "width" === t ? e.offsetWidth: e.offsetHeight,
                a = ut(e),
                r = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, a);
                if (0 >= o || null == o) {
                    if (o = dt(e, t, a), (0 > o || null == o) && (o = e.style[t]), bt.test(o)) return o;
                    i = r && (le.support.boxSizingReliable || o === e.style[t]),
                    o = parseFloat(o) || 0
                }
                return o + $(e, t, n || (r ? "border": "content"), i, a) + "px"
            }
            function T(e) {
                var t = Q,
                n = wt[e];
                return n || (n = k(e, t), "none" !== n && n || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = k(e, t), ct.detach()), wt[e] = n),
                n
            }
            function k(e, t) {
                var n = le(t.createElement(e)).appendTo(t.body),
                i = le.css(n[0], "display");
                return n.remove(),
                i
            }
            function I(e, t, n, i) {
                var o;
                if (le.isArray(t)) le.each(t,
                function(t, o) {
                    n || Et.test(e) ? i(e, o) : I(e + "[" + ("object" == typeof o ? t: "") + "]", o, n, i)
                });
                else if (n || "object" !== le.type(t)) i(e, t);
                else for (o in t) I(e + "[" + o + "]", t[o], n, i)
            }
            function P(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, o = 0,
                    a = t.toLowerCase().match(ue) || [];
                    if (le.isFunction(n)) for (; i = a[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function A(e, n, i, o) {
                function a(l) {
                    var c;
                    return r[l] = !0,
                    le.each(e[l] || [],
                    function(e, l) {
                        var u = l(n, i, o);
                        return "string" != typeof u || s || r[u] ? s ? !(c = u) : t: (n.dataTypes.unshift(u), a(u), !1)
                    }),
                    c
                }
                var r = {},
                s = e === Ft;
                return a(n.dataTypes[0]) || !r["*"] && a("*")
            }
            function N(e, n) {
                var i, o, a = le.ajaxSettings.flatOptions || {};
                for (o in n) n[o] !== t && ((a[o] ? e: i || (i = {}))[o] = n[o]);
                return i && le.extend(!0, e, i),
                e
            }
            function O(e, n, i) {
                var o, a, r, s, l = e.contents,
                c = e.dataTypes,
                u = e.responseFields;
                for (s in u) s in i && (n[u[s]] = i[s]);
                for (;
                "*" === c[0];) c.shift(),
                a === t && (a = e.mimeType || n.getResponseHeader("Content-Type"));
                if (a) for (s in l) if (l[s] && l[s].test(a)) {
                    c.unshift(s);
                    break
                }
                if (c[0] in i) r = c[0];
                else {
                    for (s in i) {
                        if (!c[0] || e.converters[s + " " + c[0]]) {
                            r = s;
                            break
                        }
                        o || (o = s)
                    }
                    r = r || o
                }
                return r ? (r !== c[0] && c.unshift(r), i[r]) : t
            }
            function D(e, t) {
                var n, i, o, a, r = {},
                s = 0,
                l = e.dataTypes.slice(),
                c = l[0];
                if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1]) for (o in e.converters) r[o.toLowerCase()] = e.converters[o];
                for (; i = l[++s];) if ("*" !== i) {
                    if ("*" !== c && c !== i) {
                        if (o = r[c + " " + i] || r["* " + i], !o) for (n in r) if (a = n.split(" "), a[1] === i && (o = r[c + " " + a[0]] || r["* " + a[0]])) {
                            o === !0 ? o = r[n] : r[n] !== !0 && (i = a[0], l.splice(s--, 0, i));
                            break
                        }
                        if (o !== !0) if (o && e["throws"]) t = o(t);
                        else try {
                            t = o(t)
                        } catch(u) {
                            return {
                                state: "parsererror",
                                error: o ? u: "No conversion from " + c + " to " + i
                            }
                        }
                    }
                    c = i
                }
                return {
                    state: "success",
                    data: t
                }
            }
            function R() {
                try {
                    return new e.XMLHttpRequest
                } catch(t) {}
            }
            function z() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch(t) {}
            }
            function B() {
                return setTimeout(function() {
                    Jt = t
                }),
                Jt = le.now()
            }
            function M(e, t) {
                le.each(t,
                function(t, n) {
                    for (var i = (an[t] || []).concat(an["*"]), o = 0, a = i.length; a > o; o++) if (i[o].call(e, t, n)) return
                })
            }
            function L(e, t, n) {
                var i, o, a = 0,
                r = on.length,
                s = le.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return ! 1;
                    for (var t = Jt || B(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(a);
                    return s.notifyWith(e, [c, a, n]),
                    1 > a && l ? n: (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: le.extend({},
                    t),
                    opts: le.extend(!0, {
                        specialEasing: {}
                    },
                    n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Jt || B(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i),
                        i
                    },
                    stop: function(t) {
                        var n = 0,
                        i = t ? c.tweens.length: 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                        this
                    }
                }),
                u = c.props;
                for (H(u, c.opts.specialEasing); r > a; a++) if (i = on[a].call(c, e, u, c.opts)) return i;
                return M(c, u),
                le.isFunction(c.opts.start) && c.opts.start.call(e, c),
                le.fx.timer(le.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }
            function H(e, t) {
                var n, i, o, a, r;
                for (o in e) if (i = le.camelCase(o), a = t[i], n = e[o], le.isArray(n) && (a = n[1], n = e[o] = n[0]), o !== i && (e[i] = n, delete e[o]), r = le.cssHooks[i], r && "expand" in r) {
                    n = r.expand(n),
                    delete e[i];
                    for (o in n) o in e || (e[o] = n[o], t[o] = a)
                } else t[i] = a
            }
            function q(e, t, n) {
                var i, o, a, r, s, l, c, u, d, h = this,
                f = e.style,
                p = {},
                m = [],
                g = e.nodeType && C(e);
                n.queue || (u = le._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
                    u.unqueued || d()
                }), u.unqueued++, h.always(function() {
                    h.always(function() {
                        u.unqueued--,
                        le.queue(e, "fx").length || u.empty.fire()
                    })
                })),
                1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
                n.overflow && (f.overflow = "hidden", le.support.shrinkWrapBlocks || h.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                }));
                for (o in t) if (r = t[o], en.exec(r)) {
                    if (delete t[o], l = l || "toggle" === r, r === (g ? "hide": "show")) continue;
                    m.push(o)
                }
                if (a = m.length) {
                    s = le._data(e, "fxshow") || le._data(e, "fxshow", {}),
                    "hidden" in s && (g = s.hidden),
                    l && (s.hidden = !g),
                    g ? le(e).show() : h.done(function() {
                        le(e).hide()
                    }),
                    h.done(function() {
                        var t;
                        le._removeData(e, "fxshow");
                        for (t in p) le.style(e, t, p[t])
                    });
                    for (o = 0; a > o; o++) i = m[o],
                    c = h.createTween(i, g ? s[i] : 0),
                    p[i] = s[i] || le.style(e, i),
                    i in s || (s[i] = c.start, g && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function j(e, t, n, i, o) {
                return new j.prototype.init(e, t, n, i, o)
            }
            function F(e, t) {
                var n, i = {
                    height: e
                },
                o = 0;
                for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = _t[o],
                i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e),
                i
            }
            function W(e) {
                return le.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
            }
            var U, Y, V = typeof t,
            Q = e.document,
            X = e.location,
            K = e.jQuery,
            G = e.$,
            J = {},
            Z = [],
            ee = "1.9.1",
            te = Z.concat,
            ne = Z.push,
            ie = Z.slice,
            oe = Z.indexOf,
            ae = J.toString,
            re = J.hasOwnProperty,
            se = ee.trim,
            le = function(e, t) {
                return new le.fn.init(e, t, Y)
            },
            ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ue = /\S+/g,
            de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            he = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pe = /^[\],:{}\s]*$/,
            me = /(?:^|:|,)(?:\s*\[)+/g,
            ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            ve = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            be = /^-ms-/,
            ye = /-([\da-z])/gi,
            we = function(e, t) {
                return t.toUpperCase()
            },
            xe = function(e) { (Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (Ce(), le.ready())
            },
            Ce = function() {
                Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", xe, !1), e.removeEventListener("load", xe, !1)) : (Q.detachEvent("onreadystatechange", xe), e.detachEvent("onload", xe))
            };
            le.fn = le.prototype = {
                jquery: ee,
                constructor: le,
                init: function(e, n, i) {
                    var o, a;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : he.exec(e), !o || !o[1] && n) return ! n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (o[1]) {
                            if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n: Q, !0)), fe.test(o[1]) && le.isPlainObject(n)) for (o in n) le.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                            return this
                        }
                        if (a = Q.getElementById(o[2]), a && a.parentNode) {
                            if (a.id !== o[2]) return i.find(e);
                            this.length = 1,
                            this[0] = a
                        }
                        return this.context = Q,
                        this.selector = e,
                        this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
                },
                selector: "",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return ie.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = le.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t.context = this.context,
                    t
                },
                each: function(e, t) {
                    return le.each(this, e, t)
                },
                ready: function(e) {
                    return le.ready.promise().done(e),
                    this
                },
                slice: function() {
                    return this.pushStack(ie.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq( - 1)
                },
                eq: function(e) {
                    var t = this.length,
                    n = +e + (0 > e ? t: 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(le.map(this,
                    function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: ne,
                sort: [].sort,
                splice: [].splice
            },
            le.fn.init.prototype = le.fn,
            le.extend = le.fn.extend = function() {
                var e, n, i, o, a, r, s = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[1] || {},
                l = 2), "object" == typeof s || le.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++) if (null != (a = arguments[l])) for (o in a) e = s[o],
                i = a[o],
                s !== i && (u && i && (le.isPlainObject(i) || (n = le.isArray(i))) ? (n ? (n = !1, r = e && le.isArray(e) ? e: []) : r = e && le.isPlainObject(e) ? e: {},
                s[o] = le.extend(u, r, i)) : i !== t && (s[o] = i));
                return s
            },
            le.extend({
                noConflict: function(t) {
                    return e.$ === le && (e.$ = G),
                    t && e.jQuery === le && (e.jQuery = K),
                    le
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? le.readyWait++:le.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--le.readyWait: !le.isReady) {
                        if (!Q.body) return setTimeout(le.ready);
                        le.isReady = !0,
                        e !== !0 && --le.readyWait > 0 || (U.resolveWith(Q, [le]), le.fn.trigger && le(Q).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === le.type(e)
                },
                isArray: Array.isArray ||
                function(e) {
                    return "array" === le.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return ! isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "": "object" == typeof e || "function" == typeof e ? J[ae.call(e)] || "object": typeof e
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return ! 1;
                    try {
                        if (e.constructor && !re.call(e, "constructor") && !re.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                    } catch(n) {
                        return ! 1
                    }
                    var i;
                    for (i in e);
                    return i === t || re.call(e, i)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return ! 1;
                    return ! 0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1),
                    t = t || Q;
                    var i = fe.exec(e),
                    o = !n && [];
                    return i ? [t.createElement(i[1])] : (i = le.buildFragment([e], t, o), o && le(o).remove(), le.merge([], i.childNodes))
                },
                parseJSON: function(n) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = le.trim(n), n && pe.test(n.replace(ge, "@").replace(ve, "]").replace(me, ""))) ? Function("return " + n)() : (le.error("Invalid JSON: " + n), t)
                },
                parseXML: function(n) {
                    var i, o;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch(a) {
                        i = t
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n),
                    i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && le.trim(t) && (e.execScript ||
                    function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(be, "ms-").replace(ye, we)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, i) {
                    var o, a = 0,
                    r = e.length,
                    s = n(e);
                    if (i) {
                        if (s) for (; r > a && (o = t.apply(e[a], i), o !== !1); a++);
                        else for (a in e) if (o = t.apply(e[a], i), o === !1) break
                    } else if (s) for (; r > a && (o = t.call(e[a], a, e[a]), o !== !1); a++);
                    else for (a in e) if (o = t.call(e[a], a, e[a]), o === !1) break;
                    return e
                },
                trim: se && !se.call("\ufeff ") ?
                function(e) {
                    return null == e ? "": se.call(e)
                }: function(e) {
                    return null == e ? "": (e + "").replace(de, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? le.merge(i, "string" == typeof e ? [e] : e) : ne.call(i, e)),
                    i
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (oe) return oe.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n: 0; i > n; n++) if (n in t && t[n] === e) return n
                    }
                    return - 1
                },
                merge: function(e, n) {
                    var i = n.length,
                    o = e.length,
                    a = 0;
                    if ("number" == typeof i) for (; i > a; a++) e[o++] = n[a];
                    else for (; n[a] !== t;) e[o++] = n[a++];
                    return e.length = o,
                    e
                },
                grep: function(e, t, n) {
                    var i, o = [],
                    a = 0,
                    r = e.length;
                    for (n = !!n; r > a; a++) i = !!t(e[a], a),
                    n !== i && o.push(e[a]);
                    return o
                },
                map: function(e, t, i) {
                    var o, a = 0,
                    r = e.length,
                    s = n(e),
                    l = [];
                    if (s) for (; r > a; a++) o = t(e[a], a, i),
                    null != o && (l[l.length] = o);
                    else for (a in e) o = t(e[a], a, i),
                    null != o && (l[l.length] = o);
                    return te.apply([], l)
                },
                guid: 1,
                proxy: function(e, n) {
                    var i, o, a;
                    return "string" == typeof n && (a = e[n], n = e, e = a),
                    le.isFunction(e) ? (i = ie.call(arguments, 2), o = function() {
                        return e.apply(n || this, i.concat(ie.call(arguments)))
                    },
                    o.guid = e.guid = e.guid || le.guid++, o) : t
                },
                access: function(e, n, i, o, a, r, s) {
                    var l = 0,
                    c = e.length,
                    u = null == i;
                    if ("object" === le.type(i)) {
                        a = !0;
                        for (l in i) le.access(e, n, l, i[l], !0, r, s)
                    } else if (o !== t && (a = !0, le.isFunction(o) || (s = !0), u && (s ? (n.call(e, o), n = null) : (u = n, n = function(e, t, n) {
                        return u.call(le(e), n)
                    })), n)) for (; c > l; l++) n(e[l], i, s ? o: o.call(e[l], l, n(e[l], i)));
                    return a ? e: u ? n.call(e) : c ? n(e[0], i) : r
                },
                now: function() {
                    return (new Date).getTime()
                }
            }),
            le.ready.promise = function(t) {
                if (!U) if (U = le.Deferred(), "complete" === Q.readyState) setTimeout(le.ready);
                else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", xe, !1),
                e.addEventListener("load", xe, !1);
                else {
                    Q.attachEvent("onreadystatechange", xe),
                    e.attachEvent("onload", xe);
                    var n = !1;
                    try {
                        n = null == e.frameElement && Q.documentElement
                    } catch(i) {}
                    n && n.doScroll &&
                    function o() {
                        if (!le.isReady) {
                            try {
                                n.doScroll("left")
                            } catch(e) {
                                return setTimeout(o, 50)
                            }
                            Ce(),
                            le.ready()
                        }
                    } ()
                }
                return U.promise(t)
            },
            le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
            function(e, t) {
                J["[object " + t + "]"] = t.toLowerCase()
            }),
            Y = le(Q);
            var _e = {};
            le.Callbacks = function(e) {
                e = "string" == typeof e ? _e[e] || i(e) : le.extend({},
                e);
                var n, o, a, r, s, l, c = [],
                u = !e.once && [],
                d = function(t) {
                    for (o = e.memory && t, a = !0, s = l || 0, l = 0, r = c.length, n = !0; c && r > s; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        o = !1;
                        break
                    }
                    n = !1,
                    c && (u ? u.length && d(u.shift()) : o ? c = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (c) {
                            var t = c.length; !
                            function i(t) {
                                le.each(t,
                                function(t, n) {
                                    var o = le.type(n);
                                    "function" === o ? e.unique && h.has(n) || c.push(n) : n && n.length && "string" !== o && i(n)
                                })
                            } (arguments),
                            n ? r = c.length: o && (l = t, d(o))
                        }
                        return this
                    },
                    remove: function() {
                        return c && le.each(arguments,
                        function(e, t) {
                            for (var i; (i = le.inArray(t, c, i)) > -1;) c.splice(i, 1),
                            n && (r >= i && r--, s >= i && s--)
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? le.inArray(e, c) > -1 : !(!c || !c.length)
                    },
                    empty: function() {
                        return c = [],
                        this
                    },
                    disable: function() {
                        return c = u = o = t,
                        this
                    },
                    disabled: function() {
                        return ! c
                    },
                    lock: function() {
                        return u = t,
                        o || h.disable(),
                        this
                    },
                    locked: function() {
                        return ! u
                    },
                    fireWith: function(e, t) {
                        return t = t || [],
                        t = [e, t.slice ? t.slice() : t],
                        !c || a && !u || (n ? u.push(t) : d(t)),
                        this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !! a
                    }
                };
                return h
            },
            le.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var e = arguments;
                            return le.Deferred(function(n) {
                                le.each(t,
                                function(t, a) {
                                    var r = a[0],
                                    s = le.isFunction(e[t]) && e[t];
                                    o[a[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? le.extend(e, i) : i
                        }
                    },
                    o = {};
                    return i.pipe = i.then,
                    le.each(t,
                    function(e, a) {
                        var r = a[2],
                        s = a[3];
                        i[a[1]] = r.add,
                        s && r.add(function() {
                            n = s
                        },
                        t[1 ^ e][2].disable, t[2][2].lock),
                        o[a[0]] = function() {
                            return o[a[0] + "With"](this === o ? i: this, arguments),
                            this
                        },
                        o[a[0] + "With"] = r.fireWith
                    }),
                    i.promise(o),
                    e && e.call(o, o),
                    o
                },
                when: function(e) {
                    var t, n, i, o = 0,
                    a = ie.call(arguments),
                    r = a.length,
                    s = 1 !== r || e && le.isFunction(e.promise) ? r: 0,
                    l = 1 === s ? e: le.Deferred(),
                    c = function(e, n, i) {
                        return function(o) {
                            n[e] = this,
                            i[e] = arguments.length > 1 ? ie.call(arguments) : o,
                            i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                    if (r > 1) for (t = Array(r), n = Array(r), i = Array(r); r > o; o++) a[o] && le.isFunction(a[o].promise) ? a[o].promise().done(c(o, i, a)).fail(l.reject).progress(c(o, n, t)) : --s;
                    return s || l.resolveWith(i, a),
                    l.promise()
                }
            }),
            le.support = function() {
                var t, n, i, o, a, r, s, l, c, u, d = Q.createElement("div");
                if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
                a = Q.createElement("select"),
                s = a.appendChild(Q.createElement("option")),
                o = d.getElementsByTagName("input")[0],
                i.style.cssText = "top:1px;float:left;opacity:.5",
                t = {
                    getSetAttribute: "t" !== d.className,
                    leadingWhitespace: 3 === d.firstChild.nodeType,
                    tbody: !d.getElementsByTagName("tbody").length,
                    htmlSerialize: !!d.getElementsByTagName("link").length,
                    style: /top/.test(i.getAttribute("style")),
                    hrefNormalized: "/a" === i.getAttribute("href"),
                    opacity: /^0.5/.test(i.style.opacity),
                    cssFloat: !!i.style.cssFloat,
                    checkOn: !!o.value,
                    optSelected: s.selected,
                    enctype: !!Q.createElement("form").enctype,
                    html5Clone: "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML,
                    boxModel: "CSS1Compat" === Q.compatMode,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                },
                o.checked = !0,
                t.noCloneChecked = o.cloneNode(!0).checked,
                a.disabled = !0,
                t.optDisabled = !s.disabled;
                try {
                    delete d.test
                } catch(h) {
                    t.deleteExpando = !1
                }
                o = Q.createElement("input"),
                o.setAttribute("value", ""),
                t.input = "" === o.getAttribute("value"),
                o.value = "t",
                o.setAttribute("type", "radio"),
                t.radioValue = "t" === o.value,
                o.setAttribute("checked", "t"),
                o.setAttribute("name", "t"),
                r = Q.createDocumentFragment(),
                r.appendChild(o),
                t.appendChecked = o.checked,
                t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked,
                d.attachEvent && (d.attachEvent("onclick",
                function() {
                    t.noCloneEvent = !1
                }), d.cloneNode(!0).click());
                for (u in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(l = "on" + u, "t"),
                t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
                return d.style.backgroundClip = "content-box",
                d.cloneNode(!0).style.backgroundClip = "",
                t.clearCloneStyle = "content-box" === d.style.backgroundClip,
                le(function() {
                    var n, i, o, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    r = Q.getElementsByTagName("body")[0];
                    r && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                        width: "4px"
                    }).width, i = d.appendChild(Q.createElement("div")), i.style.cssText = d.style.cssText = a, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== V && (d.innerHTML = "", d.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(n), n = d = o = i = null)
                }),
                n = a = r = s = i = o = null,
                t
            } ();
            var Se = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            $e = /([A-Z])/g;
            le.extend({
                cache: {},
                expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
                noData: {
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                    applet: !0
                },
                hasData: function(e) {
                    return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando],
                    !!e && !s(e)
                },
                data: function(e, t, n) {
                    return o(e, t, n)
                },
                removeData: function(e, t) {
                    return a(e, t)
                },
                _data: function(e, t, n) {
                    return o(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return a(e, t, !0)
                },
                acceptData: function(e) {
                    if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
                    var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
                    return ! t || t !== !0 && e.getAttribute("classid") === t
                }
            }),
            le.fn.extend({
                data: function(e, n) {
                    var i, o, a = this[0],
                    s = 0,
                    l = null;
                    if (e === t) {
                        if (this.length && (l = le.data(a), 1 === a.nodeType && !le._data(a, "parsedAttrs"))) {
                            for (i = a.attributes; i.length > s; s++) o = i[s].name,
                            o.indexOf("data-") || (o = le.camelCase(o.slice(5)), r(a, o, l[o]));
                            le._data(a, "parsedAttrs", !0)
                        }
                        return l
                    }
                    return "object" == typeof e ? this.each(function() {
                        le.data(this, e)
                    }) : le.access(this,
                    function(n) {
                        return n === t ? a ? r(a, e, le.data(a, e)) : null: (this.each(function() {
                            le.data(this, e, n)
                        }), t)
                    },
                    null, n, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        le.removeData(this, e)
                    })
                }
            }),
            le.extend({
                queue: function(e, n, i) {
                    var o;
                    return e ? (n = (n || "fx") + "queue", o = le._data(e, n), i && (!o || le.isArray(i) ? o = le._data(e, n, le.makeArray(i)) : o.push(i)), o || []) : t
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = le.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    a = le._queueHooks(e, t),
                    r = function() {
                        le.dequeue(e, t)
                    };
                    "inprogress" === o && (o = n.shift(), i--),
                    a.cur = o,
                    o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e, r, a)),
                    !i && a && a.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return le._data(e, n) || le._data(e, n, {
                        empty: le.Callbacks("once memory").add(function() {
                            le._removeData(e, t + "queue"),
                            le._removeData(e, n)
                        })
                    })
                }
            }),
            le.fn.extend({
                queue: function(e, n) {
                    var i = 2;
                    return "string" != typeof e && (n = e, e = "fx", i--),
                    i > arguments.length ? le.queue(this[0], e) : n === t ? this: this.each(function() {
                        var t = le.queue(this, e, n);
                        le._queueHooks(this, e),
                        "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        le.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = le.fx ? le.fx.speeds[e] || e: e,
                    t = t || "fx",
                    this.queue(t,
                    function(t, n) {
                        var i = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(i)
                        }
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, n) {
                    var i, o = 1,
                    a = le.Deferred(),
                    r = this,
                    s = this.length,
                    l = function() {--o || a.resolveWith(r, [r])
                    };
                    for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = le._data(r[s], e + "queueHooks"),
                    i && i.empty && (o++, i.empty.add(l));
                    return l(),
                    a.promise(n)
                }
            });
            var Ee, Te, ke = /[\t\r\n]/g,
            Ie = /\r/g,
            Pe = /^(?:input|select|textarea|button|object)$/i,
            Ae = /^(?:a|area)$/i,
            Ne = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            Oe = /^(?:checked|selected)$/i,
            De = le.support.getSetAttribute,
            Re = le.support.input;
            le.fn.extend({
                attr: function(e, t) {
                    return le.access(this, le.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        le.removeAttr(this, e)
                    })
                },
                prop: function(e, t) {
                    return le.access(this, le.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = le.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = t,
                            delete this[e]
                        } catch(n) {}
                    })
                },
                addClass: function(e) {
                    var t, n, i, o, a, r = 0,
                    s = this.length,
                    l = "string" == typeof e && e;
                    if (le.isFunction(e)) return this.each(function(t) {
                        le(this).addClass(e.call(this, t, this.className))
                    });
                    if (l) for (t = (e || "").match(ue) || []; s > r; r++) if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ke, " ") : " ")) {
                        for (a = 0; o = t[a++];) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
                        n.className = le.trim(i)
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, o, a, r = 0,
                    s = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                    if (le.isFunction(e)) return this.each(function(t) {
                        le(this).removeClass(e.call(this, t, this.className))
                    });
                    if (l) for (t = (e || "").match(ue) || []; s > r; r++) if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ke, " ") : "")) {
                        for (a = 0; o = t[a++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        n.className = e ? le.trim(i) : ""
                    }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                    i = "boolean" == typeof t;
                    return le.isFunction(e) ? this.each(function(n) {
                        le(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function() {
                        if ("string" === n) for (var o, a = 0,
                        r = le(this), s = t, l = e.match(ue) || []; o = l[a++];) s = i ? s: !r.hasClass(o),
                        r[s ? "addClass": "removeClass"](o);
                        else(n === V || "boolean" === n) && (this.className && le._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": le._data(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ",
                    n = 0,
                    i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ke, " ").indexOf(t) >= 0) return ! 0;
                    return ! 1
                },
                val: function(e) {
                    var n, i, o, a = this[0];
                    return arguments.length ? (o = le.isFunction(e), this.each(function(n) {
                        var a, r = le(this);
                        1 === this.nodeType && (a = o ? e.call(this, n, r.val()) : e, null == a ? a = "": "number" == typeof a ? a += "": le.isArray(a) && (a = le.map(a,
                        function(e) {
                            return null == e ? "": e + ""
                        })), i = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, a, "value") !== t || (this.value = a))
                    })) : a ? (i = le.valHooks[a.type] || le.valHooks[a.nodeName.toLowerCase()], i && "get" in i && (n = i.get(a, "value")) !== t ? n: (n = a.value, "string" == typeof n ? n.replace(Ie, "") : null == n ? "": n)) : void 0
                }
            }),
            le.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return ! t || t.specified ? e.value: e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type || 0 > o,
                            r = a ? null: [], s = a ? o + 1 : i.length, l = 0 > o ? s: a ? o: 0; s > l; l++) if (n = i[l], !(!n.selected && l !== o || (le.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && le.nodeName(n.parentNode, "optgroup"))) {
                                if (t = le(n).val(), a) return t;
                                r.push(t)
                            }
                            return r
                        },
                        set: function(e, t) {
                            var n = le.makeArray(t);
                            return le(e).find("option").each(function() {
                                this.selected = le.inArray(le(this).val(), n) >= 0
                            }),
                            n.length || (e.selectedIndex = -1),
                            n
                        }
                    }
                },
                attr: function(e, n, i) {
                    var o, a, r, s = e.nodeType;
                    return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === V ? le.prop(e, n, i) : (a = 1 !== s || !le.isXMLDoc(e), a && (n = n.toLowerCase(), o = le.attrHooks[n] || (Ne.test(n) ? Te: Ee)), i === t ? o && a && "get" in o && null !== (r = o.get(e, n)) ? r: (typeof e.getAttribute !== V && (r = e.getAttribute(n)), null == r ? t: r) : null !== i ? o && a && "set" in o && (r = o.set(e, i, n)) !== t ? r: (e.setAttribute(n, i + ""), i) : (le.removeAttr(e, n), t)) : void 0
                },
                removeAttr: function(e, t) {
                    var n, i, o = 0,
                    a = t && t.match(ue);
                    if (a && 1 === e.nodeType) for (; n = a[o++];) i = le.propFix[n] || n,
                    Ne.test(n) ? !De && Oe.test(n) ? e[le.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : le.attr(e, n, ""),
                    e.removeAttribute(De ? n: i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, n, i) {
                    var o, a, r, s = e.nodeType;
                    return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !le.isXMLDoc(e), r && (n = le.propFix[n] || n, a = le.propHooks[n]), i !== t ? a && "set" in a && (o = a.set(e, i, n)) !== t ? o: e[n] = i: a && "get" in a && null !== (o = a.get(e, n)) ? o: e[n]) : void 0
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var n = e.getAttributeNode("tabindex");
                            return n && n.specified ? parseInt(n.value, 10) : Pe.test(e.nodeName) || Ae.test(e.nodeName) && e.href ? 0 : t
                        }
                    }
                }
            }),
            Te = {
                get: function(e, n) {
                    var i = le.prop(e, n),
                    o = "boolean" == typeof i && e.getAttribute(n),
                    a = "boolean" == typeof i ? Re && De ? null != o: Oe.test(n) ? e[le.camelCase("default-" + n)] : !!o: e.getAttributeNode(n);
                    return a && a.value !== !1 ? n.toLowerCase() : t;
                },
                set: function(e, t, n) {
                    return t === !1 ? le.removeAttr(e, n) : Re && De || !Oe.test(n) ? e.setAttribute(!De && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0,
                    n
                }
            },
            Re && De || (le.attrHooks.value = {
                get: function(e, n) {
                    var i = e.getAttributeNode(n);
                    return le.nodeName(e, "input") ? e.defaultValue: i && i.specified ? i.value: t
                },
                set: function(e, n, i) {
                    return le.nodeName(e, "input") ? (e.defaultValue = n, t) : Ee && Ee.set(e, n, i)
                }
            }),
            De || (Ee = le.valHooks.button = {
                get: function(e, n) {
                    var i = e.getAttributeNode(n);
                    return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value: i.specified) ? i.value: t
                },
                set: function(e, n, i) {
                    var o = e.getAttributeNode(i);
                    return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(i)),
                    o.value = n += "",
                    "value" === i || n === e.getAttribute(i) ? n: t
                }
            },
            le.attrHooks.contenteditable = {
                get: Ee.get,
                set: function(e, t, n) {
                    Ee.set(e, "" === t ? !1 : t, n)
                }
            },
            le.each(["width", "height"],
            function(e, n) {
                le.attrHooks[n] = le.extend(le.attrHooks[n], {
                    set: function(e, i) {
                        return "" === i ? (e.setAttribute(n, "auto"), i) : t
                    }
                })
            })),
            le.support.hrefNormalized || (le.each(["href", "src", "width", "height"],
            function(e, n) {
                le.attrHooks[n] = le.extend(le.attrHooks[n], {
                    get: function(e) {
                        var i = e.getAttribute(n, 2);
                        return null == i ? t: i
                    }
                })
            }), le.each(["href", "src"],
            function(e, t) {
                le.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            })),
            le.support.style || (le.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || t
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            }),
            le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                    null
                }
            })),
            le.support.enctype || (le.propFix.enctype = "encoding"),
            le.support.checkOn || le.each(["radio", "checkbox"],
            function() {
                le.valHooks[this] = {
                    get: function(e) {
                        return null === e.getAttribute("value") ? "on": e.value
                    }
                }
            }),
            le.each(["radio", "checkbox"],
            function() {
                le.valHooks[this] = le.extend(le.valHooks[this], {
                    set: function(e, n) {
                        return le.isArray(n) ? e.checked = le.inArray(le(e).val(), n) >= 0 : t
                    }
                })
            });
            var ze = /^(?:input|select|textarea)$/i,
            Be = /^key/,
            Me = /^(?:mouse|contextmenu)|click/,
            Le = /^(?:focusinfocus|focusoutblur)$/,
            He = /^([^.]*)(?:\.(.+)|)$/;
            le.event = {
                global: {},
                add: function(e, n, i, o, a) {
                    var r, s, l, c, u, d, h, f, p, m, g, v = le._data(e);
                    if (v) {
                        for (i.handler && (c = i, i = c.handler, a = c.selector), i.guid || (i.guid = le.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                            return typeof le === V || e && le.event.triggered === e.type ? t: le.event.dispatch.apply(d.elem, arguments)
                        },
                        d.elem = e), n = (n || "").match(ue) || [""], l = n.length; l--;) r = He.exec(n[l]) || [],
                        p = g = r[1],
                        m = (r[2] || "").split(".").sort(),
                        u = le.event.special[p] || {},
                        p = (a ? u.delegateType: u.bindType) || p,
                        u = le.event.special[p] || {},
                        h = le.extend({
                            type: p,
                            origType: g,
                            data: o,
                            handler: i,
                            guid: i.guid,
                            selector: a,
                            needsContext: a && le.expr.match.needsContext.test(a),
                            namespace: m.join(".")
                        },
                        c),
                        (f = s[p]) || (f = s[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, o, m, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))),
                        u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)),
                        a ? f.splice(f.delegateCount++, 0, h) : f.push(h),
                        le.event.global[p] = !0;
                        e = null
                    }
                },
                remove: function(e, t, n, i, o) {
                    var a, r, s, l, c, u, d, h, f, p, m, g = le.hasData(e) && le._data(e);
                    if (g && (u = g.events)) {
                        for (t = (t || "").match(ue) || [""], c = t.length; c--;) if (s = He.exec(t[c]) || [], f = m = s[1], p = (s[2] || "").split(".").sort(), f) {
                            for (d = le.event.special[f] || {},
                            f = (i ? d.delegateType: d.bindType) || f, h = u[f] || [], s = s[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = h.length; a--;) r = h[a],
                            !o && m !== r.origType || n && n.guid !== r.guid || s && !s.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (h.splice(a, 1), r.selector && h.delegateCount--, d.remove && d.remove.call(e, r));
                            l && !h.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || le.removeEvent(e, f, g.handle), delete u[f])
                        } else for (f in u) le.event.remove(e, f + t[c], n, i, !0);
                        le.isEmptyObject(u) && (delete g.handle, le._removeData(e, "events"))
                    }
                },
                trigger: function(n, i, o, a) {
                    var r, s, l, c, u, d, h, f = [o || Q],
                    p = re.call(n, "type") ? n.type: n,
                    m = re.call(n, "namespace") ? n.namespace.split(".") : [];
                    if (l = d = o = o || Q, 3 !== o.nodeType && 8 !== o.nodeType && !Le.test(p + le.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), s = 0 > p.indexOf(":") && "on" + p, n = n[le.expando] ? n: new le.Event(p, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), i = null == i ? [n] : le.makeArray(i, [n]), u = le.event.special[p] || {},
                    a || !u.trigger || u.trigger.apply(o, i) !== !1)) {
                        if (!a && !u.noBubble && !le.isWindow(o)) {
                            for (c = u.delegateType || p, Le.test(c + p) || (l = l.parentNode); l; l = l.parentNode) f.push(l),
                            d = l;
                            d === (o.ownerDocument || Q) && f.push(d.defaultView || d.parentWindow || e)
                        }
                        for (h = 0; (l = f[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? c: u.bindType || p,
                        r = (le._data(l, "events") || {})[n.type] && le._data(l, "handle"),
                        r && r.apply(l, i),
                        r = s && l[s],
                        r && le.acceptData(l) && r.apply && r.apply(l, i) === !1 && n.preventDefault();
                        if (n.type = p, !(a || n.isDefaultPrevented() || u._default && u._default.apply(o.ownerDocument, i) !== !1 || "click" === p && le.nodeName(o, "a") || !le.acceptData(o) || !s || !o[p] || le.isWindow(o))) {
                            d = o[s],
                            d && (o[s] = null),
                            le.event.triggered = p;
                            try {
                                o[p]()
                            } catch(g) {}
                            le.event.triggered = t,
                            d && (o[s] = d)
                        }
                        return n.result
                    }
                },
                dispatch: function(e) {
                    e = le.event.fix(e);
                    var n, i, o, a, r, s = [],
                    l = ie.call(arguments),
                    c = (le._data(this, "events") || {})[e.type] || [],
                    u = le.event.special[e.type] || {};
                    if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (s = le.event.handlers.call(this, e, c), n = 0; (a = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = a.elem, r = 0; (o = a.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((le.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e),
                        e.result
                    }
                },
                handlers: function(e, n) {
                    var i, o, a, r, s = [],
                    l = n.delegateCount,
                    c = e.target;
                    if (l && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (a = [], r = 0; l > r; r++) o = n[r],
                        i = o.selector + " ",
                        a[i] === t && (a[i] = o.needsContext ? le(i, this).index(c) >= 0 : le.find(i, this, null, [c]).length),
                        a[i] && a.push(o);
                        a.length && s.push({
                            elem: c,
                            handlers: a
                        })
                    }
                    return n.length > l && s.push({
                        elem: this,
                        handlers: n.slice(l)
                    }),
                    s
                },
                fix: function(e) {
                    if (e[le.expando]) return e;
                    var t, n, i, o = e.type,
                    a = e,
                    r = this.fixHooks[o];
                    for (r || (this.fixHooks[o] = r = Me.test(o) ? this.mouseHooks: Be.test(o) ? this.keyHooks: {}), i = r.props ? this.props.concat(r.props) : this.props, e = new le.Event(a), t = i.length; t--;) n = i[t],
                    e[n] = a[n];
                    return e.target || (e.target = a.srcElement || Q),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                    e.metaKey = !!e.metaKey,
                    r.filter ? r.filter(e, a) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                        e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, n) {
                        var i, o, a, r = n.button,
                        s = n.fromElement;
                        return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || Q, a = o.documentElement, i = o.body, e.pageX = n.clientX + (a && a.scrollLeft || i && i.scrollLeft || 0) - (a && a.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || i && i.scrollTop || 0) - (a && a.clientTop || i && i.clientTop || 0)),
                        !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                        e.which || r === t || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                        e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function() {
                            return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                        }
                    },
                    focus: {
                        trigger: function() {
                            if (this !== Q.activeElement && this.focus) try {
                                return this.focus(),
                                !1
                            } catch(e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === Q.activeElement && this.blur ? (this.blur(), !1) : t
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== t && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, i) {
                    var o = le.extend(new le.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    i ? le.event.trigger(o, null, t) : le.event.dispatch.call(t, o),
                    o.isDefaultPrevented() && n.preventDefault()
                }
            },
            le.removeEvent = Q.removeEventListener ?
            function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }: function(e, t, n) {
                var i = "on" + t;
                e.detachEvent && (typeof e[i] === V && (e[i] = null), e.detachEvent(i, n))
            },
            le.Event = function(e, n) {
                return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l: c) : this.type = e, n && le.extend(this, n), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0, t) : new le.Event(e, n)
            },
            le.Event.prototype = {
                isDefaultPrevented: c,
                isPropagationStopped: c,
                isImmediatePropagationStopped: c,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = l,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = l,
                    e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = l,
                    this.stopPropagation()
                }
            },
            le.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            function(e, t) {
                le.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = this,
                        o = e.relatedTarget,
                        a = e.handleObj;
                        return (!o || o !== i && !le.contains(i, o)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t),
                        n
                    }
                }
            }),
            le.support.submitBubbles || (le.event.special.submit = {
                setup: function() {
                    return le.nodeName(this, "form") ? !1 : (le.event.add(this, "click._submit keypress._submit",
                    function(e) {
                        var n = e.target,
                        i = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form: t;
                        i && !le._data(i, "submitBubbles") && (le.event.add(i, "submit._submit",
                        function(e) {
                            e._submit_bubble = !0
                        }), le._data(i, "submitBubbles", !0))
                    }), t)
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    return le.nodeName(this, "form") ? !1 : (le.event.remove(this, "._submit"), t)
                }
            }),
            le.support.changeBubbles || (le.event.special.change = {
                setup: function() {
                    return ze.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change",
                    function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), le.event.add(this, "click._change",
                    function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                        le.event.simulate("change", this, e, !0)
                    })), !1) : (le.event.add(this, "beforeactivate._change",
                    function(e) {
                        var t = e.target;
                        ze.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change",
                        function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                        }), le._data(t, "changeBubbles", !0))
                    }), t)
                },
                handle: function(e) {
                    var n = e.target;
                    return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
                },
                teardown: function() {
                    return le.event.remove(this, "._change"),
                    !ze.test(this.nodeName)
                }
            }),
            le.support.focusinBubbles || le.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(e, t) {
                var n = 0,
                i = function(e) {
                    le.event.simulate(t, e.target, le.event.fix(e), !0)
                };
                le.event.special[t] = {
                    setup: function() {
                        0 === n++&&Q.addEventListener(e, i, !0)
                    },
                    teardown: function() {
                        0 === --n && Q.removeEventListener(e, i, !0)
                    }
                }
            }),
            le.fn.extend({
                on: function(e, n, i, o, a) {
                    var r, s;
                    if ("object" == typeof e) {
                        "string" != typeof n && (i = i || n, n = t);
                        for (r in e) this.on(r, n, i, e[r], a);
                        return this
                    }
                    if (null == i && null == o ? (o = n, i = n = t) : null == o && ("string" == typeof n ? (o = i, i = t) : (o = i, i = n, n = t)), o === !1) o = c;
                    else if (!o) return this;
                    return 1 === a && (s = o, o = function(e) {
                        return le().off(e),
                        s.apply(this, arguments)
                    },
                    o.guid = s.guid || (s.guid = le.guid++)),
                    this.each(function() {
                        le.event.add(this, e, o, i, n)
                    })
                },
                one: function(e, t, n, i) {
                    return this.on(e, t, n, i, 1)
                },
                off: function(e, n, i) {
                    var o, a;
                    if (e && e.preventDefault && e.handleObj) return o = e.handleObj,
                    le(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace: o.origType, o.selector, o.handler),
                    this;
                    if ("object" == typeof e) {
                        for (a in e) this.off(a, n, e[a]);
                        return this
                    }
                    return (n === !1 || "function" == typeof n) && (i = n, n = t),
                    i === !1 && (i = c),
                    this.each(function() {
                        le.event.remove(this, e, i, n)
                    })
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        le.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, n) {
                    var i = this[0];
                    return i ? le.event.trigger(e, n, i, !0) : t
                }
            }),
            function(e, t) {
                function n(e) {
                    return pe.test(e + "")
                }
                function i() {
                    var e, t = [];
                    return e = function(n, i) {
                        return t.push(n += " ") > S.cacheLength && delete e[t.shift()],
                        e[n] = i
                    }
                }
                function o(e) {
                    return e[L] = !0,
                    e
                }
                function a(e) {
                    var t = A.createElement("div");
                    try {
                        return e(t)
                    } catch(n) {
                        return ! 1
                    } finally {
                        t = null
                    }
                }
                function r(e, t, n, i) {
                    var o, a, r, s, l, c, u, f, p, m;
                    if ((t ? t.ownerDocument || t: H) !== A && P(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (!O && !i) {
                        if (o = me.exec(e)) if (r = o[1]) {
                            if (9 === s) {
                                if (a = t.getElementById(r), !a || !a.parentNode) return n;
                                if (a.id === r) return n.push(a),
                                n
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(r)) && B(t, a) && a.id === r) return n.push(a),
                            n
                        } else {
                            if (o[2]) return G.apply(n, J.call(t.getElementsByTagName(e), 0)),
                            n;
                            if ((r = o[3]) && q.getByClassName && t.getElementsByClassName) return G.apply(n, J.call(t.getElementsByClassName(r), 0)),
                            n
                        }
                        if (q.qsa && !D.test(e)) {
                            if (u = !0, f = L, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = d(e), (u = t.getAttribute("id")) ? f = u.replace(be, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + h(c[l]);
                                p = fe.test(e) && t.parentNode || t,
                                m = c.join(",")
                            }
                            if (m) try {
                                return G.apply(n, J.call(p.querySelectorAll(m), 0)),
                                n
                            } catch(g) {} finally {
                                u || t.removeAttribute("id")
                            }
                        }
                    }
                    return w(e.replace(re, "$1"), t, n, i)
                }
                function s(e, t) {
                    var n = t && e,
                    i = n && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                    return e ? 1 : -1
                }
                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }
                function c(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function u(e) {
                    return o(function(t) {
                        return t = +t,
                        o(function(n, i) {
                            for (var o, a = e([], n.length, t), r = a.length; r--;) n[o = a[r]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }
                function d(e, t) {
                    var n, i, o, a, s, l, c, u = U[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, l = [], c = S.preFilter; s;) { (!n || (i = se.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])),
                        n = !1,
                        (i = ce.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(re, " ")
                        }), s = s.slice(n.length));
                        for (a in S.filter) ! (i = he[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length: s ? r.error(e) : U(e, l).slice(0)
                }
                function h(e) {
                    for (var t = 0,
                    n = e.length,
                    i = ""; n > t; t++) i += e[t].value;
                    return i
                }
                function f(e, t, n) {
                    var i = t.dir,
                    o = n && "parentNode" === i,
                    a = F++;
                    return t.first ?
                    function(t, n, a) {
                        for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, a)
                    }: function(t, n, r) {
                        var s, l, c, u = j + " " + a;
                        if (r) {
                            for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, r)) return ! 0
                        } else for (; t = t[i];) if (1 === t.nodeType || o) if (c = t[L] || (t[L] = {}), (l = c[i]) && l[0] === u) {
                            if ((s = l[1]) === !0 || s === _) return s === !0
                        } else if (l = c[i] = [u], l[1] = e(t, n, r) || _, l[1] === !0) return ! 0
                    }
                }
                function p(e) {
                    return e.length > 1 ?
                    function(t, n, i) {
                        for (var o = e.length; o--;) if (!e[o](t, n, i)) return ! 1;
                        return ! 0
                    }: e[0]
                }
                function m(e, t, n, i, o) {
                    for (var a, r = [], s = 0, l = e.length, c = null != t; l > s; s++)(a = e[s]) && (!n || n(a, i, o)) && (r.push(a), c && t.push(s));
                    return r
                }
                function g(e, t, n, i, a, r) {
                    return i && !i[L] && (i = g(i)),
                    a && !a[L] && (a = g(a, r)),
                    o(function(o, r, s, l) {
                        var c, u, d, h = [],
                        f = [],
                        p = r.length,
                        g = o || y(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !o && t ? g: m(g, h, e, s, l),
                        b = n ? a || (o ? e: p || i) ? [] : r: v;
                        if (n && n(v, b, s, l), i) for (c = m(b, f), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(v[f[u]] = d));
                        if (o) {
                            if (a || e) {
                                if (a) {
                                    for (c = [], u = b.length; u--;)(d = b[u]) && c.push(v[u] = d);
                                    a(null, b = [], c, l)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (c = a ? Z.call(o, d) : h[u]) > -1 && (o[c] = !(r[c] = d))
                            }
                        } else b = m(b === r ? b.splice(p, b.length) : b),
                        a ? a(null, r, b, l) : G.apply(r, b)
                    })
                }
                function v(e) {
                    for (var t, n, i, o = e.length,
                    a = S.relative[e[0].type], r = a || S.relative[" "], s = a ? 1 : 0, l = f(function(e) {
                        return e === t
                    },
                    r, !0), c = f(function(e) {
                        return Z.call(t, e) > -1
                    },
                    r, !0), u = [function(e, n, i) {
                        return ! a && (i || n !== I) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                    }]; o > s; s++) if (n = S.relative[e[s].type]) u = [f(p(u), n)];
                    else {
                        if (n = S.filter[e[s].type].apply(null, e[s].matches), n[L]) {
                            for (i = ++s; o > i && !S.relative[e[i].type]; i++);
                            return g(s > 1 && p(u), s > 1 && h(e.slice(0, s - 1)).replace(re, "$1"), n, i > s && v(e.slice(s, i)), o > i && v(e = e.slice(i)), o > i && h(e))
                        }
                        u.push(n)
                    }
                    return p(u)
                }
                function b(e, t) {
                    var n = 0,
                    i = t.length > 0,
                    a = e.length > 0,
                    s = function(o, s, l, c, u) {
                        var d, h, f, p = [],
                        g = 0,
                        v = "0",
                        b = o && [],
                        y = null != u,
                        w = I,
                        x = o || a && S.find.TAG("*", u && s.parentNode || s),
                        C = j += null == w ? 1 : Math.random() || .1;
                        for (y && (I = s !== A && s, _ = n); null != (d = x[v]); v++) {
                            if (a && d) {
                                for (h = 0; f = e[h++];) if (f(d, s, l)) {
                                    c.push(d);
                                    break
                                }
                                y && (j = C, _ = ++n)
                            }
                            i && ((d = !f && d) && g--, o && b.push(d))
                        }
                        if (g += v, i && v !== g) {
                            for (h = 0; f = t[h++];) f(b, p, s, l);
                            if (o) {
                                if (g > 0) for (; v--;) b[v] || p[v] || (p[v] = K.call(c));
                                p = m(p)
                            }
                            G.apply(c, p),
                            y && !o && p.length > 0 && g + t.length > 1 && r.uniqueSort(c)
                        }
                        return y && (j = C, I = w),
                        b
                    };
                    return i ? o(s) : s
                }
                function y(e, t, n) {
                    for (var i = 0,
                    o = t.length; o > i; i++) r(e, t[i], n);
                    return n
                }
                function w(e, t, n, i) {
                    var o, a, r, s, l, c = d(e);
                    if (!i && 1 === c.length) {
                        if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (r = a[0]).type && 9 === t.nodeType && !O && S.relative[a[1].type]) {
                            if (t = S.find.ID(r.matches[0].replace(we, xe), t)[0], !t) return n;
                            e = e.slice(a.shift().value.length)
                        }
                        for (o = he.needsContext.test(e) ? 0 : a.length; o--&&(r = a[o], !S.relative[s = r.type]);) if ((l = S.find[s]) && (i = l(r.matches[0].replace(we, xe), fe.test(a[0].type) && t.parentNode || t))) {
                            if (a.splice(o, 1), e = i.length && h(a), !e) return G.apply(n, J.call(i, 0)),
                            n;
                            break
                        }
                    }
                    return T(e, c)(i, t, O, n, fe.test(e)),
                    n
                }
                function x() {}
                var C, _, S, $, E, T, k, I, P, A, N, O, D, R, z, B, M, L = "sizzle" + -new Date,
                H = e.document,
                q = {},
                j = 0,
                F = 0,
                W = i(),
                U = i(),
                Y = i(),
                V = typeof t,
                Q = 1 << 31,
                X = [],
                K = X.pop,
                G = X.push,
                J = X.slice,
                Z = X.indexOf ||
                function(e) {
                    for (var t = 0,
                    n = this.length; n > t; t++) if (this[t] === e) return t;
                    return - 1
                },
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ne = te.replace("w", "w#"),
                ie = "([*^$|!~]?=)",
                oe = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + ie + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]",
                ae = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                re = RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                se = RegExp("^" + ee + "*," + ee + "*"),
                ce = RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"),
                ue = RegExp(ae),
                de = RegExp("^" + ne + "$"),
                he = {
                    ID: RegExp("^#(" + te + ")"),
                    CLASS: RegExp("^\\.(" + te + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"),
                    TAG: RegExp("^(" + te.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + oe),
                    PSEUDO: RegExp("^" + ae),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    needsContext: RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /[\x20\t\r\n\f]*[+~]/,
                pe = /^[^{]+\{\s*\[native code/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ge = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                be = /'|\\/g,
                ye = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                we = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                xe = function(e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
                try {
                    J.call(H.documentElement.childNodes, 0)[0].nodeType
                } catch(Ce) {
                    J = function(e) {
                        for (var t, n = []; t = this[e++];) n.push(t);
                        return n
                    }
                }
                E = r.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName: !1
                },
                P = r.setDocument = function(e) {
                    var i = e ? e.ownerDocument || e: H;
                    return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, N = i.documentElement, O = E(i), q.tagNameNoComments = a(function(e) {
                        return e.appendChild(i.createComment("")),
                        !e.getElementsByTagName("*").length
                    }), q.attributes = a(function(e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t
                    }), q.getByClassName = a(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                        e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                    }), q.getByName = a(function(e) {
                        e.id = L + 0,
                        e.innerHTML = "<a name='" + L + "'></a><div name='" + L + "'></div>",
                        N.insertBefore(e, N.firstChild);
                        var t = i.getElementsByName && i.getElementsByName(L).length === 2 + i.getElementsByName(L + 0).length;
                        return q.getIdNotName = !i.getElementById(L),
                        N.removeChild(e),
                        t
                    }), S.attrHandle = a(function(e) {
                        return e.innerHTML = "<a href='#'></a>",
                        e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
                    }) ? {}: {
                        href: function(e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    },
                    q.getIdNotName ? (S.find.ID = function(e, t) {
                        if (typeof t.getElementById !== V && !O) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    },
                    S.filter.ID = function(e) {
                        var t = e.replace(we, xe);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (S.find.ID = function(e, n) {
                        if (typeof n.getElementById !== V && !O) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== V && i.getAttributeNode("id").value === e ? [i] : t: []
                        }
                    },
                    S.filter.ID = function(e) {
                        var t = e.replace(we, xe);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), S.find.TAG = q.tagNameNoComments ?
                    function(e, n) {
                        return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t
                    }: function(e, t) {
                        var n, i = [],
                        o = 0,
                        a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return a
                    },
                    S.find.NAME = q.getByName &&
                    function(e, n) {
                        return typeof n.getElementsByName !== V ? n.getElementsByName(name) : t
                    },
                    S.find.CLASS = q.getByClassName &&
                    function(e, n) {
                        return typeof n.getElementsByClassName === V || O ? t: n.getElementsByClassName(e)
                    },
                    R = [], D = [":focus"], (q.qsa = n(i.querySelectorAll)) && (a(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>",
                        e.querySelectorAll("[selected]").length || D.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                        e.querySelectorAll(":checked").length || D.push(":checked")
                    }), a(function(e) {
                        e.innerHTML = "<input type='hidden' i=''/>",
                        e.querySelectorAll("[i^='']").length && D.push("[*^$]=" + ee + "*(?:\"\"|'')"),
                        e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        D.push(",.*:")
                    })), (q.matchesSelector = n(z = N.matchesSelector || N.mozMatchesSelector || N.webkitMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && a(function(e) {
                        q.disconnectedMatch = z.call(e, "div"),
                        z.call(e, "[s!='']:x"),
                        R.push("!=", ae)
                    }), D = RegExp(D.join("|")), R = RegExp(R.join("|")), B = n(N.contains) || N.compareDocumentPosition ?
                    function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement: e,
                        i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }: function(e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                        return ! 1
                    },
                    M = N.compareDocumentPosition ?
                    function(e, t) {
                        var n;
                        return e === t ? (k = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || B(H, e) ? -1 : t === i || B(H, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    }: function(e, t) {
                        var n, o = 0,
                        a = e.parentNode,
                        r = t.parentNode,
                        l = [e],
                        c = [t];
                        if (e === t) return k = !0,
                        0;
                        if (!a || !r) return e === i ? -1 : t === i ? 1 : a ? -1 : r ? 1 : 0;
                        if (a === r) return s(e, t);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (n = t; n = n.parentNode;) c.unshift(n);
                        for (; l[o] === c[o];) o++;
                        return o ? s(l[o], c[o]) : l[o] === H ? -1 : c[o] === H ? 1 : 0
                    },
                    k = !1, [0, 0].sort(M), q.detectDuplicates = k, A) : A
                },
                r.matches = function(e, t) {
                    return r(e, null, null, t)
                },
                r.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== A && P(e), t = t.replace(ye, "='$1']"), !(!q.matchesSelector || O || R && R.test(t) || D.test(t))) try {
                        var n = z.call(e, t);
                        if (n || q.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch(i) {}
                    return r(t, A, null, [e]).length > 0
                },
                r.contains = function(e, t) {
                    return (e.ownerDocument || e) !== A && P(e),
                    B(e, t)
                },
                r.attr = function(e, t) {
                    var n;
                    return (e.ownerDocument || e) !== A && P(e),
                    O || (t = t.toLowerCase()),
                    (n = S.attrHandle[t]) ? n(e) : O || q.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
                },
                r.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                },
                r.uniqueSort = function(e) {
                    var t, n = [],
                    i = 1,
                    o = 0;
                    if (k = !q.detectDuplicates, e.sort(M), k) {
                        for (; t = e[i]; i++) t === e[i - 1] && (o = n.push(i));
                        for (; o--;) e.splice(n[o], 1)
                    }
                    return e
                },
                $ = r.getText = function(e) {
                    var t, n = "",
                    i = 0,
                    o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += $(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else for (; t = e[i]; i++) n += $(t);
                    return n
                },
                S = r.selectors = {
                    cacheLength: 50,
                    createPseudo: o,
                    match: he,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(we, xe),
                            e[3] = (e[4] || e[5] || "").replace(we, xe),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || r.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && r.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return he.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ue.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            return "*" === e ?
                            function() {
                                return ! 0
                            }: (e = e.replace(we, xe).toLowerCase(),
                            function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function(e) {
                            var t = W[e + " "];
                            return t || (t = RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e,
                            function(e) {
                                return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var o = r.attr(i, e);
                                return null == o ? "!=" === t: t ? (o += "", "=" === t ? o === n: "!=" === t ? o !== n: "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice( - n.length) === n: "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t ? o === n || o.slice(0, n.length + 1) === n + "-": !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, o) {
                            var a = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice( - 4),
                            s = "of-type" === t;
                            return 1 === i && 0 === o ?
                            function(e) {
                                return !! e.parentNode
                            }: function(t, n, l) {
                                var c, u, d, h, f, p, m = a !== r ? "nextSibling": "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                b = !l && !s;
                                if (g) {
                                    if (a) {
                                        for (; m;) {
                                            for (d = t; d = d[m];) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return ! 0
                                    }
                                    if (p = [r ? g.firstChild: g.lastChild], r && b) {
                                        for (u = g[L] || (g[L] = {}), c = u[e] || [], f = c[0] === j && c[1], h = c[0] === j && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (h = f = 0) || p.pop();) if (1 === d.nodeType && ++h && d === t) {
                                            u[e] = [j, f, h];
                                            break
                                        }
                                    } else if (b && (c = (t[L] || (t[L] = {}))[e]) && c[0] === j) h = c[1];
                                    else for (; (d = ++f && d && d[m] || (h = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++h || (b && ((d[L] || (d[L] = {}))[e] = [j, h]), d !== t)););
                                    return h -= o,
                                    h === i || 0 === h % i && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = S.pseudos[e] || S.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
                            return i[L] ? i(t) : i.length > 1 ? (n = [e, e, "", t], S.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                                for (var o, a = i(e, t), r = a.length; r--;) o = Z.call(e, a[r]),
                                e[o] = !(n[o] = a[r])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: o(function(e) {
                            var t = [],
                            n = [],
                            i = T(e.replace(re, "$1"));
                            return i[L] ? o(function(e, t, n, o) {
                                for (var a, r = i(e, null, o, []), s = e.length; s--;)(a = r[s]) && (e[s] = !(t[s] = a))
                            }) : function(e, o, a) {
                                return t[0] = e,
                                i(t, null, a, n),
                                !n.pop()
                            }
                        }),
                        has: o(function(e) {
                            return function(t) {
                                return r(e, t).length > 0
                            }
                        }),
                        contains: o(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || $(t)).indexOf(e) > -1
                            }
                        }),
                        lang: o(function(e) {
                            return de.test(e || "") || r.error("unsupported lang: " + e),
                            e = e.replace(we, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                if (n = O ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return ! 1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === N
                        },
                        focus: function(e) {
                            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                            return ! 0
                        },
                        parent: function(e) {
                            return ! S.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ve.test(e.nodeName)
                        },
                        input: function(e) {
                            return ge.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(e, t) {
                            return [t - 1]
                        }),
                        eq: u(function(e, t, n) {
                            return [0 > n ? n + t: n]
                        }),
                        even: u(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: u(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: u(function(e, t, n) {
                            for (var i = 0 > n ? n + t: n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: u(function(e, t, n) {
                            for (var i = 0 > n ? n + t: n; t > ++i;) e.push(i);
                            return e
                        })
                    }
                };
                for (C in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) S.pseudos[C] = l(C);
                for (C in {
                    submit: !0,
                    reset: !0
                }) S.pseudos[C] = c(C);
                T = r.compile = function(e, t) {
                    var n, i = [],
                    o = [],
                    a = Y[e + " "];
                    if (!a) {
                        for (t || (t = d(e)), n = t.length; n--;) a = v(t[n]),
                        a[L] ? i.push(a) : o.push(a);
                        a = Y(e, b(o, i))
                    }
                    return a
                },
                S.pseudos.nth = S.pseudos.eq,
                S.filters = x.prototype = S.pseudos,
                S.setFilters = new x,
                P(),
                r.attr = le.attr,
                le.find = r,
                le.expr = r.selectors,
                le.expr[":"] = le.expr.pseudos,
                le.unique = r.uniqueSort,
                le.text = r.getText,
                le.isXMLDoc = r.isXML,
                le.contains = r.contains
            } (e);
            var qe = /Until$/,
            je = /^(?:parents|prev(?:Until|All))/,
            Fe = /^.[^:#\[\.,]*$/,
            We = le.expr.match.needsContext,
            Ue = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            le.fn.extend({
                find: function(e) {
                    var t, n, i, o = this.length;
                    if ("string" != typeof e) return i = this,
                    this.pushStack(le(e).filter(function() {
                        for (t = 0; o > t; t++) if (le.contains(i[t], this)) return ! 0
                    }));
                    for (n = [], t = 0; o > t; t++) le.find(e, this[t], n);
                    return n = this.pushStack(o > 1 ? le.unique(n) : n),
                    n.selector = (this.selector ? this.selector + " ": "") + e,
                    n
                },
                has: function(e) {
                    var t, n = le(e, this),
                    i = n.length;
                    return this.filter(function() {
                        for (t = 0; i > t; t++) if (le.contains(this, n[t])) return ! 0
                    })
                },
                not: function(e) {
                    return this.pushStack(d(this, e, !1))
                },
                filter: function(e) {
                    return this.pushStack(d(this, e, !0))
                },
                is: function(e) {
                    return !! e && ("string" == typeof e ? We.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0)
                },
                closest: function(e, t) {
                    for (var n, i = 0,
                    o = this.length,
                    a = [], r = We.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                        if (r ? r.index(n) > -1 : le.find.matchesSelector(n, e)) {
                            a.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                    return this.pushStack(a.length > 1 ? le.unique(a) : a)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
                },
                add: function(e, t) {
                    var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
                    i = le.merge(this.get(), n);
                    return this.pushStack(le.unique(i))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
                }
            }),
            le.fn.andSelf = le.fn.addBack,
            le.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t: null
                },
                parents: function(e) {
                    return le.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return le.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return u(e, "nextSibling")
                },
                prev: function(e) {
                    return u(e, "previousSibling")
                },
                nextAll: function(e) {
                    return le.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return le.dir(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return le.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return le.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return le.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return le.sibling(e.firstChild)
                },
                contents: function(e) {
                    return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: le.merge([], e.childNodes)
                }
            },
            function(e, t) {
                le.fn[e] = function(n, i) {
                    var o = le.map(this, t, n);
                    return qe.test(e) || (i = n),
                    i && "string" == typeof i && (o = le.filter(i, o)),
                    o = this.length > 1 && !Ue[e] ? le.unique(o) : o,
                    this.length > 1 && je.test(e) && (o = o.reverse()),
                    this.pushStack(o)
                }
            }),
            le.extend({
                filter: function(e, t, n) {
                    return n && (e = ":not(" + e + ")"),
                    1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t)
                },
                dir: function(e, n, i) {
                    for (var o = [], a = e[n]; a && 9 !== a.nodeType && (i === t || 1 !== a.nodeType || !le(a).is(i));) 1 === a.nodeType && o.push(a),
                    a = a[n];
                    return o
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });
            var Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ve = / jQuery\d+="(?:null|\d+)"/g,
            Qe = RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
            Xe = /^\s+/,
            Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ge = /<([\w:]+)/,
            Je = /<tbody/i,
            Ze = /<|&#?\w+;/,
            et = /<(?:script|style|link)/i,
            tt = /^(?:checkbox|radio)$/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            it = /^$|\/(?:java|ecma)script/i,
            ot = /^true\/(.*)/,
            at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            rt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            st = h(Q),
            lt = st.appendChild(Q.createElement("div"));
            rt.optgroup = rt.option,
            rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead,
            rt.th = rt.td,
            le.fn.extend({
                text: function(e) {
                    return le.access(this,
                    function(e) {
                        return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
                    },
                    null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if (le.isFunction(e)) return this.each(function(t) {
                        le(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return le.isFunction(e) ? this.each(function(t) {
                        le(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = le(this),
                        n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = le.isFunction(e);
                    return this.each(function(n) {
                        le(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0,
                    function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, !0,
                    function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                    })
                },
                before: function() {
                    return this.domManip(arguments, !1,
                    function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, !1,
                    function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    for (var n, i = 0; null != (n = this[i]); i++)(!e || le.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || le.cleanData(y(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && g(y(n, "script")), n.parentNode.removeChild(n)));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && le.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && le.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e,
                    t = null == t ? e: t,
                    this.map(function() {
                        return le.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return le.access(this,
                    function(e) {
                        var n = this[0] || {},
                        i = 0,
                        o = this.length;
                        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
                        if (! ("string" != typeof e || et.test(e) || !le.support.htmlSerialize && Qe.test(e) || !le.support.leadingWhitespace && Xe.test(e) || rt[(Ge.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(Ke, "<$1></$2>");
                            try {
                                for (; o > i; i++) n = this[i] || {},
                                1 === n.nodeType && (le.cleanData(y(n, !1)), n.innerHTML = e);
                                n = 0
                            } catch(a) {}
                        }
                        n && this.empty().append(e)
                    },
                    null, e, arguments.length)
                },
                replaceWith: function(e) {
                    var t = le.isFunction(e);
                    return t || "string" == typeof e || (e = le(e).not(this).detach()),
                    this.domManip([e], !0,
                    function(e) {
                        var t = this.nextSibling,
                        n = this.parentNode;
                        n && (le(this).remove(), n.insertBefore(e, t))
                    })
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, n, i) {
                    e = te.apply([], e);
                    var o, a, r, s, l, c, u = 0,
                    d = this.length,
                    h = this,
                    g = d - 1,
                    v = e[0],
                    b = le.isFunction(v);
                    if (b || !(1 >= d || "string" != typeof v || le.support.checkClone) && nt.test(v)) return this.each(function(o) {
                        var a = h.eq(o);
                        b && (e[0] = v.call(this, o, n ? a.html() : t)),
                        a.domManip(e, n, i)
                    });
                    if (d && (c = le.buildFragment(e, this[0].ownerDocument, !1, this), o = c.firstChild, 1 === c.childNodes.length && (c = o), o)) {
                        for (n = n && le.nodeName(o, "tr"), s = le.map(y(c, "script"), p), r = s.length; d > u; u++) a = c,
                        u !== g && (a = le.clone(a, !0, !0), r && le.merge(s, y(a, "script"))),
                        i.call(n && le.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], a, u);
                        if (r) for (l = s[s.length - 1].ownerDocument, le.map(s, m), u = 0; r > u; u++) a = s[u],
                        it.test(a.type || "") && !le._data(a, "globalEval") && le.contains(l, a) && (a.src ? le.ajax({
                            url: a.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : le.globalEval((a.text || a.textContent || a.innerHTML || "").replace(at, "")));
                        c = o = null
                    }
                    return this
                }
            }),
            le.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(e, t) {
                le.fn[e] = function(e) {
                    for (var n, i = 0,
                    o = [], a = le(e), r = a.length - 1; r >= i; i++) n = i === r ? this: this.clone(!0),
                    le(a[i])[t](n),
                    ne.apply(o, n.get());
                    return this.pushStack(o)
                }
            }),
            le.extend({
                clone: function(e, t, n) {
                    var i, o, a, r, s, l = le.contains(e.ownerDocument, e);
                    if (le.support.html5Clone || le.isXMLDoc(e) || !Qe.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(a = lt.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e))) for (i = y(a), s = y(e), r = 0; null != (o = s[r]); ++r) i[r] && b(o, i[r]);
                    if (t) if (n) for (s = s || y(e), i = i || y(a), r = 0; null != (o = s[r]); r++) v(o, i[r]);
                    else v(e, a);
                    return i = y(a, "script"),
                    i.length > 0 && g(i, !l && y(e, "script")),
                    i = s = o = null,
                    a
                },
                buildFragment: function(e, t, n, i) {
                    for (var o, a, r, s, l, c, u, d = e.length,
                    f = h(t), p = [], m = 0; d > m; m++) if (a = e[m], a || 0 === a) if ("object" === le.type(a)) le.merge(p, a.nodeType ? [a] : a);
                    else if (Ze.test(a)) {
                        for (s = s || f.appendChild(t.createElement("div")), l = (Ge.exec(a) || ["", ""])[1].toLowerCase(), u = rt[l] || rt._default, s.innerHTML = u[1] + a.replace(Ke, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                        if (!le.support.leadingWhitespace && Xe.test(a) && p.push(t.createTextNode(Xe.exec(a)[0])), !le.support.tbody) for (a = "table" !== l || Je.test(a) ? "<table>" !== u[1] || Je.test(a) ? 0 : s: s.firstChild, o = a && a.childNodes.length; o--;) le.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                        for (le.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else p.push(t.createTextNode(a));
                    for (s && f.removeChild(s), le.support.appendChecked || le.grep(y(p, "input"), w), m = 0; a = p[m++];) if ((!i || -1 === le.inArray(a, i)) && (r = le.contains(a.ownerDocument, a), s = y(f.appendChild(a), "script"), r && g(s), n)) for (o = 0; a = s[o++];) it.test(a.type || "") && n.push(a);
                    return s = null,
                    f
                },
                cleanData: function(e, t) {
                    for (var n, i, o, a, r = 0,
                    s = le.expando,
                    l = le.cache,
                    c = le.support.deleteExpando,
                    u = le.event.special; null != (n = e[r]); r++) if ((t || le.acceptData(n)) && (o = n[s], a = o && l[o])) {
                        if (a.events) for (i in a.events) u[i] ? le.event.remove(n, i) : le.removeEvent(n, i, a.handle);
                        l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, Z.push(o))
                    }
                }
            });
            var ct, ut, dt, ht = /alpha\([^)]*\)/i,
            ft = /opacity\s*=\s*([^)]*)/,
            pt = /^(top|right|bottom|left)$/,
            mt = /^(none|table(?!-c[ea]).+)/,
            gt = /^margin/,
            vt = RegExp("^(" + ce + ")(.*)$", "i"),
            bt = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
            yt = RegExp("^([+-])=(" + ce + ")", "i"),
            wt = {
                BODY: "block"
            },
            xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ct = {
                letterSpacing: 0,
                fontWeight: 400
            },
            _t = ["Top", "Right", "Bottom", "Left"],
            St = ["Webkit", "O", "Moz", "ms"];
            le.fn.extend({
                css: function(e, n) {
                    return le.access(this,
                    function(e, n, i) {
                        var o, a, r = {},
                        s = 0;
                        if (le.isArray(n)) {
                            for (a = ut(e), o = n.length; o > s; s++) r[n[s]] = le.css(e, n[s], !1, a);
                            return r
                        }
                        return i !== t ? le.style(e, n, i) : le.css(e, n)
                    },
                    e, n, arguments.length > 1)
                },
                show: function() {
                    return _(this, !0)
                },
                hide: function() {
                    return _(this)
                },
                toggle: function(e) {
                    var t = "boolean" == typeof e;
                    return this.each(function() { (t ? e: C(this)) ? le(this).show() : le(this).hide()
                    })
                }
            }),
            le.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = dt(e, "opacity");
                                return "" === n ? "1": n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": le.support.cssFloat ? "cssFloat": "styleFloat"
                },
                style: function(e, n, i, o) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var a, r, s, l = le.camelCase(n),
                        c = e.style;
                        if (n = le.cssProps[l] || (le.cssProps[l] = x(c, l)), s = le.cssHooks[n] || le.cssHooks[l], i === t) return s && "get" in s && (a = s.get(e, !1, o)) !== t ? a: c[n];
                        if (r = typeof i, "string" === r && (a = yt.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(le.css(e, n)), r = "number"), !(null == i || "number" === r && isNaN(i) || ("number" !== r || le.cssNumber[l] || (i += "px"), le.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (i = s.set(e, i, o)) === t))) try {
                            c[n] = i
                        } catch(u) {}
                    }
                },
                css: function(e, n, i, o) {
                    var a, r, s, l = le.camelCase(n);
                    return n = le.cssProps[l] || (le.cssProps[l] = x(e.style, l)),
                    s = le.cssHooks[n] || le.cssHooks[l],
                    s && "get" in s && (r = s.get(e, !0, i)),
                    r === t && (r = dt(e, n, o)),
                    "normal" === r && n in Ct && (r = Ct[n]),
                    "" === i || i ? (a = parseFloat(r), i === !0 || le.isNumeric(a) ? a || 0 : r) : r
                },
                swap: function(e, t, n, i) {
                    var o, a, r = {};
                    for (a in t) r[a] = e.style[a],
                    e.style[a] = t[a];
                    o = n.apply(e, i || []);
                    for (a in t) e.style[a] = r[a];
                    return o
                }
            }),
            e.getComputedStyle ? (ut = function(t) {
                return e.getComputedStyle(t, null)
            },
            dt = function(e, n, i) {
                var o, a, r, s = i || ut(e),
                l = s ? s.getPropertyValue(n) || s[n] : t,
                c = e.style;
                return s && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, n)), bt.test(l) && gt.test(n) && (o = c.width, a = c.minWidth, r = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = o, c.minWidth = a, c.maxWidth = r)),
                l
            }) : Q.documentElement.currentStyle && (ut = function(e) {
                return e.currentStyle
            },
            dt = function(e, n, i) {
                var o, a, r, s = i || ut(e),
                l = s ? s[n] : t,
                c = e.style;
                return null == l && c && c[n] && (l = c[n]),
                bt.test(l) && !pt.test(n) && (o = c.left, a = e.runtimeStyle, r = a && a.left, r && (a.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em": l, l = c.pixelLeft + "px", c.left = o, r && (a.left = r)),
                "" === l ? "auto": l
            }),
            le.each(["height", "width"],
            function(e, n) {
                le.cssHooks[n] = {
                    get: function(e, i, o) {
                        return i ? 0 === e.offsetWidth && mt.test(le.css(e, "display")) ? le.swap(e, xt,
                        function() {
                            return E(e, n, o)
                        }) : E(e, n, o) : t
                    },
                    set: function(e, t, i) {
                        var o = i && ut(e);
                        return S(e, t, i ? $(e, n, i, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o), o) : 0)
                    }
                }
            }),
            le.support.opacity || (le.cssHooks.opacity = {
                get: function(e, t) {
                    return ft.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
                },
                set: function(e, t) {
                    var n = e.style,
                    i = e.currentStyle,
                    o = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
                    a = i && i.filter || n.filter || "";
                    n.zoom = 1,
                    (t >= 1 || "" === t) && "" === le.trim(a.replace(ht, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ht.test(a) ? a.replace(ht, o) : a + " " + o)
                }
            }),
            le(function() {
                le.support.reliableMarginRight || (le.cssHooks.marginRight = {
                    get: function(e, n) {
                        return n ? le.swap(e, {
                            display: "inline-block"
                        },
                        dt, [e, "marginRight"]) : t
                    }
                }),
                !le.support.pixelPosition && le.fn.position && le.each(["top", "left"],
                function(e, n) {
                    le.cssHooks[n] = {
                        get: function(e, i) {
                            return i ? (i = dt(e, n), bt.test(i) ? le(e).position()[n] + "px": i) : t
                        }
                    }
                })
            }),
            le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) {
                return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"))
            },
            le.expr.filters.visible = function(e) {
                return ! le.expr.filters.hidden(e)
            }),
            le.each({
                margin: "",
                padding: "",
                border: "Width"
            },
            function(e, t) {
                le.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0,
                        o = {},
                        a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + _t[i] + t] = a[i] || a[i - 2] || a[0];
                        return o
                    }
                },
                gt.test(e) || (le.cssHooks[e + t].set = S)
            });
            var $t = /%20/g,
            Et = /\[\]$/,
            Tt = /\r?\n/g,
            kt = /^(?:submit|button|image|reset|file)$/i,
            It = /^(?:input|select|textarea|keygen)/i;
            le.fn.extend({
                serialize: function() {
                    return le.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = le.prop(this, "elements");
                        return e ? le.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !le(this).is(":disabled") && It.test(this.nodeName) && !kt.test(e) && (this.checked || !tt.test(e))
                    }).map(function(e, t) {
                        var n = le(this).val();
                        return null == n ? null: le.isArray(n) ? le.map(n,
                        function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Tt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Tt, "\r\n")
                        }
                    }).get()
                }
            }),
            le.param = function(e, n) {
                var i, o = [],
                a = function(e, t) {
                    t = le.isFunction(t) ? t() : null == t ? "": t,
                    o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e,
                function() {
                    a(this.name, this.value)
                });
                else for (i in e) I(i, e[i], n, a);
                return o.join("&").replace($t, "+")
            },
            le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
            function(e, t) {
                le.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            le.fn.hover = function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            };
            var Pt, At, Nt = le.now(),
            Ot = /\?/,
            Dt = /#.*$/,
            Rt = /([?&])_=[^&]*/,
            zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Mt = /^(?:GET|HEAD)$/,
            Lt = /^\/\//,
            Ht = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            qt = le.fn.load,
            jt = {},
            Ft = {},
            Wt = "*/".concat("*");
            try {
                At = X.href
            } catch(Ut) {
                At = Q.createElement("a"),
                At.href = "",
                At = At.href
            }
            Pt = Ht.exec(At.toLowerCase()) || [],
            le.fn.load = function(e, n, i) {
                if ("string" != typeof e && qt) return qt.apply(this, arguments);
                var o, a, r, s = this,
                l = e.indexOf(" ");
                return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)),
                le.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (r = "POST"),
                s.length > 0 && le.ajax({
                    url: e,
                    type: r,
                    dataType: "html",
                    data: n
                }).done(function(e) {
                    a = arguments,
                    s.html(o ? le("<div>").append(le.parseHTML(e)).find(o) : e)
                }).complete(i &&
                function(e, t) {
                    s.each(i, a || [e.responseText, t, e])
                }),
                this
            },
            le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
            function(e, t) {
                le.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            le.each(["get", "post"],
            function(e, n) {
                le[n] = function(e, i, o, a) {
                    return le.isFunction(i) && (a = a || o, o = i, i = t),
                    le.ajax({
                        url: e,
                        type: n,
                        dataType: a,
                        data: i,
                        success: o
                    })
                }
            }),
            le.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: At,
                    type: "GET",
                    isLocal: Bt.test(Pt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Wt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": e.String,
                        "text html": !0,
                        "text json": le.parseJSON,
                        "text xml": le.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? N(N(e, le.ajaxSettings), t) : N(le.ajaxSettings, e)
                },
                ajaxPrefilter: P(jt),
                ajaxTransport: P(Ft),
                ajax: function(e, n) {
                    function i(e, n, i, o) {
                        var a, d, b, y, x, _ = n;
                        2 !== w && (w = 2, l && clearTimeout(l), u = t, s = o || "", C.readyState = e > 0 ? 4 : 0, i && (y = O(h, C, i)), e >= 200 && 300 > e || 304 === e ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (le.lastModified[r] = x), x = C.getResponseHeader("etag"), x && (le.etag[r] = x)), 204 === e ? (a = !0, _ = "nocontent") : 304 === e ? (a = !0, _ = "notmodified") : (a = D(h, y), _ = a.state, d = a.data, b = a.error, a = !b)) : (b = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || _) + "", a ? m.resolveWith(f, [d, _, C]) : m.rejectWith(f, [C, _, b]), C.statusCode(v), v = t, c && p.trigger(a ? "ajaxSuccess": "ajaxError", [C, h, a ? d: b]), g.fireWith(f, [C, _]), c && (p.trigger("ajaxComplete", [C, h]), --le.active || le.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (n = e, e = t),
                    n = n || {};
                    var o, a, r, s, l, c, u, d, h = le.ajaxSetup({},
                    n),
                    f = h.context || h,
                    p = h.context && (f.nodeType || f.jquery) ? le(f) : le.event,
                    m = le.Deferred(),
                    g = le.Callbacks("once memory"),
                    v = h.statusCode || {},
                    b = {},
                    y = {},
                    w = 0,
                    x = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!d) for (d = {}; t = zt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null: t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? s: null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = y[n] = y[n] || e, b[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return w || (h.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) if (2 > w) for (t in e) v[t] = [v[t], e[t]];
                            else C.always(e[C.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return u && u.abort(t),
                            i(0, t),
                            this
                        }
                    };
                    if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, h.url = ((e || h.url || At) + "").replace(Dt, "").replace(Lt, Pt[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = le.trim(h.dataType || "*").toLowerCase().match(ue) || [""], null == h.crossDomain && (o = Ht.exec(h.url.toLowerCase()), h.crossDomain = !(!o || o[1] === Pt[1] && o[2] === Pt[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) == (Pt[3] || ("http:" === Pt[1] ? 80 : 443)))), h.data && h.processData && "string" != typeof h.data && (h.data = le.param(h.data, h.traditional)), A(jt, h, n, C), 2 === w) return C;
                    c = h.global,
                    c && 0 === le.active++&&le.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !Mt.test(h.type),
                    r = h.url,
                    h.hasContent || (h.data && (r = h.url += (Ot.test(r) ? "&": "?") + h.data, delete h.data), h.cache === !1 && (h.url = Rt.test(r) ? r.replace(Rt, "$1_=" + Nt++) : r + (Ot.test(r) ? "&": "?") + "_=" + Nt++)),
                    h.ifModified && (le.lastModified[r] && C.setRequestHeader("If-Modified-Since", le.lastModified[r]), le.etag[r] && C.setRequestHeader("If-None-Match", le.etag[r])),
                    (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
                    C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01": "") : h.accepts["*"]);
                    for (a in h.headers) C.setRequestHeader(a, h.headers[a]);
                    if (h.beforeSend && (h.beforeSend.call(f, C, h) === !1 || 2 === w)) return C.abort();
                    x = "abort";
                    for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[a](h[a]);
                    if (u = A(Ft, h, n, C)) {
                        C.readyState = 1,
                        c && p.trigger("ajaxSend", [C, h]),
                        h.async && h.timeout > 0 && (l = setTimeout(function() {
                            C.abort("timeout")
                        },
                        h.timeout));
                        try {
                            w = 1,
                            u.send(b, i)
                        } catch(_) {
                            if (! (2 > w)) throw _;
                            i( - 1, _)
                        }
                    } else i( - 1, "No Transport");
                    return C
                },
                getScript: function(e, n) {
                    return le.get(e, t, n, "script")
                },
                getJSON: function(e, t, n) {
                    return le.get(e, t, n, "json")
                }
            }),
            le.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return le.globalEval(e),
                        e
                    }
                }
            }),
            le.ajaxPrefilter("script",
            function(e) {
                e.cache === t && (e.cache = !1),
                e.crossDomain && (e.type = "GET", e.global = !1)
            }),
            le.ajaxTransport("script",
            function(e) {
                if (e.crossDomain) {
                    var n, i = Q.head || le("head")[0] || Q.documentElement;
                    return {
                        send: function(t, o) {
                            n = Q.createElement("script"),
                            n.async = !0,
                            e.scriptCharset && (n.charset = e.scriptCharset),
                            n.src = e.url,
                            n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
                            },
                            i.insertBefore(n, i.firstChild)
                        },
                        abort: function() {
                            n && n.onload(t, !0)
                        }
                    }
                }
            });
            var Yt = [],
            Vt = /(=)\?(?=&|$)|\?\?/;
            le.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Yt.pop() || le.expando + "_" + Nt++;
                    return this[e] = !0,
                    e
                }
            }),
            le.ajaxPrefilter("json jsonp",
            function(n, i, o) {
                var a, r, s, l = n.jsonp !== !1 && (Vt.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(n.data) && "data");
                return l || "jsonp" === n.dataTypes[0] ? (a = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vt, "$1" + a) : n.jsonp !== !1 && (n.url += (Ot.test(n.url) ? "&": "?") + n.jsonp + "=" + a), n.converters["script json"] = function() {
                    return s || le.error(a + " was not called"),
                    s[0]
                },
                n.dataTypes[0] = "json", r = e[a], e[a] = function() {
                    s = arguments
                },
                o.always(function() {
                    e[a] = r,
                    n[a] && (n.jsonpCallback = i.jsonpCallback, Yt.push(a)),
                    s && le.isFunction(r) && r(s[0]),
                    s = r = t
                }), "script") : t
            });
            var Qt, Xt, Kt = 0,
            Gt = e.ActiveXObject &&
            function() {
                var e;
                for (e in Qt) Qt[e](t, !0)
            };
            le.ajaxSettings.xhr = e.ActiveXObject ?
            function() {
                return ! this.isLocal && R() || z()
            }: R,
            Xt = le.ajaxSettings.xhr(),
            le.support.cors = !!Xt && "withCredentials" in Xt,
            Xt = le.support.ajax = !!Xt,
            Xt && le.ajaxTransport(function(n) {
                if (!n.crossDomain || le.support.cors) {
                    var i;
                    return {
                        send: function(o, a) {
                            var r, s, l = n.xhr();
                            if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                            n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                            n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (s in o) l.setRequestHeader(s, o[s])
                            } catch(c) {}
                            l.send(n.hasContent && n.data || null),
                            i = function(e, o) {
                                var s, c, u, d;
                                try {
                                    if (i && (o || 4 === l.readyState)) if (i = t, r && (l.onreadystatechange = le.noop, Gt && delete Qt[r]), o) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {},
                                        s = l.status,
                                        c = l.getAllResponseHeaders(),
                                        "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            u = l.statusText
                                        } catch(h) {
                                            u = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                    }
                                } catch(f) {
                                    o || a( - 1, f)
                                }
                                d && a(s, u, d, c)
                            },
                            n.async ? 4 === l.readyState ? setTimeout(i) : (r = ++Kt, Gt && (Qt || (Qt = {},
                            le(e).unload(Gt)), Qt[r] = i), l.onreadystatechange = i) : i()
                        },
                        abort: function() {
                            i && i(t, !0)
                        }
                    }
                }
            });
            var Jt, Zt, en = /^(?:toggle|show|hide)$/,
            tn = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
            nn = /queueHooks$/,
            on = [q],
            an = {
                "*": [function(e, t) {
                    var n, i, o = this.createTween(e, t),
                    a = tn.exec(t),
                    r = o.cur(),
                    s = +r || 0,
                    l = 1,
                    c = 20;
                    if (a) {
                        if (n = +a[2], i = a[3] || (le.cssNumber[e] ? "": "px"), "px" !== i && s) {
                            s = le.css(o.elem, e, !0) || n || 1;
                            do l = l || ".5",
                            s /= l,
                            le.style(o.elem, e, s + i);
                            while (l !== (l = o.cur() / r) && 1 !== l && --c)
                        }
                        o.unit = i,
                        o.start = s,
                        o.end = a[1] ? s + (a[1] + 1) * n: n
                    }
                    return o
                }]
            };
            le.Animation = le.extend(L, {
                tweener: function(e, t) {
                    le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0,
                    o = e.length; o > i; i++) n = e[i],
                    an[n] = an[n] || [],
                    an[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? on.unshift(e) : on.push(e)
                }
            }),
            le.Tween = j,
            j.prototype = {
                constructor: j,
                init: function(e, t, n, i, o, a) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = o || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = a || (le.cssNumber[n] ? "": "px")
                },
                cur: function() {
                    var e = j.propHooks[this.prop];
                    return e && e.get ? e.get(this) : j.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = j.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : j.propHooks._default.set(this),
                    this
                }
            },
            j.prototype.init.prototype = j.prototype,
            j.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            },
            j.propHooks.scrollTop = j.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            le.each(["toggle", "show", "hide"],
            function(e, t) {
                var n = le.fn[t];
                le.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, o)
                }
            }),
            le.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(C).css("opacity", 0).show().end().animate({
                        opacity: t
                    },
                    e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = le.isEmptyObject(e),
                    a = le.speed(t, n, i),
                    r = function() {
                        var t = L(this, le.extend({},
                        e), a);
                        r.finish = function() {
                            t.stop(!0)
                        },
                        (o || le._data(this, "finish")) && t.stop(!0)
                    };
                    return r.finish = r,
                    o || a.queue === !1 ? this.each(r) : this.queue(a.queue, r)
                },
                stop: function(e, n, i) {
                    var o = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(i)
                    };
                    return "string" != typeof e && (i = n, n = e, e = t),
                    n && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0,
                        n = null != e && e + "queueHooks",
                        a = le.timers,
                        r = le._data(this);
                        if (n) r[n] && r[n].stop && o(r[n]);
                        else for (n in r) r[n] && r[n].stop && nn.test(n) && o(r[n]);
                        for (n = a.length; n--;) a[n].elem !== this || null != e && a[n].queue !== e || (a[n].anim.stop(i), t = !1, a.splice(n, 1)); (t || !i) && le.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = le._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        a = le.timers,
                        r = i ? i.length: 0;
                        for (n.finish = !0, le.queue(this, e, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            le.each({
                slideDown: F("show"),
                slideUp: F("hide"),
                slideToggle: F("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            },
            function(e, t) {
                le.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }),
            le.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? le.extend({},
                e) : {
                    complete: n || !n && t || le.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !le.isFunction(t) && t
                };
                return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default,
                (null == i.queue || i.queue === !0) && (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    le.isFunction(i.old) && i.old.call(this),
                    i.queue && le.dequeue(this, i.queue)
                },
                i
            },
            le.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return.5 - Math.cos(e * Math.PI) / 2
                }
            },
            le.timers = [],
            le.fx = j.prototype.init,
            le.fx.tick = function() {
                var e, n = le.timers,
                i = 0;
                for (Jt = le.now(); n.length > i; i++) e = n[i],
                e() || n[i] !== e || n.splice(i--, 1);
                n.length || le.fx.stop(),
                Jt = t
            },
            le.fx.timer = function(e) {
                e() && le.timers.push(e) && le.fx.start()
            },
            le.fx.interval = 13,
            le.fx.start = function() {
                Zt || (Zt = setInterval(le.fx.tick, le.fx.interval))
            },
            le.fx.stop = function() {
                clearInterval(Zt),
                Zt = null
            },
            le.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            le.fx.step = {},
            le.expr && le.expr.filters && (le.expr.filters.animated = function(e) {
                return le.grep(le.timers,
                function(t) {
                    return e === t.elem
                }).length
            }),
            le.fn.offset = function(e) {
                if (arguments.length) return e === t ? this: this.each(function(t) {
                    le.offset.setOffset(this, e, t)
                });
                var n, i, o = {
                    top: 0,
                    left: 0
                },
                a = this[0],
                r = a && a.ownerDocument;
                return r ? (n = r.documentElement, le.contains(n, a) ? (typeof a.getBoundingClientRect !== V && (o = a.getBoundingClientRect()), i = W(r), {
                    top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                    left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                }) : o) : void 0
            },
            le.offset = {
                setOffset: function(e, t, n) {
                    var i = le.css(e, "position");
                    "static" === i && (e.style.position = "relative");
                    var o, a, r = le(e),
                    s = r.offset(),
                    l = le.css(e, "top"),
                    c = le.css(e, "left"),
                    u = ("absolute" === i || "fixed" === i) && le.inArray("auto", [l, c]) > -1,
                    d = {},
                    h = {};
                    u ? (h = r.position(), o = h.top, a = h.left) : (o = parseFloat(l) || 0, a = parseFloat(c) || 0),
                    le.isFunction(t) && (t = t.call(e, n, s)),
                    null != t.top && (d.top = t.top - s.top + o),
                    null != t.left && (d.left = t.left - s.left + a),
                    "using" in t ? t.using.call(e, d) : r.css(d)
                }
            },
            le.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                        return "fixed" === le.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - n.top - le.css(i, "marginTop", !0),
                            left: t.left - n.left - le.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || Q.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
                        return e || Q.documentElement
                    })
                }
            }),
            le.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            },
            function(e, n) {
                var i = /Y/.test(n);
                le.fn[e] = function(o) {
                    return le.access(this,
                    function(e, o, a) {
                        var r = W(e);
                        return a === t ? r ? n in r ? r[n] : r.document.documentElement[o] : e[o] : (r ? r.scrollTo(i ? le(r).scrollLeft() : a, i ? a: le(r).scrollTop()) : e[o] = a, t)
                    },
                    e, o, arguments.length, null)
                }
            }),
            le.each({
                Height: "height",
                Width: "width"
            },
            function(e, n) {
                le.each({
                    padding: "inner" + e,
                    content: n,
                    "": "outer" + e
                },
                function(i, o) {
                    le.fn[o] = function(o, a) {
                        var r = arguments.length && (i || "boolean" != typeof o),
                        s = i || (o === !0 || a === !0 ? "margin": "border");
                        return le.access(this,
                        function(n, i, o) {
                            var a;
                            return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body["scroll" + e], a["scroll" + e], n.body["offset" + e], a["offset" + e], a["client" + e])) : o === t ? le.css(n, i, s) : le.style(n, i, o, s)
                        },
                        n, r ? o: t, r, null)
                    }
                })
            }),
            e.jQuery = e.$ = le,
            "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
            function() {
                return le
            })
        } (window)
    },
    78 : function(e, t) {
        /*!
	 * Bootstrap v3.3.2 (http://getbootstrap.com)
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
        if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
        function(e) {
            "use strict";
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t() {
                var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in t) if (void 0 !== e.style[n]) return {
                    end: t[n]
                };
                return ! 1
            }
            e.fn.emulateTransitionEnd = function(t) {
                var n = !1,
                i = this;
                e(this).one("bsTransitionEnd",
                function() {
                    n = !0
                });
                var o = function() {
                    n || e(i).trigger(e.support.transition.end)
                };
                return setTimeout(o, t),
                this
            },
            e(function() {
                e.support.transition = t(),
                e.support.transition && (e.event.special.bsTransitionEnd = {
                    bindType: e.support.transition.end,
                    delegateType: e.support.transition.end,
                    handle: function(t) {
                        return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                    }
                })
            })
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                return this.each(function() {
                    var n = e(this),
                    o = n.data("bs.alert");
                    o || n.data("bs.alert", o = new i(this)),
                    "string" == typeof t && o[t].call(n)
                })
            }
            var n = '[data-dismiss="alert"]',
            i = function(t) {
                e(t).on("click", n, this.close)
            };
            i.VERSION = "3.3.2",
            i.TRANSITION_DURATION = 150,
            i.prototype.close = function(t) {
                function n() {
                    r.detach().trigger("closed.bs.alert").remove()
                }
                var o = e(this),
                a = o.attr("data-target");
                a || (a = o.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
                var r = e(a);
                t && t.preventDefault(),
                r.length || (r = o.closest(".alert")),
                r.trigger(t = e.Event("close.bs.alert")),
                t.isDefaultPrevented() || (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
            };
            var o = e.fn.alert;
            e.fn.alert = t,
            e.fn.alert.Constructor = i,
            e.fn.alert.noConflict = function() {
                return e.fn.alert = o,
                this
            },
            e(document).on("click.bs.alert.data-api", n, i.prototype.close)
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                return this.each(function() {
                    var i = e(this),
                    o = i.data("bs.button"),
                    a = "object" == typeof t && t;
                    o || i.data("bs.button", o = new n(this, a)),
                    "toggle" == t ? o.toggle() : t && o.setState(t)
                })
            }
            var n = function(t, i) {
                this.$element = e(t),
                this.options = e.extend({},
                n.DEFAULTS, i),
                this.isLoading = !1
            };
            n.VERSION = "3.3.2",
            n.DEFAULTS = {
                loadingText: "loading..."
            },
            n.prototype.setState = function(t) {
                var n = "disabled",
                i = this.$element,
                o = i.is("input") ? "val": "html",
                a = i.data();
                t += "Text",
                null == a.resetText && i.data("resetText", i[o]()),
                setTimeout(e.proxy(function() {
                    i[o](null == a[t] ? this.options[t] : a[t]),
                    "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
                },
                this), 0)
            },
            n.prototype.toggle = function() {
                var e = !0,
                t = this.$element.closest('[data-toggle="buttons"]');
                if (t.length) {
                    var n = this.$element.find("input");
                    "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")),
                    e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
                e && this.$element.toggleClass("active")
            };
            var i = e.fn.button;
            e.fn.button = t,
            e.fn.button.Constructor = n,
            e.fn.button.noConflict = function() {
                return e.fn.button = i,
                this
            },
            e(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
            function(n) {
                var i = e(n.target);
                i.hasClass("btn") || (i = i.closest(".btn")),
                t.call(i, "toggle"),
                n.preventDefault()
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
            function(t) {
                e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
            })
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                return this.each(function() {
                    var i = e(this),
                    o = i.data("bs.carousel"),
                    a = e.extend({},
                    n.DEFAULTS, i.data(), "object" == typeof t && t),
                    r = "string" == typeof t ? t: a.slide;
                    o || i.data("bs.carousel", o = new n(this, a)),
                    "number" == typeof t ? o.to(t) : r ? o[r]() : a.interval && o.pause().cycle()
                })
            }
            var n = function(t, n) {
                this.$element = e(t),
                this.$indicators = this.$element.find(".carousel-indicators"),
                this.options = n,
                this.paused = this.sliding = this.interval = this.$active = this.$items = null,
                this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
            };
            n.VERSION = "3.3.2",
            n.TRANSITION_DURATION = 600,
            n.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            },
            n.prototype.keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) {
                    switch (e.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                    }
                    e.preventDefault()
                }
            },
            n.prototype.cycle = function(t) {
                return t || (this.paused = !1),
                this.interval && clearInterval(this.interval),
                this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
                this
            },
            n.prototype.getItemIndex = function(e) {
                return this.$items = e.parent().children(".item"),
                this.$items.index(e || this.$active)
            },
            n.prototype.getItemForDirection = function(e, t) {
                var n = this.getItemIndex(t),
                i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
                if (i && !this.options.wrap) return t;
                var o = "prev" == e ? -1 : 1,
                a = (n + o) % this.$items.length;
                return this.$items.eq(a)
            },
            n.prototype.to = function(e) {
                var t = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
                function() {
                    t.to(e)
                }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next": "prev", this.$items.eq(e))
            },
            n.prototype.pause = function(t) {
                return t || (this.paused = !0),
                this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)),
                this.interval = clearInterval(this.interval),
                this
            },
            n.prototype.next = function() {
                return this.sliding ? void 0 : this.slide("next")
            },
            n.prototype.prev = function() {
                return this.sliding ? void 0 : this.slide("prev")
            },
            n.prototype.slide = function(t, i) {
                var o = this.$element.find(".item.active"),
                a = i || this.getItemForDirection(t, o),
                r = this.interval,
                s = "next" == t ? "left": "right",
                l = this;
                if (a.hasClass("active")) return this.sliding = !1;
                var c = a[0],
                u = e.Event("slide.bs.carousel", {
                    relatedTarget: c,
                    direction: s
                });
                if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                    if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var d = e(this.$indicators.children()[this.getItemIndex(a)]);
                        d && d.addClass("active")
                    }
                    var h = e.Event("slid.bs.carousel", {
                        relatedTarget: c,
                        direction: s
                    });
                    return e.support.transition && this.$element.hasClass("slide") ? (a.addClass(t), a[0].offsetWidth, o.addClass(s), a.addClass(s), o.one("bsTransitionEnd",
                    function() {
                        a.removeClass([t, s].join(" ")).addClass("active"),
                        o.removeClass(["active", s].join(" ")),
                        l.sliding = !1,
                        setTimeout(function() {
                            l.$element.trigger(h)
                        },
                        0)
                    }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(h)),
                    r && this.cycle(),
                    this
                }
            };
            var i = e.fn.carousel;
            e.fn.carousel = t,
            e.fn.carousel.Constructor = n,
            e.fn.carousel.noConflict = function() {
                return e.fn.carousel = i,
                this
            };
            var o = function(n) {
                var i, o = e(this),
                a = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
                if (a.hasClass("carousel")) {
                    var r = e.extend({},
                    a.data(), o.data()),
                    s = o.attr("data-slide-to");
                    s && (r.interval = !1),
                    t.call(a, r),
                    s && a.data("bs.carousel").to(s),
                    n.preventDefault()
                }
            };
            e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
            e(window).on("load",
            function() {
                e('[data-ride="carousel"]').each(function() {
                    var n = e(this);
                    t.call(n, n.data())
                })
            })
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
                return e(i)
            }
            function n(t) {
                return this.each(function() {
                    var n = e(this),
                    o = n.data("bs.collapse"),
                    a = e.extend({},
                    i.DEFAULTS, n.data(), "object" == typeof t && t); ! o && a.toggle && "show" == t && (a.toggle = !1),
                    o || n.data("bs.collapse", o = new i(this, a)),
                    "string" == typeof t && o[t]()
                })
            }
            var i = function(t, n) {
                this.$element = e(t),
                this.options = e.extend({},
                i.DEFAULTS, n),
                this.$trigger = e(this.options.trigger).filter('[href="#' + t.id + '"], [data-target="#' + t.id + '"]'),
                this.transitioning = null,
                this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle()
            };
            i.VERSION = "3.3.2",
            i.TRANSITION_DURATION = 350,
            i.DEFAULTS = {
                toggle: !0,
                trigger: '[data-toggle="collapse"]'
            },
            i.prototype.dimension = function() {
                var e = this.$element.hasClass("width");
                return e ? "width": "height"
            },
            i.prototype.show = function() {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (! (o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
                        var a = e.Event("show.bs.collapse");
                        if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                            o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                            var r = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0),
                            this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                            this.transitioning = 1;
                            var s = function() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[r](""),
                                this.transitioning = 0,
                                this.$element.trigger("shown.bs.collapse")
                            };
                            if (!e.support.transition) return s.call(this);
                            var l = e.camelCase(["scroll", r].join("-"));
                            this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                        }
                    }
                }
            },
            i.prototype.hide = function() {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var t = e.Event("hide.bs.collapse");
                    if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight,
                        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                        this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                        this.transitioning = 1;
                        var o = function() {
                            this.transitioning = 0,
                            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
                    }
                }
            },
            i.prototype.toggle = function() {
                this[this.$element.hasClass("in") ? "hide": "show"]()
            },
            i.prototype.getParent = function() {
                return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
                    var o = e(i);
                    this.addAriaAndCollapsedClass(t(o), o)
                },
                this)).end()
            },
            i.prototype.addAriaAndCollapsedClass = function(e, t) {
                var n = e.hasClass("in");
                e.attr("aria-expanded", n),
                t.toggleClass("collapsed", !n).attr("aria-expanded", n)
            };
            var o = e.fn.collapse;
            e.fn.collapse = n,
            e.fn.collapse.Constructor = i,
            e.fn.collapse.noConflict = function() {
                return e.fn.collapse = o,
                this
            },
            e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
            function(i) {
                var o = e(this);
                o.attr("data-target") || i.preventDefault();
                var a = t(o),
                r = a.data("bs.collapse"),
                s = r ? "toggle": e.extend({},
                o.data(), {
                    trigger: this
                });
                n.call(a, s)
            })
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                t && 3 === t.which || (e(o).remove(), e(a).each(function() {
                    var i = e(this),
                    o = n(i),
                    a = {
                        relatedTarget: this
                    };
                    o.hasClass("open") && (o.trigger(t = e.Event("hide.bs.dropdown", a)), t.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", a)))
                }))
            }
            function n(t) {
                var n = t.attr("data-target");
                n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                var i = n && e(n);
                return i && i.length ? i: t.parent()
            }
            function i(t) {
                return this.each(function() {
                    var n = e(this),
                    i = n.data("bs.dropdown");
                    i || n.data("bs.dropdown", i = new r(this)),
                    "string" == typeof t && i[t].call(n)
                })
            }
            var o = ".dropdown-backdrop",
            a = '[data-toggle="dropdown"]',
            r = function(t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
            r.VERSION = "3.3.2",
            r.prototype.toggle = function(i) {
                var o = e(this);
                if (!o.is(".disabled, :disabled")) {
                    var a = n(o),
                    r = a.hasClass("open");
                    if (t(), !r) {
                        "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                        var s = {
                            relatedTarget: this
                        };
                        if (a.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                        o.trigger("focus").attr("aria-expanded", "true"),
                        a.toggleClass("open").trigger("shown.bs.dropdown", s)
                    }
                    return ! 1
                }
            },
            r.prototype.keydown = function(t) {
                if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
                    var i = e(this);
                    if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                        var o = n(i),
                        r = o.hasClass("open");
                        if (!r && 27 != t.which || r && 27 == t.which) return 27 == t.which && o.find(a).trigger("focus"),
                        i.trigger("click");
                        var s = " li:not(.divider):visible a",
                        l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                        if (l.length) {
                            var c = l.index(t.target);
                            38 == t.which && c > 0 && c--,
                            40 == t.which && c < l.length - 1 && c++,
                            ~c || (c = 0),
                            l.eq(c).trigger("focus")
                        }
                    }
                }
            };
            var s = e.fn.dropdown;
            e.fn.dropdown = i,
            e.fn.dropdown.Constructor = r,
            e.fn.dropdown.noConflict = function() {
                return e.fn.dropdown = s,
                this
            },
            e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form",
            function(e) {
                e.stopPropagation()
            }).on("click.bs.dropdown.data-api", a, r.prototype.toggle).on("keydown.bs.dropdown.data-api", a, r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', r.prototype.keydown)
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t, i) {
                return this.each(function() {
                    var o = e(this),
                    a = o.data("bs.modal"),
                    r = e.extend({},
                    n.DEFAULTS, o.data(), "object" == typeof t && t);
                    a || o.data("bs.modal", a = new n(this, r)),
                    "string" == typeof t ? a[t](i) : r.show && a.show(i)
                })
            }
            var n = function(t, n) {
                this.options = n,
                this.$body = e(document.body),
                this.$element = e(t),
                this.$backdrop = this.isShown = null,
                this.scrollbarWidth = 0,
                this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                    this.$element.trigger("loaded.bs.modal")
                },
                this))
            };
            n.VERSION = "3.3.2",
            n.TRANSITION_DURATION = 300,
            n.BACKDROP_TRANSITION_DURATION = 150,
            n.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            },
            n.prototype.toggle = function(e) {
                return this.isShown ? this.hide() : this.show(e)
            },
            n.prototype.show = function(t) {
                var i = this,
                o = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
                this.$element.trigger(o),
                this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
                    var o = e.support.transition && i.$element.hasClass("fade");
                    i.$element.parent().length || i.$element.appendTo(i.$body),
                    i.$element.show().scrollTop(0),
                    i.options.backdrop && i.adjustBackdrop(),
                    i.adjustDialog(),
                    o && i.$element[0].offsetWidth,
                    i.$element.addClass("in").attr("aria-hidden", !1),
                    i.enforceFocus();
                    var a = e.Event("shown.bs.modal", {
                        relatedTarget: t
                    });
                    o ? i.$element.find(".modal-dialog").one("bsTransitionEnd",
                    function() {
                        i.$element.trigger("focus").trigger(a)
                    }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
                }))
            },
            n.prototype.hide = function(t) {
                t && t.preventDefault(),
                t = e.Event("hide.bs.modal"),
                this.$element.trigger(t),
                this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
            },
            n.prototype.enforceFocus = function() {
                e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                    this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
                },
                this))
            },
            n.prototype.escape = function() {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
                    27 == e.which && this.hide()
                },
                this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            },
            n.prototype.resize = function() {
                this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
            },
            n.prototype.hideModal = function() {
                var e = this;
                this.$element.hide(),
                this.backdrop(function() {
                    e.$body.removeClass("modal-open"),
                    e.resetAdjustments(),
                    e.resetScrollbar(),
                    e.$element.trigger("hidden.bs.modal")
                })
            },
            n.prototype.removeBackdrop = function() {
                this.$backdrop && this.$backdrop.remove(),
                this.$backdrop = null
            },
            n.prototype.backdrop = function(t) {
                var i = this,
                o = this.$element.hasClass("fade") ? "fade": "";
                if (this.isShown && this.options.backdrop) {
                    var a = e.support.transition && o;
                    if (this.$backdrop = e('<div class="modal-backdrop ' + o + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", e.proxy(function(e) {
                        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    },
                    this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                    a ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var r = function() {
                        i.removeBackdrop(),
                        t && t()
                    };
                    e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
                } else t && t()
            },
            n.prototype.handleUpdate = function() {
                this.options.backdrop && this.adjustBackdrop(),
                this.adjustDialog()
            },
            n.prototype.adjustBackdrop = function() {
                this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
            },
            n.prototype.adjustDialog = function() {
                var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth: "",
                    paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth: ""
                })
            },
            n.prototype.resetAdjustments = function() {
                this.$element.css({
                    paddingLeft: "",
                    paddingRight: ""
                })
            },
            n.prototype.checkScrollbar = function() {
                this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight,
                this.scrollbarWidth = this.measureScrollbar()
            },
            n.prototype.setScrollbar = function() {
                var e = parseInt(this.$body.css("padding-right") || 0, 10);
                this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
            },
            n.prototype.resetScrollbar = function() {
                this.$body.css("padding-right", "")
            },
            n.prototype.measureScrollbar = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure",
                this.$body.append(e);
                var t = e.offsetWidth - e.clientWidth;
                return this.$body[0].removeChild(e),
                t
            };
            var i = e.fn.modal;
            e.fn.modal = t,
            e.fn.modal.Constructor = n,
            e.fn.modal.noConflict = function() {
                return e.fn.modal = i,
                this
            },
            e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
            function(n) {
                var i = e(this),
                o = i.attr("href"),
                a = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                r = a.data("bs.modal") ? "toggle": e.extend({
                    remote: !/#/.test(o) && o
                },
                a.data(), i.data());
                i.is("a") && n.preventDefault(),
                a.one("show.bs.modal",
                function(e) {
                    e.isDefaultPrevented() || a.one("hidden.bs.modal",
                    function() {
                        i.is(":visible") && i.trigger("focus")
                    })
                }),
                t.call(a, r, this)
            })
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                return this.each(function() {
                    var i = e(this),
                    o = i.data("bs.tooltip"),
                    a = "object" == typeof t && t; (o || "destroy" != t) && (o || i.data("bs.tooltip", o = new n(this, a)), "string" == typeof t && o[t]())
                })
            }
            var n = function(e, t) {
                this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
                this.init("tooltip", e, t)
            };
            n.VERSION = "3.3.2",
            n.TRANSITION_DURATION = 150,
            n.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            },
            n.prototype.init = function(t, n, i) {
                this.enabled = !0,
                this.type = t,
                this.$element = e(n),
                this.options = this.getOptions(i),
                this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
                for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
                    var r = o[a];
                    if ("click" == r) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                    else if ("manual" != r) {
                        var s = "hover" == r ? "mouseenter": "focusin",
                        l = "hover" == r ? "mouseleave": "focusout";
                        this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                        this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = e.extend({},
                this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            n.prototype.getDefaults = function() {
                return n.DEFAULTS
            },
            n.prototype.getOptions = function(t) {
                return t = e.extend({},
                this.getDefaults(), this.$element.data(), t),
                t.delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }),
                t
            },
            n.prototype.getDelegateOptions = function() {
                var t = {},
                n = this.getDefaults();
                return this._options && e.each(this._options,
                function(e, i) {
                    n[e] != i && (t[e] = i)
                }),
                t
            },
            n.prototype.enter = function(t) {
                var n = t instanceof this.constructor ? t: e(t.currentTarget).data("bs." + this.type);
                return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                    "in" == n.hoverState && n.show()
                },
                n.options.delay.show)) : n.show())
            },
            n.prototype.leave = function(t) {
                var n = t instanceof this.constructor ? t: e(t.currentTarget).data("bs." + this.type);
                return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)),
                clearTimeout(n.timeout),
                n.hoverState = "out",
                n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                    "out" == n.hoverState && n.hide()
                },
                n.options.delay.hide)) : n.hide()
            },
            n.prototype.show = function() {
                var t = e.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(t);
                    var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this,
                    a = this.tip(),
                    r = this.getUID(this.type);
                    this.setContent(),
                    a.attr("id", r),
                    this.$element.attr("aria-describedby", r),
                    this.options.animation && a.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(s);
                    c && (s = s.replace(l, "") || "top"),
                    a.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(s).data("bs." + this.type, this),
                    this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element);
                    var u = this.getPosition(),
                    d = a[0].offsetWidth,
                    h = a[0].offsetHeight;
                    if (c) {
                        var f = s,
                        p = this.options.container ? e(this.options.container) : this.$element.parent(),
                        m = this.getPosition(p);
                        s = "bottom" == s && u.bottom + h > m.bottom ? "top": "top" == s && u.top - h < m.top ? "bottom": "right" == s && u.right + d > m.width ? "left": "left" == s && u.left - d < m.left ? "right": s,
                        a.removeClass(f).addClass(s)
                    }
                    var g = this.getCalculatedOffset(s, u, d, h);
                    this.applyPlacement(g, s);
                    var v = function() {
                        var e = o.hoverState;
                        o.$element.trigger("shown.bs." + o.type),
                        o.hoverState = null,
                        "out" == e && o.leave(o)
                    };
                    e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
                }
            },
            n.prototype.applyPlacement = function(t, n) {
                var i = this.tip(),
                o = i[0].offsetWidth,
                a = i[0].offsetHeight,
                r = parseInt(i.css("margin-top"), 10),
                s = parseInt(i.css("margin-left"), 10);
                isNaN(r) && (r = 0),
                isNaN(s) && (s = 0),
                t.top = t.top + r,
                t.left = t.left + s,
                e.offset.setOffset(i[0], e.extend({
                    using: function(e) {
                        i.css({
                            top: Math.round(e.top),
                            left: Math.round(e.left)
                        })
                    }
                },
                t), 0),
                i.addClass("in");
                var l = i[0].offsetWidth,
                c = i[0].offsetHeight;
                "top" == n && c != a && (t.top = t.top + a - c);
                var u = this.getViewportAdjustedDelta(n, t, l, c);
                u.left ? t.left += u.left: t.top += u.top;
                var d = /top|bottom/.test(n),
                h = d ? 2 * u.left - o + l: 2 * u.top - a + c,
                f = d ? "offsetWidth": "offsetHeight";
                i.offset(t),
                this.replaceArrow(h, i[0][f], d)
            },
            n.prototype.replaceArrow = function(e, t, n) {
                this.arrow().css(n ? "left": "top", 50 * (1 - e / t) + "%").css(n ? "top": "left", "")
            },
            n.prototype.setContent = function() {
                var e = this.tip(),
                t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html": "text"](t),
                e.removeClass("fade in top bottom left right")
            },
            n.prototype.hide = function(t) {
                function i() {
                    "in" != o.hoverState && a.detach(),
                    o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type),
                    t && t()
                }
                var o = this,
                a = this.tip(),
                r = e.Event("hide.bs." + this.type);
                return this.$element.trigger(r),
                r.isDefaultPrevented() ? void 0 : (a.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
            },
            n.prototype.fixTitle = function() {
                var e = this.$element; (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            },
            n.prototype.hasContent = function() {
                return this.getTitle()
            },
            n.prototype.getPosition = function(t) {
                t = t || this.$element;
                var n = t[0],
                i = "BODY" == n.tagName,
                o = n.getBoundingClientRect();
                null == o.width && (o = e.extend({},
                o, {
                    width: o.right - o.left,
                    height: o.bottom - o.top
                }));
                var a = i ? {
                    top: 0,
                    left: 0
                }: t.offset(),
                r = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop: t.scrollTop()
                },
                s = i ? {
                    width: e(window).width(),
                    height: e(window).height()
                }: null;
                return e.extend({},
                o, r, s, a)
            },
            n.prototype.getCalculatedOffset = function(e, t, n, i) {
                return "bottom" == e ? {
                    top: t.top + t.height,
                    left: t.left + t.width / 2 - n / 2
                }: "top" == e ? {
                    top: t.top - i,
                    left: t.left + t.width / 2 - n / 2
                }: "left" == e ? {
                    top: t.top + t.height / 2 - i / 2,
                    left: t.left - n
                }: {
                    top: t.top + t.height / 2 - i / 2,
                    left: t.left + t.width
                }
            },
            n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
                var o = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport) return o;
                var a = this.options.viewport && this.options.viewport.padding || 0,
                r = this.getPosition(this.$viewport);
                if (/right|left/.test(e)) {
                    var s = t.top - a - r.scroll,
                    l = t.top + a - r.scroll + i;
                    s < r.top ? o.top = r.top - s: l > r.top + r.height && (o.top = r.top + r.height - l)
                } else {
                    var c = t.left - a,
                    u = t.left + a + n;
                    c < r.left ? o.left = r.left - c: u > r.width && (o.left = r.left + r.width - u)
                }
                return o
            },
            n.prototype.getTitle = function() {
                var e, t = this.$element,
                n = this.options;
                return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
            },
            n.prototype.getUID = function(e) {
                do e += ~~ (1e6 * Math.random());
                while (document.getElementById(e));
                return e
            },
            n.prototype.tip = function() {
                return this.$tip = this.$tip || e(this.options.template)
            },
            n.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            n.prototype.enable = function() {
                this.enabled = !0
            },
            n.prototype.disable = function() {
                this.enabled = !1
            },
            n.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            },
            n.prototype.toggle = function(t) {
                var n = this;
                t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))),
                n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
            },
            n.prototype.destroy = function() {
                var e = this;
                clearTimeout(this.timeout),
                this.hide(function() {
                    e.$element.off("." + e.type).removeData("bs." + e.type)
                })
            };
            var i = e.fn.tooltip;
            e.fn.tooltip = t,
            e.fn.tooltip.Constructor = n,
            e.fn.tooltip.noConflict = function() {
                return e.fn.tooltip = i,
                this
            }
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                return this.each(function() {
                    var i = e(this),
                    o = i.data("bs.popover"),
                    a = "object" == typeof t && t; (o || "destroy" != t) && (o || i.data("bs.popover", o = new n(this, a)), "string" == typeof t && o[t]())
                })
            }
            var n = function(e, t) {
                this.init("popover", e, t)
            };
            if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
            n.VERSION = "3.3.2",
            n.DEFAULTS = e.extend({},
            e.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            n.prototype = e.extend({},
            e.fn.tooltip.Constructor.prototype),
            n.prototype.constructor = n,
            n.prototype.getDefaults = function() {
                return n.DEFAULTS
            },
            n.prototype.setContent = function() {
                var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
                e.find(".popover-title")[this.options.html ? "html": "text"](t),
                e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html": "append": "text"](n),
                e.removeClass("fade top bottom left right in"),
                e.find(".popover-title").html() || e.find(".popover-title").hide()
            },
            n.prototype.hasContent = function() {
                return this.getTitle() || this.getContent()
            },
            n.prototype.getContent = function() {
                var e = this.$element,
                t = this.options;
                return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
            },
            n.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            },
            n.prototype.tip = function() {
                return this.$tip || (this.$tip = e(this.options.template)),
                this.$tip
            };
            var i = e.fn.popover;
            e.fn.popover = t,
            e.fn.popover.Constructor = n,
            e.fn.popover.noConflict = function() {
                return e.fn.popover = i,
                this
            }
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(n, i) {
                var o = e.proxy(this.process, this);
                this.$body = e("body"),
                this.$scrollElement = e(e(n).is("body") ? window: n),
                this.options = e.extend({},
                t.DEFAULTS, i),
                this.selector = (this.options.target || "") + " .nav li > a",
                this.offsets = [],
                this.targets = [],
                this.activeTarget = null,
                this.scrollHeight = 0,
                this.$scrollElement.on("scroll.bs.scrollspy", o),
                this.refresh(),
                this.process()
            }
            function n(n) {
                return this.each(function() {
                    var i = e(this),
                    o = i.data("bs.scrollspy"),
                    a = "object" == typeof n && n;
                    o || i.data("bs.scrollspy", o = new t(this, a)),
                    "string" == typeof n && o[n]()
                })
            }
            t.VERSION = "3.3.2",
            t.DEFAULTS = {
                offset: 10
            },
            t.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            },
            t.prototype.refresh = function() {
                var t = "offset",
                n = 0;
                e.isWindow(this.$scrollElement[0]) || (t = "position", n = this.$scrollElement.scrollTop()),
                this.offsets = [],
                this.targets = [],
                this.scrollHeight = this.getScrollHeight();
                var i = this;
                this.$body.find(this.selector).map(function() {
                    var i = e(this),
                    o = i.data("target") || i.attr("href"),
                    a = /^#./.test(o) && e(o);
                    return a && a.length && a.is(":visible") && [[a[t]().top + n, o]] || null
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).each(function() {
                    i.offsets.push(this[0]),
                    i.targets.push(this[1])
                })
            },
            t.prototype.process = function() {
                var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                o = this.offsets,
                a = this.targets,
                r = this.activeTarget;
                if (this.scrollHeight != n && this.refresh(), t >= i) return r != (e = a[a.length - 1]) && this.activate(e);
                if (r && t < o[0]) return this.activeTarget = null,
                this.clear();
                for (e = o.length; e--;) r != a[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(a[e])
            },
            t.prototype.activate = function(t) {
                this.activeTarget = t,
                this.clear();
                var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                i = e(n).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
                i.trigger("activate.bs.scrollspy")
            },
            t.prototype.clear = function() {
                e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            };
            var i = e.fn.scrollspy;
            e.fn.scrollspy = n,
            e.fn.scrollspy.Constructor = t,
            e.fn.scrollspy.noConflict = function() {
                return e.fn.scrollspy = i,
                this
            },
            e(window).on("load.bs.scrollspy.data-api",
            function() {
                e('[data-spy="scroll"]').each(function() {
                    var t = e(this);
                    n.call(t, t.data())
                })
            })
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                return this.each(function() {
                    var i = e(this),
                    o = i.data("bs.tab");
                    o || i.data("bs.tab", o = new n(this)),
                    "string" == typeof t && o[t]()
                })
            }
            var n = function(t) {
                this.element = e(t)
            };
            n.VERSION = "3.3.2",
            n.TRANSITION_DURATION = 150,
            n.prototype.show = function() {
                var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                i = t.data("target");
                if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                    var o = n.find(".active:last a"),
                    a = e.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    r = e.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                    if (o.trigger(a), t.trigger(r), !r.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        var s = e(i);
                        this.activate(t.closest("li"), n),
                        this.activate(s, s.parent(),
                        function() {
                            o.trigger({
                                type: "hidden.bs.tab",
                                relatedTarget: t[0]
                            }),
                            t.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: o[0]
                            })
                        })
                    }
                }
            },
            n.prototype.activate = function(t, i, o) {
                function a() {
                    r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                    t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                    s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
                    t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                    o && o()
                }
                var r = i.find("> .active"),
                s = o && e.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
                r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(),
                r.removeClass("in")
            };
            var i = e.fn.tab;
            e.fn.tab = t,
            e.fn.tab.Constructor = n,
            e.fn.tab.noConflict = function() {
                return e.fn.tab = i,
                this
            };
            var o = function(n) {
                n.preventDefault(),
                t.call(e(this), "show")
            };
            e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
        } (jQuery),
        +
        function(e) {
            "use strict";
            function t(t) {
                return this.each(function() {
                    var i = e(this),
                    o = i.data("bs.affix"),
                    a = "object" == typeof t && t;
                    o || i.data("bs.affix", o = new n(this, a)),
                    "string" == typeof t && o[t]()
                })
            }
            var n = function(t, i) {
                this.options = e.extend({},
                n.DEFAULTS, i),
                this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
                this.$element = e(t),
                this.affixed = this.unpin = this.pinnedOffset = null,
                this.checkPosition()
            };
            n.VERSION = "3.3.2",
            n.RESET = "affix affix-top affix-bottom",
            n.DEFAULTS = {
                offset: 0,
                target: window
            },
            n.prototype.getState = function(e, t, n, i) {
                var o = this.$target.scrollTop(),
                a = this.$element.offset(),
                r = this.$target.height();
                if (null != n && "top" == this.affixed) return n > o ? "top": !1;
                if ("bottom" == this.affixed) return null != n ? o + this.unpin <= a.top ? !1 : "bottom": e - i >= o + r ? !1 : "bottom";
                var s = null == this.affixed,
                l = s ? o: a.top,
                c = s ? r: t;
                return null != n && n >= o ? "top": null != i && l + c >= e - i ? "bottom": !1
            },
            n.prototype.getPinnedOffset = function() {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var e = this.$target.scrollTop(),
                t = this.$element.offset();
                return this.pinnedOffset = t.top - e
            },
            n.prototype.checkPositionWithEventLoop = function() {
                setTimeout(e.proxy(this.checkPosition, this), 1)
            },
            n.prototype.checkPosition = function() {
                if (this.$element.is(":visible")) {
                    var t = this.$element.height(),
                    i = this.options.offset,
                    o = i.top,
                    a = i.bottom,
                    r = e("body").height();
                    "object" != typeof i && (a = o = i),
                    "function" == typeof o && (o = i.top(this.$element)),
                    "function" == typeof a && (a = i.bottom(this.$element));
                    var s = this.getState(r, t, o, a);
                    if (this.affixed != s) {
                        null != this.unpin && this.$element.css("top", "");
                        var l = "affix" + (s ? "-" + s: ""),
                        c = e.Event(l + ".bs.affix");
                        if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                        this.affixed = s,
                        this.unpin = "bottom" == s ? this.getPinnedOffset() : null,
                        this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == s && this.$element.offset({
                        top: r - t - a
                    })
                }
            };
            var i = e.fn.affix;
            e.fn.affix = t,
            e.fn.affix.Constructor = n,
            e.fn.affix.noConflict = function() {
                return e.fn.affix = i,
                this
            },
            e(window).on("load",
            function() {
                e('[data-spy="affix"]').each(function() {
                    var n = e(this),
                    i = n.data();
                    i.offset = i.offset || {},
                    null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
                    null != i.offsetTop && (i.offset.top = i.offsetTop),
                    t.call(n, i)
                })
            })
        } (jQuery)
    },
    79 : function(e, t) { !
        function(e) {
            "use strict";
            var t = function(e) {
                return (e || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1)
            },
            n = function(t, n) {
                var o, a, r, s = t.nodeName.toLowerCase();
                return "area" === s ? (o = t.parentNode, a = o.name, t.href && a && "map" === o.nodeName.toLowerCase() ? (r = e("img[usemap='#" + a + "']")[0], !!r && i(r)) : !1) : (/input|select|textarea|button|object/.test(s) ? !t.disabled: "a" === s ? t.href || n: n) && i(t)
            },
            i = function(t) {
                return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                    return "hidden" === e.css(this, "visibility")
                }).length
            };
            e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                    return function(n) {
                        return !! e.data(n, t)
                    }
                }) : function(t, n, i) {
                    return !! e.data(t, i[3])
                },
                focusable: function(t) {
                    return n(t, !isNaN(e.attr(t, "tabindex")))
                },
                tabbable: function(t) {
                    var i = e.attr(t, "tabindex"),
                    o = isNaN(i);
                    return (o || i >= 0) && n(t, !o)
                }
            }),
            e(".modal-dialog").attr({
                role: "document"
            });
            var o = e.fn.modal.Constructor.prototype.hide;
            e.fn.modal.Constructor.prototype.hide = function() {
                var t = this.$element.parent().find('[data-target="#' + this.$element.attr("id") + '"]');
                o.apply(this, arguments),
                t.focus(),
                e(document).off("keydown.bs.modal")
            };
            var a = e.fn.modal.Constructor.prototype.enforceFocus;
            e.fn.modal.Constructor.prototype.enforceFocus = function() {
                var t = this.$element.find(":tabbable"),
                n = t[t.length - 1];
                e(document).on("keydown.bs.modal", e.proxy(function(e) { ! this.$element.has(e.target).length && e.shiftKey && 9 === e.keyCode && (n.focus(), e.preventDefault())
                },
                this)),
                a.apply(this, arguments)
            };
            var r, s, l = "[data-toggle=dropdown]",
            c = 200,
            u = e(l).parent().find("ul").attr("role", "menu"),
            d = u.find("li").attr("role", "presentation");
            d.find("a").attr({
                role: "menuitem",
                tabIndex: "-1"
            }),
            e(l).attr({
                "aria-haspopup": "true",
                "aria-expanded": "false"
            }),
            e(l).parent().on("shown.bs.dropdown",
            function(t) {
                r = e(this);
                var n = r.find(l);
                n.attr("aria-expanded", "true"),
                n.on("keydown.bs.modal", e.proxy(function(t) {
                    setTimeout(function() {
                        s = e(".dropdown-menu [role=menuitem]:visible", r)[0];
                        try {
                            s.focus()
                        } catch(t) {}
                    },
                    c)
                },
                this))
            }),
            e(l).parent().on("hidden.bs.dropdown",
            function(t) {
                r = e(this);
                var n = r.find(l);
                n.attr("aria-expanded", "false")
            }),
            e(document).on("focusout.dropdown.data-api", ".dropdown-menu",
            function(t) {
                var n = e(this),
                i = this;
                setTimeout(function() {
                    e.contains(i, document.activeElement) || (n.parent().removeClass("open"), n.parent().find("[data-toggle=dropdown]").attr("aria-expanded", "false"))
                },
                150)
            }).on("keydown.bs.dropdown.data-api", l + ", [role=menu]", e.fn.dropdown.Constructor.prototype.keydown);
            var h = e(".nav-tabs, .nav-pills"),
            f = h.children("li"),
            p = h.find('[data-toggle="tab"], [data-toggle="pill"]');
            p && (h.attr("role", "tablist"), f.attr("role", "presentation"), p.attr("role", "tab")),
            p.each(function(n) {
                var i = e(e(this).attr("href")),
                o = e(this),
                a = o.attr("id") || t("ui-tab");
                o.attr("id", a),
                o.parent().hasClass("active") ? (o.attr({
                    tabIndex: "0",
                    "aria-selected": "true",
                    "aria-controls": o.attr("href").substr(1)
                }), i.attr({
                    role: "tabpanel",
                    tabIndex: "0",
                    "aria-hidden": "false",
                    "aria-labelledby": a
                })) : (o.attr({
                    tabIndex: "-1",
                    "aria-selected": "false",
                    "aria-controls": o.attr("href").substr(1)
                }), i.attr({
                    role: "tabpanel",
                    tabIndex: "-1",
                    "aria-hidden": "true",
                    "aria-labelledby": a
                }))
            }),
            e.fn.tab.Constructor.prototype.keydown = function(t) {
                var n, i, o = e(this),
                a = o.closest("ul[role=tablist] "),
                r = t.which || t.keyCode;
                if (o = e(this), /(37|38|39|40)/.test(r)) {
                    n = a.find("[role=tab]:visible"),
                    i = n.index(n.filter(":focus")),
                    (38 == r || 37 == r) && i--,
                    (39 == r || 40 == r) && i++,
                    0 > i && (i = n.length - 1),
                    i == n.length && (i = 0);
                    var s = n.eq(i);
                    "tab" === s.attr("role") && s.tab("show").focus(),
                    t.preventDefault(),
                    t.stopPropagation()
                }
            },
            e(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', e.fn.tab.Constructor.prototype.keydown);
            var m = e.fn.tab.Constructor.prototype.activate;
            e.fn.tab.Constructor.prototype.activate = function(e, t, n) {
                var i = t.find("> .active");
                i.find("[data-toggle=tab], [data-toggle=pill]").attr({
                    tabIndex: "-1",
                    "aria-selected": !1
                }),
                i.filter(".tab-pane").attr({
                    "aria-hidden": !0,
                    tabIndex: "-1"
                }),
                m.apply(this, arguments),
                e.addClass("active"),
                e.find("[data-toggle=tab], [data-toggle=pill]").attr({
                    tabIndex: "0",
                    "aria-selected": !0
                }),
                e.filter(".tab-pane").attr({
                    "aria-hidden": !1,
                    tabIndex: "0"
                })
            };
            var g = e('[data-toggle="collapse"]');
            g.each(function(n) {
                var i = e(this),
                o = e(i.attr("data-target") ? i.attr("data-target") : i.attr("href")),
                a = i.attr("data-parent"),
                r = a && e(a),
                s = i.attr("id") || t("ui-collapse");
                i.attr("id", s),
                r && (i.attr({
                    role: "tab",
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), e(r).find("div:not(.collapse,.panel-body), h4").attr("role", "presentation"), r.attr({
                    role: "tablist",
                    "aria-multiselectable": "true"
                }), o.hasClass("in") ? (i.attr({
                    "aria-controls": o.attr("id"),
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabindex: "0"
                }), o.attr({
                    role: "tabpanel",
                    tabindex: "0",
                    "aria-labelledby": s,
                    "aria-hidden": "false"
                })) : (i.attr({
                    "aria-controls": o.attr("id"),
                    tabindex: "-1"
                }), o.attr({
                    role: "tabpanel",
                    tabindex: "-1",
                    "aria-labelledby": s,
                    "aria-hidden": "true"
                })))
            });
            var v = e.fn.collapse.Constructor.prototype.toggle;
            e.fn.collapse.Constructor.prototype.toggle = function() {
                var t, n = this.$parent && this.$parent.find('[aria-expanded="true"]');
                if (n) {
                    var i, o = n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""),
                    a = e(o),
                    r = this.$element;
                    this.$parent;
                    this.$parent && (i = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr("id") + '"]')),
                    v.apply(this, arguments),
                    e.support.transition && this.$element.one(e.support.transition.end,
                    function() {
                        n.attr({
                            "aria-selected": "false",
                            "aria-expanded": "false",
                            tabIndex: "-1"
                        }),
                        a.attr({
                            "aria-hidden": "true",
                            tabIndex: "-1"
                        }),
                        i.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: "0"
                        }),
                        r.hasClass("in") ? r.attr({
                            "aria-hidden": "false",
                            tabIndex: "0"
                        }) : (i.attr({
                            "aria-selected": "false",
                            "aria-expanded": "false"
                        }), r.attr({
                            "aria-hidden": "true",
                            tabIndex: "-1"
                        }))
                    })
                } else v.apply(this, arguments)
            },
            e.fn.collapse.Constructor.prototype.keydown = function(t) {
                var n, i, o = e(this),
                a = o.closest("div[role=tablist] "),
                r = t.which || t.keyCode;
                o = e(this),
                /(32|37|38|39|40)/.test(r) && (32 == r && o.click(), n = a.find("[role=tab]"), i = n.index(n.filter(":focus")), (38 == r || 37 == r) && i--, (39 == r || 40 == r) && i++, 0 > i && (i = n.length - 1), i == n.length && (i = 0), n.eq(i).focus(), t.preventDefault(), t.stopPropagation())
            },
            e(document).on("keydown.collapse.data-api", '[data-toggle="collapse"]', e.fn.collapse.Constructor.prototype.keydown),
            e(".carousel").each(function(t) {
                var n = e(this),
                i = n.find('[data-slide="prev"]'),
                o = n.find('[data-slide="next"]'),
                a = n.find(".item"),
                r = a.parent();
                n.attr({
                    "data-interval": "false",
                    "data-wrap": "false"
                }),
                r.attr("role", "listbox"),
                a.attr("role", "option");
                var s = document.createElement("span");
                s.setAttribute("class", "sr-only"),
                s.innerHTML = "Previous";
                var l = document.createElement("span");
                l.setAttribute("class", "sr-only"),
                l.innerHTML = "Next",
                i.attr("role", "button"),
                o.attr("role", "button"),
                i.append(s),
                o.append(l),
                a.each(function() {
                    var t = e(this);
                    t.hasClass("active") ? t.attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }) : t.attr({
                        "aria-selected": "false",
                        tabindex: "-1"
                    })
                })
            });
            var b = e.fn.carousel.Constructor.prototype.slide;
            e.fn.carousel.Constructor.prototype.slide = function(e, t) {
                var n = this.$element.find(".item.active"),
                i = t || n[e]();
                b.apply(this, arguments),
                n.one("bsTransitionEnd",
                function() {
                    n.attr({
                        "aria-selected": !1,
                        tabIndex: "-1"
                    }),
                    i.attr({
                        "aria-selected": !0,
                        tabIndex: "0"
                    })
                })
            };
            var y;
            e.fn.carousel.Constructor.prototype.keydown = function(t) {
                y = y || e(this),
                this instanceof Node && (y = e(this));
                var n, i = y.closest("div[role=listbox]"),
                o = i.find("[role=option]"),
                a = i.parent(),
                r = t.which || t.keyCode;
                /(37|38|39|40)/.test(r) && (n = o.index(o.filter(".active")), (37 == r || 38 == r) && (n--, 0 > n ? n = o.length - 1 : (a.carousel("prev"), setTimeout(function() {
                    o[n].focus()
                },
                150))), (39 == r || 40 == r) && (n++, n == o.length ? n = 0 : (a.carousel("next"), setTimeout(function() {
                    o[n].focus()
                },
                150))), t.preventDefault(), t.stopPropagation())
            },
            e(document).on("keydown.carousel.data-api", "div[role=option]", e.fn.carousel.Constructor.prototype.keydown)
        } (jQuery)
    },
    80 : function(e, t) {
        /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
        window.matchMedia = window.matchMedia ||
        function(e, t) {
            var n = e.documentElement,
            i = n.firstElementChild || n.firstChild,
            o = e.createElement("body"),
            a = e.createElement("div");
            a.id = "mq-test-1",
            a.style.cssText = "position:absolute;top:-100em",
            o.style.background = "none",
            o.appendChild(a);
            var r, s = function(e) {
                return a.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>',
                n.insertBefore(o, i),
                bool = 42 === a.offsetWidth,
                n.removeChild(o),
                {
                    matches: bool,
                    media: e
                }
            },
            l = function() {
                var t, i = n.body,
                o = !1;
                return a.style.cssText = "position:absolute;font-size:1em;width:1em",
                i || (i = o = e.createElement("body"), i.style.background = "none"),
                i.appendChild(a),
                n.insertBefore(i, n.firstChild),
                o ? n.removeChild(i) : i.removeChild(a),
                t = r = parseFloat(a.offsetWidth)
            },
            c = s("(min-width: 0px)").matches;
            return function(t) {
                if (c) return s(t);
                var n = t.match(/\(min\-width[\s]*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                i = t.match(/\(max\-width[\s]*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                o = null === n,
                a = null === i,
                u = e.body.offsetWidth,
                d = "em";
                return n && (n = parseFloat(n) * (n.indexOf(d) > -1 ? r || l() : 1)),
                i && (i = parseFloat(i) * (i.indexOf(d) > -1 ? r || l() : 1)),
                bool = (!o || !a) && (o || u >= n) && (a || i >= u),
                {
                    matches: bool,
                    media: t
                }
            }
        } (document),
        /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
        function() {
            if (window.matchMedia && window.matchMedia("all").addListener) return ! 1;
            var e = window.matchMedia,
            t = e("only all").matches,
            n = !1,
            i = 0,
            o = [],
            a = function() {
                clearTimeout(i),
                i = setTimeout(function() {
                    var t, n, i, a, r, s, l;
                    for (t = 0, n = o.length; n > t; t++) if (r = o[t].mql, s = o[t].listeners || [], l = e(r.media).matches, l !== r.matches) for (r.matches = l, i = 0, a = s.length; a > i; i++) s[i].call(window, r)
                },
                30)
            };
            window.matchMedia = function(i) {
                var r = e(i),
                s = [],
                l = 0;
                return r.addListener = function(e) {
                    t && (n || (n = !0, window.addEventListener("resize", a, !0)), 0 === l && (l = o.push({
                        mql: r,
                        listeners: s
                    })), s.push(e))
                },
                r.removeListener = function(e) {
                    var t, n;
                    for (t = 0, n = s.length; n > t; t++) s[t] === e && s.splice(t, 1)
                },
                r
            }
        } ()
    },
    81 : function(e, t) {
        /*! Picturefill - v2.3.1 - 2015-04-09
	* http://scottjehl.github.io/picturefill
	* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
        /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
        window.matchMedia || (window.matchMedia = function() {
            "use strict";
            var e = window.styleMedia || window.media;
            if (!e) {
                var t = document.createElement("style"),
                n = document.getElementsByTagName("script")[0],
                i = null;
                t.type = "text/css",
                t.id = "matchmediajs-test",
                n.parentNode.insertBefore(t, n),
                i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle,
                e = {
                    matchMedium: function(e) {
                        var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                        return t.styleSheet ? t.styleSheet.cssText = n: t.textContent = n,
                        "1px" === i.width
                    }
                }
            }
            return function(t) {
                return {
                    matches: e.matchMedium(t || "all"),
                    media: t || "all"
                }
            }
        } ()),
        /*! Picturefill - Responsive Images that work today.
	*  Author: Scott Jehl, Filament Group, 2012 ( new proposal implemented by Shawn Jansepar )
	*  License: MIT/GPLv2
	*  Spec: http://picture.responsiveimages.org/
	*/
        function(t, n, i) {
            "use strict";
            function o(n) {
                "object" == typeof e && "object" == typeof e.exports ? e.exports = n: "function" == typeof define && define.amd && define("picturefill",
                function() {
                    return n
                }),
                "object" == typeof t && (t.picturefill = n)
            }
            function a(e) {
                var t, n, i, o, a, r = e || {};
                t = r.elements || s.getAllElements();
                for (var c = 0,
                u = t.length; u > c; c++) if (n = t[c], i = n.parentNode, o = void 0, a = void 0, "IMG" === n.nodeName.toUpperCase() && (n[s.ns] || (n[s.ns] = {}), r.reevaluate || !n[s.ns].evaluated)) {
                    if (i && "PICTURE" === i.nodeName.toUpperCase()) {
                        if (s.removeVideoShim(i), o = s.getMatch(n, i), o === !1) continue
                    } else o = void 0; (i && "PICTURE" === i.nodeName.toUpperCase() || !s.sizesSupported && n.srcset && l.test(n.srcset)) && s.dodgeSrcset(n),
                    o ? (a = s.processSourceSet(o), s.applyBestCandidate(a, n)) : (a = s.processSourceSet(n), (void 0 === n.srcset || n[s.ns].srcset) && s.applyBestCandidate(a, n)),
                    n[s.ns].evaluated = !0
                }
            }
            function r() {
                function e() {
                    clearTimeout(i),
                    i = setTimeout(r, 60)
                }
                s.initTypeDetects(),
                a();
                var i, o = setInterval(function() {
                    return a(),
                    /^loaded|^i|^c/.test(n.readyState) ? void clearInterval(o) : void 0
                },
                250),
                r = function() {
                    a({
                        reevaluate: !0
                    })
                };
                t.addEventListener ? t.addEventListener("resize", e, !1) : t.attachEvent && t.attachEvent("onresize", e)
            }
            if (t.HTMLPictureElement) return void o(function() {});
            n.createElement("picture");
            var s = t.picturefill || {},
            l = /\s+\+?\d+(e\d+)?w/;
            s.ns = "picturefill",
            function() {
                s.srcsetSupported = "srcset" in i,
                s.sizesSupported = "sizes" in i,
                s.curSrcSupported = "currentSrc" in i
            } (),
            s.trim = function(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            },
            s.makeUrl = function() {
                var e = n.createElement("a");
                return function(t) {
                    return e.href = t,
                    e.href
                }
            } (),
            s.restrictsMixedContent = function() {
                return "https:" === t.location.protocol
            },
            s.matchesMedia = function(e) {
                return t.matchMedia && t.matchMedia(e).matches
            },
            s.getDpr = function() {
                return t.devicePixelRatio || 1
            },
            s.getWidthFromLength = function(e) {
                var t;
                if (!e || e.indexOf("%") > -1 != !1 || !(parseFloat(e) > 0 || e.indexOf("calc(") > -1)) return ! 1;
                e = e.replace("vw", "%"),
                s.lengthEl || (s.lengthEl = n.createElement("div"), s.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden", s.lengthEl.className = "helper-from-picturefill-js"),
                s.lengthEl.style.width = "0px";
                try {
                    s.lengthEl.style.width = e
                } catch(i) {}
                return n.body.appendChild(s.lengthEl),
                t = s.lengthEl.offsetWidth,
                0 >= t && (t = !1),
                n.body.removeChild(s.lengthEl),
                t
            },
            s.detectTypeSupport = function(e, n) {
                var i = new t.Image;
                return i.onerror = function() {
                    s.types[e] = !1,
                    a()
                },
                i.onload = function() {
                    s.types[e] = 1 === i.width,
                    a()
                },
                i.src = n,
                "pending"
            },
            s.types = s.types || {},
            s.initTypeDetects = function() {
                s.types["image/jpeg"] = !0,
                s.types["image/gif"] = !0,
                s.types["image/png"] = !0,
                s.types["image/svg+xml"] = n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
                s.types["image/webp"] = s.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
            },
            s.verifyTypeSupport = function(e) {
                var t = e.getAttribute("type");
                if (null === t || "" === t) return ! 0;
                var n = s.types[t];
                return "string" == typeof n && "pending" !== n ? (s.types[t] = s.detectTypeSupport(t, n), "pending") : "function" == typeof n ? (n(), "pending") : n
            },
            s.parseSize = function(e) {
                var t = /(\([^)]+\))?\s*(.+)/g.exec(e);
                return {
                    media: t && t[1],
                    length: t && t[2]
                }
            },
            s.findWidthFromSourceSize = function(e) {
                for (var i, o = s.trim(e).split(/\s*,\s*/), a = 0, r = o.length; r > a; a++) {
                    var l = o[a],
                    c = s.parseSize(l),
                    u = c.length,
                    d = c.media;
                    if (u && (!d || s.matchesMedia(d)) && (i = s.getWidthFromLength(u))) break
                }
                return i || Math.max(t.innerWidth || 0, n.documentElement.clientWidth)
            },
            s.parseSrcset = function(e) {
                for (var t = [];
                "" !== e;) {
                    e = e.replace(/^\s+/g, "");
                    var n, i = e.search(/\s/g),
                    o = null;
                    if ( - 1 !== i) {
                        n = e.slice(0, i);
                        var a = n.slice( - 1);
                        if (("," === a || "" === n) && (n = n.replace(/,+$/, ""), o = ""), e = e.slice(i + 1), null === o) {
                            var r = e.indexOf(","); - 1 !== r ? (o = e.slice(0, r), e = e.slice(r + 1)) : (o = e, e = "")
                        }
                    } else n = e,
                    e = ""; (n || o) && t.push({
                        url: n,
                        descriptor: o
                    })
                }
                return t
            },
            s.parseDescriptor = function(e, t) {
                var n, i = t || "100vw",
                o = e && e.replace(/(^\s+|\s+$)/g, ""),
                a = s.findWidthFromSourceSize(i);
                if (o) for (var r = o.split(" "), l = r.length - 1; l >= 0; l--) {
                    var c = r[l],
                    u = c && c.slice(c.length - 1);
                    if ("h" !== u && "w" !== u || s.sizesSupported) {
                        if ("x" === u) {
                            var d = c && parseFloat(c, 10);
                            n = d && !isNaN(d) ? d: 1
                        }
                    } else n = parseFloat(parseInt(c, 10) / a)
                }
                return n || 1
            },
            s.getCandidatesFromSourceSet = function(e, t) {
                for (var n = s.parseSrcset(e), i = [], o = 0, a = n.length; a > o; o++) {
                    var r = n[o];
                    i.push({
                        url: r.url,
                        resolution: s.parseDescriptor(r.descriptor, t)
                    })
                }
                return i
            },
            s.dodgeSrcset = function(e) {
                e.srcset && (e[s.ns].srcset = e.srcset, e.srcset = "", e.setAttribute("data-pfsrcset", e[s.ns].srcset))
            },
            s.processSourceSet = function(e) {
                var t = e.getAttribute("srcset"),
                n = e.getAttribute("sizes"),
                i = [];
                return "IMG" === e.nodeName.toUpperCase() && e[s.ns] && e[s.ns].srcset && (t = e[s.ns].srcset),
                t && (i = s.getCandidatesFromSourceSet(t, n)),
                i
            },
            s.backfaceVisibilityFix = function(e) {
                var t = e.style || {},
                n = "webkitBackfaceVisibility" in t,
                i = t.zoom;
                n && (t.zoom = ".999", n = e.offsetWidth, t.zoom = i)
            },
            s.setIntrinsicSize = function() {
                var e = {},
                i = function(e, t, n) {
                    t && e.setAttribute("width", parseInt(t / n, 10))
                };
                return function(o, a) {
                    var r;
                    o[s.ns] && !t.pfStopIntrinsicSize && (void 0 === o[s.ns].dims && (o[s.ns].dims = o.getAttribute("width") || o.getAttribute("height")), o[s.ns].dims || (a.url in e ? i(o, e[a.url], a.resolution) : (r = n.createElement("img"), r.onload = function() {
                        if (e[a.url] = r.width, !e[a.url]) try {
                            n.body.appendChild(r),
                            e[a.url] = r.width || r.offsetWidth,
                            n.body.removeChild(r)
                        } catch(t) {}
                        o.src === a.url && i(o, e[a.url], a.resolution),
                        o = null,
                        r.onload = null,
                        r = null
                    },
                    r.src = a.url)))
                }
            } (),
            s.applyBestCandidate = function(e, t) {
                var n, i, o;
                e.sort(s.ascendingSort),
                i = e.length,
                o = e[i - 1];
                for (var a = 0; i > a; a++) if (n = e[a], n.resolution >= s.getDpr()) {
                    o = n;
                    break
                }
                o && (o.url = s.makeUrl(o.url), t.src !== o.url && (s.restrictsMixedContent() && "http:" === o.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console && console.warn("Blocked mixed content image " + o.url) : (t.src = o.url, s.curSrcSupported || (t.currentSrc = t.src), s.backfaceVisibilityFix(t))), s.setIntrinsicSize(t, o))
            },
            s.ascendingSort = function(e, t) {
                return e.resolution - t.resolution
            },
            s.removeVideoShim = function(e) {
                var t = e.getElementsByTagName("video");
                if (t.length) {
                    for (var n = t[0], i = n.getElementsByTagName("source"); i.length;) e.insertBefore(i[0], n);
                    n.parentNode.removeChild(n)
                }
            },
            s.getAllElements = function() {
                for (var e = [], t = n.getElementsByTagName("img"), i = 0, o = t.length; o > i; i++) {
                    var a = t[i]; ("PICTURE" === a.parentNode.nodeName.toUpperCase() || null !== a.getAttribute("srcset") || a[s.ns] && null !== a[s.ns].srcset) && e.push(a)
                }
                return e
            },
            s.getMatch = function(e, t) {
                for (var n, i = t.childNodes,
                o = 0,
                a = i.length; a > o; o++) {
                    var r = i[o];
                    if (1 === r.nodeType) {
                        if (r === e) return n;
                        if ("SOURCE" === r.nodeName.toUpperCase()) {
                            null !== r.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                            var l = r.getAttribute("media");
                            if (r.getAttribute("srcset") && (!l || s.matchesMedia(l))) {
                                var c = s.verifyTypeSupport(r);
                                if (c === !0) {
                                    n = r;
                                    break
                                }
                                if ("pending" === c) return ! 1
                            }
                        }
                    }
                }
                return n
            },
            r(),
            a._ = s,
            o(a)
        } (window, window.document, new window.Image)
    },
    82 : function(e, t) { !
        function(t, n) {
            var i = n(t, t.document);
            t.lazySizes = i,
            "object" == typeof e && e.exports ? e.exports = i: "function" == typeof define && define.amd && define(i)
        } (window,
        function(e, t) {
            "use strict";
            if (t.getElementsByClassName) {
                var n, i = t.documentElement,
                o = e.addEventListener,
                a = e.setTimeout,
                r = e.requestAnimationFrame || a,
                s = /^picture$/i,
                l = ["load", "error", "lazyincluded", "_lazyloaded"],
                c = function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    return e.className.match(n) && n
                },
                u = function(e, t) {
                    c(e, t) || (e.className += " " + t)
                },
                d = function(e, t) {
                    var n; (n = c(e, t)) && (e.className = e.className.replace(n, " "))
                },
                h = function(e, t, n) {
                    var i = n ? "addEventListener": "removeEventListener";
                    n && h(e, t),
                    l.forEach(function(n) {
                        e[i](n, t)
                    })
                },
                f = function(e, n, i, o, a) {
                    var r = t.createEvent("CustomEvent");
                    return r.initCustomEvent(n, !o, !a, i || {}),
                    r.details = r.detail,
                    e.dispatchEvent(r),
                    r
                },
                p = function(t, i) {
                    var o;
                    e.HTMLPictureElement || ((o = e.picturefill || e.respimage || n.pf) ? o({
                        reevaluate: !0,
                        elements: [t]
                    }) : i && i.src && (t.src = i.src))
                },
                m = function(e, t) {
                    return getComputedStyle(e, null)[t]
                },
                g = function(e, t, i) {
                    for (i = i || e.offsetWidth; i < n.minSize && t && !e._lazysizesWidth;) i = t.offsetWidth,
                    t = t.parentNode;
                    return i
                },
                v = function(t) {
                    var i, o = 0,
                    s = e.Date,
                    l = function() {
                        i = !1,
                        o = s.now(),
                        t()
                    },
                    c = function() {
                        a(l)
                    },
                    u = function() {
                        r(c)
                    };
                    return function() {
                        if (!i) {
                            var e = n.throttle - (s.now() - o);
                            i = !0,
                            9 > e && (e = 9),
                            a(u, e)
                        }
                    }
                },
                b = function() {
                    var l, g, b, w, x, C, _, S, $, E, T, k, I, P = /^img$/i,
                    A = /^iframe$/i,
                    N = "onscroll" in e && !/glebot/.test(navigator.userAgent),
                    O = 0,
                    D = 0,
                    R = 0,
                    z = 1,
                    B = function(e) {
                        R--,
                        e && e.target && h(e.target, B),
                        (!e || 0 > R || !e.target) && (R = 0)
                    },
                    M = function(e, t) {
                        var n, i = e,
                        o = "hidden" != m(e, "visibility");
                        for (S -= t, T += t, $ -= t, E += t; o && (i = i.offsetParent);) o = (m(i, "opacity") || 1) > 0,
                        o && "visible" != m(i, "overflow") && (n = i.getBoundingClientRect(), o = E > n.left && $ < n.right && T > n.top - 1 && S < n.bottom + 1);
                        return o
                    },
                    L = function() {
                        var e, t, i, o, a, r, s, c, u;
                        if ((x = n.loadMode) && 8 > R && (e = l.length)) {
                            for (t = 0, z++, I > D && 1 > R && z > 3 && x > 2 ? (D = I, z = 0) : D = D != k && x > 1 && z > 2 && 6 > R ? k: O; e > t; t++) l[t] && !l[t]._lazyRace && (N ? ((c = l[t].getAttribute("data-expand")) && (r = 1 * c) || (r = D), u !== r && (C = innerWidth + r, _ = innerHeight + r, s = -1 * r, u = r), i = l[t].getBoundingClientRect(), (T = i.bottom) >= s && (S = i.top) <= _ && (E = i.right) >= s && ($ = i.left) <= C && (T || E || $ || S) && (b && 3 > R && !c && (3 > x || 4 > z) || M(l[t], r)) ? (W(l[t], i.width), a = !0) : !a && b && !o && 3 > R && 4 > z && x > 2 && (g[0] || n.preloadAfterLoad) && (g[0] || !c && (T || E || $ || S || "auto" != l[t].getAttribute(n.sizesAttr))) && (o = g[0] || l[t])) : W(l[t]));
                            o && !a && W(o)
                        }
                    },
                    H = v(L),
                    q = function(e) {
                        u(e.target, n.loadedClass),
                        d(e.target, n.loadingClass),
                        h(e.target, q)
                    },
                    j = function(e, t) {
                        try {
                            e.contentWindow.location.replace(t)
                        } catch(n) {
                            e.setAttribute("src", t)
                        }
                    },
                    F = function() {
                        var e, t = [],
                        n = function() {
                            for (; t.length;) t.shift()();
                            e = !1
                        };
                        return function(i) {
                            t.push(i),
                            e || (e = !0, r(n))
                        }
                    } (),
                    W = function(e, t) {
                        var i, o, r, l, m, g, v, x, C, _, S, $ = P.test(e.nodeName),
                        E = e.getAttribute(n.sizesAttr) || e.getAttribute("sizes"),
                        T = "auto" == E; (!T && b || !$ || !e.src && !e.srcset || e.complete || c(e, n.errorClass)) && (e._lazyRace = !0, R++, F(function() {
                            if (e._lazyRace && delete e._lazyRace, d(e, n.lazyClass), !(C = f(e, "lazybeforeunveil")).defaultPrevented) {
                                if (E && (T ? (y.updateElem(e, !0, t), u(e, n.autosizesClass)) : e.setAttribute("sizes", E)), g = e.getAttribute(n.srcsetAttr), m = e.getAttribute(n.srcAttr), $ && (v = e.parentNode, x = v && s.test(v.nodeName || "")), _ = C.detail.firesLoad || "src" in e && (g || m || x), C = {
                                    target: e
                                },
                                _ && (h(e, B, !0), clearTimeout(w), w = a(B, 2500), u(e, n.loadingClass), h(e, q, !0)), x) for (i = v.getElementsByTagName("source"), o = 0, r = i.length; r > o; o++)(S = n.customMedia[i[o].getAttribute("data-media") || i[o].getAttribute("media")]) && i[o].setAttribute("media", S),
                                l = i[o].getAttribute(n.srcsetAttr),
                                l && i[o].setAttribute("srcset", l);
                                g ? e.setAttribute("srcset", g) : m && (A.test(e.nodeName) ? j(e, m) : e.setAttribute("src", m)),
                                (g || x) && p(e, {
                                    src: m
                                })
                            } (!_ || e.complete) && (_ ? B(C) : R--, q(C))
                        }))
                    },
                    U = function() {
                        var e, t = function() {
                            n.loadMode = 3,
                            H()
                        };
                        b = !0,
                        z += 8,
                        n.loadMode = 3,
                        o("scroll",
                        function() {
                            3 == n.loadMode && (n.loadMode = 2),
                            clearTimeout(e),
                            e = a(t, 99)
                        },
                        !0)
                    };
                    return {
                        _: function() {
                            l = t.getElementsByClassName(n.lazyClass),
                            g = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass),
                            k = n.expand,
                            I = Math.round(k * n.expFactor),
                            o("scroll", H, !0),
                            o("resize", H, !0),
                            e.MutationObserver ? new MutationObserver(H).observe(i, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (i.addEventListener("DOMNodeInserted", H, !0), i.addEventListener("DOMAttrModified", H, !0), setInterval(H, 999)),
                            o("hashchange", H, !0),
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                                t.addEventListener(e, H, !0)
                            }),
                            (b = /d$|^c/.test(t.readyState)) ? U() : (o("load", U), t.addEventListener("DOMContentLoaded", H)),
                            H()
                        },
                        checkElems: H,
                        unveil: W
                    }
                } (),
                y = function() {
                    var e, i = function(e, t, n) {
                        var i, o, a, r, l = e.parentNode;
                        if (l && (n = g(e, l, n), r = f(e, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!t
                        }), !r.defaultPrevented && (n = r.detail.width, n && n !== e._lazysizesWidth))) {
                            if (e._lazysizesWidth = n, n += "px", e.setAttribute("sizes", n), s.test(l.nodeName || "")) for (i = l.getElementsByTagName("source"), o = 0, a = i.length; a > o; o++) i[o].setAttribute("sizes", n);
                            r.detail.dataAttr || p(e, r.detail)
                        }
                    },
                    a = function() {
                        var t, n = e.length;
                        if (n) for (t = 0; n > t; t++) i(e[t])
                    },
                    r = v(a);
                    return {
                        _: function() {
                            e = t.getElementsByClassName(n.autosizesClass),
                            o("resize", r)
                        },
                        checkElems: r,
                        updateElem: i
                    }
                } (),
                w = function() {
                    w.i || (w.i = !0, y._(), b._())
                };
                return function() {
                    var t, i = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 2,
                        expand: 359,
                        loadMode: 2,
                        throttle: 125
                    };
                    n = e.lazySizesConfig || e.lazysizesConfig || {};
                    for (t in i) t in n || (n[t] = i[t]);
                    e.lazySizesConfig = n,
                    a(function() {
                        n.init && w()
                    })
                } (),
                {
                    cfg: n,
                    autoSizer: y,
                    loader: b,
                    init: w,
                    uP: p,
                    aC: u,
                    rC: d,
                    hC: c,
                    fire: f,
                    gW: g
                }
            }
        }),
        function(e, t) {
            "use strict";
            function n(e, n) {
                if (!o[e]) {
                    var i = t.createElement(n ? "link": "script"),
                    a = t.getElementsByTagName("script")[0];
                    n ? (i.rel = "stylesheet", i.href = e) : i.src = e,
                    o[e] = !0,
                    o[i.src || i.href] = !0,
                    a.parentNode.insertBefore(i, a)
                }
            }
            var i, o = {};
            t.addEventListener && e.getComputedStyle && (i = function(e, n) {
                var i = t.createElement("img");
                i.onload = function() {
                    i.onload = null,
                    i.onerror = null,
                    i = null,
                    n()
                },
                i.onerror = i.onload,
                i.src = e,
                i && i.complete && i.onload && i.onload()
            },
            addEventListener("lazybeforeunveil",
            function(t) {
                var o, a, r, s;
                t.defaultPrevented || ("none" == t.target.preload && (t.target.preload = "auto"), o = t.target.getAttribute("data-link"), o && n(o, !0), o = t.target.getAttribute("data-script"), o && n(o), o = t.target.getAttribute("data-require"), o && e.require && require([o]), r = t.target.getAttribute("data-bg"), r && (t.detail.firesLoad = !0, a = function() {
                    t.target.style.backgroundImage = "url(" + r + ")",
                    t.detail.firesLoad = !1,
                    lazySizes.fire(t.target, "_lazyloaded", {},
                    !0, !0)
                },
                i(r, a)), s = t.target.getAttribute("data-poster"), s && (t.detail.firesLoad = !0, a = function() {
                    t.target.poster = s,
                    t.detail.firesLoad = !1,
                    lazySizes.fire(t.target, "_lazyloaded", {},
                    !0, !0)
                },
                i(s, a)))
            },
            !1))
        } (window, document),
        function() {
            var e = navigator.userAgent;
            window.HTMLPictureElement && /ecko/.test(e) && e.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize",
            function() {
                var e, t = document.createElement("source"),
                n = function(e) {
                    var n = e.parentNode,
                    i = t.cloneNode();
                    n.insertBefore(i, n.firstElementChild),
                    setTimeout(function() {
                        n.removeChild(i)
                    })
                },
                i = function() {
                    var e, t = document.querySelectorAll("picture > img");
                    for (e = 0; e < t.length; e++) if (t[e].complete) t[e].currentSrc && n(t[e]);
                    else if (t[e].currentSrc) {
                        removeEventListener("resize", o);
                        break
                    }
                },
                o = function() {
                    clearTimeout(e),
                    e = setTimeout(i, 99)
                };
                return t.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                o
            } ())
        } ()
    },
    83 : function(e, t) { (function() {
            window.debug = function() {
                function e(e) { ! n || !i && r && r.log || n.apply(o, e)
                }
                function t(e) {
                    return l > 0 ? l > e: c.length + l <= e
                }
                for (var n, i, o = this,
                a = Array.prototype.slice,
                r = o.console,
                s = {},
                l = 9,
                c = ["error", "warn", "info", "debug", "log"], u = "assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" "), d = u.length, h = []; --d >= 0;) !
                function(e) {
                    s[e] = function() {
                        0 !== l && r && r[e] && r[e].apply(r, arguments)
                    }
                } (u[d]);
                for (d = c.length; --d >= 0;) !
                function(n, i) {
                    s[i] = function() {
                        var s = a.call(arguments),
                        l = [i].concat(s);
                        h.push(l),
                        e(l),
                        r && t(n) && (r.firebug ? r[i].apply(o, s) : r[i] ? r[i](s) : r.log(s))
                    }
                } (d, c[d]);
                return s.setLevel = function(e) {
                    l = "number" == typeof e ? e: 9
                },
                s.setCallback = function() {
                    var t = a.call(arguments),
                    o = h.length,
                    r = o;
                    for (n = t.shift() || null, i = "boolean" == typeof t[0] ? t.shift() : !1, r -= "number" == typeof t[0] ? t.shift() : o; o > r;) e(h[r++])
                },
                s
            } (),
            e.exports = window.debug
        }).call(window)
    },
    84 : function(e, t) { !
        function(e) {
            var t = -1,
            n = -1,
            i = function(e) {
                return parseFloat(e) || 0
            },
            o = function(t) {
                var n = null,
                o = [];
                return e(t).each(function() {
                    var t = e(this),
                    a = t.offset().top - i(t.css("margin-top")),
                    r = 0 < o.length ? o[o.length - 1] : null;
                    null === r ? o.push(t) : 1 >= Math.floor(Math.abs(n - a)) ? o[o.length - 1] = r.add(t) : o.push(t),
                    n = a
                }),
                o
            },
            a = function(t) {
                var n = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t: "remove" === t && (n.remove = !0), n)
            },
            r = e.fn.matchHeight = function(t) {
                if (t = a(t), t.remove) {
                    var n = this;
                    return this.css(t.property, ""),
                    e.each(r._groups,
                    function(e, t) {
                        t.elements = t.elements.not(n)
                    }),
                    this
                }
                return 1 >= this.length && !t.target ? this: (r._groups.push({
                    elements: this,
                    options: t
                }), r._apply(this, t), this)
            };
            r._groups = [],
            r._throttle = 80,
            r._maintainScroll = !1,
            r._beforeUpdate = null,
            r._afterUpdate = null,
            r._apply = function(t, n) {
                var s = a(n),
                l = e(t),
                c = [l],
                u = e(window).scrollTop(),
                d = e("html").outerHeight(!0),
                h = l.parents().filter(":hidden");
                return h.each(function() {
                    var t = e(this);
                    t.data("style-cache", t.attr("style"))
                }),
                h.css("display", "block"),
                s.byRow && !s.target && (l.each(function() {
                    var t = e(this),
                    n = t.css("display");
                    "inline-block" !== n && "inline-flex" !== n && (n = "block"),
                    t.data("style-cache", t.attr("style")),
                    t.css({
                        display: n,
                        "padding-top": "0",
                        "padding-bottom": "0",
                        "margin-top": "0",
                        "margin-bottom": "0",
                        "border-top-width": "0",
                        "border-bottom-width": "0",
                        height: "100px"
                    })
                }), c = o(l), l.each(function() {
                    var t = e(this);
                    t.attr("style", t.data("style-cache") || "")
                })),
                e.each(c,
                function(t, n) {
                    var o = e(n),
                    a = 0;
                    if (s.target) a = s.target.outerHeight(!1);
                    else {
                        if (s.byRow && 1 >= o.length) return void o.css(s.property, "");
                        o.each(function() {
                            var t = e(this),
                            n = t.css("display");
                            "inline-block" !== n && "inline-flex" !== n && (n = "block"),
                            n = {
                                display: n
                            },
                            n[s.property] = "",
                            t.css(n),
                            t.outerHeight(!1) > a && (a = t.outerHeight(!1)),
                            t.css("display", "")
                        })
                    }
                    o.each(function() {
                        var t = e(this),
                        n = 0;
                        s.target && t.is(s.target) || ("border-box" !== t.css("box-sizing") && (n += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), n += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(s.property, a - n + "px"))
                    })
                }),
                h.each(function() {
                    var t = e(this);
                    t.attr("style", t.data("style-cache") || null)
                }),
                r._maintainScroll && e(window).scrollTop(u / d * e("html").outerHeight(!0)),
                this
            },
            r._applyDataApi = function() {
                var t = {};
                e("[data-match-height], [data-mh]").each(function() {
                    var n = e(this),
                    i = n.attr("data-mh") || n.attr("data-match-height");
                    t[i] = i in t ? t[i].add(n) : n
                }),
                e.each(t,
                function() {
                    this.matchHeight(!0)
                })
            };
            var s = function(t) {
                r._beforeUpdate && r._beforeUpdate(t, r._groups),
                e.each(r._groups,
                function() {
                    r._apply(this.elements, this.options)
                }),
                r._afterUpdate && r._afterUpdate(t, r._groups)
            };
            r._update = function(i, o) {
                if (o && "resize" === o.type) {
                    var a = e(window).width();
                    if (a === t) return;
                    t = a
                }
                i ? -1 === n && (n = setTimeout(function() {
                    s(o),
                    n = -1
                },
                r._throttle)) : s(o)
            },
            e(r._applyDataApi),
            e(window).bind("load",
            function(e) {
                r._update(!1, e)
            }),
            e(window).bind("resize orientationchange",
            function(e) {
                r._update(!0, e)
            })
        } (jQuery)
    },
    85 : function(e, t) { !
        function(e) {
            e.flexslider = function(t, n) {
                var i = e(t);
                i.vars = e.extend({},
                e.flexslider.defaults, n);
                var o, a = i.vars.namespace,
                r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                s = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
                l = i.hasClass("tabbed-carousel-slider") ? "click touchend MSPointerUp": "click touchend MSPointerUp keyup",
                c = "",
                u = "vertical" === i.vars.direction,
                d = i.vars.reverse,
                h = i.vars.itemWidth > 0,
                f = "fade" === i.vars.animation,
                p = "" !== i.vars.asNavFor,
                m = {},
                g = !0;
                e.data(t, "flexslider", i),
                m = {
                    init: function() {
                        i.animating = !1,
                        i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt: 0, 10),
                        isNaN(i.currentSlide) && (i.currentSlide = 0),
                        i.animatingTo = i.currentSlide,
                        i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last,
                        i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")),
                        i.slides = e(i.vars.selector, i),
                        i.container = e(i.containerSelector, i),
                        i.count = i.slides.length,
                        i.syncExists = e(i.vars.sync).length > 0,
                        "slide" === i.vars.animation && (i.vars.animation = "swing"),
                        i.prop = u ? "top": "marginLeft",
                        i.args = {},
                        i.manualPause = !1,
                        i.stopped = !1,
                        i.started = !1,
                        i.startTimeout = null,
                        i.transitions = !i.vars.video && !f && i.vars.useCSS &&
                        function() {
                            var e = document.createElement("div"),
                            t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                            for (var n in t) if (void 0 !== e.style[t[n]]) return i.pfx = t[n].replace("Perspective", "").toLowerCase(),
                            i.prop = "-" + i.pfx + "-transform",
                            !0;
                            return ! 1
                        } (),
                        i.ensureAnimationEnd = "",
                        "" !== i.vars.controlsContainer && (i.controlsContainer = e(i.vars.controlsContainer).length > 0 && e(i.vars.controlsContainer)),
                        "" !== i.vars.manualControls && (i.manualControls = e(i.vars.manualControls).length > 0 && e(i.vars.manualControls)),
                        "" !== i.vars.customDirectionNav && (i.customDirectionNav = 2 === e(i.vars.customDirectionNav).length && e(i.vars.customDirectionNav)),
                        i.vars.randomize && (i.slides.sort(function() {
                            return Math.round(Math.random()) - .5
                        }), i.container.empty().append(i.slides)),
                        i.doMath(),
                        i.setup("init"),
                        i.vars.controlNav && m.controlNav.setup(),
                        i.vars.directionNav && m.directionNav.setup(),
                        i.vars.keyboard && (1 === e(i.containerSelector).length || i.vars.multipleKeyboard) && e(document).bind("keyup",
                        function(e) {
                            var t = e.keyCode;
                            if (!i.animating && (39 === t || 37 === t)) {
                                var n = 39 === t ? i.getTarget("next") : 37 === t ? i.getTarget("prev") : !1;
                                i.flexAnimate(n, i.vars.pauseOnAction)
                            }
                        }),
                        i.vars.mousewheel && i.bind("mousewheel",
                        function(e, t, n, o) {
                            e.preventDefault();
                            var a = i.getTarget(0 > t ? "next": "prev");
                            i.flexAnimate(a, i.vars.pauseOnAction)
                        }),
                        i.vars.pausePlay && m.pausePlay.setup(),
                        i.vars.slideshow && i.vars.pauseInvisible && m.pauseInvisible.init(),
                        i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function() {
                            i.manualPlay || i.manualPause || i.pause()
                        },
                        function() {
                            i.manualPause || i.manualPlay || i.stopped || i.play()
                        }), i.vars.pauseInvisible && m.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())),
                        p && m.asNav.setup(),
                        s && i.vars.touch && m.touch(),
                        (!f || f && i.vars.smoothHeight) && e(window).bind("resize orientationchange focus", m.resize),
                        i.find("img").attr("draggable", "false"),
                        setTimeout(function() {
                            i.vars.start(i)
                        },
                        200)
                    },
                    asNav: {
                        setup: function() {
                            i.asNav = !0,
                            i.animatingTo = Math.floor(i.currentSlide / i.move),
                            i.currentItem = i.currentSlide,
                            i.slides.removeClass(a + "active-slide").eq(i.currentItem).addClass(a + "active-slide"),
                            r ? (t._slider = i, i.slides.each(function() {
                                var t = this;
                                t._gesture = new MSGesture,
                                t._gesture.target = t,
                                t.addEventListener("MSPointerDown",
                                function(e) {
                                    e.preventDefault(),
                                    e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                                },
                                !1),
                                t.addEventListener("MSGestureTap",
                                function(t) {
                                    t.preventDefault();
                                    var n = e(this),
                                    o = n.index();
                                    e(i.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < o ? "next": "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                                })
                            })) : i.slides.on(l,
                            function(t) {
                                t.preventDefault();
                                var n = e(this),
                                o = n.index(),
                                r = n.offset().left - e(i).scrollLeft();
                                0 >= r && n.hasClass(a + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : e(i.vars.asNavFor).data("flexslider").animating || n.hasClass(a + "active-slide") || (i.direction = i.currentItem < o ? "next": "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                            })
                        }
                    },
                    controlNav: {
                        setup: function() {
                            i.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                        },
                        setupPaging: function() {
                            var t, n, o = "thumbnails" === i.vars.controlNav ? "control-thumbs": "control-paging",
                            r = 1;
                            if (i.controlNavScaffold = e('<ol class="' + a + "control-nav " + a + o + '"></ol>'), i.pagingCount > 1) for (var s = 0; s < i.pagingCount; s++) {
                                if (n = i.slides.eq(s), t = "thumbnails" === i.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"/>': "<a>" + r + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
                                    var u = n.attr("data-thumbcaption");
                                    "" !== u && void 0 !== u && (t += '<span class="' + a + 'caption">' + u + "</span>")
                                }
                                i.controlNavScaffold.append("<li>" + t + "</li>"),
                                r++
                            }
                            i.controlsContainer ? e(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold),
                            m.controlNav.set(),
                            m.controlNav.active(),
                            i.controlNavScaffold.delegate("a, img", l,
                            function(t) {
                                if (t.preventDefault(), "" === c || c === t.type) {
                                    var n = e(this),
                                    o = i.controlNav.index(n);
                                    n.hasClass(a + "active") || (i.direction = o > i.currentSlide ? "next": "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                                }
                                "" === c && (c = t.type),
                                m.setToClearWatchedEvent()
                            })
                        },
                        setupManual: function() {
                            i.controlNav = i.manualControls,
                            m.controlNav.active(),
                            i.controlNav.bind(l,
                            function(t) {
                                if (t.preventDefault(), "" === c || c === t.type) {
                                    var n = e(this),
                                    o = i.controlNav.index(n);
                                    n.hasClass(a + "active") || (i.direction = o > i.currentSlide ? "next": "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                                }
                                "" === c && (c = t.type),
                                m.setToClearWatchedEvent()
                            })
                        },
                        set: function() {
                            var t = "thumbnails" === i.vars.controlNav ? "img": "a";
                            i.controlNav = e("." + a + "control-nav li " + t, i.controlsContainer ? i.controlsContainer: i)
                        },
                        active: function() {
                            i.controlNav.removeClass(a + "active").eq(i.animatingTo).addClass(a + "active")
                        },
                        update: function(t, n) {
                            i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(e("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(),
                            m.controlNav.set(),
                            i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, t) : m.controlNav.active()
                        }
                    },
                    directionNav: {
                        setup: function() {
                            var t = e('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + i.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
                            i.customDirectionNav ? i.directionNav = i.customDirectionNav: i.controlsContainer ? (e(i.controlsContainer).append(t), i.directionNav = e("." + a + "direction-nav li a", i.controlsContainer)) : (i.append(t), i.directionNav = e("." + a + "direction-nav li a", i)),
                            m.directionNav.update(),
                            i.directionNav.bind(l,
                            function(t) {
                                t.preventDefault();
                                var n; ("" === c || c === t.type) && (n = i.getTarget(e(this).hasClass(a + "next") ? "next": "prev"), i.flexAnimate(n, i.vars.pauseOnAction)),
                                "" === c && (c = t.type),
                                m.setToClearWatchedEvent()
                            })
                        },
                        update: function() {
                            var e = a + "disabled";
                            1 === i.pagingCount ? i.directionNav.addClass(e).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(e).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(e).filter("." + a + "prev").addClass(e).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(e).filter("." + a + "next").addClass(e).attr("tabindex", "-1") : i.directionNav.removeClass(e).removeAttr("tabindex")
                        }
                    },
                    pausePlay: {
                        setup: function() {
                            var t = e('<div class="' + a + 'pauseplay"><a></a></div>');
                            i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = e("." + a + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = e("." + a + "pauseplay a", i)),
                            m.pausePlay.update(i.vars.slideshow ? a + "pause": a + "play"),
                            i.pausePlay.bind(l,
                            function(t) {
                                t.preventDefault(),
                                ("" === c || c === t.type) && (e(this).hasClass(a + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())),
                                "" === c && (c = t.type),
                                m.setToClearWatchedEvent()
                            })
                        },
                        update: function(e) {
                            "play" === e ? i.pausePlay.removeClass(a + "pause").addClass(a + "play").html(i.vars.playText) : i.pausePlay.removeClass(a + "play").addClass(a + "pause").html(i.vars.pauseText)
                        }
                    },
                    touch: function() {
                        function e(e) {
                            e.stopPropagation(),
                            i.animating ? e.preventDefault() : (i.pause(), t._gesture.addPointer(e.pointerId), C = 0, c = u ? i.h: i.w, m = Number(new Date), l = h && d && i.animatingTo === i.last ? 0 : h && d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo: h && i.currentSlide === i.last ? i.limit: h ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide: d ? (i.last - i.currentSlide + i.cloneOffset) * c: (i.currentSlide + i.cloneOffset) * c)
                        }
                        function n(e) {
                            e.stopPropagation();
                            var n = e.target._slider;
                            if (n) {
                                var i = -e.translationX,
                                o = -e.translationY;
                                return C += u ? o: i,
                                p = C,
                                y = u ? Math.abs(C) < Math.abs( - i) : Math.abs(C) < Math.abs( - o),
                                e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                    t._gesture.stop()
                                }) : void((!y || Number(new Date) - m > 500) && (e.preventDefault(), !f && n.transitions && (n.vars.animationLoop || (p = C / (0 === n.currentSlide && 0 > C || n.currentSlide === n.last && C > 0 ? Math.abs(C) / c + 2 : 1)), n.setProps(l + p, "setTouch"))))
                            }
                        }
                        function o(e) {
                            e.stopPropagation();
                            var t = e.target._slider;
                            if (t) {
                                if (t.animatingTo === t.currentSlide && !y && null !== p) {
                                    var n = d ? -p: p,
                                    i = t.getTarget(n > 0 ? "next": "prev");
                                    t.canAdvance(i) && (Number(new Date) - m < 550 && Math.abs(n) > 50 || Math.abs(n) > c / 2) ? t.flexAnimate(i, t.vars.pauseOnAction) : f || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                                }
                                a = null,
                                s = null,
                                p = null,
                                l = null,
                                C = 0
                            }
                        }
                        var a, s, l, c, p, m, g, v, b, y = !1,
                        w = 0,
                        x = 0,
                        C = 0;
                        r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = i, t.addEventListener("MSGestureChange", n, !1), t.addEventListener("MSGestureEnd", o, !1)) : (g = function(e) {
                            i.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (i.pause(), c = u ? i.h: i.w, m = Number(new Date), w = e.touches[0].pageX, x = e.touches[0].pageY, l = h && d && i.animatingTo === i.last ? 0 : h && d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo: h && i.currentSlide === i.last ? i.limit: h ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide: d ? (i.last - i.currentSlide + i.cloneOffset) * c: (i.currentSlide + i.cloneOffset) * c, a = u ? x: w, s = u ? w: x, t.addEventListener("touchmove", v, !1), t.addEventListener("touchend", b, !1))
                        },
                        v = function(e) {
                            w = e.touches[0].pageX,
                            x = e.touches[0].pageY,
                            p = u ? a - x: a - w,
                            y = u ? Math.abs(p) < Math.abs(w - s) : Math.abs(p) < Math.abs(x - s);
                            var t = 500; (!y || Number(new Date) - m > t) && (e.preventDefault(), !f && i.transitions && (i.vars.animationLoop || (p /= 0 === i.currentSlide && 0 > p || i.currentSlide === i.last && p > 0 ? Math.abs(p) / c + 2 : 1), i.setProps(l + p, "setTouch")))
                        },
                        b = function(e) {
                            if (t.removeEventListener("touchmove", v, !1), i.animatingTo === i.currentSlide && !y && null !== p) {
                                var n = d ? -p: p,
                                o = i.getTarget(n > 0 ? "next": "prev");
                                i.canAdvance(o) && (Number(new Date) - m < 550 && Math.abs(n) > 50 || Math.abs(n) > c / 2) ? i.flexAnimate(o, i.vars.pauseOnAction) : f || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                            }
                            t.removeEventListener("touchend", b, !1),
                            a = null,
                            s = null,
                            p = null,
                            l = null
                        },
                        t.addEventListener("touchstart", g, !1))
                    },
                    resize: function() { ! i.animating && i.is(":visible") && (h || i.doMath(), f ? m.smoothHeight() : h ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : u ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && m.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
                    },
                    smoothHeight: function(e) {
                        if (!u || f) {
                            var t = f ? i: i.viewport;
                            e ? t.animate({
                                height: i.slides.eq(i.animatingTo).height()
                            },
                            e) : t.height(i.slides.eq(i.animatingTo).height())
                        }
                    },
                    sync: function(t) {
                        var n = e(i.vars.sync).data("flexslider"),
                        o = i.animatingTo;
                        switch (t) {
                        case "animate":
                            n.flexAnimate(o, i.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            n.playing || n.asNav || n.play();
                            break;
                        case "pause":
                            n.pause()
                        }
                    },
                    uniqueID: function(t) {
                        return t.filter("[id]").add(t.find("[id]")).each(function() {
                            var t = e(this);
                            t.attr("id", t.attr("id") + "_clone")
                        }),
                        t
                    },
                    pauseInvisible: {
                        visProp: null,
                        init: function() {
                            var e = m.pauseInvisible.getHiddenProp();
                            if (e) {
                                var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                                document.addEventListener(t,
                                function() {
                                    m.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
                                })
                            }
                        },
                        isHidden: function() {
                            var e = m.pauseInvisible.getHiddenProp();
                            return e ? document[e] : !1
                        },
                        getHiddenProp: function() {
                            var e = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                            return null
                        }
                    },
                    setToClearWatchedEvent: function() {
                        clearTimeout(o),
                        o = setTimeout(function() {
                            c = ""
                        },
                        3e3)
                    }
                },
                i.flexAnimate = function(t, n, o, r, l) {
                    if (i.vars.animationLoop || t === i.currentSlide || (i.direction = t > i.currentSlide ? "next": "prev"), p && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next": "prev"), !i.animating && (i.canAdvance(t, l) || o) && i.is(":visible")) {
                        if (p && r) {
                            var c = e(i.vars.asNavFor).data("flexslider");
                            if (i.atEnd = 0 === t || t === i.count - 1, c.flexAnimate(t, !0, !1, !0, l), i.direction = i.currentItem < t ? "next": "prev", c.direction = i.direction, Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t) return i.currentItem = t,
                            i.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"),
                            !1;
                            i.currentItem = t,
                            i.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"),
                            t = Math.floor(t / i.visible)
                        }
                        if (i.animating = !0, i.animatingTo = t, n && i.pause(), i.vars.before(i), i.syncExists && !l && m.sync("animate"), i.vars.controlNav && m.controlNav.active(), h || i.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), i.atEnd = 0 === t || t === i.last, i.vars.directionNav && m.directionNav.update(), t === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), f) s ? (i.slides.eq(i.currentSlide).css({
                            opacity: 0,
                            zIndex: 1
                        }), i.slides.eq(t).css({
                            opacity: 1,
                            zIndex: 2
                        }), i.wrapup(y)) : (i.slides.eq(i.currentSlide).css({
                            zIndex: 1
                        }).animate({
                            opacity: 0
                        },
                        i.vars.animationSpeed, i.vars.easing), i.slides.eq(t).css({
                            zIndex: 2
                        }).animate({
                            opacity: 1
                        },
                        i.vars.animationSpeed, i.vars.easing, i.wrapup));
                        else {
                            var g, v, b, y = u ? i.slides.filter(":first").height() : i.computedW;
                            h ? (g = i.vars.itemMargin, b = (i.itemW + g) * i.move * i.animatingTo, v = b > i.limit && 1 !== i.visible ? i.limit: b) : v = 0 === i.currentSlide && t === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? d ? (i.count + i.cloneOffset) * y: 0 : i.currentSlide === i.last && 0 === t && i.vars.animationLoop && "prev" !== i.direction ? d ? 0 : (i.count + 1) * y: d ? (i.count - 1 - t + i.cloneOffset) * y: (t + i.cloneOffset) * y,
                            i.setProps(v, "", i.vars.animationSpeed),
                            i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend",
                            function() {
                                clearTimeout(i.ensureAnimationEnd),
                                i.wrapup(y)
                            }), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function() {
                                i.wrapup(y)
                            },
                            i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing,
                            function() {
                                i.wrapup(y)
                            })
                        }
                        i.vars.smoothHeight && m.smoothHeight(i.vars.animationSpeed)
                    }
                },
                i.wrapup = function(e) {
                    f || h || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(e, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(e, "jumpStart")),
                    i.animating = !1,
                    i.currentSlide = i.animatingTo,
                    i.vars.after(i)
                },
                i.animateSlides = function() { ! i.animating && g && i.flexAnimate(i.getTarget("next"))
                },
                i.pause = function() {
                    clearInterval(i.animatedSlides),
                    i.animatedSlides = null,
                    i.playing = !1,
                    i.vars.pausePlay && m.pausePlay.update("play"),
                    i.syncExists && m.sync("pause")
                },
                i.play = function() {
                    i.playing && clearInterval(i.animatedSlides),
                    i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed),
                    i.started = i.playing = !0,
                    i.vars.pausePlay && m.pausePlay.update("pause"),
                    i.syncExists && m.sync("play")
                },
                i.stop = function() {
                    i.pause(),
                    i.stopped = !0
                },
                i.canAdvance = function(e, t) {
                    var n = p ? i.pagingCount - 1 : i.last;
                    return t ? !0 : p && i.currentItem === i.count - 1 && 0 === e && "prev" === i.direction ? !0 : p && 0 === i.currentItem && e === i.pagingCount - 1 && "next" !== i.direction ? !1 : e !== i.currentSlide || p ? i.vars.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && e === n && "next" !== i.direction ? !1 : i.atEnd && i.currentSlide === n && 0 === e && "next" === i.direction ? !1 : !0 : !1
                },
                i.getTarget = function(e) {
                    return i.direction = e,
                    "next" === e ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last: i.currentSlide - 1
                },
                i.setProps = function(e, t, n) {
                    var o = function() {
                        var n = e ? e: (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo,
                        o = function() {
                            if (h) return "setTouch" === t ? e: d && i.animatingTo === i.last ? 0 : d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo: i.animatingTo === i.last ? i.limit: n;
                            switch (t) {
                            case "setTotal":
                                return d ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e: (i.currentSlide + i.cloneOffset) * e;
                            case "setTouch":
                                return d ? e: e;
                            case "jumpEnd":
                                return d ? e: i.count * e;
                            case "jumpStart":
                                return d ? i.count * e: e;
                            default:
                                return e
                            }
                        } ();
                        return - 1 * o + "px"
                    } ();
                    i.transitions && (o = u ? "translate3d(0," + o + ",0)": "translate3d(" + o + ",0,0)", n = void 0 !== n ? n / 1e3 + "s": "0s", i.container.css("-" + i.pfx + "-transition-duration", n), i.container.css("transition-duration", n)),
                    i.args[i.prop] = o,
                    (i.transitions || void 0 === n) && i.container.css(i.args),
                    i.container.css("transform", o)
                },
                i.setup = function(t) {
                    if (f) i.slides.css({
                        width: "100%",
                        "float": "left",
                        marginRight: "-100%",
                        position: "relative"
                    }),
                    "init" === t && (s ? i.slides.css({
                        opacity: 0,
                        display: "block",
                        webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                        zIndex: 1
                    }).eq(i.currentSlide).css({
                        opacity: 1,
                        zIndex: 2
                    }) : 0 == i.vars.fadeFirstSlide ? i.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(i.currentSlide).css({
                        zIndex: 2
                    }).css({
                        opacity: 1
                    }) : i.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(i.currentSlide).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    },
                    i.vars.animationSpeed, i.vars.easing)),
                    i.vars.smoothHeight && m.smoothHeight();
                    else {
                        var n, o;
                        "init" === t && (i.viewport = e('<div class="' + a + 'viewport"></div>').css({
                            overflow: "hidden",
                            position: "relative"
                        }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, d && (o = e.makeArray(i.slides).reverse(), i.slides = e(o), i.container.empty().append(i.slides))),
                        i.vars.animationLoop && !h && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(m.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                        i.newSlides = e(i.vars.selector, i),
                        n = d ? i.count - 1 - i.currentSlide + i.cloneOffset: i.currentSlide + i.cloneOffset,
                        u && !h ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                            i.newSlides.css({
                                display: "block"
                            }),
                            i.doMath(),
                            i.viewport.height(i.h),
                            i.setProps(n * i.h, "init")
                        },
                        "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(n * i.computedW, "init"), setTimeout(function() {
                            i.doMath(),
                            i.newSlides.css({
                                width: i.computedW,
                                "float": "left",
                                display: "block"
                            }),
                            i.vars.smoothHeight && m.smoothHeight()
                        },
                        "init" === t ? 100 : 0))
                    }
                    h || i.slides.removeClass(a + "active-slide").eq(i.currentSlide).addClass(a + "active-slide"),
                    i.vars.init(i)
                },
                i.doMath = function() {
                    var e = i.slides.first(),
                    t = i.vars.itemMargin,
                    n = i.vars.minItems,
                    o = i.vars.maxItems;
                    i.w = void 0 === i.viewport ? i.width() : i.viewport.width(),
                    i.h = e.height(),
                    i.boxPadding = e.outerWidth() - e.width(),
                    h ? (i.itemT = i.vars.itemWidth + t, i.minW = n ? n * i.itemT: i.w, i.maxW = o ? o * i.itemT - t: i.w, i.itemW = i.minW > i.w ? (i.w - t * (n - 1)) / n: i.maxW < i.w ? (i.w - t * (o - 1)) / o: i.vars.itemWidth > i.w ? i.w: i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move: i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + t * (i.count - 1) : (i.itemW + t) * i.count - i.w - t) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1),
                    i.computedW = i.itemW - i.boxPadding
                },
                i.update = function(e, t) {
                    i.doMath(),
                    h || (e < i.currentSlide ? i.currentSlide += 1 : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1), i.animatingTo = i.currentSlide),
                    i.vars.controlNav && !i.manualControls && ("add" === t && !h || i.pagingCount > i.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !h || i.pagingCount < i.controlNav.length) && (h && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), m.controlNav.update("remove", i.last))),
                    i.vars.directionNav && m.directionNav.update()
                },
                i.addSlide = function(t, n) {
                    var o = e(t);
                    i.count += 1,
                    i.last = i.count - 1,
                    u && d ? void 0 !== n ? i.slides.eq(i.count - n).after(o) : i.container.prepend(o) : void 0 !== n ? i.slides.eq(n).before(o) : i.container.append(o),
                    i.update(n, "add"),
                    i.slides = e(i.vars.selector + ":not(.clone)", i),
                    i.setup(),
                    i.vars.added(i)
                },
                i.removeSlide = function(t) {
                    var n = isNaN(t) ? i.slides.index(e(t)) : t;
                    i.count -= 1,
                    i.last = i.count - 1,
                    isNaN(t) ? e(t, i.slides).remove() : u && d ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(),
                    i.doMath(),
                    i.update(n, "remove"),
                    i.slides = e(i.vars.selector + ":not(.clone)", i),
                    i.setup(),
                    i.vars.removed(i)
                },
                m.init()
            },
            e(window).blur(function(e) {
                focused = !1
            }).focus(function(e) {
                focused = !0
            }),
            e.flexslider.defaults = {
                namespace: "flex-",
                selector: ".slides > li",
                animation: "fade",
                easing: "swing",
                direction: "horizontal",
                reverse: !1,
                animationLoop: !0,
                smoothHeight: !1,
                startAt: 0,
                slideshow: !0,
                slideshowSpeed: 7e3,
                animationSpeed: 600,
                initDelay: 0,
                randomize: !1,
                fadeFirstSlide: !0,
                thumbCaptions: !1,
                pauseOnAction: !0,
                pauseOnHover: !1,
                pauseInvisible: !0,
                useCSS: !0,
                touch: !0,
                video: !1,
                controlNav: !0,
                directionNav: !0,
                prevText: "Previous",
                nextText: "Next",
                keyboard: !0,
                multipleKeyboard: !1,
                mousewheel: !1,
                pausePlay: !1,
                pauseText: "Pause",
                playText: "Play",
                controlsContainer: "",
                manualControls: "",
                customDirectionNav: "",
                sync: "",
                asNavFor: "",
                itemWidth: 0,
                itemMargin: 0,
                minItems: 1,
                maxItems: 0,
                move: 0,
                allowOneSlide: !0,
                start: function() {},
                before: function() {},
                after: function() {},
                end: function() {},
                added: function() {},
                removed: function() {},
                init: function() {}
            },
            e.fn.flexslider = function(t) {
                if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
                    var n = e(this),
                    i = t.selector ? t.selector: ".slides > li",
                    o = n.find(i);
                    1 === o.length && t.allowOneSlide === !0 || 0 === o.length ? (o.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t)
                });
                var n = e(this).data("flexslider");
                switch (t) {
                case "play":
                    n.play();
                    break;
                case "pause":
                    n.pause();
                    break;
                case "stop":
                    n.stop();
                    break;
                case "next":
                    n.flexAnimate(n.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    n.flexAnimate(n.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof t && n.flexAnimate(t, !0)
                }
            }
        } (jQuery)
    },
    86 : function(e, t) {
        /*! jQuery UI - v1.9.2 - 2015-06-15
	* http://jqueryui.com
	* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
	* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
        !
        function(e, t) {
            function n(t, n) {
                var o, a, r, s = t.nodeName.toLowerCase();
                return "area" === s ? (o = t.parentNode, a = o.name, t.href && a && "map" === o.nodeName.toLowerCase() ? (r = e("img[usemap=#" + a + "]")[0], !!r && i(r)) : !1) : (/input|select|textarea|button|object/.test(s) ? !t.disabled: "a" === s ? t.href || n: n) && i(t)
            }
            function i(t) {
                return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
                    return "hidden" === e.css(this, "visibility")
                }).length
            }
            var o = 0,
            a = /^ui-id-\d+$/;
            e.ui = e.ui || {},
            e.ui.version || (e.extend(e.ui, {
                version: "1.9.2",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }), e.fn.extend({
                _focus: e.fn.focus,
                focus: function(t, n) {
                    return "number" == typeof t ? this.each(function() {
                        var i = this;
                        setTimeout(function() {
                            e(i).focus(),
                            n && n.call(i)
                        },
                        t)
                    }) : this._focus.apply(this, arguments)
                },
                scrollParent: function() {
                    var t;
                    return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                    }).eq(0) : this.parents().filter(function() {
                        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                    }).eq(0),
                    /fixed/.test(this.css("position")) || !t.length ? e(document) : t
                },
                zIndex: function(n) {
                    if (n !== t) return this.css("zIndex", n);
                    if (this.length) for (var i, o, a = e(this[0]); a.length && a[0] !== document;) {
                        if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (o = parseInt(a.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
                        a = a.parent()
                    }
                    return 0
                },
                uniqueId: function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++o)
                    })
                },
                removeUniqueId: function() {
                    return this.each(function() {
                        a.test(this.id) && e(this).removeAttr("id")
                    })
                }
            }), e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                    return function(n) {
                        return !! e.data(n, t)
                    }
                }) : function(t, n, i) {
                    return !! e.data(t, i[3])
                },
                focusable: function(t) {
                    return n(t, !isNaN(e.attr(t, "tabindex")))
                },
                tabbable: function(t) {
                    var i = e.attr(t, "tabindex"),
                    o = isNaN(i);
                    return (o || i >= 0) && n(t, !o)
                }
            }), e(function() {
                var t = document.body,
                n = t.appendChild(n = document.createElement("div"));
                n.offsetHeight,
                e.extend(n.style, {
                    minHeight: "100px",
                    height: "auto",
                    padding: 0,
                    borderWidth: 0
                }),
                e.support.minHeight = 100 === n.offsetHeight,
                e.support.selectstart = "onselectstart" in n,
                t.removeChild(n).style.display = "none"
            }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"],
            function(n, i) {
                function o(t, n, i, o) {
                    return e.each(a,
                    function() {
                        n -= parseFloat(e.css(t, "padding" + this)) || 0,
                        i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                        o && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                    }),
                    n
                }
                var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                r = i.toLowerCase(),
                s = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
                e.fn["inner" + i] = function(n) {
                    return n === t ? s["inner" + i].call(this) : this.each(function() {
                        e(this).css(r, o(this, n) + "px")
                    })
                },
                e.fn["outer" + i] = function(t, n) {
                    return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function() {
                        e(this).css(r, o(this, t, !0, n) + "px")
                    })
                }
            }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
                return function(n) {
                    return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
                }
            } (e.fn.removeData)),
            function() {
                var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
                e.ui.ie = t.length ? !0 : !1,
                e.ui.ie6 = 6 === parseFloat(t[1], 10)
            } (), e.fn.extend({
                disableSelection: function() {
                    return this.bind((e.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
                    function(e) {
                        e.preventDefault()
                    })
                },
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                }
            }), e.extend(e.ui, {
                plugin: {
                    add: function(t, n, i) {
                        var o, a = e.ui[t].prototype;
                        for (o in i) a.plugins[o] = a.plugins[o] || [],
                        a.plugins[o].push([n, i[o]])
                    },
                    call: function(e, t, n) {
                        var i, o = e.plugins[t];
                        if (o && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (i = 0; i < o.length; i++) e.options[o[i][0]] && o[i][1].apply(e.element, n)
                    }
                },
                contains: e.contains,
                hasScroll: function(t, n) {
                    if ("hidden" === e(t).css("overflow")) return ! 1;
                    var i = n && "left" === n ? "scrollLeft": "scrollTop",
                    o = !1;
                    return t[i] > 0 ? !0 : (t[i] = 1, o = t[i] > 0, t[i] = 0, o)
                },
                isOverAxis: function(e, t, n) {
                    return e > t && t + n > e
                },
                isOver: function(t, n, i, o, a, r) {
                    return e.ui.isOverAxis(t, i, a) && e.ui.isOverAxis(n, o, r)
                }
            }))
        } (jQuery),
        function(e, t) {
            var n = 0,
            i = Array.prototype.slice,
            o = e.cleanData;
            e.cleanData = function(t) {
                for (var n, i = 0; null != (n = t[i]); i++) try {
                    e(n).triggerHandler("remove")
                } catch(a) {}
                o(t)
            },
            e.widget = function(t, n, i) {
                var o, a, r, s, l = t.split(".")[0];
                t = t.split(".")[1],
                o = l + "-" + t,
                i || (i = n, n = e.Widget),
                e.expr[":"][o.toLowerCase()] = function(t) {
                    return !! e.data(t, o)
                },
                e[l] = e[l] || {},
                a = e[l][t],
                r = e[l][t] = function(e, t) {
                    return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
                },
                e.extend(r, a, {
                    version: i.version,
                    _proto: e.extend({},
                    i),
                    _childConstructors: []
                }),
                s = new n,
                s.options = e.widget.extend({},
                s.options),
                e.each(i,
                function(t, o) {
                    e.isFunction(o) && (i[t] = function() {
                        var e = function() {
                            return n.prototype[t].apply(this, arguments)
                        },
                        i = function(e) {
                            return n.prototype[t].apply(this, e)
                        };
                        return function() {
                            var t, n = this._super,
                            a = this._superApply;
                            return this._super = e,
                            this._superApply = i,
                            t = o.apply(this, arguments),
                            this._super = n,
                            this._superApply = a,
                            t
                        }
                    } ())
                }),
                r.prototype = e.widget.extend(s, {
                    widgetEventPrefix: a ? s.widgetEventPrefix: t
                },
                i, {
                    constructor: r,
                    namespace: l,
                    widgetName: t,
                    widgetBaseClass: o,
                    widgetFullName: o
                }),
                a ? (e.each(a._childConstructors,
                function(t, n) {
                    var i = n.prototype;
                    e.widget(i.namespace + "." + i.widgetName, r, n._proto)
                }), delete a._childConstructors) : n._childConstructors.push(r),
                e.widget.bridge(t, r)
            },
            e.widget.extend = function(n) {
                for (var o, a, r = i.call(arguments, 1), s = 0, l = r.length; l > s; s++) for (o in r[s]) a = r[s][o],
                r[s].hasOwnProperty(o) && a !== t && (e.isPlainObject(a) ? n[o] = e.isPlainObject(n[o]) ? e.widget.extend({},
                n[o], a) : e.widget.extend({},
                a) : n[o] = a);
                return n
            },
            e.widget.bridge = function(n, o) {
                var a = o.prototype.widgetFullName || n;
                e.fn[n] = function(r) {
                    var s = "string" == typeof r,
                    l = i.call(arguments, 1),
                    c = this;
                    return r = !s && l.length ? e.widget.extend.apply(null, [r].concat(l)) : r,
                    s ? this.each(function() {
                        var i, o = e.data(this, a);
                        return o ? e.isFunction(o[r]) && "_" !== r.charAt(0) ? (i = o[r].apply(o, l), i !== o && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + r + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + r + "'")
                    }) : this.each(function() {
                        var t = e.data(this, a);
                        t ? t.option(r || {})._init() : e.data(this, a, new o(r, this))
                    }),
                    c
                }
            },
            e.Widget = function() {},
            e.Widget._childConstructors = [],
            e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(t, i) {
                    i = e(i || this.defaultElement || this)[0],
                    this.element = e(i),
                    this.uuid = n++,
                    this.eventNamespace = "." + this.widgetName + this.uuid,
                    this.options = e.widget.extend({},
                    this.options, this._getCreateOptions(), t),
                    this.bindings = e(),
                    this.hoverable = e(),
                    this.focusable = e(),
                    i !== this && (e.data(i, this.widgetName, this), e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(e) {
                            e.target === i && this.destroy()
                        }
                    }), this.document = e(i.style ? i.ownerDocument: i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init()
                },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    this._destroy(),
                    this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                    this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus")
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element
                },
                option: function(n, i) {
                    var o, a, r, s = n;
                    if (0 === arguments.length) return e.widget.extend({},
                    this.options);
                    if ("string" == typeof n) if (s = {},
                    o = n.split("."), n = o.shift(), o.length) {
                        for (a = s[n] = e.widget.extend({},
                        this.options[n]), r = 0; r < o.length - 1; r++) a[o[r]] = a[o[r]] || {},
                        a = a[o[r]];
                        if (n = o.pop(), i === t) return a[n] === t ? null: a[n];
                        a[n] = i
                    } else {
                        if (i === t) return this.options[n] === t ? null: this.options[n];
                        s[n] = i
                    }
                    return this._setOptions(s),
                    this
                },
                _setOptions: function(e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this
                },
                _setOption: function(e, t) {
                    return this.options[e] = t,
                    "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
                    this
                },
                enable: function() {
                    return this._setOption("disabled", !1)
                },
                disable: function() {
                    return this._setOption("disabled", !0)
                },
                _on: function(t, n, i) {
                    var o, a = this;
                    "boolean" != typeof t && (i = n, n = t, t = !1),
                    i ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()),
                    e.each(i,
                    function(i, r) {
                        function s() {
                            return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : void 0
                        }
                        "string" != typeof r && (s.guid = r.guid = r.guid || s.guid || e.guid++);
                        var l = i.match(/^(\w+)\s*(.*)$/),
                        c = l[1] + a.eventNamespace,
                        u = l[2];
                        u ? o.delegate(u, c, s) : n.bind(c, s)
                    })
                },
                _off: function(e, t) {
                    t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                    e.unbind(t).undelegate(t)
                },
                _delay: function(e, t) {
                    function n() {
                        return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                    }
                    var i = this;
                    return setTimeout(n, t || 0)
                },
                _hoverable: function(t) {
                    this.hoverable = this.hoverable.add(t),
                    this._on(t, {
                        mouseenter: function(t) {
                            e(t.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function(t) {
                            e(t.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t),
                    this._on(t, {
                        focusin: function(t) {
                            e(t.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function(t) {
                            e(t.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                },
                _trigger: function(t, n, i) {
                    var o, a, r = this.options[t];
                    if (i = i || {},
                    n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t: this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], a = n.originalEvent) for (o in a) o in n || (n[o] = a[o]);
                    return this.element.trigger(n, i),
                    !(e.isFunction(r) && r.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
                }
            },
            e.each({
                show: "fadeIn",
                hide: "fadeOut"
            },
            function(t, n) {
                e.Widget.prototype["_" + t] = function(i, o, a) {
                    "string" == typeof o && (o = {
                        effect: o
                    });
                    var r, s = o ? o === !0 || "number" == typeof o ? n: o.effect || n: t;
                    o = o || {},
                    "number" == typeof o && (o = {
                        duration: o
                    }),
                    r = !e.isEmptyObject(o),
                    o.complete = a,
                    o.delay && i.delay(o.delay),
                    r && e.effects && (e.effects.effect[s] || e.uiBackCompat !== !1 && e.effects[s]) ? i[t](o) : s !== t && i[s] ? i[s](o.duration, o.easing, a) : i.queue(function(n) {
                        e(this)[t](),
                        a && a.call(i[0]),
                        n()
                    })
                }
            }),
            e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
                return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
            })
        } (jQuery),
        function(e, t) {
            var n = !1;
            e(document).mouseup(function(e) {
                n = !1
            }),
            e.widget("ui.mouse", {
                version: "1.9.2",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.bind("mousedown." + this.widgetName,
                    function(e) {
                        return t._mouseDown(e)
                    }).bind("click." + this.widgetName,
                    function(n) {
                        return ! 0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                    }),
                    this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName),
                    this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(t) {
                    if (!n) {
                        this._mouseStarted && this._mouseUp(t),
                        this._mouseDownEvent = t;
                        var i = this,
                        o = 1 === t.which,
                        a = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length: !1;
                        return o && !a && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        },
                        this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                            return i._mouseMove(e)
                        },
                        this._mouseUpDelegate = function(e) {
                            return i._mouseUp(e)
                        },
                        e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0)) : !0
                    }
                },
                _mouseMove: function(t) {
                    return ! e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
                },
                _mouseUp: function(t) {
                    return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
                    !1
                },
                _mouseDistanceMet: function(e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function(e) {
                    return this.mouseDelayMet
                },
                _mouseStart: function(e) {},
                _mouseDrag: function(e) {},
                _mouseStop: function(e) {},
                _mouseCapture: function(e) {
                    return ! 0
                }
            })
        } (jQuery),
        function(e, t) {
            function n(e, t, n) {
                return [parseInt(e[0], 10) * (h.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (h.test(e[1]) ? n / 100 : 1)]
            }
            function i(t, n) {
                return parseInt(e.css(t, n), 10) || 0
            }
            e.ui = e.ui || {};
            var o, a = Math.max,
            r = Math.abs,
            s = Math.round,
            l = /left|center|right/,
            c = /top|center|bottom/,
            u = /[\+\-]\d+%?/,
            d = /^\w+/,
            h = /%$/,
            f = e.fn.position;
            e.position = {
                scrollbarWidth: function() {
                    if (o !== t) return o;
                    var n, i, a = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    r = a.children()[0];
                    return e("body").append(a),
                    n = r.offsetWidth,
                    a.css("overflow", "scroll"),
                    i = r.offsetWidth,
                    n === i && (i = a[0].clientWidth),
                    a.remove(),
                    o = n - i
                },
                getScrollInfo: function(t) {
                    var n = t.isWindow ? "": t.element.css("overflow-x"),
                    i = t.isWindow ? "": t.element.css("overflow-y"),
                    o = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
                    a = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                    return {
                        width: o ? e.position.scrollbarWidth() : 0,
                        height: a ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var n = e(t || window),
                    i = e.isWindow(n[0]);
                    return {
                        element: n,
                        isWindow: i,
                        offset: n.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: i ? n.width() : n.outerWidth(),
                        height: i ? n.height() : n.outerHeight()
                    }
                }
            },
            e.fn.position = function(t) {
                if (!t || !t.of) return f.apply(this, arguments);
                t = e.extend({},
                t);
                var o, h, p, m, g, v = e(t.of),
                b = e.position.getWithinInfo(t.within),
                y = e.position.getScrollInfo(b),
                w = v[0],
                x = (t.collision || "flip").split(" "),
                C = {};
                return 9 === w.nodeType ? (h = v.width(), p = v.height(), m = {
                    top: 0,
                    left: 0
                }) : e.isWindow(w) ? (h = v.width(), p = v.height(), m = {
                    top: v.scrollTop(),
                    left: v.scrollLeft()
                }) : w.preventDefault ? (t.at = "left top", h = p = 0, m = {
                    top: w.pageY,
                    left: w.pageX
                }) : (h = v.outerWidth(), p = v.outerHeight(), m = v.offset()),
                g = e.extend({},
                m),
                e.each(["my", "at"],
                function() {
                    var e, n, i = (t[this] || "").split(" ");
                    1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                    i[0] = l.test(i[0]) ? i[0] : "center",
                    i[1] = c.test(i[1]) ? i[1] : "center",
                    e = u.exec(i[0]),
                    n = u.exec(i[1]),
                    C[this] = [e ? e[0] : 0, n ? n[0] : 0],
                    t[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                }),
                1 === x.length && (x[1] = x[0]),
                "right" === t.at[0] ? g.left += h: "center" === t.at[0] && (g.left += h / 2),
                "bottom" === t.at[1] ? g.top += p: "center" === t.at[1] && (g.top += p / 2),
                o = n(C.at, h, p),
                g.left += o[0],
                g.top += o[1],
                this.each(function() {
                    var l, c, u = e(this),
                    d = u.outerWidth(),
                    f = u.outerHeight(),
                    w = i(this, "marginLeft"),
                    _ = i(this, "marginTop"),
                    S = d + w + i(this, "marginRight") + y.width,
                    $ = f + _ + i(this, "marginBottom") + y.height,
                    E = e.extend({},
                    g),
                    T = n(C.my, u.outerWidth(), u.outerHeight());
                    "right" === t.my[0] ? E.left -= d: "center" === t.my[0] && (E.left -= d / 2),
                    "bottom" === t.my[1] ? E.top -= f: "center" === t.my[1] && (E.top -= f / 2),
                    E.left += T[0],
                    E.top += T[1],
                    e.support.offsetFractions || (E.left = s(E.left), E.top = s(E.top)),
                    l = {
                        marginLeft: w,
                        marginTop: _
                    },
                    e.each(["left", "top"],
                    function(n, i) {
                        e.ui.position[x[n]] && e.ui.position[x[n]][i](E, {
                            targetWidth: h,
                            targetHeight: p,
                            elemWidth: d,
                            elemHeight: f,
                            collisionPosition: l,
                            collisionWidth: S,
                            collisionHeight: $,
                            offset: [o[0] + T[0], o[1] + T[1]],
                            my: t.my,
                            at: t.at,
                            within: b,
                            elem: u
                        })
                    }),
                    e.fn.bgiframe && u.bgiframe(),
                    t.using && (c = function(e) {
                        var n = m.left - E.left,
                        i = n + h - d,
                        o = m.top - E.top,
                        s = o + p - f,
                        l = {
                            target: {
                                element: v,
                                left: m.left,
                                top: m.top,
                                width: h,
                                height: p
                            },
                            element: {
                                element: u,
                                left: E.left,
                                top: E.top,
                                width: d,
                                height: f
                            },
                            horizontal: 0 > i ? "left": n > 0 ? "right": "center",
                            vertical: 0 > s ? "top": o > 0 ? "bottom": "middle"
                        };
                        d > h && r(n + i) < h && (l.horizontal = "center"),
                        f > p && r(o + s) < p && (l.vertical = "middle"),
                        a(r(n), r(i)) > a(r(o), r(s)) ? l.important = "horizontal": l.important = "vertical",
                        t.using.call(this, e, l)
                    }),
                    u.offset(e.extend(E, {
                        using: c
                    }))
                })
            },
            e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var n, i = t.within,
                        o = i.isWindow ? i.scrollLeft: i.offset.left,
                        r = i.width,
                        s = e.left - t.collisionPosition.marginLeft,
                        l = o - s,
                        c = s + t.collisionWidth - r - o;
                        t.collisionWidth > r ? l > 0 && 0 >= c ? (n = e.left + l + t.collisionWidth - r - o, e.left += l - n) : c > 0 && 0 >= l ? e.left = o: l > c ? e.left = o + r - t.collisionWidth: e.left = o: l > 0 ? e.left += l: c > 0 ? e.left -= c: e.left = a(e.left - s, e.left)
                    },
                    top: function(e, t) {
                        var n, i = t.within,
                        o = i.isWindow ? i.scrollTop: i.offset.top,
                        r = t.within.height,
                        s = e.top - t.collisionPosition.marginTop,
                        l = o - s,
                        c = s + t.collisionHeight - r - o;
                        t.collisionHeight > r ? l > 0 && 0 >= c ? (n = e.top + l + t.collisionHeight - r - o, e.top += l - n) : c > 0 && 0 >= l ? e.top = o: l > c ? e.top = o + r - t.collisionHeight: e.top = o: l > 0 ? e.top += l: c > 0 ? e.top -= c: e.top = a(e.top - s, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var n, i, o = t.within,
                        a = o.offset.left + o.scrollLeft,
                        s = o.width,
                        l = o.isWindow ? o.scrollLeft: o.offset.left,
                        c = e.left - t.collisionPosition.marginLeft,
                        u = c - l,
                        d = c + t.collisionWidth - s - l,
                        h = "left" === t.my[0] ? -t.elemWidth: "right" === t.my[0] ? t.elemWidth: 0,
                        f = "left" === t.at[0] ? t.targetWidth: "right" === t.at[0] ? -t.targetWidth: 0,
                        p = -2 * t.offset[0];
                        0 > u ? (n = e.left + h + f + p + t.collisionWidth - s - a, (0 > n || n < r(u)) && (e.left += h + f + p)) : d > 0 && (i = e.left - t.collisionPosition.marginLeft + h + f + p - l, (i > 0 || r(i) < d) && (e.left += h + f + p))
                    },
                    top: function(e, t) {
                        var n, i, o = t.within,
                        a = o.offset.top + o.scrollTop,
                        s = o.height,
                        l = o.isWindow ? o.scrollTop: o.offset.top,
                        c = e.top - t.collisionPosition.marginTop,
                        u = c - l,
                        d = c + t.collisionHeight - s - l,
                        h = "top" === t.my[1],
                        f = h ? -t.elemHeight: "bottom" === t.my[1] ? t.elemHeight: 0,
                        p = "top" === t.at[1] ? t.targetHeight: "bottom" === t.at[1] ? -t.targetHeight: 0,
                        m = -2 * t.offset[1];
                        0 > u ? (i = e.top + f + p + m + t.collisionHeight - s - a, e.top + f + p + m > u && (0 > i || i < r(u)) && (e.top += f + p + m)) : d > 0 && (n = e.top - t.collisionPosition.marginTop + f + p + m - l, e.top + f + p + m > d && (n > 0 || r(n) < d) && (e.top += f + p + m))
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments),
                        e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments),
                        e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, n, i, o, a, r = document.getElementsByTagName("body")[0],
                s = document.createElement("div");
                t = document.createElement(r ? "div": "body"),
                i = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                },
                r && e.extend(i, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (a in i) t.style[a] = i[a];
                t.appendChild(s),
                n = r || document.documentElement,
                n.insertBefore(t, n.firstChild),
                s.style.cssText = "position: absolute; left: 10.7432222px;",
                o = e(s).offset().left,
                e.support.offsetFractions = o > 10 && 11 > o,
                t.innerHTML = "",
                n.removeChild(t)
            } (),
            e.uiBackCompat !== !1 && !
            function(e) {
                var n = e.fn.position;
                e.fn.position = function(i) {
                    if (!i || !i.offset) return n.call(this, i);
                    var o = i.offset.split(" "),
                    a = i.at.split(" ");
                    return 1 === o.length && (o[1] = o[0]),
                    /^\d/.test(o[0]) && (o[0] = "+" + o[0]),
                    /^\d/.test(o[1]) && (o[1] = "+" + o[1]),
                    1 === a.length && (/left|center|right/.test(a[0]) ? a[1] = "center": (a[1] = a[0], a[0] = "center")),
                    n.call(this, e.extend(i, {
                        at: a[0] + o[0] + " " + a[1] + o[1],
                        offset: t
                    }))
                }
            } (jQuery)
        } (jQuery),
        function(e, t) {
            e.widget("ui.draggable", e.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1
                },
                _create: function() {
                    "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
                    this.options.addClasses && this.element.addClass("ui-draggable"),
                    this.options.disabled && this.element.addClass("ui-draggable-disabled"),
                    this._mouseInit()
                },
                _destroy: function() {
                    this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
                    this._mouseDestroy()
                },
                _mouseCapture: function(t) {
                    var n = this.options;
                    return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe": n.iframeFix).each(function() {
                        e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                            width: this.offsetWidth + "px",
                            height: this.offsetHeight + "px",
                            position: "absolute",
                            opacity: "0.001",
                            zIndex: 1e3
                        }).css(e(this).offset()).appendTo("body")
                    }), !0) : !1)
                },
                _mouseStart: function(t) {
                    var n = this.options;
                    return this.helper = this._createHelper(t),
                    this.helper.addClass("ui-draggable-dragging"),
                    this._cacheHelperProportions(),
                    e.ui.ddmanager && (e.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    this.cssPosition = this.helper.css("position"),
                    this.scrollParent = this.helper.scrollParent(),
                    this.offset = this.positionAbs = this.element.offset(),
                    this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    },
                    e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }),
                    this.originalPosition = this.position = this._generatePosition(t),
                    this.originalPageX = t.pageX,
                    this.originalPageY = t.pageY,
                    n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
                    n.containment && this._setContainment(),
                    this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
                },
                _mouseDrag: function(t, n) {
                    if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                        var i = this._uiHash();
                        if (this._trigger("drag", t, i) === !1) return this._mouseUp({}),
                        !1;
                        this.position = i.position
                    }
                    return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
                    this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
                    e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
                    !1
                },
                _mouseStop: function(t) {
                    var n = !1;
                    e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)),
                    this.dropped && (n = this.dropped, this.dropped = !1);
                    for (var i = this.element[0], o = !1; i && (i = i.parentNode);) i == document && (o = !0);
                    if (!o && "original" === this.options.helper) return ! 1;
                    if ("invalid" == this.options.revert && !n || "valid" == this.options.revert && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                        var a = this;
                        e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
                        function() {
                            a._trigger("stop", t) !== !1 && a._clear()
                        })
                    } else this._trigger("stop", t) !== !1 && this._clear();
                    return ! 1
                },
                _mouseUp: function(t) {
                    return e("div.ui-draggable-iframeFix").each(function() {
                        this.parentNode.removeChild(this)
                    }),
                    e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
                    e.ui.mouse.prototype._mouseUp.call(this, t)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
                    this
                },
                _getHandle: function(t) {
                    var n = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
                    return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                        this == t.target && (n = !0)
                    }),
                    n
                },
                _createHelper: function(t) {
                    var n = this.options,
                    i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : "clone" == n.helper ? this.element.clone().removeAttr("id") : this.element;
                    return i.parents("body").length || i.appendTo("parent" == n.appendTo ? this.element[0].parentNode: n.appendTo),
                    i[0] == this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"),
                    i
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")),
                    e.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }),
                    "left" in t && (this.offset.click.left = t.left + this.margins.left),
                    "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                    "top" in t && (this.offset.click.top = t.top + this.margins.top),
                    "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
                    (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                        top: 0,
                        left: 0
                    }),
                    {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" == this.cssPosition) {
                        var e = this.element.position();
                        return {
                            top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    }
                    return {
                        top: 0,
                        left: 0
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t = this.options;
                    if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document: window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment);
                    else {
                        var n = e(t.containment),
                        i = n[0];
                        if (!i) return;
                        var o = (n.offset(), "hidden" != e(i).css("overflow"));
                        this.containment = [(parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0), (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0), (o ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (o ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                        this.relative_container = n
                    }
                },
                _convertPositionTo: function(t, n) {
                    n || (n = this.position);
                    var i = "absolute" == t ? 1 : -1,
                    o = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent),
                    a = /(html|body)/i.test(o[0].tagName);
                    return {
                        top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : o.scrollTop()) * i,
                        left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : o.scrollLeft()) * i
                    }
                },
                _generatePosition: function(t) {
                    var n = this.options,
                    i = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
                    o = /(html|body)/i.test(i[0].tagName),
                    a = t.pageX,
                    r = t.pageY;
                    if (this.originalPosition) {
                        var s;
                        if (this.containment) {
                            if (this.relative_container) {
                                var l = this.relative_container.offset();
                                s = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                            } else s = this.containment;
                            t.pageX - this.offset.click.left < s[0] && (a = s[0] + this.offset.click.left),
                            t.pageY - this.offset.click.top < s[1] && (r = s[1] + this.offset.click.top),
                            t.pageX - this.offset.click.left > s[2] && (a = s[2] + this.offset.click.left),
                            t.pageY - this.offset.click.top > s[3] && (r = s[3] + this.offset.click.top)
                        }
                        if (n.grid) {
                            var c = n.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                            r = s && (c - this.offset.click.top < s[1] || c - this.offset.click.top > s[3]) ? c - this.offset.click.top < s[1] ? c + n.grid[1] : c - n.grid[1] : c;
                            var u = n.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                            a = s && (u - this.offset.click.left < s[0] || u - this.offset.click.left > s[2]) ? u - this.offset.click.left < s[0] ? u + n.grid[0] : u - n.grid[0] : u
                        }
                    }
                    return {
                        top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : i.scrollTop()),
                        left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : i.scrollLeft())
                    }
                },
                _clear: function() {
                    this.helper.removeClass("ui-draggable-dragging"),
                    this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                    this.helper = null,
                    this.cancelHelperRemoval = !1
                },
                _trigger: function(t, n, i) {
                    return i = i || this._uiHash(),
                    e.ui.plugin.call(this, t, [n, i]),
                    "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")),
                    e.Widget.prototype._trigger.call(this, t, n, i)
                },
                plugins: {},
                _uiHash: function(e) {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }),
            e.ui.plugin.add("draggable", "connectToSortable", {
                start: function(t, n) {
                    var i = e(this).data("draggable"),
                    o = i.options,
                    a = e.extend({},
                    n, {
                        item: i.element
                    });
                    i.sortables = [],
                    e(o.connectToSortable).each(function() {
                        var n = e.data(this, "sortable");
                        n && !n.options.disabled && (i.sortables.push({
                            instance: n,
                            shouldRevert: n.options.revert
                        }), n.refreshPositions(), n._trigger("activate", t, a))
                    })
                },
                stop: function(t, n) {
                    var i = e(this).data("draggable"),
                    o = e.extend({},
                    n, {
                        item: i.element
                    });
                    e.each(i.sortables,
                    function() {
                        this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == i.options.helper && this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, o))
                    })
                },
                drag: function(t, n) {
                    var i = e(this).data("draggable"),
                    o = this;
                    e.each(i.sortables,
                    function(a) {
                        var r = !1,
                        s = this;
                        this.instance.positionAbs = i.positionAbs,
                        this.instance.helperProportions = i.helperProportions,
                        this.instance.offset.click = i.offset.click,
                        this.instance._intersectsWith(this.instance.containerCache) && (r = !0, e.each(i.sortables,
                        function() {
                            return this.instance.positionAbs = i.positionAbs,
                            this.instance.helperProportions = i.helperProportions,
                            this.instance.offset.click = i.offset.click,
                            this != s && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(s.instance.element[0], this.instance.element[0]) && (r = !1),
                            r
                        })),
                        r ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(o).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                            return n.helper[0]
                        },
                        t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = i.offset.click.top, this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, i._trigger("toSortable", t), i.dropped = this.instance.element, i.currentItem = i.element, this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), i._trigger("fromSortable", t), i.dropped = !1)
                    })
                }
            }),
            e.ui.plugin.add("draggable", "cursor", {
                start: function(t, n) {
                    var i = e("body"),
                    o = e(this).data("draggable").options;
                    i.css("cursor") && (o._cursor = i.css("cursor")),
                    i.css("cursor", o.cursor)
                },
                stop: function(t, n) {
                    var i = e(this).data("draggable").options;
                    i._cursor && e("body").css("cursor", i._cursor)
                }
            }),
            e.ui.plugin.add("draggable", "opacity", {
                start: function(t, n) {
                    var i = e(n.helper),
                    o = e(this).data("draggable").options;
                    i.css("opacity") && (o._opacity = i.css("opacity")),
                    i.css("opacity", o.opacity)
                },
                stop: function(t, n) {
                    var i = e(this).data("draggable").options;
                    i._opacity && e(n.helper).css("opacity", i._opacity)
                }
            }),
            e.ui.plugin.add("draggable", "scroll", {
                start: function(t, n) {
                    var i = e(this).data("draggable");
                    i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName && (i.overflowOffset = i.scrollParent.offset())
                },
                drag: function(t, n) {
                    var i = e(this).data("draggable"),
                    o = i.options,
                    a = !1;
                    i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (o.axis && "x" == o.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop + o.scrollSpeed: t.pageY - i.overflowOffset.top < o.scrollSensitivity && (i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop - o.scrollSpeed)), o.axis && "y" == o.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft + o.scrollSpeed: t.pageX - i.overflowOffset.left < o.scrollSensitivity && (i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft - o.scrollSpeed))) : (o.axis && "x" == o.axis || (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? a = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed))), o.axis && "y" == o.axis || (t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? a = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed)))),
                    a !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
                }
            }),
            e.ui.plugin.add("draggable", "snap", {
                start: function(t, n) {
                    var i = e(this).data("draggable"),
                    o = i.options;
                    i.snapElements = [],
                    e(o.snap.constructor != String ? o.snap.items || ":data(draggable)": o.snap).each(function() {
                        var t = e(this),
                        n = t.offset();
                        this != i.element[0] && i.snapElements.push({
                            item: this,
                            width: t.outerWidth(),
                            height: t.outerHeight(),
                            top: n.top,
                            left: n.left
                        })
                    })
                },
                drag: function(t, n) {
                    for (var i = e(this).data("draggable"), o = i.options, a = o.snapTolerance, r = n.offset.left, s = r + i.helperProportions.width, l = n.offset.top, c = l + i.helperProportions.height, u = i.snapElements.length - 1; u >= 0; u--) {
                        var d = i.snapElements[u].left,
                        h = d + i.snapElements[u].width,
                        f = i.snapElements[u].top,
                        p = f + i.snapElements[u].height;
                        if (r > d - a && h + a > r && l > f - a && p + a > l || r > d - a && h + a > r && c > f - a && p + a > c || s > d - a && h + a > s && l > f - a && p + a > l || s > d - a && h + a > s && c > f - a && p + a > c) {
                            if ("inner" != o.snapMode) {
                                var m = Math.abs(f - c) <= a,
                                g = Math.abs(p - l) <= a,
                                v = Math.abs(d - s) <= a,
                                b = Math.abs(h - r) <= a;
                                m && (n.position.top = i._convertPositionTo("relative", {
                                    top: f - i.helperProportions.height,
                                    left: 0
                                }).top - i.margins.top),
                                g && (n.position.top = i._convertPositionTo("relative", {
                                    top: p,
                                    left: 0
                                }).top - i.margins.top),
                                v && (n.position.left = i._convertPositionTo("relative", {
                                    top: 0,
                                    left: d - i.helperProportions.width
                                }).left - i.margins.left),
                                b && (n.position.left = i._convertPositionTo("relative", {
                                    top: 0,
                                    left: h
                                }).left - i.margins.left)
                            }
                            var y = m || g || v || b;
                            if ("outer" != o.snapMode) {
                                var m = Math.abs(f - l) <= a,
                                g = Math.abs(p - c) <= a,
                                v = Math.abs(d - r) <= a,
                                b = Math.abs(h - s) <= a;
                                m && (n.position.top = i._convertPositionTo("relative", {
                                    top: f,
                                    left: 0
                                }).top - i.margins.top),
                                g && (n.position.top = i._convertPositionTo("relative", {
                                    top: p - i.helperProportions.height,
                                    left: 0
                                }).top - i.margins.top),
                                v && (n.position.left = i._convertPositionTo("relative", {
                                    top: 0,
                                    left: d
                                }).left - i.margins.left),
                                b && (n.position.left = i._convertPositionTo("relative", {
                                    top: 0,
                                    left: h - i.helperProportions.width
                                }).left - i.margins.left)
                            } ! i.snapElements[u].snapping && (m || g || v || b || y) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, e.extend(i._uiHash(), {
                                snapItem: i.snapElements[u].item
                            })),
                            i.snapElements[u].snapping = m || g || v || b || y
                        } else i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, e.extend(i._uiHash(), {
                            snapItem: i.snapElements[u].item
                        })),
                        i.snapElements[u].snapping = !1
                    }
                }
            }),
            e.ui.plugin.add("draggable", "stack", {
                start: function(t, n) {
                    var i = e(this).data("draggable").options,
                    o = e.makeArray(e(i.stack)).sort(function(t, n) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                    });
                    if (o.length) {
                        var a = parseInt(o[0].style.zIndex) || 0;
                        e(o).each(function(e) {
                            this.style.zIndex = a + e
                        }),
                        this[0].style.zIndex = a + o.length
                    }
                }
            }),
            e.ui.plugin.add("draggable", "zIndex", {
                start: function(t, n) {
                    var i = e(n.helper),
                    o = e(this).data("draggable").options;
                    i.css("zIndex") && (o._zIndex = i.css("zIndex")),
                    i.css("zIndex", o.zIndex)
                },
                stop: function(t, n) {
                    var i = e(this).data("draggable").options;
                    i._zIndex && e(n.helper).css("zIndex", i._zIndex)
                }
            })
        } (jQuery),
        function(e, t) {
            e.widget("ui.droppable", {
                version: "1.9.2",
                widgetEventPrefix: "drop",
                options: {
                    accept: "*",
                    activeClass: !1,
                    addClasses: !0,
                    greedy: !1,
                    hoverClass: !1,
                    scope: "default",
                    tolerance: "intersect"
                },
                _create: function() {
                    var t = this.options,
                    n = t.accept;
                    this.isover = 0,
                    this.isout = 1,
                    this.accept = e.isFunction(n) ? n: function(e) {
                        return e.is(n)
                    },
                    this.proportions = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    },
                    e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [],
                    e.ui.ddmanager.droppables[t.scope].push(this),
                    t.addClasses && this.element.addClass("ui-droppable")
                },
                _destroy: function() {
                    for (var t = e.ui.ddmanager.droppables[this.options.scope], n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
                    this.element.removeClass("ui-droppable ui-droppable-disabled")
                },
                _setOption: function(t, n) {
                    "accept" == t && (this.accept = e.isFunction(n) ? n: function(e) {
                        return e.is(n)
                    }),
                    e.Widget.prototype._setOption.apply(this, arguments)
                },
                _activate: function(t) {
                    var n = e.ui.ddmanager.current;
                    this.options.activeClass && this.element.addClass(this.options.activeClass),
                    n && this._trigger("activate", t, this.ui(n))
                },
                _deactivate: function(t) {
                    var n = e.ui.ddmanager.current;
                    this.options.activeClass && this.element.removeClass(this.options.activeClass),
                    n && this._trigger("deactivate", t, this.ui(n))
                },
                _over: function(t) {
                    var n = e.ui.ddmanager.current;
                    n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
                },
                _out: function(t) {
                    var n = e.ui.ddmanager.current;
                    n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
                },
                _drop: function(t, n) {
                    var i = n || e.ui.ddmanager.current;
                    if (!i || (i.currentItem || i.element)[0] == this.element[0]) return ! 1;
                    var o = !1;
                    return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                        var t = e.data(this, "droppable");
                        return t.options.greedy && !t.options.disabled && t.options.scope == i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && e.ui.intersect(i, e.extend(t, {
                            offset: t.element.offset()
                        }), t.options.tolerance) ? (o = !0, !1) : void 0
                    }),
                    o ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(i)), this.element) : !1
                },
                ui: function(e) {
                    return {
                        draggable: e.currentItem || e.element,
                        helper: e.helper,
                        position: e.position,
                        offset: e.positionAbs
                    }
                }
            }),
            e.ui.intersect = function(t, n, i) {
                if (!n.offset) return ! 1;
                var o = (t.positionAbs || t.position.absolute).left,
                a = o + t.helperProportions.width,
                r = (t.positionAbs || t.position.absolute).top,
                s = r + t.helperProportions.height,
                l = n.offset.left,
                c = l + n.proportions.width,
                u = n.offset.top,
                d = u + n.proportions.height;
                switch (i) {
                case "fit":
                    return o >= l && c >= a && r >= u && d >= s;
                case "intersect":
                    return l < o + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < c && u < r + t.helperProportions.height / 2 && s - t.helperProportions.height / 2 < d;
                case "pointer":
                    var h = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                    f = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                    p = e.ui.isOver(f, h, u, l, n.proportions.height, n.proportions.width);
                    return p;
                case "touch":
                    return (r >= u && d >= r || s >= u && d >= s || u > r && s > d) && (o >= l && c >= o || a >= l && c >= a || l > o && a > c);
                default:
                    return ! 1
                }
            },
            e.ui.ddmanager = {
                current: null,
                droppables: {
                    "default": []
                },
                prepareOffsets: function(t, n) {
                    var i = e.ui.ddmanager.droppables[t.options.scope] || [],
                    o = n ? n.type: null,
                    a = (t.currentItem || t.element).find(":data(droppable)").andSelf();
                    e: for (var r = 0; r < i.length; r++) if (! (i[r].options.disabled || t && !i[r].accept.call(i[r].element[0], t.currentItem || t.element))) {
                        for (var s = 0; s < a.length; s++) if (a[s] == i[r].element[0]) {
                            i[r].proportions.height = 0;
                            continue e
                        }
                        i[r].visible = "none" != i[r].element.css("display"),
                        i[r].visible && ("mousedown" == o && i[r]._activate.call(i[r], n), i[r].offset = i[r].element.offset(), i[r].proportions = {
                            width: i[r].element[0].offsetWidth,
                            height: i[r].element[0].offsetHeight
                        })
                    }
                },
                drop: function(t, n) {
                    var i = !1;
                    return e.each(e.ui.ddmanager.droppables[t.options.scope] || [],
                    function() {
                        this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (i = this._drop.call(this, n) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n)))
                    }),
                    i
                },
                dragStart: function(t, n) {
                    t.element.parentsUntil("body").bind("scroll.droppable",
                    function() {
                        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
                    })
                },
                drag: function(t, n) {
                    t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n),
                    e.each(e.ui.ddmanager.droppables[t.options.scope] || [],
                    function() {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var i = e.ui.intersect(t, this, this.options.tolerance),
                            o = i || 1 != this.isover ? i && 0 == this.isover ? "isover": null: "isout";
                            if (o) {
                                var a;
                                if (this.options.greedy) {
                                    var r = this.options.scope,
                                    s = this.element.parents(":data(droppable)").filter(function() {
                                        return e.data(this, "droppable").options.scope === r
                                    });
                                    s.length && (a = e.data(s[0], "droppable"), a.greedyChild = "isover" == o ? 1 : 0)
                                }
                                a && "isover" == o && (a.isover = 0, a.isout = 1, a._out.call(a, n)),
                                this[o] = 1,
                                this["isout" == o ? "isover": "isout"] = 0,
                                this["isover" == o ? "_over": "_out"].call(this, n),
                                a && "isout" == o && (a.isout = 0, a.isover = 1, a._over.call(a, n))
                            }
                        }
                    })
                },
                dragStop: function(t, n) {
                    t.element.parentsUntil("body").unbind("scroll.droppable"),
                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
                }
            }
        } (jQuery),
        function(e, t) {
            e.widget("ui.resizable", e.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 1e3
                },
                _create: function() {
                    var t = this,
                    n = this.options;
                    if (this.element.addClass("ui-resizable"), e.extend(this, {
                        _aspectRatio: !!n.aspectRatio,
                        aspectRatio: n.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper": null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    }: "e,s,se"), this.handles.constructor == String) {
                        "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                        var i = this.handles.split(",");
                        this.handles = {};
                        for (var o = 0; o < i.length; o++) {
                            var a = e.trim(i[o]),
                            r = "ui-resizable-" + a,
                            s = e('<div class="ui-resizable-handle ' + r + '"></div>');
                            s.css({
                                zIndex: n.zIndex
                            }),
                            "se" == a && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                            this.handles[a] = ".ui-resizable-" + a,
                            this.element.append(s)
                        }
                    }
                    this._renderAxis = function(t) {
                        t = t || this.element;
                        for (var n in this.handles) {
                            if (this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                                var i = e(this.handles[n], this.element),
                                o = 0;
                                o = /sw|ne|nw|se|n|s/.test(n) ? i.outerHeight() : i.outerWidth();
                                var a = ["padding", /ne|nw|n/.test(n) ? "Top": /se|sw|s/.test(n) ? "Bottom": /^e$/.test(n) ? "Right": "Left"].join("");
                                t.css(a, o),
                                this._proportionallyResize()
                            }
                            e(this.handles[n]).length
                        }
                    },
                    this._renderAxis(this.element),
                    this._handles = e(".ui-resizable-handle", this.element).disableSelection(),
                    this._handles.mouseover(function() {
                        if (!t.resizing) {
                            if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                            t.axis = e && e[1] ? e[1] : "se"
                        }
                    }),
                    n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                        n.disabled || (e(this).removeClass("ui-resizable-autohide"), t._handles.show())
                    }).mouseleave(function() {
                        n.disabled || t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
                    })),
                    this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var t = function(t) {
                        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                    };
                    if (this.elementIsWrapper) {
                        t(this.element);
                        var n = this.element;
                        this.originalElement.css({
                            position: n.css("position"),
                            width: n.outerWidth(),
                            height: n.outerHeight(),
                            top: n.css("top"),
                            left: n.css("left")
                        }).insertAfter(n),
                        n.remove()
                    }
                    return this.originalElement.css("resize", this.originalResizeStyle),
                    t(this.originalElement),
                    this
                },
                _mouseCapture: function(t) {
                    var n = !1;
                    for (var i in this.handles) e(this.handles[i])[0] == t.target && (n = !0);
                    return ! this.options.disabled && n
                },
                _mouseStart: function(t) {
                    var i = this.options,
                    o = this.element.position(),
                    a = this.element;
                    this.resizing = !0,
                    this.documentScroll = {
                        top: e(document).scrollTop(),
                        left: e(document).scrollLeft()
                    },
                    (a.is(".ui-draggable") || /absolute/.test(a.css("position"))) && a.css({
                        position: "absolute",
                        top: o.top,
                        left: o.left
                    }),
                    this._renderProxy();
                    var r = n(this.helper.css("left")),
                    s = n(this.helper.css("top"));
                    i.containment && (r += e(i.containment).scrollLeft() || 0, s += e(i.containment).scrollTop() || 0),
                    this.offset = this.helper.offset(),
                    this.position = {
                        left: r,
                        top: s
                    },
                    this.size = this._helper ? {
                        width: a.outerWidth(),
                        height: a.outerHeight()
                    }: {
                        width: a.width(),
                        height: a.height()
                    },
                    this.originalSize = this._helper ? {
                        width: a.outerWidth(),
                        height: a.outerHeight()
                    }: {
                        width: a.width(),
                        height: a.height()
                    },
                    this.originalPosition = {
                        left: r,
                        top: s
                    },
                    this.sizeDiff = {
                        width: a.outerWidth() - a.width(),
                        height: a.outerHeight() - a.height()
                    },
                    this.originalMousePosition = {
                        left: t.pageX,
                        top: t.pageY
                    },
                    this.aspectRatio = "number" == typeof i.aspectRatio ? i.aspectRatio: this.originalSize.width / this.originalSize.height || 1;
                    var l = e(".ui-resizable-" + this.axis).css("cursor");
                    return e("body").css("cursor", "auto" == l ? this.axis + "-resize": l),
                    a.addClass("ui-resizable-resizing"),
                    this._propagate("start", t),
                    !0
                },
                _mouseDrag: function(e) {
                    var t = this.helper,
                    n = (this.options, this.originalMousePosition),
                    i = this.axis,
                    o = e.pageX - n.left || 0,
                    a = e.pageY - n.top || 0,
                    r = this._change[i];
                    if (!r) return ! 1;
                    var s = r.apply(this, [e, o, a]);
                    return this._updateVirtualBoundaries(e.shiftKey),
                    (this._aspectRatio || e.shiftKey) && (s = this._updateRatio(s, e)),
                    s = this._respectSize(s, e),
                    this._propagate("resize", e),
                    t.css({
                        top: this.position.top + "px",
                        left: this.position.left + "px",
                        width: this.size.width + "px",
                        height: this.size.height + "px"
                    }),
                    !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                    this._updateCache(s),
                    this._trigger("resize", e, this.ui()),
                    !1
                },
                _mouseStop: function(t) {
                    this.resizing = !1;
                    var n = this.options,
                    i = this;
                    if (this._helper) {
                        var o = this._proportionallyResizeElements,
                        a = o.length && /textarea/i.test(o[0].nodeName),
                        r = a && e.ui.hasScroll(o[0], "left") ? 0 : i.sizeDiff.height,
                        s = a ? 0 : i.sizeDiff.width,
                        l = {
                            width: i.helper.width() - s,
                            height: i.helper.height() - r
                        },
                        c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                        u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                        n.animate || this.element.css(e.extend(l, {
                            top: u,
                            left: c
                        })),
                        i.helper.height(i.size.height),
                        i.helper.width(i.size.width),
                        this._helper && !n.animate && this._proportionallyResize()
                    }
                    return e("body").css("cursor", "auto"),
                    this.element.removeClass("ui-resizable-resizing"),
                    this._propagate("stop", t),
                    this._helper && this.helper.remove(),
                    !1
                },
                _updateVirtualBoundaries: function(e) {
                    var t, n, o, a, r, s = this.options;
                    r = {
                        minWidth: i(s.minWidth) ? s.minWidth: 0,
                        maxWidth: i(s.maxWidth) ? s.maxWidth: 1 / 0,
                        minHeight: i(s.minHeight) ? s.minHeight: 0,
                        maxHeight: i(s.maxHeight) ? s.maxHeight: 1 / 0
                    },
                    (this._aspectRatio || e) && (t = r.minHeight * this.aspectRatio, o = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, a = r.maxWidth / this.aspectRatio, t > r.minWidth && (r.minWidth = t), o > r.minHeight && (r.minHeight = o), n < r.maxWidth && (r.maxWidth = n), a < r.maxHeight && (r.maxHeight = a)),
                    this._vBoundaries = r
                },
                _updateCache: function(e) {
                    this.options;
                    this.offset = this.helper.offset(),
                    i(e.left) && (this.position.left = e.left),
                    i(e.top) && (this.position.top = e.top),
                    i(e.height) && (this.size.height = e.height),
                    i(e.width) && (this.size.width = e.width)
                },
                _updateRatio: function(e, t) {
                    var n = (this.options, this.position),
                    o = this.size,
                    a = this.axis;
                    return i(e.height) ? e.width = e.height * this.aspectRatio: i(e.width) && (e.height = e.width / this.aspectRatio),
                    "sw" == a && (e.left = n.left + (o.width - e.width), e.top = null),
                    "nw" == a && (e.top = n.top + (o.height - e.height), e.left = n.left + (o.width - e.width)),
                    e
                },
                _respectSize: function(e, t) {
                    var n = (this.helper, this._vBoundaries),
                    o = (this._aspectRatio || t.shiftKey, this.axis),
                    a = i(e.width) && n.maxWidth && n.maxWidth < e.width,
                    r = i(e.height) && n.maxHeight && n.maxHeight < e.height,
                    s = i(e.width) && n.minWidth && n.minWidth > e.width,
                    l = i(e.height) && n.minHeight && n.minHeight > e.height;
                    s && (e.width = n.minWidth),
                    l && (e.height = n.minHeight),
                    a && (e.width = n.maxWidth),
                    r && (e.height = n.maxHeight);
                    var c = this.originalPosition.left + this.originalSize.width,
                    u = this.position.top + this.size.height,
                    d = /sw|nw|w/.test(o),
                    h = /nw|ne|n/.test(o);
                    s && d && (e.left = c - n.minWidth),
                    a && d && (e.left = c - n.maxWidth),
                    l && h && (e.top = u - n.minHeight),
                    r && h && (e.top = u - n.maxHeight);
                    var f = !e.width && !e.height;
                    return f && !e.left && e.top ? e.top = null: f && !e.top && e.left && (e.left = null),
                    e
                },
                _proportionallyResize: function() {
                    this.options;
                    if (this._proportionallyResizeElements.length) for (var t = this.helper || this.element,
                    n = 0; n < this._proportionallyResizeElements.length; n++) {
                        var i = this._proportionallyResizeElements[n];
                        if (!this.borderDif) {
                            var o = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
                            a = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                            this.borderDif = e.map(o,
                            function(e, t) {
                                var n = parseInt(e, 10) || 0,
                                i = parseInt(a[t], 10) || 0;
                                return n + i
                            })
                        }
                        i.css({
                            height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: t.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                },
                _renderProxy: function() {
                    var t = this.element,
                    n = this.options;
                    if (this.elementOffset = t.offset(), this._helper) {
                        this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                        var i = e.ui.ie6 ? 1 : 0,
                        o = e.ui.ie6 ? 2 : -1;
                        this.helper.addClass(this._helper).css({
                            width: this.element.outerWidth() + o,
                            height: this.element.outerHeight() + o,
                            position: "absolute",
                            left: this.elementOffset.left - i + "px",
                            top: this.elementOffset.top - i + "px",
                            zIndex: ++n.zIndex
                        }),
                        this.helper.appendTo("body").disableSelection()
                    } else this.helper = this.element
                },
                _change: {
                    e: function(e, t, n) {
                        return {
                            width: this.originalSize.width + t
                        }
                    },
                    w: function(e, t, n) {
                        var i = (this.options, this.originalSize),
                        o = this.originalPosition;
                        return {
                            left: o.left + t,
                            width: i.width - t
                        }
                    },
                    n: function(e, t, n) {
                        var i = (this.options, this.originalSize),
                        o = this.originalPosition;
                        return {
                            top: o.top + n,
                            height: i.height - n
                        }
                    },
                    s: function(e, t, n) {
                        return {
                            height: this.originalSize.height + n
                        }
                    },
                    se: function(t, n, i) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, i]))
                    },
                    sw: function(t, n, i) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, i]))
                    },
                    ne: function(t, n, i) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, i]))
                    },
                    nw: function(t, n, i) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, i]))
                    }
                },
                _propagate: function(t, n) {
                    e.ui.plugin.call(this, t, [n, this.ui()]),
                    "resize" != t && this._trigger(t, n, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }),
            e.ui.plugin.add("resizable", "alsoResize", {
                start: function(t, n) {
                    var i = e(this).data("resizable"),
                    o = i.options,
                    a = function(t) {
                        e(t).each(function() {
                            var t = e(this);
                            t.data("resizable-alsoresize", {
                                width: parseInt(t.width(), 10),
                                height: parseInt(t.height(), 10),
                                left: parseInt(t.css("left"), 10),
                                top: parseInt(t.css("top"), 10)
                            })
                        })
                    };
                    "object" != typeof o.alsoResize || o.alsoResize.parentNode ? a(o.alsoResize) : o.alsoResize.length ? (o.alsoResize = o.alsoResize[0], a(o.alsoResize)) : e.each(o.alsoResize,
                    function(e) {
                        a(e)
                    })
                },
                resize: function(t, n) {
                    var i = e(this).data("resizable"),
                    o = i.options,
                    a = i.originalSize,
                    r = i.originalPosition,
                    s = {
                        height: i.size.height - a.height || 0,
                        width: i.size.width - a.width || 0,
                        top: i.position.top - r.top || 0,
                        left: i.position.left - r.left || 0
                    },
                    l = function(t, i) {
                        e(t).each(function() {
                            var t = e(this),
                            o = e(this).data("resizable-alsoresize"),
                            a = {},
                            r = i && i.length ? i: t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            e.each(r,
                            function(e, t) {
                                var n = (o[t] || 0) + (s[t] || 0);
                                n && n >= 0 && (a[t] = n || null)
                            }),
                            t.css(a)
                        })
                    };
                    "object" != typeof o.alsoResize || o.alsoResize.nodeType ? l(o.alsoResize) : e.each(o.alsoResize,
                    function(e, t) {
                        l(e, t)
                    })
                },
                stop: function(t, n) {
                    e(this).removeData("resizable-alsoresize")
                }
            }),
            e.ui.plugin.add("resizable", "animate", {
                stop: function(t, n) {
                    var i = e(this).data("resizable"),
                    o = i.options,
                    a = i._proportionallyResizeElements,
                    r = a.length && /textarea/i.test(a[0].nodeName),
                    s = r && e.ui.hasScroll(a[0], "left") ? 0 : i.sizeDiff.height,
                    l = r ? 0 : i.sizeDiff.width,
                    c = {
                        width: i.size.width - l,
                        height: i.size.height - s
                    },
                    u = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    d = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(e.extend(c, d && u ? {
                        top: d,
                        left: u
                    }: {}), {
                        duration: o.animateDuration,
                        easing: o.animateEasing,
                        step: function() {
                            var n = {
                                width: parseInt(i.element.css("width"), 10),
                                height: parseInt(i.element.css("height"), 10),
                                top: parseInt(i.element.css("top"), 10),
                                left: parseInt(i.element.css("left"), 10)
                            };
                            a && a.length && e(a[0]).css({
                                width: n.width,
                                height: n.height
                            }),
                            i._updateCache(n),
                            i._propagate("resize", t)
                        }
                    })
                }
            }),
            e.ui.plugin.add("resizable", "containment", {
                start: function(t, i) {
                    var o = e(this).data("resizable"),
                    a = o.options,
                    r = o.element,
                    s = a.containment,
                    l = s instanceof e ? s.get(0) : /parent/.test(s) ? r.parent().get(0) : s;
                    if (l) if (o.containerElement = e(l), /document/.test(s) || s == document) o.containerOffset = {
                        left: 0,
                        top: 0
                    },
                    o.containerPosition = {
                        left: 0,
                        top: 0
                    },
                    o.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    };
                    else {
                        var c = e(l),
                        u = [];
                        e(["Top", "Right", "Left", "Bottom"]).each(function(e, t) {
                            u[e] = n(c.css("padding" + t))
                        }),
                        o.containerOffset = c.offset(),
                        o.containerPosition = c.position(),
                        o.containerSize = {
                            height: c.innerHeight() - u[3],
                            width: c.innerWidth() - u[1]
                        };
                        var d = o.containerOffset,
                        h = o.containerSize.height,
                        f = o.containerSize.width,
                        p = e.ui.hasScroll(l, "left") ? l.scrollWidth: f,
                        m = e.ui.hasScroll(l) ? l.scrollHeight: h;
                        o.parentData = {
                            element: l,
                            left: d.left,
                            top: d.top,
                            width: p,
                            height: m
                        }
                    }
                },
                resize: function(t, n) {
                    var i = e(this).data("resizable"),
                    o = i.options,
                    a = (i.containerSize, i.containerOffset),
                    r = (i.size, i.position),
                    s = i._aspectRatio || t.shiftKey,
                    l = {
                        top: 0,
                        left: 0
                    },
                    c = i.containerElement;
                    c[0] != document && /static/.test(c.css("position")) && (l = a),
                    r.left < (i._helper ? a.left: 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - a.left: i.position.left - l.left), s && (i.size.height = i.size.width / i.aspectRatio), i.position.left = o.helper ? a.left: 0),
                    r.top < (i._helper ? a.top: 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - a.top: i.position.top), s && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? a.top: 0),
                    i.offset.left = i.parentData.left + i.position.left,
                    i.offset.top = i.parentData.top + i.position.top;
                    var u = Math.abs((i._helper ? i.offset.left - l.left: i.offset.left - l.left) + i.sizeDiff.width),
                    d = Math.abs((i._helper ? i.offset.top - l.top: i.offset.top - a.top) + i.sizeDiff.height),
                    h = i.containerElement.get(0) == i.element.parent().get(0),
                    f = /relative|absolute/.test(i.containerElement.css("position"));
                    h && f && (u -= i.parentData.left),
                    u + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - u, s && (i.size.height = i.size.width / i.aspectRatio)),
                    d + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - d, s && (i.size.width = i.size.height * i.aspectRatio))
                },
                stop: function(t, n) {
                    var i = e(this).data("resizable"),
                    o = i.options,
                    a = (i.position, i.containerOffset),
                    r = i.containerPosition,
                    s = i.containerElement,
                    l = e(i.helper),
                    c = l.offset(),
                    u = l.outerWidth() - i.sizeDiff.width,
                    d = l.outerHeight() - i.sizeDiff.height;
                    i._helper && !o.animate && /relative/.test(s.css("position")) && e(this).css({
                        left: c.left - r.left - a.left,
                        width: u,
                        height: d
                    }),
                    i._helper && !o.animate && /static/.test(s.css("position")) && e(this).css({
                        left: c.left - r.left - a.left,
                        width: u,
                        height: d
                    })
                }
            }),
            e.ui.plugin.add("resizable", "ghost", {
                start: function(t, n) {
                    var i = e(this).data("resizable"),
                    o = i.options,
                    a = i.size;
                    i.ghost = i.originalElement.clone(),
                    i.ghost.css({
                        opacity: .25,
                        display: "block",
                        position: "relative",
                        height: a.height,
                        width: a.width,
                        margin: 0,
                        left: 0,
                        top: 0
                    }).addClass("ui-resizable-ghost").addClass("string" == typeof o.ghost ? o.ghost: ""),
                    i.ghost.appendTo(i.helper)
                },
                resize: function(t, n) {
                    var i = e(this).data("resizable");
                    i.options;
                    i.ghost && i.ghost.css({
                        position: "relative",
                        height: i.size.height,
                        width: i.size.width
                    })
                },
                stop: function(t, n) {
                    var i = e(this).data("resizable");
                    i.options;
                    i.ghost && i.helper && i.helper.get(0).removeChild(i.ghost.get(0))
                }
            }),
            e.ui.plugin.add("resizable", "grid", {
                resize: function(t, n) {
                    var i = e(this).data("resizable"),
                    o = i.options,
                    a = i.size,
                    r = i.originalSize,
                    s = i.originalPosition,
                    l = i.axis;
                    o._aspectRatio || t.shiftKey;
                    o.grid = "number" == typeof o.grid ? [o.grid, o.grid] : o.grid;
                    var c = Math.round((a.width - r.width) / (o.grid[0] || 1)) * (o.grid[0] || 1),
                    u = Math.round((a.height - r.height) / (o.grid[1] || 1)) * (o.grid[1] || 1);
                    /^(se|s|e)$/.test(l) ? (i.size.width = r.width + c, i.size.height = r.height + u) : /^(ne)$/.test(l) ? (i.size.width = r.width + c, i.size.height = r.height + u, i.position.top = s.top - u) : /^(sw)$/.test(l) ? (i.size.width = r.width + c, i.size.height = r.height + u, i.position.left = s.left - c) : (i.size.width = r.width + c, i.size.height = r.height + u, i.position.top = s.top - u, i.position.left = s.left - c)
                }
            });
            var n = function(e) {
                return parseInt(e, 10) || 0
            },
            i = function(e) {
                return ! isNaN(parseInt(e, 10))
            }
        } (jQuery),
        function(e, t) {
            e.widget("ui.selectable", e.ui.mouse, {
                version: "1.9.2",
                options: {
                    appendTo: "body",
                    autoRefresh: !0,
                    distance: 0,
                    filter: "*",
                    tolerance: "touch"
                },
                _create: function() {
                    var t = this;
                    this.element.addClass("ui-selectable"),
                    this.dragged = !1;
                    var n;
                    this.refresh = function() {
                        n = e(t.options.filter, t.element[0]),
                        n.addClass("ui-selectee"),
                        n.each(function() {
                            var t = e(this),
                            n = t.offset();
                            e.data(this, "selectable-item", {
                                element: this,
                                $element: t,
                                left: n.left,
                                top: n.top,
                                right: n.left + t.outerWidth(),
                                bottom: n.top + t.outerHeight(),
                                startselected: !1,
                                selected: t.hasClass("ui-selected"),
                                selecting: t.hasClass("ui-selecting"),
                                unselecting: t.hasClass("ui-unselecting")
                            })
                        })
                    },
                    this.refresh(),
                    this.selectees = n.addClass("ui-selectee"),
                    this._mouseInit(),
                    this.helper = e("<div class='ui-selectable-helper'></div>")
                },
                _destroy: function() {
                    this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
                    this.element.removeClass("ui-selectable ui-selectable-disabled"),
                    this._mouseDestroy()
                },
                _mouseStart: function(t) {
                    var n = this;
                    if (this.opos = [t.pageX, t.pageY], !this.options.disabled) {
                        var i = this.options;
                        this.selectees = e(i.filter, this.element[0]),
                        this._trigger("start", t),
                        e(i.appendTo).append(this.helper),
                        this.helper.css({
                            left: t.clientX,
                            top: t.clientY,
                            width: 0,
                            height: 0
                        }),
                        i.autoRefresh && this.refresh(),
                        this.selectees.filter(".ui-selected").each(function() {
                            var i = e.data(this, "selectable-item");
                            i.startselected = !0,
                            t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", t, {
                                unselecting: i.element
                            }))
                        }),
                        e(t.target).parents().andSelf().each(function() {
                            var i = e.data(this, "selectable-item");
                            if (i) {
                                var o = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected");
                                return i.$element.removeClass(o ? "ui-unselecting": "ui-selected").addClass(o ? "ui-selecting": "ui-unselecting"),
                                i.unselecting = !o,
                                i.selecting = o,
                                i.selected = o,
                                o ? n._trigger("selecting", t, {
                                    selecting: i.element
                                }) : n._trigger("unselecting", t, {
                                    unselecting: i.element
                                }),
                                !1
                            }
                        })
                    }
                },
                _mouseDrag: function(t) {
                    var n = this;
                    if (this.dragged = !0, !this.options.disabled) {
                        var i = this.options,
                        o = this.opos[0],
                        a = this.opos[1],
                        r = t.pageX,
                        s = t.pageY;
                        if (o > r) {
                            var l = r;
                            r = o,
                            o = l
                        }
                        if (a > s) {
                            var l = s;
                            s = a,
                            a = l
                        }
                        return this.helper.css({
                            left: o,
                            top: a,
                            width: r - o,
                            height: s - a
                        }),
                        this.selectees.each(function() {
                            var l = e.data(this, "selectable-item");
                            if (l && l.element != n.element[0]) {
                                var c = !1;
                                "touch" == i.tolerance ? c = !(l.left > r || l.right < o || l.top > s || l.bottom < a) : "fit" == i.tolerance && (c = l.left > o && l.right < r && l.top > a && l.bottom < s),
                                c ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, n._trigger("selecting", t, {
                                    selecting: l.element
                                }))) : (l.selecting && ((t.metaKey || t.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), n._trigger("unselecting", t, {
                                    unselecting: l.element
                                }))), l.selected && (t.metaKey || t.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, n._trigger("unselecting", t, {
                                    unselecting: l.element
                                }))))
                            }
                        }),
                        !1
                    }
                },
                _mouseStop: function(t) {
                    var n = this;
                    this.dragged = !1;
                    this.options;
                    return e(".ui-unselecting", this.element[0]).each(function() {
                        var i = e.data(this, "selectable-item");
                        i.$element.removeClass("ui-unselecting"),
                        i.unselecting = !1,
                        i.startselected = !1,
                        n._trigger("unselected", t, {
                            unselected: i.element
                        })
                    }),
                    e(".ui-selecting", this.element[0]).each(function() {
                        var i = e.data(this, "selectable-item");
                        i.$element.removeClass("ui-selecting").addClass("ui-selected"),
                        i.selecting = !1,
                        i.selected = !0,
                        i.startselected = !0,
                        n._trigger("selected", t, {
                            selected: i.element
                        })
                    }),
                    this._trigger("stop", t),
                    this.helper.remove(),
                    !1
                }
            })
        } (jQuery),
        function(e, t) {
            e.widget("ui.sortable", e.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3
                },
                _create: function() {
                    var e = this.options;
                    this.containerCache = {},
                    this.element.addClass("ui-sortable"),
                    this.refresh(),
                    this.floating = this.items.length ? "x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1,
                    this.offset = this.element.offset(),
                    this._mouseInit(),
                    this.ready = !0
                },
                _destroy: function() {
                    this.element.removeClass("ui-sortable ui-sortable-disabled"),
                    this._mouseDestroy();
                    for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                    return this
                },
                _setOption: function(t, n) {
                    "disabled" === t ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments)
                },
                _mouseCapture: function(t, n) {
                    var i = this;
                    if (this.reverting) return ! 1;
                    if (this.options.disabled || "static" == this.options.type) return ! 1;
                    this._refreshItems(t);
                    var o = null;
                    e(t.target).parents().each(function() {
                        return e.data(this, i.widgetName + "-item") == i ? (o = e(this), !1) : void 0
                    });
                    if (e.data(t.target, i.widgetName + "-item") == i && (o = e(t.target)), !o) return ! 1;
                    if (this.options.handle && !n) {
                        var a = !1;
                        if (e(this.options.handle, o).find("*").andSelf().each(function() {
                            this == t.target && (a = !0)
                        }), !a) return ! 1
                    }
                    return this.currentItem = o,
                    this._removeCurrentsFromItems(),
                    !0
                },
                _mouseStart: function(t, n, i) {
                    var o = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    },
                    e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    },
                    this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", o.cursor)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i) for (var a = this.containers.length - 1; a >= 0; a--) this.containers[a]._trigger("activate", t, this._uiHash(this));
                    return e.ui.ddmanager && (e.ui.ddmanager.current = this),
                    e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
                    this.dragging = !0,
                    this.helper.addClass("ui-sortable-helper"),
                    this._mouseDrag(t),
                    !0
                },
                _mouseDrag: function(t) {
                    if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                        var n = this.options,
                        i = !1;
                        this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + n.scrollSpeed: t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + n.scrollSpeed: t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))),
                        i !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
                    }
                    this.positionAbs = this._convertPositionTo("absolute"),
                    this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
                    this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
                    for (var o = this.items.length - 1; o >= 0; o--) {
                        var a = this.items[o],
                        r = a.item[0],
                        s = this._intersectsWithPointer(a);
                        if (s && a.instance === this.currentContainer && r != this.currentItem[0] && this.placeholder[1 == s ? "next": "prev"]()[0] != r && !e.contains(this.placeholder[0], r) && ("semi-dynamic" == this.options.type ? !e.contains(this.element[0], r) : !0)) {
                            if (this.direction = 1 == s ? "down": "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(a)) break;
                            this._rearrange(t, a),
                            this._trigger("change", t, this._uiHash());
                            break
                        }
                    }
                    return this._contactContainers(t),
                    e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
                    this._trigger("sort", t, this._uiHash()),
                    this.lastPositionAbs = this.positionAbs,
                    !1
                },
                _mouseStop: function(t, n) {
                    if (t) {
                        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                            var i = this,
                            o = this.placeholder.offset();
                            this.reverting = !0,
                            e(this.helper).animate({
                                left: o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                                top: o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                            },
                            parseInt(this.options.revert, 10) || 500,
                            function() {
                                i._clear(t)
                            })
                        } else this._clear(t, n);
                        return ! 1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp({
                            target: null
                        }),
                        "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                        this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
                    this
                },
                serialize: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                    return t = t || {},
                    e(n).each(function() {
                        var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                        n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
                    }),
                    !i.length && t.key && i.push(t.key + "="),
                    i.join("&")
                },
                toArray: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                    return t = t || {},
                    n.each(function() {
                        i.push(e(t.item || this).attr(t.attribute || "id") || "")
                    }),
                    i
                },
                _intersectsWith: function(e) {
                    var t = this.positionAbs.left,
                    n = t + this.helperProportions.width,
                    i = this.positionAbs.top,
                    o = i + this.helperProportions.height,
                    a = e.left,
                    r = a + e.width,
                    s = e.top,
                    l = s + e.height,
                    c = this.offset.click.top,
                    u = this.offset.click.left,
                    d = i + c > s && l > i + c && t + u > a && r > t + u;
                    return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width": "height"] > e[this.floating ? "width": "height"] ? d: a < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < r && s < i + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < l
                },
                _intersectsWithPointer: function(t) {
                    var n = "x" === this.options.axis || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    i = "y" === this.options.axis || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    o = n && i,
                    a = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                    return o ? this.floating ? r && "right" == r || "down" == a ? 2 : 1 : a && ("down" == a ? 2 : 1) : !1
                },
                _intersectsWithSides: function(t) {
                    var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    o = this._getDragVerticalDirection(),
                    a = this._getDragHorizontalDirection();
                    return this.floating && a ? "right" == a && i || "left" == a && !i: o && ("down" == o && n || "up" == o && !n)
                },
                _getDragVerticalDirection: function() {
                    var e = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 != e && (e > 0 ? "down": "up")
                },
                _getDragHorizontalDirection: function() {
                    var e = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 != e && (e > 0 ? "right": "left")
                },
                refresh: function(e) {
                    return this._refreshItems(e),
                    this.refreshPositions(),
                    this
                },
                _connectWith: function() {
                    var e = this.options;
                    return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
                },
                _getItemsAsjQuery: function(t) {
                    var n = [],
                    i = [],
                    o = this._connectWith();
                    if (o && t) for (var a = o.length - 1; a >= 0; a--) for (var r = e(o[a]), s = r.length - 1; s >= 0; s--) {
                        var l = e.data(r[s], this.widgetName);
                        l && l != this && !l.options.disabled && i.push([e.isFunction(l.options.items) ? l.options.items.call(l.element) : e(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                    }
                    i.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
                    for (var a = i.length - 1; a >= 0; a--) i[a][0].each(function() {
                        n.push(this)
                    });
                    return e(n)
                },
                _removeCurrentsFromItems: function() {
                    var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = e.grep(this.items,
                    function(e) {
                        for (var n = 0; n < t.length; n++) if (t[n] == e.item[0]) return ! 1;
                        return ! 0
                    })
                },
                _refreshItems: function(t) {
                    this.items = [],
                    this.containers = [this];
                    var n = this.items,
                    i = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]],
                    o = this._connectWith();
                    if (o && this.ready) for (var a = o.length - 1; a >= 0; a--) for (var r = e(o[a]), s = r.length - 1; s >= 0; s--) {
                        var l = e.data(r[s], this.widgetName);
                        l && l != this && !l.options.disabled && (i.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, {
                            item: this.currentItem
                        }) : e(l.options.items, l.element), l]), this.containers.push(l))
                    }
                    for (var a = i.length - 1; a >= 0; a--) for (var c = i[a][1], u = i[a][0], s = 0, d = u.length; d > s; s++) {
                        var h = e(u[s]);
                        h.data(this.widgetName + "-item", c),
                        n.push({
                            item: h,
                            instance: c,
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        })
                    }
                },
                refreshPositions: function(t) {
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    for (var n = this.items.length - 1; n >= 0; n--) {
                        var i = this.items[n];
                        if (i.instance == this.currentContainer || !this.currentContainer || i.item[0] == this.currentItem[0]) {
                            var o = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item;
                            t || (i.width = o.outerWidth(), i.height = o.outerHeight());
                            var a = o.offset();
                            i.left = a.left,
                            i.top = a.top
                        }
                    }
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else for (var n = this.containers.length - 1; n >= 0; n--) {
                        var a = this.containers[n].element.offset();
                        this.containers[n].containerCache.left = a.left,
                        this.containers[n].containerCache.top = a.top,
                        this.containers[n].containerCache.width = this.containers[n].element.outerWidth(),
                        this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
                    }
                    return this
                },
                _createPlaceholder: function(t) {
                    t = t || this;
                    var n = t.options;
                    if (!n.placeholder || n.placeholder.constructor == String) {
                        var i = n.placeholder;
                        n.placeholder = {
                            element: function() {
                                var n = e(document.createElement(t.currentItem[0].nodeName)).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                                return i || (n.style.visibility = "hidden"),
                                n
                            },
                            update: function(e, o) { (!i || n.forcePlaceholderSize) && (o.height() || o.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                            }
                        }
                    }
                    t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)),
                    t.currentItem.after(t.placeholder),
                    n.placeholder.update(t, t.placeholder)
                },
                _contactContainers: function(t) {
                    for (var n = null,
                    i = null,
                    o = this.containers.length - 1; o >= 0; o--) if (!e.contains(this.currentItem[0], this.containers[o].element[0])) if (this._intersectsWith(this.containers[o].containerCache)) {
                        if (n && e.contains(this.containers[o].element[0], n.element[0])) continue;
                        n = this.containers[o],
                        i = o
                    } else this.containers[o].containerCache.over && (this.containers[o]._trigger("out", t, this._uiHash(this)), this.containers[o].containerCache.over = 0);
                    if (n) if (1 === this.containers.length) this.containers[i]._trigger("over", t, this._uiHash(this)),
                    this.containers[i].containerCache.over = 1;
                    else {
                        for (var a = 1e4,
                        r = null,
                        s = this.containers[i].floating ? "left": "top", l = this.containers[i].floating ? "width": "height", c = this.positionAbs[s] + this.offset.click[s], u = this.items.length - 1; u >= 0; u--) if (e.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] != this.currentItem[0]) {
                            var d = this.items[u].item.offset()[s],
                            h = !1;
                            Math.abs(d - c) > Math.abs(d + this.items[u][l] - c) && (h = !0, d += this.items[u][l]),
                            Math.abs(d - c) < a && (a = Math.abs(d - c), r = this.items[u], this.direction = h ? "up": "down")
                        }
                        if (!r && !this.options.dropOnEmpty) return;
                        this.currentContainer = this.containers[i],
                        r ? this._rearrange(t, r, null, !0) : this._rearrange(t, null, this.containers[i].element, !0),
                        this._trigger("change", t, this._uiHash()),
                        this.containers[i]._trigger("change", t, this._uiHash(this)),
                        this.options.placeholder.update(this.currentContainer, this.placeholder),
                        this.containers[i]._trigger("over", t, this._uiHash(this)),
                        this.containers[i].containerCache.over = 1
                    }
                },
                _createHelper: function(t) {
                    var n = this.options,
                    i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == n.helper ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || e("parent" != n.appendTo ? n.appendTo: this.currentItem[0].parentNode)[0].appendChild(i[0]),
                    i[0] == this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }),
                    ("" == i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()),
                    ("" == i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()),
                    i
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")),
                    e.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }),
                    "left" in t && (this.offset.click.left = t.left + this.margins.left),
                    "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                    "top" in t && (this.offset.click.top = t.top + this.margins.top),
                    "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
                    (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                        top: 0,
                        left: 0
                    }),
                    {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" == this.cssPosition) {
                        var e = this.currentItem.position();
                        return {
                            top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    }
                    return {
                        top: 0,
                        left: 0
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t = this.options;
                    if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document: window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
                        var n = e(t.containment)[0],
                        i = e(t.containment).offset(),
                        o = "hidden" != e(n).css("overflow");
                        this.containment = [i.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (o ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (o ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                    }
                },
                _convertPositionTo: function(t, n) {
                    n || (n = this.position);
                    var i = "absolute" == t ? 1 : -1,
                    o = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent),
                    a = /(html|body)/i.test(o[0].tagName);
                    return {
                        top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : o.scrollTop()) * i,
                        left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : o.scrollLeft()) * i
                    }
                },
                _generatePosition: function(t) {
                    var n = this.options,
                    i = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
                    o = /(html|body)/i.test(i[0].tagName);
                    "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
                    var a = t.pageX,
                    r = t.pageY;
                    if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), n.grid)) {
                        var s = this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1];
                        r = this.containment && (s - this.offset.click.top < this.containment[1] || s - this.offset.click.top > this.containment[3]) ? s - this.offset.click.top < this.containment[1] ? s + n.grid[1] : s - n.grid[1] : s;
                        var l = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0];
                        a = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + n.grid[0] : l - n.grid[0] : l
                    }
                    return {
                        top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : i.scrollTop()),
                        left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : i.scrollLeft())
                    }
                },
                _rearrange: function(e, t, n, i) {
                    n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling),
                    this.counter = this.counter ? ++this.counter: 1;
                    var o = this.counter;
                    this._delay(function() {
                        o == this.counter && this.refreshPositions(!i)
                    })
                },
                _clear: function(t, n) {
                    this.reverting = !1;
                    var i = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                        for (var o in this._storedCSS)("auto" == this._storedCSS[o] || "static" == this._storedCSS[o]) && (this._storedCSS[o] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                    } else this.currentItem.show();
                    this.fromOutside && !n && i.push(function(e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside))
                    }),
                    !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || n || i.push(function(e) {
                        this._trigger("update", e, this._uiHash())
                    }),
                    this !== this.currentContainer && (n || (i.push(function(e) {
                        this._trigger("remove", e, this._uiHash())
                    }), i.push(function(e) {
                        return function(t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), i.push(function(e) {
                        return function(t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer))));
                    for (var o = this.containers.length - 1; o >= 0; o--) n || i.push(function(e) {
                        return function(t) {
                            e._trigger("deactivate", t, this._uiHash(this))
                        }
                    }.call(this, this.containers[o])),
                    this.containers[o].containerCache.over && (i.push(function(e) {
                        return function(t) {
                            e._trigger("out", t, this._uiHash(this))
                        }
                    }.call(this, this.containers[o])), this.containers[o].containerCache.over = 0);
                    if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "": this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                        if (!n) {
                            this._trigger("beforeStop", t, this._uiHash());
                            for (var o = 0; o < i.length; o++) i[o].call(this, t);
                            this._trigger("stop", t, this._uiHash())
                        }
                        return this.fromOutside = !1,
                        !1
                    }
                    if (n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !n) {
                        for (var o = 0; o < i.length; o++) i[o].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1,
                    !0
                },
                _trigger: function() {
                    e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
                },
                _uiHash: function(t) {
                    var n = t || this;
                    return {
                        helper: n.helper,
                        placeholder: n.placeholder || e([]),
                        position: n.position,
                        originalPosition: n.originalPosition,
                        offset: n.positionAbs,
                        item: n.currentItem,
                        sender: t ? t.element: null
                    }
                }
            })
        } (jQuery),
        function(e, t) {
            var n = 0;
            e.widget("ui.autocomplete", {
                version: "1.9.2",
                defaultElement: "<input>",
                options: {
                    appendTo: "body",
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null
                },
                pending: 0,
                _create: function() {
                    var t, n, i;
                    this.isMultiLine = this._isMultiLine(),
                    this.valueMethod = this.element[this.element.is("input,textarea") ? "val": "text"],
                    this.isNewMenu = !0,
                    this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
                    this._on(this.element, {
                        keydown: function(o) {
                            if (this.element.prop("readOnly")) return t = !0,
                            i = !0,
                            void(n = !0);
                            t = !1,
                            i = !1,
                            n = !1;
                            var a = e.ui.keyCode;
                            switch (o.keyCode) {
                            case a.PAGE_UP:
                                t = !0,
                                this._move("previousPage", o);
                                break;
                            case a.PAGE_DOWN:
                                t = !0,
                                this._move("nextPage", o);
                                break;
                            case a.UP:
                                t = !0,
                                this._keyEvent("previous", o);
                                break;
                            case a.DOWN:
                                t = !0,
                                this._keyEvent("next", o);
                                break;
                            case a.ENTER:
                            case a.NUMPAD_ENTER:
                                this.menu.active && (t = !0, o.preventDefault(), this.menu.select(o));
                                break;
                            case a.TAB:
                                this.menu.active && this.menu.select(o);
                                break;
                            case a.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(o), o.preventDefault());
                                break;
                            default:
                                n = !0,
                                this._searchTimeout(o)
                            }
                        },
                        keypress: function(i) {
                            if (t) return t = !1,
                            void i.preventDefault();
                            if (!n) {
                                var o = e.ui.keyCode;
                                switch (i.keyCode) {
                                case o.PAGE_UP:
                                    this._move("previousPage", i);
                                    break;
                                case o.PAGE_DOWN:
                                    this._move("nextPage", i);
                                    break;
                                case o.UP:
                                    this._keyEvent("previous", i);
                                    break;
                                case o.DOWN:
                                    this._keyEvent("next", i)
                                }
                            }
                        },
                        input: function(e) {
                            return i ? (i = !1, void e.preventDefault()) : void this._searchTimeout(e)
                        },
                        focus: function() {
                            this.selectedItem = null,
                            this.previous = this._value()
                        },
                        blur: function(e) {
                            return this.cancelBlur ? void delete this.cancelBlur: (clearTimeout(this.searching), this.close(e), void this._change(e))
                        }
                    }),
                    this._initSource(),
                    this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                        input: e(),
                        role: null
                    }).zIndex(this.element.zIndex() + 1).hide().data("menu"),
                    this._on(this.menu.element, {
                        mousedown: function(t) {
                            t.preventDefault(),
                            this.cancelBlur = !0,
                            this._delay(function() {
                                delete this.cancelBlur
                            });
                            var n = this.menu.element[0];
                            e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                                var t = this;
                                this.document.one("mousedown",
                                function(i) {
                                    i.target === t.element[0] || i.target === n || e.contains(n, i.target) || t.close()
                                })
                            })
                        },
                        menufocus: function(t, n) {
                            if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(),
                            void this.document.one("mousemove",
                            function() {
                                e(t.target).trigger(t.originalEvent)
                            });
                            var i = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete"); ! 1 !== this._trigger("focus", t, {
                                item: i
                            }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(i.value) : this.liveRegion.text(i.value)
                        },
                        menuselect: function(e, t) {
                            var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
                            i = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function() {
                                this.previous = i,
                                this.selectedItem = n
                            })),
                            !1 !== this._trigger("select", e, {
                                item: n
                            }) && this._value(n.value),
                            this.term = this._value(),
                            this.close(e),
                            this.selectedItem = n
                        }
                    }),
                    this.liveRegion = e("<span>", {
                        role: "status",
                        "aria-live": "polite"
                    }).addClass("ui-helper-hidden-accessible").insertAfter(this.element),
                    e.fn.bgiframe && this.menu.element.bgiframe(),
                    this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _destroy: function() {
                    clearTimeout(this.searching),
                    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
                    this.menu.element.remove(),
                    this.liveRegion.remove()
                },
                _setOption: function(e, t) {
                    this._super(e, t),
                    "source" === e && this._initSource(),
                    "appendTo" === e && this.menu.element.appendTo(this.document.find(t || "body")[0]),
                    "disabled" === e && t && this.xhr && this.xhr.abort()
                },
                _isMultiLine: function() {
                    return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
                },
                _initSource: function() {
                    var t, n, i = this;
                    e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, i) {
                        i(e.ui.autocomplete.filter(t, n.term))
                    }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, o) {
                        i.xhr && i.xhr.abort(),
                        i.xhr = e.ajax({
                            url: n,
                            data: t,
                            dataType: "json",
                            success: function(e) {
                                o(e)
                            },
                            error: function() {
                                o([])
                            }
                        })
                    }) : this.source = this.options.source
                },
                _searchTimeout: function(e) {
                    clearTimeout(this.searching),
                    this.searching = this._delay(function() {
                        this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
                    },
                    this.options.delay)
                },
                search: function(e, t) {
                    return e = null != e ? e: this._value(),
                    this.term = this._value(),
                    e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
                },
                _search: function(e) {
                    this.pending++,
                    this.element.addClass("ui-autocomplete-loading"),
                    this.cancelSearch = !1,
                    this.source({
                        term: e
                    },
                    this._response())
                },
                _response: function() {
                    var e = this,
                    t = ++n;
                    return function(i) {
                        t === n && e.__response(i),
                        e.pending--,
                        e.pending || e.element.removeClass("ui-autocomplete-loading")
                    }
                },
                __response: function(e) {
                    e && (e = this._normalize(e)),
                    this._trigger("response", null, {
                        content: e
                    }),
                    !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
                },
                close: function(e) {
                    this.cancelSearch = !0,
                    this._close(e)
                },
                _close: function(e) {
                    this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
                },
                _change: function(e) {
                    this.previous !== this._value() && this._trigger("change", e, {
                        item: this.selectedItem
                    })
                },
                _normalize: function(t) {
                    return t.length && t[0].label && t[0].value ? t: e.map(t,
                    function(t) {
                        return "string" == typeof t ? {
                            label: t,
                            value: t
                        }: e.extend({
                            label: t.label || t.value,
                            value: t.value || t.label
                        },
                        t)
                    })
                },
                _suggest: function(t) {
                    var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                    this._renderMenu(n, t),
                    this.menu.refresh(),
                    n.show(),
                    this._resizeMenu(),
                    n.position(e.extend({
                        of: this.element
                    },
                    this.options.position)),
                    this.options.autoFocus && this.menu.next()
                },
                _resizeMenu: function() {
                    var e = this.menu.element;
                    e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function(t, n) {
                    var i = this;
                    e.each(n,
                    function(e, n) {
                        i._renderItemData(t, n)
                    })
                },
                _renderItemData: function(e, t) {
                    return this._renderItem(e, t).data("ui-autocomplete-item", t)
                },
                _renderItem: function(t, n) {
                    return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
                },
                _move: function(e, t) {
                    return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
                },
                widget: function() {
                    return this.menu.element
                },
                _value: function() {
                    return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function(e, t) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
                }
            }),
            e.extend(e.ui.autocomplete, {
                escapeRegex: function(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function(t, n) {
                    var i = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
                    return e.grep(t,
                    function(e) {
                        return i.test(e.label || e.value || e)
                    })
                }
            }),
            e.widget("ui.autocomplete", e.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(e) {
                            return e + (e > 1 ? " results are": " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function(e) {
                    var t;
                    this._superApply(arguments),
                    this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
                }
            })
        } (jQuery),
        function(e, t) {
            var n = !1;
            e.widget("ui.menu", {
                version: "1.9.2",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-carat-1-e"
                    },
                    menus: "ul",
                    position: {
                        my: "left top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element,
                    this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                        this.options.disabled && e.preventDefault()
                    },
                    this)),
                    this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
                    this._on({
                        "mousedown .ui-menu-item > a": function(e) {
                            e.preventDefault()
                        },
                        "click .ui-state-disabled > a": function(e) {
                            e.preventDefault()
                        },
                        "click .ui-menu-item:has(a)": function(t) {
                            var i = e(t.target).closest(".ui-menu-item"); ! n && i.not(".ui-state-disabled").length && (n = !0, this.select(t), i.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(t) {
                            var n = e(t.currentTarget);
                            n.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                            this.focus(t, n)
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(e, t) {
                            var n = this.active || this.element.children(".ui-menu-item").eq(0);
                            t || this.focus(e, n)
                        },
                        blur: function(t) {
                            this._delay(function() {
                                e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                            })
                        },
                        keydown: "_keydown"
                    }),
                    this.refresh(),
                    this._on(this.document, {
                        click: function(t) {
                            e(t.target).closest(".ui-menu").length || this.collapseAll(t),
                            n = !1
                        }
                    })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
                    this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var t = e(this);
                        t.data("ui-menu-submenu-carat") && t.remove()
                    }),
                    this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(t) {
                    function n(e) {
                        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                    }
                    var i, o, a, r, s, l = !0;
                    switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        l = !1,
                        o = this.previousFilter || "",
                        a = String.fromCharCode(t.keyCode),
                        r = !1,
                        clearTimeout(this.filterTimer),
                        a === o ? r = !0 : a = o + a,
                        s = new RegExp("^" + n(a), "i"),
                        i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return s.test(e(this).children("a").text())
                        }),
                        i = r && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i,
                        i.length || (a = String.fromCharCode(t.keyCode), s = new RegExp("^" + n(a), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return s.test(e(this).children("a").text())
                        })),
                        i.length ? (this.focus(t, i), i.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        },
                        1e3)) : delete this.previousFilter) : delete this.previousFilter
                    }
                    l && t.preventDefault()
                },
                _activate: function(e) {
                    this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
                },
                refresh: function() {
                    var t, n = this.options.icons.submenu,
                    i = this.element.find(this.options.menus);
                    i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var t = e(this),
                        i = t.prev("a"),
                        o = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                        i.attr("aria-haspopup", "true").prepend(o),
                        t.attr("aria-labelledby", i.attr("id"))
                    }),
                    t = i.add(this.element),
                    t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }),
                    t.children(":not(.ui-menu-item)").each(function() {
                        var t = e(this);
                        /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
                    }),
                    t.children(".ui-state-disabled").attr("aria-disabled", "true"),
                    this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    } [this.options.role]
                },
                focus: function(e, t) {
                    var n, i;
                    this.blur(e, e && "focus" === e.type),
                    this._scrollIntoView(t),
                    this.active = t.first(),
                    i = this.active.children("a").addClass("ui-state-focus"),
                    this.options.role && this.element.attr("aria-activedescendant", i.attr("id")),
                    this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
                    e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    },
                    this.delay),
                    n = t.children(".ui-menu"),
                    n.length && /^mouse/.test(e.type) && this._startOpening(n),
                    this.activeMenu = t.parent(),
                    this._trigger("focus", e, {
                        item: t
                    })
                },
                _scrollIntoView: function(t) {
                    var n, i, o, a, r, s;
                    this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, o = t.offset().top - this.activeMenu.offset().top - n - i, a = this.activeMenu.scrollTop(), r = this.activeMenu.height(), s = t.height(), 0 > o ? this.activeMenu.scrollTop(a + o) : o + s > r && this.activeMenu.scrollTop(a + o - r + s))
                },
                blur: function(e, t) {
                    t || clearTimeout(this.timer),
                    this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                        item: this.active
                    }))
                },
                _startOpening: function(e) {
                    clearTimeout(this.timer),
                    "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close(),
                        this._open(e)
                    },
                    this.delay))
                },
                _open: function(t) {
                    var n = e.extend({
                        of: this.active
                    },
                    this.options.position);
                    clearTimeout(this.timer),
                    this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
                    t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
                },
                collapseAll: function(t, n) {
                    clearTimeout(this.timer),
                    this.timer = this._delay(function() {
                        var i = n ? this.element: e(t && t.target).closest(this.element.find(".ui-menu"));
                        i.length || (i = this.element),
                        this._close(i),
                        this.blur(t),
                        this.activeMenu = i
                    },
                    this.delay)
                },
                _close: function(e) {
                    e || (e = this.active ? this.active.parent() : this.element),
                    e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
                },
                collapse: function(e) {
                    var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    t && t.length && (this._close(), this.focus(e, t))
                },
                expand: function(e) {
                    var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                    t && t.length && (this._open(t.parent()), this._delay(function() {
                        this.focus(e, t)
                    }))
                },
                next: function(e) {
                    this._move("next", "first", e)
                },
                previous: function(e) {
                    this._move("prev", "last", e)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(e, t, n) {
                    var i;
                    this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll": "nextAll"](".ui-menu-item").eq( - 1) : this.active[e + "All"](".ui-menu-item").eq(0)),
                    i && i.length && this.active || (i = this.activeMenu.children(".ui-menu-item")[t]()),
                    this.focus(n, i)
                },
                nextPage: function(t) {
                    var n, i, o;
                    return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, o = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return n = e(this),
                        n.offset().top - i - o < 0
                    }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last": "first"]()))) : void this.next(t)
                },
                previousPage: function(t) {
                    var n, i, o;
                    return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, o = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return n = e(this),
                        n.offset().top - i + o > 0
                    }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(t)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(t) {
                    this.active = this.active || e(t.target).closest(".ui-menu-item");
                    var n = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(t, !0),
                    this._trigger("select", t, n)
                }
            })
        } (jQuery)
    }
});