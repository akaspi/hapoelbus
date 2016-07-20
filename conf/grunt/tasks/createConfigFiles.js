const _ = require('lodash');
const fs = require('fs');

const envVariables = ['fb_apiKey', 'fb_authDomain', 'fb_databaseURL',
  'fb_storageBucket', 'fb_projectId', 'fb_clientEmail', 'fb_privateKey', 'fb_databaseURL',
  'sg_apiToken', 'sg_fromAddress'];

function createClientConfig() {
  return {
    firebase: {
      apiKey: process.env.fb_apiKey,
      authDomain: process.env.fb_authDomain,
      databaseURL: process.env.fb_databaseURL,
      storageBucket: process.env.fb_storageBucket
    }
  };
}

function createServerConfig() {
  return {
    firebase: {
      serviceAccount: {
        projectId: process.env.fb_projectId,
        clientEmail: process.env.fb_clientEmail,
        privateKey: process.env.fb_privateKey
      },
      databaseURL: process.env.fb_databaseURL
    },
    sendGrid: {
      apiToken: process.env.sg_apiToken,
      fromAddress: process.env.sg_fromAddress
    }
  };
}

function writeConfigFile(path, config) {
  fs.writeFileSync(path, JSON.stringify(config, null, 2), 'utf-8');
}

function isVariablesValid() {
  return _.every(envVariables, (varName) => _.has(process.env, varName));
}

module.exports = function (grunt) {
  grunt.registerTask('createConfigFiles', 'Build app configuration', () => {
    const hasDotEnvFile = require('dotenv').config({ silent: true }); // eslint-disable-line global-require

    if (!hasDotEnvFile) {
      grunt.log.writeln('No .env file detected...');
    }

    if (!isVariablesValid()) {
      grunt.fail.fatal('Some env variables are missing...');
    }

    try {
      writeConfigFile('./conf/client.config.json', createClientConfig());
      writeConfigFile('./conf/server.config.json', createServerConfig());
    } catch (e) {
      grunt.fail.fatal(e.message);
    }

    grunt.log.oklns('config files created successfully');
  });
};