// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {
    $(function() {
      $('#slides').noi_slider({
        width: 940,
            height: 528,
            start: 1,
            navigation: {
                active: !0,
                effect: "fade"
            },
            pagination: {
                active: !0,
                effect: "fade"
            },
            play: {
                active: !1,
                effect: "slide",
                interval: 5e3,
                auto: !1,
                swap: !0,
                pauseOnHover: !1,
                restartDelay: 2500
            },
            effect: {
                slide: {
                    speed: 500
                },
                fade: {
                    speed: 300,
                    crossfade: !0
                }
            }
      });
    });
}(window.jQuery)
