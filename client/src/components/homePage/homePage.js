import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';
import { fetchAuthData } from '../../redux/actions/authActions';

const mapStateToProps = (state) => ({
  errorMsg: state.errorMsg,
  authData: state.authData
});

const mapDispatchToProps = (dispatch) => ({
  fetchAuthData: () => dispatch(fetchAuthData())
});

const HomePage = React.createClass({
  displayName: 'HomePage',

  propTypes: {
    errorMsg: React.PropTypes.string,
    authData: React.PropTypes.object,
    fetchAuthData: React.PropTypes.func.isRequired
  },

  componentWillMount() {
    this.props.fetchAuthData();
  },

  render: template
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomePage);