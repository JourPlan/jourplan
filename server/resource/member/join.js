
const dbconn = require('../../config/db-info.js')
const dbconnection = dbconn()

/************************************* 
 *	join query 등록
 *  조회 = get
 *  수정 = set
 *  등록 = reg
 *  삭제 = del
*************************************/


/************************************* 
 *  regMemInfo
 *  회원정보 등록 query
*************************************/
exports.regMemInfo = function(sJoin, callback){ 
    console.log('resource 등록 JOIN');
    console.log('resource == ' + sJoin.email);
    
    dbconnection.query(
        "SELECT *                           "+ 
        "  FROM MEM_INFO_MNG                "+
        " WHERE MEM_INFO_ID = '99999999'    "
        , (err, rows) => {
            if(err) throw err
            callback(rows)
            // res.send(rows)
	})
	// dbconnection.query(
    //     " INSERT INTO MEM_INFO_MNG( "+
    //     "" +
    //     ") VALUES (" +

    //     ")                           "+ 
    //     "  FROM MEM_INFO_MNG                "+
    //     " WHERE MEM_INFO_ID = '" + req + "'    "
    //     , (err, rows) => {
    //         if(err) throw err
    //         callback(rows)
    //         // res.send(rows)
	// })
}