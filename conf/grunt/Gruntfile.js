module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      bin: ['bin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('schedulerTasks', ['clean:bin', 'createSchedulerTasks']);

  grunt.registerTask('build', ['schedulerTasks']);

  grunt.task.loadTasks('./conf/grunt/tasks/');

  grunt.registerTask('default', ['build']);
};