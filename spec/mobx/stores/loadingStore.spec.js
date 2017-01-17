import { LoadingStore } from '../../../mobx/stores/loadingStore';

describe('LoadingStore', () => {

  it('should not be busy on creation', () => {
    const loadingStore = new LoadingStore();

    expect(loadingStore.isBusy).toBe(false);
  });

  it('should be busy when starting pending request', () => {
    const loadingStore = new LoadingStore();

    loadingStore.startPendingRequest();

    expect(loadingStore.isBusy).toBe(true);
  });

  it('should not be busy when all pending requests ends', () => {
    const loadingStore = new LoadingStore();

    loadingStore.startPendingRequest();
    loadingStore.startPendingRequest();
    loadingStore.endPendingRequest();
    loadingStore.startPendingRequest();
    loadingStore.endPendingRequest();
    loadingStore.endPendingRequest();

    expect(loadingStore.isBusy).toBe(false);
  });

});