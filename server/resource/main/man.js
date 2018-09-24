
const dbconn = require('../../config/db-info.js')
const dbconnection = dbconn()

exports.man = function(req, callback){ 
	console.log('resource man');
	dbconnection.query("SELECT * FROM mem_info_mng where MEM_INFO_ID = '99999998'", (err, rows) => {
		if(err) throw err
        callback(rows)
        // res.send(rows)
	})
}