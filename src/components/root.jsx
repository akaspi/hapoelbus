const React = require('react');
const ReactRedux = require('react-redux');

const makeStore = require('../redux/makeStore');

const App = require('./app');

class Root extends React.Component {
    render() {
        return (
            <ReactRedux.Provider store={makeStore()}>
                <App />
            </ReactRedux.Provider>
        );
    }
}

module.exports = Root;