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

        if (options.fadeOnScroll && window.matchMedia('(min-width: 960px)').matches) {
            $('.homepage_wrapper').on('scroll', function() {
                var scrollTop = $(this).scrollTop();

                const inViewport = app.inViewport({
                    container: document.querySelector('.homepage_wrapper'), 
                    target: document.querySelector('.spacestation')
                });

                if (inViewport) {
                    options.fadeOnScroll.forEach(entry => {
                        $('.' + entry).css({
                            'opacity': 1 - scrollTop/1000
                        });
                    });
                }
            });
        }

    }, defaults, custom, app.evalConfig);

    app.config.spacestation = app.parse(defaults.spacestation, custom);

    return exports;
}