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


  // mobile nav


  // Initialize collapse button
  $("#hamburger").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();


  ////////////////////////////////////////////////////////////////////
  // Clean up - we need a better solution //
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