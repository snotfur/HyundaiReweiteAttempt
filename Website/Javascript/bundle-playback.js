// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
( () => {
    "use strict";
    var e, t, s = {
        createElementNS: document.createElementNS
    };
    var n = !0;
    function i(e) {
        n = e
    }
    function o(e) {
        try {
            i(!1),
            e()
        } finally {
            i(!0)
        }
    }
    function a(e) {
        !function(e, t, s) {
            if (s) {
                var n = new Date;
                n.setTime(n.getTime() + 24 * s * 60 * 60 * 1e3);
                var i = "; expires=" + n.toGMTString()
            } else
                i = "";
            document.cookie = e + "=" + t + i + "; path=/"
        }(e, "", -1)
    }
    if (void 0 !== window.XMLHttpRequest) {
        var r = class extends XMLHttpRequest {
        }
        ;
        Object.defineProperty(r.prototype, "responseURL", Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "responseURL"))
    }
    function l(e, t, s, n, i) {
        var o;
        if ((o = window.XMLHttpRequest ? new r : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function() {
            4 == this.readyState && s(o)
        }
        ,
        o.open(e, t, !0),
        n)
            for (var a in n)
                n.hasOwnProperty(a) && o.setRequestHeader(a, n[a]);
        o.withCredentials = !0,
        o.send(i)
    }
    function c(e) {
        return void 0 !== e && e && e.constructor === Array
    }
    function h(e, t) {
        const s = window[`HTML${e}Element`];
        if (void 0 !== s) {
            const e = Object.getOwnPropertyDescriptor(s.prototype, t);
            void 0 !== e && Object.defineProperty(s.prototype, `_wm_${t}`, e)
        }
    }
    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "src";
        const s = `_wm_${t}`;
        return s in e.__proto__ ? e[s] : e[t]
    }
    h("Image", "src"),
    h("Media", "src"),
    h("Embed", "src"),
    h("IFrame", "src"),
    h("Script", "src"),
    h("Link", "href"),
    h("Anchor", "href");
    var d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      , p = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      , m = {
        Y: function(e) {
            return e.getUTCFullYear()
        },
        m: function(e) {
            return e.getUTCMonth() + 1
        },
        b: function(e) {
            return p[e.getUTCMonth()]
        },
        B: function(e) {
            return d[e.getUTCMonth()]
        },
        d: function(e) {
            return e.getUTCDate()
        },
        H: function(e) {
            return ("0" + e.getUTCHours()).slice(-2)
        },
        M: function(e) {
            return ("0" + e.getUTCMinutes()).slice(-2)
        },
        S: function(e) {
            return ("0" + e.getUTCSeconds()).slice(-2)
        },
        "%": function() {
            return "%"
        }
    };
    function f(e) {
        var t = function(e) {
            return "number" == typeof e && (e = e.toString()),
            [e.slice(-14, -10), e.slice(-10, -8), e.slice(-8, -6), e.slice(-6, -4), e.slice(-4, -2), e.slice(-2)]
        }(e);
        return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]))
    }
    function g(e) {
        return p[e]
    }
    function v(e, t) {
        return t.replace(/%./g, (function(t) {
            var s = m[t[1]];
            return s ? s(f(e)) : t
        }
        ))
    }
    const w = window.Date;
    function y(e, t) {
        return (e = e.toString()).length >= t ? e : "00000000".substring(0, t - e.length) + e
    }
    function b(e) {
        for (var t = 0, s = 0; s < e.length; s++)
            t = Math.max(t, Math.max.apply(null, e[s][1]));
        if (function(e) {
            for (var t = 0, s = 1e3, n = 0; n < e.length; n++) {
                var i = e[n];
                t = Math.max(t, Math.max.apply(null, i[1])),
                s = Math.min(s, Math.min.apply(null, i[1].filter(Boolean)))
            }
            return Math.log1p(t) - Math.log1p(s) > 3
        }(e)) {
            var n = [];
            for (s = 0; s < e.length; s++) {
                var i = e[s];
                n.push([i[0], i[1].map(Math.log1p)])
            }
            e = n,
            t = Math.log1p(t)
        }
        return [e, t]
    }
    function C(e, t, s) {
        var n = s("wm-capresources");
        n.innerHTML = "";
        var i = s("wm-capresources-loading");
        i.style.display = "block";
        var o = f(e).getTime()
          , a = 0;
        t = window.location.origin + t;
        var r = [];
        function c(e, s) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "src";
            const i = window.location.origin
              , o = H(window, e);
            for (let e of o) {
                if (s && !s(e))
                    continue;
                const o = u(e, n);
                o && (!o.startsWith(t) && o.startsWith(i) && (o.startsWith("data:") || r.push(o)))
            }
        }
        c("img"),
        c("frame"),
        c("iframe", (e => "playback" !== e.id)),
        c("script"),
        c("link", (e => "stylesheet" === e.rel), "href");
        var h = r.filter((function(e, t, s) {
            return s.indexOf(e) === t
        }
        ));
        h.length > 0 ? (a = 0,
        h.map((function(e) {
            e.match("^https?://") && (a++,
            l("HEAD", e, (function(e) {
                if (200 == e.status) {
                    var t = e.getResponseHeader("Memento-Datetime");
                    if (null == t)
                        console.log("%s: no Memento-Datetime", h);
                    else {
                        var s = document.createElement("span")
                          , r = function(e, t) {
                            var s = new Date(e).getTime() - t
                              , n = "";
                            s < 0 ? (n += "-",
                            s = Math.abs(s)) : n += "+";
                            var i = !1;
                            if (s < 1e3)
                                return {
                                    delta: s,
                                    text: "",
                                    highlight: i
                                };
                            var o = s
                              , a = Math.floor(s / 1e3 / 60 / 60 / 24 / 30 / 12);
                            s -= 1e3 * a * 60 * 60 * 24 * 30 * 12;
                            var r = Math.floor(s / 1e3 / 60 / 60 / 24 / 30);
                            s -= 1e3 * r * 60 * 60 * 24 * 30;
                            var l = Math.floor(s / 1e3 / 60 / 60 / 24);
                            s -= 1e3 * l * 60 * 60 * 24;
                            var c = Math.floor(s / 1e3 / 60 / 60);
                            s -= 1e3 * c * 60 * 60;
                            var h = Math.floor(s / 1e3 / 60);
                            s -= 1e3 * h * 60;
                            var u = Math.floor(s / 1e3)
                              , d = [];
                            return a > 1 ? (d.push(a + " years"),
                            i = !0) : 1 == a && (d.push(a + " year"),
                            i = !0),
                            r > 1 ? (d.push(r + " months"),
                            i = !0) : 1 == r && (d.push(r + " month"),
                            i = !0),
                            l > 1 ? d.push(l + " days") : 1 == l && d.push(l + " day"),
                            c > 1 ? d.push(c + " hours") : 1 == c && d.push(c + " hour"),
                            h > 1 ? d.push(h + " minutes") : 1 == h && d.push(h + " minute"),
                            u > 1 ? d.push(u + " seconds") : 1 == u && d.push(u + " second"),
                            d.length > 2 && (d = d.slice(0, 2)),
                            {
                                delta: o,
                                text: n + d.join(" "),
                                highlight: i
                            }
                        }(t, o)
                          , l = r.highlight ? "color:red;" : "";
                        s.innerHTML = " " + r.text,
                        s.title = t,
                        s.setAttribute("style", l);
                        var c = e.getResponseHeader("Content-Type")
                          , h = e.responseURL.replace(window.location.origin, "")
                          , u = document.createElement("a");
                        u.innerHTML = h.split("/").splice(3).join("/"),
                        u._wm_href = h,
                        u.title = c,
                        u.onmouseover = _,
                        u.onmouseout = x;
                        var d = document.createElement("div");
                        d.setAttribute("data-delta", r.delta),
                        d.appendChild(u),
                        d.append(s),
                        n.appendChild(d);
                        var p = Array.prototype.slice.call(n.childNodes, 0);
                        p.sort((function(e, t) {
                            return t.getAttribute("data-delta") - e.getAttribute("data-delta")
                        }
                        )),
                        n.innerHTML = "";
                        for (var m = 0, f = p.length; m < f; m++)
                            n.appendChild(p[m])
                    }
                }
                0 == --a && (i.style.display = "none")
            }
            )))
        }
        ))) : (n.innerHTML = "There are no sub-resources in the page.",
        i.style.display = "none")
    }
    function M(e, t) {
        for (var s = t.split("/").splice(6).join("/"), n = e.document.querySelectorAll("img[src$='" + s + "'], iframe[src$='" + s + "'], frame[src$='" + s + "']"), i = Array.prototype.slice.call(n), o = 0; o < e.frames.length; o++)
            try {
                var a = M(e.frames[o].window, t);
                i = i.concat(a)
            } catch (e) {}
        return i
    }
    function T(e) {
        return "FRAME" == e.tagName || "IFRAME" == e.tagName ? e.contentWindow.document.documentElement : e
    }
    function _(e) {
        var t = M(window, e.target.href);
        if (t.length > 0)
            for (var s = 0; s < t.length; s++)
                T(t[s]).classList.add("wb-highlight")
    }
    function x(e) {
        var t = M(window, e.target.href);
        if (t.length > 0)
            for (var s = 0; s < t.length; s++)
                T(t[s]).classList.remove("wb-highlight")
    }
    function H(e, t) {
        for (var s = e.document.getElementsByTagName(t), n = Array.prototype.slice.call(s), i = 0; i < e.frames.length; i++)
            try {
                var o = H(e.frames[i].window, t);
                n = n.concat(o)
            } catch (e) {}
        return n
    }
    function L(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
    }
    function E(e, t, s) {
        e.attachEvent ? e.attachEvent("on" + t, s) : e.addEventListener(t, s)
    }
    function S(e, t, s) {
        e.detachEvent ? e.detachEvent("on" + t, s) : e.removeEventListener(t, s)
    }
    function k(e, t, s, n) {
        E(n || document, t, (function(t) {
            for (var n, i = t.target || t.srcElement; i && !(n = L(i, e)); )
                i = i.parentElement;
            n && s.call(i, t)
        }
        ))
    }
    class N {
        constructor(e, t) {
            this.input = e,
            this.source = 0,
            this.minChars = 3,
            this.delay = 150,
            this.offsetLeft = 0,
            this.offsetTop = 0,
            this.cache = !0,
            this.menuClass = "",
            Object.assign(this, t),
            this.root = this.input.getRootNode(),
            this.cache && (this.cache = {}),
            this.sc = document.createElement("div"),
            this.sc.className = "wb-autocomplete-suggestions " + this.menuClass,
            this.root.appendChild(this.sc);
            this.selector;
            this.autocompleteAttr = e.getAttribute("autocomplete"),
            e.setAttribute("autocomplete", "off"),
            this.last_val = "",
            this.updateSC = this.updateSC.bind(this),
            this.blurHandler = this.blurHandler.bind(this),
            this.keydownHandler = this.keydownHandler.bind(this),
            this.keyupHandler = this.keyupHandler.bind(this),
            this.focusHandler = this.focusHandler.bind(this),
            E(window, "resize", this.updateSC),
            E(e, "blur", this.blurHandler),
            E(e, "keydown", this.keydownHandler),
            E(e, "keyup", this.keyupHandler),
            this.minChars || E(e, "focus", this.focusHandler);
            const s = this;
            k("wb-autocomplete-suggestion", "mouseleave", (function(e) {
                var t = s.sc.querySelector(".autocomplete-suggestion.selected");
                t && setTimeout((function() {
                    t.className = t.className.replace("selected", "")
                }
                ), 20)
            }
            ), this.sc),
            k("wb-autocomplete-suggestion", "mouseover", (function(e) {
                var t = s.sc.querySelector(".wb-autocomplete-suggestion.selected");
                t && (t.className = t.className.replace("selected", "")),
                this.className += " selected"
            }
            ), this.sc),
            k("wb-autocomplete-suggestion", "mousedown", (function(e) {
                if (L(this, "wb-autocomplete-suggestion")) {
                    var t = this.getAttribute("data-val");
                    s.input.value = t,
                    s.onSelect(e, t, this),
                    s.sc.style.display = "none"
                }
            }
            ), this.sc)
        }
        unload() {
            S(window, "resize", this.updateSC),
            S(this.input, "blur", this.blurHandler),
            S(this.input, "focus", this.focusHandler),
            S(this.input, "keydown", this.keydownHandler),
            S(this.input, "keyup", this.keyupHandler),
            this.autocompleteAttr ? this.setAttribute("autocomplete", this.autocompleteAttr) : this.removeAttribute("autocomplete"),
            this.root.removeChild(this.sc)
        }
        updateSC(e, t) {
            var s = this.input.getBoundingClientRect();
            if (this.sc.style.left = Math.round(s.left + (window.pageXOffset || document.documentElement.scrollLeft) + this.offsetLeft) + "px",
            this.sc.style.top = Math.round(s.bottom + (window.pageYOffset || document.documentElement.scrollTop) + this.offsetTop) + "px",
            this.sc.style.width = Math.round(s.right - s.left) + "px",
            !e)
                if (this.sc.style.display = "block",
                this.sc.maxHeight || (this.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(this.sc, null) : this.sc.currentStyle).maxHeight)),
                this.sc.suggestionHeight || (this.sc.suggestionHeight = this.sc.querySelector(".wb-autocomplete-suggestion").offsetHeight),
                this.sc.suggestionHeight)
                    t || (this.sc.scrollTop = 0);
                else {
                    var n = this.sc.scrollTop
                      , i = t.getBoundingClientRect().top - this.sc.getBoundingClientRect().top;
                    i + this.sc.suggestionHeight - this.sc.maxHeight > 0 ? this.sc.scrollTop = i + this.sc.suggestionHeight + n - this.sc.maxHeight : i < 0 && (this.sc.scrollTop = i + n)
                }
        }
        blurHandler() {
            try {
                var e = this.root.querySelector(".wb-autocomplete-suggestions:hover")
            } catch (t) {
                e = null
            }
            e ? this.input !== document.activeElement && setTimeout(( () => this.focus()), 20) : (this.last_val = this.input.value,
            this.sc.style.display = "none",
            setTimeout(( () => this.sc.style.display = "none"), 350))
        }
        suggest(e) {
            var t = this.input.value;
            if (this.cache[t] = e,
            e.length && t.length >= this.minChars) {
                for (var s = "", n = 0; n < e.length; n++)
                    s += this.renderItem(e[n], t);
                this.sc.innerHTML = s,
                this.updateSC(0)
            } else
                this.sc.style.display = "none"
        }
        keydownHandler(e) {
            var t, s = window.event ? e.keyCode : e.which;
            if ((40 == s || 38 == s) && this.sc.innerHTML)
                return (n = this.sc.querySelector(".wb-autocomplete-suggestion.selected")) ? (t = 40 == s ? n.nextSibling : n.previousSibling) ? (n.className = n.className.replace("selected", ""),
                t.className += " selected",
                this.input.value = t.getAttribute("data-val")) : (n.className = n.className.replace("selected", ""),
                this.input.value = this.last_val,
                t = 0) : ((t = 40 == s ? this.sc.querySelector(".wb-autocomplete-suggestion") : this.sc.childNodes[this.sc.childNodes.length - 1]).className += " selected",
                this.input.value = t.getAttribute("data-val")),
                this.updateSC(0, t),
                !1;
            if (27 == s)
                this.value = this.last_val,
                this.sc.style.display = "none";
            else if (13 == s || 9 == s) {
                var n;
                (n = this.sc.querySelector(".wb-autocomplete-suggestion.selected")) && "none" != this.sc.style.display && (this.onSelect(e, n.getAttribute("data-val"), n),
                setTimeout(( () => {
                    this.sc.style.display = "none"
                }
                ), 20))
            }
        }
        keyupHandler(e) {
            var t = window.event ? e.keyCode : e.which;
            if (!t || (t < 35 || t > 40) && 13 != t && 27 != t) {
                var s = this.input.value;
                if (s.length >= this.minChars) {
                    if (s != this.last_val) {
                        if (this.last_val = s,
                        clearTimeout(this.timer),
                        this.cache) {
                            if (s in this.cache)
                                return void this.suggest(this.cache[s]);
                            for (var n = 1; n < s.length - this.minChars; n++) {
                                var i = s.slice(0, s.length - n);
                                if (i in this.cache && !this.cache[i].length)
                                    return void this.suggest([])
                            }
                        }
                        this.timer = setTimeout(( () => {
                            this.source(s, this.suggest.bind(this))
                        }
                        ), this.delay)
                    }
                } else
                    this.last_val = s,
                    this.sc.style.display = "none"
            }
        }
        focusHandler(e) {
            this.last_val = "\n",
            this.keyupHandler(e)
        }
        renderItem(e, t) {
            t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            var s = new RegExp("(" + t.split(" ").join("|") + ")","gi");
            return '<div class="wb-autocomplete-suggestion" data-val="' + e + '">' + e.replace(s, "<b>$1</b>") + "</div>"
        }
        onSelect(e, t, s) {}
    }
    class R {
        constructor(e, t) {
            let s = e.getRootNode();
            if (!s.querySelector)
                return;
            let n = "object" == typeof e ? [e] : s.querySelectorAll(e);
            this.elems = n.map((e => new N(e,t)))
        }
        destroy() {
            for (; this.elems.length > 0; )
                this.elems.pop().unload()
        }
    }
    const A = JSON;
    class U {
        constructor(e, t, s) {
            this.el = e,
            this.url = t,
            this.timestamp = s,
            e.onclick = this.save.bind(this),
            document.addEventListener("DOMContentLoaded", ( () => {
                var e;
                this.enableSaveSnapshot((e = "logged-in-user",
                document.cookie.search(e) >= 0))
            }
            ))
        }
        save(e) {
            var t, s, n, i;
            this.start(),
            t = this.url,
            s = this.timestamp,
            n = [],
            i = (i = {
                failure: this.failure.bind(this),
                success: this.success.bind(this)
            }) || {},
            l("POST", "/__wb/web-archive/", (function(e) {
                401 === e.status ? i.userNotLoggedIn && i.userNotLoggedIn(e) : e.status >= 400 ? i.failure && i.failure(e) : i.success && i.success(e)
            }
            ), {
                "Content-Type": "application/json"
            }, A.stringify({
                url: t,
                snapshot: s,
                tags: n || []
            }))
        }
        start() {
            this.hide(["wm-save-snapshot-fail", "wm-save-snapshot-open", "wm-save-snapshot-success"]),
            this.show(["wm-save-snapshot-in-progress"])
        }
        failure(e) {
            401 == e.status ? this.userNotLoggedIn(e) : (this.hide(["wm-save-snapshot-in-progress", "wm-save-snapshot-success"]),
            this.show(["wm-save-snapshot-fail", "wm-save-snapshot-open"]),
            console.log("You have got an error."),
            console.log("If you think something wrong here please send it to support."),
            console.log('Response: "' + e.responseText + '"'),
            console.log('status: "' + e.status + '"'))
        }
        success(e) {
            this.hide(["wm-save-snapshot-fail", "wm-save-snapshot-in-progress"]),
            this.show(["wm-save-snapshot-open", "wm-save-snapshot-success"])
        }
        enableSaveSnapshot() {
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? (this.show("wm-save-snapshot-open"),
            this.hide("wm-sign-in")) : (this.hide(["wm-save-snapshot-open", "wm-save-snapshot-in-progress"]),
            this.show("wm-sign-in"))
        }
        show(e) {
            this.setDisplayStyle(e, "inline-block")
        }
        hide(e) {
            this.setDisplayStyle(e, "none")
        }
        setDisplayStyle(e, t) {
            (c(e) ? e : [e]).forEach((e => {
                let s = this.el.getRootNode().getElementById(e);
                s && (s.style.display = t)
            }
            ))
        }
    }
    const O = window.JSON
      , D = window.open
      , I = window.Date
      , $ = window.fetch
      , j = document;
    var q, B = document, W = function(e) {
        return B.getElementById(e)
    };
    var F, X = "/static/";
    function Y(e) {
        const t = W("wm-expand");
        t.classList.contains("wm-closed") ? (e && q.classList.add("notice-only"),
        t.classList.replace("wm-closed", "wm-open"),
        q.style.display = "block",
        C(F, X, W)) : (t.classList.replace("wm-open", "wm-closed"),
        q.style.display = "none",
        q.classList.remove("notice-only"))
    }
    function P(e) {
        e.stopPropagation(),
        Y(!1)
    }
    function J(e, t) {
        var s = W(e);
        s && (s.style.visibility = t ? "visible" : "hidden")
    }
    function G(e, t) {
        c(e) || (e = [e]);
        for (var s = 0; s < e.length; s++)
            J(e[s], t)
    }
    var z = /web\/(\d*)\/http:\/\/web\.archive\.org\/screenshot/g;
    const V = window.fetch;
    function K() {
        var e = {
            url: window.location.href,
            timing: performance.timing,
            entries: performance.getEntries()
        };
        V("https://wayback-api.archive.org/clog/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e),
            credentials: "omit"
        }).catch(( () => {}
        ))
    }
    window.__wm = {
        init: function(t) {
            !function() {
                var e = document.cookie.split(";");
                if (e.length > 40)
                    for (var t = 0; t < e.length; t++) {
                        a(e[t].split("=")[0].trim())
                    }
            }(),
            e = t,
            document.createElementNS = function(t, n) {
                return 0 == t.indexOf(e) && (t = t.substring(e.length).replace(/\/?[0-9]+\//, "")),
                s.createElementNS.call(this, t, n)
            }
        },
        wombat: function(e, s, i, o, a, r) {
            const l = `${i}${o}/`
              , c = new URL(i)
              , h = i.replace(/^https?:/, "")
              , u = ["http://athena.archive.org/", "https://athena.archive.org/", "//athena.archive.org/", "http://analytics.archive.org/", "https://analytics.archive.org/", "//analytics.archive.org/", "/__wb/", `/${o}/`, i, h];
            a.startsWith(i) || a.startsWith(h) || (u.push(a),
            /^\/\//.test(a) ? u.push(c.protocol + a) : /^\//.test(a));
            const d = new URL(e)
              , p = {
                url: e,
                timestamp: s,
                prefix: l,
                coll: o,
                static_prefix: a,
                request_ts: s,
                proxy_magic: "",
                mod: "",
                is_framed: !1,
                is_live: !1,
                enable_auto_fetch: !0,
                auto_fetch_worker_prefix: l,
                wombat_ts: s,
                wombat_sec: r,
                wombat_scheme: (d.protocol || "http").replace(/:$/, ""),
                wombat_host: d.host,
                wombat_opts: {
                    no_rewrite_prefixes: u
                }
            };
            if ("undefined" != typeof _WBWombat) {
                const e = _WBWombat.prototype.rewriteUrl;
                return _WBWombat.prototype.rewriteUrl = function(t) {
                    for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++)
                        i[o - 1] = arguments[o];
                    return n ? e.call(this, t, ...i) : t
                }
                ,
                (t = _WBWombat(window, p)).actual = !0,
                window._wb_wombat = t.wombatInit(),
                window._wb_wombat.actual = !0,
                t
            }
        },
        rw: i,
        bt: function(e, t, s, n, i, a, r, c, h, u, d) {
            X = h || "/static/";
            var p = "/" + (i || "web") + "/";
            const m = f(F = r);
            let C = m.getUTCFullYear()
              , M = m.getUTCMonth() + 1
              , T = m.getUTCDate();
            var _, x, H, L = -1, E = -1, S = W("wm-ipp-base");
            if (S.attachShadow) {
                var k = S.attachShadow({
                    mode: "closed"
                });
                for (B = k; S.children.length > 0; )
                    k.appendChild(S.children[0]);
                if (u)
                    for (var N = 0; N < u.length; N++) {
                        var A = j.createElement("link");
                        A.setAttribute("rel", "stylesheet"),
                        A.setAttribute("type", "text/css"),
                        A.setAttribute("href", u[N]),
                        k.appendChild(A)
                    }
            }
            function J() {
                const e = W("donato").offsetHeight + (W("wm-ipp-inside").offsetHeight - W("wm-capinfo").offsetHeight);
                console.debug("adjustHeight: baseHeight=%s", e + "px"),
                S.style.height = e + "px"
            }
            window.top == window.self && (S.style.display = "block");
            var V = !1
              , K = !0;
            const Q = W("donato-if")?.contentWindow;
            var Z = W("donato");
            if (console.debug("$donato = %o", Z),
            Z)
                if (window.top != window.self)
                    Z.style.display = "none",
                    console.debug("hid $donato as window.top != window.self");
                else {
                    var ee = W("donato-base");
                    window.addEventListener("message", (function(e) {
                        if (e.source === Q) {
                            var t = "string" == typeof e.data ? O.parse(e.data) : e.data;
                            if (console.log("got message %o", t),
                            "set height" == t.event) {
                                var s = t.value
                                  , n = t.bannerHeight;
                                if ("number" != typeof s || s <= 0)
                                    return;
                                if (!K)
                                    return;
                                if (t.value,
                                V)
                                    return;
                                Z.style.height = n + "px",
                                ee.style.height = s + "px",
                                J()
                            } else if ("open modal" == t.event)
                                ee.style.height = "",
                                document.body.classList.add("wm-modal"),
                                window.scrollTo(0, 0),
                                V = !0;
                            else if ("close modal" == t.event)
                                Z.style.marginBottom = "0px",
                                document.body.classList.remove("wm-modal"),
                                V = !1;
                            else if ("hide banner" == t.event) {
                                Z.style.height = 0,
                                Z.style.visibility = "hidden";
                                var i = new I(I.now() + 24 * t.value * 3600 * 1e3);
                                document.cookie = "donation=x; domain=archive.org; path=/; expires=" + i.toUTCString(),
                                K = !1,
                                V = !1,
                                0,
                                J()
                            }
                        }
                    }
                    ), !1),
                    console.debug("installed message listener to #donato-base: %o", ee)
                }
            W("wm-tb-close").addEventListener("click", (e => {
                W("wm-ipp-inside").style.display = "none",
                e.preventDefault(),
                J()
            }
            ));
            var te = W("wm-ipp-sparkline");
            function se(e) {
                var t = "mouseenter" == e.type ? 1 : 0;
                if (t !== _) {
                    var s = W("wm-ipp")
                      , n = W("displayYearEl")
                      , i = W("displayMonthEl")
                      , o = W("displayDayEl");
                    t ? s.className = "hi" : (s.className = "",
                    n.innerHTML = C,
                    i.innerHTML = g(M - 1),
                    o.innerHTML = y(T, 2)),
                    x.style.display = t ? "inline" : "none",
                    H.style.display = t ? "inline" : "none",
                    _ = t
                }
            }
            W("wm-expand").addEventListener("click", P),
            q = W("wm-capinfo"),
            W("wm-graph-anchor")._no_rewrite = !0,
            (x = j.createElement("div")).className = "yt",
            x.style.display = "none",
            x.style.width = s + "px",
            x.style.height = t + "px",
            (H = j.createElement("div")).className = "mt",
            H.style.display = "none",
            H.style.width = n + "px",
            H.style.height = t + "px",
            te.appendChild(x),
            te.appendChild(H);
            var ne = W("wm-sparkline-canvas");
            te.onmouseenter = se,
            te.onmouseleave = se,
            te.onmousemove = function(t) {
                var i, o, r = te, l = function(e) {
                    var t = 0;
                    return e.pageX || e.pageY ? t = e.pageX : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft),
                    t
                }(t), h = (i = r,
                o = j.documentElement,
                (void 0 !== i.getBoundingClientRect ? i.getBoundingClientRect() : {
                    top: 0,
                    left: 0
                }).left + (window.scrollX || o.scrollLeft) - (o.clientLeft || 0)), u = Math.min(Math.max(0, l - h), e), d = u % s, m = Math.floor(u / s), f = Math.min(11, Math.floor(d / n)), v = 12 * m + f, w = d % 2 == 1 ? 15 : 1, b = y(m + c) + y(f + 1, 2) + y(w, 2) + "000000";
                W("displayYearEl").innerHTML = m + c,
                W("displayMonthEl").innerHTML = g(f);
                var C = p + b + "/" + a;
                if (W("wm-graph-anchor").href = C,
                L != m) {
                    var M = m * s;
                    x.style.left = M + "px",
                    L = m
                }
                if (E != v) {
                    var T = m + v * n + 1;
                    H.style.left = T + "px",
                    E = v
                }
            }
            ;
            var ie = W("wm-sparkline-canvas");
            if (ie.getContext && ie.getContext("2d")) {
                l("GET", "/__wb/sparkline?output=json&url=" + encodeURIComponent(a) + (i && "&collection=" + i || ""), (function(s) {
                    if (200 == s.status) {
                        for (var n = O.parse(s.responseText), i = n.years, o = Object.getOwnPropertyNames(i), r = n.years = [], l = 0; l < o.length; l++) {
                            var h = o[l];
                            i[h] && r.push([h, i[h]])
                        }
                        !function(e) {
                            const t = W("wm-nav-captures");
                            for (var s = 0, n = e.years, i = e.first_ts, o = e.last_ts, r = 0; r < n.length; r++)
                                for (var l = n[r][1], c = 0; c < l.length; c++)
                                    s += l[c];
                            const h = document.createElement("a");
                            var u;
                            h.className = "t",
                            h._no_rewrite = !0,
                            h.href = `${p}*/${a}`,
                            h.title = "See a list of every capture for this URL",
                            h.innerText = `${u = s,
                            ("" + u).replace(/\B(?=(\d{3})+$)/g, ",")} ${s > 1 ? "captures" : "capture"}`;
                            var d = v(i, "%d %b %Y");
                            o != i && (d += ` - ${v(o, "%d %b %Y")}`);
                            const m = document.createElement("div");
                            m.className = "r",
                            m.title = "Timespan for captures of this URL",
                            m.innerText = d,
                            t.innerHTML = "",
                            t.appendChild(h),
                            t.appendChild(m)
                        }(n),
                        function(e, t, s, n, i, o, a) {
                            var r = n.getContext("2d");
                            if (r) {
                                r.fillStyle = "#FFF";
                                var l = (new w).getUTCFullYear()
                                  , c = t / (l - i + 1)
                                  , h = b(e.years)
                                  , u = h[0]
                                  , d = s / h[1];
                                if (o >= i) {
                                    var p = _(o);
                                    r.fillStyle = "#FFFFA5",
                                    r.fillRect(p, 0, c, s)
                                }
                                for (var m = i; m <= l; m++)
                                    p = _(m),
                                    r.beginPath(),
                                    r.moveTo(p, 0),
                                    r.lineTo(p, s),
                                    r.lineWidth = 1,
                                    r.strokeStyle = "#CCC",
                                    r.stroke();
                                a = parseInt(a) - 1;
                                for (var f = (c - 1) / 12, g = 0; g < u.length; g++) {
                                    m = u[g][0];
                                    for (var v = u[g][1], y = _(m) + 1, C = 0; C < 12; C++) {
                                        var M = v[C];
                                        if (M > 0) {
                                            var T = Math.ceil(M * d);
                                            r.fillStyle = m == o && C == a ? "#EC008C" : "#000",
                                            r.fillRect(Math.round(y), Math.ceil(s - T), Math.ceil(f), Math.round(T))
                                        }
                                        y += f
                                    }
                                }
                            }
                            function _(e) {
                                return Math.ceil((e - i) * c) + .5
                            }
                        }(n, e, t, ie, c, C, M)
                    }
                }
                ))
            } else {
                var oe = new Image;
                oe.src = "/__wb/sparkline?url=" + encodeURIComponent(a) + "&width=" + e + "&height=" + t + "&selected_year=" + C + "&selected_month=" + M + (i && "&collection=" + i || ""),
                oe.alt = "sparkline",
                oe.width = e,
                oe.height = t,
                oe.id = "sparklineImgId",
                oe.border = "0",
                ne.parentNode.replaceChild(oe, ne)
            }
            function ae(e) {
                for (var t = [], s = e.length, n = 0; n < s; n++)
                    void 0 === e[n].excluded && t.push(e[n].display_name);
                return t
            }
            W("wm-share-facebook").onclick = function(e) {
                let t = this.dataset.url;
                return D("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t), "", "height=400,width=600"),
                e.preventDefault(),
                !1
            }
            ,
            W("wm-share-twitter").onclick = function(e) {
                let t = this.dataset.url;
                return D("https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&via=internetarchive", "", "height=446,width=600"),
                e.preventDefault(),
                !1
            }
            ,
            new R(W("wmtbURL"),{
                delay: 400,
                source: function(e, t) {
                    l("GET", "/__wb/search/host?q=" + encodeURIComponent(e), (function(s) {
                        if (void 0 !== (s = O.parse(s.response)).hosts && s.hosts.length > 0) {
                            var n = ae(s.hosts);
                            t(n)
                        } else
                            void 0 !== s.isUrl && !0 === s.isUrl && void 0 === s.excluded ? t([e]) : l("GET", "/__wb/search/anchor?q=" + encodeURIComponent(e), (function(e) {
                                if (void 0 !== (e = O.parse(e.response)) && e.length > 0) {
                                    var s = ae(e.slice(0, 5));
                                    t(s)
                                }
                            }
                            ))
                    }
                    ))
                },
                onSelect: function(e, t, s) {
                    W("wmtb").submit()
                }
            }),
            W("wmtb").onsubmit = function(e) {
                var t = W("wmtbURL").value;
                if (0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") && !t.match(/[\w\.]{2,256}\.[a-z]{2,4}/gi))
                    return document.location.href = "/web/*/" + W("wmtbURL").value,
                    e.preventDefault(),
                    !1
            }
            ,
            function(e, t, s) {
                !function(e, t) {
                    l("HEAD", e, (function(e) {
                        t(e.status < 300, e.responseURL)
                    }
                    ))
                }("/web/" + t + "/http://web.archive.org/screenshot/" + e, (function(e, n) {
                    if (!e)
                        return s(!1);
                    var i = function(e) {
                        var t = z.exec(e);
                        return t && t[1] ? t[1] : null
                    }(n);
                    if (!i)
                        return console.warn("failed to extract timestamp from %s", n),
                        void s(!1);
                    var o = (f(i).getTime() - f(t).getTime()) / 1e3;
                    console.log("screenshot delta: " + o + "s"),
                    s(o > 0 && o < 60, o)
                }
                ))
            }(a, F, (function(e, t) {
                e ? (W("wm-screenshot").title = "screenshot (delta: " + t + "s)",
                G("wm-screenshot", !0)) : G("wm-screenshot", !1)
            }
            )),
            d && function(e, t) {
                !function(e, t, s) {
                    const n = "/web/" + t + "id_/http://wayback-metadata.archive.org/youtube-dl/" + e;
                    l("GET", n, s)
                }(e, t, (function(e) {
                    if (e.status < 300) {
                        const t = O.parse(e.responseText);
                        G("wm-video", !0),
                        W("wm-video").href = t.url,
                        W("wm-video").title = "Video: " + t.title
                    } else
                        G("wm-video", !1)
                }
                ))
            }(a, F);
            const re = W("wm-capinfo-notice");
            if (re)
                if ("api" == re.getAttribute("source")) {
                    const e = `https://wayback-api.archive.org/services/context/notices?url=${encodeURIComponent(a)}&timestamp=${F}`;
                    $(e, {
                        credentials: "omit"
                    }).then((e => e.json())).then((e => {
                        let {status: t, notices: s} = e;
                        if ("success" == t && s?.length > 0)
                            try {
                                const e = document.createElement("div");
                                e.setAttribute("style", "background-color:#666;color:#fff;font-weight:bold;text-align:center"),
                                e.textContent = "NOTICE";
                                const t = document.createElement("div");
                                t.className = "wm-capinfo-content";
                                for (let e of s)
                                    "string" == typeof e.notice && o(( () => {
                                        const s = document.createElement("div");
                                        s.innerHTML = e.notice,
                                        t.appendChild(s)
                                    }
                                    ));
                                re.appendChild(e),
                                o(( () => re.appendChild(t))),
                                Y(!0)
                            } catch (e) {
                                console.error("failed to build content of %o - maybe notice text is malformed: %s", re, s)
                            }
                    }
                    ))
                } else
                    Y(!0);
            new U(W("wm-save-snapshot-open"),a,F)
        },
        ex: P,
        ajax: l,
        sp: function() {
            return X
        },
        pc: function(e) {
            (Math.random() < e || document.cookie.search("logged-in-user") >= 0 && document.cookie.search("logged-in-sig") >= 0) && window.addEventListener("load", K)
        }
    }
}
)();
// @license-end
