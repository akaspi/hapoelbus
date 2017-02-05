import LoadingAPI from '../../api/loadingAPI';
import LoadingStore from '../../mobx/stores/loadingStore';

describe('LoadingAPI', () => {

  it('should not be busy on creation', () => {
    const loadingStore = new LoadingStore();
    const loadingAPI = new LoadingAPI({ loadingStore });

    expect(loadingAPI.isBusy).toBe(false);
  });

  it('should be busy when starting pending request', () => {
    const loadingStore = new LoadingStore();
    const loadingAPI = new LoadingAPI({ loadingStore });

    loadingStore.startPendingRequest();

    expect(loadingAPI.isBusy).toBe(true);
  });

  it('should not be busy when all pending requests ends', () => {
    const loadingStore = new LoadingStore();
    const loadingAPI = new LoadingAPI({ loadingStore });

    loadingStore.startPendingRequest();
    loadingStore.startPendingRequest();
    loadingStore.endPendingRequest();
    loadingStore.startPendingRequest();
    loadingStore.endPendingRequest();
    loadingStore.endPendingRequest();

    expect(loadingAPI.isBusy).toBe(false);
  });

});