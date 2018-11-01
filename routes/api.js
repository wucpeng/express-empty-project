'use strict';
const express = require('express');
const _ = require('underscore');
const log = require('./hztTool/logUt.js').getLogger();
const ut = require('./hztTool/util.js');

const app = exports.app = express();
app.use(express.static(__dirname + '/../public'));

app.get('/test/api', (req, res)=> {
    log.debug('test/api');
    ut.testData();
    res.send(200, {msg: "test api success"});
});
