const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');
const classNames = require('classnames');

import LoggedInUserInfo from './LoggedInUserInfo.jsx';
import MobileMenu from './MobileMenu.jsx';

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

function createDesktopMenu(currentPageId, navigateTo) {

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

    return (
        <div className="medium-7 small-12 column vertical collapsed">
            <div className="menu button-group hide-for-small-only" key="admin-menu">
                { _.map(menuPagesIds, createDesktopMenuItem) }
            </div>
        </div>
    );
}

const TopBar = ({ uid, currentPageId, navigateTo, isAdmin }) => ( //TODO: Blocked By Redux - remove this.props.uid
    <div className="top-bar row small-collapse hide-for-print">
        { uid ? <LoggedInUserInfo /> : null }
        { isAdmin ? <MobileMenu /> : null }
        { isAdmin ? createDesktopMenu(currentPageId, navigateTo) : null}
    </div>
);

TopBar.propTypes = {
    uid: React.PropTypes.string.isRequired,
    photoURL: React.PropTypes.string,
    isAdmin: React.PropTypes.bool,
    currentPageId: React.PropTypes.string.isRequired,
    navigateTo: React.PropTypes.func,
    signOut: React.PropTypes.func
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TopBar);