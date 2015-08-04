define(['react', '../../actions/authAction', './loginBox.rt'], function(React, authAction, template) {
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
            authAction.login(this.state.email, this.state.password);
        },
        onSocialLogin: function(provider) {
            authAction.socialLogin(provider);
        },
        render: template
    });
});
