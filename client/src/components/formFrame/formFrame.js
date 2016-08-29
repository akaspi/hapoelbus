import * as _ from 'lodash';
import React from 'react';
import template from './formFrame.rt';

class FormFrame extends React.Component {
  onSubmit() {
    this.props.onSubmit();
    this.props.onClose();
  }

  onRemove() {
    this.props.onRemove();
    this.props.onClose();
  }

  render() {
    return template.apply(this);
  }
}

FormFrame.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func,
  title: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  hideBack: React.PropTypes.bool
};

module.exports = FormFrame;