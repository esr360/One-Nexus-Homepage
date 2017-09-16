import * as app from '../../app';
import defaults from './homepage.json';

/**
 * Homepage
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function homepage(els = 'homepage', custom = {}) {

    const options = app.custom('homepage', custom);

    options.parallax = {
        disable: app.media('max-width', 'break-3', app)
    }

    if (!options.parallax.disable) {

        const win = document.querySelector('.homepage_wrapper');

        win.addEventListener('scroll', () => {

            const scroll = win.scrollTop;

            $(function() {
                const container = document.querySelector('.homepage_section-cards');

                if (app.inViewport({container: win, target: container})) {
                    $('.homepage_section_foreground').css({
                        'bottom': '34%',
                        'transform': 'translateZ(0) translateY(' + (0.08 * scroll) + 'px)'
                    });
                }
            });

            $(function() {
                const container = document.getElementById('parallax_mountain-1');

                if (app.inViewport({container: win, target: container})) {
                    $('#parallax_mountain-1').css({
                        'bottom': '40%',
                        'transform': 'scaleX(-1) translateZ(0) translateY(' + (0.12 * scroll) + 'px)'
                    });
                }
            });

            $(function() {
                const container = document.querySelector('.homepage_section-semanticGrids-codeSample');

                if (app.inViewport({container: win, target: container})) {
                    $('#parallax_mountain-2').css({
                        'bottom': '115%',
                        'transform': 'scaleX(-1) translateZ(0) translateY(' + (0.12 * scroll) + 'px)'
                    });
                }
            });

            $(function() {
                const container = document.querySelector('.homepage_section-kayzengs');

                if (app.inViewport({container: win, target: container})) {
                    $('#parallax_stardust').css({
                        'top': '510%',
                        'transform': 'translateZ(0) translateY(' + (-0.2 * scroll) + 'px)'
                    });
                }
            });

        });
    }

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

    // animated text for .homepage_banner-alpha
    const typed = new app.Typed('#typed-workflow', {
        strings: ['$ git clone https://github.com/esr360/One-Nexus.git \n\n$ cd One-Nexus \n\n $ npm install \n\n$ npm start \n\n . . .'],
        typeSpeed: 0,
        loop: true,
        backDelay: 1500,
        contentType: 'text'
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

    app.config.homepage = app.parse(defaults.homepage, custom);

    return exports;
}