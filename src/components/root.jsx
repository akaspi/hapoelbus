import React from 'react';
import { Provider } from 'mobx-react';
import createAPI from '../../api/createAPI';
import App from './app.jsx';

const ReactRedux = require('react-redux');
const makeStore = require('../redux/makeStore');

export default class Root extends React.Component {
    render() {
        return (
            <ReactRedux.Provider store={makeStore()}>
                <Provider { ... createAPI() }>
                    <App />
                </Provider>
            </ReactRedux.Provider>
        );
    }
}