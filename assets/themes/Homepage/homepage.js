$(document).ready(function() {

    $.stellar({
        responsive: true
    });

    //*************************************************************
    // Elements
    //*************************************************************

    $(_accordion).accordion();

    $('.carousel').carousel();

    $(_modal).modal();
    
    $('progress.progress-bar').progressBar();

    $(_tabs).tabs();

    $(_tooltip).each(function() {
        if ($(this).is(_modifier('top'))) {

            $(this).tooltip({position: 'top'});

        } else if ($(this).is(_modifier('bottom'))) {

            $(this).tooltip({position: 'bottom'});

        } else if ($(this).is(_modifier('left'))) {

            $(this).tooltip({position: 'left'});

        } else if ($(this).is(_modifier('right'))) {

            $(this).tooltip({position: 'right'});
            
        } else {
            $(this).tooltip({position: 'top'});
        }
    });
    
    //*************************************************************
    // Modules
    //*************************************************************

    $(_billboard).billboard();

    //$('#google-map').googleMap();

    $(_footer).footer();

    //$(_navigation).flyoutNav();
    
    $(_appHeader).header();
    
    //$(_preloader).preloader();
    
    //$(_scrollTop).scrollToTop();
    
    //$('#search-trigger').searchBox();

    $(_spacestation).spacestation();
    
    //$(_topBar).topBar();
    
    //$(_twitterFeed).twitterFeed();

    $('a[href*="#"]:not([href*="modal"])').smoothScroll();

});