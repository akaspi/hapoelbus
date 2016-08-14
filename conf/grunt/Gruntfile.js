const webpackConfig = require('../../webpack.config');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      all: {
        src: [
          // helpers
          'node_modules/babel-register/lib/node.js',
          'client/test/helpers/**/*.js',
          'server/test/helpers/**/*.js',

          // specs
          'client/**/*.spec.js',
          'server/**/*.spec.js'
        ]
      }
    },
    eslint: {
      target: ['.']
    },
    webpack: {
      production: webpackConfig
    },
    clean: {
      dist: ['client/dist'],
      bin: ['bin'],
      config: ['conf/*.json']
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack-without-server');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('schedulerTasks', ['clean:bin', 'createSchedulerTasks']);
  grunt.registerTask('buildWebpack', ['clean:dist', 'webpack:production']);
  grunt.registerTask('buildConfig', ['clean:config', 'createConfigFiles']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('lint', ['eslint']);

  grunt.registerTask('build', ['buildConfig', 'buildWebpack', 'schedulerTasks']);

  grunt.task.loadTasks('./conf/grunt/tasks/');

  grunt.registerTask('default', ['lint', 'test', 'build']);
};