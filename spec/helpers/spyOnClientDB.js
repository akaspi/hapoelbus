import * as _ from 'lodash';
import * as clientDB from '../../src/utils/clientDB';

beforeEach(() => {
  _.forOwn(clientDB, (v, key) => {
    spyOn(clientDB, key);
  });
});