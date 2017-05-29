import React from 'react';
import { Provider } from 'react-redux';
import makeStore from '../redux/makeStore';
import App from './app';

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={makeStore()}>
                <App />
            </Provider>
        );
    }
}