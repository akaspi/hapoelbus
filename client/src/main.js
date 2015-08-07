(function() {
    var React = require('react/addons');
    var RootComponent = require('./components/root/root');

    window.React = React;

    React.render(React.createElement(RootComponent), document.getElementById('view'));
})();
