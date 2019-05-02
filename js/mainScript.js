(function($) {
    "use strict";
    // give the header the full screen
    $(
        function(){
            'use strict';
            var winHeight = $(window).height(),
                nav = $('.navbar').innerHeight();
            $('.header').height(winHeight - nav );
        }
    );
    // Collapse Navbar
     var navbarCollapse = function() {
      if ($("#navbar").offset().top > 100) {
      $("#navbar").addClass("navbar-shrink");
      } else {
         $("#navbar").removeClass("navbar-shrink");
     }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#navbar',
            offset: 56
        });
    })(jQuery);