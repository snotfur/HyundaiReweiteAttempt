( () => {
    "use strict";
    var e, n, t = {
        48: (e, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }
        ,
        269: (e, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }
        ,
        460: (e, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }
        ,
        778: (e, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }
        ,
        125: (e, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }
        ,
        65: (e, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.classnames = void 0;
            const t = e => Object.entries(e).map(( ([e,n]) => n && e))
              , a = e => !!e
              , r = (e, n, t) => t.indexOf(e) === n
              , o = [];
            function i(e) {
                return e ? "string" == typeof e ? [e] : Array.isArray(e) ? e.flatMap(i).filter(a) : t(e).filter(a) : o
            }
            n.classnames = function(e) {
                const n = i(e).filter(r);
                return n.length > 0 ? n.join(" ") : void 0
            }
        }
        ,
        665: function(e, n, t) {
            var a = this && this.__createBinding || (Object.create ? function(e, n, t, a) {
                void 0 === a && (a = t);
                var r = Object.getOwnPropertyDescriptor(n, t);
                r && !("get"in r ? !n.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return n[t]
                    }
                }),
                Object.defineProperty(e, a, r)
            }
            : function(e, n, t, a) {
                void 0 === a && (a = t),
                e[a] = n[t]
            }
            )
              , r = this && this.__exportStar || function(e, n) {
                for (var t in e)
                    "default" === t || Object.prototype.hasOwnProperty.call(n, t) || a(n, e, t)
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            r(t(48), n),
            r(t(269), n),
            r(t(125), n),
            r(t(778), n),
            r(t(460), n),
            r(t(65), n)
        },
        53: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.createRef = n.h = n.createElement = void 0;
            const a = t(136)
              , r = t(56);
            function o(e, n, ...t) {
                if ("function" == typeof e)
                    return e({
                        ...n,
                        children: t
                    });
                const {finalTag: o, finalAttrs: i} = (0,
                r.applyTsxTag)(e, n)
                  , s = (0,
                r.createDomElement)(o, i);
                return i && (0,
                a.setAttributes)(s, i),
                (0,
                r.applyChildren)(s, t),
                s
            }
            n.createElement = o,
            n.h = o;
            n.createRef = () => ({
                current: null
            })
        }
        ,
        325: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.defineCustomElement = void 0;
            const a = t(553);
            n.defineCustomElement = function(e, n, t) {
                return customElements.define(e, n, t),
                n => (0,
                a.jsx)(e, n)
            }
        }
        ,
        29: function(e, n, t) {
            var a = this && this.__createBinding || (Object.create ? function(e, n, t, a) {
                void 0 === a && (a = t);
                var r = Object.getOwnPropertyDescriptor(n, t);
                r && !("get"in r ? !n.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return n[t]
                    }
                }),
                Object.defineProperty(e, a, r)
            }
            : function(e, n, t, a) {
                void 0 === a && (a = t),
                e[a] = n[t]
            }
            )
              , r = this && this.__exportStar || function(e, n) {
                for (var t in e)
                    "default" === t || Object.prototype.hasOwnProperty.call(n, t) || a(n, e, t)
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            r(t(53), n),
            r(t(325), n),
            r(t(553), n),
            r(t(836), n)
        },
        553: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.jsxDEV = n.jsxs = n.jsx = void 0;
            const a = t(136)
              , r = t(56);
            function o(e, n) {
                if ("function" == typeof e)
                    return e(n);
                const {children: t, ...o} = n
                  , {finalTag: i, finalAttrs: s} = (0,
                r.applyTsxTag)(e, o)
                  , l = (0,
                r.createDomElement)(i, s);
                return (0,
                a.setAttributes)(l, s),
                (0,
                r.applyChildren)(l, [t]),
                l
            }
            n.jsx = o,
            n.jsxs = o,
            n.jsxDEV = o
        }
        ,
        136: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.setAttributes = void 0;
            const a = t(665);
            function r(e, n) {
                for (const t of Object.keys(e))
                    t in n && (n[t] = e[t])
            }
            const o = /^on\p{Lu}/u;
            n.setAttributes = function(e, n) {
                for (const t of Object.keys(n)) {
                    if ("__source" === t || "__self" === t || "tsxTag" === t)
                        continue;
                    const i = n[t];
                    if ("class" === t) {
                        const n = (0,
                        a.classnames)(i);
                        n && e.setAttribute(t, n)
                    } else if ("ref" === t)
                        i.current = e;
                    else if (o.test(t)) {
                        const n = t.replace(/Capture$/, "")
                          , a = t !== n
                          , r = n.toLowerCase().substring(2);
                        e.addEventListener(r, i, a)
                    } else
                        "style" === t && "string" != typeof i ? r(i, e.style) : "dangerouslySetInnerHTML" === t ? e.innerHTML = i : !0 === i ? e.setAttribute(t, t) : (i || 0 === i) && e.setAttribute(t, i.toString())
                }
            }
        }
        ,
        836: (e, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }
        ,
        56: (e, n) => {
            function t(e, n) {
                n instanceof Element ? e.appendChild(n) : "string" == typeof n || "number" == typeof n ? e.appendChild(document.createTextNode(n.toString())) : console.warn("Unknown type to append: ", n)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.applyTsxTag = n.createDomElement = n.applyChildren = void 0,
            n.applyChildren = function e(n, a) {
                for (const r of a)
                    (r || 0 === r) && (Array.isArray(r) ? e(n, r) : t(n, r))
            }
            ,
            n.createDomElement = function(e, n) {
                const t = n?.is ? {
                    is: n.is
                } : void 0;
                return n?.xmlns ? document.createElementNS(n.xmlns, e, t) : document.createElement(e, t)
            }
            ,
            n.applyTsxTag = function(e, n) {
                let t = e
                  , a = n;
                return a && "tsxTag"in a && (t = a.tsxTag,
                !a.is && e.includes("-") && (a = {
                    ...a,
                    is: e
                })),
                {
                    finalTag: t,
                    finalAttrs: a
                }
            }
        }
        ,
        791: (e, n, t) => {
            e.exports = t.p + "03a797c49daa11fddbe8.wasm"
        }
        ,
        797: (e, n, t) => {
            e.exports = t.p + "5b2cedaaf145225d0595.wasm"
        }
    }, a = {};
    function r(e) {
        var n = a[e];
        if (void 0 !== n)
            return n.exports;
        var o = a[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r),
        o.loaded = !0,
        o.exports
    }
    r.m = t,
    r.d = (e, n) => {
        for (var t in n)
            r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: n[t]
            })
    }
    ,
    r.f = {},
    r.e = e => Promise.all(Object.keys(r.f).reduce(( (n, t) => (r.f[t](e, n),
    n)), [])),
    r.u = e => "core.ruffle." + {
        69: "e33c253bda9c34f59f90",
        655: "c1d60dee0c2dd3d779b3"
    }[e] + ".js",
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.hmd = e => ((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n),
    e = {},
    n = "ruffle-selfhosted:",
    r.l = (t, a, o, i) => {
        if (e[t])
            e[t].push(a);
        else {
            var s, l;
            if (void 0 !== o)
                for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                    var d = u[c];
                    if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == n + o) {
                        s = d;
                        break
                    }
                }
            s || (l = !0,
            (s = document.createElement("script")).charset = "utf-8",
            s.timeout = 120,
            r.nc && s.setAttribute("nonce", r.nc),
            s.setAttribute("data-webpack", n + o),
            s.src = t),
            e[t] = [a];
            var f = (n, a) => {
                s.onerror = s.onload = null,
                clearTimeout(m);
                var r = e[t];
                if (delete e[t],
                s.parentNode && s.parentNode.removeChild(s),
                r && r.forEach((e => e(a))),
                n)
                    return n(a)
            }
              , m = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: s
            }), 12e4);
            s.onerror = f.bind(null, s.onerror),
            s.onload = f.bind(null, s.onload),
            l && document.head.appendChild(s)
        }
    }
    ,
    r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.p = "",
    ( () => {
        r.b = document.baseURI || self.location.href;
        var e = {
            792: 0
        };
        r.f.j = (n, t) => {
            var a = r.o(e, n) ? e[n] : void 0;
            if (0 !== a)
                if (a)
                    t.push(a[2]);
                else {
                    var o = new Promise(( (t, r) => a = e[n] = [t, r]));
                    t.push(a[2] = o);
                    var i = r.p + r.u(n)
                      , s = new Error;
                    r.l(i, (t => {
                        if (r.o(e, n) && (0 !== (a = e[n]) && (e[n] = void 0),
                        a)) {
                            var o = t && ("load" === t.type ? "missing" : t.type)
                              , i = t && t.target && t.target.src;
                            s.message = "Loading chunk " + n + " failed.\n(" + o + ": " + i + ")",
                            s.name = "ChunkLoadError",
                            s.type = o,
                            s.request = i,
                            a[1](s)
                        }
                    }
                    ), "chunk-" + n, n)
                }
        }
        ;
        var n = (n, t) => {
            var a, o, [i,s,l] = t, u = 0;
            if (i.some((n => 0 !== e[n]))) {
                for (a in s)
                    r.o(s, a) && (r.m[a] = s[a]);
                if (l)
                    l(r)
            }
            for (n && n(t); u < i.length; u++)
                o = i[u],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0
        }
          , t = self.webpackChunkruffle_selfhosted = self.webpackChunkruffle_selfhosted || [];
        t.forEach(n.bind(null, 0)),
        t.push = n.bind(null, t.push.bind(t))
    }
    )();
    class o {
        constructor(e, n, t, a, r) {
            this.major = e,
            this.minor = n,
            this.patch = t,
            this.prIdent = a,
            this.buildIdent = r
        }
        static fromSemver(e) {
            const n = e.split("+")
              , t = n[0].split("-")
              , a = t[0].split(".")
              , r = parseInt(a[0], 10);
            let i = 0
              , s = 0
              , l = null
              , u = null;
            return void 0 !== a[1] && (i = parseInt(a[1], 10)),
            void 0 !== a[2] && (s = parseInt(a[2], 10)),
            void 0 !== t[1] && (l = t[1].split(".")),
            void 0 !== n[1] && (u = n[1].split(".")),
            new o(r,i,s,l,u)
        }
        isCompatibleWith(e) {
            return 0 !== this.major && this.major === e.major || 0 === this.major && 0 === e.major && 0 !== this.minor && this.minor === e.minor || 0 === this.major && 0 === e.major && 0 === this.minor && 0 === e.minor && 0 !== this.patch && this.patch === e.patch
        }
        hasPrecedenceOver(e) {
            if (this.major > e.major)
                return !0;
            if (this.major < e.major)
                return !1;
            if (this.minor > e.minor)
                return !0;
            if (this.minor < e.minor)
                return !1;
            if (this.patch > e.patch)
                return !0;
            if (this.patch < e.patch)
                return !1;
            if (null === this.prIdent && null !== e.prIdent)
                return !0;
            if (null !== this.prIdent && null === e.prIdent)
                return !1;
            if (null !== this.prIdent && null !== e.prIdent) {
                const n = /^[0-9]*$/;
                for (let t = 0; t < this.prIdent.length && t < e.prIdent.length; t += 1) {
                    const a = n.test(e.prIdent[t])
                      , r = n.test(this.prIdent[t]);
                    if (!r && a)
                        return !0;
                    if (r && a) {
                        const n = parseInt(this.prIdent[t], 10)
                          , a = parseInt(e.prIdent[t], 10);
                        if (n > a)
                            return !0;
                        if (n < a)
                            return !1
                    } else {
                        if (r && !a)
                            return !1;
                        if (!r && !a) {
                            if (this.prIdent[t] > e.prIdent[t])
                                return !0;
                            if (this.prIdent[t] < e.prIdent[t])
                                return !1
                        }
                    }
                }
                if (this.prIdent.length > e.prIdent.length)
                    return !0;
                if (this.prIdent.length < e.prIdent.length)
                    return !1
            }
            if (null !== this.buildIdent && null === e.buildIdent)
                return !0;
            if (null === this.buildIdent && null !== e.buildIdent)
                return !1;
            if (null !== this.buildIdent && null !== e.buildIdent) {
                const n = /^[0-9]*$/;
                for (let t = 0; t < this.buildIdent.length && t < e.buildIdent.length; t += 1) {
                    const a = n.test(this.buildIdent[t])
                      , r = n.test(e.buildIdent[t]);
                    if (!a && r)
                        return !0;
                    if (a && r) {
                        const n = parseInt(this.buildIdent[t], 10)
                          , a = parseInt(e.buildIdent[t], 10);
                        if (n > a)
                            return !0;
                        if (n < a)
                            return !1
                    } else {
                        if (a && !r)
                            return !1;
                        if (!a && !r) {
                            if (this.buildIdent[t] > e.buildIdent[t])
                                return !0;
                            if (this.buildIdent[t] < e.buildIdent[t])
                                return !1
                        }
                    }
                }
                return this.buildIdent.length > e.buildIdent.length
            }
            return !1
        }
        isEqual(e) {
            return this.major === e.major && this.minor === e.minor && this.patch === e.patch
        }
        isStableOrCompatiblePrerelease(e) {
            return null === e.prIdent || this.major === e.major && this.minor === e.minor && this.patch === e.patch
        }
    }
    class i {
        constructor(e) {
            this.requirements = e
        }
        satisfiedBy(e) {
            for (const n of this.requirements) {
                let t = !0;
                for (const {comparator: a, version: r} of n)
                    t = t && r.isStableOrCompatiblePrerelease(e),
                    "" === a || "=" === a ? t = t && r.isEqual(e) : ">" === a ? t = t && e.hasPrecedenceOver(r) : ">=" === a ? t = t && (e.hasPrecedenceOver(r) || r.isEqual(e)) : "<" === a ? t = t && r.hasPrecedenceOver(e) : "<=" === a ? t = t && (r.hasPrecedenceOver(e) || r.isEqual(e)) : "^" === a && (t = t && r.isCompatibleWith(e));
                if (t)
                    return !0
            }
            return !1
        }
        static fromRequirementString(e) {
            const n = e.split(" ");
            let t = [];
            const a = [];
            for (const e of n)
                if ("||" === e)
                    t.length > 0 && (a.push(t),
                    t = []);
                else if (e.length > 0) {
                    const n = /[0-9]/.exec(e);
                    if (n) {
                        const a = e.slice(0, n.index).trim()
                          , r = o.fromSemver(e.slice(n.index).trim());
                        t.push({
                            comparator: a,
                            version: r
                        })
                    }
                }
            return t.length > 0 && a.push(t),
            new i(a)
        }
    }
    class s {
        constructor(e) {
            this.sources = e?.sources || {},
            this.config = e?.config || {},
            this.invoked = e?.invoked || !1,
            this.newestName = e?.newestName || null,
            e?.superseded?.(),
            "loading" === document.readyState ? document.addEventListener("readystatechange", this.init.bind(this)) : window.setTimeout(this.init.bind(this), 0)
        }
        get version() {
            return "0.1.0"
        }
        newestSourceName() {
            let e = null
              , n = o.fromSemver("0.0.0");
            for (const t in this.sources)
                if (Object.prototype.hasOwnProperty.call(this.sources, t)) {
                    const a = o.fromSemver(this.sources[t].version);
                    a.hasPrecedenceOver(n) && (e = t,
                    n = a)
                }
            return e
        }
        init() {
            if (!this.invoked) {
                if (this.invoked = !0,
                this.newestName = this.newestSourceName(),
                null === this.newestName)
                    throw new Error("No registered Ruffle source!");
                !1 !== (!("polyfills"in this.config) || this.config.polyfills) && this.sources[this.newestName].polyfill()
            }
        }
        newest() {
            const e = this.newestSourceName();
            return null !== e ? this.sources[e] : null
        }
        satisfying(e) {
            const n = i.fromRequirementString(e);
            let t = null;
            for (const e in this.sources)
                if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
                    const a = o.fromSemver(this.sources[e].version);
                    n.satisfiedBy(a) && (t = this.sources[e])
                }
            return t
        }
        localCompatible() {
            return void 0 !== this.sources.local ? this.satisfying("^" + this.sources.local.version) : this.newest()
        }
        local() {
            return void 0 !== this.sources.local ? this.satisfying("=" + this.sources.local.version) : this.newest()
        }
        superseded() {
            this.invoked = !0
        }
    }
    var l, u, c, d, f, m, p, h, v, g, b = r(553);
    !function(e) {
        e.On = "on",
        e.Off = "off",
        e.Auto = "auto"
    }(l || (l = {})),
    function(e) {
        e.Off = "off",
        e.Fullscreen = "fullscreen",
        e.On = "on"
    }(u || (u = {})),
    function(e) {
        e.Visible = "visible",
        e.Hidden = "hidden"
    }(c || (c = {})),
    function(e) {
        e.Error = "error",
        e.Warn = "warn",
        e.Info = "info",
        e.Debug = "debug",
        e.Trace = "trace"
    }(d || (d = {})),
    function(e) {
        e.Window = "window",
        e.Opaque = "opaque",
        e.Transparent = "transparent",
        e.Direct = "direct",
        e.Gpu = "gpu"
    }(f || (f = {})),
    function(e) {
        e.WebGpu = "webgpu",
        e.WgpuWebgl = "wgpu-webgl",
        e.Webgl = "webgl",
        e.Canvas = "canvas"
    }(m || (m = {})),
    function(e) {
        e.On = "on",
        e.RightClickOnly = "rightClickOnly",
        e.Off = "off"
    }(p || (p = {})),
    function(e) {
        e.AIR = "air",
        e.FlashPlayer = "flashPlayer"
    }(h || (h = {})),
    function(e) {
        e.Allow = "allow",
        e.Confirm = "confirm",
        e.Deny = "deny"
    }(v || (v = {})),
    function(e) {
        e.All = "all",
        e.Internal = "internal",
        e.None = "none"
    }(g || (g = {}));
    class w {
        constructor(e) {
            this.value = e
        }
        valueOf() {
            return this.value
        }
    }
    class k extends w {
        constructor(e="???") {
            super(e)
        }
        toString(e) {
            return `{${this.value}}`
        }
    }
    class y extends w {
        constructor(e, n={}) {
            super(e),
            this.opts = n
        }
        toString(e) {
            try {
                return e.memoizeIntlObject(Intl.NumberFormat, this.opts).format(this.value)
            } catch (n) {
                return e.reportError(n),
                this.value.toString(10)
            }
        }
    }
    class R extends w {
        constructor(e, n={}) {
            super(e),
            this.opts = n
        }
        toString(e) {
            try {
                return e.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(this.value)
            } catch (n) {
                return e.reportError(n),
                new Date(this.value).toISOString()
            }
        }
    }
    const x = 100
      , z = "\u2068"
      , j = "\u2069";
    function S(e, n, t) {
        if (t === n)
            return !0;
        if (t instanceof y && n instanceof y && t.value === n.value)
            return !0;
        if (n instanceof y && "string" == typeof t) {
            if (t === e.memoizeIntlObject(Intl.PluralRules, n.opts).select(n.value))
                return !0
        }
        return !1
    }
    function E(e, n, t) {
        return n[t] ? F(e, n[t].value) : (e.reportError(new RangeError("No default")),
        new k)
    }
    function C(e, n) {
        const t = []
          , a = Object.create(null);
        for (const r of n)
            "narg" === r.type ? a[r.name] = A(e, r.value) : t.push(A(e, r));
        return {
            positional: t,
            named: a
        }
    }
    function A(e, n) {
        switch (n.type) {
        case "str":
            return n.value;
        case "num":
            return new y(n.value,{
                minimumFractionDigits: n.precision
            });
        case "var":
            return function(e, {name: n}) {
                let t;
                if (e.params) {
                    if (!Object.prototype.hasOwnProperty.call(e.params, n))
                        return new k(`$${n}`);
                    t = e.params[n]
                } else {
                    if (!e.args || !Object.prototype.hasOwnProperty.call(e.args, n))
                        return e.reportError(new ReferenceError(`Unknown variable: $${n}`)),
                        new k(`$${n}`);
                    t = e.args[n]
                }
                if (t instanceof w)
                    return t;
                switch (typeof t) {
                case "string":
                    return t;
                case "number":
                    return new y(t);
                case "object":
                    if (t instanceof Date)
                        return new R(t.getTime());
                default:
                    return e.reportError(new TypeError(`Variable type not supported: $${n}, ${typeof t}`)),
                    new k(`$${n}`)
                }
            }(e, n);
        case "mesg":
            return function(e, {name: n, attr: t}) {
                const a = e.bundle._messages.get(n);
                if (!a)
                    return e.reportError(new ReferenceError(`Unknown message: ${n}`)),
                    new k(n);
                if (t) {
                    const r = a.attributes[t];
                    return r ? F(e, r) : (e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),
                    new k(`${n}.${t}`))
                }
                if (a.value)
                    return F(e, a.value);
                return e.reportError(new ReferenceError(`No value: ${n}`)),
                new k(n)
            }(e, n);
        case "term":
            return function(e, {name: n, attr: t, args: a}) {
                const r = `-${n}`
                  , o = e.bundle._terms.get(r);
                if (!o)
                    return e.reportError(new ReferenceError(`Unknown term: ${r}`)),
                    new k(r);
                if (t) {
                    const n = o.attributes[t];
                    if (n) {
                        e.params = C(e, a).named;
                        const t = F(e, n);
                        return e.params = null,
                        t
                    }
                    return e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),
                    new k(`${r}.${t}`)
                }
                e.params = C(e, a).named;
                const i = F(e, o.value);
                return e.params = null,
                i
            }(e, n);
        case "func":
            return function(e, {name: n, args: t}) {
                let a = e.bundle._functions[n];
                if (!a)
                    return e.reportError(new ReferenceError(`Unknown function: ${n}()`)),
                    new k(`${n}()`);
                if ("function" != typeof a)
                    return e.reportError(new TypeError(`Function ${n}() is not callable`)),
                    new k(`${n}()`);
                try {
                    let n = C(e, t);
                    return a(n.positional, n.named)
                } catch (t) {
                    return e.reportError(t),
                    new k(`${n}()`)
                }
            }(e, n);
        case "select":
            return function(e, {selector: n, variants: t, star: a}) {
                let r = A(e, n);
                if (r instanceof k)
                    return E(e, t, a);
                for (const n of t) {
                    if (S(e, r, A(e, n.key)))
                        return F(e, n.value)
                }
                return E(e, t, a)
            }(e, n);
        default:
            return new k
        }
    }
    function q(e, n) {
        if (e.dirty.has(n))
            return e.reportError(new RangeError("Cyclic reference")),
            new k;
        e.dirty.add(n);
        const t = []
          , a = e.bundle._useIsolating && n.length > 1;
        for (const r of n)
            if ("string" != typeof r) {
                if (e.placeables++,
                e.placeables > x)
                    throw e.dirty.delete(n),
                    new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${x}`);
                a && t.push(z),
                t.push(A(e, r).toString(e)),
                a && t.push(j)
            } else
                t.push(e.bundle._transform(r));
        return e.dirty.delete(n),
        t.join("")
    }
    function F(e, n) {
        return "string" == typeof n ? e.bundle._transform(n) : q(e, n)
    }
    class D {
        constructor(e, n, t) {
            this.dirty = new WeakSet,
            this.params = null,
            this.placeables = 0,
            this.bundle = e,
            this.errors = n,
            this.args = t
        }
        reportError(e) {
            if (!(this.errors && e instanceof Error))
                throw e;
            this.errors.push(e)
        }
        memoizeIntlObject(e, n) {
            let t = this.bundle._intls.get(e);
            t || (t = {},
            this.bundle._intls.set(e, t));
            let a = JSON.stringify(n);
            return t[a] || (t[a] = new e(this.bundle.locales,n)),
            t[a]
        }
    }
    function P(e, n) {
        const t = Object.create(null);
        for (const [a,r] of Object.entries(e))
            n.includes(a) && (t[a] = r.valueOf());
        return t
    }
    const O = ["unitDisplay", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];
    function $(e, n) {
        let t = e[0];
        if (t instanceof k)
            return new k(`NUMBER(${t.valueOf()})`);
        if (t instanceof y)
            return new y(t.valueOf(),{
                ...t.opts,
                ...P(n, O)
            });
        if (t instanceof R)
            return new y(t.valueOf(),{
                ...P(n, O)
            });
        throw new TypeError("Invalid argument to NUMBER")
    }
    const M = ["dateStyle", "timeStyle", "fractionalSecondDigits", "dayPeriod", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
    function I(e, n) {
        let t = e[0];
        if (t instanceof k)
            return new k(`DATETIME(${t.valueOf()})`);
        if (t instanceof R)
            return new R(t.valueOf(),{
                ...t.opts,
                ...P(n, M)
            });
        if (t instanceof y)
            return new R(t.valueOf(),{
                ...P(n, M)
            });
        throw new TypeError("Invalid argument to DATETIME")
    }
    const T = new Map;
    class W {
        constructor(e, {functions: n, useIsolating: t=!0, transform: a=e => e}={}) {
            this._terms = new Map,
            this._messages = new Map,
            this.locales = Array.isArray(e) ? e : [e],
            this._functions = {
                NUMBER: $,
                DATETIME: I,
                ...n
            },
            this._useIsolating = t,
            this._transform = a,
            this._intls = function(e) {
                const n = Array.isArray(e) ? e.join(" ") : e;
                let t = T.get(n);
                return void 0 === t && (t = new Map,
                T.set(n, t)),
                t
            }(e)
        }
        hasMessage(e) {
            return this._messages.has(e)
        }
        getMessage(e) {
            return this._messages.get(e)
        }
        addResource(e, {allowOverrides: n=!1}={}) {
            const t = [];
            for (let a = 0; a < e.body.length; a++) {
                let r = e.body[a];
                if (r.id.startsWith("-")) {
                    if (!1 === n && this._terms.has(r.id)) {
                        t.push(new Error(`Attempt to override an existing term: "${r.id}"`));
                        continue
                    }
                    this._terms.set(r.id, r)
                } else {
                    if (!1 === n && this._messages.has(r.id)) {
                        t.push(new Error(`Attempt to override an existing message: "${r.id}"`));
                        continue
                    }
                    this._messages.set(r.id, r)
                }
            }
            return t
        }
        formatPattern(e, n=null, t=null) {
            if ("string" == typeof e)
                return this._transform(e);
            let a = new D(this,t,n);
            try {
                return q(a, e).toString(a)
            } catch (e) {
                if (a.errors && e instanceof Error)
                    return a.errors.push(e),
                    (new k).toString(a);
                throw e
            }
        }
    }
    const L = /^(-?[a-zA-Z][\w-]*) *= */gm
      , _ = /\.([a-zA-Z][\w-]*) *= */y
      , U = /\*?\[/y
      , N = /(-?[0-9]+(?:\.([0-9]+))?)/y
      , B = /([a-zA-Z][\w-]*)/y
      , J = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y
      , V = /^[A-Z][A-Z0-9_-]*$/
      , H = /([^{}\n\r]+)/y
      , Z = /([^\\"\n\r]*)/y
      , K = /\\([\\"])/y
      , Q = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y
      , G = /^\n+/
      , Y = / +$/
      , X = / *\r?\n/g
      , ee = /( *)$/
      , ne = /{\s*/y
      , te = /\s*}/y
      , ae = /\[\s*/y
      , re = /\s*] */y
      , oe = /\s*\(\s*/y
      , ie = /\s*->\s*/y
      , se = /\s*:\s*/y
      , le = /\s*,?\s*/y
      , ue = /\s+/y;
    class ce {
        constructor(e) {
            this.body = [],
            L.lastIndex = 0;
            let n = 0;
            for (; ; ) {
                let t = L.exec(e);
                if (null === t)
                    break;
                n = L.lastIndex;
                try {
                    this.body.push(s(t[1]))
                } catch (e) {
                    if (e instanceof SyntaxError)
                        continue;
                    throw e
                }
            }
            function t(t) {
                return t.lastIndex = n,
                t.test(e)
            }
            function a(t, a) {
                if (e[n] === t)
                    return n++,
                    !0;
                if (a)
                    throw new a(`Expected ${t}`);
                return !1
            }
            function r(e, a) {
                if (t(e))
                    return n = e.lastIndex,
                    !0;
                if (a)
                    throw new a(`Expected ${e.toString()}`);
                return !1
            }
            function o(t) {
                t.lastIndex = n;
                let a = t.exec(e);
                if (null === a)
                    throw new SyntaxError(`Expected ${t.toString()}`);
                return n = t.lastIndex,
                a
            }
            function i(e) {
                return o(e)[1]
            }
            function s(e) {
                let n = l()
                  , a = function() {
                    let e = Object.create(null);
                    for (; t(_); ) {
                        let n = i(_)
                          , t = l();
                        if (null === t)
                            throw new SyntaxError("Expected attribute value");
                        e[n] = t
                    }
                    return e
                }();
                if (null === n && 0 === Object.keys(a).length)
                    throw new SyntaxError("Expected message value or attributes");
                return {
                    id: e,
                    value: n,
                    attributes: a
                }
            }
            function l() {
                let a;
                if (t(H) && (a = i(H)),
                "{" === e[n] || "}" === e[n])
                    return u(a ? [a] : [], 1 / 0);
                let r = g();
                return r ? a ? u([a, r], r.length) : (r.value = b(r.value, G),
                u([r], r.length)) : a ? b(a, Y) : null
            }
            function u(a=[], r) {
                for (; ; ) {
                    if (t(H)) {
                        a.push(i(H));
                        continue
                    }
                    if ("{" === e[n]) {
                        a.push(c());
                        continue
                    }
                    if ("}" === e[n])
                        throw new SyntaxError("Unbalanced closing brace");
                    let o = g();
                    if (!o)
                        break;
                    a.push(o),
                    r = Math.min(r, o.length)
                }
                let o = a.length - 1
                  , s = a[o];
                "string" == typeof s && (a[o] = b(s, Y));
                let l = [];
                for (let e of a)
                    e instanceof de && (e = e.value.slice(0, e.value.length - r)),
                    e && l.push(e);
                return l
            }
            function c() {
                r(ne, SyntaxError);
                let e = d();
                if (r(te))
                    return e;
                if (r(ie)) {
                    let n = function() {
                        let e, n = [], r = 0;
                        for (; t(U); ) {
                            a("*") && (e = r);
                            let t = m()
                              , o = l();
                            if (null === o)
                                throw new SyntaxError("Expected variant value");
                            n[r++] = {
                                key: t,
                                value: o
                            }
                        }
                        if (0 === r)
                            return null;
                        if (void 0 === e)
                            throw new SyntaxError("Expected default variant");
                        return {
                            variants: n,
                            star: e
                        }
                    }();
                    return r(te, SyntaxError),
                    {
                        type: "select",
                        selector: e,
                        ...n
                    }
                }
                throw new SyntaxError("Unclosed placeable")
            }
            function d() {
                if ("{" === e[n])
                    return c();
                if (t(J)) {
                    let[,t,a,i=null] = o(J);
                    if ("$" === t)
                        return {
                            type: "var",
                            name: a
                        };
                    if (r(oe)) {
                        let o = function() {
                            let t = [];
                            for (; ; ) {
                                switch (e[n]) {
                                case ")":
                                    return n++,
                                    t;
                                case void 0:
                                    throw new SyntaxError("Unclosed argument list")
                                }
                                t.push(f()),
                                r(le)
                            }
                        }();
                        if ("-" === t)
                            return {
                                type: "term",
                                name: a,
                                attr: i,
                                args: o
                            };
                        if (V.test(a))
                            return {
                                type: "func",
                                name: a,
                                args: o
                            };
                        throw new SyntaxError("Function names must be all upper-case")
                    }
                    return "-" === t ? {
                        type: "term",
                        name: a,
                        attr: i,
                        args: []
                    } : {
                        type: "mesg",
                        name: a,
                        attr: i
                    }
                }
                return p()
            }
            function f() {
                let e = d();
                return "mesg" !== e.type ? e : r(se) ? {
                    type: "narg",
                    name: e.name,
                    value: p()
                } : e
            }
            function m() {
                let e;
                return r(ae, SyntaxError),
                e = t(N) ? h() : {
                    type: "str",
                    value: i(B)
                },
                r(re, SyntaxError),
                e
            }
            function p() {
                if (t(N))
                    return h();
                if ('"' === e[n])
                    return function() {
                        a('"', SyntaxError);
                        let t = "";
                        for (; ; ) {
                            if (t += i(Z),
                            "\\" !== e[n]) {
                                if (a('"'))
                                    return {
                                        type: "str",
                                        value: t
                                    };
                                throw new SyntaxError("Unclosed string literal")
                            }
                            t += v()
                        }
                    }();
                throw new SyntaxError("Invalid expression")
            }
            function h() {
                let[,e,n=""] = o(N)
                  , t = n.length;
                return {
                    type: "num",
                    value: parseFloat(e),
                    precision: t
                }
            }
            function v() {
                if (t(K))
                    return i(K);
                if (t(Q)) {
                    let[,e,n] = o(Q)
                      , t = parseInt(e || n, 16);
                    return t <= 55295 || 57344 <= t ? String.fromCodePoint(t) : "\ufffd"
                }
                throw new SyntaxError("Unknown escape sequence")
            }
            function g() {
                let t = n;
                switch (r(ue),
                e[n]) {
                case ".":
                case "[":
                case "*":
                case "}":
                case void 0:
                    return !1;
                case "{":
                    return w(e.slice(t, n))
                }
                return " " === e[n - 1] && w(e.slice(t, n))
            }
            function b(e, n) {
                return e.replace(n, "")
            }
            function w(e) {
                let n = e.replace(X, "\n")
                  , t = ee.exec(e)[1].length;
                return new de(n,t)
            }
        }
    }
    class de {
        constructor(e, n) {
            this.value = e,
            this.length = n
        }
    }
    const fe = new RegExp("^([a-z]{2,3}|\\*)(?:-([a-z]{4}|\\*))?(?:-([a-z]{2}|\\*))?(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))?$","i");
    class me {
        constructor(e) {
            const n = fe.exec(e.replace(/_/g, "-"));
            if (!n)
                return void (this.isWellFormed = !1);
            let[,t,a,r,o] = n;
            t && (this.language = t.toLowerCase()),
            a && (this.script = a[0].toUpperCase() + a.slice(1)),
            r && (this.region = r.toUpperCase()),
            this.variant = o,
            this.isWellFormed = !0
        }
        isEqual(e) {
            return this.language === e.language && this.script === e.script && this.region === e.region && this.variant === e.variant
        }
        matches(e, n=!1, t=!1) {
            return (this.language === e.language || n && void 0 === this.language || t && void 0 === e.language) && (this.script === e.script || n && void 0 === this.script || t && void 0 === e.script) && (this.region === e.region || n && void 0 === this.region || t && void 0 === e.region) && (this.variant === e.variant || n && void 0 === this.variant || t && void 0 === e.variant)
        }
        toString() {
            return [this.language, this.script, this.region, this.variant].filter((e => void 0 !== e)).join("-")
        }
        clearVariants() {
            this.variant = void 0
        }
        clearRegion() {
            this.region = void 0
        }
        addLikelySubtags() {
            const e = function(e) {
                if (Object.prototype.hasOwnProperty.call(pe, e))
                    return new me(pe[e]);
                const n = new me(e);
                if (n.language && he.includes(n.language))
                    return n.region = n.language.toUpperCase(),
                    n;
                return null
            }(this.toString().toLowerCase());
            return !!e && (this.language = e.language,
            this.script = e.script,
            this.region = e.region,
            this.variant = e.variant,
            !0)
        }
    }
    const pe = {
        ar: "ar-arab-eg",
        "az-arab": "az-arab-ir",
        "az-ir": "az-arab-ir",
        be: "be-cyrl-by",
        da: "da-latn-dk",
        el: "el-grek-gr",
        en: "en-latn-us",
        fa: "fa-arab-ir",
        ja: "ja-jpan-jp",
        ko: "ko-kore-kr",
        pt: "pt-latn-br",
        sr: "sr-cyrl-rs",
        "sr-ru": "sr-latn-ru",
        sv: "sv-latn-se",
        ta: "ta-taml-in",
        uk: "uk-cyrl-ua",
        zh: "zh-hans-cn",
        "zh-hant": "zh-hant-tw",
        "zh-hk": "zh-hant-hk",
        "zh-mo": "zh-hant-mo",
        "zh-tw": "zh-hant-tw",
        "zh-gb": "zh-hant-gb",
        "zh-us": "zh-hant-us"
    }
      , he = ["az", "bg", "cs", "de", "es", "fi", "fr", "hu", "it", "lt", "lv", "nl", "pl", "ro", "ru"];
    function ve(e, n, {strategy: t="filtering", defaultLocale: a}={}) {
        const r = function(e, n, t) {
            const a = new Set
              , r = new Map;
            for (let e of n)
                new me(e).isWellFormed && r.set(e, new me(e));
            e: for (const n of e) {
                const e = n.toLowerCase()
                  , o = new me(e);
                if (void 0 !== o.language) {
                    for (const n of r.keys())
                        if (e === n.toLowerCase()) {
                            if (a.add(n),
                            r.delete(n),
                            "lookup" === t)
                                return Array.from(a);
                            if ("filtering" === t)
                                continue;
                            continue e
                        }
                    for (const [e,n] of r.entries())
                        if (n.matches(o, !0, !1)) {
                            if (a.add(e),
                            r.delete(e),
                            "lookup" === t)
                                return Array.from(a);
                            if ("filtering" === t)
                                continue;
                            continue e
                        }
                    if (o.addLikelySubtags())
                        for (const [e,n] of r.entries())
                            if (n.matches(o, !0, !1)) {
                                if (a.add(e),
                                r.delete(e),
                                "lookup" === t)
                                    return Array.from(a);
                                if ("filtering" === t)
                                    continue;
                                continue e
                            }
                    o.clearVariants();
                    for (const [e,n] of r.entries())
                        if (n.matches(o, !0, !0)) {
                            if (a.add(e),
                            r.delete(e),
                            "lookup" === t)
                                return Array.from(a);
                            if ("filtering" === t)
                                continue;
                            continue e
                        }
                    if (o.clearRegion(),
                    o.addLikelySubtags())
                        for (const [e,n] of r.entries())
                            if (n.matches(o, !0, !1)) {
                                if (a.add(e),
                                r.delete(e),
                                "lookup" === t)
                                    return Array.from(a);
                                if ("filtering" === t)
                                    continue;
                                continue e
                            }
                    o.clearRegion();
                    for (const [e,n] of r.entries())
                        if (n.matches(o, !0, !0)) {
                            if (a.add(e),
                            r.delete(e),
                            "lookup" === t)
                                return Array.from(a);
                            if ("filtering" === t)
                                continue;
                            continue e
                        }
                }
            }
            return Array.from(a)
        }(Array.from(null != e ? e : []).map(String), Array.from(null != n ? n : []).map(String), t);
        if ("lookup" === t) {
            if (void 0 === a)
                throw new Error("defaultLocale cannot be undefined for strategy `lookup`");
            0 === r.length && r.push(a)
        } else
            a && !r.includes(a) && r.push(a);
        return r
    }
    const ge = {
        "ar-SA": {
            "context_menu.ftl": "context-menu-download-swf = \u062a\u062d\u0645\u064a\u0644 .swf\ncontext-menu-copy-debug-info = \u0646\u0633\u062e \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0635\u062d\u064a\u062d\ncontext-menu-open-save-manager = \u0641\u062a\u062d \u0645\u062f\u064a\u0631 \u0627\u0644\u062d\u0641\u0638\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] \u062d\u0648\u0644 \u0645\u0644\u062d\u0642 Ruffle ({ $version })\n       *[other] \u062d\u0648\u0644 Ruffle ({ $version })\n    }\ncontext-menu-hide = \u0625\u062e\u0641\u0627\u0621 \u0647\u0630\u0647 \u0627\u0644\u0642\u0627\u0626\u0645\u0629\ncontext-menu-exit-fullscreen = \u0627\u0644\u062e\u0631\u0648\u062c \u0645\u0646 \u0648\u0636\u0639\u064a\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629\ncontext-menu-enter-fullscreen = \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639\u064a\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629\ncontext-menu-volume-controls = \u0627\u0644\u062a\u062d\u0643\u0645 \u0628\u0627\u0644\u0635\u0648\u062a\n",
            "messages.ftl": 'message-cant-embed =\n    \u0644\u0645 \u064a\u0643\u0646 Ruffle \u0642\u0627\u062f\u0631 \u0639\u0644\u0649 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u0644\u0627\u0634 \u0627\u0644\u0645\u0636\u0645\u0646\u0629 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629.\n    \u064a\u0645\u0643\u0646\u0643 \u0645\u062d\u0627\u0648\u0644\u0629 \u0641\u062a\u062d \u0627\u0644\u0645\u0644\u0641 \u0641\u064a \u0639\u0644\u0627\u0645\u0629 \u062a\u0628\u0648\u064a\u0628 \u0645\u0646\u0641\u0635\u0644\u0629 \u0644\u062a\u062c\u0627\u0648\u0632 \u0647\u0630\u0647 \u0627\u0644\u0645\u0634\u0643\u0644\u0629.\npanic-title = \u0644\u0642\u062f \u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627 :(\nmore-info = \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0623\u0643\u062b\u0631\nrun-anyway = \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0639\u0644\u0649 \u0623\u064a \u062d\u0627\u0644\ncontinue = \u0627\u0644\u0627\u0633\u062a\u0645\u0631\u0627\u0631\nreport-bug = \u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u062e\u0644\u0644\nupdate-ruffle = \u062a\u062d\u062f\u064a\u062b \u0631\u0641\u0644\nruffle-demo = \u0648\u064a\u0628 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a\nruffle-desktop = \u0628\u0631\u0646\u0627\u0645\u062c \u0633\u0637\u062d \u0627\u0644\u0645\u0643\u062a\u0628\nruffle-wiki = \u0639\u0631\u0636 \u0648\u064a\u0643\u064a Ruffle\nenable-hardware-acceleration = \u064a\u0628\u062f\u0648 \u0623\u0646 \u062a\u0633\u0631\u064a\u0639 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0639\u0637\u0644. \u0639\u0644\u0649 \u0627\u0644\u0631\u063a\u0645 \u0645\u0646 \u0623\u0646 Ruffle \u0642\u062f \u064a\u0639\u0645\u0644\u060c \u0625\u0644\u0627 \u0623\u0646\u0647 \u0642\u062f \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0626\u064b\u0627 \u062c\u062f\u064b\u0627. \u064a\u0645\u0643\u0646\u0643 \u0645\u0639\u0631\u0641\u0629 \u0643\u064a\u0641\u064a\u0629 \u062a\u0645\u0643\u064a\u0646 \u062a\u0633\u0631\u064a\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0628\u0627\u062a\u0628\u0627\u0639 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062f\u0646\u0627\u0647:\nenable-hardware-acceleration-link = \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 - \u062a\u0633\u0631\u064a\u0639 \u0623\u062c\u0647\u0632\u0629 Chrome\nview-error-details = \u0639\u0631\u0636 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062e\u0637\u0623\nopen-in-new-tab = \u0641\u062a\u062d \u0641\u064a \u0639\u0644\u0627\u0645\u0629 \u062a\u0628\u0648\u064a\u0628 \u062c\u062f\u064a\u062f\u0629\nclick-to-unmute = \u0627\u0646\u0642\u0631 \u0644\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0643\u062a\u0645\nclipboard-message-title = \u0627\u0644\u0646\u0633\u062e \u0648\u0627\u0644\u0644\u0635\u0642 \u0641\u064a Ruffle\nclipboard-message-description =\n    {$variant ->\n       *[unsupported] \u0645\u062a\u0635\u0641\u062d\u0643 \u0644\u0627 \u064a\u062f\u0639\u0645 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u062d\u0627\u0641\u0638\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629\u060c\n        [access-denied] \u062a\u0645 \u0631\u0641\u0636 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u062d\u0627\u0641\u0638\u0629\u060c\n    } \u0644\u0643\u0646 \u064a\u0645\u0643\u0646\u0643 \u0625\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647 \u0627\u0644\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u062f\u0627\u0626\u0645\u064b\u0627:\nclipboard-message-copy = { " " } \u0644\u0644\u0646\u0633\u062e\nclipboard-message-cut = { " " } \u0644\u0644\u0642\u0635\nclipboard-message-paste = { " " } \u0644\u0644\u0635\u0642\nerror-file-protocol =\n    \u064a\u0628\u062f\u0648 \u0623\u0646\u0643 \u062a\u0642\u0648\u0645 \u0628\u062a\u0634\u063a\u064a\u0644 Ruffle \u0639\u0644\u0649 \u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644 "\u0627\u0644\u0645\u0644\u0641:".\n    \u0647\u0630\u0627 \u0644\u0646 \u064a\u0639\u0645\u0644 \u0644\u0623\u0646 \u0627\u0644\u0645\u062a\u0635\u0641\u062d\u0627\u062a \u062a\u0645\u0646\u0639 \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u0645\u064a\u0632\u0627\u062a \u0645\u0646 \u0627\u0644\u0639\u0645\u0644 \u0644\u0623\u0633\u0628\u0627\u0628 \u0623\u0645\u0646\u064a\u0629.\n    \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0630\u0644\u0643\u060c \u0646\u062f\u0639\u0648\u0643 \u0625\u0644\u0649 \u0625\u0639\u062f\u0627\u062f \u062e\u0627\u062f\u0645 \u0645\u062d\u0644\u064a \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0639\u0631\u0636 \u0627\u0644\u0648\u064a\u0628 \u0623\u0648 \u062a\u0637\u0628\u064a\u0642 \u0633\u0637\u062d \u0627\u0644\u0645\u0643\u062a\u0628.\nerror-javascript-config =\n    \u062a\u0639\u0631\u0636 Ruffle \u0625\u0644\u0649 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064a\u0631\u0629 \u0628\u0633\u0628\u0628 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u062e\u0627\u0637\u0626\u0629 \u0644\u0644\u062c\u0627\u0641\u0627 \u0633\u0643\u0631\u064a\u0628\u062a.\n    \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u0646\u062d\u0646 \u0646\u062f\u0639\u0648\u0643 \u0625\u0644\u0649 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062e\u0637\u0623 \u0644\u0645\u0639\u0631\u0641\u0629 \u0633\u0628\u0628 \u0627\u0644\u0645\u0634\u0643\u0644\u0629.\n    \u064a\u0645\u0643\u0646\u0643 \u0623\u064a\u0636\u0627 \u0627\u0644\u0631\u062c\u0648\u0639 \u0625\u0644\u0649 \u0648\u064a\u0643\u064a Ruffle \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629.\nerror-wasm-not-found =\n    \u0641\u0634\u0644 Ruffle \u0641\u064a \u062a\u062d\u0645\u064a\u0644 \u0645\u0643\u0648\u0646 \u0627\u0644\u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.\n    \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0642\u062f \u062a\u0645 \u062a\u062d\u0645\u064a\u0644\u0647 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d.\n    \u0625\u0630\u0627 \u0627\u0633\u062a\u0645\u0631\u062a \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060c \u0642\u062f \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0625\u0639\u062f\u0627\u062f\u0627\u062a "\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0639\u0627\u0645": \u0627\u0644\u0631\u062c\u0627\u0621 \u0645\u0631\u0627\u062c\u0639\u0629 \u0648\u064a\u0643\u064a Ruffle \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629.\nerror-wasm-mime-type =\n    \u0648\u0627\u062c\u0647 Ruffle \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064a\u0631\u0629 \u0623\u062b\u0646\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u062a\u0647\u064a\u0626\u0629.\n    \u062e\u0627\u062f\u0645 \u0627\u0644\u0648\u064a\u0628 \u0647\u0630\u0627 \u0644\u0627 \u064a\u062e\u062f\u0645 \u0645\u0644\u0641\u0627\u062a ". wasm" \u0645\u0639 \u0646\u0648\u0639 MIME \u0627\u0644\u0635\u062d\u064a\u062d.\n    \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0648\u064a\u0643\u064a Ruffle \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629.\nerror-invalid-swf =\n    \u0644\u0627 \u064a\u0645\u0643\u0646 \u0644\u0640 Ruffle \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628.\n    \u0627\u0644\u0633\u0628\u0628 \u0627\u0644\u0623\u0643\u062b\u0631 \u0625\u062d\u062a\u0645\u0627\u0644\u0627\u064b \u0647\u0648 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0644\u064a\u0633 \u0635\u0627\u0644\u062d\u0627.\nerror-swf-fetch =\n    \u0641\u0634\u0644 Ruffle \u0641\u064a \u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0641\u0644\u0627\u0634 SWF.\n    \u0627\u0644\u0633\u0628\u0628 \u0627\u0644\u0623\u0643\u062b\u0631 \u0627\u062d\u062a\u0645\u0627\u0644\u0627\u064b \u0647\u0648 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0644\u0645 \u064a\u0639\u062f \u0645\u0648\u062c\u0648\u062f\u060c \u0644\u0630\u0644\u0643 \u0644\u0627 \u064a\u0648\u062c\u062f \u0634\u064a\u0621 \u0644\u064a\u062d\u0645\u0644\u0647 \u0631\u0641\u0644.\n    \u062d\u0627\u0648\u0644 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629.\nerror-swf-cors =\n    \u0641\u0634\u0644 Ruffle \u0641\u064a \u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0641\u0644\u0627\u0634 SWF.\n    \u0645\u0646 \u0627\u0644\u0645\u062d\u062a\u0645\u0644 \u0623\u0646 \u062a\u0645 \u062d\u0638\u0631 \u0625\u062d\u0636\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0628\u0648\u0627\u0633\u0637\u0629 \u0633\u064a\u0627\u0633\u0629 CORS.\n    \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0631\u0641\u0644 \u0648\u064a\u0643\u064a \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629.\nerror-wasm-cors =\n    \u0641\u0634\u0644 Ruffle \u0641\u064a \u062a\u062d\u0645\u064a\u0644 \u0645\u0643\u0648\u0646 \u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.\n    \u0645\u0646 \u0627\u0644\u0645\u062d\u062a\u0645\u0644 \u0623\u0646 \u062a\u0645 \u062d\u0638\u0631 \u0625\u062d\u0636\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0628\u0648\u0627\u0633\u0637\u0629 \u0633\u064a\u0627\u0633\u0629 CORS.\n    \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0631\u0641\u0644 \u0648\u064a\u0643\u064a \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629.\nerror-wasm-invalid =\n    \u0648\u0627\u062c\u0647 Ruffle \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064a\u0631\u0629 \u0623\u062b\u0646\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u062a\u0647\u064a\u0626\u0629.\n    \u064a\u0628\u062f\u0648 \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629 \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0645\u0644\u0641\u0627\u062a \u0645\u0641\u0642\u0648\u062f\u0629 \u0623\u0648 \u063a\u064a\u0631 \u0635\u0627\u0644\u062d\u0629 \u0644\u062a\u0634\u063a\u064a\u0644 Ruffle.\n    \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u062c\u0639\u0629 \u0648\u064a\u0643\u064a Ruffle \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629.\nerror-wasm-download =\n    \u0648\u0627\u062c\u0647 Ruffle \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064a\u0631\u0629 \u0623\u062b\u0646\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u062a\u0647\u0627 \u0627\u0644\u062a\u0647\u064a\u0626\u0629.\n    \u0647\u0630\u0627 \u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u062d\u0644 \u0646\u0641\u0633\u0647 \u0641\u064a \u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0623\u062d\u064a\u0627\u0646\u060c \u0644\u0630\u0644\u0643 \u064a\u0645\u0643\u0646\u0643 \u0645\u062d\u0627\u0648\u0644\u0629 \u0625\u0639\u0627\u062f\u0629 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0635\u0641\u062d\u0629.\n    \u0648\u0625\u0644\u0627 \u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0648\u0642\u0639.\nerror-wasm-disabled-on-edge =\n    \u0641\u0634\u0644 Ruffle \u0641\u064a \u062a\u062d\u0645\u064a\u0644 \u0645\u0643\u0648\u0646 \u0627\u0644\u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.\n    \u0644\u0625\u0635\u0644\u0627\u062d \u0647\u0630\u0647 \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060c \u062d\u0627\u0648\u0644 \u0641\u062a\u062d \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0627\u0644\u062e\u0627\u0635 \u0628\u0643\u060c \u0627\u0646\u0642\u0631 \u0641\u0648\u0642 "\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629\u060c \u0627\u0644\u0628\u062d\u062b\u060c \u0627\u0644\u062e\u062f\u0645\u0627\u062a"\u060c \u0648\u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0644\u0623\u0633\u0641\u0644\u060c \u0648\u0625\u064a\u0642\u0627\u0641 "\u062a\u0639\u0632\u064a\u0632 \u0623\u0645\u0627\u0646\u0643 \u0639\u0644\u0649 \u0627\u0644\u0648\u064a\u0628".\n    \u0647\u0630\u0627 \u0633\u064a\u0633\u0645\u062d \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0627\u0644\u062e\u0627\u0635 \u0628\u0643 \u0628\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062a ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.\n    \u0625\u0630\u0627 \u0627\u0633\u062a\u0645\u0631\u062a \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060c \u0642\u062f \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u062a\u0635\u0641\u062d \u0623\u062e\u0631.\nerror-javascript-conflict =\n    \u0648\u0627\u062c\u0647 Ruffle \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064a\u0631\u0629 \u0623\u062b\u0646\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u062a\u0647\u064a\u0626\u0629.\n    \u064a\u0628\u062f\u0648 \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629 \u062a\u0633\u062a\u062e\u062f\u0645 \u0643\u0648\u062f JavaScript \u0627\u0644\u0630\u064a \u064a\u062a\u0639\u0627\u0631\u0636 \u0645\u0639 Ruffle.\n    \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u0641\u0625\u0646\u0646\u0627 \u0646\u062f\u0639\u0648\u0643 \u0625\u0644\u0649 \u0645\u062d\u0627\u0648\u0644\u0629 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0644\u0641 \u0639\u0644\u0649 \u0635\u0641\u062d\u0629 \u0641\u0627\u0631\u063a\u0629.\nerror-javascript-conflict-outdated = \u064a\u0645\u0643\u0646\u0643 \u0623\u064a\u0636\u064b\u0627 \u0645\u062d\u0627\u0648\u0644\u0629 \u062a\u062d\u0645\u064a\u0644 \u0646\u0633\u062e\u0629 \u0623\u062d\u062f\u062b \u0645\u0646 \u0631\u0641\u0644 \u0627\u0644\u062a\u064a \u0642\u062f \u062a\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 (\u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0642\u062f\u064a\u0645\u0629: { $buildDate }).\nerror-csp-conflict =\n    \u0648\u0627\u062c\u0647 Ruffle \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064a\u0631\u0629 \u0623\u062b\u0646\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u062a\u0647\u064a\u0626\u0629.\n    \u0644\u0627 \u062a\u0633\u0645\u062d \u0633\u064a\u0627\u0633\u0629 \u0623\u0645\u0627\u0646 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0644\u062e\u0627\u062f\u0645 \u0627\u0644\u0648\u064a\u0628 \u0647\u0630\u0627 \u0628\u062a\u0634\u063a\u064a\u0644 \u0645\u0643\u0648\u0646 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.\n    \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0631\u062c\u0648\u0639 \u0625\u0644\u0649 \u0648\u064a\u0643\u064a Ruffle \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629.\nerror-unknown =\n    \u0648\u0627\u062c\u0647 Ruffle \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064a\u0631\u0629 \u0623\u062b\u0646\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u0629 \u0639\u0631\u0636 \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0641\u0644\u0627\u0634 \u0647\u0630\u0627.\n    { $outdated ->\n        [true] \u0625\u0630\u0627 \u0643\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062e\u0627\u062f\u0645\u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u0629 \u062a\u062d\u0645\u064a\u0644 \u0625\u0635\u062f\u0627\u0631 \u0623\u062d\u062f\u062b \u0645\u0646 Ruffle (\u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0642\u062f\u064a\u0645\u0629: { $buildDate }).\n       *[false] \u0644\u064a\u0633 \u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0631\u0636 \u0623\u0646 \u064a\u062d\u062f\u062b \u0647\u0630\u0627\u060c \u0644\u0630\u0644\u0643 \u0646\u062d\u0646 \u0646\u0642\u062f\u0631 \u062d\u0642\u064b\u0627 \u0625\u0630\u0627 \u0642\u0645\u062a \u0628\u0627\u0644\u062a\u0628\u0644\u064a\u063a \u0639\u0646 \u0627\u0644\u062e\u0637\u0623!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \u0647\u0644 \u0623\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0623\u0646\u0643 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 \u0645\u0644\u0641 \u0627\u0644\u062d\u0641\u0638 \u0647\u0630\u0627\u061f\nsave-reload-prompt =\n    \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u0648\u062d\u064a\u062f\u0629 \u0644{ $action ->\n        [delete] \u062d\u0630\u0641\n       *[replace] \u0625\u0633\u062a\u0628\u062f\u0627\u0644\n    } \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062d\u0641\u0638 \u062f\u0648\u0646 \u062a\u0639\u0627\u0631\u0636 \u0645\u062d\u062a\u0645\u0644 \u0647\u064a \u0644\u0625\u0639\u0627\u062f\u0629 \u062a\u062d\u0645\u064a\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u062d\u062a\u0648\u0649. \u0647\u0644 \u062a\u0631\u063a\u0628 \u0641\u064a \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0639\u0644\u0649 \u0623\u064a \u062d\u0627\u0644\u061f\nsave-download = \u062a\u062d\u0645\u064a\u0644\nsave-replace = \u0627\u0633\u062a\u0628\u062f\u0627\u0644\nsave-delete = \u062d\u0630\u0641\nsave-backup-all = \u062a\u062d\u0645\u064a\u0644 \u062c\u0645\u064a\u0639 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u062d\u0641\u0638\n",
            "volume-controls.ftl": "volume-controls-mute = \u0643\u062a\u0645\nvolume-controls-unmute = \u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0643\u062a\u0645\n"
        },
        "ca-ES": {
            "context_menu.ftl": "context-menu-download-swf = Baixa el fitxer .swf\ncontext-menu-copy-debug-info = Copia la informaci\xf3 de depuraci\xf3\ncontext-menu-open-save-manager = Obre el gestor d'emmagatzematge\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Quant a l'extensi\xf3 de Ruffle ({ $version })\n       *[other] Quant a Ruffle ({ $version })\n    }\ncontext-menu-hide = Amaga aquest men\xfa\ncontext-menu-exit-fullscreen = Surt de la pantalla completa\ncontext-menu-enter-fullscreen = Pantalla completa\ncontext-menu-volume-controls = Controls de volum\n",
            "messages.ftl": "message-cant-embed =\n    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta p\xe0gina.\n    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.\npanic-title = Alguna cosa ha fallat :(\nmore-info = M\xe9s informaci\xf3\nrun-anyway = Reprodueix igualment\ncontinue = Continua\nreport-bug = Informa d'un error\nupdate-ruffle = Actualitza Ruffle\nruffle-demo = Demostraci\xf3 web\nruffle-desktop = Aplicaci\xf3 d'escriptori\nruffle-wiki = Obre la wiki de Ruffle\nview-error-details = Mostra detalls de l'error\nopen-in-new-tab = Obre en una pestanya nova\nclick-to-unmute = Feu clic per activar el so\nerror-file-protocol =\n    Sembla que esteu executant Ruffle al protocol \"file:\".\n    Aix\xf2 no funcionar\xe0 perqu\xe8 els navegadors bloquegen moltes caracter\xedstiques per raons de seguretat. En comptes d'aix\xf2, us suggerim que configureu un servidor local o b\xe9 utilitzeu la demostraci\xf3 web o l'aplicaci\xf3 d'escriptori.\nerror-javascript-config =\n    Ruffle ha topat amb un problema greu a causa d'una configuraci\xf3 JavaScript err\xf2nia.\n    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el par\xe0metre culpable.\n    Tamb\xe9 podeu consultar la wiki del Ruffle per obtenir ajuda.\nerror-wasm-not-found =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.\n    Si el problema continua, \xe9s possible que h\xe0giu d'utilitzar el par\xe1metre \"publicPath\": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-wasm-mime-type =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Aquest servidor no est\xe0 servint els fitxers \".wasm\" amb el tipus MIME adequat.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-invalid-swf =\n    Ruffle no ha pogut llegir el fitxer sol\xb7licitat.\n    La ra\xf3 m\xe9s probable \xe9s que no sigui un fitxer SWF v\xe0lid.\nerror-swf-fetch =\n    Ruffle no ha pogut carregar el fitxer SWF Flash.\n    La ra\xf3 m\xe9s probable \xe9s que el fitxer ja no existeixi, aix\xed que no hi ha res que el Ruffle pugui carregar.\n    Proveu de contactar a l'administrador del lloc per obtenir ajuda.\nerror-swf-cors =\n    Ruffle no ha pogut carregar el fitxer SWF Flash.\n    \xc9s probable que l'acc\xe9s a la c\xe0rrega hagi estat denegat per una pol\xedtica CORS.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.\nerror-wasm-cors =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    \xc9s probable que l'acc\xe9s a la c\xe0rrega hagi estat denegat per una pol\xedtica CORS.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.\nerror-wasm-invalid =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Sembla que a aquest lloc li manquen fitxers o aquests no s\xf3n v\xe0lids per a l'execuci\xf3 de Ruffle.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-wasm-download =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Aix\xf2 sovint aix\xf2 pot resoldre's sol, aix\xed que podeu provar de recarregar la p\xe0gina.\n    En cas contrari, us preguem que contacteu l'administrador del lloc.\nerror-wasm-disabled-on-edge =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    Per a arreglar-ho, proveu d'obrir els par\xe0metres del navegador, feu clic sobre \"Privadesa, cerca i serveis\", i desactiveu \"Prevenci\xf3 de seguiment\".\n    Aix\xf2 permetr\xe0 que el vostre navegador carregui els fitxers \".wasm\" necessaris.\n    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.\nerror-javascript-conflict =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-javascript-conflict-outdated = Tamb\xe9 podeu provar de carregar una versi\xf3 m\xe9s recent de Ruffle que podria resoldre el problema (la compilaci\xf3 actual est\xe0 desactualitzada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    La pol\xedtica de seguretat del contingut (CSP) no permet l'execuci\xf3 del component \".wasm\" necessari.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-unknown =\n    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.\n    { $outdated ->\n        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versi\xf3 m\xe9s recent de Ruffle (la compilaci\xf3 actual est\xe0 desactualitzada: { $buildDate }).\n       *[false] Aix\xf2 no hauria d'haver passat, aix\xed que us agrair\xedem molt que n'inform\xe9ssiu l'error!\n    }\n",
            "save-manager.ftl": "save-delete-prompt = Segur que vols esborrar aquest fitxer desat?\nsave-reload-prompt =\n    L'\xfanica forma d{ $action ->\n        [delete] 'eliminar\n       *[replace] e substituir\n    } aquest fitxer desat sense crear un potencial conflicte \xe9s recarregant el contingut. Voleu continuar igualment?\nsave-download = Baixa\nsave-replace = Substitueix\nsave-delete = Elimina\nsave-backup-all = Baixa tots els fitxers desats\n",
            "volume-controls.ftl": "volume-controls-mute = Silenci\n"
        },
        "cs-CZ": {
            "context_menu.ftl": "context-menu-download-swf = St\xe1hnout .swf\ncontext-menu-copy-debug-info = Zkop\xedrovat debug info\ncontext-menu-open-save-manager = Otev\u0159\xedt spr\xe1vce ulo\u017een\xed\ncontext-menu-about-ruffle =\n    { $flavor ->\n         [extension] O Ruffle roz\u0161\xed\u0159en\xed ({ $version })\n        *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Skr\xfdt menu\ncontext-menu-exit-fullscreen = Ukon\u010dit re\u017eim cel\xe9 obrazovky\ncontext-menu-enter-fullscreen = P\u0159ej\xedt do re\u017eimu cel\xe9 obrazovky\ncontext-menu-volume-controls = Ovl\xe1d\xe1n\xed hlasitosti\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle nemohl spustit Flash vlo\u017een\xfd na t\xe9to str\xe1nce.\n    M\u016f\u017eete se pokusit otev\u0159\xedt soubor na samostatn\xe9 kart\u011b, abyste se vyhnuli tomuto probl\xe9mu.\npanic-title = N\u011bco se pokazilo :(\nmore-info = Dal\u0161\xed informace\nrun-anyway = P\u0159esto spustit\ncontinue = Pokra\u010dovat\nreport-bug = Nahl\xe1sit chybu\nupdate-ruffle = Aktualizovat Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktopov\xe1 aplikace\nruffle-wiki = Zobrazit Ruffle Wiki\nenable-hardware-acceleration = Zd\xe1 se, \u017ee hardwarov\xe1 akcelerace je vypnut\xe1. I kdy\u017e Ruffle funguje spr\xe1vn\u011b, m\u016f\u017ee b\xfdt nep\u0159im\u011b\u0159en\u011b pomal\xfd. Jak povolit hardwarovou akceleraci zjist\xedte na tomto odkazu:\nenable-hardware-acceleration-link = \u010cast\xe9 dotazy - Hardwarov\xe1 akcelerace Chrome\nview-error-details = Zobrazit podrobnosti o chyb\u011b\nopen-in-new-tab = Otev\u0159\xedt na nov\xe9 kart\u011b\nclick-to-unmute = Kliknut\xedm zru\u0161\xedte ztlumen\xed\nclipboard-message-title = Kop\xedrov\xe1n\xed a vkl\xe1d\xe1n\xed v Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] V\xe1\u0161 prohl\xed\u017ee\u010d nepodporuje pln\xfd p\u0159\xedstup ke schr\xe1nce,\n        [access-denied] P\u0159\xedstup ke schr\xe1nce byl odep\u0159en,\n    } ale m\xedsto toho m\u016f\u017eete v\u017edy pou\u017e\xedt tyto zkratky:\nclipboard-message-copy = { " " } pro kop\xedrov\xe1n\xed\nclipboard-message-cut = { " " } pro vyst\u0159ihov\xe1n\xed\nclipboard-message-paste = { " " } pro vkl\xe1d\xe1n\xed\nerror-file-protocol =\n    Zd\xe1 se, \u017ee pou\u017e\xedv\xe1te Ruffle na protokolu "file:".\n    To nen\xed mo\u017en\xe9, proto\u017ee prohl\xed\u017ee\u010de blokuj\xed fungov\xe1n\xed mnoha funkc\xed z bezpe\u010dnostn\xedch d\u016fvod\u016f.\n    Nam\xedsto toho v\xe1m doporu\u010dujeme nastavit lok\xe1ln\xed server nebo pou\u017e\xedt web demo \u010di desktopovou aplikaci.\nerror-javascript-config =\n    Ruffle narazil na probl\xe9m v d\u016fsledku nespr\xe1vn\xe9 konfigurace JavaScriptu.\n    Pokud jste spr\xe1vcem serveru, doporu\u010dujeme v\xe1m zkontrolovat podrobnosti o chyb\u011b, abyste zjistili, kter\xfd parametr je vadn\xfd.\n    Pomoc m\u016f\u017eete z\xedskat tak\xe9 na wiki Ruffle.\nerror-wasm-not-found =\n    Ruffle se nepoda\u0159ilo na\u010d\xedst po\u017eadovanou komponentu souboru \u201e.wasm\u201c.\n    Pokud jste spr\xe1vcem serveru, zkontrolujte, zda byl soubor spr\xe1vn\u011b nahr\xe1n.\n    Pokud probl\xe9m p\u0159etrv\xe1v\xe1, mo\u017en\xe1 budete muset pou\u017e\xedt nastaven\xed \u201epublicPath\u201c: pomoc naleznete na wiki Ruffle.\nerror-wasm-mime-type =\n    Ruffle narazil na probl\xe9m p\u0159i pokusu o inicializaci.\n    Tento webov\xfd server neposkytuje soubory \u201e.wasm\u201c se spr\xe1vn\xfdm typem MIME.\n    Pokud jste spr\xe1vcem serveru, n\xe1pov\u011bdu najdete na Ruffle wiki.\nerror-invalid-swf =\n    Ruffle nem\u016f\u017ee zpracovat po\u017eadovan\xfd soubor.\n    Nejpravd\u011bpodobn\u011bj\u0161\xedm d\u016fvodem je, \u017ee po\u017eadovan\xfd soubor nen\xed platn\xfdm souborem SWF.\nerror-swf-fetch =\n    Ruffle se nepoda\u0159ilo na\u010d\xedst SWF soubor Flash.\n    Nejpravd\u011bpodobn\u011bj\u0161\xedm d\u016fvodem je, \u017ee soubor ji\u017e neexistuje, tak\u017ee Ruffle nem\xe1 co na\u010d\xedst.\n    Zkuste po\u017e\xe1dat o pomoc spr\xe1vce webu.\nerror-swf-cors =\n    Ruffle se nepoda\u0159ilo na\u010d\xedst SWF soubor Flash.\n    P\u0159\xedstup k na\u010d\xedt\xe1n\xed byl pravd\u011bpodobn\u011b zablokov\xe1n politikou CORS.\n    Pokud jste spr\xe1vcem serveru, n\xe1pov\u011bdu najdete na Ruffle wiki.\nerror-wasm-cors =\n    Ruffle se nepoda\u0159ilo na\u010d\xedst po\u017eadovanou komponentu souboru \u201e.wasm\u201c.\n    P\u0159\xedstup k na\u010d\xedt\xe1n\xed byl pravd\u011bpodobn\u011b zablokov\xe1n politikou CORS.\n    Pokud jste spr\xe1vcem serveru, n\xe1pov\u011bdu najdete na Ruffle wiki.\nerror-wasm-invalid =\n    Ruffle narazil na probl\xe9m p\u0159i pokusu o inicializaci.\n    Zd\xe1 se, \u017ee na t\xe9to str\xe1nce chyb\xed nebo jsou neplatn\xe9 soubory ke spu\u0161t\u011bn\xed Ruffle.\n    Pokud jste spr\xe1vcem serveru, n\xe1pov\u011bdu najdete na Ruffle wiki.\nerror-wasm-download =\n    Ruffle narazil na probl\xe9m p\u0159i pokusu o inicializaci.\n    Probl\xe9m se m\u016f\u017ee vy\u0159e\u0161it i s\xe1m, tak\u017ee m\u016f\u017eete zkusit str\xe1nku na\u010d\xedst znovu.\n    V opa\u010dn\xe9m p\u0159\xedpad\u011b kontaktujte administr\xe1tora str\xe1nky.\nerror-wasm-disabled-on-edge =\n    Ruffle se nepoda\u0159ilo na\u010d\xedst po\u017eadovanou komponentu souboru \u201e.wasm\u201c.\n    Chcete-li tento probl\xe9m vy\u0159e\u0161it, zkuste otev\u0159\xedt nastaven\xed prohl\xed\u017ee\u010de, klikn\u011bte na polo\u017eku \u201eOchrana osobn\xedch \xfadaj\u016f, vyhled\xe1v\xe1n\xed a slu\u017eby\u201c, p\u0159ejd\u011bte dol\u016f a vypn\u011bte mo\u017enost \u201eZvy\u0161te svou bezpe\u010dnost na webu\u201c.\n    Va\u0161emu prohl\xed\u017ee\u010di to umo\u017en\xed na\u010d\xedst po\u017eadovan\xe9 soubory \u201e.wasm\u201c.\n    Pokud probl\xe9m p\u0159etrv\xe1v\xe1, budete mo\u017en\xe1 muset pou\u017e\xedt jin\xfd prohl\xed\u017ee\u010d.\nerror-javascript-conflict =\n    Ruffle narazil na probl\xe9m p\u0159i pokusu o inicializaci.\n    Zd\xe1 se, \u017ee tato str\xe1nka pou\u017e\xedv\xe1 k\xf3d JavaScript, kter\xfd je v konfliktu s Ruffle.\n    Pokud jste spr\xe1vcem serveru, doporu\u010dujeme v\xe1m zkusit na\u010d\xedst soubor na pr\xe1zdnou str\xe1nku.\nerror-javascript-conflict-outdated = M\u016f\u017eete se tak\xe9 pokusit nahr\xe1t nov\u011bj\u0161\xed verzi Ruffle, kter\xe1 m\u016f\u017ee dan\xfd probl\xe9m vy\u0159e\u0161it (aktu\xe1ln\xed build je zastaral\xfd: { $buildDate }).\nerror-csp-conflict =\n    Ruffle narazil na probl\xe9m p\u0159i pokusu o inicializaci.\n    Z\xe1sady zabezpe\u010den\xed obsahu tohoto webov\xe9ho serveru nepovoluj\xed spu\u0161t\u011bn\xed po\u017eadovan\xe9 komponenty \u201e.wasm\u201c.\n    Pokud jste spr\xe1vcem serveru, n\xe1pov\u011bdu najdete na Ruffle wiki.\nerror-unknown =\n    Ruffle narazil na probl\xe9m p\u0159i pokusu zobrazit tento Flash obsah.\n    { $outdated ->\n          [true] Pokud jste spr\xe1vcem serveru, zkuste nahr\xe1t nov\u011bj\u0161\xed verzi Ruffle (aktu\xe1ln\xed build je zastaral\xfd: { $buildDate }).\n         *[false] Toto by se nem\u011blo st\xe1t, tak\u017ee bychom opravdu ocenili, kdybyste mohli nahl\xe1sit chybu!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Opravdu chcete odstranit tento soubor s ulo\u017een\xfdmi pozicemi?\nsave-reload-prompt =\n    Jedin\xfd zp\u016fsob, jak { $action ->\n          [delete] vymazat\n         *[replace] nahradit\n    } tento soubor s ulo\u017een\xfdmi pozicemi bez potenci\xe1ln\xedho konfliktu je op\u011btovn\xe9 na\u010dten\xed tohoto obsahu. Chcete p\u0159esto pokra\u010dovat?\nsave-download = St\xe1hnout\nsave-replace = Nahradit\nsave-delete = Vymazat\nsave-backup-all = St\xe1hnout v\u0161echny soubory s ulo\u017een\xfdmi pozicemi\n",
            "volume-controls.ftl": "volume-controls-mute = Ztlumit\nvolume-controls-unmute = Zru\u0161it ztlumen\xed\n"
        },
        "de-DE": {
            "context_menu.ftl": "context-menu-download-swf = .swf herunterladen\ncontext-menu-copy-debug-info = Debug-Info kopieren\ncontext-menu-open-save-manager = Dateimanager \xf6ffnen\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] \xdcber Ruffle Erweiterung ({ $version })\n       *[other] \xdcber Ruffle ({ $version })\n    }\ncontext-menu-hide = Men\xfc ausblenden\ncontext-menu-exit-fullscreen = Vollbild verlassen\ncontext-menu-enter-fullscreen = Vollbildmodus aktivieren\ncontext-menu-volume-controls = Lautst\xe4rke einstellen\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle konnte den Flash in dieser Seite nicht ausf\xfchren.\n    Du kannst versuchen, die Datei in einem separaten Tab zu \xf6ffnen, um dieses Problem zu umgehen.\npanic-title = Etwas ist schief gelaufen\nmore-info = Weitere Informationen\nrun-anyway = Trotzdem ausf\xfchren\ncontinue = Fortfahren\nreport-bug = Fehler melden\nupdate-ruffle = Ruffle aktuallisieren\nruffle-demo = Web-Demo\nruffle-desktop = Desktop-Anwendung\nruffle-wiki = Ruffle-Wiki anzeigen\nenable-hardware-acceleration-link = FAQ - Chrome Hardwarebeschleunigung\nview-error-details = Fehlerdetails anzeigen\nopen-in-new-tab = In einem neuen Tab \xf6ffnen\nclick-to-unmute = Klicke zum Entmuten\nclipboard-message-title = Kopieren und Einf\xfcgen in Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] Dein Browser unterst\xfctzt keinen vollst\xe4ndigen Zugriff auf die Zwischenablage,\n        [access-denied] Zugriff auf die Zwischenablage wurde verweigert,\n    } aber du kannst stattdessen auch diese Tastenkombinationen verwenden:\nclipboard-message-copy = { " " } zum Kopieren\nclipboard-message-cut = { " " } zum Ausschneiden\nclipboard-message-paste = { " " } zum Einf\xfcgen\nerror-file-protocol =\n    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausf\xfchren.\n    Jedoch werden aus Sicherheitsgr\xfcnden viele Funktionen vom Browser blockiert, weswegen die Datei nicht geladen werden kann.\n    Setzen Sie stattdessen einen lokalen Server auf, verwenden Sie die Webdemo oder die Desktop-Anwendung.\nerror-javascript-config =\n    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein Problem gesto\xdfen.\n    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu \xfcberpr\xfcfen, um herauszufinden, welcher Parameter fehlerhaft ist.\n    Sie k\xf6nnen auch das Ruffle-Wiki f\xfcr Hilfe konsultieren.\nerror-wasm-not-found =\n    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.\n    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.\n    Wenn das Problem weiterhin besteht, m\xfcssen Sie unter Umst\xe4nden die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki f\xfcr Hilfe.\nerror-wasm-mime-type =\n    Ruffle ist auf ein Fehler beim Initialisieren gesto\xdfen.\n    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xfcr Hilfe.\nerror-invalid-swf =\n    Ruffle konnte die angegebene Datei nicht lesen.\n    Am wahrscheinlichsten ist die angegebene Datei keine g\xfcltige SWF.\nerror-swf-fetch =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.\n    Kontaktieren Sie den Website-Administrator f\xfcr Hilfe.\nerror-swf-cors =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xfcr Hilfe.\nerror-wasm-cors =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xfcr Hilfe.\nerror-wasm-invalid =\n    Ruffle ist auf ein Fehler beim Initialisieren gesto\xdfen.\n    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xfcr Hilfe.\nerror-wasm-download =\n    Ruffle ist auf ein Fehler beim Initialisieren gesto\xdfen.\n    Dies kann sich oft selbst beheben, so dass Sie versuchen k\xf6nnen, die Seite neu zu laden.\n    Andernfalls kontaktieren Sie bitte den Website-Administrator.\nerror-wasm-disabled-on-edge =\n    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.\n    Um dies zu beheben, versuche die Einstellungen deines Browsers zu \xf6ffnen, klicke auf "Privatsph\xe4re, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.\n    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.\n    Wenn das Problem weiterhin besteht, m\xfcssen Sie m\xf6glicherweise einen anderen Browser verwenden.\nerror-javascript-conflict =\n    Ruffle ist auf ein Fehler beim Initialisieren gesto\xdfen.\n    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.\n    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.\nerror-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen k\xf6nnte (aktuelle Version ist veraltet: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ist auf ein Fehler beim Initialisieren gesto\xdfen.\n    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xfcr Hilfe.\nerror-unknown =\n    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein gro\xdfes Problem gesto\xdfen.\n    { $outdated ->\n        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).\n       *[false] Dies soll nicht passieren, deshalb w\xfcrden wir uns sehr dar\xfcber freuen, wenn Sie einen Fehler melden k\xf6nnten!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei l\xf6schen m\xf6chten?\nsave-reload-prompt =\n    Der einzige Weg zu { $action ->\n        [delete] l\xf6schen\n       *[replace] ersetzen\n    } diese Speicherdatei ohne m\xf6glichen Konflikt ist das erneute Laden dieses Inhalts. M\xf6chten Sie trotzdem fortfahren?\nsave-download = Herunterladen\nsave-replace = Ersetzen\nsave-delete = L\xf6schen\nsave-backup-all = Alle gespeicherten Dateien herunterladen\n",
            "volume-controls.ftl": "volume-controls-mute = Stummschalten\nvolume-controls-unmute = Stummschaltung aufheben\n"
        },
        "en-US": {
            "context_menu.ftl": "context-menu-download-swf = Download .swf\ncontext-menu-copy-debug-info = Copy debug info\ncontext-menu-open-save-manager = Open Save Manager\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] About Ruffle Extension ({$version})\n        *[other] About Ruffle ({$version})\n    }\ncontext-menu-hide = Hide this menu\ncontext-menu-exit-fullscreen = Exit fullscreen\ncontext-menu-enter-fullscreen = Enter fullscreen\ncontext-menu-volume-controls = Volume controls\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle wasn\'t able to run the Flash embedded in this page.\n    You can try to open the file in a separate tab, to sidestep this issue.\npanic-title = Something went wrong :(\nmore-info = More info\nrun-anyway = Run anyway\ncontinue = Continue\nreport-bug = Report Bug\nupdate-ruffle = Update Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktop Application\nruffle-wiki = View Ruffle Wiki\nenable-hardware-acceleration = It looks like hardware acceleration is disabled. While Ruffle may work, it could be very slow. You can find out how to enable hardware acceleration by following the link below:\nenable-hardware-acceleration-link = FAQ - Chrome Hardware Acceleration\nview-error-details = View Error Details\nopen-in-new-tab = Open in a new tab\nclick-to-unmute = Click to unmute\nclipboard-message-title = Copying and pasting in Ruffle\nclipboard-message-description =\n    { $variant ->\n        *[unsupported] Your browser does not support full clipboard access,\n        [access-denied] Access to the clipboard has been denied,\n    } but you can always use these shortcuts instead:\nclipboard-message-copy = { " " } for copy\nclipboard-message-cut = { " " } for cut\nclipboard-message-paste = { " " } for paste\nerror-file-protocol =\n    It appears you are running Ruffle on the "file:" protocol.\n    This doesn\'t work as browsers block many features from working for security reasons.\n    Instead, we invite you to setup a local server or either use the web demo or the desktop application.\nerror-javascript-config =\n    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.\n    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.\n    You can also consult the Ruffle wiki for help.\nerror-wasm-not-found =\n    Ruffle failed to load the required ".wasm" file component.\n    If you are the server administrator, please ensure the file has correctly been uploaded.\n    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.\nerror-wasm-mime-type =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This web server is not serving ".wasm" files with the correct MIME type.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-invalid-swf =\n    Ruffle cannot parse the requested file.\n    The most likely reason is that the requested file is not a valid SWF.\nerror-swf-fetch =\n    Ruffle failed to load the Flash SWF file.\n    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.\n    Try contacting the website administrator for help.\nerror-swf-cors =\n    Ruffle failed to load the Flash SWF file.\n    Access to fetch has likely been blocked by CORS policy.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-cors =\n    Ruffle failed to load the required ".wasm" file component.\n    Access to fetch has likely been blocked by CORS policy.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-invalid =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    It seems like this page has missing or invalid files for running Ruffle.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-download =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This can often resolve itself, so you can try reloading the page.\n    Otherwise, please contact the website administrator.\nerror-wasm-disabled-on-edge =\n    Ruffle failed to load the required ".wasm" file component.\n    To fix this, try opening your browser\'s settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".\n    This will allow your browser to load the required ".wasm" files.\n    If the issue persists, you might have to use a different browser.\nerror-javascript-conflict =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    It seems like this page uses JavaScript code that conflicts with Ruffle.\n    If you are the server administrator, we invite you to try loading the file on a blank page.\nerror-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).\nerror-csp-conflict =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This web server\'s Content Security Policy does not allow the required ".wasm" component to run.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-unknown =\n    Ruffle has encountered a major issue whilst trying to display this Flash content.\n    {$outdated ->\n        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).\n        *[false] This isn\'t supposed to happen, so we\'d really appreciate if you could file a bug!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Are you sure you want to delete this save file?\nsave-reload-prompt =\n    The only way to {$action ->\n    [delete] delete\n    *[replace] replace\n    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?\nsave-download = Download\nsave-replace = Replace\nsave-delete = Delete\nsave-backup-all = Download all save files",
            "volume-controls.ftl": "volume-controls-mute = Mute\nvolume-controls-unmute = Unmute\n"
        },
        "es-ES": {
            "context_menu.ftl": "context-menu-download-swf = Descargar .swf\ncontext-menu-copy-debug-info = Copiar Informaci\xf3n de depuraci\xf3n\ncontext-menu-open-save-manager = Abrir gestor de guardado\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre la extensi\xf3n de Ruffle ({ $version })\n       *[other] Sobre Ruffle ({ $version })\n    }\ncontext-menu-hide = Ocultar este men\xfa\ncontext-menu-exit-fullscreen = Salir de pantalla completa\ncontext-menu-enter-fullscreen = Entrar a pantalla completa\ncontext-menu-volume-controls = Controles de volumen\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle no pudo ejecutar el Flash incrustado en esta p\xe1gina.\n    Puedes intentar abrir el archivo en una pesta\xf1a aparte, para evitar este problema.\npanic-title = Algo sali\xf3 mal :(\nmore-info = M\xe1s info\nrun-anyway = Ejecutar de todos modos\ncontinue = Continuar\nreport-bug = Reportar un Error\nupdate-ruffle = Actualizar Ruffle\nruffle-demo = Demostraci\xf3n de web\nruffle-desktop = Aplicaci\xf3n de Desktop\nruffle-wiki = Ver la p\xe1gina wiki\nenable-hardware-acceleration = Al parecer, la aceleraci\xf3n de hardware est\xe1 deshabilitada. Puede que Ruffle funcione, pero este podr\xeda funcionar muy lentamente. Puedes averiguar como habilitar aceleraci\xf3n de hardware presionando el enlace:\nenable-hardware-acceleration-link = Preguntas frecuentes sobre la aceleraci\xf3n de hardware en Chrome\nview-error-details = Ver los detalles del error\nopen-in-new-tab = Abrir en una pesta\xf1a nueva\nclick-to-unmute = Haz clic para dejar de silenciar\nclipboard-message-title = Para copiar y pegar en Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] Este navegador no apoya acceso completo al portapapeles,\n        [access-denied] Se ha denegado el acceso al portapapeles,\n    } pero siempre se puede utilizar estos atajos:\nclipboard-message-copy = Para copiar\nclipboard-message-cut = Para cortar\nclipboard-message-paste = Para pegar\nerror-file-protocol =\n    Parece que est\xe1 ejecutando Ruffle en el protocolo "archivo:".\n    Esto no funciona porque los navegadores bloquean que muchas caracter\xedsticas funcionen por razones de seguridad.\n    En su lugar, le invitamos a configurar un servidor local o bien usar la demostraci\xf3n web o la aplicaci\xf3n de desktop.\nerror-javascript-config =\n    Ruffle ha encontrado un problema cr\xedtico debido a una configuraci\xf3n JavaScript incorrecta.\n    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qu\xe9 par\xe1metro est\xe1 en falta.\n    Tambi\xe9n puedes consultar la wiki de Ruffle para obtener ayuda.\nerror-wasm-not-found =\n    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.\n    Si usted es el administrador del servidor, aseg\xfarese de que el archivo ha sido subido correctamente.\n    Si el problema persiste, puede que necesite usar la configuraci\xf3n "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-mime-type =\n    Ruffle ha encontrado un problema cr\xedtico al intentar inicializar.\n    Este servidor web no est\xe1 sirviendo archivos wasm" con el tipo MIME correcto.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-invalid-swf = Ruffle no puede analizar el archivo solicitado. La raz\xf3n m\xe1s probable es que no es un archivo v\xe1lido SWF.\nerror-swf-fetch =\n    Ruffle no pudo cargar el archivo Flash SWF.\n    La raz\xf3n m\xe1s probable es que el archivo ya no existe, as\xed que no hay nada para cargar Ruffle.\n    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.\nerror-swf-cors =\n    Ruffle no pudo cargar el archivo Flash SWF.\n    Es probable que el acceso a la b\xfasqueda haya sido bloqueado por la pol\xedtica CORS.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-cors =\n    Ruffle no pudo cargar el archivo ".wasm."\n    Es probable que el acceso a la b\xfasqueda o la llamada a la funci\xf3n fetch haya sido bloqueado por la pol\xedtica CORS.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-invalid =\n    Ruffle ha encontrado un problema cr\xedtico al intentar inicializar.\n    Este servidor web no est\xe1 sirviendo archivos wasm" con el tipo Mime correcto.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-download =\n    Ruffle ha encontrado un problema cr\xedtico mientras intentaba inicializarse.\n    Esto a menudo puede resolverse por s\xed mismo, as\xed que puede intentar recargar la p\xe1gina.\n    De lo contrario, p\xf3ngase en contacto con el administrador del sitio web.\nerror-wasm-disabled-on-edge =\n    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.\n    Para solucionar esto, intenta abrir la configuraci\xf3n de tu navegador, haciendo clic en "Privacidad, b\xfasqueda y servicios", desplaz\xe1ndote y apagando "Mejore su seguridad en la web".\n    Esto permitir\xe1 a su navegador cargar los archivos ".wasm" necesarios.\n    Si el problema persiste, puede que tenga que utilizar un navegador diferente.\nerror-javascript-conflict =\n    Ruffle ha encontrado un problema cr\xedtico mientras intentaba inicializarse.\n    Parece que esta p\xe1gina utiliza c\xf3digo JavaScript que entra en conflicto con Ruffle.\n    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una p\xe1gina en blanco.\nerror-javascript-conflict-outdated = Tambi\xe9n puedes intentar subir una versi\xf3n m\xe1s reciente de Ruffle que puede eludir el problema (la versi\xf3n actual est\xe1 desactualizada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle encontr\xf3 un problema al intentar inicializarse.\n    La Pol\xedtica de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm". \n    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.\nerror-unknown =\n    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.\n    { $outdated ->\n        [true] Si usted es el administrador del servidor, intenta cargar una version m\xe1s reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).\n       *[false] Esto no deberia suceder! apreciariamos que reportes el error!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \xbfEst\xe1 seguro de querer eliminar este archivo de guardado?\nsave-reload-prompt =\n    La \xfanica forma de { $action ->\n        [delete] eliminar\n       *[replace] sobreescribir\n    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. \xbfDesea continuar de todos modos?\nsave-download = Descargar\nsave-replace = Sobreescribir\nsave-delete = Borrar\nsave-backup-all = Borrar todos los archivos de guardado\n",
            "volume-controls.ftl": "volume-controls-mute = Silenciar\nvolume-controls-unmute = Desenmudecer\n"
        },
        "fr-FR": {
            "context_menu.ftl": "context-menu-download-swf = T\xe9l\xe9charger en tant que .swf\ncontext-menu-copy-debug-info = Copier les infos de d\xe9bogage\ncontext-menu-open-save-manager = Ouvrir le gestionnaire de stockage\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] \xc0 propos de l'Extension Ruffle ({ $version })\n       *[other] \xc0 propos de Ruffle ({ $version })\n    }\ncontext-menu-hide = Masquer ce menu\ncontext-menu-exit-fullscreen = Sortir du mode plein \xe9cran\ncontext-menu-enter-fullscreen = Afficher en plein \xe9cran\ncontext-menu-volume-controls = Contr\xf4les du volume\n",
            "messages.ftl": "message-cant-embed =\n    Ruffle n'a pas \xe9t\xe9 en mesure de lire le fichier Flash int\xe9gr\xe9 dans cette page.\n    Vous pouvez essayer d'ouvrir le fichier dans un onglet isol\xe9, pour contourner le probl\xe8me.\npanic-title = Une erreur est survenue :(\nmore-info = Plus d'infos\nrun-anyway = Ex\xe9cuter quand m\xeame\ncontinue = Continuer\nreport-bug = Signaler le bug\nupdate-ruffle = Mettre \xe0 jour Ruffle\nruffle-demo = D\xe9mo en ligne\nruffle-desktop = Application de bureau\nruffle-wiki = Wiki de Ruffle\nenable-hardware-acceleration = Il semblerait que l'acc\xe9l\xe9ration mat\xe9rielle soit d\xe9sactiv\xe9e. Cela n'emp\xeache g\xe9n\xe9ralement pas Ruffle de fonctionner, mais il peut \xeatre beaucoup plus lent. Vous pouvez trouver comment activer l'acc\xe9l\xe9ration mat\xe9rielle en suivant le lien ci-dessous :\nenable-hardware-acceleration-link = FAQ - Acc\xe9l\xe9ration mat\xe9rielle dans Chrome\nview-error-details = D\xe9tails de l'erreur\nopen-in-new-tab = Ouvrir dans un nouvel onglet\nclick-to-unmute = Cliquez pour activer le son\nclipboard-message-title = Copier et coller dans Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] Votre navigateur ne prend pas en charge l'acc\xe8s au presse-papiers,\n        [access-denied] L'acc\xe8s au presse-papiers a \xe9t\xe9 refus\xe9,\n    } mais vous pouvez toujours utiliser ces raccourcis clavier \xe0 la place :\nclipboard-message-copy = { \" \" } pour copier\nclipboard-message-cut = { \" \" } pour couper\nclipboard-message-paste = { \" \" } pour coller\nerror-file-protocol =\n    Il semblerait que vous ex\xe9cutiez Ruffle sur le protocole \"file:\".\n    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalit\xe9s pour des raisons de s\xe9curit\xe9.\n    Nous vous invitons soit \xe0 configurer un serveur local, soit \xe0 utiliser la d\xe9mo en ligne ou l'application de bureau.\nerror-javascript-config =\n    Ruffle a rencontr\xe9 un probl\xe8me majeur en raison d'une configuration JavaScript incorrecte.\n    Si vous \xeates l'administrateur du serveur, nous vous invitons \xe0 v\xe9rifier les d\xe9tails de l'erreur pour savoir quel est le param\xe8tre en cause.\n    Vous pouvez \xe9galement consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-not-found =\n    Ruffle n'a pas r\xe9ussi \xe0 charger son fichier \".wasm\".\n    Si vous \xeates l'administrateur du serveur, veuillez vous assurer que ce fichier a bien \xe9t\xe9 mis en ligne.\n    Si le probl\xe8me persiste, il vous faudra peut-\xeatre utiliser le param\xe8tre \"publicPath\" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-mime-type =\n    Ruffle a rencontr\xe9 un probl\xe8me majeur durant sa phase d'initialisation.\n    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers \".wasm\".\n    Si vous \xeates l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-invalid-swf =\n    Ruffle n'a pas \xe9t\xe9 en mesure de lire le fichier demand\xe9.\n    La raison la plus probable est que ce fichier n'est pas un SWF valide.\nerror-swf-fetch =\n    Ruffle n'a pas r\xe9ussi \xe0 charger le fichier Flash.\n    La raison la plus probable est que le fichier n'existe pas ou plus.\n    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.\nerror-swf-cors =\n    Ruffle n'a pas r\xe9ussi \xe0 charger le fichier Flash.\n    La requ\xeate a probablement \xe9t\xe9 rejet\xe9e en raison de la configuration du CORS.\n    Si vous \xeates l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-cors =\n    Ruffle n'a pas r\xe9ussi \xe0 charger son fichier \".wasm\".\n    La requ\xeate a probablement \xe9t\xe9 rejet\xe9e en raison de la configuration du CORS.\n    Si vous \xeates l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-invalid =\n    Ruffle a rencontr\xe9 un probl\xe8me majeur durant sa phase d'initialisation.\n    Il semblerait que cette page comporte des fichiers manquants ou invalides pour ex\xe9cuter Ruffle.\n    Si vous \xeates l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-download =\n    Ruffle a rencontr\xe9 un probl\xe8me majeur durant sa phase d'initialisation.\n    Le probl\xe8me d\xe9tect\xe9 peut souvent se r\xe9soudre de lui-m\xeame, donc vous pouvez essayer de recharger la page.\n    Si le probl\xe8me persiste, veuillez prendre contact avec l'administrateur du site.\nerror-wasm-disabled-on-edge =\n    Ruffle n'a pas r\xe9ussi \xe0 charger son fichier \".wasm\".\n    Pour r\xe9soudre ce probl\xe8me, essayez d'ouvrir les param\xe8tres de votre navigateur et de cliquer sur \"Confidentialit\xe9, recherche et services\". Puis, vers le bas de la page, d\xe9sactivez l'option \"Am\xe9liorez votre s\xe9curit\xe9 sur le web\".\n    Cela permettra \xe0 votre navigateur de charger les fichiers \".wasm\".\n    Si le probl\xe8me persiste, vous devrez peut-\xeatre utiliser un autre navigateur.\nerror-javascript-conflict =\n    Ruffle a rencontr\xe9 un probl\xe8me majeur durant sa phase d'initialisation.\n    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.\n    Si vous \xeates l'administrateur du serveur, nous vous invitons \xe0 essayer de charger le fichier dans une page vide.\nerror-javascript-conflict-outdated = Vous pouvez \xe9galement essayer de mettre en ligne une version plus r\xe9cente de Ruffle qui pourrait avoir corrig\xe9 le probl\xe8me (la version que vous utilisez est obsol\xe8te : { $buildDate }).\nerror-csp-conflict =\n    Ruffle a rencontr\xe9 un probl\xe8me majeur durant sa phase d'initialisation.\n    La strat\xe9gie de s\xe9curit\xe9 du contenu (CSP) de ce serveur web n'autorise pas l'ex\xe9cution de fichiers \".wasm\".\n    Si vous \xeates l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-unknown =\n    Ruffle a rencontr\xe9 un probl\xe8me majeur durant l'ex\xe9cution de ce contenu Flash.\n    { $outdated ->\n        [true] Si vous \xeates l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus r\xe9cente de Ruffle (la version que vous utilisez est obsol\xe8te : { $buildDate }).\n       *[false] Cela n'est pas cens\xe9 se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !\n    }\n",
            "save-manager.ftl": "save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?\nsave-reload-prompt =\n    La seule fa\xe7on de { $action ->\n        [delete] supprimer\n       *[replace] remplacer\n    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand m\xeame continuer ?\nsave-download = T\xe9l\xe9charger\nsave-replace = Remplacer\nsave-delete = Supprimer\nsave-backup-all = T\xe9l\xe9charger tous les fichiers de sauvegarde\n",
            "volume-controls.ftl": "volume-controls-mute = Rendre muet\nvolume-controls-unmute = Rendre audible\n"
        },
        "he-IL": {
            "context_menu.ftl": "context-menu-download-swf = \u05d4\u05d5\u05e8\u05d3\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4swf.\ncontext-menu-copy-debug-info = \u05d4\u05e2\u05ea\u05e7\u05ea \u05e0\u05ea\u05d5\u05e0\u05d9 \u05e0\u05d9\u05e4\u05d5\u05d9 \u05e9\u05d2\u05d9\u05d0\u05d5\u05ea\ncontext-menu-open-save-manager = \u05e4\u05ea\u05d7 \u05d0\u05ea \u05de\u05e0\u05d4\u05dc \u05d4\u05e9\u05de\u05d9\u05e8\u05d5\u05ea\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] \u05d0\u05d5\u05d3\u05d5\u05ea \u05d4\u05ea\u05d5\u05e1\u05e3 Ruffle ({ $version })\n       *[other] \u05d0\u05d5\u05d3\u05d5\u05ea Ruffle ({ $version })\n    }\ncontext-menu-hide = \u05d4\u05e1\u05ea\u05e8 \u05ea\u05e4\u05e8\u05d9\u05d8 \u05d6\u05d4\ncontext-menu-exit-fullscreen = \u05d9\u05e6\u05d9\u05d0\u05d4 \u05de\u05de\u05e1\u05da \u05de\u05dc\u05d0\ncontext-menu-enter-fullscreen = \u05de\u05e1\u05da \u05de\u05dc\u05d0\ncontext-menu-volume-controls = \u05d1\u05e7\u05e8\u05ea \u05e2\u05d5\u05e6\u05de\u05ea \u05e7\u05d5\u05dc\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle \u05dc\u05d0 \u05d4\u05e6\u05dc\u05d9\u05d7 \u05dc\u05d4\u05e8\u05d9\u05e5 \u05d0\u05ea \u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05dc\u05d0\u05e9 \u05d4\u05de\u05d5\u05d8\u05de\u05e2 \u05d1\u05d3\u05e3 \u05d6\u05d4.\n    \u05d0\u05ea\u05d4 \u05d9\u05db\u05d5\u05dc \u05dc\u05e4\u05ea\u05d5\u05d7 \u05d0\u05ea \u05d4\u05e7\u05d5\u05d1\u05e5 \u05d1\u05dc\u05e9\u05d5\u05e0\u05d9\u05ea \u05e0\u05e4\u05e8\u05d3\u05ea, \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e2\u05e7\u05d5\u05e3 \u05d1\u05e2\u05d9\u05d4 \u05d6\u05d5.\npanic-title = \u05de\u05e9\u05d4\u05d5 \u05d4\u05e9\u05ea\u05d1\u05e9 :(\nmore-info = \u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3\nrun-anyway = \u05d4\u05e4\u05e2\u05dc \u05d1\u05db\u05dc \u05d6\u05d0\u05ea\ncontinue = \u05d4\u05de\u05e9\u05da\nreport-bug = \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05ea\u05e7\u05dc\u05d4\nupdate-ruffle = \u05e2\u05d3\u05db\u05df \u05d0\u05ea Ruffle\nruffle-demo = \u05d4\u05d3\u05d2\u05de\u05d4\nruffle-desktop = \u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d9\u05ea \u05e9\u05d5\u05dc\u05d7\u05df \u05e2\u05d1\u05d5\u05d3\u05d4\nruffle-wiki = \u05e8\u05d0\u05d4 \u05d0\u05ea Ruffle wiki\nview-error-details = \u05e8\u05d0\u05d4 \u05e4\u05e8\u05d8\u05d9 \u05e9\u05d2\u05d9\u05d0\u05d4\nopen-in-new-tab = \u05e4\u05ea\u05d7 \u05d1\u05db\u05e8\u05d8\u05d9\u05e1\u05d9\u05d9\u05d4 \u05d7\u05d3\u05e9\u05d4\nclick-to-unmute = \u05dc\u05d7\u05e5 \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05d1\u05d8\u05dc \u05d4\u05e9\u05ea\u05e7\u05d4\nclipboard-message-title = \u05d4\u05e2\u05ea\u05e7\u05d4 \u05d5\u05d4\u05d3\u05d1\u05e7\u05d4 \u05d1Ruffle\nclipboard-message-copy = { " " } \u05e2\u05d1\u05d5\u05e8 \u05d4\u05e2\u05ea\u05e7\u05d4\nclipboard-message-cut = { " " } \u05e2\u05d1\u05d5\u05e8 \u05d2\u05d6\u05d9\u05e8\u05d4\nclipboard-message-paste = { " " } \u05e2\u05d1\u05d5\u05e8 \u05d4\u05d3\u05d1\u05e7\u05d4\nerror-file-protocol =\n    \u05e0\u05d3\u05de\u05d4 \u05e9\u05d0\u05ea\u05d4 \u05de\u05e8\u05d9\u05e5 \u05d0\u05ea Ruffle \u05ea\u05d7\u05ea \u05e4\u05e8\u05d5\u05d8\u05d5\u05e7\u05d5\u05dc "file:".\n    \u05d6\u05d4 \u05dc\u05d0 \u05d9\u05e2\u05d1\u05d5\u05d3 \u05de\u05db\u05d9\u05d5\u05d5\u05df \u05e9\u05d3\u05e4\u05d3\u05e4\u05e0\u05d9\u05dd \u05d7\u05d5\u05e1\u05de\u05d9\u05dd \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05e8\u05d1\u05d5\u05ea \u05de\u05dc\u05e2\u05d1\u05d5\u05d3 \u05e2\u05e7\u05d1 \u05e1\u05d9\u05d1\u05d5\u05ea \u05d0\u05d1\u05d8\u05d7\u05d4.\n    \u05d1\u05de\u05e7\u05d5\u05dd \u05d6\u05d4, \u05d0\u05e0\u05d5 \u05de\u05d6\u05de\u05d9\u05e0\u05d9\u05dd \u05d0\u05d5\u05ea\u05da \u05dc\u05d0\u05d7\u05e1\u05df \u05d0\u05ea\u05e8 \u05d6\u05d4 \u05ea\u05d7\u05ea \u05e9\u05e8\u05ea \u05de\u05e7\u05d5\u05de\u05d9 \u05d0\u05d5 \u05d4\u05d3\u05d2\u05de\u05d4 \u05d1\u05e8\u05e9\u05ea \u05d0\u05d5 \u05d3\u05e8\u05da \u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d9\u05ea \u05e9\u05d5\u05dc\u05d7\u05df \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4.\nerror-javascript-config =\n    Ruffle \u05e0\u05ea\u05e7\u05dc \u05d1\u05ea\u05e7\u05dc\u05d4 \u05d7\u05de\u05d5\u05e8\u05d4 \u05e2\u05e7\u05d1 \u05d4\u05d2\u05d3\u05e8\u05ea JavaScript \u05e9\u05d2\u05d5\u05d9\u05d4.\n    \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d5 \u05de\u05d6\u05de\u05d9\u05e0\u05d9\u05dd \u05d0\u05d5\u05ea\u05da \u05dc\u05d1\u05d3\u05d5\u05e7 \u05d0\u05ea \u05e4\u05e8\u05d8\u05d9 \u05d4\u05e9\u05d2\u05d9\u05d0\u05d4 \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05de\u05e6\u05d5\u05d0 \u05d0\u05d9\u05d6\u05d4 \u05e4\u05e8\u05de\u05d8\u05e8 \u05d4\u05d5\u05d0 \u05e9\u05d2\u05d5\u05d9.\n    \u05d0\u05ea\u05d4 \u05d9\u05db\u05d5\u05dc \u05dc\u05e2\u05d9\u05d9\u05df \u05d5\u05dc\u05d4\u05d5\u05e2\u05e5 \u05d1wiki \u05e9\u05dc Ruffle \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e7\u05d1\u05dc \u05e2\u05d6\u05e8\u05d4.\nerror-wasm-not-found =\n    Ruffle \u05e0\u05db\u05e9\u05dc \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4"wasm." \u05d4\u05d3\u05e8\u05d5\u05e9.\n    \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d0 \u05d5\u05d5\u05d3\u05d0 \u05db\u05d9 \u05d4\u05e7\u05d5\u05d1\u05e5 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05db\u05e9\u05d5\u05e8\u05d4.\n    \u05d0\u05dd \u05d4\u05d1\u05e2\u05d9\u05d4 \u05de\u05de\u05e9\u05d9\u05db\u05d4, \u05d9\u05d9\u05ea\u05db\u05df \u05d5\u05ea\u05e6\u05d8\u05e8\u05da \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1\u05d4\u05d2\u05d3\u05e8\u05ea "publicPath": \u05d0\u05e0\u05d0 \u05e2\u05d9\u05d9\u05df \u05d5\u05d4\u05d5\u05e2\u05e5 \u05d1wiki \u05e9\u05dc Ruffle \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e7\u05d1\u05dc \u05e2\u05d6\u05e8\u05d4.\nerror-wasm-mime-type =\n    Ruffle \u05e0\u05ea\u05e7\u05dc \u05d1\u05d1\u05e2\u05d9\u05d4 \u05d7\u05de\u05d5\u05e8\u05d4 \u05ea\u05d5\u05da \u05db\u05d3\u05d9 \u05e0\u05d9\u05e1\u05d9\u05d5\u05df \u05dc\u05d0\u05ea\u05d7\u05dc.\n    \u05e9\u05e8\u05ea\u05d5 \u05e9\u05dc \u05d0\u05ea\u05e8 \u05d6\u05d4 \u05dc\u05d0 \u05de\u05e9\u05d9\u05d9\u05da \u05e7\u05d1\u05e6\u05d9 ".wasm" \u05e2\u05dd \u05e1\u05d5\u05d2 \u05d4MIME \u05d4\u05e0\u05db\u05d5\u05df.\n    \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d0 \u05e2\u05d9\u05d9\u05df \u05d5\u05d4\u05d5\u05e2\u05e5 \u05d1wiki \u05e9\u05dc Ruffle \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e7\u05d1\u05dc \u05e2\u05d6\u05e8\u05d4.\nerror-invalid-swf =\n    Ruffle \u05dc\u05d0 \u05d9\u05db\u05d5\u05dc \u05dc\u05e0\u05ea\u05d7 \u05d0\u05ea \u05d4\u05e7\u05d5\u05d1\u05e5 \u05d4\u05de\u05d1\u05d5\u05e7\u05e9.\n    \u05d4\u05e1\u05d9\u05d1\u05d4 \u05d4\u05e1\u05d1\u05d9\u05e8\u05d4 \u05d1\u05d9\u05d5\u05ea\u05e8 \u05dc\u05d1\u05e2\u05d9\u05d4 \u05d6\u05d5 \u05d4\u05d9\u05d0 \u05d1\u05d2\u05dc\u05dc \u05e9\u05d4\u05e7\u05d5\u05d1\u05e5 \u05d4\u05de\u05d1\u05d5\u05e7\u05e9 \u05d0\u05d9\u05e0\u05d5 SWF \u05d7\u05d5\u05e7\u05d9.\nerror-swf-fetch =\n    Ruffle \u05e0\u05db\u05e9\u05dc \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4\u05e4\u05dc\u05d0\u05e9/swf. .\n    \u05d6\u05d4 \u05e0\u05d5\u05d1\u05e2 \u05db\u05db\u05dc \u05d4\u05e0\u05e8\u05d0\u05d4 \u05de\u05db\u05d9\u05d5\u05d5\u05df \u05d5\u05d4\u05e7\u05d5\u05d1\u05e5 \u05dc\u05d0 \u05e7\u05d9\u05d9\u05dd \u05d9\u05d5\u05ea\u05e8, \u05d0\u05d6 \u05d0\u05d9\u05df \u05dcRuffle \u05de\u05d4 \u05dc\u05d8\u05e2\u05d5\u05df.\n    \u05e0\u05e1\u05d4 \u05dc\u05d9\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8 \u05e2\u05dd \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8 \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e7\u05d1\u05dc \u05e2\u05d6\u05e8\u05d4.\nerror-swf-cors =\n    Ruffle \u05e0\u05db\u05e9\u05dc \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4\u05e4\u05dc\u05d0\u05e9/swf. .\n    \u05d2\u05d9\u05e9\u05d4 \u05dcfetch \u05db\u05db\u05dc \u05d4\u05e0\u05e8\u05d0\u05d4 \u05e0\u05d7\u05e1\u05de\u05d4 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea CORS.\n    \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d0 \u05e2\u05d9\u05d9\u05df \u05d5\u05d4\u05d5\u05e2\u05e5 \u05d1wiki \u05e9\u05dc Ruffle \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e7\u05d1\u05dc \u05e2\u05d6\u05e8\u05d4.\nerror-wasm-cors =\n    Ruffle \u05e0\u05db\u05e9\u05dc \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4".wasm" \u05d4\u05d3\u05e8\u05d5\u05e9.\n    \u05d2\u05d9\u05e9\u05d4 \u05dcfetch \u05db\u05db\u05dc \u05d4\u05e0\u05e8\u05d0\u05d4 \u05e0\u05d7\u05e1\u05de\u05d4 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea CORS.\n    \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d0 \u05e2\u05d9\u05d9\u05df \u05d5\u05d4\u05d5\u05e2\u05e5 \u05d1wiki \u05e9\u05dc Ruffle \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e7\u05d1\u05dc \u05e2\u05d6\u05e8\u05d4.\nerror-wasm-invalid =\n    Ruffle \u05e0\u05ea\u05e7\u05dc \u05d1\u05d1\u05e2\u05d9\u05d4 \u05d7\u05de\u05d5\u05e8\u05d4 \u05ea\u05d5\u05da \u05db\u05d3\u05d9 \u05e0\u05d9\u05e1\u05d9\u05d5\u05df \u05dc\u05d0\u05ea\u05d7\u05dc.\n    \u05e0\u05d3\u05de\u05d4 \u05db\u05d9 \u05d1\u05d3\u05e3 \u05d6\u05d4 \u05d7\u05e1\u05e8\u05d9\u05dd \u05d0\u05d5 \u05dc\u05d0 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05db\u05e8\u05d0\u05d5\u05d9 \u05e7\u05d1\u05e6\u05d9\u05dd \u05d0\u05e9\u05e8 \u05de\u05e9\u05de\u05e9\u05d9\u05dd \u05d0\u05ea Ruffle \u05db\u05d3\u05d9 \u05dc\u05e4\u05e2\u05d5\u05dc\n    \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d0 \u05e2\u05d9\u05d9\u05df \u05d5\u05d4\u05d5\u05e2\u05e5 \u05d1wiki \u05e9\u05dc Ruffle \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e7\u05d1\u05dc \u05e2\u05d6\u05e8\u05d4.\nerror-wasm-download =\n    Ruffle \u05e0\u05ea\u05e7\u05dc \u05d1\u05d1\u05e2\u05d9\u05d4 \u05d7\u05de\u05d5\u05e8\u05d4 \u05ea\u05d5\u05da \u05db\u05d3\u05d9 \u05e0\u05d9\u05e1\u05d9\u05d5\u05df \u05dc\u05d0\u05ea\u05d7\u05dc.\n    \u05dc\u05e2\u05d9\u05ea\u05d9\u05dd \u05d1\u05e2\u05d9\u05d4 \u05d6\u05d5 \u05d9\u05db\u05d5\u05dc\u05d4 \u05dc\u05e4\u05ea\u05d5\u05e8 \u05d0\u05ea \u05e2\u05e6\u05de\u05d4, \u05d0\u05d6 \u05d0\u05ea\u05d4 \u05d9\u05db\u05d5\u05dc \u05dc\u05e0\u05e1\u05d5\u05ea \u05dc\u05d8\u05e2\u05d5\u05df \u05de\u05d7\u05d3\u05e9 \u05d0\u05ea \u05d4\u05d3\u05e3 \u05d6\u05d4.\n    \u05d0\u05dd \u05dc\u05d0, \u05d0\u05e0\u05d0 \u05e4\u05e0\u05d4 \u05dc\u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8.\nerror-wasm-disabled-on-edge =\n    Ruffle \u05e0\u05db\u05e9\u05dc \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4".wasm" \u05d4\u05d3\u05e8\u05d5\u05e9.\n    \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05ea\u05e7\u05df \u05d1\u05e2\u05d9\u05d4 \u05d6\u05d5, \u05e0\u05e1\u05d4 \u05dc\u05e4\u05ea\u05d5\u05d7 \u05d0\u05ea \u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d4\u05d3\u05e4\u05d3\u05e4\u05df \u05e9\u05dc\u05da, \u05dc\u05d7\u05e5 \u05e2\u05dc "\u05d0\u05d1\u05d8\u05d7\u05d4, \u05d7\u05d9\u05e4\u05d5\u05e9 \u05d5\u05e9\u05d9\u05e8\u05d5\u05ea",\n    \u05d2\u05dc\u05d5\u05dc \u05de\u05d8\u05d4, \u05d5\u05db\u05d1\u05d4 \u05d0\u05ea "\u05d4\u05d2\u05d1\u05e8 \u05d0\u05ea \u05d4\u05d0\u05d1\u05d8\u05d7\u05d4 \u05e9\u05dc\u05da \u05d1\u05e8\u05e9\u05ea".\n    \u05d6\u05d4 \u05d9\u05d0\u05e4\u05e9\u05e8 \u05dc\u05d3\u05e4\u05d3\u05e4\u05df \u05e9\u05dc\u05da \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4".wasm" \u05d4\u05d3\u05e8\u05d5\u05e9.\n    \u05d0\u05dd \u05d4\u05d1\u05e2\u05d9\u05d4 \u05de\u05de\u05e9\u05d9\u05db\u05d4, \u05d9\u05d9\u05ea\u05db\u05df \u05d5\u05e2\u05dc\u05d9\u05da \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1\u05d3\u05e4\u05d3\u05e4\u05df \u05d0\u05d7\u05e8.\nerror-javascript-conflict =\n    Ruffle \u05e0\u05ea\u05e7\u05dc \u05d1\u05d1\u05e2\u05d9\u05d4 \u05d7\u05de\u05d5\u05e8\u05d4 \u05ea\u05d5\u05da \u05db\u05d3\u05d9 \u05e0\u05d9\u05e1\u05d9\u05d5\u05df \u05dc\u05d0\u05ea\u05d7\u05dc.\n    \u05e0\u05d3\u05de\u05d4 \u05db\u05d9 \u05d3\u05e3 \u05d6\u05d4 \u05de\u05e9\u05ea\u05de\u05e9 \u05d1\u05e7\u05d5\u05d3 JavaScript \u05d0\u05e9\u05e8 \u05de\u05ea\u05e0\u05d2\u05e9 \u05e2\u05dd Ruffle.\n    \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d5 \u05de\u05d6\u05de\u05d9\u05e0\u05d9\u05dd \u05d0\u05d5\u05ea\u05da \u05dc\u05e0\u05e1\u05d5\u05ea \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05d4\u05d3\u05e3 \u05ea\u05d7\u05ea \u05e2\u05de\u05d5\u05d3 \u05e8\u05d9\u05e7.\nerror-javascript-conflict-outdated = \u05d1\u05e0\u05d5\u05e1\u05e3, \u05d0\u05ea\u05d4 \u05d9\u05db\u05d5\u05dc \u05dc\u05e0\u05e1\u05d5\u05ea \u05d5\u05dc\u05d4\u05e2\u05dc\u05d5\u05ea \u05d2\u05e8\u05e1\u05d0\u05d5\u05ea \u05e2\u05d3\u05db\u05e0\u05d9\u05d5\u05ea \u05e9\u05dc Ruffle \u05d0\u05e9\u05e8 \u05e2\u05dc\u05d5\u05dc\u05d9\u05dd \u05dc\u05e2\u05e7\u05d5\u05e3 \u05d1\u05e2\u05d9\u05d4 \u05d6\u05d5 (\u05d2\u05e8\u05e1\u05d4 \u05d6\u05d5 \u05d4\u05d9\u05e0\u05d4 \u05de\u05d9\u05d5\u05e9\u05e0\u05ea : { $buildDate }).\nerror-csp-conflict =\n    Ruffle \u05e0\u05ea\u05e7\u05dc \u05d1\u05d1\u05e2\u05d9\u05d4 \u05d7\u05de\u05d5\u05e8\u05d4 \u05ea\u05d5\u05da \u05db\u05d3\u05d9 \u05e0\u05d9\u05e1\u05d9\u05d5\u05df \u05dc\u05d0\u05ea\u05d7\u05dc.\n    \u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea \u05d0\u05d1\u05d8\u05d7\u05ea \u05d4\u05ea\u05d5\u05db\u05df \u05e9\u05dc \u05e9\u05e8\u05ea\u05d5 \u05e9\u05dc \u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d0\u05d9\u05e0\u05d4 \u05de\u05d0\u05e4\u05e9\u05e8\u05ea \u05dc\u05e7\u05d5\u05d1\u05e5 \u05d4"wasm." \u05d4\u05d3\u05e8\u05d5\u05e9 \u05dc\u05e4\u05e2\u05d5\u05dc.\n    \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d0 \u05e2\u05d9\u05d9\u05df \u05d5\u05d4\u05d5\u05e2\u05e5 \u05d1wiki \u05e9\u05dc Ruffle \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05e7\u05d1\u05dc \u05e2\u05d6\u05e8\u05d4.\nerror-unknown =\n    Ruffle \u05e0\u05ea\u05e7\u05dc \u05d1\u05d1\u05e2\u05d9\u05d4 \u05d7\u05de\u05d5\u05e8\u05d4 \u05d1\u05e0\u05d9\u05e1\u05d9\u05d5\u05df \u05dc\u05d4\u05e6\u05d9\u05d2 \u05d0\u05ea \u05ea\u05d5\u05db\u05df \u05e4\u05dc\u05d0\u05e9 \u05d6\u05d4.\n    { $outdated ->\n        [true] \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d4\u05d0\u05ea\u05e8, \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05dc\u05d4\u05e2\u05dc\u05d5\u05ea \u05d2\u05e8\u05e1\u05d4 \u05e2\u05d3\u05db\u05e0\u05d9\u05ea \u05d9\u05d5\u05ea\u05e8 \u05e9\u05dc Ruffle (\u05d2\u05e8\u05e1\u05d4 \u05d6\u05d5 \u05d4\u05d9\u05e0\u05d4 \u05de\u05d9\u05d5\u05e9\u05e0\u05ea:  { $buildDate }).\n       *[false] \u05d6\u05d4 \u05dc\u05d0 \u05d0\u05de\u05d5\u05e8 \u05dc\u05e7\u05e8\u05d5\u05ea, \u05e0\u05e9\u05de\u05d7 \u05d0\u05dd \u05ea\u05d5\u05db\u05dc \u05dc\u05e9\u05ea\u05e3 \u05ea\u05e7\u05dc\u05d4 \u05d6\u05d5!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \u05d4\u05d0\u05dd \u05d0\u05ea\u05d4 \u05d1\u05d8\u05d5\u05d7 \u05e9\u05d1\u05e8\u05e6\u05d5\u05e0\u05da \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05e9\u05de\u05d9\u05e8\u05d4 \u05d6\u05d4?\nsave-reload-prompt =\n    \u05d4\u05d3\u05e8\u05da \u05d4\u05d9\u05d7\u05d9\u05d3\u05d4 { $action ->\n        [delete] \u05dc\u05de\u05d7\u05d5\u05e7\n       *[replace] \u05dc\u05d4\u05d7\u05dc\u05d9\u05e3\n    } \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4\u05e9\u05de\u05d9\u05e8\u05d4 \u05d4\u05d6\u05d4 \u05de\u05d1\u05dc\u05d9 \u05dc\u05d2\u05e8\u05d5\u05dd \u05dc\u05d5 \u05dc\u05d4\u05ea\u05e0\u05d2\u05e9 \u05d4\u05d9\u05d0 \u05dc\u05d8\u05e2\u05d5\u05df \u05de\u05d7\u05d3\u05e9 \u05d0\u05ea \u05ea\u05d5\u05db\u05df \u05d6\u05d4. \u05d4\u05d0\u05dd \u05d0\u05ea\u05d4 \u05e8\u05d5\u05e6\u05d4 \u05dc\u05d4\u05de\u05e9\u05d9\u05da \u05d1\u05db\u05dc \u05d6\u05d0\u05ea?\nsave-download = \u05d4\u05d5\u05e8\u05d3\u05d4\nsave-replace = \u05d4\u05d7\u05dc\u05e4\u05d4\nsave-delete = \u05de\u05d7\u05d9\u05e7\u05d4\nsave-backup-all = \u05d4\u05d5\u05e8\u05d3\u05ea \u05db\u05dc \u05e7\u05d1\u05e6\u05d9 \u05d4\u05e9\u05de\u05d9\u05e8\u05d4\n",
            "volume-controls.ftl": "volume-controls-mute = \u05d4\u05e9\u05ea\u05e7\n"
        },
        "hu-HU": {
            "context_menu.ftl": "context-menu-download-swf = .swf f\xe1jl let\xf6lt\xe9se\ncontext-menu-copy-debug-info = Hibakeres\xe9si inform\xe1ci\xf3k m\xe1sol\xe1sa\ncontext-menu-open-save-manager = Ment\xe9skezel\u0151 megnyit\xe1sa\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] A Ruffle kieg\xe9sz\xedt\u0151 ({ $version }) n\xe9vjegye\n       *[other] A Ruffle ({ $version }) n\xe9vjegye\n    }\ncontext-menu-hide = Ezen men\xfc elrejt\xe9se\ncontext-menu-exit-fullscreen = Kil\xe9p\xe9s a teljes k\xe9perny\u0151b\u0151l\ncontext-menu-enter-fullscreen = V\xe1lt\xe1s teljes k\xe9perny\u0151re\ncontext-menu-volume-controls = Hanger\u0151szab\xe1lyz\xf3\n",
            "messages.ftl": 'message-cant-embed =\n    A Ruffle nem tudta futtatni az oldalba \xe1gyazott Flash tartalmat.\n    A probl\xe9ma kiker\xfcl\xe9s\xe9hez megpr\xf3b\xe1lhatod megnyitni a f\xe1jlt egy k\xfcl\xf6n lapon.\npanic-title = Valami baj t\xf6rt\xe9nt :(\nmore-info = Tov\xe1bbi inform\xe1ci\xf3\nrun-anyway = Futtat\xe1s m\xe9gis\ncontinue = Folytat\xe1s\nreport-bug = Hiba jelent\xe9se\nupdate-ruffle = Ruffle friss\xedt\xe9se\nruffle-demo = Webes dem\xf3\nruffle-desktop = Asztali alkalmaz\xe1s\nruffle-wiki = Ruffle Wiki megnyit\xe1sa\nenable-hardware-acceleration = \xdagy t\u0171nik, a hardveres gyors\xedt\xe1s ki van kapcsolva. B\xe1r a Ruffle m\u0171k\xf6dhet, nagyon lass\xfa lehet. Az al\xe1bbi hivatkoz\xe1st k\xf6vetve megtudhatod, hogyan enged\xe9lyezd a hardveres gyors\xedt\xe1st:\nenable-hardware-acceleration-link = GYIK - Chrome hardveres gyors\xedt\xe1s\nview-error-details = Hiba r\xe9szletei\nopen-in-new-tab = Megnyit\xe1s \xfaj lapon\nclick-to-unmute = Kattints a n\xe9m\xedt\xe1s felold\xe1s\xe1hoz\nclipboard-message-title = M\xe1sol\xe1s \xe9s be\xedlleszt\xe9s a Ruffle-ben\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] A b\xf6ng\xe9sz\u0151d nem t\xe1mogatja a v\xe1g\xf3laphoz val\xf3 teljes hozz\xe1f\xe9r\xe9st,\n        [access-denied] A v\xe1g\xf3laphoz val\xf3 hozz\xe1f\xe9r\xe9s el lett utas\xedtva,\n    } de mindig haszn\xe1lhatod ezeket a gyorsbillenty\u0171ket helyette:\nclipboard-message-copy = { " " } m\xe1sol\xe1shoz\nclipboard-message-cut = { " " } kiv\xe1g\xe1shoz\nclipboard-message-paste = { " " } beilleszt\xe9shez\nerror-file-protocol =\n    \xdagy t\u0171nik, a Ruffle-t a "file:" protokollon futtatod.\n    Ez nem m\u0171k\xf6dik, mivel \xedgy a b\xf6ng\xe9sz\u0151k biztons\xe1gi okokb\xf3l sz\xe1mos funkci\xf3 m\u0171k\xf6d\xe9s\xe9t letiltj\xe1k.\n    Ehelyett azt aj\xe1nljuk hogy ind\xedts egy helyi kiszolg\xe1l\xf3t, vagy haszn\xe1ld a webes dem\xf3t vagy az asztali alkalmaz\xe1st.\nerror-javascript-config =\n    A Ruffle komoly probl\xe9m\xe1ba \xfctk\xf6z\xf6tt egy helytelen JavaScript-konfigur\xe1ci\xf3 miatt.\n    Ha a szerver rendszergazd\xe1ja vagy, k\xe9rj\xfck, ellen\u0151rizd a hiba r\xe9szleteit, hogy megtudd, melyik param\xe9ter a hib\xe1s.\n    A Ruffle wikiben is tal\xe1lhatsz ehhez seg\xedts\xe9get.\nerror-wasm-not-found =\n    A Ruffle nem tudta bet\xf6lteni a sz\xfcks\xe9ges ".wasm" \xf6sszetev\u0151t.\n    Ha a szerver rendszergazd\xe1ja vagy, k\xe9rj\xfck ellen\u0151rizd, hogy a f\xe1jl megfelel\u0151en lett-e felt\xf6ltve.\n    Ha a probl\xe9ma tov\xe1bbra is fenn\xe1ll, el\u0151fordulhat, hogy a "publicPath" be\xe1ll\xedt\xe1st kell haszn\xe1lnod: seg\xedts\xe9g\xe9rt keresd fel a Ruffle wikit.\nerror-wasm-mime-type =\n    A Ruffle komoly probl\xe9m\xe1ba \xfctk\xf6z\xf6tt az inicializ\xe1l\xe1s sor\xe1n.\n    Ez a webszerver a ".wasm" f\xe1jlokat nem a megfelel\u0151 MIME-t\xedpussal szolg\xe1lja ki.\n    Ha a szerver rendszergazd\xe1ja vagy, k\xe9rj\xfck, keresd fel a Ruffle wikit seg\xedts\xe9g\xe9rt.\nerror-invalid-swf =\n    A Ruffle nem tudta \xe9rtelmezni a k\xe9rt f\xe1jlt.\n    Ennek a legval\xf3sz\xedn\u0171bb oka az, hogy a k\xe9rt f\xe1jl nem \xe9rv\xe9nyes SWF.\nerror-swf-fetch =\n    A Ruffle nem tudta bet\xf6lteni a Flash SWF f\xe1jlt.\n    A legval\xf3sz\xedn\u0171bb ok az, hogy a f\xe1jl m\xe1r nem l\xe9tezik, \xedgy a Ruffle sz\xe1m\xe1ra nincs mit bet\xf6lteni.\n    Pr\xf3b\xe1ld meg felvenni a kapcsolatot a webhely rendszergazd\xe1j\xe1val seg\xedts\xe9g\xe9rt.\nerror-swf-cors =\n    A Ruffle nem tudta bet\xf6lteni a Flash SWF f\xe1jlt.\n    A lek\xe9r\xe9shez val\xf3 hozz\xe1f\xe9r\xe9st val\xf3sz\xedn\u0171leg letiltotta a CORS-h\xe1zirend.\n    Ha a szerver rendszergazd\xe1ja vagy, k\xe9rj\xfck, keresd fel a Ruffle wikit seg\xedts\xe9g\xe9rt.\nerror-wasm-cors =\n    A Ruffle nem tudta bet\xf6lteni a sz\xfcks\xe9ges ".wasm" \xf6sszetev\u0151t.\n    A lek\xe9r\xe9shez val\xf3 hozz\xe1f\xe9r\xe9st val\xf3sz\xedn\u0171leg letiltotta a CORS-h\xe1zirend.\n    Ha a szerver rendszergazd\xe1ja vagy, k\xe9rj\xfck keresd fel a Ruffle wikit seg\xedts\xe9g\xe9rt.\nerror-wasm-invalid =\n    A Ruffle komoly probl\xe9m\xe1ba \xfctk\xf6z\xf6tt az inicializ\xe1l\xe1s sor\xe1n.\n    \xdagy t\u0171nik, hogy ezen az oldalon hi\xe1nyoznak vagy hib\xe1sak a Ruffle futtat\xe1s\xe1hoz sz\xfcks\xe9ges f\xe1jlok.\n    Ha a szerver rendszergazd\xe1ja vagy, k\xe9rj\xfck keresd fel a Ruffle wikit seg\xedts\xe9g\xe9rt.\nerror-wasm-download =\n    A Ruffle komoly probl\xe9m\xe1ba \xfctk\xf6z\xf6tt az inicializ\xe1l\xe1s sor\xe1n.\n    Ez gyakran mag\xe1t\xf3l megold\xf3dik, ez\xe9rt megpr\xf3b\xe1lhatod \xfajrat\xf6lteni az oldalt.\n    Ellenkez\u0151 esetben fordulj a webhely rendszergazd\xe1j\xe1hoz.\nerror-wasm-disabled-on-edge =\n    A Ruffle nem tudta bet\xf6lteni a sz\xfcks\xe9ges ".wasm" \xf6sszetev\u0151t.\n    A probl\xe9ma megold\xe1s\xe1hoz nyisd meg a b\xf6ng\xe9sz\u0151 be\xe1ll\xedt\xe1sait, kattints az \u201eAdatv\xe9delem, keres\xe9s \xe9s szolg\xe1ltat\xe1sok\u201d elemre, g\xf6rgess le, \xe9s kapcsold ki a \u201eFokozott biztons\xe1g a weben\u201d opci\xf3t.\n    Ez lehet\u0151v\xe9 teszi a b\xf6ng\xe9sz\u0151 sz\xe1m\xe1ra, hogy bet\xf6ltse a sz\xfcks\xe9ges ".wasm" f\xe1jlokat.\n    Ha a probl\xe9ma tov\xe1bbra is fenn\xe1ll, lehet, hogy m\xe1sik b\xf6ng\xe9sz\u0151t kell haszn\xe1lnod.\nerror-javascript-conflict =\n    A Ruffle komoly probl\xe9m\xe1ba \xfctk\xf6z\xf6tt az inicializ\xe1l\xe1s sor\xe1n.\n    \xdagy t\u0171nik, ez az oldal olyan JavaScript-k\xf3dot haszn\xe1l, amely \xfctk\xf6zik a Ruffle-lel.\n    Ha a kiszolg\xe1l\xf3 rendszergazd\xe1ja vagy, k\xe9rj\xfck, pr\xf3b\xe1ld meg a f\xe1jlt egy \xfcres oldalon bet\xf6lteni.\nerror-javascript-conflict-outdated = Megpr\xf3b\xe1lhatod tov\xe1bb\xe1 felt\xf6lteni a Ruffle egy \xfajabb verzi\xf3j\xe1t is, amely megker\xfclheti a probl\xe9m\xe1t (a jelenlegi elavult: { $buildDate }).\nerror-csp-conflict =\n    A Ruffle komoly probl\xe9m\xe1ba \xfctk\xf6z\xf6tt az inicializ\xe1l\xe1s sor\xe1n.\n    A kiszolg\xe1l\xf3 tartalombiztons\xe1gi h\xe1zirendje nem teszi lehet\u0151v\xe9 a sz\xfcks\xe9ges \u201e.wasm\u201d \xf6sszetev\u0151k futtat\xe1s\xe1t.\n    Ha a szerver rendszergazd\xe1ja vagy, k\xe9rj\xfck, keresd fel a Ruffle wikit seg\xedts\xe9g\xe9rt.\nerror-unknown =\n    A Ruffle komoly probl\xe9m\xe1ba \xfctk\xf6z\xf6tt, mik\xf6zben megpr\xf3b\xe1lta megjelen\xedteni ezt a Flash-tartalmat.\n    { $outdated ->\n        [true] Ha a szerver rendszergazd\xe1ja vagy, k\xe9rj\xfck, pr\xf3b\xe1ld meg felt\xf6lteni a Ruffle egy \xfajabb verzi\xf3j\xe1t (a jelenlegi elavult: { $buildDate }).\n       *[false] Ennek nem lett volna szabad megt\xf6rt\xe9nnie, ez\xe9rt nagyon h\xe1l\xe1sak lenn\xe9nk, ha jelezn\xe9d a hib\xe1t!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Biztosan t\xf6r\xf6lni akarod ezt a ment\xe9st?\nsave-reload-prompt =\n    Ennek a ment\xe9snek az esetleges konfliktus n\xe9lk\xfcli { $action ->\n        [delete] t\xf6rl\xe9s\xe9hez\n       *[replace] cser\xe9j\xe9hez\n    } \xfajra kell t\xf6lteni a tartalmat. M\xe9gis szeretn\xe9d folytatni?\nsave-download = Let\xf6lt\xe9s\nsave-replace = Csere\nsave-delete = T\xf6rl\xe9s\nsave-backup-all = Az \xf6sszes f\xe1jl let\xf6lt\xe9se\n",
            "volume-controls.ftl": "volume-controls-mute = N\xe9m\xedt\xe1s\nvolume-controls-unmute = N\xe9m\xedt\xe1s felold\xe1sa\n"
        },
        "id-ID": {
            "context_menu.ftl": "context-menu-download-swf = Unduh .swf\ncontext-menu-copy-debug-info = Salin info debug\ncontext-menu-open-save-manager = Buka Manager Save\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Tentang Ekstensi Ruffle ({ $version })\n       *[other] Tentang Ruffle ({ $version })\n    }\ncontext-menu-hide = Sembunyikan Menu ini\ncontext-menu-exit-fullscreen = Keluar dari layar penuh\ncontext-menu-enter-fullscreen = Masuk mode layar penuh\ncontext-menu-volume-controls = Pengaturan Volume\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.\n    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.\npanic-title = Terjadi kesalahan :(\nmore-info = Info lebih lanjut\nrun-anyway = Jalankan\ncontinue = Lanjutkan\nreport-bug = Laporkan Bug\nupdate-ruffle = Perbarui Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Aplikasi Desktop\nruffle-wiki = Kunjungi Wiki Ruffle\nview-error-details = Tunjukan Detail Error\nopen-in-new-tab = Buka di Tab Baru\nclick-to-unmute = Tekan untuk menyalakan suara\nerror-file-protocol =\n    Sepertinya anda menjalankan Ruffle di protokol "file:". \n    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.\n    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.\nerror-javascript-config =\n    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.\n    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.\n    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-not-found =\n    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.\n    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.\n    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-mime-type =\n    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.\n    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-swf-fetch =\n    Ruffle gagal memuat file SWF Flash.\n    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.\n    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.\nerror-swf-cors =\n    Ruffle gagal memuat file SWF Flash.\n    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-cors =\n    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.\n    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-invalid =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-download =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.\n    Jika tidak, silakan hubungi administrator situs web ini.\nerror-wasm-disabled-on-edge =\n    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.\n    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".\n    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.\n    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.\nerror-javascript-conflict =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.\n    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.\nerror-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).\nerror-csp-conflict =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-unknown =\n    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.\n    { $outdated ->\n        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).\n       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Anda yakin ingin menghapus berkas ini?\nsave-reload-prompt =\n    Satu-satunya cara untuk { $action ->\n        [delete] menghapus\n       *[replace] mengganti\n    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?\nsave-download = Unduh\nsave-replace = Ganti\nsave-delete = Hapus\nsave-backup-all = Unduh semua berkas penyimpanan\n",
            "volume-controls.ftl": "volume-controls-mute = Bisukan\n"
        },
        "it-IT": {
            "context_menu.ftl": "context-menu-download-swf = Scarica .swf\ncontext-menu-copy-debug-info = Copia informazioni di debug\ncontext-menu-open-save-manager = Apri Gestione salvataggi\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Informazioni su Ruffle Extension ({ $version })\n       *[other] Informazioni su Ruffle ({ $version })\n    }\ncontext-menu-hide = Nascondi questo menu\ncontext-menu-exit-fullscreen = Esci dallo schermo intero\ncontext-menu-enter-fullscreen = Entra a schermo intero\ncontext-menu-volume-controls = Controlli volume\n",
            "messages.ftl": "message-cant-embed =\n    Ruffle non \xe8 stato in grado di eseguire il Flash incorporato in questa pagina.\n    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.\npanic-title = Qualcosa \xe8 andato storto :(\nmore-info = Maggiori informazioni\nrun-anyway = Esegui comunque\ncontinue = Continua\nreport-bug = Segnala Un Bug\nupdate-ruffle = Aggiorna Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Applicazione Desktop\nruffle-wiki = Visualizza Ruffle Wiki\nview-error-details = Visualizza Dettagli Errore\nopen-in-new-tab = Apri in una nuova scheda\nclick-to-unmute = Clicca per riattivare l'audio\nerror-file-protocol =\n    Sembra che tu stia eseguendo Ruffle sul protocollo \"file:\".\n    Questo non funziona come browser blocca molte funzionalit\xe0 di lavoro per motivi di sicurezza.\n    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.\nerror-javascript-config =\n    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.\n    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro \xe8 in errore.\n    Puoi anche consultare il wiki Ruffle per aiuto.\nerror-wasm-not-found =\n    Ruffle non \xe8 riuscito a caricare il componente di file \".wasm\".\n    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.\n    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione \"publicPath\": si prega di consultare il wiki Ruffle per aiuto.\nerror-wasm-mime-type =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Questo server web non serve \". asm\" file con il tipo MIME corretto.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.\nerror-swf-fetch =\n    Ruffle non \xe8 riuscito a caricare il file Flash SWF.\n    La ragione pi\xf9 probabile \xe8 che il file non esiste pi\xf9, quindi non c'\xe8 nulla che Ruffle possa caricare.\n    Prova a contattare l'amministratore del sito web per aiuto.\nerror-swf-cors =\n    Ruffle non \xe8 riuscito a caricare il file SWF Flash.\n    L'accesso al recupero probabilmente \xe8 stato bloccato dalla politica CORS.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-cors =\n    Ruffle non \xe8 riuscito a caricare il componente di file \".wasm\".\n    L'accesso al recupero probabilmente \xe8 stato bloccato dalla politica CORS.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-invalid =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-download =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Questo pu\xf2 spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.\n    Altrimenti, contatta l'amministratore del sito.\nerror-wasm-disabled-on-edge =\n    Ruffle non ha caricato il componente di file \".wasm\" richiesto.\n    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su \"Privacy, search, and services\", scorrendo verso il basso e disattivando \"Migliora la tua sicurezza sul web\".\n    Questo permetter\xe0 al tuo browser di caricare i file \".wasm\" richiesti.\n    Se il problema persiste, potresti dover usare un browser diverso.\nerror-javascript-conflict =\n    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.\n    Sembra che questa pagina utilizzi il codice JavaScript che \xe8 in conflitto con Ruffle.\n    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.\nerror-javascript-conflict-outdated = Puoi anche provare a caricare una versione pi\xf9 recente di Ruffle che potrebbe aggirare il problema (l'attuale build \xe8 obsoleta: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.\n    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta\". asm\" componente da eseguire.\n    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.\nerror-unknown =\n    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.\n    { $outdated ->\n        [true] Se sei l'amministratore del server, prova a caricare una versione pi\xf9 recente di Ruffle (la versione attuale \xe8 obsoleta: { $buildDate }).\n       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!\n    }\n",
            "save-manager.ftl": "save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?\nsave-reload-prompt =\n    L'unico modo per { $action ->\n        [delete] delete\n       *[replace] replace\n    } questo salvataggio file senza potenziali conflitti \xe8 quello di ricaricare questo contenuto. Volete continuare comunque?\nsave-download = Scarica\nsave-replace = Sostituisci\nsave-delete = Elimina\nsave-backup-all = Scarica tutti i file di salvataggio\n",
            "volume-controls.ftl": "volume-controls-mute = Silenzia\n"
        },
        "ja-JP": {
            "context_menu.ftl": "context-menu-download-swf = .swf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\ncontext-menu-copy-debug-info = \u30c7\u30d0\u30c3\u30b0\u60c5\u5831\u3092\u30b3\u30d4\u30fc\ncontext-menu-open-save-manager = \u30bb\u30fc\u30d6\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u958b\u304f\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle\u62e1\u5f35\u6a5f\u80fd\u306b\u3064\u3044\u3066 ({ $version })\n       *[other] Ruffle\u306b\u3064\u3044\u3066 ({ $version })\n    }\ncontext-menu-hide = \u30e1\u30cb\u30e5\u30fc\u3092\u96a0\u3059\ncontext-menu-exit-fullscreen = \u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u7d42\u4e86\ncontext-menu-enter-fullscreen = \u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u3059\u308b\ncontext-menu-volume-controls = \u97f3\u91cf\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle\u306f\u3053\u306e\u30da\u30fc\u30b8\u306b\u57cb\u3081\u8fbc\u307e\u308c\u305f Flash \u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n    \u5225\u306e\u30bf\u30d6\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f\u3053\u3068\u3067\u3001\u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3067\u304d\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\npanic-title = \u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f :(\nmore-info = \u8a73\u7d30\u60c5\u5831\nrun-anyway = \u3068\u306b\u304b\u304f\u5b9f\u884c\u3059\u308b\ncontinue = \u7d9a\u884c\nreport-bug = \u30d0\u30b0\u3092\u5831\u544a\nupdate-ruffle = Ruffle\u3092\u66f4\u65b0\nruffle-demo = Web\u30c7\u30e2\nruffle-desktop = \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\nruffle-wiki = Ruffle Wiki\u3092\u8868\u793a\nenable-hardware-acceleration-link = \u3088\u304f\u3042\u308b\u8cea\u554f - Chrome\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2 \u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\nview-error-details = \u30a8\u30e9\u30fc\u306e\u8a73\u7d30\u3092\u8868\u793a\nopen-in-new-tab = \u65b0\u3057\u3044\u30bf\u30d6\u3067\u958b\u304f\nclick-to-unmute = \u30af\u30ea\u30c3\u30af\u3067\u30df\u30e5\u30fc\u30c8\u3092\u89e3\u9664\nclipboard-message-title = \u30b3\u30d4\u30fc\u3057\u3066Ruffle\u306b\u8cbc\u308a\u4ed8\u3051\nerror-file-protocol =\n    Ruffle\u3092"file:"\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002\n    \u30d6\u30e9\u30a6\u30b6\u306f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u304b\u3089\u6b86\u3069\u306e\u6a5f\u80fd\u3092\u5236\u9650\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u6b63\u3057\u304f\u52d5\u4f5c\u3057\u307e\u305b\u3093\u3002\n    \u30ed\u30fc\u30ab\u30eb\u30b5\u30fc\u30d0\u30fc\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u304b\u3001\u30a6\u30a7\u30d6\u30c7\u30e2\u307e\u305f\u306f\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002\nerror-javascript-config =\n    JavaScript\u306e\u8a2d\u5b9a\u304c\u6b63\u3057\u304f\u306a\u3044\u305f\u3081\u3001Ruffle\u3067\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n    \u30b5\u30fc\u30d0\u30fc\u7ba1\u7406\u8005\u306e\u65b9\u306f\u3001\u30a8\u30e9\u30fc\u306e\u8a73\u7d30\u304b\u3089\u3001\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306b\u554f\u984c\u304c\u3042\u308b\u306e\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n    Ruffle\u306ewiki\u3092\u53c2\u7167\u3059\u308b\u3053\u3068\u3067\u3001\u89e3\u6c7a\u65b9\u6cd5\u304c\u898b\u3064\u304b\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\nerror-wasm-not-found =\n    Ruffle\u306e\u521d\u671f\u5316\u6642\u306b\u91cd\u5927\u306a\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n    \u3053\u306eWeb\u30b5\u30fc\u30d0\u30fc\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u304c\u3001\u5b9f\u884c\u306b\u5fc5\u8981\u3068\u306a\u308b\u300c.wasm\u300d\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5b9f\u884c\u3092\u8a31\u53ef\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406\u8005\u306e\u5834\u5408\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u6b63\u3057\u304f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u554f\u984c\u304c\u89e3\u6c7a\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u300cpublicPath\u300d\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n    \u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406\u8005\u306f\u3001Ruffle\u306ewiki\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nerror-wasm-mime-type =\n    Ruffle\u306e\u521d\u671f\u5316\u306b\u5931\u6557\u3059\u308b\u5927\u304d\u306a\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n    \u3053\u306eWeb\u30b5\u30fc\u30d0\u30fc\u306f\u6b63\u3057\u3044MIME\u30bf\u30a4\u30d7\u306e\u300c.wasm\u300d\u30d5\u30a1\u30a4\u30eb\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n    \u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406\u8005\u306f\u3001Ruffle\u306ewiki\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nerror-invalid-swf =\n    Ruffle \u306f\u8981\u6c42\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u89e3\u6790\u3067\u304d\u307e\u305b\u3093\u3002\n    \u6700\u3082\u8003\u3048\u3089\u308c\u308b\u539f\u56e0\u306f\u3001\u8981\u6c42\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u304c\u6709\u52b9\u306a SWF \u3067\u306a\u3044\u3053\u3068\u3067\u3059\u3002\nerror-swf-fetch =\n    Ruffle\u304cFlash SWF\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\n    \u6700\u3082\u8003\u3048\u3089\u308c\u308b\u539f\u56e0\u306f\u3001SWF\u30d5\u30a1\u30a4\u30eb\u304c\u65e2\u306b\u5b58\u5728\u3057\u306a\u3044\u4e8b\u3067Ruffle\u304c\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3059\u308b\u3068\u3044\u3046\u554f\u984c\u3067\u3059\u3002\n    Web\u30b5\u30a4\u30c8\u306e\u7ba1\u7406\u8005\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\nerror-swf-cors =\n    Ruffle\u306fSWF\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\n    CORS\u30dd\u30ea\u30b7\u30fc\u306e\u8a2d\u5b9a\u306b\u3088\u308a\u3001fetch\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n    \u30b5\u30fc\u30d0\u30fc\u7ba1\u7406\u8005\u306e\u65b9\u306f\u3001Ruffle\u306ewiki\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nerror-wasm-cors =\n    Ruffle\u306b\u5fc5\u8981\u3068\u306a\u308b\u300c.wasm\u300d\u30d5\u30a1\u30a4\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\n    CORS\u30dd\u30ea\u30b7\u30fc\u306b\u3088\u3063\u3066fetch\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n    \u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406\u8005\u306f\u3001Ruffle wiki\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nerror-wasm-invalid =\n    Ruffle\u306e\u521d\u671f\u5316\u6642\u306b\u91cd\u5927\u306a\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n    \u3053\u306e\u30da\u30fc\u30b8\u306b\u306fRuffle\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u306a\u3044\u304b\u3001\u7121\u52b9\u306a\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\n    \u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406\u8005\u306f\u3001Ruffle\u306ewiki\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nerror-wasm-download =\n    Ruffle\u306e\u521d\u671f\u5316\u6642\u306b\u91cd\u5927\u306a\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n    \u3053\u306e\u554f\u984c\u306f\u30da\u30fc\u30b8\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3059\u308b\u4e8b\u3067\u5927\u62b5\u306f\u89e3\u6c7a\u3059\u308b\u306f\u305a\u306a\u306e\u3067\u884c\u306a\u3063\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\n    \u3082\u3057\u3082\u89e3\u6c7a\u3057\u306a\u3044\u5834\u5408\u306f\u3001Web\u30b5\u30a4\u30c8\u306e\u7ba1\u7406\u8005\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\nerror-wasm-disabled-on-edge =\n    Ruffle\u306b\u5fc5\u8981\u3068\u306a\u308b\u300c.wasm\u300d\u30d5\u30a1\u30a4\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\n    \u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u306b\u306f\u30d6\u30e9\u30a6\u30b6\u30fc\u306e\u8a2d\u5b9a\u3092\u958b\u304d\u3001\u300c\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u3001\u691c\u7d22\u3001\u30b5\u30fc\u30d3\u30b9\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u4e0b\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3067\u300cWeb\u4e0a\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u5f37\u5316\u3059\u308b\u300d\u3092\u30aa\u30d5\u306b\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\n    \u3053\u308c\u3067\u5fc5\u8981\u3068\u306a\u308b\u300c.wasm\u300d\u30d5\u30a1\u30a4\u30eb\u304c\u8aad\u307f\u8fbc\u307e\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n    \u305d\u308c\u3067\u3082\u554f\u984c\u304c\u89e3\u6c7a\u3057\u306a\u3044\u5834\u5408\u3001\u5225\u306e\u30d6\u30e9\u30a6\u30b6\u30fc\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\nerror-javascript-conflict =\n    Ruffle\u306e\u521d\u671f\u5316\u6642\u306b\u91cd\u5927\u306a\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n    \u3053\u306e\u30da\u30fc\u30b8\u3067\u306fRuffle\u3068\u7af6\u5408\u3059\u308bJavaScript\u30b3\u30fc\u30c9\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\n    \u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406\u8005\u306f\u3001\u7a7a\u767d\u306e\u30da\u30fc\u30b8\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u3057\u76f4\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\nerror-javascript-conflict-outdated = \u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306eRuffle\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3001\u3053\u306e\u554f\u984c\u3092\u56de\u907f\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002(\u73fe\u5728\u306e\u30d3\u30eb\u30c9\u306f\u53e4\u3044\u7269\u3067\u3059:{ $buildDate })\nerror-csp-conflict =\n    Ruffle\u306e\u521d\u671f\u5316\u6642\u306b\u91cd\u5927\u306a\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n    \u3053\u306eWeb\u30b5\u30fc\u30d0\u30fc\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u304c\u5b9f\u884c\u306b\u5fc5\u8981\u3068\u306a\u308b\u300c.wasm\u300d\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5b9f\u884c\u3092\u8a31\u53ef\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n    \u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406\u8005\u306f\u3001Ruffle\u306ewiki\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nerror-unknown =\n    Flash\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3059\u308b\u969b\u306bRuffle\u3067\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n    { $outdated ->\n        [true] \u73fe\u5728\u4f7f\u7528\u3057\u3066\u3044\u308b\u30d3\u30eb\u30c9\u306f\u6700\u65b0\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406\u8005\u306e\u65b9\u306f\u3001\u6700\u65b0\u7248\u306eRuffle\u306b\u66f4\u65b0\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044(\u73fe\u5728\u5229\u7528\u4e2d\u306e\u30d3\u30eb\u30c9: { $buildDate })\u3002\n       *[false] \u60f3\u5b9a\u5916\u306e\u554f\u984c\u306a\u306e\u3067\u3001\u30d0\u30b0\u3068\u3057\u3066\u5831\u544a\u3057\u3066\u3044\u305f\u3060\u3051\u308b\u3068\u5b09\u3057\u3044\u3067\u3059!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \u3053\u306e\u30bb\u30fc\u30d6\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b?\nsave-reload-prompt =\n    \u30bb\u30fc\u30d6\u30d5\u30a1\u30a4\u30eb\u3092\u7af6\u5408\u306e\u53ef\u80fd\u6027\u306a\u304f { $action ->\n        [delete] \u524a\u9664\u3059\u308b\n       *[replace] \u7f6e\u304d\u63db\u3048\u308b\n    } \u305f\u3081\u306b\u3001\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002\u7d9a\u884c\u3057\u307e\u3059\u304b\uff1f\nsave-download = \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\nsave-replace = \u7f6e\u304d\u63db\u3048\nsave-delete = \u524a\u9664\nsave-backup-all = \u3059\u3079\u3066\u306e\u30bb\u30fc\u30d6\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\n",
            "volume-controls.ftl": "volume-controls-mute = \u6d88\u97f3\n"
        },
        "ko-KR": {
            "context_menu.ftl": "context-menu-download-swf = .swf \ub2e4\uc6b4\ub85c\ub4dc\ncontext-menu-copy-debug-info = \ub514\ubc84\uadf8 \uc815\ubcf4 \ubcf5\uc0ac\ncontext-menu-open-save-manager = \uc800\uc7a5 \uad00\ub9ac\uc790 \uc5f4\uae30\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8 \uc815\ubcf4 ({ $version })\n       *[other] Ruffle \uc815\ubcf4 ({ $version })\n    }\ncontext-menu-hide = \uc774 \uba54\ub274 \uc228\uae30\uae30\ncontext-menu-exit-fullscreen = \uc804\uccb4\ud654\uba74 \ub098\uac00\uae30\ncontext-menu-enter-fullscreen = \uc804\uccb4\ud654\uba74\uc73c\ub85c \uc5f4\uae30\ncontext-menu-volume-controls = \uc74c\ub7c9 \uc870\uc808\n",
            "messages.ftl": 'message-cant-embed = Ruffle\uc774 \uc774 \ud398\uc774\uc9c0\uc5d0 \ud3ec\ud568\ub41c \ud50c\ub798\uc2dc\ub97c \uc2e4\ud589\ud560 \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4. \ubcc4\ub3c4\uc758 \ud0ed\uc5d0\uc11c \ud30c\uc77c\uc744 \uc5f4\uc5b4\ubd04\uc73c\ub85c\uc11c \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\npanic-title = \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4 :(\nmore-info = \ucd94\uac00 \uc815\ubcf4\nrun-anyway = \uadf8\ub798\ub3c4 \uc2e4\ud589\ud558\uae30\ncontinue = \uacc4\uc18d\ud558\uae30\nreport-bug = \ubc84\uadf8 \uc81c\ubcf4\nupdate-ruffle = Ruffle \uc5c5\ub370\uc774\ud2b8\nruffle-demo = \uc6f9 \ub370\ubaa8\nruffle-desktop = \ub370\uc2a4\ud06c\ud1b1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\nruffle-wiki = Ruffle \uc704\ud0a4 \ubcf4\uae30\nenable-hardware-acceleration = \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uc774 \ube44\ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4. Ruffle\uc740 \uacc4\uc18d \uc791\ub3d9\ud558\uc9c0\ub9cc \ub9e4\uc6b0 \ub290\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \ub9c1\ud06c\ub97c \ucc38\uace0\ud558\uc5ec \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uc744 \ud65c\uc131\ud654\ud558\ub294 \ubc29\ubc95\uc744 \ucc3e\uc544\ubcf4\uc138\uc694:\nenable-hardware-acceleration-link = FAQ - \ud06c\ub86c \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\nview-error-details = \uc624\ub958 \uc138\ubd80 \uc815\ubcf4 \ubcf4\uae30\nopen-in-new-tab = \uc0c8 \ud0ed\uc5d0\uc11c \uc5f4\uae30\nclick-to-unmute = \ud074\ub9ad\ud558\uc5ec \uc74c\uc18c\uac70 \ud574\uc81c\nclipboard-message-title = Ruffle\uc5d0\uc11c \ubcf5\uc0ac\ud558\uace0 \ubd99\uc5ec\ub123\uae30\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] \uc774 \ube0c\ub77c\uc6b0\uc800\ub294 \ud074\ub9bd\ubcf4\ub4dc \uc561\uc138\uc2a4\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4,\n        [access-denied] \ud074\ub9bd\ubcf4\ub4dc \uc561\uc138\uc2a4\uac00 \uac70\uc808\ub418\uc5c8\uc2b5\ub2c8\ub2e4,\n    } \ud558\uc9c0\ub9cc \ub2e4\uc74c \ub2e8\ucd95\ud0a4\ub97c \ub300\uc2e0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:\nclipboard-message-copy = { " " } \ubcf5\uc0ac\nclipboard-message-cut = { " " } \uc798\ub77c\ub0b4\uae30\nclipboard-message-paste = { " " } \ubd99\uc5ec\ub123\uae30\nerror-file-protocol =\n    Ruffle\uc744 "file:" \ud504\ub85c\ud1a0\ucf5c\uc5d0\uc11c \uc2e4\ud589\ud558\uace0 \uc788\ub294 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4.\n    \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub294 \uc774 \ud504\ub85c\ud1a0\ucf5c\uc744 \ubcf4\uc548\uc0c1\uc758 \uc774\uc720\ub85c \ub9ce\uc740 \uae30\ub2a5\uc744 \uc791\ub3d9\ud558\uc9c0 \uc54a\uac8c \ucc28\ub2e8\ud558\ubbc0\ub85c \uc774 \ubc29\ubc95\uc740 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n    \ub300\uc2e0, \ub85c\uceec \uc11c\ubc84\ub97c \uc9c1\uc811 \uc5f4\uc5b4\uc11c \uc124\uc815\ud558\uac70\ub098 \uc6f9 \ub370\ubaa8 \ub610\ub294 \ub370\uc2a4\ud06c\ud1b1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\nerror-javascript-config =\n    \uc798\ubabb\ub41c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc124\uc815\uc73c\ub85c \uc778\ud574 Ruffle\uc5d0\uc11c \uc911\ub300\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n    \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\uc778 \uacbd\uc6b0, \uc624\ub958 \uc138\ubd80\uc0ac\ud56d\uc744 \ud655\uc778\ud558\uc5ec \uc5b4\ub5a4 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc798\ubabb\ub418\uc5c8\ub294\uc9c0 \uc54c\uc544\ubcf4\uc138\uc694.\n    \ub610\ub294 Ruffle \uc704\ud0a4\ub97c \ud1b5\ud574 \ub3c4\uc6c0\uc744 \ubc1b\uc544 \ubcfc \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\nerror-wasm-not-found =\n    Ruffle\uc774 ".wasm" \ud544\uc218 \ud30c\uc77c \uad6c\uc131\uc694\uc18c\ub97c \ub85c\ub4dc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n    \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\ub77c\uba74 \ud30c\uc77c\uc774 \uc62c\ubc14\ub974\uac8c \uc5c5\ub85c\ub4dc\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.\n    \ubb38\uc81c\uac00 \uc9c0\uc18d\ub41c\ub2e4\uba74 "publicPath" \uc635\uc158\uc744 \uc0ac\uc6a9\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4: Ruffle \uc704\ud0a4\ub97c \ucc38\uc870\ud558\uc5ec \ub3c4\uc6c0\uc744 \ubc1b\uc73c\uc138\uc694.\nerror-wasm-mime-type =\n    Ruffle\uc774 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud558\ub294 \ub3d9\uc548 \uc911\ub300\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n    \uc774 \uc6f9 \uc11c\ubc84\ub294 \uc62c\ubc14\ub978 MIME \uc720\ud615\uc758 ".wasm" \ud30c\uc77c\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n    \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\ub77c\uba74 Ruffle \uc704\ud0a4\ub97c \ud1b5\ud574 \ub3c4\uc6c0\uc744 \ubc1b\uc73c\uc138\uc694.\nerror-invalid-swf =\n    Ruffle\uc774 \uc694\uccad\ud55c \ud30c\uc77c\uc744 \ubd84\uc11d\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n    \uc694\uccad\ud55c \ud30c\uc77c\uc774 \uc720\ud6a8\ud55c SWF \ud30c\uc77c\uc774 \uc544\ub2d0 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4.\nerror-swf-fetch =\n    Ruffle\uc774 \ud50c\ub798\uc2dc SWF \ud30c\uc77c\uc744 \ub85c\ub4dc\ud558\ub294 \ub370 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.\n    \uc774\ub294 \uc8fc\ub85c \ud30c\uc77c\uc774 \ub354 \uc774\uc0c1 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc544 Ruffle\uc774 \ub85c\ub4dc\ud560 \uc218 \uc788\ub294 \uac83\uc774 \uc5c6\uc744 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4.\n    \uc6f9\uc0ac\uc774\ud2b8 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud558\uc5ec \ub3c4\uc6c0\uc744 \ubc1b\uc544\ubcf4\uc138\uc694.\nerror-swf-cors =\n    Ruffle\uc774 \ud50c\ub798\uc2dc SWF \ud30c\uc77c\uc744 \ub85c\ub4dc\ud558\ub294 \ub370 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.\n    CORS \uc815\ucc45\uc5d0 \uc758\ud574 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\uac00 \ucc28\ub2e8\ub418\uc5c8\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n    \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\ub77c\uba74 Ruffle \uc704\ud0a4\ub97c \ucc38\uc870\ud558\uc5ec \ub3c4\uc6c0\uc744 \ubc1b\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nerror-wasm-cors =\n    Ruffle\uc774 ".wasm" \ud544\uc218 \ud30c\uc77c \uad6c\uc131\uc694\uc18c\ub97c \ub85c\ub4dc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n    CORS \uc815\ucc45\uc5d0 \uc758\ud574 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\uac00 \ucc28\ub2e8\ub418\uc5c8\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n    \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\ub77c\uba74 Ruffle \uc704\ud0a4\ub97c \ucc38\uc870\ud558\uc5ec \ub3c4\uc6c0\uc744 \ubc1b\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nerror-wasm-invalid =\n    Ruffle\uc774 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud558\ub294 \ub3d9\uc548 \uc911\ub300\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n    \uc774 \ud398\uc774\uc9c0\uc5d0 Ruffle\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud55c \ud30c\uc77c\uc774 \ub204\ub77d\ub418\uc5c8\uac70\ub098 \uc798\ubabb\ub41c \uac83 \uac19\uc2b5\ub2c8\ub2e4.\n    \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\ub77c\uba74 Ruffle \uc704\ud0a4\ub97c \ucc38\uc870\ud558\uc5ec \ub3c4\uc6c0\uc744 \ubc1b\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nerror-wasm-download =\n    Ruffle\uc774 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud558\ub294 \ub3d9\uc548 \uc911\ub300\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n    \uc774 \ubb38\uc81c\ub294 \ub54c\ub54c\ub85c \ubc14\ub85c \ud574\uacb0\ub420 \uc218 \uc788\uc73c\ubbc0\ub85c \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68\ud558\uc5ec \ub2e4\uc2dc \uc2dc\ub3c4\ud574\ubcf4\uc138\uc694.\n    \uadf8\ub798\ub3c4 \ubb38\uc81c\uac00 \uc9c0\uc18d\ub41c\ub2e4\uba74, \uc6f9\uc0ac\uc774\ud2b8 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694.\nerror-wasm-disabled-on-edge =\n    Ruffle\uc774 ".wasm" \ud544\uc218 \ud30c\uc77c \uad6c\uc131\uc694\uc18c\ub97c \ub85c\ub4dc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n    \uc774\ub97c \ud574\uacb0\ud558\ub824\uba74 \ube0c\ub77c\uc6b0\uc800 \uc124\uc815\uc5d0\uc11c "\uac1c\uc778 \uc815\ubcf4, \uac80\uc0c9 \ubc0f \uc11c\ube44\uc2a4"\ub97c \ud074\ub9ad\ud55c \ud6c4, \ud558\ub2e8\uc73c\ub85c \uc2a4\ud06c\ub864\ud558\uc5ec "\uc6f9\uc5d0\uc11c \ubcf4\uc548 \uac15\ud654" \uae30\ub2a5\uc744 \uaebc\uc57c \ud569\ub2c8\ub2e4.\n    \uc774\ub294 \ud544\uc694\ud55c ".wasm" \ud30c\uc77c\uc744 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \ud5c8\uc6a9\ud569\ub2c8\ub2e4.\n    \uc774 \ubb38\uc81c\uac00 \uc9c0\uc18d\ub420 \uacbd\uc6b0 \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud574\uc57c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nerror-javascript-conflict =\n    Ruffle\uc774 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud558\ub294 \ub3d9\uc548 \uc911\ub300\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n    \uc774 \ud398\uc774\uc9c0\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uac00 Ruffle\uacfc \ucda9\ub3cc\ud558\ub294 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4.\n    \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\ub77c\uba74 \ube48 \ud398\uc774\uc9c0\uc5d0\uc11c \ud30c\uc77c\uc744 \ub85c\ub4dc\ud574\ubcf4\uc138\uc694.\nerror-javascript-conflict-outdated = \ub610\ud55c Ruffle\uc758 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc5c5\ub85c\ub4dc\ud558\ub294 \uac83\uc744 \uc2dc\ub3c4\ud558\uc5ec \ubb38\uc81c\ub97c \uc6b0\ud68c\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\ud604\uc7ac \ube4c\ub4dc\uac00 \uc624\ub798\ub418\uc5c8\uc2b5\ub2c8\ub2e4: { $buildDate }).\nerror-csp-conflict =\n    Ruffle\uc774 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud558\ub294 \ub3d9\uc548 \uc911\ub300\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n    \uc774 \uc6f9 \uc11c\ubc84\uc758 CSP(Content Security Policy) \uc815\ucc45\uc774 ".wasm" \ud544\uc218 \uad6c\uc131\uc694\uc18c\ub97c \uc2e4\ud589\ud558\ub294 \uac83\uc744 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n    \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\ub77c\uba74 Ruffle \uc704\ud0a4\ub97c \ucc38\uc870\ud558\uc5ec \ub3c4\uc6c0\uc744 \ubc1b\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nerror-unknown =\n    Ruffle\uc774 \ud50c\ub798\uc2dc \ucf58\ud150\uce20\ub97c \ud45c\uc2dc\ud558\ub824\uace0 \uc2dc\ub3c4\ud558\ub294 \ub3d9\uc548 \uc911\ub300\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n    { $outdated ->\n        [true] \ub9cc\uc57d \ub2f9\uc2e0\uc774 \uc11c\ubc84 \uad00\ub9ac\uc790\ub77c\uba74, Ruffle\uc758 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc5c5\ub85c\ub4dc\ud558\uc5ec \ub2e4\uc2dc \uc2dc\ub3c4\ud574\ubcf4\uc138\uc694. (\ud604\uc7ac \ube4c\ub4dc\uac00 \uc624\ub798\ub418\uc5c8\uc2b5\ub2c8\ub2e4: { $buildDate }).\n       *[false] \uc774\ub7f0 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud574\uc11c\ub294 \uc548\ub418\ubbc0\ub85c, \ubc84\uadf8\ub97c \uc81c\ubcf4\ud574\uc8fc\uc2e0\ub2e4\uba74 \uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \uc815\ub9d0\ub85c \uc774 \uc138\uc774\ube0c \ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\nsave-reload-prompt =\n    \b\uc774 \ud30c\uc77c\uc744 \uc7a0\uc7ac\uc801\uc778 \ucda9\ub3cc \uc5c6\uc774 { $action ->\n        [delete] \uc0ad\uc81c\n       *[replace] \uad50\uccb4\n    }\ud558\ub824\uba74 \ucf58\ud150\uce20\ub97c \ub2e4\uc2dc \ub85c\ub4dc\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub798\ub3c4 \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\nsave-download = \ub2e4\uc6b4\ub85c\ub4dc\nsave-replace = \uad50\uccb4\nsave-delete = \uc0ad\uc81c\nsave-backup-all = \ubaa8\ub4e0 \uc800\uc7a5 \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc\n",
            "volume-controls.ftl": "volume-controls-mute = \uc74c\uc18c\uac70\nvolume-controls-unmute = \uc74c\uc18c\uac70 \ud574\uc81c\n"
        },
        "nl-NL": {
            "context_menu.ftl": "context-menu-download-swf = .swf downloaden\ncontext-menu-copy-debug-info = Kopieer debuginformatie\ncontext-menu-open-save-manager = Open opgeslagen-data-manager\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Over Ruffle Uitbreiding ({ $version })\n       *[other] Over Ruffle ({ $version })\n    }\ncontext-menu-hide = Verberg dit menu\ncontext-menu-exit-fullscreen = Verlaat volledig scherm\ncontext-menu-enter-fullscreen = Naar volledig scherm\ncontext-menu-volume-controls = Geluidsniveaus\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle kon de Flash-inhoud op de pagina niet draaien.\n    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.\npanic-title = Er ging iets mis :(\nmore-info = Meer informatie\nrun-anyway = Toch starten\ncontinue = Doorgaan\nreport-bug = Bug rapporteren\nupdate-ruffle = Ruffle updaten\nruffle-demo = Web Demo\nruffle-desktop = Desktopapplicatie\nruffle-wiki = Bekijk de Ruffle Wiki\nview-error-details = Foutdetails tonen\nopen-in-new-tab = Openen in een nieuw tabblad\nclick-to-unmute = Klik om te ontdempen\nerror-file-protocol =\n    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.\n    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.\n    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.\nerror-javascript-config =\n    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.\n    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.\n    Je kan ook in de Ruffle wiki kijken voor hulp.\nerror-wasm-not-found =\n    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.\n    Als je de serverbeheerder bent, controleer dan of het bestaand juist is ge\xfcpload.\n    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.\nerror-wasm-mime-type =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-invalid-swf =\n    Ruffle kon het gevraagde bestand niet verwerken.\n    Waarschijnlijk is het geen geldig SWF bestand.\nerror-swf-fetch =\n    Ruffle kon het Flash SWF bestand niet inladen.\n    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.\n    Probeer contact op te nemen met de websitebeheerder voor hulp.\nerror-swf-cors =\n    Ruffle kon het Flash SWD bestand niet inladen.\n    Toegang is waarschijnlijk geblokeerd door het CORS beleid.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-cors =\n    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.\n    Toegang is waarschijnlijk geblokeerd door het CORS beleid.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-invalid =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-download =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.\n    Zo niet, neem dan contact op met de websitebeheerder.\nerror-wasm-disabled-on-edge =\n    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.\n    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.\n    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.\n    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.\nerror-javascript-conflict =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.\n    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.\nerror-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).\nerror-csp-conflict =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-unknown =\n    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.\n    { $outdated ->\n        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).\n       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?\nsave-reload-prompt =\n    De enige manier om deze opgeslagen data te { $action ->\n        [delete] verwijderen\n       *[replace] vervangen\n    } zonder potenti\xeble problemen is door de inhoud opnieuw te laden. Toch doorgaan?\nsave-download = Downloaden\nsave-replace = Vervangen\nsave-delete = Verwijderen\nsave-backup-all = Download alle opgeslagen data\n",
            "volume-controls.ftl": "volume-controls-mute = Dempen\n"
        },
        "pl-PL": {
            "context_menu.ftl": "context-menu-download-swf = Pobierz .swf\ncontext-menu-copy-debug-info = Kopiuj informacje debugowania\ncontext-menu-open-save-manager = Otw\xf3rz Menad\u017cer Zapis\xf3w\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] O Rozszerzeniu Ruffle ({ $version })\n       *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Ukryj to menu\ncontext-menu-exit-fullscreen = Zamknij pe\u0142ny ekran\ncontext-menu-enter-fullscreen = Pe\u0142ny ekran\ncontext-menu-volume-controls = Sterowanie g\u0142o\u015bno\u015bci\u0105\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle nie by\u0142o w stanie uruchomi\u0107 zawarto\u015bci Flash w tej stronie.\n    Mo\u017cesz spr\xf3bowa\u0107 otworzy\u0107 plik w nowej karcie, aby unikn\u0105\u0107 tego problemu.\npanic-title = Co\u015b posz\u0142o nie tak :(\nmore-info = Wi\u0119cej informacji\nrun-anyway = Uruchom mimo tego\ncontinue = Kontynuuj\nreport-bug = Zg\u0142o\u015b b\u0142\u0105d\nupdate-ruffle = Zaktualizuj Ruffle\nruffle-demo = Webowe demo\nruffle-desktop = Aplikacja na komputer\nruffle-wiki = Zobacz Wiki Ruffle\nenable-hardware-acceleration = Wygl\u0105da na to, \u017ce akceleracja grafiki jest wy\u0142\u0105czona. Chocia\u017c Ruffle mo\u017ce dzia\u0142a\u0107, mo\u017ce by\u0107 bardzo powolny. Mo\u017cesz dowiedzie\u0107 si\u0119, jak w\u0142\u0105czy\u0107 akceleracj\u0119 grafiki, klikaj\u0105c poni\u017cszy link:\nenable-hardware-acceleration-link = FAQ \u2014 Akceleracja Grafiki Chrome\nview-error-details = Zobacz szczeg\xf3\u0142y b\u0142\u0119du\nopen-in-new-tab = Otw\xf3rz w nowej karcie\nclick-to-unmute = Kliknij aby wy\u0142\u0105czy\u0107 wyciszenie\nclipboard-message-title = Kopiowanie i wklejanie w Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] Twoja przegl\u0105darka nie obs\u0142uguje pe\u0142nego dost\u0119pu do schowka,\n        [access-denied] Odm\xf3wiono dost\u0119pu do schowka,\n    } ale zawsze mo\u017cesz stosowa\u0107 te skr\xf3ty klawiszowe:\nclipboard-message-copy = { " " } w celu skopiowania\nclipboard-message-cut = { " " } w celu wyci\u0119cia\nclipboard-message-paste = { " " } w celu wklejenia\nerror-file-protocol =\n    Wygl\u0105da na to, \u017ce u\u017cywasz Ruffle z protoko\u0142em "file:".\n    To nie dzia\u0142a, poniewa\u017c przegl\u0105darka blokuje wiele funkcji przed dzia\u0142aniem ze wzgl\u0119d\xf3w bezpiecze\u0144stwa.\n    Zamiast tego zach\u0119camy do konfiguracji lokalnego serwera lub u\u017cycia webowego demo lub aplikacji desktopowej.\nerror-javascript-config =\n    Ruffle napotka\u0142 powa\u017cny problem z powodu nieprawid\u0142owej konfiguracji JavaScript.\n    Je\u015bli jeste\u015b administratorem serwera, prosimy o sprawdzenie szczeg\xf3\u0142\xf3w b\u0142\u0119du, aby dowiedzie\u0107 si\u0119, kt\xf3ry parametr jest b\u0142\u0119dny.\n    Mo\u017cesz r\xf3wnie\u017c zapozna\u0107 si\u0119 z wiki Ruffle, aby uzyska\u0107 pomoc.\nerror-wasm-not-found =\n    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".\n    Je\u015bli jeste\u015b administratorem serwera, upewnij si\u0119, \u017ce plik zosta\u0142 poprawnie przes\u0142any.\n    Je\u015bli problem b\u0119dzie si\u0119 powtarza\u0142, by\u0107 mo\u017ce b\u0119dziesz musia\u0142 u\u017cy\u0107 ustawienia "publicPath": zapoznaj si\u0119 z wiki Ruffle, aby uzyska\u0107 pomoc.\nerror-wasm-mime-type =\n    Ruffle napotka\u0142 powa\u017cny problem podczas pr\xf3by zainicjowania.\n    Ten serwer nie serwuje plik\xf3w ".wasm" z poprawnym typem MIME.\n    Je\u015bli jeste\u015b administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.\nerror-invalid-swf =\n    Ruffle nie mo\u017ce przetworzy\u0107 \u017c\u0105danego pliku.\n    Prawdopodobnie to nie jest poprawny plik SWF.\nerror-swf-fetch =\n    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 pliku Flash SWF.\n    Najbardziej prawdopodobnym powodem jest to, \u017ce plik ju\u017c nie istnieje, wi\u0119c Ruffle nie ma co za\u0142adowa\u0107.\n    Spr\xf3buj skontaktowa\u0107 si\u0119 z administratorem witryny, aby uzyska\u0107 pomoc.\nerror-swf-cors =\n    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 pliku Flash SWF.\n    Pobieranie zosta\u0142o prawdopodobnie zablokowane przez polityk\u0119 CORS.\n    Je\u015bli jeste\u015b administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.\nerror-wasm-cors =\n    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".\n    Pobieranie zosta\u0142o prawdopodobnie zablokowane przez polityk\u0119 CORS.\n    Je\u015bli jeste\u015b administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.\nerror-wasm-invalid =\n    Ruffle napotka\u0142 powa\u017cny problem podczas pr\xf3by zainicjowania.\n    Wygl\u0105da na to, \u017ce ta strona ma brakuj\u0105ce lub nieprawid\u0142owe pliki niezb\u0119dne do uruchomienia Ruffle.\n    Je\u015bli jeste\u015b administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.\nerror-wasm-download =\n    Ruffle napotka\u0142 powa\u017cny problem podczas pr\xf3by zainicjowania.\n    Ten problem cz\u0119sto sam si\u0119 rozwi\u0105zuje, wi\u0119c mo\u017cesz spr\xf3bowa\u0107 od\u015bwie\u017cy\u0107 stron\u0119.\n    W przeciwnym razie skontaktuj si\u0119 z administratorem witryny.\nerror-wasm-disabled-on-edge =\n    Ruffle nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".\n    Aby to naprawi\u0107, spr\xf3buj otworzy\u0107 ustawienia przegl\u0105darki, klikaj\u0105c "Prywatno\u015b\u0107, wyszukiwanie i us\u0142ugi", przewijaj\u0105c w d\xf3\u0142 i wy\u0142\u0105czaj\u0105c "Zwi\u0119ksz bezpiecze\u0144stwo w sieci".\n    Pozwoli to przegl\u0105darce za\u0142adowa\u0107 wymagane pliki ".wasm".\n    Je\u015bli problem b\u0119dzie si\u0119 powtarza\u0142, by\u0107 mo\u017ce b\u0119dziesz musia\u0142 u\u017cy\u0107 innej przegl\u0105darki.\nerror-javascript-conflict =\n    Ruffle napotka\u0142 powa\u017cny problem podczas pr\xf3by zainicjowania.\n    Wygl\u0105da na to, \u017ce ta strona u\u017cywa kodu JavaScript, kt\xf3ry koliduje z Ruffle.\n    Je\u015bli jeste\u015b administratorem serwera, zapraszamy Ci\u0119 do \u0142adowania pliku na pustej stronie.\nerror-javascript-conflict-outdated = Mo\u017cesz r\xf3wnie\u017c spr\xf3bowa\u0107 przes\u0142a\u0107 nowsz\u0105 wersj\u0119 Ruffle, kt\xf3ra mo\u017ce omin\u0105\u0107 problem (obecna wersja jest przestarza\u0142a: { $buildDate }).\nerror-csp-conflict =\n    Ruffle napotka\u0142 powa\u017cny problem podczas pr\xf3by zainicjowania.\n    Polityka bezpiecze\u0144stwa zawarto\u015bci tego serwera (CSP) nie zezwala na komponent ".wasm" wymagany do uruchomienia.\n    Je\u015bli jeste\u015b administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.\nerror-unknown =\n    Ruffle napotka\u0142 powa\u017cny problem podczas pr\xf3by wy\u015bwietlenia tej zawarto\u015bci Flash.\n    { $outdated ->\n        [true] Je\u015bli jeste\u015b administratorem serwera, spr\xf3buj zaktualizowa\u0107 Ruffle (obecna wersja jest przestarza\u0142a: { $buildDate }).\n       *[false] To nie powinno si\u0119 wydarzy\u0107, wi\u0119c byliby\u015bmy wdzi\u0119czni, gdyby\u015b zg\u0142osi\u0142 b\u0142\u0105d!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Czy na pewno chcesz skasowa\u0107 ten plik zapisu?\nsave-reload-prompt =\n    Jedyn\u0105 opcj\u0105, aby { $action ->\n        [delete] usun\u0105\u0107\n       *[replace] zamieni\u0107\n    } ten plik zapisu bez potencjalnych konflikt\xf3w jest prze\u0142adowanie zawarto\u015bci. Czy chcesz kontynuowa\u0107?\nsave-download = Pobierz\nsave-replace = Zamie\u0144\nsave-delete = Usu\u0144\nsave-backup-all = Pobierz wszystkie pliki zapisu\n",
            "volume-controls.ftl": "volume-controls-mute = Wycisz\nvolume-controls-unmute = Wy\u0142\u0105cz wyciszenie\n"
        },
        "pt-BR": {
            "context_menu.ftl": "context-menu-download-swf = Baixar .swf\ncontext-menu-copy-debug-info = Copiar informa\xe7\xe3o de depura\xe7\xe3o\ncontext-menu-open-save-manager = Abrir o Gerenciador de Salvamento\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre a extens\xe3o do Ruffle ({ $version })\n       *[other] Sobre o Ruffle ({ $version })\n    }\ncontext-menu-hide = Esconder este menu\ncontext-menu-exit-fullscreen = Sair da tela cheia\ncontext-menu-enter-fullscreen = Entrar em tela cheia\ncontext-menu-volume-controls = Controles de volume\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle n\xe3o conseguiu executar o Flash incorporado nesta p\xe1gina.\n    Voc\xea pode tentar abrir o arquivo em uma guia separada para evitar esse problema.\npanic-title = Algo deu errado :(\nmore-info = Mais informa\xe7\xe3o\nrun-anyway = Executar mesmo assim\ncontinue = Continuar\nreport-bug = Reportar Bug\nupdate-ruffle = Atualizar Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Aplicativo de Desktop\nruffle-wiki = Ver Wiki do Ruffle\nview-error-details = Ver detalhes do erro\nopen-in-new-tab = Abrir em uma nova guia\nclick-to-unmute = Clique para ativar o som\nerror-file-protocol =\n    Parece que voc\xea est\xe1 executando o Ruffle no protocolo "file:".\n    Isto n\xe3o funciona como navegadores bloqueiam muitos recursos de funcionar por raz\xf5es de seguran\xe7a.\n    Ao inv\xe9s disso, convidamos voc\xea a configurar um servidor local ou a usar a demonstra\xe7\xe3o da web, ou o aplicativo de desktop.\nerror-javascript-config =\n    O Ruffle encontrou um grande problema devido a uma configura\xe7\xe3o incorreta do JavaScript.\n    Se voc\xea for o administrador do servidor, convidamos voc\xea a verificar os detalhes do erro para descobrir qual par\xe2metro est\xe1 com falha.\n    Voc\xea tamb\xe9m pode consultar o wiki do Ruffle para obter ajuda.\nerror-wasm-not-found =\n    Ruffle falhou ao carregar o componente de arquivo ".wasm" necess\xe1rio.\n    Se voc\xea \xe9 o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.\n    Se o problema persistir, voc\xea pode precisar usar a configura\xe7\xe3o "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-mime-type =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Este servidor de web n\xe3o est\xe1 servindo ".wasm" arquivos com o tipo MIME correto.\n    Se voc\xea \xe9 o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-invalid-swf =\n    Ruffle n\xe3o pode analisar o arquivo solicitado.\n    O motivo prov\xe1vel \xe9 que o arquivo solicitado n\xe3o seja um SWF v\xe1lido.\nerror-swf-fetch =\n    Ruffle falhou ao carregar o arquivo Flash SWF.\n    A raz\xe3o prov\xe1vel \xe9 que o arquivo n\xe3o existe mais, ent\xe3o n\xe3o h\xe1 nada para o Ruffle carregar.\n    Tente contatar o administrador do site para obter ajuda.\nerror-swf-cors =\n    Ruffle falhou ao carregar o arquivo Flash SWF.\n    O acesso para fetch provavelmente foi bloqueado pela pol\xedtica CORS.\n    Se voc\xea for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-wasm-cors =\n    Ruffle falhou ao carregar o componente de arquivo ".wasm" necess\xe1rio.\n    O acesso para fetch foi provavelmente bloqueado pela pol\xedtica CORS.\n    Se voc\xea \xe9 o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-invalid =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta p\xe1gina tem arquivos ausentes ou inv\xe1lidos para executar o Ruffle.\n    Se voc\xea for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-wasm-download =\n    O Ruffle encontrou um grande problema ao tentar inicializar.\n    Muitas vezes isso pode se resolver sozinho, ent\xe3o voc\xea pode tentar recarregar a p\xe1gina.\n    Caso contr\xe1rio, contate o administrador do site.\nerror-wasm-disabled-on-edge =\n    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necess\xe1rio.\n    Para corrigir isso, tente abrir configura\xe7\xf5es do seu navegador, clicando em "Privacidade, pesquisa e servi\xe7os", rolando para baixo e desativando "Melhore sua seguran\xe7a na web".\n    Isso permitir\xe1 que seu navegador carregue os arquivos ".wasm" necess\xe1rios.\n    Se o problema persistir, talvez seja necess\xe1rio usar um navegador diferente.\nerror-javascript-conflict =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta p\xe1gina usa c\xf3digo JavaScript que entra em conflito com o Ruffle.\n    Se voc\xea for o administrador do servidor, convidamos voc\xea a tentar carregar o arquivo em uma p\xe1gina em branco.\nerror-javascript-conflict-outdated = Voc\xea tamb\xe9m pode tentar fazer o upload de uma vers\xe3o mais recente do Ruffle que pode contornar o problema (a compila\xe7\xe3o atual est\xe1 desatualizada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    A pol\xedtica de seguran\xe7a de conte\xfado deste servidor da web n\xe3o permite a execu\xe7\xe3o do componente ".wasm" necess\xe1rio.\n    Se voc\xea for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-unknown =\n    O Ruffle encontrou um grande problema enquanto tentava exibir este conte\xfado em Flash.\n    { $outdated ->\n        [true] Se voc\xea \xe9 o administrador do servidor, por favor tente fazer o upload de uma vers\xe3o mais recente do Ruffle (a compila\xe7\xe3o atual est\xe1 desatualizada: { $buildDate }).\n       *[false] Isso n\xe3o deveria acontecer, ent\xe3o apreciar\xedamos muito se voc\xea pudesse arquivar um bug!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?\nsave-reload-prompt =\n    A \xfanica maneira de { $action ->\n        [delete] excluir\n       *[replace] substituir\n    } este arquivo sem potencial conflito \xe9 recarregar este conte\xfado. Deseja continuar mesmo assim?\nsave-download = Baixar\nsave-replace = Substituir\nsave-delete = Excluir\nsave-backup-all = Baixar todos os arquivos de salvamento\n",
            "volume-controls.ftl": "volume-controls-mute = Silenciar\n"
        },
        "pt-PT": {
            "context_menu.ftl": "context-menu-download-swf = Descarga.swf\ncontext-menu-copy-debug-info = Copiar informa\xe7\xf5es de depura\xe7\xe3o\ncontext-menu-open-save-manager = Abrir Gestor de Grava\xe7\xf5es\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre a extens\xe3o do Ruffle ({ $version })\n       *[other] Sobre o Ruffle ({ $version })\n    }\ncontext-menu-hide = Esconder este menu\ncontext-menu-exit-fullscreen = Fechar Ecr\xe3 Inteiro\ncontext-menu-enter-fullscreen = Abrir Ecr\xe3 Inteiro\ncontext-menu-volume-controls = Controlos de volume\n",
            "messages.ftl": 'message-cant-embed =\n    O Ruffle n\xe3o conseguiu abrir o Flash integrado nesta p\xe1gina.\n    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.\npanic-title = Algo correu mal :(\nmore-info = Mais informa\xe7\xf5es\nrun-anyway = Executar mesmo assim\ncontinue = Continuar\nreport-bug = Reportar falha\nupdate-ruffle = Atualizar o Ruffle\nruffle-demo = Demonstra\xe7\xe3o na Web\nruffle-desktop = Aplica\xe7\xe3o para Desktop\nruffle-wiki = Ver a Wiki do Ruffle\nview-error-details = Ver detalhes do erro\nopen-in-new-tab = Abrir num novo separador\nclick-to-unmute = Clique para ativar o som\nerror-file-protocol =\n    Parece que executa o Ruffle no protocolo "file:".\n    Isto n\xe3o funciona, j\xe1 que os navegadores bloqueiam muitas funcionalidades por raz\xf5es de seguran\xe7a.\n    Em vez disto, recomendados configurar um servidor local ou usar a demonstra\xe7\xe3o na web, ou a aplica\xe7\xe3o para desktop.\nerror-javascript-config =\n    O Ruffle encontrou um problema maior devido a uma configura\xe7\xe3o de JavaScript incorreta.\n    Se \xe9 o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o par\xe2metro problem\xe1tico.\n    Pode ainda consultar a wiki do Ruffle para obter ajuda.\nerror-wasm-not-found =\n    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xe1rio.\n    Se \xe9 o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.\n    Se o problema persistir, poder\xe1 querer usar a configura\xe7\xe3o "publicPath": consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-mime-type =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Este servidor de web n\xe3o suporta ficheiros ".wasm" com o tipo MIME correto.\n    Se \xe9 o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-swf-fetch =\n    Ruffle falhou ao carregar o arquivo SWF do Flash\n    A raz\xe3o mais prov\xe1vel \xe9 que o arquivo n\xe3o existe mais, ent\xe3o n\xe3o h\xe1 nada para o Ruffle carregar.\n    Tente contactar o administrador do site para obter ajuda.\nerror-swf-cors =\n    O Ruffle falhou ao carregar o ficheiro Flash SWF.\n    Acesso a buscar foi provavelmente bloqueado pela pol\xedtica de CORS.\n    Se \xe9 o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-cors =\n    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xe1rio.\n    O acesso a buscar foi provavelmente bloqueado pela pol\xedtica CORS.\n    Se \xe9 o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-invalid =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta p\xe1gina est\xe1 ausente ou arquivos inv\xe1lidos para executar o Ruffle.\n    Se voc\xea \xe9 o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-download =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a p\xe1gina.\n    Caso contr\xe1rio, por favor contacte o administrador do site.\nerror-wasm-disabled-on-edge =\n    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xe1rio.\n    Para corrigir isso, tente abrir as op\xe7\xf5es do seu navegador, clicando em "Privacidade, pesquisa e servi\xe7os", rolando para baixo e desativando "Melhore a sua seguran\xe7a na web".\n    Isto permitir\xe1 ao seu navegador carregar os ficheiros ".wasm" necess\xe1rios.\n    Se o problema persistir, talvez seja necess\xe1rio usar um navegador diferente.\nerror-javascript-conflict =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Parece que esta p\xe1gina usa c\xf3digo JavaScript que entra em conflito com o Ruffle.\n    Se \xe9 o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa p\xe1gina em branco.\nerror-javascript-conflict-outdated = Pode ainda tentar carregar uma vers\xe3o mais recente do Ruffle que talvez contorne o problema (a compila\xe7\xe3o atual est\xe1 desatualizada: { $buildDate }).\nerror-csp-conflict =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    A Pol\xedtica de Seguran\xe7a de Conte\xfado deste servidor n\xe3o permite que o componente ".wasm" necess\xe1rio seja executado.\n    Se \xe9 o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-unknown =\n    O Ruffle encontrou um problema maior enquanto tentava mostrar este conte\xfado em Flash.\n    { $outdated ->\n        [true] Se \xe9 o administrador do servidor, por favor tente carregar uma vers\xe3o mais recente do Ruffle (a compila\xe7\xe3o atual est\xe1 desatualizada: { $buildDate }).\n       *[false] N\xe3o era suposto isto ter acontecido, por isso agradecer\xedamos muito se pudesse reportar a falha!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Tem a certeza de que quer apagar esta grava\xe7\xe3o?\nsave-reload-prompt =\n    A \xfanica forma de { $action ->\n        [delete] apagar\n       *[replace] substituir\n    } esta grava\xe7\xe3o sem um potencial conflito \xe9 recarregar este conte\xfado. Deseja continuar mesmo assim?\nsave-download = Descarregar\nsave-replace = Substituir\nsave-delete = Apagar\nsave-backup-all = Descarregar todas as grava\xe7\xf5es\n",
            "volume-controls.ftl": "volume-controls-mute = Silenciar\n"
        },
        "ro-RO": {
            "context_menu.ftl": "context-menu-download-swf = Descarc\u0103 .swf\ncontext-menu-copy-debug-info = Copiaz\u0103 informa\u021biile de depanare\ncontext-menu-open-save-manager = Deschide managerul de salv\u0103ri\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Despre extensia Ruffle ({ $version })\n       *[other] Despre Ruffle ({ $version })\n    }\ncontext-menu-hide = Ascunde acest meniu\ncontext-menu-exit-fullscreen = Ie\u0219i din ecranul complet\ncontext-menu-enter-fullscreen = Intr\u0103 \xeen ecran complet\ncontext-menu-volume-controls = Comenzi pentru volum\n",
            "messages.ftl": "message-cant-embed =\n    Ruffle nu a putut s\u0103 ruleze Flash \xeencorporat \xeen aceast\u0103 pagin\u0103.\n    Po\u021bi \xeencerca s\u0103 deschizi fi\u0219ierul \xeentr-o fil\u0103 separat\u0103, pentru a evita aceast\u0103 problem\u0103.\npanic-title = Ceva a mers prost :(\nmore-info = Mai multe informa\u021bii\nrun-anyway = Ruleaz\u0103 oricum\ncontinue = Continu\u0103\nreport-bug = Raporteaz\u0103 un bug\nupdate-ruffle = Actualizeaz\u0103 Ruffle\nruffle-demo = Demo web\nruffle-desktop = Aplica\u021bie desktop\nruffle-wiki = Vezi wikiul Ruffle\nview-error-details = Vezi detaliile erorii\nopen-in-new-tab = Deschide \xeentr-o fil\u0103 nou\u0103\nclick-to-unmute = D\u0103 click pentru a dezmu\u021bi\nerror-file-protocol =\n    Se pare c\u0103 rulezi Ruffle pe protocolul \u201efile:\u201d.\n    Acesta nu func\u021bioneaz\u0103, deoarece browserele blocheaz\u0103 func\u021bionarea multor func\u021bii din motive de securitate.\n    \xcen schimb, te invit\u0103m s\u0103 configurezi un server local sau s\u0103 folose\u0219ti fie demoul web, fie aplica\u021bia desktop.\nerror-javascript-config =\n    Ruffle a \xeent\xe2mpinat o problem\u0103 major\u0103 din cauza unei configur\u0103ri incorecte a JavaScript.\n    Dac\u0103 e\u0219ti administratorul serverului, te invit\u0103m s\u0103 verifici detaliile erorii pentru a afla care parametru este defect.\n    De asemenea, po\u021bi consulta wikiul Ruffle pentru ajutor.\nerror-wasm-not-found =\n    Ruffle a e\u0219uat la \xeenc\u0103rcarea componentei de fi\u0219ier \u201e.wasm\u201d.\n    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 te asiguri c\u0103 fi\u0219ierul a fost \xeenc\u0103rcat corect.\n    Dac\u0103 problema persist\u0103, poate fi necesar s\u0103 folose\u0219ti setarea \u201epublicPath\u201d: te rug\u0103m s\u0103 consul\u021bi wikiul Ruffle pentru ajutor.\nerror-wasm-mime-type =\n    Ruffle a \xeent\xe2mpinat o problem\u0103 major\u0103 \xeen timp ce \xeencerca s\u0103 se ini\u021bializeze.\n    Acest server web nu serve\u0219te fi\u0219iere \u201e.wasm\u201d cu tipul MIME corect.\n    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021bi wikiul Ruffle pentru ajutor.\nerror-swf-fetch =\n    Ruffle a e\u0219uat la \xeenc\u0103rcarea fi\u0219ierului SWF.\n    Motivul cel mai probabil este c\u0103 fi\u0219ierul nu mai exist\u0103, deci Ruffle nu mai are ce s\u0103 \xeencarce.\n    \xcencearc\u0103 s\u0103 contactezi administratorul site-ului web pentru ajutor.\nerror-swf-cors =\n    Ruffle a e\u0219uat la \xeenc\u0103rcarea fi\u0219ierului SWF.\n    Accesul de preluare a fost probabil blocat de politica CORS.\n    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021bi wikiul Ruffle pentru ajutor.\nerror-wasm-cors =\n    Ruffle a e\u0219uat la \xeenc\u0103rcarea componentei de fi\u0219ier \u201e.wasm\u201d.\n    Accesul de preluare a fost probabil blocat de politica CORS.\n    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021bi wikiul Ruffle pentru ajutor.\nerror-wasm-invalid =\n    Ruffle a \xeent\xe2mpinat o problem\u0103 major\u0103 \xeen timp ce \xeencerca s\u0103 se ini\u021bializeze.\n    Se pare c\u0103 aceast\u0103 pagin\u0103 are fi\u0219iere lips\u0103 sau nevalide pentru a rula Ruffle.\n    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021bi wikiul Ruffle pentru ajutor.\nerror-wasm-download =\n    Ruffle a \xeent\xe2mpinat o problem\u0103 major\u0103 \xeen timp ce \xeencerca s\u0103 ini\u021bializeze.\n    Acest lucru se poate rezolva adesea de la sine, a\u0219a c\u0103 po\u021bi \xeencerca s\u0103 re\xeencarci pagina.\n    \xcen caz contrar, te rug\u0103m s\u0103 contactezi administratorul site-ului web.\nerror-wasm-disabled-on-edge =\n    Ruffle a e\u0219uat la \xeenc\u0103rcarea componentei de fi\u0219ier \u201e.wasm\u201d.\n    Pentru a remedia acest lucru, \xeencearc\u0103 s\u0103 deschizi set\u0103rile browserului, s\u0103 faci clic pe \u201eConfiden\u021bialitate, c\u0103utare \u0219i servicii\u201d, s\u0103 derulezi \xeen jos \u0219i s\u0103 dezactivezi \u201e\xcembun\u0103t\u0103\u021bi\u021bi-v\u0103 securitatea pe web\u201d.\n    Acest lucru va permite browserului s\u0103 \xeencarce fi\u0219ierele \u201e.wasm\u201d necesare.\n    Dac\u0103 problema persist\u0103, este posibil s\u0103 trebuiasc\u0103 s\u0103 folose\u0219ti un alt browser.\nerror-javascript-conflict =\n    Ruffle a \xeent\xe2mpinat o problem\u0103 major\u0103 \xeen timp ce \xeencerca s\u0103 se ini\u021bializeze.\n    Se pare c\u0103 aceast\u0103 pagin\u0103 folose\u0219te cod JavaScript care intr\u0103 \xeen conflict cu Ruffle.\n    Dac\u0103 e\u0219ti administratorul serverului, te invit\u0103m s\u0103 \xeencerci \xeenc\u0103rcarea fi\u0219ierului pe o pagin\u0103 goal\u0103.\nerror-javascript-conflict-outdated = De asemenea, po\u021bi \xeencerca s\u0103 \xeencarci o versiune mai recent\u0103 de Ruffle care ar putea ocoli problema (versiunea actual\u0103 este \xeenvechit\u0103: { $buildDate }).\nerror-csp-conflict =\n    Ruffle a \xeent\xe2mpinat o problem\u0103 major\u0103 \xeen timp ce \xeencerca s\u0103 se ini\u021bializeze.\n    Politica de securitate a con\u021binutului a acestui server web nu permite rularea componentei \u201e.wasm\u201d necesare.\n    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021bi wikiul Ruffle pentru ajutor.\nerror-unknown =\n    Ruffle a \xeent\xe2mpinat o problem\u0103 major\u0103 \xeen timp ce \xeencerca s\u0103 afi\u0219eze acest con\u021binut Flash.\n    { $outdated ->\n        [true] Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 \xeencerci s\u0103 \xeencarci o versiune mai recent\u0103 de Ruffle (versiunea actual\u0103 este \xeenvechit\u0103: { $buildDate }).\n       *[false] Acest lucru nu ar trebui s\u0103 se \xeent\xe2mple, a\u0219a c\u0103 am aprecia foarte mult dac\u0103 ai putea trimite un bug!\n    }\n",
            "save-manager.ftl": "save-delete-prompt = Sigur vrei s\u0103 \u0219tergi acest fi\u0219ier de salvare?\nsave-reload-prompt =\n    Singura cale de a { $action ->\n        [delete] \u0219terge\n       *[replace] \xeenlocui\n    } acest fi\u0219ier de salvare f\u0103r\u0103 un conflict poten\u021bial este de a re\xeenc\u0103rca acest con\u021binut. Dore\u0219ti s\u0103 continui oricum?\nsave-download = Descarc\u0103\nsave-replace = \xcenlocuie\u0219te\nsave-delete = \u0218terge\n",
            "volume-controls.ftl": ""
        },
        "ru-RU": {
            "context_menu.ftl": "context-menu-download-swf = \u0421\u043a\u0430\u0447\u0430\u0442\u044c .swf\ncontext-menu-copy-debug-info = \u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e\ncontext-menu-open-save-manager = \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0439\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] \u041e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0438 Ruffle ({ $version })\n       *[other] \u041e Ruffle ({ $version })\n    }\ncontext-menu-hide = \u0421\u043a\u0440\u044b\u0442\u044c \u044d\u0442\u043e \u043c\u0435\u043d\u044e\ncontext-menu-exit-fullscreen = \u041e\u043a\u043e\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c\ncontext-menu-enter-fullscreen = \u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c\ncontext-menu-volume-controls = \u0413\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle \u043d\u0435 \u0441\u043c\u043e\u0433 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c Flash, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435.\n    \u0427\u0442\u043e\u0431\u044b \u043e\u0431\u043e\u0439\u0442\u0438 \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u0430\u0439\u043b \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435.\npanic-title = \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :(\nmore-info = \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\nrun-anyway = \u0412\u0441\u0451 \u0440\u0430\u0432\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c\ncontinue = \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c\nreport-bug = \u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435\nupdate-ruffle = \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c Ruffle\nruffle-demo = \u0412\u0435\u0431-\u0434\u0435\u043c\u043e\nruffle-desktop = \u041d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\nruffle-wiki = \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432\u0438\u043a\u0438 Ruffle\nenable-hardware-acceleration = \u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u043e\u0435 \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e. \u0425\u043e\u0442\u044f Ruffle \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u043d\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0447\u0435\u043d\u044c \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u043c. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u043e\u0435 \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u0435, \u043f\u0435\u0440\u0435\u0439\u0434\u044f \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u043d\u0438\u0436\u0435:\nenable-hardware-acceleration-link = FAQ - \u0410\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u043e\u0435 \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u0435 Chrome\nview-error-details = \u0421\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435\nopen-in-new-tab = \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435\nclick-to-unmute = \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a\nclipboard-message-title = \u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u043b\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0435\u043d\u0430.\n        [access-denied]  \u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0435\u043d\u0430 \u0431\u044b\u043b \u043e\u0442\u043a\u043b\u043e\u043d\u0451\u043d.\n    } \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448 \u0434\u043b\u044f \u0432\u044b\u0440\u0435\u0437\u0430\u043d\u0438\u044f, \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0438:\nclipboard-message-copy = { " " } \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c\nclipboard-message-cut = { " " } \u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c\nclipboard-message-paste = { " " } \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c\nerror-file-protocol =\n    \u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e \u0432\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 Ruffle \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 "file:".\n    \u042d\u0442\u043e \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044b \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u043c\u043d\u043e\u0433\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043f\u043e \u0441\u043e\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438.\n    \u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u043c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u0432\u0430\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0432\u0435\u0431-\u0434\u0435\u043c\u043e \u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440.\nerror-javascript-config =\n    \u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u0438\u0437-\u0437\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 JavaScript.\n    \u0415\u0441\u043b\u0438 \u0432\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u0432\u0430\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u044f\u0441\u043d\u0438\u0442\u044c, \u043a\u0430\u043a\u043e\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0434\u0430\u043b \u0441\u0431\u043e\u0439.\n    \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u0432\u0438\u043a\u0438 Ruffle.\nerror-wasm-not-found =\n    Ruffle \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u0430\u0439\u043b\u0430 ".wasm".\n    \u0415\u0441\u043b\u0438 \u0432\u044b \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0444\u0430\u0439\u043b \u0431\u044b\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.\n    \u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043d\u0435 \u0443\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f, \u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 "publicPath": \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0432\u0438\u043a\u0438 Ruffle.\nerror-wasm-mime-type =\n    Ruffle \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0441\u044f \u0441 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.\n    \u042d\u0442\u043e\u0442 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0444\u0430\u0439\u043b\u044b ".wasm" \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c MIME.\n    \u0415\u0441\u043b\u0438 \u0432\u044b \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u0432\u0438\u043a\u0438 Ruffle.\nerror-invalid-swf =\n    Ruffle \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0444\u0430\u0439\u043b.\n    \u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0434\u0430\u043d\u043d\u044b\u0439 SWF \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0451\u043d \u0438\u043b\u0438 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u043e\u0432\u044b\u043c.\nerror-swf-fetch =\n    Ruffle \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c SWF-\u0444\u0430\u0439\u043b Flash.\n    \u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0444\u0430\u0439\u043b \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 Ruffle \u043d\u0435\u0447\u0435\u0433\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c.\n    \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u0430\u0439\u0442\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043c\u043e\u0449\u0438.\nerror-swf-cors =\n    Ruffle \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c SWF-\u0444\u0430\u0439\u043b Flash.\n    \u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u0430\u0439\u043b\u0443 \u0431\u044b\u043b \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 CORS.\n    \u0415\u0441\u043b\u0438 \u0432\u044b \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u0432\u0438\u043a\u0438 Ruffle.\nerror-wasm-cors =\n    Ruffle \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u0430\u0439\u043b\u0430 ".wasm".\n    \u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u0430\u0439\u043b\u0443 \u0431\u044b\u043b \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 CORS.\n    \u0415\u0441\u043b\u0438 \u0432\u044b \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u0432\u0438\u043a\u0438 Ruffle.\nerror-wasm-invalid =\n    Ruffle \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0441\u044f \u0441 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.\n    \u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0444\u0430\u0439\u043b\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 Ruffle \u0438\u043b\u0438 \u043e\u043d\u0438 \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b.\n    \u0415\u0441\u043b\u0438 \u0432\u044b \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u0432\u0438\u043a\u0438 Ruffle.\nerror-wasm-download =\n    Ruffle \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0441\u044f \u0441 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.\n    \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u044d\u0442\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0443\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u0430 \u0441\u043e\u0431\u043e\u044e, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.\n    \u0415\u0441\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u0430\u0439\u0442\u0430.\nerror-wasm-disabled-on-edge =\n    Ruffle \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u0430\u0439\u043b\u0430 ".wasm".\n    \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u0443 \u043e\u0448\u0438\u0431\u043a\u0443, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 WASM-\u0444\u0430\u0439\u043b\u044b.\n    \u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043e\u0441\u0442\u0430\u043b\u0430\u0441\u044c, \u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0440\u0443\u0433\u043e\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440.\nerror-javascript-conflict =\n    Ruffle \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0441\u044f \u0441 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.\n    \u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e \u044d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u0443\u044e\u0449\u0438\u0439 \u0441 Ruffle \u043a\u043e\u0434 JavaScript.\n    \u0415\u0441\u043b\u0438 \u0432\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u0432\u0430\u043c \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u043d\u0430 \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435.\nerror-javascript-conflict-outdated = \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0432\u0435\u0440\u0441\u0438\u044e Ruffle, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u043e\u0439\u0442\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 (\u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0443\u0441\u0442\u0430\u0440\u0435\u043b\u0430: { $buildDate }).\nerror-csp-conflict =\n    Ruffle \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0441\u044f \u0441 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.\n    \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u044d\u0442\u043e\u0433\u043e \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 ".wasm".\n    \u0415\u0441\u043b\u0438 \u0432\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u0432\u0438\u043a\u0438 Ruffle.\nerror-unknown =\n    Ruffle \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0441\u044f \u0441 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u044d\u0442\u043e\u0442 Flash-\u043a\u043e\u043d\u0442\u0435\u043d\u0442.\n    { $outdated ->\n        [true] \u0415\u0441\u043b\u0438 \u0432\u044b \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e Ruffle (\u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0443\u0441\u0442\u0430\u0440\u0435\u043b\u0430: { $buildDate }).\n       *[false] \u042d\u0442\u043e\u0433\u043e \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u0442\u0435\u043b\u044c\u043d\u044b, \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043d\u0430\u043c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f?\nsave-reload-prompt =\n    \u0415\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 { $action ->\n        [delete] \u0443\u0434\u0430\u043b\u0438\u0442\u044c\n       *[replace] \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c\n    } \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u0430 \u2013 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442. \u0412\u0441\u0451 \u0440\u0430\u0432\u043d\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c?\nsave-download = \u0421\u043a\u0430\u0447\u0430\u0442\u044c\nsave-replace = \u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c\nsave-delete = \u0423\u0434\u0430\u043b\u0438\u0442\u044c\nsave-backup-all = \u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f\n",
            "volume-controls.ftl": "volume-controls-mute = \u0411\u0435\u0437 \u0437\u0432\u0443\u043a\u0430\nvolume-controls-unmute = \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a\n"
        },
        "sk-SK": {
            "context_menu.ftl": "context-menu-download-swf = Stiahnu\u0165 .swf\ncontext-menu-copy-debug-info = Skop\xedrova\u0165 debug info\ncontext-menu-open-save-manager = Otvori\u0165 spr\xe1vcu ulo\u017een\xed\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] O Ruffle roz\u0161\xedren\xed ({ $version })\n       *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Skry\u0165 menu\ncontext-menu-exit-fullscreen = Ukon\u010di\u0165 re\u017eim celej obrazovky\ncontext-menu-enter-fullscreen = Prejs\u0165 do re\u017eimu celej obrazovky\ncontext-menu-volume-controls = Ovl\xe1danie hlasitosti\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle nemohol spusti\u0165 Flash vlo\u017een\xfd na tejto str\xe1nke.\n    M\xf4\u017eete sa pok\xfasi\u0165 otvori\u0165 s\xfabor na samostatnej karte, aby ste sa vyhli tomuto probl\xe9mu.\npanic-title = Nie\u010do sa pokazilo :(\nmore-info = Viac inform\xe1ci\xed\nrun-anyway = Spusti\u0165 aj tak\ncontinue = Pokra\u010dova\u0165\nreport-bug = Nahl\xe1si\u0165 chybu\nupdate-ruffle = Aktualizova\u0165 Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktopov\xe1 aplik\xe1cia\nruffle-wiki = Zobrazi\u0165 Ruffle Wiki\nenable-hardware-acceleration = Zd\xe1 sa, \u017ee hardv\xe9rov\xe1 akceler\xe1cia je vypnut\xe1. Aj ke\u010f Ruffle funguje spr\xe1vne, m\xf4\u017ee by\u0165 neprimerane pomal\xfd. Ako povoli\u0165 hardv\xe9rov\xfa akceler\xe1ciu zist\xedte na tomto odkaze:\nenable-hardware-acceleration-link = \u010cast\xe9 ot\xe1zky - Hardv\xe9rov\xe1 akceler\xe1cia Chrome\nview-error-details = Zobrazi\u0165 podrobnosti o chybe\nopen-in-new-tab = Otvori\u0165 na novej karte\nclick-to-unmute = Kliknut\xedm zapnete zvuk\nclipboard-message-title = Kop\xedrovanie a vkladanie v Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] V\xe1\u0161 prehliada\u010d nepodporuje pln\xfd pr\xedstup k schr\xe1nke,\n        [access-denied] Pr\xedstup k schr\xe1nke bol odmietnut\xfd,\n    } ale namiesto toho m\xf4\u017eete v\u017edy pou\u017ei\u0165 tieto skratky:\nclipboard-message-copy = { " " } pre kop\xedrovanie\nclipboard-message-cut = { " " } pre vystrihovanie\nclipboard-message-paste = { " " } pre vlo\u017eenie\nerror-file-protocol =\n    Zd\xe1 sa, \u017ee pou\u017e\xedvate Ruffle na protokole "file:".\n    To nie je mo\u017en\xe9, preto\u017ee prehliada\u010de blokuj\xfa fungovanie mnoh\xfdch funkci\xed z bezpe\u010dnostn\xfdch d\xf4vodov.\n    Namiesto toho v\xe1m odpor\xfa\u010dame nastavi\u0165 lok\xe1lny server alebo pou\u017ei\u0165 web demo \u010di desktopov\xfa aplik\xe1ciu.\nerror-javascript-config =\n    Ruffle narazil na probl\xe9m v d\xf4sledku nespr\xe1vnej konfigur\xe1cie JavaScriptu.\n    Ak ste spr\xe1vcom servera, odpor\xfa\u010dame v\xe1m skontrolova\u0165 podrobnosti o chybe, aby ste zistili, ktor\xfd parameter je chybn\xfd.\n    Pomoc m\xf4\u017eete z\xedska\u0165 aj na wiki Ruffle.\nerror-wasm-not-found =\n    Ruffle sa nepodarilo na\u010d\xedta\u0165 po\u017eadovan\xfd komponent s\xfaboru \u201e.wasm\u201c.\n    Ak ste spr\xe1vcom servera, skontrolujte, \u010di bol s\xfabor spr\xe1vne nahran\xfd.\n    Ak probl\xe9m pretrv\xe1va, mo\u017eno budete musie\u0165 pou\u017ei\u0165 nastavenie \u201epublicPath\u201c: pomoc n\xe1jdete na wiki Ruffle.\nerror-wasm-mime-type =\n    Ruffle narazil na probl\xe9m pri pokuse o inicializ\xe1ciu.\n    Tento webov\xfd server neposkytuje s\xfabory \u201e.wasm\u201c so spr\xe1vnym typom MIME.\n    Ak ste spr\xe1vcom servera, pomoc n\xe1jdete na Ruffle wiki.\nerror-invalid-swf =\n    Ruffle nem\xf4\u017ee spracova\u0165 po\u017eadovan\xfd s\xfabor.\n    Najpravdepodobnej\u0161\xedm d\xf4vodom je, \u017ee po\u017eadovan\xfd s\xfabor nie je platn\xfdm s\xfaborom SWF.\nerror-swf-fetch =\n    Ruffle sa nepodarilo na\u010d\xedta\u0165 SWF s\xfabor Flash.\n    Najpravdepodobnej\u0161\xedm d\xf4vodom je, \u017ee s\xfabor u\u017e neexistuje, tak\u017ee Ruffle nem\xe1 \u010do na\u010d\xedta\u0165.\n    Sk\xfaste po\u017eiada\u0165 o pomoc spr\xe1vcu webovej lokality.\nerror-swf-cors =\n    Ruffle sa nepodarilo na\u010d\xedta\u0165 SWF s\xfabor Flash.\n    Pr\xedstup k na\u010d\xedtaniu bol pravdepodobne zablokovan\xfd politikou CORS.\n    Ak ste spr\xe1vcom servera, pomoc n\xe1jdete na Ruffle wiki.\nerror-wasm-cors =\n    Ruffle sa nepodarilo na\u010d\xedta\u0165 po\u017eadovan\xfd komponent s\xfaboru \u201e.wasm\u201c.\n    Pr\xedstup k na\u010d\xedtaniu bol pravdepodobne zablokovan\xfd politikou CORS.\n    Ak ste spr\xe1vcom servera, pomoc n\xe1jdete na Ruffle wiki.\nerror-wasm-invalid =\n    Ruffle narazil na probl\xe9m pri pokuse o inicializ\xe1ciu.\n    Zd\xe1 sa, \u017ee na tejto str\xe1nke ch\xfdbaj\xfa alebo s\xfa neplatn\xe9 s\xfabory na spustenie Ruffle.\n    Ak ste spr\xe1vcom servera, pomoc n\xe1jdete na Ruffle wiki.\nerror-wasm-download =\n    Ruffle narazil na probl\xe9m pri pokuse o inicializ\xe1ciu.\n    Probl\xe9m sa m\xf4\u017ee vyrie\u0161i\u0165 aj s\xe1m, tak\u017ee m\xf4\u017eete sk\xfasi\u0165 str\xe1nku na\u010d\xedta\u0165 znova.\n    V opa\u010dnom pr\xedpade kontaktujte administr\xe1tora str\xe1nky.\nerror-wasm-disabled-on-edge =\n    Ruffle sa nepodarilo na\u010d\xedta\u0165 po\u017eadovan\xfd komponent s\xfaboru \u201e.wasm\u201c.\n    Ak chcete tento probl\xe9m vyrie\u0161i\u0165, sk\xfaste otvori\u0165 nastavenia prehliada\u010da, kliknite na polo\u017eku \u201eOchrana osobn\xfdch \xfadajov, vyh\u013ead\xe1vanie a slu\u017eby\u201c, prejdite nadol a vypnite mo\u017enos\u0165 \u201eZv\xfd\u0161te svoju bezpe\u010dnos\u0165 na webe\u201c.\n    V\xe1\u0161mu prehliada\u010du to umo\u017en\xed na\u010d\xedta\u0165 po\u017eadovan\xe9 s\xfabory \u201e.wasm\u201c.\n    Ak probl\xe9m pretrv\xe1va, mo\u017eno budete musie\u0165 pou\u017ei\u0165 in\xfd prehliada\u010d.\nerror-javascript-conflict =\n    Ruffle narazil na probl\xe9m pri pokuse o inicializ\xe1ciu.\n    Zd\xe1 sa, \u017ee t\xe1to str\xe1nka pou\u017e\xedva k\xf3d JavaScript, ktor\xfd je v konflikte s Ruffle.\n    Ak ste spr\xe1vcom servera, odpor\xfa\u010dame v\xe1m sk\xfasi\u0165 na\u010d\xedta\u0165 s\xfabor na pr\xe1zdnu str\xe1nku.\nerror-javascript-conflict-outdated = M\xf4\u017eete sa tie\u017e pok\xfasi\u0165 nahra\u0165 nov\u0161iu verziu Ruffle, ktor\xe1 m\xf4\u017ee dan\xfd probl\xe9m vyrie\u0161i\u0165 (aktu\xe1lny build je zastaran\xfd: { $buildDate }).\nerror-csp-conflict =\n    Ruffle narazil na probl\xe9m pri pokuse o inicializ\xe1ciu.\n    Z\xe1sady zabezpe\u010denia obsahu tohto webov\xe9ho servera nepovo\u013euj\xfa spustenie po\u017eadovan\xe9ho komponentu \u201e.wasm\u201c.\n    Ak ste spr\xe1vcom servera, pomoc n\xe1jdete na Ruffle wiki.\nerror-unknown =\n    Ruffle narazil na probl\xe9m pri pokuse zobrazi\u0165 tento Flash obsah.\n    { $outdated ->\n         [true] Ak ste spr\xe1vcom servera, sk\xfaste nahra\u0165 nov\u0161iu verziu Ruffle (aktu\xe1lny build je zastaran\xfd: { $buildDate }).\n        *[false] Toto by sa nemalo sta\u0165, tak\u017ee by sme naozaj ocenili, keby ste mohli nahl\xe1si\u0165 chybu!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Naozaj chcete odstr\xe1ni\u0165 tento s\xfabor s ulo\u017een\xfdmi poz\xedciami?\nsave-reload-prompt =\n    Jedin\xfd sp\xf4sob, ako { $action ->\n         [delete] vymaza\u0165\n        *[replace] nahradi\u0165\n    } tento s\xfabor s ulo\u017een\xfdmi poz\xedciami bez potenci\xe1lneho konfliktu je op\xe4tovn\xe9 na\u010d\xedtanie tohto obsahu. Chcete napriek tomu pokra\u010dova\u0165?\nsave-download = Stiahnu\u0165\nsave-replace = Nahradi\u0165\nsave-delete = Vymaza\u0165\nsave-backup-all = Stiahnu\u0165 v\u0161etky s\xfabory s ulo\u017een\xfdmi poz\xedciami\n",
            "volume-controls.ftl": "volume-controls-mute = Stlmi\u0165\nvolume-controls-unmute = Zru\u0161i\u0165 stlmenie\n"
        },
        "sv-SE": {
            "context_menu.ftl": "context-menu-download-swf = Ladda ner .swf\ncontext-menu-copy-debug-info = Kopiera fels\xf6kningsinfo\ncontext-menu-open-save-manager = \xd6ppna Sparhanteraren\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Om Ruffle-till\xe4gget ({ $version })\n       *[other] Om Ruffle ({ $version })\n    }\ncontext-menu-hide = D\xf6lj denna meny\ncontext-menu-exit-fullscreen = Avsluta helsk\xe4rm\ncontext-menu-enter-fullscreen = Helsk\xe4rm\ncontext-menu-volume-controls = Ljudkontroller\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle kunde inte k\xf6ra det inb\xe4ddade Flashinneh\xe5llet p\xe5 denna sida.\n    Du kan f\xf6rs\xf6ka \xf6ppna filen i en separat flik f\xf6r att kringg\xe5 problemet.\npanic-title = N\xe5got gick fel :(\nmore-info = Mer info\nrun-anyway = K\xf6r \xe4nd\xe5\ncontinue = Forts\xe4tt\nreport-bug = Rapportera Bugg\nupdate-ruffle = Uppdatera Ruffle\nruffle-demo = Webbdemo\nruffle-desktop = Skrivbordsprogram\nruffle-wiki = Se Ruffle-wiki\nenable-hardware-acceleration = Det ser ut som att h\xe5rdvaruacceleration \xe4r avst\xe4ngt. P\xe5 grund av det kan Ruffle fungera l\xe5ngsamt. Du kan ta reda p\xe5 hur man s\xe4tter p\xe5 h\xe5rdvaruacceleration genom l\xe4nken nedan:\nenable-hardware-acceleration-link = FAQ - Chrome H\xe5rdvaruacceleration\nview-error-details = Visa Felinformation\nopen-in-new-tab = \xd6ppna i en ny flik\nclick-to-unmute = Klicka f\xf6r ljud\nclipboard-message-title = Kopierar och klistrar in i Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] Din webbl\xe4sare har inte fullst\xe4ndig \xe5tkomst till urklipp,\n        [access-denied] Urklipps\xe5tkomst har nekats,\n    } men du kan anv\xe4nda dom h\xe4r kortkommandon ist\xe4llet:\nclipboard-message-copy = { " " } f\xf6r att kopiera\nclipboard-message-cut = { " " } f\xf6r att klippa\nclipboard-message-paste = { " " } f\xf6r att klistra in\nerror-file-protocol =\n    Det verkar som att du k\xf6r Ruffle p\xe5 "fil:"-protokollet.\n    Detta fungerar inte eftersom webbl\xe4sare blockerar m\xe5nga funktioner fr\xe5n att fungera av s\xe4kerhetssk\xe4l.\n    Ist\xe4llet bjuder vi in dig att s\xe4tta upp en lokal server eller antingen anv\xe4nda webbdemon eller skrivbordsprogrammet.\nerror-javascript-config =\n    Ruffle har st\xf6tt p\xe5 ett stort fel p\xe5 grund av en felaktig JavaScript-konfiguration.\n    Om du \xe4r serveradministrat\xf6ren bjuder vi in dig att kontrollera feldetaljerna f\xf6r att ta reda p\xe5 vilken parameter som \xe4r felaktig.\n    Du kan ocks\xe5 konsultera Ruffle-wikin f\xf6r hj\xe4lp.\nerror-wasm-not-found =\n    Ruffle misslyckades ladda ".wasm"-filkomponenten.\n    Om du \xe4r serveradministrat\xf6ren se till att filen har laddats upp korrekt.\n    Om problemet kvarst\xe5r kan du beh\xf6va anv\xe4nda inst\xe4llningen "publicPath": konsultera v\xe4nligen Ruffle-wikin f\xf6r hj\xe4lp.\nerror-wasm-mime-type =\n    Ruffle har st\xf6tt p\xe5 ett stort fel under initialiseringen.\n    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.\n    Om du \xe4r serveradministrat\xf6ren konsultera v\xe4nligen Ruffle-wikin f\xf6r hj\xe4lp.\nerror-invalid-swf =\n    Ruffle kan inte l\xe4sa den beg\xe4rda filen.\n    Det mest sannolika sk\xe4let \xe4r att den beg\xe4rda filen inte \xe4r en giltig SWF.\nerror-swf-fetch =\n    Ruffle misslyckades ladda SWF-filen.\n    Det mest sannolika sk\xe4let \xe4r att filen inte l\xe4ngre existerar, s\xe5 det finns inget f\xf6r Ruffle att k\xf6ra.\n    F\xf6rs\xf6k att kontakta webbplatsadministrat\xf6ren f\xf6r hj\xe4lp.\nerror-swf-cors =\n    Ruffle misslyckades ladda SWF-filen.\n    \xc5tkomst att h\xe4mta har sannolikt blockerats av CORS-policy.\n    Om du \xe4r serveradministrat\xf6ren konsultera v\xe4nligen Ruffle-wikin f\xf6r hj\xe4lp.\nerror-wasm-cors =\n    Ruffle misslyckades ladda ".wasm"-filkomponenten.\n    \xc5tkomst att h\xe4mta har sannolikt blockerats av CORS-policy.\n    Om du \xe4r serveradministrat\xf6ren konsultera v\xe4nligen Ruffle-wikin f\xf6r hj\xe4lp.\nerror-wasm-invalid =\n    Ruffle har st\xf6tt p\xe5 ett stort fel under initialiseringen.\n    Det verkar som att den h\xe4r sidan har saknade eller ogiltiga filer f\xf6r att k\xf6ra Ruffle.\n    Om du \xe4r serveradministrat\xf6ren konsultera v\xe4nligen Ruffle-wikin f\xf6r hj\xe4lp.\nerror-wasm-download =\n    Ruffle har st\xf6tt p\xe5 ett stort fel under initialiseringen.\n    Detta kan ofta l\xf6sas av sig sj\xe4lv s\xe5 du kan prova att ladda om sidan.\n    Kontakta annars v\xe4nligen webbplatsens administrat\xf6r.\nerror-wasm-disabled-on-edge =\n    Ruffle misslyckades ladda ".wasm"-filkomponenten.\n    F\xf6r att \xe5tg\xe4rda detta f\xf6rs\xf6k att \xf6ppna webbl\xe4sarens inst\xe4llningar, klicka p\xe5 "Sekretess, s\xf6kning och tj\xe4nster", bl\xe4ddra ner och st\xe4ng av "F\xf6rb\xe4ttra s\xe4kerheten p\xe5 webben".\n    Detta till\xe5ter din webbl\xe4sare att ladda ".wasm"-filerna.\n    Om problemet kvarst\xe5r kan du beh\xf6va anv\xe4nda en annan webbl\xe4sare.\nerror-javascript-conflict =\n    Ruffle har st\xf6tt p\xe5 ett stort fel under initialiseringen.\n    Det verkar som att den h\xe4r sidan anv\xe4nder JavaScript-kod som st\xf6r Ruffle.\n    Om du \xe4r serveradministrat\xf6ren bjuder vi in dig att f\xf6rs\xf6ka k\xf6ra filen p\xe5 en blank sida.\nerror-javascript-conflict-outdated = Du kan ocks\xe5 f\xf6rs\xf6ka ladda upp en nyare version av Ruffle, vilket kan kringg\xe5 problemet (nuvarande version \xe4r utdaterad: { $buildDate }).\nerror-csp-conflict =\n    Ruffle har st\xf6tt p\xe5 ett stort fel under initialiseringen.\n    Webbserverns Content Security Policy till\xe5ter inte ".wasm"-komponenten att k\xf6ra.\n    Om du \xe4r serveradministrat\xf6ren konsultera v\xe4nligen Ruffle-wikin f\xf6r hj\xe4lp.\nerror-unknown =\n    Ruffle har st\xf6tt p\xe5 ett stort fel medan den f\xf6rs\xf6kte visa Flashinneh\xe5llet.\n    { $outdated ->\n        [true] Om du \xe4r serveradministrat\xf6ren f\xf6rs\xf6k att ladda upp en nyare version av Ruffle (nuvarande version \xe4r utdaterad: { $buildDate }).\n       *[false] Detta \xe4r inte t\xe4nkt att h\xe4nda s\xe5 vi skulle verkligen uppskatta om du kunde rapportera in en bugg!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \xc4r du s\xe4ker p\xe5 att du vill radera sparfilen?\nsave-reload-prompt =\n    Det enda s\xe4ttet att { $action ->\n        [delete] radera\n       *[replace] ers\xe4tta\n    } denna sparfil utan potentiell konflikt \xe4r att ladda om inneh\xe5llet. Vill du forts\xe4tta \xe4nd\xe5?\nsave-download = Ladda ner\nsave-replace = Ers\xe4tt\nsave-delete = Radera\nsave-backup-all = Ladda ner alla sparfiler\n",
            "volume-controls.ftl": "volume-controls-mute = St\xe4ng av ljud\n"
        },
        "tr-TR": {
            "context_menu.ftl": "context-menu-download-swf = \u0130ndir .swf\ncontext-menu-copy-debug-info = Hata ay\u0131klama bilgisini kopyala\ncontext-menu-open-save-manager = Kay\u0131t Y\xf6neticisini A\xe7\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle Uzant\u0131s\u0131 Hakk\u0131nda ({ $version })\n       *[other] Ruffle Hakk\u0131nda ({ $version })\n    }\ncontext-menu-hide = Bu men\xfcy\xfc gizle\ncontext-menu-exit-fullscreen = Tam ekrandan \xe7\u0131k\ncontext-menu-enter-fullscreen = Tam ekran yap\ncontext-menu-volume-controls = Ses kontrolleri\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle, bu sayfaya g\xf6m\xfcl\xfc Flash\'\u0131 \xe7al\u0131\u015ft\u0131ramad\u0131.\n    Bu sorunu ortadan kald\u0131rmak i\xe7in dosyay\u0131 ayr\u0131 bir sekmede a\xe7may\u0131 deneyebilirsiniz.\npanic-title = Bir \u015feyler yanl\u0131\u015f gitti :(\nmore-info = Daha fazla bilgi\nrun-anyway = Yine de \xe7al\u0131\u015ft\u0131r\ncontinue = Devam et\nreport-bug = Hata Bildir\nupdate-ruffle = Ruffle\'\u0131 G\xfcncelle\nruffle-demo = A\u011f Demosu\nruffle-desktop = Masa\xfcst\xfc Uygulamas\u0131\nruffle-wiki = Ruffle Wiki\'yi G\xf6r\xfcnt\xfcle\nenable-hardware-acceleration = G\xf6r\xfcn\xfc\u015fe g\xf6re donan\u0131m h\u0131zland\u0131rma etkin de\u011fil. Ruffle \xe7al\u0131\u015fabilir ancak fazlas\u0131yla yava\u015f olabilir. Donan\u0131m h\u0131zland\u0131rmay\u0131 nas\u0131l etkinle\u015ftirebilice\u011finiz hakk\u0131nda bu linkten bilgi edinebilirsiniz:\nenable-hardware-acceleration-link = SSS - Chrome Donan\u0131m H\u0131zland\u0131rma\nview-error-details = Hata Ayr\u0131nt\u0131lar\u0131n\u0131 G\xf6r\xfcnt\xfcle\nopen-in-new-tab = Yeni sekmede a\xe7\nclick-to-unmute = Sesi a\xe7mak i\xe7in t\u0131klay\u0131n\nclipboard-message-title = Ruffle\'da kopyalama ve yap\u0131\u015ft\u0131rma\nclipboard-message-description =\n    { $variant ->\n    *[unsupported] Taray\u0131c\u0131n\u0131z tam panoya eri\u015fimi desteklemiyor,\n    [access-denied] Pano eri\u015fimi reddedildi,\n    } ancak pano yerine her zaman bu k\u0131sayollar\u0131 kullanabilirsiniz:\nclipboard-message-copy = { " " } kopyalamak i\xe7in\nclipboard-message-cut = { " " } kesmek i\xe7in\nclipboard-message-paste = { " " } yap\u0131\u015ft\u0131rmak i\xe7in\nerror-file-protocol =\n    G\xf6r\xfcn\xfc\u015fe g\xf6re Ruffle\'\u0131 "dosya:" protokol\xfcnde \xe7al\u0131\u015ft\u0131r\u0131yorsunuz.\n    Taray\u0131c\u0131lar g\xfcvenlik nedenleriyle bir\xe7ok \xf6zelli\u011fin \xe7al\u0131\u015fmas\u0131n\u0131 engelledi\u011finden bu i\u015fe yaramaz.\n    Bunun yerine, sizi yerel bir sunucu kurmaya veya a\u011f\u0131n demosunu ya da masa\xfcst\xfc uygulamas\u0131n\u0131 kullanmaya davet ediyoruz.\nerror-javascript-config =\n    Ruffle, yanl\u0131\u015f bir JavaScript yap\u0131land\u0131rmas\u0131 nedeniyle \xf6nemli bir sorunla kar\u015f\u0131la\u015ft\u0131.\n    Sunucu y\xf6neticisiyseniz, hangi parametrenin hatal\u0131 oldu\u011funu bulmak i\xe7in sizi hata ayr\u0131nt\u0131lar\u0131n\u0131 kontrol etmeye davet ediyoruz.\n    Yard\u0131m i\xe7in Ruffle wiki\'sine de ba\u015fvurabilirsiniz.\nerror-wasm-not-found =\n    Ruffle gerekli ".wasm" dosya bile\u015fenini y\xfckleyemedi.\n    Sunucu y\xf6neticisi iseniz, l\xfctfen dosyan\u0131n do\u011fru bir \u015fekilde y\xfcklendi\u011finden emin olun.\n    Sorun devam ederse, "publicPath" ayar\u0131n\u0131 kullanman\u0131z gerekebilir: yard\u0131m i\xe7in l\xfctfen Ruffle wiki\'sine ba\u015fvurun.\nerror-wasm-mime-type =\n    Ruffle, ba\u015flatmaya \xe7al\u0131\u015f\u0131rken \xf6nemli bir sorunla kar\u015f\u0131la\u015ft\u0131.\n    Bu web sunucusu, do\u011fru MIME tipinde ".wasm" dosyalar\u0131 sunmuyor.\n    Sunucu y\xf6neticisiyseniz, yard\u0131m i\xe7in l\xfctfen Ruffle wiki\'sine ba\u015fvurun.\nerror-invalid-swf =\n    Ruffle istenen dosyay\u0131 ayr\u0131\u015ft\u0131ram\u0131yor.\n    Bunun en olas\u0131 nedeni, istenen dosyan\u0131n ge\xe7erli bir SWF olmamas\u0131d\u0131r.\nerror-swf-fetch =\n    Ruffle, Flash SWF dosyas\u0131n\u0131 y\xfckleyemedi.\n    Bunun en olas\u0131 nedeni, dosyan\u0131n art\u0131k mevcut olmamas\u0131 ve bu nedenle Ruffle\'\u0131n y\xfckleyece\u011fi hi\xe7bir \u015feyin olmamas\u0131d\u0131r.\n    Yard\u0131m i\xe7in web sitesi y\xf6neticisiyle ileti\u015fime ge\xe7meyi deneyin.\nerror-swf-cors =\n    Ruffle, Flash SWF dosyas\u0131n\u0131 y\xfckleyemedi.\n    Getirme eri\u015fimi muhtemelen CORS politikas\u0131 taraf\u0131ndan engellenmi\u015ftir.\n    Sunucu y\xf6neticisiyseniz, yard\u0131m i\xe7in l\xfctfen Ruffle wiki\'sine ba\u015fvurun.\nerror-wasm-cors =\n    Ruffle gerekli ".wasm" dosya bile\u015fenini y\xfckleyemedi.\n    Getirme eri\u015fimi muhtemelen CORS politikas\u0131 taraf\u0131ndan engellenmi\u015ftir.\n    Sunucu y\xf6neticisiyseniz, yard\u0131m i\xe7in l\xfctfen Ruffle wiki\'sine ba\u015fvurun.\nerror-wasm-invalid =\n    Ruffle, ba\u015flatmaya \xe7al\u0131\u015f\u0131rken \xf6nemli bir sorunla kar\u015f\u0131la\u015ft\u0131.\n    G\xf6r\xfcn\xfc\u015fe g\xf6re bu sayfada Ruffle\'\u0131 \xe7al\u0131\u015ft\u0131rmak i\xe7in eksik veya ge\xe7ersiz dosyalar var.\n    Sunucu y\xf6neticisiyseniz, yard\u0131m i\xe7in l\xfctfen Ruffle wiki\'sine ba\u015fvurun.\nerror-wasm-download =\n    Ruffle, ba\u015flatmaya \xe7al\u0131\u015f\u0131rken \xf6nemli bir sorunla kar\u015f\u0131la\u015ft\u0131.\n    Bu genellikle kendi kendine \xe7\xf6z\xfclebilir, bu nedenle sayfay\u0131 yeniden y\xfcklemeyi deneyebilirsiniz.\n    Aksi takdirde, l\xfctfen site y\xf6neticisiyle ileti\u015fime ge\xe7in.\nerror-wasm-disabled-on-edge =\n    Ruffle gerekli ".wasm" dosya bile\u015fenini y\xfckleyemedi.\n    Bunu d\xfczeltmek i\xe7in taray\u0131c\u0131n\u0131z\u0131n ayarlar\u0131n\u0131 a\xe7\u0131n, "Gizlilik, arama ve hizmetler"i t\u0131klay\u0131n, a\u015fa\u011f\u0131 kayd\u0131r\u0131n ve "Web\'de g\xfcvenli\u011finizi art\u0131r\u0131n"\u0131 kapatmay\u0131 deneyin.\n    Bu, taray\u0131c\u0131n\u0131z\u0131n gerekli ".wasm" dosyalar\u0131n\u0131 y\xfcklemesine izin verecektir.\n    Sorun devam ederse, farkl\u0131 bir taray\u0131c\u0131 kullanman\u0131z gerekebilir.\nerror-javascript-conflict =\n    Ruffle, ba\u015flatmaya \xe7al\u0131\u015f\u0131rken \xf6nemli bir sorunla kar\u015f\u0131la\u015ft\u0131.\n    G\xf6r\xfcn\xfc\u015fe g\xf6re bu sayfa, Ruffle ile \xe7ak\u0131\u015fan JavaScript kodu kullan\u0131yor.\n    Sunucu y\xf6neticisiyseniz, sizi dosyay\u0131 bo\u015f bir sayfaya y\xfcklemeyi denemeye davet ediyoruz.\nerror-javascript-conflict-outdated = Ayr\u0131ca sorunu giderebilecek daha yeni bir Ruffle s\xfcr\xfcm\xfc y\xfcklemeyi de deneyebilirsiniz (mevcut yap\u0131m eskimi\u015f: { $buildDate }).\nerror-csp-conflict =\n    Ruffle, ba\u015flatmaya \xe7al\u0131\u015f\u0131rken \xf6nemli bir sorunla kar\u015f\u0131la\u015ft\u0131.\n    Bu web sunucusunun \u0130\xe7erik G\xfcvenli\u011fi Politikas\u0131, gerekli ".wasm" bile\u015feninin \xe7al\u0131\u015fmas\u0131na izin vermiyor.\n    Sunucu y\xf6neticisiyseniz, yard\u0131m i\xe7in l\xfctfen Ruffle wiki\'sine bak\u0131n.\nerror-unknown =\n    Ruffle, bu Flash i\xe7eri\u011fini g\xf6r\xfcnt\xfclemeye \xe7al\u0131\u015f\u0131rken \xf6nemli bir sorunla kar\u015f\u0131la\u015ft\u0131.\n    { $outdated ->\n        [true] Sunucu y\xf6neticisiyseniz, l\xfctfen Ruffle\'\u0131n daha yeni bir s\xfcr\xfcm\xfcn\xfc y\xfcklemeyi deneyin (mevcut yap\u0131m eskimi\u015f: { $buildDate }).\n       *[false] Bunun olmamas\u0131 gerekiyor, bu y\xfczden bir hata bildirebilirseniz \xe7ok memnun oluruz!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = Bu kay\u0131t dosyas\u0131n\u0131 silmek istedi\u011finize emin misiniz?\nsave-reload-prompt =\n    Bu kaydetme dosyas\u0131n\u0131 potansiyel \xe7ak\u0131\u015fma olmadan { $action ->\n        [delete] silmenin\n       *[replace] de\u011fi\u015ftirmenin\n    } tek yolu, bu i\xe7eri\u011fi yeniden y\xfcklemektir. Yine de devam etmek istiyor musunuz?\nsave-download = \u0130ndir\nsave-replace = De\u011fi\u015ftir\nsave-delete = Sil\nsave-backup-all = T\xfcm kay\u0131t dosyalar\u0131n\u0131 indir\n",
            "volume-controls.ftl": "volume-controls-mute = Sustur\nvolume-controls-unmute = Susturmay\u0131 kald\u0131r\n"
        },
        "uk-UA": {
            "context_menu.ftl": "context-menu-download-swf = \u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 .swf\ncontext-menu-copy-debug-info = \u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u043d\u0430\u043b\u0430\u0433\u043e\u0434\u0436\u0435\u043d\u043d\u044f\ncontext-menu-open-save-manager = \u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] \u041f\u0440\u043e \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f Ruffle ({ $version })\n       *[other] \u041f\u0440\u043e Ruffle ({ $version })\n    }\ncontext-menu-hide = \u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u0446\u0435 \u043c\u0435\u043d\u044e\ncontext-menu-exit-fullscreen = \u0412\u0438\u0439\u0442\u0438 \u0437 \u043f\u043e\u0432\u043d\u043e\u0435\u043a\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0443\ncontext-menu-enter-fullscreen = \u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u043e\u0432\u043d\u043e\u0435\u043a\u0440\u0430\u043d\u043d\u0438\u0439 \u0440\u0435\u0436\u0438\u043c\ncontext-menu-volume-controls = \u0415\u043b\u0435\u043c\u0435\u043d\u0442\u0438 \u043a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0433\u0443\u0447\u043d\u0456\u0441\u0442\u044e\n",
            "messages.ftl": 'message-cant-embed = Ruffle \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 Flash, \u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0443 \u0446\u044e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u0444\u0430\u0439\u043b \u0432 \u043e\u043a\u0440\u0435\u043c\u0456\u0439 \u0432\u043a\u043b\u0430\u0434\u0446\u0456, \u0449\u043e\u0431 \u0443\u043d\u0438\u043a\u043d\u0443\u0442\u0438 \u0446\u0456\u0454\u0457 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438.\npanic-title = \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :(\nmore-info = \u0411\u0456\u043b\u044c\u0448\u0435 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457\nrun-anyway = \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0435 \u043e\u0434\u043d\u043e\ncontinue = \u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438\nreport-bug = \u041f\u043e\u0432\u0456\u0434\u043e\u043c\u0438\u0442\u0438 \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443\nupdate-ruffle = \u041e\u043d\u043e\u0432\u0438\u0442\u0438 Ruffle\nruffle-demo = \u0412\u0435\u0431\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0456\u044f\nruffle-desktop = \u0417\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u0440\u043e\u0431\u043e\u0447\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0443\nruffle-wiki = \u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 Ruffle Wiki\nenable-hardware-acceleration = \u0421\u0445\u043e\u0436\u0435, \u0430\u043f\u0430\u0440\u0430\u0442\u043d\u0435 \u043f\u0440\u0438\u0441\u043a\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u043e. \u0425\u043e\u0447\u0430 Ruffle \u043c\u043e\u0436\u0435 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438, \u0446\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0434\u0443\u0436\u0435 \u043f\u043e\u0432\u0456\u043b\u044c\u043d\u0438\u043c. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044f, \u044f\u043a \u0443\u0432\u0456\u043c\u043a\u043d\u0443\u0442\u0438 \u0430\u043f\u0430\u0440\u0430\u0442\u043d\u0435 \u043f\u0440\u0438\u0441\u043a\u043e\u0440\u0435\u043d\u043d\u044f, \u043f\u0435\u0440\u0435\u0439\u0448\u043e\u0432\u0448\u0438 \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c \u043d\u0438\u0436\u0447\u0435:\nenable-hardware-acceleration-link = FAQ - \u0410\u043f\u0430\u0440\u0430\u0442\u043d\u0435 \u043f\u0440\u0438\u0441\u043a\u043e\u0440\u0435\u043d\u043d\u044f Chrome\nview-error-details = \u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438\nopen-in-new-tab = \u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u0432 \u043d\u043e\u0432\u0456\u0439 \u0432\u043a\u043b\u0430\u0434\u0446\u0456\nclick-to-unmute = \u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u0443\u0432\u0456\u043c\u043a\u043d\u0443\u0442\u0438 \u0437\u0432\u0443\u043a\nclipboard-message-title = \u041a\u043e\u043f\u0456\u044e\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u0432 Ruffle\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u043f\u043e\u0432\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u0431\u0443\u0444\u0435\u0440\u0430 \u043e\u0431\u043c\u0456\u043d\u0443,\n        [access-denied] \u0423 \u0434\u043e\u0441\u0442\u0443\u043f\u0456 \u0434\u043e \u0431\u0443\u0444\u0435\u0440\u0430 \u043e\u0431\u043c\u0456\u043d\u0443 \u0432\u0456\u0434\u043c\u043e\u0432\u043b\u0435\u043d\u043e,\n    } \u0430\u043b\u0435 \u0432\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044f \u0446\u0438\u043c\u0438 \u044f\u0440\u043b\u0438\u043a\u0430\u043c\u0438:\nclipboard-message-copy = { " " } \u0434\u043b\u044f \u043a\u043e\u043f\u0456\u044e\u0432\u0430\u043d\u043d\u044f\nclipboard-message-cut = { " " } \u0434\u043b\u044f \u0432\u0438\u0440\u0456\u0437\u0430\u043d\u043d\u044f\nclipboard-message-paste = { " " } \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044f\nerror-file-protocol = \u0417\u0434\u0430\u0454\u0442\u044c\u0441\u044f, \u0432\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u0442\u0435 Ruffle \u0437\u0430 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c "file:". \u0426\u0435 \u043d\u0435 \u043f\u0440\u0430\u0446\u044e\u0454, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0438 \u0431\u043b\u043e\u043a\u0443\u044e\u0442\u044c \u0440\u043e\u0431\u043e\u0442\u0443 \u0431\u0430\u0433\u0430\u0442\u044c\u043e\u0445 \u0444\u0443\u043d\u043a\u0446\u0456\u0439 \u0437 \u043c\u0456\u0440\u043a\u0443\u0432\u0430\u043d\u044c \u0431\u0435\u0437\u043f\u0435\u043a\u0438. \u0417\u0430\u043c\u0456\u0441\u0442\u044c \u0446\u044c\u043e\u0433\u043e \u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0448\u0443\u0454\u043c\u043e \u0432\u0430\u0441 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u0431\u043e \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044f \u0432\u0435\u0431\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0456\u0454\u044e \u0447\u0438 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u043e\u043c \u0440\u043e\u0431\u043e\u0447\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0443.\nerror-javascript-config = Ruffle \u0437\u0456\u0442\u043a\u043d\u0443\u0432\u0441\u044f \u0437 \u0441\u0435\u0440\u0439\u043e\u0437\u043d\u043e\u044e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u044e \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044e JavaScript. \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043c\u0438 \u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0454\u043c\u043e \u0432\u0430\u043c \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438, \u0449\u043e\u0431 \u0434\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044f, \u044f\u043a\u0438\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0454 \u043d\u0435\u0441\u043f\u0440\u0430\u0432\u043d\u0438\u043c. \u0412\u0438 \u0442\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0434\u043e Ruffle Wiki.\nerror-wasm-not-found = Ruffle \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ".wasm". \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u0439\u0442\u0435\u0441\u044f, \u0449\u043e \u0444\u0430\u0439\u043b \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u042f\u043a\u0449\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043d\u0435 \u0437\u043d\u0438\u043a\u0430\u0454, \u043c\u043e\u0436\u043b\u0438\u0432\u043e, \u0432\u0430\u043c \u0437\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044f \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f\u043c "publicPath": \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e Ruffle Wiki, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0443.\nerror-wasm-mime-type = Ruffle \u0437\u0456\u0442\u043a\u043d\u0443\u0432\u0441\u044f \u0437 \u0441\u0435\u0440\u0439\u043e\u0437\u043d\u043e\u044e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u044e \u043f\u0456\u0434 \u0447\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0438 \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457. \u0426\u0435\u0439 \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0454 \u0444\u0430\u0439\u043b\u0438 ".wasm" \u0456\u0437 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u043c \u0442\u0438\u043f\u043e\u043c MIME. \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e Ruffle Wiki, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0443.\nerror-invalid-swf = Ruffle \u043d\u0435 \u043c\u043e\u0436\u0435 \u043f\u0440\u043e\u0430\u043d\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u0444\u0430\u0439\u043b \u0437\u0430\u043f\u0438\u0442\u0443. \u041d\u0430\u0439\u0456\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0448\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043f\u043e\u043b\u044f\u0433\u0430\u0454 \u0432 \u0442\u043e\u043c\u0443, \u0449\u043e \u0444\u0430\u0439\u043b \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0435 \u0454 \u0434\u0456\u0439\u0441\u043d\u0438\u043c SWF.\nerror-swf-fetch = Ruffle \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043b Flash SWF. \u041d\u0430\u0439\u0456\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0448\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043f\u043e\u043b\u044f\u0433\u0430\u0454 \u0432 \u0442\u043e\u043c\u0443, \u0449\u043e \u0444\u0430\u0439\u043b \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454, \u0442\u043e\u043c\u0443 Ruffle \u043d\u0435\u043c\u0430 \u0447\u043e\u0433\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043f\u043e \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0443 \u0434\u043e \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u0430\u0439\u0442\u0443.\nerror-swf-cors = Ruffle \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043b Flash SWF. \u041c\u043e\u0436\u043b\u0438\u0432\u043e, \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0431\u0443\u043b\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u043e\u0432\u0430\u043d\u043e \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u043e\u044e CORS. \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e Ruffle Wiki, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0443.\nerror-wasm-cors = Ruffle \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ".wasm". \u041c\u043e\u0436\u043b\u0438\u0432\u043e, \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0431\u0443\u043b\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u043e\u0432\u0430\u043d\u043e \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u043e\u044e CORS. \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e Ruffle Wiki, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0443.\nerror-wasm-invalid = Ruffle \u0437\u0456\u0442\u043a\u043d\u0443\u0432\u0441\u044f \u0437 \u0441\u0435\u0440\u0439\u043e\u0437\u043d\u043e\u044e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u044e \u043f\u0456\u0434 \u0447\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0438 \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457. \u0417\u0434\u0430\u0454\u0442\u044c\u0441\u044f, \u043d\u0430 \u0446\u0456\u0439 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0430\u0431\u043e \u043d\u0435\u0434\u0456\u0439\u0441\u043d\u0456 \u0444\u0430\u0439\u043b\u0438 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0443 Ruffle. \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e Ruffle Wiki, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0443.\nerror-wasm-download = Ruffle \u0437\u0456\u0442\u043a\u043d\u0443\u0432\u0441\u044f \u0437 \u0441\u0435\u0440\u0439\u043e\u0437\u043d\u043e\u044e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u044e \u043f\u0456\u0434 \u0447\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0438 \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457. \u0427\u0430\u0441\u0442\u043e \u0446\u0435 \u043c\u043e\u0436\u0435 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438\u0441\u044f \u0441\u0430\u043c\u043e \u0441\u043e\u0431\u043e\u044e, \u0442\u043e\u043c\u0443 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u043e\u043d\u043e\u0432\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443. \u0412 \u0456\u043d\u0448\u043e\u043c\u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0443 \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u0430\u0439\u0442\u0443.\nerror-wasm-disabled-on-edge = Ruffle \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ".wasm". \u0429\u043e\u0431 \u0432\u0438\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0446\u0435, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0442\u0438 \xab\u041a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u0456\u0441\u0442\u044c, \u043f\u043e\u0448\u0443\u043a \u0456 \u0441\u043b\u0443\u0436\u0431\u0438\xbb, \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u0438\u0442\u0438 \u0432\u043d\u0438\u0437 \u0456 \u0432\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \xab\u041f\u0456\u0434\u0432\u0438\u0449\u0438\u0442\u0438 \u0431\u0435\u0437\u043f\u0435\u043a\u0443 \u0432 \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0456\xbb. \u0426\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u0432\u0430\u0448\u043e\u043c\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0456 \u0444\u0430\u0439\u043b\u0438 \xab.wasm\xbb. \u042f\u043a\u0449\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043d\u0435 \u0437\u043d\u0438\u043a\u0430\u0454, \u043c\u043e\u0436\u043b\u0438\u0432\u043e, \u0432\u0430\u043c \u0434\u043e\u0432\u0435\u0434\u0435\u0442\u044c\u0441\u044f \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044f \u0456\u043d\u0448\u0438\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c.\nerror-javascript-conflict = Ruffle \u0437\u0456\u0442\u043a\u043d\u0443\u0432\u0441\u044f \u0437 \u0441\u0435\u0440\u0439\u043e\u0437\u043d\u043e\u044e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u044e \u043f\u0456\u0434 \u0447\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0438 \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457. \u0421\u0445\u043e\u0436\u0435, \u0449\u043e \u0446\u044f \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u043a\u043e\u0434 JavaScript, \u044f\u043a\u0438\u0439 \u043a\u043e\u043d\u0444\u043b\u0456\u043a\u0442\u0443\u0454 \u0437 Ruffle. \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0448\u0443\u0454\u043c\u043e \u0432\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043b \u043d\u0430 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456.\nerror-javascript-conflict-outdated = \u0412\u0438 \u0442\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043d\u043e\u0432\u0456\u0448\u0443 \u0432\u0435\u0440\u0441\u0456\u044e Ruffle, \u044f\u043a\u0430 \u043c\u043e\u0436\u0435 \u0443\u043d\u0438\u043a\u043d\u0443\u0442\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438 (\u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0437\u0431\u0456\u0440\u043a\u0430 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043b\u0430: { $buildDate }).\nerror-csp-conflict = Ruffle \u0437\u0456\u0442\u043a\u043d\u0443\u0432\u0441\u044f \u0437 \u0441\u0435\u0440\u0439\u043e\u0437\u043d\u043e\u044e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u044e \u043f\u0456\u0434 \u0447\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0438 \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457. \u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 \u0431\u0435\u0437\u043f\u0435\u043a\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443 \u0446\u044c\u043e\u0433\u043e \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ".wasm". \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e Ruffle Wiki, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0443.\nerror-unknown =\n    Ruffle \u0437\u0456\u0442\u043a\u043d\u0443\u0432\u0441\u044f \u0437 \u0441\u0435\u0440\u0439\u043e\u0437\u043d\u043e\u044e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u044e \u043f\u0456\u0434 \u0447\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0438 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u0446\u0435\u0439 Flash \u043a\u043e\u043d\u0442\u0435\u043d\u0442.\n    { $outdated ->\n        [true] \u042f\u043a\u0449\u043e \u0432\u0438 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043d\u043e\u0432\u0456\u0448\u0443 \u0432\u0435\u0440\u0441\u0456\u044e Ruffle (\u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0437\u0431\u0456\u0440\u043a\u0430 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043b\u0430: { $buildDate }).\n       *[false] \u0426\u044c\u043e\u0433\u043e \u043d\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0442\u0438\u0441\u044f, \u0442\u043e\u043c\u0443 \u043c\u0438 \u0431\u0443\u0434\u0435\u043c\u043e \u0434\u0443\u0436\u0435 \u0432\u0434\u044f\u0447\u043d\u0456, \u044f\u043a\u0449\u043e \u0432\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0438\u0442\u0435 \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0446\u0435\u0439 \u0444\u0430\u0439\u043b \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f?\nsave-reload-prompt =\n    \u0404\u0434\u0438\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 { $action ->\n        [delete] \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438\n       *[replace] \u0437\u0430\u043c\u0456\u043d\u0438\u0442\u0438\n    } \u0446\u0435\u0439 \u0444\u0430\u0439\u043b \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u043b\u0456\u043a\u0442\u0443 \u0454 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443. \u0412\u0438 \u0432\u0441\u0435 \u043e\u0434\u043d\u043e \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438?\nsave-download = \u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438\nsave-replace = \u0417\u0430\u043c\u0456\u043d\u0438\u0442\u0438\nsave-delete = \u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438\nsave-backup-all = \u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0432\u0441\u0456 \u0444\u0430\u0439\u043b\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f\n",
            "volume-controls.ftl": "volume-controls-mute = \u0412\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \u0437\u0432\u0443\u043a\nvolume-controls-unmute = \u0423\u0432\u0456\u043c\u043a\u043d\u0443\u0442\u0438 \u0437\u0432\u0443\u043a\n"
        },
        "zh-CN": {
            "context_menu.ftl": "context-menu-download-swf = \u4e0b\u8f7d .swf\ncontext-menu-copy-debug-info = \u590d\u5236\u8c03\u8bd5\u4fe1\u606f\ncontext-menu-open-save-manager = \u6253\u5f00\u5b58\u6863\u7ba1\u7406\u5668\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] \u5173\u4e8e Ruffle \u6269\u5c55 ({ $version })\n       *[other] \u5173\u4e8e Ruffle ({ $version })\n    }\ncontext-menu-hide = \u9690\u85cf\u6b64\u83dc\u5355\ncontext-menu-exit-fullscreen = \u9000\u51fa\u5168\u5c4f\ncontext-menu-enter-fullscreen = \u8fdb\u5165\u5168\u5c4f\ncontext-menu-volume-controls = \u97f3\u91cf\u63a7\u5236\n",
            "messages.ftl": 'message-cant-embed =\n    Ruffle \u65e0\u6cd5\u8fd0\u884c\u5d4c\u5165\u5728\u6b64\u9875\u9762\u4e2d\u7684 Flash\u3002\n    \u60a8\u53ef\u4ee5\u5c1d\u8bd5\u5728\u5355\u72ec\u7684\u6807\u7b7e\u9875\u4e2d\u6253\u5f00\u8be5\u6587\u4ef6\uff0c\u4ee5\u56de\u907f\u6b64\u95ee\u9898\u3002\npanic-title = \u51fa\u4e86\u4e9b\u95ee\u9898 :(\nmore-info = \u66f4\u591a\u4fe1\u606f\nrun-anyway = \u4ecd\u7136\u8fd0\u884c\ncontinue = \u7ee7\u7eed\nreport-bug = \u53cd\u9988\u95ee\u9898\nupdate-ruffle = \u66f4\u65b0 Ruffle\nruffle-demo = \u7f51\u9875\u6f14\u793a\nruffle-desktop = \u684c\u9762\u5e94\u7528\u7a0b\u5e8f\nruffle-wiki = \u67e5\u770b Ruffle Wiki\nenable-hardware-acceleration = \u770b\u8d77\u6765\u786c\u4ef6\u52a0\u901f\u5df2\u88ab\u7981\u7528\u3002\u867d\u7136Ruffle\u53ef\u80fd\u53ef\u4ee5\u8fd0\u884c\uff0c\u4f46\u901f\u5ea6\u53ef\u80fd\u4f1a\u975e\u5e38\u6162\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u94fe\u63a5\u4e86\u89e3\u5982\u4f55\u542f\u7528\u786c\u4ef6\u52a0\u901f\uff1a\nenable-hardware-acceleration-link = \u5e38\u89c1\u95ee\u9898 - Chrome \u786c\u4ef6\u52a0\u901f\nview-error-details = \u67e5\u770b\u9519\u8bef\u8be6\u60c5\nopen-in-new-tab = \u5728\u65b0\u6807\u7b7e\u9875\u4e2d\u6253\u5f00\nclick-to-unmute = \u70b9\u51fb\u53d6\u6d88\u9759\u97f3\nclipboard-message-title = \u5728Ruffle\u4e2d\u590d\u5236\u7c98\u8d34\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] \u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5b8c\u5168\u526a\u8d34\u677f\u8bbf\u95ee,\n        [access-denied] \u5bf9\u526a\u8d34\u677f\u7684\u8bbf\u95ee\u5df2\u88ab\u62d2\u7edd,\n    } \u4f46\u60a8\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5feb\u6377\u952e:\nclipboard-message-copy = { " " } \u590d\u5236\nclipboard-message-cut = { " " } \u526a\u5207\nclipboard-message-paste = { " " } \u7c98\u8d34\nerror-file-protocol =\n    \u770b\u6765\u60a8\u6b63\u5728 "file:" \u534f\u8bae\u4e0a\u4f7f\u7528 Ruffle\u3002\n    \u7531\u4e8e\u6d4f\u89c8\u5668\u4ee5\u5b89\u5168\u539f\u56e0\u963b\u6b62\u8bb8\u591a\u529f\u80fd\uff0c\u56e0\u6b64\u8fd9\u4e0d\u8d77\u4f5c\u7528\u3002\n    \u76f8\u53cd\u6211\u4eec\u9080\u8bf7\u60a8\u8bbe\u7f6e\u672c\u5730\u670d\u52a1\u5668\u6216\u4f7f\u7528\u7f51\u9875\u6f14\u793a\u6216\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u3002\nerror-javascript-config =\n    \u7531\u4e8e\u9519\u8bef\u7684 JavaScript \u914d\u7f6e\uff0cRuffle \u9047\u5230\u4e86\u4e00\u4e2a\u91cd\u5927\u95ee\u9898\u3002\n    \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u6211\u4eec\u9080\u8bf7\u60a8\u68c0\u67e5\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f\uff0c\u4ee5\u627e\u51fa\u54ea\u4e2a\u53c2\u6570\u6709\u6545\u969c\u3002\n    \u60a8\u4e5f\u53ef\u4ee5\u67e5\u9605 Ruffle \u7684 Wiki \u83b7\u53d6\u5e2e\u52a9\u3002\nerror-wasm-not-found =\n    Ruffle \u65e0\u6cd5\u52a0\u8f7d\u6240\u9700\u7684 \u201c.wasm\u201d \u6587\u4ef6\u7ec4\u4ef6\u3002\n    \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u8bf7\u786e\u4fdd\u6587\u4ef6\u5df2\u6b63\u786e\u4e0a\u4f20\u3002\n    \u5982\u679c\u95ee\u9898\u4ecd\u7136\u5b58\u5728\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4f7f\u7528 \u201cpublicPath\u201d \u8bbe\u7f6e\uff1a\u8bf7\u67e5\u770b Ruffle \u7684 Wiki \u83b7\u53d6\u5e2e\u52a9\u3002\nerror-wasm-mime-type =\n    Ruffle \u5728\u8bd5\u56fe\u521d\u59cb\u5316\u65f6\u9047\u5230\u4e86\u4e00\u4e2a\u91cd\u5927\u95ee\u9898\u3002\n    \u8be5\u7f51\u7ad9\u670d\u52a1\u5668\u6ca1\u6709\u63d0\u4f9b ".asm\u201d \u6587\u4ef6\u6b63\u786e\u7684 MIME \u7c7b\u578b\u3002\n    \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u8bf7\u67e5\u9605 Ruffle Wiki \u83b7\u53d6\u5e2e\u52a9\u3002\nerror-invalid-swf =\n    Ruffle\u65e0\u6cd5\u89e3\u6790\u8bf7\u6c42\u7684\u6587\u4ef6\u3002\n    \u6700\u6709\u53ef\u80fd\u7684\u539f\u56e0\u662f\u8be5\u8bf7\u6c42\u6587\u4ef6\u4e0d\u662f\u4e00\u4e2a\u5408\u6cd5\u7684SWF\u6587\u4ef6\u3002\nerror-swf-fetch =\n    Ruffle \u65e0\u6cd5\u52a0\u8f7d Flash SWF \u6587\u4ef6\u3002\n    \u6700\u53ef\u80fd\u7684\u539f\u56e0\u662f\u6587\u4ef6\u4e0d\u518d\u5b58\u5728\u6240\u4ee5 Ruffle \u6ca1\u6709\u8981\u52a0\u8f7d\u7684\u5185\u5bb9\u3002\n    \u8bf7\u5c1d\u8bd5\u8054\u7cfb\u7f51\u7ad9\u7ba1\u7406\u5458\u5bfb\u6c42\u5e2e\u52a9\u3002\nerror-swf-cors =\n    Ruffle \u65e0\u6cd5\u52a0\u8f7d Flash SWF \u6587\u4ef6\u3002\n    \u83b7\u53d6\u6743\u9650\u53ef\u80fd\u88ab CORS \u7b56\u7565\u963b\u6b62\u3002\n    \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u8bf7\u53c2\u8003 Ruffle Wiki \u83b7\u53d6\u5e2e\u52a9\u3002\nerror-wasm-cors =\n    Ruffle \u65e0\u6cd5\u52a0\u8f7d\u6240\u9700\u7684\u201c.wasm\u201d\u6587\u4ef6\u7ec4\u4ef6\u3002\n    \u83b7\u53d6\u6743\u9650\u53ef\u80fd\u88ab CORS \u7b56\u7565\u963b\u6b62\u3002\n    \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u8bf7\u67e5\u9605 Ruffle Wiki \u83b7\u53d6\u5e2e\u52a9\u3002\nerror-wasm-invalid =\n    Ruffle \u5728\u8bd5\u56fe\u521d\u59cb\u5316\u65f6\u9047\u5230\u4e86\u4e00\u4e2a\u91cd\u5927\u95ee\u9898\u3002\n    \u8fd9\u4e2a\u9875\u9762\u4f3c\u4e4e\u7f3a\u5c11\u6587\u4ef6\u6765\u8fd0\u884c Curl\u3002\n    \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u8bf7\u67e5\u9605 Ruffle Wiki \u83b7\u53d6\u5e2e\u52a9\u3002\nerror-wasm-download =\n    Ruffle \u5728\u8bd5\u56fe\u521d\u59cb\u5316\u65f6\u9047\u5230\u4e86\u4e00\u4e2a\u91cd\u5927\u95ee\u9898\u3002\n    \u8fd9\u901a\u5e38\u53ef\u4ee5\u81ea\u884c\u89e3\u51b3\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u3002\n    \u5426\u5219\u8bf7\u8054\u7cfb\u7f51\u7ad9\u7ba1\u7406\u5458\u3002\nerror-wasm-disabled-on-edge =\n    Ruffle \u65e0\u6cd5\u52a0\u8f7d\u6240\u9700\u7684 \u201c.wasm\u201d \u6587\u4ef6\u7ec4\u4ef6\u3002\n    \u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u6253\u5f00\u60a8\u7684\u6d4f\u89c8\u5668\u8bbe\u7f6e\uff0c\u5355\u51fb"\u9690\u79c1\u3001\u641c\u7d22\u548c\u670d\u52a1"\uff0c\u5411\u4e0b\u6eda\u52a8\u5e76\u5173\u95ed"\u589e\u5f3a Web \u5b89\u5168\u6027"\u3002\n    \u8fd9\u5c06\u5141\u8bb8\u60a8\u7684\u6d4f\u89c8\u5668\u52a0\u8f7d\u6240\u9700\u7684 \u201c.wasm\u201d \u6587\u4ef6\u3002\n    \u5982\u679c\u95ee\u9898\u4ecd\u7136\u5b58\u5728\uff0c\u60a8\u53ef\u80fd\u5fc5\u987b\u4f7f\u7528\u4e0d\u540c\u7684\u6d4f\u89c8\u5668\u3002\nerror-javascript-conflict =\n    Ruffle \u5728\u8bd5\u56fe\u521d\u59cb\u5316\u65f6\u9047\u5230\u4e86\u4e00\u4e2a\u91cd\u5927\u95ee\u9898\u3002\n    \u8fd9\u4e2a\u9875\u9762\u4f3c\u4e4e\u4f7f\u7528\u4e86\u4e0e Ruffle \u51b2\u7a81\u7684 JavaScript \u4ee3\u7801\u3002\n    \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5c1d\u8bd5\u5728\u7a7a\u767d\u9875\u9762\u4e0a\u52a0\u8f7d\u6587\u4ef6\u3002\nerror-javascript-conflict-outdated = \u60a8\u8fd8\u53ef\u4ee5\u5c1d\u8bd5\u4e0a\u4f20\u53ef\u80fd\u89c4\u907f\u8be5\u95ee\u9898\u7684\u6700\u65b0\u7248\u672c\u7684 (\u5f53\u524d\u6784\u5efa\u5df2\u8fc7\u65f6: { $buildDate })\u3002\nerror-csp-conflict =\n    Ruffle \u5728\u8bd5\u56fe\u521d\u59cb\u5316\u65f6\u9047\u5230\u4e86\u4e00\u4e2a\u91cd\u5927\u95ee\u9898\u3002\n    \u8be5\u7f51\u7ad9\u670d\u52a1\u5668\u7684\u5185\u5bb9\u5b89\u5168\u7b56\u7565\u4e0d\u5141\u8bb8\u8fd0\u884c\u6240\u9700\u7684 \u201c.wasm\u201d \u7ec4\u4ef6\u3002\n    \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u8bf7\u67e5\u9605 Ruffle Wiki \u83b7\u53d6\u5e2e\u52a9\u3002\nerror-unknown =\n    Ruffle \u5728\u8bd5\u56fe\u663e\u793a\u6b64 Flash \u5185\u5bb9\u65f6\u9047\u5230\u4e86\u4e00\u4e2a\u91cd\u5927\u95ee\u9898\u3002\n    { $outdated ->\n        [true] \u5982\u679c\u60a8\u662f\u670d\u52a1\u5668\u7ba1\u7406\u5458\uff0c\u8bf7\u5c1d\u8bd5\u4e0a\u4f20\u66f4\u65b0\u7684 Ruffle \u7248\u672c (\u5f53\u524d\u7248\u672c\u5df2\u8fc7\u65f6: { $buildDate }).\n       *[false] \u8fd9\u4e0d\u5e94\u8be5\u53d1\u751f\uff0c\u56e0\u6b64\u5982\u679c\u60a8\u53ef\u4ee5\u62a5\u544a\u9519\u8bef\uff0c\u6211\u4eec\u5c06\u975e\u5e38\u611f\u8c22\uff01\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \u786e\u5b9a\u8981\u5220\u9664\u6b64\u5b58\u6863\u5417\uff1f\nsave-reload-prompt =\n    \u4e3a\u4e86\u907f\u514d\u6f5c\u5728\u7684\u51b2\u7a81\uff0c{ $action ->\n        [delete] \u5220\u9664\n       *[replace] \u66ff\u6362\n    } \u6b64\u5b58\u6863\u6587\u4ef6\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u5f53\u524d\u5185\u5bb9\u3002\u662f\u5426\u4ecd\u7136\u7ee7\u7eed\uff1f\nsave-download = \u4e0b\u8f7d\nsave-replace = \u66ff\u6362\nsave-delete = \u5220\u9664\nsave-backup-all = \u4e0b\u8f7d\u6240\u6709\u5b58\u6863\u6587\u4ef6\n",
            "volume-controls.ftl": "volume-controls-mute = \u9759\u97f3\nvolume-controls-unmute = \u53d6\u6d88\u9759\u97f3\n"
        },
        "zh-TW": {
            "context_menu.ftl": "context-menu-download-swf = \u4e0b\u8f09SWF\u6a94\u6848\ncontext-menu-copy-debug-info = \u8907\u88fd\u9664\u932f\u8cc7\u8a0a\ncontext-menu-open-save-manager = \u958b\u555f\u5b58\u6a94\u7ba1\u7406\u5668\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] \u95dc\u65bcRuffle\u64f4\u5145\u529f\u80fd ({ $version })\n       *[other] \u95dc\u65bcRuffle ({ $version })\n    }\ncontext-menu-hide = \u96b1\u85cf\u83dc\u55ae\ncontext-menu-exit-fullscreen = \u9000\u51fa\u5168\u87a2\u5e55\ncontext-menu-enter-fullscreen = \u9032\u5165\u5168\u87a2\u5e55\ncontext-menu-volume-controls = \u97f3\u91cf\u63a7\u5236\n",
            "messages.ftl": 'message-cant-embed =\n    \u76ee\u524dRuffle\u6c92\u8fa6\u6cd5\u57f7\u884c\u5d4c\u5165\u5f0fFlash\u3002\n    \u4f60\u53ef\u4ee5\u5728\u65b0\u5206\u9801\u4e2d\u958b\u555f\u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c\u3002\npanic-title = \u5b8c\u86cb\uff0c\u51fa\u554f\u984c\u4e86 :(\nmore-info = \u66f4\u591a\u8cc7\u8a0a\nrun-anyway = \u76f4\u63a5\u57f7\u884c\ncontinue = \u7e7c\u7e8c\nreport-bug = \u56de\u5831BUG\nupdate-ruffle = \u66f4\u65b0Ruffle\nruffle-demo = \u7db2\u9801\u5c55\u793a\nruffle-desktop = \u684c\u9762\u61c9\u7528\u7a0b\u5f0f\nruffle-wiki = \u67e5\u770bRuffle Wiki\nenable-hardware-acceleration =\n    \u770b\u8d77\u4f86\u4f60\u7684\u786c\u9ad4\u52a0\u901f\u6c92\u6709\u958b\u555f\uff0c\u96d6\u7136Ruffle\u9084\u53ef\u4ee5\u57f7\u884c\uff0c\u4f46\u662f\u4f60\u6703\u611f\u89ba\u5230\u6703\u5f88\u6162\u3002\n    \u4f60\u53ef\u4ee5\u5728\u4e0b\u65b9\u9023\u7d50\u627e\u5230\u5982\u4f55\u958b\u555f\u786c\u9ad4\u52a0\u901f\u3002\nenable-hardware-acceleration-link = FAQ - Chrome\u786c\u9ad4\u52a0\u901f\nview-error-details = \u6aa2\u8996\u932f\u8aa4\u8a73\u7d30\u8cc7\u6599\nopen-in-new-tab = \u958b\u555f\u65b0\u589e\u5206\u9801\nclick-to-unmute = \u9ede\u64ca\u4ee5\u53d6\u6d88\u975c\u97f3\nclipboard-message-title = \u5728Ruffle\u57f7\u884c\u8907\u88fd\u3001\u8cbc\u4e0a\u3002\nclipboard-message-description =\n    { $variant ->\n       *[unsupported] \u4f60\u7684\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u5b8c\u6574\u526a\u8cbc\u7c3f\u4f7f\u7528,\n        [access-denied] \u526a\u8cbc\u7c3f\u4f7f\u7528\u6b0a\u88ab\u62d2\u7d55\u8a2a\u554f,\n    } \u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5feb\u6377\u9375:\nclipboard-message-copy = { " " } \u8907\u88fd\nclipboard-message-cut = { " " } \u526a\u4e0b\nclipboard-message-paste = { " " } \u8cbc\u4e0a\nerror-file-protocol =\n    \u770b\u8d77\u4f86\u4f60\u60f3\u8981\u7528Ruffle\u4f86\u57f7\u884c"file:"\u7684\u5354\u8b70\u3002\n    \u56e0\u70ba\u700f\u89bd\u5668\u7981\u4e86\u5f88\u591a\u529f\u80fd\u4ee5\u8cc7\u5b89\u7684\u7406\u7531\u4f86\u8b1b\u3002\n    \u6211\u5011\u5efa\u8b70\u4f60\u5efa\u7acb\u672c\u5730\u4f3a\u670d\u5668\u6216\u8457\u76f4\u63a5\u4f7f\u7528\u7db2\u9801\u5c55\u793a\u6216\u684c\u9762\u61c9\u7528\u7a0b\u5f0f\u3002\nerror-javascript-config =\n    \u76ee\u524dRuffle\u9047\u5230\u4e0d\u6b63\u78ba\u7684JavaScript\u914d\u7f6e\u3002\n    \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c\u6211\u5011\u5efa\u8b70\u4f60\u6aa2\u67e5\u54ea\u500b\u74b0\u7bc0\u51fa\u932f\u3002\n    \u6216\u8457\u4f60\u53ef\u4ee5\u67e5\u8a62Ruffle wiki\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-wasm-not-found =\n    \u76ee\u524dRuffle\u627e\u4e0d\u5230".wasm"\u6a94\u6848\u3002\n    \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c\u78ba\u4fdd\u6a94\u6848\u662f\u5426\u653e\u5c0d\u4f4d\u7f6e\u3002\n    \u5982\u679c\u9084\u662f\u6709\u554f\u984c\u7684\u8a71\uff0c\u4f60\u8981\u7528"publicPath"\u4f86\u8a2d\u5b9a: \u6216\u8457\u67e5\u8a62Ruffle wiki\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-wasm-mime-type =\n    \u76ee\u524dRuffle\u521d\u59cb\u5316\u6642\u9047\u5230\u91cd\u5927\u554f\u984c\u3002\n    \u9019\u7db2\u9801\u4f3a\u670d\u5668\u4e26\u6c92\u6709\u670d\u52d9".wasm"\u6a94\u6848\u6216\u6b63\u78ba\u7684\u7db2\u969b\u7db2\u8def\u5a92\u9ad4\u985e\u578b\u3002\n    \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c\u8acb\u67e5\u8a62Ruffle wiki\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-invalid-swf =\n    \u76ee\u524dRuffle\u7121\u6cd5\u8b80\u53d6Flash\u7684SWF\u6a94\u6848\u3002\n    \u5f88\u6709\u53ef\u80fd\u8981\u8b80\u53d6\u7684\u6a94\u6848\u4e26\u4e00\u500b\u4e0d\u662f\u6709\u6548\u7684SWF\u3002\nerror-swf-fetch =\n    \u76ee\u524dRuffle\u7121\u6cd5\u8b80\u53d6Flash\u7684SWF\u6a94\u6848\u3002\n    \u5f88\u6709\u53ef\u80fd\u8981\u8b80\u53d6\u7684\u6a94\u6848\u4e0d\u5b58\u5728\uff0c\u6240\u4ee5Ruffle\u8b80\u4e0d\u5230\u6771\u897f\u3002\n    \u8acb\u5617\u8a66\u6e9d\u901a\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-swf-cors =\n    \u76ee\u524dRuffle\u7121\u6cd5\u8b80\u53d6Flash\u7684SWF\u6a94\u6848\u3002\n    \u770b\u8d77\u4f86\u662f\u4f7f\u7528\u6b0a\u88ab\u8de8\u4f86\u6e90\u8cc7\u6e90\u5171\u7528\u6a5f\u5236\u88ab\u64cb\u5230\u4e86\u3002\n    \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c\u8acb\u67e5\u8a62Ruffle wiki\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-wasm-cors =\n    \u76ee\u524dRuffle\u7121\u6cd5\u8b80\u53d6".wasm"\u6a94\u6848\u3002\n    \u770b\u8d77\u4f86\u662f\u4f7f\u7528\u6b0a\u88ab\u8de8\u4f86\u6e90\u8cc7\u6e90\u5171\u7528\u6a5f\u5236\u88ab\u64cb\u5230\u4e86\u3002\n    \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c\u8acb\u67e5\u8a62Ruffle wiki\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-wasm-invalid =\n    \u76ee\u524dRuffle\u521d\u59cb\u5316\u6642\u9047\u5230\u91cd\u5927\u554f\u984c\u3002\n    \u770b\u8d77\u4f86\u9019\u7db2\u9801\u6709\u7f3a\u5931\u6a94\u6848\u5c0e\u81f4Ruffle\u7121\u6cd5\u904b\u884c\u3002\n    \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c\u8acb\u67e5\u8a62Ruffle wiki\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-wasm-download =\n    \u76ee\u524dRuffle\u521d\u59cb\u5316\u6642\u9047\u5230\u91cd\u5927\u554f\u984c\u3002\n    \u9019\u53ef\u4ee5\u4f60\u81ea\u5df1\u89e3\u6c7a\uff0c\u4f60\u53ea\u8981\u91cd\u65b0\u6574\u7406\u5c31\u597d\u4e86\u3002\n    \u5426\u5247\uff0c\u8acb\u5617\u8a66\u6e9d\u901a\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-wasm-disabled-on-edge =\n    \u76ee\u524dRuffle\u7121\u6cd5\u8b80\u53d6".wasm"\u6a94\u6848\u3002\n    \u8981\u4fee\u6b63\u7684\u8a71\uff0c\u6253\u958b\u4f60\u7684\u700f\u89bd\u5668\u8a2d\u5b9a\uff0c\u9ede\u9078"\u96b1\u79c1\u6b0a\u3001\u641c\u5c0b\u8207\u670d\u52d9"\uff0c\u628a"\u9632\u6b62\u8ffd\u8e64"\u7d66\u95dc\u6389\u3002\n    \u9019\u6a23\u4e00\u4f86\u4f60\u7684\u700f\u89bd\u5668\u6703\u8b80\u53d6\u9700\u8981\u7684".wasm"\u6a94\u6848\u3002\n    \u5982\u679c\u554f\u984c\u4e00\u76f4\u9084\u5728\u7684\u8a71\uff0c\u4f60\u5fc5\u9808\u8981\u63db\u700f\u89bd\u5668\u4e86\u3002\nerror-javascript-conflict =\n    \u76ee\u524dRuffle\u521d\u59cb\u5316\u6642\u9047\u5230\u91cd\u5927\u554f\u984c\u3002\n    \u770b\u8d77\u4f86\u9019\u7db2\u9801\u4f7f\u7528\u7684JavaScript\u6703\u8ddfRuffle\u8d77\u885d\u7a81\u3002\n    \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c\u6211\u5011\u5efa\u8b70\u4f60\u958b\u500b\u7a7a\u767d\u9801\u4f86\u6e2c\u8a66\u3002\nerror-javascript-conflict-outdated = \u4f60\u4e5f\u53ef\u4ee5\u4e0a\u50b3\u6700\u65b0\u7248\u7684Ruffle\uff0c\u8aaa\u4e0d\u5b9a\u4f60\u8981\u8aaa\u7684\u7684\u554f\u984c\u5df2\u7d93\u4e0d\u898b\u4e86(\u73fe\u5728\u4f7f\u7528\u7684\u7248\u672c\u5df2\u7d93\u904e\u6642: { $buildDate })\u3002\nerror-csp-conflict =\n    \u76ee\u524dRuffle\u521d\u59cb\u5316\u6642\u9047\u5230\u91cd\u5927\u554f\u984c\u3002\n    \u9019\u7db2\u9801\u4f3a\u670d\u5668\u88ab\u8de8\u4f86\u6e90\u8cc7\u6e90\u5171\u7528\u6a5f\u5236\u7981\u6b62\u8b80\u53d6".wasm"\u6a94\u6848\u3002\n    \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c\u8acb\u67e5\u8a62Ruffle wiki\u5f97\u5230\u9700\u6c42\u5e6b\u52a9\u3002\nerror-unknown =\n    \u76ee\u524dRuffle\u521d\u59cb\u5316\u8981\u8b80\u53d6Flash\u5167\u5bb9\u6642\u9047\u5230\u91cd\u5927\u554f\u984c\n    { $outdated ->\n        [true] \u5982\u679c\u4f60\u662f\u4f3a\u670d\u5668\u7ba1\u7406\u54e1\uff0c \u8acb\u4e0a\u50b3\u6700\u65b0\u7248\u7684Ruffle(\u73fe\u5728\u4f7f\u7528\u7684\u7248\u672c\u5df2\u7d93\u904e\u6642: { $buildDate }).\n       *[false] \u9019\u4e0d\u61c9\u8a72\u767c\u751f\u7684\uff0c\u6211\u5011\u4e5f\u5f88\u9ad8\u8208\u4f60\u544a\u77e5bug!\n    }\n',
            "save-manager.ftl": "save-delete-prompt = \u4f60\u78ba\u5b9a\u8981\u522a\u9664\u9019\u500b\u5b58\u6a94\u55ce\uff1f\nsave-reload-prompt =\n    \u552f\u4e00\u65b9\u6cd5\u53ea\u6709 { $action ->\n        [delete] \u522a\u9664\n       *[replace] \u53d6\u4ee3\n    } \u9019\u500b\u5b58\u6a94\u4e0d\u6703\u5b8c\u5168\u53d6\u4ee3\u76f4\u5230\u91cd\u65b0\u555f\u52d5. \u4f60\u9700\u8981\u7e7c\u7e8c\u55ce?\nsave-download = \u4e0b\u8f09\nsave-replace = \u53d6\u4ee3\nsave-delete = \u522a\u9664\nsave-backup-all = \u4e0b\u8f09\u6240\u6709\u5b58\u6a94\u6a94\u6848\u3002\n",
            "volume-controls.ftl": "volume-controls-mute = \u975c\u97f3\nvolume-controls-unmute = \u53d6\u6d88\u975c\u97f3\n"
        }
    }
      , be = {};
    for (const [e,n] of Object.entries(ge)) {
        const t = new W(e);
        if (n)
            for (const [a,r] of Object.entries(n))
                if (r)
                    for (const n of t.addResource(new ce(r)))
                        console.error(`Error in text for ${e} ${a}: ${n}`);
        be[e] = t
    }
    function we(e, n, t) {
        const a = be[e];
        if (void 0 !== a) {
            const e = a.getMessage(n);
            if (void 0 !== e && e.value)
                return a.formatPattern(e.value, t)
        }
        return null
    }
    function ke(e, n) {
        const t = ve(navigator.languages, Object.keys(be), {
            defaultLocale: "en-US"
        });
        for (const a in t) {
            const r = we(t[a], e, n);
            if (r)
                return r
        }
        return console.error(`Unknown text key '${e}'`),
        e
    }
    function ye(e, n) {
        const t = document.createElement("div");
        return ke(e, n).split("\n").forEach((e => {
            const n = document.createElement("p");
            n.innerText = e,
            t.appendChild(n)
        }
        )),
        t
    }
    const Re = navigator.userAgent.includes("Mac OS X") ? "Command" : "Ctrl";
    const xe = document.createElement("template");
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsx)("style", {
            children: ":host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:left;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgba(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgba(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgba(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(\n        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))\n    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E\");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgba(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E\")}#replace-save{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E\")}#delete-save{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E\")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E\")}#volume-min{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E\")}#volume-mid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E\")}#volume-max{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E\")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}"
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsx)("style", {
            id: "dynamic-styles"
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsxs)("div", {
            id: "container",
            children: [(0,
            b.jsx)("div", {
                id: "play-button",
                children: (0,
                b.jsx)("div", {
                    class: "icon",
                    children: (0,
                    b.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "xMidYMid",
                        viewBox: "0 0 250 250",
                        width: "100%",
                        height: "100%",
                        children: [(0,
                        b.jsxs)("defs", {
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            b.jsxs)("linearGradient", {
                                xmlns: "http://www.w3.org/2000/svg",
                                id: "a",
                                gradientUnits: "userSpaceOnUse",
                                x1: "125",
                                y1: "0",
                                x2: "125",
                                y2: "250",
                                spreadMethod: "pad",
                                children: [(0,
                                b.jsx)("stop", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    offset: "0%",
                                    "stop-color": "#FDA138"
                                }), (0,
                                b.jsx)("stop", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    offset: "100%",
                                    "stop-color": "#FD3A40"
                                })]
                            }), (0,
                            b.jsxs)("g", {
                                xmlns: "http://www.w3.org/2000/svg",
                                id: "b",
                                children: [(0,
                                b.jsx)("path", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "url(#a)",
                                    d: "M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"
                                }), (0,
                                b.jsx)("path", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "#FFF",
                                    d: "M87 55v140l100-70L87 55z"
                                })]
                            })]
                        }), (0,
                        b.jsx)("use", {
                            xmlns: "http://www.w3.org/2000/svg",
                            href: "#b"
                        })]
                    })
                })
            }), (0,
            b.jsxs)("div", {
                id: "unmute-overlay",
                children: [(0,
                b.jsx)("div", {
                    class: "background"
                }), (0,
                b.jsx)("div", {
                    class: "icon",
                    children: (0,
                    b.jsxs)("svg", {
                        id: "unmute-overlay-svg",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "xMidYMid",
                        viewBox: "0 0 512 584",
                        width: "100%",
                        height: "100%",
                        children: [(0,
                        b.jsx)("path", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "#FFF",
                            stroke: "#FFF",
                            d: "m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"
                        }), (0,
                        b.jsx)("path", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "#FFF",
                            stroke: "#FFF",
                            d: "m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"
                        }), (0,
                        b.jsx)("path", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "#FFF",
                            stroke: "#FFF",
                            d: "m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"
                        }), (0,
                        b.jsx)("text", {
                            xmlns: "http://www.w3.org/2000/svg",
                            id: "unmute-text",
                            x: "256",
                            y: "560",
                            "text-anchor": "middle",
                            "font-size": "60px",
                            fill: "#FFF",
                            stroke: "#FFF",
                            children: "Click to unmute"
                        })]
                    })
                })]
            }), (0,
            b.jsx)("input", {
                "aria-hidden": "true",
                id: "virtual-keyboard",
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitalize: "none"
            })]
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsxs)("div", {
            id: "splash-screen",
            class: "hidden",
            children: [(0,
            b.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "logo",
                preserveAspectRatio: "xMidYMid",
                viewBox: "0 0 380 150",
                children: (0,
                b.jsxs)("g", {
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                    b.jsx)("path", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "#966214",
                        d: "M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"
                    }), (0,
                    b.jsx)("path", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "var(--ruffle-orange)",
                        d: "M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"
                    })]
                })
            }), (0,
            b.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "loading-animation",
                viewBox: "0 0 66 66",
                children: (0,
                b.jsx)("circle", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "spinner",
                    fill: "none",
                    "stroke-width": "6",
                    "stroke-linecap": "round",
                    cx: "33",
                    cy: "33",
                    r: "30"
                })
            }), (0,
            b.jsx)("div", {
                class: "loadbar",
                children: (0,
                b.jsx)("div", {
                    class: "loadbar-inner"
                })
            })]
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsx)("div", {
            id: "save-manager",
            class: "modal hidden",
            children: (0,
            b.jsxs)("div", {
                id: "modal-area",
                class: "modal-area",
                children: [(0,
                b.jsx)("span", {
                    class: "close-modal"
                }), (0,
                b.jsx)("div", {
                    class: "general-save-options",
                    children: (0,
                    b.jsx)("span", {
                        class: "modal-button"
                    })
                }), (0,
                b.jsx)("table", {
                    id: "local-saves"
                })]
            })
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsx)("div", {
            id: "volume-controls-modal",
            class: "modal hidden",
            children: (0,
            b.jsx)("div", {
                class: "modal-area",
                children: (0,
                b.jsxs)("div", {
                    id: "volume-controls",
                    children: [(0,
                    b.jsx)("input", {
                        id: "mute-checkbox",
                        type: "checkbox"
                    }), (0,
                    b.jsx)("label", {
                        id: "volume-mute",
                        for: "mute-checkbox",
                        title: ke("volume-controls-unmute")
                    }), (0,
                    b.jsx)("label", {
                        id: "volume-min",
                        for: "mute-checkbox",
                        title: ke("volume-controls-mute")
                    }), (0,
                    b.jsx)("label", {
                        id: "volume-mid",
                        for: "mute-checkbox",
                        title: ke("volume-controls-mute")
                    }), (0,
                    b.jsx)("label", {
                        id: "volume-max",
                        for: "mute-checkbox",
                        title: ke("volume-controls-mute")
                    }), (0,
                    b.jsx)("input", {
                        id: "volume-slider",
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "1"
                    }), (0,
                    b.jsx)("span", {
                        id: "volume-slider-text"
                    }), (0,
                    b.jsx)("span", {
                        class: "close-modal"
                    })]
                })
            })
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsx)("div", {
            id: "video-modal",
            class: "modal hidden",
            children: (0,
            b.jsxs)("div", {
                class: "modal-area",
                children: [(0,
                b.jsx)("span", {
                    class: "close-modal"
                }), (0,
                b.jsx)("div", {
                    id: "video-holder"
                })]
            })
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsx)("div", {
            id: "hardware-acceleration-modal",
            class: "modal hidden",
            children: (0,
            b.jsxs)("div", {
                class: "modal-area",
                children: [(0,
                b.jsx)("span", {
                    class: "close-modal"
                }), (0,
                b.jsx)("span", {
                    id: "acceleration-text",
                    children: ke("enable-hardware-acceleration")
                }), (0,
                b.jsx)("a", {
                    href: "https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",
                    target: "_blank",
                    class: "modal-button",
                    children: ke("enable-hardware-acceleration-link")
                })]
            })
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsx)("div", {
            id: "clipboard-modal",
            class: "modal hidden",
            children: (0,
            b.jsxs)("div", {
                class: "modal-area",
                children: [(0,
                b.jsx)("span", {
                    class: "close-modal"
                }), (0,
                b.jsx)("h2", {
                    children: ke("clipboard-message-title")
                }), (0,
                b.jsx)("p", {
                    id: "clipboard-modal-description"
                }), (0,
                b.jsxs)("p", {
                    children: [(0,
                    b.jsxs)("b", {
                        children: [Re, "+C"]
                    }), (0,
                    b.jsx)("span", {
                        children: ke("clipboard-message-copy")
                    })]
                }), (0,
                b.jsxs)("p", {
                    children: [(0,
                    b.jsxs)("b", {
                        children: [Re, "+X"]
                    }), (0,
                    b.jsx)("span", {
                        children: ke("clipboard-message-cut")
                    })]
                }), (0,
                b.jsxs)("p", {
                    children: [(0,
                    b.jsxs)("b", {
                        children: [Re, "+V"]
                    }), (0,
                    b.jsx)("span", {
                        children: ke("clipboard-message-paste")
                    })]
                })]
            })
        })
    }
    ), {})),
    xe.content.appendChild((0,
    b.jsx)((function() {
        return (0,
        b.jsx)("div", {
            id: "context-menu-overlay",
            class: "hidden",
            children: (0,
            b.jsx)("ul", {
                id: "context-menu"
            })
        })
    }
    ), {}));
    const ze = "application/x-shockwave-flash"
      , je = "application/futuresplash"
      , Se = "application/x-shockwave-flash2-preview"
      , Ee = "application/vnd.adobe.flash.movie";
    function Ce(e, n) {
        const t = function(e) {
            let n = "";
            try {
                n = new URL(e,"https://example.com").pathname
            } catch (e) {}
            if (n && n.length >= 4) {
                const e = n.slice(-4).toLowerCase();
                if (".swf" === e || ".spl" === e)
                    return !0
            }
            return !1
        }(e);
        return n ? function(e, n) {
            switch (e = e.toLowerCase()) {
            case ze.toLowerCase():
            case je.toLowerCase():
            case Se.toLowerCase():
            case Ee.toLowerCase():
                return !0;
            default:
                if (n)
                    switch (e) {
                    case "application/octet-stream":
                    case "binary/octet-stream":
                        return !0
                    }
            }
            return !1
        }(n, t) : t
    }
    let Ae = null
      , qe = !1;
    try {
        if (void 0 !== document.currentScript && null !== document.currentScript && "src"in document.currentScript && "" !== document.currentScript.src) {
            let e = document.currentScript.src;
            e.endsWith(".js") || e.endsWith("/") || (e += "/"),
            Ae = new URL(".",e),
            qe = Ae.protocol.includes("extension")
        }
    } catch (e) {
        console.warn("Unable to get currentScript URL")
    }
    const Fe = {
        versionNumber: "0.1.0",
        versionName: "nightly 2024-08-27",
        versionChannel: "nightly",
        buildDate: "2024-08-27T00:05:43.915Z",
        commitHash: "713224c4652e97c1f109266af5606be814219996"
    }
      , De = "https://ruffle.rs";
    class Pe extends Error {
        constructor(e) {
            super(`Failed to fetch ${e}`),
            this.swfUrl = e,
            this.swfUrl = e
        }
    }
    class Oe extends Error {
        constructor(e) {
            super(`Not a valid swf: ${e}`)
        }
    }
    class $e extends Error {
        constructor(e) {
            super("Failed to load Ruffle WASM"),
            this.cause = e
        }
    }
    class Me extends Error {
        constructor(e) {
            super(`Invalid options: ${e}`)
        }
    }
    var Ie = r(29);
    function Te() {
        const e = new Date(Fe.buildDate)
          , n = new Date;
        return n.setMonth(n.getMonth() - 6),
        n > e
    }
    const We = {
        OpenDemo: {
            type: "open_link",
            url: De + "/demo",
            label: ke("ruffle-demo")
        },
        DownloadDesktop: {
            type: "open_link",
            url: De + "/downloads#desktop-app",
            label: ke("ruffle-desktop")
        },
        UpdateRuffle: {
            type: "open_link",
            url: De + "/downloads",
            label: ke("update-ruffle")
        },
        CreateReport: {
            type: "create_report"
        },
        ShowDetails: {
            type: "show_details"
        },
        createReportOrUpdate() {
            return Te() ? this.UpdateRuffle : this.CreateReport
        },
        openWiki: (e, n) => ({
            type: "open_link",
            url: `https://github.com/ruffle-rs/ruffle/wiki/${e}`,
            label: n ?? ke("ruffle-wiki")
        })
    };
    function Le(e, n, t, a) {
        const r = t.join("");
        let {body: o, actions: i} = function(e) {
            if (e instanceof Pe)
                return e.swfUrl && !e.swfUrl.protocol.includes("http") ? {
                    body: ye("error-file-protocol"),
                    actions: [We.OpenDemo, We.DownloadDesktop]
                } : window.location.origin === e.swfUrl?.origin || window.location.protocol.includes("extension") ? {
                    body: ye("error-swf-fetch"),
                    actions: [We.ShowDetails]
                } : {
                    body: ye("error-swf-cors"),
                    actions: [We.openWiki("Using-Ruffle#configure-cors-header"), We.ShowDetails]
                };
            if (e instanceof Oe)
                return {
                    body: ye("error-invalid-swf"),
                    actions: [We.ShowDetails]
                };
            if (e instanceof $e) {
                if ("file:" === window.location.protocol)
                    return {
                        body: ye("error-file-protocol"),
                        actions: [We.OpenDemo, We.DownloadDesktop]
                    };
                const n = String(e.cause.message).toLowerCase();
                if (n.includes("mime"))
                    return {
                        body: ye("error-wasm-mime-type"),
                        actions: [We.openWiki("Using-Ruffle#configure-webassembly-mime-type"), We.ShowDetails]
                    };
                if (n.includes("networkerror") || n.includes("failed to fetch"))
                    return {
                        body: ye("error-wasm-cors"),
                        actions: [We.openWiki("Using-Ruffle#configure-cors-header"), We.ShowDetails]
                    };
                if (n.includes("disallowed by embedder"))
                    return {
                        body: ye("error-csp-conflict"),
                        actions: [We.openWiki("Using-Ruffle#configure-wasm-csp"), We.ShowDetails]
                    };
                if ("CompileError" === e.cause.name)
                    return {
                        body: ye("error-wasm-invalid"),
                        actions: [We.openWiki("Using-Ruffle#addressing-a-compileerror"), We.ShowDetails]
                    };
                if (n.includes("could not download wasm module") && "TypeError" === e.cause.name)
                    return {
                        body: ye("error-wasm-download"),
                        actions: [We.ShowDetails]
                    };
                if ("TypeError" === e.cause.name) {
                    const e = ye("error-javascript-conflict");
                    return Te() && e.appendChild(ye("error-javascript-conflict-outdated", {
                        buildDate: Fe.buildDate
                    })),
                    {
                        body: e,
                        actions: [We.createReportOrUpdate(), We.ShowDetails]
                    }
                }
                return navigator.userAgent.includes("Edg") && n.includes("webassembly is not defined") ? {
                    body: ye("error-wasm-disabled-on-edge"),
                    actions: [We.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error", ke("more-info")), We.ShowDetails]
                } : {
                    body: ye("error-wasm-not-found"),
                    actions: [We.openWiki("Using-Ruffle#configuration-options"), We.ShowDetails]
                }
            }
            return e instanceof Me ? {
                body: ye("error-javascript-config"),
                actions: [We.openWiki("Using-Ruffle#javascript-api"), We.ShowDetails]
            } : {
                body: ye("error-unknown", {
                    buildDate: Fe.buildDate,
                    outdated: String(Te)
                }),
                actions: [We.createReportOrUpdate(), We.ShowDetails]
            }
        }(n);
        const s = (0,
        Ie.createRef)()
          , l = () => {
            s.current.classList.add("details"),
            s.current.replaceChildren((0,
            b.jsx)("textarea", {
                readOnly: !0,
                children: r
            }))
        }
        ;
        e.textContent = "",
        e.appendChild((0,
        b.jsxs)("div", {
            id: "panic",
            children: [(0,
            b.jsx)("div", {
                id: "panic-title",
                children: ke("panic-title")
            }), (0,
            b.jsx)("div", {
                id: "panic-body",
                ref: s,
                children: o
            }), (0,
            b.jsx)("div", {
                id: "panic-footer",
                children: (0,
                b.jsx)("ul", {
                    children: i.map((e => function({action: e, showDetails: n, errorArray: t, errorText: a, swfUrl: r}) {
                        if ("show_details" == e.type) {
                            const e = () => (n(),
                            !1);
                            return (0,
                            b.jsx)("li", {
                                children: (0,
                                b.jsx)("a", {
                                    href: "#",
                                    id: "panic-view-details",
                                    onClick: e,
                                    children: ke("view-error-details")
                                })
                            })
                        }
                        if ("open_link" == e.type)
                            return (0,
                            b.jsx)("li", {
                                children: (0,
                                b.jsx)("a", {
                                    href: e.url,
                                    target: "_top",
                                    children: e.label
                                })
                            });
                        {
                            let e;
                            e = document.location.protocol.includes("extension") && r ? r.href : document.location.href,
                            e = e.split(/[?#]/, 1)[0];
                            let n = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${e}`)}&template=error_report.md&labels=error-report&body=`
                              , o = encodeURIComponent(a);
                            return t.stackIndex > -1 && String(n + o).length > 8195 && (t[t.stackIndex] = null,
                            t.avmStackIndex > -1 && (t[t.avmStackIndex] = null),
                            o = encodeURIComponent(t.join(""))),
                            n += o,
                            (0,
                            b.jsx)("li", {
                                children: (0,
                                b.jsx)("a", {
                                    href: n,
                                    target: "_top",
                                    children: ke("report-bug")
                                })
                            })
                        }
                    }({
                        action: e,
                        showDetails: l,
                        errorText: r,
                        errorArray: t,
                        swfUrl: a
                    })))
                })
            })]
        }))
    }
    const _e = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11]))
      , Ue = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1, 5, 0, 208, 112, 26, 11]))
      , Ne = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11]))
      , Be = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11]))
      , Je = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));
    function Ve(e) {
        const n = "function" == typeof Function.prototype.toString ? Function.prototype.toString() : null;
        return "string" == typeof n && n.indexOf("[native code]") >= 0 && Function.prototype.toString.call(e).indexOf("[native code]") >= 0
    }
    function He() {
        "function" == typeof Array.prototype.reduce && Ve(Array.prototype.reduce) || Object.defineProperty(Array.prototype, "reduce", {
            value(...e) {
                if (0 === e.length && window.Prototype && window.Prototype.Version && window.Prototype.Version < "1.6.1")
                    return this.length > 1 ? this : this[0];
                const n = e[0];
                if (null === this)
                    throw new TypeError("Array.prototype.reduce called on null or undefined");
                if ("function" != typeof n)
                    throw new TypeError(`${n} is not a function`);
                const t = Object(this)
                  , a = t.length >>> 0;
                let r, o = 0;
                if (e.length >= 2)
                    r = e[1];
                else {
                    for (; o < a && !(o in t); )
                        o++;
                    if (o >= a)
                        throw new TypeError("Reduce of empty array with no initial value");
                    r = t[o++]
                }
                for (; o < a; )
                    o in t && (r = n(r, t[o], o, t)),
                    o++;
                return r
            }
        }),
        "function" == typeof Window && Ve(Window) || "function" == typeof window.constructor && Ve(window.constructor) && (window.Window = window.constructor),
        void 0 !== window.Reflect && null !== window.Reflect || (window.Reflect = {}),
        "function" != typeof Reflect.get && Object.defineProperty(Reflect, "get", {
            value: (e, n) => e[n]
        }),
        "function" != typeof Reflect.set && Object.defineProperty(Reflect, "set", {
            value(e, n, t) {
                e[n] = t
            }
        }),
        "function" != typeof Reflect.has && Object.defineProperty(Reflect, "has", {
            value: (e, n) => n in e
        }),
        "function" != typeof Reflect.ownKeys && Object.defineProperty(Reflect, "ownKeys", {
            value: e => [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)]
        })
    }
    let Ze = null;
    async function Ke(e) {
        null === Ze && (Ze = async function(e) {
            He();
            const n = (await Promise.all([_e(), Je(), Ne(), Be(), Ue()])).every(Boolean);
            n || console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),
            In.options.onFirstLoad?.(),
            In.options.onFirstLoad = () => {}
            ;
            const {default: t, RuffleInstanceBuilder: a, ZipWriter: o} = await (n ? r.e(69).then(r.bind(r, 69)) : r.e(655).then(r.bind(r, 655)));
            let i;
            const s = n ? new URL(r(791),r.b) : new URL(r(797),r.b)
              , l = await fetch(s)
              , u = "function" == typeof ReadableStreamDefaultController;
            if (e && u) {
                const n = l?.headers?.get("content-length") || "";
                let t = 0;
                const a = parseInt(n);
                i = new Response(new ReadableStream({
                    async start(n) {
                        const r = l.body?.getReader();
                        if (!r)
                            throw "Response had no body";
                        for (e(t, a); ; ) {
                            const {done: o, value: i} = await r.read();
                            if (o)
                                break;
                            i?.byteLength && (t += i?.byteLength),
                            n.enqueue(i),
                            e(t, a)
                        }
                        n.close()
                    }
                }),l)
            } else
                i = l;
            return await t(i),
            [a, o]
        }(e));
        const n = await Ze;
        return [new n[0], () => new n[1]]
    }
    const Qe = {};
    function Ge(e, n) {
        const t = Qe[e];
        if (void 0 !== t) {
            if (t.class !== n)
                throw new Error("Internal naming conflict on " + e);
            return t.name
        }
        let a = 0;
        if (void 0 !== window.customElements)
            for (; a < 999; ) {
                let t = e;
                if (a > 0 && (t = t + "-" + a),
                void 0 === window.customElements.get(t))
                    return window.customElements.define(t, n),
                    Qe[e] = {
                        class: n,
                        name: t,
                        internalName: e
                    },
                    t;
                a += 1
            }
        throw new Error("Failed to assign custom element " + e)
    }
    function Ye(e) {
        return null != e
    }
    function Xe(e, n) {
        if (Ye(n.allowScriptAccess) && e.setAllowScriptAccess(n.allowScriptAccess),
        Ye(n.backgroundColor) && e.setBackgroundColor(function(e) {
            e.startsWith("#") && (e = e.substring(1));
            if (e.length < 6)
                return;
            let n = 0;
            for (let t = 0; t < 6; t++) {
                const a = parseInt(e[t], 16);
                isNaN(a) ? n <<= 4 : n = n << 4 | a
            }
            return n
        }(n.backgroundColor)),
        Ye(n.upgradeToHttps) && e.setUpgradeToHttps(n.upgradeToHttps),
        Ye(n.compatibilityRules) && e.setCompatibilityRules(n.compatibilityRules),
        Ye(n.letterbox) && e.setLetterbox(n.letterbox.toLowerCase()),
        Ye(n.base) && e.setBaseUrl(n.base),
        Ye(n.menu) && e.setShowMenu(n.menu),
        Ye(n.allowFullscreen) && e.setAllowFullscreen(n.allowFullscreen),
        Ye(n.salign) && e.setStageAlign(n.salign.toLowerCase()),
        Ye(n.forceAlign) && e.setForceAlign(n.forceAlign),
        Ye(n.quality) ? e.setQuality(n.quality.toLowerCase()) : void 0 !== window.orientation && (console.log("Running on a mobile device; defaulting to low quality"),
        e.setQuality("low")),
        Ye(n.scale) && e.setScale(n.scale.toLowerCase()),
        Ye(n.forceScale) && e.setForceScale(n.forceScale),
        Ye(n.frameRate) && e.setFrameRate(n.frameRate),
        Ye(n.wmode) && e.setWmode(n.wmode),
        Ye(n.logLevel) && e.setLogLevel(n.logLevel),
        Ye(n.maxExecutionDuration) && e.setMaxExecutionDuration(function(e) {
            if ("number" == typeof e)
                return e;
            return e.secs
        }(n.maxExecutionDuration)),
        Ye(n.playerVersion) && e.setPlayerVersion(n.playerVersion),
        Ye(n.preferredRenderer) && e.setPreferredRenderer(n.preferredRenderer),
        Ye(n.openUrlMode) && e.setOpenUrlMode(n.openUrlMode.toLowerCase()),
        Ye(n.allowNetworking) && e.setAllowNetworking(n.allowNetworking.toLowerCase()),
        Ye(n.credentialAllowList) && e.setCredentialAllowList(n.credentialAllowList),
        Ye(n.playerRuntime) && e.setPlayerRuntime(n.playerRuntime),
        Ye(n.socketProxy))
            for (const t of n.socketProxy)
                e.addSocketProxy(t.host, t.port, t.proxyUrl)
    }
    const en = {
        allowScriptAccess: !1,
        parameters: {},
        autoplay: l.Auto,
        backgroundColor: null,
        letterbox: u.Fullscreen,
        unmuteOverlay: c.Visible,
        upgradeToHttps: !0,
        compatibilityRules: !0,
        favorFlash: !0,
        warnOnUnsupportedContent: !0,
        logLevel: d.Error,
        showSwfDownload: !1,
        contextMenu: p.On,
        preloader: !0,
        splashScreen: !0,
        maxExecutionDuration: 15,
        base: null,
        menu: !0,
        allowFullscreen: !1,
        salign: "",
        forceAlign: !1,
        quality: "high",
        scale: "showAll",
        forceScale: !1,
        frameRate: null,
        wmode: f.Window,
        publicPath: null,
        polyfills: !0,
        playerVersion: null,
        preferredRenderer: null,
        openUrlMode: v.Allow,
        allowNetworking: g.All,
        openInNewTab: null,
        socketProxy: [],
        fontSources: [],
        defaultFonts: {},
        credentialAllowList: [],
        playerRuntime: h.FlashPlayer
    }
      , nn = /^\s*(\d+(\.\d+)?(%)?)/;
    let tn = !1;
    function an(e) {
        if (null == e)
            return {};
        e instanceof URLSearchParams || (e = new URLSearchParams(e));
        const n = {};
        for (const [t,a] of e)
            n[t] = a.toString();
        return n
    }
    class rn {
        constructor(e, n) {
            this.x = e,
            this.y = n
        }
        distanceTo(e) {
            const n = e.x - this.x
              , t = e.y - this.y;
            return Math.sqrt(n * n + t * t)
        }
    }
    class on {
        constructor(e, n, t) {
            this.contextMenuForceDisabled = !1,
            this.isTouch = !1,
            this.contextMenuSupported = !1,
            this._suppressContextMenu = !1,
            this.panicked = !1,
            this.rendererDebugInfo = "",
            this.longPressTimer = null,
            this.pointerDownPosition = null,
            this.pointerMoveMaxDistance = 0,
            this.config = {},
            this.element = e,
            this.debugPlayerInfo = n,
            this.onCallbackAvailable = t,
            this.shadow = this.element.attachShadow({
                mode: "open"
            }),
            this.shadow.appendChild(xe.content.cloneNode(!0)),
            this.dynamicStyles = this.shadow.getElementById("dynamic-styles"),
            this.container = this.shadow.getElementById("container"),
            this.playButton = this.shadow.getElementById("play-button"),
            this.playButton.addEventListener("click", ( () => this.play())),
            this.unmuteOverlay = this.shadow.getElementById("unmute-overlay"),
            this.splashScreen = this.shadow.getElementById("splash-screen"),
            this.virtualKeyboard = this.shadow.getElementById("virtual-keyboard"),
            this.virtualKeyboard.addEventListener("input", this.virtualKeyboardInput.bind(this)),
            this.saveManager = this.shadow.getElementById("save-manager"),
            this.videoModal = this.shadow.getElementById("video-modal"),
            this.hardwareAccelerationModal = this.shadow.getElementById("hardware-acceleration-modal"),
            this.volumeControls = this.shadow.getElementById("volume-controls-modal"),
            this.clipboardModal = this.shadow.getElementById("clipboard-modal"),
            this.addModalJavaScript(this.saveManager),
            this.addModalJavaScript(this.volumeControls),
            this.addModalJavaScript(this.videoModal),
            this.addModalJavaScript(this.hardwareAccelerationModal),
            this.addModalJavaScript(this.clipboardModal),
            this.volumeSettings = new ln(!1,100),
            this.addVolumeControlsJavaScript(this.volumeControls);
            const a = this.saveManager.querySelector(".modal-button");
            a && (a.addEventListener("click", this.backupSaves.bind(this)),
            a.innerText = ke("save-backup-all"));
            const r = this.unmuteOverlay.querySelector("#unmute-overlay-svg");
            if (r) {
                r.querySelector("#unmute-text").textContent = ke("click-to-unmute")
            }
            this.contextMenuOverlay = this.shadow.getElementById("context-menu-overlay"),
            this.contextMenuElement = this.shadow.getElementById("context-menu");
            const o = e => {
                e.preventDefault(),
                e.stopPropagation()
            }
            ;
            this.contextMenuElement.addEventListener("contextmenu", o),
            this.contextMenuElement.addEventListener("click", o),
            document.documentElement.addEventListener("pointerdown", this.checkIfTouch.bind(this)),
            this.element.addEventListener("contextmenu", this.showContextMenu.bind(this)),
            this.container.addEventListener("pointerdown", this.pointerDown.bind(this)),
            this.container.addEventListener("pointermove", this.checkLongPressMovement.bind(this)),
            this.container.addEventListener("pointerup", this.checkLongPress.bind(this)),
            this.container.addEventListener("pointercancel", this.clearLongPressTimer.bind(this)),
            this.element.addEventListener("fullscreenchange", this.fullScreenChange.bind(this)),
            this.element.addEventListener("webkitfullscreenchange", this.fullScreenChange.bind(this)),
            this.instance = null,
            this.newZipWriter = null,
            this.onFSCommand = null,
            this._readyState = sn.HaveNothing,
            this.metadata = null,
            this.lastActivePlayingState = !1,
            this.setupPauseOnTabHidden()
        }
        addModalJavaScript(e) {
            const n = e.querySelector("#video-holder")
              , t = () => {
                e.classList.add("hidden"),
                n && (n.textContent = "")
            }
            ;
            e.parentNode.addEventListener("click", t);
            const a = e.querySelector(".modal-area");
            a && a.addEventListener("click", (e => e.stopPropagation()));
            const r = e.querySelector(".close-modal");
            r && r.addEventListener("click", t)
        }
        addVolumeControlsJavaScript(e) {
            const n = e.querySelector("#mute-checkbox")
              , t = e.querySelector("#volume-mute")
              , a = [e.querySelector("#volume-min"), e.querySelector("#volume-mid"), e.querySelector("#volume-max")]
              , r = e.querySelector("#volume-slider")
              , o = e.querySelector("#volume-slider-text")
              , i = () => {
                if (this.volumeSettings.isMuted)
                    t.style.display = "inline",
                    a.forEach((e => {
                        e.style.display = "none"
                    }
                    ));
                else {
                    t.style.display = "none";
                    const e = Math.round(this.volumeSettings.volume / 50);
                    a.forEach(( (n, t) => {
                        n.style.display = t === e ? "inline" : "none"
                    }
                    ))
                }
            }
            ;
            n.checked = this.volumeSettings.isMuted,
            r.disabled = n.checked,
            r.valueAsNumber = this.volumeSettings.volume,
            o.textContent = r.value + "%",
            i(),
            n.addEventListener("change", ( () => {
                r.disabled = n.checked,
                this.volumeSettings.isMuted = n.checked,
                this.instance?.set_volume(this.volumeSettings.get_volume()),
                i()
            }
            )),
            r.addEventListener("input", ( () => {
                o.textContent = r.value + "%",
                this.volumeSettings.volume = r.valueAsNumber,
                this.instance?.set_volume(this.volumeSettings.get_volume()),
                i()
            }
            ))
        }
        setupPauseOnTabHidden() {
            document.addEventListener("visibilitychange", ( () => {
                this.instance && (document.hidden && (this.lastActivePlayingState = this.instance.is_playing(),
                this.instance.pause()),
                document.hidden || !0 !== this.lastActivePlayingState || this.instance.play())
            }
            ), !1)
        }
        updateStyles() {
            if (this.dynamicStyles.sheet) {
                if (this.dynamicStyles.sheet.cssRules)
                    for (let e = this.dynamicStyles.sheet.cssRules.length - 1; e >= 0; e--)
                        this.dynamicStyles.sheet.deleteRule(e);
                const e = this.element.attributes.getNamedItem("width");
                if (null != e) {
                    const n = on.htmlDimensionToCssDimension(e.value);
                    null !== n && this.dynamicStyles.sheet.insertRule(`:host { width: ${n}; }`)
                }
                const n = this.element.attributes.getNamedItem("height");
                if (null != n) {
                    const e = on.htmlDimensionToCssDimension(n.value);
                    null !== e && this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`)
                }
            }
        }
        isUnusedFallbackObject() {
            const e = function(e) {
                const n = Qe[e];
                return void 0 !== n ? {
                    internalName: e,
                    name: n.name,
                    class: n.class
                } : null
            }("ruffle-object");
            if (null !== e) {
                let n = this.element.parentNode;
                for (; n !== document && null !== n; ) {
                    if (n.nodeName === e.name)
                        return !0;
                    n = n.parentNode
                }
            }
            return !1
        }
        async ensureFreshInstance() {
            this.destroy(),
            this.loadedConfig && !1 !== this.loadedConfig.splashScreen && !1 !== this.loadedConfig.preloader && this.showSplashScreen(),
            this.loadedConfig && !1 === this.loadedConfig.preloader && console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),
            this.loadedConfig && this.loadedConfig.maxExecutionDuration && "number" != typeof this.loadedConfig.maxExecutionDuration && console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),
            this.loadedConfig && "boolean" == typeof this.loadedConfig.contextMenu && console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');
            const [e,n] = await Ke(this.onRuffleDownloadProgress.bind(this)).catch((e => {
                console.error(`Serious error loading Ruffle: ${e}`);
                const n = new $e(e);
                throw this.panic(n),
                n
            }
            ));
            if (this.newZipWriter = n,
            Xe(e, this.loadedConfig || {}),
            e.setVolume(this.volumeSettings.get_volume()),
            this.loadedConfig?.fontSources)
                for (const n of this.loadedConfig.fontSources)
                    try {
                        const t = await fetch(n);
                        e.addFont(n, new Uint8Array(await t.arrayBuffer()))
                    } catch (e) {
                        console.warn(`Couldn't download font source from ${n}`, e)
                    }
            for (const n in this.loadedConfig?.defaultFonts) {
                const t = this.loadedConfig.defaultFonts[n];
                t && e.setDefaultFont(n, t)
            }
            this.instance = await e.build(this.container, this).catch((e => {
                throw console.error(`Serious error loading Ruffle: ${e}`),
                this.panic(e),
                e
            }
            )),
            this.rendererDebugInfo = this.instance.renderer_debug_info(),
            this.rendererDebugInfo.includes("Adapter Device Type: Cpu") && this.container.addEventListener("mouseover", this.openHardwareAccelerationModal.bind(this), {
                once: !0
            });
            const t = this.instance.renderer_name()
              , a = this.instance.constructor;
            if (console.log("%cNew Ruffle instance created (Version: " + Fe.versionName + " | WebAssembly extensions: " + (a.is_wasm_simd_used() ? "ON" : "OFF") + " | Used renderer: " + (t ?? "") + ")", "background: #37528C; color: #FFAD33"),
            "running" !== this.audioState() && (this.container.style.visibility = "hidden",
            await new Promise((e => {
                window.setTimeout(( () => {
                    e()
                }
                ), 200)
            }
            )),
            this.container.style.visibility = ""),
            this.unmuteAudioContext(),
            !this.loadedConfig || this.loadedConfig.autoplay === l.On || this.loadedConfig.autoplay !== l.Off && "running" === this.audioState()) {
                if (this.play(),
                "running" !== this.audioState()) {
                    this.loadedConfig && this.loadedConfig.unmuteOverlay === c.Hidden || (this.unmuteOverlay.style.display = "block"),
                    this.container.addEventListener("click", this.unmuteOverlayClicked.bind(this), {
                        once: !0
                    });
                    const e = this.instance?.audio_context();
                    e && (e.onstatechange = () => {
                        "running" === e.state && this.unmuteOverlayClicked(),
                        e.onstatechange = null
                    }
                    )
                }
            } else
                this.playButton.style.display = "block"
        }
        onRuffleDownloadProgress(e, n) {
            const t = this.splashScreen.querySelector(".loadbar-inner")
              , a = this.splashScreen.querySelector(".loadbar");
            Number.isNaN(n) ? a && (a.style.display = "none") : t.style.width = e / n * 100 + "%"
        }
        destroy() {
            this.instance && (this.instance.destroy(),
            this.instance = null,
            this.metadata = null,
            this._readyState = sn.HaveNothing,
            console.log("Ruffle instance destroyed."))
        }
        checkOptions(e) {
            if ("string" == typeof e)
                return {
                    url: e
                };
            const n = (e, n) => {
                if (!e) {
                    const e = new Me(n);
                    throw this.panic(e),
                    e
                }
            }
            ;
            return n(null !== e && "object" == typeof e, "Argument 0 must be a string or object"),
            n("url"in e || "data"in e, "Argument 0 must contain a `url` or `data` key"),
            n(!("url"in e) || "string" == typeof e.url, "`url` must be a string"),
            e
        }
        async reload() {
            if (!this.loadedConfig)
                throw new Error("Cannot reload if load wasn't first called");
            await this.load(this.loadedConfig)
        }
        async load(e, n=!1) {
            if (e = this.checkOptions(e),
            this.element.isConnected && !this.isUnusedFallbackObject()) {
                if (!fn(this.element))
                    try {
                        this.loadedConfig = {
                            ...en,
                            ...n && "url"in e ? {
                                allowScriptAccess: pn("samedomain", e.url)
                            } : {},
                            ...window.RufflePlayer?.config ?? {},
                            ...this.config,
                            ...e
                        },
                        this.loadedConfig.backgroundColor && this.loadedConfig.wmode !== f.Transparent && (this.container.style.backgroundColor = this.loadedConfig.backgroundColor),
                        await this.ensureFreshInstance(),
                        "url"in e ? (console.log(`Loading SWF file ${e.url}`),
                        this.swfUrl = new URL(e.url,document.baseURI),
                        this.instance.stream_from(this.swfUrl.href, an(e.parameters))) : "data"in e && (console.log("Loading SWF data"),
                        delete this.swfUrl,
                        this.instance.load_data(new Uint8Array(e.data), an(e.parameters), e.swfFileName || "movie.swf"))
                    } catch (e) {
                        console.error(`Serious error occurred loading SWF file: ${e}`);
                        const n = new Error(e);
                        throw this.panic(n),
                        n
                    }
            } else
                console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")
        }
        play() {
            this.instance && (this.instance.play(),
            this.playButton.style.display = "none")
        }
        get isPlaying() {
            return !!this.instance && this.instance.is_playing()
        }
        get volume() {
            return this.instance ? this.instance.volume() : 1
        }
        set volume(e) {
            this.instance && this.instance.set_volume(e)
        }
        get fullscreenEnabled() {
            return !(!document.fullscreenEnabled && !document.webkitFullscreenEnabled)
        }
        get isFullscreen() {
            return (document.fullscreenElement || document.webkitFullscreenElement) === this.element
        }
        setFullscreen(e) {
            this.fullscreenEnabled && e !== this.isFullscreen && (e ? this.enterFullscreen() : this.exitFullscreen())
        }
        enterFullscreen() {
            const e = {
                navigationUI: "hide"
            };
            this.element.requestFullscreen ? this.element.requestFullscreen(e) : this.element.webkitRequestFullscreen ? this.element.webkitRequestFullscreen(e) : this.element.webkitRequestFullScreen && this.element.webkitRequestFullScreen(e)
        }
        exitFullscreen() {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }
        fullScreenChange() {
            this.instance?.set_fullscreen(this.isFullscreen)
        }
        saveFile(e, n) {
            const t = URL.createObjectURL(e)
              , a = document.createElement("a");
            a.href = t,
            a.download = n,
            a.click(),
            URL.revokeObjectURL(t)
        }
        checkIfTouch(e) {
            this.isTouch = "touch" === e.pointerType || "pen" === e.pointerType
        }
        base64ToArray(e) {
            const n = atob(e)
              , t = new Uint8Array(n.length);
            for (let e = 0; e < n.length; e++)
                t[e] = n.charCodeAt(e);
            return t
        }
        base64ToBlob(e, n) {
            const t = this.base64ToArray(e);
            return new Blob([t],{
                type: n
            })
        }
        isB64SOL(e) {
            try {
                return "TCSO" === atob(e).slice(6, 10)
            } catch (e) {
                return !1
            }
        }
        confirmReloadSave(e, n, t) {
            if (this.isB64SOL(n) && localStorage[e]) {
                if (!t) {
                    if (!confirm(ke("save-delete-prompt")))
                        return
                }
                const a = this.swfUrl ? this.swfUrl.pathname : ""
                  , r = this.swfUrl ? this.swfUrl.hostname : document.location.hostname
                  , o = e.split("/").slice(1, -1).join("/");
                if (a.includes(o) && e.startsWith(r)) {
                    return void (confirm(ke("save-reload-prompt", {
                        action: t ? "replace" : "delete"
                    })) && this.loadedConfig && (this.destroy(),
                    t ? localStorage.setItem(e, n) : localStorage.removeItem(e),
                    this.reload(),
                    this.populateSaves(),
                    this.saveManager.classList.add("hidden")))
                }
                t ? localStorage.setItem(e, n) : localStorage.removeItem(e),
                this.populateSaves(),
                this.saveManager.classList.add("hidden")
            }
        }
        replaceSOL(e, n) {
            const t = e.target
              , a = new FileReader;
            a.addEventListener("load", ( () => {
                if (a.result && "string" == typeof a.result) {
                    const e = new RegExp("data:.*;base64,")
                      , t = a.result.replace(e, "");
                    this.confirmReloadSave(n, t, !0)
                }
            }
            )),
            t && t.files && t.files.length > 0 && t.files[0] && a.readAsDataURL(t.files[0])
        }
        checkSaves() {
            if (!this.saveManager.querySelector("#local-saves"))
                return !1;
            try {
                if (null === localStorage)
                    return !1
            } catch (e) {
                return !1
            }
            return Object.keys(localStorage).some((e => {
                const n = e.split("/").pop()
                  , t = localStorage.getItem(e);
                return n && t && this.isB64SOL(t)
            }
            ))
        }
        deleteSave(e) {
            const n = localStorage.getItem(e);
            n && this.confirmReloadSave(e, n, !1)
        }
        populateSaves() {
            if (!this.checkSaves())
                return;
            const e = this.saveManager.querySelector("#local-saves");
            e.textContent = "",
            Object.keys(localStorage).forEach((n => {
                const t = n.split("/").pop()
                  , a = localStorage.getItem(n);
                if (t && a && this.isB64SOL(a)) {
                    const r = document.createElement("TR")
                      , o = document.createElement("TD");
                    o.textContent = t,
                    o.title = n;
                    const i = document.createElement("TD")
                      , s = document.createElement("SPAN");
                    s.className = "save-option",
                    s.id = "download-save",
                    s.title = ke("save-download"),
                    s.addEventListener("click", ( () => {
                        const e = this.base64ToBlob(a, "application/octet-stream");
                        this.saveFile(e, t + ".sol")
                    }
                    )),
                    i.appendChild(s);
                    const l = document.createElement("TD")
                      , u = document.createElement("INPUT");
                    u.type = "file",
                    u.accept = ".sol",
                    u.className = "replace-save",
                    u.id = "replace-save-" + n;
                    const c = document.createElement("LABEL");
                    c.htmlFor = "replace-save-" + n,
                    c.className = "save-option",
                    c.id = "replace-save",
                    c.title = ke("save-replace"),
                    u.addEventListener("change", (e => this.replaceSOL(e, n))),
                    l.appendChild(u),
                    l.appendChild(c);
                    const d = document.createElement("TD")
                      , f = document.createElement("SPAN");
                    f.className = "save-option",
                    f.id = "delete-save",
                    f.title = ke("save-delete"),
                    f.addEventListener("click", ( () => this.deleteSave(n))),
                    d.appendChild(f),
                    r.appendChild(o),
                    r.appendChild(i),
                    r.appendChild(l),
                    r.appendChild(d),
                    e.appendChild(r)
                }
            }
            ))
        }
        async backupSaves() {
            const e = this.newZipWriter()
              , n = [];
            Object.keys(localStorage).forEach((t => {
                let a = String(t.split("/").pop());
                const r = localStorage.getItem(t);
                if (r && this.isB64SOL(r)) {
                    const t = this.base64ToArray(r)
                      , o = n.filter((e => e === a)).length;
                    n.push(a),
                    o > 0 && (a += ` (${o + 1})`),
                    e.addFile(a + ".sol", t)
                }
            }
            ));
            const t = new Blob([e.save()],{
                type: "application/zip"
            });
            this.saveFile(t, "saves.zip")
        }
        openHardwareAccelerationModal() {
            this.hardwareAccelerationModal.classList.remove("hidden")
        }
        async openSaveManager() {
            this.populateSaves(),
            this.saveManager.classList.remove("hidden")
        }
        openVolumeControls() {
            this.volumeControls.classList.remove("hidden")
        }
        async downloadSwf() {
            try {
                if (this.swfUrl) {
                    console.log("Downloading SWF: " + this.swfUrl);
                    const e = await fetch(this.swfUrl.href);
                    if (!e.ok)
                        return void console.error("SWF download failed");
                    const n = await e.blob();
                    this.saveFile(n, function(e) {
                        const n = e.pathname;
                        return n.substring(n.lastIndexOf("/") + 1)
                    }(this.swfUrl))
                } else
                    console.error("SWF download failed")
            } catch (e) {
                console.error("SWF download failed")
            }
        }
        virtualKeyboardInput() {
            const e = this.virtualKeyboard
              , n = e.value;
            for (const e of n)
                for (const n of ["keydown", "keyup"])
                    this.element.dispatchEvent(new KeyboardEvent(n,{
                        key: e,
                        bubbles: !0
                    }));
            e.value = ""
        }
        openVirtualKeyboard() {
            this.instance?.has_focus() ? this.virtualKeyboard.focus({
                preventScroll: !0
            }) : setTimeout(( () => {
                this.virtualKeyboard.focus({
                    preventScroll: !0
                })
            }
            ), 0)
        }
        closeVirtualKeyboard() {
            this.isVirtualKeyboardFocused() && this.container.focus({
                preventScroll: !0
            })
        }
        isVirtualKeyboardFocused() {
            return this.shadow.activeElement === this.virtualKeyboard
        }
        contextMenuItems() {
            const e = String.fromCharCode(10003)
              , n = []
              , t = () => {
                n.length > 0 && null !== n[n.length - 1] && n.push(null)
            }
            ;
            if (this.instance && this.isPlaying) {
                this.instance.prepare_context_menu().forEach(( (a, r) => {
                    a.separatorBefore && t(),
                    n.push({
                        text: a.caption + (a.checked ? ` (${e})` : ""),
                        onClick: async () => this.instance?.run_context_menu_callback(r),
                        enabled: a.enabled
                    })
                }
                )),
                t()
            }
            return this.fullscreenEnabled && (this.isFullscreen ? n.push({
                text: ke("context-menu-exit-fullscreen"),
                onClick: async () => this.setFullscreen(!1)
            }) : n.push({
                text: ke("context-menu-enter-fullscreen"),
                onClick: async () => this.setFullscreen(!0)
            })),
            n.push({
                text: ke("context-menu-volume-controls"),
                onClick: async () => {
                    this.openVolumeControls()
                }
            }),
            this.instance && this.swfUrl && this.loadedConfig && !0 === this.loadedConfig.showSwfDownload && (t(),
            n.push({
                text: ke("context-menu-download-swf"),
                onClick: this.downloadSwf.bind(this)
            })),
            navigator.clipboard && window.isSecureContext && n.push({
                text: ke("context-menu-copy-debug-info"),
                onClick: () => navigator.clipboard.writeText(this.getPanicData())
            }),
            this.checkSaves() && n.push({
                text: ke("context-menu-open-save-manager"),
                onClick: this.openSaveManager.bind(this)
            }),
            t(),
            n.push({
                text: ke("context-menu-about-ruffle", {
                    flavor: qe ? "extension" : "",
                    version: Fe.versionName
                }),
                async onClick() {
                    window.open(De, "_blank")
                }
            }),
            this.isTouch && (t(),
            n.push({
                text: ke("context-menu-hide"),
                onClick: async () => {
                    this.contextMenuForceDisabled = !0
                }
            })),
            n
        }
        pointerDown(e) {
            this.pointerDownPosition = new rn(e.pageX,e.pageY),
            this.pointerMoveMaxDistance = 0,
            this.startLongPressTimer()
        }
        clearLongPressTimer() {
            this.longPressTimer && (clearTimeout(this.longPressTimer),
            this.longPressTimer = null)
        }
        startLongPressTimer() {
            this.clearLongPressTimer(),
            this.longPressTimer = setTimeout(( () => this.clearLongPressTimer()), 800)
        }
        checkLongPressMovement(e) {
            if (null !== this.pointerDownPosition) {
                const n = new rn(e.pageX,e.pageY)
                  , t = this.pointerDownPosition.distanceTo(n);
                t > this.pointerMoveMaxDistance && (this.pointerMoveMaxDistance = t)
            }
        }
        checkLongPress(e) {
            this.longPressTimer ? this.clearLongPressTimer() : !this.contextMenuSupported && "mouse" !== e.pointerType && this.pointerMoveMaxDistance < 15 && this.showContextMenu(e)
        }
        suppressContextMenu() {
            this._suppressContextMenu = !0
        }
        showContextMenu(e) {
            if (this.panicked)
                return;
            if (e.preventDefault(),
            this._suppressContextMenu)
                return void (this._suppressContextMenu = !1);
            if (0 !== this.shadow.querySelectorAll(".modal:not(.hidden)").length)
                return;
            if ("contextmenu" === e.type ? (this.contextMenuSupported = !0,
            document.documentElement.addEventListener("click", this.hideContextMenu.bind(this), {
                once: !0
            })) : (document.documentElement.addEventListener("pointerup", this.hideContextMenu.bind(this), {
                once: !0
            }),
            e.stopPropagation()),
            [!1, p.Off].includes(this.loadedConfig?.contextMenu ?? p.On) || this.isTouch && this.loadedConfig?.contextMenu === p.RightClickOnly || this.contextMenuForceDisabled)
                return;
            for (; this.contextMenuElement.firstChild; )
                this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
            for (const e of this.contextMenuItems())
                if (null === e)
                    this.contextMenuElement.appendChild((0,
                    b.jsx)("li", {
                        class: "menu-separator",
                        children: (0,
                        b.jsx)("hr", {})
                    }));
                else {
                    const {text: n, onClick: t, enabled: a} = e
                      , r = (0,
                    b.jsx)("li", {
                        class: {
                            "menu-item": !0,
                            disabled: !1 === a
                        },
                        children: n
                    });
                    if (this.contextMenuElement.appendChild(r),
                    !1 !== a) {
                        const e = async e => {
                            e.preventDefault(),
                            e.stopPropagation(),
                            await t(e),
                            this.hideContextMenu()
                        }
                        ;
                        this.contextMenuSupported ? (r.addEventListener("click", e),
                        r.addEventListener("contextmenu", e)) : r.addEventListener("pointerup", e)
                    }
                }
            this.contextMenuOverlay.classList.remove("hidden");
            const n = this.element.getBoundingClientRect()
              , t = this.contextMenuElement.getBoundingClientRect()
              , a = Math.max(0, e.clientX + t.width - document.documentElement.clientWidth)
              , r = Math.max(0, e.clientY + t.height - document.documentElement.clientHeight)
              , o = e.clientX - n.x - a
              , i = e.clientY - n.y - r;
            this.contextMenuElement.style.transform = `translate(${o}px, ${i}px)`
        }
        hideContextMenu() {
            this.instance?.clear_custom_menu_items(),
            this.contextMenuOverlay.classList.add("hidden")
        }
        pause() {
            this.instance && (this.instance.pause(),
            this.playButton.style.display = "block")
        }
        audioState() {
            if (this.instance) {
                const e = this.instance.audio_context();
                return e && e.state || "running"
            }
            return "suspended"
        }
        unmuteOverlayClicked() {
            if (this.instance) {
                if ("running" !== this.audioState()) {
                    const e = this.instance.audio_context();
                    e && e.resume()
                }
                this.unmuteOverlay.style.display = "none"
            }
        }
        unmuteAudioContext() {
            tn || (navigator.maxTouchPoints < 1 ? tn = !0 : this.container.addEventListener("click", ( () => {
                if (tn)
                    return;
                const e = this.instance?.audio_context();
                if (!e)
                    return;
                const n = new Audio;
                n.src = ( () => {
                    const n = new ArrayBuffer(10)
                      , t = new DataView(n)
                      , a = e.sampleRate;
                    t.setUint32(0, a, !0),
                    t.setUint32(4, a, !0),
                    t.setUint16(8, 1, !0);
                    return `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(n))).slice(0, 13)}AgAZGF0YQcAAACAgICAgICAAAA=`
                }
                )(),
                n.load(),
                n.play().then(( () => {
                    tn = !0
                }
                )).catch((e => {
                    console.warn(`Failed to play dummy sound: ${e}`)
                }
                ))
            }
            ), {
                once: !0
            }))
        }
        static htmlDimensionToCssDimension(e) {
            if (e) {
                const n = e.match(nn);
                if (n) {
                    let e = n[1];
                    return n[3] || (e += "px"),
                    e
                }
            }
            return null
        }
        callExternalInterface(e, n) {
            return this.instance?.call_exposed_callback(e, n)
        }
        getObjectId() {
            return this.element.getAttribute("name")
        }
        set traceObserver(e) {
            this.instance?.set_trace_observer(e)
        }
        getPanicData() {
            let e = "\n# Player Info\n";
            if (e += `Allows script access: ${!!this.loadedConfig && this.loadedConfig.allowScriptAccess}\n`,
            e += `${this.rendererDebugInfo}\n`,
            e += this.debugPlayerInfo(),
            e += "\n# Page Info\n",
            e += `Page URL: ${document.location.href}\n`,
            this.swfUrl && (e += `SWF URL: ${this.swfUrl}\n`),
            e += "\n# Browser Info\n",
            e += `User Agent: ${window.navigator.userAgent}\n`,
            e += `Platform: ${window.navigator.platform}\n`,
            e += `Has touch support: ${window.navigator.maxTouchPoints > 0}\n`,
            e += "\n# Ruffle Info\n",
            e += `Version: ${Fe.versionNumber}\n`,
            e += `Name: ${Fe.versionName}\n`,
            e += `Channel: ${Fe.versionChannel}\n`,
            e += `Built: ${Fe.buildDate}\n`,
            e += `Commit: ${Fe.commitHash}\n`,
            e += `Is extension: ${qe}\n`,
            e += "\n# Metadata\n",
            this.metadata)
                for (const [n,t] of Object.entries(this.metadata))
                    e += `${n}: ${t}\n`;
            return e
        }
        panic(e) {
            if (this.panicked)
                return;
            if (this.panicked = !0,
            this.hideSplashScreen(),
            e instanceof Error && ("AbortError" === e.name || e.message.includes("AbortError")))
                return;
            if (e instanceof $e) {
                const e = this.loadedConfig?.openInNewTab
                  , n = this.loadedConfig && "url"in this.loadedConfig ? new URL(this.loadedConfig.url,document.baseURI) : void 0;
                if (e && n)
                    return void this.addOpenInNewTabMessage(e, n)
            }
            const n = Object.assign([], {
                stackIndex: -1,
                avmStackIndex: -1
            });
            if (n.push("# Error Info\n"),
            e instanceof Error) {
                if (n.push(`Error name: ${e.name}\n`),
                n.push(`Error message: ${e.message}\n`),
                e.stack) {
                    const t = n.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
                    if (e.avmStack) {
                        const t = n.push(`AVM2 stack:\n\`\`\`\n    ${e.avmStack.trim().replace(/\t/g, "    ")}\n\`\`\`\n`) - 1;
                        n.avmStackIndex = t
                    }
                    n.stackIndex = t
                }
            } else
                n.push(`Error: ${e}\n`);
            n.push(this.getPanicData()),
            Le(this.container, e, n, this.swfUrl),
            this.destroy()
        }
        addOpenInNewTabMessage(e, n) {
            const t = new URL(n);
            if (this.loadedConfig?.parameters) {
                const e = an(this.loadedConfig?.parameters);
                Object.entries(e).forEach(( ([e,n]) => {
                    t.searchParams.set(e, n)
                }
                ))
            }
            this.hideSplashScreen();
            const a = document.createElement("div");
            a.id = "message-overlay";
            const r = document.createElement("div");
            r.className = "message",
            r.appendChild(ye("message-cant-embed"));
            const o = document.createElement("div")
              , i = document.createElement("a");
            i.innerText = ke("open-in-new-tab"),
            i.onclick = () => e(t),
            o.appendChild(i),
            r.appendChild(o),
            a.appendChild(r),
            this.container.prepend(a)
        }
        displayRootMovieDownloadFailedMessage(e) {
            const n = this.loadedConfig?.openInNewTab;
            if (n && this.swfUrl && window.location.origin !== this.swfUrl.origin)
                this.addOpenInNewTabMessage(n, this.swfUrl);
            else {
                const n = e ? new Oe(this.swfUrl) : new Pe(this.swfUrl);
                this.panic(n)
            }
        }
        displayMessage(e) {
            const n = document.createElement("div");
            n.id = "message-overlay";
            const t = document.createElement("div");
            t.className = "message";
            const a = document.createElement("p");
            a.textContent = e,
            t.appendChild(a);
            const r = document.createElement("div")
              , o = document.createElement("button");
            o.id = "continue-btn",
            o.textContent = ke("continue"),
            r.appendChild(o),
            t.appendChild(r),
            n.appendChild(t),
            this.container.prepend(n),
            this.container.querySelector("#continue-btn").onclick = () => {
                n.parentNode.removeChild(n)
            }
        }
        displayUnsupportedVideo(e) {
            const n = this.videoModal.querySelector("#video-holder");
            if (n) {
                const t = document.createElement("video");
                t.addEventListener("contextmenu", (e => e.stopPropagation())),
                t.src = e,
                t.autoplay = !0,
                t.controls = !0,
                n.textContent = "",
                n.appendChild(t),
                this.videoModal.classList.remove("hidden")
            }
        }
        displayClipboardModal(e) {
            const n = this.clipboardModal.querySelector("#clipboard-modal-description");
            n && (n.textContent = ke("clipboard-message-description", {
                variant: e ? "access-denied" : "unsupported"
            }),
            this.clipboardModal.classList.remove("hidden"))
        }
        hideSplashScreen() {
            this.splashScreen.classList.add("hidden"),
            this.container.classList.remove("hidden")
        }
        showSplashScreen() {
            this.splashScreen.classList.remove("hidden"),
            this.container.classList.add("hidden")
        }
        setMetadata(e) {
            this.metadata = e,
            this._readyState = sn.Loaded,
            this.hideSplashScreen(),
            this.element.dispatchEvent(new CustomEvent(on.LOADED_METADATA)),
            this.element.dispatchEvent(new CustomEvent(on.LOADED_DATA))
        }
    }
    var sn;
    on.LOADED_METADATA = "loadedmetadata",
    on.LOADED_DATA = "loadeddata",
    function(e) {
        e[e.HaveNothing = 0] = "HaveNothing",
        e[e.Loading = 1] = "Loading",
        e[e.Loaded = 2] = "Loaded"
    }(sn || (sn = {}));
    class ln {
        constructor(e, n) {
            this.isMuted = e,
            this.volume = n
        }
        get_volume() {
            return this.isMuted ? 0 : this.volume / 100
        }
    }
    function un(e, n) {
        const t = {
            url: e
        }
          , a = n("allowNetworking");
        null !== a && (t.allowNetworking = a);
        const r = pn(n("allowScriptAccess"), e);
        null !== r && (t.allowScriptAccess = r);
        const o = n("bgcolor");
        null !== o && (t.backgroundColor = o);
        const i = n("base");
        if (null !== i)
            if ("." === i) {
                const n = new URL(e,document.baseURI);
                t.base = new URL(i,n).href
            } else
                t.base = i;
        const s = mn(n("menu"));
        null !== s && (t.menu = s);
        const l = mn(n("allowFullScreen"));
        null !== l && (t.allowFullscreen = l);
        const u = n("flashvars");
        null !== u && (t.parameters = u);
        const c = n("quality");
        null !== c && (t.quality = c);
        const d = n("salign");
        null !== d && (t.salign = d);
        const f = n("scale");
        null !== f && (t.scale = f);
        const m = n("wmode");
        return null !== m && (t.wmode = m),
        t
    }
    function cn(e) {
        if (e) {
            let n = ""
              , t = "";
            try {
                const a = new URL(e,De);
                n = a.pathname,
                t = a.hostname
            } catch (e) {}
            if (n.startsWith("/v/") && /^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(t))
                return !0
        }
        return !1
    }
    function dn(e, n) {
        const t = e.getAttribute(n)
          , a = window.RufflePlayer?.config ?? {};
        if (t)
            try {
                const r = new URL(t);
                "http:" !== r.protocol || "https:" !== window.location.protocol || "upgradeToHttps"in a && !1 === a.upgradeToHttps || (r.protocol = "https:",
                e.setAttribute(n, r.toString()))
            } catch (e) {}
    }
    function fn(e) {
        let n = e.parentElement;
        for (; null !== n; ) {
            switch (n.tagName) {
            case "AUDIO":
            case "VIDEO":
                return !0
            }
            n = n.parentElement
        }
        return !1
    }
    function mn(e) {
        switch (e?.toLowerCase()) {
        case "true":
            return !0;
        case "false":
            return !1;
        default:
            return null
        }
    }
    function pn(e, n) {
        switch (e?.toLowerCase()) {
        case "always":
            return !0;
        case "never":
            return !1;
        case "samedomain":
            try {
                return new URL(window.location.href).origin === new URL(n,window.location.href).origin
            } catch {
                return !1
            }
        default:
            return null
        }
    }
    var hn, vn = function(e, n, t, a) {
        if ("a" === t && !a)
            throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof n ? e !== n || !a : !n.has(e))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === t ? a : "a" === t ? a.call(e) : a ? a.value : n.get(e)
    }, gn = function(e, n, t, a, r) {
        if ("m" === a)
            throw new TypeError("Private method is not writable");
        if ("a" === a && !r)
            throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof n ? e !== n || !r : !n.has(e))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === a ? r.call(e, t) : r ? r.value = t : n.set(e, t),
        t
    };
    class bn extends HTMLElement {
        get onFSCommand() {
            return vn(this, hn, "f").onFSCommand
        }
        set onFSCommand(e) {
            vn(this, hn, "f").onFSCommand = e
        }
        get readyState() {
            return vn(this, hn, "f")._readyState
        }
        get metadata() {
            return vn(this, hn, "f").metadata
        }
        constructor() {
            super(),
            hn.set(this, void 0),
            gn(this, hn, new on(this,( () => this.debugPlayerInfo()),(e => {
                try {
                    Object.defineProperty(this, e, {
                        value: (...n) => vn(this, hn, "f").callExternalInterface(e, n),
                        configurable: !0
                    })
                } catch (n) {
                    console.warn(`Error setting ExternalInterface legacy callback for ${e}`, n)
                }
            }
            )), "f")
        }
        get loadedConfig() {
            return vn(this, hn, "f").loadedConfig ?? null
        }
        connectedCallback() {
            vn(this, hn, "f").updateStyles()
        }
        static get observedAttributes() {
            return ["width", "height"]
        }
        attributeChangedCallback(e, n, t) {
            "width" !== e && "height" !== e || vn(this, hn, "f").updateStyles()
        }
        disconnectedCallback() {
            vn(this, hn, "f").destroy()
        }
        async reload() {
            await vn(this, hn, "f").reload()
        }
        async load(e, n=!1) {
            await vn(this, hn, "f").load(e, n)
        }
        play() {
            vn(this, hn, "f").play()
        }
        get isPlaying() {
            return vn(this, hn, "f").isPlaying
        }
        get volume() {
            return vn(this, hn, "f").volume
        }
        set volume(e) {
            vn(this, hn, "f").volume = e
        }
        get fullscreenEnabled() {
            return vn(this, hn, "f").fullscreenEnabled
        }
        get isFullscreen() {
            return vn(this, hn, "f").isFullscreen
        }
        setFullscreen(e) {
            vn(this, hn, "f").setFullscreen(e)
        }
        enterFullscreen() {
            vn(this, hn, "f").enterFullscreen()
        }
        exitFullscreen() {
            vn(this, hn, "f").exitFullscreen()
        }
        async downloadSwf() {
            await vn(this, hn, "f").downloadSwf()
        }
        pause() {
            vn(this, hn, "f").pause()
        }
        set traceObserver(e) {
            vn(this, hn, "f").traceObserver = e
        }
        debugPlayerInfo() {
            return ""
        }
        PercentLoaded() {
            return this.readyState === sn.Loaded ? 100 : 0
        }
        get config() {
            return vn(this, hn, "f").config
        }
        set config(e) {
            vn(this, hn, "f").config = e
        }
    }
    function wn(e, n) {
        if (e) {
            for (const t of e.attributes)
                if (t.specified) {
                    if ("title" === t.name && "Adobe Flash Player" === t.value)
                        continue;
                    try {
                        n.setAttribute(t.name, t.value)
                    } catch (e) {
                        console.warn(`Unable to set attribute ${t.name} on Ruffle instance`)
                    }
                }
            for (const t of Array.from(e.children))
                n.appendChild(t)
        }
    }
    hn = new WeakMap;
    class kn extends bn {
        connectedCallback() {
            super.connectedCallback();
            const e = this.attributes.getNamedItem("src");
            if (e) {
                const n = e => this.attributes.getNamedItem(e)?.value ?? null
                  , t = un(e.value, n);
                this.load(t, !0)
            }
        }
        get nodeName() {
            return "EMBED"
        }
        get src() {
            return this.attributes.getNamedItem("src")?.value
        }
        set src(e) {
            if (e) {
                const n = document.createAttribute("src");
                n.value = e,
                this.attributes.setNamedItem(n)
            } else
                this.attributes.removeNamedItem("src")
        }
        static get observedAttributes() {
            return ["src", "width", "height"]
        }
        attributeChangedCallback(e, n, t) {
            if (super.attributeChangedCallback(e, n, t),
            this.isConnected && "src" === e) {
                const e = this.attributes.getNamedItem("src");
                if (e) {
                    const n = e => this.attributes.getNamedItem(e)?.value ?? null
                      , t = un(e.value, n);
                    this.load(t, !0)
                }
            }
        }
        static isInterdictable(e) {
            const n = e.getAttribute("src")
              , t = e.getAttribute("type");
            return !!n && (!fn(e) && (cn(n) ? (dn(e, "src"),
            !1) : Ce(n, t)))
        }
        static fromNativeEmbedElement(e) {
            const n = Ge("ruffle-embed", kn)
              , t = document.createElement(n);
            return wn(e, t),
            t
        }
        get height() {
            return this.getAttribute("height") || ""
        }
        set height(e) {
            this.setAttribute("height", e)
        }
        get width() {
            return this.getAttribute("width") || ""
        }
        set width(e) {
            this.setAttribute("width", e)
        }
        get type() {
            return this.getAttribute("type") || ""
        }
        set type(e) {
            this.setAttribute("type", e)
        }
    }
    function yn(e) {
        const n = {};
        for (const t of e.children)
            if (t instanceof HTMLParamElement) {
                const e = t.attributes.getNamedItem("name")?.value
                  , a = t.attributes.getNamedItem("value")?.value;
                e && a && (n[e] = a)
            }
        return n
    }
    class Rn extends bn {
        constructor() {
            super(...arguments),
            this.params = {}
        }
        connectedCallback() {
            super.connectedCallback(),
            this.params = yn(this);
            let e = null;
            if (this.attributes.getNamedItem("data") ? e = this.attributes.getNamedItem("data")?.value : this.params.movie && (e = this.params.movie),
            e) {
                const n = ["allowNetworking", "base", "bgcolor", "flashvars"]
                  , t = un(e, (e => function(e, n, t) {
                    n = n.toLowerCase();
                    for (const [t,a] of Object.entries(e))
                        if (t.toLowerCase() === n)
                            return a;
                    return t
                }(this.params, e, n.includes(e) ? this.getAttribute(e) : null)));
                this.load(t, !0)
            }
        }
        debugPlayerInfo() {
            let e = "Player type: Object\n"
              , n = null;
            return this.attributes.getNamedItem("data") ? n = this.attributes.getNamedItem("data")?.value : this.params.movie && (n = this.params.movie),
            e += `SWF URL: ${n}\n`,
            Object.keys(this.params).forEach((n => {
                e += `Param ${n}: ${this.params[n]}\n`
            }
            )),
            Object.keys(this.attributes).forEach((n => {
                e += `Attribute ${n}: ${this.attributes.getNamedItem(n)?.value}\n`
            }
            )),
            e
        }
        get nodeName() {
            return "OBJECT"
        }
        get data() {
            return this.getAttribute("data")
        }
        set data(e) {
            if (e) {
                const n = document.createAttribute("data");
                n.value = e,
                this.attributes.setNamedItem(n)
            } else
                this.attributes.removeNamedItem("data")
        }
        static isInterdictable(e) {
            if (fn(e))
                return !1;
            if (e.getElementsByTagName("ruffle-object").length > 0 || e.getElementsByTagName("ruffle-embed").length > 0)
                return !1;
            const n = e.attributes.getNamedItem("data")?.value.toLowerCase()
              , t = e.attributes.getNamedItem("type")?.value ?? null
              , a = yn(e);
            let r;
            if (n) {
                if (cn(n))
                    return dn(e, "data"),
                    !1;
                r = n
            } else {
                if (!a || !a.movie)
                    return !1;
                if (cn(a.movie)) {
                    const n = e.querySelector("param[name='movie']");
                    if (n) {
                        dn(n, "value");
                        const t = n.getAttribute("value");
                        t && e.setAttribute("data", t)
                    }
                    return !1
                }
                r = a.movie
            }
            const o = e.attributes.getNamedItem("classid")?.value.toLowerCase();
            return o === "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase() ? !Array.from(e.getElementsByTagName("object")).some(Rn.isInterdictable) && !Array.from(e.getElementsByTagName("embed")).some(kn.isInterdictable) : !o && Ce(r, t)
        }
        static fromNativeObjectElement(e) {
            const n = Ge("ruffle-object", Rn)
              , t = document.createElement(n);
            for (const n of Array.from(e.getElementsByTagName("embed")))
                kn.isInterdictable(n) && n.remove();
            for (const n of Array.from(e.getElementsByTagName("object")))
                Rn.isInterdictable(n) && n.remove();
            return wn(e, t),
            t
        }
        get height() {
            return this.getAttribute("height") || ""
        }
        set height(e) {
            this.setAttribute("height", e)
        }
        get width() {
            return this.getAttribute("width") || ""
        }
        set width(e) {
            this.setAttribute("width", e)
        }
        get type() {
            return this.getAttribute("type") || ""
        }
        set type(e) {
            this.setAttribute("type", e)
        }
    }
    class xn {
        constructor(e) {
            if (this.__mimeTypes = [],
            this.__namedMimeTypes = {},
            e)
                for (let n = 0; n < e.length; n++)
                    this.install(e[n])
        }
        install(e) {
            const n = this.__mimeTypes.length;
            this.__mimeTypes.push(e),
            this.__namedMimeTypes[e.type] = e,
            this[e.type] = e,
            this[n] = e
        }
        item(e) {
            return this.__mimeTypes[e >>> 0]
        }
        namedItem(e) {
            return this.__namedMimeTypes[e]
        }
        get length() {
            return this.__mimeTypes.length
        }
        [Symbol.iterator]() {
            return this.__mimeTypes[Symbol.iterator]()
        }
    }
    class zn {
        constructor(e) {
            this.__plugins = [],
            this.__namedPlugins = {};
            for (let n = 0; n < e.length; n++)
                this.install(e[n])
        }
        install(e) {
            const n = this.__plugins.length;
            this.__plugins.push(e),
            this.__namedPlugins[e.name] = e,
            this[e.name] = e,
            this[n] = e
        }
        item(e) {
            return this.__plugins[e >>> 0]
        }
        namedItem(e) {
            return this.__namedPlugins[e]
        }
        refresh() {}
        [Symbol.iterator]() {
            return this.__plugins[Symbol.iterator]()
        }
        get length() {
            return this.__plugins.length
        }
    }
    const jn = new class extends xn {
        constructor(e, n, t) {
            super(),
            this.name = e,
            this.description = n,
            this.filename = t
        }
    }
    ("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");
    jn.install({
        type: je,
        description: "Shockwave Flash",
        suffixes: "spl",
        enabledPlugin: jn
    }),
    jn.install({
        type: ze,
        description: "Shockwave Flash",
        suffixes: "swf",
        enabledPlugin: jn
    }),
    jn.install({
        type: Se,
        description: "Shockwave Flash",
        suffixes: "swf",
        enabledPlugin: jn
    }),
    jn.install({
        type: Ee,
        description: "Shockwave Flash",
        suffixes: "swf",
        enabledPlugin: jn
    });
    const Sn = window.RufflePlayer?.config ?? {}
      , En = function(e) {
        let n = Ae?.href ?? "";
        return !qe && "publicPath"in e && null !== e.publicPath && void 0 !== e.publicPath && (n = e.publicPath),
        "" === n || n.endsWith("/") || (n += "/"),
        n
    }(Sn) + "ruffle.js";
    let Cn, An, qn, Fn;
    function Dn() {
        try {
            Cn = Cn ?? document.getElementsByTagName("object"),
            An = An ?? document.getElementsByTagName("embed");
            for (const e of Array.from(Cn))
                if (Rn.isInterdictable(e)) {
                    const n = Rn.fromNativeObjectElement(e);
                    e.replaceWith(n)
                }
            for (const e of Array.from(An))
                if (kn.isInterdictable(e)) {
                    const n = kn.fromNativeEmbedElement(e);
                    e.replaceWith(n)
                }
        } catch (e) {
            console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)
        }
    }
    function Pn() {
        qn = qn ?? document.getElementsByTagName("iframe"),
        Fn = Fn ?? document.getElementsByTagName("frame"),
        [qn, Fn].forEach((e => {
            for (const n of e) {
                if (void 0 !== n.dataset.rufflePolyfilled)
                    continue;
                n.dataset.rufflePolyfilled = "";
                const e = n.contentWindow
                  , t = `Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;
                try {
                    "complete" === e.document.readyState && On(e, t)
                } catch (e) {
                    qe || console.warn(t + e)
                }
                n.addEventListener("load", ( () => {
                    On(e, t)
                }
                ), !1)
            }
        }
        ))
    }
    async function On(e, n) {
        let t;
        await new Promise((e => {
            window.setTimeout(( () => {
                e()
            }
            ), 100)
        }
        ));
        try {
            if (t = e.document,
            !t)
                return
        } catch (e) {
            return void (qe || console.warn(n + e))
        }
        if (qe || void 0 === t.documentElement.dataset.ruffleOptout)
            if (qe)
                e.RufflePlayer || (e.RufflePlayer = {}),
                e.RufflePlayer.config = {
                    ...Sn,
                    ...e.RufflePlayer.config ?? {}
                };
            else if (!e.RufflePlayer) {
                const n = t.createElement("script");
                n.setAttribute("src", En),
                n.onload = () => {
                    e.RufflePlayer = {},
                    e.RufflePlayer.config = Sn
                }
                ,
                t.head.appendChild(n)
            }
    }
    function $n() {
        !function(e) {
            if (navigator.plugins.namedItem("Shockwave Flash"))
                return;
            "install"in navigator.plugins && navigator.plugins.install || Object.defineProperty(navigator, "plugins", {
                value: new zn(navigator.plugins),
                writable: !1
            }),
            navigator.plugins.install(e),
            !(e.length > 0) || "install"in navigator.mimeTypes && navigator.mimeTypes.install || Object.defineProperty(navigator, "mimeTypes", {
                value: new xn(navigator.mimeTypes),
                writable: !1
            });
            const n = navigator.mimeTypes;
            for (let t = 0; t < e.length; t += 1)
                n.install(e[t])
        }(jn)
    }
    function Mn() {
        ("favorFlash"in Sn && !1 === Sn.favorFlash || "ruffle.js" === (navigator.plugins.namedItem("Shockwave Flash")?.filename ?? "ruffle.js")) && (Dn(),
        Pn(),
        new MutationObserver((function(e) {
            e.some((e => Array.from(e.addedNodes).some((e => ["EMBED", "OBJECT"].includes(e.nodeName) || e instanceof Element && null !== e.querySelector("embed, object"))))) && (Dn(),
            Pn())
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        }))
    }
    const In = {
        version: Fe.versionNumber + "+" + Fe.buildDate.substring(0, 10),
        polyfill() {
            Mn()
        },
        pluginPolyfill() {
            $n()
        },
        createPlayer() {
            const e = Ge("ruffle-player", bn);
            return document.createElement(e)
        },
        options: {}
    };
    let Tn = null;
    try {
        if (void 0 !== document.currentScript && null !== document.currentScript && "src"in document.currentScript && "" !== document.currentScript.src) {
            let e = document.currentScript.src;
            e.endsWith(".js") || e.endsWith("/") || (e += "/"),
            Tn = new URL(".",e)
        }
    } catch (e) {
        console.warn("Unable to get currentScript URL")
    }
    !function(e, n={}) {
        let t;
        window.RufflePlayer instanceof s ? t = window.RufflePlayer : (t = new s(window.RufflePlayer),
        window.RufflePlayer = t),
        t.sources[e] = In,
        In.options = n,
        !1 !== (!("polyfills"in t.config) || t.config.polyfills) && In.pluginPolyfill()
    }("local", {
        onFirstLoad: () => {
            r.p = function(e) {
                let n = Tn?.href ?? "";
                return "publicPath"in e && null !== e.publicPath && void 0 !== e.publicPath && (n = e.publicPath),
                "" === n || n.endsWith("/") || (n += "/"),
                n
            }(window.RufflePlayer?.config)
        }
    })
}
)();
//# sourceMappingURL=ruffle.js.map
