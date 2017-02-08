import _ from 'lodash';
import { computed } from 'mobx';

export default class RoutingAPI {
  constructor(stores) {
    this.stores = stores;
  }
  
  @computed get currentPageId() {
    const currentRouting = _.last(this.stores.routingStore.history);
    return currentRouting.pageId;
  }

  navigateTo = (pageId, params) => {
    window.rStore.dispatch({ type: 'NAVIGATE_TO', pageId, params }); //TODO: Blocked By Redux
    this.stores.routingStore.navigateTo(pageId, params);
  }
  
}