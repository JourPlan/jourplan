
const router = require('express').Router();
const dbconn = require('../../config/db-info.js');
const dbconnection = dbconn();


router.get('/man', (req, res) =>{
	
	console.log('man in');
	dbconnection.query("SELECT * FROM mem_info_mng where MEM_INFO_ID = '99999998'", (err, rows) => {
		if(err) throw err;

		res.send(rows);
	});
});

module.exports = router;