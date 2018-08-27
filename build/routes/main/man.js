'use strict';

var router = require('express').Router();

router.get('/man', function (req, res) {
	connection.query("SELECT * FROM mem_info_mng where MEM_INFO_ID = '99999999'", function (err, rows) {
		if (err) throw err;

		res.send(rows);
	});
});

module.exports = router;