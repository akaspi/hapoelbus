const React = require('react');

require('../styles/pageTitle.scss');

class PageTitle extends React.Component {
  render() {
    return (
      <div className="page-title">
        <label className="title">{this.props.title}</label>
      </div>
    );
  }
}

PageTitle.propTypes = {
  title: React.PropTypes.string.isRequired
};

module.exports = PageTitle;
