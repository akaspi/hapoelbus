module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      all: ['src/**/*.spec.js']
    },
    eslint: {
      target: ['.']
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['eslint', 'jasmine']);
  grunt.registerTask('lint', ['eslint']);
};
