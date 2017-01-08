const _ = require('lodash');
const React = require('react');

const Translations = require('../utils/translations');

const PageTitle = require('./pageTitle');

require('../styles/formFrame.scss');

function createActionsButtons(disabled, onSubmit, onRemove) {

    function createRemoveButton() {
        return (
            <a key="remove-btn" onClick={onRemove} className="button alert more-space">
                <span>{ Translations.FORM_FRAME.REMOVE }</span>
                <i className="fa fa-trash" aria-hidden="true" />
            </a>
        );
    }

    return (
        <div className="action-buttons button-group stacked small-centered large-6 small-8 ">
            <a disabled={disabled} onClick={onSubmit} className="button success more-space">
                <span>{ Translations.FORM_FRAME.SUBMIT }</span>
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
                <PageTitle title={this.props.title} />

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