"use strict";

var dMan = require('../../resource/main/man.js');

exports.man = function (req, res) {
	console.log("routes man2");
	dMan.man(req, function (aa) {
		console.log("aa1 == " + aa[0].MEM_INFO_ID);
		console.log("aa2 == " + JSON.stringify(aa));

		res.send(aa);
	});
};

// router.get('/man', (req, res) =>{

// 	console.log('man in');
// 	dbconnection.query("SELECT * FROM mem_info_mng where MEM_INFO_ID = '99999998'", (err, rows) => {
// 		if(err) throw err;

// 		res.send(rows);
// 	});
// });

// module.exports = router;