import * as app from '../../app';
import config from './config.json';

app.theme = config.app;

$(document).ready(function() {

    $.fn.homepage();
    
    //*************************************************************
    // Modules
    //*************************************************************

    $('.billboard, [class*="billboard-"]').billboard();

    $('.footer, [class*="footer-"]').footer();
    
    $('.appHeader, [class*="appHeader-"]').header();

    $('.spacestation, [class*="spacestation-"]').spacestation();

});