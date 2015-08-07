'use strict';

var _ = require('lodash');

var _storesCallbacks = [];

module.exports =  {
    register: function (store_cb) {
        _storesCallbacks.push(store_cb);
    },
    dispatch: function (payload) {
        _.forEach(_storesCallbacks, function (store_cb) {
            store_cb(payload);
        });
    }
};
