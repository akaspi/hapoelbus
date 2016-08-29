import React from 'react';
import template from './usersPage.rt';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  users: state.users
});

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingUser: {}
    }
  }

  onUserClick(user) {
    this.setState({editingUser: user})
  }

  stopEditing() {
    this.setState({editingUser: null})
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
    return user.imageSrc || 'http://image.flaticon.com/icons/svg/163/163804.svg'
  }
}

UsersPage.propTypes = {
  users: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps)(UsersPage);