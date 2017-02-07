import { isComputed } from 'mobx';
import RoutingAPI from '../../api/routingAPI';
import RoutingStore from '../../mobx/stores/routingStore';

describe('routingAPI', () => {

  describe('currentPageId', () => {

    it('should be a computed function', () => {
      const routingStore = new RoutingStore();
      const routingAPI = new RoutingAPI({ routingStore });

      expect(isComputed(routingAPI, 'currentPageId')).toBe(true);
    });

    it('should return the current page id', () => {
      const routingStore = new RoutingStore();
      const routingAPI = new RoutingAPI({routingStore});

      routingStore.navigateTo('spiderPage');

      expect(routingAPI.currentPageId).toEqual('spiderPage');
    });

  });

});
