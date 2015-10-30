/*! HPE-Prod build: Tue Oct 27 2015 22:43:32 GMT-0400 (EDT) */
webpackJsonp([1], {
    65 : function(e, n, t) {
        "use strict";
        var i = t(14);
        e.exports = function() {
            function e() {
                var e = $(".parallax-container");
                e.length > 0 && e.each(function() {
                    var e = new n($(this));
                    e.init()
                })
            }
            function n(e) {
                function n(e, n, t, i, o) {
                    return i + (o - i) * (e - n) / (t - n)
                }
                function r() {
                    var n, t = $(e),
                    i = t.data("card").outerHeight(),
                    o = i,
                    a = 45;
                    t.attr("data-padBottomMargin") && (t.data("isTransformation") && o && o > 0 && (n = t.data("card").outerHeight() - $(e).data("refHeight"), i = n - a > 0 ? n - a: 0), t.css({
                        "margin-bottom": i
                    }))
                }
                function s() {
                    var n, t, i = 63,
                    o = 15,
                    a = $(e);
                    n = a.find(".tile-cta-wrapper:first"),
                    t = n.height(),
                    t > i && a.find(".tile-body").css("margin-bottom", o + (t - i) + "px")
                }
                function l() {
                    return $(e).data("isCrossSellTile") ? a: $(e).data("isTransformation") ? o: "0px"
                }
                this.init = function() {
                    var n = this,
                    t = $(e);
                    t.data("reference", t.find(".parallax-reference").eq(0)),
                    t.data("refHeight", t.data("reference").height()),
                    t.data("maxTravelPercent", parseFloat(t.attr("data-maxTravelPercent")) / 100),
                    t.data("minTravelPercent", parseFloat(t.attr("data-minTravelPercent")) / 100),
                    t.data("card", t.find(".parallax-card").eq(0)),
                    t.data("isTransformation", t.hasClass("hpe-cta-transformation-wrapper")),
                    t.data("isCrossSellTile", t.hasClass("tile")),
                    t.data("isCrossSellTile") && (s(), n.setCrossSellDefaultTopPosition()),
                    r(),
                    setTimeout(function() {
                        n.parallaxResize().then(function() {
                            n.setCardHeight().then(function() {
                                n.parallaxScroll(),
                                t.data("card").addClass("active")
                            })
                        })
                    },
                    200),
                    $(window).on("scroll",
                    function() {
                        n.parallaxScroll()
                    }).on("resize",
                    function() {
                        n.parallaxResize().then(function() {
                            n.setCrossSellDefaultTopPosition(),
                            n.setCardHeight()
                        })
                    })
                },
                this.parallaxScroll = function() {
                    var t, i, o = $(window).scrollTop(),
                    a = $(e),
                    r = $(window).height(),
                    s = o + r,
                    c = a.offset().top,
                    d = a.data("minTravelPercent"),
                    u = a.data("maxTravelPercent"),
                    f = a.data("refHeight");
                    o > c || c > s ? t = l() : (i = n(c, s, o, d, u), t = f * i),
                    t !== a.data("topValue") && ($(e).data("card").css({
                        top: t
                    }), a.data("topValue", t))
                },
                this.parallaxResize = function() {
                    var n = new $.Deferred,
                    t = $(e);
                    return t.data("refHeight", t.data("reference").height()),
                    r(),
                    n.resolve(),
                    n
                },
                this.setCardHeight = function() {
                    var n = $(e).closest(".row"),
                    o = n.find(".parallax-card"),
                    a = [],
                    r = 0,
                    s = new $.Deferred;
                    for (o.each(function() {
                        $(this).css("height", ""),
                        a.push($(this).height())
                    }), t = 0; t < a.length; t++) r = Math.max(r, a[t]);
                    return "xs" !== i.current() && o.height(r),
                    s.resolve(),
                    s
                },
                this.setCrossSellDefaultTopPosition = function() {
                    var n = $(e).find("img:first");
                    a = .85 * n.height() + "px"
                }
            }
            var t, o = "0px",
            a = "0px";
            return {
                initialize: e
            }
        } ()
    },
    66 : function(e, n, t) { (function(n, i) {
            "use strict";
            e.exports = function() {
                function e() {
                    d.log.log("PlayerInline: init"),
                    u.initialize(),
                    o()
                }
                function o() {
                    h.on("click", a),
                    p.on("click", r)
                }
                function a(e) {
                    e.preventDefault(),
                    l = this.getAttribute("data-video-type"),
                    c = this.getAttribute("data-video-id");
                    var t = $(this).closest(".hpe-player-inline");
                    s = u.createIframe(l, c),
                    t.hasClass("hpe-featured-marquee") && n.video && t.data("vid").pause(),
                    t.addClass("player-active"),
                    i.delay(function() {
                        t.find(".video-wrapper").html(s),
                        "youtube" === l ? t.find("iframe").load(function() {
                            $(this).show().focus(),
                            t.find(m).addClass("show")
                        }) : t.find(m).addClass("show").focus()
                    },
                    1500)
                }
                function r(e) {
                    e.preventDefault();
                    var t = $(this).closest(".hpe-player-inline");
                    t.find(".video-wrapper").empty(),
                    t.find(m).removeClass("show"),
                    t.removeClass("player-active"),
                    t.hasClass("hpe-featured-marquee") && n.video && t.data("vid").play(),
                    t.find(f).focus(),
                    $(window).trigger("resize")
                }
                var s, l, c, d = t(1),
                u = t(67),
                f = ".player-inline-play",
                m = ".player-inline-close",
                h = $(f),
                p = $(m);
                return {
                    initialize: e
                }
            } ()
        }).call(n, t(21), t(10))
    },
    67 : function(e, n) {
        "use strict";
        e.exports = function() {
            function e() {
                var e = document.createElement("script");
                e.src = "https://sadmin.brightcove.com/js/BrightcoveExperiences.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(e, n)
            }
            function n(e, n) {
                return "youtube" === e ? (i = r, o = "[YOUTUBE_VIDEO_ID]") : (i = s, o = "[BRIGHTCOVE_VIDEO_ID]"),
                t = i.replace(o, n).replace(o, n)
            }
            var t, i, o, a = "https:" === window.location.protocol,
            r = '<iframe class="video-center-inner" width="100%" height="100%" src="https://www.youtube.com/embed/[YOUTUBE_VIDEO_ID]?showinfo=0&wmode=transparent&autoplay=1&rel=0" frameborder="0" allowfullscreen="yes"></iframe>',
            s = '<!-- Start of Brightcove Player --><div style="display:none">GALLERY - Chromeless Player</div><!--By use of this code snippet, I agree to the Brightcove Publisher T and Cfound at https://accounts.brightcove.com/en/terms-and-conditions/.--><object id="myExperience[BRIGHTCOVE_VIDEO_ID]" class="BrightcoveExperience"><param name="htmlFallback" value="true" /><param name="bgcolor" value="#FFFFFF" /><param name="width" value="100%" /><param name="height" value="100%" /><param name="playerID" value="4539314514001" /><param name="playerKey" value="AQ~~,AAADvzuhPuE~,HyfNwh079FSroju6-r5dh_EQC1YEPDGH" /><param name="isVid" value="true" /><param name="autoStart" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="@videoPlayer" value="ref:[BRIGHTCOVE_VIDEO_ID]" /><param name="wmode" value="transparent"/>' + (a ? '<param name="secureConnections" value="true" /><param name="secureHTMLConnections" value="true" />': " ") + '</object><!--This script tag will cause the Brightcove Players defined above it to be created as soonas the line is read by the browser. If you wish to have the player instantiated only afterthe rest of the HTML is processed and the page load is complete, remove the line.--><script type="text/javascript">brightcove.createExperiences();</script><!-- End of Brightcove Player -->';
            return {
                initialize: e,
                createIframe: n
            }
        } ()
    },
    68 : function(e, n) {
        "use strict";
        e.exports = function() {
            function e() {
                var e = $(".component-product-cards");
                e.length > 0 && (e.each(function() {
                    var e = new n($(this));
                    e.init()
                }), setTimeout(function() {
                    e.find(".tile-content").matchHeight(),
                    e.find(".tile-description").matchHeight()
                },
                200), e.find(".tile").on("click", t), window.navigator.userAgent.match(/Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i) || e.find(".tile").on("mouseenter", i).on("mouseleave", o))
            }
            function n(e) {
                this.tilesDescription = e.find(".tile-description"),
                this.init = function() {}
            }
            function t(e) {
                var n = $(this).find(".cta-link");
                n.is($(e.target)) || n[0].click()
            }
            function i() {
                var e = $(this);
                e.closest(".component-product-cards").find(".tile").removeClass("hovered").addClass("unhovered"),
                e.removeClass("unhovered").addClass("hovered")
            }
            function o() {
                $(this).closest(".component-product-cards").find(".tile").removeClass("hovered unhovered")
            }
            return {
                initialize: e
            }
        } ()
    },
    69 : function(e, n, t) {
        "use strict";
        var i = t(14);
        e.exports = function() {
            function e() {
                c = $(l).length - 1,
                $(s).flexslider({
                    animation: "slide",
                    controlNav: !1,
                    directionNav: !0,
                    keyboard: !0,
                    touch: !0,
                    prevText: '<em class="icon-arrow-left"><span>left</span></em>',
                    nextText: '<em class="icon-arrow-right"><span>right</span></em>',
                    start: function() {
                        $(s).resize(),
                        t = 0,
                        a = 1,
                        o = c,
                        r = "next",
                        n($($(l)[o]), $($(l)[a]))
                    },
                    after: function() {
                        "next" === r ? c > t ? (t++, a = t + 1, o = t - 1) : t = 0 : (t > 0 ? (t--, a = t + 1, o = t - 1) : t = c, r = "next"),
                        t === c && (a = 0, o = c - 1),
                        0 === t && (o = c, a = 1),
                        n($($(l)[o]), $($(l)[a]))
                    }
                }),
                $(".flex-prev").on("click",
                function() {
                    return r = "prev",
                    !1
                }),
                $(".flex-next").on("click",
                function() {
                    return r = "next",
                    !1
                })
            }
            function n(e, n) {
                var t, o, a, r = i.current();
                t = "xs" === r ? "0px": "sm" === r ? "768px": "992px",
                "0px" !== t ? (o = $(n).find('source[media="(min-width: ' + t + ')"]').attr("data-srcset").split(",")[0].split(" ")[0], a = $(e).find('source[media="(min-width: ' + t + ')"]').attr("data-srcset").split(",")[0].split(" ")[0], $(".flex-nav-next").css({
                    background: "url(" + o + ") center left no-repeat",
                    "background-size": "cover"
                }), $(".flex-nav-prev").css({
                    background: "url(" + a + ") center right no-repeat",
                    "background-size": "cover"
                })) : ($(".flex-nav-next").css("background", "none"), $(".flex-nav-prev").css("background", "none"))
            }
            var t, o, a, r, s = $(".carousel"),
            l = $(".slides li"),
            c = 0;
            return {
                initialize: e
            }
        } ()
    },
    70 : function(e, n, t) { (function(n, i) {
            "use strict";
            e.exports = function() {
                function e() {
                    g.length > 0 && (u = g.attr("data-autosuggest-autosuggesturl"), f = g.attr("data-autosuggest-redirectionurl"), a(), g.on("mousedown",
                    function(e) {
                        $(e.target).is(v) || (e.preventDefault(), e.stopPropagation(), v.focus())
                    }), v.on("keydown", c), o(), m.services.subscribe(m.constants.AUTO_COMPLETE_CLEAN, this, l)),
                    $("#search-icon").on("focusin",
                    function(e) {
                        $(this).parent().hasClass("open") && (e.preventDefault(), e.stopPropagation())
                    })
                }
                function o() {
                    g.on("focusout",
                    function() {
                        n.delay(function() {
                            0 === $(".main-navbar").find(".navbar-nav > .dropdown.open").length && p.removeClass("active-menu")
                        },
                        200)
                    })
                }
                function a() {
                    d(),
                    v.keyup(function() {
                        d()
                    }),
                    b.on("click",
                    function(e) {
                        e.stopImmediatePropagation(),
                        l(),
                        v.val("").focus()
                    }),
                    b.on("mousedown",
                    function(e) {
                        e.preventDefault(),
                        e.stopPropagation()
                    }),
                    C.on("click",
                    function() {
                        v.val("")
                    }),
                    y.on("click",
                    function() {
                        window.location.href = f + "" + v.val()
                    }),
                    v.autocomplete({
                        source: function(e, n) {
                            i.request.define("searchAutocomplete", "ajax", {
                                url: u + "" + e.term,
                                type: "GET",
                                dataType: "jsonp",
                                contentType: "application/json",
                                async: !1,
                                jsonpCallback: "autocomplete"
                            }),
                            i.request("searchAutocomplete",
                            function(e) {
                                var t;
                                e.data.SuggestionItems[0] && (t = r(e.data.SuggestionItems[0].list), n(t))
                            })
                        },
                        minLength: 2,
                        autoFocus: !1,
                        appendTo: g,
                        select: function(e, n) {
                            f = f,
                            n = n,
                            _ = !0,
                            window.location.href = f + "" + n.item.label
                        },
                        open: function() {
                            s(v.val())
                        },
                        close: function() {
                            w.css("display", "block")
                        }
                    }).data("autocomplete")._renderItem = function(e, n) {
                        return $('<li class="dropItem"></li>').data("item.autocomplete", n).append($("<a></a>").html(n.label)).appendTo(e)
                    }
                }
                function r(e) {
                    h = [];
                    var n, t;
                    for (t in e) n = {
                        score: e[t].score,
                        label: e[t].term0
                    },
                    h.length < 5 && h.push(n);
                    return h
                }
                function s(e) {
                    $(".ui-menu-item > a").each(function() {
                        var n = $(this).text(),
                        t = n.replace(e.toLowerCase(), '<span class="highlight">' + e + "</span>");
                        $(this).html(t)
                    })
                }
                function l() {
                    v.val(""),
                    $(".ui-autocomplete").hide(),
                    v.data().autocomplete.term = null,
                    _ = !1
                }
                function c(e) {
                    13 === e.keyCode && (e.preventDefault(), _ || "" === v.val() || y[0].click())
                }
                function d() {
                    v.val().length > 0 ? (b.css("visibility", "visible"), s(v.val())) : b.css("visibility", "hidden")
                }
                var u, f, m = t(1),
                h = [],
                p = $("body"),
                g = $(".search_component"),
                v = $("#search_text"),
                b = $("#search_clear_component"),
                y = $("#search_glass_component"),
                w = $(".search"),
                C = $(".close-search-btn"),
                _ = !1;
                return {
                    initialize: e
                }
            } ()
        }).call(n, t(10), t(5))
    },
    71 : function(e, n) {
        "use strict";
        e.exports = function() {
            function e() {
                var e = $('<svg class="top"><defs><linearGradient id="topFade" x1="0" x2="0" y1="0" y2="1"><stop offset="15%" stop-color="#252525" stop-opacity="1" /><stop offset="95%" stop-color="#252525" stop-opacity="0"/></linearGradient></defs><rect fill="url(#topFade)"></rect> </svg>'),
                t = $('<svg class="bott"><defs><linearGradient id="bottFade" x1="0" x2="0" y1="1" y2="0"><stop offset="15%" stop-color="#252525" stop-opacity="1" /><stop offset="95%" stop-color="#252525" stop-opacity="0"/></linearGradient></defs><rect fill="url(#bottFade)"></rect> </svg>');
                $(".fadeList").before(e),
                $(".fadeList").after(t),
                $(".fadeList").on("scroll",
                function(e) {
                    n(e)
                }),
                $(".fadeList").each(function() {
                    $(this).trigger("scroll")
                })
            }
            function n(e) {
                $(e.target).scrollTop() < 3 ? $(e.target).parent().addClass("topMax") : $(e.target).parent().removeClass("topMax"),
                e.target.scrollTop + $(e.target).height() > e.target.scrollHeight - 3 ? $(e.target).parent().addClass("bottMax") : $(e.target).parent().removeClass("bottMax")
            }
            return {
                initialize: e
            }
        } ()
    },
    73 : function(e, n, t) { (function(n) {
            "use strict";
            e.exports = function() {
                function e() {
                    var e = $(".center-breaking-plane");
                    e.length > 0 && n.each(e,
                    function(e) {
                        var n = new t($(e));
                        n.init()
                    })
                }
                function t(e) {
                    this.init = function() {
                        var n = e.find(".buffer-top"),
                        t = e.find(".buffer-bottom");
                        n.css("height", parseInt(10 * n.attr("data-buffer-height")) + "%"),
                        t.css("height", parseInt(10 * (10 - n.attr("data-buffer-height"))) + "%")
                    }
                }
                return {
                    initialize: e
                }
            } (jQuery)
        }).call(n, t(10))
    },
    74 : function(e, n, t) { (function(n) {
            "use strict";
            e.exports = function() {
                function e() {
                    f.initialize(),
                    m.length > 0 && ($(h).append(g), c = o(), g.html(c), m.each(function() { ("undefined" !== m.attr("href") || void 0 !== m.attr("href")) && m.attr("href", "javascript:void(0)")
                    }), i()),
                    a().length > 1 && (m.length > 0 && m.each(function(e) {
                        $(m[e]).attr("data-attribute-video-id") === a()[1] && (l = m[e])
                    }), $(l).trigger("click"))
                }
                function i() {
                    m.on("click",
                    function(e) {
                        e.stopPropagation(),
                        e.stopImmediatePropagation();
                        var t = $(this),
                        i = $("#video-overlay").find(".close-video");
                        d = t,
                        s(t.attr("data-attribute-video-link"), t.attr("data-attribute-video-title")),
                        g.css({
                            height: $(window).height()
                        }).show(),
                        $(h).css("overflow", "hidden"),
                        u = f.createIframe(t.attr("data-attribute-video-type"), t.attr("data-attribute-video-id")),
                        $(".video-content").html(u),
                        n.delay(function() {
                            i.focus()
                        },
                        300)
                    }),
                    $(".close-video-btn").on("click",
                    function() {
                        r()
                    }),
                    $("#video-overlay").on("click",
                    function(e) {
                        e.stopPropagation(),
                        e.stopImmediatePropagation()
                    });
                    var e = $(h).find(".layer-bg-overlay");
                    e.on("click",
                    function() {
                        r(),
                        e.off("focusout.third-level-menu")
                    })
                }
                function o() {
                    var e = '<div id="video-container" class="video-container video-centered"><div class="video-title-bar"> <span class="video-title">  </span><div class="addthis_toolbox sharebox" id="addthis_video_toolbox"><a id="addthis_video_button" class="addthis_button show-it" ><em class="icon-share-global share-video-btn"></em></a></div></div><div class="video-content"></div><button class="icon-link close-video close-video-btn icon-nav-close-menu close-btn" role="button"><span class="text-hide">' + v + '</span></button></div><div class="layer-bg-overlay activeBg"></div>';
                    return e
                }
                function a() {
                    var e = window.location.pathname.substring(window.location.pathname.indexOf(".") + 1);
                    return e.split(".")
                }
                function r() {
                    var e = $(h).find("object"),
                    n = $(h).find("iframe.video-center-inner"),
                    t = $(h).find("iframe.BrightcoveExperience");
                    d.focus(),
                    d = "",
                    $("body").off("focus.videoOverlay"),
                    e && $(e).remove(),
                    t && $(t).remove(),
                    n && $(n).remove(),
                    g.hide(),
                    g.find(".video-content").html(),
                    $(h).css("overflow", "auto"),
                    m.find(".addthis_toolbox").length > 0 && (window.addthis.update("share", "url", window.location.href), window.addthis.update("share", "title", document.title))
                }
                function s(e, n) {
                    g.find(".video-title").text(n),
                    setTimeout(function() {
                        m.find(".addthis_toolbox").length > 0 && (window.addthis.update("share", "url", window.location.protocol + "//" + window.location.host + e), window.addthis.update("share", "title", n))
                    },
                    1e3)
                }
                var l, c, d, u, f = t(67),
                m = $(".video-overlay"),
                h = $("body"),
                p = document.createElement("div");
                p.id = "video-overlay",
                p.className = "overlay";
                var g = $(p).hide(),
                v = "Close";
                return {
                    initialize: e
                }
            } ()
        }).call(n, t(10))
    },
    75 : function(e, n, t) { (function(n) {
            "use strict";
            var i = t(76);
            e.exports = function() {
                function e() {
                    w = x.attr("data-attribute-url") ? x.attr("data-attribute-url") : 0,
                    x.parent(".dropdown").on("focusout",
                    function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        e.stopImmediatePropagation()
                    }),
                    $(window).on("hpe.breakpointchange",
                    function() {
                        b()
                    }),
                    v(),
                    $("#connect-icon").one("click",
                    function() {
                        C.services.publish(C.constants.SHOW_SPINNER),
                        r(w)
                    }),
                    C.services.subscribe(C.constants.CONTACT_US_RESET, this, b),
                    $("#connect-icon").on("focusin",
                    function(e) {
                        $(this).parent().hasClass("open") && (e.preventDefault(), e.stopPropagation())
                    })
                }
                function o() {
                    T.on("click",
                    function() {
                        b()
                    }),
                    H.on("click",
                    function() {
                        s("selfCustomerHome")
                    }),
                    j.on("click",
                    function() {
                        s("callCustomerHome")
                    }),
                    N.on("click",
                    function() {
                        s("callHome"),
                        c()
                    }),
                    q.on("click",
                    function() {
                        s("emailHome")
                    }),
                    F.on("click",
                    function() {
                        s("findHome")
                    }),
                    k.on("click",
                    function() {
                        s("callHome"),
                        c(),
                        a(k)
                    }),
                    P.on("click",
                    function() {
                        s("supportHome"),
                        u(),
                        H.addClass("active"),
                        a(P)
                    }),
                    I.on("click",
                    function() {
                        U.addClass("hide"),
                        U.parent().removeClass("open"),
                        Y.toggleClass(),
                        Y.parent().addClass("open")
                    }),
                    E.on("click",
                    function() {
                        U.toggleClass(),
                        U.parent().addClass("open"),
                        Y.addClass("hide"),
                        Y.parent().removeClass("open")
                    }),
                    W.on("click",
                    function() {
                        h("call"),
                        Z.removeClass("hide"),
                        Z.addClass("landing-mobile-open"),
                        c()
                    }),
                    V.on("click",
                    function() {
                        J.removeClass("hide"),
                        J.addClass("landing-mobile-open"),
                        i.initialize()
                    }),
                    Q.on("click",
                    function() {
                        ee.removeClass("hide"),
                        ee.addClass("landing-mobile-open")
                    }),
                    K.on("click",
                    function() {
                        h("support"),
                        te.removeClass("hide"),
                        te.addClass("landing-mobile-open"),
                        u()
                    }),
                    X.on("click",
                    function() {
                        h("support"),
                        ne.removeClass("hide"),
                        ne.addClass("landing-mobile-open")
                    }),
                    G.on("click",
                    function() {
                        G.parent().removeClass("landing-mobile-open").addClass("hide")
                    })
                }
                function a(e) {
                    e.focus()
                }
                function r(e) {
                    e.length > 0 && (C.services.define("dataContact", "ajax", {
                        url: "https://www.hpe.com/services/hpe/contactus?path=" + e,
                        type: "GET",
                        dataType: "json",
                        contentType: "application/json",
                        async: !1,
                        jsonpCallback: "contactinfo"
                    }), C.services.request({
                        resourceId: "dataContact",
                        success: function(e) {
                            y = e,
                            C.services.publish(C.constants.HIDE_SPINNER),
                            c(),
                            h("call"),
                            o()
                        },
                        error: function(n, t) {
                            C.services.publish(C.constants.HIDE_SPINNER),
                            C.log.info("Error: " + e + " - " + n + ". " + t)
                        }
                    }))
                }
                function s(e, n) {
                    switch (e) {
                    case "selfCustomerHome":
                        l(H, z);
                        break;
                    case "callCustomerHome":
                        l(j, L),
                        se.addClass("hide"),
                        h("support"),
                        p();
                        break;
                    case "callHome":
                        l(N, R),
                        ae.addClass("hide"),
                        B.addClass("hide"),
                        O.addClass("hide"),
                        A.removeClass("hide"),
                        h("call");
                        break;
                    case "callSpecialist":
                        ae.removeClass("hide"),
                        d(),
                        $(".result, .result-support").addClass("hide"),
                        p();
                        break;
                    case "callResult":
                        m(A.find(".result")),
                        m(U.find(".result"));
                        break;
                    case "supportSpecialist":
                        se.removeClass("hide"),
                        f(n),
                        $(".result, .result-support").addClass("hide"),
                        p();
                        break;
                    case "supportResult":
                        g(B.find(".result-support")),
                        g(Y.find(".result-support"));
                        break;
                    case "emailHome":
                        l(q, D),
                        i.initialize();
                        break;
                    case "findHome":
                        l(F, M);
                        break;
                    case "supportHome":
                        l(H, z),
                        B.removeClass("hide"),
                        A.addClass("hide"),
                        O.addClass("hide")
                    }
                }
                function l(e, n) {
                    R.addClass("hide"),
                    D.addClass("hide"),
                    M.addClass("hide"),
                    L.addClass("hide"),
                    z.addClass("hide"),
                    A.find(".result").addClass("hide"),
                    B.find(".result-support").addClass("hide"),
                    n.removeClass("hide"),
                    ie.find("button").removeClass("active"),
                    e.addClass("active")
                }
                function c() {
                    var e = "";
                    void 0 !== y && ($("#c1s, #c11s, #country-contact, #country-contact-mobile").html(""), n.each(y[0].countries,
                    function(n, t) {
                        0 !== t && (e = t);
                        var i = $("<option></option>").attr("value", e).text(n.country);
                        $("#c1s, #c11s, #country-contact, #country-contact-mobile").append(i)
                    }), $("#c1s, #c11s").on("change",
                    function() {
                        $(".result, .result-support").html(""),
                        le = $(this).val(),
                        s("callSpecialist")
                    }))
                }
                function d() {
                    $("#c2s, #c21s").html(""),
                    y[0].countries[le].types.length > 2 ? (n.each(y[0].countries[le].types,
                    function(e, n) {
                        var t = $("<option></option>").attr("value", n).text(e.question);
                        $("#c2s, #c21s").append(t)
                    }), $("#c2s, #c21s").on("change",
                    function() {
                        ce = $(this).val(),
                        s("callResult")
                    })) : (ce = 1, ae.addClass("hide"), s("callResult"))
                }
                function u() {
                    void 0 !== y && ($("#s1s, #s11s").html(""), n.each(y[1].countries,
                    function(e, n) {
                        var t = $("<option></option>").attr("value", n).text(e.country);
                        $("#s1s, #s11s").append(t)
                    }), $("#s1s, #s11s").on("change",
                    function() {
                        $(".result, .result-support").html(""),
                        de = $(this).val(),
                        s("supportSpecialist")
                    }))
                }
                function f() {
                    $("#s2s, #s22s").html(""),
                    y[1].countries[de].types.length > 2 ? (n.each(y[1].countries[de].types,
                    function(e, n) {
                        var t = $("<option></option>").attr("value", n).text(e.question);
                        $("#s2s, #s22s").append(t)
                    }), $("#s2s, #s22s").on("change",
                    function() {
                        ue = $(this).val(),
                        s("supportResult")
                    })) : (ue = 1, se.addClass("hide"), s("supportResult"))
                }
                function m(e) {
                    var t = "";
                    le > 0 && (e.removeClass("hide"), t = n.unescape(y[0].countries[le].types[ce].contactDetails), e.html(t))
                }
                function h(e) {
                    fe = e,
                    void 0 !== y && "undefined" !== y && ("support" === fe ? 2 === y[1].countries.length && (re.addClass("hide"), se.removeClass("hide"), de = 1, f()) : 2 === y[0].countries.length && (oe.addClass("hide"), ae.removeClass("hide"), le = 1, d()))
                }
                function p() {
                    void 0 !== y && "undefined" !== y && ("support" === fe ? (null === de && (de = 1), 2 === y[1].countries[de].types.length && (se.addClass("hide"), B.find(".result-support").removeClass("hide"), Y.find(".result-support").removeClass("hide"), ue = 1)) : 2 === y[0].countries[le].types.length && (ae.addClass("hide"), A.find(".result").removeClass("hide"), U.find(".result").removeClass("hide"), ce = 1))
                }
                function g(e) {
                    var t = "";
                    de > 0 && (e.removeClass("hide"), t = n.unescape(y[1].countries[de].types[ue].contactDetails), e.html(t))
                }
                function v() {
                    S = _.current(),
                    "xs" === S ? (E.click(), E.closest("li").addClass("open"), U.removeClass("hide")) : s("callHome")
                }
                function b() {
                    le = ce = ue = de = null,
                    ae.addClass("hide"),
                    A.find(".result").addClass("hide"),
                    O.removeClass("hide"),
                    A.addClass("hide"),
                    B.addClass("hide"),
                    U.addClass("hide"),
                    U.parent().removeClass("open"),
                    U.find(".result").addClass("hide"),
                    Y.addClass("hide"),
                    Y.parent().removeClass("open"),
                    Y.find(".result-support").addClass("hide"),
                    R.addClass("hide"),
                    D.addClass("hide"),
                    M.addClass("hide"),
                    v()
                }
                var y, w, C = t(1),
                _ = t(14),
                x = $(".contact-form-component"),
                S = _.current(),
                E = $("#salesFirstButtonMobile"),
                I = $("#supportFirstButtonMobile"),
                T = $(".close-contact-btn"),
                k = $(".sales-sub-button"),
                P = $(".support-sub-button"),
                O = $(".initial-step"),
                A = x.find(".sales-step"),
                B = x.find(".support-step"),
                R = $(".info-call"),
                D = $(".info-email"),
                M = $(".info-partner"),
                L = $(".info-call-support"),
                z = $(".self-service"),
                N = $(".call-btn"),
                q = $(".email-btn"),
                F = $(".find-btn"),
                H = $(".self-service-btn"),
                j = $(".support-call-btn"),
                U = $("#sales-menu-mobile"),
                Y = $("#support-menu-mobile"),
                W = $(".call-button-mobile"),
                V = $(".email-button-mobile"),
                Q = $(".find-button-mobile"),
                X = $(".sup-self-mobile"),
                K = $(".sup-call-mobile"),
                G = $(".back-contact-btn"),
                Z = $(".info-call-mobile"),
                J = $(".info-email-mobile"),
                ee = $(".info-partner-mobile"),
                ne = $(".info-sup-self-mobile"),
                te = $(".info-sup-call-mobile"),
                ie = $(".tab-menu"),
                oe = x.find(".c1"),
                ae = x.find(".c2"),
                re = x.find(".s1"),
                se = x.find(".s2"),
                le = 1,
                ce = 1,
                de = 1,
                ue = 1,
                fe = "";
                return {
                    initialize: e
                }
            } ()
        }).call(n, t(10))
    },
    76 : function(e, n, t) {
        "use strict";
        var i, o, a, r, s, l, c, d, u, f, m = t(1),
        h = t(14),
        p = t(60),
        g = t(20),
        v = {},
        b = {},
        y = window.CQ;
        e.exports = function() {
            function e() {
                window.navigator.cookieEnabled ? n() : t()
            }
            function n() {
                return void 0 !== y && y.WCM.isEditMode() ? !1 : void t()
            }
            function t() {
                C(),
                $("#contact-us-email").removeClass("hide"),
                $("#contact-us-email-mobile").removeClass("hide"),
                $(".thanks-text").addClass("hide"),
                $("#callmeMobile-contact-us, #callme-contact-us").prop("checked", !1),
                $("button[type=submit]").prop("disabled", !1),
                k(I()),
                $(".close-form").on("click",
                function() {
                    $("#contact-us-email").removeClass("hide"),
                    $("#contact-us-email-mobile").removeClass("hide"),
                    $(".thanks-text").addClass("hide"),
                    $(".contact-form-component").parent().removeClass("open"),
                    $("button[type=submit]").prop("disabled", !1)
                }),
                $(".close-form-mobile").on("click",
                function() {
                    $("#contact-us-email").removeClass("hide"),
                    $("#contact-us-email-mobile").removeClass("hide"),
                    $(".thanks-text").addClass("hide"),
                    $(".info-email-mobile").removeClass("landing-mobile-open").addClass("hide"),
                    $("button[type=submit]").prop("disabled", !1)
                }),
                l = h.current(),
                $(window).on("hpe.breakpointchange",
                function(e, n) {
                    l = n,
                    S()
                }),
                S(),
                T(I()),
                setTimeout(function() {
                    w()
                },
                5e3),
                $(window).on("hpe.breakpointchange",
                function() {
                    M()
                })
            }
            function w() {
                $("#db_data_container").length > 0 && ($("#company-contact").attr("value", $("#db_registry_company_name").attr("value")), $("#company-contact-mobile").attr("value", $("#db_registry_company_name").attr("value")), _())
            }
            function C() {
                $("#essaytext").val(""),
                $("#essaytext-contact-mobile").val(""),
                $("#contact-us-email-mobile .textarea-input").removeClass("has-value"),
                $("#contact-us-email .textarea-input").removeClass("has-value")
            }
            function _() {
                $("#email-contact").change(function() {
                    x()
                }),
                $("#email-contact-mobile").change(function() {
                    x()
                })
            }
            function x() {
                setTimeout(function() {
                    var e = $("#db_company_name").attr("value");
                    $("#company-contact").attr("value", e),
                    $("#company-contact-mobile").attr("value", e)
                },
                2e3)
            }
            function S() {
                var e;
                e = "xs" === l ? g.getFormById("contact-us-email-mobile") : g.getFormById("contact-us-email"),
                e.validator.settings.submitHandler = function() {
                    m.services.publish(m.constants.SHOW_SPINNER);
                    var e = E();
                    $("button[type=submit]").prop("disabled", !0);
                    var n = $("#contact-us-email, #contact-us-email-mobile").find("input");
                    for (c = 0; c < n.length; c++) $(n[c]).hasClass("focus-handler") && ($(n[c]).is(":checked") ? $(n[c]).attr("value", "Y") : $(n[c]).attr("value", "N"));
                    for (s = e.serialize(), s = s.split("&"), r = 0; r < s.length; r++) a = s[r].split("="),
                    a.length > 1 && (b[a[0].trim()] = a[1]);
                    b["1~aid_p_email_address"] = b["1~aid_p_email_address"].replace("%40", "@"),
                    b["1~aid_p_country_FK"] = e.find('[name="1~aid_p_country_FK"]').find(":selected").text(),
                    m.services.subscribe(m.constants.RESOURCES_FORM_SUBMITTED_CONTACT_US, this,
                    function() {
                        m.services.publish(m.constants.HIDE_SPINNER),
                        $("#contact-us-email").addClass("hide"),
                        $("#contact-us-email-mobile").addClass("hide"),
                        $(".thanks-text").removeClass("hide"),
                        $(document).scrollTop(0),
                        C()
                    }),
                    p.submitEloquaInfo(b, !1, "contactUs")
                }
            }
            function E() {
                var e;
                return e = "xs" === l ? $("#contact-us-email-mobile") : $("#contact-us-email")
            }
            function I() {
                for (o = document.cookie.split(";"), r = 0; r < o.length; r++) a = o[r].split("="),
                a.length > 1 && (v[$.trim(a[0])] = a[1]);
                return v
            }
            function T(e) {
                e.hpe_locale ? (f = e.hpe_locale, f = f.split("%22").join(""), f = f.replace("{", ""), f = f.replace("}", ""), f = f.replace("country:", ""), f = f.replace("language:", ""), f = f.split("%2C"), $(".elqCountryCodeCU").attr("value", f[0]), $(".elqLanguageCodeCU").attr("value", f[1])) : ($(".elqCountryCodeCU").attr("value", "us"), $(".elqLanguageCodeCU").attr("value", "en"))
            }
            function k(e) {
                "undefined" === e.HPE_ELOQUA || void 0 === e.HPE_ELOQUA ? P() : B()
            }
            function P() {
                m.services.subscribe(m.constants.RESOURCES_ELOQUA_HANDLER, this,
                function(e) {
                    i = e,
                    O("HPE_ELOQUA", A(i), 30)
                }),
                p.getEloquaId("downloadForm")
            }
            function O(e, n, t, i) {
                p.createEloquaCookie(e, n, t, i)
            }
            function A(e) {
                return e.split("-").join("")
            }
            function B() {
                m.services.subscribe(m.constants.RESOURCES_ELOQUA_LOOKUP_CONTACT_US, this,
                function(e) {
                    R(e)
                }),
                p.getEloquaUserInfo("contactUsForm")
            }
            function R(e) {
                D(e)
            }
            function D(e) {
                void 0 !== e.contactInfo && $.each(e.contactInfo,
                function(e, n) {
                    "xs" === l ? $("#" + e + "-contact-mobile").attr("value", decodeURI(n)) : $("#" + e + "-contact").attr("value", decodeURI(n))
                })
            }
            function M() {
                d = [],
                u = [],
                $("#contact-us-email").find('input[id*="-contact"]').each(function(e, n) {
                    d.push($(n).val())
                }),
                $("#contact-us-email-mobile").find("input[id*=-contact-mobile]").each(function(e, n) {
                    u.push($(n).val())
                }),
                L()
            }
            function L() {
                "xs" === l ? ("" !== $("#email-contact").val() && $("#email-contact-mobile").val($("#email-contact").val()), "" !== $("#essaytext").val() && $("#essaytext-contact-mobile").val($("#essaytext").val()), "" !== $("#firstname-contact").val() && $("#firstname-contact-mobile").val($("#firstname-contact").val()), "" !== $("#lastname-contact").val() && $("#lastname-contact-mobile").val($("#lastname-contact").val()), "" !== $("#company-contact").val() && $("#company-contact-mobile").val($("#company-contact").val()), "" !== $("#businessphone-contact").val() && $("#businessphone-contact-mobile").val($("#businessphone-contact").val())) : ("" !== $("#email-contact-mobile").val() && $("#email-contact").val($("#email-contact-mobile").val()), "" !== $("#essaytext-contact-mobile").val() && $("#essaytext").val($("#essaytext-contact-mobile").val()), "" !== $("#firstname-contact-mobile").val() && $("#firstname-contact").val($("#firstname-contact-mobile").val()), "" !== $("#lastname-contact-mobile").val() && $("#lastname-contact").val($("#lastname-contact-mobile").val()), "" !== $("#company-contact-mobile").val() && $("#company-contact").val($("#company-contact-mobile").val()), "" !== $("#businessphone-contact-mobile").val() && $("#businessphone-contact").val($("#businessphone-contact-mobile").val()))
            }
            return {
                initialize: e
            }
        } ()
    }
});