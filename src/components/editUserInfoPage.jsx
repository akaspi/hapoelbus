const React = require('react');
const ReactRedux = require('react-redux');

const UserForm = require('./userForm.jsx');

const navigationActions = require('../redux/actions/navigationActions');
const navigationConstants = require('../utils/navigationConstants');

function mapStateToProps(state) {
    const uidToEdit = state.routing.current.params.uid || state.authData.uid;
    return {
        uid: uidToEdit
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigateTo: pageId => dispatch(navigationActions.navigateTo(pageId))
    };
}

class EditorUserInfoPage extends React.Component {
    onFormClose = () => {
        this.props.navigateTo(navigationConstants.PAGES.HOME.val);
    };

    render() {
        return (
            <UserForm uid={this.props.uid} onClose={this.onFormClose}/>
        )
    }
}

EditorUserInfoPage.propTypes = {
    uid: React.PropTypes.string.isRequired,
    navigateTo: React.PropTypes.func.isRequired
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(EditorUserInfoPage);