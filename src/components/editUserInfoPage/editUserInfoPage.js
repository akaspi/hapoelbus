import React from 'react';
import template from './editUserInfoPage.rt';
import { connect } from 'react-redux';
import { navigateTo } from '../../redux/actions/navigationActions';

const navigationConstants = require('../../utils/navigationConstants');

const mapStateToProps = (state) => ({
  authData: state.authData,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  navigateTo: pageId => dispatch(navigateTo(pageId))
});

class EditorUserInfoPage extends React.Component {
  updateUserInfo(uid, user) {
    user.photoURL = this.props.authData.photoURL;
    this.props.updateUser(uid, user);
  }

  onFormClose = () => {
    this.props.navigateTo(navigationConstants.PAGES.HOME.val);
  };

  render() {
    return template.apply(this);
  }
}

EditorUserInfoPage.propTypes = {
  authData: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EditorUserInfoPage);