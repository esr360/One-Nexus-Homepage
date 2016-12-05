$(window).on('scroll', function() {
    // cache scroll position
    var scrollTop = $(this).scrollTop();

    // content
    (function(){
        var scrollPos = scrollTop/1.1;
        var opacity = 1.2 - scrollTop * 0.001;

        $('.spacestation_content').css({
            'transform' : 'translateY(' + scrollPos + 'px)',
            'opacity'   : opacity
        });
    })();

    // planets
    (function(){
        var scrollPos = scrollTop/1.02;
        var brightness = 100 - scrollTop * 0.05;

        $('.spacestation_planets').css({
            'transform' : 'translateY(' + scrollPos + 'px)',
            'filter'    : 'brightness(' + brightness + '%)'
        });
    })();

    // sun
    (function(){
        var scrollPos = scrollTop/1.1;

        $('.spacestation_layer4').css({
            'transform' : 'translateY(' + scrollPos + 'px)'
        });
    })();

    // mountain
    (function(){
        var scrollPos = scrollTop/1.2;
        var brightness = 100 - scrollTop * 0.05;

        $('.spacestation_layer5').css({
            'transform' : 'translateY(' + scrollPos + 'px)',
            'filter'    : 'brightness(' + brightness + '%)'
        });
    })();

    // green land
    (function(){
        var scrollPos = scrollTop/1.2;

        $('.spacestation_layer7').css({
            'transform' : 'translateY(' + scrollPos + 'px)'
        });
    })();

    // green land
    (function(){
        var scrollPos = scrollTop/1.5;

        $('.spacestation_layer8').css({
            'transform' : 'translateY(' + scrollPos + 'px)'
        });
    })();

    // stardust
    (function(){
        var scrollPos = scrollTop/1.7;

        $('.spacestation_layer9').css({
            'transform' : 'translateY(' + scrollPos + 'px)'
        });
    })();

    // stardust
    (function(){
        var scrollPos = scrollTop/1.85;

        $('.spacestation_layer10').css({
            'transform' : 'translateY(' + scrollPos + 'px)'
        });
    })();

    // UFO
    (function(){
        var scrollPos = scrollTop/1.4;

        $('.spacestation_layer11').css({
            'transform' : 'translateY(' + scrollPos + 'px)'
        });
    })();

    // foreground
    (function(){
        var scrollPos = scrollTop/9;

        $('.spacestation_layer12').css({
            'transform' : 'translateY(' + scrollPos + 'px)'
        });
    })();

    // stardust
    (function(){
        var scrollPos = scrollTop/-1.1;

        $('.spacestation_layer13').css({
            'transform' : 'translateY(' + scrollPos + 'px)'
        });
    })();

});