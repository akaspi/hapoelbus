import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import { observer, inject } from 'mobx-react';
import APIPropTypes from '../utils/APIPropTypes';
import * as Constants from '../utils/constants'; //TODO: Blocked By Redux
import * as Translations from '../utils/translations'; //TODO: Blocked By Redux

function createMenuItems(currentPageId, navigateTo) {
    return (
        <div className='menu button-group stacked-for-small' key='admin-menu-mobile'>
            { _.map(Constants.MENU_PAGES_IDS, pageId => (
                <MobileMenuItem
                    key={pageId}
                    label={Translations.ROUTING.PAGES[pageId]}
                    isSelected={pageId === currentPageId}
                    onClick={_.partial(navigateTo, pageId)}
                />
            )) }
        </div>
    );
}

const MobileMenuItem = ({ label, isSelected, onClick }) => {
    const itemClasses = classNames({
        active: isSelected,
        button: true
    });

    return (
        <a className={itemClasses} onClick={onClick}>{ label }</a>
    );
};

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggleMenuOpen = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    navigateToPage = pageId => {
        this.props.routingAPI.navigateTo(pageId);
        this.toggleMenuOpen();
    };

    render() {
        const { currentPageId } = this.props.routingAPI;
        return (
            <div className="show-for-small-only">
                <a className="small-menu button" onClick={this.toggleMenuOpen}>
                    <i className="fa fa-bars" aria-hidden="true"/>
                </a>
                { this.state.isOpen ? createMenuItems(currentPageId, this.navigateToPage) : null }
            </div>
        );
    }
}

MobileMenu.displayName = 'MobileMenu';

MobileMenu.propTypes = {
    routingAPI: APIPropTypes.routingAPI.isRequired
};

export default inject('routingAPI')(observer(MobileMenu));