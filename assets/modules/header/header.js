(function ($) {

    /**
     * Header
     * 
     * @access public
     * @author [@esr360](http://twitter.com/esr360)
     * @param {object} custom - where custom config will be passed
     * 
     * @example
     *     $('.header').header({});
     */

    $.fn.header = function(custom) {
        
        // Options
        var options = $.extend({
            stickyOffset: getOffset(),
            fadeDuration: 400
        }, custom);

        // The homepage has unique behaviour
        function isHomepage() {
            // .spacestation is the homepage's main feature, so if
            // it exists on the page, return true
            return $('.spacestation').length;
        }

        function getOffset() {
            if (isHomepage()) {
                return $('.spacestation').outerHeight();
            } else {
                return $(_billboard).outerHeight();
            }
        }

        // Cache the header object
        var header = $(this);
    
        $(window).on('load scroll', function(e) {
            if (isHomepage()) {
                var scroll = $(window).scrollTop();
                if (scroll > options.stickyOffset) {
                    header.fadeIn(options.fadeDuration);
                } else {
                    header.fadeOut(options.fadeDuration);
                }
            }
        });

    }

}(jQuery));