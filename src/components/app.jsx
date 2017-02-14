const React = require('react');
const ReactReudx = require('react-redux');

const authActions = require('../redux/actions/authActions');
const Constants = require('../utils/constants');

import Spinner from './Spinner';
import TopBar from './topBar2';
const AuthPage = require('./authPage');
const HomePage = require('./homePage');
const UsersPage = require('./usersPage');
const GamesPage = require('./gamesPage');
const BookingsPage = require('./bookingsPage');
const DistributionPage = require('./distributionPage');
const EditUserInfoPage = require('./editUserInfoPage');
const UpdateBookingPage = require('./updateBookingPage');
const UpdateGamePage = require('./updateGamePage');

require('../styles/app.scss');

function mapStateToProps(state) {
    return {
        authData: state.authData,
        currentPageId: state.routing.current.pageId
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchAuthData: () => dispatch(authActions.fetchAuthData())
});

function getPageComponent(currentPageId) {
    switch (currentPageId) {
        case Constants.ROUTING.PAGES.HOME:
            return ( <HomePage key='home-page' /> );
        case Constants.ROUTING.PAGES.USERS:
            return ( <UsersPage key='users-page' /> );
        case Constants.ROUTING.PAGES.GAMES:
            return ( <GamesPage key='games-page' /> );
        case Constants.ROUTING.PAGES.BOOKINGS:
            return ( <BookingsPage key='bookings-page' /> );
        case Constants.ROUTING.PAGES.DISTRIBUTION:
            return ( <DistributionPage key='distribution-page' /> );
        case Constants.ROUTING.PAGES.EDIT_USER_INFO:
            return ( <EditUserInfoPage key='editUserInfo-page' /> );
        case Constants.ROUTING.PAGES.UPDATE_BOOKING:
            return ( <UpdateBookingPage key='updateBooking-page' /> );
        case Constants.ROUTING.PAGES.UPDATE_GAME:
            return ( <UpdateGamePage key='updateGame-page' /> );
    }
}

function getPageToRender(authData, currentPageId) {
    if (!authData) {
        return (
            <div>
                <AuthPage />
            </div>
        );
    }

    return (
        <div>
            <TopBar />
            { getPageComponent(currentPageId) }
        </div>
    );
}

class App extends React.Component {
    componentWillMount() {
        this.props.fetchAuthData();
    }

    render() {
        return (
            <div className="site large-6 small-12 small-centered">
                <Spinner />
                { getPageToRender(this.props.authData, this.props.currentPageId) }
            </div>
        );
    }
}

App.propTypes = {
    authData: React.PropTypes.object,
    currentPageId: React.PropTypes.string.isRequired,
    fetchAuthData: React.PropTypes.func.isRequired
};

module.exports = ReactReudx.connect(mapStateToProps, mapDispatchToProps)(App);