import { Map, is } from 'immutable';
import authDataReducer from '../../src/redux2/reducers/authDataReducer';
import { setAuthData, logout } from '../../src/redux2/actions';

describe('authDataReducer', () => {

  it('should be immutable Map', () => {
    const nextState = authDataReducer();

    expect(Map.isMap(nextState)).toBe(true)
  });

  it('should be null by default', () => {
    const nextState = authDataReducer();

    expect(nextState.isEmpty()).toBe(true);
  });

  it('should set auth data', function() {
    const authData = { uid: 'spiderPig' };
    const currentState = Map();

    const nextState = authDataReducer(currentState, setAuthData(authData));

    expect(is(nextState, Map(authData))).toBe(true);
  });

  it('should clear on logout', function() {
    const currentState = Map({ uid: 'spiderPig' });

    const nextState = authDataReducer(currentState, logout());

    expect(nextState.isEmpty()).toBe(true);
  });

});