import loadingCounterReducer from '../../src/redux2/reducers/loadingCounterReducer';
import { startLoading, endLoading } from '../../src/redux2/actions';

describe('loadingCounterReducer', () => {

  it('should be 0 default', () => {
    const nextState = loadingCounterReducer();

    expect(nextState).toEqual(0);
  });

  it('should be according to startLoading actions', function() {
    const state = 2;

    const nextState = loadingCounterReducer(state, startLoading());

    expect(nextState).toEqual(3);
  });

  it('should be according to endLoading actions', function() {
    const state = 4;

    const nextState = loadingCounterReducer(state, endLoading());

    expect(nextState).toEqual(3);
  });

});