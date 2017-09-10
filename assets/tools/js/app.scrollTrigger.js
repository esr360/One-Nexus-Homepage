import * as app from '../../app';

/**
 * Modify the CSS of an element when it becomes scrolled into view
 * 
 * @access public
 * 
 * @param {Object} custom - where custom options are passed
 */
export function scrollTrigger(custom) {

    const options = Object.assign({
        window: document.querySelector('.homepage_wrapper')
    }, custom);
    
    var elReveal = document.querySelectorAll('[data-trigger]');
    var elReverseReveal = document.querySelectorAll('[data-trigger-reverse]');
    var elHover = document.querySelectorAll('[data-hover]');
    var elActive = document.querySelectorAll('.inactive');

    // [data-trigger]
    elReveal.forEach(el => {
        const styles = el.getAttribute('data-trigger');
    
        options.window.addEventListener('scroll', () => {
            if (app.inViewport({container: options.window, target: el, coverage: 'middle'})) {
                el.setAttribute('style', styles);
            }
        });
    });

    elReverseReveal.forEach(el => {
        const styles = el.getAttribute('data-trigger-reverse');

        let cachedStyles;
        
        // cache current inline styles
        if (typeof el.getAttribute('style') !== 'undefined') {
            cachedStyles = el.getAttribute('style');
        }

        // add new styles to element
        el.setAttribute('style', styles);

        options.window.addEventListener('scroll', () => {
            if (app.inViewport({container: options.window, target: el, coverage: 'top'})) {
                el.setAttribute('style', cachedStyles);
            }
        });
    });

    elHover.forEach(el => {
        const styles = el.getAttribute('data-hover');

        let cachedStyles;

        el.onmouseover = function() {
            if (typeof el.getAttribute('style') !== 'undefined') {
                cachedStyles = el.getAttribute('style');
            }

            el.setAttribute('style', cachedStyles + ';' + styles);

            el.onmouseout = function() {
                el.setAttribute('style', cachedStyles);
            }
        }
    });
    
    elActive.forEach(el => {
        if (app.inViewport({container: options.window, target: el, coverage: 'bottom'})) {
            el.classList.remove('inactive');
            el.classList.add('active');
        }
    });
	
}