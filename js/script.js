document.addEventListener("DOMContentLoaded", function(event) {

  //smooth scroll for each anchor
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //SLICK Carousel

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 0,
    asNavFor: '.slider-for',
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    autoplay: false,
    focusOnSelect: true,
    swipeToSlide: true
  });


  $('#rex-thumb').on('click', function(){
    // alert('clicked rex!');
    $('#rex-details').removeClass('hidden').addClass('show');
    $('#fstvl-details').removeClass('show').addClass('hidden');
    $('#foodli-details').removeClass('show').addClass('hidden');
    $('#wlg-details').removeClass('show').addClass('hidden');
  });

   $('#fstvl-thumb').on('click', function(){
    $('#fstvl-details').removeClass('hidden').addClass('show');
    $('#rex-details').removeClass('show').addClass('hidden');
    $('#foodli-details').removeClass('show').addClass('hidden');
    $('#wlg-details').removeClass('show').addClass('hidden');

  });

   $('#foodli-thumb').on('click', function(){
    $('#foodli-details').removeClass('hidden').addClass('show');
    $('#fstvl-details').removeClass('show').addClass('hidden');
    $('#rex-details').removeClass('show').addClass('hidden');
    $('#wlg-details').removeClass('show').addClass('hidden');
  });

   $('#wlg-thumb').on('click', function(){
    $('#wlg-details').removeClass('hidden').addClass('show');
    $('#fstvl-details').removeClass('show').addClass('hidden');
    $('#foodli-details').removeClass('show').addClass('hidden');
    $('#rex-details').removeClass('show').addClass('hidden');
  });





});