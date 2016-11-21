import React from 'react';
import template from './editUserInfoPage.rt';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/actions/userActions';

const mapStateToProps = (state) => ({
  authData: state.authData,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  updateUser: (uid, user) => dispatch(updateUser(uid, user))
});

class EditorUserInfoPage extends React.Component {
  updateUserInfo(uid, user) {
    user.photoURL = this.props.authData.photoURL;
    this.props.updateUser(uid, user);
  }

  render() {
    return template.apply(this);
  }
}

EditorUserInfoPage.propTypes = {
  authData: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EditorUserInfoPage);