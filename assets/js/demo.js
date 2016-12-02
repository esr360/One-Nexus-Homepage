// Fade spacestation content on scroll
if (window.matchMedia("(min-width: 960px)").matches) {
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        $('.spacestation_content').css({
            'opacity' : 1 - scrollTop/1200
        });
    });
}