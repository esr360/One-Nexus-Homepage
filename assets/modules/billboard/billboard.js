import * as app from '../../app';
import defaults from './billboard.json';

/**
 * Billboard
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function billboard(els = 'billboard', custom = {}) {

    custom = app.custom('billboard', custom);

    app.Synergy(els, (billboard, options) => {

        if (options.parallax) {
            $(window).on('scroll', function() {
                var scrollTop = $(this).scrollTop();
                var opacity = 1 - scrollTop * 0.003;

                $(billboard).css({
                    'background-position-y': scrollTop/-1.8 + 'px'
                });

                $(billboard).find('.billboard_wrapper').css({
                    'transform': 'translateY(' + scrollTop/2.5 + 'px)',
                    'opacity': opacity
                });
            });
        }

    }, defaults, custom, app.evalConfig);

    app.config.billboard = app.parse(defaults.billboard, custom);

    return exports;
}