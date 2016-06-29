const webpackConfig = require('./webpack.config');
const _ = require('lodash');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      all: ['src/**/*.spec.js']
    },
    eslint: {
      target: ['.']
    },
    webpack: {
      production: webpackConfig
    },
    copy: {
      schedulerTasks: {
        files: [
          {
            expand: true,
            src: ['schedulerTasks/**/*'],
            dest: 'bin/',
            rename: (dest, src) => {
              const fileName = _.last(src.split('/'));
              const fileNameWithoutExtension = _.first(fileName.split('.'));

              return dest + fileNameWithoutExtension;
            }
          }
        ]
      }
    },
    clean: {
      dist: ['dist'],
      bin: ['bin']
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack-without-server');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('schedulerTasks', ['clean:bin', 'copy:schedulerTasks']);
  grunt.registerTask('bundle', ['clean:dist', 'webpack:production']);

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('build', ['bundle', 'schedulerTasks']);

  grunt.registerTask('default', ['lint', 'test', 'build']);
};