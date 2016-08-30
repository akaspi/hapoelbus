import React from 'react';
import template from './homePage.rt';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  authData: state.authData
});

class HomePage extends React.Component {
  render() {
    return template.apply(this);
  }
}

HomePage.propTypes = {
  authData: React.PropTypes.object
};

module.exports = connect(mapStateToProps)(HomePage);