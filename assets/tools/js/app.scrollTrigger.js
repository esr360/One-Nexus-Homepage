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
        window: document.querySelector('.homepage_wrapper'),
        trigger: {
            styles: 'data-trigger',
            elements: document.querySelectorAll('[data-trigger]'),
            coverage: 'middle'
        },
        reverseTrigger: {
            styles: 'data-trigger-reverse',
            elements: document.querySelectorAll('[data-trigger-reverse]'),
            coverage: 'middle'
        },
        hover: {
            styles: 'data-hover',
            elements: document.querySelectorAll('[data-hover]')
        },
        active: {
            elements: document.querySelectorAll('.inactive'),
            coverage: 'bottom'
        }
    }, custom);

    // [data-trigger]
    options.trigger.elements.forEach(el => {
        const styles = el.getAttribute(options.trigger.styles);
    
        options.window.addEventListener('scroll', () => {
            if (app.inViewport({container: options.window, target: el, coverage: 'middle'})) {
                el.setAttribute('style', styles);
            }
        });
    });

    options.reverseTrigger.elements.forEach(el => {
        const styles = el.getAttribute(options.reverseTrigger.styles);

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

    options.hover.elements.forEach(el => {
        const styles = el.getAttribute(options.hover.styles);

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
    
    options.active.elements.forEach(el => {
        if (app.inViewport({container: options.window, target: el, coverage: 'bottom'})) {
            el.classList.remove('inactive');
            el.classList.add('active');
        }
    });
	
}