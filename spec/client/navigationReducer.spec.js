const navigationReducer = require('../../src/redux/reducers/navigationReducer');
const navigationActions = require('../../src/redux/actions/navigationActions');
const authActions = require('../../src/redux/actions/authActions');

describe('navigationReducer spec', () => {

  it('should be initialized with auth page', () => {
    const nextState = navigationReducer();

    expect(nextState).toEqual(['AUTH']);
  });

  it('should add page Id to navigation stack when navigating', () => {
      const currentState = ['page1', 'page2'];

      const nextState = navigationReducer(currentState, navigationActions.navigateTo('page3'));

      expect(nextState).toEqual(['page1', 'page2', 'page3']);
  });

  it('should remove the last page id when navigating back', () => {
    const currentState = ['page1', 'page2'];

    const nextState = navigationReducer(currentState, navigationActions.navigateBack());

    expect(nextState).toEqual(['page1']);
  });

  it('should replace the stack with a given page', () => {
    const currentState = ['page1', 'page2'];

    const nextState = navigationReducer(currentState, navigationActions.replace('differentPage'));

    expect(nextState).toEqual(['differentPage']);
  });

  it('should keep the last page in the stack', () => {
    const currentState = ['page1'];

    const nextState = navigationReducer(currentState, navigationActions.navigateBack());

    expect(nextState).toEqual(['page1']);
  });

  it('should return to initial state on logout', () => {
    const currentState = ['page1', 'page2'];

    const nextState = navigationReducer(currentState, authActions.userSignedOut());

    expect(nextState).toEqual(['AUTH']);
  });

});
