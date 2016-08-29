import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  errorMsg: state.errorMsg,
  authData: state.authData
});

class HomePage extends React.Component {
  render() {
    return template.apply(this);
  }
}

HomePage.propTypes = {
  errorMsg: React.PropTypes.string,
  authData: React.PropTypes.object
};

module.exports = connect(mapStateToProps)(HomePage);