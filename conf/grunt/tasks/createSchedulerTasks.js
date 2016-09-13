const _ = require('lodash');
const fs = require('fs');
const mkdirp = require('mkdirp');

const createSchedulerTaskTemplate = () => {
  const templateArr = [];
  templateArr.push('#!/usr/bin/env node');
  templateArr.push('const task = require(\'<%= fileName %>\');');
  templateArr.push('task.exec().then(() => process.exit());');
  return _.template(templateArr.join('\n'));
};

const removeFileExtension = fileName => fileName.replace(/\.[^/.]+$/, '');

module.exports = function (grunt) {
  grunt.registerTask('createSchedulerTasks', 'Create Heroku scheduler tasks files', () => {
    const taskTemplate = createSchedulerTaskTemplate();
    const fileNames = fs.readdirSync('./server/tasks');
    const dist = './bin/';

    mkdirp.sync(dist);

    try {
      _.forEach(fileNames, fileName => {
        fs.writeFileSync(
          dist + removeFileExtension(fileName),
          taskTemplate({ fileName: '../server/tasks/' + fileName }),
          'utf-8'
        );
      });
    } catch (e) {
      grunt.fail.fatal(e.message);
    }

    grunt.log.oklns(fileNames.length + ' scheduler tasks files were created successfully');
  });
};