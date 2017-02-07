const React = require('react');
const ReactRedux = require('react-redux');

import LoggedInUserInfo from './LoggedInUserInfo.jsx';
import MobileMenu from './MobileMenu.jsx';
import DesktopMenu from './DesktopMenu.jsx';

const routingActions = require('../redux/actions/routingActions');
const authActions = require('../redux/actions/authActions');

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

const TopBar = ({ uid, currentPageId, navigateTo, isAdmin }) => ( //TODO: Blocked By Redux - remove this.props.uid
    <div className="top-bar row small-collapse hide-for-print">
        <LoggedInUserInfo />
        { isAdmin ? <MobileMenu /> : null }
        { isAdmin ? <DesktopMenu /> : null}
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