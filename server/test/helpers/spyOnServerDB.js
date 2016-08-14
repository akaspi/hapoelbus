const _ = require('lodash');
const serverDB = require('../../utils/serverDB');

beforeEach(() => {
  _.forOwn(serverDB, (v, key) => {
    spyOn(serverDB, key);
  });
});