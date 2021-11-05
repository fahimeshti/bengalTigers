jQuery(document).ready(function($) {

	'use strict';
    
    //***************************
    // BannerOne Functions
    //***************************
      jQuery('.sportsmagazine-banner-one').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          arrows: false,
          fade: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // fixtureSlider Functions
    //***************************
      jQuery('.sportsmagazine-fixture-slider').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // FeaturedSlider Functions
    //***************************
      jQuery('.sportsmagazine-featured-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });

    //***************************
    // ThumbSlider Functions
    //***************************
    jQuery('.sportsmagazine-player-slider-image').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          autoplay: true,
          autoplaySpeed: 2000,
          asNavFor: '.sportsmagazine-player-slider-nav'
        });
        jQuery('.sportsmagazine-player-slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.sportsmagazine-player-slider-image',
          dots: false,
          vertical: true,
          arrows: false,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 2000,
          focusOnSelect: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: true,
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                  }
                }
              ],
        });
    //***************************
    // BannerOne Functions
    //***************************
      jQuery('.sportsmagazine-ticker-slide').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          infinite: true,
          dots: false,
          arrows: false,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // ThumbSlider Functions
    //***************************
    jQuery('.widget-images-thumb').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.widget-images-list'
        });
        jQuery('.widget-images-list').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.widget-images-thumb',
          dots: false,
          vertical: false,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          centerMode: false,
          focusOnSelect: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    vertical: false,
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                  }
                }
              ],
        });
    //***************************
    // counter Functions
    //***************************
      jQuery('.counter-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='icon-arrows-2'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='icon-arrows-2'></i></span>",
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // BannerTwo Functions
    //***************************
      jQuery('.sportsmagazine-banner-two').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: true,
          arrows: false,
          fade: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // PartnerSlider Functions
    //***************************
      jQuery('.sportsmagazine-partner-slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='icon-arrows-2'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='icon-arrows-2'></i></span>",
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // Widget Awards Functions
    //***************************
      jQuery('.widget_awards').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='icon-arrows-2'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='icon-arrows-2'></i></span>",
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });

    //***************************
    // Click to Top Button
    //***************************
    // jQuery('.sportsmagazine-back-top,.sportsmagazine-top-back').on("click", function() {
    //     jQuery('html, body').animate({
    //         scrollTop: 0
    //     }, 800);
    //     return false;
    // });
    //***************************
    // Parent AddClass Function
    //***************************
    jQuery(".sportsmagazine-dropdown-menu,.sportsmagazine-megamenu").parent("li").addClass("subdropdown-addicon");

    //***************************
    // Fancybox Function
    //***************************
    jQuery(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
    });

    //***************************
    // Counter Function
    //***************************
    jQuery('#word-count1').jQuerySimpleCounter({
      end:3500,
      duration: 5000
    });
    jQuery('#word-count2').jQuerySimpleCounter({
      end:124,
      duration: 5000
    });
    jQuery('#word-count3').jQuerySimpleCounter({
      end:179,
      duration: 5000
    });
    jQuery('#word-count4').jQuerySimpleCounter({
      end:300,
      duration: 5000
    });
    
    // Masonry Functions
    jQuery('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        fitWidth: true
      }
    });
    
    //***************************
    // Progressbar Function
    //***************************
    jQuery('.progressbar1').progressBar({
      percentage : false,
      animation : true,
      backgroundColor : "#ececec",
      barColor : "#ffdc11",
      height : "12",
    });


  //***************************
  // Hamburger Function
  //***************************
  $(document).ready(function(){

    //hamburger Toggle
    $('.humbarger').click(function(event){
    $('.menu-list').slideToggle(500);
    event.preventDefault();
    
    $('.menu-list li a').click(function(event) {
        if ($(window).width() < 768) {
          $('.menu-list').slideUp(500);
          // event.preventDefault(); 
        }
      });
    });
    
    });

    //***************************
  // Nav Scroll Function
  //***************************
    (function($) {
      "use strict";
  
      var $navbar = $("#navibar"),
          y_pos = $navbar.offset().top,
          height = $navbar.height();
  
      $(document).scroll(function() {
          var scrollTop = $(this).scrollTop();
  
          if (scrollTop > y_pos + height) {
              $navbar.addClass("navibar-fixed").animate({
                  top: 0
              });
          } else if (scrollTop <= y_pos) {
              $navbar.removeClass("navibar-fixed").clearQueue().animate({
                  top: "-48px"
              }, 0);
          }
      });
  
  })(jQuery, undefined);
 
});

// PreLoader

$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});

         
/* ============= 
Sign Up Form 
============== */
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const fname = document.getElementById("fname");


signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Random ID 

const passValues = [
  0,1,2,3,4,5,6,7,8,9,
 'A','B','C','D','E','F',
 'G','H','I','J','K','L',
 'M','N','O','P','Q','R',
 'S','T','U','V','W','X',
 'Y', 'Z'
 ]
    
    let hex = 'ID-'

    for (let i = 0; i < 7; i++){
        const index = Math.floor(Math.random()*passValues.length)
        hex += passValues[index]
    
    // console.log(hex)
    

    document.getElementById("Signmeup").addEventListener("click", e => {
      e.preventDefault();

      if (fname.value == '') {
        document.getElementById("WARning").style.color = "red"
      } else {
        document.getElementById("WARning").style.color = "black"
      document.getElementById("ranId").value =hex;
      document.getElementById("enterThis").innerText= `Hello '${fname.value}'`;
      document.getElementById("waitingtxt").innerText= `Please wait for verification, you will be notified via Email. Please save your ID`;
    }
  });
 } 

// Modal Popup

var _targettedModal,
    _triggers = document.querySelectorAll('[data-modal-trigger]'),
    _dismiss = document.querySelectorAll('[data-modal-dismiss]'),
    modalActiveClass = "is-modal-active";

function showModal(el){
    _targettedModal = document.querySelector('[data-modal-name="'+ el + '"]');
    _targettedModal.classList.add(modalActiveClass);
}

function hideModal(event){
    if(event === undefined || event.target.hasAttribute('data-modal-dismiss')) {
        _targettedModal.classList.remove(modalActiveClass);
    }
}

function bindEvents(el, callback){
    for (i = 0; i < el.length; i++) {
        (function(i) {
            el[i].addEventListener('click', function(event) {
                callback(this, event);
            });
        })(i);
    }   
}

function triggerModal(){
    bindEvents(_triggers, function(that){
        showModal(that.dataset.modalTrigger);
    });
}

function dismissModal(){
    bindEvents(_dismiss, function(that){
        hideModal(event);
    });
}

function initModal(){
    triggerModal();
    dismissModal();
}

initModal();