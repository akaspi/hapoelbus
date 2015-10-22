(function() {
    var React = require('react/addons');
    var RootComponent = require('./components/root/root');
    var _ = require('lodash');

    require('./main.scss');

    require("react-tap-event-plugin")();

    window.React = React;

    var stores = [
        require('./stores/userStore'),
        require('./stores/gamesStore')
    ];

    window.authAPI = require('./API/authAPI');

    _.forEach(stores, function(store) {
        if (_.isFunction(store.init)) {
            store.init();
        }
    });

    React.render(React.createElement(RootComponent), document.body);

})();
