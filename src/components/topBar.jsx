import React from 'react';
import { observer, inject } from 'mobx-react';
import LoggedInUserInfo from './LoggedInUserInfo.jsx';
import APIPropTypes from '../utils/APIPropTypes';
import MobileMenu from './MobileMenu.jsx';
import DesktopMenu from './DesktopMenu.jsx';

import '../styles/topBar.scss';

const TopBar = ({ authDataAPI }) => (
    <div className='top-bar row small-collapse hide-for-print'>

        <LoggedInUserInfo />

        { authDataAPI.isAdmin ? <MobileMenu /> : null }
        { authDataAPI.isAdmin ? <DesktopMenu /> : null}

    </div>
);

TopBar.propTypes = {
    authDataAPI: APIPropTypes.authDataAPI.isRequired
};

export default inject('authDataAPI')(observer(TopBar));