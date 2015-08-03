define(['react', '../../actions/authAction', './userData.rt'], function (React, authAction, template) {

    return React.createClass({
        mixins: [ React.addons.LinkedStateMixin ],
        logOut: function () {
            authAction.logOut();
        },
        render: template
    });
});
