import { computed } from 'mobx';

export default class LoadingAPI {
  constructor(stores) {
    this.stores = stores;
  }

  @computed get isBusy() {
    return this.stores.loadingStore.pendingRequestsCounter > 0;
  }

}