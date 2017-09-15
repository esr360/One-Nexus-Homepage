/**
 * Individual browserify tasks
 * @see https://github.com/jmreidy/grunt-browserify
 */
module.exports = function(config) {
    return {
        options: {
            transform: [['babelify', {presets: ['es2015']}]]
        },
        dist: {
            src: config.scripts,
            dest: config.project.dist[1].themes[1].theme + config.dist + '.js'
        }
    }
}