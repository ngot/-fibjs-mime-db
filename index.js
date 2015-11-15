/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

var fs = require('fs');
module.exports = JSON.parse(fs.readFile('db.json'));
