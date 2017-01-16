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

        // Parallax
        if (_breakpoint('min-width', 'break-3')) {
            $.stellar({
                responsive: true
            });
        }

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
            margin: 30,
            stagePadding: 30,
            responsive : {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                960: {
                    items: 4
                }
            },
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

        var particleCanvasOptions = {
            particleColor: '#fff',
            background: 'transparent',
            interactive: false,
            speed: 'slow',
            density: 'high'
        };
        var particleCanvas = new ParticleNetwork(
            document.getElementById('particle-canvas'), particleCanvasOptions
        );

    }

}(jQuery));