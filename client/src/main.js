(function() {
    var React = require('react');
    var ReactDOM = require('react-dom');

    var RootComponent = require('./components/root/root');
    var _ = require('lodash');

    require('./main.scss');

    require("react-tap-event-plugin")();

    window.React = React;

    var stores = [
        require('./stores/usersDataStore'),
        require('./stores/gamesStore')
    ];

    window.authAPI = require('./API/authAPI');
    window.usersDataAPI = require('./API/usersDataAPI');
    window.gamesAPI = require('./API/gamesAPI');
    window.bookingAPI = require('./API/bookingAPI');

    _.forEach(stores, function(store) {
        if (_.isFunction(store.init)) {
            store.init();
        }
    });

    ReactDOM.render(React.createElement(RootComponent), document.getElementById('App'));

})();
