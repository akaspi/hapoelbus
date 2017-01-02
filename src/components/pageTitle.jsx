const React = require('react');
const ReactRedux = require('react-redux');

const navigationActions = require('../redux/actions/navigationActions');

require('../styles/pageTitle.scss');

function mapDispatchToProps(dispatch) {
  return {
    navigateBack: () => dispatch(navigationActions.navigateBack())
  };
}

class PageTitle extends React.Component {
  render() {
    return (
      <div className='page-title'>
        <label className='title'>{this.props.title}</label>
        <button className='back-btn' key='back-btn' onClick={this.props.navigateBack}>
          <i className='fa fa-arrow-left' aria-hidden='true' />
        </button>
      </div>
    );
  }
}

PageTitle.propTypes = {
    title: React.PropTypes.string.isRequired,
    navigateBack: React.PropTypes.func.isRequired
};

module.exports = ReactRedux.connect(null, mapDispatchToProps)(PageTitle);
