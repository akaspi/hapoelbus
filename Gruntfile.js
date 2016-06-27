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
      all: webpackConfig
    },
    'http-server': {
      all: {
        root: '.',
        port: process.env.PORT || 8080
      }
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
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack-without-server');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-file-append');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['jasmine']);

  grunt.registerTask('build', ['webpack']);
  grunt.registerTask('serve', ['http-server']);
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['eslint', 'jasmine']);
};