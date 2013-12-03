
module.exports = function (grunt) {

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration.
	grunt.initConfig({
        
        // JSHint, JavaScript validation code
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
                    console: false,
                    require: true,
                    define: true
                }
            },
            all: ['app/**/*.js']
        },

        // Less Css, compilation to CSS and minify css to prod environment
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
        },

        // requirejs: {
        //     compile: {
                
        //     }
        // },

        connect: {
            dev: {
                port: 1337,
                combine: [
                    'app',
                    'assets',
                    'bower_components'
                ]
            }
        },

        watch: {
            less: {
                files: ['assets/less/**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }

    });

    // Default task(s).
	grunt.registerTask('default', ['jshint']);

    // Compile
    grunt.registerTask('compile:dev', ['jshint', 'less:dev']);
    grunt.registerTask('compile:prod', ['jshint', 'less:prod']);

    // Run Servers
    grunt.registerTask('run:dev', ['compile:dev', 'connect:dev', 'watch']);

};
