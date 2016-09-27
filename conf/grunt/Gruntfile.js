module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: ['.']
    },
    clean: {
      bin: ['bin'],
      config: ['conf/*.json']
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-npm');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('schedulerTasks', ['clean:bin', 'createSchedulerTasks']);

  grunt.registerTask('buildConfig', ['clean:config', 'createConfigFiles']);

  grunt.registerTask('lint', ['eslint']);

  grunt.registerTask('build', ['buildConfig', 'schedulerTasks']);

  grunt.task.loadTasks('./conf/grunt/tasks/');

  grunt.registerTask('default', ['lint', 'build']);
};