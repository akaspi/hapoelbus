define(['react', '../../actions/loginAction', '../../actions/accountAction', './loginBox.rt'], function(React, loginAction, accountAction, template) {
    'use strict';

    return React.createClass({
        mixins: [ React.addons.LinkedStateMixin ],
        getInitialState: function() {
          return {
              email: '',
              password: ''
          };
        },
        onLogin: function() {
            loginAction.login(this.state.email, this.state.password);
        },
        onCreateUser: function() {
            accountAction.createUser(this.state.email, this.state.password);
        },
        onSocialLogin: function(provider) {
            loginAction.socialLogin(provider);
        },
        render: template
    });
});
