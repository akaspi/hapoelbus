const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');
const classNames = require('classnames');

import LoggedInUserInfo from './LoggedInUserInfo.jsx';

const Constants = require('../utils/constants');
const Translations = require('../utils/translations');

const routingActions = require('../redux/actions/routingActions');
const authActions = require('../redux/actions/authActions');

const menuPagesIds = [
    Constants.ROUTING.PAGES.HOME,
    Constants.ROUTING.PAGES.USERS,
    Constants.ROUTING.PAGES.GAMES,
    Constants.ROUTING.PAGES.BOOKINGS,
    Constants.ROUTING.PAGES.DISTRIBUTION
];

require('../styles/topBar.scss');

function mapStateToProps(state) {
    const authData = state.authData;
    const users = state.users;

    return {
        uid: authData.uid,
        photoURL: authData.photoURL || 'http://image.flaticon.com/icons/svg/163/163804.svg',
        isAdmin: authData.isAdmin,
        currentPageId: state.routing.current.pageId,
        currentUser: authData && users[authData.uid]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigateTo: (pageId, params) => dispatch(routingActions.navigateTo(pageId, params)),
        signOut: () => dispatch(authActions.signOut())
    };
}

function createSmallMenuForMobile(toggleMenuVisibility) {
    return (
        <div className="show-for-small-only float-left" key="admin-menu-icon">
            <a className="small-menu button" onClick={toggleMenuVisibility}>
                <i className="fa fa-bars" aria-hidden="true"/>
            </a>
        </div>
    );
}

function createMenu(currentPageId, navigateTo, isAdmin, isMenuVisible, toggleMenuVisibility) {

    function createDesktopMenuItem(pageId) {
        const itemClasses = classNames({
            active: currentPageId === pageId,
            button: true,
            small: true
        });

        return (
            <a className={itemClasses} onClick={navigateTo.bind(this, pageId)} key={'page-' + pageId}>
                { Translations.ROUTING.PAGES[pageId] }
            </a>
        );
    }

    function createMobileMenuItem(pageId) {
        const itemClasses = classNames({
            active: currentPageId === pageId,
            button: true
        });

        const onMobileMenuClicked = () => {
            navigateTo(pageId);
            toggleMenuVisibility();
        };

        return (
            <a className={itemClasses} onClick={onMobileMenuClicked} key={'page-' + pageId}>
                { Translations.ROUTING.PAGES[pageId] }
            </a>
        );
    }

    function createDesktopMenu() {
        return (
            <div className="menu button-group hide-for-small-only" key="admin-menu">
                { _.map(menuPagesIds, createDesktopMenuItem) }
            </div>
        );
    }

    function createMobileMenu() {
        return (
            <div className="menu button-group stacked-for-small show-for-small-only" key="admin-menu-mobile">
                { _.map(menuPagesIds, createMobileMenuItem) }
            </div>
        );
    }

    return (
        <div className="medium-7 small-12 column vertical collapsed">
            { isAdmin ? createDesktopMenu() : null }
            { isAdmin && isMenuVisible ? createMobileMenu() : null }
        </div>
    );
}

class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuVisible: false
        }
    }

    toggleMenuVisibility() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        });
    }

    render() { //TODO: Blocked By Redux - remove this.props.uid
        return (
            <div className="top-bar row small-collapse hide-for-print">
                { this.props.uid ? <LoggedInUserInfo /> : null }
                { this.props.isAdmin ? createSmallMenuForMobile(this.toggleMenuVisibility.bind(this)) : null }
                { createMenu(this.props.currentPageId, this.props.navigateTo, this.props.isAdmin, this.state.isMenuVisible, this.toggleMenuVisibility.bind(this)) }
            </div>
        );
    }
}

TopBar.propTypes = {
    uid: React.PropTypes.string.isRequired,
    photoURL: React.PropTypes.string,
    isAdmin: React.PropTypes.bool,
    currentPageId: React.PropTypes.string.isRequired,
    navigateTo: React.PropTypes.func,
    signOut: React.PropTypes.func
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TopBar);