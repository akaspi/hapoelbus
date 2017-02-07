import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import { observer, inject } from 'mobx-react';
import APIPropTypes from '../utils/APIPropTypes';
import * as Constants from '../utils/constants'; //TODO: Blocked By Redux
import * as Translations from '../utils/translations'; //TODO: Blocked By Redux

function createMenuItems(currentPageId, navigateTo) {
    return (
        <div className='menu button-group'>
            { _.map(Constants.MENU_PAGES_IDS, pageId => (
                <DesktopMenuItem
                    key={pageId}
                    label={Translations.ROUTING.PAGES[pageId]}
                    isSelected={pageId === currentPageId}
                    onClick={_.partial(navigateTo, pageId)}
                />
            )) }
        </div>
    );
}

const DesktopMenuItem = ({ label, isSelected, onClick }) => {
    const itemClasses = classNames({
        active: isSelected,
        button: true,
        small: true
    });

    return (
        <a className={itemClasses} onClick={onClick}>{ label }</a>
    );
};

const DesktopMenu = ({ routingAPI }) => (
    <div className='medium-7 small-12 column vertical collapsed hide-for-small-only'>
        { createMenuItems(routingAPI.currentPageId, routingAPI.navigateTo) }
    </div>
);

DesktopMenu.displayName = 'DesktopMenu';

DesktopMenu.propTypes = {
    routingAPI: APIPropTypes.routingAPI.isRequired
};

export default inject('routingAPI')(observer(DesktopMenu));