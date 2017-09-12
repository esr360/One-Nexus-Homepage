 import * as app from '../../app';

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
        var options = $.extend({
            parallax: true
        }, custom);

        //console.log(app.media('min-width', 'break-4'));

        if (options.parallax) {

            const win = document.querySelector('.homepage_wrapper');

            win.addEventListener('scroll', () => {

                const scroll = win.scrollTop;

                $(function() {
                    const element = document.querySelector('.homepage_section-cards');

                    if (app.inViewport({container: win, target: element})) {
                        $('.homepage_section_foreground').css({
                            'bottom': '34%',
                            'transform': 'translateZ(0) translateY(' + (0.08 * scroll) + 'px)'
                        });
                    }
                });

                $(function() {
                    const element = document.getElementById('parallax_mountain-1');

                    if (app.inViewport({container: win, target: element})) {
                        $('#parallax_mountain-1').css({
                            'bottom': '40%',
                            'transform': 'scaleX(-1) translateZ(0) translateY(' + (0.12 * scroll) + 'px)'
                        });
                    }
                });

                $(function() {
                    const element = document.getElementById('parallax_mountain-2');

                    if (app.inViewport({container: win, target: element})) {
                        $('#parallax_mountain-2').css({
                            'bottom': '115%',
                            'transform': 'scaleX(-1) translateZ(0) translateY(' + (0.12 * scroll) + 'px)'
                        });
                    }
                });

                $(function() {
                    const element = document.querySelector('.homepage_section-kayzengs');

                    if (app.inViewport({container: win, target: element})) {
                        $('#parallax_stardust').css({
                            'top': '510%',
                            'transform': 'scaleX(-1) translateZ(0) translateY(' + (-0.2 * scroll) + 'px)'
                        });
                    }
                });

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

        const particleCanvas = new app.ParticleNetwork(
            document.getElementById('particle-canvas'), {
                particleColor: '#fff',
                background: 'transparent',
                interactive: false,
                speed: 'slow',
                density: 'high'
            }
        );

    }

}(jQuery));