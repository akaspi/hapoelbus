import { observable, action, computed } from 'mobx';

export default class LoadingStore {
  @observable pendingRequestsCounter = 0;

  @computed get isBusy() {
    return this.pendingRequestsCounter > 0;
  }

  @action startPendingRequest = () => this.pendingRequestsCounter++;

  @action endPendingRequest = () => this.pendingRequestsCounter--;
}