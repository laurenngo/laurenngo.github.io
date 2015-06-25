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

  // var monitorStuff = function(){
  //   var screenHeight = $(window).height();
  //   var screenWidth = $(window).width();

  //   $('#monitor').css({ left : screenWidth/14 , top : -(screenHeight/2.5) , width : screenWidth/2.8});
  //   $('.monitor-img').css({ left : screenWidth/10 , top : screenHeight/9 , width : screenWidth/2.8});
  // }  

  // $(window).load(function(){monitorStuff()});
  // $(window).resize(function(){monitorStuff()});

  ////////////////////////////////////////////////////////////////////
  // We need to clean up this ugly code - we need a better solution //
  ////////////////////////////////////////////////////////////////////

  $('#rex-thumb').on('click', function(){
    // alert('clicked rex!');
    //text
    $('#rex-details').removeClass('hidden').addClass('show');
    $('#fstvl-details').removeClass('show').addClass('hidden');
    $('#foodli-details').removeClass('show').addClass('hidden');
    $('#wlg-details').removeClass('show').addClass('hidden');
    //monitor photo
    $('#rex-monitor-img').removeClass('hidden').addClass('show');
    $('#fstvl-monitor-img').removeClass('show').addClass('hidden');
    $('#foodli-monitor-img').removeClass('show').addClass('hidden');
    $('#wlg-monitor-img').removeClass('show').addClass('hidden');
  });

   $('#fstvl-thumb').on('click', function(){
    //text
    $('#fstvl-details').removeClass('hidden').addClass('show');
    $('#rex-details').removeClass('show').addClass('hidden');
    $('#foodli-details').removeClass('show').addClass('hidden');
    $('#wlg-details').removeClass('show').addClass('hidden');
     //monitor photo
    $('#fstvl-monitor-img').removeClass('hidden').addClass('show');
    $('#rex-monitor-img').removeClass('show').addClass('hidden');
    $('#foodli-monitor-img').removeClass('show').addClass('hidden');
    $('#wlg-monitor-img').removeClass('show').addClass('hidden');

  });

   $('#foodli-thumb').on('click', function(){
    //text
    $('#foodli-details').removeClass('hidden').addClass('show');
    $('#fstvl-details').removeClass('show').addClass('hidden');
    $('#rex-details').removeClass('show').addClass('hidden');
    $('#wlg-details').removeClass('show').addClass('hidden');
     //monitor photo
    $('#foodli-monitor-img').removeClass('hidden').addClass('show');
    $('#rex-monitor-img').removeClass('show').addClass('hidden');
    $('#fstvl-monitor-img').removeClass('show').addClass('hidden');
    $('#wlg-monitor-img').removeClass('show').addClass('hidden');
  });

   $('#wlg-thumb').on('click', function(){
    //text
    $('#wlg-details').removeClass('hidden').addClass('show');
    $('#fstvl-details').removeClass('show').addClass('hidden');
    $('#foodli-details').removeClass('show').addClass('hidden');
    $('#rex-details').removeClass('show').addClass('hidden');
     //monitor photo
    $('#wlg-monitor-img').removeClass('hidden').addClass('show');
    $('#rex-monitor-img').removeClass('show').addClass('hidden');
    $('#fstvl-monitor-img').removeClass('show').addClass('hidden');
    $('#foodli-monitor-img').removeClass('show').addClass('hidden');
  });





});