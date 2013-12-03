
module.exports = function (grunt) {

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Project configuration.
	grunt.initConfig({
        
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,

                globals: {
                    $: true,
                    _: true,
                    alert: false,
                    console: false
                }
            },
            all: ['app/**/*.js']
        }
    });

    // Default task(s).
	grunt.registerTask('default', ['jshint']);

};