'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          options: {
            separator: 'rn'
          },
          dist: {
            src: ['src/js/**/*.js'],
            dest: 'dist/marineapi.js'
          }
        },
        sass: {
          dist: {
            files: [{
              expand: true,
              cwd: 'src/sass',
              src: ['*.scss'],
              dest: 'dist',
              ext: '.css'
            }]
          }
        },
        watch: {
          files: ['src/html/**/*.html', 'src/js/**/*.js', 'src/sass/**/*.scss'],
          tasks: ['concat', 'sass']
        },
        copy: {
          main: {
            expand: true, cwd: 'src/html/', src: ['**/*'], dest: 'dist/',
          },
        },
        clean: {
          folder: ['dist/']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['concat', 'sass', 'copy', 'watch']);
    grunt.registerTask('build', ['concat', 'sass', 'copy']);
};
