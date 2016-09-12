import React from 'react';
import template from './topBar.rt';
import {connect} from 'react-redux';
import * as Constants from '../../utils/constants';

import {signOut} from '../../redux/actions/authActions';
import {navigateTo} from '../../redux/actions/navigationActions';

const mapStateToProps = state => ({
  authData: state.authData,
  currentPage: state.currentPage,
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (page) => dispatch(navigateTo(page)),
  signOut: () => dispatch(signOut())
});


class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false
    };
  }

  getUserTitle() {
    const user = this.props.authData && this.props.users[this.props.authData.uid];
    if (!user) {
      return 'משתמש';
    }
    return user.firstName;
  }

  onMenuClick(){
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }

  onMenuItemClick(page){
    this.props.navigateTo(page);
    this.onMenuClick();
  }

  getPages() {
    return _.filter(Constants.PAGES, {visible: true});
  }

  render() {
    return template.apply(this);
  }
}

TopBar.propTypes = {
  authData: React.PropTypes.object
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(TopBar);