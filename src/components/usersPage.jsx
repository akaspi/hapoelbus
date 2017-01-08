const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');
const classNames = require('classnames');

const usersPageTranslations = require('../utils/translations/usersPageTranslations');
const navigationConstants = require('../utils/navigationConstants');
const routingActions = require('../redux/actions/routingActions');

const ListItem = require('./listItem');
const PageTitle = require('./pageTitle');

const FILTERS = {
    ALL: 'ALL',
    MEMBERS: 'MEMBERS',
    REQUESTS: 'REQUESTS',
    NON_MEMBERS: 'NON_MEMBERS'
};

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navToEditUser: uid =>  dispatch(routingActions.navigateTo(navigationConstants.PAGES.EDIT_USER_INFO.val, { uid }))
    };
}

function countMembers(users) {
    return _.chain(users)
        .pickBy(pickUsersFunctions.MEMBERS)
        .values()
        .sumBy('seasonTickets')
        .value();
}

function countRequests(users) {
    return _.chain(users)
        .pickBy(pickUsersFunctions.REQUESTS)
        .size()
        .value();
}

function countNonMembers(users) {
    return _.chain(users)
        .pickBy(pickUsersFunctions.NON_MEMBERS)
        .size()
        .value();
}

function countAccordingToFilters(users) {
    return {
        [FILTERS.ALL]: _.size(users),
        [FILTERS.MEMBERS]: countMembers(users),
        [FILTERS.REQUESTS]: countRequests(users),
        [FILTERS.NON_MEMBERS]: countNonMembers(users),
    };
}

function getUserTitle(user) {
    return user.firstName + ' ' + user.lastName;
}

function getUserSubtitles(user) {
    return [user.phonePrefix + '-' + user.phoneNumber, user.email, 'כמות מנויים: ' + (user.seasonTickets || 0)];
}

function getUserImage(user) {
    return user.photoURL || 'http://image.flaticon.com/icons/svg/163/163804.svg';
}

const pickUsersFunctions = {
    ALL: () => true,
    MEMBERS: user => user.seasonTickets > 0,
    NON_MEMBERS: user => !user.seasonTickets,
    REQUESTS: user => user.requestForMembership,
};

function getVisibleUsers(users, filter, searchQuery) {
    return _.chain(users)
        .pickBy(pickUsersFunctions[filter])
        .pickBy(user => _.startsWith(user.firstName, searchQuery) || _.startsWith(user.lastName, searchQuery), this)
        .map((user, uid) => ({user, uid}))
        .sortBy('user.firstName')
        .value();
}

function createFilter(searchQuery, filter, handleFilterChange, handleSearchQueryChange, filterCounts) {

    function createFilterTabs() {
        return (
            <div className='column small-12 large-8'>
                <ul className='menu small-text'>
                    <li className={classNames({ active: filter === FILTERS.ALL})}>
                        <a onClick={handleFilterChange.bind(this, FILTERS.ALL)}>
                            <span>{usersPageTranslations.FILTER.TABS.ALL}</span>
                            <span>({ filterCounts[FILTERS.ALL] })</span>
                        </a>
                    </li>
                    <li className={classNames({ active: filter === FILTERS.MEMBERS})}>
                        <a onClick={handleFilterChange.bind(this, FILTERS.MEMBERS)}>
                            <span>{usersPageTranslations.FILTER.TABS.MEMBERS}</span>
                            <span>({ filterCounts[FILTERS.MEMBERS] })</span>
                        </a>
                    </li>
                    <li className={classNames({ active: filter === FILTERS.REQUESTS})}>
                        <a onClick={handleFilterChange.bind(this, FILTERS.REQUESTS)}>
                            <span>{usersPageTranslations.FILTER.TABS.REQUESTS}</span>
                            <span>({ filterCounts[FILTERS.REQUESTS] })</span>
                        </a>
                    </li>
                    <li className={classNames({ active: filter === FILTERS.NON_MEMBERS})}>
                        <a onClick={handleFilterChange.bind(this, FILTERS.NON_MEMBERS)}>
                            <span>{usersPageTranslations.FILTER.TABS.NON_MEMBERS}</span>
                            <span>({ filterCounts[FILTERS.NON_MEMBERS] })</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

    function createTextInput() {
        return (
            <div className='column small-12 large-4'>
                <div className="search">
                    <input
                        type="search"
                        className='search-input'
                        placeholder={usersPageTranslations.FILTER.SEARCH}
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                    />
                    <span className='search-icon'>
                        <i className='fa fa-search' />
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="filtering row expanded collapse">
            { createFilterTabs() }
            { createTextInput() }
        </div>
    );
}

function createUsersList(usersArr, onUserClick) {

    const onItemClick = uid => {
        onUserClick(uid);
    };

    const items = _.map(usersArr, userDef => {
       return (
           <ListItem
               key={'user' + userDef.uid}
               title={getUserTitle(userDef.user)}
               subtitles={getUserSubtitles(userDef.user)}
               onClick={onItemClick.bind(this, userDef.uid)}
               imageSrc={getUserImage(userDef.user)}
           />
       );
    });

    return (
        <div>
            { items }
        </div>
    );
}

function createNoUsersMessage() {
    return (
        <label className='filter-status'>
            <i className='fa fa-frown-o' aria-hidden='true' />
            <span>{usersPageTranslations.NO_USERS_FOUND}</span>
        </label>
    );
}

class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: FILTERS.ALL,
            filterCounts: countAccordingToFilters(this.props.users),
            searchQuery: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filterCounts: countAccordingToFilters(nextProps.users),
        });
    }

    handleSearchQueryChange = e => {
      this.setState({
          searchQuery: e.target.value
      });
    };

    handleFilterChange = filter => {
      this.setState({ filter });
    };

    render() {
        const visibleUsersArr = getVisibleUsers(this.props.users, this.state.filter, this.state.searchQuery);

        return (
            <div className='small-centered dashboard-page'>

                <PageTitle title={usersPageTranslations.TITLE} />

                { createFilter(this.state.searchQuery, this.state.filter, this.handleFilterChange, this.handleSearchQueryChange, this.state.filterCounts) }

                { _.isEmpty(visibleUsersArr) ? createNoUsersMessage() : createUsersList(visibleUsersArr, this.props.navToEditUser) }
            </div>
        );
    }
}

UsersPage.propTypes = {
    users: React.PropTypes.object,
    navToEditUser: React.PropTypes.func.isRequired
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UsersPage);