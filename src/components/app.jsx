const React = require('react');
const ReactReudx = require('react-redux');

const authActions = require('../redux/actions/authActions');
const navigationConstatns = require('../utils/navigationConstants');

const Spinner = require('./spinner');
const TopBar = require('./topBar');
const AuthPage = require('./authPage');
const HomePage = require('./homePage');
const UsersPage = require('./usersPage');
const GamesPage = require('./gamesPage');
const BookingsPage = require('./bookingsPage/bookingsPage');
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
        case navigationConstatns.PAGES.HOME.val:
            return ( <HomePage key='home-page' /> );
        case navigationConstatns.PAGES.USERS.val:
            return ( <UsersPage key='users-page' /> );
        case navigationConstatns.PAGES.EVENTS.val:
            return ( <GamesPage key='games-page' /> );
        case navigationConstatns.PAGES.BOOKINGS.val:
            return ( <BookingsPage key='bookings-page' /> );
        case navigationConstatns.PAGES.DISTRIBUTION.val:
            return ( <DistributionPage key='distribution-page' /> );
        case navigationConstatns.PAGES.EDIT_USER_INFO.val:
            return ( <EditUserInfoPage key='editUserInfo-page' /> );
        case navigationConstatns.PAGES.UPDATE_BOOKING.val:
            return ( <UpdateBookingPage key='updateBooking-page' /> );
        case navigationConstatns.PAGES.UPDATE_GAME.val:
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