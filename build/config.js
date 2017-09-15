///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

module.exports = function config() {

    // Set the default theme to compile assets for
    this.theme = 'one-nexus';

    // List of all themes used by the project
    this.themes = [
        'one-nexus'
    ];
        
    // Set the desired development environment
    this.env = 'dev';

    // Lint files when compiling them
    this.lint = false;

    // Test files when compiling them
    this.test = true;

    // Map the project's architecture into one Grunt can use
    // Paths ae relative to the project root
    this.project = {
        dist: [        'dist/', {
            images:    'dist/assets/images/',
            scripts:   'dist/assets/scripts/',
            styles:    'dist/assets/styles/',
            themes: [  'dist/assets/themes/', {
                theme: 'dist/assets/themes/<%=theme%>/'
            }],
            templates: 'dist/'
        }],
        source: [      'assets/', {
            images:    'assets/images/',
            scripts:   'assets/modules/',
            styles:    'assets/modules/',
            themes: [  'assets/themes/', {
                theme: 'assets/themes/<%=theme%>/'
            }],
            templates: 'templates/'
        }],
        dependencies:  'node_modules/',
        vendor:        'vendor/',
        docs: [        'docs/', {
            scripts:   'docs/js/',
            styles:    'docs/sass/'
        }],
        test: [        'unit-testing/', {
            scripts:   'unit-testing/js/',
            styles:    'unit-testing/scss/'
        }]
    };

    // Set the scripts used to create the theme's main js file
    this.scripts = [
        this.project.vendor + 'scrollJack/ScrollJack.js',
        this.project.vendor + 'Typed/js/typed.js',
        this.project.source[1].themes[1].theme + '<%=theme%>.js'
    ],

    // Set all optional scripts to be used by the project
    this.globalScripts = [
        this.project.vendor + 'LivIconsEvo/js/LivIconsEvo.Tools.js',
        this.project.vendor + 'LivIconsEvo/js/LivIconsEvo.defaults.js',
        this.project.vendor + 'LivIconsEvo/js/LivIconsEvo.min.js'
    ];

    // Set all optional styles to be used by the project
    this.globalStyles = [
        project.vendor + 'flickity/dist/flickity.css'
    ];

    // The name of your project's source asset
    this.src = 'app';

    //The name of your project's compiled & distributed asset
    this.dist = 'app';

    return this;
}