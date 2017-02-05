import { observable, action } from 'mobx';

export default class LoadingStore {
  @observable pendingRequestsCounter = 0;

  @action startPendingRequest = () => this.pendingRequestsCounter++;

  @action endPendingRequest = () => this.pendingRequestsCounter--;
}