/*! HPE-Prod build: Tue Oct 27 2015 22:43:32 GMT-0400 (EDT) */
webpackJsonp([0], [function(e, n, t) {
    "use strict";
    t.p = window.__webpack_asset_path;
    var i = t(1);
    i.log = t(2),
    i.constants = t(3),
    i.services = t(4),
    i.nav = t(9),
    i.countryLanguageSelector = t(11),
    i.footer = t(13),
    i.bootstrapNav = t(17),
    i.breakpoints = t(14),
    i.responsiveImages = t(18),
    i.hpeForms = t(19),
    i.formValidation = t(20),
    i.componentFollowNav = t(26),
    i.twitterTimelineComponent = t(27),
    i.categoryRouter = t(28),
    i.hybridRouter = t(33),
    i.initializeParallaxCards = function() {
        $(".parallax-container").length > 0 && t.e(1,
        function(e) {
            t(65).initialize()
        })
    },
    i.initializeVideplayerComponent = function() {
        $(".hpe-player-inline").length > 0 && t.e(1,
        function(e) {
            t(66).initialize()
        })
    },
    i.initializeProductCardComponent = function() {
        $(".component-product-cards").length > 0 && t.e(1,
        function(e) {
            t(68).initialize()
        })
    },
    i.initializeBladeCarouselComponent = function() {
        $(".component-bladecarousel").length > 0 && t.e(1,
        function(e) {
            t(69).initialize()
        })
    },
    i.initializeSearchComponent = function() {
        $(".search_component").length > 0 && t.e(1,
        function(e) {
            t(70).initialize()
        })
    },
    i.initializeFadeListBehavior = function() {
        $(".fadeList").length > 0 && t.e(1,
        function(e) {
            t(71).initialize()
        })
    },
    i.initializeCustomerBladeComponent = function() {
        $(".customer-blade").length > 0 && t.e(0,
        function(e) {
            t(72).initialize()
        })
    },
    i.techSpecsComponent = t(34),
    i.resourcesComponent = t(35),
    i.chapteredStoryComponent = t(36),
    i.textRouterComponent = t(38),
    i.resourcesForAccordion = t(41),
    i.accordionComponent = t(42),
    i.connectComponent = t(43),
    i.breadcrumbComponent = t(44),
    i.featuredProductComponent = t(45),
    i.leadGenFormComponent = t(46),
    i.featuredRouterComponent = t(47),
    i.marqueeNavComponent = t(48),
    i.privacyForm = t(51),
    i.privacyBanner = t(52),
    i.componentNestedColumns = t(53),
    i.componentTabbedCarousel = t(54),
    i.responsiveMarquee = t(55),
    i.componentAddThis = t(56),
    i.componentTextOnly = t(57),
    i.accessibility = t(58),
    i.initializeCenterBreakingPlane = function() {
        $(".center-breaking-plane").length > 0 && t.e(1,
        function(e) {
            t(73).initialize()
        })
    },
    i.initializeOverlay = function() {
        $(".video-overlay").length > 0 && t.e(1,
        function(e) {
            t(74).initialize()
        })
    },
    i.initializeContactUsComponent = function() {
        $(".contact-form-component ").length > 0 && t.e(1,
        function(e) {
            t(75).initialize()
        })
    },
    i.initializeHighValueForm = function() {
        $(".high-value-form").length > 0 && t(59).initialize()
    },
    i.initializeCrossSell = function() {
        var e = $(".component-cross-sell");
        e.length && t(61).initialize(e)
    },
    i.initializeFeaturedMarquee = function() {
        $(".hpe-featured-marquee").length && t(62).initialize()
    },
    i.initializeLowValueCampaignForm = function() {
        $(".low-value-campaign-form").length > 0 && t(63).initialize()
    },
    i.initializeLowValueTouchForm = function() {
        $(".low-value-touch-form").length > 0 && t(64).initialize()
    },
    jQuery(document).ready(function() {
        i.nav.initialize(),
        i.formValidation.initialize(),
        i.countryLanguageSelector.initialize(),
        i.initializeFadeListBehavior(),
        i.footer.initialize(),
        i.bootstrapNav.initialize(),
        i.responsiveImages.initialize(),
        i.twitterTimelineComponent.initialize(),
        i.privacyForm.initialize(),
        i.privacyBanner.initialize(),
        i.categoryRouter.initialize(),
        i.initializeParallaxCards(),
        i.resourcesComponent.initialize(),
        i.textRouterComponent.initialize(),
        i.hpeForms.initialize(),
        i.componentFollowNav.initialize(),
        i.initializeVideplayerComponent(),
        i.initializeCenterBreakingPlane(),
        i.hybridRouter.initialize(),
        i.initializeProductCardComponent(),
        i.initializeBladeCarouselComponent(),
        i.initializeSearchComponent(),
        i.initializeCustomerBladeComponent(),
        i.techSpecsComponent.initialize(),
        i.accordionComponent.initialize(),
        i.chapteredStoryComponent.initialize(),
        i.resourcesForAccordion.initialize(),
        i.connectComponent.initialize(),
        i.initializeContactUsComponent(),
        i.breadcrumbComponent.initialize(),
        i.featuredProductComponent.initialize(),
        i.featuredRouterComponent.initialize(),
        i.leadGenFormComponent.initialize(),
        i.initializeOverlay(),
        i.initializeHighValueForm(),
        i.initializeFeaturedMarquee(),
        i.initializeCrossSell(),
        i.initializeLowValueCampaignForm(),
        i.marqueeNavComponent.initialize(),
        i.initializeLowValueTouchForm(),
        i.componentNestedColumns.initialize(),
        i.componentTabbedCarousel.initialize(),
        i.responsiveMarquee.initialize(),
        i.componentAddThis.initialize(),
        i.componentTextOnly.initialize(),
        i.accessibility.initialize(),
        i.breakpoints.initialize()
    })
},
function(e, n) {
    "use strict"
},
function(e, n) {
    "use strict";
    e.exports = window.debug
},
function(e, n) {
    "use strict";
    e.exports = {
        CONFIG_WINDOW_DEBOUNCE: 100,
        SERVICE_NAME: "hpe.service.name",
        EVENT_NAME: "hpe.event.name",
        RESOURCES_LOAD_MORE: "hpe.resources.loadmore",
        SOME_SERVICE_PATH_URL: "http://ip.jsontest.com/",
        RESOURCES_FORM_SUBMITTED: "hpe.resources.formsent",
        RESOURCES_FORM_SUBMITTED_CONTACT_US: "hpe.resources.contactus",
        RESOURCES_ELOQUA_HANDLER: "hpe.resources.eloquahandler",
        RESOURCES_ELOQUA_LOOKUP: "hpe.resources.eloqualookup",
        RESOURCES_ELOQUA_LOOKUP_CONTACT_US: "hpe.resources.eloqualookupcontactus",
        AUTO_COMPLETE_CLEAN: "hpe.autocomplete.clean",
        CONTACT_US_RESET: "hpe.contact.us.reset",
        LANGUAGE_CHANGE: "hpe.language.change",
        PRIVACY_COOKIE_EXPIRATION: 365,
        PRIVACY_MANAGEMENT_READY: "hpe.privacy.ready",
        PRIVACY_UPDATE_TYPE_BANNER: "hpe.privacy.update.banner",
        PRIVACY_UPDATE_TYPE_FORM: "hpe.privacy.update.form",
        PRIVACY_COOKIE_UPDATED: "hpe.privacy.updated",
        PRIVACY_COOKIE_TYPE_TECHNICAL: "hpePrivacyTechnical",
        PRIVACY_COOKIE_TYPE_THIRDPARTY: "hpePrivacyThirdparty",
        PRIVACY_COOKIE_TYPE_PERSONALIZATION: "hpePrivacyPersonalization",
        PRIVACY_COOKIE_TYPE_ANALYTICS: "hpePrivacyAnalytics",
        PRIVACY_COOKIE_PREFERENCES_ID: "hpeuck_prefs",
        PRIVACY_COOKIE_BANNER_ANSWER_ID: "hpeuck_answ",
        PRIVACY_BANNER_OPENED: "hpe.privacy.banneropened",
        PRIVACY_BANNER_CLOSED: "hpe.privacy.bannerclosed",
        ABOVE_HEADER_HEIGHT_CHANGE: "hpe.header.heightchange",
        SHOW_SPINNER: "hpe.forms.showspinner",
        HIDE_SPINNER: "hpe.forms.hidespinner"
    }
},
function(e, n, t) { (function(n) {
        "use strict";
        t(6),
        e.exports = {
            store: function() {
                return n.store(arguments)
            },
            define: function(e, t, i) {
                n.request.define(e, t, i)
            },
            request: function(e, t, i) {
                n.request(e, t,
                function(e) {
                    i(e)
                })
            },
            subscribe: function(e, t, i) {
                n.subscribe(e, t, i)
            },
            publish: function(e, t) {
                n.publish(e, t)
            },
            api: n,
            cookie: Cookies
        }
    }).call(n, t(5))
},
,
function(e, n, t) {
    t(7)(t(8))
},
function(e, n) {
    e.exports = function(e) {
        "function" == typeof execScript ? execScript(e) : eval.call(null, e)
    }
},
function(e, n) {
    e.exports = '/*! js-cookie v2.0.0-pre | MIT */\n!function(a){if("function"==typeof define&&define.amd)define(a);else if("object"==typeof exports)module.exports=a();else{var b=window.Cookies,c=window.Cookies=a(window.jQuery);c.noConflict=function(){return window.Cookies=b,c}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}try{g=JSON.stringify(e),/^[\\{\\[]/.test(g)&&(e=g)}catch(i){}return e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\\(\\)]/g,escape),document.cookie=[b,"=",e,f.expires&&"; expires="+f.expires.toUTCString(),f.path&&"; path="+f.path,f.domain&&"; domain="+f.domain,f.secure&&"; secure"].join("")}b||(g={});for(var j=document.cookie?document.cookie.split("; "):[],k=/(%[0-9A-Z]{2})+/g,l=0;l<j.length;l++){var m=j[l].split("="),n=m[0].replace(k,decodeURIComponent),o=m.slice(1).join("=");if(\'"\'===o.charAt(0)&&(o=o.slice(1,-1)),o=c&&c(o,n)||o.replace(k,decodeURIComponent),this.json)try{o=JSON.parse(o)}catch(i){}if(b===n){g=o;break}b||(g[n]=o)}return g}return d.get=d.set=d,d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b()});'
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function(e) {
            function i() {
                d.length > 0 && (s(), a(), o()),
                e(".tile-first").append(e(".tile-last").find(".tile").html())
            }
            function o() {
                var e;
                u.keyup(function(n) {
                    e = d.find(".open"),
                    27 === n.keyCode && (e.find("> a").focus(), e.removeClass("open"), u.removeClass("active-menu"), d.find(".navbar-collapse").removeClass("in"), d.find(".navbar-toggle").focus())
                })
            }
            function a() {
                var n = d.find(".navbar-nav > li"),
                t = d.find(".navbar-collapse"),
                i = !1;
                e("#layer-bg").on("click",
                function() {
                    d.find(".open").removeClass("open"),
                    u.removeClass("active-menu"),
                    c.services.publish(c.constants.AUTO_COMPLETE_CLEAN),
                    c.services.publish(c.constants.CONTACT_US_RESET)
                }),
                n.on("click",
                function(n) {
                    var t = e(n.target).closest(".dropdown");
                    t.hasClass("open") || t.siblings(".open").length > 0 ? u.addClass("active-menu") : u.removeClass("active-menu")
                }),
                n.on("focus", "> a",
                function(n) {
                    setTimeout(function() {
                        var i = e(n.target).parent(".dropdown");
                        t.hasClass("in") || i.hasClass("open") || i.siblings(".open").length > 0 ? u.addClass("active-menu") : u.removeClass("active-menu")
                    },
                    150)
                }),
                e(".navbar-nav.level-1 .dropdown-menu.menu-desktop").on("mousedown",
                function() {
                    e(this).data("mouse", !0)
                }).on("mouseup",
                function() {
                    e(this).data("mouse", !1)
                }).on("focusout",
                function(n) {
                    e(this).data("mouse") && e(document.activeElement).hasClass("active-menu") && (n.preventDefault(), n.stopPropagation())
                }),
                e(window).on("hpe.breakpointchange",
                function(o, a) { ("xs" === a || i) && (u.removeClass("active-menu"), n.removeClass("open"), t.removeClass("in"), d.find(".level-1").removeClass("active"), d.find(".container-third-level").removeClass("active"), m.removeClass("active-search"), c.services.publish(c.constants.AUTO_COMPLETE_CLEAN), c.services.publish(c.constants.CONTACT_US_RESET)),
                    i = "xs" === a ? !0 : !1,
                    "xl" === a ? (l = f.eq(0).outerWidth(), r(), e(window).on("resize.menu-header",
                    function() {
                        r()
                    })) : (e(window).off("resize.menu-header"), f.removeAttr("style"))
                })
            }
            function r() {
                var n, t = e(window).width(),
                i = Math.floor((t - l) / 2);
                n = t > 2 * i + l ? i + 1 : i;
                var o = {
                    marginLeft: "-" + n + "px",
                    width: t
                };
                f.css(o)
            }
            function s() {
                function t() {
                    var t = d.find(".back-btn");
                    t.on("mousedown",
                    function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                    }),
                    t.on("click",
                    function(t) {
                        t.preventDefault(),
                        t.stopPropagation();
                        var i = e(this),
                        o = i.parents(".active");
                        return o.removeClass("active"),
                        i.parents(".dropdown").find("> a").focus(),
                        l ? l.focus() : n.delay(function() {
                            i.parents("li").find("a").eq(0).focus()
                        },
                        100),
                        m.find(">a").attr("aria-expanded", "false"),
                        m.off("focusout.third-level-menu"),
                        u.off("keyup.third-level-menu"),
                        l = "",
                        !1
                    })
                }
                function i() {
                    m.on("click", ">a",
                    function(n) {
                        m.find(">a").attr("aria-expanded", "false");
                        var t, i = e(this).siblings(".third-level-menu");
                        l = e(this),
                        l.attr("aria-expanded", "true"),
                        i.length > 0 && (n.preventDefault(), m.removeClass("active"), e(this).closest(".container-third-level").addClass("active"), c.addClass("active"), i.find("a").first().focus(), m.on("focusout.third-level-menu",
                        function(e) {
                            e.preventDefault(),
                            e.stopPropagation()
                        }), u.on("keyup.third-level-menu",
                        function(n) {
                            9 === n.keyCode && (t = e(":focus"), t.parents(".third-level-menu").length < 1 && i.find("a").first().focus())
                        }))
                    })
                }
                function o() {
                    var n = e("#navbar-collapse");
                    n.on("show.bs.collapse",
                    function(t) {
                        t.preventDefault(),
                        u.addClass("active-menu"),
                        n.addClass("in"),
                        e("#navbar-collapse").find("a").first().focus()
                    })
                }
                function a() {
                    var e = d.find(".navbar-collapse");
                    f.on("click",
                    function() {
                        e.removeClass("in"),
                        d.find(".navbar-toggle").focus()
                    })
                }
                function r() {
                    var e = d.find(".close-btn");
                    e.on("click",
                    function() {
                        var n = e.parents(".open");
                        n.find("> a").focus(),
                        n.removeClass("open")
                    })
                }
                function s() {
                    var e = d.find(".close-search-btn"),
                    n = d.find("#search_clear_component");
                    e.on("click",
                    function() {
                        var t = e.parents(".open");
                        t.find("> a").focus(),
                        t.removeClass("open"),
                        n.css("visibility", "hidden"),
                        u.removeClass("active-menu")
                    })
                }
                var l, c = d.find(".navbar-nav"),
                m = c.find(".container-third-level"),
                f = c.find(".mobile-close");
                i(),
                t(),
                r(),
                o(),
                a(),
                s(),
                e("ul.row.third-level-menu").on("mousedown",
                function(e) {
                    e.preventDefault(),
                    e.stopPropagation()
                })
            }
            var l, c = t(1),
            d = e("#header"),
            u = e("body"),
            m = e(".search_component"),
            f = e(".icons .navbar-nav > .dropdown > .dropdown-menu, .top-level-nav .navbar-nav > .dropdown > .dropdown-menu").not('[class*="mobile"], [id*="mobile"]');
            return {
                initialize: i
            }
        } (jQuery)
    }).call(n, t(10))
},
,
function(e, n, t) {
    "use strict";
    e.exports = function(e) {
        function n() {
            a.length > 0 && i()
        }
        function i() {
            function n() {
                function n(e, n, t) {
                    var i;
                    return function() {
                        var o = this,
                        a = arguments,
                        r = function() {
                            i = null,
                            t || e.apply(o, a)
                        },
                        s = t && !i;
                        clearTimeout(i),
                        i = setTimeout(r, n),
                        s && e.apply(o, a)
                    }
                }
                function t() {
                    return w.$childElDesktop.height(v),
                    this
                }
                function i() {
                    if (y) return ! 1;
                    var e = w.$childElDesktop.prop("scrollHeight") <= v,
                    n = w.$childElDesktop.scrollTop() + w.$childElDesktop.height() >= w.$childElDesktop.prop("scrollHeight") - 10,
                    t = w.$elMobile.prop("scrollHeight") <= b,
                    i = w.$elMobile.scrollTop() + C.height() >= w.$elMobile.prop("scrollHeight");
                    return w.$childElDesktop.prepend(c).append(d),
                    w.$elMobile.prepend(u).append(m),
                    w.$childElDesktop.scrollTop() < 3 ? w.$parentElDesktop.addClass("topMax") : w.$parentElDesktop.removeClass("topMax"),
                    w.$elMobile.scrollTop() < 3 ? w.$elMobile.addClass("topMax") : w.$elMobile.removeClass("topMax"),
                    e || n ? w.$parentElDesktop.addClass("bottMax") : w.$parentElDesktop.removeClass("bottMax"),
                    t || i ? w.$elMobile.addClass("bottMax") : w.$elMobile.removeClass("bottMax"),
                    !0
                }
                function o() {
                    return w.$parentElDesktop = p.children(".location-list.active-list"),
                    w.$childElDesktop = w.$parentElDesktop.children(".sub-list.active-location"),
                    w.$elMobile = g.find(".sub-list.active-location.inner-list-active"),
                    this
                }
                function a(e) {
                    return "undefined" != typeof e && o(),
                    t(),
                    i(),
                    this
                }
                function r(e) {
                    return a(e),
                    this
                }
                function s(n) {
                    return v = e("#country-language-selection-desktop").innerHeight() - 115,
                    b = e("#country-language-selection-mobile").innerHeight(),
                    a(n),
                    this
                }
                function l() {
                    return _.hasClass("hiddenscroll") ? (y = !0, c = null, u = null, m = null, d = null) : _.hasClass("no-svg") && (y = !0, p.find(".location.sub-list").css({
                        width: "100%",
                        paddingRight: "0"
                    })),
                    a(),
                    C.on("resize orientationchange", f),
                    e("#country-language-selection-desktop .sub-list, #country-language-selection-mobile .sub-list").on("scroll", h),
                    g.find(".pick-location").on("click", a),
                    this
                }
                var c = e('<svg class="top" aria-label="topFade"><defs><linearGradient id="topFade" x1="0" x2="0" y1="0" y2="1" patternContentUnits="objectBoundingBox"><stop offset="15%" stop-color="#252525" stop-opacity="1" /><stop offset="95%" stop-color="#252525" stop-opacity="0"/></linearGradient></defs><rect fill="url(#topFade)" width="100%" height="75px"></rect> </svg>'),
                d = e('<svg class="bott" aria-label="bottFade"><defs><linearGradient id="bottFade" x1="0" x2="0" y1="1" y2="0" patternContentUnits="objectBoundingBox"><stop offset="15%" stop-color="#252525" stop-opacity="1" /><stop offset="95%" stop-color="#252525" stop-opacity="0"/></linearGradient></defs><rect fill="url(#bottFade)" width="100%" height="75px"></rect> </svg>'),
                u = c.clone(),
                m = d.clone(),
                f = n(s, 100),
                h = n(r, 0),
                p = e("#country-language-selection-desktop"),
                g = e("#country-language-selection-mobile"),
                v = p.innerHeight() - 115,
                b = g.innerHeight(),
                y = !1,
                w = {
                    $parentElDesktop: p.children(".location-list.active-list"),
                    $childElDesktop: p.find(".location.active-location"),
                    $elMobile: g.find(".sub-list.active-location.inner-list-active")
                },
                C = e(window),
                _ = e("html");
                l()
            }
            function t() {
                X.toLowerCase().indexOf(Q) >= 0 ? X = X.replace(Q, "") : Q = "",
                A = X.split("/"),
                s.log.info("Url Path parts", A)
            }
            function i() {
                return O = R
            }
            function a(e) {
                s.services.cookie.set("hpe_locale", e, {
                    expires: 365
                })
            }
            function d() {
                var n = "",
                r = "",
                l = "",
                d = "";
                "/" === X.substring(0, 1) && (X = X.substring(1), s.log.info("URLPATH", X, X.length)),
                s.services.subscribe(s.constants.PRIVACY_COOKIE_UPDATED, this,
                function(e) {
                    K = e.settings[s.constants.PRIVACY_COOKIE_TYPE_TECHNICAL]
                }),
                X.length > 0 ? (t(), R = {
                    country: A[0],
                    language: A[1]
                },
                "home.html" === A[A.length - 1] ? "en" === A[A.length - 2] && "us" === A[A.length - 3] ? s.services.cookie.get("hpe_locale") ? (n = s.services.cookie.getJSON("hpe_locale"), o = {
                    country: n.country,
                    language: n.language
                },
                o.language.length < 3 && u(o)) : (s.services.define("autoLang", "ajax", {
                    url: c,
                    type: "GET",
                    dataType: "json"
                }), s.services.request("autoLang",
                function(n) {
                    "noheader" === n.countryCode ? (o = {
                        country: "us",
                        language: "en"
                    },
                    a(o), u(o)) : (r = N.find("[data-cc='" + n.countryCode + "']").closest(".location-item"), l = N.find(".location-item").index(r), d = H.eq(l).find("li")[0], o = {
                        country: n.countryCode,
                        language: e(d).find("a").attr("data-lang")
                    },
                    a(o), u(o))
                })) : (o = {
                    country: A[A.length - 3],
                    language: A[A.length - 2]
                },
                o.language.length < 3 && a(o)) : s.services.cookie.get("hpe_locale") || (o = {
                    country: A[A.length - 3],
                    language: A[A.length - 2]
                },
                void 0 !== o.language && o.language.length < 3 && a(o))) : 0 === X.length && (R = jQuery.extend(!0, {},
                i())),
                N.addClass("active-list"),
                k = N.find("[data-cc='" + R.country + "']").closest(".location-item"),
                k.addClass("active"),
                k.closest(F).addClass("active-location"),
                q.addClass("active-list"),
                x = N.find(".location-item").index(k),
                H.removeClass("active-language"),
                H.eq(x).addClass("active-language").trigger("scroll"),
                k = H.eq(x).find("[data-lang='" + R.language + "']").closest("li"),
                k.addClass("active"),
                M.eq(F.index(e(".active-location"))).addClass("active").children().attr("aria-expanded", "true"),
                T = j.find(N).find("[data-cc='" + R.country + "']"),
                k = T.closest(".location-item"),
                k.addClass("active"),
                k.closest(F).addClass("active-location"),
                f(T, Y),
                B = !0,
                q.css("display", "block"),
                x = j.find(N).find(".location-item").index(k),
                j.find(H).eq(x).addClass("active-language"),
                k = j.find(H).eq(x).find("[data-lang='" + R.language + "']").closest("li"),
                k.addClass("active"),
                P = j.find(F).index(e(".mobile-dropdown .active-location")),
                j.find(M).eq(P).addClass("active").children().attr("aria-expanded", "true"),
                T = j.find(M).eq(P).find("a"),
                f(T, U),
                e(".dropdown .language span").html(j.find("[data-cc='" + R.country + "']").text() + " (<abbr>" + R.language + "</abbr>)")
            }
            function u(e) { (A[A.length - 2] !== e.language || A[A.length - 3] !== e.country) && setTimeout(function() {
                    window.location.assign(window.location.protocol + "//" + window.location.host + "/" + Q + e.country + "/" + e.language + "/home.html")
                },
                2e3)
            }
            function m(e, n, t) {
                w = t.closest("li"),
                n.removeClass("active").children().attr("aria-expanded", "false"),
                w.addClass("active").children().attr("aria-expanded", "true"),
                "region" === e ? R.region = t.text() : "location" === e ? (R.countryName = t.text(), R.country = t.attr("data-cc")) : (R.countryName = j.find("[data-cc='" + R.country + "']").text(), R.languageName = t.text(), R.language = t.attr("data-lang"), R.languageDesc = t.attr("data-description"), R.redirectMsg = t.attr("data-redirectmsg"), p(R), K && (D = {
                    country: R.country,
                    language: R.language
                },
                a(D))),
                C = w.closest(".mobile-dropdown").length
            }
            function f(e, n) {
                S = e.text(),
                n.text(S)
            }
            function h(e) {
                $ = e.find("li").length,
                1 === $ && (E = e.find("li:eq(0) a"), R.languageName = E.text(), R.language = E.attr("data-lang"), R.languageDesc = E.attr("data-description"), R.redirectMsg = E.attr("data-redirectmsg"), p(R), K && (D = {
                    country: R.country,
                    language: R.language
                },
                a(D)))
            }
            function p(n) {
                V.addClass("active-language-screen"),
                V.find(".country").text(n.countryName),
                V.find(".language").text(n.languageName),
                V.find(".language-text").text(n.languageDesc),
                V.find(".redirection-text").text(n.redirectMsg),
                V.find(".redirection-link").text("hpe.com/" + n.country + "/" + n.language),
                e(".dropdown .language span").html(n.countryName + " (<abbr>" + n.language + "</abbr>)"),
                setTimeout(function() {
                    window.location.assign(window.location.protocol + "//" + window.location.host + "/" + Q + n.country + "/" + n.language + "/home.html")
                },
                2e3)
            }
            function g(e, n) {
                var t = e.siblings(n);
                t.addClass("inner-list-active"),
                e.siblings(".list-close").addClass("active-button")
            }
            function v(n) {
                var t, i = n.eq(1),
                o = i.siblings("ul");
                o.find("a").first().focus(),
                r.on("keyup.open-inner-list",
                function(n) {
                    9 === n.keyCode && (t = e(":focus"), t.parents(".inner-list-active").length < 1 && !t.hasClass("active-button") && o.find("a").first().focus())
                })
            }
            function b(n) {
                var t, i = n.eq(1),
                o = i.siblings(".inner-list-active");
                o.find("a").first().focus(),
                r.on("keyup.open-inner-list",
                function(n) {
                    9 === n.keyCode && (t = e(":focus"), t.parents(".inner-list-active").length < 1 && !t.hasClass("active-button") && o.find("a").first().focus())
                })
            }
            function y() {
                r.off("keyup.open-inner-list")
            }
            var w, C, _, x, S, $, E, I, T, k, P, O, A, B = !1,
            R = {
                country: "us",
                language: "en"
            },
            D = {
                country: "",
                language: ""
            },
            M = e(".region .region-item"),
            L = e(".location .location-item"),
            z = e(".language li"),
            N = e(".location-list"),
            q = e(".language-list"),
            F = N.find(".sub-list"),
            H = q.find(".sub-list"),
            j = e(".mobile-dropdown"),
            U = e(".pick-region"),
            Y = e(".pick-location"),
            W = j.find(".list-close"),
            V = e(".language-selected-screen"),
            Q = "content/hpe/country/",
            X = window.location.pathname,
            K = !0,
            G = l.hasPreferences(),
            Z = "";
            s.log.info("User Privacy Settings ?", G),
            G && (Z = l.getPreferences(), K = Z[s.constants.PRIVACY_COOKIE_TYPE_TECHNICAL], s.log.info("User Privacy Settings getPreferences - Technical", Z[s.constants.PRIVACY_COOKIE_TYPE_TECHNICAL])),
            M.on("click", "a",
            function(n) {
                m("region", M, e(this)),
                _ = w.index(),
                C ? (j.find(F).removeClass("active-location"), j.find(F).eq(_).addClass("active-location"), j.find(F).find(".active").removeClass("active").children().attr("aria-expanded", "false"), e(".inner-list-active").removeClass("inner-list-active"), W.removeClass("active-button"), B = !0, Y.text(Y.attr("label-default")), q.css("display", "none")) : (N.addClass("active-list"), F.removeClass("active-location"), F.eq(_).addClass("active-location").trigger("scroll"), e(".active-location").find("li:eq(0) a").focus(), H.removeClass("active-language"), q.removeClass("active-list"), F.find(".active").removeClass("active").children().attr("aria-expanded", "false")),
                f(e(n.currentTarget), U),
                n.preventDefault(),
                n.stopPropagation(),
                U.focus(),
                y()
            }),
            L.on("click", "a",
            function(n) {
                m("location", L, e(this)),
                C ? (x = j.find(N).find(".location-item").index(w), q.css("display", "block"), j.find(H).removeClass("active-language"), j.find(H).eq(x).addClass("active-language"), j.find(H).find(".active").removeClass("active").children().attr("aria-expanded", "false"), e(".inner-list-active").removeClass("inner-list-active"), W.removeClass("active-button"), j.find(".active-language").find("li:eq(0) a").focus()) : (x = N.find(".location-item").index(w), q.addClass("active-list"), H.removeClass("active-language"), H.eq(x).addClass("active-language"), e(".active-language").find("li:eq(0) a").focus(), H.find(".active").removeClass("active").children().attr("aria-expanded", "false")),
                f(e(n.currentTarget), Y),
                h(e(".active-language")),
                h(j.find(".active-language")),
                n.preventDefault(),
                n.stopPropagation(),
                Y.focus(),
                y()
            }),
            z.on("click", "a",
            function(n) {
                m("language", z, e(this)),
                n.preventDefault(),
                n.stopPropagation()
            }),
            U.on("click",
            function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                g(U, "ul"),
                v(U)
            }),
            Y.on("click",
            function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                B && (g(Y, ".active-location"), b(Y))
            }),
            j.on("click",
            function() {
                var n;
                setTimeout(function() {
                    j.find(".dropdown-menu a").first().focus()
                },
                100),
                j.on("focusout.open-country-menu-mobile",
                function(e) {
                    e.preventDefault(),
                    e.stopPropagation()
                }),
                r.on("keyup.open-country-menu-mobile",
                function(t) {
                    9 === t.keyCode && (n = e(":focus"), n.parents(".mobile-dropdown").length < 1 && j.find(".dropdown-menu a").first().focus())
                })
            }),
            W.on("click",
            function(n) {
                n.preventDefault(),
                n.stopPropagation(),
                e(this).siblings("ul").removeClass("inner-list-active"),
                e(this).removeClass("active-button"),
                U.focus()
            }),
            e(".back-button .back-btn").on("click",
            function() {
                var n = j.find(".language");
                j.removeClass("open"),
                e(".level-1").removeClass("active"),
                n.attr("aria-expanded", "false"),
                j.off("open-country-menu-mobile"),
                r.off("keyup.open-country-menu-mobile")
            }),
            e(".close-selector .close-btn").on("click",
            function() {
                I = e(this).parents(".open"),
                I.find(">a").attr("aria-expanded", "false"),
                I.find("> a").focus(),
                I.removeClass("open")
            }),
            e(".quick-link").on("click",
            function() {
                D = {
                    country: "us",
                    language: "en"
                },
                K && a(D),
                window.location.assign(window.location.protocol + "//" + window.location.host + "/" + Q + D.country + "/" + D.language + "/home.html")
            }),
            e("ul.row.selector-dropdown").on("mousedown",
            function(e) {
                e.preventDefault(),
                e.stopPropagation()
            }),
            d(),
            n()
        }
        var o, a = e("#header"),
        r = e("body"),
        s = t(1),
        l = t(12),
        c = "/services/hpe/geolocate";
        return {
            initialize: n
        }
    } (jQuery)
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(1);
        e.exports = function() {
            function e() {
                f = o(),
                h = window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode() ? !0 : !1,
                p = window.CQ && window.CQ.WCM && window.CQ.WCM.isPreviewMode() ? !0 : !1,
                a()
            }
            function t(e) {
                var t = {},
                o = [],
                a = [],
                s = n.keys(i.services.cookie.get()),
                l = [],
                c = !0;
                e = "undefined" == typeof e ? {}: e,
                n.each(g,
                function(n) {
                    t[n] = "undefined" == typeof e[n] ? !1 : e[n],
                    t[n] && a.push(v[n])
                }),
                o = [].concat.apply([], a),
                l = n.difference(s, o),
                h || p || n.each(l, r),
                m(e),
                c && (i.log.log("cookieCleanup: allValidCookieList", v), h || p ? i.log.log("cookieCleanup: AEM Preview mode, no cookies will be deleted") : (i.log.log("cookieCleanup: to delete: ", {
                    keys: l.sort()
                }), i.log.log("cookieCleanup: remaining after delete", {
                    keys: n.keys(i.services.cookie.get())
                })))
            }
            function o() {
                var e = window.location.hostname,
                n = e.split("."),
                t = "";
                return t = 1 === n.length ? n[0] : /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e) ? e: "." + n[n.length - 2] + "." + n[n.length - 1]
            }
            function a() {
                var e, t, o, a, r = $(".privacy-banner");
                r.length > 0 ? (e = r.attr("data-technical"), o = r.attr("data-analytics"), t = r.attr("data-personalization"), a = r.attr("data-thirdparty"), v[i.constants.PRIVACY_COOKIE_TYPE_TECHNICAL] = e ? e.split(",") : [], v[i.constants.PRIVACY_COOKIE_TYPE_ANALYTICS] = o ? o.split(",") : [], v[i.constants.PRIVACY_COOKIE_TYPE_PERSONALIZATION] = t ? t.split(",") : [], v[i.constants.PRIVACY_COOKIE_TYPE_THIRDPARTY] = a ? a.split(",") : []) : (i.log.log("!! privacy management missing categories"), n.each(g,
                function(e) {
                    v[e] = []
                })),
                i.services.publish(i.constants.PRIVACY_MANAGEMENT_READY, v)
            }
            function r(e) {
                var n = {
                    path: "/"
                };
                "localhost" !== f && (n.domain = f),
                e !== i.constants.PRIVACY_COOKIE_PREFERENCES_ID && e !== i.constants.PRIVACY_COOKIE_BANNER_ANSWER_ID && (i.services.cookie.remove(e, n), i.services.cookie.remove(e))
            }
            function s() {
                return "undefined" != typeof i.services.cookie.get(i.constants.PRIVACY_COOKIE_PREFERENCES_ID) ? !0 : !1
            }
            function l() {
                var e = i.services.cookie.get(i.constants.PRIVACY_COOKIE_BANNER_ANSWER_ID);
                return "undefined" != typeof e && "1" === e ? !0 : !1
            }
            function c() {
                var e = {},
                n = i.services.cookie.get(i.constants.PRIVACY_COOKIE_PREFERENCES_ID);
                return n ? (e[i.constants.PRIVACY_COOKIE_TYPE_TECHNICAL] = "1" === n.substr(0, 1) ? !0 : !1, e[i.constants.PRIVACY_COOKIE_TYPE_ANALYTICS] = "1" === n.substr(1, 1) ? !0 : !1, e[i.constants.PRIVACY_COOKIE_TYPE_PERSONALIZATION] = "1" === n.substr(2, 1) ? !0 : !1, e[i.constants.PRIVACY_COOKIE_TYPE_THIRDPARTY] = "1" === n.substr(3, 1) ? !0 : !1) : i.log.log("privacy management getPreferences() failed because no privacy cookie exists"),
                e
            }
            function d(e, n) {
                var o = "";
                o = e[i.constants.PRIVACY_COOKIE_TYPE_TECHNICAL] ? "1": "0",
                o += e[i.constants.PRIVACY_COOKIE_TYPE_ANALYTICS] ? "1": "0",
                o += e[i.constants.PRIVACY_COOKIE_TYPE_PERSONALIZATION] ? "1": "0",
                o += e[i.constants.PRIVACY_COOKIE_TYPE_THIRDPARTY] ? "1": "0",
                u(i.constants.PRIVACY_COOKIE_PREFERENCES_ID, o, {
                    expires: i.constants.PRIVACY_COOKIE_EXPIRATION
                }),
                t(e),
                u(i.constants.PRIVACY_COOKIE_BANNER_ANSWER_ID, "1", {
                    expires: i.constants.PRIVACY_COOKIE_EXPIRATION
                }),
                i.services.publish(i.constants.PRIVACY_COOKIE_UPDATED, {
                    settings: e,
                    type: n
                })
            }
            function u(e, n, t) {
                var o = t || {};
                o.path = "/",
                "localhost" !== f && (o.domain = f),
                i.services.cookie(e, n, o)
            }
            function m(e) {
                e[i.constants.PRIVACY_COOKIE_TYPE_ANALYTICS] ? "function" == typeof window.utag_trackingOptIn ? (window.utag_trackingOptIn(), i.log.log("teallium opt in: utag_trackingOptIn() called")) : i.log.log("teallium opt in but utag_trackingOptIn() method is unavailable") : "function" == typeof window.utag_trackingOptOut ? (window.utag_trackingOptOut(), i.log.log("teallium opt out: utag_trackingOptOut() called")) : i.log.log("teallium opt out but utag_trackingOptOut() method unavailable")
            }
            var f, h, p, g = [i.constants.PRIVACY_COOKIE_TYPE_TECHNICAL, i.constants.PRIVACY_COOKIE_TYPE_ANALYTICS, i.constants.PRIVACY_COOKIE_TYPE_PERSONALIZATION, i.constants.PRIVACY_COOKIE_TYPE_THIRDPARTY],
            v = {};
            return {
                cookieCleanup: t,
                hasPreferences: s,
                getPreferences: c,
                setPreferences: d,
                setPrivacyCookie: u,
                hasSubmittedPrivacyBanner: l,
                init: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(14);
        e.exports = function() {
            function e() {
                c.length > 0 && (s = c.find("li.dropdown"), n.each(s,
                function(e) {
                    var n = new a($(e));
                    n.init()
                }), t(), setTimeout(function() {
                    o()
                },
                200), u = $(".htmlBlockComponent").find(".hpe-moxie-chat"), u.length > 0 && ($(".footer-chat").append(u), setTimeout(function() {
                    $(".footer-chat").find(".hpe-moxie-chat").addClass("show")
                },
                100)))
            }
            function t() {
                $(window).scroll(function() {
                    o()
                })
            }
            function o() {
                var e = c.offset().top + d.height(),
                n = $(window).scrollTop() + $(window).height();
                n >= e ? d.removeClass("fixed") : d.addClass("fixed")
            }
            function a(e) {
                var n = this,
                t = e.find("button");
                this.init = function() {
                    n.onClickElement(),
                    setTimeout(function() {
                        n.breakpointsChange()
                    },
                    200),
                    e.on("focusout",
                    function(e) {
                        e.preventDefault(),
                        e.stopPropagation()
                    })
                },
                this.onClickElement = function() {
                    e.on("click", "button",
                    function() {
                        var t = !1;
                        e.hasClass(l) ? n.closeMenu() : (n.openMenu(), t = !0),
                        n.switchAriaAtrrs(t)
                    })
                },
                this.openMenu = function() {
                    e.addClass(l)
                },
                this.closeMenu = function() {
                    e.removeClass(l)
                },
                this.setTabIndexBtn = function(e) {
                    t.attr("tabindex", e)
                },
                this.breakpointsChange = function() {
                    var e;
                    "xs" === i.current() ? (n.switchAriaAtrrs(!1), n.setTabIndexBtn(0)) : (t.removeAttr("aria-expanded"), n.setTabIndexBtn( - 1)),
                    $(window).on("resize",
                    function() {
                        e = i.current(),
                        "xs" === e && (n.switchAriaAtrrs(!1), r = e, n.setTabIndexBtn(0)),
                        "sm" === e && "xs" === r && (t.removeAttr("aria-expanded"), n.closeMenu(), n.setTabIndexBtn( - 1)),
                        o()
                    })
                },
                this.switchAriaAtrrs = function(e) {
                    t.attr("aria-expanded", e)
                }
            }
            var r, s, l = "open",
            c = $(".hpe-footer"),
            d = c.find(".footer-fixedbar"),
            u = "";
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) {
    "use strict";
    t(15);
    var i = t(1),
    o = {
        xs: {
            min: 1,
            max: 767
        },
        sm: {
            min: 768,
            max: 991
        },
        md: {
            min: 992,
            max: 1199
        },
        lg: {
            min: 1200,
            max: 1599
        },
        xl: {
            min: 1600,
            max: 999999
        }
    };
    e.exports = function() {
        function e() {
            enquire.register("screen and (max-width:" + o.xs.max + "px)", {
                match: function() {
                    n("xs")
                },
                setup: function() {
                    n("xs")
                },
                deferSetup: !0
            }).register("screen and (min-width:" + o.sm.min + "px) and (max-width:" + o.sm.max + "px)",
            function() {
                n("sm")
            }).register("screen and (min-width:" + o.md.min + "px) and (max-width:" + o.md.max + "px)",
            function() {
                n("md")
            }).register("screen and (min-width:" + o.lg.min + "px) and (max-width:" + o.lg.max + "px)",
            function() {
                n("lg")
            }).register("screen and (min-width:" + o.xl.min + "px)",
            function() {
                n("xl")
            }),
            $(window).trigger("hpe.breakpointinit")
        }
        function n(e) {
            i.log.log("BP", e),
            t = e,
            $(window).trigger("hpe.breakpointchange", e)
        }
        var t = "";
        return {
            initialize: e,
            current: function() {
                return t
            },
            breakpoints: o
        }
    } ()
},
function(e, n, t) {
    t(7)(t(16))
},
function(e, n) {
    e.exports = "/*!\n * enquire.js v2.1.2 - Awesome Media Queries in JavaScript\n * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js\n * License: MIT (http://www.opensource.org/licenses/mit-license.php)\n */\n\n;(function (name, context, factory) {\n	var matchMedia = window.matchMedia;\n\n	if (typeof module !== 'undefined' && module.exports) {\n		module.exports = factory(matchMedia);\n	}\n	else if (typeof define === 'function' && define.amd) {\n		define(function() {\n			return (context[name] = factory(matchMedia));\n		});\n	}\n	else {\n		context[name] = factory(matchMedia);\n	}\n}('enquire', this, function (matchMedia) {\n\n	'use strict';\n\n    /*jshint unused:false */\n    /**\n     * Helper function for iterating over a collection\n     *\n     * @param collection\n     * @param fn\n     */\n    function each(collection, fn) {\n        var i      = 0,\n            length = collection.length,\n            cont;\n\n        for(i; i < length; i++) {\n            cont = fn(collection[i], i);\n            if(cont === false) {\n                break; //allow early exit\n            }\n        }\n    }\n\n    /**\n     * Helper function for determining whether target object is an array\n     *\n     * @param target the object under test\n     * @return {Boolean} true if array, false otherwise\n     */\n    function isArray(target) {\n        return Object.prototype.toString.apply(target) === '[object Array]';\n    }\n\n    /**\n     * Helper function for determining whether target object is a function\n     *\n     * @param target the object under test\n     * @return {Boolean} true if function, false otherwise\n     */\n    function isFunction(target) {\n        return typeof target === 'function';\n    }\n\n    /**\n     * Delegate to handle a media query being matched and unmatched.\n     *\n     * @param {object} options\n     * @param {function} options.match callback for when the media query is matched\n     * @param {function} [options.unmatch] callback for when the media query is unmatched\n     * @param {function} [options.setup] one-time callback triggered the first time a query is matched\n     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?\n     * @constructor\n     */\n    function QueryHandler(options) {\n        this.options = options;\n        !options.deferSetup && this.setup();\n    }\n    QueryHandler.prototype = {\n\n        /**\n         * coordinates setup of the handler\n         *\n         * @function\n         */\n        setup : function() {\n            if(this.options.setup) {\n                this.options.setup();\n            }\n            this.initialised = true;\n        },\n\n        /**\n         * coordinates setup and triggering of the handler\n         *\n         * @function\n         */\n        on : function() {\n            !this.initialised && this.setup();\n            this.options.match && this.options.match();\n        },\n\n        /**\n         * coordinates the unmatch event for the handler\n         *\n         * @function\n         */\n        off : function() {\n            this.options.unmatch && this.options.unmatch();\n        },\n\n        /**\n         * called when a handler is to be destroyed.\n         * delegates to the destroy or unmatch callbacks, depending on availability.\n         *\n         * @function\n         */\n        destroy : function() {\n            this.options.destroy ? this.options.destroy() : this.off();\n        },\n\n        /**\n         * determines equality by reference.\n         * if object is supplied compare options, if function, compare match callback\n         *\n         * @function\n         * @param {object || function} [target] the target for comparison\n         */\n        equals : function(target) {\n            return this.options === target || this.options.match === target;\n        }\n\n    };\n    /**\n     * Represents a single media query, manages it's state and registered handlers for this query\n     *\n     * @constructor\n     * @param {string} query the media query string\n     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design\n     */\n    function MediaQuery(query, isUnconditional) {\n        this.query = query;\n        this.isUnconditional = isUnconditional;\n        this.handlers = [];\n        this.mql = matchMedia(query);\n\n        var self = this;\n        this.listener = function(mql) {\n            self.mql = mql;\n            self.assess();\n        };\n        this.mql.addListener(this.listener);\n    }\n    MediaQuery.prototype = {\n\n        /**\n         * add a handler for this query, triggering if already active\n         *\n         * @param {object} handler\n         * @param {function} handler.match callback for when query is activated\n         * @param {function} [handler.unmatch] callback for when query is deactivated\n         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered\n         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?\n         */\n        addHandler : function(handler) {\n            var qh = new QueryHandler(handler);\n            this.handlers.push(qh);\n\n            this.matches() && qh.on();\n        },\n\n        /**\n         * removes the given handler from the collection, and calls it's destroy methods\n         * \n         * @param {object || function} handler the handler to remove\n         */\n        removeHandler : function(handler) {\n            var handlers = this.handlers;\n            each(handlers, function(h, i) {\n                if(h.equals(handler)) {\n                    h.destroy();\n                    return !handlers.splice(i,1); //remove from array and exit each early\n                }\n            });\n        },\n\n        /**\n         * Determine whether the media query should be considered a match\n         * \n         * @return {Boolean} true if media query can be considered a match, false otherwise\n         */\n        matches : function() {\n            return this.mql.matches || this.isUnconditional;\n        },\n\n        /**\n         * Clears all handlers and unbinds events\n         */\n        clear : function() {\n            each(this.handlers, function(handler) {\n                handler.destroy();\n            });\n            this.mql.removeListener(this.listener);\n            this.handlers.length = 0; //clear array\n        },\n\n        /*\n         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match\n         */\n        assess : function() {\n            var action = this.matches() ? 'on' : 'off';\n\n            each(this.handlers, function(handler) {\n                handler[action]();\n            });\n        }\n    };\n    /**\n     * Allows for registration of query handlers.\n     * Manages the query handler's state and is responsible for wiring up browser events\n     *\n     * @constructor\n     */\n    function MediaQueryDispatch () {\n        if(!matchMedia) {\n            throw new Error('matchMedia not present, legacy browsers require a polyfill');\n        }\n\n        this.queries = {};\n        this.browserIsIncapable = !matchMedia('only all').matches;\n    }\n\n    MediaQueryDispatch.prototype = {\n\n        /**\n         * Registers a handler for the given media query\n         *\n         * @param {string} q the media query\n         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers\n         * @param {function} options.match fired when query matched\n         * @param {function} [options.unmatch] fired when a query is no longer matched\n         * @param {function} [options.setup] fired when handler first triggered\n         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched\n         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers\n         */\n        register : function(q, options, shouldDegrade) {\n            var queries         = this.queries,\n                isUnconditional = shouldDegrade && this.browserIsIncapable;\n\n            if(!queries[q]) {\n                queries[q] = new MediaQuery(q, isUnconditional);\n            }\n\n            //normalise to object in an array\n            if(isFunction(options)) {\n                options = { match : options };\n            }\n            if(!isArray(options)) {\n                options = [options];\n            }\n            each(options, function(handler) {\n                if (isFunction(handler)) {\n                    handler = { match : handler };\n                }\n                queries[q].addHandler(handler);\n            });\n\n            return this;\n        },\n\n        /**\n         * unregisters a query and all it's handlers, or a specific handler for a query\n         *\n         * @param {string} q the media query to target\n         * @param {object || function} [handler] specific handler to unregister\n         */\n        unregister : function(q, handler) {\n            var query = this.queries[q];\n\n            if(query) {\n                if(handler) {\n                    query.removeHandler(handler);\n                }\n                else {\n                    query.clear();\n                    delete this.queries[q];\n                }\n            }\n\n            return this;\n        }\n    };\n\n	return new MediaQueryDispatch();\n\n}));";
},
function(e, n) {
    "use strict";
    e.exports = function(e) {
        function n() {
            t(),
            i()
        }
        function t() {
            a.on("click", ">a",
            function() {
                e(this).parent().hasClass("open") ? (e(this).parent().removeClass("open"), e(this).attr("aria-expanded", "false")) : (o(e(this)), i(), e(this).parent().addClass("open"), e(this).attr("aria-expanded", "true"))
            }),
            a.on("focus", ">a",
            function() {
                i()
            }),
            r.on("focus", ">a",
            function() {
                i()
            })
        }
        function i() {
            a.find(">a").attr("aria-expanded", "false"),
            a.find(">a").removeAttr("aria-collapsed"),
            a.removeClass("open")
        }
        function o(n) {
            n.is("#search-icon") && setTimeout(function() {
                e("#search_text").focus()
            },
            250),
            n.is("#connect-icon") && setTimeout(function() {
                e(".sales-sub-button").focus()
            },
            250)
        }
        var a = e(".hpe-header li.dropdown"),
        r = e(".hpe-header .direct-link");
        return {
            initialize: n
        }
    } (jQuery)
},
function(e, n) {
    "use strict";
    e.exports = function() {
        function e() {
            $(document).on("lazybeforeunveil",
            function() {
                var e = function(e) {
                    var n = $(e.target);
                    n.closest(".img-container").addClass("img-container-loaded")
                };
                return function(n) {
                    n.isDefaultPrevented() || $(n.target).filter("img").on("load error", e)
                }
            } ())
        }
        return {
            initialize: e
        }
    } ()
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e() {
                t(),
                r(),
                i()
            }
            function t() {
                window.onkeydown = function(e) {
                    e && (13 !== e.keyCode && 32 !== e.keyCode || !$(".input-selectable").is(":focus") || e.preventDefault())
                },
                $("body").keyup(function(e) {
                    var n = $(document.activeElement); (13 === e.keyCode || 32 === e.keyCode) && $(".input-selectable").is(":focus") && (n.hasClass("checkbox-input") ? s(n) : o(n))
                })
            }
            function i() {
                var e = $(".group-radio");
                l(e),
                e.on("click",
                function() {
                    o($(this))
                })
            }
            function o(e) {
                var n = e.closest(".radio-input");
                n.find("input").prop("checked", !1),
                n.find(".group-radio").attr("aria-checked", !1),
                e.attr("aria-checked", !0),
                e.find("input").prop("checked", !0),
                a(e.find("input").val())
            }
            function a(e) {
                var n;
                $('input[name="1~aid_p_telephone"]').each(function() {
                    $(this).val().length > 1 && (n = $(this).val())
                }),
                "y" === e || "Y" === e ? $('input[name="1~aid_p_mobile"]:hidden').val(n) : $('input[name="1~aid_p_mobile"]:hidden').val("")
            }
            function r() {
                var e = $(".checkbox-input");
                l(e),
                e.on("click",
                function() {
                    s($(this))
                })
            }
            function s(e) {
                var n = e.find("input");
                n.is(":checked") ? (e.attr("aria-checked", !1), n.prop("checked", !1).change()) : (e.attr("aria-checked", !0), n.prop("checked", !0).change())
            }
            function l(e) {
                n.each(e,
                function(e) {
                    var n = $(e);
                    $(e).find("input").is(":checked") ? n.attr("aria-checked", !0) : n.attr("aria-checked", !1)
                })
            }
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n, i) {
        "use strict";
        var o = t(1);
        t(22),
        t(24),
        e.exports = function(e) {
            function t() {
                e.validator.addMethod("email-tld",
                function(e, n) {
                    var t = /(\.)[a-zA-Z]{2,}$/;
                    return this.optional(n) || t.test(e)
                },
                "Please enter a valid email address."),
                e.validator.addMethod("phone-val",
                function(e, n) {
                    var t = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]*){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
                    return this.optional(n) || t.test(e)
                },
                "Please enter a valid phone number."),
                e.validator.addMethod("specialinput-val",
                function(e, n) {
                    var t = /[\[\]\^\$\.\|\?\*\+\(\)\\~`\!@#%&\-_+={}'""<>:;,\/]{1,}/gim;
                    return this.optional(n) || !t.test(e)
                },
                "Special characters  are not allowed."),
                e.validator.addMethod("select-val",
                function(e, n) {
                    var t = /[\[\]\^\$\.\|\?\*\+\(\)\\~`\!@#%&\-_+={}'""<>:;,\/]{1,}/gim;
                    return this.optional(n) || !t.test(e)
                },
                "Special characters  are not allowed."),
                e.validator.addMethod("textarea-val",
                function(e, n) {
                    var t = /[\[\]\^\$\|\?\*\+~`\!@#%&_+={}'""<>]{1,}/gim;
                    return this.optional(n) || !t.test(e)
                },
                "Special characters  are not allowed."),
                e.validator.addMethod("zipcode-val",
                function(e, n) {
                    var t = /^\d{5}(?:[-\s]\d{4})?$/;
                    return this.optional(n) || t.test(e)
                },
                "Please enter a valid zipcode.")
            }
            function a(n) {
                var t = n.validate({
                    highlight: function(n) {
                        var t = e(n).closest(".form-group");
                        t.addClass("has-error has-feedback"),
                        t.find("span.glyphicon").length < 1 && t.remove(".form-control-feedback"),
                        e(n).next("span").attr("aria-hidden", !1)
                    },
                    unhighlight: function(n) {
                        e(n).closest(".form-group").removeClass("has-error has-feedback").find(".form-control-feedback").remove(),
                        e(n).next("span").attr("aria-hidden", !0)
                    },
                    onfocusin: function(n) {
                        var t = e(n).closest(".form-group");
                        t.addClass("has-focus"),
                        r() && t.addClass("has-value")
                    },
                    onfocusout: function(n) {
                        var t = e(n).closest(".form-group");
                        t.removeClass("has-focus"),
                        e(n).is("SELECT") && n.name in this.submitted && this.element(n),
                        r() && "" === this.elementValue(n) && t.removeClass("has-value")
                    },
                    onclick: function(e) {
                        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                    },
                    onkeyup: function(n, t) {
                        var i = e(n).closest(".form-group");
                        "" !== this.elementValue(n) ? i.addClass("has-value") : r() || i.removeClass("has-value"),
                        (9 !== t.which || "" !== this.elementValue(n)) && (n.name in this.submitted || n === this.lastElement) && this.element(n)
                    },
                    errorPlacement: function(n, t) {
                        "radio" === t.attr("type") || "checkbox" === t.attr("type") ? t.parents(".form-group").find(".required-field").append(n) : n.appendTo(e(t).closest(".form-group").find(".required-field"))
                    },
                    errorElement: "em",
                    errorClass: "error-message",
                    invalidHandler: function() {
                        e(document).trigger("onHPEFormInvalid", [t, n])
                    },
                    submitHandler: function(e) {
                        e.submit()
                    }
                });
                n.find("select").on("change",
                function() {
                    n.validate().element(this),
                    e(this).css("color", "#000")
                }),
                "undefined" != typeof n.attr("id") && (m[n.attr("id")] = {
                    form: n,
                    validator: t
                }),
                u(),
                e(document).trigger("onHPEFormValidationInit", [t, n])
            }
            function r() {
                return window.navigator.userAgent.match(/Trident/) ? !0 : !1
            }
            function s() {
                o.services.subscribe(o.constants.SHOW_SPINNER, this, l),
                o.services.subscribe(o.constants.HIDE_SPINNER, this, c),
                t(),
                e(".hpeForm").each(function(n, t) {
                    var i = e(t);
                    i.is("form") && a(i)
                })
            }
            function l() {
                e("#overlay-loader").addClass("activeBg"),
                e(".spinnerContainer").addClass("img-loader").focus()
            }
            function c() {
                e("#overlay-loader").removeClass("activeBg"),
                e(".spinnerContainer").removeClass("img-loader"),
                n.delay(function() {
                    e(".set-focus").focus()
                },
                100)
            }
            function d(e) {
                return m[e]
            }
            function u() {
                i.input.placeholder || e.each(e.validator.methods,
                function(n, t) {
                    e.validator.methods[n] = function() {
                        var n = e(arguments[1]);
                        return n.is("[placeholder]") && arguments[0] === n.attr("placeholder") && (arguments[0] = ""),
                        t.apply(this, arguments)
                    }
                })
            }
            var m = {};
            return {
                initialize: s,
                getFormById: d
            }
        } (jQuery)
    }).call(n, t(10), t(21))
},
,
function(e, n, t) {
    t(7)(t(23))
},
function(e, n) {
    e.exports = '/*!\n * jQuery Validation Plugin v1.13.1\n *\n * http://jqueryvalidation.org/\n *\n * Copyright (c) 2014 Jörn Zaefferer\n * Released under the MIT license\n */\n(function( factory ) {\n	if ( typeof define === "function" && define.amd ) {\n		define( ["jquery"], factory );\n	} else {\n		factory( jQuery );\n	}\n}(function( $ ) {\n\n$.extend($.fn, {\n	// http://jqueryvalidation.org/validate/\n	validate: function( options ) {\n\n		// if nothing is selected, return nothing; can\'t chain anyway\n		if ( !this.length ) {\n			if ( options && options.debug && window.console ) {\n				// console.warn( "Nothing selected, can\'t validate, returning nothing." );\n			}\n			return;\n		}\n\n		// check if a validator for this form was already created\n		var validator = $.data( this[ 0 ], "validator" );\n		if ( validator ) {\n			return validator;\n		}\n\n		// Add novalidate tag if HTML5.\n		this.attr( "novalidate", "novalidate" );\n\n		validator = new $.validator( options, this[ 0 ] );\n		$.data( this[ 0 ], "validator", validator );\n\n		if ( validator.settings.onsubmit ) {\n\n			this.validateDelegate( ":submit", "click", function( event ) {\n				if ( validator.settings.submitHandler ) {\n					validator.submitButton = event.target;\n				}\n				// allow suppressing validation by adding a cancel class to the submit button\n				if ( $( event.target ).hasClass( "cancel" ) ) {\n					validator.cancelSubmit = true;\n				}\n\n				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button\n				if ( $( event.target ).attr( "formnovalidate" ) !== undefined ) {\n					validator.cancelSubmit = true;\n				}\n			});\n\n			// validate the form on submit\n			this.submit( function( event ) {\n				if ( validator.settings.debug ) {\n					// prevent form submit to be able to see console output\n					event.preventDefault();\n				}\n				function handle() {\n					var hidden, result;\n					if ( validator.settings.submitHandler ) {\n						if ( validator.submitButton ) {\n							// insert a hidden input as a replacement for the missing submit button\n							hidden = $( "<input type=\'hidden\'/>" )\n								.attr( "name", validator.submitButton.name )\n								.val( $( validator.submitButton ).val() )\n								.appendTo( validator.currentForm );\n						}\n						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );\n						if ( validator.submitButton ) {\n							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced\n							hidden.remove();\n						}\n						if ( result !== undefined ) {\n							return result;\n						}\n						return false;\n					}\n					return true;\n				}\n\n				// prevent submit for invalid forms or custom submit handlers\n				if ( validator.cancelSubmit ) {\n					validator.cancelSubmit = false;\n					return handle();\n				}\n				if ( validator.form() ) {\n					if ( validator.pendingRequest ) {\n						validator.formSubmitted = true;\n						return false;\n					}\n					return handle();\n				} else {\n					validator.focusInvalid();\n					return false;\n				}\n			});\n		}\n\n		return validator;\n	},\n	// http://jqueryvalidation.org/valid/\n	valid: function() {\n		var valid, validator;\n\n		if ( $( this[ 0 ] ).is( "form" ) ) {\n			valid = this.validate().form();\n		} else {\n			valid = true;\n			validator = $( this[ 0 ].form ).validate();\n			this.each( function() {\n				valid = validator.element( this ) && valid;\n			});\n		}\n		return valid;\n	},\n	// attributes: space separated list of attributes to retrieve and remove\n	removeAttrs: function( attributes ) {\n		var result = {},\n			$element = this;\n		$.each( attributes.split( /\\s/ ), function( index, value ) {\n			result[ value ] = $element.attr( value );\n			$element.removeAttr( value );\n		});\n		return result;\n	},\n	// http://jqueryvalidation.org/rules/\n	rules: function( command, argument ) {\n		var element = this[ 0 ],\n			settings, staticRules, existingRules, data, param, filtered;\n\n		if ( command ) {\n			settings = $.data( element.form, "validator" ).settings;\n			staticRules = settings.rules;\n			existingRules = $.validator.staticRules( element );\n			switch ( command ) {\n			case "add":\n				$.extend( existingRules, $.validator.normalizeRule( argument ) );\n				// remove messages from rules, but allow them to be set separately\n				delete existingRules.messages;\n				staticRules[ element.name ] = existingRules;\n				if ( argument.messages ) {\n					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );\n				}\n				break;\n			case "remove":\n				if ( !argument ) {\n					delete staticRules[ element.name ];\n					return existingRules;\n				}\n				filtered = {};\n				$.each( argument.split( /\\s/ ), function( index, method ) {\n					filtered[ method ] = existingRules[ method ];\n					delete existingRules[ method ];\n					if ( method === "required" ) {\n						$( element ).removeAttr( "aria-required" );\n					}\n				});\n				return filtered;\n			}\n		}\n\n		data = $.validator.normalizeRules(\n		$.extend(\n			{},\n			$.validator.classRules( element ),\n			$.validator.attributeRules( element ),\n			$.validator.dataRules( element ),\n			$.validator.staticRules( element )\n		), element );\n\n		// make sure required is at front\n		if ( data.required ) {\n			param = data.required;\n			delete data.required;\n			data = $.extend( { required: param }, data );\n			$( element ).attr( "aria-required", "true" );\n		}\n\n		// make sure remote is at back\n		if ( data.remote ) {\n			param = data.remote;\n			delete data.remote;\n			data = $.extend( data, { remote: param });\n		}\n\n		return data;\n	}\n});\n\n// Custom selectors\n$.extend( $.expr[ ":" ], {\n	// http://jqueryvalidation.org/blank-selector/\n	blank: function( a ) {\n		return !$.trim( "" + $( a ).val() );\n	},\n	// http://jqueryvalidation.org/filled-selector/\n	filled: function( a ) {\n		return !!$.trim( "" + $( a ).val() );\n	},\n	// http://jqueryvalidation.org/unchecked-selector/\n	unchecked: function( a ) {\n		return !$( a ).prop( "checked" );\n	}\n});\n\n// constructor for validator\n$.validator = function( options, form ) {\n	this.settings = $.extend( true, {}, $.validator.defaults, options );\n	this.currentForm = form;\n	this.init();\n};\n\n// http://jqueryvalidation.org/jQuery.validator.format/\n$.validator.format = function( source, params ) {\n	if ( arguments.length === 1 ) {\n		return function() {\n			var args = $.makeArray( arguments );\n			args.unshift( source );\n			return $.validator.format.apply( this, args );\n		};\n	}\n	if ( arguments.length > 2 && params.constructor !== Array  ) {\n		params = $.makeArray( arguments ).slice( 1 );\n	}\n	if ( params.constructor !== Array ) {\n		params = [ params ];\n	}\n	$.each( params, function( i, n ) {\n		source = source.replace( new RegExp( "\\\\{" + i + "\\\\}", "g" ), function() {\n			return n;\n		});\n	});\n	return source;\n};\n\n$.extend( $.validator, {\n\n	defaults: {\n		messages: {},\n		groups: {},\n		rules: {},\n		errorClass: "error",\n		validClass: "valid",\n		errorElement: "label",\n		focusCleanup: false,\n		focusInvalid: true,\n		errorContainer: $( [] ),\n		errorLabelContainer: $( [] ),\n		onsubmit: true,\n		ignore: ":hidden",\n		ignoreTitle: false,\n		onfocusin: function( element ) {\n			this.lastActive = element;\n\n			// Hide error label and remove error class on focus if enabled\n			if ( this.settings.focusCleanup ) {\n				if ( this.settings.unhighlight ) {\n					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );\n				}\n				this.hideThese( this.errorsFor( element ) );\n			}\n		},\n		onfocusout: function( element ) {\n			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {\n				this.element( element );\n			}\n		},\n		onkeyup: function( element, event ) {\n			if ( event.which === 9 && this.elementValue( element ) === "" ) {\n				return;\n			} else if ( element.name in this.submitted || element === this.lastElement ) {\n				this.element( element );\n			}\n		},\n		onclick: function( element ) {\n			// click on selects, radiobuttons and checkboxes\n			if ( element.name in this.submitted ) {\n				this.element( element );\n\n			// or option elements, check parent select in that case\n			} else if ( element.parentNode.name in this.submitted ) {\n				this.element( element.parentNode );\n			}\n		},\n		highlight: function( element, errorClass, validClass ) {\n			if ( element.type === "radio" ) {\n				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );\n			} else {\n				$( element ).addClass( errorClass ).removeClass( validClass );\n			}\n		},\n		unhighlight: function( element, errorClass, validClass ) {\n			if ( element.type === "radio" ) {\n				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );\n			} else {\n				$( element ).removeClass( errorClass ).addClass( validClass );\n			}\n		}\n	},\n\n	// http://jqueryvalidation.org/jQuery.validator.setDefaults/\n	setDefaults: function( settings ) {\n		$.extend( $.validator.defaults, settings );\n	},\n\n	messages: {\n		required: "This field is required.",\n		remote: "Please fix this field.",\n		email: "Please enter a valid email address.",\n		url: "Please enter a valid URL.",\n		date: "Please enter a valid date.",\n		dateISO: "Please enter a valid date ( ISO ).",\n		number: "Please enter a valid number.",\n		digits: "Please enter only digits.",\n		creditcard: "Please enter a valid credit card number.",\n		equalTo: "Please enter the same value again.",\n		maxlength: $.validator.format( "Please enter no more than {0} characters." ),\n		minlength: $.validator.format( "Please enter at least {0} characters." ),\n		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),\n		range: $.validator.format( "Please enter a value between {0} and {1}." ),\n		max: $.validator.format( "Please enter a value less than or equal to {0}." ),\n		min: $.validator.format( "Please enter a value greater than or equal to {0}." )\n	},\n\n	autoCreateRanges: false,\n\n	prototype: {\n\n		init: function() {\n			this.labelContainer = $( this.settings.errorLabelContainer );\n			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );\n			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );\n			this.submitted = {};\n			this.valueCache = {};\n			this.pendingRequest = 0;\n			this.pending = {};\n			this.invalid = {};\n			this.reset();\n\n			var groups = ( this.groups = {} ),\n				rules;\n			$.each( this.settings.groups, function( key, value ) {\n				if ( typeof value === "string" ) {\n					value = value.split( /\\s/ );\n				}\n				$.each( value, function( index, name ) {\n					groups[ name ] = key;\n				});\n			});\n			rules = this.settings.rules;\n			$.each( rules, function( key, value ) {\n				rules[ key ] = $.validator.normalizeRule( value );\n			});\n\n			function delegate( event ) {\n				var validator = $.data( this[ 0 ].form, "validator" ),\n					eventType = "on" + event.type.replace( /^validate/, "" ),\n					settings = validator.settings;\n				if ( settings[ eventType ] && !this.is( settings.ignore ) ) {\n					settings[ eventType ].call( validator, this[ 0 ], event );\n				}\n			}\n			$( this.currentForm )\n				.validateDelegate( ":text, [type=\'password\'], [type=\'file\'], select, textarea, " +\n					"[type=\'number\'], [type=\'search\'] ,[type=\'tel\'], [type=\'url\'], " +\n					"[type=\'email\'], [type=\'datetime\'], [type=\'date\'], [type=\'month\'], " +\n					"[type=\'week\'], [type=\'time\'], [type=\'datetime-local\'], " +\n					"[type=\'range\'], [type=\'color\'], [type=\'radio\'], [type=\'checkbox\']",\n					"focusin focusout keyup", delegate)\n				// Support: Chrome, oldIE\n				// "select" is provided as event.target when clicking a option\n				.validateDelegate("select, option, [type=\'radio\'], [type=\'checkbox\']", "click", delegate);\n\n			if ( this.settings.invalidHandler ) {\n				$( this.currentForm ).bind( "invalid-form.validate", this.settings.invalidHandler );\n			}\n\n			// Add aria-required to any Static/Data/Class required fields before first validation\n			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html\n			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );\n		},\n\n		// http://jqueryvalidation.org/Validator.form/\n		form: function() {\n			this.checkForm();\n			$.extend( this.submitted, this.errorMap );\n			this.invalid = $.extend({}, this.errorMap );\n			if ( !this.valid() ) {\n				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);\n			}\n			this.showErrors();\n			return this.valid();\n		},\n\n		checkForm: function() {\n			this.prepareForm();\n			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {\n				this.check( elements[ i ] );\n			}\n			return this.valid();\n		},\n\n		// http://jqueryvalidation.org/Validator.element/\n		element: function( element ) {\n			var cleanElement = this.clean( element ),\n				checkElement = this.validationTargetFor( cleanElement ),\n				result = true;\n\n			this.lastElement = checkElement;\n\n			if ( checkElement === undefined ) {\n				delete this.invalid[ cleanElement.name ];\n			} else {\n				this.prepareElement( checkElement );\n				this.currentElements = $( checkElement );\n\n				result = this.check( checkElement ) !== false;\n				if ( result ) {\n					delete this.invalid[ checkElement.name ];\n				} else {\n					this.invalid[ checkElement.name ] = true;\n				}\n			}\n			// Add aria-invalid status for screen readers\n			$( element ).attr( "aria-invalid", !result );\n\n			if ( !this.numberOfInvalids() ) {\n				// Hide error containers on last error\n				this.toHide = this.toHide.add( this.containers );\n			}\n			this.showErrors();\n			return result;\n		},\n\n		// http://jqueryvalidation.org/Validator.showErrors/\n		showErrors: function( errors ) {\n			if ( errors ) {\n				// add items to error list and map\n				$.extend( this.errorMap, errors );\n				this.errorList = [];\n				for ( var name in errors ) {\n					this.errorList.push({\n						message: errors[ name ],\n						element: this.findByName( name )[ 0 ]\n					});\n				}\n				// remove items from success list\n				this.successList = $.grep( this.successList, function( element ) {\n					return !( element.name in errors );\n				});\n			}\n			if ( this.settings.showErrors ) {\n				this.settings.showErrors.call( this, this.errorMap, this.errorList );\n			} else {\n				this.defaultShowErrors();\n			}\n		},\n\n		// http://jqueryvalidation.org/Validator.resetForm/\n		resetForm: function() {\n			if ( $.fn.resetForm ) {\n				$( this.currentForm ).resetForm();\n			}\n			this.submitted = {};\n			this.lastElement = null;\n			this.prepareForm();\n			this.hideErrors();\n			this.elements()\n					.removeClass( this.settings.errorClass )\n					.removeData( "previousValue" )\n					.removeAttr( "aria-invalid" );\n		},\n\n		numberOfInvalids: function() {\n			return this.objectLength( this.invalid );\n		},\n\n		objectLength: function( obj ) {\n			/* jshint unused: false */\n			var count = 0,\n				i;\n			for ( i in obj ) {\n				count++;\n			}\n			return count;\n		},\n\n		hideErrors: function() {\n			this.hideThese( this.toHide );\n		},\n\n		hideThese: function( errors ) {\n			errors.not( this.containers ).text( "" );\n			this.addWrapper( errors ).hide();\n		},\n\n		valid: function() {\n			return this.size() === 0;\n		},\n\n		size: function() {\n			return this.errorList.length;\n		},\n\n		focusInvalid: function() {\n			if ( this.settings.focusInvalid ) {\n				try {\n					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])\n					.filter( ":visible" )\n					.focus()\n					// manually trigger focusin event; without it, focusin handler isn\'t called, findLastActive won\'t have anything to find\n					.trigger( "focusin" );\n				} catch ( e ) {\n					// ignore IE throwing errors when focusing hidden elements\n				}\n			}\n		},\n\n		findLastActive: function() {\n			var lastActive = this.lastActive;\n			return lastActive && $.grep( this.errorList, function( n ) {\n				return n.element.name === lastActive.name;\n			}).length === 1 && lastActive;\n		},\n\n		elements: function() {\n			var validator = this,\n				rulesCache = {};\n\n			// select all valid inputs inside the form (no submit or reset buttons)\n			return $( this.currentForm )\n			.find( "input, select, textarea" )\n			.not( ":submit, :reset, :image, [disabled], [readonly]" )\n			.not( this.settings.ignore )\n			.filter( function() {\n				if ( !this.name && validator.settings.debug && window.console ) {\n					// console.error( "%o has no name assigned", this );\n				}\n\n				// select only the first element for each name, and only those with rules specified\n				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {\n					return false;\n				}\n\n				rulesCache[ this.name ] = true;\n				return true;\n			});\n		},\n\n		clean: function( selector ) {\n			return $( selector )[ 0 ];\n		},\n\n		errors: function() {\n			var errorClass = this.settings.errorClass.split( " " ).join( "." );\n			return $( this.settings.errorElement + "." + errorClass, this.errorContext );\n		},\n\n		reset: function() {\n			this.successList = [];\n			this.errorList = [];\n			this.errorMap = {};\n			this.toShow = $( [] );\n			this.toHide = $( [] );\n			this.currentElements = $( [] );\n		},\n\n		prepareForm: function() {\n			this.reset();\n			this.toHide = this.errors().add( this.containers );\n		},\n\n		prepareElement: function( element ) {\n			this.reset();\n			this.toHide = this.errorsFor( element );\n		},\n\n		elementValue: function( element ) {\n			var val,\n				$element = $( element ),\n				type = element.type;\n\n			if ( type === "radio" || type === "checkbox" ) {\n				return $( "input[name=\'" + element.name + "\']:checked" ).val();\n			} else if ( type === "number" && typeof element.validity !== "undefined" ) {\n				return element.validity.badInput ? false : $element.val();\n			}\n\n			val = $element.val();\n			if ( typeof val === "string" ) {\n				return val.replace(/\\r/g, "" );\n			}\n			return val;\n		},\n\n		check: function( element ) {\n			element = this.validationTargetFor( this.clean( element ) );\n\n			var rules = $( element ).rules(),\n				rulesCount = $.map( rules, function( n, i ) {\n					return i;\n				}).length,\n				dependencyMismatch = false,\n				val = this.elementValue( element ),\n				result, method, rule;\n\n			for ( method in rules ) {\n				rule = { method: method, parameters: rules[ method ] };\n				try {\n\n					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );\n\n					// if a method indicates that the field is optional and therefore valid,\n					// don\'t mark it as valid when there are no other rules\n					if ( result === "dependency-mismatch" && rulesCount === 1 ) {\n						dependencyMismatch = true;\n						continue;\n					}\n					dependencyMismatch = false;\n\n					if ( result === "pending" ) {\n						this.toHide = this.toHide.not( this.errorsFor( element ) );\n						return;\n					}\n\n					if ( !result ) {\n						this.formatAndAdd( element, rule );\n						return false;\n					}\n				} catch ( e ) {\n					if ( this.settings.debug && window.console ) {\n						// console.log( "Exception occurred when checking element " + element.id + ", check the \'" + rule.method + "\' method.", e );\n					}\n					throw e;\n				}\n			}\n			if ( dependencyMismatch ) {\n				return;\n			}\n			if ( this.objectLength( rules ) ) {\n				this.successList.push( element );\n			}\n			return true;\n		},\n\n		// return the custom message for the given element and validation method\n		// specified in the element\'s HTML5 data attribute\n		// return the generic message if present and no method specific message is present\n		customDataMessage: function( element, method ) {\n			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +\n				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );\n		},\n\n		// return the custom message for the given element name and validation method\n		customMessage: function( name, method ) {\n			var m = this.settings.messages[ name ];\n			return m && ( m.constructor === String ? m : m[ method ]);\n		},\n\n		// return the first defined argument, allowing empty strings\n		findDefined: function() {\n			for ( var i = 0; i < arguments.length; i++) {\n				if ( arguments[ i ] !== undefined ) {\n					return arguments[ i ];\n				}\n			}\n			return undefined;\n		},\n\n		defaultMessage: function( element, method ) {\n			return this.findDefined(\n				this.customMessage( element.name, method ),\n				this.customDataMessage( element, method ),\n				// title is never undefined, so handle empty string as undefined\n				!this.settings.ignoreTitle && element.title || undefined,\n				$.validator.messages[ method ],\n				"<strong>Warning: No message defined for " + element.name + "</strong>"\n			);\n		},\n\n		formatAndAdd: function( element, rule ) {\n			var message = this.defaultMessage( element, rule.method ),\n				theregex = /\\$?\\{(\\d+)\\}/g;\n			if ( typeof message === "function" ) {\n				message = message.call( this, rule.parameters, element );\n			} else if ( theregex.test( message ) ) {\n				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );\n			}\n			this.errorList.push({\n				message: message,\n				element: element,\n				method: rule.method\n			});\n\n			this.errorMap[ element.name ] = message;\n			this.submitted[ element.name ] = message;\n		},\n\n		addWrapper: function( toToggle ) {\n			if ( this.settings.wrapper ) {\n				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );\n			}\n			return toToggle;\n		},\n\n		defaultShowErrors: function() {\n			var i, elements, error;\n			for ( i = 0; this.errorList[ i ]; i++ ) {\n				error = this.errorList[ i ];\n				if ( this.settings.highlight ) {\n					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );\n				}\n				this.showLabel( error.element, error.message );\n			}\n			if ( this.errorList.length ) {\n				this.toShow = this.toShow.add( this.containers );\n			}\n			if ( this.settings.success ) {\n				for ( i = 0; this.successList[ i ]; i++ ) {\n					this.showLabel( this.successList[ i ] );\n				}\n			}\n			if ( this.settings.unhighlight ) {\n				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {\n					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );\n				}\n			}\n			this.toHide = this.toHide.not( this.toShow );\n			this.hideErrors();\n			this.addWrapper( this.toShow ).show();\n		},\n\n		validElements: function() {\n			return this.currentElements.not( this.invalidElements() );\n		},\n\n		invalidElements: function() {\n			return $( this.errorList ).map(function() {\n				return this.element;\n			});\n		},\n\n		showLabel: function( element, message ) {\n			var place, group, errorID,\n				error = this.errorsFor( element ),\n				elementID = this.idOrName( element ),\n				describedBy = $( element ).attr( "aria-describedby" );\n			if ( error.length ) {\n				// refresh error/success class\n				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );\n				// replace message on existing label\n				error.html( message );\n			} else {\n				// create error element\n				error = $( "<" + this.settings.errorElement + ">" )\n					.attr( "id", elementID + "-error" )\n					.addClass( this.settings.errorClass )\n					.html( message || "" );\n\n				// Maintain reference to the element to be placed into the DOM\n				place = error;\n				if ( this.settings.wrapper ) {\n					// make sure the element is visible, even in IE\n					// actually showing the wrapped element is handled elsewhere\n					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();\n				}\n				if ( this.labelContainer.length ) {\n					this.labelContainer.append( place );\n				} else if ( this.settings.errorPlacement ) {\n					this.settings.errorPlacement( place, $( element ) );\n				} else {\n					place.insertAfter( element );\n				}\n\n				// Link error back to the element\n				if ( error.is( "label" ) ) {\n					// If the error is a label, then associate using \'for\'\n					error.attr( "for", elementID );\n				} else if ( error.parents( "label[for=\'" + elementID + "\']" ).length === 0 ) {\n					// If the element is not a child of an associated label, then it\'s necessary\n					// to explicitly apply aria-describedby\n\n					errorID = error.attr( "id" ).replace( /(:|\\.|\\[|\\])/g, "\\\\$1");\n					// Respect existing non-error aria-describedby\n					if ( !describedBy ) {\n						describedBy = errorID;\n					} else if ( !describedBy.match( new RegExp( "\\\\b" + errorID + "\\\\b" ) ) ) {\n						// Add to end of list if not already present\n						describedBy += " " + errorID;\n					}\n					$( element ).attr( "aria-describedby", describedBy );\n\n					// If this element is grouped, then assign to all elements in the same group\n					group = this.groups[ element.name ];\n					if ( group ) {\n						$.each( this.groups, function( name, testgroup ) {\n							if ( testgroup === group ) {\n								$( "[name=\'" + name + "\']", this.currentForm )\n									.attr( "aria-describedby", error.attr( "id" ) );\n							}\n						});\n					}\n				}\n			}\n			if ( !message && this.settings.success ) {\n				error.text( "" );\n				if ( typeof this.settings.success === "string" ) {\n					error.addClass( this.settings.success );\n				} else {\n					this.settings.success( error, element );\n				}\n			}\n			this.toShow = this.toShow.add( error );\n		},\n\n		errorsFor: function( element ) {\n			var name = this.idOrName( element ),\n				describer = $( element ).attr( "aria-describedby" ),\n				selector = "label[for=\'" + name + "\'], label[for=\'" + name + "\'] *";\n\n			// aria-describedby should directly reference the error element\n			if ( describer ) {\n				selector = selector + ", #" + describer.replace( /\\s+/g, ", #" );\n			}\n			return this\n				.errors()\n				.filter( selector );\n		},\n\n		idOrName: function( element ) {\n			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );\n		},\n\n		validationTargetFor: function( element ) {\n\n			// If radio/checkbox, validate first element in group instead\n			if ( this.checkable( element ) ) {\n				element = this.findByName( element.name );\n			}\n\n			// Always apply ignore filter\n			return $( element ).not( this.settings.ignore )[ 0 ];\n		},\n\n		checkable: function( element ) {\n			return ( /radio|checkbox/i ).test( element.type );\n		},\n\n		findByName: function( name ) {\n			return $( this.currentForm ).find( "[name=\'" + name + "\']" );\n		},\n\n		getLength: function( value, element ) {\n			switch ( element.nodeName.toLowerCase() ) {\n			case "select":\n				return $( "option:selected", element ).length;\n			case "input":\n				if ( this.checkable( element ) ) {\n					return this.findByName( element.name ).filter( ":checked" ).length;\n				}\n			}\n			return value.length;\n		},\n\n		depend: function( param, element ) {\n			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;\n		},\n\n		dependTypes: {\n			"boolean": function( param ) {\n				return param;\n			},\n			"string": function( param, element ) {\n				return !!$( param, element.form ).length;\n			},\n			"function": function( param, element ) {\n				return param( element );\n			}\n		},\n\n		optional: function( element ) {\n			var val = this.elementValue( element );\n			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";\n		},\n\n		startRequest: function( element ) {\n			if ( !this.pending[ element.name ] ) {\n				this.pendingRequest++;\n				this.pending[ element.name ] = true;\n			}\n		},\n\n		stopRequest: function( element, valid ) {\n			this.pendingRequest--;\n			// sometimes synchronization fails, make sure pendingRequest is never < 0\n			if ( this.pendingRequest < 0 ) {\n				this.pendingRequest = 0;\n			}\n			delete this.pending[ element.name ];\n			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {\n				$( this.currentForm ).submit();\n				this.formSubmitted = false;\n			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {\n				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);\n				this.formSubmitted = false;\n			}\n		},\n\n		previousValue: function( element ) {\n			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {\n				old: null,\n				valid: true,\n				message: this.defaultMessage( element, "remote" )\n			});\n		}\n\n	},\n\n	classRuleSettings: {\n		required: { required: true },\n		email: { email: true },\n		url: { url: true },\n		date: { date: true },\n		dateISO: { dateISO: true },\n		number: { number: true },\n		digits: { digits: true },\n		creditcard: { creditcard: true }\n	},\n\n	addClassRules: function( className, rules ) {\n		if ( className.constructor === String ) {\n			this.classRuleSettings[ className ] = rules;\n		} else {\n			$.extend( this.classRuleSettings, className );\n		}\n	},\n\n	classRules: function( element ) {\n		var rules = {},\n			classes = $( element ).attr( "class" );\n\n		if ( classes ) {\n			$.each( classes.split( " " ), function() {\n				if ( this in $.validator.classRuleSettings ) {\n					$.extend( rules, $.validator.classRuleSettings[ this ]);\n				}\n			});\n		}\n		return rules;\n	},\n\n	attributeRules: function( element ) {\n		var rules = {},\n			$element = $( element ),\n			type = element.getAttribute( "type" ),\n			method, value;\n\n		for ( method in $.validator.methods ) {\n\n			// support for <input required> in both html5 and older browsers\n			if ( method === "required" ) {\n				value = element.getAttribute( method );\n				// Some browsers return an empty string for the required attribute\n				// and non-HTML5 browsers might have required="" markup\n				if ( value === "" ) {\n					value = true;\n				}\n				// force non-HTML5 browsers to return bool\n				value = !!value;\n			} else {\n				value = $element.attr( method );\n			}\n\n			// convert the value to a number for number inputs, and for text for backwards compability\n			// allows type="date" and others to be compared as strings\n			if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {\n				value = Number( value );\n			}\n\n			if ( value || value === 0 ) {\n				rules[ method ] = value;\n			} else if ( type === method && type !== "range" ) {\n				// exception: the jquery validate \'range\' method\n				// does not test for the html5 \'range\' type\n				rules[ method ] = true;\n			}\n		}\n\n		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs\n		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {\n			delete rules.maxlength;\n		}\n\n		return rules;\n	},\n\n	dataRules: function( element ) {\n		var method, value,\n			rules = {}, $element = $( element );\n		for ( method in $.validator.methods ) {\n			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );\n			if ( value !== undefined ) {\n				rules[ method ] = value;\n			}\n		}\n		return rules;\n	},\n\n	staticRules: function( element ) {\n		var rules = {},\n			validator = $.data( element.form, "validator" );\n\n		if ( validator.settings.rules ) {\n			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};\n		}\n		return rules;\n	},\n\n	normalizeRules: function( rules, element ) {\n		// handle dependency check\n		$.each( rules, function( prop, val ) {\n			// ignore rule when param is explicitly false, eg. required:false\n			if ( val === false ) {\n				delete rules[ prop ];\n				return;\n			}\n			if ( val.param || val.depends ) {\n				var keepRule = true;\n				switch ( typeof val.depends ) {\n				case "string":\n					keepRule = !!$( val.depends, element.form ).length;\n					break;\n				case "function":\n					keepRule = val.depends.call( element, element );\n					break;\n				}\n				if ( keepRule ) {\n					rules[ prop ] = val.param !== undefined ? val.param : true;\n				} else {\n					delete rules[ prop ];\n				}\n			}\n		});\n\n		// evaluate parameters\n		$.each( rules, function( rule, parameter ) {\n			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;\n		});\n\n		// clean number parameters\n		$.each([ "minlength", "maxlength" ], function() {\n			if ( rules[ this ] ) {\n				rules[ this ] = Number( rules[ this ] );\n			}\n		});\n		$.each([ "rangelength", "range" ], function() {\n			var parts;\n			if ( rules[ this ] ) {\n				if ( $.isArray( rules[ this ] ) ) {\n					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];\n				} else if ( typeof rules[ this ] === "string" ) {\n					parts = rules[ this ].replace(/[\\[\\]]/g, "" ).split( /[\\s,]+/ );\n					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];\n				}\n			}\n		});\n\n		if ( $.validator.autoCreateRanges ) {\n			// auto-create ranges\n			if ( rules.min != null && rules.max != null ) {\n				rules.range = [ rules.min, rules.max ];\n				delete rules.min;\n				delete rules.max;\n			}\n			if ( rules.minlength != null && rules.maxlength != null ) {\n				rules.rangelength = [ rules.minlength, rules.maxlength ];\n				delete rules.minlength;\n				delete rules.maxlength;\n			}\n		}\n\n		return rules;\n	},\n\n	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}\n	normalizeRule: function( data ) {\n		if ( typeof data === "string" ) {\n			var transformed = {};\n			$.each( data.split( /\\s/ ), function() {\n				transformed[ this ] = true;\n			});\n			data = transformed;\n		}\n		return data;\n	},\n\n	// http://jqueryvalidation.org/jQuery.validator.addMethod/\n	addMethod: function( name, method, message ) {\n		$.validator.methods[ name ] = method;\n		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];\n		if ( method.length < 3 ) {\n			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );\n		}\n	},\n\n	methods: {\n\n		// http://jqueryvalidation.org/required-method/\n		required: function( value, element, param ) {\n			// check if dependency is met\n			if ( !this.depend( param, element ) ) {\n				return "dependency-mismatch";\n			}\n			if ( element.nodeName.toLowerCase() === "select" ) {\n				// could be an array for select-multiple or a string, both are fine this way\n				var val = $( element ).val();\n				return val && val.length > 0;\n			}\n			if ( this.checkable( element ) ) {\n				return this.getLength( value, element ) > 0;\n			}\n			return $.trim( value ).length > 0;\n		},\n\n		// http://jqueryvalidation.org/email-method/\n		email: function( value, element ) {\n			// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29\n			// Retrieved 2014-01-14\n			// If you have a problem with this implementation, report a bug against the above spec\n			// Or use custom methods to implement your own email validation\n			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );\n		},\n\n		// http://jqueryvalidation.org/url-method/\n		url: function( value, element ) {\n			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/\n			return this.optional( element ) || /^(https?|s?ftp):\\/\\/(((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:)*@)?(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]))|((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?)(:\\d*)?)(\\/((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)*)*)?)?(\\?((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)|[\\uE000-\\uF8FF]|\\/|\\?)*)?(#((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)|\\/|\\?)*)?$/i.test( value );\n		},\n\n		// http://jqueryvalidation.org/date-method/\n		date: function( value, element ) {\n			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );\n		},\n\n		// http://jqueryvalidation.org/dateISO-method/\n		dateISO: function( value, element ) {\n			return this.optional( element ) || /^\\d{4}[\\/\\-](0?[1-9]|1[012])[\\/\\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );\n		},\n\n		// http://jqueryvalidation.org/number-method/\n		number: function( value, element ) {\n			return this.optional( element ) || /^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$/.test( value );\n		},\n\n		// http://jqueryvalidation.org/digits-method/\n		digits: function( value, element ) {\n			return this.optional( element ) || /^\\d+$/.test( value );\n		},\n\n		// http://jqueryvalidation.org/creditcard-method/\n		// based on http://en.wikipedia.org/wiki/Luhn/\n		creditcard: function( value, element ) {\n			if ( this.optional( element ) ) {\n				return "dependency-mismatch";\n			}\n			// accept only spaces, digits and dashes\n			if ( /[^0-9 \\-]+/.test( value ) ) {\n				return false;\n			}\n			var nCheck = 0,\n				nDigit = 0,\n				bEven = false,\n				n, cDigit;\n\n			value = value.replace( /\\D/g, "" );\n\n			// Basing min and max length on\n			// http://developer.ean.com/general_info/Valid_Credit_Card_Types\n			if ( value.length < 13 || value.length > 19 ) {\n				return false;\n			}\n\n			for ( n = value.length - 1; n >= 0; n--) {\n				cDigit = value.charAt( n );\n				nDigit = parseInt( cDigit, 10 );\n				if ( bEven ) {\n					if ( ( nDigit *= 2 ) > 9 ) {\n						nDigit -= 9;\n					}\n				}\n				nCheck += nDigit;\n				bEven = !bEven;\n			}\n\n			return ( nCheck % 10 ) === 0;\n		},\n\n		// http://jqueryvalidation.org/minlength-method/\n		minlength: function( value, element, param ) {\n			var length = $.isArray( value ) ? value.length : this.getLength( value, element );\n			return this.optional( element ) || length >= param;\n		},\n\n		// http://jqueryvalidation.org/maxlength-method/\n		maxlength: function( value, element, param ) {\n			var length = $.isArray( value ) ? value.length : this.getLength( value, element );\n			return this.optional( element ) || length <= param;\n		},\n\n		// http://jqueryvalidation.org/rangelength-method/\n		rangelength: function( value, element, param ) {\n			var length = $.isArray( value ) ? value.length : this.getLength( value, element );\n			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );\n		},\n\n		// http://jqueryvalidation.org/min-method/\n		min: function( value, element, param ) {\n			return this.optional( element ) || value >= param;\n		},\n\n		// http://jqueryvalidation.org/max-method/\n		max: function( value, element, param ) {\n			return this.optional( element ) || value <= param;\n		},\n\n		// http://jqueryvalidation.org/range-method/\n		range: function( value, element, param ) {\n			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );\n		},\n\n		// http://jqueryvalidation.org/equalTo-method/\n		equalTo: function( value, element, param ) {\n			// bind to the blur event of the target in order to revalidate whenever the target field is updated\n			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead\n			var target = $( param );\n			if ( this.settings.onfocusout ) {\n				target.unbind( ".validate-equalTo" ).bind( "blur.validate-equalTo", function() {\n					$( element ).valid();\n				});\n			}\n			return value === target.val();\n		},\n\n		// http://jqueryvalidation.org/remote-method/\n		remote: function( value, element, param ) {\n			if ( this.optional( element ) ) {\n				return "dependency-mismatch";\n			}\n\n			var previous = this.previousValue( element ),\n				validator, data;\n\n			if (!this.settings.messages[ element.name ] ) {\n				this.settings.messages[ element.name ] = {};\n			}\n			previous.originalMessage = this.settings.messages[ element.name ].remote;\n			this.settings.messages[ element.name ].remote = previous.message;\n\n			param = typeof param === "string" && { url: param } || param;\n\n			if ( previous.old === value ) {\n				return previous.valid;\n			}\n\n			previous.old = value;\n			validator = this;\n			this.startRequest( element );\n			data = {};\n			data[ element.name ] = value;\n			$.ajax( $.extend( true, {\n				url: param,\n				mode: "abort",\n				port: "validate" + element.name,\n				dataType: "json",\n				data: data,\n				context: validator.currentForm,\n				success: function( response ) {\n					var valid = response === true || response === "true",\n						errors, message, submitted;\n\n					validator.settings.messages[ element.name ].remote = previous.originalMessage;\n					if ( valid ) {\n						submitted = validator.formSubmitted;\n						validator.prepareElement( element );\n						validator.formSubmitted = submitted;\n						validator.successList.push( element );\n						delete validator.invalid[ element.name ];\n						validator.showErrors();\n					} else {\n						errors = {};\n						message = response || validator.defaultMessage( element, "remote" );\n						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;\n						validator.invalid[ element.name ] = true;\n						validator.showErrors( errors );\n					}\n					previous.valid = valid;\n					validator.stopRequest( element, valid );\n				}\n			}, param ) );\n			return "pending";\n		}\n\n	}\n\n});\n\n$.format = function deprecated() {\n	throw "$.format has been deprecated. Please use $.validator.format instead.";\n};\n\n// ajax mode: abort\n// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});\n// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()\n\nvar pendingRequests = {},\n	ajax;\n// Use a prefilter if available (1.5+)\nif ( $.ajaxPrefilter ) {\n	$.ajaxPrefilter(function( settings, _, xhr ) {\n		var port = settings.port;\n		if ( settings.mode === "abort" ) {\n			if ( pendingRequests[port] ) {\n				pendingRequests[port].abort();\n			}\n			pendingRequests[port] = xhr;\n		}\n	});\n} else {\n	// Proxy ajax\n	ajax = $.ajax;\n	$.ajax = function( settings ) {\n		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,\n			port = ( "port" in settings ? settings : $.ajaxSettings ).port;\n		if ( mode === "abort" ) {\n			if ( pendingRequests[port] ) {\n				pendingRequests[port].abort();\n			}\n			pendingRequests[port] = ajax.apply(this, arguments);\n			return pendingRequests[port];\n		}\n		return ajax.apply(this, arguments);\n	};\n}\n\n// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation\n// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target\n\n$.extend($.fn, {\n	validateDelegate: function( delegate, type, handler ) {\n		return this.bind(type, function( event ) {\n			var target = $(event.target);\n			if ( target.is(delegate) ) {\n				return handler.apply(target, arguments);\n			}\n		});\n	}\n});\n\n}));';
},
function(e, n, t) {
    t(7)(t(25))
},
function(e, n) {
    e.exports = '/* Placeholders.js v4.0.1 */\n/*!\n * The MIT License\n *\n * Copyright (c) 2012 James Allardice\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to\n * deal in the Software without restriction, including without limitation the\n * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or\n * sell copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS\n * IN THE SOFTWARE.\n */\n!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\\\s)"+z+"(?!\\\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);'
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(1);
        e.exports = function(e) {
            function t() {
                p.length > 0 && (a(), o(), r(), n.delay(function() {
                    c()
                },
                100), f(), u(), s())
            }
            function o() {
                var t;
                n.each(b,
                function(n) {
                    var i = e(n).attr("href");
                    i.indexOf("%20") > -1 && (t = i.replace("%20", ""), e(n).attr("href", t))
                })
            }
            function a() {
                e(".privacy-banner.open").length > 0 && p.addClass("disabled"),
                i.services.subscribe(i.constants.PRIVACY_BANNER_OPENED, this,
                function() {
                    p.addClass("disabled")
                }),
                i.services.subscribe(i.constants.PRIVACY_BANNER_CLOSED, this,
                function() {
                    p.removeClass("disabled")
                })
            }
            function r() {
                var n = 0;
                e(window).scroll(function() {
                    var t = p.height(),
                    i = e(document).height(),
                    o = e(window).scrollTop(),
                    a = n > o ? !0 : !1;
                    l(i, t, o, a),
                    n = o
                })
            }
            function s() {
                var n = p.find(".search-follow"),
                t = p.find(".contact-us");
                n.on("click",
                function() {
                    e("#search-icon").trigger("click")
                }),
                t.on("click",
                function() {
                    e("#connect-icon").trigger("click")
                })
            }
            function l(n, t, i, o) {
                var a = i + e(window).height(); ! o && i > t ? (p.addClass("scroll-level-one"), i >= n / 2 ? p.addClass("scroll-level-two") : (p.removeClass("scroll-level-two"), p.removeClass("scroll-end")), a >= n && p.addClass("scroll-end")) : (p.removeClass("scroll-level-two"), p.removeClass("scroll-end"), t > i && p.removeClass("scroll-level-one")),
                m(i, n)
            }
            function c() {
                var n = C.width() + h() + 30;
                d(n),
                e(window).on("resize",
                function() {
                    d(n)
                })
            }
            function d(e) {
                g.outerWidth() <= e ? (_.removeClass("expanded-nav"), _.addClass("half-width"), v.addClass("dropdown")) : (_.addClass("expanded-nav"), v.removeClass("dropdown"), _.removeClass("half-width"), v.hasClass("open") && v.removeClass("open"))
            }
            function u() {
                b.each(function() {
                    var n = e(this).attr("href"),
                    t = e(n);
                    t.length > 0 && w.push({
                        el: t,
                        parentLink: e(this)
                    })
                })
            }
            function m(t, i) {
                var o = t + e(window).height(),
                a = t + p.height();
                n.forEach(w,
                function(e) {
                    var n = e.el.offset().top,
                    t = e.parentLink.text(); (a > n || o >= i && n > a) && (y.text(t), b.removeClass("active"), e.parentLink.addClass("active"))
                })
            }
            function f() {
                var n, t, i, o;
                b.on("click",
                function() {
                    n = e(this).attr("href"),
                    i = e(n),
                    o = e(this).text(),
                    i.length > 0 && (t = i.offset().top - p.height() + 10, e("body, html").animate({
                        scrollTop: t
                    },
                    250,
                    function() {}), b.removeClass("active"), e(this).addClass("active"), y.text(o))
                })
            }
            function h() {
                var t = 0;
                return n.each(p.find(".intraPageMenu .dropdown-menu > li"),
                function(n) {
                    t += e(n).outerWidth()
                }),
                t
            }
            var p = e(".component-follow-nav"),
            g = e(".anchor-bar"),
            v = p.find(".menu-dropdown"),
            b = p.find(".intrapageNavAnchor"),
            y = p.find(".shortcut-menu"),
            w = [],
            C = p.find(".connect-bar"),
            _ = p.find(".intraPageMenu");
            return {
                initialize: t
            }
        } (jQuery)
    }).call(n, t(10))
},
function(e, n) {
    "use strict";
    e.exports = function() {
        function e() {
            return t.length > 0 ? void n() : !1
        }
        function n() {
            window.twttr = function(e, n, t) {
                var i, o = e.getElementsByTagName(n)[0],
                a = window.twttr || {};
                return e.getElementById(t) ? a: (i = e.createElement(n), i.id = t, i.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(i, o), a.e = [], a.ready = function(e) {
                    a.e.push(e)
                },
                a)
            } (document, "script", "twitter-wjs")
        }
        var t = $(".hpe-twitter-timeline");
        return {
            initialize: e
        }
    } ()
},
function(e, n, t) { (function(n, i) {
        "use strict";
        e.exports = function() {
            function e() {
                return y.length > 0 ? void o() : !1
            }
            function o() {
                c.log.info("Category Router: Init"),
                void 0 !== x && x.WCM.isEditMode() || ($(window).on("hpe.breakpointinit", a), $(window).on("hpe.breakpointchange", a), s())
            }
            function a() {
                n.touch ? n.touch && (v = "auto", b = "stepless") : (v = g, b = "stepped"),
                i.each(y,
                function(e) {
                    var n = $(e),
                    t = n.find(p);
                    "undefined" != typeof d && n.mCustomScrollbar("destroy"),
                    t.length > 0 && i.each(t,
                    function(e) {
                        var n = $(e);
                        "" === $.trim(n.text()) && n.remove()
                    }),
                    r(n)
                })
            }
            function r(e) {
                d = e.mCustomScrollbar({
                    advanced: {
                        autoExpandHorizontalScroll: !0,
                        updateOnContentResize: !0,
                        updateOnImageLoad: !0
                    },
                    axis: "x",
                    keyboard: {
                        enable: !0,
                        scrollType: "stepless"
                    },
                    mouseWheel: {
                        enable: !1
                    },
                    scrollButtons: {
                        enable: !0,
                        scrollAmount: v,
                        scrollType: b,
                        tabindex: -1
                    },
                    callbacks: {
                        onInit: function() {
                            l()
                        },
                        onUpdate: function() {
                            l(),
                            $(f).fadeOut(300)
                        },
                        onTotalScrollBack: function() {
                            $(f).fadeOut(300)
                        },
                        onTotalScroll: function() {
                            $(h).fadeOut(300)
                        },
                        onScrollStart: function() {
                            $(f).fadeIn(300),
                            $(h).fadeIn(300)
                        }
                    }
                })
            }
            function s() {
                y.find(p).on("mouseover focus mouseout blur",
                function(e) {
                    var n = $(this).closest(p); ("mouseover" === e.type || "focus" === e.type) && n.addClass(m).siblings().addClass(u),
                    ("mouseout" === e.type || "blur" === e.type) && n.removeClass(m).siblings().removeClass(u)
                })
            }
            function l() {
                i.each(y,
                function(e) {
                    var n = $(e),
                    t = parseInt(n.height() / 2, 10);
                    n.find(f).css("bottom", t).text(C),
                    n.find(h).css("bottom", t).text(_),
                    n.find(".mCustomScrollBox").attr("tabindex", "-1")
                })
            }
            var c = t(1);
            t(29),
            t(31);
            var d, u = "inactive",
            m = "hovered",
            f = ".mCSB_buttonLeft",
            h = ".mCSB_buttonRight",
            p = ".product-item",
            g = 340,
            v = g,
            b = "stepped",
            y = $(".hpe-category-router-carousel"),
            w = y.eq(0).closest(".hpe-category-router"),
            C = w.data("arrow-left"),
            _ = w.data("arrow-right"),
            x = window.CQ;
            return {
                initialize: e
            }
        } ()
    }).call(n, t(21), t(10))
},
function(e, n, t) {
    t(7)(t(30))
},
function(e, n) {
    e.exports = "/*!\n * jQuery Mousewheel 3.1.12\n *\n * Copyright 2014 jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n */\n\n(function (factory) {\n    if ( typeof define === 'function' && define.amd ) {\n        // AMD. Register as an anonymous module.\n        define(['jquery'], factory);\n    } else if (typeof exports === 'object') {\n        // Node/CommonJS style for Browserify\n        module.exports = factory;\n    } else {\n        // Browser globals\n        factory(jQuery);\n    }\n}(function ($) {\n\n    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],\n        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?\n                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],\n        slice  = Array.prototype.slice,\n        nullLowestDeltaTimeout, lowestDelta;\n\n    if ( $.event.fixHooks ) {\n        for ( var i = toFix.length; i; ) {\n            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;\n        }\n    }\n\n    var special = $.event.special.mousewheel = {\n        version: '3.1.12',\n\n        setup: function() {\n            if ( this.addEventListener ) {\n                for ( var i = toBind.length; i; ) {\n                    this.addEventListener( toBind[--i], handler, false );\n                }\n            } else {\n                this.onmousewheel = handler;\n            }\n            // Store the line height and page height for this particular element\n            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));\n            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));\n        },\n\n        teardown: function() {\n            if ( this.removeEventListener ) {\n                for ( var i = toBind.length; i; ) {\n                    this.removeEventListener( toBind[--i], handler, false );\n                }\n            } else {\n                this.onmousewheel = null;\n            }\n            // Clean up the data we added to the element\n            $.removeData(this, 'mousewheel-line-height');\n            $.removeData(this, 'mousewheel-page-height');\n        },\n\n        getLineHeight: function(elem) {\n            var $elem = $(elem),\n                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();\n            if (!$parent.length) {\n                $parent = $('body');\n            }\n            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;\n        },\n\n        getPageHeight: function(elem) {\n            return $(elem).height();\n        },\n\n        settings: {\n            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below\n            normalizeOffset: true  // calls getBoundingClientRect for each event\n        }\n    };\n\n    $.fn.extend({\n        mousewheel: function(fn) {\n            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');\n        },\n\n        unmousewheel: function(fn) {\n            return this.unbind('mousewheel', fn);\n        }\n    });\n\n\n    function handler(event) {\n        var orgEvent   = event || window.event,\n            args       = slice.call(arguments, 1),\n            delta      = 0,\n            deltaX     = 0,\n            deltaY     = 0,\n            absDelta   = 0,\n            offsetX    = 0,\n            offsetY    = 0;\n        event = $.event.fix(orgEvent);\n        event.type = 'mousewheel';\n\n        // Old school scrollwheel delta\n        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }\n        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }\n        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }\n        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }\n\n        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event\n        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {\n            deltaX = deltaY * -1;\n            deltaY = 0;\n        }\n\n        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy\n        delta = deltaY === 0 ? deltaX : deltaY;\n\n        // New school wheel delta (wheel event)\n        if ( 'deltaY' in orgEvent ) {\n            deltaY = orgEvent.deltaY * -1;\n            delta  = deltaY;\n        }\n        if ( 'deltaX' in orgEvent ) {\n            deltaX = orgEvent.deltaX;\n            if ( deltaY === 0 ) { delta  = deltaX * -1; }\n        }\n\n        // No change actually happened, no reason to go any further\n        if ( deltaY === 0 && deltaX === 0 ) { return; }\n\n        // Need to convert lines and pages to pixels if we aren't already in pixels\n        // There are three delta modes:\n        //   * deltaMode 0 is by pixels, nothing to do\n        //   * deltaMode 1 is by lines\n        //   * deltaMode 2 is by pages\n        if ( orgEvent.deltaMode === 1 ) {\n            var lineHeight = $.data(this, 'mousewheel-line-height');\n            delta  *= lineHeight;\n            deltaY *= lineHeight;\n            deltaX *= lineHeight;\n        } else if ( orgEvent.deltaMode === 2 ) {\n            var pageHeight = $.data(this, 'mousewheel-page-height');\n            delta  *= pageHeight;\n            deltaY *= pageHeight;\n            deltaX *= pageHeight;\n        }\n\n        // Store lowest absolute delta to normalize the delta values\n        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );\n\n        if ( !lowestDelta || absDelta < lowestDelta ) {\n            lowestDelta = absDelta;\n\n            // Adjust older deltas if necessary\n            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {\n                lowestDelta /= 40;\n            }\n        }\n\n        // Adjust older deltas if necessary\n        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {\n            // Divide all the things by 40!\n            delta  /= 40;\n            deltaX /= 40;\n            deltaY /= 40;\n        }\n\n        // Get a whole, normalized value for the deltas\n        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);\n        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);\n        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);\n\n        // Normalise offsetX and offsetY properties\n        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {\n            var boundingRect = this.getBoundingClientRect();\n            offsetX = event.clientX - boundingRect.left;\n            offsetY = event.clientY - boundingRect.top;\n        }\n\n        // Add information to the event object\n        event.deltaX = deltaX;\n        event.deltaY = deltaY;\n        event.deltaFactor = lowestDelta;\n        event.offsetX = offsetX;\n        event.offsetY = offsetY;\n        // Go ahead and set deltaMode to 0 since we converted to pixels\n        // Although this is a little odd since we overwrite the deltaX/Y\n        // properties with normalized deltas.\n        event.deltaMode = 0;\n\n        // Add event and delta to the front of the arguments\n        args.unshift(event, delta, deltaX, deltaY);\n\n        // Clearout lowestDelta after sometime to better\n        // handle multiple device types that give different\n        // a different lowestDelta\n        // Ex: trackpad = 3 and mouse wheel = 120\n        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }\n        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);\n\n        return ($.event.dispatch || $.event.handle).apply(this, args);\n    }\n\n    function nullLowestDelta() {\n        lowestDelta = null;\n    }\n\n    function shouldAdjustOldDeltas(orgEvent, absDelta) {\n        // If this is an older event and the delta is divisable by 120,\n        // then we are assuming that the browser is treating this as an\n        // older mouse wheel event and that we should divide the deltas\n        // by 40 to try and get a more usable deltaFactor.\n        // Side note, this actually impacts the reported scroll distance\n        // in older browsers and can cause scrolling to be slower than native.\n        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.\n        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;\n    }\n\n}));\n"
},
function(e, n, t) {
    t(7)(t(32))
},
function(e, n) {
    e.exports = '/*\n== malihu jquery custom scrollbar plugin ==\nVersion: 3.0.8\nPlugin URI: http://manos.malihu.gr/jquery-custom-content-scroller\nAuthor: malihu\nAuthor URI: http://manos.malihu.gr\nLicense: MIT License (MIT)\n*/\n\n/*\nCopyright 2010 Manos Malihutsakis (email: manos@malihu.gr)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n\n/*\nThe code below is fairly long, fully commented and should be normally used in development.\nFor production, use either the minified jquery.mCustomScrollbar.min.js script or\nthe production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin\nand dependencies (minified).\n*/\n\n(function(factory){\n	if(typeof module!=="undefined" && module.exports){\n		module.exports=factory;\n	}else{\n		factory(jQuery,window,document);\n	}\n}(function($){\n(function(init){\n	var _rjs=typeof define==="function" && define.amd, /* RequireJS */\n		_njs=typeof module !== "undefined" && module.exports, /* NodeJS */\n		_dlp=("https:"==document.location.protocol) ? "https:" : "http:", /* location protocol */\n		_url="jquery.mousewheel.js";\n	if(!_rjs){\n		if(_njs){\n			require("jquery-mousewheel")($);\n		}else{\n			/* load jquery-mousewheel plugin (via CDN) if it\'s not present or not loaded via RequireJS\n			(works when mCustomScrollbar fn is called on window load) */\n			$.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src="+_dlp+"//"+_url+"%3E%3C/script%3E"));\n		}\n	}\n	init();\n}(function(){\n\n	/*\n	----------------------------------------\n	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S)\n	----------------------------------------\n	*/\n\n	var pluginNS="mCustomScrollbar",\n		pluginPfx="mCS",\n		defaultSelector=".mCustomScrollbar",\n\n\n\n\n\n	/*\n	----------------------------------------\n	DEFAULT OPTIONS\n	----------------------------------------\n	*/\n\n		defaults={\n			/*\n			set element/content width/height programmatically\n			values: boolean, pixels, percentage\n				option						default\n				-------------------------------------\n				setWidth					false\n				setHeight					false\n			*/\n			/*\n			set the initial css top property of content\n			values: string (e.g. "-100px", "10%" etc.)\n			*/\n			setTop:0,\n			/*\n			set the initial css left property of content\n			values: string (e.g. "-100px", "10%" etc.)\n			*/\n			setLeft:0,\n			/*\n			scrollbar axis (vertical and/or horizontal scrollbars)\n			values (string): "y", "x", "yx"\n			*/\n			axis:"y",\n			/*\n			position of scrollbar relative to content\n			values (string): "inside", "outside" ("outside" requires elements with position:relative)\n			*/\n			scrollbarPosition:"inside",\n			/*\n			scrolling inertia\n			values: integer (milliseconds)\n			*/\n			scrollInertia:950,\n			/*\n			auto-adjust scrollbar dragger length\n			values: boolean\n			*/\n			autoDraggerLength:true,\n			/*\n			auto-hide scrollbar when idle\n			values: boolean\n				option						default\n				-------------------------------------\n				autoHideScrollbar			false\n			*/\n			/*\n			auto-expands scrollbar on mouse-over and dragging\n			values: boolean\n				option						default\n				-------------------------------------\n				autoExpandScrollbar			false\n			*/\n			/*\n			always show scrollbar, even when there\'s nothing to scroll\n			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean\n			*/\n			alwaysShowScrollbar:0,\n			/*\n			scrolling always snaps to a multiple of this number in pixels\n			values: integer\n				option						default\n				-------------------------------------\n				snapAmount					null\n			*/\n			/*\n			when snapping, snap with this number in pixels as an offset\n			values: integer\n			*/\n			snapOffset:0,\n			/*\n			mouse-wheel scrolling\n			*/\n			mouseWheel:{\n				/*\n				enable mouse-wheel scrolling\n				values: boolean\n				*/\n				enable:true,\n				/*\n				scrolling amount in pixels\n				values: "auto", integer\n				*/\n				scrollAmount:"auto",\n				/*\n				mouse-wheel scrolling axis\n				the default scrolling direction when both vertical and horizontal scrollbars are present\n				values (string): "y", "x"\n				*/\n				axis:"y",\n				/*\n				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached\n				values: boolean\n					option						default\n					-------------------------------------\n					preventDefault				null\n				*/\n				/*\n				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.\n				values: "auto", integer\n				"auto" uses the default OS/browser value\n				*/\n				deltaFactor:"auto",\n				/*\n				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration)\n				values: boolean\n					option						default\n					-------------------------------------\n					normalizeDelta				null\n				*/\n				/*\n				invert mouse-wheel scrolling direction\n				values: boolean\n					option						default\n					-------------------------------------\n					invert						null\n				*/\n				/*\n				the tags that disable mouse-wheel when cursor is over them\n				*/\n				disableOver:["select","option","keygen","datalist","textarea"]\n			},\n			/*\n			scrollbar buttons\n			*/\n			scrollButtons:{\n				/*\n				enable scrollbar buttons\n				values: boolean\n					option						default\n					-------------------------------------\n					enable						null\n				*/\n				/*\n				scrollbar buttons scrolling type\n				values (string): "stepless", "stepped"\n				*/\n				scrollType:"stepless",\n				/*\n				scrolling amount in pixels\n				values: "auto", integer\n				*/\n				scrollAmount:"auto"\n				/*\n				tabindex of the scrollbar buttons\n				values: false, integer\n					option						default\n					-------------------------------------\n					tabindex					null\n				*/\n			},\n			/*\n			keyboard scrolling\n			*/\n			keyboard:{\n				/*\n				enable scrolling via keyboard\n				values: boolean\n				*/\n				enable:true,\n				/*\n				keyboard scrolling type\n				values (string): "stepless", "stepped"\n				*/\n				scrollType:"stepless",\n				/*\n				scrolling amount in pixels\n				values: "auto", integer\n				*/\n				scrollAmount:"auto"\n			},\n			/*\n			enable content touch-swipe scrolling\n			values: boolean, integer, string (number)\n			integer values define the axis-specific minimum amount required for scrolling momentum\n			*/\n			contentTouchScroll:25,\n			/*\n			advanced option parameters\n			*/\n			advanced:{\n				/*\n				auto-expand content horizontally (for "x" or "yx" axis)\n				values: boolean\n					option						default\n					-------------------------------------\n					autoExpandHorizontalScroll	null\n				*/\n				/*\n				auto-scroll to elements with focus\n				*/\n				autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable=\'true\']",\n				/*\n				auto-update scrollbars on content, element or viewport resize\n				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc.\n				values: boolean\n				*/\n				updateOnContentResize:true,\n				/*\n				auto-update scrollbars each time each image inside the element is fully loaded\n				values: boolean\n				*/\n				updateOnImageLoad:true\n				/*\n				auto-update scrollbars based on the amount and size changes of specific selectors\n				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size\n				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed)\n				a value of true (boolean) will auto-update scrollbars each time any element is changed\n					option						default\n					-------------------------------------\n					updateOnSelectorChange		null\n				*/\n				/*\n				extra selectors that\'ll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")\n					option						default\n					-------------------------------------\n					releaseDraggableSelectors	null\n				*/\n			},\n			/*\n			scrollbar theme\n			values: string (see CSS/plugin URI for a list of ready-to-use themes)\n			*/\n			theme:"light",\n			/*\n			user defined callback functions\n			*/\n			callbacks:{\n				/*\n				Available callbacks:\n					callback					default\n					-------------------------------------\n					onInit						null\n					onScrollStart				null\n					onScroll					null\n					onTotalScroll				null\n					onTotalScrollBack			null\n					whileScrolling				null\n					onOverflowY					null\n					onOverflowX					null\n					onOverflowYNone				null\n					onOverflowXNone				null\n					onImageLoad					null\n					onSelectorChange			null\n					onUpdate					null\n				*/\n				onTotalScrollOffset:0,\n				onTotalScrollBackOffset:0,\n				alwaysTriggerOffsets:true\n			}\n			/*\n			add scrollbar(s) on all elements matching the current selector, now and in the future\n			values: boolean, string\n			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)\n			liveSelector values: string (selector)\n				option						default\n				-------------------------------------\n				live						false\n				liveSelector				null\n			*/\n		},\n\n\n\n\n\n	/*\n	----------------------------------------\n	VARS, CONSTANTS\n	----------------------------------------\n	*/\n\n		totalInstances=0, /* plugin instances amount */\n		liveTimers={}, /* live option timers */\n		oldIE=(window.attachEvent && !window.addEventListener) ? 1 : 0, /* detect IE < 9 */\n		touchActive=false,touchable, /* global touch vars (for touch and pointer events) */\n		/* general plugin classes */\n		classes=[\n			"mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar",\n			"mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer",\n			"mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"\n		],\n\n\n\n\n\n	/*\n	----------------------------------------\n	METHODS\n	----------------------------------------\n	*/\n\n		methods={\n\n			/*\n			plugin initialization method\n			creates the scrollbar(s), plugin data object and options\n			----------------------------------------\n			*/\n\n			init:function(options){\n\n				var options=$.extend(true,{},defaults,options),\n					selector=_selector.call(this); /* validate selector */\n\n				/*\n				if live option is enabled, monitor for elements matching the current selector and\n				apply scrollbar(s) when found (now and in the future)\n				*/\n				if(options.live){\n					var liveSelector=options.liveSelector || this.selector || defaultSelector, /* live selector(s) */\n						$liveSelector=$(liveSelector); /* live selector(s) as jquery object */\n					if(options.live==="off"){\n						/*\n						disable live if requested\n						usage: $(selector).mCustomScrollbar({live:"off"});\n						*/\n						removeLiveTimers(liveSelector);\n						return;\n					}\n					liveTimers[liveSelector]=setTimeout(function(){\n						/* call mCustomScrollbar fn on live selector(s) every half-second */\n						$liveSelector.mCustomScrollbar(options);\n						if(options.live==="once" && $liveSelector.length){\n							/* disable live after first invocation */\n							removeLiveTimers(liveSelector);\n						}\n					},500);\n				}else{\n					removeLiveTimers(liveSelector);\n				}\n\n				/* options backward compatibility (for versions < 3.0.0) and normalization */\n				options.setWidth=(options.set_width) ? options.set_width : options.setWidth;\n				options.setHeight=(options.set_height) ? options.set_height : options.setHeight;\n				options.axis=(options.horizontalScroll) ? "x" : _findAxis(options.axis);\n				options.scrollInertia=options.scrollInertia>0 && options.scrollInertia<17 ? 17 : options.scrollInertia;\n				if(typeof options.mouseWheel!=="object" &&  options.mouseWheel==true){ /* old school mouseWheel option (non-object) */\n					options.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}\n				}\n				options.mouseWheel.scrollAmount=!options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;\n				options.mouseWheel.normalizeDelta=!options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;\n				options.scrollButtons.scrollType=_findScrollButtonsType(options.scrollButtons.scrollType);\n\n				_theme(options); /* theme-specific options */\n\n				/* plugin constructor */\n				return $(selector).each(function(){\n\n					var $this=$(this);\n\n					if(!$this.data(pluginPfx)){ /* prevent multiple instantiations */\n\n						/* store options and create objects in jquery data */\n						$this.data(pluginPfx,{\n							idx:++totalInstances, /* instance index */\n							opt:options, /* options */\n							scrollRatio:{y:null,x:null}, /* scrollbar to content ratio */\n							overflowed:null, /* overflowed axis */\n							contentReset:{y:null,x:null}, /* object to check when content resets */\n							bindEvents:false, /* object to check if events are bound */\n							tweenRunning:false, /* object to check if tween is running */\n							sequential:{}, /* sequential scrolling object */\n							langDir:$this.css("direction"), /* detect/store direction (ltr or rtl) */\n							cbOffsets:null, /* object to check whether callback offsets always trigger */\n							/*\n							object to check how scrolling events where last triggered\n							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method)\n							usage: object.data("mCS").trigger\n							*/\n							trigger:null\n						});\n\n						var d=$this.data(pluginPfx),o=d.opt,\n							/* HTML data attributes */\n							htmlDataAxis=$this.data("mcs-axis"),htmlDataSbPos=$this.data("mcs-scrollbar-position"),htmlDataTheme=$this.data("mcs-theme");\n\n						if(htmlDataAxis){o.axis=htmlDataAxis;} /* usage example: data-mcs-axis="y" */\n						if(htmlDataSbPos){o.scrollbarPosition=htmlDataSbPos;} /* usage example: data-mcs-scrollbar-position="outside" */\n						if(htmlDataTheme){ /* usage example: data-mcs-theme="minimal" */\n							o.theme=htmlDataTheme;\n							_theme(o); /* theme-specific options */\n						}\n\n						_pluginMarkup.call(this); /* add plugin markup */\n\n						$("#mCSB_"+d.idx+"_container img:not(."+classes[2]+")").addClass(classes[2]); /* flag loaded images */\n\n						methods.update.call(null,$this); /* call the update method */\n\n					}\n\n				});\n\n			},\n			/* ---------------------------------------- */\n\n\n\n			/*\n			plugin update method\n			updates content and scrollbar(s) values, events and status\n			----------------------------------------\n			usage: $(selector).mCustomScrollbar("update");\n			*/\n\n			update:function(el,cb){\n\n				var selector=el || _selector.call(this); /* validate selector */\n\n				return $(selector).each(function(){\n\n					var $this=$(this);\n\n					if($this.data(pluginPfx)){ /* check if plugin has initialized */\n\n						var d=$this.data(pluginPfx),o=d.opt,\n							mCSB_container=$("#mCSB_"+d.idx+"_container"),\n							mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];\n\n						if(!mCSB_container.length){return;}\n\n						if(d.tweenRunning){_stop($this);} /* stop any running tweens while updating */\n\n						/* if element was disabled or destroyed, remove class(es) */\n						if($this.hasClass(classes[3])){$this.removeClass(classes[3]);}\n						if($this.hasClass(classes[4])){$this.removeClass(classes[4]);}\n\n						_maxHeight.call(this); /* detect/set css max-height value */\n\n						_expandContentHorizontally.call(this); /* expand content horizontally */\n\n						if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){\n							mCSB_container.css("width",_contentWidth(mCSB_container.children()));\n						}\n\n						d.overflowed=_overflowed.call(this); /* determine if scrolling is required */\n\n						_scrollbarVisibility.call(this); /* show/hide scrollbar(s) */\n\n						/* auto-adjust scrollbar dragger length analogous to content */\n						if(o.autoDraggerLength){_setDraggerLength.call(this);}\n\n						_scrollRatio.call(this); /* calculate and store scrollbar to content ratio */\n\n						_bindEvents.call(this); /* bind scrollbar events */\n\n						/* reset scrolling position and/or events */\n						var to=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)];\n						if(o.axis!=="x"){ /* y/yx axis */\n							if(!d.overflowed[0]){ /* y scrolling is not required */\n								_resetContentPosition.call(this); /* reset content position */\n								if(o.axis==="y"){\n									_unbindEvents.call(this);\n								}else if(o.axis==="yx" && d.overflowed[1]){\n									_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});\n								}\n							}else if(mCSB_dragger[0].height()>mCSB_dragger[0].parent().height()){\n								_resetContentPosition.call(this); /* reset content position */\n							}else{ /* y scrolling is required */\n								_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});\n								d.contentReset.y=null;\n							}\n						}\n						if(o.axis!=="y"){ /* x/yx axis */\n							if(!d.overflowed[1]){ /* x scrolling is not required */\n								_resetContentPosition.call(this); /* reset content position */\n								if(o.axis==="x"){\n									_unbindEvents.call(this);\n								}else if(o.axis==="yx" && d.overflowed[0]){\n									_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});\n								}\n							}else if(mCSB_dragger[1].width()>mCSB_dragger[1].parent().width()){\n								_resetContentPosition.call(this); /* reset content position */\n							}else{ /* x scrolling is required */\n								_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});\n								d.contentReset.x=null;\n							}\n						}\n\n						/* callbacks: onImageLoad, onSelectorChange, onUpdate */\n						if(cb && d){\n							if(cb===2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad==="function"){\n								o.callbacks.onImageLoad.call(this);\n							}else if(cb===3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange==="function"){\n								o.callbacks.onSelectorChange.call(this);\n							}else if(o.callbacks.onUpdate && typeof o.callbacks.onUpdate==="function"){\n								o.callbacks.onUpdate.call(this);\n							}\n						}\n\n						_autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */\n\n					}\n\n				});\n\n			},\n			/* ---------------------------------------- */\n\n\n\n			/*\n			plugin scrollTo method\n			triggers a scrolling event to a specific value\n			----------------------------------------\n			usage: $(selector).mCustomScrollbar("scrollTo",value,options);\n			*/\n\n			scrollTo:function(val,options){\n\n				/* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */\n				if(typeof val=="undefined" || val==null){return;}\n\n				var selector=_selector.call(this); /* validate selector */\n\n				return $(selector).each(function(){\n\n					var $this=$(this);\n\n					if($this.data(pluginPfx)){ /* check if plugin has initialized */\n\n						var d=$this.data(pluginPfx),o=d.opt,\n							/* method default options */\n							methodDefaults={\n								trigger:"external", /* method is by default triggered externally (e.g. from other scripts) */\n								scrollInertia:o.scrollInertia, /* scrolling inertia (animation duration) */\n								scrollEasing:"mcsEaseInOut", /* animation easing */\n								moveDragger:false, /* move dragger instead of content */\n								timeout:60, /* scroll-to delay */\n								callbacks:true, /* enable/disable callbacks */\n								onStart:true,\n								onUpdate:true,\n								onComplete:true\n							},\n							methodOptions=$.extend(true,{},methodDefaults,options),\n							to=_arr.call(this,val),dur=methodOptions.scrollInertia>0 && methodOptions.scrollInertia<17 ? 17 : methodOptions.scrollInertia;\n\n						/* translate yx values to actual scroll-to positions */\n						to[0]=_to.call(this,to[0],"y");\n						to[1]=_to.call(this,to[1],"x");\n\n						/*\n						check if scroll-to value moves the dragger instead of content.\n						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.)\n						*/\n						if(methodOptions.moveDragger){\n							to[0]*=d.scrollRatio.y;\n							to[1]*=d.scrollRatio.x;\n						}\n\n						methodOptions.dur=dur;\n\n						setTimeout(function(){\n							/* do the scrolling */\n							if(to[0]!==null && typeof to[0]!=="undefined" && o.axis!=="x" && d.overflowed[0]){ /* scroll y */\n								methodOptions.dir="y";\n								methodOptions.overwrite="all";\n								_scrollTo($this,to[0].toString(),methodOptions);\n							}\n							if(to[1]!==null && typeof to[1]!=="undefined" && o.axis!=="y" && d.overflowed[1]){ /* scroll x */\n								methodOptions.dir="x";\n								methodOptions.overwrite="none";\n								_scrollTo($this,to[1].toString(),methodOptions);\n							}\n						},methodOptions.timeout);\n\n					}\n\n				});\n\n			},\n			/* ---------------------------------------- */\n\n\n\n			/*\n			plugin stop method\n			stops scrolling animation\n			----------------------------------------\n			usage: $(selector).mCustomScrollbar("stop");\n			*/\n			stop:function(){\n\n				var selector=_selector.call(this); /* validate selector */\n\n				return $(selector).each(function(){\n\n					var $this=$(this);\n\n					if($this.data(pluginPfx)){ /* check if plugin has initialized */\n\n						_stop($this);\n\n					}\n\n				});\n\n			},\n			/* ---------------------------------------- */\n\n\n\n			/*\n			plugin disable method\n			temporarily disables the scrollbar(s)\n			----------------------------------------\n			usage: $(selector).mCustomScrollbar("disable",reset);\n			reset (boolean): resets content position to 0\n			*/\n			disable:function(r){\n\n				var selector=_selector.call(this); /* validate selector */\n\n				return $(selector).each(function(){\n\n					var $this=$(this);\n\n					if($this.data(pluginPfx)){ /* check if plugin has initialized */\n\n						var d=$this.data(pluginPfx);\n\n						_autoUpdate.call(this,"remove"); /* remove automatic updating */\n\n						_unbindEvents.call(this); /* unbind events */\n\n						if(r){_resetContentPosition.call(this);} /* reset content position */\n\n						_scrollbarVisibility.call(this,true); /* show/hide scrollbar(s) */\n\n						$this.addClass(classes[3]); /* add disable class */\n\n					}\n\n				});\n\n			},\n			/* ---------------------------------------- */\n\n\n\n			/*\n			plugin destroy method\n			completely removes the scrollbar(s) and returns the element to its original state\n			----------------------------------------\n			usage: $(selector).mCustomScrollbar("destroy");\n			*/\n			destroy:function(){\n\n				var selector=_selector.call(this); /* validate selector */\n\n				return $(selector).each(function(){\n\n					var $this=$(this);\n\n					if($this.data(pluginPfx)){ /* check if plugin has initialized */\n\n						var d=$this.data(pluginPfx),o=d.opt,\n							mCustomScrollBox=$("#mCSB_"+d.idx),\n							mCSB_container=$("#mCSB_"+d.idx+"_container"),\n							scrollbar=$(".mCSB_"+d.idx+"_scrollbar");\n\n						if(o.live){removeLiveTimers(o.liveSelector || $(selector).selector);} /* remove live timers */\n\n						_autoUpdate.call(this,"remove"); /* remove automatic updating */\n\n						_unbindEvents.call(this); /* unbind events */\n\n						_resetContentPosition.call(this); /* reset content position */\n\n						$this.removeData(pluginPfx); /* remove plugin data object */\n\n						_delete(this,"mcs"); /* delete callbacks object */\n\n						/* remove plugin markup */\n						scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin\'s inner wrapper) */\n						mCSB_container.find("img."+classes[2]).removeClass(classes[2]); /* remove loaded images flag */\n						mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin\'s inner wrapper with the original content */\n						/* remove plugin classes from the element and add destroy class */\n						$this.removeClass(pluginNS+" _"+pluginPfx+"_"+d.idx+" "+classes[6]+" "+classes[7]+" "+classes[5]+" "+classes[3]).addClass(classes[4]);\n\n					}\n\n				});\n\n			}\n			/* ---------------------------------------- */\n\n		},\n\n\n\n\n\n	/*\n	----------------------------------------\n	FUNCTIONS\n	----------------------------------------\n	*/\n\n		/* validates selector (if selector is invalid or undefined uses the default one) */\n		_selector=function(){\n			return (typeof $(this)!=="object" || $(this).length<1) ? defaultSelector : this;\n		},\n		/* -------------------- */\n\n\n		/* changes options according to theme */\n		_theme=function(obj){\n			var fixedSizeScrollbarThemes=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],\n				nonExpandedScrollbarThemes=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],\n				disabledScrollButtonsThemes=["minimal","minimal-dark"],\n				enabledAutoHideScrollbarThemes=["minimal","minimal-dark"],\n				scrollbarPositionOutsideThemes=["minimal","minimal-dark"];\n			obj.autoDraggerLength=$.inArray(obj.theme,fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;\n			obj.autoExpandScrollbar=$.inArray(obj.theme,nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;\n			obj.scrollButtons.enable=$.inArray(obj.theme,disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;\n			obj.autoHideScrollbar=$.inArray(obj.theme,enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;\n			obj.scrollbarPosition=$.inArray(obj.theme,scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;\n		},\n		/* -------------------- */\n\n\n		/* live option timers removal */\n		removeLiveTimers=function(selector){\n			if(liveTimers[selector]){\n				clearTimeout(liveTimers[selector]);\n				_delete(liveTimers,selector);\n			}\n		},\n		/* -------------------- */\n\n\n		/* normalizes axis option to valid values: "y", "x", "yx" */\n		_findAxis=function(val){\n			return (val==="yx" || val==="xy" || val==="auto") ? "yx" : (val==="x" || val==="horizontal") ? "x" : "y";\n		},\n		/* -------------------- */\n\n\n		/* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */\n		_findScrollButtonsType=function(val){\n			return (val==="stepped" || val==="pixels" || val==="step" || val==="click") ? "stepped" : "stepless";\n		},\n		/* -------------------- */\n\n\n		/* generates plugin markup */\n		_pluginMarkup=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				expandClass=o.autoExpandScrollbar ? " "+classes[1]+"_expand" : "",\n				scrollbar=["<div id=\'mCSB_"+d.idx+"_scrollbar_vertical\' class=\'mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+expandClass+"\'><div class=\'"+classes[12]+"\'><div id=\'mCSB_"+d.idx+"_dragger_vertical\' class=\'mCSB_dragger\' style=\'position:absolute;\' oncontextmenu=\'return false;\'><div class=\'mCSB_dragger_bar\' /></div><div class=\'mCSB_draggerRail\' /></div></div>","<div id=\'mCSB_"+d.idx+"_scrollbar_horizontal\' class=\'mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+expandClass+"\'><div class=\'"+classes[12]+"\'><div id=\'mCSB_"+d.idx+"_dragger_horizontal\' class=\'mCSB_dragger\' style=\'position:absolute;\' oncontextmenu=\'return false;\'><div class=\'mCSB_dragger_bar\' /></div><div class=\'mCSB_draggerRail\' /></div></div>"],\n				wrapperClass=o.axis==="yx" ? "mCSB_vertical_horizontal" : o.axis==="x" ? "mCSB_horizontal" : "mCSB_vertical",\n				scrollbars=o.axis==="yx" ? scrollbar[0]+scrollbar[1] : o.axis==="x" ? scrollbar[1] : scrollbar[0],\n				contentWrapper=o.axis==="yx" ? "<div id=\'mCSB_"+d.idx+"_container_wrapper\' class=\'mCSB_container_wrapper\' />" : "",\n				autoHideClass=o.autoHideScrollbar ? " "+classes[6] : "",\n				scrollbarDirClass=(o.axis!=="x" && d.langDir==="rtl") ? " "+classes[7] : "";\n			if(o.setWidth){$this.css("width",o.setWidth);} /* set element width */\n			if(o.setHeight){$this.css("height",o.setHeight);} /* set element height */\n			o.setLeft=(o.axis!=="y" && d.langDir==="rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */\n			$this.addClass(pluginNS+" _"+pluginPfx+"_"+d.idx+autoHideClass+scrollbarDirClass).wrapInner("<div id=\'mCSB_"+d.idx+"\' class=\'mCustomScrollBox mCS-"+o.theme+" "+wrapperClass+"\'><div id=\'mCSB_"+d.idx+"_container\' class=\'mCSB_container\' style=\'position:relative; top:"+o.setTop+"; left:"+o.setLeft+";\' dir="+d.langDir+" /></div>");\n			var mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_container=$("#mCSB_"+d.idx+"_container");\n			if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){\n				mCSB_container.css("width",_contentWidth(mCSB_container.children()));\n			}\n			if(o.scrollbarPosition==="outside"){\n				if($this.css("position")==="static"){ /* requires elements with non-static position */\n					$this.css("position","relative");\n				}\n				$this.css("overflow","visible");\n				mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);\n			}else{\n				mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);\n				mCSB_container.wrap(contentWrapper);\n			}\n			_scrollButtons.call(this); /* add scrollbar buttons */\n			/* minimum dragger length */\n			var mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];\n			mCSB_dragger[0].css("min-height",mCSB_dragger[0].height());\n			mCSB_dragger[1].css("min-width",mCSB_dragger[1].width());\n		},\n		/* -------------------- */\n\n\n		/* calculates content width */\n		_contentWidth=function(el){\n			return Math.max.apply(Math,el.map(function(){return $(this).outerWidth(true);}).get());\n		},\n		/* -------------------- */\n\n\n		/* expands content horizontally */\n		_expandContentHorizontally=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				mCSB_container=$("#mCSB_"+d.idx+"_container");\n			if(o.advanced.autoExpandHorizontalScroll && o.axis!=="y"){\n				/*\n				wrap content with an infinite width div and set its position to absolute and width to auto.\n				Setting width to auto before calculating the actual width is important!\n				We must let the browser set the width as browser zoom values are impossible to calculate.\n				*/\n				mCSB_container.css({"position":"absolute","width":"auto"})\n					.wrap("<div class=\'mCSB_h_wrapper\' style=\'position:relative; left:0; width:999999px;\' />")\n					.css({ /* set actual width, original position and un-wrap */\n						/*\n						get the exact width (with decimals) and then round-up.\n						Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width\n						*/\n						"width":(Math.ceil(mCSB_container[0].getBoundingClientRect().right+0.4)-Math.floor(mCSB_container[0].getBoundingClientRect().left)),\n						"position":"relative"\n					}).unwrap();\n			}\n		},\n		/* -------------------- */\n\n\n		/* adds scrollbar buttons */\n		_scrollButtons=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				mCSB_scrollTools=$(".mCSB_"+d.idx+"_scrollbar:first"),\n				tabindex=!_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex=\'"+o.scrollButtons.tabindex+"\'",\n				btnHTML=[\n					"<a href=\'#\' class=\'"+classes[13]+"\' oncontextmenu=\'return false;\' "+tabindex+" />",\n					"<a href=\'#\' class=\'"+classes[14]+"\' oncontextmenu=\'return false;\' "+tabindex+" />",\n					"<a href=\'#\' class=\'"+classes[15]+"\' oncontextmenu=\'return false;\' "+tabindex+" />",\n					"<a href=\'#\' class=\'"+classes[16]+"\' oncontextmenu=\'return false;\' "+tabindex+" />"\n				],\n				btn=[(o.axis==="x" ? btnHTML[2] : btnHTML[0]),(o.axis==="x" ? btnHTML[3] : btnHTML[1]),btnHTML[2],btnHTML[3]];\n			if(o.scrollButtons.enable){\n				mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);\n			}\n		},\n		/* -------------------- */\n\n\n		/* detects/sets css max-height value */\n		_maxHeight=function(){\n			var $this=$(this),d=$this.data(pluginPfx),\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mh=$this.css("max-height") || "none",pct=mh.indexOf("%")!==-1,\n				bs=$this.css("box-sizing");\n			if(mh!=="none"){\n				var val=pct ? $this.parent().height()*parseInt(mh)/100 : parseInt(mh);\n				/* if element\'s css box-sizing is "border-box", subtract any paddings and/or borders from max-height value */\n				if(bs==="border-box"){val-=(($this.innerHeight()-$this.height())+($this.outerHeight()-$this.innerHeight()));}\n				mCustomScrollBox.css("max-height",Math.round(val));\n			}\n		},\n		/* -------------------- */\n\n\n		/* auto-adjusts scrollbar dragger length */\n		_setDraggerLength=function(){\n			var $this=$(this),d=$this.data(pluginPfx),\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],\n				ratio=[mCustomScrollBox.height()/mCSB_container.outerHeight(false),mCustomScrollBox.width()/mCSB_container.outerWidth(false)],\n				l=[\n					parseInt(mCSB_dragger[0].css("min-height")),Math.round(ratio[0]*mCSB_dragger[0].parent().height()),\n					parseInt(mCSB_dragger[1].css("min-width")),Math.round(ratio[1]*mCSB_dragger[1].parent().width())\n				],\n				h=oldIE && (l[1]<l[0]) ? l[0] : l[1],w=oldIE && (l[3]<l[2]) ? l[2] : l[3];\n			mCSB_dragger[0].css({\n				"height":h,"max-height":(mCSB_dragger[0].parent().height()-10)\n			}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"});\n			mCSB_dragger[1].css({\n				"width":w,"max-width":(mCSB_dragger[1].parent().width()-10)\n			});\n		},\n		/* -------------------- */\n\n\n		/* calculates scrollbar to content ratio */\n		_scrollRatio=function(){\n			var $this=$(this),d=$this.data(pluginPfx),\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],\n				scrollAmount=[mCSB_container.outerHeight(false)-mCustomScrollBox.height(),mCSB_container.outerWidth(false)-mCustomScrollBox.width()],\n				ratio=[\n					scrollAmount[0]/(mCSB_dragger[0].parent().height()-mCSB_dragger[0].height()),\n					scrollAmount[1]/(mCSB_dragger[1].parent().width()-mCSB_dragger[1].width())\n				];\n			d.scrollRatio={y:ratio[0],x:ratio[1]};\n		},\n		/* -------------------- */\n\n\n		/* toggles scrolling classes */\n		_onDragClasses=function(el,action,xpnd){\n			var expandClass=xpnd ? classes[0]+"_expanded" : "",\n				scrollbar=el.closest(".mCSB_scrollTools");\n			if(action==="active"){\n				el.toggleClass(classes[0]+" "+expandClass); scrollbar.toggleClass(classes[1]);\n				el[0]._draggable=el[0]._draggable ? 0 : 1;\n			}else{\n				if(!el[0]._draggable){\n					if(action==="hide"){\n						el.removeClass(classes[0]); scrollbar.removeClass(classes[1]);\n					}else{\n						el.addClass(classes[0]); scrollbar.addClass(classes[1]);\n					}\n				}\n			}\n		},\n		/* -------------------- */\n\n\n		/* checks if content overflows its container to determine if scrolling is required */\n		_overflowed=function(){\n			var $this=$(this),d=$this.data(pluginPfx),\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				contentHeight=d.overflowed==null ? mCSB_container.height() : mCSB_container.outerHeight(false),\n				contentWidth=d.overflowed==null ? mCSB_container.width() : mCSB_container.outerWidth(false);\n			return [contentHeight>mCustomScrollBox.height(),contentWidth>mCustomScrollBox.width()];\n		},\n		/* -------------------- */\n\n\n		/* resets content position to 0 */\n		_resetContentPosition=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];\n			_stop($this); /* stop any current scrolling before resetting */\n			if((o.axis!=="x" && !d.overflowed[0]) || (o.axis==="y" && d.overflowed[0])){ /* reset y */\n				mCSB_dragger[0].add(mCSB_container).css("top",0);\n				_scrollTo($this,"_resetY");\n			}\n			if((o.axis!=="y" && !d.overflowed[1]) || (o.axis==="x" && d.overflowed[1])){ /* reset x */\n				var cx=dx=0;\n				if(d.langDir==="rtl"){ /* adjust left position for rtl direction */\n					cx=mCustomScrollBox.width()-mCSB_container.outerWidth(false);\n					dx=Math.abs(cx/d.scrollRatio.x);\n				}\n				mCSB_container.css("left",cx);\n				mCSB_dragger[1].css("left",dx);\n				_scrollTo($this,"_resetX");\n			}\n		},\n		/* -------------------- */\n\n\n		/* binds scrollbar events */\n		_bindEvents=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt;\n			if(!d.bindEvents){ /* check if events are already bound */\n				_draggable.call(this);\n				if(o.contentTouchScroll){_contentDraggable.call(this);}\n				_selectable.call(this);\n				if(o.mouseWheel.enable){ /* bind mousewheel fn when plugin is available */\n					function _mwt(){\n						mousewheelTimeout=setTimeout(function(){\n							if(!$.event.special.mousewheel){\n								_mwt();\n							}else{\n								clearTimeout(mousewheelTimeout);\n								_mousewheel.call($this[0]);\n							}\n						},100);\n					}\n					var mousewheelTimeout;\n					_mwt();\n				}\n				_draggerRail.call(this);\n				_wrapperScroll.call(this);\n				if(o.advanced.autoScrollOnFocus){_focus.call(this);}\n				if(o.scrollButtons.enable){_buttons.call(this);}\n				if(o.keyboard.enable){_keyboard.call(this);}\n				d.bindEvents=true;\n			}\n		},\n		/* -------------------- */\n\n\n		/* unbinds scrollbar events */\n		_unbindEvents=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				namespace=pluginPfx+"_"+d.idx,\n				sb=".mCSB_"+d.idx+"_scrollbar",\n				sel=$("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+sb+" ."+classes[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+sb+">a"),\n				mCSB_container=$("#mCSB_"+d.idx+"_container");\n			if(o.advanced.releaseDraggableSelectors){sel.add($(o.advanced.releaseDraggableSelectors));}\n			if(d.bindEvents){ /* check if events are bound */\n				/* unbind namespaced events from document/selectors */\n				$(document).unbind("."+namespace);\n				sel.each(function(){\n					$(this).unbind("."+namespace);\n				});\n				/* clear and delete timeouts/objects */\n				clearTimeout($this[0]._focusTimeout); _delete($this[0],"_focusTimeout");\n				clearTimeout(d.sequential.step); _delete(d.sequential,"step");\n				clearTimeout(mCSB_container[0].onCompleteTimeout); _delete(mCSB_container[0],"onCompleteTimeout");\n				d.bindEvents=false;\n			}\n		},\n		/* -------------------- */\n\n\n		/* toggles scrollbar visibility */\n		_scrollbarVisibility=function(disabled){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				contentWrapper=$("#mCSB_"+d.idx+"_container_wrapper"),\n				content=contentWrapper.length ? contentWrapper : $("#mCSB_"+d.idx+"_container"),\n				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],\n				mCSB_dragger=[scrollbar[0].find(".mCSB_dragger"),scrollbar[1].find(".mCSB_dragger")];\n			if(o.axis!=="x"){\n				if(d.overflowed[0] && !disabled){\n					scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display","block");\n					content.removeClass(classes[8]+" "+classes[10]);\n				}else{\n					if(o.alwaysShowScrollbar){\n						if(o.alwaysShowScrollbar!==2){mCSB_dragger[0].css("display","none");}\n						content.removeClass(classes[10]);\n					}else{\n						scrollbar[0].css("display","none");\n						content.addClass(classes[10]);\n					}\n					content.addClass(classes[8]);\n				}\n			}\n			if(o.axis!=="y"){\n				if(d.overflowed[1] && !disabled){\n					scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display","block");\n					content.removeClass(classes[9]+" "+classes[11]);\n				}else{\n					if(o.alwaysShowScrollbar){\n						if(o.alwaysShowScrollbar!==2){mCSB_dragger[1].css("display","none");}\n						content.removeClass(classes[11]);\n					}else{\n						scrollbar[1].css("display","none");\n						content.addClass(classes[11]);\n					}\n					content.addClass(classes[9]);\n				}\n			}\n			if(!d.overflowed[0] && !d.overflowed[1]){\n				$this.addClass(classes[5]);\n			}else{\n				$this.removeClass(classes[5]);\n			}\n		},\n		/* -------------------- */\n\n\n		/* returns input coordinates of pointer, touch and mouse events (relative to document) */\n		_coordinates=function(e){\n			var t=e.type;\n			switch(t){\n				case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp":\n					return e.target.ownerDocument!==document ? [e.originalEvent.screenY,e.originalEvent.screenX,false] : [e.originalEvent.pageY,e.originalEvent.pageX,false];\n					break;\n				case "touchstart": case "touchmove": case "touchend":\n					var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],\n						touches=e.originalEvent.touches.length || e.originalEvent.changedTouches.length;\n					return e.target.ownerDocument!==document ? [touch.screenY,touch.screenX,touches>1] : [touch.pageY,touch.pageX,touches>1];\n					break;\n				default:\n					return [e.pageY,e.pageX,false];\n			}\n		},\n		/* -------------------- */\n\n\n		/*\n		SCROLLBAR DRAG EVENTS\n		scrolls content via scrollbar dragging\n		*/\n		_draggable=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				namespace=pluginPfx+"_"+d.idx,\n				draggerId=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				mCSB_dragger=$("#"+draggerId[0]+",#"+draggerId[1]),\n				draggable,dragY,dragX,\n				rds=o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger;\n			mCSB_dragger.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){\n				e.stopImmediatePropagation();\n				e.preventDefault();\n				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */\n				touchActive=true;\n				if(oldIE){document.onselectstart=function(){return false;}} /* disable text selection for IE < 9 */\n				_iframe(false); /* enable scrollbar dragging over iframes by disabling their events */\n				_stop($this);\n				draggable=$(this);\n				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,\n					h=draggable.height()+offset.top,w=draggable.width()+offset.left;\n				if(y<h && y>0 && x<w && x>0){\n					dragY=y;\n					dragX=x;\n				}\n				_onDragClasses(draggable,"active",o.autoExpandScrollbar);\n			}).bind("touchmove."+namespace,function(e){\n				e.stopImmediatePropagation();\n				e.preventDefault();\n				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;\n				_drag(dragY,dragX,y,x);\n			});\n			$(document).bind("mousemove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace,function(e){\n				if(draggable){\n					var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;\n					if(dragY===y){return;} /* has it really moved? */\n					_drag(dragY,dragX,y,x);\n				}\n			}).add(rds).bind("mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){\n				if(draggable){\n					_onDragClasses(draggable,"active",o.autoExpandScrollbar);\n					draggable=null;\n				}\n				touchActive=false;\n				if(oldIE){document.onselectstart=null;} /* enable text selection for IE < 9 */\n				_iframe(true); /* enable iframes events */\n			});\n			function _iframe(evt){\n				var el=mCSB_container.find("iframe");\n				if(!el.length){return;} /* check if content contains iframes */\n				var val=!evt ? "none" : "auto";\n				el.css("pointer-events",val); /* for IE11, iframe\'s display property should not be "block" */\n			}\n			function _drag(dragY,dragX,y,x){\n				mCSB_container[0].idleTimer=o.scrollInertia<233 ? 250 : 0;\n				if(draggable.attr("id")===draggerId[1]){\n					var dir="x",to=((draggable[0].offsetLeft-dragX)+x)*d.scrollRatio.x;\n				}else{\n					var dir="y",to=((draggable[0].offsetTop-dragY)+y)*d.scrollRatio.y;\n				}\n				_scrollTo($this,to.toString(),{dir:dir,drag:true});\n			}\n		},\n		/* -------------------- */\n\n\n		/*\n		TOUCH SWIPE EVENTS\n		scrolls content via touch swipe\n		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices\n		*/\n		_contentDraggable=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				namespace=pluginPfx+"_"+d.idx,\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],\n				dragY,dragX,touchStartY,touchStartX,touchMoveY=[],touchMoveX=[],startTime,runningTime,endTime,distance,speed,amount,\n				durA=0,durB,overwrite=o.axis==="yx" ? "none" : "all",touchIntent=[],touchDrag,docDrag,\n				iframe=mCSB_container.find("iframe"),\n				events=[\n					"touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace, //start\n					"touchmove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace, //move\n					"touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace //end\n				];\n			mCSB_container.bind(events[0],function(e){\n				_onTouchstart(e);\n			}).bind(events[1],function(e){\n				_onTouchmove(e);\n			});\n			mCustomScrollBox.bind(events[0],function(e){\n				_onTouchstart2(e);\n			}).bind(events[2],function(e){\n				_onTouchend(e);\n			});\n			if(iframe.length){\n				iframe.each(function(){\n					$(this).load(function(){\n						/* bind events on accessible iframes */\n						if(_canAccessIFrame(this)){\n							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){\n								_onTouchstart(e);\n								_onTouchstart2(e);\n							}).bind(events[1],function(e){\n								_onTouchmove(e);\n							}).bind(events[2],function(e){\n								_onTouchend(e);\n							});\n						}\n					});\n				});\n			}\n			function _onTouchstart(e){\n				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}\n				touchable=1; touchDrag=0; docDrag=0;\n				var offset=mCSB_container.offset();\n				dragY=_coordinates(e)[0]-offset.top;\n				dragX=_coordinates(e)[1]-offset.left;\n				touchIntent=[_coordinates(e)[0],_coordinates(e)[1]];\n			}\n			function _onTouchmove(e){\n				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}\n				e.stopImmediatePropagation();\n				if(docDrag && !touchDrag){return;}\n				runningTime=_getTime();\n				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,\n					easing="mcsLinearOut";\n				touchMoveY.push(y);\n				touchMoveX.push(x);\n				touchIntent[2]=Math.abs(_coordinates(e)[0]-touchIntent[0]); touchIntent[3]=Math.abs(_coordinates(e)[1]-touchIntent[1]);\n				if(d.overflowed[0]){\n					var limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),\n						prevent=((dragY-y)>0 && (y-dragY)>-(limit*d.scrollRatio.y) && (touchIntent[3]*2<touchIntent[2] || o.axis==="yx"));\n				}\n				if(d.overflowed[1]){\n					var limitX=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),\n						preventX=((dragX-x)>0 && (x-dragX)>-(limitX*d.scrollRatio.x) && (touchIntent[2]*2<touchIntent[3] || o.axis==="yx"));\n				}\n				if(prevent || preventX){e.preventDefault(); touchDrag=1;}else{docDrag=1;} /* prevent native document scrolling */\n				amount=o.axis==="yx" ? [(dragY-y),(dragX-x)] : o.axis==="x" ? [null,(dragX-x)] : [(dragY-y),null];\n				mCSB_container[0].idleTimer=250;\n				if(d.overflowed[0]){_drag(amount[0],durA,easing,"y","all",true);}\n				if(d.overflowed[1]){_drag(amount[1],durA,easing,"x",overwrite,true);}\n			}\n			function _onTouchstart2(e){\n				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}\n				touchable=1;\n				e.stopImmediatePropagation();\n				_stop($this);\n				startTime=_getTime();\n				var offset=mCustomScrollBox.offset();\n				touchStartY=_coordinates(e)[0]-offset.top;\n				touchStartX=_coordinates(e)[1]-offset.left;\n				touchMoveY=[]; touchMoveX=[];\n			}\n			function _onTouchend(e){\n				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}\n				e.stopImmediatePropagation();\n				touchDrag=0; docDrag=0;\n				endTime=_getTime();\n				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;\n				if((endTime-runningTime)>30){return;}\n				speed=1000/(endTime-startTime);\n				var easing="mcsEaseOut",slow=speed<2.5,\n					diff=slow ? [touchMoveY[touchMoveY.length-2],touchMoveX[touchMoveX.length-2]] : [0,0];\n				distance=slow ? [(y-diff[0]),(x-diff[1])] : [y-touchStartY,x-touchStartX];\n				var absDistance=[Math.abs(distance[0]),Math.abs(distance[1])];\n				speed=slow ? [Math.abs(distance[0]/4),Math.abs(distance[1]/4)] : [speed,speed];\n				var a=[\n					Math.abs(mCSB_container[0].offsetTop)-(distance[0]*_m((absDistance[0]/speed[0]),speed[0])),\n					Math.abs(mCSB_container[0].offsetLeft)-(distance[1]*_m((absDistance[1]/speed[1]),speed[1]))\n				];\n				amount=o.axis==="yx" ? [a[0],a[1]] : o.axis==="x" ? [null,a[1]] : [a[0],null];\n				durB=[(absDistance[0]*4)+o.scrollInertia,(absDistance[1]*4)+o.scrollInertia];\n				var md=parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */\n				amount[0]=absDistance[0]>md ? amount[0] : 0;\n				amount[1]=absDistance[1]>md ? amount[1] : 0;\n				if(d.overflowed[0]){_drag(amount[0],durB[0],easing,"y",overwrite,false);}\n				if(d.overflowed[1]){_drag(amount[1],durB[1],easing,"x",overwrite,false);}\n			}\n			function _m(ds,s){\n				var r=[s*1.5,s*2,s/1.5,s/2];\n				if(ds>90){\n					return s>4 ? r[0] : r[3];\n				}else if(ds>60){\n					return s>3 ? r[3] : r[2];\n				}else if(ds>30){\n					return s>8 ? r[1] : s>6 ? r[0] : s>4 ? s : r[2];\n				}else{\n					return s>8 ? s : r[3];\n				}\n			}\n			function _drag(amount,dur,easing,dir,overwrite,drag){\n				if(!amount){return;}\n				_scrollTo($this,amount.toString(),{dur:dur,scrollEasing:easing,dir:dir,overwrite:overwrite,drag:drag});\n			}\n		},\n		/* -------------------- */\n\n\n		/*\n		SELECT TEXT EVENTS\n		scrolls content when text is selected\n		*/\n		_selectable=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,\n				namespace=pluginPfx+"_"+d.idx,\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				wrapper=mCSB_container.parent(),\n				action;\n			mCSB_container.bind("mousedown."+namespace,function(e){\n				if(touchable){return;}\n				if(!action){action=1; touchActive=true;}\n			}).add(document).bind("mousemove."+namespace,function(e){\n				if(!touchable && action && _sel()){\n					var offset=mCSB_container.offset(),\n						y=_coordinates(e)[0]-offset.top+mCSB_container[0].offsetTop,x=_coordinates(e)[1]-offset.left+mCSB_container[0].offsetLeft;\n					if(y>0 && y<wrapper.height() && x>0 && x<wrapper.width()){\n						if(seq.step){_seq("off",null,"stepped");}\n					}else{\n						if(o.axis!=="x" && d.overflowed[0]){\n							if(y<0){\n								_seq("on",38);\n							}else if(y>wrapper.height()){\n								_seq("on",40);\n							}\n						}\n						if(o.axis!=="y" && d.overflowed[1]){\n							if(x<0){\n								_seq("on",37);\n							}else if(x>wrapper.width()){\n								_seq("on",39);\n							}\n						}\n					}\n				}\n			}).bind("mouseup."+namespace,function(e){\n				if(touchable){return;}\n				if(action){action=0; _seq("off",null);}\n				touchActive=false;\n			});\n			function _sel(){\n				return 	window.getSelection ? window.getSelection().toString() :\n						document.selection && document.selection.type!="Control" ? document.selection.createRange().text : 0;\n			}\n			function _seq(a,c,s){\n				seq.type=s && action ? "stepped" : "stepless";\n				seq.scrollAmount=10;\n				_sequentialScroll($this,a,c,"mcsLinearOut",s ? 60 : null);\n			}\n		},\n		/* -------------------- */\n\n\n		/*\n		MOUSE WHEEL EVENT\n		scrolls content via mouse-wheel\n		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)\n		*/\n		_mousewheel=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				namespace=pluginPfx+"_"+d.idx,\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],\n				iframe=$("#mCSB_"+d.idx+"_container").find("iframe");\n			if(d){ /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */\n				if(iframe.length){\n					iframe.each(function(){\n						$(this).load(function(){\n							/* bind events on accessible iframes */\n							if(_canAccessIFrame(this)){\n								$(this.contentDocument || this.contentWindow.document).bind("mousewheel."+namespace,function(e,delta){\n									_onMousewheel(e,delta);\n								});\n							}\n						});\n					});\n				}\n				mCustomScrollBox.bind("mousewheel."+namespace,function(e,delta){\n					_onMousewheel(e,delta);\n				});\n			}\n			function _onMousewheel(e,delta){\n				_stop($this);\n				if(_disableMousewheel($this,e.target)){return;} /* disables mouse-wheel when hovering specific elements */\n				var deltaFactor=o.mouseWheel.deltaFactor!=="auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor<100) ? 100 : e.deltaFactor || 100;\n				if(o.axis==="x" || o.mouseWheel.axis==="x"){\n					var dir="x",\n						px=[Math.round(deltaFactor*d.scrollRatio.x),parseInt(o.mouseWheel.scrollAmount)],\n						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.width() ? mCustomScrollBox.width()*0.9 : px[0],\n						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetLeft),\n						draggerPos=mCSB_dragger[1][0].offsetLeft,\n						limit=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),\n						dlt=e.deltaX || e.deltaY || delta;\n				}else{\n					var dir="y",\n						px=[Math.round(deltaFactor*d.scrollRatio.y),parseInt(o.mouseWheel.scrollAmount)],\n						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.height() ? mCustomScrollBox.height()*0.9 : px[0],\n						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetTop),\n						draggerPos=mCSB_dragger[0][0].offsetTop,\n						limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),\n						dlt=e.deltaY || delta;\n				}\n				if((dir==="y" && !d.overflowed[0]) || (dir==="x" && !d.overflowed[1])){return;}\n				if(o.mouseWheel.invert){dlt=-dlt;}\n				if(o.mouseWheel.normalizeDelta){dlt=dlt<0 ? -1 : 1;}\n				if((dlt>0 && draggerPos!==0) || (dlt<0 && draggerPos!==limit) || o.mouseWheel.preventDefault){\n					e.stopImmediatePropagation();\n					e.preventDefault();\n				}\n				_scrollTo($this,(contentPos-(dlt*amount)).toString(),{dir:dir});\n			}\n		},\n		/* -------------------- */\n\n\n		/* checks if iframe can be accessed */\n		_canAccessIFrame=function(iframe){\n			var html=null;\n			try{\n				var doc=iframe.contentDocument || iframe.contentWindow.document;\n				html=doc.body.innerHTML;\n			}catch(err){/* do nothing */}\n			return(html!==null);\n		},\n		/* -------------------- */\n\n\n		/* disables mouse-wheel when hovering specific elements like select, datalist etc. */\n		_disableMousewheel=function(el,target){\n			var tag=target.nodeName.toLowerCase(),\n				tags=el.data(pluginPfx).opt.mouseWheel.disableOver,\n				/* elements that require focus */\n				focusTags=["select","textarea"];\n			return $.inArray(tag,tags) > -1 && !($.inArray(tag,focusTags) > -1 && !$(target).is(":focus"));\n		},\n		/* -------------------- */\n\n\n		/*\n		DRAGGER RAIL CLICK EVENT\n		scrolls content via dragger rail\n		*/\n		_draggerRail=function(){\n			var $this=$(this),d=$this.data(pluginPfx),\n				namespace=pluginPfx+"_"+d.idx,\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				wrapper=mCSB_container.parent(),\n				mCSB_draggerContainer=$(".mCSB_"+d.idx+"_scrollbar ."+classes[12]);\n			mCSB_draggerContainer.bind("touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){\n				touchActive=true;\n			}).bind("touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){\n				touchActive=false;\n			}).bind("click."+namespace,function(e){\n				if($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")){\n					_stop($this);\n					var el=$(this),mCSB_dragger=el.find(".mCSB_dragger");\n					if(el.parent(".mCSB_scrollTools_horizontal").length>0){\n						if(!d.overflowed[1]){return;}\n						var dir="x",\n							clickDir=e.pageX>mCSB_dragger.offset().left ? -1 : 1,\n							to=Math.abs(mCSB_container[0].offsetLeft)-(clickDir*(wrapper.width()*0.9));\n					}else{\n						if(!d.overflowed[0]){return;}\n						var dir="y",\n							clickDir=e.pageY>mCSB_dragger.offset().top ? -1 : 1,\n							to=Math.abs(mCSB_container[0].offsetTop)-(clickDir*(wrapper.height()*0.9));\n					}\n					_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});\n				}\n			});\n		},\n		/* -------------------- */\n\n\n		/*\n		FOCUS EVENT\n		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)\n		*/\n		_focus=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				namespace=pluginPfx+"_"+d.idx,\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				wrapper=mCSB_container.parent();\n			mCSB_container.bind("focusin."+namespace,function(e){\n				var el=$(document.activeElement),\n					nested=mCSB_container.find(".mCustomScrollBox").length,\n					dur=0;\n				if(!el.is(o.advanced.autoScrollOnFocus)){return;}\n				_stop($this);\n				clearTimeout($this[0]._focusTimeout);\n				$this[0]._focusTimer=nested ? (dur+17)*nested : 0;\n				$this[0]._focusTimeout=setTimeout(function(){\n					var	to=[_childPos(el)[0],_childPos(el)[1]],\n						contentPos=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft],\n						isVisible=[\n							(contentPos[0]+to[0]>=0 && contentPos[0]+to[0]<wrapper.height()-el.outerHeight(false)),\n							(contentPos[1]+to[1]>=0 && contentPos[0]+to[1]<wrapper.width()-el.outerWidth(false))\n						],\n						overwrite=(o.axis==="yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";\n					if(o.axis!=="x" && !isVisible[0]){\n						_scrollTo($this,to[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});\n					}\n					if(o.axis!=="y" && !isVisible[1]){\n						_scrollTo($this,to[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});\n					}\n				},$this[0]._focusTimer);\n			});\n		},\n		/* -------------------- */\n\n\n		/* sets content wrapper scrollTop/scrollLeft always to 0 */\n		_wrapperScroll=function(){\n			var $this=$(this),d=$this.data(pluginPfx),\n				namespace=pluginPfx+"_"+d.idx,\n				wrapper=$("#mCSB_"+d.idx+"_container").parent();\n			wrapper.bind("scroll."+namespace,function(e){\n				if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){\n					$(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden"); /* hide scrollbar(s) */\n				}\n			});\n		},\n		/* -------------------- */\n\n\n		/*\n		BUTTONS EVENTS\n		scrolls content via up, down, left and right buttons\n		*/\n		_buttons=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,\n				namespace=pluginPfx+"_"+d.idx,\n				sel=".mCSB_"+d.idx+"_scrollbar",\n				btn=$(sel+">a");\n			btn.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace+" mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace+" mouseout."+namespace+" pointerout."+namespace+" MSPointerOut."+namespace+" click."+namespace,function(e){\n				e.preventDefault();\n				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */\n				var btnClass=$(this).attr("class");\n				seq.type=o.scrollButtons.scrollType;\n				switch(e.type){\n					case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown":\n						if(seq.type==="stepped"){return;}\n						touchActive=true;\n						d.tweenRunning=false;\n						_seq("on",btnClass);\n						break;\n					case "mouseup": case "touchend": case "pointerup": case "MSPointerUp":\n					case "mouseout": case "pointerout": case "MSPointerOut":\n						if(seq.type==="stepped"){return;}\n						touchActive=false;\n						if(seq.dir){_seq("off",btnClass);}\n						break;\n					case "click":\n						if(seq.type!=="stepped" || d.tweenRunning){return;}\n						_seq("on",btnClass);\n						break;\n				}\n				function _seq(a,c){\n					seq.scrollAmount=o.snapAmount || o.scrollButtons.scrollAmount;\n					_sequentialScroll($this,a,c);\n				}\n			});\n		},\n		/* -------------------- */\n\n\n		/*\n		KEYBOARD EVENTS\n		scrolls content via keyboard\n		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End\n		*/\n		_keyboard=function(){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,\n				namespace=pluginPfx+"_"+d.idx,\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				wrapper=mCSB_container.parent(),\n				editables="input,textarea,select,datalist,keygen,[contenteditable=\'true\']",\n				iframe=mCSB_container.find("iframe"),\n				events=["blur."+namespace+" keydown."+namespace+" keyup."+namespace];\n			if(iframe.length){\n				iframe.each(function(){\n					$(this).load(function(){\n						/* bind events on accessible iframes */\n						if(_canAccessIFrame(this)){\n							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){\n								_onKeyboard(e);\n							});\n						}\n					});\n				});\n			}\n			mCustomScrollBox.attr("tabindex","0").bind(events[0],function(e){\n				_onKeyboard(e);\n			});\n			function _onKeyboard(e){\n				switch(e.type){\n					case "blur":\n						if(d.tweenRunning && seq.dir){_seq("off",null);}\n						break;\n					case "keydown": case "keyup":\n						var code=e.keyCode ? e.keyCode : e.which,action="on";\n						if((o.axis!=="x" && (code===38 || code===40)) || (o.axis!=="y" && (code===37 || code===39))){\n							/* up (38), down (40), left (37), right (39) arrows */\n							if(((code===38 || code===40) && !d.overflowed[0]) || ((code===37 || code===39) && !d.overflowed[1])){return;}\n							if(e.type==="keyup"){action="off";}\n							if(!$(document.activeElement).is(editables)){\n								e.preventDefault();\n								e.stopImmediatePropagation();\n								_seq(action,code);\n							}\n						}else if(code===33 || code===34){\n							/* PgUp (33), PgDn (34) */\n							if(d.overflowed[0] || d.overflowed[1]){\n								e.preventDefault();\n								e.stopImmediatePropagation();\n							}\n							if(e.type==="keyup"){\n								_stop($this);\n								var keyboardDir=code===34 ? -1 : 1;\n								if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){\n									var dir="x",to=Math.abs(mCSB_container[0].offsetLeft)-(keyboardDir*(wrapper.width()*0.9));\n								}else{\n									var dir="y",to=Math.abs(mCSB_container[0].offsetTop)-(keyboardDir*(wrapper.height()*0.9));\n								}\n								_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});\n							}\n						}else if(code===35 || code===36){\n							/* End (35), Home (36) */\n							if(!$(document.activeElement).is(editables)){\n								if(d.overflowed[0] || d.overflowed[1]){\n									e.preventDefault();\n									e.stopImmediatePropagation();\n								}\n								if(e.type==="keyup"){\n									if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){\n										var dir="x",to=code===35 ? Math.abs(wrapper.width()-mCSB_container.outerWidth(false)) : 0;\n									}else{\n										var dir="y",to=code===35 ? Math.abs(wrapper.height()-mCSB_container.outerHeight(false)) : 0;\n									}\n									_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});\n								}\n							}\n						}\n						break;\n				}\n				function _seq(a,c){\n					seq.type=o.keyboard.scrollType;\n					seq.scrollAmount=o.snapAmount || o.keyboard.scrollAmount;\n					if(seq.type==="stepped" && d.tweenRunning){return;}\n					_sequentialScroll($this,a,c);\n				}\n			}\n		},\n		/* -------------------- */\n\n\n		/* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */\n		_sequentialScroll=function(el,action,trigger,e,s){\n			var d=el.data(pluginPfx),o=d.opt,seq=d.sequential,\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				once=seq.type==="stepped" ? true : false,\n				steplessSpeed=o.scrollInertia < 26 ? 26 : o.scrollInertia, /* 26/1.5=17 */\n				steppedSpeed=o.scrollInertia < 1 ? 17 : o.scrollInertia;\n			switch(action){\n				case "on":\n					seq.dir=[\n						(trigger===classes[16] || trigger===classes[15] || trigger===39 || trigger===37 ? "x" : "y"),\n						(trigger===classes[13] || trigger===classes[15] || trigger===38 || trigger===37 ? -1 : 1)\n					];\n					_stop(el);\n					if(_isNumeric(trigger) && seq.type==="stepped"){return;}\n					_on(once);\n					break;\n				case "off":\n					_off();\n					if(once || (d.tweenRunning && seq.dir)){\n						_on(true);\n					}\n					break;\n			}\n			/* starts sequence */\n			function _on(once){\n				var c=seq.type!=="stepped", /* continuous scrolling */\n					t=s ? s : !once ? 1000/60 : c ? steplessSpeed/1.5 : steppedSpeed, /* timer */\n					m=!once ? 2.5 : c ? 7.5 : 40, /* multiplier */\n					contentPos=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)],\n					ratio=[d.scrollRatio.y>10 ? 10 : d.scrollRatio.y,d.scrollRatio.x>10 ? 10 : d.scrollRatio.x],\n					amount=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*(ratio[1]*m)) : contentPos[0]+(seq.dir[1]*(ratio[0]*m)),\n					px=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*parseInt(seq.scrollAmount)) : contentPos[0]+(seq.dir[1]*parseInt(seq.scrollAmount)),\n					to=seq.scrollAmount!=="auto" ? px : amount,\n					easing=e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",\n					onComplete=!once ? false : true;\n				if(once && t<17){\n					to=seq.dir[0]==="x" ? contentPos[1] : contentPos[0];\n				}\n				_scrollTo(el,to.toString(),{dir:seq.dir[0],scrollEasing:easing,dur:t,onComplete:onComplete});\n				if(once){\n					seq.dir=false;\n					return;\n				}\n				clearTimeout(seq.step);\n				seq.step=setTimeout(function(){\n					_on();\n				},t);\n			}\n			/* stops sequence */\n			function _off(){\n				clearTimeout(seq.step);\n				_delete(seq,"step");\n				_stop(el);\n			}\n		},\n		/* -------------------- */\n\n\n		/* returns a yx array from value */\n		_arr=function(val){\n			var o=$(this).data(pluginPfx).opt,vals=[];\n			if(typeof val==="function"){val=val();} /* check if the value is a single anonymous function */\n			/* check if value is object or array, its length and create an array with yx values */\n			if(!(val instanceof Array)){ /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */\n				vals[0]=val.y ? val.y : val.x || o.axis==="x" ? null : val;\n				vals[1]=val.x ? val.x : val.y || o.axis==="y" ? null : val;\n			}else{ /* array value (e.g. [100,100]) */\n				vals=val.length>1 ? [val[0],val[1]] : o.axis==="x" ? [null,val[0]] : [val[0],null];\n			}\n			/* check if array values are anonymous functions */\n			if(typeof vals[0]==="function"){vals[0]=vals[0]();}\n			if(typeof vals[1]==="function"){vals[1]=vals[1]();}\n			return vals;\n		},\n		/* -------------------- */\n\n\n		/* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */\n		_to=function(val,dir){\n			if(val==null || typeof val=="undefined"){return;}\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				wrapper=mCSB_container.parent(),\n				t=typeof val;\n			if(!dir){dir=o.axis==="x" ? "x" : "y";}\n			var contentLength=dir==="x" ? mCSB_container.outerWidth(false) : mCSB_container.outerHeight(false),\n				contentPos=dir==="x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,\n				cssProp=dir==="x" ? "left" : "top";\n			switch(t){\n				case "function": /* this currently is not used. Consider removing it */\n					return val();\n					break;\n				case "object": /* js/jquery object */\n					var obj=val.jquery ? val : $(val);\n					if(!obj.length){return;}\n					return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];\n					break;\n				case "string": case "number":\n					if(_isNumeric(val)){ /* numeric value */\n						return Math.abs(val);\n					}else if(val.indexOf("%")!==-1){ /* percentage value */\n						return Math.abs(contentLength*parseInt(val)/100);\n					}else if(val.indexOf("-=")!==-1){ /* decrease value */\n						return Math.abs(contentPos-parseInt(val.split("-=")[1]));\n					}else if(val.indexOf("+=")!==-1){ /* inrease value */\n						var p=(contentPos+parseInt(val.split("+=")[1]));\n						return p>=0 ? 0 : Math.abs(p);\n					}else if(val.indexOf("px")!==-1 && _isNumeric(val.split("px")[0])){ /* pixels string value (e.g. "100px") */\n						return Math.abs(val.split("px")[0]);\n					}else{\n						if(val==="top" || val==="left"){ /* special strings */\n							return 0;\n						}else if(val==="bottom"){\n							return Math.abs(wrapper.height()-mCSB_container.outerHeight(false));\n						}else if(val==="right"){\n							return Math.abs(wrapper.width()-mCSB_container.outerWidth(false));\n						}else if(val==="first" || val==="last"){\n							var obj=mCSB_container.find(":"+val);\n							return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];\n						}else{\n							if($(val).length){ /* jquery selector */\n								return dir==="x" ? _childPos($(val))[1] : _childPos($(val))[0];\n							}else{ /* other values (e.g. "100em") */\n								mCSB_container.css(cssProp,val);\n								methods.update.call(null,$this[0]);\n								return;\n							}\n						}\n					}\n					break;\n			}\n		},\n		/* -------------------- */\n\n\n		/* calls the update method automatically */\n		_autoUpdate=function(rem){\n			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,\n				mCSB_container=$("#mCSB_"+d.idx+"_container");\n			if(rem){\n				/*\n				removes autoUpdate timer\n				usage: _autoUpdate.call(this,"remove");\n				*/\n				clearTimeout(mCSB_container[0].autoUpdate);\n				_delete(mCSB_container[0],"autoUpdate");\n				return;\n			}\n			var	wrapper=mCSB_container.parent(),\n				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],\n				scrollbarSize=function(){return [\n					scrollbar[0].is(":visible") ? scrollbar[0].outerHeight(true) : 0, /* returns y-scrollbar height */\n					scrollbar[1].is(":visible") ? scrollbar[1].outerWidth(true) : 0 /* returns x-scrollbar width */\n				]},\n				oldSelSize=sizesSum(),newSelSize,\n				os=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false),wrapper.height(),wrapper.width(),scrollbarSize()[0],scrollbarSize()[1]],ns,\n				oldImgsLen=imgSum(),newImgsLen;\n			upd();\n			function upd(){\n				clearTimeout(mCSB_container[0].autoUpdate);\n				mCSB_container[0].autoUpdate=setTimeout(function(){\n					/* update on specific selector(s) length and size change */\n					if(o.advanced.updateOnSelectorChange){\n						newSelSize=sizesSum();\n						if(newSelSize!==oldSelSize){\n							doUpd(3);\n							oldSelSize=newSelSize;\n							return;\n						}\n					}\n					/* update on main element and scrollbar size changes */\n					if(o.advanced.updateOnContentResize){\n						ns=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false),wrapper.height(),wrapper.width(),scrollbarSize()[0],scrollbarSize()[1]];\n						if(ns[0]!==os[0] || ns[1]!==os[1] || ns[2]!==os[2] || ns[3]!==os[3] || ns[4]!==os[4] || ns[5]!==os[5]){\n							doUpd(ns[0]!==os[0] || ns[1]!==os[1]);\n							os=ns;\n						}\n					}\n					/* update on image load */\n					if(o.advanced.updateOnImageLoad){\n						newImgsLen=imgSum();\n						if(newImgsLen!==oldImgsLen){\n							mCSB_container.find("img").each(function(){\n								imgLoader(this);\n							});\n							oldImgsLen=newImgsLen;\n						}\n					}\n					if(o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad){upd();}\n				},60);\n			}\n			/* returns images amount */\n			function imgSum(){\n				var total=0\n				if(o.advanced.updateOnImageLoad){total=mCSB_container.find("img").length;}\n				return total;\n			}\n			/* a tiny image loader */\n			function imgLoader(el){\n				if($(el).hasClass(classes[2])){doUpd(); return;}\n				var img=new Image();\n				function createDelegate(contextObject,delegateMethod){\n					return function(){return delegateMethod.apply(contextObject,arguments);}\n				}\n				function imgOnLoad(){\n					this.onload=null;\n					$(el).addClass(classes[2]);\n					doUpd(2);\n				}\n				img.onload=createDelegate(img,imgOnLoad);\n				img.src=el.src;\n			}\n			/* returns the total height and width sum of all elements matching the selector */\n			function sizesSum(){\n				if(o.advanced.updateOnSelectorChange===true){o.advanced.updateOnSelectorChange="*";}\n				var total=0,sel=mCSB_container.find(o.advanced.updateOnSelectorChange);\n				if(o.advanced.updateOnSelectorChange && sel.length>0){sel.each(function(){total+=$(this).height()+$(this).width();});}\n				return total;\n			}\n			/* calls the update method */\n			function doUpd(cb){\n				clearTimeout(mCSB_container[0].autoUpdate);\n				methods.update.call(null,$this[0],cb);\n			}\n		},\n		/* -------------------- */\n\n\n		/* snaps scrolling to a multiple of a pixels number */\n		_snapAmount=function(to,amount,offset){\n			return (Math.round(to/amount)*amount-offset);\n		},\n		/* -------------------- */\n\n\n		/* stops content and scrollbar animations */\n		_stop=function(el){\n			var d=el.data(pluginPfx),\n				sel=$("#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal");\n			sel.each(function(){\n				_stopTween.call(this);\n			});\n		},\n		/* -------------------- */\n\n\n		/*\n		ANIMATES CONTENT\n		This is where the actual scrolling happens\n		*/\n		_scrollTo=function(el,to,options){\n			var d=el.data(pluginPfx),o=d.opt,\n				defaults={\n					trigger:"internal",\n					dir:"y",\n					scrollEasing:"mcsEaseOut",\n					drag:false,\n					dur:o.scrollInertia,\n					overwrite:"all",\n					callbacks:true,\n					onStart:true,\n					onUpdate:true,\n					onComplete:true\n				},\n				options=$.extend(defaults,options),\n				dur=[options.dur,(options.drag ? 0 : options.dur)],\n				mCustomScrollBox=$("#mCSB_"+d.idx),\n				mCSB_container=$("#mCSB_"+d.idx+"_container"),\n				wrapper=mCSB_container.parent(),\n				totalScrollOffsets=o.callbacks.onTotalScrollOffset ? _arr.call(el,o.callbacks.onTotalScrollOffset) : [0,0],\n				totalScrollBackOffsets=o.callbacks.onTotalScrollBackOffset ? _arr.call(el,o.callbacks.onTotalScrollBackOffset) : [0,0];\n			d.trigger=options.trigger;\n			if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){ /* always reset scrollTop/Left */\n				$(".mCSB_"+d.idx+"_scrollbar").css("visibility","visible");\n				wrapper.scrollTop(0).scrollLeft(0);\n			}\n			if(to==="_resetY" && !d.contentReset.y){\n				/* callbacks: onOverflowYNone */\n				if(_cb("onOverflowYNone")){o.callbacks.onOverflowYNone.call(el[0]);}\n				d.contentReset.y=1;\n			}\n			if(to==="_resetX" && !d.contentReset.x){\n				/* callbacks: onOverflowXNone */\n				if(_cb("onOverflowXNone")){o.callbacks.onOverflowXNone.call(el[0]);}\n				d.contentReset.x=1;\n			}\n			if(to==="_resetY" || to==="_resetX"){return;}\n			if((d.contentReset.y || !el[0].mcs) && d.overflowed[0]){\n				/* callbacks: onOverflowY */\n				if(_cb("onOverflowY")){o.callbacks.onOverflowY.call(el[0]);}\n				d.contentReset.x=null;\n			}\n			if((d.contentReset.x || !el[0].mcs) && d.overflowed[1]){\n				/* callbacks: onOverflowX */\n				if(_cb("onOverflowX")){o.callbacks.onOverflowX.call(el[0]);}\n				d.contentReset.x=null;\n			}\n			if(o.snapAmount){to=_snapAmount(to,o.snapAmount,o.snapOffset);} /* scrolling snapping */\n			switch(options.dir){\n				case "x":\n					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_horizontal"),\n						property="left",\n						contentPos=mCSB_container[0].offsetLeft,\n						limit=[\n							mCustomScrollBox.width()-mCSB_container.outerWidth(false),\n							mCSB_dragger.parent().width()-mCSB_dragger.width()\n						],\n						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.x)],\n						tso=totalScrollOffsets[1],\n						tsbo=totalScrollBackOffsets[1],\n						totalScrollOffset=tso>0 ? tso/d.scrollRatio.x : 0,\n						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.x : 0;\n					break;\n				case "y":\n					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_vertical"),\n						property="top",\n						contentPos=mCSB_container[0].offsetTop,\n						limit=[\n							mCustomScrollBox.height()-mCSB_container.outerHeight(false),\n							mCSB_dragger.parent().height()-mCSB_dragger.height()\n						],\n						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.y)],\n						tso=totalScrollOffsets[0],\n						tsbo=totalScrollBackOffsets[0],\n						totalScrollOffset=tso>0 ? tso/d.scrollRatio.y : 0,\n						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.y : 0;\n					break;\n			}\n			if(scrollTo[1]<0 || (scrollTo[0]===0 && scrollTo[1]===0)){\n				scrollTo=[0,0];\n			}else if(scrollTo[1]>=limit[1]){\n				scrollTo=[limit[0],limit[1]];\n			}else{\n				scrollTo[0]=-scrollTo[0];\n			}\n			if(!el[0].mcs){\n				_mcs();  /* init mcs object (once) to make it available before callbacks */\n				if(_cb("onInit")){o.callbacks.onInit.call(el[0]);} /* callbacks: onInit */\n			}\n			clearTimeout(mCSB_container[0].onCompleteTimeout);\n			if(!d.tweenRunning && ((contentPos===0 && scrollTo[0]>=0) || (contentPos===limit[0] && scrollTo[0]<=limit[0]))){return;}\n			_tweenTo(mCSB_dragger[0],property,Math.round(scrollTo[1]),dur[1],options.scrollEasing);\n			_tweenTo(mCSB_container[0],property,Math.round(scrollTo[0]),dur[0],options.scrollEasing,options.overwrite,{\n				onStart:function(){\n					if(options.callbacks && options.onStart && !d.tweenRunning){\n						/* callbacks: onScrollStart */\n						if(_cb("onScrollStart")){_mcs(); o.callbacks.onScrollStart.call(el[0]);}\n						d.tweenRunning=true;\n						_onDragClasses(mCSB_dragger);\n						d.cbOffsets=_cbOffsets();\n					}\n				},onUpdate:function(){\n					if(options.callbacks && options.onUpdate){\n						/* callbacks: whileScrolling */\n						if(_cb("whileScrolling")){_mcs(); o.callbacks.whileScrolling.call(el[0]);}\n					}\n				},onComplete:function(){\n					if(options.callbacks && options.onComplete){\n						if(o.axis==="yx"){clearTimeout(mCSB_container[0].onCompleteTimeout);}\n						var t=mCSB_container[0].idleTimer || 0;\n						mCSB_container[0].onCompleteTimeout=setTimeout(function(){\n							/* callbacks: onScroll, onTotalScroll, onTotalScrollBack */\n							if(_cb("onScroll")){_mcs(); o.callbacks.onScroll.call(el[0]);}\n							if(_cb("onTotalScroll") && scrollTo[1]>=limit[1]-totalScrollOffset && d.cbOffsets[0]){_mcs(); o.callbacks.onTotalScroll.call(el[0]);}\n							if(_cb("onTotalScrollBack") && scrollTo[1]<=totalScrollBackOffset && d.cbOffsets[1]){_mcs(); o.callbacks.onTotalScrollBack.call(el[0]);}\n							d.tweenRunning=false;\n							mCSB_container[0].idleTimer=0;\n							_onDragClasses(mCSB_dragger,"hide");\n						},t);\n					}\n				}\n			});\n			/* checks if callback function exists */\n			function _cb(cb){\n				return d && o.callbacks[cb] && typeof o.callbacks[cb]==="function";\n			}\n			/* checks whether callback offsets always trigger */\n			function _cbOffsets(){\n				return [o.callbacks.alwaysTriggerOffsets || contentPos>=limit[0]+tso,o.callbacks.alwaysTriggerOffsets || contentPos<=-tsbo];\n			}\n			/*\n			populates object with useful values for the user\n			values:\n				content: this.mcs.content\n				content top position: this.mcs.top\n				content left position: this.mcs.left\n				dragger top position: this.mcs.draggerTop\n				dragger left position: this.mcs.draggerLeft\n				scrolling y percentage: this.mcs.topPct\n				scrolling x percentage: this.mcs.leftPct\n				scrolling direction: this.mcs.direction\n			*/\n			function _mcs(){\n				var cp=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft], /* content position */\n					dp=[mCSB_dragger[0].offsetTop,mCSB_dragger[0].offsetLeft], /* dragger position */\n					cl=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false)], /* content length */\n					pl=[mCustomScrollBox.height(),mCustomScrollBox.width()]; /* content parent length */\n				el[0].mcs={\n					content:mCSB_container, /* original content wrapper as jquery object */\n					top:cp[0],left:cp[1],draggerTop:dp[0],draggerLeft:dp[1],\n					topPct:Math.round((100*Math.abs(cp[0]))/(Math.abs(cl[0])-pl[0])),leftPct:Math.round((100*Math.abs(cp[1]))/(Math.abs(cl[1])-pl[1])),\n					direction:options.dir\n				};\n				/*\n				this refers to the original element containing the scrollbar(s)\n				usage: this.mcs.top, this.mcs.leftPct etc.\n				*/\n			}\n		},\n		/* -------------------- */\n\n\n		/*\n		CUSTOM JAVASCRIPT ANIMATION TWEEN\n		Lighter and faster than jquery animate() and css transitions\n		Animates top/left properties and includes easings\n		*/\n		_tweenTo=function(el,prop,to,duration,easing,overwrite,callbacks){\n			if(!el._mTween){el._mTween={top:{},left:{}};}\n			var callbacks=callbacks || {},\n				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){},\n				startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style,_request,tobj=el._mTween[prop];\n			if(prop==="left"){from=el.offsetLeft;}\n			var diff=to-from;\n			tobj.stop=0;\n			if(overwrite!=="none"){_cancelTween();}\n			_startTween();\n			function _step(){\n				if(tobj.stop){return;}\n				if(!progress){onStart.call();}\n				progress=_getTime()-startTime;\n				_tween();\n				if(progress>=tobj.time){\n					tobj.time=(progress>tobj.time) ? progress+_delay-(progress-tobj.time) : progress+_delay-1;\n					if(tobj.time<progress+1){tobj.time=progress+1;}\n				}\n				if(tobj.time<duration){tobj.id=_request(_step);}else{onComplete.call();}\n			}\n			function _tween(){\n				if(duration>0){\n					tobj.currVal=_ease(tobj.time,from,diff,duration,easing);\n					elStyle[prop]=Math.round(tobj.currVal)+"px";\n				}else{\n					elStyle[prop]=to+"px";\n				}\n				onUpdate.call();\n			}\n			function _startTween(){\n				_delay=1000/60;\n				tobj.time=progress+_delay;\n				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;\n				tobj.id=_request(_step);\n			}\n			function _cancelTween(){\n				if(tobj.id==null){return;}\n				if(!window.requestAnimationFrame){clearTimeout(tobj.id);\n				}else{window.cancelAnimationFrame(tobj.id);}\n				tobj.id=null;\n			}\n			function _ease(t,b,c,d,type){\n				switch(type){\n					case "linear": case "mcsLinear":\n						return c*t/d + b;\n						break;\n					case "mcsLinearOut":\n						t/=d; t--; return c * Math.sqrt(1 - t*t) + b;\n						break;\n					case "easeInOutSmooth":\n						t/=d/2;\n						if(t<1) return c/2*t*t + b;\n						t--;\n						return -c/2 * (t*(t-2) - 1) + b;\n						break;\n					case "easeInOutStrong":\n						t/=d/2;\n						if(t<1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;\n						t--;\n						return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;\n						break;\n					case "easeInOut": case "mcsEaseInOut":\n						t/=d/2;\n						if(t<1) return c/2*t*t*t + b;\n						t-=2;\n						return c/2*(t*t*t + 2) + b;\n						break;\n					case "easeOutSmooth":\n						t/=d; t--;\n						return -c * (t*t*t*t - 1) + b;\n						break;\n					case "easeOutStrong":\n						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;\n						break;\n					case "easeOut": case "mcsEaseOut": default:\n						var ts=(t/=d)*t,tc=ts*t;\n						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);\n				}\n			}\n		},\n		/* -------------------- */\n\n\n		/* returns current time */\n		_getTime=function(){\n			if(window.performance && window.performance.now){\n				return window.performance.now();\n			}else{\n				if(window.performance && window.performance.webkitNow){\n					return window.performance.webkitNow();\n				}else{\n					if(Date.now){return Date.now();}else{return new Date().getTime();}\n				}\n			}\n		},\n		/* -------------------- */\n\n\n		/* stops a tween */\n		_stopTween=function(){\n			var el=this;\n			if(!el._mTween){el._mTween={top:{},left:{}};}\n			var props=["top","left"];\n			for(var i=0; i<props.length; i++){\n				var prop=props[i];\n				if(el._mTween[prop].id){\n					if(!window.requestAnimationFrame){clearTimeout(el._mTween[prop].id);\n					}else{window.cancelAnimationFrame(el._mTween[prop].id);}\n					el._mTween[prop].id=null;\n					el._mTween[prop].stop=1;\n				}\n			}\n		},\n		/* -------------------- */\n\n\n		/* deletes a property (avoiding the exception thrown by IE) */\n		_delete=function(c,m){\n			try{delete c[m];}catch(e){c[m]=null;}\n		},\n		/* -------------------- */\n\n\n		/* detects left mouse button */\n		_mouseBtnLeft=function(e){\n			return !(e.which && e.which!==1);\n		},\n		/* -------------------- */\n\n\n		/* detects if pointer type event is touch */\n		_pointerTouch=function(e){\n			var t=e.originalEvent.pointerType;\n			return !(t && t!=="touch" && t!==2);\n		},\n		/* -------------------- */\n\n\n		/* checks if value is numeric */\n		_isNumeric=function(val){\n			return !isNaN(parseFloat(val)) && isFinite(val);\n		},\n		/* -------------------- */\n\n\n		/* returns element position according to content */\n		_childPos=function(el){\n			var p=el.parents(".mCSB_container");\n			return [el.offset().top-p.offset().top,el.offset().left-p.offset().left];\n		};\n		/* -------------------- */\n\n\n\n\n\n	/*\n	----------------------------------------\n	PLUGIN SETUP\n	----------------------------------------\n	*/\n\n	/* plugin constructor functions */\n	$.fn[pluginNS]=function(method){ /* usage: $(selector).mCustomScrollbar(); */\n		if(methods[method]){\n			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));\n		}else if(typeof method==="object" || !method){\n			return methods.init.apply(this,arguments);\n		}else{\n			$.error("Method "+method+" does not exist");\n		}\n	};\n	$[pluginNS]=function(method){ /* usage: $.mCustomScrollbar(); */\n		if(methods[method]){\n			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));\n		}else if(typeof method==="object" || !method){\n			return methods.init.apply(this,arguments);\n		}else{\n			$.error("Method "+method+" does not exist");\n		}\n	};\n\n	/*\n	allow setting plugin default options.\n	usage: $.mCustomScrollbar.defaults.scrollInertia=500;\n	to apply any changed default options on default selectors (below), use inside document ready fn\n	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });\n	*/\n	$[pluginNS].defaults=defaults;\n\n	/*\n	add window object (window.mCustomScrollbar)\n	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}\n	*/\n	window[pluginNS]=true;\n\n	$(window).load(function(){\n\n		$(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */\n\n		/* extend jQuery expressions */\n		$.extend($.expr[":"],{\n			/* checks if element is within scrollable viewport */\n			mcsInView:$.expr[":"].mcsInView || function(el){\n				var $el=$(el),content=$el.parents(".mCSB_container"),wrapper,cPos;\n				if(!content.length){return;}\n				wrapper=content.parent();\n				cPos=[content[0].offsetTop,content[0].offsetLeft];\n				return 	cPos[0]+_childPos($el)[0]>=0 && cPos[0]+_childPos($el)[0]<wrapper.height()-$el.outerHeight(false) &&\n						cPos[1]+_childPos($el)[1]>=0 && cPos[1]+_childPos($el)[1]<wrapper.width()-$el.outerWidth(false);\n			},\n			/* checks if element is overflowed having visible scrollbar(s) */\n			mcsOverflow:$.expr[":"].mcsOverflow || function(el){\n				var d=$(el).data(pluginPfx);\n				if(!d){return;}\n				return d.overflowed[0] || d.overflowed[1];\n			}\n		});\n\n	});\n\n}))}));';
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(14);
        e.exports = function() {
            function e() {
                $(".hybrid-router").length > 0 && (m = $(".hybrid-router-tile"), b = i.current(), r(), t(), m.on("click", c), window.navigator.userAgent.match(/Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i) || (m.on("mouseenter", d), m.on("mouseleave", u)), $(window).on("hpe.breakpointchange", s), $(window).on("resize", l), $(window).on("hpe.breakpointchange", l), setTimeout(function() {
                    w.find(".hybrid-router-tile-copy").matchHeight()
                },
                100))
            }
            function t() {
                $(".hybrid-router").each(function() {
                    o($(this))
                })
            }
            function o(e) {
                var n;
                5 === e.find(".hybrid-router-tile").length && (f = e.find(".hybrid-router-tile:eq(0)"), h = f.find(".hybrid-router-tile-content"), p = e.find(".hybrid-router-tile:eq(1)"), g = p.find(".hybrid-router-tile-content"), n = setInterval(function() {
                    p.find("img").hasClass("lazyloaded") && (clearInterval(n), a(), y = !0)
                },
                100))
            }
            function a() {
                var e = g.outerHeight();
                "undefined" != typeof e && e !== v && ("xs" !== i.current() || "sm" !== i.current() ? (h.css("height", e + "px"), v = e) : (h.css("height", ""), v = void 0)),
                ("xs" === i.current() || "sm" === i.current()) && $(".hybrid-router-hero-group .hybrid-router-tile-content").css("height", ""),
                r()
            }
            function r() {
                n.each($(".hybrid-router"),
                function(e) {
                    var n, t = $(e).find(".hybrid-router-tile");
                    5 === t.length && (n = t.filter(":first").find(".img-container"), n.length > 0 && ("xs" === i.current() || "sm" === i.current() ? n.css("width", "") : n.css("width", n.height() + "px")))
                })
            }
            function s() { ("xs" === b || "sm" === b) && (t(), b = void 0),
                $(window).off("hpe.breakpointchange", s)
            }
            function l() {
                y && a()
            }
            function c(e) {
                var n = $(this);
                n.closest(".hybrid-router").hasClass("hybrid-router-edit") ? e.preventDefault() : n.find("a")[0].click()
            }
            function d() {
                var e = $(this);
                e.closest(".hybrid-router").find(".hybrid-router-tile").removeClass("hovered").addClass("unhovered"),
                e.removeClass("unhovered").addClass("hovered")
            }
            function u() {
                $(this).closest(".hybrid-router").find(".hybrid-router-tile").removeClass("hovered unhovered")
            }
            var m, f, h, p, g, v, b, y = !1,
            w = $(".hybrid-router");
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e() {
                return b.length > 0 ? void i() : !1
            }
            function i() {
                c.log.log("TechSpecs: Init"),
                $(window).on("hpe.breakpointinit", o),
                $(window).on("hpe.breakpointchange", o)
            }
            function o() {
                u = d.current(),
                n.each(h,
                function(e) {
                    "undefined" !== e.mCustomScrollbar && e.mCustomScrollbar("destroy")
                }),
                a(),
                l(),
                ("xs" === u || "sm" === u) && $.each(p,
                function(e) {
                    m = $(this).find(".specs-item"),
                    m.length > 5 ? (r(p, e), s(p, e)) : s(p, e)
                })
            }
            function a() {
                b.each(function(e) {
                    p[e] = $(this)
                })
            }
            function r(e, n) {
                g === !1 && (f = e[n].find(".specs-item-wrapper"), f.find(".specs-item").eq(4).css({
                    clear: "both"
                }), g = !0)
            }
            function s(e, n) {
                h[n] = e[n].find(".specs-columns").mCustomScrollbar({
                    axis: "x",
                    mouseWheel: {
                        enable: !1
                    },
                    advanced: {
                        autoExpandHorizontalScroll: !0
                    }
                })
            }
            function l() {
                v === !1 && ($.each(b,
                function() {
                    $(this).find(".specs-item").matchHeight()
                }), v = !0)
            }
            var c = t(1),
            d = t(14),
            u = d.current();
            t(29),
            t(31);
            var m, f, h = [],
            p = {},
            g = !1,
            v = !1,
            b = $(".hpe-tech-specs");
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n, i) {
        "use strict";
        e.exports = function() {
            function e() {
                return c.length > 0 ? (l.log.info("Resources: Full-size init"), void o()) : !1
            }
            function o() {
                var e = 0;
                m = 2,
                h || a(),
                n.each(c,
                function(e, n) {
                    var t = $(e);
                    t.data("showed", m),
                    f[n] = t.find(".item")
                }),
                n.each(f,
                function(e) {
                    $(e).matchHeight()
                }),
                r(),
                n.each(f,
                function(t) {
                    n.each(t,
                    function(n) {
                        $(n).delay(e++*u).queue(function(e) {
                            var n = $(this);
                            i.cssanimations ? n.addClass(p) : n.show(),
                            e()
                        })
                    })
                })
            }
            function a() {
                c.find(".item-cta, .item-anchor").on("mouseover focus",
                function() {
                    $(this).closest(".resources-xs").removeClass(g).siblings(".resources-xs").addClass(g)
                }).on("mouseout blur",
                function() {
                    d.removeClass(g)
                })
            }
            function r() {
                c.find(".load-more").on("click",
                function(e) {
                    e.preventDefault(),
                    l.services.publish(l.constants.RESOURCES_LOAD_MORE, {
                        btnMore: this
                    })
                }),
                l.services.subscribe(l.constants.RESOURCES_LOAD_MORE, this, s),
                $(window).on("hpe.breakpointchange",
                function(e, t) {
                    "xs" === t || "sm" === t ? n.each(f,
                    function(e) {
                        var n = $(e.context),
                        t = n.find(".resources-xs"),
                        i = n.find(".load-more");
                        n.data("showed", m),
                        t.hide(),
                        t.eq(0).show(),
                        t.eq(1).show(),
                        m >= e.length ? i.hide() : i.show()
                    }) : n.each(f,
                    function(e) {
                        var n = $(e.context),
                        t = n.find(".resources-xs"),
                        i = n.find(".load-more");
                        t.show(),
                        i.hide()
                    })
                })
            }
            function s(e) {
                var t = $(e.btnMore).closest(".hpe-resources"),
                i = t.find(".item"),
                o = $(e.btnMore);
                t.data("showed", t.data("showed") + 2);
                var a = n.initial(i, i.length - t.data("showed"));
                n.each(a,
                function(e) {
                    $(e).parent().show()
                }),
                a.length >= i.length && o.hide()
            }
            var l = t(1),
            c = $(".hpe-resources.resources-full"),
            d = c.find(".resources-xs"),
            u = 100,
            m = 2,
            f = [],
            h = $(".author-edit-btn").length > 0,
            p = "animated fadeInLeft",
            g = "no-focus";
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10), t(21))
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(37),
        o = t(14);
        e.exports = function() {
            function e() {
                f.length > 0 && n.each(f,
                function(e) {
                    $(e).find('a[data-toggle="tab"]').on("shown.bs.tab",
                    function(n) {
                        a(e, n.currentTarget.hash),
                        d()
                    }),
                    $(window).on("hpe.breakpointinit",
                    function() {
                        var n = window.CQ ? 800 : 0;
                        "xs" !== o.current() && $(e).find(".tab-pane").not(":first").removeClass("active"),
                        t(e),
                        l(e),
                        setTimeout(function() {
                            a(e)
                        },
                        n),
                        setInterval(function() {
                            a(e)
                        },
                        1e3),
                        h = !0
                    }),
                    $(window).on("resize",
                    function() {
                        clearTimeout(u),
                        u = setTimeout(s, 250)
                    }),
                    $(document).on("lazybeforeunveil",
                    function(e) {
                        a($(e.target).closest(".tab-pane.active"))
                    }),
                    $(window).on("hpe.breakpointchange",
                    function() {
                        r(e)
                    }),
                    $(window).on("hpe.snapnavChange",
                    function(e, n, t) {
                        e.preventDefault(),
                        d(),
                        a(n, t)
                    })
                })
            }
            function t(e) {
                var n = $(e).find(".chaptered-story-nav"),
                t = n.find("li"),
                a = h ? n.find("li.active").index() : 0;
                "xs" === o.current() ? i.initialize({
                    element: $(e),
                    navWrapperSelector: ".chaptered-story-nav-wrapper",
                    navSelector: ".chaptered-story-nav",
                    activeIndex: a
                }) : (i.destroy(), $(t[a]).addClass("active")),
                n.addClass("tab-count-" + t.length)
            }
            function a(e, n) {
                var t = $(e).find(".chaptered-story-content"),
                i = n ? t.find(n).height() : t.find(".active").height();
                t.data("height") !== i && (t.data("height", i), t.height(i))
            }
            function r(e) { (m && "xs" !== o.current() || !m && "xs" === o.current()) && c(e),
                m = "xs" === o.current() ? !0 : !1,
                "xs" === o.current() && a(e)
            }
            function s() {
                n.each(f,
                function(e) {
                    var n;
                    l(e),
                    n = $(e).find(".chaptered-story-nav li.active a").attr("href"),
                    a(e, n)
                })
            }
            function l(e) {
                var n = $(e),
                t = n.find(".chaptered-story-nav-wrapper"),
                i = n.find(".chaptered-story-nav");
                i.removeClass("extended"),
                "xs" !== o.current() && i.width() >= t.width() && i.addClass("extended"),
                setTimeout(function() {
                    i.find("a").matchHeight()
                },
                50)
            }
            function c(e) {
                t(e),
                l(e)
            }
            function d() {
                var e = f.find(".router-text-grid");
                e.length > 0 && n.each(e,
                function(e) {
                    $(e).masonry("layout")
                })
            }
            var u, m, f = $(".chaptered-story"),
            h = !1;
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n) {
    "use strict";
    e.exports = function() {
        function e(e) {
            e = e || {},
            b = e.element,
            k = e.navWrapperSelector || k,
            P = e.navSelector || P,
            e.activeIndex = e.activeIndex || 0,
            y = b.find(P),
            w = y.find("li"),
            n(),
            i(e.activeIndex),
            o()
        }
        function n() {
            var e = b.find(k).width(),
            n = e * C + "px";
            x = _ * e,
            T = .55 * parseInt(n),
            w.css({
                width: n
            }),
            y.css({
                "margin-left": x,
                "margin-right": x
            })
        }
        function t() {
            var e = "number" == typeof S ? Math.round(S) : 0,
            n = b.find(k).width(),
            t = (_ - (e * _ + e * (C - _))) * n - x;
            y.css("left", t + "px")
        }
        function i(e) {
            var n;
            e = "number" == typeof e ? Math.round(e) : 0,
            y.find("li.active").removeClass("active"),
            w.eq(e).addClass("active"),
            b.find(".content.active").removeClass("active"),
            n = b.find(".content").eq(e),
            n.addClass("in active"),
            $(window).trigger("hpe.snapnavChange", [n.closest(".chaptered-story"), "#" + n.attr("id")]),
            S = e,
            t()
        }
        function o() {
            $(document).on("mousedown touchstart", k, h),
            $(document).on("mouseup touchend", P + " a", p),
            $(window).on("resize", g)
        }
        function a() {
            $(document).off("mousedown touchstart", k, h),
            $(document).off("mouseup touchend", P + " a", p),
            $(window).off("resize", g)
        }
        function r(e) {
            I = e.pageX,
            $(document).on("mousemove", s),
            $(document).on("mouseup", l)
        }
        function s(e) {
            var n = 0;
            n = e.pageX - I,
            Math.abs(n) > T && m(n)
        }
        function l() {
            $(document).off("mousemove", s),
            $(document).off("mouseup", l),
            I = 0,
            E = !1
        }
        function c(e) {
            I = e.originalEvent.touches[0].pageX,
            $(document).on("touchmove", d),
            $(document).on("touchend", u)
        }
        function d(e) {
            var n = 0;
            n = e.originalEvent.touches[0].pageX - I,
            Math.abs(n) > T && m(n)
        }
        function u() {
            $(document).off("touchmove", d),
            $(document).off("touchEnd", u),
            I = 0,
            E = !1
        }
        function m(e) {
            E || (E = !0, e > 0 && S > 0 ? (S -= 1, t()) : 0 > e && S < w.length - 1 && (S += 1, t()))
        }
        function f() {
            "undefined" != typeof y && (setTimeout(function() {
                y.css({
                    "margin-left": "",
                    "margin-right": "",
                    left: ""
                }),
                w.css({
                    width: ""
                })
            },
            300), a())
        }
        function h(e) {
            "mousedown" === e.type ? r(e) : "touchstart" === e.type && c(e)
        }
        function p(e) {
            var n;
            E || (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), l(), n = $(e.target).closest("li").index(), i(n))
        }
        function g() {
            clearTimeout(v),
            v = setTimeout(function() {
                n(),
                t()
            },
            200)
        }
        var v, b, y, w, C = .4,
        _ = (1 - C) / 2,
        x = 0,
        S = 0,
        E = !1,
        I = 0,
        T = 0,
        k = "#wrap",
        P = "#nav";
        return {
            initialize: e,
            destroy: f
        }
    } ()
},
function(e, n, t) { (function(n, i) {
        "use strict";
        t(39),
        e.exports = function() {
            function e() {
                return $(r).length > 0 ? (a.log.info("Component router text init"), void o()) : !1
            }
            function o() {
                d = $(r).find(".item");
                var e = 0,
                t = $(r).find(".color-mode").length > 0;
                $(r).css("padding-top", $(r).data("padding-top")),
                $(r).css("padding-bottom", $(r).data("padding-bot")),
                s.masonry({
                    itemSelector: ".hpe-component-router-text .item-tile",
                    gutter: 10,
                    columnWidth: 250,
                    isFitWidth: !0
                });
                var o = 0;
                s.masonry("on", "layoutComplete",
                function() {
                    setTimeout(function() {
                        $.fn.matchHeight._update(),
                        2 > o && (s.masonry("layout"), o++)
                    },
                    500)
                }),
                setTimeout(function() {
                    $(r).find(".item").matchHeight(),
                    $.fn.matchHeight._maintainScroll = !0,
                    s.masonry("layout")
                },
                500),
                $(window).on("resize",
                function() {
                    setTimeout(function() {
                        $.fn.matchHeight._update(),
                        o = 0,
                        s.masonry("layout")
                    },
                    1e3)
                }),
                n.each(d,
                function(n) {
                    t && ($(n).on("mouseover",
                    function() {
                        $(this).parent().siblings().addClass(u),
                        $(this).parent().removeClass(u)
                    }), $(n).on("mouseout",
                    function() {
                        $(this).parent().siblings().removeClass(u)
                    })),
                    $(n).delay(e++*c).queue(function(e) {
                        var n = $(this),
                        t = $(this).find("img"),
                        o = $(this).find("img").length > 0;
                        i.cssanimations ? n.addClass(l) : n.show(),
                        o && (n.on("mouseover",
                        function() {
                            var e = t.attr("src");
                            t.attr("src", $(this).find("img").data("hover")),
                            t.data("hover", e)
                        }), n.on("mouseout",
                        function() {
                            var e = t.attr("src");
                            t.attr("src", $(this).find("img").data("hover")),
                            t.data("hover", e)
                        })),
                        n.on("click",
                        function(e) {
                            e.preventDefault(),
                            window.location = $(this).find(".item-title").find(".text-hide").attr("href")
                        }),
                        n.find(".item-cta").on("focus",
                        function() {
                            $(".item-tile").addClass(u),
                            n.trigger("mouseover"),
                            n.addClass("hovered"),
                            $(this).parent().parent().removeClass(u)
                        }),
                        n.find(".item-cta").on("blur",
                        function() {
                            $(".item-tile").removeClass(u),
                            n.trigger("mouseout"),
                            n.removeClass("hovered")
                        }),
                        e()
                    })
                })
            }
            var a = t(1),
            r = ".hpe-component-router-text",
            s = $(r).find(".router-text-grid"),
            l = "animated fadeInLeft",
            c = 100,
            d = "",
            u = "no-focus";
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10), t(21))
},
function(e, n, t) {
    t(7)(t(40))
},
function(e, n) {
    e.exports = '/*!\n * Masonry PACKAGED v3.1.3\n * Cascading grid layout library\n * http://masonry.desandro.com\n * MIT License\n * by David DeSandro\n */\n\n(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],u=t.data(p,e);if(u)if(t.isFunction(u[o])&&"_"!==o.charAt(0)){var f=u[o].apply(u,s);if(void 0!==f)return f}else r("no such method \'"+o+"\' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call \'"+o+"\'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){var e=document.documentElement,i=function(){};e.addEventListener?i=function(t,e,i){t.addEventListener(e,i,!1)}:e.attachEvent&&(i=function(e,i,n){e[i+n]=n.handleEvent?function(){var e=t.event;e.target=e.target||e.srcElement,n.handleEvent.call(n,e)}:function(){var i=t.event;i.target=i.target||i.srcElement,n.call(e,i)},e.attachEvent("on"+i,e[i+n])});var n=function(){};e.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:e.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var o={bind:i,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",o):t.eventie=o}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype;n.getListeners=function(t){var e,i,n=this._getEvents();if("object"==typeof t){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if("object"===i)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=a.length;i>e;e++){var n=a[e];t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=s(t);if("none"===n.display)return i();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var u=r.isBorderBox=!(!p||!n[p]||"border-box"!==n[p]),f=0,d=a.length;d>f;f++){var l=a[f],c=n[l];c=o(t,c);var m=parseFloat(c);r[l]=isNaN(m)?0:m}var y=r.paddingLeft+r.paddingRight,g=r.paddingTop+r.paddingBottom,v=r.marginLeft+r.marginRight,_=r.marginTop+r.marginBottom,b=r.borderLeftWidth+r.borderRightWidth,E=r.borderTopWidth+r.borderBottomWidth,L=u&&h,z=e(n.width);z!==!1&&(r.width=z+(L?0:y+b));var S=e(n.height);return S!==!1&&(r.height=S+(L?0:g+E)),r.innerWidth=r.width-(y+b),r.innerHeight=r.height-(g+E),r.outerWidth=r.width+v,r.outerHeight=r.height+_,r}}function o(t,e){if(r||-1===e.indexOf("%"))return e;var i=t.style,n=i.left,o=t.runtimeStyle,s=o&&o.left;return s&&(o.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(o.left=s),e}var h,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=s(t);h=200===e(n.width),i.removeChild(t)}}(),n}var o=document.defaultView,r=o&&o.getComputedStyle,s=r?function(t){return o.getComputedStyle(t,null)}:function(t){return t.currentStyle},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):t.getSize=n(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=r("transition"),p=r("transform"),u=h&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[h],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var n=l[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transition={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=c[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,h=e-n,p={},u=this.layout.options;a=u.isOriginLeft?a:-a,h=u.isOriginTop?h:-h,p.transform=m(a,h),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transition;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var y=p&&n(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:y,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[h?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transition,n=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!h||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,m){function y(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return h&&h.error("Bad "+this.settings.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.options),this.option(i);var n=++v;this.element.outlayerGUID=n,_[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function g(t,i){t.prototype[i]=e({},y.prototype[i])}var v=0,_={};return y.prototype.settings={namespace:"outlayer",item:m},y.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(y.prototype,f.prototype),y.prototype.option=function(t){e(this.options,t)},y.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},y.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.settings.item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},y.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)i.push(a[h])}else i.push(s)}return i},y.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},y.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},y.prototype._init=y.prototype.layout,y.prototype._resetLayout=function(){this.getSize()},y.prototype.getSize=function(){this.size=l(this.element)},y.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):d(n)&&(i=n),this[t]=i?l(i)[e]:n):this[t]=0},y.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},y.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},y.prototype._layoutItems=function(t,e){if(!t||!t.length)return this.emitEvent("layoutComplete",[this,t]),void 0;this._itemsOn(t,"layout",function(){this.emitEvent("layoutComplete",[this,t])});for(var i=[],n=0,o=t.length;o>n;n++){var r=t[n],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e,i.push(s)}this._processLayoutQueue(i)},y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},y.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},y.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},y.prototype._postLayout=function(){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},y.prototype._getContainerSize=u,y.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},y.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},y.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},y.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},y.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},y.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},y.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},y.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},y.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},y.prototype._manageStamp=u,y.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=l(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},y.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},y.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},y.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},y.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},y.prototype.resize=function(){var t=l(this.element),e=this.size&&t;e&&t.innerWidth===this.size.innerWidth||this.layout()},y.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},y.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},y.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},y.prototype.reveal=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.reveal()}},y.prototype.hide=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.hide()}},y.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},y.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},y.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},y.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.settings.namespace)},y.data=function(t){var e=t&&t.outlayerGUID;return e&&_[e]},y.create=function(t,i){function n(){y.apply(this,arguments)}return e(n.prototype,y.prototype),g(n,"options"),g(n,"settings"),e(n.prototype.options,i),n.prototype.settings.namespace=t,n.data=y.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,n.prototype.settings.item=n.Item,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,u=i.length;u>s;s++){var f,d=i[s],l=d.getAttribute(o);try{f=l&&JSON.parse(l)}catch(c){h&&h.error("Error parsing "+o+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var m=new n(d,f);p&&p.data(d,t,m)}}),p&&p.bridget&&p.bridget(t,n),n},y.Item=m,y}var a=t.document,h=t.console,p=t.jQuery,u=function(){},f=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i(r,s),h={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,u=this.cols+1-r.length,f=0;u>f;f++)this.colYs[a+f]=p;return h},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a=Math.min(this.cols-1,a);for(var h=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(h,this.colYs[p])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.resize=function(){var t=this.containerWidth;this.getContainerWidth(),t!==this.containerWidth&&this.layout()},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i];if(o===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window);';
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e() {
                return c.length > 0 ? void i() : !1
            }
            function i() {
                a.log.info("Resources Smallsize init"),
                o(c.find(".item-cta, .item-anchor"), r),
                n.each(l,
                function(e) {
                    $(e).find(r).matchHeight()
                })
            }
            function o(e, t) {
                n.each(e,
                function(e) {
                    $(e).on("mouseover focus",
                    function() {
                        $(this).closest(t).removeClass(s).siblings(t).addClass(s)
                    }).on("mouseout blur",
                    function() {
                        c.removeClass(s)
                    })
                })
            }
            var a = t(1),
            r = ".hpe-resources-small",
            s = "no-focus",
            l = $(".hpe-resources-small-wrapper"),
            c = $(r);
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e() {
                return p.length > 0 ? void i() : !1
            }
            function i() {
                h.log.info("Services Portfolio init"),
                c(),
                a(),
                n.each(g,
                function(e) {
                    var n = $(e);
                    n.not("." + C).find(".collapse").collapse("hide"),
                    n.not("." + C).find(I).addClass(S),
                    n.hasClass(C) && d(n, "show")
                }),
                s(p),
                o(),
                r()
            }
            function o() {
                g.find(".accordion-toggle").removeAttr("role").removeAttr("aria-selected")
            }
            function a() {
                window.addEventListener ? window.addEventListener("hashchange", l, !1) : window.attachEvent && window.attachEvent("hashchange", l),
                g.on("show.bs.collapse hide.bs.collapse",
                function(e) {
                    var n = $(this),
                    t = n.closest("." + b);
                    "show" === e.type && (n.addClass(C), s(t), d(n, e.type)),
                    "hide" === e.type && (n.hasClass(C) && n.removeClass(C), s(t), d(n, e.type))
                }),
                g.find(".accordion-panel-header .active-area").on("mouseover mouseout focus blur",
                function(e) {
                    var n = $(this).closest(".accordion-panel"); ("mouseover" === e.type || "focus" === e.type) && n.addClass(_).siblings(".accordion-panel").addClass(x),
                    ("mouseout" === e.type || "blur" === e.type) && g.removeClass(x).removeClass(_)
                })
            }
            function r() {
                var e = p.find(".router-text-grid");
                e.length > 0 && n.each(e,
                function() {
                    g.on("shown.bs.collapse",
                    function(e) {
                        var n = $(e.currentTarget).find(".router-text-grid");
                        "shown" === e.type && (n.masonry("layout"), n.css("visibility", "visible"))
                    })
                })
            }
            function s(e) {
                n.each(e,
                function(e) {
                    var n = $(e);
                    0 !== n.find("." + C).length ? n.addClass(y).removeClass(w) : n.removeClass(y).addClass(w)
                })
            }
            function l() {
                f = window.location.hash,
                f.search(v) > 0 && ($(f).collapse("show"), n.delay(function() {
                    window.location.hash = f.replace(v, "header-")
                },
                200))
            }
            function c() {
                "" !== window.location.hash && (f = window.location.hash, window.location.hash.search(v) > 0 && (m = $(f), m.closest(".accordion-panel").addClass(C), window.location.hash = f.replace(v, "header-")))
            }
            function d(e, n) {
                var t = e.find(I),
                i = e.find(T);
                "show" === n ? (t.removeClass(S).addClass(E), i.removeClass(E).addClass(S)) : "hide" === n && (t.removeClass(E).addClass(S), i.removeClass(S)),
                u(e, n)
            }
            function u(e, n) {
                var t = e.find(".panel-collapse");
                t.length > 0 && ("show" === n ? t.attr("tabIndex", "") : "hide" === n && t.attr("tabIndex", "-1"))
            }
            var m, f, h = t(1),
            p = $(".hpe-accordion"),
            g = $(".accordion-panel"),
            v = "accordion-",
            b = "hpe-accordion",
            y = "accordion-expanded",
            w = "accordion-collapsed",
            C = "aem-expanded",
            _ = "focus",
            x = "no-focus",
            S = "hide",
            E = "show",
            I = ".accordion-panel-header .icon-toggle-circle-close",
            T = ".accordion-panel-header .icon-toggle-circle-open";
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n) {
    "use strict";
    e.exports = function() {
        function e() {
            $(".connect-component").length > 0 && $(".connect-component .btn").on("click",
            function(e) {
                e.preventDefault(),
                n()
            })
        }
        function n() {
            var e = $("#connect-icon");
            e.length > 0 && (o = $(document).scrollTop(), e.trigger("click"), $(".contact-form-component button:first").focus(), $("#layer-bg").css("height", $(document).height() + "px"), i = setInterval(function() {
                $("body").hasClass("active-menu") || (t(), clearInterval(i))
            },
            50)),
            $(document).scrollTop(0)
        }
        function t() {
            $("body").css("top", ""),
            $("#layer-bg").css("height", ""),
            $(".connect-component .btn").focus(),
            setTimeout(function() {
                $(document).scrollTop(o)
            },
            0)
        }
        var i, o = 0;
        return {
            initialize: e
        }
    } ()
},
function(e, n) {
    "use strict";
    e.exports = function() {
        function e() {
            return f.length > 0 ? void n() : !1
        }
        function n() {
            a = p.width(),
            r = g.length,
            $(g).last().addClass("last-breadcrumb"),
            r > 1 && (t(), d.on("click",
            function() {
                l === !1 ? (c.show(), $(this).parent().addClass("list-open"), l = !0) : (c.hide(), $(this).parent().removeClass("list-open"), l = !1)
            })),
            $(document).on("click",
            function(e) {
                $(e.target).closest(d).length || (c.hide(), d.parent().removeClass("list-open"), l = !1)
            })
        }
        function t() {
            var e, n;
            return o = 0,
            o = p.width(),
            p = h.find(".breadcrumb-list"),
            o >= 300 && 1 !== g.length ? (s[s.length] = g.eq(0), g.eq(0).remove(), g = p.find(".breadcrumb-section"), t(), void 0) : (e = h.find(".breadcrumb-list"), n = e.find(".breadcrumb-section").not(".ellipsis"), $(n).clone().each(function(e) {
                s[s.length + e] = $(this)
            }), s.length > 0 ? (a >= 300 && p.prepend(d), g = p.find(".breadcrumb-section"), i()) : g.eq(0).addClass("anti-hover"), !1)
        }
        function i() {
            $(s).each(function(e) {
                c.append(s[e])
            }),
            g.eq(0).append(c)
        }
        var o, a, r, s = [],
        l = !1,
        c = $(document.createElement("ul"));
        c.addClass("compressed-breadcrumb");
        var d = $(document.createElement("li"));
        d.addClass("breadcrumb-section"),
        d.addClass("ellipsis");
        var u = $(document.createElement("button"));
        u.attr("aria-label", "Expand Breadcrumb"),
        u.text(". . .");
        var m = $(document.createElement("i"));
        m.addClass("icon-arrow-bottom"),
        u.append(m),
        d.append(u);
        var f = $(".footer-fixedbar"),
        h = f.find(".breadcrumb-component"),
        p = h.find(".breadcrumb-list"),
        g = p.find(".breadcrumb-section");
        return {
            initialize: e
        }
    } ()
},
function(e, n, t) { (function(n, i) {
        "use strict";
        e.exports = function() {
            function e() {
                return x.length > 0 ? void o() : !1
            }
            function o() {
                c.log.log("Featured Product: Init"),
                void 0 !== T && T.WCM.isEditMode() || ($(window).on("hpe.breakpointinit", a), $(window).on("hpe.breakpointchange", a), s())
            }
            function a() {
                n.touch ? n.touch && (C = "auto", _ = "stepless") : (C = w, _ = "stepped"),
                i.each(x,
                function(e) {
                    var n = $(e);
                    f = n.find(y),
                    h = f.length,
                    u = d.current(),
                    "undefined" != typeof m && n.mCustomScrollbar("destroy"),
                    f.length > 0 && i.each(f,
                    function(e) {
                        var n = $(e);
                        "" === $.trim(n.text()) && n.remove()
                    }),
                    "xl" === u && 4 >= h || "lg" === u && 3 >= h || "md" === u && 2 >= h || "sm" === u && 2 >= h ? n.find(".product-list").css({
                        width: h * w
                    }) : (r(n), n.find(".mCSB_container").css({
                        width: h * w
                    }))
                })
            }
            function r(e) {
                m = e.mCustomScrollbar({
                    advanced: {
                        autoExpandHorizontalScroll: !0,
                        updateOnContentResize: !0,
                        updateOnImageLoad: !0
                    },
                    axis: "x",
                    keyboard: {
                        enable: !0,
                        scrollType: "stepless"
                    },
                    mouseWheel: {
                        enable: !1
                    },
                    scrollButtons: {
                        enable: !0,
                        scrollAmount: C,
                        scrollType: _,
                        tabindex: -1
                    },
                    callbacks: {
                        onInit: function() {
                            l()
                        },
                        onUpdate: function() {
                            l(),
                            $(this).find(v).fadeOut(300)
                        },
                        onTotalScrollBack: function() {
                            $(this).find(v).fadeOut(300)
                        },
                        onTotalScroll: function() {
                            $(this).find(b).fadeOut(300)
                        },
                        onScrollStart: function() {
                            $(this).find(v).fadeIn(300),
                            $(this).find(b).fadeIn(300)
                        }
                    }
                })
            }
            function s() {
                x.find(y).on("mouseover focus mouseout blur",
                function(e) {
                    var n = $(this).closest(y); ("mouseover" === e.type || "focus" === e.type) && n.addClass(g).siblings().addClass(p),
                    ("mouseout" === e.type || "blur" === e.type) && n.removeClass(g).siblings().removeClass(p)
                })
            }
            function l() {
                i.each(x,
                function(e) {
                    var n = $(e),
                    t = parseInt(n.height() / 2, 10);
                    n.find(v).css("bottom", t).text(E),
                    n.find(b).css("bottom", t).text(I),
                    n.find(".mCustomScrollBox").attr("tabindex", "-1")
                })
            }
            var c = t(1),
            d = t(14),
            u = d.current();
            t(29),
            t(31);
            var m, f, h, p = "inactive",
            g = "hovered",
            v = ".mCSB_buttonLeft",
            b = ".mCSB_buttonRight",
            y = ".product-item",
            w = 340,
            C = w,
            _ = "stepped",
            x = $(".hpe-featured-product-carousel"),
            S = x.eq(0).closest(".hpe-featured-product"),
            E = S.data("arrow-left"),
            I = S.data("arrow-right"),
            T = window.CQ;
            return {
                initialize: e
            }
        } ()
    }).call(n, t(21), t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(1);
        e.exports = function() {
            function e() {
                return h.length > 0 ? void t() : !1
            }
            function t() {
                r(g),
                s(),
                n.each(E,
                function(e) {
                    $(e).on("click",
                    function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        o()
                    })
                }),
                n.each(I,
                function(e) {
                    $(e).on("click",
                    function(n) {
                        n.preventDefault(),
                        n.stopPropagation(),
                        l($(e))
                    })
                }),
                y.on("shown",
                function() {
                    y.find(".modal-body img").focus()
                }),
                i.services.subscribe(i.constants.RESOURCES_FORM_SUBMITTED, this,
                function() {
                    o()
                })
            }
            function o() {
                c = p.filter(".active-step").next(),
                p.removeClass("active-step"),
                c.addClass("active-step visited-step"),
                r(c.find("a")),
                d = b.filter(".active-step-content").next(),
                b.removeClass("active-step-content"),
                d.addClass("active-step-content").focus(),
                $(window).scrollTop(0),
                d.hasClass("download") && setTimeout(function() {
                    a($(".btn-action").attr("data-resource"))
                },
                5e3)
            }
            function a(e) {
                var n = document.createElement("a");
                n.href = e,
                n.setAttribute("target", "_blank");
                var t = "";
                return document.createEvent ? (t = document.createEvent("MouseEvents"), t.initEvent("click", !0, !0), n.dispatchEvent(t), !0) : void 0
            }
            function r(e) {
                v.text(e.text())
            }
            function s() {
                u = x.text(),
                u.length > w || S.length > 0 ? (m = u.substring(0, w), m += C, x.text(m)) : T.addClass("short-text")
            }
            function l(e) {
                f = e.hasClass("show-more-content") ? u: m,
                x.text(f),
                T.toggleClass("active"),
                e.focus()
            }
            var c, d, u, m, f, h = $(".lead-gen-form-component"),
            p = $(".list-steps li"),
            g = p.filter(".active-step").find(">a"),
            v = $(".active-step-label"),
            b = $(".form-step-content"),
            y = h.find(".modal"),
            w = 375,
            C = "...",
            _ = $(".asset-summary"),
            x = _.find(".summary-description"),
            S = _.find(".table-of-contents"),
            E = $(".proceed-form"),
            I = $(".content-link"),
            T = $(".lead-gen-asset");
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e() {
                var e = $(".featured-router"),
                o = !1;
                e.length > 0 && (o = window.navigator.userAgent.match(/Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i), o || n.each(e,
                function(e) {
                    $(e).find(".featured-router-cell").on("mouseenter", t).on("mouseleave", i)
                }))
            }
            function t() {
                var e = $(this);
                e.closest(".featured-router").find(".featured-router-cell").removeClass("hovered").addClass("unhovered"),
                e.removeClass("unhovered").addClass("hovered")
            }
            function i() {
                $(this).closest(".featured-router").find(".featured-router-cell").removeClass("hovered unhovered")
            }
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) {
    "use strict";
    e.exports = function() {
        function e() {
            return b.length > 0 ? void n() : !1
        }
        function n() {
            s.log.info("MarqueeNav: init"),
            void 0 !== y && y.WCM.isEditMode() || (u = $(window), l = b.find(".nav-wrapper"), c = b.find(".nav-item"), d = b.find(".nav-controls"), h = 250, p = 80, g = c.length * h + p, v = o(), i(), a(l.find(".sly")), c.matchHeight(), l.css({
                maxWidth: g
            }), u.resize())
        }
        function i() {
            u.resize(function() {
                clearTimeout(m),
                m = setTimeout(r, s.constants.CONFIG_WINDOW_DEBOUNCE)
            }),
            $.fn.matchHeight._afterUpdate = function(e, n) {
                l.css({
                    height: c.eq(0).outerHeight()
                })
            }
        }
        function o() {
            var e = c.index(b.find(".tab-active"));
            return 0 > e ? 0 : e
        }
        function a(e) {
            f = e.sly({
                horizontal: 1,
                itemNav: "centered",
                smart: 1,
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 0,
                startAt: v,
                scrollBy: h,
                speed: 300,
                elasticBounds: 1,
                easing: "swing",
                prevPage: d.find(".prev"),
                nextPage: d.find(".next")
            }),
            f.css({
                height: "auto"
            })
        }
        function r() {
            f.sly("reload"),
            f.sly("toCenter", v)
        }
        var s = t(1);
        t(49);
        var l, c, d, u, m, f, h, p, g, v, b = $(".hpe-marquee-nav"),
        y = window.CQ;
        return {
            initialize: e
        }
    } ()
},
function(e, n, t) {
    t(7)(t(50))
},
function(e, n) {
    e.exports = "/*!\n * sly 1.6.1 - 8th Aug 2015\n * https://github.com/darsain/sly\n * http://darsa.in/sly/\n *\n * Licensed under the MIT license.\n * http://opensource.org/licenses/MIT\n */\n\n;(function ($, w, undefined) {\n	'use strict';\n\n	var pluginName = 'sly';\n	var className  = 'Sly';\n	var namespace  = pluginName;\n\n	// Local WindowAnimationTiming interface\n	var cAF = w.cancelAnimationFrame || w.cancelRequestAnimationFrame;\n	var rAF = w.requestAnimationFrame;\n\n	// Support indicators\n	var transform, gpuAcceleration;\n\n	// Other global values\n	var $doc = $(document);\n	var dragInitEvents = 'touchstart.' + namespace + ' mousedown.' + namespace;\n	var dragMouseEvents = 'mousemove.' + namespace + ' mouseup.' + namespace;\n	var dragTouchEvents = 'touchmove.' + namespace + ' touchend.' + namespace;\n	var wheelEvent = (document.implementation.hasFeature('Event.wheel', '3.0') ? 'wheel.' : 'mousewheel.') + namespace;\n	var clickEvent = 'click.' + namespace;\n	var mouseDownEvent = 'mousedown.' + namespace;\n	var interactiveElements = ['INPUT', 'SELECT', 'BUTTON', 'TEXTAREA'];\n	var tmpArray = [];\n	var time;\n\n	// Math shorthands\n	var abs = Math.abs;\n	var sqrt = Math.sqrt;\n	var pow = Math.pow;\n	var round = Math.round;\n	var max = Math.max;\n	var min = Math.min;\n\n	// Keep track of last fired global wheel event\n	var lastGlobalWheel = 0;\n	$doc.on(wheelEvent, function (event) {\n		var sly = event.originalEvent[namespace];\n		var time = +new Date();\n		// Update last global wheel time, but only when event didn't originate\n		// in Sly frame, or the origin was less than scrollHijack time ago\n		if (!sly || sly.options.scrollHijack < time - lastGlobalWheel) lastGlobalWheel = time;\n	});\n\n	/**\n	 * Sly.\n	 *\n	 * @class\n	 *\n	 * @param {Element} frame       DOM element of sly container.\n	 * @param {Object}  options     Object with options.\n	 * @param {Object}  callbackMap Callbacks map.\n	 */\n	function Sly(frame, options, callbackMap) {\n		if (!(this instanceof Sly)) return new Sly(frame, options, callbackMap);\n\n		// Extend options\n		var o = $.extend({}, Sly.defaults, options);\n\n		// Private variables\n		var self = this;\n		var parallax = isNumber(frame);\n\n		// Frame\n		var $frame = $(frame);\n		var $slidee = o.slidee ? $(o.slidee).eq(0) : $frame.children().eq(0);\n		var frameSize = 0;\n		var slideeSize = 0;\n		var pos = {\n			start: 0,\n			center: 0,\n			end: 0,\n			cur: 0,\n			dest: 0\n		};\n\n		// Scrollbar\n		var $sb = $(o.scrollBar).eq(0);\n		var $handle = $sb.children().eq(0);\n		var sbSize = 0;\n		var handleSize = 0;\n		var hPos = {\n			start: 0,\n			end: 0,\n			cur: 0\n		};\n\n		// Pagesbar\n		var $pb = $(o.pagesBar);\n		var $pages = 0;\n		var pages = [];\n\n		// Items\n		var $items = 0;\n		var items = [];\n		var rel = {\n			firstItem: 0,\n			lastItem: 0,\n			centerItem: 0,\n			activeItem: null,\n			activePage: 0\n		};\n\n		// Styles\n		var frameStyles = new StyleRestorer($frame[0]);\n		var slideeStyles = new StyleRestorer($slidee[0]);\n		var sbStyles = new StyleRestorer($sb[0]);\n		var handleStyles = new StyleRestorer($handle[0]);\n\n		// Navigation type booleans\n		var basicNav = o.itemNav === 'basic';\n		var forceCenteredNav = o.itemNav === 'forceCentered';\n		var centeredNav = o.itemNav === 'centered' || forceCenteredNav;\n		var itemNav = !parallax && (basicNav || centeredNav || forceCenteredNav);\n\n		// Miscellaneous\n		var $scrollSource = o.scrollSource ? $(o.scrollSource) : $frame;\n		var $dragSource = o.dragSource ? $(o.dragSource) : $frame;\n		var $forwardButton = $(o.forward);\n		var $backwardButton = $(o.backward);\n		var $prevButton = $(o.prev);\n		var $nextButton = $(o.next);\n		var $prevPageButton = $(o.prevPage);\n		var $nextPageButton = $(o.nextPage);\n		var callbacks = {};\n		var last = {};\n		var animation = {};\n		var move = {};\n		var dragging = {\n			released: 1\n		};\n		var scrolling = {\n			last: 0,\n			delta: 0,\n			resetTime: 200\n		};\n		var renderID = 0;\n		var historyID = 0;\n		var cycleID = 0;\n		var continuousID = 0;\n		var i, l;\n\n		// Normalizing frame\n		if (!parallax) {\n			frame = $frame[0];\n		}\n\n		// Expose properties\n		self.initialized = 0;\n		self.frame = frame;\n		self.slidee = $slidee[0];\n		self.pos = pos;\n		self.rel = rel;\n		self.items = items;\n		self.pages = pages;\n		self.isPaused = 0;\n		self.options = o;\n		self.dragging = dragging;\n\n		/**\n		 * Loading function.\n		 *\n		 * Populate arrays, set sizes, bind events, ...\n		 *\n		 * @param {Boolean} [isInit] Whether load is called from within self.init().\n		 * @return {Void}\n		 */\n		function load(isInit) {\n			// Local variables\n			var lastItemsCount = 0;\n			var lastPagesCount = pages.length;\n\n			// Save old position\n			pos.old = $.extend({}, pos);\n\n			// Reset global variables\n			frameSize = parallax ? 0 : $frame[o.horizontal ? 'width' : 'height']();\n			sbSize = $sb[o.horizontal ? 'width' : 'height']();\n			slideeSize = parallax ? frame : $slidee[o.horizontal ? 'outerWidth' : 'outerHeight']();\n			pages.length = 0;\n\n			// Set position limits & relatives\n			pos.start = 0;\n			pos.end = max(slideeSize - frameSize, 0);\n\n			// Sizes & offsets for item based navigations\n			if (itemNav) {\n				// Save the number of current items\n				lastItemsCount = items.length;\n\n				// Reset itemNav related variables\n				$items = $slidee.children(o.itemSelector);\n				items.length = 0;\n\n				// Needed variables\n				var paddingStart = getPx($slidee, o.horizontal ? 'paddingLeft' : 'paddingTop');\n				var paddingEnd = getPx($slidee, o.horizontal ? 'paddingRight' : 'paddingBottom');\n				var borderBox = $($items).css('boxSizing') === 'border-box';\n				var areFloated = $items.css('float') !== 'none';\n				var ignoredMargin = 0;\n				var lastItemIndex = $items.length - 1;\n				var lastItem;\n\n				// Reset slideeSize\n				slideeSize = 0;\n\n				// Iterate through items\n				$items.each(function (i, element) {\n					// Item\n					var $item = $(element);\n					var rect = element.getBoundingClientRect();\n					var itemSize = round(o.horizontal ? rect.width || rect.right - rect.left : rect.height || rect.bottom - rect.top);\n					var itemMarginStart = getPx($item, o.horizontal ? 'marginLeft' : 'marginTop');\n					var itemMarginEnd = getPx($item, o.horizontal ? 'marginRight' : 'marginBottom');\n					var itemSizeFull = itemSize + itemMarginStart + itemMarginEnd;\n					var singleSpaced = !itemMarginStart || !itemMarginEnd;\n					var item = {};\n					item.el = element;\n					item.size = singleSpaced ? itemSize : itemSizeFull;\n					item.half = item.size / 2;\n					item.start = slideeSize + (singleSpaced ? itemMarginStart : 0);\n					item.center = item.start - round(frameSize / 2 - item.size / 2);\n					item.end = item.start - frameSize + item.size;\n\n					// Account for slidee padding\n					if (!i) {\n						slideeSize += paddingStart;\n					}\n\n					// Increment slidee size for size of the active element\n					slideeSize += itemSizeFull;\n\n					// Try to account for vertical margin collapsing in vertical mode\n					// It's not bulletproof, but should work in 99% of cases\n					if (!o.horizontal && !areFloated) {\n						// Subtract smaller margin, but only when top margin is not 0, and this is not the first element\n						if (itemMarginEnd && itemMarginStart && i > 0) {\n							slideeSize -= min(itemMarginStart, itemMarginEnd);\n						}\n					}\n\n					// Things to be done on last item\n					if (i === lastItemIndex) {\n						item.end += paddingEnd;\n						slideeSize += paddingEnd;\n						ignoredMargin = singleSpaced ? itemMarginEnd : 0;\n					}\n\n					// Add item object to items array\n					items.push(item);\n					lastItem = item;\n				});\n\n				// Resize SLIDEE to fit all items\n				$slidee[0].style[o.horizontal ? 'width' : 'height'] = (borderBox ? slideeSize: slideeSize - paddingStart - paddingEnd) + 'px';\n\n				// Adjust internal SLIDEE size for last margin\n				slideeSize -= ignoredMargin;\n\n				// Set limits\n				if (items.length) {\n					pos.start =  items[0][forceCenteredNav ? 'center' : 'start'];\n					pos.end = forceCenteredNav ? lastItem.center : frameSize < slideeSize ? lastItem.end : pos.start;\n				} else {\n					pos.start = pos.end = 0;\n				}\n			}\n\n			// Calculate SLIDEE center position\n			pos.center = round(pos.end / 2 + pos.start / 2);\n\n			// Update relative positions\n			updateRelatives();\n\n			// Scrollbar\n			if ($handle.length && sbSize > 0) {\n				// Stretch scrollbar handle to represent the visible area\n				if (o.dynamicHandle) {\n					handleSize = pos.start === pos.end ? sbSize : round(sbSize * frameSize / slideeSize);\n					handleSize = within(handleSize, o.minHandleSize, sbSize);\n					$handle[0].style[o.horizontal ? 'width' : 'height'] = handleSize + 'px';\n				} else {\n					handleSize = $handle[o.horizontal ? 'outerWidth' : 'outerHeight']();\n				}\n\n				hPos.end = sbSize - handleSize;\n\n				if (!renderID) {\n					syncScrollbar();\n				}\n			}\n\n			// Pages\n			if (!parallax && frameSize > 0) {\n				var tempPagePos = pos.start;\n				var pagesHtml = '';\n\n				// Populate pages array\n				if (itemNav) {\n					$.each(items, function (i, item) {\n						if (forceCenteredNav) {\n							pages.push(item.center);\n						} else if (item.start + item.size > tempPagePos && tempPagePos <= pos.end) {\n							tempPagePos = item.start;\n							pages.push(tempPagePos);\n							tempPagePos += frameSize;\n							if (tempPagePos > pos.end && tempPagePos < pos.end + frameSize) {\n								pages.push(pos.end);\n							}\n						}\n					});\n				} else {\n					while (tempPagePos - frameSize < pos.end) {\n						pages.push(tempPagePos);\n						tempPagePos += frameSize;\n					}\n				}\n\n				// Pages bar\n				if ($pb[0] && lastPagesCount !== pages.length) {\n					for (var i = 0; i < pages.length; i++) {\n						pagesHtml += o.pageBuilder.call(self, i);\n					}\n					$pages = $pb.html(pagesHtml).children();\n					$pages.eq(rel.activePage).addClass(o.activeClass);\n				}\n			}\n\n			// Extend relative variables object with some useful info\n			rel.slideeSize = slideeSize;\n			rel.frameSize = frameSize;\n			rel.sbSize = sbSize;\n			rel.handleSize = handleSize;\n\n			// Activate requested position\n			if (itemNav) {\n				if (isInit && o.startAt != null) {\n					activate(o.startAt);\n					self[centeredNav ? 'toCenter' : 'toStart'](o.startAt);\n				}\n				// Fix possible overflowing\n				var activeItem = items[rel.activeItem];\n				slideTo(centeredNav && activeItem ? activeItem.center : within(pos.dest, pos.start, pos.end));\n			} else {\n				if (isInit) {\n					if (o.startAt != null) slideTo(o.startAt, 1);\n				} else {\n					// Fix possible overflowing\n					slideTo(within(pos.dest, pos.start, pos.end));\n				}\n			}\n\n			// Trigger load event\n			trigger('load');\n		}\n		self.reload = function () { load(); };\n\n		/**\n		 * Animate to a position.\n		 *\n		 * @param {Int}  newPos    New position.\n		 * @param {Bool} immediate Reposition immediately without an animation.\n		 * @param {Bool} dontAlign Do not align items, use the raw position passed in first argument.\n		 *\n		 * @return {Void}\n		 */\n		function slideTo(newPos, immediate, dontAlign) {\n			// Align items\n			if (itemNav && dragging.released && !dontAlign) {\n				var tempRel = getRelatives(newPos);\n				var isNotBordering = newPos > pos.start && newPos < pos.end;\n\n				if (centeredNav) {\n					if (isNotBordering) {\n						newPos = items[tempRel.centerItem].center;\n					}\n					if (forceCenteredNav && o.activateMiddle) {\n						activate(tempRel.centerItem);\n					}\n				} else if (isNotBordering) {\n					newPos = items[tempRel.firstItem].start;\n				}\n			}\n\n			// Handle overflowing position limits\n			if (dragging.init && dragging.slidee && o.elasticBounds) {\n				if (newPos > pos.end) {\n					newPos = pos.end + (newPos - pos.end) / 6;\n				} else if (newPos < pos.start) {\n					newPos = pos.start + (newPos - pos.start) / 6;\n				}\n			} else {\n				newPos = within(newPos, pos.start, pos.end);\n			}\n\n			// Update the animation object\n			animation.start = +new Date();\n			animation.time = 0;\n			animation.from = pos.cur;\n			animation.to = newPos;\n			animation.delta = newPos - pos.cur;\n			animation.tweesing = dragging.tweese || dragging.init && !dragging.slidee;\n			animation.immediate = !animation.tweesing && (immediate || dragging.init && dragging.slidee || !o.speed);\n\n			// Reset dragging tweesing request\n			dragging.tweese = 0;\n\n			// Start animation rendering\n			if (newPos !== pos.dest) {\n				pos.dest = newPos;\n				trigger('change');\n				if (!renderID) {\n					render();\n				}\n			}\n\n			// Reset next cycle timeout\n			resetCycle();\n\n			// Synchronize states\n			updateRelatives();\n			updateButtonsState();\n			syncPagesbar();\n		}\n\n		/**\n		 * Render animation frame.\n		 *\n		 * @return {Void}\n		 */\n		function render() {\n			if (!self.initialized) {\n				return;\n			}\n\n			// If first render call, wait for next animationFrame\n			if (!renderID) {\n				renderID = rAF(render);\n				if (dragging.released) {\n					trigger('moveStart');\n				}\n				return;\n			}\n\n			// If immediate repositioning is requested, don't animate.\n			if (animation.immediate) {\n				pos.cur = animation.to;\n			}\n			// Use tweesing for animations without known end point\n			else if (animation.tweesing) {\n				animation.tweeseDelta = animation.to - pos.cur;\n				// Fuck Zeno's paradox\n				if (abs(animation.tweeseDelta) < 0.1) {\n					pos.cur = animation.to;\n				} else {\n					pos.cur += animation.tweeseDelta * (dragging.released ? o.swingSpeed : o.syncSpeed);\n				}\n			}\n			// Use tweening for basic animations with known end point\n			else {\n				animation.time = min(+new Date() - animation.start, o.speed);\n				pos.cur = animation.from + animation.delta * $.easing[o.easing](animation.time/o.speed, animation.time, 0, 1, o.speed);\n			}\n\n			// If there is nothing more to render break the rendering loop, otherwise request new animation frame.\n			if (animation.to === pos.cur) {\n				pos.cur = animation.to;\n				dragging.tweese = renderID = 0;\n			} else {\n				renderID = rAF(render);\n			}\n\n			trigger('move');\n\n			// Update SLIDEE position\n			if (!parallax) {\n				if (transform) {\n					$slidee[0].style[transform] = gpuAcceleration + (o.horizontal ? 'translateX' : 'translateY') + '(' + (-pos.cur) + 'px)';\n				} else {\n					$slidee[0].style[o.horizontal ? 'left' : 'top'] = -round(pos.cur) + 'px';\n				}\n			}\n\n			// When animation reached the end, and dragging is not active, trigger moveEnd\n			if (!renderID && dragging.released) {\n				trigger('moveEnd');\n			}\n\n			syncScrollbar();\n		}\n\n		/**\n		 * Synchronizes scrollbar with the SLIDEE.\n		 *\n		 * @return {Void}\n		 */\n		function syncScrollbar() {\n			if ($handle.length) {\n				hPos.cur = pos.start === pos.end ? 0 : (((dragging.init && !dragging.slidee) ? pos.dest : pos.cur) - pos.start) / (pos.end - pos.start) * hPos.end;\n				hPos.cur = within(round(hPos.cur), hPos.start, hPos.end);\n				if (last.hPos !== hPos.cur) {\n					last.hPos = hPos.cur;\n					if (transform) {\n						$handle[0].style[transform] = gpuAcceleration + (o.horizontal ? 'translateX' : 'translateY') + '(' + hPos.cur + 'px)';\n					} else {\n						$handle[0].style[o.horizontal ? 'left' : 'top'] = hPos.cur + 'px';\n					}\n				}\n			}\n		}\n\n		/**\n		 * Synchronizes pagesbar with SLIDEE.\n		 *\n		 * @return {Void}\n		 */\n		function syncPagesbar() {\n			if ($pages[0] && last.page !== rel.activePage) {\n				last.page = rel.activePage;\n				$pages.removeClass(o.activeClass).eq(rel.activePage).addClass(o.activeClass);\n				trigger('activePage', last.page);\n			}\n		}\n\n		/**\n		 * Returns the position object.\n		 *\n		 * @param {Mixed} item\n		 *\n		 * @return {Object}\n		 */\n		self.getPos = function (item) {\n			if (itemNav) {\n				var index = getIndex(item);\n				return index !== -1 ? items[index] : false;\n			} else {\n				var $item = $slidee.find(item).eq(0);\n\n				if ($item[0]) {\n					var offset = o.horizontal ? $item.offset().left - $slidee.offset().left : $item.offset().top - $slidee.offset().top;\n					var size = $item[o.horizontal ? 'outerWidth' : 'outerHeight']();\n\n					return {\n						start: offset,\n						center: offset - frameSize / 2 + size / 2,\n						end: offset - frameSize + size,\n						size: size\n					};\n				} else {\n					return false;\n				}\n			}\n		};\n\n		/**\n		 * Continuous move in a specified direction.\n		 *\n		 * @param  {Bool} forward True for forward movement, otherwise it'll go backwards.\n		 * @param  {Int}  speed   Movement speed in pixels per frame. Overrides options.moveBy value.\n		 *\n		 * @return {Void}\n		 */\n		self.moveBy = function (speed) {\n			move.speed = speed;\n			// If already initiated, or there is nowhere to move, abort\n			if (dragging.init || !move.speed || pos.cur === (move.speed > 0 ? pos.end : pos.start)) {\n				return;\n			}\n			// Initiate move object\n			move.lastTime = +new Date();\n			move.startPos = pos.cur;\n			// Set dragging as initiated\n			continuousInit('button');\n			dragging.init = 1;\n			// Start movement\n			trigger('moveStart');\n			cAF(continuousID);\n			moveLoop();\n		};\n\n		/**\n		 * Continuous movement loop.\n		 *\n		 * @return {Void}\n		 */\n		function moveLoop() {\n			// If there is nowhere to move anymore, stop\n			if (!move.speed || pos.cur === (move.speed > 0 ? pos.end : pos.start)) {\n				self.stop();\n			}\n			// Request new move loop if it hasn't been stopped\n			continuousID = dragging.init ? rAF(moveLoop) : 0;\n			// Update move object\n			move.now = +new Date();\n			move.pos = pos.cur + (move.now - move.lastTime) / 1000 * move.speed;\n			// Slide\n			slideTo(dragging.init ? move.pos : round(move.pos));\n			// Normally, this is triggered in render(), but if there\n			// is nothing to render, we have to do it manually here.\n			if (!dragging.init && pos.cur === pos.dest) {\n				trigger('moveEnd');\n			}\n			// Update times for future iteration\n			move.lastTime = move.now;\n		}\n\n		/**\n		 * Stops continuous movement.\n		 *\n		 * @return {Void}\n		 */\n		self.stop = function () {\n			if (dragging.source === 'button') {\n				dragging.init = 0;\n				dragging.released = 1;\n			}\n		};\n\n		/**\n		 * Activate previous item.\n		 *\n		 * @return {Void}\n		 */\n		self.prev = function () {\n			self.activate(rel.activeItem == null ? 0 : rel.activeItem - 1);\n		};\n\n		/**\n		 * Activate next item.\n		 *\n		 * @return {Void}\n		 */\n		self.next = function () {\n			self.activate(rel.activeItem == null ? 0 : rel.activeItem + 1);\n		};\n\n		/**\n		 * Activate previous page.\n		 *\n		 * @return {Void}\n		 */\n		self.prevPage = function () {\n			self.activatePage(rel.activePage - 1);\n		};\n\n		/**\n		 * Activate next page.\n		 *\n		 * @return {Void}\n		 */\n		self.nextPage = function () {\n			self.activatePage(rel.activePage + 1);\n		};\n\n		/**\n		 * Slide SLIDEE by amount of pixels.\n		 *\n		 * @param {Int}  delta     Pixels/Items. Positive means forward, negative means backward.\n		 * @param {Bool} immediate Reposition immediately without an animation.\n		 *\n		 * @return {Void}\n		 */\n		self.slideBy = function (delta, immediate) {\n			if (!delta) {\n				return;\n			}\n			if (itemNav) {\n				self[centeredNav ? 'toCenter' : 'toStart'](\n					within((centeredNav ? rel.centerItem : rel.firstItem) + o.scrollBy * delta, 0, items.length)\n				);\n			} else {\n				slideTo(pos.dest + delta, immediate);\n			}\n		};\n\n		/**\n		 * Animate SLIDEE to a specific position.\n		 *\n		 * @param {Int}  pos       New position.\n		 * @param {Bool} immediate Reposition immediately without an animation.\n		 *\n		 * @return {Void}\n		 */\n		self.slideTo = function (pos, immediate) {\n			slideTo(pos, immediate);\n		};\n\n		/**\n		 * Core method for handling `toLocation` methods.\n		 *\n		 * @param  {String} location\n		 * @param  {Mixed}  item\n		 * @param  {Bool}   immediate\n		 *\n		 * @return {Void}\n		 */\n		function to(location, item, immediate) {\n			// Optional arguments logic\n			if (type(item) === 'boolean') {\n				immediate = item;\n				item = undefined;\n			}\n\n			if (item === undefined) {\n				slideTo(pos[location], immediate);\n			} else {\n				// You can't align items to sides of the frame\n				// when centered navigation type is enabled\n				if (centeredNav && location !== 'center') {\n					return;\n				}\n\n				var itemPos = self.getPos(item);\n				if (itemPos) {\n					slideTo(itemPos[location], immediate, !centeredNav);\n				}\n			}\n		}\n\n		/**\n		 * Animate element or the whole SLIDEE to the start of the frame.\n		 *\n		 * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.\n		 * @param {Bool}  immediate Reposition immediately without an animation.\n		 *\n		 * @return {Void}\n		 */\n		self.toStart = function (item, immediate) {\n			to('start', item, immediate);\n		};\n\n		/**\n		 * Animate element or the whole SLIDEE to the end of the frame.\n		 *\n		 * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.\n		 * @param {Bool}  immediate Reposition immediately without an animation.\n		 *\n		 * @return {Void}\n		 */\n		self.toEnd = function (item, immediate) {\n			to('end', item, immediate);\n		};\n\n		/**\n		 * Animate element or the whole SLIDEE to the center of the frame.\n		 *\n		 * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.\n		 * @param {Bool}  immediate Reposition immediately without an animation.\n		 *\n		 * @return {Void}\n		 */\n		self.toCenter = function (item, immediate) {\n			to('center', item, immediate);\n		};\n\n		/**\n		 * Get the index of an item in SLIDEE.\n		 *\n		 * @param {Mixed} item     Item DOM element.\n		 *\n		 * @return {Int}  Item index, or -1 if not found.\n		 */\n		function getIndex(item) {\n			return item != null ?\n					isNumber(item) ?\n						item >= 0 && item < items.length ? item : -1 :\n						$items.index(item) :\n					-1;\n		}\n		// Expose getIndex without lowering the compressibility of it,\n		// as it is used quite often throughout Sly.\n		self.getIndex = getIndex;\n\n		/**\n		 * Get index of an item in SLIDEE based on a variety of input types.\n		 *\n		 * @param  {Mixed} item DOM element, positive or negative integer.\n		 *\n		 * @return {Int}   Item index, or -1 if not found.\n		 */\n		function getRelativeIndex(item) {\n			return getIndex(isNumber(item) && item < 0 ? item + items.length : item);\n		}\n\n		/**\n		 * Activates an item.\n		 *\n		 * @param  {Mixed} item Item DOM element, or index starting at 0.\n		 *\n		 * @return {Mixed} Activated item index or false on fail.\n		 */\n		function activate(item, force) {\n			var index = getIndex(item);\n\n			if (!itemNav || index < 0) {\n				return false;\n			}\n\n			// Update classes, last active index, and trigger active event only when there\n			// has been a change. Otherwise just return the current active index.\n			if (last.active !== index || force) {\n				// Update classes\n				$items.eq(rel.activeItem).removeClass(o.activeClass);\n				$items.eq(index).addClass(o.activeClass);\n\n				last.active = rel.activeItem = index;\n\n				updateButtonsState();\n				trigger('active', index);\n			}\n\n			return index;\n		}\n\n		/**\n		 * Activates an item and helps with further navigation when o.smart is enabled.\n		 *\n		 * @param {Mixed} item      Item DOM element, or index starting at 0.\n		 * @param {Bool}  immediate Whether to reposition immediately in smart navigation.\n		 *\n		 * @return {Void}\n		 */\n		self.activate = function (item, immediate) {\n			var index = activate(item);\n\n			// Smart navigation\n			if (o.smart && index !== false) {\n				// When centeredNav is enabled, center the element.\n				// Otherwise, determine where to position the element based on its current position.\n				// If the element is currently on the far end side of the frame, assume that user is\n				// moving forward and animate it to the start of the visible frame, and vice versa.\n				if (centeredNav) {\n					self.toCenter(index, immediate);\n				} else if (index >= rel.lastItem) {\n					self.toStart(index, immediate);\n				} else if (index <= rel.firstItem) {\n					self.toEnd(index, immediate);\n				} else {\n					resetCycle();\n				}\n			}\n		};\n\n		/**\n		 * Activates a page.\n		 *\n		 * @param {Int}  index     Page index, starting from 0.\n		 * @param {Bool} immediate Whether to reposition immediately without animation.\n		 *\n		 * @return {Void}\n		 */\n		self.activatePage = function (index, immediate) {\n			if (isNumber(index)) {\n				slideTo(pages[within(index, 0, pages.length - 1)], immediate);\n			}\n		};\n\n		/**\n		 * Return relative positions of items based on their visibility within FRAME.\n		 *\n		 * @param {Int} slideePos Position of SLIDEE.\n		 *\n		 * @return {Void}\n		 */\n		function getRelatives(slideePos) {\n			slideePos = within(isNumber(slideePos) ? slideePos : pos.dest, pos.start, pos.end);\n\n			var relatives = {};\n			var centerOffset = forceCenteredNav ? 0 : frameSize / 2;\n\n			// Determine active page\n			if (!parallax) {\n				for (var p = 0, pl = pages.length; p < pl; p++) {\n					if (slideePos >= pos.end || p === pages.length - 1) {\n						relatives.activePage = pages.length - 1;\n						break;\n					}\n\n					if (slideePos <= pages[p] + centerOffset) {\n						relatives.activePage = p;\n						break;\n					}\n				}\n			}\n\n			// Relative item indexes\n			if (itemNav) {\n				var first = false;\n				var last = false;\n				var center = false;\n\n				// From start\n				for (var i = 0, il = items.length; i < il; i++) {\n					// First item\n					if (first === false && slideePos <= items[i].start + items[i].half) {\n						first = i;\n					}\n\n					// Center item\n					if (center === false && slideePos <= items[i].center + items[i].half) {\n						center = i;\n					}\n\n					// Last item\n					if (i === il - 1 || slideePos <= items[i].end + items[i].half) {\n						last = i;\n						break;\n					}\n				}\n\n				// Safe assignment, just to be sure the false won't be returned\n				relatives.firstItem = isNumber(first) ? first : 0;\n				relatives.centerItem = isNumber(center) ? center : relatives.firstItem;\n				relatives.lastItem = isNumber(last) ? last : relatives.centerItem;\n			}\n\n			return relatives;\n		}\n\n		/**\n		 * Update object with relative positions.\n		 *\n		 * @param {Int} newPos\n		 *\n		 * @return {Void}\n		 */\n		function updateRelatives(newPos) {\n			$.extend(rel, getRelatives(newPos));\n		}\n\n		/**\n		 * Disable navigation buttons when needed.\n		 *\n		 * Adds disabledClass, and when the button is <button> or <input>, activates :disabled state.\n		 *\n		 * @return {Void}\n		 */\n		function updateButtonsState() {\n			var isStart = pos.dest <= pos.start;\n			var isEnd = pos.dest >= pos.end;\n			var slideePosState = (isStart ? 1 : 0) | (isEnd ? 2 : 0);\n\n			// Update paging buttons only if there has been a change in SLIDEE position\n			if (last.slideePosState !== slideePosState) {\n				last.slideePosState = slideePosState;\n\n				if ($prevPageButton.is('button,input')) {\n					$prevPageButton.prop('disabled', isStart);\n				}\n\n				if ($nextPageButton.is('button,input')) {\n					$nextPageButton.prop('disabled', isEnd);\n				}\n\n				$prevPageButton.add($backwardButton)[isStart ? 'addClass' : 'removeClass'](o.disabledClass);\n				$nextPageButton.add($forwardButton)[isEnd ? 'addClass' : 'removeClass'](o.disabledClass);\n			}\n\n			// Forward & Backward buttons need a separate state caching because we cannot \"property disable\"\n			// them while they are being used, as disabled buttons stop emitting mouse events.\n			if (last.fwdbwdState !== slideePosState && dragging.released) {\n				last.fwdbwdState = slideePosState;\n\n				if ($backwardButton.is('button,input')) {\n					$backwardButton.prop('disabled', isStart);\n				}\n\n				if ($forwardButton.is('button,input')) {\n					$forwardButton.prop('disabled', isEnd);\n				}\n			}\n\n			// Item navigation\n			if (itemNav && rel.activeItem != null) {\n				var isFirst = rel.activeItem === 0;\n				var isLast = rel.activeItem >= items.length - 1;\n				var itemsButtonState = (isFirst ? 1 : 0) | (isLast ? 2 : 0);\n\n				if (last.itemsButtonState !== itemsButtonState) {\n					last.itemsButtonState = itemsButtonState;\n\n					if ($prevButton.is('button,input')) {\n						$prevButton.prop('disabled', isFirst);\n					}\n\n					if ($nextButton.is('button,input')) {\n						$nextButton.prop('disabled', isLast);\n					}\n\n					$prevButton[isFirst ? 'addClass' : 'removeClass'](o.disabledClass);\n					$nextButton[isLast ? 'addClass' : 'removeClass'](o.disabledClass);\n				}\n			}\n		}\n\n		/**\n		 * Resume cycling.\n		 *\n		 * @param {Int} priority Resume pause with priority lower or equal than this. Used internally for pauseOnHover.\n		 *\n		 * @return {Void}\n		 */\n		self.resume = function (priority) {\n			if (!o.cycleBy || !o.cycleInterval || o.cycleBy === 'items' && (!items[0] || rel.activeItem == null) || priority < self.isPaused) {\n				return;\n			}\n\n			self.isPaused = 0;\n\n			if (cycleID) {\n				cycleID = clearTimeout(cycleID);\n			} else {\n				trigger('resume');\n			}\n\n			cycleID = setTimeout(function () {\n				trigger('cycle');\n				switch (o.cycleBy) {\n					case 'items':\n						self.activate(rel.activeItem >= items.length - 1 ? 0 : rel.activeItem + 1);\n						break;\n\n					case 'pages':\n						self.activatePage(rel.activePage >= pages.length - 1 ? 0 : rel.activePage + 1);\n						break;\n				}\n			}, o.cycleInterval);\n		};\n\n		/**\n		 * Pause cycling.\n		 *\n		 * @param {Int} priority Pause priority. 100 is default. Used internally for pauseOnHover.\n		 *\n		 * @return {Void}\n		 */\n		self.pause = function (priority) {\n			if (priority < self.isPaused) {\n				return;\n			}\n\n			self.isPaused = priority || 100;\n\n			if (cycleID) {\n				cycleID = clearTimeout(cycleID);\n				trigger('pause');\n			}\n		};\n\n		/**\n		 * Toggle cycling.\n		 *\n		 * @return {Void}\n		 */\n		self.toggle = function () {\n			self[cycleID ? 'pause' : 'resume']();\n		};\n\n		/**\n		 * Updates a signle or multiple option values.\n		 *\n		 * @param {Mixed} name  Name of the option that should be updated, or object that will extend the options.\n		 * @param {Mixed} value New option value.\n		 *\n		 * @return {Void}\n		 */\n		self.set = function (name, value) {\n			if ($.isPlainObject(name)) {\n				$.extend(o, name);\n			} else if (o.hasOwnProperty(name)) {\n				o[name] = value;\n			}\n		};\n\n		/**\n		 * Add one or multiple items to the SLIDEE end, or a specified position index.\n		 *\n		 * @param {Mixed} element Node element, or HTML string.\n		 * @param {Int}   index   Index of a new item position. By default item is appended at the end.\n		 *\n		 * @return {Void}\n		 */\n		self.add = function (element, index) {\n			var $element = $(element);\n\n			if (itemNav) {\n				// Insert the element(s)\n				if (index == null || !items[0] || index >= items.length) {\n					$element.appendTo($slidee);\n				} else if (items.length) {\n					$element.insertBefore(items[index].el);\n				}\n\n				// Adjust the activeItem index\n				if (rel.activeItem != null && index <= rel.activeItem) {\n					last.active = rel.activeItem += $element.length;\n				}\n			} else {\n				$slidee.append($element);\n			}\n\n			// Reload\n			load();\n		};\n\n		/**\n		 * Remove an item from SLIDEE.\n		 *\n		 * @param {Mixed} element Item index, or DOM element.\n		 * @param {Int}   index   Index of a new item position. By default item is appended at the end.\n		 *\n		 * @return {Void}\n		 */\n		self.remove = function (element) {\n			if (itemNav) {\n				var index = getRelativeIndex(element);\n\n				if (index > -1) {\n					// Remove the element\n					$items.eq(index).remove();\n\n					// If the current item is being removed, activate new one after reload\n					var reactivate = index === rel.activeItem;\n\n					// Adjust the activeItem index\n					if (rel.activeItem != null && index < rel.activeItem) {\n						last.active = --rel.activeItem;\n					}\n\n					// Reload\n					load();\n\n					// Activate new item at the removed position\n					if (reactivate) {\n						last.active = null;\n						self.activate(rel.activeItem);\n					}\n				}\n			} else {\n				$(element).remove();\n				load();\n			}\n		};\n\n		/**\n		 * Helps re-arranging items.\n		 *\n		 * @param  {Mixed} item     Item DOM element, or index starting at 0. Use negative numbers to select items from the end.\n		 * @param  {Mixed} position Item insertion anchor. Accepts same input types as item argument.\n		 * @param  {Bool}  after    Insert after instead of before the anchor.\n		 *\n		 * @return {Void}\n		 */\n		function moveItem(item, position, after) {\n			item = getRelativeIndex(item);\n			position = getRelativeIndex(position);\n\n			// Move only if there is an actual change requested\n			if (item > -1 && position > -1 && item !== position && (!after || position !== item - 1) && (after || position !== item + 1)) {\n				$items.eq(item)[after ? 'insertAfter' : 'insertBefore'](items[position].el);\n\n				var shiftStart = item < position ? item : (after ? position : position - 1);\n				var shiftEnd = item > position ? item : (after ? position + 1 : position);\n				var shiftsUp = item > position;\n\n				// Update activeItem index\n				if (rel.activeItem != null) {\n					if (item === rel.activeItem) {\n						last.active = rel.activeItem = after ? (shiftsUp ? position + 1 : position) : (shiftsUp ? position : position - 1);\n					} else if (rel.activeItem > shiftStart && rel.activeItem < shiftEnd) {\n						last.active = rel.activeItem += shiftsUp ? 1 : -1;\n					}\n				}\n\n				// Reload\n				load();\n			}\n		}\n\n		/**\n		 * Move item after the target anchor.\n		 *\n		 * @param  {Mixed} item     Item to be moved. Can be DOM element or item index.\n		 * @param  {Mixed} position Target position anchor. Can be DOM element or item index.\n		 *\n		 * @return {Void}\n		 */\n		self.moveAfter = function (item, position) {\n			moveItem(item, position, 1);\n		};\n\n		/**\n		 * Move item before the target anchor.\n		 *\n		 * @param  {Mixed} item     Item to be moved. Can be DOM element or item index.\n		 * @param  {Mixed} position Target position anchor. Can be DOM element or item index.\n		 *\n		 * @return {Void}\n		 */\n		self.moveBefore = function (item, position) {\n			moveItem(item, position);\n		};\n\n		/**\n		 * Registers callbacks.\n		 *\n		 * @param  {Mixed} name  Event name, or callbacks map.\n		 * @param  {Mixed} fn    Callback, or an array of callback functions.\n		 *\n		 * @return {Void}\n		 */\n		self.on = function (name, fn) {\n			// Callbacks map\n			if (type(name) === 'object') {\n				for (var key in name) {\n					if (name.hasOwnProperty(key)) {\n						self.on(key, name[key]);\n					}\n				}\n			// Callback\n			} else if (type(fn) === 'function') {\n				var names = name.split(' ');\n				for (var n = 0, nl = names.length; n < nl; n++) {\n					callbacks[names[n]] = callbacks[names[n]] || [];\n					if (callbackIndex(names[n], fn) === -1) {\n						callbacks[names[n]].push(fn);\n					}\n				}\n			// Callbacks array\n			} else if (type(fn) === 'array') {\n				for (var f = 0, fl = fn.length; f < fl; f++) {\n					self.on(name, fn[f]);\n				}\n			}\n		};\n\n		/**\n		 * Registers callbacks to be executed only once.\n		 *\n		 * @param  {Mixed} name  Event name, or callbacks map.\n		 * @param  {Mixed} fn    Callback, or an array of callback functions.\n		 *\n		 * @return {Void}\n		 */\n		self.one = function (name, fn) {\n			function proxy() {\n				fn.apply(self, arguments);\n				self.off(name, proxy);\n			}\n			self.on(name, proxy);\n		};\n\n		/**\n		 * Remove one or all callbacks.\n		 *\n		 * @param  {String} name Event name.\n		 * @param  {Mixed}  fn   Callback, or an array of callback functions. Omit to remove all callbacks.\n		 *\n		 * @return {Void}\n		 */\n		self.off = function (name, fn) {\n			if (fn instanceof Array) {\n				for (var f = 0, fl = fn.length; f < fl; f++) {\n					self.off(name, fn[f]);\n				}\n			} else {\n				var names = name.split(' ');\n				for (var n = 0, nl = names.length; n < nl; n++) {\n					callbacks[names[n]] = callbacks[names[n]] || [];\n					if (fn == null) {\n						callbacks[names[n]].length = 0;\n					} else {\n						var index = callbackIndex(names[n], fn);\n						if (index !== -1) {\n							callbacks[names[n]].splice(index, 1);\n						}\n					}\n				}\n			}\n		};\n\n		/**\n		 * Returns callback array index.\n		 *\n		 * @param  {String}   name Event name.\n		 * @param  {Function} fn   Function\n		 *\n		 * @return {Int} Callback array index, or -1 if isn't registered.\n		 */\n		function callbackIndex(name, fn) {\n			for (var i = 0, l = callbacks[name].length; i < l; i++) {\n				if (callbacks[name][i] === fn) {\n					return i;\n				}\n			}\n			return -1;\n		}\n\n		/**\n		 * Reset next cycle timeout.\n		 *\n		 * @return {Void}\n		 */\n		function resetCycle() {\n			if (dragging.released && !self.isPaused) {\n				self.resume();\n			}\n		}\n\n		/**\n		 * Calculate SLIDEE representation of handle position.\n		 *\n		 * @param  {Int} handlePos\n		 *\n		 * @return {Int}\n		 */\n		function handleToSlidee(handlePos) {\n			return round(within(handlePos, hPos.start, hPos.end) / hPos.end * (pos.end - pos.start)) + pos.start;\n		}\n\n		/**\n		 * Keeps track of a dragging delta history.\n		 *\n		 * @return {Void}\n		 */\n		function draggingHistoryTick() {\n			// Looking at this, I know what you're thinking :) But as we need only 4 history states, doing it this way\n			// as opposed to a proper loop is ~25 bytes smaller (when minified with GCC), a lot faster, and doesn't\n			// generate garbage. The loop version would create 2 new variables on every tick. Unexaptable!\n			dragging.history[0] = dragging.history[1];\n			dragging.history[1] = dragging.history[2];\n			dragging.history[2] = dragging.history[3];\n			dragging.history[3] = dragging.delta;\n		}\n\n		/**\n		 * Initialize continuous movement.\n		 *\n		 * @return {Void}\n		 */\n		function continuousInit(source) {\n			dragging.released = 0;\n			dragging.source = source;\n			dragging.slidee = source === 'slidee';\n		}\n\n		/**\n		 * Dragging initiator.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function dragInit(event) {\n			var isTouch = event.type === 'touchstart';\n			var source = event.data.source;\n			var isSlidee = source === 'slidee';\n\n			// Ignore when already in progress, or interactive element in non-touch navivagion\n			if (dragging.init || !isTouch && isInteractive(event.target)) {\n				return;\n			}\n\n			// Handle dragging conditions\n			if (source === 'handle' && (!o.dragHandle || hPos.start === hPos.end)) {\n				return;\n			}\n\n			// SLIDEE dragging conditions\n			if (isSlidee && !(isTouch ? o.touchDragging : o.mouseDragging && event.which < 2)) {\n				return;\n			}\n\n			if (!isTouch) {\n				// prevents native image dragging in Firefox\n				stopDefault(event);\n			}\n\n			// Reset dragging object\n			continuousInit(source);\n\n			// Properties used in dragHandler\n			dragging.init = 0;\n			dragging.$source = $(event.target);\n			dragging.touch = isTouch;\n			dragging.pointer = isTouch ? event.originalEvent.touches[0] : event;\n			dragging.initX = dragging.pointer.pageX;\n			dragging.initY = dragging.pointer.pageY;\n			dragging.initPos = isSlidee ? pos.cur : hPos.cur;\n			dragging.start = +new Date();\n			dragging.time = 0;\n			dragging.path = 0;\n			dragging.delta = 0;\n			dragging.locked = 0;\n			dragging.history = [0, 0, 0, 0];\n			dragging.pathToLock = isSlidee ? isTouch ? 30 : 10 : 0;\n\n			// Bind dragging events\n			$doc.on(isTouch ? dragTouchEvents : dragMouseEvents, dragHandler);\n\n			// Pause ongoing cycle\n			self.pause(1);\n\n			// Add dragging class\n			(isSlidee ? $slidee : $handle).addClass(o.draggedClass);\n\n			// Trigger moveStart event\n			trigger('moveStart');\n\n			// Keep track of a dragging path history. This is later used in the\n			// dragging release swing calculation when dragging SLIDEE.\n			if (isSlidee) {\n				historyID = setInterval(draggingHistoryTick, 10);\n			}\n		}\n\n		/**\n		 * Handler for dragging scrollbar handle or SLIDEE.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function dragHandler(event) {\n			dragging.released = event.type === 'mouseup' || event.type === 'touchend';\n			dragging.pointer = dragging.touch ? event.originalEvent[dragging.released ? 'changedTouches' : 'touches'][0] : event;\n			dragging.pathX = dragging.pointer.pageX - dragging.initX;\n			dragging.pathY = dragging.pointer.pageY - dragging.initY;\n			dragging.path = sqrt(pow(dragging.pathX, 2) + pow(dragging.pathY, 2));\n			dragging.delta = o.horizontal ? dragging.pathX : dragging.pathY;\n\n			if (!dragging.released && dragging.path < 1) return;\n\n			// We haven't decided whether this is a drag or not...\n			if (!dragging.init) {\n				// If the drag path was very short, maybe it's not a drag?\n				if (dragging.path < o.dragThreshold) {\n					// If the pointer was released, the path will not become longer and it's\n					// definitely not a drag. If not released yet, decide on next iteration\n					return dragging.released ? dragEnd() : undefined;\n				}\n				else {\n					// If dragging path is sufficiently long we can confidently start a drag\n					// if drag is in different direction than scroll, ignore it\n					if (o.horizontal ? abs(dragging.pathX) > abs(dragging.pathY) : abs(dragging.pathX) < abs(dragging.pathY)) {\n						dragging.init = 1;\n					} else {\n						return dragEnd();\n					}\n				}\n			}\n\n			stopDefault(event);\n\n			// Disable click on a source element, as it is unwelcome when dragging\n			if (!dragging.locked && dragging.path > dragging.pathToLock && dragging.slidee) {\n				dragging.locked = 1;\n				dragging.$source.on(clickEvent, disableOneEvent);\n			}\n\n			// Cancel dragging on release\n			if (dragging.released) {\n				dragEnd();\n\n				// Adjust path with a swing on mouse release\n				if (o.releaseSwing && dragging.slidee) {\n					dragging.swing = (dragging.delta - dragging.history[0]) / 40 * 300;\n					dragging.delta += dragging.swing;\n					dragging.tweese = abs(dragging.swing) > 10;\n				}\n			}\n\n			slideTo(dragging.slidee ? round(dragging.initPos - dragging.delta) : handleToSlidee(dragging.initPos + dragging.delta));\n		}\n\n		/**\n		 * Stops dragging and cleans up after it.\n		 *\n		 * @return {Void}\n		 */\n		function dragEnd() {\n			clearInterval(historyID);\n			dragging.released = true;\n			$doc.off(dragging.touch ? dragTouchEvents : dragMouseEvents, dragHandler);\n			(dragging.slidee ? $slidee : $handle).removeClass(o.draggedClass);\n\n			// Make sure that disableOneEvent is not active in next tick.\n			setTimeout(function () {\n				dragging.$source.off(clickEvent, disableOneEvent);\n			});\n\n			// Normally, this is triggered in render(), but if there\n			// is nothing to render, we have to do it manually here.\n			if (pos.cur === pos.dest && dragging.init) {\n				trigger('moveEnd');\n			}\n\n			// Resume ongoing cycle\n			self.resume(1);\n\n			dragging.init = 0;\n		}\n\n		/**\n		 * Check whether element is interactive.\n		 *\n		 * @return {Boolean}\n		 */\n		function isInteractive(element) {\n			return ~$.inArray(element.nodeName, interactiveElements) || $(element).is(o.interactive);\n		}\n\n		/**\n		 * Continuous movement cleanup on mouseup.\n		 *\n		 * @return {Void}\n		 */\n		function movementReleaseHandler() {\n			self.stop();\n			$doc.off('mouseup', movementReleaseHandler);\n		}\n\n		/**\n		 * Buttons navigation handler.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function buttonsHandler(event) {\n			/*jshint validthis:true */\n			stopDefault(event);\n			switch (this) {\n				case $forwardButton[0]:\n				case $backwardButton[0]:\n					self.moveBy($forwardButton.is(this) ? o.moveBy : -o.moveBy);\n					$doc.on('mouseup', movementReleaseHandler);\n					break;\n\n				case $prevButton[0]:\n					self.prev();\n					break;\n\n				case $nextButton[0]:\n					self.next();\n					break;\n\n				case $prevPageButton[0]:\n					self.prevPage();\n					break;\n\n				case $nextPageButton[0]:\n					self.nextPage();\n					break;\n			}\n		}\n\n		/**\n		 * Mouse wheel delta normalization.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Int}\n		 */\n		function normalizeWheelDelta(event) {\n			// wheelDelta needed only for IE8-\n			scrolling.curDelta = ((o.horizontal ? event.deltaY || event.deltaX : event.deltaY) || -event.wheelDelta);\n			scrolling.curDelta /= event.deltaMode === 1 ? 3 : 100;\n			if (!itemNav) {\n				return scrolling.curDelta;\n			}\n			time = +new Date();\n			if (scrolling.last < time - scrolling.resetTime) {\n				scrolling.delta = 0;\n			}\n			scrolling.last = time;\n			scrolling.delta += scrolling.curDelta;\n			if (abs(scrolling.delta) < 1) {\n				scrolling.finalDelta = 0;\n			} else {\n				scrolling.finalDelta = round(scrolling.delta / 1);\n				scrolling.delta %= 1;\n			}\n			return scrolling.finalDelta;\n		}\n\n		/**\n		 * Mouse scrolling handler.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function scrollHandler(event) {\n			// Mark event as originating in a Sly instance\n			event.originalEvent[namespace] = self;\n			// Don't hijack global scrolling\n			var time = +new Date();\n			if (lastGlobalWheel + o.scrollHijack > time && $scrollSource[0] !== document && $scrollSource[0] !== window) {\n				lastGlobalWheel = time;\n				return;\n			}\n			// Ignore if there is no scrolling to be done\n			if (!o.scrollBy || pos.start === pos.end) {\n				return;\n			}\n			var delta = normalizeWheelDelta(event.originalEvent);\n			// Trap scrolling only when necessary and/or requested\n			if (o.scrollTrap || delta > 0 && pos.dest < pos.end || delta < 0 && pos.dest > pos.start) {\n				stopDefault(event, 1);\n			}\n			self.slideBy(o.scrollBy * delta);\n		}\n\n		/**\n		 * Scrollbar click handler.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function scrollbarHandler(event) {\n			// Only clicks on scroll bar. Ignore the handle.\n			if (o.clickBar && event.target === $sb[0]) {\n				stopDefault(event);\n				// Calculate new handle position and sync SLIDEE to it\n				slideTo(handleToSlidee((o.horizontal ? event.pageX - $sb.offset().left : event.pageY - $sb.offset().top) - handleSize / 2));\n			}\n		}\n\n		/**\n		 * Keyboard input handler.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function keyboardHandler(event) {\n			if (!o.keyboardNavBy) {\n				return;\n			}\n\n			switch (event.which) {\n				// Left or Up\n				case o.horizontal ? 37 : 38:\n					stopDefault(event);\n					self[o.keyboardNavBy === 'pages' ? 'prevPage' : 'prev']();\n					break;\n\n				// Right or Down\n				case o.horizontal ? 39 : 40:\n					stopDefault(event);\n					self[o.keyboardNavBy === 'pages' ? 'nextPage' : 'next']();\n					break;\n			}\n		}\n\n		/**\n		 * Click on item activation handler.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function activateHandler(event) {\n			/*jshint validthis:true */\n\n			// Ignore clicks on interactive elements.\n			if (isInteractive(this)) {\n				event.originalEvent[namespace + 'ignore'] = true;\n				return;\n			}\n\n			// Ignore events that:\n			// - are not originating from direct SLIDEE children\n			// - originated from interactive elements\n			if (this.parentNode !== $slidee[0] || event.originalEvent[namespace + 'ignore']) return;\n\n			self.activate(this);\n		}\n\n		/**\n		 * Click on page button handler.\n		 *\n		 * @param {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function activatePageHandler() {\n			/*jshint validthis:true */\n			// Accept only events from direct pages bar children.\n			if (this.parentNode === $pb[0]) {\n				self.activatePage($pages.index(this));\n			}\n		}\n\n		/**\n		 * Pause on hover handler.\n		 *\n		 * @param  {Event} event\n		 *\n		 * @return {Void}\n		 */\n		function pauseOnHoverHandler(event) {\n			if (o.pauseOnHover) {\n				self[event.type === 'mouseenter' ? 'pause' : 'resume'](2);\n			}\n		}\n\n		/**\n		 * Trigger callbacks for event.\n		 *\n		 * @param  {String} name Event name.\n		 * @param  {Mixed}  argX Arguments passed to callbacks.\n		 *\n		 * @return {Void}\n		 */\n		function trigger(name, arg1) {\n			if (callbacks[name]) {\n				l = callbacks[name].length;\n				// Callbacks will be stored and executed from a temporary array to not\n				// break the execution queue when one of the callbacks unbinds itself.\n				tmpArray.length = 0;\n				for (i = 0; i < l; i++) {\n					tmpArray.push(callbacks[name][i]);\n				}\n				// Execute the callbacks\n				for (i = 0; i < l; i++) {\n					tmpArray[i].call(self, name, arg1);\n				}\n			}\n		}\n\n		/**\n		 * Destroys instance and everything it created.\n		 *\n		 * @return {Void}\n		 */\n		self.destroy = function () {\n			// Remove the reference to itself\n			Sly.removeInstance(frame);\n\n			// Unbind all events\n			$scrollSource\n				.add($handle)\n				.add($sb)\n				.add($pb)\n				.add($forwardButton)\n				.add($backwardButton)\n				.add($prevButton)\n				.add($nextButton)\n				.add($prevPageButton)\n				.add($nextPageButton)\n				.off('.' + namespace);\n\n			// Unbinding specifically as to not nuke out other instances\n			$doc.off('keydown', keyboardHandler);\n\n			// Remove classes\n			$prevButton\n				.add($nextButton)\n				.add($prevPageButton)\n				.add($nextPageButton)\n				.removeClass(o.disabledClass);\n\n			if ($items && rel.activeItem != null) {\n				$items.eq(rel.activeItem).removeClass(o.activeClass);\n			}\n\n			// Remove page items\n			$pb.empty();\n\n			if (!parallax) {\n				// Unbind events from frame\n				$frame.off('.' + namespace);\n				// Restore original styles\n				frameStyles.restore();\n				slideeStyles.restore();\n				sbStyles.restore();\n				handleStyles.restore();\n				// Remove the instance from element data storage\n				$.removeData(frame, namespace);\n			}\n\n			// Clean up collections\n			items.length = pages.length = 0;\n			last = {};\n\n			// Reset initialized status and return the instance\n			self.initialized = 0;\n			return self;\n		};\n\n		/**\n		 * Initialize.\n		 *\n		 * @return {Object}\n		 */\n		self.init = function () {\n			if (self.initialized) {\n				return;\n			}\n\n			// Disallow multiple instances on the same element\n			if (Sly.getInstance(frame)) throw new Error('There is already a Sly instance on this element');\n\n			// Store the reference to itself\n			Sly.storeInstance(frame, self);\n\n			// Register callbacks map\n			self.on(callbackMap);\n\n			// Save styles\n			var holderProps = ['overflow', 'position'];\n			var movableProps = ['position', 'webkitTransform', 'msTransform', 'transform', 'left', 'top', 'width', 'height'];\n			frameStyles.save.apply(frameStyles, holderProps);\n			sbStyles.save.apply(sbStyles, holderProps);\n			slideeStyles.save.apply(slideeStyles, movableProps);\n			handleStyles.save.apply(handleStyles, movableProps);\n\n			// Set required styles\n			var $movables = $handle;\n			if (!parallax) {\n				$movables = $movables.add($slidee);\n				$frame.css('overflow', 'hidden');\n				if (!transform && $frame.css('position') === 'static') {\n					$frame.css('position', 'relative');\n				}\n			}\n			if (transform) {\n				if (gpuAcceleration) {\n					$movables.css(transform, gpuAcceleration);\n				}\n			} else {\n				if ($sb.css('position') === 'static') {\n					$sb.css('position', 'relative');\n				}\n				$movables.css({ position: 'absolute' });\n			}\n\n			// Navigation buttons\n			if (o.forward) {\n				$forwardButton.on(mouseDownEvent, buttonsHandler);\n			}\n			if (o.backward) {\n				$backwardButton.on(mouseDownEvent, buttonsHandler);\n			}\n			if (o.prev) {\n				$prevButton.on(clickEvent, buttonsHandler);\n			}\n			if (o.next) {\n				$nextButton.on(clickEvent, buttonsHandler);\n			}\n			if (o.prevPage) {\n				$prevPageButton.on(clickEvent, buttonsHandler);\n			}\n			if (o.nextPage) {\n				$nextPageButton.on(clickEvent, buttonsHandler);\n			}\n\n			// Scrolling navigation\n			$scrollSource.on(wheelEvent, scrollHandler);\n\n			// Clicking on scrollbar navigation\n			if ($sb[0]) {\n				$sb.on(clickEvent, scrollbarHandler);\n			}\n\n			// Click on items navigation\n			if (itemNav && o.activateOn) {\n				$frame.on(o.activateOn + '.' + namespace, '*', activateHandler);\n			}\n\n			// Pages navigation\n			if ($pb[0] && o.activatePageOn) {\n				$pb.on(o.activatePageOn + '.' + namespace, '*', activatePageHandler);\n			}\n\n			// Dragging navigation\n			$dragSource.on(dragInitEvents, { source: 'slidee' }, dragInit);\n\n			// Scrollbar dragging navigation\n			if ($handle) {\n				$handle.on(dragInitEvents, { source: 'handle' }, dragInit);\n			}\n\n			// Keyboard navigation\n			$doc.on('keydown', keyboardHandler);\n\n			if (!parallax) {\n				// Pause on hover\n				$frame.on('mouseenter.' + namespace + ' mouseleave.' + namespace, pauseOnHoverHandler);\n				// Reset native FRAME element scroll\n				$frame.on('scroll.' + namespace, resetScroll);\n			}\n\n			// Mark instance as initialized\n			self.initialized = 1;\n\n			// Load\n			load(true);\n\n			// Initiate automatic cycling\n			if (o.cycleBy && !parallax) {\n				self[o.startPaused ? 'pause' : 'resume']();\n			}\n\n			// Return instance\n			return self;\n		};\n	}\n\n	Sly.getInstance = function (element) {\n		return $.data(element, namespace);\n	};\n\n	Sly.storeInstance = function (element, sly) {\n		return $.data(element, namespace, sly);\n	};\n\n	Sly.removeInstance = function (element) {\n		return $.removeData(element, namespace);\n	};\n\n	/**\n	 * Return type of the value.\n	 *\n	 * @param  {Mixed} value\n	 *\n	 * @return {String}\n	 */\n	function type(value) {\n		if (value == null) {\n			return String(value);\n		}\n\n		if (typeof value === 'object' || typeof value === 'function') {\n			return Object.prototype.toString.call(value).match(/\\s([a-z]+)/i)[1].toLowerCase() || 'object';\n		}\n\n		return typeof value;\n	}\n\n	/**\n	 * Event preventDefault & stopPropagation helper.\n	 *\n	 * @param {Event} event     Event object.\n	 * @param {Bool}  noBubbles Cancel event bubbling.\n	 *\n	 * @return {Void}\n	 */\n	function stopDefault(event, noBubbles) {\n		event.preventDefault();\n		if (noBubbles) {\n			event.stopPropagation();\n		}\n	}\n\n	/**\n	 * Disables an event it was triggered on and unbinds itself.\n	 *\n	 * @param  {Event} event\n	 *\n	 * @return {Void}\n	 */\n	function disableOneEvent(event) {\n		/*jshint validthis:true */\n		stopDefault(event, 1);\n		$(this).off(event.type, disableOneEvent);\n	}\n\n	/**\n	 * Resets native element scroll values to 0.\n	 *\n	 * @return {Void}\n	 */\n	function resetScroll() {\n		/*jshint validthis:true */\n		this.scrollLeft = 0;\n		this.scrollTop = 0;\n	}\n\n	/**\n	 * Check if variable is a number.\n	 *\n	 * @param {Mixed} value\n	 *\n	 * @return {Boolean}\n	 */\n	function isNumber(value) {\n		return !isNaN(parseFloat(value)) && isFinite(value);\n	}\n\n	/**\n	 * Parse style to pixels.\n	 *\n	 * @param {Object}   $item    jQuery object with element.\n	 * @param {Property} property CSS property to get the pixels from.\n	 *\n	 * @return {Int}\n	 */\n	function getPx($item, property) {\n		return 0 | round(String($item.css(property)).replace(/[^\\-0-9.]/g, ''));\n	}\n\n	/**\n	 * Make sure that number is within the limits.\n	 *\n	 * @param {Number} number\n	 * @param {Number} min\n	 * @param {Number} max\n	 *\n	 * @return {Number}\n	 */\n	function within(number, min, max) {\n		return number < min ? min : number > max ? max : number;\n	}\n\n	/**\n	 * Saves element styles for later restoration.\n	 *\n	 * Example:\n	 *   var styles = new StyleRestorer(frame);\n	 *   styles.save('position');\n	 *   element.style.position = 'absolute';\n	 *   styles.restore(); // restores to state before the assignment above\n	 *\n	 * @param {Element} element\n	 */\n	function StyleRestorer(element) {\n		var self = {};\n		self.style = {};\n		self.save = function () {\n			if (!element || !element.nodeType) return;\n			for (var i = 0; i < arguments.length; i++) {\n				self.style[arguments[i]] = element.style[arguments[i]];\n			}\n			return self;\n		};\n		self.restore = function () {\n			if (!element || !element.nodeType) return;\n			for (var prop in self.style) {\n				if (self.style.hasOwnProperty(prop)) element.style[prop] = self.style[prop];\n			}\n			return self;\n		};\n		return self;\n	}\n\n	// Local WindowAnimationTiming interface polyfill\n	(function (w) {\n		rAF = w.requestAnimationFrame\n			|| w.webkitRequestAnimationFrame\n			|| fallback;\n\n		/**\n		* Fallback implementation.\n		*/\n		var prev = new Date().getTime();\n		function fallback(fn) {\n			var curr = new Date().getTime();\n			var ms = Math.max(0, 16 - (curr - prev));\n			var req = setTimeout(fn, ms);\n			prev = curr;\n			return req;\n		}\n\n		/**\n		* Cancel.\n		*/\n		var cancel = w.cancelAnimationFrame\n			|| w.webkitCancelAnimationFrame\n			|| w.clearTimeout;\n\n		cAF = function(id){\n			cancel.call(w, id);\n		};\n	}(window));\n\n	// Feature detects\n	(function () {\n		var prefixes = ['', 'Webkit', 'Moz', 'ms', 'O'];\n		var el = document.createElement('div');\n\n		function testProp(prop) {\n			for (var p = 0, pl = prefixes.length; p < pl; p++) {\n				var prefixedProp = prefixes[p] ? prefixes[p] + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;\n				if (el.style[prefixedProp] != null) {\n					return prefixedProp;\n				}\n			}\n		}\n\n		// Global support indicators\n		transform = testProp('transform');\n		gpuAcceleration = testProp('perspective') ? 'translateZ(0) ' : '';\n	}());\n\n	// Expose class globally\n	w[className] = Sly;\n\n	// jQuery proxy\n	$.fn[pluginName] = function (options, callbackMap) {\n		var method, methodArgs;\n\n		// Attributes logic\n		if (!$.isPlainObject(options)) {\n			if (type(options) === 'string' || options === false) {\n				method = options === false ? 'destroy' : options;\n				methodArgs = Array.prototype.slice.call(arguments, 1);\n			}\n			options = {};\n		}\n\n		// Apply to all elements\n		return this.each(function (i, element) {\n			// Call with prevention against multiple instantiations\n			var plugin = Sly.getInstance(element);\n\n			if (!plugin && !method) {\n				// Create a new object if it doesn't exist yet\n				plugin = new Sly(element, options, callbackMap).init();\n			} else if (plugin && method) {\n				// Call method\n				if (plugin[method]) {\n					plugin[method].apply(plugin, methodArgs);\n				}\n			}\n		});\n	};\n\n	// Default options\n	Sly.defaults = {\n		slidee:     null,  // Selector, DOM element, or jQuery object with DOM element representing SLIDEE.\n		horizontal: false, // Switch to horizontal mode.\n\n		// Item based navigation\n		itemNav:        null,  // Item navigation type. Can be: 'basic', 'centered', 'forceCentered'.\n		itemSelector:   null,  // Select only items that match this selector.\n		smart:          false, // Repositions the activated item to help with further navigation.\n		activateOn:     null,  // Activate an item on this event. Can be: 'click', 'mouseenter', ...\n		activateMiddle: false, // Always activate the item in the middle of the FRAME. forceCentered only.\n\n		// Scrolling\n		scrollSource: null,  // Element for catching the mouse wheel scrolling. Default is FRAME.\n		scrollBy:     0,     // Pixels or items to move per one mouse scroll. 0 to disable scrolling.\n		scrollHijack: 300,   // Milliseconds since last wheel event after which it is acceptable to hijack global scroll.\n		scrollTrap:   false, // Don't bubble scrolling when hitting scrolling limits.\n\n		// Dragging\n		dragSource:    null,  // Selector or DOM element for catching dragging events. Default is FRAME.\n		mouseDragging: false, // Enable navigation by dragging the SLIDEE with mouse cursor.\n		touchDragging: false, // Enable navigation by dragging the SLIDEE with touch events.\n		releaseSwing:  false, // Ease out on dragging swing release.\n		swingSpeed:    0.2,   // Swing synchronization speed, where: 1 = instant, 0 = infinite.\n		elasticBounds: false, // Stretch SLIDEE position limits when dragging past FRAME boundaries.\n		dragThreshold: 3,     // Distance in pixels before Sly recognizes dragging.\n		interactive:   null,  // Selector for special interactive elements.\n\n		// Scrollbar\n		scrollBar:     null,  // Selector or DOM element for scrollbar container.\n		dragHandle:    false, // Whether the scrollbar handle should be draggable.\n		dynamicHandle: false, // Scrollbar handle represents the ratio between hidden and visible content.\n		minHandleSize: 50,    // Minimal height or width (depends on sly direction) of a handle in pixels.\n		clickBar:      false, // Enable navigation by clicking on scrollbar.\n		syncSpeed:     0.5,   // Handle => SLIDEE synchronization speed, where: 1 = instant, 0 = infinite.\n\n		// Pagesbar\n		pagesBar:       null, // Selector or DOM element for pages bar container.\n		activatePageOn: null, // Event used to activate page. Can be: click, mouseenter, ...\n		pageBuilder:          // Page item generator.\n			function (index) {\n				return '<li>' + (index + 1) + '</li>';\n			},\n\n		// Navigation buttons\n		forward:  null, // Selector or DOM element for \"forward movement\" button.\n		backward: null, // Selector or DOM element for \"backward movement\" button.\n		prev:     null, // Selector or DOM element for \"previous item\" button.\n		next:     null, // Selector or DOM element for \"next item\" button.\n		prevPage: null, // Selector or DOM element for \"previous page\" button.\n		nextPage: null, // Selector or DOM element for \"next page\" button.\n\n		// Automated cycling\n		cycleBy:       null,  // Enable automatic cycling by 'items' or 'pages'.\n		cycleInterval: 5000,  // Delay between cycles in milliseconds.\n		pauseOnHover:  false, // Pause cycling when mouse hovers over the FRAME.\n		startPaused:   false, // Whether to start in paused sate.\n\n		// Mixed options\n		moveBy:        300,     // Speed in pixels per second used by forward and backward buttons.\n		speed:         0,       // Animations speed in milliseconds. 0 to disable animations.\n		easing:        'swing', // Easing for duration based (tweening) animations.\n		startAt:       null,    // Starting offset in pixels or items.\n		keyboardNavBy: null,    // Enable keyboard navigation by 'items' or 'pages'.\n\n		// Classes\n		draggedClass:  'dragged', // Class for dragged elements (like SLIDEE or scrollbar handle).\n		activeClass:   'active',  // Class for active items and pages.\n		disabledClass: 'disabled' // Class for disabled navigation elements.\n	};\n}(jQuery, window));\n";
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(1),
        o = t(12),
        a = t(52);
        e.exports = function() {
            function e() {
                $(".privacy-form").length > 0 && (d = [{
                    formID: "privacyFormTechnical",
                    privacyConstant: i.constants.PRIVACY_COOKIE_TYPE_TECHNICAL
                },
                {
                    formID: "privacyFormAnalytics",
                    privacyConstant: i.constants.PRIVACY_COOKIE_TYPE_ANALYTICS
                },
                {
                    formID: "privacyFormPersonalization",
                    privacyConstant: i.constants.PRIVACY_COOKIE_TYPE_PERSONALIZATION
                },
                {
                    formID: "privacyFormThirdParty",
                    privacyConstant: i.constants.PRIVACY_COOKIE_TYPE_THIRDPARTY
                }], i.services.subscribe(i.constants.PRIVACY_MANAGEMENT_READY, this, t))
            }
            function t() {
                r(),
                $(".privacy-form").on("change", l),
                $(".privacy-form-submit").on("click", s),
                i.services.subscribe(i.constants.PRIVACY_COOKIE_UPDATED, this, c)
            }
            function r() {
                var e;
                o.hasPreferences() ? (e = o.getPreferences(), n.each(d,
                function(n) {
                    var t = e[n.privacyConstant] ? "Y": "N";
                    $('input[name="' + n.formID + '"][value="' + t + '"]').prop("checked", !0)
                })) : n.each(d,
                function(e) {
                    var n = $("#default-" + e.formID).val();
                    $('input[name="' + e.formID + '"][value="' + n + '"]').prop("checked", !0)
                })
            }
            function s(e) {
                var t = {};
                e.preventDefault(),
                n.each(d,
                function(e) {
                    var n = e.privacyConstant === i.constants.PRIVACY_COOKIE_TYPE_TECHNICAL ? "Y": $('input[name="' + e.formID + '"]:checked').val();
                    t[e.privacyConstant] = "Y" === n ? !0 : !1
                }),
                o.setPreferences(t, i.constants.PRIVACY_UPDATE_TYPE_FORM),
                $(".privacy-form-confirmation").show()
            }
            function l() {
                $(".privacy-form-confirmation").hide()
            }
            function c(e) {
                e.type === i.constants.PRIVACY_UPDATE_TYPE_FORM ? a.hide() : r()
            }
            var d;
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(1),
        o = t(14),
        a = t(12);
        e.exports = function() {
            function e() {
                var e = window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode() ? !0 : !1;
                h = $(".privacy-banner"),
                h.length > 0 && ("true" !== h.attr("data-active") || e ? h.hide() : (f = a.hasSubmittedPrivacyBanner(), m = [{
                    formID: "privacyAnalytics",
                    privacyConstant: i.constants.PRIVACY_COOKIE_TYPE_ANALYTICS
                },
                {
                    formID: "privacyPersonalization",
                    privacyConstant: i.constants.PRIVACY_COOKIE_TYPE_PERSONALIZATION
                },
                {
                    formID: "privacyThirdParty",
                    privacyConstant: i.constants.PRIVACY_COOKIE_TYPE_THIRDPARTY
                }], i.services.subscribe(i.constants.PRIVACY_MANAGEMENT_READY, this, t), a.init()))
            }
            function t() {
                var e;
                s(),
                $(window).on("unload", u),
                f ? (a.hasPreferences() || i.log.log("WARNING: privacy preferences not set but flag indicates banner has been completed."), e = a.getPreferences(), a.cookieCleanup(e)) : (r(), d(), a.setPrivacyCookie(i.constants.PRIVACY_COOKIE_BANNER_ANSWER_ID, "0", {
                    expires: i.constants.PRIVACY_COOKIE_EXPIRATION
                }))
            }
            function r() {
                $(".cta-cookie-submit").on("click",
                function(e) {
                    var t = !1,
                    r = {};
                    e.preventDefault(),
                    "xs" !== o.current() && n.each(m,
                    function(e) {
                        $('input[name="' + e.formID + '"]').length > 0 && ($('input[name="' + e.formID + '"]:checked').val() || (t = !0))
                    }),
                    t ? $(".privacy-banner-error").show() : (r = l(), a.setPreferences(r, i.constants.PRIVACY_UPDATE_TYPE_BANNER), c())
                })
            }
            function s() {
                var e = h.find(".cta-cookie-info"),
                n = h.find(".cookie-info-content");
                e.on("click",
                function(t) {
                    t.preventDefault(),
                    n.is(":hidden") ? (e.attr("aria-expanded", "true").addClass("open"), n.show().attr("aria-expanded", "true")) : (e.attr("aria-expanded", "false").removeClass("open"), n.hide().attr("aria-expanded", "false"))
                })
            }
            function l(e) {
                var t = {};
                return n.each(m,
                function(n) {
                    var i;
                    e ? i = $("#default-" + n.formID).val() : $('input[name="' + n.formID + '"]').length > 0 && "xs" !== o.current() ? (i = $('input[name="' + n.formID + '"]:checked').val(), "undefined" == typeof i && (i = $("#default-" + n.formID).val())) : i = $("#default-" + n.formID).val(),
                    t[n.privacyConstant] = "Y" === i ? !0 : !1
                }),
                t[i.constants.PRIVACY_COOKIE_TYPE_TECHNICAL] = !0,
                t
            }
            function c() {
                h.removeClass("open"),
                i.services.publish(i.constants.PRIVACY_BANNER_CLOSED)
            }
            function d() {
                var e = l(!0);
                $("body").addClass("privacy-opt-out"),
                a.cookieCleanup(e),
                h.detach().insertBefore(".hpe-header").addClass("open"),
                i.services.publish(i.constants.PRIVACY_BANNER_OPENED)
            }
            function u() {
                var e = a.hasPreferences() ? a.getPreferences() : l(!0);
                a.cookieCleanup(e)
            }
            var m, f, h;
            return {
                initialize: e,
                hide: c
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        var i = t(14);
        e.exports = function() {
            function e() {
                r = $(".nested-columns-component"),
                r.length > 0 && (t(), $(window).on("resize",
                function() {
                    clearTimeout(s),
                    s = setTimeout(a, 250)
                }))
            }
            function t() {
                o(),
                "xs" !== i.current() && "sm" !== i.current() && n.each(r,
                function(e) {
                    var t = $(e).find(".nested-columns-component-col");
                    n.each(t,
                    function(e) {
                        var t = $(e),
                        i = 0,
                        o = t.find("> div > div > *, > div > span > *");
                        n.each(o,
                        function(e) {
                            var n = $(e),
                            o = parseInt(n.css("min-width"));
                            0 !== o && o > i && (t.css("min-width", o + l + "px"), i = o)
                        })
                    })
                })
            }
            function o() {
                $(".nested-columns-component-col").css("min-width", "")
            }
            function a() {
                t()
            }
            var r, s, l = 30;
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e() {
                a = $(".tabbed-carousel"),
                a.length > 0 && n.each(a,
                function(e) {
                    var n = $(e);
                    n.addClass("tabbed-carousel-" + n.find(".slides li").length),
                    setTimeout(function() {
                        n.find(".tabbed-carousel-nav .tabbed-carousel-nav-button").matchHeight()
                    },
                    250),
                    n.find(".flexslider").flexslider({
                        animation: "slide",
                        slideshow: !1,
                        keyboard: !1,
                        manualControls: n.find(".tabbed-carousel-nav button"),
                        animationLoop: window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode() ? !1 : !0,
                        before: function(e) {
                            var n = $(e);
                            n.data("isKeyboardTab") ? n.data("flexslider").vars.animationSpeed = 0 : n.data("flexslider").vars.animationSpeed = l
                        },
                        after: function(e) {
                            clearTimeout(r),
                            r = setTimeout(function() {
                                i(e)
                            },
                            600)
                        },
                        start: function(e) {
                            t(n),
                            o(e)
                        }
                    })
                })
            }
            function t(e) {
                var n = e.find(".flex-viewport"),
                t = e.find(".flex-direction-nav"),
                i = t.find(".flex-nav-next"),
                o = t.find(".flex-nav-prev");
                t.insertBefore(n),
                i.find("a").text(e.attr("data-nav-next")),
                o.find("a").text(e.attr("data-nav-previous"))
            }
            function i(e) {
                var n = $(e),
                t = n.index();
                s[t] !== e.currentSlide && ($(e.slides[s[t]]).removeAttr("aria-live"), $(e.slides[e.currentSlide]).attr("aria-live", "polite"), s[t] = e.currentSlide)
            }
            function o(e) {
                var n = $(e);
                window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode() || (n.find(".slides li.clone").find("a, button, input").attr("tabindex", "-1"), $(window).on("keydown.tabbed",
                function(e) { (e.shiftKey || 9 === e.keyCode) && n.data("isKeyboardTab", !0)
                }), $(window).on("keyup.tabbed",
                function() {
                    n.data("isKeyboardTab", !1)
                }), n.find(".slides li a, .slides li input").on("focusin.tabbed",
                function() {
                    var e;
                    n.data("isKeyboardTab") && (e = $(this).closest(".slides li").index(), e && e >= 1 && (e -= 1, n.data("flexslider").flexAnimate(e)))
                }))
            }
            var a, r, s = {},
            l = 600;
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e() {
                return s.length > 0 ? void t() : !1
            }
            function t() {
                r = $(window),
                i(),
                r.resize()
            }
            function i() {
                r.resize(function() {
                    clearTimeout(a),
                    a = setTimeout(o, 25)
                })
            }
            function o() {
                n.each(s,
                function(e) {
                    var n = $(e),
                    t = e.getAttribute("data-aspect-ratio-desktop"),
                    i = e.getAttribute("data-aspect-ratio-mobile"),
                    o = t.split("-"),
                    a = i.split("-"),
                    r = n.find(".content").outerHeight(),
                    s = n.find(".img-wrapper"),
                    u = window.innerWidth || document.body.clientWidth;
                    n.find(".content-wrapper").css({
                        height: r
                    }),
                    n.find(".aspect-ratio").css({
                        minHeight: r
                    }),
                    u > 768 && r > 300 ? n.find(".content-wrapper").addClass(d) : n.find(".content-wrapper").removeClass(d),
                    s.css({
                        minHeight: r
                    }),
                    768 > u ? s.css({
                        minWidth: r * (a[0] / a[1])
                    }) : s.css({
                        minWidth: r * (o[0] / o[1])
                    }),
                    u < s.width() ? s.css({
                        left: (u - s.width()) / 2
                    }) : s.css({
                        left: 0
                    }),
                    u > c ? s.css({
                        top: (s.height() - l) / 2 * -1
                    }) : s.css({
                        top: 0
                    })
                })
            }
            var a, r, s = $(".hpe-responsive-marquee"),
            l = 460,
            c = 26 / 9 * l,
            d = "content-wrapper-xl";
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e() {
                function e() {
                    $(".addthis_toolbox, .addthis_sharing_toolbox").hide(),
                    $(".video-overlay").on("click.removeAddthis",
                    function() {
                        $(".addthis_toolbox, .addthis_sharing_toolbox").hide()
                    })
                }
                function t() {
                    $(".addthis_toolbox, .addthis_sharing_toolbox").show(),
                    $(".video-overlay").off("click.removeAddthis")
                }
                function i() {
                    t(),
                    window.addthis.init(),
                    n.delay(function() {
                        $(".addthis_toolbox, .addthis_sharing_toolbox").find("a").attr("href", "#");
                        var e = $(".addthis_toolbox, .addthis_sharing_toolbox").find("span");
                        n.each(e,
                        function(e) {
                            var n = $(e).attr("title");
                            $(e).text(n)
                        })
                    },
                    1e3),
                    $("body").append('<style type="text/css">@-webkit-keyframes "slideInDown" {to{ +opacity:1;-webkit-transform: translateX(0px);}}.addthis-animated { -webkit-animation-duration: 0.1s; }</style>')
                }
                var o, a, r = {
                    br: {
                        id: "ra-560dae5c70461365",
                        lang: "pt"
                    },
                    cn: {
                        id: "ra-560daed6d3604aa1",
                        lang: "zh"
                    },
                    de: {
                        id: "ra-560db228427af62a",
                        lang: "de"
                    },
                    fr: {
                        id: "ra-560db1a2e92f524e",
                        lang: "fr"
                    },
                    "in": {
                        id: "ra-560db2c4d6651a08",
                        lang: "en"
                    },
                    jp: {
                        id: "ra-560db318fbdf2273",
                        lang: "ja"
                    },
                    mx: {
                        id: "ra-560db3ba9f544b93",
                        lang: "es"
                    },
                    es: {
                        id: "ra-560db4166af8bbde",
                        lang: "es"
                    },
                    uk: {
                        id: "ra-560db48d7c9e27ed",
                        lang: "en"
                    },
                    us: {
                        id: "ra-560db5184b2a9c33",
                        lang: "en"
                    },
                    notier1: {
                        id: "ra-5616e92e009d4dca",
                        lang: ""
                    }
                },
                s = $(".footer-social").attr("data-locale"),
                l = void 0 !== s ? s.slice( - 2) : "notier1",
                c = void 0 !== s ? s.substring(0, 2) : "",
                d = "//s7.addthis.com/js/300/addthis_widget.js#async=1";
                void 0 !== r[l] && c === r[l].lang ? (o = r[l].id, a = r[l].lang) : (o = r.notier1.id, a = r.notier1.lang),
                window.addthis_config = {
                    pubid: o,
                    services_exclude: "mailto,email",
                    ui_language: a
                },
                e(),
                $.getScript(d).done(function() {
                    i()
                })
            }
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n) {
    "use strict";
    var t = window.CQ;
    e.exports = function() {
        function e() {
            return s.length > 0 ? void n() : !1
        }
        function n() {
            return void 0 !== t && t.WCM.isEditMode() ? !1 : void i()
        }
        function i() {
            o(),
            c.on("resize", a.bind(this)),
            c.resize()
        }
        function o() {
            s.find(".hpe-image").length > 0 ? s.find(".hpe-image img").one("load",
            function() {
                s.matchHeight()
            }).each(function() {
                this.complete && $(this).load()
            }) : s.matchHeight()
        }
        function a() {
            window.clearTimeout(l),
            l = window.setTimeout(function() {
                r()
            },
            100)
        }
        function r() {
            o()
        }
        var s = $(".valign-txt-only"),
        l = null,
        c = $(window);
        return {
            initialize: e
        }
    } ()
},
function(e, n) {
    "use strict";
    e.exports = function(e) {
        function n() {
            var n = e(".skip-main-content");
            n.length > 0 && n.on("click onkeyup",
            function() {
                e("header .icons").find("a").first().focus()
            })
        }
        return {
            initialize: n
        }
    } (jQuery)
},
function(e, n, t) {
    "use strict";
    var i = t(1),
    o = t(60),
    a = t(20),
    r = t(12),
    s = r.hasPreferences(),
    l = !0;
    if (s) {
        var c = r.getPreferences();
        l = c[i.constants.PRIVACY_COOKIE_TYPE_ANALYTICS]
    }
    var d, u, m, f, h, p, g = {},
    v = {},
    b = window.CQ,
    y = $(document.createElement("div"));
    y.addClass("msg-required-fields");
    var w = $(document.createElement("span"));
    w.addClass("text-required-fields"),
    w.text("Please fill out all required fields."),
    y.append(w),
    e.exports = function() {
        function e() {
            window.navigator.cookieEnabled && l === !0 ? n() : (n(), $(".blocked-cookies").show())
        }
        function n() {
            return void 0 !== b && b.WCM.isEditMode() ? !1 : void w()
        }
        function t() {
            $("#db_data_container").length > 0 && ($("#country").attr("value", $("#db_registry_country").attr("value")), $("#state").attr("value", $("#db_registry_state").attr("value")), $("#town").attr("value", $("#db_registry_city").attr("value")), $("#company").attr("value", $("#db_registry_company_name").attr("value")), $("#country, #state, #town").parents(".form-group").hide(), r())
        }
        function r() {
            $("#email").change(function() {
                setTimeout(function() {
                    var e = $("#db_company_name").attr("value");
                    $("#company").attr("value", e)
                },
                1e3)
            }),
            setTimeout(function() {
                s()
            },
            1e3)
        }
        function s() {
            i.services.publish(i.constants.HIDE_SPINNER),
            $(".high-value-form.fade").addClass("in")
        }
        function c() {
            var e = a.getFormById("high-value-form-gen");
            e.validator.settings.submitHandler = function() {
                for ($("button[type=submit]").prop("disabled", !0), p = _(), "undefined" != typeof p.HPE_ELOQUA_TIMER && $("#blind_submit").attr("value", "y"), h = $("#high-value-form-gen").serialize(), h = h.split("&"), f = 0; f < h.length; f++) m = h[f].split("="),
                m.length > 1 && (v[m[0].trim()] = m[1]);
                "undefined" != typeof v["1~aid_p_email_address"] && (v["1~aid_p_email_address"] = v["1~aid_p_email_address"].replace("%40", "@")),
                o.submitEloquaInfo(v)
            }
        }
        function y() {
            $("#businessphone").change(function() {
                $("#callme").attr("value", "y"),
                $("#callme").prop("checked", !0)
            })
        }
        function w() {
            i.services.subscribe(i.constants.RESOURCES_FORM_SUBMITTED, this,
            function() {
                o.createEloquaCookie("HPE_ELOQUA_TIMER", "EloquaTimerCookie", 5),
                o.createEloquaCookie("HPE_ELOQUA_90", "EloquaTimerCookie", 129600),
                localStorage.setItem("FULL_USER", "full-high")
            }),
            x(_()),
            C(),
            c(),
            y(),
            setTimeout(function() {
                t()
            },
            4e3),
            i.services.publish(i.constants.SHOW_SPINNER)
        }
        function C() {
            $(".field-entry").find("em").on("click",
            function() {
                $(this).parent().parent().hasClass("radio-input") ? "true" !== $(this).attr("displayed") ? ("y" === $('input[name="1~aid_o_mobile"]:checked').val() ? ($(".no-mobile").hide(), $(".yes-mobile").show()) : "n" === $('input[name="1~aid_o_mobile"]:checked').val() ? ($(".yes-mobile").hide(), $(".no-mobile").show()) : ($(".yes-mobile").hide(), $(".no-mobile").show()), $(this).attr("displayed", "true")) : ($(".no-mobile").hide(), $(".yes-mobile").hide(), $(this).attr("displayed", "false")) : "true" !== $(this).attr("displayed") ? ($(this).parent().find("span").show(), $(this).attr("displayed", "true")) : ($(this).parent().find("span").hide(), $(this).attr("displayed", "false"))
            })
        }
        function _() {
            for (u = document.cookie.split(";"), f = 0; f < u.length; f++) m = u[f].split("="),
            m.length > 1 && (g[m[0].trim()] = m[1]);
            return g
        }
        function x(e) {
            "undefined" != typeof e.HPE_ELOQUA && ("undefined" != typeof e.HPE_ELOQUA_TIMER || "undefined" != typeof e.HPE_ELOQUA_90),
            "undefined" === e.HPE_ELOQUA || void 0 === e.HPE_ELOQUA ? (S(), $(".title-high-value-campaign-form").show(), B(), $(".low-value-touch-form.fade").hasClass("in") || s()) : "undefined" != typeof e.HPE_ELOQUA_90 ? "undefined" != typeof e.HPE_ELOQUA_TIMER ? O(e.HPE_ELOQUA, 1) : O(e.HPE_ELOQUA, 2) : "undefined" != typeof e.HPE_ELOQUA_TIMER ? O(e.HPE_ELOQUA, 3) : O(e.HPE_ELOQUA, 0)
        }
        function S() {
            i.services.subscribe(i.constants.RESOURCES_ELOQUA_HANDLER, this,
            function(e) {
                d = e,
                I("HPE_ELOQUA", T(d), 525600)
            }),
            o.getEloquaId("downloadForm")
        }
        function E(e) {
            void 0 !== e.contactInfo && $.each(e.contactInfo,
            function(e, n) {
                "" !== n && ("isMobile" === e && $('input[name="1~aid_o_mobile"]').parents("div.form-group").hide(), $("#" + e).parents("div.form-group").hide())
            })
        }
        function I(e, n, t, i) {
            o.createEloquaCookie(e, n, t, i)
        }
        function T(e) {
            return e.split("-").join("")
        }
        function k(e) {
            void 0 !== e.contactInfo && $.each(e.contactInfo,
            function(e) {
                "" === e && $("#" + e).parents(".form-group").remove()
            })
        }
        function P(e) {
            var n, t, i, o, a;
            if (e.status) a = !0;
            else for (o in e.contactInfo) if (e.contactInfo.hasOwnProperty(o)) if (n = $("#" + o), t = e.contactInfo[o], i = "isMobile" === o ? "radio": n.attr("type"), null !== t && void 0 !== t && t.length >= 1 || "boolean" == typeof t) switch (i) {
            case "checkbox":
                (t === !0 || "y" === t) && (n.val("y"), n.prop("checked", "checked"));
                break;
            case "radio":
                "isMobile" === o ? t === !0 || "y" === t ? ($("#yes-mobilephone").prop("checked", "checked"), $("#no-mobilephone").removeProp("checked")) : ($("#no-mobilephone").prop("checked", "checked"), $("#yes-mobilephone").removeProp("checked")) : (n.filter('[value="' + t + '"]'), n.prop("checked", "checked"));
                break;
            default:
                n.val(decodeURI(t))
            } else("lineofbusiness" !== o || "mobile" !== o) && (a = !0);
            a === !0 && B(),
            $(".low-value-touch-form.fade").hasClass("in") || s()
        }
        function O(e, n) {
            i.services.subscribe(i.constants.RESOURCES_ELOQUA_LOOKUP, this,
            function(t) {
                if ("undefined" != typeof t && 1 === n) k(t),
                A(t, e),
                B(n),
                E(t),
                P(t);
                else if ("undefined" != typeof t && 2 === n) A(t, e),
                B(n),
                E(t),
                P(t);
                else if ("undefined" != typeof t && 3 === n) A(t, e),
                B(n),
                E(t),
                P(t),
                t.contactInfo && $("#email").parent().fadeOut();
                else {
                    if ("undefined" == typeof t || 0 !== n) return ! 1;
                    A(t, e),
                    B(n),
                    P(t),
                    t.contactInfo && $("#email").parent().fadeOut()
                }
            }),
            o.getEloquaUserInfo("downloadForm")
        }
        function A(e, n) {
            var t = $(".title-high-value-form"),
            i = t.data("welcomeintro"),
            a = $(".not-you-wrapper"),
            r = a.find(".not-you");
            e.status || (e.visitorInfo.firstName ? (t.text(decodeURI(i + e.visitorInfo.firstName + " " + e.visitorInfo.lastName)), r.on("click",
            function() {
                o.deleteEloquaCookie("HPE_ELOQUA", n),
                o.deleteEloquaCookie("HPE_ELOQUA_TIMER", "EloquaTimerCookie"),
                o.deleteEloquaCookie("HPE_ELOQUA_90", "EloquaTimerCookie"),
                window.location.reload(!0)
            }), r.show()) : t.text(decodeURI(i + e.visitorInfo.email)), t.show())
        }
        function B(e) {
            switch ($(".high-value-description p").hide(), e) {
            case 0:
                $(".high-value-description .complete-profile").show();
                break;
            case 1:
                $(".high-value-description .blind-submit").show();
                break;
            case 2:
                $(".high-value-description .blind-submit").show();
                break;
            case 3:
                $(".high-value-description .incomplete-profile").show();
                break;
            default:
                $(".high-value-description .incomplete-profile").show()
            }
        }
        return {
            initialize:
            e
        }
    } ()
},
function(e, n, t) {
    "use strict";
    var i = t(1),
    o = "/services/hpe/eloqua.reset.do",
    a = "/services/hpe/eloqua.submitForm.do",
    r = "/services/hpe/eloqua.contactLookup.do";
    e.exports = function() {
        var e = function(e) {
            e && (o = o + "?origin=" + String(e)),
            i.services.define("getCookieIdCall", "ajax", {
                url: o,
                type: "GET",
                dataType: "json"
            }),
            i.services.request("getCookieIdCall",
            function(e) {
                i.services.publish(i.constants.RESOURCES_ELOQUA_HANDLER, e.cookieId)
            })
        },
        n = function(e, n, t, i) {
            var o = new Date;
            e && (e = String(e) + "="),
            n && (n = String(n) + ";"),
            t && (o.setTime(o.getTime() + 6e4 * t), t = "expires=" + o.toGMTString() + ";"),
            i = i ? "path=" + String(i) + ";": "path=/;",
            document.cookie = e + n + t + i
        },
        t = function(e, n) {
            e = String(e) + "=",
            n = String(n) + ";";
            var t = new Date;
            t.setTime(t.getTime() - 10),
            document.cookie = e + n + "expires=" + t.toGMTString() + ";path=/;"
        },
        s = function(e, n, t) {
            i.services.publish(i.constants.SHOW_SPINNER),
            i.services.api.request.define("postFormValues", "ajax", {
                url: a,
                type: "POST"
            }),
            i.services.api.request("postFormValues", e,
            function() {
                i.services.publish(i.constants.HIDE_SPINNER),
                "contactUs" !== t ? n ? i.services.publish(i.constants.RESOURCES_FORM_SUBMITTED, !0) : i.services.publish(i.constants.RESOURCES_FORM_SUBMITTED, !1) : i.services.publish(i.constants.RESOURCES_FORM_SUBMITTED_CONTACT_US, !1)
            })
        },
        l = function(e) {
            e && (r = r + "?origin=" + String(e)),
            i.services.api.request.define("getContactInfo", "ajax", {
                url: r,
                type: "GET",
                dataType: "json"
            }),
            i.services.api.request("getContactInfo",
            function(n) {
                null !== n && ("contactUsForm" === e ? i.services.publish(i.constants.RESOURCES_ELOQUA_LOOKUP_CONTACT_US, n) : i.services.publish(i.constants.RESOURCES_ELOQUA_LOOKUP, n))
            })
        };
        return {
            getEloquaId: e,
            createEloquaCookie: n,
            deleteEloquaCookie: t,
            submitEloquaInfo: s,
            getEloquaUserInfo: l
        }
    } ()
},
function(e, n, t) { (function(n) {
        "use strict";
        e.exports = function() {
            function e(e) {
                e.length > 0 && n.each(e,
                function(e) {
                    $(e).find(".tile").on("click", t)
                })
            }
            function t(e) {
                var n = $(this).find(".tile-cta");
                n.is($(e.target)) || n[0].click()
            }
            return {
                initialize: e
            }
        } ()
    }).call(n, t(10))
},
function(e, n, t) { (function(n, i) {
        "use strict";
        e.exports = function() {
            function e() {
                m.log.log("Featured Marquee: init"),
                d = $(window),
                l = $(".hpe-featured-marquee"),
                o(),
                d.resize()
            }
            function o() {
                d.resize(function() {
                    clearTimeout(c),
                    c = setTimeout(a, m.constants.CONFIG_WINDOW_DEBOUNCE)
                }),
                d.on("hpe.breakpointinit", r),
                d.on("hpe.breakpointchange", r),
                l.on("click", ".down-arrow a", s),
                n.video && (l.each(function() {
                    var e = $(this);
                    e.data("vid", e.find("video")[0])
                }), l.find(".play-button").on("click",
                function(e) {
                    $(e.target).closest(".hpe-featured-marquee").data("vid").pause()
                }), l.on("stopLoop",
                function() {
                    $(this).data("vid").pause()
                }), l.on("startLoop",
                function() {
                    $(this).data("vid").play()
                }))
            }
            function a() {
                u = window.innerWidth || document.body.clientWidth;
                var e, n, t;
                i.each(l,
                function(i) {
                    e = $(i),
                    t = e.find("video"),
                    n = (e.find(".aspect-ratio").innerHeight() - t.innerHeight()) / 2,
                    t[0].style.top = 1200 > u ? 0 : n
                })
            }
            function r() {
                h = f.current(),
                n.video && i.each(l,
                function(e) {
                    var n = $(e);
                    "xs" === h ? n.data("vid").pause() : (n.data("vid").pause(), n.data("vid").play())
                })
            }
            function s(e) {
                e.preventDefault();
                var n = $(e.currentTarget).closest(".hpe-featured-marquee").outerHeight();
                $("html, body").animate({
                    scrollTop: n
                },
                {
                    duration: 400
                })
            }
            var l, c, d, u, m = t(1),
            f = t(14),
            h = f.current();
            return {
                initialize: e
            }
        } ()
    }).call(n, t(21), t(10))
},
function(e, n, t) {
    "use strict";
    var i = window.CQ,
    o = t(60),
    a = t(20),
    r = t(1),
    s = t(12),
    l = s.hasPreferences(),
    c = !0;
    if (l) {
        var d = s.getPreferences();
        c = d[r.constants.PRIVACY_COOKIE_TYPE_ANALYTICS]
    }
    var u, m, f, h, p, g, v = {},
    b = {};
    e.exports = function() {
        function e() {
            window.navigator.cookieEnabled && c === !0 ? n() : (n(), $(".blocked-cookies").show())
        }
        function n() {
            return void 0 !== i && i.WCM.isEditMode() ? !1 : void B()
        }
        function t() {
            $("#db_data_container").length > 0 && ($("#country").attr("value", $("#db_registry_country").attr("value")), $("#state").attr("value", $("#db_registry_state").attr("value")), $("#town").attr("value", $("#db_registry_city").attr("value")), $("#company").attr("value", $("#db_registry_company_name").attr("value")), $("#country, #state, #town").parents(".form-group").fadeOut(), s())
        }
        function s() {
            $("#email").change(function() {
                setTimeout(function() {
                    var e = $("#db_company_name").attr("value");
                    $("#company").attr("value", e)
                },
                1e3)
            }),
            setTimeout(function() {
                l()
            },
            1e3)
        }
        function l() {
            r.services.publish(r.constants.HIDE_SPINNER),
            $(".low-value-campaign-form.fade").addClass("in")
        }
        function d(e) {
            "undefined" === e.HPE_ELOQUA || void 0 === e.HPE_ELOQUA ? (C(), k(), l()) : "undefined" != typeof e.HPE_ELOQUA_90 ? "undefined" != typeof e.HPE_ELOQUA_TIMER ? _(e.HPE_ELOQUA, 1) : _(e.HPE_ELOQUA, 2) : "undefined" != typeof e.HPE_ELOQUA_TIMER ? _(e.HPE_ELOQUA, 3) : _(e.HPE_ELOQUA, 0)
        }
        function y() {
            for (u = document.cookie.split(";"), f = 0; f < u.length; f++) m = u[f].split("="),
            m.length > 1 && (v[m[0].trim()] = m[1]);
            return v
        }
        function w(e, n, t, i) {
            o.createEloquaCookie(e, n, t, i)
        }
        function C() {
            r.services.subscribe(r.constants.RESOURCES_ELOQUA_HANDLER, this,
            function(e) {
                p = e,
                w("HPE_ELOQUA", I(p), 525600)
            }),
            o.getEloquaId("downloadForm")
        }
        function _(e, n) {
            r.services.subscribe(r.constants.RESOURCES_ELOQUA_LOOKUP, this,
            function(t) {
                if ("undefined" != typeof t && 1 === n) S(t),
                T(t, e),
                k(n),
                x(t),
                E(t);
                else if ("undefined" != typeof t && 2 === n) T(t, e),
                k(n),
                x(t),
                E(t);
                else if ("undefined" != typeof t && 3 === n) T(t, e),
                k(n),
                x(t),
                E(t),
                t.contactInfo && $("#email").parent().fadeOut();
                else {
                    if ("undefined" == typeof t || 0 !== n) return ! 1;
                    T(t, e),
                    k(n),
                    E(t),
                    t.contactInfo && $("#email").parent().fadeOut()
                }
            }),
            o.getEloquaUserInfo("downloadForm")
        }
        function x(e) {
            void 0 !== e.contactInfo && $.each(e.contactInfo,
            function(e, n) {
                "" !== n && ("isMobile" === e && $('input[name="1~aid_o_mobile"]').parents("div.form-group").fadeOut(), $("#" + e).parents("div.form-group").fadeOut())
            })
        }
        function S(e) {
            void 0 !== e.contactInfo && $.each(e.contactInfo,
            function(e) {
                "" === e && ("isMobile" === e && $('input[name="1~aid_o_mobile"]').parents("div.form-group").fadeOut(), $("#" + e).parents(".form-group").remove())
            })
        }
        function E(e) {
            var n, t, i, o, a;
            if (e.status) a = !0;
            else for (o in e.contactInfo) if (e.contactInfo.hasOwnProperty(o)) if (n = $("#" + o), t = e.contactInfo[o], i = "isMobile" === o ? "radio": n.attr("type"), null !== t && void 0 !== t && t.length >= 1 || "boolean" == typeof t) switch (i) {
            case "checkbox":
                (t === !0 || "y" === t) && (n.val("y"), n.prop("checked", "checked"));
                break;
            case "radio":
                "isMobile" === o && (t === !0 || "y" === t ? ($("#yes-mobilephone").prop("checked", "checked"), $("#no-mobilephone").removeProp("checked")) : ($("#no-mobilephone").prop("checked", "checked"), $("#yes-mobilephone").removeProp("checked")));
                break;
            default:
                n.val(decodeURI(t))
            } else "mobile" !== o && (a = !0);
            a === !0 && k(),
            $(".low-value-touch-form.fade").hasClass("in") || l()
        }
        function I(e) {
            return e.split("-").join("")
        }
        function T(e, n) {
            var t = $(".title-low-value-campaign-form"),
            i = t.data("welcomeintro"),
            a = $(".not-you-wrapper"),
            r = a.find(".not-you");
            e.status || (e.visitorInfo.firstName ? (t.text(decodeURI(i + e.visitorInfo.firstName + " " + e.visitorInfo.lastName)), r.on("click",
            function() {
                o.deleteEloquaCookie("HPE_ELOQUA", n),
                o.deleteEloquaCookie("HPE_ELOQUA_TIMER", "EloquaTimerCookie"),
                o.deleteEloquaCookie("HPE_ELOQUA_90", "EloquaTimerCookie"),
                window.location.reload(!0)
            }), r.show()) : t.text(decodeURI(i + e.visitorInfo.email)), t.show())
        }
        function k(e) {
            switch ($(".low-value-campaign-description p").hide(), e) {
            case 0:
                $(".low-value-campaign-description .complete-profile").fadeIn();
                break;
            case 1:
                $(".low-value-campaign-description .blind-submit").fadeIn();
                break;
            case 2:
                $(".low-value-campaign-description .blind-submit").fadeIn();
                break;
            case 3:
                $(".low-value-campaign-description .incomplete-profile").fadeIn();
                break;
            default:
                $(".low-value-campaign-description .incomplete-profile").fadeIn()
            }
        }
        function P() {
            $(".field-entry").find("em").on("click",
            function() {
                $(this).parent().parent().hasClass("radio-input") ? "true" !== $(this).attr("displayed") ? ("y" === $('input[name="1~aid_o_mobile"]:checked').val() ? ($(".no-mobile").hide(), $(".yes-mobile").show()) : "n" === $('input[name="1~aid_o_mobile"]:checked').val() ? ($(".yes-mobile").hide(), $(".no-mobile").show()) : ($(".yes-mobile").hide(), $(".no-mobile").show()), $(this).attr("displayed", "true")) : ($(".no-mobile").hide(), $(".yes-mobile").hide(), $(this).attr("displayed", "false")) : "true" !== $(this).attr("displayed") ? ($(this).parent().find("span").show(), $(this).attr("displayed", "true")) : ($(this).parent().find("span").hide(), $(this).attr("displayed", "false"))
            })
        }
        function O() {
            var e = a.getFormById("low-value-campaign-form-gen");
            e.validator.settings.submitHandler = function() {
                for ($("button[type=submit]").prop("disabled", !0), g = y(), "undefined" != typeof g.HPE_ELOQUA_TIMER && $("#blind_submit").attr("value", "y"), h = $("#low-value-campaign-form-gen").serialize(), h = h.split("&"), f = 0; f < h.length; f++) m = h[f].split("="),
                m.length > 1 && (b[m[0].trim()] = m[1]);
                "undefined" != typeof b["1~aid_p_email_address"] && (b["1~aid_p_email_address"] = b["1~aid_p_email_address"].replace("%40", "@")),
                r.services.subscribe(r.constants.RESOURCES_FORM_SUBMITTED, this,
                function() {
                    o.createEloquaCookie("HPE_ELOQUA_TIMER", "EloquaTimerCookie", 5),
                    o.createEloquaCookie("HPE_ELOQUA_90", "EloquaTimerCookie", 129600)
                }),
                o.submitEloquaInfo(b)
            }
        }
        function A() {
            $("#businessphone").change(function() {
                $("#callme").attr("value", "y"),
                $("#callme").prop("checked", !0)
            })
        }
        function B() {
            P(),
            O(),
            A(),
            d(y()),
            setTimeout(function() {
                t()
            },
            4e3),
            r.services.publish(r.constants.SHOW_SPINNER)
        }
        return {
            initialize: e
        }
    } ()
},
function(e, n, t) {
    "use strict";
    var i = window.CQ,
    o = t(60),
    a = t(20),
    r = t(1),
    s = t(12),
    l = s.hasPreferences(),
    c = !0;
    if (l) {
        var d = s.getPreferences();
        c = d[r.constants.PRIVACY_COOKIE_TYPE_ANALYTICS]
    }
    var u, m, f, h, p, g, v = {},
    b = {},
    y = $("#elqLanguageCode").val(),
    w = $(document.createElement("div"));
    w.addClass("additionalGrouped");
    var C = {
        one: {
            email: 1,
            permissionemail: 1,
            callme: 1,
            additionals: {
                firstname: 1,
                lastname: 1,
                company: 1,
                country: 1,
                businessphone: 1,
                "yes-mobilephone": 1,
                "no-mobilephone": 1
            },
            additionalsja: {
                lastname: 1,
                firstname: 1,
                company: 1,
                country: 1,
                businessphone: 1,
                "yes-mobilephone": 1,
                "no-mobilephone": 1
            }
        },
        two: {
            email: 1,
            firstname: 1,
            lastname: 1,
            company: 1,
            lineofbusiness: 1,
            country: 1,
            state: 1,
            town: 1,
            callme: 1,
            additionals: {
                businessphone: 1,
                "yes-mobilephone": 1,
                "no-mobilephone": 1
            }
        },
        three: {
            email: 1,
            joblevel: 1,
            businessphone: 1,
            "yes-mobilephone": 1,
            "no-mobilephone": 1,
            callpermission: 1
        }
    },
    _ = ["firstname", "lastname", "email", "company", "lineofbusiness", "country", "state", "town", "joblevel", "businessphone", "yes-mobilephone", "no-mobilephone", "callme", "callpermission"];
    e.exports = function() {
        function e() {
            window.navigator.cookieEnabled && c === !0 ? n() : (H(), q(), $("#callme").parents(".form-group").hide(), $(".blocked-cookies").show())
        }
        function n() {
            return void 0 !== i && i.WCM.isEditMode() ? !1 : void F()
        }
        function t() {
            $("#db_data_container").length > 0 && ($("#country").attr("value", $("#db_registry_country").attr("value")), $("#state").attr("value", $("#db_registry_state").attr("value")), $("#town").attr("value", $("#db_registry_city").attr("value")), $("#company").attr("value", $("#db_company_name").attr("value")), $("#company").attr("value", $("#db_registry_company_name").attr("value")), $("#country, #state, #town").parents(".form-group").hide(), s()),
            $(".low-value-touch-form.fade").hasClass("in") || l()
        }
        function s() {
            $("#email").change(function() {
                setTimeout(function() {
                    var e = $("#db_company_name").attr("value");
                    $("#company").attr("value", e)
                },
                1e3)
            })
        }
        function l() {
            r.services.publish(r.constants.HIDE_SPINNER),
            $(".low-value-touch-form.fade").addClass("in")
        }
        function d(e) {
            "undefined" === e.HPE_ELOQUA || void 0 === e.HPE_ELOQUA ? (E(), z()) : "undefined" != typeof e.HPE_ELOQUA_TIMER ? I(e.HPE_ELOQUA, 1) : "undefined" != typeof e.HPE_ELOQUA_90 ? I(e.HPE_ELOQUA, 4) : I(e.HPE_ELOQUA, 5)
        }
        function x() {
            for (u = document.cookie.split(";"), f = 0; f < u.length; f++) m = u[f].split("="),
            m.length > 1 && (v[m[0].trim()] = m[1]);
            return v
        }
        function S(e, n, t, i) {
            o.createEloquaCookie(e, n, t, i)
        }
        function E() {
            r.services.subscribe(r.constants.RESOURCES_ELOQUA_HANDLER, this,
            function(e) {
                p = e,
                S("HPE_ELOQUA", O(p), 525600)
            }),
            o.getEloquaId("downloadForm")
        }
        function I(e, n) {
            r.services.subscribe(r.constants.RESOURCES_ELOQUA_LOOKUP, this,
            function(t) {
                if ("undefined" != typeof t) switch (n) {
                case 1:
                    k(t),
                    P(t),
                    T(t, !0),
                    A(t, e),
                    B(n);
                    break;
                case 2:
                    T(t),
                    l();
                    break;
                case 3:
                    P(t),
                    t.contactInfo && $("#email").parent().fadeOut();
                    break;
                case 4:
                    B(n),
                    P(t),
                    T(t),
                    A(t, e);
                    break;
                case 5:
                    A(t, e),
                    B(n),
                    P(t),
                    z(t),
                    t.contactInfo && $("#email").parent().fadeOut()
                }
            }),
            o.getEloquaUserInfo("downloadForm")
        }
        function T(e, n) {
            n ? ($(".low-value-touch-form .field-entry.form-group").hide(), $(".low-value-touch-form .text-field-group.form-group").hide()) : void 0 !== e.contactInfo && $.each(e.contactInfo,
            function(e, n) {
                "" !== n && "callme" !== e ? $("#" + e).parents("div.form-group").hide() : "callme" === e && n === !0 && ($("#callme").val("y").prop("checked", "checked"), $("#" + e).parents("div.form-group").hide()),
                "businessphone" === e && "" !== n && $('input[name="1~aid_o_mobile"]').parents(".form-group").hide()
            })
        }
        function k(e) {
            void 0 !== e.contactInfo && $.each(e.contactInfo,
            function(e, n) {
                "" === n && $("#" + e).parents(".form-group").remove()
            })
        }
        function P(e) {
            var n, t, i, o, a;
            if (e.status) a = !0;
            else for (o in e.contactInfo) if (e.contactInfo.hasOwnProperty(o)) if (n = $("#" + o), t = e.contactInfo[o], i = "isMobile" === o ? "radio": n.attr("type"), null !== t && void 0 !== t && t.length >= 1 || "boolean" == typeof t) switch (i) {
            case "checkbox":
                (t === !0 || "y" === t) && (n.val("y"), n.prop("checked", "checked"));
                break;
            case "radio":
                "isMobile" === o ? t === !0 || "y" === t ? ($("#yes-mobilephone").prop("checked", "checked"), $("#no-mobilephone").removeProp("checked")) : ($("#no-mobilephone").prop("checked", "checked"), $("#yes-mobilephone").removeProp("checked")) : (n.filter('[value="' + t + '"]'), n.prop("checked", "checked"));
                break;
            default:
                n.val(decodeURI(t))
            } else "mobile" !== o && (a = !0);
            a === !0 && B()
        }
        function O(e) {
            return e.split("-").join("")
        }
        function A(e, n) {
            var t = $(".title-low-value-touch-form"),
            i = t.data("welcomeintro"),
            a = $(".not-you-wrapper"),
            r = a.find(".not-you");
            e.status || (e.visitorInfo.firstName ? (t.text(decodeURI(i + e.visitorInfo.firstName + " " + e.visitorInfo.lastName)), r.on("click",
            function() {
                o.deleteEloquaCookie("HPE_ELOQUA", n),
                o.deleteEloquaCookie("HPE_ELOQUA_TIMER", "EloquaTimerCookie"),
                o.deleteEloquaCookie("HPE_ELOQUA_90", "EloquaTimerCookie"),
                window.location.reload(!0)
            }), r.show()) : (t.text(i + decodeURI(e.visitorInfo.email)), r.on("click",
            function() {
                o.deleteEloquaCookie("HPE_ELOQUA", n),
                o.deleteEloquaCookie("HPE_ELOQUA_TIMER", "EloquaTimerCookie"),
                o.deleteEloquaCookie("HPE_ELOQUA_90", "EloquaTimerCookie"),
                window.location.reload(!0)
            }), r.show()), t.show())
        }
        function B(e) {
            switch ($(".low-value-touch-description p").hide(), e) {
            case 1:
                $(".low-value-touch-description .blind-submit").show();
                break;
            case 2:
                $(".low-value-touch-description .blind-submit").show();
                break;
            case 3:
                $(".low-value-touch-description .incomplete-profile").show();
                break;
            case 4:
                $(".low-value-touch-description .blind-submit").show();
                break;
            case 5:
                $(".low-value-touch-description .complete-profile").show();
                break;
            default:
                $(".low-value-touch-description .incomplete-profile").show()
            }
        }
        function R() {
            $(".field-entry").find("em").on("click",
            function() {
                $(this).parent().parent().hasClass("radio-input") ? "true" !== $(this).attr("displayed") ? ("y" === $('input[name="1~aid_o_mobile"]:checked').val() ? ($(".no-mobile").hide(), $(".yes-mobile").show()) : "n" === $('input[name="1~aid_o_mobile"]:checked').val() ? ($(".yes-mobile").hide(), $(".no-mobile").show()) : ($(".yes-mobile").hide(), $(".no-mobile").show()), $(this).attr("displayed", "true")) : ($(".no-mobile").hide(), $(".yes-mobile").hide(), $(this).attr("displayed", "false")) : "true" !== $(this).attr("displayed") ? ($(this).parent().find("span").show(), $(this).attr("displayed", "true")) : ($(this).parent().find("span").hide(), $(this).attr("displayed", "false"))
            })
        }
        function D() {
            var e = a.getFormById("low-value-touch-form-gen");
            e.validator.settings.submitHandler = function() {
                for ($("button[type=submit]").prop("disabled", !0), g = x(), ("undefined" != typeof g.HPE_ELOQUA_TIMER || "undefined" != typeof g.HPE_ELOQUA_90) && $("#blind_submit").attr("value", "y"), h = $("#low-value-touch-form-gen").serialize(), h = h.split("&"), f = 0; f < h.length; f++) m = h[f].split("="),
                m.length > 1 && (b[m[0].trim()] = m[1]);
                "undefined" != typeof b["1~aid_p_email_address"] && (b["1~aid_p_email_address"] = b["1~aid_p_email_address"].replace("%40", "@")),
                r.services.subscribe(r.constants.RESOURCES_FORM_SUBMITTED, this,
                function(e) {
                    o.createEloquaCookie("HPE_ELOQUA_TIMER", "EloquaTimerCookie", 60),
                    e === !0 && o.createEloquaCookie("HPE_ELOQUA_90", "EloquaTimerCookie", 129600)
                }),
                "undefined" != typeof b["1~aid_p_job_level"] ? o.submitEloquaInfo(b, !0) : o.submitEloquaInfo(b)
            }
        }
        function M(e) {
            var n;
            n = "ja" === y ? C[e].additionalsja: C[e].additionals,
            $.each(n,
            function(e) {
                w.append($("#" + e).parents(".form-group"))
            })
        }
        function L() {
            $("#callme").change(function() {
                this.checked ? (w.insertAfter(".hidden-form-values"), $(this).attr("additional-fields", "true"), setTimeout(function() {
                    t()
                },
                2e3)) : ($(".additionalGrouped").remove(), $(this).attr("additional-fields", "false"))
            })
        }
        function z(e) {
            e && e.contactInfo ? "" === e.contactInfo.lineofbusiness ? ($("#email").parents(".form-group").hide(), M("two"), L(), N(e, "two")) : "" === e.contactInfo.joblevel && ($("#callme").parents(".form-group").hide(), $("#email").parents(".form-group").hide(), N(e, "three"), $(".low-value-touch-description").show(), $("#callpermission").parents(".form-group").show()) : (M("one"), L(), N(void 0, "one"))
        }
        function N(e, n) {
            "undefined" != typeof e ? (P(e), T(e), $.each(e.contactInfo,
            function(e) {
                e in C[n] || "email" === e || "callme" === e || ("two" === n ? "mobile" !== e && $("#" + e).parents(".form-group").remove() : $("#" + e).parents(".form-group").remove())
            })) : $.each(_,
            function(e, t) {
                t in C[n] || $("#" + t).parents(".form-group").remove()
            }),
            "two" === n && ($("#businessphone").parents(".form-group").remove(), $(".low-value-touch-description p").hide()),
            "three" === n && ($("#email").parents(".form-group").hide(), q())
        }
        function q() {
            $("#businessphone").change(function() {
                $("#callme").attr("value", "y"),
                $("#callme").prop("checked", !0)
            })
        }
        function F() {
            r.services.publish(r.constants.SHOW_SPINNER),
            R(),
            D(),
            q(),
            d(x()),
            setTimeout(function() {
                t()
            },
            4e3)
        }
        function H() {
            r.services.publish(r.constants.SHOW_SPINNER),
            R(),
            D(),
            B(),
            setTimeout(function() {
                t(),
                l()
            },
            4e3)
        }
        return {
            initialize: e
        }
    } ()
},
, , , , , , ,
function(e, n, t) {
    "use strict";
    t(29),
    t(31),
    e.exports = function() {
        function e() {
            "xs" === s.current() ? n() : parseInt(c.length / 2, 10) !== c.length / 2 && (a = 6 - c.length, r = "col-sm-offset-" + a, c.eq(0).addClass(r)),
            4 === c.length ? c.eq(0).addClass("col-sm-offset-2") : 2 === c.length && c.eq(0).addClass("col-sm-offset-4"),
            $(window).on("hpe.breakpointchange", i)
        }
        function n() {
            o = l.mCustomScrollbar({
                axis: "x",
                mouseWheel: {
                    enable: !1
                },
                advanced: {
                    autoExpandHorizontalScroll: !0
                }
            })
        }
        function i() {
            "undefined" != typeof o && l.mCustomScrollbar("destroy"),
            "xs" === s.current() && n()
        }
        var o, a, r, s = t(14),
        l = $(".customer-blade .slider-wrapper"),
        c = l.find("li");
        return {
            initialize: e
        }
    } ()
}]);