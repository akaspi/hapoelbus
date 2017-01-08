const countingReducer = require('../src/redux/reducers/routingReducer');
const routingActions = require('../src/redux/actions/routingActions');
const Constants = require('../src/utils/constants');

describe('routingReducer', () => {

  it('should be initialized with auth data', () => {
    const state = countingReducer();

    expect(state).toEqual({
      current: { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
      history: [
        { pageId: Constants.ROUTING.PAGES.AUTH, params: {} }
      ]
    });
  });

  describe('navigateTo', () => {

    it('should navigate', () => {
       const currentState = {
         current: { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
         history: [
           { pageId: Constants.ROUTING.PAGES.AUTH, params: {} }
         ]
       };

       const nextState = countingReducer(currentState, routingActions.navigateTo('somePage'));

       expect(nextState).toEqual({
         current: { pageId: 'somePage', params: {} },
         history: [
           { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
           { pageId: 'somePage', params: {} }
         ]
       });
    });

    it('should navigate with params', () => {
      const currentState = {
        current: { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} }
        ]
      };

      const nextState = countingReducer(currentState, routingActions.navigateTo('somePage', { p1: 1 }));

      expect(nextState).toEqual({
        current: { pageId: 'somePage', params: { p1: 1 } },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } }
        ]
      });
    });

  });

  describe('navigateBack', () => {

    it('should navigateBack', () => {
      const currentState = {
        current: { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { } }
        ]
      };

      const nextState = countingReducer(currentState, routingActions.navigateBack());

      expect(nextState).toEqual({
        current: { pageId: 'somePage', params: { p1: 1 } },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } }
        ]
      });
    });

    it('should NOT navigate back when there is only 1 item in history stack', () => {
      const currentState = {
        current: { pageId: 'somePage', params: {} },
        history: [
          { pageId: 'somePage', params: {} }
        ]
      };

      const nextState = countingReducer(currentState, routingActions.navigateBack());

      expect(nextState).toEqual({
        current: { pageId: 'somePage', params: {} },
        history: [
          { pageId: 'somePage', params: {} }
        ]
      });
    });

  });

  describe('replace', () => {

    it('should replace the history and current', function() {
      const currentState = {
        current: { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} }
        ]
      };

      const nextState = countingReducer(currentState, routingActions.replace('replacedPage', { r1: 1 }));

      expect(nextState).toEqual({
        current: { pageId: 'replacedPage', params: { r1: 1 } },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'replacedPage', params: { r1: 1 } }
        ]
      });

    });

    it('should replace only params in current history', function() {
      const currentState = {
        current: { pageId: 'somePage2', params: { } },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { } }
        ]
      };

      const nextState = countingReducer(currentState, routingActions.replace(null, { r1: 1 }));

      expect(nextState).toEqual({
        current: { pageId: 'somePage2', params: { r1: 1 } },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { r1: 1 } }
        ]
      });

    });

    it('should replace only pageId in current history', function() {
      const currentState = {
        current: { pageId: 'somePage2', params: { r1: 1 } },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { r1: 1 } }
        ]
      };

      const nextState = countingReducer(currentState, routingActions.replace('somePage3'));

      expect(nextState).toEqual({
        current: { pageId: 'somePage3', params: { r1: 1 } },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage3', params: { r1: 1 } }
        ]
      });

    });

  });

  describe('reset', () => {

    it('should reset the history and current', () => {
      const currentState = {
        current: { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { } }
        ]
      };

      const nextState = countingReducer(currentState, routingActions.reset('resetPage'));

      expect(nextState).toEqual({
        current: { pageId: 'resetPage', params: {} },
        history: [
          { pageId: 'resetPage', params: {} }
        ]
      });
    });

    it('should reset the history and current with params', () => {
      const currentState = {
        current: { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
        history: [
          { pageId: Constants.ROUTING.PAGES.AUTH, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { } }
        ]
      };

      const nextState = countingReducer(currentState, routingActions.reset('resetPage', { p2: 2 }));

      expect(nextState).toEqual({
        current: { pageId: 'resetPage', params: { p2: 2 } },
        history: [
          { pageId: 'resetPage', params: { p2: 2 } }
        ]
      });
    });

  });

});