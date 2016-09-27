import eventsReducer from '../../src/redux/reducers/eventsReducer';
import { eventsReceived, eventRemoved } from '../../src/redux/actions/eventActions';
import { userSignedOut } from '../../src/redux/actions/authActions';

describe('eventsReducer spec', () => {

  it('should be empty by default', () => {
    const nextState = eventsReducer();

    expect(nextState).toEqual({});
  });

  it('should merge received events', () => {
    const currentState = {
      eventId: {
        name: 'EVENT A'
      }
    };

    const nextState = eventsReducer(currentState, eventsReceived({
      eventId: {
        month: '04'
      },
      eventId2: {
        name: 'EVENT B',
        month: '02'
      }
    }));

    expect(nextState).toEqual({
      eventId: {
        name: 'EVENT A',
        month: '04'
      },
      eventId2: {
        name: 'EVENT B',
        month: '02'
      }
    });
  });

  it('should remove event', () => {
    const currentState = {
      eventId: {
        name: 'EVENT A',
        month: '04'
      },
      eventId2: {
        name: 'EVENT B',
        month: '02'
      }
    };

    const nextState = eventsReducer(currentState, eventRemoved('eventId'));

    expect(nextState).toEqual({
      eventId2: {
        name: 'EVENT B',
        month: '02'
      }
    });
  });

  it('should be empty after sign out', () => {
    const currentState = {
      eventId: {
        name: 'EVENT A',
        month: '04'
      },
      eventId2: {
        name: 'EVENT B',
        month: '02'
      }
    };

    const nextState = eventsReducer(currentState, userSignedOut());

    expect(nextState).toEqual({});
  });

});