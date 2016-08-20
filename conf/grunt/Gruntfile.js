const webpackConfig = require('../../webpack.config');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      client: {
        src: [
          // helpers
          'node_modules/babel-register/lib/node.js',
          'client/test/helpers/**/*.js',

          // specs
          'client/**/*.spec.js'
        ]
      },
      server: {
        src: [
          // helpers
          'node_modules/babel-register/lib/node.js',
          'server/test/helpers/**/*.js',

          // specs
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

  grunt.registerTask('test:client', ['jasmine:client']);
  grunt.registerTask('test:server', ['jasmine:server']);
  grunt.registerTask('test', ['test:client', 'test:server']);

  grunt.registerTask('lint', ['eslint']);

  grunt.registerTask('build', ['buildConfig', 'buildWebpack', 'schedulerTasks']);

  grunt.task.loadTasks('./conf/grunt/tasks/');

  grunt.registerTask('default', ['lint', 'test:client', 'test:server', 'build']);
};