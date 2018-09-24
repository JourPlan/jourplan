
const dbconn = require('../../config/db-info.js')
const dbconnection = dbconn()

/************************************* 
 *	login query 등록
 *  조회 = get
 *  수정 = set
 *  등록 = reg
 *  삭제 = del
*************************************/


/************************************* 
 *  getMemInfo
 *  회원정보 조회 query
*************************************/
exports.getMemInfo = function(req, callback){ 
	console.log('resource login222');
	dbconnection.query(
        "SELECT *                           "+ 
        "  FROM MEM_INFO_MNG                "+
        " WHERE MEM_INFO_ID = '" + req + "'    "
        , (err, rows) => {
            if(err) throw err
            callback(rows)
            // res.send(rows)
	})
}