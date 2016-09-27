const _ = require('lodash');
const serverDB = require('../../server/utils/serverDB');

beforeEach(() => {
  _.forOwn(serverDB, (v, key) => {
    spyOn(serverDB, key);
  });
});