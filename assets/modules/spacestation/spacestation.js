 /**
  * Spacestation
  * 
  * @access public
  * @author [@esr360](http://twitter.com/esr360)
  * @param {object} custom - where custom config will be passed
  * 
  * @example
  *     $('.spacestation').spacestation({});
  */
$.fn.spacestation = function(custom) {
    
    // Options
    var options = $.extend({
        scrollJack: {
            scrollSpeed: [100, 800],
            conditions: function() {
                return /Edge\/\d./i.test(navigator.userAgent) ||
                /MSIE 10/i.test(navigator.userAgent) ||
                /MSIE 9/i.test(navigator.userAgent) || 
                /rv:11.0/i.test(navigator.userAgent)
            }
        },
        fadeOnScroll: '.spacestation_content'
    }, custom);

    // Cache the spacestation object
    var spacestation = $(this);

    // Hi-jack the scrolling for smooth parallax effect
    if (options.scrollJack.conditions()) {
        $.scrollSpeed(
            options.scrollJack.scrollSpeed[0],
            options.scrollJack.scrollSpeed[1]
        );
    }

    if (options.fadeOnScroll) {
        $(window).on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            $(options.fadeOnScroll).css({
                'opacity': 1 - scrollTop/1250
            }); 
        });
    }

}