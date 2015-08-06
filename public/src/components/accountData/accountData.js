define(['react', '../../actions/accountAction', '../../stores/accountStore', './accountData.rt'], function (React, accountAction, accountStore, template) {

    return React.createClass({
        mixins: [ React.addons.LinkedStateMixin ],
        getInitialState: function () {
            return {
                email: '',
                displayName: '',
                phone: '',
                maxSeats: ''
            }
        },
        handleCreateAccount: function () {
            var accountData = this.state;
            accountAction.createAccount(accountData);
        },
        render: template
    });
});
