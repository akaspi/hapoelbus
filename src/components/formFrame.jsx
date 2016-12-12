const _ = require('lodash');
const React = require('react');

require('../styles/formFrame.scss');

const formFrameTranslations = require('../utils/translations/formFrameTranslations');

function createHeader(title, onClose) {

    function createBackButton() {
        return (
            <button className="back-btn" key="back-btn" onClick={onClose}>
                <i className="fa fa-arrow-left" aria-hidden="true"/>
            </button>
        );
    }

    return (
        <div className="header">
            <label className="header-title">{title}</label>
            { _.isFunction(onClose) ? createBackButton() : null }
        </div>
    );
}

function createActionsButtons(disabled, onSubmit, onRemove) {

    function createRemoveButton() {
        return (
            <a key="remove-btn" onClick={onRemove} className="button alert more-space">
                <span>{ formFrameTranslations.REMOVE }</span>
                <i className="fa fa-trash" aria-hidden="true" />
            </a>
        );
    }

    return (
        <div className="action-buttons button-group stacked small-centered large-6 small-8 ">
            <a disabled={disabled} onClick={onSubmit} className="button success more-space">
                <span>{ formFrameTranslations.SUBMIT }</span>
                <i className="fa fa-check" aria-hidden="true" />
            </a>
            { _.isFunction(onRemove) ? createRemoveButton() : null }
        </div>
    );
}

class FormFrame extends React.Component {
    render() {
        return (
            <div className="form-frame">
                { createHeader(this.props.title, this.props.onClose) }

                <div className="content">
                    {this.props.children}
                </div>

                { createActionsButtons(this.props.disabled, this.props.onSubmit, this.props.onRemove) }
            </div>
        );
    };
}

FormFrame.propTypes = {
    title: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool,
    onSubmit: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func,
    onClose: React.PropTypes.func
};

module.exports = FormFrame;