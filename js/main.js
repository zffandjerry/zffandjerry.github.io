!function (t) {
    function e(r) {
        if (i[r])
            return i[r].exports;
        var n = i[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, e),
        n.l = !0,
        n.exports
    }
    var i = {};
    e.m = t,
    e.c = i,
    e.d = function (t, i, r) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    },
    e.n = function (t) {
        var i = t && t.__esModule ? function () {
            return t.default
        }
         : function () {
            return t
        };
        return e.d(i, "a", i),
        i
    },
    e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    e.p = "",
    e(e.s = 6)
}
([function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = {
                random: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return t + (arguments[1] - t) * Math.random()
                },
                extend: function (t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                        i[r - 1] = arguments[r];
                    return i.forEach(function (e) {
                        for (var i in e)
                            t[i] = e[i]
                    }),
                    t
                },
                isPhone: function () {
                    return !!/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)
                },
                transTime: function (t, e) {
                    return +t / 1e3 * 60 | 0 || e
                }
            };
            e.default = r
        }, function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(7),
            s = r(n),
            o = i(0),
            a = r(o),
            l = a.default.isPhone() ? document.body.clientWidth : 360,
            u = a.default.isPhone() ? document.body.clientHeight : 600,
            h = function () {
                return {
                    width: l,
                    height: u,
                    canvases: ["fall", "bg", "firework", "dialogue"],
                    snowInterval: 60,
                    heartInterval: 15,
                    snow: {
                        x: void 0,
                        y: void 0,
                        minSize: 5,
                        maxSize: 10,
                        size: void 0,
                        speed: .5,
                        opacity: .8
                    },
                    heart: {
                        x: void 0,
                        y: void 0,
                        minSize: 15,
                        maxSize: 20,
                        size: void 0,
                        speed: 1
                    },
                    fallType: "snow",
                    dialogueOpt: {
                        interval: 2e3,
                        speed: 100,
                        color1: "#ff00ff",
                        font1: "14px Arial",
                        color2: "#f97afb",
                        color3: "red",
                        color4: "#ffff00",
                        color5: "#00ff00",
                        color6: "#00ffff",
                        color7: "#fff"
                    },
                    dialogue: [{
                            type: 6,
                            name: "豆沙包",
                            txt: "豆沙,我们去放烟花吧！( ﾟ▽ﾟ)/ "
                        }, {
                            type: 2,
                            name: "豆沙",
                            txt: "现在都不让放烟花了。"
                        }, {
                            type: 2,
                            name: "豆沙",
                            txt: "再说你那有烟花吗？"
                        }, {
                            type: 6,
                            name: "豆沙包",
                            txt: "我当然有烟花啦。ಠᴗಠ"
                        }, {
                            type: 6,
                            name: "豆沙包",
                            txt: "那你有打火机吗？"
                        }, {
                            type: 2,
                            name: "豆沙",
                            txt: "没有呀～"
                        }, {
                            type: 6,
                            name: "豆沙包",
                            txt: "那你怎么点燃了我的心？(>ω･* )ﾉ"
                        }, {
                            type: 2,
                            name: "豆沙",
                            txt: "。。。太油了吧"
                        }, {
                            type: 2,
                            name: "豆沙",
                            txt: "而且我的心并没有被你点燃呀。..(｡•ˇ‸ˇ•｡)…"
                        }, {
                            type: 6,
                            name: "豆沙包",
                            txt: "。。。。。。你在这别动,我去买个打火机。"
                        }, {
                            type: 2,
                            name: "豆沙",
                            txt: "打火机可点不燃我的心。￣へ￣"
                        }, {
                            type: 6,
                            name: "豆沙包",
                            txt: "那我为你点燃一场手机上的烟花秀。"
                        }
                    ],
                    sunset: 8e3,
                    fireworkInterval: [60, 240],
                    fireworks: {
                        x: void 0,
                        y: u,
                        xEnd: void 0,
                        yEnd: void 0,
                        size: 2,
                        radius: [1, 2],
                        velocity: 3,
                        opacity: .8,
                        count: [150, 250],
                        wait: void 0,
                        color: void 0
                    },
                    fireWords: "张翻翻|我爱你|永远把你|捧在手心|人生路很长|我们一起|慢慢走",
                    skyColor: "hsla({hue}, 60%, {lightness}%, 0.2)",
                    fireOpt: {
                        wordInterval: 3e3
                    },
                    shape: {
                        gap: 3
                    },
                    word: {
                        size: 50,
                        y: u / 4
                    },
                    titleWords: "豆沙和豆沙包|在一起七周年|永远幸福！",
                    titleOpt: {
                        gap: 4,
                        size: 50,
                        pSize: 8,
                        delay: 4e3,
                        distance: 120,
                        e: 5e3
                    }
                }
            }
            ();
            h.dialogueOpt.interval = a.default.transTime(h.dialogueOpt.interval, 120),
            h.dialogueOpt.speed = a.default.transTime(h.dialogueOpt.speed, 18),
            h.sunset = a.default.transTime(h.sunset, 600),
            h.fireOpt.wordInterval = a.default.transTime(h.fireOpt.wordInterval, 180),
            h.fireOpt.denseTime = a.default.transTime(h.fireOpt.denseTime, 600),
            h.titleOpt.delay = a.default.transTime(h.titleOpt.delay, 240),
            h.titleOpt.e = a.default.transTime(h.titleOpt.e, 240),
            (0, s.default)(h.width, h.height, h.canvases),
            e.default = h
        }, function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function s(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function o(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            l = i(1),
            u = (r(l), i(0)),
            h = r(u),
            f = i(3),
            c = r(f),
            d = function (t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = t.x,
                    r = t.y,
                    o = t.minSize,
                    a = void 0 === o ? 5 : o,
                    l = t.maxSize,
                    u = void 0 === l ? 7.5 : l,
                    f = t.size,
                    c = t.speed,
                    d = void 0 === c ? .5 : c,
                    p = t.opacity,
                    y = void 0 === p ? .8 : p;
                    n(this, e);
                    var v = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                                x: i,
                                y: r,
                                minSize: a,
                                maxSize: u,
                                size: f
                            }));
                    return v.opacity = h.default.random(y, 1),
                    v.speed = d * (1 + Math.random()),
                    v.direction = Math.random() > .5 ? .5 :  - .5,
                    v
                }
                return o(e, t),
                a(e, [{
                            key: "fall",
                            value: function () {
                                this.x += Math.random() * this.direction,
                                this.y += this.speed
                            }
                        }, {
                            key: "render",
                            value: function (t) {
                                return this.fall(),
                                !this.outOfBounds() && (this.g = t.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size), this.g.addColorStop(0, "hsla(255,255%,255%," + this.opacity + ")"), this.g.addColorStop(1, "hsla(255,255%,255%,0)"), t.beginPath(), t.fillStyle = this.g, t.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1), t.fill(), !0)
                            }
                        }
                    ]),
                e
            }
            (c.default);
            e.default = d
        }, function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            o = i(1),
            a = r(o),
            l = i(0),
            u = r(l),
            h = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = e.x,
                    r = e.y,
                    s = e.minSize,
                    o = void 0 === s ? 5 : s,
                    l = e.maxSize,
                    h = void 0 === l ? 7.5 : l,
                    f = e.size,
                    c = e.opacity,
                    d = void 0 === c ? 1 : c;
                    n(this, t),
                    this.size = f || u.default.random(o, h),
                    this.x = i || u.default.random(0, a.default.width - this.size),
                    this.y = r || -this.size,
                    this.opacity = d
                }
                return s(t, [{
                            key: "outOfBounds",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default.height,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default.width;
                                return !(this.x >= -this.size && this.x <= e && this.y <= t && this.y >= -this.size)
                            }
                        }
                    ]),
                t
            }
            ();
            e.default = h
        }, function (t, e, i) {
            "use strict";
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function n(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            a = i(2),
            l = function (t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            (a),
            u = Math.random,
            h = function (t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = t.x,
                    s = void 0 === i ? 0 : i,
                    o = t.y,
                    a = void 0 === o ? 0 : o,
                    l = t.minSize,
                    h = void 0 === l ? 15 : l,
                    f = t.maxSize,
                    c = void 0 === f ? 20 : f,
                    d = t.size,
                    p = t.speed,
                    y = void 0 === p ? 1 : p;
                    r(this, e);
                    var v = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                                minSize: h,
                                maxSize: c,
                                x: s,
                                y: a,
                                size: d,
                                speed: y
                            }));
                    return v.color = "hsla(" + 360 * u() + ", 90%, 65%, 1)",
                    v
                }
                return s(e, t),
                o(e, [{
                            key: "render",
                            value: function (t) {
                                return this.fall(),
                                !this.outOfBounds() && (t.save(), t.beginPath(), t.fillStyle = this.color, t.moveTo(this.x + .5 * this.size, this.y + .3 * this.size), t.bezierCurveTo(this.x + .1 * this.size, this.y, this.x, this.y + .6 * this.size, this.x + .5 * this.size, this.y + .9 * this.size), t.bezierCurveTo(this.x + 1 * this.size, this.y + .6 * this.size, this.x + .9 * this.size, this.y, this.x + .5 * this.size, this.y + .3 * this.size), t.closePath(), t.fill(), t.restore(), !0)
                            }
                        }
                    ]),
                e
            }
            (l.default);
            e.default = h
        }, function (t, e, i) {
            "use strict";
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function n(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            a = i(3),
            l = function (t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            (a),
            u = function (t) {
                function e(t) {
                    var i = t.x,
                    s = t.y,
                    o = t.size,
                    a = void 0 === o ? 1.5 : o,
                    l = t.radius;
                    r(this, e);
                    var u = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                                x: i,
                                y: s,
                                size: a
                            }));
                    return u.rate = Math.random(),
                    u.angle = 2 * Math.PI * Math.random(),
                    u.vx = l * Math.cos(u.angle) * u.rate,
                    u.vy = l * Math.sin(u.angle) * u.rate,
                    u
                }
                return s(e, t),
                o(e, [{
                            key: "go",
                            value: function () {
                                this.x += this.vx,
                                this.y += this.vy,
                                this.vy += .02,
                                this.vx *= .98,
                                this.vy *= .98
                            }
                        }, {
                            key: "render",
                            value: function (t) {
                                this.go(),
                                t.beginPath(),
                                t.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1),
                                t.fill()
                            }
                        }
                    ]),
                e
            }
            (l.default);
            e.default = u
        }, function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            function n(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = Array(t.length); e < t.length; e++)
                        i[e] = t[e];
                    return i
                }
                return Array.from(t)
            }
            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            a = i(1),
            l = r(a),
            u = i(0),
            h = r(u),
            f = i(8),
            c = r(f),
            d = i(12),
            p = r(d),
            y = i(2),
            v = r(y),
            g = i(4),
            w = r(g),
            m = i(13),
            b = r(m),
            x = i(15),
            O = r(x),
            k = i(16),
            _ = r(k);
            !function () {
                new(function () {
                    function t() {
                        var e = this;
                        s(this, t),
                        this.initProperty(),
                        this.initAudio(),
                        p.default.load(c.default).then(function (t) {
                            document.querySelector("#loading").style.display = "none",
                            e.imgs = e.dealImgs(t),
                            e.init()
                        }).catch(function (t) {
                            console.log(t)
                        })
                    }
                    return o(t, [{
                                key: "initAudio",
                                value: function () {
                                    var t = new Audio;
                                    t.src = i(17),
                                    t.loop = !0,
                                    t.play(),
                                    t.volume = .5;
                                    var e = document.querySelector("#music");
                                    document.addEventListener("WeixinJSBridgeReady", function () {
                                        t.play()
                                    }, !1),
                                    e.onclick = function () {
                                        "on" == this.getAttribute("class") ? (this.setAttribute("class", "off"), t.pause()) : (this.setAttribute("class", "on"), t.play())
                                    }
                                }
                            }, {
                                key: "initProperty",
                                value: function () {
                                    var t = this;
                                    this.height = l.default.height,
                                    this.width = l.default.width,
                                    l.default.canvases.forEach(function (e) {
                                        t[e + "Ctx"] = document.querySelector("#" + e).getContext("2d")
                                    }),
                                    this.fallDots = [],
                                    this.fallType = l.default.fallType,
                                    this.time = 0,
                                    this.status = 1,
                                    this.dialogueOpt = h.default.extend({}, l.default.dialogueOpt),
                                    this.dialogue = l.default.dialogue.shift(),
                                    this.sunsetTime = l.default.sunset,
                                    this.skyColor = {
                                        hue: 210,
                                        lightness: 0
                                    },
                                    this.fireworks = [],
                                    this.fireworkTime = 0 | h.default.random.apply(h.default, n(l.default.fireworkInterval)),
                                    this.fireWords = l.default.fireWords.split("|"),
                                    this.fireOpt = h.default.extend({
                                        end: !1,
                                        time: 600,
                                        showWords: !1
                                    }, l.default.fireOpt),
                                    this.titleOpt = {
                                        current: -1,
                                        start: !1,
                                        ctx: [],
                                        end: !1
                                    },
                                    this.titleWords = l.default.titleWords.split("|"),
                                    this.titleDots = []
                                }
                            }, {
                                key: "go",
                                value: function (t) {
                                    switch (t) {
                                    case 1:
                                        this.dialogueOpt = null,
                                        this.dialogue = null,
                                        this.dialogueCtx.clearRect(0, 0, l.default.width, l.default.height),
                                        ++this.status;
                                        break;
                                    case 2:
                                        this.sunsetTime = null,
                                        ++this.status;
                                        break;
                                    case 3:
                                        this.fireOpt = null,
                                        this.fireWords = null,
                                        l.default.word.y = 0,
                                        l.default.shape.gap = l.default.titleOpt.gap,
                                        l.default.word.size = l.default.titleOpt.size,
                                        ++this.status;
                                        break;
                                    case 4:
                                        this.titleOpt = null,
                                        this.titleWords = null,
                                        this.titleDots = null,
                                        ++this.status
                                    }
                                }
                            }, {
                                key: "init",
                                value: function () {
                                    this.drawBg(this.bgCtx, this.imgs.bg),
                                    this.shapeMaker = new O.default(this.width, this.height),
                                    this.test(),
                                    this.loop()
                                }
                            }, {
                                key: "test",
                                value: function () {}
                            }, {
                                key: "testLoop",
                                value: function () {}
                            }, {
                                key: "loop",
                                value: function () {
                                    switch (requestAnimationFrame(this.loop.bind(this)), ++this.time >= 6e4 || this.time, this.renderFall(), this.status) {
                                    case 1:
                                        this.renderDialogue();
                                        break;
                                    case 2:
                                        this.sunset();
                                        break;
                                    case 3:
                                        this.controlFire(),
                                        this.renderFireworks();
                                        break;
                                    case 4:
                                        this.renderTitle(),
                                        this.renderFireworks();
                                        break;
                                    case 5:
                                        this.end(),
                                        this.renderFireworks()
                                    }
                                    this.testLoop()
                                }
                            }, {
                                key: "renderFall",
                                value: function () {
                                    switch (this.fallCtx.clearRect(0, 0, this.width, this.height), this.fallType) {
                                    case "snow":
                                        this.time % l.default.snowInterval == 0 && this.fallDots.push(new v.default(l.default.snow));
                                        break;
                                    case "heart":
                                        this.time % l.default.heartInterval == 0 && this.fallDots.push(new w.default(l.default.heart));
                                        break;
                                    case "mix":
                                        this.time % l.default.snowInterval == 0 && this.fallDots.push(new v.default(l.default.snow)),
                                        this.time % l.default.heartInterval == 0 && this.fallDots.push(new w.default(l.default.heart))
                                    }
                                    for (var t = this.fallDots.length - 1; t >= 0; --t)
                                        !this.fallDots[t].render(this.fallCtx) && this.fallDots.splice(t, 1)
                                }
                            }, {
                                key: "renderDialogue",
                                value: function () {
                                    var t = this.dialogueCtx;
                                    if (t.clearRect(0, 0, l.default.width, l.default.height), t.fillStyle = this.dialogueOpt["color" + this.dialogue.type] || this.dialogueOpt.color1, t.font = this.dialogueOpt["font" + this.dialogue.type] || this.dialogueOpt.font1, this.dialogue.current = this.dialogue.current || 0, --this.dialogueOpt.speed <= 0 && (this.dialogueOpt.speed = l.default.dialogueOpt.speed, ++this.dialogue.current), t.fillText(this.dialogue.name + "：" + this.dialogue.txt.slice(0, this.dialogue.current), 20, 50), this.dialogue.current >= this.dialogue.txt.length && --this.dialogueOpt.interval <= 0) {
                                        if (0 == l.default.dialogue.length)
                                            return this.go(1);
                                        this.dialogue = l.default.dialogue.shift(),
                                        this.dialogueOpt.interval = l.default.dialogueOpt.interval
                                    }
                                }
                            }, {
                                key: "sunset",
                                value: function () {
                                    if (--this.sunsetTime <= 0)
                                        return this.go(2);
                                    this.fireworkCtx.fillStyle = "hsla(210, 60%, 5%, " + .01 * (20 - this.sunsetTime / l.default.sunset * 20) + ")",
                                    this.fireworkCtx.fillRect(0, 0, l.default.width, l.default.height)
                                }
                            }, {
                                key: "controlFire",
                                value: function () {
                                    --this.fireOpt.time,
                                    0 == this.fireOpt.time && this.createDenseFire(),
                                    this.fireOpt.time <= -180 && !this.fireOpt.end && this.showFireworkWords(),
                                    -60 == this.fireOpt.time && this.fireOpt.end && this.fireworks.push(new b.default({
                                            x: l.default.width / 2,
                                            yEnd: l.default.height / 8,
                                            count: 600,
                                            radius: 5
                                        })),
                                    -360 == this.fireOpt.time && this.fireOpt.end && this.go(3)
                                }
                            }, {
                                key: "showFireworkWords",
                                value: function () {
                                    if (0 == this.fireWords.length)
                                        return this.fireOpt.end = !0, void(this.fireOpt.time = 180);
                                    --this.fireOpt.wordInterval <= 0 && (this.getDotsPostion(this.fireWords.shift(), !0), this.fireOpt.wordInterval = l.default.fireOpt.wordInterval)
                                }
                            }, {
                                key: "createDenseFire",
                                value: function () {
                                    for (var t = this, e = 0; e < 10; e++)
                                        setTimeout(function () {
                                            t.fireworks.push(new b.default(l.default.fireworks))
                                        }, 100 * e)
                                }
                            }, {
                                key: "renderFireworks",
                                value: function () {
                                    this.fireworkCtx.fillStyle = l.default.skyColor.replace("{lightness}", 5 + 15 * this.skyColor.lightness).replace("{hue}", this.skyColor.hue),
                                    this.fireworkCtx.fillRect(0, 0, this.width, this.height),
                                    this.createFireworks(),
                                    this.skyColor = {
                                        lightness: 0,
                                        hue: 210
                                    };
                                    for (var t = this.fireworks.length - 1; t >= 0; --t)
                                        this.skyColor = this.skyColor.lightness >= this.fireworks[t].getSkyColor().lightness ? this.skyColor : this.fireworks[t].getSkyColor(), !this.fireworks[t].render(this.fireworkCtx) && this.fireworks.splice(t, 1)
                                }
                            }, {
                                key: "createFireworks",
                                value: function () {
                                    --this.fireworkTime <= 0 && (this.fireworks.push(new b.default(l.default.fireworks)), this.fireworkTime = 0 | h.default.random.apply(h.default, n(l.default.fireworkInterval)))
                                }
                            }, {
                                key: "renderTitle",
                                value: function () {
                                    if (this.createCanvas(), this.createTitleDots(), this.titleOpt) {
                                        var t = this.titleOpt.ctx[this.titleOpt.current];
                                        t.clearRect(0, 0, this.width, this.height);
                                        for (var e in this.titleDots)
                                            this.titleDots[e].render(t);
                                        --this.titleOpt.time <= 0 && (this.titleOpt.start = !1)
                                    }
                                }
                            }, {
                                key: "createCanvas",
                                value: function () {
                                    if (!this.titleOpt.start) {
                                        ++this.titleOpt.current;
                                        var t = document.createElement("canvas");
                                        t.setAttribute("class", "title"),
                                        t.id = this.titleOpt.current,
                                        t.setAttribute("width", l.default.width),
                                        t.setAttribute("height", l.default.height),
                                        document.body.appendChild(t),
                                        this.titleOpt.ctx.push(t.getContext("2d"))
                                    }
                                }
                            }, {
                                key: "createTitleDots",
                                value: function () {
                                    var t = this;
                                    if (!this.titleOpt.start) {
                                        if (0 == this.titleWords.length)
                                            return this.go(4);
                                        this.titleDots = [],
                                        this.titleOpt.start = !0,
                                        this.titleOpt.time = l.default.titleOpt.e + l.default.titleOpt.delay,
                                        l.default.word.y += l.default.titleOpt.distance;
                                        this.getDotsPostion(this.titleWords.shift()).forEach(function (e) {
                                            var i = {
                                                x: e.x,
                                                y: e.y,
                                                xStart: h.default.random(0, l.default.width),
                                                yStart: h.default.random(-100, 0),
                                                size: l.default.titleOpt.pSize,
                                                e: l.default.titleOpt.e
                                            };
                                            t.titleDots.push(new _.default(i))
                                        }),
                                        this.fallType = "mix"
                                    }
                                }
                            }, {
                                key: "end",
                                value: function () {
                                    this.fallType = "mix",
                                    this.time % 600 == 0 && this.createDenseFire()
                                }
                            }, {
                                key: "getDotsPostion",
                                value: function (t, e) {
                                    var i = this,
                                    r = "string" == typeof t ? t.split("") : t.shift().split(""),
                                    s = r.length,
                                    o = l.default.word.size,
                                    a = l.default.word.y,
                                    u = [];
                                    return r.forEach(function (t, r) {
                                        var h = void 0;
                                        h = s % 2 == 0 ? l.default.width / 2 + (r - s / 2) * o + .5 * o : l.default.width / 2 + (r - Math.floor(s / 2)) * o,
                                        i.shapeMaker.write({
                                            txt: t,
                                            x: h,
                                            y: a,
                                            size: o
                                        });
                                        var f = i.shapeMaker.getDots(l.default.shape);
                                        u.push.apply(u, n(f));
                                        var c = {};
                                        e && i.fireworks.push(new b.default({
                                                wait: 30,
                                                radius: 2,
                                                x: h,
                                                yEnd: a,
                                                dots: f,
                                                prtOption: c
                                            }))
                                    }),
                                    u
                                }
                            }, {
                                key: "drawBg",
                                value: function (t, e) {
                                    var i = e.width,
                                    r = e.height,
                                    n = i / r,
                                    s = this.width / this.height,
                                    o = void 0,
                                    a = void 0,
                                    l = void 0,
                                    u = void 0;
                                    n >= s ? (a = 0, u = r, o = (n - s) * i / 2, l = r * s) : n < s && (o = 0, l = i, a = (r - i / s) / 2, u = i / s),
                                    t.drawImage(e, o, a, l, u, 0, 0, this.width, this.height)
                                }
                            }, {
                                key: "dealImgs",
                                value: function (t) {
                                    var e = {};
                                    return t.forEach(function (t) {
                                        e[t.key] = t.img
                                    }),
                                    e
                                }
                            }
                        ]),
                    t
                }
                    ())
            }
            ()
        }, function (t, e, i) {
            "use strict";
            function r(t, e, i) {
                if (s.default.isPhone) {
                    var r = document.querySelectorAll("body")[0];
                    r.style.width = t + "px",
                    r.style.height = e + "px"
                }
                i.forEach(function (i) {
                    var r = document.querySelector("#" + i);
                    r.setAttribute("width", t),
                    r.setAttribute("height", e)
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(0),
            s = function (t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            (n);
            e.default = r
        }, function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = {
                bg: i(9),
                musicon: i(10),
                musicoff: i(11)
            };
            e.default = r
        }, function (t, e, i) {
            t.exports = i.p + "img/bg3.jpg"
        }, function (t, e, i) {
            t.exports = i.p + "img/musicon.png"
        }, function (t, e, i) {
            t.exports = i.p + "img/musicoff.png"
        }, function (t, e, i) {
            "use strict";
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            s = function () {
                function t() {
                    r(this, t)
                }
                return n(t, null, [{
                            key: "loadImg",
                            value: function (t, e) {
                                return new Promise(function (i, r) {
                                    var n = new Image;
                                    n.onload = function () {
                                        i({
                                            key: e,
                                            img: n
                                        })
                                    },
                                    n.onerror = r,
                                    n.src = t
                                })
                            }
                        }, {
                            key: "load",
                            value: function (t) {
                                var e = [];
                                for (var i in t)
                                    e.push(this.loadImg(t[i], i));
                                return Promise.all(e)
                            }
                        }
                    ]),
                t
            }
            ();
            e.default = s
        }, function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            function n(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = Array(t.length); e < t.length; e++)
                        i[e] = t[e];
                    return i
                }
                return Array.from(t)
            }
            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            a = i(1),
            l = r(a),
            u = i(0),
            h = r(u),
            f = i(5),
            c = r(f),
            d = i(14),
            p = r(d),
            y = .002,
            v = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = e.x,
                    r = e.y,
                    o = void 0 === r ? l.default.height : r,
                    a = e.xEnd,
                    u = e.yEnd,
                    f = e.size,
                    c = void 0 === f ? 2 : f,
                    d = e.radius,
                    v = void 0 === d ? [1.2, 1.2] : d,
                    g = e.velocity,
                    w = void 0 === g ? 3 : g,
                    m = e.opacity,
                    b = void 0 === m ? .8 : m,
                    x = e.count,
                    O = void 0 === x ? [200, 250] : x,
                    k = e.wait,
                    _ = e.color,
                    z = e.dots,
                    P = e.prtOption,
                    S = void 0 === P ? {}
                     : P;
                    if (s(this, t), this.x = i || h.default.random(l.default.width / 8, 7 * l.default.width / 8), this.y = o, this.xEnd = a || this.x, this.yEnd = u || h.default.random(l.default.height / 8, 3 * l.default.height / 8), this.size = c, this.opacity = b, this.velocity = -Math.abs(w), this.wait = k || h.default.random(30, 60), this.radius = h.default.random.apply(h.default, n(v)), this.GRAVITY = y, this.hue = 360 * Math.random() | 0, this.color = _ || "hsla(" + this.hue + ",80%,60%,1)", this.status = 1, z) {
                        this.type = "words";
                        var T = {
                            xStart: this.xEnd,
                            yStart: this.yEnd
                        };
                        this.particles = z.map(function (t) {
                            return new p.default(h.default.extend({}, t, T, S))
                        })
                    } else
                        this.count = 0 | h.default.random.apply(h.default, n(O)), this.particles = [], this.createParticles(), this.type = "normal"
                }
                return o(t, [{
                            key: "createParticles",
                            value: function () {
                                for (var t = 0; t < this.count; ++t)
                                    this.particles.push(new c.default({
                                            x: this.xEnd,
                                            y: this.yEnd,
                                            radius: this.radius
                                        }))
                            }
                        }, {
                            key: "getSkyColor",
                            value: function () {
                                return {
                                    lightness: 3 == this.status ? this.opacity : 0,
                                    hue: this.hue
                                }
                            }
                        }, {
                            key: "render",
                            value: function (t) {
                                switch (this.status) {
                                case 1:
                                    return t.save(),
                                    t.beginPath(),
                                    t.globalCompositeOperation = "lighter",
                                    t.globalAlpha = this.opacity,
                                    t.translate(this.x, this.y),
                                    t.scale(.8, 2.3),
                                    t.translate(-this.x, -this.y),
                                    t.fillStyle = this.color,
                                    t.arc(this.x + Math.sin(2 * Math.PI * Math.random()) / 1.2, this.y, this.size, 0, 2 * Math.PI, !1),
                                    t.fill(),
                                    t.restore(),
                                    this.rise(),
                                    !0;
                                case 2:
                                    return --this.wait <= 0 && (this.opacity = 1, this.status = 3),
                                    !0;
                                case 3:
                                    t.save(),
                                    t.globalCompositeOperation = "lighter",
                                    t.globalAlpha = this.opacity,
                                    t.fillStyle = this.color;
                                    for (var e = 0; e < this.particles.length; ++e)
                                        this.particles[e].render(t);
                                    return t.restore(),
                                    this.opacity -= .01,
                                    this.opacity > 0
                                }
                            }
                        }, {
                            key: "rise",
                            value: function () {
                                this.y += 1 * this.velocity,
                                this.velocity += this.GRAVITY,
                                this.y - this.yEnd <= 50 && (this.opacity = (this.y - this.yEnd) / 50),
                                this.y <= this.yEnd && (this.status = 2)
                            }
                        }
                    ]),
                t
            }
            ();
            e.default = v
        }, function (t, e, i) {
            "use strict";
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function n(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            a = i(5),
            l = function (t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            (a),
            u = function (t) {
                function e(t) {
                    var i = t.x,
                    s = t.y,
                    o = t.size,
                    a = void 0 === o ? 1 : o,
                    l = t.circle,
                    u = void 0 === l ? 1 : l,
                    h = t.xStart,
                    f = t.yStart;
                    r(this, e);
                    var c = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                                x: i,
                                y: s,
                                size: a,
                                circle: u
                            }));
                    return c.dx = (i - h) / 80,
                    c.dy = (s - f) / 80,
                    c.xStart = h,
                    c.yStart = f,
                    c
                }
                return s(e, t),
                o(e, [{
                            key: "go",
                            value: function () {
                                this.xStart += this.dx,
                                this.yStart += this.dy
                            }
                        }, {
                            key: "render",
                            value: function (t) {
                                this.go(),
                                t.beginPath(),
                                t.arc(this.xStart, this.yStart, this.size, 0, 2 * Math.PI, !1),
                                t.fill()
                            }
                        }
                    ]),
                e
            }
            (l.default);
            e.default = u
        }, function (t, e, i) {
            "use strict";
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            s = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 375,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 667;
                    r(this, t),
                    this.canvas = document.createElement("canvas"),
                    this.canvas.width = e,
                    this.canvas.height = i,
                    this.ctx = this.canvas.getContext("2d"),
                    this.ctx.fillStyle = "red",
                    this.ctx.textBaseline = "middle",
                    this.ctx.textAlign = "center"
                }
                return n(t, [{
                            key: "write",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.txt,
                                i = t.size,
                                r = void 0 === i ? 50 : i,
                                n = t.fontFamily,
                                s = void 0 === n ? "Arial" : n,
                                o = t.x,
                                a = void 0 === o ? this.canvas.width / 2 : o,
                                l = t.y,
                                u = void 0 === l ? 100 : l;
                                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                                this.ctx.font = "bold " + r + "px " + s,
                                this.ctx.fillText(e, a, u),
                                this.x = a,
                                this.y = u,
                                this.size = r,
                                this.count = e.length
                            }
                        }, {
                            key: "getPosition",
                            value: function () {
                                return {
                                    x: this.x,
                                    y: this.y
                                }
                            }
                        }, {
                            key: "getDots",
                            value: function () {
                                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.mini, i = void 0 === e ? 1 : e, r = t.gap, n = void 0 === r ? 5 : r, s = this.y - this.size / 2, o = this.canvas.width, a = this.size, l = this.ctx.getImageData(0, s, o, a).data, u = [], h = 0, f = s, c = 0, d = 0, p = l.length; d <= p; d += 4 * n)
                                    l[d + 3] > 0 && ++c % i == 0 && u.push({
                                        x: h,
                                        y: f
                                    }), (h += n) >= 0 + o && (f += n, d += 4 * (n - 1) * o - 4 * (h - 0 - o), h = 0);
                                return u
                            }
                        }
                    ]),
                t
            }
            ();
            e.default = s
        }, function (t, e, i) {
            "use strict";
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function n(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, i, r) {
                    return i && t(e.prototype, i),
                    r && t(e, r),
                    e
                }
            }
            (),
            a = i(4),
            l = function (t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            (a),
            u = function (t) {
                function e(t) {
                    var i = t.xStart,
                    s = t.yStart,
                    o = t.x,
                    a = t.y,
                    l = t.minSize,
                    u = t.maxSize,
                    h = t.size,
                    f = t.e,
                    c = void 0 === f ? 240 : f;
                    r(this, e);
                    var d = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                                x: i,
                                y: s,
                                minSize: l,
                                maxSize: u,
                                size: h
                            }));
                    return d.yEnd = a,
                    d.xEnd = o,
                    d.e = c,
                    d.dx = (d.xEnd - d.x) / d.e,
                    d.dy = (d.yEnd - d.y) / d.e,
                    d.status = 1,
                    d
                }
                return s(e, t),
                o(e, [{
                            key: "go",
                            value: function () {
                                return --this.e < 0 ? (this.x = this.xEnd, this.y = this.yEnd, !0) : (this.x += this.dx, this.y += this.dy, !1)
                            }
                        }, {
                            key: "render",
                            value: function (t) {
                                return this.go(),
                                t.save(),
                                t.beginPath(),
                                t.fillStyle = this.color,
                                t.moveTo(this.x + .5 * this.size, this.y + .3 * this.size),
                                t.bezierCurveTo(this.x + .1 * this.size, this.y, this.x, this.y + .6 * this.size, this.x + .5 * this.size, this.y + .9 * this.size),
                                t.bezierCurveTo(this.x + 1 * this.size, this.y + .6 * this.size, this.x + .9 * this.size, this.y, this.x + .5 * this.size, this.y + .3 * this.size),
                                t.closePath(),
                                t.fill(),
                                t.restore(),
                                !0
                            }
                        }
                    ]),
                e
            }
            (l.default);
            e.default = u
        }, function (t, e, i) {
            t.exports = i.p + "1.mp3"
        }
    ]);
