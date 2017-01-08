const countingReducer = require('../src/redux/reducers/routingReducer');
const navigationActions = require('../src/redux/actions/navigationActions');
const navigationConstants = require('../src/utils/navigationConstants');

describe('routingReducer', () => {

  it('should be initialized with auth data', () => {
    const state = countingReducer();

    expect(state).toEqual({
      current: { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
      history: [
        { pageId: navigationConstants.PAGES.AUTH.val, params: {} }
      ]
    });
  });

  describe('navigateTo', () => {

    it('should navigate', () => {
       const currentState = {
         current: { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
         history: [
           { pageId: navigationConstants.PAGES.AUTH.val, params: {} }
         ]
       };

       const nextState = countingReducer(currentState, navigationActions.navigateTo('somePage'));

       expect(nextState).toEqual({
         current: { pageId: 'somePage', params: {} },
         history: [
           { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
           { pageId: 'somePage', params: {} }
         ]
       });
    });

    it('should navigate with params', () => {
      const currentState = {
        current: { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} }
        ]
      };

      const nextState = countingReducer(currentState, navigationActions.navigateTo('somePage', { p1: 1 }));

      expect(nextState).toEqual({
        current: { pageId: 'somePage', params: { p1: 1 } },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } }
        ]
      });
    });

  });

  describe('navigateBack', () => {

    it('should navigateBack', () => {
      const currentState = {
        current: { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { } }
        ]
      };

      const nextState = countingReducer(currentState, navigationActions.navigateBack());

      expect(nextState).toEqual({
        current: { pageId: 'somePage', params: { p1: 1 } },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
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

      const nextState = countingReducer(currentState, navigationActions.navigateBack());

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
        current: { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} }
        ]
      };

      const nextState = countingReducer(currentState, navigationActions.replace('replacedPage', { r1: 1 }));

      expect(nextState).toEqual({
        current: { pageId: 'replacedPage', params: { r1: 1 } },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'replacedPage', params: { r1: 1 } }
        ]
      });

    });

    it('should replace only params in current history', function() {
      const currentState = {
        current: { pageId: 'somePage2', params: { } },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { } }
        ]
      };

      const nextState = countingReducer(currentState, navigationActions.replace(null, { r1: 1 }));

      expect(nextState).toEqual({
        current: { pageId: 'somePage2', params: { r1: 1 } },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { r1: 1 } }
        ]
      });

    });

    it('should replace only pageId in current history', function() {
      const currentState = {
        current: { pageId: 'somePage2', params: { r1: 1 } },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { r1: 1 } }
        ]
      };

      const nextState = countingReducer(currentState, navigationActions.replace('somePage3'));

      expect(nextState).toEqual({
        current: { pageId: 'somePage3', params: { r1: 1 } },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage3', params: { r1: 1 } }
        ]
      });

    });

  });

  describe('reset', () => {

    it('should reset the history and current', () => {
      const currentState = {
        current: { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { } }
        ]
      };

      const nextState = countingReducer(currentState, navigationActions.reset('resetPage'));

      expect(nextState).toEqual({
        current: { pageId: 'resetPage', params: {} },
        history: [
          { pageId: 'resetPage', params: {} }
        ]
      });
    });

    it('should reset the history and current with params', () => {
      const currentState = {
        current: { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
        history: [
          { pageId: navigationConstants.PAGES.AUTH.val, params: {} },
          { pageId: 'somePage', params: { p1: 1 } },
          { pageId: 'somePage2', params: { } }
        ]
      };

      const nextState = countingReducer(currentState, navigationActions.reset('resetPage', { p2: 2 }));

      expect(nextState).toEqual({
        current: { pageId: 'resetPage', params: { p2: 2 } },
        history: [
          { pageId: 'resetPage', params: { p2: 2 } }
        ]
      });
    });

  });

});