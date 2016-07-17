import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';
import { loginWithGoogle, loginWithFacebook, signUpWithPassword } from '../../redux/actions/dbActionsCreator';

const mapStateToProps = (state) => ({
  usersInfo: state.usersInfo,
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithFacebook: () => dispatch(loginWithFacebook()),
  signUpWithPassword: (email, password, userInfo) => dispatch(signUpWithPassword(email, password, userInfo))
});

const HomePage = React.createClass({
  displayName: 'HomePage',
  getInitialState() {
    return {
      emailAuthentication: false,
      signUpFormVisible: false
    };
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.currentUser !== this.props.currentUser) {
      this.setState({
        email: nextProps.currentUser.getIn(['email'])
      });
    }
  },
  shouldShowSignUpForm: function() {
    return this.props.currentUser.getIn(['uid']) || this.state.emailAuthentication;
  },
  loginWithEmail: function() {
    this.setState({
      emailAuthentication: true
    });
  },
  onChange: function(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  },
  submit: function() {
    if (this.state.emailAuthentication) {
      this.props.signUpWithPassword(this.state.email, this.state.password);
    }
  },
  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomePage);