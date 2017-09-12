import * as app from '../../app';
import defaults from './footer.json';

/**
 * Footer
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
export function footer(els = 'footer', custom = {}) {

    custom = app.custom('footer', custom);

    app.Synergy(els, (footer, options) => {

        options.projectsCarousel = '#footerGithubProjects';
        options.projectsCarouselNav = '.footer_projects_carouselNav';

        $(options.projectsCarousel).owlCarousel({
            items: 1,
            nav: false,
            dots: false
        });

        $(options.projectsCarouselNav + '_prev').click(function() {
            $(options.projectsCarousel).trigger('prev.owl.carousel');
        });

        $(options.projectsCarouselNav + '_next').click(function() {
            $(options.projectsCarousel).trigger('next.owl.carousel');
        });

    }, defaults, custom, app.evalConfig);

    app.config.footer = app.parse(defaults.footer, custom);

    return exports;
}