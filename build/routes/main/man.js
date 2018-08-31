'use strict';

var router = require('express').Router();
var dbconn = require('../../config/db-info.js');
var dbconnection = dbconn();

router.get('/man', function (req, res) {

	console.log('man in');
	dbconnection.query("SELECT * FROM mem_info_mng where MEM_INFO_ID = '99999998'", function (err, rows) {
		if (err) throw err;

		res.send(rows);
	});
});

module.exports = router;