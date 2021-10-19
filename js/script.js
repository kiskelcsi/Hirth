var tpj = jQuery;

      var revapi18;
      tpj(document).ready(function () {
        if (tpj("#rev_slider_18_1").revolution == undefined) {
          revslider_showDoubleJqueryError("#rev_slider_18_1");
        } else {
          revapi18 = tpj("#rev_slider_18_1")
            .show()
            .revolution({
              sliderType: "standard",
              jsFileLocation:
                "//localhost/revslider-standalone/revslider/public/assets/revslider/assets/js/",
              sliderLayout: "fullwidth",
              dottedOverlay: "none",
              delay: 9000,
              navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                  style: "uranus",
                  enable: true,
                  hide_onmobile: false,
                  hide_onleave: true,
                  hide_delay: 200,
                  hide_delay_mobile: 1200,
                  tmp: "",
                  left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0,
                  },
                  right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0,
                  },
                },
                bullets: {
                  enable: true,
                  hide_onmobile: false,
                  style: "hermes",
                  hide_onleave: false,
                  direction: "horizontal",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: 0,
                  v_offset: 60,
                  space: 5,
                  tmp: "",
                },
              },
              responsiveLevels: [1240, 1024, 778, 480],
              visibilityLevels: [1240, 1024, 778, 480],
              gridwidth: [1110, 1024, 778, 480],
              gridheight: [720, 720, 500, 500],
              lazyType: "none",
              shadow: 0,
              spinner: "spinner0",
              stopLoop: "off",
              stopAfterLoops: -1,
              stopAtSlide: -1,
              shuffle: "off",
              autoHeight: "off",
              disableProgressBar: "on",
              hideThumbsOnMobile: "off",
              hideSliderAtLimit: 0,
              hideCaptionAtLimit: 0,
              hideAllCaptionAtLilmit: 0,
              debugMode: false,
              fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
              },
            });
        }
      }); /*ready*/


      
// Sticky nav

const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  if(ent.isIntersecting === false){
  document.body.classList.add("stickynav")
}
  if(ent.isIntersecting === true){
  document.body.classList.remove("stickynav")}
},
 {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: '-90px'
})
obs.observe(sectionHeroEl)


