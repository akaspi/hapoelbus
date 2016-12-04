const _ = require('lodash');
const React = require('react');

require('../styles/listItem.scss');

class ListItem extends React.Component {
    render() {
        return (
            <div className="list-item small-12" onClick={this.props.onClick}>
                <img className="list-image" src={this.props.imageSrc}/>
                <div className="list-titles">
                    <label className="title large-text hide-for-print">{this.props.title}</label>
                    { _.map(this.props.subtitles, (subtitle, key) => <label key={'subtitle-' + key} className="subtitle small-12 show-for-small-only">{subtitle}</label>)}
                    { _.map(this.props.subtitles, (subtitle, key) => <label key={'subtitle-large-' + key} className="subtitle inline hide-for-small-only">{subtitle}</label>)}
                </div>
            </div>
        );
    }
}

ListItem.propTypes = {
    title: React.PropTypes.string,
    subtitles: React.PropTypes.array,
    imageSrc: React.PropTypes.string,
    onClick: React.PropTypes.func
};

module.exports = ListItem;