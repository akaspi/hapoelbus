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
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['jasmine']);

  grunt.registerTask('build', ['webpack']);

  grunt.registerTask('default', ['eslint', 'jasmine']);
};
