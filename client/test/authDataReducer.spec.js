import authDataReducer from '../src/redux/reducers/authDataReducer';
import { setAuthData, userSignedOut } from '../src/redux/actions/authActions';

describe('authDataReducer spec', () => {
  it('should be null by default', () => {
    const nextState = authDataReducer();

    expect(nextState).toBeNull();
  });

  describe('user is logged in', () => {
    it('should have a uid property', () => {
      const currentState = null;

      const nextState = authDataReducer(currentState, setAuthData('someUID', 'spider@pig.com', true));

      expect(nextState.uid).toEqual('someUID');
    });

    it('should have isAdmin property', () => {
      const currentState = null;

      const nextState = authDataReducer(currentState, setAuthData('someUID', 'spider@pig.com', true));

      expect(nextState.isAdmin).toBe(true);
    });

    it('should have email property', () => {
      const currentState = null;

      const nextState = authDataReducer(currentState, setAuthData('someUID', 'spider@pig.com', true));

      expect(nextState.email).toEqual('spider@pig.com');
    });
  });

  describe('user is logged out', () => {
    it('should be null', () => {
      const currentState = { uid: 'someUID', isAdmin: false };

      const nextState = authDataReducer(currentState, userSignedOut());

      expect(nextState).toBeNull();
    });
  });
});
