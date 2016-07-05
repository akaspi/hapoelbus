const _ = require('lodash');
const fs = require('fs');

function createBaseConfig(env) {
  return {
    frontend: {
      fb_credentials: {
        apiKey: env.fb_apiKey,
        authDomain: env.fb_authDomain,
        databaseURL: env.fb_atabaseURL,
        storageBucket: env.fb_storageBucket
      }
    },
    backend: {
      fb_credentials: {
        serviceAccount: {
          projectId: env.fb_projectId,
          clientEmail: env.fb_clientEmail,
          privateKey: env.fb_privateKey
        },
        databaseURL: env.fb_atabaseURL
      }
    }
  };
}

module.exports = function (grunt) {
  'use strict'; // eslint-disable-line strict
  grunt.registerTask('createConfigFile', 'Build app configuration', () => {
    let baseConfig = {};
    let overrideConfig = {};

    if (_.isEmpty(process.env.production)) {
      grunt.log.writeln('No production env variables detected...');
    } else {
      baseConfig = createBaseConfig(process.env);
    }

    try {
      overrideConfig = grunt.file.readJSON('./conf/config.override.json');
    } catch (e) {
      grunt.log.writeln('No override config.json detected...');
    }

    if (_.isEmpty(baseConfig) && _.isEmpty(overrideConfig)) {
      grunt.fail.fatal('No config.json source supplied');
    }

    const resultConfig = _.merge(baseConfig, overrideConfig);

    try {
      fs.writeFileSync('./config.json', JSON.stringify(resultConfig, null, 2), 'utf-8');
    } catch (e) {
      grunt.fail.fatal('Failed to create config.json');
    }

    grunt.log.oklns('config.json file created');
  });
};