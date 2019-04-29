$(function () {
    'use strict';

        var getGridSize = function() {
    return (window.innerWidth < 600) ? 1 :
         (window.innerWidth < 900) ? 2 : 3;
}
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5
  });

    $('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();

	    var target = this.hash,
	        $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
        });
    });

    //CLIENTS SECTION SCRIPTS


// Active isotope with jQuery code:

    $('.main-gall').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    // Isotope click function
    $('.gall-nav ul li').click(function () {
        $('.gall-nav ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.main-gall').isotope({
            filter: selector
        });
        return false;
    });

});