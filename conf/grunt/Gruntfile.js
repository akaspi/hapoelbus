module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: ['.']
    },
    clean: {
      bin: ['bin']
    }
  });

  // grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('schedulerTasks', ['clean:bin', 'createSchedulerTasks']);

  grunt.registerTask('lint', ['eslint']);

  grunt.registerTask('build', ['schedulerTasks']);

  grunt.task.loadTasks('./conf/grunt/tasks/');

  grunt.registerTask('default', ['lint', 'build']);
};