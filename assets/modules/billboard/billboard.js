(function ($) {
    /**
     * Billboard
     * 
     * @access public
     * @author [@esr360](http://twitter.com/esr360)
     * @param {object} custom - where custom config will be passed
     * 
     * @example
     *     $('.billboard').billboard({
     *         parallax: false
     *     });
     */

    $.fn.billboard = function(custom) {
        
        // Options
        var options = $.extend({
            parallax: true
        }, custom);

        var billboard = $(this);

        if (options.parallax) {
            $(window).on('scroll', function() {
                var scrollTop = $(this).scrollTop();
                var opacity = 1 - scrollTop * 0.003;

                billboard.css({
                    'background-position-y': scrollTop/-1.8 + 'px'
                });

                billboard.find('.billboard_wrapper').css({
                    'transform': 'translateY(' + scrollTop/2 + 'px)',
                    'opacity': opacity
                });
            });
        }

    }

}(jQuery));