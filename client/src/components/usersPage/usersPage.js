import React from 'react';
import template from './usersPage.rt';
import {connect} from 'react-redux';
import {updateUser} from '../../redux/actions/userActions';


const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  updateUser: (uid, user) => dispatch(updateUser(uid, user))
});

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingUserId: null
    }
  }

  onUserClick(uid) {
    this.setState({editingUserId: uid})
  }

  stopEditing() {
    this.setState({editingUserId: null})
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(UsersPage);