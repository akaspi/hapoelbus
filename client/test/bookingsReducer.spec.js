import bookingsReducer from '../src/redux/reducers/bookingsReducer';
import { bookingsReceived, bookingsCanceled } from '../src/redux/actions/bookingActions';
import { userSignedOut } from '../src/redux/actions/authActions';

describe('bookingsReducer spec', () => {

  it('should be empty by default', () => {
    const nextState = bookingsReducer();

    expect(nextState).toEqual({});
  });

  describe('bookings received', () => {

    it('should merge the received bookings to the existing bookings state', () => {
      const currentState = {
        uid1: {
          eventId1: { typeId: 'MTA', paidSeats: 5 },
          eventId2: { typeId: 'HOLON', paidSeats: 2 }
        },
        uid2: {
          eventId2: { typeId: 'HOLON', paidSeats: 1 }
        }
      };

      const nextState = bookingsReducer(currentState, bookingsReceived({
        uid1: {
          eventId1: { typeId: 'MTA', paidSeats: 4, extraSeats: 1 }
        },
        uid2: {
          eventId1: { typeId: 'MTA', paidSeats: 1 },
        }
      }));

      expect(nextState).toEqual({
        uid1: {
          eventId1: { typeId: 'MTA', paidSeats: 4, extraSeats: 1 },
          eventId2: { typeId: 'HOLON', paidSeats: 2 }
        },
        uid2: {
          eventId1: { typeId: 'MTA', paidSeats: 1 },
          eventId2: { typeId: 'HOLON', paidSeats: 1 }
        }
      });
    });

  });

  describe('booking canceled', () => {

    it('should remove booking from user bookings', () => {
      const currentState = {
        uid1: {
          eventId1: { typeId: 'MTA', paidSeats: 5 },
          eventId2: { typeId: 'HOLON', paidSeats: 2 }
        },
        uid2: {
          eventId2: { typeId: 'HOLON', paidSeats: 1 }
        }
      };

      const nextState = bookingsReducer(currentState, bookingsCanceled('uid1', 'eventId1'));

      expect(nextState).toEqual({
        uid1: {
          eventId2: { typeId: 'HOLON', paidSeats: 2 }
        },
        uid2: {
          eventId2: { typeId: 'HOLON', paidSeats: 1 }
        }
      });
    });

    it('should remove user id from bookings if no booking exits', () => {
      const currentState = {
        uid1: {
          eventId1: { typeId: 'MTA', paidSeats: 5 },
          eventId2: { typeId: 'HOLON', paidSeats: 2 }
        },
        uid2: {
          eventId2: { typeId: 'HOLON', paidSeats: 1 }
        }
      };

      const nextState = bookingsReducer(currentState, bookingsCanceled('uid2', 'eventId2'));

      expect(nextState).toEqual({
        uid1: {
          eventId1: { typeId: 'MTA', paidSeats: 5 },
          eventId2: { typeId: 'HOLON', paidSeats: 2 }
        }
      });
    });

  });

  describe('user signed out', () => {

    it('should be empty', () => {
      const currentState = {
        uid: {
          eventId1: { typeId: 'MTA', paidSeats: 5 },
          eventId2: { typeId: 'HOLON', paidSeats: 2 }
        }
      };

      const nextState = bookingsReducer(currentState, userSignedOut());

      expect(nextState).toEqual({});
    });

  });

});
