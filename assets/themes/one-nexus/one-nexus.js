///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as app from '../../app';
import config from './config.json';

app.theme  = config.app;

///************************************************************
/// Utilities
///************************************************************

app.colors(app.theme.colors);

app.grid(app.theme.grid);

app.typography(app.theme.typography);

app.core(app.theme.core);

///************************************************************
/// Elements
///************************************************************

app.accordion('accordion', app.theme.accordions);

app.carousel('carousel', app.theme.carousels);

app.modal('modal', app.theme.modals);

app.overlay('overlay', app.theme.overlay);

app.progressBar('progress-bar', app.theme['progress-bars']);

app.tabs('tabs', app.theme.tabs);

app.tooltips('tooltips', app.theme.tooltips);

///************************************************************
/// Objects
///************************************************************

app.billboard('billboard', app.theme.billboard);

app.footer('footer', app.theme.footer);

app.googleMap('google-map', app.theme['google-map']);

app.header('header', app.theme.header);

app.preloader('preloader', app.theme.preloader);

app.scrollTop('scroll-top', app.theme['scroll-top']);

app.search('search', app.theme.search);

app.sideNav('side-nav', app.theme['side-nav']);

app.spacestation('spacestation', app.theme.spacestation);

///************************************************************
/// Pages
///************************************************************

app.homepage({}, app.theme.homepage);

///************************************************************
/// Export Options
///************************************************************

window.APPUI.config = app.evalConfig(app.config);