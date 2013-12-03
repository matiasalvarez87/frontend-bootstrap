
module.exports = function (grunt) {

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');

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
        },

        less: {
            dev: {
                options: {
                    paths: ["assets/less"]
                },
                files: {
                    "assets/css/dev-styles.css": "assets/less/index.less"
                }
            },
            prod: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true
                },
                files: {
                    "assets/css/styles.css": "assets/less/index.less"
                }
            }
        }
    });

    // Default task(s).
	grunt.registerTask('default', ['jshint']);

    // Compile
    grunt.registerTask('compile:dev', ['jshint', 'less:dev']);
    grunt.registerTask('compile:prod', ['jshint', 'less:prod']);

};
