module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
          all: ['src/**/*.spec.js']
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-npm');

    grunt.registerTask('default', ['jasmine']);
};
