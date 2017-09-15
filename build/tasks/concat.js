/**
 * Individual concat tasks
 * @see https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(config) {
    return {
        dist: {
            src: config.scripts,
            dest: config.project.dist[1].themes[1].theme + config.dist + '.js',
        }
    }
}