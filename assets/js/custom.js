/*global $*/
var PageTransitions = jQuery(function(e) { var t = e("#pt-main").find("section.pt-page"),
        a = 1,
        o = 0,
        p = 0,
        r = "",
        g = !1,
        i = ".page-right",
        n = "#splitlayout",
        s = ".home_type",
        m = ".pt-page-current",
        l = !1,
        c = !1,
        h = !1,
        d = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd", msAnimation: "MSAnimationEnd", animation: "animationend" }[Modernizr.prefixed("animation")],
        u = Modernizr.cssanimations;

    function f() {
        function p() { e(n).addClass("open-right").removeClass("close-right") }

        function c() { e(n).removeClass("open-right").addClass("close-right reset-layout"), setTimeout(function() { e("section.pt-page.pt-page-current").scrollTop(0) }, 700) }

        function h() { return Modernizr.mq("(max-width: 991px)") ? "mobile_screen" : "not_mobile_screen" }

        function d(t, a = !1, o = !0) { e('#menu a[href="' + t + '"]').addClass("active_item").parents("li").siblings().find("a").removeClass("active_item"), o && (a ? r = setTimeout(function() { window.location.hash = t }, 600) : window.location.hash = t) }
        t.each(function() { var t = e(this);
                t.data("originalClassList", t.attr("class")) }), h(),
            function() { e(".front_home").length && d("#home", !1, !1); var t = window.location.hash; if ("#home" != t && "" != t) { if (!e("section" + t).length) return; if ("mobile_screen" === h()) { if (o = e(t).index(), e(m).index() == o) return; if (e(i).removeClass("page-right-zero-height").addClass("page-right-normal-height"), g = !0, e(s).fadeOut(), p(), l) return !1;
                        a > 63 && (a = 1), v(a), ++a } else p(), e(t).addClass("pt-page-current").siblings().removeClass("pt-page-current");
                    d(t) } }(), e(window).on("hashchange", function() { var t = window.location.hash;
                clearTimeout(r), t && e('#menu a[href="' + t + '"]').trigger("click") }), e(window).on("resize", function() { e(i).removeClass("page-right-zero-height").addClass("page-right-normal-height"), "mobile_screen" === h() && (e("[href='#home']").hasClass("active_item") || 0 == e(".active_item").length ? e(s).fadeIn() : e(s).fadeOut()) }), e(".pt-page").length ? g || e(i).addClass("page-right-zero-height").removeClass("page-right-normal-height") : e(i).removeClass("page-right-zero-height").addClass("page-right-normal-height"), e(document).on("click", "#menu a:not(.single),.goToSec", function(t) { t.preventDefault(); var r, g = e(this).attr("href"); if ("mobile_screen" === h())
                    if ("#home" === g) d(g), e(s).fadeIn(), e(i).addClass("page-right-zero-height").removeClass("page-right-normal-height"), c(), 0 !== (r = e(".fit__text")).length && r.fitText(1, { maxFontSize: 62 });
                    else { if (o = e(g).index(), e("[href='#home']").hasClass("active_item") && e(m).index() == o) return e(i).removeClass("page-right-zero-height").addClass("page-right-normal-height"), e(s).fadeOut(), p(), void d(g); if (e(m).index() == o) return e(i).removeClass("page-right-zero-height").addClass("page-right-normal-height"), e(s).fadeOut(), void d(g); if (e(i).removeClass("page-right-zero-height").addClass("page-right-normal-height"), e(s).fadeOut(), p(), l) return !1;
                        d(g), a > 63 && (a = 1), v(a), ++a }
                else if ("#home" === g) c(), d(g, !0);
                else if (e(".open-right").length) { if (o = e(g).index(), e(m).index() == o) return; if (l) return !1;
                    d(g), a > 53 && (a = 1), v(a), ++a } else p(), e(g).addClass("pt-page-current").siblings().removeClass("pt-page-current"), d(g, !0) }) }

    function v(r) { r.animation && r.animation; if (l) return !1;
        l = !0, e("html").addClass("animating"), e(m).length || t.eq(p).addClass("pt-page-current"); var g = e(m),
            i = t.eq(o).addClass("pt-page-current"),
            n = "",
            s = ""; switch (a) {
            case 1:
                n = "pt-page-scaleDown", s = "pt-page-moveFromRight pt-page-ontop"; break;
            case 2:
                n = "pt-page-scaleDown", s = "pt-page-moveFromLeft pt-page-ontop"; break;
            case 3:
                n = "pt-page-scaleDown", s = "pt-page-moveFromBottom pt-page-ontop"; break;
            case 4:
                n = "pt-page-scaleDown", s = "pt-page-scaleUpDown pt-page-delay300"; break;
            case 5:
                n = "pt-page-scaleDownUp", s = "pt-page-scaleUp pt-page-delay300"; break;
            case 6:
                n = "pt-page-moveToLeft pt-page-ontop", s = "pt-page-scaleUp"; break;
            case 7:
                n = "pt-page-moveToRight pt-page-ontop", s = "pt-page-scaleUp"; break;
            case 8:
                n = "pt-page-moveToBottom pt-page-ontop", s = "pt-page-scaleUp"; break;
            case 9:
                n = "pt-page-scaleDownCenter", s = "pt-page-scaleUpCenter pt-page-delay400"; break;
            case 10:
                n = "pt-page-rotateRightSideFirst", s = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop"; break;
            case 11:
                n = "pt-page-rotateLeftSideFirst", s = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop"; break;
            case 12:
                n = "pt-page-rotateTopSideFirst", s = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop"; break;
            case 13:
                n = "pt-page-rotateBottomSideFirst", s = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop"; break;
            case 14:
                n = "pt-page-flipOutTop", s = "pt-page-flipInBottom pt-page-delay500"; break;
            case 15:
                n = "pt-page-flipOutBottom", s = "pt-page-flipInTop pt-page-delay500"; break;
            case 16:
                n = "pt-page-rotatePushLeft", s = "pt-page-moveFromRight"; break;
            case 17:
                n = "pt-page-rotatePushRight", s = "pt-page-moveFromLeft"; break;
            case 18:
                n = "pt-page-rotatePushTop", s = "pt-page-moveFromBottom"; break;
            case 19:
                n = "pt-page-rotatePushBottom", s = "pt-page-moveFromTop"; break;
            case 20:
                n = "pt-page-rotatePushLeft", s = "pt-page-rotatePullRight pt-page-delay180"; break;
            case 21:
                n = "pt-page-rotatePushRight", s = "pt-page-rotatePullLeft pt-page-delay180"; break;
            case 22:
                n = "pt-page-rotatePushTop", s = "pt-page-rotatePullBottom pt-page-delay180"; break;
            case 23:
                n = "pt-page-rotatePushBottom", s = "pt-page-rotatePullTop pt-page-delay180"; break;
            case 24:
                n = "pt-page-rotateFoldLeft", s = "pt-page-moveFromRightFade"; break;
            case 25:
                n = "pt-page-rotateFoldRight", s = "pt-page-moveFromLeftFade"; break;
            case 26:
                n = "pt-page-rotateFoldTop", s = "pt-page-moveFromBottomFade"; break;
            case 27:
                n = "pt-page-rotateFoldBottom", s = "pt-page-moveFromTopFade"; break;
            case 28:
                n = "pt-page-moveToRightFade", s = "pt-page-rotateUnfoldLeft"; break;
            case 29:
                n = "pt-page-moveToLeftFade", s = "pt-page-rotateUnfoldRight"; break;
            case 30:
                n = "pt-page-moveToBottomFade", s = "pt-page-rotateUnfoldTop"; break;
            case 31:
                n = "pt-page-moveToTopFade", s = "pt-page-rotateUnfoldBottom"; break;
            case 32:
                n = "pt-page-rotateRoomLeftOut pt-page-ontop", s = "pt-page-rotateRoomLeftIn"; break;
            case 33:
                n = "pt-page-rotateRoomRightOut pt-page-ontop", s = "pt-page-rotateRoomRightIn"; break;
            case 34:
                n = "pt-page-rotateRoomTopOut pt-page-ontop", s = "pt-page-rotateRoomTopIn"; break;
            case 35:
                n = "pt-page-rotateRoomBottomOut pt-page-ontop", s = "pt-page-rotateRoomBottomIn"; break;
            case 36:
                n = "pt-page-rotateCubeLeftOut pt-page-ontop", s = "pt-page-rotateCubeLeftIn"; break;
            case 37:
                n = "pt-page-rotateCubeRightOut pt-page-ontop", s = "pt-page-rotateCubeRightIn"; break;
            case 38:
                n = "pt-page-rotateCubeTopOut pt-page-ontop", s = "pt-page-rotateCubeTopIn"; break;
            case 39:
                n = "pt-page-rotateCubeBottomOut pt-page-ontop", s = "pt-page-rotateCubeBottomIn"; break;
            case 40:
                n = "pt-page-rotateSidesOut", s = "pt-page-rotateSidesIn pt-page-delay200"; break;
            case 41:
                n = "pt-page-rotateSlideOut", s = "pt-page-rotateSlideIn"; break;
            case 42:
                n = "pt-page-moveToLeft", s = "pt-page-moveFromRight"; break;
            case 43:
                n = "pt-page-moveToRight", s = "pt-page-moveFromLeft"; break;
            case 44:
                n = "pt-page-moveToTop", s = "pt-page-moveFromBottom"; break;
            case 45:
                n = "pt-page-moveToBottom", s = "pt-page-moveFromTop"; break;
            case 46:
                n = "pt-page-moveToLeftFade", s = "pt-page-moveFromRightFade"; break;
            case 47:
                n = "pt-page-moveToRightFade", s = "pt-page-moveFromLeftFade"; break;
            case 48:
                n = "pt-page-moveToTopFade", s = "pt-page-moveFromBottomFade"; break;
            case 49:
                n = "pt-page-moveToBottomFade", s = "pt-page-moveFromTopFade"; break;
            case 50:
                n = "pt-page-moveToLeftEasing pt-page-ontop", s = "pt-page-moveFromRight"; break;
            case 51:
                n = "pt-page-moveToRightEasing pt-page-ontop", s = "pt-page-moveFromLeft"; break;
            case 52:
                n = "pt-page-moveToTopEasing pt-page-ontop", s = "pt-page-moveFromBottom"; break;
            case 53:
                n = "pt-page-moveToBottomEasing pt-page-ontop", s = "pt-page-moveFromTop" }
        g.addClass(n).on(d, function() { g.off(d), c = !0, h && b(g, i) }), i.addClass(s).on(d, function() { i.off(d), h = !0, c && b(g, i) }), u || b(g, i) }

    function b(t, a) { c = !1, h = !1,
            function(e, t) { e.attr("class", e.data("originalClassList")), t.attr("class", t.data("originalClassList") + " pt-page-current") }(t, a), e("html").removeClass("animating"), e("section.pt-page:not(.pt-page-current)").each(function() { e(this).scrollTop(0) }), l = !1 } return f(), { init: f, nextPage: v } });
jQuery(function(e) { "use strict"; var t = e(".grid");
    e(".blog-grid");
    e(window).on("load", function() { setTimeout(function() { e(".startLoad").fadeOut("slow") }, 600), t.length && t.isotope({ itemSelector: ".grid-item", percentPosition: !0, masonry: { columnWidth: ".grid-item:first-of-type" } }) }), e(".ul-filter li").on("click", function() { var o = e(this).attr("data-filter");
        e(this).addClass("active_filter").siblings().removeClass("active_filter"), t.isotope({ filter: o }) });

    function o(t) { e(t).length && e(t).height(e(window).height()) } if (o(".full-height"), e(".mob-menu .navbar-toggle,.mob-menu-overlay").on("click", function() { e(".mob-menu .navbar-toggle").toggleClass("collapsed"), e(".mob-menu-overlay").fadeToggle(), e(".side-right").toggleClass("right-zero") }), e(".home__menu").length) { e("body").addClass("home___menu"), e(".menu_list").prepend('<li><span class="home-item"><a href="#home"><svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><path id="arrow-right-2" d="M37.333 10.667q1.125 0 1.896 0.771l18.667 18.667q0.771 0.771 0.771 1.896t-0.771 1.896l-18.667 18.667q-0.771 0.771-1.896 0.771-1.146 0-1.906-0.76t-0.76-1.906q0-1.125 0.771-1.896l14.125-14.104h-41.563q-1.104 0-1.885-0.781t-0.781-1.885 0.781-1.885 1.885-0.781h41.563l-14.125-14.104q-0.771-0.771-0.771-1.896 0-1.146 0.76-1.906t1.906-0.76z"></path></svg></a></span></li>'), e('.menu_list span:not(.home-item) a[href="#home"]').addClass("hide") }
    e(".menu_list a:not(.home-item)").each(function() { e(this).attr("data-hover", e(this).text()) }), e(window).on("resize", function() { o(".full-height") });
    e(".my_img").length && e(".my_img").magnificPopup({ type: "image", removalDelay: 300, mainClass: "mfp-with-zoom", gallery: { enabled: !0 }, zoom: { enabled: !1, duration: 300, easing: "ease-in-out", opener: function(e) { return e.is("img") ? e : e.find("img") } } }), e(".info .image_overlay").on("click", function() { e(this).parents(".project_content").find(".my_img").trigger("click") }), e(".video-popup").magnificPopup({ type: "iframe" }); var i = "<div></div>";
    e("div.portfolio_sec").data("data-url");
    i = e(i).addClass("mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready portfolioAjaxContent"), e(".ajax_popup").on("click", function(t) { t.preventDefault(); var o = e(this).attr("href");
        e(i).load(o + " #project__content", function() { e(i).imagesLoaded(function() { e(i).find("#project__content").append('<button title="Close (Esc)" type="button" class="mfp-close close_single">Ã—</button>'), e(i).find("#project__content").wrapInner('<div class="display-table"><div class="display-table-cell"></div></div>'), e(i).find("#project__content").wrap('<div class="mfp-content"></div>'), e(i).find(".mfp-content").wrap('<div class="mfp-container mfp-inline-holder"></div>'), e(i).find(".scroll__content").wrapInner('<div class="container"></div>'), e("body").append(i), e(".carousel").carousel({ interval: 5e3 }), e(".carousel-indicators li").on("click", function() { e(".carousel").carousel(e(this).data("slide-to")) }), e(".left.carousel-control").on("click", function() { e(".carousel").carousel("prev") }), e(".right.carousel-control").on("click", function() { e(".carousel").carousel("next") }), e(".close_single").on("click", function(t) { e(".mfp-wrap.portfolioAjaxContent").addClass("mfp-removing"), setTimeout(function() { e(".mfp-wrap.portfolioAjaxContent").removeClass("mfp-removing").remove() }, 400) }) }) }) }); var n; if (e("#typed").length) new Typed("#typed", { stringsElement: "#typed-strings", typeSpeed: 40, backSpeed: 0, backDelay: 1500, startDelay: 1e3, fadeOut: !1, loop: !0 }); if (0 !== (n = e(".fit__text")).length && n.each(function() { var t = e(this).css("fontSize");
            t = t.replace(/px/i, ""), n.fitText(1, { maxFontSize: t }) }), null == e("body").data("owl_slick")) { e(".owl").slick({ infinite: !1, slidesToShow: 2, arrows: !1, responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }] }), e("body").data("owl_slick", "active"), e(".prev-testi").on("click", function() { e(".owl").slick("slickPrev") }), e(".next-testi").on("click", function() { e(".owl").slick("slickNext") }) }
    e(".matchH").matchHeight(), e(".skills .percentage").each(function() { var t = e(this).text();
        e(this).parent().find(".progress_bar").width(t) }); var l = e(".pt-perspective section.pt-page");
    l.length && (l.parents(".pt-perspective").addClass("overFlowHidden"), l.each(function() { e(this).wrapInner('<div class="scroll___content"></div>') })), e(".contact form .submit").on("click", function() { e(".contact form .form-control").removeClass("errorForm"), e(".msg_success,.msg_error").css("display", ""); var t = !1,
            o = e('.contact form input[type="text"]'); "" !== o.val() && " " !== o.val() || (t = !0, e(o).addClass("errorForm")); var i = e('.contact form input[type="email"]'); "" === i.val() || " " === i.val() ? (e(i).addClass("errorForm"), t = !0) : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(i.val()) || (e(i).addClass("errorForm"), t = !0); var n = e(".contact form textarea"); if ("" !== n.val() && " " !== n.val() || (t = !0, e(n).addClass("errorForm")), !0 === t) return !1; var l = e(".contact form").serialize(); return e.ajax({ type: "POST", url: e(".contact form").attr("action"), data: l, success: function(t) { "SENDING" === t ? e(".msg_success").fadeIn("slow") : e(".msg_error").fadeIn("slow") } }), !1 }); var s = null;
    0 !== e(".contact #map").length && (e(".contact #map").show(), function(e, t, o) { var i = new google.maps.LatLng(t, o); if (s) s.setCenter(i);
        else { var n = { zoom: 10, center: i, scrollwheel: !1, mapTypeControl: !1, streetViewControl: !1, mapTypeId: google.maps.MapTypeId.ROADMAP, styles: [{ featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }, { lightness: 17 }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 20 }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: .2 }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 18 }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 16 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 21 }] }, { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dedede" }, { lightness: 21 }] }, { elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }] }, { elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }] }, { elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#f2f2f2" }, { lightness: 19 }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#fefefe" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }] }] };
            s = new google.maps.Map(document.getElementById(e), n), new google.maps.Marker({ position: i, icon: "assets/images/map-marker.png" }).setMap(s) } }("map", 40.712784, -74.005941)) });