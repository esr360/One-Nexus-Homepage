(function ($) {

    /**
     * Footer
     * 
     * @access public
     * @author [@esr360](http://twitter.com/esr360)
     * @param {object} custom - where custom config will be passed
     * 
     * @example
     *     $('.footer').footer({});
     */
    
    // Cache the original function
    $.fn._footer = $.fn.footer;

    $.fn.footer = function(custom) {
        
        // Options
        var options = $.extend({
            projectsCarousel: '#footerGithubProjects',
            projectsCarouselNav: '.footer_projects_carouselNav'
        }, custom);

        // Cache the footer object
        var footer = $(this);

        // Call the original function
        footer._footer(options);

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

    }

}(jQuery));