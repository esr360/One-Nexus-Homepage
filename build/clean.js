/**
 * Compile app/theme
 * 
 * @example clean({
 *     theme: 'one-nexus', 
 *     assets: ['scss']
 * });
 */
module.exports = function clean(custom) {

    const options = Object.assign({
        environment: 'dev',
        theme: 'one-nexus',
        clean: [
            'app', 
            'theme'
        ],
        assets: [
            'styles', 
            'scripts', 
            'images'
        ]
    }, custom);



}