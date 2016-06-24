const webpackConfig = require('./webpack.config');

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
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack-without-server');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['jasmine']);

  grunt.registerTask('build', ['webpack']);
  grunt.registerTask('serve', ['http-server']);

  grunt.registerTask('default', ['eslint', 'jasmine']);
};