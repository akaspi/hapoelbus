import _ from 'lodash';
import React from 'react';
import createComponent from 'react-unit';
import * as constants from '../../src/utils/constants';
import * as translations from '../../src/utils/translations';
import RoutingStore from '../../mobx/stores/routingStore';
import RoutingAPI from '../../api/routingAPI';
import MobileMenu from '../../src/components/MobileMenu';

describe('MobileMenu Component', () => {

  const getPageIndexInMenu = pageId => _.indexOf(constants.MENU_PAGES_IDS, pageId);

  const isMenuOpen = mobileMenuComponent => getMenuItems(mobileMenuComponent).length > 0;

  const getMenuItems = mobileMenuComponent => mobileMenuComponent.findByQuery('.menu > a.button');

  function toggleMenu(mobileMenuComponent) {
    const hamburgerMenuNode = mobileMenuComponent.findByQuery('a.small-menu')[0];
    hamburgerMenuNode.onClick();
    return mobileMenuComponent.renderNew();
  }

  it('should be observer', () => {
    expect(MobileMenu.wrappedComponent.isMobXReactObserver).toBe(true);
  });

  it('should be shown in mobile only', () => {
    const routingStore = new RoutingStore();
    const routingAPI = new RoutingAPI({routingStore});

    const mobileMenuComponent = createComponent(<MobileMenu.wrappedComponent routingAPI={routingAPI}/>);

    expect(mobileMenuComponent.props.className).toContain('show-for-small-only');
  });

  it('should be closed by default', () => {
    const routingStore = new RoutingStore();
    const routingAPI = new RoutingAPI({routingStore});

    const mobileMenuComponent = createComponent(<MobileMenu.wrappedComponent routingAPI={routingAPI}/>);

    expect(isMenuOpen(mobileMenuComponent)).toBe(false);
  });

  it('should open', () => {
    const routingStore = new RoutingStore();
    const routingAPI = new RoutingAPI({routingStore});

    let mobileMenuComponent = createComponent(<MobileMenu.wrappedComponent routingAPI={routingAPI}/>);
    mobileMenuComponent = toggleMenu(mobileMenuComponent);

    expect(isMenuOpen(mobileMenuComponent)).toBe(true);
  });

  it('should close', () => {
    const routingStore = new RoutingStore();
    const routingAPI = new RoutingAPI({routingStore});

    let mobileMenuComponent = createComponent(<MobileMenu.wrappedComponent routingAPI={routingAPI}/>);
    mobileMenuComponent = toggleMenu(mobileMenuComponent);
    mobileMenuComponent = toggleMenu(mobileMenuComponent);

    expect(isMenuOpen(mobileMenuComponent)).toBe(false);
  });

  function createRoutingAPI() {
    const routingStore = new RoutingStore();
    return new RoutingAPI({routingStore});
  }

  describe('menu items', () => {

    it('should render all menu items', () => {
      const routingStore = new RoutingStore();
      const routingAPI = new RoutingAPI({routingStore});


      let mobileMenuComponent = createComponent(<MobileMenu.wrappedComponent routingAPI={routingAPI}/>);
      mobileMenuComponent = toggleMenu(mobileMenuComponent);

      const menuItems = getMenuItems(mobileMenuComponent);

      expect(menuItems.length).toEqual(constants.MENU_PAGES_IDS.length);
    });

    it('should render label for each menu item', () => {
      const routingStore = new RoutingStore();
      const routingAPI = new RoutingAPI({routingStore});

      let mobileMenuComponent = createComponent(<MobileMenu.wrappedComponent routingAPI={routingAPI}/>);
      mobileMenuComponent = toggleMenu(mobileMenuComponent);

      const menuItems = getMenuItems(mobileMenuComponent);

      _.forEach(constants.MENU_PAGES_IDS, (pageId, i) => {
        expect(menuItems[i].text).toEqual(translations.ROUTING.PAGES[pageId]);
      });
    });


    it('should have an active class for the current page menu item', () => {
      const routingStore = new RoutingStore();
      const routingAPI = new RoutingAPI({routingStore});
      const homePageMenuItemIndex = getPageIndexInMenu(constants.ROUTING.PAGES.HOME);

      routingStore.navigateTo(constants.ROUTING.PAGES.HOME);

      let mobileMenuComponent = createComponent(<MobileMenu.wrappedComponent routingAPI={routingAPI}/>);
      mobileMenuComponent = toggleMenu(mobileMenuComponent);

      const menuItems = getMenuItems(mobileMenuComponent);

      expect(menuItems[homePageMenuItemIndex].props.className).toContain('active');
    });

    describe('menu item click', () => {

      const navigateToPageInMenu = (mobileMenuComponent, pageId) => {
        const pageMenuItemIndex = getPageIndexInMenu(pageId);

        let menuItems = getMenuItems(mobileMenuComponent);

        menuItems[pageMenuItemIndex].onClick();
        return mobileMenuComponent.renderNew();
      };

      const getMenuComponentAndNavigateToPage = (routingAPI, pageId) => {
        routingAPI.navigateTo(constants.ROUTING.PAGES.HOME);

        let mobileMenuComponent = createComponent(<MobileMenu.wrappedComponent routingAPI={routingAPI}/>);
        mobileMenuComponent = toggleMenu(mobileMenuComponent);
        return navigateToPageInMenu(mobileMenuComponent, pageId);
      }

      it('should navigate to bookings page', () => {
        const routingAPI = createRoutingAPI();

        getMenuComponentAndNavigateToPage(routingAPI, constants.ROUTING.PAGES.BOOKINGS);

        expect(routingAPI.currentPageId).toEqual(constants.ROUTING.PAGES.BOOKINGS);
      });

      it('should close menu', () => {
        const routingAPI = createRoutingAPI();

        const mobileMenuComponent = getMenuComponentAndNavigateToPage(routingAPI, constants.ROUTING.PAGES.BOOKINGS);

        expect(isMenuOpen(mobileMenuComponent)).toBe(false);
      });

      it('bookings menu item should be selected', () => {
        const routingAPI = createRoutingAPI();
        const homePageMenuItemIndex = getPageIndexInMenu(constants.ROUTING.PAGES.HOME);
        const bookingsMenuItemIndex = getPageIndexInMenu(constants.ROUTING.PAGES.BOOKINGS);

        let mobileMenuComponent = getMenuComponentAndNavigateToPage(routingAPI, constants.ROUTING.PAGES.BOOKINGS);

        mobileMenuComponent = toggleMenu(mobileMenuComponent);
        const menuItems = getMenuItems(mobileMenuComponent);

        expect(menuItems[bookingsMenuItemIndex].props.className).toContain('active');
        expect(menuItems[homePageMenuItemIndex].props.className).not.toContain('active');
      });

    });

  });

});

