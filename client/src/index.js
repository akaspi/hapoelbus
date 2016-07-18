import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root/root';

ReactDOM.render(React.createElement(Root), document.getElementById('app'));

// HMR hack. should be fixed somehow...
if (module.hot) {
  module.hot.accept();
}