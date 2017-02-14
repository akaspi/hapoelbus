import React from 'react';
import createComponent from 'react-unit';
import AuthStore from '../../mobx/stores/authStore';
import AuthDataAPI from '../../api/authDataAPI';
import TopBar from '../../src/components/topBar2';
import LoggedInUserInfo from '../../src/components/LoggedInUserInfo';
import MobileMenu from '../../src/components/MobileMenu';
import DesktopMenu from '../../src/components/DesktopMenu';

describe('TopBar Component', () => {

  it('should be observer', () => {
    expect(TopBar.wrappedComponent.isMobXReactObserver).toBe(true);
  });

  it('should render LoggedInUserInfo component', () => {
    const authStore = new AuthStore();
    const authDataAPI = new AuthDataAPI({ authStore });

    const topBar = createComponent.shallow(<TopBar.wrappedComponent authDataAPI={authDataAPI}/>);
    const loggedInUserInfo = topBar.findByComponent(LoggedInUserInfo)[0];

    expect(loggedInUserInfo).toBeDefined();
  });

  describe('admin user', () => {

    it('should render mobile menu', () => {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      authStore.setAuthData({ isAdmin: true });

      const topBar = createComponent.shallow(<TopBar.wrappedComponent authDataAPI={authDataAPI}/>);
      const mobileMenu = topBar.findByComponent(MobileMenu)[0];

      expect(mobileMenu).toBeDefined();
    });

    it('should render desktop menu', () => {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      authStore.setAuthData({ isAdmin: true });

      const topBar = createComponent.shallow(<TopBar.wrappedComponent authDataAPI={authDataAPI}/>);
      const desktopMenu = topBar.findByComponent(DesktopMenu)[0];

      expect(desktopMenu).toBeDefined();
    });

  });

  describe('non admin user', () => {

    it('should NOT render mobile menu', () => {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      authStore.setAuthData({ isAdmin: false });

      const topBar = createComponent.shallow(<TopBar.wrappedComponent authDataAPI={authDataAPI}/>);
      const mobileMenu = topBar.findByComponent(MobileMenu)[0];

      expect(mobileMenu).not.toBeDefined();
    });

    it('should NOT render desktop menu', () => {
      const authStore = new AuthStore();
      const authDataAPI = new AuthDataAPI({ authStore });

      authStore.setAuthData({ isAdmin: false });

      const topBar = createComponent.shallow(<TopBar.wrappedComponent authDataAPI={authDataAPI}/>);
      const desktopMenu = topBar.findByComponent(DesktopMenu)[0];

      expect(desktopMenu).not.toBeDefined();
    });

  });

});

