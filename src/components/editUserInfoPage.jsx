const React = require('react');
const ReactRedux = require('react-redux');

const UserForm = require('./userForm.jsx');

const routingActions = require('../redux/actions/routingActions');
const Constants = require('../utils/constants');

function mapStateToProps(state) {
    const uidToEdit = state.routing.current.params.uid || state.authData.uid;
    return {
        uid: uidToEdit,
        goHomeAfterEditing: state.routing.history.length === 1
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigateHome: () => dispatch(routingActions.reset(Constants.ROUTING.PAGES.HOME)),
        navigateBack: () => dispatch(routingActions.navigateBack())
    };
}

class EditorUserInfoPage extends React.Component {
    onFormClose = () => {
        if (this.props.goHomeAfterEditing) {
            this.props.navigateHome();
        } else {
            this.props.navigateBack();
        }
    };

    render() {
        return (
            <UserForm uid={this.props.uid} onClose={this.onFormClose}/>
        )
    }
}

EditorUserInfoPage.propTypes = {
    uid: React.PropTypes.string.isRequired,
    navigateBack: React.PropTypes.func.isRequired,
    navigateHome: React.PropTypes.func.isRequired,
    goHomeAfterEditing: React.PropTypes.bool
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(EditorUserInfoPage);