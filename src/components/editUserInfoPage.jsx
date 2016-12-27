const React = require('react');
const ReactRedux = require('react-redux');

const UserForm = require('./userForm.jsx');

const navigationActions = require('../redux/actions/navigationActions');

function mapStateToProps(state) {
    const uidToEdit = state.routing.current.params.uid || state.authData.uid;
    return {
        uid: uidToEdit
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigateBack: pageId => dispatch(navigationActions.navigateBack())
    };
}

class EditorUserInfoPage extends React.Component {
    onFormClose = () => {
        this.props.navigateBack();
    };

    render() {
        return (
            <UserForm uid={this.props.uid} onClose={this.onFormClose}/>
        )
    }
}

EditorUserInfoPage.propTypes = {
    uid: React.PropTypes.string.isRequired,
    navigateBack: React.PropTypes.func.isRequired
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(EditorUserInfoPage);