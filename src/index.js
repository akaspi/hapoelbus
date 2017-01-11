import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as config from 'config';
import * as clientDB from './utils/clientDB';
import * as db from '../apis/utils/db';

clientDB.initialize(config.firebase);
db.initialize(config.firebase);

ReactDOM.render(React.createElement(Root), document.getElementById('app'));