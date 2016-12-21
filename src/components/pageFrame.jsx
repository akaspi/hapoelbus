const React = require('react');

require('../styles/page.scss');

class PageFrame extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="header">
                    <label className="header-title">{ this.props.title }</label>
                </div>
                <div className="content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

PageFrame.PropTypes = {
    title: React.PropTypes.string
};

module.exports = PageFrame;