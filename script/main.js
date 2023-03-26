$(document).ready(function(){

var $header = $('header');
var $sticky = $header.before($header.clone().addClass("sticky"));

$(window).on("scroll", function(){
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll",(scrollFromTop >80));
});

// Massontry grid
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 120,
    fitWidth:true,
    gutter: -5
});

$('.slider').slick({

    arrows: true,
    autoplay:true,
    autoplaySpeed:2500,
    dots:true,
    centermode:true,
    slidesToShow:4,
    prevArrows: '<button class="slick-prev" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" type="button">Next</button>',

    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
      ]
});

// Smooth scrolling
$('.menu li a[href^="#"]').on('click',function(e){
    e.preventDefault();

    var target = $(this.hash);

    if (target.length){
        $('html, body').stop().animate({
            scrollTop: target.offset().top -130
        },1000);
    }
});

// Respposnive menu
        var body = $('body');
      var menuTrigger = $('.js-menu-trigger');
      var mainOverlay = $('.js-main-overlay');

      menuTrigger.on('click', function(){
        body.addClass('menu-is-active');
      });

      mainOverlay.on('click', function(){
        body.removeClass('menu-is-active');
      });

      $('.menu li a').on('click', function(){
          $('body').removeClass("menu-is-active");
      });

});