import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as config from 'config';
import * as clientDB from './utils/clientDB';

clientDB.initialize(config.firebase);

ReactDOM.render(React.createElement(Root), document.getElementById('app'));