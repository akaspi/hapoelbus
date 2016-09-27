import loadingReducer from '../../src/redux/reducers/loadingReducer';
import { startLoading, stopLoading } from '../../src/redux/actions/loadingActions';

describe('loadingReducer spec', () => {
  it('should be false by default', () => {
    const nextState = loadingReducer();

    expect(nextState).toBe(false);
  });

  describe('start loading', () => {
    it('should be true', () => {
      const state = false;

      const nextState = loadingReducer(state, startLoading());

      expect(nextState).toBe(true);
    });
  });

  describe('end loading', () => {
    it('should be false', () => {
      const state = true;

      const nextState = loadingReducer(state, stopLoading());

      expect(nextState).toBe(false);
    });
  });
});