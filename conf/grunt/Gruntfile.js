const webpackConfig = require('../../webpack.config');
const _ = require('lodash');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      all: {
        src: [
          // helpers
          'node_modules/babel-register/lib/node.js',

          // specs
          'client/**/*.spec.js'
        ]
      }
    },
    eslint: {
      target: ['.']
    },
    webpack: {
      production: webpackConfig
    },
    copy: {
      schedulerTasks: {
        options: {
          process: (content) => {
            const sheband = '#!/usr/bin/env node';
            return sheband + '\n\n' + content;
          }
        },
        files: [
          {
            expand: true,
            src: ['server/tasks/**/*'],
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
      dist: ['client/dist'],
      bin: ['bin'],
      config: ['conf/*.json']
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack-without-server');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('schedulerTasks', ['clean:bin', 'copy:schedulerTasks']);
  grunt.registerTask('buildWebpack', ['clean:dist', 'webpack:production']);
  grunt.registerTask('buildConfig', ['clean:config', 'createConfigFiles']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('build', ['buildConfig', 'buildWebpack', 'schedulerTasks']);

  grunt.task.loadTasks('./conf/grunt/tasks/');

  grunt.registerTask('default', ['lint', 'test', 'build']);
};