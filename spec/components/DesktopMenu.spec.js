import _ from 'lodash';
import React from 'react';
import createComponent from 'react-unit';
import * as constants from '../../src/utils/constants';
import * as translations from '../../src/utils/translations';
import RoutingStore from '../../mobx/stores/routingStore';
import RoutingAPI from '../../api/routingAPI';
import DesktopMenu from '../../src/components/DesktopMenu';

describe('DesktopMenu Component', () => {

  const getPageIndexInMenu = pageId => _.indexOf(constants.MENU_PAGES_IDS, pageId);

  const getMenuItems = mobileMenuComponent => mobileMenuComponent.findByQuery('.menu > a.button');

  const createRoutingAPI= () => {
    const routingStore = new RoutingStore();
    return new RoutingAPI({ routingStore });
  };

  it('should be observer', () => {
    expect(DesktopMenu.wrappedComponent.isMobXReactObserver).toBe(true);
  });

  it('should NOT be shown in mobile', () => {
    const routingAPI = createRoutingAPI();

    const desktopMenuComponent = createComponent(<DesktopMenu.wrappedComponent routingAPI={routingAPI} />);

    expect(desktopMenuComponent.props.className).toContain('hide-for-small-only');
  });

  describe('menu items', () => {

    it('should render all menu items', () => {
      const routingAPI = createRoutingAPI();

      const desktopMenuComponent = createComponent(<DesktopMenu.wrappedComponent routingAPI={routingAPI} />);

      const menuItems = getMenuItems(desktopMenuComponent);

      expect(menuItems.length).toEqual(constants.MENU_PAGES_IDS.length);
    });

    it('should render label for each menu item', () => {
      const routingAPI = createRoutingAPI();

      const desktopMenuComponent = createComponent(<DesktopMenu.wrappedComponent routingAPI={routingAPI} />);

      const menuItems = getMenuItems(desktopMenuComponent);

      _.forEach(constants.MENU_PAGES_IDS, (pageId, i) => {
        expect(menuItems[i].text).toEqual(translations.ROUTING.PAGES[pageId]);
      });
    });

    it('should have an active class for the current page menu item', () => {
      const routingAPI = createRoutingAPI();

      const homePageMenuItemIndex = getPageIndexInMenu(constants.ROUTING.PAGES.HOME);

      routingAPI.navigateTo(constants.ROUTING.PAGES.HOME);

      const desktopMenuComponent = createComponent(<DesktopMenu.wrappedComponent routingAPI={routingAPI} />);

      const menuItems = getMenuItems(desktopMenuComponent);

      expect(menuItems[homePageMenuItemIndex].props.className).toContain('active');
    });

    describe('menu item click', () => {

      const navigateToPageInMenu = (desktopMenuComponent, pageId) => {
        const pageMenuItemIndex = getPageIndexInMenu(pageId);

        let menuItems = getMenuItems(desktopMenuComponent);

        menuItems[pageMenuItemIndex].onClick();
        return desktopMenuComponent.renderNew();
      };

      const getMenuComponentAndNavigateToPage = (routingAPI, pageId) => {
        routingAPI.navigateTo(constants.ROUTING.PAGES.HOME);

        const desktopMenuComponent = createComponent(<DesktopMenu.wrappedComponent routingAPI={routingAPI} />);

        return navigateToPageInMenu(desktopMenuComponent, pageId);
      };

      it('should navigate to bookings page', () => {
        const routingAPI = createRoutingAPI();

        getMenuComponentAndNavigateToPage(routingAPI, constants.ROUTING.PAGES.BOOKINGS);

        expect(routingAPI.currentPageId).toEqual(constants.ROUTING.PAGES.BOOKINGS);
      });

      it('bookings menu item should be selected', () => {
        const routingAPI = createRoutingAPI();

        const homePageMenuItemIndex = getPageIndexInMenu(constants.ROUTING.PAGES.HOME);
        const bookingsMenuItemIndex = getPageIndexInMenu(constants.ROUTING.PAGES.BOOKINGS);

        const desktopMenuComponent = getMenuComponentAndNavigateToPage(routingAPI, constants.ROUTING.PAGES.BOOKINGS);

        const menuItems = getMenuItems(desktopMenuComponent);

        expect(menuItems[bookingsMenuItemIndex].props.className).toContain('active');
        expect(menuItems[homePageMenuItemIndex].props.className).not.toContain('active');
      });

    });

  });

});

