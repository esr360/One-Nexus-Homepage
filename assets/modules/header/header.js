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
    
    // Cache the original function
    $.fn._header = $.fn.header;

    $.fn.header = function(custom) {
        
        // Options
        var options = $.extend({
            stickyOffset: getOffset()
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

        // Call the original function
        header._header(options);
    
        $(window).on('load scroll', function(e) {
            if (isHomepage()) {
            } else {
                if (header._visible(true)) {
                    header.addClass('visible');
                    header.removeClass('invisible');
                } else {
                    header.removeClass('visible');
                    header.addClass('invisible');
                }
            }
        });

    }

}(jQuery));