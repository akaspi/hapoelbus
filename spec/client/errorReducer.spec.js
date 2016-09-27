import errorReducer from '../../src/redux/reducers/errorReducer';
import { reportError } from '../../src/redux/actions/errorActions';
import { startLoading } from '../../src/redux/actions/loadingActions';

describe('errorReducer spec', () => {

  it('should be empty string by default', () => {
    const nextState = errorReducer();

    expect(nextState).toEqual('');
  });

  it('should set the reported error', () => {
    const currentState = null;

    const nextState = errorReducer(currentState, reportError('THIS IS AN ERROR'));

    expect(nextState).toEqual('THIS IS AN ERROR');
  });

  it('should be empty string when start loading', () => {
    const currentState = 'THIS IS AN ERROR';

    const nextState = errorReducer(currentState, startLoading());

    expect(nextState).toEqual('');
  });

});
