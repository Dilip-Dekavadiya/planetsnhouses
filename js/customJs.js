$(document).ready(function() {

    $('.navbar .dropdown-item').on('click', function(e) {
        var $el = $(this).children('.dropdown-toggle');
        var $parent = $el.offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('navbar-nav')) {
            if ($parent.hasClass('show')) {
                $parent.removeClass('show');
                $el.next().removeClass('show');
                $el.next().css({
                    "top": -999,
                    "left": -999
                });
            } else {
                $parent.parent().find('.show').removeClass('show');
                $parent.addClass('show');
                $el.next().addClass('show');
                $el.next().css({
                    "top": $el[0].offsetTop,
                    "left": $parent.outerWidth() - 4
                });
            }
            e.preventDefault();
            e.stopPropagation();
        }
    });

    $('.navbar .dropdown').on('hidden.bs.dropdown', function() {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });

});


$('.imageSlider').slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,         
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,           
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,           
          }
        }
      ]
  });
 
  $('.imageSlider1').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,         
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,           
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,           
          }
        }
      ]
  });
  
$('.videoeSlider').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,           
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,           
        }
      }
    ]
});
