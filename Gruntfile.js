module.exports = function (grunt) {

    grunt.initConfig({

            jade: {
                compile: {
                    options: {
                        pretty: true,
                        data: {
                            debug: false
                        }
                    },
                    files: {
                        "public_html/pages.html": "static/jade/pages.jade",
						"public_html/index.html": "static/jade/index.jade",
                        "public_html/product.html": "static/jade/product.jade",
                        "public_html/prize.html": "static/jade/prize.jade",
                        "public_html/winners.html": "static/jade/winners.jade",
                        "public_html/participants.html": "static/jade/participants.jade",
                        "public_html/popups.html": "static/jade/popups.jade",
                        "public_html/profile.html": "static/jade/profile.jade"
                    }
                }
            },

            compass: {
                dist: {
                    options: {
                        sassDir: 'static/sass',
                        cssDir: 'public_html/css'
                    }
                }
            },

			import: {
				options: {},
				dist: {
					src: 'static/js/main.js',
					dest: 'public_html/js/engine.js'
				}
			},


            uglify: {
                options: {
                    banner: '/* Created by Andrey Koverniy | 2015 */\n'
                },
                js: {
                    files: {
                        'public_html/js/engine.min.js': '<%= import.dist.dest %>'
                    }
                }
            },

            watch: {
                jade: {
                    files: [
                        'static/jade/*.jade',
                        'static/includes/*.jade'
                    ],
                    tasks: 'jade'
                },
                css: {
                    files: [
                        'static/css/common/*.sass',
                        'static/css/blocks/**/*.sass',
                        'static/css/vendor/*.sass',
                        'static/css/UI/*.sass',
                        'static/sass/*.sass'
                    ],
                    tasks: 'compass'
                },
				js: {
					files: [
						'static/js/parts/*.js',
						'static/js/vendor/*.js',
						'static/js/vendor//map/*.js',
						'static/js/main.js'
					],
					tasks: ['import']
				}
            }
        }
    );

    grunt.loadNpmTasks('grunt-import');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'jade', 'compass','import', 'uglify']);
};