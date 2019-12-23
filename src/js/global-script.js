// Если на проекте jQuery
$( document ).ready(function() {

  $('.drawer').drawer({
    class: {
      nav: 'drawer-nav',
      toggle: 'drawer-toggle',
      overlay: 'drawer-overlay',
      open: 'drawer-open',
      close: 'drawer-close',
      dropdown: 'drawer-dropdown'
    },
    iscroll: {
      // Configuring the iScroll
      // https://github.com/cubiq/iscroll#configuring-the-iscroll
      mouseWheel: true,
      preventDefault: false
    },
    showOverlay: true
  });

  $('.nav').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });

  $('.nav a').on('click', function(){
    // $('.mobile-menu-icon').removeClass('mobile-menu-icon_active');
    $('.drawer').drawer('close');
  });

  $('.accordion-group').ariaAccordion({
    slideSpeed: 400
  });

  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    hide_min_max: "true",
    hide_from_to: "true"
  });

  var mySwiper = new Swiper ('.intro__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

  var mySwiper = new Swiper ('.swiper-nav', {
    // Optional parameters
    loop: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'progressbar',
    // },

    breakpoints: {
      0: {
        direction: 'horizontal',
        slidesPerView: 3,
      },
      992: {
        direction: 'vertical',
        slidesPerView: 7,
        navigation: {
          nextEl: '.swiper-nav-next',
          prevEl: '.swiper-nav-prev',
        }
      }
    },
  });

  var mySwiper = new Swiper ('.swiper-pres', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        0: {
          slidesPerView: 1
        },
        576: {
            slidesPerView: 2,
            centeredSlides: false
        },
        992: {
          slidesPerView: 4,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          centeredSlides: false
        }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var mySwiper = new Swiper ('.swiper-compare', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  var myElement = document.querySelector(".page-header");
  var options = {
    offset : 174,
    tolerance : {
        up : 5,
        down : 0
    }
  };
  var headroom = new Headroom(myElement, options);
  headroom.init();
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
