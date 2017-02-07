import RoutingStore from '../../../mobx/stores/routingStore';

describe('RoutingStore', () => {

  it('should be initialized with auth pageId and empty params', () => {
    const routingStore = new RoutingStore();

    expect(routingStore.current).toEqual({ pageId: 'auth', params: {} });
    expect(routingStore.history.length).toEqual(1);
  });

  it('should navigate to page', () => {
    const routingStore = new RoutingStore();

    routingStore.navigateTo('pageId', { p: 1 });

    expect(routingStore.current).toEqual({ pageId: 'pageId', params: { p: 1 }});
    expect(routingStore.history.length).toEqual(2);
  });

  it('should navigate back', () => {
    const routingStore = new RoutingStore();

    routingStore.navigateTo('pageId', { p: 1 });
    routingStore.navigateTo('otherPageId', { p: 3 });
    routingStore.navigateBack();

    expect(routingStore.current).toEqual({ pageId: 'pageId', params: { p: 1 } });
    expect(routingStore.history.length).toEqual(2);
  });

  it('should not navigate back if there is a single navigation history', () => {
    const routingStore = new RoutingStore();

    routingStore.navigateBack();

    expect(routingStore.current).toEqual({ pageId: 'auth', params: {} });
    expect(routingStore.history.length).toEqual(1);
  });

  it('should replace page', () => {
    const routingStore = new RoutingStore();

    routingStore.navigateTo('pageId', { p: 1 });
    routingStore.replace('someOtherPage');

    expect(routingStore.current).toEqual({ pageId: 'someOtherPage', params: {} });
    expect(routingStore.history.length).toEqual(2);
  });

  it('should replace params', () => {
    const routingStore = new RoutingStore();

    routingStore.navigateTo('pageId', { p: 1 });
    routingStore.replace(null, { p : 4 });

    expect(routingStore.current).toEqual({ pageId: 'pageId', params: { p: 4 } });
    expect(routingStore.history.length).toEqual(2);
  });

  it('should reset history', () => {
    const routingStore = new RoutingStore();

    routingStore.navigateTo('pageId', { p: 1 });
    routingStore.navigateTo('otherPageId', { p: 3 });
    routingStore.reset('resetPageId', { r: 8 });

    expect(routingStore.current).toEqual({ pageId: 'resetPageId', params: { r: 8 } });
    expect(routingStore.history.length).toEqual(1);
  });

});