import * as _ from 'lodash';
import * as db from '../../database/utils/db';

beforeEach(() => {
  _.forOwn(db, (v, key) => {
    spyOn(db, key);
  });
});