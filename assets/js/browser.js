(function ($) {

    /**
     * Detect if user is using a certain browser
     * 
     * @access public
     * @author [@esr360](http://twitter.com/esr360)
     * @param {object} custom - where custom config will be passed
     * 
     * @example
     *     $.fn.browser().isChrome;
     */
    $.fn.browser = function() {

        var exports = {};

        exports.isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

        exports.isFirefox = typeof InstallTrigger !== 'undefined';

        exports.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

        exports.isChrome = !!window.chrome && !exports.isOpera;

        exports.isIE = /*@cc_on!@*/false || !!document.documentMode;

        exports.isEdge = /Edge/.test(navigator.userAgent);

        return exports;

    }

}(jQuery));