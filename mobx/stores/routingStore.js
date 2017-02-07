import last from 'lodash/last';
import { observable, action, computed } from 'mobx';

export default class RoutingStore {
  @observable history = [{ pageId: 'auth', params: {} }];

  @computed get current() {
      return last(this.history);
  }

  @action navigateTo = (pageId, params = {}) => {
    this.history.push({ pageId, params });
  };

  @action navigateBack = () => {
    if (this.history.length > 1) {
      this.history.pop();
    }
  };

  @action replace = (pageId, params = {}) => {
    pageId = pageId || this.current.pageId;
    this.history[this.history.length - 1] = { pageId, params };
  };

  @action reset = (pageId, params = {}) => {
    this.history.replace([{ pageId, params }]);
  };
}