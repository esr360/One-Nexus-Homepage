 (function ($) {
    /**
     * Spacestation
    * 
    * @access public
    * @author [@esr360](http://twitter.com/esr360)
    * @param {object} custom - where custom config will be passed
    * 
    * @example
    *     $('.spacestation').spacestation({
    *         scrollJack: false
    *     });
    */
    $.fn.spacestation = function(custom) {
        
        // Options
        var options = $.extend({
            scrollJack: {
                scrollSpeed: [100, 800],
                conditions: $.browser().isIE || $.browser().isEdge
            },
            fadeOnScroll: '.spacestation_content, .spacestation_layer-planets, .spacestation_layer-stars1'
        }, custom);

        // Cache the spacestation object
        var spacestation = $(this);

        // Hi-jack the scrolling for smooth parallax effect
        if (options.scrollJack.conditions) {
            $.scrollJack(
                options.scrollJack.scrollSpeed[0],
                options.scrollJack.scrollSpeed[1]
            );
        }

        if (options.fadeOnScroll && _breakpoint('min-width', 'break-3')) {
            $(window).on('scroll', function() {
                var scrollTop = $(this).scrollTop();
                $(options.fadeOnScroll).css({
                    'opacity': 1 - scrollTop/1250
                }); 
            });
        }

    }

}(jQuery));