jQuery(document).ready(function () {
   "use strict";

   // BOOK TABLE
   var book_table = new Swiper(".book-table-img-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      speed: 2000,
      effect: "coverflow",
      coverflowEffect: {
         rotate: 3,
         stretch: 2,
         depth: 100,
         modifier: 5,
         slideShadows: false,
      },
      loopAdditionSlides: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
   });

   // TEAM SLIDER
   var team_slider = new Swiper(".team-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      speed: 2000,
      loopAdditionSlides: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      breakpoint: {
         0: {
            slidesPerView: 1.2,
         },
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 3,
         },
      },
   });

   // MENU FILTER
   jQuery(".filters").on("click", function () {
      jQuery("#menu-dish").removeClass("bydefault_show");
   });
   jQuery(function () {
      var filterList = {
         init: function () {
            jQuery("#menu-dish").mixItUp({
               selectors: {
                  target: ".dish-box-wp",
                  filter: ".filter",
               },
               animation: {
                  effects: "fade",
                  easing: "ease-in-out",
               },
               load: {
                  filter: ".all, .breakfast, .lunch, .dinner",
               },
            });
         },
      };
      filterList.init();
   });

   // MENU TOGGLE
   jQuery(".menu-toggle").click(function () {
      jQuery(".main-navigation").toggleClass("toggled");
   })

   jQuery(".header-meanu ul li a").click(function () {
      jQuery(".main-navigation").removeClass("toggled");
   })

   gsap.registerPlugin(ScrollTriger);

   var elementFirst = document.querySelector('.site-header');

   ScrollTriger.create({
      trigger: "body",
      start: "30px top",
      end: "bottom bottom",

      onEnter: () => myFunction(),
      onLeaveBack: () => myFunction(),
   });

   function myFunction() {
      elementFirst.classList.toggle('sticky_head');
   }


   // LANDING SECTION
   var scene = $(".js-parallax-scene").get(0);
   var parallaxInstance = new Parallax(scene)

});


//  MENU TAB OF FILTER
jQuery(window).on('load', function () {
   jQuery('body').removeClass('body-fixed');

   // activating tab of filter
   let targets = document.querySelectorAll(".filter");
   let activeTab = 0;
   let old = 0;
   let dur = 0.4;
   let animation;

   for (let i = 0; i < targets.length; i++) {
      targets[i].index = i;
      targets[i].addEventListener("click", moveBar);
   }

   // initial position on first === All
   gsap.set(".filter-active", {
      a: targets[0].offsetLeft,
      width: targets[0].offsetWidth
   });

   function moveBar() {
      if (this.index != activeTab) {
         if (animation && animation.isActive()) {
            animation.progress(1);
         }

         animation = gsap.timeline({
            defaults: {
               duration: dur
            }
         });

         old = activeTab;
         activeTab = this.index;
         animation.to(".filter-active", {
            x: targets[activeTab].offsetLeft,
            width: targets[activeTab].offsetWidth
         });

         animation.to(targets[old], {
            color: "#0d0d25",
            ease: "none"
         }, 0);

         animation.to(targets[activeTab], {
            color: "#fff",
            ease: "none"
         }, 0);
      }
   }


})