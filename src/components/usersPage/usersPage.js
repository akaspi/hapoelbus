import * as _ from 'lodash';
import React from 'react';
import template from './usersPage.rt';
import {connect} from 'react-redux';
import {updateUser, removeUser} from '../../redux/actions/userActions';

const pickUsersFunctions = {
  ALL: user => true,
  MEMBERS: user => user.seasonTickets > 0,
  NON_MEMBERS: user => !user.seasonTickets,
  REQUESTS: user => user.requestForMembership,
};

const mapStateToProps = (state) => ({
  users: state.users,
  authData: state.authData
});

const mapDispatchToProps = dispatch => ({
  updateUser: (uid, user) => dispatch(updateUser(uid, user)),
  removeUser: (uid) => dispatch(removeUser(uid))
});

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingUserId: null,
      searchQuery: '',
      filter: 'ALL'
    };
  }

  getVisibleUsers() {
    return _.chain(this.props.users)
      .pickBy(pickUsersFunctions[this.state.filter])
      .pickBy(user => _.startsWith(user.firstName, this.state.searchQuery) || _.startsWith(user.lastName, this.state.searchQuery), this)
      .map((user, uid) => ({user, uid}))
      .sortBy('user.firstName')
      .value();
  }

  countSeasonTickets() {
    return _.chain(this.props.users)
      .pickBy(pickUsersFunctions.MEMBERS)
      .values()
      .sumBy('seasonTickets')
      .value();
  }

  countNonMembersUsers() {
    return _.chain(this.props.users)
      .pickBy(pickUsersFunctions.NON_MEMBERS)
      .size()
      .value();
  }

  countRequestsForMembership() {
    return _.chain(this.props.users)
      .pickBy(pickUsersFunctions.REQUESTS)
      .size()
      .value();
  }

  handleSearchQueryChange(e) {
    this.setState({searchQuery: e.target.value});
  }

  handleFilterChange(filter) {
    this.setState({filter});
  }

  onUserClick(uid) {
    this.setState({editingUserId: uid});
  }

  stopEditing() {
    this.setState({editingUserId: null, searchQuery: ''});
  }

  render() {
    return template.apply(this);
  }

  getUserTitle(user) {
    return user.firstName + ' ' + user.lastName;
  }

  getUserSubtitles(user) {
    return [user.phonePrefix + '-' + user.phoneNumber, user.email, 'כמות מנויים: ' + (user.seasonTickets || 0)];
  }

  getUserImage(user) {
    return user.imageSrc || 'http://image.flaticon.com/icons/svg/163/163804.svg';
  }
}

UsersPage.propTypes = {
  users: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(UsersPage);