const _ = require('lodash');
const fs = require('fs');

function getConfigVar(name, overrideConfig, isRequired) {
  const configVar = _.get(process, ['env', name]) || _.get(overrideConfig, name);
  if (!configVar && isRequired) {
    throw new Error('Failed to assign a required config variable: ' + name);
  }
  return configVar;
}

function createClientConfig(overrideConfig) {
  return {
    firebase: {
      apiKey: getConfigVar('fb_apiKey', overrideConfig, true),
      authDomain: getConfigVar('fb_authDomain', overrideConfig, true),
      databaseURL: getConfigVar('fb_databaseURL', overrideConfig, true),
      storageBucket: getConfigVar('fb_storageBucket', overrideConfig, true)
    }
  };
}

function createServerConfig(overrideConfig) {
  return {
    firebase: {
      serviceAccount: {
        projectId: getConfigVar('fb_projectId', overrideConfig, true),
        clientEmail: getConfigVar('fb_clientEmail', overrideConfig, true),
        privateKey: getConfigVar('fb_privateKey', overrideConfig, true)
      },
      databaseURL: getConfigVar('fb_databaseURL', overrideConfig, true)
    }
  };
}

module.exports = function (grunt) {
  'use strict'; // eslint-disable-line strict
  grunt.registerTask('createConfigFiles', 'Build app configuration', () => {
    let overrideConfig = {};

    try {
      overrideConfig = grunt.file.readJSON('./conf/config.json');
    } catch (e) {
      grunt.log.writeln('No override config detected...');
    }

    let clientConfig;
    let serverConfig;
    try {
      clientConfig = createClientConfig(overrideConfig);
      serverConfig = createServerConfig(overrideConfig);
    } catch (e) {
      grunt.fail.fatal(e.message);
    }

    try {
      fs.writeFileSync('./config.client.json', JSON.stringify(clientConfig, null, 2), 'utf-8');
      fs.writeFileSync('./config.server.json', JSON.stringify(serverConfig, null, 2), 'utf-8');
    } catch (e) {
      grunt.fail.fatal('Failed to create config.json');
    }

    grunt.log.oklns('config files created successfully');
  });
};