import currentUserReducer from '../src/redux/reducers/currentUserReducer';
import { setCurrentUser, signOut } from '../src/redux/actions/actionsCreator';

describe('currentUserReducer spec', () => {
  it('should be null by default', () => {
    const nextState = currentUserReducer();

    expect(nextState).toBeNull();
  });

  describe('user is logged in', () => {
    it('should have a uid', () => {
      const currentState = null;

      const nextState = currentUserReducer(currentState, setCurrentUser('someUID', 'some@email.com'));

      expect(nextState.uid).toEqual('someUID');
    });

    it('should have an email', () => {
      const currentState = null;

      const nextState = currentUserReducer(currentState, setCurrentUser('someUID', 'some@email.com'));

      expect(nextState.email).toEqual('some@email.com');
    });
  });

  describe('user is logged out', () => {
    it('should be null', () => {
      const currentState = { uid: 'someUID', email: 'some@email.com' };

      const nextState = currentUserReducer(currentState, signOut());

      expect(nextState).toBeNull();
    });
  });
});
