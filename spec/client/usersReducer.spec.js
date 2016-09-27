import usersReducer from '../../src/redux/reducers/usersReducer';
import { usersReceived, usersRemoved } from '../../src/redux/actions/userActions';
import { userSignedOut } from '../../src/redux/actions/authActions';

describe('usersReducer spec', () => {
  it('should be empty by default', () => {
    const nextState = usersReducer();

    expect(nextState).toEqual({});
  });

  describe('users received', () => {
    it('should merge the received users to the existing users state', () => {
      const currentState = {
        uid: {
          email: 'some@email.com'
        }
      };

      const nextState = usersReducer(currentState, usersReceived({
        uid2: {
          email: 'spider@pig.com'
        }
      }));

      expect(nextState).toEqual({
        uid: {
          email: 'some@email.com'
        },
        uid2: {
          email: 'spider@pig.com'
        }
      });
    });

    it('should support partial users', () => {
      const currentState = {
        uid: {
          email: 'some@email.com'
        }
      };

      const nextState = usersReducer(currentState, usersReceived({
        uid: {
          firstName: 'Spider',
          lastName: 'Pig'
        }
      }));

      expect(nextState).toEqual({
        uid: {
          email: 'some@email.com',
          firstName: 'Spider',
          lastName: 'Pig'
        }
      });
    });
  });

  describe('users removed', () => {

    it('should remove the received user id from the existing users state', () => {
      const currentState = {
        uid: {
          email: 'some@email.com'
        },
        uid2: {
          email: 'spider@pig.com'
        }
      };

      const nextState = usersReducer(currentState, usersRemoved('uid'));

      expect(nextState).toEqual({
        uid2: {
          email: 'spider@pig.com'
        }
      });
    });

  });

  describe('user signed out', () => {
    it('should be empty', () => {
      const currentState = {
        uid: {
          email: 'some@email.com'
        }
      };

      const nextState = usersReducer(currentState, userSignedOut());

      expect(nextState).toEqual({});
    });
  });
});
