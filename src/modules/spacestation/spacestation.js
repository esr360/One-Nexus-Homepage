import * as app from '../../app';
import defaults from './spacestation.json';

/**
 * Spacestation
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function spacestation(els = 'spacestation', custom = {}) {

    custom = app.custom('spacestation', custom);

    app.Synergy(els, (spacestation, options) => {

        // Hi-jack the scrolling for smooth parallax effect
        if (options.scrollJack.conditions) {
            $.scrollJack(
                options.scrollJack.scrollSpeed[0],
                options.scrollJack.scrollSpeed[1]
            );
        }

        if (window.matchMedia('(min-width: 960px)').matches) {
            $('.homepage_wrapper').on('scroll', function() {

                const spacestation_inViewport = app.inViewport({
                    container: document.querySelector('.homepage_wrapper'), 
                    target: document.querySelector('.spacestation')
                });

                const operator = (spacestation_inViewport) ? 'removeClass' : 'addClass';

                $('.spacestation')[operator]('spacestation-outsideViewport');

                if (options.fadeOnScroll) {
                    var scrollTop = $(this).scrollTop();

                    if (spacestation_inViewport) {
                        options.fadeOnScroll.forEach(entry => {
                            $('.' + entry).css({
                                'opacity': 1 - scrollTop/1000
                            });
                        });
                    }
                }

            });
        }

    }, defaults, custom, app.evalConfig);

    app.config.spacestation = app.parse(defaults.spacestation, custom);

    return exports;
}