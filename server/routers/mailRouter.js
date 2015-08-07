'use strict';

var express = require('express');
var router = express.Router();
var mailService = require('../services/mailService');

router.get('/test', function(req, res) {
    mailService.send();
    res.send('sent');
});

module.exports = router;