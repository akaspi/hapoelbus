(function() {
    var React = require('react/addons');
    var RootComponent = require('./components/root/root');

    require("react-tap-event-plugin")();

    window.React = React;

    React.render(React.createElement(RootComponent), document.body);
})();
