import React from 'react';
import template from './listItem.rt';

class ListItem extends React.Component {
  render() {
    return template.apply(this);
  }
}

ListItem.propTypes = {
  title: React.PropTypes.string,
  subtitles: React.PropTypes.array,
  imageSrc: React.PropTypes.string,
  onClick: React.PropTypes.func
};

module.exports = ListItem;