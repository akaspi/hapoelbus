const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');
const classNames = require('classnames');

const navigationConstants = require('../utils/navigationConstants');

const navigationActions = require('../redux/actions/navigationActions');
const authActions = require('../redux/actions/authActions');

require('../styles/topBar.scss');

function mapStateToProps(state) {
    const authData = state.authData;
    const users = state.users;

    return {
        photoURL: authData.photoURL || 'http://image.flaticon.com/icons/svg/163/163804.svg',
        isAdmin: authData.isAdmin,
        currentPage: state.currentPage,
        currentUser: authData && users[authData.uid]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigateTo: pageId => dispatch(navigationActions.navigateTo(pageId)),
        signOut: () => dispatch(authActions.signOut())
    };
}

function getUserTitle(currentUser) {
    if (!currentUser) {
        return 'משתמש';
    }
    return currentUser.firstName;
}

function createHeader(currentUser, photoURL, navigateTo, signOut) {
    return (
        <div className="medium-5 small-10 column user-info">
            <img className="avatar" src={photoURL} onClick={navigateTo.bind(this, navigationConstants.PAGES.EDIT_USER_INFO.val)}/>
            <span>שלום </span>
            <span className="user-name">{getUserTitle(currentUser)}</span><span> | </span>
            <a className="disconnect" onClick={signOut}>התנתק</a>
        </div>
    );
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

function createMenu(pages, currentPage, navigateTo, isAdmin, isMenuVisible, toggleMenuVisibility) {

    function createDesktopMenuItem(page) {
        const itemClasses = classNames({
            active: currentPage === page.val,
            button: true,
            small: true
        });

        return (
            <a className={itemClasses} onClick={navigateTo.bind(this, page.val)} key={'page-' + page.val}>
                { navigationConstants.TRANSLATIONS[page.val] }
            </a>
        );
    }

    function createMobileMenuItem(page) {
        const itemClasses = classNames({
            active: currentPage === page.val,
            button: true
        });

        const onMobileMenuClicked = () => {
            navigateTo(page.val);
            toggleMenuVisibility();
        };

        return (
            <a className={itemClasses} onClick={onMobileMenuClicked} key={'page-' + page.val}>
                { navigationConstants.TRANSLATIONS[page.val] }
            </a>
        );
    }

    function createDesktopMenu() {
        return (
            <div className="menu button-group hide-for-small-only" key="admin-menu">
                { _(pages).pickBy('visible').map(createDesktopMenuItem).value() }
            </div>
        );
    }

    function createMobileMenu() {
        return (
            <div className="menu button-group stacked-for-small show-for-small-only" key="admin-menu-mobile">
                { _(pages).pickBy('visible').map(createMobileMenuItem).value() }
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

    render() {
        return (
            <div className="top-bar row small-collapse hide-for-print">
                { createHeader(this.props.currentUser, this.props.photoURL, this.props.navigateTo, this.props.signOut) }
                { this.props.isAdmin ? createSmallMenuForMobile(this.toggleMenuVisibility.bind(this)) : null }
                { createMenu(navigationConstants.PAGES, this.props.currentPage, this.props.navigateTo, this.props.isAdmin, this.state.isMenuVisible, this.toggleMenuVisibility.bind(this)) }
            </div>
        );
    }
}

TopBar.propTypes = {
    photoURL: React.PropTypes.string,
    isAdmin: React.PropTypes.bool,
    currentPage: React.PropTypes.string,
    navigateTo: React.PropTypes.func,
    signOut: React.PropTypes.func
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TopBar);