 (function ($) {
    /**
     * Homepage
    * 
    * @access public
    * @author [@esr360](http://twitter.com/esr360)
    * @param {object} custom - where custom config will be passed
    * 
    * @example
    *     $.homepage();
    */
    $.fn.homepage = function(custom) {
        
        // Options
        var options = $.extend({}, custom);

        // animated text for .homepage_banner-alpha
        $('#typed-workflow').typed({
            strings: ['$ git clone https://github.com/esr360/One-Nexus.git \n\n$ cd One-Nexus \n\n $ npm install \n\n$ grunt theme \n\n . . .'],
            typeSpeed: 0,
            loop: true,
            backDelay: 1500,
            contentType: 'text'
        });

        var UiComponents = $('#UiComponents');

        UiComponents.owlCarousel({
            items: 4,
            margin: 30,
            stagePadding: 30,
            onInitialized: function() {
                $('#UiComponentsPlaceholder').hide();
                $('#UiComponents').removeClass('hidden');
            }
        });

        $('#UiComponentsPrev').click(function() {
            UiComponents.trigger('prev.owl.carousel');
        });

        $('#UiComponentsNext').click(function() {
            UiComponents.trigger('next.owl.carousel');
        });

    }

}(jQuery));