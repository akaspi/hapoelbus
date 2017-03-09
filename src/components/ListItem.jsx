import _ from 'lodash';
import React from 'react';

require('../styles/listItem.scss');

const ListItem = ({ title, subtitles, imageSrc, onClick }) => (
    <div className="list-item small-12" onClick={onClick}>
        <img className="list-image" src={imageSrc}/>
        <div className="list-titles">
            <label className="title large-text hide-for-print">{title}</label>
            { _.map(subtitles, (subtitle, key) => <label key={'subtitle-' + key} className="subtitle small-12 show-for-small-only">{subtitle}</label>)}
            { _.map(subtitles, (subtitle, key) => <label key={'subtitle-large-' + key} className="subtitle inline hide-for-small-only">{subtitle}</label>)}
        </div>
    </div>
);

ListItem.propTypes = {
    title: React.PropTypes.string,
    subtitles: React.PropTypes.arrayOf(React.PropTypes.string),
    imageSrc: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default ListItem;